// AUTO-GENERATED FILE PLEASE DO NOT MODIFY MANUALLY
/* eslint-disable */
/* oxlint-disable */
declare namespace gc {
  namespace project {
    class Root extends gc.sdk.GCObject {
      static readonly _type = 'project::Root';
      static readonly $fields: Root.$Fields;
      "runtime::usages": gc.core.nodeTime<gc.runtime.RuntimeUsage>;
      "bda::bda_municipalities_by_name": gc.core.nodeIndex<string, gc.core.node<gc.bda.BdaMunicipality>>;
      "bda::bda_cities_by_name": gc.core.nodeIndex<string, globalThis.Array<gc.core.node<gc.bda.BdaCity>>>;
      "bda::bda_streets_by_name": gc.core.nodeIndex<string, globalThis.Array<gc.core.node<gc.bda.BdaStreet>>>;
      "bda::bda_streets_by_caclr_id": gc.core.nodeList<gc.core.node<gc.bda.BdaStreet>>;
      "bda::bda_addresses_by_geo": gc.core.nodeGeo<gc.core.node<gc.bda.BdaAddress>>;
      "bda::bda_addresses_by_caclr_id": gc.core.nodeList<gc.core.node<gc.bda.BdaAddress>>;
      "bda::bda_addresses_by_geoportail_id": gc.core.nodeIndex<string, gc.core.node<gc.bda.BdaAddress>>;
      "caclr::caclr_constituencies_by_code": gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrConstituency>>;
      "caclr::caclr_cantons_by_id": gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrCanton>>;
      "caclr::caclr_municipalities_by_id": gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrMunicipality>>;
      "caclr::caclr_cities_by_id": gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrCity>>;
      "caclr::caclr_streets_by_id": gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrStreet>>;
      "caclr::caclr_addresses_by_id": gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrAddress>>;
      "caclr::caclr_municipalities_by_name": gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrMunicipality>>;
      "caclr::caclr_cities_by_name": gc.core.nodeIndex<string, globalThis.Array<gc.core.node<gc.caclr.CaclrCity>>>;
      "caclr::caclr_streets_by_name": gc.core.nodeIndex<string, globalThis.Array<gc.core.node<gc.caclr.CaclrStreet>>>;
      "caclr::caclr_token": gc.core.node<gc.caclr.CaclrToken | null>;
      "golden::golden_constituencies_by_code": gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenConstituency>>;
      "golden::golden_cantons_by_id": gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenCanton>>;
      "golden::golden_municipalities_by_id": gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenMunicipality>>;
      "golden::golden_cities_by_id": gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenCity>>;
      "golden::golden_streets_by_id": gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenStreet>>;
      "golden::golden_addresses_by_id": gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenAddress>>;
      "golden::golden_municipalities_by_name": gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenMunicipality>>;
      "golden::golden_cities_by_name": gc.core.nodeIndex<string, globalThis.Array<gc.core.node<gc.golden.GoldenCity>>>;
      "golden::golden_streets_by_name": gc.core.nodeIndex<string, globalThis.Array<gc.core.node<gc.golden.GoldenStreet>>>;
      "golden::golden_addresses_by_geo": gc.core.nodeGeo<gc.core.node<gc.golden.GoldenAddress>>;
      "golden::golden_addresses_geo_recompute": gc.core.nodeList<gc.core.node<gc.golden.GoldenAddress>>;
      "mengplaz::sources_by_name": gc.core.nodeIndex<string, gc.core.node<gc.mengplaz.DataSource>>;
      "osm::osm_addresses_by_id": gc.core.nodeIndex<string, gc.core.node<gc.osm.OsmAddress>>;
      "osm::osm_partial_addresses_by_id": gc.core.nodeList<gc.core.node<gc.osm.OsmPartialAddress>>;
      "osm::osm_addresses_by_geo": gc.core.nodeGeo<gc.core.node<gc.osm.OsmAddress>>;
      "osm::osm_partial_addresses_by_geo": gc.core.nodeGeo<gc.core.node<gc.osm.OsmPartialAddress>>;
      "osm::osm_cities_by_name": gc.core.nodeIndex<string, gc.core.node<gc.osm.OsmCity>>;
      "osm::osm_streets_by_name": gc.core.nodeIndex<string, globalThis.Array<gc.core.node<gc.osm.OsmStreet>>>;
      "goldenStreetSearch::golden_street_index": gc.core.node<gc.text_index.TextIndex<string> | null>;
      "goldenTextSearch::golden_address_index": gc.core.node<gc.address_index.AddressIndex<string> | null>;
      "sourceTextSearch::source_address_indexes": gc.core.nodeIndex<string, gc.core.node<gc.address_index.AddressIndex<string> | null>>;
      "text_index::ts_char_to_char": gc.core.node<globalThis.Map<string, string> | null>;
      "text_index::ts_char_to_string": gc.core.node<globalThis.Map<string, string> | null>;
      "text_index::ts_punctuation_chars": gc.core.node<globalThis.Map<string, boolean> | null>;
    }
    namespace Root {
      interface $Fields {
        "runtime::usages": 0;
        "bda::bda_municipalities_by_name": 1;
        "bda::bda_cities_by_name": 2;
        "bda::bda_streets_by_name": 3;
        "bda::bda_streets_by_caclr_id": 4;
        "bda::bda_addresses_by_geo": 5;
        "bda::bda_addresses_by_caclr_id": 6;
        "bda::bda_addresses_by_geoportail_id": 7;
        "caclr::caclr_constituencies_by_code": 8;
        "caclr::caclr_cantons_by_id": 9;
        "caclr::caclr_municipalities_by_id": 10;
        "caclr::caclr_cities_by_id": 11;
        "caclr::caclr_streets_by_id": 12;
        "caclr::caclr_addresses_by_id": 13;
        "caclr::caclr_municipalities_by_name": 14;
        "caclr::caclr_cities_by_name": 15;
        "caclr::caclr_streets_by_name": 16;
        "caclr::caclr_token": 17;
        "golden::golden_constituencies_by_code": 18;
        "golden::golden_cantons_by_id": 19;
        "golden::golden_municipalities_by_id": 20;
        "golden::golden_cities_by_id": 21;
        "golden::golden_streets_by_id": 22;
        "golden::golden_addresses_by_id": 23;
        "golden::golden_municipalities_by_name": 24;
        "golden::golden_cities_by_name": 25;
        "golden::golden_streets_by_name": 26;
        "golden::golden_addresses_by_geo": 27;
        "golden::golden_addresses_geo_recompute": 28;
        "mengplaz::sources_by_name": 29;
        "osm::osm_addresses_by_id": 30;
        "osm::osm_partial_addresses_by_id": 31;
        "osm::osm_addresses_by_geo": 32;
        "osm::osm_partial_addresses_by_geo": 33;
        "osm::osm_cities_by_name": 34;
        "osm::osm_streets_by_name": 35;
        "goldenStreetSearch::golden_street_index": 36;
        "goldenTextSearch::golden_address_index": 37;
        "sourceTextSearch::source_address_indexes": 38;
        "text_index::ts_char_to_char": 39;
        "text_index::ts_char_to_string": 40;
        "text_index::ts_punctuation_chars": 41;
      }
    }

  }

  namespace privateApi {
    class ComparisonViewData extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::ComparisonViewData';
      static readonly $fields: ComparisonViewData.$Fields;
      sourceRecord: gc.mengplaz.AddressFullRecordRef;
      candidates: globalThis.Array<gc.privateApi.MatchedCandidateDetail>;
      constructor(sourceRecord: gc.mengplaz.AddressFullRecordRef, candidates: globalThis.Array<gc.privateApi.MatchedCandidateDetail>);
      static createFrom(fields: {sourceRecord: gc.mengplaz.AddressFullRecordRef, candidates: globalThis.Array<gc.privateApi.MatchedCandidateDetail>}): ComparisonViewData;
    }
    namespace ComparisonViewData {
      interface $Fields {
        sourceRecord: 0;
        candidates: 1;
      }
    }

    class SourceCountPoint extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::SourceCountPoint';
      static readonly $fields: SourceCountPoint.$Fields;
      timestamp: gc.core.time;
      total: number | bigint;
      active: number | bigint;
      constructor(timestamp: gc.core.time, total: number | bigint, active: number | bigint);
      static createFrom(fields: {timestamp: gc.core.time, total: number | bigint, active: number | bigint}): SourceCountPoint;
    }
    namespace SourceCountPoint {
      interface $Fields {
        timestamp: 0;
        total: 1;
        active: 2;
      }
    }

    class SourceStats extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::SourceStats';
      static readonly $fields: SourceStats.$Fields;
      rows: globalThis.Array<gc.privateApi.SourceStatsRow>;
      series: globalThis.Array<gc.privateApi.SourceCountSeries>;
      constructor(rows: globalThis.Array<gc.privateApi.SourceStatsRow>, series: globalThis.Array<gc.privateApi.SourceCountSeries>);
      static createFrom(fields: {rows: globalThis.Array<gc.privateApi.SourceStatsRow>, series: globalThis.Array<gc.privateApi.SourceCountSeries>}): SourceStats;
    }
    namespace SourceStats {
      interface $Fields {
        rows: 0;
        series: 1;
      }
    }

    class restoreGraph$args extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::restoreGraph$args';
    }

    class goldenTextIndexStats$args extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::goldenTextIndexStats$args';
    }

    class updateBDA$args extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::updateBDA$args';
    }

    class linkRecords$args extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::linkRecords$args';
      static readonly $fields: linkRecords$args.$Fields;
      sourceRecord: gc.core.node<gc.mengplaz.AddressRecordProvider>;
      candidateRecord: gc.core.node<gc.mengplaz.AddressRecordProvider>;
      params: gc.privateApi.LinkParameters | null;
      constructor(sourceRecord: gc.core.node<gc.mengplaz.AddressRecordProvider>, candidateRecord: gc.core.node<gc.mengplaz.AddressRecordProvider>, params?: gc.privateApi.LinkParameters | null);
      static createFrom(fields: {sourceRecord: gc.core.node<gc.mengplaz.AddressRecordProvider>, candidateRecord: gc.core.node<gc.mengplaz.AddressRecordProvider>, params?: gc.privateApi.LinkParameters | null}): linkRecords$args;
    }
    namespace linkRecords$args {
      interface $Fields {
        sourceRecord: 0;
        candidateRecord: 1;
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

    class recomputeGoldenGeoScore$args extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::recomputeGoldenGeoScore$args';
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

    class goldenStreetIndexStats$args extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::goldenStreetIndexStats$args';
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

    class unlinkRecord$args extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::unlinkRecord$args';
      static readonly $fields: unlinkRecord$args.$Fields;
      sourceRecord: gc.core.node<gc.mengplaz.AddressRecordProvider>;
      constructor(sourceRecord: gc.core.node<gc.mengplaz.AddressRecordProvider>);
      static createFrom(fields: {sourceRecord: gc.core.node<gc.mengplaz.AddressRecordProvider>}): unlinkRecord$args;
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

    class buildGoldenTextIndex$args extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::buildGoldenTextIndex$args';
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

    class buildGoldenStreetIndex$args extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::buildGoldenStreetIndex$args';
    }

    class SourceStatsRow extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::SourceStatsRow';
      static readonly $fields: SourceStatsRow.$Fields;
      source: string;
      total: number | bigint;
      active: number | bigint | null;
      linked: number | bigint | null;
      share: number;
      lastUpdate: gc.core.time | null;
      asOf: gc.core.time | null;
      constructor(source: string, total: number | bigint, active: number | bigint | null, linked: number | bigint | null, share: number, lastUpdate?: gc.core.time | null, asOf?: gc.core.time | null);
      static createFrom(fields: {source: string, total: number | bigint, active?: number | bigint | null, linked?: number | bigint | null, share: number, lastUpdate?: gc.core.time | null, asOf?: gc.core.time | null}): SourceStatsRow;
    }
    namespace SourceStatsRow {
      interface $Fields {
        source: 0;
        total: 1;
        active: 2;
        linked: 3;
        share: 4;
        lastUpdate: 5;
        asOf: 6;
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

    class GoldenRecordPage extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::GoldenRecordPage';
      static readonly $fields: GoldenRecordPage.$Fields;
      total: number | bigint;
      offset: number | bigint;
      limit: number | bigint;
      rows: globalThis.Array<gc.privateApi.GoldenRecordScore>;
      constructor(total: number | bigint, offset: number | bigint, limit: number | bigint, rows: globalThis.Array<gc.privateApi.GoldenRecordScore>);
      static createFrom(fields: {total: number | bigint, offset: number | bigint, limit: number | bigint, rows: globalThis.Array<gc.privateApi.GoldenRecordScore>}): GoldenRecordPage;
    }
    namespace GoldenRecordPage {
      interface $Fields {
        total: 0;
        offset: 1;
        limit: 2;
        rows: 3;
      }
    }

    class SourceCountSeries extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::SourceCountSeries';
      static readonly $fields: SourceCountSeries.$Fields;
      source: string;
      points: globalThis.Array<gc.privateApi.SourceCountPoint>;
      constructor(source: string, points: globalThis.Array<gc.privateApi.SourceCountPoint>);
      static createFrom(fields: {source: string, points: globalThis.Array<gc.privateApi.SourceCountPoint>}): SourceCountSeries;
    }
    namespace SourceCountSeries {
      interface $Fields {
        source: 0;
        points: 1;
      }
    }

    class sourceTextIndexStats$args extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::sourceTextIndexStats$args';
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

    class GlobalQualityHistory extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::GlobalQualityHistory';
      static readonly $fields: GlobalQualityHistory.$Fields;
      current: number;
      history: globalThis.Array<gc.privateApi.GlobalQualityEntry>;
      constructor(current: number, history: globalThis.Array<gc.privateApi.GlobalQualityEntry>);
      static createFrom(fields: {current: number, history: globalThis.Array<gc.privateApi.GlobalQualityEntry>}): GlobalQualityHistory;
    }
    namespace GlobalQualityHistory {
      interface $Fields {
        current: 0;
        history: 1;
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

    class updateOSM$args extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::updateOSM$args';
    }

    class buildSourceTextIndexes$args extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::buildSourceTextIndexes$args';
    }

    class backupGraph$args extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::backupGraph$args';
    }

    class MatchedCandidateDetail extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::MatchedCandidateDetail';
      static readonly $fields: MatchedCandidateDetail.$Fields;
      ref: gc.core.node<gc.mengplaz.AddressRecordProvider>;
      numberScore: number;
      streetScore: number;
      cityScore: number;
      postcodeScore: number;
      geoScore: number | null;
      overallScore: number;
      record: any;
      constructor(ref: gc.core.node<gc.mengplaz.AddressRecordProvider>, numberScore: number, streetScore: number, cityScore: number, postcodeScore: number, geoScore: number | null, overallScore: number, record: any);
      static createFrom(fields: {ref: gc.core.node<gc.mengplaz.AddressRecordProvider>, numberScore: number, streetScore: number, cityScore: number, postcodeScore: number, geoScore?: number | null, overallScore: number, record: any}): MatchedCandidateDetail;
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

    class getSources$args extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::getSources$args';
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

    class lockSource$args extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::lockSource$args';
      static readonly $fields: lockSource$args.$Fields;
      source: string;
      constructor(source: string);
      static createFrom(fields: {source: string}): lockSource$args;
    }
    namespace lockSource$args {
      interface $Fields {
        source: 0;
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

    class promoteRecord$args extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::promoteRecord$args';
      static readonly $fields: promoteRecord$args.$Fields;
      sourceRecord: gc.core.node<gc.mengplaz.AddressRecordProvider>;
      streetIdx: string;
      constructor(sourceRecord: gc.core.node<gc.mengplaz.AddressRecordProvider>, streetIdx: string);
      static createFrom(fields: {sourceRecord: gc.core.node<gc.mengplaz.AddressRecordProvider>, streetIdx: string}): promoteRecord$args;
    }
    namespace promoteRecord$args {
      interface $Fields {
        sourceRecord: 0;
        streetIdx: 1;
      }
    }

    class buildSourceTextIndex$args extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::buildSourceTextIndex$args';
      static readonly $fields: buildSourceTextIndex$args.$Fields;
      source: string;
      constructor(source: string);
      static createFrom(fields: {source: string}): buildSourceTextIndex$args;
    }
    namespace buildSourceTextIndex$args {
      interface $Fields {
        source: 0;
      }
    }

    class updateCACLR$args extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::updateCACLR$args';
    }

    class computeGlobalQuality$args extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::computeGlobalQuality$args';
    }

    class reconcileAddresses$args extends gc.sdk.GCObject {
      static readonly _type = 'privateApi::reconcileAddresses$args';
      static readonly $fields: reconcileAddresses$args.$Fields;
      source: string;
      poiIds: globalThis.Array<string>;
      params: gc.mengplaz.SearchParameters | null;
      constructor(source: string, poiIds: globalThis.Array<string>, params?: gc.mengplaz.SearchParameters | null);
      static createFrom(fields: {source: string, poiIds: globalThis.Array<string>, params?: gc.mengplaz.SearchParameters | null}): reconcileAddresses$args;
    }
    namespace reconcileAddresses$args {
      interface $Fields {
        source: 0;
        poiIds: 1;
        params: 2;
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

    const promoteRecord: ((sourceRecord: gc.core.node<gc.mengplaz.AddressRecordProvider>, streetIdx: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<unknown>) & {
      spawn(sourceRecord: gc.core.node<gc.mengplaz.AddressRecordProvider>, streetIdx: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<unknown>>;
    };
    const linkRecords: ((sourceRecord: gc.core.node<gc.mengplaz.AddressRecordProvider>, candidateRecord: gc.core.node<gc.mengplaz.AddressRecordProvider>, params?: gc.privateApi.LinkParameters | null, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<unknown>) & {
      spawn(sourceRecord: gc.core.node<gc.mengplaz.AddressRecordProvider>, candidateRecord: gc.core.node<gc.mengplaz.AddressRecordProvider>, params?: gc.privateApi.LinkParameters | null, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<unknown>>;
    };
    const unlinkRecord: ((sourceRecord: gc.core.node<gc.mengplaz.AddressRecordProvider>, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<unknown>) & {
      spawn(sourceRecord: gc.core.node<gc.mengplaz.AddressRecordProvider>, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<unknown>>;
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
    const lockSource: ((source: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<unknown>) & {
      spawn(source: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<unknown>>;
    };
    const reconcile: ((source: string, params?: gc.mengplaz.SearchParameters | null, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<gc.mengplaz.ReconciliationReport | null>) & {
      spawn(source: string, params?: gc.mengplaz.SearchParameters | null, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<gc.mengplaz.ReconciliationReport | null>>;
    };
    const reconcileAddresses: ((source: string, poiIds: globalThis.Array<string>, params?: gc.mengplaz.SearchParameters | null, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<gc.mengplaz.ReconciliationReport | null>) & {
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
     * Walks every golden POI; call periodically to extend the global quality history.
     */
    const computeGlobalQuality: (($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<unknown>) & {
      spawn($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<unknown>>;
    };
    const unlockSource: ((source: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<unknown>) & {
      spawn(source: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<unknown>>;
    };
    const updateCACLR: (($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<unknown>) & {
      spawn($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<unknown>>;
    };
    const updateBDA: (($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<unknown>) & {
      spawn($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<unknown>>;
    };
    const updateOSM: (($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<unknown>) & {
      spawn($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<unknown>>;
    };
    const buildGoldenStreetIndex: (($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<number | bigint>) & {
      spawn($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<number | bigint>>;
    };
    const goldenStreetIndexStats: (($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<gc.goldenStreetSearch.GoldenStreetIndexStats>) & {
      spawn($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<gc.goldenStreetSearch.GoldenStreetIndexStats>>;
    };
    const buildGoldenTextIndex: (($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<number | bigint>) & {
      spawn($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<number | bigint>>;
    };
    const goldenTextIndexStats: (($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<gc.goldenTextSearch.GoldenTextIndexStats>) & {
      spawn($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<gc.goldenTextSearch.GoldenTextIndexStats>>;
    };
    const buildSourceTextIndexes: (($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<number | bigint>) & {
      spawn($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<number | bigint>>;
    };
    const buildSourceTextIndex: ((source: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<number | bigint>) & {
      spawn(source: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<number | bigint>>;
    };
    const sourceTextIndexStats: (($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<globalThis.Array<gc.sourceTextSearch.SourceTextIndexStats>>) & {
      spawn($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<globalThis.Array<gc.sourceTextSearch.SourceTextIndexStats>>>;
    };
    const recomputeGoldenGeoScore: (($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<unknown>) & {
      spawn($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<unknown>>;
    };
    /**
     * Dumps the whole graph to `files/backup/` (plus the golden dump in `files/dump/`).
     */
    const backupGraph: (($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<unknown>) & {
      spawn($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<unknown>>;
    };
    /**
     * Restores the whole graph from `files/backup/`.
     */
    const restoreGraph: (($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<unknown>) & {
      spawn($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<unknown>>;
    };
  }

  namespace api {
    class DeprecatedCounts extends gc.sdk.GCObject {
      static readonly _type = 'api::DeprecatedCounts';
      static readonly $fields: DeprecatedCounts.$Fields;
      rows: globalThis.Array<gc.api.DeprecatedCountRow>;
      total: number | bigint;
      deprecated: number | bigint;
      constructor(rows: globalThis.Array<gc.api.DeprecatedCountRow>, total: number | bigint, deprecated: number | bigint);
      static createFrom(fields: {rows: globalThis.Array<gc.api.DeprecatedCountRow>, total: number | bigint, deprecated: number | bigint}): DeprecatedCounts;
    }
    namespace DeprecatedCounts {
      interface $Fields {
        rows: 0;
        total: 1;
        deprecated: 2;
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

    class getGoldenRecords$args extends gc.sdk.GCObject {
      static readonly _type = 'api::getGoldenRecords$args';
      static readonly $fields: getGoldenRecords$args.$Fields;
      offset: number | bigint;
      limit: number | bigint;
      constructor(offset: number | bigint, limit: number | bigint);
      static createFrom(fields: {offset: number | bigint, limit: number | bigint}): getGoldenRecords$args;
    }
    namespace getGoldenRecords$args {
      interface $Fields {
        offset: 0;
        limit: 1;
      }
    }

    class GoldenRecordDetails extends gc.sdk.GCObject {
      static readonly _type = 'api::GoldenRecordDetails';
      static readonly $fields: GoldenRecordDetails.$Fields;
      golden: gc.mengplaz.AddressRecordRef;
      associated: globalThis.Array<gc.mengplaz.AddressFullRecordRef>;
      constructor(golden: gc.mengplaz.AddressRecordRef, associated: globalThis.Array<gc.mengplaz.AddressFullRecordRef>);
      static createFrom(fields: {golden: gc.mengplaz.AddressRecordRef, associated: globalThis.Array<gc.mengplaz.AddressFullRecordRef>}): GoldenRecordDetails;
    }
    namespace GoldenRecordDetails {
      interface $Fields {
        golden: 0;
        associated: 1;
      }
    }

    class attribution$args extends gc.sdk.GCObject {
      static readonly _type = 'api::attribution$args';
    }

    class getDeprecatedCounts$args extends gc.sdk.GCObject {
      static readonly _type = 'api::getDeprecatedCounts$args';
      static readonly $fields: getDeprecatedCounts$args.$Fields;
      source: string | null;
      constructor(source?: string | null);
      static createFrom(fields: {source?: string | null}): getDeprecatedCounts$args;
    }
    namespace getDeprecatedCounts$args {
      interface $Fields {
        source: 0;
      }
    }

    class AddressFeatures extends gc.sdk.GCObject {
      static readonly _type = 'api::AddressFeatures';
      static readonly $fields: AddressFeatures.$Fields;
      coords: gc.core.geo;
      number: string;
      constructor(coords: gc.core.geo, number: string);
      static createFrom(fields: {coords: gc.core.geo, number: string}): AddressFeatures;
    }
    namespace AddressFeatures {
      interface $Fields {
        coords: 0;
        number: 1;
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

    class getPoisInStreet$args extends gc.sdk.GCObject {
      static readonly _type = 'api::getPoisInStreet$args';
      static readonly $fields: getPoisInStreet$args.$Fields;
      streetId: string;
      constructor(streetId: string);
      static createFrom(fields: {streetId: string}): getPoisInStreet$args;
    }
    namespace getPoisInStreet$args {
      interface $Fields {
        streetId: 0;
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

    class GoldenRecordsPage extends gc.sdk.GCObject {
      static readonly _type = 'api::GoldenRecordsPage';
      static readonly $fields: GoldenRecordsPage.$Fields;
      total: number | bigint;
      offset: number | bigint;
      limit: number | bigint;
      rows: globalThis.Array<gc.mengplaz.AddressRecord>;
      constructor(total: number | bigint, offset: number | bigint, limit: number | bigint, rows: globalThis.Array<gc.mengplaz.AddressRecord>);
      static createFrom(fields: {total: number | bigint, offset: number | bigint, limit: number | bigint, rows: globalThis.Array<gc.mengplaz.AddressRecord>}): GoldenRecordsPage;
    }
    namespace GoldenRecordsPage {
      interface $Fields {
        total: 0;
        offset: 1;
        limit: 2;
        rows: 3;
      }
    }

    class RankedGoldenRecord extends gc.sdk.GCObject {
      static readonly _type = 'api::RankedGoldenRecord';
      static readonly $fields: RankedGoldenRecord.$Fields;
      record: gc.core.node<gc.golden.GoldenAddress>;
      value: number;
      constructor(record: gc.core.node<gc.golden.GoldenAddress>, value: number);
      static createFrom(fields: {record: gc.core.node<gc.golden.GoldenAddress>, value: number}): RankedGoldenRecord;
    }
    namespace RankedGoldenRecord {
      interface $Fields {
        record: 0;
        value: 1;
      }
    }

    class GoldenWithLinkedRecords extends gc.sdk.GCObject {
      static readonly _type = 'api::GoldenWithLinkedRecords';
      static readonly $fields: GoldenWithLinkedRecords.$Fields;
      golden: gc.mengplaz.AddressRecord;
      osm: globalThis.Array<gc.api.LinkedRecordDetails<gc.osm.OsmAddressFullRecord>>;
      caclr: globalThis.Array<gc.api.LinkedRecordDetails<gc.caclr.CaclrAddressFullRecord>>;
      bda: globalThis.Array<gc.api.LinkedRecordDetails<gc.bda.BdaAddressFullRecord>>;
      constructor(golden: gc.mengplaz.AddressRecord, osm: globalThis.Array<gc.api.LinkedRecordDetails<gc.osm.OsmAddressFullRecord>>, caclr: globalThis.Array<gc.api.LinkedRecordDetails<gc.caclr.CaclrAddressFullRecord>>, bda: globalThis.Array<gc.api.LinkedRecordDetails<gc.bda.BdaAddressFullRecord>>);
      static createFrom(fields: {golden: gc.mengplaz.AddressRecord, osm: globalThis.Array<gc.api.LinkedRecordDetails<gc.osm.OsmAddressFullRecord>>, caclr: globalThis.Array<gc.api.LinkedRecordDetails<gc.caclr.CaclrAddressFullRecord>>, bda: globalThis.Array<gc.api.LinkedRecordDetails<gc.bda.BdaAddressFullRecord>>}): GoldenWithLinkedRecords;
    }
    namespace GoldenWithLinkedRecords {
      interface $Fields {
        golden: 0;
        osm: 1;
        caclr: 2;
        bda: 3;
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

    class DeprecatedCountRow extends gc.sdk.GCObject {
      static readonly _type = 'api::DeprecatedCountRow';
      static readonly $fields: DeprecatedCountRow.$Fields;
      source: string;
      total: number | bigint;
      deprecated: number | bigint;
      asOf: gc.core.time | null;
      constructor(source: string, total: number | bigint, deprecated: number | bigint, asOf?: gc.core.time | null);
      static createFrom(fields: {source: string, total: number | bigint, deprecated: number | bigint, asOf?: gc.core.time | null}): DeprecatedCountRow;
    }
    namespace DeprecatedCountRow {
      interface $Fields {
        source: 0;
        total: 1;
        deprecated: 2;
        asOf: 3;
      }
    }

    class openapi$args extends gc.sdk.GCObject {
      static readonly _type = 'api::openapi$args';
    }

    class appInfo$args extends gc.sdk.GCObject {
      static readonly _type = 'api::appInfo$args';
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

    class getGoldenLocalities$args extends gc.sdk.GCObject {
      static readonly _type = 'api::getGoldenLocalities$args';
      static readonly $fields: getGoldenLocalities$args.$Fields;
      communeName: string | null;
      constructor(communeName?: string | null);
      static createFrom(fields: {communeName?: string | null}): getGoldenLocalities$args;
    }
    namespace getGoldenLocalities$args {
      interface $Fields {
        communeName: 0;
      }
    }

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

    class getGoldenRecordScores$args extends gc.sdk.GCObject {
      static readonly _type = 'api::getGoldenRecordScores$args';
      static readonly $fields: getGoldenRecordScores$args.$Fields;
      offset: number | bigint;
      limit: number | bigint;
      sortKey: string | null;
      sortDir: string | null;
      constructor(offset: number | bigint, limit: number | bigint, sortKey?: string | null, sortDir?: string | null);
      static createFrom(fields: {offset: number | bigint, limit: number | bigint, sortKey?: string | null, sortDir?: string | null}): getGoldenRecordScores$args;
    }
    namespace getGoldenRecordScores$args {
      interface $Fields {
        offset: 0;
        limit: 1;
        sortKey: 2;
        sortDir: 3;
      }
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

    class getGoldenRecordsGeoJson$args extends gc.sdk.GCObject {
      static readonly _type = 'api::getGoldenRecordsGeoJson$args';
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

    class getSourceStats$args extends gc.sdk.GCObject {
      static readonly _type = 'api::getSourceStats$args';
      static readonly $fields: getSourceStats$args.$Fields;
      from: gc.core.time | null;
      to: gc.core.time | null;
      constructor(from?: gc.core.time | null, to?: gc.core.time | null);
      static createFrom(fields: {from?: gc.core.time | null, to?: gc.core.time | null}): getSourceStats$args;
    }
    namespace getSourceStats$args {
      interface $Fields {
        from: 0;
        to: 1;
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

    class getGoldenCommunes$args extends gc.sdk.GCObject {
      static readonly _type = 'api::getGoldenCommunes$args';
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

    /**
     * A `node<T>` argument is a raw graph pointer and the runtime does not check its referent,
     * so a public endpoint takes the street's id and resolves it itself.
     */
    const getPoisInStreet: ((streetId: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<globalThis.Array<gc.mengplaz.AddressRecordRef>>) & {
      spawn(streetId: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<globalThis.Array<gc.mengplaz.AddressRecordRef>>>;
    };
    const searchStreet: ((e: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<globalThis.Array<gc.mengplaz.StreetRecordRef>>) & {
      spawn(e: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<globalThis.Array<gc.mengplaz.StreetRecordRef>>>;
    };
    const getPois: (($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<globalThis.Array<gc.api.AddressFeatures>>) & {
      spawn($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<globalThis.Array<gc.api.AddressFeatures>>>;
    };
    const getPoisByGeo: ((coords: gc.core.geo, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<gc.mengplaz.AddressRecordRef | null>) & {
      spawn(coords: gc.core.geo, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<gc.mengplaz.AddressRecordRef | null>>;
    };
    const getGoldenRecordDetails: ((uid: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<gc.api.GoldenRecordDetails>) & {
      spawn(uid: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<gc.api.GoldenRecordDetails>>;
    };
    /**
     * Returns the Golden POI associated with the given uid
     */
    const getGoldenRecordRefByUid: ((uid: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<gc.mengplaz.AddressRecordRef | null>) & {
      spawn(uid: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<gc.mengplaz.AddressRecordRef | null>>;
    };
    /**
     * Returns the Golden address associated with the given geoportail id
     */
    const getRecordByGeoportailID: ((id: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<gc.mengplaz.AddressRecordRef | null>) & {
      spawn(id: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<gc.mengplaz.AddressRecordRef | null>>;
    };
    /**
     * Returns all the localities in the Golden collection. Provides the localityId to be used with getGoldenStreetsByLocalityId
     */
    const getGoldenLocalities: ((communeName?: string | null, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<globalThis.Array<gc.api.GoldenIndex>>) & {
      spawn(communeName?: string | null, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<globalThis.Array<gc.api.GoldenIndex>>>;
    };
    /**
     * Returns all the communes in the Golden collection. `name` is what `getGoldenLocalities`
     * filters on - its `id` is the CACLR key, and no endpoint takes it.
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
     * One page of the Points Of Interest (POIs) in the Golden collection
     */
    const getGoldenRecords: ((offset: number | bigint, limit: number | bigint, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<gc.api.GoldenRecordsPage>) & {
      spawn(offset: number | bigint, limit: number | bigint, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<gc.api.GoldenRecordsPage>>;
    };
    const getGoldenRecordsGeoJson: (($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<gc.api.GeoJSON>) & {
      spawn($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<gc.api.GeoJSON>>;
    };
    /**
     * Attribution notice for the data exposed by this API. The address data derives in part
     * from OpenStreetMap, so this notice is what satisfies the ODbL attribution requirement.
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
    /**
     * One page of the golden records with their scores. `sortKey` is `"quality"`,
     * `"linkedCount"`, or null for the index's own order (by uid); `sortDir` is `"asc"` or
     * `"desc"` (default ascending).
     *
     * The ranking is computed live over the whole index, so page N continues page N-1's order
     * even as records change; only the returned rows have their addresses resolved.
     */
    const getGoldenRecordScores: ((offset: number | bigint, limit: number | bigint, sortKey?: string | null, sortDir?: string | null, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<gc.privateApi.GoldenRecordPage>) & {
      spawn(offset: number | bigint, limit: number | bigint, sortKey?: string | null, sortDir?: string | null, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<gc.privateApi.GoldenRecordPage>>;
    };
    const appInfo: (($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<gc.runtime.RuntimeInfo>) & {
      spawn($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<gc.runtime.RuntimeInfo>>;
    };
    const searchAddress: ((addr: string, max?: number | bigint | null, source?: string | null, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<globalThis.Array<gc.mengplaz.AddressRecordRef>>) & {
      spawn(addr: string, max?: number | bigint | null, source?: string | null, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<globalThis.Array<gc.mengplaz.AddressRecordRef>>>;
    };
    const getGoldenWithLinkedRecords: ((addr: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<gc.api.GoldenWithLinkedRecords | null>) & {
      spawn(addr: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<gc.api.GoldenWithLinkedRecords | null>>;
    };
    const getSourceStats: ((from?: gc.core.time | null, to?: gc.core.time | null, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<gc.privateApi.SourceStats>) & {
      spawn(from?: gc.core.time | null, to?: gc.core.time | null, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<gc.privateApi.SourceStats>>;
    };
    /**
     * How many addresses each source has stopped publishing. A record is deprecated once a
     * successful load no longer sees it; it stays in the graph and heals if the source
     * publishes it again. Pass a source name (CACLR, BDA, OSM, Golden) or null for all of them.
     */
    const getDeprecatedCounts: ((source?: string | null, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal) => Promise<gc.api.DeprecatedCounts>) & {
      spawn(source?: string | null, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.runtime.Task<gc.api.DeprecatedCounts>>;
    };
  }

  namespace backupExporter {
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
      createdAt: gc.core.time | null;
      deprecated: boolean | null;
      constructor(idGeoportail: string, idCaclr: number | bigint, number: string, postcode: string, position: gc.core.geo, streetName: string, streetIdCaclr: number | bigint, cityName: string, municipalityName: string, goldenUid?: string | null, lastSeenAt?: gc.core.time | null, createdAt?: gc.core.time | null, deprecated?: boolean | null);
      static createFrom(fields: {idGeoportail: string, idCaclr: number | bigint, number: string, postcode: string, position: gc.core.geo, streetName: string, streetIdCaclr: number | bigint, cityName: string, municipalityName: string, goldenUid?: string | null, lastSeenAt?: gc.core.time | null, createdAt?: gc.core.time | null, deprecated?: boolean | null}): BkBdaAddressDTO;
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
        createdAt: 11;
        deprecated: 12;
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
      createdAt: gc.core.time | null;
      linkedRecords: globalThis.Array<gc.backupExporter.BkGoldenLinkedRecordDTO> | null;
      quality: globalThis.Array<gc.backupExporter.BkGoldenQualityDTO> | null;
      constructor(uid: string, number: number | bigint, multipleCode: string, postCode: string, primaryLocation: gc.core.geo | null, secondaryLocations: globalThis.Map<string, gc.core.geo>, streetId: string | null, lastUpdate: gc.core.time, createdAt?: gc.core.time | null, linkedRecords?: globalThis.Array<gc.backupExporter.BkGoldenLinkedRecordDTO> | null, quality?: globalThis.Array<gc.backupExporter.BkGoldenQualityDTO> | null);
      static createFrom(fields: {uid: string, number: number | bigint, multipleCode: string, postCode: string, primaryLocation?: gc.core.geo | null, secondaryLocations: globalThis.Map<string, gc.core.geo>, streetId?: string | null, lastUpdate: gc.core.time, createdAt?: gc.core.time | null, linkedRecords?: globalThis.Array<gc.backupExporter.BkGoldenLinkedRecordDTO> | null, quality?: globalThis.Array<gc.backupExporter.BkGoldenQualityDTO> | null}): BkGoldenPoiDTO;
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
        createdAt: 8;
        linkedRecords: 9;
        quality: 10;
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
      createdAt: gc.core.time | null;
      deprecated: boolean | null;
      constructor(id: string, number: number | bigint, isNumberUndefined: boolean, multipleCode: string, postalCode: string, position: gc.core.geo | null, administrativeStatus: gc.caclr.CaclrAdminStatus, validityStartDate: gc.core.time, validityEndDate: gc.core.time | null, lastUpdate: gc.core.time, streetId?: string | null, goldenUid?: string | null, lastSeenAt?: gc.core.time | null, createdAt?: gc.core.time | null, deprecated?: boolean | null);
      static createFrom(fields: {id: string, number: number | bigint, isNumberUndefined: boolean, multipleCode: string, postalCode: string, position?: gc.core.geo | null, administrativeStatus: gc.caclr.CaclrAdminStatus, validityStartDate: gc.core.time, validityEndDate?: gc.core.time | null, lastUpdate: gc.core.time, streetId?: string | null, goldenUid?: string | null, lastSeenAt?: gc.core.time | null, createdAt?: gc.core.time | null, deprecated?: boolean | null}): BkCaclrBuildingDTO;
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
        createdAt: 13;
        deprecated: 14;
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
      caclrId: string | null;
      constructor(id: string, name: string, nameAliases: globalThis.Array<gc.mengplaz.Alias>, constituencyId: string, lastUpdate: gc.core.time, caclrId?: string | null);
      static createFrom(fields: {id: string, name: string, nameAliases: globalThis.Array<gc.mengplaz.Alias>, constituencyId: string, lastUpdate: gc.core.time, caclrId?: string | null}): BkGoldenCantonDTO;
    }
    namespace BkGoldenCantonDTO {
      interface $Fields {
        id: 0;
        name: 1;
        nameAliases: 2;
        constituencyId: 3;
        lastUpdate: 4;
        caclrId: 5;
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
      caclrId: string | null;
      constructor(id: string, name: string, nameAliases: globalThis.Array<gc.mengplaz.Alias>, cantonId: string, lastUpdate: gc.core.time, caclrId?: string | null);
      static createFrom(fields: {id: string, name: string, nameAliases: globalThis.Array<gc.mengplaz.Alias>, cantonId: string, lastUpdate: gc.core.time, caclrId?: string | null}): BkGoldenMunicipalityDTO;
    }
    namespace BkGoldenMunicipalityDTO {
      interface $Fields {
        id: 0;
        name: 1;
        nameAliases: 2;
        cantonId: 3;
        lastUpdate: 4;
        caclrId: 5;
      }
    }

    class BackupExporter extends gc.sdk.GCObject {
      static readonly _type = 'backupExporter::BackupExporter';
    }

    class BkGoldenCityDTO extends gc.sdk.GCObject {
      static readonly _type = 'backupExporter::BkGoldenCityDTO';
      static readonly $fields: BkGoldenCityDTO.$Fields;
      id: string;
      name: string;
      nameAliases: globalThis.Array<gc.mengplaz.Alias>;
      municipalityId: string;
      lastUpdate: gc.core.time;
      caclrId: string | null;
      constructor(id: string, name: string, nameAliases: globalThis.Array<gc.mengplaz.Alias>, municipalityId: string, lastUpdate: gc.core.time, caclrId?: string | null);
      static createFrom(fields: {id: string, name: string, nameAliases: globalThis.Array<gc.mengplaz.Alias>, municipalityId: string, lastUpdate: gc.core.time, caclrId?: string | null}): BkGoldenCityDTO;
    }
    namespace BkGoldenCityDTO {
      interface $Fields {
        id: 0;
        name: 1;
        nameAliases: 2;
        municipalityId: 3;
        lastUpdate: 4;
        caclrId: 5;
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

    class BkGoldenStreetDTO extends gc.sdk.GCObject {
      static readonly _type = 'backupExporter::BkGoldenStreetDTO';
      static readonly $fields: BkGoldenStreetDTO.$Fields;
      id: string;
      name: string;
      nameAliases: globalThis.Array<gc.mengplaz.Alias>;
      cityId: string;
      lastUpdate: gc.core.time;
      caclrId: string | null;
      constructor(id: string, name: string, nameAliases: globalThis.Array<gc.mengplaz.Alias>, cityId: string, lastUpdate: gc.core.time, caclrId?: string | null);
      static createFrom(fields: {id: string, name: string, nameAliases: globalThis.Array<gc.mengplaz.Alias>, cityId: string, lastUpdate: gc.core.time, caclrId?: string | null}): BkGoldenStreetDTO;
    }
    namespace BkGoldenStreetDTO {
      interface $Fields {
        id: 0;
        name: 1;
        nameAliases: 2;
        cityId: 3;
        lastUpdate: 4;
        caclrId: 5;
      }
    }

    class BkGoldenConstituencyDTO extends gc.sdk.GCObject {
      static readonly _type = 'backupExporter::BkGoldenConstituencyDTO';
      static readonly $fields: BkGoldenConstituencyDTO.$Fields;
      code: string;
      name: string;
      nameAliases: globalThis.Array<gc.mengplaz.Alias>;
      caclrCode: string | null;
      constructor(code: string, name: string, nameAliases: globalThis.Array<gc.mengplaz.Alias>, caclrCode?: string | null);
      static createFrom(fields: {code: string, name: string, nameAliases: globalThis.Array<gc.mengplaz.Alias>, caclrCode?: string | null}): BkGoldenConstituencyDTO;
    }
    namespace BkGoldenConstituencyDTO {
      interface $Fields {
        code: 0;
        name: 1;
        nameAliases: 2;
        caclrCode: 3;
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
      createdAt: gc.core.time | null;
      deprecated: boolean | null;
      constructor(id: number | bigint, position: gc.core.geo, city: string, postcode: string, street: string, number: string, refCaclr?: string | null, building?: string | null, kind?: string | null, streetRefName?: string | null, streetRefCity?: string | null, goldenUid?: string | null, lastSeenAt?: gc.core.time | null, createdAt?: gc.core.time | null, deprecated?: boolean | null);
      static createFrom(fields: {id: number | bigint, position: gc.core.geo, city: string, postcode: string, street: string, number: string, refCaclr?: string | null, building?: string | null, kind?: string | null, streetRefName?: string | null, streetRefCity?: string | null, goldenUid?: string | null, lastSeenAt?: gc.core.time | null, createdAt?: gc.core.time | null, deprecated?: boolean | null}): BkOsmAddressDTO;
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
        createdAt: 13;
        deprecated: 14;
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

    class BkSourceCountHistoryDTO extends gc.sdk.GCObject {
      static readonly _type = 'backupExporter::BkSourceCountHistoryDTO';
      static readonly $fields: BkSourceCountHistoryDTO.$Fields;
      sourceName: string;
      t: gc.core.time;
      total: number | bigint;
      active: number | bigint;
      linked: number | bigint;
      constructor(sourceName: string, t: gc.core.time, total: number | bigint, active: number | bigint, linked: number | bigint);
      static createFrom(fields: {sourceName: string, t: gc.core.time, total: number | bigint, active: number | bigint, linked: number | bigint}): BkSourceCountHistoryDTO;
    }
    namespace BkSourceCountHistoryDTO {
      interface $Fields {
        sourceName: 0;
        t: 1;
        total: 2;
        active: 3;
        linked: 4;
      }
    }

  }

  namespace backupImporter {
    class BackupImporter extends gc.sdk.GCObject {
      static readonly _type = 'backupImporter::BackupImporter';
    }

  }

  namespace bdaLoader {
    class BdaAddressLine extends gc.sdk.GCObject {
      static readonly _type = 'bdaLoader::BdaAddressLine';
      static readonly $fields: BdaAddressLine.$Fields;
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
      static createFrom(fields: {rue: string, numero: string, localite: string, code_postal: string, id_caclr_rue: number | bigint, id_caclr_bat: number | bigint, lat_wgs84: number, lon_wgs84: number, coord_est_luref?: gc.core.null_ | null, coord_nord_luref?: gc.core.null_ | null, id_geoportail: string, commune: string, lau2?: gc.core.null_ | null}): BdaAddressLine;
    }
    namespace BdaAddressLine {
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

    class BdaLoader extends gc.sdk.GCObject {
      static readonly _type = 'bdaLoader::BdaLoader';
    }

  }

  namespace osmLoader {
    class OsmLoader extends gc.sdk.GCObject {
      static readonly _type = 'osmLoader::OsmLoader';
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

  namespace caclrLoader {
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

    class CaclrLoader extends gc.sdk.GCObject {
      static readonly _type = 'caclrLoader::CaclrLoader';
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

    class CaclrBuildingsResult extends gc.sdk.GCObject {
      static readonly _type = 'caclrLoader::CaclrBuildingsResult';
      static readonly $fields: CaclrBuildingsResult.$Fields;
      addresses: globalThis.Array<gc.core.node<gc.caclr.CaclrAddress>>;
      abandonedCities: number | bigint;
      constructor(addresses: globalThis.Array<gc.core.node<gc.caclr.CaclrAddress>>, abandonedCities: number | bigint);
      static createFrom(fields: {addresses: globalThis.Array<gc.core.node<gc.caclr.CaclrAddress>>, abandonedCities: number | bigint}): CaclrBuildingsResult;
    }
    namespace CaclrBuildingsResult {
      interface $Fields {
        addresses: 0;
        abandonedCities: 1;
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

  }

  namespace bda {
    class BdaCity extends gc.sdk.GCObject {
      static readonly _type = 'bda::BdaCity';
      static readonly $fields: BdaCity.$Fields;
      name: string;
      municipality: gc.core.node<gc.bda.BdaMunicipality> | null;
      streets_by_name: gc.core.nodeIndex<string, gc.core.node<gc.bda.BdaStreet>> | null;
      constructor(name: string, municipality?: gc.core.node<gc.bda.BdaMunicipality> | null, streets_by_name?: gc.core.nodeIndex<string, gc.core.node<gc.bda.BdaStreet>> | null);
      static createFrom(fields: {name: string, municipality?: gc.core.node<gc.bda.BdaMunicipality> | null, streets_by_name?: gc.core.nodeIndex<string, gc.core.node<gc.bda.BdaStreet>> | null}): BdaCity;
    }
    namespace BdaCity {
      interface $Fields {
        name: 0;
        municipality: 1;
        streets_by_name: 2;
      }
    }

    class BdaSource extends gc.sdk.GCObject {
      static readonly _type = 'bda::BdaSource';
      static readonly $fields: BdaSource.$Fields;
      reconciliationReport: gc.core.node<gc.mengplaz.ReconciliationReport>;
      isReconciling: gc.core.node<boolean> | null;
      lastUpdate: gc.core.time | null;
      countHistory: gc.core.nodeTime<gc.mengplaz.SourceCountSnapshot> | null;
      constructor(reconciliationReport: gc.core.node<gc.mengplaz.ReconciliationReport>, isReconciling?: gc.core.node<boolean> | null, lastUpdate?: gc.core.time | null, countHistory?: gc.core.nodeTime<gc.mengplaz.SourceCountSnapshot> | null);
      static createFrom(fields: {reconciliationReport: gc.core.node<gc.mengplaz.ReconciliationReport>, isReconciling?: gc.core.node<boolean> | null, lastUpdate?: gc.core.time | null, countHistory?: gc.core.nodeTime<gc.mengplaz.SourceCountSnapshot> | null}): BdaSource;
    }
    namespace BdaSource {
      interface $Fields {
        reconciliationReport: 0;
        isReconciling: 1;
        lastUpdate: 2;
        countHistory: 3;
      }
    }

    class BdaMunicipality extends gc.sdk.GCObject {
      static readonly _type = 'bda::BdaMunicipality';
      static readonly $fields: BdaMunicipality.$Fields;
      name: string;
      cities_by_name: gc.core.nodeIndex<string, gc.core.node<gc.bda.BdaCity>> | null;
      constructor(name: string, cities_by_name?: gc.core.nodeIndex<string, gc.core.node<gc.bda.BdaCity>> | null);
      static createFrom(fields: {name: string, cities_by_name?: gc.core.nodeIndex<string, gc.core.node<gc.bda.BdaCity>> | null}): BdaMunicipality;
    }
    namespace BdaMunicipality {
      interface $Fields {
        name: 0;
        cities_by_name: 1;
      }
    }

    class BdaAddressFullRecord extends gc.sdk.GCObject {
      static readonly _type = 'bda::BdaAddressFullRecord';
      static readonly $fields: BdaAddressFullRecord.$Fields;
      id_geoportail: string;
      id_caclr: number | bigint;
      number: string;
      postcode: string;
      street: string;
      locality: string;
      commune: string;
      primaryLocation: gc.core.geo | null;
      sourceName: string;
      goldenRef: gc.core.node<gc.golden.GoldenAddress> | null;
      deprecated: boolean;
      lastSeenAt: gc.core.time | null;
      constructor(id_geoportail: string, id_caclr: number | bigint, number: string, postcode: string, street: string, locality: string, commune: string, primaryLocation: gc.core.geo | null, sourceName: string, goldenRef: gc.core.node<gc.golden.GoldenAddress> | null, deprecated: boolean, lastSeenAt?: gc.core.time | null);
      static createFrom(fields: {id_geoportail: string, id_caclr: number | bigint, number: string, postcode: string, street: string, locality: string, commune: string, primaryLocation?: gc.core.geo | null, sourceName: string, goldenRef?: gc.core.node<gc.golden.GoldenAddress> | null, deprecated: boolean, lastSeenAt?: gc.core.time | null}): BdaAddressFullRecord;
    }
    namespace BdaAddressFullRecord {
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

    class BdaAddress extends gc.sdk.GCObject {
      static readonly _type = 'bda::BdaAddress';
      static readonly $fields: BdaAddress.$Fields;
      goldenRef: gc.core.node<gc.golden.GoldenAddress> | null;
      createdAt: gc.core.time | null;
      lastSeenAt: gc.core.time | null;
      deprecated: boolean;
      number: string;
      postcode: string;
      position: gc.core.geo;
      id_caclr: number | bigint;
      id_geoportail: string;
      municipality: gc.core.node<gc.bda.BdaMunicipality>;
      city: gc.core.node<gc.bda.BdaCity>;
      street: gc.core.node<gc.bda.BdaStreet>;
      constructor(goldenRef: gc.core.node<gc.golden.GoldenAddress> | null, createdAt: gc.core.time | null, lastSeenAt: gc.core.time | null, deprecated: boolean, number: string, postcode: string, position: gc.core.geo, id_caclr: number | bigint, id_geoportail: string, municipality: gc.core.node<gc.bda.BdaMunicipality>, city: gc.core.node<gc.bda.BdaCity>, street: gc.core.node<gc.bda.BdaStreet>);
      static createFrom(fields: {goldenRef?: gc.core.node<gc.golden.GoldenAddress> | null, createdAt?: gc.core.time | null, lastSeenAt?: gc.core.time | null, deprecated: boolean, number: string, postcode: string, position: gc.core.geo, id_caclr: number | bigint, id_geoportail: string, municipality: gc.core.node<gc.bda.BdaMunicipality>, city: gc.core.node<gc.bda.BdaCity>, street: gc.core.node<gc.bda.BdaStreet>}): BdaAddress;
    }
    namespace BdaAddress {
      interface $Fields {
        goldenRef: 0;
        createdAt: 1;
        lastSeenAt: 2;
        deprecated: 3;
        number: 4;
        postcode: 5;
        position: 6;
        id_caclr: 7;
        id_geoportail: 8;
        municipality: 9;
        city: 10;
        street: 11;
      }
    }

    class BdaStreet extends gc.sdk.GCObject {
      static readonly _type = 'bda::BdaStreet';
      static readonly $fields: BdaStreet.$Fields;
      name: string;
      id_caclr: number | bigint;
      city: gc.core.node<gc.bda.BdaCity> | null;
      addresses_by_id: gc.core.nodeIndex<string, gc.core.node<gc.bda.BdaAddress>> | null;
      addresses_by_number: gc.core.nodeIndex<string, gc.core.node<gc.bda.BdaAddress>> | null;
      constructor(name: string, id_caclr: number | bigint, city?: gc.core.node<gc.bda.BdaCity> | null, addresses_by_id?: gc.core.nodeIndex<string, gc.core.node<gc.bda.BdaAddress>> | null, addresses_by_number?: gc.core.nodeIndex<string, gc.core.node<gc.bda.BdaAddress>> | null);
      static createFrom(fields: {name: string, id_caclr: number | bigint, city?: gc.core.node<gc.bda.BdaCity> | null, addresses_by_id?: gc.core.nodeIndex<string, gc.core.node<gc.bda.BdaAddress>> | null, addresses_by_number?: gc.core.nodeIndex<string, gc.core.node<gc.bda.BdaAddress>> | null}): BdaStreet;
    }
    namespace BdaStreet {
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
    class CaclrAddressFullRecord extends gc.sdk.GCObject {
      static readonly _type = 'caclr::CaclrAddressFullRecord';
      static readonly $fields: CaclrAddressFullRecord.$Fields;
      id: string;
      number: number | bigint;
      multipleCode: string;
      postcode: string;
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
      goldenRef: gc.core.node<gc.golden.GoldenAddress> | null;
      deprecated: boolean;
      lastSeenAt: gc.core.time | null;
      constructor(id: string, number: number | bigint, multipleCode: string, postcode: string, street: string | null, streetAliases: globalThis.Array<gc.mengplaz.Alias> | null, locality: string | null, localityAliases: globalThis.Array<gc.mengplaz.Alias> | null, commune: string | null, canton: string | null, constituency: string | null, primaryLocation: gc.core.geo | null, administrativeStatus: gc.caclr.CaclrAdminStatus, validityStartDate: gc.core.time, validityEndDate: gc.core.time | null, lastUpdate: gc.core.time, sourceName: string, goldenRef: gc.core.node<gc.golden.GoldenAddress> | null, deprecated: boolean, lastSeenAt?: gc.core.time | null);
      static createFrom(fields: {id: string, number: number | bigint, multipleCode: string, postcode: string, street?: string | null, streetAliases?: globalThis.Array<gc.mengplaz.Alias> | null, locality?: string | null, localityAliases?: globalThis.Array<gc.mengplaz.Alias> | null, commune?: string | null, canton?: string | null, constituency?: string | null, primaryLocation?: gc.core.geo | null, administrativeStatus: gc.caclr.CaclrAdminStatus, validityStartDate: gc.core.time, validityEndDate?: gc.core.time | null, lastUpdate: gc.core.time, sourceName: string, goldenRef?: gc.core.node<gc.golden.GoldenAddress> | null, deprecated: boolean, lastSeenAt?: gc.core.time | null}): CaclrAddressFullRecord;
    }
    namespace CaclrAddressFullRecord {
      interface $Fields {
        id: 0;
        number: 1;
        multipleCode: 2;
        postcode: 3;
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

    class CaclrSource extends gc.sdk.GCObject {
      static readonly _type = 'caclr::CaclrSource';
      static readonly $fields: CaclrSource.$Fields;
      reconciliationReport: gc.core.node<gc.mengplaz.ReconciliationReport>;
      isReconciling: gc.core.node<boolean> | null;
      lastUpdate: gc.core.time | null;
      countHistory: gc.core.nodeTime<gc.mengplaz.SourceCountSnapshot> | null;
      constructor(reconciliationReport: gc.core.node<gc.mengplaz.ReconciliationReport>, isReconciling?: gc.core.node<boolean> | null, lastUpdate?: gc.core.time | null, countHistory?: gc.core.nodeTime<gc.mengplaz.SourceCountSnapshot> | null);
      static createFrom(fields: {reconciliationReport: gc.core.node<gc.mengplaz.ReconciliationReport>, isReconciling?: gc.core.node<boolean> | null, lastUpdate?: gc.core.time | null, countHistory?: gc.core.nodeTime<gc.mengplaz.SourceCountSnapshot> | null}): CaclrSource;
    }
    namespace CaclrSource {
      interface $Fields {
        reconciliationReport: 0;
        isReconciling: 1;
        lastUpdate: 2;
        countHistory: 3;
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

    class CaclrAddress extends gc.sdk.GCObject {
      static readonly _type = 'caclr::CaclrAddress';
      static readonly $fields: CaclrAddress.$Fields;
      goldenRef: gc.core.node<gc.golden.GoldenAddress> | null;
      createdAt: gc.core.time | null;
      lastSeenAt: gc.core.time | null;
      deprecated: boolean;
      id: string;
      number: number | bigint;
      isNumberUndefined: boolean;
      postcode: string;
      multipleCode: string;
      position: gc.core.geo | null;
      administrativeStatus: gc.caclr.CaclrAdminStatus;
      validityStartDate: gc.core.time;
      validityEndDate: gc.core.time | null;
      lastUpdate: gc.core.time;
      street: gc.core.node<gc.caclr.CaclrStreet> | null;
      constructor(goldenRef: gc.core.node<gc.golden.GoldenAddress> | null, createdAt: gc.core.time | null, lastSeenAt: gc.core.time | null, deprecated: boolean, id: string, number: number | bigint, isNumberUndefined: boolean, postcode: string, multipleCode: string, position: gc.core.geo | null, administrativeStatus: gc.caclr.CaclrAdminStatus, validityStartDate: gc.core.time, validityEndDate: gc.core.time | null, lastUpdate: gc.core.time, street?: gc.core.node<gc.caclr.CaclrStreet> | null);
      static createFrom(fields: {goldenRef?: gc.core.node<gc.golden.GoldenAddress> | null, createdAt?: gc.core.time | null, lastSeenAt?: gc.core.time | null, deprecated: boolean, id: string, number: number | bigint, isNumberUndefined: boolean, postcode: string, multipleCode: string, position?: gc.core.geo | null, administrativeStatus: gc.caclr.CaclrAdminStatus, validityStartDate: gc.core.time, validityEndDate?: gc.core.time | null, lastUpdate: gc.core.time, street?: gc.core.node<gc.caclr.CaclrStreet> | null}): CaclrAddress;
    }
    namespace CaclrAddress {
      interface $Fields {
        goldenRef: 0;
        createdAt: 1;
        lastSeenAt: 2;
        deprecated: 3;
        id: 4;
        number: 5;
        isNumberUndefined: 6;
        postcode: 7;
        multipleCode: 8;
        position: 9;
        administrativeStatus: 10;
        validityStartDate: 11;
        validityEndDate: 12;
        lastUpdate: 13;
        street: 14;
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
      buildings_by_id: gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrAddress>>;
      buildings_by_number: gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrAddress>> | null;
      goldenStreet: gc.core.node<gc.golden.GoldenStreet> | null;
      constructor(id: string, name: string, nameUpperCase: string, keyWord: string, aliases: globalThis.Array<gc.mengplaz.Alias>, administrativeStatus: gc.caclr.CaclrAdminStatus, isPlace: boolean, validityStartDate: gc.core.time, validityEndDate: gc.core.time | null, lastUpdate: gc.core.time, city: gc.core.node<gc.caclr.CaclrCity>, buildings_by_id: gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrAddress>>, buildings_by_number?: gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrAddress>> | null, goldenStreet?: gc.core.node<gc.golden.GoldenStreet> | null);
      static createFrom(fields: {id: string, name: string, nameUpperCase: string, keyWord: string, aliases: globalThis.Array<gc.mengplaz.Alias>, administrativeStatus: gc.caclr.CaclrAdminStatus, isPlace: boolean, validityStartDate: gc.core.time, validityEndDate?: gc.core.time | null, lastUpdate: gc.core.time, city: gc.core.node<gc.caclr.CaclrCity>, buildings_by_id: gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrAddress>>, buildings_by_number?: gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrAddress>> | null, goldenStreet?: gc.core.node<gc.golden.GoldenStreet> | null}): CaclrStreet;
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

  }

  namespace errors {
    class MengplazMismatch extends gc.sdk.GCEnum {
      static readonly _type = 'errors::MengplazMismatch';
      static readonly $fields: MengplazMismatch[];
      key: MengplazMismatch.Field;
      constructor(type: gc.sdk.AbiType, offset: number, key: MengplazMismatch.Field);
      static STREET_MISMATCH: MengplazMismatch;
      static POSTCODE_MISMATCH: MengplazMismatch;
      static NUMBER_MISMATCH: MengplazMismatch;
      static COMPLEX_MISMATCH: MengplazMismatch;
      static MULTIPLE_MATCHES: MengplazMismatch;
    }
    namespace MengplazMismatch  {
      type Field = "STREET_MISMATCH"|"POSTCODE_MISMATCH"|"NUMBER_MISMATCH"|"COMPLEX_MISMATCH"|"MULTIPLE_MATCHES";
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

  namespace golden {
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

    class GoldenSource extends gc.sdk.GCObject {
      static readonly _type = 'golden::GoldenSource';
      static readonly $fields: GoldenSource.$Fields;
      reconciliationReport: gc.core.node<gc.mengplaz.ReconciliationReport>;
      isReconciling: gc.core.node<boolean> | null;
      lastUpdate: gc.core.time | null;
      countHistory: gc.core.nodeTime<gc.mengplaz.SourceCountSnapshot> | null;
      qualityHistory: gc.core.nodeTime<number>;
      constructor(reconciliationReport: gc.core.node<gc.mengplaz.ReconciliationReport>, isReconciling: gc.core.node<boolean> | null, lastUpdate: gc.core.time | null, countHistory: gc.core.nodeTime<gc.mengplaz.SourceCountSnapshot> | null, qualityHistory: gc.core.nodeTime<number>);
      static createFrom(fields: {reconciliationReport: gc.core.node<gc.mengplaz.ReconciliationReport>, isReconciling?: gc.core.node<boolean> | null, lastUpdate?: gc.core.time | null, countHistory?: gc.core.nodeTime<gc.mengplaz.SourceCountSnapshot> | null, qualityHistory: gc.core.nodeTime<number>}): GoldenSource;
    }
    namespace GoldenSource {
      interface $Fields {
        reconciliationReport: 0;
        isReconciling: 1;
        lastUpdate: 2;
        countHistory: 3;
        qualityHistory: 4;
      }
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
      addresses_by_id: gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenAddress>>;
      addresses_by_number: gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenAddress>> | null;
      caclrStreet: gc.core.node<gc.caclr.CaclrStreet> | null;
      constructor(id: string, name: string, nameAliases: globalThis.Array<gc.mengplaz.Alias>, lastUpdate: gc.core.time, city: gc.core.node<gc.golden.GoldenCity>, addresses_by_id: gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenAddress>>, addresses_by_number?: gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenAddress>> | null, caclrStreet?: gc.core.node<gc.caclr.CaclrStreet> | null);
      static createFrom(fields: {id: string, name: string, nameAliases: globalThis.Array<gc.mengplaz.Alias>, lastUpdate: gc.core.time, city: gc.core.node<gc.golden.GoldenCity>, addresses_by_id: gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenAddress>>, addresses_by_number?: gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenAddress>> | null, caclrStreet?: gc.core.node<gc.caclr.CaclrStreet> | null}): GoldenStreet;
    }
    namespace GoldenStreet {
      interface $Fields {
        id: 0;
        name: 1;
        nameAliases: 2;
        lastUpdate: 3;
        city: 4;
        addresses_by_id: 5;
        addresses_by_number: 6;
        caclrStreet: 7;
      }
    }

    class GoldenAddress extends gc.sdk.GCObject {
      static readonly _type = 'golden::GoldenAddress';
      static readonly $fields: GoldenAddress.$Fields;
      uid: string;
      number: number | bigint;
      multipleCode: string;
      postcode: string;
      primaryLocation: gc.core.geo | null;
      secondaryLocations: globalThis.Map<string, gc.core.geo>;
      lastUpdate: gc.core.time;
      createdAt: gc.core.time | null;
      street: gc.core.node<gc.golden.GoldenStreet> | null;
      linkedRecords: globalThis.Array<gc.mengplaz.LinkedRecordEntry>;
      quality: gc.core.nodeTime<gc.mengplaz.QualityEvent>;
      constructor(uid: string, number: number | bigint, multipleCode: string, postcode: string, primaryLocation: gc.core.geo | null, secondaryLocations: globalThis.Map<string, gc.core.geo>, lastUpdate: gc.core.time, createdAt: gc.core.time | null, street: gc.core.node<gc.golden.GoldenStreet> | null, linkedRecords: globalThis.Array<gc.mengplaz.LinkedRecordEntry>, quality: gc.core.nodeTime<gc.mengplaz.QualityEvent>);
      static createFrom(fields: {uid: string, number: number | bigint, multipleCode: string, postcode: string, primaryLocation?: gc.core.geo | null, secondaryLocations: globalThis.Map<string, gc.core.geo>, lastUpdate: gc.core.time, createdAt?: gc.core.time | null, street?: gc.core.node<gc.golden.GoldenStreet> | null, linkedRecords: globalThis.Array<gc.mengplaz.LinkedRecordEntry>, quality: gc.core.nodeTime<gc.mengplaz.QualityEvent>}): GoldenAddress;
    }
    namespace GoldenAddress {
      interface $Fields {
        uid: 0;
        number: 1;
        multipleCode: 2;
        postcode: 3;
        primaryLocation: 4;
        secondaryLocations: 5;
        lastUpdate: 6;
        createdAt: 7;
        street: 8;
        linkedRecords: 9;
        quality: 10;
      }
    }

  }

  namespace mengplaz {
    class DataSource extends gc.sdk.GCObject {
      static readonly _type = 'mengplaz::DataSource';
      static readonly $fields: DataSource.$Fields;
      reconciliationReport: gc.core.node<gc.mengplaz.ReconciliationReport>;
      isReconciling: gc.core.node<boolean> | null;
      lastUpdate: gc.core.time | null;
      countHistory: gc.core.nodeTime<gc.mengplaz.SourceCountSnapshot> | null;
    }
    namespace DataSource {
      interface $Fields {
        reconciliationReport: 0;
        isReconciling: 1;
        lastUpdate: 2;
        countHistory: 3;
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

    class AddressFullRecordRef extends gc.sdk.GCObject {
      static readonly _type = 'mengplaz::AddressFullRecordRef';
      static readonly $fields: AddressFullRecordRef.$Fields;
      ref: gc.core.node<gc.mengplaz.AddressRecordProvider>;
      id: string;
      record: any;
      matchScore: number | null;
      constructor(ref: gc.core.node<gc.mengplaz.AddressRecordProvider>, id: string, record: any, matchScore?: number | null);
      static createFrom(fields: {ref: gc.core.node<gc.mengplaz.AddressRecordProvider>, id: string, record: any, matchScore?: number | null}): AddressFullRecordRef;
    }
    namespace AddressFullRecordRef {
      interface $Fields {
        ref: 0;
        id: 1;
        record: 2;
        matchScore: 3;
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

    class LinkedRecordEntry extends gc.sdk.GCObject {
      static readonly _type = 'mengplaz::LinkedRecordEntry';
      static readonly $fields: LinkedRecordEntry.$Fields;
      record: gc.core.node<gc.mengplaz.AddressRecordProvider>;
      score: number;
      detailedScore: gc.core.node<gc.mengplaz.ReconciliationCandidateScore> | null;
      constructor(record: gc.core.node<gc.mengplaz.AddressRecordProvider>, score: number, detailedScore?: gc.core.node<gc.mengplaz.ReconciliationCandidateScore> | null);
      static createFrom(fields: {record: gc.core.node<gc.mengplaz.AddressRecordProvider>, score: number, detailedScore?: gc.core.node<gc.mengplaz.ReconciliationCandidateScore> | null}): LinkedRecordEntry;
    }
    namespace LinkedRecordEntry {
      interface $Fields {
        record: 0;
        score: 1;
        detailedScore: 2;
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

    class ExternalAddressRecord extends gc.sdk.GCObject {
      static readonly _type = 'mengplaz::ExternalAddressRecord';
      static readonly $fields: ExternalAddressRecord.$Fields;
      goldenRef: gc.core.node<gc.golden.GoldenAddress> | null;
      createdAt: gc.core.time | null;
      lastSeenAt: gc.core.time | null;
      deprecated: boolean;
    }
    namespace ExternalAddressRecord {
      interface $Fields {
        goldenRef: 0;
        createdAt: 1;
        lastSeenAt: 2;
        deprecated: 3;
      }
    }

    class StreetRecordProvider extends gc.sdk.GCObject {
      static readonly _type = 'mengplaz::StreetRecordProvider';
    }

    class AddressRecordProvider extends gc.sdk.GCObject {
      static readonly _type = 'mengplaz::AddressRecordProvider';
    }

    class StreetRecordRef extends gc.sdk.GCObject {
      static readonly _type = 'mengplaz::StreetRecordRef';
      static readonly $fields: StreetRecordRef.$Fields;
      ref: gc.core.node<gc.mengplaz.StreetRecordProvider>;
      id: string;
      record: gc.mengplaz.StreetRecord;
      score: number;
      constructor(ref: gc.core.node<gc.mengplaz.StreetRecordProvider>, id: string, record: gc.mengplaz.StreetRecord, score: number);
      static createFrom(fields: {ref: gc.core.node<gc.mengplaz.StreetRecordProvider>, id: string, record: gc.mengplaz.StreetRecord, score: number}): StreetRecordRef;
    }
    namespace StreetRecordRef {
      interface $Fields {
        ref: 0;
        id: 1;
        record: 2;
        score: 3;
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

    class AddressRecord extends gc.sdk.GCObject {
      static readonly _type = 'mengplaz::AddressRecord';
      static readonly $fields: AddressRecord.$Fields;
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
      goldenRef: gc.core.node<gc.golden.GoldenAddress> | null;
      quality: number | null;
      constructor(uid: string | null, number: string | null, postcode: string | null, street: string | null, streetAliases: globalThis.Array<gc.mengplaz.Alias> | null, locality: string | null, localityAliases: globalThis.Array<gc.mengplaz.Alias> | null, commune: string | null, primaryLocation: gc.core.geo | null, secondaryLocations: globalThis.Map<string, gc.core.geo> | null, sourceName: string, goldenRef?: gc.core.node<gc.golden.GoldenAddress> | null, quality?: number | null);
      static createFrom(fields: {uid?: string | null, number?: string | null, postcode?: string | null, street?: string | null, streetAliases?: globalThis.Array<gc.mengplaz.Alias> | null, locality?: string | null, localityAliases?: globalThis.Array<gc.mengplaz.Alias> | null, commune?: string | null, primaryLocation?: gc.core.geo | null, secondaryLocations?: globalThis.Map<string, gc.core.geo> | null, sourceName: string, goldenRef?: gc.core.node<gc.golden.GoldenAddress> | null, quality?: number | null}): AddressRecord;
    }
    namespace AddressRecord {
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

    class ReconciliationReport extends gc.sdk.GCObject {
      static readonly _type = 'mengplaz::ReconciliationReport';
      static readonly $fields: ReconciliationReport.$Fields;
      date: gc.core.time;
      linked: gc.core.nodeIndex<gc.core.node<gc.mengplaz.AddressRecordProvider>, gc.mengplaz.ReconciliationCandidate>;
      unlinked: gc.core.nodeIndex<gc.core.node<gc.mengplaz.AddressRecordProvider>, globalThis.Array<gc.mengplaz.ReconciliationCandidate>>;
      constructor(date: gc.core.time, linked: gc.core.nodeIndex<gc.core.node<gc.mengplaz.AddressRecordProvider>, gc.mengplaz.ReconciliationCandidate>, unlinked: gc.core.nodeIndex<gc.core.node<gc.mengplaz.AddressRecordProvider>, globalThis.Array<gc.mengplaz.ReconciliationCandidate>>);
      static createFrom(fields: {date: gc.core.time, linked: gc.core.nodeIndex<gc.core.node<gc.mengplaz.AddressRecordProvider>, gc.mengplaz.ReconciliationCandidate>, unlinked: gc.core.nodeIndex<gc.core.node<gc.mengplaz.AddressRecordProvider>, globalThis.Array<gc.mengplaz.ReconciliationCandidate>>}): ReconciliationReport;
    }
    namespace ReconciliationReport {
      interface $Fields {
        date: 0;
        linked: 1;
        unlinked: 2;
      }
    }

    class SourceCountSnapshot extends gc.sdk.GCObject {
      static readonly _type = 'mengplaz::SourceCountSnapshot';
      static readonly $fields: SourceCountSnapshot.$Fields;
      total: number | bigint;
      active: number | bigint;
      linked: number | bigint;
      constructor(total: number | bigint, active: number | bigint, linked: number | bigint);
      static createFrom(fields: {total: number | bigint, active: number | bigint, linked: number | bigint}): SourceCountSnapshot;
    }
    namespace SourceCountSnapshot {
      interface $Fields {
        total: 0;
        active: 1;
        linked: 2;
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

    class SearchResult extends gc.sdk.GCObject {
      static readonly _type = 'mengplaz::SearchResult';
      static readonly $fields: SearchResult.$Fields;
      sourceRecord: gc.core.node<gc.mengplaz.AddressRecordProvider>;
      candidates: globalThis.Array<gc.mengplaz.CandidateMatch<gc.core.node<gc.mengplaz.AddressRecordProvider>>>;
      constructor(sourceRecord: gc.core.node<gc.mengplaz.AddressRecordProvider>, candidates: globalThis.Array<gc.mengplaz.CandidateMatch<gc.core.node<gc.mengplaz.AddressRecordProvider>>>);
      static createFrom(fields: {sourceRecord: gc.core.node<gc.mengplaz.AddressRecordProvider>, candidates: globalThis.Array<gc.mengplaz.CandidateMatch<gc.core.node<gc.mengplaz.AddressRecordProvider>>>}): SearchResult;
    }
    namespace SearchResult {
      interface $Fields {
        sourceRecord: 0;
        candidates: 1;
      }
    }

    class AddressRecordRef extends gc.sdk.GCObject {
      static readonly _type = 'mengplaz::AddressRecordRef';
      static readonly $fields: AddressRecordRef.$Fields;
      ref: gc.core.node<gc.mengplaz.AddressRecordProvider>;
      record: gc.mengplaz.AddressRecord;
      constructor(ref: gc.core.node<gc.mengplaz.AddressRecordProvider>, record: gc.mengplaz.AddressRecord);
      static createFrom(fields: {ref: gc.core.node<gc.mengplaz.AddressRecordProvider>, record: gc.mengplaz.AddressRecord}): AddressRecordRef;
    }
    namespace AddressRecordRef {
      interface $Fields {
        ref: 0;
        record: 1;
      }
    }

    class SearchRequest extends gc.sdk.GCObject {
      static readonly _type = 'mengplaz::SearchRequest';
      static readonly $fields: SearchRequest.$Fields;
      items: globalThis.Array<gc.core.node<gc.mengplaz.AddressRecordProvider>>;
      params: gc.mengplaz.SearchParameters;
      constructor(items: globalThis.Array<gc.core.node<gc.mengplaz.AddressRecordProvider>>, params: gc.mengplaz.SearchParameters);
      static createFrom(fields: {items: globalThis.Array<gc.core.node<gc.mengplaz.AddressRecordProvider>>, params: gc.mengplaz.SearchParameters}): SearchRequest;
    }
    namespace SearchRequest {
      interface $Fields {
        items: 0;
        params: 1;
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
      sourceRecord: gc.core.node<gc.mengplaz.AddressRecordProvider> | null;
      eventType: gc.mengplaz.QualityEventType;
      constructor(score: number, sourceRecord: gc.core.node<gc.mengplaz.AddressRecordProvider> | null, eventType: gc.mengplaz.QualityEventType);
      static createFrom(fields: {score: number, sourceRecord?: gc.core.node<gc.mengplaz.AddressRecordProvider> | null, eventType: gc.mengplaz.QualityEventType}): QualityEvent;
    }
    namespace QualityEvent {
      interface $Fields {
        score: 0;
        sourceRecord: 1;
        eventType: 2;
      }
    }

    class ReconciliationCandidate extends gc.sdk.GCObject {
      static readonly _type = 'mengplaz::ReconciliationCandidate';
      static readonly $fields: ReconciliationCandidate.$Fields;
      candidateRecord: gc.core.node<gc.mengplaz.AddressRecordProvider>;
      score: gc.mengplaz.ReconciliationCandidateScore | null;
      mismatch: gc.errors.MengplazMismatch | null;
      detailedScore: gc.core.node<gc.mengplaz.ReconciliationCandidateScore> | null;
      constructor(candidateRecord: gc.core.node<gc.mengplaz.AddressRecordProvider>, score?: gc.mengplaz.ReconciliationCandidateScore | null, mismatch?: gc.errors.MengplazMismatch | null, detailedScore?: gc.core.node<gc.mengplaz.ReconciliationCandidateScore> | null);
      static createFrom(fields: {candidateRecord: gc.core.node<gc.mengplaz.AddressRecordProvider>, score?: gc.mengplaz.ReconciliationCandidateScore | null, mismatch?: gc.errors.MengplazMismatch | null, detailedScore?: gc.core.node<gc.mengplaz.ReconciliationCandidateScore> | null}): ReconciliationCandidate;
    }
    namespace ReconciliationCandidate {
      interface $Fields {
        candidateRecord: 0;
        score: 1;
        mismatch: 2;
        detailedScore: 3;
      }
    }

  }

  namespace osm {
    class OsmSource extends gc.sdk.GCObject {
      static readonly _type = 'osm::OsmSource';
      static readonly $fields: OsmSource.$Fields;
      reconciliationReport: gc.core.node<gc.mengplaz.ReconciliationReport>;
      isReconciling: gc.core.node<boolean> | null;
      lastUpdate: gc.core.time | null;
      countHistory: gc.core.nodeTime<gc.mengplaz.SourceCountSnapshot> | null;
      constructor(reconciliationReport: gc.core.node<gc.mengplaz.ReconciliationReport>, isReconciling?: gc.core.node<boolean> | null, lastUpdate?: gc.core.time | null, countHistory?: gc.core.nodeTime<gc.mengplaz.SourceCountSnapshot> | null);
      static createFrom(fields: {reconciliationReport: gc.core.node<gc.mengplaz.ReconciliationReport>, isReconciling?: gc.core.node<boolean> | null, lastUpdate?: gc.core.time | null, countHistory?: gc.core.nodeTime<gc.mengplaz.SourceCountSnapshot> | null}): OsmSource;
    }
    namespace OsmSource {
      interface $Fields {
        reconciliationReport: 0;
        isReconciling: 1;
        lastUpdate: 2;
        countHistory: 3;
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
      goldenRef: gc.core.node<gc.golden.GoldenAddress> | null;
      createdAt: gc.core.time | null;
      lastSeenAt: gc.core.time | null;
      deprecated: boolean;
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
      constructor(goldenRef: gc.core.node<gc.golden.GoldenAddress> | null, createdAt: gc.core.time | null, lastSeenAt: gc.core.time | null, deprecated: boolean, id: number | bigint, position: gc.core.geo, city: string, postcode: string, street: string, number: string, ref_caclr?: string | null, building?: string | null, kind?: string | null, streetRef?: gc.core.node<gc.osm.OsmStreet> | null);
      static createFrom(fields: {goldenRef?: gc.core.node<gc.golden.GoldenAddress> | null, createdAt?: gc.core.time | null, lastSeenAt?: gc.core.time | null, deprecated: boolean, id: number | bigint, position: gc.core.geo, city: string, postcode: string, street: string, number: string, ref_caclr?: string | null, building?: string | null, kind?: string | null, streetRef?: gc.core.node<gc.osm.OsmStreet> | null}): OsmAddress;
    }
    namespace OsmAddress {
      interface $Fields {
        goldenRef: 0;
        createdAt: 1;
        lastSeenAt: 2;
        deprecated: 3;
        id: 4;
        position: 5;
        city: 6;
        postcode: 7;
        street: 8;
        number: 9;
        ref_caclr: 10;
        building: 11;
        kind: 12;
        streetRef: 13;
      }
    }

    class OsmAddressFullRecord extends gc.sdk.GCObject {
      static readonly _type = 'osm::OsmAddressFullRecord';
      static readonly $fields: OsmAddressFullRecord.$Fields;
      id: string;
      number: string;
      postcode: string;
      street: string;
      locality: string;
      primaryLocation: gc.core.geo | null;
      sourceName: string;
      goldenRef: gc.core.node<gc.golden.GoldenAddress> | null;
      id_caclr: string | null;
      kind: string | null;
      deprecated: boolean;
      lastSeenAt: gc.core.time | null;
      constructor(id: string, number: string, postcode: string, street: string, locality: string, primaryLocation: gc.core.geo | null, sourceName: string, goldenRef: gc.core.node<gc.golden.GoldenAddress> | null, id_caclr: string | null, kind: string | null, deprecated: boolean, lastSeenAt?: gc.core.time | null);
      static createFrom(fields: {id: string, number: string, postcode: string, street: string, locality: string, primaryLocation?: gc.core.geo | null, sourceName: string, goldenRef?: gc.core.node<gc.golden.GoldenAddress> | null, id_caclr?: string | null, kind?: string | null, deprecated: boolean, lastSeenAt?: gc.core.time | null}): OsmAddressFullRecord;
    }
    namespace OsmAddressFullRecord {
      interface $Fields {
        id: 0;
        number: 1;
        postcode: 2;
        street: 3;
        locality: 4;
        primaryLocation: 5;
        sourceName: 6;
        goldenRef: 7;
        id_caclr: 8;
        kind: 9;
        deprecated: 10;
        lastSeenAt: 11;
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

  }

  namespace goldenStreetSearch {
    class GoldenStreetSearch extends gc.sdk.GCObject {
      static readonly _type = 'goldenStreetSearch::GoldenStreetSearch';
    }

    class GoldenStreetIndexStats extends gc.sdk.GCObject {
      static readonly _type = 'goldenStreetSearch::GoldenStreetIndexStats';
      static readonly $fields: GoldenStreetIndexStats.$Fields;
      built: boolean;
      docs: number | bigint;
      terms: number | bigint;
      avgLen: number;
      dirty: number | bigint;
      constructor(built: boolean, docs: number | bigint, terms: number | bigint, avgLen: number, dirty: number | bigint);
      static createFrom(fields: {built: boolean, docs: number | bigint, terms: number | bigint, avgLen: number, dirty: number | bigint}): GoldenStreetIndexStats;
    }
    namespace GoldenStreetIndexStats {
      interface $Fields {
        built: 0;
        docs: 1;
        terms: 2;
        avgLen: 3;
        dirty: 4;
      }
    }

  }

  namespace goldenTextBench {
    class GoldenBenchCase extends gc.sdk.GCObject {
      static readonly _type = 'goldenTextBench::GoldenBenchCase';
      static readonly $fields: GoldenBenchCase.$Fields;
      name: string;
      query: string;
      want: string;
      constructor(name: string, query: string, want: string);
      static createFrom(fields: {name: string, query: string, want: string}): GoldenBenchCase;
    }
    namespace GoldenBenchCase {
      interface $Fields {
        name: 0;
        query: 1;
        want: 2;
      }
    }

  }

  namespace statsService {
    class StatsService extends gc.sdk.GCObject {
      static readonly _type = 'statsService::StatsService';
    }

  }

  namespace goldenTextSearch {
    class GoldenTextSearch extends gc.sdk.GCObject {
      static readonly _type = 'goldenTextSearch::GoldenTextSearch';
    }

    class GoldenTextIndexStats extends gc.sdk.GCObject {
      static readonly _type = 'goldenTextSearch::GoldenTextIndexStats';
      static readonly $fields: GoldenTextIndexStats.$Fields;
      built: boolean;
      docs: number | bigint;
      terms: number | bigint;
      avgLen: number;
      dirty: number | bigint;
      constructor(built: boolean, docs: number | bigint, terms: number | bigint, avgLen: number, dirty: number | bigint);
      static createFrom(fields: {built: boolean, docs: number | bigint, terms: number | bigint, avgLen: number, dirty: number | bigint}): GoldenTextIndexStats;
    }
    namespace GoldenTextIndexStats {
      interface $Fields {
        built: 0;
        docs: 1;
        terms: 2;
        avgLen: 3;
        dirty: 4;
      }
    }

  }

  namespace sourceTextSearch {
    class SourceTextIndexStats extends gc.sdk.GCObject {
      static readonly _type = 'sourceTextSearch::SourceTextIndexStats';
      static readonly $fields: SourceTextIndexStats.$Fields;
      source: string;
      built: boolean;
      docs: number | bigint;
      terms: number | bigint;
      avgLen: number;
      dirty: number | bigint;
      constructor(source: string, built: boolean, docs: number | bigint, terms: number | bigint, avgLen: number, dirty: number | bigint);
      static createFrom(fields: {source: string, built: boolean, docs: number | bigint, terms: number | bigint, avgLen: number, dirty: number | bigint}): SourceTextIndexStats;
    }
    namespace SourceTextIndexStats {
      interface $Fields {
        source: 0;
        built: 1;
        docs: 2;
        terms: 3;
        avgLen: 4;
        dirty: 5;
      }
    }

    class SourceTextSearch extends gc.sdk.GCObject {
      static readonly _type = 'sourceTextSearch::SourceTextSearch';
    }

  }

  namespace goldenServices {
    class GoldenServices extends gc.sdk.GCObject {
      static readonly _type = 'goldenServices::GoldenServices';
    }

  }

  namespace updateService {
    class UpdateService extends gc.sdk.GCObject {
      static readonly _type = 'updateService::UpdateService';
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

  namespace http {
    class HttpReader<T = any> extends gc.sdk.GCObject {
      static readonly _type = 'http::HttpReader';
    }

    class FileSink extends gc.sdk.GCObject {
      static readonly _type = 'http::FileSink';
      static readonly $fields: FileSink.$Fields;
      path: string;
      append: boolean | null;
      constructor(path: string, append?: boolean | null);
      static createFrom(fields: {path: string, append?: boolean | null}): FileSink;
    }
    namespace FileSink {
      interface $Fields {
        path: 0;
        append: 1;
      }
    }

    class FileBody extends gc.sdk.GCObject {
      static readonly _type = 'http::FileBody';
      static readonly $fields: FileBody.$Fields;
      path: string;
      offset: number | bigint | null;
      size: number | bigint | null;
      constructor(path: string, offset?: number | bigint | null, size?: number | bigint | null);
      static createFrom(fields: {path: string, offset?: number | bigint | null, size?: number | bigint | null}): FileBody;
    }
    namespace FileBody {
      interface $Fields {
        path: 0;
        offset: 1;
        size: 2;
      }
    }

    class HttpRequest extends gc.sdk.GCObject {
      static readonly _type = 'http::HttpRequest';
      static readonly $fields: HttpRequest.$Fields;
      method: gc.http.HttpMethod;
      url: string;
      headers: globalThis.Map<string, string> | null;
      body: string | null;
      body_file: gc.http.FileBody | null;
      response_file: gc.http.FileSink | null;
      timeout: gc.core.duration | null;
      max_response_size: number | bigint | null;
      unix_socket: string | null;
      constructor(method: gc.http.HttpMethod, url: string, headers?: globalThis.Map<string, string> | null, body?: string | null, body_file?: gc.http.FileBody | null, response_file?: gc.http.FileSink | null, timeout?: gc.core.duration | null, max_response_size?: number | bigint | null, unix_socket?: string | null);
      static createFrom(fields: {method: gc.http.HttpMethod, url: string, headers?: globalThis.Map<string, string> | null, body?: string | null, body_file?: gc.http.FileBody | null, response_file?: gc.http.FileSink | null, timeout?: gc.core.duration | null, max_response_size?: number | bigint | null, unix_socket?: string | null}): HttpRequest;
    }
    namespace HttpRequest {
      interface $Fields {
        method: 0;
        url: 1;
        headers: 2;
        body: 3;
        body_file: 4;
        response_file: 5;
        timeout: 6;
        max_response_size: 7;
        unix_socket: 8;
      }
    }

    class HttpMethod extends gc.sdk.GCEnum {
      static readonly _type = 'http::HttpMethod';
      static readonly $fields: HttpMethod[];
      key: HttpMethod.Field;
      constructor(type: gc.sdk.AbiType, offset: number, key: HttpMethod.Field);
      static GET: HttpMethod;
      static HEAD: HttpMethod;
      static POST: HttpMethod;
      static PUT: HttpMethod;
      static DELETE: HttpMethod;
      static CONNECT: HttpMethod;
      static OPTIONS: HttpMethod;
      static TRACE: HttpMethod;
      static PATCH: HttpMethod;
    }
    namespace HttpMethod  {
      type Field = "GET"|"HEAD"|"POST"|"PUT"|"DELETE"|"CONNECT"|"OPTIONS"|"TRACE"|"PATCH";
    }

    class HttpResponse<T = any> extends gc.sdk.GCObject {
      static readonly _type = 'http::HttpResponse';
      static readonly $fields: HttpResponse.$Fields;
      status_code: number | bigint;
      headers: globalThis.Map<string, string>;
      content: T | null;
      error_msg: string | null;
      constructor(status_code: number | bigint, headers: globalThis.Map<string, string>, content?: T | null, error_msg?: string | null);
      static createFrom<T>(fields: {status_code: number | bigint, headers: globalThis.Map<string, string>, content?: T | null, error_msg?: string | null}): HttpResponse;
    }
    namespace HttpResponse {
      interface $Fields {
        status_code: 0;
        headers: 1;
        content: 2;
        error_msg: 3;
      }
    }

    class Http<T = any> extends gc.sdk.GCObject {
      static readonly _type = 'http::Http';
    }

  }

  namespace bm25_engine {
    class BM25Result extends gc.sdk.GCObject {
      static readonly _type = 'bm25_engine::BM25Result';
      static readonly $fields: BM25Result.$Fields;
      docId: number | bigint;
      score: number;
      matchedTerms: globalThis.Array<string>;
      constructor(docId: number | bigint, score: number, matchedTerms: globalThis.Array<string>);
      static createFrom(fields: {docId: number | bigint, score: number, matchedTerms: globalThis.Array<string>}): BM25Result;
    }
    namespace BM25Result {
      interface $Fields {
        docId: 0;
        score: 1;
        matchedTerms: 2;
      }
    }

    class BM25Engine extends gc.sdk.GCObject {
      static readonly _type = 'bm25_engine::BM25Engine';
    }

  }

  namespace boolean_engine {
    class BooleanAccel extends gc.sdk.GCObject {
      static readonly _type = 'boolean_engine::BooleanAccel';
    }

    class BooleanEngine extends gc.sdk.GCObject {
      static readonly _type = 'boolean_engine::BooleanEngine';
    }

  }

  namespace curation_engine {
    class CurationHelper extends gc.sdk.GCObject {
      static readonly _type = 'curation_engine::CurationHelper';
    }

  }

  namespace fuzzy_engine {
    class FuzzyEngine extends gc.sdk.GCObject {
      static readonly _type = 'fuzzy_engine::FuzzyEngine';
    }

    class TrigramCandidate extends gc.sdk.GCObject {
      static readonly _type = 'fuzzy_engine::TrigramCandidate';
      static readonly $fields: TrigramCandidate.$Fields;
      overlap: number | bigint;
      ord: number | bigint;
      constructor(overlap: number | bigint, ord: number | bigint);
      static createFrom(fields: {overlap: number | bigint, ord: number | bigint}): TrigramCandidate;
    }
    namespace TrigramCandidate {
      interface $Fields {
        overlap: 0;
        ord: 1;
      }
    }

    class FuzzyScoreResult extends gc.sdk.GCObject {
      static readonly _type = 'fuzzy_engine::FuzzyScoreResult';
      static readonly $fields: FuzzyScoreResult.$Fields;
      score: number;
      matched: boolean;
      constructor(score: number, matched: boolean);
      static createFrom(fields: {score: number, matched: boolean}): FuzzyScoreResult;
    }
    namespace FuzzyScoreResult {
      interface $Fields {
        score: 0;
        matched: 1;
      }
    }

  }

  namespace percolate_engine {
    class PercolateIndex extends gc.sdk.GCObject {
      static readonly _type = 'percolate_engine::PercolateIndex';
      static readonly $fields: PercolateIndex.$Fields;
      config: gc.text_index_types.TextIndexConfig;
      queries: gc.core.nodeIndex<string, gc.core.node<gc.percolate_engine.PercolatedQuery>> | null;
      constructor(config: gc.text_index_types.TextIndexConfig, queries?: gc.core.nodeIndex<string, gc.core.node<gc.percolate_engine.PercolatedQuery>> | null);
      static createFrom(fields: {config: gc.text_index_types.TextIndexConfig, queries?: gc.core.nodeIndex<string, gc.core.node<gc.percolate_engine.PercolatedQuery>> | null}): PercolateIndex;
    }
    namespace PercolateIndex {
      interface $Fields {
        config: 0;
        queries: 1;
      }
    }

    class PercolateEngine extends gc.sdk.GCObject {
      static readonly _type = 'percolate_engine::PercolateEngine';
    }

    class PercolatedQuery extends gc.sdk.GCObject {
      static readonly _type = 'percolate_engine::PercolatedQuery';
      static readonly $fields: PercolatedQuery.$Fields;
      id: string;
      queryText: string;
      mode: gc.text_index_types.PercolateMode;
      cachedTokens: globalThis.Array<string> | null;
      cachedBooleanTerms: globalThis.Array<string> | null;
      cachedExcludeTerms: globalThis.Array<string> | null;
      cachedBooleanRequiresAll: boolean | null;
      constructor(id: string, queryText: string, mode: gc.text_index_types.PercolateMode, cachedTokens?: globalThis.Array<string> | null, cachedBooleanTerms?: globalThis.Array<string> | null, cachedExcludeTerms?: globalThis.Array<string> | null, cachedBooleanRequiresAll?: boolean | null);
      static createFrom(fields: {id: string, queryText: string, mode: gc.text_index_types.PercolateMode, cachedTokens?: globalThis.Array<string> | null, cachedBooleanTerms?: globalThis.Array<string> | null, cachedExcludeTerms?: globalThis.Array<string> | null, cachedBooleanRequiresAll?: boolean | null}): PercolatedQuery;
    }
    namespace PercolatedQuery {
      interface $Fields {
        id: 0;
        queryText: 1;
        mode: 2;
        cachedTokens: 3;
        cachedBooleanTerms: 4;
        cachedExcludeTerms: 5;
        cachedBooleanRequiresAll: 6;
      }
    }

    class PercolateBooleanPlan extends gc.sdk.GCObject {
      static readonly _type = 'percolate_engine::PercolateBooleanPlan';
      static readonly $fields: PercolateBooleanPlan.$Fields;
      terms: globalThis.Array<string>;
      excludeTerms: globalThis.Array<string>;
      requiresAll: boolean;
      constructor(terms: globalThis.Array<string>, excludeTerms: globalThis.Array<string>, requiresAll: boolean);
      static createFrom(fields: {terms: globalThis.Array<string>, excludeTerms: globalThis.Array<string>, requiresAll: boolean}): PercolateBooleanPlan;
    }
    namespace PercolateBooleanPlan {
      interface $Fields {
        terms: 0;
        excludeTerms: 1;
        requiresAll: 2;
      }
    }

  }

  namespace phonetic_engine {
    class PhoneticEngine extends gc.sdk.GCObject {
      static readonly _type = 'phonetic_engine::PhoneticEngine';
    }

    class PhoneticCodec extends gc.sdk.GCObject {
      static readonly _type = 'phonetic_engine::PhoneticCodec';
    }

  }

  namespace phrase_engine {
    class PhraseCandidate extends gc.sdk.GCObject {
      static readonly _type = 'phrase_engine::PhraseCandidate';
      static readonly $fields: PhraseCandidate.$Fields;
      docId: number | bigint;
      prelimScore: number;
      constructor(docId: number | bigint, prelimScore: number);
      static createFrom(fields: {docId: number | bigint, prelimScore: number}): PhraseCandidate;
    }
    namespace PhraseCandidate {
      interface $Fields {
        docId: 0;
        prelimScore: 1;
      }
    }

    class PhraseEngine extends gc.sdk.GCObject {
      static readonly _type = 'phrase_engine::PhraseEngine';
    }

    class PhraseAccel extends gc.sdk.GCObject {
      static readonly _type = 'phrase_engine::PhraseAccel';
    }

  }

  namespace prefix_engine {
    class PrefixEngine extends gc.sdk.GCObject {
      static readonly _type = 'prefix_engine::PrefixEngine';
    }

  }

  namespace proximity_engine {
    class ProximityEngine extends gc.sdk.GCObject {
      static readonly _type = 'proximity_engine::ProximityEngine';
    }

  }

  namespace quorum_engine {
    class QuorumEngine extends gc.sdk.GCObject {
      static readonly _type = 'quorum_engine::QuorumEngine';
    }

    class QuorumAccum extends gc.sdk.GCObject {
      static readonly _type = 'quorum_engine::QuorumAccum';
      static readonly $fields: QuorumAccum.$Fields;
      count: number | bigint;
      terms: globalThis.Array<string>;
      constructor(count: number | bigint, terms: globalThis.Array<string>);
      static createFrom(fields: {count: number | bigint, terms: globalThis.Array<string>}): QuorumAccum;
    }
    namespace QuorumAccum {
      interface $Fields {
        count: 0;
        terms: 1;
      }
    }

  }

  namespace span_engine {
    class SpanEngine extends gc.sdk.GCObject {
      static readonly _type = 'span_engine::SpanEngine';
    }

    class SpanAccel extends gc.sdk.GCObject {
      static readonly _type = 'span_engine::SpanAccel';
    }

  }

  namespace suggest_engine {
    class SuggestEngine extends gc.sdk.GCObject {
      static readonly _type = 'suggest_engine::SuggestEngine';
    }

    class DidYouMeanResult extends gc.sdk.GCObject {
      static readonly _type = 'suggest_engine::DidYouMeanResult';
      static readonly $fields: DidYouMeanResult.$Fields;
      originalQuery: string;
      correctedQuery: string | null;
      corrections: globalThis.Array<string>;
      constructor(originalQuery: string, correctedQuery: string | null, corrections: globalThis.Array<string>);
      static createFrom(fields: {originalQuery: string, correctedQuery?: string | null, corrections: globalThis.Array<string>}): DidYouMeanResult;
    }
    namespace DidYouMeanResult {
      interface $Fields {
        originalQuery: 0;
        correctedQuery: 1;
        corrections: 2;
      }
    }

    class Suggestion extends gc.sdk.GCObject {
      static readonly _type = 'suggest_engine::Suggestion';
      static readonly $fields: Suggestion.$Fields;
      term: string;
      score: number;
      df: number | bigint;
      originalForm: string | null;
      constructor(term: string, score: number, df: number | bigint, originalForm?: string | null);
      static createFrom(fields: {term: string, score: number, df: number | bigint, originalForm?: string | null}): Suggestion;
    }
    namespace Suggestion {
      interface $Fields {
        term: 0;
        score: 1;
        df: 2;
        originalForm: 3;
      }
    }

    class DidYouMeanBest extends gc.sdk.GCObject {
      static readonly _type = 'suggest_engine::DidYouMeanBest';
      static readonly $fields: DidYouMeanBest.$Fields;
      distance: number | bigint;
      lenDiff: number | bigint;
      prefix: number | bigint;
      df: number | bigint;
      term: string;
      original: string | null;
      found: boolean;
      constructor(distance: number | bigint, lenDiff: number | bigint, prefix: number | bigint, df: number | bigint, term: string, original: string | null, found: boolean);
      static createFrom(fields: {distance: number | bigint, lenDiff: number | bigint, prefix: number | bigint, df: number | bigint, term: string, original?: string | null, found: boolean}): DidYouMeanBest;
    }
    namespace DidYouMeanBest {
      interface $Fields {
        distance: 0;
        lenDiff: 1;
        prefix: 2;
        df: 3;
        term: 4;
        original: 5;
        found: 6;
      }
    }

  }

  namespace wildcard_engine {
    class WildcardEngine extends gc.sdk.GCObject {
      static readonly _type = 'wildcard_engine::WildcardEngine';
    }

  }

  namespace document {
    class DocumentStats extends gc.sdk.GCObject {
      static readonly _type = 'document::DocumentStats';
      static readonly $fields: DocumentStats.$Fields;
      file: string | null;
      format: string | null;
      file_size_bytes: number | bigint | null;
      success: boolean | null;
      word_count: number | bigint | null;
      char_count: number | bigint | null;
      line_count: number | bigint | null;
      sentence_count: number | bigint | null;
      heading_count: number | bigint | null;
      document_type: string | null;
      constructor(file?: string | null, format?: string | null, file_size_bytes?: number | bigint | null, success?: boolean | null, word_count?: number | bigint | null, char_count?: number | bigint | null, line_count?: number | bigint | null, sentence_count?: number | bigint | null, heading_count?: number | bigint | null, document_type?: string | null);
      static createFrom(fields: {file?: string | null, format?: string | null, file_size_bytes?: number | bigint | null, success?: boolean | null, word_count?: number | bigint | null, char_count?: number | bigint | null, line_count?: number | bigint | null, sentence_count?: number | bigint | null, heading_count?: number | bigint | null, document_type?: string | null}): DocumentStats;
    }
    namespace DocumentStats {
      interface $Fields {
        file: 0;
        format: 1;
        file_size_bytes: 2;
        success: 3;
        word_count: 4;
        char_count: 5;
        line_count: 6;
        sentence_count: 7;
        heading_count: 8;
        document_type: 9;
      }
    }

    class Sentence extends gc.sdk.GCObject {
      static readonly _type = 'document::Sentence';
      static readonly $fields: Sentence.$Fields;
      text: string;
      position: number | bigint;
      constructor(text: string, position: number | bigint);
      static createFrom(fields: {text: string, position: number | bigint}): Sentence;
    }
    namespace Sentence {
      interface $Fields {
        text: 0;
        position: 1;
      }
    }

    class Document extends gc.sdk.GCObject {
      static readonly _type = 'document::Document';
      static readonly $fields: Document.$Fields;
      name: string;
      path: string;
      format: string | null;
      documentType: string | null;
      wordCount: number | bigint | null;
      charCount: number | bigint | null;
      fileSize: number | bigint | null;
      sections: gc.core.nodeList<gc.document.Section>;
      constructor(name: string, path: string, format: string | null, documentType: string | null, wordCount: number | bigint | null, charCount: number | bigint | null, fileSize: number | bigint | null, sections: gc.core.nodeList<gc.document.Section>);
      static createFrom(fields: {name: string, path: string, format?: string | null, documentType?: string | null, wordCount?: number | bigint | null, charCount?: number | bigint | null, fileSize?: number | bigint | null, sections: gc.core.nodeList<gc.document.Section>}): Document;
    }
    namespace Document {
      interface $Fields {
        name: 0;
        path: 1;
        format: 2;
        documentType: 3;
        wordCount: 4;
        charCount: 5;
        fileSize: 6;
        sections: 7;
      }
    }

    class SectionType extends gc.sdk.GCEnum {
      static readonly _type = 'document::SectionType';
      static readonly $fields: SectionType[];
      key: SectionType.Field;
      constructor(type: gc.sdk.AbiType, offset: number, key: SectionType.Field);
      static paragraph: SectionType;
      static heading: SectionType;
      static table: SectionType;
      static code: SectionType;
      static list: SectionType;
      static blockquote: SectionType;
      static horizontalRule: SectionType;
    }
    namespace SectionType  {
      type Field = "paragraph"|"heading"|"table"|"code"|"list"|"blockquote"|"horizontalRule";
    }

    class Section extends gc.sdk.GCObject {
      static readonly _type = 'document::Section';
      static readonly $fields: Section.$Fields;
      title: string;
      position: number | bigint;
      sentences: gc.core.nodeList<gc.document.Sentence>;
      sectionType: gc.document.SectionType;
      constructor(title: string, position: number | bigint, sentences: gc.core.nodeList<gc.document.Sentence>, sectionType: gc.document.SectionType);
      static createFrom(fields: {title: string, position: number | bigint, sentences: gc.core.nodeList<gc.document.Sentence>, sectionType: gc.document.SectionType}): Section;
    }
    namespace Section {
      interface $Fields {
        title: 0;
        position: 1;
        sentences: 2;
        sectionType: 3;
      }
    }

  }

  namespace facet_types {
    class MetricType extends gc.sdk.GCEnum {
      static readonly _type = 'facet_types::MetricType';
      static readonly $fields: MetricType[];
      key: MetricType.Field;
      constructor(type: gc.sdk.AbiType, offset: number, key: MetricType.Field);
      static sum: MetricType;
      static avg: MetricType;
      static min: MetricType;
      static max: MetricType;
      static cardinality: MetricType;
    }
    namespace MetricType  {
      type Field = "sum"|"avg"|"min"|"max"|"cardinality";
    }

    class HistogramBucket extends gc.sdk.GCObject {
      static readonly _type = 'facet_types::HistogramBucket';
      static readonly $fields: HistogramBucket.$Fields;
      from: number;
      to: number;
      count: number | bigint;
      constructor(from: number, to: number, count: number | bigint);
      static createFrom(fields: {from: number, to: number, count: number | bigint}): HistogramBucket;
    }
    namespace HistogramBucket {
      interface $Fields {
        from: 0;
        to: 1;
        count: 2;
      }
    }

    class AggregationRequest extends gc.sdk.GCObject {
      static readonly _type = 'facet_types::AggregationRequest';
      static readonly $fields: AggregationRequest.$Fields;
      metrics: globalThis.Array<gc.facet_types.MetricAggregation> | null;
      histograms: globalThis.Array<gc.facet_types.HistogramAggregation> | null;
      constructor(metrics?: globalThis.Array<gc.facet_types.MetricAggregation> | null, histograms?: globalThis.Array<gc.facet_types.HistogramAggregation> | null);
      static createFrom(fields: {metrics?: globalThis.Array<gc.facet_types.MetricAggregation> | null, histograms?: globalThis.Array<gc.facet_types.HistogramAggregation> | null}): AggregationRequest;
    }
    namespace AggregationRequest {
      interface $Fields {
        metrics: 0;
        histograms: 1;
      }
    }

    class AdvancedFacetedResult extends gc.sdk.GCObject {
      static readonly _type = 'facet_types::AdvancedFacetedResult';
      static readonly $fields: AdvancedFacetedResult.$Fields;
      results: globalThis.Array<gc.text_index_types.TextResult>;
      termFacets: globalThis.Map<string, globalThis.Array<gc.facet_types.TermCount>>;
      numericFacets: globalThis.Map<string, globalThis.Array<gc.facet_types.NumericBucketCount>>;
      constructor(results: globalThis.Array<gc.text_index_types.TextResult>, termFacets: globalThis.Map<string, globalThis.Array<gc.facet_types.TermCount>>, numericFacets: globalThis.Map<string, globalThis.Array<gc.facet_types.NumericBucketCount>>);
      static createFrom(fields: {results: globalThis.Array<gc.text_index_types.TextResult>, termFacets: globalThis.Map<string, globalThis.Array<gc.facet_types.TermCount>>, numericFacets: globalThis.Map<string, globalThis.Array<gc.facet_types.NumericBucketCount>>}): AdvancedFacetedResult;
    }
    namespace AdvancedFacetedResult {
      interface $Fields {
        results: 0;
        termFacets: 1;
        numericFacets: 2;
      }
    }

    class NumericRangeBucket extends gc.sdk.GCObject {
      static readonly _type = 'facet_types::NumericRangeBucket';
      static readonly $fields: NumericRangeBucket.$Fields;
      label: string;
      from: number | null;
      to: number | null;
      constructor(label: string, from?: number | null, to?: number | null);
      static createFrom(fields: {label: string, from?: number | null, to?: number | null}): NumericRangeBucket;
    }
    namespace NumericRangeBucket {
      interface $Fields {
        label: 0;
        from: 1;
        to: 2;
      }
    }

    class HistogramResult extends gc.sdk.GCObject {
      static readonly _type = 'facet_types::HistogramResult';
      static readonly $fields: HistogramResult.$Fields;
      f: gc.core.field | null;
      fieldName: string;
      buckets: globalThis.Array<gc.facet_types.HistogramBucket>;
      constructor(f: gc.core.field | null, fieldName: string, buckets: globalThis.Array<gc.facet_types.HistogramBucket>);
      static createFrom(fields: {f?: gc.core.field | null, fieldName: string, buckets: globalThis.Array<gc.facet_types.HistogramBucket>}): HistogramResult;
    }
    namespace HistogramResult {
      interface $Fields {
        f: 0;
        fieldName: 1;
        buckets: 2;
      }
    }

    class FacetType extends gc.sdk.GCEnum {
      static readonly _type = 'facet_types::FacetType';
      static readonly $fields: FacetType[];
      key: FacetType.Field;
      constructor(type: gc.sdk.AbiType, offset: number, key: FacetType.Field);
      static term: FacetType;
      static numericRange: FacetType;
    }
    namespace FacetType  {
      type Field = "term"|"numericRange";
    }

    class MetricAggregation extends gc.sdk.GCObject {
      static readonly _type = 'facet_types::MetricAggregation';
      static readonly $fields: MetricAggregation.$Fields;
      f: gc.core.field | null;
      fieldName: string | null;
      metric: gc.facet_types.MetricType;
      constructor(f: gc.core.field | null, fieldName: string | null, metric: gc.facet_types.MetricType);
      static createFrom(fields: {f?: gc.core.field | null, fieldName?: string | null, metric: gc.facet_types.MetricType}): MetricAggregation;
    }
    namespace MetricAggregation {
      interface $Fields {
        f: 0;
        fieldName: 1;
        metric: 2;
      }
    }

    class AggregatedSearchResult extends gc.sdk.GCObject {
      static readonly _type = 'facet_types::AggregatedSearchResult';
      static readonly $fields: AggregatedSearchResult.$Fields;
      results: globalThis.Array<gc.text_index_types.TextResult>;
      metricResults: globalThis.Array<gc.facet_types.MetricResult> | null;
      histogramResults: globalThis.Array<gc.facet_types.HistogramResult> | null;
      constructor(results: globalThis.Array<gc.text_index_types.TextResult>, metricResults?: globalThis.Array<gc.facet_types.MetricResult> | null, histogramResults?: globalThis.Array<gc.facet_types.HistogramResult> | null);
      static createFrom(fields: {results: globalThis.Array<gc.text_index_types.TextResult>, metricResults?: globalThis.Array<gc.facet_types.MetricResult> | null, histogramResults?: globalThis.Array<gc.facet_types.HistogramResult> | null}): AggregatedSearchResult;
    }
    namespace AggregatedSearchResult {
      interface $Fields {
        results: 0;
        metricResults: 1;
        histogramResults: 2;
      }
    }

    class HistogramAggregation extends gc.sdk.GCObject {
      static readonly _type = 'facet_types::HistogramAggregation';
      static readonly $fields: HistogramAggregation.$Fields;
      f: gc.core.field | null;
      fieldName: string | null;
      interval: number;
      minValue: number | null;
      maxValue: number | null;
      constructor(f: gc.core.field | null, fieldName: string | null, interval: number, minValue?: number | null, maxValue?: number | null);
      static createFrom(fields: {f?: gc.core.field | null, fieldName?: string | null, interval: number, minValue?: number | null, maxValue?: number | null}): HistogramAggregation;
    }
    namespace HistogramAggregation {
      interface $Fields {
        f: 0;
        fieldName: 1;
        interval: 2;
        minValue: 3;
        maxValue: 4;
      }
    }

    class MetricResult extends gc.sdk.GCObject {
      static readonly _type = 'facet_types::MetricResult';
      static readonly $fields: MetricResult.$Fields;
      f: gc.core.field | null;
      fieldName: string;
      metric: gc.facet_types.MetricType;
      value: number;
      constructor(f: gc.core.field | null, fieldName: string, metric: gc.facet_types.MetricType, value: number);
      static createFrom(fields: {f?: gc.core.field | null, fieldName: string, metric: gc.facet_types.MetricType, value: number}): MetricResult;
    }
    namespace MetricResult {
      interface $Fields {
        f: 0;
        fieldName: 1;
        metric: 2;
        value: 3;
      }
    }

    class FacetRequest extends gc.sdk.GCObject {
      static readonly _type = 'facet_types::FacetRequest';
      static readonly $fields: FacetRequest.$Fields;
      f: gc.core.field | null;
      fieldName: string | null;
      facetType: gc.facet_types.FacetType | null;
      ranges: globalThis.Array<gc.facet_types.NumericRangeBucket> | null;
      maxTerms: number | bigint | null;
      constructor(f?: gc.core.field | null, fieldName?: string | null, facetType?: gc.facet_types.FacetType | null, ranges?: globalThis.Array<gc.facet_types.NumericRangeBucket> | null, maxTerms?: number | bigint | null);
      static createFrom(fields: {f?: gc.core.field | null, fieldName?: string | null, facetType?: gc.facet_types.FacetType | null, ranges?: globalThis.Array<gc.facet_types.NumericRangeBucket> | null, maxTerms?: number | bigint | null}): FacetRequest;
    }
    namespace FacetRequest {
      interface $Fields {
        f: 0;
        fieldName: 1;
        facetType: 2;
        ranges: 3;
        maxTerms: 4;
      }
    }

    class AggregationEngine extends gc.sdk.GCObject {
      static readonly _type = 'facet_types::AggregationEngine';
    }

    class NumericBucketCount extends gc.sdk.GCObject {
      static readonly _type = 'facet_types::NumericBucketCount';
      static readonly $fields: NumericBucketCount.$Fields;
      label: string;
      count: number | bigint;
      constructor(label: string, count: number | bigint);
      static createFrom(fields: {label: string, count: number | bigint}): NumericBucketCount;
    }
    namespace NumericBucketCount {
      interface $Fields {
        label: 0;
        count: 1;
      }
    }

    class TermCount extends gc.sdk.GCObject {
      static readonly _type = 'facet_types::TermCount';
      static readonly $fields: TermCount.$Fields;
      value: string;
      count: number | bigint;
      constructor(value: string, count: number | bigint);
      static createFrom(fields: {value: string, count: number | bigint}): TermCount;
    }
    namespace TermCount {
      interface $Fields {
        value: 0;
        count: 1;
      }
    }

  }

  namespace text_index {
    class TextIndex<T = any> extends gc.sdk.GCObject {
      static readonly _type = 'text_index::TextIndex';
      static readonly $fields: TextIndex.$Fields;
      config: gc.text_index_types.TextIndexConfig;
      totalEntries: number | bigint | null;
      totalTokens: number | bigint | null;
      totalTerms: number | bigint | null;
      avgTokenCount: number | null;
      built: boolean | null;
      dirtyCount: number | bigint | null;
      nextEntryId: number | bigint | null;
      resolvedFields: globalThis.Array<gc.text_index_types.FieldConfig> | null;
      entries: gc.core.nodeList<gc.core.node<gc.text_index_types.IndexEntry>> | null;
      terms: gc.core.nodeList<gc.core.node<gc.text_index_types.NormalizedTerm>> | null;
      termDict: gc.core.nodeIndex<string, number | bigint> | null;
      textPool: gc.core.nodeIndex<string, gc.core.node<string>> | null;
      rawTextPool: gc.core.nodeIndex<string, gc.core.node<string>> | null;
      externalIdIndex: gc.core.nodeIndex<string, gc.core.node<gc.text_index_types.IndexEntry>> | null;
      contentHashes: gc.core.nodeIndex<string, gc.core.node<gc.text_index_types.IndexEntry>> | null;
      vectorIndex: gc.core.node<gc.core.VectorIndex<gc.core.node<gc.text_index_types.IndexEntry>>> | null;
      chunkVectorIndex: gc.core.node<gc.core.VectorIndex<gc.core.node<gc.text_index_types.IndexChunk>>> | null;
      trigramIndex: gc.core.nodeIndex<string, gc.core.node<gc.text_index_types.TrigramPostings>> | null;
      edgeNgramTerms: gc.core.nodeIndex<string, gc.core.node<gc.text_index_types.TrigramPostings>> | null;
      phoneticIndex: gc.core.nodeIndex<string, gc.core.node<gc.text_index_types.PhoneticPostings>> | null;
      trieRoot: gc.core.node<gc.text_index_types.TrieNode> | null;
      reverseTrieRoot: gc.core.node<gc.text_index_types.TrieNode> | null;
      cachedCombiningMarks: globalThis.Map<string, boolean> | null;
      normalizedSynonyms: globalThis.Map<string, globalThis.Array<string>> | null;
      cachedStopWordMap: globalThis.Map<string, boolean> | null;
      cachedTFCache: globalThis.Array<number> | null;
      cachedTFCacheAvgDocLen: number | null;
      constructor(config: gc.text_index_types.TextIndexConfig, totalEntries?: number | bigint | null, totalTokens?: number | bigint | null, totalTerms?: number | bigint | null, avgTokenCount?: number | null, built?: boolean | null, dirtyCount?: number | bigint | null, nextEntryId?: number | bigint | null, resolvedFields?: globalThis.Array<gc.text_index_types.FieldConfig> | null, entries?: gc.core.nodeList<gc.core.node<gc.text_index_types.IndexEntry>> | null, terms?: gc.core.nodeList<gc.core.node<gc.text_index_types.NormalizedTerm>> | null, termDict?: gc.core.nodeIndex<string, number | bigint> | null, textPool?: gc.core.nodeIndex<string, gc.core.node<string>> | null, rawTextPool?: gc.core.nodeIndex<string, gc.core.node<string>> | null, externalIdIndex?: gc.core.nodeIndex<string, gc.core.node<gc.text_index_types.IndexEntry>> | null, contentHashes?: gc.core.nodeIndex<string, gc.core.node<gc.text_index_types.IndexEntry>> | null, vectorIndex?: gc.core.node<gc.core.VectorIndex<gc.core.node<gc.text_index_types.IndexEntry>>> | null, chunkVectorIndex?: gc.core.node<gc.core.VectorIndex<gc.core.node<gc.text_index_types.IndexChunk>>> | null, trigramIndex?: gc.core.nodeIndex<string, gc.core.node<gc.text_index_types.TrigramPostings>> | null, edgeNgramTerms?: gc.core.nodeIndex<string, gc.core.node<gc.text_index_types.TrigramPostings>> | null, phoneticIndex?: gc.core.nodeIndex<string, gc.core.node<gc.text_index_types.PhoneticPostings>> | null, trieRoot?: gc.core.node<gc.text_index_types.TrieNode> | null, reverseTrieRoot?: gc.core.node<gc.text_index_types.TrieNode> | null, cachedCombiningMarks?: globalThis.Map<string, boolean> | null, normalizedSynonyms?: globalThis.Map<string, globalThis.Array<string>> | null, cachedStopWordMap?: globalThis.Map<string, boolean> | null, cachedTFCache?: globalThis.Array<number> | null, cachedTFCacheAvgDocLen?: number | null);
      static createFrom<T>(fields: {config: gc.text_index_types.TextIndexConfig, totalEntries?: number | bigint | null, totalTokens?: number | bigint | null, totalTerms?: number | bigint | null, avgTokenCount?: number | null, built?: boolean | null, dirtyCount?: number | bigint | null, nextEntryId?: number | bigint | null, resolvedFields?: globalThis.Array<gc.text_index_types.FieldConfig> | null, entries?: gc.core.nodeList<gc.core.node<gc.text_index_types.IndexEntry>> | null, terms?: gc.core.nodeList<gc.core.node<gc.text_index_types.NormalizedTerm>> | null, termDict?: gc.core.nodeIndex<string, number | bigint> | null, textPool?: gc.core.nodeIndex<string, gc.core.node<string>> | null, rawTextPool?: gc.core.nodeIndex<string, gc.core.node<string>> | null, externalIdIndex?: gc.core.nodeIndex<string, gc.core.node<gc.text_index_types.IndexEntry>> | null, contentHashes?: gc.core.nodeIndex<string, gc.core.node<gc.text_index_types.IndexEntry>> | null, vectorIndex?: gc.core.node<gc.core.VectorIndex<gc.core.node<gc.text_index_types.IndexEntry>>> | null, chunkVectorIndex?: gc.core.node<gc.core.VectorIndex<gc.core.node<gc.text_index_types.IndexChunk>>> | null, trigramIndex?: gc.core.nodeIndex<string, gc.core.node<gc.text_index_types.TrigramPostings>> | null, edgeNgramTerms?: gc.core.nodeIndex<string, gc.core.node<gc.text_index_types.TrigramPostings>> | null, phoneticIndex?: gc.core.nodeIndex<string, gc.core.node<gc.text_index_types.PhoneticPostings>> | null, trieRoot?: gc.core.node<gc.text_index_types.TrieNode> | null, reverseTrieRoot?: gc.core.node<gc.text_index_types.TrieNode> | null, cachedCombiningMarks?: globalThis.Map<string, boolean> | null, normalizedSynonyms?: globalThis.Map<string, globalThis.Array<string>> | null, cachedStopWordMap?: globalThis.Map<string, boolean> | null, cachedTFCache?: globalThis.Array<number> | null, cachedTFCacheAvgDocLen?: number | null}): TextIndex;
    }
    namespace TextIndex {
      interface $Fields {
        config: 0;
        totalEntries: 1;
        totalTokens: 2;
        totalTerms: 3;
        avgTokenCount: 4;
        built: 5;
        dirtyCount: 6;
        nextEntryId: 7;
        resolvedFields: 8;
        entries: 9;
        terms: 10;
        termDict: 11;
        textPool: 12;
        rawTextPool: 13;
        externalIdIndex: 14;
        contentHashes: 15;
        vectorIndex: 16;
        chunkVectorIndex: 17;
        trigramIndex: 18;
        edgeNgramTerms: 19;
        phoneticIndex: 20;
        trieRoot: 21;
        reverseTrieRoot: 22;
        cachedCombiningMarks: 23;
        normalizedSynonyms: 24;
        cachedStopWordMap: 25;
        cachedTFCache: 26;
        cachedTFCacheAvgDocLen: 27;
      }
    }

  }

  namespace text_index_internal {
    class TextIndexInternal<T = any> extends gc.sdk.GCObject {
      static readonly _type = 'text_index_internal::TextIndexInternal';
    }

  }

  namespace text_index_types {
    class IndexEntry extends gc.sdk.GCObject {
      static readonly _type = 'text_index_types::IndexEntry';
      static readonly $fields: IndexEntry.$Fields;
      id: number | bigint;
      value: any | null;
      text: gc.core.node<string>;
      rawText: gc.core.node<string> | null;
      externalId: string | null;
      contentHash: string | null;
      tokenCount: number | bigint;
      chunks: gc.core.nodeList<gc.core.node<gc.text_index_types.IndexChunk>> | null;
      vector: gc.core.node<gc.core.Tensor> | null;
      entryTerms: globalThis.Array<number | bigint> | null;
      positionData: globalThis.Array<number | bigint> | null;
      positionOffsets: globalThis.Array<number | bigint> | null;
      positionCounts: globalThis.Array<number | bigint> | null;
      constructor(id: number | bigint, value: any | null, text: gc.core.node<string>, rawText: gc.core.node<string> | null, externalId: string | null, contentHash: string | null, tokenCount: number | bigint, chunks?: gc.core.nodeList<gc.core.node<gc.text_index_types.IndexChunk>> | null, vector?: gc.core.node<gc.core.Tensor> | null, entryTerms?: globalThis.Array<number | bigint> | null, positionData?: globalThis.Array<number | bigint> | null, positionOffsets?: globalThis.Array<number | bigint> | null, positionCounts?: globalThis.Array<number | bigint> | null);
      static createFrom(fields: {id: number | bigint, value?: any | null, text: gc.core.node<string>, rawText?: gc.core.node<string> | null, externalId?: string | null, contentHash?: string | null, tokenCount: number | bigint, chunks?: gc.core.nodeList<gc.core.node<gc.text_index_types.IndexChunk>> | null, vector?: gc.core.node<gc.core.Tensor> | null, entryTerms?: globalThis.Array<number | bigint> | null, positionData?: globalThis.Array<number | bigint> | null, positionOffsets?: globalThis.Array<number | bigint> | null, positionCounts?: globalThis.Array<number | bigint> | null}): IndexEntry;
    }
    namespace IndexEntry {
      interface $Fields {
        id: 0;
        value: 1;
        text: 2;
        rawText: 3;
        externalId: 4;
        contentHash: 5;
        tokenCount: 6;
        chunks: 7;
        vector: 8;
        entryTerms: 9;
        positionData: 10;
        positionOffsets: 11;
        positionCounts: 12;
      }
    }

    class RRFOptions extends gc.sdk.GCObject {
      static readonly _type = 'text_index_types::RRFOptions';
      static readonly $fields: RRFOptions.$Fields;
      k: number | bigint | null;
      topRankBonus: boolean | null;
      topBonus: number | null;
      nearTopBonus: number | null;
      nearTopCutoff: number | bigint | null;
      constructor(k?: number | bigint | null, topRankBonus?: boolean | null, topBonus?: number | null, nearTopBonus?: number | null, nearTopCutoff?: number | bigint | null);
      static createFrom(fields: {k?: number | bigint | null, topRankBonus?: boolean | null, topBonus?: number | null, nearTopBonus?: number | null, nearTopCutoff?: number | bigint | null}): RRFOptions;
    }
    namespace RRFOptions {
      interface $Fields {
        k: 0;
        topRankBonus: 1;
        topBonus: 2;
        nearTopBonus: 3;
        nearTopCutoff: 4;
      }
    }

    class Term extends gc.sdk.GCObject {
      static readonly _type = 'text_index_types::Term';
      static readonly $fields: Term.$Fields;
      text: gc.core.node<string>;
      totalCount: number | bigint | null;
    }
    namespace Term {
      interface $Fields {
        text: 0;
        totalCount: 1;
      }
    }

    class MoreLikeThisOptions extends gc.sdk.GCObject {
      static readonly _type = 'text_index_types::MoreLikeThisOptions';
      static readonly $fields: MoreLikeThisOptions.$Fields;
      maxQueryTerms: number | bigint | null;
      constructor(maxQueryTerms?: number | bigint | null);
      static createFrom(fields: {maxQueryTerms?: number | bigint | null}): MoreLikeThisOptions;
    }
    namespace MoreLikeThisOptions {
      interface $Fields {
        maxQueryTerms: 0;
      }
    }

    class PhraseOptions extends gc.sdk.GCObject {
      static readonly _type = 'text_index_types::PhraseOptions';
      static readonly $fields: PhraseOptions.$Fields;
      slop: number | bigint | null;
      constructor(slop?: number | bigint | null);
      static createFrom(fields: {slop?: number | bigint | null}): PhraseOptions;
    }
    namespace PhraseOptions {
      interface $Fields {
        slop: 0;
      }
    }

    class FieldModifier extends gc.sdk.GCEnum {
      static readonly _type = 'text_index_types::FieldModifier';
      static readonly $fields: FieldModifier[];
      key: FieldModifier.Field;
      constructor(type: gc.sdk.AbiType, offset: number, key: FieldModifier.Field);
      static none: FieldModifier;
      static log: FieldModifier;
      static log1p: FieldModifier;
      static sqrt: FieldModifier;
      static square: FieldModifier;
    }
    namespace FieldModifier  {
      type Field = "none"|"log"|"log1p"|"sqrt"|"square";
    }

    class SnippetOptions extends gc.sdk.GCObject {
      static readonly _type = 'text_index_types::SnippetOptions';
      static readonly $fields: SnippetOptions.$Fields;
      maxLength: number | bigint | null;
      numFragments: number | bigint | null;
      fragmentSize: number | bigint | null;
      constructor(maxLength?: number | bigint | null, numFragments?: number | bigint | null, fragmentSize?: number | bigint | null);
      static createFrom(fields: {maxLength?: number | bigint | null, numFragments?: number | bigint | null, fragmentSize?: number | bigint | null}): SnippetOptions;
    }
    namespace SnippetOptions {
      interface $Fields {
        maxLength: 0;
        numFragments: 1;
        fragmentSize: 2;
      }
    }

    class TextSearchLanguage extends gc.sdk.GCEnum {
      static readonly _type = 'text_index_types::TextSearchLanguage';
      static readonly $fields: TextSearchLanguage[];
      key: TextSearchLanguage.Field;
      constructor(type: gc.sdk.AbiType, offset: number, key: TextSearchLanguage.Field);
      static ar: TextSearchLanguage;
      static bg: TextSearchLanguage;
      static ca: TextSearchLanguage;
      static cs: TextSearchLanguage;
      static da: TextSearchLanguage;
      static de: TextSearchLanguage;
      static el: TextSearchLanguage;
      static en: TextSearchLanguage;
      static es: TextSearchLanguage;
      static fa: TextSearchLanguage;
      static fi: TextSearchLanguage;
      static fr: TextSearchLanguage;
      static gu: TextSearchLanguage;
      static he: TextSearchLanguage;
      static hi: TextSearchLanguage;
      static hu: TextSearchLanguage;
      static id: TextSearchLanguage;
      static it: TextSearchLanguage;
      static ja: TextSearchLanguage;
      static ko: TextSearchLanguage;
      static ms: TextSearchLanguage;
      static nl: TextSearchLanguage;
      static no: TextSearchLanguage;
      static pl: TextSearchLanguage;
      static pt: TextSearchLanguage;
      static ro: TextSearchLanguage;
      static ru: TextSearchLanguage;
      static sk: TextSearchLanguage;
      static sv: TextSearchLanguage;
      static tr: TextSearchLanguage;
      static uk: TextSearchLanguage;
      static vi: TextSearchLanguage;
      static zh: TextSearchLanguage;
    }
    namespace TextSearchLanguage  {
      type Field = "ar"|"bg"|"ca"|"cs"|"da"|"de"|"el"|"en"|"es"|"fa"|"fi"|"fr"|"gu"|"he"|"hi"|"hu"|"id"|"it"|"ja"|"ko"|"ms"|"nl"|"no"|"pl"|"pt"|"ro"|"ru"|"sk"|"sv"|"tr"|"uk"|"vi"|"zh";
    }

    class TrigramPostings extends gc.sdk.GCObject {
      static readonly _type = 'text_index_types::TrigramPostings';
      static readonly $fields: TrigramPostings.$Fields;
      terms: globalThis.Array<number | bigint>;
      constructor(terms: globalThis.Array<number | bigint>);
      static createFrom(fields: {terms: globalThis.Array<number | bigint>}): TrigramPostings;
    }
    namespace TrigramPostings {
      interface $Fields {
        terms: 0;
      }
    }

    class HighlightOptions extends gc.sdk.GCObject {
      static readonly _type = 'text_index_types::HighlightOptions';
      static readonly $fields: HighlightOptions.$Fields;
      preTag: string | null;
      postTag: string | null;
      constructor(preTag?: string | null, postTag?: string | null);
      static createFrom(fields: {preTag?: string | null, postTag?: string | null}): HighlightOptions;
    }
    namespace HighlightOptions {
      interface $Fields {
        preTag: 0;
        postTag: 1;
      }
    }

    class DiversifyOptions extends gc.sdk.GCObject {
      static readonly _type = 'text_index_types::DiversifyOptions';
      static readonly $fields: DiversifyOptions.$Fields;
      enabled: boolean | null;
      lambda: number | null;
      constructor(enabled?: boolean | null, lambda?: number | null);
      static createFrom(fields: {enabled?: boolean | null, lambda?: number | null}): DiversifyOptions;
    }
    namespace DiversifyOptions {
      interface $Fields {
        enabled: 0;
        lambda: 1;
      }
    }

    class SearchCursor extends gc.sdk.GCObject {
      static readonly _type = 'text_index_types::SearchCursor';
      static readonly $fields: SearchCursor.$Fields;
      score: number;
      id: number | bigint;
      constructor(score: number, id: number | bigint);
      static createFrom(fields: {score: number, id: number | bigint}): SearchCursor;
    }
    namespace SearchCursor {
      interface $Fields {
        score: 0;
        id: 1;
      }
    }

    class BM25Options extends gc.sdk.GCObject {
      static readonly _type = 'text_index_types::BM25Options';
      static readonly $fields: BM25Options.$Fields;
      k1: number | null;
      b: number | null;
      variant: gc.text_index_types.BM25Variant | null;
      delta: number | null;
      constructor(k1?: number | null, b?: number | null, variant?: gc.text_index_types.BM25Variant | null, delta?: number | null);
      static createFrom(fields: {k1?: number | null, b?: number | null, variant?: gc.text_index_types.BM25Variant | null, delta?: number | null}): BM25Options;
    }
    namespace BM25Options {
      interface $Fields {
        k1: 0;
        b: 1;
        variant: 2;
        delta: 3;
      }
    }

    class ScoreExplanation extends gc.sdk.GCObject {
      static readonly _type = 'text_index_types::ScoreExplanation';
      static readonly $fields: ScoreExplanation.$Fields;
      totalScore: number;
      terms: globalThis.Array<gc.text_index_types.TermExplanation>;
      variant: gc.text_index_types.BM25Variant;
      k1: number;
      b: number;
      docLen: number | bigint;
      avgDocLen: number;
      constructor(totalScore: number, terms: globalThis.Array<gc.text_index_types.TermExplanation>, variant: gc.text_index_types.BM25Variant, k1: number, b: number, docLen: number | bigint, avgDocLen: number);
      static createFrom(fields: {totalScore: number, terms: globalThis.Array<gc.text_index_types.TermExplanation>, variant: gc.text_index_types.BM25Variant, k1: number, b: number, docLen: number | bigint, avgDocLen: number}): ScoreExplanation;
    }
    namespace ScoreExplanation {
      interface $Fields {
        totalScore: 0;
        terms: 1;
        variant: 2;
        k1: 3;
        b: 4;
        docLen: 5;
        avgDocLen: 6;
      }
    }

    class SpanOperator extends gc.sdk.GCEnum {
      static readonly _type = 'text_index_types::SpanOperator';
      static readonly $fields: SpanOperator[];
      key: SpanOperator.Field;
      constructor(type: gc.sdk.AbiType, offset: number, key: SpanOperator.Field);
      static NEAR: SpanOperator;
      static ONEAR: SpanOperator;
      static FIRST: SpanOperator;
      static TERM: SpanOperator;
    }
    namespace SpanOperator  {
      type Field = "NEAR"|"ONEAR"|"FIRST"|"TERM";
    }

    class SearchMode extends gc.sdk.GCEnum {
      static readonly _type = 'text_index_types::SearchMode';
      static readonly $fields: SearchMode[];
      key: SearchMode.Field;
      constructor(type: gc.sdk.AbiType, offset: number, key: SearchMode.Field);
      static hybrid: SearchMode;
      static bm25: SearchMode;
      static semantic: SearchMode;
      static exact: SearchMode;
      static fuzzy: SearchMode;
      static boolean: SearchMode;
      static proximity: SearchMode;
      static phrase: SearchMode;
      static prefix: SearchMode;
      static wildcard: SearchMode;
      static span: SearchMode;
      static dfr: SearchMode;
      static lm_dirichlet: SearchMode;
      static phonetic: SearchMode;
      static quorum: SearchMode;
    }
    namespace SearchMode  {
      type Field = "hybrid"|"bm25"|"semantic"|"exact"|"fuzzy"|"boolean"|"proximity"|"phrase"|"prefix"|"wildcard"|"span"|"dfr"|"lm_dirichlet"|"phonetic"|"quorum";
    }

    class TermExplanation extends gc.sdk.GCObject {
      static readonly _type = 'text_index_types::TermExplanation';
      static readonly $fields: TermExplanation.$Fields;
      term: string;
      tf: number;
      idf: number;
      tfNorm: number;
      score: number;
      constructor(term: string, tf: number, idf: number, tfNorm: number, score: number);
      static createFrom(fields: {term: string, tf: number, idf: number, tfNorm: number, score: number}): TermExplanation;
    }
    namespace TermExplanation {
      interface $Fields {
        term: 0;
        tf: 1;
        idf: 2;
        tfNorm: 3;
        score: 4;
      }
    }

    class Snippet extends gc.sdk.GCObject {
      static readonly _type = 'text_index_types::Snippet';
      static readonly $fields: Snippet.$Fields;
      text: string;
      highlighted: string;
      fragments: globalThis.Array<string> | null;
      constructor(text: string, highlighted: string, fragments?: globalThis.Array<string> | null);
      static createFrom(fields: {text: string, highlighted: string, fragments?: globalThis.Array<string> | null}): Snippet;
    }
    namespace Snippet {
      interface $Fields {
        text: 0;
        highlighted: 1;
        fragments: 2;
      }
    }

    class EdgeNgramOptions extends gc.sdk.GCObject {
      static readonly _type = 'text_index_types::EdgeNgramOptions';
      static readonly $fields: EdgeNgramOptions.$Fields;
      enabled: boolean | null;
      indexAsTerms: boolean | null;
      min: number | bigint | null;
      max: number | bigint | null;
      constructor(enabled?: boolean | null, indexAsTerms?: boolean | null, min?: number | bigint | null, max?: number | bigint | null);
      static createFrom(fields: {enabled?: boolean | null, indexAsTerms?: boolean | null, min?: number | bigint | null, max?: number | bigint | null}): EdgeNgramOptions;
    }
    namespace EdgeNgramOptions {
      interface $Fields {
        enabled: 0;
        indexAsTerms: 1;
        min: 2;
        max: 3;
      }
    }

    class LMDirichletOptions extends gc.sdk.GCObject {
      static readonly _type = 'text_index_types::LMDirichletOptions';
      static readonly $fields: LMDirichletOptions.$Fields;
      mu: number | null;
      constructor(mu?: number | null);
      static createFrom(fields: {mu?: number | null}): LMDirichletOptions;
    }
    namespace LMDirichletOptions {
      interface $Fields {
        mu: 0;
      }
    }

    class TextIndexStats extends gc.sdk.GCObject {
      static readonly _type = 'text_index_types::TextIndexStats';
      static readonly $fields: TextIndexStats.$Fields;
      totalEntries: number | bigint;
      totalTerms: number | bigint;
      avgTokenCount: number;
      constructor(totalEntries: number | bigint, totalTerms: number | bigint, avgTokenCount: number);
      static createFrom(fields: {totalEntries: number | bigint, totalTerms: number | bigint, avgTokenCount: number}): TextIndexStats;
    }
    namespace TextIndexStats {
      interface $Fields {
        totalEntries: 0;
        totalTerms: 1;
        avgTokenCount: 2;
      }
    }

    class IndexChunk extends gc.sdk.GCObject {
      static readonly _type = 'text_index_types::IndexChunk';
      static readonly $fields: IndexChunk.$Fields;
      content: gc.core.node<string>;
      parentId: number | bigint;
      vector: gc.core.node<gc.core.Tensor> | null;
      tokenCount: number | bigint;
      position: number | bigint;
      constructor(content: gc.core.node<string>, parentId: number | bigint, vector: gc.core.node<gc.core.Tensor> | null, tokenCount: number | bigint, position: number | bigint);
      static createFrom(fields: {content: gc.core.node<string>, parentId: number | bigint, vector?: gc.core.node<gc.core.Tensor> | null, tokenCount: number | bigint, position: number | bigint}): IndexChunk;
    }
    namespace IndexChunk {
      interface $Fields {
        content: 0;
        parentId: 1;
        vector: 2;
        tokenCount: 3;
        position: 4;
      }
    }

    class ShortCircuitOptions extends gc.sdk.GCObject {
      static readonly _type = 'text_index_types::ShortCircuitOptions';
      static readonly $fields: ShortCircuitOptions.$Fields;
      enabled: boolean | null;
      minScore: number | null;
      minGap: number | null;
      constructor(enabled?: boolean | null, minScore?: number | null, minGap?: number | null);
      static createFrom(fields: {enabled?: boolean | null, minScore?: number | null, minGap?: number | null}): ShortCircuitOptions;
    }
    namespace ShortCircuitOptions {
      interface $Fields {
        enabled: 0;
        minScore: 1;
        minGap: 2;
      }
    }

    class ChunkingOptions extends gc.sdk.GCObject {
      static readonly _type = 'text_index_types::ChunkingOptions';
      static readonly $fields: ChunkingOptions.$Fields;
      strategy: gc.text_index_types.ChunkStrategy | null;
      size: number | bigint | null;
      overlap: number | bigint | null;
      constructor(strategy?: gc.text_index_types.ChunkStrategy | null, size?: number | bigint | null, overlap?: number | bigint | null);
      static createFrom(fields: {strategy?: gc.text_index_types.ChunkStrategy | null, size?: number | bigint | null, overlap?: number | bigint | null}): ChunkingOptions;
    }
    namespace ChunkingOptions {
      interface $Fields {
        strategy: 0;
        size: 1;
        overlap: 2;
      }
    }

    class FieldRef extends gc.sdk.GCObject {
      static readonly _type = 'text_index_types::FieldRef';
    }

    class FuzzyOptions extends gc.sdk.GCObject {
      static readonly _type = 'text_index_types::FuzzyOptions';
      static readonly $fields: FuzzyOptions.$Fields;
      maxEdits: number | bigint | null;
      mode: gc.text_index_types.FuzzyMode | null;
      maxTextLength: number | bigint | null;
      constructor(maxEdits?: number | bigint | null, mode?: gc.text_index_types.FuzzyMode | null, maxTextLength?: number | bigint | null);
      static createFrom(fields: {maxEdits?: number | bigint | null, mode?: gc.text_index_types.FuzzyMode | null, maxTextLength?: number | bigint | null}): FuzzyOptions;
    }
    namespace FuzzyOptions {
      interface $Fields {
        maxEdits: 0;
        mode: 1;
        maxTextLength: 2;
      }
    }

    class TermScorePair extends gc.sdk.GCObject {
      static readonly _type = 'text_index_types::TermScorePair';
      static readonly $fields: TermScorePair.$Fields;
      ordinal: number | bigint;
      score: number;
      constructor(ordinal: number | bigint, score: number);
      static createFrom(fields: {ordinal: number | bigint, score: number}): TermScorePair;
    }
    namespace TermScorePair {
      interface $Fields {
        ordinal: 0;
        score: 1;
      }
    }

    class FieldConfig extends gc.sdk.GCObject {
      static readonly _type = 'text_index_types::FieldConfig';
      static readonly $fields: FieldConfig.$Fields;
      f: gc.core.field | null;
      fieldName: string | null;
      weight: number;
      fieldB: number | null;
      constructor(f: gc.core.field | null, fieldName: string | null, weight: number, fieldB?: number | null);
      static createFrom(fields: {f?: gc.core.field | null, fieldName?: string | null, weight: number, fieldB?: number | null}): FieldConfig;
    }
    namespace FieldConfig {
      interface $Fields {
        f: 0;
        fieldName: 1;
        weight: 2;
        fieldB: 3;
      }
    }

    class FusionOptions extends gc.sdk.GCObject {
      static readonly _type = 'text_index_types::FusionOptions';
      static readonly $fields: FusionOptions.$Fields;
      method: gc.text_index_types.FusionMethod | null;
      normalization: gc.text_index_types.Normalization | null;
      weights: globalThis.Map<gc.text_index_types.SearchMode, number> | null;
      rrf: gc.text_index_types.RRFOptions | null;
      constructor(method?: gc.text_index_types.FusionMethod | null, normalization?: gc.text_index_types.Normalization | null, weights?: globalThis.Map<gc.text_index_types.SearchMode, number> | null, rrf?: gc.text_index_types.RRFOptions | null);
      static createFrom(fields: {method?: gc.text_index_types.FusionMethod | null, normalization?: gc.text_index_types.Normalization | null, weights?: globalThis.Map<gc.text_index_types.SearchMode, number> | null, rrf?: gc.text_index_types.RRFOptions | null}): FusionOptions;
    }
    namespace FusionOptions {
      interface $Fields {
        method: 0;
        normalization: 1;
        weights: 2;
        rrf: 3;
      }
    }

    class BM25Variant extends gc.sdk.GCEnum {
      static readonly _type = 'text_index_types::BM25Variant';
      static readonly $fields: BM25Variant[];
      key: BM25Variant.Field;
      constructor(type: gc.sdk.AbiType, offset: number, key: BM25Variant.Field);
      static lucene: BM25Variant;
      static plus: BM25Variant;
      static bm25l: BM25Variant;
      static atire: BM25Variant;
      static robertson: BM25Variant;
    }
    namespace BM25Variant  {
      type Field = "lucene"|"plus"|"bm25l"|"atire"|"robertson";
    }

    class Normalization extends gc.sdk.GCEnum {
      static readonly _type = 'text_index_types::Normalization';
      static readonly $fields: Normalization[];
      key: Normalization.Field;
      constructor(type: gc.sdk.AbiType, offset: number, key: Normalization.Field);
      static minmax: Normalization;
      static zscore: Normalization;
    }
    namespace Normalization  {
      type Field = "minmax"|"zscore";
    }

    class StopWordMode extends gc.sdk.GCEnum {
      static readonly _type = 'text_index_types::StopWordMode';
      static readonly $fields: StopWordMode[];
      key: StopWordMode.Field;
      constructor(type: gc.sdk.AbiType, offset: number, key: StopWordMode.Field);
      static none: StopWordMode;
      static auto: StopWordMode;
      static default: StopWordMode;
      static custom: StopWordMode;
    }
    namespace StopWordMode  {
      type Field = "none"|"auto"|"default"|"custom";
    }

    class TextIndexConfig extends gc.sdk.GCObject {
      static readonly _type = 'text_index_types::TextIndexConfig';
      static readonly $fields: TextIndexConfig.$Fields;
      embed: gc.core.function_ | null;
      synonyms: globalThis.Map<string, globalThis.Array<string>> | null;
      fields: globalThis.Array<gc.text_index_types.FieldConfig> | null;
      deduplicateContent: boolean | null;
      dedupBodies: boolean | null;
      fuzzyMaxTextLength: number | bigint | null;
      fuzzyMode: gc.text_index_types.FuzzyMode | null;
      usePhonetic: boolean | null;
      tokenization: gc.text_index_types.TokenizationOptions | null;
      stopWords: gc.text_index_types.StopWordOptions | null;
      bm25: gc.text_index_types.BM25Options | null;
      fusion: gc.text_index_types.FusionOptions | null;
      typoTolerance: gc.text_index_types.TypoOptions | null;
      edgeNgram: gc.text_index_types.EdgeNgramOptions | null;
      shortCircuit: gc.text_index_types.ShortCircuitOptions | null;
      diversify: gc.text_index_types.DiversifyOptions | null;
      chunking: gc.text_index_types.ChunkingOptions | null;
      dfr: gc.text_index_types.DFROptions | null;
      lmDirichlet: gc.text_index_types.LMDirichletOptions | null;
      highlight: gc.text_index_types.HighlightOptions | null;
      buildTrigram: boolean | null;
      buildTrie: boolean | null;
      buildReverseTrie: boolean | null;
      buildBlockMax: boolean | null;
      storePositions: boolean | null;
      storeRawText: boolean | null;
      keepOriginalForm: boolean | null;
      constructor(embed?: gc.core.function_ | null, synonyms?: globalThis.Map<string, globalThis.Array<string>> | null, fields?: globalThis.Array<gc.text_index_types.FieldConfig> | null, deduplicateContent?: boolean | null, dedupBodies?: boolean | null, fuzzyMaxTextLength?: number | bigint | null, fuzzyMode?: gc.text_index_types.FuzzyMode | null, usePhonetic?: boolean | null, tokenization?: gc.text_index_types.TokenizationOptions | null, stopWords?: gc.text_index_types.StopWordOptions | null, bm25?: gc.text_index_types.BM25Options | null, fusion?: gc.text_index_types.FusionOptions | null, typoTolerance?: gc.text_index_types.TypoOptions | null, edgeNgram?: gc.text_index_types.EdgeNgramOptions | null, shortCircuit?: gc.text_index_types.ShortCircuitOptions | null, diversify?: gc.text_index_types.DiversifyOptions | null, chunking?: gc.text_index_types.ChunkingOptions | null, dfr?: gc.text_index_types.DFROptions | null, lmDirichlet?: gc.text_index_types.LMDirichletOptions | null, highlight?: gc.text_index_types.HighlightOptions | null, buildTrigram?: boolean | null, buildTrie?: boolean | null, buildReverseTrie?: boolean | null, buildBlockMax?: boolean | null, storePositions?: boolean | null, storeRawText?: boolean | null, keepOriginalForm?: boolean | null);
      static createFrom(fields: {embed?: gc.core.function_ | null, synonyms?: globalThis.Map<string, globalThis.Array<string>> | null, fields?: globalThis.Array<gc.text_index_types.FieldConfig> | null, deduplicateContent?: boolean | null, dedupBodies?: boolean | null, fuzzyMaxTextLength?: number | bigint | null, fuzzyMode?: gc.text_index_types.FuzzyMode | null, usePhonetic?: boolean | null, tokenization?: gc.text_index_types.TokenizationOptions | null, stopWords?: gc.text_index_types.StopWordOptions | null, bm25?: gc.text_index_types.BM25Options | null, fusion?: gc.text_index_types.FusionOptions | null, typoTolerance?: gc.text_index_types.TypoOptions | null, edgeNgram?: gc.text_index_types.EdgeNgramOptions | null, shortCircuit?: gc.text_index_types.ShortCircuitOptions | null, diversify?: gc.text_index_types.DiversifyOptions | null, chunking?: gc.text_index_types.ChunkingOptions | null, dfr?: gc.text_index_types.DFROptions | null, lmDirichlet?: gc.text_index_types.LMDirichletOptions | null, highlight?: gc.text_index_types.HighlightOptions | null, buildTrigram?: boolean | null, buildTrie?: boolean | null, buildReverseTrie?: boolean | null, buildBlockMax?: boolean | null, storePositions?: boolean | null, storeRawText?: boolean | null, keepOriginalForm?: boolean | null}): TextIndexConfig;
    }
    namespace TextIndexConfig {
      interface $Fields {
        embed: 0;
        synonyms: 1;
        fields: 2;
        deduplicateContent: 3;
        dedupBodies: 4;
        fuzzyMaxTextLength: 5;
        fuzzyMode: 6;
        usePhonetic: 7;
        tokenization: 8;
        stopWords: 9;
        bm25: 10;
        fusion: 11;
        typoTolerance: 12;
        edgeNgram: 13;
        shortCircuit: 14;
        diversify: 15;
        chunking: 16;
        dfr: 17;
        lmDirichlet: 18;
        highlight: 19;
        buildTrigram: 20;
        buildTrie: 21;
        buildReverseTrie: 22;
        buildBlockMax: 23;
        storePositions: 24;
        storeRawText: 25;
        keepOriginalForm: 26;
      }
    }

    class RangeFilter extends gc.sdk.GCObject {
      static readonly _type = 'text_index_types::RangeFilter';
      static readonly $fields: RangeFilter.$Fields;
      f: gc.core.field | null;
      fieldName: string | null;
      from: number | null;
      to: number | null;
      constructor(f?: gc.core.field | null, fieldName?: string | null, from?: number | null, to?: number | null);
      static createFrom(fields: {f?: gc.core.field | null, fieldName?: string | null, from?: number | null, to?: number | null}): RangeFilter;
    }
    namespace RangeFilter {
      interface $Fields {
        f: 0;
        fieldName: 1;
        from: 2;
        to: 3;
      }
    }

    class ProximityOptions extends gc.sdk.GCObject {
      static readonly _type = 'text_index_types::ProximityOptions';
      static readonly $fields: ProximityOptions.$Fields;
      distance: number | bigint | null;
      constructor(distance?: number | bigint | null);
      static createFrom(fields: {distance?: number | bigint | null}): ProximityOptions;
    }
    namespace ProximityOptions {
      interface $Fields {
        distance: 0;
      }
    }

    class ChunkStrategy extends gc.sdk.GCEnum {
      static readonly _type = 'text_index_types::ChunkStrategy';
      static readonly $fields: ChunkStrategy[];
      key: ChunkStrategy.Field;
      constructor(type: gc.sdk.AbiType, offset: number, key: ChunkStrategy.Field);
      static none: ChunkStrategy;
      static fixed: ChunkStrategy;
      static sentence: ChunkStrategy;
      static paragraph: ChunkStrategy;
      static recursive: ChunkStrategy;
    }
    namespace ChunkStrategy  {
      type Field = "none"|"fixed"|"sentence"|"paragraph"|"recursive";
    }

    class TrieNode extends gc.sdk.GCObject {
      static readonly _type = 'text_index_types::TrieNode';
      static readonly $fields: TrieNode.$Fields;
      children: globalThis.Map<number | bigint, gc.core.node<gc.text_index_types.TrieNode>> | null;
      terms: globalThis.Array<number | bigint> | null;
      isTerminal: boolean | null;
      constructor(children?: globalThis.Map<number | bigint, gc.core.node<gc.text_index_types.TrieNode>> | null, terms?: globalThis.Array<number | bigint> | null, isTerminal?: boolean | null);
      static createFrom(fields: {children?: globalThis.Map<number | bigint, gc.core.node<gc.text_index_types.TrieNode>> | null, terms?: globalThis.Array<number | bigint> | null, isTerminal?: boolean | null}): TrieNode;
    }
    namespace TrieNode {
      interface $Fields {
        children: 0;
        terms: 1;
        isTerminal: 2;
      }
    }

    class StopWordOptions extends gc.sdk.GCObject {
      static readonly _type = 'text_index_types::StopWordOptions';
      static readonly $fields: StopWordOptions.$Fields;
      mode: gc.text_index_types.StopWordMode | null;
      language: gc.text_index_types.TextSearchLanguage | null;
      custom: globalThis.Array<string> | null;
      autoThreshold: number | null;
      constructor(mode?: gc.text_index_types.StopWordMode | null, language?: gc.text_index_types.TextSearchLanguage | null, custom?: globalThis.Array<string> | null, autoThreshold?: number | null);
      static createFrom(fields: {mode?: gc.text_index_types.StopWordMode | null, language?: gc.text_index_types.TextSearchLanguage | null, custom?: globalThis.Array<string> | null, autoThreshold?: number | null}): StopWordOptions;
    }
    namespace StopWordOptions {
      interface $Fields {
        mode: 0;
        language: 1;
        custom: 2;
        autoThreshold: 3;
      }
    }

    class NormalizedTerm extends gc.sdk.GCObject {
      static readonly _type = 'text_index_types::NormalizedTerm';
      static readonly $fields: NormalizedTerm.$Fields;
      text: gc.core.node<string>;
      totalCount: number | bigint | null;
      ordinal: number | bigint;
      originalForm: string | null;
      isPrefix: boolean | null;
      idf: number | null;
      maxTermScore: number | null;
      postingDocs: globalThis.Array<number | bigint> | null;
      postingTFs: globalThis.Array<number | bigint> | null;
      postingFieldnormIds: globalThis.Array<number | bigint> | null;
      postingBlockMaxScores: globalThis.Array<number> | null;
      constructor(text: gc.core.node<string>, totalCount: number | bigint | null, ordinal: number | bigint, originalForm?: string | null, isPrefix?: boolean | null, idf?: number | null, maxTermScore?: number | null, postingDocs?: globalThis.Array<number | bigint> | null, postingTFs?: globalThis.Array<number | bigint> | null, postingFieldnormIds?: globalThis.Array<number | bigint> | null, postingBlockMaxScores?: globalThis.Array<number> | null);
      static createFrom(fields: {text: gc.core.node<string>, totalCount?: number | bigint | null, ordinal: number | bigint, originalForm?: string | null, isPrefix?: boolean | null, idf?: number | null, maxTermScore?: number | null, postingDocs?: globalThis.Array<number | bigint> | null, postingTFs?: globalThis.Array<number | bigint> | null, postingFieldnormIds?: globalThis.Array<number | bigint> | null, postingBlockMaxScores?: globalThis.Array<number> | null}): NormalizedTerm;
    }
    namespace NormalizedTerm {
      interface $Fields {
        text: 0;
        totalCount: 1;
        ordinal: 2;
        originalForm: 3;
        isPrefix: 4;
        idf: 5;
        maxTermScore: 6;
        postingDocs: 7;
        postingTFs: 8;
        postingFieldnormIds: 9;
        postingBlockMaxScores: 10;
      }
    }

    class ScoreMode extends gc.sdk.GCEnum {
      static readonly _type = 'text_index_types::ScoreMode';
      static readonly $fields: ScoreMode[];
      key: ScoreMode.Field;
      constructor(type: gc.sdk.AbiType, offset: number, key: ScoreMode.Field);
      static multiply: ScoreMode;
      static sum: ScoreMode;
      static avg: ScoreMode;
      static max: ScoreMode;
      static min: ScoreMode;
    }
    namespace ScoreMode  {
      type Field = "multiply"|"sum"|"avg"|"max"|"min";
    }

    class TermBoost extends gc.sdk.GCObject {
      static readonly _type = 'text_index_types::TermBoost';
      static readonly $fields: TermBoost.$Fields;
      term: string;
      boost: number;
      constructor(term: string, boost: number);
      static createFrom(fields: {term: string, boost: number}): TermBoost;
    }
    namespace TermBoost {
      interface $Fields {
        term: 0;
        boost: 1;
      }
    }

    class TextEntry extends gc.sdk.GCObject {
      static readonly _type = 'text_index_types::TextEntry';
      static readonly $fields: TextEntry.$Fields;
      key: string;
      value: any | null;
      externalId: string | null;
      vector: gc.core.Tensor | null;
      constructor(key: string, value?: any | null, externalId?: string | null, vector?: gc.core.Tensor | null);
      static createFrom(fields: {key: string, value?: any | null, externalId?: string | null, vector?: gc.core.Tensor | null}): TextEntry;
    }
    namespace TextEntry {
      interface $Fields {
        key: 0;
        value: 1;
        externalId: 2;
        vector: 3;
      }
    }

    class TokenizationOptions extends gc.sdk.GCObject {
      static readonly _type = 'text_index_types::TokenizationOptions';
      static readonly $fields: TokenizationOptions.$Fields;
      separators: globalThis.Array<string> | null;
      minTermLength: number | bigint | null;
      maxTermLength: number | bigint | null;
      filterNumericTerms: boolean | null;
      caseFold: boolean | null;
      stripPunctuation: boolean | null;
      stemming: boolean | null;
      charMap: globalThis.Map<string, string> | null;
      useDefaultCharMap: boolean | null;
      normOptions: gc.text_index_types.NormOptions | null;
      constructor(separators?: globalThis.Array<string> | null, minTermLength?: number | bigint | null, maxTermLength?: number | bigint | null, filterNumericTerms?: boolean | null, caseFold?: boolean | null, stripPunctuation?: boolean | null, stemming?: boolean | null, charMap?: globalThis.Map<string, string> | null, useDefaultCharMap?: boolean | null, normOptions?: gc.text_index_types.NormOptions | null);
      static createFrom(fields: {separators?: globalThis.Array<string> | null, minTermLength?: number | bigint | null, maxTermLength?: number | bigint | null, filterNumericTerms?: boolean | null, caseFold?: boolean | null, stripPunctuation?: boolean | null, stemming?: boolean | null, charMap?: globalThis.Map<string, string> | null, useDefaultCharMap?: boolean | null, normOptions?: gc.text_index_types.NormOptions | null}): TokenizationOptions;
    }
    namespace TokenizationOptions {
      interface $Fields {
        separators: 0;
        minTermLength: 1;
        maxTermLength: 2;
        filterNumericTerms: 3;
        caseFold: 4;
        stripPunctuation: 5;
        stemming: 6;
        charMap: 7;
        useDefaultCharMap: 8;
        normOptions: 9;
      }
    }

    class FusionMethod extends gc.sdk.GCEnum {
      static readonly _type = 'text_index_types::FusionMethod';
      static readonly $fields: FusionMethod[];
      key: FusionMethod.Field;
      constructor(type: gc.sdk.AbiType, offset: number, key: FusionMethod.Field);
      static rrf: FusionMethod;
      static linear: FusionMethod;
    }
    namespace FusionMethod  {
      type Field = "rrf"|"linear";
    }

    class FuzzyMode extends gc.sdk.GCEnum {
      static readonly _type = 'text_index_types::FuzzyMode';
      static readonly $fields: FuzzyMode[];
      key: FuzzyMode.Field;
      constructor(type: gc.sdk.AbiType, offset: number, key: FuzzyMode.Field);
      static key: FuzzyMode;
      static term: FuzzyMode;
    }
    namespace FuzzyMode  {
      type Field = "key"|"term";
    }

    class PhoneticPostings extends gc.sdk.GCObject {
      static readonly _type = 'text_index_types::PhoneticPostings';
      static readonly $fields: PhoneticPostings.$Fields;
      terms: globalThis.Array<number | bigint>;
      constructor(terms: globalThis.Array<number | bigint>);
      static createFrom(fields: {terms: globalThis.Array<number | bigint>}): PhoneticPostings;
    }
    namespace PhoneticPostings {
      interface $Fields {
        terms: 0;
      }
    }

    class TermFilter extends gc.sdk.GCObject {
      static readonly _type = 'text_index_types::TermFilter';
      static readonly $fields: TermFilter.$Fields;
      f: gc.core.field | null;
      fieldName: string | null;
      values: globalThis.Array<string>;
      exclude: boolean | null;
      constructor(f: gc.core.field | null, fieldName: string | null, values: globalThis.Array<string>, exclude?: boolean | null);
      static createFrom(fields: {f?: gc.core.field | null, fieldName?: string | null, values: globalThis.Array<string>, exclude?: boolean | null}): TermFilter;
    }
    namespace TermFilter {
      interface $Fields {
        f: 0;
        fieldName: 1;
        values: 2;
        exclude: 3;
      }
    }

    class NormOptions extends gc.sdk.GCObject {
      static readonly _type = 'text_index_types::NormOptions';
      static readonly $fields: NormOptions.$Fields;
      stripAccents: boolean | null;
      stripControlChars: boolean | null;
      stripHtmlTags: boolean | null;
      decodeHtmlEntities: boolean | null;
      stripUrls: boolean | null;
      stripEmails: boolean | null;
      normalizeQuotes: boolean | null;
      normalizeLineBreaks: boolean | null;
      normalizeRepeatingChars: boolean | null;
      maxRepeat: number | bigint | null;
      rejoinHyphenatedWords: boolean | null;
      constructor(stripAccents?: boolean | null, stripControlChars?: boolean | null, stripHtmlTags?: boolean | null, decodeHtmlEntities?: boolean | null, stripUrls?: boolean | null, stripEmails?: boolean | null, normalizeQuotes?: boolean | null, normalizeLineBreaks?: boolean | null, normalizeRepeatingChars?: boolean | null, maxRepeat?: number | bigint | null, rejoinHyphenatedWords?: boolean | null);
      static createFrom(fields: {stripAccents?: boolean | null, stripControlChars?: boolean | null, stripHtmlTags?: boolean | null, decodeHtmlEntities?: boolean | null, stripUrls?: boolean | null, stripEmails?: boolean | null, normalizeQuotes?: boolean | null, normalizeLineBreaks?: boolean | null, normalizeRepeatingChars?: boolean | null, maxRepeat?: number | bigint | null, rejoinHyphenatedWords?: boolean | null}): NormOptions;
    }
    namespace NormOptions {
      interface $Fields {
        stripAccents: 0;
        stripControlChars: 1;
        stripHtmlTags: 2;
        decodeHtmlEntities: 3;
        stripUrls: 4;
        stripEmails: 5;
        normalizeQuotes: 6;
        normalizeLineBreaks: 7;
        normalizeRepeatingChars: 8;
        maxRepeat: 9;
        rejoinHyphenatedWords: 10;
      }
    }

    class BoostMode extends gc.sdk.GCEnum {
      static readonly _type = 'text_index_types::BoostMode';
      static readonly $fields: BoostMode[];
      key: BoostMode.Field;
      constructor(type: gc.sdk.AbiType, offset: number, key: BoostMode.Field);
      static multiply: BoostMode;
      static sum: BoostMode;
      static replace: BoostMode;
    }
    namespace BoostMode  {
      type Field = "multiply"|"sum"|"replace";
    }

    class TextResult extends gc.sdk.GCObject {
      static readonly _type = 'text_index_types::TextResult';
      static readonly $fields: TextResult.$Fields;
      id: number | bigint;
      externalId: string | null;
      value: any | null;
      score: number;
      text: string | null;
      matchedTerms: globalThis.Array<string> | null;
      chunkKey: string | null;
      constructor(id: number | bigint, externalId: string | null, value: any | null, score: number, text?: string | null, matchedTerms?: globalThis.Array<string> | null, chunkKey?: string | null);
      static createFrom(fields: {id: number | bigint, externalId?: string | null, value?: any | null, score: number, text?: string | null, matchedTerms?: globalThis.Array<string> | null, chunkKey?: string | null}): TextResult;
    }
    namespace TextResult {
      interface $Fields {
        id: 0;
        externalId: 1;
        value: 2;
        score: 3;
        text: 4;
        matchedTerms: 5;
        chunkKey: 6;
      }
    }

    class CurationRule extends gc.sdk.GCObject {
      static readonly _type = 'text_index_types::CurationRule';
      static readonly $fields: CurationRule.$Fields;
      documentKey: string;
      position: number | bigint | null;
      boost: number | null;
      suppress: boolean | null;
      constructor(documentKey: string, position?: number | bigint | null, boost?: number | null, suppress?: boolean | null);
      static createFrom(fields: {documentKey: string, position?: number | bigint | null, boost?: number | null, suppress?: boolean | null}): CurationRule;
    }
    namespace CurationRule {
      interface $Fields {
        documentKey: 0;
        position: 1;
        boost: 2;
        suppress: 3;
      }
    }

    class DFROptions extends gc.sdk.GCObject {
      static readonly _type = 'text_index_types::DFROptions';
      static readonly $fields: DFROptions.$Fields;
      basicModel: gc.dfr_engine.DFRBasicModel | null;
      afterEffect: gc.dfr_engine.DFRAfterEffect | null;
      normalization: gc.dfr_engine.DFRNormalization | null;
      constructor(basicModel?: gc.dfr_engine.DFRBasicModel | null, afterEffect?: gc.dfr_engine.DFRAfterEffect | null, normalization?: gc.dfr_engine.DFRNormalization | null);
      static createFrom(fields: {basicModel?: gc.dfr_engine.DFRBasicModel | null, afterEffect?: gc.dfr_engine.DFRAfterEffect | null, normalization?: gc.dfr_engine.DFRNormalization | null}): DFROptions;
    }
    namespace DFROptions {
      interface $Fields {
        basicModel: 0;
        afterEffect: 1;
        normalization: 2;
      }
    }

    class SortClause extends gc.sdk.GCObject {
      static readonly _type = 'text_index_types::SortClause';
      static readonly $fields: SortClause.$Fields;
      f: gc.core.field | null;
      fieldName: string | null;
      order: gc.core.SortOrder;
      constructor(f: gc.core.field | null, fieldName: string | null, order: gc.core.SortOrder);
      static createFrom(fields: {f?: gc.core.field | null, fieldName?: string | null, order: gc.core.SortOrder}): SortClause;
    }
    namespace SortClause {
      interface $Fields {
        f: 0;
        fieldName: 1;
        order: 2;
      }
    }

    class TypoOptions extends gc.sdk.GCObject {
      static readonly _type = 'text_index_types::TypoOptions';
      static readonly $fields: TypoOptions.$Fields;
      enabled: boolean | null;
      minWordLength: number | bigint | null;
      maxEdits1: number | bigint | null;
      maxEdits2: number | bigint | null;
      constructor(enabled?: boolean | null, minWordLength?: number | bigint | null, maxEdits1?: number | bigint | null, maxEdits2?: number | bigint | null);
      static createFrom(fields: {enabled?: boolean | null, minWordLength?: number | bigint | null, maxEdits1?: number | bigint | null, maxEdits2?: number | bigint | null}): TypoOptions;
    }
    namespace TypoOptions {
      interface $Fields {
        enabled: 0;
        minWordLength: 1;
        maxEdits1: 2;
        maxEdits2: 3;
      }
    }

    class PercolateMode extends gc.sdk.GCEnum {
      static readonly _type = 'text_index_types::PercolateMode';
      static readonly $fields: PercolateMode[];
      key: PercolateMode.Field;
      constructor(type: gc.sdk.AbiType, offset: number, key: PercolateMode.Field);
      static bm25: PercolateMode;
      static boolean: PercolateMode;
    }
    namespace PercolateMode  {
      type Field = "bm25"|"boolean";
    }

    class SearchOptions extends gc.sdk.GCObject {
      static readonly _type = 'text_index_types::SearchOptions';
      static readonly $fields: SearchOptions.$Fields;
      modes: globalThis.Array<gc.text_index_types.SearchMode> | null;
      weights: globalThis.Map<gc.text_index_types.SearchMode, number> | null;
      fusionMethod: gc.text_index_types.FusionMethod | null;
      normalization: gc.text_index_types.Normalization | null;
      rrf_k: number | bigint | null;
      fuzzy: gc.text_index_types.FuzzyOptions | null;
      phrase: gc.text_index_types.PhraseOptions | null;
      proximity: gc.text_index_types.ProximityOptions | null;
      typoTolerance: boolean | null;
      minScore: number | null;
      diversify: boolean | null;
      diversityLambda: number | null;
      offset: number | bigint | null;
      proximityFilter: boolean | null;
      filter: globalThis.Array<string> | null;
      termBoosts: globalThis.Array<gc.text_index_types.TermBoost> | null;
      quorumMinMatch: number | bigint | null;
      termFilters: globalThis.Array<gc.text_index_types.TermFilter> | null;
      rangeFilters: globalThis.Array<gc.text_index_types.RangeFilter> | null;
      sort: globalThis.Array<gc.text_index_types.SortClause> | null;
      searchAfter: gc.text_index_types.SearchCursor | null;
      constructor(modes?: globalThis.Array<gc.text_index_types.SearchMode> | null, weights?: globalThis.Map<gc.text_index_types.SearchMode, number> | null, fusionMethod?: gc.text_index_types.FusionMethod | null, normalization?: gc.text_index_types.Normalization | null, rrf_k?: number | bigint | null, fuzzy?: gc.text_index_types.FuzzyOptions | null, phrase?: gc.text_index_types.PhraseOptions | null, proximity?: gc.text_index_types.ProximityOptions | null, typoTolerance?: boolean | null, minScore?: number | null, diversify?: boolean | null, diversityLambda?: number | null, offset?: number | bigint | null, proximityFilter?: boolean | null, filter?: globalThis.Array<string> | null, termBoosts?: globalThis.Array<gc.text_index_types.TermBoost> | null, quorumMinMatch?: number | bigint | null, termFilters?: globalThis.Array<gc.text_index_types.TermFilter> | null, rangeFilters?: globalThis.Array<gc.text_index_types.RangeFilter> | null, sort?: globalThis.Array<gc.text_index_types.SortClause> | null, searchAfter?: gc.text_index_types.SearchCursor | null);
      static createFrom(fields: {modes?: globalThis.Array<gc.text_index_types.SearchMode> | null, weights?: globalThis.Map<gc.text_index_types.SearchMode, number> | null, fusionMethod?: gc.text_index_types.FusionMethod | null, normalization?: gc.text_index_types.Normalization | null, rrf_k?: number | bigint | null, fuzzy?: gc.text_index_types.FuzzyOptions | null, phrase?: gc.text_index_types.PhraseOptions | null, proximity?: gc.text_index_types.ProximityOptions | null, typoTolerance?: boolean | null, minScore?: number | null, diversify?: boolean | null, diversityLambda?: number | null, offset?: number | bigint | null, proximityFilter?: boolean | null, filter?: globalThis.Array<string> | null, termBoosts?: globalThis.Array<gc.text_index_types.TermBoost> | null, quorumMinMatch?: number | bigint | null, termFilters?: globalThis.Array<gc.text_index_types.TermFilter> | null, rangeFilters?: globalThis.Array<gc.text_index_types.RangeFilter> | null, sort?: globalThis.Array<gc.text_index_types.SortClause> | null, searchAfter?: gc.text_index_types.SearchCursor | null}): SearchOptions;
    }
    namespace SearchOptions {
      interface $Fields {
        modes: 0;
        weights: 1;
        fusionMethod: 2;
        normalization: 3;
        rrf_k: 4;
        fuzzy: 5;
        phrase: 6;
        proximity: 7;
        typoTolerance: 8;
        minScore: 9;
        diversify: 10;
        diversityLambda: 11;
        offset: 12;
        proximityFilter: 13;
        filter: 14;
        termBoosts: 15;
        quorumMinMatch: 16;
        termFilters: 17;
        rangeFilters: 18;
        sort: 19;
        searchAfter: 20;
      }
    }

  }

  namespace boolean_parser {
    class BooleanOperator extends gc.sdk.GCEnum {
      static readonly _type = 'boolean_parser::BooleanOperator';
      static readonly $fields: BooleanOperator[];
      key: BooleanOperator.Field;
      constructor(type: gc.sdk.AbiType, offset: number, key: BooleanOperator.Field);
      static AND: BooleanOperator;
      static OR: BooleanOperator;
      static NOT: BooleanOperator;
      static WEAKAND: BooleanOperator;
    }
    namespace BooleanOperator  {
      type Field = "AND"|"OR"|"NOT"|"WEAKAND";
    }

    class ParseResult extends gc.sdk.GCObject {
      static readonly _type = 'boolean_parser::ParseResult';
      static readonly $fields: ParseResult.$Fields;
      query: gc.boolean_parser.BooleanQuery;
      nextPos: number | bigint;
      constructor(query: gc.boolean_parser.BooleanQuery, nextPos: number | bigint);
      static createFrom(fields: {query: gc.boolean_parser.BooleanQuery, nextPos: number | bigint}): ParseResult;
    }
    namespace ParseResult {
      interface $Fields {
        query: 0;
        nextPos: 1;
      }
    }

    class BooleanQuery extends gc.sdk.GCObject {
      static readonly _type = 'boolean_parser::BooleanQuery';
      static readonly $fields: BooleanQuery.$Fields;
      operator: gc.boolean_parser.BooleanOperator | null;
      term: string | null;
      left: gc.boolean_parser.BooleanQuery | null;
      right: gc.boolean_parser.BooleanQuery | null;
      weakAndThreshold: number | bigint | null;
      children: globalThis.Array<gc.boolean_parser.BooleanQuery> | null;
      constructor(operator?: gc.boolean_parser.BooleanOperator | null, term?: string | null, left?: gc.boolean_parser.BooleanQuery | null, right?: gc.boolean_parser.BooleanQuery | null, weakAndThreshold?: number | bigint | null, children?: globalThis.Array<gc.boolean_parser.BooleanQuery> | null);
      static createFrom(fields: {operator?: gc.boolean_parser.BooleanOperator | null, term?: string | null, left?: gc.boolean_parser.BooleanQuery | null, right?: gc.boolean_parser.BooleanQuery | null, weakAndThreshold?: number | bigint | null, children?: globalThis.Array<gc.boolean_parser.BooleanQuery> | null}): BooleanQuery;
    }
    namespace BooleanQuery {
      interface $Fields {
        operator: 0;
        term: 1;
        left: 2;
        right: 3;
        weakAndThreshold: 4;
        children: 5;
      }
    }

    class BooleanParser extends gc.sdk.GCObject {
      static readonly _type = 'boolean_parser::BooleanParser';
    }

  }

  namespace span_parser {
    class SpanQuery extends gc.sdk.GCObject {
      static readonly _type = 'span_parser::SpanQuery';
      static readonly $fields: SpanQuery.$Fields;
      operator: gc.text_index_types.SpanOperator;
      term: string | null;
      left: gc.span_parser.SpanQuery | null;
      right: gc.span_parser.SpanQuery | null;
      distance: number | bigint;
      constructor(operator: gc.text_index_types.SpanOperator, term: string | null, left: gc.span_parser.SpanQuery | null, right: gc.span_parser.SpanQuery | null, distance: number | bigint);
      static createFrom(fields: {operator: gc.text_index_types.SpanOperator, term?: string | null, left?: gc.span_parser.SpanQuery | null, right?: gc.span_parser.SpanQuery | null, distance: number | bigint}): SpanQuery;
    }
    namespace SpanQuery {
      interface $Fields {
        operator: 0;
        term: 1;
        left: 2;
        right: 3;
        distance: 4;
      }
    }

    class SpanParser extends gc.sdk.GCObject {
      static readonly _type = 'span_parser::SpanParser';
    }

  }

  namespace stemmer {
    class PorterStemmer extends gc.sdk.GCObject {
      static readonly _type = 'stemmer::PorterStemmer';
    }

  }

  namespace string_utils {
    class StringUtils extends gc.sdk.GCObject {
      static readonly _type = 'string_utils::StringUtils';
    }

  }

  namespace text_chunker {
    class TextChunker extends gc.sdk.GCObject {
      static readonly _type = 'text_chunker::TextChunker';
    }

    class ChunkInfo extends gc.sdk.GCObject {
      static readonly _type = 'text_chunker::ChunkInfo';
      static readonly $fields: ChunkInfo.$Fields;
      content: string;
      position: number | bigint;
      startChar: number | bigint;
      endChar: number | bigint;
      constructor(content: string, position: number | bigint, startChar: number | bigint, endChar: number | bigint);
      static createFrom(fields: {content: string, position: number | bigint, startChar: number | bigint, endChar: number | bigint}): ChunkInfo;
    }
    namespace ChunkInfo {
      interface $Fields {
        content: 0;
        position: 1;
        startChar: 2;
        endChar: 3;
      }
    }

  }

  namespace text_normalizer {
    class TextNormalizer extends gc.sdk.GCObject {
      static readonly _type = 'text_normalizer::TextNormalizer';
    }

  }

  namespace text_parser {
    class TextParser extends gc.sdk.GCObject {
      static readonly _type = 'text_parser::TextParser';
    }

    class ParsedSection extends gc.sdk.GCObject {
      static readonly _type = 'text_parser::ParsedSection';
      static readonly $fields: ParsedSection.$Fields;
      sectionType: gc.document.SectionType;
      content: string;
      title: string;
      startLine: number | bigint;
      endLine: number | bigint;
      constructor(sectionType: gc.document.SectionType, content: string, title: string, startLine: number | bigint, endLine: number | bigint);
      static createFrom(fields: {sectionType: gc.document.SectionType, content: string, title: string, startLine: number | bigint, endLine: number | bigint}): ParsedSection;
    }
    namespace ParsedSection {
      interface $Fields {
        sectionType: 0;
        content: 1;
        title: 2;
        startLine: 3;
        endLine: 4;
      }
    }

  }

  namespace text_tokenizer {
    class TokenInfo extends gc.sdk.GCObject {
      static readonly _type = 'text_tokenizer::TokenInfo';
      static readonly $fields: TokenInfo.$Fields;
      text: string;
      original: string;
      position: number | bigint;
      constructor(text: string, original: string, position: number | bigint);
      static createFrom(fields: {text: string, original: string, position: number | bigint}): TokenInfo;
    }
    namespace TokenInfo {
      interface $Fields {
        text: 0;
        original: 1;
        position: 2;
      }
    }

    class TermFrequency extends gc.sdk.GCObject {
      static readonly _type = 'text_tokenizer::TermFrequency';
      static readonly $fields: TermFrequency.$Fields;
      original: string;
      count: number | bigint;
      positions: globalThis.Array<number | bigint>;
      constructor(original: string, count: number | bigint, positions: globalThis.Array<number | bigint>);
      static createFrom(fields: {original: string, count: number | bigint, positions: globalThis.Array<number | bigint>}): TermFrequency;
    }
    namespace TermFrequency {
      interface $Fields {
        original: 0;
        count: 1;
        positions: 2;
      }
    }

    class TokenizerAccel extends gc.sdk.GCObject {
      static readonly _type = 'text_tokenizer::TokenizerAccel';
    }

    class TextTokenizer extends gc.sdk.GCObject {
      static readonly _type = 'text_tokenizer::TextTokenizer';
    }

  }

  namespace dfr_engine {
    class DFRScorer extends gc.sdk.GCObject {
      static readonly _type = 'dfr_engine::DFRScorer';
    }

    class DFREngine extends gc.sdk.GCObject {
      static readonly _type = 'dfr_engine::DFREngine';
    }

    class DFRBasicModel extends gc.sdk.GCEnum {
      static readonly _type = 'dfr_engine::DFRBasicModel';
      static readonly $fields: DFRBasicModel[];
      key: DFRBasicModel.Field;
      constructor(type: gc.sdk.AbiType, offset: number, key: DFRBasicModel.Field);
      static G: DFRBasicModel;
      static In: DFRBasicModel;
      static Ine: DFRBasicModel;
      static IF: DFRBasicModel;
    }
    namespace DFRBasicModel  {
      type Field = "G"|"In"|"Ine"|"IF";
    }

    class DFRNormalization extends gc.sdk.GCEnum {
      static readonly _type = 'dfr_engine::DFRNormalization';
      static readonly $fields: DFRNormalization[];
      key: DFRNormalization.Field;
      constructor(type: gc.sdk.AbiType, offset: number, key: DFRNormalization.Field);
      static H1: DFRNormalization;
      static H2: DFRNormalization;
      static H3: DFRNormalization;
      static Z: DFRNormalization;
    }
    namespace DFRNormalization  {
      type Field = "H1"|"H2"|"H3"|"Z";
    }

    class DFRAfterEffect extends gc.sdk.GCEnum {
      static readonly _type = 'dfr_engine::DFRAfterEffect';
      static readonly $fields: DFRAfterEffect[];
      key: DFRAfterEffect.Field;
      constructor(type: gc.sdk.AbiType, offset: number, key: DFRAfterEffect.Field);
      static Laplace: DFRAfterEffect;
      static Bernoulli: DFRAfterEffect;
    }
    namespace DFRAfterEffect  {
      type Field = "Laplace"|"Bernoulli";
    }

    class DFRAccum extends gc.sdk.GCObject {
      static readonly _type = 'dfr_engine::DFRAccum';
      static readonly $fields: DFRAccum.$Fields;
      score: number;
      terms: globalThis.Array<string>;
      constructor(score: number, terms: globalThis.Array<string>);
      static createFrom(fields: {score: number, terms: globalThis.Array<string>}): DFRAccum;
    }
    namespace DFRAccum {
      interface $Fields {
        score: 0;
        terms: 1;
      }
    }

  }

  namespace function_score {
    class DecayFunction extends gc.sdk.GCObject {
      static readonly _type = 'function_score::DecayFunction';
      static readonly $fields: DecayFunction.$Fields;
      f: gc.core.field | null;
      fieldName: string | null;
      origin: number;
      scale: number;
      offset: number | null;
      decayType: gc.function_score.DecayType;
      decayValue: number | null;
      constructor(f: gc.core.field | null, fieldName: string | null, origin: number, scale: number, offset: number | null, decayType: gc.function_score.DecayType, decayValue?: number | null);
      static createFrom(fields: {f?: gc.core.field | null, fieldName?: string | null, origin: number, scale: number, offset?: number | null, decayType: gc.function_score.DecayType, decayValue?: number | null}): DecayFunction;
    }
    namespace DecayFunction {
      interface $Fields {
        f: 0;
        fieldName: 1;
        origin: 2;
        scale: 3;
        offset: 4;
        decayType: 5;
        decayValue: 6;
      }
    }

    class DecayType extends gc.sdk.GCEnum {
      static readonly _type = 'function_score::DecayType';
      static readonly $fields: DecayType[];
      key: DecayType.Field;
      constructor(type: gc.sdk.AbiType, offset: number, key: DecayType.Field);
      static gaussian: DecayType;
      static linear: DecayType;
      static exponential: DecayType;
    }
    namespace DecayType  {
      type Field = "gaussian"|"linear"|"exponential";
    }

    class FunctionScoreAccel extends gc.sdk.GCObject {
      static readonly _type = 'function_score::FunctionScoreAccel';
    }

    class FieldValueFactor extends gc.sdk.GCObject {
      static readonly _type = 'function_score::FieldValueFactor';
      static readonly $fields: FieldValueFactor.$Fields;
      f: gc.core.field | null;
      fieldName: string | null;
      factor: number | null;
      modifier: gc.text_index_types.FieldModifier | null;
      missing: number | null;
      constructor(f?: gc.core.field | null, fieldName?: string | null, factor?: number | null, modifier?: gc.text_index_types.FieldModifier | null, missing?: number | null);
      static createFrom(fields: {f?: gc.core.field | null, fieldName?: string | null, factor?: number | null, modifier?: gc.text_index_types.FieldModifier | null, missing?: number | null}): FieldValueFactor;
    }
    namespace FieldValueFactor {
      interface $Fields {
        f: 0;
        fieldName: 1;
        factor: 2;
        modifier: 3;
        missing: 4;
      }
    }

    class FunctionScoreEngine extends gc.sdk.GCObject {
      static readonly _type = 'function_score::FunctionScoreEngine';
    }

    class FunctionScoreConfig extends gc.sdk.GCObject {
      static readonly _type = 'function_score::FunctionScoreConfig';
      static readonly $fields: FunctionScoreConfig.$Fields;
      decayFunctions: globalThis.Array<gc.function_score.DecayFunction> | null;
      fieldValueFactors: globalThis.Array<gc.function_score.FieldValueFactor> | null;
      scoreMode: gc.text_index_types.ScoreMode | null;
      boostMode: gc.text_index_types.BoostMode | null;
      constructor(decayFunctions?: globalThis.Array<gc.function_score.DecayFunction> | null, fieldValueFactors?: globalThis.Array<gc.function_score.FieldValueFactor> | null, scoreMode?: gc.text_index_types.ScoreMode | null, boostMode?: gc.text_index_types.BoostMode | null);
      static createFrom(fields: {decayFunctions?: globalThis.Array<gc.function_score.DecayFunction> | null, fieldValueFactors?: globalThis.Array<gc.function_score.FieldValueFactor> | null, scoreMode?: gc.text_index_types.ScoreMode | null, boostMode?: gc.text_index_types.BoostMode | null}): FunctionScoreConfig;
    }
    namespace FunctionScoreConfig {
      interface $Fields {
        decayFunctions: 0;
        fieldValueFactors: 1;
        scoreMode: 2;
        boostMode: 3;
      }
    }

  }

  namespace fusion {
    class FusionAccum extends gc.sdk.GCObject {
      static readonly _type = 'fusion::FusionAccum';
      static readonly $fields: FusionAccum.$Fields;
      score: number;
      terms: globalThis.Array<string>;
      termLookup: globalThis.Map<string, boolean> | null;
      constructor(score: number, terms: globalThis.Array<string>, termLookup?: globalThis.Map<string, boolean> | null);
      static createFrom(fields: {score: number, terms: globalThis.Array<string>, termLookup?: globalThis.Map<string, boolean> | null}): FusionAccum;
    }
    namespace FusionAccum {
      interface $Fields {
        score: 0;
        terms: 1;
        termLookup: 2;
      }
    }

    class FederatedSearch extends gc.sdk.GCObject {
      static readonly _type = 'fusion::FederatedSearch';
    }

    class FusionInput extends gc.sdk.GCObject {
      static readonly _type = 'fusion::FusionInput';
      static readonly $fields: FusionInput.$Fields;
      results: globalThis.Array<gc.bm25_engine.BM25Result>;
      weight: number;
      constructor(results: globalThis.Array<gc.bm25_engine.BM25Result>, weight: number);
      static createFrom(fields: {results: globalThis.Array<gc.bm25_engine.BM25Result>, weight: number}): FusionInput;
    }
    namespace FusionInput {
      interface $Fields {
        results: 0;
        weight: 1;
      }
    }

    class Fusion extends gc.sdk.GCObject {
      static readonly _type = 'fusion::Fusion';
    }

  }

  namespace lm_dirichlet_engine {
    class LMDAccum extends gc.sdk.GCObject {
      static readonly _type = 'lm_dirichlet_engine::LMDAccum';
      static readonly $fields: LMDAccum.$Fields;
      score: number;
      terms: globalThis.Array<string>;
      constructor(score: number, terms: globalThis.Array<string>);
      static createFrom(fields: {score: number, terms: globalThis.Array<string>}): LMDAccum;
    }
    namespace LMDAccum {
      interface $Fields {
        score: 0;
        terms: 1;
      }
    }

    class LMDirichletEngine extends gc.sdk.GCObject {
      static readonly _type = 'lm_dirichlet_engine::LMDirichletEngine';
    }

    class LMDirichletAccel extends gc.sdk.GCObject {
      static readonly _type = 'lm_dirichlet_engine::LMDirichletAccel';
    }

  }

  namespace mmr {
    class MMR extends gc.sdk.GCObject {
      static readonly _type = 'mmr::MMR';
    }

  }

  namespace ranking_rules {
    class RankingRule extends gc.sdk.GCEnum {
      static readonly _type = 'ranking_rules::RankingRule';
      static readonly $fields: RankingRule[];
      key: RankingRule.Field;
      constructor(type: gc.sdk.AbiType, offset: number, key: RankingRule.Field);
      static words: RankingRule;
      static typo: RankingRule;
      static proximity: RankingRule;
      static attribute: RankingRule;
      static sort: RankingRule;
      static exactness: RankingRule;
    }
    namespace RankingRule  {
      type Field = "words"|"typo"|"proximity"|"attribute"|"sort"|"exactness";
    }

    class RankingRulesEngine extends gc.sdk.GCObject {
      static readonly _type = 'ranking_rules::RankingRulesEngine';
    }

    class RankingCandidate extends gc.sdk.GCObject {
      static readonly _type = 'ranking_rules::RankingCandidate';
      static readonly $fields: RankingCandidate.$Fields;
      key: string;
      value: any | null;
      score: number;
      matchedTerms: globalThis.Array<string> | null;
      matchedWordCount: number | bigint | null;
      typoCount: number | bigint | null;
      minProximity: number | bigint | null;
      firstMatchPosition: number | bigint | null;
      isExactMatch: boolean | null;
      sortValue: number | null;
      constructor(key: string, value: any | null, score: number, matchedTerms?: globalThis.Array<string> | null, matchedWordCount?: number | bigint | null, typoCount?: number | bigint | null, minProximity?: number | bigint | null, firstMatchPosition?: number | bigint | null, isExactMatch?: boolean | null, sortValue?: number | null);
      static createFrom(fields: {key: string, value?: any | null, score: number, matchedTerms?: globalThis.Array<string> | null, matchedWordCount?: number | bigint | null, typoCount?: number | bigint | null, minProximity?: number | bigint | null, firstMatchPosition?: number | bigint | null, isExactMatch?: boolean | null, sortValue?: number | null}): RankingCandidate;
    }
    namespace RankingCandidate {
      interface $Fields {
        key: 0;
        value: 1;
        score: 2;
        matchedTerms: 3;
        matchedWordCount: 4;
        typoCount: 5;
        minProximity: 6;
        firstMatchPosition: 7;
        isExactMatch: 8;
        sortValue: 9;
      }
    }

  }

  namespace search_accel {
    class SearchAccel extends gc.sdk.GCObject {
      static readonly _type = 'search_accel::SearchAccel';
    }

  }

  namespace char_map {
    class CharMap extends gc.sdk.GCObject {
      static readonly _type = 'char_map::CharMap';
    }

  }

  namespace doc_reader {
    class DocReader extends gc.sdk.GCObject {
      static readonly _type = 'doc_reader::DocReader';
    }

  }

  namespace regex_accel {
    class RegexAccel extends gc.sdk.GCObject {
      static readonly _type = 'regex_accel::RegexAccel';
    }

  }

  namespace regex_utils {
    class RegexUtils extends gc.sdk.GCObject {
      static readonly _type = 'regex_utils::RegexUtils';
    }

    class RegexMatch extends gc.sdk.GCObject {
      static readonly _type = 'regex_utils::RegexMatch';
      static readonly $fields: RegexMatch.$Fields;
      matched: boolean;
      startPos: number | bigint;
      endPos: number | bigint;
      text: string;
      constructor(matched: boolean, startPos: number | bigint, endPos: number | bigint, text: string);
      static createFrom(fields: {matched: boolean, startPos: number | bigint, endPos: number | bigint, text: string}): RegexMatch;
    }
    namespace RegexMatch {
      interface $Fields {
        matched: 0;
        startPos: 1;
        endPos: 2;
        text: 3;
      }
    }

  }

  namespace snippet {
    class SnippetExtractor extends gc.sdk.GCObject {
      static readonly _type = 'snippet::SnippetExtractor';
    }

    class WindowResult extends gc.sdk.GCObject {
      static readonly _type = 'snippet::WindowResult';
      static readonly $fields: WindowResult.$Fields;
      startWord: number | bigint;
      endWord: number | bigint;
      constructor(startWord: number | bigint, endWord: number | bigint);
      static createFrom(fields: {startWord: number | bigint, endWord: number | bigint}): WindowResult;
    }
    namespace WindowResult {
      interface $Fields {
        startWord: 0;
        endWord: 1;
      }
    }

    class SnippetFragment extends gc.sdk.GCObject {
      static readonly _type = 'snippet::SnippetFragment';
      static readonly $fields: SnippetFragment.$Fields;
      text: string;
      score: number;
      startPos: number | bigint;
      endPos: number | bigint;
      constructor(text: string, score: number, startPos: number | bigint, endPos: number | bigint);
      static createFrom(fields: {text: string, score: number, startPos: number | bigint, endPos: number | bigint}): SnippetFragment;
    }
    namespace SnippetFragment {
      interface $Fields {
        text: 0;
        score: 1;
        startPos: 2;
        endPos: 3;
      }
    }

  }

  namespace stop_words {
    class StopWords extends gc.sdk.GCObject {
      static readonly _type = 'stop_words::StopWords';
    }

  }

  namespace address_index {
    class AddressDoc extends gc.sdk.GCObject {
      static readonly _type = 'address_index::AddressDoc';
      static readonly $fields: AddressDoc.$Fields;
      payload: any | null;
      street: string;
      cityText: string;
      postalCodeText: string;
      houseNumberText: string | null;
      country: string | null;
      constructor(payload: any | null, street: string, cityText: string, postalCodeText: string, houseNumberText?: string | null, country?: string | null);
      static createFrom(fields: {payload?: any | null, street: string, cityText: string, postalCodeText: string, houseNumberText?: string | null, country?: string | null}): AddressDoc;
    }
    namespace AddressDoc {
      interface $Fields {
        payload: 0;
        street: 1;
        cityText: 2;
        postalCodeText: 3;
        houseNumberText: 4;
        country: 5;
      }
    }

    class AddressMatchLevel extends gc.sdk.GCEnum {
      static readonly _type = 'address_index::AddressMatchLevel';
      static readonly $fields: AddressMatchLevel[];
      key: AddressMatchLevel.Field;
      constructor(type: gc.sdk.AbiType, offset: number, key: AddressMatchLevel.Field);
      static address: AddressMatchLevel;
      static street: AddressMatchLevel;
      static area: AddressMatchLevel;
    }
    namespace AddressMatchLevel  {
      type Field = "address"|"street"|"area";
    }

    class AddressSearchHit extends gc.sdk.GCObject {
      static readonly _type = 'address_index::AddressSearchHit';
      static readonly $fields: AddressSearchHit.$Fields;
      result: gc.text_index_types.TextResult;
      houseNumberMatch: boolean | null;
      level: gc.address_index.AddressMatchLevel | null;
      constructor(result: gc.text_index_types.TextResult, houseNumberMatch?: boolean | null, level?: gc.address_index.AddressMatchLevel | null);
      static createFrom(fields: {result: gc.text_index_types.TextResult, houseNumberMatch?: boolean | null, level?: gc.address_index.AddressMatchLevel | null}): AddressSearchHit;
    }
    namespace AddressSearchHit {
      interface $Fields {
        result: 0;
        houseNumberMatch: 1;
        level: 2;
      }
    }

    class AddressIndex<T = any> extends gc.sdk.GCObject {
      static readonly _type = 'address_index::AddressIndex';
      static readonly $fields: AddressIndex.$Fields;
      index: gc.text_index.TextIndex<gc.address_index.AddressDoc>;
      lang: gc.text_index_types.TextSearchLanguage;
      constructor(index: gc.text_index.TextIndex<gc.address_index.AddressDoc>, lang: gc.text_index_types.TextSearchLanguage);
      static createFrom<T>(fields: {index: gc.text_index.TextIndex<gc.address_index.AddressDoc>, lang: gc.text_index_types.TextSearchLanguage}): AddressIndex;
    }
    namespace AddressIndex {
      interface $Fields {
        index: 0;
        lang: 1;
      }
    }

    class AddressComponents extends gc.sdk.GCObject {
      static readonly _type = 'address_index::AddressComponents';
      static readonly $fields: AddressComponents.$Fields;
      roads: globalThis.Array<string>;
      houseNumbers: globalThis.Array<string>;
      city: string | null;
      postcode: string | null;
      constructor(roads: globalThis.Array<string>, houseNumbers: globalThis.Array<string>, city?: string | null, postcode?: string | null);
      static createFrom(fields: {roads: globalThis.Array<string>, houseNumbers: globalThis.Array<string>, city?: string | null, postcode?: string | null}): AddressComponents;
    }
    namespace AddressComponents {
      interface $Fields {
        roads: 0;
        houseNumbers: 1;
        city: 2;
        postcode: 3;
      }
    }

  }

  namespace postal {
    class PostalExpandOptions extends gc.sdk.GCObject {
      static readonly _type = 'postal::PostalExpandOptions';
      static readonly $fields: PostalExpandOptions.$Fields;
      languages: globalThis.Array<string> | null;
      constructor(languages?: globalThis.Array<string> | null);
      static createFrom(fields: {languages?: globalThis.Array<string> | null}): PostalExpandOptions;
    }
    namespace PostalExpandOptions {
      interface $Fields {
        languages: 0;
      }
    }

    class PostalComponent extends gc.sdk.GCObject {
      static readonly _type = 'postal::PostalComponent';
      static readonly $fields: PostalComponent.$Fields;
      label: string;
      value: string;
      constructor(label: string, value: string);
      static createFrom(fields: {label: string, value: string}): PostalComponent;
    }
    namespace PostalComponent {
      interface $Fields {
        label: 0;
        value: 1;
      }
    }

    class PostalAddress extends gc.sdk.GCObject {
      static readonly _type = 'postal::PostalAddress';
    }

    class PostalOptions extends gc.sdk.GCObject {
      static readonly _type = 'postal::PostalOptions';
      static readonly $fields: PostalOptions.$Fields;
      language: string | null;
      country: string | null;
      constructor(language?: string | null, country?: string | null);
      static createFrom(fields: {language?: string | null, country?: string | null}): PostalOptions;
    }
    namespace PostalOptions {
      interface $Fields {
        language: 0;
        country: 1;
      }
    }

    class PostalParsedAddress extends gc.sdk.GCObject {
      static readonly _type = 'postal::PostalParsedAddress';
      static readonly $fields: PostalParsedAddress.$Fields;
      house: string | null;
      house_number: string | null;
      road: string | null;
      suburb: string | null;
      city_district: string | null;
      city: string | null;
      state_district: string | null;
      state: string | null;
      postcode: string | null;
      country: string | null;
      unit: string | null;
      level: string | null;
      staircase: string | null;
      entrance: string | null;
      po_box: string | null;
      near: string | null;
      world_region: string | null;
      island: string | null;
      category: string | null;
      constructor(house?: string | null, house_number?: string | null, road?: string | null, suburb?: string | null, city_district?: string | null, city?: string | null, state_district?: string | null, state?: string | null, postcode?: string | null, country?: string | null, unit?: string | null, level?: string | null, staircase?: string | null, entrance?: string | null, po_box?: string | null, near?: string | null, world_region?: string | null, island?: string | null, category?: string | null);
      static createFrom(fields: {house?: string | null, house_number?: string | null, road?: string | null, suburb?: string | null, city_district?: string | null, city?: string | null, state_district?: string | null, state?: string | null, postcode?: string | null, country?: string | null, unit?: string | null, level?: string | null, staircase?: string | null, entrance?: string | null, po_box?: string | null, near?: string | null, world_region?: string | null, island?: string | null, category?: string | null}): PostalParsedAddress;
    }
    namespace PostalParsedAddress {
      interface $Fields {
        house: 0;
        house_number: 1;
        road: 2;
        suburb: 3;
        city_district: 4;
        city: 5;
        state_district: 6;
        state: 7;
        postcode: 8;
        country: 9;
        unit: 10;
        level: 11;
        staircase: 12;
        entrance: 13;
        po_box: 14;
        near: 15;
        world_region: 16;
        island: 17;
        category: 18;
      }
    }

  }

  interface $TypesMap {
    'core::Array<caclrLoader::CaclrResponseCantonItem>': 0,
    'core::Array<mengplaz::AddressFullRecordRef>': 0,
    'core::NodeInfo<core::time>': 0,
    'core::Array<core::geo>': 0,
    'core::Table<util::GaussianProfileSlot?>': 0,
    'core::SearchResult<core::String,core::Array<core::node<golden::GoldenCity>>>': 0,
    'core::Map<core::int,bm25_engine::BM25Result>': 0,
    'core::nodeIndex<core::String,core::node<caclr::CaclrCanton>>': 0,
    'core::Map<core::String,core::any?>': 0,
    'core::nodeIndexBucket<core::String,core::node<mengplaz::DataSource>>': 0,
    'core::node<golden::GoldenConstituency>': 0,
    'core::Array<core::SearchResult<core::String,core::node<percolate_engine::PercolatedQuery>>>': 0,
    'core::Chars': 0,
    'core::nodeIndex<core::String,core::Array<core::node<caclr::CaclrStreet>>>': 0,
    'core::nodeIndex<core::String,core::node<golden::GoldenAddress>>': 0,
    'core::Array<core::SearchResult<core::geo,core::any?>>': 0,
    'core::nodeList$sample$args': 0,
    'core::nodeIndex<core::String,core::node<osm::OsmAddress>>': 0,
    'core::Array<boolean_parser::BooleanQuery>': 0,
    'core::nodeIndexBucket<core::String,core::node<mengplaz::AddressRecordProvider>>': 0,
    'core::Array<core::Array<core::String>>': 0,
    'core::Array<bm25_engine::BM25Result>': 0,
    'core::Array<privateApi::SourceRef>': 0,
    'core::Array<text_index_types::TextEntry>': 0,
    'core::Array<core::int?>': 0,
    'core::Array<core::SearchResult<core::node<mengplaz::AddressRecordProvider>,core::Array<mengplaz::ReconciliationCandidate>>>': 0,
    'core::Map<core::String,runtime::HeaderObject>': 0,
    'core::SearchResult<core::String,core::node<text_index_types::TrigramPostings>>': 0,
    'core::Array<fusion::FusionInput>': 0,
    'core::Array<api::LinkedRecordDetails<caclr::CaclrAddressFullRecord>>': 0,
    'core::SearchResult<core::String,core::Array<core::node<bda::BdaCity>>>': 0,
    'core::Tuple<core::String,core::String?>': 0,
    'core::Map<core::String,core::Array<facet_types::TermCount>>': 0,
    'core::Array<core::Map<core::String,core::bool>>': 0,
    'core::SearchResult<core::Tensor,core::node<text_index_types::IndexChunk>>': 0,
    'core::nodeIndexBucket<core::String,core::Array<core::node<golden::GoldenStreet>>>': 0,
    'core::Map<core::int,lm_dirichlet_engine::LMDAccum>': 0,
    'core::Array<core::node<bda::BdaCity>>': 0,
    'core::node<text_index_types::IndexEntry>': 0,
    'core::node<core::VectorIndex<core::node<text_index_types::IndexChunk>>>': 0,
    'core::SearchResult<core::String,core::node<caclr::CaclrConstituency>>': 0,
    'core::nodeGeo$sample$args': 0,
    'core::Tuple<core::int,core::int>': 0,
    'core::Array<core::SearchResult<core::node<core::Tensor>,core::node<text_index_types::IndexChunk>>>': 0,
    'core::nodeIndexBucket<core::String,core::Array<core::node<bda::BdaStreet>>>': 0,
    'core::Error': 0,
    'core::Map<core::node<osm::OsmAddress>,core::node<golden::GoldenAddress>>': 0,
    'core::nodeTime$sample$args': 0,
    'core::Array<core::SearchResult<core::String,core::node<bda::BdaCity>>>': 0,
    'core::Array<core::node<caclr::CaclrAddress>>': 0,
    'core::SearchResult<core::String,core::int>': 0,
    'core::Array<core::Tuple<core::int,core::int>>': 0,
    'core::Array<core::nodeList>': 0,
    'core::Map<core::int,core::Map<core::int,core::bool>>': 0,
    'core::SearchResult<core::node<mengplaz::AddressRecordProvider>,mengplaz::ReconciliationCandidate>': 0,
    'core::Array<mengplaz::SearchResult>': 0,
    'core::nodeIndexBucket<core::String,core::node<caclr::CaclrCanton>>': 0,
    'core::Array<core::node?>': 0,
    'core::Array<core::SearchResult<core::String,core::node<caclr::CaclrStreet>>>': 0,
    'core::null': 0,
    'core::Map<core::String,core::int>': 0,
    'core::nodeIndex<core::String,core::node<golden::GoldenStreet>>': 0,
    'core::node': 0,
    'core::nodeIndex<core::String,core::node<percolate_engine::PercolatedQuery>>': 0,
    'core::Array<text_index_types::TermScorePair>': 0,
    'core::Array<io::CsvColumnStatistics>': 0,
    'core::Array<core::node<golden::GoldenStreet>>': 0,
    'core::Array<core::bool>': 0,
    'core::Tuple<core::int,core::any?>': 0,
    'core::Array<util::Quantizer>': 0,
    'core::nodeIndexBucket<core::node<core::Tensor>,core::node<text_index_types::IndexEntry>>': 0,
    'core::Array<facet_types::HistogramBucket>': 0,
    'core::Array<runtime::DayOfWeek>': 0,
    'core::SearchResult<core::String,core::node<text_index_types::IndexEntry>>': 0,
    'core::Array<text_index_types::SortClause>': 0,
    'core::nodeList<core::node<text_index_types::IndexChunk>>': 0,
    'core::Array<mengplaz::ReconciliationCandidate>': 0,
    'core::Array<mengplaz::SourceCountSnapshot>': 0,
    'core::node<text_index_types::TrigramPostings>': 0,
    'core::VectorVertex': 0,
    'core::nodeIndexBucket<core::String,core::node<bda::BdaMunicipality>>': 0,
    'core::TensorType': 0,
    'core::nodeIndexBucket<core::String,core::Array<core::node<osm::OsmStreet>>>': 0,
    'core::Array<facet_types::NumericBucketCount>': 0,
    'core::node<core::bool>': 0,
    'core::Array<caclrLoader::CaclrResponseStreetItem>': 0,
    'core::Array<core::GeoBox>': 0,
    'core::nodeIndex<core::String,core::node<caclr::CaclrMunicipality>>': 0,
    'core::Map<core::int,core::float>': 0,
    'core::nodeTime': 0,
    'core::Array<core::node<mengplaz::ReconciliationReport>>': 0,
    'core::nodeIndexBucket<core::String,core::Array<core::node<bda::BdaCity>>>': 0,
    'core::Array<core::any?>': 0,
    'core::Map<core::node<mengplaz::AddressRecordProvider>,core::node<mengplaz::AddressRecordProvider>>': 0,
    'core::node<address_index::AddressIndex<core::String>?>': 0,
    'core::nodeIndexBucket<core::String,core::node<golden::GoldenAddress>>': 0,
    'core::Array<sourceTextSearch::SourceTextIndexStats>': 0,
    'core::Array<snippet::SnippetFragment>': 0,
    'core::Map<core::String,core::geo>': 0,
    'core::Array<runtime::McpRole>': 0,
    'core::Tuple<core::int,core::node<golden::GoldenAddress>>': 0,
    'core::Array<api::GeoJSONFeature>': 0,
    'core::Map<core::String,core::Array<facet_types::NumericBucketCount>>': 0,
    'core::nodeIndexBucket<core::String,core::node<text_index_types::TrigramPostings>>': 0,
    'core::nodeList<core::node<bda::BdaAddress>>': 0,
    'core::Tensor': 0,
    'core::Array<runtime::Frame>': 0,
    'core::nodeIndex<core::String,core::Array<core::node<golden::GoldenCity>>>': 0,
    'core::any': 0,
    'core::FloatPrecision': 0,
    'core::Map<core::char,core::String>': 0,
    'core::Array<runtime::RuntimeUsage>': 0,
    'core::node<text_index::TextIndex<core::String>?>': 0,
    'core::node<core::Map<core::char,core::String>?>': 0,
    'core::Array<core::Array<facet_types::TermCount>>': 0,
    'core::GeoBox': 0,
    'core::Array<text_index_types::RangeFilter>': 0,
    'core::Tuple<core::int,document::Sentence>': 0,
    'core::nodeIndexBucket<core::String,core::node<address_index::AddressIndex<core::String>?>>': 0,
    'core::CalendarUnit': 0,
    'core::Map<core::String,core::bool>': 0,
    'core::Array<api::LinkedRecordDetails<osm::OsmAddressFullRecord>>': 0,
    'core::nodeGeo<core::node<osm::OsmAddress>>$search$args': 0,
    'core::node<mengplaz::StreetRecordProvider>': 0,
    'core::SearchResult': 0,
    'core::Map<core::int,core::int>': 0,
    'core::Array<address_index::AddressSearchHit>': 0,
    'core::nodeIndex<core::String,core::node<mengplaz::AddressRecordProvider>>': 0,
    'core::Array<core::Map<core::char,core::String>>': 0,
    'core::nodeIndexBucket<core::String,core::node<percolate_engine::PercolatedQuery>>': 0,
    'core::nodeIndexBucket<core::String,core::node<golden::GoldenStreet>>': 0,
    'core::Array<fuzzy_engine::TrigramCandidate>': 0,
    'core::Tuple<core::int,core::node<text_index_types::IndexEntry>>': 0,
    'core::TimeZone': 0,
    'core::Array<privateApi::GlobalQualityEntry>': 0,
    'core::nodeIndex<core::String,core::node<text_index_types::PhoneticPostings>>': 0,
    'core::Map<core::String,core::float>': 0,
    'core::nodeIndex<core::String,core::node<caclr::CaclrCity>>': 0,
    'core::Map<core::String,core::String>': 0,
    'core::DurationUnit': 0,
    'core::Array<core::SearchResult<core::String,core::node<caclr::CaclrConstituency>>>': 0,
    'core::Array<text_index_types::FieldConfig>': 0,
    'core::Array<core::int>': 0,
    'core::Map<core::int,quorum_engine::QuorumAccum>': 0,
    'core::Array<runtime::McpResource>': 0,
    'core::nodeIndexBucket<core::String,core::Array<core::node<caclr::CaclrCity>>>': 0,
    'core::nodeIndex<core::String,core::Array<core::node<caclr::CaclrCity>>>': 0,
    'core::Array<core::SearchResult<core::String,core::node<caclr::CaclrAddress>>>': 0,
    'core::Array<runtime::McpPrompt>': 0,
    'core::nodeIndex<core::String,core::node<bda::BdaAddress>>': 0,
    'core::nodeIndexBucket<core::String,core::node<caclr::CaclrCity>>': 0,
    'core::Array<io::S3Bucket>': 0,
    'core::Map<core::int,core::node<text_index_types::TrieNode>>': 0,
    'core::Map<core::int,core::bool>': 0,
    'core::Map<core::String,text_tokenizer::TermFrequency>': 0,
    'core::node<mengplaz::ReconciliationCandidateScore>': 0,
    'core::Array<core::SearchResult<core::String,core::node<bda::BdaStreet>>>': 0,
    'core::Map': 0,
    'core::MathConstants': 0,
    'core::SearchResult<core::String,core::node<osm::OsmCity>>': 0,
    'core::nodeList<document::Section>': 0,
    'core::float': 0,
    'core::Tuple<core::int,core::node<bda::BdaStreet>>': 0,
    'core::nodeIndex<core::String,core::node<golden::GoldenConstituency>>': 0,
    'core::Array<io::File>': 0,
    'core::Tuple<core::time,runtime::RuntimeUsage>': 0,
    'core::Array<core::SearchResult<core::String,core::node<golden::GoldenCanton>>>': 0,
    'core::Array<core::SearchResult<core::String,core::node<mengplaz::DataSource>>>': 0,
    'core::nodeIndex<core::String,core::node<address_index::AddressIndex<core::String>?>>': 0,
    'core::String': 0,
    'core::field': 0,
    'core::Buffer': 0,
    'core::Array<core::SearchResult<core::String,core::node<text_index_types::IndexEntry>>>': 0,
    'core::Table$applyMappings$args': 0,
    'core::Array<core::SearchResult<core::String,core::node<golden::GoldenConstituency>>>': 0,
    'core::Array<core::SearchResult<core::node<core::Tensor>,core::node<text_index_types::IndexEntry>>>': 0,
    'core::nodeIndex$sample$args': 0,
    'core::Array<core::Map<core::String,core::any>>': 0,
    'core::Array<function_score::DecayFunction>': 0,
    'core::SearchResult<core::String,core::node<osm::OsmStreet>>': 0,
    'core::Array<core::String>': 0,
    'core::Array<core::any>': 0,
    'core::Map<core::String,runtime::SchemaObject>': 0,
    'core::node<caclr::CaclrToken?>': 0,
    'core::SearchResult<core::geo,core::node<osm::OsmPartialAddress>>': 0,
    'core::Array<api::DeprecatedCountRow>': 0,
    'core::Array<lm_dirichlet_engine::LMDAccum>': 0,
    'core::nodeGeo$search$args': 0,
    'core::nodeIndex<core::String,core::node<golden::GoldenCanton>>': 0,
    'core::nodeList<core::node<golden::GoldenAddress>>': 0,
    'core::nodeTime<mengplaz::QualityEvent>': 0,
    'core::TableColumnMapping': 0,
    'core::Array<facet_types::TermCount>': 0,
    'core::Array<core::SearchResult<core::String,core::node<text_index_types::TrigramPostings>>>': 0,
    'core::Array<core::node<golden::GoldenAddress>>': 0,
    'core::Array<core::Array>': 0,
    'core::Map<core::String,core::Map<core::String,core::int>>': 0,
    'core::Array<text_index_types::TermFilter>': 0,
    'core::node<mengplaz::DataSource>': 0,
    'core::nodeIndex<core::String,core::node<golden::GoldenCity>>': 0,
    'core::Map<core::String,runtime::ResponseObject>': 0,
    'core::Array<backupExporter::BkGoldenQualityDTO>': 0,
    'core::Array<text_index_types::TermExplanation>': 0,
    'core::nodeIndexBucket<core::String,core::node<golden::GoldenCity>>': 0,
    'core::type': 0,
    'core::node<caclr::CaclrConstituency>': 0,
    'core::SearchResult<core::String,core::node<bda::BdaMunicipality>>': 0,
    'core::SearchResult<core::String,core::node<caclr::CaclrCanton>>': 0,
    'core::Array<facet_types::NumericRangeBucket>': 0,
    'core::nodeIndex$info$args': 0,
    'core::Array<facet_types::HistogramResult>': 0,
    'core::Array<core::SearchResult<core::String,core::node<golden::GoldenStreet>>>': 0,
    'core::nodeIndexBucket<core::String,core::node<bda::BdaCity>>': 0,
    'core::Tuple<core::geo,core::any?>': 0,
    'core::node<golden::GoldenCity>': 0,
    'core::node<golden::GoldenCanton>': 0,
    'core::Array<runtime::ZoneUsage>': 0,
    'core::nodeGeo<core::node<bda::BdaAddress>>$search$args': 0,
    'core::nodeIndexBucket<core::String,core::int>': 0,
    'core::nodeIndexBucket<core::String,core::node<osm::OsmStreet>>': 0,
    'core::Array<core::SearchResult<core::geo,core::node<golden::GoldenAddress>>>': 0,
    'core::Array<core::SearchResult<core::geo,core::node<osm::OsmPartialAddress>>>': 0,
    'core::nodeList$info$args': 0,
    'core::node<caclr::CaclrCity>': 0,
    'core::node<caclr::CaclrMunicipality>': 0,
    'core::Array<text_tokenizer::TokenInfo>': 0,
    'core::SearchResult<core::String,core::node<address_index::AddressIndex<core::String>?>>': 0,
    'core::Map<core::node<golden::GoldenStreet>,mengplaz::Match<core::node<golden::GoldenStreet>>>': 0,
    'core::Map<core::node<text_index_types::NormalizedTerm>,core::bool>': 0,
    'core::Array<core::char>': 0,
    'core::node<bda::BdaAddress>': 0,
    'core::Array<core::node<bda::BdaStreet>>': 0,
    'core::nodeIndexBucket<core::String,core::Array<core::node<golden::GoldenCity>>>': 0,
    'core::nodeIndex<core::String,core::Array<core::node<golden::GoldenStreet>>>': 0,
    'core::GeoCircle': 0,
    'core::Array<phrase_engine::PhraseCandidate>': 0,
    'core::Array<text_index_types::CurationRule>': 0,
    'core::Table<core::Tuple<core::time,core::any?>>': 0,
    'core::nodeIndex<core::node<mengplaz::AddressRecordProvider>,core::Array<mengplaz::ReconciliationCandidate>>': 0,
    'core::Array<core::ErrorFrame>': 0,
    'core::Array<core::SearchResult<core::String,core::node<caclr::CaclrMunicipality>>>': 0,
    'core::nodeIndexBucket<core::String,core::node<osm::OsmAddress>>': 0,
    'core::Array<core::node<core::VectorVertex>?>': 0,
    'core::Tuple<core::int,core::node<bda::BdaAddress>>': 0,
    'core::Array<core::TableColumnMapping>': 0,
    'core::node<core::Tensor>': 0,
    'core::Array<core::node<golden::GoldenCity>>': 0,
    'core::Array<core::node<text_index_types::NormalizedTerm>>': 0,
    'core::node<core::String>': 0,
    'core::SearchResult<core::String,core::node<bda::BdaAddress>>': 0,
    'core::node<core::VectorVertex>': 0,
    'core::nodeIndex<core::String,core::node<caclr::CaclrConstituency>>': 0,
    'core::SearchResult<core::node<core::Tensor>,core::any?>': 0,
    'core::char': 0,
    'core::node<caclr::CaclrAddress>': 0,
    'core::Array<mengplaz::LinkedRecordEntry>': 0,
    'core::ErrorFrame': 0,
    'core::nodeIndex<core::String,core::node<text_index_types::TrigramPostings>>': 0,
    'core::Array<core::node<caclr::CaclrCity>>': 0,
    'core::SearchResult<core::String,core::Array<core::node<bda::BdaStreet>>>': 0,
    'core::nodeList<core::node<text_index_types::IndexEntry>>': 0,
    'core::node<osm::OsmCity>': 0,
    'core::Array<api::LinkedRecordDetails<bda::BdaAddressFullRecord>>': 0,
    'core::Array': 0,
    'core::Array<ranking_rules::RankingRule>': 0,
    'core::nodeIndexBucket<core::node<core::Tensor>,core::any?>': 0,
    'core::Array<core::SearchResult<core::String,core::node<core::String>>>': 0,
    'core::nodeIndex<core::String,core::node<caclr::CaclrStreet>>': 0,
    'core::Date': 0,
    'core::Array<core::nodeGeo>': 0,
    'core::node<bda::BdaStreet>': 0,
    'core::SearchResult<core::geo,core::node<bda::BdaAddress>>': 0,
    'core::nodeIndexBucket<core::String,core::node<golden::GoldenConstituency>>': 0,
    'core::Array<core::SearchResult<core::String,core::Array<core::node<golden::GoldenCity>>>>': 0,
    'core::nodeIndexBucket<core::String,core::node<osm::OsmCity>>': 0,
    'core::Array<text_index_types::TermBoost>': 0,
    'core::nodeIndexBucket<core::String,core::node<caclr::CaclrConstituency>>': 0,
    'core::SearchResult<core::String,core::node<bda::BdaStreet>>': 0,
    'core::nodeIndexBucket<core::String,core::node<text_index_types::IndexEntry>>': 0,
    'core::nodeIndexBucket<core::String,core::node<caclr::CaclrStreet>>': 0,
    'core::node<osm::OsmStreet>': 0,
    'core::Array<runtime::IdentityGrant>': 0,
    'core::TensorDistance': 0,
    'core::SearchResult<core::String,core::node<caclr::CaclrCity>>': 0,
    'core::SearchResult<core::String,core::node<bda::BdaCity>>': 0,
    'core::Array<runtime::McpTask>': 0,
    'core::Array<core::SearchResult<core::String,core::node<bda::BdaMunicipality>>>': 0,
    'core::Array<core::Array<text_index_types::TextResult>>': 0,
    'core::Array<core::SearchResult<core::Tensor,core::node<text_index_types::IndexEntry>>>': 0,
    'core::geo': 0,
    'core::Array<runtime::HeaderObject>': 0,
    'core::Array<core::SearchResult<core::String,core::Array<core::node<caclr::CaclrStreet>>>>': 0,
    'core::SearchResult<core::String,core::node<mengplaz::DataSource>>': 0,
    'core::nodeTime$info$args': 0,
    'core::Array<core::SearchResult<core::String,core::Array<core::node<bda::BdaCity>>>>': 0,
    'core::Array<runtime::PeriodicTask>': 0,
    'core::ErrorCode': 0,
    'core::Array<backupExporter::BkManifestEntryDTO>': 0,
    'core::nodeIndex$search_closest$args': 0,
    'core::nodeTimeCursor': 0,
    'core::SearchResult<core::String,core::node<text_index_types::PhoneticPostings>>': 0,
    'core::nodeIndexBucket<core::node<mengplaz::AddressRecordProvider>,core::Array<mengplaz::ReconciliationCandidate>>': 0,
    'core::Array<mengplaz::Match<core::node<golden::GoldenCity>>>': 0,
    'core::node<text_index_types::NormalizedTerm>': 0,
    'core::SearchResult<core::String,core::node<golden::GoldenCanton>>': 0,
    'core::nodeIndex<core::node<core::Tensor>,core::node<text_index_types::IndexChunk>>': 0,
    'core::Array<mengplaz::Alias>': 0,
    'core::nodeGeo<core::node<golden::GoldenAddress>>': 0,
    'core::Array<suggest_engine::Suggestion>': 0,
    'core::SearchResult<core::geo,core::node<osm::OsmAddress>>': 0,
    'core::SearchResult<core::geo,core::node<golden::GoldenAddress>>': 0,
    'core::nodeTime<runtime::RuntimeUsage>': 0,
    'core::Array<core::SearchResult<core::String,core::Array<core::node<golden::GoldenStreet>>>>': 0,
    'core::Map<core::node<mengplaz::AddressRecordProvider>,mengplaz::ReconciliationCandidate>': 0,
    'core::Array<core::SearchResult<core::String,core::Array<core::node<caclr::CaclrCity>>>>': 0,
    'core::Array<core::SearchResult<core::String,core::node<golden::GoldenAddress>>>': 0,
    'core::Tuple<core::geo,core::node<osm::OsmPartialAddress>>': 0,
    'core::SortOrder': 0,
    'core::Array<runtime::McpTool>': 0,
    'core::nodeGeo<core::node<golden::GoldenAddress>>$search$args': 0,
    'core::nodeGeo<core::node<osm::OsmPartialAddress>>$search$args': 0,
    'core::Array<runtime::Variable>': 0,
    'core::SearchResult<core::String,core::node<golden::GoldenCity>>': 0,
    'core::Array<core::SearchResult<core::Tensor,core::any?>>': 0,
    'core::Array<core::node<text_index_types::TrieNode>>': 0,
    'core::nodeTime<core::float>': 0,
    'core::Array<facet_types::MetricAggregation>': 0,
    'core::Array<runtime::Identity>': 0,
    'core::node$resolve_all$args': 0,
    'core::SearchResult<core::String,core::Array<core::node<golden::GoldenStreet>>>': 0,
    'core::SearchResult<core::Tensor,core::any?>': 0,
    'core::nodeIndex<core::String,core::node<bda::BdaCity>>': 0,
    'core::nodeList<core::node<bda::BdaStreet>>': 0,
    'core::Array<privateApi::SourceCountSeries>': 0,
    'core::Array<core::SearchResult<core::node<core::Tensor>,core::any?>>': 0,
    'core::Array<core::Map<core::int,core::bool>>': 0,
    'core::Array<runtime::Permission>': 0,
    'core::Array<privateApi::MatchedCandidateDetail>': 0,
    'core::Array<core::Map<core::String,core::any?>>': 0,
    'core::GeoPoly': 0,
    'core::node<core::Map<core::char,core::bool>?>': 0,
    'core::Array<privateApi::SourceCountPoint>': 0,
    'core::nodeIndexBucket<core::String,core::node<golden::GoldenMunicipality>>': 0,
    'core::node<caclr::CaclrCanton>': 0,
    'core::Array<core::field>': 0,
    'core::SearchResult<core::node<core::Tensor>,core::node<text_index_types::IndexEntry>>': 0,
    'core::node<text_index_types::IndexChunk>': 0,
    'core::nodeList<core::node<osm::OsmPartialAddress>>': 0,
    'core::Array<mengplaz::StreetRecordRef>': 0,
    'core::Map<core::char,core::bool>': 0,
    'core::nodeList<core::node<text_index_types::NormalizedTerm>>': 0,
    'core::nodeIndex<core::node<core::Tensor>,core::any?>': 0,
    'core::SamplingMode': 0,
    'core::SearchResult<core::String,core::node<golden::GoldenConstituency>>': 0,
    'core::Array<facet_types::MetricResult>': 0,
    'core::Tuple<core::geo,core::node<golden::GoldenAddress>>': 0,
    'core::Array<core::SearchResult<core::geo,core::node<osm::OsmAddress>>>': 0,
    'core::nodeIndex<core::node<core::Tensor>,core::node<text_index_types::IndexEntry>>': 0,
    'core::nodeTime<mengplaz::SourceCountSnapshot>': 0,
    'core::Array<caclrLoader::CaclrResponseBuildingItem>': 0,
    'core::Array<privateApi::ReconciliationReportMatchView>': 0,
    'core::Tuple<core::time,mengplaz::QualityEvent>': 0,
    'core::NodeInfo<core::int>': 0,
    'core::nodeGeo<core::node<osm::OsmPartialAddress>>': 0,
    'core::Map<text_index_types::SearchMode,core::float>': 0,
    'core::Array<runtime::Job>': 0,
    'core::Array<facet_types::FacetRequest>': 0,
    'core::SearchResult<core::String,core::node<osm::OsmAddress>>': 0,
    'core::nodeList': 0,
    'core::Array<runtime::McpContentBlock>': 0,
    'core::nodeIndex<core::String,core::node<mengplaz::DataSource>>': 0,
    'core::nodeIndexBucket<core::String,core::node<caclr::CaclrMunicipality>>': 0,
    'core::Array<quorum_engine::QuorumAccum>': 0,
    'core::int': 0,
    'core::Tuple<core::time,core::any?>': 0,
    'core::node<percolate_engine::PercolatedQuery>': 0,
    'core::Array<core::SearchResult<core::String,core::node<caclr::CaclrCity>>>': 0,
    'core::Array<facet_types::HistogramAggregation>': 0,
    'core::Array<core::SearchResult<core::String,core::node<address_index::AddressIndex<core::String>?>>>': 0,
    'core::function': 0,
    'core::nodeGeo<core::node<osm::OsmAddress>>': 0,
    'core::Map<core::int,dfr_engine::DFRAccum>': 0,
    'core::duration': 0,
    'core::Array<core::SearchResult<core::Tensor,core::node<text_index_types::IndexChunk>>>': 0,
    'core::Array<core::SearchResult<core::String,core::node<golden::GoldenCity>>>': 0,
    'core::Array<core::node<bda::BdaAddress>>': 0,
    'core::nodeIndexBucket<core::node<mengplaz::AddressRecordProvider>,mengplaz::ReconciliationCandidate>': 0,
    'core::Array<core::NodeInfo<core::geo>>': 0,
    'core::Array<text_index_types::TextResult>': 0,
    'core::Array<core::SearchResult<core::geo,core::node<bda::BdaAddress>>>': 0,
    'core::Array<core::NodeInfo<core::time>>': 0,
    'core::Array<core::NodeInfo>': 0,
    'core::nodeIndex': 0,
    'core::SearchResult<core::String,core::Array<core::node<caclr::CaclrStreet>>>': 0,
    'core::NodeInfo<core::geo>': 0,
    'core::Map<core::String,core::Map<core::String,core::bool>>': 0,
    'core::node<mengplaz::AddressRecordProvider>': 0,
    'core::Map<core::node<mengplaz::DataSource>,core::Array<core::float>>': 0,
    'core::nodeIndexBucket<core::String,core::node<core::String>>': 0,
    'core::NodeInfo': 0,
    'core::node<golden::GoldenAddress>': 0,
    'core::VectorIndex': 0,
    'core::SearchResult<core::String,core::node<caclr::CaclrAddress>>': 0,
    'core::Array<text_index_types::SearchMode>': 0,
    'core::Map<core::int,text_index_types::Snippet>': 0,
    'core::node<osm::OsmPartialAddress>': 0,
    'core::SearchResult<core::String,core::node<caclr::CaclrMunicipality>>': 0,
    'core::Array<core::SearchResult<core::String,core::int>>': 0,
    'core::Array<fusion::FusionAccum>': 0,
    'core::Array<bdaLoader::BdaAddressLine>': 0,
    'core::Array<core::Tuple<core::String,core::String?>>': 0,
    'core::nodeGeo': 0,
    'core::node<core::VectorIndex<core::node<text_index_types::IndexEntry>>>': 0,
    'core::nodeIndex<core::String,core::Array<core::node<osm::OsmStreet>>>': 0,
    'core::Map<core::int,core::Array<core::String>>': 0,
    'core::nodeIndex<core::String,core::node<osm::OsmCity>>': 0,
    'core::nodeIndex<core::String,core::node<osm::OsmStreet>>': 0,
    'core::nodeIndex<core::String,core::Array<core::node<bda::BdaCity>>>': 0,
    'core::Array<core::SearchResult<core::node<mengplaz::AddressRecordProvider>,mengplaz::ReconciliationCandidate>>': 0,
    'core::Array<text_tokenizer::TermFrequency>': 0,
    'core::Map<core::String,core::Array<core::String>>': 0,
    'core::node<bda::BdaMunicipality>': 0,
    'core::nodeIndex<core::String,core::int>': 0,
    'core::Map<core::int,text_index_types::TextResult>': 0,
    'core::Array<core::nodeIndex>': 0,
    'core::node<golden::GoldenMunicipality>': 0,
    'core::Array<runtime::ResponseObject>': 0,
    'core::Array<text_parser::ParsedSection>': 0,
    'core::node<golden::GoldenStreet>': 0,
    'core::nodeIndex<core::String,core::node<core::String>>': 0,
    'core::nodeIndexBucket<core::String,core::node<caclr::CaclrAddress>>': 0,
    'core::Tuple<core::int,core::node<text_index_types::IndexChunk>>': 0,
    'core::Array<core::type>': 0,
    'core::Array<core::node<caclr::CaclrStreet>>': 0,
    'core::bool': 0,
    'core::Array<api::AddressFeatures>': 0,
    'core::SearchResult<core::String,core::node<mengplaz::AddressRecordProvider>>': 0,
    'core::nodeIndex<core::String,core::node<caclr::CaclrAddress>>': 0,
    'core::nodeIndexBucket<core::String,core::node<bda::BdaAddress>>': 0,
    'core::Array<runtime::WorkerUsage>': 0,
    'core::Array<runtime::Task?>': 0,
    'core::Array<api::RankedGoldenRecord>': 0,
    'core::SearchResult<core::String,core::node<percolate_engine::PercolatedQuery>>': 0,
    'core::Array<text_chunker::ChunkInfo>': 0,
    'core::Tuple<core::int,core::node<osm::OsmPartialAddress>>': 0,
    'core::Tuple<core::time,mengplaz::SourceCountSnapshot>': 0,
    'core::Array<core::SearchResult<core::String,core::node<caclr::CaclrCanton>>>': 0,
    'core::Array<mengplaz::AddressRecordRef>': 0,
    'core::node<caclr::CaclrStreet>': 0,
    'core::Array<mengplaz::CandidateMatch<core::node<mengplaz::AddressRecordProvider>>>': 0,
    'core::Map<core::String,core::Array<core::int>>': 0,
    'core::SearchResult<core::String,core::node<golden::GoldenMunicipality>>': 0,
    'core::Array<backupExporter::BkGoldenLinkedRecordDTO>': 0,
    'core::Array<core::SearchResult>': 0,
    'core::node<bda::BdaCity>': 0,
    'core::SearchResult<core::String,core::Array<core::node<caclr::CaclrCity>>>': 0,
    'core::nodeIndexBucket<core::String,core::node<golden::GoldenCanton>>': 0,
    'core::Array<core::Array<facet_types::NumericBucketCount>>': 0,
    'core::nodeIndexBucket<core::node<core::Tensor>,core::node<text_index_types::IndexChunk>>': 0,
    'core::nodeIndex<core::String,core::node<golden::GoldenMunicipality>>': 0,
    'core::Array<mengplaz::AddressRecord>': 0,
    'core::Array<ranking_rules::RankingCandidate>': 0,
    'core::Array<runtime::PathItemObject>': 0,
    'core::Array<core::NodeInfo<core::int>>': 0,
    'core::nodeIndexBucket<core::String,core::node<bda::BdaStreet>>': 0,
    'core::Map<core::String,core::node<mengplaz::ReconciliationReport>>': 0,
    'core::Array<caclrLoader::CaclrAlias>': 0,
    'core::Map<core::String,runtime::PathItemObject>': 0,
    'core::Array<core::SearchResult<core::String,core::node<bda::BdaAddress>>>': 0,
    'core::Array<caclrLoader::CaclrResponseMunicipalityItem>': 0,
    'core::Map<core::String,core::Map<core::String,core::any>>': 0,
    'core::VectorIndex<core::node<text_index_types::IndexEntry>>': 0,
    'core::Tuple': 0,
    'core::Array<postal::PostalComponent>': 0,
    'core::nodeList<document::Sentence>': 0,
    'core::Array<runtime::Role>': 0,
    'core::node<mengplaz::ReconciliationReport>': 0,
    'core::Array<core::node<mengplaz::AddressRecordProvider>>': 0,
    'core::nodeIndexBucket': 0,
    'core::Map<core::String,core::any>': 0,
    'core::Array<core::SearchResult<core::String,core::node<osm::OsmAddress>>>': 0,
    'core::Array<core::float>': 0,
    'core::Array<core::nodeTime>': 0,
    'core::Array<regex_utils::RegexMatch>': 0,
    'core::Array<runtime::DateTuple>': 0,
    'core::nodeIndex<core::String,core::node<bda::BdaStreet>>': 0,
    'core::nodeIndex<core::String,core::node<text_index_types::IndexEntry>>': 0,
    'core::Array<privateApi::GoldenRecordScore>': 0,
    'core::nodeIndex<core::String,core::Array<core::node<bda::BdaStreet>>>': 0,
    'core::SearchResult<core::String,core::node<caclr::CaclrStreet>>': 0,
    'core::Array<mengplaz::SearchRequest>': 0,
    'core::Array<privateApi::SourceStatsRow>': 0,
    'core::Array<runtime::McpPromptArgument>': 0,
    'core::Array<core::SearchResult<core::String,core::node<text_index_types::PhoneticPostings>>>': 0,
    'core::Array<core::Map<core::String,core::bool>?>': 0,
    'core::SearchResult<core::node<mengplaz::AddressRecordProvider>,core::Array<mengplaz::ReconciliationCandidate>>': 0,
    'core::Tuple<core::geo,core::node<bda::BdaAddress>>': 0,
    'core::Array<core::SearchResult<core::String,core::node<osm::OsmCity>>>': 0,
    'core::Array<core::SearchResult<core::String,core::node<mengplaz::AddressRecordProvider>>>': 0,
    'core::SearchResult<core::Tensor,core::node<text_index_types::IndexEntry>>': 0,
    'core::Map<core::int,fusion::FusionAccum>': 0,
    'core::Tuple<core::int,core::node<text_index_types::NormalizedTerm>>': 0,
    'core::Tuple<core::int,document::Section>': 0,
    'core::nodeIndex<core::node<mengplaz::AddressRecordProvider>,mengplaz::ReconciliationCandidate>': 0,
    'core::Array<core::node<osm::OsmStreet>>': 0,
    'core::nodeIndexBucket<core::String,core::Array<core::node<caclr::CaclrStreet>>>': 0,
    'core::SearchResult<core::String,core::node<core::String>>': 0,
    'core::Array<runtime::MediaTypeObject>': 0,
    'core::Array<text_index_types::IndexEntry?>': 0,
    'core::nodeGeo<core::node<bda::BdaAddress>>': 0,
    'core::nodeIndex<core::String,core::node<bda::BdaMunicipality>>': 0,
    'core::Array<core::SearchResult<core::String,core::node<golden::GoldenMunicipality>>>': 0,
    'core::SearchResult<core::String,core::node<golden::GoldenAddress>>': 0,
    'core::Array<facet_types::FacetType>': 0,
    'core::Array<api::GoldenIndex>': 0,
    'core::Array<caclrLoader::CaclrResponseCityItem>': 0,
    'core::Array<core::Array<core::int>>': 0,
    'core::Array<core::SearchResult<core::String,core::node<osm::OsmStreet>>>': 0,
    'core::Array<runtime::Task>': 0,
    'core::Table': 0,
    'core::Tuple<core::geo,core::node<osm::OsmAddress>>': 0,
    'core::Array<dfr_engine::DFRAccum>': 0,
    'core::node<osm::OsmAddress>': 0,
    'core::Array<core::SearchResult<core::String,core::Array<core::node<osm::OsmStreet>>>>': 0,
    'core::Array<io::S3Object>': 0,
    'core::SearchResult<core::geo,core::any?>': 0,
    'core::Array<core::Map<core::node<text_index_types::NormalizedTerm>,core::bool>?>': 0,
    'core::Map<core::String,runtime::MediaTypeObject>': 0,
    'core::Array<core::SearchResult<core::String,core::Array<core::node<bda::BdaStreet>>>>': 0,
    'core::Array<mengplaz::Match<core::node<golden::GoldenStreet>>>': 0,
    'core::nodeGeo$info$args': 0,
    'core::node<text_index_types::PhoneticPostings>': 0,
    'core::Array<core::Map<core::String,core::int>>': 0,
    'core::Tuple<core::time,core::float>': 0,
    'core::time': 0,
    'core::SearchResult<core::node<core::Tensor>,core::node<text_index_types::IndexChunk>>': 0,
    'core::node<text_index_types::TrieNode>': 0,
    'core::Array<function_score::FieldValueFactor>': 0,
    'core::Array<mengplaz::QualityEvent>': 0,
    'core::Array<goldenTextBench::GoldenBenchCase>': 0,
    'core::Array<text_index_types::Snippet>': 0,
    'core::Array<util::HistogramBin>': 0,
    'core::VectorIndex<core::node<text_index_types::IndexChunk>>': 0,
    'core::SearchResult<core::String,core::Array<core::node<osm::OsmStreet>>>': 0,
    'core::Array<core::Array<core::float>>': 0,
    'core::nodeIndexBucket<core::String,core::node<text_index_types::PhoneticPostings>>': 0,
    'core::Array<runtime::SchemaObject>': 0,
    'core::Map<core::any,core::int>': 0,
    'core::SearchResult<core::String,core::node<golden::GoldenStreet>>': 0,
    'runtime::Runtime$root$args': 0,
    'runtime::Identity$logout$args': 0,
    'runtime::Permission': 0,
    'runtime::McpContentType': 0,
    'runtime::McpToolExecution': 0,
    'runtime::Periodicity': 0,
    'runtime::McpClientRoots': 0,
    'runtime::IdentityGrantType': 0,
    'runtime::McpRequestParams': 0,
    'runtime::McpTaskStatus': 0,
    'runtime::McpServerToolsCapabilities': 0,
    'runtime::SchemaObject': 0,
    'runtime::Task$cancel$args': 0,
    'runtime::McpClientTasksCapabilities': 0,
    'runtime::HeaderObject': 0,
    'runtime::McpToolsListParams': 0,
    'runtime::mcp_tasks_get$args': 0,
    'runtime::ResponseCode': 0,
    'runtime::McpPromptsListResult': 0,
    'runtime::McpResourceContent': 0,
    'runtime::PathItemObject': 0,
    'runtime::McpTasksCreateResult': 0,
    'runtime::McpToolsCallResult': 0,
    'runtime::McpAudioContent': 0,
    'runtime::Task$tasks$args': 0,
    'runtime::WeeklyPeriodicity': 0,
    'runtime::Frame': 0,
    'runtime::Debug': 0,
    'runtime::McpTool': 0,
    'runtime::Job': 0,
    'runtime::ContactObject': 0,
    'runtime::McpImageContent': 0,
    'runtime::DailyPeriodicity': 0,
    'runtime::Scheduler': 0,
    'runtime::McpTextContent': 0,
    'runtime::Identity$all$args': 0,
    'runtime::Role$all$args': 0,
    'runtime::mcp_tools_list$args': 0,
    'runtime::mcp_tasks_cancel$args': 0,
    'runtime::Log': 0,
    'runtime::McpRole': 0,
    'runtime::ZoneUsage': 0,
    'runtime::McpContentBlock': 0,
    'runtime::MergeStrategy': 0,
    'runtime::Identity$create$args': 0,
    'runtime::McpInitializeResult': 0,
    'runtime::RuntimeInfo': 0,
    'runtime::ChildProcess': 0,
    'runtime::mcp_prompts_list$args': 0,
    'runtime::Identity$get_by_name$args': 0,
    'runtime::McpInitializeParams': 0,
    'runtime::PeriodicOptions': 0,
    'runtime::Identity$current$args': 0,
    'runtime::Scheduler$activate$args': 0,
    'runtime::RequestBodyObject': 0,
    'runtime::Task': 0,
    'runtime::Identity': 0,
    'runtime::McpClientCapabilities': 0,
    'runtime::Identity$get_by_id$args': 0,
    'runtime::McpServerResourcesCapabilities': 0,
    'runtime::McpServerPromptsCapabilities': 0,
    'runtime::Identity$token$args': 0,
    'runtime::OpenApiVersion': 0,
    'runtime::ComponentsObject': 0,
    'runtime::McpPriority': 0,
    'runtime::McpTasksGetParams': 0,
    'runtime::InfoObject': 0,
    'runtime::MediaTypeObject': 0,
    'runtime::McpPromptArgument': 0,
    'runtime::LicenseObject': 0,
    'runtime::mcp_tools_call$args': 0,
    'runtime::LicenseType': 0,
    'runtime::OpenApiV3': 0,
    'runtime::Identity$current_id$args': 0,
    'runtime::McpTasksListParams': 0,
    'runtime::Task$history$args': 0,
    'runtime::LogLevel': 0,
    'runtime::Identity$set_grants$args': 0,
    'runtime::Runtime$abi$args': 0,
    'runtime::McpTask': 0,
    'runtime::OperationObject': 0,
    'runtime::Runtime$info$args': 0,
    'runtime::IdentityGrant': 0,
    'runtime::License': 0,
    'runtime::OpenApi': 0,
    'runtime::FixedPeriodicity': 0,
    'runtime::McpTaskSupport': 0,
    'runtime::Identity$set_password$args': 0,
    'runtime::Debug$resume$args': 0,
    'runtime::McpTasksListResult': 0,
    'runtime::WorkerUsage': 0,
    'runtime::DateTuple': 0,
    'runtime::McpServerTasksCapabilities': 0,
    'runtime::Task$live$args': 0,
    'runtime::McpTaskCreateParams': 0,
    'runtime::Task$running$args': 0,
    'runtime::MonthlyPeriodicity': 0,
    'runtime::SchemaFormat': 0,
    'runtime::Identity$set_role$args': 0,
    'runtime::ResponseObject': 0,
    'runtime::Scheduler$find$args': 0,
    'runtime::PeriodicTask': 0,
    'runtime::LogDataUsage': 0,
    'runtime::Month': 0,
    'runtime::McpResult': 0,
    'runtime::System$get_all_envs$args': 0,
    'runtime::mcp_tasks_list$args': 0,
    'runtime::McpAnnotations': 0,
    'runtime::mcp_initialize$args': 0,
    'runtime::Scheduler$deactivate$args': 0,
    'runtime::Runtime$backup_full$args': 0,
    'runtime::Variable': 0,
    'runtime::McpPrompt': 0,
    'runtime::OpenApi$v3$args': 0,
    'runtime::Identity$login$args': 0,
    'runtime::Runtime': 0,
    'runtime::McpTasksResultParams': 0,
    'runtime::ChildProcessResult': 0,
    'runtime::Scheduler$list$args': 0,
    'runtime::Role': 0,
    'runtime::McpToolsListResult': 0,
    'runtime::System': 0,
    'runtime::Scheduler$add$args': 0,
    'runtime::Task$is_running$args': 0,
    'runtime::Debug$all$args': 0,
    'runtime::DayOfWeek': 0,
    'runtime::Debug$get$args': 0,
    'runtime::YearlyPeriodicity': 0,
    'runtime::Identity$permissions$args': 0,
    'runtime::McpServerCapabilities': 0,
    'runtime::McpToolsCallParams': 0,
    'runtime::McpResourcesListResult': 0,
    'runtime::Runtime$usage$args': 0,
    'runtime::McpResourcesListParams': 0,
    'runtime::McpPromptsListParams': 0,
    'runtime::RuntimeUsage': 0,
    'runtime::mcp_tasks_result$args': 0,
    'runtime::Permission$all$args': 0,
    'runtime::SchemaType': 0,
    'runtime::McpImplementation': 0,
    'runtime::TaskStatus': 0,
    'runtime::McpBaseMetadata': 0,
    'runtime::McpResource': 0,
    'runtime::mcp_resources_list$args': 0,
    'runtime::McpTasksCancelParams': 0,
    'io::Reader<backupExporter::BkGoldenCantonDTO>': 0,
    'io::SmtpMode': 0,
    'io::JsonWriter<backupExporter::BkGoldenCityDTO>': 0,
    'io::Reader<backupExporter::BkGoldenPoiDTO>': 0,
    'io::JsonWriter<backupExporter::BkCaclrStreetDTO>': 0,
    'io::Writer<backupExporter::BkGoldenConstituencyDTO>': 0,
    'io::Csv$sample$args': 0,
    'io::S3Object': 0,
    'io::JsonWriter<backupExporter::BkGoldenPoiDTO>': 0,
    'io::Reader': 0,
    'io::JsonWriter<backupExporter::BkOsmStreetDTO>': 0,
    'io::CsvWriter<backupExporter::BkSourceCountHistoryDTO>': 0,
    'io::Writer<backupExporter::BkOsmStreetDTO>': 0,
    'io::JsonReader<backupExporter::BkBdaStreetDTO>': 0,
    'io::Reader<backupExporter::BkCaclrConstituencyDTO>': 0,
    'io::Writer<backupExporter::BkBdaMunicipalityDTO>': 0,
    'io::GcbReader': 0,
    'io::File': 0,
    'io::CsvNested': 0,
    'io::CsvAnalysisConfig': 0,
    'io::Reader<backupExporter::BkCaclrBuildingDTO>': 0,
    'io::Reader<backupExporter::BkOsmPartialAddressDTO>': 0,
    'io::Writer': 0,
    'io::CsvReader': 0,
    'io::CsvFormat': 0,
    'io::JsonReader<backupExporter::BkGoldenPoiDTO>': 0,
    'io::Writer<backupExporter::BkGoldenCityDTO>': 0,
    'io::Writer<backupExporter::BkCaclrCityDTO>': 0,
    'io::Reader<backupExporter::BkOsmCityDTO>': 0,
    'io::Csv$analyze$args': 0,
    'io::Smtp': 0,
    'io::CsvWriter<backupExporter::BkManifestEntryDTO>': 0,
    'io::Writer<backupExporter::BkGoldenStreetDTO>': 0,
    'io::CsvSharding': 0,
    'io::JsonWriter<backupExporter::BkBdaAddressDTO>': 0,
    'io::Reader<backupExporter::BkCaclrCantonDTO>': 0,
    'io::JsonWriter<backupExporter::BkBdaMunicipalityDTO>': 0,
    'io::Writer<backupExporter::BkBdaAddressDTO>': 0,
    'io::Writer<backupExporter::BkGoldenQualityHistoryDTO>': 0,
    'io::TextWriter': 0,
    'io::CsvStatistics': 0,
    'io::Reader<backupExporter::BkGoldenQualityHistoryDTO>': 0,
    'io::JsonReader<backupExporter::BkCaclrCantonDTO>': 0,
    'io::JsonReader<backupExporter::BkOsmAddressDTO>': 0,
    'io::Reader<backupExporter::BkOsmAddressDTO>': 0,
    'io::JsonReader<backupExporter::BkCaclrStreetDTO>': 0,
    'io::JsonReader<backupExporter::BkGoldenCityDTO>': 0,
    'io::JsonReader<backupExporter::BkOsmStreetDTO>': 0,
    'io::S3Bucket': 0,
    'io::TextReader': 0,
    'io::JsonReader<backupExporter::BkOsmCityDTO>': 0,
    'io::Reader<core::String>': 0,
    'io::S3': 0,
    'io::JsonWriter<backupExporter::BkBdaCityDTO>': 0,
    'io::Reader<backupExporter::BkBdaStreetDTO>': 0,
    'io::Reader<backupExporter::BkGoldenMunicipalityDTO>': 0,
    'io::CsvReader<backupExporter::BkSourceCountHistoryDTO>': 0,
    'io::JsonWriter<backupExporter::BkOsmCityDTO>': 0,
    'io::JsonWriter<backupExporter::BkGoldenConstituencyDTO>': 0,
    'io::JsonWriter': 0,
    'io::JsonWriter<backupExporter::BkGoldenCantonDTO>': 0,
    'io::Reader<backupExporter::BkSourceDTO>': 0,
    'io::XmlReader': 0,
    'io::Writer<backupExporter::BkOsmPartialAddressDTO>': 0,
    'io::Writer<backupExporter::BkGoldenMunicipalityDTO>': 0,
    'io::CsvReader<bdaLoader::BdaAddressLine>': 0,
    'io::JsonReader<backupExporter::BkBdaMunicipalityDTO>': 0,
    'io::Reader<bdaLoader::BdaAddressLine>': 0,
    'io::JsonReader<backupExporter::BkCaclrConstituencyDTO>': 0,
    'io::Json': 0,
    'io::Email': 0,
    'io::CsvWriter': 0,
    'io::Writer<backupExporter::BkCaclrMunicipalityDTO>': 0,
    'io::Reader<backupExporter::BkCaclrCityDTO>': 0,
    'io::Reader<backupExporter::BkBdaMunicipalityDTO>': 0,
    'io::Writer<backupExporter::BkOsmCityDTO>': 0,
    'io::Reader<backupExporter::BkCaclrStreetDTO>': 0,
    'io::FileWalker': 0,
    'io::CsvWriter<backupExporter::BkSourceDTO>': 0,
    'io::JsonReader<backupExporter::BkGoldenStreetDTO>': 0,
    'io::Reader<backupExporter::BkBdaCityDTO>': 0,
    'io::S3BasicCredentials': 0,
    'io::Reader<backupExporter::BkCaclrMunicipalityDTO>': 0,
    'io::JsonWriter<backupExporter::BkOsmPartialAddressDTO>': 0,
    'io::Reader<backupExporter::BkGoldenStreetDTO>': 0,
    'io::JsonReader<backupExporter::BkGoldenMunicipalityDTO>': 0,
    'io::Reader<backupExporter::BkBdaAddressDTO>': 0,
    'io::JsonReader<backupExporter::BkBdaCityDTO>': 0,
    'io::Writer<backupExporter::BkBdaStreetDTO>': 0,
    'io::Writer<backupExporter::BkGoldenCantonDTO>': 0,
    'io::Writer<backupExporter::BkGoldenPoiDTO>': 0,
    'io::JsonWriter<backupExporter::BkCaclrMunicipalityDTO>': 0,
    'io::JsonReader<backupExporter::BkOsmPartialAddressDTO>': 0,
    'io::JsonWriter<backupExporter::BkOsmAddressDTO>': 0,
    'io::Writer<backupExporter::BkOsmAddressDTO>': 0,
    'io::CsvReader<backupExporter::BkSourceDTO>': 0,
    'io::Csv': 0,
    'io::SmtpAuth': 0,
    'io::Writer<backupExporter::BkCaclrConstituencyDTO>': 0,
    'io::JsonReader<backupExporter::BkBdaAddressDTO>': 0,
    'io::JsonWriter<backupExporter::BkCaclrConstituencyDTO>': 0,
    'io::JsonReader<backupExporter::BkCaclrCityDTO>': 0,
    'io::Url': 0,
    'io::GcbWriter': 0,
    'io::Reader<backupExporter::BkGoldenConstituencyDTO>': 0,
    'io::Reader<backupExporter::BkSourceCountHistoryDTO>': 0,
    'io::Reader<backupExporter::BkOsmStreetDTO>': 0,
    'io::Writer<backupExporter::BkSourceDTO>': 0,
    'io::JsonWriter<backupExporter::BkCaclrBuildingDTO>': 0,
    'io::CsvColumnStatistics': 0,
    'io::JsonReader<backupExporter::BkGoldenCantonDTO>': 0,
    'io::JsonWriter<backupExporter::BkGoldenStreetDTO>': 0,
    'io::Writer<backupExporter::BkBdaCityDTO>': 0,
    'io::JsonReader<backupExporter::BkCaclrBuildingDTO>': 0,
    'io::BinReader': 0,
    'io::Writer<backupExporter::BkCaclrBuildingDTO>': 0,
    'io::JsonReader<backupExporter::BkCaclrMunicipalityDTO>': 0,
    'io::Writer<backupExporter::BkManifestEntryDTO>': 0,
    'io::Reader<backupExporter::BkGoldenCityDTO>': 0,
    'io::Csv$generate$args': 0,
    'io::CsvReader<backupExporter::BkGoldenQualityHistoryDTO>': 0,
    'io::JsonWriter<backupExporter::BkCaclrCityDTO>': 0,
    'io::JsonReader<backupExporter::BkGoldenConstituencyDTO>': 0,
    'io::Writer<backupExporter::BkSourceCountHistoryDTO>': 0,
    'io::Writer<backupExporter::BkCaclrCantonDTO>': 0,
    'io::JsonWriter<backupExporter::BkGoldenMunicipalityDTO>': 0,
    'io::JsonWriter<backupExporter::BkCaclrCantonDTO>': 0,
    'io::JsonReader': 0,
    'io::Writer<backupExporter::BkCaclrStreetDTO>': 0,
    'io::CsvWriter<backupExporter::BkGoldenQualityHistoryDTO>': 0,
    'io::JsonWriter<backupExporter::BkBdaStreetDTO>': 0,
    'util::Uuid': 0,
    'util::LogQuantizer': 0,
    'util::Queue': 0,
    'util::LinearQuantizer': 0,
    'util::CustomQuantizer': 0,
    'util::TimeWindow': 0,
    'util::Random': 0,
    'util::ProgressTracker': 0,
    'util::Quantizer<core::Array>': 0,
    'util::GaussianProfileSlot': 0,
    'util::SlidingWindow': 0,
    'util::QuantizerSlotBound<core::Array>': 0,
    'util::Stack': 0,
    'util::Histogram': 0,
    'util::Gaussian': 0,
    'util::HistogramBin': 0,
    'util::HistogramStats': 0,
    'util::Assert': 0,
    'util::GaussianProfile': 0,
    'util::MultiQuantizer': 0,
    'util::Crypto': 0,
    'util::QuantizerSlotBound': 0,
    'util::Quantizer': 0,
    'project::Root': 0,
    'privateApi::ComparisonViewData': 0,
    'privateApi::SourceCountPoint': 0,
    'privateApi::SourceStats': 0,
    'privateApi::restoreGraph$args': 0,
    'privateApi::goldenTextIndexStats$args': 0,
    'privateApi::updateBDA$args': 0,
    'privateApi::linkRecords$args': 0,
    'privateApi::getLinkedComparisonViewData$args': 0,
    'privateApi::recomputeGoldenGeoScore$args': 0,
    'privateApi::GoldenRecordScore': 0,
    'privateApi::goldenStreetIndexStats$args': 0,
    'privateApi::ReconciliationReportMatchView': 0,
    'privateApi::unlinkRecord$args': 0,
    'privateApi::unlockSource$args': 0,
    'privateApi::buildGoldenTextIndex$args': 0,
    'privateApi::RecordTabResult': 0,
    'privateApi::getRecordTab$args': 0,
    'privateApi::getComparisonViewData$args': 0,
    'privateApi::buildGoldenStreetIndex$args': 0,
    'privateApi::SourceStatsRow': 0,
    'privateApi::linkAllFullMatched$args': 0,
    'privateApi::GoldenRecordPage': 0,
    'privateApi::SourceCountSeries': 0,
    'privateApi::sourceTextIndexStats$args': 0,
    'privateApi::getReconciliationReport$args': 0,
    'privateApi::SourceRef': 0,
    'privateApi::GlobalQualityHistory': 0,
    'privateApi::mergePositionsToGolden$args': 0,
    'privateApi::updateOSM$args': 0,
    'privateApi::buildSourceTextIndexes$args': 0,
    'privateApi::backupGraph$args': 0,
    'privateApi::MatchedCandidateDetail': 0,
    'privateApi::getSources$args': 0,
    'privateApi::GlobalQualityEntry': 0,
    'privateApi::batchLinkByScore$args': 0,
    'privateApi::lockSource$args': 0,
    'privateApi::LinkParameters': 0,
    'privateApi::ReconciliationReportView': 0,
    'privateApi::promoteRecord$args': 0,
    'privateApi::buildSourceTextIndex$args': 0,
    'privateApi::updateCACLR$args': 0,
    'privateApi::computeGlobalQuality$args': 0,
    'privateApi::reconcileAddresses$args': 0,
    'privateApi::reconcile$args': 0,
    'api::LinkedRecordDetails<caclr::CaclrAddressFullRecord>': 0,
    'api::DeprecatedCounts': 0,
    'api::getGoldenNumbersByStreetId$args': 0,
    'api::getGoldenRecordDetails$args': 0,
    'api::getGoldenWithLinkedRecords$args': 0,
    'api::getPois$args': 0,
    'api::GeoJSONFeature': 0,
    'api::getGlobalQualityHistory$args': 0,
    'api::getGoldenRecords$args': 0,
    'api::GoldenRecordDetails': 0,
    'api::attribution$args': 0,
    'api::getDeprecatedCounts$args': 0,
    'api::AddressFeatures': 0,
    'api::GeoJSONGeometry': 0,
    'api::getPoisInStreet$args': 0,
    'api::getGoldenStreetsByLocalityId$args': 0,
    'api::GoldenRecordsPage': 0,
    'api::RankedGoldenRecord': 0,
    'api::GoldenWithLinkedRecords': 0,
    'api::LinkedRecordDetails<bda::BdaAddressFullRecord>': 0,
    'api::searchAddress$args': 0,
    'api::DeprecatedCountRow': 0,
    'api::openapi$args': 0,
    'api::appInfo$args': 0,
    'api::LinkedRecordDetails': 0,
    'api::getGoldenLocalities$args': 0,
    'api::GeoJSON': 0,
    'api::getGoldenRecordScores$args': 0,
    'api::DataAttribution': 0,
    'api::getRecordByGeoportailID$args': 0,
    'api::searchStreet$args': 0,
    'api::getGoldenRecordsGeoJson$args': 0,
    'api::GoldenIndex': 0,
    'api::getSourceStats$args': 0,
    'api::getGoldenRecordRefByUid$args': 0,
    'api::LinkedRecordDetails<osm::OsmAddressFullRecord>': 0,
    'api::getGoldenCommunes$args': 0,
    'api::getPoisByGeo$args': 0,
    'backupExporter::BkCaclrCityDTO': 0,
    'backupExporter::BkBdaAddressDTO': 0,
    'backupExporter::BkBdaStreetDTO': 0,
    'backupExporter::BkBdaCityDTO': 0,
    'backupExporter::BkCaclrConstituencyDTO': 0,
    'backupExporter::BkOsmPartialAddressDTO': 0,
    'backupExporter::BkCaclrStreetDTO': 0,
    'backupExporter::BkGoldenPoiDTO': 0,
    'backupExporter::BkOsmStreetDTO': 0,
    'backupExporter::BkCaclrBuildingDTO': 0,
    'backupExporter::BkGoldenCantonDTO': 0,
    'backupExporter::BkGoldenMunicipalityDTO': 0,
    'backupExporter::BackupExporter': 0,
    'backupExporter::BkGoldenCityDTO': 0,
    'backupExporter::BkBdaMunicipalityDTO': 0,
    'backupExporter::BkManifestEntryDTO': 0,
    'backupExporter::BkGoldenLinkedRecordDTO': 0,
    'backupExporter::BkGoldenStreetDTO': 0,
    'backupExporter::BkGoldenConstituencyDTO': 0,
    'backupExporter::BkCaclrCantonDTO': 0,
    'backupExporter::BkOsmAddressDTO': 0,
    'backupExporter::BkSourceDTO': 0,
    'backupExporter::BkOsmCityDTO': 0,
    'backupExporter::BkCaclrMunicipalityDTO': 0,
    'backupExporter::BkGoldenQualityDTO': 0,
    'backupExporter::BkGoldenQualityHistoryDTO': 0,
    'backupExporter::BkSourceCountHistoryDTO': 0,
    'backupImporter::BackupImporter': 0,
    'bdaLoader::BdaAddressLine': 0,
    'bdaLoader::BdaLoader': 0,
    'osmLoader::OsmLoader': 0,
    'osmLoader::OsmOverpassResponse': 0,
    'caclrLoader::CaclrResponseCities': 0,
    'caclrLoader::CaclrLoader': 0,
    'caclrLoader::CaclrResponseBuildingItem': 0,
    'caclrLoader::CaclrResponseCantonItem': 0,
    'caclrLoader::CaclrResponseStreets': 0,
    'caclrLoader::CaclrBuildingsResult': 0,
    'caclrLoader::CaclrResponseMunicipalityItem': 0,
    'caclrLoader::CaclrResponseCantons': 0,
    'caclrLoader::CaclrResponseStreetItem': 0,
    'caclrLoader::CaclrResponseMunicipalities': 0,
    'caclrLoader::CaclrAlias': 0,
    'caclrLoader::CaclrResponseConstituency': 0,
    'caclrLoader::CaclrResponseBuildings': 0,
    'caclrLoader::CaclrResponseCityItem': 0,
    'bda::BdaCity': 0,
    'bda::BdaSource': 0,
    'bda::BdaMunicipality': 0,
    'bda::BdaAddressFullRecord': 0,
    'bda::BdaAddress': 0,
    'bda::BdaStreet': 0,
    'caclr::CaclrAddressFullRecord': 0,
    'caclr::CaclrEurostatsIds': 0,
    'caclr::CaclrSource': 0,
    'caclr::CaclrToken': 0,
    'caclr::CaclrMunicipality': 0,
    'caclr::CaclrCity': 0,
    'caclr::CaclrDataStatus': 0,
    'caclr::CaclrTokenResponse': 0,
    'caclr::CaclrAddress': 0,
    'caclr::CaclrCanton': 0,
    'caclr::CaclrAdminStatus': 0,
    'caclr::CaclrConstituency': 0,
    'caclr::CaclrStreet': 0,
    'errors::MengplazMismatch': 0,
    'errors::AddrErr': 0,
    'golden::GoldenMunicipality': 0,
    'golden::GoldenCity': 0,
    'golden::GoldenCanton': 0,
    'golden::GoldenSource': 0,
    'golden::GoldenConstituency': 0,
    'golden::GoldenStreet': 0,
    'golden::GoldenAddress': 0,
    'mengplaz::DataSource': 0,
    'mengplaz::StreetRecord': 0,
    'mengplaz::AddressFullRecordRef': 0,
    'mengplaz::ReconciliationCandidateScore': 0,
    'mengplaz::LinkedRecordEntry': 0,
    'mengplaz::SearchItem': 0,
    'mengplaz::ExternalAddressRecord': 0,
    'mengplaz::Match<core::node<golden::GoldenCity>>': 0,
    'mengplaz::StreetRecordProvider': 0,
    'mengplaz::Match<core::node<golden::GoldenStreet>>': 0,
    'mengplaz::AddressRecordProvider': 0,
    'mengplaz::CandidateMatch<core::node<mengplaz::AddressRecordProvider>>': 0,
    'mengplaz::StreetRecordRef': 0,
    'mengplaz::GeoParameters': 0,
    'mengplaz::SearchParameters': 0,
    'mengplaz::Alias': 0,
    'mengplaz::CandidateMatch': 0,
    'mengplaz::QualityEventType': 0,
    'mengplaz::AddressRecord': 0,
    'mengplaz::ReconciliationReport': 0,
    'mengplaz::SourceCountSnapshot': 0,
    'mengplaz::ScoringWeights': 0,
    'mengplaz::SearchResult': 0,
    'mengplaz::AddressRecordRef': 0,
    'mengplaz::SearchRequest': 0,
    'mengplaz::Match': 0,
    'mengplaz::QualityEvent': 0,
    'mengplaz::ReconciliationCandidate': 0,
    'osm::OsmSource': 0,
    'osm::OsmStreet': 0,
    'osm::OsmAddress': 0,
    'osm::OsmAddressFullRecord': 0,
    'osm::OsmPartialAddress': 0,
    'osm::OsmCity': 0,
    'osm::OsmParsedAddress': 0,
    'goldenStreetSearch::GoldenStreetSearch': 0,
    'goldenStreetSearch::GoldenStreetIndexStats': 0,
    'goldenTextBench::GoldenBenchCase': 0,
    'statsService::StatsService': 0,
    'goldenTextSearch::GoldenTextSearch': 0,
    'goldenTextSearch::GoldenTextIndexStats': 0,
    'sourceTextSearch::SourceTextIndexStats': 0,
    'sourceTextSearch::SourceTextSearch': 0,
    'goldenServices::GoldenServices': 0,
    'updateService::UpdateService': 0,
    'utils::SplitAlphaNumericalString': 0,
    'http::HttpReader': 0,
    'http::HttpResponse<core::Array<bdaLoader::BdaAddressLine>>': 0,
    'http::FileSink': 0,
    'http::HttpResponse<caclrLoader::CaclrResponseMunicipalities>': 0,
    'http::HttpReader<caclrLoader::CaclrResponseCities>': 0,
    'http::FileBody': 0,
    'http::HttpRequest': 0,
    'http::HttpResponse<caclrLoader::CaclrResponseStreets>': 0,
    'http::Http<caclrLoader::CaclrResponseStreets>': 0,
    'http::Http<caclrLoader::CaclrResponseBuildings>': 0,
    'http::Http<caclrLoader::CaclrResponseCities>': 0,
    'http::HttpReader<caclrLoader::CaclrResponseBuildings>': 0,
    'http::HttpReader<osmLoader::OsmOverpassResponse>': 0,
    'http::HttpResponse<caclrLoader::CaclrResponseCantons>': 0,
    'http::HttpReader<caclrLoader::CaclrResponseCantons>': 0,
    'http::HttpReader<caclr::CaclrTokenResponse>': 0,
    'http::Http<caclrLoader::CaclrResponseMunicipalities>': 0,
    'http::Http<caclr::CaclrTokenResponse>': 0,
    'http::HttpReader<core::Array<bdaLoader::BdaAddressLine>>': 0,
    'http::Http<caclrLoader::CaclrResponseCantons>': 0,
    'http::HttpResponse<caclr::CaclrTokenResponse>': 0,
    'http::HttpMethod': 0,
    'http::HttpResponse': 0,
    'http::HttpResponse<caclrLoader::CaclrResponseCities>': 0,
    'http::Http': 0,
    'http::HttpResponse<osmLoader::OsmOverpassResponse>': 0,
    'http::HttpReader<caclrLoader::CaclrResponseMunicipalities>': 0,
    'http::HttpReader<caclrLoader::CaclrResponseStreets>': 0,
    'http::Http<core::Array<bdaLoader::BdaAddressLine>>': 0,
    'http::Http<osmLoader::OsmOverpassResponse>': 0,
    'http::HttpResponse<caclrLoader::CaclrResponseBuildings>': 0,
    'bm25_engine::BM25Result': 0,
    'bm25_engine::BM25Engine': 0,
    'boolean_engine::BooleanAccel': 0,
    'boolean_engine::BooleanEngine': 0,
    'curation_engine::CurationHelper': 0,
    'fuzzy_engine::FuzzyEngine': 0,
    'fuzzy_engine::TrigramCandidate': 0,
    'fuzzy_engine::FuzzyScoreResult': 0,
    'percolate_engine::PercolateIndex': 0,
    'percolate_engine::PercolateEngine': 0,
    'percolate_engine::PercolatedQuery': 0,
    'percolate_engine::PercolateBooleanPlan': 0,
    'phonetic_engine::PhoneticEngine': 0,
    'phonetic_engine::PhoneticCodec': 0,
    'phrase_engine::PhraseCandidate': 0,
    'phrase_engine::PhraseEngine': 0,
    'phrase_engine::PhraseAccel': 0,
    'prefix_engine::PrefixEngine': 0,
    'proximity_engine::ProximityEngine': 0,
    'quorum_engine::QuorumEngine': 0,
    'quorum_engine::QuorumAccum': 0,
    'span_engine::SpanEngine': 0,
    'span_engine::SpanAccel': 0,
    'suggest_engine::SuggestEngine': 0,
    'suggest_engine::DidYouMeanResult': 0,
    'suggest_engine::Suggestion': 0,
    'suggest_engine::DidYouMeanBest': 0,
    'wildcard_engine::WildcardEngine': 0,
    'document::DocumentStats': 0,
    'document::Sentence': 0,
    'document::Document': 0,
    'document::SectionType': 0,
    'document::Section': 0,
    'facet_types::MetricType': 0,
    'facet_types::HistogramBucket': 0,
    'facet_types::AggregationRequest': 0,
    'facet_types::AdvancedFacetedResult': 0,
    'facet_types::NumericRangeBucket': 0,
    'facet_types::HistogramResult': 0,
    'facet_types::FacetType': 0,
    'facet_types::MetricAggregation': 0,
    'facet_types::AggregatedSearchResult': 0,
    'facet_types::HistogramAggregation': 0,
    'facet_types::MetricResult': 0,
    'facet_types::FacetRequest': 0,
    'facet_types::AggregationEngine': 0,
    'facet_types::NumericBucketCount': 0,
    'facet_types::TermCount': 0,
    'text_index::TextIndex<core::String>': 0,
    'text_index::TextIndex<address_index::AddressDoc>': 0,
    'text_index::TextIndex': 0,
    'text_index_internal::TextIndexInternal': 0,
    'text_index_types::IndexEntry': 0,
    'text_index_types::RRFOptions': 0,
    'text_index_types::Term': 0,
    'text_index_types::MoreLikeThisOptions': 0,
    'text_index_types::PhraseOptions': 0,
    'text_index_types::FieldModifier': 0,
    'text_index_types::SnippetOptions': 0,
    'text_index_types::TextSearchLanguage': 0,
    'text_index_types::TrigramPostings': 0,
    'text_index_types::HighlightOptions': 0,
    'text_index_types::DiversifyOptions': 0,
    'text_index_types::SearchCursor': 0,
    'text_index_types::BM25Options': 0,
    'text_index_types::ScoreExplanation': 0,
    'text_index_types::SpanOperator': 0,
    'text_index_types::SearchMode': 0,
    'text_index_types::TermExplanation': 0,
    'text_index_types::Snippet': 0,
    'text_index_types::EdgeNgramOptions': 0,
    'text_index_types::LMDirichletOptions': 0,
    'text_index_types::TextIndexStats': 0,
    'text_index_types::IndexChunk': 0,
    'text_index_types::ShortCircuitOptions': 0,
    'text_index_types::ChunkingOptions': 0,
    'text_index_types::FieldRef': 0,
    'text_index_types::FuzzyOptions': 0,
    'text_index_types::TermScorePair': 0,
    'text_index_types::FieldConfig': 0,
    'text_index_types::FusionOptions': 0,
    'text_index_types::BM25Variant': 0,
    'text_index_types::Normalization': 0,
    'text_index_types::StopWordMode': 0,
    'text_index_types::TextIndexConfig': 0,
    'text_index_types::RangeFilter': 0,
    'text_index_types::ProximityOptions': 0,
    'text_index_types::ChunkStrategy': 0,
    'text_index_types::TrieNode': 0,
    'text_index_types::StopWordOptions': 0,
    'text_index_types::NormalizedTerm': 0,
    'text_index_types::ScoreMode': 0,
    'text_index_types::TermBoost': 0,
    'text_index_types::TextEntry': 0,
    'text_index_types::TokenizationOptions': 0,
    'text_index_types::FusionMethod': 0,
    'text_index_types::FuzzyMode': 0,
    'text_index_types::PhoneticPostings': 0,
    'text_index_types::TermFilter': 0,
    'text_index_types::NormOptions': 0,
    'text_index_types::BoostMode': 0,
    'text_index_types::TextResult': 0,
    'text_index_types::CurationRule': 0,
    'text_index_types::DFROptions': 0,
    'text_index_types::SortClause': 0,
    'text_index_types::TypoOptions': 0,
    'text_index_types::PercolateMode': 0,
    'text_index_types::SearchOptions': 0,
    'boolean_parser::BooleanOperator': 0,
    'boolean_parser::ParseResult': 0,
    'boolean_parser::BooleanQuery': 0,
    'boolean_parser::BooleanParser': 0,
    'span_parser::SpanQuery': 0,
    'span_parser::SpanParser': 0,
    'stemmer::PorterStemmer': 0,
    'string_utils::StringUtils': 0,
    'text_chunker::TextChunker': 0,
    'text_chunker::ChunkInfo': 0,
    'text_normalizer::TextNormalizer': 0,
    'text_parser::TextParser': 0,
    'text_parser::ParsedSection': 0,
    'text_tokenizer::TokenInfo': 0,
    'text_tokenizer::TermFrequency': 0,
    'text_tokenizer::TokenizerAccel': 0,
    'text_tokenizer::TextTokenizer': 0,
    'dfr_engine::DFRScorer': 0,
    'dfr_engine::DFREngine': 0,
    'dfr_engine::DFRBasicModel': 0,
    'dfr_engine::DFRNormalization': 0,
    'dfr_engine::DFRAfterEffect': 0,
    'dfr_engine::DFRAccum': 0,
    'function_score::DecayFunction': 0,
    'function_score::DecayType': 0,
    'function_score::FunctionScoreAccel': 0,
    'function_score::FieldValueFactor': 0,
    'function_score::FunctionScoreEngine': 0,
    'function_score::FunctionScoreConfig': 0,
    'fusion::FusionAccum': 0,
    'fusion::FederatedSearch': 0,
    'fusion::FusionInput': 0,
    'fusion::Fusion': 0,
    'lm_dirichlet_engine::LMDAccum': 0,
    'lm_dirichlet_engine::LMDirichletEngine': 0,
    'lm_dirichlet_engine::LMDirichletAccel': 0,
    'mmr::MMR': 0,
    'ranking_rules::RankingRule': 0,
    'ranking_rules::RankingRulesEngine': 0,
    'ranking_rules::RankingCandidate': 0,
    'search_accel::SearchAccel': 0,
    'char_map::CharMap': 0,
    'doc_reader::DocReader': 0,
    'regex_accel::RegexAccel': 0,
    'regex_utils::RegexUtils': 0,
    'regex_utils::RegexMatch': 0,
    'snippet::SnippetExtractor': 0,
    'snippet::WindowResult': 0,
    'snippet::SnippetFragment': 0,
    'stop_words::StopWords': 0,
    'address_index::AddressDoc': 0,
    'address_index::AddressMatchLevel': 0,
    'address_index::AddressSearchHit': 0,
    'address_index::AddressIndex': 0,
    'address_index::AddressIndex<core::String>': 0,
    'address_index::AddressComponents': 0,
    'postal::PostalExpandOptions': 0,
    'postal::PostalComponent': 0,
    'postal::PostalAddress': 0,
    'postal::PostalOptions': 0,
    'postal::PostalParsedAddress': 0,
  }

  interface $FieldsMap {
    'core::Chars::codepoints': 0,
    'core::nodeList$sample$args::refs': 0,
    'core::nodeList$sample$args::from': 0,
    'core::nodeList$sample$args::to': 0,
    'core::nodeList$sample$args::maxRows': 0,
    'core::nodeList$sample$args::mode': 0,
    'core::nodeList$sample$args::maxDephasing': 0,
    'core::nodeGeo$sample$args::refs': 0,
    'core::nodeGeo$sample$args::from': 0,
    'core::nodeGeo$sample$args::to': 0,
    'core::nodeGeo$sample$args::maxRows': 0,
    'core::nodeGeo$sample$args::mode': 0,
    'core::Error::message': 0,
    'core::Error::stack': 0,
    'core::nodeTime$sample$args::refs': 0,
    'core::nodeTime$sample$args::from': 0,
    'core::nodeTime$sample$args::to': 0,
    'core::nodeTime$sample$args::maxRows': 0,
    'core::nodeTime$sample$args::mode': 0,
    'core::nodeTime$sample$args::maxDephasing': 0,
    'core::nodeTime$sample$args::tz': 0,
    'core::VectorVertex::vector': 0,
    'core::VectorVertex::level_sizes': 0,
    'core::VectorVertex::neighbour_nodes': 0,
    'core::GeoBox::sw': 0,
    'core::GeoBox::ne': 0,
    'core::nodeGeo<core::node<osm::OsmAddress>>$search$args::center': 0,
    'core::nodeGeo<core::node<osm::OsmAddress>>$search$args::max': 0,
    'core::SearchResult::key': 0,
    'core::SearchResult::value': 0,
    'core::SearchResult::distance': 0,
    'core::Table$applyMappings$args::table': 0,
    'core::Table$applyMappings$args::mappings': 0,
    'core::nodeIndex$sample$args::refs': 0,
    'core::nodeIndex$sample$args::from': 0,
    'core::nodeIndex$sample$args::maxRows': 0,
    'core::nodeIndex$sample$args::mode': 0,
    'core::nodeGeo$search$args::center': 0,
    'core::nodeGeo$search$args::max': 0,
    'core::TableColumnMapping::column': 0,
    'core::TableColumnMapping::extractors': 0,
    'core::nodeIndex$info$args::nodes': 0,
    'core::nodeGeo<core::node<bda::BdaAddress>>$search$args::center': 0,
    'core::nodeGeo<core::node<bda::BdaAddress>>$search$args::max': 0,
    'core::nodeList$info$args::nodes': 0,
    'core::GeoCircle::center': 0,
    'core::GeoCircle::radius': 0,
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
    'core::nodeTime$info$args::nodes': 0,
    'core::nodeIndex$search_closest$args::i': 0,
    'core::nodeIndex$search_closest$args::key': 0,
    'core::nodeIndex$search_closest$args::max': 0,
    'core::nodeTimeCursor::n': 0,
    'core::nodeGeo<core::node<golden::GoldenAddress>>$search$args::center': 0,
    'core::nodeGeo<core::node<golden::GoldenAddress>>$search$args::max': 0,
    'core::nodeGeo<core::node<osm::OsmPartialAddress>>$search$args::center': 0,
    'core::nodeGeo<core::node<osm::OsmPartialAddress>>$search$args::max': 0,
    'core::node$resolve_all$args::n': 0,
    'core::GeoPoly::points': 0,
    'core::NodeInfo::size': 0,
    'core::NodeInfo::from': 0,
    'core::NodeInfo::to': 0,
    'core::VectorIndex::values': 0,
    'core::VectorIndex::count': 0,
    'core::VectorIndex::max_level': 0,
    'core::VectorIndex::entry_node_ref': 0,
    'core::VectorIndex::rng': 0,
    'core::VectorIndex::distance': 0,
    'core::Tuple::x': 0,
    'core::Tuple::y': 0,
    'core::nodeIndexBucket::key': 0,
    'core::nodeIndexBucket::value': 0,
    'core::nodeIndexBucket::next': 0,
    'core::nodeGeo$info$args::nodes': 0,
    'runtime::Permission::name': 0,
    'runtime::Permission::description': 0,
    'runtime::McpToolExecution::taskSupport': 0,
    'runtime::McpClientRoots::listChanged': 0,
    'runtime::McpServerToolsCapabilities::listChanged': 0,
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
    'runtime::Task$cancel$args::task_id': 0,
    'runtime::McpClientTasksCapabilities::list': 0,
    'runtime::McpClientTasksCapabilities::cancel': 0,
    'runtime::McpClientTasksCapabilities::requests': 0,
    'runtime::HeaderObject::description': 0,
    'runtime::HeaderObject::required': 0,
    'runtime::McpToolsListParams::_meta': 0,
    'runtime::McpToolsListParams::cursor': 0,
    'runtime::mcp_tasks_get$args::params': 0,
    'runtime::McpPromptsListResult::_meta': 0,
    'runtime::McpPromptsListResult::prompts': 0,
    'runtime::McpPromptsListResult::nextCursor': 0,
    'runtime::McpResourceContent::type': 0,
    'runtime::McpResourceContent::_meta': 0,
    'runtime::McpResourceContent::annotations': 0,
    'runtime::McpResourceContent::uri': 0,
    'runtime::McpResourceContent::description': 0,
    'runtime::McpResourceContent::mimeType': 0,
    'runtime::McpResourceContent::size': 0,
    'runtime::PathItemObject::description': 0,
    'runtime::PathItemObject::post': 0,
    'runtime::McpTasksCreateResult::_meta': 0,
    'runtime::McpTasksCreateResult::task': 0,
    'runtime::McpToolsCallResult::_meta': 0,
    'runtime::McpToolsCallResult::content': 0,
    'runtime::McpToolsCallResult::structuredContent': 0,
    'runtime::McpToolsCallResult::isError': 0,
    'runtime::McpAudioContent::type': 0,
    'runtime::McpAudioContent::_meta': 0,
    'runtime::McpAudioContent::annotations': 0,
    'runtime::McpAudioContent::data': 0,
    'runtime::McpAudioContent::mimeType': 0,
    'runtime::Task$tasks$args::ids': 0,
    'runtime::WeeklyPeriodicity::days': 0,
    'runtime::WeeklyPeriodicity::daily': 0,
    'runtime::Frame::module': 0,
    'runtime::Frame::type': 0,
    'runtime::Frame::function': 0,
    'runtime::Frame::src': 0,
    'runtime::Frame::line': 0,
    'runtime::Frame::column': 0,
    'runtime::Frame::scope': 0,
    'runtime::Debug::id': 0,
    'runtime::Debug::frames': 0,
    'runtime::Debug::root': 0,
    'runtime::McpTool::name': 0,
    'runtime::McpTool::title': 0,
    'runtime::McpTool::description': 0,
    'runtime::McpTool::inputSchema': 0,
    'runtime::McpTool::outputSchema': 0,
    'runtime::McpTool::annotations': 0,
    'runtime::McpTool::execution': 0,
    'runtime::Job::function': 0,
    'runtime::Job::arguments': 0,
    'runtime::ContactObject::name': 0,
    'runtime::ContactObject::url': 0,
    'runtime::ContactObject::email': 0,
    'runtime::McpImageContent::type': 0,
    'runtime::McpImageContent::_meta': 0,
    'runtime::McpImageContent::annotations': 0,
    'runtime::McpImageContent::data': 0,
    'runtime::McpImageContent::mimeType': 0,
    'runtime::DailyPeriodicity::hour': 0,
    'runtime::DailyPeriodicity::minute': 0,
    'runtime::DailyPeriodicity::second': 0,
    'runtime::DailyPeriodicity::timezone': 0,
    'runtime::McpTextContent::type': 0,
    'runtime::McpTextContent::_meta': 0,
    'runtime::McpTextContent::annotations': 0,
    'runtime::McpTextContent::text': 0,
    'runtime::mcp_tools_list$args::params': 0,
    'runtime::mcp_tasks_cancel$args::params': 0,
    'runtime::Log::level': 0,
    'runtime::Log::time': 0,
    'runtime::Log::user_id': 0,
    'runtime::Log::id': 0,
    'runtime::Log::id2': 0,
    'runtime::Log::src': 0,
    'runtime::Log::data': 0,
    'runtime::ZoneUsage::size': 0,
    'runtime::ZoneUsage::committed_blocks': 0,
    'runtime::ZoneUsage::reserved_blocks': 0,
    'runtime::ZoneUsage::blocks': 0,
    'runtime::ZoneUsage::cache': 0,
    'runtime::Identity$create$args::name': 0,
    'runtime::Identity$create$args::role': 0,
    'runtime::McpInitializeResult::_meta': 0,
    'runtime::McpInitializeResult::protocolVersion': 0,
    'runtime::McpInitializeResult::capabilities': 0,
    'runtime::McpInitializeResult::serverInfo': 0,
    'runtime::McpInitializeResult::instructions': 0,
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
    'runtime::ChildProcess::pid': 0,
    'runtime::mcp_prompts_list$args::params': 0,
    'runtime::Identity$get_by_name$args::name': 0,
    'runtime::McpInitializeParams::_meta': 0,
    'runtime::McpInitializeParams::protocolVersion': 0,
    'runtime::McpInitializeParams::capabilities': 0,
    'runtime::McpInitializeParams::clientInfo': 0,
    'runtime::PeriodicOptions::immediate': 0,
    'runtime::PeriodicOptions::activated': 0,
    'runtime::PeriodicOptions::start': 0,
    'runtime::PeriodicOptions::max_duration': 0,
    'runtime::Scheduler$activate$args::function': 0,
    'runtime::RequestBodyObject::content': 0,
    'runtime::RequestBodyObject::required': 0,
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
    'runtime::Identity::id': 0,
    'runtime::Identity::name': 0,
    'runtime::Identity::role': 0,
    'runtime::Identity::grants': 0,
    'runtime::McpClientCapabilities::experimental': 0,
    'runtime::McpClientCapabilities::roots': 0,
    'runtime::McpClientCapabilities::sampling': 0,
    'runtime::McpClientCapabilities::elicitation': 0,
    'runtime::McpClientCapabilities::tasks': 0,
    'runtime::Identity$get_by_id$args::id': 0,
    'runtime::McpServerResourcesCapabilities::subscribe': 0,
    'runtime::McpServerResourcesCapabilities::listChanged': 0,
    'runtime::McpServerPromptsCapabilities::listChanged': 0,
    'runtime::Identity$token$args::id': 0,
    'runtime::Identity$token$args::ttl': 0,
    'runtime::ComponentsObject::schemas': 0,
    'runtime::McpTasksGetParams::_meta': 0,
    'runtime::McpTasksGetParams::taskId': 0,
    'runtime::InfoObject::title': 0,
    'runtime::InfoObject::version': 0,
    'runtime::InfoObject::summary': 0,
    'runtime::InfoObject::description': 0,
    'runtime::InfoObject::termsOfService': 0,
    'runtime::InfoObject::contact': 0,
    'runtime::InfoObject::license': 0,
    'runtime::MediaTypeObject::schema': 0,
    'runtime::McpPromptArgument::name': 0,
    'runtime::McpPromptArgument::title': 0,
    'runtime::McpPromptArgument::description': 0,
    'runtime::McpPromptArgument::required': 0,
    'runtime::LicenseObject::name': 0,
    'runtime::LicenseObject::identifier': 0,
    'runtime::LicenseObject::url': 0,
    'runtime::mcp_tools_call$args::params': 0,
    'runtime::OpenApiV3::openapi': 0,
    'runtime::OpenApiV3::info': 0,
    'runtime::OpenApiV3::paths': 0,
    'runtime::OpenApiV3::components': 0,
    'runtime::McpTasksListParams::_meta': 0,
    'runtime::McpTasksListParams::cursor': 0,
    'runtime::Task$history$args::offset': 0,
    'runtime::Task$history$args::max': 0,
    'runtime::Identity$set_grants$args::name': 0,
    'runtime::Identity$set_grants$args::grants': 0,
    'runtime::McpTask::taskId': 0,
    'runtime::McpTask::status': 0,
    'runtime::McpTask::statusMessage': 0,
    'runtime::McpTask::createdAt': 0,
    'runtime::McpTask::lastUpdatedAt': 0,
    'runtime::McpTask::ttl': 0,
    'runtime::McpTask::pollInterval': 0,
    'runtime::OperationObject::tags': 0,
    'runtime::OperationObject::description': 0,
    'runtime::OperationObject::requestBody': 0,
    'runtime::OperationObject::responses': 0,
    'runtime::IdentityGrant::name': 0,
    'runtime::IdentityGrant::grant': 0,
    'runtime::License::name': 0,
    'runtime::License::start': 0,
    'runtime::License::end': 0,
    'runtime::License::company': 0,
    'runtime::License::max_memory': 0,
    'runtime::License::extra_1': 0,
    'runtime::License::extra_2': 0,
    'runtime::License::type': 0,
    'runtime::FixedPeriodicity::every': 0,
    'runtime::Identity$set_password$args::name': 0,
    'runtime::Identity$set_password$args::pass': 0,
    'runtime::Debug$resume$args::id': 0,
    'runtime::McpTasksListResult::_meta': 0,
    'runtime::McpTasksListResult::tasks': 0,
    'runtime::McpTasksListResult::nextCursor': 0,
    'runtime::WorkerUsage::memory': 0,
    'runtime::WorkerUsage::cache': 0,
    'runtime::WorkerUsage::writes': 0,
    'runtime::WorkerUsage::reads': 0,
    'runtime::DateTuple::day': 0,
    'runtime::DateTuple::month': 0,
    'runtime::McpServerTasksCapabilities::list': 0,
    'runtime::McpServerTasksCapabilities::cancel': 0,
    'runtime::McpServerTasksCapabilities::requests': 0,
    'runtime::Task$live$args::ids': 0,
    'runtime::McpTaskCreateParams::ttl': 0,
    'runtime::MonthlyPeriodicity::days': 0,
    'runtime::MonthlyPeriodicity::daily': 0,
    'runtime::Identity$set_role$args::name': 0,
    'runtime::Identity$set_role$args::role': 0,
    'runtime::ResponseObject::description': 0,
    'runtime::ResponseObject::headers': 0,
    'runtime::ResponseObject::content': 0,
    'runtime::Scheduler$find$args::function': 0,
    'runtime::PeriodicTask::function': 0,
    'runtime::PeriodicTask::periodicity': 0,
    'runtime::PeriodicTask::options': 0,
    'runtime::PeriodicTask::is_active': 0,
    'runtime::PeriodicTask::next_execution': 0,
    'runtime::PeriodicTask::execution_count': 0,
    'runtime::LogDataUsage::read_bytes': 0,
    'runtime::LogDataUsage::read_hits': 0,
    'runtime::LogDataUsage::read_wasted': 0,
    'runtime::LogDataUsage::write_bytes': 0,
    'runtime::LogDataUsage::write_hits': 0,
    'runtime::LogDataUsage::cache_bytes': 0,
    'runtime::LogDataUsage::cache_hits': 0,
    'runtime::mcp_tasks_list$args::params': 0,
    'runtime::McpAnnotations::audience': 0,
    'runtime::McpAnnotations::priority': 0,
    'runtime::McpAnnotations::lastModified': 0,
    'runtime::mcp_initialize$args::params': 0,
    'runtime::Scheduler$deactivate$args::function': 0,
    'runtime::Variable::name': 0,
    'runtime::Variable::value': 0,
    'runtime::McpPrompt::name': 0,
    'runtime::McpPrompt::title': 0,
    'runtime::McpPrompt::description': 0,
    'runtime::McpPrompt::arguments': 0,
    'runtime::Identity$login$args::login': 0,
    'runtime::Identity$login$args::password': 0,
    'runtime::McpTasksResultParams::_meta': 0,
    'runtime::McpTasksResultParams::taskId': 0,
    'runtime::ChildProcessResult::code': 0,
    'runtime::ChildProcessResult::stdout': 0,
    'runtime::ChildProcessResult::stderr': 0,
    'runtime::Role::name': 0,
    'runtime::Role::permissions': 0,
    'runtime::McpToolsListResult::_meta': 0,
    'runtime::McpToolsListResult::tools': 0,
    'runtime::Scheduler$add$args::function': 0,
    'runtime::Scheduler$add$args::periodicity': 0,
    'runtime::Scheduler$add$args::options': 0,
    'runtime::Task$is_running$args::task_id': 0,
    'runtime::Debug$get$args::id': 0,
    'runtime::YearlyPeriodicity::dates': 0,
    'runtime::YearlyPeriodicity::timezone': 0,
    'runtime::McpServerCapabilities::experimental': 0,
    'runtime::McpServerCapabilities::logging': 0,
    'runtime::McpServerCapabilities::completions': 0,
    'runtime::McpServerCapabilities::prompts': 0,
    'runtime::McpServerCapabilities::resources': 0,
    'runtime::McpServerCapabilities::tools': 0,
    'runtime::McpServerCapabilities::tasks': 0,
    'runtime::McpToolsCallParams::_meta': 0,
    'runtime::McpToolsCallParams::name': 0,
    'runtime::McpToolsCallParams::arguments': 0,
    'runtime::McpToolsCallParams::task': 0,
    'runtime::McpResourcesListResult::_meta': 0,
    'runtime::McpResourcesListResult::resources': 0,
    'runtime::McpResourcesListResult::nextCursor': 0,
    'runtime::McpResourcesListParams::_meta': 0,
    'runtime::McpResourcesListParams::cursor': 0,
    'runtime::McpPromptsListParams::_meta': 0,
    'runtime::McpPromptsListParams::cursor': 0,
    'runtime::RuntimeUsage::os_total_bytes': 0,
    'runtime::RuntimeUsage::os_used_bytes': 0,
    'runtime::RuntimeUsage::proc_virt_bytes': 0,
    'runtime::RuntimeUsage::proc_res_bytes': 0,
    'runtime::RuntimeUsage::proc_shr_bytes': 0,
    'runtime::RuntimeUsage::global_memory': 0,
    'runtime::RuntimeUsage::memory_drift': 0,
    'runtime::RuntimeUsage::workers': 0,
    'runtime::RuntimeUsage::zones': 0,
    'runtime::mcp_tasks_result$args::params': 0,
    'runtime::McpImplementation::name': 0,
    'runtime::McpImplementation::title': 0,
    'runtime::McpImplementation::version': 0,
    'runtime::McpResource::name': 0,
    'runtime::McpResource::title': 0,
    'runtime::McpResource::uri': 0,
    'runtime::McpResource::description': 0,
    'runtime::McpResource::mimeType': 0,
    'runtime::McpResource::size': 0,
    'runtime::mcp_resources_list$args::params': 0,
    'runtime::McpTasksCancelParams::_meta': 0,
    'runtime::McpTasksCancelParams::taskId': 0,
    'io::Csv$sample$args::reader': 0,
    'io::Csv$sample$args::max_lines': 0,
    'io::S3Object::key': 0,
    'io::S3Object::last_modified': 0,
    'io::S3Object::size': 0,
    'io::S3Object::etag': 0,
    'io::GcbReader::path': 0,
    'io::GcbReader::pos': 0,
    'io::File::path': 0,
    'io::File::size': 0,
    'io::File::last_modification': 0,
    'io::CsvAnalysisConfig::header_lines': 0,
    'io::CsvAnalysisConfig::separator': 0,
    'io::CsvAnalysisConfig::string_delimiter': 0,
    'io::CsvAnalysisConfig::decimal_separator': 0,
    'io::CsvAnalysisConfig::thousands_separator': 0,
    'io::CsvAnalysisConfig::row_limit': 0,
    'io::CsvAnalysisConfig::enumerable_limit': 0,
    'io::CsvAnalysisConfig::date_check_limit': 0,
    'io::CsvAnalysisConfig::date_formats': 0,
    'io::CsvReader::path': 0,
    'io::CsvReader::pos': 0,
    'io::CsvReader::format': 0,
    'io::CsvReader::sharding': 0,
    'io::CsvFormat::header_lines': 0,
    'io::CsvFormat::separator': 0,
    'io::CsvFormat::string_delimiter': 0,
    'io::CsvFormat::decimal_separator': 0,
    'io::CsvFormat::thousands_separator': 0,
    'io::CsvFormat::trim': 0,
    'io::CsvFormat::format': 0,
    'io::CsvFormat::tz': 0,
    'io::CsvFormat::strict': 0,
    'io::CsvFormat::null_in_quotes': 0,
    'io::CsvFormat::nested': 0,
    'io::CsvFormat::nearest_time': 0,
    'io::Csv$analyze$args::paths': 0,
    'io::Csv$analyze$args::config': 0,
    'io::Smtp::host': 0,
    'io::Smtp::port': 0,
    'io::Smtp::mode': 0,
    'io::Smtp::authenticate': 0,
    'io::Smtp::user': 0,
    'io::Smtp::pass': 0,
    'io::CsvSharding::id': 0,
    'io::CsvSharding::column': 0,
    'io::CsvSharding::modulo': 0,
    'io::TextWriter::path': 0,
    'io::TextWriter::append': 0,
    'io::CsvStatistics::header_lines': 0,
    'io::CsvStatistics::separator': 0,
    'io::CsvStatistics::string_delimiter': 0,
    'io::CsvStatistics::decimal_separator': 0,
    'io::CsvStatistics::thousands_separator': 0,
    'io::CsvStatistics::columns': 0,
    'io::CsvStatistics::line_count': 0,
    'io::CsvStatistics::fail_count': 0,
    'io::CsvStatistics::file_count': 0,
    'io::S3Bucket::name': 0,
    'io::S3Bucket::creation_date': 0,
    'io::TextReader::path': 0,
    'io::TextReader::pos': 0,
    'io::S3::host': 0,
    'io::S3::region': 0,
    'io::S3::credentials': 0,
    'io::S3::force_path_style': 0,
    'io::JsonWriter::path': 0,
    'io::JsonWriter::append': 0,
    'io::XmlReader::path': 0,
    'io::XmlReader::pos': 0,
    'io::Email::from': 0,
    'io::Email::subject': 0,
    'io::Email::body': 0,
    'io::Email::body_is_html': 0,
    'io::Email::to': 0,
    'io::Email::cc': 0,
    'io::Email::bcc': 0,
    'io::CsvWriter::path': 0,
    'io::CsvWriter::append': 0,
    'io::CsvWriter::format': 0,
    'io::FileWalker::path': 0,
    'io::S3BasicCredentials::access_key': 0,
    'io::S3BasicCredentials::secret_key': 0,
    'io::Url::protocol': 0,
    'io::Url::host': 0,
    'io::Url::port': 0,
    'io::Url::path': 0,
    'io::Url::user': 0,
    'io::Url::password': 0,
    'io::Url::params': 0,
    'io::Url::hash': 0,
    'io::GcbWriter::path': 0,
    'io::GcbWriter::append': 0,
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
    'io::BinReader::path': 0,
    'io::BinReader::pos': 0,
    'io::Csv$generate$args::stats': 0,
    'io::JsonReader::path': 0,
    'io::JsonReader::pos': 0,
    'util::LogQuantizer::min': 0,
    'util::LogQuantizer::max': 0,
    'util::LogQuantizer::bins': 0,
    'util::LogQuantizer::open': 0,
    'util::Queue::values': 0,
    'util::Queue::capacity': 0,
    'util::LinearQuantizer::min': 0,
    'util::LinearQuantizer::max': 0,
    'util::LinearQuantizer::bins': 0,
    'util::LinearQuantizer::open': 0,
    'util::CustomQuantizer::min': 0,
    'util::CustomQuantizer::max': 0,
    'util::CustomQuantizer::step_starts': 0,
    'util::CustomQuantizer::open': 0,
    'util::TimeWindow::values': 0,
    'util::TimeWindow::span': 0,
    'util::TimeWindow::sum': 0,
    'util::TimeWindow::sumsq': 0,
    'util::TimeWindow::field': 0,
    'util::Random::seed': 0,
    'util::Random::v': 0,
    'util::ProgressTracker::start': 0,
    'util::ProgressTracker::total': 0,
    'util::ProgressTracker::counter': 0,
    'util::ProgressTracker::duration': 0,
    'util::ProgressTracker::progress': 0,
    'util::ProgressTracker::speed': 0,
    'util::ProgressTracker::remaining': 0,
    'util::ProgressTracker::speed_smoothed': 0,
    'util::ProgressTracker::smoothing': 0,
    'util::GaussianProfileSlot::sum': 0,
    'util::GaussianProfileSlot::sumsq': 0,
    'util::GaussianProfileSlot::count': 0,
    'util::SlidingWindow::values': 0,
    'util::SlidingWindow::span': 0,
    'util::SlidingWindow::sum': 0,
    'util::SlidingWindow::sumsq': 0,
    'util::SlidingWindow::field': 0,
    'util::Stack::values': 0,
    'util::Histogram::quantizer': 0,
    'util::Histogram::bins': 0,
    'util::Histogram::nb_rejected': 0,
    'util::Histogram::nb_accepted': 0,
    'util::Histogram::min': 0,
    'util::Histogram::max': 0,
    'util::Histogram::sum': 0,
    'util::Histogram::sumsq': 0,
    'util::Gaussian::sum': 0,
    'util::Gaussian::sumsq': 0,
    'util::Gaussian::count': 0,
    'util::Gaussian::min': 0,
    'util::Gaussian::max': 0,
    'util::HistogramBin::bin': 0,
    'util::HistogramBin::count': 0,
    'util::HistogramBin::ratio': 0,
    'util::HistogramBin::cumulative_count': 0,
    'util::HistogramBin::cumulative_ratio': 0,
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
    'util::GaussianProfile::quantizer': 0,
    'util::GaussianProfile::precision': 0,
    'util::GaussianProfile::bins': 0,
    'util::GaussianProfile::value_min': 0,
    'util::GaussianProfile::nb_rejected': 0,
    'util::MultiQuantizer::quantizers': 0,
    'util::QuantizerSlotBound::min': 0,
    'util::QuantizerSlotBound::max': 0,
    'util::QuantizerSlotBound::center': 0,
    'privateApi::ComparisonViewData::sourceRecord': 0,
    'privateApi::ComparisonViewData::candidates': 0,
    'privateApi::SourceCountPoint::timestamp': 0,
    'privateApi::SourceCountPoint::total': 0,
    'privateApi::SourceCountPoint::active': 0,
    'privateApi::SourceStats::rows': 0,
    'privateApi::SourceStats::series': 0,
    'privateApi::linkRecords$args::sourceRecord': 0,
    'privateApi::linkRecords$args::candidateRecord': 0,
    'privateApi::linkRecords$args::params': 0,
    'privateApi::getLinkedComparisonViewData$args::source': 0,
    'privateApi::getLinkedComparisonViewData$args::recordId': 0,
    'privateApi::GoldenRecordScore::uid': 0,
    'privateApi::GoldenRecordScore::number': 0,
    'privateApi::GoldenRecordScore::street': 0,
    'privateApi::GoldenRecordScore::city': 0,
    'privateApi::GoldenRecordScore::postcode': 0,
    'privateApi::GoldenRecordScore::linkedCount': 0,
    'privateApi::GoldenRecordScore::quality': 0,
    'privateApi::ReconciliationReportMatchView::score': 0,
    'privateApi::ReconciliationReportMatchView::id': 0,
    'privateApi::unlinkRecord$args::sourceRecord': 0,
    'privateApi::unlockSource$args::source': 0,
    'privateApi::RecordTabResult::tab': 0,
    'privateApi::RecordTabResult::score': 0,
    'privateApi::getRecordTab$args::source': 0,
    'privateApi::getRecordTab$args::recordId': 0,
    'privateApi::getComparisonViewData$args::source': 0,
    'privateApi::getComparisonViewData$args::recordId': 0,
    'privateApi::SourceStatsRow::source': 0,
    'privateApi::SourceStatsRow::total': 0,
    'privateApi::SourceStatsRow::active': 0,
    'privateApi::SourceStatsRow::linked': 0,
    'privateApi::SourceStatsRow::share': 0,
    'privateApi::SourceStatsRow::lastUpdate': 0,
    'privateApi::SourceStatsRow::asOf': 0,
    'privateApi::linkAllFullMatched$args::source': 0,
    'privateApi::linkAllFullMatched$args::recordIds': 0,
    'privateApi::GoldenRecordPage::total': 0,
    'privateApi::GoldenRecordPage::offset': 0,
    'privateApi::GoldenRecordPage::limit': 0,
    'privateApi::GoldenRecordPage::rows': 0,
    'privateApi::SourceCountSeries::source': 0,
    'privateApi::SourceCountSeries::points': 0,
    'privateApi::getReconciliationReport$args::source': 0,
    'privateApi::getReconciliationReport$args::city': 0,
    'privateApi::getReconciliationReport$args::municipality': 0,
    'privateApi::SourceRef::ref': 0,
    'privateApi::SourceRef::name': 0,
    'privateApi::SourceRef::locked': 0,
    'privateApi::GlobalQualityHistory::current': 0,
    'privateApi::GlobalQualityHistory::history': 0,
    'privateApi::mergePositionsToGolden$args::source': 0,
    'privateApi::mergePositionsToGolden$args::recordIds': 0,
    'privateApi::MatchedCandidateDetail::ref': 0,
    'privateApi::MatchedCandidateDetail::numberScore': 0,
    'privateApi::MatchedCandidateDetail::streetScore': 0,
    'privateApi::MatchedCandidateDetail::cityScore': 0,
    'privateApi::MatchedCandidateDetail::postcodeScore': 0,
    'privateApi::MatchedCandidateDetail::geoScore': 0,
    'privateApi::MatchedCandidateDetail::overallScore': 0,
    'privateApi::MatchedCandidateDetail::record': 0,
    'privateApi::GlobalQualityEntry::timestamp': 0,
    'privateApi::GlobalQualityEntry::averageQuality': 0,
    'privateApi::batchLinkByScore$args::source': 0,
    'privateApi::batchLinkByScore$args::globalScore': 0,
    'privateApi::batchLinkByScore$args::geoScore': 0,
    'privateApi::batchLinkByScore$args::cityScore': 0,
    'privateApi::batchLinkByScore$args::streetScore': 0,
    'privateApi::batchLinkByScore$args::numberScore': 0,
    'privateApi::batchLinkByScore$args::postcodeScore': 0,
    'privateApi::lockSource$args::source': 0,
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
    'privateApi::promoteRecord$args::sourceRecord': 0,
    'privateApi::promoteRecord$args::streetIdx': 0,
    'privateApi::buildSourceTextIndex$args::source': 0,
    'privateApi::reconcileAddresses$args::source': 0,
    'privateApi::reconcileAddresses$args::poiIds': 0,
    'privateApi::reconcileAddresses$args::params': 0,
    'privateApi::reconcile$args::source': 0,
    'privateApi::reconcile$args::params': 0,
    'api::DeprecatedCounts::rows': 0,
    'api::DeprecatedCounts::total': 0,
    'api::DeprecatedCounts::deprecated': 0,
    'api::getGoldenNumbersByStreetId$args::streetId': 0,
    'api::getGoldenRecordDetails$args::uid': 0,
    'api::getGoldenWithLinkedRecords$args::addr': 0,
    'api::GeoJSONFeature::type': 0,
    'api::GeoJSONFeature::geometry': 0,
    'api::GeoJSONFeature::properties': 0,
    'api::getGlobalQualityHistory$args::from': 0,
    'api::getGlobalQualityHistory$args::to': 0,
    'api::getGoldenRecords$args::offset': 0,
    'api::getGoldenRecords$args::limit': 0,
    'api::GoldenRecordDetails::golden': 0,
    'api::GoldenRecordDetails::associated': 0,
    'api::getDeprecatedCounts$args::source': 0,
    'api::AddressFeatures::coords': 0,
    'api::AddressFeatures::number': 0,
    'api::GeoJSONGeometry::type': 0,
    'api::GeoJSONGeometry::coordinates': 0,
    'api::getPoisInStreet$args::streetId': 0,
    'api::getGoldenStreetsByLocalityId$args::localityId': 0,
    'api::GoldenRecordsPage::total': 0,
    'api::GoldenRecordsPage::offset': 0,
    'api::GoldenRecordsPage::limit': 0,
    'api::GoldenRecordsPage::rows': 0,
    'api::RankedGoldenRecord::record': 0,
    'api::RankedGoldenRecord::value': 0,
    'api::GoldenWithLinkedRecords::golden': 0,
    'api::GoldenWithLinkedRecords::osm': 0,
    'api::GoldenWithLinkedRecords::caclr': 0,
    'api::GoldenWithLinkedRecords::bda': 0,
    'api::searchAddress$args::addr': 0,
    'api::searchAddress$args::max': 0,
    'api::searchAddress$args::source': 0,
    'api::DeprecatedCountRow::source': 0,
    'api::DeprecatedCountRow::total': 0,
    'api::DeprecatedCountRow::deprecated': 0,
    'api::DeprecatedCountRow::asOf': 0,
    'api::LinkedRecordDetails::score': 0,
    'api::LinkedRecordDetails::record': 0,
    'api::getGoldenLocalities$args::communeName': 0,
    'api::GeoJSON::type': 0,
    'api::GeoJSON::features': 0,
    'api::getGoldenRecordScores$args::offset': 0,
    'api::getGoldenRecordScores$args::limit': 0,
    'api::getGoldenRecordScores$args::sortKey': 0,
    'api::getGoldenRecordScores$args::sortDir': 0,
    'api::DataAttribution::notice': 0,
    'api::DataAttribution::sources': 0,
    'api::getRecordByGeoportailID$args::id': 0,
    'api::searchStreet$args::e': 0,
    'api::GoldenIndex::id': 0,
    'api::GoldenIndex::name': 0,
    'api::getSourceStats$args::from': 0,
    'api::getSourceStats$args::to': 0,
    'api::getGoldenRecordRefByUid$args::uid': 0,
    'api::getPoisByGeo$args::coords': 0,
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
    'backupExporter::BkBdaAddressDTO::createdAt': 0,
    'backupExporter::BkBdaAddressDTO::deprecated': 0,
    'backupExporter::BkBdaStreetDTO::name': 0,
    'backupExporter::BkBdaStreetDTO::idCaclr': 0,
    'backupExporter::BkBdaStreetDTO::cityName': 0,
    'backupExporter::BkBdaStreetDTO::municipalityName': 0,
    'backupExporter::BkBdaCityDTO::name': 0,
    'backupExporter::BkBdaCityDTO::municipalityName': 0,
    'backupExporter::BkCaclrConstituencyDTO::code': 0,
    'backupExporter::BkCaclrConstituencyDTO::name': 0,
    'backupExporter::BkOsmPartialAddressDTO::id': 0,
    'backupExporter::BkOsmPartialAddressDTO::position': 0,
    'backupExporter::BkOsmPartialAddressDTO::city': 0,
    'backupExporter::BkOsmPartialAddressDTO::postcode': 0,
    'backupExporter::BkOsmPartialAddressDTO::street': 0,
    'backupExporter::BkOsmPartialAddressDTO::number': 0,
    'backupExporter::BkOsmPartialAddressDTO::refCaclr': 0,
    'backupExporter::BkOsmPartialAddressDTO::map': 0,
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
    'backupExporter::BkGoldenPoiDTO::uid': 0,
    'backupExporter::BkGoldenPoiDTO::number': 0,
    'backupExporter::BkGoldenPoiDTO::multipleCode': 0,
    'backupExporter::BkGoldenPoiDTO::postCode': 0,
    'backupExporter::BkGoldenPoiDTO::primaryLocation': 0,
    'backupExporter::BkGoldenPoiDTO::secondaryLocations': 0,
    'backupExporter::BkGoldenPoiDTO::streetId': 0,
    'backupExporter::BkGoldenPoiDTO::lastUpdate': 0,
    'backupExporter::BkGoldenPoiDTO::createdAt': 0,
    'backupExporter::BkGoldenPoiDTO::linkedRecords': 0,
    'backupExporter::BkGoldenPoiDTO::quality': 0,
    'backupExporter::BkOsmStreetDTO::name': 0,
    'backupExporter::BkOsmStreetDTO::cityName': 0,
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
    'backupExporter::BkCaclrBuildingDTO::createdAt': 0,
    'backupExporter::BkCaclrBuildingDTO::deprecated': 0,
    'backupExporter::BkGoldenCantonDTO::id': 0,
    'backupExporter::BkGoldenCantonDTO::name': 0,
    'backupExporter::BkGoldenCantonDTO::nameAliases': 0,
    'backupExporter::BkGoldenCantonDTO::constituencyId': 0,
    'backupExporter::BkGoldenCantonDTO::lastUpdate': 0,
    'backupExporter::BkGoldenCantonDTO::caclrId': 0,
    'backupExporter::BkGoldenMunicipalityDTO::id': 0,
    'backupExporter::BkGoldenMunicipalityDTO::name': 0,
    'backupExporter::BkGoldenMunicipalityDTO::nameAliases': 0,
    'backupExporter::BkGoldenMunicipalityDTO::cantonId': 0,
    'backupExporter::BkGoldenMunicipalityDTO::lastUpdate': 0,
    'backupExporter::BkGoldenMunicipalityDTO::caclrId': 0,
    'backupExporter::BkGoldenCityDTO::id': 0,
    'backupExporter::BkGoldenCityDTO::name': 0,
    'backupExporter::BkGoldenCityDTO::nameAliases': 0,
    'backupExporter::BkGoldenCityDTO::municipalityId': 0,
    'backupExporter::BkGoldenCityDTO::lastUpdate': 0,
    'backupExporter::BkGoldenCityDTO::caclrId': 0,
    'backupExporter::BkBdaMunicipalityDTO::name': 0,
    'backupExporter::BkManifestEntryDTO::file': 0,
    'backupExporter::BkManifestEntryDTO::records': 0,
    'backupExporter::BkGoldenLinkedRecordDTO::sourceName': 0,
    'backupExporter::BkGoldenLinkedRecordDTO::id': 0,
    'backupExporter::BkGoldenLinkedRecordDTO::score': 0,
    'backupExporter::BkGoldenLinkedRecordDTO::detailedScore': 0,
    'backupExporter::BkGoldenStreetDTO::id': 0,
    'backupExporter::BkGoldenStreetDTO::name': 0,
    'backupExporter::BkGoldenStreetDTO::nameAliases': 0,
    'backupExporter::BkGoldenStreetDTO::cityId': 0,
    'backupExporter::BkGoldenStreetDTO::lastUpdate': 0,
    'backupExporter::BkGoldenStreetDTO::caclrId': 0,
    'backupExporter::BkGoldenConstituencyDTO::code': 0,
    'backupExporter::BkGoldenConstituencyDTO::name': 0,
    'backupExporter::BkGoldenConstituencyDTO::nameAliases': 0,
    'backupExporter::BkGoldenConstituencyDTO::caclrCode': 0,
    'backupExporter::BkCaclrCantonDTO::id': 0,
    'backupExporter::BkCaclrCantonDTO::code': 0,
    'backupExporter::BkCaclrCantonDTO::name': 0,
    'backupExporter::BkCaclrCantonDTO::lastUpdate': 0,
    'backupExporter::BkCaclrCantonDTO::constituencyCode': 0,
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
    'backupExporter::BkOsmAddressDTO::createdAt': 0,
    'backupExporter::BkOsmAddressDTO::deprecated': 0,
    'backupExporter::BkSourceDTO::name': 0,
    'backupExporter::BkSourceDTO::weight': 0,
    'backupExporter::BkSourceDTO::lastUpdate': 0,
    'backupExporter::BkOsmCityDTO::name': 0,
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
    'backupExporter::BkGoldenQualityDTO::t': 0,
    'backupExporter::BkGoldenQualityDTO::score': 0,
    'backupExporter::BkGoldenQualityDTO::id': 0,
    'backupExporter::BkGoldenQualityDTO::sourceName': 0,
    'backupExporter::BkGoldenQualityDTO::eventType': 0,
    'backupExporter::BkGoldenQualityHistoryDTO::t': 0,
    'backupExporter::BkGoldenQualityHistoryDTO::score': 0,
    'backupExporter::BkSourceCountHistoryDTO::sourceName': 0,
    'backupExporter::BkSourceCountHistoryDTO::t': 0,
    'backupExporter::BkSourceCountHistoryDTO::total': 0,
    'backupExporter::BkSourceCountHistoryDTO::active': 0,
    'backupExporter::BkSourceCountHistoryDTO::linked': 0,
    'bdaLoader::BdaAddressLine::rue': 0,
    'bdaLoader::BdaAddressLine::numero': 0,
    'bdaLoader::BdaAddressLine::localite': 0,
    'bdaLoader::BdaAddressLine::code_postal': 0,
    'bdaLoader::BdaAddressLine::id_caclr_rue': 0,
    'bdaLoader::BdaAddressLine::id_caclr_bat': 0,
    'bdaLoader::BdaAddressLine::lat_wgs84': 0,
    'bdaLoader::BdaAddressLine::lon_wgs84': 0,
    'bdaLoader::BdaAddressLine::coord_est_luref': 0,
    'bdaLoader::BdaAddressLine::coord_nord_luref': 0,
    'bdaLoader::BdaAddressLine::id_geoportail': 0,
    'bdaLoader::BdaAddressLine::commune': 0,
    'bdaLoader::BdaAddressLine::lau2': 0,
    'osmLoader::OsmOverpassResponse::elements': 0,
    'caclrLoader::CaclrResponseCities::totalCount': 0,
    'caclrLoader::CaclrResponseCities::items': 0,
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
    'caclrLoader::CaclrResponseCantonItem::id': 0,
    'caclrLoader::CaclrResponseCantonItem::code': 0,
    'caclrLoader::CaclrResponseCantonItem::name': 0,
    'caclrLoader::CaclrResponseCantonItem::lastUpdate': 0,
    'caclrLoader::CaclrResponseCantonItem::constituency': 0,
    'caclrLoader::CaclrResponseStreets::totalCount': 0,
    'caclrLoader::CaclrResponseStreets::items': 0,
    'caclrLoader::CaclrBuildingsResult::addresses': 0,
    'caclrLoader::CaclrBuildingsResult::abandonedCities': 0,
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
    'caclrLoader::CaclrResponseCantons::totalCount': 0,
    'caclrLoader::CaclrResponseCantons::items': 0,
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
    'caclrLoader::CaclrResponseMunicipalities::totalCount': 0,
    'caclrLoader::CaclrResponseMunicipalities::items': 0,
    'caclrLoader::CaclrAlias::name': 0,
    'caclrLoader::CaclrAlias::languageCode': 0,
    'caclrLoader::CaclrResponseConstituency::code': 0,
    'caclrLoader::CaclrResponseConstituency::name': 0,
    'caclrLoader::CaclrResponseBuildings::totalCount': 0,
    'caclrLoader::CaclrResponseBuildings::items': 0,
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
    'bda::BdaCity::name': 0,
    'bda::BdaCity::municipality': 0,
    'bda::BdaCity::streets_by_name': 0,
    'bda::BdaSource::reconciliationReport': 0,
    'bda::BdaSource::isReconciling': 0,
    'bda::BdaSource::lastUpdate': 0,
    'bda::BdaSource::countHistory': 0,
    'bda::BdaMunicipality::name': 0,
    'bda::BdaMunicipality::cities_by_name': 0,
    'bda::BdaAddressFullRecord::id_geoportail': 0,
    'bda::BdaAddressFullRecord::id_caclr': 0,
    'bda::BdaAddressFullRecord::number': 0,
    'bda::BdaAddressFullRecord::postcode': 0,
    'bda::BdaAddressFullRecord::street': 0,
    'bda::BdaAddressFullRecord::locality': 0,
    'bda::BdaAddressFullRecord::commune': 0,
    'bda::BdaAddressFullRecord::primaryLocation': 0,
    'bda::BdaAddressFullRecord::sourceName': 0,
    'bda::BdaAddressFullRecord::goldenRef': 0,
    'bda::BdaAddressFullRecord::deprecated': 0,
    'bda::BdaAddressFullRecord::lastSeenAt': 0,
    'bda::BdaAddress::goldenRef': 0,
    'bda::BdaAddress::createdAt': 0,
    'bda::BdaAddress::lastSeenAt': 0,
    'bda::BdaAddress::deprecated': 0,
    'bda::BdaAddress::number': 0,
    'bda::BdaAddress::postcode': 0,
    'bda::BdaAddress::position': 0,
    'bda::BdaAddress::id_caclr': 0,
    'bda::BdaAddress::id_geoportail': 0,
    'bda::BdaAddress::municipality': 0,
    'bda::BdaAddress::city': 0,
    'bda::BdaAddress::street': 0,
    'bda::BdaStreet::name': 0,
    'bda::BdaStreet::id_caclr': 0,
    'bda::BdaStreet::city': 0,
    'bda::BdaStreet::addresses_by_id': 0,
    'bda::BdaStreet::addresses_by_number': 0,
    'caclr::CaclrAddressFullRecord::id': 0,
    'caclr::CaclrAddressFullRecord::number': 0,
    'caclr::CaclrAddressFullRecord::multipleCode': 0,
    'caclr::CaclrAddressFullRecord::postcode': 0,
    'caclr::CaclrAddressFullRecord::street': 0,
    'caclr::CaclrAddressFullRecord::streetAliases': 0,
    'caclr::CaclrAddressFullRecord::locality': 0,
    'caclr::CaclrAddressFullRecord::localityAliases': 0,
    'caclr::CaclrAddressFullRecord::commune': 0,
    'caclr::CaclrAddressFullRecord::canton': 0,
    'caclr::CaclrAddressFullRecord::constituency': 0,
    'caclr::CaclrAddressFullRecord::primaryLocation': 0,
    'caclr::CaclrAddressFullRecord::administrativeStatus': 0,
    'caclr::CaclrAddressFullRecord::validityStartDate': 0,
    'caclr::CaclrAddressFullRecord::validityEndDate': 0,
    'caclr::CaclrAddressFullRecord::lastUpdate': 0,
    'caclr::CaclrAddressFullRecord::sourceName': 0,
    'caclr::CaclrAddressFullRecord::goldenRef': 0,
    'caclr::CaclrAddressFullRecord::deprecated': 0,
    'caclr::CaclrAddressFullRecord::lastSeenAt': 0,
    'caclr::CaclrEurostatsIds::nuts3': 0,
    'caclr::CaclrEurostatsIds::lau1': 0,
    'caclr::CaclrEurostatsIds::lau2': 0,
    'caclr::CaclrSource::reconciliationReport': 0,
    'caclr::CaclrSource::isReconciling': 0,
    'caclr::CaclrSource::lastUpdate': 0,
    'caclr::CaclrSource::countHistory': 0,
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
    'caclr::CaclrTokenResponse::access_token': 0,
    'caclr::CaclrTokenResponse::token_type': 0,
    'caclr::CaclrTokenResponse::expires_in': 0,
    'caclr::CaclrTokenResponse::scope': 0,
    'caclr::CaclrTokenResponse::iss': 0,
    'caclr::CaclrAddress::goldenRef': 0,
    'caclr::CaclrAddress::createdAt': 0,
    'caclr::CaclrAddress::lastSeenAt': 0,
    'caclr::CaclrAddress::deprecated': 0,
    'caclr::CaclrAddress::id': 0,
    'caclr::CaclrAddress::number': 0,
    'caclr::CaclrAddress::isNumberUndefined': 0,
    'caclr::CaclrAddress::postcode': 0,
    'caclr::CaclrAddress::multipleCode': 0,
    'caclr::CaclrAddress::position': 0,
    'caclr::CaclrAddress::administrativeStatus': 0,
    'caclr::CaclrAddress::validityStartDate': 0,
    'caclr::CaclrAddress::validityEndDate': 0,
    'caclr::CaclrAddress::lastUpdate': 0,
    'caclr::CaclrAddress::street': 0,
    'caclr::CaclrCanton::id': 0,
    'caclr::CaclrCanton::code': 0,
    'caclr::CaclrCanton::name': 0,
    'caclr::CaclrCanton::lastUpdate': 0,
    'caclr::CaclrCanton::constituency': 0,
    'caclr::CaclrCanton::municipalities_by_id': 0,
    'caclr::CaclrCanton::goldenCanton': 0,
    'caclr::CaclrConstituency::code': 0,
    'caclr::CaclrConstituency::name': 0,
    'caclr::CaclrConstituency::cantons_by_id': 0,
    'caclr::CaclrConstituency::goldenConstituency': 0,
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
    'golden::GoldenCanton::id': 0,
    'golden::GoldenCanton::name': 0,
    'golden::GoldenCanton::nameAliases': 0,
    'golden::GoldenCanton::lastUpdate': 0,
    'golden::GoldenCanton::constituency': 0,
    'golden::GoldenCanton::municipalities_by_id': 0,
    'golden::GoldenCanton::caclrCanton': 0,
    'golden::GoldenSource::reconciliationReport': 0,
    'golden::GoldenSource::isReconciling': 0,
    'golden::GoldenSource::lastUpdate': 0,
    'golden::GoldenSource::countHistory': 0,
    'golden::GoldenSource::qualityHistory': 0,
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
    'golden::GoldenStreet::addresses_by_id': 0,
    'golden::GoldenStreet::addresses_by_number': 0,
    'golden::GoldenStreet::caclrStreet': 0,
    'golden::GoldenAddress::uid': 0,
    'golden::GoldenAddress::number': 0,
    'golden::GoldenAddress::multipleCode': 0,
    'golden::GoldenAddress::postcode': 0,
    'golden::GoldenAddress::primaryLocation': 0,
    'golden::GoldenAddress::secondaryLocations': 0,
    'golden::GoldenAddress::lastUpdate': 0,
    'golden::GoldenAddress::createdAt': 0,
    'golden::GoldenAddress::street': 0,
    'golden::GoldenAddress::linkedRecords': 0,
    'golden::GoldenAddress::quality': 0,
    'mengplaz::StreetRecord::street': 0,
    'mengplaz::StreetRecord::streetAliases': 0,
    'mengplaz::StreetRecord::postcode': 0,
    'mengplaz::StreetRecord::city': 0,
    'mengplaz::StreetRecord::cityAliases': 0,
    'mengplaz::StreetRecord::sourceName': 0,
    'mengplaz::AddressFullRecordRef::ref': 0,
    'mengplaz::AddressFullRecordRef::id': 0,
    'mengplaz::AddressFullRecordRef::record': 0,
    'mengplaz::AddressFullRecordRef::matchScore': 0,
    'mengplaz::ReconciliationCandidateScore::cityScore': 0,
    'mengplaz::ReconciliationCandidateScore::streetScore': 0,
    'mengplaz::ReconciliationCandidateScore::numberScore': 0,
    'mengplaz::ReconciliationCandidateScore::postcodeScore': 0,
    'mengplaz::ReconciliationCandidateScore::geoScore': 0,
    'mengplaz::ReconciliationCandidateScore::overallScore': 0,
    'mengplaz::LinkedRecordEntry::record': 0,
    'mengplaz::LinkedRecordEntry::score': 0,
    'mengplaz::LinkedRecordEntry::detailedScore': 0,
    'mengplaz::SearchItem::number': 0,
    'mengplaz::SearchItem::street': 0,
    'mengplaz::SearchItem::streetAliases': 0,
    'mengplaz::SearchItem::multipleCode': 0,
    'mengplaz::SearchItem::postcode': 0,
    'mengplaz::SearchItem::city': 0,
    'mengplaz::SearchItem::cityAliases': 0,
    'mengplaz::SearchItem::coordinates': 0,
    'mengplaz::StreetRecordRef::ref': 0,
    'mengplaz::StreetRecordRef::id': 0,
    'mengplaz::StreetRecordRef::record': 0,
    'mengplaz::StreetRecordRef::score': 0,
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
    'mengplaz::CandidateMatch::cityScore': 0,
    'mengplaz::CandidateMatch::streetScore': 0,
    'mengplaz::CandidateMatch::numberScore': 0,
    'mengplaz::CandidateMatch::postcodeScore': 0,
    'mengplaz::CandidateMatch::searchGeoScore': 0,
    'mengplaz::CandidateMatch::realGeoScore': 0,
    'mengplaz::CandidateMatch::searchOverallScore': 0,
    'mengplaz::CandidateMatch::realOverallScore': 0,
    'mengplaz::CandidateMatch::elem': 0,
    'mengplaz::AddressRecord::uid': 0,
    'mengplaz::AddressRecord::number': 0,
    'mengplaz::AddressRecord::postcode': 0,
    'mengplaz::AddressRecord::street': 0,
    'mengplaz::AddressRecord::streetAliases': 0,
    'mengplaz::AddressRecord::locality': 0,
    'mengplaz::AddressRecord::localityAliases': 0,
    'mengplaz::AddressRecord::commune': 0,
    'mengplaz::AddressRecord::primaryLocation': 0,
    'mengplaz::AddressRecord::secondaryLocations': 0,
    'mengplaz::AddressRecord::sourceName': 0,
    'mengplaz::AddressRecord::goldenRef': 0,
    'mengplaz::AddressRecord::quality': 0,
    'mengplaz::ReconciliationReport::date': 0,
    'mengplaz::ReconciliationReport::linked': 0,
    'mengplaz::ReconciliationReport::unlinked': 0,
    'mengplaz::SourceCountSnapshot::total': 0,
    'mengplaz::SourceCountSnapshot::active': 0,
    'mengplaz::SourceCountSnapshot::linked': 0,
    'mengplaz::ScoringWeights::cityWeight': 0,
    'mengplaz::ScoringWeights::streetWeight': 0,
    'mengplaz::ScoringWeights::postcodeWeight': 0,
    'mengplaz::ScoringWeights::numberWeight': 0,
    'mengplaz::ScoringWeights::geoWeight': 0,
    'mengplaz::SearchResult::sourceRecord': 0,
    'mengplaz::SearchResult::candidates': 0,
    'mengplaz::AddressRecordRef::ref': 0,
    'mengplaz::AddressRecordRef::record': 0,
    'mengplaz::SearchRequest::items': 0,
    'mengplaz::SearchRequest::params': 0,
    'mengplaz::Match::score': 0,
    'mengplaz::Match::elem': 0,
    'mengplaz::QualityEvent::score': 0,
    'mengplaz::QualityEvent::sourceRecord': 0,
    'mengplaz::QualityEvent::eventType': 0,
    'mengplaz::ReconciliationCandidate::candidateRecord': 0,
    'mengplaz::ReconciliationCandidate::score': 0,
    'mengplaz::ReconciliationCandidate::mismatch': 0,
    'mengplaz::ReconciliationCandidate::detailedScore': 0,
    'osm::OsmSource::reconciliationReport': 0,
    'osm::OsmSource::isReconciling': 0,
    'osm::OsmSource::lastUpdate': 0,
    'osm::OsmSource::countHistory': 0,
    'osm::OsmStreet::name': 0,
    'osm::OsmStreet::city': 0,
    'osm::OsmStreet::addresses_by_id': 0,
    'osm::OsmStreet::addresses_by_number': 0,
    'osm::OsmAddress::goldenRef': 0,
    'osm::OsmAddress::createdAt': 0,
    'osm::OsmAddress::lastSeenAt': 0,
    'osm::OsmAddress::deprecated': 0,
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
    'osm::OsmAddressFullRecord::id': 0,
    'osm::OsmAddressFullRecord::number': 0,
    'osm::OsmAddressFullRecord::postcode': 0,
    'osm::OsmAddressFullRecord::street': 0,
    'osm::OsmAddressFullRecord::locality': 0,
    'osm::OsmAddressFullRecord::primaryLocation': 0,
    'osm::OsmAddressFullRecord::sourceName': 0,
    'osm::OsmAddressFullRecord::goldenRef': 0,
    'osm::OsmAddressFullRecord::id_caclr': 0,
    'osm::OsmAddressFullRecord::kind': 0,
    'osm::OsmAddressFullRecord::deprecated': 0,
    'osm::OsmAddressFullRecord::lastSeenAt': 0,
    'osm::OsmPartialAddress::id': 0,
    'osm::OsmPartialAddress::position': 0,
    'osm::OsmPartialAddress::city': 0,
    'osm::OsmPartialAddress::postcode': 0,
    'osm::OsmPartialAddress::street': 0,
    'osm::OsmPartialAddress::number': 0,
    'osm::OsmPartialAddress::ref_caclr': 0,
    'osm::OsmPartialAddress::map': 0,
    'osm::OsmCity::name': 0,
    'osm::OsmCity::streets_by_name': 0,
    'osm::OsmParsedAddress::id': 0,
    'osm::OsmParsedAddress::position': 0,
    'osm::OsmParsedAddress::city': 0,
    'osm::OsmParsedAddress::postcode': 0,
    'osm::OsmParsedAddress::street': 0,
    'osm::OsmParsedAddress::number': 0,
    'osm::OsmParsedAddress::ref_caclr': 0,
    'osm::OsmParsedAddress::building': 0,
    'osm::OsmParsedAddress::kind': 0,
    'goldenStreetSearch::GoldenStreetIndexStats::built': 0,
    'goldenStreetSearch::GoldenStreetIndexStats::docs': 0,
    'goldenStreetSearch::GoldenStreetIndexStats::terms': 0,
    'goldenStreetSearch::GoldenStreetIndexStats::avgLen': 0,
    'goldenStreetSearch::GoldenStreetIndexStats::dirty': 0,
    'goldenTextBench::GoldenBenchCase::name': 0,
    'goldenTextBench::GoldenBenchCase::query': 0,
    'goldenTextBench::GoldenBenchCase::want': 0,
    'goldenTextSearch::GoldenTextIndexStats::built': 0,
    'goldenTextSearch::GoldenTextIndexStats::docs': 0,
    'goldenTextSearch::GoldenTextIndexStats::terms': 0,
    'goldenTextSearch::GoldenTextIndexStats::avgLen': 0,
    'goldenTextSearch::GoldenTextIndexStats::dirty': 0,
    'sourceTextSearch::SourceTextIndexStats::source': 0,
    'sourceTextSearch::SourceTextIndexStats::built': 0,
    'sourceTextSearch::SourceTextIndexStats::docs': 0,
    'sourceTextSearch::SourceTextIndexStats::terms': 0,
    'sourceTextSearch::SourceTextIndexStats::avgLen': 0,
    'sourceTextSearch::SourceTextIndexStats::dirty': 0,
    'utils::SplitAlphaNumericalString::alpha': 0,
    'utils::SplitAlphaNumericalString::numerical': 0,
    'http::FileSink::path': 0,
    'http::FileSink::append': 0,
    'http::FileBody::path': 0,
    'http::FileBody::offset': 0,
    'http::FileBody::size': 0,
    'http::HttpRequest::method': 0,
    'http::HttpRequest::url': 0,
    'http::HttpRequest::headers': 0,
    'http::HttpRequest::body': 0,
    'http::HttpRequest::body_file': 0,
    'http::HttpRequest::response_file': 0,
    'http::HttpRequest::timeout': 0,
    'http::HttpRequest::max_response_size': 0,
    'http::HttpRequest::unix_socket': 0,
    'http::HttpResponse::status_code': 0,
    'http::HttpResponse::headers': 0,
    'http::HttpResponse::content': 0,
    'http::HttpResponse::error_msg': 0,
    'bm25_engine::BM25Result::docId': 0,
    'bm25_engine::BM25Result::score': 0,
    'bm25_engine::BM25Result::matchedTerms': 0,
    'fuzzy_engine::TrigramCandidate::overlap': 0,
    'fuzzy_engine::TrigramCandidate::ord': 0,
    'fuzzy_engine::FuzzyScoreResult::score': 0,
    'fuzzy_engine::FuzzyScoreResult::matched': 0,
    'percolate_engine::PercolateIndex::config': 0,
    'percolate_engine::PercolateIndex::queries': 0,
    'percolate_engine::PercolatedQuery::id': 0,
    'percolate_engine::PercolatedQuery::queryText': 0,
    'percolate_engine::PercolatedQuery::mode': 0,
    'percolate_engine::PercolatedQuery::cachedTokens': 0,
    'percolate_engine::PercolatedQuery::cachedBooleanTerms': 0,
    'percolate_engine::PercolatedQuery::cachedExcludeTerms': 0,
    'percolate_engine::PercolatedQuery::cachedBooleanRequiresAll': 0,
    'percolate_engine::PercolateBooleanPlan::terms': 0,
    'percolate_engine::PercolateBooleanPlan::excludeTerms': 0,
    'percolate_engine::PercolateBooleanPlan::requiresAll': 0,
    'phrase_engine::PhraseCandidate::docId': 0,
    'phrase_engine::PhraseCandidate::prelimScore': 0,
    'quorum_engine::QuorumAccum::count': 0,
    'quorum_engine::QuorumAccum::terms': 0,
    'suggest_engine::DidYouMeanResult::originalQuery': 0,
    'suggest_engine::DidYouMeanResult::correctedQuery': 0,
    'suggest_engine::DidYouMeanResult::corrections': 0,
    'suggest_engine::Suggestion::term': 0,
    'suggest_engine::Suggestion::score': 0,
    'suggest_engine::Suggestion::df': 0,
    'suggest_engine::Suggestion::originalForm': 0,
    'suggest_engine::DidYouMeanBest::distance': 0,
    'suggest_engine::DidYouMeanBest::lenDiff': 0,
    'suggest_engine::DidYouMeanBest::prefix': 0,
    'suggest_engine::DidYouMeanBest::df': 0,
    'suggest_engine::DidYouMeanBest::term': 0,
    'suggest_engine::DidYouMeanBest::original': 0,
    'suggest_engine::DidYouMeanBest::found': 0,
    'document::DocumentStats::file': 0,
    'document::DocumentStats::format': 0,
    'document::DocumentStats::file_size_bytes': 0,
    'document::DocumentStats::success': 0,
    'document::DocumentStats::word_count': 0,
    'document::DocumentStats::char_count': 0,
    'document::DocumentStats::line_count': 0,
    'document::DocumentStats::sentence_count': 0,
    'document::DocumentStats::heading_count': 0,
    'document::DocumentStats::document_type': 0,
    'document::Sentence::text': 0,
    'document::Sentence::position': 0,
    'document::Document::name': 0,
    'document::Document::path': 0,
    'document::Document::format': 0,
    'document::Document::documentType': 0,
    'document::Document::wordCount': 0,
    'document::Document::charCount': 0,
    'document::Document::fileSize': 0,
    'document::Document::sections': 0,
    'document::Section::title': 0,
    'document::Section::position': 0,
    'document::Section::sentences': 0,
    'document::Section::sectionType': 0,
    'facet_types::HistogramBucket::from': 0,
    'facet_types::HistogramBucket::to': 0,
    'facet_types::HistogramBucket::count': 0,
    'facet_types::AggregationRequest::metrics': 0,
    'facet_types::AggregationRequest::histograms': 0,
    'facet_types::AdvancedFacetedResult::results': 0,
    'facet_types::AdvancedFacetedResult::termFacets': 0,
    'facet_types::AdvancedFacetedResult::numericFacets': 0,
    'facet_types::NumericRangeBucket::label': 0,
    'facet_types::NumericRangeBucket::from': 0,
    'facet_types::NumericRangeBucket::to': 0,
    'facet_types::HistogramResult::f': 0,
    'facet_types::HistogramResult::fieldName': 0,
    'facet_types::HistogramResult::buckets': 0,
    'facet_types::MetricAggregation::f': 0,
    'facet_types::MetricAggregation::fieldName': 0,
    'facet_types::MetricAggregation::metric': 0,
    'facet_types::AggregatedSearchResult::results': 0,
    'facet_types::AggregatedSearchResult::metricResults': 0,
    'facet_types::AggregatedSearchResult::histogramResults': 0,
    'facet_types::HistogramAggregation::f': 0,
    'facet_types::HistogramAggregation::fieldName': 0,
    'facet_types::HistogramAggregation::interval': 0,
    'facet_types::HistogramAggregation::minValue': 0,
    'facet_types::HistogramAggregation::maxValue': 0,
    'facet_types::MetricResult::f': 0,
    'facet_types::MetricResult::fieldName': 0,
    'facet_types::MetricResult::metric': 0,
    'facet_types::MetricResult::value': 0,
    'facet_types::FacetRequest::f': 0,
    'facet_types::FacetRequest::fieldName': 0,
    'facet_types::FacetRequest::facetType': 0,
    'facet_types::FacetRequest::ranges': 0,
    'facet_types::FacetRequest::maxTerms': 0,
    'facet_types::NumericBucketCount::label': 0,
    'facet_types::NumericBucketCount::count': 0,
    'facet_types::TermCount::value': 0,
    'facet_types::TermCount::count': 0,
    'text_index::TextIndex::config': 0,
    'text_index::TextIndex::totalEntries': 0,
    'text_index::TextIndex::totalTokens': 0,
    'text_index::TextIndex::totalTerms': 0,
    'text_index::TextIndex::avgTokenCount': 0,
    'text_index::TextIndex::built': 0,
    'text_index::TextIndex::dirtyCount': 0,
    'text_index::TextIndex::nextEntryId': 0,
    'text_index::TextIndex::resolvedFields': 0,
    'text_index::TextIndex::entries': 0,
    'text_index::TextIndex::terms': 0,
    'text_index::TextIndex::termDict': 0,
    'text_index::TextIndex::textPool': 0,
    'text_index::TextIndex::rawTextPool': 0,
    'text_index::TextIndex::externalIdIndex': 0,
    'text_index::TextIndex::contentHashes': 0,
    'text_index::TextIndex::vectorIndex': 0,
    'text_index::TextIndex::chunkVectorIndex': 0,
    'text_index::TextIndex::trigramIndex': 0,
    'text_index::TextIndex::edgeNgramTerms': 0,
    'text_index::TextIndex::phoneticIndex': 0,
    'text_index::TextIndex::trieRoot': 0,
    'text_index::TextIndex::reverseTrieRoot': 0,
    'text_index::TextIndex::cachedCombiningMarks': 0,
    'text_index::TextIndex::normalizedSynonyms': 0,
    'text_index::TextIndex::cachedStopWordMap': 0,
    'text_index::TextIndex::cachedTFCache': 0,
    'text_index::TextIndex::cachedTFCacheAvgDocLen': 0,
    'text_index_types::IndexEntry::id': 0,
    'text_index_types::IndexEntry::value': 0,
    'text_index_types::IndexEntry::text': 0,
    'text_index_types::IndexEntry::rawText': 0,
    'text_index_types::IndexEntry::externalId': 0,
    'text_index_types::IndexEntry::contentHash': 0,
    'text_index_types::IndexEntry::tokenCount': 0,
    'text_index_types::IndexEntry::chunks': 0,
    'text_index_types::IndexEntry::vector': 0,
    'text_index_types::IndexEntry::entryTerms': 0,
    'text_index_types::IndexEntry::positionData': 0,
    'text_index_types::IndexEntry::positionOffsets': 0,
    'text_index_types::IndexEntry::positionCounts': 0,
    'text_index_types::RRFOptions::k': 0,
    'text_index_types::RRFOptions::topRankBonus': 0,
    'text_index_types::RRFOptions::topBonus': 0,
    'text_index_types::RRFOptions::nearTopBonus': 0,
    'text_index_types::RRFOptions::nearTopCutoff': 0,
    'text_index_types::MoreLikeThisOptions::maxQueryTerms': 0,
    'text_index_types::PhraseOptions::slop': 0,
    'text_index_types::SnippetOptions::maxLength': 0,
    'text_index_types::SnippetOptions::numFragments': 0,
    'text_index_types::SnippetOptions::fragmentSize': 0,
    'text_index_types::TrigramPostings::terms': 0,
    'text_index_types::HighlightOptions::preTag': 0,
    'text_index_types::HighlightOptions::postTag': 0,
    'text_index_types::DiversifyOptions::enabled': 0,
    'text_index_types::DiversifyOptions::lambda': 0,
    'text_index_types::SearchCursor::score': 0,
    'text_index_types::SearchCursor::id': 0,
    'text_index_types::BM25Options::k1': 0,
    'text_index_types::BM25Options::b': 0,
    'text_index_types::BM25Options::variant': 0,
    'text_index_types::BM25Options::delta': 0,
    'text_index_types::ScoreExplanation::totalScore': 0,
    'text_index_types::ScoreExplanation::terms': 0,
    'text_index_types::ScoreExplanation::variant': 0,
    'text_index_types::ScoreExplanation::k1': 0,
    'text_index_types::ScoreExplanation::b': 0,
    'text_index_types::ScoreExplanation::docLen': 0,
    'text_index_types::ScoreExplanation::avgDocLen': 0,
    'text_index_types::TermExplanation::term': 0,
    'text_index_types::TermExplanation::tf': 0,
    'text_index_types::TermExplanation::idf': 0,
    'text_index_types::TermExplanation::tfNorm': 0,
    'text_index_types::TermExplanation::score': 0,
    'text_index_types::Snippet::text': 0,
    'text_index_types::Snippet::highlighted': 0,
    'text_index_types::Snippet::fragments': 0,
    'text_index_types::EdgeNgramOptions::enabled': 0,
    'text_index_types::EdgeNgramOptions::indexAsTerms': 0,
    'text_index_types::EdgeNgramOptions::min': 0,
    'text_index_types::EdgeNgramOptions::max': 0,
    'text_index_types::LMDirichletOptions::mu': 0,
    'text_index_types::TextIndexStats::totalEntries': 0,
    'text_index_types::TextIndexStats::totalTerms': 0,
    'text_index_types::TextIndexStats::avgTokenCount': 0,
    'text_index_types::IndexChunk::content': 0,
    'text_index_types::IndexChunk::parentId': 0,
    'text_index_types::IndexChunk::vector': 0,
    'text_index_types::IndexChunk::tokenCount': 0,
    'text_index_types::IndexChunk::position': 0,
    'text_index_types::ShortCircuitOptions::enabled': 0,
    'text_index_types::ShortCircuitOptions::minScore': 0,
    'text_index_types::ShortCircuitOptions::minGap': 0,
    'text_index_types::ChunkingOptions::strategy': 0,
    'text_index_types::ChunkingOptions::size': 0,
    'text_index_types::ChunkingOptions::overlap': 0,
    'text_index_types::FuzzyOptions::maxEdits': 0,
    'text_index_types::FuzzyOptions::mode': 0,
    'text_index_types::FuzzyOptions::maxTextLength': 0,
    'text_index_types::TermScorePair::ordinal': 0,
    'text_index_types::TermScorePair::score': 0,
    'text_index_types::FieldConfig::f': 0,
    'text_index_types::FieldConfig::fieldName': 0,
    'text_index_types::FieldConfig::weight': 0,
    'text_index_types::FieldConfig::fieldB': 0,
    'text_index_types::FusionOptions::method': 0,
    'text_index_types::FusionOptions::normalization': 0,
    'text_index_types::FusionOptions::weights': 0,
    'text_index_types::FusionOptions::rrf': 0,
    'text_index_types::TextIndexConfig::embed': 0,
    'text_index_types::TextIndexConfig::synonyms': 0,
    'text_index_types::TextIndexConfig::fields': 0,
    'text_index_types::TextIndexConfig::deduplicateContent': 0,
    'text_index_types::TextIndexConfig::dedupBodies': 0,
    'text_index_types::TextIndexConfig::fuzzyMaxTextLength': 0,
    'text_index_types::TextIndexConfig::fuzzyMode': 0,
    'text_index_types::TextIndexConfig::usePhonetic': 0,
    'text_index_types::TextIndexConfig::tokenization': 0,
    'text_index_types::TextIndexConfig::stopWords': 0,
    'text_index_types::TextIndexConfig::bm25': 0,
    'text_index_types::TextIndexConfig::fusion': 0,
    'text_index_types::TextIndexConfig::typoTolerance': 0,
    'text_index_types::TextIndexConfig::edgeNgram': 0,
    'text_index_types::TextIndexConfig::shortCircuit': 0,
    'text_index_types::TextIndexConfig::diversify': 0,
    'text_index_types::TextIndexConfig::chunking': 0,
    'text_index_types::TextIndexConfig::dfr': 0,
    'text_index_types::TextIndexConfig::lmDirichlet': 0,
    'text_index_types::TextIndexConfig::highlight': 0,
    'text_index_types::TextIndexConfig::buildTrigram': 0,
    'text_index_types::TextIndexConfig::buildTrie': 0,
    'text_index_types::TextIndexConfig::buildReverseTrie': 0,
    'text_index_types::TextIndexConfig::buildBlockMax': 0,
    'text_index_types::TextIndexConfig::storePositions': 0,
    'text_index_types::TextIndexConfig::storeRawText': 0,
    'text_index_types::TextIndexConfig::keepOriginalForm': 0,
    'text_index_types::RangeFilter::f': 0,
    'text_index_types::RangeFilter::fieldName': 0,
    'text_index_types::RangeFilter::from': 0,
    'text_index_types::RangeFilter::to': 0,
    'text_index_types::ProximityOptions::distance': 0,
    'text_index_types::TrieNode::children': 0,
    'text_index_types::TrieNode::terms': 0,
    'text_index_types::TrieNode::isTerminal': 0,
    'text_index_types::StopWordOptions::mode': 0,
    'text_index_types::StopWordOptions::language': 0,
    'text_index_types::StopWordOptions::custom': 0,
    'text_index_types::StopWordOptions::autoThreshold': 0,
    'text_index_types::NormalizedTerm::text': 0,
    'text_index_types::NormalizedTerm::totalCount': 0,
    'text_index_types::NormalizedTerm::ordinal': 0,
    'text_index_types::NormalizedTerm::originalForm': 0,
    'text_index_types::NormalizedTerm::isPrefix': 0,
    'text_index_types::NormalizedTerm::idf': 0,
    'text_index_types::NormalizedTerm::maxTermScore': 0,
    'text_index_types::NormalizedTerm::postingDocs': 0,
    'text_index_types::NormalizedTerm::postingTFs': 0,
    'text_index_types::NormalizedTerm::postingFieldnormIds': 0,
    'text_index_types::NormalizedTerm::postingBlockMaxScores': 0,
    'text_index_types::TermBoost::term': 0,
    'text_index_types::TermBoost::boost': 0,
    'text_index_types::TextEntry::key': 0,
    'text_index_types::TextEntry::value': 0,
    'text_index_types::TextEntry::externalId': 0,
    'text_index_types::TextEntry::vector': 0,
    'text_index_types::TokenizationOptions::separators': 0,
    'text_index_types::TokenizationOptions::minTermLength': 0,
    'text_index_types::TokenizationOptions::maxTermLength': 0,
    'text_index_types::TokenizationOptions::filterNumericTerms': 0,
    'text_index_types::TokenizationOptions::caseFold': 0,
    'text_index_types::TokenizationOptions::stripPunctuation': 0,
    'text_index_types::TokenizationOptions::stemming': 0,
    'text_index_types::TokenizationOptions::charMap': 0,
    'text_index_types::TokenizationOptions::useDefaultCharMap': 0,
    'text_index_types::TokenizationOptions::normOptions': 0,
    'text_index_types::PhoneticPostings::terms': 0,
    'text_index_types::TermFilter::f': 0,
    'text_index_types::TermFilter::fieldName': 0,
    'text_index_types::TermFilter::values': 0,
    'text_index_types::TermFilter::exclude': 0,
    'text_index_types::NormOptions::stripAccents': 0,
    'text_index_types::NormOptions::stripControlChars': 0,
    'text_index_types::NormOptions::stripHtmlTags': 0,
    'text_index_types::NormOptions::decodeHtmlEntities': 0,
    'text_index_types::NormOptions::stripUrls': 0,
    'text_index_types::NormOptions::stripEmails': 0,
    'text_index_types::NormOptions::normalizeQuotes': 0,
    'text_index_types::NormOptions::normalizeLineBreaks': 0,
    'text_index_types::NormOptions::normalizeRepeatingChars': 0,
    'text_index_types::NormOptions::maxRepeat': 0,
    'text_index_types::NormOptions::rejoinHyphenatedWords': 0,
    'text_index_types::TextResult::id': 0,
    'text_index_types::TextResult::externalId': 0,
    'text_index_types::TextResult::value': 0,
    'text_index_types::TextResult::score': 0,
    'text_index_types::TextResult::text': 0,
    'text_index_types::TextResult::matchedTerms': 0,
    'text_index_types::TextResult::chunkKey': 0,
    'text_index_types::CurationRule::documentKey': 0,
    'text_index_types::CurationRule::position': 0,
    'text_index_types::CurationRule::boost': 0,
    'text_index_types::CurationRule::suppress': 0,
    'text_index_types::DFROptions::basicModel': 0,
    'text_index_types::DFROptions::afterEffect': 0,
    'text_index_types::DFROptions::normalization': 0,
    'text_index_types::SortClause::f': 0,
    'text_index_types::SortClause::fieldName': 0,
    'text_index_types::SortClause::order': 0,
    'text_index_types::TypoOptions::enabled': 0,
    'text_index_types::TypoOptions::minWordLength': 0,
    'text_index_types::TypoOptions::maxEdits1': 0,
    'text_index_types::TypoOptions::maxEdits2': 0,
    'text_index_types::SearchOptions::modes': 0,
    'text_index_types::SearchOptions::weights': 0,
    'text_index_types::SearchOptions::fusionMethod': 0,
    'text_index_types::SearchOptions::normalization': 0,
    'text_index_types::SearchOptions::rrf_k': 0,
    'text_index_types::SearchOptions::fuzzy': 0,
    'text_index_types::SearchOptions::phrase': 0,
    'text_index_types::SearchOptions::proximity': 0,
    'text_index_types::SearchOptions::typoTolerance': 0,
    'text_index_types::SearchOptions::minScore': 0,
    'text_index_types::SearchOptions::diversify': 0,
    'text_index_types::SearchOptions::diversityLambda': 0,
    'text_index_types::SearchOptions::offset': 0,
    'text_index_types::SearchOptions::proximityFilter': 0,
    'text_index_types::SearchOptions::filter': 0,
    'text_index_types::SearchOptions::termBoosts': 0,
    'text_index_types::SearchOptions::quorumMinMatch': 0,
    'text_index_types::SearchOptions::termFilters': 0,
    'text_index_types::SearchOptions::rangeFilters': 0,
    'text_index_types::SearchOptions::sort': 0,
    'text_index_types::SearchOptions::searchAfter': 0,
    'boolean_parser::ParseResult::query': 0,
    'boolean_parser::ParseResult::nextPos': 0,
    'boolean_parser::BooleanQuery::operator': 0,
    'boolean_parser::BooleanQuery::term': 0,
    'boolean_parser::BooleanQuery::left': 0,
    'boolean_parser::BooleanQuery::right': 0,
    'boolean_parser::BooleanQuery::weakAndThreshold': 0,
    'boolean_parser::BooleanQuery::children': 0,
    'span_parser::SpanQuery::operator': 0,
    'span_parser::SpanQuery::term': 0,
    'span_parser::SpanQuery::left': 0,
    'span_parser::SpanQuery::right': 0,
    'span_parser::SpanQuery::distance': 0,
    'text_chunker::ChunkInfo::content': 0,
    'text_chunker::ChunkInfo::position': 0,
    'text_chunker::ChunkInfo::startChar': 0,
    'text_chunker::ChunkInfo::endChar': 0,
    'text_parser::ParsedSection::sectionType': 0,
    'text_parser::ParsedSection::content': 0,
    'text_parser::ParsedSection::title': 0,
    'text_parser::ParsedSection::startLine': 0,
    'text_parser::ParsedSection::endLine': 0,
    'text_tokenizer::TokenInfo::text': 0,
    'text_tokenizer::TokenInfo::original': 0,
    'text_tokenizer::TokenInfo::position': 0,
    'text_tokenizer::TermFrequency::original': 0,
    'text_tokenizer::TermFrequency::count': 0,
    'text_tokenizer::TermFrequency::positions': 0,
    'dfr_engine::DFRAccum::score': 0,
    'dfr_engine::DFRAccum::terms': 0,
    'function_score::DecayFunction::f': 0,
    'function_score::DecayFunction::fieldName': 0,
    'function_score::DecayFunction::origin': 0,
    'function_score::DecayFunction::scale': 0,
    'function_score::DecayFunction::offset': 0,
    'function_score::DecayFunction::decayType': 0,
    'function_score::DecayFunction::decayValue': 0,
    'function_score::FieldValueFactor::f': 0,
    'function_score::FieldValueFactor::fieldName': 0,
    'function_score::FieldValueFactor::factor': 0,
    'function_score::FieldValueFactor::modifier': 0,
    'function_score::FieldValueFactor::missing': 0,
    'function_score::FunctionScoreConfig::decayFunctions': 0,
    'function_score::FunctionScoreConfig::fieldValueFactors': 0,
    'function_score::FunctionScoreConfig::scoreMode': 0,
    'function_score::FunctionScoreConfig::boostMode': 0,
    'fusion::FusionAccum::score': 0,
    'fusion::FusionAccum::terms': 0,
    'fusion::FusionAccum::termLookup': 0,
    'fusion::FusionInput::results': 0,
    'fusion::FusionInput::weight': 0,
    'lm_dirichlet_engine::LMDAccum::score': 0,
    'lm_dirichlet_engine::LMDAccum::terms': 0,
    'ranking_rules::RankingCandidate::key': 0,
    'ranking_rules::RankingCandidate::value': 0,
    'ranking_rules::RankingCandidate::score': 0,
    'ranking_rules::RankingCandidate::matchedTerms': 0,
    'ranking_rules::RankingCandidate::matchedWordCount': 0,
    'ranking_rules::RankingCandidate::typoCount': 0,
    'ranking_rules::RankingCandidate::minProximity': 0,
    'ranking_rules::RankingCandidate::firstMatchPosition': 0,
    'ranking_rules::RankingCandidate::isExactMatch': 0,
    'ranking_rules::RankingCandidate::sortValue': 0,
    'regex_utils::RegexMatch::matched': 0,
    'regex_utils::RegexMatch::startPos': 0,
    'regex_utils::RegexMatch::endPos': 0,
    'regex_utils::RegexMatch::text': 0,
    'snippet::WindowResult::startWord': 0,
    'snippet::WindowResult::endWord': 0,
    'snippet::SnippetFragment::text': 0,
    'snippet::SnippetFragment::score': 0,
    'snippet::SnippetFragment::startPos': 0,
    'snippet::SnippetFragment::endPos': 0,
    'address_index::AddressDoc::payload': 0,
    'address_index::AddressDoc::street': 0,
    'address_index::AddressDoc::cityText': 0,
    'address_index::AddressDoc::postalCodeText': 0,
    'address_index::AddressDoc::houseNumberText': 0,
    'address_index::AddressDoc::country': 0,
    'address_index::AddressSearchHit::result': 0,
    'address_index::AddressSearchHit::houseNumberMatch': 0,
    'address_index::AddressSearchHit::level': 0,
    'address_index::AddressIndex::index': 0,
    'address_index::AddressIndex::lang': 0,
    'address_index::AddressComponents::roads': 0,
    'address_index::AddressComponents::houseNumbers': 0,
    'address_index::AddressComponents::city': 0,
    'address_index::AddressComponents::postcode': 0,
    'postal::PostalExpandOptions::languages': 0,
    'postal::PostalComponent::label': 0,
    'postal::PostalComponent::value': 0,
    'postal::PostalOptions::language': 0,
    'postal::PostalOptions::country': 0,
    'postal::PostalParsedAddress::house': 0,
    'postal::PostalParsedAddress::house_number': 0,
    'postal::PostalParsedAddress::road': 0,
    'postal::PostalParsedAddress::suburb': 0,
    'postal::PostalParsedAddress::city_district': 0,
    'postal::PostalParsedAddress::city': 0,
    'postal::PostalParsedAddress::state_district': 0,
    'postal::PostalParsedAddress::state': 0,
    'postal::PostalParsedAddress::postcode': 0,
    'postal::PostalParsedAddress::country': 0,
    'postal::PostalParsedAddress::unit': 0,
    'postal::PostalParsedAddress::level': 0,
    'postal::PostalParsedAddress::staircase': 0,
    'postal::PostalParsedAddress::entrance': 0,
    'postal::PostalParsedAddress::po_box': 0,
    'postal::PostalParsedAddress::near': 0,
    'postal::PostalParsedAddress::world_region': 0,
    'postal::PostalParsedAddress::island': 0,
    'postal::PostalParsedAddress::category': 0,
  }

  interface $FunctionsMap {
    'core::node::resolve_all': 0,
    'core::nodeTime::info': 0,
    'core::nodeTime::sample': 0,
    'core::nodeGeo<core::node<golden::GoldenAddress>>::search': 0,
    'core::nodeGeo<core::node<osm::OsmPartialAddress>>::search': 0,
    'core::nodeList::info': 0,
    'core::nodeList::sample': 0,
    'core::nodeGeo<core::node<osm::OsmAddress>>::search': 0,
    'core::nodeIndex::search_closest': 0,
    'core::nodeIndex::info': 0,
    'core::nodeIndex::sample': 0,
    'core::nodeGeo::search': 0,
    'core::nodeGeo::info': 0,
    'core::nodeGeo::sample': 0,
    'core::nodeGeo<core::node<bda::BdaAddress>>::search': 0,
    'core::Table::applyMappings': 0,
    'runtime::mcp_initialize': 0,
    'runtime::mcp_tools_list': 0,
    'runtime::mcp_tools_call': 0,
    'runtime::mcp_prompts_list': 0,
    'runtime::mcp_resources_list': 0,
    'runtime::mcp_tasks_get': 0,
    'runtime::mcp_tasks_result': 0,
    'runtime::mcp_tasks_list': 0,
    'runtime::mcp_tasks_cancel': 0,
    'runtime::Permission::all': 0,
    'runtime::Debug::resume': 0,
    'runtime::Debug::get': 0,
    'runtime::Debug::all': 0,
    'runtime::Scheduler::deactivate': 0,
    'runtime::Scheduler::activate': 0,
    'runtime::Scheduler::find': 0,
    'runtime::Scheduler::list': 0,
    'runtime::Scheduler::add': 0,
    'runtime::Task::tasks': 0,
    'runtime::Task::live': 0,
    'runtime::Task::is_running': 0,
    'runtime::Task::cancel': 0,
    'runtime::Task::history': 0,
    'runtime::Task::running': 0,
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
    'runtime::OpenApi::v3': 0,
    'runtime::Runtime::backup_full': 0,
    'runtime::Runtime::root': 0,
    'runtime::Runtime::abi': 0,
    'runtime::Runtime::usage': 0,
    'runtime::Runtime::info': 0,
    'runtime::Role::all': 0,
    'runtime::System::get_all_envs': 0,
    'io::Csv::sample': 0,
    'io::Csv::analyze': 0,
    'io::Csv::generate': 0,
    'privateApi::promoteRecord': 0,
    'privateApi::linkRecords': 0,
    'privateApi::unlinkRecord': 0,
    'privateApi::linkAllFullMatched': 0,
    'privateApi::batchLinkByScore': 0,
    'privateApi::mergePositionsToGolden': 0,
    'privateApi::lockSource': 0,
    'privateApi::reconcile': 0,
    'privateApi::reconcileAddresses': 0,
    'privateApi::getReconciliationReport': 0,
    'privateApi::getRecordTab': 0,
    'privateApi::getSources': 0,
    'privateApi::getComparisonViewData': 0,
    'privateApi::getLinkedComparisonViewData': 0,
    'privateApi::computeGlobalQuality': 0,
    'privateApi::unlockSource': 0,
    'privateApi::updateCACLR': 0,
    'privateApi::updateBDA': 0,
    'privateApi::updateOSM': 0,
    'privateApi::buildGoldenStreetIndex': 0,
    'privateApi::goldenStreetIndexStats': 0,
    'privateApi::buildGoldenTextIndex': 0,
    'privateApi::goldenTextIndexStats': 0,
    'privateApi::buildSourceTextIndexes': 0,
    'privateApi::buildSourceTextIndex': 0,
    'privateApi::sourceTextIndexStats': 0,
    'privateApi::recomputeGoldenGeoScore': 0,
    'privateApi::backupGraph': 0,
    'privateApi::restoreGraph': 0,
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
    'api::getGoldenRecordScores': 0,
    'api::appInfo': 0,
    'api::searchAddress': 0,
    'api::getGoldenWithLinkedRecords': 0,
    'api::getSourceStats': 0,
    'api::getDeprecatedCounts': 0,
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
  export import McpContentType = gc.runtime.McpContentType;
  export import McpToolExecution = gc.runtime.McpToolExecution;
  export import Periodicity = gc.runtime.Periodicity;
  export import McpClientRoots = gc.runtime.McpClientRoots;
  export import IdentityGrantType = gc.runtime.IdentityGrantType;
  export import McpRequestParams = gc.runtime.McpRequestParams;
  export import McpTaskStatus = gc.runtime.McpTaskStatus;
  export import McpServerToolsCapabilities = gc.runtime.McpServerToolsCapabilities;
  export import McpClientTasksCapabilities = gc.runtime.McpClientTasksCapabilities;
  export import McpToolsListParams = gc.runtime.McpToolsListParams;
  export import McpPromptsListResult = gc.runtime.McpPromptsListResult;
  export import McpResourceContent = gc.runtime.McpResourceContent;
  export import McpTasksCreateResult = gc.runtime.McpTasksCreateResult;
  export import McpToolsCallResult = gc.runtime.McpToolsCallResult;
  export import McpAudioContent = gc.runtime.McpAudioContent;
  export import WeeklyPeriodicity = gc.runtime.WeeklyPeriodicity;
  export import McpTool = gc.runtime.McpTool;
  export import Job = gc.runtime.Job;
  export import McpImageContent = gc.runtime.McpImageContent;
  export import DailyPeriodicity = gc.runtime.DailyPeriodicity;
  export import Scheduler = gc.runtime.Scheduler;
  export import McpTextContent = gc.runtime.McpTextContent;
  export import Log = gc.runtime.Log;
  export import McpRole = gc.runtime.McpRole;
  export import McpContentBlock = gc.runtime.McpContentBlock;
  export import MergeStrategy = gc.runtime.MergeStrategy;
  export import McpInitializeResult = gc.runtime.McpInitializeResult;
  export import RuntimeInfo = gc.runtime.RuntimeInfo;
  export import ChildProcess = gc.runtime.ChildProcess;
  export import McpInitializeParams = gc.runtime.McpInitializeParams;
  export import PeriodicOptions = gc.runtime.PeriodicOptions;
  export import Task = gc.runtime.Task;
  export import Identity = gc.runtime.Identity;
  export import McpClientCapabilities = gc.runtime.McpClientCapabilities;
  export import McpServerResourcesCapabilities = gc.runtime.McpServerResourcesCapabilities;
  export import McpServerPromptsCapabilities = gc.runtime.McpServerPromptsCapabilities;
  export import McpPriority = gc.runtime.McpPriority;
  export import McpTasksGetParams = gc.runtime.McpTasksGetParams;
  export import McpPromptArgument = gc.runtime.McpPromptArgument;
  export import LicenseType = gc.runtime.LicenseType;
  export import McpTasksListParams = gc.runtime.McpTasksListParams;
  export import LogLevel = gc.runtime.LogLevel;
  export import McpTask = gc.runtime.McpTask;
  export import IdentityGrant = gc.runtime.IdentityGrant;
  export import License = gc.runtime.License;
  export import OpenApi = gc.runtime.OpenApi;
  export import FixedPeriodicity = gc.runtime.FixedPeriodicity;
  export import McpTaskSupport = gc.runtime.McpTaskSupport;
  export import McpTasksListResult = gc.runtime.McpTasksListResult;
  export import DateTuple = gc.runtime.DateTuple;
  export import McpServerTasksCapabilities = gc.runtime.McpServerTasksCapabilities;
  export import McpTaskCreateParams = gc.runtime.McpTaskCreateParams;
  export import MonthlyPeriodicity = gc.runtime.MonthlyPeriodicity;
  export import PeriodicTask = gc.runtime.PeriodicTask;
  export import LogDataUsage = gc.runtime.LogDataUsage;
  export import Month = gc.runtime.Month;
  export import McpResult = gc.runtime.McpResult;
  export import McpAnnotations = gc.runtime.McpAnnotations;
  export import McpPrompt = gc.runtime.McpPrompt;
  export import Runtime = gc.runtime.Runtime;
  export import McpTasksResultParams = gc.runtime.McpTasksResultParams;
  export import ChildProcessResult = gc.runtime.ChildProcessResult;
  export import McpToolsListResult = gc.runtime.McpToolsListResult;
  export import System = gc.runtime.System;
  export import DayOfWeek = gc.runtime.DayOfWeek;
  export import YearlyPeriodicity = gc.runtime.YearlyPeriodicity;
  export import McpServerCapabilities = gc.runtime.McpServerCapabilities;
  export import McpToolsCallParams = gc.runtime.McpToolsCallParams;
  export import McpResourcesListResult = gc.runtime.McpResourcesListResult;
  export import McpResourcesListParams = gc.runtime.McpResourcesListParams;
  export import McpPromptsListParams = gc.runtime.McpPromptsListParams;
  export import RuntimeUsage = gc.runtime.RuntimeUsage;
  export import McpImplementation = gc.runtime.McpImplementation;
  export import TaskStatus = gc.runtime.TaskStatus;
  export import McpBaseMetadata = gc.runtime.McpBaseMetadata;
  export import McpResource = gc.runtime.McpResource;
  export import McpTasksCancelParams = gc.runtime.McpTasksCancelParams;
  export import SmtpMode = gc.io.SmtpMode;
  export import S3Object = gc.io.S3Object;
  export import Reader = gc.io.Reader;
  export import GcbReader = gc.io.GcbReader;
  export import File = gc.io.File;
  export import CsvNested = gc.io.CsvNested;
  export import CsvAnalysisConfig = gc.io.CsvAnalysisConfig;
  export import Writer = gc.io.Writer;
  export import CsvReader = gc.io.CsvReader;
  export import CsvFormat = gc.io.CsvFormat;
  export import Smtp = gc.io.Smtp;
  export import CsvSharding = gc.io.CsvSharding;
  export import TextWriter = gc.io.TextWriter;
  export import CsvStatistics = gc.io.CsvStatistics;
  export import S3Bucket = gc.io.S3Bucket;
  export import TextReader = gc.io.TextReader;
  export import S3 = gc.io.S3;
  export import JsonWriter = gc.io.JsonWriter;
  export import XmlReader = gc.io.XmlReader;
  export import Json = gc.io.Json;
  export import Email = gc.io.Email;
  export import CsvWriter = gc.io.CsvWriter;
  export import FileWalker = gc.io.FileWalker;
  export import S3BasicCredentials = gc.io.S3BasicCredentials;
  export import Csv = gc.io.Csv;
  export import SmtpAuth = gc.io.SmtpAuth;
  export import Url = gc.io.Url;
  export import GcbWriter = gc.io.GcbWriter;
  export import CsvColumnStatistics = gc.io.CsvColumnStatistics;
  export import BinReader = gc.io.BinReader;
  export import JsonReader = gc.io.JsonReader;
  export import Uuid = gc.util.Uuid;
  export import LogQuantizer = gc.util.LogQuantizer;
  export import Queue = gc.util.Queue;
  export import LinearQuantizer = gc.util.LinearQuantizer;
  export import CustomQuantizer = gc.util.CustomQuantizer;
  export import TimeWindow = gc.util.TimeWindow;
  export import Random = gc.util.Random;
  export import ProgressTracker = gc.util.ProgressTracker;
  export import GaussianProfileSlot = gc.util.GaussianProfileSlot;
  export import SlidingWindow = gc.util.SlidingWindow;
  export import Stack = gc.util.Stack;
  export import Histogram = gc.util.Histogram;
  export import Gaussian = gc.util.Gaussian;
  export import HistogramBin = gc.util.HistogramBin;
  export import HistogramStats = gc.util.HistogramStats;
  export import Assert = gc.util.Assert;
  export import GaussianProfile = gc.util.GaussianProfile;
  export import MultiQuantizer = gc.util.MultiQuantizer;
  export import Crypto = gc.util.Crypto;
  export import QuantizerSlotBound = gc.util.QuantizerSlotBound;
  export import Quantizer = gc.util.Quantizer;
  export import ComparisonViewData = gc.privateApi.ComparisonViewData;
  export import SourceCountPoint = gc.privateApi.SourceCountPoint;
  export import SourceStats = gc.privateApi.SourceStats;
  export import GoldenRecordScore = gc.privateApi.GoldenRecordScore;
  export import ReconciliationReportMatchView = gc.privateApi.ReconciliationReportMatchView;
  export import RecordTabResult = gc.privateApi.RecordTabResult;
  export import SourceStatsRow = gc.privateApi.SourceStatsRow;
  export import GoldenRecordPage = gc.privateApi.GoldenRecordPage;
  export import SourceCountSeries = gc.privateApi.SourceCountSeries;
  export import SourceRef = gc.privateApi.SourceRef;
  export import GlobalQualityHistory = gc.privateApi.GlobalQualityHistory;
  export import MatchedCandidateDetail = gc.privateApi.MatchedCandidateDetail;
  export import GlobalQualityEntry = gc.privateApi.GlobalQualityEntry;
  export import LinkParameters = gc.privateApi.LinkParameters;
  export import ReconciliationReportView = gc.privateApi.ReconciliationReportView;
  export import DeprecatedCounts = gc.api.DeprecatedCounts;
  export import GeoJSONFeature = gc.api.GeoJSONFeature;
  export import GoldenRecordDetails = gc.api.GoldenRecordDetails;
  export import AddressFeatures = gc.api.AddressFeatures;
  export import GeoJSONGeometry = gc.api.GeoJSONGeometry;
  export import GoldenRecordsPage = gc.api.GoldenRecordsPage;
  export import GoldenWithLinkedRecords = gc.api.GoldenWithLinkedRecords;
  export import DeprecatedCountRow = gc.api.DeprecatedCountRow;
  export import LinkedRecordDetails = gc.api.LinkedRecordDetails;
  export import GeoJSON = gc.api.GeoJSON;
  export import DataAttribution = gc.api.DataAttribution;
  export import GoldenIndex = gc.api.GoldenIndex;
  export import BkCaclrCityDTO = gc.backupExporter.BkCaclrCityDTO;
  export import BkBdaAddressDTO = gc.backupExporter.BkBdaAddressDTO;
  export import BkBdaStreetDTO = gc.backupExporter.BkBdaStreetDTO;
  export import BkBdaCityDTO = gc.backupExporter.BkBdaCityDTO;
  export import BkCaclrConstituencyDTO = gc.backupExporter.BkCaclrConstituencyDTO;
  export import BkOsmPartialAddressDTO = gc.backupExporter.BkOsmPartialAddressDTO;
  export import BkCaclrStreetDTO = gc.backupExporter.BkCaclrStreetDTO;
  export import BkGoldenPoiDTO = gc.backupExporter.BkGoldenPoiDTO;
  export import BkOsmStreetDTO = gc.backupExporter.BkOsmStreetDTO;
  export import BkCaclrBuildingDTO = gc.backupExporter.BkCaclrBuildingDTO;
  export import BkGoldenCantonDTO = gc.backupExporter.BkGoldenCantonDTO;
  export import BkGoldenMunicipalityDTO = gc.backupExporter.BkGoldenMunicipalityDTO;
  export import BackupExporter = gc.backupExporter.BackupExporter;
  export import BkGoldenCityDTO = gc.backupExporter.BkGoldenCityDTO;
  export import BkBdaMunicipalityDTO = gc.backupExporter.BkBdaMunicipalityDTO;
  export import BkManifestEntryDTO = gc.backupExporter.BkManifestEntryDTO;
  export import BkGoldenLinkedRecordDTO = gc.backupExporter.BkGoldenLinkedRecordDTO;
  export import BkGoldenStreetDTO = gc.backupExporter.BkGoldenStreetDTO;
  export import BkGoldenConstituencyDTO = gc.backupExporter.BkGoldenConstituencyDTO;
  export import BkCaclrCantonDTO = gc.backupExporter.BkCaclrCantonDTO;
  export import BkOsmAddressDTO = gc.backupExporter.BkOsmAddressDTO;
  export import BkSourceDTO = gc.backupExporter.BkSourceDTO;
  export import BkOsmCityDTO = gc.backupExporter.BkOsmCityDTO;
  export import BkCaclrMunicipalityDTO = gc.backupExporter.BkCaclrMunicipalityDTO;
  export import BkGoldenQualityDTO = gc.backupExporter.BkGoldenQualityDTO;
  export import BkGoldenQualityHistoryDTO = gc.backupExporter.BkGoldenQualityHistoryDTO;
  export import BkSourceCountHistoryDTO = gc.backupExporter.BkSourceCountHistoryDTO;
  export import BackupImporter = gc.backupImporter.BackupImporter;
  export import BdaAddressLine = gc.bdaLoader.BdaAddressLine;
  export import BdaLoader = gc.bdaLoader.BdaLoader;
  export import OsmLoader = gc.osmLoader.OsmLoader;
  export import OsmOverpassResponse = gc.osmLoader.OsmOverpassResponse;
  export import CaclrResponseCities = gc.caclrLoader.CaclrResponseCities;
  export import CaclrLoader = gc.caclrLoader.CaclrLoader;
  export import CaclrResponseBuildingItem = gc.caclrLoader.CaclrResponseBuildingItem;
  export import CaclrResponseCantonItem = gc.caclrLoader.CaclrResponseCantonItem;
  export import CaclrResponseStreets = gc.caclrLoader.CaclrResponseStreets;
  export import CaclrBuildingsResult = gc.caclrLoader.CaclrBuildingsResult;
  export import CaclrResponseMunicipalityItem = gc.caclrLoader.CaclrResponseMunicipalityItem;
  export import CaclrResponseCantons = gc.caclrLoader.CaclrResponseCantons;
  export import CaclrResponseStreetItem = gc.caclrLoader.CaclrResponseStreetItem;
  export import CaclrResponseMunicipalities = gc.caclrLoader.CaclrResponseMunicipalities;
  export import CaclrAlias = gc.caclrLoader.CaclrAlias;
  export import CaclrResponseConstituency = gc.caclrLoader.CaclrResponseConstituency;
  export import CaclrResponseBuildings = gc.caclrLoader.CaclrResponseBuildings;
  export import CaclrResponseCityItem = gc.caclrLoader.CaclrResponseCityItem;
  export import BdaCity = gc.bda.BdaCity;
  export import BdaSource = gc.bda.BdaSource;
  export import BdaMunicipality = gc.bda.BdaMunicipality;
  export import BdaAddressFullRecord = gc.bda.BdaAddressFullRecord;
  export import BdaAddress = gc.bda.BdaAddress;
  export import BdaStreet = gc.bda.BdaStreet;
  export import CaclrAddressFullRecord = gc.caclr.CaclrAddressFullRecord;
  export import CaclrEurostatsIds = gc.caclr.CaclrEurostatsIds;
  export import CaclrSource = gc.caclr.CaclrSource;
  export import CaclrToken = gc.caclr.CaclrToken;
  export import CaclrMunicipality = gc.caclr.CaclrMunicipality;
  export import CaclrCity = gc.caclr.CaclrCity;
  export import CaclrDataStatus = gc.caclr.CaclrDataStatus;
  export import CaclrTokenResponse = gc.caclr.CaclrTokenResponse;
  export import CaclrAddress = gc.caclr.CaclrAddress;
  export import CaclrCanton = gc.caclr.CaclrCanton;
  export import CaclrAdminStatus = gc.caclr.CaclrAdminStatus;
  export import CaclrConstituency = gc.caclr.CaclrConstituency;
  export import CaclrStreet = gc.caclr.CaclrStreet;
  export import MengplazMismatch = gc.errors.MengplazMismatch;
  export import AddrErr = gc.errors.AddrErr;
  export import GoldenMunicipality = gc.golden.GoldenMunicipality;
  export import GoldenCity = gc.golden.GoldenCity;
  export import GoldenCanton = gc.golden.GoldenCanton;
  export import GoldenSource = gc.golden.GoldenSource;
  export import GoldenConstituency = gc.golden.GoldenConstituency;
  export import GoldenStreet = gc.golden.GoldenStreet;
  export import GoldenAddress = gc.golden.GoldenAddress;
  export import DataSource = gc.mengplaz.DataSource;
  export import StreetRecord = gc.mengplaz.StreetRecord;
  export import AddressFullRecordRef = gc.mengplaz.AddressFullRecordRef;
  export import ReconciliationCandidateScore = gc.mengplaz.ReconciliationCandidateScore;
  export import LinkedRecordEntry = gc.mengplaz.LinkedRecordEntry;
  export import SearchItem = gc.mengplaz.SearchItem;
  export import ExternalAddressRecord = gc.mengplaz.ExternalAddressRecord;
  export import StreetRecordProvider = gc.mengplaz.StreetRecordProvider;
  export import AddressRecordProvider = gc.mengplaz.AddressRecordProvider;
  export import StreetRecordRef = gc.mengplaz.StreetRecordRef;
  export import GeoParameters = gc.mengplaz.GeoParameters;
  export import SearchParameters = gc.mengplaz.SearchParameters;
  export import Alias = gc.mengplaz.Alias;
  export import CandidateMatch = gc.mengplaz.CandidateMatch;
  export import QualityEventType = gc.mengplaz.QualityEventType;
  export import AddressRecord = gc.mengplaz.AddressRecord;
  export import ReconciliationReport = gc.mengplaz.ReconciliationReport;
  export import SourceCountSnapshot = gc.mengplaz.SourceCountSnapshot;
  export import ScoringWeights = gc.mengplaz.ScoringWeights;
  export import AddressRecordRef = gc.mengplaz.AddressRecordRef;
  export import SearchRequest = gc.mengplaz.SearchRequest;
  export import Match = gc.mengplaz.Match;
  export import QualityEvent = gc.mengplaz.QualityEvent;
  export import ReconciliationCandidate = gc.mengplaz.ReconciliationCandidate;
  export import OsmSource = gc.osm.OsmSource;
  export import OsmStreet = gc.osm.OsmStreet;
  export import OsmAddress = gc.osm.OsmAddress;
  export import OsmAddressFullRecord = gc.osm.OsmAddressFullRecord;
  export import OsmPartialAddress = gc.osm.OsmPartialAddress;
  export import OsmCity = gc.osm.OsmCity;
  export import OsmParsedAddress = gc.osm.OsmParsedAddress;
  export import GoldenStreetSearch = gc.goldenStreetSearch.GoldenStreetSearch;
  export import GoldenStreetIndexStats = gc.goldenStreetSearch.GoldenStreetIndexStats;
  export import GoldenBenchCase = gc.goldenTextBench.GoldenBenchCase;
  export import StatsService = gc.statsService.StatsService;
  export import GoldenTextSearch = gc.goldenTextSearch.GoldenTextSearch;
  export import GoldenTextIndexStats = gc.goldenTextSearch.GoldenTextIndexStats;
  export import SourceTextIndexStats = gc.sourceTextSearch.SourceTextIndexStats;
  export import SourceTextSearch = gc.sourceTextSearch.SourceTextSearch;
  export import GoldenServices = gc.goldenServices.GoldenServices;
  export import UpdateService = gc.updateService.UpdateService;
  export import SplitAlphaNumericalString = gc.utils.SplitAlphaNumericalString;
  export import HttpReader = gc.http.HttpReader;
  export import HttpRequest = gc.http.HttpRequest;
  export import HttpMethod = gc.http.HttpMethod;
  export import HttpResponse = gc.http.HttpResponse;
  export import Http = gc.http.Http;
  export import BM25Result = gc.bm25_engine.BM25Result;
  export import BM25Engine = gc.bm25_engine.BM25Engine;
  export import BooleanAccel = gc.boolean_engine.BooleanAccel;
  export import BooleanEngine = gc.boolean_engine.BooleanEngine;
  export import CurationHelper = gc.curation_engine.CurationHelper;
  export import FuzzyEngine = gc.fuzzy_engine.FuzzyEngine;
  export import TrigramCandidate = gc.fuzzy_engine.TrigramCandidate;
  export import FuzzyScoreResult = gc.fuzzy_engine.FuzzyScoreResult;
  export import PercolateIndex = gc.percolate_engine.PercolateIndex;
  export import PercolateEngine = gc.percolate_engine.PercolateEngine;
  export import PercolatedQuery = gc.percolate_engine.PercolatedQuery;
  export import PhoneticEngine = gc.phonetic_engine.PhoneticEngine;
  export import PhoneticCodec = gc.phonetic_engine.PhoneticCodec;
  export import PhraseCandidate = gc.phrase_engine.PhraseCandidate;
  export import PhraseEngine = gc.phrase_engine.PhraseEngine;
  export import PhraseAccel = gc.phrase_engine.PhraseAccel;
  export import PrefixEngine = gc.prefix_engine.PrefixEngine;
  export import ProximityEngine = gc.proximity_engine.ProximityEngine;
  export import QuorumEngine = gc.quorum_engine.QuorumEngine;
  export import QuorumAccum = gc.quorum_engine.QuorumAccum;
  export import SpanEngine = gc.span_engine.SpanEngine;
  export import SpanAccel = gc.span_engine.SpanAccel;
  export import SuggestEngine = gc.suggest_engine.SuggestEngine;
  export import DidYouMeanResult = gc.suggest_engine.DidYouMeanResult;
  export import Suggestion = gc.suggest_engine.Suggestion;
  export import DidYouMeanBest = gc.suggest_engine.DidYouMeanBest;
  export import WildcardEngine = gc.wildcard_engine.WildcardEngine;
  export import DocumentStats = gc.document.DocumentStats;
  export import Sentence = gc.document.Sentence;
  export import Document = gc.document.Document;
  export import SectionType = gc.document.SectionType;
  export import Section = gc.document.Section;
  export import MetricType = gc.facet_types.MetricType;
  export import HistogramBucket = gc.facet_types.HistogramBucket;
  export import AggregationRequest = gc.facet_types.AggregationRequest;
  export import AdvancedFacetedResult = gc.facet_types.AdvancedFacetedResult;
  export import NumericRangeBucket = gc.facet_types.NumericRangeBucket;
  export import HistogramResult = gc.facet_types.HistogramResult;
  export import FacetType = gc.facet_types.FacetType;
  export import MetricAggregation = gc.facet_types.MetricAggregation;
  export import AggregatedSearchResult = gc.facet_types.AggregatedSearchResult;
  export import HistogramAggregation = gc.facet_types.HistogramAggregation;
  export import MetricResult = gc.facet_types.MetricResult;
  export import FacetRequest = gc.facet_types.FacetRequest;
  export import AggregationEngine = gc.facet_types.AggregationEngine;
  export import NumericBucketCount = gc.facet_types.NumericBucketCount;
  export import TermCount = gc.facet_types.TermCount;
  export import TextIndex = gc.text_index.TextIndex;
  export import IndexEntry = gc.text_index_types.IndexEntry;
  export import RRFOptions = gc.text_index_types.RRFOptions;
  export import Term = gc.text_index_types.Term;
  export import MoreLikeThisOptions = gc.text_index_types.MoreLikeThisOptions;
  export import PhraseOptions = gc.text_index_types.PhraseOptions;
  export import FieldModifier = gc.text_index_types.FieldModifier;
  export import SnippetOptions = gc.text_index_types.SnippetOptions;
  export import TextSearchLanguage = gc.text_index_types.TextSearchLanguage;
  export import TrigramPostings = gc.text_index_types.TrigramPostings;
  export import HighlightOptions = gc.text_index_types.HighlightOptions;
  export import DiversifyOptions = gc.text_index_types.DiversifyOptions;
  export import SearchCursor = gc.text_index_types.SearchCursor;
  export import BM25Options = gc.text_index_types.BM25Options;
  export import ScoreExplanation = gc.text_index_types.ScoreExplanation;
  export import SpanOperator = gc.text_index_types.SpanOperator;
  export import SearchMode = gc.text_index_types.SearchMode;
  export import TermExplanation = gc.text_index_types.TermExplanation;
  export import Snippet = gc.text_index_types.Snippet;
  export import EdgeNgramOptions = gc.text_index_types.EdgeNgramOptions;
  export import LMDirichletOptions = gc.text_index_types.LMDirichletOptions;
  export import TextIndexStats = gc.text_index_types.TextIndexStats;
  export import IndexChunk = gc.text_index_types.IndexChunk;
  export import ShortCircuitOptions = gc.text_index_types.ShortCircuitOptions;
  export import ChunkingOptions = gc.text_index_types.ChunkingOptions;
  export import FieldRef = gc.text_index_types.FieldRef;
  export import FuzzyOptions = gc.text_index_types.FuzzyOptions;
  export import TermScorePair = gc.text_index_types.TermScorePair;
  export import FieldConfig = gc.text_index_types.FieldConfig;
  export import FusionOptions = gc.text_index_types.FusionOptions;
  export import BM25Variant = gc.text_index_types.BM25Variant;
  export import Normalization = gc.text_index_types.Normalization;
  export import StopWordMode = gc.text_index_types.StopWordMode;
  export import TextIndexConfig = gc.text_index_types.TextIndexConfig;
  export import RangeFilter = gc.text_index_types.RangeFilter;
  export import ProximityOptions = gc.text_index_types.ProximityOptions;
  export import ChunkStrategy = gc.text_index_types.ChunkStrategy;
  export import TrieNode = gc.text_index_types.TrieNode;
  export import StopWordOptions = gc.text_index_types.StopWordOptions;
  export import NormalizedTerm = gc.text_index_types.NormalizedTerm;
  export import ScoreMode = gc.text_index_types.ScoreMode;
  export import TermBoost = gc.text_index_types.TermBoost;
  export import TextEntry = gc.text_index_types.TextEntry;
  export import TokenizationOptions = gc.text_index_types.TokenizationOptions;
  export import FusionMethod = gc.text_index_types.FusionMethod;
  export import FuzzyMode = gc.text_index_types.FuzzyMode;
  export import PhoneticPostings = gc.text_index_types.PhoneticPostings;
  export import TermFilter = gc.text_index_types.TermFilter;
  export import NormOptions = gc.text_index_types.NormOptions;
  export import BoostMode = gc.text_index_types.BoostMode;
  export import TextResult = gc.text_index_types.TextResult;
  export import CurationRule = gc.text_index_types.CurationRule;
  export import DFROptions = gc.text_index_types.DFROptions;
  export import SortClause = gc.text_index_types.SortClause;
  export import TypoOptions = gc.text_index_types.TypoOptions;
  export import PercolateMode = gc.text_index_types.PercolateMode;
  export import SearchOptions = gc.text_index_types.SearchOptions;
  export import BooleanOperator = gc.boolean_parser.BooleanOperator;
  export import ParseResult = gc.boolean_parser.ParseResult;
  export import BooleanQuery = gc.boolean_parser.BooleanQuery;
  export import BooleanParser = gc.boolean_parser.BooleanParser;
  export import SpanQuery = gc.span_parser.SpanQuery;
  export import SpanParser = gc.span_parser.SpanParser;
  export import PorterStemmer = gc.stemmer.PorterStemmer;
  export import StringUtils = gc.string_utils.StringUtils;
  export import TextChunker = gc.text_chunker.TextChunker;
  export import ChunkInfo = gc.text_chunker.ChunkInfo;
  export import TextNormalizer = gc.text_normalizer.TextNormalizer;
  export import TextParser = gc.text_parser.TextParser;
  export import ParsedSection = gc.text_parser.ParsedSection;
  export import TokenInfo = gc.text_tokenizer.TokenInfo;
  export import TermFrequency = gc.text_tokenizer.TermFrequency;
  export import TokenizerAccel = gc.text_tokenizer.TokenizerAccel;
  export import TextTokenizer = gc.text_tokenizer.TextTokenizer;
  export import DFRScorer = gc.dfr_engine.DFRScorer;
  export import DFREngine = gc.dfr_engine.DFREngine;
  export import DFRBasicModel = gc.dfr_engine.DFRBasicModel;
  export import DFRNormalization = gc.dfr_engine.DFRNormalization;
  export import DFRAfterEffect = gc.dfr_engine.DFRAfterEffect;
  export import DFRAccum = gc.dfr_engine.DFRAccum;
  export import DecayFunction = gc.function_score.DecayFunction;
  export import DecayType = gc.function_score.DecayType;
  export import FunctionScoreAccel = gc.function_score.FunctionScoreAccel;
  export import FieldValueFactor = gc.function_score.FieldValueFactor;
  export import FunctionScoreEngine = gc.function_score.FunctionScoreEngine;
  export import FunctionScoreConfig = gc.function_score.FunctionScoreConfig;
  export import FusionAccum = gc.fusion.FusionAccum;
  export import FederatedSearch = gc.fusion.FederatedSearch;
  export import FusionInput = gc.fusion.FusionInput;
  export import Fusion = gc.fusion.Fusion;
  export import LMDAccum = gc.lm_dirichlet_engine.LMDAccum;
  export import LMDirichletEngine = gc.lm_dirichlet_engine.LMDirichletEngine;
  export import LMDirichletAccel = gc.lm_dirichlet_engine.LMDirichletAccel;
  export import MMR = gc.mmr.MMR;
  export import RankingRule = gc.ranking_rules.RankingRule;
  export import RankingRulesEngine = gc.ranking_rules.RankingRulesEngine;
  export import RankingCandidate = gc.ranking_rules.RankingCandidate;
  export import SearchAccel = gc.search_accel.SearchAccel;
  export import CharMap = gc.char_map.CharMap;
  export import DocReader = gc.doc_reader.DocReader;
  export import RegexAccel = gc.regex_accel.RegexAccel;
  export import RegexUtils = gc.regex_utils.RegexUtils;
  export import RegexMatch = gc.regex_utils.RegexMatch;
  export import SnippetExtractor = gc.snippet.SnippetExtractor;
  export import WindowResult = gc.snippet.WindowResult;
  export import SnippetFragment = gc.snippet.SnippetFragment;
  export import StopWords = gc.stop_words.StopWords;
  export import AddressDoc = gc.address_index.AddressDoc;
  export import AddressMatchLevel = gc.address_index.AddressMatchLevel;
  export import AddressSearchHit = gc.address_index.AddressSearchHit;
  export import AddressIndex = gc.address_index.AddressIndex;
  export import AddressComponents = gc.address_index.AddressComponents;
  export import PostalExpandOptions = gc.postal.PostalExpandOptions;
  export import PostalComponent = gc.postal.PostalComponent;
  export import PostalAddress = gc.postal.PostalAddress;
  export import PostalOptions = gc.postal.PostalOptions;
  export import PostalParsedAddress = gc.postal.PostalParsedAddress;
  export import mcp_initialize = gc.runtime.mcp_initialize;
  export import mcp_tools_list = gc.runtime.mcp_tools_list;
  export import mcp_tools_call = gc.runtime.mcp_tools_call;
  export import mcp_prompts_list = gc.runtime.mcp_prompts_list;
  export import mcp_resources_list = gc.runtime.mcp_resources_list;
  export import mcp_tasks_get = gc.runtime.mcp_tasks_get;
  export import mcp_tasks_result = gc.runtime.mcp_tasks_result;
  export import mcp_tasks_list = gc.runtime.mcp_tasks_list;
  export import mcp_tasks_cancel = gc.runtime.mcp_tasks_cancel;
  export import promoteRecord = gc.privateApi.promoteRecord;
  export import linkRecords = gc.privateApi.linkRecords;
  export import unlinkRecord = gc.privateApi.unlinkRecord;
  export import linkAllFullMatched = gc.privateApi.linkAllFullMatched;
  export import batchLinkByScore = gc.privateApi.batchLinkByScore;
  export import mergePositionsToGolden = gc.privateApi.mergePositionsToGolden;
  export import lockSource = gc.privateApi.lockSource;
  export import reconcile = gc.privateApi.reconcile;
  export import reconcileAddresses = gc.privateApi.reconcileAddresses;
  export import getReconciliationReport = gc.privateApi.getReconciliationReport;
  export import getRecordTab = gc.privateApi.getRecordTab;
  export import getSources = gc.privateApi.getSources;
  export import getComparisonViewData = gc.privateApi.getComparisonViewData;
  export import getLinkedComparisonViewData = gc.privateApi.getLinkedComparisonViewData;
  export import computeGlobalQuality = gc.privateApi.computeGlobalQuality;
  export import unlockSource = gc.privateApi.unlockSource;
  export import updateCACLR = gc.privateApi.updateCACLR;
  export import updateBDA = gc.privateApi.updateBDA;
  export import updateOSM = gc.privateApi.updateOSM;
  export import buildGoldenStreetIndex = gc.privateApi.buildGoldenStreetIndex;
  export import goldenStreetIndexStats = gc.privateApi.goldenStreetIndexStats;
  export import buildGoldenTextIndex = gc.privateApi.buildGoldenTextIndex;
  export import goldenTextIndexStats = gc.privateApi.goldenTextIndexStats;
  export import buildSourceTextIndexes = gc.privateApi.buildSourceTextIndexes;
  export import buildSourceTextIndex = gc.privateApi.buildSourceTextIndex;
  export import sourceTextIndexStats = gc.privateApi.sourceTextIndexStats;
  export import recomputeGoldenGeoScore = gc.privateApi.recomputeGoldenGeoScore;
  export import backupGraph = gc.privateApi.backupGraph;
  export import restoreGraph = gc.privateApi.restoreGraph;
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
  export import getGoldenRecordScores = gc.api.getGoldenRecordScores;
  export import appInfo = gc.api.appInfo;
  export import searchAddress = gc.api.searchAddress;
  export import getGoldenWithLinkedRecords = gc.api.getGoldenWithLinkedRecords;
  export import getSourceStats = gc.api.getSourceStats;
  export import getDeprecatedCounts = gc.api.getDeprecatedCounts;
}
