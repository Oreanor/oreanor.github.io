(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"100pcx400_atlas_P_", frames: [[0,0,317,121],[0,123,254,32]]},
		{name:"100pcx400_atlas_NP_", frames: [[0,402,400,400],[402,0,400,400],[402,402,400,400],[0,0,400,400]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
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
	this.spriteSheet = ss["100pcx400_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["100pcx400_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["100pcx400_atlas_NP_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["100pcx400_atlas_NP_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Image_7 = function() {
	this.spriteSheet = ss["100pcx400_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.legal = function() {
	this.spriteSheet = ss["100pcx400_atlas_P_"];
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
	this.shape.graphics.f("#FFFFFF").s().p("Ag4ArQgGgCgEgDQgFgGgCgIQgDgIAAgLQAAgLACgIQADgJAFgIQAFgGAJgDQAIgEAKgBIAGABIAFABIAAALIgBAAIgEgBIgHgBQgNAAgHAHQgIAIgBAOIAKgFQAEgBAHAAIAJABQAFABAEADQAFADADAFQADAGAAAHQAAANgJAJQgJAJgNAAQgGgBgFgCgAg3gBIgJADIAAACIAAADQAAAKACAGQABAEAEAEQACADAEAAQADACADAAQAJAAAFgFQAFgFAAgLQAAgFgCgEQgCgDgDgCQgDgCgDAAIgHgBIgJABgAAjAqIAAggIgfAAIAAgJIAfAAIAAggIAKAAIAAAgIAgAAIAAAJIggAAIAAAgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.six, new cjs.Rectangle(-7.7,-4.5,15.5,9.1), null);


(lib.p4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvVTfIhjoYIi/pMIgFgBIggheIgliSIAsixIDOAAIAAgHIAsgPIAAgHIAeAAIAAgHIA6gFIgHsrIgSABIgLgXIAHhRIAHAAIAAgHIeagFIAJApIAIAEIgmBNIAAAPIAGACIgGAUIAAMEIA0AAIAdAOIAwAOIDZAIIA8DcIhaC4Ih1FoIgPA7IhKDNIgOA7IgWA7IgPA7IgWA7IgHAkIgPAtIAHDGIgRAFIg0AJIAKABg");
	mask.setTransform(202.3,194.3);

	// Слой_1
	this.instance = new lib._4();
	this.instance.parent = this;
	this.instance.setTransform(53,53,0.735,0.735);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p4, new cjs.Rectangle(67.7,68,269.2,252.6), null);


(lib.p3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib._3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p3, new cjs.Rectangle(0,0,400,400), null);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib._2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2, new cjs.Rectangle(0,0,400,400), null);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib._1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1, new cjs.Rectangle(0,0,400,400), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Image_7();
	this.instance.parent = this;
	this.instance.setTransform(-72,25,0.421,0.421);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApIBUQgrgnAZg4QAWgzBGgeQBOghB+ABQAcAAAaADIAgAFIANADIgSAgQgogLggAAQhAAAg0ASQhHAagLAyQgHAeAWAbQAdAiA9gDQATgBAlgNQAtgPAbgVIA/g3QAGgFAHgDIAMgDIAGgBIBFAAIAVBeIAshdIBLAAIAsBIIAghIIBFAAIg9CEIhHAAIgthMIgiBMIgsAAIAAAAIhRAAIgDgXIhLAAIgZAWIgwAAQg6AUhJAAQhqAAgugpgAjIA4IAsgBIgEglgAGIB2IAtgsIgthkIBEAAIATA2IA4g3IBNAAIiGCGIgEADQgEAEgDABIgQADgAD/BqIhvAAIA8iEIBwAAQA2AAATAaQAQAUgMAaQgLAYgdAQQgkAUg7AAIgDAAgADpBJIAUAAQAXAAARgGQAdgIAFgWQAJgfg2AAIgTAAg");
	this.shape.setTransform(-2.3,-1.4,1.44,1.44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-90.4,-19.4,176.3,95.4), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("EgXXAvFMAAAheJMAuuAAAMAAABeJg");
	this.shape.setTransform(300,200,2.006,0.664);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,600,400), null);


(lib.text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t4
	this.instance = new lib.t4();
	this.instance.parent = this;
	this.instance.setTransform(0,1.8,0.8,0.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(282).to({_off:false},0).to({scaleX:1,scaleY:1,y:0.9,alpha:1},7,cjs.Ease.get(1)).wait(72).to({scaleX:0.8,scaleY:0.8,y:1.8,alpha:0},7,cjs.Ease.get(1)).wait(1));

	// t3
	this.instance_1 = new lib.t3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0.3,0.8,0.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(189).to({_off:false},0).to({scaleX:1,scaleY:1,y:-0.9,alpha:1},7,cjs.Ease.get(1)).wait(86).to({scaleX:0.8,scaleY:0.8,y:0.3,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(79));

	// t2
	this.instance_2 = new lib.t2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-1.8,0.8,0.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(93).to({_off:false},0).to({scaleX:1,scaleY:1,y:-3.5,alpha:1},7,cjs.Ease.get(1)).wait(89).to({scaleX:0.8,scaleY:0.8,y:-1.8,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(172));

	// t1
	this.instance_3 = new lib.t1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,5.3,0.8,0.8);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,y:5.4,alpha:1},7,cjs.Ease.get(1)).wait(86).to({scaleX:0.8,scaleY:0.8,y:5.3,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(268));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.2,-35.4,66.3,81.5);


(lib.pics = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// p4
	this.instance = new lib.p4();
	this.instance.parent = this;
	this.instance.setTransform(-43.5,-59,1,1,0,0,0,156.5,141);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(273).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(83).to({alpha:0},6,cjs.Ease.get(1)).wait(1));

	// p3
	this.instance_1 = new lib.p3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-50,-64,1,1,0,0,0,150,136);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(182).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(83).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(91));

	// p2
	this.instance_2 = new lib.p2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-50,-64,1,1,0,0,0,150,136);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(91).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).to({_off:true},92).wait(180));

	// p1
	this.instance_3 = new lib.p1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-50,-64,1,1,0,0,0,150,136);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},6,cjs.Ease.get(1)).to({_off:true},92).wait(271));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-200,400,400);


(lib.legal_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.six();
	this.instance.parent = this;
	this.instance.setTransform(-113.1,-21.4,0.9,0.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(189).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(87).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(79));

	// Слой 2
	this.instance_1 = new lib.legal();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-127,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(369));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127,-12,254,32);


(lib.pics1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3bfQMAAAg+fMAu3AAAMAAAA+fg");

	// Слой 1
	this.instance = new lib.pics();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pics1, new cjs.Rectangle(-150,-200,300,400), null);


// stage content:
(lib._100pcx400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop(); 
		stage.addEventListener("resize", res);
		
		var bg = this.bg;
		var legal = this.legal;
		var text = this.text;
		var logo = this.logo;
		var pics = this.pics;
		var pics2 = this.pics2;
		
		
		function res() {
			var wdt = stage.canvas.width;
			var hgt = stage.canvas.height;
			
			var sc = wdt/600;
			
			bg.scaleX = sc;
			
			
			if (wdt<700){
				pics.x = 150;
				pics2.x = - 1000;
				
				let x1 = (wdt - 300)*0.5 + 300;
				
			
				text.scaleX = 1;
				text.scaleY = 1;
				text.x = x1;
				text.y = 130;
				
				logo.scaleX = 1;
				logo.scaleY = 1;
				logo.x = x1;
				logo.y = 270;
				
				legal.x = x1;
				legal.y = 370;
				
			} else if (wdt<1000){
				pics.x = -1000;
				pics2.x = 200;
				
				let x1 = (wdt - 400)*0.5 + 400;
				
				text.scaleX = 1;
				text.scaleY = 1;
				text.x = x1;
				text.y = 130;
				
				logo.scaleX = 1;
				logo.scaleY = 1;
				logo.x = x1;
				logo.y = 270;
				
				legal.x = x1;
				legal.y = 370;
			} else if (wdt<1300){
				pics.x = wdt/2;
				pics2.x = - 1000;
				
				let pole = wdt/2 - 150;
				
				let x1 = pole/2;
				let x2 = wdt/2 + 150 + pole/2;
				
				text.scaleX = 1.2;
				text.scaleY = 1.2;
				text.x = x1;
				text.y = 200;
				
				logo.scaleX = 1.2;
				logo.scaleY = 1.2;
				logo.x = x2;
				logo.y = hgt/2;
				
				legal.x = x2;
				legal.y = 370;
			} else {
				pics2.x = wdt/2;
				pics.x = - 1000;
				
				let pole = wdt/2 - 150;
				
				let x1 = pole/2;
				let x2 = wdt/2 + 150 + pole/2;
				
				text.scaleX = 1.2;
				text.scaleY = 1.2;
				text.x = x1;
				text.y = 200;
				
				logo.scaleX = 1.2;
				logo.scaleY = 1.2;
				logo.x = x2;
				logo.y = hgt/2;
				
				legal.x = x2;
				legal.y = 370;
			}
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.text = new lib.text();
	this.text.parent = this;
	this.text.setTransform(450.6,144.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// pics2
	this.pics2 = new lib.pics();
	this.pics2.parent = this;
	this.pics2.setTransform(158,200);

	this.timeline.addTween(cjs.Tween.get(this.pics2).wait(1));

	// pics
	this.pics = new lib.pics1();
	this.pics.parent = this;
	this.pics.setTransform(150,200);

	this.timeline.addTween(cjs.Tween.get(this.pics).wait(1));

	// legal
	this.legal = new lib.legal_1();
	this.legal.parent = this;
	this.legal.setTransform(452.9,375.4);

	this.timeline.addTween(cjs.Tween.get(this.legal).wait(1));

	// logo
	this.logo = new lib.logo();
	this.logo.parent = this;
	this.logo.setTransform(446.8,274);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// bg
	this.bg = new lib.bg();
	this.bg.parent = this;
	this.bg.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(250,200,650.1,400.1);
// library properties:
lib.properties = {
	width: 600,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/100pcx400_atlas_P_.png", id:"100pcx400_atlas_P_"},
		{src:"images/100pcx400_atlas_NP_.jpg", id:"100pcx400_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;