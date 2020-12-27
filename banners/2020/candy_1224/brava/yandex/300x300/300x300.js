(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x300_atlas_", frames: [[319,252,140,250],[0,312,139,250],[319,0,140,250],[0,0,304,187],[141,312,116,113],[0,189,317,121]]}
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
	this.spriteSheet = ss["300x300_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["300x300_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["300x300_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._300250Ресурс3 = function() {
	this.spriteSheet = ss["300x300_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["300x300_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Image_7 = function() {
	this.spriteSheet = ss["300x300_atlas_"];
	this.gotoAndStop(5);
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


(lib.t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLBDIAAgXIAXAAIAAAXgAgLAhIAAhjIAXAAIAABjg");
	this.shape.setTransform(57.6,32.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggBDIATgrIglhaIAcAAIAWBAIAXhAIAbAAIg4CFg");
	this.shape_1.setTransform(49.8,36.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAkA/IAAgaIhHAAIAAAaIgXAAIAAgvIAMAAIAkhOIAVAAIAkBOIAMAAIAAAvgAgTAQIAnAAIgUgtg");
	this.shape_2.setTransform(38.5,35.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AglAlQgPgPAAgWQAAgUAPgQQAPgQAWAAQAXAAAPAQQAPAQAAAUQAAAWgPAPQgPAQgXAAQgWAAgPgQgAgUgUQgIAJAAALQAAANAIAIQAIAJAMAAQANAAAIgJQAIgIAAgNQAAgMgIgIQgIgJgNAAQgMAAgIAJg");
	this.shape_3.setTransform(26.6,34.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbAyIAAhjIA3AAIAAAWIgfAAIAABNg");
	this.shape_4.setTransform(17.8,34.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAkAyIAAhJIgaBJIgTAAIgbhJIAABJIgXAAIAAhjIAiAAIAZBFIAahFIAiAAIAABjg");
	this.shape_5.setTransform(2.8,34.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AglAlQgPgPAAgWQAAgUAPgQQAPgQAWAAQAXAAAPAQQAPAQAAAUQAAAWgPAPQgPAQgXAAQgWAAgPgQgAgUgUQgIAIAAAMQAAAMAIAJQAIAJAMAAQANAAAIgJQAIgIAAgNQAAgMgIgIQgIgJgNAAQgMAAgIAJg");
	this.shape_6.setTransform(-10,34.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AglAyIAAhjIArAAQANAAAIAHQAHAIAAALQAAAHgDAGQgFAFgGADQAHACAGAGQAFAGAAAIQAAAMgIAJQgKAJgQAAgAgNAdIAQAAQAGAAADgCQADgDAAgFQAAgEgDgDQgCgCgHgBIgQAAgAgNgKIAPAAQADAAADgDQADgCAAgEQAAgFgDgCQgCgDgEABIgPAAg");
	this.shape_7.setTransform(-19.9,34.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AglAlQgPgOAAgXQAAgVAPgPQAPgQAWAAQAXAAAPAQQAPAQAAAUQAAAWgPAPQgPAQgXAAQgWAAgPgQgAgUgUQgIAJAAALQAAANAIAIQAIAJAMAAQANAAAIgJQAIgIAAgNQAAgMgIgIQgIgJgNAAQgMAAgIAJg");
	this.shape_8.setTransform(-30.5,34.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAYBDIAAg4IgvAAIAAA4IgZAAIAAiFIAZAAIAAA2IAvAAIAAg2IAZAAIAACFg");
	this.shape_9.setTransform(-42.4,32.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AglAyIAAhjIArAAQAMAAAIAHQAJAIAAALQgBAHgEAGQgDAFgIADQAJACAFAGQAFAGAAAIQAAAMgJAJQgIAJgRAAgAgNAdIAQAAQAFAAADgCQAEgDAAgFQAAgEgEgDQgCgCgGgBIgQAAgAgNgKIAOAAQAEAAADgDQADgCAAgEQAAgFgDgCQgCgDgFABIgOAAg");
	this.shape_10.setTransform(-56.9,34.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAWAyIAAhAIgrBAIgYAAIAAhjIAYAAIAAA/IAsg/IAXAAIAABjg");
	this.shape_11.setTransform(21.7,12.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AASAyIAAgqIgkAAIAAAqIgXAAIAAhjIAXAAIAAAlIAkAAIAAglIAYAAIAABjg");
	this.shape_12.setTransform(10.9,12.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgaArQgKgLABgQIAYAAQAAAGADAEQAEAFAFAAQAGAAADgDQADgDAAgFQAAgFgDgDQgDgCgFAAIgEAAIAAgUIADAAQAGAAACgDQADgCAAgFQAAgEgDgDQgDgCgEgBQgEAAgDADQgDADgBAEIgYAAQABgNAJgJQAJgKAPAAQAPAAAKAIQAJAHAAANQAAAHgEAGQgEAFgIADQAJACAEAGQAFAHAAAJQAAAOgKAJQgKAJgQAAQgRAAgKgKg");
	this.shape_13.setTransform(1.5,12.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAWAyIAAhAIgrBAIgYAAIAAhjIAYAAIAAA/IArg/IAYAAIAABjg");
	this.shape_14.setTransform(-8.2,12.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAsAyIgggwIAAAwIgXAAIAAgwIggAwIgcAAIAjg0IghgvIAcAAIAeAuIAAguIAXAAIAAAuIAeguIAcAAIgiAvIAlA0g");
	this.shape_15.setTransform(-21.3,12.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AglAlQgPgPAAgWQAAgVAPgQQAPgPAWAAQAXAAAPAPQAPAQAAAVQAAAXgPAOQgPAQgXAAQgWAAgPgQgAgUgUQgIAIAAAMQAAANAIAIQAIAKAMAAQANAAAIgKQAIgJAAgMQAAgLgIgJQgIgKgNABQgMgBgIAKg");
	this.shape_16.setTransform(34.9,-9.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AglAyIAAhjIArAAQANAAAIAHQAIAIAAALQgBAHgEAGQgEAFgHADQAJACAFAGQAFAGAAAIQAAANgJAIQgJAJgQAAgAgNAdIAQAAQAGAAADgDQADgCAAgFQAAgEgDgDQgDgCgGgBIgQAAgAgNgKIAOAAQAFAAACgDQADgCAAgEQAAgDgCgEQgEgDgEABIgOAAg");
	this.shape_17.setTransform(24.9,-9.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgLAyIAAhNIgYAAIAAgWIBHAAIAAAWIgYAAIAABNg");
	this.shape_18.setTransform(16.3,-9.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgkAmQgPgOAAgYQAAgWAPgPQAPgPAXAAQATAAANAKQANAKAFAQIgbAAQgEgGgGgEQgHgEgGABQgOgBgHAKQgIAHAAANQAAANAIAJQAIAJANAAQAIAAAFgEQAHgEADgGIAbAAQgGAQgNAKQgLAKgTAAQgXAAgQgPg");
	this.shape_19.setTransform(6.8,-9.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgkAmQgPgPAAgXQAAgUAPgRQAPgPAWAAQAXAAAOAPQAOAQAAAVIAAAGIgBAEIhMAAQACAKAHAFQAHAGAJAAQAHAAAGgDQAFgCAEgFIAbAAQgHAQgMAHQgNAJgRAAQgVAAgPgPgAgPgYQgIAFgDAKIA1AAQgCgJgIgGQgHgGgJABQgJgBgHAGg");
	this.shape_20.setTransform(-4.7,-9.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAPAyIAAgiIgOAAQgTAAgKgIQgKgHAAgVIAAgdIAYAAIAAAdQAAAJAEADQAEADAHABIAOAAIAAgtIAYAAIAABjg");
	this.shape_21.setTransform(-15.4,-9.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AglAmQgOgOAAgXQAAgWAOgQQAOgPAVAAQAKAAAIAFQAIADAGAJIAAAAIAAgOIAWAAIAABjIgWAAIAAgOIAAAAQgGAJgJAEQgJAEgIAAQgVAAgOgPgAgTgUQgIAJAAAMQAAANAIAIQAIAJAMAAQANAAAIgJQAIgIAAgOQAAgMgIgJQgIgIgNAAQgMgBgIAKg");
	this.shape_22.setTransform(-26.1,-9.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAOAyIgjgwIAAAwIgXAAIAAhjIAXAAIAAAuIAjguIAdAAIgoAvIAqA0g");
	this.shape_23.setTransform(-36.7,-9.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgkAmQgPgPAAgWQAAgVAPgRQAPgPAWAAQAXAAAOAPQAOAQAAAVIAAAGIgBAFIhMAAQACAJAHAFQAHAFAJAAQAHAAAGgCQAFgCAEgFIAbAAQgHAQgMAIQgNAIgRAAQgVAAgPgPgAgPgYQgIAFgDAKIA1AAQgCgJgIgGQgHgGgJAAQgJAAgHAGg");
	this.shape_24.setTransform(21.4,-31.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AglAmQgPgPAAgXQAAgUAPgRQAPgPAWAAQAXAAAPAPQAPARAAAUQAAAXgPAPQgPAPgXAAQgWAAgPgPgAgUgVQgIAJAAAMQAAALAIAKQAIAKAMgBQANABAIgKQAIgIAAgNQAAgMgIgJQgIgIgNgBQgMABgIAIg");
	this.shape_25.setTransform(9.8,-31.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AglAyIAAhjIArAAQANAAAIAHQAHAIAAALQAAAHgEAFQgEAGgGADQAHACAGAFQAFAHAAAIQAAANgIAIQgKAJgQAAgAgNAeIAQAAQAGgBADgCQADgEAAgEQAAgEgDgDQgCgCgHgBIgQAAgAgNgLIAPAAQADABAEgDQACgDAAgEQAAgEgCgCQgDgDgEAAIgPAAg");
	this.shape_26.setTransform(-0.1,-31.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AglAmQgPgPAAgXQAAgVAPgQQAPgPAWAAQAWAAAQAPQAPARAAAUQAAAXgPAPQgQAPgWAAQgWAAgPgPgAgUgVQgIAJAAAMQAAANAIAIQAIAKAMgBQANABAIgKQAIgIAAgNQAAgMgIgJQgIgIgNgBQgMABgIAIg");
	this.shape_27.setTransform(-10.7,-31.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAYBDIAAg4IgvAAIAAA4IgZAAIAAiFIAZAAIAAA2IAvAAIAAg2IAZAAIAACFg");
	this.shape_28.setTransform(-22.6,-33.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4, new cjs.Rectangle(-60.7,-39.9,119.5,82.7), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AASAyIAAgqIgkAAIAAAqIgXAAIAAhjIAXAAIAAAlIAkAAIAAglIAYAAIAABjg");
	this.shape.setTransform(26.4,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgkAmQgPgPAAgWQAAgVAPgQQAPgQAWAAQAWAAAPAPQANAPABAWIgBALIhNAAQADAJAHAFQAGAFAKAAQAGABAGgDQAGgCAEgFIAbAAQgGAOgNAKQgNAIgRAAQgVAAgPgPgAgQgYQgIAGgCAIIA1AAQgDgJgHgFQgHgFgJAAQgJAAgIAFg");
	this.shape_1.setTransform(48.6,11);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAWAyIAAhAIgrBAIgYAAIAAhjIAYAAIAABAIArhAIAYAAIAABjg");
	this.shape_2.setTransform(37.3,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgkAmQgPgPAAgWQAAgWAPgPQAQgQAVAAQAXAAAOAPQAOAQAAAVIAAAGIAAAFIhNAAQACAJAHAFQAHAFAJAAQAGABAHgDQAFgCAEgFIAbAAQgGAOgNAKQgNAIgQAAQgWAAgPgPgAgPgYQgIAGgDAIIA1AAQgCgJgIgFQgGgFgKAAQgIAAgIAFg");
	this.shape_3.setTransform(15.4,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAZAyIgZhCIgYBCIgaAAIAohjIAVAAIAoBjg");
	this.shape_4.setTransform(4.5,11);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AglAyIAAhjIArAAQAMAAAIAHQAIAIAAALQAAAHgEAGQgFAGgGACQAKACAEAGQAFAGAAAIQAAAMgJAJQgJAJgQAAgAgNAdIAQAAQAGAAADgCQADgDAAgFQAAgEgDgDQgEgDgFAAIgQAAgAgNgKIAOAAQAFAAACgDQACgCABgEQAAgEgDgDQgCgCgFAAIgOAAg");
	this.shape_5.setTransform(-5,11);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AglAnQgOgPAAgXQAAgWAOgQQAPgPAUAAQAKAAAIAEQAIAFAGAIIAAAAIAAgOIAWAAIAABjIgWAAIAAgOIAAAAQgHAJgIAEQgHADgKABQgUAAgPgOgAgTgVQgIAKAAAMQAAANAIAIQAIAIAMAAQAOAAAHgIQAIgIAAgOQAAgNgIgIQgHgIgOAAQgMAAgIAIg");
	this.shape_6.setTransform(-16,11);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgzBEIAAiEIAWAAIAAANQAEgHAJgFQAJgEAJAAQAVAAAOAPQAPAOAAAYQAAAUgOAQQgNAQgXAAQgGAAgKgDQgGgDgHgIIAAAsgAgVgkQgIAJAAANQAAAOAIAHQAIAIANAAQAMAAAIgIQAHgHABgOQgBgOgHgIQgHgIgNAAQgMAAgJAIg");
	this.shape_7.setTransform(-27.3,12.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AATAyIAAhOIgkAAIAABOIgYAAIAAhjIBTAAIAABjg");
	this.shape_8.setTransform(-38.7,11);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AggBDIATgsIglhZIAbAAIAXBAIAYhAIAbAAIg5CFg");
	this.shape_9.setTransform(-49.2,12.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgkAmQgPgPAAgWQAAgVAPgQQAPgQAWAAQAWAAAPAPQANAPABAWIgBALIhNAAQADAJAHAFQAGAFAKAAQAGABAGgDQAGgCAEgFIAbAAQgGAOgNAKQgNAIgRAAQgVAAgPgPgAgQgYQgHAGgDAIIA1AAQgDgJgHgFQgHgFgJAAQgJAAgIAFg");
	this.shape_10.setTransform(67,-11);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AglAmQgPgQAAgWQAAgVAPgPQAQgQAVAAQAXAAAPAQQAPAPAAAVQAAAVgPARQgQAPgWAAQgVAAgQgPgAgUgUQgIAIAAAMQAAANAIAJQAHAIANAAQANABAHgJQAJgKAAgMQAAgLgJgJQgHgJgNAAQgNAAgHAJg");
	this.shape_11.setTransform(55.5,-11);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AATAyIAAgqIglAAIAAAqIgXAAIAAhjIAXAAIAAAlIAlAAIAAglIAXAAIAABjg");
	this.shape_12.setTransform(44.5,-11);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AASAyIAAgqIgkAAIAAAqIgXAAIAAhjIAXAAIAAAlIAkAAIAAglIAYAAIAABjg");
	this.shape_13.setTransform(34.1,-11);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AglAmQgPgQAAgWQAAgVAPgPQAQgQAVAAQAXAAAPAQQAPAPAAAVQAAAVgPARQgQAPgWAAQgVAAgQgPgAgUgUQgIAIAAAMQAAANAIAJQAHAIANAAQAMABAJgJQAIgKAAgMQAAgLgIgJQgIgJgNAAQgLAAgJAJg");
	this.shape_14.setTransform(23.1,-11);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAWAyIAAhAIgrBAIgYAAIAAhjIAYAAIAABAIArhAIAYAAIAABjg");
	this.shape_15.setTransform(11.8,-11);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAbA/IAAgaIhMAAIAAhiIAXAAIAABNIAlAAIAAhNIAYAAIAABNIAPAAIAAAvg");
	this.shape_16.setTransform(1,-9.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AATAyIAAgqIgkAAIAAAqIgZAAIAAhjIAZAAIAAAlIAkAAIAAglIAXAAIAABjg");
	this.shape_17.setTransform(-10.2,-11);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AglAnQgOgPAAgXQAAgWAOgQQAPgPAUAAQAKAAAIAEQAIAFAGAIIAAAAIAAgOIAWAAIAABjIgWAAIAAgOIAAAAQgHAJgIAEQgHADgKABQgUAAgPgOgAgTgVQgIAJAAANQAAANAIAIQAIAIAMAAQAOAAAHgIQAIgIAAgOQAAgNgIgIQgHgIgOAAQgMAAgIAIg");
	this.shape_18.setTransform(-21.6,-11);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgLAyIAAhOIgYAAIAAgVIBHAAIAAAVIgYAAIAABOg");
	this.shape_19.setTransform(-31.1,-11);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgkAmQgPgPAAgXQAAgWAPgPQAPgPAXAAQASAAAOAKQANAJAFARIgbAAQgEgHgFgDQgHgDgHAAQgNAAgIAIQgIAJAAAMQAAANAIAJQAIAJANgBQAHAAAGgDQAGgDAEgHIAbAAQgGARgMAJQgNAKgSAAQgXAAgQgPg");
	this.shape_20.setTransform(-40.6,-11);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAWAyIAAhAIgrBAIgYAAIAAhjIAYAAIAABAIArhAIAYAAIAABjg");
	this.shape_21.setTransform(-52,-11);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAwBPIAAgZIhfAAIAAAZIgZAAIAAgxIANAAIAxhsIAVAAIAxBsIANAAIAAAxgAggAeIBBAAIghhKg");
	this.shape_22.setTransform(-64.9,-11.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-72.2,-19.3,144.5,38.7), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAhAyIAAhjIAYAAIAABjgAg4AyIAAhjIAYAAIAAAjIAVAAQAOAAAKAJQAJAHAAAQQAAAPgKAIQgJAJgOAAgAggAdIATAAQAGAAADgEQADgDAAgEQAAgFgDgDQgDgEgGAAIgTAAg");
	this.shape.setTransform(27.1,22.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAkA+IAAgYIhHAAIAAAYIgXAAIAAguIAMAAIAkhNIAVAAIAlBNIALAAIAAAugAgTAQIAoAAIgVgtg");
	this.shape_1.setTransform(14.3,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggBCIATgqIglhZIAbAAIAXBAIAXhAIAbAAIg4CDg");
	this.shape_2.setTransform(4.3,23.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgkAmQgPgQAAgWQAAgWAPgPQAPgPAXAAQATAAANAKQANAKAFAQIgbAAQgEgHgFgDQgHgDgHgBQgNABgIAIQgIAJAAAMQAAAOAIAIQAIAIANAAQAHAAAGgCQAHgEADgGIAbAAQgGAQgMAJQgNAKgSAAQgXAAgQgPg");
	this.shape_3.setTransform(-6.6,22.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglAmQgPgPAAgXQAAgVAPgQQAPgPAWAAQAWAAAQAPQAPARAAAUQAAAXgPAPQgQAPgWAAQgWAAgPgPgAgUgVQgIAJAAAMQAAANAIAJQAJAJALgBQANABAIgJQAIgJAAgNQAAgMgIgJQgIgIgNgBQgLABgJAIg");
	this.shape_4.setTransform(-18.1,22.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AATAyIAAhOIglAAIAABOIgXAAIAAhjIBTAAIAABjg");
	this.shape_5.setTransform(-29.1,22.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AglAyIAAhjIArAAQANAAAHAHQAIAIAAALQAAAHgEAGQgEAFgHADQAJACAFAGQAFAGAAAIQAAANgJAIQgJAJgQAAgAgNAdIAQAAQAGAAADgDQADgCAAgFQAAgEgDgDQgEgCgFgBIgQAAgAgNgKIAOAAQAFAAACgDQACgCABgEQAAgEgDgDQgCgDgFABIgOAAg");
	this.shape_6.setTransform(49,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AglAlQgPgPAAgWQAAgUAPgRQAQgPAVAAQAXAAAPAPQAPAQAAAVQAAAWgPAPQgPAQgXAAQgVAAgQgQgAgUgUQgIAJAAALQAAANAIAJQAIAIAMABQANgBAIgIQAIgJAAgNQAAgMgIgIQgIgKgNABQgMgBgIAKg");
	this.shape_7.setTransform(38.4,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLAyIAAhNIgYAAIAAgWIBHAAIAAAWIgYAAIAABNg");
	this.shape_8.setTransform(28.9,0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAOAyIgjgwIAAAwIgXAAIAAhjIAXAAIAAAuIAjguIAdAAIgoAvIAqA0g");
	this.shape_9.setTransform(20.2,0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgkAmQgPgPAAgXQAAgUAPgRQAPgPAWAAQAXAAANAPQAPAQAAAVIAAAGIAAAEIhNAAQACAKAHAFQAHAGAJAAQAHAAAFgDQAGgCAEgFIAbAAQgHAQgMAHQgNAJgQAAQgWAAgPgPgAgQgYQgHAFgDAJIA1AAQgCgIgHgGQgJgGgIABQgIgBgJAGg");
	this.shape_10.setTransform(8.9,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAZAyIgZhDIgXBDIgbAAIAohjIAVAAIAoBjg");
	this.shape_11.setTransform(-2.1,0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AASAyIAAhNIgkAAIAABNIgYAAIAAhjIBVAAIAABjg");
	this.shape_12.setTransform(-12.5,0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAkAyIAAhIIgaBIIgTAAIgahIIAABIIgZAAIAAhjIAjAAIAZBFIAahFIAjAAIAABjg");
	this.shape_13.setTransform(-24.7,0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgkAlQgQgOAAgXQAAgVAQgQQAPgPAVAAQAWAAAQAPQAPAQAAAVQAAAWgPAPQgQAQgWAAQgVAAgPgQgAgUgUQgIAJAAALQAAANAIAJQAJAIALABQANgBAIgIQAIgJAAgNQAAgMgIgIQgIgKgNABQgLgBgJAKg");
	this.shape_14.setTransform(-37.5,0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAPAyIgjgwIAAAwIgYAAIAAhjIAYAAIAAAuIAiguIAdAAIgoAvIAqA0g");
	this.shape_15.setTransform(-48.2,0.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AggA3QgNgOAAgUQAAgHADgJQACgHAFgHIAlg6IAcAAIgdAtIACAAIAEAAQARAAAKAMQAMAKAAAVQAAAVgNANQgMANgUAAQgUAAgNgNgAgPAFQgGAHAAAKQAAALAGAGQAGAHAJAAQAKAAAGgHQAGgGAAgLQAAgKgGgHQgGgGgKAAQgJAAgGAGg");
	this.shape_16.setTransform(20,-23.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AALBDIAAhjIgbAjIgSgOIApg3IAcAAIAACFg");
	this.shape_17.setTransform(9.3,-23.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AglAmQgPgPAAgXQAAgUAPgQQAPgQAWAAQAXAAAPAQQAPAQAAAUQAAAXgPAPQgPAPgXAAQgWAAgPgPgAgUgVQgIAJAAAMQAAALAIAKQAIAKAMgBQANABAIgKQAIgIAAgNQAAgMgIgJQgIgIgNgBQgMABgIAIg");
	this.shape_18.setTransform(-5.1,-21.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAwBPIAAgZIhfAAIAAAZIgZAAIAAgxIANAAIAyhsIAUAAIAxBsIANAAIAAAxgAggAeIBBAAIghhKg");
	this.shape_19.setTransform(-18.2,-22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-52.7,-30.3,105.6,60.7), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AASAyIAAgqIgkAAIAAAqIgXAAIAAhjIAXAAIAAAlIAkAAIAAglIAYAAIAABjg");
	this.shape.setTransform(37.2,45.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAWAyIAAhAIgrBAIgYAAIAAhjIAYAAIAAA/IArg/IAYAAIAABjg");
	this.shape_1.setTransform(26.4,45.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAkAyIAAhJIgbBJIgSAAIgbhJIAABJIgXAAIAAhjIAiAAIAZBFIAZhFIAjAAIAABjg");
	this.shape_2.setTransform(13.8,45.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgdBEIAdguIgCABIgEAAQgQAAgMgMQgLgLAAgUQAAgUAMgNQANgNAUgBQAUAAANAOQANAOAAATQAAAIgDAIQgBAGgIAMIgjA2gAgQgmQgFAIAAAJQAAAMAGAFQAHAGAIAAQAKgBAGgFQAGgHAAgKQAAgJgGgIQgHgGgJAAQgJAAgHAGg");
	this.shape_3.setTransform(-2.5,43.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfA6QgMgNgBgSIAXAAQACAKAFAEQAHAGAHAAQAJAAAGgGQAGgHAAgJQAAgKgGgHQgHgFgMAAIgEAAIAAgWIADAAQAIAAAEgEQAFgDAAgHQAAgFgDgEQgDgDgGgBQgEABgEADQgDAEAAAFIgYAAQAAgQAKgJQALgKAOAAQAOAAALAKQALAKAAAPQAAAHgDAGQgDAGgGAFQALAFAFAIQAFAKAAALQAAAUgNAMQgNAMgTAAQgSABgNgMg");
	this.shape_4.setTransform(-12.8,44);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AglAnQgOgPAAgXQAAgWAOgQQAPgPAUAAQAJAAAJAEQAIAFAGAIIAAAAIAAgOIAWAAIAABjIgWAAIAAgNIAAAAQgGAHgJAFQgJAEgIAAQgUAAgPgOgAgTgVQgIAJAAANQAAANAIAIQAIAIAMAAQANAAAIgIQAIgIAAgOQAAgNgIgIQgIgJgNAAQgMABgIAIg");
	this.shape_5.setTransform(-28,45.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaAqQgKgJABgRIAYAAQAAAGADAFQAEADAFAAQAGAAADgCQADgDAAgFQAAgFgDgDQgDgDgFABIgEAAIAAgUIADAAQAFAAADgDQADgCAAgFQAAgEgDgDQgDgDgEAAQgEAAgDAEQgDACgBAEIgYAAQABgNAJgJQAJgKAPAAQAPAAAKAIQAJAHAAANQAAAHgEAGQgFAGgHACQAJACAEAGQAFAHAAAIQAAAPgKAJQgKAJgQAAQgRAAgKgLg");
	this.shape_6.setTransform(-37.8,45.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAhAyIAAhjIAYAAIAABjgAg4AyIAAhjIAYAAIAAAjIAWAAQANAAAJAJQAKAHAAAPQgBAQgJAIQgJAJgNAAgAggAcIATAAQAGAAADgDQADgCAAgGQAAgEgDgEQgDgCgGgBIgTAAg");
	this.shape_7.setTransform(25.6,23.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAkA+IAAgZIhHAAIAAAZIgXAAIAAguIAMAAIAkhOIAVAAIAkBOIAMAAIAAAugAgUAQIAoAAIgUgtg");
	this.shape_8.setTransform(12.8,24.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AggBCIATgqIglhaIAcAAIAWBAIAYhAIAbAAIg5CEg");
	this.shape_9.setTransform(2.7,25.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgjAmQgQgPAAgXQAAgWAPgPQAQgPAWAAQATAAANAJQANALAFAQIgbAAQgDgGgGgEQgHgDgHAAQgNAAgIAIQgIAJAAAMQAAANAIAJQAJAIAMABQAHAAAHgEQAGgDADgHIAbAAQgGARgMAJQgNAKgSAAQgWAAgQgPg");
	this.shape_10.setTransform(-8.2,23.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AglAlQgPgPAAgWQAAgVAPgQQAPgPAWAAQAXAAAPAPQAPAQAAAVQAAAWgPAPQgPAQgXAAQgWAAgPgQgAgUgUQgIAJAAALQAAANAIAJQAIAIAMABQANgBAIgIQAIgJAAgNQAAgMgIgIQgIgKgNABQgMgBgIAKg");
	this.shape_11.setTransform(-19.7,23.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AATAyIAAhOIgkAAIAABOIgZAAIAAhjIBVAAIAABjg");
	this.shape_12.setTransform(-30.7,23.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AglAmQgOgOAAgXQAAgWAOgQQAPgPAUAAQAJAAAJAEQAIAFAGAIIAAAAIAAgOIAWAAIAABjIgWAAIAAgNIAAAAQgGAHgJAFQgKAEgHAAQgUAAgPgPgAgTgVQgIAJAAANQAAANAIAIQAIAIAMAAQAMAAAJgIQAIgJAAgNQAAgLgIgKQgJgJgMAAQgMABgIAIg");
	this.shape_13.setTransform(29.3,1.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAPAyIgjgwIAAAwIgYAAIAAhjIAYAAIAAAuIAiguIAdAAIgoAvIAqA0g");
	this.shape_14.setTransform(18.7,1.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhBAyIAAhjIAYAAIAABNIAeAAIAAhNIAXAAIAABNIAeAAIAAhNIAYAAIAABjg");
	this.shape_15.setTransform(5.7,1.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AggBDIATgrIglhZIAbAAIAXA/IAYg/IAbAAIg5CEg");
	this.shape_16.setTransform(-7.2,3.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgkAmQgPgPAAgXQAAgWAPgPQAPgPAXAAQATAAANAKQANAKAFAQIgbAAQgDgGgGgEQgHgEgHAAQgNAAgIAJQgIAJAAAMQAAAOAIAHQAIAKANgBQAIABAFgEQAHgEADgFIAbAAQgFAPgNALQgNAJgSAAQgXAAgQgPg");
	this.shape_17.setTransform(-18.1,1.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAWAyIAAhAIgrBAIgYAAIAAhjIAYAAIAAA/IArg/IAYAAIAABjg");
	this.shape_18.setTransform(-33.6,1.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AglAnQgOgPAAgXQAAgWAOgQQAPgPAUAAQAJAAAJAEQAIAFAGAIIAAAAIAAgOIAWAAIAABjIgWAAIAAgOIAAAAQgGAJgJAEQgJAEgIAAQgUAAgPgOgAgTgUQgIAJAAAMQAAANAIAIQAIAJAMAAQANAAAIgJQAIgIAAgOQAAgNgIgIQgIgIgNgBQgMAAgIAKg");
	this.shape_19.setTransform(29.4,-20.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAOAyIgjgwIAAAwIgXAAIAAhjIAXAAIAAAuIAjguIAdAAIgoAvIAqA0g");
	this.shape_20.setTransform(18.8,-20.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAWBEIAAhBIgrBBIgYAAIAAhjIAYAAIAABAIArhAIAYAAIAABjgAgTgyQgIgGgCgLIASAAQABAEADACQADACAEAAQAFAAACgCQAEgCABgEIASAAQgCAKgIAHQgHAHgNAAQgMAAgHgHg");
	this.shape_21.setTransform(7.7,-22.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AglAmQgPgQAAgWQAAgVAPgQQAPgPAWAAQAXAAAOAPQAQARAAAUQAAAWgQAQQgOAPgXAAQgWAAgPgPgAgUgUQgIAIAAAMQAAANAIAJQAHAIANABQANgBAIgIQAIgKAAgMQAAgLgIgJQgIgKgNAAQgNAAgHAKg");
	this.shape_22.setTransform(-3.6,-20.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAlAyIAAhIIgbBIIgTAAIgahIIAABIIgZAAIAAhjIAjAAIAZBGIAahGIAiAAIAABjg");
	this.shape_23.setTransform(-16.4,-20.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgYAKIAAgTIAxAAIAAATg");
	this.shape_24.setTransform(-31.4,-21.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgdBEIAeguIgDABIgEAAQgQAAgMgMQgLgLAAgUQAAgTANgOQANgNATgBQAUAAANAOQANANAAAVQAAAGgCAJQgCAGgIANIgjA1gAgPglQgGAGAAALQAAAKAGAGQAHAGAIgBQAKAAAGgFQAGgHAAgJQAAgLgGgGQgHgHgJAAQgJAAgGAHg");
	this.shape_25.setTransform(32.9,-44.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgeA6QgNgMgBgTIAYAAQABAJAGAFQAGAGAHAAQAJAAAGgHQAGgFAAgKQAAgLgGgFQgGgHgNABIgEAAIAAgWIAEAAQAIAAAEgEQAEgDAAgHQAAgFgDgEQgDgEgFAAQgFAAgDAEQgEAEABAFIgYAAQgBgPAKgLQAKgKAPABQAPgBALAKQAKALAAAPQAAAHgDAGQgCAGgHAFQAKAEAGAIQAFAKAAAMQAAAVgNALQgNAMgTAAQgSAAgMgLg");
	this.shape_26.setTransform(22.6,-44);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAsBDIAAhjIghBjIgUAAIgihjIAABjIgZAAIAAiFIAiAAIAiBlIAjhlIAiAAIAACFg");
	this.shape_27.setTransform(5.5,-44);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgxAxQgUgUAAgcQAAgdAUgUQAVgVAcABQAegBAUAVQAUAUAAAdQAAAdgUATQgUAVgegBQgdABgUgVgAgfgfQgNANAAASQAAATANANQANAOASAAQATAAAOgOQANgOAAgSQAAgSgNgNQgOgNgTAAQgSAAgNANg");
	this.shape_28.setTransform(-10.2,-44);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgxAxQgUgTAAgdQAAgcAUgVQAUgVAdABQAegBAUAVQAUAUAAAdQAAAdgUATQgUAVgegBQgdABgUgVgAgfgfQgNAMAAATQAAAUANAMQANAOASAAQAUAAAMgOQAOgOAAgSQAAgSgOgNQgMgNgUAAQgSAAgNANg");
	this.shape_29.setTransform(-25.3,-44);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgpBDIAAgYIAyhVIgvAAIAAgYIBNAAIAAAYIgyBVIA0AAIAAAYg");
	this.shape_30.setTransform(-37.2,-44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-41.4,-50.9,82.9,101.9), null);


(lib.p4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._4();
	this.instance.parent = this;
	this.instance.setTransform(-58,-56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p4, new cjs.Rectangle(-58,-56.5,116,113), null);


(lib.p3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._3();
	this.instance.parent = this;
	this.instance.setTransform(-70,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p3, new cjs.Rectangle(-70,-125,140,250), null);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(-69.5,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2, new cjs.Rectangle(-69.5,-125,139,250), null);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(-70,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1, new cjs.Rectangle(-70,-125,140,250), null);


// stage content:
(lib._300x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3W3WMAutAAAMAAAAutMgutAAAg");
	this.shape.setTransform(150,150);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(296));

	// legal
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEAVIgFgCIgDgEIgBgFIACgBIACAAIABABIACADQAAAAAAAAQAAABAAAAQAAAAAAAAQABAAAAABIACABIADABIAEgBIADgBIABgDIABgDIgBgDIgBgCIgDgCIgFgBIAAgDIAEAAIADgCIABgCIABgDIgBgDIgBgCIgCgCIgDAAIgCAAIgCACIgCACIgBACIgCABIgBAAIgDAAIABgFIADgEIAFgCIAEgBIAFABIAEACIADAEIABAEIgBADIgBAEIgDABIgDACQAEAAADADQABACAAAEIAAAGIgDADIgFADIgGABg");
	this.shape_1.setTransform(281.1,273.6,1.1,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgFAVIgDgBIgFgDIACgCQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIAFACIAEABIACgBIAEgCIACgDIAAgEIAAgEIgCgCIgDgBIgDgBIgHABIgDgBIADgUIATAAIAAADIgBACIgCAAIgMAAIgCALIAFAAIAGABIAEACIADAEIABAFIgCAGIgDAFIgEADIgGABg");
	this.shape_2.setTransform(277.3,273.6,1.1,1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAFAWIAAgMIgSAAIgBAAIAAgBIgBgDIAUgaIAFAAIAAAaIAGAAIAAAEIgBAAIgFAAIAAAMgAgJAGIAOAAIAAgUg");
	this.shape_3.setTransform(273.5,273.6,1.1,1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFAVIgFgFIgEgHIgBgJIABgJIAEgHQACgDADgBIAFgBQADAAADABQADABACADQADAEAAADQACAEAAAFQAAAGgCADQAAAEgDADIgFAFQgDABgDAAIgFgBgAgDgQIgDAEIgCAFIgBAHIABAIIACAGIADACIADABIAEgBIADgCIACgGIABgIIgBgHIgCgFIgDgEIgEgBg");
	this.shape_4.setTransform(269.7,273.6,1.1,1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKAWIATgmIgWAAIgBgBIAAgDIAdAAIAAACIgBADIgRAiIgBACIgCABg");
	this.shape_5.setTransform(265.9,273.6,1.1,1.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgFAVIgFgFIgEgHIAAgJIAAgJIAEgHQACgDADgBIAFgBQAEAAACABQACABADADIADAHIABAJIgBAJQgBAGgCABIgFAFQgCABgEAAIgFgBgAgDgQQAAABAAAAQgBAAAAAAQgBABAAAAQgBABAAABIgCAFIAAAHIAAAIIACAGIADACIADABIADgBIAEgCIACgGIABgIIgBgHIgCgFQAAgBgBgBQAAAAgBgBQAAAAgBAAQAAAAgBgBIgDgBg");
	this.shape_6.setTransform(262,273.6,1.1,1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgFAVIgFgDIgCgFIgBgGIABgGIADgGIAKgOIACgBIACgBIAEAAIgLAQIgBACIgBABIADgCIADAAIAFABIAEACIADADIABAGIgBAFIgEAFIgEADIgGABgAgDAAIgCACIgDADIAAADIAAAEIACACIADACIADABIAEgBIACgCIACgCIABgEIgBgEIgCgDIgCgBIgEAAg");
	this.shape_7.setTransform(258.3,273.6,1.1,1.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgIAWIAMgRIACgDIgEACIgDAAIgFgBIgDgCIgDgDIgBgFIABgGIADgEIAEgDIAGgBIAFABIAEADIADAEIABAGIAAAEIgBADIgCACIgCADIgJAPIgBABIgCABgAgCgPIgDABIgCADIAAADQAAAFACACQACABADAAIADAAIAEgCIABgCIABgEIgBgDIgBgDIgEgBIgCgBg");
	this.shape_8.setTransform(254.3,273.6,1.1,1.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgKAWIARgiIACgEIgWAAIgBgBIAAgDIAdAAIAAADIgBACIgQAiIgBACIgDABg");
	this.shape_9.setTransform(250.6,273.6,1.1,1.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKAWIATgmIgWAAIgBgBIAAgDIAdAAIAAACIgBADIgRAiIgBACIgCABg");
	this.shape_10.setTransform(246.8,273.6,1.1,1.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAFAWIAAgMIgSAAIgBAAIAAgBIgBgDIAUgaIAFAAIAAAaIAGAAIAAAEIgBAAIgFAAIAAAMgAgJAGIAOAAIAAgUg");
	this.shape_11.setTransform(242.8,273.6,1.1,1.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgFAVIgFgFIgEgHIgBgJIABgJIAEgHQACgDADgBIAFgBQADAAADABQADABACADQADAEAAADQACAEAAAFQAAAGgCADQAAAEgDADIgFAFQgDABgDAAIgFgBgAgDgQIgDAEIgCAFIgBAHIABAIIACAGIADACIADABIAEgBIADgCIACgGIABgIIgBgHIgCgFIgDgEIgEgBg");
	this.shape_12.setTransform(239.1,273.6,1.1,1.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgJAWIAAgFIAJAAIAAgeIgIAGIAAAAIgCAAIAAAAIgCgDIAMgKIAFAAIAAAlIAIAAIAAAFg");
	this.shape_13.setTransform(235.3,273.6,1.1,1.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AALAWIAAgUIgWAAIAAAUIgGAAIAAgqIAGAAIAAASIAWAAIAAgSIAGAAIAAAqg");
	this.shape_14.setTransform(229.2,273.6,1.1,1.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgNAWIAAgqIAMAAIAGAAIAGADIACAFIABAFIgBAFIgCADQgDADgDABIgGABIgGAAIAAAQgAgHAAIAGAAIAEAAIADgBIACgCIAAgEIAAgDIgCgDIgDgCIgEgBIgGAAg");
	this.shape_15.setTransform(224.8,273.6,1.1,1.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgMAWIAAgqIAZAAIAAAEIgTAAIAAAmg");
	this.shape_16.setTransform(221.1,273.6,1.1,1.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgIAVIgGgFQgDgDgCgEIgBgJIABgIQACgEADgDQADgDADgCQAEgBAEAAQAFAAAEABQAEADACACQADADACAEIABAIIgBAJQgCAEgDADIgGAFQgEABgFAAQgEAAgEgBgAgFgOIgFADQgCACgBADIgBAGIABAHQABADACACIAFAEIAFAAIAGAAQAEgCABgCQACgCABgDQABgDAAgEQAAgDgBgDQgBgDgCgCIgFgDIgGgCIgFACg");
	this.shape_17.setTransform(216.4,273.6,1.1,1.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgEAVIgEgBIgFgDIACgCIABgBIACAAIAEACIAEABIADgBIADgCIABgDIABgEIAAgEIgCgCIgDgBIgDgBIgHABIgEgBIAEgUIAUAAIAAADIgBACIgDAAIgMAAIgCALIAFAAIAGABIAEACQACACABACIABAFIgBAGIgEAFIgFADIgFABg");
	this.shape_18.setTransform(210.2,273.6,1.1,1.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgJAWIAAgFIAJAAIAAgeIgIAGIAAAAIgCAAIAAAAIgCgDIAMgKIAFAAIAAAlIAIAAIAAAFg");
	this.shape_19.setTransform(206.4,273.6,1.1,1.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgFAVIgFgFIgDgHIgBgJIABgJIADgHQACgDADgBQADgBACAAIAGABQADABACADIADAHIABAJIgBAJQgBAGgCABIgFAFIgGABQgCAAgDgBgAgDgQQAAABAAAAQgBAAAAAAQgBABAAAAQgBABAAABIgCAFIgBAHIABAIIACAGIADACIADABIAEgBIADgCIACgGIABgIIgBgHIgCgFQAAgBgBgBQAAAAgBgBQAAAAgBAAQAAAAAAgBIgEgBg");
	this.shape_20.setTransform(202.5,273.6,1.1,1.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgOAWIAAgCIABgBIAAgCIAQgRIACgCQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAIAAgEIAAgDIgCgCIgCgBIgDgBIgCABIgCABIgCACIgBACIgBACIgCAAIgDgBIACgFIADgEIAEgCIAFgBIAEABIAFACIACAEIABAFIAAAFIgCAEIgQARIAEgBIANAAIACABIAAABIAAAEg");
	this.shape_21.setTransform(198.7,273.6,1.1,1.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgJAWIAAgFIAJAAIAAgeIgIAGIAAAAIgCAAIAAAAIgCgDIAMgKIAFAAIAAAlIAIAAIAAAFg");
	this.shape_22.setTransform(194.9,273.6,1.1,1.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgEAVIgEgBIgDgBIgCgCIACgCIABgBIACAAIAEACIAEABIADgBIADgCIABgDIABgEIAAgEIgCgCIgDgBIgDgBIgHABIgEgBIAEgUIATAAIAAADIAAACIgDAAIgMAAIgCALIAFAAIAGABQACAAACACIADAEIABAFIgBAGIgEAFIgFADIgFABg");
	this.shape_23.setTransform(191,273.6,1.1,1.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAFAWIAAgMIgSAAIgBAAIgBgBIAAgDIAUgaIAFAAIAAAaIAGAAIAAADIAAABIgBAAIgFAAIAAAMgAgJAGIAOAAIAAgSIAAgCg");
	this.shape_24.setTransform(187.2,273.6,1.1,1.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgFAVQgEgDgBgCIgDgHIgCgJIACgJIADgHQACgDADgBQACgBADAAIAGABQADABACADIAEAHIABAJIgBAJQgCAGgCABIgFAFIgGABQgDAAgCgBgAgDgQIgDAEIgCAFIgBAHIABAIIACAGIADACIADABIAEgBIADgCIACgGIAAgIIAAgHIgCgFQgBgBAAAAQAAgBAAAAQgBgBAAAAQgBAAAAgBIgEgBg");
	this.shape_25.setTransform(183.4,273.6,1.1,1.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgJAWIAQgiIACgEIgWAAIgBgBIAAgDIAcAAIAAADIAAACIgRAiIgBACIgCABg");
	this.shape_26.setTransform(179.6,273.6,1.1,1.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgKAWIATgmIgWAAIgBgBIAAgDIAdAAIAAACIgBADIgRAiIgBACIgCABg");
	this.shape_27.setTransform(175.8,273.6,1.1,1.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AALAWIAAgUIgVAAIAAAUIgHAAIAAgqIAHAAIAAASIAVAAIAAgSIAHAAIAAAqg");
	this.shape_28.setTransform(169.6,273.6,1.1,1.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AALAWIAAgUIgVAAIAAAUIgHAAIAAgqIAHAAIAAASIAVAAIAAgSIAGAAIAAAqg");
	this.shape_29.setTransform(164.6,273.6,1.1,1.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AALAWIAAgjIgBADIgBABIgTAeIgCABIgFAAIAAgqIAHAAIAAAfIgBADIACgFIATgcIABgBIACAAIAEAAIAAAqg");
	this.shape_30.setTransform(159.5,273.6,1.1,1.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgJAWIAAgFIAJAAIAAgeIgHAGIgBABIgCAAIAAgBIgCgDIAMgKIAEAAIAAAlIAJAAIAAAFg");
	this.shape_31.setTransform(276.3,264.8,1.1,1.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgFAVIgFgFIgEgHIAAgJIAAgJIAEgGQACgEADgBQADgBACAAIAGABQACABADAEIADAGIABAJIgBAJQgBAGgCABIgFAFIgGABQgCAAgDgBgAgDgPQAAAAAAAAQgBAAAAABQgBAAAAAAQgBABAAABIgCAFIgBAHIABAIIACAGIADACIADABIADgBIAEgCIACgGIABgIIgBgHIgCgFQAAgBgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAIgDgCg");
	this.shape_32.setTransform(272.4,264.8,1.1,1.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgFAVIgFgFQgCgBgBgGQgCgDAAgGQAAgFACgEQABgFACgBQACgEADgBIAFgBQADAAADABQADABACAEQADADAAADQACAEAAAFQAAAGgCADQAAAEgDADIgFAFQgDABgDAAIgFgBgAgDgPIgDADIgCAFIgBAHIABAIIACAGIADACIADABIAEgBIADgCIACgGIABgIIgBgHIgCgFIgDgDIgEgCg");
	this.shape_33.setTransform(268.6,264.8,1.1,1.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgJAWIAAgFIAJAAIAAgeIgIAGIAAABIgCAAIAAgBIgCgDIAMgKIAFAAIAAAlIAIAAIAAAFg");
	this.shape_34.setTransform(264.8,264.8,1.1,1.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgEAPIgDgDIgEgFIgBgHIABgFQABgDADgCIAEgEIAFgBIAGABIAEADIgBACIgBABIgBAAIgCgBIgFgBIgCAAIgEADIgBADIgBAEIABAFIABADIAEACIACABIADAAIACgBIACgBIABgBIABABIABACIgCACIgCACIgHABg");
	this.shape_35.setTransform(259.7,265.5,1.1,1.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAIAPIAAgWIgBACIgBABIgCADIgLAPIAAABIgCAAIgDAAIAAgdIAGAAIAAAUIgBACIABgCIABgBIACgDIALgPIABgBIABAAIADAAIAAAdg");
	this.shape_36.setTransform(256.1,265.5,1.1,1.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgCAbIAAgKQgDAAgDgCIgGgDQgCgCgBgDIgBgGIABgFQABgDACgCIAGgDQADgCADAAIAAgMIAFAAIAAAMQADAAADACQADAAACADIAEAFIABAFIgBAGIgEAFQgCADgDAAQgDACgDAAIAAAKgAACAMIAFgBIADgCIACgDIABgFIgBgEIgCgDIgDgCIgFgBgAgKgGQgCADAAAEQAAAFACADQADADAFAAIAAgVQgFAAgDADg");
	this.shape_37.setTransform(251.9,265.4,1.1,1.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgFAPIgFgEIgDgFQgBgBAAgFIABgGIADgEIAFgEIAFgBIAGABQAEACABACQABABABADIABAGIgBAGQgBAEgBABQgBACgEACIgGABgAgFgHQgDADAAAEQAAAFADADQABADAEAAQAEAAACgDQADgCAAgGQAAgFgDgCQgCgDgEAAQgEAAgBADg");
	this.shape_38.setTransform(247.7,265.5,1.1,1.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgCAHIAAgBIABgCIABgBIAAgBIAAgCIAAAAIgBAAIgBAAIgBgDIABgDIACgBIACABIABABIABABIAAACIgBACIgBADIgDAFg");
	this.shape_39.setTransform(243.4,267.2,1.1,1.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgFAVIgEgDQgBAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIgCgFQABgEACgCQABgCAEgBIgEgDIgCgHQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAIACgEIAEgCIAFgBIAGABIADACIADAEQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAIgCAHIgEADQAEABABACQADACAAAEIgBAFQgBADgDABIgEADIgGABgAgCACQgBAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAABIgCACIgBADIABAEIABACIAEACIACAAIADAAIAEgCIABgCIABgEIgBgDIgCgCQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAIgDAAgAgCgQIgDACIgBACIgBACIABADIABADIADABIACABIADgBIADgBIABgDIABgDIgBgCIgBgCIgDgCIgDgBg");
	this.shape_40.setTransform(240.7,264.8,1.1,1.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgCADIgBgDIABgBIAAgBIACgBIAAAAIACAAIACACIAAADIgBABIgBABIgCAAg");
	this.shape_41.setTransform(236.3,266.8,1.1,1.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AANAUIAAgKIgYAAIAAAJIgBABIgBAAIgEAAIAAgOIACAAIACAAIACgCIABgDIACgDIABgHIABgKIASAAIAAAZIAGAAIAAAMIgBACIgBAAgAgCgHIgCAGIgDAHIAOAAIAAgVIgJAAg");
	this.shape_42.setTransform(233.5,266.1,1.1,1.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgCAHIAAAAIAAgBIAAgBIABgBIAAgBIABgBIAAgCIgBAAIgBAAIAAgCIgBgBIABgDIACgBIABABIACABIABADIAAACIgEAFIgBADg");
	this.shape_43.setTransform(229,267.2,1.1,1.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAIAWIAAgXIgBABIgBACIgCACIgLAQIAAABIgCABIgDAAIAAgeIAGAAIAAAVIgBABIABgCIABgBIACgDIALgOIABgCIABAAIADAAIAAAegAgCgNIgDgBIgCgCIAAgDIAAgBIABAAIADAAIAAACIABABIABACIADAAIACgCIABgBIAAgCIADAAIABAAIAAABIAAADIgCACIgDABIgEABg");
	this.shape_44.setTransform(226.4,264.8,1.1,1.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgHADIAAgEIAPAAIAAAEg");
	this.shape_45.setTransform(223.3,265.2,1.1,1.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgOAWIAAgCIABgBIAAgCIAOgNIAFgGIACgDIAAgEIgBgDIgCgCIgCgBIgCgBIgDABIgCABIgCACIAAACIgBACIgCAAIgEgBIACgFIADgEIAEgCIAFgBIAFABIAEACIACAEIABAFIAAAFIgCAEIgRARIAGgBIAMAAIACABIAAABIAAAEg");
	this.shape_46.setTransform(220.1,264.8,1.1,1.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAIAWIAAgXIgBABIgBACIgEAFIgJANIAAABIgCABIgDAAIAAgeIAGAAIAAAVIgBABIACgCIACgEIALgOIABgCIABAAIADAAIAAAegAgCgNIgDgBIgCgCIAAgDIAAgBIABAAIADAAIAAACIABABIABACIADAAIACgCIABgBIAAgCIADAAIABAAIAAABIAAADIgCACIgDABIgEABg");
	this.shape_47.setTransform(214.6,264.8,1.1,1.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAHAPIAAgUIABgCIgBACIgBABIgCADIgLAPIgBABIgBAAIgDAAIAAgdIAFAAIAAAWIABgCIABgBIAEgFIAJgNIAAgBIACAAIADAAIAAAdg");
	this.shape_48.setTransform(210.8,265.5,1.1,1.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAKAPIgDAAIgBgCIgGgJIgBgCIgCAAIgDAAIAAANIgGAAIAAgdIAGAAIAAANIACAAIADgBIABgBIAFgKIACgBIABAAIAFAAIgKANIgCABIADAAIACADIAHAMg");
	this.shape_49.setTransform(207.3,265.5,1.1,1.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgDAPIgFgDIgCgFIgBgHIABgFIACgFIAFgEIAFgBIAGABIAEADIgBACIgBABIgBAAIgBAAIgBgBIgFgBIgDAAIgCADIgCADIgBAEIABAFIACADIADACIACABIADAAIACgBIACgBIABgBIABABIABACIgCACIgDACIgGABg");
	this.shape_50.setTransform(203.9,265.5,1.1,1.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAHAPIAAgOIgNAAIAAAOIgGAAIAAgdIAGAAIAAAMIANAAIAAgMIAGAAIAAAdg");
	this.shape_51.setTransform(200.4,265.5,1.1,1.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAHAPIAAgTIABgBIAAgCIgBACIgBABIgCADIgLAPIgBABIgBAAIgDAAIAAgdIAGAAIAAATIgBABIAAACIABgCIABgBIACgDIALgPIABgBIABAAIADAAIAAAdg");
	this.shape_52.setTransform(196.7,265.5,1.1,1.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AASAUIAAgKIgpAAIAAgdIAGAAIAAAZIAMAAIAAgZIAFAAIAAAZIAMAAIAAgZIAGAAIAAAZIAGAAIAAAMIgBACIgCAAg");
	this.shape_53.setTransform(192.1,266.1,1.1,1.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgFAPIgFgEIgCgFQgCgCAAgEQAAgDACgDIACgEIAFgEIAFgBIAGABQAEACABACQACABABADIABAGIgBAGQgBAEgCABQgBACgEACIgGABgAgFgHQgDADAAAEQAAAFADADQABADAEAAQAFAAACgDQACgCAAgGQAAgFgCgCQgCgDgFAAQgEAAgBADg");
	this.shape_54.setTransform(187.2,265.5,1.1,1.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgOAWIAAgqIAOAAIAGAAIAEADIADAFIACAFIgCAFIgDAEQgCACgCABIgGABIgIAAIAAAQgAgIAAIAIAAIADAAIADgBIACgCIABgEIgBgEIgCgCIgDgCIgDAAIgIAAg");
	this.shape_55.setTransform(183.7,264.8,1.1,1.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAMAUIAAgKIgYAAIAAAJIAAABIgBAAIgEAAIAAgOIABAAIACAAIACgCIACgDIACgDIACgRIASAAIAAAZIAGAAIAAAMIgBACIgBAAgAgEgBIgBADIgCAEIANAAIAAgVIgIAAg");
	this.shape_56.setTransform(177.8,266.1,1.1,1.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgFAPIgDgCIgCgCIABgCIABgBIABABIACABIACABIADAAIACAAIACgBIACgCIAAgCQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQgBgCgDAAIgEAAIAAgDIAEAAIAEgBIACgDIgBgCIgBgBIgEgBIgFABIgBABIgCAAIAAgBIgCgCIAEgDIAGgBIAEABIAEACIACACIABADIAAACIgBACIgFADQADAAACACIABAEIgBAEIgCADIgEACIgEABg");
	this.shape_57.setTransform(174.2,265.5,1.1,1.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgEAPIgFgEIgCgFIgBgGIABgGIACgEIAFgEIAFgBIAFABIAEADIADAEIABAGIAAABIgCAAIgTAAIABAFIACADIADADIACAAIAEAAIACgBIACgBIABgBIABABIACACIgDACIgDACIgGABgAgEgIQgDACAAAEIAPAAIAAgEIgBgCIgDgCIgDgBQgCAAgDADg");
	this.shape_58.setTransform(171,265.5,1.1,1.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgFAPIgFgEQgCgBgBgEQAAgBAAgFIAAgGQABgDACgBIAFgEIAFgBIAGABQAEACABACQACABAAADIABAGQAAAFgBABQAAAEgCABQgBACgEACIgGABgAgFgHQgDADAAAEQAAAFADADQACADADAAQAEAAACgDQACgCAAgGQAAgFgCgCQgCgDgEAAQgDAAgCADg");
	this.shape_59.setTransform(167.4,265.5,1.1,1.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgNAVIAAgoIAEAAIACABIAAAEIAEgEIAFgCIAFABIADAEIACAEIABAHIgBAGIgCAEIgEAEIgFABIgFgBIgDgDIAAAOgAgEgOIgDADIAAAOIADACIAEABQAEAAABgDQADgCAAgFIgBgFIgCgEIgCgBIgDgBg");
	this.shape_60.setTransform(163.8,266,1.1,1.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AAKAWIAAglIgUAAIAAAlIgGAAIAAgqIAhAAIAAAqg");
	this.shape_61.setTransform(159.4,264.8,1.1,1.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgCAHIgBAAIAAgBIABgBIABgBIAAgBIABgBIAAgCIgBAAIgBAAIgBgCIAAgBIABgDIACgBIABABIACABIABADIgBACIgBADIgDAFg");
	this.shape_62.setTransform(280.4,258.4,1.1,1.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgGAPIgDgBIgBgDIgBgDIABgEIADgDIAGgBIAHgBIAAgCIgBgFQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgDAAIgFADIgBAAIgBgBIgBgCIAGgEIAFgBIAFABIADACIACAEIABAFIAAASIgCAAIgCAAIgBgEIgCACIgDACIgFABgAAAACIgDABIgCACIgBACIABACIABACIADABIAEgBIACgCIABgBIAAgGg");
	this.shape_63.setTransform(277.9,256.7,1.1,1.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgLAPIAAgdIALAAIAEAAIAEACIACACIAAADIgBAEIgCACIgDABIAGACQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAIgBAEIgDADIgDACIgFAAgAgFALIAFAAQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBIAAgCIgBgBIgCgBIgDgBIgFAAgAgFgBIAFAAIACgBIACgBQAAAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAIAAgCIAAgCIgBgBIgCgBIgHAAg");
	this.shape_64.setTransform(274.8,256.7,1.1,1.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAJAPIgCAAIgBgCIgGgJIgBgCIgCAAIgDAAIAAANIgGAAIAAgdIAGAAIAAANIACAAIADgBIABgBIAFgKIACgBIABAAIAFAAIgKANIgCABIADAAIACADIAHAMg");
	this.shape_65.setTransform(271.5,256.7,1.1,1.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgDAPIgFgDIgCgFIgBgHIAAgFIADgFIAFgEIAFgBIAGABIAEADIgBACIgBABIgBAAIgBAAIgBgBIgCgBIgDAAIgDAAIgCADIgCADIgBAEIABAFIACADIACACIADABIADAAIACgBIACgBIABgBIABABIABACIgCACIgDACIgGABg");
	this.shape_66.setTransform(268.1,256.7,1.1,1.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgFAPIgFgEIgDgFIgBgGIABgGIADgEIAFgEIAFgBIAGABIAFAEIADAEIABAGIgBAGIgDAFIgFAEIgGABgAgGgHQgCAEAAADQAAAEACAEQADADADAAQAFAAACgDQACgCAAgGQAAgFgCgCQgCgDgFAAQgDAAgDADg");
	this.shape_67.setTransform(264.5,256.7,1.1,1.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AARAWIAAgiIgOAaIgBABIgBAAIgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBgBAAAAIgOgaIAAAiIgGAAIAAgrIAGAAIABABIAPAZIAAAEIABgCIABgCIAOgZIABgBIAGAAIAAArg");
	this.shape_68.setTransform(259.7,256,1.1,1.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgBAEIAAgBIgBgBIgBgCIABgBIABgCIABAAIABAAIACABIABABIAAABIgBADIgDABg");
	this.shape_69.setTransform(254.2,258,1.1,1.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgJAPIAAgdIATAAIAAAEIgNAAIAAAZg");
	this.shape_70.setTransform(252.6,256.7,1.1,1.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgCAHIAAAAIAAgBIABgCIABgBIAAgBIAAgCIAAAAIgBAAIgBAAIgBgDIABgDIACgBIACABIABABIABABIAAACIgBACIgBADIgDAFg");
	this.shape_71.setTransform(248.6,258.4,1.1,1.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgIAWIAOgUIgEACIgDAAIgFgBIgDgCIgDgDIgBgFIABgGIADgEIAEgDIAFgBIAGABQADABABACIADAEIABAGIAAAEIgBADIgCACIgLASIgBABIgCABgAgCgPIgDABIgCADIAAADQAAAFACACQACABADAAIAEAAIACgCIACgCIABgEIgBgDIgCgDIgCgBIgEgBg");
	this.shape_72.setTransform(245.9,256,1.1,1.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgJAWIAAgFIAJAAIAAgeIgHAGIgBABIgCAAIAAgBIgCgDIAMgLIAEAAIAAAmIAJAAIAAAFg");
	this.shape_73.setTransform(242.1,256,1.1,1.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AAFAWIAAgLIgSAAIgBgBIAAgBIgBgDIAUgbIAFAAIAAAbIAGAAIAAAEIgBABIgFAAIAAALgAgJAGIAOAAIAAgUg");
	this.shape_74.setTransform(238.2,256,1.1,1.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgEAVIgEgBIgFgDIACgCIABgBIACAAIAEACIAEABIADgBIADgCIACgDIAAgEIAAgEIgCgCIgDgBIgDgBIgHABIgDgBIADgUIAUAAIAAADIgBACIgDAAIgMAAIgCALIAFAAIAGABIAEACIADAEIABAFIgBAGIgEAFIgFADIgFABg");
	this.shape_75.setTransform(234.4,256,1.1,1.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgJAWIAAgFIAJAAIAAgeIgIAGIAAABIgCAAIAAgBIgCgDIAMgLIAFAAIAAAmIAIAAIAAAFg");
	this.shape_76.setTransform(230.6,256,1.1,1.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgJAWIAAgFIAJAAIAAgcIAAgCIgIAGIgBABIgBAAIAAgBIgCgDIAMgLIAFAAIAAAmIAIAAIAAAFg");
	this.shape_77.setTransform(226.8,256,1.1,1.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAAALIAAgBIAEgJIABgBIgBAAIgEgJIAAgBIACgBIAIALIAAABIgIALgAgIALIgBgBIAFgJIABgBIgBAAIgFgJIABgBIACgBIAHALIAAABIgHALg");
	this.shape_78.setTransform(221.8,256.6,1.1,1.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgCADIgBgDIABgBIAAgBIACgBIAAAAIACAAIACACIAAADIgBABIgBABIgCAAg");
	this.shape_79.setTransform(219.6,258,1.1,1.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgMAWIAAgrIAZAAIAAAGIgTAAIAAAlg");
	this.shape_80.setTransform(217.9,256,1.1,1.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgBAEIgBgBIgBgBIAAgDIACgCIABAAIACAAIACACIAAADIgBABIgBABIgCAAg");
	this.shape_81.setTransform(215.1,258,1.1,1.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AALAWIAAgUIgVAAIAAAUIgHAAIAAgrIAHAAIAAATIAVAAIAAgTIAHAAIAAArg");
	this.shape_82.setTransform(211.8,256,1.1,1.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgBAEIgBgBIgBgBIAAgDIACgCIABAAIABAAIACABIAAABIABABIgBADIgDABg");
	this.shape_83.setTransform(208.5,258,1.1,1.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgFAVQgEgCgDgDQgCgDgBgEIgCgJQAAgEACgEIADgHQADgDAEgCQAEgBAEAAQAFAAADABIAHAFIgDACIgBABIAAAAIgCgBIgBgBIgEgBIgEAAIgFABIgEACIgEAGIgBAGQAAAEABADQACADACACIAEADIAFABIADAAIAGgCIABgBIABAAIABAAIADACQgDADgDACQgEACgFAAQgEAAgEgBg");
	this.shape_84.setTransform(205.6,256,1.1,1.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AALAWIAAgdIAAgDIAAgDIgBACIgBACIgTAeIgCABIgFAAIAAgrIAHAAIAAAgIgBADIACgEIAUgeIACgBIAEAAIAAArg");
	this.shape_85.setTransform(199.1,256,1.1,1.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AARAbIAAgLIghAAIAAAJIgBABIgBABIgEAAIAAgQIAFAAIACgBIABgDIADgLIACgWIAZAAIAAAlIAHAAIAAAOIgBABIgBABgAgGAAIgCAHIgCAEIAUAAIAAggIgNAAg");
	this.shape_86.setTransform(193.9,256.6,1.1,1.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AALAWIAAgUIgVAAIAAAUIgHAAIAAgrIAHAAIAAATIAVAAIAAgTIAGAAIAAArg");
	this.shape_87.setTransform(188.8,256,1.1,1.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AAQAWIgCgBIgBgBIgDgKIgSAAIgEAKIgBABIgBABIgFAAIARgrIAFAAIARArgAAAgNIAAACIgHAQIAPAAIgHgQIgBgDg");
	this.shape_88.setTransform(184.1,256,1.1,1.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AAMAWIgCgBIgLgRQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAAAgBAAIgCgBIgFAAIAAAUIgGAAIAAgrIAGAAIAAATIAFAAIACgBIABgBIAKgPIABgBIACgBIAFAAIgNASQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAABIADACIAMATg");
	this.shape_89.setTransform(179.9,256,1.1,1.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AAAABIAAgBIAHgLIACABIABABIAAABIgFAIIgBAAIABABIAFAIIAAABIgBABIgCABgAgIABIAAgBIAHgLIABABIABABIAAABIgFAIIAAAAIAAABIAFAIIAAABIgBABIgBABg");
	this.shape_90.setTransform(175.9,256.6,1.1,1.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgIAVIgGgFQgDgDgCgEIgBgJIABgIQACgEADgDQACgDAEgCQAEgBAEAAQAFAAAEABQAEACACADQADADACAEIABAIIgBAJQgCAEgDADIgGAFQgEABgFAAQgEAAgEgBgAgFgOIgFACQgCACgBAEQgBADAAADQAAAEABADQABACACADIAFADIAFABIAGgBQAEgBABgCQACgDABgCIABgHIgBgGQgBgEgCgCIgFgCIgGgBIgFABg");
	this.shape_91.setTransform(170.2,256,1.1,1.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgIAVIgHgFIgEgHIgBgJIABgIIAEgHQADgDAEgCQAEgBAEAAIAJABQADACADADQADADACAEIABAIIgBAJQgCAEgDADIgGAFIgJABQgEAAgEgBgAgFgOIgFACIgDAGIgBAGIABAHIADAFIAFADIAFABIAGgBIAFgDQACgDABgCIABgHIgBgGQgBgEgCgCIgFgCIgGgBIgFABg");
	this.shape_92.setTransform(164.9,256,1.1,1.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgIAVIgHgFIgEgHIgBgJIABgIIAEgHIAHgFQAFgBADAAQAFAAADABQAEACAEADQACADACAEIACAIIgCAJQgCAEgCADIgIAFQgDABgFAAQgDAAgFgBgAgFgOIgFACIgDAGIgBAGIABAHIADAFIAFADIAFABIAGgBIAFgDQACgDABgCIABgHIgBgGQgBgEgCgCIgFgCIgGgBIgFABg");
	this.shape_93.setTransform(159.6,256,1.1,1.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AAQAWIgCgBIgBgBIgDgKIgTAAIgDAKIgBABIgCABIgEAAIARgrIAFAAIARArgAAAgKIgHAQIAPAAIgHgQIAAgCIgBgDg");
	this.shape_94.setTransform(179.4,288.3,1.1,1.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgOAWIAAgrIAOAAIAGABIAEACIADAEIABAFIgBADQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAIgDADIgDABQAEAAADADQACACAAAEIgBAFIgDAEIgEADIgHABgAgIARIAIAAIAEgBIADgCIACgCIAAgDQAAgDgCgCQgCgCgFAAIgIAAgAgIgBIAHAAIAEgBIACgBIACgDIABgCQAAgEgCgCQgCgCgEAAIgIAAg");
	this.shape_95.setTransform(175.2,288.3,1.1,1.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AAQAWIgCgBIgBgBIgDgKIgTAAIgDAKIgBABIgCABIgEAAIARgrIAFAAIARArgAAAgKIgHAQIAPAAIgHgQIAAgCIgBgDg");
	this.shape_96.setTransform(170.7,288.3,1.1,1.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgOAWIAAgrIAOAAIAGABIAEADIAEAEIABAGIgBAFQgBACgDACIgEADIgGABIgIAAIAAAQgAgIABIAIAAIACgBIAEgBIACgDIAAgDIAAgEIgCgCIgDgCIgDgBIgIAAg");
	this.shape_97.setTransform(167,288.3,1.1,1.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgOAWIAAgrIAbAAIAAAFIgVAAIAAAOIAIAAIAHABQACAAACABQABABAAAAQABAAAAABQAAAAABABQAAAAAAABIABAFQAAADgCACIgCAEIgFADIgGABgAgIARIAIAAIADgBIAEgCQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAgBIABgDIgBgDQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAAAIgEgCIgDAAIgIAAg");
	this.shape_98.setTransform(162.9,288.3,1.1,1.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AAAAKIAAgHIAAgBIgCABIgFADIgBgCIAGgEIABAAIgHgDIABgCIAFADIACABIAAgBIAAgHIABAAIAAAIIACgBIAFgDIABACIgHADIACABIAFADIgBACIgFgDIgBAAIgBgBIAAAIg");
	this.shape_99.setTransform(157.6,286.8,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(296));

	// p4
	this.instance = new lib.p4();
	this.instance.parent = this;
	this.instance.setTransform(78,145);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(216).to({_off:false},0).to({x:88,alpha:1},7,cjs.Ease.get(1)).wait(65).to({alpha:0},7,cjs.Ease.get(1)).wait(1));

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ar3ZeMAAAgy7IXvAAMAAAAy7g");
	mask.setTransform(74,154);

	// p3
	this.instance_1 = new lib.p3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(56.4,150.3,1.2,1.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(144).to({_off:false},0).to({x:68.4,alpha:1},7,cjs.Ease.get(1)).wait(65).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(72));

	// p2
	this.instance_2 = new lib.p2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(56.4,150.3,1.2,1.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(72).to({_off:false},0).to({x:68.4,alpha:1},7,cjs.Ease.get(1)).wait(65).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(144));

	// p1
	this.instance_3 = new lib.p1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(56.4,150.3,1.2,1.2);
	this.instance_3.alpha = 0;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:68.4,alpha:1},7,cjs.Ease.get(1)).wait(65).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(216));

	// t4
	this.instance_4 = new lib.t4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(224.5,153.8,0.72,0.72);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(216).to({_off:false},0).to({scaleX:0.9,scaleY:0.9,y:153.1,alpha:1},7,cjs.Ease.get(1)).wait(65).to({scaleX:0.72,scaleY:0.72,y:153.8,alpha:0},7,cjs.Ease.get(1)).wait(1));

	// t3
	this.instance_5 = new lib.t3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(224.5,152.5,0.72,0.72,0,0,0,0.1,0.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(144).to({_off:false},0).to({regX:0,regY:0,scaleX:0.9,scaleY:0.9,y:151.4,alpha:1},7,cjs.Ease.get(1)).wait(65).to({regX:0.1,regY:0.1,scaleX:0.72,scaleY:0.72,y:152.5,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(72));

	// t2
	this.instance_6 = new lib.t2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(224.5,150.7,0.72,0.72);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(72).to({_off:false},0).to({scaleX:0.9,scaleY:0.9,y:149.1,alpha:1},7,cjs.Ease.get(1)).wait(65).to({scaleX:0.72,scaleY:0.72,y:150.7,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(144));

	// t1
	this.instance_7 = new lib.t1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(224.5,157.1,0.72,0.72,0,0,0,0.1,0.1);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:0,regY:0,scaleX:0.9,scaleY:0.9,alpha:1},7,cjs.Ease.get(1)).wait(65).to({regX:0.1,regY:0.1,scaleX:0.72,scaleY:0.72,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(216));

	// Слой 2
	this.instance_8 = new lib.Image_7();
	this.instance_8.parent = this;
	this.instance_8.setTransform(175,53,0.292,0.292);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("ApIBUQgrgnAZg4QAWgzBGgeQBOghB+ABQAcAAAaADIAgAFIANADIgSAgQgogLggAAQhAAAg0ASQhHAagLAyQgHAeAWAbQAdAiA9gDQATgBAlgNQAtgPAbgVIA/g3QAGgFAHgDIAMgDIAGgBIBFAAIAVBeIAshdIBLAAIAsBIIAghIIBFAAIg9CEIhHAAIgthMIgiBMIgsAAIAAAAIhRAAIgDgXIhLAAIgZAWIgwAAQg6AUhJAAQhqAAgugpgAjIA4IAsgBIgEglgAGIB2IAtgsIgthkIBEAAIATA2IA4g3IBNAAIiGCGIgEADQgEAEgDABIgQADgAD/BqIhvAAIA8iEIBwAAQA2AAATAaQAQAUgMAaQgLAYgdAQQgkAUg7AAIgDAAgADpBJIAUAAQAXAAARgGQAdgIAFgWQAJgfg2AAIgTAAg");
	this.shape_100.setTransform(224.3,34.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_100},{t:this.instance_8}]}).wait(296));

	// Слой 3
	this.instance_9 = new lib._300250Ресурс3();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-1,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(296));

	// Слой 1
	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#00A8E1").s().p("A3lTuMAAAgnbMAvLAAAMAAAAnbg");
	this.shape_101.setTransform(150,150,0.993,1.188);

	this.timeline.addTween(cjs.Tween.get(this.shape_101).wait(296));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(148,138,305,312.5);
// library properties:
lib.properties = {
	width: 300,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/300x300_atlas_.png", id:"300x300_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;