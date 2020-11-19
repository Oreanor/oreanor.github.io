(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"100pcx250_atlas_P_", frames: [[319,0,150,146],[0,0,317,121]]},
		{name:"100pcx250_atlas_NP_", frames: [[0,0,300,250],[0,252,300,250],[0,504,300,250]]}
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
	this.spriteSheet = ss["100pcx250_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["100pcx250_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["100pcx250_atlas_NP_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["100pcx250_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_7 = function() {
	this.spriteSheet = ss["100pcx250_atlas_P_"];
	this.gotoAndStop(1);
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
	this.shape.graphics.f("#FFFFFF").s().p("AAWAyIAAhAIgrBAIgYAAIAAhjIAYAAIAABAIArhAIAYAAIAABjg");
	this.shape.setTransform(23,34.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AASAyIAAgqIgkAAIAAAqIgYAAIAAhjIAYAAIAAAlIAkAAIAAglIAZAAIAABjg");
	this.shape_1.setTransform(12.2,34.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaArQgKgKABgRIAYAAQAAAHADAEQAEADAFAAQAGAAADgCQADgDAAgFQAAgFgDgDQgCgCgGAAIgEAAIAAgUIADAAQAFAAADgCQADgEAAgEQAAgEgDgDQgCgCgFAAQgEAAgDACQgDADgBAFIgYAAQABgOAJgKQAKgJAOAAQAPAAAKAHQAJAJAAAMQAAAIgEAFQgFAGgHACQAJADAEAFQAFAHAAAJQAAAOgKAJQgKAJgQAAQgRAAgKgKg");
	this.shape_2.setTransform(2.8,34.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAWAyIAAhAIgrBAIgYAAIAAhjIAYAAIAABAIArhAIAYAAIAABjg");
	this.shape_3.setTransform(-6.9,34.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAsAyIgggwIAAAwIgXAAIAAgwIghAwIgcAAIAkgzIgigwIAdAAIAeAuIAAguIAXAAIAAAuIAeguIAcAAIgiAwIAkAzg");
	this.shape_4.setTransform(-20,34.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AglAmQgPgQAAgWQAAgUAPgQQAQgQAVAAQAWAAAPAQQAQAPAAAVQAAAWgQAQQgPAPgWAAQgVAAgQgPgAgUgUQgIAIAAAMQAAANAIAJQAIAIAMAAQAMABAJgJQAIgKAAgMQAAgLgIgJQgIgJgNAAQgLAAgJAJg");
	this.shape_5.setTransform(36.2,12.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AglAyIAAhjIArAAQAMAAAIAHQAJAIAAALQgBAIgEAFQgFAGgGACQAJACAFAGQAFAGAAAIQAAAMgJAJQgIAJgRAAgAgNAdIAQAAQAGAAADgCQADgDAAgFQAAgEgDgDQgEgDgFAAIgQAAgAgNgKIAOAAQAFAAACgDQACgBABgFQAAgEgDgDQgCgCgFAAIgOAAg");
	this.shape_6.setTransform(26.2,12.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgLAyIAAhOIgYAAIAAgVIBHAAIAAAVIgYAAIAABOg");
	this.shape_7.setTransform(17.6,12.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgkAmQgPgPAAgXQAAgWAPgPQAPgPAXAAQASAAAOAKQANAJAFARIgbAAQgEgHgGgDQgFgDgJAAQgNAAgHAIQgIAJAAAMQAAANAIAJQAIAJAMgBQAIAAAGgDQAGgDAEgHIAbAAQgGARgNAJQgNAKgRAAQgXAAgQgPg");
	this.shape_8.setTransform(8.1,12.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgkAmQgPgQAAgVQAAgVAPgQQAQgQAVAAQAWAAAPAPQAOAQAAAVIAAAGIAAAFIhNAAQACAJAHAFQAHAFAJAAQAGABAHgDQAFgCAEgFIAbAAQgGAPgNAJQgNAIgQAAQgWAAgPgPgAgPgYQgIAGgDAIIA1AAQgCgJgHgFQgHgFgKAAQgIAAgIAFg");
	this.shape_9.setTransform(-3.5,12.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAPAyIAAgiIgOAAQgTAAgKgIQgKgHAAgWIAAgcIAYAAIAAAcQAAAKAEADQAEADAHAAIAOAAIAAgsIAYAAIAABjg");
	this.shape_10.setTransform(-14.1,12.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AglAnQgOgPAAgXQAAgWAOgQQAPgPAUAAQAKAAAIAEQAIAFAGAIIAAAAIAAgOIAWAAIAABjIgWAAIAAgOIAAAAQgGAJgJAEQgHADgKABQgUAAgPgOgAgTgUQgIAJAAAMQAAANAIAIQAIAIAMAAQAOAAAHgIQAIgIAAgOQAAgMgIgJQgHgIgOAAQgMAAgIAJg");
	this.shape_11.setTransform(-24.8,12.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAPAyIgjgwIAAAwIgYAAIAAhjIAYAAIAAAuIAjguIAcAAIgoAvIAqA0g");
	this.shape_12.setTransform(-35.4,12.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AASAyIAAgmIgdAmIgeAAIAegjQgLgCgIgIQgHgJAAgMQAAgMAJgLQAKgKARAAIArAAIAABjgAgKgYQgDADAAAHQAAAFADADQAEADAGAAIASAAIAAgZIgSAAQgGAAgEAEg");
	this.shape_13.setTransform(33.1,-9.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AglAnQgOgPAAgXQAAgWAOgQQAPgPAUAAQAKAAAIAEQAIAFAGAIIAAAAIAAgOIAWAAIAABjIgWAAIAAgOIAAAAQgGAJgJAEQgHADgKABQgUAAgPgOgAgTgUQgIAIAAANQAAANAIAIQAIAIAMAAQAOAAAHgIQAIgIAAgOQAAgMgIgJQgHgIgOAAQgMAAgIAJg");
	this.shape_14.setTransform(22.3,-9.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhBAyIAAhjIAYAAIAABOIAeAAIAAhOIAXAAIAABOIAeAAIAAhOIAYAAIAABjg");
	this.shape_15.setTransform(9.1,-9.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAPAyIAAgiIgOAAQgUAAgJgIQgKgHAAgWIAAgcIAYAAIAAAcQAAAKAEADQAEADAHAAIAOAAIAAgsIAYAAIAABjg");
	this.shape_16.setTransform(-3.3,-9.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AggBDIATgrIglhaIAbAAIAXBAIAYhAIAbAAIg5CFg");
	this.shape_17.setTransform(-13.1,-7.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAZAyIgZhCIgXBCIgbAAIAohjIAVAAIAoBjg");
	this.shape_18.setTransform(-23.5,-9.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgfBDIASgrIglhaIAcAAIAWBAIAXhAIAcAAIg5CFg");
	this.shape_19.setTransform(-32.1,-7.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgLANQAEAAADgDQAEgDAAgFIAAgCIgLAAIAAgYIAXAAIAAAXQAAAIgCAEQgCAEgCADIgHAFIgKACg");
	this.shape_20.setTransform(71.5,-26.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AASAyIAAgmIgdAmIgeAAIAegjQgMgCgHgIQgHgIAAgNQAAgNAKgKQAKgKAQAAIArAAIAABjgAgKgYQgDAEAAAGQAAAEADAEQAEADAGAAIASAAIAAgZIgSAAQgGAAgEAEg");
	this.shape_21.setTransform(63.8,-31.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAkAyIAAhIIgbBIIgSAAIgbhIIAABIIgYAAIAAhjIAjAAIAZBGIAahGIAjAAIAABjg");
	this.shape_22.setTransform(52.3,-31.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgkAmQgPgPAAgWQAAgVAPgQQAQgQAVAAQAWAAAPAPQAOAPAAAWIAAAGIAAAFIhNAAQACAJAHAFQAHAFAJAAQAGABAGgDQAGgCAEgFIAbAAQgGAOgNAKQgNAIgQAAQgWAAgPgPgAgPgYQgIAGgDAIIA1AAQgDgJgGgFQgIgFgJAAQgIAAgIAFg");
	this.shape_23.setTransform(39.5,-31.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgzBEIAAiEIAWAAIAAANQAFgHAIgFQAJgEAJAAQAWAAAOAPQAOAOAAAYQAAAVgNAPQgOAQgXAAQgIAAgIgDQgHgDgGgIIAAAsgAgVgkQgHAJgBANQABAOAHAHQAIAIANAAQAMAAAIgIQAIgHABgOQgBgNgIgJQgHgIgNAAQgMAAgJAIg");
	this.shape_24.setTransform(28,-29.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AglAyIAAhjIArAAQAMAAAJAHQAIAIAAALQgBAIgEAFQgEAGgHACQAJACAFAGQAFAFAAAJQAAAMgJAJQgIAJgQAAgAgNAdIAQAAQAGAAACgCQAEgEAAgEQAAgEgEgDQgDgDgFAAIgQAAgAgNgKIAOAAQAEAAAEgDQACgCAAgEQAAgFgCgCQgDgCgFAAIgOAAg");
	this.shape_25.setTransform(17.6,-31.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AASAyIAAgmIgdAmIgeAAIAegjQgMgCgHgIQgHgIAAgNQAAgNAKgKQAKgKAQAAIArAAIAABjgAgKgYQgDAEAAAGQAAAEADAEQAEADAGAAIASAAIAAgZIgSAAQgGAAgEAEg");
	this.shape_26.setTransform(3.5,-31.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAlAyIAAhIIgbBIIgTAAIgbhIIAABIIgXAAIAAhjIAiAAIAZBGIAZhGIAjAAIAABjg");
	this.shape_27.setTransform(-8.1,-31.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AglAmQgPgQAAgWQAAgUAPgQQAQgQAVAAQAWAAAPAQQAQAPAAAVQAAAWgQAQQgPAPgWAAQgVAAgQgPgAgUgUQgIAIAAAMQAAANAIAJQAIAIAMAAQAMABAJgJQAIgJAAgNQAAgMgIgIQgIgJgNAAQgLAAgJAJg");
	this.shape_28.setTransform(-20.9,-31.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AASAyIAAgqIgjAAIAAAqIgZAAIAAhjIAZAAIAAAlIAjAAIAAglIAZAAIAABjg");
	this.shape_29.setTransform(-31.9,-31.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AglAmQgPgQAAgWQAAgUAPgQQAPgQAWAAQAWAAAQAQQAPAPAAAVQAAAWgPAQQgQAPgWAAQgWAAgPgPgAgUgUQgIAIAAAMQAAANAIAJQAIAIAMAAQANABAIgJQAIgKAAgMQAAgLgIgJQgIgJgNAAQgMAAgIAJg");
	this.shape_30.setTransform(-42.8,-31.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAPAyIgjgwIAAAwIgYAAIAAhjIAYAAIAAAuIAiguIAdAAIgoAvIAqA0g");
	this.shape_31.setTransform(-53.6,-31.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgoA7QgQgLgIgSIAdAAQAGAIAJADQAJAEAKAAQAOAAAMgJQAMgJAEgQIg8AAIAAgWIA8AAQgFgRgLgIQgLgIgOgBQgLAAgKAFQgJAEgGAIIgcAAQAIgUAQgJQARgLAVAAQAcgBAUAVQATATAAAdQAAAegTAUQgUATgdAAQgVAAgQgKg");
	this.shape_32.setTransform(-66.1,-33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4, new cjs.Rectangle(-72.6,-39.9,145.4,79.9), null);


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


(lib.six = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgpApQgEgBgEgEQgDgEgCgFQgCgGAAgHQAAgMAEgJQADgKAFgIQAFgHAHgEQAIgGAIgBIACAIQgGABgFAEQgGADgEAFQgFAFgCAGQgDAGAAAGQABgDAFgCQAFgDAGAAQALAAAHAHQAGAFAAAMQAAAFgCAFQgBAFgDAEIgIAFQgGADgGAAQgFAAgGgDgAgpADQgEADgBAEIAAACIAAADIABAHQAAAEADADIAFAFQADABAEAAQAEAAADgBIAFgEQACgCABgDIABgHQAAgJgEgEQgEgEgIAAQgGAAgFACgAAcAcIAAgXIgVAAIAAgHIAVAAIAAgWIAIAAIAAAWIAVAAIAAAHIgVAAIAAAXg");
	this.shape.setTransform(5.7,4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.six, new cjs.Rectangle(0,0,11.4,8.7), null);


(lib.p4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._4();
	this.instance.parent = this;
	this.instance.setTransform(-55,-53,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p4, new cjs.Rectangle(-55,-53,135,131.4), null);


(lib.p3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._3();
	this.instance.parent = this;
	this.instance.setTransform(-180,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p3, new cjs.Rectangle(-180,-125,300,250), null);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(-117,-126);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2, new cjs.Rectangle(-117,-126,300,250), null);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(-210,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1, new cjs.Rectangle(-210,-125,300,250), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Image_7();
	this.instance.parent = this;
	this.instance.setTransform(-49.2,-2.1,0.292,0.292);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApIBUQgrgnAZg4QAWgzBGgeQBOghB+ABQAcAAAaADIAgAFIANADIgSAgQgogLggAAQhAAAg0ASQhHAagLAyQgHAeAWAbQAdAiA9gDQATgBAlgNQAtgPAbgVIA/g3QAGgFAHgDIAMgDIAGgBIBFAAIAVBeIAshdIBLAAIAsBIIAghIIBFAAIg9CEIhHAAIgthMIgiBMIgsAAIAAAAIhRAAIgDgXIhLAAIgZAWIgwAAQg6AUhJAAQhqAAgugpgAjIA4IAsgBIgEglgAGIB2IAtgsIgthkIBEAAIATA2IA4g3IBNAAIiGCGIgEADQgEAEgDABIgQADgAD/BqIhvAAIA8iEIBwAAQA2AAATAaQAQAUgMAaQgLAYgdAQQgkAUg7AAIgDAAgADpBJIAUAAQAXAAARgGQAdgIAFgWQAJgfg2AAIgTAAg");
	this.shape.setTransform(0,-20.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-61.2,-33.2,122.4,66.6), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A8E1").s().p("A3lTuMAAAgnbMAvLAAAMAAAAnbg");
	this.shape.setTransform(150,125,0.993,0.99);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,300,250), null);


(lib.text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t4
	this.instance = new lib.t4();
	this.instance.parent = this;
	this.instance.setTransform(0,1.8,0.8,0.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(216).to({_off:false},0).to({scaleX:1,scaleY:1,y:0.9,alpha:1},7,cjs.Ease.get(1)).wait(65).to({scaleX:0.8,scaleY:0.8,y:1.8,alpha:0},7,cjs.Ease.get(1)).wait(1));

	// t3
	this.instance_1 = new lib.t3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0.3,0.8,0.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(144).to({_off:false},0).to({scaleX:1,scaleY:1,y:-0.9,alpha:1},7,cjs.Ease.get(1)).wait(65).to({scaleX:0.8,scaleY:0.8,y:0.3,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(72));

	// t2
	this.instance_2 = new lib.t2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-1.8,0.8,0.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(72).to({_off:false},0).to({scaleX:1,scaleY:1,y:-3.5,alpha:1},7,cjs.Ease.get(1)).wait(65).to({scaleX:0.8,scaleY:0.8,y:-1.8,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(144));

	// t1
	this.instance_3 = new lib.t1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,5.3,0.8,0.8);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,y:5.4,alpha:1},7,cjs.Ease.get(1)).wait(65).to({scaleX:0.8,scaleY:0.8,y:5.3,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(216));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.2,-35.4,66.3,81.5);


(lib.pics2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// p4
	this.instance = new lib.p4();
	this.instance.parent = this;
	this.instance.setTransform(-22.5,0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(216).to({_off:false},0).to({x:-12.5,alpha:1},7,cjs.Ease.get(1)).wait(65).to({x:-2.5,alpha:0},7,cjs.Ease.get(1)).wait(1));

	// p3
	this.instance_1 = new lib.p3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(20,0);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(144).to({_off:false},0).to({x:30,alpha:1},7,cjs.Ease.get(1)).wait(65).to({x:40,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(72));

	// p2
	this.instance_2 = new lib.p2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-43,0);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(72).to({_off:false},0).to({x:-33,alpha:1},7,cjs.Ease.get(1)).wait(65).to({x:-23,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(144));

	// p1
	this.instance_3 = new lib.p1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(50,0);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:60,alpha:1},7,cjs.Ease.get(1)).wait(65).to({x:70,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(216));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-125,300,250);


(lib.pics = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArUTiMAAAgnDIWpAAMAAAAnDg");
	mask.setTransform(1.6,-1);

	// p4
	this.instance = new lib.p4();
	this.instance.parent = this;
	this.instance.setTransform(-10,0);
	this.instance.alpha = 0;
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(216).to({_off:false},0).to({x:-6,alpha:1},7,cjs.Ease.get(1)).wait(65).to({x:0,alpha:0},7,cjs.Ease.get(1)).wait(1));

	// p3
	this.instance_1 = new lib.p3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-10,0);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(144).to({_off:false},0).to({x:0,alpha:1},7,cjs.Ease.get(1)).wait(65).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(72));

	// p2
	this.instance_2 = new lib.p2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-10,0);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(72).to({_off:false},0).to({x:0,alpha:1},7,cjs.Ease.get(1)).wait(65).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(144));

	// p1
	this.instance_3 = new lib.p1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-10,0);
	this.instance_3.alpha = 0;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:0,alpha:1},7,cjs.Ease.get(1)).wait(65).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(216));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.9,-125,145,249);


(lib.legal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.six();
	this.instance.parent = this;
	this.instance.setTransform(5.9,-13.2,1,1,0,0,0,5.7,4.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(151).to({_off:false},0).to({alpha:1},5,cjs.Ease.get(1)).wait(60).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(67));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAVIgFgCIgDgEIgBgFIACgBIACAAIABABIACADQAAAAAAAAQAAABAAAAQAAAAAAAAQABAAAAABIACABIADABIAEgBIADgBIABgDIABgDIgBgDIgBgCIgDgCIgFgBIAAgDIAEAAIADgCIABgCIABgDIgBgDIgBgCIgCgCIgDAAIgCAAIgCACIgCACIgBACIgCABIgBAAIgDAAIABgFIADgEIAFgCIAEgBIAFABIAEACIADAEIABAEIgBADIgBAEIgDABIgDACQAEAAADADQABACAAAEIAAAGIgDADIgFADIgGABg");
	this.shape.setTransform(113.3,18.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFAVIgDgBIgFgDIACgCQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIAFACIAEABIACgBIAEgCIACgDIAAgEIAAgEIgCgCIgDgBIgDgBIgHABIgDgBIADgUIATAAIAAADIgBACIgCAAIgMAAIgCALIAFAAIAGABIAEACIADAEIABAFIgCAGIgDAFIgEADIgGABg");
	this.shape_1.setTransform(109.8,18.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAFAWIAAgMIgSAAIgBAAIAAgBIgBgDIAUgaIAFAAIAAAaIAGAAIAAAEIgBAAIgFAAIAAAMgAgJAGIAOAAIAAgUg");
	this.shape_2.setTransform(106.3,18.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgFAVIgFgFIgEgHIgBgJIABgJIAEgHQACgDADgBIAFgBQADAAADABQADABACADQADAEAAADQACAEAAAFQAAAGgCADQAAAEgDADIgFAFQgDABgDAAIgFgBgAgDgQIgDAEIgCAFIgBAHIABAIIACAGIADACIADABIAEgBIADgCIACgGIABgIIgBgHIgCgFIgDgEIgEgBg");
	this.shape_3.setTransform(102.9,18.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKAWIATgmIgWAAIgBgBIAAgDIAdAAIAAACIgBADIgRAiIgBACIgCABg");
	this.shape_4.setTransform(99.4,18.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgFAVIgFgFIgEgHIAAgJIAAgJIAEgHQACgDADgBIAFgBQAEAAACABQACABADADIADAHIABAJIgBAJQgBAGgCABIgFAFQgCABgEAAIgFgBgAgDgQQAAABAAAAQgBAAAAAAQgBABAAAAQgBABAAABIgCAFIAAAHIAAAIIACAGIADACIADABIADgBIAEgCIACgGIABgIIgBgHIgCgFQAAgBgBgBQAAAAgBgBQAAAAgBAAQAAAAgBgBIgDgBg");
	this.shape_5.setTransform(95.9,18.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgFAVIgFgDIgCgFIgBgGIABgGIADgGIAKgOIACgBIACgBIAEAAIgLAQIgBACIgBABIADgCIADAAIAFABIAEACIADADIABAGIgBAFIgEAFIgEADIgGABgAgDAAIgCACIgDADIAAADIAAAEIACACIADACIADABIAEgBIACgCIACgCIABgEIgBgEIgCgDIgCgBIgEAAg");
	this.shape_6.setTransform(92.5,18.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIAWIAMgRIACgDIgEACIgDAAIgFgBIgDgCIgDgDIgBgFIABgGIADgEIAEgDIAGgBIAFABIAEADIADAEIABAGIAAAEIgBADIgCACIgCADIgJAPIgBABIgCABgAgCgPIgDABIgCADIAAADQAAAFACACQACABADAAIADAAIAEgCIABgCIABgEIgBgDIgBgDIgEgBIgCgBg");
	this.shape_7.setTransform(88.9,18.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgKAWIARgiIACgEIgWAAIgBgBIAAgDIAdAAIAAADIgBACIgQAiIgBACIgDABg");
	this.shape_8.setTransform(85.5,18.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgKAWIATgmIgWAAIgBgBIAAgDIAdAAIAAACIgBADIgRAiIgBACIgCABg");
	this.shape_9.setTransform(82,18.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAFAWIAAgMIgSAAIgBAAIAAgBIgBgDIAUgaIAFAAIAAAaIAGAAIAAAEIgBAAIgFAAIAAAMgAgJAGIAOAAIAAgUg");
	this.shape_10.setTransform(78.4,18.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgFAVIgFgFIgEgHIgBgJIABgJIAEgHQACgDADgBIAFgBQADAAADABQADABACADQADAEAAADQACAEAAAFQAAAGgCADQAAAEgDADIgFAFQgDABgDAAIgFgBgAgDgQIgDAEIgCAFIgBAHIABAIIACAGIADACIADABIAEgBIADgCIACgGIABgIIgBgHIgCgFIgDgEIgEgBg");
	this.shape_11.setTransform(75,18.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgJAWIAAgFIAJAAIAAgeIgIAGIAAAAIgCAAIAAAAIgCgDIAMgKIAFAAIAAAlIAIAAIAAAFg");
	this.shape_12.setTransform(71.6,18.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AALAWIAAgUIgWAAIAAAUIgGAAIAAgqIAGAAIAAASIAWAAIAAgSIAGAAIAAAqg");
	this.shape_13.setTransform(66,18.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgNAWIAAgqIAMAAIAGAAIAGADIACAFIABAFIgBAFIgCADQgDADgDABIgGABIgGAAIAAAQgAgHAAIAGAAIAEAAIADgBIACgCIAAgEIAAgDIgCgDIgDgCIgEgBIgGAAg");
	this.shape_14.setTransform(62.1,18.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgMAWIAAgqIAZAAIAAAEIgTAAIAAAmg");
	this.shape_15.setTransform(58.7,18.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgIAVIgGgFQgDgDgCgEIgBgJIABgIQACgEADgDQADgDADgCQAEgBAEAAQAFAAAEABQAEADACACQADADACAEIABAIIgBAJQgCAEgDADIgGAFQgEABgFAAQgEAAgEgBgAgFgOIgFADQgCACgBADIgBAGIABAHQABADACACIAFAEIAFAAIAGAAQAEgCABgCQACgCABgDQABgDAAgEQAAgDgBgDQgBgDgCgCIgFgDIgGgCIgFACg");
	this.shape_16.setTransform(54.4,18.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgEAVIgEgBIgFgDIACgCIABgBIACAAIAEACIAEABIADgBIADgCIABgDIABgEIAAgEIgCgCIgDgBIgDgBIgHABIgEgBIAEgUIAUAAIAAADIgBACIgDAAIgMAAIgCALIAFAAIAGABIAEACQACACABACIABAFIgBAGIgEAFIgFADIgFABg");
	this.shape_17.setTransform(48.7,18.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgJAWIAAgFIAJAAIAAgeIgIAGIAAAAIgCAAIAAAAIgCgDIAMgKIAFAAIAAAlIAIAAIAAAFg");
	this.shape_18.setTransform(45.3,18.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgFAVIgFgFIgDgHIgBgJIABgJIADgHQACgDADgBQADgBACAAIAGABQADABACADIADAHIABAJIgBAJQgBAGgCABIgFAFIgGABQgCAAgDgBgAgDgQQAAABAAAAQgBAAAAAAQgBABAAAAQgBABAAABIgCAFIgBAHIABAIIACAGIADACIADABIAEgBIADgCIACgGIABgIIgBgHIgCgFQAAgBgBgBQAAAAgBgBQAAAAgBAAQAAAAAAgBIgEgBg");
	this.shape_19.setTransform(41.8,18.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgOAWIAAgCIABgBIAAgCIAQgRIACgCQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAIAAgEIAAgDIgCgCIgCgBIgDgBIgCABIgCABIgCACIgBACIgBACIgCAAIgDgBIACgFIADgEIAEgCIAFgBIAEABIAFACIACAEIABAFIAAAFIgCAEIgQARIAEgBIANAAIACABIAAABIAAAEg");
	this.shape_20.setTransform(38.3,18.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgJAWIAAgFIAJAAIAAgeIgIAGIAAAAIgCAAIAAAAIgCgDIAMgKIAFAAIAAAlIAIAAIAAAFg");
	this.shape_21.setTransform(34.9,18.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgEAVIgEgBIgDgBIgCgCIACgCIABgBIACAAIAEACIAEABIADgBIADgCIABgDIABgEIAAgEIgCgCIgDgBIgDgBIgHABIgEgBIAEgUIATAAIAAADIAAACIgDAAIgMAAIgCALIAFAAIAGABQACAAACACIADAEIABAFIgBAGIgEAFIgFADIgFABg");
	this.shape_22.setTransform(31.3,18.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAFAWIAAgMIgSAAIgBAAIgBgBIAAgDIAUgaIAFAAIAAAaIAGAAIAAADIAAABIgBAAIgFAAIAAAMgAgJAGIAOAAIAAgSIAAgCg");
	this.shape_23.setTransform(27.8,18.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgFAVQgEgDgBgCIgDgHIgCgJIACgJIADgHQACgDADgBQACgBADAAIAGABQADABACADIAEAHIABAJIgBAJQgCAGgCABIgFAFIgGABQgDAAgCgBgAgDgQIgDAEIgCAFIgBAHIABAIIACAGIADACIADABIAEgBIADgCIACgGIAAgIIAAgHIgCgFQgBgBAAAAQAAgBAAAAQgBgBAAAAQgBAAAAgBIgEgBg");
	this.shape_24.setTransform(24.4,18.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgJAWIAQgiIACgEIgWAAIgBgBIAAgDIAcAAIAAADIAAACIgRAiIgBACIgCABg");
	this.shape_25.setTransform(21,18.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgKAWIATgmIgWAAIgBgBIAAgDIAdAAIAAACIgBADIgRAiIgBACIgCABg");
	this.shape_26.setTransform(17.5,18.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AALAWIAAgUIgVAAIAAAUIgHAAIAAgqIAHAAIAAASIAVAAIAAgSIAHAAIAAAqg");
	this.shape_27.setTransform(11.9,18.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AALAWIAAgUIgVAAIAAAUIgHAAIAAgqIAHAAIAAASIAVAAIAAgSIAGAAIAAAqg");
	this.shape_28.setTransform(7.3,18.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AALAWIAAgjIgBADIgBABIgTAeIgCABIgFAAIAAgqIAHAAIAAAfIgBADIACgFIATgcIABgBIACAAIAEAAIAAAqg");
	this.shape_29.setTransform(2.7,18.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgJAWIAAgFIAJAAIAAgeIgHAGIgBABIgCAAIAAgBIgCgDIAMgKIAEAAIAAAlIAJAAIAAAFg");
	this.shape_30.setTransform(108.9,10.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgFAVIgFgFIgEgHIAAgJIAAgJIAEgGQACgEADgBQADgBACAAIAGABQACABADAEIADAGIABAJIgBAJQgBAGgCABIgFAFIgGABQgCAAgDgBgAgDgPQAAAAAAAAQgBAAAAABQgBAAAAAAQgBABAAABIgCAFIgBAHIABAIIACAGIADACIADABIADgBIAEgCIACgGIABgIIgBgHIgCgFQAAgBgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAIgDgCg");
	this.shape_31.setTransform(105.4,10.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgFAVIgFgFQgCgBgBgGQgCgDAAgGQAAgFACgEQABgFACgBQACgEADgBIAFgBQADAAADABQADABACAEQADADAAADQACAEAAAFQAAAGgCADQAAAEgDADIgFAFQgDABgDAAIgFgBgAgDgPIgDADIgCAFIgBAHIABAIIACAGIADACIADABIAEgBIADgCIACgGIABgIIgBgHIgCgFIgDgDIgEgCg");
	this.shape_32.setTransform(101.9,10.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgJAWIAAgFIAJAAIAAgeIgIAGIAAABIgCAAIAAgBIgCgDIAMgKIAFAAIAAAlIAIAAIAAAFg");
	this.shape_33.setTransform(98.4,10.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgEAPIgDgDIgEgFIgBgHIABgFQABgDADgCIAEgEIAFgBIAGABIAEADIgBACIgBABIgBAAIgCgBIgFgBIgCAAIgEADIgBADIgBAEIABAFIABADIAEACIACABIADAAIACgBIACgBIABgBIABABIABACIgCACIgCACIgHABg");
	this.shape_34.setTransform(93.8,10.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAIAPIAAgWIgBACIgBABIgCADIgLAPIAAABIgCAAIgDAAIAAgdIAGAAIAAAUIgBACIABgCIABgBIACgDIALgPIABgBIABAAIADAAIAAAdg");
	this.shape_35.setTransform(90.5,10.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgCAbIAAgKQgDAAgDgCIgGgDQgCgCgBgDIgBgGIABgFQABgDACgCIAGgDQADgCADAAIAAgMIAFAAIAAAMQADAAADACQADAAACADIAEAFIABAFIgBAGIgEAFQgCADgDAAQgDACgDAAIAAAKgAACAMIAFgBIADgCIACgDIABgFIgBgEIgCgDIgDgCIgFgBgAgKgGQgCADAAAEQAAAFACADQADADAFAAIAAgVQgFAAgDADg");
	this.shape_36.setTransform(86.7,10.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgFAPIgFgEIgDgFQgBgBAAgFIABgGIADgEIAFgEIAFgBIAGABQAEACABACQABABABADIABAGIgBAGQgBAEgBABQgBACgEACIgGABgAgFgHQgDADAAAEQAAAFADADQABADAEAAQAEAAACgDQADgCAAgGQAAgFgDgCQgCgDgEAAQgEAAgBADg");
	this.shape_37.setTransform(82.9,10.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgCAHIAAgBIABgCIABgBIAAgBIAAgCIAAAAIgBAAIgBAAIgBgDIABgDIACgBIACABIABABIABABIAAACIgBACIgBADIgDAFg");
	this.shape_38.setTransform(78.9,12.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgFAVIgEgDQgBAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIgCgFQABgEACgCQABgCAEgBIgEgDIgCgHQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAIACgEIAEgCIAFgBIAGABIADACIADAEQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAIgCAHIgEADQAEABABACQADACAAAEIgBAFQgBADgDABIgEADIgGABgAgCACQgBAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAABIgCACIgBADIABAEIABACIAEACIACAAIADAAIAEgCIABgCIABgEIgBgDIgCgCQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAIgDAAgAgCgQIgDACIgBACIgBACIABADIABADIADABIACABIADgBIADgBIABgDIABgDIgBgCIgBgCIgDgCIgDgBg");
	this.shape_39.setTransform(76.5,10.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgCADIgBgDIABgBIAAgBIACgBIAAAAIACAAIACACIAAADIgBABIgBABIgCAAg");
	this.shape_40.setTransform(72.5,12);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AANAUIAAgKIgYAAIAAAJIgBABIgBAAIgEAAIAAgOIACAAIACAAIACgCIABgDIACgDIABgHIABgKIASAAIAAAZIAGAAIAAAMIgBACIgBAAgAgCgHIgCAGIgDAHIAOAAIAAgVIgJAAg");
	this.shape_41.setTransform(69.9,11.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgCAHIAAAAIAAgBIAAgBIABgBIAAgBIABgBIAAgCIgBAAIgBAAIAAgCIgBgBIABgDIACgBIABABIACABIABADIAAACIgEAFIgBADg");
	this.shape_42.setTransform(65.9,12.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAIAWIAAgXIgBABIgBACIgCACIgLAQIAAABIgCABIgDAAIAAgeIAGAAIAAAVIgBABIABgCIABgBIACgDIALgOIABgCIABAAIADAAIAAAegAgCgNIgDgBIgCgCIAAgDIAAgBIABAAIADAAIAAACIABABIABACIADAAIACgCIABgBIAAgCIADAAIABAAIAAABIAAADIgCACIgDABIgEABg");
	this.shape_43.setTransform(63.5,10.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgHADIAAgEIAPAAIAAAEg");
	this.shape_44.setTransform(60.7,10.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgOAWIAAgCIABgBIAAgCIAOgNIAFgGIACgDIAAgEIgBgDIgCgCIgCgBIgCgBIgDABIgCABIgCACIAAACIgBACIgCAAIgEgBIACgFIADgEIAEgCIAFgBIAFABIAEACIACAEIABAFIAAAFIgCAEIgRARIAGgBIAMAAIACABIAAABIAAAEg");
	this.shape_45.setTransform(57.8,10.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAIAWIAAgXIgBABIgBACIgEAFIgJANIAAABIgCABIgDAAIAAgeIAGAAIAAAVIgBABIACgCIACgEIALgOIABgCIABAAIADAAIAAAegAgCgNIgDgBIgCgCIAAgDIAAgBIABAAIADAAIAAACIABABIABACIADAAIACgCIABgBIAAgCIADAAIABAAIAAABIAAADIgCACIgDABIgEABg");
	this.shape_46.setTransform(52.8,10.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAHAPIAAgUIABgCIgBACIgBABIgCADIgLAPIgBABIgBAAIgDAAIAAgdIAFAAIAAAWIABgCIABgBIAEgFIAJgNIAAgBIACAAIADAAIAAAdg");
	this.shape_47.setTransform(49.3,10.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAKAPIgDAAIgBgCIgGgJIgBgCIgCAAIgDAAIAAANIgGAAIAAgdIAGAAIAAANIACAAIADgBIABgBIAFgKIACgBIABAAIAFAAIgKANIgCABIADAAIACADIAHAMg");
	this.shape_48.setTransform(46.2,10.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgDAPIgFgDIgCgFIgBgHIABgFIACgFIAFgEIAFgBIAGABIAEADIgBACIgBABIgBAAIgBAAIgBgBIgFgBIgDAAIgCADIgCADIgBAEIABAFIACADIADACIACABIADAAIACgBIACgBIABgBIABABIABACIgCACIgDACIgGABg");
	this.shape_49.setTransform(43.1,10.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAHAPIAAgOIgNAAIAAAOIgGAAIAAgdIAGAAIAAAMIANAAIAAgMIAGAAIAAAdg");
	this.shape_50.setTransform(39.9,10.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAHAPIAAgTIABgBIAAgCIgBACIgBABIgCADIgLAPIgBABIgBAAIgDAAIAAgdIAGAAIAAATIgBABIAAACIABgCIABgBIACgDIALgPIABgBIABAAIADAAIAAAdg");
	this.shape_51.setTransform(36.5,10.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AASAUIAAgKIgpAAIAAgdIAGAAIAAAZIAMAAIAAgZIAFAAIAAAZIAMAAIAAgZIAGAAIAAAZIAGAAIAAAMIgBACIgCAAg");
	this.shape_52.setTransform(32.3,11.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgFAPIgFgEIgCgFQgCgCAAgEQAAgDACgDIACgEIAFgEIAFgBIAGABQAEACABACQACABABADIABAGIgBAGQgBAEgCABQgBACgEACIgGABgAgFgHQgDADAAAEQAAAFADADQABADAEAAQAFAAACgDQACgCAAgGQAAgFgCgCQgCgDgFAAQgEAAgBADg");
	this.shape_53.setTransform(27.8,10.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgOAWIAAgqIAOAAIAGAAIAEADIADAFIACAFIgCAFIgDAEQgCACgCABIgGABIgIAAIAAAQgAgIAAIAIAAIADAAIADgBIACgCIABgEIgBgEIgCgCIgDgCIgDAAIgIAAg");
	this.shape_54.setTransform(24.7,10.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAMAUIAAgKIgYAAIAAAJIAAABIgBAAIgEAAIAAgOIABAAIACAAIACgCIACgDIACgDIACgRIASAAIAAAZIAGAAIAAAMIgBACIgBAAgAgEgBIgBADIgCAEIANAAIAAgVIgIAAg");
	this.shape_55.setTransform(19.3,11.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgFAPIgDgCIgCgCIABgCIABgBIABABIACABIACABIADAAIACAAIACgBIACgCIAAgCQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQgBgCgDAAIgEAAIAAgDIAEAAIAEgBIACgDIgBgCIgBgBIgEgBIgFABIgBABIgCAAIAAgBIgCgCIAEgDIAGgBIAEABIAEACIACACIABADIAAACIgBACIgFADQADAAACACIABAEIgBAEIgCADIgEACIgEABg");
	this.shape_56.setTransform(16,10.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgEAPIgFgEIgCgFIgBgGIABgGIACgEIAFgEIAFgBIAFABIAEADIADAEIABAGIAAABIgCAAIgTAAIABAFIACADIADADIACAAIAEAAIACgBIACgBIABgBIABABIACACIgDACIgDACIgGABgAgEgIQgDACAAAEIAPAAIAAgEIgBgCIgDgCIgDgBQgCAAgDADg");
	this.shape_57.setTransform(13.2,10.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgFAPIgFgEQgCgBgBgEQAAgBAAgFIAAgGQABgDACgBIAFgEIAFgBIAGABQAEACABACQACABAAADIABAGQAAAFgBABQAAAEgCABQgBACgEACIgGABgAgFgHQgDADAAAEQAAAFADADQACADADAAQAEAAACgDQACgCAAgGQAAgFgCgCQgCgDgEAAQgDAAgCADg");
	this.shape_58.setTransform(9.9,10.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgNAVIAAgoIAEAAIACABIAAAEIAEgEIAFgCIAFABIADAEIACAEIABAHIgBAGIgCAEIgEAEIgFABIgFgBIgDgDIAAAOgAgEgOIgDADIAAAOIADACIAEABQAEAAABgDQADgCAAgFIgBgFIgCgEIgCgBIgDgBg");
	this.shape_59.setTransform(6.6,11.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAKAWIAAglIgUAAIAAAlIgGAAIAAgqIAhAAIAAAqg");
	this.shape_60.setTransform(2.6,10.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgCAHIgBAAIAAgBIABgBIABgBIAAgBIABgBIAAgCIgBAAIgBAAIgBgCIAAgBIABgDIACgBIABABIACABIABADIgBACIgBADIgDAFg");
	this.shape_61.setTransform(112.6,4.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgGAPIgDgBIgBgDIgBgDIABgEIADgDIAGgBIAHgBIAAgCIgBgFQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgDAAIgFADIgBAAIgBgBIgBgCIAGgEIAFgBIAFABIADACIACAEIABAFIAAASIgCAAIgCAAIgBgEIgCACIgDACIgFABgAAAACIgDABIgCACIgBACIABACIABACIADABIAEgBIACgCIABgBIAAgGg");
	this.shape_62.setTransform(110.3,2.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgLAPIAAgdIALAAIAEAAIAEACIACACIAAADIgBAEIgCACIgDABIAGACQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAIgBAEIgDADIgDACIgFAAgAgFALIAFAAQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBIAAgCIgBgBIgCgBIgDgBIgFAAgAgFgBIAFAAIACgBIACgBQAAAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAIAAgCIAAgCIgBgBIgCgBIgHAAg");
	this.shape_63.setTransform(107.5,2.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAJAPIgCAAIgBgCIgGgJIgBgCIgCAAIgDAAIAAANIgGAAIAAgdIAGAAIAAANIACAAIADgBIABgBIAFgKIACgBIABAAIAFAAIgKANIgCABIADAAIACADIAHAMg");
	this.shape_64.setTransform(104.5,2.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgDAPIgFgDIgCgFIgBgHIAAgFIADgFIAFgEIAFgBIAGABIAEADIgBACIgBABIgBAAIgBAAIgBgBIgCgBIgDAAIgDAAIgCADIgCADIgBAEIABAFIACADIACACIADABIADAAIACgBIACgBIABgBIABABIABACIgCACIgDACIgGABg");
	this.shape_65.setTransform(101.4,2.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgFAPIgFgEIgDgFIgBgGIABgGIADgEIAFgEIAFgBIAGABIAFAEIADAEIABAGIgBAGIgDAFIgFAEIgGABgAgGgHQgCAEAAADQAAAEACAEQADADADAAQAFAAACgDQACgCAAgGQAAgFgCgCQgCgDgFAAQgDAAgDADg");
	this.shape_66.setTransform(98.2,2.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AARAWIAAgiIgOAaIgBABIgBAAIgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBgBAAAAIgOgaIAAAiIgGAAIAAgrIAGAAIABABIAPAZIAAAEIABgCIABgCIAOgZIABgBIAGAAIAAArg");
	this.shape_67.setTransform(93.8,2.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgBAEIAAgBIgBgBIgBgCIABgBIABgCIABAAIABAAIACABIABABIAAABIgBADIgDABg");
	this.shape_68.setTransform(88.8,4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgJAPIAAgdIATAAIAAAEIgNAAIAAAZg");
	this.shape_69.setTransform(87.3,2.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgCAHIAAAAIAAgBIABgCIABgBIAAgBIAAgCIAAAAIgBAAIgBAAIgBgDIABgDIACgBIACABIABABIABABIAAACIgBACIgBADIgDAFg");
	this.shape_70.setTransform(83.7,4.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgIAWIAOgUIgEACIgDAAIgFgBIgDgCIgDgDIgBgFIABgGIADgEIAEgDIAFgBIAGABQADABABACIADAEIABAGIAAAEIgBADIgCACIgLASIgBABIgCABgAgCgPIgDABIgCADIAAADQAAAFACACQACABADAAIAEAAIACgCIACgCIABgEIgBgDIgCgDIgCgBIgEgBg");
	this.shape_71.setTransform(81.2,2.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgJAWIAAgFIAJAAIAAgeIgHAGIgBABIgCAAIAAgBIgCgDIAMgLIAEAAIAAAmIAJAAIAAAFg");
	this.shape_72.setTransform(77.8,2.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AAFAWIAAgLIgSAAIgBgBIAAgBIgBgDIAUgbIAFAAIAAAbIAGAAIAAAEIgBABIgFAAIAAALgAgJAGIAOAAIAAgUg");
	this.shape_73.setTransform(74.2,2.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgEAVIgEgBIgFgDIACgCIABgBIACAAIAEACIAEABIADgBIADgCIACgDIAAgEIAAgEIgCgCIgDgBIgDgBIgHABIgDgBIADgUIAUAAIAAADIgBACIgDAAIgMAAIgCALIAFAAIAGABIAEACIADAEIABAFIgBAGIgEAFIgFADIgFABg");
	this.shape_74.setTransform(70.8,2.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgJAWIAAgFIAJAAIAAgeIgIAGIAAABIgCAAIAAgBIgCgDIAMgLIAFAAIAAAmIAIAAIAAAFg");
	this.shape_75.setTransform(67.4,2.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgJAWIAAgFIAJAAIAAgcIAAgCIgIAGIgBABIgBAAIAAgBIgCgDIAMgLIAFAAIAAAmIAIAAIAAAFg");
	this.shape_76.setTransform(63.9,2.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAAALIAAgBIAEgJIABgBIgBAAIgEgJIAAgBIACgBIAIALIAAABIgIALgAgIALIgBgBIAFgJIABgBIgBAAIgFgJIABgBIACgBIAHALIAAABIgHALg");
	this.shape_77.setTransform(59.3,2.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgCADIgBgDIABgBIAAgBIACgBIAAAAIACAAIACACIAAADIgBABIgBABIgCAAg");
	this.shape_78.setTransform(57.3,4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgMAWIAAgrIAZAAIAAAGIgTAAIAAAlg");
	this.shape_79.setTransform(55.8,2.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgBAEIgBgBIgBgBIAAgDIACgCIABAAIACAAIACACIAAADIgBABIgBABIgCAAg");
	this.shape_80.setTransform(53.2,4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AALAWIAAgUIgVAAIAAAUIgHAAIAAgrIAHAAIAAATIAVAAIAAgTIAHAAIAAArg");
	this.shape_81.setTransform(50.2,2.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgBAEIgBgBIgBgBIAAgDIACgCIABAAIABAAIACABIAAABIABABIgBADIgDABg");
	this.shape_82.setTransform(47.2,4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgFAVQgEgCgDgDQgCgDgBgEIgCgJQAAgEACgEIADgHQADgDAEgCQAEgBAEAAQAFAAADABIAHAFIgDACIgBABIAAAAIgCgBIgBgBIgEgBIgEAAIgFABIgEACIgEAGIgBAGQAAAEABADQACADACACIAEADIAFABIADAAIAGgCIABgBIABAAIABAAIADACQgDADgDACQgEACgFAAQgEAAgEgBg");
	this.shape_83.setTransform(44.6,2.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AALAWIAAgdIAAgDIAAgDIgBACIgBACIgTAeIgCABIgFAAIAAgrIAHAAIAAAgIgBADIACgEIAUgeIACgBIAEAAIAAArg");
	this.shape_84.setTransform(38.7,2.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AARAbIAAgLIghAAIAAAJIgBABIgBABIgEAAIAAgQIAFAAIACgBIABgDIADgLIACgWIAZAAIAAAlIAHAAIAAAOIgBABIgBABgAgGAAIgCAHIgCAEIAUAAIAAggIgNAAg");
	this.shape_85.setTransform(34,2.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AALAWIAAgUIgVAAIAAAUIgHAAIAAgrIAHAAIAAATIAVAAIAAgTIAGAAIAAArg");
	this.shape_86.setTransform(29.4,2.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AAQAWIgCgBIgBgBIgDgKIgSAAIgEAKIgBABIgBABIgFAAIARgrIAFAAIARArgAAAgNIAAACIgHAQIAPAAIgHgQIgBgDg");
	this.shape_87.setTransform(25,2.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AAMAWIgCgBIgLgRQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAAAgBAAIgCgBIgFAAIAAAUIgGAAIAAgrIAGAAIAAATIAFAAIACgBIABgBIAKgPIABgBIACgBIAFAAIgNASQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAABIADACIAMATg");
	this.shape_88.setTransform(21.2,2.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AAAABIAAgBIAHgLIACABIABABIAAABIgFAIIgBAAIABABIAFAIIAAABIgBABIgCABgAgIABIAAgBIAHgLIABABIABABIAAABIgFAIIAAAAIAAABIAFAIIAAABIgBABIgBABg");
	this.shape_89.setTransform(17.6,2.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgIAVIgGgFQgDgDgCgEIgBgJIABgIQACgEADgDQACgDAEgCQAEgBAEAAQAFAAAEABQAEACACADQADADACAEIABAIIgBAJQgCAEgDADIgGAFQgEABgFAAQgEAAgEgBgAgFgOIgFACQgCACgBAEQgBADAAADQAAAEABADQABACACADIAFADIAFABIAGgBQAEgBABgCQACgDABgCIABgHIgBgGQgBgEgCgCIgFgCIgGgBIgFABg");
	this.shape_90.setTransform(12.4,2.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgIAVIgHgFIgEgHIgBgJIABgIIAEgHQADgDAEgCQAEgBAEAAIAJABQADACADADQADADACAEIABAIIgBAJQgCAEgDADIgGAFIgJABQgEAAgEgBgAgFgOIgFACIgDAGIgBAGIABAHIADAFIAFADIAFABIAGgBIAFgDQACgDABgCIABgHIgBgGQgBgEgCgCIgFgCIgGgBIgFABg");
	this.shape_91.setTransform(7.6,2.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgIAVIgHgFIgEgHIgBgJIABgIIAEgHIAHgFQAFgBADAAQAFAAADABQAEACAEADQACADACAEIACAIIgCAJQgCAEgCADIgIAFQgDABgFAAQgDAAgFgBgAgFgOIgFACIgDAGIgBAGIABAHIADAFIAFADIAFABIAGgBIAFgDQACgDABgCIABgHIgBgGQgBgEgCgCIgFgCIgGgBIgFABg");
	this.shape_92.setTransform(2.8,2.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AAQAWIgCgBIgBgBIgDgKIgTAAIgDAKIgBABIgCABIgEAAIARgrIAFAAIARArgAAAgKIgHAQIAPAAIgHgQIAAgCIgBgDg");
	this.shape_93.setTransform(20.7,27.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgOAWIAAgrIAOAAIAGABIAEACIADAEIABAFIgBADQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAIgDADIgDABQAEAAADADQACACAAAEIgBAFIgDAEIgEADIgHABgAgIARIAIAAIAEgBIADgCIACgCIAAgDQAAgDgCgCQgCgCgFAAIgIAAgAgIgBIAHAAIAEgBIACgBIACgDIABgCQAAgEgCgCQgCgCgEAAIgIAAg");
	this.shape_94.setTransform(16.9,27.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AAQAWIgCgBIgBgBIgDgKIgTAAIgDAKIgBABIgCABIgEAAIARgrIAFAAIARArgAAAgKIgHAQIAPAAIgHgQIAAgCIgBgDg");
	this.shape_95.setTransform(12.8,27.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgOAWIAAgrIAOAAIAGABIAEADIAEAEIABAGIgBAFQgBACgDACIgEADIgGABIgIAAIAAAQgAgIABIAIAAIACgBIAEgBIACgDIAAgDIAAgEIgCgCIgDgCIgDgBIgIAAg");
	this.shape_96.setTransform(9.5,27.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgOAWIAAgrIAbAAIAAAFIgVAAIAAAOIAIAAIAHABQACAAACABQABABAAAAQABAAAAABQAAAAABABQAAAAAAABIABAFQAAADgCACIgCAEIgFADIgGABgAgIARIAIAAIADgBIAEgCQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAgBIABgDIgBgDQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAAAIgEgCIgDAAIgIAAg");
	this.shape_97.setTransform(5.8,27.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AAAAKIAAgHIAAgBIgCABIgFADIgBgCIAGgEIABAAIgHgDIABgCIAFADIACABIAAgBIAAgHIABAAIAAAIIACgBIAFgDIABACIgHADIACABIAFADIgBACIgFgDIgBAAIgBgBIAAAIg");
	this.shape_98.setTransform(0.9,26.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(291));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,114.7,29.8);


// stage content:
(lib._100pcx250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop(); 
		stage.addEventListener("resize", res);
		
		var blue = this.blue;
		var legal = this.legal;
		var text = this.text;
		var logo = this.logo;
		var pics = this.pics;
		var pics2 = this.pics2;
		
		function res() {
			
			var wdt = stage.canvas.width;
			var hgt = stage.canvas.height;
			
			var sc = wdt/300;
			
			blue.x = 0;
			blue.y = 0;
			blue.scaleX = sc;
		
			if (wdt<500){
				pics.x = wdt/4;
				pics.y = hgt/2;
				
				pics2.y = 1000;	
		
				var xtext = wdt*0.75;
				
				text.scaleX = 1;
				text.scaleY = 1;
				text.x = xtext;
				text.y = 140;
				
				logo.scaleX = 1;
				logo.scaleY = 1;
				logo.x = xtext;
				logo.y = 50;
				
				legal.x = xtext;
				
			} else if (wdt<700){
				pics2.x = 150;
				pics2.y = hgt/2;
				
				pics.y = 1000;
				
				var xtext = 300 + (wdt-300)/2;
				
				text.scaleX = 1;
				text.scaleY = 1;
				text.x = xtext;
				text.y = 140;
				
				logo.scaleX = 1;		
				logo.scaleY = 1;
				logo.x = xtext;
				logo.y = 50;
				
				legal.x = xtext;
				
			} else if (wdt<1100){
				pics2.x = wdt/2;
				pics2.y = hgt/2;
				
				pics.y = 1000;
				
				var xlogo = (wdt/2 - 150)/2;
				
				var xtext = wdt/2 + 150 + xlogo;
				
				text.scaleX = 1.2;
				text.scaleY = 1.2;
				text.x = xtext;
				text.y = hgt/2 - 20;
				
				logo.scaleX = 1.2;
				logo.scaleY = 1.2;
				logo.x = xlogo;
				logo.y = hgt/2;
				
				legal.x = xtext;
				
			} else {
				pics2.x = wdt/2;
				pics2.y = hgt/2;
				
				pics.y = 1000;
				
				var xlogo = (wdt/2 - 150)/2;
				
				var xtext = wdt/2 + 150 + xlogo;
				
				text.scaleX = 1.4;
				text.scaleY = 1.4;
				text.x = xtext;
				text.y = hgt/2 - 20;
				
				logo.scaleX = 1.4;
				logo.scaleY = 1.4;
				logo.x = xlogo;
				logo.y = hgt/2;
				
				legal.x = xtext;
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// logo
	this.logo = new lib.logo();
	this.logo.parent = this;
	this.logo.setTransform(221.3,55.1);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// legal
	this.legal = new lib.legal();
	this.legal.parent = this;
	this.legal.setTransform(222.5,230.1,1,1,0,0,0,57.4,14.9);

	this.timeline.addTween(cjs.Tween.get(this.legal).wait(1));

	// pics2
	this.pics2 = new lib.pics2();
	this.pics2.parent = this;
	this.pics2.setTransform(71,126.1);

	this.timeline.addTween(cjs.Tween.get(this.pics2).wait(1));

	// pics
	this.pics = new lib.pics();
	this.pics.parent = this;
	this.pics.setTransform(69.5,126.1,1,1,0,0,0,-1.5,0);

	this.timeline.addTween(cjs.Tween.get(this.pics).wait(1));

	// text
	this.text = new lib.text();
	this.text.parent = this;
	this.text.setTransform(223,147.1,1,1,0,0,0,-0.1,5.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// bg
	this.blue = new lib.bg();
	this.blue.parent = this;
	this.blue.setTransform(0.1,1.1,1,1,0,0,0,0.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.blue).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,125,449,251.1);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/100pcx250_atlas_P_.png", id:"100pcx250_atlas_P_"},
		{src:"images/100pcx250_atlas_NP_.jpg", id:"100pcx250_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;