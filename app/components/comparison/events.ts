// Events that travel from the comparison components up to the reconcile page.
// The pane re-emits the inner `link` / `promote` / `reconcile` events as these,
// adding the source record id that identifies which row the action applies to.

export interface RequestLinkEvent {
  sourceRecord: gc.core.node<gc.mengplaz.POIRecordProvider>;
  goldenCandidate: gc.core.node<gc.mengplaz.POIRecordProvider>;
  sourceId: string;
}

export interface RequestPromoteEvent {
  sourceRecord: gc.POIFullRecordRef;
  sourceId: string;
}

export interface RequestReconcileEvent {
  pois: string[];
  sourceRecordId?: string;
}

/** Emitted by a candidate row / the detailed view when the user links a pair. */
export interface LinkEvent {
  sourceRecord: gc.core.node<gc.mengplaz.POIRecordProvider>;
  goldenCandidate: gc.core.node<gc.mengplaz.POIRecordProvider>;
}

/** Emitted by a candidate row's eye button to open the detailed comparison. */
export interface ViewCandidateEvent {
  candidate: gc.privateApi.MatchedCandidateDetail;
  sourceRecord: gc.POIFullRecordRef;
}

export interface PromoteEvent {
  sourceRecord: gc.POIFullRecordRef;
}

export interface SearchCandidateEvent {
  sourceRecord: gc.POIFullRecordRef;
}

export interface ReconcileEvent {
  sourceRecord: gc.POIFullRecordRef;
}
