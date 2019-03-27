(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x300_atlas_NP_", frames: [[0,0,320,140],[0,142,320,140],[0,284,320,140]]}
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
p.nominalBounds = new cjs.Rectangle(0,0,124,120);


(lib.p2 = function() {
	this.spriteSheet = ss["300x300_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.p3 = function() {
	this.spriteSheet = ss["300x300_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.p4 = function() {
	this.spriteSheet = ss["300x300_atlas_NP_"];
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


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A4lEcIAAguQGPAsGSgPQHxgSHfhqQLgiiJ6kqIAAA1Qp1ElrYChQnjBrn2ASQhgADhgAAQk0AAkxgig");
	mask.setTransform(157.4,31.8);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#A7A9AB","#D0D3D4"],[0,0.651,1],25.3,6,0,25.3,6,192).s().p("A4lFMIAAqXMAxLAAAIAAKXg");
	this.shape.setTransform(157.4,33.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,0,314.7,63.6), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A4kJ2IAAzrMAxKAAAIAATrg");
	mask.setTransform(238.3,119.8);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgnxAT0IgK15QBHAYCBAgQECA+EiAjQOiBxOLjJQN3jFLdmEQIWkbFqlLMAAKAnng");
	this.shape.setTransform(255.6,126.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(80.9,56.8,314.7,126), null);


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
	this.instance.setTransform(105,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1_1, new cjs.Rectangle(105,-5,124,120), null);


(lib.ClipGroup_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvwOKIAAxeMAu3AAAIAAReg");
	mask.setTransform(199.1,90.6);

	// Слой 3
	this.instance = new lib.ClipGroup_2();
	this.instance.parent = this;
	this.instance.setTransform(238.2,104.9,1,1,0,0,0,157.3,33.1);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(255.6,126.8,1,1,0,0,0,255.6,126.8);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9, new cjs.Rectangle(98.3,69.4,300.1,111.9), null);


// stage content:
(lib._300x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3b3bMAu3AAAMAAAAu3Mgu3AAAg");
	this.shape.setTransform(150,150);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(317));

	// legal
	this.addr2 = new lib.dfgdfggg();
	this.addr2.parent = this;
	this.addr2.setTransform(5,285.8);

	this.timeline.addTween(cjs.Tween.get(this.addr2).wait(317));

	// logo
	this.instance = new lib.ClipGroup_8();
	this.instance.parent = this;
	this.instance.setTransform(230,234.6,1,1,0,0,0,53.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(317));

	// wave
	this.instance_1 = new lib.ClipGroup_9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(159.8,220.7,1,1,0,0,0,255.7,126.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(317));

	// p4.jpg
	this.instance_2 = new lib.p4_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(130,205,1,1,0,0,0,130,120);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(237).to({_off:false},0).to({x:120,alpha:1},5,cjs.Ease.get(1)).wait(69).to({x:110,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// p3.jpg
	this.instance_3 = new lib.p3_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(130,205,1,1,0,0,0,130,120);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(158).to({_off:false},0).to({x:120,alpha:1},5,cjs.Ease.get(1)).wait(69).to({x:110,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(79));

	// p2.jpg
	this.instance_4 = new lib.p2_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(130,205,1,1,0,0,0,130,120);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(79).to({_off:false},0).to({x:120,alpha:1},5,cjs.Ease.get(1)).wait(69).to({x:110,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(158));

	// p1.jpg
	this.instance_5 = new lib.p1_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(130,205,1,1,0,0,0,130,120);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:120,alpha:1},5,cjs.Ease.get(1)).wait(69).to({x:110,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(237));

	// mask - копия: 2 - копия (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_237 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_graphics_238 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_graphics_239 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_graphics_240 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_graphics_241 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_graphics_242 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_graphics_243 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_graphics_244 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_graphics_245 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_graphics_308 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_graphics_309 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_graphics_310 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh+gRIAAAAIAAzpMBCAAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_graphics_311 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_graphics_312 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_graphics_313 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh+gRIAAAAIAAzpMBCAAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_graphics_314 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_graphics_315 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_graphics_316 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh+gRIAAAAIAAzpMBCAAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(237).to({graphics:mask_graphics_237,x:410.5,y:108}).wait(1).to({graphics:mask_graphics_238,x:314.4,y:108}).wait(1).to({graphics:mask_graphics_239,x:231.1,y:108}).wait(1).to({graphics:mask_graphics_240,x:160.7,y:108}).wait(1).to({graphics:mask_graphics_241,x:103,y:108}).wait(1).to({graphics:mask_graphics_242,x:58.2,y:108}).wait(1).to({graphics:mask_graphics_243,x:26.1,y:108}).wait(1).to({graphics:mask_graphics_244,x:6.9,y:108}).wait(1).to({graphics:mask_graphics_245,x:0.5,y:108}).wait(1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_graphics_308,x:237.7,y:112}).wait(1).to({graphics:mask_graphics_309,x:139.3,y:112}).wait(1).to({graphics:mask_graphics_310,x:54,y:112}).wait(1).to({graphics:mask_graphics_311,x:-18.2,y:112}).wait(1).to({graphics:mask_graphics_312,x:-77.3,y:112}).wait(1).to({graphics:mask_graphics_313,x:-123.2,y:112}).wait(1).to({graphics:mask_graphics_314,x:-156.1,y:112}).wait(1).to({graphics:mask_graphics_315,x:-175.7,y:112}).wait(1).to({graphics:mask_graphics_316,x:-182.3,y:112}).wait(1));

	// t4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#428835","#1C7131","#4FAE33","#3A7C32"],[0,0.298,0.671,1],-0.3,20.4,0.3,-18.9).s().p("AjxC6QAzgMAegaQAbgXASgoQANgdAQg4QARg+AKgYQAlhdBWgIQAggDC2AAQhXAKglBdQgKAXgRA+QgQA4gNAcQgTApgaAXQgeAZgyAMQggAIjaAAIAkgFg");
	this.shape_1.setTransform(257.3,40.5,0.5,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#F2F3F3","#D4D4D6","#FFFFFF","#DEDFE0"],[0,0.31,0.671,1],-0.7,21.6,0.6,-19).s().p("AjmC5QAzgMAegaQAbgXASgoQANgdAQg4QASg9AJgYQAmhcBVgKIDTgCQhVALglBcQgKAYgRA9QgPA3gNAdQgUApgaAWQgeAbgyALQgTAFhrACIiOABQAogCAPgEg");
	this.shape_2.setTransform(267.6,40.4,0.5,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#A81917","#B31918","#E41513","#A81917"],[0,0.298,0.659,1],-0.3,21,0.3,-18.5).s().p("AjxC5QAzgLAegbQAbgWATgpQANgcAQg4QARg9AJgXQAlhbBSgMIAXgCIDRgBQhSAMglBcQgJAXgSA9QgPA3gNAdQgTAogaAXQgeAZgyAMQgQAEh0ADIiYACQAjgCAPgEg");
	this.shape_3.setTransform(278.7,40.3,0.5,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4E585B").s().p("AgjA6IAAhyIBGAAIAAANIg1AAIAAAlIArAAIAAAMIgrAAIAAAmIA1AAIAAAOg");
	this.shape_4.setTransform(238.2,20.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4E585B").s().p("AAeA6IAAhXIABgIIgGAMIgzBNQAAABgBAAQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAIgNAAIAAhyIARAAIAABWIgBAIIADgHIA2hSQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIANAAIAAByg");
	this.shape_5.setTransform(227.1,20.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4E585B").s().p("AAeA6IAAg0Ig7AAIAAA0IgRAAIAAhyIARAAIAAAzIA7AAIAAgzIARAAIAAByg");
	this.shape_6.setTransform(214.9,20.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4E585B").s().p("AAeA6IAAg0Ig7AAIAAA0IgRAAIAAhyIARAAIAAAzIA7AAIAAgzIARAAIAAByg");
	this.shape_7.setTransform(202.6,20.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4E585B").s().p("AgiA6IAAhyIBGAAIAAANIg2AAIAAAlIArAAIAAAMIgrAAIAAAmIA2AAIAAAOg");
	this.shape_8.setTransform(192.3,20.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4E585B").s().p("AgOA2QgKgDgIgJQgIgIgDgKQgEgLAAgNQAAgLAEgMQAFgKAGgIQAIgIALgEQAKgFAMABQAKAAALADQAKAFAHAGIgGAHIgCACIgBAAIgEgBIgFgDIgIgDQgFgDgIAAQgIAAgGAEQgJADgEAGQgEAEgEAJQgDAJAAAJQAAAKADAJQADAJAFAFQAFAFAIAEQAGACAIAAIAQgCIAHgDIAHgGIABAAIACABIAHAHQgHAJgKAEQgKAEgOABQgLgBgKgEg");
	this.shape_9.setTransform(182.2,20.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4E585B").s().p("AgjA6IAAhyIBHAAIAAANIg2AAIAAAlIArAAIAAAMIgrAAIAAAmIA2AAIAAAOg");
	this.shape_10.setTransform(172.7,20.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4E585B").s().p("AgoA6IAAhyIAlAAQAJgBAJADQAGABAGAFQAFAEACAFQADAFAAAHIgBAJIgEAHIgHAGIgJAEQAMACAGAGQAHAHAAAKQAAAIgDAGQgDAGgFAEQgFAFgIACQgIADgJAAgAgXAsIAXAAQAGAAAFgCQAGgBACgCQADgEABgDQABgDAAgFQAAgIgGgGQgFgEgNAAIgXAAgAgXgFIATAAIALgCIAHgEQADgBACgFQABgDAAgFQAAgJgFgEQgGgFgMgBIgUAAg");
	this.shape_11.setTransform(162.9,20.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4E585B").s().p("AgiA6IAAhyIBFAAIAAANIg1AAIAAAlIAqAAIAAAMIgqAAIAAAmIA1AAIAAAOg");
	this.shape_12.setTransform(146.2,20.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4E585B").s().p("AApA6IAAhyIARAAIAABygAg5A6IAAhyIARAAIAAAwIAWAAQAJAAAJADQAHACAEADQAFAEADAGQACAGAAAHQAAAHgDAHQgCAGgGAFQgDADgIAEQgJADgIAAgAgoAsIAWAAQAGAAAFgCQAFgBACgCQACgDABgDQACgEAAgFQAAgEgCgEQAAgEgDgCQgCgCgFgCQgFgCgGABIgWAAg");
	this.shape_13.setTransform(134,20.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4E585B").s().p("AAeA6IAAg0Ig7AAIAAA0IgRAAIAAhyIARAAIAAAzIA7AAIAAgzIARAAIAAByg");
	this.shape_14.setTransform(120.7,20.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4E585B").s().p("AAuBHIAAgbIhaAAIAAAWQAAABgBABQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgJAAIAAgoIALAAIAFgEIAEgIIAFgMIADgSIAFg7IBEAAIAABlIASAAIAAAjQAAABAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAgAgRABIgGASIgGAMIA2AAIAAhYIgkAAg");
	this.shape_15.setTransform(108.2,21.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4E585B").s().p("AgWA2QgKgDgIgJQgIgIgEgKQgDgKAAgOQAAgNADgJQAEgLAIgIQAIgIAKgEQALgFALABQAMgBALAFQALAEAHAIQAIAIADALQAEAJAAANQAAAOgEAKQgDAKgIAIQgHAJgLADQgLAEgMABQgLgBgLgEgAgQgoQgHADgFAGQgFAFgDAIQgDAJAAAJQAAALADAHQADAJAFAGQAGAFAGADQAIADAIAAQAJAAAHgDQAHgDAGgFQAFgGADgJQADgHAAgLQAAgJgDgJQgDgIgFgFQgEgGgJgDQgIgEgIAAQgHAAgJAEg");
	this.shape_16.setTransform(96.1,20.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4E585B").s().p("AgiA6IAAhyIBFAAIAAAMIg0AAIAABmg");
	this.shape_17.setTransform(86.5,20.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4E585B").s().p("AApA6IAAhyIARAAIAABygAg5A6IAAhyIARAAIAAAwIAVAAQAKAAAJADQAGACAFADQAFAFACAFQADAFAAAIQAAAGgDAIQgDAHgFAEQgEADgIAEQgIADgJAAgAgoAsIAVAAQAHAAAEgCQAGgBACgCQABgDACgDQACgEAAgFQAAgEgCgEQgBgEgCgCQgCgCgGgCQgEgCgHABIgVAAg");
	this.shape_18.setTransform(74.4,20.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4E585B").s().p("AgoA6IAAhyIAlAAQAJgBAJADQAGABAGAFQAFAEACAFQADAFAAAHIgCAJIgDAHIgHAGIgJAEQAMACAGAGQAHAHAAAKQAAAIgDAGQgCAFgGAFQgFAFgIACQgIADgJAAgAgXAsIAXAAQAGAAAFgCQAGgBACgCQADgEABgDQABgDAAgFQAAgIgGgGQgFgEgNAAIgXAAgAgXgFIATAAIALgCIAHgEQADgBACgFQABgDAAgFQAAgJgGgEQgFgFgMgBIgUAAg");
	this.shape_19.setTransform(62.4,20.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4E585B").s().p("AAeA5IAAgxIgQAAIgEABIgDABIgDACIgEAFIgXAjIgDADIgHACIgMAAIAdgpQAEgHAHgDIgMgFQgFgCgDgDQgEgEgBgFQgCgEAAgHQAAgGADgHQADgHAFgDQAGgFAHgCQAIgCAIAAIAmAAIAABxgAgCgqQgFABgCAEQgDACgCADIgCAIQABAGABADIAEAGIAIAEQAEACAGAAIAWAAIAAgoIgWAAQgHAAgDABg");
	this.shape_20.setTransform(208,41.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4E585B").s().p("AAeA5IABheIgDAHIgDAFIgzBNIgDADIgFACIgMAAIAAhxIARAAIgBBeIAGgMIAzhNIADgDIAEgCIANAAIAABxg");
	this.shape_21.setTransform(197.3,41.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4E585B").s().p("AAeA5IAAgzIg7AAIAAAzIgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_22.setTransform(185,41.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#4E585B").s().p("AgiA5IAAhxIBFAAIAAANIg1AAIAAAlIArAAIAAAMIgrAAIAAAmIA1AAIAAANg");
	this.shape_23.setTransform(174.7,41.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4E585B").s().p("ABHA5QgDAAgDgCIgEgDIgdgpQgCgDgCgBQgCgCgFAAIgNAAIAAA0IgPAAIAAg0IgNAAQgEAAgDACQgDACgCACIgcApIgEADQgDACgDAAIgLAAIAhgxIAGgHQADgCAEAAIgGgEIglgzIAMAAQABAAABAAQABAAAAAAQABAAAAAAQABABAAAAIAEADIAbAoQACADAEABIAGABIALAAIAAgxIAPAAIAAAxIALAAIAGgBQACgBADgDIAcgoIAEgDIAEgBIAOAAIgmAzIgGAEQADAAAEACIAGAHIAhAxg");
	this.shape_24.setTransform(161.4,41.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4E585B").s().p("AgWA2QgKgEgIgIQgHgIgFgKQgDgMAAgMQAAgLADgMQAFgKAHgIQAIgIAKgEQALgFALABQAMgBALAFQAKAEAIAIQAHAHAFALQADAMAAALQAAAMgDAMQgFALgHAHQgIAIgKAEQgLAFgMAAQgLAAgLgFgAgPgoQgIADgEAFQgGAHgDAHQgCAKAAAIQAAAJACAJQADAIAGAHQAFAFAHADQAIADAHAAQAJAAAIgDQAGgDAGgFQAFgGADgJQACgHAAgLQAAgKgCgIQgDgIgFgGQgEgFgIgDQgIgDgJAAQgHAAgIADg");
	this.shape_25.setTransform(147.2,41.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4E585B").s().p("AgwA5QAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAgLIAFAAIAHgBQADgBADgEQADgFACgFQACgGADgMQACgJABgSIADgoIBDAAIAAByIgQAAIAAhlIgkAAQgBAWgCARQgCAOgDAMQgCALgEAIQgDAGgEAFQgEAEgFACQgFABgFAAg");
	this.shape_26.setTransform(134.3,41.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4E585B").s().p("AAtBHIAAgbIhaAAIAAAWQAAABAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgKAAIAAgoIAMAAIAFgEIAFgIQADgGABgGIAEgSIAEg7IBEAAIAABlIATAAIAAAjQAAABAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAgAgNgYIgEAZIgFASIgHAMIA2AAIAAhYIgjAAIgDAhg");
	this.shape_27.setTransform(122.8,42.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#4E585B").s().p("AgiA5IAAhxIBGAAIAAANIg2AAIAAAlIArAAIAAAMIgrAAIAAAmIA2AAIAAANg");
	this.shape_28.setTransform(112.4,41.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#4E585B").s().p("AgmA5IAAhxIAjAAQAKAAAIACQAIACAFAGQAGAEACAHQADAFAAAKQAAAIgDAGQgDAGgGAFQgEAFgIACQgJADgJAAIgSAAIAAAqgAgVACIASAAQAEAAAGgCQAFgBADgCQAEgEACgEIACgJQAAgFgCgFQgCgFgEgCIgIgFQgFgBgFgBIgSAAg");
	this.shape_29.setTransform(103.1,41.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#4E585B").s().p("AAcA5IAAhlIg3AAIAABlIgRAAIAAhxIBZAAIAABxg");
	this.shape_30.setTransform(91.9,41.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0DA8E1").s().p("AgSA2QgHgCgIgHQgGgHgCgIQgEgIAAgLIAAhEIAQAAIAABEQABAIACAFQACAHADADQAEAEAFADQAGACAGAAQAIAAAEgCIAKgHQADgDADgHQABgFAAgIIAAhEIARAAIAABEQAAALgDAIQgDAIgHAHQgGAHgIACQgHAEgMAAQgKAAgIgEg");
	this.shape_31.setTransform(197.4,62.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0DA8E1").s().p("AAcA5QgEAAgCgDIgcgpIgDgCIgFgBIgLAAIAAAvIgRAAIAAhxIAhAAQALAAAHACQAJACAEAEQAFAEADAGQACAGAAAHQAAAHgBAFQgDAGgDADQgDAEgGACQgEADgHACIAFAFIAhAtgAgZgBIAQAAQAGAAAEgCQAFgBAEgDIAFgHIABgJQAAgLgGgEQgHgGgMAAIgQAAg");
	this.shape_32.setTransform(187.1,62.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0DA8E1").s().p("AgDAJIgDgBIgCgEIgBgEIABgDIACgDIADgDIADgBIAEABIADADIADADIAAADIAAAEIgDAEIgDABIgEABg");
	this.shape_33.setTransform(179.5,67.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0DA8E1").s().p("AgHA5IAAgtIgqhEIAPAAIADABIACACIAZAsIAEAJIACgEIAcgxIACgCIAEgBIAOAAIgqBEIAAAtg");
	this.shape_34.setTransform(174,62.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0DA8E1").s().p("AgxA5IAAhxIArAAQANAAAJAEQAKADAIAIQAIAIAEAKQAEAKAAANQAAAOgEAJQgEAKgIAIQgIAIgKAEQgKAEgMAAgAggAsIAaAAQAIAAAIgDQAGgDAGgGQAFgFADgJQADgIAAgKQAAgJgDgJQgDgIgFgGQgGgGgGgCQgIgDgIAAIgaAAg");
	this.shape_35.setTransform(163.8,62.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0DA8E1").s().p("AAmA5IgDgBIgDgCIhAhTIAAAEIAAADIAABPIgOAAIAAhxIAMAAIACACIBABUIAAgEIAAhSIAPAAIAABxg");
	this.shape_36.setTransform(151.4,62.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0DA8E1").s().p("AApA5QAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIgCgDIgLgbIgxAAIgLAbIgCADQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgNAAIAuhxIAPAAIAuBxgAgBgjIgTAxIApAAIgVg3g");
	this.shape_37.setTransform(139.8,62.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0DA8E1").s().p("AgPA2QgKgDgHgJQgHgHgEgMQgEgJAAgOQAAgNAEgKQADgKAIgIQAJgIAJgEQAKgFAMAAQAMAAAKAFQAKAEAGAGIgGAIIgBABIgCAAIgEgBIgEgEIgJgDQgEgBgIAAQgIAAgHADQgIADgFAFQgEAGgEAJQgDAIAAAJQAAALADAIQADAIAGAFQAGAHAGACQAHAEAHAAIAJgBIAIgCIAGgDIAIgFIABgBIACABIAHAHQgIAJgKAEQgJAFgPgBQgLABgKgFg");
	this.shape_38.setTransform(129.3,62.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#4E585B").s().p("AApA5QAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAIgBgDIgKgbIgzAAIgKAbQAAABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgMAAIAuhxIAPAAIAuBxgAgCgeIgSAsIApAAIgUgxIgBgGg");
	this.shape_39.setTransform(114.3,62.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#4E585B").s().p("AAeA5IAAg0Ig7AAIAAA0IgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_40.setTransform(102.8,62.5);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},237).wait(80));

	// mask - копия: 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_158 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_1_graphics_159 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_1_graphics_160 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_1_graphics_161 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_1_graphics_162 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_1_graphics_163 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_1_graphics_164 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_1_graphics_165 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_1_graphics_166 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_1_graphics_229 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_1_graphics_230 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_1_graphics_231 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh+gRIAAAAIAAzpMBCAAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_1_graphics_232 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_1_graphics_233 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_1_graphics_234 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh+gRIAAAAIAAzpMBCAAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_1_graphics_235 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_1_graphics_236 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_1_graphics_237 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh+gRIAAAAIAAzpMBCAAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(158).to({graphics:mask_1_graphics_158,x:410.5,y:108}).wait(1).to({graphics:mask_1_graphics_159,x:314.4,y:108}).wait(1).to({graphics:mask_1_graphics_160,x:231.1,y:108}).wait(1).to({graphics:mask_1_graphics_161,x:160.7,y:108}).wait(1).to({graphics:mask_1_graphics_162,x:103,y:108}).wait(1).to({graphics:mask_1_graphics_163,x:58.2,y:108}).wait(1).to({graphics:mask_1_graphics_164,x:26.1,y:108}).wait(1).to({graphics:mask_1_graphics_165,x:6.9,y:108}).wait(1).to({graphics:mask_1_graphics_166,x:0.5,y:108}).wait(1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_1_graphics_229,x:237.7,y:112}).wait(1).to({graphics:mask_1_graphics_230,x:139.3,y:112}).wait(1).to({graphics:mask_1_graphics_231,x:54,y:112}).wait(1).to({graphics:mask_1_graphics_232,x:-18.2,y:112}).wait(1).to({graphics:mask_1_graphics_233,x:-77.3,y:112}).wait(1).to({graphics:mask_1_graphics_234,x:-123.2,y:112}).wait(1).to({graphics:mask_1_graphics_235,x:-156.1,y:112}).wait(1).to({graphics:mask_1_graphics_236,x:-175.7,y:112}).wait(1).to({graphics:mask_1_graphics_237,x:-182.3,y:112}).wait(80));

	// t3
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#4D575B").s().p("AAeBIIABhfIgGANIgzBMIgDAEQAAAAgBABQAAAAgBAAQAAAAgBAAQgBABAAAAIgNAAIAAhyIARAAIgBBeIAGgNIAzhMIADgEIAFgBIAMAAIAABygAgQg2QgGgEAAgIIABgDQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAIAJAAIABAGIACAEIADACIAFABIAFgBIAEgCIACgEIAAgGIAJAAQABAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAIAAADQAAAIgGAEQgGAEgLAAQgKAAgHgEg");
	this.shape_41.setTransform(156.7,61.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#4D575B").s().p("AgWA2QgKgEgIgIQgIgJgDgJQgFgLAAgNQAAgLAFgLQADgKAIgJQAIgHAKgFQALgFALABQANgBAKAFQALAFAHAHQAIAJAEAKQAEAJAAANQAAAOgEAKQgEAJgIAJQgHAIgLAEQgJAFgOAAQgMAAgKgFgAgPgoQgHADgGAGQgGAGgCAHQgDAJAAAJQAAALADAIQACAHAGAHQAGAFAHAEQAHACAIAAQAJAAAIgCQAHgEAFgFQAFgFADgJQADgIAAgLQAAgJgDgJQgDgIgFgFQgFgGgHgDQgIgDgJAAQgIAAgHADg");
	this.shape_42.setTransform(144.2,63.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#4D575B").s().p("AAeA5IAAg0Ig7AAIAAA0IgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_43.setTransform(131.7,63.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#4D575B").s().p("AgmA5IAAhxIAQAAIAAAxIAWAAQAKAAAHACQAIADAFACQAFAFACAFQACAHAAAGQAAAIgDAGQgCAGgFAFQgGAFgHACQgJACgHAAgAgWAsIAWAAQAFAAAFgBIAHgEQADgDACgEIABgIIgBgIQgCgDgDgDQgEgDgDgBQgFgBgFAAIgWAAg");
	this.shape_44.setTransform(121.3,63.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#4D575B").s().p("AgwA5IgCgCIAAgLIAGAAIAGgBQADgBADgEIAFgKIAFgTQACgJABgRIADgoIBDAAIAAByIgQAAIAAhlIgkAAIgHBBQgEANgDAFQgDAIgEAEQgEAEgFABIgKACg");
	this.shape_45.setTransform(109.3,63.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#4D575B").s().p("AAeA5IAAhWIABgIIgGANIgzBMIgDAEQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgMAAIAAhxIARAAIgBBeIAGgNIAzhMIADgEQABAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAIANAAIAABxg");
	this.shape_46.setTransform(98.2,63.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#4D575B").s().p("AhHA5IAAhxIAQAAIAABkIAvAAIAAhkIAQAAIAABkIAvAAIAAhkIARAAIAABxg");
	this.shape_47.setTransform(83.5,63.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#4D575B").s().p("AgaA5IgCgCIAAgLIAFAAIAEAAIAEgCIAEgDIACgEIAGgMIguhQIAPAAIAEABQAAABAAAAQABAAAAABQAAAAABAAQAAABAAAAIAbAyQADAFABAGIACgGIAag3IACgDIADgBIAOAAIgvBjIgDAIIgGAFIgGACIgHABg");
	this.shape_48.setTransform(69.9,63.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#4D575B").s().p("AgPA2QgKgFgHgHQgHgHgEgLQgEgKAAgOQAAgMAEgLQAEgLAIgHQAHgIALgEQAJgFAMAAQAMAAAKAEQAJAFAHAGIgFAIIgBABIgDABQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBIgGgDIgIgEQgFgBgHAAQgIAAgHADQgHADgGAFQgEAGgEAIQgCAHAAALQAAALADAIQADAIAFAGQAGAGAGACQAHADAHAAIAJAAIAIgCQAEgBADgCQADgCACgDIABgBIACAAIADABIAGAHQgGAIgLAFQgKAFgPAAQgKAAgLgFg");
	this.shape_49.setTransform(59.7,63.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#4D575B").s().p("AgPA2QgLgFgGgHQgHgHgEgLQgEgKAAgOQAAgMAEgLQAEgLAHgHQAIgIAKgEQAKgFAMAAQAMAAAJAEQAKAFAHAGIgFAIIgCABIgCABQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBIgGgDIgIgEQgFgBgHAAQgIAAgHADQgHADgFAFQgGAIgCAGQgDAJAAAJQAAALADAIQADAIAFAGQAGAGAGACQAHADAIAAIAJAAIAHgCQADgBADgCIAGgFIABgBIACAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAABAAIAGAHQgGAIgLAFQgKAFgOAAQgMAAgKgFg");
	this.shape_50.setTransform(45,63.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#4D575B").s().p("AAeBIIABhfIgGANIgzBMQAAABgBABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAIgNAAIAAhyIARAAIAABWIgBAIIADgHIA2hSIADgEQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAIANAAIAABygAgQg2QgGgEAAgIIABgDQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAIAJAAIABAGQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABIADACIAFABIAFgBIAEgCIACgEIAAgGIAJAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAIABADQAAAIgGAEQgGAEgLAAQgLAAgGgEg");
	this.shape_51.setTransform(255.2,61.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#4D575B").s().p("AgWA2QgKgEgIgIQgHgIgFgKQgEgMAAgMQAAgKAEgMQAFgKAHgJQAIgHAKgFQAKgFAMABQANgBAKAFQALAFAHAHQAHAIAFALQAEAMAAAKQAAAMgEAMQgFALgHAHQgHAIgLAEQgJAFgOAAQgNAAgJgFgAgPgoQgIADgFAGQgFAFgDAIQgDAKAAAIQAAAKADAJQADAJAFAFQAFAFAIAEQAHACAIAAQAJAAAIgCQAHgEAFgFQAFgFADgJQADgJAAgKQAAgIgDgKQgDgIgFgFQgFgGgHgDQgIgDgJAAQgIAAgHADg");
	this.shape_52.setTransform(242.7,63.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#4D575B").s().p("AAeA5IAAg0Ig7AAIAAA0IgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_53.setTransform(230.2,63.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#4D575B").s().p("AAeA5IABheIgDAHIgDAGIgzBMIgDAEQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgMAAIAAhxIARAAIgBBeIAGgNIAzhMIADgEIAEgBIANAAIAABxg");
	this.shape_54.setTransform(218,63.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#4D575B").s().p("AhHA5IAAhxIARAAIAABkIAvAAIAAhkIAPAAIAABkIAvAAIAAhkIARAAIAABxg");
	this.shape_55.setTransform(203.2,63.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#4D575B").s().p("AApA5IgEgBIgBgDIgLgbIgyAAIgKAbIgCADIgEABIgMAAIAthxIAQAAIAuBxgAgUAPIAoAAIgTgxIgBgHg");
	this.shape_56.setTransform(189.3,63.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#4D575B").s().p("AAtA5IAAhVIABgEIgnBFIgCADIgEABIgBAAQgEAAgCgEIgnhFIAAAEIAAAEIAABRIgOAAIAAhxIAMAAIADAAQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABIAoBEIACAIIAqhMQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAAAAAIADAAIANAAIAABxg");
	this.shape_57.setTransform(176.4,63.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#19B7E4").s().p("AApA5IgDgBIgCgDIgLgbIgxAAIgLAbIgCADIgEABIgMAAIAuhxIAQAAIAtBxgAgDgdIgRAsIApAAIgTgxIgCgHg");
	this.shape_58.setTransform(259.8,22.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#19B7E4").s().p("AgoA5IAAhxIAlAAQALAAAHACQAIACAEAEQAGAEACAFQACAGAAAHQAAAEgBAEIgEAHQgCADgFADQgDADgGABQAMABAHAHQAGAHAAAKQAAAHgDAHQgDAGgFAEQgFAEgHADQgJACgJAAgAgXAsIAXAAQAHAAAEgBQAFgCADgDQADgCABgEQACgDAAgFQAAgIgGgGQgHgFgMAAIgXAAgAgXgFIAUAAQAFAAAFgCIAIgDIAEgGQACgEAAgEQAAgKgGgFQgGgEgMAAIgUAAg");
	this.shape_59.setTransform(249.7,22.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#19B7E4").s().p("AgHA5IAAhjIglAAIAAgOIBZAAIAAAOIglAAIAABjg");
	this.shape_60.setTransform(239.5,22.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#19B7E4").s().p("AgPA2QgJgEgIgIQgIgJgDgJQgEgMAAgMQAAgMAEgLQAEgKAHgIQAIgIAKgEQALgFALAAQAMAAAKAEQAKAFAGAGIgFAIIgCABIgCABIgDgCIgGgDIgIgEQgEgBgIAAQgIAAgHADQgGACgGAGQgFAGgDAIQgDAJAAAJQAAALADAIQADAGAFAIQAGAFAGADQAHADAIAAIAJAAIAHgCQADgBADgCIAIgGIABAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAABAAIAGAHQgHAIgKAFQgLAFgNAAQgMAAgKgFg");
	this.shape_61.setTransform(229.6,22.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#19B7E4").s().p("AAeA5IAAg0Ig7AAIAAA0IgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_62.setTransform(218,22.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#19B7E4").s().p("AApA5IgDgBIgCgDIgKgbIgzAAIgJAbIgCADIgEABIgNAAIAuhxIAQAAIAtBxgAAAgiIgUAxIApAAIgSgsIgDgMg");
	this.shape_63.setTransform(206.5,22.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#19B7E4").s().p("AgmA5IAAhxIAjAAQAJAAAIACQAJACAFAFQAGAHACAFQADAFAAAJQAAAKgDAFQgDAGgGAFQgEAEgJADQgIADgJAAIgSAAIAAAqgAgVACIASAAQAFAAAFgCQAFgBADgDQAEgDACgEQACgFAAgFIgCgJQgCgFgEgCQgCgDgGgCQgFgBgFAAIgSAAg");
	this.shape_64.setTransform(197.5,22.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#19B7E4").s().p("AgHA5IAAhjIglAAIAAgOIBZAAIAAAOIglAAIAABjg");
	this.shape_65.setTransform(187.5,22.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#19B7E4").s().p("AgPA2QgJgEgJgIQgGgIgEgKQgEgLAAgNQAAgNAEgKQAEgLAHgHQAJgIAJgEQAKgFAMAAQAMAAAJAEQALAFAGAGIgHAJIgCABIgDgCIgGgDIgIgEQgFgBgHAAQgIAAgHADQgGACgGAGQgGAGgCAIQgEAJAAAJQAAALAEAIQACAHAGAHQAGAFAGADQAHADAIAAIAJAAIAHgCIAGgDIAHgGIACAAIACABIAHAHQgIAIgKAFQgLAFgMAAQgMAAgKgFg");
	this.shape_66.setTransform(177.7,22.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#19B7E4").s().p("AgWA3QgKgFgIgIQgIgIgEgKQgDgKAAgOQAAgMADgLQAEgJAIgJQAIgHAKgFQALgEALgBQAMABALAEQALAFAHAHQAIAJAEAJQADALAAAMQAAAOgDAKQgEAKgIAIQgHAIgLAFQgLADgMAAQgLAAgLgDgAgQgoQgGADgGAFQgGAIgCAHQgDAIAAAJQAAALADAIQACAIAGAFQAGAHAGACQAIAEAIAAQAJAAAIgEQAGgCAGgHQAFgEADgJQADgIAAgLQAAgJgDgIQgDgJgFgGQgGgFgGgDQgIgDgJAAQgIAAgIADg");
	this.shape_67.setTransform(165.7,22.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#19B7E4").s().p("AgmA5IAAhxIAjAAQAJAAAJACQAGACAHAFQAGAGACAGQADAHAAAHQAAAJgDAGQgDAGgFAFQgGAEgIADQgJADgIAAIgSAAIAAAqgAgVACIASAAIAKgCIAIgEQAEgCABgFQACgEAAgGQAAgFgBgEIgFgHQgEgDgFgCQgFgBgFAAIgSAAg");
	this.shape_68.setTransform(155,22.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#19B7E4").s().p("AAcA5IAAhkIg3AAIAABkIgQAAIAAhxIBYAAIAABxg");
	this.shape_69.setTransform(143.8,22.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#19B7E4").s().p("AAeA5IAAgxIgQAAIgEABIgDABIgDADIgEAEIgWAiQgCADgDACQgDABgDAAIgNAAIAegpQAEgHAHgDQgGgCgGgDQgFgBgDgEQgDgDgCgGQgBgFAAgGQAAgIACgFQADgGAFgEQAFgEAHgDQAHgCAKAAIAmAAIAABxgAgCgqIgIAEIgEAGIgCAIQAAAFACAEQABAEADACQADACAFACQADABAHAAIAWAAIAAgnIgWAAg");
	this.shape_70.setTransform(124.9,22.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#19B7E4").s().p("AAeA5IABheIgGANIgzBMIgDAEQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgMAAIAAhxIARAAIgBBeIAGgNIAzhMIADgEIAEgBIANAAIAABxg");
	this.shape_71.setTransform(114.2,22.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#19B7E4").s().p("AAuA5IAAhZIgmBFQgBABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAIgEABIgBAAQgEAAgCgEIgnhFIABAEIAABVIgPAAIAAhxIANAAIADAAQAAAAAAAAQABABAAAAQAAAAAAAAQABABAAAAIAqBNIABgEIAphJIACgCIADAAIAMAAIAABxg");
	this.shape_72.setTransform(100.7,22.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#19B7E4").s().p("AgWA2QgKgEgIgHQgIgJgDgKQgFgLAAgNQAAgLAFgMQADgJAIgJQAIgHAKgFQAKgFAMAAQANAAAKAFQALAFAHAHQAHAIAFAKQAEANAAAKQAAAMgEAMQgFALgHAIQgHAHgLAEQgLAEgMAAQgLAAgLgEgAgPgoQgHADgGAFQgGAHgCAIQgDAJAAAIQAAAKADAJQADAIAFAGQAGAFAHAEQAHADAIAAQAJAAAIgDQAHgEAFgFQAFgFADgJQADgHAAgMQAAgKgDgHQgDgJgFgGQgFgFgHgDQgIgDgJAAQgIAAgHADg");
	this.shape_73.setTransform(86.8,22.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#19B7E4").s().p("AAeA5IAAg0Ig7AAIAAA0IgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_74.setTransform(74.3,22.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#19B7E4").s().p("AgWA2QgLgEgHgHQgHgIgFgLQgEgMAAgMQAAgKAEgNQAFgKAHgIQAHgHALgFQAKgFAMAAQANAAAKAFQALAFAHAHQAHAIAFAKQAEANAAAKQAAAMgEAMQgFALgHAIQgHAHgLAEQgLAEgMAAQgLAAgLgEgAgPgoQgIADgFAFQgFAGgDAJQgDAHAAAKQAAAMADAHQADAJAFAFQAFAFAIAEQAHADAIAAQAKAAAGgDQAIgEAFgFQAFgFADgJQADgJAAgKQAAgIgDgJQgDgJgFgGQgFgFgIgDQgGgDgKAAQgIAAgHADg");
	this.shape_75.setTransform(61.8,22.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#19B7E4").s().p("AAgA5IgFgBIgDgEIgcgpIgEgFIgHgBIgOAAIAAA0IgQAAIAAhxIAQAAIAAAxIAPAAIADgBIADgBIAegrIADgDIAEgBIAOAAIgiAvQgDAFgGACQADABADACIAGAHIAiAxg");
	this.shape_76.setTransform(51.2,22.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#19B7E4").s().p("AgeA2QgKgFgHgIIAGgHIADgBIACAAIABABIAGAFIAGADIAHACIAJAAQAHAAAHgCQAGgDAFgFQAGgGADgGQAEgJAAgIIg4AAIAAgLIA4AAQgBgJgEgHQgBgFgHgHQgFgFgGgCQgHgCgHAAQgHAAgFABIgIAEIgGADQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAAAAAIgCgBIgCgBIgFgIQAHgGAKgFQAJgEAMAAQALAAALAFQAKAEAIAIQAHAHAEALQAEAKAAANQAAAOgEAKQgDAKgIAIQgGAHgLAFQgKAFgMAAQgNAAgLgFg");
	this.shape_77.setTransform(39.7,22.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#4D575B").s().p("AgiA5IAAhxIBGAAIAAANIg2AAIAAAlIArAAIAAAMIgrAAIAAAmIA2AAIAAANg");
	this.shape_78.setTransform(202.6,42.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#4D575B").s().p("AgIA5IAAhjIgkAAIAAgOIBZAAIAAAOIglAAIAABjg");
	this.shape_79.setTransform(192.9,42.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#4D575B").s().p("AAgA5QgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAIgDgEIgcgpQgCgDgDgCIgGgBIgOAAIAAA0IgQAAIAAhxIAQAAIAAAxIAPAAIADgBIADgBIACgDIAcgoIADgDIAEgBIAOAAIgiAvQgDAFgGACQACABAEACIAGAHIAiAxg");
	this.shape_80.setTransform(183.4,42.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#4D575B").s().p("AgiA5IAAhxIBFAAIAAANIg1AAIAAAlIArAAIAAAMIgrAAIAAAmIA1AAIAAANg");
	this.shape_81.setTransform(173.2,42.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#4D575B").s().p("AgwA5QAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAAAIAAgLIAFAAIAGgBQAEgBACgEQAEgEACgGIAFgTIAFhCIBEAAIAAByIgQAAIAAhlIgkAAQgBAWgCAQQgCAPgDAMIgGASQgEAIgDAEQgGAEgDABQgFACgFAAg");
	this.shape_82.setTransform(161.6,42.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#4D575B").s().p("AAcA5IAAhkIg3AAIAABkIgQAAIAAhxIBXAAIAABxg");
	this.shape_83.setTransform(150.7,42.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#4D575B").s().p("AAuA5IAAhVIAAgEIgmBFQgBABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAIgDABIgCAAQgDAAgDgEIgnhFIAAAEIABAEIAABRIgPAAIAAhxIAMAAIAEAAIACADIAqBMIABgEIAohIIADgDIADAAIAMAAIAABxg");
	this.shape_84.setTransform(137.4,42.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#4D575B").s().p("AgWA3QgLgFgHgIQgHgHgFgLQgEgMAAgMQAAgKAEgMQAFgLAHgIQAHgIALgEQAKgEAMAAQANAAAKAEQALAEAHAIQAIAJADAKQAFALAAALQAAANgFALQgDAKgIAIQgHAIgLAFQgJADgOAAQgNAAgJgDgAgQgoQgHADgFAGQgFAFgDAIQgDAJAAAJQAAALADAIQADAJAFAEQAFAGAHADQAIADAIAAQAJAAAHgDQAHgCAGgHQAGgFACgIQADgIAAgLQAAgJgDgJQgCgHgGgGQgGgGgHgDQgHgDgJAAQgIAAgIADg");
	this.shape_85.setTransform(123.5,42.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#4D575B").s().p("AAgA5QgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAIgDgEIgcgpIgFgFIgGgBIgOAAIAAA0IgQAAIAAhxIAQAAIAAAxIAPAAIADgBIADgBIAegrQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAIAEgBIAOAAIgiAvQgDAFgGACQACABAEACIAGAHIAiAxg");
	this.shape_86.setTransform(112.9,42.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#4D575B").s().p("AgoA5IAAhxIAlAAQALAAAHACQAIACAEAEQAGAEACAFQACAGAAAHQAAAEgBAEIgEAHQgDAEgEACQgEADgFABQAMABAGAHQAHAHAAAKQAAAHgDAHQgDAGgFAEQgFAFgIACQgIACgJAAgAgXAsIAXAAIALgBQAFgCADgDQADgCABgEQACgDAAgFQAAgJgHgFQgGgFgMAAIgXAAgAgXgFIAUAAQAFAAAFgCIAIgDIAEgGQACgEAAgEQAAgKgGgFQgGgEgMAAIgUAAg");
	this.shape_87.setTransform(98,42.1);

	var maskedShapeInstanceList = [this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},158).to({state:[]},80).wait(79));

	// mask - копия (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_79 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_2_graphics_80 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_2_graphics_81 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_2_graphics_82 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_2_graphics_83 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_2_graphics_84 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_2_graphics_85 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_2_graphics_86 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_2_graphics_87 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_2_graphics_150 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_2_graphics_151 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_2_graphics_152 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh+gRIAAAAIAAzpMBCAAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_2_graphics_153 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_2_graphics_154 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_2_graphics_155 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh+gRIAAAAIAAzpMBCAAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_2_graphics_156 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_2_graphics_157 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_2_graphics_158 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh+gRIAAAAIAAzpMBCAAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(79).to({graphics:mask_2_graphics_79,x:410.5,y:108}).wait(1).to({graphics:mask_2_graphics_80,x:314.4,y:108}).wait(1).to({graphics:mask_2_graphics_81,x:231.1,y:108}).wait(1).to({graphics:mask_2_graphics_82,x:160.7,y:108}).wait(1).to({graphics:mask_2_graphics_83,x:103,y:108}).wait(1).to({graphics:mask_2_graphics_84,x:58.2,y:108}).wait(1).to({graphics:mask_2_graphics_85,x:26.1,y:108}).wait(1).to({graphics:mask_2_graphics_86,x:6.9,y:108}).wait(1).to({graphics:mask_2_graphics_87,x:0.5,y:108}).wait(1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_2_graphics_150,x:237.7,y:112}).wait(1).to({graphics:mask_2_graphics_151,x:139.3,y:112}).wait(1).to({graphics:mask_2_graphics_152,x:54,y:112}).wait(1).to({graphics:mask_2_graphics_153,x:-18.2,y:112}).wait(1).to({graphics:mask_2_graphics_154,x:-77.3,y:112}).wait(1).to({graphics:mask_2_graphics_155,x:-123.2,y:112}).wait(1).to({graphics:mask_2_graphics_156,x:-156.1,y:112}).wait(1).to({graphics:mask_2_graphics_157,x:-175.7,y:112}).wait(1).to({graphics:mask_2_graphics_158,x:-182.3,y:112}).wait(159));

	// t2
	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#4D575B").s().p("AApA5IgEgBIgBgCIgKgbIgzAAIgKAbIgCACIgEABIgMAAIAuhxIAQAAIAtBxgAgDgdIgRAsIApAAIgUgxIgBgGg");
	this.shape_88.setTransform(240.7,29.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#4D575B").s().p("AAfA5IgEgBIgDgEIgcgpQgCgDgDgBQgCgCgEAAIgOAAIAAA0IgQAAIAAhxIAQAAIAAAyIAMAAIAGgBIAFgFIAcgnIADgEQABAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAIAOAAIgiAvQgDAGgGABQAEACACABQADADADAEIAiAxg");
	this.shape_89.setTransform(230.6,29.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#4D575B").s().p("AgmA5IAAhxIAjAAQAJAAAJACQAIADAFAFQAFAEADAHQADAHAAAIQAAAIgDAGQgCAGgGAFQgFAFgJACQgIADgJAAIgSAAIAAAqgAgVACIASAAQAFAAAFgCQAFAAAEgEIAFgHQABgEAAgFQAAgGgBgEQgBgDgEgEQgDgDgGgCIgKgBIgSAAg");
	this.shape_90.setTransform(220.2,29.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#4D575B").s().p("AAeA5IAAhWIABgIIgDAHIg2BSQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgMAAIAAhxIARAAIAABWIgBAIIAGgNIAzhMQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQABAAAAAAIANAAIAABxg");
	this.shape_91.setTransform(208.8,29.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#4D575B").s().p("AgHA5IAAhjIglAAIAAgOIBZAAIAAAOIglAAIAABjg");
	this.shape_92.setTransform(198,29.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#4D575B").s().p("AgPA2QgKgEgHgIQgHgHgEgMQgEgLAAgMQAAgLAEgMQAFgLAHgHQAHgIALgFQAKgEALAAQAOAAAIAEQAJAFAIAGIgGAHIgBACIgCABIgEgCIgFgEIgJgDQgFgBgHAAQgIAAgHADQgJAFgDAEQgGAFgDAIQgCAJAAAJQAAALADAIQADAJAFAEQAFAHAIACQAGADAHAAIAJgBIAIgBIAHgDIAFgFIACgBIABAAIACABIAHAHQgHAJgKAEQgKAEgPAAQgLAAgKgEg");
	this.shape_93.setTransform(188.1,29.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#4D575B").s().p("AAeA5IAAgwIgQAAIgEAAIgDABIgDADIgEAEIgXAjIgEAEQgDABgDAAIgMAAIAdgpQAEgHAHgDIgMgEQgGgDgCgDIgFgJQgCgEAAgGQAAgHADgHQADgGAFgEQAGgFAHgCQAIgCAIAAIAmAAIAABxgAgCgqIgIAEQgDADgBAEQgCADAAAFQAAAEACAEQABADADADQADADAFABIAgABIAAgnIgWAAIgKABg");
	this.shape_94.setTransform(168.9,29.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#4D575B").s().p("AApA5IgDgBIgCgCIgLgbIgxAAIgLAbIgCACIgDABIgNAAIAuhxIAPAAIAuBxgAgBgiIgTAxIApAAIgVg3g");
	this.shape_95.setTransform(158.9,29.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#4D575B").s().p("AAeA5IAAgzIg7AAIAAAzIgRAAIAAhxIARAAIAAAzIA7AAIAAgzIARAAIAABxg");
	this.shape_96.setTransform(147.4,29.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#4D575B").s().p("AgoA5IAAhxIAlAAQAIAAAKACQAIACAEAEQAGAEACAFQACAHAAAGQAAAEgBAEQgCAEgCADIgHAGIgJAEQAMACAHAHQAGAGAAALQAAAIgDAFQgCAGgGAEQgEAEgIADQgHACgLAAgAgXAsIAXAAQAHAAAEgBIAIgEQADgDABgEQACgDAAgFQAAgJgGgEQgGgFgNAAIgXAAgAgXgFIAegBQAEgBAEgDQADgCABgEQACgEAAgEQAAgJgGgGQgGgEgMAAIgUAAg");
	this.shape_97.setTransform(136.4,29.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#4D575B").s().p("AAeA5IAAhWIABgIIgGANIgzBMQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgNAAIAAhxIARAAIAABWIgBAIIADgHIA2hSQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAIANAAIAABxg");
	this.shape_98.setTransform(124.8,29.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#4D575B").s().p("AgHA5IAAhjIglAAIAAgOIBZAAIAAAOIglAAIAABjg");
	this.shape_99.setTransform(114,29.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#4D575B").s().p("AAfA5IgEgBIgDgEIgcgpQgCgDgDgBQgCgCgEAAIgOAAIAAA0IgQAAIAAhxIAQAAIAAAyIAMAAIAGgBIAFgFIAcgnIADgEIAEgBIAOAAIgiAvQgEAGgFABQAEACACABIAGAHIAiAxg");
	this.shape_100.setTransform(104.6,29.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#4D575B").s().p("AgiA5IAAhxIBGAAIAAANIg2AAIAAAlIArAAIAAAMIgrAAIAAAmIA2AAIAAANg");
	this.shape_101.setTransform(94.3,29.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#4D575B").s().p("AgHA8IAAgOQgMgBgIgDQgIgDgHgHQgGgFgEgJQgEgIAAgKQAAgJAEgIQAEgJAGgFQAGgGAJgEQAKgEAKAAIAAgOIAPAAIAAAOQAKAAAKAEQAIADAHAHQAHAGADAIQAEAIAAAJQAAAKgEAIQgDAGgHAIQgHAHgIADQgIADgMABIAAAOgAAIAhQAHAAAGgDQAFgCAFgFQAEgEADgGQACgFAAgIQAAgHgCgFQgDgGgEgEQgFgFgFgDQgGgCgHAAgAgUgeQgHADgDAFQgFAFgCAFQgCAGAAAGQAAAHACAGQACAFAFAFQAEAFAGACQAGADAHAAIAAhBQgHAAgGACg");
	this.shape_102.setTransform(83,29.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#4D575B").s().p("AgHA8IAAgOQgMgBgIgDQgIgDgHgHQgGgFgEgJQgEgIAAgKQAAgJAEgIQAEgJAGgFQAGgGAJgEQAKgEAKAAIAAgOIAPAAIAAAOQAKAAAKAEQAIADAHAHQAHAGADAIQAEAIAAAJQAAAKgEAIQgDAGgHAIQgHAHgIADQgIADgMABIAAAOgAAIAhQAHAAAGgDQAFgCAFgFQAEgEADgGQACgFAAgIQAAgHgCgFQgDgGgEgEQgFgFgFgDQgGgCgHAAgAgUgeQgHADgDAFQgFAFgCAFQgCAGAAAGQAAAHACAGQACAFAFAFQAEAFAGACQAGADAHAAIAAhBQgHAAgGACg");
	this.shape_103.setTransform(70.5,29.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#4D575B").s().p("AgeA2QgJgEgIgJIAGgHIADgBIADABIAGAFIAGADIAQADQAIAAAGgEQAGgCAFgFQAGgFADgHQADgGABgLIg4AAIAAgLIA4AAQgBgKgEgGQgDgHgFgEQgFgFgGgDQgHgDgHABQgHgBgFACIgIADIgGAEIgDACIgCgBIgCgBIgFgIQAHgGAKgEQAHgFAOAAQALAAALAFQAKAEAIAHQAHAKAEAJQAEAKAAANQAAAOgEAJQgDAMgIAHQgGAIgLAEQgKAFgMgBQgOABgKgFg");
	this.shape_104.setTransform(58.7,29.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#19B7E4").s().p("AgjA5IAAhxIBGAAIAAANIg1AAIAAAlIArAAIAAAMIgrAAIAAAmIA1AAIAAANg");
	this.shape_105.setTransform(162.3,50.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#19B7E4").s().p("AApA5IAAhxIARAAIAABxgAg5A5IAAhxIARAAIAAAxIAVAAQAKAAAIACQAHACAFAEQAFAEACAGQADAGAAAGQAAAHgDAHQgDAIgFADQgEAEgIADQgGACgLAAgAgoAsIAVAAQAHAAAEgBQAGgCACgCQABgCACgEIABgIIgBgJQgBgDgCgDQgCgCgGgCQgEgBgHAAIgVAAg");
	this.shape_106.setTransform(150.1,50.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#19B7E4").s().p("AAeA5IAAgzIg7AAIAAAzIgRAAIAAhxIARAAIAAAzIA7AAIAAgzIARAAIAABxg");
	this.shape_107.setTransform(136.7,50.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#19B7E4").s().p("AgHA5IAAhjIglAAIAAgOIBZAAIAAAOIglAAIAABjg");
	this.shape_108.setTransform(125.9,50.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#19B7E4").s().p("AAfA5IgEgBIgfgtQgCgDgDgBQgCgCgEAAIgOAAIAAA0IgQAAIAAhxIAQAAIAAAyIAMAAIAGgBIAFgFIAcgnQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAIAOAAIgiAvQgDAGgGABIAGADIAGAHIAiAxg");
	this.shape_109.setTransform(116.5,50.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#19B7E4").s().p("AAqA5IgEgBIgCgCIgKgbIgzAAIgKAbIgBACIgEABIgNAAIAuhxIAQAAIAtBxgAAAgiIgTAxIAoAAIgVg3g");
	this.shape_110.setTransform(105,50.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#19B7E4").s().p("AAcA5IAAhkIg3AAIAABkIgRAAIAAhxIBZAAIAABxg");
	this.shape_111.setTransform(93.7,50.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#19B7E4").s().p("AAuA5IAAhVIAAgEIgnBGIgCACIgDABIgCAAQgEAAgBgDIgohGIABAEIAABVIgPAAIAAhxIAMAAIAEAAIACADIAqBNIADgJIAmhEIADgDIADAAIAMAAIAABxg");
	this.shape_112.setTransform(80.4,50.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#19B7E4").s().p("AgWA2QgLgFgHgHQgGgGgGgMQgEgLAAgNQAAgMAEgKQAFgMAHgHQAHgIALgEQAKgFAMABQANgBAKAFQALAEAHAIQAHAHAFAMQAEAKAAAMQAAANgEALQgFAMgHAGQgHAHgLAFQgKAEgNABQgMgBgKgEgAgPgoQgJAEgEAFQgFAFgDAIQgDAIAAAKQAAAMADAGQADAJAFAGQAFAFAIADQAHADAIAAQAKAAAGgDQAIgDAFgFQAFgGADgJQADgJAAgJQAAgIgDgKQgDgIgFgFQgEgFgJgEQgGgEgKAAQgIAAgHAEg");
	this.shape_113.setTransform(66.6,50.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#19B7E4").s().p("AAgA5IgFgBIgfgtQgCgDgCgBQgDgCgEAAIgOAAIAAA0IgQAAIAAhxIAQAAIAAAyIAMAAIAGgBIAFgFIAcgnIADgEQABAAAAAAQABgBAAAAQAAAAABAAQABAAAAAAIAOAAIgiAvQgDAGgGABQAFACABABIAGAHIAiAxg");
	this.shape_114.setTransform(56,50.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#19B7E4").s().p("AApA5IAAhxIARAAIAABxgAg5A5IAAhxIARAAIAAAxIAVAAQAKAAAJACQAGADAFADQAFAEACAGQADAEAAAIQAAAHgDAHQgDAIgFADQgEAEgIADQgGACgLAAgAgoAsIAVAAQAHAAAEgBQAGgCACgCQABgCACgEQACgEAAgEQAAgFgCgEIgDgGQgCgCgFgCQgFgBgHAAIgVAAg");
	this.shape_115.setTransform(242.9,50.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#19B7E4").s().p("AgmA5IAAhxIAjAAQAJAAAJACQAIADAFAFQAFAEADAHQADAHAAAIQAAAHgDAHQgDAGgFAFQgFAFgJACQgIADgJAAIgSAAIAAAqgAgVACIASAAQADAAAHgCQAFAAAEgDIAFgIQABgEAAgFQAAgGgBgEQgBgDgEgEQgDgDgGgCQgEgBgGAAIgSAAg");
	this.shape_116.setTransform(231.3,50.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#19B7E4").s().p("AgjA5IAAhxIBGAAIAAANIg1AAIAAAlIArAAIAAAMIgrAAIAAAmIA1AAIAAANg");
	this.shape_117.setTransform(221.8,50.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#19B7E4").s().p("AAuA5IAAhVIAAgEIgnBGIgCACIgDABIgCAAQgEAAgCgDIgnhGIAAAEIABAEIAABRIgPAAIAAhxIAMAAIAEAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAABABIAmBEIADAJIAEgJIAmhEIADgDIADAAIAMAAIAABxg");
	this.shape_118.setTransform(209.4,50.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#19B7E4").s().p("AgXA2QgKgEgHgHIAFgIIACgBIACgBIADABIADACIAEADIAMAFIAJAAQALABAHgGQAHgGAAgKIgCgIQgBgEgEgDIgHgDIgZgBIgBgNIAPAAQAFAAADgCQAEAAAEgDQACgBACgEIACgIQAAgDgCgEQgBgCgDgDQgEgDgDgBQgFgBgEAAQgHAAgEABIgIAEIgFACIgDACIgCgBIgCgCIgEgIQAHgFAIgEQAJgCALAAQAIAAAHABQAIADAEAEQAFADADAGQACAGAAAGQAAAIgEAHQgEAHgIAEIAIADQAEACACAEIAEAHQACAEAAAFQAAAHgDAGQgDAHgFAFQgFAEgJADQgHAEgJAAQgMAAgLgFg");
	this.shape_119.setTransform(197.1,50.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#19B7E4").s().p("AApA5IgDgBIgCgCIgLgbIgxAAIgLAbIgCACIgEABIgMAAIAuhxIAPAAIAuBxgAgDgdIgRAsIApAAIgTgxIgCgGg");
	this.shape_120.setTransform(187.4,50.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#19B7E4").s().p("AgmA5IAAhxIAjAAQAJAAAJACQAIADAFAFQAFAEADAHQADAHAAAIQAAAIgDAGQgCAGgGAFQgFAFgJACQgIADgJAAIgSAAIAAAqgAgVACIASAAQADAAAHgCQAFAAAEgDIAFgIQABgEAAgFQAAgGgBgEQgBgDgEgEQgDgDgGgCQgEgBgGAAIgSAAg");
	this.shape_121.setTransform(178.4,50.7);

	var maskedShapeInstanceList = [this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88}]},79).to({state:[]},80).wait(158));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_0 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_3_graphics_1 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_3_graphics_2 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_3_graphics_3 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_3_graphics_4 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_3_graphics_5 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_3_graphics_6 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_3_graphics_7 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_3_graphics_8 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_3_graphics_71 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_3_graphics_72 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_3_graphics_73 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh+gRIAAAAIAAzpMBCAAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_3_graphics_74 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_3_graphics_75 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_3_graphics_76 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh+gRIAAAAIAAzpMBCAAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_3_graphics_77 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_3_graphics_78 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_3_graphics_79 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh+gRIAAAAIAAzpMBCAAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:mask_3_graphics_0,x:410.5,y:108}).wait(1).to({graphics:mask_3_graphics_1,x:314.4,y:108}).wait(1).to({graphics:mask_3_graphics_2,x:231.1,y:108}).wait(1).to({graphics:mask_3_graphics_3,x:160.7,y:108}).wait(1).to({graphics:mask_3_graphics_4,x:103,y:108}).wait(1).to({graphics:mask_3_graphics_5,x:58.2,y:108}).wait(1).to({graphics:mask_3_graphics_6,x:26.1,y:108}).wait(1).to({graphics:mask_3_graphics_7,x:6.9,y:108}).wait(1).to({graphics:mask_3_graphics_8,x:0.5,y:108}).wait(1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_3_graphics_71,x:237.7,y:112}).wait(1).to({graphics:mask_3_graphics_72,x:139.3,y:112}).wait(1).to({graphics:mask_3_graphics_73,x:54,y:112}).wait(1).to({graphics:mask_3_graphics_74,x:-18.2,y:112}).wait(1).to({graphics:mask_3_graphics_75,x:-77.3,y:112}).wait(1).to({graphics:mask_3_graphics_76,x:-123.2,y:112}).wait(1).to({graphics:mask_3_graphics_77,x:-156.1,y:112}).wait(1).to({graphics:mask_3_graphics_78,x:-175.7,y:112}).wait(1).to({graphics:mask_3_graphics_79,x:-182.3,y:112}).wait(238));

	// t1
	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.lf(["#428835","#1C7131","#4FAE33","#3A7C32"],[0,0.298,0.671,1],-0.3,20.4,0.3,-18.9).s().p("AjxC6QAzgMAegaQAbgXASgoQANgdAQg4QARg+AKgYQAlhdBWgIQAggDC2AAQhXAKglBdQgKAXgRA+QgQA4gNAcQgTApgaAXQgeAZgyAMQggAIjaAAIAkgFg");
	this.shape_122.setTransform(260.3,40.5,0.5,0.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.lf(["#F2F3F3","#D4D4D6","#FFFFFF","#DEDFE0"],[0,0.31,0.671,1],-0.7,21.6,0.6,-19).s().p("AjmC5QAzgMAegaQAbgXASgoQANgdAQg4QASg9AJgYQAmhcBVgKIDTgCQhVALglBcQgKAYgRA9QgPA3gNAdQgUApgaAWQgeAbgyALQgTAFhrACIiOABQAogCAPgEg");
	this.shape_123.setTransform(270.6,40.4,0.5,0.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.lf(["#A81917","#B31918","#E41513","#A81917"],[0,0.298,0.659,1],-0.3,21,0.3,-18.5).s().p("AjxC5QAzgLAegbQAbgWATgpQANgcAQg4QARg9AJgXQAlhbBSgMIAXgCIDRgBQhSAMglBcQgJAXgSA9QgPA3gNAdQgTAogaAXQgeAZgyAMQgQAEh0ADIiYACQAjgCAPgEg");
	this.shape_124.setTransform(281.7,40.3,0.5,0.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#19B7E4").s().p("AApA5IAAhxIARAAIAABxgAg5A5IAAhxIARAAIAAAxIAVAAQAMAAAGACQAGABAGAEQAFAFACAFQADAGAAAHQAAAIgDAGQgCAGgGAFQgFAFgHACQgIACgJAAgAgoAsIAVAAQAHAAAEgBQAFgCADgDQACgCABgEIABgIIgBgIQgBgEgCgCIgIgEIgggBg");
	this.shape_125.setTransform(237.7,51.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#19B7E4").s().p("AAeA5IAAg0Ig7AAIAAA0IgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_126.setTransform(224.3,51.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#19B7E4").s().p("AAeA5IAAhWIABgIIgGANIgzBMQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQgBAAAAAAIgNAAIAAhxIARAAIAABWIgBAIIADgHIA2hSQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAIANAAIAABxg");
	this.shape_127.setTransform(212.1,51.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#19B7E4").s().p("AhHA5IAAhxIARAAIAABkIAuAAIAAhkIAQAAIAABkIAvAAIAAhkIARAAIAABxg");
	this.shape_128.setTransform(197.4,51.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#19B7E4").s().p("AApA5IgDgBIgCgDIgKgbIgzAAIgJAbIgCADQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgMAAIAuhxIAQAAIAtBxgAgDgeIgRAsIApAAIgVg3g");
	this.shape_129.setTransform(183.4,51.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#19B7E4").s().p("AAtA5IAAhRIABgEIAAgEIgmBFIgDADIgEABIgBAAQgEAAgCgEIgnhFIAAAEIAABVIgOAAIAAhxIAPAAIADACIApBNIACgEIAphJIABgCIAQAAIAABxg");
	this.shape_130.setTransform(170.6,51.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#19B7E4").s().p("AgjA5IAAhxIBGAAIAAANIg1AAIAAAlIArAAIAAAMIgrAAIAAAmIA1AAIAAANg");
	this.shape_131.setTransform(152.5,51.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#19B7E4").s().p("AApA5IAAhxIARAAIAABxgAg5A5IAAhxIARAAIAAAwIAWAAQAJAAAJADQAGACAFADQAGAFACAFQACAGAAAHQAAAIgDAGQgDAGgFAFQgGAFgFACQgJACgJAAgAgoAsIAVAAQAHAAAFgBQAEgCADgDQACgBABgFQACgDAAgFQAAgEgCgEQAAgEgDgCIgHgEIghgBg");
	this.shape_132.setTransform(140.3,51.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#19B7E4").s().p("AAeA5IAAg0Ig7AAIAAA0IgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_133.setTransform(127,51.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#19B7E4").s().p("AgnA5IAAhxIARAAIAAAwIAWAAQAJAAAIADQAIACAEADQAGAFACAFQADAGgBAHQAAAIgCAGQgDAGgGAFQgFAFgHACQgIACgIAAgAgWAsIAWAAQAFAAAFgBQAFgCADgDQACgBABgFQACgDAAgFQAAgEgCgEQAAgEgDgCIgIgEIgggBg");
	this.shape_134.setTransform(116.5,51.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#19B7E4").s().p("AgwA5QAAAAgBgBQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgKIAFAAIAHgBQADgCADgDQADgGACgFQACgFADgNQACgIABgTIADgnIBDAAIAAByIgQAAIAAhlIgkAAQgBAWgCAQQgCAQgDALQgCAMgEAGQgDAHgEAFQgEAEgFABQgFACgFAAg");
	this.shape_135.setTransform(104.6,51.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#19B7E4").s().p("AAqA5IgEgBIgCgDIgLgbIgyAAIgKAbIgCADIgDABIgNAAIAuhxIAPAAIAuBxgAgBgjIgSAxIAoAAIgVg3g");
	this.shape_136.setTransform(93.9,51.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#19B7E4").s().p("AgmA5IAAhxIAiAAQAMAAAHACQAHACAGAFQAGAFACAHQADAGAAAIQAAAJgDAGQgEAGgFAEQgEAFgJADQgJADgJAAIgRAAIAAAqgAgVACIARAAQAHAAAEgCQAFgBADgDQAEgCABgFIACgKQAAgFgCgEQgBgEgEgDQgCgDgGgCQgHgCgEAAIgRAAg");
	this.shape_137.setTransform(84.9,51.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#19B7E4").s().p("AAeA5IAAhPIABgPIgGANIgzBMIgDADQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgNAAIAAhxIARAAIgBBeIADgHIADgGIAzhMIADgEIAFgBIAMAAIAABxg");
	this.shape_138.setTransform(73.5,51.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#19B7E4").s().p("AgHA5IAAhkIglAAIAAgNIBZAAIAAANIglAAIAABkg");
	this.shape_139.setTransform(62.7,51.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#19B7E4").s().p("AgPA2QgJgDgIgJQgIgJgDgJQgEgMAAgMQAAgMAEgKQAEgLAIgIQAHgIAKgEQALgEALAAQALAAALADQAKAFAGAGIgFAIIgCABIgCABIgDgCIgGgDIgIgDQgEgCgIAAQgIAAgHADQgGADgGAGQgFAFgDAIQgDAJAAAJQAAALADAIQACAIAHAGQAFAGAGACQAHADAIAAIAJAAIAIgCIAFgDIAIgGIABAAIADABIAGAHQgHAJgKAEQgKAEgOABQgLAAgLgFg");
	this.shape_140.setTransform(52.8,51.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#4D575B").s().p("AgjA5IAAhxIBHAAIAAANIg2AAIAAAlIArAAIAAAMIgrAAIAAAmIA2AAIAAANg");
	this.shape_141.setTransform(200.5,30.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#4D575B").s().p("AAeA5IAAhWIABgIIgDAHIg2BSQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgMAAIAAhxIARAAIAABWIgBAIIAGgNIAzhMQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAIANAAIAABxg");
	this.shape_142.setTransform(189.4,30.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#4D575B").s().p("AAfA5IgEgBIgfgtIgEgFQgEgBgDAAIgOAAIAAA0IgQAAIAAhxIAQAAIAAAxIAPAAIADgBIADgBIAegrIADgDIAFgBIANAAIgiAuQgDAGgGACQACABAEACIAoA4g");
	this.shape_143.setTransform(178.6,30.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#4D575B").s().p("AgPA3QgKgFgIgIQgGgHgEgMQgEgKAAgNQAAgNAEgJQAEgLAHgIQAIgIAKgEQAKgEAMgBQAMAAAJAFQALAEAGAGIgGAIIgBABIgCABIgEgCIgEgEIgJgCQgEgCgIAAQgIAAgHADQgGADgHAFQgEAGgDAJQgEAIAAAJQAAALAEAIQACAHAGAHQAFAFAHADQAHADAIABIAJgBIAHgCIAGgDIAIgGIABAAIACABIAHAHQgIAJgKAEQgJAEgPAAQgKAAgLgDg");
	this.shape_144.setTransform(167.4,30.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#4D575B").s().p("AAeA5IAAg0Ig7AAIAAA0IgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_145.setTransform(155.7,30.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#4D575B").s().p("AAeA5IAAgxIgQAAIgEABIgDABIgDADIgEAEIgXAiIgEAEQgCACgEAAIgMAAIAdgpQAEgHAHgEQgHAAgFgEQgGgCgCgDQgEgFgBgEQgCgFAAgGQAAgHADgGQADgHAFgDQAGgFAHgCQAGgCAKAAIAmAAIAABxgAgCgqIgIAEQgDADgBADIgCAIQAAAFACAEQABAEADACQACACAGACQADABAHAAIAWAAIAAgnIgWAAQgHAAgDABg");
	this.shape_146.setTransform(143.6,30.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#4D575B").s().p("AgmA5IAAhxIAQAAIAAAwIAWAAQAIAAAJADQAIACAFADQAFAFACAFQADAGAAAHQAAAIgEAGQgBAGgHAFQgEAEgIADQgJACgHAAgAgWAsIAWAAIAKgBQAEgCADgDQAEgCABgEQABgDAAgFIgBgIQgCgEgDgCIgHgEIgggBg");
	this.shape_147.setTransform(134.6,30.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#4D575B").s().p("AgwA5QAAAAgBgBQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgKIAFAAIAHgBQADgCADgDIAFgLIAFgSQACgIABgTIADgnIBDAAIAAByIgQAAIAAhlIgkAAIgDAmQgCASgDAJQgCALgEAHQgCAHgFAFQgEAEgFABIgKACg");
	this.shape_148.setTransform(122.7,30.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#4D575B").s().p("AApA5IgDgBIgCgDIgLgbIgxAAIgLAbIgCADQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgNAAIAuhxIAPAAIAuBxgAgBgjIgTAxIApAAIgVg3g");
	this.shape_149.setTransform(112,30.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#4D575B").s().p("AgHA5IAAhkIglAAIAAgNIBZAAIAAANIglAAIAABkg");
	this.shape_150.setTransform(103,30.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#4D575B").s().p("AAeA5IAAhPIABgPIgGANIgzBMIgDADQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgLAAIAAhxIAQAAIgBBeIAGgNIAzhMIADgEIAFgBIALAAIAABxg");
	this.shape_151.setTransform(92.1,30.4);

	var maskedShapeInstanceList = [this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128,this.shape_129,this.shape_130,this.shape_131,this.shape_132,this.shape_133,this.shape_134,this.shape_135,this.shape_136,this.shape_137,this.shape_138,this.shape_139,this.shape_140,this.shape_141,this.shape_142,this.shape_143,this.shape_144,this.shape_145,this.shape_146,this.shape_147,this.shape_148,this.shape_149,this.shape_150,this.shape_151];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122}]}).to({state:[]},80).wait(237));

	// bg
	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#ECF1F6").s().p("Ay1fWMAAAg+rMAlrAAAMAAAA+rg");
	this.shape_152.setTransform(150,125,1.244,0.623);

	this.timeline.addTween(cjs.Tween.get(this.shape_152).wait(317));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(54.1,149,511.3,348.4);
// library properties:
lib.properties = {
	width: 300,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/p1.png", id:"p1"},
		{src:"images/300x300_atlas_NP_.jpg", id:"300x300_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;