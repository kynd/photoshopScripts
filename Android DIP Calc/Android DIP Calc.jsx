var wn = createDialog();
wn.input.active = true;
wn.input.addEventListener ("change", function (e) {update();});
wn.closeBtn.addEventListener("click", function(e) {wn.close();});
update();
wn.show();
function createDialog() {	var dlg = new Window('dialog', 'DIP / PIXELS', {x:100, y:100, width:370, height:200});	dlg.input = dlg.add("edittext",{x:10, y:15, width:80, height:24}, "0");
	
	
	dlg.xx_px = dlg.add("statictext",{x:10, y:60, width:180, height:20}, "XXHDPI");	dlg.x_px = dlg.add("statictext",{x:10, y:90, width:180, height:20}, "XHDPI");	dlg.h_px = dlg.add("statictext",{x:10, y:120, width:180, height:20}, "HDPI");	dlg.m_px = dlg.add("statictext",{x:10, y:150, width:180, height:20}, "MDPI");
		
	dlg.xx_px = dlg.add("statictext",{x:90, y:60, width:120, height:20});	dlg.x_px = dlg.add("statictext",{x:90, y:90, width:120, height:20});	dlg.h_px = dlg.add("statictext",{x:90, y:120, width:120, height:20});	dlg.m_px = dlg.add("statictext",{x:90, y:150, width:120, height:20});
	
		dlg.px_xx = dlg.add("statictext",{x:240, y:60, width:120, height:20});	dlg.px_x = dlg.add("statictext",{x:240, y:90, width:120, height:20});	dlg.px_h = dlg.add("statictext",{x:240, y:120, width:120, height:20});	dlg.px_m = dlg.add("statictext",{x:240, y:150, width:120, height:20});
		dlg.closeBtn = dlg.add("button", {x:180, y:15, width:180, height:24}, "Close");	return dlg;}

function update() {
	var v = parseFloat(wn.input.text);
	wn.xx_px.text = v + "dip = " + v * 3 + "px";
	wn.x_px.text = v + "dip = " + v * 2 + "px";
	wn.h_px.text = v + "dip = " + v * 1.5 + "px";
	wn.m_px.text = v + "dip = " + v * 1 + "px";
	
	wn.px_xx.text = v + "px = " + round(v / 3) + "dip";
	wn.px_x.text = v + "px = " + round(v / 2) + "dip";
	wn.px_h.text = v + "px = " + round(v / 1.5) + "dip";
	wn.px_m.text = v + "px = " + round(v / 1) + "dip";
}

function round(n) {
	return Math.round(n * 100) / 100;
}