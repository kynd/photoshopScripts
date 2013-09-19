var resolution = activeDocument.resolution;
var wn = createDialog();
wn.w.active = true;
wn.addEventListener ("keydown", function (e) {pressed (e)});

wn.closeBtn.addEventListener("click", function(e) {wn.close();});
wn.createBtn.addEventListener("click", function(e) {createShape();app.refresh();});
wn.show();

function createDialog() {
	var dlg = new Window('dialog', 'Rounded Rect', {x:100, y:100, width:320, height:152});
	dlg.add("statictext",{x:10, y:10, width:80, height:20}, "width(w)");
	dlg.w = dlg.add("edittext",{x:10, y:30, width:80, height:24}, "100");
	dlg.add("statictext",{x:100, y:10, width:80, height:20}, "height(h)");
	dlg.h = dlg.add("edittext",{x:100, y:30, width:80, height:24}, "100");
	dlg.add("statictext",{x:10, y:54, width:80, height:20}, "round(r)");
	dlg.r = dlg.add("edittext",{x:10, y:74, width:80, height:24}, "8");
	dlg.add("statictext",{x:10, y:98, width:80, height:20}, "x(x)");
	dlg.x = dlg.add("edittext",{x:10, y:118, width:80, height:24}, "0");
	dlg.add("statictext",{x:100, y:98, width:80, height:20}, "y(y)");
	dlg.y = dlg.add("edittext",{x:100, y:118, width:80, height:24}, "0");
	dlg.createBtn = dlg.add("button",{x:230, y:10, width:80, height:24}, "Create");
	dlg.closeBtn = dlg.add("button", {x:230, y:44, width:80, height:24}, "Close");
	return dlg;
}

function createShape() {
	var x = parseFloat(wn.x.text) * 72 / resolution;
	var y = parseFloat(wn.y.text) * 72 / resolution;
	var w = parseFloat(wn.w.text) * 72 / resolution;
	var h = parseFloat(wn.h.text) * 72 / resolution;
	var r = parseFloat(wn.r.text) * 72 / resolution;
	
	var idMk = charIDToTypeID( "Mk  " );
	var desc58 = new ActionDescriptor();
	var idnull = charIDToTypeID( "null" );
	var ref31 = new ActionReference();
	var idcontentLayer = stringIDToTypeID( "contentLayer" );
	ref31.putClass( idcontentLayer );
	desc58.putReference( idnull, ref31 );
	var idUsng = charIDToTypeID( "Usng" );
	var desc59 = new ActionDescriptor();
	var idType = charIDToTypeID( "Type" );
	var idsolidColorLayer = stringIDToTypeID( "solidColorLayer" );
	desc59.putClass( idType, idsolidColorLayer );
	var idShp = charIDToTypeID( "Shp " );
	var desc60 = new ActionDescriptor();
	var idTop = charIDToTypeID( "Top " );
	var idRlt = charIDToTypeID( "#Rlt" );
	desc60.putUnitDouble( idTop, idRlt, y);
	var idLeft = charIDToTypeID( "Left" );
	var idRlt = charIDToTypeID( "#Rlt" );
	desc60.putUnitDouble( idLeft, idRlt, x);
	var idBtom = charIDToTypeID( "Btom" );
	var idRlt = charIDToTypeID( "#Rlt" );
	shapey = y + h;
	desc60.putUnitDouble( idBtom, idRlt, shapey );
	var idRght = charIDToTypeID( "Rght" );
	var idRlt = charIDToTypeID( "#Rlt" );
	shapex = x + w;
	desc60.putUnitDouble( idRght, idRlt, shapex );
	var idRds = charIDToTypeID( "Rds " );
	var idRlt = charIDToTypeID( "#Rlt" );
	desc60.putUnitDouble( idRds, idRlt, r );
	var idRctn = charIDToTypeID( "Rctn" );
	desc59.putObject( idShp, idRctn, desc60 );
	var idcontentLayer = stringIDToTypeID( "contentLayer" );
	desc58.putObject( idUsng, idcontentLayer, desc59 );
	executeAction( idMk, desc58, DialogModes.NO );
}

 

function pressed (e) {
	switch(e.keyName) {
		case "W":
		wn.w.active = true;
		e.preventDefault();
		break;
		case "H":
		wn.h.active = true;
		e.preventDefault();
		break;
		case "R":
		wn.r.active = true;
		e.preventDefault();
		break;
		case "X":
		wn.x.active = true;
		e.preventDefault();
		break;
		case "Y":
		wn.y.active = true;
		e.preventDefault();
		break;
		case "Enter":
		createShape();
		app.refresh();
		e.preventDefault();
		break;
		
	}

}