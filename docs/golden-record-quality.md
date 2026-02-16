# Golden Record Quality Computation

This document explains how quality scores are calculated for Golden Records in the system.

## Overview

Quality measures how well a Golden Record is corroborated by external data sources. A higher quality score indicates that multiple trusted sources confirm the record's accuracy.

## Quality Formula

### Individual Golden Record Quality

Each Golden Record's quality is computed using this formula:

```
quality = Σ(sourceWeight × matchScore) / totalAvailableWeight
```

Where:

- **sourceWeight** = The weight assigned to each data source
- **matchScore** = The similarity score (0.0 to 1.0) when the source record was linked (See reconciliation for a detailed explanation)
- **totalAvailableWeight** = Sum of all registered source weights (excluding Golden)

### Source Weights

| Source | Weight | Description                             |
| ------ | ------ | --------------------------------------- |
| CACLR  | 5.0    | Official cadastral data (highest trust) |
| BDA    | 3.0    | Address database                        |
| OSM    | 2.0    | OpenStreetMap community data            |
| Golden | 0.0    | Excluded from quality calculation       |

**Total Available Weight** = 5.0 + 3.0 + 2.0 = **10.0**

### Match Score

The `matchScore` stored in each linked record entry comes from the reconciliation process. It's the weighted average of individual field similarities:

```
matchScore = (cityScore × cityWeight +
              streetScore × streetWeight +
              postcodeScore × postcodeWeight +
              numberScore × numberWeight +
              geoScore × geoWeight) / totalWeight
```

See [reconciliation.md](reconciliation.md) for details on how match scores are computed.

## Example Calculations

### Example 1: Well-corroborated Record

A Golden Record linked to:

- CACLR record with matchScore = 0.95
- BDA record with matchScore = 0.90
- OSM record with matchScore = 0.85

```
quality = (5.0 × 0.95 + 3.0 × 0.90 + 2.0 × 0.85) / 10.0
        = (4.75 + 2.70 + 1.70) / 10.0
        = 9.15 / 10.0
        = 0.915 (91.5%)
```

### Example 2: Partially Corroborated Record

A Golden Record linked to only:

- CACLR record with matchScore = 0.92

```
quality = (5.0 × 0.92) / 10.0
        = 4.60 / 10.0
        = 0.46 (46%)
```

Even with a high match score, the quality is limited because only one source confirms the record.

### Example 3: Low-trust Source Only

A Golden Record linked to only:

- OSM record with matchScore = 1.0 (perfect match)

```
quality = (2.0 × 1.0) / 10.0
        = 2.0 / 10.0
        = 0.20 (20%)
```

The quality ceiling is determined by the source weight.
