var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_malla_10km_3035_esfr_4326_1 = new ol.format.GeoJSON();
var features_malla_10km_3035_esfr_4326_1 = format_malla_10km_3035_esfr_4326_1.readFeatures(json_malla_10km_3035_esfr_4326_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_malla_10km_3035_esfr_4326_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_malla_10km_3035_esfr_4326_1.addFeatures(features_malla_10km_3035_esfr_4326_1);
var lyr_malla_10km_3035_esfr_4326_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_malla_10km_3035_esfr_4326_1, 
                style: style_malla_10km_3035_esfr_4326_1,
                interactive: true,
                title: '<img src="styles/legend/malla_10km_3035_esfr_4326_1.png" /> malla_10km_3035_es+fr_4326'
            });
var format_Brenthishecatehoja_2 = new ol.format.GeoJSON();
var features_Brenthishecatehoja_2 = format_Brenthishecatehoja_2.readFeatures(json_Brenthishecatehoja_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Brenthishecatehoja_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brenthishecatehoja_2.addFeatures(features_Brenthishecatehoja_2);
var lyr_Brenthishecatehoja_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Brenthishecatehoja_2, 
                style: style_Brenthishecatehoja_2,
                interactive: true,
                title: '<img src="styles/legend/Brenthishecatehoja_2.png" /> Brenthis hecate-hoja'
            });
var format_Scientific_BrenthishecateBrenthishecate_buffer1000_3 = new ol.format.GeoJSON();
var features_Scientific_BrenthishecateBrenthishecate_buffer1000_3 = format_Scientific_BrenthishecateBrenthishecate_buffer1000_3.readFeatures(json_Scientific_BrenthishecateBrenthishecate_buffer1000_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Scientific_BrenthishecateBrenthishecate_buffer1000_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Scientific_BrenthishecateBrenthishecate_buffer1000_3.addFeatures(features_Scientific_BrenthishecateBrenthishecate_buffer1000_3);
var lyr_Scientific_BrenthishecateBrenthishecate_buffer1000_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Scientific_BrenthishecateBrenthishecate_buffer1000_3, 
                style: style_Scientific_BrenthishecateBrenthishecate_buffer1000_3,
                interactive: true,
                title: '<img src="styles/legend/Scientific_BrenthishecateBrenthishecate_buffer1000_3.png" /> Scientific_Brenthis hecate Brenthis hecate_buffer-1000'
            });
var format_Scientific_Brenthishecate_4 = new ol.format.GeoJSON();
var features_Scientific_Brenthishecate_4 = format_Scientific_Brenthishecate_4.readFeatures(json_Scientific_Brenthishecate_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Scientific_Brenthishecate_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Scientific_Brenthishecate_4.addFeatures(features_Scientific_Brenthishecate_4);
var lyr_Scientific_Brenthishecate_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Scientific_Brenthishecate_4, 
                style: style_Scientific_Brenthishecate_4,
                interactive: true,
                title: '<img src="styles/legend/Scientific_Brenthishecate_4.png" /> Scientific_Brenthis hecate'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_malla_10km_3035_esfr_4326_1.setVisible(true);lyr_Brenthishecatehoja_2.setVisible(true);lyr_Scientific_BrenthishecateBrenthishecate_buffer1000_3.setVisible(true);lyr_Scientific_Brenthishecate_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_malla_10km_3035_esfr_4326_1,lyr_Brenthishecatehoja_2,lyr_Scientific_BrenthishecateBrenthishecate_buffer1000_3,lyr_Scientific_Brenthishecate_4];
lyr_malla_10km_3035_esfr_4326_1.set('fieldAliases', {'fid': 'fid', 'CELLCODE': 'CELLCODE', 'EOFORIGIN': 'EOFORIGIN', 'NOFORIGIN': 'NOFORIGIN', 'layer': 'layer', 'path': 'path', });
lyr_Brenthishecatehoja_2.set('fieldAliases', {'fid': 'fid', 'CELLCODE': 'CELLCODE', 'EOFORIGIN': 'EOFORIGIN', 'NOFORIGIN': 'NOFORIGIN', 'layer': 'layer', 'path': 'path', 'Scientific': 'Scientific', });
lyr_Scientific_BrenthishecateBrenthishecate_buffer1000_3.set('fieldAliases', {'fid': 'fid', 'Scientific': 'Scientific', 'Datetime': 'Datetime', 'Descriptio': 'Descriptio', 'Place gues': 'Place gues', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Tag list': 'Tag list', 'Common nam': 'Common nam', 'Url': 'Url', 'Image url': 'Image url', 'User login': 'User login', 'Id': 'Id', 'Species gu': 'Species gu', 'Iconic tax': 'Iconic tax', 'Taxon': 'Taxon', 'Id please': 'Id please', 'Num identi': 'Num identi', 'Num iden_1': 'Num iden_1', 'Observed o': 'Observed o', 'Observed_1': 'Observed_1', 'Time obser': 'Time obser', 'Time zone': 'Time zone', 'Positional': 'Positional', 'Geoprivacy': 'Geoprivacy', 'Positionin': 'Positionin', 'Position_1': 'Position_1', 'Out of ran': 'Out of ran', 'User': 'User', 'Created at': 'Created at', 'Updated at': 'Updated at', 'Quality gr': 'Quality gr', 'License': 'License', 'dist_disp': 'dist_disp', 'alt_min': 'alt_min', 'alt_max': 'alt_max', 'CELLCODE': 'CELLCODE', 'mde_srtm': 'mde_srtm', });
lyr_Scientific_Brenthishecate_4.set('fieldAliases', {'fid': 'fid', 'Scientific': 'Scientific', 'Datetime': 'Datetime', 'Descriptio': 'Descriptio', 'Place gues': 'Place gues', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Tag list': 'Tag list', 'Common nam': 'Common nam', 'Url': 'Url', 'Image url': 'Image url', 'User login': 'User login', 'Id': 'Id', 'Species gu': 'Species gu', 'Iconic tax': 'Iconic tax', 'Taxon': 'Taxon', 'Id please': 'Id please', 'Num identi': 'Num identi', 'Num iden_1': 'Num iden_1', 'Observed o': 'Observed o', 'Observed_1': 'Observed_1', 'Time obser': 'Time obser', 'Time zone': 'Time zone', 'Positional': 'Positional', 'Geoprivacy': 'Geoprivacy', 'Positionin': 'Positionin', 'Position_1': 'Position_1', 'Out of ran': 'Out of ran', 'User': 'User', 'Created at': 'Created at', 'Updated at': 'Updated at', 'Quality gr': 'Quality gr', 'License': 'License', 'dist_disp': 'dist_disp', 'alt_min': 'alt_min', 'alt_max': 'alt_max', 'CELLCODE': 'CELLCODE', 'mde_srtm': 'mde_srtm', });
lyr_malla_10km_3035_esfr_4326_1.set('fieldImages', {'fid': 'TextEdit', 'CELLCODE': 'TextEdit', 'EOFORIGIN': 'TextEdit', 'NOFORIGIN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Brenthishecatehoja_2.set('fieldImages', {'fid': 'TextEdit', 'CELLCODE': 'TextEdit', 'EOFORIGIN': 'TextEdit', 'NOFORIGIN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Scientific': 'TextEdit', });
lyr_Scientific_BrenthishecateBrenthishecate_buffer1000_3.set('fieldImages', {'fid': '', 'Scientific': '', 'Datetime': '', 'Descriptio': '', 'Place gues': '', 'Latitude': '', 'Longitude': '', 'Tag list': '', 'Common nam': '', 'Url': '', 'Image url': '', 'User login': '', 'Id': '', 'Species gu': '', 'Iconic tax': '', 'Taxon': '', 'Id please': '', 'Num identi': '', 'Num iden_1': '', 'Observed o': '', 'Observed_1': '', 'Time obser': '', 'Time zone': '', 'Positional': '', 'Geoprivacy': '', 'Positionin': '', 'Position_1': '', 'Out of ran': '', 'User': '', 'Created at': '', 'Updated at': '', 'Quality gr': '', 'License': '', 'dist_disp': '', 'alt_min': '', 'alt_max': '', 'CELLCODE': '', 'mde_srtm': '', });
lyr_Scientific_Brenthishecate_4.set('fieldImages', {'fid': '', 'Scientific': '', 'Datetime': '', 'Descriptio': '', 'Place gues': '', 'Latitude': '', 'Longitude': '', 'Tag list': '', 'Common nam': '', 'Url': '', 'Image url': '', 'User login': '', 'Id': '', 'Species gu': '', 'Iconic tax': '', 'Taxon': '', 'Id please': '', 'Num identi': '', 'Num iden_1': '', 'Observed o': '', 'Observed_1': '', 'Time obser': '', 'Time zone': '', 'Positional': '', 'Geoprivacy': '', 'Positionin': '', 'Position_1': '', 'Out of ran': '', 'User': '', 'Created at': '', 'Updated at': '', 'Quality gr': '', 'License': '', 'dist_disp': '', 'alt_min': '', 'alt_max': '', 'CELLCODE': '', 'mde_srtm': '', });
lyr_malla_10km_3035_esfr_4326_1.set('fieldLabels', {'fid': 'no label', 'CELLCODE': 'no label', 'EOFORIGIN': 'no label', 'NOFORIGIN': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Brenthishecatehoja_2.set('fieldLabels', {'fid': 'no label', 'CELLCODE': 'no label', 'EOFORIGIN': 'no label', 'NOFORIGIN': 'no label', 'layer': 'no label', 'path': 'no label', 'Scientific': 'no label', });
lyr_Scientific_BrenthishecateBrenthishecate_buffer1000_3.set('fieldLabels', {'fid': 'no label', 'Scientific': 'no label', 'Datetime': 'no label', 'Descriptio': 'no label', 'Place gues': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Tag list': 'no label', 'Common nam': 'no label', 'Url': 'no label', 'Image url': 'no label', 'User login': 'no label', 'Id': 'no label', 'Species gu': 'no label', 'Iconic tax': 'no label', 'Taxon': 'no label', 'Id please': 'no label', 'Num identi': 'no label', 'Num iden_1': 'no label', 'Observed o': 'no label', 'Observed_1': 'no label', 'Time obser': 'no label', 'Time zone': 'no label', 'Positional': 'no label', 'Geoprivacy': 'no label', 'Positionin': 'no label', 'Position_1': 'no label', 'Out of ran': 'no label', 'User': 'no label', 'Created at': 'no label', 'Updated at': 'no label', 'Quality gr': 'no label', 'License': 'no label', 'dist_disp': 'no label', 'alt_min': 'no label', 'alt_max': 'no label', 'CELLCODE': 'no label', 'mde_srtm': 'no label', });
lyr_Scientific_Brenthishecate_4.set('fieldLabels', {'fid': 'no label', 'Scientific': 'no label', 'Datetime': 'no label', 'Descriptio': 'no label', 'Place gues': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Tag list': 'no label', 'Common nam': 'no label', 'Url': 'no label', 'Image url': 'no label', 'User login': 'no label', 'Id': 'no label', 'Species gu': 'no label', 'Iconic tax': 'no label', 'Taxon': 'no label', 'Id please': 'no label', 'Num identi': 'no label', 'Num iden_1': 'no label', 'Observed o': 'no label', 'Observed_1': 'no label', 'Time obser': 'no label', 'Time zone': 'no label', 'Positional': 'no label', 'Geoprivacy': 'no label', 'Positionin': 'no label', 'Position_1': 'no label', 'Out of ran': 'no label', 'User': 'no label', 'Created at': 'no label', 'Updated at': 'no label', 'Quality gr': 'no label', 'License': 'no label', 'dist_disp': 'no label', 'alt_min': 'no label', 'alt_max': 'no label', 'CELLCODE': 'no label', 'mde_srtm': 'no label', });
lyr_Scientific_Brenthishecate_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});