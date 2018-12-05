(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"160x600_atlas_NP_", frames: [[0,272,180,270],[0,0,180,270],[0,544,180,270]]}
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
p.nominalBounds = new cjs.Rectangle(0,0,140,152);


(lib.p2 = function() {
	this.spriteSheet = ss["160x600_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.p3 = function() {
	this.spriteSheet = ss["160x600_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.p4 = function() {
	this.spriteSheet = ss["160x600_atlas_NP_"];
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
	this.instance.setTransform(20,59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1_1, new cjs.Rectangle(20,59,140,152), null);


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

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(317));

	// legal
	this.addr2 = new lib.dfgdfggg();
	this.addr2.parent = this;
	this.addr2.setTransform(5,564.8);

	this.timeline.addTween(cjs.Tween.get(this.addr2).wait(317));

	// logo
	this.instance = new lib.ClipGroup_8();
	this.instance.parent = this;
	this.instance.setTransform(97,479.6,1,1,0,0,0,53.1,10.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(317));

	// wave
	this.instance_1 = new lib.ClipGroup_9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(72.8,445.7,0.737,1,0,0,0,255.6,126.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(317));

	// p4.jpg
	this.instance_2 = new lib.p4_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(130,300,1,1,0,0,0,130,120);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(237).to({_off:false},0).to({x:120,alpha:1},5,cjs.Ease.get(1)).wait(69).to({x:110,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// p3.jpg
	this.instance_3 = new lib.p3_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(130,300,1,1,0,0,0,130,120);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(158).to({_off:false},0).to({x:120,alpha:1},5,cjs.Ease.get(1)).wait(69).to({x:110,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(79));

	// p2.jpg
	this.instance_4 = new lib.p2_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(130,300,1,1,0,0,0,130,120);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(79).to({_off:false},0).to({x:120,alpha:1},5,cjs.Ease.get(1)).wait(69).to({x:110,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(158));

	// p1.jpg
	this.instance_5 = new lib.p1_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(130,300,1,1,0,0,0,130,120);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:120,alpha:1},5,cjs.Ease.get(1)).wait(69).to({x:110,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(237));

	// mask - копия: 2 - копия (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_237 = new cjs.Graphics().p("ACkQFIAAgTMgvzAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDYkFIAAAAIAAgJMAqyAAAMAAAAgJgACxPyg");
	var mask_graphics_238 = new cjs.Graphics().p("ACkQFIAAgTMgvzAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDYkFIAAAAIAAgJMAqyAAAMAAAAgJgACxPyg");
	var mask_graphics_239 = new cjs.Graphics().p("ACkQFIAAgTMgvzAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDYkFIAAAAIAAgJMAqyAAAMAAAAgJgACxPyg");
	var mask_graphics_240 = new cjs.Graphics().p("ACkQFIAAgTMgvzAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDYkFIAAAAIAAgJMAqyAAAMAAAAgJgACxPyg");
	var mask_graphics_241 = new cjs.Graphics().p("ACjQFIAAgTMgvyAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDXkFIAAAAIAAgJMAqzAAAMAAAAgJgACxPyg");
	var mask_graphics_242 = new cjs.Graphics().p("ACjQFIAAgTMgvyAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDXkFIAAAAIAAgJMAqzAAAMAAAAgJgACxPyg");
	var mask_graphics_243 = new cjs.Graphics().p("ACkQFIAAgTMgvzAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDYkFIAAAAIAAgJMAqyAAAMAAAAgJgACxPyg");
	var mask_graphics_244 = new cjs.Graphics().p("ACjQFIAAgTMgvyAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDXkFIAAAAIAAgJMAqzAAAMAAAAgJgACxPyg");
	var mask_graphics_245 = new cjs.Graphics().p("ACjQFIAAgTMgvyAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDXkFIAAAAIAAgJMAqzAAAMAAAAgJgACxPyg");
	var mask_graphics_308 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_graphics_309 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_graphics_310 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_graphics_311 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_graphics_312 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_graphics_313 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_graphics_314 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_graphics_315 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_graphics_316 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(237).to({graphics:mask_graphics_237,x:263.9,y:144.4}).wait(1).to({graphics:mask_graphics_238,x:195.3,y:144.4}).wait(1).to({graphics:mask_graphics_239,x:135.9,y:144.4}).wait(1).to({graphics:mask_graphics_240,x:85.5,y:144.4}).wait(1).to({graphics:mask_graphics_241,x:44.4,y:144.4}).wait(1).to({graphics:mask_graphics_242,x:12.3,y:144.4}).wait(1).to({graphics:mask_graphics_243,x:-10.5,y:144.4}).wait(1).to({graphics:mask_graphics_244,x:-24.2,y:144.4}).wait(1).to({graphics:mask_graphics_245,x:-28.8,y:144.4}).wait(1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_graphics_308,x:140.5,y:147.7}).wait(1).to({graphics:mask_graphics_309,x:70.3,y:147.7}).wait(1).to({graphics:mask_graphics_310,x:9.4,y:147.7}).wait(1).to({graphics:mask_graphics_311,x:-42.2,y:147.7}).wait(1).to({graphics:mask_graphics_312,x:-84.4,y:147.7}).wait(1).to({graphics:mask_graphics_313,x:-117.1,y:147.7}).wait(1).to({graphics:mask_graphics_314,x:-140.6,y:147.7}).wait(1).to({graphics:mask_graphics_315,x:-154.6,y:147.7}).wait(1).to({graphics:mask_graphics_316,x:-159.3,y:147.7}).wait(1));

	// t4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#408734","#32702B","#7CAD35","#387B2F"],[0,0.298,0.671,1],11.1,-7.8,-10.3,8.9).s().p("AicAWIgoguQArAqBCgTQBNgiAngKQAegIAYAEQAbAGAcAWQATAOAoAxQgKgLgJgGQgcgWgbgFQgYgEgeAHQgoAKhMAiQgWAHgSAAQgoAAgdgeg");
	this.shape_1.setTransform(86.3,147.8,1.1,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#F2F3F3","#D3D4D6","#FFFFFF","#DEDFE0"],[0,0.31,0.671,1],12,-7.5,-10.2,9.3).s().p("AifAWIgngtQArApBCgUQBNghAmgLQAegHAYAEQAbAFAdAWQAKAIAVAXIAgAmQgNgOgLgIQgcgWgbgFQgYgEgeAHQgoAKhMAiQgVAGgTAAQgoAAgdgdg");
	this.shape_2.setTransform(82.2,142.6,1.1,1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#A7000D","#890009","#C83F27","#860008"],[0,0.298,0.659,1],11.4,-7.5,-10,9.3).s().p("AifAYIgmgsQArAnBBgUQBMghAmgLQAegHAYAEQAbAGAcAWQAPALAxA5QgOgQgLgJQgcgWgcgEQgYgEgeAHQgnAKhLAhQgWAHgUAAQgmAAgcgag");
	this.shape_3.setTransform(78.1,137.5,1.1,1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#19B7E4").s().p("AgiA5IAAhxIBFAAIAAANIg1AAIAAAlIArAAIAAAMIgrAAIAAAmIA1AAIAAANg");
	this.shape_4.setTransform(119.6,97,0.88,0.88);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#19B7E4").s().p("AAeA5IAAgzIg7AAIAAAzIgRAAIAAhxIARAAIAAAzIA7AAIAAgzIARAAIAABxg");
	this.shape_5.setTransform(109.8,97,0.88,0.88);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#19B7E4").s().p("AAeA5IAAgzIg7AAIAAAzIgRAAIAAhxIARAAIAAAzIA7AAIAAgzIARAAIAABxg");
	this.shape_6.setTransform(99.1,97,0.88,0.88);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#19B7E4").s().p("AgWA2QgLgEgHgIQgGgGgGgNQgEgLAAgMQAAgLAEgLQAFgMAHgHQAHgIALgFQALgDALAAQAMAAALADQAKAFAIAIQAIAIADALQAFAKAAAMQAAANgFAKQgEALgHAIQgIAIgKAEQgKAEgNAAQgMAAgKgEgAgQgoQgHADgFAGQgFAEgDAJQgDAJAAAJQAAALADAHQADAJAFAFQAFAGAHADQAIADAIAAQAJAAAHgDQAHgCAGgHQAGgGACgIQADgHAAgLQAAgJgDgJQgCgIgGgFQgGgHgHgCQgHgDgJAAQgIAAgIADg");
	this.shape_7.setTransform(88.1,97,0.88,0.88);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#19B7E4").s().p("AgwA5QgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAgKIAFAAIAGgBQAEgCACgDQAEgFACgGQADgKABgIQADgMABgPIACgnIBEAAIAABxIgQAAIAAhkIgkAAQgBAWgCAQIgFAaQgCALgEAIQgEAIgDAEQgEAEgFABQgEACgGAAg");
	this.shape_8.setTransform(76.7,97,0.88,0.88);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#19B7E4").s().p("AgWA2QgKgEgIgIQgIgIgEgLQgDgJAAgOQAAgNADgJQAEgLAIgIQAHgIALgFQALgDALAAQAMAAALADQALAFAHAIQAIAIAEALQADAJAAANQAAAOgDAJQgFALgHAIQgIAIgKAEQgLAEgMAAQgLAAgLgEgAgQgoQgHACgFAHQgEAEgEAJQgDAJAAAJQAAALADAHQADAJAFAFQAGAHAGACQAIADAIAAQAJAAAIgDQAGgCAGgHQAFgFADgJQADgHAAgLQAAgJgDgJQgEgJgEgEQgGgHgGgCQgIgDgJAAQgIAAgIADg");
	this.shape_9.setTransform(66.9,97,0.88,0.88);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#19B7E4").s().p("AAfA5IgEgBIgfgtQgDgEgCAAQgCgCgEAAIgOAAIAAA0IgQAAIAAhxIAQAAIAAAyIAMAAIAGgBIAFgFIAcgoIADgDQABAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAIAOAAIgiAvQgDAFgGACQAEACACABIAGAHIAiAxg");
	this.shape_10.setTransform(57.6,97,0.88,0.88);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#19B7E4").s().p("AgoA5IAAhxIAlAAQAIAAAKACQAHACAFAEQAEACAEAHQACAGAAAHIgBAIIgEAHIgHAGIgJAEQAMACAGAGQAHAHAAALQAAAGgDAHQgDAGgFAEQgEAEgJADQgGACgLAAgAgXAsIAXAAQAHAAAEgBIAIgEQADgDABgEIABgIQAAgJgGgEQgFgFgNAAIgXAAgAgXgFIAegBIAHgEIAFgGQACgEAAgEQAAgKgGgFQgGgEgMAAIgUAAg");
	this.shape_11.setTransform(44.4,97,0.88,0.88);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4D575B").s().p("AAuA5IAAhZIgnBGIgCACIgDABIgCAAQgEAAgCgDIgohGIABAEIAABVIgOAAIAAhxIAMAAIAEAAIACADIAmBEIADAJIAEgJIAmhEIACgDIAEAAIAMAAIAABxg");
	this.shape_12.setTransform(144.1,78.5,0.88,0.88);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4D575B").s().p("AAeA5IAAhWIABgIIgGANIgzBMQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgNAAIAAhxIARAAIgBBeIADgHIADgGIA2hQIAFgBIAMAAIAABxg");
	this.shape_13.setTransform(132.2,78.5,0.88,0.88);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4D575B").s().p("AhHA5IAAhxIARAAIAABkIAvAAIAAhkIAPAAIAABkIAvAAIAAhkIARAAIAABxg");
	this.shape_14.setTransform(119.2,78.5,0.88,0.88);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4D575B").s().p("AgaA5QgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIAAgKIAFAAIAEgBQABAAAAAAQABAAAAAAQABAAAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAgBQACgBACgEIAFgLIguhQIAPAAIAEABIACADIAbAyIAEALIACgGIAag3IACgDQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAIANAAIguBjIgEAIIgGAEIgGADIgHABg");
	this.shape_15.setTransform(107.3,78.6,0.88,0.88);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4D575B").s().p("AgPA2QgJgEgIgIQgIgIgDgLQgEgKAAgNQAAgMAEgLQAEgJAIgJQAHgIALgEQAKgFALAAQANAAAJAFQAKAEAGAGIgFAIIgCABIgCABIgDgCIgGgEIgIgDQgFgCgHABQgIAAgHACQgGAEgGAFQgEAFgEAJQgDAIAAAKQAAAKADAJQADAIAGAFQADAGAIADQAHADAIAAIAJAAIAHgCIAHgEIAHgFIABAAIADABIAGAHQgHAJgKAEQgJAEgPAAQgMAAgKgEg");
	this.shape_16.setTransform(98.3,78.6,0.88,0.88);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4D575B").s().p("AAeA5IAAhWIABgIIgGANIgzBMQgBABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgNAAIAAhxIARAAIAABWIgBAIIADgHIA2hSIADgEQABAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAIANAAIAABxg");
	this.shape_17.setTransform(84.5,78.5,0.88,0.88);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4D575B").s().p("AAuA5IAAhVIAAgEIgnBGIgCACIgDABIgCAAQgEAAgCgDIgnhGIAAAEIABAEIAABRIgPAAIAAhxIAMAAIAEAAIACADIAmBEIADAJIAEgJIAmhEIADgDIACAAIANAAIAABxg");
	this.shape_18.setTransform(69.1,78.5,0.88,0.88);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4D575B").s().p("AgiA5IAAhxIBFAAIAAANIg1AAIAAAlIArAAIAAAMIgrAAIAAAmIA1AAIAAANg");
	this.shape_19.setTransform(58.8,78.5,0.88,0.88);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4D575B").s().p("AApA5IgEgBIgBgDIgLgaIgxAAIgLAaIgCADIgEABIgMAAIAuhxIAPAAIAuBxgAgUAPIApAAIgTgxIgCgGg");
	this.shape_20.setTransform(49.7,78.5,0.88,0.88);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4D575B").s().p("AgmA5IAAhxIAjAAQAJAAAJACQAIADAFAFQAFAEADAHQADAHAAAIQAAAIgDAGQgCAGgGAFQgFAFgJACQgIADgJAAIgSAAIAAAqgAgVACIASAAIAKgCQAEAAAFgEIAFgHQABgEAAgFQAAgGgBgEQgCgEgDgDQgDgDgGgCQgEgBgGAAIgSAAg");
	this.shape_21.setTransform(41.8,78.5,0.88,0.88);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4D575B").s().p("AAeA5IAAhWIABgIIgDAHIg2BSQAAABgBAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgMAAIAAhxIARAAIAABWIgBAIIAGgNIAzhMIADgEQABAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAIANAAIAABxg");
	this.shape_22.setTransform(31.7,78.5,0.88,0.88);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#4D575B").s().p("AgIA5IAAhjIgkAAIAAgOIBZAAIAAAOIglAAIAABjg");
	this.shape_23.setTransform(22.2,78.5,0.88,0.88);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4D575B").s().p("AgPA2QgKgFgHgHQgHgHgEgMQgEgJAAgOQAAgLAEgMQADgJAIgJQAIgIAKgEQALgFALAAQANAAAJAFQAKAEAGAGIgFAIIgCABIgBABIgEgCIgFgEIgJgDQgFgCgHABQgIAAgHACQgHAEgGAFQgEAGgEAIQgCAJAAAJQAAAKADAJQADAJAFAEQAEAGAJADQAGADAIAAIAIAAIAIgCIAGgEIAHgEIABgBIABAAIACABIAHAHQgHAIgKAFQgLAEgOAAQgLAAgKgEg");
	this.shape_24.setTransform(13.5,78.6,0.88,0.88);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},237).wait(80));

	// mask - копия: 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_158 = new cjs.Graphics().p("ACkQFIAAgTMgvzAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDYkFIAAAAIAAgJMAqyAAAMAAAAgJgACxPyg");
	var mask_1_graphics_159 = new cjs.Graphics().p("ACkQFIAAgTMgvzAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDYkFIAAAAIAAgJMAqyAAAMAAAAgJgACxPyg");
	var mask_1_graphics_160 = new cjs.Graphics().p("ACkQFIAAgTMgvzAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDYkFIAAAAIAAgJMAqyAAAMAAAAgJgACxPyg");
	var mask_1_graphics_161 = new cjs.Graphics().p("ACkQFIAAgTMgvzAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDYkFIAAAAIAAgJMAqyAAAMAAAAgJgACxPyg");
	var mask_1_graphics_162 = new cjs.Graphics().p("ACjQFIAAgTMgvyAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDXkFIAAAAIAAgJMAqzAAAMAAAAgJgACxPyg");
	var mask_1_graphics_163 = new cjs.Graphics().p("ACjQFIAAgTMgvyAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDXkFIAAAAIAAgJMAqzAAAMAAAAgJgACxPyg");
	var mask_1_graphics_164 = new cjs.Graphics().p("ACkQFIAAgTMgvzAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDYkFIAAAAIAAgJMAqyAAAMAAAAgJgACxPyg");
	var mask_1_graphics_165 = new cjs.Graphics().p("ACjQFIAAgTMgvyAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDXkFIAAAAIAAgJMAqzAAAMAAAAgJgACxPyg");
	var mask_1_graphics_166 = new cjs.Graphics().p("ACjQFIAAgTMgvyAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDXkFIAAAAIAAgJMAqzAAAMAAAAgJgACxPyg");
	var mask_1_graphics_229 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_1_graphics_230 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_1_graphics_231 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_1_graphics_232 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_1_graphics_233 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_1_graphics_234 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_1_graphics_235 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_1_graphics_236 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_1_graphics_237 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(158).to({graphics:mask_1_graphics_158,x:263.9,y:144.4}).wait(1).to({graphics:mask_1_graphics_159,x:195.3,y:144.4}).wait(1).to({graphics:mask_1_graphics_160,x:135.9,y:144.4}).wait(1).to({graphics:mask_1_graphics_161,x:85.5,y:144.4}).wait(1).to({graphics:mask_1_graphics_162,x:44.4,y:144.4}).wait(1).to({graphics:mask_1_graphics_163,x:12.3,y:144.4}).wait(1).to({graphics:mask_1_graphics_164,x:-10.5,y:144.4}).wait(1).to({graphics:mask_1_graphics_165,x:-24.2,y:144.4}).wait(1).to({graphics:mask_1_graphics_166,x:-28.8,y:144.4}).wait(1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_1_graphics_229,x:140.5,y:147.7}).wait(1).to({graphics:mask_1_graphics_230,x:70.3,y:147.7}).wait(1).to({graphics:mask_1_graphics_231,x:9.4,y:147.7}).wait(1).to({graphics:mask_1_graphics_232,x:-42.2,y:147.7}).wait(1).to({graphics:mask_1_graphics_233,x:-84.4,y:147.7}).wait(1).to({graphics:mask_1_graphics_234,x:-117.1,y:147.7}).wait(1).to({graphics:mask_1_graphics_235,x:-140.6,y:147.7}).wait(1).to({graphics:mask_1_graphics_236,x:-154.6,y:147.7}).wait(1).to({graphics:mask_1_graphics_237,x:-159.3,y:147.7}).wait(80));

	// t3
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#19B7E4").s().p("AApA5IgDgBQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIgLgaIgxAAIgKAaIgDADIgDABIgNAAIAuhxIAPAAIAuBxgAgBgiIgTAxIApAAIgSgsIgDgMg");
	this.shape_25.setTransform(130.5,106.6,0.88,0.88);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#19B7E4").s().p("AgoA5IAAhxIAlAAQAHAAAKACQAIACAFAEQAFAEACAFQADAHAAAGQAAAEgCAEIgEAHIgGAGQgFADgFABQAMACAHAGQAHAIAAAKQAAAHgDAGQgDAGgFAEQgFAEgIADQgGACgLAAgAgYAsIAYAAQAGAAAFgBQAFgCACgCQADgDACgEQABgDAAgFQAAgJgGgEQgFgFgNAAIgYAAgAgYgFIAUAAQAGAAAEgCQAEAAAEgDQADgCACgEQABgEAAgEQAAgKgGgFQgGgEgLAAIgVAAg");
	this.shape_26.setTransform(121.6,106.6,0.88,0.88);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#19B7E4").s().p("AgHA5IAAhjIglAAIAAgOIBZAAIAAAOIglAAIAABjg");
	this.shape_27.setTransform(112.6,106.6,0.88,0.88);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#19B7E4").s().p("AgPA2QgKgEgHgIQgIgIgDgLQgEgJAAgOQAAgNAEgKQADgJAIgKQAJgHAJgEQALgFALAAQANAAAJAFQAKAEAGAGIgHAJIgCABIgEgCIgEgEIgJgDQgFgCgHABQgIAAgHACQgHADgGAGQgEAGgEAIQgDAJAAAJQAAAKADAJQAEAIAFAFQAFAGAHADQAHADAHAAIAJAAIAIgCIAOgJIABAAIACABIAHAHQgIAJgJAEQgKAFgPgBQgLABgKgFg");
	this.shape_28.setTransform(104,106.7,0.88,0.88);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#19B7E4").s().p("AAeA5IAAgzIg7AAIAAAzIgRAAIAAhxIARAAIAAAzIA7AAIAAgzIARAAIAABxg");
	this.shape_29.setTransform(93.7,106.6,0.88,0.88);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#19B7E4").s().p("AApA5IgDgBIgCgDIgLgaIgxAAIgLAaIgCADIgDABIgNAAIAuhxIAPAAIAuBxgAgBgiIgTAxIApAAIgVg4g");
	this.shape_30.setTransform(83.6,106.6,0.88,0.88);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#19B7E4").s().p("AgmA5IAAhxIAjAAQAJAAAJACQAIADAFAFQAGAEACAHQADAHAAAIQAAAIgDAGQgEAHgEAEQgGAFgIACQgHADgKAAIgSAAIAAAqgAgVACIASAAQAFAAAFgCQAFAAADgEQAEgCABgFQACgEAAgFQAAgGgCgEQgBgEgDgDQgEgDgFgCQgFgBgFAAIgSAAg");
	this.shape_31.setTransform(75.7,106.6,0.88,0.88);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#19B7E4").s().p("AgIA5IAAhjIgkAAIAAgOIBZAAIAAAOIglAAIAABjg");
	this.shape_32.setTransform(66.9,106.6,0.88,0.88);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#19B7E4").s().p("AgPA2QgLgFgGgHQgHgHgEgMQgEgJAAgOQAAgLAEgMQAEgJAHgKQAIgHAKgEQALgFALAAQANAAAIAFQALAEAGAGIgFAIIgCABIgBABQgBgBAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIgGgEIgIgDQgEgCgIABQgIAAgHACQgHAEgGAFQgFAGgCAIQgDAHAAALQAAAJADAKQADAIAFAFQAEAGAIADQAHADAIAAIAJAAIAHgCIAGgEIAGgEIACgBIABAAIACABIAHAHQgHAJgKAEQgKAFgOgBQgMABgKgFg");
	this.shape_33.setTransform(58.2,106.7,0.88,0.88);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#19B7E4").s().p("AgWA2QgLgEgHgIQgIgIgEgLQgEgJAAgOQAAgNAEgKQAEgKAIgIQAHgIALgEQALgFALAAQAMAAALAFQALAEAHAIQAIAIADAKQAFALAAAMQAAANgFAKQgEALgHAIQgIAIgKAEQgKAFgNgBQgMABgKgFgAgQgpQgHADgFAGQgFAFgDAKQgDAIAAAJQAAAKADAJQADAIAFAFQAGAHAGACQAIADAIAAQAJAAAHgDQAHgCAGgHQAGgHACgGQADgJAAgKQAAgJgDgIQgCgIgGgHQgGgGgHgDQgHgCgJAAQgIAAgIACg");
	this.shape_34.setTransform(47.7,106.7,0.88,0.88);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#19B7E4").s().p("AgmA5IAAhxIAjAAQAJAAAJACQAIADAFAFQAFAEADAHQADAHAAAIQAAAIgDAGQgCAGgGAFQgFAFgJACQgHADgKAAIgSAAIAAAqgAgVACIASAAIAKgCQAFAAADgEIAGgHQABgEAAgFQAAgGgBgEQgCgEgDgDQgEgDgFgCQgEgBgGAAIgSAAg");
	this.shape_35.setTransform(38.2,106.6,0.88,0.88);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#19B7E4").s().p("AAcA5IAAhkIg3AAIAABkIgQAAIAAhxIBYAAIAABxg");
	this.shape_36.setTransform(28.4,106.6,0.88,0.88);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#19B7E4").s().p("AAeA5IAAgxIgQAAIgEABIgDABIgDADIgEAEIgXAjIgEAEQgDABgDAAIgMAAIAdgpQAEgHAHgDIgMgEQgGgDgCgDIgFgJQgCgFAAgFQAAgHADgHQADgGAFgEQAFgFAIgCQAIgCAIAAIAmAAIAABxgAgCgqIgIAEIgEAGIgCAIQAAAFACAEIAEAGQAEADAEABQADABAHAAIAWAAIAAgnIgWAAQgHAAgDABg");
	this.shape_37.setTransform(116.4,88.2,0.88,0.88);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#19B7E4").s().p("AAeA5IAAhWIABgIIgDAHIg2BSQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgMAAIAAhxIARAAIAABWIgBAIIAGgNIAzhMIADgEQABAAAAAAQABgBAAAAQAAAAABAAQABAAAAAAIANAAIAABxg");
	this.shape_38.setTransform(107,88.2,0.88,0.88);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#19B7E4").s().p("AAuA5IAAhZIgnBGIgCACIgDABIgCAAQgEAAgCgDIgnhGIAAAEIAABVIgOAAIAAhxIAMAAIAEAAIACADIAnBEIACAJIAEgJIAmhEIACgDIAEAAIAMAAIAABxg");
	this.shape_39.setTransform(95,88.2,0.88,0.88);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#19B7E4").s().p("AgWA2QgKgFgIgHQgHgIgEgKQgFgMAAgMQAAgMAFgLQADgKAIgIQAHgIALgEQALgEALAAQAMAAALAEQALAEAHAIQAIAIAEAKQAEAKAAANQAAAOgEAKQgEAKgIAIQgHAHgLAFQgKAFgNAAQgLAAgLgFgAgPgpQgHAEgGAFQgFAGgDAIQgDAJAAAJQAAALADAHQACAIAGAHQAGAFAHADQAHADAIAAQAJAAAIgDQAGgDAGgFQAFgGADgJQADgHAAgLQAAgJgDgJQgDgJgFgFQgFgFgHgEQgIgDgJAAQgIAAgHADg");
	this.shape_40.setTransform(82.9,88.2,0.88,0.88);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#19B7E4").s().p("AAeA5IAAgzIg7AAIAAAzIgRAAIAAhxIARAAIAAAzIA7AAIAAgzIARAAIAABxg");
	this.shape_41.setTransform(71.9,88.2,0.88,0.88);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#19B7E4").s().p("AgWA2QgKgFgIgHQgHgHgFgLQgEgNAAgLQAAgLAEgMQAFgKAHgIQAHgIALgEQALgEALAAQAMAAALAEQALAEAHAIQAHAHAFALQAEAMAAALQAAALgEANQgFAMgHAGQgHAHgLAFQgKAFgNAAQgMAAgKgFgAgPgpQgHAEgGAFQgFAGgDAIQgDAKAAAIQAAAJADAJQACAIAGAHQAGAFAHADQAHADAIAAQAJAAAIgDQAHgDAFgFQAFgGADgJQADgHAAgLQAAgKgDgIQgDgJgFgFQgFgFgHgEQgIgDgJAAQgIAAgHADg");
	this.shape_42.setTransform(60.9,88.2,0.88,0.88);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#19B7E4").s().p("AAfA5IgEgBIgDgEIgcgpIgFgFIgGgBIgOAAIAAA0IgQAAIAAhxIAQAAIAAAyIAMAAIADgBIADgBIACgBIADgDIAcgoIADgDIAEgBIAOAAIgiAvQgEAFgFACQAEACACABIAGAHIAiAxg");
	this.shape_43.setTransform(51.6,88.2,0.88,0.88);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#19B7E4").s().p("AgdA2QgKgEgIgJIAGgHIADgBIACAAIANAJIAHACIAJAAQAJAAAFgCQAHgCAFgGQAFgGADgHQADgFABgLIg4AAIAAgMIA4AAQAAgHgEgIQgFgIgEgEQgEgEgHgDQgHgCgHgBQgGABgGABIgIAEIgGADIgDABIgCAAIgHgJQAHgHAKgDQAHgEAOAAQAMAAAKAEQAKAEAIAHQAHAJAEAKQAEAKAAANQAAAOgDAKQgFAMgGAGQgJAIgJAEQgJAFgNAAQgOAAgJgFg");
	this.shape_44.setTransform(41.3,88.2,0.88,0.88);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#4D575B").s().p("AAeA5IAAgxIgQAAIgDABIgEABIgDADIgDAEIgXAjIgFAEQgDABgDAAIgNAAIAegpQAEgHAHgDIgMgEQgGgDgCgDIgFgJQgCgFABgFQgBgHADgHQADgGAFgEQAFgEAHgDQAJgCAIAAIAnAAIAABxgAgCgqQgFACgDACIgEAGIgBAIQAAAFABAEIAEAGQAEADADABQAFABAGAAIAWAAIAAgnIgWAAQgHAAgDABg");
	this.shape_45.setTransform(122.9,69.8,0.88,0.88);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#4D575B").s().p("AAqA5IgEgBIgCgDIgLgaIgyAAIgKAaIgCADIgDABIgNAAIAuhxIAPAAIAuBxgAgBgiIgTAxIApAAIgVg4g");
	this.shape_46.setTransform(114.1,69.8,0.88,0.88);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#4D575B").s().p("AAeA5IAAgzIg7AAIAAAzIgRAAIAAhxIARAAIAAAzIA7AAIAAgzIARAAIAABxg");
	this.shape_47.setTransform(103.9,69.8,0.88,0.88);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#4D575B").s().p("AgmA5IAAhxIAQAAIAAAxIAWAAQAIAAAJACQAIACAFAEQAEAEADAFQACAHAAAGQAAAHgCAHQgDAHgFAEQgGAFgHACQgGACgKAAgAgWAsIAWAAQAFAAAFgBIAHgEQADgDACgEIABgIIgBgIQgCgDgDgDQgCgCgFgCQgFgBgFAAIgWAAg");
	this.shape_48.setTransform(94.7,69.8,0.88,0.88);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#4D575B").s().p("AgwA5QgBAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAAAIAAgLIAHAAIAFgBQAEgBADgEIAFgKIAEgTQACgJACgRIADgoIBDAAIAAByIgQAAIAAhlIgkAAIgHBBQgEAMgDAHQgEAHgEAEQgDADgFACQgFACgFAAg");
	this.shape_49.setTransform(84.2,69.8,0.88,0.88);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#4D575B").s().p("AApA5IgDgBIgCgDIgKgaIgzAAIgKAaIgCADIgEABIgMAAIAuhxIAPAAIAuBxgAgDgdIgRAsIAoAAIgSgxIgCgHg");
	this.shape_50.setTransform(74.8,69.8,0.88,0.88);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#4D575B").s().p("AAfA5IgEgBIgDgEIgcgpIgFgFIgGgBIgOAAIAAA0IgQAAIAAhxIAQAAIAAAyIAMAAIADgBIADgBQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAAAIADgDIAcgoIADgDIAEgBIAOAAIgiAvQgFAFgEACQAEACACABQADADADAEIAiAxg");
	this.shape_51.setTransform(65.9,69.8,0.88,0.88);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#4D575B").s().p("AAeA5IABheIgGANIgzBMIgDAEQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgNAAIAAhxIARAAIgBBeIAGgNIA2hQIAFgBIAMAAIAABxg");
	this.shape_52.setTransform(55.2,69.8,0.88,0.88);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#4D575B").s().p("AAeA5IAAgzIg7AAIAAAzIgRAAIAAhxIARAAIAAAzIA7AAIAAgzIARAAIAABxg");
	this.shape_53.setTransform(44.4,69.8,0.88,0.88);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#4D575B").s().p("AgbA5QAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAgLIAFAAIAEAAIAEgCIAEgDIACgEIAGgMIguhQIAPAAIAEABIACADIAbAyIAEALIACgGIAag3IACgCQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAIAOAAIguBjIgEAIIgGAFIgGACIgHABg");
	this.shape_54.setTransform(34.7,69.8,0.88,0.88);

	var maskedShapeInstanceList = [this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},158).to({state:[]},80).wait(79));

	// mask - копия (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_79 = new cjs.Graphics().p("ACkQFIAAgTMgvzAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDYkFIAAAAIAAgJMAqyAAAMAAAAgJgACxPyg");
	var mask_2_graphics_80 = new cjs.Graphics().p("ACkQFIAAgTMgvzAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDYkFIAAAAIAAgJMAqyAAAMAAAAgJgACxPyg");
	var mask_2_graphics_81 = new cjs.Graphics().p("ACkQFIAAgTMgvzAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDYkFIAAAAIAAgJMAqyAAAMAAAAgJgACxPyg");
	var mask_2_graphics_82 = new cjs.Graphics().p("ACkQFIAAgTMgvzAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDYkFIAAAAIAAgJMAqyAAAMAAAAgJgACxPyg");
	var mask_2_graphics_83 = new cjs.Graphics().p("ACjQFIAAgTMgvyAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDXkFIAAAAIAAgJMAqzAAAMAAAAgJgACxPyg");
	var mask_2_graphics_84 = new cjs.Graphics().p("ACjQFIAAgTMgvyAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDXkFIAAAAIAAgJMAqzAAAMAAAAgJgACxPyg");
	var mask_2_graphics_85 = new cjs.Graphics().p("ACkQFIAAgTMgvzAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDYkFIAAAAIAAgJMAqyAAAMAAAAgJgACxPyg");
	var mask_2_graphics_86 = new cjs.Graphics().p("ACjQFIAAgTMgvyAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDXkFIAAAAIAAgJMAqzAAAMAAAAgJgACxPyg");
	var mask_2_graphics_87 = new cjs.Graphics().p("ACjQFIAAgTMgvyAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDXkFIAAAAIAAgJMAqzAAAMAAAAgJgACxPyg");
	var mask_2_graphics_150 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_2_graphics_151 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_2_graphics_152 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_2_graphics_153 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_2_graphics_154 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_2_graphics_155 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_2_graphics_156 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_2_graphics_157 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_2_graphics_158 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(79).to({graphics:mask_2_graphics_79,x:263.9,y:144.4}).wait(1).to({graphics:mask_2_graphics_80,x:195.3,y:144.4}).wait(1).to({graphics:mask_2_graphics_81,x:135.9,y:144.4}).wait(1).to({graphics:mask_2_graphics_82,x:85.5,y:144.4}).wait(1).to({graphics:mask_2_graphics_83,x:44.4,y:144.4}).wait(1).to({graphics:mask_2_graphics_84,x:12.3,y:144.4}).wait(1).to({graphics:mask_2_graphics_85,x:-10.5,y:144.4}).wait(1).to({graphics:mask_2_graphics_86,x:-24.2,y:144.4}).wait(1).to({graphics:mask_2_graphics_87,x:-28.8,y:144.4}).wait(1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_2_graphics_150,x:140.5,y:147.7}).wait(1).to({graphics:mask_2_graphics_151,x:70.3,y:147.7}).wait(1).to({graphics:mask_2_graphics_152,x:9.4,y:147.7}).wait(1).to({graphics:mask_2_graphics_153,x:-42.2,y:147.7}).wait(1).to({graphics:mask_2_graphics_154,x:-84.4,y:147.7}).wait(1).to({graphics:mask_2_graphics_155,x:-117.1,y:147.7}).wait(1).to({graphics:mask_2_graphics_156,x:-140.6,y:147.7}).wait(1).to({graphics:mask_2_graphics_157,x:-154.6,y:147.7}).wait(1).to({graphics:mask_2_graphics_158,x:-159.3,y:147.7}).wait(159));

	// t2
	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#19B7E4").s().p("AAtA5IAAhVIABgEIgnBFIgCADIgEABIgBAAQgEAAgCgEIgnhFIAAAEIAAAEIAABRIgOAAIAAhxIAPAAIADACIAnBFIACAIIAEgJIAmhEIACgCIAQAAIAABxg");
	this.shape_55.setTransform(137.2,97,0.88,0.88);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#19B7E4").s().p("AgPA3QgLgFgGgIQgHgHgEgMQgEgJAAgOQAAgMAEgLQAEgKAHgIQAIgIAKgEQAKgFAMAAQAMAAAJAFQALAEAGAGIgFAIIgCABIgCAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIgGgEIgIgDQgFgBgHAAQgIAAgHADQgIAEgEAEQgGAIgCAHQgDAGAAALQAAALADAIQADAJAFAEQAFAHAHACQAHAEAIAAIAJgBIAHgCIAGgDIAGgEIABgBIACgBIACABIAHAHQgHAJgKAEQgKAFgOgBQgLAAgLgDg");
	this.shape_56.setTransform(126.2,96.9,0.88,0.88);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#19B7E4").s().p("AgPA3QgIgEgGgHQgFgHgDgLQgEgLAAgPQAAgPAEgKQADgLAFgHQAGgHAIgEQAHgEAIAAQAJAAAHAEQAIAEAGAHQAFAHAEALQADALAAAOQAAAPgDALQgEAMgFAGQgGAHgIAEQgHAEgJgBQgIABgHgEgAgJgqQgFACgDAFQgDAEgDAKQgCAIAAANQAAAOACAIQADAKADAEQADAFAFADQAEACAFAAQAGAAAEgCQAFgDADgFQADgEADgKQACgKAAgMQAAgMgCgJQgDgKgDgEQgDgFgFgCQgEgCgGAAQgFAAgEACg");
	this.shape_57.setTransform(113.7,96.9,0.88,0.88);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#19B7E4").s().p("AANA5IAAgdIgxAAIgDgBIgCgDIgBgHIA2hKIAOAAIAABJIARAAIAAAJIgBACIgCABIgOAAIAAAdgAgaAQIAnAAIABg3g");
	this.shape_58.setTransform(105.4,96.9,0.88,0.88);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#19B7E4").s().p("AgHA5IAAhkIglAAIAAgNIBZAAIAAANIglAAIAABkg");
	this.shape_59.setTransform(93.7,97,0.88,0.88);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#19B7E4").s().p("AgWA2QgLgDgHgJQgIgIgEgLQgEgJAAgOQAAgNAEgKQAEgLAIgHQAIgIAKgEQAKgFAMAAQANAAAKAFQAJAEAJAIQAHAHAEALQAFALAAAMQAAANgFAKQgDALgIAIQgIAJgKADQgKAFgNgBQgMABgKgFgAgQgoQgIADgEAFQgFAGgDAJQgDAIAAAJQAAAKADAJQADAIAFAFQAGAHAGACQAIADAIAAQAJAAAHgDQAHgCAGgHQAGgHACgGQADgJAAgKQAAgJgDgIQgCgIgGgHQgFgFgIgDQgHgDgJAAQgIAAgIADg");
	this.shape_60.setTransform(84.4,96.9,0.88,0.88);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#19B7E4").s().p("AAeA5IAAg0Ig7AAIAAA0IgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_61.setTransform(69.8,97,0.88,0.88);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#19B7E4").s().p("AAeA5IAAhWIABgIIgGANIgzBMQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgNAAIAAhxIARAAIAABVIgBAJIADgHIA2hSQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAIAMAAIAABxg");
	this.shape_62.setTransform(59.1,97,0.88,0.88);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#19B7E4").s().p("AhHA5IAAhxIARAAIAABkIAvAAIAAhkIAPAAIAABkIAvAAIAAhkIARAAIAABxg");
	this.shape_63.setTransform(46.1,97,0.88,0.88);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#19B7E4").s().p("AAqA5QgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAAAgBIgLgbIgyAAIgKAbIgCADQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgNAAIAthxIAQAAIAuBxgAgBgjIgTAxIApAAIgSgsIgDgLg");
	this.shape_64.setTransform(33.8,97,0.88,0.88);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#19B7E4").s().p("AAtA5IAAhRIABgEIAAgEIgnBFIgCADIgEABIgBAAQgEAAgBgEIgohFIAAAEIAABVIgOAAIAAhxIAPAAIADACIApBNIAEgJIAmhEIACgCIAQAAIAABxg");
	this.shape_65.setTransform(22.5,97,0.88,0.88);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#4D575B").s().p("AAiA5IgDgBIgfgxIAAABIgeAuIgCACIgCABIgQAAIAng5Iglg4IAQAAIADABIABABIAdAtIAAgBIABgCIAcgqQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAIAPAAIglA3IAnA6g");
	this.shape_66.setTransform(141.1,78.5,0.88,0.88);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#4D575B").s().p("AApA5IAAhxIARAAIAABxgAg5A5IAAhxIARAAIAAAwIAVAAQAKABAIACQAHACAFADQAFAEACAGQADAHAAAGQAAAGgDAIQgDAHgFAEQgEADgIAEQgIACgJAAgAgoAsIAVAAQAHAAAEgBQAGgCACgDQACgCABgDIABgIIgBgJQgBgDgCgDQgCgCgGgCIgLgBIgVAAg");
	this.shape_67.setTransform(130.2,78.5,0.88,0.88);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#4D575B").s().p("AAeA5IAAgzIg7AAIAAAzIgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_68.setTransform(118.4,78.5,0.88,0.88);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#4D575B").s().p("AgmA5IAAhxIAQAAIAAAwIAWAAQAIABAJACQAIADAFACQAEAEADAGQACAFAAAIQAAAGgCAIQgDAHgFAEQgEADgJAEQgJACgHAAgAgWAsIAWAAQAFAAAFgBQAFgCACgDQADgCACgDQABgEAAgEQAAgFgBgEQgCgDgDgDQgCgDgFgBIgKgBIgWAAg");
	this.shape_69.setTransform(109.2,78.5,0.88,0.88);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#4D575B").s().p("AgwA5QgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIAAgLIAFAAIAGgBQAEgBACgEQAEgFACgFIAEgSQADgOABgNIACgoIBEAAIAAByIgQAAIAAhlIgkAAQgBAWgCARIgFAaIgGASQgDAHgEAFQgFAEgEACQgFABgFAAg");
	this.shape_70.setTransform(98.7,78.6,0.88,0.88);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#4D575B").s().p("AApA5IgEgBIgCgDIgKgaIgyAAIgKAaQAAABAAAAQAAABAAAAQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAIgNAAIAthxIAQAAIAuBxgAgUAPIApAAIgTgyIgCgGg");
	this.shape_71.setTransform(89.3,78.5,0.88,0.88);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#4D575B").s().p("AgmA5IAAhxIAjAAQAKAAAIACQAIACAFAGQAFADADAIQADAGAAAJQAAAHgDAHQgCAGgGAFQgFAFgJACQgIADgJAAIgSAAIAAAqgAgVACIASAAQADAAAHgCQAFgBAEgCIAFgIQABgEAAgFQAAgGgBgEQgBgDgEgEIgJgFIgKgCIgSAAg");
	this.shape_72.setTransform(81.4,78.5,0.88,0.88);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#4D575B").s().p("AAeA5IAAhWIABgIIgDAHIg2BSQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgMAAIAAhxIARAAIAABVIgBAJIAGgMIAzhNQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAIANAAIAABxg");
	this.shape_73.setTransform(71.4,78.5,0.88,0.88);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#4D575B").s().p("AgHA5IAAhkIglAAIAAgNIBZAAIAAANIglAAIAABkg");
	this.shape_74.setTransform(61.9,78.5,0.88,0.88);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#4D575B").s().p("AgPA2QgKgEgHgIQgHgHgEgLQgEgMAAgMQAAgLAEgMQAEgLAHgHQAIgIAKgEQALgFALABQALAAALADQAJAEAHAHIgFAHIgBACIgDAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIgGgDIgIgEQgFgBgHAAQgIAAgHADQgIAEgEAEQgGAHgDAIQgCAJAAAIQAAALADAIQADAIAFAGQAGAFAGAEQAHACAHAAIAJAAIAIgCIAGgDIAGgEIABgBIACgBIADABIAGAHQgHAIgKAFQgLAFgNAAQgLAAgLgFg");
	this.shape_75.setTransform(53.2,78.5,0.88,0.88);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#4D575B").s().p("AAeA5IAAgxIgQAAIgEABIgDABIgDACIgEAFIgWAjQgCACgDABQgCACgEAAIgNAAIAdgpQAGgIAGgCIgMgFIgIgFQgEgEgBgFQgBgEAAgHQgBgIADgFQAEgHAEgDQAGgFAGgCQAJgCAIAAIAmAAIAABxgAgDgqQgDABgEAEQgDABgBAEIgBAIQAAAGABADQABADADADIAHAEQAEACAGAAIAXAAIAAgoIgWAAQgHAAgEABg");
	this.shape_76.setTransform(39.4,78.5,0.88,0.88);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#4D575B").s().p("AgwA5QgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAAAIAAgLIAFAAIAGgBQAEgBADgEIAFgKIAFgSQACgJABgSIADgoIBDAAIAAByIgQAAIAAhlIgkAAIgIBBQgDAMgDAGQgDAHgEAFQgEAEgFACQgEABgGAAg");
	this.shape_77.setTransform(29.6,78.6,0.88,0.88);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#4D575B").s().p("AAuBHIAAgbIhaAAIAAAWQAAABgBABQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgJAAIAAgoIALAAIAFgEIAEgIIAFgMIADgSIAFg7IBEAAIAABlIASAAIAAAjQAAABAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAgAgRABIgGASIgGAMIA2AAIAAhYIgkAAg");
	this.shape_78.setTransform(19.5,79.7,0.88,0.88);

	var maskedShapeInstanceList = [this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55}]},79).to({state:[]},80).wait(158));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_0 = new cjs.Graphics().p("ACkQFIAAgTMgvzAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDYkFIAAAAIAAgJMAqyAAAMAAAAgJgACxPyg");
	var mask_3_graphics_1 = new cjs.Graphics().p("ACkQFIAAgTMgvzAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDYkFIAAAAIAAgJMAqyAAAMAAAAgJgACxPyg");
	var mask_3_graphics_2 = new cjs.Graphics().p("ACkQFIAAgTMgvzAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDYkFIAAAAIAAgJMAqyAAAMAAAAgJgACxPyg");
	var mask_3_graphics_3 = new cjs.Graphics().p("ACkQFIAAgTMgvzAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDYkFIAAAAIAAgJMAqyAAAMAAAAgJgACxPyg");
	var mask_3_graphics_4 = new cjs.Graphics().p("ACjQFIAAgTMgvyAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDXkFIAAAAIAAgJMAqzAAAMAAAAgJgACxPyg");
	var mask_3_graphics_5 = new cjs.Graphics().p("ACjQFIAAgTMgvyAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDXkFIAAAAIAAgJMAqzAAAMAAAAgJgACxPyg");
	var mask_3_graphics_6 = new cjs.Graphics().p("ACkQFIAAgTMgvzAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDYkFIAAAAIAAgJMAqyAAAMAAAAgJgACxPyg");
	var mask_3_graphics_7 = new cjs.Graphics().p("ACjQFIAAgTMgvyAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDXkFIAAAAIAAgJMAqzAAAMAAAAgJgACxPyg");
	var mask_3_graphics_8 = new cjs.Graphics().p("ACjQFIAAgTMgvyAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDXkFIAAAAIAAgJMAqzAAAMAAAAgJgACxPyg");
	var mask_3_graphics_71 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_3_graphics_72 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_3_graphics_73 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_3_graphics_74 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_3_graphics_75 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_3_graphics_76 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_3_graphics_77 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_3_graphics_78 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_3_graphics_79 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:mask_3_graphics_0,x:263.9,y:144.4}).wait(1).to({graphics:mask_3_graphics_1,x:195.3,y:144.4}).wait(1).to({graphics:mask_3_graphics_2,x:135.9,y:144.4}).wait(1).to({graphics:mask_3_graphics_3,x:85.5,y:144.4}).wait(1).to({graphics:mask_3_graphics_4,x:44.4,y:144.4}).wait(1).to({graphics:mask_3_graphics_5,x:12.3,y:144.4}).wait(1).to({graphics:mask_3_graphics_6,x:-10.5,y:144.4}).wait(1).to({graphics:mask_3_graphics_7,x:-24.2,y:144.4}).wait(1).to({graphics:mask_3_graphics_8,x:-28.8,y:144.4}).wait(1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_3_graphics_71,x:140.5,y:147.7}).wait(1).to({graphics:mask_3_graphics_72,x:70.3,y:147.7}).wait(1).to({graphics:mask_3_graphics_73,x:9.4,y:147.7}).wait(1).to({graphics:mask_3_graphics_74,x:-42.2,y:147.7}).wait(1).to({graphics:mask_3_graphics_75,x:-84.4,y:147.7}).wait(1).to({graphics:mask_3_graphics_76,x:-117.1,y:147.7}).wait(1).to({graphics:mask_3_graphics_77,x:-140.6,y:147.7}).wait(1).to({graphics:mask_3_graphics_78,x:-154.6,y:147.7}).wait(1).to({graphics:mask_3_graphics_79,x:-159.3,y:147.7}).wait(238));

	// t1
	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#19B7E4").s().p("AAgAoIAAg4IABgFIgbAvIgDACIgCABIgBAAIgCgBIgCgCIgcgwIABAGIAAA4IgOAAIAAhQIANAAIADABQAAAAABABQAAAAABAAQAAABAAAAQAAAAABABIAYAnIACAIIADgIIAYgnIADgDIAEgBIALAAIAABQg");
	this.shape_79.setTransform(131.7,107.1,0.88,0.88);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#19B7E4").s().p("AgKAnQgIgEgEgEQgEgFgDgJQgDgHAAgKQAAgHACgJQADgHAFgGQAFgGAHgDQAHgDAIAAQAIAAAIADQAHADAEAFIgEAFIgBACIgCAAIgDgBIgIgEIgIgBQgEAAgFACQgFACgDAEQgDAEgBAFQgCAGAAAGQAAAHACAGQACAFADAEQADAEAEACQADACAFAAIAJgBIAFgDIAEgDIADgBQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIAEAGQgDAEgDACIgHAEIgRADQgHAAgGgDg");
	this.shape_80.setTransform(123.5,107.1,0.88,0.88);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#19B7E4").s().p("AgPA3QgHgCgFgGQgFgDgDgJQgDgIAAgJQAAgHADgJIALgRIAcgmIADgDIAFgBIANAAIgmAxIAJgDIAJgBQAHAAAGACQAHACAEAEQAEAEADAGQADAHAAAHQAAAIgDAHQgCAHgGAFQgFAFgIADQgGADgJAAQgIAAgHgDgAgJAAQgFACgDADIgFAIQgBADAAAGQAAAFABAEQACAEADADQACAEAFABQAEACAGAAQAFAAAEgCQAEAAAEgFQADgCACgFQACgEAAgFQAAgGgCgFQgCgEgDgDIgHgEQgFgBgFAAQgFAAgEABg");
	this.shape_81.setTransform(112.4,105.7,0.88,0.88);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#19B7E4").s().p("AANA5IAAgdIgxAAIgDgBIgCgDIgBgHIA2hJIAPAAIAABIIAQAAIAAAJIAAACIgDABIgNAAIAAAdgAgaAQIAnAAIAAgxIABgGg");
	this.shape_82.setTransform(104.1,105.6,0.88,0.88);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#19B7E4").s().p("AApA5IgDgBIgCgCIgLgbIgxAAIgLAbIgCACIgEABIgMAAIAuhxIAQAAIAtBxgAgUAPIApAAIgTgxIgCgGg");
	this.shape_83.setTransform(91.8,105.6,0.88,0.88);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#19B7E4").s().p("AAeA5IAAgzIg7AAIAAAzIgRAAIAAhxIARAAIAAAzIA7AAIAAgzIARAAIAABxg");
	this.shape_84.setTransform(81.7,105.6,0.88,0.88);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#19B7E4").s().p("AAeA5IAAhWIABgIIgDAHIg2BSQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgMAAIAAhxIARAAIAABPIgBAPIAGgNIAzhMIADgDQABgBAAAAQAAgBABAAQAAAAABAAQABAAAAAAIANAAIAABxg");
	this.shape_85.setTransform(71,105.6,0.88,0.88);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#19B7E4").s().p("AhHA5IAAhxIARAAIAABlIAuAAIAAhlIAQAAIAABlIAvAAIAAhlIARAAIAABxg");
	this.shape_86.setTransform(58,105.6,0.88,0.88);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#19B7E4").s().p("AApA5IgEgBIgBgCIgKgbIgzAAIgKAbIgCACIgEABIgMAAIAthxIAQAAIAuBxgAgUAPIApAAIgUgxIgBgGg");
	this.shape_87.setTransform(45.7,105.6,0.88,0.88);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#19B7E4").s().p("AAtA5IAAhVIABgEIgnBGIgCACIgEABIgBAAQgEAAgCgDIgnhGIAAAEIAAAEIAABRIgOAAIAAhxIAMAAIADAAIADADIAnBEIACAJIAEgJIAmhEIACgDIAEAAIAMAAIAABxg");
	this.shape_88.setTransform(34.4,105.6,0.88,0.88);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#19B7E4").s().p("AAeA5IAAgwIgTAAIgEABIgEADIgaAnQgBACgDACQgCABgEAAIgNAAIAegpQAFgIAGgCIgMgEIgIgGIgFgJQgCgEAAgGQAAgIADgGQACgFAGgFQAFgFAIgCQAIgCAIAAIAmAAIAABxgAgDgqIgHAEQgEAEAAADQgCADAAAFIABAIQACADADADIAHAEIAhABIAAgnIgWAAQgHAAgEABg");
	this.shape_89.setTransform(145.8,87.2,0.88,0.88);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#19B7E4").s().p("AApA5IgDgBIgCgCIgKgbIgzAAIgKAbIgCACIgEABIgMAAIAuhxIAPAAIAuBxgAgUAPIApAAIgTgxIgCgGg");
	this.shape_90.setTransform(137,87.2,0.88,0.88);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#19B7E4").s().p("AAeA5IAAgzIg7AAIAAAzIgRAAIAAhxIARAAIAAAzIA7AAIAAgzIARAAIAABxg");
	this.shape_91.setTransform(126.8,87.2,0.88,0.88);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#19B7E4").s().p("AgmA5IAAhxIAQAAIAAAxIAWAAQAIAAAJACQAIADAEADQAFADADAGQACAHABAGQgBAIgDAGQgDAIgFADQgEAEgIADQgGACgLAAgAgWAsIAVAAQAGAAAFgBQAFgCACgCQACgCACgFQACgDAAgFIgCgIQAAgDgEgDQgCgCgFgCQgFgBgFAAIgWAAg");
	this.shape_92.setTransform(117.6,87.2,0.88,0.88);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#19B7E4").s().p("AgwA5QAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAgKIAFAAIAHgBQADgBADgEQADgFACgGQACgFADgNIADgbIACgnIBEAAIAAByIgQAAIAAhlIgkAAQgBAXgCAPQgCAOgDANQgCALgEAIQgEAHgDADQgEAFgFACQgFABgFAAg");
	this.shape_93.setTransform(107.1,87.2,0.88,0.88);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#19B7E4").s().p("AAeA5IABheIgGANIgzBMIgDAEQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgNAAIAAhxIARAAIgBBeQABgEACgDIADgGIAzhMIADgDQABgBAAAAQABAAAAgBQABAAABAAQAAAAABAAIAMAAIAABxg");
	this.shape_94.setTransform(97.3,87.2,0.88,0.88);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#19B7E4").s().p("AhHA5IAAhxIARAAIAABlIAvAAIAAhlIAPAAIAABlIAvAAIAAhlIARAAIAABxg");
	this.shape_95.setTransform(84.3,87.2,0.88,0.88);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#19B7E4").s().p("AgaA5QgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAgKIAFAAIAEgBIAEgBIAEgDIADgFIAFgLIguhQIAPAAIAEABIACADIAbAyIAEALIAFgLIAXgyIACgDQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAIANAAIguBjQgCAFgCADIgFAEIgHADIgHABg");
	this.shape_96.setTransform(72.4,87.2,0.88,0.88);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#19B7E4").s().p("AgPA2QgJgDgIgJQgIgJgDgKQgEgKAAgNQAAgLAEgMQAEgJAIgKQAIgHAJgEQALgFALAAQANAAAJAFQAKAEAGAGIgGAJIgDAAIgDgBIgFgEIgJgDQgFgCgHABQgIAAgHACQgHADgFAGQgFAFgDAKQgDAIAAAJQAAAKADAJQADAIAFAFQAGAHAGACQAHAEAIAAIAQgDIAMgIIADgBIACABIAHAHQgIAJgJAEQgKAFgOgBQgMABgKgFg");
	this.shape_97.setTransform(63.4,87.2,0.88,0.88);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#19B7E4").s().p("AAeA5IAAgwIgUAAIgDABIgDADIgEAEIgXAjIgEAEQgCABgEAAIgMAAIAdgpQAEgHAHgDQgHgCgFgCIgIgGIgFgJQgCgFAAgFQAAgHADgHQADgGAFgEQAGgFAHgCQAIgCAIAAIAmAAIAABxgAgCgqIgIAEQgDADgBAEIgBAIIABAIQABADADADIAIAEIAgABIAAgnIgWAAQgHAAgDABg");
	this.shape_98.setTransform(49.7,87.2,0.88,0.88);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#19B7E4").s().p("AApA5IgDgBIgDgCIgKgbIgyAAIgKAbIgCACIgDABIgNAAIAthxIAQAAIAuBxgAgBgiIgTAxIAoAAIgUg3g");
	this.shape_99.setTransform(40.9,87.2,0.88,0.88);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#19B7E4").s().p("AAfA5IgEgBIgfgtQgCgEgDAAQgDgCgDAAIgOAAIAAA0IgQAAIAAhxIAQAAIAAAyIAMAAIAGgBIAFgFIAcgnIADgEIAFgBIANAAIgiAvQgFAGgEABQAEACACABIAGAHIAiAxg");
	this.shape_100.setTransform(32,87.2,0.88,0.88);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#19B7E4").s().p("AgWA2QgLgEgHgGIAFgIIACgCIACAAIACAAIAEACIAEADIAFACIAHADIAJABQAMgBAGgFQAHgGAAgKIgCgIQgBgDgEgDIgHgFIgZgBIAAgMIAOAAIAIgBQAEgBAEgDQAEgDABgCQABgEAAgDQAAgFgBgDQgBgCgEgDQgEgDgEAAQgDgCgFAAQgHAAgEACIgIACIgEAEIgEABIgDgBIgBgCIgEgHQAHgHAIgCQAJgEALAAQAIAAAHADQAHACAFAEQAFADADAGQADAGAAAGQgBAIgEAHQgEAHgHADIAIAEIAFAGIAEAHIACAIQgBAJgCAGQgDAGgFAFQgGAFgIACQgHADgJAAQgMABgKgFg");
	this.shape_101.setTransform(22.4,87.2,0.88,0.88);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#19B7E4").s().p("AgaA5QgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBIAAgKIAGAAIAEgBIAEgBQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAAAIADgFIAGgLIguhQIAPAAIAEABIACADIAbAyQACAEACAHIACgGIAag3IACgDQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAOAAIgvBjIgDAIIgGAEIgGADIgHABg");
	this.shape_102.setTransform(14.3,87.2,0.88,0.88);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#4D575B").s().p("AAeA5IAAgxIgQAAIgEABIgDABIgDADIgDAEIgYAjIgDAEQgEABgDAAIgMAAIAdgpQAFgHAGgDIgLgEQgHgDgCgDIgFgJQgBgFgBgFQABgHACgHQADgGAFgEQAGgFAHgCQAIgCAIAAIAnAAIAABxgAgCgqQgFACgCACQgEADgBAEQgCADAAAFQAAAEACAEIAEAGIAHAEIAhABIAAgnIgWAAQgHAAgDABg");
	this.shape_103.setTransform(129.1,68.7,0.88,0.88);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#4D575B").s().p("AApA5IgDgBIgCgCIgLgbIgxAAIgKAbIgDACIgDABIgNAAIAuhxIAQAAIAtBxgAgBgiIgTAxIApAAIgSgsIgDgLg");
	this.shape_104.setTransform(120.3,68.7,0.88,0.88);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#4D575B").s().p("AAgA5IgFgBIgfgtQgCgEgDAAQgCgCgEAAIgOAAIAAA0IgQAAIAAhxIAQAAIAAAyIAMAAIAGgBIADgCIAegqIADgEQABAAAAAAQABgBAAAAQAAAAABAAQABAAAAAAIAOAAIgiAvQgEAGgFABQAEACACABIAGAHIAiAxg");
	this.shape_105.setTransform(111.4,68.7,0.88,0.88);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#4D575B").s().p("AgPA2QgIgDgJgJQgIgJgDgJQgEgMAAgMQAAgLAEgMQAEgKAIgJQAHgHAKgFQALgDALAAQANAAAJADQAKAEAGAHIgFAHIgCACIgCAAIgDgBIgGgDIgIgEQgEgBgIgBQgIAAgHADQgHAEgFAFQgEAFgEAKQgDAIAAAJQAAALADAHQADAJAFAGQAFAFAHAEQAIACAHAAIAJAAIAHgCIAGgEIAGgEIADgBIADABIAGAHQgHAJgKAEQgKAFgOAAQgMAAgKgFg");
	this.shape_106.setTransform(101.6,68.7,0.88,0.88);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#4D575B").s().p("AAeA5IAAgzIg7AAIAAAzIgRAAIAAhxIARAAIAAAzIA7AAIAAgzIARAAIAABxg");
	this.shape_107.setTransform(91.4,68.7,0.88,0.88);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#4D575B").s().p("AAeA5IAAgxIgQAAIgDABIgEABIgDADIgDAEIgYAjIgEAEQgDABgDAAIgNAAIAegpQAFgHAGgDIgMgEIgIgGQgDgEgCgFQgBgFAAgFQgBgJADgFQADgGAFgEQAGgFAHgCQAIgCAIAAIAnAAIAABxgAgDgqIgHAEIgEAHQgCADABAFQgBAEACAEQABAEADACIAHAEIAhABIAAgnIgWAAQgGAAgFABg");
	this.shape_108.setTransform(80.7,68.7,0.88,0.88);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#4D575B").s().p("AgmA5IAAhxIAQAAIAAAxIAWAAQAJAAAIACQAJADAEADQAFADACAGQACAGAAAHQAAAJgCAFQgEAIgEADQgFAEgIADQgGACgKAAgAgWAsIAWAAIAKgBIAIgEQACgDACgEQABgDAAgFIgBgIQgCgEgCgCQgCgCgGgCQgEgBgGAAIgWAAg");
	this.shape_109.setTransform(72.8,68.7,0.88,0.88);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#4D575B").s().p("AgwA5QAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAAAIAAgLIAFAAIAHgBQADgCACgDQAEgFACgFQACgGADgMIAFhDIBEAAIAAByIgQAAIAAhlIgkAAQgBAXgCAPQgCAPgDAMIgGASQgEAJgDACQgFAGgEABIgKABg");
	this.shape_110.setTransform(62.3,68.8,0.88,0.88);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#4D575B").s().p("AApA5IgDgBQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAAAIgLgbIgyAAIgKAbIgCACIgDABIgNAAIAuhxIAPAAIAuBxgAgBgiIgTAxIApAAIgVg3g");
	this.shape_111.setTransform(52.9,68.7,0.88,0.88);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#4D575B").s().p("AgHA5IAAhjIglAAIAAgOIBZAAIAAAOIglAAIAABjg");
	this.shape_112.setTransform(44.9,68.7,0.88,0.88);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#4D575B").s().p("AAeA5IABheIgGANIgzBMIgDAEQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgNAAIAAhxIARAAIgBBeQABgEACgDIADgGIAzhMIADgDQABgBAAAAQABAAAAgBQABAAABAAQAAAAABAAIAMAAIAABxg");
	this.shape_113.setTransform(35.4,68.7,0.88,0.88);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["#408734","#32702B","#7CAD35","#387B2F"],[0,0.298,0.671,1],11.1,-7.8,-10.3,8.9).s().p("AicAWIgoguQArAqBCgTQBNgiAngKQAegIAYAEQAbAGAcAWQATAOAoAxQgKgLgJgGQgcgWgbgFQgYgEgeAHQgoAKhMAiQgWAHgSAAQgoAAgdgeg");
	this.shape_114.setTransform(86.3,147.8,1.1,1.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.lf(["#F2F3F3","#D3D4D6","#FFFFFF","#DEDFE0"],[0,0.31,0.671,1],12,-7.5,-10.2,9.3).s().p("AifAWIgngtQArApBCgUQBNghAmgLQAegHAYAEQAbAFAdAWQAKAIAVAXIAgAmQgNgOgLgIQgcgWgbgFQgYgEgeAHQgoAKhMAiQgVAGgTAAQgoAAgdgdg");
	this.shape_115.setTransform(82.2,142.6,1.1,1.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["#A7000D","#890009","#C83F27","#860008"],[0,0.298,0.659,1],11.4,-7.5,-10,9.3).s().p("AifAYIgmgsQArAnBBgUQBMghAmgLQAegHAYAEQAbAGAcAWQAPALAxA5QgOgQgLgJQgcgWgcgEQgYgEgeAHQgnAKhLAhQgWAHgUAAQgmAAgcgag");
	this.shape_116.setTransform(78.1,137.5,1.1,1.1);

	var maskedShapeInstanceList = [this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79}]}).to({state:[]},80).wait(237));

	// bg
	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#ECF1F6").s().p("Ay1fWMAAAg+rMAlrAAAMAAAA+rg");
	this.shape_117.setTransform(80,300,0.663,1.496);

	this.timeline.addTween(cjs.Tween.get(this.shape_117).wait(317));

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
		{src:"images/p1.png", id:"p1"},
		{src:"images/160x600_atlas_NP_.jpg", id:"160x600_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;