(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"160x600_atlas_NP_", frames: [[0,816,150,145],[0,0,180,270],[0,272,180,270],[0,544,180,270]]}
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
	this.spriteSheet = ss["160x600_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.p2 = function() {
	this.spriteSheet = ss["160x600_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.p3 = function() {
	this.spriteSheet = ss["160x600_atlas_NP_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.p4 = function() {
	this.spriteSheet = ss["160x600_atlas_NP_"];
	this.gotoAndStop(3);
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

}).prototype = getMCSymbolPrototype(lib.p4_1, new cjs.Rectangle(0,0,180,270), null);


(lib.p3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p3_1, new cjs.Rectangle(0,0,180,270), null);


(lib.p2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2_1, new cjs.Rectangle(0,0,180,270), null);


(lib.dfgdfggg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMAZQgFgFgBgHIAHgBQABAGADADQADACAEAAQAEAAAEgDQADgDAAgGQAAgEgDgDQgDgEgFAAIgEABIABgFIABAAQADAAAEgCQAEgDAAgFQAAgDgDgDQgDgCgDAAQgEAAgDACQgCADgBAFIgHgBQABgHAFgEQAEgEAHAAQAEAAAEACQAEACACADQACAEAAAEQAAADgCADQgCADgEACQAFABADADQADAEAAAFQAAAIgGAFQgFAFgIAAQgHAAgFgEg");
	this.shape.setTransform(121,23.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMAYQgGgEAAgHIAHgBQABAGADACQADADAEAAQAEAAAEgEQAEgEAAgGQAAgGgEgDQgEgDgEAAQgEAAgCACQgDABgBACIgHgBIAGgdIAbAAIAAAHIgWAAIgDAPQAFgDAFAAQAHAAAGAFQAFAEAAAIQAAAIgEAGQgGAHgJAAQgIAAgEgFg");
	this.shape_1.setTransform(116.8,23.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_2.setTransform(112.4,23.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMAXQgFgHgBgQQAAgJACgGQADgHADgDQAEgDAGAAQAEAAAEACQADABADAEIADAIIABANQAAAKgCAGQgBAGgFAEQgEADgGAAQgHAAgFgGgAgHgSQgDAFgBANQABAOADAFQADAEAEAAQAFAAADgEQAEgFAAgOQAAgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_3.setTransform(108.3,23.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgKAcQAAgHADgJQACgKAFgIQAEgIAGgHIgbAAIAAgGIAkAAIAAAFQgGAGgGAKQgFAIgCALQgCAHgBAIg");
	this.shape_4.setTransform(104.1,23.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMAXQgGgHABgQQAAgJABgGQACgHAFgDQAEgDAFAAQAFAAADACQADABADAEIAEAIIABANQAAAKgCAGQgCAGgFAEQgDADgHAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQADgFAAgOQAAgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_5.setTransform(99.8,23.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNAXQgFgHAAgPQAAgPAGgIQAFgGAJAAQAGAAAFAEQAEADABAHIgHABQgBgFgCgBQgCgDgFAAIgFABQgDADgCAEQgCAFAAAJQACgEAEgCIAHgCQAHAAAFAFQAFAEAAAJQAAAFgDAFQgCAEgEADQgEACgFAAQgIAAgGgGgAgGABQgEADAAAGIACAHQABADADACQADABACAAQAEAAAEgDQADgEAAgGQAAgGgDgDQgEgDgEAAQgFAAgCADg");
	this.shape_6.setTransform(95.5,23.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMAaQgEgEgBgHIAHgBQABAFACACQADACADAAQADAAACgBIAEgEIADgHIABgIIAAgCQgCAEgEACQgEACgDAAQgHAAgFgFQgFgEAAgJQAAgJAFgFQAFgFAIAAQAFAAAEADQAFADACAFQADAGAAAKQAAAKgDAHQgCAGgFAEQgEADgGAAQgGAAgFgDgAgHgTQgEAEAAAGQAAAGAEADQADADAEAAQAFAAADgDQADgDAAgGQAAgGgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_7.setTransform(91.3,23.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgJAcQAAgHACgJQADgKAEgIQAEgIAGgHIgbAAIAAgGIAkAAIAAAFQgGAGgFAKQgGAIgCALQgCAHgBAIg");
	this.shape_8.setTransform(87.1,23.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgKAcQAAgHADgJQACgKAFgIQAEgIAGgHIgcAAIAAgGIAlAAIAAAFQgGAGgGAKQgFAIgCALQgCAHgBAIg");
	this.shape_9.setTransform(82.8,23.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_10.setTransform(78.4,23.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgMAXQgGgHAAgQQABgJACgGQACgHADgDQAFgDAFAAQAFAAADACQADABADAEIADAIIACANQgBAKgCAGQgCAGgDAEQgFADgGAAQgIAAgEgGgAgHgSQgDAFgBANQABAOADAFQADAEAEAAQAFAAADgEQADgFABgOQgBgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_11.setTransform(74.3,23.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_12.setTransform(69.7,23.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_13.setTransform(63.1,23.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAIABQAFABACACQADACACADQACAEAAAEQAAAHgFAEQgFAFgMAAIgNAAIAAAYgAgNAAIANAAQAIAAADgDQADgDAAgFQAAgDgBgDQgCgCgEgBIgHgBIgNAAg");
	this.shape_14.setTransform(57.9,23.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgRAdIAAg5IAkAAIAAAHIgdAAIAAAyg");
	this.shape_15.setTransform(53.4,23.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_16.setTransform(48,23.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgNAYQgFgEAAgHIAHgBQABAGADACQADADAEAAQAFAAADgEQAEgEgBgGQABgGgEgDQgDgDgFAAQgDAAgDACQgDABgBACIgHgBIAGgdIAbAAIAAAHIgWAAIgDAPQAGgDAEAAQAHAAAFAFQAGAEAAAIQAAAIgEAGQgGAHgJAAQgHAAgGgFg");
	this.shape_17.setTransform(40.9,23.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_18.setTransform(36.3,23.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgMAXQgFgHAAgQQAAgJABgGQACgHAFgDQAEgDAFAAQAFAAADACQAEABACAEIAEAIIABANQAAAKgCAGQgDAGgEAEQgDADgHAAQgHAAgFgGgAgHgSQgEAFABANQgBAOAEAFQADAEAEAAQAFAAADgEQAEgFgBgOQABgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_19.setTransform(32.4,23.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgSAdIAAgFIAGgIIAJgIQAIgIADgEQADgEAAgEQAAgEgDgDQgCgDgGAAQgDAAgEADQgDADABAGIgIgBQABgIAFgEQAFgFAHAAQAIAAAFAFQAFAEgBAHIgBAHQgBADgDADQgEAEgHAGIgIAHIgDAEIAcAAIAAAHg");
	this.shape_20.setTransform(28.1,23.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_21.setTransform(23.6,23.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgNAYQgFgEAAgHIAHgBQABAGADACQADADAEAAQAFAAADgEQADgEAAgGQAAgGgDgDQgDgDgFAAQgDAAgDACQgDABgBACIgHgBIAFgdIAcAAIAAAHIgWAAIgDAPQAGgDAEAAQAIAAAEAFQAGAEAAAIQAAAIgFAGQgFAHgJAAQgHAAgGgFg");
	this.shape_22.setTransform(19.7,23.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_23.setTransform(15.2,23.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgMAXQgGgHABgQQAAgJABgGQACgHAFgDQAEgDAFAAQAFAAADACQADABADAEIAEAIIABANQAAAKgCAGQgCAGgFAEQgDADgHAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQADgFAAgOQAAgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_24.setTransform(11.1,23.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgKAcQABgHACgJQADgKAEgIQAEgIAFgHIgbAAIAAgGIAkAAIAAAFQgFAGgFAKQgGAIgCALQgCAHAAAIg");
	this.shape_25.setTransform(6.9,23.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgJAcQgBgHADgJQADgKAEgIQAEgIAFgHIgaAAIAAgGIAkAAIAAAFQgGAGgFAKQgGAIgCALQgCAHAAAIg");
	this.shape_26.setTransform(2.7,23.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_27.setTransform(116.2,14.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_28.setTransform(110.6,14.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAQAdIAAgsIgeAsIgHAAIAAg5IAGAAIAAAtIAegtIAIAAIAAA5g");
	this.shape_29.setTransform(105,14.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_30.setTransform(99.3,17.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgNAYQgFgFAAgHQAAgGADgEQADgCAFgCQgEgBgDgDQgBgDAAgEQAAgHAEgEQAFgEAGAAQAHAAAFAEQAFAEAAAHQgBAEgCADQgCADgEABQAGACACADQADAEAAAFQAAAHgFAFQgGAFgIAAQgHAAgGgFgAgHAEQgEADAAAFIACAGIAEAEIAFABQAFAAAEgDQADgDAAgFQAAgFgDgDQgEgEgFAAQgEAAgDAEgAgFgUQgDADAAADQAAAEADADQACADADAAQAEAAADgDQACgDABgDQgBgEgCgDQgDgCgEAAQgDAAgCACg");
	this.shape_31.setTransform(96.1,14.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_32.setTransform(91,17.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AARAbIAAgMIggAAIAAAMIgGAAIAAgSIAEAAQAHgJAAgaIAcAAIAAAjIAEAAIAAASgAgKAJIAVAAIAAgdIgQAAQAAAUgFAJg");
	this.shape_33.setTransform(87.6,16.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgDAHQAAAAABgBQAAAAABgBQAAAAABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_34.setTransform(82.5,17.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAKAcIAAgeIgSAeIgIAAIAAgoIAHAAIAAAeIATgeIAHAAIAAAogAgGgUQgDgDgBgEIAEAAIADADIADABIAFgBIACgDIAFAAQAAAEgDADQgEACgEABQgFgBgCgCg");
	this.shape_35.setTransform(79.4,14.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgKAEIAAgHIAVAAIAAAHg");
	this.shape_36.setTransform(76,15.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgSAdIAAgFIAGgIIAJgIQAIgIADgEQADgEAAgEQAAgEgDgDQgCgDgGAAQgDAAgEADQgDADAAAGIgHgBQABgIAFgEQAFgFAHAAQAIAAAFAFQAFAEgBAHIgBAHQgBADgDADQgEAEgHAGIgIAHIgDAEIAcAAIAAAHg");
	this.shape_37.setTransform(72.6,14.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAKAcIAAgeIgSAeIgIAAIAAgoIAHAAIAAAeIATgeIAHAAIAAAogAgHgUQgCgDgBgEIAEAAIADADIADABIAFgBIACgDIAFAAQAAAEgDADQgDACgFABQgEgBgEgCg");
	this.shape_38.setTransform(66.5,14.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAKAVIAAgfIgSAfIgIAAIAAgpIAHAAIAAAfIATgfIAHAAIAAApg");
	this.shape_39.setTransform(62.2,15.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAIAVIgIgNIgDgFIgEgBIAAATIgHAAIAAgpIAHAAIAAASQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQABgBACgHIADgGIADgCIAFgBIACAAIAAAGIgCAAIgEABIgCAFIgDAGQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAAAQADABAFAHIAHANg");
	this.shape_40.setTransform(58.7,15.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_41.setTransform(55,15.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAKAVIAAgTIgTAAIAAATIgHAAIAAgpIAHAAIAAASIATAAIAAgSIAHAAIAAApg");
	this.shape_42.setTransform(50.9,15.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAKAVIAAgfIgSAfIgIAAIAAgpIAHAAIAAAfIATgfIAHAAIAAApg");
	this.shape_43.setTransform(46.7,15.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAXAbIAAgMIgzAAIAAgpIAHAAIAAAjIAQAAIAAgjIAGAAIAAAjIAQAAIAAgjIAHAAIAAAjIAFAAIAAASg");
	this.shape_44.setTransform(41.5,16.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgNAQQgGgFABgLQAAgLAGgFQAFgFAHAAQAJAAAFAGQAFAGAAAJQABAHgDAFQgDAFgEACQgFADgFAAQgIAAgFgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAGAAADgEQAEgEgBgIQABgHgEgEQgDgEgGAAQgEAAgEAEg");
	this.shape_45.setTransform(36,15.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAIABQAFABACACQADACACADQACAEAAAEQAAAHgFAEQgFAFgMAAIgNAAIAAAYgAgNAAIANAAQAIAAADgDQADgDAAgFQAAgDgBgDQgDgCgDgBIgHgBIgNAAg");
	this.shape_46.setTransform(31.4,14.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AARAbIAAgMIggAAIAAAMIgGAAIAAgSIADAAQAIgJAAgaIAcAAIAAAjIAEAAIAAASgAgKAJIAUAAIAAgdIgPAAQAAAUgFAJg");
	this.shape_47.setTransform(24.4,16.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgPAJIAGgBQABAEADACQADACACAAQAEAAACgCQADgCAAgDQAAgBAAAAQAAgBAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAIgFAAIgBAAIAAgFIAFAAIADgCQAAAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQgCgCgDAAQgFAAgCAHIgHgBQADgMALAAQAHAAAEAEQADAEABAFQAAAFgGADQAEAAACADQABADAAADQAAAGgEADQgEAEgIAAQgNAAgCgNg");
	this.shape_48.setTransform(20.5,15.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgMAQQgGgGAAgKQAAgJAGgGQAEgGAJAAQAHAAAGAGQAFAGAAAJIAAACIgeAAQABAHADADQADAEAFAAQADAAADgCQADgCACgFIAHABQgCAHgEADQgFAEgHAAQgJAAgEgGgAgGgMQgEAEgBAFIAXAAQgBgFgCgDQgDgEgFAAQgFAAgCADg");
	this.shape_49.setTransform(16.7,15.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgNAQQgFgFgBgLQABgLAGgFQAGgFAGAAQAIAAAGAGQAGAGgBAJQAAAHgCAFQgDAFgEACQgEADgGAAQgHAAgGgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAGAAADgEQAEgEAAgIQAAgHgEgEQgDgEgGAAQgEAAgEAEg");
	this.shape_50.setTransform(12.4,15.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgRAdIAAg4IAGAAIAAAFQADgDADgCQACgBADAAQAFAAAFADQADACACAFQADAFAAAGQAAAHgDAEQgCAFgEACQgEADgFAAQgDAAgCgBQgDgCgCgCIAAAUgAgHgSQgEAEAAAIQAAAHAEAEQADADAEAAQAEAAAEgEQADgEAAgHQAAgIgDgEQgEgEgEAAQgEAAgDAFg");
	this.shape_51.setTransform(8.3,16.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAPAdIAAgyIgdAAIAAAyIgHAAIAAg5IAsAAIAAA5g");
	this.shape_52.setTransform(3.3,14.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgDAHQAAAAABgBQAAAAABgBQAAAAABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_53.setTransform(143.6,8.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgPASQgDgDAAgFQAAgDABgDQACgCACgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgDACQgCACgBAEIgHgBIADgHQADgDADgBQAEgCAFAAQAFAAADACQAEABACACIACAFIAAAGIAAAIIAAANIACAFIgHAAQgBgCgBgDIgHAEIgHACQgHAAgEgEgAAAADIgHABIgCACIgBAEQAAAAAAABQAAABAAAAQAAABABAAQAAABABAAQACACAEAAQADAAADgCQADgBACgDQABgDAAgEIAAgDIgKADg");
	this.shape_54.setTransform(140.5,6.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgQAVIAAgpIAQAAIAIABQADABACADQACADAAADIgBAFIgEAEQADAAACADQACACAAAEQgBAGgEADQgDADgHAAgAgJAPIAJAAIAHgBQADgCAAgDIgBgEQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAAAgBAAIgGAAIgIAAgAgJgCIAHAAIAGgBIACgCQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgDgDgCIgHgBIgHAAg");
	this.shape_55.setTransform(136.5,6.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAIAVIgIgNIgDgFIgEgBIAAATIgHAAIAAgpIAHAAIAAASQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQABgBACgHIADgGIADgCIAFgBIACAAIAAAGIgCAAIgEABIgCAFIgDAGIgDACQADABAFAHIAHANg");
	this.shape_56.setTransform(132.9,6.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_57.setTransform(129.2,6.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgNAQQgGgFABgLQAAgLAGgFQAFgFAHAAQAJAAAFAGQAFAGAAAJQABAHgDAFQgDAFgEACQgFADgFAAQgIAAgFgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAGAAADgEQAEgEgBgIQABgHgEgEQgDgEgGAAQgEAAgEAEg");
	this.shape_58.setTransform(125.1,6.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAUAdIAAgvIgRAvIgFAAIgRgwIAAAwIgHAAIAAg5IALAAIAOAoIABAJIADgKIAOgnIAKAAIAAA5g");
	this.shape_59.setTransform(119.7,5.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_60.setTransform(113.6,8.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgLAVIAAgpIAXAAIAAAGIgQAAIAAAjg");
	this.shape_61.setTransform(111.4,6.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgDAHQAAAAABgBQAAAAABgBQAAAAABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_62.setTransform(106.8,8.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgMAaQgEgEgBgHIAHgBQABAFACACQADACADAAQADAAACgBIAEgEIADgHIABgIIAAgCQgCAEgEACQgEACgDAAQgHAAgFgFQgFgEAAgJQAAgJAFgFQAFgFAIAAQAFAAAEADQAFADACAFQADAGAAAKQAAAKgDAHQgCAGgFAEQgEADgGAAQgGAAgFgDgAgHgTQgEAEAAAGQAAAGAEADQADADAEAAQAFAAADgDQADgDAAgGQAAgGgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_63.setTransform(103.7,5.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_64.setTransform(99.1,5.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_65.setTransform(95,5.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgMAYQgGgEAAgHIAHgBQABAGADACQADADAEAAQAFAAADgEQAEgEgBgGQABgGgEgDQgDgDgFAAQgEAAgCACQgDABgBACIgHgBIAGgdIAbAAIAAAHIgWAAIgDAPQAFgDAFAAQAHAAAGAFQAFAEAAAIQAAAIgEAGQgGAHgJAAQgHAAgFgFg");
	this.shape_66.setTransform(91,6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_67.setTransform(86.4,5.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_68.setTransform(82.1,5.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgBASIAKgSIgKgRIAFAAIANARIgNASgAgQASIALgSIgLgRIAGAAIALARIgLASg");
	this.shape_69.setTransform(76.2,6.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_70.setTransform(73.1,8.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgRAdIAAg5IAkAAIAAAHIgdAAIAAAyg");
	this.shape_71.setTransform(70.3,5.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_72.setTransform(67,8.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_73.setTransform(63.1,5.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_74.setTransform(59.4,8.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgMAaQgGgEgDgHQgDgHAAgIQAAgJADgGQAEgHAGgEQAGgCAHAAQAIAAAGADQAGAFACAIIgHACQgCgHgEgCQgEgDgFgBQgGAAgEAEQgFADgCAGQgBAFAAAFQAAAGACAGQACAFAEADQAFADAEAAQAGAAAFgEQAEgDACgIIAHACQgCAJgGAGQgGAEgJAAQgJAAgFgDg");
	this.shape_75.setTransform(55.5,5.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAPAdIAAgsIgdAsIgHAAIAAg5IAGAAIAAAtIAegtIAIAAIAAA5g");
	this.shape_76.setTransform(48,5.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AATAjIAAgNIglAAIAAANIgHAAIAAgUIAFAAQAHgKAAgfIAAgJIAhAAIAAAyIAGAAIAAAUgAgGgZIgBAVQgCALgEAIIAaAAIAAgrIgTAAg");
	this.shape_77.setTransform(42.4,6.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_78.setTransform(37.2,5.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AASAdIgHgSIgXAAIgGASIgIAAIAWg5IAHAAIAYA5gAgDgLIgGAQIASAAIgGgPIgDgLIgDAKg");
	this.shape_79.setTransform(31.8,5.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AALAdIgKgQQgDgGgDgDQgDgCgEAAIAAAbIgHAAIAAg5IAHAAIAAAaQAGAAABgCQADgCACgIIAEgIIAFgEQACgCADAAIAFABIAAAGIgBAAIgCAAQgDAAgCACIgEAHQgDAIgCABIgEADQAEABAGAJIAMATg");
	this.shape_80.setTransform(27.3,5.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AALASIgLgSIALgRIAGAAIgKARIAKASgAgDASIgNgSIANgRIAFAAIgJARIAJASg");
	this.shape_81.setTransform(22.6,6.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_82.setTransform(15.5,5.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_83.setTransform(9.5,5.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_84.setTransform(3.5,5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dfgdfggg, new cjs.Rectangle(-1.6,-0.4,152.6,30.7), null);


(lib.p1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p1();
	this.instance.parent = this;
	this.instance.setTransform(15,39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1_1, new cjs.Rectangle(15,39,150,145), null);


(lib.ClipGroup_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyAJjIAAzEMAkBAAAIAATEg");
	this.shape.setTransform(268.2,242.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ay0IwIAAxeMAlpAAAIAAReg");
	mask.setTransform(273.4,125.3);

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

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9, new cjs.Rectangle(152.9,69.4,241.1,234), null);


// stage content:
(lib._160x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgMaguyIY1AAMAAABdlI41AAg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(396));

	// legal
	this.addr2 = new lib.dfgdfggg();
	this.addr2.parent = this;
	this.addr2.setTransform(5,564.8);

	this.timeline.addTween(cjs.Tween.get(this.addr2).wait(396));

	// logo
	this.instance = new lib.ClipGroup_8();
	this.instance.parent = this;
	this.instance.setTransform(97,479.6,1,1,0,0,0,53.1,10.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(396));

	// wave
	this.instance_1 = new lib.ClipGroup_9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(72.8,445.7,0.737,1,0,0,0,255.6,126.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(396));

	// p1.jpg
	this.instance_2 = new lib.p1_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(130,300,1,1,0,0,0,130,120);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(316).to({_off:false},0).to({x:120,alpha:1},5,cjs.Ease.get(1)).wait(69).to({x:110,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// p4.jpg
	this.instance_3 = new lib.p4_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(130,300,1,1,0,0,0,130,120);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(237).to({_off:false},0).to({x:120,alpha:1},5,cjs.Ease.get(1)).wait(69).to({x:110,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(79));

	// p3.jpg
	this.instance_4 = new lib.p3_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(130,300,1,1,0,0,0,130,120);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(158).to({_off:false},0).to({x:120,alpha:1},5,cjs.Ease.get(1)).wait(69).to({x:110,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(158));

	// p2.jpg
	this.instance_5 = new lib.p2_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(130,300,1,1,0,0,0,130,120);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(79).to({_off:false},0).to({x:120,alpha:1},5,cjs.Ease.get(1)).wait(69).to({x:110,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(237));

	// p1.jpg
	this.instance_6 = new lib.p1_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(130,300,1,1,0,0,0,130,120);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:120,alpha:1},5,cjs.Ease.get(1)).wait(69).to({x:110,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(316));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_316 = new cjs.Graphics().p("ACkRLIAAgUMgvzAAAIgGyzQAqAVBOAbIAAAAQCcA1CuAeIAAAAQIxBhIiisIAAAAQIXipG5lOIAAAAQE8jvDYkXIAAAAIAAgJMAqyAAAMAAAAiVgACxQ3g");
	var mask_graphics_317 = new cjs.Graphics().p("ACkRLIAAgUMgvzAAAIgGyzQAqAVBOAbIAAAAQCcA1CuAeIAAAAQIxBhIiisIAAAAQIXipG5lOIAAAAQE8jvDYkXIAAAAIAAgJMAqyAAAMAAAAiVgACxQ3g");
	var mask_graphics_318 = new cjs.Graphics().p("ACkRLIAAgUMgvzAAAIgGyzQAqAVBOAbIAAAAQCcA1CuAeIAAAAQIxBhIiisIAAAAQIXipG5lOIAAAAQE8jvDYkXIAAAAIAAgJMAqyAAAMAAAAiVgACxQ3g");
	var mask_graphics_319 = new cjs.Graphics().p("ACkRLIAAgUMgvzAAAIgGyzQAqAVBOAbIAAAAQCcA1CuAeIAAAAQIxBhIiisIAAAAQIXipG5lOIAAAAQE8jvDYkXIAAAAIAAgJMAqyAAAMAAAAiVgACxQ3g");
	var mask_graphics_320 = new cjs.Graphics().p("ACjRLIAAgUMgvyAAAIgGyzQAqAVBOAbIAAAAQCcA1CuAeIAAAAQIxBhIiisIAAAAQIXipG5lOIAAAAQE8jvDXkXIAAAAIAAgJMAqzAAAMAAAAiVgACxQ3g");
	var mask_graphics_321 = new cjs.Graphics().p("ACjRLIAAgUMgvyAAAIgGyzQAqAVBOAbIAAAAQCcA1CuAeIAAAAQIxBhIiisIAAAAQIXipG5lOIAAAAQE8jvDXkXIAAAAIAAgJMAqzAAAMAAAAiVgACxQ3g");
	var mask_graphics_322 = new cjs.Graphics().p("ACkRLIAAgUMgvzAAAIgGyzQAqAVBOAbIAAAAQCcA1CuAeIAAAAQIxBhIiisIAAAAQIXipG5lOIAAAAQE8jvDYkXIAAAAIAAgJMAqyAAAMAAAAiVgACxQ3g");
	var mask_graphics_323 = new cjs.Graphics().p("ACjRLIAAgUMgvyAAAIgGyzQAqAVBOAbIAAAAQCcA1CuAeIAAAAQIxBhIiisIAAAAQIXipG5lOIAAAAQE8jvDXkXIAAAAIAAgJMAqzAAAMAAAAiVgACxQ3g");
	var mask_graphics_324 = new cjs.Graphics().p("ACjRLIAAgUMgvyAAAIgGyzQAqAVBOAbIAAAAQCcA1CuAeIAAAAQIxBhIiisIAAAAQIXipG5lOIAAAAQE8jvDXkXIAAAAIAAgJMAqzAAAMAAAAiVgACxQ3g");
	var mask_graphics_387 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_graphics_388 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_graphics_389 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_graphics_390 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_graphics_391 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_graphics_392 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_graphics_393 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_graphics_394 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_graphics_395 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(316).to({graphics:mask_graphics_316,x:263.9,y:144.5}).wait(1).to({graphics:mask_graphics_317,x:195.3,y:144.5}).wait(1).to({graphics:mask_graphics_318,x:135.9,y:144.5}).wait(1).to({graphics:mask_graphics_319,x:85.5,y:144.5}).wait(1).to({graphics:mask_graphics_320,x:44.4,y:144.5}).wait(1).to({graphics:mask_graphics_321,x:12.3,y:144.5}).wait(1).to({graphics:mask_graphics_322,x:-10.5,y:144.5}).wait(1).to({graphics:mask_graphics_323,x:-24.2,y:144.5}).wait(1).to({graphics:mask_graphics_324,x:-28.8,y:144.5}).wait(1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_graphics_387,x:140.5,y:147.7}).wait(1).to({graphics:mask_graphics_388,x:70.3,y:147.7}).wait(1).to({graphics:mask_graphics_389,x:9.4,y:147.7}).wait(1).to({graphics:mask_graphics_390,x:-42.2,y:147.7}).wait(1).to({graphics:mask_graphics_391,x:-84.4,y:147.7}).wait(1).to({graphics:mask_graphics_392,x:-117.1,y:147.7}).wait(1).to({graphics:mask_graphics_393,x:-140.6,y:147.7}).wait(1).to({graphics:mask_graphics_394,x:-154.6,y:147.7}).wait(1).to({graphics:mask_graphics_395,x:-159.3,y:147.7}).wait(1));

	// t1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#474A4E").s().p("AgjA5IAAhxIBGAAIAAANIg1AAIAAAlIArAAIAAAMIgrAAIAAAmIA1AAIAAANg");
	this.shape_1.setTransform(113.2,79.6,0.877,0.876);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#474A4E").s().p("AAeA5IAAhWIABgIIgGANIgzBMQgBABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgNAAIAAhxIARAAIAABWIgBAIIADgHIA2hSIADgEIAFgBIAMAAIAABxg");
	this.shape_2.setTransform(103.5,79.6,0.877,0.876);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#474A4E").s().p("AAeA5IAAgzIg7AAIAAAzIgRAAIAAhxIARAAIAAAzIA7AAIAAgzIARAAIAABxg");
	this.shape_3.setTransform(92.8,79.6,0.877,0.876);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#474A4E").s().p("AAeA5IAAgzIg7AAIAAAzIgRAAIAAhxIARAAIAAAzIA7AAIAAgzIARAAIAABxg");
	this.shape_4.setTransform(82.1,79.6,0.877,0.876);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#474A4E").s().p("AgiA5IAAhxIBGAAIAAANIg2AAIAAAlIArAAIAAAMIgrAAIAAAmIA2AAIAAANg");
	this.shape_5.setTransform(73,79.6,0.877,0.876);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#474A4E").s().p("AgPA2QgJgEgIgIQgIgIgDgLQgEgKAAgNQAAgNAEgKQAEgLAIgIQAIgIAJgDQAKgFAMAAQANABAJADQAKAEAGAHIgGAJIgDABIgDgCIgFgEIgJgDQgFgCgHABQgIAAgHACQgHAEgFAFQgFAFgDAJQgDAIAAAKQAAAKADAJQACAHAGAGQAFAGAHADQAHADAIAAIAJAAIAHgDIAGgDIAIgFIABAAIACABIAHAHQgIAJgJAEQgKAFgOgBQgMABgKgFg");
	this.shape_6.setTransform(64.2,79.6,0.877,0.876);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#474A4E").s().p("AgjA5IAAhxIBGAAIAAANIg1AAIAAAlIArAAIAAAMIgrAAIAAAmIA1AAIAAANg");
	this.shape_7.setTransform(55.8,79.6,0.877,0.876);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#474A4E").s().p("AgoA5IAAhxIAlAAQALAAAHACQAHACAFAEQAEACAEAHQACAFAAAIIgBAIIgEAHQgDAEgEACQgEADgFABQAMACAGAGQAHAHAAALQAAAGgDAHQgDAGgFAEQgEAEgJADQgGACgLAAgAgXAsIAXAAQAHAAAEgBIAIgEQADgDABgEIABgIQAAgIgGgGQgGgFgMAAIgXAAgAgXgFIAUAAQAFAAAFgCQADAAAEgDIAFgGQACgEAAgEQAAgKgGgFQgGgEgMAAIgUAAg");
	this.shape_8.setTransform(47.2,79.6,0.877,0.876);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#474A4E").s().p("AgiA5IAAhxIBGAAIAAANIg2AAIAAAlIArAAIAAAMIgrAAIAAAmIA2AAIAAANg");
	this.shape_9.setTransform(117,61.1,0.877,0.876);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#474A4E").s().p("AApA5IAAhxIARAAIAABxgAg4A5IAAhxIAQAAIAAAxIAVAAQANAAAFACQAHACAGADQAEAFACAFQADAHAAAGQAAAIgDAGQgCAGgGAFQgFAFgHACQgFACgMAAgAgoAsIAVAAIALgBIAIgEQACgDACgEIABgIIgBgIQgCgDgCgDQgEgDgEgBQgEgBgHAAIgVAAg");
	this.shape_10.setTransform(106.3,61.1,0.877,0.876);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#474A4E").s().p("AAeA5IAAgzIg7AAIAAAzIgRAAIAAhxIARAAIAAAzIA7AAIAAgzIARAAIAABxg");
	this.shape_11.setTransform(94.6,61.1,0.877,0.876);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#474A4E").s().p("AAtBHIAAgcIhaAAIAAAXQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgKAAIAAgpIANAAIAEgDQADgDACgFIAEgNQACgGACgLIADgaIABghIBEAAIAABkIATAAIAAAkQAAABgBAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAgAgNgYIgEAYQgCAKgEAIIgFAMIA2AAIAAhXIgkAAg");
	this.shape_12.setTransform(83.6,62.3,0.877,0.876);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#474A4E").s().p("AgWA2QgLgFgHgHQgIgJgEgKQgEgJAAgOQAAgNAEgKQAEgJAIgKQAHgHALgEQAJgFANAAQAOAAAJAFQAKADAIAIQAIAKADAJQAFALAAAMQAAANgFAKQgDAKgIAJQgIAIgKAEQgKAFgNgBQgMABgKgFgAgQgpQgHAEgFAFQgFAFgDAJQgDAIAAAKQAAAKADAJQADAIAFAFQAFAGAHADQAIADAIAAQAJAAAHgDQAHgDAGgGQAGgGACgHQADgJAAgKQAAgKgDgIQgDgIgFgGQgGgFgHgEQgHgCgJAAQgIAAgIACg");
	this.shape_13.setTransform(73,61.1,0.877,0.876);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#474A4E").s().p("AgiA5IAAhxIBFAAIAAANIg0AAIAABkg");
	this.shape_14.setTransform(64.7,61.1,0.877,0.876);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#474A4E").s().p("AApA5IAAhxIARAAIAABxgAg5A5IAAhxIARAAIAAAxIAVAAQAMAAAHACQAGACAFADQAEADAEAHQACAGAAAHQAAAHgDAHQgDAHgFAEQgGAFgFACQgHACgLAAgAgoAsIAVAAQAHAAAEgBQAFgCADgCQACgDABgEQACgDAAgFIgCgIIgDgGQgEgDgDgBQgFgBgHAAIgVAAg");
	this.shape_15.setTransform(54.1,61.1,0.877,0.876);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#474A4E").s().p("AgoA5IAAhxIAlAAQAKAAAIACQAHACAFAEQAEACAEAHQACAFAAAIIgBAIIgEAHQgEAEgDACQgEADgFABQAMACAGAGQAHAHAAALQAAAHgDAGQgCAGgGAEQgEAEgJADQgGACgLAAgAgXAsIAXAAIALgBIAIgEQADgDABgEIABgIQAAgIgGgGQgGgFgMAAIgXAAgAgXgFIAUAAIAKgCQADAAAEgDIAFgGQACgEAAgEQAAgKgGgFQgGgEgMAAIgUAAg");
	this.shape_16.setTransform(43.5,61.1,0.877,0.876);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#5FB0D3").s().p("AgSA3QgKgFgFgFQgFgHgEgIQgDgIAAgLIAAhEIAQAAIAABEQABAFACAJQACAFADAFQAEAEAFACQAHADAFAAQAHAAAFgDQAHgCADgEQAFgGABgEQACgGgBgIIAAhEIARAAIAABEQAAAKgDAJQgEAJgFAGQgFAFgJAFQgJADgLAAQgKAAgIgDg");
	this.shape_17.setTransform(122.1,116.4,0.877,0.876);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#5FB0D3").s().p("AAcA5QgFAAgBgDIgcgoIgDgDIgFgBIgLAAIAAAvIgRAAIAAhxIAhAAQAJAAAJACQAIADAFADQAFAEADAHQADAGAAAHQAAAEgCAHQgDAGgDAEIgIAGQgFADgHABIAFAFIAhAtgAgZgBIAQAAQAHAAADgCQAFgBAEgDQAEgEABgDQABgEAAgFQAAgKgGgFQgGgFgNAAIgQAAg");
	this.shape_18.setTransform(113.1,116.3,0.877,0.876);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#5FB0D3").s().p("AgDAKIgEgDIgBgDIgBgEIABgDIABgDIAEgCIADgCIAEACIAEACIABADIABADIgBAEIgBADIgEADIgEABg");
	this.shape_19.setTransform(106.5,120.5,0.877,0.876);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#5FB0D3").s().p("AgHA5IAAgtIgqhEIAOAAIAEABIAbAuIAEAKIAFgKIAZgrIACgDIADgBIAPAAIgqBEIAAAtg");
	this.shape_20.setTransform(101.6,116.3,0.877,0.876);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#5FB0D3").s().p("AgxA5IAAhxIArAAQALAAALAEQALAEAHAIQAIAIAEAKQAEAKAAAMQAAANgEAKQgEALgIAIQgHAGgLAFQgLAEgLAAgAggAsIAaAAQAIAAAIgDQAGgDAGgGQAFgFADgIQADgIAAgLQAAgJgDgIQgDgKgFgEQgFgGgHgDQgIgDgIAAIgaAAg");
	this.shape_21.setTransform(92.7,116.3,0.877,0.876);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#5FB0D3").s().p("AAmA5IgDAAIgDgDIhAhTIAAAEIABAEIAABOIgPAAIAAhxIAJAAIADAAIACADIBBBTIgBhWIAPAAIAABxg");
	this.shape_22.setTransform(81.8,116.3,0.877,0.876);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#5FB0D3").s().p("AApA5IgEgBIgCgDIgKgaIgyAAIgKAaIgCADIgDABIgNAAIAthxIAQAAIAuBxgAgBgiIgTAxIApAAIgVg4g");
	this.shape_23.setTransform(71.6,116.3,0.877,0.876);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#5FB0D3").s().p("AgPA2QgLgFgGgHQgGgGgGgMQgDgLAAgNQAAgNAEgKQAEgLAHgHQAIgIAKgFQAKgDAMAAQAOAAAHADQAKAFAHAGIgHAJIgCAAIgDgBIgGgDIgIgEQgFgCgHAAQgIAAgHAEQgIADgEAGQgGAEgCAJQgDAIAAAKQAAALADAHQACAIAGAHQAFAFAHADQAHADAIAAIAJgBIAHgBIAGgDIAGgFIABgBIACAAIADABIAGAHQgIAJgJAEQgLAEgNABQgMgBgKgEg");
	this.shape_24.setTransform(62.4,116.3,0.877,0.876);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#474A4E").s().p("AAqA5IgEgBIgDgDIgKgaIgxAAIgLAaIgCADIgDABIgNAAIAthxIAQAAIAuBxgAgCgdIgSAsIApAAIgTgxIgCgHg");
	this.shape_25.setTransform(49.2,116.3,0.877,0.876);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#474A4E").s().p("AAeA5IAAgzIg7AAIAAAzIgRAAIAAhxIARAAIAAAzIA7AAIAAgzIARAAIAABxg");
	this.shape_26.setTransform(39.1,116.3,0.877,0.876);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#474A4E").s().p("AAeA5IAAgxIgQAAIgEABIgDABIgDADIgEAEIgXAiQgBADgDACQgDABgDAAIgMAAIAdgpQAEgHAHgDIgMgEQgGgDgCgDIgFgJQgCgFAAgFQAAgHADgHQADgGAFgEQAFgFAIgCQAIgCAIAAIAmAAIAABxgAgCgqIgIAEIgEAGIgCAIQAAAFACAEQABADADADQADADAFABQADABAHAAIAWAAIAAgnIgWAAQgHAAgDABg");
	this.shape_27.setTransform(131.4,97.9,0.877,0.876);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#474A4E").s().p("AAeA5IAAhWIABgIIgDAHIg2BSQAAABgBAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgMAAIAAhxIARAAIAABWIgBAIIAGgNIAzhMIADgEQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIANAAIAABxg");
	this.shape_28.setTransform(122,97.9,0.877,0.876);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#474A4E").s().p("AAeA5IAAgzIg7AAIAAAzIgRAAIAAhxIARAAIAAAzIA7AAIAAgzIARAAIAABxg");
	this.shape_29.setTransform(111.3,97.9,0.877,0.876);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#474A4E").s().p("AgiA5IAAhxIBFAAIAAANIg1AAIAAAlIArAAIAAAMIgrAAIAAAmIA1AAIAAANg");
	this.shape_30.setTransform(102.2,97.9,0.877,0.876);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#474A4E").s().p("ABHA5QgDAAgDgBQgDgCgBgDIgdgnQAAgDgEgCQgDgCgEAAIgNAAIAAA0IgPAAIAAg0IgNAAQgEAAgDACQgDABgCAEIgcAnIgEAFQgCABgEAAIgLAAIAhgxIAGgHQADgBAEgCQgDAAgDgDIglgzIAMAAQAEAAACABIADAEIAbAnQAEAEACAAQADACADAAIALAAIAAgyIAPAAIAAAyIALAAQAEAAACgCQADgBACgDIAcgnIAEgEIAEgBIAOAAIgmAzQgDADgDAAQAFACACABIAGAHIAhAxg");
	this.shape_31.setTransform(90.5,97.9,0.877,0.876);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#474A4E").s().p("AgWA2QgKgEgIgIQgHgIgEgLQgFgLAAgMQAAgMAFgLQADgKAIgIQAIgIAKgFQAKgEAMAAQAOAAAJAEQALAFAHAIQAIAIAEAKQAEAKAAANQAAANgEAKQgEALgIAIQgHAIgLAEQgKAEgNAAQgLAAgLgEgAgPgoQgHACgGAHQgFAFgDAIQgDAIAAAKQAAALADAIQACAHAGAGQAGAGAHADQAHADAIAAQAJAAAIgDQAHgDAFgGQAFgFADgIQADgIAAgLQAAgKgDgIQgDgJgFgEQgFgHgHgCQgIgDgJAAQgIAAgHADg");
	this.shape_32.setTransform(78.1,98,0.877,0.876);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#474A4E").s().p("AgwA5QAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAAAIAAgLIAFAAIAHgBQADgBADgEIAFgKIAFgTQACgJABgRIADgoIBDAAIAAByIgQAAIAAhlIgkAAIgDAmQgCARgDAKQgCALgEAIQgDAHgEAEQgDADgGACIgKACg");
	this.shape_33.setTransform(66.7,98,0.877,0.876);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#474A4E").s().p("AAuBHIAAgcIhaAAIAAAXQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgKAAIAAgpIAMAAIAFgDIAFgIIAEgNIAEgRIAEg7IBEAAIAABkIATAAIAAAkQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAgAgNgYIgEAYQgDANgCAFQgDAIgEAEIA2AAIAAhXIgjAAIgDAhg");
	this.shape_34.setTransform(56.6,99.2,0.877,0.876);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#474A4E").s().p("AgjA5IAAhxIBGAAIAAANIg1AAIAAAlIArAAIAAAMIgrAAIAAAmIA1AAIAAANg");
	this.shape_35.setTransform(47.5,97.9,0.877,0.876);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#474A4E").s().p("AgmA5IAAhxIAjAAQAJAAAJACQAJAEAEAEQAGAEACAHQADAHAAAHQAAAJgDAGQgDAGgFAFQgGAEgIADQgHADgKAAIgSAAIAAAqgAgVACIASAAQAFAAAFgCQAGgBACgDQAEgCABgFQACgEAAgGQAAgFgCgEQgBgEgDgDQgEgDgFgCQgFgBgFAAIgSAAg");
	this.shape_36.setTransform(39.4,97.9,0.877,0.876);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#474A4E").s().p("AAcA5IAAhkIg3AAIAABkIgRAAIAAhxIBZAAIAABxg");
	this.shape_37.setTransform(29.5,97.9,0.877,0.876);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#408734","#32702B","#7CAD35","#387B2F"],[0,0.298,0.671,1],11.1,-7.8,-10.3,8.9).s().p("AicAWIgoguQArAqBCgTQBNgiAngKQAegIAYAEQAbAGAcAWQATAOAoAxQgKgLgJgGQgcgWgbgFQgYgEgeAHQgoAKhMAiQgWAHgSAAQgoAAgdgeg");
	this.shape_38.setTransform(86.3,147.8,1.1,1.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#F2F3F3","#D3D4D6","#FFFFFF","#DEDFE0"],[0,0.31,0.671,1],12,-7.5,-10.2,9.3).s().p("AifAWIgngtQArApBCgUQBNghAmgLQAegHAYAEQAbAFAdAWQAKAIAVAXIAgAmQgNgOgLgIQgcgWgbgFQgYgEgeAHQgoAKhMAiQgVAGgTAAQgoAAgdgdg");
	this.shape_39.setTransform(82.2,142.6,1.1,1.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#A7000D","#890009","#C83F27","#860008"],[0,0.298,0.659,1],11.4,-7.5,-10,9.3).s().p("AifAYIgmgsQArAnBBgUQBMghAmgLQAegHAYAEQAbAGAcAWQAPALAxA5QgOgQgLgJQgcgWgcgEQgYgEgeAHQgnAKhLAhQgWAHgUAAQgmAAgcgag");
	this.shape_40.setTransform(78.1,137.5,1.1,1.1);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},316).wait(80));

	// mask - копия: 2 - копия (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_237 = new cjs.Graphics().p("ACkRLIAAgUMgvzAAAIgGyzQAqAVBOAbIAAAAQCcA1CuAeIAAAAQIxBhIiisIAAAAQIXipG5lOIAAAAQE8jvDYkXIAAAAIAAgJMAqyAAAMAAAAiVgACxQ3g");
	var mask_1_graphics_238 = new cjs.Graphics().p("ACkRLIAAgUMgvzAAAIgGyzQAqAVBOAbIAAAAQCcA1CuAeIAAAAQIxBhIiisIAAAAQIXipG5lOIAAAAQE8jvDYkXIAAAAIAAgJMAqyAAAMAAAAiVgACxQ3g");
	var mask_1_graphics_239 = new cjs.Graphics().p("ACkRLIAAgUMgvzAAAIgGyzQAqAVBOAbIAAAAQCcA1CuAeIAAAAQIxBhIiisIAAAAQIXipG5lOIAAAAQE8jvDYkXIAAAAIAAgJMAqyAAAMAAAAiVgACxQ3g");
	var mask_1_graphics_240 = new cjs.Graphics().p("ACkRLIAAgUMgvzAAAIgGyzQAqAVBOAbIAAAAQCcA1CuAeIAAAAQIxBhIiisIAAAAQIXipG5lOIAAAAQE8jvDYkXIAAAAIAAgJMAqyAAAMAAAAiVgACxQ3g");
	var mask_1_graphics_241 = new cjs.Graphics().p("ACjRLIAAgUMgvyAAAIgGyzQAqAVBOAbIAAAAQCcA1CuAeIAAAAQIxBhIiisIAAAAQIXipG5lOIAAAAQE8jvDXkXIAAAAIAAgJMAqzAAAMAAAAiVgACxQ3g");
	var mask_1_graphics_242 = new cjs.Graphics().p("ACjRLIAAgUMgvyAAAIgGyzQAqAVBOAbIAAAAQCcA1CuAeIAAAAQIxBhIiisIAAAAQIXipG5lOIAAAAQE8jvDXkXIAAAAIAAgJMAqzAAAMAAAAiVgACxQ3g");
	var mask_1_graphics_243 = new cjs.Graphics().p("ACkRLIAAgUMgvzAAAIgGyzQAqAVBOAbIAAAAQCcA1CuAeIAAAAQIxBhIiisIAAAAQIXipG5lOIAAAAQE8jvDYkXIAAAAIAAgJMAqyAAAMAAAAiVgACxQ3g");
	var mask_1_graphics_244 = new cjs.Graphics().p("ACjRLIAAgUMgvyAAAIgGyzQAqAVBOAbIAAAAQCcA1CuAeIAAAAQIxBhIiisIAAAAQIXipG5lOIAAAAQE8jvDXkXIAAAAIAAgJMAqzAAAMAAAAiVgACxQ3g");
	var mask_1_graphics_245 = new cjs.Graphics().p("ACjRLIAAgUMgvyAAAIgGyzQAqAVBOAbIAAAAQCcA1CuAeIAAAAQIxBhIiisIAAAAQIXipG5lOIAAAAQE8jvDXkXIAAAAIAAgJMAqzAAAMAAAAiVgACxQ3g");
	var mask_1_graphics_308 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_1_graphics_309 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_1_graphics_310 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_1_graphics_311 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_1_graphics_312 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_1_graphics_313 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_1_graphics_314 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_1_graphics_315 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_1_graphics_316 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(237).to({graphics:mask_1_graphics_237,x:263.9,y:144.5}).wait(1).to({graphics:mask_1_graphics_238,x:195.3,y:144.5}).wait(1).to({graphics:mask_1_graphics_239,x:135.9,y:144.5}).wait(1).to({graphics:mask_1_graphics_240,x:85.5,y:144.5}).wait(1).to({graphics:mask_1_graphics_241,x:44.4,y:144.5}).wait(1).to({graphics:mask_1_graphics_242,x:12.3,y:144.5}).wait(1).to({graphics:mask_1_graphics_243,x:-10.5,y:144.5}).wait(1).to({graphics:mask_1_graphics_244,x:-24.2,y:144.5}).wait(1).to({graphics:mask_1_graphics_245,x:-28.8,y:144.5}).wait(1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_1_graphics_308,x:140.5,y:147.7}).wait(1).to({graphics:mask_1_graphics_309,x:70.3,y:147.7}).wait(1).to({graphics:mask_1_graphics_310,x:9.4,y:147.7}).wait(1).to({graphics:mask_1_graphics_311,x:-42.2,y:147.7}).wait(1).to({graphics:mask_1_graphics_312,x:-84.4,y:147.7}).wait(1).to({graphics:mask_1_graphics_313,x:-117.1,y:147.7}).wait(1).to({graphics:mask_1_graphics_314,x:-140.6,y:147.7}).wait(1).to({graphics:mask_1_graphics_315,x:-154.6,y:147.7}).wait(1).to({graphics:mask_1_graphics_316,x:-159.3,y:147.7}).wait(80));

	// t4
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#408734","#32702B","#7CAD35","#387B2F"],[0,0.298,0.671,1],11.1,-7.8,-10.3,8.9).s().p("AicAWIgoguQArAqBCgTQBNgiAngKQAegIAYAEQAbAGAcAWQATAOAoAxQgKgLgJgGQgcgWgbgFQgYgEgeAHQgoAKhMAiQgWAHgSAAQgoAAgdgeg");
	this.shape_41.setTransform(86.3,147.8,1.1,1.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#F2F3F3","#D3D4D6","#FFFFFF","#DEDFE0"],[0,0.31,0.671,1],12,-7.5,-10.2,9.3).s().p("AifAWIgngtQArApBCgUQBNghAmgLQAegHAYAEQAbAFAdAWQAKAIAVAXIAgAmQgNgOgLgIQgcgWgbgFQgYgEgeAHQgoAKhMAiQgVAGgTAAQgoAAgdgdg");
	this.shape_42.setTransform(82.2,142.6,1.1,1.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#A7000D","#890009","#C83F27","#860008"],[0,0.298,0.659,1],11.4,-7.5,-10,9.3).s().p("AifAYIgmgsQArAnBBgUQBMghAmgLQAegHAYAEQAbAGAcAWQAPALAxA5QgOgQgLgJQgcgWgcgEQgYgEgeAHQgnAKhLAhQgWAHgUAAQgmAAgcgag");
	this.shape_43.setTransform(78.1,137.5,1.1,1.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#4E585B").s().p("AgjA6IAAhyIBGAAIAAANIg1AAIAAAlIArAAIAAAMIgrAAIAAAmIA1AAIAAAOg");
	this.shape_44.setTransform(117.9,76.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#4E585B").s().p("AAeA6IAAhXIABgIIgGAMIgzBNQAAABgBAAQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAIgNAAIAAhyIARAAIAABWIgBAIIADgHIA2hSQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIANAAIAAByg");
	this.shape_45.setTransform(106.8,76.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#4E585B").s().p("AAeA6IAAg0Ig7AAIAAA0IgRAAIAAhyIARAAIAAAzIA7AAIAAgzIARAAIAAByg");
	this.shape_46.setTransform(94.6,76.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#4E585B").s().p("AAeA6IAAg0Ig7AAIAAA0IgRAAIAAhyIARAAIAAAzIA7AAIAAgzIARAAIAAByg");
	this.shape_47.setTransform(82.4,76.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#4E585B").s().p("AgiA6IAAhyIBGAAIAAANIg2AAIAAAlIArAAIAAAMIgrAAIAAAmIA2AAIAAAOg");
	this.shape_48.setTransform(72.1,76.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#4E585B").s().p("AgOA2QgKgDgIgJQgIgIgDgKQgEgLAAgNQAAgLAEgMQAFgKAGgIQAIgIALgEQAKgFAMABQAKAAALADQAKAFAHAGIgGAHIgCACIgBAAIgEgBIgFgDIgIgDQgFgDgIAAQgIAAgGAEQgJADgEAGQgEAEgEAJQgDAJAAAJQAAAKADAJQADAJAFAFQAFAFAIAEQAGACAIAAIAQgCIAHgDIAHgGIABAAIACABIAHAHQgHAJgKAEQgKAEgOABQgLgBgKgEg");
	this.shape_49.setTransform(62,76.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#4E585B").s().p("AgjA6IAAhyIBHAAIAAANIg2AAIAAAlIArAAIAAAMIgrAAIAAAmIA2AAIAAAOg");
	this.shape_50.setTransform(52.5,76.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#4E585B").s().p("AgoA6IAAhyIAlAAQAJgBAJADQAGABAGAFQAFAEACAFQADAFAAAHIgBAJIgEAHIgHAGIgJAEQAMACAGAGQAHAHAAAKQAAAIgDAGQgDAGgFAEQgFAFgIACQgIADgJAAgAgXAsIAXAAQAGAAAFgCQAGgBACgCQADgEABgDQABgDAAgFQAAgIgGgGQgFgEgNAAIgXAAgAgXgFIATAAIALgCIAHgEQADgBACgFQABgDAAgFQAAgJgFgEQgGgFgMgBIgUAAg");
	this.shape_51.setTransform(42.6,76.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#0DA8E1").s().p("AgSA2QgHgCgIgHQgGgHgCgIQgEgIAAgLIAAhEIAQAAIAABEQABAIACAFQACAHADADQAEAEAFADQAGACAGAAQAIAAAEgCIAKgHQADgDADgHQABgFAAgIIAAhEIARAAIAABEQAAALgDAIQgDAIgHAHQgGAHgIACQgHAEgMAAQgKAAgIgEg");
	this.shape_52.setTransform(127.4,118);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#0DA8E1").s().p("AAcA5QgEAAgCgDIgcgpIgDgCIgFgBIgLAAIAAAvIgRAAIAAhxIAhAAQALAAAHACQAJACAEAEQAFAEADAGQACAGAAAHQAAAHgBAFQgDAGgDADQgDAEgGACQgEADgHACIAFAFIAhAtgAgZgBIAQAAQAGAAAEgCQAFgBAEgDIAFgHIABgJQAAgLgGgEQgHgGgMAAIgQAAg");
	this.shape_53.setTransform(117.1,118);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0DA8E1").s().p("AgDAJIgDgBIgCgEIgBgEIABgDIACgDIADgDIADgBIAEABIADADIADADIAAADIAAAEIgDAEIgDABIgEABg");
	this.shape_54.setTransform(109.5,122.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0DA8E1").s().p("AgHA5IAAgtIgqhEIAPAAIADABIACACIAZAsIAEAJIACgEIAcgxIACgCIAEgBIAOAAIgqBEIAAAtg");
	this.shape_55.setTransform(104,118);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0DA8E1").s().p("AgxA5IAAhxIArAAQANAAAJAEQAKADAIAIQAIAIAEAKQAEAKAAANQAAAOgEAJQgEAKgIAIQgIAIgKAEQgKAEgMAAgAggAsIAaAAQAIAAAIgDQAGgDAGgGQAFgFADgJQADgIAAgKQAAgJgDgJQgDgIgFgGQgGgGgGgCQgIgDgIAAIgaAAg");
	this.shape_56.setTransform(93.8,118);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#0DA8E1").s().p("AAmA5IgDgBIgDgCIhAhTIAAAEIAAADIAABPIgOAAIAAhxIAMAAIACACIBABUIAAgEIAAhSIAPAAIAABxg");
	this.shape_57.setTransform(81.4,118);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#0DA8E1").s().p("AApA5QAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIgCgDIgLgbIgxAAIgLAbIgCADQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgNAAIAuhxIAPAAIAuBxgAgBgjIgTAxIApAAIgVg3g");
	this.shape_58.setTransform(69.8,118);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#0DA8E1").s().p("AgPA2QgKgDgHgJQgHgHgEgMQgEgJAAgOQAAgNAEgKQADgKAIgIQAJgIAJgEQAKgFAMAAQAMAAAKAFQAKAEAGAGIgGAIIgBABIgCAAIgEgBIgEgEIgJgDQgEgBgIAAQgIAAgHADQgIADgFAFQgEAGgEAJQgDAIAAAJQAAALADAIQADAIAGAFQAGAHAGACQAHAEAHAAIAJgBIAIgCIAGgDIAIgFIABgBIACABIAHAHQgIAJgKAEQgJAFgPgBQgLABgKgFg");
	this.shape_59.setTransform(59.3,118);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#4E585B").s().p("AApA5QAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAIgBgDIgKgbIgzAAIgKAbQAAABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgMAAIAuhxIAPAAIAuBxgAgCgeIgSAsIApAAIgUgxIgBgGg");
	this.shape_60.setTransform(44.3,118);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#4E585B").s().p("AAeA5IAAg0Ig7AAIAAA0IgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_61.setTransform(32.8,118);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#4E585B").s().p("AAeA5IAAgxIgQAAIgEABIgDABIgDACIgEAFIgXAjIgDADIgHACIgMAAIAdgpQAEgHAHgDIgMgFQgFgCgDgDQgEgEgBgFQgCgEAAgHQAAgGADgHQADgHAFgDQAGgFAHgCQAIgCAIAAIAmAAIAABxgAgCgqQgFABgCAEQgDACgCADIgCAIQABAGABADIAEAGIAIAEQAEACAGAAIAWAAIAAgoIgWAAQgHAAgDABg");
	this.shape_62.setTransform(138,97);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#4E585B").s().p("AAeA5IABheIgDAHIgDAFIgzBNIgDADIgFACIgMAAIAAhxIARAAIgBBeIAGgMIAzhNIADgDIAEgCIANAAIAABxg");
	this.shape_63.setTransform(127.3,97);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#4E585B").s().p("AAeA5IAAgzIg7AAIAAAzIgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_64.setTransform(115,97);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#4E585B").s().p("AgiA5IAAhxIBFAAIAAANIg1AAIAAAlIArAAIAAAMIgrAAIAAAmIA1AAIAAANg");
	this.shape_65.setTransform(104.7,97);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#4E585B").s().p("ABHA5QgDAAgDgCIgEgDIgdgpQgCgDgCgBQgCgCgFAAIgNAAIAAA0IgPAAIAAg0IgNAAQgEAAgDACQgDACgCACIgcApIgEADQgDACgDAAIgLAAIAhgxIAGgHQADgCAEAAIgGgEIglgzIAMAAQABAAABAAQABAAAAAAQABAAAAAAQABABAAAAIAEADIAbAoQACADAEABIAGABIALAAIAAgxIAPAAIAAAxIALAAIAGgBQACgBADgDIAcgoIAEgDIAEgBIAOAAIgmAzIgGAEQADAAAEACIAGAHIAhAxg");
	this.shape_66.setTransform(91.4,97);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#4E585B").s().p("AgWA2QgKgEgIgIQgHgIgFgKQgDgMAAgMQAAgLADgMQAFgKAHgIQAIgIAKgEQALgFALABQAMgBALAFQAKAEAIAIQAHAHAFALQADAMAAALQAAAMgDAMQgFALgHAHQgIAIgKAEQgLAFgMAAQgLAAgLgFgAgPgoQgIADgEAFQgGAHgDAHQgCAKAAAIQAAAJACAJQADAIAGAHQAFAFAHADQAIADAHAAQAJAAAIgDQAGgDAGgFQAFgGADgJQACgHAAgLQAAgKgCgIQgDgIgFgGQgEgFgIgDQgIgDgJAAQgHAAgIADg");
	this.shape_67.setTransform(77.2,97);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#4E585B").s().p("AgwA5QAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAgLIAFAAIAHgBQADgBADgEQADgFACgFQACgGADgMQACgJABgSIADgoIBDAAIAAByIgQAAIAAhlIgkAAQgBAWgCARQgCAOgDAMQgCALgEAIQgDAGgEAFQgEAEgFACQgFABgFAAg");
	this.shape_68.setTransform(64.3,97.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#4E585B").s().p("AAtBHIAAgbIhaAAIAAAWQAAABAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgKAAIAAgoIAMAAIAFgEIAFgIQADgGABgGIAEgSIAEg7IBEAAIAABlIATAAIAAAjQAAABAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAgAgNgYIgEAZIgFASIgHAMIA2AAIAAhYIgjAAIgDAhg");
	this.shape_69.setTransform(52.8,98.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#4E585B").s().p("AgiA5IAAhxIBGAAIAAANIg2AAIAAAlIArAAIAAAMIgrAAIAAAmIA2AAIAAANg");
	this.shape_70.setTransform(42.4,97);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#4E585B").s().p("AgmA5IAAhxIAjAAQAKAAAIACQAIACAFAGQAGAEACAHQADAFAAAKQAAAIgDAGQgDAGgGAFQgEAFgIACQgJADgJAAIgSAAIAAAqgAgVACIASAAQAEAAAGgCQAFgBADgCQAEgEACgEIACgJQAAgFgCgFQgCgFgEgCIgIgFQgFgBgFgBIgSAAg");
	this.shape_71.setTransform(33.1,97);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#4E585B").s().p("AAcA5IAAhlIg3AAIAABlIgRAAIAAhxIBZAAIAABxg");
	this.shape_72.setTransform(21.9,97);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#4E585B").s().p("AgiA6IAAhyIBFAAIAAANIg1AAIAAAlIAqAAIAAAMIgqAAIAAAmIA1AAIAAAOg");
	this.shape_73.setTransform(122.2,55.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#4E585B").s().p("AApA6IAAhyIARAAIAABygAg5A6IAAhyIARAAIAAAwIAWAAQAJAAAJADQAHACAEADQAFAEADAGQACAGAAAHQAAAHgDAHQgCAGgGAFQgDADgIAEQgJADgIAAgAgoAsIAWAAQAGAAAFgCQAFgBACgCQACgDABgDQACgEAAgFQAAgEgCgEQAAgEgDgCQgCgCgFgCQgFgCgGABIgWAAg");
	this.shape_74.setTransform(110,55.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#4E585B").s().p("AAeA6IAAg0Ig7AAIAAA0IgRAAIAAhyIARAAIAAAzIA7AAIAAgzIARAAIAAByg");
	this.shape_75.setTransform(96.7,55.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#4E585B").s().p("AAuBHIAAgbIhaAAIAAAWQAAABgBABQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgJAAIAAgoIALAAIAFgEIAEgIIAFgMIADgSIAFg7IBEAAIAABlIASAAIAAAjQAAABAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAgAgRABIgGASIgGAMIA2AAIAAhYIgkAAg");
	this.shape_76.setTransform(84.2,56.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#4E585B").s().p("AgWA2QgKgDgIgJQgIgIgEgKQgDgKAAgOQAAgNADgJQAEgLAIgIQAIgIAKgEQALgFALABQAMgBALAFQALAEAHAIQAIAIADALQAEAJAAANQAAAOgEAKQgDAKgIAIQgHAJgLADQgLAEgMABQgLgBgLgEgAgQgoQgHADgFAGQgFAFgDAIQgDAJAAAJQAAALADAHQADAJAFAGQAGAFAGADQAIADAIAAQAJAAAHgDQAHgDAGgFQAFgGADgJQADgHAAgLQAAgJgDgJQgDgIgFgFQgEgGgJgDQgIgEgIAAQgHAAgJAEg");
	this.shape_77.setTransform(72.1,55.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#4E585B").s().p("AgiA6IAAhyIBFAAIAAAMIg0AAIAABmg");
	this.shape_78.setTransform(62.5,55.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#4E585B").s().p("AApA6IAAhyIARAAIAABygAg5A6IAAhyIARAAIAAAwIAVAAQAKAAAJADQAGACAFADQAFAFACAFQADAFAAAIQAAAGgDAIQgDAHgFAEQgEADgIAEQgIADgJAAgAgoAsIAVAAQAHAAAEgCQAGgBACgCQABgDACgDQACgEAAgFQAAgEgCgEQgBgEgCgCQgCgCgGgCQgEgCgHABIgVAAg");
	this.shape_79.setTransform(50.4,55.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#4E585B").s().p("AgoA6IAAhyIAlAAQAJgBAJADQAGABAGAFQAFAEACAFQADAFAAAHIgCAJIgDAHIgHAGIgJAEQAMACAGAGQAHAHAAAKQAAAIgDAGQgCAFgGAFQgFAFgIACQgIADgJAAgAgXAsIAXAAQAGAAAFgCQAGgBACgCQADgEABgDQABgDAAgFQAAgIgGgGQgFgEgNAAIgXAAgAgXgFIATAAIALgCIAHgEQADgBACgFQABgDAAgFQAAgJgGgEQgFgFgMgBIgUAAg");
	this.shape_80.setTransform(38.4,55.1);

	var maskedShapeInstanceList = [this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},237).to({state:[]},80).wait(79));

	// mask - копия: 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_158 = new cjs.Graphics().p("ACkRLIAAgUMgvzAAAIgGyzQAqAVBOAbIAAAAQCcA1CuAeIAAAAQIxBhIiisIAAAAQIXipG5lOIAAAAQE8jvDYkXIAAAAIAAgJMAqyAAAMAAAAiVgACxQ3g");
	var mask_2_graphics_159 = new cjs.Graphics().p("ACkRLIAAgUMgvzAAAIgGyzQAqAVBOAbIAAAAQCcA1CuAeIAAAAQIxBhIiisIAAAAQIXipG5lOIAAAAQE8jvDYkXIAAAAIAAgJMAqyAAAMAAAAiVgACxQ3g");
	var mask_2_graphics_160 = new cjs.Graphics().p("ACkRLIAAgUMgvzAAAIgGyzQAqAVBOAbIAAAAQCcA1CuAeIAAAAQIxBhIiisIAAAAQIXipG5lOIAAAAQE8jvDYkXIAAAAIAAgJMAqyAAAMAAAAiVgACxQ3g");
	var mask_2_graphics_161 = new cjs.Graphics().p("ACkRLIAAgUMgvzAAAIgGyzQAqAVBOAbIAAAAQCcA1CuAeIAAAAQIxBhIiisIAAAAQIXipG5lOIAAAAQE8jvDYkXIAAAAIAAgJMAqyAAAMAAAAiVgACxQ3g");
	var mask_2_graphics_162 = new cjs.Graphics().p("ACjRLIAAgUMgvyAAAIgGyzQAqAVBOAbIAAAAQCcA1CuAeIAAAAQIxBhIiisIAAAAQIXipG5lOIAAAAQE8jvDXkXIAAAAIAAgJMAqzAAAMAAAAiVgACxQ3g");
	var mask_2_graphics_163 = new cjs.Graphics().p("ACjRLIAAgUMgvyAAAIgGyzQAqAVBOAbIAAAAQCcA1CuAeIAAAAQIxBhIiisIAAAAQIXipG5lOIAAAAQE8jvDXkXIAAAAIAAgJMAqzAAAMAAAAiVgACxQ3g");
	var mask_2_graphics_164 = new cjs.Graphics().p("ACkRLIAAgUMgvzAAAIgGyzQAqAVBOAbIAAAAQCcA1CuAeIAAAAQIxBhIiisIAAAAQIXipG5lOIAAAAQE8jvDYkXIAAAAIAAgJMAqyAAAMAAAAiVgACxQ3g");
	var mask_2_graphics_165 = new cjs.Graphics().p("ACjRLIAAgUMgvyAAAIgGyzQAqAVBOAbIAAAAQCcA1CuAeIAAAAQIxBhIiisIAAAAQIXipG5lOIAAAAQE8jvDXkXIAAAAIAAgJMAqzAAAMAAAAiVgACxQ3g");
	var mask_2_graphics_166 = new cjs.Graphics().p("ACjRLIAAgUMgvyAAAIgGyzQAqAVBOAbIAAAAQCcA1CuAeIAAAAQIxBhIiisIAAAAQIXipG5lOIAAAAQE8jvDXkXIAAAAIAAgJMAqzAAAMAAAAiVgACxQ3g");
	var mask_2_graphics_229 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_2_graphics_230 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_2_graphics_231 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_2_graphics_232 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_2_graphics_233 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_2_graphics_234 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_2_graphics_235 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_2_graphics_236 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_2_graphics_237 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(158).to({graphics:mask_2_graphics_158,x:263.9,y:144.5}).wait(1).to({graphics:mask_2_graphics_159,x:195.3,y:144.5}).wait(1).to({graphics:mask_2_graphics_160,x:135.9,y:144.5}).wait(1).to({graphics:mask_2_graphics_161,x:85.5,y:144.5}).wait(1).to({graphics:mask_2_graphics_162,x:44.4,y:144.5}).wait(1).to({graphics:mask_2_graphics_163,x:12.3,y:144.5}).wait(1).to({graphics:mask_2_graphics_164,x:-10.5,y:144.5}).wait(1).to({graphics:mask_2_graphics_165,x:-24.2,y:144.5}).wait(1).to({graphics:mask_2_graphics_166,x:-28.8,y:144.5}).wait(1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_2_graphics_229,x:140.5,y:147.7}).wait(1).to({graphics:mask_2_graphics_230,x:70.3,y:147.7}).wait(1).to({graphics:mask_2_graphics_231,x:9.4,y:147.7}).wait(1).to({graphics:mask_2_graphics_232,x:-42.2,y:147.7}).wait(1).to({graphics:mask_2_graphics_233,x:-84.4,y:147.7}).wait(1).to({graphics:mask_2_graphics_234,x:-117.1,y:147.7}).wait(1).to({graphics:mask_2_graphics_235,x:-140.6,y:147.7}).wait(1).to({graphics:mask_2_graphics_236,x:-154.6,y:147.7}).wait(1).to({graphics:mask_2_graphics_237,x:-159.3,y:147.7}).wait(159));

	// t3
	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#4D575B").s().p("AAeBIIABhfIgGANIgzBMIgDAEQAAAAgBABQAAAAgBAAQAAAAgBAAQgBABAAAAIgNAAIAAhyIARAAIgBBeIAGgNIAzhMIADgEIAFgBIAMAAIAABygAgQg2QgGgEAAgIIABgDQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAIAJAAIABAGIACAEIADACIAFABIAFgBIAEgCIACgEIAAgGIAJAAQABAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAIAAADQAAAIgGAEQgGAEgLAAQgKAAgHgEg");
	this.shape_81.setTransform(135.9,106.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#4D575B").s().p("AgWA2QgKgEgIgIQgIgJgDgJQgFgLAAgNQAAgLAFgLQADgKAIgJQAIgHAKgFQALgFALABQANgBAKAFQALAFAHAHQAIAJAEAKQAEAJAAANQAAAOgEAKQgEAJgIAJQgHAIgLAEQgJAFgOAAQgMAAgKgFgAgPgoQgHADgGAGQgGAGgCAHQgDAJAAAJQAAALADAIQACAHAGAHQAGAFAHAEQAHACAIAAQAJAAAIgCQAHgEAFgFQAFgFADgJQADgIAAgLQAAgJgDgJQgDgIgFgFQgFgGgHgDQgIgDgJAAQgIAAgHADg");
	this.shape_82.setTransform(123.4,107.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#4D575B").s().p("AAeA5IAAg0Ig7AAIAAA0IgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_83.setTransform(110.9,107.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#4D575B").s().p("AgmA5IAAhxIAQAAIAAAxIAWAAQAKAAAHACQAIADAFACQAFAFACAFQACAHAAAGQAAAIgDAGQgCAGgFAFQgGAFgHACQgJACgHAAgAgWAsIAWAAQAFAAAFgBIAHgEQADgDACgEIABgIIgBgIQgCgDgDgDQgEgDgDgBQgFgBgFAAIgWAAg");
	this.shape_84.setTransform(100.5,107.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#4D575B").s().p("AgwA5IgCgCIAAgLIAGAAIAGgBQADgBADgEIAFgKIAFgTQACgJABgRIADgoIBDAAIAAByIgQAAIAAhlIgkAAIgHBBQgEANgDAFQgDAIgEAEQgEAEgFABIgKACg");
	this.shape_85.setTransform(88.5,107.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#4D575B").s().p("AAeA5IAAhWIABgIIgGANIgzBMIgDAEQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgMAAIAAhxIARAAIgBBeIAGgNIAzhMIADgEQABAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAIANAAIAABxg");
	this.shape_86.setTransform(77.4,107.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#4D575B").s().p("AhHA5IAAhxIAQAAIAABkIAvAAIAAhkIAQAAIAABkIAvAAIAAhkIARAAIAABxg");
	this.shape_87.setTransform(62.7,107.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#4D575B").s().p("AgaA5IgCgCIAAgLIAFAAIAEAAIAEgCIAEgDIACgEIAGgMIguhQIAPAAIAEABQAAABAAAAQABAAAAABQAAAAABAAQAAABAAAAIAbAyQADAFABAGIACgGIAag3IACgDIADgBIAOAAIgvBjIgDAIIgGAFIgGACIgHABg");
	this.shape_88.setTransform(49.1,107.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#4D575B").s().p("AgPA2QgKgFgHgHQgHgHgEgLQgEgKAAgOQAAgMAEgLQAEgLAIgHQAHgIALgEQAJgFAMAAQAMAAAKAEQAJAFAHAGIgFAIIgBABIgDABQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBIgGgDIgIgEQgFgBgHAAQgIAAgHADQgHADgGAFQgEAGgEAIQgCAHAAALQAAALADAIQADAIAFAGQAGAGAGACQAHADAHAAIAJAAIAIgCQAEgBADgCQADgCACgDIABgBIACAAIADABIAGAHQgGAIgLAFQgKAFgPAAQgKAAgLgFg");
	this.shape_89.setTransform(38.9,107.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#4D575B").s().p("AgPA2QgLgFgGgHQgHgHgEgLQgEgKAAgOQAAgMAEgLQAEgLAHgHQAIgIAKgEQAKgFAMAAQAMAAAJAEQAKAFAHAGIgFAIIgCABIgCABQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBIgGgDIgIgEQgFgBgHAAQgIAAgHADQgHADgFAFQgGAIgCAGQgDAJAAAJQAAALADAIQADAIAFAGQAGAGAGACQAHADAIAAIAJAAIAHgCQADgBADgCIAGgFIABgBIACAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAABAAIAGAHQgGAIgLAFQgKAFgOAAQgMAAgKgFg");
	this.shape_90.setTransform(24.2,107.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#4D575B").s().p("AgiA5IAAhxIBGAAIAAANIg2AAIAAAlIArAAIAAAMIgrAAIAAAmIA2AAIAAANg");
	this.shape_91.setTransform(132.6,86.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#4D575B").s().p("AgIA5IAAhjIgkAAIAAgOIBZAAIAAAOIglAAIAABjg");
	this.shape_92.setTransform(122.9,86.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#4D575B").s().p("AAgA5QgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAIgDgEIgcgpQgCgDgDgCIgGgBIgOAAIAAA0IgQAAIAAhxIAQAAIAAAxIAPAAIADgBIADgBIACgDIAcgoIADgDIAEgBIAOAAIgiAvQgDAFgGACQACABAEACIAGAHIAiAxg");
	this.shape_93.setTransform(113.4,86.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#4D575B").s().p("AgiA5IAAhxIBFAAIAAANIg1AAIAAAlIArAAIAAAMIgrAAIAAAmIA1AAIAAANg");
	this.shape_94.setTransform(103.2,86.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#4D575B").s().p("AgwA5QAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAAAIAAgLIAFAAIAGgBQAEgBACgEQAEgEACgGIAFgTIAFhCIBEAAIAAByIgQAAIAAhlIgkAAQgBAWgCAQQgCAPgDAMIgGASQgEAIgDAEQgGAEgDABQgFACgFAAg");
	this.shape_95.setTransform(91.6,86.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#4D575B").s().p("AAcA5IAAhkIg3AAIAABkIgQAAIAAhxIBXAAIAABxg");
	this.shape_96.setTransform(80.7,86.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#4D575B").s().p("AAuA5IAAhVIAAgEIgmBFQgBABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAIgDABIgCAAQgDAAgDgEIgnhFIAAAEIABAEIAABRIgPAAIAAhxIAMAAIAEAAIACADIAqBMIABgEIAohIIADgDIADAAIAMAAIAABxg");
	this.shape_97.setTransform(67.4,86.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#4D575B").s().p("AgWA3QgLgFgHgIQgHgHgFgLQgEgMAAgMQAAgKAEgMQAFgLAHgIQAHgIALgEQAKgEAMAAQANAAAKAEQALAEAHAIQAIAJADAKQAFALAAALQAAANgFALQgDAKgIAIQgHAIgLAFQgJADgOAAQgNAAgJgDgAgQgoQgHADgFAGQgFAFgDAIQgDAJAAAJQAAALADAIQADAJAFAEQAFAGAHADQAIADAIAAQAJAAAHgDQAHgCAGgHQAGgFACgIQADgIAAgLQAAgJgDgJQgCgHgGgGQgGgGgHgDQgHgDgJAAQgIAAgIADg");
	this.shape_98.setTransform(53.5,86.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#4D575B").s().p("AAgA5QgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAIgDgEIgcgpIgFgFIgGgBIgOAAIAAA0IgQAAIAAhxIAQAAIAAAxIAPAAIADgBIADgBIAegrQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAIAEgBIAOAAIgiAvQgDAFgGACQACABAEACIAGAHIAiAxg");
	this.shape_99.setTransform(42.9,86.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#4D575B").s().p("AgoA5IAAhxIAlAAQALAAAHACQAIACAEAEQAGAEACAFQACAGAAAHQAAAEgBAEIgEAHQgDAEgEACQgEADgFABQAMABAGAHQAHAHAAAKQAAAHgDAHQgDAGgFAEQgFAFgIACQgIACgJAAgAgXAsIAXAAIALgBQAFgCADgDQADgCABgEQACgDAAgFQAAgJgHgFQgGgFgMAAIgXAAgAgXgFIAUAAQAFAAAFgCIAIgDIAEgGQACgEAAgEQAAgKgGgFQgGgEgMAAIgUAAg");
	this.shape_100.setTransform(28,86.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#19B7E4").s().p("AApA5IgDgBIgCgDIgLgbIgxAAIgLAbIgCADIgEABIgMAAIAuhxIAQAAIAtBxgAgDgdIgRAsIApAAIgTgxIgCgHg");
	this.shape_101.setTransform(137.6,65.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#19B7E4").s().p("AgoA5IAAhxIAlAAQALAAAHACQAIACAEAEQAGAEACAFQACAGAAAHQAAAEgBAEIgEAHQgCADgFADQgDADgGABQAMABAHAHQAGAHAAAKQAAAHgDAHQgDAGgFAEQgFAEgHADQgJACgJAAgAgXAsIAXAAQAHAAAEgBQAFgCADgDQADgCABgEQACgDAAgFQAAgIgGgGQgHgFgMAAIgXAAgAgXgFIAUAAQAFAAAFgCIAIgDIAEgGQACgEAAgEQAAgKgGgFQgGgEgMAAIgUAAg");
	this.shape_102.setTransform(127.4,65.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#19B7E4").s().p("AgHA5IAAhjIglAAIAAgOIBZAAIAAAOIglAAIAABjg");
	this.shape_103.setTransform(117.2,65.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#19B7E4").s().p("AgPA2QgJgEgIgIQgIgJgDgJQgEgMAAgMQAAgMAEgLQAEgKAHgIQAIgIAKgEQALgFALAAQAMAAAKAEQAKAFAGAGIgFAIIgCABIgCABIgDgCIgGgDIgIgEQgEgBgIAAQgIAAgHADQgGACgGAGQgFAGgDAIQgDAJAAAJQAAALADAIQADAGAFAIQAGAFAGADQAHADAIAAIAJAAIAHgCQADgBADgCIAIgGIABAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAABAAIAGAHQgHAIgKAFQgLAFgNAAQgMAAgKgFg");
	this.shape_104.setTransform(107.4,65.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#19B7E4").s().p("AAeA5IAAg0Ig7AAIAAA0IgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_105.setTransform(95.7,65.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#19B7E4").s().p("AApA5IgDgBIgCgDIgKgbIgzAAIgJAbIgCADIgEABIgNAAIAuhxIAQAAIAtBxgAAAgiIgUAxIApAAIgSgsIgDgMg");
	this.shape_106.setTransform(84.2,65.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#19B7E4").s().p("AgmA5IAAhxIAjAAQAJAAAIACQAJACAFAFQAGAHACAFQADAFAAAJQAAAKgDAFQgDAGgGAFQgEAEgJADQgIADgJAAIgSAAIAAAqgAgVACIASAAQAFAAAFgCQAFgBADgDQAEgDACgEQACgFAAgFIgCgJQgCgFgEgCQgCgDgGgCQgFgBgFAAIgSAAg");
	this.shape_107.setTransform(75.3,65.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#19B7E4").s().p("AgHA5IAAhjIglAAIAAgOIBZAAIAAAOIglAAIAABjg");
	this.shape_108.setTransform(65.2,65.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#19B7E4").s().p("AgPA2QgJgEgJgIQgGgIgEgKQgEgLAAgNQAAgNAEgKQAEgLAHgHQAJgIAJgEQAKgFAMAAQAMAAAJAEQALAFAGAGIgHAJIgCABIgDgCIgGgDIgIgEQgFgBgHAAQgIAAgHADQgGACgGAGQgGAGgCAIQgEAJAAAJQAAALAEAIQACAHAGAHQAGAFAGADQAHADAIAAIAJAAIAHgCIAGgDIAHgGIACAAIACABIAHAHQgIAIgKAFQgLAFgMAAQgMAAgKgFg");
	this.shape_109.setTransform(55.4,65.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#19B7E4").s().p("AgWA3QgKgFgIgIQgIgIgEgKQgDgKAAgOQAAgMADgLQAEgJAIgJQAIgHAKgFQALgEALgBQAMABALAEQALAFAHAHQAIAJAEAJQADALAAAMQAAAOgDAKQgEAKgIAIQgHAIgLAFQgLADgMAAQgLAAgLgDgAgQgoQgGADgGAFQgGAIgCAHQgDAIAAAJQAAALADAIQACAIAGAFQAGAHAGACQAIAEAIAAQAJAAAIgEQAGgCAGgHQAFgEADgJQADgIAAgLQAAgJgDgIQgDgJgFgGQgGgFgGgDQgIgDgJAAQgIAAgIADg");
	this.shape_110.setTransform(43.5,65.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#19B7E4").s().p("AgmA5IAAhxIAjAAQAJAAAJACQAGACAHAFQAGAGACAGQADAHAAAHQAAAJgDAGQgDAGgFAFQgGAEgIADQgJADgIAAIgSAAIAAAqgAgVACIASAAIAKgCIAIgEQAEgCABgFQACgEAAgGQAAgFgBgEIgFgHQgEgDgFgCQgFgBgFAAIgSAAg");
	this.shape_111.setTransform(32.7,65.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#19B7E4").s().p("AAcA5IAAhkIg3AAIAABkIgQAAIAAhxIBYAAIAABxg");
	this.shape_112.setTransform(21.6,65.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#19B7E4").s().p("AAeA5IAAgxIgQAAIgEABIgDABIgDADIgEAEIgWAiQgCADgDACQgDABgDAAIgNAAIAegpQAEgHAHgDQgGgCgGgDQgFgBgDgEQgDgDgCgGQgBgFAAgGQAAgIACgFQADgGAFgEQAFgEAHgDQAHgCAKAAIAmAAIAABxgAgCgqIgIAEIgEAGIgCAIQAAAFACAEQABAEADACQADACAFACQADABAHAAIAWAAIAAgnIgWAAg");
	this.shape_113.setTransform(122.7,44.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#19B7E4").s().p("AAeA5IABheIgGANIgzBMIgDAEQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgMAAIAAhxIARAAIgBBeIAGgNIAzhMIADgEIAEgBIANAAIAABxg");
	this.shape_114.setTransform(112,44.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#19B7E4").s().p("AAuA5IAAhZIgmBFQgBABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAIgEABIgBAAQgEAAgCgEIgnhFIABAEIAABVIgPAAIAAhxIANAAIADAAQAAAAAAAAQABABAAAAQAAAAAAAAQABABAAAAIAqBNIABgEIAphJIACgCIADAAIAMAAIAABxg");
	this.shape_115.setTransform(98.5,44.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#19B7E4").s().p("AgWA2QgKgEgIgHQgIgJgDgKQgFgLAAgNQAAgLAFgMQADgJAIgJQAIgHAKgFQAKgFAMAAQANAAAKAFQALAFAHAHQAHAIAFAKQAEANAAAKQAAAMgEAMQgFALgHAIQgHAHgLAEQgLAEgMAAQgLAAgLgEgAgPgoQgHADgGAFQgGAHgCAIQgDAJAAAIQAAAKADAJQADAIAFAGQAGAFAHAEQAHADAIAAQAJAAAIgDQAHgEAFgFQAFgFADgJQADgHAAgMQAAgKgDgHQgDgJgFgGQgFgFgHgDQgIgDgJAAQgIAAgHADg");
	this.shape_116.setTransform(84.6,44.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#19B7E4").s().p("AAeA5IAAg0Ig7AAIAAA0IgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_117.setTransform(72.1,44.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#19B7E4").s().p("AgWA2QgLgEgHgHQgHgIgFgLQgEgMAAgMQAAgKAEgNQAFgKAHgIQAHgHALgFQAKgFAMAAQANAAAKAFQALAFAHAHQAHAIAFAKQAEANAAAKQAAAMgEAMQgFALgHAIQgHAHgLAEQgLAEgMAAQgLAAgLgEgAgPgoQgIADgFAFQgFAGgDAJQgDAHAAAKQAAAMADAHQADAJAFAFQAFAFAIAEQAHADAIAAQAKAAAGgDQAIgEAFgFQAFgFADgJQADgJAAgKQAAgIgDgJQgDgJgFgGQgFgFgIgDQgGgDgKAAQgIAAgHADg");
	this.shape_118.setTransform(59.6,44.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#19B7E4").s().p("AAgA5IgFgBIgDgEIgcgpIgEgFIgHgBIgOAAIAAA0IgQAAIAAhxIAQAAIAAAxIAPAAIADgBIADgBIAegrIADgDIAEgBIAOAAIgiAvQgDAFgGACQADABADACIAGAHIAiAxg");
	this.shape_119.setTransform(49,44.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#19B7E4").s().p("AgeA2QgKgFgHgIIAGgHIADgBIACAAIABABIAGAFIAGADIAHACIAJAAQAHAAAHgCQAGgDAFgFQAGgGADgGQAEgJAAgIIg4AAIAAgLIA4AAQgBgJgEgHQgBgFgHgHQgFgFgGgCQgHgCgHAAQgHAAgFABIgIAEIgGADQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAAAAAIgCgBIgCgBIgFgIQAHgGAKgFQAJgEAMAAQALAAALAFQAKAEAIAIQAHAHAEALQAEAKAAANQAAAOgEAKQgDAKgIAIQgGAHgLAFQgKAFgMAAQgNAAgLgFg");
	this.shape_120.setTransform(37.5,44.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#4D575B").s().p("AAeBIIABhfIgGANIgzBMQAAABgBABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAIgNAAIAAhyIARAAIAABWIgBAIIADgHIA2hSIADgEQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAIANAAIAABygAgQg2QgGgEAAgIIABgDQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAIAJAAIABAGQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABIADACIAFABIAFgBIAEgCIACgEIAAgGIAJAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAIABADQAAAIgGAEQgGAEgLAAQgLAAgGgEg");
	this.shape_121.setTransform(120.1,127.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#4D575B").s().p("AgWA2QgKgEgIgIQgHgIgFgKQgEgMAAgMQAAgKAEgMQAFgKAHgJQAIgHAKgFQAKgFAMABQANgBAKAFQALAFAHAHQAHAIAFALQAEAMAAAKQAAAMgEAMQgFALgHAHQgHAIgLAEQgJAFgOAAQgNAAgJgFgAgPgoQgIADgFAGQgFAFgDAIQgDAKAAAIQAAAKADAJQADAJAFAFQAFAFAIAEQAHACAIAAQAJAAAIgCQAHgEAFgFQAFgFADgJQADgJAAgKQAAgIgDgKQgDgIgFgFQgFgGgHgDQgIgDgJAAQgIAAgHADg");
	this.shape_122.setTransform(107.6,128.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#4D575B").s().p("AAeA5IAAg0Ig7AAIAAA0IgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_123.setTransform(95.1,128.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#4D575B").s().p("AAeA5IABheIgDAHIgDAGIgzBMIgDAEQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgMAAIAAhxIARAAIgBBeIAGgNIAzhMIADgEIAEgBIANAAIAABxg");
	this.shape_124.setTransform(82.9,128.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#4D575B").s().p("AhHA5IAAhxIARAAIAABkIAvAAIAAhkIAPAAIAABkIAvAAIAAhkIARAAIAABxg");
	this.shape_125.setTransform(68.1,128.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#4D575B").s().p("AApA5IgEgBIgBgDIgLgbIgyAAIgKAbIgCADIgEABIgMAAIAthxIAQAAIAuBxgAgUAPIAoAAIgTgxIgBgHg");
	this.shape_126.setTransform(54.2,128.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#4D575B").s().p("AAtA5IAAhVIABgEIgnBFIgCADIgEABIgBAAQgEAAgCgEIgnhFIAAAEIAAAEIAABRIgOAAIAAhxIAMAAIADAAQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABIAoBEIACAIIAqhMQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAAAAAIADAAIANAAIAABxg");
	this.shape_127.setTransform(41.3,128.8);

	var maskedShapeInstanceList = [this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81}]},158).to({state:[]},80).wait(158));

	// mask - копия (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_79 = new cjs.Graphics().p("ACkRLIAAgUMgvzAAAIgGyzQAqAVBOAbIAAAAQCcA1CuAeIAAAAQIxBhIiisIAAAAQIXipG5lOIAAAAQE8jvDYkXIAAAAIAAgJMAqyAAAMAAAAiVgACxQ3g");
	var mask_3_graphics_80 = new cjs.Graphics().p("ACkRLIAAgUMgvzAAAIgGyzQAqAVBOAbIAAAAQCcA1CuAeIAAAAQIxBhIiisIAAAAQIXipG5lOIAAAAQE8jvDYkXIAAAAIAAgJMAqyAAAMAAAAiVgACxQ3g");
	var mask_3_graphics_81 = new cjs.Graphics().p("ACkRLIAAgUMgvzAAAIgGyzQAqAVBOAbIAAAAQCcA1CuAeIAAAAQIxBhIiisIAAAAQIXipG5lOIAAAAQE8jvDYkXIAAAAIAAgJMAqyAAAMAAAAiVgACxQ3g");
	var mask_3_graphics_82 = new cjs.Graphics().p("ACkRLIAAgUMgvzAAAIgGyzQAqAVBOAbIAAAAQCcA1CuAeIAAAAQIxBhIiisIAAAAQIXipG5lOIAAAAQE8jvDYkXIAAAAIAAgJMAqyAAAMAAAAiVgACxQ3g");
	var mask_3_graphics_83 = new cjs.Graphics().p("ACjRLIAAgUMgvyAAAIgGyzQAqAVBOAbIAAAAQCcA1CuAeIAAAAQIxBhIiisIAAAAQIXipG5lOIAAAAQE8jvDXkXIAAAAIAAgJMAqzAAAMAAAAiVgACxQ3g");
	var mask_3_graphics_84 = new cjs.Graphics().p("ACjRLIAAgUMgvyAAAIgGyzQAqAVBOAbIAAAAQCcA1CuAeIAAAAQIxBhIiisIAAAAQIXipG5lOIAAAAQE8jvDXkXIAAAAIAAgJMAqzAAAMAAAAiVgACxQ3g");
	var mask_3_graphics_85 = new cjs.Graphics().p("ACkRLIAAgUMgvzAAAIgGyzQAqAVBOAbIAAAAQCcA1CuAeIAAAAQIxBhIiisIAAAAQIXipG5lOIAAAAQE8jvDYkXIAAAAIAAgJMAqyAAAMAAAAiVgACxQ3g");
	var mask_3_graphics_86 = new cjs.Graphics().p("ACjRLIAAgUMgvyAAAIgGyzQAqAVBOAbIAAAAQCcA1CuAeIAAAAQIxBhIiisIAAAAQIXipG5lOIAAAAQE8jvDXkXIAAAAIAAgJMAqzAAAMAAAAiVgACxQ3g");
	var mask_3_graphics_87 = new cjs.Graphics().p("ACjRLIAAgUMgvyAAAIgGyzQAqAVBOAbIAAAAQCcA1CuAeIAAAAQIxBhIiisIAAAAQIXipG5lOIAAAAQE8jvDXkXIAAAAIAAgJMAqzAAAMAAAAiVgACxQ3g");
	var mask_3_graphics_150 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_3_graphics_151 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_3_graphics_152 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_3_graphics_153 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_3_graphics_154 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_3_graphics_155 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_3_graphics_156 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_3_graphics_157 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_3_graphics_158 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(79).to({graphics:mask_3_graphics_79,x:263.9,y:144.5}).wait(1).to({graphics:mask_3_graphics_80,x:195.3,y:144.5}).wait(1).to({graphics:mask_3_graphics_81,x:135.9,y:144.5}).wait(1).to({graphics:mask_3_graphics_82,x:85.5,y:144.5}).wait(1).to({graphics:mask_3_graphics_83,x:44.4,y:144.5}).wait(1).to({graphics:mask_3_graphics_84,x:12.3,y:144.5}).wait(1).to({graphics:mask_3_graphics_85,x:-10.5,y:144.5}).wait(1).to({graphics:mask_3_graphics_86,x:-24.2,y:144.5}).wait(1).to({graphics:mask_3_graphics_87,x:-28.8,y:144.5}).wait(1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_3_graphics_150,x:140.5,y:147.7}).wait(1).to({graphics:mask_3_graphics_151,x:70.3,y:147.7}).wait(1).to({graphics:mask_3_graphics_152,x:9.4,y:147.7}).wait(1).to({graphics:mask_3_graphics_153,x:-42.2,y:147.7}).wait(1).to({graphics:mask_3_graphics_154,x:-84.4,y:147.7}).wait(1).to({graphics:mask_3_graphics_155,x:-117.1,y:147.7}).wait(1).to({graphics:mask_3_graphics_156,x:-140.6,y:147.7}).wait(1).to({graphics:mask_3_graphics_157,x:-154.6,y:147.7}).wait(1).to({graphics:mask_3_graphics_158,x:-159.3,y:147.7}).wait(238));

	// t2
	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#4D575B").s().p("AApA5IgEgBIgBgCIgKgbIgzAAIgKAbIgCACIgEABIgMAAIAuhxIAQAAIAtBxgAgDgdIgRAsIApAAIgUgxIgBgGg");
	this.shape_128.setTransform(106,75.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#4D575B").s().p("AAfA5IgEgBIgDgEIgcgpQgCgDgDgBQgCgCgEAAIgOAAIAAA0IgQAAIAAhxIAQAAIAAAyIAMAAIAGgBIAFgFIAcgnIADgEQABAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAIAOAAIgiAvQgDAGgGABQAEACACABQADADADAEIAiAxg");
	this.shape_129.setTransform(95.9,75.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#4D575B").s().p("AgmA5IAAhxIAjAAQAJAAAJACQAIADAFAFQAFAEADAHQADAHAAAIQAAAIgDAGQgCAGgGAFQgFAFgJACQgIADgJAAIgSAAIAAAqgAgVACIASAAQAFAAAFgCQAFAAAEgEIAFgHQABgEAAgFQAAgGgBgEQgBgDgEgEQgDgDgGgCIgKgBIgSAAg");
	this.shape_130.setTransform(85.5,75.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#4D575B").s().p("AAeA5IAAhWIABgIIgDAHIg2BSQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgMAAIAAhxIARAAIAABWIgBAIIAGgNIAzhMQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQABAAAAAAIANAAIAABxg");
	this.shape_131.setTransform(74.1,75.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#4D575B").s().p("AgHA5IAAhjIglAAIAAgOIBZAAIAAAOIglAAIAABjg");
	this.shape_132.setTransform(63.3,75.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#4D575B").s().p("AgPA2QgKgEgHgIQgHgHgEgMQgEgLAAgMQAAgLAEgMQAFgLAHgHQAHgIALgFQAKgEALAAQAOAAAIAEQAJAFAIAGIgGAHIgBACIgCABIgEgCIgFgEIgJgDQgFgBgHAAQgIAAgHADQgJAFgDAEQgGAFgDAIQgCAJAAAJQAAALADAIQADAJAFAEQAFAHAIACQAGADAHAAIAJgBIAIgBIAHgDIAFgFIACgBIABAAIACABIAHAHQgHAJgKAEQgKAEgPAAQgLAAgKgEg");
	this.shape_133.setTransform(53.4,75.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#4D575B").s().p("AAeA5IAAgwIgQAAIgEAAIgDABIgDADIgEAEIgXAjIgEAEQgDABgDAAIgMAAIAdgpQAEgHAHgDIgMgEQgGgDgCgDIgFgJQgCgEAAgGQAAgHADgHQADgGAFgEQAGgFAHgCQAIgCAIAAIAmAAIAABxgAgCgqIgIAEQgDADgBAEQgCADAAAFQAAAEACAEQABADADADQADADAFABIAgABIAAgnIgWAAIgKABg");
	this.shape_134.setTransform(135.2,54.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#4D575B").s().p("AApA5IgDgBIgCgCIgLgbIgxAAIgLAbIgCACIgDABIgNAAIAuhxIAPAAIAuBxgAgBgiIgTAxIApAAIgVg3g");
	this.shape_135.setTransform(125.2,54.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#4D575B").s().p("AAeA5IAAgzIg7AAIAAAzIgRAAIAAhxIARAAIAAAzIA7AAIAAgzIARAAIAABxg");
	this.shape_136.setTransform(113.7,54.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#4D575B").s().p("AgoA5IAAhxIAlAAQAIAAAKACQAIACAEAEQAGAEACAFQACAHAAAGQAAAEgBAEQgCAEgCADIgHAGIgJAEQAMACAHAHQAGAGAAALQAAAIgDAFQgCAGgGAEQgEAEgIADQgHACgLAAgAgXAsIAXAAQAHAAAEgBIAIgEQADgDABgEQACgDAAgFQAAgJgGgEQgGgFgNAAIgXAAgAgXgFIAegBQAEgBAEgDQADgCABgEQACgEAAgEQAAgJgGgGQgGgEgMAAIgUAAg");
	this.shape_137.setTransform(102.7,54.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#4D575B").s().p("AAeA5IAAhWIABgIIgGANIgzBMQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgNAAIAAhxIARAAIAABWIgBAIIADgHIA2hSQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAIANAAIAABxg");
	this.shape_138.setTransform(91.1,54.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#4D575B").s().p("AgHA5IAAhjIglAAIAAgOIBZAAIAAAOIglAAIAABjg");
	this.shape_139.setTransform(80.3,54.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#4D575B").s().p("AAfA5IgEgBIgDgEIgcgpQgCgDgDgBQgCgCgEAAIgOAAIAAA0IgQAAIAAhxIAQAAIAAAyIAMAAIAGgBIAFgFIAcgnIADgEIAEgBIAOAAIgiAvQgEAGgFABQAEACACABIAGAHIAiAxg");
	this.shape_140.setTransform(70.9,54.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#4D575B").s().p("AgiA5IAAhxIBGAAIAAANIg2AAIAAAlIArAAIAAAMIgrAAIAAAmIA2AAIAAANg");
	this.shape_141.setTransform(60.6,54.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#4D575B").s().p("AgHA8IAAgOQgMgBgIgDQgIgDgHgHQgGgFgEgJQgEgIAAgKQAAgJAEgIQAEgJAGgFQAGgGAJgEQAKgEAKAAIAAgOIAPAAIAAAOQAKAAAKAEQAIADAHAHQAHAGADAIQAEAIAAAJQAAAKgEAIQgDAGgHAIQgHAHgIADQgIADgMABIAAAOgAAIAhQAHAAAGgDQAFgCAFgFQAEgEADgGQACgFAAgIQAAgHgCgFQgDgGgEgEQgFgFgFgDQgGgCgHAAgAgUgeQgHADgDAFQgFAFgCAFQgCAGAAAGQAAAHACAGQACAFAFAFQAEAFAGACQAGADAHAAIAAhBQgHAAgGACg");
	this.shape_142.setTransform(49.3,54.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#4D575B").s().p("AgHA8IAAgOQgMgBgIgDQgIgDgHgHQgGgFgEgJQgEgIAAgKQAAgJAEgIQAEgJAGgFQAGgGAJgEQAKgEAKAAIAAgOIAPAAIAAAOQAKAAAKAEQAIADAHAHQAHAGADAIQAEAIAAAJQAAAKgEAIQgDAGgHAIQgHAHgIADQgIADgMABIAAAOgAAIAhQAHAAAGgDQAFgCAFgFQAEgEADgGQACgFAAgIQAAgHgCgFQgDgGgEgEQgFgFgFgDQgGgCgHAAgAgUgeQgHADgDAFQgFAFgCAFQgCAGAAAGQAAAHACAGQACAFAFAFQAEAFAGACQAGADAHAAIAAhBQgHAAgGACg");
	this.shape_143.setTransform(36.8,54.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#4D575B").s().p("AgeA2QgJgEgIgJIAGgHIADgBIADABIAGAFIAGADIAQADQAIAAAGgEQAGgCAFgFQAGgFADgHQADgGABgLIg4AAIAAgLIA4AAQgBgKgEgGQgDgHgFgEQgFgFgGgDQgHgDgHABQgHgBgFACIgIADIgGAEIgDACIgCgBIgCgBIgFgIQAHgGAKgEQAHgFAOAAQALAAALAFQAKAEAIAHQAHAKAEAJQAEAKAAANQAAAOgEAJQgDAMgIAHQgGAIgLAEQgKAFgMgBQgOABgKgFg");
	this.shape_144.setTransform(25,54.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#19B7E4").s().p("AgjA5IAAhxIBGAAIAAANIg1AAIAAAlIArAAIAAAMIgrAAIAAAmIA1AAIAAANg");
	this.shape_145.setTransform(133.7,96.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#19B7E4").s().p("AApA5IAAhxIARAAIAABxgAg5A5IAAhxIARAAIAAAxIAVAAQAKAAAIACQAHACAFAEQAFAEACAGQADAGAAAGQAAAHgDAHQgDAIgFADQgEAEgIADQgGACgLAAgAgoAsIAVAAQAHAAAEgBQAGgCACgCQABgCACgEIABgIIgBgJQgBgDgCgDQgCgCgGgCQgEgBgHAAIgVAAg");
	this.shape_146.setTransform(121.5,96.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#19B7E4").s().p("AAeA5IAAgzIg7AAIAAAzIgRAAIAAhxIARAAIAAAzIA7AAIAAgzIARAAIAABxg");
	this.shape_147.setTransform(108.2,96.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#19B7E4").s().p("AgHA5IAAhjIglAAIAAgOIBZAAIAAAOIglAAIAABjg");
	this.shape_148.setTransform(97.4,96.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#19B7E4").s().p("AAfA5IgEgBIgfgtQgCgDgDgBQgCgCgEAAIgOAAIAAA0IgQAAIAAhxIAQAAIAAAyIAMAAIAGgBIAFgFIAcgnQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAIAOAAIgiAvQgDAGgGABIAGADIAGAHIAiAxg");
	this.shape_149.setTransform(87.9,96.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#19B7E4").s().p("AAqA5IgEgBIgCgCIgKgbIgzAAIgKAbIgBACIgEABIgNAAIAuhxIAQAAIAtBxgAAAgiIgTAxIAoAAIgVg3g");
	this.shape_150.setTransform(76.5,96.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#19B7E4").s().p("AAcA5IAAhkIg3AAIAABkIgRAAIAAhxIBZAAIAABxg");
	this.shape_151.setTransform(65.2,96.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#19B7E4").s().p("AAuA5IAAhVIAAgEIgnBGIgCACIgDABIgCAAQgEAAgBgDIgohGIABAEIAABVIgPAAIAAhxIAMAAIAEAAIACADIAqBNIADgJIAmhEIADgDIADAAIAMAAIAABxg");
	this.shape_152.setTransform(51.9,96.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#19B7E4").s().p("AgWA2QgLgFgHgHQgGgGgGgMQgEgLAAgNQAAgMAEgKQAFgMAHgHQAHgIALgEQAKgFAMABQANgBAKAFQALAEAHAIQAHAHAFAMQAEAKAAAMQAAANgEALQgFAMgHAGQgHAHgLAFQgKAEgNABQgMgBgKgEgAgPgoQgJAEgEAFQgFAFgDAIQgDAIAAAKQAAAMADAGQADAJAFAGQAFAFAIADQAHADAIAAQAKAAAGgDQAIgDAFgFQAFgGADgJQADgJAAgJQAAgIgDgKQgDgIgFgFQgEgFgJgEQgGgEgKAAQgIAAgHAEg");
	this.shape_153.setTransform(38,96.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#19B7E4").s().p("AAgA5IgFgBIgfgtQgCgDgCgBQgDgCgEAAIgOAAIAAA0IgQAAIAAhxIAQAAIAAAyIAMAAIAGgBIAFgFIAcgnIADgEQABAAAAAAQABgBAAAAQAAAAABAAQABAAAAAAIAOAAIgiAvQgDAGgGABQAFACABABIAGAHIAiAxg");
	this.shape_154.setTransform(27.4,96.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#19B7E4").s().p("AApA5IAAhxIARAAIAABxgAg5A5IAAhxIARAAIAAAxIAVAAQAKAAAJACQAGADAFADQAFAEACAGQADAEAAAIQAAAHgDAHQgDAIgFADQgEAEgIADQgGACgLAAgAgoAsIAVAAQAHAAAEgBQAGgCACgCQABgCACgEQACgEAAgEQAAgFgCgEIgDgGQgCgCgFgCQgFgBgHAAIgVAAg");
	this.shape_155.setTransform(111.3,117.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#19B7E4").s().p("AgmA5IAAhxIAjAAQAJAAAJACQAIADAFAFQAFAEADAHQADAHAAAIQAAAHgDAHQgDAGgFAFQgFAFgJACQgIADgJAAIgSAAIAAAqgAgVACIASAAQADAAAHgCQAFAAAEgDIAFgIQABgEAAgFQAAgGgBgEQgBgDgEgEQgDgDgGgCQgEgBgGAAIgSAAg");
	this.shape_156.setTransform(99.8,117.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#19B7E4").s().p("AgjA5IAAhxIBGAAIAAANIg1AAIAAAlIArAAIAAAMIgrAAIAAAmIA1AAIAAANg");
	this.shape_157.setTransform(90.3,117.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#19B7E4").s().p("AAuA5IAAhVIAAgEIgnBGIgCACIgDABIgCAAQgEAAgCgDIgnhGIAAAEIABAEIAABRIgPAAIAAhxIAMAAIAEAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAABABIAmBEIADAJIAEgJIAmhEIADgDIADAAIAMAAIAABxg");
	this.shape_158.setTransform(77.9,117.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#19B7E4").s().p("AgXA2QgKgEgHgHIAFgIIACgBIACgBIADABIADACIAEADIAMAFIAJAAQALABAHgGQAHgGAAgKIgCgIQgBgEgEgDIgHgDIgZgBIgBgNIAPAAQAFAAADgCQAEAAAEgDQACgBACgEIACgIQAAgDgCgEQgBgCgDgDQgEgDgDgBQgFgBgEAAQgHAAgEABIgIAEIgFACIgDACIgCgBIgCgCIgEgIQAHgFAIgEQAJgCALAAQAIAAAHABQAIADAEAEQAFADADAGQACAGAAAGQAAAIgEAHQgEAHgIAEIAIADQAEACACAEIAEAHQACAEAAAFQAAAHgDAGQgDAHgFAFQgFAEgJADQgHAEgJAAQgMAAgLgFg");
	this.shape_159.setTransform(65.6,117.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#19B7E4").s().p("AApA5IgDgBIgCgCIgLgbIgxAAIgLAbIgCACIgEABIgMAAIAuhxIAPAAIAuBxgAgDgdIgRAsIApAAIgTgxIgCgGg");
	this.shape_160.setTransform(55.8,117.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#19B7E4").s().p("AgmA5IAAhxIAjAAQAJAAAJACQAIADAFAFQAFAEADAHQADAHAAAIQAAAIgDAGQgCAGgGAFQgFAFgJACQgIADgJAAIgSAAIAAAqgAgVACIASAAQADAAAHgCQAFAAAEgDIAFgIQABgEAAgFQAAgGgBgEQgBgDgEgEQgDgDgGgCQgEgBgGAAIgSAAg");
	this.shape_161.setTransform(46.8,117.6);

	var maskedShapeInstanceList = [this.shape_128,this.shape_129,this.shape_130,this.shape_131,this.shape_132,this.shape_133,this.shape_134,this.shape_135,this.shape_136,this.shape_137,this.shape_138,this.shape_139,this.shape_140,this.shape_141,this.shape_142,this.shape_143,this.shape_144,this.shape_145,this.shape_146,this.shape_147,this.shape_148,this.shape_149,this.shape_150,this.shape_151,this.shape_152,this.shape_153,this.shape_154,this.shape_155,this.shape_156,this.shape_157,this.shape_158,this.shape_159,this.shape_160,this.shape_161];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128}]},79).to({state:[]},80).wait(237));

	// mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_0 = new cjs.Graphics().p("ACkRLIAAgUMgvzAAAIgGyzQAqAVBOAbIAAAAQCcA1CuAeIAAAAQIxBhIiisIAAAAQIXipG5lOIAAAAQE8jvDYkXIAAAAIAAgJMAqyAAAMAAAAiVgACxQ3g");
	var mask_4_graphics_1 = new cjs.Graphics().p("ACkRLIAAgUMgvzAAAIgGyzQAqAVBOAbIAAAAQCcA1CuAeIAAAAQIxBhIiisIAAAAQIXipG5lOIAAAAQE8jvDYkXIAAAAIAAgJMAqyAAAMAAAAiVgACxQ3g");
	var mask_4_graphics_2 = new cjs.Graphics().p("ACkRLIAAgUMgvzAAAIgGyzQAqAVBOAbIAAAAQCcA1CuAeIAAAAQIxBhIiisIAAAAQIXipG5lOIAAAAQE8jvDYkXIAAAAIAAgJMAqyAAAMAAAAiVgACxQ3g");
	var mask_4_graphics_3 = new cjs.Graphics().p("ACkRLIAAgUMgvzAAAIgGyzQAqAVBOAbIAAAAQCcA1CuAeIAAAAQIxBhIiisIAAAAQIXipG5lOIAAAAQE8jvDYkXIAAAAIAAgJMAqyAAAMAAAAiVgACxQ3g");
	var mask_4_graphics_4 = new cjs.Graphics().p("ACjRLIAAgUMgvyAAAIgGyzQAqAVBOAbIAAAAQCcA1CuAeIAAAAQIxBhIiisIAAAAQIXipG5lOIAAAAQE8jvDXkXIAAAAIAAgJMAqzAAAMAAAAiVgACxQ3g");
	var mask_4_graphics_5 = new cjs.Graphics().p("ACjRLIAAgUMgvyAAAIgGyzQAqAVBOAbIAAAAQCcA1CuAeIAAAAQIxBhIiisIAAAAQIXipG5lOIAAAAQE8jvDXkXIAAAAIAAgJMAqzAAAMAAAAiVgACxQ3g");
	var mask_4_graphics_6 = new cjs.Graphics().p("ACkRLIAAgUMgvzAAAIgGyzQAqAVBOAbIAAAAQCcA1CuAeIAAAAQIxBhIiisIAAAAQIXipG5lOIAAAAQE8jvDYkXIAAAAIAAgJMAqyAAAMAAAAiVgACxQ3g");
	var mask_4_graphics_7 = new cjs.Graphics().p("ACjRLIAAgUMgvyAAAIgGyzQAqAVBOAbIAAAAQCcA1CuAeIAAAAQIxBhIiisIAAAAQIXipG5lOIAAAAQE8jvDXkXIAAAAIAAgJMAqzAAAMAAAAiVgACxQ3g");
	var mask_4_graphics_8 = new cjs.Graphics().p("ACjRLIAAgUMgvyAAAIgGyzQAqAVBOAbIAAAAQCcA1CuAeIAAAAQIxBhIiisIAAAAQIXipG5lOIAAAAQE8jvDXkXIAAAAIAAgJMAqzAAAMAAAAiVgACxQ3g");
	var mask_4_graphics_71 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_4_graphics_72 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_4_graphics_73 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_4_graphics_74 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_4_graphics_75 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_4_graphics_76 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_4_graphics_77 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_4_graphics_78 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_4_graphics_79 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:mask_4_graphics_0,x:263.9,y:144.5}).wait(1).to({graphics:mask_4_graphics_1,x:195.3,y:144.5}).wait(1).to({graphics:mask_4_graphics_2,x:135.9,y:144.5}).wait(1).to({graphics:mask_4_graphics_3,x:85.5,y:144.5}).wait(1).to({graphics:mask_4_graphics_4,x:44.4,y:144.5}).wait(1).to({graphics:mask_4_graphics_5,x:12.3,y:144.5}).wait(1).to({graphics:mask_4_graphics_6,x:-10.5,y:144.5}).wait(1).to({graphics:mask_4_graphics_7,x:-24.2,y:144.5}).wait(1).to({graphics:mask_4_graphics_8,x:-28.8,y:144.5}).wait(1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_4_graphics_71,x:140.5,y:147.7}).wait(1).to({graphics:mask_4_graphics_72,x:70.3,y:147.7}).wait(1).to({graphics:mask_4_graphics_73,x:9.4,y:147.7}).wait(1).to({graphics:mask_4_graphics_74,x:-42.2,y:147.7}).wait(1).to({graphics:mask_4_graphics_75,x:-84.4,y:147.7}).wait(1).to({graphics:mask_4_graphics_76,x:-117.1,y:147.7}).wait(1).to({graphics:mask_4_graphics_77,x:-140.6,y:147.7}).wait(1).to({graphics:mask_4_graphics_78,x:-154.6,y:147.7}).wait(1).to({graphics:mask_4_graphics_79,x:-159.3,y:147.7}).wait(317));

	// t1
	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#19B7E4").s().p("AApA5IAAhxIARAAIAABxgAg5A5IAAhxIARAAIAAAxIAVAAQAMAAAGACQAGABAGAEQAFAFACAFQADAGAAAHQAAAIgDAGQgCAGgGAFQgFAFgHACQgIACgJAAgAgoAsIAVAAQAHAAAEgBQAFgCADgDQACgCABgEIABgIIgBgIQgBgEgCgCIgIgEIgggBg");
	this.shape_162.setTransform(113.3,107);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#19B7E4").s().p("AAeA5IAAg0Ig7AAIAAA0IgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_163.setTransform(100,107);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#19B7E4").s().p("AAeA5IAAhWIABgIIgGANIgzBMQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQgBAAAAAAIgNAAIAAhxIARAAIAABWIgBAIIADgHIA2hSQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAIANAAIAABxg");
	this.shape_164.setTransform(87.8,107);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#19B7E4").s().p("AhHA5IAAhxIARAAIAABkIAuAAIAAhkIAQAAIAABkIAvAAIAAhkIARAAIAABxg");
	this.shape_165.setTransform(73.1,107);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#19B7E4").s().p("AApA5IgDgBIgCgDIgKgbIgzAAIgJAbIgCADQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgMAAIAuhxIAQAAIAtBxgAgDgeIgRAsIApAAIgVg3g");
	this.shape_166.setTransform(59.1,107);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#19B7E4").s().p("AAtA5IAAhRIABgEIAAgEIgmBFIgDADIgEABIgBAAQgEAAgCgEIgnhFIAAAEIAABVIgOAAIAAhxIAPAAIADACIApBNIACgEIAphJIABgCIAQAAIAABxg");
	this.shape_167.setTransform(46.2,107);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#19B7E4").s().p("AgjA5IAAhxIBGAAIAAANIg1AAIAAAlIArAAIAAAMIgrAAIAAAmIA1AAIAAANg");
	this.shape_168.setTransform(130.1,86.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#19B7E4").s().p("AApA5IAAhxIARAAIAABxgAg5A5IAAhxIARAAIAAAwIAWAAQAJAAAJADQAGACAFADQAGAFACAFQACAGAAAHQAAAIgDAGQgDAGgFAFQgGAFgFACQgJACgJAAgAgoAsIAVAAQAHAAAFgBQAEgCADgDQACgBABgFQACgDAAgFQAAgEgCgEQAAgEgDgCIgHgEIghgBg");
	this.shape_169.setTransform(117.9,86.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#19B7E4").s().p("AAeA5IAAg0Ig7AAIAAA0IgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_170.setTransform(104.6,86.1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#19B7E4").s().p("AgnA5IAAhxIARAAIAAAwIAWAAQAJAAAIADQAIACAEADQAGAFACAFQADAGgBAHQAAAIgCAGQgDAGgGAFQgFAFgHACQgIACgIAAgAgWAsIAWAAQAFAAAFgBQAFgCADgDQACgBABgFQACgDAAgFQAAgEgCgEQAAgEgDgCIgIgEIgggBg");
	this.shape_171.setTransform(94.2,86.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#19B7E4").s().p("AgwA5QAAAAgBgBQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgKIAFAAIAHgBQADgCADgDQADgGACgFQACgFADgNQACgIABgTIADgnIBDAAIAAByIgQAAIAAhlIgkAAQgBAWgCAQQgCAQgDALQgCAMgEAGQgDAHgEAFQgEAEgFABQgFACgFAAg");
	this.shape_172.setTransform(82.2,86.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#19B7E4").s().p("AAqA5IgEgBIgCgDIgLgbIgyAAIgKAbIgCADIgDABIgNAAIAuhxIAPAAIAuBxgAgBgjIgSAxIAoAAIgVg3g");
	this.shape_173.setTransform(71.5,86.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#19B7E4").s().p("AgmA5IAAhxIAiAAQAMAAAHACQAHACAGAFQAGAFACAHQADAGAAAIQAAAJgDAGQgEAGgFAEQgEAFgJADQgJADgJAAIgRAAIAAAqgAgVACIARAAQAHAAAEgCQAFgBADgDQAEgCABgFIACgKQAAgFgCgEQgBgEgEgDQgCgDgGgCQgHgCgEAAIgRAAg");
	this.shape_174.setTransform(62.6,86.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#19B7E4").s().p("AAeA5IAAhPIABgPIgGANIgzBMIgDADQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgNAAIAAhxIARAAIgBBeIADgHIADgGIAzhMIADgEIAFgBIAMAAIAABxg");
	this.shape_175.setTransform(51.1,86.1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#19B7E4").s().p("AgHA5IAAhkIglAAIAAgNIBZAAIAAANIglAAIAABkg");
	this.shape_176.setTransform(40.3,86.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#19B7E4").s().p("AgPA2QgJgDgIgJQgIgJgDgJQgEgMAAgMQAAgMAEgKQAEgLAIgIQAHgIAKgEQALgEALAAQALAAALADQAKAFAGAGIgFAIIgCABIgCABIgDgCIgGgDIgIgDQgEgCgIAAQgIAAgHADQgGADgGAGQgFAFgDAIQgDAJAAAJQAAALADAIQACAIAHAGQAFAGAGACQAHADAIAAIAJAAIAIgCIAFgDIAIgGIABAAIADABIAGAHQgHAJgKAEQgKAEgOABQgLAAgLgFg");
	this.shape_177.setTransform(30.5,86.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#4D575B").s().p("AgjA5IAAhxIBHAAIAAANIg2AAIAAAlIArAAIAAAMIgrAAIAAAmIA2AAIAAANg");
	this.shape_178.setTransform(134.8,65.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#4D575B").s().p("AAeA5IAAhWIABgIIgDAHIg2BSQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgMAAIAAhxIARAAIAABWIgBAIIAGgNIAzhMQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAIANAAIAABxg");
	this.shape_179.setTransform(123.7,65.1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#4D575B").s().p("AAfA5IgEgBIgfgtIgEgFQgEgBgDAAIgOAAIAAA0IgQAAIAAhxIAQAAIAAAxIAPAAIADgBIADgBIAegrIADgDIAFgBIANAAIgiAuQgDAGgGACQACABAEACIAoA4g");
	this.shape_180.setTransform(112.9,65.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#4D575B").s().p("AgPA3QgKgFgIgIQgGgHgEgMQgEgKAAgNQAAgNAEgJQAEgLAHgIQAIgIAKgEQAKgEAMgBQAMAAAJAFQALAEAGAGIgGAIIgBABIgCABIgEgCIgEgEIgJgCQgEgCgIAAQgIAAgHADQgGADgHAFQgEAGgDAJQgEAIAAAJQAAALAEAIQACAHAGAHQAFAFAHADQAHADAIABIAJgBIAHgCIAGgDIAIgGIABAAIACABIAHAHQgIAJgKAEQgJAEgPAAQgKAAgLgDg");
	this.shape_181.setTransform(101.7,65.1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#4D575B").s().p("AAeA5IAAg0Ig7AAIAAA0IgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_182.setTransform(90,65.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#4D575B").s().p("AAeA5IAAgxIgQAAIgEABIgDABIgDADIgEAEIgXAiIgEAEQgCACgEAAIgMAAIAdgpQAEgHAHgEQgHAAgFgEQgGgCgCgDQgEgFgBgEQgCgFAAgGQAAgHADgGQADgHAFgDQAGgFAHgCQAGgCAKAAIAmAAIAABxgAgCgqIgIAEQgDADgBADIgCAIQAAAFACAEQABAEADACQACACAGACQADABAHAAIAWAAIAAgnIgWAAQgHAAgDABg");
	this.shape_183.setTransform(77.9,65.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#4D575B").s().p("AgmA5IAAhxIAQAAIAAAwIAWAAQAIAAAJADQAIACAFADQAFAFACAFQADAGAAAHQAAAIgEAGQgBAGgHAFQgEAEgIADQgJACgHAAgAgWAsIAWAAIAKgBQAEgCADgDQAEgCABgEQABgDAAgFIgBgIQgCgEgDgCIgHgEIgggBg");
	this.shape_184.setTransform(68.9,65.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#4D575B").s().p("AgwA5QAAAAgBgBQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgKIAFAAIAHgBQADgCADgDIAFgLIAFgSQACgIABgTIADgnIBDAAIAAByIgQAAIAAhlIgkAAIgDAmQgCASgDAJQgCALgEAHQgCAHgFAFQgEAEgFABIgKACg");
	this.shape_185.setTransform(57,65.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#4D575B").s().p("AApA5IgDgBIgCgDIgLgbIgxAAIgLAbIgCADQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgNAAIAuhxIAPAAIAuBxgAgBgjIgTAxIApAAIgVg3g");
	this.shape_186.setTransform(46.3,65.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#4D575B").s().p("AgHA5IAAhkIglAAIAAgNIBZAAIAAANIglAAIAABkg");
	this.shape_187.setTransform(37.3,65.1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#4D575B").s().p("AAeA5IAAhPIABgPIgGANIgzBMIgDADQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgLAAIAAhxIAQAAIgBBeIAGgNIAzhMIADgEIAFgBIALAAIAABxg");
	this.shape_188.setTransform(26.4,65.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.lf(["#408734","#32702B","#7CAD35","#387B2F"],[0,0.298,0.671,1],11.1,-7.8,-10.3,8.9).s().p("AicAWIgoguQArAqBCgTQBNgiAngKQAegIAYAEQAbAGAcAWQATAOAoAxQgKgLgJgGQgcgWgbgFQgYgEgeAHQgoAKhMAiQgWAHgSAAQgoAAgdgeg");
	this.shape_189.setTransform(86.3,147.8,1.1,1.1);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.lf(["#F2F3F3","#D3D4D6","#FFFFFF","#DEDFE0"],[0,0.31,0.671,1],12,-7.5,-10.2,9.3).s().p("AifAWIgngtQArApBCgUQBNghAmgLQAegHAYAEQAbAFAdAWQAKAIAVAXIAgAmQgNgOgLgIQgcgWgbgFQgYgEgeAHQgoAKhMAiQgVAGgTAAQgoAAgdgdg");
	this.shape_190.setTransform(82.2,142.6,1.1,1.1);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.lf(["#A7000D","#890009","#C83F27","#860008"],[0,0.298,0.659,1],11.4,-7.5,-10,9.3).s().p("AifAYIgmgsQArAnBBgUQBMghAmgLQAegHAYAEQAbAGAcAWQAPALAxA5QgOgQgLgJQgcgWgcgEQgYgEgeAHQgnAKhLAhQgWAHgUAAQgmAAgcgag");
	this.shape_191.setTransform(78.1,137.5,1.1,1.1);

	var maskedShapeInstanceList = [this.shape_162,this.shape_163,this.shape_164,this.shape_165,this.shape_166,this.shape_167,this.shape_168,this.shape_169,this.shape_170,this.shape_171,this.shape_172,this.shape_173,this.shape_174,this.shape_175,this.shape_176,this.shape_177,this.shape_178,this.shape_179,this.shape_180,this.shape_181,this.shape_182,this.shape_183,this.shape_184,this.shape_185,this.shape_186,this.shape_187,this.shape_188,this.shape_189,this.shape_190,this.shape_191];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162}]}).to({state:[]},80).wait(316));

	// bg
	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#ECF1F6").s().p("Ay1fWMAAAg+rMAlrAAAMAAAA+rg");
	this.shape_192.setTransform(80,300,0.663,1.496);

	this.timeline.addTween(cjs.Tween.get(this.shape_192).wait(396));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,299.5,376.9,622.6);
// library properties:
lib.properties = {
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/160x600_atlas_NP_.jpg", id:"160x600_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;