var wms_layers = [];

var format_Brenthishecatehoja_0 = new ol.format.GeoJSON();
var features_Brenthishecatehoja_0 = format_Brenthishecatehoja_0.readFeatures(json_Brenthishecatehoja_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Brenthishecatehoja_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brenthishecatehoja_0.addFeatures(features_Brenthishecatehoja_0);
var lyr_Brenthishecatehoja_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Brenthishecatehoja_0, 
                style: style_Brenthishecatehoja_0,
                interactive: false,
                title: '<img src="styles/legend/Brenthishecatehoja_0.png" /> Brenthis hecate-hoja'
            });
var format_Brenthishecatebuffer_1 = new ol.format.GeoJSON();
var features_Brenthishecatebuffer_1 = format_Brenthishecatebuffer_1.readFeatures(json_Brenthishecatebuffer_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Brenthishecatebuffer_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brenthishecatebuffer_1.addFeatures(features_Brenthishecatebuffer_1);
var lyr_Brenthishecatebuffer_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Brenthishecatebuffer_1, 
                style: style_Brenthishecatebuffer_1,
                interactive: false,
                title: '<img src="styles/legend/Brenthishecatebuffer_1.png" /> Brenthis hecate buffer'
            });
var format_Brenthis_hecateFilipendulaulmaria_2 = new ol.format.GeoJSON();
var features_Brenthis_hecateFilipendulaulmaria_2 = format_Brenthis_hecateFilipendulaulmaria_2.readFeatures(json_Brenthis_hecateFilipendulaulmaria_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Brenthis_hecateFilipendulaulmaria_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brenthis_hecateFilipendulaulmaria_2.addFeatures(features_Brenthis_hecateFilipendulaulmaria_2);
var lyr_Brenthis_hecateFilipendulaulmaria_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Brenthis_hecateFilipendulaulmaria_2,
maxResolution:70.0111653806549,
 
                style: style_Brenthis_hecateFilipendulaulmaria_2,
                interactive: false,
                title: '<img src="styles/legend/Brenthis_hecateFilipendulaulmaria_2.png" /> Brenthis_hecate-Filipendula ulmaria'
            });
var format_Brenthishecate_3 = new ol.format.GeoJSON();
var features_Brenthishecate_3 = format_Brenthishecate_3.readFeatures(json_Brenthishecate_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Brenthishecate_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brenthishecate_3.addFeatures(features_Brenthishecate_3);
var lyr_Brenthishecate_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Brenthishecate_3, 
                style: style_Brenthishecate_3,
                interactive: false,
                title: '<img src="styles/legend/Brenthishecate_3.png" /> Brenthis hecate'
            });
var format_Ariciaeumedon_hoja_4 = new ol.format.GeoJSON();
var features_Ariciaeumedon_hoja_4 = format_Ariciaeumedon_hoja_4.readFeatures(json_Ariciaeumedon_hoja_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ariciaeumedon_hoja_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ariciaeumedon_hoja_4.addFeatures(features_Ariciaeumedon_hoja_4);
var lyr_Ariciaeumedon_hoja_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ariciaeumedon_hoja_4, 
                style: style_Ariciaeumedon_hoja_4,
                interactive: false,
                title: '<img src="styles/legend/Ariciaeumedon_hoja_4.png" /> Aricia eumedon_hoja'
            });
var format_Ariciaeumedon_area_5 = new ol.format.GeoJSON();
var features_Ariciaeumedon_area_5 = format_Ariciaeumedon_area_5.readFeatures(json_Ariciaeumedon_area_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ariciaeumedon_area_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ariciaeumedon_area_5.addFeatures(features_Ariciaeumedon_area_5);
var lyr_Ariciaeumedon_area_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ariciaeumedon_area_5, 
                style: style_Ariciaeumedon_area_5,
                interactive: false,
                title: '<img src="styles/legend/Ariciaeumedon_area_5.png" /> Aricia eumedon_area'
            });
var format_Aricia_eumedonGeranium_6 = new ol.format.GeoJSON();
var features_Aricia_eumedonGeranium_6 = format_Aricia_eumedonGeranium_6.readFeatures(json_Aricia_eumedonGeranium_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aricia_eumedonGeranium_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aricia_eumedonGeranium_6.addFeatures(features_Aricia_eumedonGeranium_6);
var lyr_Aricia_eumedonGeranium_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Aricia_eumedonGeranium_6,
maxResolution:70.0111653806549,
 
                style: style_Aricia_eumedonGeranium_6,
                interactive: false,
                title: '<img src="styles/legend/Aricia_eumedonGeranium_6.png" /> Aricia_eumedon-Geranium'
            });
var format_Aricia_eumedon_7 = new ol.format.GeoJSON();
var features_Aricia_eumedon_7 = format_Aricia_eumedon_7.readFeatures(json_Aricia_eumedon_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aricia_eumedon_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aricia_eumedon_7.addFeatures(features_Aricia_eumedon_7);
var lyr_Aricia_eumedon_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Aricia_eumedon_7, 
                style: style_Aricia_eumedon_7,
                interactive: false,
                title: '<img src="styles/legend/Aricia_eumedon_7.png" /> Aricia_eumedon'
            });

        var lyr_OpenStreetMap_8 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_TopoTresc_9 = new ol.layer.Tile({
            'title': 'TopoTresc',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://api.topotresc.com/tiles/{z}/{x}/{y}'
            })
        });
var format_Cuadricula10x10_10 = new ol.format.GeoJSON();
var features_Cuadricula10x10_10 = format_Cuadricula10x10_10.readFeatures(json_Cuadricula10x10_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cuadricula10x10_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cuadricula10x10_10.addFeatures(features_Cuadricula10x10_10);
var lyr_Cuadricula10x10_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cuadricula10x10_10, 
                style: style_Cuadricula10x10_10,
                interactive: false,
                title: '<img src="styles/legend/Cuadricula10x10_10.png" /> Cuadricula 10x10'
            });
var group_AriciaEumedon = new ol.layer.Group({
                                layers: [lyr_Ariciaeumedon_hoja_4,lyr_Ariciaeumedon_area_5,lyr_Aricia_eumedonGeranium_6,lyr_Aricia_eumedon_7,],
                                title: "Aricia Eumedon"});
var group_Brenthishecate = new ol.layer.Group({
                                layers: [lyr_Brenthishecatehoja_0,lyr_Brenthishecatebuffer_1,lyr_Brenthis_hecateFilipendulaulmaria_2,lyr_Brenthishecate_3,],
                                title: "Brenthis hecate"});

lyr_Brenthishecatehoja_0.setVisible(true);lyr_Brenthishecatebuffer_1.setVisible(true);lyr_Brenthis_hecateFilipendulaulmaria_2.setVisible(true);lyr_Brenthishecate_3.setVisible(true);lyr_Ariciaeumedon_hoja_4.setVisible(true);lyr_Ariciaeumedon_area_5.setVisible(true);lyr_Aricia_eumedonGeranium_6.setVisible(true);lyr_Aricia_eumedon_7.setVisible(true);lyr_OpenStreetMap_8.setVisible(false);lyr_TopoTresc_9.setVisible(true);lyr_Cuadricula10x10_10.setVisible(true);
var layersList = [lyr_OpenStreetMap_8,lyr_TopoTresc_9,lyr_Cuadricula10x10_10,group_Brenthishecate,group_AriciaEumedon];
lyr_Brenthishecatehoja_0.set('fieldAliases', {'fid': 'fid', 'CELLCODE': 'CELLCODE', 'EOFORIGIN': 'EOFORIGIN', 'NOFORIGIN': 'NOFORIGIN', 'layer': 'layer', 'path': 'path', 'Scientific': 'Scientific', });
lyr_Brenthishecatebuffer_1.set('fieldAliases', {'fid': 'fid', 'Scientific': 'Scientific', 'Datetime': 'Datetime', 'Descriptio': 'Descriptio', 'Place gues': 'Place gues', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Tag list': 'Tag list', 'Common nam': 'Common nam', 'Url': 'Url', 'Image url': 'Image url', 'User login': 'User login', 'Id': 'Id', 'Species gu': 'Species gu', 'Iconic tax': 'Iconic tax', 'Taxon': 'Taxon', 'Id please': 'Id please', 'Num identi': 'Num identi', 'Num iden_1': 'Num iden_1', 'Observed o': 'Observed o', 'Observed_1': 'Observed_1', 'Time obser': 'Time obser', 'Time zone': 'Time zone', 'Positional': 'Positional', 'Geoprivacy': 'Geoprivacy', 'Positionin': 'Positionin', 'Position_1': 'Position_1', 'Out of ran': 'Out of ran', 'User': 'User', 'Created at': 'Created at', 'Updated at': 'Updated at', 'Quality gr': 'Quality gr', 'License': 'License', 'dist_disp': 'dist_disp', 'alt_min': 'alt_min', 'alt_max': 'alt_max', 'CELLCODE': 'CELLCODE', 'mde_srtm': 'mde_srtm', });
lyr_Brenthis_hecateFilipendulaulmaria_2.set('fieldAliases', {'key:(0,0)': 'key:(0,0)', 'datasetKey:(0,0)': 'datasetKey:(0,0)', 'publishingOrgKey:(0,0)': 'publishingOrgKey:(0,0)', 'installationKey:(0,0)': 'installationKey:(0,0)', 'publishingCountry:(0,0)': 'publishingCountry:(0,0)', 'protocol:(0,0)': 'protocol:(0,0)', 'lastCrawled:(0,0)': 'lastCrawled:(0,0)', 'lastParsed:(0,0)': 'lastParsed:(0,0)', 'crawlId:(0,0)': 'crawlId:(0,0)', 'hostingOrganizationKey:(0,0)': 'hostingOrganizationKey:(0,0)', 'extensions:(0,0)': 'extensions:(0,0)', 'basisOfRecord:(0,0)': 'basisOfRecord:(0,0)', 'occurrenceStatus:(0,0)': 'occurrenceStatus:(0,0)', 'taxonKey:(0,0)': 'taxonKey:(0,0)', 'kingdomKey:(0,0)': 'kingdomKey:(0,0)', 'phylumKey:(0,0)': 'phylumKey:(0,0)', 'classKey:(0,0)': 'classKey:(0,0)', 'orderKey:(0,0)': 'orderKey:(0,0)', 'familyKey:(0,0)': 'familyKey:(0,0)', 'genusKey:(0,0)': 'genusKey:(0,0)', 'speciesKey:(0,0)': 'speciesKey:(0,0)', 'acceptedTaxonKey:(0,0)': 'acceptedTaxonKey:(0,0)', 'scientificName:(0,0)': 'scientificName:(0,0)', 'acceptedScientificName:(0,0)': 'acceptedScientificName:(0,0)', 'kingdom:(0,0)': 'kingdom:(0,0)', 'phylum:(0,0)': 'phylum:(0,0)', 'order:(0,0)': 'order:(0,0)', 'family:(0,0)': 'family:(0,0)', 'genus:(0,0)': 'genus:(0,0)', 'species:(0,0)': 'species:(0,0)', 'genericName:(0,0)': 'genericName:(0,0)', 'specificEpithet:(0,0)': 'specificEpithet:(0,0)', 'taxonRank:(0,0)': 'taxonRank:(0,0)', 'taxonomicStatus:(0,0)': 'taxonomicStatus:(0,0)', 'iucnRedListCategory:(0,0)': 'iucnRedListCategory:(0,0)', 'dateIdentified:(0,0)': 'dateIdentified:(0,0)', 'decimalLongitude:(0,0)': 'decimalLongitude:(0,0)', 'decimalLatitude:(0,0)': 'decimalLatitude:(0,0)', 'stateProvince:(0,0)': 'stateProvince:(0,0)', 'year:(0,0)': 'year:(0,0)', 'month:(0,0)': 'month:(0,0)', 'day:(0,0)': 'day:(0,0)', 'eventDate:(0,0)': 'eventDate:(0,0)', 'issues:(0,0)': 'issues:(0,0)', 'modified:(0,0)': 'modified:(0,0)', 'lastInterpreted:(0,0)': 'lastInterpreted:(0,0)', 'references:(0,0)': 'references:(0,0)', 'license:(0,0)': 'license:(0,0)', 'identifiers:(0,0)': 'identifiers:(0,0)', 'media:(0,0)': 'media:(0,0)', 'facts:(0,0)': 'facts:(0,0)', 'relations:(0,0)': 'relations:(0,0)', 'gadm:(0,0)': 'gadm:(0,0)', 'isInCluster:(0,0)': 'isInCluster:(0,0)', 'geodeticDatum:(0,0)': 'geodeticDatum:(0,0)', 'class:(0,0)': 'class:(0,0)', 'countryCode:(0,0)': 'countryCode:(0,0)', 'recordedByIDs:(0,0)': 'recordedByIDs:(0,0)', 'identifiedByIDs:(0,0)': 'identifiedByIDs:(0,0)', 'country:(0,0)': 'country:(0,0)', 'rightsHolder:(0,0)': 'rightsHolder:(0,0)', 'identifier:(0,0)': 'identifier:(0,0)', 'http://unknown.org/nick:(0,0)': 'http://unknown.org/nick:(0,0)', 'verbatimEventDate:(0,0)': 'verbatimEventDate:(0,0)', 'datasetName:(0,0)': 'datasetName:(0,0)', 'verbatimLocality:(0,0)': 'verbatimLocality:(0,0)', 'gbifID:(0,0)': 'gbifID:(0,0)', 'collectionCode:(0,0)': 'collectionCode:(0,0)', 'occurrenceID:(0,0)': 'occurrenceID:(0,0)', 'taxonID:(0,0)': 'taxonID:(0,0)', 'catalogNumber:(0,0)': 'catalogNumber:(0,0)', 'recordedBy:(0,0)': 'recordedBy:(0,0)', 'http://unknown.org/occurrenceDetails:(0,0)': 'http://unknown.org/occurrenceDetails:(0,0)', 'institutionCode:(0,0)': 'institutionCode:(0,0)', 'rights:(0,0)': 'rights:(0,0)', 'eventTime:(0,0)': 'eventTime:(0,0)', 'reproductiveCondition:(0,0)': 'reproductiveCondition:(0,0)', 'identifiedBy:(0,0)': 'identifiedBy:(0,0)', 'identificationID:(0,0)': 'identificationID:(0,0)', 'projectId:(0,0)': 'projectId:(0,0)', 'individualCount:(0,0)': 'individualCount:(0,0)', 'coordinateUncertaintyInMeters:(0,0)': 'coordinateUncertaintyInMeters:(0,0)', 'lifeStage:(0,0)': 'lifeStage:(0,0)', 'continent:(0,0)': 'continent:(0,0)', 'vernacularName:(0,0)': 'vernacularName:(0,0)', 'locality:(0,0)': 'locality:(0,0)', 'higherClassification:(0,0)': 'higherClassification:(0,0)', 'samplingProtocol:(0,0)': 'samplingProtocol:(0,0)', 'higherGeography:(0,0)': 'higherGeography:(0,0)', 'institutionID:(0,0)': 'institutionID:(0,0)', 'municipality:(0,0)': 'municipality:(0,0)', 'eventRemarks:(0,0)': 'eventRemarks:(0,0)', 'preparations:(0,0)': 'preparations:(0,0)', 'otherCatalogNumbers:(0,0)': 'otherCatalogNumbers:(0,0)', 'institutionKey:(0,0)': 'institutionKey:(0,0)', 'collectionKey:(0,0)': 'collectionKey:(0,0)', 'recordNumber:(0,0)': 'recordNumber:(0,0)', 'fieldNumber:(0,0)': 'fieldNumber:(0,0)', 'fieldNotes:(0,0)': 'fieldNotes:(0,0)', 'datasetID:(0,0)': 'datasetID:(0,0)', 'identificationRemarks:(0,0)': 'identificationRemarks:(0,0)', 'elevation:(0,0)': 'elevation:(0,0)', 'elevationAccuracy:(0,0)': 'elevationAccuracy:(0,0)', 'habitat:(0,0)': 'habitat:(0,0)', 'language:(0,0)': 'language:(0,0)', 'type:(0,0)': 'type:(0,0)', 'previousIdentifications:(0,0)': 'previousIdentifications:(0,0)', 'locationID:(0,0)': 'locationID:(0,0)', 'ownerInstitutionCode:(0,0)': 'ownerInstitutionCode:(0,0)', 'county:(0,0)': 'county:(0,0)', 'endDayOfYear:(0,0)': 'endDayOfYear:(0,0)', 'verbatimCoordinateSystem:(0,0)': 'verbatimCoordinateSystem:(0,0)', 'disposition:(0,0)': 'disposition:(0,0)', 'startDayOfYear:(0,0)': 'startDayOfYear:(0,0)', 'bibliographicCitation:(0,0)': 'bibliographicCitation:(0,0)', 'accessRights:(0,0)': 'accessRights:(0,0)', 'collectionID:(0,0)': 'collectionID:(0,0)', 'georeferencedBy:(0,0)': 'georeferencedBy:(0,0)', 'occurrenceRemarks:(0,0)': 'occurrenceRemarks:(0,0)', 'verbatimElevation:(0,0)': 'verbatimElevation:(0,0)', 'nomenclaturalCode:(0,0)': 'nomenclaturalCode:(0,0)', 'coordinatePrecision:(0,0)': 'coordinatePrecision:(0,0)', 'infraspecificEpithet:(0,0)': 'infraspecificEpithet:(0,0)', 'depth:(0,0)': 'depth:(0,0)', 'depthAccuracy:(0,0)': 'depthAccuracy:(0,0)', 'verbatimTaxonRank:(0,0)': 'verbatimTaxonRank:(0,0)', 'networkKeys:(0,0)': 'networkKeys:(0,0)', 'identificationQualifier:(0,0)': 'identificationQualifier:(0,0)', 'associatedReferences:(0,0)': 'associatedReferences:(0,0)', });
lyr_Brenthishecate_3.set('fieldAliases', {'fid': 'fid', 'Scientific': 'Scientific', 'Datetime': 'Datetime', 'Descriptio': 'Descriptio', 'Place gues': 'Place gues', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Tag list': 'Tag list', 'Common nam': 'Common nam', 'Url': 'Url', 'Image url': 'Image url', 'User login': 'User login', 'Id': 'Id', 'Species gu': 'Species gu', 'Iconic tax': 'Iconic tax', 'Taxon': 'Taxon', 'Id please': 'Id please', 'Num identi': 'Num identi', 'Num iden_1': 'Num iden_1', 'Observed o': 'Observed o', 'Observed_1': 'Observed_1', 'Time obser': 'Time obser', 'Time zone': 'Time zone', 'Positional': 'Positional', 'Geoprivacy': 'Geoprivacy', 'Positionin': 'Positionin', 'Position_1': 'Position_1', 'Out of ran': 'Out of ran', 'User': 'User', 'Created at': 'Created at', 'Updated at': 'Updated at', 'Quality gr': 'Quality gr', 'License': 'License', 'dist_disp': 'dist_disp', 'alt_min': 'alt_min', 'alt_max': 'alt_max', 'CELLCODE': 'CELLCODE', 'mde_srtm': 'mde_srtm', });
lyr_Ariciaeumedon_hoja_4.set('fieldAliases', {'fid': 'fid', 'CELLCODE': 'CELLCODE', 'EOFORIGIN': 'EOFORIGIN', 'NOFORIGIN': 'NOFORIGIN', });
lyr_Ariciaeumedon_area_5.set('fieldAliases', {'fid': 'fid', 'Scientific': 'Scientific', 'Datetime': 'Datetime', 'Descriptio': 'Descriptio', 'Place gues': 'Place gues', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Tag list': 'Tag list', 'Common nam': 'Common nam', 'Url': 'Url', 'Image url': 'Image url', 'User login': 'User login', 'Id': 'Id', 'Species gu': 'Species gu', 'Iconic tax': 'Iconic tax', 'Taxon': 'Taxon', 'Id please': 'Id please', 'Num identi': 'Num identi', 'Num iden_1': 'Num iden_1', 'Observed o': 'Observed o', 'Observed_1': 'Observed_1', 'Time obser': 'Time obser', 'Time zone': 'Time zone', 'Positional': 'Positional', 'Geoprivacy': 'Geoprivacy', 'Positionin': 'Positionin', 'Position_1': 'Position_1', 'Out of ran': 'Out of ran', 'User': 'User', 'Created at': 'Created at', 'Updated at': 'Updated at', 'Quality gr': 'Quality gr', 'License': 'License', 'dist_disp': 'dist_disp', 'alt_min': 'alt_min', 'alt_max': 'alt_max', 'CELLCODE': 'CELLCODE', 'mde_srtm': 'mde_srtm', 'Buffer': 'Buffer', });
lyr_Aricia_eumedonGeranium_6.set('fieldAliases', {'fid': 'fid', 'key': 'key', 'datasetKey': 'datasetKey', 'publishingOrgKey': 'publishingOrgKey', 'installationKey': 'installationKey', 'publishingCountry': 'publishingCountry', 'protocol': 'protocol', 'lastCrawled': 'lastCrawled', 'lastParsed': 'lastParsed', 'crawlId': 'crawlId', 'projectId': 'projectId', 'hostingOrganizationKey': 'hostingOrganizationKey', 'extensions': 'extensions', 'basisOfRecord': 'basisOfRecord', 'individualCount': 'individualCount', 'occurrenceStatus': 'occurrenceStatus', 'taxonKey': 'taxonKey', 'kingdomKey': 'kingdomKey', 'phylumKey': 'phylumKey', 'classKey': 'classKey', 'orderKey': 'orderKey', 'familyKey': 'familyKey', 'genusKey': 'genusKey', 'speciesKey': 'speciesKey', 'acceptedTaxonKey': 'acceptedTaxonKey', 'scientificName': 'scientificName', 'acceptedScientificName': 'acceptedScientificName', 'kingdom': 'kingdom', 'phylum': 'phylum', 'order': 'order', 'family': 'family', 'genus': 'genus', 'species': 'species', 'genericName': 'genericName', 'specificEpithet': 'specificEpithet', 'taxonRank': 'taxonRank', 'taxonomicStatus': 'taxonomicStatus', 'decimalLongitude': 'decimalLongitude', 'decimalLatitude': 'decimalLatitude', 'coordinateUncertaintyInMeters': 'coordinateUncertaintyInMeters', 'year': 'year', 'month': 'month', 'day': 'day', 'eventDate': 'eventDate', 'issues': 'issues', 'lastInterpreted': 'lastInterpreted', 'license': 'license', 'identifiers': 'identifiers', 'media': 'media', 'facts': 'facts', 'relations': 'relations', 'gadm': 'gadm', 'isInCluster': 'isInCluster', 'geodeticDatum': 'geodeticDatum', 'class': 'class', 'countryCode': 'countryCode', 'recordedByIDs': 'recordedByIDs', 'identifiedByIDs': 'identifiedByIDs', 'country': 'country', 'identifier': 'identifier', 'gbifID': 'gbifID', 'occurrenceID': 'occurrenceID', 'dateIdentified': 'dateIdentified', 'stateProvince': 'stateProvince', 'modified': 'modified', 'references': 'references', 'rightsHolder': 'rightsHolder', 'http://unknown.org/nick': 'http://unknown.org/nick', 'verbatimEventDate': 'verbatimEventDate', 'datasetName': 'datasetName', 'verbatimLocality': 'verbatimLocality', 'collectionCode': 'collectionCode', 'taxonID': 'taxonID', 'catalogNumber': 'catalogNumber', 'recordedBy': 'recordedBy', 'http://unknown.org/occurrenceDetails': 'http://unknown.org/occurrenceDetails', 'institutionCode': 'institutionCode', 'rights': 'rights', 'eventTime': 'eventTime', 'identifiedBy': 'identifiedBy', 'identificationID': 'identificationID', 'locality': 'locality', 'elevation': 'elevation', 'elevationAccuracy': 'elevationAccuracy', 'institutionKey': 'institutionKey', 'collectionKey': 'collectionKey', 'recordNumber': 'recordNumber', 'habitat': 'habitat', 'institutionID': 'institutionID', 'preparations': 'preparations', 'datasetID': 'datasetID', 'identificationRemarks': 'identificationRemarks', 'lifeStage': 'lifeStage', 'continent': 'continent', 'higherClassification': 'higherClassification', 'informationWithheld': 'informationWithheld', 'higherGeography': 'higherGeography', 'dataGeneralizations': 'dataGeneralizations', 'georeferenceVerificationStatus': 'georeferenceVerificationStatus', 'county': 'county', 'municipality': 'municipality', 'language': 'language', 'type': 'type', 'disposition': 'disposition', 'ownerInstitutionCode': 'ownerInstitutionCode', 'accessRights': 'accessRights', 'collectionID': 'collectionID', 'samplingProtocol': 'samplingProtocol', 'otherCatalogNumbers': 'otherCatalogNumbers', 'infraspecificEpithet': 'infraspecificEpithet', 'previousIdentifications': 'previousIdentifications', 'locationID': 'locationID', 'fieldNumber': 'fieldNumber', 'nomenclaturalCode': 'nomenclaturalCode', 'occurrenceRemarks': 'occurrenceRemarks', 'fieldNotes': 'fieldNotes', 'coordinatePrecision': 'coordinatePrecision', 'verbatimTaxonRank': 'verbatimTaxonRank', 'verbatimElevation': 'verbatimElevation', 'identificationQualifier': 'identificationQualifier', 'depth': 'depth', 'depthAccuracy': 'depthAccuracy', 'associatedReferences': 'associatedReferences', 'eventID': 'eventID', 'footprintWKT': 'footprintWKT', 'identificationVerificationStatus': 'identificationVerificationStatus', 'originalNameUsage': 'originalNameUsage', 'nameAccordingTo': 'nameAccordingTo', 'locationRemarks': 'locationRemarks', 'networkKeys': 'networkKeys', 'georeferenceProtocol': 'georeferenceProtocol', 'dynamicProperties': 'dynamicProperties', 'layer': 'layer', 'path': 'path', 'vernacularName': 'vernacularName', 'scientificNameID': 'scientificNameID', 'verbatimSRS': 'verbatimSRS', 'verbatimCoordinateSystem': 'verbatimCoordinateSystem', 'organismScope': 'organismScope', 'bibliographicCitation': 'bibliographicCitation', 'source': 'source', 'eventRemarks': 'eventRemarks', 'taxonRemarks': 'taxonRemarks', 'typeStatus': 'typeStatus', });
lyr_Aricia_eumedon_7.set('fieldAliases', {'fid': 'fid', 'Scientific': 'Scientific', 'Datetime': 'Datetime', 'Descriptio': 'Descriptio', 'Place gues': 'Place gues', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Tag list': 'Tag list', 'Common nam': 'Common nam', 'Url': 'Url', 'Image url': 'Image url', 'User login': 'User login', 'Id': 'Id', 'Species gu': 'Species gu', 'Iconic tax': 'Iconic tax', 'Taxon': 'Taxon', 'Id please': 'Id please', 'Num identi': 'Num identi', 'Num iden_1': 'Num iden_1', 'Observed o': 'Observed o', 'Observed_1': 'Observed_1', 'Time obser': 'Time obser', 'Time zone': 'Time zone', 'Positional': 'Positional', 'Geoprivacy': 'Geoprivacy', 'Positionin': 'Positionin', 'Position_1': 'Position_1', 'Out of ran': 'Out of ran', 'User': 'User', 'Created at': 'Created at', 'Updated at': 'Updated at', 'Quality gr': 'Quality gr', 'License': 'License', 'dist_disp': 'dist_disp', 'alt_min': 'alt_min', 'alt_max': 'alt_max', 'CELLCODE': 'CELLCODE', 'mde_srtm': 'mde_srtm', 'Buffer': 'Buffer', });
lyr_Cuadricula10x10_10.set('fieldAliases', {'fid': 'fid', 'CELLCODE': 'CELLCODE', 'EOFORIGIN': 'EOFORIGIN', 'NOFORIGIN': 'NOFORIGIN', 'layer': 'layer', 'path': 'path', });
lyr_Brenthishecatehoja_0.set('fieldImages', {'fid': 'TextEdit', 'CELLCODE': 'TextEdit', 'EOFORIGIN': 'TextEdit', 'NOFORIGIN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Scientific': 'TextEdit', });
lyr_Brenthishecatebuffer_1.set('fieldImages', {'fid': 'TextEdit', 'Scientific': 'TextEdit', 'Datetime': 'DateTime', 'Descriptio': 'TextEdit', 'Place gues': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Tag list': 'TextEdit', 'Common nam': 'TextEdit', 'Url': 'TextEdit', 'Image url': 'TextEdit', 'User login': 'TextEdit', 'Id': 'Range', 'Species gu': 'TextEdit', 'Iconic tax': 'TextEdit', 'Taxon': 'Range', 'Id please': 'TextEdit', 'Num identi': 'Range', 'Num iden_1': 'Range', 'Observed o': 'DateTime', 'Observed_1': 'DateTime', 'Time obser': 'DateTime', 'Time zone': 'TextEdit', 'Positional': 'Range', 'Geoprivacy': 'TextEdit', 'Positionin': 'TextEdit', 'Position_1': 'TextEdit', 'Out of ran': 'TextEdit', 'User': 'Range', 'Created at': 'DateTime', 'Updated at': 'DateTime', 'Quality gr': 'TextEdit', 'License': 'TextEdit', 'dist_disp': 'TextEdit', 'alt_min': 'TextEdit', 'alt_max': 'TextEdit', 'CELLCODE': 'TextEdit', 'mde_srtm': 'TextEdit', });
lyr_Brenthis_hecateFilipendulaulmaria_2.set('fieldImages', {'key:(0,0)': '', 'datasetKey:(0,0)': '', 'publishingOrgKey:(0,0)': '', 'installationKey:(0,0)': '', 'publishingCountry:(0,0)': '', 'protocol:(0,0)': '', 'lastCrawled:(0,0)': '', 'lastParsed:(0,0)': '', 'crawlId:(0,0)': '', 'hostingOrganizationKey:(0,0)': '', 'extensions:(0,0)': '', 'basisOfRecord:(0,0)': '', 'occurrenceStatus:(0,0)': '', 'taxonKey:(0,0)': '', 'kingdomKey:(0,0)': '', 'phylumKey:(0,0)': '', 'classKey:(0,0)': '', 'orderKey:(0,0)': '', 'familyKey:(0,0)': '', 'genusKey:(0,0)': '', 'speciesKey:(0,0)': '', 'acceptedTaxonKey:(0,0)': '', 'scientificName:(0,0)': '', 'acceptedScientificName:(0,0)': '', 'kingdom:(0,0)': '', 'phylum:(0,0)': '', 'order:(0,0)': '', 'family:(0,0)': '', 'genus:(0,0)': '', 'species:(0,0)': '', 'genericName:(0,0)': '', 'specificEpithet:(0,0)': '', 'taxonRank:(0,0)': '', 'taxonomicStatus:(0,0)': '', 'iucnRedListCategory:(0,0)': '', 'dateIdentified:(0,0)': '', 'decimalLongitude:(0,0)': '', 'decimalLatitude:(0,0)': '', 'stateProvince:(0,0)': '', 'year:(0,0)': '', 'month:(0,0)': '', 'day:(0,0)': '', 'eventDate:(0,0)': '', 'issues:(0,0)': '', 'modified:(0,0)': '', 'lastInterpreted:(0,0)': '', 'references:(0,0)': '', 'license:(0,0)': '', 'identifiers:(0,0)': '', 'media:(0,0)': '', 'facts:(0,0)': '', 'relations:(0,0)': '', 'gadm:(0,0)': '', 'isInCluster:(0,0)': '', 'geodeticDatum:(0,0)': '', 'class:(0,0)': '', 'countryCode:(0,0)': '', 'recordedByIDs:(0,0)': '', 'identifiedByIDs:(0,0)': '', 'country:(0,0)': '', 'rightsHolder:(0,0)': '', 'identifier:(0,0)': '', 'http://unknown.org/nick:(0,0)': '', 'verbatimEventDate:(0,0)': '', 'datasetName:(0,0)': '', 'verbatimLocality:(0,0)': '', 'gbifID:(0,0)': '', 'collectionCode:(0,0)': '', 'occurrenceID:(0,0)': '', 'taxonID:(0,0)': '', 'catalogNumber:(0,0)': '', 'recordedBy:(0,0)': '', 'http://unknown.org/occurrenceDetails:(0,0)': '', 'institutionCode:(0,0)': '', 'rights:(0,0)': '', 'eventTime:(0,0)': '', 'reproductiveCondition:(0,0)': '', 'identifiedBy:(0,0)': '', 'identificationID:(0,0)': '', 'projectId:(0,0)': '', 'individualCount:(0,0)': '', 'coordinateUncertaintyInMeters:(0,0)': '', 'lifeStage:(0,0)': '', 'continent:(0,0)': '', 'vernacularName:(0,0)': '', 'locality:(0,0)': '', 'higherClassification:(0,0)': '', 'samplingProtocol:(0,0)': '', 'higherGeography:(0,0)': '', 'institutionID:(0,0)': '', 'municipality:(0,0)': '', 'eventRemarks:(0,0)': '', 'preparations:(0,0)': '', 'otherCatalogNumbers:(0,0)': '', 'institutionKey:(0,0)': '', 'collectionKey:(0,0)': '', 'recordNumber:(0,0)': '', 'fieldNumber:(0,0)': '', 'fieldNotes:(0,0)': '', 'datasetID:(0,0)': '', 'identificationRemarks:(0,0)': '', 'elevation:(0,0)': '', 'elevationAccuracy:(0,0)': '', 'habitat:(0,0)': '', 'language:(0,0)': '', 'type:(0,0)': '', 'previousIdentifications:(0,0)': '', 'locationID:(0,0)': '', 'ownerInstitutionCode:(0,0)': '', 'county:(0,0)': '', 'endDayOfYear:(0,0)': '', 'verbatimCoordinateSystem:(0,0)': '', 'disposition:(0,0)': '', 'startDayOfYear:(0,0)': '', 'bibliographicCitation:(0,0)': '', 'accessRights:(0,0)': '', 'collectionID:(0,0)': '', 'georeferencedBy:(0,0)': '', 'occurrenceRemarks:(0,0)': '', 'verbatimElevation:(0,0)': '', 'nomenclaturalCode:(0,0)': '', 'coordinatePrecision:(0,0)': '', 'infraspecificEpithet:(0,0)': '', 'depth:(0,0)': '', 'depthAccuracy:(0,0)': '', 'verbatimTaxonRank:(0,0)': '', 'networkKeys:(0,0)': '', 'identificationQualifier:(0,0)': '', 'associatedReferences:(0,0)': '', });
lyr_Brenthishecate_3.set('fieldImages', {'fid': 'TextEdit', 'Scientific': 'TextEdit', 'Datetime': 'DateTime', 'Descriptio': 'TextEdit', 'Place gues': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Tag list': 'TextEdit', 'Common nam': 'TextEdit', 'Url': 'TextEdit', 'Image url': 'TextEdit', 'User login': 'TextEdit', 'Id': 'Range', 'Species gu': 'TextEdit', 'Iconic tax': 'TextEdit', 'Taxon': 'Range', 'Id please': 'TextEdit', 'Num identi': 'Range', 'Num iden_1': 'Range', 'Observed o': 'DateTime', 'Observed_1': 'DateTime', 'Time obser': 'DateTime', 'Time zone': 'TextEdit', 'Positional': 'Range', 'Geoprivacy': 'TextEdit', 'Positionin': 'TextEdit', 'Position_1': 'TextEdit', 'Out of ran': 'TextEdit', 'User': 'Range', 'Created at': 'DateTime', 'Updated at': 'DateTime', 'Quality gr': 'TextEdit', 'License': 'TextEdit', 'dist_disp': 'TextEdit', 'alt_min': 'TextEdit', 'alt_max': 'TextEdit', 'CELLCODE': 'TextEdit', 'mde_srtm': 'TextEdit', });
lyr_Ariciaeumedon_hoja_4.set('fieldImages', {'fid': 'TextEdit', 'CELLCODE': 'TextEdit', 'EOFORIGIN': 'TextEdit', 'NOFORIGIN': 'TextEdit', });
lyr_Ariciaeumedon_area_5.set('fieldImages', {'fid': 'TextEdit', 'Scientific': 'TextEdit', 'Datetime': 'DateTime', 'Descriptio': 'TextEdit', 'Place gues': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Tag list': 'TextEdit', 'Common nam': 'TextEdit', 'Url': 'TextEdit', 'Image url': 'TextEdit', 'User login': 'TextEdit', 'Id': 'Range', 'Species gu': 'TextEdit', 'Iconic tax': 'TextEdit', 'Taxon': 'Range', 'Id please': 'TextEdit', 'Num identi': 'Range', 'Num iden_1': 'Range', 'Observed o': 'DateTime', 'Observed_1': 'DateTime', 'Time obser': 'DateTime', 'Time zone': 'TextEdit', 'Positional': 'Range', 'Geoprivacy': 'TextEdit', 'Positionin': 'TextEdit', 'Position_1': 'TextEdit', 'Out of ran': 'TextEdit', 'User': 'Range', 'Created at': 'DateTime', 'Updated at': 'DateTime', 'Quality gr': 'TextEdit', 'License': 'TextEdit', 'dist_disp': 'TextEdit', 'alt_min': 'TextEdit', 'alt_max': 'TextEdit', 'CELLCODE': 'TextEdit', 'mde_srtm': 'TextEdit', 'Buffer': 'Range', });
lyr_Aricia_eumedonGeranium_6.set('fieldImages', {'fid': 'TextEdit', 'key': 'TextEdit', 'datasetKey': 'TextEdit', 'publishingOrgKey': 'TextEdit', 'installationKey': 'TextEdit', 'publishingCountry': 'TextEdit', 'protocol': 'TextEdit', 'lastCrawled': 'TextEdit', 'lastParsed': 'TextEdit', 'crawlId': 'TextEdit', 'projectId': 'TextEdit', 'hostingOrganizationKey': 'TextEdit', 'extensions': 'TextEdit', 'basisOfRecord': 'TextEdit', 'individualCount': 'TextEdit', 'occurrenceStatus': 'TextEdit', 'taxonKey': 'TextEdit', 'kingdomKey': 'TextEdit', 'phylumKey': 'TextEdit', 'classKey': 'TextEdit', 'orderKey': 'TextEdit', 'familyKey': 'TextEdit', 'genusKey': 'TextEdit', 'speciesKey': 'TextEdit', 'acceptedTaxonKey': 'TextEdit', 'scientificName': 'TextEdit', 'acceptedScientificName': 'TextEdit', 'kingdom': 'TextEdit', 'phylum': 'TextEdit', 'order': 'TextEdit', 'family': 'TextEdit', 'genus': 'TextEdit', 'species': 'TextEdit', 'genericName': 'TextEdit', 'specificEpithet': 'TextEdit', 'taxonRank': 'TextEdit', 'taxonomicStatus': 'TextEdit', 'decimalLongitude': 'TextEdit', 'decimalLatitude': 'TextEdit', 'coordinateUncertaintyInMeters': 'TextEdit', 'year': 'TextEdit', 'month': 'TextEdit', 'day': 'TextEdit', 'eventDate': 'TextEdit', 'issues': 'TextEdit', 'lastInterpreted': 'TextEdit', 'license': 'TextEdit', 'identifiers': 'TextEdit', 'media': 'TextEdit', 'facts': 'TextEdit', 'relations': 'TextEdit', 'gadm': 'TextEdit', 'isInCluster': 'TextEdit', 'geodeticDatum': 'TextEdit', 'class': 'TextEdit', 'countryCode': 'TextEdit', 'recordedByIDs': 'TextEdit', 'identifiedByIDs': 'TextEdit', 'country': 'TextEdit', 'identifier': 'TextEdit', 'gbifID': 'TextEdit', 'occurrenceID': 'TextEdit', 'dateIdentified': 'TextEdit', 'stateProvince': 'TextEdit', 'modified': 'TextEdit', 'references': 'TextEdit', 'rightsHolder': 'TextEdit', 'http://unknown.org/nick': 'TextEdit', 'verbatimEventDate': 'TextEdit', 'datasetName': 'TextEdit', 'verbatimLocality': 'TextEdit', 'collectionCode': 'TextEdit', 'taxonID': 'TextEdit', 'catalogNumber': 'TextEdit', 'recordedBy': 'TextEdit', 'http://unknown.org/occurrenceDetails': 'TextEdit', 'institutionCode': 'TextEdit', 'rights': 'TextEdit', 'eventTime': 'TextEdit', 'identifiedBy': 'TextEdit', 'identificationID': 'TextEdit', 'locality': 'TextEdit', 'elevation': 'TextEdit', 'elevationAccuracy': 'TextEdit', 'institutionKey': 'TextEdit', 'collectionKey': 'TextEdit', 'recordNumber': 'TextEdit', 'habitat': 'TextEdit', 'institutionID': 'TextEdit', 'preparations': 'TextEdit', 'datasetID': 'TextEdit', 'identificationRemarks': 'TextEdit', 'lifeStage': 'TextEdit', 'continent': 'TextEdit', 'higherClassification': 'TextEdit', 'informationWithheld': 'TextEdit', 'higherGeography': 'TextEdit', 'dataGeneralizations': 'TextEdit', 'georeferenceVerificationStatus': 'TextEdit', 'county': 'TextEdit', 'municipality': 'TextEdit', 'language': 'TextEdit', 'type': 'TextEdit', 'disposition': 'TextEdit', 'ownerInstitutionCode': 'TextEdit', 'accessRights': 'TextEdit', 'collectionID': 'TextEdit', 'samplingProtocol': 'TextEdit', 'otherCatalogNumbers': 'TextEdit', 'infraspecificEpithet': 'TextEdit', 'previousIdentifications': 'TextEdit', 'locationID': 'TextEdit', 'fieldNumber': 'TextEdit', 'nomenclaturalCode': 'TextEdit', 'occurrenceRemarks': 'TextEdit', 'fieldNotes': 'TextEdit', 'coordinatePrecision': 'TextEdit', 'verbatimTaxonRank': 'TextEdit', 'verbatimElevation': 'TextEdit', 'identificationQualifier': 'TextEdit', 'depth': 'TextEdit', 'depthAccuracy': 'TextEdit', 'associatedReferences': 'TextEdit', 'eventID': 'TextEdit', 'footprintWKT': 'TextEdit', 'identificationVerificationStatus': 'TextEdit', 'originalNameUsage': 'TextEdit', 'nameAccordingTo': 'TextEdit', 'locationRemarks': 'TextEdit', 'networkKeys': 'TextEdit', 'georeferenceProtocol': 'TextEdit', 'dynamicProperties': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'vernacularName': 'TextEdit', 'scientificNameID': 'TextEdit', 'verbatimSRS': 'TextEdit', 'verbatimCoordinateSystem': 'TextEdit', 'organismScope': 'TextEdit', 'bibliographicCitation': 'TextEdit', 'source': 'TextEdit', 'eventRemarks': 'TextEdit', 'taxonRemarks': 'TextEdit', 'typeStatus': 'TextEdit', });
lyr_Aricia_eumedon_7.set('fieldImages', {'fid': 'TextEdit', 'Scientific': 'TextEdit', 'Datetime': 'DateTime', 'Descriptio': 'TextEdit', 'Place gues': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Tag list': 'TextEdit', 'Common nam': 'TextEdit', 'Url': 'TextEdit', 'Image url': 'TextEdit', 'User login': 'TextEdit', 'Id': 'Range', 'Species gu': 'TextEdit', 'Iconic tax': 'TextEdit', 'Taxon': 'Range', 'Id please': 'TextEdit', 'Num identi': 'Range', 'Num iden_1': 'Range', 'Observed o': 'DateTime', 'Observed_1': 'DateTime', 'Time obser': 'DateTime', 'Time zone': 'TextEdit', 'Positional': 'Range', 'Geoprivacy': 'TextEdit', 'Positionin': 'TextEdit', 'Position_1': 'TextEdit', 'Out of ran': 'TextEdit', 'User': 'Range', 'Created at': 'DateTime', 'Updated at': 'DateTime', 'Quality gr': 'TextEdit', 'License': 'TextEdit', 'dist_disp': 'TextEdit', 'alt_min': 'TextEdit', 'alt_max': 'TextEdit', 'CELLCODE': 'TextEdit', 'mde_srtm': 'TextEdit', 'Buffer': 'Range', });
lyr_Cuadricula10x10_10.set('fieldImages', {'fid': 'TextEdit', 'CELLCODE': 'TextEdit', 'EOFORIGIN': 'TextEdit', 'NOFORIGIN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Brenthishecatehoja_0.set('fieldLabels', {});
lyr_Brenthishecatebuffer_1.set('fieldLabels', {});
lyr_Brenthis_hecateFilipendulaulmaria_2.set('fieldLabels', {});
lyr_Brenthishecate_3.set('fieldLabels', {});
lyr_Ariciaeumedon_hoja_4.set('fieldLabels', {});
lyr_Ariciaeumedon_area_5.set('fieldLabels', {});
lyr_Aricia_eumedonGeranium_6.set('fieldLabels', {});
lyr_Aricia_eumedon_7.set('fieldLabels', {});
lyr_Cuadricula10x10_10.set('fieldLabels', {'fid': 'no label', 'CELLCODE': 'no label', 'EOFORIGIN': 'no label', 'NOFORIGIN': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Cuadricula10x10_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
