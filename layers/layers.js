var wms_layers = [];


        var lyr_hibrido_0 = new ol.layer.Tile({
            'title': 'hibrido',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_turismo_sev_booking_1 = new ol.format.GeoJSON();
var features_turismo_sev_booking_1 = format_turismo_sev_booking_1.readFeatures(json_turismo_sev_booking_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_turismo_sev_booking_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_turismo_sev_booking_1.addFeatures(features_turismo_sev_booking_1);
var lyr_turismo_sev_booking_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_turismo_sev_booking_1, 
                style: style_turismo_sev_booking_1,
                interactive: true,
                title: '<img src="styles/legend/turismo_sev_booking_1.png" /> turismo_sev_booking'
            });
var lyr_Localizacin_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Localización",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Localizacin_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-668827.143066, 4479404.731434, -652502.239119, 4496652.525344]
                            })
                        });
var format_Contornoslocalizacin_3 = new ol.format.GeoJSON();
var features_Contornoslocalizacin_3 = format_Contornoslocalizacin_3.readFeatures(json_Contornoslocalizacin_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contornoslocalizacin_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contornoslocalizacin_3.addFeatures(features_Contornoslocalizacin_3);
var lyr_Contornoslocalizacin_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Contornoslocalizacin_3, 
                style: style_Contornoslocalizacin_3,
                interactive: true,
    title: 'Contornos localización<br />\
    <img src="styles/legend/Contornoslocalizacin_3_0.png" /> 25<br />\
    <img src="styles/legend/Contornoslocalizacin_3_1.png" /> 50<br />\
    <img src="styles/legend/Contornoslocalizacin_3_2.png" /> 75<br />\
    <img src="styles/legend/Contornoslocalizacin_3_3.png" /> 100<br />\
    <img src="styles/legend/Contornoslocalizacin_3_4.png" /> <br />'
        });
var lyr_precios_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "precios",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/precios_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-668891.955271, 4479343.659178, -652435.230733, 4496717.605747]
                            })
                        });
var format_bics_5 = new ol.format.GeoJSON();
var features_bics_5 = format_bics_5.readFeatures(json_bics_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bics_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bics_5.addFeatures(features_bics_5);
var lyr_bics_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bics_5, 
                style: style_bics_5,
                interactive: true,
                title: '<img src="styles/legend/bics_5.png" /> bics'
            });
var format_Contornosprecios_6 = new ol.format.GeoJSON();
var features_Contornosprecios_6 = format_Contornosprecios_6.readFeatures(json_Contornosprecios_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contornosprecios_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contornosprecios_6.addFeatures(features_Contornosprecios_6);
var lyr_Contornosprecios_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Contornosprecios_6, 
                style: style_Contornosprecios_6,
                interactive: true,
    title: 'Contornos precios<br />\
    <img src="styles/legend/Contornosprecios_6_0.png" /> 550<br />\
    <img src="styles/legend/Contornosprecios_6_1.png" /> 1100<br />\
    <img src="styles/legend/Contornosprecios_6_2.png" /> 1650<br />\
    <img src="styles/legend/Contornosprecios_6_3.png" /> 2200<br />\
    <img src="styles/legend/Contornosprecios_6_4.png" /> <br />'
        });

lyr_hibrido_0.setVisible(true);lyr_turismo_sev_booking_1.setVisible(true);lyr_Localizacin_2.setVisible(true);lyr_Contornoslocalizacin_3.setVisible(true);lyr_precios_4.setVisible(true);lyr_bics_5.setVisible(true);lyr_Contornosprecios_6.setVisible(true);
var layersList = [lyr_hibrido_0,lyr_turismo_sev_booking_1,lyr_Localizacin_2,lyr_Contornoslocalizacin_3,lyr_precios_4,lyr_bics_5,lyr_Contornosprecios_6];
lyr_turismo_sev_booking_1.set('fieldAliases', {'fid': 'fid', 'cat': 'cat', 'y': 'y', 'x': 'x', 'price': 'price', 'location': 'location', 'site': 'site', 'name2': 'name2', 'Count': 'Count', });
lyr_Contornoslocalizacin_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_bics_5.set('fieldAliases', {'id_dera': 'id_dera', 'expediente': 'expediente', 'nombre': 'nombre', 'documento': 'documento', 'tipo': 'tipo', 'estado': 'estado', 'fecha_inco': 'fecha_inco', 'fecha_reso': 'fecha_reso', 'figura': 'figura', 'tipo_proce': 'tipo_proce', 'ministerio': 'ministerio', 'ORIG_FID': 'ORIG_FID', });
lyr_Contornosprecios_6.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_turismo_sev_booking_1.set('fieldImages', {'fid': '', 'cat': '', 'y': '', 'x': '', 'price': '', 'location': '', 'site': '', 'name2': '', 'Count': '', });
lyr_Contornoslocalizacin_3.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_bics_5.set('fieldImages', {'id_dera': 'TextEdit', 'expediente': 'TextEdit', 'nombre': 'TextEdit', 'documento': 'TextEdit', 'tipo': 'TextEdit', 'estado': 'TextEdit', 'fecha_inco': 'DateTime', 'fecha_reso': 'DateTime', 'figura': 'TextEdit', 'tipo_proce': 'TextEdit', 'ministerio': 'TextEdit', 'ORIG_FID': 'TextEdit', });
lyr_Contornosprecios_6.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_turismo_sev_booking_1.set('fieldLabels', {'fid': 'no label', 'cat': 'no label', 'y': 'no label', 'x': 'no label', 'price': 'no label', 'location': 'no label', 'site': 'no label', 'name2': 'no label', 'Count': 'no label', });
lyr_Contornoslocalizacin_3.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'no label', });
lyr_bics_5.set('fieldLabels', {'id_dera': 'no label', 'expediente': 'no label', 'nombre': 'no label', 'documento': 'no label', 'tipo': 'no label', 'estado': 'no label', 'fecha_inco': 'no label', 'fecha_reso': 'no label', 'figura': 'no label', 'tipo_proce': 'no label', 'ministerio': 'no label', 'ORIG_FID': 'no label', });
lyr_Contornosprecios_6.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'no label', });
lyr_Contornosprecios_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});