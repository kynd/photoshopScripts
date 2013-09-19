var resolution = activeDocument.resolution;
var wn = createDialog();
wn.x.active = true;
wn.addEventListener ("keydown", function (e) {pressed (e)});

wn.closeBtn.addEventListener("click", function(e) {wn.close();});
wn.moveBtn.addEventListener("click", function(e) {moveLayer();app.refresh();});
wn.show();

function createDialog() {
	var dlg = new Window('dialog', 'Move Layer', {x:100, y:100, width:320, height:78});
	dlg.add("statictext",{x:10, y:10, width:80, height:20}, "x(x)");
	dlg.x = dlg.add("edittext",{x:10, y:30, width:80, height:24}, "0");
	dlg.add("statictext",{x:100, y:10, width:80, height:20}, "y(y)");
	dlg.y = dlg.add("edittext",{x:100, y:30, width:80, height:24}, "0");
	dlg.moveBtn = dlg.add("button",{x:230, y:10, width:80, height:24}, "Move");
	dlg.closeBtn = dlg.add("button", {x:230, y:44, width:80, height:24}, "Close");
	return dlg;
}

function moveLayer(){
	var x = parseFloat(wn.x.text);
	var y = parseFloat(wn.y.text);
	var saveUnit = preferences.rulerUnits;
	preferences.rulerUnits = Units.PIXELS;
	activeDocument.activeLayer.translate(x, y);
	preferences.rulerUnits = saveUnit;
}
	
function pressed (e) {
	switch(e.keyName) {
		case "X":
		wn.x.active = true;
		e.preventDefault();
		break;
		case "Y":
		wn.y.active = true;
		e.preventDefault();
		break;
		case "Enter":
		moveLayer();
		app.refresh();
		e.preventDefault();
		break;
	}

}