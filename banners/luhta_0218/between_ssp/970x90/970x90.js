(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"970x90_atlas_", frames: [[0,340,400,141],[0,173,400,165],[0,0,400,171]]}
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
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
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


(lib.sssss = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sssss, new cjs.Rectangle(0,0,400,165), null);


(lib.sss = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sss, new cjs.Rectangle(0,0,400,171), null);


(lib.ss = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ss, new cjs.Rectangle(0,0,400,141), null);


(lib.jkjk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A31K6MAm0gheQQ0YRvGU4UgFCgNbgjgABwg");
	this.shape.setTransform(-35.8,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.jkjk, new cjs.Rectangle(-188.3,-144.5,305.2,289), null);


(lib.asd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0979BE").s().p("AgYAZQgJgLgBgOQABgNAJgLQALgKANAAQAOAAALAKQAKALgBANQABAOgKALQgLAKgOAAQgNAAgLgKg");
	this.shape.setTransform(27.9,16.5,0.879,0.879);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1E1C").s().p("AASAoIgmgyIAAAyIgaAAIAAhPIAfAAIAkAxIAAgxIAaAAIAABPg");
	this.shape_1.setTransform(95.9,16.5,0.879,0.879);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1E1C").s().p("AgzAAQAAgpAzgBQA0ABAAApQAAArg0AAQgzAAAAgrgAgXAAQAAAYAXABQAYgBAAgYQAAgYgYAAQgXAAAAAYg");
	this.shape_2.setTransform(84.7,16.5,0.879,0.879);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1E1C").s().p("AgMAoIAAhPIAZAAIAABPg");
	this.shape_3.setTransform(76.3,16.5,0.879,0.879);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1E1C").s().p("AAUAoIAAghIgnAAIAAAhIgbAAIAAhPIAbAAIAAAdIAnAAIAAgdIAbAAIAABPg");
	this.shape_4.setTransform(68.1,16.5,0.879,0.879);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1E1C").s().p("AggAlQgNgGgBgPIAfAAQACAJAPAAQAOAAAAgIQAAgGgNgCIgZgDQgXgEAAgSQAAgaAqAAQAsAAADAaIgeAAQgCgJgPAAQgOAAAAAIQAAADAHACIAiAFQAXAFAAARQAAAbguABQgWAAgLgGg");
	this.shape_5.setTransform(57.4,16.5,0.879,0.879);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1E1C").s().p("AAWAoIgEgNIgiAAIgFANIgdAAIAjhPIAgAAIAiBPgAgKAKIAVAAIgLgdIAAAAg");
	this.shape_6.setTransform(47.4,16.5,0.879,0.879);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1E1C").s().p("AglAoIAAhPIBLAAIAAASIgwAAIAAANIAtAAIAAARIgtAAIAAAfg");
	this.shape_7.setTransform(38.7,16.5,0.879,0.879);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1E1C").s().p("AgvAoIAAhPIA5AAQAmAAAAAnQAAAogqAAgAgUAWIAVAAQATAAAAgWQAAgVgUAAIgUAAg");
	this.shape_8.setTransform(18,16.5,0.879,0.879);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1E1C").s().p("AARAoIglgyIAAAAIAAAyIgaAAIAAhPIAfAAIAkAxIAAgxIAaAAIAABPg");
	this.shape_9.setTransform(6.8,16.5,0.879,0.879);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D1E1C").s().p("AAWAoIgEgNIgiAAIgFANIgdAAIAjhPIAgAAIAiBPgAgKAKIAVAAIgLgdIAAAAg");
	this.shape_10.setTransform(-3.7,16.5,0.879,0.879);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D1E1C").s().p("AgkAoIAAhPIAaAAIAAA9IAwAAIAAASg");
	this.shape_11.setTransform(-12.9,16.5,0.879,0.879);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D1E1C").s().p("AARAoIglgyIAAAyIgaAAIAAhPIAfAAIAkAxIAAgxIAaAAIAABPg");
	this.shape_12.setTransform(-23.2,16.5,0.879,0.879);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1D1E1C").s().p("AgMAoIAAhPIAZAAIAABPg");
	this.shape_13.setTransform(-31.4,16.5,0.879,0.879);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1D1E1C").s().p("AglAoIAAhPIBLAAIAAASIgxAAIAAANIAuAAIAAARIguAAIAAAfg");
	this.shape_14.setTransform(-38.2,16.5,0.879,0.879);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1D1E1C").s().p("AAsBZIgHgVIhJAAIgHAVIhLAAIBMixIBVAAIBMCxgAAVAZIgVg7IAAAAIgUA7IApAAg");
	this.shape_15.setTransform(88.3,-1.9,0.879,0.879);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1D1E1C").s().p("AgiBZIAAiEIhBAAIAAgtIDHAAIAAAtIhBAAIAACEg");
	this.shape_16.setTransform(59.6,-1.9,0.879,0.879);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1D1E1C").s().p("AAnBZIAAhHIhOAAIAABHIhGAAIAAixIBGAAIAAA+IBOAAIAAg+IBHAAIAACxg");
	this.shape_17.setTransform(28.7,-1.9,0.879,0.879);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1D1E1C").s().p("AhPBMQgbgRAAgpIAAhtIBHAAIAABqQAAARAJAHQAJAHARAAQAkAAAAgfIAAhqIBHAAIAABtQAAApgaARQgZAQg4AAQg3AAgYgQg");
	this.shape_18.setTransform(-4,-1.6,0.879,0.879);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1D1E1C").s().p("AhZBZIAAixIBHAAIAACBIBsAAIAAAwg");
	this.shape_19.setTransform(-33.7,-1.9,0.879,0.879);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhlBVIAviCQAFgOAQgMQARgPAPACIgwCJICXAAQgDAKgNAKQgQAMgWAAg");
	this.shape_20.setTransform(-77.6,-1.3,0.879,0.879);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0D7ABE").s().p("AivCwQhJhJAAhnQAAhmBJhJQBJhJBmAAQBnAABJBJQBJBJAABmQAABnhJBJQhJBJhnAAQhmAAhJhJg");
	this.shape_21.setTransform(-78.1,0,0.879,0.879);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAsBZIgHgVIhJAAIgHAVIhLAAIBMixIBVAAIBMCxgAAVAZIgVg7IAAAAIgUA7IApAAg");
	this.shape_22.setTransform(88.3,-1.9,0.879,0.879);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgiBZIAAiEIhBAAIAAgtIDHAAIAAAtIhBAAIAACEg");
	this.shape_23.setTransform(59.6,-1.9,0.879,0.879);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAnBZIAAhHIhOAAIAABHIhGAAIAAixIBGAAIAAA+IBOAAIAAg+IBHAAIAACxg");
	this.shape_24.setTransform(28.7,-1.9,0.879,0.879);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhPBMQgbgRAAgpIAAhtIBHAAIAABqQAAARAJAHQAJAHARAAQAkAAAAgfIAAhqIBHAAIAABtQAAApgaARQgZAQg4AAQg3AAgYgQg");
	this.shape_25.setTransform(-4,-1.6,0.879,0.879);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhZBZIAAixIBHAAIAACBIBsAAIAAAwg");
	this.shape_26.setTransform(-33.7,-1.9,0.879,0.879);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AivCwQhJhJAAhnQAAhmBJhJQBJhJBmAAQBnAABJBJQBJBJAABmQAABnhJBJQhJBJhnAAQhmAAhJhJgAgbhXQgQANgFANIgvCDICVAAQAWAAAQgNQANgJADgLIiXAAIAviJIgDAAQgNAAgPANg");
	this.shape_27.setTransform(-78.1,0,0.879,0.879);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.asd, new cjs.Rectangle(-100,-21.8,200,43.8), null);


(lib._10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AAqBpIADiZIgHAQIhHB6IgDAGIgGAEIgGAEQgDABgDAAIgkAAIAAjRIAwAAIgCCZIAHgRIBGh6IAFgFIAEgEIAGgEIAHgBIAlAAIAADRg");
	this.shape.setTransform(0,0,0.879,0.879);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib._10, new cjs.Rectangle(-8,-9.2,16.1,18.5), null);


(lib._9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AA6CCIAAgyIifAAIAAjQIAwAAIAACsIBPAAIAAisIAwAAIAACsIAcAAIAABIQAAAGgEADQgEAFgGAAg");
	this.shape.setTransform(0,0,0.879,0.879);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib._9, new cjs.Rectangle(-9,-11.4,18,22.8), null);


(lib._8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AhCBpIAAjRICGAAIAAAlIhWAAIAAAxIBCAAIAAAkIhCAAIAAAyIBWAAIAAAlg");
	this.shape.setTransform(0,0,0.879,0.879);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib._8, new cjs.Rectangle(-5.9,-9.2,11.9,18.5), null);


(lib._7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AheBoQgEgCAAgEIAAgeIALAAIAHgBQAEAAADgDQADgCAEgFQAEgGADgIQADgHAEgNIAEgfQAEgVABgUQABgRABgnICNAAIAADRIgyAAIAAitIguAAQgDAngCAcQgEAbgFATQgGAUgHAMQgHANgIAGQgJAHgIACQgJACgMAAQgMAAgGgCg");
	this.shape.setTransform(0,0,0.879,0.879);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib._7, new cjs.Rectangle(-8.7,-9.3,17.5,18.7), null);


(lib._6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AAyBpQgGAAgFgEQgFgDgEgHIghhBQgEgGgFgCQgEgCgGAAIgXAAIAABZIgwAAIAAjRIAwAAIAABVIASAAQAFAAAFgCQAEgDADgEIAlhAQAEgGAEgDQAFgDAHAAIApAAIgyBTQgFAGgEADQgFAEgHACQALAEAGADQAHAHAGAKIAvBXg");
	this.shape.setTransform(0,0,0.879,0.879);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib._6, new cjs.Rectangle(-8.2,-9.2,16.6,18.5), null);


(lib._5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AArBpIAAhUIgQAAQgGAAgFACQgGADgFAJIgdA1QgEAIgIAFQgHAEgLAAIglAAIAshIQAFgJAFgDQAGgGAIgDQgLgDgJgGQgIgFgEgGQgFgGgEgJQgCgKAAgIQAAgNAFgNQAFgKALgJQALgJAOgFQAPgEASAAIBOAAIAADRgAgChCQgGADgDAEQgEADgCAFQgBAFAAAFQAAAFABAFQACAFAEADQADAEAGACQAFACAKAAIAeAAIAAg1IgeAAQgKABgFABg");
	this.shape.setTransform(0,0,0.879,0.879);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib._5, new cjs.Rectangle(-8,-9.2,16.1,18.5), null);


(lib._4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("ABEBpQgGAAgEgDQgDgDgDgFIgMglIhPAAIgMAlQgCAEgEAEQgFADgFAAIgmAAIBRjRIAxAAIBRDRgAgcAYIA5AAIgdhVg");
	this.shape.setTransform(0,0,0.879,0.879);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib._4_1, new cjs.Rectangle(-9.3,-9.2,18.7,18.5), null);


(lib._3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AhQBpIAAjRIBNAAQAWAAAOAEQAPAEAKAHQAJAHAFALQAEAKAAANQAAAGgBAIQgDAHgEAFQgFAHgGAEQgIAFgJADQAVAEALALQAJAMABARQAAANgGAMQgFANgKAHQgLAKgOAEQgQAFgRAAgAggBEIAiAAQAJAAAHgCQAGgDADgEQADgDACgGIABgKQAAgFgCgFQgBgFgDgDQgEgDgHgBQgIgDgGAAIgiAAgAgggQIAngBQAIgCAEgCQADgDADgFQADgFAAgHQAAgJgCgEQgCgFgEgDQgDgDgHgCIgNgBIgdAAg");
	this.shape.setTransform(0,0,0.879,0.879);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib._3, new cjs.Rectangle(-7.1,-9.2,14.4,18.5), null);


(lib._2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AgrBjQgVgIgOgPQgNgNgJgVQgIgVAAgVQAAgUAIgVQAJgVANgNQAOgPAVgIQATgIAYAAQAaAAATAIQAUAJAOAOQAPAOAHAUQAIATAAAWQAAAXgIATQgHAUgPAOQgOAPgUAIQgUAIgZAAQgYAAgTgIgAgYg9QgKAEgJAJQgGAIgFANQgEANAAAOQAAAPAEANQAFAOAGAHQAIAJALAEQAKAFAOAAQAPAAAKgFQAMgFAHgIQAHgIAEgNQAEgNAAgPQAAgOgEgNQgDgMgIgJQgIgJgLgEQgKgFgPAAQgOAAgKAFg");
	this.shape.setTransform(0,0,0.879,0.879);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib._2_1, new cjs.Rectangle(-9.6,-9.4,19.2,18.9), null);


(lib._1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AAqBpIAAhZIhTAAIAABZIgyAAIAAjRIAyAAIAABYIBTAAIAAhYIAxAAIAADRg");
	this.shape.setTransform(0,0,0.879,0.879);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib._1_1, new cjs.Rectangle(-8,-9.2,16.1,18.5), null);


(lib.hjk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.jkjk();
	this.instance.parent = this;
	this.instance.setTransform(8.8,35.3,1,1,-111,0,0,69.5,144.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:144.3,rotation:55.4,guide:{path:[8.8,35.3,101,62.7,77.9,119.1,73.1,130.9,60.9,130.3], orient:'auto'}},5,cjs.Ease.get(1)).to({regY:144.5,rotation:-111,guide:{path:[60.9,130.3,73.1,130.9,77.9,119.1,101,62.7,8.8,35.3], orient:'auto'}},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-278,-8.9,379.2,388.4);


(lib.asdsd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 5
	this.instance = new lib._5();
	this.instance.parent = this;
	this.instance.setTransform(74.1,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({y:8.2},5,cjs.Ease.get(1)).to({y:13.2},5,cjs.Ease.get(-1)).wait(150));

	// 10
	this.instance_1 = new lib._10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(56.6,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({y:8.2},5,cjs.Ease.get(1)).to({y:13.2},5,cjs.Ease.get(-1)).wait(151));

	// 9
	this.instance_2 = new lib._9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(37.1,15.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({y:10.4},5,cjs.Ease.get(1)).to({y:15.4},5,cjs.Ease.get(-1)).wait(152));

	// 6
	this.instance_3 = new lib._6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(18.1,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(17).to({y:8.2},5,cjs.Ease.get(1)).to({y:13.2},5,cjs.Ease.get(-1)).wait(153));

	// 8
	this.instance_4 = new lib._8();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1.2,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(16).to({y:8.2},5,cjs.Ease.get(1)).to({y:13.2},5,cjs.Ease.get(-1)).wait(154));

	// 7
	this.instance_5 = new lib._7();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-17.1,13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({y:8.3},5,cjs.Ease.get(1)).to({y:13.3},5,cjs.Ease.get(-1)).wait(155));

	// 7
	this.instance_6 = new lib._7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-36.3,13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({y:8.3},5,cjs.Ease.get(1)).to({y:13.3},5,cjs.Ease.get(-1)).wait(156));

	// 2
	this.instance_7 = new lib._2_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-55.4,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(13).to({y:8.2},5,cjs.Ease.get(1)).to({y:13.2},5,cjs.Ease.get(-1)).wait(157));

	// 6
	this.instance_8 = new lib._6();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-73.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(12).to({y:8.2},5,cjs.Ease.get(1)).to({y:13.2},5,cjs.Ease.get(-1)).wait(158));

	// 5
	this.instance_9 = new lib._5();
	this.instance_9.parent = this;
	this.instance_9.setTransform(39.5,-17.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(11).to({y:-22.2},5,cjs.Ease.get(1)).to({y:-17.2},5,cjs.Ease.get(-1)).wait(159));

	// 4
	this.instance_10 = new lib._4_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(22.8,-17.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10).to({y:-22.2},5,cjs.Ease.get(1)).to({y:-17.2},5,cjs.Ease.get(-1)).wait(160));

	// 3
	this.instance_11 = new lib._3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(5.8,-17.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(9).to({y:-22.2},5,cjs.Ease.get(1)).to({y:-17.2},5,cjs.Ease.get(-1)).wait(161));

	// 2
	this.instance_12 = new lib._2_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-13.4,-17.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(8).to({y:-22.2},5,cjs.Ease.get(1)).to({y:-17.2},5,cjs.Ease.get(-1)).wait(162));

	// 1
	this.instance_13 = new lib._1_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-33.6,-17.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(7).to({y:-22.2},5,cjs.Ease.get(1)).to({y:-17.2},5,cjs.Ease.get(-1)).wait(163));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.1,-26.7,164.3,53.5);


// stage content:
(lib._970x90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.currLoop = 0;
	}
	this.frame_216 = function() {
		this.currLoop++;
		if (this.currLoop == 2){this.stop(); this.newcol.gotoAndStop(1)} else {this.gotoAndPlay(6)}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(216).call(this.frame_216).wait(1));

	// ramka
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("EhLsgG8MCXZAAAIAAN5MiXZAAAg");
	this.shape.setTransform(485,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(217));

	// new
	this.newcol = new lib.asdsd();
	this.newcol.parent = this;
	this.newcol.setTransform(824.4,45.4,1.156,1.155,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.newcol).wait(217));

	// logo
	this.instance = new lib.asd();
	this.instance.parent = this;
	this.instance.setTransform(140.5,44.4,1.1,1.097,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(217));

	// zatvor
	this.instance_1 = new lib.hjk();
	this.instance_1.parent = this;
	this.instance_1.setTransform(236.4,-54,2.047,2.047,-45);

	this.instance_2 = new lib.hjk();
	this.instance_2.parent = this;
	this.instance_2.setTransform(742.6,152.1,2.047,2.047,135,0,0,0,-0.1);

	this.instance_3 = new lib.hjk();
	this.instance_3.parent = this;
	this.instance_3.setTransform(387.3,303,2.047,2.047,-135,0,0,-0.1,0);

	this.instance_4 = new lib.hjk();
	this.instance_4.parent = this;
	this.instance_4.setTransform(593.1,-203.3,2.047,2.047,45);

	this.instance_5 = new lib.hjk();
	this.instance_5.parent = this;
	this.instance_5.setTransform(238.1,155.3,2.047,2.047,-90,0,0,-0.1,0.1);

	this.instance_6 = new lib.hjk();
	this.instance_6.parent = this;
	this.instance_6.setTransform(741.5,-56.9,2.047,2.047,90,0,0,0.1,-0.1);

	this.instance_7 = new lib.hjk();
	this.instance_7.parent = this;
	this.instance_7.setTransform(596.8,300.8,2.047,2.047,180);

	this.instance_8 = new lib.hjk();
	this.instance_8.parent = this;
	this.instance_8.setTransform(384.5,-202.7,2.047,2.047);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},65).to({state:[]},10).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},60).to({state:[]},9).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},61).to({state:[]},10).wait(2));

	// Слой 8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ao7HCIAAuDMA+fAAAIAAODg");
	mask.setTransform(342.8,45);

	// 3.jpg
	this.instance_9 = new lib.sssss();
	this.instance_9.parent = this;
	this.instance_9.setTransform(286,-14.5);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(141).to({_off:false},0).to({y:-38.5},67).to({_off:true},1).wait(8));

	// 2.jpg
	this.instance_10 = new lib.sss();
	this.instance_10.parent = this;
	this.instance_10.setTransform(286,-30.5);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(71).to({_off:false},0).to({y:-70.5},67).to({_off:true},1).wait(78));

	// 1.jpg
	this.instance_11 = new lib.ss();
	this.instance_11.parent = this;
	this.instance_11.setTransform(286,-1.5);

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({y:-34.5},68).to({_off:true},1).wait(142).to({_off:false,y:2.5},0).to({y:0},5,cjs.Ease.get(1)).wait(1));

	// Слой 13
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhLxAHCIAAuDMCXjAAAIAAODg");
	this.shape_1.setTransform(485,45);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(217));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(484.5,44.5,971,91);
// library properties:
lib.properties = {
	width: 970,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/970x90_atlas_.jpg", id:"970x90_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;