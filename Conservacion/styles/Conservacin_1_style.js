var size = 0;
var placement = 'point';
function categories_Conservacin_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {default:
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(39,127,221,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'MANTENIMIENTO PERIODICO':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(253,255,32,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'MANTENIMIENTO RUTINARIO':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,190,29,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'N/A':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(246,101,188,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'RECONSTRUCCION':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(243,56,36,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'REHABILITACION':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(248,137,41,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'DESVÍO ML1':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(20,225,216,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SIN RUTA SITP':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(215,115,249,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Conservacin_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Conservación clasificación_Clasificacion IDU");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("CalCodigo") !== null) {
        labelText = String(feature.get("CalCodigo"));
    }
    
    var style = categories_Conservacin_1(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
