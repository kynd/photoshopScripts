
// =======================================================

var str = prompt("top-left-x, top-left-y, width, height, horizontal repeat, vertical repeat (comma-delimited)", "x, y, w, h, hr, vr");
var val = str.split(",");
var valid = true;

if (val.length < 6) {
	alert("insufficient parameters"); valid = false;
} else {
	for (var i = 0; i < val.length; i ++) {
		if (isNaN(val[i])) {
			valid = false;
		} else {
			val[i] = parseFloat(val[i]);  
		}
	}
	
	if (!valid) {
		alert("non-numeric parameter(s)");
	}
}


if (valid) { 
	CreateSlice(val[0], val[1], val[2], val[3], val[4], val[5]);
}

// =======================================================
function CreateSlice(x, y, w, h, hr, vr) {
	
	for (var j = 0; j < vr; j ++) {
		for (var i = 0; i < hr; i ++) {
		
			var tx = x + i * w;
			var ty = y + j * h;
		
		
			var idMk = charIDToTypeID( "Mk  " );
    		var desc12 = new ActionDescriptor();
    		var idnull = charIDToTypeID( "null" );
        	var ref6 = new ActionReference();
        	var idslice = stringIDToTypeID( "slice" );
        	ref6.putClass( idslice );
        	
    		desc12.putReference( idnull, ref6 );
    		var idUsng = charIDToTypeID( "Usng" );
        	var desc13 = new ActionDescriptor();
        	var idType = charIDToTypeID( "Type" );
        	var idsliceType = stringIDToTypeID( "sliceType" );
        	var iduser = stringIDToTypeID( "user" );
        	desc13.putEnumerated( idType, idsliceType, iduser );
        	var idAt = charIDToTypeID( "At  " );
            var desc14 = new ActionDescriptor();
            var idTop = charIDToTypeID( "Top " );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc14.putUnitDouble( idTop, idPxl, ty );
            var idLeft = charIDToTypeID( "Left" );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc14.putUnitDouble( idLeft, idPxl, tx );
            var idBtom = charIDToTypeID( "Btom" );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc14.putUnitDouble( idBtom, idPxl, ty + h );
            var idRght = charIDToTypeID( "Rght" );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc14.putUnitDouble( idRght, idPxl, tx + w );
        
        	var idRctn = charIDToTypeID( "Rctn" );
        	desc13.putObject( idAt, idRctn, desc14 );
    		var idslice = stringIDToTypeID( "slice" );
    		desc12.putObject( idUsng, idslice, desc13 );
			executeAction( idMk, desc12, DialogModes.NO );
		
		}
	}
}