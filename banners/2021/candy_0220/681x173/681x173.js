(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"681x173_atlas_P_", frames: [[0,0,163,173],[330,0,163,173],[165,0,163,173],[129,175,129,28],[0,175,127,57]]}
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



(lib._1 = function() {
	this.spriteSheet = ss["681x173_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["681x173_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["681x173_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Image_0 = function() {
	this.spriteSheet = ss["681x173_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Image_1 = function() {
	this.spriteSheet = ss["681x173_atlas_P_"];
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


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdDhQgOgHgIgOQgIgOgBgVQABgTAIgPQAIgOANgJQAOgIAQAAQANgBAKAGQAKAFAHALIAAAAIAAgSIAbAAIAAB7IgbAAIAAgRIAAAAQgHAKgJAEQgIAEgHABIgJABQgQABgNgJgAgNCIQgIAGgFAIQgEAIAAALQAAALAEAIQAFAJAIAEQAIAEAKABQAPAAAKgLQAJgKABgRQgBgLgEgHQgEgJgIgFQgIgEgKAAQgKAAgIAEgAG2DmIAAhPIg2BPIgdAAIAAh7IAdAAIAABPIA2hPIAdAAIAAB7gAEuDmIAAhPIg3BPIgdAAIAAh7IAdAAIAABPIA3hPIAdAAIAAB7gACtDmIgehTIgfBTIggAAIAxh7IAbAAIAyB7gAh+DmIAAhhIgdAAIAAgaIBXAAIAAAaIgdAAIAABhgAjLDmIAAhzIhJBzIgeAAIAAijIAeAAIAAByIBJhyIAeAAIAACjgAnWDmIAAh7IA1AAQANABAHAFQAIAEAEAHQAEAIAAAIQgBAIgFAHQgFAGgIAEQALADAGAIQAGAHAAAKQAAAKgFAIQgEAJgJAEQgJAGgOAAgAm5DMIAVAAQAGAAADgBQADgDABgDIABgFIgBgFQAAgDgEgCQgDgCgGAAIgVAAgAm5CaIATAAQAFAAADgCQAEgDAAgGQAAgDgDgEQgCgDgHAAIgTAAgAlZgdIAAiiIAaAAIAAAQIABAAQAFgJAIgFQAHgEAHgBIAMgCQARABAOAHQANAJAJAOQAIAOAAAVQAAAMgEAMQgEAMgIAJQgIAIgLAGQgLAFgPABIgLgBQgHgCgGgEQgHgEgGgHIAAAAIAAA2gAktijQgIAFgEAJQgFAHAAAMQAAALAFAJQAEAIAIAEQAIAFAKAAQAKgBAJgEQAIgFAEgIQAFgJAAgKQAAgJgEgIQgDgJgIgGQgIgFgMAAQgLAAgIAEgAJnhKQgOgHgIgOQgIgPgBgTQABgUAIgPQAIgOANgJQAOgIARgBQANAAAKAGQAKAGAHAKIAAAAIAAgRIAbAAIAAB5IgbAAIAAgQIAAAAQgHAJgJAFQgIAFgHABIgKABQgQAAgNgJgAJ3ijQgIAFgFAJQgEAJAAALQAAAKAEAJQAFAHAIAFQAIAEALABQAPgBAKgJQAJgLABgQQgBgMgEgHQgEgJgIgFQgIgEgKAAQgLAAgIAEgAFWhKQgNgHgIgOQgJgPAAgTQAAgUAIgPQAIgOAOgJQANgIARgBQAOAAAKAGQAKAGAGAKIABAAIAAgRIAbAAIAAB5IgbAAIAAgQIgBAAQgHAJgIAFQgIAFgHABIgKABQgQAAgOgJgAFmijQgIAFgEAJQgFAJAAALQAAAKAFAJQAEAHAIAFQAIAEALABQAQgBAJgJQAKgLAAgQQAAgMgEgHQgFgJgHgFQgIgEgLAAQgLAAgIAEgABuhKQgPgJgIgPQgIgOgBgSQABgSAIgPQAIgPAPgJQAOgIATgBQATABAPAIQAOAJAIAPQAJAPAAASQAAASgJAOQgIAPgPAJQgOAJgTAAQgTAAgOgJgAB8ijQgIAFgEAJQgEAIAAALQAAAKAEAIQAEAJAIAEQAIAGALAAQALAAAIgGQAIgEAEgJQAFgIAAgKQAAgLgFgIQgEgJgIgFQgIgEgLAAQgLAAgIAEgAgbhHQgLgGgHgIQgHgIgEgLQgDgKgBgKIgCgSQABgaAGgQQAGgSAKgJQAKgJALgFQALgFAIAAIAOgCIAvgBIAAAaIgwABIgOACQgHABgIAEQgIAEgFAHQgGAIgDANIABAAQAHgLAMgFQAMgHAOAAQARAAANAIQANAHAHANQAIANAAATQAAASgIAPQgJAPgOAIQgPAJgUAAQgQgBgMgFgAgOigQgIAFgEAIQgFAIAAALQAAAQAKAKQAJAIAPABQAQgBAJgJQAJgJABgQQgBgMgEgHQgEgIgIgFQgIgEgKAAQgJAAgIAEgAiwhKQgOgHgIgOQgIgPgBgTQABgUAIgPQAIgOANgJQAOgIARgBQANAAAKAGQAKAGAHAKIAAAAIAAgRIAbAAIAAB5IgbAAIAAgQIAAAAQgHAJgJAFQgIAFgHABIgKABQgQAAgNgJgAigijQgIAFgFAJQgEAJAAALQAAAKAEAJQAFAHAIAFQAIAEALABQAPgBAKgJQAJgLABgQQgBgMgEgHQgEgJgIgFQgIgEgKAAQgLAAgIAEgAmuhGQgJgEgFgHQgFgHgCgHIgCgPIAdAAQAAAGAEAFQAEAGAJAAIAFgBQADgBADgCQADgDAAgGQAAgGgCgDQgDgCgDgCIgFAAIgGAAIAAgZIAFAAQAHAAADgDQADgEAAgFQAAgFgDgDQgCgDgDAAIgFAAQgGAAgDADQgEAEAAAFIgeAAQABgLAFgJQAFgJAJgGQAJgFAOgBQAOABAJAEQAKAFAEAIQAEAIAAAIQAAAKgFAHQgGAGgIAEQALADAFAIQAFAIAAAKQAAAMgFAKQgFAIgKAFQgKAGgOAAQgOgBgIgEgAo3hKQgOgHgIgOQgIgPgBgTQABgUAIgPQAIgOANgJQAOgIARgBQANAAAKAGQAKAGAHAKIAAAAIAAgRIAbAAIAAB5IgbAAIAAgQIAAAAQgHAJgJAFQgIAFgHABIgKABQgQAAgNgJgAonijQgIAFgFAJQgEAJAAALQAAAKAEAJQAFAHAIAFQAIAEALABQAPgBAKgJQAJgLABgQQgBgMgEgHQgEgJgIgFQgIgEgKAAQgLAAgIAEgAIahGIAAgyIguAAIAAAyIgdAAIAAh5IAdAAIAAAtIAuAAIAAgtIAdAAIAAB5gAD1hGIAAhfIgdAAIAAgaIBYAAIAAAaIgeAAIAABfgArHhGIAAijIAtAAQAUABALAFQAMAGAGAJQAGAHACAJQACAJAAAFQAAAJgDAIQgCAIgHAJQgGAHgMAFQgLAEgSABIgPAAIAAA9gAqpihIASAAQAEABAGgCQAGgBAEgEQAFgFAAgKQAAgJgFgGQgEgEgGgBQgGgCgEABIgSAAg");
	this.shape.setTransform(0,-2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-74.6,-33.5,149.3,60.3), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjZGSIAAijIAaAAIAAAQIABAAQAFgIAIgFQAHgEAHgBIAMgCQARAAAOAIQANAIAJAPQAIAOAAAUQAAANgEAMQgEALgIAJQgIAJgLAGQgLAFgPAAIgLgBQgHgBgGgEQgHgEgGgHIAAAAIAAA2gAitEMQgIAFgEAIQgFAIAAALQAAAMAFAIQAEAJAIAEQAIAFAKAAQAKgBAJgEQAIgFAEgJQAFgIAAgLQAAgIgEgJQgDgIgIgGQgIgGgMAAQgLAAgIAFgAsPGSIAAijIAaAAIAAAQIABAAQAFgIAIgFQAHgEAHgBIAMgCQARAAAOAIQANAIAJAPQAIAOAAAUQAAANgEAMQgEALgIAJQgIAJgLAGQgLAFgPAAIgLgBQgHgBgGgEQgHgEgGgHIAAAAIAAA2gArjEMQgIAFgEAIQgFAIAAALQAAAMAFAIQAEAJAIAEQAIAFAKAAQAKgBAJgEQAIgFAEgJQAFgIAAgLQAAgIgEgJQgDgIgIgGQgIgGgMAAQgLAAgIAFgAO4FnQgMgGgIgJQgIgKgEgLQgEgLAAgLQAAgKAEgMQAEgLAIgKQAIgKANgGQAMgGAQgBQATABAOAIQAOAJAIAOQAIAPAAASIAAAHIgBAGIhfAAQADAMAIAGQAJAGAMABQAHAAAHgDQAHgCAGgHIAhAAQgGAOgJAJQgJAIgKADQgJAEgHABIgJAAQgRAAgMgGgAP1EfQgDgLgJgHQgIgGgMAAQgMAAgJAHQgJAGgEALIBCAAIAAAAgAIjFnQgMgGgIgJQgIgKgEgLQgEgLAAgLQAAgKAEgMQAEgLAIgKQAIgKANgGQAMgGAQgBQATABAOAIQAOAJAIAOQAIAPAAASIAAAHIgBAGIhfAAQADAMAIAGQAJAGAMABQAHAAAHgDQAHgCAGgHIAhAAQgGAOgJAJQgJAIgKADQgJAEgHABIgJAAQgRAAgMgGgAJgEfQgDgLgJgHQgIgGgMAAQgMAAgJAHQgJAGgEALIBCAAIAAAAgADYFkQgPgIgIgPQgIgPgBgRQABgTAIgOQAIgPAPgJQAOgIATgBQATABAPAIQAOAJAIAPQAJAOAAATQAAARgJAPQgIAPgPAIQgOAJgTAAQgTAAgOgJgADmEMQgIAFgEAJQgEAIAAALQAAAKAEAIQAEAIAIAFQAIAFALABQALgBAIgFQAIgFAEgIQAFgIAAgKQ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QAOAAAKAGQAKAFAGALIABAAIAAgSIAbAAIAAB6IgbAAIAAgQIgBAAQgHAJgIAFQgIAEgHABIgKABQgQAAgOgIgAkClLQgIAFgEAJQgFAIAAALQAAALAFAIQAEAIAIAFQAIAEALABQAQgBAJgKQAKgKAAgRQAAgLgEgIQgFgIgHgFQgIgFgLAAQgLAAgIAFgAnzjwQgNgGgIgJQgIgKgFgMQgEgLAAgMQAAgKAEgMQAEgLAIgJQAJgKAMgGQANgFARgBQAPAAAMAGQANAGAIAKQAJAKAEANIghAAQgEgJgIgEQgHgEgKAAQgMAAgIAFQgIAFgEAJQgEAIAAAKQAAAKAEAJQAFAIAIAFQAIAFALABIAIgBQAFgBAGgEQAGgDAEgHIAhAAQgFANgIAJQgIAKgMAGQgMAFgPAAQgRAAgNgGgAJOjuIAAgzIguAAIAAAzIgdAAIAAh6IAdAAIAAAtIAuAAIAAgtIAdAAIAAB6gAHOjuIAAgzIgtAAIAAAzIgdAAIAAh6IAdAAIAAAtIAtAAIAAgtIAdAAIAAB6gADCjuIAAhPIg3BPIgdAAIAAh6IAdAAIAABPIA3hPIAdAAIAAB6gAhOjuIAAgzIguAAIAAAzIgdAAIAAh6IAdAAIAAAtIAuAAIAAgtIAdAAIAAB6gAlzjuIAAhgIgdAAIAAgaIBYAAIAAAaIgeAAIAABggApIjuIAAhPIg3BPIgdAAIAAh6IAdAAIAABPIA3hPIAdAAIAAB6g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-120.1,-49,229.8,90.3), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-134.4,-48.2,263.3,129.9), null);


(lib.p3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._3();
	this.instance.parent = this;
	this.instance.setTransform(-81.5,-86.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p3, new cjs.Rectangle(-81.5,-86.5,163,173), null);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(-81.5,-86.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2, new cjs.Rectangle(-81.5,-86.5,163,173), null);


(lib.ClipGroup_4_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgYAEQgBAAAAgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAABAAIAyAAIgBAIg");
	mask.setTransform(2.7,0.5);

	// Слой 2
	this.instance = new lib.Image_0();
	this.instance.parent = this;
	this.instance.setTransform(0,1,0.042,0.034,0,180,0.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_0, new cjs.Rectangle(0.1,0.1,5.4,0.9), null);


(lib.ClipGroup_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgZAJQgCgHAEgBIgCgBQAAgFABgBQABgCAGAAIAsAAIgBASg");
	mask.setTransform(2.7,1);

	// Слой 2
	this.instance = new lib.Image_1();
	this.instance.parent = this;
	this.instance.setTransform(0,2,0.042,0.034,0,180,0.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_0, new cjs.Rectangle(0.1,0.1,5.3,1.9), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgaAEIAAgIIA1AAIAAAJg");
	mask.setTransform(2.7,0.5);

	// Слой 3
	this.instance = new lib.ClipGroup_4_0();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0,0,5.5,1), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgaAKIAAgTIA1ABIAAASg");
	mask.setTransform(2.7,1);

	// Слой 3
	this.instance = new lib.ClipGroup_3_0();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0,0,5.4,2), null);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ClipGroup_3();
	this.instance.parent = this;
	this.instance.setTransform(-59.4,40.8,4.169,4.167,0,0,0,2.6,1);

	this.instance_1 = new lib.ClipGroup_4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-59.6,46.7,4.169,4.167,0,0,0,2.7,0.5);

	this.instance_2 = new lib._1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-81.5,-86.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1, new cjs.Rectangle(-81.5,-86.5,163,173), null);


// stage content:
(lib._681x173 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Eg1HgNbMBqPAAAIAAa3MhqPAAAg");
	this.shape.setTransform(340.5,86.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(300));

	// t3
	this.instance = new lib.t3();
	this.instance.parent = this;
	this.instance.setTransform(370.5,88.5,0.9,0.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(199).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},6,cjs.Ease.get(1)).wait(89).to({scaleX:0.9,scaleY:0.9,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// t2
	this.instance_1 = new lib.t2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(370.4,88.9,0.9,0.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100).to({_off:false},0).to({scaleX:1,scaleY:1,x:370.5,y:89,alpha:1},6,cjs.Ease.get(1)).wait(89).to({scaleX:0.9,scaleY:0.9,x:370.4,y:88.9,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(99));

	// t1
	this.instance_2 = new lib.t1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(370,86.7,0.9,0.9);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,y:86.5,alpha:1},4,cjs.Ease.get(1)).wait(91).to({scaleX:0.9,scaleY:0.9,y:86.7,alpha:0},6,cjs.Ease.get(1)).to({_off:true},100).wait(99));

	// Слой 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1899D6").s().p("AgJAYQgEgCgEgDQgDgDgBgFQgCgFAAgGQAAgFACgFQABgFADgDQAEgDAEgCQAFgCAEAAQAGAAAEACQAFACADADQADADACAFQABAFAAAFQAAAGgBAFQgCAFgDADQgDADgFACQgEACgGAAQgEAAgFgCgAgKgNQgDAFAAAIQAAAJADAFQAEAFAGAAQAHAAAEgFQAEgFAAgJQAAgIgEgFQgEgEgHgBQgGABgEAEg");
	this.shape_1.setTransform(70.7,162.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1899D6").s().p("AgWAiIAAhCIAGAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIABAGQADgEAFgCQAEgCAEAAQAEAAAEABQAEACADADQACAEABAEQABAFAAAHQAAAFgBAEQgBAFgDADQgDAEgEACQgFACgFAAQgDAAgEgCIgFgEIAAAWgAgGgYQgEACgCAEIAAAXQACADADABQADACAEAAQAFAAAEgFQAEgFgBgIIAAgJIgCgFQgCgDgCgBIgGgBQgDAAgDACg");
	this.shape_2.setTransform(65.2,163.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1899D6").s().p("AASAkIAAg/IgiAAIAAA/IgLAAIAAhHIA3AAIAABHg");
	this.shape_3.setTransform(58.6,161.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1899D6").s().p("AgEAZIAAgqIgTAAIAAgHIAvAAIAAAHIgUAAIAAAqg");
	this.shape_4.setTransform(52.4,162.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1899D6").s().p("AgWAiIAAhCIAGAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIABAGQADgEAFgCQAEgCAEAAQAEAAAEABQAEACADADQACAEABAEQABAFAAAHQAAAFgBAEQgBAFgDADQgDAEgEACQgFACgFAAQgDAAgEgCIgFgEIAAAWgAgGgYQgEACgCAEIAAAXQACADADABQADACAEAAQAFAAAEgFQAEgFgBgIIAAgJIgDgFQgBgDgCgBIgGgBQgDAAgDACg");
	this.shape_5.setTransform(47.2,163.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1899D6").s().p("AgKAZIgFgCQgCgCgBgDQgBgCAAgDQAAgEACgCIAFgFIAJgDQAFgBAJAAIAAgEQAAgGgCgDQgDgDgFAAIgEABIgEACIgDACIgCAAIgCAAIgBgBIgCgDQAFgEAFgCQAEgCAFAAQAFAAADABQADABADADIADAGIABAIIAAAfIgEAAIgCAAIgBgCIgBgEIgEADIgEACIgEACIgFAAIgFgBgAABAEIgGACIgEACIgBAEIABADIABADIADABIADAAIADAAIAEgBIADgCIADgDIAAgKIgKABg");
	this.shape_6.setTransform(41.6,162.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1899D6").s().p("AAUAZIAAgfIAAgEIAAgDIgQAdIgCABIgCABIAAAAIgBgBIgBgBIgRgdIAAADIAAAEIAAAfIgJAAIAAgxIAIAAIACAAIABACIAQAZIABABIAAADIABgDIABgBIAPgZIABgCIACAAIAIAAIAAAxg");
	this.shape_7.setTransform(35.7,162.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1899D6").s().p("AgJAiQgGgDgEgFQgFgFgDgGQgCgHAAgIQAAgHACgHQADgHAFgFQAFgEAGgDQAHgDAGAAQAIAAAGADQAGACAEAEIgDAFIgBABIgBAAIgCgBIgEgCIgFgCIgIgBQgFAAgDACQgGACgCAEQgDADgDAFQgCAFABAGQgBAGACAGQADAFADADQADAEAFACQADACAFAAIAFgBIAFgBIAEgCIAEgDIABAAIABAAIABAAIAEAFQgEAFgHADQgGADgIAAQgIAAgGgDg");
	this.shape_8.setTransform(29,161.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1899D6").s().p("AgBAQIAAgJIAAgCIAAgBIAAgBIAAABIgCABIgJAFIgCgEIAIgFIACAAIACgBIgEAAIgIgFIACgEIAJAFIACACIAAgBIAAgCIAAgKIADAAIAAAKIAAACIAAABIACgCIAJgFIACAEIgIAFIgCAAIgCAAIAEABIAIAFIgCAEIgJgFIgBgBIgBgBIAAAEIAAAJg");
	this.shape_9.setTransform(20.8,159.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(300));

	// Слой 6
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgiAGIgDgLIBIAAIADALg");
	this.shape_10.setTransform(129.6,84.9,0.77,0.77);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPAjIAShFIANAAIgTBFg");
	this.shape_11.setTransform(132.6,89.6,0.77,0.77);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#009FE3").s().p("AgcAVIAKgpIAvAAIgKApg");
	this.shape_12.setTransform(129.4,89.4,0.77,0.77);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1D1D1B").s().p("AhFA+QgSgSADgeQAEgmAggcQAggcAlAAQAfAAARASQATASgDAeQgFAogfAbQgfAcgmAAQgeAAgTgTgAgXgaQgPAQgCASQgCAPAJAJQAIAKAPAAQATAAAPgPQAPgPACgTQACgPgIgJQgIgKgQAAQgTAAgPAPg");
	this.shape_13.setTransform(151.6,93.7,0.77,0.77);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1D1D1B").s().p("AhABOIAoiXIAoAAIgEARQAGgIAKgGQALgHAIAAQALAAAHAEIgLAnQgIgDgJAAQgPAAgLAPQgJALgDARIgTBIg");
	this.shape_14.setTransform(140.9,93.5,0.77,0.77);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#009FE3").s().p("Ag7BiIAdhuIgXAAIALgqIAYAAIALgrIAvAAIgLArIAfAAIgLAqIgMAAIAAAAIgTAAIgdBug");
	this.shape_15.setTransform(128.4,92,0.77,0.77);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1D1D1B").s().p("AhkB9IBCj6IBJAAQAeAAAQANQATAPgDAdIgDAOQgJAkgcARQgaAPgjABIgXAAIgdBugAgLgbIAUAAQApABADgjQACgVgfAAIgWAAg");
	this.shape_16.setTransform(131.6,89.9,0.77,0.77);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1899D6").s().p("AhABOIAoiXIAoAAIgEARQAGgIAKgGQALgHAIAAQALAAAHAEIgKAnQgJgDgJAAQgPAAgLAPQgJANgDAPIgTBIg");
	this.shape_17.setTransform(119.4,93.5,0.77,0.77);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1899D6").s().p("AhQA/QgPgTADgdQAEgmAdgcQAegdAjAAQAfAAAJAVIAEgQIAsAAIgoCXIgsAAIAFgRQgTAWgfAAQgeAAgPgSgAgggaQgPAPgCASQgCAOAJALQAIALAPAAQASAAAQgPQAQgQABgSQACgPgIgKQgJgKgQAAQgSAAgPAPg");
	this.shape_18.setTransform(107.8,93.7,0.77,0.77);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1899D6").s().p("AA5BOIAYhfQADgWgUAAQgZAAgJAiIgWBTIgqAAIAYhfQACgWgTAAQgaAAgJAjIgWBSIgsAAIAoiXIAqAAIgFARQAUgVAbAAQAcAAAHAaQAVgaAjAAQAVAAAMALQALANgCAVIgdBug");
	this.shape_19.setTransform(89.7,93.5,0.77,0.77);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1899D6").s().p("AhGBgQgQgPADgcIADgPIAwAAIgBAHQgDAXAUAAQAMAAAIgIQAJgIABgMQABgKgSgMIgjgVQgTgQADgVQADgfAcgTQAZgTAeAAQAZAAAPANQAOAOgCAZIgCAMIgvAAIABgGQACgSgSAAQgJAAgIAFQgHAGgBAJQgBAMASANIAjAXQATAOgCATIgCAMQgJAggYARQgXARggAAQgcAAgQgOg");
	this.shape_20.setTransform(74.1,91.4,0.77,0.77);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1899D6").s().p("AJlBWIAAgbIhdAAIAAAbIgRAAIAAgqIAKAAIAth/IAQAAIAuB/IAJAAIAAAqgAI2g7IgkBnIBJAAIgkhngAKRAoQgUgWAAgeQgBgeAWgWQAVgVAeAAQAfAAAWAVQAVAVAAAfQAAAegVAWQgWAXgfAAQgeAAgWgXgAKfgzQgRARAAAWQAAAYAQARQAQARAYAAQAYAAAQgRQAPgTAAgWQAAgWgQgSQgRgRgXAAQgWAAgQASgAuyAoQgVgXABgdQgBgeAWgWQAVgVAeAAQAtAAATAnIgUAAQgRgWgbAAQgWAAgRARQgQAQAAAXQAAAXAPARQARASAXAAQAbAAAQgWIAVAAQgKATgRAJQgPAKgWAAQgfAAgVgWgARqA7IAAiOIBKAAIAAAQIg5AAIAAAvIA2AAIAAAPIg2AAIAAAxIA5AAIAAAPgAQIA7IAAiOIBKAAIAAAQIg5AAIAAAvIA1AAIAAAPIg1AAIAAAxIA5AAIAAAPgAPdA7IAAhAIhAAAIAABAIgSAAIAAiOIASAAIAAA+IBAAAIAAg+IAQAAIAACOgAMiA7IAAiOIBOAAIAAAQIg9AAIAAAqIATAAQAXAAAMAKQAPALAAAVQAAAWgPAKQgNALgWgBgAMzAsIATAAQAhAAAAgbQAAgbghAAIgTAAgAGpA7IALgZIg1h1IASAAIAsBiIAqhiIASAAIg/COgAEnA7IAAgaIAPAAIAAAagAC9A7IAAiOIBKAAIAAAQIg5AAIAAAvIA1AAIAAAPIg1AAIAAAxIA5AAIAAAPgABaA7IAAiOIBLAAIAAAQIg6AAIAAAvIA2AAIAAAPIg2AAIAAAxIA6AAIAAAPgAAwA7IAAhAIhAAAIAABAIgQAAIAAiOIAQAAIAAA+IBAAAIAAg+IAQAAIAACOgAhLA7IAAhuIABgOIgBAAIgwB8IgNAAIgwh8IgBAAIABANIAABvIgQAAIAAiOIAZAAIAuB1IAth1IAaAAIAACOgAkkA7IALgZIg2h1IASAAIAtBiIArhiIASAAIg/COgAmmA7IAAgaIAPAAIAAAagAoQA7IAAiOIBKAAIAAAQIg5AAIAAAvIA1AAIAAAPIg1AAIAAAxIA5AAIAAAPgApyA7IAAiOIBKAAIAAAQIg6AAIAAAvIA2AAIAAAPIg2AAIAAAxIA6AAIAAAPgAraA7IAAiOIAlAAQAWAAANAKQAOALAAAVQAAAVgOALQgNAJgWAAIgUAAIAAA7gArJgOIASAAQAhgBABgZQgBgbggAAIgTAAgAsYA7IAAh+IgdAAIAAgQIBMAAIAAAQIgeAAIAAB+gAvrA7IAAiOIARAAIAACOgAxKA7IAAiOIARAAIAAA7IARAAQAVgBAOALQAOAKAAAVQAAAWgOAKQgOALgVgBgAw5AsIARAAQAgAAAAgbQAAgaggAAIgRAAgAyzA7IAAiOIBNAAIAAAQIg9AAIAAAqIAUAAQAWAAANAKQAPALAAAVQAAAWgPAKQgNALgWgBgAyjAsIAUAAQAgAAAAgbQAAgbggAAIgUAAg");
	this.shape_21.setTransform(112.9,133.6,0.77,0.77);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1899D6").s().p("AruDZQi5AAhPhJQhJhCArhiQAmhZB5gzQCHg4DbAAQAwABAtAFIA4AIIAXAEIgfA5QhGgUg4AAQhvAAhaAhQh7ArgTBYQgLA0AmAuQAxA8BqgFQAhgCBAgWQBPgbAtgkIB2hlIAPgIQAPgHARAAIB2AAIAmCjIBLihICDAAIBMB9IA4h9IB3AAIhpDkIh7AAIhPiDIg7CDIhMAAIABABIiOAAIgFgpIiCAAIgrAnIhUAAQhfAiiAABgAlbBiIBMgCIgHhAgAKoDNIBNhMIhNiuIB2AAIAhBdIBghfICGAAIjoDoQgLAMgJADIgbAFgAG7C3IjCAAIBpjkIDCAAQBdAAAhAsQAcAjgVAuQgTAqgyAbQg/AihkAAIgGAAgAGVB+IAiAAQAnAAAfgJQAxgPAKglQAIgggfgNQgUgJgjAAIgjAAg");
	this.shape_22.setTransform(112.9,55.1,0.77,0.77);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(300));

	// 3.png
	this.instance_3 = new lib.p3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(615,87);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(195).to({_off:false},0).to({x:599,alpha:1},5,cjs.Ease.get(1)).wait(100));

	// 2.png
	this.instance_4 = new lib.p2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(615,87);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(95).to({_off:false},0).to({x:599,alpha:1},5,cjs.Ease.get(1)).to({_off:true},101).wait(99));

	// 1
	this.instance_5 = new lib.p1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(615.5,86.5);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:599.5,alpha:1},5,cjs.Ease.get(1)).to({_off:true},96).wait(199));

	// Слой 1
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1899D6").s().p("AljDPIAAmdILHAAIAAGdg");
	this.shape_23.setTransform(370,86.6,4.168,4.165);

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(300));

	// Слой 7
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AswDPIAAmdIZhAAIAAGdg");
	this.shape_24.setTransform(340.5,86.6,4.168,4.165);

	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(300));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(340,86,697.5,174);
// library properties:
lib.properties = {
	width: 681,
	height: 173,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/681x173_atlas_P_.png", id:"681x173_atlas_P_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;