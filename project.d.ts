// AUTO-GENERATED FILE PLEASE DO NOT MODIFY MANUALLY
/* eslint-disable */
/* oxlint-disable */
declare namespace gc {
  namespace project {
    class Root extends gc.sdk.GCObject {
      static readonly _type = 'project::Root';
      static readonly $fields: Root.$Fields;
      "runtime::usages": gc.core.nodeTime<gc.runtime.RuntimeUsage>;
      "trafic::endpoints_by_name": gc.core.nodeIndex<string, gc.core.node<gc.trafic.Endpoint>>;
      "bdaddress::bda_municipalities_by_name": gc.core.nodeIndex<string, gc.core.node<gc.bdaddress.BDAMunicipality>>;
      "bdaddress::bda_cities_by_name": gc.core.nodeIndex<string, globalThis.Array<gc.core.node<gc.bdaddress.BDACity>>>;
      "bdaddress::bda_streets_by_name": gc.core.nodeIndex<string, globalThis.Array<gc.core.node<gc.bdaddress.BDAStreet>>>;
      "bdaddress::bda_street_by_cacrid": gc.core.nodeList<gc.core.node<gc.bdaddress.BDAStreet>>;
      "bdaddress::bda_address_by_geo": gc.core.nodeGeo<gc.core.node<gc.bdaddress.BDAddress>>;
      "bdaddress::bda_address_by_cacrid": gc.core.nodeList<gc.core.node<gc.bdaddress.BDAddress>>;
      "bdaddress::bda_address_by_geoportalid": gc.core.nodeIndex<string, gc.core.node<gc.bdaddress.BDAddress>>;
      "caclr::caclr_consistuency_by_code": gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrConstituency>>;
      "caclr::caclr_cantons_by_id": gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrCanton>>;
      "caclr::caclr_municipalities_by_id": gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrMunicipality>>;
      "caclr::caclr_cities_by_id": gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrCity>>;
      "caclr::caclr_streets_by_id": gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrStreet>>;
      "caclr::caclr_buildings_by_id": gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrBuilding>>;
      "caclr::caclr_municipalities_by_name": gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrMunicipality>>;
      "caclr::caclr_cities_by_name": gc.core.nodeIndex<string, globalThis.Array<gc.core.node<gc.caclr.CaclrCity>>>;
      "caclr::caclr_streets_by_name": gc.core.nodeIndex<string, globalThis.Array<gc.core.node<gc.caclr.CaclrStreet>>>;
      "caclr::caclr_buildings_by_geo": gc.core.nodeGeo<gc.core.node<gc.caclr.CaclrBuilding>>;
      "caclr::caclr_token": gc.core.node<gc.caclr.CaclrToken | null>;
      "mengplaz::sources_by_name": gc.core.nodeIndex<string, gc.core.node<gc.mengplaz.DataSource>>;
      "osm::osm_by_id": gc.core.nodeIndex<string, gc.core.node<gc.osm.OsmAddress>>;
      "osm::osm_partial_by_id": gc.core.nodeList<gc.core.node<gc.osm.OsmPartialAddress>>;
      "osm::osm_by_geo": gc.core.nodeGeo<gc.core.node<gc.osm.OsmAddress>>;
      "osm::osm_partial_by_geo": gc.core.nodeGeo<gc.core.node<gc.osm.OsmPartialAddress>>;
      "osm::osm_cities_by_name": gc.core.nodeIndex<string, gc.core.node<gc.osm.OsmCity>>;
      "osm::osm_streets_by_name": gc.core.nodeIndex<string, globalThis.Array<gc.core.node<gc.osm.OsmStreet>>>;
      "golden::golden_constituency_by_code": gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenConstituency>>;
      "golden::golden_cantons_by_id": gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenCanton>>;
      "golden::golden_municipalities_by_id": gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenMunicipality>>;
      "golden::golden_cities_by_id": gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenCity>>;
      "golden::golden_streets_by_id": gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenStreet>>;
      "golden::golden_pois_by_id": gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenPointOfInterest>>;
      "golden::golden_municipalities_by_name": gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenMunicipality>>;
      "golden::golden_cities_by_name": gc.core.nodeIndex<string, globalThis.Array<gc.core.node<gc.golden.GoldenCity>>>;
      "golden::golden_streets_by_name": gc.core.nodeIndex<string, globalThis.Array<gc.core.node<gc.golden.GoldenStreet>>>;
      "golden::golden_pois_by_geo": gc.core.nodeGeo<gc.core.node<gc.golden.GoldenPointOfInterest>>;
      "golden::golden_records_geo_recompute": gc.core.nodeList<gc.core.node<gc.golden.GoldenPointOfInterest>>;
      "searchService::address_searches": gc.core.nodeTime<gc.searchService.AddressSearchInput>;
    }
    namespace Root {
      interface $Fields {
        "runtime::usages": 0;
        "trafic::endpoints_by_name": 1;
        "bdaddress::bda_municipalities_by_name": 2;
        "bdaddress::bda_cities_by_name": 3;
        "bdaddress::bda_streets_by_name": 4;
        "bdaddress::bda_street_by_cacrid": 5;
        "bdaddress::bda_address_by_geo": 6;
        "bdaddress::bda_address_by_cacrid": 7;
        "bdaddress::bda_address_by_geoportalid": 8;
        "caclr::caclr_consistuency_by_code": 9;
        "caclr::caclr_cantons_by_id": 10;
        "caclr::caclr_municipalities_by_id": 11;
        "caclr::caclr_cities_by_id": 12;
        "caclr::caclr_streets_by_id": 13;
        "caclr::caclr_buildings_by_id": 14;
        "caclr::caclr_municipalities_by_name": 15;
        "caclr::caclr_cities_by_name": 16;
        "caclr::caclr_streets_by_name": 17;
        "caclr::caclr_buildings_by_geo": 18;
        "caclr::caclr_token": 19;
        "mengplaz::sources_by_name": 20;
        "osm::osm_by_id": 21;
        "osm::osm_partial_by_id": 22;
        "osm::osm_by_geo": 23;
        "osm::osm_partial_by_geo": 24;
        "osm::osm_cities_by_name": 25;
        "osm::osm_streets_by_name": 26;
        "golden::golden_constituency_by_code": 27;
        "golden::golden_cantons_by_id": 28;
        "golden::golden_municipalities_by_id": 29;
        "golden::golden_cities_by_id": 30;
        "golden::golden_streets_by_id": 31;
        "golden::golden_pois_by_id": 32;
        "golden::golden_municipalities_by_name": 33;
        "golden::golden_cities_by_name": 34;
        "golden::golden_streets_by_name": 35;
        "golden::golden_pois_by_geo": 36;
        "golden::golden_records_geo_recompute": 37;
        "searchService::address_searches": 38;
      }
    }

    class loadOsm$args extends gc.sdk.GCObject {
      static readonly _type = 'project::loadOsm$args';
    }

    class loadCaclr$args extends gc.sdk.GCObject {
      static readonly _type = 'project::loadCaclr$args';
    }

    class loadBda$args extends gc.sdk.GCObject {
      static readonly _type = 'project::loadBda$args';
    }

    const loadOsm: (($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<unknown>) & {
      spawn($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<unknown>>;
    };
    const loadBda: (($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<unknown>) & {
      spawn($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<unknown>>;
    };
    const loadCaclr: (($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<unknown>) & {
      spawn($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<unknown>>;
    };
  }

  namespace privateApi {
    class getComparisonViewData$args extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::getComparisonViewData$args';
      static readonly $fields: getComparisonViewData$args.$Fields;
      source: gc.core.node<gc.mengplaz.DataSource>;
      recordId: string;
      constructor(source: gc.core.node<gc.mengplaz.DataSource>, recordId: string);
      static createFrom(fields: {source: gc.core.node<gc.mengplaz.DataSource>, recordId: string}): getComparisonViewData$args;
    }
    namespace getComparisonViewData$args {
      interface $Fields {
        source: 0;
        recordId: 1;
      }
    }

    class RecordLocation extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::RecordLocation';
      static readonly $fields: RecordLocation.$Fields;
      panel: string;
      constructor(panel: string);
      static createFrom(fields: {panel: string}): RecordLocation;
    }
    namespace RecordLocation {
      interface $Fields {
        panel: 0;
      }
    }

    class linkAllFullMatched$args extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::linkAllFullMatched$args';
      static readonly $fields: linkAllFullMatched$args.$Fields;
      source: gc.core.node<gc.mengplaz.DataSource>;
      recordIds: globalThis.Array<string>;
      constructor(source: gc.core.node<gc.mengplaz.DataSource>, recordIds: globalThis.Array<string>);
      static createFrom(fields: {source: gc.core.node<gc.mengplaz.DataSource>, recordIds: globalThis.Array<string>}): linkAllFullMatched$args;
    }
    namespace linkAllFullMatched$args {
      interface $Fields {
        source: 0;
        recordIds: 1;
      }
    }

    class MatchedCandidateDetail extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::MatchedCandidateDetail';
      static readonly $fields: MatchedCandidateDetail.$Fields;
      ref: gc.core.node<gc.mengplaz.POIRecordProvider>;
      numberScore: number;
      streetScore: number;
      cityScore: number;
      postcodeScore: number;
      geoScore: number | null;
      overallScore: number;
      record: any;
      constructor(ref: gc.core.node<gc.mengplaz.POIRecordProvider>, numberScore: number, streetScore: number, cityScore: number, postcodeScore: number, geoScore: number | null, overallScore: number, record: any);
      static createFrom(fields: {ref: gc.core.node<gc.mengplaz.POIRecordProvider>, numberScore: number, streetScore: number, cityScore: number, postcodeScore: number, geoScore?: number | null, overallScore: number, record: any}): MatchedCandidateDetail;
    }
    namespace MatchedCandidateDetail {
      interface $Fields {
        ref: 0;
        numberScore: 1;
        streetScore: 2;
        cityScore: 3;
        postcodeScore: 4;
        geoScore: 5;
        overallScore: 6;
        record: 7;
      }
    }

    class promoteRecord$args extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::promoteRecord$args';
      static readonly $fields: promoteRecord$args.$Fields;
      sourceRecord: gc.core.node<gc.mengplaz.POIRecordProvider>;
      streetIdx: string;
      constructor(sourceRecord: gc.core.node<gc.mengplaz.POIRecordProvider>, streetIdx: string);
      static createFrom(fields: {sourceRecord: gc.core.node<gc.mengplaz.POIRecordProvider>, streetIdx: string}): promoteRecord$args;
    }
    namespace promoteRecord$args {
      interface $Fields {
        sourceRecord: 0;
        streetIdx: 1;
      }
    }

    class LinkParameters extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::LinkParameters';
      static readonly $fields: LinkParameters.$Fields;
      addCityAlias: boolean;
      addStreetAlias: boolean;
      updateSimilarStreetMismatch: boolean | null;
      constructor(addCityAlias: boolean, addStreetAlias: boolean, updateSimilarStreetMismatch?: boolean | null);
      static createFrom(fields: {addCityAlias: boolean, addStreetAlias: boolean, updateSimilarStreetMismatch?: boolean | null}): LinkParameters;
    }
    namespace LinkParameters {
      interface $Fields {
        addCityAlias: 0;
        addStreetAlias: 1;
        updateSimilarStreetMismatch: 2;
      }
    }

    class ReconciliationReportView extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::ReconciliationReportView';
      static readonly $fields: ReconciliationReportView.$Fields;
      date: gc.core.time;
      linked: globalThis.Array<string>;
      fullMatch: globalThis.Array<string>;
      multipleMatch: globalThis.Array<string>;
      partialMatch: globalThis.Array<gc.privateApi.ReconciliationReportMatchView>;
      noMatch: globalThis.Array<string>;
      source: gc.core.node<gc.mengplaz.DataSource>;
      constructor(date: gc.core.time, linked: globalThis.Array<string>, fullMatch: globalThis.Array<string>, multipleMatch: globalThis.Array<string>, partialMatch: globalThis.Array<gc.privateApi.ReconciliationReportMatchView>, noMatch: globalThis.Array<string>, source: gc.core.node<gc.mengplaz.DataSource>);
      static createFrom(fields: {date: gc.core.time, linked: globalThis.Array<string>, fullMatch: globalThis.Array<string>, multipleMatch: globalThis.Array<string>, partialMatch: globalThis.Array<gc.privateApi.ReconciliationReportMatchView>, noMatch: globalThis.Array<string>, source: gc.core.node<gc.mengplaz.DataSource>}): ReconciliationReportView;
    }
    namespace ReconciliationReportView {
      interface $Fields {
        date: 0;
        linked: 1;
        fullMatch: 2;
        multipleMatch: 3;
        partialMatch: 4;
        noMatch: 5;
        source: 6;
      }
    }

    class linkRecords$args extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::linkRecords$args';
      static readonly $fields: linkRecords$args.$Fields;
      sourceRecord: gc.core.node<gc.mengplaz.POIRecordProvider>;
      candidateRecord: gc.core.node<gc.mengplaz.POIRecordProvider>;
      params: gc.privateApi.LinkParameters | null;
      constructor(sourceRecord: gc.core.node<gc.mengplaz.POIRecordProvider>, candidateRecord: gc.core.node<gc.mengplaz.POIRecordProvider>, params?: gc.privateApi.LinkParameters | null);
      static createFrom(fields: {sourceRecord: gc.core.node<gc.mengplaz.POIRecordProvider>, candidateRecord: gc.core.node<gc.mengplaz.POIRecordProvider>, params?: gc.privateApi.LinkParameters | null}): linkRecords$args;
    }
    namespace linkRecords$args {
      interface $Fields {
        sourceRecord: 0;
        candidateRecord: 1;
        params: 2;
      }
    }

    class GlobalQualityEntry extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::GlobalQualityEntry';
      static readonly $fields: GlobalQualityEntry.$Fields;
      timestamp: gc.core.time;
      averageQuality: number;
      constructor(timestamp: gc.core.time, averageQuality: number);
      static createFrom(fields: {timestamp: gc.core.time, averageQuality: number}): GlobalQualityEntry;
    }
    namespace GlobalQualityEntry {
      interface $Fields {
        timestamp: 0;
        averageQuality: 1;
      }
    }

    class SourceRef extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::SourceRef';
      static readonly $fields: SourceRef.$Fields;
      ref: gc.core.node<gc.mengplaz.DataSource>;
      name: string;
      locked: boolean | null;
      constructor(ref: gc.core.node<gc.mengplaz.DataSource>, name: string, locked?: boolean | null);
      static createFrom(fields: {ref: gc.core.node<gc.mengplaz.DataSource>, name: string, locked?: boolean | null}): SourceRef;
    }
    namespace SourceRef {
      interface $Fields {
        ref: 0;
        name: 1;
        locked: 2;
      }
    }

    class RecordTabResult extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::RecordTabResult';
      static readonly $fields: RecordTabResult.$Fields;
      tab: string;
      score: number | null;
      constructor(tab: string, score?: number | null);
      static createFrom(fields: {tab: string, score?: number | null}): RecordTabResult;
    }
    namespace RecordTabResult {
      interface $Fields {
        tab: 0;
        score: 1;
      }
    }

    class getSources$args extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::getSources$args';
    }

    class ReconciliationReportMatchView extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::ReconciliationReportMatchView';
      static readonly $fields: ReconciliationReportMatchView.$Fields;
      score: number | null;
      id: string;
      constructor(score: number | null, id: string);
      static createFrom(fields: {score?: number | null, id: string}): ReconciliationReportMatchView;
    }
    namespace ReconciliationReportMatchView {
      interface $Fields {
        score: 0;
        id: 1;
      }
    }

    class QualityTrend extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::QualityTrend';
      static readonly $fields: QualityTrend.$Fields;
      currentScore: number;
      previousScore: number | null;
      delta: number;
      linkedSourcesCount: number | bigint;
      constructor(currentScore: number, previousScore: number | null, delta: number, linkedSourcesCount: number | bigint);
      static createFrom(fields: {currentScore: number, previousScore?: number | null, delta: number, linkedSourcesCount: number | bigint}): QualityTrend;
    }
    namespace QualityTrend {
      interface $Fields {
        currentScore: 0;
        previousScore: 1;
        delta: 2;
        linkedSourcesCount: 3;
      }
    }

    class unlinkRecord$args extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::unlinkRecord$args';
      static readonly $fields: unlinkRecord$args.$Fields;
      sourceRecord: gc.core.node<gc.mengplaz.POIRecordProvider>;
      constructor(sourceRecord: gc.core.node<gc.mengplaz.POIRecordProvider>);
      static createFrom(fields: {sourceRecord: gc.core.node<gc.mengplaz.POIRecordProvider>}): unlinkRecord$args;
    }
    namespace unlinkRecord$args {
      interface $Fields {
        sourceRecord: 0;
      }
    }

    class unlockSource$args extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::unlockSource$args';
      static readonly $fields: unlockSource$args.$Fields;
      source: string;
      constructor(source: string);
      static createFrom(fields: {source: string}): unlockSource$args;
    }
    namespace unlockSource$args {
      interface $Fields {
        source: 0;
      }
    }

    class mergePositionsToGolden$args extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::mergePositionsToGolden$args';
      static readonly $fields: mergePositionsToGolden$args.$Fields;
      source: gc.core.node<gc.mengplaz.DataSource>;
      recordIds: globalThis.Array<string>;
      constructor(source: gc.core.node<gc.mengplaz.DataSource>, recordIds: globalThis.Array<string>);
      static createFrom(fields: {source: gc.core.node<gc.mengplaz.DataSource>, recordIds: globalThis.Array<string>}): mergePositionsToGolden$args;
    }
    namespace mergePositionsToGolden$args {
      interface $Fields {
        source: 0;
        recordIds: 1;
      }
    }

    class lockDatasource$args extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::lockDatasource$args';
      static readonly $fields: lockDatasource$args.$Fields;
      source: string;
      constructor(source: string);
      static createFrom(fields: {source: string}): lockDatasource$args;
    }
    namespace lockDatasource$args {
      interface $Fields {
        source: 0;
      }
    }

    class GlobalQualityHistory extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::GlobalQualityHistory';
      static readonly $fields: GlobalQualityHistory.$Fields;
      current: number;
      history: globalThis.Array<gc.privateApi.GlobalQualityEntry>;
      goldenRecords: globalThis.Array<gc.privateApi.GoldenRecordScore>;
      constructor(current: number, history: globalThis.Array<gc.privateApi.GlobalQualityEntry>, goldenRecords: globalThis.Array<gc.privateApi.GoldenRecordScore>);
      static createFrom(fields: {current: number, history: globalThis.Array<gc.privateApi.GlobalQualityEntry>, goldenRecords: globalThis.Array<gc.privateApi.GoldenRecordScore>}): GlobalQualityHistory;
    }
    namespace GlobalQualityHistory {
      interface $Fields {
        current: 0;
        history: 1;
        goldenRecords: 2;
      }
    }

    class getReconciliationReport$args extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::getReconciliationReport$args';
      static readonly $fields: getReconciliationReport$args.$Fields;
      source: gc.core.node<gc.mengplaz.DataSource>;
      city: string | null;
      municipality: string | null;
      constructor(source: gc.core.node<gc.mengplaz.DataSource>, city?: string | null, municipality?: string | null);
      static createFrom(fields: {source: gc.core.node<gc.mengplaz.DataSource>, city?: string | null, municipality?: string | null}): getReconciliationReport$args;
    }
    namespace getReconciliationReport$args {
      interface $Fields {
        source: 0;
        city: 1;
        municipality: 2;
      }
    }

    class ComparisonViewData extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::ComparisonViewData';
      static readonly $fields: ComparisonViewData.$Fields;
      sourceRecord: gc.mengplaz.POIFullRecordRef;
      candidates: globalThis.Array<gc.privateApi.MatchedCandidateDetail>;
      constructor(sourceRecord: gc.mengplaz.POIFullRecordRef, candidates: globalThis.Array<gc.privateApi.MatchedCandidateDetail>);
      static createFrom(fields: {sourceRecord: gc.mengplaz.POIFullRecordRef, candidates: globalThis.Array<gc.privateApi.MatchedCandidateDetail>}): ComparisonViewData;
    }
    namespace ComparisonViewData {
      interface $Fields {
        sourceRecord: 0;
        candidates: 1;
      }
    }

    class reconcilePOIs$args extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::reconcilePOIs$args';
      static readonly $fields: reconcilePOIs$args.$Fields;
      source: string;
      poiIds: globalThis.Array<string>;
      params: gc.mengplaz.SearchParameters | null;
      constructor(source: string, poiIds: globalThis.Array<string>, params?: gc.mengplaz.SearchParameters | null);
      static createFrom(fields: {source: string, poiIds: globalThis.Array<string>, params?: gc.mengplaz.SearchParameters | null}): reconcilePOIs$args;
    }
    namespace reconcilePOIs$args {
      interface $Fields {
        source: 0;
        poiIds: 1;
        params: 2;
      }
    }

    class getLinkedComparisonViewData$args extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::getLinkedComparisonViewData$args';
      static readonly $fields: getLinkedComparisonViewData$args.$Fields;
      source: gc.core.node<gc.mengplaz.DataSource>;
      recordId: string;
      constructor(source: gc.core.node<gc.mengplaz.DataSource>, recordId: string);
      static createFrom(fields: {source: gc.core.node<gc.mengplaz.DataSource>, recordId: string}): getLinkedComparisonViewData$args;
    }
    namespace getLinkedComparisonViewData$args {
      interface $Fields {
        source: 0;
        recordId: 1;
      }
    }

    class GoldenRecordScore extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::GoldenRecordScore';
      static readonly $fields: GoldenRecordScore.$Fields;
      uid: string;
      number: string;
      street: string | null;
      city: string | null;
      postcode: string;
      linkedCount: number | bigint;
      quality: number;
      constructor(uid: string, number: string, street: string | null, city: string | null, postcode: string, linkedCount: number | bigint, quality: number);
      static createFrom(fields: {uid: string, number: string, street?: string | null, city?: string | null, postcode: string, linkedCount: number | bigint, quality: number}): GoldenRecordScore;
    }
    namespace GoldenRecordScore {
      interface $Fields {
        uid: 0;
        number: 1;
        street: 2;
        city: 3;
        postcode: 4;
        linkedCount: 5;
        quality: 6;
      }
    }

    class getRecordTab$args extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::getRecordTab$args';
      static readonly $fields: getRecordTab$args.$Fields;
      source: gc.core.node<gc.mengplaz.DataSource>;
      recordId: string;
      constructor(source: gc.core.node<gc.mengplaz.DataSource>, recordId: string);
      static createFrom(fields: {source: gc.core.node<gc.mengplaz.DataSource>, recordId: string}): getRecordTab$args;
    }
    namespace getRecordTab$args {
      interface $Fields {
        source: 0;
        recordId: 1;
      }
    }

    class computeGlobalQuality$args extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::computeGlobalQuality$args';
    }

    class batchLinkByScore$args extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::batchLinkByScore$args';
      static readonly $fields: batchLinkByScore$args.$Fields;
      source: gc.core.node<gc.mengplaz.DataSource>;
      globalScore: number;
      geoScore: number | null;
      cityScore: number | null;
      streetScore: number | null;
      numberScore: number | null;
      postcodeScore: number | null;
      constructor(source: gc.core.node<gc.mengplaz.DataSource>, globalScore: number, geoScore?: number | null, cityScore?: number | null, streetScore?: number | null, numberScore?: number | null, postcodeScore?: number | null);
      static createFrom(fields: {source: gc.core.node<gc.mengplaz.DataSource>, globalScore: number, geoScore?: number | null, cityScore?: number | null, streetScore?: number | null, numberScore?: number | null, postcodeScore?: number | null}): batchLinkByScore$args;
    }
    namespace batchLinkByScore$args {
      interface $Fields {
        source: 0;
        globalScore: 1;
        geoScore: 2;
        cityScore: 3;
        streetScore: 4;
        numberScore: 5;
        postcodeScore: 6;
      }
    }

    class reconcile$args extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::reconcile$args';
      static readonly $fields: reconcile$args.$Fields;
      source: string;
      params: gc.mengplaz.SearchParameters | null;
      constructor(source: string, params?: gc.mengplaz.SearchParameters | null);
      static createFrom(fields: {source: string, params?: gc.mengplaz.SearchParameters | null}): reconcile$args;
    }
    namespace reconcile$args {
      interface $Fields {
        source: 0;
        params: 1;
      }
    }

    const promoteRecord: ((sourceRecord: gc.core.node<gc.mengplaz.POIRecordProvider>, streetIdx: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<unknown>) & {
      spawn(sourceRecord: gc.core.node<gc.mengplaz.POIRecordProvider>, streetIdx: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<unknown>>;
    };
    const linkRecords: ((sourceRecord: gc.core.node<gc.mengplaz.POIRecordProvider>, candidateRecord: gc.core.node<gc.mengplaz.POIRecordProvider>, params?: gc.privateApi.LinkParameters | null, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<unknown>) & {
      spawn(sourceRecord: gc.core.node<gc.mengplaz.POIRecordProvider>, candidateRecord: gc.core.node<gc.mengplaz.POIRecordProvider>, params?: gc.privateApi.LinkParameters | null, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<unknown>>;
    };
    const unlinkRecord: ((sourceRecord: gc.core.node<gc.mengplaz.POIRecordProvider>, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<unknown>) & {
      spawn(sourceRecord: gc.core.node<gc.mengplaz.POIRecordProvider>, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<unknown>>;
    };
    const linkAllFullMatched: ((source: gc.core.node<gc.mengplaz.DataSource>, recordIds: globalThis.Array<string>, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<unknown>) & {
      spawn(source: gc.core.node<gc.mengplaz.DataSource>, recordIds: globalThis.Array<string>, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<unknown>>;
    };
    /**
     * Batch links reconciled records to their best Golden candidate based on score rules.
     * All scores are expressed on a 0-100 scale.
     *  - links every unlinked record whose best candidate overall score is >= `globalScore`;
     *  - each optional per-field score (`geoScore`, `cityScore`, `streetScore`, `numberScore`,
     *    `postcodeScore`), when provided, adds a further constraint: the best candidate's matching
     *    field score must be >= the given value. Pass null to ignore that field.
     * `globalScore` cannot be lower than 80. Returns the number of records linked.
     */
    const batchLinkByScore: ((source: gc.core.node<gc.mengplaz.DataSource>, globalScore: number, geoScore?: number | null, cityScore?: number | null, streetScore?: number | null, numberScore?: number | null, postcodeScore?: number | null, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<number | bigint>) & {
      spawn(source: gc.core.node<gc.mengplaz.DataSource>, globalScore: number, geoScore?: number | null, cityScore?: number | null, streetScore?: number | null, numberScore?: number | null, postcodeScore?: number | null, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<number | bigint>>;
    };
    const mergePositionsToGolden: ((source: gc.core.node<gc.mengplaz.DataSource>, recordIds: globalThis.Array<string>, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<unknown>) & {
      spawn(source: gc.core.node<gc.mengplaz.DataSource>, recordIds: globalThis.Array<string>, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<unknown>>;
    };
    const lockDatasource: ((source: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<unknown>) & {
      spawn(source: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<unknown>>;
    };
    const reconcile: ((source: string, params?: gc.mengplaz.SearchParameters | null, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<gc.mengplaz.ReconciliationReport | null>) & {
      spawn(source: string, params?: gc.mengplaz.SearchParameters | null, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<gc.mengplaz.ReconciliationReport | null>>;
    };
    const reconcilePOIs: ((source: string, poiIds: globalThis.Array<string>, params?: gc.mengplaz.SearchParameters | null, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<gc.mengplaz.ReconciliationReport | null>) & {
      spawn(source: string, poiIds: globalThis.Array<string>, params?: gc.mengplaz.SearchParameters | null, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<gc.mengplaz.ReconciliationReport | null>>;
    };
    const getReconciliationReport: ((source: gc.core.node<gc.mengplaz.DataSource>, city?: string | null, municipality?: string | null, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<gc.privateApi.ReconciliationReportView | null>) & {
      spawn(source: gc.core.node<gc.mengplaz.DataSource>, city?: string | null, municipality?: string | null, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<gc.privateApi.ReconciliationReportView | null>>;
    };
    const getRecordTab: ((source: gc.core.node<gc.mengplaz.DataSource>, recordId: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<gc.privateApi.RecordTabResult>) & {
      spawn(source: gc.core.node<gc.mengplaz.DataSource>, recordId: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<gc.privateApi.RecordTabResult>>;
    };
    const getSources: (($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<globalThis.Array<gc.privateApi.SourceRef>>) & {
      spawn($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<globalThis.Array<gc.privateApi.SourceRef>>>;
    };
    const getComparisonViewData: ((source: gc.core.node<gc.mengplaz.DataSource>, recordId: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<gc.privateApi.ComparisonViewData>) & {
      spawn(source: gc.core.node<gc.mengplaz.DataSource>, recordId: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<gc.privateApi.ComparisonViewData>>;
    };
    const getLinkedComparisonViewData: ((source: gc.core.node<gc.mengplaz.DataSource>, recordId: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<gc.privateApi.ComparisonViewData>) & {
      spawn(source: gc.core.node<gc.mengplaz.DataSource>, recordId: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<gc.privateApi.ComparisonViewData>>;
    };
    /**
     * Computes and records the global quality score by looping over all golden POIs.
     * Call this periodically to update the global quality history.
     */
    const computeGlobalQuality: (($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<unknown>) & {
      spawn($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<unknown>>;
    };
    const unlockSource: ((source: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<unknown>) & {
      spawn(source: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<unknown>>;
    };
  }

  namespace api {
    class GeoJSON extends gc.sdk.GCObject {
      static readonly _type = 'api::GeoJSON';
      static readonly $fields: GeoJSON.$Fields;
      type: string;
      features: globalThis.Array<gc.api.GeoJSONFeature>;
      constructor(type: string, features: globalThis.Array<gc.api.GeoJSONFeature>);
      static createFrom(fields: {type: string, features: globalThis.Array<gc.api.GeoJSONFeature>}): GeoJSON;
    }
    namespace GeoJSON {
      interface $Fields {
        type: 0;
        features: 1;
      }
    }

    class searchAddress$args extends gc.sdk.GCObject {
      static readonly _type = 'api::searchAddress$args';
      static readonly $fields: searchAddress$args.$Fields;
      addr: string;
      max: number | bigint | null;
      source: string | null;
      constructor(addr: string, max?: number | bigint | null, source?: string | null);
      static createFrom(fields: {addr: string, max?: number | bigint | null, source?: string | null}): searchAddress$args;
    }
    namespace searchAddress$args {
      interface $Fields {
        addr: 0;
        max: 1;
        source: 2;
      }
    }

    class POIFeatures extends gc.sdk.GCObject {
      static readonly _type = 'api::POIFeatures';
      static readonly $fields: POIFeatures.$Fields;
      coords: gc.core.geo;
      number: string;
      constructor(coords: gc.core.geo, number: string);
      static createFrom(fields: {coords: gc.core.geo, number: string}): POIFeatures;
    }
    namespace POIFeatures {
      interface $Fields {
        coords: 0;
        number: 1;
      }
    }

    class getGoldenRecordRefByUid$args extends gc.sdk.GCObject {
      static readonly _type = 'api::getGoldenRecordRefByUid$args';
      static readonly $fields: getGoldenRecordRefByUid$args.$Fields;
      uid: string;
      constructor(uid: string);
      static createFrom(fields: {uid: string}): getGoldenRecordRefByUid$args;
    }
    namespace getGoldenRecordRefByUid$args {
      interface $Fields {
        uid: 0;
      }
    }

    class getPois$args extends gc.sdk.GCObject {
      static readonly _type = 'api::getPois$args';
    }

    class GeoJSONFeature extends gc.sdk.GCObject {
      static readonly _type = 'api::GeoJSONFeature';
      static readonly $fields: GeoJSONFeature.$Fields;
      type: string;
      geometry: gc.api.GeoJSONGeometry;
      properties: globalThis.Map<string, any>;
      constructor(type: string, geometry: gc.api.GeoJSONGeometry, properties: globalThis.Map<string, any>);
      static createFrom(fields: {type: string, geometry: gc.api.GeoJSONGeometry, properties: globalThis.Map<string, any>}): GeoJSONFeature;
    }
    namespace GeoJSONFeature {
      interface $Fields {
        type: 0;
        geometry: 1;
        properties: 2;
      }
    }

    class getGlobalQualityHistory$args extends gc.sdk.GCObject {
      static readonly _type = 'api::getGlobalQualityHistory$args';
      static readonly $fields: getGlobalQualityHistory$args.$Fields;
      from: gc.core.time | null;
      to: gc.core.time | null;
      constructor(from?: gc.core.time | null, to?: gc.core.time | null);
      static createFrom(fields: {from?: gc.core.time | null, to?: gc.core.time | null}): getGlobalQualityHistory$args;
    }
    namespace getGlobalQualityHistory$args {
      interface $Fields {
        from: 0;
        to: 1;
      }
    }

    class getGoldenStreetsByLocalityId$args extends gc.sdk.GCObject {
      static readonly _type = 'api::getGoldenStreetsByLocalityId$args';
      static readonly $fields: getGoldenStreetsByLocalityId$args.$Fields;
      localityId: string;
      constructor(localityId: string);
      static createFrom(fields: {localityId: string}): getGoldenStreetsByLocalityId$args;
    }
    namespace getGoldenStreetsByLocalityId$args {
      interface $Fields {
        localityId: 0;
      }
    }

    class getGoldenRecordsGeoJson$args extends gc.sdk.GCObject {
      static readonly _type = 'api::getGoldenRecordsGeoJson$args';
    }

    class getGoldenRecords$args extends gc.sdk.GCObject {
      static readonly _type = 'api::getGoldenRecords$args';
    }

    class GoldenWithLinkedRecords extends gc.sdk.GCObject {
      static readonly _type = 'api::GoldenWithLinkedRecords';
      static readonly $fields: GoldenWithLinkedRecords.$Fields;
      golden: gc.mengplaz.POIRecord;
      osm: globalThis.Array<gc.api.LinkedRecordDetails<gc.osm.OSMFullRecord>>;
      caclr: globalThis.Array<gc.api.LinkedRecordDetails<gc.caclr.CaclrPOIFullRecord>>;
      bda: globalThis.Array<gc.api.LinkedRecordDetails<gc.bdaddress.BDAddressFullRecord>>;
      constructor(golden: gc.mengplaz.POIRecord, osm: globalThis.Array<gc.api.LinkedRecordDetails<gc.osm.OSMFullRecord>>, caclr: globalThis.Array<gc.api.LinkedRecordDetails<gc.caclr.CaclrPOIFullRecord>>, bda: globalThis.Array<gc.api.LinkedRecordDetails<gc.bdaddress.BDAddressFullRecord>>);
      static createFrom(fields: {golden: gc.mengplaz.POIRecord, osm: globalThis.Array<gc.api.LinkedRecordDetails<gc.osm.OSMFullRecord>>, caclr: globalThis.Array<gc.api.LinkedRecordDetails<gc.caclr.CaclrPOIFullRecord>>, bda: globalThis.Array<gc.api.LinkedRecordDetails<gc.bdaddress.BDAddressFullRecord>>}): GoldenWithLinkedRecords;
    }
    namespace GoldenWithLinkedRecords {
      interface $Fields {
        golden: 0;
        osm: 1;
        caclr: 2;
        bda: 3;
      }
    }

    class GoldenRecordDetails extends gc.sdk.GCObject {
      static readonly _type = 'api::GoldenRecordDetails';
      static readonly $fields: GoldenRecordDetails.$Fields;
      golden: gc.mengplaz.POIRecordRef;
      associated: globalThis.Array<gc.mengplaz.POIFullRecordRef>;
      constructor(golden: gc.mengplaz.POIRecordRef, associated: globalThis.Array<gc.mengplaz.POIFullRecordRef>);
      static createFrom(fields: {golden: gc.mengplaz.POIRecordRef, associated: globalThis.Array<gc.mengplaz.POIFullRecordRef>}): GoldenRecordDetails;
    }
    namespace GoldenRecordDetails {
      interface $Fields {
        golden: 0;
        associated: 1;
      }
    }

    class getGoldenLocalities$args extends gc.sdk.GCObject {
      static readonly _type = 'api::getGoldenLocalities$args';
      static readonly $fields: getGoldenLocalities$args.$Fields;
      communeId: string | null;
      constructor(communeId?: string | null);
      static createFrom(fields: {communeId?: string | null}): getGoldenLocalities$args;
    }
    namespace getGoldenLocalities$args {
      interface $Fields {
        communeId: 0;
      }
    }

    class getGoldenRecordDetails$args extends gc.sdk.GCObject {
      static readonly _type = 'api::getGoldenRecordDetails$args';
      static readonly $fields: getGoldenRecordDetails$args.$Fields;
      uid: string;
      constructor(uid: string);
      static createFrom(fields: {uid: string}): getGoldenRecordDetails$args;
    }
    namespace getGoldenRecordDetails$args {
      interface $Fields {
        uid: 0;
      }
    }

    class getPoisByGeo$args extends gc.sdk.GCObject {
      static readonly _type = 'api::getPoisByGeo$args';
      static readonly $fields: getPoisByGeo$args.$Fields;
      coords: gc.core.geo;
      constructor(coords: gc.core.geo);
      static createFrom(fields: {coords: gc.core.geo}): getPoisByGeo$args;
    }
    namespace getPoisByGeo$args {
      interface $Fields {
        coords: 0;
      }
    }

    class GeoJSONGeometry extends gc.sdk.GCObject {
      static readonly _type = 'api::GeoJSONGeometry';
      static readonly $fields: GeoJSONGeometry.$Fields;
      type: string;
      coordinates: globalThis.Array<number>;
      constructor(type: string, coordinates: globalThis.Array<number>);
      static createFrom(fields: {type: string, coordinates: globalThis.Array<number>}): GeoJSONGeometry;
    }
    namespace GeoJSONGeometry {
      interface $Fields {
        type: 0;
        coordinates: 1;
      }
    }

    class appInfo$args extends gc.sdk.GCObject {
      static readonly _type = 'api::appInfo$args';
    }

    class DataAttribution extends gc.sdk.GCObject {
      static readonly _type = 'api::DataAttribution';
      static readonly $fields: DataAttribution.$Fields;
      notice: string;
      sources: globalThis.Array<string>;
      constructor(notice: string, sources: globalThis.Array<string>);
      static createFrom(fields: {notice: string, sources: globalThis.Array<string>}): DataAttribution;
    }
    namespace DataAttribution {
      interface $Fields {
        notice: 0;
        sources: 1;
      }
    }

    class publicStats$args extends gc.sdk.GCObject {
      static readonly _type = 'api::publicStats$args';
    }

    class attribution$args extends gc.sdk.GCObject {
      static readonly _type = 'api::attribution$args';
    }

    class LinkedRecordDetails<T = any> extends gc.sdk.GCObject {
      static readonly _type = 'api::LinkedRecordDetails';
      static readonly $fields: LinkedRecordDetails.$Fields;
      score: gc.mengplaz.ReconciliationCandidateScore | null;
      record: T;
      constructor(score?: gc.mengplaz.ReconciliationCandidateScore | null, record?: T);
      static createFrom<T>(fields: {score?: gc.mengplaz.ReconciliationCandidateScore | null, record?: T}): LinkedRecordDetails;
    }
    namespace LinkedRecordDetails {
      interface $Fields {
        score: 0;
        record: 1;
      }
    }

    class getGoldenNumbersByStreetId$args extends gc.sdk.GCObject {
      static readonly _type = 'api::getGoldenNumbersByStreetId$args';
      static readonly $fields: getGoldenNumbersByStreetId$args.$Fields;
      streetId: string;
      constructor(streetId: string);
      static createFrom(fields: {streetId: string}): getGoldenNumbersByStreetId$args;
    }
    namespace getGoldenNumbersByStreetId$args {
      interface $Fields {
        streetId: 0;
      }
    }

    class getRecordByGeoportailID$args extends gc.sdk.GCObject {
      static readonly _type = 'api::getRecordByGeoportailID$args';
      static readonly $fields: getRecordByGeoportailID$args.$Fields;
      id: string;
      constructor(id: string);
      static createFrom(fields: {id: string}): getRecordByGeoportailID$args;
    }
    namespace getRecordByGeoportailID$args {
      interface $Fields {
        id: 0;
      }
    }

    class GoldenIndex extends gc.sdk.GCObject {
      static readonly _type = 'api::GoldenIndex';
      static readonly $fields: GoldenIndex.$Fields;
      id: string;
      name: string;
      constructor(id: string, name: string);
      static createFrom(fields: {id: string, name: string}): GoldenIndex;
    }
    namespace GoldenIndex {
      interface $Fields {
        id: 0;
        name: 1;
      }
    }

    class getPoisInStreet$args extends gc.sdk.GCObject {
      static readonly _type = 'api::getPoisInStreet$args';
      static readonly $fields: getPoisInStreet$args.$Fields;
      e: gc.core.node<gc.mengplaz.StreetRecordProvider>;
      constructor(e: gc.core.node<gc.mengplaz.StreetRecordProvider>);
      static createFrom(fields: {e: gc.core.node<gc.mengplaz.StreetRecordProvider>}): getPoisInStreet$args;
    }
    namespace getPoisInStreet$args {
      interface $Fields {
        e: 0;
      }
    }

    class getGoldenWithLinkedRecords$args extends gc.sdk.GCObject {
      static readonly _type = 'api::getGoldenWithLinkedRecords$args';
      static readonly $fields: getGoldenWithLinkedRecords$args.$Fields;
      addr: string;
      constructor(addr: string);
      static createFrom(fields: {addr: string}): getGoldenWithLinkedRecords$args;
    }
    namespace getGoldenWithLinkedRecords$args {
      interface $Fields {
        addr: 0;
      }
    }

    class searchStreet$args extends gc.sdk.GCObject {
      static readonly _type = 'api::searchStreet$args';
      static readonly $fields: searchStreet$args.$Fields;
      e: string;
      constructor(e: string);
      static createFrom(fields: {e: string}): searchStreet$args;
    }
    namespace searchStreet$args {
      interface $Fields {
        e: 0;
      }
    }

    class openapi$args extends gc.sdk.GCObject {
      static readonly _type = 'api::openapi$args';
    }

    class getGoldenCommunes$args extends gc.sdk.GCObject {
      static readonly _type = 'api::getGoldenCommunes$args';
    }

    const getPoisInStreet: ((e: gc.core.node<gc.mengplaz.StreetRecordProvider>, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<globalThis.Array<gc.mengplaz.POIRecordRef>>) & {
      spawn(e: gc.core.node<gc.mengplaz.StreetRecordProvider>, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<globalThis.Array<gc.mengplaz.POIRecordRef>>>;
    };
    const searchStreet: ((e: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<globalThis.Array<gc.mengplaz.StreetRecordRef>>) & {
      spawn(e: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<globalThis.Array<gc.mengplaz.StreetRecordRef>>>;
    };
    const getPois: (($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<globalThis.Array<gc.api.POIFeatures>>) & {
      spawn($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<globalThis.Array<gc.api.POIFeatures>>>;
    };
    const getPoisByGeo: ((coords: gc.core.geo, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<gc.mengplaz.POIRecordRef | null>) & {
      spawn(coords: gc.core.geo, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<gc.mengplaz.POIRecordRef | null>>;
    };
    const getGoldenRecordDetails: ((uid: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<gc.api.GoldenRecordDetails>) & {
      spawn(uid: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<gc.api.GoldenRecordDetails>>;
    };
    /**
     * Returns the Golden POI associated with the given uid
     */
    const getGoldenRecordRefByUid: ((uid: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<gc.mengplaz.POIRecordRef | null>) & {
      spawn(uid: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<gc.mengplaz.POIRecordRef | null>>;
    };
    /**
     * Returns the Golden POI associated with the given geoportal_id
     */
    const getRecordByGeoportailID: ((id: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<gc.mengplaz.POIRecordRef | null>) & {
      spawn(id: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<gc.mengplaz.POIRecordRef | null>>;
    };
    /**
     * Returns all the localities in the Golden collection. Provides the localityId to be used with getGoldenStreetsByLocalityId
     */
    const getGoldenLocalities: ((communeId?: string | null, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<globalThis.Array<gc.api.GoldenIndex>>) & {
      spawn(communeId?: string | null, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<globalThis.Array<gc.api.GoldenIndex>>>;
    };
    /**
     * Returns all the communes in the Golden collection. Provides the communeId to be used with getGoldenLocalities
     */
    const getGoldenCommunes: (($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<globalThis.Array<gc.api.GoldenIndex>>) & {
      spawn($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<globalThis.Array<gc.api.GoldenIndex>>>;
    };
    /**
     * Returns all the streets in the city referenced by this cityId. Provides the streetId to be used with getGoldenNumbersByStreetId
     */
    const getGoldenStreetsByLocalityId: ((localityId: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<globalThis.Array<gc.api.GoldenIndex>>) & {
      spawn(localityId: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<globalThis.Array<gc.api.GoldenIndex>>>;
    };
    /**
     * Returns all the numbers in the street referenced by this streetId
     */
    const getGoldenNumbersByStreetId: ((streetId: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<globalThis.Array<gc.api.GoldenIndex>>) & {
      spawn(streetId: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<globalThis.Array<gc.api.GoldenIndex>>>;
    };
    /**
     * Returns all Points Of Interest (POIs) in the Golden collection
     */
    const getGoldenRecords: (($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<globalThis.Array<gc.mengplaz.POIRecord>>) & {
      spawn($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<globalThis.Array<gc.mengplaz.POIRecord>>>;
    };
    /**
     * Returns all Golden Points Of Interest (POIs) in a GeoJson Format
     */
    const getGoldenRecordsGeoJson: (($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<gc.api.GeoJSON>) & {
      spawn($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<gc.api.GeoJSON>>;
    };
    /**
     * Attribution notice for the data exposed by this API.
     *
     * The address data is derived in part from OpenStreetMap and is therefore subject to the
     * ODbL (Open Database License). This notice satisfies the ODbL attribution requirement for
     * data conveyed via the API.
     */
    const attribution: (($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<gc.api.DataAttribution>) & {
      spawn($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<gc.api.DataAttribution>>;
    };
    const openapi: (($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<gc.runtime.OpenApiV3>) & {
      spawn($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<gc.runtime.OpenApiV3>>;
    };
    const getGlobalQualityHistory: ((from?: gc.core.time | null, to?: gc.core.time | null, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<gc.privateApi.GlobalQualityHistory>) & {
      spawn(from?: gc.core.time | null, to?: gc.core.time | null, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<gc.privateApi.GlobalQualityHistory>>;
    };
    const appInfo: (($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<gc.runtime.RuntimeInfo>) & {
      spawn($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<gc.runtime.RuntimeInfo>>;
    };
    const searchAddress: ((addr: string, max?: number | bigint | null, source?: string | null, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<globalThis.Array<gc.mengplaz.POIRecordRef>>) & {
      spawn(addr: string, max?: number | bigint | null, source?: string | null, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<globalThis.Array<gc.mengplaz.POIRecordRef>>>;
    };
    const getGoldenWithLinkedRecords: ((addr: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<gc.api.GoldenWithLinkedRecords | null>) & {
      spawn(addr: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<gc.api.GoldenWithLinkedRecords | null>>;
    };
    const publicStats: (($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<unknown>) & {
      spawn($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<unknown>>;
    };
  }

  namespace bdAddressLoader {
    class BDAddressLoader extends gc.sdk.GCObject {
      static readonly _type = 'bdAddressLoader::BDAddressLoader';
    }

    class BDAddressLine extends gc.sdk.GCObject {
      static readonly _type = 'bdAddressLoader::BDAddressLine';
      static readonly $fields: BDAddressLine.$Fields;
      rue: string;
      numero: string;
      localite: string;
      code_postal: string;
      id_caclr_rue: number | bigint;
      id_caclr_bat: number | bigint;
      lat_wgs84: number;
      lon_wgs84: number;
      coord_est_luref: gc.core.null_ | null;
      coord_nord_luref: gc.core.null_ | null;
      id_geoportail: string;
      commune: string;
      lau2: gc.core.null_ | null;
      constructor(rue: string, numero: string, localite: string, code_postal: string, id_caclr_rue: number | bigint, id_caclr_bat: number | bigint, lat_wgs84: number, lon_wgs84: number, coord_est_luref: gc.core.null_ | null, coord_nord_luref: gc.core.null_ | null, id_geoportail: string, commune: string, lau2?: gc.core.null_ | null);
      static createFrom(fields: {rue: string, numero: string, localite: string, code_postal: string, id_caclr_rue: number | bigint, id_caclr_bat: number | bigint, lat_wgs84: number, lon_wgs84: number, coord_est_luref?: gc.core.null_ | null, coord_nord_luref?: gc.core.null_ | null, id_geoportail: string, commune: string, lau2?: gc.core.null_ | null}): BDAddressLine;
    }
    namespace BDAddressLine {
      interface $Fields {
        rue: 0;
        numero: 1;
        localite: 2;
        code_postal: 3;
        id_caclr_rue: 4;
        id_caclr_bat: 5;
        lat_wgs84: 6;
        lon_wgs84: 7;
        coord_est_luref: 8;
        coord_nord_luref: 9;
        id_geoportail: 10;
        commune: 11;
        lau2: 12;
      }
    }

  }

  namespace caclrLoader {
    class CaclrResponseConstituency extends gc.sdk.GCObject {
      static readonly _type = 'caclrLoader::CaclrResponseConstituency';
      static readonly $fields: CaclrResponseConstituency.$Fields;
      code: string;
      name: string;
      constructor(code: string, name: string);
      static createFrom(fields: {code: string, name: string}): CaclrResponseConstituency;
    }
    namespace CaclrResponseConstituency {
      interface $Fields {
        code: 0;
        name: 1;
      }
    }

    class CACLRLoader extends gc.sdk.GCObject {
      static readonly _type = 'caclrLoader::CACLRLoader';
    }

    class CaclrResponseBuildingItem extends gc.sdk.GCObject {
      static readonly _type = 'caclrLoader::CaclrResponseBuildingItem';
      static readonly $fields: CaclrResponseBuildingItem.$Fields;
      id: string;
      number: number | bigint;
      isNumberUndefined: boolean;
      postalCode: string;
      multipleCode: string;
      administrativeStatus: gc.caclr.CaclrAdminStatus;
      validityStartDate: gc.core.time;
      validityEndDate: gc.core.time | null;
      lastUpdate: gc.core.time;
      streetId: string;
      constructor(id: string, number: number | bigint, isNumberUndefined: boolean, postalCode: string, multipleCode: string, administrativeStatus: gc.caclr.CaclrAdminStatus, validityStartDate: gc.core.time, validityEndDate: gc.core.time | null, lastUpdate: gc.core.time, streetId: string);
      static createFrom(fields: {id: string, number: number | bigint, isNumberUndefined: boolean, postalCode: string, multipleCode: string, administrativeStatus: gc.caclr.CaclrAdminStatus, validityStartDate: gc.core.time, validityEndDate?: gc.core.time | null, lastUpdate: gc.core.time, streetId: string}): CaclrResponseBuildingItem;
    }
    namespace CaclrResponseBuildingItem {
      interface $Fields {
        id: 0;
        number: 1;
        isNumberUndefined: 2;
        postalCode: 3;
        multipleCode: 4;
        administrativeStatus: 5;
        validityStartDate: 6;
        validityEndDate: 7;
        lastUpdate: 8;
        streetId: 9;
      }
    }

    class CaclrResponseBuildings extends gc.sdk.GCObject {
      static readonly _type = 'caclrLoader::CaclrResponseBuildings';
      static readonly $fields: CaclrResponseBuildings.$Fields;
      totalCount: number | bigint;
      items: globalThis.Array<gc.caclrLoader.CaclrResponseBuildingItem>;
      constructor(totalCount: number | bigint, items: globalThis.Array<gc.caclrLoader.CaclrResponseBuildingItem>);
      static createFrom(fields: {totalCount: number | bigint, items: globalThis.Array<gc.caclrLoader.CaclrResponseBuildingItem>}): CaclrResponseBuildings;
    }
    namespace CaclrResponseBuildings {
      interface $Fields {
        totalCount: 0;
        items: 1;
      }
    }

    class CaclrAlias extends gc.sdk.GCObject {
      static readonly _type = 'caclrLoader::CaclrAlias';
      static readonly $fields: CaclrAlias.$Fields;
      name: string;
      languageCode: string;
      constructor(name: string, languageCode: string);
      static createFrom(fields: {name: string, languageCode: string}): CaclrAlias;
    }
    namespace CaclrAlias {
      interface $Fields {
        name: 0;
        languageCode: 1;
      }
    }

    class CaclrResponseCantons extends gc.sdk.GCObject {
      static readonly _type = 'caclrLoader::CaclrResponseCantons';
      static readonly $fields: CaclrResponseCantons.$Fields;
      totalCount: number | bigint;
      items: globalThis.Array<gc.caclrLoader.CaclrResponseCantonItem>;
      constructor(totalCount: number | bigint, items: globalThis.Array<gc.caclrLoader.CaclrResponseCantonItem>);
      static createFrom(fields: {totalCount: number | bigint, items: globalThis.Array<gc.caclrLoader.CaclrResponseCantonItem>}): CaclrResponseCantons;
    }
    namespace CaclrResponseCantons {
      interface $Fields {
        totalCount: 0;
        items: 1;
      }
    }

    class CaclrResponseMunicipalityItem extends gc.sdk.GCObject {
      static readonly _type = 'caclrLoader::CaclrResponseMunicipalityItem';
      static readonly $fields: CaclrResponseMunicipalityItem.$Fields;
      id: string;
      code: string;
      coficomCode: string;
      compoundCode: string;
      name: string;
      nameUpperCase: string;
      nameLu: string;
      status: gc.caclr.CaclrDataStatus;
      validityStartDate: gc.core.time;
      validityEndDate: gc.core.time | null;
      lastUpdate: gc.core.time;
      constituency: gc.caclrLoader.CaclrResponseConstituency;
      eurostats: gc.caclr.CaclrEurostatsIds;
      cantonId: string;
      constructor(id: string, code: string, coficomCode: string, compoundCode: string, name: string, nameUpperCase: string, nameLu: string, status: gc.caclr.CaclrDataStatus, validityStartDate: gc.core.time, validityEndDate: gc.core.time | null, lastUpdate: gc.core.time, constituency: gc.caclrLoader.CaclrResponseConstituency, eurostats: gc.caclr.CaclrEurostatsIds, cantonId: string);
      static createFrom(fields: {id: string, code: string, coficomCode: string, compoundCode: string, name: string, nameUpperCase: string, nameLu: string, status: gc.caclr.CaclrDataStatus, validityStartDate: gc.core.time, validityEndDate?: gc.core.time | null, lastUpdate: gc.core.time, constituency: gc.caclrLoader.CaclrResponseConstituency, eurostats: gc.caclr.CaclrEurostatsIds, cantonId: string}): CaclrResponseMunicipalityItem;
    }
    namespace CaclrResponseMunicipalityItem {
      interface $Fields {
        id: 0;
        code: 1;
        coficomCode: 2;
        compoundCode: 3;
        name: 4;
        nameUpperCase: 5;
        nameLu: 6;
        status: 7;
        validityStartDate: 8;
        validityEndDate: 9;
        lastUpdate: 10;
        constituency: 11;
        eurostats: 12;
        cantonId: 13;
      }
    }

    class CaclrResponseMunicipalities extends gc.sdk.GCObject {
      static readonly _type = 'caclrLoader::CaclrResponseMunicipalities';
      static readonly $fields: CaclrResponseMunicipalities.$Fields;
      totalCount: number | bigint;
      items: globalThis.Array<gc.caclrLoader.CaclrResponseMunicipalityItem>;
      constructor(totalCount: number | bigint, items: globalThis.Array<gc.caclrLoader.CaclrResponseMunicipalityItem>);
      static createFrom(fields: {totalCount: number | bigint, items: globalThis.Array<gc.caclrLoader.CaclrResponseMunicipalityItem>}): CaclrResponseMunicipalities;
    }
    namespace CaclrResponseMunicipalities {
      interface $Fields {
        totalCount: 0;
        items: 1;
      }
    }

    class CaclrResponseCityItem extends gc.sdk.GCObject {
      static readonly _type = 'caclrLoader::CaclrResponseCityItem';
      static readonly $fields: CaclrResponseCityItem.$Fields;
      id: string;
      code: string;
      compoundCode: string;
      name: string;
      nameUpperCase: string;
      aliases: globalThis.Array<gc.caclrLoader.CaclrAlias>;
      isTown: boolean;
      validityStartDate: gc.core.time;
      validityEndDate: gc.core.time | null;
      lastUpdate: gc.core.time;
      municipalityId: string;
      constructor(id: string, code: string, compoundCode: string, name: string, nameUpperCase: string, aliases: globalThis.Array<gc.caclrLoader.CaclrAlias>, isTown: boolean, validityStartDate: gc.core.time, validityEndDate: gc.core.time | null, lastUpdate: gc.core.time, municipalityId: string);
      static createFrom(fields: {id: string, code: string, compoundCode: string, name: string, nameUpperCase: string, aliases: globalThis.Array<gc.caclrLoader.CaclrAlias>, isTown: boolean, validityStartDate: gc.core.time, validityEndDate?: gc.core.time | null, lastUpdate: gc.core.time, municipalityId: string}): CaclrResponseCityItem;
    }
    namespace CaclrResponseCityItem {
      interface $Fields {
        id: 0;
        code: 1;
        compoundCode: 2;
        name: 3;
        nameUpperCase: 4;
        aliases: 5;
        isTown: 6;
        validityStartDate: 7;
        validityEndDate: 8;
        lastUpdate: 9;
        municipalityId: 10;
      }
    }

    class CaclrResponseCantonItem extends gc.sdk.GCObject {
      static readonly _type = 'caclrLoader::CaclrResponseCantonItem';
      static readonly $fields: CaclrResponseCantonItem.$Fields;
      id: string;
      code: string;
      name: string;
      lastUpdate: gc.core.time;
      constituency: gc.caclrLoader.CaclrResponseConstituency;
      constructor(id: string, code: string, name: string, lastUpdate: gc.core.time, constituency: gc.caclrLoader.CaclrResponseConstituency);
      static createFrom(fields: {id: string, code: string, name: string, lastUpdate: gc.core.time, constituency: gc.caclrLoader.CaclrResponseConstituency}): CaclrResponseCantonItem;
    }
    namespace CaclrResponseCantonItem {
      interface $Fields {
        id: 0;
        code: 1;
        name: 2;
        lastUpdate: 3;
        constituency: 4;
      }
    }

    class CaclrResponseStreets extends gc.sdk.GCObject {
      static readonly _type = 'caclrLoader::CaclrResponseStreets';
      static readonly $fields: CaclrResponseStreets.$Fields;
      totalCount: number | bigint;
      items: globalThis.Array<gc.caclrLoader.CaclrResponseStreetItem>;
      constructor(totalCount: number | bigint, items: globalThis.Array<gc.caclrLoader.CaclrResponseStreetItem>);
      static createFrom(fields: {totalCount: number | bigint, items: globalThis.Array<gc.caclrLoader.CaclrResponseStreetItem>}): CaclrResponseStreets;
    }
    namespace CaclrResponseStreets {
      interface $Fields {
        totalCount: 0;
        items: 1;
      }
    }

    class CaclrResponseStreetItem extends gc.sdk.GCObject {
      static readonly _type = 'caclrLoader::CaclrResponseStreetItem';
      static readonly $fields: CaclrResponseStreetItem.$Fields;
      id: string;
      name: string;
      nameUpperCase: string;
      keyWord: string;
      aliases: globalThis.Array<gc.caclrLoader.CaclrAlias>;
      administrativeStatus: gc.caclr.CaclrAdminStatus;
      isPlace: boolean;
      validityStartDate: gc.core.time;
      validityEndDate: gc.core.time | null;
      lastUpdate: gc.core.time;
      cityId: string;
      constructor(id: string, name: string, nameUpperCase: string, keyWord: string, aliases: globalThis.Array<gc.caclrLoader.CaclrAlias>, administrativeStatus: gc.caclr.CaclrAdminStatus, isPlace: boolean, validityStartDate: gc.core.time, validityEndDate: gc.core.time | null, lastUpdate: gc.core.time, cityId: string);
      static createFrom(fields: {id: string, name: string, nameUpperCase: string, keyWord: string, aliases: globalThis.Array<gc.caclrLoader.CaclrAlias>, administrativeStatus: gc.caclr.CaclrAdminStatus, isPlace: boolean, validityStartDate: gc.core.time, validityEndDate?: gc.core.time | null, lastUpdate: gc.core.time, cityId: string}): CaclrResponseStreetItem;
    }
    namespace CaclrResponseStreetItem {
      interface $Fields {
        id: 0;
        name: 1;
        nameUpperCase: 2;
        keyWord: 3;
        aliases: 4;
        administrativeStatus: 5;
        isPlace: 6;
        validityStartDate: 7;
        validityEndDate: 8;
        lastUpdate: 9;
        cityId: 10;
      }
    }

    class CaclrResponseCities extends gc.sdk.GCObject {
      static readonly _type = 'caclrLoader::CaclrResponseCities';
      static readonly $fields: CaclrResponseCities.$Fields;
      totalCount: number | bigint;
      items: globalThis.Array<gc.caclrLoader.CaclrResponseCityItem>;
      constructor(totalCount: number | bigint, items: globalThis.Array<gc.caclrLoader.CaclrResponseCityItem>);
      static createFrom(fields: {totalCount: number | bigint, items: globalThis.Array<gc.caclrLoader.CaclrResponseCityItem>}): CaclrResponseCities;
    }
    namespace CaclrResponseCities {
      interface $Fields {
        totalCount: 0;
        items: 1;
      }
    }

  }

  namespace osmLoader {
    class OSMLoader extends gc.sdk.GCObject {
      static readonly _type = 'osmLoader::OSMLoader';
    }

    class OsmOverpassResponse extends gc.sdk.GCObject {
      static readonly _type = 'osmLoader::OsmOverpassResponse';
      static readonly $fields: OsmOverpassResponse.$Fields;
      elements: globalThis.Array<globalThis.Map<string, any | null>>;
      constructor(elements: globalThis.Array<globalThis.Map<string, any | null>>);
      static createFrom(fields: {elements: globalThis.Array<globalThis.Map<string, any | null>>}): OsmOverpassResponse;
    }
    namespace OsmOverpassResponse {
      interface $Fields {
        elements: 0;
      }
    }

  }

  namespace backupExporter {
    class BkOsmCityDTO extends gc.sdk.GCObject {
      static readonly _type = 'backupExporter::BkOsmCityDTO';
      static readonly $fields: BkOsmCityDTO.$Fields;
      name: string;
      constructor(name: string);
      static createFrom(fields: {name: string}): BkOsmCityDTO;
    }
    namespace BkOsmCityDTO {
      interface $Fields {
        name: 0;
      }
    }

    class BkGoldenConstituencyDTO extends gc.sdk.GCObject {
      static readonly _type = 'backupExporter::BkGoldenConstituencyDTO';
      static readonly $fields: BkGoldenConstituencyDTO.$Fields;
      code: string;
      name: string;
      nameAliases: globalThis.Array<gc.mengplaz.Alias>;
      constructor(code: string, name: string, nameAliases: globalThis.Array<gc.mengplaz.Alias>);
      static createFrom(fields: {code: string, name: string, nameAliases: globalThis.Array<gc.mengplaz.Alias>}): BkGoldenConstituencyDTO;
    }
    namespace BkGoldenConstituencyDTO {
      interface $Fields {
        code: 0;
        name: 1;
        nameAliases: 2;
      }
    }

    class BkCaclrBuildingDTO extends gc.sdk.GCObject {
      static readonly _type = 'backupExporter::BkCaclrBuildingDTO';
      static readonly $fields: BkCaclrBuildingDTO.$Fields;
      id: string;
      number: number | bigint;
      isNumberUndefined: boolean;
      multipleCode: string;
      postalCode: string;
      position: gc.core.geo | null;
      administrativeStatus: gc.caclr.CaclrAdminStatus;
      validityStartDate: gc.core.time;
      validityEndDate: gc.core.time | null;
      lastUpdate: gc.core.time;
      streetId: string | null;
      goldenUid: string | null;
      lastSeenAt: gc.core.time | null;
      deprecated: boolean | null;
      constructor(id: string, number: number | bigint, isNumberUndefined: boolean, multipleCode: string, postalCode: string, position: gc.core.geo | null, administrativeStatus: gc.caclr.CaclrAdminStatus, validityStartDate: gc.core.time, validityEndDate: gc.core.time | null, lastUpdate: gc.core.time, streetId?: string | null, goldenUid?: string | null, lastSeenAt?: gc.core.time | null, deprecated?: boolean | null);
      static createFrom(fields: {id: string, number: number | bigint, isNumberUndefined: boolean, multipleCode: string, postalCode: string, position?: gc.core.geo | null, administrativeStatus: gc.caclr.CaclrAdminStatus, validityStartDate: gc.core.time, validityEndDate?: gc.core.time | null, lastUpdate: gc.core.time, streetId?: string | null, goldenUid?: string | null, lastSeenAt?: gc.core.time | null, deprecated?: boolean | null}): BkCaclrBuildingDTO;
    }
    namespace BkCaclrBuildingDTO {
      interface $Fields {
        id: 0;
        number: 1;
        isNumberUndefined: 2;
        multipleCode: 3;
        postalCode: 4;
        position: 5;
        administrativeStatus: 6;
        validityStartDate: 7;
        validityEndDate: 8;
        lastUpdate: 9;
        streetId: 10;
        goldenUid: 11;
        lastSeenAt: 12;
        deprecated: 13;
      }
    }

    class BkCaclrMunicipalityDTO extends gc.sdk.GCObject {
      static readonly _type = 'backupExporter::BkCaclrMunicipalityDTO';
      static readonly $fields: BkCaclrMunicipalityDTO.$Fields;
      id: string;
      code: string;
      coficomCode: string;
      compoundCode: string;
      name: string;
      nameUpperCase: string;
      nameLu: string;
      status: gc.caclr.CaclrDataStatus;
      validityStartDate: gc.core.time;
      validityEndDate: gc.core.time | null;
      lastUpdate: gc.core.time;
      eurostats: gc.caclr.CaclrEurostatsIds;
      cantonId: string;
      constructor(id: string, code: string, coficomCode: string, compoundCode: string, name: string, nameUpperCase: string, nameLu: string, status: gc.caclr.CaclrDataStatus, validityStartDate: gc.core.time, validityEndDate: gc.core.time | null, lastUpdate: gc.core.time, eurostats: gc.caclr.CaclrEurostatsIds, cantonId: string);
      static createFrom(fields: {id: string, code: string, coficomCode: string, compoundCode: string, name: string, nameUpperCase: string, nameLu: string, status: gc.caclr.CaclrDataStatus, validityStartDate: gc.core.time, validityEndDate?: gc.core.time | null, lastUpdate: gc.core.time, eurostats: gc.caclr.CaclrEurostatsIds, cantonId: string}): BkCaclrMunicipalityDTO;
    }
    namespace BkCaclrMunicipalityDTO {
      interface $Fields {
        id: 0;
        code: 1;
        coficomCode: 2;
        compoundCode: 3;
        name: 4;
        nameUpperCase: 5;
        nameLu: 6;
        status: 7;
        validityStartDate: 8;
        validityEndDate: 9;
        lastUpdate: 10;
        eurostats: 11;
        cantonId: 12;
      }
    }

    class BkCaclrCantonDTO extends gc.sdk.GCObject {
      static readonly _type = 'backupExporter::BkCaclrCantonDTO';
      static readonly $fields: BkCaclrCantonDTO.$Fields;
      id: string;
      code: string;
      name: string;
      lastUpdate: gc.core.time;
      constituencyCode: string;
      constructor(id: string, code: string, name: string, lastUpdate: gc.core.time, constituencyCode: string);
      static createFrom(fields: {id: string, code: string, name: string, lastUpdate: gc.core.time, constituencyCode: string}): BkCaclrCantonDTO;
    }
    namespace BkCaclrCantonDTO {
      interface $Fields {
        id: 0;
        code: 1;
        name: 2;
        lastUpdate: 3;
        constituencyCode: 4;
      }
    }

    class BkSourceDTO extends gc.sdk.GCObject {
      static readonly _type = 'backupExporter::BkSourceDTO';
      static readonly $fields: BkSourceDTO.$Fields;
      name: string;
      weight: number;
      lastUpdate: gc.core.time | null;
      constructor(name: string, weight: number, lastUpdate?: gc.core.time | null);
      static createFrom(fields: {name: string, weight: number, lastUpdate?: gc.core.time | null}): BkSourceDTO;
    }
    namespace BkSourceDTO {
      interface $Fields {
        name: 0;
        weight: 1;
        lastUpdate: 2;
      }
    }

    class BackupExporter extends gc.sdk.GCObject {
      static readonly _type = 'backupExporter::BackupExporter';
    }

    class BkCaclrStreetDTO extends gc.sdk.GCObject {
      static readonly _type = 'backupExporter::BkCaclrStreetDTO';
      static readonly $fields: BkCaclrStreetDTO.$Fields;
      id: string;
      name: string;
      nameUpperCase: string;
      keyWord: string;
      aliases: globalThis.Array<gc.mengplaz.Alias>;
      administrativeStatus: gc.caclr.CaclrAdminStatus;
      isPlace: boolean;
      validityStartDate: gc.core.time;
      validityEndDate: gc.core.time | null;
      lastUpdate: gc.core.time;
      cityId: string;
      constructor(id: string, name: string, nameUpperCase: string, keyWord: string, aliases: globalThis.Array<gc.mengplaz.Alias>, administrativeStatus: gc.caclr.CaclrAdminStatus, isPlace: boolean, validityStartDate: gc.core.time, validityEndDate: gc.core.time | null, lastUpdate: gc.core.time, cityId: string);
      static createFrom(fields: {id: string, name: string, nameUpperCase: string, keyWord: string, aliases: globalThis.Array<gc.mengplaz.Alias>, administrativeStatus: gc.caclr.CaclrAdminStatus, isPlace: boolean, validityStartDate: gc.core.time, validityEndDate?: gc.core.time | null, lastUpdate: gc.core.time, cityId: string}): BkCaclrStreetDTO;
    }
    namespace BkCaclrStreetDTO {
      interface $Fields {
        id: 0;
        name: 1;
        nameUpperCase: 2;
        keyWord: 3;
        aliases: 4;
        administrativeStatus: 5;
        isPlace: 6;
        validityStartDate: 7;
        validityEndDate: 8;
        lastUpdate: 9;
        cityId: 10;
      }
    }

    class BkGoldenCantonDTO extends gc.sdk.GCObject {
      static readonly _type = 'backupExporter::BkGoldenCantonDTO';
      static readonly $fields: BkGoldenCantonDTO.$Fields;
      id: string;
      name: string;
      nameAliases: globalThis.Array<gc.mengplaz.Alias>;
      constituencyId: string;
      lastUpdate: gc.core.time;
      constructor(id: string, name: string, nameAliases: globalThis.Array<gc.mengplaz.Alias>, constituencyId: string, lastUpdate: gc.core.time);
      static createFrom(fields: {id: string, name: string, nameAliases: globalThis.Array<gc.mengplaz.Alias>, constituencyId: string, lastUpdate: gc.core.time}): BkGoldenCantonDTO;
    }
    namespace BkGoldenCantonDTO {
      interface $Fields {
        id: 0;
        name: 1;
        nameAliases: 2;
        constituencyId: 3;
        lastUpdate: 4;
      }
    }

    class BkManifestEntryDTO extends gc.sdk.GCObject {
      static readonly _type = 'backupExporter::BkManifestEntryDTO';
      static readonly $fields: BkManifestEntryDTO.$Fields;
      file: string;
      records: number | bigint;
      constructor(file: string, records: number | bigint);
      static createFrom(fields: {file: string, records: number | bigint}): BkManifestEntryDTO;
    }
    namespace BkManifestEntryDTO {
      interface $Fields {
        file: 0;
        records: 1;
      }
    }

    class BkBdaMunicipalityDTO extends gc.sdk.GCObject {
      static readonly _type = 'backupExporter::BkBdaMunicipalityDTO';
      static readonly $fields: BkBdaMunicipalityDTO.$Fields;
      name: string;
      constructor(name: string);
      static createFrom(fields: {name: string}): BkBdaMunicipalityDTO;
    }
    namespace BkBdaMunicipalityDTO {
      interface $Fields {
        name: 0;
      }
    }

    class BkGoldenPoiDTO extends gc.sdk.GCObject {
      static readonly _type = 'backupExporter::BkGoldenPoiDTO';
      static readonly $fields: BkGoldenPoiDTO.$Fields;
      uid: string;
      number: number | bigint;
      multipleCode: string;
      postCode: string;
      primaryLocation: gc.core.geo | null;
      secondaryLocations: globalThis.Map<string, gc.core.geo>;
      streetId: string | null;
      lastUpdate: gc.core.time;
      linkedRecords: globalThis.Array<gc.backupExporter.BkGoldenLinkedRecordDTO> | null;
      quality: globalThis.Array<gc.backupExporter.BkGoldenQualityDTO> | null;
      constructor(uid: string, number: number | bigint, multipleCode: string, postCode: string, primaryLocation: gc.core.geo | null, secondaryLocations: globalThis.Map<string, gc.core.geo>, streetId: string | null, lastUpdate: gc.core.time, linkedRecords?: globalThis.Array<gc.backupExporter.BkGoldenLinkedRecordDTO> | null, quality?: globalThis.Array<gc.backupExporter.BkGoldenQualityDTO> | null);
      static createFrom(fields: {uid: string, number: number | bigint, multipleCode: string, postCode: string, primaryLocation?: gc.core.geo | null, secondaryLocations: globalThis.Map<string, gc.core.geo>, streetId?: string | null, lastUpdate: gc.core.time, linkedRecords?: globalThis.Array<gc.backupExporter.BkGoldenLinkedRecordDTO> | null, quality?: globalThis.Array<gc.backupExporter.BkGoldenQualityDTO> | null}): BkGoldenPoiDTO;
    }
    namespace BkGoldenPoiDTO {
      interface $Fields {
        uid: 0;
        number: 1;
        multipleCode: 2;
        postCode: 3;
        primaryLocation: 4;
        secondaryLocations: 5;
        streetId: 6;
        lastUpdate: 7;
        linkedRecords: 8;
        quality: 9;
      }
    }

    class BkGoldenQualityDTO extends gc.sdk.GCObject {
      static readonly _type = 'backupExporter::BkGoldenQualityDTO';
      static readonly $fields: BkGoldenQualityDTO.$Fields;
      t: gc.core.time;
      score: number;
      id: string | null;
      sourceName: string | null;
      eventType: gc.mengplaz.QualityEventType;
      constructor(t: gc.core.time, score: number, id: string | null, sourceName: string | null, eventType: gc.mengplaz.QualityEventType);
      static createFrom(fields: {t: gc.core.time, score: number, id?: string | null, sourceName?: string | null, eventType: gc.mengplaz.QualityEventType}): BkGoldenQualityDTO;
    }
    namespace BkGoldenQualityDTO {
      interface $Fields {
        t: 0;
        score: 1;
        id: 2;
        sourceName: 3;
        eventType: 4;
      }
    }

    class BkTrafficDTO extends gc.sdk.GCObject {
      static readonly _type = 'backupExporter::BkTrafficDTO';
      static readonly $fields: BkTrafficDTO.$Fields;
      endpoint: string;
      t: gc.core.time;
      user: number | bigint;
      executionTimeUs: number | bigint | null;
      constructor(endpoint: string, t: gc.core.time, user: number | bigint, executionTimeUs?: number | bigint | null);
      static createFrom(fields: {endpoint: string, t: gc.core.time, user: number | bigint, executionTimeUs?: number | bigint | null}): BkTrafficDTO;
    }
    namespace BkTrafficDTO {
      interface $Fields {
        endpoint: 0;
        t: 1;
        user: 2;
        executionTimeUs: 3;
      }
    }

    class BkCaclrConstituencyDTO extends gc.sdk.GCObject {
      static readonly _type = 'backupExporter::BkCaclrConstituencyDTO';
      static readonly $fields: BkCaclrConstituencyDTO.$Fields;
      code: string;
      name: string;
      constructor(code: string, name: string);
      static createFrom(fields: {code: string, name: string}): BkCaclrConstituencyDTO;
    }
    namespace BkCaclrConstituencyDTO {
      interface $Fields {
        code: 0;
        name: 1;
      }
    }

    class BkCaclrCityDTO extends gc.sdk.GCObject {
      static readonly _type = 'backupExporter::BkCaclrCityDTO';
      static readonly $fields: BkCaclrCityDTO.$Fields;
      id: string;
      code: string;
      compoundCode: string;
      name: string;
      nameUpperCase: string;
      aliases: globalThis.Array<gc.mengplaz.Alias>;
      isTown: boolean;
      validityStartDate: gc.core.time;
      validityEndDate: gc.core.time | null;
      lastUpdate: gc.core.time;
      municipalityId: string;
      constructor(id: string, code: string, compoundCode: string, name: string, nameUpperCase: string, aliases: globalThis.Array<gc.mengplaz.Alias>, isTown: boolean, validityStartDate: gc.core.time, validityEndDate: gc.core.time | null, lastUpdate: gc.core.time, municipalityId: string);
      static createFrom(fields: {id: string, code: string, compoundCode: string, name: string, nameUpperCase: string, aliases: globalThis.Array<gc.mengplaz.Alias>, isTown: boolean, validityStartDate: gc.core.time, validityEndDate?: gc.core.time | null, lastUpdate: gc.core.time, municipalityId: string}): BkCaclrCityDTO;
    }
    namespace BkCaclrCityDTO {
      interface $Fields {
        id: 0;
        code: 1;
        compoundCode: 2;
        name: 3;
        nameUpperCase: 4;
        aliases: 5;
        isTown: 6;
        validityStartDate: 7;
        validityEndDate: 8;
        lastUpdate: 9;
        municipalityId: 10;
      }
    }

    class BkGoldenStreetDTO extends gc.sdk.GCObject {
      static readonly _type = 'backupExporter::BkGoldenStreetDTO';
      static readonly $fields: BkGoldenStreetDTO.$Fields;
      id: string;
      name: string;
      nameAliases: globalThis.Array<gc.mengplaz.Alias>;
      cityId: string;
      lastUpdate: gc.core.time;
      constructor(id: string, name: string, nameAliases: globalThis.Array<gc.mengplaz.Alias>, cityId: string, lastUpdate: gc.core.time);
      static createFrom(fields: {id: string, name: string, nameAliases: globalThis.Array<gc.mengplaz.Alias>, cityId: string, lastUpdate: gc.core.time}): BkGoldenStreetDTO;
    }
    namespace BkGoldenStreetDTO {
      interface $Fields {
        id: 0;
        name: 1;
        nameAliases: 2;
        cityId: 3;
        lastUpdate: 4;
      }
    }

    class BkBdaAddressDTO extends gc.sdk.GCObject {
      static readonly _type = 'backupExporter::BkBdaAddressDTO';
      static readonly $fields: BkBdaAddressDTO.$Fields;
      idGeoportail: string;
      idCaclr: number | bigint;
      number: string;
      postcode: string;
      position: gc.core.geo;
      streetName: string;
      streetIdCaclr: number | bigint;
      cityName: string;
      municipalityName: string;
      goldenUid: string | null;
      lastSeenAt: gc.core.time | null;
      deprecated: boolean | null;
      constructor(idGeoportail: string, idCaclr: number | bigint, number: string, postcode: string, position: gc.core.geo, streetName: string, streetIdCaclr: number | bigint, cityName: string, municipalityName: string, goldenUid?: string | null, lastSeenAt?: gc.core.time | null, deprecated?: boolean | null);
      static createFrom(fields: {idGeoportail: string, idCaclr: number | bigint, number: string, postcode: string, position: gc.core.geo, streetName: string, streetIdCaclr: number | bigint, cityName: string, municipalityName: string, goldenUid?: string | null, lastSeenAt?: gc.core.time | null, deprecated?: boolean | null}): BkBdaAddressDTO;
    }
    namespace BkBdaAddressDTO {
      interface $Fields {
        idGeoportail: 0;
        idCaclr: 1;
        number: 2;
        postcode: 3;
        position: 4;
        streetName: 5;
        streetIdCaclr: 6;
        cityName: 7;
        municipalityName: 8;
        goldenUid: 9;
        lastSeenAt: 10;
        deprecated: 11;
      }
    }

    class BkOsmStreetDTO extends gc.sdk.GCObject {
      static readonly _type = 'backupExporter::BkOsmStreetDTO';
      static readonly $fields: BkOsmStreetDTO.$Fields;
      name: string;
      cityName: string;
      constructor(name: string, cityName: string);
      static createFrom(fields: {name: string, cityName: string}): BkOsmStreetDTO;
    }
    namespace BkOsmStreetDTO {
      interface $Fields {
        name: 0;
        cityName: 1;
      }
    }

    class BkGoldenMunicipalityDTO extends gc.sdk.GCObject {
      static readonly _type = 'backupExporter::BkGoldenMunicipalityDTO';
      static readonly $fields: BkGoldenMunicipalityDTO.$Fields;
      id: string;
      name: string;
      nameAliases: globalThis.Array<gc.mengplaz.Alias>;
      cantonId: string;
      lastUpdate: gc.core.time;
      constructor(id: string, name: string, nameAliases: globalThis.Array<gc.mengplaz.Alias>, cantonId: string, lastUpdate: gc.core.time);
      static createFrom(fields: {id: string, name: string, nameAliases: globalThis.Array<gc.mengplaz.Alias>, cantonId: string, lastUpdate: gc.core.time}): BkGoldenMunicipalityDTO;
    }
    namespace BkGoldenMunicipalityDTO {
      interface $Fields {
        id: 0;
        name: 1;
        nameAliases: 2;
        cantonId: 3;
        lastUpdate: 4;
      }
    }

    class BkGoldenQualityHistoryDTO extends gc.sdk.GCObject {
      static readonly _type = 'backupExporter::BkGoldenQualityHistoryDTO';
      static readonly $fields: BkGoldenQualityHistoryDTO.$Fields;
      t: gc.core.time;
      score: number;
      constructor(t: gc.core.time, score: number);
      static createFrom(fields: {t: gc.core.time, score: number}): BkGoldenQualityHistoryDTO;
    }
    namespace BkGoldenQualityHistoryDTO {
      interface $Fields {
        t: 0;
        score: 1;
      }
    }

    class BkBdaCityDTO extends gc.sdk.GCObject {
      static readonly _type = 'backupExporter::BkBdaCityDTO';
      static readonly $fields: BkBdaCityDTO.$Fields;
      name: string;
      municipalityName: string | null;
      constructor(name: string, municipalityName?: string | null);
      static createFrom(fields: {name: string, municipalityName?: string | null}): BkBdaCityDTO;
    }
    namespace BkBdaCityDTO {
      interface $Fields {
        name: 0;
        municipalityName: 1;
      }
    }

    class BkBdaStreetDTO extends gc.sdk.GCObject {
      static readonly _type = 'backupExporter::BkBdaStreetDTO';
      static readonly $fields: BkBdaStreetDTO.$Fields;
      name: string;
      idCaclr: number | bigint;
      cityName: string | null;
      municipalityName: string | null;
      constructor(name: string, idCaclr: number | bigint, cityName?: string | null, municipalityName?: string | null);
      static createFrom(fields: {name: string, idCaclr: number | bigint, cityName?: string | null, municipalityName?: string | null}): BkBdaStreetDTO;
    }
    namespace BkBdaStreetDTO {
      interface $Fields {
        name: 0;
        idCaclr: 1;
        cityName: 2;
        municipalityName: 3;
      }
    }

    class BkOsmPartialAddressDTO extends gc.sdk.GCObject {
      static readonly _type = 'backupExporter::BkOsmPartialAddressDTO';
      static readonly $fields: BkOsmPartialAddressDTO.$Fields;
      id: number | bigint;
      position: gc.core.geo | null;
      city: string | null;
      postcode: string | null;
      street: string | null;
      number: string | null;
      refCaclr: string | null;
      map: globalThis.Map<any | null, any | null>;
      constructor(id: number | bigint, position: gc.core.geo | null, city: string | null, postcode: string | null, street: string | null, number: string | null, refCaclr: string | null, map: globalThis.Map<any | null, any | null>);
      static createFrom(fields: {id: number | bigint, position?: gc.core.geo | null, city?: string | null, postcode?: string | null, street?: string | null, number?: string | null, refCaclr?: string | null, map: globalThis.Map<any | null, any | null>}): BkOsmPartialAddressDTO;
    }
    namespace BkOsmPartialAddressDTO {
      interface $Fields {
        id: 0;
        position: 1;
        city: 2;
        postcode: 3;
        street: 4;
        number: 5;
        refCaclr: 6;
        map: 7;
      }
    }

    class backupGraph$args extends gc.sdk.GCObject {
      static readonly _type = 'backupExporter::backupGraph$args';
    }

    class BkGoldenCityDTO extends gc.sdk.GCObject {
      static readonly _type = 'backupExporter::BkGoldenCityDTO';
      static readonly $fields: BkGoldenCityDTO.$Fields;
      id: string;
      name: string;
      nameAliases: globalThis.Array<gc.mengplaz.Alias>;
      municipalityId: string;
      lastUpdate: gc.core.time;
      constructor(id: string, name: string, nameAliases: globalThis.Array<gc.mengplaz.Alias>, municipalityId: string, lastUpdate: gc.core.time);
      static createFrom(fields: {id: string, name: string, nameAliases: globalThis.Array<gc.mengplaz.Alias>, municipalityId: string, lastUpdate: gc.core.time}): BkGoldenCityDTO;
    }
    namespace BkGoldenCityDTO {
      interface $Fields {
        id: 0;
        name: 1;
        nameAliases: 2;
        municipalityId: 3;
        lastUpdate: 4;
      }
    }

    class BkGoldenLinkedRecordDTO extends gc.sdk.GCObject {
      static readonly _type = 'backupExporter::BkGoldenLinkedRecordDTO';
      static readonly $fields: BkGoldenLinkedRecordDTO.$Fields;
      sourceName: string;
      id: string;
      score: number;
      detailedScore: gc.mengplaz.ReconciliationCandidateScore | null;
      constructor(sourceName: string, id: string, score: number, detailedScore?: gc.mengplaz.ReconciliationCandidateScore | null);
      static createFrom(fields: {sourceName: string, id: string, score: number, detailedScore?: gc.mengplaz.ReconciliationCandidateScore | null}): BkGoldenLinkedRecordDTO;
    }
    namespace BkGoldenLinkedRecordDTO {
      interface $Fields {
        sourceName: 0;
        id: 1;
        score: 2;
        detailedScore: 3;
      }
    }

    class BkOsmAddressDTO extends gc.sdk.GCObject {
      static readonly _type = 'backupExporter::BkOsmAddressDTO';
      static readonly $fields: BkOsmAddressDTO.$Fields;
      id: number | bigint;
      position: gc.core.geo;
      city: string;
      postcode: string;
      street: string;
      number: string;
      refCaclr: string | null;
      building: string | null;
      kind: string | null;
      streetRefName: string | null;
      streetRefCity: string | null;
      goldenUid: string | null;
      lastSeenAt: gc.core.time | null;
      deprecated: boolean | null;
      constructor(id: number | bigint, position: gc.core.geo, city: string, postcode: string, street: string, number: string, refCaclr?: string | null, building?: string | null, kind?: string | null, streetRefName?: string | null, streetRefCity?: string | null, goldenUid?: string | null, lastSeenAt?: gc.core.time | null, deprecated?: boolean | null);
      static createFrom(fields: {id: number | bigint, position: gc.core.geo, city: string, postcode: string, street: string, number: string, refCaclr?: string | null, building?: string | null, kind?: string | null, streetRefName?: string | null, streetRefCity?: string | null, goldenUid?: string | null, lastSeenAt?: gc.core.time | null, deprecated?: boolean | null}): BkOsmAddressDTO;
    }
    namespace BkOsmAddressDTO {
      interface $Fields {
        id: 0;
        position: 1;
        city: 2;
        postcode: 3;
        street: 4;
        number: 5;
        refCaclr: 6;
        building: 7;
        kind: 8;
        streetRefName: 9;
        streetRefCity: 10;
        goldenUid: 11;
        lastSeenAt: 12;
        deprecated: 13;
      }
    }

    /**
     * Dumps the whole graph to `files/backup/` (plus the golden dump in `files/dump/`).
     */
    const backupGraph: (($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<unknown>) & {
      spawn($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<unknown>>;
    };
  }

  namespace backupImporter {
    class BackupImporter extends gc.sdk.GCObject {
      static readonly _type = 'backupImporter::BackupImporter';
    }

    class restoreGraph$args extends gc.sdk.GCObject {
      static readonly _type = 'backupImporter::restoreGraph$args';
    }

    /**
     * Restores the whole graph from `files/backup/`.
     */
    const restoreGraph: (($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<unknown>) & {
      spawn($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<unknown>>;
    };
  }

  namespace trafic {
    class Traffic extends gc.sdk.GCObject {
      static readonly _type = 'trafic::Traffic';
      static readonly $fields: Traffic.$Fields;
      user: number | bigint;
      executionTime: gc.core.duration | null;
      constructor(user: number | bigint, executionTime?: gc.core.duration | null);
      static createFrom(fields: {user: number | bigint, executionTime?: gc.core.duration | null}): Traffic;
    }
    namespace Traffic {
      interface $Fields {
        user: 0;
        executionTime: 1;
      }
    }

    class Endpoint extends gc.sdk.GCObject {
      static readonly _type = 'trafic::Endpoint';
      static readonly $fields: Endpoint.$Fields;
      name: string;
      traffic: gc.core.nodeTime<gc.trafic.Traffic>;
      constructor(name: string, traffic: gc.core.nodeTime<gc.trafic.Traffic>);
      static createFrom(fields: {name: string, traffic: gc.core.nodeTime<gc.trafic.Traffic>}): Endpoint;
    }
    namespace Endpoint {
      interface $Fields {
        name: 0;
        traffic: 1;
      }
    }

  }

  namespace errors {
    class MengplazMissmatch extends gc.sdk.GCEnum {
      static readonly _type = 'errors::MengplazMissmatch';
      static readonly $fields: MengplazMissmatch[];
      key: MengplazMissmatch.Field;
      constructor(type: gc.sdk.AbiType, offset: number, key: MengplazMissmatch.Field);
      static STREET_MISMATCH: MengplazMissmatch;
      static CITY_MISMATCH: MengplazMissmatch;
      static POSTCODE_MISMATCH: MengplazMissmatch;
      static NUMBER_MISMATCH: MengplazMissmatch;
      static COMPLEX_MISMATCH: MengplazMissmatch;
      static MULTIPLE_MATCHES: MengplazMissmatch;
    }
    namespace MengplazMissmatch  {
      type Field = "STREET_MISMATCH"|"CITY_MISMATCH"|"POSTCODE_MISMATCH"|"NUMBER_MISMATCH"|"COMPLEX_MISMATCH"|"MULTIPLE_MATCHES";
    }

    class AddrErr extends gc.sdk.GCEnum {
      static readonly _type = 'errors::AddrErr';
      static readonly $fields: AddrErr[];
      key: AddrErr.Field;
      constructor(type: gc.sdk.AbiType, offset: number, key: AddrErr.Field);
      static STREET_MISSING: AddrErr;
      static CITY_MISSING: AddrErr;
      static POSTCODE_MISSING: AddrErr;
    }
    namespace AddrErr  {
      type Field = "STREET_MISSING"|"CITY_MISSING"|"POSTCODE_MISSING";
    }

  }

  namespace bdaddress {
    class BDAddressFullRecord extends gc.sdk.GCObject {
      static readonly _type = 'bdaddress::BDAddressFullRecord';
      static readonly $fields: BDAddressFullRecord.$Fields;
      id_geoportail: string;
      id_caclr: number | bigint;
      number: string;
      postcode: string;
      street: string;
      locality: string;
      commune: string;
      primaryLocation: gc.core.geo | null;
      sourceName: string;
      goldenRef: gc.core.node<gc.golden.GoldenPointOfInterest> | null;
      deprecated: boolean | null;
      lastSeenAt: gc.core.time | null;
      constructor(id_geoportail: string, id_caclr: number | bigint, number: string, postcode: string, street: string, locality: string, commune: string, primaryLocation: gc.core.geo | null, sourceName: string, goldenRef?: gc.core.node<gc.golden.GoldenPointOfInterest> | null, deprecated?: boolean | null, lastSeenAt?: gc.core.time | null);
      static createFrom(fields: {id_geoportail: string, id_caclr: number | bigint, number: string, postcode: string, street: string, locality: string, commune: string, primaryLocation?: gc.core.geo | null, sourceName: string, goldenRef?: gc.core.node<gc.golden.GoldenPointOfInterest> | null, deprecated?: boolean | null, lastSeenAt?: gc.core.time | null}): BDAddressFullRecord;
    }
    namespace BDAddressFullRecord {
      interface $Fields {
        id_geoportail: 0;
        id_caclr: 1;
        number: 2;
        postcode: 3;
        street: 4;
        locality: 5;
        commune: 6;
        primaryLocation: 7;
        sourceName: 8;
        goldenRef: 9;
        deprecated: 10;
        lastSeenAt: 11;
      }
    }

    class BDAddressSource extends gc.sdk.GCObject {
      static readonly _type = 'bdaddress::BDAddressSource';
      static readonly $fields: BDAddressSource.$Fields;
      reconciliationReport: gc.core.node<gc.mengplaz.ReconciliationReport>;
      isReconciling: gc.core.node<boolean> | null;
      lastUpdate: gc.core.time | null;
      constructor(reconciliationReport: gc.core.node<gc.mengplaz.ReconciliationReport>, isReconciling?: gc.core.node<boolean> | null, lastUpdate?: gc.core.time | null);
      static createFrom(fields: {reconciliationReport: gc.core.node<gc.mengplaz.ReconciliationReport>, isReconciling?: gc.core.node<boolean> | null, lastUpdate?: gc.core.time | null}): BDAddressSource;
    }
    namespace BDAddressSource {
      interface $Fields {
        reconciliationReport: 0;
        isReconciling: 1;
        lastUpdate: 2;
      }
    }

    class BDACity extends gc.sdk.GCObject {
      static readonly _type = 'bdaddress::BDACity';
      static readonly $fields: BDACity.$Fields;
      name: string;
      municipality: gc.core.node<gc.bdaddress.BDAMunicipality> | null;
      streets_by_name: gc.core.nodeIndex<string, gc.core.node<gc.bdaddress.BDAStreet>> | null;
      constructor(name: string, municipality?: gc.core.node<gc.bdaddress.BDAMunicipality> | null, streets_by_name?: gc.core.nodeIndex<string, gc.core.node<gc.bdaddress.BDAStreet>> | null);
      static createFrom(fields: {name: string, municipality?: gc.core.node<gc.bdaddress.BDAMunicipality> | null, streets_by_name?: gc.core.nodeIndex<string, gc.core.node<gc.bdaddress.BDAStreet>> | null}): BDACity;
    }
    namespace BDACity {
      interface $Fields {
        name: 0;
        municipality: 1;
        streets_by_name: 2;
      }
    }

    class BDAddress extends gc.sdk.GCObject {
      static readonly _type = 'bdaddress::BDAddress';
      static readonly $fields: BDAddress.$Fields;
      number: string;
      postcode: string;
      position: gc.core.geo;
      id_caclr: number | bigint;
      id_geoportail: string;
      municipatlity: gc.core.node<gc.bdaddress.BDAMunicipality>;
      city: gc.core.node<gc.bdaddress.BDACity>;
      street: gc.core.node<gc.bdaddress.BDAStreet>;
      goldenRef: gc.core.node<gc.golden.GoldenPointOfInterest> | null;
      lastSeenAt: gc.core.time | null;
      deprecated: boolean | null;
      constructor(number: string, postcode: string, position: gc.core.geo, id_caclr: number | bigint, id_geoportail: string, municipatlity: gc.core.node<gc.bdaddress.BDAMunicipality>, city: gc.core.node<gc.bdaddress.BDACity>, street: gc.core.node<gc.bdaddress.BDAStreet>, goldenRef?: gc.core.node<gc.golden.GoldenPointOfInterest> | null, lastSeenAt?: gc.core.time | null, deprecated?: boolean | null);
      static createFrom(fields: {number: string, postcode: string, position: gc.core.geo, id_caclr: number | bigint, id_geoportail: string, municipatlity: gc.core.node<gc.bdaddress.BDAMunicipality>, city: gc.core.node<gc.bdaddress.BDACity>, street: gc.core.node<gc.bdaddress.BDAStreet>, goldenRef?: gc.core.node<gc.golden.GoldenPointOfInterest> | null, lastSeenAt?: gc.core.time | null, deprecated?: boolean | null}): BDAddress;
    }
    namespace BDAddress {
      interface $Fields {
        number: 0;
        postcode: 1;
        position: 2;
        id_caclr: 3;
        id_geoportail: 4;
        municipatlity: 5;
        city: 6;
        street: 7;
        goldenRef: 8;
        lastSeenAt: 9;
        deprecated: 10;
      }
    }

    class BDAMunicipality extends gc.sdk.GCObject {
      static readonly _type = 'bdaddress::BDAMunicipality';
      static readonly $fields: BDAMunicipality.$Fields;
      name: string;
      cities_by_name: gc.core.nodeIndex<string, gc.core.node<gc.bdaddress.BDACity>> | null;
      constructor(name: string, cities_by_name?: gc.core.nodeIndex<string, gc.core.node<gc.bdaddress.BDACity>> | null);
      static createFrom(fields: {name: string, cities_by_name?: gc.core.nodeIndex<string, gc.core.node<gc.bdaddress.BDACity>> | null}): BDAMunicipality;
    }
    namespace BDAMunicipality {
      interface $Fields {
        name: 0;
        cities_by_name: 1;
      }
    }

    class BDAStreet extends gc.sdk.GCObject {
      static readonly _type = 'bdaddress::BDAStreet';
      static readonly $fields: BDAStreet.$Fields;
      name: string;
      id_caclr: number | bigint;
      city: gc.core.node<gc.bdaddress.BDACity> | null;
      addresses_by_id: gc.core.nodeIndex<string, gc.core.node<gc.bdaddress.BDAddress>> | null;
      addresses_by_number: gc.core.nodeIndex<string, gc.core.node<gc.bdaddress.BDAddress>> | null;
      constructor(name: string, id_caclr: number | bigint, city?: gc.core.node<gc.bdaddress.BDACity> | null, addresses_by_id?: gc.core.nodeIndex<string, gc.core.node<gc.bdaddress.BDAddress>> | null, addresses_by_number?: gc.core.nodeIndex<string, gc.core.node<gc.bdaddress.BDAddress>> | null);
      static createFrom(fields: {name: string, id_caclr: number | bigint, city?: gc.core.node<gc.bdaddress.BDACity> | null, addresses_by_id?: gc.core.nodeIndex<string, gc.core.node<gc.bdaddress.BDAddress>> | null, addresses_by_number?: gc.core.nodeIndex<string, gc.core.node<gc.bdaddress.BDAddress>> | null}): BDAStreet;
    }
    namespace BDAStreet {
      interface $Fields {
        name: 0;
        id_caclr: 1;
        city: 2;
        addresses_by_id: 3;
        addresses_by_number: 4;
      }
    }

  }

  namespace caclr {
    class CaclrSource extends gc.sdk.GCObject {
      static readonly _type = 'caclr::CaclrSource';
      static readonly $fields: CaclrSource.$Fields;
      reconciliationReport: gc.core.node<gc.mengplaz.ReconciliationReport>;
      isReconciling: gc.core.node<boolean> | null;
      lastUpdate: gc.core.time | null;
      constructor(reconciliationReport: gc.core.node<gc.mengplaz.ReconciliationReport>, isReconciling?: gc.core.node<boolean> | null, lastUpdate?: gc.core.time | null);
      static createFrom(fields: {reconciliationReport: gc.core.node<gc.mengplaz.ReconciliationReport>, isReconciling?: gc.core.node<boolean> | null, lastUpdate?: gc.core.time | null}): CaclrSource;
    }
    namespace CaclrSource {
      interface $Fields {
        reconciliationReport: 0;
        isReconciling: 1;
        lastUpdate: 2;
      }
    }

    class CaclrStreet extends gc.sdk.GCObject {
      static readonly _type = 'caclr::CaclrStreet';
      static readonly $fields: CaclrStreet.$Fields;
      id: string;
      name: string;
      nameUpperCase: string;
      keyWord: string;
      aliases: globalThis.Array<gc.mengplaz.Alias>;
      administrativeStatus: gc.caclr.CaclrAdminStatus;
      isPlace: boolean;
      validityStartDate: gc.core.time;
      validityEndDate: gc.core.time | null;
      lastUpdate: gc.core.time;
      city: gc.core.node<gc.caclr.CaclrCity>;
      buildings_by_id: gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrBuilding>>;
      buildings_by_number: gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrBuilding>> | null;
      goldenStreet: gc.core.node<gc.golden.GoldenStreet> | null;
      constructor(id: string, name: string, nameUpperCase: string, keyWord: string, aliases: globalThis.Array<gc.mengplaz.Alias>, administrativeStatus: gc.caclr.CaclrAdminStatus, isPlace: boolean, validityStartDate: gc.core.time, validityEndDate: gc.core.time | null, lastUpdate: gc.core.time, city: gc.core.node<gc.caclr.CaclrCity>, buildings_by_id: gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrBuilding>>, buildings_by_number?: gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrBuilding>> | null, goldenStreet?: gc.core.node<gc.golden.GoldenStreet> | null);
      static createFrom(fields: {id: string, name: string, nameUpperCase: string, keyWord: string, aliases: globalThis.Array<gc.mengplaz.Alias>, administrativeStatus: gc.caclr.CaclrAdminStatus, isPlace: boolean, validityStartDate: gc.core.time, validityEndDate?: gc.core.time | null, lastUpdate: gc.core.time, city: gc.core.node<gc.caclr.CaclrCity>, buildings_by_id: gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrBuilding>>, buildings_by_number?: gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrBuilding>> | null, goldenStreet?: gc.core.node<gc.golden.GoldenStreet> | null}): CaclrStreet;
    }
    namespace CaclrStreet {
      interface $Fields {
        id: 0;
        name: 1;
        nameUpperCase: 2;
        keyWord: 3;
        aliases: 4;
        administrativeStatus: 5;
        isPlace: 6;
        validityStartDate: 7;
        validityEndDate: 8;
        lastUpdate: 9;
        city: 10;
        buildings_by_id: 11;
        buildings_by_number: 12;
        goldenStreet: 13;
      }
    }

    class CaclrConstituency extends gc.sdk.GCObject {
      static readonly _type = 'caclr::CaclrConstituency';
      static readonly $fields: CaclrConstituency.$Fields;
      code: string;
      name: string;
      cantons_by_id: gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrCanton>>;
      goldenConstituency: gc.core.node<gc.golden.GoldenConstituency> | null;
      constructor(code: string, name: string, cantons_by_id: gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrCanton>>, goldenConstituency?: gc.core.node<gc.golden.GoldenConstituency> | null);
      static createFrom(fields: {code: string, name: string, cantons_by_id: gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrCanton>>, goldenConstituency?: gc.core.node<gc.golden.GoldenConstituency> | null}): CaclrConstituency;
    }
    namespace CaclrConstituency {
      interface $Fields {
        code: 0;
        name: 1;
        cantons_by_id: 2;
        goldenConstituency: 3;
      }
    }

    class CaclrCanton extends gc.sdk.GCObject {
      static readonly _type = 'caclr::CaclrCanton';
      static readonly $fields: CaclrCanton.$Fields;
      id: string;
      code: string;
      name: string;
      lastUpdate: gc.core.time;
      constituency: gc.core.node<gc.caclr.CaclrConstituency>;
      municipalities_by_id: gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrMunicipality>>;
      goldenCanton: gc.core.node<gc.golden.GoldenCanton> | null;
      constructor(id: string, code: string, name: string, lastUpdate: gc.core.time, constituency: gc.core.node<gc.caclr.CaclrConstituency>, municipalities_by_id: gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrMunicipality>>, goldenCanton?: gc.core.node<gc.golden.GoldenCanton> | null);
      static createFrom(fields: {id: string, code: string, name: string, lastUpdate: gc.core.time, constituency: gc.core.node<gc.caclr.CaclrConstituency>, municipalities_by_id: gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrMunicipality>>, goldenCanton?: gc.core.node<gc.golden.GoldenCanton> | null}): CaclrCanton;
    }
    namespace CaclrCanton {
      interface $Fields {
        id: 0;
        code: 1;
        name: 2;
        lastUpdate: 3;
        constituency: 4;
        municipalities_by_id: 5;
        goldenCanton: 6;
      }
    }

    class CaclrToken extends gc.sdk.GCObject {
      static readonly _type = 'caclr::CaclrToken';
      static readonly $fields: CaclrToken.$Fields;
      access_token: string;
      token_type: string;
      expires_in: number | bigint;
      scope: string;
      iss: string;
      expiry_time: gc.core.time;
      constructor(access_token: string, token_type: string, expires_in: number | bigint, scope: string, iss: string, expiry_time: gc.core.time);
      static createFrom(fields: {access_token: string, token_type: string, expires_in: number | bigint, scope: string, iss: string, expiry_time: gc.core.time}): CaclrToken;
    }
    namespace CaclrToken {
      interface $Fields {
        access_token: 0;
        token_type: 1;
        expires_in: 2;
        scope: 3;
        iss: 4;
        expiry_time: 5;
      }
    }

    class CaclrDataStatus extends gc.sdk.GCEnum {
      static readonly _type = 'caclr::CaclrDataStatus';
      static readonly $fields: CaclrDataStatus[];
      key: CaclrDataStatus.Field;
      constructor(type: gc.sdk.AbiType, offset: number, key: CaclrDataStatus.Field);
      static ACTIVE: CaclrDataStatus;
      static HISTORIC: CaclrDataStatus;
      static ALL: CaclrDataStatus;
    }
    namespace CaclrDataStatus  {
      type Field = "ACTIVE"|"HISTORIC"|"ALL";
    }

    class CaclrAdminStatus extends gc.sdk.GCEnum {
      static readonly _type = 'caclr::CaclrAdminStatus';
      static readonly $fields: CaclrAdminStatus[];
      key: CaclrAdminStatus.Field;
      constructor(type: gc.sdk.AbiType, offset: number, key: CaclrAdminStatus.Field);
      static OFFICIAL: CaclrAdminStatus;
    }
    namespace CaclrAdminStatus  {
      type Field = "OFFICIAL";
    }

    class CaclrMunicipality extends gc.sdk.GCObject {
      static readonly _type = 'caclr::CaclrMunicipality';
      static readonly $fields: CaclrMunicipality.$Fields;
      id: string;
      code: string;
      coficomCode: string;
      compoundCode: string;
      name: string;
      nameUpperCase: string;
      nameLu: string;
      status: gc.caclr.CaclrDataStatus;
      validityStartDate: gc.core.time;
      validityEndDate: gc.core.time | null;
      lastUpdate: gc.core.time;
      eurostats: gc.caclr.CaclrEurostatsIds;
      canton: gc.core.node<gc.caclr.CaclrCanton>;
      cities_by_id: gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrCity>>;
      cities_by_name: gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrCity>> | null;
      goldenMunicipality: gc.core.node<gc.golden.GoldenMunicipality> | null;
      constructor(id: string, code: string, coficomCode: string, compoundCode: string, name: string, nameUpperCase: string, nameLu: string, status: gc.caclr.CaclrDataStatus, validityStartDate: gc.core.time, validityEndDate: gc.core.time | null, lastUpdate: gc.core.time, eurostats: gc.caclr.CaclrEurostatsIds, canton: gc.core.node<gc.caclr.CaclrCanton>, cities_by_id: gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrCity>>, cities_by_name?: gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrCity>> | null, goldenMunicipality?: gc.core.node<gc.golden.GoldenMunicipality> | null);
      static createFrom(fields: {id: string, code: string, coficomCode: string, compoundCode: string, name: string, nameUpperCase: string, nameLu: string, status: gc.caclr.CaclrDataStatus, validityStartDate: gc.core.time, validityEndDate?: gc.core.time | null, lastUpdate: gc.core.time, eurostats: gc.caclr.CaclrEurostatsIds, canton: gc.core.node<gc.caclr.CaclrCanton>, cities_by_id: gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrCity>>, cities_by_name?: gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrCity>> | null, goldenMunicipality?: gc.core.node<gc.golden.GoldenMunicipality> | null}): CaclrMunicipality;
    }
    namespace CaclrMunicipality {
      interface $Fields {
        id: 0;
        code: 1;
        coficomCode: 2;
        compoundCode: 3;
        name: 4;
        nameUpperCase: 5;
        nameLu: 6;
        status: 7;
        validityStartDate: 8;
        validityEndDate: 9;
        lastUpdate: 10;
        eurostats: 11;
        canton: 12;
        cities_by_id: 13;
        cities_by_name: 14;
        goldenMunicipality: 15;
      }
    }

    class CaclrTokenResponse extends gc.sdk.GCObject {
      static readonly _type = 'caclr::CaclrTokenResponse';
      static readonly $fields: CaclrTokenResponse.$Fields;
      access_token: string;
      token_type: string;
      expires_in: number | bigint;
      scope: string;
      iss: string;
      constructor(access_token: string, token_type: string, expires_in: number | bigint, scope: string, iss: string);
      static createFrom(fields: {access_token: string, token_type: string, expires_in: number | bigint, scope: string, iss: string}): CaclrTokenResponse;
    }
    namespace CaclrTokenResponse {
      interface $Fields {
        access_token: 0;
        token_type: 1;
        expires_in: 2;
        scope: 3;
        iss: 4;
      }
    }

    class CaclrCity extends gc.sdk.GCObject {
      static readonly _type = 'caclr::CaclrCity';
      static readonly $fields: CaclrCity.$Fields;
      id: string;
      code: string;
      compoundCode: string;
      name: string;
      nameUpperCase: string;
      aliases: globalThis.Array<gc.mengplaz.Alias>;
      isTown: boolean;
      validityStartDate: gc.core.time;
      validityEndDate: gc.core.time | null;
      lastUpdate: gc.core.time;
      municipality: gc.core.node<gc.caclr.CaclrMunicipality>;
      streets_by_id: gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrStreet>>;
      streets_by_name: gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrStreet>> | null;
      goldenCity: gc.core.node<gc.golden.GoldenCity> | null;
      constructor(id: string, code: string, compoundCode: string, name: string, nameUpperCase: string, aliases: globalThis.Array<gc.mengplaz.Alias>, isTown: boolean, validityStartDate: gc.core.time, validityEndDate: gc.core.time | null, lastUpdate: gc.core.time, municipality: gc.core.node<gc.caclr.CaclrMunicipality>, streets_by_id: gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrStreet>>, streets_by_name?: gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrStreet>> | null, goldenCity?: gc.core.node<gc.golden.GoldenCity> | null);
      static createFrom(fields: {id: string, code: string, compoundCode: string, name: string, nameUpperCase: string, aliases: globalThis.Array<gc.mengplaz.Alias>, isTown: boolean, validityStartDate: gc.core.time, validityEndDate?: gc.core.time | null, lastUpdate: gc.core.time, municipality: gc.core.node<gc.caclr.CaclrMunicipality>, streets_by_id: gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrStreet>>, streets_by_name?: gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrStreet>> | null, goldenCity?: gc.core.node<gc.golden.GoldenCity> | null}): CaclrCity;
    }
    namespace CaclrCity {
      interface $Fields {
        id: 0;
        code: 1;
        compoundCode: 2;
        name: 3;
        nameUpperCase: 4;
        aliases: 5;
        isTown: 6;
        validityStartDate: 7;
        validityEndDate: 8;
        lastUpdate: 9;
        municipality: 10;
        streets_by_id: 11;
        streets_by_name: 12;
        goldenCity: 13;
      }
    }

    class CaclrPOIFullRecord extends gc.sdk.GCObject {
      static readonly _type = 'caclr::CaclrPOIFullRecord';
      static readonly $fields: CaclrPOIFullRecord.$Fields;
      id: string;
      number: number | bigint;
      multipleCode: string;
      postalCode: string;
      street: string | null;
      streetAliases: globalThis.Array<gc.mengplaz.Alias> | null;
      locality: string | null;
      localityAliases: globalThis.Array<gc.mengplaz.Alias> | null;
      commune: string | null;
      canton: string | null;
      constituency: string | null;
      primaryLocation: gc.core.geo | null;
      administrativeStatus: gc.caclr.CaclrAdminStatus;
      validityStartDate: gc.core.time;
      validityEndDate: gc.core.time | null;
      lastUpdate: gc.core.time;
      sourceName: string;
      goldenRef: gc.core.node<gc.golden.GoldenPointOfInterest> | null;
      deprecated: boolean | null;
      lastSeenAt: gc.core.time | null;
      constructor(id: string, number: number | bigint, multipleCode: string, postalCode: string, street: string | null, streetAliases: globalThis.Array<gc.mengplaz.Alias> | null, locality: string | null, localityAliases: globalThis.Array<gc.mengplaz.Alias> | null, commune: string | null, canton: string | null, constituency: string | null, primaryLocation: gc.core.geo | null, administrativeStatus: gc.caclr.CaclrAdminStatus, validityStartDate: gc.core.time, validityEndDate: gc.core.time | null, lastUpdate: gc.core.time, sourceName: string, goldenRef?: gc.core.node<gc.golden.GoldenPointOfInterest> | null, deprecated?: boolean | null, lastSeenAt?: gc.core.time | null);
      static createFrom(fields: {id: string, number: number | bigint, multipleCode: string, postalCode: string, street?: string | null, streetAliases?: globalThis.Array<gc.mengplaz.Alias> | null, locality?: string | null, localityAliases?: globalThis.Array<gc.mengplaz.Alias> | null, commune?: string | null, canton?: string | null, constituency?: string | null, primaryLocation?: gc.core.geo | null, administrativeStatus: gc.caclr.CaclrAdminStatus, validityStartDate: gc.core.time, validityEndDate?: gc.core.time | null, lastUpdate: gc.core.time, sourceName: string, goldenRef?: gc.core.node<gc.golden.GoldenPointOfInterest> | null, deprecated?: boolean | null, lastSeenAt?: gc.core.time | null}): CaclrPOIFullRecord;
    }
    namespace CaclrPOIFullRecord {
      interface $Fields {
        id: 0;
        number: 1;
        multipleCode: 2;
        postalCode: 3;
        street: 4;
        streetAliases: 5;
        locality: 6;
        localityAliases: 7;
        commune: 8;
        canton: 9;
        constituency: 10;
        primaryLocation: 11;
        administrativeStatus: 12;
        validityStartDate: 13;
        validityEndDate: 14;
        lastUpdate: 15;
        sourceName: 16;
        goldenRef: 17;
        deprecated: 18;
        lastSeenAt: 19;
      }
    }

    class CaclrEurostatsIds extends gc.sdk.GCObject {
      static readonly _type = 'caclr::CaclrEurostatsIds';
      static readonly $fields: CaclrEurostatsIds.$Fields;
      nuts3: string;
      lau1: string;
      lau2: string;
      constructor(nuts3: string, lau1: string, lau2: string);
      static createFrom(fields: {nuts3: string, lau1: string, lau2: string}): CaclrEurostatsIds;
    }
    namespace CaclrEurostatsIds {
      interface $Fields {
        nuts3: 0;
        lau1: 1;
        lau2: 2;
      }
    }

    class CaclrBuilding extends gc.sdk.GCObject {
      static readonly _type = 'caclr::CaclrBuilding';
      static readonly $fields: CaclrBuilding.$Fields;
      id: string;
      number: number | bigint;
      isNumberUndefined: boolean;
      postalCode: string;
      multipleCode: string;
      position: gc.core.geo | null;
      administrativeStatus: gc.caclr.CaclrAdminStatus;
      validityStartDate: gc.core.time;
      validityEndDate: gc.core.time | null;
      lastUpdate: gc.core.time;
      street: gc.core.node<gc.caclr.CaclrStreet> | null;
      goldenRef: gc.core.node<gc.golden.GoldenPointOfInterest> | null;
      lastSeenAt: gc.core.time | null;
      deprecated: boolean | null;
      constructor(id: string, number: number | bigint, isNumberUndefined: boolean, postalCode: string, multipleCode: string, position: gc.core.geo | null, administrativeStatus: gc.caclr.CaclrAdminStatus, validityStartDate: gc.core.time, validityEndDate: gc.core.time | null, lastUpdate: gc.core.time, street?: gc.core.node<gc.caclr.CaclrStreet> | null, goldenRef?: gc.core.node<gc.golden.GoldenPointOfInterest> | null, lastSeenAt?: gc.core.time | null, deprecated?: boolean | null);
      static createFrom(fields: {id: string, number: number | bigint, isNumberUndefined: boolean, postalCode: string, multipleCode: string, position?: gc.core.geo | null, administrativeStatus: gc.caclr.CaclrAdminStatus, validityStartDate: gc.core.time, validityEndDate?: gc.core.time | null, lastUpdate: gc.core.time, street?: gc.core.node<gc.caclr.CaclrStreet> | null, goldenRef?: gc.core.node<gc.golden.GoldenPointOfInterest> | null, lastSeenAt?: gc.core.time | null, deprecated?: boolean | null}): CaclrBuilding;
    }
    namespace CaclrBuilding {
      interface $Fields {
        id: 0;
        number: 1;
        isNumberUndefined: 2;
        postalCode: 3;
        multipleCode: 4;
        position: 5;
        administrativeStatus: 6;
        validityStartDate: 7;
        validityEndDate: 8;
        lastUpdate: 9;
        street: 10;
        goldenRef: 11;
        lastSeenAt: 12;
        deprecated: 13;
      }
    }

  }

  namespace mengplaz {
    class POIFullRecordRef extends gc.sdk.GCObject {
      static readonly _type = 'mengplaz::POIFullRecordRef';
      static readonly $fields: POIFullRecordRef.$Fields;
      ref: gc.core.node<gc.mengplaz.POIRecordProvider>;
      id: string;
      record: any;
      matchScore: number | null;
      constructor(ref: gc.core.node<gc.mengplaz.POIRecordProvider>, id: string, record: any, matchScore?: number | null);
      static createFrom(fields: {ref: gc.core.node<gc.mengplaz.POIRecordProvider>, id: string, record: any, matchScore?: number | null}): POIFullRecordRef;
    }
    namespace POIFullRecordRef {
      interface $Fields {
        ref: 0;
        id: 1;
        record: 2;
        matchScore: 3;
      }
    }

    class QualityEventType extends gc.sdk.GCEnum {
      static readonly _type = 'mengplaz::QualityEventType';
      static readonly $fields: QualityEventType[];
      key: QualityEventType.Field;
      constructor(type: gc.sdk.AbiType, offset: number, key: QualityEventType.Field);
      static link: QualityEventType;
      static unlink: QualityEventType;
      static update: QualityEventType;
    }
    namespace QualityEventType  {
      type Field = "link"|"unlink"|"update";
    }

    class POIRecordProvider extends gc.sdk.GCObject {
      static readonly _type = 'mengplaz::POIRecordProvider';
    }

    class LinkedRecordEntry extends gc.sdk.GCObject {
      static readonly _type = 'mengplaz::LinkedRecordEntry';
      static readonly $fields: LinkedRecordEntry.$Fields;
      record: gc.core.node<gc.mengplaz.POIRecordProvider>;
      score: number;
      detailedScore: gc.core.node<gc.mengplaz.ReconciliationCandidateScore> | null;
      constructor(record: gc.core.node<gc.mengplaz.POIRecordProvider>, score: number, detailedScore?: gc.core.node<gc.mengplaz.ReconciliationCandidateScore> | null);
      static createFrom(fields: {record: gc.core.node<gc.mengplaz.POIRecordProvider>, score: number, detailedScore?: gc.core.node<gc.mengplaz.ReconciliationCandidateScore> | null}): LinkedRecordEntry;
    }
    namespace LinkedRecordEntry {
      interface $Fields {
        record: 0;
        score: 1;
        detailedScore: 2;
      }
    }

    class ReconciliationCandidate extends gc.sdk.GCObject {
      static readonly _type = 'mengplaz::ReconciliationCandidate';
      static readonly $fields: ReconciliationCandidate.$Fields;
      candidateRecord: gc.core.node<gc.mengplaz.POIRecordProvider>;
      score: gc.mengplaz.ReconciliationCandidateScore | null;
      mismatch: gc.errors.MengplazMissmatch | null;
      detailedScore: gc.core.node<gc.mengplaz.ReconciliationCandidateScore> | null;
      constructor(candidateRecord: gc.core.node<gc.mengplaz.POIRecordProvider>, score?: gc.mengplaz.ReconciliationCandidateScore | null, mismatch?: gc.errors.MengplazMissmatch | null, detailedScore?: gc.core.node<gc.mengplaz.ReconciliationCandidateScore> | null);
      static createFrom(fields: {candidateRecord: gc.core.node<gc.mengplaz.POIRecordProvider>, score?: gc.mengplaz.ReconciliationCandidateScore | null, mismatch?: gc.errors.MengplazMissmatch | null, detailedScore?: gc.core.node<gc.mengplaz.ReconciliationCandidateScore> | null}): ReconciliationCandidate;
    }
    namespace ReconciliationCandidate {
      interface $Fields {
        candidateRecord: 0;
        score: 1;
        mismatch: 2;
        detailedScore: 3;
      }
    }

    class ReconciliationReport extends gc.sdk.GCObject {
      static readonly _type = 'mengplaz::ReconciliationReport';
      static readonly $fields: ReconciliationReport.$Fields;
      date: gc.core.time;
      linked: gc.core.nodeIndex<gc.core.node<gc.mengplaz.POIRecordProvider>, gc.mengplaz.ReconciliationCandidate>;
      unlinked: gc.core.nodeIndex<gc.core.node<gc.mengplaz.POIRecordProvider>, globalThis.Array<gc.mengplaz.ReconciliationCandidate>>;
      constructor(date: gc.core.time, linked: gc.core.nodeIndex<gc.core.node<gc.mengplaz.POIRecordProvider>, gc.mengplaz.ReconciliationCandidate>, unlinked: gc.core.nodeIndex<gc.core.node<gc.mengplaz.POIRecordProvider>, globalThis.Array<gc.mengplaz.ReconciliationCandidate>>);
      static createFrom(fields: {date: gc.core.time, linked: gc.core.nodeIndex<gc.core.node<gc.mengplaz.POIRecordProvider>, gc.mengplaz.ReconciliationCandidate>, unlinked: gc.core.nodeIndex<gc.core.node<gc.mengplaz.POIRecordProvider>, globalThis.Array<gc.mengplaz.ReconciliationCandidate>>}): ReconciliationReport;
    }
    namespace ReconciliationReport {
      interface $Fields {
        date: 0;
        linked: 1;
        unlinked: 2;
      }
    }

    class StreetRecord extends gc.sdk.GCObject {
      static readonly _type = 'mengplaz::StreetRecord';
      static readonly $fields: StreetRecord.$Fields;
      street: string | null;
      streetAliases: globalThis.Array<gc.mengplaz.Alias> | null;
      postcode: string | null;
      city: string | null;
      cityAliases: globalThis.Array<gc.mengplaz.Alias> | null;
      sourceName: string | null;
      constructor(street?: string | null, streetAliases?: globalThis.Array<gc.mengplaz.Alias> | null, postcode?: string | null, city?: string | null, cityAliases?: globalThis.Array<gc.mengplaz.Alias> | null, sourceName?: string | null);
      static createFrom(fields: {street?: string | null, streetAliases?: globalThis.Array<gc.mengplaz.Alias> | null, postcode?: string | null, city?: string | null, cityAliases?: globalThis.Array<gc.mengplaz.Alias> | null, sourceName?: string | null}): StreetRecord;
    }
    namespace StreetRecord {
      interface $Fields {
        street: 0;
        streetAliases: 1;
        postcode: 2;
        city: 3;
        cityAliases: 4;
        sourceName: 5;
      }
    }

    class ScoringWeights extends gc.sdk.GCObject {
      static readonly _type = 'mengplaz::ScoringWeights';
      static readonly $fields: ScoringWeights.$Fields;
      cityWeight: number;
      streetWeight: number;
      postcodeWeight: number;
      numberWeight: number;
      geoWeight: number;
      constructor(cityWeight: number, streetWeight: number, postcodeWeight: number, numberWeight: number, geoWeight: number);
      static createFrom(fields: {cityWeight: number, streetWeight: number, postcodeWeight: number, numberWeight: number, geoWeight: number}): ScoringWeights;
    }
    namespace ScoringWeights {
      interface $Fields {
        cityWeight: 0;
        streetWeight: 1;
        postcodeWeight: 2;
        numberWeight: 3;
        geoWeight: 4;
      }
    }

    class GeoParameters extends gc.sdk.GCObject {
      static readonly _type = 'mengplaz::GeoParameters';
      static readonly $fields: GeoParameters.$Fields;
      minDistance: number | bigint;
      maxDistance: number | bigint;
      constructor(minDistance: number | bigint, maxDistance: number | bigint);
      static createFrom(fields: {minDistance: number | bigint, maxDistance: number | bigint}): GeoParameters;
    }
    namespace GeoParameters {
      interface $Fields {
        minDistance: 0;
        maxDistance: 1;
      }
    }

    class SearchParameters extends gc.sdk.GCObject {
      static readonly _type = 'mengplaz::SearchParameters';
      static readonly $fields: SearchParameters.$Fields;
      citySimilarityThreshold: number;
      streetSimilarityThreshold: number;
      postcodeSimilarityThreshold: number;
      coordinatesSimilarityThreshold: number;
      maxCandidatesPerItem: number | bigint;
      postcodeMaxDistance: number | bigint;
      weights: gc.mengplaz.ScoringWeights;
      geoParams: gc.mengplaz.GeoParameters;
      deepSearch: boolean;
      constructor(citySimilarityThreshold: number, streetSimilarityThreshold: number, postcodeSimilarityThreshold: number, coordinatesSimilarityThreshold: number, maxCandidatesPerItem: number | bigint, postcodeMaxDistance: number | bigint, weights: gc.mengplaz.ScoringWeights, geoParams: gc.mengplaz.GeoParameters, deepSearch: boolean);
      static createFrom(fields: {citySimilarityThreshold: number, streetSimilarityThreshold: number, postcodeSimilarityThreshold: number, coordinatesSimilarityThreshold: number, maxCandidatesPerItem: number | bigint, postcodeMaxDistance: number | bigint, weights: gc.mengplaz.ScoringWeights, geoParams: gc.mengplaz.GeoParameters, deepSearch: boolean}): SearchParameters;
    }
    namespace SearchParameters {
      interface $Fields {
        citySimilarityThreshold: 0;
        streetSimilarityThreshold: 1;
        postcodeSimilarityThreshold: 2;
        coordinatesSimilarityThreshold: 3;
        maxCandidatesPerItem: 4;
        postcodeMaxDistance: 5;
        weights: 6;
        geoParams: 7;
        deepSearch: 8;
      }
    }

    class Alias extends gc.sdk.GCObject {
      static readonly _type = 'mengplaz::Alias';
      static readonly $fields: Alias.$Fields;
      value: string;
      id: string;
      constructor(value: string, id: string);
      static createFrom(fields: {value: string, id: string}): Alias;
    }
    namespace Alias {
      interface $Fields {
        value: 0;
        id: 1;
      }
    }

    class SearchRequest extends gc.sdk.GCObject {
      static readonly _type = 'mengplaz::SearchRequest';
      static readonly $fields: SearchRequest.$Fields;
      items: globalThis.Array<gc.core.node<gc.mengplaz.POIRecordProvider>>;
      params: gc.mengplaz.SearchParameters;
      constructor(items: globalThis.Array<gc.core.node<gc.mengplaz.POIRecordProvider>>, params: gc.mengplaz.SearchParameters);
      static createFrom(fields: {items: globalThis.Array<gc.core.node<gc.mengplaz.POIRecordProvider>>, params: gc.mengplaz.SearchParameters}): SearchRequest;
    }
    namespace SearchRequest {
      interface $Fields {
        items: 0;
        params: 1;
      }
    }

    class DataSource extends gc.sdk.GCObject {
      static readonly _type = 'mengplaz::DataSource';
      static readonly $fields: DataSource.$Fields;
      reconciliationReport: gc.core.node<gc.mengplaz.ReconciliationReport>;
      isReconciling: gc.core.node<boolean> | null;
      lastUpdate: gc.core.time | null;
    }
    namespace DataSource {
      interface $Fields {
        reconciliationReport: 0;
        isReconciling: 1;
        lastUpdate: 2;
      }
    }

    class SearchItem extends gc.sdk.GCObject {
      static readonly _type = 'mengplaz::SearchItem';
      static readonly $fields: SearchItem.$Fields;
      number: string;
      street: string;
      streetAliases: globalThis.Array<gc.mengplaz.Alias> | null;
      multipleCode: string;
      postcode: string;
      city: string;
      cityAliases: globalThis.Array<gc.mengplaz.Alias> | null;
      coordinates: gc.core.geo | null;
      constructor(number: string, street: string, streetAliases: globalThis.Array<gc.mengplaz.Alias> | null, multipleCode: string, postcode: string, city: string, cityAliases?: globalThis.Array<gc.mengplaz.Alias> | null, coordinates?: gc.core.geo | null);
      static createFrom(fields: {number: string, street: string, streetAliases?: globalThis.Array<gc.mengplaz.Alias> | null, multipleCode: string, postcode: string, city: string, cityAliases?: globalThis.Array<gc.mengplaz.Alias> | null, coordinates?: gc.core.geo | null}): SearchItem;
    }
    namespace SearchItem {
      interface $Fields {
        number: 0;
        street: 1;
        streetAliases: 2;
        multipleCode: 3;
        postcode: 4;
        city: 5;
        cityAliases: 6;
        coordinates: 7;
      }
    }

    class SearchResult extends gc.sdk.GCObject {
      static readonly _type = 'mengplaz::SearchResult';
      static readonly $fields: SearchResult.$Fields;
      sourceRecord: gc.core.node<gc.mengplaz.POIRecordProvider>;
      candidates: globalThis.Array<gc.mengplaz.CandidateMatch<gc.core.node<gc.mengplaz.POIRecordProvider>>>;
      constructor(sourceRecord: gc.core.node<gc.mengplaz.POIRecordProvider>, candidates: globalThis.Array<gc.mengplaz.CandidateMatch<gc.core.node<gc.mengplaz.POIRecordProvider>>>);
      static createFrom(fields: {sourceRecord: gc.core.node<gc.mengplaz.POIRecordProvider>, candidates: globalThis.Array<gc.mengplaz.CandidateMatch<gc.core.node<gc.mengplaz.POIRecordProvider>>>}): SearchResult;
    }
    namespace SearchResult {
      interface $Fields {
        sourceRecord: 0;
        candidates: 1;
      }
    }

    class StreetRecordRef extends gc.sdk.GCObject {
      static readonly _type = 'mengplaz::StreetRecordRef';
      static readonly $fields: StreetRecordRef.$Fields;
      ref: gc.core.node<gc.mengplaz.StreetRecordProvider>;
      record: gc.mengplaz.StreetRecord;
      constructor(ref: gc.core.node<gc.mengplaz.StreetRecordProvider>, record: gc.mengplaz.StreetRecord);
      static createFrom(fields: {ref: gc.core.node<gc.mengplaz.StreetRecordProvider>, record: gc.mengplaz.StreetRecord}): StreetRecordRef;
    }
    namespace StreetRecordRef {
      interface $Fields {
        ref: 0;
        record: 1;
      }
    }

    class CandidateMatch<T = any> extends gc.sdk.GCObject {
      static readonly _type = 'mengplaz::CandidateMatch';
      static readonly $fields: CandidateMatch.$Fields;
      cityScore: number;
      streetScore: number;
      numberScore: number;
      postcodeScore: number;
      searchGeoScore: number | null;
      realGeoScore: number | null;
      searchOverallScore: number;
      realOverallScore: number;
      elem: T;
      constructor(cityScore: number, streetScore: number, numberScore: number, postcodeScore: number, searchGeoScore: number | null, realGeoScore: number | null, searchOverallScore: number, realOverallScore: number, elem?: T);
      static createFrom<T>(fields: {cityScore: number, streetScore: number, numberScore: number, postcodeScore: number, searchGeoScore?: number | null, realGeoScore?: number | null, searchOverallScore: number, realOverallScore: number, elem?: T}): CandidateMatch;
    }
    namespace CandidateMatch {
      interface $Fields {
        cityScore: 0;
        streetScore: 1;
        numberScore: 2;
        postcodeScore: 3;
        searchGeoScore: 4;
        realGeoScore: 5;
        searchOverallScore: 6;
        realOverallScore: 7;
        elem: 8;
      }
    }

    class POIRecord extends gc.sdk.GCObject {
      static readonly _type = 'mengplaz::POIRecord';
      static readonly $fields: POIRecord.$Fields;
      uid: string | null;
      number: string | null;
      postcode: string | null;
      street: string | null;
      streetAliases: globalThis.Array<gc.mengplaz.Alias> | null;
      locality: string | null;
      localityAliases: globalThis.Array<gc.mengplaz.Alias> | null;
      commune: string | null;
      primaryLocation: gc.core.geo | null;
      secondaryLocations: globalThis.Map<string, gc.core.geo> | null;
      sourceName: string;
      goldenRef: gc.core.node<gc.golden.GoldenPointOfInterest> | null;
      quality: number | null;
      constructor(uid: string | null, number: string | null, postcode: string | null, street: string | null, streetAliases: globalThis.Array<gc.mengplaz.Alias> | null, locality: string | null, localityAliases: globalThis.Array<gc.mengplaz.Alias> | null, commune: string | null, primaryLocation: gc.core.geo | null, secondaryLocations: globalThis.Map<string, gc.core.geo> | null, sourceName: string, goldenRef?: gc.core.node<gc.golden.GoldenPointOfInterest> | null, quality?: number | null);
      static createFrom(fields: {uid?: string | null, number?: string | null, postcode?: string | null, street?: string | null, streetAliases?: globalThis.Array<gc.mengplaz.Alias> | null, locality?: string | null, localityAliases?: globalThis.Array<gc.mengplaz.Alias> | null, commune?: string | null, primaryLocation?: gc.core.geo | null, secondaryLocations?: globalThis.Map<string, gc.core.geo> | null, sourceName: string, goldenRef?: gc.core.node<gc.golden.GoldenPointOfInterest> | null, quality?: number | null}): POIRecord;
    }
    namespace POIRecord {
      interface $Fields {
        uid: 0;
        number: 1;
        postcode: 2;
        street: 3;
        streetAliases: 4;
        locality: 5;
        localityAliases: 6;
        commune: 7;
        primaryLocation: 8;
        secondaryLocations: 9;
        sourceName: 10;
        goldenRef: 11;
        quality: 12;
      }
    }

    class ReconciliationCandidateScore extends gc.sdk.GCObject {
      static readonly _type = 'mengplaz::ReconciliationCandidateScore';
      static readonly $fields: ReconciliationCandidateScore.$Fields;
      cityScore: number;
      streetScore: number;
      numberScore: number;
      postcodeScore: number;
      geoScore: number | null;
      overallScore: number;
      constructor(cityScore: number, streetScore: number, numberScore: number, postcodeScore: number, geoScore: number | null, overallScore: number);
      static createFrom(fields: {cityScore: number, streetScore: number, numberScore: number, postcodeScore: number, geoScore?: number | null, overallScore: number}): ReconciliationCandidateScore;
    }
    namespace ReconciliationCandidateScore {
      interface $Fields {
        cityScore: 0;
        streetScore: 1;
        numberScore: 2;
        postcodeScore: 3;
        geoScore: 4;
        overallScore: 5;
      }
    }

    class Match<T = any> extends gc.sdk.GCObject {
      static readonly _type = 'mengplaz::Match';
      static readonly $fields: Match.$Fields;
      score: number;
      elem: T;
      constructor(score: number, elem?: T);
      static createFrom<T>(fields: {score: number, elem?: T}): Match;
    }
    namespace Match {
      interface $Fields {
        score: 0;
        elem: 1;
      }
    }

    class QualityEvent extends gc.sdk.GCObject {
      static readonly _type = 'mengplaz::QualityEvent';
      static readonly $fields: QualityEvent.$Fields;
      score: number;
      sourceRecord: gc.core.node<gc.mengplaz.POIRecordProvider> | null;
      eventType: gc.mengplaz.QualityEventType;
      constructor(score: number, sourceRecord: gc.core.node<gc.mengplaz.POIRecordProvider> | null, eventType: gc.mengplaz.QualityEventType);
      static createFrom(fields: {score: number, sourceRecord?: gc.core.node<gc.mengplaz.POIRecordProvider> | null, eventType: gc.mengplaz.QualityEventType}): QualityEvent;
    }
    namespace QualityEvent {
      interface $Fields {
        score: 0;
        sourceRecord: 1;
        eventType: 2;
      }
    }

    class StreetRecordProvider extends gc.sdk.GCObject {
      static readonly _type = 'mengplaz::StreetRecordProvider';
    }

    class POIRecordRef extends gc.sdk.GCObject {
      static readonly _type = 'mengplaz::POIRecordRef';
      static readonly $fields: POIRecordRef.$Fields;
      ref: gc.core.node<gc.mengplaz.POIRecordProvider>;
      record: gc.mengplaz.POIRecord;
      constructor(ref: gc.core.node<gc.mengplaz.POIRecordProvider>, record: gc.mengplaz.POIRecord);
      static createFrom(fields: {ref: gc.core.node<gc.mengplaz.POIRecordProvider>, record: gc.mengplaz.POIRecord}): POIRecordRef;
    }
    namespace POIRecordRef {
      interface $Fields {
        ref: 0;
        record: 1;
      }
    }

  }

  namespace osm {
    class OsmParsedAddress extends gc.sdk.GCObject {
      static readonly _type = 'osm::OsmParsedAddress';
      static readonly $fields: OsmParsedAddress.$Fields;
      id: number | bigint;
      position: gc.core.geo;
      city: string;
      postcode: string;
      street: string;
      number: string;
      ref_caclr: string | null;
      building: string | null;
      kind: string | null;
      constructor(id: number | bigint, position: gc.core.geo, city: string, postcode: string, street: string, number: string, ref_caclr?: string | null, building?: string | null, kind?: string | null);
      static createFrom(fields: {id: number | bigint, position: gc.core.geo, city: string, postcode: string, street: string, number: string, ref_caclr?: string | null, building?: string | null, kind?: string | null}): OsmParsedAddress;
    }
    namespace OsmParsedAddress {
      interface $Fields {
        id: 0;
        position: 1;
        city: 2;
        postcode: 3;
        street: 4;
        number: 5;
        ref_caclr: 6;
        building: 7;
        kind: 8;
      }
    }

    class OsmPartialAddress extends gc.sdk.GCObject {
      static readonly _type = 'osm::OsmPartialAddress';
      static readonly $fields: OsmPartialAddress.$Fields;
      id: number | bigint;
      position: gc.core.geo | null;
      city: string | null;
      postcode: string | null;
      street: string | null;
      number: string | null;
      ref_caclr: string | null;
      map: globalThis.Map<any | null, any | null>;
      constructor(id: number | bigint, position: gc.core.geo | null, city: string | null, postcode: string | null, street: string | null, number: string | null, ref_caclr: string | null, map: globalThis.Map<any | null, any | null>);
      static createFrom(fields: {id: number | bigint, position?: gc.core.geo | null, city?: string | null, postcode?: string | null, street?: string | null, number?: string | null, ref_caclr?: string | null, map: globalThis.Map<any | null, any | null>}): OsmPartialAddress;
    }
    namespace OsmPartialAddress {
      interface $Fields {
        id: 0;
        position: 1;
        city: 2;
        postcode: 3;
        street: 4;
        number: 5;
        ref_caclr: 6;
        map: 7;
      }
    }

    class OsmStreet extends gc.sdk.GCObject {
      static readonly _type = 'osm::OsmStreet';
      static readonly $fields: OsmStreet.$Fields;
      name: string;
      city: gc.core.node<gc.osm.OsmCity>;
      addresses_by_id: gc.core.nodeIndex<string, gc.core.node<gc.osm.OsmAddress>>;
      addresses_by_number: gc.core.nodeIndex<string, gc.core.node<gc.osm.OsmAddress>>;
      constructor(name: string, city: gc.core.node<gc.osm.OsmCity>, addresses_by_id: gc.core.nodeIndex<string, gc.core.node<gc.osm.OsmAddress>>, addresses_by_number: gc.core.nodeIndex<string, gc.core.node<gc.osm.OsmAddress>>);
      static createFrom(fields: {name: string, city: gc.core.node<gc.osm.OsmCity>, addresses_by_id: gc.core.nodeIndex<string, gc.core.node<gc.osm.OsmAddress>>, addresses_by_number: gc.core.nodeIndex<string, gc.core.node<gc.osm.OsmAddress>>}): OsmStreet;
    }
    namespace OsmStreet {
      interface $Fields {
        name: 0;
        city: 1;
        addresses_by_id: 2;
        addresses_by_number: 3;
      }
    }

    class OsmAddress extends gc.sdk.GCObject {
      static readonly _type = 'osm::OsmAddress';
      static readonly $fields: OsmAddress.$Fields;
      id: number | bigint;
      position: gc.core.geo;
      city: string;
      postcode: string;
      street: string;
      number: string;
      ref_caclr: string | null;
      building: string | null;
      kind: string | null;
      streetRef: gc.core.node<gc.osm.OsmStreet> | null;
      lastSeenAt: gc.core.time | null;
      deprecated: boolean | null;
      goldenRef: gc.core.node<gc.golden.GoldenPointOfInterest> | null;
      constructor(id: number | bigint, position: gc.core.geo, city: string, postcode: string, street: string, number: string, ref_caclr?: string | null, building?: string | null, kind?: string | null, streetRef?: gc.core.node<gc.osm.OsmStreet> | null, lastSeenAt?: gc.core.time | null, deprecated?: boolean | null, goldenRef?: gc.core.node<gc.golden.GoldenPointOfInterest> | null);
      static createFrom(fields: {id: number | bigint, position: gc.core.geo, city: string, postcode: string, street: string, number: string, ref_caclr?: string | null, building?: string | null, kind?: string | null, streetRef?: gc.core.node<gc.osm.OsmStreet> | null, lastSeenAt?: gc.core.time | null, deprecated?: boolean | null, goldenRef?: gc.core.node<gc.golden.GoldenPointOfInterest> | null}): OsmAddress;
    }
    namespace OsmAddress {
      interface $Fields {
        id: 0;
        position: 1;
        city: 2;
        postcode: 3;
        street: 4;
        number: 5;
        ref_caclr: 6;
        building: 7;
        kind: 8;
        streetRef: 9;
        lastSeenAt: 10;
        deprecated: 11;
        goldenRef: 12;
      }
    }

    class OsmCity extends gc.sdk.GCObject {
      static readonly _type = 'osm::OsmCity';
      static readonly $fields: OsmCity.$Fields;
      name: string;
      streets_by_name: gc.core.nodeIndex<string, gc.core.node<gc.osm.OsmStreet>>;
      constructor(name: string, streets_by_name: gc.core.nodeIndex<string, gc.core.node<gc.osm.OsmStreet>>);
      static createFrom(fields: {name: string, streets_by_name: gc.core.nodeIndex<string, gc.core.node<gc.osm.OsmStreet>>}): OsmCity;
    }
    namespace OsmCity {
      interface $Fields {
        name: 0;
        streets_by_name: 1;
      }
    }

    class OSMFullRecord extends gc.sdk.GCObject {
      static readonly _type = 'osm::OSMFullRecord';
      static readonly $fields: OSMFullRecord.$Fields;
      id: string;
      number: string;
      postcode: string;
      street: string;
      locality: string;
      primaryLocation: gc.core.geo | null;
      sourceName: string;
      goldenRef: gc.core.node<gc.golden.GoldenPointOfInterest> | null;
      deprecated: boolean | null;
      lastSeenAt: gc.core.time | null;
      id_caclr: string | null;
      kind: string | null;
      constructor(id: string, number: string, postcode: string, street: string, locality: string, primaryLocation: gc.core.geo | null, sourceName: string, goldenRef?: gc.core.node<gc.golden.GoldenPointOfInterest> | null, deprecated?: boolean | null, lastSeenAt?: gc.core.time | null, id_caclr?: string | null, kind?: string | null);
      static createFrom(fields: {id: string, number: string, postcode: string, street: string, locality: string, primaryLocation?: gc.core.geo | null, sourceName: string, goldenRef?: gc.core.node<gc.golden.GoldenPointOfInterest> | null, deprecated?: boolean | null, lastSeenAt?: gc.core.time | null, id_caclr?: string | null, kind?: string | null}): OSMFullRecord;
    }
    namespace OSMFullRecord {
      interface $Fields {
        id: 0;
        number: 1;
        postcode: 2;
        street: 3;
        locality: 4;
        primaryLocation: 5;
        sourceName: 6;
        goldenRef: 7;
        deprecated: 8;
        lastSeenAt: 9;
        id_caclr: 10;
        kind: 11;
      }
    }

    class OsmSource extends gc.sdk.GCObject {
      static readonly _type = 'osm::OsmSource';
      static readonly $fields: OsmSource.$Fields;
      reconciliationReport: gc.core.node<gc.mengplaz.ReconciliationReport>;
      isReconciling: gc.core.node<boolean> | null;
      lastUpdate: gc.core.time | null;
      constructor(reconciliationReport: gc.core.node<gc.mengplaz.ReconciliationReport>, isReconciling?: gc.core.node<boolean> | null, lastUpdate?: gc.core.time | null);
      static createFrom(fields: {reconciliationReport: gc.core.node<gc.mengplaz.ReconciliationReport>, isReconciling?: gc.core.node<boolean> | null, lastUpdate?: gc.core.time | null}): OsmSource;
    }
    namespace OsmSource {
      interface $Fields {
        reconciliationReport: 0;
        isReconciling: 1;
        lastUpdate: 2;
      }
    }

  }

  namespace golden {
    class GoldenSource extends gc.sdk.GCObject {
      static readonly _type = 'golden::GoldenSource';
      static readonly $fields: GoldenSource.$Fields;
      reconciliationReport: gc.core.node<gc.mengplaz.ReconciliationReport>;
      isReconciling: gc.core.node<boolean> | null;
      lastUpdate: gc.core.time | null;
      qualityHistory: gc.core.nodeTime<number>;
      constructor(reconciliationReport: gc.core.node<gc.mengplaz.ReconciliationReport>, isReconciling: gc.core.node<boolean> | null, lastUpdate: gc.core.time | null, qualityHistory: gc.core.nodeTime<number>);
      static createFrom(fields: {reconciliationReport: gc.core.node<gc.mengplaz.ReconciliationReport>, isReconciling?: gc.core.node<boolean> | null, lastUpdate?: gc.core.time | null, qualityHistory: gc.core.nodeTime<number>}): GoldenSource;
    }
    namespace GoldenSource {
      interface $Fields {
        reconciliationReport: 0;
        isReconciling: 1;
        lastUpdate: 2;
        qualityHistory: 3;
      }
    }

    class GoldenMunicipality extends gc.sdk.GCObject {
      static readonly _type = 'golden::GoldenMunicipality';
      static readonly $fields: GoldenMunicipality.$Fields;
      id: string;
      name: string;
      nameAliases: globalThis.Array<gc.mengplaz.Alias>;
      lastUpdate: gc.core.time;
      canton: gc.core.node<gc.golden.GoldenCanton>;
      cities_by_id: gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenCity>>;
      cities_by_name: gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenCity>> | null;
      caclrMunicipality: gc.core.node<gc.caclr.CaclrMunicipality> | null;
      constructor(id: string, name: string, nameAliases: globalThis.Array<gc.mengplaz.Alias>, lastUpdate: gc.core.time, canton: gc.core.node<gc.golden.GoldenCanton>, cities_by_id: gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenCity>>, cities_by_name?: gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenCity>> | null, caclrMunicipality?: gc.core.node<gc.caclr.CaclrMunicipality> | null);
      static createFrom(fields: {id: string, name: string, nameAliases: globalThis.Array<gc.mengplaz.Alias>, lastUpdate: gc.core.time, canton: gc.core.node<gc.golden.GoldenCanton>, cities_by_id: gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenCity>>, cities_by_name?: gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenCity>> | null, caclrMunicipality?: gc.core.node<gc.caclr.CaclrMunicipality> | null}): GoldenMunicipality;
    }
    namespace GoldenMunicipality {
      interface $Fields {
        id: 0;
        name: 1;
        nameAliases: 2;
        lastUpdate: 3;
        canton: 4;
        cities_by_id: 5;
        cities_by_name: 6;
        caclrMunicipality: 7;
      }
    }

    class GoldenCity extends gc.sdk.GCObject {
      static readonly _type = 'golden::GoldenCity';
      static readonly $fields: GoldenCity.$Fields;
      id: string;
      name: string;
      nameAliases: globalThis.Array<gc.mengplaz.Alias>;
      lastUpdate: gc.core.time;
      municipality: gc.core.node<gc.golden.GoldenMunicipality>;
      streets_by_id: gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenStreet>>;
      streets_by_name: gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenStreet>> | null;
      caclrCity: gc.core.node<gc.caclr.CaclrCity> | null;
      constructor(id: string, name: string, nameAliases: globalThis.Array<gc.mengplaz.Alias>, lastUpdate: gc.core.time, municipality: gc.core.node<gc.golden.GoldenMunicipality>, streets_by_id: gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenStreet>>, streets_by_name?: gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenStreet>> | null, caclrCity?: gc.core.node<gc.caclr.CaclrCity> | null);
      static createFrom(fields: {id: string, name: string, nameAliases: globalThis.Array<gc.mengplaz.Alias>, lastUpdate: gc.core.time, municipality: gc.core.node<gc.golden.GoldenMunicipality>, streets_by_id: gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenStreet>>, streets_by_name?: gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenStreet>> | null, caclrCity?: gc.core.node<gc.caclr.CaclrCity> | null}): GoldenCity;
    }
    namespace GoldenCity {
      interface $Fields {
        id: 0;
        name: 1;
        nameAliases: 2;
        lastUpdate: 3;
        municipality: 4;
        streets_by_id: 5;
        streets_by_name: 6;
        caclrCity: 7;
      }
    }

    class GoldenPointOfInterest extends gc.sdk.GCObject {
      static readonly _type = 'golden::GoldenPointOfInterest';
      static readonly $fields: GoldenPointOfInterest.$Fields;
      uid: string;
      number: number | bigint;
      multipleCode: string;
      postCode: string;
      primaryLocation: gc.core.geo | null;
      secondaryLocations: globalThis.Map<string, gc.core.geo>;
      lastUpdate: gc.core.time;
      street: gc.core.node<gc.golden.GoldenStreet> | null;
      linkedRecords: globalThis.Array<gc.mengplaz.LinkedRecordEntry>;
      quality: gc.core.nodeTime<gc.mengplaz.QualityEvent>;
      constructor(uid: string, number: number | bigint, multipleCode: string, postCode: string, primaryLocation: gc.core.geo | null, secondaryLocations: globalThis.Map<string, gc.core.geo>, lastUpdate: gc.core.time, street: gc.core.node<gc.golden.GoldenStreet> | null, linkedRecords: globalThis.Array<gc.mengplaz.LinkedRecordEntry>, quality: gc.core.nodeTime<gc.mengplaz.QualityEvent>);
      static createFrom(fields: {uid: string, number: number | bigint, multipleCode: string, postCode: string, primaryLocation?: gc.core.geo | null, secondaryLocations: globalThis.Map<string, gc.core.geo>, lastUpdate: gc.core.time, street?: gc.core.node<gc.golden.GoldenStreet> | null, linkedRecords: globalThis.Array<gc.mengplaz.LinkedRecordEntry>, quality: gc.core.nodeTime<gc.mengplaz.QualityEvent>}): GoldenPointOfInterest;
    }
    namespace GoldenPointOfInterest {
      interface $Fields {
        uid: 0;
        number: 1;
        multipleCode: 2;
        postCode: 3;
        primaryLocation: 4;
        secondaryLocations: 5;
        lastUpdate: 6;
        street: 7;
        linkedRecords: 8;
        quality: 9;
      }
    }

    class GoldenCanton extends gc.sdk.GCObject {
      static readonly _type = 'golden::GoldenCanton';
      static readonly $fields: GoldenCanton.$Fields;
      id: string;
      name: string;
      nameAliases: globalThis.Array<gc.mengplaz.Alias>;
      lastUpdate: gc.core.time;
      constituency: gc.core.node<gc.golden.GoldenConstituency>;
      municipalities_by_id: gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenMunicipality>>;
      caclrCanton: gc.core.node<gc.caclr.CaclrCanton> | null;
      constructor(id: string, name: string, nameAliases: globalThis.Array<gc.mengplaz.Alias>, lastUpdate: gc.core.time, constituency: gc.core.node<gc.golden.GoldenConstituency>, municipalities_by_id: gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenMunicipality>>, caclrCanton?: gc.core.node<gc.caclr.CaclrCanton> | null);
      static createFrom(fields: {id: string, name: string, nameAliases: globalThis.Array<gc.mengplaz.Alias>, lastUpdate: gc.core.time, constituency: gc.core.node<gc.golden.GoldenConstituency>, municipalities_by_id: gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenMunicipality>>, caclrCanton?: gc.core.node<gc.caclr.CaclrCanton> | null}): GoldenCanton;
    }
    namespace GoldenCanton {
      interface $Fields {
        id: 0;
        name: 1;
        nameAliases: 2;
        lastUpdate: 3;
        constituency: 4;
        municipalities_by_id: 5;
        caclrCanton: 6;
      }
    }

    class recomputeGoldenGeoScore$args extends gc.sdk.GCObject {
      static readonly _type = 'golden::recomputeGoldenGeoScore$args';
    }

    class GoldenConstituency extends gc.sdk.GCObject {
      static readonly _type = 'golden::GoldenConstituency';
      static readonly $fields: GoldenConstituency.$Fields;
      code: string;
      name: string;
      nameAliases: globalThis.Array<gc.mengplaz.Alias>;
      cantons_by_id: gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenCanton>>;
      caclrConstituency: gc.core.node<gc.caclr.CaclrConstituency> | null;
      constructor(code: string, name: string, nameAliases: globalThis.Array<gc.mengplaz.Alias>, cantons_by_id: gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenCanton>>, caclrConstituency?: gc.core.node<gc.caclr.CaclrConstituency> | null);
      static createFrom(fields: {code: string, name: string, nameAliases: globalThis.Array<gc.mengplaz.Alias>, cantons_by_id: gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenCanton>>, caclrConstituency?: gc.core.node<gc.caclr.CaclrConstituency> | null}): GoldenConstituency;
    }
    namespace GoldenConstituency {
      interface $Fields {
        code: 0;
        name: 1;
        nameAliases: 2;
        cantons_by_id: 3;
        caclrConstituency: 4;
      }
    }

    class GoldenStreet extends gc.sdk.GCObject {
      static readonly _type = 'golden::GoldenStreet';
      static readonly $fields: GoldenStreet.$Fields;
      id: string;
      name: string;
      nameAliases: globalThis.Array<gc.mengplaz.Alias>;
      lastUpdate: gc.core.time;
      city: gc.core.node<gc.golden.GoldenCity>;
      pois_by_id: gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenPointOfInterest>>;
      pois_by_number: gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenPointOfInterest>> | null;
      caclrStreet: gc.core.node<gc.caclr.CaclrStreet> | null;
      constructor(id: string, name: string, nameAliases: globalThis.Array<gc.mengplaz.Alias>, lastUpdate: gc.core.time, city: gc.core.node<gc.golden.GoldenCity>, pois_by_id: gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenPointOfInterest>>, pois_by_number?: gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenPointOfInterest>> | null, caclrStreet?: gc.core.node<gc.caclr.CaclrStreet> | null);
      static createFrom(fields: {id: string, name: string, nameAliases: globalThis.Array<gc.mengplaz.Alias>, lastUpdate: gc.core.time, city: gc.core.node<gc.golden.GoldenCity>, pois_by_id: gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenPointOfInterest>>, pois_by_number?: gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenPointOfInterest>> | null, caclrStreet?: gc.core.node<gc.caclr.CaclrStreet> | null}): GoldenStreet;
    }
    namespace GoldenStreet {
      interface $Fields {
        id: 0;
        name: 1;
        nameAliases: 2;
        lastUpdate: 3;
        city: 4;
        pois_by_id: 5;
        pois_by_number: 6;
        caclrStreet: 7;
      }
    }

    const recomputeGoldenGeoScore: (($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<unknown>) & {
      spawn($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<unknown>>;
    };
  }

  namespace goldenServices {
    class GoldenServices extends gc.sdk.GCObject {
      static readonly _type = 'goldenServices::GoldenServices';
    }

  }

  namespace searchService {
    class AddressSearchInput extends gc.sdk.GCObject {
      static readonly _type = 'searchService::AddressSearchInput';
      static readonly $fields: AddressSearchInput.$Fields;
      input: string;
      source: string | null;
      results: globalThis.Array<gc.core.node<gc.mengplaz.POIRecordProvider>>;
      constructor(input: string, source: string | null, results: globalThis.Array<gc.core.node<gc.mengplaz.POIRecordProvider>>);
      static createFrom(fields: {input: string, source?: string | null, results: globalThis.Array<gc.core.node<gc.mengplaz.POIRecordProvider>>}): AddressSearchInput;
    }
    namespace AddressSearchInput {
      interface $Fields {
        input: 0;
        source: 1;
        results: 2;
      }
    }

    class ScoredPoi extends gc.sdk.GCObject {
      static readonly _type = 'searchService::ScoredPoi';
      static readonly $fields: ScoredPoi.$Fields;
      poi: gc.core.node<gc.mengplaz.POIRecordProvider>;
      distance: number;
      constructor(poi: gc.core.node<gc.mengplaz.POIRecordProvider>, distance: number);
      static createFrom(fields: {poi: gc.core.node<gc.mengplaz.POIRecordProvider>, distance: number}): ScoredPoi;
    }
    namespace ScoredPoi {
      interface $Fields {
        poi: 0;
        distance: 1;
      }
    }

    class ScoredCity extends gc.sdk.GCObject {
      static readonly _type = 'searchService::ScoredCity';
      static readonly $fields: ScoredCity.$Fields;
      city: any;
      distance: number;
      constructor(city: any, distance: number);
      static createFrom(fields: {city: any, distance: number}): ScoredCity;
    }
    namespace ScoredCity {
      interface $Fields {
        city: 0;
        distance: 1;
      }
    }

    class ScoredStreet extends gc.sdk.GCObject {
      static readonly _type = 'searchService::ScoredStreet';
      static readonly $fields: ScoredStreet.$Fields;
      street: any;
      distance: number;
      constructor(street: any, distance: number);
      static createFrom(fields: {street: any, distance: number}): ScoredStreet;
    }
    namespace ScoredStreet {
      interface $Fields {
        street: 0;
        distance: 1;
      }
    }

  }

  namespace updateService {
    class updateOSM$args extends gc.sdk.GCObject {
      static readonly _type = 'updateService::updateOSM$args';
    }

    class updateBDA$args extends gc.sdk.GCObject {
      static readonly _type = 'updateService::updateBDA$args';
    }

    class updateCACLR$args extends gc.sdk.GCObject {
      static readonly _type = 'updateService::updateCACLR$args';
    }

    const updateCACLR: (($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<unknown>) & {
      spawn($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<unknown>>;
    };
    const updateBDA: (($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<unknown>) & {
      spawn($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<unknown>>;
    };
    const updateOSM: (($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<unknown>) & {
      spawn($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<unknown>>;
    };
  }

  namespace traffic_service {
    class Traffic_Service extends gc.sdk.GCObject {
      static readonly _type = 'traffic_service::Traffic_Service';
      static readonly $fields: Traffic_Service.$Fields;
      start: gc.core.time;
      endPoint: gc.core.node<gc.trafic.Endpoint>;
      constructor(start: gc.core.time, endPoint: gc.core.node<gc.trafic.Endpoint>);
      static createFrom(fields: {start: gc.core.time, endPoint: gc.core.node<gc.trafic.Endpoint>}): Traffic_Service;
    }
    namespace Traffic_Service {
      interface $Fields {
        start: 0;
        endPoint: 1;
      }
    }

  }

  namespace utils {
    class SplitAlphaNumericalString extends gc.sdk.GCObject {
      static readonly _type = 'utils::SplitAlphaNumericalString';
      static readonly $fields: SplitAlphaNumericalString.$Fields;
      alpha: string;
      numerical: number | bigint;
      constructor(alpha: string, numerical: number | bigint);
      static createFrom(fields: {alpha: string, numerical: number | bigint}): SplitAlphaNumericalString;
    }
    namespace SplitAlphaNumericalString {
      interface $Fields {
        alpha: 0;
        numerical: 1;
      }
    }

  }

  interface $TypesMap {
    'core::nodeIndex$info$args': 0,
    'core::Array<core::SearchResult<core::String,core::Array<core::node<golden::GoldenCity>>>>': 0,
    'core::Tuple<core::geo,core::node<osm::OsmAddress>>': 0,
    'core::Array<api::GoldenIndex>': 0,
    'core::node<golden::GoldenStreet>': 0,
    'core::Array<core::SearchResult<core::String,core::node<bdaddress::BDAddress>>>': 0,
    'core::nodeGeo$search$args': 0,
    'core::nodeIndexBucket<core::String,core::node<mengplaz::DataSource>>': 0,
    'core::nodeIndex<core::node<mengplaz::POIRecordProvider>,mengplaz::ReconciliationCandidate>': 0,
    'core::Chars': 0,
    'core::Array<core::SearchResult<core::String,core::node<caclr::CaclrConstituency>>>': 0,
    'core::Array<core::node<bdaddress::BDAddress>>': 0,
    'core::nodeIndexBucket<core::String,core::Array<core::node<golden::GoldenCity>>>': 0,
    'core::Array<core::SearchResult<core::String,core::node<golden::GoldenConstituency>>>': 0,
    'core::Array<caclrLoader::CaclrResponseCantonItem>': 0,
    'core::Tuple<core::int,core::any?>': 0,
    'core::Array<mengplaz::Alias>': 0,
    'core::Array<privateApi::GlobalQualityEntry>': 0,
    'core::SearchResult<core::String,core::node<caclr::CaclrMunicipality>>': 0,
    'core::Array<core::nodeTime>': 0,
    'core::Array<core::SearchResult<core::String,core::node<osm::OsmCity>>>': 0,
    'core::SearchResult<core::String,core::node<golden::GoldenCanton>>': 0,
    'core::nodeGeo<core::node<osm::OsmPartialAddress>>$search$args': 0,
    'core::Array<runtime::IdentityGrant>': 0,
    'core::nodeGeo<core::node<caclr::CaclrBuilding>>': 0,
    'core::nodeGeo<core::node<bdaddress::BDAddress>>$search$args': 0,
    'core::node<bdaddress::BDACity>': 0,
    'core::nodeIndexBucket<core::String,core::node<caclr::CaclrCanton>>': 0,
    'core::Array<io::CsvColumnStatistics>': 0,
    'core::Table<core::Tuple<core::time,core::any?>>': 0,
    'core::Error': 0,
    'core::Array<core::SearchResult<core::String,core::node<caclr::CaclrMunicipality>>>': 0,
    'core::Array<core::NodeInfo>': 0,
    'core::Array<io::S3Bucket>': 0,
    'core::Array<api::LinkedRecordDetails<caclr::CaclrPOIFullRecord>>': 0,
    'core::Array<core::node<golden::GoldenCity>>': 0,
    'core::nodeIndexBucket<core::String,core::Array<core::node<golden::GoldenStreet>>>': 0,
    'core::Map<core::String,runtime::PathItemObject>': 0,
    'core::nodeTime$info$args': 0,
    'core::node<caclr::CaclrMunicipality>': 0,
    'core::nodeIndex$sample$args': 0,
    'core::null': 0,
    'core::node': 0,
    'core::Array<core::Map<core::String,core::any>>': 0,
    'core::Array<core::Array<core::float>>': 0,
    'core::node<mengplaz::ReconciliationReport>': 0,
    'core::nodeIndexBucket<core::String,core::node<osm::OsmCity>>': 0,
    'core::Array<io::File>': 0,
    'core::nodeIndexBucket<core::String,core::node<golden::GoldenMunicipality>>': 0,
    'core::Array<core::SearchResult<core::node<core::Tensor>,core::any?>>': 0,
    'core::node<mengplaz::POIRecordProvider>': 0,
    'core::Array<mengplaz::SearchResult>': 0,
    'core::Array<runtime::DayOfWeek>': 0,
    'core::nodeIndex<core::node<core::Tensor>,core::any?>': 0,
    'core::VectorVertex': 0,
    'core::Array<core::SearchResult<core::String,core::node<osm::OsmAddress>>>': 0,
    'core::nodeTime<runtime::RuntimeUsage>': 0,
    'core::Tuple<core::geo,core::node<golden::GoldenPointOfInterest>>': 0,
    'core::SearchResult<core::String,core::node<osm::OsmAddress>>': 0,
    'core::Array<caclrLoader::CaclrResponseCityItem>': 0,
    'core::Array<privateApi::ReconciliationReportMatchView>': 0,
    'core::TensorType': 0,
    'core::nodeIndexBucket<core::String,core::node<golden::GoldenPointOfInterest>>': 0,
    'core::Tuple<core::geo,core::node<osm::OsmPartialAddress>>': 0,
    'core::Map<core::String,runtime::HeaderObject>': 0,
    'core::Map<core::any,core::int>': 0,
    'core::nodeTime': 0,
    'core::Array<core::SearchResult<core::String,core::node<golden::GoldenCanton>>>': 0,
    'core::nodeGeo<core::node<golden::GoldenPointOfInterest>>$search$args': 0,
    'core::node<mengplaz::DataSource>': 0,
    'core::Array<core::nodeIndex>': 0,
    'core::Array<mengplaz::LinkedRecordEntry>': 0,
    'core::Array<mengplaz::POIRecord>': 0,
    'core::nodeTime<mengplaz::QualityEvent>': 0,
    'core::nodeIndexBucket<core::node<mengplaz::POIRecordProvider>,mengplaz::ReconciliationCandidate>': 0,
    'core::Array<caclrLoader::CaclrAlias>': 0,
    'core::Array<mengplaz::StreetRecordRef>': 0,
    'core::nodeIndexBucket<core::String,core::node<caclr::CaclrStreet>>': 0,
    'core::SearchResult<core::String,core::node<caclr::CaclrCanton>>': 0,
    'core::SearchResult<core::geo,core::node<osm::OsmAddress>>': 0,
    'core::Array<api::LinkedRecordDetails<bdaddress::BDAddressFullRecord>>': 0,
    'core::Tensor': 0,
    'core::Array<core::SearchResult<core::Tensor,core::any?>>': 0,
    'core::Array<mengplaz::QualityEvent>': 0,
    'core::any': 0,
    'core::FloatPrecision': 0,
    'core::nodeIndexBucket<core::String,core::node<bdaddress::BDAMunicipality>>': 0,
    'core::Array<runtime::Permission>': 0,
    'core::SearchResult<core::String,core::node<bdaddress::BDAMunicipality>>': 0,
    'core::Array<core::node<caclr::CaclrBuilding>>': 0,
    'core::GeoBox': 0,
    'core::CalendarUnit': 0,
    'core::Array<core::node?>': 0,
    'core::SearchResult': 0,
    'core::Array<runtime::ResponseObject>': 0,
    'core::Array<api::GeoJSONFeature>': 0,
    'core::Array<runtime::Identity>': 0,
    'core::Tuple<core::time,mengplaz::QualityEvent>': 0,
    'core::Array<core::GeoBox>': 0,
    'core::Array<core::SearchResult<core::String,core::Array<core::node<caclr::CaclrCity>>>>': 0,
    'core::Array<runtime::DateTuple>': 0,
    'core::TimeZone': 0,
    'core::SearchResult<core::String,core::node<golden::GoldenCity>>': 0,
    'core::SearchResult<core::String,core::node<golden::GoldenMunicipality>>': 0,
    'core::nodeIndex<core::String,core::node<caclr::CaclrBuilding>>': 0,
    'core::Array<mengplaz::Match<core::node<golden::GoldenCity>>>': 0,
    'core::DurationUnit': 0,
    'core::SearchResult<core::String,core::Array<core::node<golden::GoldenCity>>>': 0,
    'core::node<mengplaz::ReconciliationCandidateScore>': 0,
    'core::SearchResult<core::String,core::node<osm::OsmStreet>>': 0,
    'core::NodeInfo<core::geo>': 0,
    'core::Tuple<core::int,core::node<bdaddress::BDAStreet>>': 0,
    'core::nodeIndexBucket<core::String,core::node<caclr::CaclrConstituency>>': 0,
    'core::Array<runtime::HeaderObject>': 0,
    'core::Array<core::SearchResult<core::geo,core::node<osm::OsmAddress>>>': 0,
    'core::nodeIndexBucket<core::String,core::node<golden::GoldenCity>>': 0,
    'core::Array<runtime::Variable>': 0,
    'core::nodeIndex<core::String,core::Array<core::node<bdaddress::BDACity>>>': 0,
    'core::nodeIndex<core::String,core::node<caclr::CaclrMunicipality>>': 0,
    'core::Array<runtime::McpRole>': 0,
    'core::SearchResult<core::String,core::node<osm::OsmCity>>': 0,
    'core::Map<core::String,core::int>': 0,
    'core::node$resolve_all$args': 0,
    'core::nodeIndexBucket<core::String,core::Array<core::node<caclr::CaclrStreet>>>': 0,
    'core::Array<core::node<caclr::CaclrCity>>': 0,
    'core::Map': 0,
    'core::MathConstants': 0,
    'core::SearchResult<core::node<core::Tensor>,core::any?>': 0,
    'core::Array<api::POIFeatures>': 0,
    'core::float': 0,
    'core::Array<runtime::McpTask>': 0,
    'core::Array<core::SearchResult<core::geo,core::node<bdaddress::BDAddress>>>': 0,
    'core::Map<core::node<golden::GoldenStreet>,mengplaz::Match<core::node<golden::GoldenStreet>>>': 0,
    'core::Array<core::SearchResult>': 0,
    'core::nodeIndex<core::String,core::Array<core::node<golden::GoldenStreet>>>': 0,
    'core::String': 0,
    'core::field': 0,
    'core::Buffer': 0,
    'core::Tuple<core::time,trafic::Traffic>': 0,
    'core::Array<core::float>': 0,
    'core::Array<caclrLoader::CaclrResponseBuildingItem>': 0,
    'core::nodeTime<core::float>': 0,
    'core::nodeIndexBucket<core::String,core::node<golden::GoldenCanton>>': 0,
    'core::node<bdaddress::BDAddress>': 0,
    'core::nodeIndex<core::String,core::Array<core::node<caclr::CaclrStreet>>>': 0,
    'core::Array<core::SearchResult<core::String,core::node<golden::GoldenStreet>>>': 0,
    'core::nodeIndexBucket<core::String,core::node<caclr::CaclrCity>>': 0,
    'core::nodeIndexBucket<core::String,core::node<caclr::CaclrBuilding>>': 0,
    'core::Array<runtime::MediaTypeObject>': 0,
    'core::node<core::VectorVertex>': 0,
    'core::TableColumnMapping': 0,
    'core::Array<core::Array<core::String>>': 0,
    'core::Array<core::node<golden::GoldenStreet>>': 0,
    'core::Array<runtime::McpTool>': 0,
    'core::node<golden::GoldenConstituency>': 0,
    'core::SearchResult<core::String,core::node<golden::GoldenConstituency>>': 0,
    'core::Array<core::Tuple<core::String,core::String?>>': 0,
    'core::nodeIndex<core::String,core::node<caclr::CaclrCanton>>': 0,
    'core::nodeList<core::node<osm::OsmPartialAddress>>': 0,
    'core::Array<searchService::ScoredPoi>': 0,
    'core::Array<core::node<bdaddress::BDAStreet>>': 0,
    'core::nodeIndexBucket<core::String,core::node<bdaddress::BDACity>>': 0,
    'core::nodeGeo<core::node<osm::OsmAddress>>': 0,
    'core::type': 0,
    'core::Array<core::node<mengplaz::POIRecordProvider>>': 0,
    'core::SearchResult<core::String,core::node<mengplaz::POIRecordProvider>>': 0,
    'core::nodeIndex<core::String,core::node<bdaddress::BDAStreet>>': 0,
    'core::SearchResult<core::String,core::node<bdaddress::BDACity>>': 0,
    'core::nodeIndex<core::String,core::node<bdaddress::BDAddress>>': 0,
    'core::node<trafic::Endpoint>': 0,
    'core::Tuple<core::geo,core::node<bdaddress::BDAddress>>': 0,
    'core::Array<core::nodeList>': 0,
    'core::Map<core::String,core::geo>': 0,
    'core::nodeIndexBucket<core::String,core::Array<core::node<bdaddress::BDAStreet>>>': 0,
    'core::Array<privateApi::GoldenRecordScore>': 0,
    'core::nodeIndex<core::String,core::node<golden::GoldenPointOfInterest>>': 0,
    'core::Array<runtime::Task?>': 0,
    'core::node<core::bool>': 0,
    'core::nodeIndexBucket<core::String,core::node<caclr::CaclrMunicipality>>': 0,
    'core::Array<runtime::ZoneUsage>': 0,
    'core::Map<core::String,core::any>': 0,
    'core::Array<core::char>': 0,
    'core::GeoCircle': 0,
    'core::Map<core::int,core::bool>': 0,
    'core::SearchResult<core::String,core::node<caclr::CaclrConstituency>>': 0,
    'core::Array<core::SearchResult<core::String,core::node<bdaddress::BDACity>>>': 0,
    'core::Map<core::node<mengplaz::POIRecordProvider>,mengplaz::ReconciliationCandidate>': 0,
    'core::Array<runtime::McpContentBlock>': 0,
    'core::Array<core::any>': 0,
    'core::nodeGeo<core::node<golden::GoldenPointOfInterest>>': 0,
    'core::Array<core::NodeInfo<core::time>>': 0,
    'core::Array<core::SearchResult<core::geo,core::any?>>': 0,
    'core::Array<runtime::Task>': 0,
    'core::Map<core::int,searchService::ScoredCity>': 0,
    'core::Array<runtime::RuntimeUsage>': 0,
    'core::Array<runtime::PathItemObject>': 0,
    'core::nodeIndexBucket<core::String,core::node<bdaddress::BDAddress>>': 0,
    'core::nodeIndexBucket<core::String,core::Array<core::node<osm::OsmStreet>>>': 0,
    'core::SearchResult<core::String,core::Array<core::node<bdaddress::BDACity>>>': 0,
    'core::char': 0,
    'core::nodeList$info$args': 0,
    'core::node<bdaddress::BDAMunicipality>': 0,
    'core::Array<core::SearchResult<core::geo,core::node<golden::GoldenPointOfInterest>>>': 0,
    'core::Tuple<core::int,core::int>': 0,
    'core::ErrorFrame': 0,
    'core::Array<mengplaz::POIRecordRef>': 0,
    'core::Array<privateApi::MatchedCandidateDetail>': 0,
    'core::nodeIndexBucket<core::String,core::node<mengplaz::POIRecordProvider>>': 0,
    'core::Array<core::SearchResult<core::String,core::node<caclr::CaclrCanton>>>': 0,
    'core::SearchResult<core::String,core::node<caclr::CaclrStreet>>': 0,
    'core::Array<bdAddressLoader::BDAddressLine>': 0,
    'core::Array': 0,
    'core::Tuple<core::int,core::node<osm::OsmPartialAddress>>': 0,
    'core::Array<core::SearchResult<core::String,core::node<caclr::CaclrBuilding>>>': 0,
    'core::nodeIndex<core::node<mengplaz::POIRecordProvider>,core::Array<mengplaz::ReconciliationCandidate>>': 0,
    'core::Array<core::node<core::VectorVertex>?>': 0,
    'core::Array<runtime::Frame>': 0,
    'core::Array<core::SearchResult<core::String,core::node<mengplaz::POIRecordProvider>>>': 0,
    'core::Array<searchService::AddressSearchInput>': 0,
    'core::Array<core::field>': 0,
    'core::Date': 0,
    'core::Array<util::HistogramBin>': 0,
    'core::Array<mengplaz::POIFullRecordRef>': 0,
    'core::Array<io::S3Object>': 0,
    'core::node<osm::OsmStreet>': 0,
    'core::Array<privateApi::SourceRef>': 0,
    'core::Map<core::String,runtime::SchemaObject>': 0,
    'core::node<osm::OsmAddress>': 0,
    'core::Array<core::Map<core::String,core::any?>>': 0,
    'core::Table<util::GaussianProfileSlot?>': 0,
    'core::TensorDistance': 0,
    'core::geo': 0,
    'core::Array<core::Tuple<core::int,core::int>>': 0,
    'core::Array<core::SearchResult<core::String,core::Array<core::node<bdaddress::BDACity>>>>': 0,
    'core::nodeIndex<core::String,core::node<caclr::CaclrCity>>': 0,
    'core::nodeIndexBucket<core::String,core::node<golden::GoldenStreet>>': 0,
    'core::nodeIndex<core::String,core::Array<core::node<golden::GoldenCity>>>': 0,
    'core::nodeIndex<core::String,core::node<golden::GoldenMunicipality>>': 0,
    'core::SearchResult<core::geo,core::node<golden::GoldenPointOfInterest>>': 0,
    'core::nodeList$sample$args': 0,
    'core::ErrorCode': 0,
    'core::SearchResult<core::geo,core::node<osm::OsmPartialAddress>>': 0,
    'core::nodeTimeCursor': 0,
    'core::nodeIndex$search_closest$args': 0,
    'core::nodeTime<searchService::AddressSearchInput>': 0,
    'core::nodeList<core::node<golden::GoldenPointOfInterest>>': 0,
    'core::Array<runtime::WorkerUsage>': 0,
    'core::nodeIndex<core::String,core::node<mengplaz::POIRecordProvider>>': 0,
    'core::Map<core::String,core::String>': 0,
    'core::SearchResult<core::geo,core::node<bdaddress::BDAddress>>': 0,
    'core::nodeIndex<core::String,core::node<caclr::CaclrConstituency>>': 0,
    'core::Tuple<core::String,core::String?>': 0,
    'core::Array<core::SearchResult<core::String,core::node<golden::GoldenPointOfInterest>>>': 0,
    'core::nodeIndex<core::String,core::node<osm::OsmStreet>>': 0,
    'core::Map<core::node<mengplaz::DataSource>,core::Array<core::float>>': 0,
    'core::Map<core::String,core::any?>': 0,
    'core::nodeIndexBucket<core::String,core::node<osm::OsmAddress>>': 0,
    'core::SortOrder': 0,
    'core::SearchResult<core::String,core::node<golden::GoldenStreet>>': 0,
    'core::nodeIndex<core::String,core::node<golden::GoldenStreet>>': 0,
    'core::Table$applyMappings$args': 0,
    'core::Array<core::NodeInfo<core::int>>': 0,
    'core::Tuple<core::time,searchService::AddressSearchInput>': 0,
    'core::Array<runtime::PeriodicTask>': 0,
    'core::Array<core::node<osm::OsmAddress>>': 0,
    'core::SearchResult<core::String,core::node<bdaddress::BDAddress>>': 0,
    'core::Array<core::SearchResult<core::String,core::node<mengplaz::DataSource>>>': 0,
    'core::SearchResult<core::Tensor,core::any?>': 0,
    'core::Array<util::Quantizer>': 0,
    'core::Array<core::node<caclr::CaclrStreet>>': 0,
    'core::nodeList<core::node<bdaddress::BDAStreet>>': 0,
    'core::nodeIndexBucket<core::String,core::node<golden::GoldenConstituency>>': 0,
    'core::nodeTime$sample$args': 0,
    'core::node<caclr::CaclrStreet>': 0,
    'core::nodeIndex<core::String,core::node<golden::GoldenCity>>': 0,
    'core::GeoPoly': 0,
    'core::Array<core::SearchResult<core::String,core::node<caclr::CaclrStreet>>>': 0,
    'core::nodeList<core::node<bdaddress::BDAddress>>': 0,
    'core::SearchResult<core::geo,core::any?>': 0,
    'core::node<caclr::CaclrBuilding>': 0,
    'core::SearchResult<core::String,core::node<golden::GoldenPointOfInterest>>': 0,
    'core::Array<core::SearchResult<core::String,core::node<golden::GoldenMunicipality>>>': 0,
    'core::nodeIndexBucket<core::String,core::Array<core::node<bdaddress::BDACity>>>': 0,
    'core::nodeIndex<core::String,core::node<bdaddress::BDAMunicipality>>': 0,
    'core::SearchResult<core::String,core::node<trafic::Endpoint>>': 0,
    'core::SamplingMode': 0,
    'core::Map<core::String,core::Map<core::String,core::any>>': 0,
    'core::NodeInfo<core::time>': 0,
    'core::Array<mengplaz::ReconciliationCandidate>': 0,
    'core::nodeGeo<core::node<osm::OsmPartialAddress>>': 0,
    'core::nodeIndex<core::String,core::Array<core::node<osm::OsmStreet>>>': 0,
    'core::Array<core::SearchResult<core::String,core::node<trafic::Endpoint>>>': 0,
    'core::SearchResult<core::String,core::Array<core::node<caclr::CaclrStreet>>>': 0,
    'core::nodeList': 0,
    'core::node<golden::GoldenPointOfInterest>': 0,
    'core::node<osm::OsmPartialAddress>': 0,
    'core::int': 0,
    'core::Array<core::String>': 0,
    'core::Array<core::geo>': 0,
    'core::Map<core::node<mengplaz::POIRecordProvider>,core::node<mengplaz::POIRecordProvider>>': 0,
    'core::nodeIndexBucket<core::String,core::node<trafic::Endpoint>>': 0,
    'core::Array<core::SearchResult<core::geo,core::node<osm::OsmPartialAddress>>>': 0,
    'core::node<golden::GoldenCanton>': 0,
    'core::function': 0,
    'core::nodeGeo<core::node<bdaddress::BDAddress>>': 0,
    'core::duration': 0,
    'core::node<core::Tensor>': 0,
    'core::node<caclr::CaclrConstituency>': 0,
    'core::nodeIndex<core::String,core::node<bdaddress::BDACity>>': 0,
    'core::Tuple<core::time,core::any?>': 0,
    'core::Array<runtime::SchemaObject>': 0,
    'core::nodeGeo$info$args': 0,
    'core::Array<core::TableColumnMapping>': 0,
    'core::Tuple<core::int,core::node<golden::GoldenPointOfInterest>>': 0,
    'core::nodeIndex': 0,
    'core::node<golden::GoldenCity>': 0,
    'core::Array<core::nodeGeo>': 0,
    'core::NodeInfo': 0,
    'core::SearchResult<core::String,core::Array<core::node<bdaddress::BDAStreet>>>': 0,
    'core::VectorIndex': 0,
    'core::Array<core::SearchResult<core::String,core::node<bdaddress::BDAMunicipality>>>': 0,
    'core::nodeIndex<core::String,core::node<caclr::CaclrStreet>>': 0,
    'core::nodeIndex<core::String,core::Array<core::node<bdaddress::BDAStreet>>>': 0,
    'core::Array<core::SearchResult<core::node<mengplaz::POIRecordProvider>,mengplaz::ReconciliationCandidate>>': 0,
    'core::Array<core::SearchResult<core::String,core::Array<core::node<osm::OsmStreet>>>>': 0,
    'core::Array<core::SearchResult<core::String,core::Array<core::node<bdaddress::BDAStreet>>>>': 0,
    'core::SearchResult<core::node<mengplaz::POIRecordProvider>,core::Array<mengplaz::ReconciliationCandidate>>': 0,
    'core::nodeGeo': 0,
    'core::Tuple<core::int,core::node<bdaddress::BDAddress>>': 0,
    'core::Array<searchService::ScoredStreet>': 0,
    'core::Array<core::bool>': 0,
    'core::Array<core::SearchResult<core::String,core::node<bdaddress::BDAStreet>>>': 0,
    'core::SearchResult<core::String,core::Array<core::node<caclr::CaclrCity>>>': 0,
    'core::SearchResult<core::String,core::Array<core::node<osm::OsmStreet>>>': 0,
    'core::node<caclr::CaclrCity>': 0,
    'core::nodeIndex<core::String,core::Array<core::node<caclr::CaclrCity>>>': 0,
    'core::Map<core::String,runtime::ResponseObject>': 0,
    'core::node<caclr::CaclrCanton>': 0,
    'core::Tuple<core::geo,core::node<caclr::CaclrBuilding>>': 0,
    'core::Array<core::SearchResult<core::String,core::Array<core::node<golden::GoldenStreet>>>>': 0,
    'core::nodeIndexBucket<core::String,core::node<bdaddress::BDAStreet>>': 0,
    'core::nodeIndexBucket<core::node<mengplaz::POIRecordProvider>,core::Array<mengplaz::ReconciliationCandidate>>': 0,
    'core::Array<core::SearchResult<core::String,core::Array<core::node<caclr::CaclrStreet>>>>': 0,
    'core::nodeIndexBucket<core::String,core::Array<core::node<caclr::CaclrCity>>>': 0,
    'core::node<bdaddress::BDAStreet>': 0,
    'core::Array<runtime::Role>': 0,
    'core::nodeIndex<core::String,core::node<golden::GoldenConstituency>>': 0,
    'core::NodeInfo<core::int>': 0,
    'core::Array<core::any?>': 0,
    'core::bool': 0,
    'core::Array<mengplaz::SearchRequest>': 0,
    'core::SearchResult<core::String,core::Array<core::node<golden::GoldenStreet>>>': 0,
    'core::Array<runtime::Job>': 0,
    'core::Array<core::SearchResult<core::String,core::node<caclr::CaclrCity>>>': 0,
    'core::Array<caclrLoader::CaclrResponseMunicipalityItem>': 0,
    'core::nodeIndex<core::String,core::node<golden::GoldenCanton>>': 0,
    'core::Array<core::int?>': 0,
    'core::nodeGeo<core::node<caclr::CaclrBuilding>>$search$args': 0,
    'core::SearchResult<core::geo,core::node<caclr::CaclrBuilding>>': 0,
    'core::SearchResult<core::String,core::node<caclr::CaclrBuilding>>': 0,
    'core::Array<core::ErrorFrame>': 0,
    'core::Tuple<core::time,runtime::RuntimeUsage>': 0,
    'core::Array<core::type>': 0,
    'core::nodeTime<trafic::Traffic>': 0,
    'core::SearchResult<core::String,core::node<caclr::CaclrCity>>': 0,
    'core::nodeGeo$sample$args': 0,
    'core::nodeGeo<core::node<osm::OsmAddress>>$search$args': 0,
    'core::nodeIndex<core::String,core::node<osm::OsmCity>>': 0,
    'core::node<caclr::CaclrToken?>': 0,
    'core::Map<core::String,runtime::MediaTypeObject>': 0,
    'core::nodeIndex<core::String,core::node<trafic::Endpoint>>': 0,
    'core::node<golden::GoldenMunicipality>': 0,
    'core::Array<core::int>': 0,
    'core::Tuple': 0,
    'core::Tuple<core::geo,core::any?>': 0,
    'core::Array<api::LinkedRecordDetails<osm::OSMFullRecord>>': 0,
    'core::nodeIndexBucket': 0,
    'core::Array<core::NodeInfo<core::geo>>': 0,
    'core::Array<mengplaz::Match<core::node<golden::GoldenStreet>>>': 0,
    'core::Array<core::node<osm::OsmStreet>>': 0,
    'core::Array<core::SearchResult<core::String,core::node<golden::GoldenCity>>>': 0,
    'core::nodeIndexBucket<core::node<core::Tensor>,core::any?>': 0,
    'core::SearchResult<core::String,core::node<mengplaz::DataSource>>': 0,
    'core::Array<backupExporter::BkGoldenLinkedRecordDTO>': 0,
    'core::Array<backupExporter::BkManifestEntryDTO>': 0,
    'core::Array<backupExporter::BkGoldenQualityDTO>': 0,
    'core::Array<core::SearchResult<core::String,core::node<osm::OsmStreet>>>': 0,
    'core::SearchResult<core::String,core::node<bdaddress::BDAStreet>>': 0,
    'core::Array<caclrLoader::CaclrResponseStreetItem>': 0,
    'core::nodeIndexBucket<core::String,core::node<osm::OsmStreet>>': 0,
    'core::nodeIndex<core::String,core::node<mengplaz::DataSource>>': 0,
    'core::nodeIndex<core::String,core::node<osm::OsmAddress>>': 0,
    'core::Array<searchService::ScoredCity>': 0,
    'core::Table': 0,
    'core::Array<trafic::Traffic>': 0,
    'core::node<osm::OsmCity>': 0,
    'core::node<mengplaz::StreetRecordProvider>': 0,
    'core::Array<core::SearchResult<core::geo,core::node<caclr::CaclrBuilding>>>': 0,
    'core::time': 0,
    'core::Array<core::SearchResult<core::node<mengplaz::POIRecordProvider>,core::Array<mengplaz::ReconciliationCandidate>>>': 0,
    'core::SearchResult<core::node<mengplaz::POIRecordProvider>,mengplaz::ReconciliationCandidate>': 0,
    'core::Array<mengplaz::CandidateMatch<core::node<mengplaz::POIRecordProvider>>>': 0,
    'core::Tuple<core::time,core::float>': 0,
    'core::Array<core::node<bdaddress::BDACity>>': 0,
    'runtime::IdentityGrantType': 0,
    'runtime::MediaTypeObject': 0,
    'runtime::Month': 0,
    'runtime::LogDataUsage': 0,
    'runtime::Permission': 0,
    'runtime::McpAnnotations': 0,
    'runtime::McpClientCapabilities': 0,
    'runtime::Scheduler$list$args': 0,
    'runtime::Identity$all$args': 0,
    'runtime::Task': 0,
    'runtime::Identity$create$args': 0,
    'runtime::McpTaskStatus': 0,
    'runtime::Identity$permissions$args': 0,
    'runtime::Identity$token$args': 0,
    'runtime::RuntimeInfo': 0,
    'runtime::TaskStatus': 0,
    'runtime::Identity$get_by_name$args': 0,
    'runtime::mcp_tasks_result$args': 0,
    'runtime::Scheduler': 0,
    'runtime::McpServerResourcesCapabilities': 0,
    'runtime::mcp_tools_call$args': 0,
    'runtime::mcp_tasks_get$args': 0,
    'runtime::WorkerUsage': 0,
    'runtime::RequestBodyObject': 0,
    'runtime::McpTasksCancelParams': 0,
    'runtime::Task$live$args': 0,
    'runtime::OpenApi$v3$args': 0,
    'runtime::Identity$logout$args': 0,
    'runtime::OpenApi': 0,
    'runtime::ChildProcessResult': 0,
    'runtime::SchemaType': 0,
    'runtime::McpToolsListResult': 0,
    'runtime::mcp_initialize$args': 0,
    'runtime::Periodicity': 0,
    'runtime::McpToolsListParams': 0,
    'runtime::DayOfWeek': 0,
    'runtime::Scheduler$activate$args': 0,
    'runtime::Variable': 0,
    'runtime::McpServerToolsCapabilities': 0,
    'runtime::McpTaskSupport': 0,
    'runtime::McpImplementation': 0,
    'runtime::Job': 0,
    'runtime::OpenApiV3': 0,
    'runtime::LicenseObject': 0,
    'runtime::McpPriority': 0,
    'runtime::WeeklyPeriodicity': 0,
    'runtime::Task$tasks$args': 0,
    'runtime::PathItemObject': 0,
    'runtime::LogLevel': 0,
    'runtime::McpRole': 0,
    'runtime::McpTextContent': 0,
    'runtime::Identity$set_password$args': 0,
    'runtime::McpTasksListParams': 0,
    'runtime::Identity$login$args': 0,
    'runtime::SchemaFormat': 0,
    'runtime::OpenApiVersion': 0,
    'runtime::McpTaskCreateParams': 0,
    'runtime::Debug$all$args': 0,
    'runtime::McpToolsCallResult': 0,
    'runtime::MergeStrategy': 0,
    'runtime::MonthlyPeriodicity': 0,
    'runtime::McpResult': 0,
    'runtime::Runtime$backup_full$args': 0,
    'runtime::Identity$set_role$args': 0,
    'runtime::McpRequestParams': 0,
    'runtime::HeaderObject': 0,
    'runtime::McpClientRoots': 0,
    'runtime::InfoObject': 0,
    'runtime::McpTask': 0,
    'runtime::Scheduler$add$args': 0,
    'runtime::Scheduler$find$args': 0,
    'runtime::McpServerTasksCapabilities': 0,
    'runtime::SchemaObject': 0,
    'runtime::McpImageContent': 0,
    'runtime::McpContentType': 0,
    'runtime::McpInitializeParams': 0,
    'runtime::Task$running$args': 0,
    'runtime::mcp_tasks_cancel$args': 0,
    'runtime::Identity$current$args': 0,
    'runtime::McpInitializeResult': 0,
    'runtime::Task$is_running$args': 0,
    'runtime::ZoneUsage': 0,
    'runtime::Runtime': 0,
    'runtime::Identity': 0,
    'runtime::Identity$set_grants$args': 0,
    'runtime::Scheduler$deactivate$args': 0,
    'runtime::FixedPeriodicity': 0,
    'runtime::License': 0,
    'runtime::YearlyPeriodicity': 0,
    'runtime::Permission$all$args': 0,
    'runtime::ResponseCode': 0,
    'runtime::ContactObject': 0,
    'runtime::McpServerPromptsCapabilities': 0,
    'runtime::Runtime$info$args': 0,
    'runtime::Log': 0,
    'runtime::DateTuple': 0,
    'runtime::System$get_all_envs$args': 0,
    'runtime::McpAudioContent': 0,
    'runtime::McpServerCapabilities': 0,
    'runtime::ChildProcess': 0,
    'runtime::McpToolsCallParams': 0,
    'runtime::Frame': 0,
    'runtime::OperationObject': 0,
    'runtime::McpToolExecution': 0,
    'runtime::Identity$current_id$args': 0,
    'runtime::IdentityGrant': 0,
    'runtime::Task$cancel$args': 0,
    'runtime::McpTasksGetParams': 0,
    'runtime::Role': 0,
    'runtime::McpTool': 0,
    'runtime::Task$history$args': 0,
    'runtime::ComponentsObject': 0,
    'runtime::McpBaseMetadata': 0,
    'runtime::Debug': 0,
    'runtime::Runtime$abi$args': 0,
    'runtime::Debug$resume$args': 0,
    'runtime::Runtime$root$args': 0,
    'runtime::mcp_tasks_list$args': 0,
    'runtime::DailyPeriodicity': 0,
    'runtime::RuntimeUsage': 0,
    'runtime::PeriodicTask': 0,
    'runtime::McpTasksListResult': 0,
    'runtime::Debug$get$args': 0,
    'runtime::McpContentBlock': 0,
    'runtime::McpTasksCreateResult': 0,
    'runtime::McpTasksResultParams': 0,
    'runtime::System': 0,
    'runtime::PeriodicOptions': 0,
    'runtime::McpClientTasksCapabilities': 0,
    'runtime::Runtime$usage$args': 0,
    'runtime::Role$all$args': 0,
    'runtime::LicenseType': 0,
    'runtime::mcp_tools_list$args': 0,
    'runtime::ResponseObject': 0,
    'runtime::Identity$get_by_id$args': 0,
    'runtime::McpResourceContent': 0,
    'io::JsonWriter<backupExporter::BkGoldenCityDTO>': 0,
    'io::SmtpAuth': 0,
    'io::Reader<backupExporter::BkCaclrCantonDTO>': 0,
    'io::CsvWriter<backupExporter::BkTrafficDTO>': 0,
    'io::JsonWriter<backupExporter::BkBdaMunicipalityDTO>': 0,
    'io::JsonWriter<backupExporter::BkGoldenConstituencyDTO>': 0,
    'io::Writer<backupExporter::BkBdaStreetDTO>': 0,
    'io::Http<caclrLoader::CaclrResponseCities>': 0,
    'io::Http<caclrLoader::CaclrResponseCantons>': 0,
    'io::CsvWriter<backupExporter::BkGoldenQualityHistoryDTO>': 0,
    'io::GcbReader': 0,
    'io::Reader<backupExporter::BkCaclrConstituencyDTO>': 0,
    'io::CsvReader<bdAddressLoader::BDAddressLine>': 0,
    'io::Http<core::Array<bdAddressLoader::BDAddressLine>>': 0,
    'io::HttpResponse<caclrLoader::CaclrResponseCities>': 0,
    'io::Reader<backupExporter::BkBdaCityDTO>': 0,
    'io::TextReader': 0,
    'io::JsonReader<backupExporter::BkGoldenCantonDTO>': 0,
    'io::Writer<backupExporter::BkSourceDTO>': 0,
    'io::Writer<backupExporter::BkOsmPartialAddressDTO>': 0,
    'io::Reader<backupExporter::BkTrafficDTO>': 0,
    'io::JsonWriter<backupExporter::BkBdaStreetDTO>': 0,
    'io::Reader<backupExporter::BkGoldenConstituencyDTO>': 0,
    'io::JsonWriter<backupExporter::BkGoldenCantonDTO>': 0,
    'io::CsvReader<backupExporter::BkSourceDTO>': 0,
    'io::CsvReader<backupExporter::BkTrafficDTO>': 0,
    'io::JsonWriter<backupExporter::BkCaclrBuildingDTO>': 0,
    'io::Smtp': 0,
    'io::JsonWriter<backupExporter::BkGoldenMunicipalityDTO>': 0,
    'io::Writer<backupExporter::BkGoldenCityDTO>': 0,
    'io::Reader': 0,
    'io::Reader<backupExporter::BkBdaAddressDTO>': 0,
    'io::S3Object': 0,
    'io::S3BasicCredentials': 0,
    'io::Reader<backupExporter::BkBdaStreetDTO>': 0,
    'io::TextWriter': 0,
    'io::JsonReader<backupExporter::BkGoldenCityDTO>': 0,
    'io::JsonReader<backupExporter::BkOsmCityDTO>': 0,
    'io::Reader<backupExporter::BkBdaMunicipalityDTO>': 0,
    'io::JsonReader': 0,
    'io::JsonReader<backupExporter::BkOsmAddressDTO>': 0,
    'io::JsonReader<backupExporter::BkGoldenStreetDTO>': 0,
    'io::HttpResponse<caclrLoader::CaclrResponseCantons>': 0,
    'io::Csv$sample$args': 0,
    'io::JsonReader<backupExporter::BkGoldenPoiDTO>': 0,
    'io::Writer<backupExporter::BkManifestEntryDTO>': 0,
    'io::Writer<backupExporter::BkBdaAddressDTO>': 0,
    'io::Reader<backupExporter::BkCaclrBuildingDTO>': 0,
    'io::JsonReader<backupExporter::BkCaclrStreetDTO>': 0,
    'io::Reader<backupExporter::BkGoldenStreetDTO>': 0,
    'io::JsonWriter<backupExporter::BkCaclrConstituencyDTO>': 0,
    'io::CsvReader<backupExporter::BkGoldenQualityHistoryDTO>': 0,
    'io::JsonWriter<backupExporter::BkBdaCityDTO>': 0,
    'io::GcbWriter<golden::GoldenConstituency>': 0,
    'io::Writer<backupExporter::BkTrafficDTO>': 0,
    'io::SmtpMode': 0,
    'io::HttpResponse<caclrLoader::CaclrResponseBuildings>': 0,
    'io::CsvSharding': 0,
    'io::JsonReader<backupExporter::BkCaclrConstituencyDTO>': 0,
    'io::Writer<backupExporter::BkGoldenStreetDTO>': 0,
    'io::Reader<backupExporter::BkCaclrMunicipalityDTO>': 0,
    'io::CsvAnalysisConfig': 0,
    'io::Writer<backupExporter::BkGoldenConstituencyDTO>': 0,
    'io::Reader<backupExporter::BkGoldenCityDTO>': 0,
    'io::JsonReader<backupExporter::BkOsmPartialAddressDTO>': 0,
    'io::JsonWriter<backupExporter::BkOsmStreetDTO>': 0,
    'io::Writer<backupExporter::BkCaclrBuildingDTO>': 0,
    'io::Writer<backupExporter::BkGoldenMunicipalityDTO>': 0,
    'io::Writer<backupExporter::BkGoldenCantonDTO>': 0,
    'io::Writer': 0,
    'io::JsonWriter<backupExporter::BkOsmPartialAddressDTO>': 0,
    'io::JsonWriter<backupExporter::BkOsmCityDTO>': 0,
    'io::JsonReader<backupExporter::BkBdaStreetDTO>': 0,
    'io::Writer<backupExporter::BkOsmCityDTO>': 0,
    'io::Reader<backupExporter::BkGoldenPoiDTO>': 0,
    'io::Email': 0,
    'io::HttpResponse<core::Array<bdAddressLoader::BDAddressLine>>': 0,
    'io::S3Bucket': 0,
    'io::Writer<backupExporter::BkBdaMunicipalityDTO>': 0,
    'io::Http<osmLoader::OsmOverpassResponse>': 0,
    'io::Reader<backupExporter::BkGoldenCantonDTO>': 0,
    'io::Reader<bdAddressLoader::BDAddressLine>': 0,
    'io::Reader<backupExporter::BkSourceDTO>': 0,
    'io::Reader<backupExporter::BkGoldenQualityHistoryDTO>': 0,
    'io::JsonReader<backupExporter::BkGoldenMunicipalityDTO>': 0,
    'io::JsonReader<backupExporter::BkBdaCityDTO>': 0,
    'io::Writer<backupExporter::BkCaclrStreetDTO>': 0,
    'io::JsonWriter<backupExporter::BkGoldenStreetDTO>': 0,
    'io::HttpResponse<caclr::CaclrTokenResponse>': 0,
    'io::CsvColumnStatistics': 0,
    'io::Reader<backupExporter::BkOsmStreetDTO>': 0,
    'io::Writer<backupExporter::BkGoldenPoiDTO>': 0,
    'io::HttpRequest': 0,
    'io::GcbWriter': 0,
    'io::Writer<backupExporter::BkCaclrCityDTO>': 0,
    'io::GcbReader<golden::GoldenConstituency>': 0,
    'io::XmlReader': 0,
    'io::FileWalker': 0,
    'io::Writer<backupExporter::BkBdaCityDTO>': 0,
    'io::JsonReader<backupExporter::BkGoldenConstituencyDTO>': 0,
    'io::CsvWriter<backupExporter::BkManifestEntryDTO>': 0,
    'io::CsvStatistics': 0,
    'io::Csv': 0,
    'io::CsvReader': 0,
    'io::Writer<backupExporter::BkOsmStreetDTO>': 0,
    'io::Json': 0,
    'io::Writer<backupExporter::BkCaclrConstituencyDTO>': 0,
    'io::Http<caclr::CaclrTokenResponse>': 0,
    'io::Http<caclrLoader::CaclrResponseBuildings>': 0,
    'io::CsvWriter': 0,
    'io::CsvWriter<backupExporter::BkSourceDTO>': 0,
    'io::Reader<backupExporter::BkOsmCityDTO>': 0,
    'io::HttpResponse': 0,
    'io::HttpResponse<caclrLoader::CaclrResponseStreets>': 0,
    'io::File': 0,
    'io::Http': 0,
    'io::Writer<backupExporter::BkOsmAddressDTO>': 0,
    'io::JsonReader<backupExporter::BkBdaMunicipalityDTO>': 0,
    'io::Reader<backupExporter::BkOsmAddressDTO>': 0,
    'io::CsvFormat': 0,
    'io::S3': 0,
    'io::JsonWriter<backupExporter::BkBdaAddressDTO>': 0,
    'io::HttpResponse<osmLoader::OsmOverpassResponse>': 0,
    'io::JsonWriter<backupExporter::BkOsmAddressDTO>': 0,
    'io::JsonReader<backupExporter::BkCaclrCityDTO>': 0,
    'io::Reader<backupExporter::BkGoldenMunicipalityDTO>': 0,
    'io::HttpMethod': 0,
    'io::Writer<backupExporter::BkGoldenQualityHistoryDTO>': 0,
    'io::Writer<backupExporter::BkCaclrCantonDTO>': 0,
    'io::Http<caclrLoader::CaclrResponseMunicipalities>': 0,
    'io::Reader<backupExporter::BkCaclrCityDTO>': 0,
    'io::Reader<backupExporter::BkCaclrStreetDTO>': 0,
    'io::JsonWriter<backupExporter::BkCaclrStreetDTO>': 0,
    'io::JsonWriter<backupExporter::BkCaclrCityDTO>': 0,
    'io::Url': 0,
    'io::Reader<core::String>': 0,
    'io::JsonWriter': 0,
    'io::Csv$generate$args': 0,
    'io::JsonWriter<backupExporter::BkGoldenPoiDTO>': 0,
    'io::JsonReader<backupExporter::BkBdaAddressDTO>': 0,
    'io::HttpResponse<caclrLoader::CaclrResponseMunicipalities>': 0,
    'io::Writer<backupExporter::BkCaclrMunicipalityDTO>': 0,
    'io::Csv$analyze$args': 0,
    'io::BinReader': 0,
    'io::Http<caclrLoader::CaclrResponseStreets>': 0,
    'io::JsonReader<backupExporter::BkCaclrBuildingDTO>': 0,
    'io::JsonWriter<backupExporter::BkCaclrCantonDTO>': 0,
    'io::JsonReader<backupExporter::BkOsmStreetDTO>': 0,
    'io::Writer<golden::GoldenConstituency>': 0,
    'io::Reader<golden::GoldenConstituency>': 0,
    'io::JsonReader<backupExporter::BkCaclrMunicipalityDTO>': 0,
    'io::JsonWriter<backupExporter::BkCaclrMunicipalityDTO>': 0,
    'io::Reader<backupExporter::BkOsmPartialAddressDTO>': 0,
    'io::JsonReader<backupExporter::BkCaclrCantonDTO>': 0,
    'util::Quantizer': 0,
    'util::Histogram': 0,
    'util::Stack': 0,
    'util::ProgressTracker': 0,
    'util::HistogramBin': 0,
    'util::QuantizerSlotBound': 0,
    'util::Uuid': 0,
    'util::LinearQuantizer': 0,
    'util::QuantizerSlotBound<core::Array>': 0,
    'util::Random': 0,
    'util::Quantizer<core::Array>': 0,
    'util::Queue': 0,
    'util::CustomQuantizer': 0,
    'util::HistogramStats': 0,
    'util::MultiQuantizer': 0,
    'util::GaussianProfile': 0,
    'util::Gaussian': 0,
    'util::LogQuantizer': 0,
    'util::Assert': 0,
    'util::GaussianProfileSlot': 0,
    'util::TimeWindow': 0,
    'util::Crypto': 0,
    'util::SlidingWindow': 0,
    'project::Root': 0,
    'project::loadOsm$args': 0,
    'project::loadCaclr$args': 0,
    'project::loadBda$args': 0,
    'privateApi::getComparisonViewData$args': 0,
    'privateApi::RecordLocation': 0,
    'privateApi::linkAllFullMatched$args': 0,
    'privateApi::MatchedCandidateDetail': 0,
    'privateApi::promoteRecord$args': 0,
    'privateApi::LinkParameters': 0,
    'privateApi::ReconciliationReportView': 0,
    'privateApi::linkRecords$args': 0,
    'privateApi::GlobalQualityEntry': 0,
    'privateApi::SourceRef': 0,
    'privateApi::RecordTabResult': 0,
    'privateApi::getSources$args': 0,
    'privateApi::ReconciliationReportMatchView': 0,
    'privateApi::QualityTrend': 0,
    'privateApi::unlinkRecord$args': 0,
    'privateApi::unlockSource$args': 0,
    'privateApi::mergePositionsToGolden$args': 0,
    'privateApi::lockDatasource$args': 0,
    'privateApi::GlobalQualityHistory': 0,
    'privateApi::getReconciliationReport$args': 0,
    'privateApi::ComparisonViewData': 0,
    'privateApi::reconcilePOIs$args': 0,
    'privateApi::getLinkedComparisonViewData$args': 0,
    'privateApi::GoldenRecordScore': 0,
    'privateApi::getRecordTab$args': 0,
    'privateApi::computeGlobalQuality$args': 0,
    'privateApi::batchLinkByScore$args': 0,
    'privateApi::reconcile$args': 0,
    'api::GeoJSON': 0,
    'api::LinkedRecordDetails<bdaddress::BDAddressFullRecord>': 0,
    'api::searchAddress$args': 0,
    'api::LinkedRecordDetails<caclr::CaclrPOIFullRecord>': 0,
    'api::POIFeatures': 0,
    'api::getGoldenRecordRefByUid$args': 0,
    'api::getPois$args': 0,
    'api::GeoJSONFeature': 0,
    'api::getGlobalQualityHistory$args': 0,
    'api::getGoldenStreetsByLocalityId$args': 0,
    'api::getGoldenRecordsGeoJson$args': 0,
    'api::getGoldenRecords$args': 0,
    'api::GoldenWithLinkedRecords': 0,
    'api::GoldenRecordDetails': 0,
    'api::getGoldenLocalities$args': 0,
    'api::LinkedRecordDetails<osm::OSMFullRecord>': 0,
    'api::getGoldenRecordDetails$args': 0,
    'api::getPoisByGeo$args': 0,
    'api::GeoJSONGeometry': 0,
    'api::appInfo$args': 0,
    'api::DataAttribution': 0,
    'api::publicStats$args': 0,
    'api::attribution$args': 0,
    'api::LinkedRecordDetails': 0,
    'api::getGoldenNumbersByStreetId$args': 0,
    'api::getRecordByGeoportailID$args': 0,
    'api::GoldenIndex': 0,
    'api::getPoisInStreet$args': 0,
    'api::getGoldenWithLinkedRecords$args': 0,
    'api::searchStreet$args': 0,
    'api::openapi$args': 0,
    'api::getGoldenCommunes$args': 0,
    'bdAddressLoader::BDAddressLoader': 0,
    'bdAddressLoader::BDAddressLine': 0,
    'caclrLoader::CaclrResponseConstituency': 0,
    'caclrLoader::CACLRLoader': 0,
    'caclrLoader::CaclrResponseBuildingItem': 0,
    'caclrLoader::CaclrResponseBuildings': 0,
    'caclrLoader::CaclrAlias': 0,
    'caclrLoader::CaclrResponseCantons': 0,
    'caclrLoader::CaclrResponseMunicipalityItem': 0,
    'caclrLoader::CaclrResponseMunicipalities': 0,
    'caclrLoader::CaclrResponseCityItem': 0,
    'caclrLoader::CaclrResponseCantonItem': 0,
    'caclrLoader::CaclrResponseStreets': 0,
    'caclrLoader::CaclrResponseStreetItem': 0,
    'caclrLoader::CaclrResponseCities': 0,
    'osmLoader::OSMLoader': 0,
    'osmLoader::OsmOverpassResponse': 0,
    'backupExporter::BkOsmCityDTO': 0,
    'backupExporter::BkGoldenConstituencyDTO': 0,
    'backupExporter::BkCaclrBuildingDTO': 0,
    'backupExporter::BkCaclrMunicipalityDTO': 0,
    'backupExporter::BkCaclrCantonDTO': 0,
    'backupExporter::BkSourceDTO': 0,
    'backupExporter::BackupExporter': 0,
    'backupExporter::BkCaclrStreetDTO': 0,
    'backupExporter::BkGoldenCantonDTO': 0,
    'backupExporter::BkManifestEntryDTO': 0,
    'backupExporter::BkBdaMunicipalityDTO': 0,
    'backupExporter::BkGoldenPoiDTO': 0,
    'backupExporter::BkGoldenQualityDTO': 0,
    'backupExporter::BkTrafficDTO': 0,
    'backupExporter::BkCaclrConstituencyDTO': 0,
    'backupExporter::BkCaclrCityDTO': 0,
    'backupExporter::BkGoldenStreetDTO': 0,
    'backupExporter::BkBdaAddressDTO': 0,
    'backupExporter::BkOsmStreetDTO': 0,
    'backupExporter::BkGoldenMunicipalityDTO': 0,
    'backupExporter::BkGoldenQualityHistoryDTO': 0,
    'backupExporter::BkBdaCityDTO': 0,
    'backupExporter::BkBdaStreetDTO': 0,
    'backupExporter::BkOsmPartialAddressDTO': 0,
    'backupExporter::backupGraph$args': 0,
    'backupExporter::BkGoldenCityDTO': 0,
    'backupExporter::BkGoldenLinkedRecordDTO': 0,
    'backupExporter::BkOsmAddressDTO': 0,
    'backupImporter::BackupImporter': 0,
    'backupImporter::restoreGraph$args': 0,
    'trafic::Traffic': 0,
    'trafic::Endpoint': 0,
    'errors::MengplazMissmatch': 0,
    'errors::AddrErr': 0,
    'bdaddress::BDAddressFullRecord': 0,
    'bdaddress::BDAddressSource': 0,
    'bdaddress::BDACity': 0,
    'bdaddress::BDAddress': 0,
    'bdaddress::BDAMunicipality': 0,
    'bdaddress::BDAStreet': 0,
    'caclr::CaclrSource': 0,
    'caclr::CaclrStreet': 0,
    'caclr::CaclrConstituency': 0,
    'caclr::CaclrCanton': 0,
    'caclr::CaclrToken': 0,
    'caclr::CaclrDataStatus': 0,
    'caclr::CaclrAdminStatus': 0,
    'caclr::CaclrMunicipality': 0,
    'caclr::CaclrTokenResponse': 0,
    'caclr::CaclrCity': 0,
    'caclr::CaclrPOIFullRecord': 0,
    'caclr::CaclrEurostatsIds': 0,
    'caclr::CaclrBuilding': 0,
    'mengplaz::POIFullRecordRef': 0,
    'mengplaz::QualityEventType': 0,
    'mengplaz::Match<core::node<golden::GoldenCity>>': 0,
    'mengplaz::POIRecordProvider': 0,
    'mengplaz::LinkedRecordEntry': 0,
    'mengplaz::Match<core::node<golden::GoldenStreet>>': 0,
    'mengplaz::ReconciliationCandidate': 0,
    'mengplaz::CandidateMatch<core::node<mengplaz::POIRecordProvider>>': 0,
    'mengplaz::ReconciliationReport': 0,
    'mengplaz::StreetRecord': 0,
    'mengplaz::ScoringWeights': 0,
    'mengplaz::GeoParameters': 0,
    'mengplaz::SearchParameters': 0,
    'mengplaz::Alias': 0,
    'mengplaz::SearchRequest': 0,
    'mengplaz::DataSource': 0,
    'mengplaz::SearchItem': 0,
    'mengplaz::SearchResult': 0,
    'mengplaz::StreetRecordRef': 0,
    'mengplaz::CandidateMatch': 0,
    'mengplaz::POIRecord': 0,
    'mengplaz::ReconciliationCandidateScore': 0,
    'mengplaz::Match': 0,
    'mengplaz::QualityEvent': 0,
    'mengplaz::StreetRecordProvider': 0,
    'mengplaz::POIRecordRef': 0,
    'osm::OsmParsedAddress': 0,
    'osm::OsmPartialAddress': 0,
    'osm::OsmStreet': 0,
    'osm::OsmAddress': 0,
    'osm::OsmCity': 0,
    'osm::OSMFullRecord': 0,
    'osm::OsmSource': 0,
    'golden::GoldenSource': 0,
    'golden::GoldenMunicipality': 0,
    'golden::GoldenCity': 0,
    'golden::GoldenPointOfInterest': 0,
    'golden::GoldenCanton': 0,
    'golden::recomputeGoldenGeoScore$args': 0,
    'golden::GoldenConstituency': 0,
    'golden::GoldenStreet': 0,
    'goldenServices::GoldenServices': 0,
    'searchService::AddressSearchInput': 0,
    'searchService::ScoredPoi': 0,
    'searchService::ScoredCity': 0,
    'searchService::ScoredStreet': 0,
    'updateService::updateOSM$args': 0,
    'updateService::updateBDA$args': 0,
    'updateService::updateCACLR$args': 0,
    'traffic_service::Traffic_Service': 0,
    'utils::SplitAlphaNumericalString': 0,
  }

  interface $FieldsMap {
    'core::nodeIndex$info$args::nodes': 0,
    'core::nodeGeo$search$args::center': 0,
    'core::nodeGeo$search$args::max': 0,
    'core::Chars::codepoints': 0,
    'core::nodeGeo<core::node<osm::OsmPartialAddress>>$search$args::center': 0,
    'core::nodeGeo<core::node<osm::OsmPartialAddress>>$search$args::max': 0,
    'core::nodeGeo<core::node<bdaddress::BDAddress>>$search$args::center': 0,
    'core::nodeGeo<core::node<bdaddress::BDAddress>>$search$args::max': 0,
    'core::Error::message': 0,
    'core::Error::stack': 0,
    'core::nodeTime$info$args::nodes': 0,
    'core::nodeIndex$sample$args::refs': 0,
    'core::nodeIndex$sample$args::from': 0,
    'core::nodeIndex$sample$args::maxRows': 0,
    'core::nodeIndex$sample$args::mode': 0,
    'core::VectorVertex::vector': 0,
    'core::VectorVertex::level_sizes': 0,
    'core::VectorVertex::neighbour_nodes': 0,
    'core::nodeGeo<core::node<golden::GoldenPointOfInterest>>$search$args::center': 0,
    'core::nodeGeo<core::node<golden::GoldenPointOfInterest>>$search$args::max': 0,
    'core::GeoBox::sw': 0,
    'core::GeoBox::ne': 0,
    'core::SearchResult::key': 0,
    'core::SearchResult::value': 0,
    'core::SearchResult::distance': 0,
    'core::node$resolve_all$args::n': 0,
    'core::TableColumnMapping::column': 0,
    'core::TableColumnMapping::extractors': 0,
    'core::GeoCircle::center': 0,
    'core::GeoCircle::radius': 0,
    'core::nodeList$info$args::nodes': 0,
    'core::ErrorFrame::module': 0,
    'core::ErrorFrame::function': 0,
    'core::ErrorFrame::line': 0,
    'core::ErrorFrame::column': 0,
    'core::Date::year': 0,
    'core::Date::month': 0,
    'core::Date::day': 0,
    'core::Date::hour': 0,
    'core::Date::minute': 0,
    'core::Date::second': 0,
    'core::Date::microsecond': 0,
    'core::nodeList$sample$args::refs': 0,
    'core::nodeList$sample$args::from': 0,
    'core::nodeList$sample$args::to': 0,
    'core::nodeList$sample$args::maxRows': 0,
    'core::nodeList$sample$args::mode': 0,
    'core::nodeList$sample$args::maxDephasing': 0,
    'core::nodeTimeCursor::n': 0,
    'core::nodeIndex$search_closest$args::i': 0,
    'core::nodeIndex$search_closest$args::key': 0,
    'core::nodeIndex$search_closest$args::max': 0,
    'core::Table$applyMappings$args::table': 0,
    'core::Table$applyMappings$args::mappings': 0,
    'core::nodeTime$sample$args::refs': 0,
    'core::nodeTime$sample$args::from': 0,
    'core::nodeTime$sample$args::to': 0,
    'core::nodeTime$sample$args::maxRows': 0,
    'core::nodeTime$sample$args::mode': 0,
    'core::nodeTime$sample$args::maxDephasing': 0,
    'core::nodeTime$sample$args::tz': 0,
    'core::GeoPoly::points': 0,
    'core::nodeGeo$info$args::nodes': 0,
    'core::NodeInfo::size': 0,
    'core::NodeInfo::from': 0,
    'core::NodeInfo::to': 0,
    'core::VectorIndex::values': 0,
    'core::VectorIndex::count': 0,
    'core::VectorIndex::max_level': 0,
    'core::VectorIndex::entry_node_ref': 0,
    'core::VectorIndex::rng': 0,
    'core::VectorIndex::distance': 0,
    'core::nodeGeo<core::node<caclr::CaclrBuilding>>$search$args::center': 0,
    'core::nodeGeo<core::node<caclr::CaclrBuilding>>$search$args::max': 0,
    'core::nodeGeo$sample$args::refs': 0,
    'core::nodeGeo$sample$args::from': 0,
    'core::nodeGeo$sample$args::to': 0,
    'core::nodeGeo$sample$args::maxRows': 0,
    'core::nodeGeo$sample$args::mode': 0,
    'core::nodeGeo<core::node<osm::OsmAddress>>$search$args::center': 0,
    'core::nodeGeo<core::node<osm::OsmAddress>>$search$args::max': 0,
    'core::Tuple::x': 0,
    'core::Tuple::y': 0,
    'core::nodeIndexBucket::key': 0,
    'core::nodeIndexBucket::value': 0,
    'core::nodeIndexBucket::next': 0,
    'runtime::MediaTypeObject::schema': 0,
    'runtime::LogDataUsage::read_bytes': 0,
    'runtime::LogDataUsage::read_hits': 0,
    'runtime::LogDataUsage::read_wasted': 0,
    'runtime::LogDataUsage::write_bytes': 0,
    'runtime::LogDataUsage::write_hits': 0,
    'runtime::LogDataUsage::cache_bytes': 0,
    'runtime::LogDataUsage::cache_hits': 0,
    'runtime::Permission::name': 0,
    'runtime::Permission::description': 0,
    'runtime::McpAnnotations::audience': 0,
    'runtime::McpAnnotations::priority': 0,
    'runtime::McpAnnotations::lastModified': 0,
    'runtime::McpClientCapabilities::experimental': 0,
    'runtime::McpClientCapabilities::roots': 0,
    'runtime::McpClientCapabilities::sampling': 0,
    'runtime::McpClientCapabilities::elicitation': 0,
    'runtime::McpClientCapabilities::tasks': 0,
    'runtime::Task::user_id': 0,
    'runtime::Task::user_name': 0,
    'runtime::Task::task_id': 0,
    'runtime::Task::mod': 0,
    'runtime::Task::type': 0,
    'runtime::Task::fun': 0,
    'runtime::Task::creation': 0,
    'runtime::Task::start': 0,
    'runtime::Task::completion': 0,
    'runtime::Task::status': 0,
    'runtime::Task::progress': 0,
    'runtime::Identity$create$args::name': 0,
    'runtime::Identity$create$args::role': 0,
    'runtime::Identity$token$args::id': 0,
    'runtime::Identity$token$args::ttl': 0,
    'runtime::RuntimeInfo::version': 0,
    'runtime::RuntimeInfo::program_version': 0,
    'runtime::RuntimeInfo::arch': 0,
    'runtime::RuntimeInfo::timezone': 0,
    'runtime::RuntimeInfo::license': 0,
    'runtime::RuntimeInfo::io_threads': 0,
    'runtime::RuntimeInfo::bg_threads': 0,
    'runtime::RuntimeInfo::fg_threads': 0,
    'runtime::RuntimeInfo::mem_total': 0,
    'runtime::RuntimeInfo::mem_worker': 0,
    'runtime::RuntimeInfo::disk_data_bytes': 0,
    'runtime::Identity$get_by_name$args::name': 0,
    'runtime::mcp_tasks_result$args::params': 0,
    'runtime::McpServerResourcesCapabilities::subscribe': 0,
    'runtime::McpServerResourcesCapabilities::listChanged': 0,
    'runtime::mcp_tools_call$args::params': 0,
    'runtime::mcp_tasks_get$args::params': 0,
    'runtime::WorkerUsage::memory': 0,
    'runtime::WorkerUsage::cache': 0,
    'runtime::WorkerUsage::writes': 0,
    'runtime::WorkerUsage::reads': 0,
    'runtime::RequestBodyObject::content': 0,
    'runtime::RequestBodyObject::required': 0,
    'runtime::McpTasksCancelParams::_meta': 0,
    'runtime::McpTasksCancelParams::taskId': 0,
    'runtime::Task$live$args::ids': 0,
    'runtime::ChildProcessResult::code': 0,
    'runtime::ChildProcessResult::stdout': 0,
    'runtime::ChildProcessResult::stderr': 0,
    'runtime::McpToolsListResult::_meta': 0,
    'runtime::McpToolsListResult::tools': 0,
    'runtime::mcp_initialize$args::params': 0,
    'runtime::McpToolsListParams::_meta': 0,
    'runtime::McpToolsListParams::cursor': 0,
    'runtime::Scheduler$activate$args::function': 0,
    'runtime::Variable::name': 0,
    'runtime::Variable::value': 0,
    'runtime::McpServerToolsCapabilities::listChanged': 0,
    'runtime::McpImplementation::name': 0,
    'runtime::McpImplementation::title': 0,
    'runtime::McpImplementation::version': 0,
    'runtime::Job::function': 0,
    'runtime::Job::arguments': 0,
    'runtime::OpenApiV3::openapi': 0,
    'runtime::OpenApiV3::info': 0,
    'runtime::OpenApiV3::paths': 0,
    'runtime::OpenApiV3::components': 0,
    'runtime::LicenseObject::name': 0,
    'runtime::LicenseObject::identifier': 0,
    'runtime::LicenseObject::url': 0,
    'runtime::WeeklyPeriodicity::days': 0,
    'runtime::WeeklyPeriodicity::daily': 0,
    'runtime::Task$tasks$args::ids': 0,
    'runtime::PathItemObject::description': 0,
    'runtime::PathItemObject::post': 0,
    'runtime::McpTextContent::type': 0,
    'runtime::McpTextContent::_meta': 0,
    'runtime::McpTextContent::annotations': 0,
    'runtime::McpTextContent::text': 0,
    'runtime::Identity$set_password$args::name': 0,
    'runtime::Identity$set_password$args::pass': 0,
    'runtime::McpTasksListParams::_meta': 0,
    'runtime::McpTasksListParams::cursor': 0,
    'runtime::Identity$login$args::login': 0,
    'runtime::Identity$login$args::password': 0,
    'runtime::McpTaskCreateParams::ttl': 0,
    'runtime::McpToolsCallResult::_meta': 0,
    'runtime::McpToolsCallResult::content': 0,
    'runtime::McpToolsCallResult::structuredContent': 0,
    'runtime::McpToolsCallResult::isError': 0,
    'runtime::MonthlyPeriodicity::days': 0,
    'runtime::MonthlyPeriodicity::daily': 0,
    'runtime::Identity$set_role$args::name': 0,
    'runtime::Identity$set_role$args::role': 0,
    'runtime::HeaderObject::description': 0,
    'runtime::HeaderObject::required': 0,
    'runtime::McpClientRoots::listChanged': 0,
    'runtime::InfoObject::title': 0,
    'runtime::InfoObject::version': 0,
    'runtime::InfoObject::summary': 0,
    'runtime::InfoObject::description': 0,
    'runtime::InfoObject::termsOfService': 0,
    'runtime::InfoObject::contact': 0,
    'runtime::InfoObject::license': 0,
    'runtime::McpTask::taskId': 0,
    'runtime::McpTask::status': 0,
    'runtime::McpTask::statusMessage': 0,
    'runtime::McpTask::createdAt': 0,
    'runtime::McpTask::lastUpdatedAt': 0,
    'runtime::McpTask::ttl': 0,
    'runtime::McpTask::pollInterval': 0,
    'runtime::Scheduler$add$args::function': 0,
    'runtime::Scheduler$add$args::periodicity': 0,
    'runtime::Scheduler$add$args::options': 0,
    'runtime::Scheduler$find$args::function': 0,
    'runtime::McpServerTasksCapabilities::list': 0,
    'runtime::McpServerTasksCapabilities::cancel': 0,
    'runtime::McpServerTasksCapabilities::requests': 0,
    'runtime::SchemaObject::$ref': 0,
    'runtime::SchemaObject::$defs': 0,
    'runtime::SchemaObject::type': 0,
    'runtime::SchemaObject::format': 0,
    'runtime::SchemaObject::description': 0,
    'runtime::SchemaObject::nullable': 0,
    'runtime::SchemaObject::properties': 0,
    'runtime::SchemaObject::pattern': 0,
    'runtime::SchemaObject::required': 0,
    'runtime::SchemaObject::items': 0,
    'runtime::SchemaObject::oneOf': 0,
    'runtime::SchemaObject::allOf': 0,
    'runtime::SchemaObject::anyOf': 0,
    'runtime::SchemaObject::minItems': 0,
    'runtime::SchemaObject::maxItems': 0,
    'runtime::SchemaObject::enum': 0,
    'runtime::SchemaObject::additionalProperties': 0,
    'runtime::McpImageContent::type': 0,
    'runtime::McpImageContent::_meta': 0,
    'runtime::McpImageContent::annotations': 0,
    'runtime::McpImageContent::data': 0,
    'runtime::McpImageContent::mimeType': 0,
    'runtime::McpInitializeParams::_meta': 0,
    'runtime::McpInitializeParams::protocolVersion': 0,
    'runtime::McpInitializeParams::capabilities': 0,
    'runtime::McpInitializeParams::clientInfo': 0,
    'runtime::mcp_tasks_cancel$args::params': 0,
    'runtime::McpInitializeResult::_meta': 0,
    'runtime::McpInitializeResult::protocolVersion': 0,
    'runtime::McpInitializeResult::capabilities': 0,
    'runtime::McpInitializeResult::serverInfo': 0,
    'runtime::McpInitializeResult::instructions': 0,
    'runtime::Task$is_running$args::task_id': 0,
    'runtime::ZoneUsage::size': 0,
    'runtime::ZoneUsage::committed_blocks': 0,
    'runtime::ZoneUsage::reserved_blocks': 0,
    'runtime::ZoneUsage::blocks': 0,
    'runtime::ZoneUsage::cache': 0,
    'runtime::Identity::id': 0,
    'runtime::Identity::name': 0,
    'runtime::Identity::role': 0,
    'runtime::Identity::grants': 0,
    'runtime::Identity$set_grants$args::name': 0,
    'runtime::Identity$set_grants$args::grants': 0,
    'runtime::Scheduler$deactivate$args::function': 0,
    'runtime::FixedPeriodicity::every': 0,
    'runtime::License::name': 0,
    'runtime::License::start': 0,
    'runtime::License::end': 0,
    'runtime::License::company': 0,
    'runtime::License::max_memory': 0,
    'runtime::License::extra_1': 0,
    'runtime::License::extra_2': 0,
    'runtime::License::type': 0,
    'runtime::YearlyPeriodicity::dates': 0,
    'runtime::YearlyPeriodicity::timezone': 0,
    'runtime::ContactObject::name': 0,
    'runtime::ContactObject::url': 0,
    'runtime::ContactObject::email': 0,
    'runtime::McpServerPromptsCapabilities::listChanged': 0,
    'runtime::Log::level': 0,
    'runtime::Log::time': 0,
    'runtime::Log::user_id': 0,
    'runtime::Log::id': 0,
    'runtime::Log::id2': 0,
    'runtime::Log::src': 0,
    'runtime::Log::data': 0,
    'runtime::DateTuple::day': 0,
    'runtime::DateTuple::month': 0,
    'runtime::McpAudioContent::type': 0,
    'runtime::McpAudioContent::_meta': 0,
    'runtime::McpAudioContent::annotations': 0,
    'runtime::McpAudioContent::data': 0,
    'runtime::McpAudioContent::mimeType': 0,
    'runtime::McpServerCapabilities::experimental': 0,
    'runtime::McpServerCapabilities::logging': 0,
    'runtime::McpServerCapabilities::completions': 0,
    'runtime::McpServerCapabilities::prompts': 0,
    'runtime::McpServerCapabilities::resources': 0,
    'runtime::McpServerCapabilities::tools': 0,
    'runtime::McpServerCapabilities::tasks': 0,
    'runtime::ChildProcess::pid': 0,
    'runtime::McpToolsCallParams::_meta': 0,
    'runtime::McpToolsCallParams::name': 0,
    'runtime::McpToolsCallParams::arguments': 0,
    'runtime::McpToolsCallParams::task': 0,
    'runtime::Frame::module': 0,
    'runtime::Frame::type': 0,
    'runtime::Frame::function': 0,
    'runtime::Frame::src': 0,
    'runtime::Frame::line': 0,
    'runtime::Frame::column': 0,
    'runtime::Frame::scope': 0,
    'runtime::OperationObject::tags': 0,
    'runtime::OperationObject::description': 0,
    'runtime::OperationObject::requestBody': 0,
    'runtime::OperationObject::responses': 0,
    'runtime::McpToolExecution::taskSupport': 0,
    'runtime::IdentityGrant::name': 0,
    'runtime::IdentityGrant::grant': 0,
    'runtime::Task$cancel$args::task_id': 0,
    'runtime::McpTasksGetParams::_meta': 0,
    'runtime::McpTasksGetParams::taskId': 0,
    'runtime::Role::name': 0,
    'runtime::Role::permissions': 0,
    'runtime::McpTool::name': 0,
    'runtime::McpTool::title': 0,
    'runtime::McpTool::description': 0,
    'runtime::McpTool::inputSchema': 0,
    'runtime::McpTool::outputSchema': 0,
    'runtime::McpTool::annotations': 0,
    'runtime::McpTool::execution': 0,
    'runtime::Task$history$args::offset': 0,
    'runtime::Task$history$args::max': 0,
    'runtime::ComponentsObject::schemas': 0,
    'runtime::Debug::id': 0,
    'runtime::Debug::frames': 0,
    'runtime::Debug::root': 0,
    'runtime::Debug$resume$args::id': 0,
    'runtime::mcp_tasks_list$args::params': 0,
    'runtime::DailyPeriodicity::hour': 0,
    'runtime::DailyPeriodicity::minute': 0,
    'runtime::DailyPeriodicity::second': 0,
    'runtime::DailyPeriodicity::timezone': 0,
    'runtime::RuntimeUsage::os_total_bytes': 0,
    'runtime::RuntimeUsage::os_used_bytes': 0,
    'runtime::RuntimeUsage::proc_virt_bytes': 0,
    'runtime::RuntimeUsage::proc_res_bytes': 0,
    'runtime::RuntimeUsage::proc_shr_bytes': 0,
    'runtime::RuntimeUsage::global_memory': 0,
    'runtime::RuntimeUsage::memory_drift': 0,
    'runtime::RuntimeUsage::workers': 0,
    'runtime::RuntimeUsage::zones': 0,
    'runtime::PeriodicTask::function': 0,
    'runtime::PeriodicTask::periodicity': 0,
    'runtime::PeriodicTask::options': 0,
    'runtime::PeriodicTask::is_active': 0,
    'runtime::PeriodicTask::next_execution': 0,
    'runtime::PeriodicTask::execution_count': 0,
    'runtime::McpTasksListResult::_meta': 0,
    'runtime::McpTasksListResult::tasks': 0,
    'runtime::McpTasksListResult::nextCursor': 0,
    'runtime::Debug$get$args::id': 0,
    'runtime::McpTasksCreateResult::_meta': 0,
    'runtime::McpTasksCreateResult::task': 0,
    'runtime::McpTasksResultParams::_meta': 0,
    'runtime::McpTasksResultParams::taskId': 0,
    'runtime::PeriodicOptions::immediate': 0,
    'runtime::PeriodicOptions::activated': 0,
    'runtime::PeriodicOptions::start': 0,
    'runtime::PeriodicOptions::max_duration': 0,
    'runtime::McpClientTasksCapabilities::list': 0,
    'runtime::McpClientTasksCapabilities::cancel': 0,
    'runtime::McpClientTasksCapabilities::requests': 0,
    'runtime::mcp_tools_list$args::params': 0,
    'runtime::ResponseObject::description': 0,
    'runtime::ResponseObject::headers': 0,
    'runtime::ResponseObject::content': 0,
    'runtime::Identity$get_by_id$args::id': 0,
    'runtime::McpResourceContent::type': 0,
    'runtime::McpResourceContent::_meta': 0,
    'runtime::McpResourceContent::annotations': 0,
    'runtime::McpResourceContent::uri': 0,
    'runtime::McpResourceContent::description': 0,
    'runtime::McpResourceContent::mimeType': 0,
    'runtime::McpResourceContent::size': 0,
    'io::GcbReader::path': 0,
    'io::GcbReader::pos': 0,
    'io::TextReader::path': 0,
    'io::TextReader::pos': 0,
    'io::Smtp::host': 0,
    'io::Smtp::port': 0,
    'io::Smtp::mode': 0,
    'io::Smtp::authenticate': 0,
    'io::Smtp::user': 0,
    'io::Smtp::pass': 0,
    'io::S3Object::key': 0,
    'io::S3Object::last_modified': 0,
    'io::S3Object::size': 0,
    'io::S3Object::etag': 0,
    'io::S3BasicCredentials::access_key': 0,
    'io::S3BasicCredentials::secret_key': 0,
    'io::TextWriter::path': 0,
    'io::TextWriter::append': 0,
    'io::JsonReader::path': 0,
    'io::JsonReader::pos': 0,
    'io::Csv$sample$args::reader': 0,
    'io::Csv$sample$args::max_lines': 0,
    'io::CsvSharding::id': 0,
    'io::CsvSharding::column': 0,
    'io::CsvSharding::modulo': 0,
    'io::CsvAnalysisConfig::header_lines': 0,
    'io::CsvAnalysisConfig::separator': 0,
    'io::CsvAnalysisConfig::string_delimiter': 0,
    'io::CsvAnalysisConfig::decimal_separator': 0,
    'io::CsvAnalysisConfig::thousands_separator': 0,
    'io::CsvAnalysisConfig::row_limit': 0,
    'io::CsvAnalysisConfig::enumerable_limit': 0,
    'io::CsvAnalysisConfig::date_check_limit': 0,
    'io::CsvAnalysisConfig::date_formats': 0,
    'io::Email::from': 0,
    'io::Email::subject': 0,
    'io::Email::body': 0,
    'io::Email::body_is_html': 0,
    'io::Email::to': 0,
    'io::Email::cc': 0,
    'io::Email::bcc': 0,
    'io::S3Bucket::name': 0,
    'io::S3Bucket::creation_date': 0,
    'io::CsvColumnStatistics::name': 0,
    'io::CsvColumnStatistics::example': 0,
    'io::CsvColumnStatistics::null_count': 0,
    'io::CsvColumnStatistics::bool_count': 0,
    'io::CsvColumnStatistics::int_count': 0,
    'io::CsvColumnStatistics::float_count': 0,
    'io::CsvColumnStatistics::string_count': 0,
    'io::CsvColumnStatistics::date_count': 0,
    'io::CsvColumnStatistics::date_format_count': 0,
    'io::CsvColumnStatistics::enumerable_count': 0,
    'io::CsvColumnStatistics::profile': 0,
    'io::HttpRequest::method': 0,
    'io::HttpRequest::url': 0,
    'io::HttpRequest::headers': 0,
    'io::HttpRequest::body': 0,
    'io::HttpRequest::timeout': 0,
    'io::HttpRequest::max_response_size': 0,
    'io::GcbWriter::path': 0,
    'io::GcbWriter::append': 0,
    'io::XmlReader::path': 0,
    'io::XmlReader::pos': 0,
    'io::FileWalker::path': 0,
    'io::CsvStatistics::header_lines': 0,
    'io::CsvStatistics::separator': 0,
    'io::CsvStatistics::string_delimiter': 0,
    'io::CsvStatistics::decimal_separator': 0,
    'io::CsvStatistics::thousands_separator': 0,
    'io::CsvStatistics::columns': 0,
    'io::CsvStatistics::line_count': 0,
    'io::CsvStatistics::fail_count': 0,
    'io::CsvStatistics::file_count': 0,
    'io::CsvReader::path': 0,
    'io::CsvReader::pos': 0,
    'io::CsvReader::format': 0,
    'io::CsvReader::sharding': 0,
    'io::CsvWriter::path': 0,
    'io::CsvWriter::append': 0,
    'io::CsvWriter::format': 0,
    'io::HttpResponse::status_code': 0,
    'io::HttpResponse::headers': 0,
    'io::HttpResponse::content': 0,
    'io::HttpResponse::error_msg': 0,
    'io::File::path': 0,
    'io::File::size': 0,
    'io::File::last_modification': 0,
    'io::CsvFormat::header_lines': 0,
    'io::CsvFormat::separator': 0,
    'io::CsvFormat::string_delimiter': 0,
    'io::CsvFormat::decimal_separator': 0,
    'io::CsvFormat::thousands_separator': 0,
    'io::CsvFormat::trim': 0,
    'io::CsvFormat::format': 0,
    'io::CsvFormat::tz': 0,
    'io::CsvFormat::strict': 0,
    'io::CsvFormat::nearest_time': 0,
    'io::S3::host': 0,
    'io::S3::region': 0,
    'io::S3::credentials': 0,
    'io::S3::force_path_style': 0,
    'io::Url::protocol': 0,
    'io::Url::host': 0,
    'io::Url::port': 0,
    'io::Url::path': 0,
    'io::Url::user': 0,
    'io::Url::password': 0,
    'io::Url::params': 0,
    'io::Url::hash': 0,
    'io::JsonWriter::path': 0,
    'io::JsonWriter::append': 0,
    'io::Csv$generate$args::stats': 0,
    'io::Csv$analyze$args::paths': 0,
    'io::Csv$analyze$args::config': 0,
    'io::BinReader::path': 0,
    'io::BinReader::pos': 0,
    'util::Histogram::quantizer': 0,
    'util::Histogram::bins': 0,
    'util::Histogram::nb_rejected': 0,
    'util::Histogram::nb_accepted': 0,
    'util::Histogram::min': 0,
    'util::Histogram::max': 0,
    'util::Histogram::sum': 0,
    'util::Histogram::sumsq': 0,
    'util::Stack::values': 0,
    'util::ProgressTracker::start': 0,
    'util::ProgressTracker::total': 0,
    'util::ProgressTracker::counter': 0,
    'util::ProgressTracker::duration': 0,
    'util::ProgressTracker::progress': 0,
    'util::ProgressTracker::speed': 0,
    'util::ProgressTracker::remaining': 0,
    'util::ProgressTracker::speed_smoothed': 0,
    'util::ProgressTracker::smoothing': 0,
    'util::HistogramBin::bin': 0,
    'util::HistogramBin::count': 0,
    'util::HistogramBin::ratio': 0,
    'util::HistogramBin::cumulative_count': 0,
    'util::HistogramBin::cumulative_ratio': 0,
    'util::QuantizerSlotBound::min': 0,
    'util::QuantizerSlotBound::max': 0,
    'util::QuantizerSlotBound::center': 0,
    'util::LinearQuantizer::min': 0,
    'util::LinearQuantizer::max': 0,
    'util::LinearQuantizer::bins': 0,
    'util::LinearQuantizer::open': 0,
    'util::Random::seed': 0,
    'util::Random::v': 0,
    'util::Queue::values': 0,
    'util::Queue::capacity': 0,
    'util::CustomQuantizer::min': 0,
    'util::CustomQuantizer::max': 0,
    'util::CustomQuantizer::step_starts': 0,
    'util::CustomQuantizer::open': 0,
    'util::HistogramStats::min': 0,
    'util::HistogramStats::max': 0,
    'util::HistogramStats::whisker_low': 0,
    'util::HistogramStats::whisker_high': 0,
    'util::HistogramStats::percentile1': 0,
    'util::HistogramStats::percentile5': 0,
    'util::HistogramStats::percentile10': 0,
    'util::HistogramStats::percentile20': 0,
    'util::HistogramStats::percentile25': 0,
    'util::HistogramStats::percentile50': 0,
    'util::HistogramStats::percentile75': 0,
    'util::HistogramStats::percentile80': 0,
    'util::HistogramStats::percentile90': 0,
    'util::HistogramStats::percentile95': 0,
    'util::HistogramStats::percentile99': 0,
    'util::HistogramStats::sum': 0,
    'util::HistogramStats::avg': 0,
    'util::HistogramStats::std': 0,
    'util::HistogramStats::size': 0,
    'util::MultiQuantizer::quantizers': 0,
    'util::GaussianProfile::quantizer': 0,
    'util::GaussianProfile::precision': 0,
    'util::GaussianProfile::bins': 0,
    'util::GaussianProfile::value_min': 0,
    'util::GaussianProfile::nb_rejected': 0,
    'util::Gaussian::sum': 0,
    'util::Gaussian::sumsq': 0,
    'util::Gaussian::count': 0,
    'util::Gaussian::min': 0,
    'util::Gaussian::max': 0,
    'util::LogQuantizer::min': 0,
    'util::LogQuantizer::max': 0,
    'util::LogQuantizer::bins': 0,
    'util::LogQuantizer::open': 0,
    'util::GaussianProfileSlot::sum': 0,
    'util::GaussianProfileSlot::sumsq': 0,
    'util::GaussianProfileSlot::count': 0,
    'util::TimeWindow::values': 0,
    'util::TimeWindow::span': 0,
    'util::TimeWindow::sum': 0,
    'util::TimeWindow::sumsq': 0,
    'util::TimeWindow::field': 0,
    'util::SlidingWindow::values': 0,
    'util::SlidingWindow::span': 0,
    'util::SlidingWindow::sum': 0,
    'util::SlidingWindow::sumsq': 0,
    'util::SlidingWindow::field': 0,
    'privateApi::getComparisonViewData$args::source': 0,
    'privateApi::getComparisonViewData$args::recordId': 0,
    'privateApi::RecordLocation::panel': 0,
    'privateApi::linkAllFullMatched$args::source': 0,
    'privateApi::linkAllFullMatched$args::recordIds': 0,
    'privateApi::MatchedCandidateDetail::ref': 0,
    'privateApi::MatchedCandidateDetail::numberScore': 0,
    'privateApi::MatchedCandidateDetail::streetScore': 0,
    'privateApi::MatchedCandidateDetail::cityScore': 0,
    'privateApi::MatchedCandidateDetail::postcodeScore': 0,
    'privateApi::MatchedCandidateDetail::geoScore': 0,
    'privateApi::MatchedCandidateDetail::overallScore': 0,
    'privateApi::MatchedCandidateDetail::record': 0,
    'privateApi::promoteRecord$args::sourceRecord': 0,
    'privateApi::promoteRecord$args::streetIdx': 0,
    'privateApi::LinkParameters::addCityAlias': 0,
    'privateApi::LinkParameters::addStreetAlias': 0,
    'privateApi::LinkParameters::updateSimilarStreetMismatch': 0,
    'privateApi::ReconciliationReportView::date': 0,
    'privateApi::ReconciliationReportView::linked': 0,
    'privateApi::ReconciliationReportView::fullMatch': 0,
    'privateApi::ReconciliationReportView::multipleMatch': 0,
    'privateApi::ReconciliationReportView::partialMatch': 0,
    'privateApi::ReconciliationReportView::noMatch': 0,
    'privateApi::ReconciliationReportView::source': 0,
    'privateApi::linkRecords$args::sourceRecord': 0,
    'privateApi::linkRecords$args::candidateRecord': 0,
    'privateApi::linkRecords$args::params': 0,
    'privateApi::GlobalQualityEntry::timestamp': 0,
    'privateApi::GlobalQualityEntry::averageQuality': 0,
    'privateApi::SourceRef::ref': 0,
    'privateApi::SourceRef::name': 0,
    'privateApi::SourceRef::locked': 0,
    'privateApi::RecordTabResult::tab': 0,
    'privateApi::RecordTabResult::score': 0,
    'privateApi::ReconciliationReportMatchView::score': 0,
    'privateApi::ReconciliationReportMatchView::id': 0,
    'privateApi::QualityTrend::currentScore': 0,
    'privateApi::QualityTrend::previousScore': 0,
    'privateApi::QualityTrend::delta': 0,
    'privateApi::QualityTrend::linkedSourcesCount': 0,
    'privateApi::unlinkRecord$args::sourceRecord': 0,
    'privateApi::unlockSource$args::source': 0,
    'privateApi::mergePositionsToGolden$args::source': 0,
    'privateApi::mergePositionsToGolden$args::recordIds': 0,
    'privateApi::lockDatasource$args::source': 0,
    'privateApi::GlobalQualityHistory::current': 0,
    'privateApi::GlobalQualityHistory::history': 0,
    'privateApi::GlobalQualityHistory::goldenRecords': 0,
    'privateApi::getReconciliationReport$args::source': 0,
    'privateApi::getReconciliationReport$args::city': 0,
    'privateApi::getReconciliationReport$args::municipality': 0,
    'privateApi::ComparisonViewData::sourceRecord': 0,
    'privateApi::ComparisonViewData::candidates': 0,
    'privateApi::reconcilePOIs$args::source': 0,
    'privateApi::reconcilePOIs$args::poiIds': 0,
    'privateApi::reconcilePOIs$args::params': 0,
    'privateApi::getLinkedComparisonViewData$args::source': 0,
    'privateApi::getLinkedComparisonViewData$args::recordId': 0,
    'privateApi::GoldenRecordScore::uid': 0,
    'privateApi::GoldenRecordScore::number': 0,
    'privateApi::GoldenRecordScore::street': 0,
    'privateApi::GoldenRecordScore::city': 0,
    'privateApi::GoldenRecordScore::postcode': 0,
    'privateApi::GoldenRecordScore::linkedCount': 0,
    'privateApi::GoldenRecordScore::quality': 0,
    'privateApi::getRecordTab$args::source': 0,
    'privateApi::getRecordTab$args::recordId': 0,
    'privateApi::batchLinkByScore$args::source': 0,
    'privateApi::batchLinkByScore$args::globalScore': 0,
    'privateApi::batchLinkByScore$args::geoScore': 0,
    'privateApi::batchLinkByScore$args::cityScore': 0,
    'privateApi::batchLinkByScore$args::streetScore': 0,
    'privateApi::batchLinkByScore$args::numberScore': 0,
    'privateApi::batchLinkByScore$args::postcodeScore': 0,
    'privateApi::reconcile$args::source': 0,
    'privateApi::reconcile$args::params': 0,
    'api::GeoJSON::type': 0,
    'api::GeoJSON::features': 0,
    'api::searchAddress$args::addr': 0,
    'api::searchAddress$args::max': 0,
    'api::searchAddress$args::source': 0,
    'api::POIFeatures::coords': 0,
    'api::POIFeatures::number': 0,
    'api::getGoldenRecordRefByUid$args::uid': 0,
    'api::GeoJSONFeature::type': 0,
    'api::GeoJSONFeature::geometry': 0,
    'api::GeoJSONFeature::properties': 0,
    'api::getGlobalQualityHistory$args::from': 0,
    'api::getGlobalQualityHistory$args::to': 0,
    'api::getGoldenStreetsByLocalityId$args::localityId': 0,
    'api::GoldenWithLinkedRecords::golden': 0,
    'api::GoldenWithLinkedRecords::osm': 0,
    'api::GoldenWithLinkedRecords::caclr': 0,
    'api::GoldenWithLinkedRecords::bda': 0,
    'api::GoldenRecordDetails::golden': 0,
    'api::GoldenRecordDetails::associated': 0,
    'api::getGoldenLocalities$args::communeId': 0,
    'api::getGoldenRecordDetails$args::uid': 0,
    'api::getPoisByGeo$args::coords': 0,
    'api::GeoJSONGeometry::type': 0,
    'api::GeoJSONGeometry::coordinates': 0,
    'api::DataAttribution::notice': 0,
    'api::DataAttribution::sources': 0,
    'api::LinkedRecordDetails::score': 0,
    'api::LinkedRecordDetails::record': 0,
    'api::getGoldenNumbersByStreetId$args::streetId': 0,
    'api::getRecordByGeoportailID$args::id': 0,
    'api::GoldenIndex::id': 0,
    'api::GoldenIndex::name': 0,
    'api::getPoisInStreet$args::e': 0,
    'api::getGoldenWithLinkedRecords$args::addr': 0,
    'api::searchStreet$args::e': 0,
    'bdAddressLoader::BDAddressLine::rue': 0,
    'bdAddressLoader::BDAddressLine::numero': 0,
    'bdAddressLoader::BDAddressLine::localite': 0,
    'bdAddressLoader::BDAddressLine::code_postal': 0,
    'bdAddressLoader::BDAddressLine::id_caclr_rue': 0,
    'bdAddressLoader::BDAddressLine::id_caclr_bat': 0,
    'bdAddressLoader::BDAddressLine::lat_wgs84': 0,
    'bdAddressLoader::BDAddressLine::lon_wgs84': 0,
    'bdAddressLoader::BDAddressLine::coord_est_luref': 0,
    'bdAddressLoader::BDAddressLine::coord_nord_luref': 0,
    'bdAddressLoader::BDAddressLine::id_geoportail': 0,
    'bdAddressLoader::BDAddressLine::commune': 0,
    'bdAddressLoader::BDAddressLine::lau2': 0,
    'caclrLoader::CaclrResponseConstituency::code': 0,
    'caclrLoader::CaclrResponseConstituency::name': 0,
    'caclrLoader::CaclrResponseBuildingItem::id': 0,
    'caclrLoader::CaclrResponseBuildingItem::number': 0,
    'caclrLoader::CaclrResponseBuildingItem::isNumberUndefined': 0,
    'caclrLoader::CaclrResponseBuildingItem::postalCode': 0,
    'caclrLoader::CaclrResponseBuildingItem::multipleCode': 0,
    'caclrLoader::CaclrResponseBuildingItem::administrativeStatus': 0,
    'caclrLoader::CaclrResponseBuildingItem::validityStartDate': 0,
    'caclrLoader::CaclrResponseBuildingItem::validityEndDate': 0,
    'caclrLoader::CaclrResponseBuildingItem::lastUpdate': 0,
    'caclrLoader::CaclrResponseBuildingItem::streetId': 0,
    'caclrLoader::CaclrResponseBuildings::totalCount': 0,
    'caclrLoader::CaclrResponseBuildings::items': 0,
    'caclrLoader::CaclrAlias::name': 0,
    'caclrLoader::CaclrAlias::languageCode': 0,
    'caclrLoader::CaclrResponseCantons::totalCount': 0,
    'caclrLoader::CaclrResponseCantons::items': 0,
    'caclrLoader::CaclrResponseMunicipalityItem::id': 0,
    'caclrLoader::CaclrResponseMunicipalityItem::code': 0,
    'caclrLoader::CaclrResponseMunicipalityItem::coficomCode': 0,
    'caclrLoader::CaclrResponseMunicipalityItem::compoundCode': 0,
    'caclrLoader::CaclrResponseMunicipalityItem::name': 0,
    'caclrLoader::CaclrResponseMunicipalityItem::nameUpperCase': 0,
    'caclrLoader::CaclrResponseMunicipalityItem::nameLu': 0,
    'caclrLoader::CaclrResponseMunicipalityItem::status': 0,
    'caclrLoader::CaclrResponseMunicipalityItem::validityStartDate': 0,
    'caclrLoader::CaclrResponseMunicipalityItem::validityEndDate': 0,
    'caclrLoader::CaclrResponseMunicipalityItem::lastUpdate': 0,
    'caclrLoader::CaclrResponseMunicipalityItem::constituency': 0,
    'caclrLoader::CaclrResponseMunicipalityItem::eurostats': 0,
    'caclrLoader::CaclrResponseMunicipalityItem::cantonId': 0,
    'caclrLoader::CaclrResponseMunicipalities::totalCount': 0,
    'caclrLoader::CaclrResponseMunicipalities::items': 0,
    'caclrLoader::CaclrResponseCityItem::id': 0,
    'caclrLoader::CaclrResponseCityItem::code': 0,
    'caclrLoader::CaclrResponseCityItem::compoundCode': 0,
    'caclrLoader::CaclrResponseCityItem::name': 0,
    'caclrLoader::CaclrResponseCityItem::nameUpperCase': 0,
    'caclrLoader::CaclrResponseCityItem::aliases': 0,
    'caclrLoader::CaclrResponseCityItem::isTown': 0,
    'caclrLoader::CaclrResponseCityItem::validityStartDate': 0,
    'caclrLoader::CaclrResponseCityItem::validityEndDate': 0,
    'caclrLoader::CaclrResponseCityItem::lastUpdate': 0,
    'caclrLoader::CaclrResponseCityItem::municipalityId': 0,
    'caclrLoader::CaclrResponseCantonItem::id': 0,
    'caclrLoader::CaclrResponseCantonItem::code': 0,
    'caclrLoader::CaclrResponseCantonItem::name': 0,
    'caclrLoader::CaclrResponseCantonItem::lastUpdate': 0,
    'caclrLoader::CaclrResponseCantonItem::constituency': 0,
    'caclrLoader::CaclrResponseStreets::totalCount': 0,
    'caclrLoader::CaclrResponseStreets::items': 0,
    'caclrLoader::CaclrResponseStreetItem::id': 0,
    'caclrLoader::CaclrResponseStreetItem::name': 0,
    'caclrLoader::CaclrResponseStreetItem::nameUpperCase': 0,
    'caclrLoader::CaclrResponseStreetItem::keyWord': 0,
    'caclrLoader::CaclrResponseStreetItem::aliases': 0,
    'caclrLoader::CaclrResponseStreetItem::administrativeStatus': 0,
    'caclrLoader::CaclrResponseStreetItem::isPlace': 0,
    'caclrLoader::CaclrResponseStreetItem::validityStartDate': 0,
    'caclrLoader::CaclrResponseStreetItem::validityEndDate': 0,
    'caclrLoader::CaclrResponseStreetItem::lastUpdate': 0,
    'caclrLoader::CaclrResponseStreetItem::cityId': 0,
    'caclrLoader::CaclrResponseCities::totalCount': 0,
    'caclrLoader::CaclrResponseCities::items': 0,
    'osmLoader::OsmOverpassResponse::elements': 0,
    'backupExporter::BkOsmCityDTO::name': 0,
    'backupExporter::BkGoldenConstituencyDTO::code': 0,
    'backupExporter::BkGoldenConstituencyDTO::name': 0,
    'backupExporter::BkGoldenConstituencyDTO::nameAliases': 0,
    'backupExporter::BkCaclrBuildingDTO::id': 0,
    'backupExporter::BkCaclrBuildingDTO::number': 0,
    'backupExporter::BkCaclrBuildingDTO::isNumberUndefined': 0,
    'backupExporter::BkCaclrBuildingDTO::multipleCode': 0,
    'backupExporter::BkCaclrBuildingDTO::postalCode': 0,
    'backupExporter::BkCaclrBuildingDTO::position': 0,
    'backupExporter::BkCaclrBuildingDTO::administrativeStatus': 0,
    'backupExporter::BkCaclrBuildingDTO::validityStartDate': 0,
    'backupExporter::BkCaclrBuildingDTO::validityEndDate': 0,
    'backupExporter::BkCaclrBuildingDTO::lastUpdate': 0,
    'backupExporter::BkCaclrBuildingDTO::streetId': 0,
    'backupExporter::BkCaclrBuildingDTO::goldenUid': 0,
    'backupExporter::BkCaclrBuildingDTO::lastSeenAt': 0,
    'backupExporter::BkCaclrBuildingDTO::deprecated': 0,
    'backupExporter::BkCaclrMunicipalityDTO::id': 0,
    'backupExporter::BkCaclrMunicipalityDTO::code': 0,
    'backupExporter::BkCaclrMunicipalityDTO::coficomCode': 0,
    'backupExporter::BkCaclrMunicipalityDTO::compoundCode': 0,
    'backupExporter::BkCaclrMunicipalityDTO::name': 0,
    'backupExporter::BkCaclrMunicipalityDTO::nameUpperCase': 0,
    'backupExporter::BkCaclrMunicipalityDTO::nameLu': 0,
    'backupExporter::BkCaclrMunicipalityDTO::status': 0,
    'backupExporter::BkCaclrMunicipalityDTO::validityStartDate': 0,
    'backupExporter::BkCaclrMunicipalityDTO::validityEndDate': 0,
    'backupExporter::BkCaclrMunicipalityDTO::lastUpdate': 0,
    'backupExporter::BkCaclrMunicipalityDTO::eurostats': 0,
    'backupExporter::BkCaclrMunicipalityDTO::cantonId': 0,
    'backupExporter::BkCaclrCantonDTO::id': 0,
    'backupExporter::BkCaclrCantonDTO::code': 0,
    'backupExporter::BkCaclrCantonDTO::name': 0,
    'backupExporter::BkCaclrCantonDTO::lastUpdate': 0,
    'backupExporter::BkCaclrCantonDTO::constituencyCode': 0,
    'backupExporter::BkSourceDTO::name': 0,
    'backupExporter::BkSourceDTO::weight': 0,
    'backupExporter::BkSourceDTO::lastUpdate': 0,
    'backupExporter::BkCaclrStreetDTO::id': 0,
    'backupExporter::BkCaclrStreetDTO::name': 0,
    'backupExporter::BkCaclrStreetDTO::nameUpperCase': 0,
    'backupExporter::BkCaclrStreetDTO::keyWord': 0,
    'backupExporter::BkCaclrStreetDTO::aliases': 0,
    'backupExporter::BkCaclrStreetDTO::administrativeStatus': 0,
    'backupExporter::BkCaclrStreetDTO::isPlace': 0,
    'backupExporter::BkCaclrStreetDTO::validityStartDate': 0,
    'backupExporter::BkCaclrStreetDTO::validityEndDate': 0,
    'backupExporter::BkCaclrStreetDTO::lastUpdate': 0,
    'backupExporter::BkCaclrStreetDTO::cityId': 0,
    'backupExporter::BkGoldenCantonDTO::id': 0,
    'backupExporter::BkGoldenCantonDTO::name': 0,
    'backupExporter::BkGoldenCantonDTO::nameAliases': 0,
    'backupExporter::BkGoldenCantonDTO::constituencyId': 0,
    'backupExporter::BkGoldenCantonDTO::lastUpdate': 0,
    'backupExporter::BkManifestEntryDTO::file': 0,
    'backupExporter::BkManifestEntryDTO::records': 0,
    'backupExporter::BkBdaMunicipalityDTO::name': 0,
    'backupExporter::BkGoldenPoiDTO::uid': 0,
    'backupExporter::BkGoldenPoiDTO::number': 0,
    'backupExporter::BkGoldenPoiDTO::multipleCode': 0,
    'backupExporter::BkGoldenPoiDTO::postCode': 0,
    'backupExporter::BkGoldenPoiDTO::primaryLocation': 0,
    'backupExporter::BkGoldenPoiDTO::secondaryLocations': 0,
    'backupExporter::BkGoldenPoiDTO::streetId': 0,
    'backupExporter::BkGoldenPoiDTO::lastUpdate': 0,
    'backupExporter::BkGoldenPoiDTO::linkedRecords': 0,
    'backupExporter::BkGoldenPoiDTO::quality': 0,
    'backupExporter::BkGoldenQualityDTO::t': 0,
    'backupExporter::BkGoldenQualityDTO::score': 0,
    'backupExporter::BkGoldenQualityDTO::id': 0,
    'backupExporter::BkGoldenQualityDTO::sourceName': 0,
    'backupExporter::BkGoldenQualityDTO::eventType': 0,
    'backupExporter::BkTrafficDTO::endpoint': 0,
    'backupExporter::BkTrafficDTO::t': 0,
    'backupExporter::BkTrafficDTO::user': 0,
    'backupExporter::BkTrafficDTO::executionTimeUs': 0,
    'backupExporter::BkCaclrConstituencyDTO::code': 0,
    'backupExporter::BkCaclrConstituencyDTO::name': 0,
    'backupExporter::BkCaclrCityDTO::id': 0,
    'backupExporter::BkCaclrCityDTO::code': 0,
    'backupExporter::BkCaclrCityDTO::compoundCode': 0,
    'backupExporter::BkCaclrCityDTO::name': 0,
    'backupExporter::BkCaclrCityDTO::nameUpperCase': 0,
    'backupExporter::BkCaclrCityDTO::aliases': 0,
    'backupExporter::BkCaclrCityDTO::isTown': 0,
    'backupExporter::BkCaclrCityDTO::validityStartDate': 0,
    'backupExporter::BkCaclrCityDTO::validityEndDate': 0,
    'backupExporter::BkCaclrCityDTO::lastUpdate': 0,
    'backupExporter::BkCaclrCityDTO::municipalityId': 0,
    'backupExporter::BkGoldenStreetDTO::id': 0,
    'backupExporter::BkGoldenStreetDTO::name': 0,
    'backupExporter::BkGoldenStreetDTO::nameAliases': 0,
    'backupExporter::BkGoldenStreetDTO::cityId': 0,
    'backupExporter::BkGoldenStreetDTO::lastUpdate': 0,
    'backupExporter::BkBdaAddressDTO::idGeoportail': 0,
    'backupExporter::BkBdaAddressDTO::idCaclr': 0,
    'backupExporter::BkBdaAddressDTO::number': 0,
    'backupExporter::BkBdaAddressDTO::postcode': 0,
    'backupExporter::BkBdaAddressDTO::position': 0,
    'backupExporter::BkBdaAddressDTO::streetName': 0,
    'backupExporter::BkBdaAddressDTO::streetIdCaclr': 0,
    'backupExporter::BkBdaAddressDTO::cityName': 0,
    'backupExporter::BkBdaAddressDTO::municipalityName': 0,
    'backupExporter::BkBdaAddressDTO::goldenUid': 0,
    'backupExporter::BkBdaAddressDTO::lastSeenAt': 0,
    'backupExporter::BkBdaAddressDTO::deprecated': 0,
    'backupExporter::BkOsmStreetDTO::name': 0,
    'backupExporter::BkOsmStreetDTO::cityName': 0,
    'backupExporter::BkGoldenMunicipalityDTO::id': 0,
    'backupExporter::BkGoldenMunicipalityDTO::name': 0,
    'backupExporter::BkGoldenMunicipalityDTO::nameAliases': 0,
    'backupExporter::BkGoldenMunicipalityDTO::cantonId': 0,
    'backupExporter::BkGoldenMunicipalityDTO::lastUpdate': 0,
    'backupExporter::BkGoldenQualityHistoryDTO::t': 0,
    'backupExporter::BkGoldenQualityHistoryDTO::score': 0,
    'backupExporter::BkBdaCityDTO::name': 0,
    'backupExporter::BkBdaCityDTO::municipalityName': 0,
    'backupExporter::BkBdaStreetDTO::name': 0,
    'backupExporter::BkBdaStreetDTO::idCaclr': 0,
    'backupExporter::BkBdaStreetDTO::cityName': 0,
    'backupExporter::BkBdaStreetDTO::municipalityName': 0,
    'backupExporter::BkOsmPartialAddressDTO::id': 0,
    'backupExporter::BkOsmPartialAddressDTO::position': 0,
    'backupExporter::BkOsmPartialAddressDTO::city': 0,
    'backupExporter::BkOsmPartialAddressDTO::postcode': 0,
    'backupExporter::BkOsmPartialAddressDTO::street': 0,
    'backupExporter::BkOsmPartialAddressDTO::number': 0,
    'backupExporter::BkOsmPartialAddressDTO::refCaclr': 0,
    'backupExporter::BkOsmPartialAddressDTO::map': 0,
    'backupExporter::BkGoldenCityDTO::id': 0,
    'backupExporter::BkGoldenCityDTO::name': 0,
    'backupExporter::BkGoldenCityDTO::nameAliases': 0,
    'backupExporter::BkGoldenCityDTO::municipalityId': 0,
    'backupExporter::BkGoldenCityDTO::lastUpdate': 0,
    'backupExporter::BkGoldenLinkedRecordDTO::sourceName': 0,
    'backupExporter::BkGoldenLinkedRecordDTO::id': 0,
    'backupExporter::BkGoldenLinkedRecordDTO::score': 0,
    'backupExporter::BkGoldenLinkedRecordDTO::detailedScore': 0,
    'backupExporter::BkOsmAddressDTO::id': 0,
    'backupExporter::BkOsmAddressDTO::position': 0,
    'backupExporter::BkOsmAddressDTO::city': 0,
    'backupExporter::BkOsmAddressDTO::postcode': 0,
    'backupExporter::BkOsmAddressDTO::street': 0,
    'backupExporter::BkOsmAddressDTO::number': 0,
    'backupExporter::BkOsmAddressDTO::refCaclr': 0,
    'backupExporter::BkOsmAddressDTO::building': 0,
    'backupExporter::BkOsmAddressDTO::kind': 0,
    'backupExporter::BkOsmAddressDTO::streetRefName': 0,
    'backupExporter::BkOsmAddressDTO::streetRefCity': 0,
    'backupExporter::BkOsmAddressDTO::goldenUid': 0,
    'backupExporter::BkOsmAddressDTO::lastSeenAt': 0,
    'backupExporter::BkOsmAddressDTO::deprecated': 0,
    'trafic::Traffic::user': 0,
    'trafic::Traffic::executionTime': 0,
    'trafic::Endpoint::name': 0,
    'trafic::Endpoint::traffic': 0,
    'bdaddress::BDAddressFullRecord::id_geoportail': 0,
    'bdaddress::BDAddressFullRecord::id_caclr': 0,
    'bdaddress::BDAddressFullRecord::number': 0,
    'bdaddress::BDAddressFullRecord::postcode': 0,
    'bdaddress::BDAddressFullRecord::street': 0,
    'bdaddress::BDAddressFullRecord::locality': 0,
    'bdaddress::BDAddressFullRecord::commune': 0,
    'bdaddress::BDAddressFullRecord::primaryLocation': 0,
    'bdaddress::BDAddressFullRecord::sourceName': 0,
    'bdaddress::BDAddressFullRecord::goldenRef': 0,
    'bdaddress::BDAddressFullRecord::deprecated': 0,
    'bdaddress::BDAddressFullRecord::lastSeenAt': 0,
    'bdaddress::BDAddressSource::reconciliationReport': 0,
    'bdaddress::BDAddressSource::isReconciling': 0,
    'bdaddress::BDAddressSource::lastUpdate': 0,
    'bdaddress::BDACity::name': 0,
    'bdaddress::BDACity::municipality': 0,
    'bdaddress::BDACity::streets_by_name': 0,
    'bdaddress::BDAddress::number': 0,
    'bdaddress::BDAddress::postcode': 0,
    'bdaddress::BDAddress::position': 0,
    'bdaddress::BDAddress::id_caclr': 0,
    'bdaddress::BDAddress::id_geoportail': 0,
    'bdaddress::BDAddress::municipatlity': 0,
    'bdaddress::BDAddress::city': 0,
    'bdaddress::BDAddress::street': 0,
    'bdaddress::BDAddress::goldenRef': 0,
    'bdaddress::BDAddress::lastSeenAt': 0,
    'bdaddress::BDAddress::deprecated': 0,
    'bdaddress::BDAMunicipality::name': 0,
    'bdaddress::BDAMunicipality::cities_by_name': 0,
    'bdaddress::BDAStreet::name': 0,
    'bdaddress::BDAStreet::id_caclr': 0,
    'bdaddress::BDAStreet::city': 0,
    'bdaddress::BDAStreet::addresses_by_id': 0,
    'bdaddress::BDAStreet::addresses_by_number': 0,
    'caclr::CaclrSource::reconciliationReport': 0,
    'caclr::CaclrSource::isReconciling': 0,
    'caclr::CaclrSource::lastUpdate': 0,
    'caclr::CaclrStreet::id': 0,
    'caclr::CaclrStreet::name': 0,
    'caclr::CaclrStreet::nameUpperCase': 0,
    'caclr::CaclrStreet::keyWord': 0,
    'caclr::CaclrStreet::aliases': 0,
    'caclr::CaclrStreet::administrativeStatus': 0,
    'caclr::CaclrStreet::isPlace': 0,
    'caclr::CaclrStreet::validityStartDate': 0,
    'caclr::CaclrStreet::validityEndDate': 0,
    'caclr::CaclrStreet::lastUpdate': 0,
    'caclr::CaclrStreet::city': 0,
    'caclr::CaclrStreet::buildings_by_id': 0,
    'caclr::CaclrStreet::buildings_by_number': 0,
    'caclr::CaclrStreet::goldenStreet': 0,
    'caclr::CaclrConstituency::code': 0,
    'caclr::CaclrConstituency::name': 0,
    'caclr::CaclrConstituency::cantons_by_id': 0,
    'caclr::CaclrConstituency::goldenConstituency': 0,
    'caclr::CaclrCanton::id': 0,
    'caclr::CaclrCanton::code': 0,
    'caclr::CaclrCanton::name': 0,
    'caclr::CaclrCanton::lastUpdate': 0,
    'caclr::CaclrCanton::constituency': 0,
    'caclr::CaclrCanton::municipalities_by_id': 0,
    'caclr::CaclrCanton::goldenCanton': 0,
    'caclr::CaclrToken::access_token': 0,
    'caclr::CaclrToken::token_type': 0,
    'caclr::CaclrToken::expires_in': 0,
    'caclr::CaclrToken::scope': 0,
    'caclr::CaclrToken::iss': 0,
    'caclr::CaclrToken::expiry_time': 0,
    'caclr::CaclrMunicipality::id': 0,
    'caclr::CaclrMunicipality::code': 0,
    'caclr::CaclrMunicipality::coficomCode': 0,
    'caclr::CaclrMunicipality::compoundCode': 0,
    'caclr::CaclrMunicipality::name': 0,
    'caclr::CaclrMunicipality::nameUpperCase': 0,
    'caclr::CaclrMunicipality::nameLu': 0,
    'caclr::CaclrMunicipality::status': 0,
    'caclr::CaclrMunicipality::validityStartDate': 0,
    'caclr::CaclrMunicipality::validityEndDate': 0,
    'caclr::CaclrMunicipality::lastUpdate': 0,
    'caclr::CaclrMunicipality::eurostats': 0,
    'caclr::CaclrMunicipality::canton': 0,
    'caclr::CaclrMunicipality::cities_by_id': 0,
    'caclr::CaclrMunicipality::cities_by_name': 0,
    'caclr::CaclrMunicipality::goldenMunicipality': 0,
    'caclr::CaclrTokenResponse::access_token': 0,
    'caclr::CaclrTokenResponse::token_type': 0,
    'caclr::CaclrTokenResponse::expires_in': 0,
    'caclr::CaclrTokenResponse::scope': 0,
    'caclr::CaclrTokenResponse::iss': 0,
    'caclr::CaclrCity::id': 0,
    'caclr::CaclrCity::code': 0,
    'caclr::CaclrCity::compoundCode': 0,
    'caclr::CaclrCity::name': 0,
    'caclr::CaclrCity::nameUpperCase': 0,
    'caclr::CaclrCity::aliases': 0,
    'caclr::CaclrCity::isTown': 0,
    'caclr::CaclrCity::validityStartDate': 0,
    'caclr::CaclrCity::validityEndDate': 0,
    'caclr::CaclrCity::lastUpdate': 0,
    'caclr::CaclrCity::municipality': 0,
    'caclr::CaclrCity::streets_by_id': 0,
    'caclr::CaclrCity::streets_by_name': 0,
    'caclr::CaclrCity::goldenCity': 0,
    'caclr::CaclrPOIFullRecord::id': 0,
    'caclr::CaclrPOIFullRecord::number': 0,
    'caclr::CaclrPOIFullRecord::multipleCode': 0,
    'caclr::CaclrPOIFullRecord::postalCode': 0,
    'caclr::CaclrPOIFullRecord::street': 0,
    'caclr::CaclrPOIFullRecord::streetAliases': 0,
    'caclr::CaclrPOIFullRecord::locality': 0,
    'caclr::CaclrPOIFullRecord::localityAliases': 0,
    'caclr::CaclrPOIFullRecord::commune': 0,
    'caclr::CaclrPOIFullRecord::canton': 0,
    'caclr::CaclrPOIFullRecord::constituency': 0,
    'caclr::CaclrPOIFullRecord::primaryLocation': 0,
    'caclr::CaclrPOIFullRecord::administrativeStatus': 0,
    'caclr::CaclrPOIFullRecord::validityStartDate': 0,
    'caclr::CaclrPOIFullRecord::validityEndDate': 0,
    'caclr::CaclrPOIFullRecord::lastUpdate': 0,
    'caclr::CaclrPOIFullRecord::sourceName': 0,
    'caclr::CaclrPOIFullRecord::goldenRef': 0,
    'caclr::CaclrPOIFullRecord::deprecated': 0,
    'caclr::CaclrPOIFullRecord::lastSeenAt': 0,
    'caclr::CaclrEurostatsIds::nuts3': 0,
    'caclr::CaclrEurostatsIds::lau1': 0,
    'caclr::CaclrEurostatsIds::lau2': 0,
    'caclr::CaclrBuilding::id': 0,
    'caclr::CaclrBuilding::number': 0,
    'caclr::CaclrBuilding::isNumberUndefined': 0,
    'caclr::CaclrBuilding::postalCode': 0,
    'caclr::CaclrBuilding::multipleCode': 0,
    'caclr::CaclrBuilding::position': 0,
    'caclr::CaclrBuilding::administrativeStatus': 0,
    'caclr::CaclrBuilding::validityStartDate': 0,
    'caclr::CaclrBuilding::validityEndDate': 0,
    'caclr::CaclrBuilding::lastUpdate': 0,
    'caclr::CaclrBuilding::street': 0,
    'caclr::CaclrBuilding::goldenRef': 0,
    'caclr::CaclrBuilding::lastSeenAt': 0,
    'caclr::CaclrBuilding::deprecated': 0,
    'mengplaz::POIFullRecordRef::ref': 0,
    'mengplaz::POIFullRecordRef::id': 0,
    'mengplaz::POIFullRecordRef::record': 0,
    'mengplaz::POIFullRecordRef::matchScore': 0,
    'mengplaz::LinkedRecordEntry::record': 0,
    'mengplaz::LinkedRecordEntry::score': 0,
    'mengplaz::LinkedRecordEntry::detailedScore': 0,
    'mengplaz::ReconciliationCandidate::candidateRecord': 0,
    'mengplaz::ReconciliationCandidate::score': 0,
    'mengplaz::ReconciliationCandidate::mismatch': 0,
    'mengplaz::ReconciliationCandidate::detailedScore': 0,
    'mengplaz::ReconciliationReport::date': 0,
    'mengplaz::ReconciliationReport::linked': 0,
    'mengplaz::ReconciliationReport::unlinked': 0,
    'mengplaz::StreetRecord::street': 0,
    'mengplaz::StreetRecord::streetAliases': 0,
    'mengplaz::StreetRecord::postcode': 0,
    'mengplaz::StreetRecord::city': 0,
    'mengplaz::StreetRecord::cityAliases': 0,
    'mengplaz::StreetRecord::sourceName': 0,
    'mengplaz::ScoringWeights::cityWeight': 0,
    'mengplaz::ScoringWeights::streetWeight': 0,
    'mengplaz::ScoringWeights::postcodeWeight': 0,
    'mengplaz::ScoringWeights::numberWeight': 0,
    'mengplaz::ScoringWeights::geoWeight': 0,
    'mengplaz::GeoParameters::minDistance': 0,
    'mengplaz::GeoParameters::maxDistance': 0,
    'mengplaz::SearchParameters::citySimilarityThreshold': 0,
    'mengplaz::SearchParameters::streetSimilarityThreshold': 0,
    'mengplaz::SearchParameters::postcodeSimilarityThreshold': 0,
    'mengplaz::SearchParameters::coordinatesSimilarityThreshold': 0,
    'mengplaz::SearchParameters::maxCandidatesPerItem': 0,
    'mengplaz::SearchParameters::postcodeMaxDistance': 0,
    'mengplaz::SearchParameters::weights': 0,
    'mengplaz::SearchParameters::geoParams': 0,
    'mengplaz::SearchParameters::deepSearch': 0,
    'mengplaz::Alias::value': 0,
    'mengplaz::Alias::id': 0,
    'mengplaz::SearchRequest::items': 0,
    'mengplaz::SearchRequest::params': 0,
    'mengplaz::SearchItem::number': 0,
    'mengplaz::SearchItem::street': 0,
    'mengplaz::SearchItem::streetAliases': 0,
    'mengplaz::SearchItem::multipleCode': 0,
    'mengplaz::SearchItem::postcode': 0,
    'mengplaz::SearchItem::city': 0,
    'mengplaz::SearchItem::cityAliases': 0,
    'mengplaz::SearchItem::coordinates': 0,
    'mengplaz::SearchResult::sourceRecord': 0,
    'mengplaz::SearchResult::candidates': 0,
    'mengplaz::StreetRecordRef::ref': 0,
    'mengplaz::StreetRecordRef::record': 0,
    'mengplaz::CandidateMatch::cityScore': 0,
    'mengplaz::CandidateMatch::streetScore': 0,
    'mengplaz::CandidateMatch::numberScore': 0,
    'mengplaz::CandidateMatch::postcodeScore': 0,
    'mengplaz::CandidateMatch::searchGeoScore': 0,
    'mengplaz::CandidateMatch::realGeoScore': 0,
    'mengplaz::CandidateMatch::searchOverallScore': 0,
    'mengplaz::CandidateMatch::realOverallScore': 0,
    'mengplaz::CandidateMatch::elem': 0,
    'mengplaz::POIRecord::uid': 0,
    'mengplaz::POIRecord::number': 0,
    'mengplaz::POIRecord::postcode': 0,
    'mengplaz::POIRecord::street': 0,
    'mengplaz::POIRecord::streetAliases': 0,
    'mengplaz::POIRecord::locality': 0,
    'mengplaz::POIRecord::localityAliases': 0,
    'mengplaz::POIRecord::commune': 0,
    'mengplaz::POIRecord::primaryLocation': 0,
    'mengplaz::POIRecord::secondaryLocations': 0,
    'mengplaz::POIRecord::sourceName': 0,
    'mengplaz::POIRecord::goldenRef': 0,
    'mengplaz::POIRecord::quality': 0,
    'mengplaz::ReconciliationCandidateScore::cityScore': 0,
    'mengplaz::ReconciliationCandidateScore::streetScore': 0,
    'mengplaz::ReconciliationCandidateScore::numberScore': 0,
    'mengplaz::ReconciliationCandidateScore::postcodeScore': 0,
    'mengplaz::ReconciliationCandidateScore::geoScore': 0,
    'mengplaz::ReconciliationCandidateScore::overallScore': 0,
    'mengplaz::Match::score': 0,
    'mengplaz::Match::elem': 0,
    'mengplaz::QualityEvent::score': 0,
    'mengplaz::QualityEvent::sourceRecord': 0,
    'mengplaz::QualityEvent::eventType': 0,
    'mengplaz::POIRecordRef::ref': 0,
    'mengplaz::POIRecordRef::record': 0,
    'osm::OsmParsedAddress::id': 0,
    'osm::OsmParsedAddress::position': 0,
    'osm::OsmParsedAddress::city': 0,
    'osm::OsmParsedAddress::postcode': 0,
    'osm::OsmParsedAddress::street': 0,
    'osm::OsmParsedAddress::number': 0,
    'osm::OsmParsedAddress::ref_caclr': 0,
    'osm::OsmParsedAddress::building': 0,
    'osm::OsmParsedAddress::kind': 0,
    'osm::OsmPartialAddress::id': 0,
    'osm::OsmPartialAddress::position': 0,
    'osm::OsmPartialAddress::city': 0,
    'osm::OsmPartialAddress::postcode': 0,
    'osm::OsmPartialAddress::street': 0,
    'osm::OsmPartialAddress::number': 0,
    'osm::OsmPartialAddress::ref_caclr': 0,
    'osm::OsmPartialAddress::map': 0,
    'osm::OsmStreet::name': 0,
    'osm::OsmStreet::city': 0,
    'osm::OsmStreet::addresses_by_id': 0,
    'osm::OsmStreet::addresses_by_number': 0,
    'osm::OsmAddress::id': 0,
    'osm::OsmAddress::position': 0,
    'osm::OsmAddress::city': 0,
    'osm::OsmAddress::postcode': 0,
    'osm::OsmAddress::street': 0,
    'osm::OsmAddress::number': 0,
    'osm::OsmAddress::ref_caclr': 0,
    'osm::OsmAddress::building': 0,
    'osm::OsmAddress::kind': 0,
    'osm::OsmAddress::streetRef': 0,
    'osm::OsmAddress::lastSeenAt': 0,
    'osm::OsmAddress::deprecated': 0,
    'osm::OsmAddress::goldenRef': 0,
    'osm::OsmCity::name': 0,
    'osm::OsmCity::streets_by_name': 0,
    'osm::OSMFullRecord::id': 0,
    'osm::OSMFullRecord::number': 0,
    'osm::OSMFullRecord::postcode': 0,
    'osm::OSMFullRecord::street': 0,
    'osm::OSMFullRecord::locality': 0,
    'osm::OSMFullRecord::primaryLocation': 0,
    'osm::OSMFullRecord::sourceName': 0,
    'osm::OSMFullRecord::goldenRef': 0,
    'osm::OSMFullRecord::deprecated': 0,
    'osm::OSMFullRecord::lastSeenAt': 0,
    'osm::OSMFullRecord::id_caclr': 0,
    'osm::OSMFullRecord::kind': 0,
    'osm::OsmSource::reconciliationReport': 0,
    'osm::OsmSource::isReconciling': 0,
    'osm::OsmSource::lastUpdate': 0,
    'golden::GoldenSource::reconciliationReport': 0,
    'golden::GoldenSource::isReconciling': 0,
    'golden::GoldenSource::lastUpdate': 0,
    'golden::GoldenSource::qualityHistory': 0,
    'golden::GoldenMunicipality::id': 0,
    'golden::GoldenMunicipality::name': 0,
    'golden::GoldenMunicipality::nameAliases': 0,
    'golden::GoldenMunicipality::lastUpdate': 0,
    'golden::GoldenMunicipality::canton': 0,
    'golden::GoldenMunicipality::cities_by_id': 0,
    'golden::GoldenMunicipality::cities_by_name': 0,
    'golden::GoldenMunicipality::caclrMunicipality': 0,
    'golden::GoldenCity::id': 0,
    'golden::GoldenCity::name': 0,
    'golden::GoldenCity::nameAliases': 0,
    'golden::GoldenCity::lastUpdate': 0,
    'golden::GoldenCity::municipality': 0,
    'golden::GoldenCity::streets_by_id': 0,
    'golden::GoldenCity::streets_by_name': 0,
    'golden::GoldenCity::caclrCity': 0,
    'golden::GoldenPointOfInterest::uid': 0,
    'golden::GoldenPointOfInterest::number': 0,
    'golden::GoldenPointOfInterest::multipleCode': 0,
    'golden::GoldenPointOfInterest::postCode': 0,
    'golden::GoldenPointOfInterest::primaryLocation': 0,
    'golden::GoldenPointOfInterest::secondaryLocations': 0,
    'golden::GoldenPointOfInterest::lastUpdate': 0,
    'golden::GoldenPointOfInterest::street': 0,
    'golden::GoldenPointOfInterest::linkedRecords': 0,
    'golden::GoldenPointOfInterest::quality': 0,
    'golden::GoldenCanton::id': 0,
    'golden::GoldenCanton::name': 0,
    'golden::GoldenCanton::nameAliases': 0,
    'golden::GoldenCanton::lastUpdate': 0,
    'golden::GoldenCanton::constituency': 0,
    'golden::GoldenCanton::municipalities_by_id': 0,
    'golden::GoldenCanton::caclrCanton': 0,
    'golden::GoldenConstituency::code': 0,
    'golden::GoldenConstituency::name': 0,
    'golden::GoldenConstituency::nameAliases': 0,
    'golden::GoldenConstituency::cantons_by_id': 0,
    'golden::GoldenConstituency::caclrConstituency': 0,
    'golden::GoldenStreet::id': 0,
    'golden::GoldenStreet::name': 0,
    'golden::GoldenStreet::nameAliases': 0,
    'golden::GoldenStreet::lastUpdate': 0,
    'golden::GoldenStreet::city': 0,
    'golden::GoldenStreet::pois_by_id': 0,
    'golden::GoldenStreet::pois_by_number': 0,
    'golden::GoldenStreet::caclrStreet': 0,
    'searchService::AddressSearchInput::input': 0,
    'searchService::AddressSearchInput::source': 0,
    'searchService::AddressSearchInput::results': 0,
    'searchService::ScoredPoi::poi': 0,
    'searchService::ScoredPoi::distance': 0,
    'searchService::ScoredCity::city': 0,
    'searchService::ScoredCity::distance': 0,
    'searchService::ScoredStreet::street': 0,
    'searchService::ScoredStreet::distance': 0,
    'traffic_service::Traffic_Service::start': 0,
    'traffic_service::Traffic_Service::endPoint': 0,
    'utils::SplitAlphaNumericalString::alpha': 0,
    'utils::SplitAlphaNumericalString::numerical': 0,
  }

  interface $FunctionsMap {
    'core::nodeGeo<core::node<caclr::CaclrBuilding>>::search': 0,
    'core::node::resolve_all': 0,
    'core::nodeTime::info': 0,
    'core::nodeTime::sample': 0,
    'core::nodeGeo<core::node<osm::OsmAddress>>::search': 0,
    'core::nodeGeo<core::node<golden::GoldenPointOfInterest>>::search': 0,
    'core::nodeGeo<core::node<osm::OsmPartialAddress>>::search': 0,
    'core::nodeList::info': 0,
    'core::nodeList::sample': 0,
    'core::nodeGeo<core::node<bdaddress::BDAddress>>::search': 0,
    'core::nodeIndex::search_closest': 0,
    'core::nodeIndex::info': 0,
    'core::nodeIndex::sample': 0,
    'core::nodeGeo::search': 0,
    'core::nodeGeo::info': 0,
    'core::nodeGeo::sample': 0,
    'core::Table::applyMappings': 0,
    'runtime::mcp_initialize': 0,
    'runtime::mcp_tools_list': 0,
    'runtime::mcp_tools_call': 0,
    'runtime::mcp_tasks_get': 0,
    'runtime::mcp_tasks_result': 0,
    'runtime::mcp_tasks_list': 0,
    'runtime::mcp_tasks_cancel': 0,
    'runtime::Permission::all': 0,
    'runtime::Task::tasks': 0,
    'runtime::Task::live': 0,
    'runtime::Task::is_running': 0,
    'runtime::Task::cancel': 0,
    'runtime::Task::history': 0,
    'runtime::Task::running': 0,
    'runtime::Scheduler::deactivate': 0,
    'runtime::Scheduler::activate': 0,
    'runtime::Scheduler::find': 0,
    'runtime::Scheduler::list': 0,
    'runtime::Scheduler::add': 0,
    'runtime::OpenApi::v3': 0,
    'runtime::Runtime::backup_full': 0,
    'runtime::Runtime::root': 0,
    'runtime::Runtime::abi': 0,
    'runtime::Runtime::usage': 0,
    'runtime::Runtime::info': 0,
    'runtime::Identity::set_role': 0,
    'runtime::Identity::set_grants': 0,
    'runtime::Identity::set_password': 0,
    'runtime::Identity::permissions': 0,
    'runtime::Identity::logout': 0,
    'runtime::Identity::login': 0,
    'runtime::Identity::token': 0,
    'runtime::Identity::create': 0,
    'runtime::Identity::all': 0,
    'runtime::Identity::get_by_name': 0,
    'runtime::Identity::get_by_id': 0,
    'runtime::Identity::current': 0,
    'runtime::Identity::current_id': 0,
    'runtime::Role::all': 0,
    'runtime::Debug::resume': 0,
    'runtime::Debug::get': 0,
    'runtime::Debug::all': 0,
    'runtime::System::get_all_envs': 0,
    'io::Csv::sample': 0,
    'io::Csv::analyze': 0,
    'io::Csv::generate': 0,
    'project::loadOsm': 0,
    'project::loadBda': 0,
    'project::loadCaclr': 0,
    'privateApi::promoteRecord': 0,
    'privateApi::linkRecords': 0,
    'privateApi::unlinkRecord': 0,
    'privateApi::linkAllFullMatched': 0,
    'privateApi::batchLinkByScore': 0,
    'privateApi::mergePositionsToGolden': 0,
    'privateApi::lockDatasource': 0,
    'privateApi::reconcile': 0,
    'privateApi::reconcilePOIs': 0,
    'privateApi::getReconciliationReport': 0,
    'privateApi::getRecordTab': 0,
    'privateApi::getSources': 0,
    'privateApi::getComparisonViewData': 0,
    'privateApi::getLinkedComparisonViewData': 0,
    'privateApi::computeGlobalQuality': 0,
    'privateApi::unlockSource': 0,
    'api::getPoisInStreet': 0,
    'api::searchStreet': 0,
    'api::getPois': 0,
    'api::getPoisByGeo': 0,
    'api::getGoldenRecordDetails': 0,
    'api::getGoldenRecordRefByUid': 0,
    'api::getRecordByGeoportailID': 0,
    'api::getGoldenLocalities': 0,
    'api::getGoldenCommunes': 0,
    'api::getGoldenStreetsByLocalityId': 0,
    'api::getGoldenNumbersByStreetId': 0,
    'api::getGoldenRecords': 0,
    'api::getGoldenRecordsGeoJson': 0,
    'api::attribution': 0,
    'api::openapi': 0,
    'api::getGlobalQualityHistory': 0,
    'api::appInfo': 0,
    'api::searchAddress': 0,
    'api::getGoldenWithLinkedRecords': 0,
    'api::publicStats': 0,
    'backupExporter::backupGraph': 0,
    'backupImporter::restoreGraph': 0,
    'golden::recomputeGoldenGeoScore': 0,
    'updateService::updateCACLR': 0,
    'updateService::updateBDA': 0,
    'updateService::updateOSM': 0,
  }

  export import Chars = gc.core.Chars;
  export import Error = gc.core.Error;
  export import null_ = gc.core.null_;
  export import node = gc.core.node;
  export import TensorType = gc.core.TensorType;
  export import nodeTime = gc.core.nodeTime;
  export import Tensor = gc.core.Tensor;
  export import FloatPrecision = gc.core.FloatPrecision;
  export import GeoBox = gc.core.GeoBox;
  export import CalendarUnit = gc.core.CalendarUnit;
  export import TimeZone = gc.core.TimeZone;
  export import DurationUnit = gc.core.DurationUnit;
  export import Map = gc.core.Map;
  export import MathConstants = gc.core.MathConstants;
  export import float = gc.core.float;
  export import String = gc.core.String;
  export import field = gc.core.field;
  export import Buffer = gc.core.Buffer;
  export import TableColumnMapping = gc.core.TableColumnMapping;
  export import type = gc.core.type;
  export import GeoCircle = gc.core.GeoCircle;
  export import char = gc.core.char;
  export import ErrorFrame = gc.core.ErrorFrame;
  export import Array = gc.core.Array;
  export import Date = gc.core.Date;
  export import TensorDistance = gc.core.TensorDistance;
  export import geo = gc.core.geo;
  export import ErrorCode = gc.core.ErrorCode;
  export import nodeTimeCursor = gc.core.nodeTimeCursor;
  export import SortOrder = gc.core.SortOrder;
  export import GeoPoly = gc.core.GeoPoly;
  export import SamplingMode = gc.core.SamplingMode;
  export import nodeList = gc.core.nodeList;
  export import int = gc.core.int;
  export import function_ = gc.core.function_;
  export import duration = gc.core.duration;
  export import nodeIndex = gc.core.nodeIndex;
  export import NodeInfo = gc.core.NodeInfo;
  export import VectorIndex = gc.core.VectorIndex;
  export import nodeGeo = gc.core.nodeGeo;
  export import bool = gc.core.bool;
  export import Tuple = gc.core.Tuple;
  export import Table = gc.core.Table;
  export import time = gc.core.time;
  export import IdentityGrantType = gc.runtime.IdentityGrantType;
  export import Month = gc.runtime.Month;
  export import LogDataUsage = gc.runtime.LogDataUsage;
  export import McpAnnotations = gc.runtime.McpAnnotations;
  export import McpClientCapabilities = gc.runtime.McpClientCapabilities;
  export import Task = gc.runtime.Task;
  export import McpTaskStatus = gc.runtime.McpTaskStatus;
  export import RuntimeInfo = gc.runtime.RuntimeInfo;
  export import TaskStatus = gc.runtime.TaskStatus;
  export import Scheduler = gc.runtime.Scheduler;
  export import McpServerResourcesCapabilities = gc.runtime.McpServerResourcesCapabilities;
  export import McpTasksCancelParams = gc.runtime.McpTasksCancelParams;
  export import OpenApi = gc.runtime.OpenApi;
  export import ChildProcessResult = gc.runtime.ChildProcessResult;
  export import McpToolsListResult = gc.runtime.McpToolsListResult;
  export import Periodicity = gc.runtime.Periodicity;
  export import McpToolsListParams = gc.runtime.McpToolsListParams;
  export import DayOfWeek = gc.runtime.DayOfWeek;
  export import McpServerToolsCapabilities = gc.runtime.McpServerToolsCapabilities;
  export import McpTaskSupport = gc.runtime.McpTaskSupport;
  export import McpImplementation = gc.runtime.McpImplementation;
  export import Job = gc.runtime.Job;
  export import McpPriority = gc.runtime.McpPriority;
  export import WeeklyPeriodicity = gc.runtime.WeeklyPeriodicity;
  export import LogLevel = gc.runtime.LogLevel;
  export import McpRole = gc.runtime.McpRole;
  export import McpTextContent = gc.runtime.McpTextContent;
  export import McpTasksListParams = gc.runtime.McpTasksListParams;
  export import McpTaskCreateParams = gc.runtime.McpTaskCreateParams;
  export import McpToolsCallResult = gc.runtime.McpToolsCallResult;
  export import MergeStrategy = gc.runtime.MergeStrategy;
  export import MonthlyPeriodicity = gc.runtime.MonthlyPeriodicity;
  export import McpResult = gc.runtime.McpResult;
  export import McpRequestParams = gc.runtime.McpRequestParams;
  export import McpClientRoots = gc.runtime.McpClientRoots;
  export import McpTask = gc.runtime.McpTask;
  export import McpServerTasksCapabilities = gc.runtime.McpServerTasksCapabilities;
  export import McpImageContent = gc.runtime.McpImageContent;
  export import McpContentType = gc.runtime.McpContentType;
  export import McpInitializeParams = gc.runtime.McpInitializeParams;
  export import McpInitializeResult = gc.runtime.McpInitializeResult;
  export import Runtime = gc.runtime.Runtime;
  export import Identity = gc.runtime.Identity;
  export import FixedPeriodicity = gc.runtime.FixedPeriodicity;
  export import License = gc.runtime.License;
  export import YearlyPeriodicity = gc.runtime.YearlyPeriodicity;
  export import McpServerPromptsCapabilities = gc.runtime.McpServerPromptsCapabilities;
  export import Log = gc.runtime.Log;
  export import DateTuple = gc.runtime.DateTuple;
  export import McpAudioContent = gc.runtime.McpAudioContent;
  export import McpServerCapabilities = gc.runtime.McpServerCapabilities;
  export import ChildProcess = gc.runtime.ChildProcess;
  export import McpToolsCallParams = gc.runtime.McpToolsCallParams;
  export import McpToolExecution = gc.runtime.McpToolExecution;
  export import IdentityGrant = gc.runtime.IdentityGrant;
  export import McpTasksGetParams = gc.runtime.McpTasksGetParams;
  export import McpTool = gc.runtime.McpTool;
  export import McpBaseMetadata = gc.runtime.McpBaseMetadata;
  export import DailyPeriodicity = gc.runtime.DailyPeriodicity;
  export import RuntimeUsage = gc.runtime.RuntimeUsage;
  export import PeriodicTask = gc.runtime.PeriodicTask;
  export import McpTasksListResult = gc.runtime.McpTasksListResult;
  export import McpContentBlock = gc.runtime.McpContentBlock;
  export import McpTasksCreateResult = gc.runtime.McpTasksCreateResult;
  export import McpTasksResultParams = gc.runtime.McpTasksResultParams;
  export import System = gc.runtime.System;
  export import PeriodicOptions = gc.runtime.PeriodicOptions;
  export import McpClientTasksCapabilities = gc.runtime.McpClientTasksCapabilities;
  export import LicenseType = gc.runtime.LicenseType;
  export import McpResourceContent = gc.runtime.McpResourceContent;
  export import SmtpAuth = gc.io.SmtpAuth;
  export import GcbReader = gc.io.GcbReader;
  export import TextReader = gc.io.TextReader;
  export import Smtp = gc.io.Smtp;
  export import Reader = gc.io.Reader;
  export import S3Object = gc.io.S3Object;
  export import S3BasicCredentials = gc.io.S3BasicCredentials;
  export import TextWriter = gc.io.TextWriter;
  export import JsonReader = gc.io.JsonReader;
  export import SmtpMode = gc.io.SmtpMode;
  export import CsvSharding = gc.io.CsvSharding;
  export import CsvAnalysisConfig = gc.io.CsvAnalysisConfig;
  export import Writer = gc.io.Writer;
  export import Email = gc.io.Email;
  export import S3Bucket = gc.io.S3Bucket;
  export import CsvColumnStatistics = gc.io.CsvColumnStatistics;
  export import HttpRequest = gc.io.HttpRequest;
  export import GcbWriter = gc.io.GcbWriter;
  export import XmlReader = gc.io.XmlReader;
  export import FileWalker = gc.io.FileWalker;
  export import CsvStatistics = gc.io.CsvStatistics;
  export import Csv = gc.io.Csv;
  export import CsvReader = gc.io.CsvReader;
  export import Json = gc.io.Json;
  export import CsvWriter = gc.io.CsvWriter;
  export import HttpResponse = gc.io.HttpResponse;
  export import File = gc.io.File;
  export import Http = gc.io.Http;
  export import CsvFormat = gc.io.CsvFormat;
  export import S3 = gc.io.S3;
  export import HttpMethod = gc.io.HttpMethod;
  export import Url = gc.io.Url;
  export import JsonWriter = gc.io.JsonWriter;
  export import BinReader = gc.io.BinReader;
  export import Quantizer = gc.util.Quantizer;
  export import Histogram = gc.util.Histogram;
  export import Stack = gc.util.Stack;
  export import ProgressTracker = gc.util.ProgressTracker;
  export import HistogramBin = gc.util.HistogramBin;
  export import QuantizerSlotBound = gc.util.QuantizerSlotBound;
  export import Uuid = gc.util.Uuid;
  export import LinearQuantizer = gc.util.LinearQuantizer;
  export import Random = gc.util.Random;
  export import Queue = gc.util.Queue;
  export import CustomQuantizer = gc.util.CustomQuantizer;
  export import HistogramStats = gc.util.HistogramStats;
  export import MultiQuantizer = gc.util.MultiQuantizer;
  export import GaussianProfile = gc.util.GaussianProfile;
  export import Gaussian = gc.util.Gaussian;
  export import LogQuantizer = gc.util.LogQuantizer;
  export import Assert = gc.util.Assert;
  export import GaussianProfileSlot = gc.util.GaussianProfileSlot;
  export import TimeWindow = gc.util.TimeWindow;
  export import Crypto = gc.util.Crypto;
  export import SlidingWindow = gc.util.SlidingWindow;
  export import RecordLocation = gc.privateApi.RecordLocation;
  export import MatchedCandidateDetail = gc.privateApi.MatchedCandidateDetail;
  export import LinkParameters = gc.privateApi.LinkParameters;
  export import ReconciliationReportView = gc.privateApi.ReconciliationReportView;
  export import GlobalQualityEntry = gc.privateApi.GlobalQualityEntry;
  export import SourceRef = gc.privateApi.SourceRef;
  export import RecordTabResult = gc.privateApi.RecordTabResult;
  export import ReconciliationReportMatchView = gc.privateApi.ReconciliationReportMatchView;
  export import QualityTrend = gc.privateApi.QualityTrend;
  export import GlobalQualityHistory = gc.privateApi.GlobalQualityHistory;
  export import ComparisonViewData = gc.privateApi.ComparisonViewData;
  export import GoldenRecordScore = gc.privateApi.GoldenRecordScore;
  export import GeoJSON = gc.api.GeoJSON;
  export import POIFeatures = gc.api.POIFeatures;
  export import GeoJSONFeature = gc.api.GeoJSONFeature;
  export import GoldenWithLinkedRecords = gc.api.GoldenWithLinkedRecords;
  export import GoldenRecordDetails = gc.api.GoldenRecordDetails;
  export import GeoJSONGeometry = gc.api.GeoJSONGeometry;
  export import DataAttribution = gc.api.DataAttribution;
  export import LinkedRecordDetails = gc.api.LinkedRecordDetails;
  export import GoldenIndex = gc.api.GoldenIndex;
  export import BDAddressLoader = gc.bdAddressLoader.BDAddressLoader;
  export import BDAddressLine = gc.bdAddressLoader.BDAddressLine;
  export import CaclrResponseConstituency = gc.caclrLoader.CaclrResponseConstituency;
  export import CACLRLoader = gc.caclrLoader.CACLRLoader;
  export import CaclrResponseBuildingItem = gc.caclrLoader.CaclrResponseBuildingItem;
  export import CaclrResponseBuildings = gc.caclrLoader.CaclrResponseBuildings;
  export import CaclrAlias = gc.caclrLoader.CaclrAlias;
  export import CaclrResponseCantons = gc.caclrLoader.CaclrResponseCantons;
  export import CaclrResponseMunicipalityItem = gc.caclrLoader.CaclrResponseMunicipalityItem;
  export import CaclrResponseMunicipalities = gc.caclrLoader.CaclrResponseMunicipalities;
  export import CaclrResponseCityItem = gc.caclrLoader.CaclrResponseCityItem;
  export import CaclrResponseCantonItem = gc.caclrLoader.CaclrResponseCantonItem;
  export import CaclrResponseStreets = gc.caclrLoader.CaclrResponseStreets;
  export import CaclrResponseStreetItem = gc.caclrLoader.CaclrResponseStreetItem;
  export import CaclrResponseCities = gc.caclrLoader.CaclrResponseCities;
  export import OSMLoader = gc.osmLoader.OSMLoader;
  export import OsmOverpassResponse = gc.osmLoader.OsmOverpassResponse;
  export import BkOsmCityDTO = gc.backupExporter.BkOsmCityDTO;
  export import BkGoldenConstituencyDTO = gc.backupExporter.BkGoldenConstituencyDTO;
  export import BkCaclrBuildingDTO = gc.backupExporter.BkCaclrBuildingDTO;
  export import BkCaclrMunicipalityDTO = gc.backupExporter.BkCaclrMunicipalityDTO;
  export import BkCaclrCantonDTO = gc.backupExporter.BkCaclrCantonDTO;
  export import BkSourceDTO = gc.backupExporter.BkSourceDTO;
  export import BackupExporter = gc.backupExporter.BackupExporter;
  export import BkCaclrStreetDTO = gc.backupExporter.BkCaclrStreetDTO;
  export import BkGoldenCantonDTO = gc.backupExporter.BkGoldenCantonDTO;
  export import BkManifestEntryDTO = gc.backupExporter.BkManifestEntryDTO;
  export import BkBdaMunicipalityDTO = gc.backupExporter.BkBdaMunicipalityDTO;
  export import BkGoldenPoiDTO = gc.backupExporter.BkGoldenPoiDTO;
  export import BkGoldenQualityDTO = gc.backupExporter.BkGoldenQualityDTO;
  export import BkTrafficDTO = gc.backupExporter.BkTrafficDTO;
  export import BkCaclrConstituencyDTO = gc.backupExporter.BkCaclrConstituencyDTO;
  export import BkCaclrCityDTO = gc.backupExporter.BkCaclrCityDTO;
  export import BkGoldenStreetDTO = gc.backupExporter.BkGoldenStreetDTO;
  export import BkBdaAddressDTO = gc.backupExporter.BkBdaAddressDTO;
  export import BkOsmStreetDTO = gc.backupExporter.BkOsmStreetDTO;
  export import BkGoldenMunicipalityDTO = gc.backupExporter.BkGoldenMunicipalityDTO;
  export import BkGoldenQualityHistoryDTO = gc.backupExporter.BkGoldenQualityHistoryDTO;
  export import BkBdaCityDTO = gc.backupExporter.BkBdaCityDTO;
  export import BkBdaStreetDTO = gc.backupExporter.BkBdaStreetDTO;
  export import BkOsmPartialAddressDTO = gc.backupExporter.BkOsmPartialAddressDTO;
  export import BkGoldenCityDTO = gc.backupExporter.BkGoldenCityDTO;
  export import BkGoldenLinkedRecordDTO = gc.backupExporter.BkGoldenLinkedRecordDTO;
  export import BkOsmAddressDTO = gc.backupExporter.BkOsmAddressDTO;
  export import BackupImporter = gc.backupImporter.BackupImporter;
  export import Traffic = gc.trafic.Traffic;
  export import Endpoint = gc.trafic.Endpoint;
  export import MengplazMissmatch = gc.errors.MengplazMissmatch;
  export import AddrErr = gc.errors.AddrErr;
  export import BDAddressFullRecord = gc.bdaddress.BDAddressFullRecord;
  export import BDAddressSource = gc.bdaddress.BDAddressSource;
  export import BDACity = gc.bdaddress.BDACity;
  export import BDAddress = gc.bdaddress.BDAddress;
  export import BDAMunicipality = gc.bdaddress.BDAMunicipality;
  export import BDAStreet = gc.bdaddress.BDAStreet;
  export import CaclrSource = gc.caclr.CaclrSource;
  export import CaclrStreet = gc.caclr.CaclrStreet;
  export import CaclrConstituency = gc.caclr.CaclrConstituency;
  export import CaclrCanton = gc.caclr.CaclrCanton;
  export import CaclrToken = gc.caclr.CaclrToken;
  export import CaclrDataStatus = gc.caclr.CaclrDataStatus;
  export import CaclrAdminStatus = gc.caclr.CaclrAdminStatus;
  export import CaclrMunicipality = gc.caclr.CaclrMunicipality;
  export import CaclrTokenResponse = gc.caclr.CaclrTokenResponse;
  export import CaclrCity = gc.caclr.CaclrCity;
  export import CaclrPOIFullRecord = gc.caclr.CaclrPOIFullRecord;
  export import CaclrEurostatsIds = gc.caclr.CaclrEurostatsIds;
  export import CaclrBuilding = gc.caclr.CaclrBuilding;
  export import POIFullRecordRef = gc.mengplaz.POIFullRecordRef;
  export import QualityEventType = gc.mengplaz.QualityEventType;
  export import POIRecordProvider = gc.mengplaz.POIRecordProvider;
  export import LinkedRecordEntry = gc.mengplaz.LinkedRecordEntry;
  export import ReconciliationCandidate = gc.mengplaz.ReconciliationCandidate;
  export import ReconciliationReport = gc.mengplaz.ReconciliationReport;
  export import StreetRecord = gc.mengplaz.StreetRecord;
  export import ScoringWeights = gc.mengplaz.ScoringWeights;
  export import GeoParameters = gc.mengplaz.GeoParameters;
  export import SearchParameters = gc.mengplaz.SearchParameters;
  export import Alias = gc.mengplaz.Alias;
  export import SearchRequest = gc.mengplaz.SearchRequest;
  export import DataSource = gc.mengplaz.DataSource;
  export import SearchItem = gc.mengplaz.SearchItem;
  export import StreetRecordRef = gc.mengplaz.StreetRecordRef;
  export import CandidateMatch = gc.mengplaz.CandidateMatch;
  export import POIRecord = gc.mengplaz.POIRecord;
  export import ReconciliationCandidateScore = gc.mengplaz.ReconciliationCandidateScore;
  export import Match = gc.mengplaz.Match;
  export import QualityEvent = gc.mengplaz.QualityEvent;
  export import StreetRecordProvider = gc.mengplaz.StreetRecordProvider;
  export import POIRecordRef = gc.mengplaz.POIRecordRef;
  export import OsmParsedAddress = gc.osm.OsmParsedAddress;
  export import OsmPartialAddress = gc.osm.OsmPartialAddress;
  export import OsmStreet = gc.osm.OsmStreet;
  export import OsmAddress = gc.osm.OsmAddress;
  export import OsmCity = gc.osm.OsmCity;
  export import OSMFullRecord = gc.osm.OSMFullRecord;
  export import OsmSource = gc.osm.OsmSource;
  export import GoldenSource = gc.golden.GoldenSource;
  export import GoldenMunicipality = gc.golden.GoldenMunicipality;
  export import GoldenCity = gc.golden.GoldenCity;
  export import GoldenPointOfInterest = gc.golden.GoldenPointOfInterest;
  export import GoldenCanton = gc.golden.GoldenCanton;
  export import GoldenConstituency = gc.golden.GoldenConstituency;
  export import GoldenStreet = gc.golden.GoldenStreet;
  export import GoldenServices = gc.goldenServices.GoldenServices;
  export import AddressSearchInput = gc.searchService.AddressSearchInput;
  export import ScoredPoi = gc.searchService.ScoredPoi;
  export import ScoredCity = gc.searchService.ScoredCity;
  export import ScoredStreet = gc.searchService.ScoredStreet;
  export import Traffic_Service = gc.traffic_service.Traffic_Service;
  export import SplitAlphaNumericalString = gc.utils.SplitAlphaNumericalString;
  export import mcp_initialize = gc.runtime.mcp_initialize;
  export import mcp_tools_list = gc.runtime.mcp_tools_list;
  export import mcp_tools_call = gc.runtime.mcp_tools_call;
  export import mcp_tasks_get = gc.runtime.mcp_tasks_get;
  export import mcp_tasks_result = gc.runtime.mcp_tasks_result;
  export import mcp_tasks_list = gc.runtime.mcp_tasks_list;
  export import mcp_tasks_cancel = gc.runtime.mcp_tasks_cancel;
  export import loadOsm = gc.project.loadOsm;
  export import loadBda = gc.project.loadBda;
  export import loadCaclr = gc.project.loadCaclr;
  export import promoteRecord = gc.privateApi.promoteRecord;
  export import linkRecords = gc.privateApi.linkRecords;
  export import unlinkRecord = gc.privateApi.unlinkRecord;
  export import linkAllFullMatched = gc.privateApi.linkAllFullMatched;
  export import batchLinkByScore = gc.privateApi.batchLinkByScore;
  export import mergePositionsToGolden = gc.privateApi.mergePositionsToGolden;
  export import lockDatasource = gc.privateApi.lockDatasource;
  export import reconcile = gc.privateApi.reconcile;
  export import reconcilePOIs = gc.privateApi.reconcilePOIs;
  export import getReconciliationReport = gc.privateApi.getReconciliationReport;
  export import getRecordTab = gc.privateApi.getRecordTab;
  export import getSources = gc.privateApi.getSources;
  export import getComparisonViewData = gc.privateApi.getComparisonViewData;
  export import getLinkedComparisonViewData = gc.privateApi.getLinkedComparisonViewData;
  export import computeGlobalQuality = gc.privateApi.computeGlobalQuality;
  export import unlockSource = gc.privateApi.unlockSource;
  export import getPoisInStreet = gc.api.getPoisInStreet;
  export import searchStreet = gc.api.searchStreet;
  export import getPois = gc.api.getPois;
  export import getPoisByGeo = gc.api.getPoisByGeo;
  export import getGoldenRecordDetails = gc.api.getGoldenRecordDetails;
  export import getGoldenRecordRefByUid = gc.api.getGoldenRecordRefByUid;
  export import getRecordByGeoportailID = gc.api.getRecordByGeoportailID;
  export import getGoldenLocalities = gc.api.getGoldenLocalities;
  export import getGoldenCommunes = gc.api.getGoldenCommunes;
  export import getGoldenStreetsByLocalityId = gc.api.getGoldenStreetsByLocalityId;
  export import getGoldenNumbersByStreetId = gc.api.getGoldenNumbersByStreetId;
  export import getGoldenRecords = gc.api.getGoldenRecords;
  export import getGoldenRecordsGeoJson = gc.api.getGoldenRecordsGeoJson;
  export import attribution = gc.api.attribution;
  export import openapi = gc.api.openapi;
  export import getGlobalQualityHistory = gc.api.getGlobalQualityHistory;
  export import appInfo = gc.api.appInfo;
  export import searchAddress = gc.api.searchAddress;
  export import getGoldenWithLinkedRecords = gc.api.getGoldenWithLinkedRecords;
  export import publicStats = gc.api.publicStats;
  export import backupGraph = gc.backupExporter.backupGraph;
  export import restoreGraph = gc.backupImporter.restoreGraph;
  export import recomputeGoldenGeoScore = gc.golden.recomputeGoldenGeoScore;
  export import updateCACLR = gc.updateService.updateCACLR;
  export import updateBDA = gc.updateService.updateBDA;
  export import updateOSM = gc.updateService.updateOSM;
}
