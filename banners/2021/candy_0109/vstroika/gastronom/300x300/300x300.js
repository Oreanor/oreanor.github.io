(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x300_atlas_", frames: [[0,0,300,135],[0,137,300,135],[0,274,300,135],[0,411,300,135],[0,548,300,135]]}
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



(lib._4 = function() {
	this.spriteSheet = ss["300x300_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
	this.spriteSheet = ss["300x300_atlas_"];
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


(lib.t5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("AgIAzIAAgSIARAAIAAASgAgIAZIAAhLIARAAIAABLg");
	this.shape.setTransform(137.8,22.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A7E0").s().p("AAjAzIAAhLIgbBLIgPAAIgbhLIAABLIgTAAIAAhlIAZAAIAcBNIAchNIAaAAIAABlg");
	this.shape_1.setTransform(129.6,22.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00A7E0").s().p("AgaAzIAAhlIA1AAIAAATIgjAAIAAAXIAiAAIAAASIgiAAIAAAWIAjAAIAAATg");
	this.shape_2.setTransform(119.7,22.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00A7E0").s().p("AAWAzIAAhHIgsBHIgTAAIAAhlIATAAIAABHIAshHIATAAIAABlg");
	this.shape_3.setTransform(111,22.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00A7E0").s().p("AggAzIAAhlIAYAAQAjAAAAAbQAAANgLAGQARAFAAATQAAAfgnAAgAgNAgIAMAAQAPAAAAgMQAAgOgPAAIgMAAgAgNgLIAJAAQAMAAAAgKQAAgKgMAAIgJAAg");
	this.shape_4.setTransform(102.1,22.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00A7E0").s().p("AgIAzIAAhSIgTAAIAAgTIA3AAIAAATIgSAAIAABSg");
	this.shape_5.setTransform(95,22.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00A7E0").s().p("AgkAjQgNgQAAgTQAAgTANgPQAPgSAYAAQAQAAAMAIQANAIAGAPIgVAAQgKgNgQAAQgOAAgKAKQgJAKAAAOQAAAOAKAKQAKALANAAQAQAAAJgMIAWAAQgPAeggAAQgYAAgPgSg");
	this.shape_6.setTransform(86.8,22.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00A7E0").s().p("AghAzIAAhlIATAAIAAAnIAOAAQASABAIAJQAIAIAAANQAAAOgJAIQgKAJgPAAgAgOAgIAOAAQAPAAAAgMQAAgOgPAAIgOAAg");
	this.shape_7.setTransform(77.7,22.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00A7E0").s().p("AAcAzIgchKIgbBKIgVAAIAphlIAQAAIAnBlg");
	this.shape_8.setTransform(68.4,22.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00A7E0").s().p("AglAlQgQgPAAgWQAAgVAQgPQAPgQAWAAQAXAAAPAQQAQAPAAAVQAAAWgQAPQgPAQgXAAQgWAAgPgQgAgYgYQgKAKAAAOQAAAOAKALQAKAKAOAAQAPAAAKgLQAKgKAAgOQAAgOgKgKQgKgKgPAAQgOAAgKAKg");
	this.shape_9.setTransform(57.7,22.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00A7E0").s().p("AggAzIAAhlIAYAAQAjAAAAAbQgBAOgKAFQARAFAAATQAAAfgoAAgAgOAgIANAAQAPAAAAgMQAAgOgPAAIgNAAgAgOgLIAJAAQANAAAAgKQAAgKgNAAIgJAAg");
	this.shape_10.setTransform(48.2,22.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00A7E0").s().p("AglAlQgQgPAAgWQAAgVAQgPQAPgQAWAAQAXAAAPAQQAQAPAAAVQAAAWgQAPQgPAQgXAAQgWAAgPgQgAgYgYQgKAKAAAOQAAAOAKALQAKAKAOAAQAPAAAKgLQAKgKAAgOQAAgOgKgKQgKgKgPAAQgOAAgKAKg");
	this.shape_11.setTransform(38.1,22.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00A7E0").s().p("AAlA9IAAgUIhJAAIAAAUIgTAAIAAgmIAKAAIAmhTIAPAAIAmBTIAKAAIAAAmgAgYAXIAxAAIgZg4g");
	this.shape_12.setTransform(26.7,23.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00A7E0").s().p("AgTAzIAMgaIgnhLIAXAAIAZA2IAYg2IAVAAIguBlg");
	this.shape_13.setTransform(18.4,22.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00A7E0").s().p("AgkAjQgNgQAAgTQAAgTANgPQAPgSAYAAQAQAAAMAIQANAIAGAPIgVAAQgLgNgPAAQgOAAgKAKQgKAKAAAOQAAAOAKAKQALALANAAQAPAAAKgMIAVAAQgGANgMAIQgMAJgQAAQgYAAgPgSg");
	this.shape_14.setTransform(5,22.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00A7E0").s().p("AAdAzIgKgbIglAAIgKAbIgVAAIAqhlIAPAAIAqBlgAgLAGIAXAAIgMgdg");
	this.shape_15.setTransform(120.4,5.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00A7E0").s().p("AAjAzIAAhLIgbBLIgPAAIgbhLIAABLIgTAAIAAhlIAaAAIAbBNIAchNIAaAAIAABlg");
	this.shape_16.setTransform(109,5.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00A7E0").s().p("AglAlQgQgPAAgWQAAgVAQgQQAPgPAWAAQAXAAAPAPQAQAQAAAVQAAAWgQAPQgPAQgXAAQgWAAgPgQgAgYgYQgKAKAAAOQAAAOAKALQAKAKAOgBQAPAAAKgKQAKgKAAgOQAAgOgKgKQgKgKgPAAQgOAAgKAKg");
	this.shape_17.setTransform(96.9,5.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00A7E0").s().p("AAkA9IAAgTIhIAAIAAATIgTAAIAAgmIAKAAIAmhTIAPAAIAmBTIAKAAIAAAmgAgYAXIAxAAIgZg5g");
	this.shape_18.setTransform(85.5,6.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00A7E0").s().p("AgbAzIAAhlIA2AAIAAASIgjAAIAAAYIAiAAIAAARIgiAAIAAAXIAjAAIAAATg");
	this.shape_19.setTransform(73.1,5.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00A7E0").s().p("AgJAzIAAhTIgTAAIAAgSIA4AAIAAASIgTAAIAABTg");
	this.shape_20.setTransform(66.6,5.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00A7E0").s().p("AghAzIAAhlIATAAIAAAnIAOAAQASABAIAJQAIAIAAANQAAAOgKAIQgJAJgPAAgAgOAgIAOAAQAPAAAAgMQAAgOgPAAIgOAAg");
	this.shape_21.setTransform(60.4,5.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00A7E0").s().p("AggAzIAAhlIAYAAQAjAAAAAbQAAANgLAGQARAFAAATQAAAfgoAAgAgOAgIANAAQAPAAAAgMQAAgOgPAAIgNAAgAgOgLIAJAAQANAAAAgKQAAgLgNAAIgJAAg");
	this.shape_22.setTransform(52.3,5.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00A7E0").s().p("AglAlQgQgPAAgWQAAgVAQgQQAPgPAWAAQAXAAAPAPQAPAQAAAVQAAAWgPAPQgPAQgXAAQgWAAgPgQgAgYgYQgKAKAAAOQAAAOAKALQAKAKAOgBQAPAAAKgKQAKgKAAgOQAAgOgKgKQgKgKgPAAQgOAAgKAKg");
	this.shape_23.setTransform(42.3,5.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00A7E0").s().p("AgJAzIAAhTIgSAAIAAgSIA3AAIAAASIgTAAIAABTg");
	this.shape_24.setTransform(33.9,5.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00A7E0").s().p("AglAlQgQgPAAgWQAAgVAQgQQAPgPAWAAQAXAAAPAPQAPAQAAAVQAAAWgPAPQgPAQgXAAQgWAAgPgQgAgYgYQgKAKAAAOQAAAOAKALQAKAKAOgBQAPAAAKgKQAKgKAAgOQAAgOgKgKQgKgKgPAAQgOAAgKAKg");
	this.shape_25.setTransform(25.6,5.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00A7E0").s().p("AgYAzIAAhlIAxAAIAAASIgeAAIAABTg");
	this.shape_26.setTransform(17.3,5.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t5, new cjs.Rectangle(0,0,138.7,29.3), null);


(lib.t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("AAXAzIAAhHIgtBHIgSAAIAAhlIASAAIAABGIAthGIASAAIAABlg");
	this.shape.setTransform(135.7,22.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A7E0").s().p("AAOAzIgegtIAAAtIgTAAIAAhlIATAAIAAAsIAegsIAWAAIgkAyIAkAzg");
	this.shape_1.setTransform(126.7,22.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00A7E0").s().p("AgIAzIAAhTIgTAAIAAgSIA3AAIAAASIgSAAIAABTg");
	this.shape_2.setTransform(119.2,22.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00A7E0").s().p("AgkAjQgNgQAAgTQAAgTANgPQAPgSAYAAQAQAAAMAIQANAIAGAPIgVAAQgKgNgQAAQgOAAgKALQgJAKAAANQAAAPAKAKQAKAKANAAQAQAAAJgMIAWAAQgOAeghAAQgYAAgPgSg");
	this.shape_3.setTransform(111,22.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00A7E0").s().p("AAXAzIAAhHIgtBHIgTAAIAAhlIATAAIAABGIAthGIASAAIAABlg");
	this.shape_4.setTransform(100.5,22.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00A7E0").s().p("AARAzIAAgnIgRAAQgRAAgHgGQgKgHAAgRIAAggIATAAIAAAeQAAAIADAEQAEADAIAAIARAAIAAgtIASAAIAABlg");
	this.shape_5.setTransform(90.9,22.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00A7E0").s().p("AglAmQgQgPAAgXQAAgVAQgPQAQgQAVAAQAXAAAPAQQAQAPAAAVQAAAXgQAPQgPAPgXAAQgWAAgPgPgAgYgYQgKAKAAAOQAAAPAKAKQAKAKAOAAQAPAAAKgKQAKgKAAgPQAAgOgKgKQgKgJgPgBQgOABgKAJg");
	this.shape_6.setTransform(81,22.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00A7E0").s().p("AAWA/IAAhHIgsBHIgTAAIAAhkIATAAIAABGIAshGIATAAIAABkgAgPgwQgIgGAAgJIAPAAQABAIAHAAQAJAAAAgIIAQAAQgCAJgGAGQgHAFgKAAQgJAAgGgFg");
	this.shape_7.setTransform(67,21.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00A7E0").s().p("AglAmQgQgPAAgXQAAgVAQgPQAPgQAWAAQAXAAAPAQQAQAPAAAVQAAAXgQAPQgPAPgXAAQgWAAgPgPgAgYgYQgKAKAAAOQAAAPAKAKQAKAKAOAAQAPAAAKgKQAKgKAAgPQAAgOgKgKQgKgJgPgBQgOABgKAJg");
	this.shape_8.setTransform(56.1,22.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00A7E0").s().p("AASAzIAAgrIgkAAIAAArIgTAAIAAhlIATAAIAAApIAkAAIAAgpIATAAIAABlg");
	this.shape_9.setTransform(45.6,22.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00A7E0").s().p("AAWA/IAAhHIgsBHIgTAAIAAhkIATAAIAABGIAshGIAUAAIAABkgAgQgwQgHgGgBgJIAQAAQAAAIAIAAQAHAAACgIIAQAAQgBAJgHAGQgHAFgKAAQgJAAgHgFg");
	this.shape_10.setTransform(35.9,21.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00A7E0").s().p("AglAmQgQgPAAgXQAAgVAQgPQAQgQAVAAQAWAAAQAQQAQAPAAAVQAAAXgQAPQgPAPgXAAQgVAAgQgPgAgYgYQgKAKAAAOQAAAPAKAKQAKAKAOAAQAPAAAKgKQAKgKAAgPQAAgOgKgKQgKgJgPgBQgOABgKAJg");
	this.shape_11.setTransform(25,22.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00A7E0").s().p("AggAzIAAhlIAYAAQAjAAAAAbQAAANgLAGQARAFAAATQAAAfgoAAgAgNAhIAMAAQAPAAAAgOQAAgNgPABIgMAAgAgNgLIAJAAQAMAAAAgKQAAgLgMAAIgJAAg");
	this.shape_12.setTransform(15.4,22.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00A7E0").s().p("AAkA8IAAgTIhIAAIAAATIgTAAIAAglIAKAAIAmhSIAPAAIAmBSIAJAAIAAAlgAgYAXIAxAAIgZg4g");
	this.shape_13.setTransform(5.6,23.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00A7E0").s().p("AAdAzIgKgaIglAAIgLAaIgUAAIArhlIAOAAIAqBlgAgLAGIAXAAIgMgcg");
	this.shape_14.setTransform(99,5.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00A7E0").s().p("AAjAzIAAhLIgbBLIgPAAIgbhLIAABLIgTAAIAAhlIAZAAIAcBNIAdhNIAZAAIAABlg");
	this.shape_15.setTransform(87.6,5.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00A7E0").s().p("AgaAzIAAhlIA1AAIAAASIgiAAIAAAYIAhAAIAAARIghAAIAAAYIAiAAIAAASg");
	this.shape_16.setTransform(77.7,5.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00A7E0").s().p("AgIAzIAAhTIgTAAIAAgSIA3AAIAAASIgTAAIAABTg");
	this.shape_17.setTransform(71.2,5.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00A7E0").s().p("AgkAjQgNgQAAgTQAAgTANgPQAPgSAYAAQAQAAAMAIQANAIAGAPIgVAAQgKgNgQAAQgOAAgKALQgJAKAAANQAAAOAKALQAKAKANAAQAQAAAJgMIAWAAQgOAeghAAQgYAAgPgSg");
	this.shape_18.setTransform(63,5.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00A7E0").s().p("AAWAzIAAhHIgsBHIgSAAIAAhlIASAAIAABHIAshHIATAAIAABlg");
	this.shape_19.setTransform(52.5,5.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00A7E0").s().p("AgkAjQgNgQAAgTQAAgTANgPQAPgSAYAAQAQAAAMAIQANAIAGAPIgVAAQgKgNgQAAQgOAAgJALQgLAKAAANQAAAOALALQAKAKANAAQAQAAAJgMIAVAAQgNAegiAAQgXAAgPgSg");
	this.shape_20.setTransform(42.1,5.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4, new cjs.Rectangle(0,0,139.9,29.3), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("AAjAzIAAhMIgbBMIgPAAIgbhMIAABMIgTAAIAAhlIAZAAIAcBNIAdhNIAZAAIAABlg");
	this.shape.setTransform(118.2,23);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A7E0").s().p("AglAmQgQgQAAgWQAAgVAQgQQAQgPAVAAQAXAAAPAPQAQAQAAAVQAAAWgQAQQgPAPgXAAQgWAAgPgPgAgYgYQgKAKAAAOQAAAOAKALQAKAKAOAAQAPAAAKgLQAKgKAAgOQAAgOgKgKQgKgKgPAAQgOAAgKAKg");
	this.shape_1.setTransform(106,23);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00A7E0").s().p("AgfAzIAAhlIAcAAQAjAAAAAgQAAAMgHAHQgJALgTAAIgKAAIAAAngAgNgFIAMAAQAPAAAAgNQAAgOgPAAIgMAAg");
	this.shape_2.setTransform(96.7,23);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00A7E0").s().p("AAdAzIgLgaIgkAAIgLAaIgUAAIArhlIANAAIArBlgAgLAGIAXAAIgMgdg");
	this.shape_3.setTransform(87.5,23);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00A7E0").s().p("AASAzIAAhTIgkAAIAABTIgTAAIAAhlIBLAAIAABlg");
	this.shape_4.setTransform(77.7,23);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00A7E0").s().p("AgkAjQgNgPAAgUQAAgTANgPQAPgSAYAAQAQAAAMAIQANAIAGAPIgVAAQgKgNgQAAQgOAAgKALQgJAKAAANQAAAOAKAKQAKALANAAQAQAAAJgMIAWAAQgPAeggAAQgYAAgPgSg");
	this.shape_5.setTransform(64.5,23);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00A7E0").s().p("AAPAzIAAgoIgaAoIgWAAIAcgmQgMgBgIgJQgIgHAAgNQAAgMAHgIQAJgNAWAAIAdAAIAABlgAgOgRQAAAPASABIALAAIAAgfIgLAAQgSAAAAAPg");
	this.shape_6.setTransform(179.6,6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00A7E0").s().p("AAXAzIAAhHIgtBHIgTAAIAAhlIATAAIAABGIAthGIATAAIAABlg");
	this.shape_7.setTransform(170.6,6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00A7E0").s().p("AASAzIAAgrIgkAAIAAArIgTAAIAAhlIATAAIAAApIAkAAIAAgpIAUAAIAABlg");
	this.shape_8.setTransform(160.8,6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00A7E0").s().p("AgaAzIAAhlIA1AAIAAASIgiAAIAAAYIAhAAIAAARIghAAIAAAYIAiAAIAAASg");
	this.shape_9.setTransform(152.6,6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00A7E0").s().p("AAcAzIgchLIgbBLIgVAAIAphlIAPAAIAoBlg");
	this.shape_10.setTransform(144,6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00A7E0").s().p("AggAzIAAhlIAYAAQAjAAAAAbQAAAOgLAFQARAFAAATQAAAfgoAAgAgNAhIAMAAQAPAAAAgOQAAgNgPABIgMAAgAgNgLIAIAAQANAAAAgKQAAgLgNAAIgIAAg");
	this.shape_11.setTransform(135.3,6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00A7E0").s().p("AglAmQgQgPAAgXQAAgVAQgPQAPgQAWAAQAXAAAPAQQAQAPAAAVQAAAXgQAPQgPAPgXAAQgWAAgPgPgAgYgYQgKALAAANQAAAPAKAKQAKAKAOAAQAPAAAKgKQAKgKAAgPQAAgNgKgLQgKgJgPgBQgOABgKAJg");
	this.shape_12.setTransform(125.3,6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00A7E0").s().p("AgIAzIAAhTIgTAAIAAgSIA3AAIAAASIgTAAIAABTg");
	this.shape_13.setTransform(116.9,6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00A7E0").s().p("AglAmQgQgPAAgXQAAgVAQgPQAPgQAWAAQAXAAAPAQQAQAPAAAVQAAAXgQAPQgPAPgXAAQgWAAgPgPgAgYgYQgKALAAANQAAAPAKAKQAKAKAOAAQAPAAAKgKQAKgKAAgPQAAgNgKgLQgKgJgPgBQgOABgKAJg");
	this.shape_14.setTransform(108.6,6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00A7E0").s().p("AgYAzIAAhlIAxAAIAAASIgfAAIAABTg");
	this.shape_15.setTransform(100.3,6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00A7E0").s().p("AAWAzIAAhHIgsBHIgTAAIAAhlIATAAIAABGIAshGIATAAIAABlg");
	this.shape_16.setTransform(91.7,6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00A7E0").s().p("AggAzIAAhlIAdAAQAUAAAJAMQAGAIABAMQgBAMgGAHQgKALgTAAIgKAAIAAAngAgNgFIAMAAQAPAAAAgNQAAgOgPAAIgMAAg");
	this.shape_17.setTransform(83.1,6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00A7E0").s().p("AASAzIAAhTIgkAAIAABTIgSAAIAAhlIBJAAIAABlg");
	this.shape_18.setTransform(74.2,6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00A7E0").s().p("AAPAzIAAgoIAAAAIgaAoIgWAAIAcgmQgMgBgIgJQgIgHAAgNQAAgMAHgIQAJgNAWAAIAdAAIAABlgAgOgRQAAAPASABIALAAIAAgfIgLAAQgSAAAAAPg");
	this.shape_19.setTransform(62,6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00A7E0").s().p("AAXAzIAAhHIgsBHIgUAAIAAhlIAUAAIAABGIAshGIATAAIAABlg");
	this.shape_20.setTransform(53,6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00A7E0").s().p("AAYA8IAAgTIhCAAIAAhkIATAAIAABSIAkAAIAAhSIATAAIAABSIALAAIAAAlg");
	this.shape_21.setTransform(43.5,6.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00A7E0").s().p("AAOAzIgfgtIAAAtIgSAAIAAhlIASAAIAAAsIAfgsIAXAAIgmAyIAmAzg");
	this.shape_22.setTransform(34.3,6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00A7E0").s().p("AATAzIAAgrIglAAIAAArIgTAAIAAhlIATAAIAAApIAlAAIAAgpIATAAIAABlg");
	this.shape_23.setTransform(25,6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00A7E0").s().p("AgSAzIALgaIgnhLIAXAAIAaA1IAYg1IAUAAIguBlg");
	this.shape_24.setTransform(15.5,6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00A7E0").s().p("AgJA6IAAgPQgUAAgMgMQgNgNAAgSQAAgTANgMQAMgNAUAAIAAgNIASAAIAAANQAUAAANANQANAMAAATQAAASgNANQgNAMgUAAIAAAPgAAJgZIAAAyQAMAAAIgIQAHgHAAgKQAAgLgHgHQgHgHgLAAIgCAAgAgcgSQgHAHAAALQAAAKAHAHQAHAIAMAAIAAgyIgBAAQgLAAgHAHg");
	this.shape_25.setTransform(5.5,5.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(0,0,183,28.3), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("AATCSIAAgSIhEAAIAAASIgSAAIAAgkIAJAAIAkhOIAPAAIAjBOIAJAAIAAAkgAAJBuIgXg2IgYA2IAvAAgAiUB7QgLgGgHgMQgHgLABgOQgBgOAHgLQAHgMALgGQAMgHAOAAQAPAAALAHQAMAGAGAMQAGALABAOQgBAOgGALQgGAMgMAGQgLAHgPAAQgOAAgMgHgAiLA0QgHAEgFAHQgDAIgBAJQABAJADAHQAFAIAHAEQAHAFAKAAQAJAAAIgFQAHgEAEgIQAFgHAAgJQAAgJgFgIQgEgHgHgEQgIgFgJAAQgKAAgHAFgAENCAIAAhEIgrBEIgSAAIAAhgIASAAIAABDIArhDIASAAIAABggACzCAIgahIIgbBIIgTAAIAlhgIAQAAIAmBggAAvCAIAAhgIA0AAIAAARIgjAAIAAAWIAhAAIAAARIghAAIAAAWIAjAAIAAASgAjLCAIAAhIIgaBIIgPAAIgZhIIAABIIgSAAIAAhgIAYAAIAbBJIAbhJIAYAAIAABggAAYgdIAAgSIg/AAIAAhgIARAAIAABPIAjAAIAAhPIARAAIAABPIAMAAIAAAjgACngzQgLgHgIgLQgGgLAAgOQAAgOAGgMQAIgLAKgHQAMgHAOAAQAPAAALAHQAMAHAGALQAHAMAAAOQAAAOgHALQgGALgMAHQgLAGgPABQgOgBgLgGgACvh7QgGAEgFAIQgEAHAAAJQAAAJAEAIQAFAHAGAFQAIAEAJAAQAKAAAHgEQAIgFAEgHQAEgIABgJQgBgJgEgHQgEgIgIgEQgHgEgKAAQgJAAgIAEgAkrgzQgMgHgHgLQgGgLAAgOQAAgOAGgMQAHgLALgHQAMgHAOAAQAOAAAMAHQALAHAHALQAGAMABAOQgBAOgGALQgHALgLAHQgMAGgOABQgPgBgKgGgAkjh7QgHAEgFAIQgEAHAAAJQAAAJAEAIQAFAHAHAFQAIAEAJAAQAKAAAHgEQAHgFAFgHQAEgIAAgJQAAgJgEgHQgFgIgHgEQgHgEgKAAQgJAAgIAEgAIegvIAAhgIA0AAIAAARIgjAAIAAAXIAhAAIAAARIghAAIAAAWIAjAAIAAARgAH6gvIAAhgIASAAIAABggAGxgvIAAhgIASAAIAAAlIAOAAQAMAAAHAFQAHAEADAHQADAGAAAIQAAAJgEAGQgFAHgHAEQgGADgKAAgAHDhAIAOAAQAHAAADgDQAEgDAAgGQAAgGgEgDQgDgEgHAAIgOAAgAGNgvIAAgoIgjAAIAAAoIgSAAIAAhgIASAAIAAAnIAjAAIAAgnIASAAIAABggAE1gvIAAgoIgkAAIAAAoIgRAAIAAhgIARAAIAAAnIAkAAIAAgnIARAAIAABggABvgvIAAhDIgqBDIgSAAIAAhgIASAAIAABEIAqhEIASAAIAABggAhFgvIgJgZIgkAAIgKAZIgTAAIAohgIAOAAIAoBggAhVhZIgLgcIgLAcIAWAAgAjTgvIAAhgIAXAAIAHAAIAIACQAEABAFADQAEACADAFQADAFAAAHQAAAGgDAEIgEAGIgDADQAHACAFAHQADAGABAIQAAAHgEAHQgCAGgJAFQgIAEgQAAgAjBhAIAMAAIADAAIAFgCQADgBACgCQACgDAAgEIgBgFQgBgDgDgCQgEgDgGAAIgMAAgAjBhqIAIAAQAGAAADgCIAEgEIAAgEQAAgEgDgDQgCgCgCAAIgGgBIgIAAgAljgvIAAgoIgkAAIAAAoIgRAAIAAhgIARAAIAAAnIAkAAIAAgnIARAAIAABggAm7gvIAAgoIgkAAIAAAoIgRAAIAAhgIARAAIAAAnIAkAAIAAgnIARAAIAABggAoUgvIAAhDIgrBDIgSAAIAAhgIASAAIAABEIArhEIASAAIAABgg");
	this.shape.setTransform(59.4,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(0,1.4,118.7,29.2), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("AAbAvIgKgYIghAAIgKAYIgTAAIAnhdIANAAIAnBdgAgKAGIAVAAIgLgbg");
	this.shape.setTransform(124.1,20.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A7E0").s().p("AANAvIgcgpIAAApIgSAAIAAhdIASAAIAAApIAcgpIAVAAIgjAuIAjAvg");
	this.shape_1.setTransform(115.8,20.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00A7E0").s().p("AAVAvIAAhBIgpBBIgRAAIAAhdIARAAIAABBIAphBIARAAIAABdg");
	this.shape_2.setTransform(106.8,20.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00A7E0").s().p("AARAvIAAgnIghAAIAAAnIgSAAIAAhdIASAAIAAAmIAhAAIAAgmIASAAIAABdg");
	this.shape_3.setTransform(97.7,20.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00A7E0").s().p("AAWAvIgWghIgWAhIgUAAIAhgvIghguIAUAAIAWAhIAWghIAVAAIghAuIAhAvg");
	this.shape_4.setTransform(89.1,20.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00A7E0").s().p("AgYAvIAAhdIAxAAIAAARIggAAIAAAVIAfAAIAAAQIgfAAIAAAWIAgAAIAAARg");
	this.shape_5.setTransform(81.5,20.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00A7E0").s().p("AgIAvIAAhMIgRAAIAAgRIAzAAIAAARIgRAAIAABMg");
	this.shape_6.setTransform(75.4,20.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00A7E0").s().p("AAOAvIAAglIAAAAIgYAlIgVAAIAagjQgLgBgHgIQgHgGAAgMQAAgLAGgIQAJgMATAAIAcAAIAABdgAgNgPQAAAOARAAIAKAAIAAgcIgKAAQgRAAAAAOg");
	this.shape_7.setTransform(65.7,20.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00A7E0").s().p("AAbAvIgKgYIgiAAIgJAYIgTAAIAnhdIANAAIAnBdgAgKAGIAUAAIgKgbg");
	this.shape_8.setTransform(57.4,20.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00A7E0").s().p("AARAvIAAgnIghAAIAAAnIgSAAIAAhdIASAAIAAAmIAhAAIAAgmIASAAIAABdg");
	this.shape_9.setTransform(48.3,20.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00A7E0").s().p("AARAvIAAgnIghAAIAAAnIgSAAIAAhdIASAAIAAAmIAhAAIAAgmIASAAIAABdg");
	this.shape_10.setTransform(39.7,20.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00A7E0").s().p("AgiAjQgPgOAAgVQAAgTAPgPQAOgOAUAAQAVAAAPAOQAOAPAAATQAAAVgOAOQgPAOgVAAQgUAAgOgOgAgWgWQgJAJAAANQAAANAJAJQAJAKANAAQAOAAAJgKQAJgIAAgOQAAgNgJgJQgJgJgOAAQgNAAgJAJg");
	this.shape_11.setTransform(30,20.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00A7E0").s().p("AAXAvIgXghIgVAhIgVAAIAhgvIghguIAVAAIAVAhIAXghIAUAAIghAuIAhAvg");
	this.shape_12.setTransform(20.3,20.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00A7E0").s().p("AgSAvIALgYIgkhFIAWAAIAXAxIAXgxIATAAIgsBdg");
	this.shape_13.setTransform(11.5,20.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00A7E0").s().p("AANAvIgcgpIAAApIgSAAIAAhdIASAAIAAApIAcgpIAVAAIgjAuIAjAvg");
	this.shape_14.setTransform(3.4,20.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00A7E0").s().p("AAOAvIAAgkIgYAkIgVAAIAagjQgLgBgHgHQgHgHAAgMQAAgMAGgHQAJgMAUAAIAbAAIAABdgAgMgPQAAAOAQAAIAKAAIAAgcIgKAAQgQAAAAAOg");
	this.shape_15.setTransform(107.2,4.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00A7E0").s().p("AAbAvIgKgYIgiAAIgJAYIgTAAIAnhdIANAAIAnBdgAgKAGIAVAAIgLgbg");
	this.shape_16.setTransform(98.9,4.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00A7E0").s().p("AANAvIgcgpIAAApIgSAAIAAhdIASAAIAAApIAcgpIAVAAIgjAuIAjAvg");
	this.shape_17.setTransform(90.5,4.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00A7E0").s().p("AgiAgQgMgOAAgSQAAgSAMgOQAPgQAWAAQAOAAAMAHQAMAIAGAOIgUAAQgKgMgOAAQgNAAgJAJQgJAKAAAMQAAANAJAJQAJAKANAAQAPAAAIgLIAUAAQgNAcgeAAQgXAAgOgRg");
	this.shape_18.setTransform(81.3,4.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00A7E0").s().p("AARAvIAAgnIghAAIAAAnIgRAAIAAhdIARAAIAAAmIAhAAIAAgmIASAAIAABdg");
	this.shape_19.setTransform(72,4.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00A7E0").s().p("AAOAvIAAgkIgYAkIgVAAIAagjQgLgBgHgHQgHgHAAgMQAAgLAGgIQAJgMATAAIAcAAIAABdgAgNgPQAAAOARAAIAKAAIAAgcIgKAAQgRAAAAAOg");
	this.shape_20.setTransform(63.6,4.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00A7E0").s().p("AgeAvIAAhdIARAAIAAAkIANAAQAQAAAIAJQAHAHAAAMQAAANgIAIQgJAIgOAAgAgNAeIANAAQAOAAAAgMQAAgMgOAAIgNAAg");
	this.shape_21.setTransform(56.6,4.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00A7E0").s().p("AAaAvIgahFIgZBFIgTAAIAlhdIAPAAIAlBdg");
	this.shape_22.setTransform(48,4.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00A7E0").s().p("AAbAvIgKgYIghAAIgKAYIgTAAIAnhdIANAAIAnBdgAgKAGIAVAAIgLgbg");
	this.shape_23.setTransform(38.7,4.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00A7E0").s().p("AgIAvIAAhMIgRAAIAAgRIAzAAIAAARIgRAAIAABMg");
	this.shape_24.setTransform(31.8,4.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00A7E0").s().p("AAVAvIAAhBIgpBBIgSAAIAAhdIASAAIAABBIAphBIASAAIAABdg");
	this.shape_25.setTransform(24.4,4.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(0,0,128.8,25.6), null);


(lib.p5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p5, new cjs.Rectangle(0,0,300,135), null);


(lib.p4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p4, new cjs.Rectangle(0,0,300,135), null);


(lib.p3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p3, new cjs.Rectangle(0,0,300,135), null);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2, new cjs.Rectangle(0,0,300,135), null);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1, new cjs.Rectangle(0,0,300,135), null);


// stage content:
(lib._300x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3W3WMAutAAAMAAAAutMgutAAAg");
	this.shape.setTransform(150,150);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(306));

	// t5
	this.instance = new lib.t5();
	this.instance.parent = this;
	this.instance.setTransform(105.5,248.7,0.9,0.9,0,0,0,69.4,14.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(240).to({_off:false},0).to({scaleX:1,scaleY:1,x:105.6,y:248.6,alpha:1},7,cjs.Ease.get(1)).wait(51).to({scaleX:0.9,scaleY:0.9,x:105.5,y:248.7,alpha:0},7,cjs.Ease.get(1)).wait(1));

	// t4
	this.instance_1 = new lib.t4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(105.6,248.7,0.9,0.9,0,0,0,70,14.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(180).to({_off:false},0).to({regX:69.9,scaleX:1,scaleY:1,x:105.5,y:248.6,alpha:1},7,cjs.Ease.get(1)).wait(51).to({regX:70,scaleX:0.9,scaleY:0.9,x:105.6,y:248.7,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(60));

	// t3
	this.instance_2 = new lib.t3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(105.5,248.7,0.9,0.9,0,0,0,91.5,14.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(120).to({_off:false},0).to({scaleX:1,scaleY:1,y:248.6,alpha:1},7,cjs.Ease.get(1)).wait(51).to({scaleX:0.9,scaleY:0.9,y:248.7,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(120));

	// t2
	this.instance_3 = new lib.t2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(105.6,248.6,0.9,0.9,0,0,0,59.6,14);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},7,cjs.Ease.get(1)).wait(51).to({scaleX:0.9,scaleY:0.9,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(180));

	// t1
	this.instance_4 = new lib.t1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(105.5,248.6,0.9,0.9,0,0,0,64.4,12.8);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:64.3,scaleX:1,scaleY:1,alpha:1},7,cjs.Ease.get(1)).wait(51).to({regX:64.4,scaleX:0.9,scaleY:0.9,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(240));

	// 5.jpg
	this.instance_5 = new lib.p5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(160,137.5,1,1,0,0,0,150,67.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(240).to({_off:false},0).to({x:150,alpha:1},7,cjs.Ease.get(1)).wait(51).to({x:140,alpha:0},7,cjs.Ease.get(1)).wait(1));

	// 4.jpg
	this.instance_6 = new lib.p4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(160,137.5,1,1,0,0,0,150,67.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(180).to({_off:false},0).to({x:150,alpha:1},7,cjs.Ease.get(1)).wait(51).to({x:140,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(60));

	// 3.jpg
	this.instance_7 = new lib.p3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(160,137.5,1,1,0,0,0,150,67.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(120).to({_off:false},0).to({x:150,alpha:1},7,cjs.Ease.get(1)).wait(51).to({x:140,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(120));

	// 2.jpg
	this.instance_8 = new lib.p2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(160,137.5,1,1,0,0,0,150,67.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(60).to({_off:false},0).to({x:150,alpha:1},7,cjs.Ease.get(1)).wait(51).to({x:140,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(180));

	// 1.jpg
	this.instance_9 = new lib.p1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(160,137.5,1,1,0,0,0,150,67.5);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:150,alpha:1},7,cjs.Ease.get(1)).wait(51).to({x:140,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(240));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A7E0").s().p("Am7A/QgggdASgqQASgnA0gWQA8gZBfAAQAVAAATACIAZAEIALACIgOAZQgegJgZAAQgxAAgoAOQg1ATgJAmQgEAXAQAUQAWAaAugCQAPgBAcgJQAigMAUgQIAxgpIAJgGQAHgDAHAAIA0AAIAQBHIAhhGIA5AAIAhA2IAZg2IA0AAIguBjIg2AAIgig6IgaA6IghAAIAAABIg+AAIgCgSIg5AAIgTAQIgkAAQgrAQg4AAQhRAAgjgggAiXArIAhgBIgDgcgAEqBaIAhgiIgihLIA0AAIAOAoIArgpIA6AAIhlBlQgFAFgEABIgMADgADCBQIhVAAIAuhjIBVAAQAoAAAPATQAMAPgJAUQgJATgVALQgcAPgrAAIgDAAgACxA3IAPAAQARAAAOgEQAVgHAEgQQAGgXgoAAIgPAAg");
	this.shape_1.setTransform(154.7,35.1,1.1,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#737373").s().p("AgEATIgDgCIgDgEIgCgDIAEgCIACABIAAACIACACIACABIACABIAEgBIACgBIABgDIABgCIgBgDQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgDgCIgEAAIAAgCIAEgBIACgCIACgCIAAgCIAAgDIgCgCIgBgBIgDgBIgCABIgCABIgBACIgBACIgBACIgCAAIgDgBIACgFIADgDIADgCIAEAAIAEAAIAEACIADADIAAAEIAAADIgBADIgDACIgDABQAEAAACACQACACAAAEIgBAEIgCAFIgFACIgFAAg");
	this.shape_2.setTransform(294,286.6,1.06,1.06);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#737373").s().p("AgEATIgFgCIgCgBIABgDIACgBIABABIAEABIADABIACgBIADgCIACgCIAAgEIAAgDIgCgCIgCgBIgDAAIgGAAIgDAAIADgSIARAAIAAACIgBABIgCABIgLAAIgBAKIAEgBIAFABIAEADIADACIAAAFIgBAFIgDAFQgBACgDABIgFAAg");
	this.shape_3.setTransform(290.8,286.6,1.06,1.06);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#737373").s().p("AAEATIAAgKIgQAAIgBgBIAAgCIARgYIAFAAIAAAXIAFAAIAAAEIgBAAIgEAAIAAAKgAgIAFIAMAAIAAgPIABgCg");
	this.shape_4.setTransform(287.5,286.6,1.06,1.06);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#737373").s().p("AgFASQgCAAgCgEQgCgCgBgDIgBgJIABgIIADgGQACgDACAAIAFgBIAFABQADAAACADQACADABADIABAIIgBAJQgBADgCACQgCAEgDAAQgCABgDAAIgFgBgAgCgOIgDADIgCAEIgBAHIABAHIACAFIADACIACABIADgBIADgCIACgFIABgHIgBgHIgCgEIgDgDIgDgBg");
	this.shape_5.setTransform(284.2,286.6,1.06,1.06);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#737373").s().p("AgIATIAQggIgSAAIgCgBIAAgBIAAgDIAZAAIAAAEIgPAfIgBACIgCAAg");
	this.shape_6.setTransform(281,286.6,1.06,1.06);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#737373").s().p("AgEASQgDAAgCgEIgDgFIgBgJIABgIIADgGQACgDADAAIAEgBIAFABIAFADIADAGQABAEAAAEQAAAFgBAEIgDAFIgFAEIgFABQgCAAgCgBgAgDgOIgCADIgCAEIgBAHIABAHIACAFIACACIADABIADgBIADgCIACgFIAAgHIAAgHIgCgEIgDgDIgDgBg");
	this.shape_7.setTransform(277.7,286.6,1.06,1.06);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#737373").s().p("AgEATIgFgDIgCgFIgBgFIABgFIAEgFIAIgNIABgBIACAAIAEAAIgKAOIgBABIgBACIADgCIADgBIAEABIAEADIACACIABAFIgBAFIgDAEIgEADIgFAAgAgCAAIgDABIgCADIAAADIAAADIACADIACABIADABIADgBIADgBIABgDIABgDIgBgDIgBgDQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAAAgBAAIgDAAg");
	this.shape_8.setTransform(274.4,286.6,1.06,1.06);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#737373").s().p("AgHATIAMgSIgDACIgDABIgEgBIgEgCIgCgDIgBgEIABgFIADgEIAEgDIAEAAIAFAAIAEADIADAEIABAFIgBADIgBADIgDAFIgJANIgBABIgBAAgAgCgOIgCACIgCACIAAADQAAAEACACQABABADAAIADAAIACgCIACgCIAAgDIAAgDIgCgCIgCgCIgDAAg");
	this.shape_9.setTransform(271.1,286.6,1.06,1.06);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#737373").s().p("AgIATIAOgeIACgCIgTAAIgBgBIAAgBIAAgDIAZAAIAAAEIgPAfIgBACIgCAAg");
	this.shape_10.setTransform(267.9,286.6,1.06,1.06);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#737373").s().p("AgJATIARggIgSAAIgBgBIgBgBIAAgDIAZAAIAAAEIgPAfIgBACIgCAAg");
	this.shape_11.setTransform(264.6,286.6,1.06,1.06);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#737373").s().p("AAEATIAAgKIgPAAIgBAAIgBgBIAAgCIARgYIAEAAIAAAXIAHAAIAAADIgBABIgBAAIgFAAIAAAKgAgIAFIAMAAIAAgOIABgBIAAgCg");
	this.shape_12.setTransform(261.3,286.6,1.06,1.06);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#737373").s().p("AgEASQgDAAgCgEIgDgFIgBgJIABgIIADgGQACgDADAAIAEgBIAGABIAEADIADAGQABAEAAAEQAAAFgBAEIgDAFIgEAEIgGABQgCAAgCgBgAgCgOIgDADIgCAEIgBAHIABAHIACAFIADACIACABIADgBIADgCIACgFIAAgHIAAgHIgCgEIgDgDIgDgBg");
	this.shape_13.setTransform(258,286.6,1.06,1.06);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#737373").s().p("AgIATIAAgEIAIAAIAAgYIAAgCIgHAFIAAABIgBAAIgBgBIAAAAIgBgCIAKgKIAEAAIAAAhIAHAAIAAAEg");
	this.shape_14.setTransform(254.8,286.6,1.06,1.06);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#737373").s().p("AAKATIAAgRIgTAAIAAARIgGAAIAAglIAGAAIAAARIATAAIAAgRIAGAAIAAAlg");
	this.shape_15.setTransform(249.5,286.6,1.06,1.06);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#737373").s().p("AgMATIAAglIAMAAIAFABQACAAACACIADAEIABAFIgBAFIgDADQgCACgCAAIgFABIgGAAIAAAOgAgGABIAGAAIACgBIADAAIACgDIAAgDIAAgDIgCgDIgDgBIgCgBIgGAAg");
	this.shape_16.setTransform(245.8,286.6,1.06,1.06);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#737373").s().p("AgLATIAAglIAXAAIAAAEIgRAAIAAAhg");
	this.shape_17.setTransform(242.6,286.6,1.06,1.06);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#737373").s().p("AgHASIgGgEQgCgCgCgEQgBgEAAgEIABgHQACgFACgBQADgDADgBIAHgBIAIABQADABACADQADABACAFIABAHQAAAEgBAEQgCAEgDACIgFAEQgDABgFAAQgEAAgDgBgAgFgNIgDADIgDAEIgCAGIACAGQABADACABIADADIAFABIAGgBIADgDIADgEIABgGIgBgGIgDgEIgDgDIgGgBg");
	this.shape_18.setTransform(238.6,286.6,1.06,1.06);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#737373").s().p("AgEATIgFgCIgCgBIABgDIACgBIABABIACAAIACABIADABIACgBIADgCIACgCIAAgEIAAgDIgCgCIgCgBIgDAAIgGAAIgDAAIADgSIARAAIAAACIAAABIgDABIgLAAIgBAKIAEgBIAFABIAEADIADACIAAAFIgBAFIgDAFIgEADIgEAAg");
	this.shape_19.setTransform(233.3,286.6,1.06,1.06);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#737373").s().p("AgIATIAAgEIAIAAIAAgaIgHAFIAAABIgBAAIgBgBIgBgCIAKgKIAEAAIAAAhIAHAAIAAAEg");
	this.shape_20.setTransform(230.1,286.6,1.06,1.06);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#737373").s().p("AgEASQgDAAgCgEQgCgCgBgDIgBgJIABgIIADgGQACgDADAAIAEgBIAGABQACAAACADQACADABADIABAIIgBAJQgBADgCACQgCAEgCAAIgGABQgCAAgCgBgAgCgOIgDADIgCAEIgBAHIABAHIACAFIADACIACABIADgBIADgCIACgFIABgHIgBgHIgCgEIgDgDIgDgBg");
	this.shape_21.setTransform(226.7,286.6,1.06,1.06);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#737373").s().p("AgMATIAAgDIAMgNIAFgFIABgDIABgDIgBgCIgBgDIgCgBIgDAAIgBAAIgDABIgBACIgBACIgBACIgBAAIgDgBIABgEIADgEIAEgCIADAAIAFAAIAEACIACAEIABAEIgBAEIgBAEIgPAPIAFgBIALAAIABABIABABIAAADg");
	this.shape_22.setTransform(223.5,286.6,1.06,1.06);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#737373").s().p("AgIATIAAgEIAIAAIAAgYIAAgCIgGAFIgBABIAAAAIgBgBIAAAAIgDgCIALgKIAEAAIAAAhIAIAAIAAAEg");
	this.shape_23.setTransform(220.2,286.6,1.06,1.06);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#737373").s().p("AgEATIgFgCIgCgBIABgDIACgBIABABIAEABIADABIACgBIADgCIACgCIAAgEIAAgDIgCgCIgCgBIgDAAIgGAAIgDAAIADgSIARAAIAAACIgBABIgCABIgLAAIgBAKIAEgBIAFABIAEADIADACIAAAFIgBAFIgDAFQgBACgDABIgFAAg");
	this.shape_24.setTransform(216.9,286.6,1.06,1.06);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#737373").s().p("AAFATIAAgKIgQAAIgBAAIgBgBIAAgCIASgYIAEAAIAAAXIAGAAIAAAEIgBAAIgFAAIAAAKgAgIAFIANAAIAAgPIAAgCg");
	this.shape_25.setTransform(213.6,286.6,1.06,1.06);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#737373").s().p("AgFASQgCAAgCgEQgCgCgBgDIgBgJIABgIIADgGQACgDACAAIAFgBIAFABQADAAACADQACADABADIABAIIgBAJQgBADgCACQgCAEgDAAQgCABgDAAIgFgBgAgCgOIgDADIgCAEIgBAHIABAHIACAFIADACIACABIADgBIADgCIACgFIABgHIgBgHIgCgEIgDgDIgDgBg");
	this.shape_26.setTransform(210.4,286.6,1.06,1.06);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#737373").s().p("AgJATIARggIgTAAIgBgBIAAgBIAAgDIAZAAIAAAEIgPAfIgBACIgCAAg");
	this.shape_27.setTransform(207.1,286.6,1.06,1.06);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#737373").s().p("AgJATIARggIgTAAIgBgBIAAgBIAAgDIAZAAIAAACIAAACIgPAfIgBACIgCAAg");
	this.shape_28.setTransform(203.8,286.6,1.06,1.06);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#737373").s().p("AAKATIAAgRIgTAAIAAARIgGAAIAAglIAGAAIAAARIATAAIAAgRIAGAAIAAAlg");
	this.shape_29.setTransform(198.6,286.6,1.06,1.06);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#737373").s().p("AAKATIAAgRIgTAAIAAARIgGAAIAAglIAGAAIAAARIATAAIAAgRIAGAAIAAAlg");
	this.shape_30.setTransform(194.3,286.6,1.06,1.06);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#737373").s().p("AAKATIAAgcIABgDIgDAFIgRAaIgCAAIgDAAIAAglIAFAAIAAAcIgBADIABgDIASgaIABgBIACgBIADAAIAAAlg");
	this.shape_31.setTransform(189.9,286.6,1.06,1.06);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#737373").s().p("AgEATIgFgCIgCgEIgBgEQAAgEACgDQADgCADAAQgDAAgCgEQgBgCgBgCIABgFIACgDIAFgCIADAAIAFAAIADACIADADIABAFQAAACgCACQgCAEgDAAQAEAAACACQACADAAAEIgBAEIgDAEIgEACIgFAAgAgCABIgCACIgCACIAAAEIAAACQAAABAAAAQAAAAAAABQABAAAAAAQAAAAABAAIACACIACABIAEgBIACgCIABgCIABgCIgBgEIgCgCIgCgCIgDAAgAgCgPIgCACIgBACIAAADIAAACIABACIACABIACABIADgBIACgBIABgCIABgCIgBgDIgBgCIgCgCIgDAAg");
	this.shape_32.setTransform(184.7,286.6,1.06,1.06);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#737373").s().p("AgBADIgBAAIgBgBIAAgDIACgCIACAAIACABIAAABIABABIgBACIAAABIgCAAIgBAAg");
	this.shape_33.setTransform(181,288.3,1.06,1.06);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#737373").s().p("AALASIAAgJIgVAAIAAAJIgFAAIAAgMIABAAIACgBIACgCIABgCIACgDIACgPIAQAAIAAAWIAFAAIAAAMIgBABgAgDAAIgBACIgCAEIAMAAIAAgTIgHAAg");
	this.shape_34.setTransform(178.5,287.7,1.06,1.06);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#737373").s().p("AgCAGIAAgBIABgBIABgBIAAgCIAAgBIAAAAIgBAAIgBgBIAAgCIABgCIABgBIACAAIABABIAAACIAAADIgBACIgDAFg");
	this.shape_35.setTransform(174.7,288.7,1.06,1.06);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#737373").s().p("AAHATIAAgTIgCACIgLAQIAAABIgBAAIgEAAIAAgaIAGAAIAAARIgBABIAAABIABgBIABgBIALgQIACgBIADAAIAAAagAgCgLIgCgBQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAgDIAAgBIABAAIADAAIAAACIAAACIACABIACgBIABAAIABgCIAAgCIADAAIABAAIAAABIAAADIgCACIgCABIgEAAg");
	this.shape_36.setTransform(172.4,286.6,1.06,1.06);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#737373").s().p("AgFACIAAgDIALAAIAAADg");
	this.shape_37.setTransform(169.7,286.9,1.06,1.06);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#737373").s().p("AgMATIAAgCIABgCIALgMIAFgFIABgDIABgDIgBgCIgBgDIgCgBIgDAAIgCAAIgBABIgCACIgBACIgBACIgCAAIgCgBIABgEIADgEIAEgCIADAAIAFAAIAEACIACAEIABAEIAAAEIgCAEIgOAPIADgBIAMAAIACABIAAABIAAADg");
	this.shape_38.setTransform(167,286.6,1.06,1.06);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#737373").s().p("AAHATIAAgTIgCACIgLAQIAAABIgCAAIgDAAIAAgaIAFAAIAAATIABgBIABgBIALgQIACgBIADAAIAAAagAgCgLIgCgBQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAgDIAAgBIABAAIADAAIAAACIAAACIACABIACgBIABAAIABgCIAAgCIADAAIABAAIAAABIAAADIgCACIgCABIgEAAg");
	this.shape_39.setTransform(162.3,286.6,1.06,1.06);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#737373").s().p("AAGANIAAgRIABgBIAAgBIgCADIgLAPIgBABIgBAAIgDAAIAAgaIAFAAIAAAUIABgCIABgBIADgEIABgDIAHgIIAAgBIABgBIAEAAIAAAag");
	this.shape_40.setTransform(159.1,287.2,1.06,1.06);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#737373").s().p("AAIANIgCAAIgBgCIgFgIQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAIgCgBIgDAAIAAAMIgFAAIAAgaIAFAAIAAAMIADAAIACAAIABgCIAFgIIABgBIABgBIAEAAIgIANIgCAAIACAAIACACIAHALg");
	this.shape_41.setTransform(156.1,287.2,1.06,1.06);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#737373").s().p("AgDANIgDgDIgDgEIgBgGIABgFQAAgCADgCIADgDIAFgBIAFABIAEADIgCABIAAABIgBAAIgDgCIgDAAIgCABIgDABIgBADIAAAEIAAAEQAAABAAAAQAAAAAAABQABAAAAABQAAAAAAABIADABIACABIADgBIADgBIABAAIABAAIABABIgCACIgDACIgFABg");
	this.shape_42.setTransform(153.2,287.2,1.06,1.06);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#737373").s().p("AAGANIAAgMIgLAAIAAAMIgFAAIAAgaIAFAAIAAALIALAAIAAgLIAGAAIAAAag");
	this.shape_43.setTransform(150.2,287.2,1.06,1.06);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#737373").s().p("AAGANIAAgSIABgBIgBACIgBABIgBACIgCABIgIAMIAAABIgCAAIgDAAIAAgaIAGAAIAAATIgBABIABgCIABgBIABgCIACgCIABgDIAHgIIAAgBIABgBIAEAAIAAAag");
	this.shape_44.setTransform(147,287.2,1.06,1.06);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#737373").s().p("AAQASIAAgJIgkAAIAAgaIAFAAIAAAWIALAAIAAgWIAEAAIAAAWIALAAIAAgWIAFAAIAAAWIAFAAIAAAMIgBABg");
	this.shape_45.setTransform(143.1,287.7,1.06,1.06);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#737373").s().p("AgEANIgEgDIgDgEIgBgGIABgFIADgEIAEgDIAEgBIAFABIAEADIADAEIABAFIgBAGIgDAEIgEADIgFABgAgFgHQgCADAAAEQAAAFACADQACACADAAQAEAAACgCQACgDAAgFQAAgEgCgDQgCgCgEAAQgDAAgCACg");
	this.shape_46.setTransform(138.9,287.2,1.06,1.06);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#737373").s().p("AgMATIAAglIAMAAIAFABQADAAACACIACAEIABAFIgBAFIgCADIgFACIgFABIgGAAIAAAOgAgGABIAGAAIACgBIADAAIACgDIABgDIgBgDIgCgDIgDgBIgCgBIgGAAg");
	this.shape_47.setTransform(135.9,286.6,1.06,1.06);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#737373").s().p("AALASIAAgJIgVAAIAAAIIgBABIgEAAIAAgMIABAAIACgBIACgCIABgCIACgDIABgPIARAAIAAAWIAFAAIAAAMIgBABgAgDAAIgDAGIAMAAIAAgTIgIAAg");
	this.shape_48.setTransform(130.8,287.7,1.06,1.06);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#737373").s().p("AgFANIgEgEIABgBIABAAIABAAIACABIACAAIACABIACgBIACAAIABgCIAAgBQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgEgBIgDAAIAAgCIADAAQAAAAAAgBQABAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAQABAAAAAAQAAgBAAAAQAAgBAAgBIAAgBIgBgBIgCgBIgEAAIgEACIgBgBIgBgCIADgCIAFgBIAEAAIADACIACADIABACIgBAEIgCABIgCABIAEABQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABIgBADIgCACIgDACIgEABg");
	this.shape_49.setTransform(127.7,287.2,1.06,1.06);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#737373").s().p("AgDANIgFgDIgDgEIAAgGIAAgFIADgEIAEgDIAEgBIAFABIADACIADAEIABAFIAAABIgBAAIgRAAIABAEIABAEIADABIACABIADgBIACAAIACgBIABAAIABAAIACABIgDACIgDACIgGABgAgDgIIgDAGIANAAIAAgDIgCgDIgBgBIgEAAQgCAAgBABg");
	this.shape_50.setTransform(125.1,287.2,1.06,1.06);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#737373").s().p("AgFANIgDgDQgDgCAAgCIgBgGIABgFIADgEIADgDIAFgBIAFABIAFADIACAEIABAFIgBAGQgBACgBACIgFADIgFABgAgFgHQgCAEAAADQAAADACAFQADACACAAQADAAADgCQABgDAAgFQAAgEgBgDQgDgCgDAAQgCAAgDACg");
	this.shape_51.setTransform(121.9,287.2,1.06,1.06);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#737373").s().p("AgLASIAAgjIADAAQAAAAABAAQAAAAAAAAQAAABAAAAQABAAAAAAIAAADIAEgDIAEgBIAEABIAEACIABAFIABAFIgBAFIgCAFIgEACQgCACgCAAIgEgBIgDgDIAAAMgAgDgMQAAAAAAAAQgBAAAAABQgBAAAAABQgBAAAAABIAAAMIADACIADABQADAAACgDQACgCAAgFIAAgEIgCgDIgCgCIgCAAIgEABg");
	this.shape_52.setTransform(118.8,287.7,1.06,1.06);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#737373").s().p("AAJATIAAghIgRAAIAAAhIgGAAIAAglIAdAAIAAAlg");
	this.shape_53.setTransform(115.1,286.6,1.06,1.06);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#737373").s().p("AgCAGIAAgBIAAAAIABgBIABgBIAAgDIgBAAIgBAAIAAgBIgBgCIABgCIACgBIACAAIABABIAAADIAAACIgBACIgBADIgCACg");
	this.shape_54.setTransform(111,288.7,1.06,1.06);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#737373").s().p("AgFANIgDgBIgBgCIgBgDIABgEIADgCIAFgBIAHgBIAAgCQAAgBAAAAQAAgBgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAgBAAQgBAAAAAAIgCABIgCAAIgCABIgBABIgBgBIgBAAIgBgCIAFgDIAFgBIAEAAIADADIACADIABAEIAAAQIgDAAIgBAAIAAgBIgBgCIgEADIgEABgAAAACIgCABIgCABIgBADIAAABIABABIADABIACAAIABgBIACAAIACgCIAAgGg");
	this.shape_55.setTransform(108.8,287.2,1.06,1.06);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#737373").s().p("AgJANIAAgaIAJAAIAEABQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIACACIAAACIgBAEIgBABIgDABIAFABQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABIAAADIgDACIgDACIgEAAgAgFAKIAFAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABgBAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAIgBgDIAAgBIgCgBIgDAAIgFAAgAgFgBIAFAAIADgBIABgCIABgCIAAgBIgBgBIgCgBIgHAAg");
	this.shape_56.setTransform(106.2,287.2,1.06,1.06);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#737373").s().p("AAIANIgCAAIgBgCIgFgIQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAIgCgBIgDAAIAAAMIgFAAIAAgaIAFAAIAAAMIADAAIACAAIABgCIAFgIIABgBIABgBIAEAAIgIANIgCAAIACAAIACACIAHALg");
	this.shape_57.setTransform(103.4,287.2,1.06,1.06);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#737373").s().p("AgCANIgFgDIgCgEIgBgGIABgFQAAgCACgCIAFgDIAEgBIAFABIAEADIgCABIAAABIAAAAIgEgCIgDAAIgCABIgCABIgCADIgBAEIABAEQAAABAAAAQAAAAAAABQABAAAAABQAAAAABABIACABIACABIADgBIADgBIABAAIABAAIABABIgCACIgCACIgGABg");
	this.shape_58.setTransform(100.4,287.2,1.06,1.06);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#737373").s().p("AgFANIgDgDIgDgEIgBgGIABgFIADgEIADgDIAFgBIAFABIAEADIADAEIABAFIgBAGQAAACgDACIgEADIgFABgAgFgHQgCADAAAEQAAAFACADQACACADAAQAEAAACgCQACgDAAgFQAAgEgCgDQgCgCgEAAQgDAAgCACg");
	this.shape_59.setTransform(97.5,287.2,1.06,1.06);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#737373").s().p("AAQATIAAgdIgOAYIgCAAIgBgBIgNgXIAAAdIgFAAIAAglIAEAAIABAAIABABIANAZIABgDIANgWIACgBIAEAAIAAAlg");
	this.shape_60.setTransform(93.3,286.6,1.06,1.06);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#737373").s().p("AgBADIgBAAIAAgBIgBgCIABgBIAAgBIABgBIADAAIABABIAAABIAAABIAAACIAAABIgBAAIgCAAg");
	this.shape_61.setTransform(88.5,288.3,1.06,1.06);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#737373").s().p("AgIANIAAgaIARAAIAAAEIgMAAIAAAWg");
	this.shape_62.setTransform(87.2,287.2,1.06,1.06);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#737373").s().p("AgCAGIAAgBIAAAAIABgBIABgBIAAgDIgBAAIgBAAIAAgBIgBgCIABgCIACgBIACAAIABABIAAADIAAACIgBACIgBADIgCACg");
	this.shape_63.setTransform(83.8,288.7,1.06,1.06);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#737373").s().p("AgHATIANgSIgEACIgDABIgDgBIgEgCIgCgDIgBgEIABgFIACgEIAFgDIADAAIAGAAIADADIADAEIABAIIgCADIgLASIgBABIgBAAgAgCgOIgCACIgCACIAAADQAAAEACACQABABADAAIAEAAIACgCIACgCIAAgDIAAgDIgCgCIgCgCIgEAAg");
	this.shape_64.setTransform(81.4,286.6,1.06,1.06);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#737373").s().p("AgIATIAAgEIAIAAIAAgaIgGAFIgBABIgBAAIgBgBIgBgCIAKgKIAEAAIAAAhIAHAAIAAAEg");
	this.shape_65.setTransform(78.3,286.6,1.06,1.06);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#737373").s().p("AAFATIAAgKIgQAAIgBAAIgBgBIAAgCIARgYIAFAAIAAAXIAGAAIAAAEIgBAAIgFAAIAAAKgAgIAFIANAAIAAgPIAAgCg");
	this.shape_66.setTransform(74.9,286.6,1.06,1.06);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#737373").s().p("AgEATIgFgCIgCgBIABgDIACgBIABABIACAAIACABIADABIACgBIADgCIACgCIAAgEIAAgDIgCgCIgCgBIgDAAIgGAAIgDAAIADgSIARAAIAAACIAAABIgDABIgKAAIgCAKIAEgBIAFABIAEADIADACIAAAFIgBAFIgDAFIgEADIgEAAg");
	this.shape_67.setTransform(71.6,286.6,1.06,1.06);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#737373").s().p("AgIATIAAgEIAIAAIAAgaIgGAFIgBABIgBAAIgBgBIgCgCIALgKIAEAAIAAAhIAIAAIAAAEg");
	this.shape_68.setTransform(68.4,286.6,1.06,1.06);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#737373").s().p("AgIATIAAgEIAIAAIAAgaIgHAFIAAABIgBAAIgBgBIgBgCIAKgKIAEAAIAAAhIAHAAIAAAEg");
	this.shape_69.setTransform(65.1,286.6,1.06,1.06);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#737373").s().p("AAAAKIAAgBIAAgBIAEgHIAAgBIABAAIgBAAIgEgHIAAgBIAAgBIACgBIAHAKIAAAAIgHALgAgHAKIgBgBIABgBIAEgHIAAgBIABAAIgBAAIgEgHIgBgBIABgBIACgBIAGAKIAAAAIgGALg");
	this.shape_70.setTransform(60.9,287.1,1.06,1.06);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#737373").s().p("AAAADIgBAAIgBgBIAAgCIAAgBIABgBIABgBIABAAIABABIABABIAAABIAAACIgBABIgBAAIgBAAg");
	this.shape_71.setTransform(58.9,288.3,1.06,1.06);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#737373").s().p("AgKATIAAglIAVAAIAAAEIgQAAIAAAhg");
	this.shape_72.setTransform(57.5,286.6,1.06,1.06);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#737373").s().p("AAAADIgBAAIgBgBIAAgCIAAgBIABgBIABgBIABAAIABABIABABIAAABIAAACIgBABIgBAAIgBAAg");
	this.shape_73.setTransform(55.1,288.3,1.06,1.06);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#737373").s().p("AAKATIAAgRIgTAAIAAARIgGAAIAAglIAGAAIAAARIATAAIAAgRIAGAAIAAAlg");
	this.shape_74.setTransform(52.3,286.6,1.06,1.06);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#737373").s().p("AAAADIgCAAIAAgBIgBgCIABgBIAAgBIACgBIACAAIACACIAAADIgBABIgBAAIgCAAg");
	this.shape_75.setTransform(49.4,288.3,1.06,1.06);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#737373").s().p("AgEASIgGgEIgEgGQgBgEAAgEIABgHIAEgHIAGgDIAHgBIAHABIAFADIgBACIgBABIgBABIgBgBIgBgCIgDgBIgEAAIgFABIgEADIgCAEIgBAGIABAGQAAACACACIAEADIAFABIADAAIACAAIACgBIACgCIABAAIABAAIACACIgGAFQgDABgFAAQgDAAgDgBg");
	this.shape_76.setTransform(47,286.6,1.06,1.06);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#737373").s().p("AAKATIAAgfIgCAFIgRAaIgBAAIgFAAIAAglIAGAAIAAAaIAAACIAAADIABgDIARgaIABgBIACgBIAEAAIAAAlg");
	this.shape_77.setTransform(41.4,286.6,1.06,1.06);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#737373").s().p("AAPAYIAAgJIgdAAIAAAHIAAACIgFAAIAAgOIAEAAIACgBIABgCIACgFIABgFIABgUIAWAAIAAAhIAGAAIAAAMIAAACgAgDgHIgCAHIgCAGIgCAEIASAAIAAgcIgMAAg");
	this.shape_78.setTransform(37,287.1,1.06,1.06);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#737373").s().p("AAKATIAAgRIgTAAIAAARIgFAAIAAglIAFAAIAAARIATAAIAAgRIAFAAIAAAlg");
	this.shape_79.setTransform(32.6,286.6,1.06,1.06);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#737373").s().p("AAOATIgCAAIAAgBIgDgJIgQAAIgEAJIgBABIgBAAIgEAAIAPglIAFAAIAPAlgAAAgJIgGAOIANAAIgGgQIgBgCg");
	this.shape_80.setTransform(28.6,286.6,1.06,1.06);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#737373").s().p("AAKATIgBAAIgBgCIgJgNIgBgCIgCAAIgFAAIAAARIgFAAIAAglIAFAAIAAARIAEAAIABgBIABAAIABAAIABgBIAJgPIACAAIAEAAIgLAQIgDACIACAAIACADIALAQg");
	this.shape_81.setTransform(25,286.6,1.06,1.06);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#737373").s().p("AAAAAIAAAAIAGgKIACABIAAABIAAABIgDAHIgBAAIABABIADAHIAAABIAAABIgCABgAgIAAIAAAAIAHgKIABABIAAABIAAABIgDAHIAAAAIAAABIADAHIAAABIAAABIgBABg");
	this.shape_82.setTransform(21.6,287.1,1.06,1.06);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#737373").s().p("AgHASIgFgEQgDgCgCgEQgBgEAAgEIABgHQACgFADgBQACgDADgBIAHgBIAIABIAGAEIADAGIACAHQAAAEgCAEIgDAGIgGAEQgEABgEAAQgEAAgDgBgAgEgNIgFADIgCAEIgBAGIABAGIACAEIAFADIAEABIAGgBIADgDQADgBABgDIABgGIgBgGIgEgEIgDgDIgGgBg");
	this.shape_83.setTransform(16.7,286.6,1.06,1.06);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#737373").s().p("AgHASIgGgEIgEgGQgBgEAAgEIABgHQABgDADgDIAGgEIAHgBIAIABQADABADADIAEAGIABAHQAAAEgBAEIgEAGIgGAEIgIABIgHgBgAgFgNIgEADIgCAEIgBAGIABAGQAAACACACIAEADIAFABIAGgBIADgDQACgCABgCIABgGIgBgGIgDgEIgDgDIgGgBg");
	this.shape_84.setTransform(12.2,286.6,1.06,1.06);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#737373").s().p("AgHASIgFgEQgDgCgCgEQgBgEAAgEIABgHQACgFADgBQACgDADgBIAHgBIAIABIAGAEIADAGIACAHQAAAEgCAEIgDAGIgGAEQgEABgEAAQgEAAgDgBgAgEgNIgFADIgCAEIgBAGIABAGIACAEIAFADIAEABIAGgBIAEgDQACgCABgCIABgGIgBgGIgDgEIgEgDIgGgBg");
	this.shape_85.setTransform(7.6,286.6,1.06,1.06);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgUAoIAAhPIApAAIAAAPIgbAAIAAASIAaAAIAAANIgaAAIAAASIAbAAIAAAPg");
	this.shape_86.setTransform(278.4,249.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgUAoIAAhPIApAAIAAAPIgbAAIAAASIAaAAIAAANIgaAAIAAASIAbAAIAAAPg");
	this.shape_87.setTransform(272.8,249.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AAOAoIAAgiIgbAAIAAAiIgPAAIAAhPIAPAAIAAAgIAbAAIAAggIAPAAIAABPg");
	this.shape_88.setTransform(266.3,249.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgaAoIAAhPIAtAAIAAAPIgeAAIAAAQIALAAQARAAAGAKQAEAGAAAHQAAALgHAHQgIAHgMAAgAgLAZIAMAAQALAAAAgKQAAgKgLAAIgMAAg");
	this.shape_89.setTransform(259.7,249.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgdAdQgMgMAAgRQAAgQAMgMQAMgMARAAQASAAAMAMQAMAMAAAQQAAARgMAMQgMAMgSAAQgQAAgNgMgAgSgSQgIAHAAALQAAALAIAIQAIAIAKAAQAMAAAIgIQAHgIAAgLQAAgLgHgHQgIgIgMAAQgKAAgIAIg");
	this.shape_90.setTransform(251.8,249.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgYAoIAAhPIAWAAQAQAAAHAKQAEAGAAAJQAAAYgbAAIgHAAIAAAegAgJgEIAIAAQAMAAAAgKQAAgKgMAAIgIAAg");
	this.shape_91.setTransform(244.5,249.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AAcAvIAAgPIg4AAIAAAPIgOAAIAAgdIAHAAIAehAIALAAIAeBAIAHAAIAAAdgAgTASIAnAAIgUgsg");
	this.shape_92.setTransform(236.9,249.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgdAdQgMgMAAgRQAAgQAMgMQAMgMARAAQASAAAMAMQAMAMAAAQQAAARgMAMQgMAMgSAAQgQAAgNgMgAgSgSQgIAHAAALQAAALAIAIQAIAIAKAAQAMAAAIgIQAHgIAAgLQAAgLgHgHQgIgIgMAAQgKAAgIAIg");
	this.shape_93.setTransform(228,249.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AAPAoIAAhAIgcAAIAABAIgPAAIAAhPIA5AAIAABPg");
	this.shape_94.setTransform(219.9,249.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#00A7E0").s().p("AmqBuIAAjbINVAAIAADbg");
	this.shape_95.setTransform(248.7,248.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(306));

	// Слой 14
	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("A3bXcMAAAgu3MAu3AAAMAAAAu3g");
	this.shape_96.setTransform(150,150);

	this.timeline.addTween(cjs.Tween.get(this.shape_96).wait(306));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.5,149.5,310.5,301);
// library properties:
lib.properties = {
	width: 300,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/300x300_atlas_.jpg", id:"300x300_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;