
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
	CreateGrid(val[0], val[1], val[2], val[3], val[4], val[5]);
}

// =======================================================
function CreateGrid(x, y, w, h, hr, vr) {
	for (var j = 0; j < vr; j ++) {
		for (var i = 0; i < hr; i ++) {
		
			var left = x + i * w;
			var top = y + j * h;
			var right  = left + w;
			var bottom = top + h;
			var region = [[left, top], [right, top], [right, bottom], [left, bottom]];
			app.activeDocument.selection.select(region);
			
			app.activeDocument.selection.fill(((i + j) % 2 == 0) ? app.foregroundColor : app.backgroundColor);
		}
	}
}