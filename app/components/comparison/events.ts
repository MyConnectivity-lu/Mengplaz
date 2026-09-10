// Events that travel from the comparison components up to the reconcile page.
// The pane re-emits the inner `link` / `promote` / `reconcile` events as these,
// adding the source record id that identifies which row the action applies to.

export interface RequestLinkEvent {
  sourceRecord: gc.core.node<gc.mengplaz.AddressRecordProvider>;
  goldenCandidate: gc.core.node<gc.mengplaz.AddressRecordProvider>;
  sourceId: string;
}

export interface RequestPromoteEvent {
  sourceRecord: gc.AddressFullRecordRef;
  sourceId: string;
}

export interface RequestReconcileEvent {
  pois: string[];
  sourceRecordId?: string;
}

/** Emitted by a candidate row / the detailed view when the user links a pair. */
export interface LinkEvent {
  sourceRecord: gc.core.node<gc.mengplaz.AddressRecordProvider>;
  goldenCandidate: gc.core.node<gc.mengplaz.AddressRecordProvider>;
}

/** Emitted by a candidate row's eye button to open the detailed comparison. */
export interface ViewCandidateEvent {
  candidate: gc.privateApi.MatchedCandidateDetail;
  sourceRecord: gc.AddressFullRecordRef;
}

export interface PromoteEvent {
  sourceRecord: gc.AddressFullRecordRef;
}

export interface SearchCandidateEvent {
  sourceRecord: gc.AddressFullRecordRef;
}

export interface ReconcileEvent {
  sourceRecord: gc.AddressFullRecordRef;
}
