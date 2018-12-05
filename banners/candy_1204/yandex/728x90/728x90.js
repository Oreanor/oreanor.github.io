(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"728x90_atlas_NP_", frames: [[0,142,320,140],[0,0,320,140],[0,284,320,140]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.p1 = function() {
	this.initialize(img.p1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,111,120);


(lib.p2 = function() {
	this.spriteSheet = ss["728x90_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.p3 = function() {
	this.spriteSheet = ss["728x90_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.p4 = function() {
	this.spriteSheet = ss["728x90_atlas_NP_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ClipGroup_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoRBrIAAjVIQjAAIAADVg");
	mask.setTransform(53,10.7);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00AAE3").s().p("AnxBHQgkghAVgvQATgsA7gZQBCgcBsAAQAbABAuAGIALACIgPAcQgigKgcAAQg2AAgtAQQg8AWgJAqQgGAaATAWQAYAeA0gDQAQAAAggLQAmgOAXgRIA2gvIALgHQAHgDAIAAIA7AAIASBQIAlhPIBAAAIAlA9IAbg9IA7AAIgzBwIg9AAIgnhBIgcBBIglAAIAAAAIhGAAIgCgUIhAAAIgVATIgpAAQgyASg9AAQhbAAgngkgAiqAwIAlgBIgDgggAFOBkIAlglIglhVIA6AAIAQAuIAvgvIBCAAIhyByQgGAFgEACIgNACgADZBaIhfAAIA0hwIBfAAQAtAAARAWQAOARgLAWQgJAVgYANQgfARgyAAIgDAAgADHA+IAQAAQA4AAAIgeQAHgbguAAIgQAAg");
	this.shape.setTransform(54,10.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(1.9,0.1,104.2,21.3), null);


(lib.p4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p4_1, new cjs.Rectangle(0,0,320,140), null);


(lib.p3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p3_1, new cjs.Rectangle(0,0,320,140), null);


(lib.p2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2_1, new cjs.Rectangle(0,0,320,140), null);


(lib.dfgdfggg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMAZQgFgFgBgHIAHgBQABAGADADQADACAEAAQAEAAAEgDQADgDAAgGQAAgEgDgDQgDgEgFAAIgEABIABgFIABAAQADAAAEgCQAEgDAAgFQAAgDgDgDQgDgCgDAAQgEAAgDACQgCADgBAFIgHgBQABgHAFgEQAEgEAHAAQAEAAAEACQAEACACADQACAEAAAEQAAADgCADQgCADgEACQAFABADADQADAEAAAFQAAAIgGAFQgFAFgIAAQgHAAgFgEg");
	this.shape.setTransform(213.3,4.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMAYQgGgEAAgHIAHgBQABAGADACQADADAEAAQAEAAAEgEQAEgEAAgGQAAgGgEgDQgEgDgEAAQgEAAgCACQgDABgCACIgGgBIAGgdIAbAAIAAAHIgWAAIgDAPQAFgDAFAAQAHAAAGAFQAFAEAAAIQAAAIgEAGQgGAHgJAAQgIAAgEgFg");
	this.shape_1.setTransform(209.1,4.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_2.setTransform(204.6,4.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMAXQgFgHgBgQQAAgJACgGQADgHADgDQAEgDAGAAQAEAAAEACQADABADAEIADAIIABANQAAAKgCAGQgBAGgFAEQgEADgGAAQgHAAgFgGgAgHgSQgDAFgBANQABAOADAFQADAEAEAAQAFAAADgEQAEgFAAgOQAAgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_3.setTransform(200.5,4.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgKAcQAAgHADgJQACgKAFgIQAEgIAGgHIgbAAIAAgGIAkAAIAAAFQgGAGgGAKQgFAIgCALQgCAHgBAIg");
	this.shape_4.setTransform(196.3,4.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMAXQgGgHABgQQAAgJABgGQACgHAFgDQAEgDAFAAQAFAAADACQADABADAEIAEAIIABANQAAAKgCAGQgCAGgEAEQgEADgHAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQADgFAAgOQAAgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_5.setTransform(192,4.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNAXQgFgHAAgPQAAgPAGgIQAFgGAJAAQAGAAAFAEQAEADABAHIgHABQgBgFgCgBQgCgDgFAAIgFABQgDADgCAEQgCAFAAAJQACgEAEgCIAHgCQAHAAAFAFQAFAEAAAJQAAAFgDAFQgCAEgEADQgEACgFAAQgIAAgGgGgAgGABQgEADAAAGIACAHQABADADACQADABACAAQAEAAAEgDQADgEAAgGQAAgGgDgDQgEgDgEAAQgFAAgCADg");
	this.shape_6.setTransform(187.8,4.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMAaQgEgEgBgHIAHgBQABAFACACQADACADAAQADAAACgBIAEgEIADgHIABgIIAAgCQgCAEgEACQgEACgDAAQgHAAgFgFQgFgEAAgJQAAgJAFgFQAFgFAIAAQAFAAAEADQAFADACAFQADAGAAAKQAAAKgDAHQgCAGgFAEQgEADgGAAQgGAAgFgDgAgHgTQgEAEAAAGQAAAGAEADQADADAEAAQAFAAADgDQADgDAAgGQAAgGgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_7.setTransform(183.5,4.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgJAcQAAgHACgJQADgKAEgIQAEgIAGgHIgbAAIAAgGIAkAAIAAAFQgGAGgFAKQgGAIgCALQgCAHgBAIg");
	this.shape_8.setTransform(179.3,4.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgKAcQAAgHADgJQACgKAFgIQAEgIAGgHIgcAAIAAgGIAlAAIAAAFQgGAGgGAKQgFAIgCALQgCAHgBAIg");
	this.shape_9.setTransform(175.1,4.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_10.setTransform(170.6,4.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgMAXQgGgHAAgQQABgJACgGQACgHADgDQAFgDAFAAQAFAAADACQADABADAEIADAIIACANQgBAKgCAGQgCAGgDAEQgFADgGAAQgIAAgEgGgAgHgSQgDAFgBANQABAOADAFQADAEAEAAQAFAAADgEQADgFABgOQgBgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_11.setTransform(166.5,4.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_12.setTransform(162,4.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_13.setTransform(155.4,4.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAIABQAFABACACQADACACADQACAEAAAEQAAAHgFAEQgFAFgMAAIgNAAIAAAYgAgNAAIANAAQAIAAADgDQADgDAAgFQAAgDgBgDQgCgCgEgBIgHgBIgNAAg");
	this.shape_14.setTransform(150.1,4.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgRAdIAAg5IAkAAIAAAHIgdAAIAAAyg");
	this.shape_15.setTransform(145.7,4.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_16.setTransform(140.3,4.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgNAYQgFgEAAgHIAHgBQABAGADACQADADAEAAQAFAAADgEQAEgEgBgGQABgGgEgDQgDgDgFAAQgDAAgDACQgDABgBACIgHgBIAGgdIAbAAIAAAHIgWAAIgDAPQAGgDAEAAQAHAAAFAFQAGAEAAAIQAAAIgEAGQgGAHgJAAQgHAAgGgFg");
	this.shape_17.setTransform(133.2,4.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_18.setTransform(128.6,4.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgMAXQgFgHAAgQQAAgJABgGQACgHAFgDQAEgDAFAAQAFAAADACQAEABACAEIAEAIIAAANQAAAKgBAGQgDAGgEAEQgDADgHAAQgHAAgFgGgAgHgSQgEAFABANQgBAOAEAFQADAEAEAAQAFAAADgEQAEgFgBgOQABgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_19.setTransform(124.6,4.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgSAdIAAgFIAGgIIAJgIQAIgIADgEQADgEAAgEQAAgEgDgDQgCgDgGAAQgDAAgEADQgDADAAAGIgHgBQABgIAFgEQAFgFAHAAQAIAAAFAFQAFAEgBAHIgBAHQgBADgDADQgEAEgHAGIgIAHIgDAEIAcAAIAAAHg");
	this.shape_20.setTransform(120.3,4.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_21.setTransform(115.8,4.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgNAYQgFgEAAgHIAHgBQABAGADACQADADAEAAQAFAAADgEQADgEAAgGQAAgGgDgDQgDgDgFAAQgDAAgDACQgDABgBACIgHgBIAFgdIAcAAIAAAHIgWAAIgDAPQAGgDAEAAQAIAAAEAFQAGAEAAAIQAAAIgFAGQgFAHgJAAQgHAAgGgFg");
	this.shape_22.setTransform(111.9,4.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_23.setTransform(107.5,4.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgMAXQgGgHABgQQAAgJABgGQACgHAFgDQAEgDAFAAQAFAAADACQADABADAEIAEAIIABANQAAAKgCAGQgCAGgEAEQgEADgHAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQADgFAAgOQAAgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_24.setTransform(103.4,4.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgKAcQABgHACgJQADgKAEgIQAEgIAFgHIgbAAIAAgGIAkAAIAAAFQgFAGgFAKQgGAIgCALQgCAHAAAIg");
	this.shape_25.setTransform(99.2,4.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgJAcQgBgHADgJQADgKAEgIQAEgIAFgHIgaAAIAAgGIAjAAIAAAFQgFAGgFAKQgGAIgCALQgCAHAAAIg");
	this.shape_26.setTransform(94.9,4.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_27.setTransform(88,4.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_28.setTransform(82.4,4.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAQAdIAAgsIgeAsIgIAAIAAg5IAHAAIAAAtIAdgtIAIAAIAAA5g");
	this.shape_29.setTransform(76.8,4.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_30.setTransform(71.1,7.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgMAYQgGgFAAgHQAAgGADgEQADgCAFgCQgEgBgCgDQgCgDAAgEQgBgHAFgEQAEgEAHAAQAHAAAFAEQAFAEgBAHQAAAEgCADQgCADgEABQAFACADADQADAEAAAFQAAAHgFAFQgFAFgJAAQgIAAgEgFgAgHAEQgDADgBAFIACAGIAEAEIAFABQAFAAADgDQAEgDAAgFQAAgFgEgDQgDgEgFAAQgEAAgDAEgAgFgUQgEADAAADQAAAEAEADQACADADAAQAEAAADgDQACgDAAgDQAAgEgCgDQgDgCgEAAQgDAAgCACg");
	this.shape_31.setTransform(67.9,4.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_32.setTransform(62.8,7.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAQAbIAAgMIgfAAIAAAMIgGAAIAAgSIADAAQAIgJAAgaIAbAAIAAAjIAFAAIAAASgAgLAJIAWAAIAAgdIgPAAQgBAUgGAJg");
	this.shape_33.setTransform(59.4,6.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgDAHQAAgBABAAQAAAAABgBQAAAAABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_34.setTransform(54.3,7.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAKAdIAAgfIgTAfIgHAAIAAgpIAHAAIAAAfIASgfIAIAAIAAApgAgGgUQgEgDAAgEIAFAAIACADIADABIAFgBIACgDIAFAAQAAAEgEADQgCACgGABQgDgBgDgCg");
	this.shape_35.setTransform(51.2,4.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgKAEIAAgHIAVAAIAAAHg");
	this.shape_36.setTransform(47.8,5.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgSAdIABgFIAEgIIAJgIQAJgIADgEQADgEAAgEQAAgEgCgDQgDgDgFAAQgEAAgEADQgCADAAAGIgHgBQAAgIAFgEQAEgFAIAAQAIAAAFAFQAEAEABAHIgBAHQgCADgEADQgDAEgHAGIgIAHIgCAEIAbAAIAAAHg");
	this.shape_37.setTransform(44.4,4.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAKAdIAAgfIgTAfIgHAAIAAgpIAHAAIAAAfIATgfIAHAAIAAApgAgGgUQgEgDAAgEIAFAAIACADIADABIAFgBIACgDIAFAAQAAAEgEADQgDACgEABQgFgBgCgCg");
	this.shape_38.setTransform(38.3,4.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAKAVIAAgfIgTAfIgHAAIAAgpIAHAAIAAAfIASgfIAIAAIAAApg");
	this.shape_39.setTransform(34,5.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAIAVIgIgNIgDgFIgEgBIAAATIgHAAIAAgpIAHAAIAAASQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQABgBACgHIADgGIADgCIAFgBIACAAIAAAGIgCAAIgEABIgCAFIgDAGIgDACQADABAFAHIAHANg");
	this.shape_40.setTransform(30.5,5.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_41.setTransform(26.8,5.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAKAVIAAgTIgTAAIAAATIgHAAIAAgpIAHAAIAAASIATAAIAAgSIAHAAIAAApg");
	this.shape_42.setTransform(22.7,5.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAKAVIAAgfIgTAfIgHAAIAAgpIAHAAIAAAfIATgfIAHAAIAAApg");
	this.shape_43.setTransform(18.5,5.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAXAbIAAgMIgzAAIAAgpIAHAAIAAAjIAQAAIAAgjIAGAAIAAAjIAQAAIAAgjIAHAAIAAAjIAFAAIAAASg");
	this.shape_44.setTransform(13.3,6.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgNAQQgGgFAAgLQAAgLAHgFQAGgFAGAAQAIAAAGAGQAFAGABAJQgBAHgCAFQgCAFgFACQgEADgGAAQgIAAgFgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQADgEABgIQgBgHgDgEQgDgEgGAAQgEAAgDAEg");
	this.shape_45.setTransform(7.8,5.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAIABQAFABADACQADACABADQACAEAAAEQAAAHgFAEQgEAFgNAAIgNAAIAAAYgAgNAAIANAAQAIAAADgDQADgDAAgFQAAgDgCgDQgCgCgCgBIgIgBIgNAAg");
	this.shape_46.setTransform(3.2,4.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAQAbIAAgMIgfAAIAAAMIgGAAIAAgSIADAAQAIgJAAgaIAbAAIAAAjIAFAAIAAASgAgLAJIAWAAIAAgdIgPAAQgBAUgGAJg");
	this.shape_47.setTransform(170.5,-2.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgPAJIAHgBQABAEACACQADACADAAQADAAACgCQADgCAAgDQAAgBAAAAQAAgBAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAIgFAAIgCAAIAAgFIAGAAIACgCQABAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAQgCgCgDAAQgFAAgCAHIgHgBQAEgMALAAQAGAAAEAEQAEAEgBAFQAAAFgEADQACAAACADQACADAAADQAAAGgEADQgFAEgGAAQgOAAgCgNg");
	this.shape_48.setTransform(166.6,-3.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgNAQQgFgGAAgKQAAgJAFgGQAGgGAIAAQAHAAAGAGQAFAGAAAJIAAACIgeAAQAAAHAEADQAEAEAEAAQADAAAEgCQACgCABgFIAIABQgCAHgFADQgEAEgHAAQgIAAgGgGgAgHgMQgDAEAAAFIAWAAQAAgFgDgDQgEgEgEAAQgEAAgEADg");
	this.shape_49.setTransform(162.8,-3.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgNAQQgGgFAAgLQAAgLAHgFQAGgFAGAAQAIAAAGAGQAFAGABAJQgBAHgCAFQgCAFgFACQgEADgGAAQgIAAgFgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQADgEABgIQgBgHgDgEQgDgEgGAAQgEAAgDAEg");
	this.shape_50.setTransform(158.5,-3.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgRAdIAAg4IAGAAIAAAFQACgDADgCQADgBADAAQAGAAADADQAEACADAFQACAFAAAGQAAAHgCAEQgDAFgEACQgFADgEAAQgDAAgDgBQgDgCgBgCIAAAUgAgIgSQgDAEAAAIQAAAHADAEQADADAFAAQAEAAAEgEQACgEAAgHQAAgIgCgEQgEgEgEAAQgEAAgEAFg");
	this.shape_51.setTransform(154.4,-2.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAOAdIAAgyIgcAAIAAAyIgIAAIAAg5IAsAAIAAA5g");
	this.shape_52.setTransform(149.4,-4.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgDAHQAAAAABgBQAAAAABgBQAAAAABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_53.setTransform(143.6,-1.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgPASQgDgDAAgFQAAgDABgDQACgCACgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgDACQgCACgBAEIgHgBIADgHQADgDADgBQAEgCAFAAQAFAAADACQAEABACACIACAFIAAAGIAAAIIAAANIACAFIgHAAQgBgCgBgDIgHAEIgHACQgHAAgEgEgAAAADIgHABIgCACIgBAEQAAAAAAABQAAABAAAAQAAABABAAQAAABABAAQACACAEAAQADAAADgCQADgBACgDQABgDAAgEIAAgDIgKADg");
	this.shape_54.setTransform(140.5,-3.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgQAVIAAgpIAQAAIAIABQADABACADQACADAAADIgBAFIgEAEQADAAACADQACACAAAEQgBAGgEADQgDADgHAAgAgJAPIAJAAIAHgBQADgCAAgDIgBgEQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAAAgBAAIgGAAIgIAAgAgJgCIAHAAIAGgBIACgCQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgDgDgCIgHgBIgHAAg");
	this.shape_55.setTransform(136.5,-3.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAIAVIgIgNIgDgFIgEgBIAAATIgHAAIAAgpIAHAAIAAASQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQABgBACgHIADgGIADgCIAFgBIACAAIAAAGIgCAAIgEABIgCAFIgDAGQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAAAQADABAFAHIAHANg");
	this.shape_56.setTransform(132.9,-3.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_57.setTransform(129.2,-3.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgNAQQgGgFABgLQAAgLAGgFQAFgFAHAAQAJAAAFAGQAFAGAAAJQABAHgDAFQgDAFgEACQgFADgFAAQgIAAgFgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAGAAADgEQAEgEgBgIQABgHgEgEQgDgEgGAAQgEAAgEAEg");
	this.shape_58.setTransform(125.1,-3.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAUAdIAAgvIgRAvIgFAAIgRgwIAAAwIgHAAIAAg5IALAAIAOAoIABAJIADgKIAOgnIAKAAIAAA5g");
	this.shape_59.setTransform(119.7,-4.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_60.setTransform(113.6,-1.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgLAVIAAgpIAXAAIAAAGIgQAAIAAAjg");
	this.shape_61.setTransform(111.4,-3.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgDAHQAAAAABgBQAAAAABgBQAAAAABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_62.setTransform(106.8,-1.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgMAaQgEgEgBgHIAHgBQABAFACACQADACADAAQADAAACgBIAEgEIADgHIABgIIAAgCQgCAEgEACQgEACgDAAQgHAAgFgFQgFgEAAgJQAAgJAFgFQAFgFAIAAQAFAAAEADQAFADACAFQADAGAAAKQAAAKgDAHQgCAGgFAEQgEADgGAAQgGAAgFgDgAgHgTQgEAEAAAGQAAAGAEADQADADAEAAQAFAAADgDQADgDAAgGQAAgGgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_63.setTransform(103.7,-4.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_64.setTransform(99.1,-4.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_65.setTransform(95,-4.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgMAYQgGgEAAgHIAHgBQABAGADACQADADAEAAQAFAAADgEQAEgEgBgGQABgGgEgDQgDgDgFAAQgEAAgCACQgDABgBACIgHgBIAGgdIAbAAIAAAHIgWAAIgDAPQAFgDAFAAQAHAAAGAFQAFAEAAAIQAAAIgEAGQgGAHgJAAQgHAAgFgFg");
	this.shape_66.setTransform(91,-4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_67.setTransform(86.4,-4.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_68.setTransform(82.1,-4.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgBASIAKgSIgKgRIAFAAIANARIgNASgAgQASIALgSIgLgRIAGAAIALARIgLASg");
	this.shape_69.setTransform(76.2,-3.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_70.setTransform(73.1,-1.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgRAdIAAg5IAkAAIAAAHIgdAAIAAAyg");
	this.shape_71.setTransform(70.3,-4.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_72.setTransform(67,-1.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_73.setTransform(63.1,-4.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_74.setTransform(59.4,-1.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgMAaQgGgEgDgHQgDgIAAgHQAAgJADgGQAEgHAGgEQAGgCAHAAQAIAAAGADQAGAFACAIIgHACQgCgHgEgCQgEgEgFAAQgGAAgEAEQgFADgCAGQgBAEAAAGQAAAGACAGQACAFAEADQAFADAEAAQAGAAAFgEQAEgEACgGIAHABQgCAJgGAGQgGAEgJAAQgJAAgFgDg");
	this.shape_75.setTransform(55.5,-4.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAPAdIAAgsIgdAsIgHAAIAAg5IAGAAIAAAtIAegtIAIAAIAAA5g");
	this.shape_76.setTransform(48,-4.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AATAjIAAgNIglAAIAAANIgHAAIAAgUIAFAAQAHgKAAgfIAAgJIAhAAIAAAyIAGAAIAAAUgAgGgZIgBAVQgCALgEAIIAaAAIAAgrIgTAAg");
	this.shape_77.setTransform(42.4,-3.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_78.setTransform(37.2,-4.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AASAdIgHgSIgXAAIgGASIgIAAIAWg5IAHAAIAYA5gAgDgLIgGAQIASAAIgGgPIgDgLIgDAKg");
	this.shape_79.setTransform(31.8,-4.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AALAdIgKgQQgDgGgDgDQgDgCgEAAIAAAbIgHAAIAAg5IAHAAIAAAaQAGAAABgCQADgCACgIIAEgIIAFgEQACgCADAAIAFABIAAAGIgBAAIgCAAQgDAAgCACIgEAHQgDAIgCABIgEADQAEABAGAJIAMATg");
	this.shape_80.setTransform(27.3,-4.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AALASIgLgSIALgRIAGAAIgKARIAKASgAgDASIgNgSIANgRIAFAAIgJARIAJASg");
	this.shape_81.setTransform(22.6,-3.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_82.setTransform(15.5,-4.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_83.setTransform(9.5,-4.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_84.setTransform(3.5,-4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dfgdfggg, new cjs.Rectangle(-1.6,-10.4,219.1,21.8), null);


(lib.p1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p1();
	this.instance.parent = this;
	this.instance.setTransform(73,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1_1, new cjs.Rectangle(73,10,111,120), null);


// stage content:
(lib._728x90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Eg4ygG8MBxlAAAIAAN5MhxlAAAg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(317));

	// legal
	this.addr2 = new lib.dfgdfggg();
	this.addr2.parent = this;
	this.addr2.setTransform(507,75.8);

	this.timeline.addTween(cjs.Tween.get(this.addr2).wait(317));

	// logo
	this.instance = new lib.ClipGroup_8();
	this.instance.parent = this;
	this.instance.setTransform(613.1,38.6,1.3,1.3,0,0,0,53.3,10.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(317));

	// wave
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ECF1F6").s().p("AyZHyIAGvuMAkuAALIgGPug");
	this.shape_1.setTransform(617.7,47.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(317));

	// p4.jpg
	this.instance_1 = new lib.p4_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(385.5,77.2,0.643,0.643,0,0,0,130.1,120);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(237).to({_off:false},0).to({regX:130,x:379,alpha:1},5,cjs.Ease.get(1)).wait(69).to({regX:130.1,x:372.7,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// p3.jpg
	this.instance_2 = new lib.p3_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(385.5,77.2,0.643,0.643,0,0,0,130.1,120);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(158).to({_off:false},0).to({regX:130,x:379,alpha:1},5,cjs.Ease.get(1)).wait(69).to({regX:130.1,x:372.7,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(79));

	// p2.jpg
	this.instance_3 = new lib.p2_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(385.5,77.2,0.643,0.643,0,0,0,130.1,120);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(79).to({_off:false},0).to({regX:130,x:379,alpha:1},5,cjs.Ease.get(1)).wait(69).to({regX:130.1,x:372.7,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(158));

	// p1.jpg
	this.instance_4 = new lib.p1_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(385.5,77.2,0.643,0.643,0,0,0,130.1,120);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:130,x:379,alpha:1},5,cjs.Ease.get(1)).wait(69).to({regX:130.1,x:372.7,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(237));

	// mask - копия: 2 - копия (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_237 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_1_graphics_238 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_1_graphics_239 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_1_graphics_240 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_1_graphics_241 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_1_graphics_242 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_1_graphics_243 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_1_graphics_244 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_1_graphics_245 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_1_graphics_308 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh+gRIAAAAIAAzpMBCAAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_1_graphics_309 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh+gRIAAAAIAAzpMBCAAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_1_graphics_310 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_1_graphics_311 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh+gRIAAAAIAAzpMBCAAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_1_graphics_312 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh+gRIAAAAIAAzpMBCAAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_1_graphics_313 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_1_graphics_314 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh+gRIAAAAIAAzpMBCAAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_1_graphics_315 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh+gRIAAAAIAAzpMBCAAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_1_graphics_316 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(237).to({graphics:mask_1_graphics_237,x:395.5,y:108}).wait(1).to({graphics:mask_1_graphics_238,x:299.4,y:108}).wait(1).to({graphics:mask_1_graphics_239,x:216.1,y:108}).wait(1).to({graphics:mask_1_graphics_240,x:145.7,y:108}).wait(1).to({graphics:mask_1_graphics_241,x:88,y:108}).wait(1).to({graphics:mask_1_graphics_242,x:43.2,y:108}).wait(1).to({graphics:mask_1_graphics_243,x:11.1,y:108}).wait(1).to({graphics:mask_1_graphics_244,x:-8.1,y:108}).wait(1).to({graphics:mask_1_graphics_245,x:-14.5,y:108}).wait(1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_1_graphics_308,x:222.7,y:112}).wait(1).to({graphics:mask_1_graphics_309,x:124.3,y:112}).wait(1).to({graphics:mask_1_graphics_310,x:39,y:112}).wait(1).to({graphics:mask_1_graphics_311,x:-33.2,y:112}).wait(1).to({graphics:mask_1_graphics_312,x:-92.3,y:112}).wait(1).to({graphics:mask_1_graphics_313,x:-138.2,y:112}).wait(1).to({graphics:mask_1_graphics_314,x:-171,y:112}).wait(1).to({graphics:mask_1_graphics_315,x:-190.7,y:112}).wait(1).to({graphics:mask_1_graphics_316,x:-197.3,y:112}).wait(1));

	// t4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#19B7E4").s().p("AgiA5IAAhxIBFAAIAAANIg1AAIAAAlIArAAIAAAMIgrAAIAAAmIA1AAIAAANg");
	this.shape_2.setTransform(181.3,55.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#19B7E4").s().p("AAeA5IAAgzIg7AAIAAAzIgRAAIAAhxIARAAIAAAzIA7AAIAAgzIARAAIAABxg");
	this.shape_3.setTransform(170.2,55.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#19B7E4").s().p("AAeA5IAAgzIg7AAIAAAzIgRAAIAAhxIARAAIAAAzIA7AAIAAgzIARAAIAABxg");
	this.shape_4.setTransform(158,55.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#19B7E4").s().p("AgWA2QgLgEgHgIQgGgGgGgNQgEgLAAgMQAAgLAEgLQAFgMAHgHQAHgIALgFQALgDALAAQAMAAALADQAKAFAIAIQAIAIADALQAFAKAAAMQAAANgFAKQgEALgHAIQgIAIgKAEQgKAEgNAAQgMAAgKgEgAgQgoQgHADgFAGQgFAEgDAJQgDAJAAAJQAAALADAHQADAJAFAFQAFAGAHADQAIADAIAAQAJAAAHgDQAHgCAGgHQAGgGACgIQADgHAAgLQAAgJgDgJQgCgIgGgFQgGgHgHgCQgHgDgJAAQgIAAgIADg");
	this.shape_5.setTransform(145.5,55.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#19B7E4").s().p("AgwA5QgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAgKIAFAAIAGgBQAEgCACgDQAEgFACgGQADgKABgIQADgMABgPIACgnIBEAAIAABxIgQAAIAAhkIgkAAQgBAWgCAQIgFAaQgCALgEAIQgEAIgDAEQgEAEgFABQgEACgGAAg");
	this.shape_6.setTransform(132.5,55.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#19B7E4").s().p("AgWA2QgKgEgIgIQgIgIgEgLQgDgJAAgOQAAgNADgJQAEgLAIgIQAHgIALgFQALgDALAAQAMAAALADQALAFAHAIQAIAIAEALQADAJAAANQAAAOgDAJQgFALgHAIQgIAIgKAEQgLAEgMAAQgLAAgLgEgAgQgoQgHACgFAHQgEAEgEAJQgDAJAAAJQAAALADAHQADAJAFAFQAGAHAGACQAIADAIAAQAJAAAIgDQAGgCAGgHQAFgFADgJQADgHAAgLQAAgJgDgJQgEgJgEgEQgGgHgGgCQgIgDgJAAQgIAAgIADg");
	this.shape_7.setTransform(121.4,55.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#19B7E4").s().p("AAfA5IgEgBIgfgtQgDgEgCAAQgCgCgEAAIgOAAIAAA0IgQAAIAAhxIAQAAIAAAyIAMAAIAGgBIAFgFIAcgoIADgDQABAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAIAOAAIgiAvQgDAFgGACQAEACACABIAGAHIAiAxg");
	this.shape_8.setTransform(110.8,55.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#19B7E4").s().p("AgoA5IAAhxIAlAAQAIAAAKACQAHACAFAEQAEACAEAHQACAGAAAHIgBAIIgEAHIgHAGIgJAEQAMACAGAGQAHAHAAALQAAAGgDAHQgDAGgFAEQgEAEgJADQgGACgLAAgAgXAsIAXAAQAHAAAEgBIAIgEQADgDABgEIABgIQAAgJgGgEQgFgFgNAAIgXAAgAgXgFIAegBIAHgEIAFgGQACgEAAgEQAAgKgGgFQgGgEgMAAIgUAAg");
	this.shape_9.setTransform(95.8,55.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4D575B").s().p("AAuA5IAAhZIgnBGIgCACIgDABIgCAAQgEAAgCgDIgohGIABAEIAABVIgOAAIAAhxIAMAAIAEAAIACADIAmBEIADAJIAEgJIAmhEIACgDIAEAAIAMAAIAABxg");
	this.shape_10.setTransform(209.2,34.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4D575B").s().p("AAeA5IAAhWIABgIIgGANIgzBMQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgNAAIAAhxIARAAIgBBeIADgHIADgGIA2hQIAFgBIAMAAIAABxg");
	this.shape_11.setTransform(195.6,34.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4D575B").s().p("AhHA5IAAhxIARAAIAABkIAvAAIAAhkIAPAAIAABkIAvAAIAAhkIARAAIAABxg");
	this.shape_12.setTransform(180.9,34.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4D575B").s().p("AgaA5QgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIAAgKIAFAAIAEgBQABAAAAAAQABAAAAAAQABAAAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAgBQACgBACgEIAFgLIguhQIAPAAIAEABIACADIAbAyIAEALIACgGIAag3IACgDQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAIANAAIguBjIgEAIIgGAEIgGADIgHABg");
	this.shape_13.setTransform(167.3,34.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4D575B").s().p("AgPA2QgJgEgIgIQgIgIgDgLQgEgKAAgNQAAgMAEgLQAEgJAIgJQAHgIALgEQAKgFALAAQANAAAJAFQAKAEAGAGIgFAIIgCABIgCABIgDgCIgGgEIgIgDQgFgCgHABQgIAAgHACQgGAEgGAFQgEAFgEAJQgDAIAAAKQAAAKADAJQADAIAGAFQADAGAIADQAHADAIAAIAJAAIAHgCIAHgEIAHgFIABAAIADABIAGAHQgHAJgKAEQgJAEgPAAQgMAAgKgEg");
	this.shape_14.setTransform(157.1,34.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4D575B").s().p("AAeA5IAAhWIABgIIgGANIgzBMQgBABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgNAAIAAhxIARAAIAABWIgBAIIADgHIA2hSIADgEQABAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAIANAAIAABxg");
	this.shape_15.setTransform(141.4,34.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4D575B").s().p("AAuA5IAAhVIAAgEIgnBGIgCACIgDABIgCAAQgEAAgCgDIgnhGIAAAEIABAEIAABRIgPAAIAAhxIAMAAIAEAAIACADIAmBEIADAJIAEgJIAmhEIADgDIACAAIANAAIAABxg");
	this.shape_16.setTransform(123.9,34.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4D575B").s().p("AgiA5IAAhxIBFAAIAAANIg1AAIAAAlIArAAIAAAMIgrAAIAAAmIA1AAIAAANg");
	this.shape_17.setTransform(112.2,34.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4D575B").s().p("AApA5IgEgBIgBgDIgLgaIgxAAIgLAaIgCADIgEABIgMAAIAuhxIAPAAIAuBxgAgUAPIApAAIgTgxIgCgGg");
	this.shape_18.setTransform(101.8,34.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4D575B").s().p("AgmA5IAAhxIAjAAQAJAAAJACQAIADAFAFQAFAEADAHQADAHAAAIQAAAIgDAGQgCAGgGAFQgFAFgJACQgIADgJAAIgSAAIAAAqgAgVACIASAAIAKgCQAEAAAFgEIAFgHQABgEAAgFQAAgGgBgEQgCgEgDgDQgDgDgGgCQgEgBgGAAIgSAAg");
	this.shape_19.setTransform(92.8,34.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4D575B").s().p("AAeA5IAAhWIABgIIgDAHIg2BSQAAABgBAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgMAAIAAhxIARAAIAABWIgBAIIAGgNIAzhMIADgEQABAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAIANAAIAABxg");
	this.shape_20.setTransform(81.4,34.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4D575B").s().p("AgIA5IAAhjIgkAAIAAgOIBZAAIAAAOIglAAIAABjg");
	this.shape_21.setTransform(70.6,34.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4D575B").s().p("AgPA2QgKgFgHgHQgHgHgEgMQgEgJAAgOQAAgLAEgMQADgJAIgJQAIgIAKgEQALgFALAAQANAAAJAFQAKAEAGAGIgFAIIgCABIgBABIgEgCIgFgEIgJgDQgFgCgHABQgIAAgHACQgHAEgGAFQgEAGgEAIQgCAJAAAJQAAAKADAJQADAJAFAEQAEAGAJADQAGADAIAAIAIAAIAIgCIAGgEIAHgEIABgBIABAAIACABIAHAHQgHAIgKAFQgLAEgOAAQgLAAgKgEg");
	this.shape_22.setTransform(60.8,34.6);

	var maskedShapeInstanceList = [this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},237).wait(80));

	// mask - копия: 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_158 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_2_graphics_159 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_2_graphics_160 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_2_graphics_161 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_2_graphics_162 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_2_graphics_163 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_2_graphics_164 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_2_graphics_165 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_2_graphics_166 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_2_graphics_229 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh+gRIAAAAIAAzpMBCAAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_2_graphics_230 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh+gRIAAAAIAAzpMBCAAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_2_graphics_231 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_2_graphics_232 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh+gRIAAAAIAAzpMBCAAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_2_graphics_233 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh+gRIAAAAIAAzpMBCAAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_2_graphics_234 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_2_graphics_235 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh+gRIAAAAIAAzpMBCAAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_2_graphics_236 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh+gRIAAAAIAAzpMBCAAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_2_graphics_237 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(158).to({graphics:mask_2_graphics_158,x:390.5,y:108}).wait(1).to({graphics:mask_2_graphics_159,x:294.4,y:108}).wait(1).to({graphics:mask_2_graphics_160,x:211.1,y:108}).wait(1).to({graphics:mask_2_graphics_161,x:140.7,y:108}).wait(1).to({graphics:mask_2_graphics_162,x:83,y:108}).wait(1).to({graphics:mask_2_graphics_163,x:38.2,y:108}).wait(1).to({graphics:mask_2_graphics_164,x:6.1,y:108}).wait(1).to({graphics:mask_2_graphics_165,x:-13.1,y:108}).wait(1).to({graphics:mask_2_graphics_166,x:-19.5,y:108}).wait(1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_2_graphics_229,x:222.7,y:112}).wait(1).to({graphics:mask_2_graphics_230,x:124.3,y:112}).wait(1).to({graphics:mask_2_graphics_231,x:39,y:112}).wait(1).to({graphics:mask_2_graphics_232,x:-33.2,y:112}).wait(1).to({graphics:mask_2_graphics_233,x:-92.3,y:112}).wait(1).to({graphics:mask_2_graphics_234,x:-138.2,y:112}).wait(1).to({graphics:mask_2_graphics_235,x:-171,y:112}).wait(1).to({graphics:mask_2_graphics_236,x:-190.7,y:112}).wait(1).to({graphics:mask_2_graphics_237,x:-197.3,y:112}).wait(80));

	// t3
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#19B7E4").s().p("AApA5IgDgBIgCgDIgLgbIgxAAIgLAbQAAABAAAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgMAAIAthxIAQAAIAuBxgAgUAPIApAAIgTgyIgCgGg");
	this.shape_23.setTransform(202.1,65.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#19B7E4").s().p("AgoA5IAAhxIAlAAQALAAAHACQAIACAEAEQAGAEACAFQACAFAAAIIgBAIIgEAHQgDAEgEACQgEADgFABQAMACAGAGQAHAHAAAKQAAAHgDAHQgDAGgFAEQgGAFgHACQgIACgJAAgAgXAsIAXAAQAHAAAEgBQAFgCADgDQACgCACgEQACgDAAgFQAAgIgHgGQgFgFgNAAIgXAAgAgXgFIAUAAQAFAAAFgCQAFgBACgDQAEgCABgEQACgDAAgEQAAgKgGgFQgGgEgMAAIgUAAg");
	this.shape_24.setTransform(191.9,65.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#19B7E4").s().p("AgHA5IAAhkIglAAIAAgNIBZAAIAAANIglAAIAABkg");
	this.shape_25.setTransform(181.7,65.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#19B7E4").s().p("AgPA2QgLgFgGgGQgHgJgEgKQgEgMAAgMQAAgMAEgKQAFgMAGgHQAIgIAKgEQALgFALABQALAAALADQAHADAJAIIgFAIIgCABIgCAAIgJgEIgIgEQgEgBgIAAQgIAAgHADQgGACgGAHQgGAHgCAGQgDAJAAAJQAAALADAIQADAIAFAGQAGAGAGADQAHACAIAAIAJAAIAHgCIAGgDIAGgEIABgBIACgBIADABIAGAIQgGAHgLAFQgKAFgOAAQgLAAgLgFg");
	this.shape_26.setTransform(171.9,65.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#19B7E4").s().p("AAeA5IAAg0Ig7AAIAAA0IgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_27.setTransform(160.2,65.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#19B7E4").s().p("AApA5IgDgBIgCgDIgKgbIgzAAIgJAbIgDADQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgMAAIAuhxIAQAAIAtBxgAgUAPIApAAIgSgtIgDgLg");
	this.shape_28.setTransform(148.7,65.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#19B7E4").s().p("AgmA5IAAhxIAjAAQALAAAHACQAIACAFAFQAFAEADAIQADAHAAAHQAAAIgDAHQgDAGgFAFQgFAEgJADQgIADgJAAIgSAAIAAAqgAgVACIASAAQAGAAAEgCQAFgBAEgDQAEgDABgEQABgFAAgFQAAgFgBgEQgCgEgDgDQgDgDgFgCQgFgBgGAAIgSAAg");
	this.shape_29.setTransform(139.7,65.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#19B7E4").s().p("AgHA5IAAhkIglAAIAAgNIBZAAIAAANIgkAAIAABkg");
	this.shape_30.setTransform(129.7,65.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#19B7E4").s().p("AgPA2QgJgEgIgHQgIgKgDgJQgEgMAAgMQAAgMAEgKQAEgLAIgIQAGgIALgEQALgFALABQALAAALADQAJADAHAIIgFAIIgBABIgDAAIgJgEQgCgCgGgCQgEgBgIAAQgIAAgHADQgGACgGAHQgFAFgDAIQgDAJAAAJQAAALADAIQADAHAFAHQAFAFAHAEQAHACAIAAIAJAAIAHgCIAGgDIAIgFIACgBIACABIAGAIQgHAHgKAFQgKAFgOAAQgLAAgLgFg");
	this.shape_31.setTransform(119.9,65.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#19B7E4").s().p("AgWA2QgLgEgHgIQgIgIgDgKQgFgLAAgNQAAgMAFgKQAEgLAHgIQAIgIAKgEQAKgFAMABQANgBAKAFQALAEAHAIQAHAGAFANQAEAKAAAMQAAANgEALQgFALgHAHQgHAIgLAEQgLAFgMAAQgLAAgLgFgAgPgoQgHACgGAHQgGAHgCAGQgDAJAAAJQAAAKADAIQADAJAFAGQAFAFAIADQAHADAIAAQAKAAAHgDQAIgDAEgFQAFgFADgKQADgHAAgLQAAgKgDgIQgDgIgFgFQgGgHgGgCQgIgDgJAAQgIAAgHADg");
	this.shape_32.setTransform(107.9,65.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#19B7E4").s().p("AgmA5IAAhxIAiAAQAMAAAHACQAHACAGAFQAGAFACAHQADAHAAAHQAAAJgDAGQgEAGgFAFQgFAEgIADQgJADgJAAIgRAAIAAAqgAgVACIARAAQAHAAAEgCQAFgBADgDQAEgCABgFIACgKQAAgFgCgEQgBgEgEgDQgCgDgGgCQgFgBgGAAIgRAAg");
	this.shape_33.setTransform(97.2,65.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#19B7E4").s().p("AAcA5IAAhkIg3AAIAABkIgRAAIAAhxIBYAAIAABxg");
	this.shape_34.setTransform(86,65.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#19B7E4").s().p("AAeA5IAAgxIgQAAIgEABQAAAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAIgDADIgbAmIgEAFQgCABgEAAIgNAAIAdgpQAGgIAGgDQgGAAgGgEQgFgBgDgEQgEgEgBgFQgCgEAAgHQAAgGADgHQACgGAGgEQAEgEAIgDQAHgCAKAAIAmAAIAABxgAgCgqIgIAEQgDACgBAEIgCAIQAAAFACAEQAAADAEADQACACAGACQADABAHAAIAWAAIAAgnIgWAAQgHAAgDABg");
	this.shape_35.setTransform(186,45);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#19B7E4").s().p("AAeA5IAAhPIABgPIgGANIgzBMIgDADQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgNAAIAAhxIARAAIgBBeIADgHIADgGIAzhMIADgEIAFgBIAMAAIAABxg");
	this.shape_36.setTransform(175.3,45);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#19B7E4").s().p("AAuA5IAAhVIAAgEIgmBFIgDADIgEABIgBAAQgEAAgCgEIgnhFIABAEIAABVIgPAAIAAhxIAQAAIACACIAqBNIADgJIAmhEIADgCIAPAAIAABxg");
	this.shape_37.setTransform(161.8,45);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#19B7E4").s().p("AgWA2QgKgEgIgIQgHgHgFgMQgEgLAAgMQAAgLAEgLQAFgMAHgHQAIgIAKgEQAKgEAMAAQANAAAKAEQALAFAHAHQAHAHAFAMQAEALAAALQAAAMgEALQgFAMgHAHQgHAIgLAEQgKAEgNABQgMgBgKgEgAgPgoQgIADgFAGQgFAFgDAIQgDAIAAAKQAAAMADAGQADAKAFAEQAEAFAJAEQAGAEAJgBQAKABAGgEQAJgEAEgFQAFgEADgKQADgIAAgKQAAgJgDgJQgDgIgFgFQgFgGgIgDQgGgDgKAAQgIAAgHADg");
	this.shape_38.setTransform(147.9,45);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#19B7E4").s().p("AAeA5IAAg0Ig7AAIAAA0IgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_39.setTransform(135.4,45);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#19B7E4").s().p("AgWA2QgLgEgHgIQgHgHgFgMQgEgLAAgMQAAgLAEgLQAGgMAGgHQAHgHALgFQAKgEAMAAQANAAAKAEQALAFAHAHQAHAIAEALQAFAKAAAMQAAANgFAKQgDALgIAIQgHAIgLAEQgKAEgNABQgMgBgKgEgAgQgoQgHADgFAGQgFAFgDAIQgDAJAAAJQAAALADAHQADAKAFAEQAEAFAIAEQAHAEAJgBQAJABAHgEQAIgDAFgGQAGgFACgJQADgHAAgLQAAgJgDgJQgCgHgGgGQgGgHgHgCQgHgDgJAAQgIAAgIADg");
	this.shape_40.setTransform(122.9,45);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#19B7E4").s().p("AAgA5QgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAIgfgtIgFgFQgCgBgEAAIgOAAIAAA0IgQAAIAAhxIAQAAIAAAxIAPAAIADgBIADgBIAegrQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAIAEgBIAOAAIgiAuQgDAGgGACQACABAEACIAGAHIAiAxg");
	this.shape_41.setTransform(112.3,45);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#19B7E4").s().p("AgeA2QgLgFgGgHIAGgIIADgBIABAAIACABIAFAFIAHADIAHACIAJAAQAHAAAHgCQAGgDAFgFQAGgFADgHQAEgIAAgJIg4AAIAAgLIA4AAIgFgQQgCgHgGgEQgFgFgGgCQgGgDgIAAQgHAAgFACIgIACIgGAEQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAIgBgBIgCgBIgFgIQAHgGAJgFQALgDALAAQAMAAAJAEQALAEAIAIQAGAHAFAMQAEALAAALQAAAMgEAMQgDAKgIAIQgGAIgLAEQgLAFgLAAQgNgBgLgEg");
	this.shape_42.setTransform(100.8,45);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#4D575B").s().p("AAeA5IAAgxIgQAAIgEABQAAAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAIgDADIgaAmIgFAFQgCABgEAAIgNAAIAdgpQAGgIAGgDQgGAAgGgEQgEgBgEgEQgEgEgBgFQgCgEAAgHQAAgGADgHQACgGAGgEQAFgFAHgCQAHgCAJAAIAoAAIAABxgAgDgqIgHAEQgEADAAADIgBAIQAAAFABAEQAAADAEADQACACAFACQAEABAGAAIAXAAIAAgnIgXAAQgGAAgEABg");
	this.shape_43.setTransform(193.4,24);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#4D575B").s().p("AApA5IgEgBIgCgDIgKgbIgxAAIgLAbQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAIgNAAIAthxIAQAAIAuBxgAgUAOIApAAIgUgxIgBgGg");
	this.shape_44.setTransform(183.4,24);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#4D575B").s().p("AAeA5IAAg0Ig7AAIAAA0IgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_45.setTransform(171.9,24);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#4D575B").s().p("AgnA5IAAhxIARAAIAAAwIAWAAQAJAAAIADQAIACAEADQAGAFACAFQACAGAAAHQAAAIgCAGQgDAGgFAFQgGAFgHACQgJACgHAAgAgWAsIAWAAIAKgBQAEgCAEgDQACgBABgFQACgDAAgFQAAgEgCgEQAAgEgDgCIgIgEIgggBg");
	this.shape_46.setTransform(161.4,24);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#4D575B").s().p("AgwA5QAAAAgBgBQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgKIAFAAIAHgBQADgCADgDQADgGACgFQACgFADgNQACgIABgTIADgnIBDAAIAAByIgQAAIAAhlIgkAAQgBAWgCAQQgCAQgDALQgCAMgEAGQgDAHgEAFQgEAEgFABQgFACgFAAg");
	this.shape_47.setTransform(149.5,24.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#4D575B").s().p("AAqA5IgEgBIgCgDIgLgbIgyAAIgKAbIgCADQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgNAAIAuhxIAPAAIAuBxgAgBgjIgTAxIApAAIgRgsIgEgLg");
	this.shape_48.setTransform(138.8,24);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#4D575B").s().p("AAgA5QgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAIgfgtQgCgDgDgCQgCgBgEAAIgOAAIAAA0IgQAAIAAhxIAQAAIAAAxIAPAAIADgBIADgBIAegrIADgDIAEgBIAOAAIgiAuQgDAGgGACQACABAEACIAGAHIAiAxg");
	this.shape_49.setTransform(128.6,24);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#4D575B").s().p("AAeA5IAAhWIABgIIgGANIgzBMQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgNAAIAAhxIARAAIAABWIgBAIIADgHIA2hSQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQAAAAABAAQABAAAAAAIANAAIAABxg");
	this.shape_50.setTransform(116.5,24);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#4D575B").s().p("AAeA5IAAg0Ig7AAIAAA0IgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_51.setTransform(104.3,24);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#4D575B").s().p("AgaA5QgBAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAgBIAAgKIAKAAIAEgCIADgDIAJgQIguhQIAPAAIAEABIACADIAbAyIAEALIACgGIAag3IACgDQAAAAABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAOAAIguBjIgEAHQgDAEgDABIgGADIgHABg");
	this.shape_52.setTransform(93.2,24.1);

	var maskedShapeInstanceList = [this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},158).to({state:[]},80).wait(79));

	// mask - копия (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_79 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_3_graphics_80 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_3_graphics_81 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_3_graphics_82 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_3_graphics_83 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_3_graphics_84 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_3_graphics_85 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_3_graphics_86 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_3_graphics_87 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_3_graphics_150 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_3_graphics_151 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_3_graphics_152 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_3_graphics_153 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_3_graphics_154 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_3_graphics_155 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_3_graphics_156 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_3_graphics_157 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_3_graphics_158 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(79).to({graphics:mask_3_graphics_79,x:390.5,y:108}).wait(1).to({graphics:mask_3_graphics_80,x:294.4,y:108}).wait(1).to({graphics:mask_3_graphics_81,x:211.1,y:108}).wait(1).to({graphics:mask_3_graphics_82,x:140.7,y:108}).wait(1).to({graphics:mask_3_graphics_83,x:83,y:108}).wait(1).to({graphics:mask_3_graphics_84,x:38.2,y:108}).wait(1).to({graphics:mask_3_graphics_85,x:6.1,y:108}).wait(1).to({graphics:mask_3_graphics_86,x:-13.1,y:108}).wait(1).to({graphics:mask_3_graphics_87,x:-19.5,y:108}).wait(1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_3_graphics_150,x:217.7,y:112}).wait(1).to({graphics:mask_3_graphics_151,x:119.3,y:112}).wait(1).to({graphics:mask_3_graphics_152,x:33.9,y:112}).wait(1).to({graphics:mask_3_graphics_153,x:-38.2,y:112}).wait(1).to({graphics:mask_3_graphics_154,x:-97.3,y:112}).wait(1).to({graphics:mask_3_graphics_155,x:-143.2,y:112}).wait(1).to({graphics:mask_3_graphics_156,x:-176,y:112}).wait(1).to({graphics:mask_3_graphics_157,x:-195.7,y:112}).wait(1).to({graphics:mask_3_graphics_158,x:-202.3,y:112}).wait(159));

	// t2
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#19B7E4").s().p("AAtA5IAAhVIABgEIgnBGIgCACIgEABIgBAAQgEAAgCgDIgnhGIAAAEIAAAEIAABRIgOAAIAAhxIAMAAIADAAIADADIApBNIAEgJIAmhEIACgDIAEAAIAMAAIAABxg");
	this.shape_53.setTransform(205.2,55.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#19B7E4").s().p("AgPA2QgKgEgHgIQgHgHgEgLQgEgKAAgOQAAgLAEgMQADgKAIgJQAIgHAKgFQALgDALAAQANAAAIADQALAEAGAHIgFAHIgCACIgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIgGgDIgIgEQgEgBgIgBQgIAAgHADQgJAGgEADQgEAGgEAJQgCAJAAAIQAAAKADAIQADAKAFAFQAFAFAIAEQAGACAIABIAQgDIAGgDIAHgFIABAAIABgBIACABIAHAHQgHAIgKAFQgLAFgOAAQgLAAgKgFg");
	this.shape_54.setTransform(192.7,55.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#19B7E4").s().p("AgPA3QgIgEgGgHQgFgHgDgLQgEgKAAgQQAAgPAEgKQADgKAFgJQAGgGAIgEQAHgDAIAAQAJAAAHADQAIAEAGAGQAFAIAEALQADAKAAAPQAAAPgDALQgEALgFAHQgGAHgIAEQgIAEgIAAQgGAAgJgEgAgJgrQgFADgDAFQgDAEgDAKQgCAIAAANQAAAOACAHQADAKADAFQADAFAFADQAEABAFAAQAGAAAEgBQAFgDADgFQADgFADgKQACgJAAgMQAAgLgCgKQgDgKgDgEQgDgFgFgDQgFgCgFAAQgEAAgFACg");
	this.shape_55.setTransform(178.4,55.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#19B7E4").s().p("AANA5IAAgdIgxAAIgDgBIgCgDIgBgHIA2hJIAOAAIAABIIARAAIAAAJIgBACIgCABIgOAAIAAAdgAgaAQIAnAAIABg3g");
	this.shape_56.setTransform(169,55.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#19B7E4").s().p("AgHA5IAAhjIglAAIAAgOIBZAAIAAAOIglAAIAABjg");
	this.shape_57.setTransform(155.8,55.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#19B7E4").s().p("AgWA2QgLgFgHgHQgIgIgEgKQgEgKAAgOQAAgNAEgKQAEgKAIgIQAHgIALgEQAKgFAMABQANgBAKAFQAKAEAIAIQAIAIADAKQAFALAAAMQAAANgFALQgEAKgHAIQgIAHgKAFQgKAFgNAAQgMAAgKgFgAgQgpQgIAFgEAEQgFAGgDAJQgDAIAAAJQAAAKADAIQADAJAFAGQAGAFAGADQAIADAIAAQAJAAAHgDQAHgDAGgFQAGgHACgIQADgIAAgKQAAgJgDgIQgCgIgGgHQgFgEgIgFQgHgDgJAAQgIAAgIADg");
	this.shape_58.setTransform(145.2,55.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#19B7E4").s().p("AAeA5IAAgzIg7AAIAAAzIgRAAIAAhxIARAAIAAAzIA7AAIAAgzIARAAIAABxg");
	this.shape_59.setTransform(128.6,55.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#19B7E4").s().p("AAeA5IAAhWIABgIIgGANIgzBMQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBABAAAAQAAAAgBAAQgBAAAAAAIgNAAIAAhxIARAAIAABWIgBAIIADgHIA2hSIADgDQABgBAAAAQABAAAAgBQABAAABAAQAAAAABAAIAMAAIAABxg");
	this.shape_60.setTransform(116.4,55.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#19B7E4").s().p("AhHA5IAAhxIARAAIAABlIAvAAIAAhlIAPAAIAABlIAvAAIAAhlIARAAIAABxg");
	this.shape_61.setTransform(101.7,55.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#19B7E4").s().p("AAqA5IgEgBQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAAAIgKgbIgzAAIgKAbIgBACIgEABIgNAAIAuhxIAPAAIAuBxgAgBgiIgTAxIApAAIgSgsIgDgLg");
	this.shape_62.setTransform(87.7,55.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#19B7E4").s().p("AAuA5IAAhZIgnBGIgCACIgDABIgCAAQgEAAgBgDIgohGIAAAEIAABVIgOAAIAAhxIAMAAIAEAAIACADIAnBEIACAJIAFgJIAlhEIACgDIAEAAIAMAAIAABxg");
	this.shape_63.setTransform(74.8,55.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#4D575B").s().p("AAiA5IgDAAIgfgyIAAACIgeAtIgCACIgCABIgQAAIAog5Igmg4IAQAAIADAAIABACIAdAtIAAgBIABgCIAcgqQAAAAABgBQAAAAAAgBQABAAABAAQAAAAABAAIAPAAIglA3IAnA6g");
	this.shape_64.setTransform(209.6,34.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#4D575B").s().p("AApA5IAAhxIARAAIAABxgAg5A5IAAhxIARAAIAAAxIAVAAQAKAAAJACQAGADAFADQAFAEACAFQADAHAAAGQAAAHgDAHQgDAIgFADQgEAEgIADQgGACgLAAgAgoAsIAVAAQAHAAAEgBQAGgCACgCQABgCACgEIABgJIgBgIQgBgDgCgDQgCgCgGgCQgEgBgHAAIgVAAg");
	this.shape_65.setTransform(197.2,34.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#4D575B").s().p("AAeA5IAAgzIg7AAIAAAzIgQAAIAAhxIAQAAIAAAzIA7AAIAAgzIAQAAIAABxg");
	this.shape_66.setTransform(183.9,34.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#4D575B").s().p("AgmA5IAAhxIAQAAIAAAxIAWAAQAIAAAJACQAIADAFADQAEAEADAFQACAFAAAIQAAAHgCAHQgEAIgEADQgFAEgIADQgHACgJAAgAgWAsIAWAAQAFAAAFgBQAFgCACgCQADgCACgEQABgEAAgFIgBgIQgCgDgDgDQgCgCgFgCQgFgBgFAAIgWAAg");
	this.shape_67.setTransform(173.4,34.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#4D575B").s().p("AgwA5QgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIAAgLIAFAAIAGgBQAEgBACgEQAEgFACgFQADgLABgHQADgOABgNIACgoIBEAAIAABxIgQAAIAAhkIgkAAQgBAWgCAQIgFAbIgGASQgEAJgDACQgFAFgEABQgFACgFAAg");
	this.shape_68.setTransform(161.5,35);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#4D575B").s().p("AApA5IgEgBIgCgCIgKgbIgyAAIgKAbIgCACIgDABIgNAAIAthxIAQAAIAuBxgAgCgdIgSAsIApAAIgUgxIgBgGg");
	this.shape_69.setTransform(150.8,34.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#4D575B").s().p("AgmA5IAAhxIAjAAQAJAAAJACQAIADAFAFQAFAEADAHQADAHAAAIQAAAIgDAGQgCAGgGAFQgFAFgJACQgIADgJAAIgSAAIAAAqgAgVACIASAAQAFAAAFgCQAFAAAEgEIAFgHQABgEAAgFQAAgGgBgEQgBgDgEgEQgDgDgGgCQgEgBgGAAIgSAAg");
	this.shape_70.setTransform(141.8,34.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#4D575B").s().p("AAeA5IAAhWIABgIIgDAHIg2BSQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgMAAIAAhxIARAAIAABWIgBAIIAGgNIAzhMQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIANAAIAABxg");
	this.shape_71.setTransform(130.4,34.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#4D575B").s().p("AgHA5IAAhjIglAAIAAgOIBZAAIAAAOIglAAIAABjg");
	this.shape_72.setTransform(119.6,34.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#4D575B").s().p("AgPA2QgLgEgGgIQgHgHgEgLQgEgLAAgNQAAgLAEgMQAFgLAHgHQAHgIAKgFQALgDALAAQANAAAJADQAJAFAHAGIgFAHIgCACIgCAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIgGgDIgIgEQgEgCgIAAQgIAAgHAEQgIADgEAGQgGAFgDAIQgCAKAAAIQAAALADAHQAEAKAEAFQAGAFAGAEQAHACAIAAIAIgBIAIgBIAGgDIAGgFIABAAIACgBIADABIAGAHQgHAIgKAFQgLAEgOABQgLgBgKgEg");
	this.shape_73.setTransform(109.7,34.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#4D575B").s().p("AAeA5IAAgwIgQAAIgEAAIgDABIgDADIgEAEIgWAjIgFAEQgDABgDAAIgNAAIAegpQAFgHAGgDIgMgEIgIgGQgDgEgCgFQgCgEAAgGQAAgJADgFQADgGAFgEQAHgFAFgCQAJgCAIAAIAmAAIAABxgAgCgqIgIAEQgDADgBAEQgCADAAAFQAAAFACADQAAADAEADIAIAEIAgABIAAgnIgWAAIgKABg");
	this.shape_74.setTransform(94.1,34.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#4D575B").s().p("AgwA5QgBAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAAAIAAgLIAGAAIAHgBQADgBACgEIAGgKIAFgSIADgbIACgoIBEAAIAABxIgQAAIAAhkIgkAAIgIBBQgDAMgDAGQgEAIgDADQgEAFgFABQgFACgFAAg");
	this.shape_75.setTransform(82.9,35);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#4D575B").s().p("AAuBHIAAgcIhbAAIAAAXQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgKAAIAAgoIAMAAIAFgEIAEgIIAFgMIADgSIAFg7IBEAAIAABlIASAAIAAAjQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAgAgRABIgGASIgGAMIA2AAIAAhYIgkAAg");
	this.shape_76.setTransform(71.4,36.3);

	var maskedShapeInstanceList = [this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53}]},79).to({state:[]},80).wait(158));

	// mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_0 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_4_graphics_1 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_4_graphics_2 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_4_graphics_3 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_4_graphics_4 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_4_graphics_5 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_4_graphics_6 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_4_graphics_7 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_4_graphics_8 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_4_graphics_71 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_4_graphics_72 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_4_graphics_73 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_4_graphics_74 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_4_graphics_75 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_4_graphics_76 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_4_graphics_77 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_4_graphics_78 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_4_graphics_79 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:mask_4_graphics_0,x:390.5,y:108}).wait(1).to({graphics:mask_4_graphics_1,x:294.4,y:108}).wait(1).to({graphics:mask_4_graphics_2,x:211.1,y:108}).wait(1).to({graphics:mask_4_graphics_3,x:140.7,y:108}).wait(1).to({graphics:mask_4_graphics_4,x:83,y:108}).wait(1).to({graphics:mask_4_graphics_5,x:38.2,y:108}).wait(1).to({graphics:mask_4_graphics_6,x:6.1,y:108}).wait(1).to({graphics:mask_4_graphics_7,x:-13.1,y:108}).wait(1).to({graphics:mask_4_graphics_8,x:-19.5,y:108}).wait(1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_4_graphics_71,x:217.7,y:112}).wait(1).to({graphics:mask_4_graphics_72,x:119.3,y:112}).wait(1).to({graphics:mask_4_graphics_73,x:33.9,y:112}).wait(1).to({graphics:mask_4_graphics_74,x:-38.2,y:112}).wait(1).to({graphics:mask_4_graphics_75,x:-97.3,y:112}).wait(1).to({graphics:mask_4_graphics_76,x:-143.2,y:112}).wait(1).to({graphics:mask_4_graphics_77,x:-176,y:112}).wait(1).to({graphics:mask_4_graphics_78,x:-195.7,y:112}).wait(1).to({graphics:mask_4_graphics_79,x:-202.3,y:112}).wait(238));

	// t1
	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#19B7E4").s().p("AAgApIAAg5IABgFIgcAvIgBACIgDABIgBAAIgCgBIgCgCIgcgvIABAFIAAA5IgOAAIAAhRIANAAIADABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABIAZAnIACAJIAEgJIAXgnQABgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIADgBIANAAIAABRg");
	this.shape_77.setTransform(195.5,67.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#19B7E4").s().p("AgKAnQgHgCgFgGQgFgHgCgGQgDgIAAgKQAAgHACgJQADgIAFgFQAFgGAHgDQAHgDAIAAQAJAAAHADQAFACAGAGIgEAFIgBACIgCAAIgDgBIgDgCIgFgCIgIgBQgGAAgDACQgFACgDAEQgDAEgBAFQgCAGAAAGQAAAHACAGQACAGADADQADAEAEACQADACAFAAQAHAAACgBIAFgDIAEgDIADgBQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABIAEAFIgGAGIgHAEIgRADQgHAAgGgDg");
	this.shape_78.setTransform(186.1,67.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#19B7E4").s().p("AgPA3QgIgDgEgFQgFgFgDgHQgDgJAAgIQAAgHADgJIALgRIAcgmIADgDIAFgBIANAAIgmAyIAJgEQAEgCAFAAQAHAAAGACQAFACAGAFQAEAEADAGQADAGAAAIQAAAJgDAGQgCAHgGAFQgFAFgIADQgGADgJAAQgIAAgHgDgAgJAAIgIAFIgFAHQgBAFAAAEQAAAFABAFIAFAIQADADAEABQAEACAGAAQAFAAAEgCQAFgBADgEQADgCACgFQACgEAAgGQAAgGgCgDQgCgFgDgDIgHgEQgFgBgFAAQgFAAgEABg");
	this.shape_79.setTransform(173.6,66);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#19B7E4").s().p("AANA5IAAgdIgxAAIgDgBIgCgDIgBgHIA2hKIAPAAIAABJIAQAAIAAAJIAAACIgDABIgNAAIAAAdgAgaAQIAnAAIAAgyIABgFg");
	this.shape_80.setTransform(164.1,66);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#19B7E4").s().p("AAqA5QgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAIgCgDIgKgbIgyAAIgKAbQAAABAAAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAIgNAAIAthxIAQAAIAuBxgAgCgeIgSAsIApAAIgUgxIgBgGg");
	this.shape_81.setTransform(150.2,66);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#19B7E4").s().p("AAeA5IAAg0Ig7AAIAAA0IgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_82.setTransform(138.6,66);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#19B7E4").s().p("AAeA5IAAhWIABgIIgGANIgzBMIgDADQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAIgMAAIAAhxIARAAIgBBeIAGgNIAzhMIADgEQABAAAAAAQABgBAAAAQAAAAABAAQABAAAAAAIANAAIAABxg");
	this.shape_83.setTransform(126.4,66);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#19B7E4").s().p("AhHA5IAAhxIARAAIAABkIAuAAIAAhkIAQAAIAABkIAvAAIAAhkIARAAIAABxg");
	this.shape_84.setTransform(111.7,66);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#19B7E4").s().p("AApA5QgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAIgCgDIgKgbIgyAAIgKAbQAAABAAAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAIgNAAIAuhxIAPAAIAuBxgAgDgeIgRAsIApAAIgTgxIgCgGg");
	this.shape_85.setTransform(97.7,66);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#19B7E4").s().p("AAuA5IAAhVIAAgEIgmBFIgDADIgDABIgCAAQgEAAgCgEIgnhFIAAAEIABAEIAABRIgPAAIAAhxIAQAAIACACIAqBNIADgJIAmhEIADgCIAPAAIAABxg");
	this.shape_86.setTransform(84.9,66);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#19B7E4").s().p("AAeA5IAAgxIgQAAIgDABIgEABIgDADIgaAmIgFAEQgCACgEAAIgMAAIAdgpQAFgIAGgDQgGAAgGgEQgEgBgEgEQgDgEgCgFQgCgEAAgHQAAgHADgGQACgGAGgEQAFgFAIgCQAGgCAKAAIAmAAIAABxgAgCgqIgIAEQgDADgBADIgBAIIABAJQACAEACACIAIAEQADABAHAAIAWAAIAAgnIgWAAg");
	this.shape_87.setTransform(211.4,45);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#19B7E4").s().p("AApA5QgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAIgCgDIgJgbIgzAAIgKAbQAAABAAAAQAAAAAAABQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAIgNAAIAthxIAQAAIAuBxgAgUAOIAoAAIgTgxIgBgGg");
	this.shape_88.setTransform(201.5,45);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#19B7E4").s().p("AAeA5IAAg0Ig7AAIAAA0IgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_89.setTransform(189.9,45);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#19B7E4").s().p("AgmA5IAAhxIAQAAIAAAwIAWAAQAJAAAIADQAJACAEADQAFAEACAGQACAFAAAHQAAAKgCAFQgDAGgFAFQgGAFgHACQgIACgIAAgAgWAsIAWAAQAGAAAEgCQAEAAAEgEQACgBACgFQABgDAAgFQAAgEgBgEQgBgEgDgCIgIgEIgKgBIgWAAg");
	this.shape_90.setTransform(179.4,45);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#19B7E4").s().p("AgwA5QAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAgKIAFAAIAHgBQADgCACgDQAEgFACgGQACgFADgNQACgIABgTIACgnIBEAAIAAByIgQAAIAAhlIgkAAQgBAWgCAQQgCAQgDALQgCALgEAHQgDAHgEAFQgGAEgDABQgFACgFAAg");
	this.shape_91.setTransform(167.5,45.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#19B7E4").s().p("AAeA5IABheIgGANIgzBMIgDADQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAIgNAAIAAhxIARAAIgBBeIADgHIADgGIAzhMIADgEIAFgBIAMAAIAABxg");
	this.shape_92.setTransform(156.3,45);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#19B7E4").s().p("AhHA5IAAhxIARAAIAABkIAvAAIAAhkIAPAAIAABkIAvAAIAAhkIARAAIAABxg");
	this.shape_93.setTransform(141.6,45);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#19B7E4").s().p("AgaA5QgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAgKIAJAAIAEgCIAEgDIADgFIAFgLIguhQIAPAAIAEABIACADIAbAyIAEALIAFgLIAXgyIACgDIAEgBIANAAIguBiQgCAGgCACIgFAFQgCACgFABIgHABg");
	this.shape_94.setTransform(128,45.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#19B7E4").s().p("AgPA2QgKgEgHgIQgIgJgDgJQgEgMAAgMQAAgMAEgLQAEgKAIgIQAIgJAJgDQALgFALABQALAAALAEQAKADAGAHIgFAIIgBABIgDAAIgDgBIgFgDIgJgEQgFgBgHAAQgIAAgHADQgIADgEAFQgFAGgDAIQgDAJAAAJQAAALADAIQADAIAFAGQAGAFAGAEQAHACAIAAIAJAAIAHgCIAGgDIAIgFIABgBIACABIAHAIQgIAIgJAEQgKAFgOAAQgLgBgLgEg");
	this.shape_95.setTransform(117.9,45);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#19B7E4").s().p("AAeA5IAAgxIgQAAIgEABIgDABIgDADIgEAEIgXAiIgEAEQgCACgEAAIgMAAIAdgpQAEgIAHgDQgGAAgGgEIgIgFQgEgFgBgEQgCgFAAgGQAAgHADgGQADgHAFgDQAFgFAIgCQAGgCAKAAIAmAAIAABxgAgCgqIgIAEQgDADgBADIgBAIIABAJQACAEACACIAIAEQADABAHAAIAWAAIAAgnIgWAAQgHAAgDABg");
	this.shape_96.setTransform(102.2,45);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#19B7E4").s().p("AApA5QAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIgCgDIgLgbIgxAAIgLAbIgCADQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgNAAIAuhxIAPAAIAuBxgAgBgjIgTAxIApAAIgVg3g");
	this.shape_97.setTransform(92.2,45);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#19B7E4").s().p("AAgA5IgFgBIgfgtQgCgEgDgBQgCgBgEAAIgOAAIAAA0IgQAAIAAhxIAQAAIAAAxIAPAAIADgBIAFgEIAcgoIADgDIAEgBIAOAAIgiAuQgEAGgFACQADABAEACIAFAHIAiAxg");
	this.shape_98.setTransform(82.1,45);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#19B7E4").s().p("AgXA2QgKgFgHgFIAFgIIACgCIACAAIADABIAMAHIAIACIAIAAQAMAAAGgFQAHgFAAgLIgBgIQgCgDgEgDQgCgCgFgCIgKgCIgQAAIAAgMIAPAAQAFAAAEgBQAEgBADgDQADgBABgEIACgIQAAgEgCgDQgBgDgDgCQgDgCgEgCQgEgBgFAAQgHAAgEABIgHAEIgGADIgDABIgDgBIgBgBIgEgIQAHgHAJgCQAIgDALAAQAGAAAJACQAFABAHAFQAFAEADAFQADAGgBAGQAAAIgDAHQgFAHgIAEIAIADIAHAGIADAHIABAJQAAAIgCAFQgDAHgFAFQgIAGgFABQgIADgJABQgMgBgLgEg");
	this.shape_99.setTransform(71.2,45);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#19B7E4").s().p("AgaA5QgBgBAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIAAgKIAKAAIAEgCIADgDIAJgQIguhQIAPAAIAEABIACADIAbAyQACAEACAHIACgGIAag3IACgDIADgBIAOAAIgvBiIgDAIIgGAFIgGADIgHABg");
	this.shape_100.setTransform(62,45.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#4D575B").s().p("AAeA5IAAgxIgQAAIgDABIgEABIgHAGIgWAjIgFAEQgCACgEAAIgNAAIAegpQAEgIAHgDQgGAAgGgEQgGgCgCgDQgEgEgBgFQgCgFABgGQAAgHACgGQAEgHAEgDQAGgFAGgCQAHgCAKAAIAmAAIAABxgAgCgqQgFABgDADQgDADgBADIgCAIQAAAFACAEIAEAGIAHAEQAFABAGAAIAWAAIAAgnIgWAAQgHAAgDABg");
	this.shape_101.setTransform(192.6,24.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#4D575B").s().p("AAqA5QgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAIgCgDIgLgbIgyAAIgKAbIgCADQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgNAAIAuhxIAPAAIAuBxgAgBgjIgTAxIApAAIgSgsIgDgLg");
	this.shape_102.setTransform(182.6,24.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#4D575B").s().p("AAgA5QgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAIgfgtQgCgEgDgBQgCgBgEAAIgOAAIAAA0IgQAAIAAhxIAQAAIAAAxIAMAAIAGgBIADgCIAegqQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAIAEgBIAOAAIgiAuQgDAGgGACQACABAEACIAGAHIAiAxg");
	this.shape_103.setTransform(172.4,24.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#4D575B").s().p("AgOA2QgLgEgHgIQgHgIgEgKQgEgLAAgNQAAgMAEgKQAEgLAHgIQAIgIALgEQAKgFAMABQALAAAKADQAKAEAHAHIgGAHIgCACIgBAAIgEgBIgFgDIgIgDQgGgCgHAAQgIAAgGADQgJADgEAGQgFAFgDAIQgDAJAAAJQAAALADAIQADAIAFAGQAFAFAIAEQAGACAIAAIAJAAIAHgCIAHgDIAHgGIABAAIACABIAHAHQgHAJgKAEQgJAEgPABQgLAAgKgFg");
	this.shape_104.setTransform(161.3,24.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#4D575B").s().p("AAeA5IAAg0Ig7AAIAAA0IgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_105.setTransform(149.6,24.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#4D575B").s().p("AAeA5IAAgxIgQAAIgEABIgDABIgHAGIgWAjIgFAEQgCACgEAAIgMAAIAdgpQAEgIAHgDQgGAAgGgEIgIgFQgEgEgBgFQgCgFAAgGQAAgIADgFQADgHAFgDQAGgFAHgCQAGgCAKAAIAmAAIAABxgAgCgqQgFABgDADQgDACgBAEIgCAIQAAAFACAEIAEAGIAIAEQADABAHAAIAWAAIAAgnIgWAAQgGAAgEABg");
	this.shape_106.setTransform(137.5,24.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#4D575B").s().p("AgmA5IAAhxIAQAAIAAAwIAWAAQAJAAAIADQAJACAEADQAFAEACAGQACAFAAAHQAAAKgCAFQgDAGgFAFQgFAEgIADQgIACgIAAgAgWAsIAWAAIAKgCQAGgBACgDIAEgGQABgDAAgFQAAgEgBgEQgCgFgCgBQgCgCgGgCIgKgBIgWAAg");
	this.shape_107.setTransform(128.5,24.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#4D575B").s().p("AgwA5QAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAgKIAFAAIAHgBQADgCACgDQAEgFACgGQACgFADgNIAFhCIBEAAIAAByIgQAAIAAhlIgkAAQgBAWgCAQQgCAQgDALIgGASQgDAHgEAFQgGAEgDABQgFACgFAAg");
	this.shape_108.setTransform(116.6,24.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#4D575B").s().p("AAqA5QgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBIgKgbIgzAAIgKAbIgBADQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgNAAIAuhxIAPAAIAuBxgAAAgjIgUAxIApAAIgVg3g");
	this.shape_109.setTransform(105.9,24.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#4D575B").s().p("AgHA5IAAhkIglAAIAAgNIBZAAIAAANIglAAIAABkg");
	this.shape_110.setTransform(96.8,24.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#4D575B").s().p("AAeA5IAAhWIABgIIgGANIgzBMIgDADQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgNAAIAAhxIARAAIgBBeIADgHIADgGIAzhMIADgEIAFgBIAMAAIAABxg");
	this.shape_111.setTransform(86,24.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.lf(["#408734","#32702B","#7CAD35","#387B2F"],[0,0.298,0.671,1],13.7,-9.7,-12.8,11).s().p("AjCAbIgagcIgXgdQA1A0BSgYQBggqAwgNQAlgJAdAFQAiAHAjAbQAWAQAzA+IgXgVQgkgbghgGQgegFglAIQgxANhfArQgaAIgXAAQgyAAgkglg");
	this.shape_112.setTransform(258.4,49.9,0.85,0.85);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.lf(["#F2F3F3","#D3D4D6","#FFFFFF","#DEDFE0"],[0,0.31,0.671,1],14.7,-9.3,-12.8,11.5).s().p("ADXAfQgkgcghgFQgegGglAJQgwANhfAqQhSAYg2g0Igwg4QA1AyBSgYQBggqAvgNQAlgJAeAFQAhAHAkAbQANAKAZAcIAtA1QgWgZgMgIg");
	this.shape_113.setTransform(254.7,44.9,0.85,0.85);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["#A7000D","#890009","#C83F27","#860008"],[0,0.298,0.659,1],14.2,-9.3,-12.4,11.5).s().p("AjFAeIgOgPIgignQA1AvBRgYQBegqAwgMQAlgKAeAGQAhAGAjAcQAVAQA6BFQgUgXgKgIQgkgbghgGQgegFgmAJQgwAMhdAqQgcAIgYAAQgwAAgiggg");
	this.shape_114.setTransform(250.5,40,0.85,0.85);

	var maskedShapeInstanceList = [this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77}]}).to({state:[]},80).wait(237));

	// bg
	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#ECF1F6").s().p("Ay1fWMAAAg+rMAlrAAAMAAAA+rg");
	this.shape_115.setTransform(364,45,3.018,0.224);

	this.timeline.addTween(cjs.Tween.get(this.shape_115).wait(317));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(363.5,41.5,736.1,101.9);
// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/p1.png", id:"p1"},
		{src:"images/728x90_atlas_NP_.jpg", id:"728x90_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;