(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"160x600_atlas_", frames: [[0,544,180,270],[182,272,180,270],[0,272,180,270],[0,0,180,270],[182,0,180,270]]}
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
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.p2 = function() {
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.p3 = function() {
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.p4 = function() {
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.p5 = function() {
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(4);
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


(lib.p5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p5_1, new cjs.Rectangle(0,0,180,270), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1_1, new cjs.Rectangle(0,0,180,270), null);


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

	// p5.jpg
	this.instance_2 = new lib.p5_1();
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

	// mask - копия: 2 - копия: 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_316 = new cjs.Graphics().p("ACkQFIAAgTMgvzAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDYkFIAAAAIAAgJMAqyAAAMAAAAgJgACxPyg");
	var mask_graphics_317 = new cjs.Graphics().p("ACkQFIAAgTMgvzAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDYkFIAAAAIAAgJMAqyAAAMAAAAgJgACxPyg");
	var mask_graphics_318 = new cjs.Graphics().p("ACkQFIAAgTMgvzAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDYkFIAAAAIAAgJMAqyAAAMAAAAgJgACxPyg");
	var mask_graphics_319 = new cjs.Graphics().p("ACkQFIAAgTMgvzAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDYkFIAAAAIAAgJMAqyAAAMAAAAgJgACxPyg");
	var mask_graphics_320 = new cjs.Graphics().p("ACjQFIAAgTMgvyAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDXkFIAAAAIAAgJMAqzAAAMAAAAgJgACxPyg");
	var mask_graphics_321 = new cjs.Graphics().p("ACjQFIAAgTMgvyAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDXkFIAAAAIAAgJMAqzAAAMAAAAgJgACxPyg");
	var mask_graphics_322 = new cjs.Graphics().p("ACkQFIAAgTMgvzAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDYkFIAAAAIAAgJMAqyAAAMAAAAgJgACxPyg");
	var mask_graphics_323 = new cjs.Graphics().p("ACjQFIAAgTMgvyAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDXkFIAAAAIAAgJMAqzAAAMAAAAgJgACxPyg");
	var mask_graphics_324 = new cjs.Graphics().p("ACjQFIAAgTMgvyAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDXkFIAAAAIAAgJMAqzAAAMAAAAgJgACxPyg");
	var mask_graphics_387 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_graphics_388 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_graphics_389 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_graphics_390 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_graphics_391 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_graphics_392 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_graphics_393 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_graphics_394 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_graphics_395 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(316).to({graphics:mask_graphics_316,x:263.9,y:144.4}).wait(1).to({graphics:mask_graphics_317,x:195.3,y:144.4}).wait(1).to({graphics:mask_graphics_318,x:135.9,y:144.4}).wait(1).to({graphics:mask_graphics_319,x:85.5,y:144.4}).wait(1).to({graphics:mask_graphics_320,x:44.4,y:144.4}).wait(1).to({graphics:mask_graphics_321,x:12.3,y:144.4}).wait(1).to({graphics:mask_graphics_322,x:-10.5,y:144.4}).wait(1).to({graphics:mask_graphics_323,x:-24.2,y:144.4}).wait(1).to({graphics:mask_graphics_324,x:-28.8,y:144.4}).wait(1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_graphics_387,x:140.5,y:147.7}).wait(1).to({graphics:mask_graphics_388,x:70.3,y:147.7}).wait(1).to({graphics:mask_graphics_389,x:9.4,y:147.7}).wait(1).to({graphics:mask_graphics_390,x:-42.2,y:147.7}).wait(1).to({graphics:mask_graphics_391,x:-84.4,y:147.7}).wait(1).to({graphics:mask_graphics_392,x:-117.1,y:147.7}).wait(1).to({graphics:mask_graphics_393,x:-140.6,y:147.7}).wait(1).to({graphics:mask_graphics_394,x:-154.6,y:147.7}).wait(1).to({graphics:mask_graphics_395,x:-159.3,y:147.7}).wait(1));

	// t5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#408734","#32702B","#7CAD35","#387B2F"],[0,0.298,0.671,1],13.7,-9.7,-12.8,11).s().p("AjCAbIgagcIgXgdQA1A0BSgYQBggqAwgNQAlgJAdAFQAiAHAjAbQAWAQAzA+IgXgVQgkgbghgGQgegFglAIQgxANhfArQgaAIgXAAQgyAAgkglg");
	this.shape_1.setTransform(83.8,140.8,0.816,0.816);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#F2F3F3","#D3D4D6","#FFFFFF","#DEDFE0"],[0,0.31,0.671,1],14.7,-9.3,-12.8,11.5).s().p("ADXAfQgkgcghgFQgegGglAJQgwANhfAqQhSAYg2g0Igwg4QA1AyBSgYQBggqAvgNQAlgJAeAFQAhAHAkAbQANAKAZAcIAtA1QgWgZgMgIg");
	this.shape_2.setTransform(80.2,136,0.816,0.816);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#A7000D","#890009","#C83F27","#860008"],[0,0.298,0.659,1],14.2,-9.3,-12.4,11.5).s().p("AjFAeIgOgPIgignQA1AvBRgYQBegqAwgMQAlgKAeAGQAhAGAjAcQAVAQA6BFQgUgXgKgIQgkgbghgGQgegFgmAJQgwAMhdAqQgcAIgYAAQgwAAgiggg");
	this.shape_3.setTransform(76.3,131.3,0.816,0.816);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#19B7E4").s().p("AAeA5IABheIgGANIgzBMQAAABgBAAQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgNAAIAAhyIARAAIAABXIgBAIIADgHIA2hSIADgEIAFgCIAMAAIAAByg");
	this.shape_4.setTransform(110.8,110.6,0.876,0.876);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#19B7E4").s().p("AAeA5IABheIgGANIgzBMIgDAEQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgMAAIAAhyIAQAAIAABfIADgHIADgGIAzhMIADgEIAFgCIAMAAIAAByg");
	this.shape_5.setTransform(100.1,110.6,0.876,0.876);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#19B7E4").s().p("AgPA3QgLgFgGgIQgHgHgEgLQgEgKAAgOQAAgLAEgMQAEgLAHgHQAIgIAKgEQALgFALAAQALAAALAEQAJAFAHAGIgFAIIgCABIgBABIgEgCIgGgDIgIgEQgEgBgIAAQgIAAgHADQgIADgEAGQgFAFgDAIQgDAJAAAJQAAALADAIQADAJAFAFQAFAGAHADQAHADAIAAIAJgBIAHgCIAGgDIAHgEIABgBIABgBIACABIAHAHQgHAJgKAEQgJAFgPAAQgLAAgLgEg");
	this.shape_6.setTransform(90.2,110.5,0.876,0.876);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#19B7E4").s().p("AgPA3QgLgFgGgIQgHgHgEgLQgEgLAAgNQAAgLAEgMQAGgMAFgGQAIgIAKgEQALgFALAAQAMAAAKAEQAKAFAHAGIgGAIIgCABIgBABIgEgCIgFgDIgJgEQgEgBgIAAQgIAAgHADQgHADgFAGQgFAFgDAIQgDAJAAAJQAAALADAIQADAJAFAFQAFAGAIADQAGADAIAAIAQgDIAGgDIAIgFIABgBIACABIAHAHQgHAJgKAEQgKAFgOAAQgLAAgLgEg");
	this.shape_7.setTransform(81.1,110.5,0.876,0.876);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#19B7E4").s().p("AgWA2QgLgDgHgJQgIgHgEgLQgEgLAAgNQAAgMAEgKQAEgKAIgJQAHgIALgEQAKgFAMAAQAMAAALAFQAKAEAIAIQAIAJAEAKQAEAKAAAMQAAANgEALQgFALgHAHQgIAJgKADQgLAFgMAAQgMAAgKgFgAgQgoQgGADgGAGQgGAGgCAIQgDAIAAAJQAAALADAIQACAHAGAHQAGAGAGACQAIADAIAAQAJAAAIgDQAGgCAGgGQAGgHACgHQADgIAAgLQAAgJgDgIQgCgIgGgGQgGgGgGgDQgIgDgJAAQgIAAgIADg");
	this.shape_8.setTransform(70.6,110.5,0.876,0.876);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#19B7E4").s().p("AgmA5IAAhyIAjAAQAJABAJACQAJADAEAEQAGAGACAGQADAFAAAJQAAAKgDAFQgDAHgFADQgFAGgJACQgHADgKAAIgSAAIAAAqgAgVACIASAAQAGgBAEgBQAEAAAFgEQADgEACgDQABgFAAgFQAAgFgBgFQgCgEgDgDQgDgCgFgCQgFgBgGAAIgSAAg");
	this.shape_9.setTransform(61.1,110.6,0.876,0.876);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#19B7E4").s().p("AgoA5IAAhyIAlAAQAKAAAIACQAHADAFADQAEADAEAHQACAFAAAIIgBAHIgEAIIgHAGIgJAEQANACAFAGQAHAHAAAKQAAAIgDAGQgDAHgFADQgFAFgIACQgIACgJAAgAgXAsIAXAAIALgCQAGgBACgCQADgDABgEIABgIQAAgJgGgEQgFgGgNAAIgXAAgAgXgFIAegBIAHgFQADgCACgDIACgIQAAgLgGgEQgGgFgMABIgUAAg");
	this.shape_10.setTransform(48.7,110.6,0.876,0.876);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4D575B").s().p("AAeA6IABhfIgGAMIgzBNQAAABgBAAQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQgBABAAAAIgNAAIAAhyIARAAIAABWIgBAIIADgHIA2hTIADgDIAFgBIAMAAIAAByg");
	this.shape_11.setTransform(108.2,92.2,0.876,0.876);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4D575B").s().p("AAeA6IABhfIgGAMIgzBNIgDADQgBABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAIgMAAIAAhyIARAAIgBBeIADgHIADgGIAzhNIADgDIAEgBIANAAIAAByg");
	this.shape_12.setTransform(97.5,92.2,0.876,0.876);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4D575B").s().p("AAmBHIAAgbIhaAAIAAhyIAQAAIAABlIA3AAIAAhlIARAAIAABlIARAAIAAAkQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgEABg");
	this.shape_13.setTransform(87.1,93.4,0.876,0.876);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4D575B").s().p("AgWA2QgLgDgHgJQgHgHgFgLQgEgLAAgNQAAgLAEgLQAEgLAIgIQAHgIALgEQAKgFAMAAQAMAAALAFQAKAEAIAIQAIAJAEAKQAEAKAAAMQAAANgEALQgFALgHAHQgIAJgKADQgLAFgMAAQgLAAgLgFgAgQgoQgGADgGAGQgFAGgDAIQgDAIAAAJQAAALADAIQACAHAGAHQAGAGAGACQAIADAIAAQAJAAAIgDQAGgCAGgGQAFgGADgIQADgIAAgLQAAgJgDgIQgEgKgEgEQgGgGgGgDQgIgDgJAAQgIAAgIADg");
	this.shape_14.setTransform(75.5,92.2,0.876,0.876);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4D575B").s().p("AAuA6IAAhWIAAgEIgmBFIgDAEIgDAAIgCAAQgEAAgCgEIgnhFIAAAEIAABWIgOAAIAAhyIAMAAIAEAAQAAAAAAAAQAAAAABABQAAAAAAAAQAAABABAAIAnBFIACAJIAEgJIAmhFIADgCIADAAIAMAAIAAByg");
	this.shape_15.setTransform(63.4,92.2,0.876,0.876);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4D575B").s().p("AgeA2QgKgEgHgJIAHgHIACgBIABABIAHAFIAHADIAHACIAJABQAHAAAGgDQAHgCAGgGQAFgFADgHQAEgIAAgJIg4AAIAAgLIA4AAQgCgLgCgFQgEgHgFgEQgEgFgIgDQgGgCgHAAQgHAAgGABIgIAEIgFADIgEACIgCgBIgBgBIgGgIQAHgGAKgFQALgEALAAQAMAAAJAFQALAEAHAIQAHAGAFAMQAEAMAAALQAAAOgEAKQgEALgHAHQgGAIgLAFQgLAEgKAAQgPAAgKgFg");
	this.shape_16.setTransform(52,92.2,0.876,0.876);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4D575B").s().p("AgjA6IAAhyIBGAAIAAANIg1AAIAAAlIArAAIAAAMIgrAAIAAAmIA1AAIAAAOg");
	this.shape_17.setTransform(128.1,73.8,0.876,0.876);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4D575B").s().p("AAeA6IABhfIgGAMIgzBNIgDADQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAIgNAAIAAhyIARAAIAABWIgBAIIADgHIA2hTIADgDIAFgBIAMAAIAAByg");
	this.shape_18.setTransform(118.3,73.8,0.876,0.876);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4D575B").s().p("AAgA6IgFgCIgfguQgDgDgCgBQgCgBgFAAIgNAAIAAA1IgQAAIAAhyIAQAAIAAAxIAMAAIAGgBIAFgEIAcgoIADgDIAEgBIAOAAIgiAuQgFAHgEABQAFACACABIAFAHIAiAyg");
	this.shape_19.setTransform(108.9,73.8,0.876,0.876);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4D575B").s().p("AgPA3QgLgFgGgIQgHgHgEgLQgEgLAAgNQAAgLAEgMQAGgMAFgGQAIgIAKgEQALgFALAAQAMAAAKAEQALAGAGAFIgGAIIgCABIgBABIgEgCIgFgDIgIgEQgFgBgIAAQgIAAgHADQgHADgFAGQgFAFgDAIQgDAJAAAJQAAALADAIQADAJAFAFQAFAGAIADQAGADAIAAIAQgDIAGgDIAIgFIABgBIACABIAHAHQgHAJgKAEQgKAFgOAAQgLAAgLgEg");
	this.shape_20.setTransform(99,73.8,0.876,0.876);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4D575B").s().p("AAeA6IAAg0Ig7AAIAAA0IgRAAIAAhyIARAAIAAAzIA7AAIAAgzIARAAIAAByg");
	this.shape_21.setTransform(88.8,73.8,0.876,0.876);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4D575B").s().p("AAeA6IAAgyIgTAAIgEACIgEADIgaAmIgEAEQgCADgEAAIgMAAIAdgrQAFgHAGgCIgMgFQgFgCgDgDQgDgEgCgFQgCgFAAgFQAAgIADgGQACgFAFgFQAFgEAJgDQAIgDAIABIAnAAIAABygAgDgqIgHAEQgDAEgBACIgBAIIABAIQABAEADADIAHAEIAhABIAAgoIgWAAQgHAAgEACg");
	this.shape_22.setTransform(78.2,73.8,0.876,0.876);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#4D575B").s().p("AgnA6IAAhyIARAAIAAAwIAWAAQAIAAAJADQAIACAFADQAEAEADAGQADAGgBAHQABAGgDAIQgDAGgFAFQgEADgJAEQgJADgHAAgAgWAsIAWAAQAGAAAEgCQAGgBACgCQACgDACgDIABgJIgBgIQgBgEgDgCQgCgCgGgCQgEgCgGABIgWAAg");
	this.shape_23.setTransform(70.3,73.8,0.876,0.876);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4D575B").s().p("AgwA5QgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAAAIAAgLIAFAAIAGgBQAEgBACgEQAEgFACgFQADgHABgLQADgOABgNIACgoIBEAAIAAByIgQAAIAAhlIgkAAQgBAWgCAQQgCAPgDAMIgGASQgDAHgEAFQgFAEgEABQgFACgFAAg");
	this.shape_24.setTransform(59.8,73.9,0.876,0.876);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4D575B").s().p("AApA6QAAAAgBgBQAAAAgBAAQAAAAAAAAQgBgBAAAAIgCgDIgKgbIgyAAIgLAbIgCADQAAAAgBABQAAAAAAAAQgBAAAAAAQgBABAAAAIgNAAIAuhyIAPAAIAuBygAgCgdIgSAsIApAAIgTgyIgCgGg");
	this.shape_25.setTransform(50.4,73.8,0.876,0.876);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4D575B").s().p("AgHA6IAAhlIglAAIAAgNIBZAAIAAANIglAAIAABlg");
	this.shape_26.setTransform(42.5,73.8,0.876,0.876);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4D575B").s().p("AAeA6IAAhXIABgIIgGAMIgzBNQAAABgBAAQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBABAAAAQgBAAgBAAQAAABgBAAIgMAAIAAhyIARAAIAABWIgBAIIAGgNIAzhNIADgDQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAIANAAIAAByg");
	this.shape_27.setTransform(33,73.8,0.876,0.876);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#4D575B").s().p("AgiA5IAAhxIBGAAIAAANIg2AAIAAAlIArAAIAAAMIgrAAIAAAmIA2AAIAAANg");
	this.shape_28.setTransform(122.1,55.4,0.876,0.876);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#4D575B").s().p("AAeA5IABheIgGAMIgzBNIgDADQgBABAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgNAAIAAhxIARAAIgBBeIADgHIA2hTIADgDIAFgBIAMAAIAABxg");
	this.shape_29.setTransform(112.3,55.4,0.876,0.876);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#4D575B").s().p("ABBBHIAAgbIiRAAIAAhyIARAAIAABlIAvAAIAAhlIAQAAIAABlIAuAAIAAhlIARAAIAABlIARAAIAAAkQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgEABg");
	this.shape_30.setTransform(99.5,56.6,0.876,0.876);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#4D575B").s().p("AAeA5IAAgwIgUAAIgDABIgDACIgbAoIgEADQgDACgDAAIgNAAIAdgpQAFgIAHgCQgHgCgFgDQgFgBgEgFIgEgIQgCgFAAgGQAAgGADgHQACgGAGgEQAEgEAIgDQAJgCAHAAIAnAAIAABxgAgCgqIgIAEIgEAGIgCAIIACAIQABAEADADIAIAEIAgABIAAgoIgXAAQgGABgDABg");
	this.shape_31.setTransform(85.9,55.4,0.876,0.876);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#4D575B").s().p("AgWA2QgLgDgHgJQgIgHgDgLQgFgLAAgNQAAgMAFgKQADgKAIgJQAHgIALgEQAKgFAMAAQANAAAKAFQALAEAHAIQAIAIAEALQAEALAAALQAAANgEALQgFALgHAHQgHAIgLAEQgKAFgNAAQgMAAgKgFgAgPgoQgIADgFAGQgFAEgDAKQgDAIAAAJQAAALADAIQADAIAFAGQAGAGAHACQAHADAIAAQAJAAAIgDQAGgCAGgGQAGgHACgHQADgIAAgLQAAgJgDgIQgCgIgGgGQgGgGgGgDQgIgDgJAAQgIAAgHADg");
	this.shape_32.setTransform(76.4,55.4,0.876,0.876);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#4D575B").s().p("AgIA5IAAhkIgkAAIAAgNIBZAAIAAANIglAAIAABkg");
	this.shape_33.setTransform(67.1,55.4,0.876,0.876);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#4D575B").s().p("AgPA3QgLgFgGgIQgHgHgEgLQgEgLAAgNQAAgLAEgMQAGgMAFgGQAIgIAKgEQALgFALAAQALAAALAEQAKAFAGAGIgFAIIgCABIgCABIgDgCIgGgDIgIgEQgEgBgIAAQgIAAgHADQgGADgGAGQgFAFgDAIQgDAJAAAJQAAALADAIQAEAJAEAFQAGAGAGADQAHADAIAAIAQgDIAGgDIAIgFIABgBIADABIAGAHQgHAJgKAEQgKAFgOAAQgLAAgLgEg");
	this.shape_34.setTransform(58.5,55.4,0.876,0.876);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#4D575B").s().p("AApA5QAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAIgCgCIgLgbIgxAAIgLAbIgCACQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAIgNAAIAuhxIAPAAIAuBxgAgBgjIgTAyIApAAIgVg4g");
	this.shape_35.setTransform(49.1,55.4,0.876,0.876);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#4D575B").s().p("AAeA5IAAgzIg7AAIAAAzIgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_36.setTransform(39,55.4,0.876,0.876);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},316).wait(80));

	// mask - копия: 2 - копия (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_237 = new cjs.Graphics().p("ACkQFIAAgTMgvzAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDYkFIAAAAIAAgJMAqyAAAMAAAAgJgACxPyg");
	var mask_1_graphics_238 = new cjs.Graphics().p("ACkQFIAAgTMgvzAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDYkFIAAAAIAAgJMAqyAAAMAAAAgJgACxPyg");
	var mask_1_graphics_239 = new cjs.Graphics().p("ACkQFIAAgTMgvzAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDYkFIAAAAIAAgJMAqyAAAMAAAAgJgACxPyg");
	var mask_1_graphics_240 = new cjs.Graphics().p("ACkQFIAAgTMgvzAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDYkFIAAAAIAAgJMAqyAAAMAAAAgJgACxPyg");
	var mask_1_graphics_241 = new cjs.Graphics().p("ACjQFIAAgTMgvyAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDXkFIAAAAIAAgJMAqzAAAMAAAAgJgACxPyg");
	var mask_1_graphics_242 = new cjs.Graphics().p("ACjQFIAAgTMgvyAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDXkFIAAAAIAAgJMAqzAAAMAAAAgJgACxPyg");
	var mask_1_graphics_243 = new cjs.Graphics().p("ACkQFIAAgTMgvzAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDYkFIAAAAIAAgJMAqyAAAMAAAAgJgACxPyg");
	var mask_1_graphics_244 = new cjs.Graphics().p("ACjQFIAAgTMgvyAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDXkFIAAAAIAAgJMAqzAAAMAAAAgJgACxPyg");
	var mask_1_graphics_245 = new cjs.Graphics().p("ACjQFIAAgTMgvyAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDXkFIAAAAIAAgJMAqzAAAMAAAAgJgACxPyg");
	var mask_1_graphics_308 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_1_graphics_309 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_1_graphics_310 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_1_graphics_311 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_1_graphics_312 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_1_graphics_313 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_1_graphics_314 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_1_graphics_315 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_1_graphics_316 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(237).to({graphics:mask_1_graphics_237,x:263.9,y:144.4}).wait(1).to({graphics:mask_1_graphics_238,x:195.3,y:144.4}).wait(1).to({graphics:mask_1_graphics_239,x:135.9,y:144.4}).wait(1).to({graphics:mask_1_graphics_240,x:85.5,y:144.4}).wait(1).to({graphics:mask_1_graphics_241,x:44.4,y:144.4}).wait(1).to({graphics:mask_1_graphics_242,x:12.3,y:144.4}).wait(1).to({graphics:mask_1_graphics_243,x:-10.5,y:144.4}).wait(1).to({graphics:mask_1_graphics_244,x:-24.2,y:144.4}).wait(1).to({graphics:mask_1_graphics_245,x:-28.8,y:144.4}).wait(1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_1_graphics_308,x:140.5,y:147.7}).wait(1).to({graphics:mask_1_graphics_309,x:70.3,y:147.7}).wait(1).to({graphics:mask_1_graphics_310,x:9.4,y:147.7}).wait(1).to({graphics:mask_1_graphics_311,x:-42.2,y:147.7}).wait(1).to({graphics:mask_1_graphics_312,x:-84.4,y:147.7}).wait(1).to({graphics:mask_1_graphics_313,x:-117.1,y:147.7}).wait(1).to({graphics:mask_1_graphics_314,x:-140.6,y:147.7}).wait(1).to({graphics:mask_1_graphics_315,x:-154.6,y:147.7}).wait(1).to({graphics:mask_1_graphics_316,x:-159.3,y:147.7}).wait(80));

	// t4
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#19B7E4").s().p("AAtA5IAAhVIABgEIgnBGIgCACIgDABIgCAAQgEAAgCgDIgnhGIAAAEIAAAEIAABRIgOAAIAAhxIAMAAIADAAIADACIAmBFIADAJIAEgJIAmhFIACgCIAEAAIAMAAIAABxg");
	this.shape_37.setTransform(100.6,117.8,0.876,0.876);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#19B7E4").s().p("AgPA2QgJgDgIgJQgIgIgDgKQgEgLAAgNQAAgMAEgLQAEgLAHgHQAIgIAKgEQALgFALAAQAMAAAKAEQAKAFAGAGIgGAJIgDABIgDgCIgFgDIgJgEQgFgBgHAAQgIAAgHADQgGACgGAGQgFAGgDAIQgDAJAAAJQAAALADAIQADAIAFAGQAEAFAIADQAHADAIAAIAJAAIAHgCIAOgJIABAAIADABIAGAHQgIAJgJAEQgKAFgOAAQgMAAgKgFg");
	this.shape_38.setTransform(89.6,117.8,0.876,0.876);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#19B7E4").s().p("AgNA5IgJgDIgIgDIgGgGIAFgGQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAIAFABIAEADIAHADQAEABAFAAQAFAAAEgCQAFgBADgFQADgBADgHQABgEABgHQgBgEgBgFQgCgEgDgDQgCgCgGgBQgEgCgFAAQgJAAgKADIgJgDIAJg2IA2AAIAAAGQAAAEgCACQgCACgFAAIgiAAIgFAdQAHgCAIAAQAJAAAHACQAHADAFAFQAEAFACAFQADAIAAAGQAAAIgEAJQgCAGgGAGQgGAFgHADQgIADgIAAg");
	this.shape_39.setTransform(77,117.9,0.876,0.876);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#19B7E4").s().p("AANA5IAAgdIgyAAIgCgBQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAgBIgBgIIA2hIIAOAAIAABIIARAAIAAAIIgBADIgCABIgOAAIAAAdgAgaAQIAnAAIAAgyIABgFg");
	this.shape_40.setTransform(68.9,117.8,0.876,0.876);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#19B7E4").s().p("AgoA5IAAhxIAlAAQALAAAGACQAIACAGAEQAEAEADAFQACAGAAAHQAAAEgBAEQgBAEgEADQgCADgEADQgDADgHABQALABAJAHQAGAIAAAKQAAAHgDAGQgCAFgGAFQgFAEgHADQgHACgLAAgAgYAsIAYAAQAHAAAEgBIAIgEQADgDABgEQABgDAAgFQAAgIgFgGQgHgFgMAAIgYAAgAgYgFIAUAAQAGAAAEgCQAFAAADgDIAFgGQABgEAAgEQABgKgHgFQgFgEgMAAIgVAAg");
	this.shape_41.setTransform(57.1,117.8,0.876,0.876);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#19B7E4").s().p("AgoA5IAAhxIAlAAQALAAAHACQAIACAEAEQAGAEACAFQACAGAAAHQAAAEgBAEIgEAHQgCADgFADQgDADgGABQALABAIAHQAGAHAAALQAAAIgDAFQgCAGgGAEQgEAEgIADQgHACgLAAgAgXAsIAXAAQAHAAAEgBIAIgEQADgDABgEQACgDAAgFQAAgIgGgGQgHgFgMAAIgXAAgAgXgFIAUAAQAFAAAFgCQAEAAAEgDIAEgGQACgEAAgEQAAgKgGgFQgGgEgMAAIgUAAg");
	this.shape_42.setTransform(135.1,99.4,0.876,0.876);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#19B7E4").s().p("AgWA2QgLgEgHgIQgIgHgEgLQgEgKAAgOQAAgNAEgKQAEgJAIgJQAHgIALgEQAKgFAMAAQANAAAKAFQALAEAHAIQAIAJAEAJQAEAMAAALQAAAMgEAMQgFALgHAHQgHAIgLAEQgKAFgNAAQgMAAgKgFgAgQgoQgGACgGAGQgFAGgDAIQgDAJAAAJQAAALADAIQADAIAFAGQAGAGAGACQAIADAIAAQAJAAAHgDQAHgCAGgGQAGgHACgHQADgJAAgKQAAgJgDgJQgCgHgGgHQgGgGgHgCQgHgDgJAAQgIAAgIADg");
	this.shape_43.setTransform(124.7,99.4,0.876,0.876);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#19B7E4").s().p("AgHA5IAAhkIglAAIAAgNIBZAAIAAANIglAAIAABkg");
	this.shape_44.setTransform(115.3,99.4,0.876,0.876);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#19B7E4").s().p("AAfA5IgEgBIgDgEIgcgpIgFgFIgGgBIgOAAIAAA0IgQAAIAAhxIAQAAIAAAxIAPAAIADgBIACgBIADgDIAcgoIADgDIAEgBIAOAAIgiAvQgFAFgEACQAEACACABQADADADAEIAiAxg");
	this.shape_45.setTransform(107,99.4,0.876,0.876);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#19B7E4").s().p("AgiA5IAAhxIBGAAIAAANIg2AAIAAAlIArAAIAAAMIgrAAIAAAmIA2AAIAAANg");
	this.shape_46.setTransform(98,99.4,0.876,0.876);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#19B7E4").s().p("AgwA5QgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAAAIAAgLIAFAAIAHgBQADgBADgEIAFgKIAFgTQABgJACgRIACgoIBEAAIAABxIgQAAIAAhkIgkAAIgIBAQgDANgDAGQgDAIgEADQgEAFgFABIgKACg");
	this.shape_47.setTransform(87.9,99.5,0.876,0.876);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#19B7E4").s().p("AAcA5IAAhkIg3AAIAABkIgRAAIAAhxIBZAAIAABxg");
	this.shape_48.setTransform(78.3,99.4,0.876,0.876);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#19B7E4").s().p("AAuA5IAAhZIgnBGIgCACIgEABIgBAAQgEAAgCgDIgnhGIAAAEIAABVIgOAAIAAhxIAMAAIADAAQABAAAAAAQAAAAABABQAAAAAAAAQABABAAAAIAmBFIADAJIACgFIACgEIAmhFIACgCIAEAAIAMAAIAABxg");
	this.shape_49.setTransform(66.6,99.4,0.876,0.876);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#19B7E4").s().p("AgWA2QgLgEgHgIQgIgHgEgLQgEgLAAgNQAAgLAEgMQAEgJAIgJQAHgIALgEQALgFALAAQANAAAKAFQALAEAHAIQAIAJAEAJQAEAMAAALQAAAMgEAMQgEALgIAHQgHAIgLAEQgKAFgNAAQgLAAgLgFgAgQgoQgGACgGAGQgFAGgDAIQgDAJAAAJQAAALADAIQADAIAFAGQAGAGAGACQAIADAIAAQAJAAAIgDQAGgCAGgGQAGgHACgHQADgIAAgLQAAgJgDgJQgCgHgGgHQgGgGgGgCQgIgDgJAAQgIAAgIADg");
	this.shape_50.setTransform(54.4,99.4,0.876,0.876);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#19B7E4").s().p("AAgA5IgFgBIgDgEIgcgpIgFgFIgGgBIgOAAIAAA0IgQAAIAAhxIAQAAIAAAxIAPAAIADgBIACgBIADgDIAcgoIADgDIAEgBIAPAAIgjAvQgEAFgFACQAFACACABQADADACAEIAiAxg");
	this.shape_51.setTransform(45.1,99.4,0.876,0.876);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#19B7E4").s().p("AgaA5IAAgLIAYAAIAAhTIgUARIgCABIgCAAIgCAAIgBgBIgEgGIAhgfIAMAAIAABnIAWAAIAAALg");
	this.shape_52.setTransform(32.3,99.4,0.876,0.876);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#19B7E4").s().p("AgaA5IAAgLIAYAAIAAhTIgUARIgCABIgCAAIgBAAIgCgBIgFgGIAigfIAMAAIAABnIAXAAIAAALg");
	this.shape_53.setTransform(24.2,99.4,0.876,0.876);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#4D575B").s().p("AApA5IAAhxIARAAIAABxgAg5A5IAAhxIARAAIAAAxIAVAAQAMAAAHACQAGACAFADQAEAEAEAGQACAGAAAHQAAAHgDAHQgDAIgFADQgEAEgIADQgGACgLAAgAgoAsIAVAAQAHAAAEgBIAIgEQACgDABgEQACgDAAgFIgCgIQgBgDgCgDQgCgCgGgCQgEgBgHAAIgVAAg");
	this.shape_54.setTransform(109.2,81,0.876,0.876);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#4D575B").s().p("AAeA5IAAgzIg7AAIAAAzIgRAAIAAhxIARAAIAAAzIA7AAIAAgzIARAAIAABxg");
	this.shape_55.setTransform(97.5,81,0.876,0.876);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#4D575B").s().p("AAeA5IABheIgGANIgzBMQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgNAAIAAhxIARAAIAABWIgBAIIADgHIA2hSIADgEIAFgBIAMAAIAABxg");
	this.shape_56.setTransform(86.8,81,0.876,0.876);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#4D575B").s().p("AhHA5IAAhxIARAAIAABkIAuAAIAAhkIAQAAIAABkIAvAAIAAhkIARAAIAABxg");
	this.shape_57.setTransform(73.9,81,0.876,0.876);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#4D575B").s().p("AAqA5IgEgBQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAAAIgKgbIgzAAIgKAbIgCACIgEABIgMAAIAthxIARAAIAtBxgAgCgdIgSAsIApAAIgVg4g");
	this.shape_58.setTransform(61.6,81,0.876,0.876);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#4D575B").s().p("AAuA5IAAhVIAAgEIgmBGIgDACIgDABIgCAAQgEAAgCgDIgnhGIAAAEIAABVIgOAAIAAhxIAMAAIAEAAIACACIAnBFIACAJIAEgJIAmhFIADgCIADAAIAMAAIAABxg");
	this.shape_59.setTransform(50.3,81,0.876,0.876);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#4D575B").s().p("AgiA5IAAhxIBGAAIAAANIg2AAIAAAlIArAAIAAAMIgrAAIAAAmIA2AAIAAANg");
	this.shape_60.setTransform(142.9,62.6,0.876,0.876);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#4D575B").s().p("AApA5IAAhxIARAAIAABxgAg5A5IAAhxIARAAIAAAxIAVAAQANAAAGACQAHADAEACQAFAFADAFQACAHAAAGQAAAIgDAGQgDAIgFADQgEAEgHADQgHACgLAAgAgoAsIAVAAQAHAAAFgBIAHgEIADgHQACgDAAgFIgCgIQgBgEgCgCQgCgCgFgCQgFgBgHAAIgVAAg");
	this.shape_61.setTransform(132.2,62.6,0.876,0.876);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#4D575B").s().p("AAeA5IAAgzIg7AAIAAAzIgRAAIAAhxIARAAIAAAzIA7AAIAAgzIARAAIAABxg");
	this.shape_62.setTransform(120.5,62.6,0.876,0.876);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#4D575B").s().p("AAaA5IAAgxIgSAEQgIACgHgBQgJAAgFgCQgHgBgEgEQgEgDgDgHQgCgFAAgKIAAglIAQAAIAAAlQAAAIADAFQAEAFAFABQAHACAJgBQAJgBAOgDIAAg1IAQAAIAABxg");
	this.shape_63.setTransform(110.2,62.6,0.876,0.876);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#4D575B").s().p("AgjA5IAAhxIBGAAIAAANIg1AAIAAAlIArAAIAAAMIgrAAIAAAmIA1AAIAAANg");
	this.shape_64.setTransform(102.2,62.6,0.876,0.876);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#4D575B").s().p("AgWA2QgLgEgHgIQgIgHgEgLQgEgKAAgOQAAgNAEgKQAEgJAIgJQAHgIALgEQAKgFAMAAQANAAAKAFQALAEAHAIQAHAHAFALQAEAMAAALQAAAMgEAMQgFAMgHAGQgHAIgLAEQgKAFgNAAQgMAAgKgFgAgQgoQgGACgGAGQgFAGgDAIQgDAJAAAJQAAALADAIQADAIAFAGQAGAGAGACQAIADAIAAQAJAAAHgDQAIgDAFgFQAGgIACgGQADgJAAgKQAAgJgDgJQgCgGgGgIQgFgFgIgDQgHgDgJAAQgIAAgIADg");
	this.shape_65.setTransform(92.2,62.6,0.876,0.876);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#4D575B").s().p("AAuA5IAAhRIAAgEIAAgEIgmBGIgDACIgDABIgCAAQgEAAgCgDIgnhGIAAAEIABAEIAABRIgPAAIAAhxIAMAAIAEAAIACACIAmBFIAEAJIADgJIAnhFIACgCIADAAIAMAAIAABxg");
	this.shape_66.setTransform(80,62.6,0.876,0.876);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#4D575B").s().p("AgWA2QgLgEgHgIQgHgHgFgLQgEgMAAgMQAAgLAEgMQAEgKAIgIQAHgIALgEQAKgFAMAAQAMAAALAFQAKAEAIAIQAIAJAEAJQAEAMAAALQAAANgEALQgFALgHAHQgIAIgKAEQgLAFgMAAQgLAAgLgFgAgQgoQgGACgGAGQgGAHgCAHQgDAJAAAJQAAAKADAJQACAHAGAHQAGAGAGACQAIADAIAAQAJAAAIgDQAGgCAGgGQAFgGADgIQADgIAAgLQAAgJgDgJQgDgIgFgGQgGgGgGgCQgIgDgJAAQgIAAgIADg");
	this.shape_67.setTransform(67.9,62.6,0.876,0.876);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#4D575B").s().p("AAuBHIAAgcIhbAAIAAAXQAAABAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgKAAIAAgpIAMAAIAFgDIAFgIQACgFACgIQACgGABgLQADgLAAgPIACghIBEAAIAABkIATAAIAAAkQAAABAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAgAgNgYIgEAYIgFASQgDAIgEAEIA2AAIAAhXIgjAAIgDAhg");
	this.shape_68.setTransform(56.9,63.8,0.876,0.876);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#4D575B").s().p("AgaA5QgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBIAAgKIAGAAIAEAAQABAAAAgBQABAAAAAAQABAAAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAgBQACgBACgDIAFgMIguhQIAPAAIAEABIACACIAbAzIAEALIACgGIAag4IACgCIAEgBIANAAIguBjQgCAFgCADIgGAEIgGADIgHABg");
	this.shape_69.setTransform(48.1,62.7,0.876,0.876);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#4D575B").s().p("AgPA2QgLgEgGgIQgHgHgEgLQgEgKAAgOQAAgMAEgLQAEgLAHgHQAIgIAKgEQAKgFAMAAQALAAALAEQAJAFAHAGIgFAIIgCABIgCABIgDgCIgGgDIgIgEQgEgBgIAAQgIAAgHADQgHADgFAFQgGAHgCAHQgDAJAAAJQAAALADAIQAEAJAEAFQAFAFAHADQAHADAIAAIAJAAIAHgCIAGgDIAGgFIABgBIACAAIADABIAGAHQgHAJgKAEQgKAFgOAAQgMAAgKgFg");
	this.shape_70.setTransform(39.1,62.6,0.876,0.876);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#4D575B").s().p("AgWA2QgKgEgIgIQgHgHgFgLQgEgMAAgMQAAgLAEgMQAFgKAHgIQAIgIAKgEQALgFALAAQAMAAALAFQALAEAHAIQAIAJADAJQAFAMAAALQAAANgFALQgDALgIAHQgHAIgLAEQgLAFgMAAQgLAAgLgFgAgQgoQgGACgGAGQgGAHgDAHQgCAJAAAJQAAAKACAJQADAHAGAHQAGAGAGACQAIADAIAAQAJAAAHgDQAHgCAGgGQAFgGADgIQADgIAAgLQAAgJgDgJQgDgIgFgGQgGgGgHgCQgHgDgJAAQgIAAgIADg");
	this.shape_71.setTransform(28.7,62.6,0.876,0.876);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#4D575B").s().p("AAcA5IAAhkIg3AAIAABkIgRAAIAAhxIBZAAIAABxg");
	this.shape_72.setTransform(17.9,62.6,0.876,0.876);

	var maskedShapeInstanceList = [this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},237).to({state:[]},80).wait(79));

	// mask - копия: 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_158 = new cjs.Graphics().p("ACkQFIAAgTMgvzAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDYkFIAAAAIAAgJMAqyAAAMAAAAgJgACxPyg");
	var mask_2_graphics_159 = new cjs.Graphics().p("ACkQFIAAgTMgvzAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDYkFIAAAAIAAgJMAqyAAAMAAAAgJgACxPyg");
	var mask_2_graphics_160 = new cjs.Graphics().p("ACkQFIAAgTMgvzAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDYkFIAAAAIAAgJMAqyAAAMAAAAgJgACxPyg");
	var mask_2_graphics_161 = new cjs.Graphics().p("ACkQFIAAgTMgvzAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDYkFIAAAAIAAgJMAqyAAAMAAAAgJgACxPyg");
	var mask_2_graphics_162 = new cjs.Graphics().p("ACjQFIAAgTMgvyAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDXkFIAAAAIAAgJMAqzAAAMAAAAgJgACxPyg");
	var mask_2_graphics_163 = new cjs.Graphics().p("ACjQFIAAgTMgvyAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDXkFIAAAAIAAgJMAqzAAAMAAAAgJgACxPyg");
	var mask_2_graphics_164 = new cjs.Graphics().p("ACkQFIAAgTMgvzAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDYkFIAAAAIAAgJMAqyAAAMAAAAgJgACxPyg");
	var mask_2_graphics_165 = new cjs.Graphics().p("ACjQFIAAgTMgvyAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDXkFIAAAAIAAgJMAqzAAAMAAAAgJgACxPyg");
	var mask_2_graphics_166 = new cjs.Graphics().p("ACjQFIAAgTMgvyAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDXkFIAAAAIAAgJMAqzAAAMAAAAgJgACxPyg");
	var mask_2_graphics_229 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_2_graphics_230 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_2_graphics_231 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_2_graphics_232 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_2_graphics_233 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_2_graphics_234 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_2_graphics_235 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_2_graphics_236 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_2_graphics_237 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(158).to({graphics:mask_2_graphics_158,x:263.9,y:144.4}).wait(1).to({graphics:mask_2_graphics_159,x:195.3,y:144.4}).wait(1).to({graphics:mask_2_graphics_160,x:135.9,y:144.4}).wait(1).to({graphics:mask_2_graphics_161,x:85.5,y:144.4}).wait(1).to({graphics:mask_2_graphics_162,x:44.4,y:144.4}).wait(1).to({graphics:mask_2_graphics_163,x:12.3,y:144.4}).wait(1).to({graphics:mask_2_graphics_164,x:-10.5,y:144.4}).wait(1).to({graphics:mask_2_graphics_165,x:-24.2,y:144.4}).wait(1).to({graphics:mask_2_graphics_166,x:-28.8,y:144.4}).wait(1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_2_graphics_229,x:140.5,y:147.7}).wait(1).to({graphics:mask_2_graphics_230,x:70.3,y:147.7}).wait(1).to({graphics:mask_2_graphics_231,x:9.4,y:147.7}).wait(1).to({graphics:mask_2_graphics_232,x:-42.2,y:147.7}).wait(1).to({graphics:mask_2_graphics_233,x:-84.4,y:147.7}).wait(1).to({graphics:mask_2_graphics_234,x:-117.1,y:147.7}).wait(1).to({graphics:mask_2_graphics_235,x:-140.6,y:147.7}).wait(1).to({graphics:mask_2_graphics_236,x:-154.6,y:147.7}).wait(1).to({graphics:mask_2_graphics_237,x:-159.3,y:147.7}).wait(159));

	// t3
	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#19B7E4").s().p("AAeBIIAAhXIABgIIgDAHIg2BSIgDAEIgFACIgMAAIAAhyIARAAIgBBeIAGgNIAzhMIADgEQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAIAMAAIAABygAgQg2QgGgEAAgIIAAgDQABgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAIAJAAIABAGIACAFIADACIAFABIAFgBIAEgCIABgFIABgGIAJAAQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAABIACADQAAAIgHAEQgGAEgLAAQgKAAgHgEg");
	this.shape_73.setTransform(121.5,97.5,0.876,0.876);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#19B7E4").s().p("AgiA5IAAhyIBGAAIAAAOIg2AAIAAAlIArAAIAAAMIgrAAIAAAmIA2AAIAAANg");
	this.shape_74.setTransform(112.4,98.7,0.876,0.876);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#19B7E4").s().p("AAeA5IABheIgGAMIgzBNQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgNAAIAAhyIARAAIAABWIgBAJIADgHIA2hTIADgDIAFgCIAMAAIAAByg");
	this.shape_75.setTransform(102.6,98.7,0.876,0.876);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#19B7E4").s().p("AAmBHIAAgbIhaAAIAAhyIAQAAIAABlIA3AAIAAhlIARAAIAABlIARAAIAAAjQAAABAAAAQAAABAAABQAAAAgBAAQAAABAAAAIgEABg");
	this.shape_76.setTransform(92.3,99.9,0.876,0.876);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#19B7E4").s().p("AAfA5QAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAIgfguQgDgDgCAAQgCgCgEAAIgOAAIAAA0IgQAAIAAhyIAQAAIAAAyIAMAAIADAAIADgBQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAAAIADgDIAcgoIADgDQABAAAAgBQAAAAABAAQABAAAAAAQABgBAAAAIAOAAIgiAwQgDAFgGACIAGADIAGAHIAiAxg");
	this.shape_77.setTransform(82.2,98.7,0.876,0.876);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#19B7E4").s().p("AAeA5IAAg0Ig7AAIAAA0IgRAAIAAhyIARAAIAAAzIA7AAIAAgzIARAAIAAByg");
	this.shape_78.setTransform(71.5,98.7,0.876,0.876);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#19B7E4").s().p("AgaA5QgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBIAAgKIAGAAIAIgCIADgCIAJgRIguhQIAPAAIAEABIACADIAbAyIAEALIAcg9IACgDIAEgBIANAAIguBiQgCAGgCADQgDADgDABIgGADIgHABg");
	this.shape_79.setTransform(61.8,98.8,0.876,0.876);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#19B7E4").s().p("AgHA8IAAgOQgLAAgJgEQgIgDgHgHQgHgGgDgJQgEgHAAgKQAAgKAEgHQADgIAHgHQAHgGAIgEQALgDAJAAIAAgOIAPAAIAAAOQAJAAALADQAKAFAFAFQAHAHAEAIQADAJAAAIQAAAIgDAJQgEAHgHAIQgHAHgIADQgLAEgJAAIAAAOgAAIAhQAHAAAGgDQAGgCAEgFQAEgEADgHQADgGgBgGQABgGgDgGQgDgHgEgEQgEgFgGgCQgEgCgJgBgAgUgeQgFACgGAFQgDAEgDAHQgCAGgBAGQABAGACAGQADAHADAEQAGAGAFABQAGADAHAAIAAhCQgJABgEACg");
	this.shape_80.setTransform(52.3,98.5,0.876,0.876);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#19B7E4").s().p("AgPA2QgJgDgIgJQgIgIgDgKQgEgLAAgNQAAgLAEgMQAEgLAHgHQAIgIAKgEQALgFALAAQAMAAAKAEQAKAFAGAGIgGAJIgDABIgDgCIgFgDIgJgEQgFgBgHAAQgIAAgHADQgHADgFAGQgFAFgDAIQgDAJAAAJQAAALADAIQADAIAFAGQAEAFAIAEQAHADAIAAIAQgDIAGgDIAGgFIADgBIADABIAGAHQgIAJgJAEQgKAFgOAAQgMAAgKgFg");
	this.shape_81.setTransform(38.7,98.7,0.876,0.876);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#4D575B").s().p("AApA6IAAhzIARAAIAABzgAg5A6IAAhzIARAAIAAAyIAVAAQAKAAAJACQAGADAFADQAFAEACAFQADAFAAAHQAAAIgDAHQgDAIgFADQgEAEgIADQgIACgJABgAgoAsIAVAAQAHAAAEgCQAGgBACgCQABgDACgEQACgDAAgFIgCgIQgBgDgCgDQgCgCgGgCQgEgBgHgBIgVAAg");
	this.shape_82.setTransform(102.4,80.9,0.876,0.876);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#4D575B").s().p("AgGA8IAAgOQgLAAgJgEQgKgEgGgGQgGgGgEgIQgEgKAAgIQAAgIAEgJQAEgIAGgHQAGgGAKgEQAJgDALAAIAAgOIAOAAIAAAOQALAAAJADQAKAFAFAFQAGAGAFAJQADAIAAAJQAAAKgDAIQgEAIgHAGQgHAGgIAEQgJAEgLAAIAAAOgAAIAhQAIAAAFgDQAFgCAFgFQAEgEADgHQADgFgBgHQABgHgDgGQgDgGgEgEQgFgFgFgCQgDgCgKgBgAgUgeQgGACgFAFQgEAGgCAEQgCAHgBAGQABAGACAGQACAFAEAGQAFAFAGACQAGADAIAAIAAhCQgKABgEACg");
	this.shape_83.setTransform(90.6,80.7,0.876,0.876);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#4D575B").s().p("AAqA6QgBAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBIgKgbIgzAAIgKAbQAAABAAAAQAAABgBAAQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAIgMAAIAthzIARAAIAtBzgAgCgeIgSAsIApAAIgVg3g");
	this.shape_84.setTransform(80.7,80.9,0.876,0.876);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#4D575B").s().p("AAgA6QgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAIgDgEIgcgpQgDgEgCgBQgCgBgEAAIgOAAIAAA1IgRAAIAAhzIARAAIAAAzIAMAAIADgBIADgBIACgCIADgCIAcgoIADgDIAFgCIANAAIgiAvQgEAGgFACQAEACACABIAGAHIAiAyg");
	this.shape_85.setTransform(71.8,80.9,0.876,0.876);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#4D575B").s().p("AhHA6IAAhzIARAAIAABlIAvAAIAAhlIAPAAIAABlIAvAAIAAhlIARAAIAABzg");
	this.shape_86.setTransform(58.9,80.9,0.876,0.876);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#4D575B").s().p("AgjA6IAAhzIBGAAIAAAOIg1AAIAAAlIArAAIAAAMIgrAAIAAAmIA1AAIAAAOg");
	this.shape_87.setTransform(111.3,62.5,0.876,0.876);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#4D575B").s().p("AApA6IAAhzIARAAIAABzgAg5A6IAAhzIARAAIAAAyIAVAAQAKAAAJACQAHADAEADQAFADADAGQACAHAAAFQAAAJgDAGQgDAIgFADQgEAEgHADQgJACgJABgAgoAsIAVAAQAHAAAFgCQAFgBACgCIADgHQACgDAAgFIgCgIQgBgFgCgBQgCgCgFgCQgFgBgHgBIgVAAg");
	this.shape_88.setTransform(100.6,62.5,0.876,0.876);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#4D575B").s().p("AgoA6IAAhzIAmAAQAKAAAHACQAHACAFAEQAFAEACAGQADAFAAAHQAAAFgCADIgDAIIgHAGIgJAEQANACAFAGQAHAGAAALQAAAIgDAGQgCAGgGAEQgEAFgJACQgIACgJABgAgYAsIAYAAQAHAAAEgCQAFgBADgCQACgDACgEQABgEABgEQAAgJgHgEQgFgGgNAAIgYAAgAgYgFIAVAAQAFgBAFgBQADgBAFgDIAEgFQABgEAAgEQAAgLgFgEQgHgFgKABIgWAAg");
	this.shape_89.setTransform(90,62.5,0.876,0.876);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#4D575B").s().p("AgWA2QgLgDgHgJQgGgGgGgMQgEgLAAgNQAAgLAEgMQAFgLAHgHQAHgIALgEQAKgFAMAAQANAAAKAFQALAEAHAIQAHAHAFALQAEAMAAALQAAANgEALQgFAMgHAGQgHAJgLADQgKAFgNAAQgMAAgKgFgAgPgoQgIADgFAGQgFAEgDAKQgDAIAAAJQAAALADAIQADAIAFAGQAFAFAIADQAHADAIAAQAJAAAIgDQAHgDAFgFQAFgGADgIQADgHAAgMQAAgKgDgHQgDgKgFgEQgFgGgHgDQgIgDgJAAQgIAAgHADg");
	this.shape_90.setTransform(79.6,62.4,0.876,0.876);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#4D575B").s().p("AAiA6IgCgBIgCgDIgegwIgBAEIgdAsIgCADIgCABIgQAAIAng7Iglg4IARAAIACABIABABIAdAuIACgEIAbgpQAAgBABAAQAAgBABAAQAAAAABAAQAAgBAAAAIARAAIgmA3IAnA8g");
	this.shape_91.setTransform(69.8,62.5,0.876,0.876);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#4D575B").s().p("AgaA5QgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAgKIAFAAIAIgBIAEgEIADgEIAFgLIguhRIAPAAIAEABIACADIAbAyIAEALIAFgLIAXgyIACgDIAEgBIANAAIguBjIgEAIIgFAEQgCACgFABIgHABg");
	this.shape_92.setTransform(60.8,62.5,0.876,0.876);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#4D575B").s().p("AAtBHIAAgbIhaAAIAAAWQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgEABIgKAAIAAgoIAMAAIAFgEIAFgIIAEgMIAGgsIACghIBEAAIAABlIATAAIAAAjQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgEABgAgNgYIgEAZIgGASIgGAMIA2AAIAAhYIgkAAg");
	this.shape_93.setTransform(51,63.7,0.876,0.876);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#19B7E4").s().p("AApA5QAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAIgCgCIgLgbIgyAAIgKAbIgCACQAAAAgBABQAAAAAAAAQgBAAgBAAQAAAAgBAAIgMAAIAthyIAQAAIAuBygAgBgiIgTAwIApAAIgVg3g");
	this.shape_94.setTransform(93.2,116.5,0.876,0.876);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#19B7E4").s().p("AgmA5IAAhyIAjAAQAJAAAJADQAIACAFAGQAFAEADAHQADAHAAAHQAAAHgDAIQgDAGgFAEQgFAGgJACQgIADgJAAIgSAAIAAAqgAgVABIASAAQAFAAAFgBQAEAAAFgEQADgDACgEQABgFAAgFQAAgFgBgFQgCgDgDgDQgDgEgGgBQgEgCgGABIgSAAg");
	this.shape_95.setTransform(85.3,116.5,0.876,0.876);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#19B7E4").s().p("AAqA5QgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAAAIgLgbIgyAAIgKAbQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAIgNAAIAthyIAQAAIAuBygAgCgeIgSAsIApAAIgUgwIgBgHg");
	this.shape_96.setTransform(75.9,116.5,0.876,0.876);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#19B7E4").s().p("AAcA5IAAhkIg3AAIAABkIgRAAIAAhyIBZAAIAAByg");
	this.shape_97.setTransform(66,116.5,0.876,0.876);

	var maskedShapeInstanceList = [this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73}]},158).to({state:[]},80).wait(158));

	// mask - копия (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_79 = new cjs.Graphics().p("ACkQFIAAgTMgvzAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDYkFIAAAAIAAgJMAqyAAAMAAAAgJgACxPyg");
	var mask_3_graphics_80 = new cjs.Graphics().p("ACkQFIAAgTMgvzAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDYkFIAAAAIAAgJMAqyAAAMAAAAgJgACxPyg");
	var mask_3_graphics_81 = new cjs.Graphics().p("ACkQFIAAgTMgvzAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDYkFIAAAAIAAgJMAqyAAAMAAAAgJgACxPyg");
	var mask_3_graphics_82 = new cjs.Graphics().p("ACkQFIAAgTMgvzAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDYkFIAAAAIAAgJMAqyAAAMAAAAgJgACxPyg");
	var mask_3_graphics_83 = new cjs.Graphics().p("ACjQFIAAgTMgvyAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDXkFIAAAAIAAgJMAqzAAAMAAAAgJgACxPyg");
	var mask_3_graphics_84 = new cjs.Graphics().p("ACjQFIAAgTMgvyAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDXkFIAAAAIAAgJMAqzAAAMAAAAgJgACxPyg");
	var mask_3_graphics_85 = new cjs.Graphics().p("ACkQFIAAgTMgvzAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDYkFIAAAAIAAgJMAqyAAAMAAAAgJgACxPyg");
	var mask_3_graphics_86 = new cjs.Graphics().p("ACjQFIAAgTMgvyAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDXkFIAAAAIAAgJMAqzAAAMAAAAgJgACxPyg");
	var mask_3_graphics_87 = new cjs.Graphics().p("ACjQFIAAgTMgvyAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDXkFIAAAAIAAgJMAqzAAAMAAAAgJgACxPyg");
	var mask_3_graphics_150 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_3_graphics_151 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_3_graphics_152 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_3_graphics_153 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_3_graphics_154 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_3_graphics_155 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_3_graphics_156 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_3_graphics_157 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_3_graphics_158 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(79).to({graphics:mask_3_graphics_79,x:263.9,y:144.4}).wait(1).to({graphics:mask_3_graphics_80,x:195.3,y:144.4}).wait(1).to({graphics:mask_3_graphics_81,x:135.9,y:144.4}).wait(1).to({graphics:mask_3_graphics_82,x:85.5,y:144.4}).wait(1).to({graphics:mask_3_graphics_83,x:44.4,y:144.4}).wait(1).to({graphics:mask_3_graphics_84,x:12.3,y:144.4}).wait(1).to({graphics:mask_3_graphics_85,x:-10.5,y:144.4}).wait(1).to({graphics:mask_3_graphics_86,x:-24.2,y:144.4}).wait(1).to({graphics:mask_3_graphics_87,x:-28.8,y:144.4}).wait(1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_3_graphics_150,x:140.5,y:147.7}).wait(1).to({graphics:mask_3_graphics_151,x:70.3,y:147.7}).wait(1).to({graphics:mask_3_graphics_152,x:9.4,y:147.7}).wait(1).to({graphics:mask_3_graphics_153,x:-42.2,y:147.7}).wait(1).to({graphics:mask_3_graphics_154,x:-84.4,y:147.7}).wait(1).to({graphics:mask_3_graphics_155,x:-117.1,y:147.7}).wait(1).to({graphics:mask_3_graphics_156,x:-140.6,y:147.7}).wait(1).to({graphics:mask_3_graphics_157,x:-154.6,y:147.7}).wait(1).to({graphics:mask_3_graphics_158,x:-159.3,y:147.7}).wait(238));

	// t2
	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#19B7E4").s().p("AAeBIIABhfIgGANIgzBMIgDAEQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgMAAIAAhyIARAAIgBBeIADgHIADgFIAzhNIADgEIAFgBIAMAAIAABygAgQg2QgHgFAAgHIABgDQABgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAIAJAAIABAHIABAEIAEACIAEABIAGgBIADgCIACgEIABgHIAJAAQABAAAAAAQAAAAABABQAAAAAAAAQAAAAABABIAAADQAAAIgGAEQgHAEgLAAQgKAAgGgEg");
	this.shape_98.setTransform(134,125.8,0.876,0.876);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#19B7E4").s().p("AAeA5IAAhWIABgIIgGANIgzBMIgDAEQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgMAAIAAhyIARAAIgBBfIAGgNIAzhMIADgEQABAAAAgBQABAAAAAAQABAAAAAAQABgBABAAIAMAAIAAByg");
	this.shape_99.setTransform(123.2,127,0.876,0.876);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#19B7E4").s().p("AAmBHIAAgbIhaAAIAAhyIAQAAIAABlIA3AAIAAhlIARAAIAABlIARAAIAAAkQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgEABg");
	this.shape_100.setTransform(112.8,128.2,0.876,0.876);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#19B7E4").s().p("AApA5QAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIgLgbIgxAAIgLAbQAAAAAAAAQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgMAAIAuhyIAQAAIAtBygAgUAOIApAAIgTgwIgCgHg");
	this.shape_101.setTransform(102.2,127,0.876,0.876);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#19B7E4").s().p("AgmA5IAAhyIAjAAQAJAAAJADQAJADAEAEQAFAFADAHQADAHAAAHQAAAJgDAGQgCAGgGAEQgFAGgJACQgIADgJAAIgSAAIAAAqgAgVACIASAAQAFgBAFgBQAGgBACgDIAGgHQABgFAAgFQAAgFgBgFQgCgDgDgEQgEgDgFgBQgEgBgGAAIgSAAg");
	this.shape_102.setTransform(94.3,127,0.876,0.876);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#19B7E4").s().p("AgaA5QgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBIAAgKIAKAAIAEgBIADgDIAJgQIguhRIAPAAIADABIADADIAbAyQACAFACAGIACgGIAag3IACgDIADgBIAOAAIgvBjIgDAIIgGAEIgGADIgHABg");
	this.shape_103.setTransform(85.3,127.1,0.876,0.876);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#19B7E4").s().p("AgiA5IAAhyIBFAAIAAAOIg0AAIAABkg");
	this.shape_104.setTransform(77.6,127,0.876,0.876);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#19B7E4").s().p("AAeA5IAAhWIABgIIgDAHIg2BSIgDAEQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgMAAIAAhyIARAAIAABPIgBAQIAGgNIAzhMIADgEQABAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAIANAAIAAByg");
	this.shape_105.setTransform(67.9,127,0.876,0.876);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#19B7E4").s().p("AgGA8IAAgOQgLAAgKgEQgJgEgGgGQgGgGgFgIQgDgKAAgIQAAgIADgJQAFgIAGgHQAFgFAKgFQAKgDALAAIAAgOIAOAAIAAAOQALAAAJADQAKAEAFAGQAHAHADAIQAEAIAAAJQAAAKgEAIQgDAIgHAGQgHAGgIAEQgJAEgLAAIAAAOgAAIAhQAHAAAHgDQAFgCAFgFQADgEADgHQACgFABgHQgBgHgCgFQgCgHgEgEQgEgEgGgDIgOgDgAgUgeQgHADgDAEQgEAEgDAHQgDAGABAGQgBAGADAGQADAHAEAEQAEAFAGACQAGADAIAAIAAhCIgOADg");
	this.shape_106.setTransform(57,126.8,0.876,0.876);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#19B7E4").s().p("AAeA5IAAg0Ig8AAIAAA0IgQAAIAAhyIAQAAIAAA0IA8AAIAAg0IARAAIAAByg");
	this.shape_107.setTransform(46.2,127,0.876,0.876);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#19B7E4").s().p("AgWA2QgLgDgHgJQgIgIgEgKQgEgKAAgOQAAgNAEgJQAEgKAIgJQAHgIALgEQAKgFAMAAQANAAAKAFQALAEAHAIQAHAHAFAMQAEALAAALQAAANgEALQgFALgHAHQgHAJgLADQgKAFgNAAQgMAAgKgFgAgQgoQgHADgFAGQgFAEgDAKQgDAIAAAJQAAALADAIQADAIAFAGQAFAFAHADQAIADAIAAQAKAAAGgDQAIgDAFgFQAFgGADgIQADgJAAgKQAAgIgDgJQgDgKgFgEQgFgGgIgDQgGgDgKAAQgIAAgIADg");
	this.shape_108.setTransform(35.2,127,0.876,0.876);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#19B7E4").s().p("AAfA5QAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAIgDgEIgcgpQgCgEgDgBQgCgBgEAAIgOAAIAAA0IgQAAIAAhyIAQAAIAAAzIAMAAIAGgBIAFgFIAcgoIADgDQABAAAAgBQAAAAABAAQAAAAABAAQABgBAAAAIAOAAIgiAvQgEAHgFABQAEACACABQADACADAFIAiAxg");
	this.shape_109.setTransform(25.9,127,0.876,0.876);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#19B7E4").s().p("AAuA6IAAhWIAAgEIgnBFIgCAEIgDAAIgCAAQgEAAgCgEIgnhFIAAAEIAABWIgOAAIAAhyIAMAAIAEAAQAAAAAAAAQABAAAAABQAAAAAAAAQABABAAAAIAnBFIACAJIAEgJIAmhFQABAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIADAAIAMAAIAAByg");
	this.shape_110.setTransform(110.6,108.6,0.876,0.876);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#19B7E4").s().p("AgWA2QgLgDgHgJQgIgIgEgKQgDgKAAgOQAAgNADgJQAEgKAIgJQAHgIALgEQALgFALAAQANAAAKAFQALAEAHAIQAIAHAEAMQADAKAAAMQAAAOgDAKQgEALgIAHQgHAJgLADQgKAFgNAAQgLAAgLgFgAgQgoQgHADgFAGQgFAEgDAKQgDAIAAAJQAAALADAIQADAIAFAGQAGAFAGADQAIADAIAAQAKAAAHgDQAHgDAFgFQAFgGADgIQADgJAAgKQAAgIgDgJQgDgKgFgEQgFgGgHgDQgHgDgKAAQgIAAgIADg");
	this.shape_111.setTransform(98.5,108.6,0.876,0.876);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#19B7E4").s().p("AgmA6IAAhyIAjAAQAJgBAJADQAJAEAEADQAFAFADAGQADAIAAAIQAAAIgDAGQgCAGgGAFQgFAFgJACQgIADgJAAIgSAAIAAArgAgVABIASAAQAFAAAFgBQAGgBACgDQAEgCABgFQACgEAAgFQAAgGgBgEIgFgIQgEgCgFgCIgKgCIgSAAg");
	this.shape_112.setTransform(89.1,108.6,0.876,0.876);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#19B7E4").s().p("AgWA2QgKgDgIgJQgHgHgFgLQgEgLAAgNQAAgLAEgLQAEgLAIgIQAIgIAKgEQAKgFAMAAQANAAAKAFQALAEAHAIQAIAJAEAKQAEAJAAANQAAAOgEAKQgEAKgIAIQgHAJgLADQgKAFgNAAQgMAAgKgFgAgPgoQgHADgGAGQgFAFgDAJQgDAJAAAIQAAAKADAJQACAHAGAHQAGAGAHACQAHADAIAAQAJAAAIgDQAGgCAGgGQAFgGADgIQADgIAAgLQAAgJgDgIQgDgKgFgEQgFgGgHgDQgIgDgJAAQgIAAgHADg");
	this.shape_113.setTransform(78.8,108.6,0.876,0.876);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#19B7E4").s().p("AgmA6IAAhyIBJAAIAAAMIg5AAIAAAkIAWAAQAIAAAJADQAIACAFADQAEAFADAFQADAGAAAHQgBAHgDAHQgCAGgFAFQgGAFgHACQgJADgHAAgAgWAsIAWAAIAKgCQAFgBACgCQADgDACgDIABgJIgBgIQgCgEgDgCQgCgCgFgCQgFgCgFABIgWAAg");
	this.shape_114.setTransform(69.2,108.6,0.876,0.876);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#19B7E4").s().p("AApA6IAAhyIARAAIAABygAg5A6IAAhyIAQAAIAAAwIAWAAQAKAAAIADQAHACAFADQAFAFACAFQADAFAAAIQAAAGgDAIQgDAGgFAFQgFAFgHACQgIADgJAAgAgpAsIAWAAQAHAAAEgCQAGgBACgCQACgDABgDIABgJIgBgIQgBgEgCgCQgCgCgGgCQgEgCgHABIgWAAg");
	this.shape_115.setTransform(58.2,108.6,0.876,0.876);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#19B7E4").s().p("AgoA6IAAhyIAlAAQALAAAHABQAIADAEAEQAFADADAGQACAHAAAFQAAAFgBADIgEAIIgHAGIgJAEQAMACAHAGQAGAHAAAKQAAAJgDAFQgDAGgFAEQgGAFgGACQgJADgJAAgAgXAsIAXAAQAHAAAEgCQAGgBACgCQADgEABgDQACgDAAgFQAAgJgGgFQgHgEgMAAIgXAAgAgXgFIAegCIAIgEQADgBABgFQACgDAAgFQAAgJgGgFQgGgFgMAAIgUAAg");
	this.shape_116.setTransform(47.6,108.6,0.876,0.876);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#4D575B").s().p("AgjA5IAAhyIBGAAIAAAOIg1AAIAAAlIArAAIAAAMIgrAAIAAAmIA1AAIAAANg");
	this.shape_117.setTransform(115.4,53.4,0.876,0.876);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#4D575B").s().p("AApA5IAAhyIARAAIAABygAg5A5IAAhyIARAAIAAAyIAWAAQAJAAAJACQAHACAEAEQAFADADAHQACAGAAAFQAAAJgDAGQgCAGgGAFQgGAFgFACQgJACgJAAgAgoAsIAVAAQAHAAAFgCQAFgBACgCQACgCABgFQACgDAAgFQAAgEgCgEQAAgEgDgCQgCgCgFgCQgFgBgGgBIgWAAg");
	this.shape_118.setTransform(104.7,53.4,0.876,0.876);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#4D575B").s().p("AAfA5IAAg0Ig9AAIAAA0IgQAAIAAhyIAQAAIAAA0IA9AAIAAg0IAQAAIAAByg");
	this.shape_119.setTransform(93,53.4,0.876,0.876);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#4D575B").s().p("AAaA5IAAgwIghAEIgOgBQgGgCgFgFQgEgDgDgGQgCgFAAgKIAAgmIAQAAIAAAmQAAAIADAFQADAEAHACQAHABAIAAQAHgBAQgDIAAg2IAQAAIAAByg");
	this.shape_120.setTransform(82.7,53.4,0.876,0.876);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#4D575B").s().p("AgWA2QgKgDgIgJQgIgIgEgKQgEgLAAgNQAAgMAEgKQAEgKAIgJQAIgIAKgEQALgFALAAQANAAALAFQAJAEAIAIQAIAIAEALQAEALAAALQAAANgEALQgFALgHAHQgHAJgKADQgLAFgNAAQgLAAgLgFgAgQgoQgGADgGAGQgFAGgDAIQgDAIAAAJQAAALADAIQACAHAGAHQAGAGAGACQAIADAIAAQAJAAAHgDQAHgCAGgGQAGgHACgHQADgIAAgLQAAgJgDgIQgCgIgGgGQgGgGgHgDQgHgDgJAAQgIAAgIADg");
	this.shape_121.setTransform(72.7,53.4,0.876,0.876);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#4D575B").s().p("AgmA5IAAhyIAiAAQAKAAAIADQAKADAEAEQAGAGACAGQADAHAAAHQAAAJgDAGQgEAHgEADQgGAFgIADQgHADgLAAIgSAAIAAAqgAgWACIASAAQAHgBAEgBQAGAAACgEQAEgEABgDIACgKQAAgGgCgEQgBgEgEgDQgCgCgFgCQgGgBgGAAIgSAAg");
	this.shape_122.setTransform(63.3,53.4,0.876,0.876);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#4D575B").s().p("AApA5QAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAIgCgCIgLgbIgyAAIgKAbIgCACQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAIgNAAIAuhyIAPAAIAuBygAgBgiIgTAwIApAAIgSgsIgDgLg");
	this.shape_123.setTransform(53.9,53.4,0.876,0.876);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#4D575B").s().p("AgoA5IAAhyIAlAAQALAAAHACQAIADAEADQAFAEADAGQACAGAAAHQAAAEgBADIgEAIIgHAGIgJAEQAMACAHAGQAGAHAAAKQAAAJgDAFQgDAHgFADQgGAFgGACQgJACgJAAgAgXAsIAXAAQAHAAAEgCQAGgBACgCQADgDABgEQACgEAAgEQAAgJgGgEQgGgGgNAAIgXAAgAgXgFIAegBIAIgFQADgCABgDQACgEAAgEQAAgLgGgEQgGgFgMABIgUAAg");
	this.shape_124.setTransform(45,53.4,0.876,0.876);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#4D575B").s().p("AAeA5IAAhWIABgIIgGAMIgzBNQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgMAAIAAhxIARAAIgBBeIAGgMIAzhOIADgDQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAIANAAIAABxg");
	this.shape_125.setTransform(127.9,71.8,0.876,0.876);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#4D575B").s().p("AgHA5IAAhkIglAAIAAgNIBZAAIAAANIgkAAIAABkg");
	this.shape_126.setTransform(118.4,71.8,0.876,0.876);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#4D575B").s().p("AgPA3QgLgFgGgIQgHgHgEgLQgEgKAAgOQAAgLAEgMQADgJAJgJQAHgIALgEQAKgFALAAQAMAAAKAFQAJAEAHAGIgFAIIgBABIgDABIgDgCIgGgDIgIgEQgFgBgHAAQgIAAgHADQgHADgFAGQgFAFgEAIQgCAJAAAJQAAALADAIQADAJAFAFQAGAGAGADQAHADAHAAIAJgBIAIgCIAHgDIAHgFIABgBIADABIAGAHQgHAJgKAEQgKAFgOAAQgLAAgLgEg");
	this.shape_127.setTransform(109.7,71.8,0.876,0.876);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#4D575B").s().p("AgWA2QgKgDgIgJQgIgHgEgLQgEgLAAgNQAAgLAEgLQAEgLAIgIQAIgIAKgEQAKgFAMAAQANAAAKAFQALAEAHAIQAIAJADAKQAFAKAAAMQAAANgFALQgDAKgIAIQgHAJgLADQgKAFgNAAQgMAAgKgFgAgPgoQgIADgFAGQgGAGgCAIQgDAIAAAJQAAALADAIQACAHAGAHQAGAGAHACQAHADAIAAQAJAAAHgDQAHgCAGgGQAGgHACgHQADgIAAgLQAAgJgDgIQgCgIgGgGQgFgGgIgDQgHgDgJAAQgIAAgHADg");
	this.shape_128.setTransform(99.3,71.8,0.876,0.876);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#4D575B").s().p("AAeA5IAAgzIg7AAIAAAzIgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_129.setTransform(88.3,71.8,0.876,0.876);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#4D575B").s().p("AAiA5IgDgBIgfgxIAAACIggAvIgCABIgQAAIAng5Iglg4IAQAAIADAAIAeAvIAAgCIAdgrQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAIAPAAIglA3IAnA6g");
	this.shape_130.setTransform(78.4,71.8,0.876,0.876);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#4D575B").s().p("AgmA5IAAhxIAjAAQAJAAAJACQAJAEAEAEQAFAEADAHQADAHAAAIQAAAHgDAHQgEAGgEAEQgHAGgHACQgIADgJAAIgSAAIAAAqgAgVABIASAAQAFABAFgCQAGgBACgDQAEgDABgEQACgEAAgFQAAgGgBgFIgFgGQgEgEgFgBQgFgBgFgBIgSAAg");
	this.shape_131.setTransform(70.2,71.8,0.876,0.876);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#4D575B").s().p("AgiA5IAAhxIBGAAIAAANIg2AAIAAAlIArAAIAAAMIgrAAIAAAmIA2AAIAAANg");
	this.shape_132.setTransform(61.8,71.8,0.876,0.876);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#4D575B").s().p("AgoA5IAAhxIAlAAQALAAAHACQAHABAFAEQAFAFACAFQADAFAAAIIgBAIIgEAHIgHAGIgJAEQANACAFAHQAHAFAAAMQAAAHgDAGQgCAFgFAFQgGAFgIACQgIACgJAAgAgXAsIAXAAQAGAAAFgBQAGgCACgDQADgDABgDQACgEgBgEQABgJgHgFQgFgEgNAAIgXAAgAgXgGIAegBIAHgDQADgCACgFQACgDAAgFQgBgKgGgEQgFgEgMgBIgUAAg");
	this.shape_133.setTransform(53.2,71.8,0.876,0.876);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#4D575B").s().p("AgWA2QgLgDgHgJQgHgHgFgLQgEgLAAgNQAAgLAEgLQAFgMAHgHQAHgIALgEQAKgFAMAAQANAAAKAFQALAEAHAIQAIAJAEAKQAEAJAAANQAAAOgEAKQgEAKgIAIQgHAJgLADQgKAFgNAAQgMAAgKgFgAgPgoQgIADgFAGQgFAEgDAKQgDAHAAAKQAAAMADAHQADAIAFAGQAFAFAIADQAHADAIAAQAJAAAIgDQAHgDAFgFQAFgGADgIQADgIAAgLQAAgJgDgIQgDgKgFgEQgFgGgHgDQgIgDgJAAQgIAAgHADg");
	this.shape_134.setTransform(42.7,71.8,0.876,0.876);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#4D575B").s().p("AAcA5IAAhlIg3AAIAABlIgRAAIAAhxIBZAAIAABxg");
	this.shape_135.setTransform(31.9,71.8,0.876,0.876);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#19B7E4").s().p("AAuA6IAAhaIgnBFIgCAEIgEAAIgBAAQgEAAgCgEIgnhFIAABaIgOAAIAAhyIAMAAIADAAIADACIApBOIAEgJIAmhFQABAAAAgBQAAAAAAAAQABgBAAAAQAAAAAAAAIAEAAIAMAAIAAByg");
	this.shape_136.setTransform(119.6,90.2,0.876,0.876);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#19B7E4").s().p("AAeA6IABhfIgGAMIgzBNIgDADQgBABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAIgMAAIAAhyIARAAIgBBeIADgHIADgGIAzhNIADgDIAEgBIANAAIAAByg");
	this.shape_137.setTransform(107.7,90.2,0.876,0.876);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#19B7E4").s().p("AAfA6QAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAIgEgEIgcgpQgCgDgCgCQgEgBgDAAIgOAAIAAA1IgQAAIAAhyIAQAAIAAAxIAMAAIAGgBIAFgEIAcgoIADgDIAEgBIAPAAIgjAuQgEAHgFABQAFACABABIAGAHIAjAyg");
	this.shape_138.setTransform(98.2,90.2,0.876,0.876);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#19B7E4").s().p("AgWA2QgLgDgHgJQgHgHgFgLQgEgLAAgNQAAgLAEgLQAFgMAHgHQAHgIALgEQAKgFAMAAQANAAAKAFQALAEAHAIQAHAHAFAMQAEALAAALQAAANgEALQgFALgHAHQgHAJgLADQgKAFgNAAQgMAAgKgFgAgQgoQgHADgFAGQgFAEgDAKQgDAIAAAJQAAALADAIQADAIAFAGQAFAFAHADQAIADAIAAQAKAAAGgDQAIgDAFgFQAFgGADgIQADgJAAgKQAAgIgDgJQgDgKgFgEQgFgGgIgDQgGgDgKAAQgIAAgIADg");
	this.shape_139.setTransform(87.3,90.2,0.876,0.876);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#19B7E4").s().p("AgmA6IAAhyIAjAAQAJgBAJADQAJAEAEADQAFAFADAGQADAIAAAIQAAAIgDAGQgCAGgGAFQgFAFgJACQgIADgJAAIgSAAIAAArgAgVABIASAAQAFAAAFgBQAGgBACgDIAGgHQABgFAAgEQAAgGgBgEQgCgEgDgEQgEgCgFgCQgFgCgFAAIgSAAg");
	this.shape_140.setTransform(77.8,90.2,0.876,0.876);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#19B7E4").s().p("AAeA6IAAhXIABgIIgGAMIgzBNQAAABgBAAQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAIgNAAIAAhyIARAAIAABWIgBAIIADgHIA2hTIADgDIAFgBIAMAAIAAByg");
	this.shape_141.setTransform(67.8,90.2,0.876,0.876);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#19B7E4").s().p("AhHA6IAAhyIARAAIAABkIAvAAIAAhkIAPAAIAABkIAvAAIAAhkIARAAIAAByg");
	this.shape_142.setTransform(54.9,90.2,0.876,0.876);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#19B7E4").s().p("AgPA3QgKgFgIgIQgHgIgEgKQgDgKAAgOQAAgNAEgKQAEgJAHgJQAIgIAKgEQALgFALAAQANAAAIAFQAKAEAHAGIgFAIIgCABIgCABIgDgCIgGgDIgIgEQgFgBgHAAQgIAAgHADQgHADgFAGQgFAEgDAJQgDAJAAAJQAAALADAIQADAIAFAGQAGAGAGADQAHADAIAAIAJgBIAHgCIAGgDIAGgEIABgBIACgBIADABIAGAHQgHAJgKAEQgLAFgNAAQgLAAgLgEg");
	this.shape_143.setTransform(39.3,90.2,0.876,0.876);

	var maskedShapeInstanceList = [this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128,this.shape_129,this.shape_130,this.shape_131,this.shape_132,this.shape_133,this.shape_134,this.shape_135,this.shape_136,this.shape_137,this.shape_138,this.shape_139,this.shape_140,this.shape_141,this.shape_142,this.shape_143];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98}]},79).to({state:[]},80).wait(237));

	// mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_0 = new cjs.Graphics().p("ACkQFIAAgTMgvzAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDYkFIAAAAIAAgJMAqyAAAMAAAAgJgACxPyg");
	var mask_4_graphics_1 = new cjs.Graphics().p("ACkQFIAAgTMgvzAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDYkFIAAAAIAAgJMAqyAAAMAAAAgJgACxPyg");
	var mask_4_graphics_2 = new cjs.Graphics().p("ACkQFIAAgTMgvzAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDYkFIAAAAIAAgJMAqyAAAMAAAAgJgACxPyg");
	var mask_4_graphics_3 = new cjs.Graphics().p("ACkQFIAAgTMgvzAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDYkFIAAAAIAAgJMAqyAAAMAAAAgJgACxPyg");
	var mask_4_graphics_4 = new cjs.Graphics().p("ACjQFIAAgTMgvyAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDXkFIAAAAIAAgJMAqzAAAMAAAAgJgACxPyg");
	var mask_4_graphics_5 = new cjs.Graphics().p("ACjQFIAAgTMgvyAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDXkFIAAAAIAAgJMAqzAAAMAAAAgJgACxPyg");
	var mask_4_graphics_6 = new cjs.Graphics().p("ACkQFIAAgTMgvzAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDYkFIAAAAIAAgJMAqyAAAMAAAAgJgACxPyg");
	var mask_4_graphics_7 = new cjs.Graphics().p("ACjQFIAAgTMgvyAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDXkFIAAAAIAAgJMAqzAAAMAAAAgJgACxPyg");
	var mask_4_graphics_8 = new cjs.Graphics().p("ACjQFIAAgTMgvyAAAIgGxmQAqATBOAaIAAAAQCcAyCuAbIAAAAQIxBbIiihIAAAAQIXieG5k4IAAAAQE8jgDXkFIAAAAIAAgJMAqzAAAMAAAAgJgACxPyg");
	var mask_4_graphics_71 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_4_graphics_72 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_4_graphics_73 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_4_graphics_74 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_4_graphics_75 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_4_graphics_76 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_4_graphics_77 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_4_graphics_78 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");
	var mask_4_graphics_79 = new cjs.Graphics().p("A35PlIAAgTMAqyAAAIAAATgA0VAnQhfgLhagOIAAAAIAAvyMAvIAAAIAAAMQjYEEk6DeIAAAAQm5E4oWCeIAAAAQk0Bbk5ALIAAAAIAAAAIh3ABIAAAAQkkAAkmggg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:mask_4_graphics_0,x:263.9,y:144.4}).wait(1).to({graphics:mask_4_graphics_1,x:195.3,y:144.4}).wait(1).to({graphics:mask_4_graphics_2,x:135.9,y:144.4}).wait(1).to({graphics:mask_4_graphics_3,x:85.5,y:144.4}).wait(1).to({graphics:mask_4_graphics_4,x:44.4,y:144.4}).wait(1).to({graphics:mask_4_graphics_5,x:12.3,y:144.4}).wait(1).to({graphics:mask_4_graphics_6,x:-10.5,y:144.4}).wait(1).to({graphics:mask_4_graphics_7,x:-24.2,y:144.4}).wait(1).to({graphics:mask_4_graphics_8,x:-28.8,y:144.4}).wait(1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_4_graphics_71,x:140.5,y:147.7}).wait(1).to({graphics:mask_4_graphics_72,x:70.3,y:147.7}).wait(1).to({graphics:mask_4_graphics_73,x:9.4,y:147.7}).wait(1).to({graphics:mask_4_graphics_74,x:-42.2,y:147.7}).wait(1).to({graphics:mask_4_graphics_75,x:-84.4,y:147.7}).wait(1).to({graphics:mask_4_graphics_76,x:-117.1,y:147.7}).wait(1).to({graphics:mask_4_graphics_77,x:-140.6,y:147.7}).wait(1).to({graphics:mask_4_graphics_78,x:-154.6,y:147.7}).wait(1).to({graphics:mask_4_graphics_79,x:-159.3,y:147.7}).wait(317));

	// t1
	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.lf(["#408734","#32702B","#7CAD35","#387B2F"],[0,0.298,0.671,1],13.7,-9.7,-12.8,11).s().p("AjCAbIgagcIgXgdQA1A0BSgYQBggqAwgNQAlgJAdAFQAiAHAjAbQAWAQAzA+IgXgVQgkgbghgGQgegFglAIQgxANhfArQgaAIgXAAQgyAAgkglg");
	this.shape_144.setTransform(83.8,140.8,0.816,0.816);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.lf(["#F2F3F3","#D3D4D6","#FFFFFF","#DEDFE0"],[0,0.31,0.671,1],14.7,-9.3,-12.8,11.5).s().p("ADXAfQgkgcghgFQgegGglAJQgwANhfAqQhSAYg2g0Igwg4QA1AyBSgYQBggqAvgNQAlgJAeAFQAhAHAkAbQANAKAZAcIAtA1QgWgZgMgIg");
	this.shape_145.setTransform(80.2,136,0.816,0.816);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.lf(["#A7000D","#890009","#C83F27","#860008"],[0,0.298,0.659,1],14.2,-9.3,-12.4,11.5).s().p("AjFAeIgOgPIgignQA1AvBRgYQBegqAwgMQAlgKAeAGQAhAGAjAcQAVAQA6BFQgUgXgKgIQgkgbghgGQgegFgmAJQgwAMhdAqQgcAIgYAAQgwAAgiggg");
	this.shape_146.setTransform(76.3,131.3,0.816,0.816);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#4D575B").s().p("AAeA5IAAgxIgQAAIgEABIgDABIgDADIgEAEIgWAjQgCACgDACQgCABgEAAIgNAAIAdgpQAHgIAFgCQgGgCgGgDQgFgBgDgEQgDgDgCgGQgCgEAAgHQAAgHADgGQACgGAGgEQAFgEAHgDQAHgCAKAAIAmAAIAABxgAgCgqIgIAEQgDACgBAEIgCAIQAAAFACAEQAAADAEADQACACAGACQADABAGAAIAXAAIAAgnIgWAAQgHAAgDABg");
	this.shape_147.setTransform(98.4,109.9,0.876,0.876);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#4D575B").s().p("AAeA5IAAg0Ig7AAIAAA0IgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_148.setTransform(89,109.9,0.876,0.876);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#4D575B").s().p("AAiA5QAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAIgCgCIgegvIAAACIgeAtIgCACQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAIgQAAIAog6Igmg3IAQAAIADAAIABACIAdAtIACgEIAbgpQABAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAQAAIgmA3IAnA6g");
	this.shape_149.setTransform(79.1,109.9,0.876,0.876);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#4D575B").s().p("AgaA5QgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAIAAgLIAGAAIAEAAQAAAAABAAQABAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAgBQABAAAAgBIADgEIAGgMIguhQIAPAAIAEABIACADIAbAyIAEALIAcg9IACgDIAEgBIANAAIguBjIgEAIIgGAFIgGACIgHABg");
	this.shape_150.setTransform(70.1,110,0.876,0.876);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#4D575B").s().p("AAgA5IgFgBIgfgtQgCgDgDgCIgGgBIgOAAIAAA0IgQAAIAAhxIAQAAIAAAxIAPAAIADgBIADgBIAegrIADgDIAEgBIAOAAIgiAvQgDAFgGACQACABAEACIAGAHIAiAxg");
	this.shape_151.setTransform(61.5,109.9,0.876,0.876);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#4D575B").s().p("AAeA5IAAgxIgQAAIgEABIgDABIgDADIgaAnIgFAEQgCABgEAAIgNAAIAdgpQAHgIAFgCQgGgCgGgDQgEgBgFgEIgEgJQgCgFAAgGQAAgHADgGQACgGAGgEQADgEAJgDQAHgCAJAAIAnAAIAABxgAgCgqIgIAEQgEADAAADIgCAIIABAJQACAEADACQACACAGACQADABAGAAIAXAAIAAgnIgXAAQgGAAgDABg");
	this.shape_152.setTransform(126.8,91.5,0.876,0.876);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#4D575B").s().p("AApA5IgDgBIgCgDIgLgbIgyAAIgKAbIgCADIgDABIgNAAIAuhxIAPAAIAuBxgAgBgjIgTAyIApAAIgRgtIgCgFIgCgGg");
	this.shape_153.setTransform(118.1,91.5,0.876,0.876);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#4D575B").s().p("AAfA5IgEgBIgfgtIgFgFIgGgBIgOAAIAAA0IgQAAIAAhxIAQAAIAAAxIAPAAIADgBIACgBIADgDIAcgoQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAIAEgBIAOAAIgiAvQgDAFgGACQACABAEACIAGAHIAiAxg");
	this.shape_154.setTransform(109.2,91.5,0.876,0.876);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#4D575B").s().p("AgPA2QgJgEgIgIQgIgIgDgKQgEgMAAgMQAAgMAEgLQAEgKAIgIQAJgJAIgDQALgFALAAQAMAAAKAEQAIADAIAIIgFAIIgBABIgCAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIgFgDIgJgEQgEgBgIAAQgIAAgHADQgGACgGAGQgFAGgDAIQgDAJAAAJQAAALADAIQACAHAGAHQAFAFAHADQAHADAIAAIAJAAIAHgCIAHgDIAFgFIACgBIABAAIADABIAGAHQgHAJgKAEQgKAFgOAAQgMAAgKgFg");
	this.shape_155.setTransform(99.4,91.5,0.876,0.876);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#4D575B").s().p("AAeA5IAAg0Ig7AAIAAA0IgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_156.setTransform(89.1,91.5,0.876,0.876);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#4D575B").s().p("AAeA5IAAgxIgPAAIgFABIgDABIgDADIgEAEIgWAjIgFAEQgDABgDAAIgNAAIAegpQAFgHAGgDQgHgCgFgDQgFgBgDgEIgFgJQgBgFAAgGQAAgGACgHQADgHAFgDQAFgEAIgDQAGgCAKAAIAmAAIAABxgAgCgqIgIAEQgDADgBADIgCAIQAAAFACAEIAEAGQADACAFACQAEABAGAAIAWAAIAAgnIgWAAQgGAAgEABg");
	this.shape_157.setTransform(78.4,91.5,0.876,0.876);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#4D575B").s().p("AgnA5IAAhxIARAAIAAAxIAWAAQALAAAGACQAIACAEADQAGAFACAFQADAHgBAGQAAAIgCAGQgEAHgFAEQgFAFgHACQgGACgKAAgAgWAsIAWAAIAKgBIAIgEQACgDABgEQACgDAAgFQAAgFgCgDQgBgEgCgCQgFgDgDgBQgFgBgFAAIgWAAg");
	this.shape_158.setTransform(70.6,91.5,0.876,0.876);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#4D575B").s().p("AgwA5QgBAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAAAIAAgLIAGAAIAHgBQADgBACgEIAGgKIAEgTIAEgaIACgoIBFAAIAAByIgRAAIAAhlIgkAAIgDAmQgCARgDAKQgCALgEAIQgDAHgFAEQgDADgFACIgKACg");
	this.shape_159.setTransform(60.1,91.6,0.876,0.876);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#4D575B").s().p("AApA5IgDgBIgCgDIgLgbIgyAAIgKAbIgCADIgEABIgMAAIAthxIAQAAIAuBxgAgBgjIgTAyIApAAIgVg4g");
	this.shape_160.setTransform(50.7,91.5,0.876,0.876);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#4D575B").s().p("AgHA5IAAhkIglAAIAAgNIBZAAIAAANIglAAIAABkg");
	this.shape_161.setTransform(42.8,91.5,0.876,0.876);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#4D575B").s().p("AAeA5IABheIgGANIgzBMIgEAEQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgNAAIAAhxIAQAAIAABeIADgHIADgGIAzhMIADgEIAEgBIANAAIAABxg");
	this.shape_162.setTransform(33.3,91.5,0.876,0.876);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#19B7E4").s().p("AAeA5IAAg0Ig7AAIAAA0IgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_163.setTransform(118.9,73.2,0.876,0.876);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#19B7E4").s().p("AAeA5IAAgxIgQAAIgEABIgDABIgDADIgEAEIgWAjQgCACgDACQgCABgEAAIgNAAIAegpQAFgHAGgDQgGgCgGgDQgFgBgDgEQgDgDgCgGIgCgLQAAgHADgGQADgHAFgDQAFgEAHgDQAHgCAKAAIAmAAIAABxgAgCgqIgIAEQgDACgBAEIgCAIQAAAFACAEQAAADAEADQADACAFACQADABAHAAIAWAAIAAgnIgWAAg");
	this.shape_164.setTransform(137.4,73.2,0.876,0.876);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#19B7E4").s().p("AApA5IgDgBIgCgDIgKgbIgyAAIgLAbIgCADIgDABIgNAAIAuhxIAPAAIAuBxgAgUAPIApAAIgTgyIgCgGg");
	this.shape_165.setTransform(128.6,73.2,0.876,0.876);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#19B7E4").s().p("AAaA5IAAgxIgSAEIgPABQgJAAgFgCQgGgBgFgEQgEgEgDgGQgCgGgBgJIAAglIARAAIAAAlQAAAJADAEQAEAFAFABQAHABAIAAQALgBANgDIAAg1IARAAIAABxg");
	this.shape_166.setTransform(109.6,73.2,0.876,0.876);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#19B7E4").s().p("AAeA5IAAhWIABgIIgGANIgzBMQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgMAAIAAhxIARAAIAABWIgBAIIAGgNIAzhMQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAIAMAAIAABxg");
	this.shape_167.setTransform(99.9,73.2,0.876,0.876);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#19B7E4").s().p("AgiA5IAAhxIBFAAIAAANIg0AAIAABkg");
	this.shape_168.setTransform(91.3,73.2,0.876,0.876);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#19B7E4").s().p("AgWA2QgLgEgHgIQgGgGgGgMQgEgMAAgMQAAgLAEgMQAGgMAGgGQAHgIALgEQAKgFAMAAQANAAAKAFQALAEAHAIQAIAHAEALQAEAKAAANQAAAOgEAKQgEALgIAHQgHAIgLAEQgKAFgNAAQgMAAgKgFgAgPgoQgIADgFAFQgFAGgDAIQgDAJAAAJQAAALADAIQADAIAFAFQAFAGAIADQAHADAIAAQAJAAAIgDQAHgDAFgGQAFgFADgIQADgHAAgMQAAgLgDgHQgDgIgFgGQgFgFgHgDQgIgDgJAAQgIAAgHADg");
	this.shape_169.setTransform(81.4,73.2,0.876,0.876);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#19B7E4").s().p("AgwA5QgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIAAgLIAFAAIAGgBQAEgBADgEIAFgKIAEgTIAEgaIADgoIBDAAIAAByIgQAAIAAhlIgkAAIgHBBQgEAMgDAHQgEAHgEAEQgCADgGACIgKACg");
	this.shape_170.setTransform(70,73.2,0.876,0.876);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#19B7E4").s().p("AgWA2QgLgEgHgIQgIgHgEgLQgEgKAAgOQAAgNAEgKQAEgLAIgHQAHgIALgEQAKgFAMAAQANAAAKAFQALAEAHAIQAHAGAFAMQAEAMAAALQAAAMgEAMQgFAMgHAGQgHAIgLAEQgKAFgNAAQgMAAgKgFgAgQgoQgHADgFAFQgFAGgDAIQgDAJAAAJQAAALADAIQADAIAFAFQAFAGAHADQAIADAIAAQAKAAAGgDQAIgDAFgGQAFgFADgIQADgJAAgKQAAgJgDgJQgDgIgFgGQgFgFgIgDQgGgDgKAAQgIAAgIADg");
	this.shape_171.setTransform(60.2,73.2,0.876,0.876);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#19B7E4").s().p("AAeA5IAAg0Ig7AAIAAA0IgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_172.setTransform(49.2,73.2,0.876,0.876);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#19B7E4").s().p("AAiA5IgCgBIgCgCIgegvIAAACIgeAtIgCACIgCABIgQAAIAog6Igmg3IAQAAIADAAIACACIAcAtIACgEIAbgpQABAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAQAAIgmA3IAnA6g");
	this.shape_173.setTransform(39.3,73.2,0.876,0.876);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#19B7E4").s().p("AgjA5IAAhxIBGAAIAAANIg1AAIAAAlIArAAIAAAMIgrAAIAAAmIA1AAIAAANg");
	this.shape_174.setTransform(31,73.2,0.876,0.876);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#19B7E4").s().p("AgHA5IAAhkIglAAIAAgNIBZAAIAAANIgkAAIAABkg");
	this.shape_175.setTransform(22.5,73.2,0.876,0.876);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#00AAE3").s().p("AgPAFIAAgJIAfAAIAAAJg");
	this.shape_176.setTransform(113.2,54.8,1.2,1.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#19B7E4").s().p("AgWA2QgLgEgHgIQgGgGgGgMQgEgMAAgMQAAgLAEgMQAGgMAGgGQAHgIALgEQAKgFAMAAQANAAAKAFQALAEAHAIQAHAGAFAMQAEAMAAALQAAAMgEAMQgFAMgHAGQgHAIgLAEQgKAFgNAAQgMAAgKgFgAgQgoQgHADgFAFQgFAGgDAIQgDAJAAAJQAAALADAIQADAIAFAFQAFAGAHADQAIADAIAAQAJAAAIgDQAHgDAFgGQAFgFADgIQADgHAAgMQAAgLgDgHQgDgIgFgGQgFgFgHgDQgIgDgJAAQgIAAgIADg");
	this.shape_177.setTransform(104.3,54.9,0.876,0.876);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#19B7E4").s().p("AAfA5IgEgBIgfgtIgFgFIgGgBIgOAAIAAA0IgQAAIAAhxIAQAAIAAAxIAPAAIADgBIACgBIADgDIAcgoQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAIAEgBIAOAAIgiAvQgDAFgGACQACABAEACIAGAHIAiAxg");
	this.shape_178.setTransform(95,54.9,0.876,0.876);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#19B7E4").s().p("AgWA2QgKgEgIgIQgHgHgFgLQgEgMAAgMQAAgLAEgMQAFgLAHgHQAIgIAKgEQAKgFAMAAQANAAAKAFQALAEAHAIQAIAHADALQAFAMAAALQAAANgFALQgDALgIAHQgHAIgLAEQgKAFgNAAQgMAAgKgFgAgPgoQgHACgGAGQgGAHgDAHQgCAJAAAJQAAAKACAJQADAIAGAFQAFAGAIADQAHADAIAAQAJAAAHgDQAIgDAFgGQAFgFADgIQADgIAAgLQAAgJgDgJQgDgIgFgGQgGgGgHgCQgHgDgJAAQgIAAgHADg");
	this.shape_179.setTransform(84.1,54.9,0.876,0.876);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#19B7E4").s().p("AgPA2QgJgEgIgIQgIgIgDgKQgEgMAAgMQAAgMAEgLQAEgKAIgIQAJgJAIgDQALgFALAAQAMAAAKAEQAIADAIAIIgFAIIgBABIgCAAIgEgBIgFgDIgJgEQgEgBgIAAQgIAAgHADQgGACgGAGQgFAGgDAIQgDAJAAAJQAAALADAIQACAHAGAHQAFAFAHADQAHADAIAAIAJAAIAHgCIAHgDIAFgFIACgBIABAAIADABIAGAHQgIAJgJAEQgKAFgOAAQgMAAgKgFg");
	this.shape_180.setTransform(74.2,54.9,0.876,0.876);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#19B7E4").s().p("AApA5IAAhxIARAAIAABxgAg5A5IAAhxIAQAAIAAAxIAWAAQAMAAAGACQAGABAHAEQAFAFACAFQACAFAAAIQAAAHgCAHQgEAHgEAEQgGAFgHACQgFACgMAAgAgpAsIAWAAQAHAAAFgBIAHgEQACgDABgEIABgIIgBgIQgBgDgCgDQgEgDgDgBQgFgBgHAAIgWAAg");
	this.shape_181.setTransform(63,54.9,0.876,0.876);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#19B7E4").s().p("AgoA5IAAhxIAlAAQALAAAHACQAIACAEAEQAGAEACAFQACAGAAAHQAAAEgBAEIgEAHQgCADgFADQgEADgFABQAMABAHAHQAGAHAAAKQAAAJgDAFQgDAGgFAEQgFAEgHADQgHACgLAAgAgXAsIAXAAQAHAAAEgBIAIgEQADgDABgEQACgDAAgFQAAgIgGgGQgIgFgLAAIgXAAgAgXgFIAUAAQAFAAAFgCQAGgCACgCQADgCABgEQACgDAAgEQAAgKgGgFQgGgEgMAAIgUAAg");
	this.shape_182.setTransform(52.4,54.9,0.876,0.876);

	var maskedShapeInstanceList = [this.shape_144,this.shape_145,this.shape_146,this.shape_147,this.shape_148,this.shape_149,this.shape_150,this.shape_151,this.shape_152,this.shape_153,this.shape_154,this.shape_155,this.shape_156,this.shape_157,this.shape_158,this.shape_159,this.shape_160,this.shape_161,this.shape_162,this.shape_163,this.shape_164,this.shape_165,this.shape_166,this.shape_167,this.shape_168,this.shape_169,this.shape_170,this.shape_171,this.shape_172,this.shape_173,this.shape_174,this.shape_175,this.shape_176,this.shape_177,this.shape_178,this.shape_179,this.shape_180,this.shape_181,this.shape_182];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144}]}).to({state:[]},80).wait(316));

	// bg
	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#ECF1F6").s().p("Ay1fWMAAAg+rMAlrAAAMAAAA+rg");
	this.shape_183.setTransform(80,300,0.663,1.496);

	this.timeline.addTween(cjs.Tween.get(this.shape_183).wait(396));

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
		{src:"images/160x600_atlas_.jpg", id:"160x600_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;