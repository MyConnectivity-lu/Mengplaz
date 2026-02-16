# Reconciliation Parameters

This document explains the configurable parameters used during the address reconciliation process.

## Overview

When reconciling source records against the Golden database, four categories of parameters control the matching behavior:

1. **Similarity Thresholds** - Minimum scores required to consider a match
2. **Scoring Weights** - Relative importance of each field in the overall score
3. **Geo Distance** - Geographic distance decay settings

---

## Similarity Thresholds

These thresholds determine the minimum similarity score (0.0 to 1.0) required for a candidate to be considered at each level of the search.

| Parameter             | Default | Description                                              |
| --------------------- | ------- | -------------------------------------------------------- |
| City Threshold        | 0.7     | Minimum Jaro-Winkler similarity for city name matching   |
| Street Threshold      | 0.7     | Minimum Jaro-Winkler similarity for street name matching |
| Postcode Threshold    | 0.4     | Minimum postcode score to consider a POI match           |
| Coordinates Threshold | 0.7     | Minimum geo score for coordinate-based fallback matching |
| Max Candidates        | 10      | Maximum number of candidates returned per source record  |
| Deep Search           | false   | Enable global POI fallback when no street-level candidates are found (heavy) |

### How Thresholds Work

1. **City Search**: Only cities with similarity >= City Threshold are considered
2. **Street Search**: Within matched cities, only streets with similarity >= Street Threshold are considered
3. **POI Search**: Within matched streets, POIs are filtered by Postcode Threshold and house number equality
4. **Deep Search (Global POI Fallback)**: If enabled and no street-level candidates are found, a global POI search runs with the same thresholds, computing city/street scores from each POI's own street reference. **Off by default** as it is a heavy operation that scans all POIs in the database.
5. **Coordinate Fallback**: If still no candidates, records within geographic range with geo score >= Coordinates Threshold are matched

---

## Postcode and House Number Scoring

### Postcode Score

Uses **numeric distance** with a configurable max distance (default: 200). Score decays linearly from 1.0 (exact match) to 0.0 (at max distance).

```
diff = abs(sourcePostcode - candidatePostcode)

if diff >= postcodeMaxDistance:
    score = 0.0
else:
    score = 1.0 - diff / postcodeMaxDistance
```

Example with postcodeMaxDistance=200:
| Source | Candidate | Diff | Score |
|--------|-----------|------|-------|
| 1234   | 1234      | 0    | 1.00  |
| 1234   | 1244      | 10   | 0.95  |
| 1234   | 1334      | 100  | 0.50  |
| 1234   | 1434      | 200  | 0.00  |

If either postcode cannot be parsed as a number, the scoring falls back to Jaro-Winkler string similarity.

### House Number Score

The number part must match exactly. If it does, the multiple code (e.g., "A", "bis") determines the final score: exact code match = 1.0, code mismatch = 0.8.

| Source | Candidate | Score |
|--------|-----------|-------|
| 12A    | 12A       | 1.00  |
| 12A    | 12B       | 0.80  |
| 20     | 20D       | 0.80  |
| 20A    | 20A       | 1.00  |
| 12     | 13        | 0.00  |

---

## Geo Distance Parameters

Controls how geographic distance affects the geo score.

| Parameter    | Default     | Description                                      |
| ------------ | ----------- | ------------------------------------------------ |
| Min Distance | 0 meters    | Distance below which geo score is 1.0 (perfect)  |
| Max Distance | 1000 meters | Distance above which geo score is 0.0 (no match) |

### Geo Score Formula

```
if distance <= minDistance:
    geoScore = 1.0  (perfect match)

if distance > maxDistance:
    geoScore = 0.0  (no match)

if minDistance < distance <= maxDistance:
    effectiveDistance = distance - minDistance
    effectiveRange = maxDistance - minDistance
    geoScore = (1 - effectiveDistance/effectiveRange)^2
```

### Decay Curve

The quadratic decay (`^2`) creates a curve where:

- Score drops slowly near minDistance
- Score drops rapidly as it approaches maxDistance

Example with minDistance=0, maxDistance=1000:
| Distance (m) | Geo Score |
|--------------|-----------|
| 0 | 1.00 |
| 100 | 0.81 |
| 250 | 0.56 |
| 500 | 0.25 |
| 750 | 0.06 |
| 1000 | 0.00 |

Example with minDistance=50, maxDistance=500:
| Distance (m) | Geo Score |
|--------------|-----------|
| 0-50 | 1.00 |
| 100 | 0.94 |
| 200 | 0.75 |
| 350 | 0.25 |
| 500 | 0.00 |

---

## Scoring Weights

The overall match score is a weighted average of individual field scores. Weights determine relative importance.

| Field    | Default Weight | Description                               |
| -------- | -------------- | ----------------------------------------- |
| City     | 4.0            | City name similarity (Jaro-Winkler)       |
| Street   | 3.0            | Street name similarity (Jaro-Winkler)     |
| Postcode | 3.0            | Postal code similarity (numeric distance) |
| Number   | 1.0            | House number + multiple code (exact match) |
| Geo      | 3.0            | Geographic proximity score                |

### Overall Score Formula

```
overallScore = (cityScore * cityWeight +
                streetScore * streetWeight +
                postcodeScore * postcodeWeight +
                numberScore * numberWeight +
                geoScore * geoWeight) / totalWeight

where totalWeight = cityWeight + streetWeight + postcodeWeight + numberWeight + geoWeight
```

With default weights (total = 14):

- City contributes ~28.6% (4/14)
- Street contributes ~21.4% (3/14)
- Postcode contributes ~21.4% (3/14)
- Number contributes ~7.1% (1/14)
- Geo contributes ~21.4% (3/14)

---

## Deep Search

When enabled, deep search adds a global POI fallback step to the search pipeline. If the normal city/street matching produces zero candidates for a source record, the system searches **all POIs in the entire database** instead of only those under matched streets.

For each POI found globally, the city and street scores are derived from the POI's own street reference rather than from a pre-matched city/street pair. This makes it possible to find matches even when the source record's city or street name is too different to pass the similarity thresholds during the normal hierarchical search.

**This option is off by default** because scanning all POIs is significantly more expensive than the scoped city > street > POI search. Enable it when you suspect records are failing to match due to severely misspelled or missing city/street data and you are willing to accept longer reconciliation times.

---

## Search Pipeline

The search for each source record follows this pipeline:

1. **City matching** - Find cities by name similarity (Jaro-Winkler, including aliases)
2. **Street matching** - Within each matched city, find streets by name similarity
3. **POI matching** - Within each matched street, filter POIs by postcode and number thresholds, compute all scores, and track top-N candidates
4. **Perfect match short-circuit** - If any candidate has overallScore == 1.0, return immediately with all perfect matches
5. **Deep search (global POI fallback)** - If `deepSearch` is enabled and no candidates found via city/street path, search all POIs globally (city/street scores derived from each POI's own street). Disabled by default because it is expensive.
6. **Geo-circle fallback** - If still no candidates and the source has coordinates, search by geographic proximity within 1km radius

---

## Tuning Guidelines

### Higher Thresholds

- Fewer candidates returned
- Higher precision (fewer false positives)
- May miss valid matches with minor variations

### Lower Thresholds

- More candidates returned
- Higher recall (fewer false negatives)
- May include incorrect matches
