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
lyr_Brenthis_hecateFilipendulaulmaria_2.set('fieldAliases', {'fid': 'fid', 'key': 'key', 'genericNam': 'genericNam', 'dateIdenti': 'dateIdenti', 'decimalLon': 'decimalLon', 'decimalLat': 'decimalLat', 'year': 'year', 'month': 'month', 'day': 'day', 'mde_srtm': 'mde_srtm', });
lyr_Brenthishecate_3.set('fieldAliases', {'fid': 'fid', 'Scientific': 'Scientific', 'Datetime': 'Datetime', 'Descriptio': 'Descriptio', 'Place gues': 'Place gues', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Tag list': 'Tag list', 'Common nam': 'Common nam', 'Url': 'Url', 'Image url': 'Image url', 'User login': 'User login', 'Id': 'Id', 'Species gu': 'Species gu', 'Iconic tax': 'Iconic tax', 'Taxon': 'Taxon', 'Id please': 'Id please', 'Num identi': 'Num identi', 'Num iden_1': 'Num iden_1', 'Observed o': 'Observed o', 'Observed_1': 'Observed_1', 'Time obser': 'Time obser', 'Time zone': 'Time zone', 'Positional': 'Positional', 'Geoprivacy': 'Geoprivacy', 'Positionin': 'Positionin', 'Position_1': 'Position_1', 'Out of ran': 'Out of ran', 'User': 'User', 'Created at': 'Created at', 'Updated at': 'Updated at', 'Quality gr': 'Quality gr', 'License': 'License', 'dist_disp': 'dist_disp', 'alt_min': 'alt_min', 'alt_max': 'alt_max', 'CELLCODE': 'CELLCODE', 'mde_srtm': 'mde_srtm', });
lyr_Ariciaeumedon_hoja_4.set('fieldAliases', {'fid': 'fid', 'CELLCODE': 'CELLCODE', 'EOFORIGIN': 'EOFORIGIN', 'NOFORIGIN': 'NOFORIGIN', });
lyr_Ariciaeumedon_area_5.set('fieldAliases', {'fid': 'fid', 'Scientific': 'Scientific', 'Datetime': 'Datetime', 'Descriptio': 'Descriptio', 'Place gues': 'Place gues', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Tag list': 'Tag list', 'Common nam': 'Common nam', 'Url': 'Url', 'Image url': 'Image url', 'User login': 'User login', 'Id': 'Id', 'Species gu': 'Species gu', 'Iconic tax': 'Iconic tax', 'Taxon': 'Taxon', 'Id please': 'Id please', 'Num identi': 'Num identi', 'Num iden_1': 'Num iden_1', 'Observed o': 'Observed o', 'Observed_1': 'Observed_1', 'Time obser': 'Time obser', 'Time zone': 'Time zone', 'Positional': 'Positional', 'Geoprivacy': 'Geoprivacy', 'Positionin': 'Positionin', 'Position_1': 'Position_1', 'Out of ran': 'Out of ran', 'User': 'User', 'Created at': 'Created at', 'Updated at': 'Updated at', 'Quality gr': 'Quality gr', 'License': 'License', 'dist_disp': 'dist_disp', 'alt_min': 'alt_min', 'alt_max': 'alt_max', 'CELLCODE': 'CELLCODE', 'mde_srtm': 'mde_srtm', 'Buffer': 'Buffer', });
lyr_Aricia_eumedonGeranium_6.set('fieldAliases', {'fid': 'fid', 'key': 'key', 'mde_srtm': 'mde_srtm', });
lyr_Aricia_eumedon_7.set('fieldAliases', {'fid': 'fid', 'Scientific': 'Scientific', 'Datetime': 'Datetime', 'Descriptio': 'Descriptio', 'Place gues': 'Place gues', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Tag list': 'Tag list', 'Common nam': 'Common nam', 'Url': 'Url', 'Image url': 'Image url', 'User login': 'User login', 'Id': 'Id', 'Species gu': 'Species gu', 'Iconic tax': 'Iconic tax', 'Taxon': 'Taxon', 'Id please': 'Id please', 'Num identi': 'Num identi', 'Num iden_1': 'Num iden_1', 'Observed o': 'Observed o', 'Observed_1': 'Observed_1', 'Time obser': 'Time obser', 'Time zone': 'Time zone', 'Positional': 'Positional', 'Geoprivacy': 'Geoprivacy', 'Positionin': 'Positionin', 'Position_1': 'Position_1', 'Out of ran': 'Out of ran', 'User': 'User', 'Created at': 'Created at', 'Updated at': 'Updated at', 'Quality gr': 'Quality gr', 'License': 'License', 'dist_disp': 'dist_disp', 'alt_min': 'alt_min', 'alt_max': 'alt_max', 'CELLCODE': 'CELLCODE', 'mde_srtm': 'mde_srtm', 'Buffer': 'Buffer', });
lyr_Cuadricula10x10_10.set('fieldAliases', {'fid': 'fid', 'CELLCODE': 'CELLCODE', 'EOFORIGIN': 'EOFORIGIN', 'NOFORIGIN': 'NOFORIGIN', 'layer': 'layer', 'path': 'path', });
lyr_Brenthishecatehoja_0.set('fieldImages', {'fid': 'TextEdit', 'CELLCODE': 'TextEdit', 'EOFORIGIN': 'TextEdit', 'NOFORIGIN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Scientific': 'TextEdit', });
lyr_Brenthishecatebuffer_1.set('fieldImages', {'fid': 'TextEdit', 'Scientific': 'TextEdit', 'Datetime': 'DateTime', 'Descriptio': 'TextEdit', 'Place gues': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Tag list': 'TextEdit', 'Common nam': 'TextEdit', 'Url': 'TextEdit', 'Image url': 'TextEdit', 'User login': 'TextEdit', 'Id': 'Range', 'Species gu': 'TextEdit', 'Iconic tax': 'TextEdit', 'Taxon': 'Range', 'Id please': 'TextEdit', 'Num identi': 'Range', 'Num iden_1': 'Range', 'Observed o': 'DateTime', 'Observed_1': 'DateTime', 'Time obser': 'DateTime', 'Time zone': 'TextEdit', 'Positional': 'Range', 'Geoprivacy': 'TextEdit', 'Positionin': 'TextEdit', 'Position_1': 'TextEdit', 'Out of ran': 'TextEdit', 'User': 'Range', 'Created at': 'DateTime', 'Updated at': 'DateTime', 'Quality gr': 'TextEdit', 'License': 'TextEdit', 'dist_disp': 'TextEdit', 'alt_min': 'TextEdit', 'alt_max': 'TextEdit', 'CELLCODE': 'TextEdit', 'mde_srtm': 'TextEdit', });
lyr_Brenthis_hecateFilipendulaulmaria_2.set('fieldImages', {'fid': 'TextEdit', 'key': 'TextEdit', 'genericNam': 'TextEdit', 'dateIdenti': 'TextEdit', 'decimalLon': 'TextEdit', 'decimalLat': 'TextEdit', 'year': 'TextEdit', 'month': 'TextEdit', 'day': 'TextEdit', 'mde_srtm': 'TextEdit', });
lyr_Brenthishecate_3.set('fieldImages', {'fid': 'TextEdit', 'Scientific': 'TextEdit', 'Datetime': 'DateTime', 'Descriptio': 'TextEdit', 'Place gues': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Tag list': 'TextEdit', 'Common nam': 'TextEdit', 'Url': 'TextEdit', 'Image url': 'TextEdit', 'User login': 'TextEdit', 'Id': 'Range', 'Species gu': 'TextEdit', 'Iconic tax': 'TextEdit', 'Taxon': 'Range', 'Id please': 'TextEdit', 'Num identi': 'Range', 'Num iden_1': 'Range', 'Observed o': 'DateTime', 'Observed_1': 'DateTime', 'Time obser': 'DateTime', 'Time zone': 'TextEdit', 'Positional': 'Range', 'Geoprivacy': 'TextEdit', 'Positionin': 'TextEdit', 'Position_1': 'TextEdit', 'Out of ran': 'TextEdit', 'User': 'Range', 'Created at': 'DateTime', 'Updated at': 'DateTime', 'Quality gr': 'TextEdit', 'License': 'TextEdit', 'dist_disp': 'TextEdit', 'alt_min': 'TextEdit', 'alt_max': 'TextEdit', 'CELLCODE': 'TextEdit', 'mde_srtm': 'TextEdit', });
lyr_Ariciaeumedon_hoja_4.set('fieldImages', {'fid': 'TextEdit', 'CELLCODE': 'TextEdit', 'EOFORIGIN': 'TextEdit', 'NOFORIGIN': 'TextEdit', });
lyr_Ariciaeumedon_area_5.set('fieldImages', {'fid': 'TextEdit', 'Scientific': 'TextEdit', 'Datetime': 'DateTime', 'Descriptio': 'TextEdit', 'Place gues': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Tag list': 'TextEdit', 'Common nam': 'TextEdit', 'Url': 'TextEdit', 'Image url': 'TextEdit', 'User login': 'TextEdit', 'Id': 'Range', 'Species gu': 'TextEdit', 'Iconic tax': 'TextEdit', 'Taxon': 'Range', 'Id please': 'TextEdit', 'Num identi': 'Range', 'Num iden_1': 'Range', 'Observed o': 'DateTime', 'Observed_1': 'DateTime', 'Time obser': 'DateTime', 'Time zone': 'TextEdit', 'Positional': 'Range', 'Geoprivacy': 'TextEdit', 'Positionin': 'TextEdit', 'Position_1': 'TextEdit', 'Out of ran': 'TextEdit', 'User': 'Range', 'Created at': 'DateTime', 'Updated at': 'DateTime', 'Quality gr': 'TextEdit', 'License': 'TextEdit', 'dist_disp': 'TextEdit', 'alt_min': 'TextEdit', 'alt_max': 'TextEdit', 'CELLCODE': 'TextEdit', 'mde_srtm': 'TextEdit', 'Buffer': 'Range', });
lyr_Aricia_eumedonGeranium_6.set('fieldImages', {'fid': 'TextEdit', 'key': 'TextEdit', 'mde_srtm': 'TextEdit', });
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
