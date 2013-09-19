var prefix = "";
var prefix = prompt("Marge all layers that have names begin with...", "prefix");

var layerNames = [];

deselectLayers();
listLayersets(app.activeDocument);
listLayers(app.activeDocument);
if (layerNames.length >= 2) {
	mergeLayers();
}

var path;

function listLayersets(pointer) {
     for (var i = 0; i < pointer.layerSets.length; i++) {
        var layerset = pointer.layerSets[i];
        //alert("layer set: " + layerset.name);
        listLayers (layerset);
    }
}

function listLayers(pointer) {
    for (var i = 0; i < pointer.artLayers.length; i++) {
        var layer = pointer.artLayers[i];
        //alert("layer: " + layer.name);
        if (layer.name.indexOf(prefix) == 0) {
            //alert(layer.name);
            layerSelection(layer.name, "addToSelection");
            layer.selected = true;
            layerNames.push(layer.name);
        }
    }
}

function mergeLayers() {
	var str = layerNames.length + " layers have been merged\n";
	for (var i = 0; i < layerNames.length; i++) {
		str += layerNames[i] + "\n";
	}
	
	function cTID(s) { return app.charIDToTypeID(s); };
	executeAction(cTID('Mrg2'), undefined, DialogModes.NO);
	alert(str);
}

function layerSelection(layerRef, addRef) {
   function cTID(s) { return app.charIDToTypeID(s); };
   function sTID(s) { return app.stringIDToTypeID(s); };
      var desc01 = new ActionDescriptor();
      var ref01 = new ActionReference(); ref01.putName(cTID('Lyr '), layerRef);
      desc01.putReference(cTID('null'), ref01);
      desc01.putEnumerated(sTID('selectionModifier'), sTID('selectionModifierType'), sTID(addRef));
      desc01.putBoolean(cTID('MkVs'), false);
   executeAction(cTID('slct'), desc01, DialogModes.NO);
}


function deselectLayers() {
   function cTID(s) { return app.charIDToTypeID(s); };
   function sTID(s) { return app.stringIDToTypeID(s); };
      var desc01 = new ActionDescriptor();
      var ref01 = new ActionReference();
      ref01.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt') );
      desc01.putReference( cTID('null'), ref01);
   executeAction(sTID('selectNoLayers'), desc01, DialogModes.NO);
}
