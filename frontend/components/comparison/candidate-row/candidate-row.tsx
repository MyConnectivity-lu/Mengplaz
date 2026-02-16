import { getMatchQuality } from '~/common/utils';
import './candidate-row.css';
import { LinkEvent } from '../record-comparison-view/record-comparison-view';

export interface ViewCandidateEvent {
  candidate: gc.privateApi.MatchedCandidateDetail;
  sourceRecord: gc.POIFullRecordRef;
}

function renderAliases(aliases: gc.mengplaz.Alias[] | null): HTMLElement {
  if (!aliases || aliases.length === 0) {
    return (<span>-</span>) as HTMLElement;
  }
  return (
    <div className="alias-list">
      {aliases.map((a) => (
        <div className="alias-item" title={a.value}>
          {a.value}
        </div>
      ))}
    </div>
  ) as HTMLElement;
}

export function createCandidateRow(candidate: gc.privateApi.MatchedCandidateDetail, sourceRecord: gc.POIFullRecordRef | null, showLinkButton = true): HTMLTableRowElement {
  const quality = getMatchQuality(candidate.overallScore);

  // Extract fields from the full record
  const record = candidate.record as gc.mengplaz.POIRecord;
  const houseNumber = record?.number ?? 'N/A';
  const street = record?.street ?? 'N/A';
  const city = record?.city ?? 'N/A';
  const postcode = record?.postcode ?? 'N/A';
  const geo = record?.primaryLocation ? `${record?.primaryLocation.lat.toFixed(6)}, ${record?.primaryLocation.lng.toFixed(5)}` : 'N/A';

  const numberMatch = candidate.numberScore == 100;
  const streetMatch = candidate.streetScore == 100;
  const cityMatch = candidate.cityScore == 100;
  const postcodeMatch = candidate.postcodeScore == 100;
  const geoScore = candidate.geoScore;
  const geoMatch = geoScore != null && geoScore == 100;

  const handleValidate = () => {
    if (!candidate || !sourceRecord) return;

    const event = new CustomEvent<LinkEvent>('link', {
      detail: {
        sourceRecord: sourceRecord.ref,
        goldenCandidate: candidate.ref,
      },
      bubbles: true,
      composed: true,
    });

    row.dispatchEvent(event);
  };

  const handleView = () => {
    if (!candidate || !sourceRecord) return;

    const event = new CustomEvent<ViewCandidateEvent>('view-candidate', {
      detail: {
        candidate: candidate,
        sourceRecord: sourceRecord,
      },
      bubbles: true,
      composed: true,
    });

    row.dispatchEvent(event);
  };

  const row = (
    <tr className="candidate-row">
      <td className="candidate-score">
        <span className={['score-badge', `score-badge-${quality.variant}`]}>{candidate.overallScore}%</span>
      </td>

      <td className={[`candidate-field`, `${!numberMatch ? 'field-mismatch' : 'field-match'}`]}>
        {houseNumber}
        <span className="field-score">({candidate.numberScore}%)</span>
      </td>

      <td className={[`candidate-field`, `${!streetMatch ? 'field-mismatch' : 'field-match'}`]}>
        {street}
        <span className="field-score">({candidate.streetScore}%)</span>
      </td>

      <td className={['candidate-field', 'alias-field']}>{renderAliases(record?.streetAliases)}</td>

      <td className={[`candidate-field`, `${!cityMatch ? 'field-mismatch' : 'field-match'}`]}>
        {city}
        <span className="field-score">({candidate.cityScore}%)</span>
      </td>

      <td className={['candidate-field', 'alias-field']}>{renderAliases(record?.cityAliases)}</td>

      <td className={[`candidate-field`, `${!postcodeMatch ? 'field-mismatch' : 'field-match'}`]}>
        {postcode}
        <span className="field-score">({candidate.postcodeScore}%)</span>
      </td>

      <td className={[`candidate-field`, `${geoScore == null ? undefined : !geoMatch ? 'field-mismatch' : 'field-match'}`]}>
        {geo}
        {geoScore != null ? <span className="field-score">({Math.round(geoScore)}%)</span> : <span className="field-na">N/A</span>}
      </td>

      <td className="candidate-actions">
        <sl-button variant="default" size="small" onclick={() => handleView()}>
          <sl-icon name="eye"></sl-icon>
        </sl-button>
        {showLinkButton ? (
          <sl-button variant="default" size="small" onclick={() => handleValidate()}>
            Link
          </sl-button>
        ) : null}
        <sl-button variant="default" size="small" href={`?page=record&guid=${candidate.record.uid}`}>
          <sl-icon name="box-arrow-up-right"></sl-icon>
        </sl-button>
      </td>
    </tr>
  ) as HTMLTableRowElement;

  return row;
}
