guidesFromLayerBoundingBox();

function guidesFromLayerBoundingBox(){
	
	var saveUnit = preferences.rulerUnits;
	preferences.rulerUnits = Units.PIXELS;
	var layer = activeDocument.activeLayer;
	vertGuide(layer.bounds[0]);
	horGuide(layer.bounds[1]);
	vertGuide(layer.bounds[2]);
	horGuide(layer.bounds[3]);
	preferences.rulerUnits = saveUnit;
}
	
function horGuide(x) {
var idMk = charIDToTypeID( "Mk  " );
    var desc16 = new ActionDescriptor();
    var idNw = charIDToTypeID( "Nw  " );
        var desc17 = new ActionDescriptor();
        var idPstn = charIDToTypeID( "Pstn" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc17.putUnitDouble( idPstn, idPxl, x );
        var idOrnt = charIDToTypeID( "Ornt" );
        var idOrnt = charIDToTypeID( "Ornt" );
        var idHrzn = charIDToTypeID( "Hrzn" );
        desc17.putEnumerated( idOrnt, idOrnt, idHrzn );
    var idGd = charIDToTypeID( "Gd  " );
    desc16.putObject( idNw, idGd, desc17 );
executeAction( idMk, desc16, DialogModes.NO );
}

function vertGuide(y) {
var idMk = charIDToTypeID( "Mk  " );
    var desc49 = new ActionDescriptor();
    var idNw = charIDToTypeID( "Nw  " );
        var desc50 = new ActionDescriptor();
        var idPstn = charIDToTypeID( "Pstn" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc50.putUnitDouble( idPstn, idPxl, y );
        var idOrnt = charIDToTypeID( "Ornt" );
        var idOrnt = charIDToTypeID( "Ornt" );
        var idVrtc = charIDToTypeID( "Vrtc" );
        desc50.putEnumerated( idOrnt, idOrnt, idVrtc );
    var idGd = charIDToTypeID( "Gd  " );
    desc49.putObject( idNw, idGd, desc50 );
executeAction( idMk, desc49, DialogModes.NO );
}