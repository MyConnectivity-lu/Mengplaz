// AUTO-GENERATED FILE PLEASE DO NOT MODIFY MANUALLY
/* eslint-disable */
/* oxlint-disable */
declare namespace gc {
  namespace project {
    class Root extends gc.sdk.GCObject {
      static readonly _type = 'project::Root';
      static readonly $fields: Root.$Fields;
      "bdaddress::bda_municipalities_by_name": gc.core.nodeIndex<string, gc.core.node<gc.bdaddress.BDAMunicipality>>;
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
      "caclr::caclr_buildings_by_geo": gc.core.nodeGeo<gc.core.node<gc.caclr.CaclrBuilding>>;
      "caclr::caclr_token": gc.core.node<gc.caclr.CaclrToken | null>;
      "golden::golden_consistuency_by_code": gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenConstituency>>;
      "golden::golden_cantons_by_id": gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenCanton>>;
      "golden::golden_municipalities_by_id": gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenMunicipality>>;
      "golden::golden_cities_by_id": gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenCity>>;
      "golden::golden_streets_by_id": gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenStreet>>;
      "golden::golden_pois_by_id": gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenPointOfInterest>>;
      "golden::golden_pois_by_geo": gc.core.nodeGeo<gc.core.node<gc.golden.GoldenPointOfInterest>>;
      "mengplaz::sources_by_name": gc.core.nodeIndex<string, gc.core.node<gc.mengplaz.DataSource>>;
      "osm::osm_by_id": gc.core.nodeList<gc.core.node<gc.osm.OsmAddress>>;
      "osm::osm_partial_by_id": gc.core.nodeList<gc.core.node<gc.osm.OsmPartialAddress>>;
      "osm::osm_by_geo": gc.core.nodeGeo<gc.core.node<gc.osm.OsmAddress>>;
      "osm::osm_partial_by_geo": gc.core.nodeGeo<gc.core.node<gc.osm.OsmPartialAddress>>;
      "trafic::endpoints_by_name": gc.core.nodeIndex<string, gc.core.node<gc.trafic.Endpoint>>;
    }
    namespace Root {
      interface $Fields {
        "bdaddress::bda_municipalities_by_name": 0;
        "bdaddress::bda_street_by_cacrid": 1;
        "bdaddress::bda_address_by_geo": 2;
        "bdaddress::bda_address_by_cacrid": 3;
        "bdaddress::bda_address_by_geoportalid": 4;
        "caclr::caclr_consistuency_by_code": 5;
        "caclr::caclr_cantons_by_id": 6;
        "caclr::caclr_municipalities_by_id": 7;
        "caclr::caclr_cities_by_id": 8;
        "caclr::caclr_streets_by_id": 9;
        "caclr::caclr_buildings_by_id": 10;
        "caclr::caclr_buildings_by_geo": 11;
        "caclr::caclr_token": 12;
        "golden::golden_consistuency_by_code": 13;
        "golden::golden_cantons_by_id": 14;
        "golden::golden_municipalities_by_id": 15;
        "golden::golden_cities_by_id": 16;
        "golden::golden_streets_by_id": 17;
        "golden::golden_pois_by_id": 18;
        "golden::golden_pois_by_geo": 19;
        "mengplaz::sources_by_name": 20;
        "osm::osm_by_id": 21;
        "osm::osm_partial_by_id": 22;
        "osm::osm_by_geo": 23;
        "osm::osm_partial_by_geo": 24;
        "trafic::endpoints_by_name": 25;
      }
    }

  }

  namespace private_ {
    class promoteRecord$args extends gc.sdk.GCObject {
      static readonly _type = 'private::promoteRecord$args';
      static readonly $fields: promoteRecord$args.$Fields;
      record: gc.core.node<gc.mengplaz.POIRecordProvider>;
      constructor(record: gc.core.node<gc.mengplaz.POIRecordProvider>);
      static createFrom(fields: {record: gc.core.node<gc.mengplaz.POIRecordProvider>}): promoteRecord$args;
    }
    namespace promoteRecord$args {
      interface $Fields {
        record: 0;
      }
    }

    class linkAllRecords$args extends gc.sdk.GCObject {
      static readonly _type = 'private::linkAllRecords$args';
      static readonly $fields: linkAllRecords$args.$Fields;
      goldens: globalThis.Array<gc.core.node<gc.mengplaz.POIRecordProvider>>;
      others: globalThis.Array<gc.core.node<gc.mengplaz.POIRecordProvider>>;
      constructor(goldens: globalThis.Array<gc.core.node<gc.mengplaz.POIRecordProvider>>, others: globalThis.Array<gc.core.node<gc.mengplaz.POIRecordProvider>>);
      static createFrom(fields: {goldens: globalThis.Array<gc.core.node<gc.mengplaz.POIRecordProvider>>, others: globalThis.Array<gc.core.node<gc.mengplaz.POIRecordProvider>>}): linkAllRecords$args;
    }
    namespace linkAllRecords$args {
      interface $Fields {
        goldens: 0;
        others: 1;
      }
    }

    class unlinkRecord$args extends gc.sdk.GCObject {
      static readonly _type = 'private::unlinkRecord$args';
      static readonly $fields: unlinkRecord$args.$Fields;
      nOther: gc.core.node<gc.mengplaz.POIRecordProvider>;
      constructor(nOther: gc.core.node<gc.mengplaz.POIRecordProvider>);
      static createFrom(fields: {nOther: gc.core.node<gc.mengplaz.POIRecordProvider>}): unlinkRecord$args;
    }
    namespace unlinkRecord$args {
      interface $Fields {
        nOther: 0;
      }
    }

    class mergePositionsToGolden$args extends gc.sdk.GCObject {
      static readonly _type = 'private::mergePositionsToGolden$args';
      static readonly $fields: mergePositionsToGolden$args.$Fields;
      others: globalThis.Array<gc.core.node<gc.mengplaz.POIRecordProvider>>;
      constructor(others: globalThis.Array<gc.core.node<gc.mengplaz.POIRecordProvider>>);
      static createFrom(fields: {others: globalThis.Array<gc.core.node<gc.mengplaz.POIRecordProvider>>}): mergePositionsToGolden$args;
    }
    namespace mergePositionsToGolden$args {
      interface $Fields {
        others: 0;
      }
    }

    class linkRecords$args extends gc.sdk.GCObject {
      static readonly _type = 'private::linkRecords$args';
      static readonly $fields: linkRecords$args.$Fields;
      nGolden: gc.core.node<gc.mengplaz.POIRecordProvider>;
      nOther: gc.core.node<gc.mengplaz.POIRecordProvider>;
      constructor(nGolden: gc.core.node<gc.mengplaz.POIRecordProvider>, nOther: gc.core.node<gc.mengplaz.POIRecordProvider>);
      static createFrom(fields: {nGolden: gc.core.node<gc.mengplaz.POIRecordProvider>, nOther: gc.core.node<gc.mengplaz.POIRecordProvider>}): linkRecords$args;
    }
    namespace linkRecords$args {
      interface $Fields {
        nGolden: 0;
        nOther: 1;
      }
    }

    function promoteRecord(record: gc.core.node<gc.mengplaz.POIRecordProvider>, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<unknown>;
    function linkRecords(nGolden: gc.core.node<gc.mengplaz.POIRecordProvider>, nOther: gc.core.node<gc.mengplaz.POIRecordProvider>, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<unknown>;
    function linkAllRecords(goldens: globalThis.Array<gc.core.node<gc.mengplaz.POIRecordProvider>>, others: globalThis.Array<gc.core.node<gc.mengplaz.POIRecordProvider>>, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<unknown>;
    function unlinkRecord(nOther: gc.core.node<gc.mengplaz.POIRecordProvider>, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<unknown>;
    function mergePositionsToGolden(others: globalThis.Array<gc.core.node<gc.mengplaz.POIRecordProvider>>, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<unknown>;
  }

  namespace api {
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

    class getGoldenCities$args extends gc.sdk.GCObject {
      static readonly _type = 'api::getGoldenCities$args';
    }

    class ReconciliationRequest extends gc.sdk.GCObject {
      static readonly _type = 'api::ReconciliationRequest';
      static readonly $fields: ReconciliationRequest.$Fields;
      source: gc.core.node<gc.mengplaz.DataSource>;
      constructor(source: gc.core.node<gc.mengplaz.DataSource>);
      static createFrom(fields: {source: gc.core.node<gc.mengplaz.DataSource>}): ReconciliationRequest;
    }
    namespace ReconciliationRequest {
      interface $Fields {
        source: 0;
      }
    }

    class LinkedRecordsDetails extends gc.sdk.GCObject {
      static readonly _type = 'api::LinkedRecordsDetails';
      static readonly $fields: LinkedRecordsDetails.$Fields;
      golden: gc.mengplaz.POIRecordRef;
      associated: gc.mengplaz.POIFullRecordRef;
      constructor(golden: gc.mengplaz.POIRecordRef, associated: gc.mengplaz.POIFullRecordRef);
      static createFrom(fields: {golden: gc.mengplaz.POIRecordRef, associated: gc.mengplaz.POIFullRecordRef}): LinkedRecordsDetails;
    }
    namespace LinkedRecordsDetails {
      interface $Fields {
        golden: 0;
        associated: 1;
      }
    }

    class getReconciliationReport$args extends gc.sdk.GCObject {
      static readonly _type = 'api::getReconciliationReport$args';
      static readonly $fields: getReconciliationReport$args.$Fields;
      source: gc.core.node<gc.mengplaz.DataSource>;
      constructor(source: gc.core.node<gc.mengplaz.DataSource>);
      static createFrom(fields: {source: gc.core.node<gc.mengplaz.DataSource>}): getReconciliationReport$args;
    }
    namespace getReconciliationReport$args {
      interface $Fields {
        source: 0;
      }
    }

    class MatchCandidateDetail extends gc.sdk.GCObject {
      static readonly _type = 'api::MatchCandidateDetail';
      static readonly $fields: MatchCandidateDetail.$Fields;
      ref: gc.core.node<gc.mengplaz.POIRecordProvider>;
      numberScore: number;
      streetScore: number;
      cityScore: number;
      overallScore: number;
      postcodeScore: number;
      uid: string | null;
      number: string | null;
      street: string | null;
      postcode: string | null;
      city: string | null;
      positions: globalThis.Map<string, gc.core.geo>;
      constructor(ref: gc.core.node<gc.mengplaz.POIRecordProvider>, numberScore: number, streetScore: number, cityScore: number, overallScore: number, postcodeScore: number, uid: string | null, number: string | null, street: string | null, postcode: string | null, city: string | null, positions: globalThis.Map<string, gc.core.geo>);
      static createFrom(fields: {ref: gc.core.node<gc.mengplaz.POIRecordProvider>, numberScore: number, streetScore: number, cityScore: number, overallScore: number, postcodeScore: number, uid?: string | null, number?: string | null, street?: string | null, postcode?: string | null, city?: string | null, positions: globalThis.Map<string, gc.core.geo>}): MatchCandidateDetail;
    }
    namespace MatchCandidateDetail {
      interface $Fields {
        ref: 0;
        numberScore: 1;
        streetScore: 2;
        cityScore: 3;
        overallScore: 4;
        postcodeScore: 5;
        uid: 6;
        number: 7;
        street: 8;
        postcode: 9;
        city: 10;
        positions: 11;
      }
    }

    class getPois$args extends gc.sdk.GCObject {
      static readonly _type = 'api::getPois$args';
    }

    class getLinkedRecordDetails$args extends gc.sdk.GCObject {
      static readonly _type = 'api::getLinkedRecordDetails$args';
      static readonly $fields: getLinkedRecordDetails$args.$Fields;
      other: gc.core.node<gc.mengplaz.POIRecordProvider>;
      constructor(other: gc.core.node<gc.mengplaz.POIRecordProvider>);
      static createFrom(fields: {other: gc.core.node<gc.mengplaz.POIRecordProvider>}): getLinkedRecordDetails$args;
    }
    namespace getLinkedRecordDetails$args {
      interface $Fields {
        other: 0;
      }
    }

    class SourceRef extends gc.sdk.GCObject {
      static readonly _type = 'api::SourceRef';
      static readonly $fields: SourceRef.$Fields;
      ref: gc.core.node<gc.mengplaz.DataSource>;
      name: string;
      constructor(ref: gc.core.node<gc.mengplaz.DataSource>, name: string);
      static createFrom(fields: {ref: gc.core.node<gc.mengplaz.DataSource>, name: string}): SourceRef;
    }
    namespace SourceRef {
      interface $Fields {
        ref: 0;
        name: 1;
      }
    }

    class getGoldenStreetsByCityId$args extends gc.sdk.GCObject {
      static readonly _type = 'api::getGoldenStreetsByCityId$args';
      static readonly $fields: getGoldenStreetsByCityId$args.$Fields;
      cityId: string;
      constructor(cityId: string);
      static createFrom(fields: {cityId: string}): getGoldenStreetsByCityId$args;
    }
    namespace getGoldenStreetsByCityId$args {
      interface $Fields {
        cityId: 0;
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

    class getGoldenRecords$args extends gc.sdk.GCObject {
      static readonly _type = 'api::getGoldenRecords$args';
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

    class openapi$args extends gc.sdk.GCObject {
      static readonly _type = 'api::openapi$args';
    }

    class getMatchCandidateDetails$args extends gc.sdk.GCObject {
      static readonly _type = 'api::getMatchCandidateDetails$args';
      static readonly $fields: getMatchCandidateDetails$args.$Fields;
      elements: globalThis.Array<gc.mengplaz.CandidateMatch<gc.core.node<gc.mengplaz.POIRecordProvider>>>;
      constructor(elements: globalThis.Array<gc.mengplaz.CandidateMatch<gc.core.node<gc.mengplaz.POIRecordProvider>>>);
      static createFrom(fields: {elements: globalThis.Array<gc.mengplaz.CandidateMatch<gc.core.node<gc.mengplaz.POIRecordProvider>>>}): getMatchCandidateDetails$args;
    }
    namespace getMatchCandidateDetails$args {
      interface $Fields {
        elements: 0;
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

    class getRecordByGeopartalID$args extends gc.sdk.GCObject {
      static readonly _type = 'api::getRecordByGeopartalID$args';
      static readonly $fields: getRecordByGeopartalID$args.$Fields;
      id: string;
      constructor(id: string);
      static createFrom(fields: {id: string}): getRecordByGeopartalID$args;
    }
    namespace getRecordByGeopartalID$args {
      interface $Fields {
        id: 0;
      }
    }

    class getPoiRecordRef$args extends gc.sdk.GCObject {
      static readonly _type = 'api::getPoiRecordRef$args';
      static readonly $fields: getPoiRecordRef$args.$Fields;
      ref: gc.core.node<gc.mengplaz.POIRecordProvider>;
      constructor(ref: gc.core.node<gc.mengplaz.POIRecordProvider>);
      static createFrom(fields: {ref: gc.core.node<gc.mengplaz.POIRecordProvider>}): getPoiRecordRef$args;
    }
    namespace getPoiRecordRef$args {
      interface $Fields {
        ref: 0;
      }
    }

    class searchByItem$args extends gc.sdk.GCObject {
      static readonly _type = 'api::searchByItem$args';
      static readonly $fields: searchByItem$args.$Fields;
      item: gc.mengplaz.SearchItem;
      constructor(item: gc.mengplaz.SearchItem);
      static createFrom(fields: {item: gc.mengplaz.SearchItem}): searchByItem$args;
    }
    namespace searchByItem$args {
      interface $Fields {
        item: 0;
      }
    }

    class reconcile$args extends gc.sdk.GCObject {
      static readonly _type = 'api::reconcile$args';
      static readonly $fields: reconcile$args.$Fields;
      source: gc.core.node<gc.mengplaz.DataSource>;
      constructor(source: gc.core.node<gc.mengplaz.DataSource>);
      static createFrom(fields: {source: gc.core.node<gc.mengplaz.DataSource>}): reconcile$args;
    }
    namespace reconcile$args {
      interface $Fields {
        source: 0;
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

    class getSources$args extends gc.sdk.GCObject {
      static readonly _type = 'api::getSources$args';
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

    class getGoldenRecordDetails$args extends gc.sdk.GCObject {
      static readonly _type = 'api::getGoldenRecordDetails$args';
      static readonly $fields: getGoldenRecordDetails$args.$Fields;
      ref: gc.core.node<gc.golden.GoldenPointOfInterest>;
      constructor(ref: gc.core.node<gc.golden.GoldenPointOfInterest>);
      static createFrom(fields: {ref: gc.core.node<gc.golden.GoldenPointOfInterest>}): getGoldenRecordDetails$args;
    }
    namespace getGoldenRecordDetails$args {
      interface $Fields {
        ref: 0;
      }
    }

    function getPoisInStreet(e: gc.core.node<gc.mengplaz.StreetRecordProvider>, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<globalThis.Array<gc.mengplaz.POIRecordRef>>;
    function searchStreet(e: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<globalThis.Array<gc.mengplaz.StreetRecordRef>>;
    function getPois($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<globalThis.Array<gc.api.POIFeatures>>;
    function getPoisByGeo(coords: gc.core.geo, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.mengplaz.POIRecordRef | null>;
    function getGoldenRecordDetails(ref: gc.core.node<gc.golden.GoldenPointOfInterest>, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.api.GoldenRecordDetails>;
    function getLinkedRecordDetails(other: gc.core.node<gc.mengplaz.POIRecordProvider>, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.api.LinkedRecordsDetails | null>;
    function getPoiRecordRef(ref: gc.core.node<gc.mengplaz.POIRecordProvider>, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.mengplaz.POIRecordRef>;
    function getGoldenRecordRefByUid(uid: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.mengplaz.POIRecordRef | null>;
    function getSources($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<globalThis.Array<gc.api.SourceRef>>;
    function reconcile(source: gc.core.node<gc.mengplaz.DataSource>, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<unknown>;
    function getReconciliationReport(source: gc.core.node<gc.mengplaz.DataSource>, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.mengplaz.ReconciliationReport | null>;
    function getMatchCandidateDetails(elements: globalThis.Array<gc.mengplaz.CandidateMatch<gc.core.node<gc.mengplaz.POIRecordProvider>>>, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<globalThis.Array<gc.api.MatchCandidateDetail>>;
    function searchByItem(item: gc.mengplaz.SearchItem, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.mengplaz.SearchResult>;
    function getRecordByGeopartalID(id: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.mengplaz.POIRecordRef | null>;
    function getGoldenCities($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<globalThis.Array<gc.api.GoldenIndex>>;
    function getGoldenStreetsByCityId(cityId: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<globalThis.Array<gc.api.GoldenIndex>>;
    function getGoldenNumbersByStreetId(streetId: string, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<globalThis.Array<gc.api.GoldenIndex>>;
    function getGoldenRecords($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<globalThis.Array<gc.mengplaz.POIRecord>>;
    function openapi($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<unknown>;
  }

  namespace bdAddressLoader {
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

    class BDAddressLoader extends gc.sdk.GCObject {
      static readonly _type = 'bdAddressLoader::BDAddressLoader';
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

  namespace caclrLoader {
    class CACLRLoader extends gc.sdk.GCObject {
      static readonly _type = 'caclrLoader::CACLRLoader';
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
    }
    namespace MengplazMissmatch  {
      type Field = "STREET_MISMATCH"|"CITY_MISMATCH"|"POSTCODE_MISMATCH"|"NUMBER_MISMATCH"|"COMPLEX_MISMATCH";
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
    class BDAMunicipality extends gc.sdk.GCObject {
      static readonly _type = 'bdaddress::BDAMunicipality';
      static readonly $fields: BDAMunicipality.$Fields;
      name: string;
      cities: gc.core.nodeIndex<string, gc.core.node<gc.bdaddress.BDACity>>;
      constructor(name: string, cities: gc.core.nodeIndex<string, gc.core.node<gc.bdaddress.BDACity>>);
      static createFrom(fields: {name: string, cities: gc.core.nodeIndex<string, gc.core.node<gc.bdaddress.BDACity>>}): BDAMunicipality;
    }
    namespace BDAMunicipality {
      interface $Fields {
        name: 0;
        cities: 1;
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
      constructor(number: string, postcode: string, position: gc.core.geo, id_caclr: number | bigint, id_geoportail: string, municipatlity: gc.core.node<gc.bdaddress.BDAMunicipality>, city: gc.core.node<gc.bdaddress.BDACity>, street: gc.core.node<gc.bdaddress.BDAStreet>, goldenRef?: gc.core.node<gc.golden.GoldenPointOfInterest> | null);
      static createFrom(fields: {number: string, postcode: string, position: gc.core.geo, id_caclr: number | bigint, id_geoportail: string, municipatlity: gc.core.node<gc.bdaddress.BDAMunicipality>, city: gc.core.node<gc.bdaddress.BDACity>, street: gc.core.node<gc.bdaddress.BDAStreet>, goldenRef?: gc.core.node<gc.golden.GoldenPointOfInterest> | null}): BDAddress;
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
      }
    }

    class BDAddressSource extends gc.sdk.GCObject {
      static readonly _type = 'bdaddress::BDAddressSource';
      static readonly $fields: BDAddressSource.$Fields;
      reconciliationReport: gc.core.node<gc.mengplaz.ReconciliationReport | null>;
      constructor(reconciliationReport: gc.core.node<gc.mengplaz.ReconciliationReport | null>);
      static createFrom(fields: {reconciliationReport: gc.core.node<gc.mengplaz.ReconciliationReport | null>}): BDAddressSource;
    }
    namespace BDAddressSource {
      interface $Fields {
        reconciliationReport: 0;
      }
    }

    class BDAStreet extends gc.sdk.GCObject {
      static readonly _type = 'bdaddress::BDAStreet';
      static readonly $fields: BDAStreet.$Fields;
      name: string;
      id_caclr: number | bigint;
      addresses: gc.core.nodeIndex<string, gc.core.node<gc.bdaddress.BDAddress>>;
      constructor(name: string, id_caclr: number | bigint, addresses: gc.core.nodeIndex<string, gc.core.node<gc.bdaddress.BDAddress>>);
      static createFrom(fields: {name: string, id_caclr: number | bigint, addresses: gc.core.nodeIndex<string, gc.core.node<gc.bdaddress.BDAddress>>}): BDAStreet;
    }
    namespace BDAStreet {
      interface $Fields {
        name: 0;
        id_caclr: 1;
        addresses: 2;
      }
    }

    class BDAddressFullRecord extends gc.sdk.GCObject {
      static readonly _type = 'bdaddress::BDAddressFullRecord';
      static readonly $fields: BDAddressFullRecord.$Fields;
      id_geoportail: string;
      id_caclr: number | bigint;
      number: string;
      postcode: string;
      positions: globalThis.Map<string, gc.core.geo>;
      municipatlity: string;
      city: string;
      street: string;
      sourceName: string;
      goldenRef: gc.core.node<gc.golden.GoldenPointOfInterest> | null;
      constructor(id_geoportail: string, id_caclr: number | bigint, number: string, postcode: string, positions: globalThis.Map<string, gc.core.geo>, municipatlity: string, city: string, street: string, sourceName: string, goldenRef?: gc.core.node<gc.golden.GoldenPointOfInterest> | null);
      static createFrom(fields: {id_geoportail: string, id_caclr: number | bigint, number: string, postcode: string, positions: globalThis.Map<string, gc.core.geo>, municipatlity: string, city: string, street: string, sourceName: string, goldenRef?: gc.core.node<gc.golden.GoldenPointOfInterest> | null}): BDAddressFullRecord;
    }
    namespace BDAddressFullRecord {
      interface $Fields {
        id_geoportail: 0;
        id_caclr: 1;
        number: 2;
        postcode: 3;
        positions: 4;
        municipatlity: 5;
        city: 6;
        street: 7;
        sourceName: 8;
        goldenRef: 9;
      }
    }

    class BDACity extends gc.sdk.GCObject {
      static readonly _type = 'bdaddress::BDACity';
      static readonly $fields: BDACity.$Fields;
      name: string;
      streets: gc.core.nodeIndex<string, gc.core.node<gc.bdaddress.BDAStreet>>;
      constructor(name: string, streets: gc.core.nodeIndex<string, gc.core.node<gc.bdaddress.BDAStreet>>);
      static createFrom(fields: {name: string, streets: gc.core.nodeIndex<string, gc.core.node<gc.bdaddress.BDAStreet>>}): BDACity;
    }
    namespace BDACity {
      interface $Fields {
        name: 0;
        streets: 1;
      }
    }

  }

  namespace caclr {
    class CaclrSource extends gc.sdk.GCObject {
      static readonly _type = 'caclr::CaclrSource';
      static readonly $fields: CaclrSource.$Fields;
      reconciliationReport: gc.core.node<gc.mengplaz.ReconciliationReport | null>;
      constructor(reconciliationReport: gc.core.node<gc.mengplaz.ReconciliationReport | null>);
      static createFrom(fields: {reconciliationReport: gc.core.node<gc.mengplaz.ReconciliationReport | null>}): CaclrSource;
    }
    namespace CaclrSource {
      interface $Fields {
        reconciliationReport: 0;
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
      constructor(id: string, code: string, compoundCode: string, name: string, nameUpperCase: string, aliases: globalThis.Array<gc.mengplaz.Alias>, isTown: boolean, validityStartDate: gc.core.time, validityEndDate: gc.core.time | null, lastUpdate: gc.core.time, municipality: gc.core.node<gc.caclr.CaclrMunicipality>, streets_by_id: gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrStreet>>);
      static createFrom(fields: {id: string, code: string, compoundCode: string, name: string, nameUpperCase: string, aliases: globalThis.Array<gc.mengplaz.Alias>, isTown: boolean, validityStartDate: gc.core.time, validityEndDate?: gc.core.time | null, lastUpdate: gc.core.time, municipality: gc.core.node<gc.caclr.CaclrMunicipality>, streets_by_id: gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrStreet>>}): CaclrCity;
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
      }
    }

    class CaclrConstituency extends gc.sdk.GCObject {
      static readonly _type = 'caclr::CaclrConstituency';
      static readonly $fields: CaclrConstituency.$Fields;
      code: string;
      name: string;
      cantons_by_id: gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrCanton>>;
      constructor(code: string, name: string, cantons_by_id: gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrCanton>>);
      static createFrom(fields: {code: string, name: string, cantons_by_id: gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrCanton>>}): CaclrConstituency;
    }
    namespace CaclrConstituency {
      interface $Fields {
        code: 0;
        name: 1;
        cantons_by_id: 2;
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
      constructor(id: string, name: string, nameUpperCase: string, keyWord: string, aliases: globalThis.Array<gc.mengplaz.Alias>, administrativeStatus: gc.caclr.CaclrAdminStatus, isPlace: boolean, validityStartDate: gc.core.time, validityEndDate: gc.core.time | null, lastUpdate: gc.core.time, city: gc.core.node<gc.caclr.CaclrCity>, buildings_by_id: gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrBuilding>>);
      static createFrom(fields: {id: string, name: string, nameUpperCase: string, keyWord: string, aliases: globalThis.Array<gc.mengplaz.Alias>, administrativeStatus: gc.caclr.CaclrAdminStatus, isPlace: boolean, validityStartDate: gc.core.time, validityEndDate?: gc.core.time | null, lastUpdate: gc.core.time, city: gc.core.node<gc.caclr.CaclrCity>, buildings_by_id: gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrBuilding>>}): CaclrStreet;
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
      constructor(id: string, code: string, coficomCode: string, compoundCode: string, name: string, nameUpperCase: string, nameLu: string, status: gc.caclr.CaclrDataStatus, validityStartDate: gc.core.time, validityEndDate: gc.core.time | null, lastUpdate: gc.core.time, eurostats: gc.caclr.CaclrEurostatsIds, canton: gc.core.node<gc.caclr.CaclrCanton>, cities_by_id: gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrCity>>);
      static createFrom(fields: {id: string, code: string, coficomCode: string, compoundCode: string, name: string, nameUpperCase: string, nameLu: string, status: gc.caclr.CaclrDataStatus, validityStartDate: gc.core.time, validityEndDate?: gc.core.time | null, lastUpdate: gc.core.time, eurostats: gc.caclr.CaclrEurostatsIds, canton: gc.core.node<gc.caclr.CaclrCanton>, cities_by_id: gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrCity>>}): CaclrMunicipality;
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

    class CaclrPOIFullRecord extends gc.sdk.GCObject {
      static readonly _type = 'caclr::CaclrPOIFullRecord';
      static readonly $fields: CaclrPOIFullRecord.$Fields;
      id: string;
      number: number | bigint;
      multipleCode: string;
      postalCode: string;
      street: string | null;
      city: string | null;
      municipality: string | null;
      canton: string | null;
      constituency: string | null;
      administrativeStatus: gc.caclr.CaclrAdminStatus;
      validityStartDate: gc.core.time;
      validityEndDate: gc.core.time | null;
      lastUpdate: gc.core.time;
      sourceName: string;
      goldenRef: gc.core.node<gc.golden.GoldenPointOfInterest> | null;
      constructor(id: string, number: number | bigint, multipleCode: string, postalCode: string, street: string | null, city: string | null, municipality: string | null, canton: string | null, constituency: string | null, administrativeStatus: gc.caclr.CaclrAdminStatus, validityStartDate: gc.core.time, validityEndDate: gc.core.time | null, lastUpdate: gc.core.time, sourceName: string, goldenRef?: gc.core.node<gc.golden.GoldenPointOfInterest> | null);
      static createFrom(fields: {id: string, number: number | bigint, multipleCode: string, postalCode: string, street?: string | null, city?: string | null, municipality?: string | null, canton?: string | null, constituency?: string | null, administrativeStatus: gc.caclr.CaclrAdminStatus, validityStartDate: gc.core.time, validityEndDate?: gc.core.time | null, lastUpdate: gc.core.time, sourceName: string, goldenRef?: gc.core.node<gc.golden.GoldenPointOfInterest> | null}): CaclrPOIFullRecord;
    }
    namespace CaclrPOIFullRecord {
      interface $Fields {
        id: 0;
        number: 1;
        multipleCode: 2;
        postalCode: 3;
        street: 4;
        city: 5;
        municipality: 6;
        canton: 7;
        constituency: 8;
        administrativeStatus: 9;
        validityStartDate: 10;
        validityEndDate: 11;
        lastUpdate: 12;
        sourceName: 13;
        goldenRef: 14;
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
      constructor(id: string, number: number | bigint, isNumberUndefined: boolean, postalCode: string, multipleCode: string, position: gc.core.geo | null, administrativeStatus: gc.caclr.CaclrAdminStatus, validityStartDate: gc.core.time, validityEndDate: gc.core.time | null, lastUpdate: gc.core.time, street?: gc.core.node<gc.caclr.CaclrStreet> | null, goldenRef?: gc.core.node<gc.golden.GoldenPointOfInterest> | null);
      static createFrom(fields: {id: string, number: number | bigint, isNumberUndefined: boolean, postalCode: string, multipleCode: string, position?: gc.core.geo | null, administrativeStatus: gc.caclr.CaclrAdminStatus, validityStartDate: gc.core.time, validityEndDate?: gc.core.time | null, lastUpdate: gc.core.time, street?: gc.core.node<gc.caclr.CaclrStreet> | null, goldenRef?: gc.core.node<gc.golden.GoldenPointOfInterest> | null}): CaclrBuilding;
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
      constructor(id: string, code: string, name: string, lastUpdate: gc.core.time, constituency: gc.core.node<gc.caclr.CaclrConstituency>, municipalities_by_id: gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrMunicipality>>);
      static createFrom(fields: {id: string, code: string, name: string, lastUpdate: gc.core.time, constituency: gc.core.node<gc.caclr.CaclrConstituency>, municipalities_by_id: gc.core.nodeIndex<string, gc.core.node<gc.caclr.CaclrMunicipality>>}): CaclrCanton;
    }
    namespace CaclrCanton {
      interface $Fields {
        id: 0;
        code: 1;
        name: 2;
        lastUpdate: 3;
        constituency: 4;
        municipalities_by_id: 5;
      }
    }

  }

  namespace golden {
    class GoldenCanton extends gc.sdk.GCObject {
      static readonly _type = 'golden::GoldenCanton';
      static readonly $fields: GoldenCanton.$Fields;
      id: string;
      name: string;
      nameAliases: globalThis.Array<gc.mengplaz.Alias>;
      lastUpdate: gc.core.time;
      constituency: gc.core.node<gc.golden.GoldenConstituency>;
      municipalities_by_id: gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenMunicipality>>;
      constructor(id: string, name: string, nameAliases: globalThis.Array<gc.mengplaz.Alias>, lastUpdate: gc.core.time, constituency: gc.core.node<gc.golden.GoldenConstituency>, municipalities_by_id: gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenMunicipality>>);
      static createFrom(fields: {id: string, name: string, nameAliases: globalThis.Array<gc.mengplaz.Alias>, lastUpdate: gc.core.time, constituency: gc.core.node<gc.golden.GoldenConstituency>, municipalities_by_id: gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenMunicipality>>}): GoldenCanton;
    }
    namespace GoldenCanton {
      interface $Fields {
        id: 0;
        name: 1;
        nameAliases: 2;
        lastUpdate: 3;
        constituency: 4;
        municipalities_by_id: 5;
      }
    }

    class GoldenPointOfInterest extends gc.sdk.GCObject {
      static readonly _type = 'golden::GoldenPointOfInterest';
      static readonly $fields: GoldenPointOfInterest.$Fields;
      uid: string;
      number: number | bigint;
      multipleCode: string;
      postCode: string;
      positions: globalThis.Map<string, gc.core.geo>;
      lastUpdate: gc.core.time;
      street: gc.core.node<gc.golden.GoldenStreet> | null;
      linkedRecords: globalThis.Array<gc.core.node<gc.mengplaz.POIRecordProvider>>;
      constructor(uid: string, number: number | bigint, multipleCode: string, postCode: string, positions: globalThis.Map<string, gc.core.geo>, lastUpdate: gc.core.time, street: gc.core.node<gc.golden.GoldenStreet> | null, linkedRecords: globalThis.Array<gc.core.node<gc.mengplaz.POIRecordProvider>>);
      static createFrom(fields: {uid: string, number: number | bigint, multipleCode: string, postCode: string, positions: globalThis.Map<string, gc.core.geo>, lastUpdate: gc.core.time, street?: gc.core.node<gc.golden.GoldenStreet> | null, linkedRecords: globalThis.Array<gc.core.node<gc.mengplaz.POIRecordProvider>>}): GoldenPointOfInterest;
    }
    namespace GoldenPointOfInterest {
      interface $Fields {
        uid: 0;
        number: 1;
        multipleCode: 2;
        postCode: 3;
        positions: 4;
        lastUpdate: 5;
        street: 6;
        linkedRecords: 7;
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
      constructor(id: string, name: string, nameAliases: globalThis.Array<gc.mengplaz.Alias>, lastUpdate: gc.core.time, canton: gc.core.node<gc.golden.GoldenCanton>, cities_by_id: gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenCity>>);
      static createFrom(fields: {id: string, name: string, nameAliases: globalThis.Array<gc.mengplaz.Alias>, lastUpdate: gc.core.time, canton: gc.core.node<gc.golden.GoldenCanton>, cities_by_id: gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenCity>>}): GoldenMunicipality;
    }
    namespace GoldenMunicipality {
      interface $Fields {
        id: 0;
        name: 1;
        nameAliases: 2;
        lastUpdate: 3;
        canton: 4;
        cities_by_id: 5;
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
      constructor(id: string, name: string, nameAliases: globalThis.Array<gc.mengplaz.Alias>, lastUpdate: gc.core.time, municipality: gc.core.node<gc.golden.GoldenMunicipality>, streets_by_id: gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenStreet>>);
      static createFrom(fields: {id: string, name: string, nameAliases: globalThis.Array<gc.mengplaz.Alias>, lastUpdate: gc.core.time, municipality: gc.core.node<gc.golden.GoldenMunicipality>, streets_by_id: gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenStreet>>}): GoldenCity;
    }
    namespace GoldenCity {
      interface $Fields {
        id: 0;
        name: 1;
        nameAliases: 2;
        lastUpdate: 3;
        municipality: 4;
        streets_by_id: 5;
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
      constructor(id: string, name: string, nameAliases: globalThis.Array<gc.mengplaz.Alias>, lastUpdate: gc.core.time, city: gc.core.node<gc.golden.GoldenCity>, pois_by_id: gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenPointOfInterest>>);
      static createFrom(fields: {id: string, name: string, nameAliases: globalThis.Array<gc.mengplaz.Alias>, lastUpdate: gc.core.time, city: gc.core.node<gc.golden.GoldenCity>, pois_by_id: gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenPointOfInterest>>}): GoldenStreet;
    }
    namespace GoldenStreet {
      interface $Fields {
        id: 0;
        name: 1;
        nameAliases: 2;
        lastUpdate: 3;
        city: 4;
        pois_by_id: 5;
      }
    }

    class GoldenSource extends gc.sdk.GCObject {
      static readonly _type = 'golden::GoldenSource';
      static readonly $fields: GoldenSource.$Fields;
      reconciliationReport: gc.core.node<gc.mengplaz.ReconciliationReport | null>;
      constructor(reconciliationReport: gc.core.node<gc.mengplaz.ReconciliationReport | null>);
      static createFrom(fields: {reconciliationReport: gc.core.node<gc.mengplaz.ReconciliationReport | null>}): GoldenSource;
    }
    namespace GoldenSource {
      interface $Fields {
        reconciliationReport: 0;
      }
    }

    class GoldenConstituency extends gc.sdk.GCObject {
      static readonly _type = 'golden::GoldenConstituency';
      static readonly $fields: GoldenConstituency.$Fields;
      code: string;
      name: string;
      nameAliases: globalThis.Array<gc.mengplaz.Alias>;
      cantons_by_id: gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenCanton>>;
      constructor(code: string, name: string, nameAliases: globalThis.Array<gc.mengplaz.Alias>, cantons_by_id: gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenCanton>>);
      static createFrom(fields: {code: string, name: string, nameAliases: globalThis.Array<gc.mengplaz.Alias>, cantons_by_id: gc.core.nodeIndex<string, gc.core.node<gc.golden.GoldenCanton>>}): GoldenConstituency;
    }
    namespace GoldenConstituency {
      interface $Fields {
        code: 0;
        name: 1;
        nameAliases: 2;
        cantons_by_id: 3;
      }
    }

  }

  namespace mengplaz {
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

    class StreetRecordProvider extends gc.sdk.GCObject {
      static readonly _type = 'mengplaz::StreetRecordProvider';
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

    class SearchRequest extends gc.sdk.GCObject {
      static readonly _type = 'mengplaz::SearchRequest';
      static readonly $fields: SearchRequest.$Fields;
      items: globalThis.Array<gc.mengplaz.SearchItem>;
      params: gc.mengplaz.SearchParameters;
      constructor(items: globalThis.Array<gc.mengplaz.SearchItem>, params: gc.mengplaz.SearchParameters);
      static createFrom(fields: {items: globalThis.Array<gc.mengplaz.SearchItem>, params: gc.mengplaz.SearchParameters}): SearchRequest;
    }
    namespace SearchRequest {
      interface $Fields {
        items: 0;
        params: 1;
      }
    }

    class POIRecordProvider extends gc.sdk.GCObject {
      static readonly _type = 'mengplaz::POIRecordProvider';
    }

    class POIFullRecordRef extends gc.sdk.GCObject {
      static readonly _type = 'mengplaz::POIFullRecordRef';
      static readonly $fields: POIFullRecordRef.$Fields;
      ref: gc.core.node<gc.mengplaz.POIRecordProvider>;
      record: any;
      constructor(ref: gc.core.node<gc.mengplaz.POIRecordProvider>, record: any);
      static createFrom(fields: {ref: gc.core.node<gc.mengplaz.POIRecordProvider>, record: any}): POIFullRecordRef;
    }
    namespace POIFullRecordRef {
      interface $Fields {
        ref: 0;
        record: 1;
      }
    }

    class SearchItem extends gc.sdk.GCObject {
      static readonly _type = 'mengplaz::SearchItem';
      static readonly $fields: SearchItem.$Fields;
      sourceRecord: gc.core.node<gc.mengplaz.POIRecordProvider> | null;
      number: string;
      street: string;
      multipleCode: string;
      postcode: string;
      city: string;
      constructor(sourceRecord: gc.core.node<gc.mengplaz.POIRecordProvider> | null, number: string, street: string, multipleCode: string, postcode: string, city: string);
      static createFrom(fields: {sourceRecord?: gc.core.node<gc.mengplaz.POIRecordProvider> | null, number: string, street: string, multipleCode: string, postcode: string, city: string}): SearchItem;
    }
    namespace SearchItem {
      interface $Fields {
        sourceRecord: 0;
        number: 1;
        street: 2;
        multipleCode: 3;
        postcode: 4;
        city: 5;
      }
    }

    class SearchParameters extends gc.sdk.GCObject {
      static readonly _type = 'mengplaz::SearchParameters';
      static readonly $fields: SearchParameters.$Fields;
      citySimilarityThreshold: number;
      streetSimilarityThreshold: number;
      buildingSimilarityThreshold: number;
      maxCandidatesPerItem: number | bigint;
      constructor(citySimilarityThreshold: number, streetSimilarityThreshold: number, buildingSimilarityThreshold: number, maxCandidatesPerItem: number | bigint);
      static createFrom(fields: {citySimilarityThreshold: number, streetSimilarityThreshold: number, buildingSimilarityThreshold: number, maxCandidatesPerItem: number | bigint}): SearchParameters;
    }
    namespace SearchParameters {
      interface $Fields {
        citySimilarityThreshold: 0;
        streetSimilarityThreshold: 1;
        buildingSimilarityThreshold: 2;
        maxCandidatesPerItem: 3;
      }
    }

    class ReconciliationReport extends gc.sdk.GCObject {
      static readonly _type = 'mengplaz::ReconciliationReport';
      static readonly $fields: ReconciliationReport.$Fields;
      date: gc.core.time;
      linked: globalThis.Array<gc.core.node<gc.mengplaz.POIRecordProvider>>;
      fullMatch: globalThis.Array<gc.mengplaz.SearchResult>;
      totalProcessed: number | bigint;
      mismatches: globalThis.Map<gc.errors.MengplazMissmatch, globalThis.Array<gc.mengplaz.SearchResult>>;
      constructor(date: gc.core.time, linked: globalThis.Array<gc.core.node<gc.mengplaz.POIRecordProvider>>, fullMatch: globalThis.Array<gc.mengplaz.SearchResult>, totalProcessed: number | bigint, mismatches: globalThis.Map<gc.errors.MengplazMissmatch, globalThis.Array<gc.mengplaz.SearchResult>>);
      static createFrom(fields: {date: gc.core.time, linked: globalThis.Array<gc.core.node<gc.mengplaz.POIRecordProvider>>, fullMatch: globalThis.Array<gc.mengplaz.SearchResult>, totalProcessed: number | bigint, mismatches: globalThis.Map<gc.errors.MengplazMissmatch, globalThis.Array<gc.mengplaz.SearchResult>>}): ReconciliationReport;
    }
    namespace ReconciliationReport {
      interface $Fields {
        date: 0;
        linked: 1;
        fullMatch: 2;
        totalProcessed: 3;
        mismatches: 4;
      }
    }

    class SearchResult extends gc.sdk.GCObject {
      static readonly _type = 'mengplaz::SearchResult';
      static readonly $fields: SearchResult.$Fields;
      item: gc.mengplaz.SearchItem;
      candidates: globalThis.Array<gc.mengplaz.CandidateMatch<gc.core.node<gc.mengplaz.POIRecordProvider>>>;
      constructor(item: gc.mengplaz.SearchItem, candidates: globalThis.Array<gc.mengplaz.CandidateMatch<gc.core.node<gc.mengplaz.POIRecordProvider>>>);
      static createFrom(fields: {item: gc.mengplaz.SearchItem, candidates: globalThis.Array<gc.mengplaz.CandidateMatch<gc.core.node<gc.mengplaz.POIRecordProvider>>>}): SearchResult;
    }
    namespace SearchResult {
      interface $Fields {
        item: 0;
        candidates: 1;
      }
    }

    class DataSource extends gc.sdk.GCObject {
      static readonly _type = 'mengplaz::DataSource';
    }

    class BuildingMatch<T = any> extends gc.sdk.GCObject {
      static readonly _type = 'mengplaz::BuildingMatch';
      static readonly $fields: BuildingMatch.$Fields;
      overallScore: number;
      postcodeScore: number;
      numberScore: number;
      elem: T;
      constructor(overallScore: number, postcodeScore: number, numberScore: number, elem?: T);
      static createFrom<T>(fields: {overallScore: number, postcodeScore: number, numberScore: number, elem?: T}): BuildingMatch;
    }
    namespace BuildingMatch {
      interface $Fields {
        overallScore: 0;
        postcodeScore: 1;
        numberScore: 2;
        elem: 3;
      }
    }

    class POIRecord extends gc.sdk.GCObject {
      static readonly _type = 'mengplaz::POIRecord';
      static readonly $fields: POIRecord.$Fields;
      uid: string | null;
      number: string | null;
      street: string | null;
      streetAliases: globalThis.Array<gc.mengplaz.Alias> | null;
      postcode: string | null;
      city: string | null;
      cityAliases: globalThis.Array<gc.mengplaz.Alias> | null;
      positions: globalThis.Map<string, gc.core.geo>;
      sourceName: string | null;
      goldenRef: gc.core.node<gc.golden.GoldenPointOfInterest> | null;
      quality: number | null;
      constructor(uid: string | null, number: string | null, street: string | null, streetAliases: globalThis.Array<gc.mengplaz.Alias> | null, postcode: string | null, city: string | null, cityAliases: globalThis.Array<gc.mengplaz.Alias> | null, positions: globalThis.Map<string, gc.core.geo>, sourceName?: string | null, goldenRef?: gc.core.node<gc.golden.GoldenPointOfInterest> | null, quality?: number | null);
      static createFrom(fields: {uid?: string | null, number?: string | null, street?: string | null, streetAliases?: globalThis.Array<gc.mengplaz.Alias> | null, postcode?: string | null, city?: string | null, cityAliases?: globalThis.Array<gc.mengplaz.Alias> | null, positions: globalThis.Map<string, gc.core.geo>, sourceName?: string | null, goldenRef?: gc.core.node<gc.golden.GoldenPointOfInterest> | null, quality?: number | null}): POIRecord;
    }
    namespace POIRecord {
      interface $Fields {
        uid: 0;
        number: 1;
        street: 2;
        streetAliases: 3;
        postcode: 4;
        city: 5;
        cityAliases: 6;
        positions: 7;
        sourceName: 8;
        goldenRef: 9;
        quality: 10;
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
      overallScore: number;
      elem: T;
      constructor(cityScore: number, streetScore: number, numberScore: number, postcodeScore: number, overallScore: number, elem?: T);
      static createFrom<T>(fields: {cityScore: number, streetScore: number, numberScore: number, postcodeScore: number, overallScore: number, elem?: T}): CandidateMatch;
    }
    namespace CandidateMatch {
      interface $Fields {
        cityScore: 0;
        streetScore: 1;
        numberScore: 2;
        postcodeScore: 3;
        overallScore: 4;
        elem: 5;
      }
    }

  }

  namespace osm {
    class OsmSource extends gc.sdk.GCObject {
      static readonly _type = 'osm::OsmSource';
      static readonly $fields: OsmSource.$Fields;
      reconciliationReport: gc.core.node<gc.mengplaz.ReconciliationReport | null>;
      constructor(reconciliationReport: gc.core.node<gc.mengplaz.ReconciliationReport | null>);
      static createFrom(fields: {reconciliationReport: gc.core.node<gc.mengplaz.ReconciliationReport | null>}): OsmSource;
    }
    namespace OsmSource {
      interface $Fields {
        reconciliationReport: 0;
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
      goldenRef: gc.core.node<gc.golden.GoldenPointOfInterest> | null;
      constructor(id: number | bigint, position: gc.core.geo, city: string, postcode: string, street: string, number: string, ref_caclr?: string | null, goldenRef?: gc.core.node<gc.golden.GoldenPointOfInterest> | null);
      static createFrom(fields: {id: number | bigint, position: gc.core.geo, city: string, postcode: string, street: string, number: string, ref_caclr?: string | null, goldenRef?: gc.core.node<gc.golden.GoldenPointOfInterest> | null}): OsmAddress;
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
        goldenRef: 7;
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

  }

  namespace trafic {
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

  }

  namespace goldenServices {
    class GoldenServices extends gc.sdk.GCObject {
      static readonly _type = 'goldenServices::GoldenServices';
    }

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

  namespace sdk {
    interface GreyCat {
        call(method: 'private::promoteRecord', args: [gc.core.node<gc.mengplaz.POIRecordProvider>], signal?: globalThis.AbortSignal): Promise<unknown>;
        spawn(method: 'private::promoteRecord', args: [gc.core.node<gc.mengplaz.POIRecordProvider>], signal?: globalThis.AbortSignal): Promise<gc.runtime.Task>;
        spawnAwait(method: 'private::promoteRecord', args: [gc.core.node<gc.mengplaz.POIRecordProvider>], pollEvery?: number, signal?: globalThis.AbortSignal): Promise<unknown>;
        call(method: 'private::linkRecords', args: [gc.core.node<gc.mengplaz.POIRecordProvider>, gc.core.node<gc.mengplaz.POIRecordProvider>], signal?: globalThis.AbortSignal): Promise<unknown>;
        spawn(method: 'private::linkRecords', args: [gc.core.node<gc.mengplaz.POIRecordProvider>, gc.core.node<gc.mengplaz.POIRecordProvider>], signal?: globalThis.AbortSignal): Promise<gc.runtime.Task>;
        spawnAwait(method: 'private::linkRecords', args: [gc.core.node<gc.mengplaz.POIRecordProvider>, gc.core.node<gc.mengplaz.POIRecordProvider>], pollEvery?: number, signal?: globalThis.AbortSignal): Promise<unknown>;
        call(method: 'private::linkAllRecords', args: [globalThis.Array<gc.core.node<gc.mengplaz.POIRecordProvider>>, globalThis.Array<gc.core.node<gc.mengplaz.POIRecordProvider>>], signal?: globalThis.AbortSignal): Promise<unknown>;
        spawn(method: 'private::linkAllRecords', args: [globalThis.Array<gc.core.node<gc.mengplaz.POIRecordProvider>>, globalThis.Array<gc.core.node<gc.mengplaz.POIRecordProvider>>], signal?: globalThis.AbortSignal): Promise<gc.runtime.Task>;
        spawnAwait(method: 'private::linkAllRecords', args: [globalThis.Array<gc.core.node<gc.mengplaz.POIRecordProvider>>, globalThis.Array<gc.core.node<gc.mengplaz.POIRecordProvider>>], pollEvery?: number, signal?: globalThis.AbortSignal): Promise<unknown>;
        call(method: 'private::unlinkRecord', args: [gc.core.node<gc.mengplaz.POIRecordProvider>], signal?: globalThis.AbortSignal): Promise<unknown>;
        spawn(method: 'private::unlinkRecord', args: [gc.core.node<gc.mengplaz.POIRecordProvider>], signal?: globalThis.AbortSignal): Promise<gc.runtime.Task>;
        spawnAwait(method: 'private::unlinkRecord', args: [gc.core.node<gc.mengplaz.POIRecordProvider>], pollEvery?: number, signal?: globalThis.AbortSignal): Promise<unknown>;
        call(method: 'private::mergePositionsToGolden', args: [globalThis.Array<gc.core.node<gc.mengplaz.POIRecordProvider>>], signal?: globalThis.AbortSignal): Promise<unknown>;
        spawn(method: 'private::mergePositionsToGolden', args: [globalThis.Array<gc.core.node<gc.mengplaz.POIRecordProvider>>], signal?: globalThis.AbortSignal): Promise<gc.runtime.Task>;
        spawnAwait(method: 'private::mergePositionsToGolden', args: [globalThis.Array<gc.core.node<gc.mengplaz.POIRecordProvider>>], pollEvery?: number, signal?: globalThis.AbortSignal): Promise<unknown>;
        call(method: 'api::getPoisInStreet', args: [gc.core.node<gc.mengplaz.StreetRecordProvider>], signal?: globalThis.AbortSignal): Promise<globalThis.Array<gc.mengplaz.POIRecordRef>>;
        spawn(method: 'api::getPoisInStreet', args: [gc.core.node<gc.mengplaz.StreetRecordProvider>], signal?: globalThis.AbortSignal): Promise<gc.runtime.Task>;
        spawnAwait(method: 'api::getPoisInStreet', args: [gc.core.node<gc.mengplaz.StreetRecordProvider>], pollEvery?: number, signal?: globalThis.AbortSignal): Promise<globalThis.Array<gc.mengplaz.POIRecordRef>>;
        call(method: 'api::searchStreet', args: [string], signal?: globalThis.AbortSignal): Promise<globalThis.Array<gc.mengplaz.StreetRecordRef>>;
        spawn(method: 'api::searchStreet', args: [string], signal?: globalThis.AbortSignal): Promise<gc.runtime.Task>;
        spawnAwait(method: 'api::searchStreet', args: [string], pollEvery?: number, signal?: globalThis.AbortSignal): Promise<globalThis.Array<gc.mengplaz.StreetRecordRef>>;
        call(method: 'api::getPois', args?: undefined, signal?: globalThis.AbortSignal): Promise<globalThis.Array<gc.api.POIFeatures>>;
        spawn(method: 'api::getPois', args?: undefined, signal?: globalThis.AbortSignal): Promise<gc.runtime.Task>;
        spawnAwait(method: 'api::getPois', args?: undefined, pollEvery?: number, signal?: globalThis.AbortSignal): Promise<globalThis.Array<gc.api.POIFeatures>>;
        call(method: 'api::getPoisByGeo', args: [gc.core.geo], signal?: globalThis.AbortSignal): Promise<gc.mengplaz.POIRecordRef | null>;
        spawn(method: 'api::getPoisByGeo', args: [gc.core.geo], signal?: globalThis.AbortSignal): Promise<gc.runtime.Task>;
        spawnAwait(method: 'api::getPoisByGeo', args: [gc.core.geo], pollEvery?: number, signal?: globalThis.AbortSignal): Promise<gc.mengplaz.POIRecordRef | null>;
        call(method: 'api::getGoldenRecordDetails', args: [gc.core.node<gc.golden.GoldenPointOfInterest>], signal?: globalThis.AbortSignal): Promise<gc.api.GoldenRecordDetails>;
        spawn(method: 'api::getGoldenRecordDetails', args: [gc.core.node<gc.golden.GoldenPointOfInterest>], signal?: globalThis.AbortSignal): Promise<gc.runtime.Task>;
        spawnAwait(method: 'api::getGoldenRecordDetails', args: [gc.core.node<gc.golden.GoldenPointOfInterest>], pollEvery?: number, signal?: globalThis.AbortSignal): Promise<gc.api.GoldenRecordDetails>;
        call(method: 'api::getLinkedRecordDetails', args: [gc.core.node<gc.mengplaz.POIRecordProvider>], signal?: globalThis.AbortSignal): Promise<gc.api.LinkedRecordsDetails | null>;
        spawn(method: 'api::getLinkedRecordDetails', args: [gc.core.node<gc.mengplaz.POIRecordProvider>], signal?: globalThis.AbortSignal): Promise<gc.runtime.Task>;
        spawnAwait(method: 'api::getLinkedRecordDetails', args: [gc.core.node<gc.mengplaz.POIRecordProvider>], pollEvery?: number, signal?: globalThis.AbortSignal): Promise<gc.api.LinkedRecordsDetails | null>;
        call(method: 'api::getPoiRecordRef', args: [gc.core.node<gc.mengplaz.POIRecordProvider>], signal?: globalThis.AbortSignal): Promise<gc.mengplaz.POIRecordRef>;
        spawn(method: 'api::getPoiRecordRef', args: [gc.core.node<gc.mengplaz.POIRecordProvider>], signal?: globalThis.AbortSignal): Promise<gc.runtime.Task>;
        spawnAwait(method: 'api::getPoiRecordRef', args: [gc.core.node<gc.mengplaz.POIRecordProvider>], pollEvery?: number, signal?: globalThis.AbortSignal): Promise<gc.mengplaz.POIRecordRef>;
        call(method: 'api::getGoldenRecordRefByUid', args: [string], signal?: globalThis.AbortSignal): Promise<gc.mengplaz.POIRecordRef | null>;
        spawn(method: 'api::getGoldenRecordRefByUid', args: [string], signal?: globalThis.AbortSignal): Promise<gc.runtime.Task>;
        spawnAwait(method: 'api::getGoldenRecordRefByUid', args: [string], pollEvery?: number, signal?: globalThis.AbortSignal): Promise<gc.mengplaz.POIRecordRef | null>;
        call(method: 'api::getSources', args?: undefined, signal?: globalThis.AbortSignal): Promise<globalThis.Array<gc.api.SourceRef>>;
        spawn(method: 'api::getSources', args?: undefined, signal?: globalThis.AbortSignal): Promise<gc.runtime.Task>;
        spawnAwait(method: 'api::getSources', args?: undefined, pollEvery?: number, signal?: globalThis.AbortSignal): Promise<globalThis.Array<gc.api.SourceRef>>;
        call(method: 'api::reconcile', args: [gc.core.node<gc.mengplaz.DataSource>], signal?: globalThis.AbortSignal): Promise<unknown>;
        spawn(method: 'api::reconcile', args: [gc.core.node<gc.mengplaz.DataSource>], signal?: globalThis.AbortSignal): Promise<gc.runtime.Task>;
        spawnAwait(method: 'api::reconcile', args: [gc.core.node<gc.mengplaz.DataSource>], pollEvery?: number, signal?: globalThis.AbortSignal): Promise<unknown>;
        call(method: 'api::getReconciliationReport', args: [gc.core.node<gc.mengplaz.DataSource>], signal?: globalThis.AbortSignal): Promise<gc.mengplaz.ReconciliationReport | null>;
        spawn(method: 'api::getReconciliationReport', args: [gc.core.node<gc.mengplaz.DataSource>], signal?: globalThis.AbortSignal): Promise<gc.runtime.Task>;
        spawnAwait(method: 'api::getReconciliationReport', args: [gc.core.node<gc.mengplaz.DataSource>], pollEvery?: number, signal?: globalThis.AbortSignal): Promise<gc.mengplaz.ReconciliationReport | null>;
        call(method: 'api::getMatchCandidateDetails', args: [globalThis.Array<gc.mengplaz.CandidateMatch<gc.core.node<gc.mengplaz.POIRecordProvider>>>], signal?: globalThis.AbortSignal): Promise<globalThis.Array<gc.api.MatchCandidateDetail>>;
        spawn(method: 'api::getMatchCandidateDetails', args: [globalThis.Array<gc.mengplaz.CandidateMatch<gc.core.node<gc.mengplaz.POIRecordProvider>>>], signal?: globalThis.AbortSignal): Promise<gc.runtime.Task>;
        spawnAwait(method: 'api::getMatchCandidateDetails', args: [globalThis.Array<gc.mengplaz.CandidateMatch<gc.core.node<gc.mengplaz.POIRecordProvider>>>], pollEvery?: number, signal?: globalThis.AbortSignal): Promise<globalThis.Array<gc.api.MatchCandidateDetail>>;
        call(method: 'api::searchByItem', args: [gc.mengplaz.SearchItem], signal?: globalThis.AbortSignal): Promise<gc.mengplaz.SearchResult>;
        spawn(method: 'api::searchByItem', args: [gc.mengplaz.SearchItem], signal?: globalThis.AbortSignal): Promise<gc.runtime.Task>;
        spawnAwait(method: 'api::searchByItem', args: [gc.mengplaz.SearchItem], pollEvery?: number, signal?: globalThis.AbortSignal): Promise<gc.mengplaz.SearchResult>;
        call(method: 'api::getRecordByGeopartalID', args: [string], signal?: globalThis.AbortSignal): Promise<gc.mengplaz.POIRecordRef | null>;
        spawn(method: 'api::getRecordByGeopartalID', args: [string], signal?: globalThis.AbortSignal): Promise<gc.runtime.Task>;
        spawnAwait(method: 'api::getRecordByGeopartalID', args: [string], pollEvery?: number, signal?: globalThis.AbortSignal): Promise<gc.mengplaz.POIRecordRef | null>;
        call(method: 'api::getGoldenCities', args?: undefined, signal?: globalThis.AbortSignal): Promise<globalThis.Array<gc.api.GoldenIndex>>;
        spawn(method: 'api::getGoldenCities', args?: undefined, signal?: globalThis.AbortSignal): Promise<gc.runtime.Task>;
        spawnAwait(method: 'api::getGoldenCities', args?: undefined, pollEvery?: number, signal?: globalThis.AbortSignal): Promise<globalThis.Array<gc.api.GoldenIndex>>;
        call(method: 'api::getGoldenStreetsByCityId', args: [string], signal?: globalThis.AbortSignal): Promise<globalThis.Array<gc.api.GoldenIndex>>;
        spawn(method: 'api::getGoldenStreetsByCityId', args: [string], signal?: globalThis.AbortSignal): Promise<gc.runtime.Task>;
        spawnAwait(method: 'api::getGoldenStreetsByCityId', args: [string], pollEvery?: number, signal?: globalThis.AbortSignal): Promise<globalThis.Array<gc.api.GoldenIndex>>;
        call(method: 'api::getGoldenNumbersByStreetId', args: [string], signal?: globalThis.AbortSignal): Promise<globalThis.Array<gc.api.GoldenIndex>>;
        spawn(method: 'api::getGoldenNumbersByStreetId', args: [string], signal?: globalThis.AbortSignal): Promise<gc.runtime.Task>;
        spawnAwait(method: 'api::getGoldenNumbersByStreetId', args: [string], pollEvery?: number, signal?: globalThis.AbortSignal): Promise<globalThis.Array<gc.api.GoldenIndex>>;
        call(method: 'api::getGoldenRecords', args?: undefined, signal?: globalThis.AbortSignal): Promise<globalThis.Array<gc.mengplaz.POIRecord>>;
        spawn(method: 'api::getGoldenRecords', args?: undefined, signal?: globalThis.AbortSignal): Promise<gc.runtime.Task>;
        spawnAwait(method: 'api::getGoldenRecords', args?: undefined, pollEvery?: number, signal?: globalThis.AbortSignal): Promise<globalThis.Array<gc.mengplaz.POIRecord>>;
        call(method: 'api::openapi', args?: undefined, signal?: globalThis.AbortSignal): Promise<unknown>;
        spawn(method: 'api::openapi', args?: undefined, signal?: globalThis.AbortSignal): Promise<gc.runtime.Task>;
        spawnAwait(method: 'api::openapi', args?: undefined, pollEvery?: number, signal?: globalThis.AbortSignal): Promise<unknown>;
    }
  }
  interface $TypesMap {
    'core::nodeIndexBucket<core::String,core::node<golden::GoldenStreet>>': 0,
    'core::GeoCircle': 0,
    'core::node<caclr::CaclrBuilding>': 0,
    'core::Table<util::GaussianProfileSlot?>': 0,
    'core::str': 0,
    'core::node<caclr::CaclrCity>': 0,
    'core::nodeList$sample$args': 0,
    'core::nodeGeo<core::node<osm::OsmPartialAddress>>': 0,
    'core::t3f': 0,
    'core::float': 0,
    'core::node<osm::OsmAddress>': 0,
    'core::GeoBox': 0,
    'core::Array<runtime::SecurityEntity>': 0,
    'core::nodeIndex<core::String,core::node<caclr::CaclrConstituency>>': 0,
    'core::node<mengplaz::ReconciliationReport?>': 0,
    'core::Map<core::String,runtime::HeaderObject>': 0,
    'core::Tuple<core::int,core::node<osm::OsmPartialAddress>>': 0,
    'core::Array<core::Array<core::String>>': 0,
    'core::nodeIndex$info$args': 0,
    'core::String': 0,
    'core::Array<runtime::Task>': 0,
    'core::Map<errors::MengplazMissmatch,core::Array<mengplaz::SearchResult>>': 0,
    'core::node<bdaddress::BDACity>': 0,
    'core::nodeIndex<core::String,core::node<caclr::CaclrBuilding>>': 0,
    'core::nodeList': 0,
    'core::field': 0,
    'core::Array<caclrLoader::CaclrResponseMunicipalityItem>': 0,
    'core::Array<core::int>': 0,
    'core::node<golden::GoldenCity>': 0,
    'core::SearchResult<core::String,core::node<caclr::CaclrMunicipality>>': 0,
    'core::Array<api::GoldenIndex>': 0,
    'core::nodeIndexBucket<core::String,core::node<bdaddress::BDAStreet>>': 0,
    'core::nodeIndex<core::String,core::node<caclr::CaclrCity>>': 0,
    'core::time': 0,
    'core::Array<core::SearchResult<core::String,core::node<caclr::CaclrConstituency>>>': 0,
    'core::nodeList$info$args': 0,
    'core::Array<runtime::ResponseObject>': 0,
    'core::node<golden::GoldenConstituency>': 0,
    'core::nodeIndexBucket<core::String,core::node<caclr::CaclrMunicipality>>': 0,
    'core::Array<mengplaz::SearchRequest>': 0,
    'core::Tuple<core::int,core::nodeList<core::VectorLeaf>>': 0,
    'core::SearchResult<core::String,core::node<bdaddress::BDACity>>': 0,
    'core::Array<core::SearchResult<core::String,core::node<caclr::CaclrBuilding>>>': 0,
    'core::SearchResult<core::String,core::node<golden::GoldenCanton>>': 0,
    'core::Map<core::String,core::any?>': 0,
    'core::Array<runtime::DayOfWeek>': 0,
    'core::Date': 0,
    'core::Array<runtime::Variable>': 0,
    'core::Array<caclrLoader::CaclrResponseBuildingItem>': 0,
    'core::Table$applyMappings$args': 0,
    'core::ErrorFrame': 0,
    'core::nodeList<core::nodeList<core::VectorLeaf>>': 0,
    'core::node<mengplaz::POIRecordProvider>': 0,
    'core::TimeZone': 0,
    'core::node<caclr::CaclrMunicipality>': 0,
    'core::Table<core::Tuple<core::time,core::any?>>': 0,
    'core::nodeIndex<core::String,core::node<caclr::CaclrMunicipality>>': 0,
    'core::Tuple<core::geo,core::any?>': 0,
    'core::Array<core::NodeInfo>': 0,
    'core::Array<core::Map<core::String,core::any?>>': 0,
    'core::GeoPoly': 0,
    'core::node<trafic::Endpoint>': 0,
    'core::Map<core::String,core::String>': 0,
    'core::null': 0,
    'core::t4f': 0,
    'core::node': 0,
    'core::SearchResult<core::String,core::node<caclr::CaclrBuilding>>': 0,
    'core::TensorType': 0,
    'core::nodeIndex<core::String,core::node<mengplaz::DataSource>>': 0,
    'core::Tuple<core::geo,core::node<caclr::CaclrBuilding>>': 0,
    'core::Array<core::SearchResult>': 0,
    'core::nodeTime$sample$args': 0,
    'core::Tuple<core::geo,core::node<osm::OsmAddress>>': 0,
    'core::Array<core::SearchResult<core::String,core::node<bdaddress::BDAStreet>>>': 0,
    'core::Array<trafic::Traffic>': 0,
    'core::Array<core::Array<mengplaz::SearchResult>>': 0,
    'core::nodeIndex<core::String,core::node<caclr::CaclrCanton>>': 0,
    'core::ErrorCode': 0,
    'core::node<bdaddress::BDAStreet>': 0,
    'core::node<osm::OsmPartialAddress>': 0,
    'core::Array<mengplaz::POIFullRecordRef>': 0,
    'core::node<caclr::CaclrConstituency>': 0,
    'core::Array<runtime::Permission>': 0,
    'core::Map<core::String,runtime::PathItemObject>': 0,
    'core::nodeGeo$sample$args': 0,
    'core::Array<caclrLoader::CaclrResponseCantonItem>': 0,
    'core::Array<core::TableColumnMapping>': 0,
    'core::Tuple<core::float,core::any?>': 0,
    'core::Tuple<core::geo,core::node<osm::OsmPartialAddress>>': 0,
    'core::Table': 0,
    'core::Array<core::NodeInfo<core::geo>>': 0,
    'core::MathConstants': 0,
    'core::Array<bdAddressLoader::BDAddressLine>': 0,
    'core::Array<io::CsvColumnStatistics>': 0,
    'core::Array<core::node<caclr::CaclrBuilding>>': 0,
    'core::bool': 0,
    'core::node$resolve_all$args': 0,
    'core::SearchResult<core::String,core::node<caclr::CaclrConstituency>>': 0,
    'core::Array<runtime::UserGroupPolicy>': 0,
    'core::Array<mengplaz::CandidateMatch<core::node<mengplaz::POIRecordProvider>>>': 0,
    'core::nodeIndexBucket<core::String,core::node<golden::GoldenCity>>': 0,
    'core::Array<mengplaz::Match<core::node<golden::GoldenStreet>>>': 0,
    'core::Tuple<core::geo,core::node<golden::GoldenPointOfInterest>>': 0,
    'core::nodeIndexBucket<core::String,core::node<bdaddress::BDAMunicipality>>': 0,
    'core::nodeGeo<core::node<golden::GoldenPointOfInterest>>': 0,
    'core::Array<runtime::Frame>': 0,
    'core::duration': 0,
    'core::nodeIndex<core::String,core::node<golden::GoldenConstituency>>': 0,
    'core::Array<mengplaz::Match<core::node<golden::GoldenCity>>>': 0,
    'core::Array<caclrLoader::CaclrResponseStreetItem>': 0,
    'core::Array': 0,
    'core::Array<io::File>': 0,
    'core::Array<core::String>': 0,
    'core::nodeIndex<core::String,core::node<bdaddress::BDAStreet>>': 0,
    'core::SearchResult<core::String,core::node<golden::GoldenCity>>': 0,
    'core::Map': 0,
    'core::nodeIndexBucket<core::String,core::node<caclr::CaclrCity>>': 0,
    'core::node<caclr::CaclrToken?>': 0,
    'core::any': 0,
    'core::char': 0,
    'core::Array<runtime::PathItemObject>': 0,
    'core::node<bdaddress::BDAddress>': 0,
    'core::Array<core::SearchResult<core::String,core::node<golden::GoldenMunicipality>>>': 0,
    'core::nodeList<core::node<osm::OsmAddress>>': 0,
    'core::t2': 0,
    'core::nodeIndex<core::String,core::node<caclr::CaclrStreet>>': 0,
    'core::node<bdaddress::BDAMunicipality>': 0,
    'core::nodeIndex<core::String,core::node<golden::GoldenCity>>': 0,
    'core::SearchResult': 0,
    'core::nodeIndexBucket<core::String,core::node<golden::GoldenMunicipality>>': 0,
    'core::function': 0,
    'core::Map<core::String,core::int>': 0,
    'core::Array<mengplaz::Alias>': 0,
    'core::Map<core::String,runtime::UserCredential>': 0,
    'core::nodeTime$info$args': 0,
    'core::node<golden::GoldenPointOfInterest>': 0,
    'core::NodeInfo': 0,
    'core::Array<core::float>': 0,
    'core::nodeGeo<core::node<caclr::CaclrBuilding>>': 0,
    'core::Array<runtime::DateTuple>': 0,
    'core::Tuple<core::time,trafic::Traffic>': 0,
    'core::Array<core::field>': 0,
    'core::node<mengplaz::DataSource>': 0,
    'core::Array<util::Quantizer>': 0,
    'core::VectorIndex': 0,
    'core::nodeIndex<core::String,core::node<trafic::Endpoint>>': 0,
    'core::Tuple<core::int,core::node<bdaddress::BDAddress>>': 0,
    'core::nodeIndexBucket<core::String,core::node<caclr::CaclrCanton>>': 0,
    'core::Array<core::SearchResult<core::String,core::node<caclr::CaclrStreet>>>': 0,
    'core::SearchResult<core::String,core::node<bdaddress::BDAMunicipality>>': 0,
    'core::nodeTime<trafic::Traffic>': 0,
    'core::Array<util::HistogramBin>': 0,
    'core::Array<runtime::UserCredential>': 0,
    'core::DurationUnit': 0,
    'core::nodeIndexBucket<core::String,core::node<golden::GoldenPointOfInterest>>': 0,
    'core::nodeIndex<core::String,core::node<bdaddress::BDAddress>>': 0,
    'core::nodeIndexBucket<core::String,core::node<trafic::Endpoint>>': 0,
    'core::SearchResult<core::String,core::node<golden::GoldenMunicipality>>': 0,
    'core::Array<runtime::SchemaObject>': 0,
    'core::nodeIndex<core::String,core::node<golden::GoldenStreet>>': 0,
    'core::nodeList<core::node<osm::OsmPartialAddress>>': 0,
    'core::Array<core::int?>': 0,
    'core::nodeTime': 0,
    'core::Array<core::NodeInfo<core::time>>': 0,
    'core::nodeIndexBucket': 0,
    'core::Array<core::node?>': 0,
    'core::Tuple<core::int,core::node<bdaddress::BDAStreet>>': 0,
    'core::SearchResult<core::String,core::node<caclr::CaclrCity>>': 0,
    'core::Array<runtime::Role>': 0,
    'core::FloatPrecision': 0,
    'core::Array<mengplaz::POIRecordRef>': 0,
    'core::nodeGeo<core::node<osm::OsmAddress>>': 0,
    'core::t3': 0,
    'core::nodeIndex<core::String,core::node<golden::GoldenCanton>>': 0,
    'core::Array<runtime::MediaTypeObject>': 0,
    'core::Array<core::char>': 0,
    'core::Table<core::Tuple<core::float,core::any?>>': 0,
    'core::Tensor': 0,
    'core::geo': 0,
    'core::node<caclr::CaclrCanton>': 0,
    'core::nodeIndexBucket<core::String,core::node<golden::GoldenConstituency>>': 0,
    'core::NodeInfo<core::geo>': 0,
    'core::SearchResult<core::String,core::node<trafic::Endpoint>>': 0,
    'core::nodeIndexBucket<core::String,core::node<bdaddress::BDACity>>': 0,
    'core::Buffer': 0,
    'core::Tuple<core::int,core::VectorLeaf>': 0,
    'core::Array<core::any>': 0,
    'core::nodeIndex<core::String,core::node<golden::GoldenPointOfInterest>>': 0,
    'core::Array<core::nodeTime>': 0,
    'core::SearchResult<core::String,core::node<caclr::CaclrStreet>>': 0,
    'core::Array<core::ErrorFrame>': 0,
    'core::Array<core::SearchResult<core::String,core::node<bdaddress::BDAddress>>>': 0,
    'core::Tuple<core::time,core::any?>': 0,
    'core::Array<core::SearchResult<core::String,core::node<mengplaz::DataSource>>>': 0,
    'core::Array<core::SearchResult<core::String,core::node<golden::GoldenStreet>>>': 0,
    'core::Array<core::node<mengplaz::POIRecordProvider>>': 0,
    'core::nodeIndex$search_closest$args': 0,
    'core::TableColumnMapping': 0,
    'core::Map<core::String,runtime::ResponseObject>': 0,
    'core::SearchResult<core::String,core::node<golden::GoldenPointOfInterest>>': 0,
    'core::nodeGeo<core::node<bdaddress::BDAddress>>': 0,
    'core::Array<api::MatchCandidateDetail>': 0,
    'core::Array<caclrLoader::CaclrResponseCityItem>': 0,
    'core::nodeList<core::node<bdaddress::BDAddress>>': 0,
    'core::Map<core::String,runtime::MediaTypeObject>': 0,
    'core::Map<core::any,core::int>': 0,
    'core::type': 0,
    'core::SamplingMode': 0,
    'core::Array<core::SearchResult<core::String,core::node<caclr::CaclrCity>>>': 0,
    'core::Array<core::SearchResult<core::String,core::node<golden::GoldenConstituency>>>': 0,
    'core::nodeIndexBucket<core::String,core::node<bdaddress::BDAddress>>': 0,
    'core::Map<core::String,core::geo>': 0,
    'core::SearchResult<core::String,core::node<bdaddress::BDAStreet>>': 0,
    'core::nodeIndex$sample$args': 0,
    'core::Error': 0,
    'core::SearchResult<core::String,core::node<caclr::CaclrCanton>>': 0,
    'core::Array<runtime::PeriodicTask>': 0,
    'core::Array<core::SearchResult<core::String,core::node<bdaddress::BDAMunicipality>>>': 0,
    'core::Vector': 0,
    'core::SearchResult<core::String,core::node<golden::GoldenStreet>>': 0,
    'core::node<mengplaz::StreetRecordProvider>': 0,
    'core::nodeIndexBucket<core::String,core::node<mengplaz::DataSource>>': 0,
    'core::Array<core::nodeIndex>': 0,
    'core::node<golden::GoldenMunicipality>': 0,
    'core::Array<mengplaz::POIRecord>': 0,
    'core::NodeInfo<core::time>': 0,
    'core::nodeIndex': 0,
    'core::CalendarUnit': 0,
    'core::Array<core::SearchResult<core::String,core::node<golden::GoldenCity>>>': 0,
    'core::Array<core::SearchResult<core::String,core::node<bdaddress::BDACity>>>': 0,
    'core::nodeList<core::VectorLeaf>': 0,
    'core::Tuple<core::geo,core::node<bdaddress::BDAddress>>': 0,
    'core::node<golden::GoldenCanton>': 0,
    'core::nodeIndexBucket<core::String,core::node<golden::GoldenCanton>>': 0,
    'core::Array<runtime::Job>': 0,
    'core::nodeIndexBucket<core::String,core::node<caclr::CaclrBuilding>>': 0,
    'core::SearchResult<core::String,core::node<golden::GoldenConstituency>>': 0,
    'core::NodeInfo<core::int>': 0,
    'core::Array<api::POIFeatures>': 0,
    'core::Array<core::SearchResult<core::String,core::node<golden::GoldenCanton>>>': 0,
    'core::Array<api::SourceRef>': 0,
    'core::Array<mengplaz::SearchItem>': 0,
    'core::Array<core::nodeGeo>': 0,
    'core::TensorDistance': 0,
    'core::Array<core::SearchResult<core::String,core::node<trafic::Endpoint>>>': 0,
    'core::node<golden::GoldenStreet>': 0,
    'core::Tuple': 0,
    'core::SortOrder': 0,
    'core::nodeIndex<core::String,core::node<bdaddress::BDACity>>': 0,
    'core::nodeIndex<core::String,core::node<bdaddress::BDAMunicipality>>': 0,
    'core::nodeIndexBucket<core::String,core::node<caclr::CaclrStreet>>': 0,
    'core::Array<caclrLoader::CaclrAlias>': 0,
    'core::nodeGeo': 0,
    'core::Array<core::nodeList>': 0,
    'core::Array<mengplaz::StreetRecordRef>': 0,
    'core::nodeTimeCursor': 0,
    'core::Tuple<core::int,core::any?>': 0,
    'core::int': 0,
    'core::nodeList<core::node<bdaddress::BDAStreet>>': 0,
    'core::Array<core::SearchResult<core::String,core::node<golden::GoldenPointOfInterest>>>': 0,
    'core::Map<core::String,runtime::SchemaObject>': 0,
    'core::Array<core::SearchResult<core::String,core::node<caclr::CaclrCanton>>>': 0,
    'core::t2f': 0,
    'core::Array<runtime::HeaderObject>': 0,
    'core::Tuple<core::int,core::node<osm::OsmAddress>>': 0,
    'core::SearchResult<core::String,core::node<mengplaz::DataSource>>': 0,
    'core::nodeGeo$info$args': 0,
    'core::Array<mengplaz::SearchResult>': 0,
    'core::Array<mengplaz::BuildingMatch<core::node<golden::GoldenPointOfInterest>>>': 0,
    'core::SearchResult<core::String,core::node<bdaddress::BDAddress>>': 0,
    'core::VectorLeaf': 0,
    'core::nodeIndex<core::String,core::node<golden::GoldenMunicipality>>': 0,
    'core::Array<core::geo>': 0,
    'core::Array<core::any?>': 0,
    'core::Array<core::SearchResult<core::String,core::node<caclr::CaclrMunicipality>>>': 0,
    'core::nodeIndexBucket<core::String,core::node<caclr::CaclrConstituency>>': 0,
    'core::Array<core::NodeInfo<core::int>>': 0,
    'core::node<caclr::CaclrStreet>': 0,
    'core::t4': 0,
    'runtime::Runtime': 0,
    'runtime::User$tokenLogin$args': 0,
    'runtime::ChildProcess': 0,
    'runtime::User$setPassword$args': 0,
    'runtime::Scheduler$deactivate$args': 0,
    'runtime::Periodicity': 0,
    'runtime::Scheduler$list$args': 0,
    'runtime::User$logout$args': 0,
    'runtime::User$current$args': 0,
    'runtime::Debug$all$args': 0,
    'runtime::UserGroupPolicy': 0,
    'runtime::Variable': 0,
    'runtime::OpenApiV3': 0,
    'runtime::DayOfWeek': 0,
    'runtime::User$permissions$args': 0,
    'runtime::OperationObject': 0,
    'runtime::Runtime$abi$args': 0,
    'runtime::License': 0,
    'runtime::FixedPeriodicity': 0,
    'runtime::SchemaFormat': 0,
    'runtime::MonthlyPeriodicity': 0,
    'runtime::RuntimeInfo': 0,
    'runtime::UserGroupPolicyType': 0,
    'runtime::LogDataUsage': 0,
    'runtime::MergeStrategy': 0,
    'runtime::SecurityFields$get$args': 0,
    'runtime::LicenseType': 0,
    'runtime::Debug': 0,
    'runtime::Scheduler': 0,
    'runtime::SecurityFields': 0,
    'runtime::MediaTypeObject': 0,
    'runtime::Log': 0,
    'runtime::Task$is_running$args': 0,
    'runtime::InfoObject': 0,
    'runtime::Debug$resume$args': 0,
    'runtime::SecurityPolicy': 0,
    'runtime::Task': 0,
    'runtime::OpenIDConnect$config$args': 0,
    'runtime::OpenApi$v3$args': 0,
    'runtime::UserGroup': 0,
    'runtime::SchemaObject': 0,
    'runtime::Role$all$args': 0,
    'runtime::YearlyPeriodicity': 0,
    'runtime::System': 0,
    'runtime::Task$running$args': 0,
    'runtime::DateTuple': 0,
    'runtime::Role': 0,
    'runtime::Scheduler$add$args': 0,
    'runtime::ResponseObject': 0,
    'runtime::Runtime$root$args': 0,
    'runtime::User': 0,
    'runtime::Job': 0,
    'runtime::SchemaType': 0,
    'runtime::SecurityFields$set$args': 0,
    'runtime::Permission': 0,
    'runtime::Month': 0,
    'runtime::WeeklyPeriodicity': 0,
    'runtime::Task$history$args': 0,
    'runtime::Task$cancel$args': 0,
    'runtime::Scheduler$find$args': 0,
    'runtime::ComponentsObject': 0,
    'runtime::Runtime$info$args': 0,
    'runtime::PeriodicTask': 0,
    'runtime::PeriodicOptions': 0,
    'runtime::Debug$get$args': 0,
    'runtime::ChildProcessResult': 0,
    'runtime::UserCredential': 0,
    'runtime::Permission$all$args': 0,
    'runtime::DailyPeriodicity': 0,
    'runtime::User$login$args': 0,
    'runtime::Frame': 0,
    'runtime::Scheduler$activate$args': 0,
    'runtime::RequestBodyObject': 0,
    'runtime::User$renew$args': 0,
    'runtime::HeaderObject': 0,
    'runtime::ResponseCode': 0,
    'runtime::TaskStatus': 0,
    'runtime::OpenApi': 0,
    'runtime::PathItemObject': 0,
    'runtime::SecurityEntity$set$args': 0,
    'runtime::OpenIDConnect': 0,
    'runtime::SecurityEntity$all$args': 0,
    'runtime::OpenApiVersion': 0,
    'runtime::User$me$args': 0,
    'runtime::LogLevel': 0,
    'runtime::SecurityEntity': 0,
    'io::HttpResponse': 0,
    'io::GcbReader': 0,
    'io::CsvStatistics': 0,
    'io::Http': 0,
    'io::GcbReader<golden::GoldenConstituency>': 0,
    'io::HttpResponse<caclrLoader::CaclrResponseStreets>': 0,
    'io::Http<caclrLoader::CaclrResponseBuildings>': 0,
    'io::Reader<bdAddressLoader::BDAddressLine>': 0,
    'io::HttpResponse<caclrLoader::CaclrResponseMunicipalities>': 0,
    'io::Url': 0,
    'io::Reader<golden::GoldenConstituency>': 0,
    'io::CsvFormat': 0,
    'io::JsonWriter': 0,
    'io::CsvAnalysisConfig': 0,
    'io::Csv': 0,
    'io::FileWalker': 0,
    'io::HttpResponse<caclrLoader::CaclrResponseBuildings>': 0,
    'io::Http<caclr::CaclrTokenResponse>': 0,
    'io::JsonReader': 0,
    'io::Http<caclrLoader::CaclrResponseCantons>': 0,
    'io::Http<caclrLoader::CaclrResponseStreets>': 0,
    'io::Smtp': 0,
    'io::HttpResponse<caclrLoader::CaclrResponseCities>': 0,
    'io::Csv$analyze$args': 0,
    'io::CsvWriter': 0,
    'io::SmtpMode': 0,
    'io::Email': 0,
    'io::SmtpAuth': 0,
    'io::GcbWriter': 0,
    'io::HttpMethod': 0,
    'io::Writer': 0,
    'io::Csv$generate$args': 0,
    'io::HttpResponse<caclr::CaclrTokenResponse>': 0,
    'io::HttpResponse<osmLoader::OsmOverpassResponse>': 0,
    'io::Http<core::Array<bdAddressLoader::BDAddressLine>>': 0,
    'io::Reader<core::String>': 0,
    'io::HttpResponse<caclrLoader::CaclrResponseCantons>': 0,
    'io::Writer<golden::GoldenConstituency>': 0,
    'io::CsvReader<bdAddressLoader::BDAddressLine>': 0,
    'io::TextReader': 0,
    'io::Http<osmLoader::OsmOverpassResponse>': 0,
    'io::HttpRequest': 0,
    'io::HttpResponse<core::Array<bdAddressLoader::BDAddressLine>>': 0,
    'io::Json': 0,
    'io::Reader': 0,
    'io::CsvColumnStatistics': 0,
    'io::File': 0,
    'io::Csv$sample$args': 0,
    'io::CsvSharding': 0,
    'io::TextWriter': 0,
    'io::Http<caclrLoader::CaclrResponseMunicipalities>': 0,
    'io::XmlReader': 0,
    'io::Http<caclrLoader::CaclrResponseCities>': 0,
    'io::CsvReader': 0,
    'io::GcbWriter<golden::GoldenConstituency>': 0,
    'util::ProgressTracker': 0,
    'util::Random': 0,
    'util::SlidingWindow': 0,
    'util::LinearQuantizer': 0,
    'util::Stack': 0,
    'util::Histogram': 0,
    'util::Queue': 0,
    'util::QuantizerSlotBound': 0,
    'util::Quantizer': 0,
    'util::CustomQuantizer': 0,
    'util::GaussianProfileSlot': 0,
    'util::Quantizer<core::Array>': 0,
    'util::Crypto': 0,
    'util::HistogramBin': 0,
    'util::Gaussian': 0,
    'util::GaussianProfile': 0,
    'util::Plot': 0,
    'util::QuantizerSlotBound<core::Array>': 0,
    'util::LogQuantizer': 0,
    'util::TimeWindow': 0,
    'util::MultiQuantizer': 0,
    'util::Assert': 0,
    'util::HistogramStats': 0,
    'project::Root': 0,
    'private::promoteRecord$args': 0,
    'private::linkAllRecords$args': 0,
    'private::unlinkRecord$args': 0,
    'private::mergePositionsToGolden$args': 0,
    'private::linkRecords$args': 0,
    'api::GoldenRecordDetails': 0,
    'api::getGoldenCities$args': 0,
    'api::ReconciliationRequest': 0,
    'api::LinkedRecordsDetails': 0,
    'api::getReconciliationReport$args': 0,
    'api::MatchCandidateDetail': 0,
    'api::getPois$args': 0,
    'api::getLinkedRecordDetails$args': 0,
    'api::SourceRef': 0,
    'api::getGoldenStreetsByCityId$args': 0,
    'api::GoldenIndex': 0,
    'api::getGoldenRecords$args': 0,
    'api::getGoldenNumbersByStreetId$args': 0,
    'api::openapi$args': 0,
    'api::getMatchCandidateDetails$args': 0,
    'api::getGoldenRecordRefByUid$args': 0,
    'api::getRecordByGeopartalID$args': 0,
    'api::getPoiRecordRef$args': 0,
    'api::searchByItem$args': 0,
    'api::reconcile$args': 0,
    'api::getPoisByGeo$args': 0,
    'api::searchStreet$args': 0,
    'api::getSources$args': 0,
    'api::POIFeatures': 0,
    'api::getPoisInStreet$args': 0,
    'api::getGoldenRecordDetails$args': 0,
    'bdAddressLoader::BDAddressLine': 0,
    'bdAddressLoader::BDAddressLoader': 0,
    'osmLoader::OSMLoader': 0,
    'osmLoader::OsmOverpassResponse': 0,
    'caclrLoader::CACLRLoader': 0,
    'caclrLoader::CaclrResponseConstituency': 0,
    'caclrLoader::CaclrResponseCities': 0,
    'caclrLoader::CaclrResponseCantons': 0,
    'caclrLoader::CaclrAlias': 0,
    'caclrLoader::CaclrResponseCantonItem': 0,
    'caclrLoader::CaclrResponseCityItem': 0,
    'caclrLoader::CaclrResponseBuildingItem': 0,
    'caclrLoader::CaclrResponseStreetItem': 0,
    'caclrLoader::CaclrResponseMunicipalities': 0,
    'caclrLoader::CaclrResponseStreets': 0,
    'caclrLoader::CaclrResponseBuildings': 0,
    'caclrLoader::CaclrResponseMunicipalityItem': 0,
    'errors::MengplazMissmatch': 0,
    'errors::AddrErr': 0,
    'bdaddress::BDAMunicipality': 0,
    'bdaddress::BDAddress': 0,
    'bdaddress::BDAddressSource': 0,
    'bdaddress::BDAStreet': 0,
    'bdaddress::BDAddressFullRecord': 0,
    'bdaddress::BDACity': 0,
    'caclr::CaclrSource': 0,
    'caclr::CaclrDataStatus': 0,
    'caclr::CaclrAdminStatus': 0,
    'caclr::CaclrCity': 0,
    'caclr::CaclrConstituency': 0,
    'caclr::CaclrToken': 0,
    'caclr::CaclrStreet': 0,
    'caclr::CaclrEurostatsIds': 0,
    'caclr::CaclrMunicipality': 0,
    'caclr::CaclrTokenResponse': 0,
    'caclr::CaclrPOIFullRecord': 0,
    'caclr::CaclrBuilding': 0,
    'caclr::CaclrCanton': 0,
    'golden::GoldenCanton': 0,
    'golden::GoldenPointOfInterest': 0,
    'golden::GoldenMunicipality': 0,
    'golden::GoldenCity': 0,
    'golden::GoldenStreet': 0,
    'golden::GoldenSource': 0,
    'golden::GoldenConstituency': 0,
    'mengplaz::POIRecordRef': 0,
    'mengplaz::StreetRecordProvider': 0,
    'mengplaz::Match': 0,
    'mengplaz::StreetRecord': 0,
    'mengplaz::SearchRequest': 0,
    'mengplaz::CandidateMatch<core::node<mengplaz::POIRecordProvider>>': 0,
    'mengplaz::POIRecordProvider': 0,
    'mengplaz::POIFullRecordRef': 0,
    'mengplaz::SearchItem': 0,
    'mengplaz::SearchParameters': 0,
    'mengplaz::ReconciliationReport': 0,
    'mengplaz::Match<core::node<golden::GoldenCity>>': 0,
    'mengplaz::SearchResult': 0,
    'mengplaz::DataSource': 0,
    'mengplaz::BuildingMatch': 0,
    'mengplaz::Match<core::node<golden::GoldenStreet>>': 0,
    'mengplaz::POIRecord': 0,
    'mengplaz::StreetRecordRef': 0,
    'mengplaz::BuildingMatch<core::node<golden::GoldenPointOfInterest>>': 0,
    'mengplaz::Alias': 0,
    'mengplaz::CandidateMatch': 0,
    'osm::OsmSource': 0,
    'osm::OsmAddress': 0,
    'osm::OsmPartialAddress': 0,
    'trafic::Endpoint': 0,
    'trafic::Traffic': 0,
    'goldenServices::GoldenServices': 0,
    'traffic_service::Traffic_Service': 0,
    'utils::SplitAlphaNumericalString': 0,
  }

  interface $FieldsMap {
    'core::GeoCircle::center': 0,
    'core::GeoCircle::radius': 0,
    'core::nodeList$sample$args::refs': 0,
    'core::nodeList$sample$args::from': 0,
    'core::nodeList$sample$args::to': 0,
    'core::nodeList$sample$args::maxRows': 0,
    'core::nodeList$sample$args::mode': 0,
    'core::nodeList$sample$args::maxDephasing': 0,
    'core::GeoBox::sw': 0,
    'core::GeoBox::ne': 0,
    'core::nodeIndex$info$args::nodes': 0,
    'core::nodeList$info$args::nodes': 0,
    'core::Date::year': 0,
    'core::Date::month': 0,
    'core::Date::day': 0,
    'core::Date::hour': 0,
    'core::Date::minute': 0,
    'core::Date::second': 0,
    'core::Date::microsecond': 0,
    'core::Table$applyMappings$args::table': 0,
    'core::Table$applyMappings$args::mappings': 0,
    'core::ErrorFrame::module': 0,
    'core::ErrorFrame::function': 0,
    'core::ErrorFrame::line': 0,
    'core::ErrorFrame::column': 0,
    'core::GeoPoly::points': 0,
    'core::nodeTime$sample$args::refs': 0,
    'core::nodeTime$sample$args::from': 0,
    'core::nodeTime$sample$args::to': 0,
    'core::nodeTime$sample$args::maxRows': 0,
    'core::nodeTime$sample$args::mode': 0,
    'core::nodeTime$sample$args::maxDephasing': 0,
    'core::nodeTime$sample$args::tz': 0,
    'core::nodeGeo$sample$args::refs': 0,
    'core::nodeGeo$sample$args::from': 0,
    'core::nodeGeo$sample$args::to': 0,
    'core::nodeGeo$sample$args::maxRows': 0,
    'core::nodeGeo$sample$args::mode': 0,
    'core::node$resolve_all$args::n': 0,
    'core::SearchResult::key': 0,
    'core::SearchResult::value': 0,
    'core::SearchResult::distance': 0,
    'core::nodeTime$info$args::nodes': 0,
    'core::NodeInfo::size': 0,
    'core::NodeInfo::from': 0,
    'core::NodeInfo::to': 0,
    'core::VectorIndex::layers': 0,
    'core::VectorIndex::rng': 0,
    'core::nodeIndexBucket::key': 0,
    'core::nodeIndexBucket::value': 0,
    'core::nodeIndexBucket::next': 0,
    'core::nodeIndex$search_closest$args::i': 0,
    'core::nodeIndex$search_closest$args::key': 0,
    'core::nodeIndex$search_closest$args::max': 0,
    'core::TableColumnMapping::column': 0,
    'core::TableColumnMapping::extractors': 0,
    'core::nodeIndex$sample$args::refs': 0,
    'core::nodeIndex$sample$args::from': 0,
    'core::nodeIndex$sample$args::maxRows': 0,
    'core::nodeIndex$sample$args::mode': 0,
    'core::Error::message': 0,
    'core::Error::stack': 0,
    'core::Vector::buffer': 0,
    'core::Tuple::x': 0,
    'core::Tuple::y': 0,
    'core::nodeTimeCursor::n': 0,
    'core::nodeTimeCursor::req_time': 0,
    'core::nodeGeo$info$args::nodes': 0,
    'core::VectorLeaf::vector': 0,
    'core::VectorLeaf::list': 0,
    'core::VectorLeaf::i': 0,
    'core::VectorLeaf::value': 0,
    'runtime::User$tokenLogin$args::token': 0,
    'runtime::User$tokenLogin$args::use_cookie': 0,
    'runtime::ChildProcess::pid': 0,
    'runtime::User$setPassword$args::name': 0,
    'runtime::User$setPassword$args::pass': 0,
    'runtime::Scheduler$deactivate$args::function': 0,
    'runtime::UserGroupPolicy::group_id': 0,
    'runtime::UserGroupPolicy::type': 0,
    'runtime::Variable::name': 0,
    'runtime::Variable::value': 0,
    'runtime::OpenApiV3::openapi': 0,
    'runtime::OpenApiV3::info': 0,
    'runtime::OpenApiV3::paths': 0,
    'runtime::OpenApiV3::components': 0,
    'runtime::OperationObject::requestBody': 0,
    'runtime::OperationObject::responses': 0,
    'runtime::License::name': 0,
    'runtime::License::start': 0,
    'runtime::License::end': 0,
    'runtime::License::company': 0,
    'runtime::License::max_memory': 0,
    'runtime::License::extra_1': 0,
    'runtime::License::extra_2': 0,
    'runtime::License::type': 0,
    'runtime::FixedPeriodicity::every': 0,
    'runtime::MonthlyPeriodicity::days': 0,
    'runtime::MonthlyPeriodicity::daily': 0,
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
    'runtime::LogDataUsage::read_bytes': 0,
    'runtime::LogDataUsage::read_hits': 0,
    'runtime::LogDataUsage::read_wasted': 0,
    'runtime::LogDataUsage::write_bytes': 0,
    'runtime::LogDataUsage::write_hits': 0,
    'runtime::LogDataUsage::cache_bytes': 0,
    'runtime::LogDataUsage::cache_hits': 0,
    'runtime::Debug::id': 0,
    'runtime::Debug::frames': 0,
    'runtime::Debug::root': 0,
    'runtime::SecurityFields::email': 0,
    'runtime::SecurityFields::name': 0,
    'runtime::SecurityFields::first_name': 0,
    'runtime::SecurityFields::last_name': 0,
    'runtime::SecurityFields::roles': 0,
    'runtime::SecurityFields::groups': 0,
    'runtime::MediaTypeObject::schema': 0,
    'runtime::Log::level': 0,
    'runtime::Log::time': 0,
    'runtime::Log::user_id': 0,
    'runtime::Log::id': 0,
    'runtime::Log::id2': 0,
    'runtime::Log::src': 0,
    'runtime::Log::data': 0,
    'runtime::Task$is_running$args::task_id': 0,
    'runtime::InfoObject::title': 0,
    'runtime::InfoObject::version': 0,
    'runtime::Debug$resume$args::id': 0,
    'runtime::SecurityPolicy::entities': 0,
    'runtime::SecurityPolicy::credentials': 0,
    'runtime::SecurityPolicy::fields': 0,
    'runtime::SecurityPolicy::keys': 0,
    'runtime::SecurityPolicy::keys_last_refresh': 0,
    'runtime::Task::user_id': 0,
    'runtime::Task::task_id': 0,
    'runtime::Task::mod': 0,
    'runtime::Task::type': 0,
    'runtime::Task::fun': 0,
    'runtime::Task::creation': 0,
    'runtime::Task::start': 0,
    'runtime::Task::duration': 0,
    'runtime::Task::status': 0,
    'runtime::Task::progress': 0,
    'runtime::UserGroup::id': 0,
    'runtime::UserGroup::name': 0,
    'runtime::UserGroup::activated': 0,
    'runtime::SchemaObject::$ref': 0,
    'runtime::SchemaObject::type': 0,
    'runtime::SchemaObject::format': 0,
    'runtime::SchemaObject::nullable': 0,
    'runtime::SchemaObject::properties': 0,
    'runtime::SchemaObject::required': 0,
    'runtime::SchemaObject::items': 0,
    'runtime::SchemaObject::oneOf': 0,
    'runtime::SchemaObject::allOf': 0,
    'runtime::SchemaObject::minItems': 0,
    'runtime::SchemaObject::maxItems': 0,
    'runtime::SchemaObject::enum': 0,
    'runtime::SchemaObject::additionalProperties': 0,
    'runtime::YearlyPeriodicity::dates': 0,
    'runtime::YearlyPeriodicity::timezone': 0,
    'runtime::DateTuple::day': 0,
    'runtime::DateTuple::month': 0,
    'runtime::Role::name': 0,
    'runtime::Role::permissions': 0,
    'runtime::Scheduler$add$args::function': 0,
    'runtime::Scheduler$add$args::periodicity': 0,
    'runtime::Scheduler$add$args::options': 0,
    'runtime::ResponseObject::description': 0,
    'runtime::ResponseObject::headers': 0,
    'runtime::ResponseObject::content': 0,
    'runtime::User::id': 0,
    'runtime::User::name': 0,
    'runtime::User::activated': 0,
    'runtime::User::full_name': 0,
    'runtime::User::email': 0,
    'runtime::User::role': 0,
    'runtime::User::groups': 0,
    'runtime::User::groups_flags': 0,
    'runtime::User::external': 0,
    'runtime::Job::function': 0,
    'runtime::Job::arguments': 0,
    'runtime::SecurityFields$set$args::f': 0,
    'runtime::Permission::name': 0,
    'runtime::Permission::description': 0,
    'runtime::WeeklyPeriodicity::days': 0,
    'runtime::WeeklyPeriodicity::daily': 0,
    'runtime::Task$history$args::offset': 0,
    'runtime::Task$history$args::max': 0,
    'runtime::Task$cancel$args::task_id': 0,
    'runtime::Scheduler$find$args::function': 0,
    'runtime::ComponentsObject::schemas': 0,
    'runtime::PeriodicTask::function': 0,
    'runtime::PeriodicTask::periodicity': 0,
    'runtime::PeriodicTask::options': 0,
    'runtime::PeriodicTask::is_active': 0,
    'runtime::PeriodicTask::next_execution': 0,
    'runtime::PeriodicTask::execution_count': 0,
    'runtime::PeriodicOptions::activated': 0,
    'runtime::PeriodicOptions::start': 0,
    'runtime::PeriodicOptions::max_duration': 0,
    'runtime::Debug$get$args::id': 0,
    'runtime::ChildProcessResult::code': 0,
    'runtime::ChildProcessResult::stdout': 0,
    'runtime::ChildProcessResult::stderr': 0,
    'runtime::UserCredential::offset': 0,
    'runtime::UserCredential::pass': 0,
    'runtime::DailyPeriodicity::hour': 0,
    'runtime::DailyPeriodicity::minute': 0,
    'runtime::DailyPeriodicity::second': 0,
    'runtime::DailyPeriodicity::timezone': 0,
    'runtime::User$login$args::credentials': 0,
    'runtime::User$login$args::use_cookie': 0,
    'runtime::Frame::module': 0,
    'runtime::Frame::type': 0,
    'runtime::Frame::function': 0,
    'runtime::Frame::src': 0,
    'runtime::Frame::line': 0,
    'runtime::Frame::column': 0,
    'runtime::Frame::scope': 0,
    'runtime::Scheduler$activate$args::function': 0,
    'runtime::RequestBodyObject::content': 0,
    'runtime::RequestBodyObject::required': 0,
    'runtime::User$renew$args::use_cookie': 0,
    'runtime::HeaderObject::description': 0,
    'runtime::HeaderObject::required': 0,
    'runtime::PathItemObject::description': 0,
    'runtime::PathItemObject::post': 0,
    'runtime::SecurityEntity$set$args::entity': 0,
    'runtime::OpenIDConnect::url': 0,
    'runtime::OpenIDConnect::clientId': 0,
    'io::HttpResponse::status_code': 0,
    'io::HttpResponse::headers': 0,
    'io::HttpResponse::content': 0,
    'io::HttpResponse::error_msg': 0,
    'io::GcbReader::path': 0,
    'io::GcbReader::pos': 0,
    'io::CsvStatistics::header_lines': 0,
    'io::CsvStatistics::separator': 0,
    'io::CsvStatistics::string_delimiter': 0,
    'io::CsvStatistics::decimal_separator': 0,
    'io::CsvStatistics::thousands_separator': 0,
    'io::CsvStatistics::columns': 0,
    'io::CsvStatistics::line_count': 0,
    'io::CsvStatistics::fail_count': 0,
    'io::CsvStatistics::file_count': 0,
    'io::Url::protocol': 0,
    'io::Url::host': 0,
    'io::Url::port': 0,
    'io::Url::path': 0,
    'io::Url::params': 0,
    'io::Url::hash': 0,
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
    'io::JsonWriter::path': 0,
    'io::JsonWriter::append': 0,
    'io::CsvAnalysisConfig::header_lines': 0,
    'io::CsvAnalysisConfig::separator': 0,
    'io::CsvAnalysisConfig::string_delimiter': 0,
    'io::CsvAnalysisConfig::decimal_separator': 0,
    'io::CsvAnalysisConfig::thousands_separator': 0,
    'io::CsvAnalysisConfig::row_limit': 0,
    'io::CsvAnalysisConfig::enumerable_limit': 0,
    'io::CsvAnalysisConfig::date_check_limit': 0,
    'io::CsvAnalysisConfig::date_formats': 0,
    'io::FileWalker::path': 0,
    'io::JsonReader::path': 0,
    'io::JsonReader::pos': 0,
    'io::Smtp::host': 0,
    'io::Smtp::port': 0,
    'io::Smtp::mode': 0,
    'io::Smtp::authenticate': 0,
    'io::Smtp::user': 0,
    'io::Smtp::pass': 0,
    'io::Csv$analyze$args::files': 0,
    'io::Csv$analyze$args::config': 0,
    'io::CsvWriter::path': 0,
    'io::CsvWriter::append': 0,
    'io::CsvWriter::format': 0,
    'io::Email::from': 0,
    'io::Email::subject': 0,
    'io::Email::body': 0,
    'io::Email::body_is_html': 0,
    'io::Email::to': 0,
    'io::Email::cc': 0,
    'io::Email::bcc': 0,
    'io::GcbWriter::path': 0,
    'io::GcbWriter::append': 0,
    'io::Writer::path': 0,
    'io::Writer::append': 0,
    'io::Csv$generate$args::stats': 0,
    'io::TextReader::path': 0,
    'io::TextReader::pos': 0,
    'io::HttpRequest::method': 0,
    'io::HttpRequest::url': 0,
    'io::HttpRequest::headers': 0,
    'io::HttpRequest::body': 0,
    'io::Reader::path': 0,
    'io::Reader::pos': 0,
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
    'io::File::path': 0,
    'io::File::size': 0,
    'io::File::last_modification': 0,
    'io::Csv$sample$args::reader': 0,
    'io::Csv$sample$args::max_lines': 0,
    'io::CsvSharding::id': 0,
    'io::CsvSharding::column': 0,
    'io::CsvSharding::modulo': 0,
    'io::TextWriter::path': 0,
    'io::TextWriter::append': 0,
    'io::XmlReader::path': 0,
    'io::XmlReader::pos': 0,
    'io::CsvReader::path': 0,
    'io::CsvReader::pos': 0,
    'io::CsvReader::format': 0,
    'io::CsvReader::sharding': 0,
    'util::ProgressTracker::start': 0,
    'util::ProgressTracker::total': 0,
    'util::ProgressTracker::counter': 0,
    'util::ProgressTracker::duration': 0,
    'util::ProgressTracker::progress': 0,
    'util::ProgressTracker::speed': 0,
    'util::ProgressTracker::remaining': 0,
    'util::Random::seed': 0,
    'util::Random::v': 0,
    'util::SlidingWindow::values': 0,
    'util::SlidingWindow::span': 0,
    'util::SlidingWindow::sum': 0,
    'util::SlidingWindow::sumsq': 0,
    'util::SlidingWindow::field': 0,
    'util::LinearQuantizer::min': 0,
    'util::LinearQuantizer::max': 0,
    'util::LinearQuantizer::bins': 0,
    'util::LinearQuantizer::open': 0,
    'util::Stack::values': 0,
    'util::Histogram::quantizer': 0,
    'util::Histogram::bins': 0,
    'util::Histogram::nb_rejected': 0,
    'util::Histogram::nb_accepted': 0,
    'util::Histogram::min': 0,
    'util::Histogram::max': 0,
    'util::Histogram::sum': 0,
    'util::Histogram::sumsq': 0,
    'util::Queue::values': 0,
    'util::Queue::capacity': 0,
    'util::QuantizerSlotBound::min': 0,
    'util::QuantizerSlotBound::max': 0,
    'util::QuantizerSlotBound::center': 0,
    'util::CustomQuantizer::min': 0,
    'util::CustomQuantizer::max': 0,
    'util::CustomQuantizer::step_starts': 0,
    'util::CustomQuantizer::open': 0,
    'util::GaussianProfileSlot::sum': 0,
    'util::GaussianProfileSlot::sumsq': 0,
    'util::GaussianProfileSlot::count': 0,
    'util::HistogramBin::bin': 0,
    'util::HistogramBin::count': 0,
    'util::HistogramBin::ratio': 0,
    'util::HistogramBin::cumulative_count': 0,
    'util::HistogramBin::cumulative_ratio': 0,
    'util::Gaussian::sum': 0,
    'util::Gaussian::sumsq': 0,
    'util::Gaussian::count': 0,
    'util::Gaussian::min': 0,
    'util::Gaussian::max': 0,
    'util::GaussianProfile::quantizer': 0,
    'util::GaussianProfile::precision': 0,
    'util::GaussianProfile::bins': 0,
    'util::GaussianProfile::value_min': 0,
    'util::GaussianProfile::nb_rejected': 0,
    'util::LogQuantizer::min': 0,
    'util::LogQuantizer::max': 0,
    'util::LogQuantizer::bins': 0,
    'util::LogQuantizer::open': 0,
    'util::TimeWindow::values': 0,
    'util::TimeWindow::span': 0,
    'util::TimeWindow::sum': 0,
    'util::TimeWindow::sumsq': 0,
    'util::TimeWindow::field': 0,
    'util::MultiQuantizer::quantizers': 0,
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
    'private::promoteRecord$args::record': 0,
    'private::linkAllRecords$args::goldens': 0,
    'private::linkAllRecords$args::others': 0,
    'private::unlinkRecord$args::nOther': 0,
    'private::mergePositionsToGolden$args::others': 0,
    'private::linkRecords$args::nGolden': 0,
    'private::linkRecords$args::nOther': 0,
    'api::GoldenRecordDetails::golden': 0,
    'api::GoldenRecordDetails::associated': 0,
    'api::ReconciliationRequest::source': 0,
    'api::LinkedRecordsDetails::golden': 0,
    'api::LinkedRecordsDetails::associated': 0,
    'api::getReconciliationReport$args::source': 0,
    'api::MatchCandidateDetail::ref': 0,
    'api::MatchCandidateDetail::numberScore': 0,
    'api::MatchCandidateDetail::streetScore': 0,
    'api::MatchCandidateDetail::cityScore': 0,
    'api::MatchCandidateDetail::overallScore': 0,
    'api::MatchCandidateDetail::postcodeScore': 0,
    'api::MatchCandidateDetail::uid': 0,
    'api::MatchCandidateDetail::number': 0,
    'api::MatchCandidateDetail::street': 0,
    'api::MatchCandidateDetail::postcode': 0,
    'api::MatchCandidateDetail::city': 0,
    'api::MatchCandidateDetail::positions': 0,
    'api::getLinkedRecordDetails$args::other': 0,
    'api::SourceRef::ref': 0,
    'api::SourceRef::name': 0,
    'api::getGoldenStreetsByCityId$args::cityId': 0,
    'api::GoldenIndex::id': 0,
    'api::GoldenIndex::name': 0,
    'api::getGoldenNumbersByStreetId$args::streetId': 0,
    'api::getMatchCandidateDetails$args::elements': 0,
    'api::getGoldenRecordRefByUid$args::uid': 0,
    'api::getRecordByGeopartalID$args::id': 0,
    'api::getPoiRecordRef$args::ref': 0,
    'api::searchByItem$args::item': 0,
    'api::reconcile$args::source': 0,
    'api::getPoisByGeo$args::coords': 0,
    'api::searchStreet$args::e': 0,
    'api::POIFeatures::coords': 0,
    'api::POIFeatures::number': 0,
    'api::getPoisInStreet$args::e': 0,
    'api::getGoldenRecordDetails$args::ref': 0,
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
    'osmLoader::OsmOverpassResponse::elements': 0,
    'caclrLoader::CaclrResponseConstituency::code': 0,
    'caclrLoader::CaclrResponseConstituency::name': 0,
    'caclrLoader::CaclrResponseCities::totalCount': 0,
    'caclrLoader::CaclrResponseCities::items': 0,
    'caclrLoader::CaclrResponseCantons::totalCount': 0,
    'caclrLoader::CaclrResponseCantons::items': 0,
    'caclrLoader::CaclrAlias::name': 0,
    'caclrLoader::CaclrAlias::languageCode': 0,
    'caclrLoader::CaclrResponseCantonItem::id': 0,
    'caclrLoader::CaclrResponseCantonItem::code': 0,
    'caclrLoader::CaclrResponseCantonItem::name': 0,
    'caclrLoader::CaclrResponseCantonItem::lastUpdate': 0,
    'caclrLoader::CaclrResponseCantonItem::constituency': 0,
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
    'caclrLoader::CaclrResponseStreets::totalCount': 0,
    'caclrLoader::CaclrResponseStreets::items': 0,
    'caclrLoader::CaclrResponseBuildings::totalCount': 0,
    'caclrLoader::CaclrResponseBuildings::items': 0,
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
    'bdaddress::BDAMunicipality::name': 0,
    'bdaddress::BDAMunicipality::cities': 0,
    'bdaddress::BDAddress::number': 0,
    'bdaddress::BDAddress::postcode': 0,
    'bdaddress::BDAddress::position': 0,
    'bdaddress::BDAddress::id_caclr': 0,
    'bdaddress::BDAddress::id_geoportail': 0,
    'bdaddress::BDAddress::municipatlity': 0,
    'bdaddress::BDAddress::city': 0,
    'bdaddress::BDAddress::street': 0,
    'bdaddress::BDAddress::goldenRef': 0,
    'bdaddress::BDAddressSource::reconciliationReport': 0,
    'bdaddress::BDAStreet::name': 0,
    'bdaddress::BDAStreet::id_caclr': 0,
    'bdaddress::BDAStreet::addresses': 0,
    'bdaddress::BDAddressFullRecord::id_geoportail': 0,
    'bdaddress::BDAddressFullRecord::id_caclr': 0,
    'bdaddress::BDAddressFullRecord::number': 0,
    'bdaddress::BDAddressFullRecord::postcode': 0,
    'bdaddress::BDAddressFullRecord::positions': 0,
    'bdaddress::BDAddressFullRecord::municipatlity': 0,
    'bdaddress::BDAddressFullRecord::city': 0,
    'bdaddress::BDAddressFullRecord::street': 0,
    'bdaddress::BDAddressFullRecord::sourceName': 0,
    'bdaddress::BDAddressFullRecord::goldenRef': 0,
    'bdaddress::BDACity::name': 0,
    'bdaddress::BDACity::streets': 0,
    'caclr::CaclrSource::reconciliationReport': 0,
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
    'caclr::CaclrConstituency::code': 0,
    'caclr::CaclrConstituency::name': 0,
    'caclr::CaclrConstituency::cantons_by_id': 0,
    'caclr::CaclrToken::access_token': 0,
    'caclr::CaclrToken::token_type': 0,
    'caclr::CaclrToken::expires_in': 0,
    'caclr::CaclrToken::scope': 0,
    'caclr::CaclrToken::iss': 0,
    'caclr::CaclrToken::expiry_time': 0,
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
    'caclr::CaclrEurostatsIds::nuts3': 0,
    'caclr::CaclrEurostatsIds::lau1': 0,
    'caclr::CaclrEurostatsIds::lau2': 0,
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
    'caclr::CaclrTokenResponse::access_token': 0,
    'caclr::CaclrTokenResponse::token_type': 0,
    'caclr::CaclrTokenResponse::expires_in': 0,
    'caclr::CaclrTokenResponse::scope': 0,
    'caclr::CaclrTokenResponse::iss': 0,
    'caclr::CaclrPOIFullRecord::id': 0,
    'caclr::CaclrPOIFullRecord::number': 0,
    'caclr::CaclrPOIFullRecord::multipleCode': 0,
    'caclr::CaclrPOIFullRecord::postalCode': 0,
    'caclr::CaclrPOIFullRecord::street': 0,
    'caclr::CaclrPOIFullRecord::city': 0,
    'caclr::CaclrPOIFullRecord::municipality': 0,
    'caclr::CaclrPOIFullRecord::canton': 0,
    'caclr::CaclrPOIFullRecord::constituency': 0,
    'caclr::CaclrPOIFullRecord::administrativeStatus': 0,
    'caclr::CaclrPOIFullRecord::validityStartDate': 0,
    'caclr::CaclrPOIFullRecord::validityEndDate': 0,
    'caclr::CaclrPOIFullRecord::lastUpdate': 0,
    'caclr::CaclrPOIFullRecord::sourceName': 0,
    'caclr::CaclrPOIFullRecord::goldenRef': 0,
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
    'caclr::CaclrCanton::id': 0,
    'caclr::CaclrCanton::code': 0,
    'caclr::CaclrCanton::name': 0,
    'caclr::CaclrCanton::lastUpdate': 0,
    'caclr::CaclrCanton::constituency': 0,
    'caclr::CaclrCanton::municipalities_by_id': 0,
    'golden::GoldenCanton::id': 0,
    'golden::GoldenCanton::name': 0,
    'golden::GoldenCanton::nameAliases': 0,
    'golden::GoldenCanton::lastUpdate': 0,
    'golden::GoldenCanton::constituency': 0,
    'golden::GoldenCanton::municipalities_by_id': 0,
    'golden::GoldenPointOfInterest::uid': 0,
    'golden::GoldenPointOfInterest::number': 0,
    'golden::GoldenPointOfInterest::multipleCode': 0,
    'golden::GoldenPointOfInterest::postCode': 0,
    'golden::GoldenPointOfInterest::positions': 0,
    'golden::GoldenPointOfInterest::lastUpdate': 0,
    'golden::GoldenPointOfInterest::street': 0,
    'golden::GoldenPointOfInterest::linkedRecords': 0,
    'golden::GoldenMunicipality::id': 0,
    'golden::GoldenMunicipality::name': 0,
    'golden::GoldenMunicipality::nameAliases': 0,
    'golden::GoldenMunicipality::lastUpdate': 0,
    'golden::GoldenMunicipality::canton': 0,
    'golden::GoldenMunicipality::cities_by_id': 0,
    'golden::GoldenCity::id': 0,
    'golden::GoldenCity::name': 0,
    'golden::GoldenCity::nameAliases': 0,
    'golden::GoldenCity::lastUpdate': 0,
    'golden::GoldenCity::municipality': 0,
    'golden::GoldenCity::streets_by_id': 0,
    'golden::GoldenStreet::id': 0,
    'golden::GoldenStreet::name': 0,
    'golden::GoldenStreet::nameAliases': 0,
    'golden::GoldenStreet::lastUpdate': 0,
    'golden::GoldenStreet::city': 0,
    'golden::GoldenStreet::pois_by_id': 0,
    'golden::GoldenSource::reconciliationReport': 0,
    'golden::GoldenConstituency::code': 0,
    'golden::GoldenConstituency::name': 0,
    'golden::GoldenConstituency::nameAliases': 0,
    'golden::GoldenConstituency::cantons_by_id': 0,
    'mengplaz::POIRecordRef::ref': 0,
    'mengplaz::POIRecordRef::record': 0,
    'mengplaz::Match::score': 0,
    'mengplaz::Match::elem': 0,
    'mengplaz::StreetRecord::street': 0,
    'mengplaz::StreetRecord::streetAliases': 0,
    'mengplaz::StreetRecord::postcode': 0,
    'mengplaz::StreetRecord::city': 0,
    'mengplaz::StreetRecord::cityAliases': 0,
    'mengplaz::StreetRecord::sourceName': 0,
    'mengplaz::SearchRequest::items': 0,
    'mengplaz::SearchRequest::params': 0,
    'mengplaz::POIFullRecordRef::ref': 0,
    'mengplaz::POIFullRecordRef::record': 0,
    'mengplaz::SearchItem::sourceRecord': 0,
    'mengplaz::SearchItem::number': 0,
    'mengplaz::SearchItem::street': 0,
    'mengplaz::SearchItem::multipleCode': 0,
    'mengplaz::SearchItem::postcode': 0,
    'mengplaz::SearchItem::city': 0,
    'mengplaz::SearchParameters::citySimilarityThreshold': 0,
    'mengplaz::SearchParameters::streetSimilarityThreshold': 0,
    'mengplaz::SearchParameters::buildingSimilarityThreshold': 0,
    'mengplaz::SearchParameters::maxCandidatesPerItem': 0,
    'mengplaz::ReconciliationReport::date': 0,
    'mengplaz::ReconciliationReport::linked': 0,
    'mengplaz::ReconciliationReport::fullMatch': 0,
    'mengplaz::ReconciliationReport::totalProcessed': 0,
    'mengplaz::ReconciliationReport::mismatches': 0,
    'mengplaz::SearchResult::item': 0,
    'mengplaz::SearchResult::candidates': 0,
    'mengplaz::BuildingMatch::overallScore': 0,
    'mengplaz::BuildingMatch::postcodeScore': 0,
    'mengplaz::BuildingMatch::numberScore': 0,
    'mengplaz::BuildingMatch::elem': 0,
    'mengplaz::POIRecord::uid': 0,
    'mengplaz::POIRecord::number': 0,
    'mengplaz::POIRecord::street': 0,
    'mengplaz::POIRecord::streetAliases': 0,
    'mengplaz::POIRecord::postcode': 0,
    'mengplaz::POIRecord::city': 0,
    'mengplaz::POIRecord::cityAliases': 0,
    'mengplaz::POIRecord::positions': 0,
    'mengplaz::POIRecord::sourceName': 0,
    'mengplaz::POIRecord::goldenRef': 0,
    'mengplaz::POIRecord::quality': 0,
    'mengplaz::StreetRecordRef::ref': 0,
    'mengplaz::StreetRecordRef::record': 0,
    'mengplaz::Alias::value': 0,
    'mengplaz::Alias::id': 0,
    'mengplaz::CandidateMatch::cityScore': 0,
    'mengplaz::CandidateMatch::streetScore': 0,
    'mengplaz::CandidateMatch::numberScore': 0,
    'mengplaz::CandidateMatch::postcodeScore': 0,
    'mengplaz::CandidateMatch::overallScore': 0,
    'mengplaz::CandidateMatch::elem': 0,
    'osm::OsmSource::reconciliationReport': 0,
    'osm::OsmAddress::id': 0,
    'osm::OsmAddress::position': 0,
    'osm::OsmAddress::city': 0,
    'osm::OsmAddress::postcode': 0,
    'osm::OsmAddress::street': 0,
    'osm::OsmAddress::number': 0,
    'osm::OsmAddress::ref_caclr': 0,
    'osm::OsmAddress::goldenRef': 0,
    'osm::OsmPartialAddress::id': 0,
    'osm::OsmPartialAddress::position': 0,
    'osm::OsmPartialAddress::city': 0,
    'osm::OsmPartialAddress::postcode': 0,
    'osm::OsmPartialAddress::street': 0,
    'osm::OsmPartialAddress::number': 0,
    'osm::OsmPartialAddress::ref_caclr': 0,
    'osm::OsmPartialAddress::map': 0,
    'trafic::Endpoint::name': 0,
    'trafic::Endpoint::traffic': 0,
    'trafic::Traffic::user': 0,
    'trafic::Traffic::executionTime': 0,
    'traffic_service::Traffic_Service::start': 0,
    'traffic_service::Traffic_Service::endPoint': 0,
    'utils::SplitAlphaNumericalString::alpha': 0,
    'utils::SplitAlphaNumericalString::numerical': 0,
  }

  interface $FunctionsMap {
    'core::nodeList::info': 0,
    'core::nodeList::sample': 0,
    'core::node::resolve_all': 0,
    'core::Table::applyMappings': 0,
    'core::nodeTime::info': 0,
    'core::nodeTime::sample': 0,
    'core::nodeIndex::search_closest': 0,
    'core::nodeIndex::info': 0,
    'core::nodeIndex::sample': 0,
    'core::nodeGeo::info': 0,
    'core::nodeGeo::sample': 0,
    'runtime::Runtime::root': 0,
    'runtime::Runtime::abi': 0,
    'runtime::Runtime::info': 0,
    'runtime::Debug::resume': 0,
    'runtime::Debug::get': 0,
    'runtime::Debug::all': 0,
    'runtime::Scheduler::deactivate': 0,
    'runtime::Scheduler::activate': 0,
    'runtime::Scheduler::find': 0,
    'runtime::Scheduler::list': 0,
    'runtime::Scheduler::add': 0,
    'runtime::SecurityFields::get': 0,
    'runtime::SecurityFields::set': 0,
    'runtime::Task::is_running': 0,
    'runtime::Task::cancel': 0,
    'runtime::Task::history': 0,
    'runtime::Task::running': 0,
    'runtime::Role::all': 0,
    'runtime::User::setPassword': 0,
    'runtime::User::permissions': 0,
    'runtime::User::me': 0,
    'runtime::User::current': 0,
    'runtime::User::renew': 0,
    'runtime::User::logout': 0,
    'runtime::User::tokenLogin': 0,
    'runtime::User::login': 0,
    'runtime::Permission::all': 0,
    'runtime::OpenApi::v3': 0,
    'runtime::OpenIDConnect::config': 0,
    'runtime::SecurityEntity::set': 0,
    'runtime::SecurityEntity::all': 0,
    'io::Csv::sample': 0,
    'io::Csv::analyze': 0,
    'io::Csv::generate': 0,
    'private::promoteRecord': 0,
    'private::linkRecords': 0,
    'private::linkAllRecords': 0,
    'private::unlinkRecord': 0,
    'private::mergePositionsToGolden': 0,
    'api::getPoisInStreet': 0,
    'api::searchStreet': 0,
    'api::getPois': 0,
    'api::getPoisByGeo': 0,
    'api::getGoldenRecordDetails': 0,
    'api::getLinkedRecordDetails': 0,
    'api::getPoiRecordRef': 0,
    'api::getGoldenRecordRefByUid': 0,
    'api::getSources': 0,
    'api::reconcile': 0,
    'api::getReconciliationReport': 0,
    'api::getMatchCandidateDetails': 0,
    'api::searchByItem': 0,
    'api::getRecordByGeopartalID': 0,
    'api::getGoldenCities': 0,
    'api::getGoldenStreetsByCityId': 0,
    'api::getGoldenNumbersByStreetId': 0,
    'api::getGoldenRecords': 0,
    'api::openapi': 0,
  }

  export import GeoCircle = gc.core.GeoCircle;
  export import str = gc.core.str;
  export import t3f = gc.core.t3f;
  export import float = gc.core.float;
  export import GeoBox = gc.core.GeoBox;
  export import String = gc.core.String;
  export import nodeList = gc.core.nodeList;
  export import field = gc.core.field;
  export import time = gc.core.time;
  export import Date = gc.core.Date;
  export import ErrorFrame = gc.core.ErrorFrame;
  export import TimeZone = gc.core.TimeZone;
  export import GeoPoly = gc.core.GeoPoly;
  export import null_ = gc.core.null_;
  export import t4f = gc.core.t4f;
  export import node = gc.core.node;
  export import TensorType = gc.core.TensorType;
  export import ErrorCode = gc.core.ErrorCode;
  export import Table = gc.core.Table;
  export import MathConstants = gc.core.MathConstants;
  export import bool = gc.core.bool;
  export import duration = gc.core.duration;
  export import Array = gc.core.Array;
  export import Map = gc.core.Map;
  export import char = gc.core.char;
  export import t2 = gc.core.t2;
  export import function_ = gc.core.function_;
  export import NodeInfo = gc.core.NodeInfo;
  export import VectorIndex = gc.core.VectorIndex;
  export import DurationUnit = gc.core.DurationUnit;
  export import nodeTime = gc.core.nodeTime;
  export import FloatPrecision = gc.core.FloatPrecision;
  export import t3 = gc.core.t3;
  export import Tensor = gc.core.Tensor;
  export import geo = gc.core.geo;
  export import Buffer = gc.core.Buffer;
  export import TableColumnMapping = gc.core.TableColumnMapping;
  export import type = gc.core.type;
  export import SamplingMode = gc.core.SamplingMode;
  export import Error = gc.core.Error;
  export import Vector = gc.core.Vector;
  export import nodeIndex = gc.core.nodeIndex;
  export import CalendarUnit = gc.core.CalendarUnit;
  export import TensorDistance = gc.core.TensorDistance;
  export import Tuple = gc.core.Tuple;
  export import SortOrder = gc.core.SortOrder;
  export import nodeGeo = gc.core.nodeGeo;
  export import nodeTimeCursor = gc.core.nodeTimeCursor;
  export import int = gc.core.int;
  export import t2f = gc.core.t2f;
  export import t4 = gc.core.t4;
  export import Runtime = gc.runtime.Runtime;
  export import ChildProcess = gc.runtime.ChildProcess;
  export import Periodicity = gc.runtime.Periodicity;
  export import UserGroupPolicy = gc.runtime.UserGroupPolicy;
  export import DayOfWeek = gc.runtime.DayOfWeek;
  export import License = gc.runtime.License;
  export import FixedPeriodicity = gc.runtime.FixedPeriodicity;
  export import MonthlyPeriodicity = gc.runtime.MonthlyPeriodicity;
  export import RuntimeInfo = gc.runtime.RuntimeInfo;
  export import UserGroupPolicyType = gc.runtime.UserGroupPolicyType;
  export import LogDataUsage = gc.runtime.LogDataUsage;
  export import MergeStrategy = gc.runtime.MergeStrategy;
  export import LicenseType = gc.runtime.LicenseType;
  export import Scheduler = gc.runtime.Scheduler;
  export import SecurityFields = gc.runtime.SecurityFields;
  export import Log = gc.runtime.Log;
  export import SecurityPolicy = gc.runtime.SecurityPolicy;
  export import Task = gc.runtime.Task;
  export import UserGroup = gc.runtime.UserGroup;
  export import YearlyPeriodicity = gc.runtime.YearlyPeriodicity;
  export import System = gc.runtime.System;
  export import DateTuple = gc.runtime.DateTuple;
  export import User = gc.runtime.User;
  export import Job = gc.runtime.Job;
  export import Month = gc.runtime.Month;
  export import WeeklyPeriodicity = gc.runtime.WeeklyPeriodicity;
  export import PeriodicTask = gc.runtime.PeriodicTask;
  export import PeriodicOptions = gc.runtime.PeriodicOptions;
  export import ChildProcessResult = gc.runtime.ChildProcessResult;
  export import DailyPeriodicity = gc.runtime.DailyPeriodicity;
  export import TaskStatus = gc.runtime.TaskStatus;
  export import OpenApi = gc.runtime.OpenApi;
  export import OpenIDConnect = gc.runtime.OpenIDConnect;
  export import LogLevel = gc.runtime.LogLevel;
  export import SecurityEntity = gc.runtime.SecurityEntity;
  export import HttpResponse = gc.io.HttpResponse;
  export import GcbReader = gc.io.GcbReader;
  export import CsvStatistics = gc.io.CsvStatistics;
  export import Http = gc.io.Http;
  export import Url = gc.io.Url;
  export import CsvFormat = gc.io.CsvFormat;
  export import JsonWriter = gc.io.JsonWriter;
  export import CsvAnalysisConfig = gc.io.CsvAnalysisConfig;
  export import Csv = gc.io.Csv;
  export import FileWalker = gc.io.FileWalker;
  export import JsonReader = gc.io.JsonReader;
  export import Smtp = gc.io.Smtp;
  export import CsvWriter = gc.io.CsvWriter;
  export import SmtpMode = gc.io.SmtpMode;
  export import Email = gc.io.Email;
  export import SmtpAuth = gc.io.SmtpAuth;
  export import GcbWriter = gc.io.GcbWriter;
  export import HttpMethod = gc.io.HttpMethod;
  export import TextReader = gc.io.TextReader;
  export import HttpRequest = gc.io.HttpRequest;
  export import Json = gc.io.Json;
  export import CsvColumnStatistics = gc.io.CsvColumnStatistics;
  export import File = gc.io.File;
  export import CsvSharding = gc.io.CsvSharding;
  export import TextWriter = gc.io.TextWriter;
  export import XmlReader = gc.io.XmlReader;
  export import CsvReader = gc.io.CsvReader;
  export import ProgressTracker = gc.util.ProgressTracker;
  export import Random = gc.util.Random;
  export import SlidingWindow = gc.util.SlidingWindow;
  export import LinearQuantizer = gc.util.LinearQuantizer;
  export import Stack = gc.util.Stack;
  export import Histogram = gc.util.Histogram;
  export import Queue = gc.util.Queue;
  export import QuantizerSlotBound = gc.util.QuantizerSlotBound;
  export import CustomQuantizer = gc.util.CustomQuantizer;
  export import GaussianProfileSlot = gc.util.GaussianProfileSlot;
  export import Crypto = gc.util.Crypto;
  export import HistogramBin = gc.util.HistogramBin;
  export import Gaussian = gc.util.Gaussian;
  export import GaussianProfile = gc.util.GaussianProfile;
  export import Plot = gc.util.Plot;
  export import LogQuantizer = gc.util.LogQuantizer;
  export import TimeWindow = gc.util.TimeWindow;
  export import MultiQuantizer = gc.util.MultiQuantizer;
  export import Assert = gc.util.Assert;
  export import HistogramStats = gc.util.HistogramStats;
  export import GoldenRecordDetails = gc.api.GoldenRecordDetails;
  export import ReconciliationRequest = gc.api.ReconciliationRequest;
  export import LinkedRecordsDetails = gc.api.LinkedRecordsDetails;
  export import MatchCandidateDetail = gc.api.MatchCandidateDetail;
  export import SourceRef = gc.api.SourceRef;
  export import GoldenIndex = gc.api.GoldenIndex;
  export import POIFeatures = gc.api.POIFeatures;
  export import BDAddressLine = gc.bdAddressLoader.BDAddressLine;
  export import BDAddressLoader = gc.bdAddressLoader.BDAddressLoader;
  export import OSMLoader = gc.osmLoader.OSMLoader;
  export import OsmOverpassResponse = gc.osmLoader.OsmOverpassResponse;
  export import CACLRLoader = gc.caclrLoader.CACLRLoader;
  export import CaclrResponseConstituency = gc.caclrLoader.CaclrResponseConstituency;
  export import CaclrResponseCities = gc.caclrLoader.CaclrResponseCities;
  export import CaclrResponseCantons = gc.caclrLoader.CaclrResponseCantons;
  export import CaclrAlias = gc.caclrLoader.CaclrAlias;
  export import CaclrResponseCantonItem = gc.caclrLoader.CaclrResponseCantonItem;
  export import CaclrResponseCityItem = gc.caclrLoader.CaclrResponseCityItem;
  export import CaclrResponseBuildingItem = gc.caclrLoader.CaclrResponseBuildingItem;
  export import CaclrResponseStreetItem = gc.caclrLoader.CaclrResponseStreetItem;
  export import CaclrResponseMunicipalities = gc.caclrLoader.CaclrResponseMunicipalities;
  export import CaclrResponseStreets = gc.caclrLoader.CaclrResponseStreets;
  export import CaclrResponseBuildings = gc.caclrLoader.CaclrResponseBuildings;
  export import CaclrResponseMunicipalityItem = gc.caclrLoader.CaclrResponseMunicipalityItem;
  export import MengplazMissmatch = gc.errors.MengplazMissmatch;
  export import AddrErr = gc.errors.AddrErr;
  export import BDAMunicipality = gc.bdaddress.BDAMunicipality;
  export import BDAddress = gc.bdaddress.BDAddress;
  export import BDAddressSource = gc.bdaddress.BDAddressSource;
  export import BDAStreet = gc.bdaddress.BDAStreet;
  export import BDAddressFullRecord = gc.bdaddress.BDAddressFullRecord;
  export import BDACity = gc.bdaddress.BDACity;
  export import CaclrSource = gc.caclr.CaclrSource;
  export import CaclrDataStatus = gc.caclr.CaclrDataStatus;
  export import CaclrAdminStatus = gc.caclr.CaclrAdminStatus;
  export import CaclrCity = gc.caclr.CaclrCity;
  export import CaclrConstituency = gc.caclr.CaclrConstituency;
  export import CaclrToken = gc.caclr.CaclrToken;
  export import CaclrStreet = gc.caclr.CaclrStreet;
  export import CaclrEurostatsIds = gc.caclr.CaclrEurostatsIds;
  export import CaclrMunicipality = gc.caclr.CaclrMunicipality;
  export import CaclrTokenResponse = gc.caclr.CaclrTokenResponse;
  export import CaclrPOIFullRecord = gc.caclr.CaclrPOIFullRecord;
  export import CaclrBuilding = gc.caclr.CaclrBuilding;
  export import CaclrCanton = gc.caclr.CaclrCanton;
  export import GoldenCanton = gc.golden.GoldenCanton;
  export import GoldenPointOfInterest = gc.golden.GoldenPointOfInterest;
  export import GoldenMunicipality = gc.golden.GoldenMunicipality;
  export import GoldenCity = gc.golden.GoldenCity;
  export import GoldenStreet = gc.golden.GoldenStreet;
  export import GoldenSource = gc.golden.GoldenSource;
  export import GoldenConstituency = gc.golden.GoldenConstituency;
  export import POIRecordRef = gc.mengplaz.POIRecordRef;
  export import StreetRecordProvider = gc.mengplaz.StreetRecordProvider;
  export import Match = gc.mengplaz.Match;
  export import StreetRecord = gc.mengplaz.StreetRecord;
  export import SearchRequest = gc.mengplaz.SearchRequest;
  export import POIRecordProvider = gc.mengplaz.POIRecordProvider;
  export import POIFullRecordRef = gc.mengplaz.POIFullRecordRef;
  export import SearchItem = gc.mengplaz.SearchItem;
  export import SearchParameters = gc.mengplaz.SearchParameters;
  export import ReconciliationReport = gc.mengplaz.ReconciliationReport;
  export import DataSource = gc.mengplaz.DataSource;
  export import BuildingMatch = gc.mengplaz.BuildingMatch;
  export import POIRecord = gc.mengplaz.POIRecord;
  export import StreetRecordRef = gc.mengplaz.StreetRecordRef;
  export import Alias = gc.mengplaz.Alias;
  export import CandidateMatch = gc.mengplaz.CandidateMatch;
  export import OsmSource = gc.osm.OsmSource;
  export import OsmAddress = gc.osm.OsmAddress;
  export import OsmPartialAddress = gc.osm.OsmPartialAddress;
  export import Endpoint = gc.trafic.Endpoint;
  export import Traffic = gc.trafic.Traffic;
  export import GoldenServices = gc.goldenServices.GoldenServices;
  export import Traffic_Service = gc.traffic_service.Traffic_Service;
  export import SplitAlphaNumericalString = gc.utils.SplitAlphaNumericalString;
  export import promoteRecord = gc.private.promoteRecord;
  export import linkRecords = gc.private.linkRecords;
  export import linkAllRecords = gc.private.linkAllRecords;
  export import unlinkRecord = gc.private.unlinkRecord;
  export import mergePositionsToGolden = gc.private.mergePositionsToGolden;
  export import getPoisInStreet = gc.api.getPoisInStreet;
  export import searchStreet = gc.api.searchStreet;
  export import getPois = gc.api.getPois;
  export import getPoisByGeo = gc.api.getPoisByGeo;
  export import getGoldenRecordDetails = gc.api.getGoldenRecordDetails;
  export import getLinkedRecordDetails = gc.api.getLinkedRecordDetails;
  export import getPoiRecordRef = gc.api.getPoiRecordRef;
  export import getGoldenRecordRefByUid = gc.api.getGoldenRecordRefByUid;
  export import getSources = gc.api.getSources;
  export import reconcile = gc.api.reconcile;
  export import getReconciliationReport = gc.api.getReconciliationReport;
  export import getMatchCandidateDetails = gc.api.getMatchCandidateDetails;
  export import searchByItem = gc.api.searchByItem;
  export import getRecordByGeopartalID = gc.api.getRecordByGeopartalID;
  export import getGoldenCities = gc.api.getGoldenCities;
  export import getGoldenStreetsByCityId = gc.api.getGoldenStreetsByCityId;
  export import getGoldenNumbersByStreetId = gc.api.getGoldenNumbersByStreetId;
  export import getGoldenRecords = gc.api.getGoldenRecords;
  export import openapi = gc.api.openapi;
}
