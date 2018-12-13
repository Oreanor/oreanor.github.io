(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"970x90_atlas_", frames: [[0,844,40,92],[0,938,32,12],[151,796,60,86],[0,694,149,148],[151,694,100,100],[213,796,17,145],[94,844,43,73],[0,347,345,345],[0,952,21,13],[0,0,345,345],[42,917,43,63],[0,967,29,8],[253,694,100,100],[232,796,11,184],[42,844,50,71]]}
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



(lib.Image_10 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_11 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Image_12 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Image_13 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Image_15 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Image_27 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Image_28 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Image_30 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Image_31 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Image_32 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Image_33 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Image_5 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Image_7 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Image_8 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Image_9 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(14);
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
	this.shape.graphics.f("#000000").s().p("AgPBZQgGgGAAgIQAAgIAGgGQAHgGAIAAQAJAAAHAGQAGAGAAAIQAAAIgGAGQgHAGgJAAQgIAAgHgGgAgOAkIAAiCIAeAAIAACCg");
	this.shape.setTransform(94,8,0.62,0.62);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAtBGIAAhWIgsA4Igtg5IAABXIgfAAIAAiLIAcAAIAwA/IAxg/IAaAAIAACLg");
	this.shape_1.setTransform(85.8,9.5,0.62,0.62);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag1A0QgVgUAAggQAAgeAVgVQAVgVAgAAQAhAAAVAVQAVAVAAAeQAAAggVAUQgVAVghAAQggAAgVgVgAgeggQgMANAAATQAAAUAMAMQAMANASAAQATAAAMgNQAMgMAAgUQAAgTgMgNQgNgMgSABQgSgBgMAMg");
	this.shape_2.setTransform(75.1,9.5,0.62,0.62);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAzBWIAAggIhlAAIAAAgIgdAAIAAg9IARAAQAQgaAAg8IAAgYIBqAAIAABuIAUAAIAAA9gAgRgtQgBAtgNAZIA8AAIAAhSIguAAg");
	this.shape_3.setTransform(65,10.5,0.62,0.62);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag1A0QgVgUAAggQAAgeAVgVQAVgVAgAAQAhAAAVAVQAVAVAAAeQAAAggVAUQgVAVghAAQggAAgVgVgAgeggQgNANAAATQABAUALAMQAMANATAAQAUAAAMgNQALgMABgUQAAgTgNgNQgMgMgTABQgSgBgMAMg");
	this.shape_4.setTransform(55.2,9.5,0.62,0.62);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag0BGIAAiLIBpAAIAAAdIhKAAIAABug");
	this.shape_5.setTransform(47,9.5,0.62,0.62);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAtBGIAAhWIgsA4Igtg5IAABXIgfAAIAAiLIAcAAIAwA/IAxg/IAZAAIAACLg");
	this.shape_6.setTransform(33.3,9.5,0.62,0.62);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAxBGIAAiLIAfAAIAACLgAhPBGIAAiLIAfAAIAAAoIAYAAQA7AAAAAxQAAAWgOANQgQAPgfAAgAgwAqIAWAAQAQgBAHgFQAGgFAAgLQAAgUgdAAIgWAAg");
	this.shape_7.setTransform(21.9,9.5,0.62,0.62);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag9BGIAAiLIA8AAQAdAAAPAIQAOAKAAATQABAQgRANQAVAHAAAYQAAAqg6AAgAgeArIAfAAQAcgBAAgPQAAgPgbAAIggAAgAgegNIAjAAQAUAAABgPQAAgOgbABIgdAAg");
	this.shape_8.setTransform(11.8,9.5,0.62,0.62);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag1A0QgVgUAAggQAAgeAVgVQAVgVAgAAQAhAAAVAVQAVAVAAAeQAAAggVAUQgVAVghAAQggAAgVgVgAgeggQgNANAAATQAAAUANAMQAMANASAAQATAAANgNQALgMAAgUQAAgTgMgNQgNgMgSABQgSgBgMAMg");
	this.shape_9.setTransform(2,9.5,0.62,0.62);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAyBfIAAhQIhiAAIAABQIghAAIAAi9IAhAAIAABOIBiAAIAAhOIAgAAIAAC9g");
	this.shape_10.setTransform(-9.4,8,0.62,0.62);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAtBGIAAhWIgsA3Igtg4IAABXIgeAAIAAiLIAbAAIAwA/IAyg/IAYAAIAACLg");
	this.shape_11.setTransform(97.3,-7.8,0.62,0.62);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAkBGIAAhaIhKBaIgbAAIAAiLIAfAAIAABbIBJhbIAbAAIAACLg");
	this.shape_12.setTransform(86.8,-7.8,0.62,0.62);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("ABDBWIAAggIiiAAIAAiLIAfAAIAABuIAoAAIAAhuIAeAAIAABuIAoAAIAAhuIAfAAIAABuIATAAIAAA9g");
	this.shape_13.setTransform(75.7,-6.8,0.62,0.62);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgUA5QgTgRgEgcIgYAAIAAA6IgfAAIAAiKIAfAAIAAA2IAYAAQAFgbATgPQATgQAaAAQAgAAAVAVQAUAVAAAeQAAAggUAUQgVAVggAAQgbAAgTgQgAAAggQgMANAAATQAAAUALAMQAKANASAAQASAAALgNQALgMAAgUQAAgTgLgNQgLgLgSAAQgRAAgKALg");
	this.shape_14.setTransform(62.3,-7.9,0.62,0.62);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgvA9QgPgMAAgVQAAgWATgLQARgKAdAAQASAAALAEQAAgggfAAQgSAAgUAPIgQgXQAWgVAkAAQAbAAAPAPQAQAPgBAcIAABVIgeAAIAAgPQgQARgaAAQgYAAgNgMgAgeAcQAAAIAHAFQAHAFAMAAQAXAAANgTIAAgOQgMgEgOAAQgkAAAAATg");
	this.shape_15.setTransform(50.5,-7.9,0.62,0.62);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAhBGIAAhvIhBAAIAABvIgfAAIAAiLIB/AAIAACLg");
	this.shape_16.setTransform(41.5,-7.8,0.62,0.62);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ag0BeIAMgaIAGACQANAAAKgYIAEgMIhFiDIAjAAIAwBeIAmheIAgAAIg3CHQgNAigMANQgNANgRAAQgKAAgJgEg");
	this.shape_17.setTransform(32,-6.1,0.62,0.62);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgOBGIAAhvIgzAAIAAgcICDAAIAAAcIgzAAIAABvg");
	this.shape_18.setTransform(22.9,-7.8,0.62,0.62);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AguA1QgVgUAAghQAAgeAUgVQAWgVAfAAQAVAAARAJQAPAJAHAOIgWAPQgPgSgVAAQgTAAgMAMQgMAMAAATQAAAUANAMQANANAUAAQAWAAANgVIAWAPQgIAQgSAJQgQAJgSAAQghAAgVgUg");
	this.shape_19.setTransform(14.3,-7.9,0.62,0.62);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgwA9QgOgNAAgUQAAgWATgLQARgKAdAAQASAAALAEQABgggfAAQgTAAgVAPIgPgXQAKgJAQgGQAQgGAQAAQAcAAAPAPQAPAPAAAcIAABVIgfAAIAAgPQgQARgbAAQgXAAgOgMgAgeAcQAAASAaAAQAYAAAMgTIAAgOQgLgEgPAAQgkAAAAATg");
	this.shape_20.setTransform(4.9,-7.9,0.62,0.62);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAiBGIAAg5IhCAAIAAA5IggAAIAAiLIAgAAIAAA3IBCAAIAAg3IAfAAIAACLg");
	this.shape_21.setTransform(-4.2,-7.8,0.62,0.62);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AguA1QgVgUAAghQAAgeAVgVQAUgVAgAAQAVAAARAJQAPAJAHAOIgWAPQgPgSgVAAQgTAAgMAMQgMAMAAATQAAAUANAMQANANATAAQAXAAANgVIAWAPQgJAQgQAJQgRAJgSAAQgiAAgUgUg");
	this.shape_22.setTransform(-17.3,-7.9,0.62,0.62);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AguA1QgVgUAAghQAAgeAVgVQAUgVAgAAQAVAAARAJQAPAJAHAOIgWAPQgOgSgWAAQgTgBgMANQgMANAAASQAAATANANQANAMATAAQAXABANgVIAWAPQgJAQgQAJQgRAJgSAAQgiAAgUgUg");
	this.shape_23.setTransform(102.9,-25.2,0.62,0.62);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgwA9QgOgNAAgUQAAgWATgLQARgKAdAAQASAAALAEQABgggfAAQgTAAgVAPIgPgXQAKgJAQgGQAQgGAQAAQAcAAAPAPQAPAQAAAbIAABVIgfAAIAAgPQgQARgbAAQgXAAgOgMgAgeAcQAAAIAHAFQAHAFAMAAQAYAAAMgTIAAgOQgLgEgPAAQgkAAAAATg");
	this.shape_24.setTransform(93.5,-25.3,0.62,0.62);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("Ag9BGIAAiLIA8AAQAdAAAOAIQAPAJAAAUQAAARgPAMQAUAGAAAZQAAAVgPALQgPAKgbAAgAgeArIAgAAQAcgBAAgPQAAgPgbAAIghAAgAgegOIAjAAQAVAAAAgOQAAgOgbAAIgdAAg");
	this.shape_25.setTransform(85,-25.2,0.62,0.62);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgOBGIAAhvIgzAAIAAgcICDAAIAAAcIgzAAIAABvg");
	this.shape_26.setTransform(72.2,-25.2,0.62,0.62);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgvA1QgVgUAAghQAAgfATgUQATgVAhAAQAdAAASARQATATAAAcIgCATIhnAAQACAQAMAJQAMAIARAAQAXAAAOgSIAUASQgWAdgkAAQggAAgVgUgAgkgOIBJAAQgEgegfAAQgfAAgHAeg");
	this.shape_27.setTransform(63.5,-25.2,0.62,0.62);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAhBGIAAguIgaAAIgiAuIgkAAIAogzQgPgEgIgLQgJgLAAgQQAAgUAOgMQAQgOAfAAIA6AAIAACLgAgXgVQAAAIAHAEQAHAFAMABIAeAAIAAgmIgdAAQgbAAAAAUg");
	this.shape_28.setTransform(53.9,-25.2,0.62,0.62);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AhEBHIgCgdQAfADAAhLIAAgoIBuAAIAACLIgfAAIAAhuIgwAAIAAAWQAAAzgRAWQgNARgYAAIgGAAg");
	this.shape_29.setTransform(44.5,-25.2,0.62,0.62);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("Ag8BGIAAiLIA7AAQAeAAANAIQAQAJgBAUQAAARgPAMQATAGABAZQAAAVgPALQgPAKgbAAgAgeArIAgAAQAcgBAAgPQAAgPgbAAIghAAgAgegOIAjAAQAVAAAAgOQAAgIgHgDQgHgDgNAAIgdAAg");
	this.shape_30.setTransform(35.8,-25.2,0.62,0.62);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgwA9QgOgNAAgUQAAgWATgLQARgKAdAAQASAAALAEQABgggfAAQgTAAgVAPIgPgXQAKgJAQgGQAQgGAQAAQAcAAAPAPQAPAPAAAcIAABVIgfAAIAAgPQgQARgbAAQgXAAgOgMgAgeAcQAAASAaAAQAYAAAMgTIAAgOQgLgEgPAAQgkAAAAATg");
	this.shape_31.setTransform(26.4,-25.3,0.62,0.62);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AhEBjIAAjBIAfAAIAAAMQANgQAZAAQAfAAATAUQASAUAAAfQAAAggTAVQgVAVgeAAQgbAAgJgLIAAA/gAglguIAAAvQAKASAXAAQASAAALgMQAMgMAAgTQAAgWgLgLQgKgMgSAAQgZAAgKAXg");
	this.shape_32.setTransform(17.4,-23.6,0.62,0.62);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAzBWIAAggIhlAAIAAAgIgdAAIAAg9IAQAAQAQgaABg8IAAgYIBqAAIAABuIAUAAIAAA9gAgSgtQAAAtgMAZIA7AAIAAhSIgvAAg");
	this.shape_33.setTransform(7.2,-24.2,0.62,0.62);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("Ag/AoIAXgRQANAXAcAAQAOAAAIgFQAJgGAAgJQAAgOgWAAIgeAAIAAgZIAcAAQAJAAAFgEQAFgFAAgGQAAgIgIgFQgHgEgLAAQgYAAgPATIgWgPQAIgNAOgJQASgKAWAAQAbAAAQALQAOALAAASQAAASgOALQATAKAAAUQAAAWgSANQgRANgcAAQgsAAgUgig");
	this.shape_34.setTransform(-2.2,-25.2,0.62,0.62);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("Ag1A0QgVgUAAggQAAgeAVgVQAVgVAgAAQAhAAAVAVQAVAVAAAeQAAAggVAUQgVAVghAAQggAAgVgVgAgegfQgMAMAAATQAAATAMANQAMAMASAAQATAAAMgMQAMgMAAgUQAAgTgMgMQgNgMgSAAQgSAAgMAMg");
	this.shape_35.setTransform(-11.5,-25.2,0.62,0.62);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAhBGIAAhvIhBAAIAABvIgeAAIAAiLIB+AAIAACLg");
	this.shape_36.setTransform(-21.5,-25.2,0.62,0.62);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgvA1QgVgUAAghQAAgfATgUQATgVAhAAQAdAAASARQATASAAAdIgCATIhnAAQACAQAMAJQAMAJARgBQAYAAANgSIATASQgVAdgkAAQghAAgUgUgAgkgOIBJAAQgEgegfAAQgfAAgHAeg");
	this.shape_37.setTransform(115.1,-42.6,0.62,0.62);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAjBGIAAhaIhKBaIgaAAIAAiLIAfAAIAABaIBJhaIAbAAIAACLg");
	this.shape_38.setTransform(105.4,-42.6,0.62,0.62);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AguA1QgVgUAAghQAAgfAVgUQAUgVAgAAQAVAAARAJQAPAIAHAPIgWAPQgPgSgVgBQgTAAgMANQgMAMAAATQAAATANANQANAMATAAQAXAAANgUIAWAPQgJAQgQAJQgRAJgSAAQghAAgVgUg");
	this.shape_39.setTransform(96.1,-42.6,0.62,0.62);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgvA9QgPgMAAgVQABgWASgLQARgKAdAAQASAAALAEQAAgQgGgIQgIgIgRAAQgSAAgUAPIgPgXQAJgJAQgGQAQgGAQAAQAbAAAPAPQAPAPABAcIAABVIgfAAIAAgPQgQARgaAAQgXAAgOgMgAgdAcQAAAIAGAFQAHAFAMAAQAYAAAMgTIAAgOQgLgEgOAAQgkAAAAATg");
	this.shape_40.setTransform(86.7,-42.6,0.62,0.62);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AhEBHIgCgdQAfADAAhLIAAgoIBuAAIAACLIgfAAIAAhuIgwAAIAAAWQAAAzgRAWQgNARgZAAIgFAAg");
	this.shape_41.setTransform(77.2,-42.5,0.62,0.62);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("Ag0BGIAAiLIBpAAIAAAcIhKAAIAABvg");
	this.shape_42.setTransform(70.1,-42.6,0.62,0.62);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("Ag1A0QgVgUAAggQAAgfAVgUQAVgVAgAAQAhAAAVAVQAVAUAAAfQAAAggVAUQgVAVghAAQggAAgVgVgAgegfQgMAMAAATQAAATAMANQAMAMASAAQATAAAMgMQAMgMAAgUQAAgTgMgMQgNgNgSAAQgSAAgMANg");
	this.shape_43.setTransform(60.8,-42.6,0.62,0.62);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("Ag8BGQgagaAAgsQAAgpAagbQAbgcAqAAQAaAAAUAKQATAIAKAPIgVAUQgVgVgfAAQgcAAgSASQgRARAAAdQAAAdASASQASASAcAAQAjAAAVgZIATAVQgMARgUAJQgUAKgZAAQgrAAgbgbg");
	this.shape_44.setTransform(50.4,-44.1,0.62,0.62);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAiBGIAAguIgbAAIgiAuIgkAAIAogzQgPgEgIgLQgJgLAAgQQAAgUAOgMQAQgOAgAAIA5AAIAACLgAgXgWQAAAIAHAGQAHAEAMAAIAfAAIAAglIgeAAQgbAAAAATg");
	this.shape_45.setTransform(35.6,-42.6,0.62,0.62);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAjBGIAAhaIhKBaIgaAAIAAiLIAfAAIAABaIBJhaIAbAAIAACLg");
	this.shape_46.setTransform(26.5,-42.6,0.62,0.62);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAhBGIAAg5IhCAAIAAA5IgfAAIAAiLIAfAAIAAA3IBCAAIAAg3IAgAAIAACLg");
	this.shape_47.setTransform(16.6,-42.6,0.62,0.62);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgvA9QgOgMgBgVQAAgWATgLQARgKAdAAQASAAALAEQAAgggfAAQgSAAgUAPIgQgXQAWgVAkAAQAbAAAPAPQAPAPAAAcIAABVIgeAAIAAgPQgQARgaAAQgYAAgNgMgAgeAcQAAAIAHAFQAHAFAMAAQAXAAANgTIAAgOQgMgEgOAAQgkAAAAATg");
	this.shape_48.setTransform(7,-42.6,0.62,0.62);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAhBGIAAhvIhBAAIAABvIgfAAIAAiLIB/AAIAACLg");
	this.shape_49.setTransform(-2.1,-42.6,0.62,0.62);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAtBGIAAhWIgsA3Igtg4IAABXIgfAAIAAiLIAcAAIAwA/IAxg/IAZAAIAACLg");
	this.shape_50.setTransform(-12.5,-42.6,0.62,0.62);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("Ag1A0QgVgUAAggQAAgfAVgUQAVgVAgAAQAhAAAVAVQAVAUAAAfQAAAggVAUQgVAVghAAQggAAgVgVgAgegfQgMALAAAUQAAATALANQANAMASAAQATAAANgMQALgMAAgUQAAgTgMgMQgMgNgTAAQgSAAgMANg");
	this.shape_51.setTransform(-23.2,-42.6,0.62,0.62);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAnBeIhIhSIgRARIAABBIggAAIAAi8IAgAAIAABTIBVhTIAqAAIhVBWIBbBmg");
	this.shape_52.setTransform(-32.7,-44.1,0.62,0.62);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t5, new cjs.Rectangle(-37.8,-50,157.3,65.9), null);


(lib.t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXA/QgVgSgFgfIgbAAIAABCIgjAAIAAieIAjAAIAAA+IAbAAQAGgeAVgRQAVgSAfAAQAkAAAXAXQAWAXAAAjQAAAkgWAXQgXAXgkAAQgfAAgWgTgAgBgjQgNAOAAAVQAAAXANAOQAMANATAAQAVAAAMgNQANgOAAgXQAAgVgNgOQgMgOgVAAQgTAAgMAOg");
	this.shape.setTransform(50.2,23.1,0.666,0.666);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAoBPIAAhmIhTBmIgeAAIAAidIAiAAIAABmIBThmIAeAAIAACdg");
	this.shape_1.setTransform(35.6,23.1,0.666,0.666);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag0A8QgYgWAAgmQAAgiAYgYQAXgXAkAAQAYAAASAKQASAKAIAQIgaARQgPgVgaAAQgUAAgOAOQgOAOAAAVQAAAWAPAOQAPAOAWAAQAZAAAPgWIAYAPQgJATgTAKQgSAKgVAAQgmAAgXgWg");
	this.shape_2.setTransform(24.4,23.1,0.666,0.666);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag2BEQgQgNABgXQgBgZAWgMQATgMAhAAQATAAANAEQABgSgIgIQgIgJgTAAQgWAAgWAQIgRgZQALgLARgGQASgHATAAQAfAAARARQAQARAAAfIAABgIgiAAIAAgRQgRATgfAAQgaAAgQgOgAghAgQAAAJAIAFQAHAGANAAQAaAAAPgWIAAgPQgNgEgQAAQgoAAAAAVg");
	this.shape_3.setTransform(13,23,0.666,0.666);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhMBQIgDghQAjAEABhVIAAgtIB7AAIAACeIgiAAIAAh9Ig3AAIAAAYQAAA7gTAYQgOATgaAAIgIAAg");
	this.shape_4.setTransform(1.5,23.1,0.666,0.666);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag7BPIAAidIB3AAIAAAgIhUAAIAAB9g");
	this.shape_5.setTransform(-7.1,23.1,0.666,0.666);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag8A7QgYgXAAgkQAAgjAYgXQAXgXAlAAQAlAAAYAXQAXAXAAAjQAAAkgXAXQgYAXglAAQgkAAgYgXgAgigjQgOANAAAWQAAAWAOAOQAOAOAUAAQAWAAAOgNQANgOAAgXQAAgVgOgOQgOgOgVAAQgVAAgNAOg");
	this.shape_6.setTransform(-18.3,23.1,0.666,0.666);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhEBPQgdgdAAgyQAAgtAegfQAeggAwAAQAcAAAXALQAWAKAKAQIgXAXQgYgYgiAAQggAAgUAUQgUAUAAAgQAAAhAVAVQAUAUAhAAQAlAAAYgcIAWAXQgNATgXAKQgXALgcAAQgxAAgegeg");
	this.shape_7.setTransform(-30.8,21.3,0.666,0.666);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAgBPIg8hBIgLALIAAA2IgkAAIAAidIAkAAIAABAIBChAIAuAAIhMBHIBPBWg");
	this.shape_8.setTransform(-52.5,23.1,0.666,0.666);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgQBPIAAh9Ig5AAIAAggICTAAIAAAgIg5AAIAAB9g");
	this.shape_9.setTransform(22.5,1.7,0.666,0.666);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag1A8QgYgXAAglQAAgjAVgWQAWgYAmAAQAgAAAVAUQAVAUAAAgQAAAJgCAMIh0AAQACASANAKQANAKAUAAQAbAAAPgVIAVAVQgXAggpAAQglAAgXgWgAgagpQgLAJgDAPIBSAAQgEghgkAAQgQAAgMAJg");
	this.shape_10.setTransform(12,1.7,0.666,0.666);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AA6BhIAAgkIhzAAIAAAkIggAAIAAhEIASAAQATgegBhEIAAgbIB5AAIAAB9IAVAAIAABEgAgUgzQAAAzgPAdIBEAAIAAhdIg1AAg");
	this.shape_11.setTransform(0.2,2.9,0.666,0.666);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ag1A8QgYgXAAglQAAgjAVgWQAWgYAlAAQAhAAAVAUQAVAUAAAgQAAAJgCAMIh0AAQACASANAKQANAKAUAAQAbAAAPgVIAVAVQgXAggpAAQglAAgXgWgAgagpQgLAJgDAPIBSAAQgEghgkAAQgQAAgMAJg");
	this.shape_12.setTransform(-11.4,1.7,0.666,0.666);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhEBPIAAidIBDAAQAhAAAQAKQARAKAAAWQAAATgSAOQAWAGAAAdQAAAXgRAMQgQAMgfAAgAgiAwIAkAAQAfAAAAgRQAAgRgeAAIglAAgAgigPIAoAAQAXAAAAgQQAAgKgIgCQgHgEgQAAIggAAg");
	this.shape_13.setTransform(-22.3,1.7,0.666,0.666);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ag1A8QgYgXABglQAAgjAUgWQAWgYAmAAQAgAAAVAUQAUAUAAAgIgBAVIh0AAQABASAOAKQANAKAUAAQAaAAAQgVIAVAVQgYAggoAAQglAAgXgWgAgagpQgLAJgDAPIBSAAQgFghgjAAQgQAAgMAJg");
	this.shape_14.setTransform(36.5,-19.7,0.666,0.666);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAoBPIAAhmIhTBmIgeAAIAAidIAiAAIAABmIBThmIAeAAIAACdg");
	this.shape_15.setTransform(24.7,-19.7,0.666,0.666);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhNBvIAAjaIAjAAIAAAPQAOgSAdAAQAjAAAVAWQAUAWABAkQAAAjgWAYQgXAYghAAQggAAgKgNIAABHgAgqg0IAAA1QAMAUAZAAQAVAAAMgOQANgNAAgWQAAgYgMgNQgLgNgTAAQgdAAgMAag");
	this.shape_16.setTransform(12.9,-17.8,0.666,0.666);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ag1A8QgYgXAAglQABgjAUgWQAWgYAlAAQAhAAAUAUQAWAUAAAgIgCAVIh1AAQADASANAKQANAKAUAAQAbAAAPgVIAVAVQgYAggoAAQglAAgXgWgAgagpQgLAJgDAPIBSAAQgFghgjAAQgRAAgLAJg");
	this.shape_17.setTransform(0.9,-19.7,0.666,0.666);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhFBPIAAidIBEAAQAhAAAQAJQARALAAAWQAAAUgSAMQAWAIAAAcQABAXgSAMQgQAMgfAAgAgiAwIAkAAQAgAAgBgRQAAgRgeAAIglAAgAgigQIAoAAQAXAAAAgQQAAgIgJgDQgHgDgPAAIggAAg");
	this.shape_18.setTransform(-10,-19.7,0.666,0.666);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ag8A7QgXgXgBgkQABgjAXgXQAXgXAlAAQAlAAAYAXQAXAXAAAjQAAAkgXAXQgYAXglAAQgkAAgYgXgAghgkQgPAOAAAWQAAAWAOAOQAOAOAUAAQAWAAAOgOQANgNAAgXQAAgWgOgOQgOgNgVAAQgUAAgNANg");
	this.shape_19.setTransform(-21.9,-19.7,0.666,0.666);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("ABMB9IAAgmIiXAAIAAAmIgjAAIAAhIIAWAAQAMgSAGgcQAGgiAAhCIAAgfICWAAIAACxIAZAAIAABIgAgdhMQAABcgUAlIBiAAIAAiPIhOAAg");
	this.shape_20.setTransform(-35.3,-20.2,0.666,0.666);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4, new cjs.Rectangle(-57.5,-28.5,115.2,57.1), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgRBkQgGgHAAgJQAAgJAGgGQAIgIAJABQAKgBAIAIQAGAGAAAJQAAAJgGAHQgHAHgLAAQgKAAgHgHgAgQApIAAiTIAiAAIAACTg");
	this.shape.setTransform(59.2,20.2,0.666,0.666);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag2BEQgQgNAAgXQABgZAVgMQATgMAgAAQASAAAPAEQAAgSgIgIQgHgKgUAAQgWAAgWARIgRgZQALgLATgHQARgGATAAQAfAAARARQARARAAAfIAABgIgjAAIAAgRQgSATgeAAQgaAAgQgOgAgiAgQAAAJAIAFQAIAGANAAQAaAAAPgWIAAgPQgNgEgQAAQgpAAAAAVg");
	this.shape_1.setTransform(50.3,22,0.666,0.666);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhMBQIgDghQAjADAAhUIAAgtIB8AAIAACdIgjAAIAAh8Ig3AAIAAAYQAAA7gSAYQgPATgbAAIgGAAg");
	this.shape_2.setTransform(38.8,22.1,0.666,0.666);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag1A8QgYgXAAglQAAgjAVgWQAWgYAmAAQAgAAAVAUQAVAUAAAgQAAAJgCAMIh0AAQACASANAKQANAKAUAAQAbAAAPgVIAVAVQgYAggoAAQglAAgXgWgAgagpQgLAJgDAPIBSAAQgCgQgLgJQgKgIgRAAQgQAAgMAJg");
	this.shape_3.setTransform(28.2,22,0.666,0.666);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AA5BhIAAgkIhxAAIAAAkIghAAIAAhEIASAAQASgeAAhEIAAgbIB4AAIAAB9IAWAAIAABEgAgTgzQgBAzgPAdIBEAAIAAhdIg0AAg");
	this.shape_4.setTransform(16.4,23.2,0.666,0.666);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag8A7QgYgXAAgkQAAgjAYgXQAXgXAlAAQAlAAAYAXQAXAXAAAjQAAAkgXAXQgYAXglAAQgkAAgYgXgAgigkQgNAOAAAWQgBAWAOAOQAOAOAUAAQAWAAANgOQAOgNAAgXQAAgWgOgOQgOgNgVAAQgUAAgOANg");
	this.shape_5.setTransform(-0.7,22,0.666,0.666);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag7BPIAAidIB2AAIAAAhIhTAAIAAB8g");
	this.shape_6.setTransform(-10.6,22,0.666,0.666);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag1A8QgXgXgBglQABgjAUgWQAWgYAlAAQAhAAAUAUQAWAUAAAgIgCAVIh1AAQADASANAKQANAKAUAAQAbAAAPgVIAVAVQgYAggoAAQglAAgXgWgAgagpQgLAJgDAPIBSAAQgFghgjAAQgRAAgLAJg");
	this.shape_7.setTransform(-21.3,22,0.666,0.666);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag8A7QgYgXAAgkQAAgjAYgXQAXgXAlAAQAlAAAYAXQAXAXAAAjQAAAkgXAXQgYAXglAAQgkAAgYgXgAgigkQgOAOAAAWQAAAWAOAOQAOAOAUAAQAVAAAOgOQAOgNAAgXQAAgVgOgPQgOgNgVAAQgVAAgNANg");
	this.shape_8.setTransform(-33.3,22,0.666,0.666);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhFBPIAAidIBEAAQAhAAAQAJQARALAAAWQAAAUgSAMQAWAIABAcQAAAXgRAMQgRAMgeAAgAgiAwIAkAAQAgAAAAgRQAAgJgIgEQgHgEgQAAIglAAgAgigQIAoAAQAXAAAAgQQAAgIgIgDQgHgDgPAAIghAAg");
	this.shape_9.setTransform(-44.7,22,0.666,0.666);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag0A8QgYgXABglQgBgiAXgYQAYgXAkAAQAYAAASAKQASAKAIAQIgaARQgQgVgZAAQgVAAgNAOQgNAOAAAVQAAAWAOAOQAOAOAXAAQAaAAAOgXIAZAQQgLATgSAKQgSAKgWAAQgkAAgYgWg");
	this.shape_10.setTransform(-55.6,22,0.666,0.666);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAyBPIAAhhIgwA+Igzg/IAABiIgjAAIAAidIAfAAIA2BHIA4hHIAcAAIAACdg");
	this.shape_11.setTransform(44.6,0.6,0.666,0.666);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ag2BEQgQgNAAgXQAAgZAWgMQASgMAhAAQAVAAALAEQABgkgjAAQgWAAgWARIgRgZQALgLATgHQARgGATAAQAfAAARARQARARgBAfIAABgIgjAAIAAgSQgQAUgfAAQgaAAgQgOgAgiAfQAAAKAIAFQAIAGAOAAQAaAAANgWIAAgPQgLgEgRAAQgpAAAAAUg");
	this.shape_12.setTransform(32.1,0.6,0.666,0.666);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgRBPIAAh9Ig4AAIAAggICTAAIAAAgIg5AAIAAB9g");
	this.shape_13.setTransform(22,0.6,0.666,0.666);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhMBvIAAjaIAiAAIAAAPQAOgSAdAAQAjAAAVAWQAVAWgBAkQABAjgWAYQgXAYgiAAQgeAAgLgNIAABHgAgbhGQgKAGgFAMIAAA1QAMAUAaAAQAUAAANgOQANgNgBgWQAAgYgLgNQgMgNgUAAQgNAAgMAIg");
	this.shape_14.setTransform(11.7,2.6,0.666,0.666);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag1A8QgYgXABglQgBgjAVgWQAWgYAlAAQAhAAAVATQAUAVAAAgIgBAVIh1AAQACASAOAKQANAKATAAQAbAAAQgVIAVAVQgYAggoAAQglAAgXgWgAgagpQgKAJgEAPIBSAAQgFghgjAAQgRAAgLAJg");
	this.shape_15.setTransform(-0.3,0.6,0.666,0.666);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAlBPIAAh9IhJAAIAAB9IgjAAIAAidICPAAIAACdg");
	this.shape_16.setTransform(-12,0.6,0.666,0.666);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ag0A8QgXgXAAglQAAgjAXgXQAXgXAkAAQAXAAATAKQASAJAIAQIgaASQgPgVgaAAQgUAAgOAOQgOAOAAAVQAAAWAPAOQAOAOAXAAQAZAAAPgXIAYAQQgJATgTAKQgSAKgVAAQgmAAgXgWg");
	this.shape_17.setTransform(-23,0.6,0.666,0.666);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAfBPIg7hBIgMAMIAAA1IgjAAIAAidIAjAAIAABAIBEhAIAtAAIhMBHIBPBWg");
	this.shape_18.setTransform(-33.1,0.6,0.666,0.666);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AguBKQgWgJgJgSIAZgSQAPAVAeAAQAUAAANgKQANgKADgQIhKAAIAAgdIBJAAQgHgigoAAQgeAAgQAXIgZgTQAbgkAvAAQAkAAAXAWQAWAWAAAlQAAAkgWAWQgWAYgmAAQgYAAgSgIg");
	this.shape_19.setTransform(-45,0.6,0.666,0.666);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhCBPIAAidIAiAAIAAAuIAgAAQBDAAABA3QAAAYgQAOQgSASgjAAgAggAvIAeAAQAiAAAAgYQgBgXggAAIgfAAg");
	this.shape_20.setTransform(52.2,-20.7,0.666,0.666);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ag0A8QgYgXABglQgBgiAXgYQAYgXAkAAQAYAAASAKQASAKAHAQIgZARQgQgVgZAAQgUAAgOAOQgOAOABAVQAAAWAOAOQAOAOAXAAQAZAAAPgXIAZARQgKASgTAKQgSAKgWAAQglAAgXgWg");
	this.shape_21.setTransform(41.4,-20.8,0.666,0.666);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ag1A8QgYgXAAglQAAgjAVgWQAWgYAmAAQAgAAAVATQAVAVAAAgQAAAJgCAMIh0AAQACATANAJQANAKAUAAQAbAAAPgVIAVAVQgYAggoAAQglAAgXgWgAgagpQgLAIgDAQIBSAAQgCgQgLgJQgKgIgRAAQgQAAgMAJg");
	this.shape_22.setTransform(30.2,-20.8,0.666,0.666);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgQBPIAAh9Ig5AAIAAggICTAAIAAAgIg5AAIAAB9g");
	this.shape_23.setTransform(19.8,-20.7,0.666,0.666);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhDBPIAAidIAjAAIAAAuIAhAAQBDAAgBA3QAAAYgPAOQgSASgjAAgAggAvIAeAAQAhAAAAgYQABgXgiAAIgeAAg");
	this.shape_24.setTransform(10.8,-20.7,0.666,0.666);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AhNBvIAAjaIAjAAIAAAOQAOgRAdAAQAjAAAVAWQAUAWAAAjQAAAkgVAYQgWAYgjAAQgfAAgKgNIAABHgAgqg0IAAA1QALAUAaAAQAVAAAMgOQANgNAAgWQAAgYgMgNQgLgNgUAAQgcAAgMAag");
	this.shape_25.setTransform(-0.5,-18.8,0.666,0.666);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("Ag1A8QgYgXAAglQAAgjAVgWQAWgYAmAAQAgAAAVATQAVAVAAAgQAAAJgCAMIh0AAQACATANAJQANAKAUAAQAbAAAPgVIAVAVQgYAggoAAQglAAgXgWgAgagpQgLAIgDAQIBSAAQgCgQgLgJQgKgIgRAAQgQAAgMAJg");
	this.shape_26.setTransform(-12.5,-20.8,0.666,0.666);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AhEBPIAAidIBDAAQAhAAAQAKQARAKAAAWQAAASgSAOQAWAIAAAcQAAAXgQAMQgRAMgeAAgAgiAwIAkAAQAfAAAAgRQAAgSgeAAIglAAgAgigPIAoAAQAXAAAAgQQAAgKgIgDQgHgCgQgBIggAAg");
	this.shape_27.setTransform(-23.4,-20.7,0.666,0.666);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("Ag8A7QgXgYgBgjQABgjAXgXQAXgXAlAAQAlAAAYAXQAXAYABAiQgBAjgXAYQgYAXglAAQgkAAgYgXgAgigjQgOANAAAWQAAAWAOAOQAOAOAUAAQAWAAANgNQAOgOgBgXQAAgVgOgOQgOgOgUAAQgUAAgOAOg");
	this.shape_28.setTransform(-35.3,-20.8,0.666,0.666);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("ABMB9IAAglIiXAAIAAAlIgkAAIAAhIIAXAAQAMgRAGgdQAGgiAAhCIAAgfICVAAIAACxIAaAAIAABIgAgdhMQAABbgUAmIBiAAIAAiPIhOAAg");
	this.shape_29.setTransform(-48.7,-21.3,0.666,0.666);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-60.7,-29.6,121.5,59.4), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhEBPIAAidIBDAAQAhAAAQAJQARAKAAAXQAAATgSANQAWAIAAAcQAAAXgQAMQgRAMgeAAgAgiAwIAkAAQAgAAAAgRQAAgRgfAAIglAAgAgigPIAoAAQAXgBAAgQQAAgJgIgCQgHgDgQgBIggAAg");
	this.shape.setTransform(52.1,10.5,0.666,0.666);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag8A7QgXgXAAgkQAAgjAXgXQAYgXAkAAQAlAAAYAXQAXAXAAAjQAAAkgXAXQgYAXglAAQgkAAgYgXgAgigkQgOAOAAAWQAAAWANAOQAOAOAVAAQAVAAAOgOQANgNAAgXQAAgVgNgPQgOgNgVAAQgUAAgOANg");
	this.shape_1.setTransform(40.2,10.5,0.666,0.666);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhHAtIAagSQAPAZAfAAQAQAAAJgGQAKgGAAgKQAAgQgZAAIgiAAIAAgdIAgAAQAKAAAGgFQAGgEAAgIQAAgJgJgFQgJgFgMAAQgbAAgRAVIgZgQQAJgPAQgKQAUgLAZAAQAfAAARANQARAMAAAUQAAAUgQAMQAVAMAAAXQAAAYgUAPQgUAOgfAAQgxAAgXgmg");
	this.shape_2.setTransform(28.6,10.5,0.666,0.666);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAoBPIAAhmIhTBmIgeAAIAAidIAiAAIAABmIBThmIAeAAIAACdg");
	this.shape_3.setTransform(17.6,10.5,0.666,0.666);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhNBvIAAjaIAjAAIAAAPQAPgSAcAAQAjAAAVAWQAUAWAAAkQAAAjgVAYQgWAYgjAAQgfAAgKgNIAABHgAgqg0IAAA1QALAUAaAAQAVAAANgOQAMgNAAgWQAAgYgLgNQgMgNgUAAQgcAAgMAag");
	this.shape_4.setTransform(5.9,12.4,0.666,0.666);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAlBPIAAh8IhJAAIAAB8IgjAAIAAidICPAAIAACdg");
	this.shape_5.setTransform(-6.3,10.5,0.666,0.666);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhMBvIAAjaIAiAAIAAAPQAPgSAcAAQAjAAAVAWQAUAWABAkQgBAjgVAYQgWAYgjAAQgeAAgLgNIAABHgAgbhGQgKAHgFALIAAA1QAMAUAZAAQAVAAAMgOQANgNABgWQgBgYgMgNQgLgNgTAAQgPAAgLAIg");
	this.shape_6.setTransform(-17.9,12.4,0.666,0.666);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgXA/QgVgSgFgfIgbAAIAABBIgiAAIAAidIAiAAIAAA+IAcAAQAFgeAVgRQAVgSAfAAQAkAAAXAXQAWAXAAAjQAAAkgWAXQgXAXgkAAQggAAgVgTgAgBgjQgNAOAAAVQAAAWANAOQALAOAUAAQAUAAANgOQAMgNAAgXQAAgWgMgNQgNgOgUAAQgTAAgMAOg");
	this.shape_7.setTransform(-32.1,10.5,0.666,0.666);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag0A8QgXgXAAglQgBgiAXgYQAYgXAkAAQAYAAASAKQASAKAHAQIgaARQgPgVgYAAQgVAAgOAOQgOAOABAVQgBAWAPAOQAOAOAXAAQAZAAAPgXIAYAQQgJATgTAKQgSAKgVAAQgmAAgXgWg");
	this.shape_8.setTransform(-45.8,10.5,0.666,0.666);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag2BEQgPgNAAgXQAAgZAVgMQATgMAhAAQAVAAALAEQABgkgjAAQgVAAgXARIgRgZQAKgLATgHQARgGATAAQAfAAARARQAQARAAAfIAABgIgiAAIAAgRQgSATgeAAQgaAAgQgOgAghAgQAAAJAHAFQAJAGANAAQAaAAAOgWIAAgPQgNgEgQAAQgoAAAAAVg");
	this.shape_9.setTransform(58.2,-11,0.666,0.666);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAmBPIAAhAIhLAAIAABAIgiAAIAAidIAiAAIAAA+IBLAAIAAg+IAjAAIAACdg");
	this.shape_10.setTransform(47.1,-10.9,0.666,0.666);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhMBQIgDghQAjADAAhUIAAgtIB8AAIAACdIgjAAIAAh9Ig3AAIAAAZQAAA7gSAYQgPATgbAAIgGAAg");
	this.shape_11.setTransform(34.8,-10.8,0.666,0.666);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ag8A7QgYgXAAgkQAAgjAYgXQAXgXAlAAQAlAAAYAXQAYAXAAAjQAAAkgYAXQgYAXglAAQgkAAgYgXgAgigkQgOAOAAAWQAAAWAOAOQANAOAVAAQAWAAANgOQAOgNAAgXQAAgWgOgOQgOgNgVAAQgUAAgOANg");
	this.shape_12.setTransform(23.7,-10.9,0.666,0.666);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAlBPIAAh9IhJAAIAAB9IgjAAIAAidICPAAIAACdg");
	this.shape_13.setTransform(11.7,-10.9,0.666,0.666);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhDBPIAAidIAkAAIAAAuIAgAAQBDAAAAA3QgBAYgPAPQgRARgkAAgAgfAvIAdAAQAiAAAAgYQAAgXgiAAIgdAAg");
	this.shape_14.setTransform(-3.9,-10.9,0.666,0.666);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAmBPIAAhAIhLAAIAABAIgiAAIAAidIAiAAIAAA+IBLAAIAAg+IAjAAIAACdg");
	this.shape_15.setTransform(-15.4,-10.9,0.666,0.666);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhHAtIAagTQAPAaAfAAQAQAAAJgGQAKgGAAgKQAAgQgZAAIgiAAIAAgdIAgAAQAKAAAGgFQAGgEAAgHQAAgKgJgFQgIgFgNABQgaAAgSAUIgYgQQAJgPAQgJQATgMAaAAQAeAAARANQARAMAAAUQAAAUgQAMQAVALAAAYQAAAZgUAOQgUAOgfAAQgyAAgWgmg");
	this.shape_16.setTransform(-26.6,-10.9,0.666,0.666);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAoBPIAAhmIhUBmIgdAAIAAidIAjAAIAABmIBShmIAeAAIAACdg");
	this.shape_17.setTransform(-37.6,-10.9,0.666,0.666);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("ABkBqIhIhfIgKAJIAABWIgjAAIAAhWIgLgKIhJBgIgqAAIBXhyIhWhhIAtAAIBQBYIAAhYIAjAAIAABYIBQhYIAtAAIhXBgIBYBzg");
	this.shape_18.setTransform(-53.3,-12.7,0.666,0.666);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-62.8,-19.8,125.7,39.6), null);


(lib.fgh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA600A").s().p("AgHANQgFgEgBgGQgBgFADgEQADgGAGgBQAEgCAFADQAFAEACAFQABAEgCAGQgEAGgFABIgEABQgDAAgEgCg");
	this.shape.setTransform(-5.3,0.7,0.62,0.62);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EA600A").s().p("AgGAMQgFgCgCgHQgBgFACgFQAEgFAFgBQAFgCAGAEQAFADABAFQABAFgDAGQgCAEgHACIgDAAQgEABgCgDg");
	this.shape_1.setTransform(-4.5,7.9,0.62,0.62);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EA600A").s().p("AgGAMQgGgCgBgHQgCgFADgFQAEgFAFgBQAFgBAFACQAGAEABAFQABAFgCAGQgEAFgGABIgDAAQgDAAgDgCg");
	this.shape_2.setTransform(9.1,12,0.62,0.62);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EA600A").s().p("AgGAMQgGgDgBgGQgBgFACgEQADgGAGgBQAGgBAFADQAFADABAGQABAEgDAGQgCAFgHABIgDABQgCAAgEgDg");
	this.shape_3.setTransform(2.8,9.2,0.62,0.62);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EA600A").s().p("AgHAMQgFgDgBgGQgBgEADgGQADgFAGgBQADgCAHAEQAEADACAGQABADgCAHQgEAFgGABIgDABQgDAAgEgDg");
	this.shape_4.setTransform(-14.3,13.2,0.62,0.62);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EA600A").s().p("AgHANQgEgDgCgGQgCgGADgFQADgEAHgCQAFgBAEADQAFACACAHQABAFgCAEQgDAFgGACIgEAAQgEAAgDgBg");
	this.shape_5.setTransform(3.1,-7.3,0.62,0.62);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EA600A").s().p("AgGANQgGgEgBgFQgBgGADgEQADgGAGgBQAEgCAGADQAFAEABAFQACAGgEAEQgDAFgFACIgEABQgDAAgDgCg");
	this.shape_6.setTransform(-1.1,-3.3,0.62,0.62);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EA600A").s().p("AgGAMQgGgDgBgGQgCgFADgEQADgGAGgBQAHgBADADQAGADABAGQABAEgCAGQgEAFgGABIgDABQgDAAgDgDg");
	this.shape_7.setTransform(-7.6,11.8,0.62,0.62);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EA600A").s().p("AgHAMQgFgDgBgFQgBgGADgEQADgGAGgBQAEgBAGADQAFADABAGQACAEgEAGQgDAFgGABIgDAAQgDAAgEgCg");
	this.shape_8.setTransform(-7.7,16.4,0.62,0.62);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EA600A").s().p("AgGAMQgHgDAAgGQgCgEADgGQAEgFAFgBQAFgCAFAEQAFADACAGQABAFgDAEQgDAGgFABIgEABQgDAAgDgDg");
	this.shape_9.setTransform(-0.9,-10.4,0.62,0.62);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EA600A").s().p("AgHAMQgEgCgCgHQgBgEACgGQAEgFAFgBQAEgCAHAEQAEADACAFQABAGgDAEQgCAGgHABIgDAAQgDAAgEgCg");
	this.shape_10.setTransform(4.8,-0.3,0.62,0.62);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EA600A").s().p("AgGAMQgFgCgCgHQgBgFACgFQAEgFAFgBQAGgCAEAEQAFACACAHQACAEgDAGQgEAEgFACIgEAAQgEABgCgDg");
	this.shape_11.setTransform(13.5,15.5,0.62,0.62);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EA600A").s().p("AgGAMQgFgDgCgGQgCgDADgHQAEgFAFgBQAGgCAEAEQAHADAAAGQABAFgDAEQgDAGgGABIgCABQgEAAgDgDg");
	this.shape_12.setTransform(0.8,3.2,0.62,0.62);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EA600A").s().p("AgHAMQgFgDgBgGQgBgFADgFQADgFAGgBQAEgCAGAEQAFADABAGQACAEgEAFQgDAGgGABIgDAAQgDAAgEgCg");
	this.shape_13.setTransform(5.8,15.6,0.62,0.62);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EA600A").s().p("AgGAMQgGgDgBgGQgCgEADgGQAEgFAFgBQAGgCAEAEQAGADABAGQABAFgDAEQgDAGgGABIgDABQgDAAgDgDg");
	this.shape_14.setTransform(1,17.8,0.62,0.62);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EA600A").s().p("AgGAMQgGgCgBgHQgCgFADgFQADgEAGgCQAFgCAFADQAGAEABAFQACAGgDAFQgDAEgGACIgEABQgEAAgCgDg");
	this.shape_15.setTransform(6.8,4.2,0.62,0.62);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EA600A").s().p("AgHAMQgEgDgCgFQgCgGADgEQAEgGAFgBQAGgBAFADQAEACACAHQACAEgEAGQgCAFgHABIgDAAQgCAAgFgCg");
	this.shape_16.setTransform(-2.7,15,0.62,0.62);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EA600A").s().p("AhkFkQgEAAgDgCQgHgEAAgJQAAgGAFgEQAEgEAGAAIBRACIABgrQhCgDg/gPQhJgRgxgeQgsgbgVgkQgUgkAFgqQACgIAFgCQAFgEAHACQAdAIAmgJQAhgIAdgTQAcgSgBgdQAAgQgJgOQgKgNgQgHIgBAAQgJgEAAgKQAAgKAKgDQAYgIAfgTQAygeAAgYQAAgPgXgNQgLgHgTgHQgKgEAAgKQABgLAKgDQAkgLAzgnQAzgnAPgcQADgHAJAAQAJAAAEAIQAKAVAiAgQAhAfAkAWQAQAKATAIQAJADAAAKQAAALgKADIAAAAQg0ASgCAVQgDAYAyAiQAgAUAWAIQAJAEAAAKQAAAKgKAEIAAAAQgQAFgKAMQgJALgDAPQgFAgAeAVIANAJQAXAOAZAIQAlALAdgIQAGgCAGADQAGAEAAAGQAJAwgjAoQgrAxhkAeQhUAYhVABIAAArIBQACQAGAAAEAFQAEAEAAAGQAAAGgEAEQgFAEgGAAgAj9DFQAwAdBKAQQBAAOBAABQBTACBXgZQBfgbAmgsQAUgYABgZQg6AHg+gmIgPgKQgUgPgKgWQgKgWADgWQAFggAZgUQgPgIgRgLQhCgsAGgqQAEgeAngUIgJgFQgfgTgegaQghgcgSgZQgUAZgjAcQgjAcgiARQApAXAAAhQAAAohBAmQgRALgQAHQAcAYAAAkQABAVgLATQgLATgTANQgdATghAJQgoAMgigFQACA6BBAog");
	this.shape_17.setTransform(0,4.6,0.62,0.62);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EA600A").s().p("AAlBOIgmgUIgnASQgGAEgIgEIgBgBQgHgGACgJIAIgnIgegbQgHgHADgIQADgJAJgBIAsgFIAUgkQAEgIAIABQAIAAAEAIIATAkIArAHQAIACAEAIQACAJgHAGIgfAbIAGAnQABAJgHAFQgEADgEAAQgEAAgDgCgAAZAnIgDgTQgBgIAGgFIAOgLIgUgDQgIgBgDgHIgJgTIgKASQgDAHgIABIgUACIAOAMQAFAFgBAIIgEATIAUgJQAGgDAGADIATAKg");
	this.shape_18.setTransform(0.8,-21.9,0.62,0.62);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhkFkQgEAAgDgCQgHgEAAgJQAAgGAFgEQAEgEAGAAIBRACIABgrQhCgDg/gPQhJgRgxgeQgsgbgVgkQgUgkAFgqQACgIAFgCQAFgEAHACQAdAIAmgJQAhgIAdgTQAcgSgBgdQAAgQgJgOQgKgNgQgHIgBAAQgJgEAAgKQAAgKAKgDQAXgIAggTQAygeAAgYQAAgPgXgNQgLgHgTgHQgKgEAAgKQABgLAKgDQAkgLAzgnQAzgnAPgcQADgHAJAAQAJAAAEAIQAKAVAiAgQAhAfAkAWQAQAKATAIQAJADAAAKQAAALgKADIAAAAQg0ASgCAVQgDAYAyAiQAgAUAWAIQAJAEAAAKQAAAKgKAEIAAAAQgQAFgKAMQgKALgCAPQgFAgAeAVIANAJQAXAOAZAIQAlALAdgIQAGgCAGADQAGAEAAAGQAJAwgjAoQgrAxhkAeQhUAYhVABIAAArIBQACQAGAAAEAFQAEAEAAAGQAAAGgEAEQgFAEgGAAg");
	this.shape_19.setTransform(0,4.6,0.62,0.62);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAGAbQgGgDgGADIgUAJIAEgTQABgIgFgGIgOgLIAUgDQAIgBADgGIAKgSIAJATQADAGAIACIAUACIgOAMQgGAFABAIIADATg");
	this.shape_20.setTransform(0.7,-21.8,0.62,0.62);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fgh, new cjs.Rectangle(-21.7,-26.9,43.4,53.9), null);


(lib.fg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEAAQAAgEAEABQAFgBAAAEQAAAEgFABQgEgBAAgEg");
	this.shape.setTransform(259,83.2,0.81,0.806);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgNAcIAZgwIggAAIAAgHIApAAIAAAFIgbAyg");
	this.shape_1.setTransform(256.9,81.3,0.81,0.806);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgRAUQgGgHAAgNQAAgbAXgBQAYABAAAbQAAAcgYAAQgLAAgGgIgAgQAAQAAAKAFAGQAEAGAHAAQAQAAAAgWQAAgVgQAAQgQAAAAAVg");
	this.shape_2.setTransform(252.8,81.3,0.81,0.806);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgVAOIAHgDQAEALAMAAQANAAAAgKQAAgJgPAAIgFAAIAAgGIAFAAQANAAAAgJQAAgJgMAAQgLAAgDALIgHgDQAGgPAPAAQAJAAAFAEQAGAEAAAHQAAAKgKADQALAAAAAMQAAAIgGAEQgGAFgJAAQgSAAgEgPg");
	this.shape_3.setTransform(248.5,81.3,0.81,0.806);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAFAcIAAgvIgOAHIgCgGIASgJIAFAAIAAA3g");
	this.shape_4.setTransform(245,81.3,0.81,0.806);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAAAcIgggqIAAAqIgHAAIAAg3IAGAAIAhArIAAgrIAGAAIAAA3gAANAOIAAgHIAYAAIAAAHgAAPAAQgEgEAAgGQAAgGAEgEQAEgEAGAAQAHAAAEAEQAEAEAAAGQAAAGgEAEQgEACgHAAQgGAAgEgCgAARgKQAAAIAIAAQAIAAAAgIQAAgIgIAAQgIAAAAAIg");
	this.shape_5.setTransform(237.8,81.3,0.81,0.806);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgQAVQgJgIABgNQAAgLAHgIQAIgJAMAAQAOAAAHAKIgEAEQgIgHgJAAQgIAAgHAGQgFAGAAAJQAAAKAGAGQAGAGAJAAQALAAAGgIIAFAFQgJAKgOAAQgMAAgHgIg");
	this.shape_6.setTransform(229.2,81.3,0.81,0.806);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAQAcIAAgwIggAAIAAAwIgHAAIAAg3IAvAAIAAA3g");
	this.shape_7.setTransform(224.5,81.3,0.81,0.806);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgFAGIAFgCQABgDgBgBQgDAAAAgFQgBgEAEAAQAGAAAAAHQAAAKgJACg");
	this.shape_8.setTransform(219,83.7,0.81,0.806);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgVAPIAGgDQAFAKAKAAQAHAAAEgEQAEgEAAgFQAAgLgPAAQgIAAgEAEIgGgCIADgbIAiAAIAAAHIgcAAIgCAPQAFgEAHAAQAKAAAGAGQAFAEAAAIQAAAIgGAGQgGAFgKAAQgQAAgFgNg");
	this.shape_9.setTransform(216.3,81.4,0.81,0.806);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgRAUQgGgHAAgNQAAgbAXgBQAYABAAAbQAAAcgYAAQgKAAgHgIgAgPAAQAAAWAPAAQAQAAAAgWQAAgVgQAAQgPAAAAAVg");
	this.shape_10.setTransform(212.1,81.3,0.81,0.806);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgJADIAAgFIATAAIAAAFg");
	this.shape_11.setTransform(208.5,81.8,0.81,0.806);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgNAcIAagwIghAAIAAgHIApAAIAAAFIgbAyg");
	this.shape_12.setTransform(205.6,81.3,0.81,0.806);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgRAUQgGgHAAgNQAAgbAXgBQAYABAAAbQAAAcgYAAQgKAAgHgIgAgQAAQAAAKAFAGQAEAGAHAAQAQAAAAgWQAAgVgQAAQgQAAAAAVg");
	this.shape_13.setTransform(201.6,81.3,0.81,0.806);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgVAOIAGgDQAGALALAAQANAAAAgKQAAgJgPAAIgFAAIAAgGIAFAAQANAAAAgJQAAgJgMAAQgKAAgFALIgFgDQAFgPAQAAQAIAAAFAEQAFAEAAAHQAAAKgJADQALAAAAAMQAAAIgGAEQgFAFgKAAQgSAAgEgPg");
	this.shape_14.setTransform(197.3,81.3,0.81,0.806);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAFAcIAAgvIgOAHIgCgGIATgJIAEAAIAAA3g");
	this.shape_15.setTransform(193.8,81.3,0.81,0.806);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAAAcIgggqIAAAqIgHAAIAAg3IAGAAIAhArIAAgrIAGAAIAAA3gAANAOIAAgHIAYAAIAAAHgAAPAAQgEgEAAgGQAAgGAEgEQAEgEAGAAQAHAAAEAEQAEAEAAAGQAAAGgEAEQgEACgHAAQgGAAgEgCgAARgKQAAAIAIAAQAIAAAAgIQAAgIgIAAQgIAAAAAIg");
	this.shape_16.setTransform(186.5,81.3,0.81,0.806);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgRAVQgIgIAAgNQAAgLAIgIQAIgJAMAAQAOAAAHAKIgEAEQgIgHgJAAQgJAAgFAGQgGAGAAAJQAAAKAGAGQAHAGAIAAQALAAAGgIIAEAFQgHAKgOAAQgMAAgJgIg");
	this.shape_17.setTransform(177.9,81.3,0.81,0.806);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgTAVQgIgIgBgNQABgLAIgIQAIgJALAAQAMAAAJAIQAHAJAAALQAAANgHAIQgJAIgMAAQgLAAgIgIgAgOgPQgGAHAAAIQAAAKAGAGQAHAGAHAAQAJAAAGgGQAGgGAAgKQAAgIgGgHQgHgGgIAAQgIAAgGAGg");
	this.shape_18.setTransform(173.1,81.3,0.81,0.806);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgFAGQADAAABgCQACgDAAgBQgFAAAAgFQAAgEAEAAQAGAAAAAHQAAAKgKACg");
	this.shape_19.setTransform(167.5,83.7,0.81,0.806);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAIAcIAAgMIghAAIAAgEIAignIAHAAIAAAlIAKAAIAAAGIgKAAIAAAMgAgPAKIAXAAIAAgag");
	this.shape_20.setTransform(164.6,81.3,0.81,0.806);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgRAUQgGgHAAgNQAAgbAXgBQAYABAAAbQAAAcgYAAQgKAAgHgIgAgQAAQAAAWAQAAQAQAAAAgWQAAgVgQAAQgQAAAAAVg");
	this.shape_21.setTransform(160.3,81.3,0.81,0.806);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgJADIAAgFIATAAIAAAFg");
	this.shape_22.setTransform(156.7,81.8,0.81,0.806);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgNAcIAZgwIggAAIAAgHIApAAIAAAFIgbAyg");
	this.shape_23.setTransform(153.8,81.3,0.81,0.806);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgRAUQgGgHAAgNQAAgMAGgHQAGgJALAAQAYABAAAbQAAAcgYAAQgLAAgGgIgAgQAAQABAWAPAAQAQAAAAgWQAAgVgQAAQgPAAgBAVg");
	this.shape_24.setTransform(149.7,81.3,0.81,0.806);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgVAOIAHgDQAEALAMAAQAMAAAAgKQAAgJgOAAIgFAAIAAgGIAFAAQANAAAAgJQAAgJgLAAQgLAAgEALIgHgDQAGgPAQAAQAIAAAFAEQAGAEAAAHQgBAKgJADQALAAAAAMQAAAIgGAEQgGAFgIAAQgTAAgEgPg");
	this.shape_25.setTransform(145.5,81.3,0.81,0.806);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAFAcIAAgvIgOAHIgCgGIASgJIAFAAIAAA3g");
	this.shape_26.setTransform(142,81.3,0.81,0.806);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAAAcIgggqIAAAqIgHAAIAAg3IAGAAIAhArIAAgrIAGAAIAAA3gAANAOIAAgHIAYAAIAAAHgAAPAAQgEgEAAgGQAAgOAOAAQAHAAAEAEQAEAEAAAGQAAAGgEAEQgEACgHAAQgGAAgEgCgAARgKQAAAIAIAAQAIAAAAgIQAAgIgIAAQgIAAAAAIg");
	this.shape_27.setTransform(134.7,81.3,0.81,0.806);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgQAVQgIgIAAgNQAAgLAHgIQAIgJAMAAQAOAAAIAKIgFAEQgHgHgKAAQgIAAgGAGQgGAGAAAJQAAAKAGAGQAGAGAJAAQALAAAGgIIAEAFQgHAKgOAAQgMAAgIgIg");
	this.shape_28.setTransform(126.1,81.3,0.81,0.806);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgTAVQgJgIABgNQgBgLAJgIQAIgJALAAQAMAAAIAIQAJAJAAALQAAAMgJAJQgIAIgMAAQgLAAgIgIgAgOgPQgGAHAAAIQAAAKAGAGQAHAGAHAAQAJAAAFgGQAHgGgBgKQABgIgHgHQgFgGgJAAQgIAAgGAGg");
	this.shape_29.setTransform(121.3,81.3,0.81,0.806);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgFAGQADAAACgCQABgDgBgBQgEAAAAgFQAAgEAEAAQAGAAAAAHQAAAKgJACg");
	this.shape_30.setTransform(115.7,83.7,0.81,0.806);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgVAOIAGgDQAHALAKAAQAMAAAAgKQAAgJgNAAIgGAAIAAgGIAFAAQANAAAAgJQABgJgMAAQgMAAgEALIgGgDQAGgPAQAAQAJAAAEAEQAGAEAAAHQAAAKgKADQALAAAAAMQAAAIgGAEQgFAFgJAAQgSAAgFgPg");
	this.shape_31.setTransform(112.9,81.3,0.81,0.806);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgRAUQgGgHAAgNQAAgMAGgHQAHgJAKAAQAYABAAAbQAAAcgYAAQgLAAgGgIgAgPAAQAAAWAPAAQAQAAAAgWQAAgVgQAAQgPAAAAAVg");
	this.shape_32.setTransform(108.8,81.3,0.81,0.806);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgJADIAAgFIATAAIAAAFg");
	this.shape_33.setTransform(105.3,81.8,0.81,0.806);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgNAcIAagwIghAAIAAgHIApAAIAAAFIgbAyg");
	this.shape_34.setTransform(102.3,81.3,0.81,0.806);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgRAUQgGgHAAgNQAAgbAXgBQAYABAAAbQAAAcgYAAQgKAAgHgIgAgPAAQAAAWAPAAQAQAAAAgWQAAgVgQAAQgPAAAAAVg");
	this.shape_35.setTransform(98.3,81.3,0.81,0.806);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgVAOIAHgDQAFALALAAQANAAAAgKQAAgJgPAAIgFAAIAAgGIAFAAQAOAAAAgJQgBgJgMAAQgKAAgEALIgGgDQAFgPAQAAQAJAAAEAEQAGAEAAAHQAAAKgKADQALAAAAAMQAAAIgGAEQgFAFgKAAQgRAAgFgPg");
	this.shape_36.setTransform(94,81.3,0.81,0.806);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAFAcIAAgvIgNAHIgDgGIASgJIAFAAIAAA3g");
	this.shape_37.setTransform(90.5,81.3,0.81,0.806);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAAAcIgggqIAAAqIgGAAIAAg3IAFAAIAhArIAAgrIAGAAIAAA3gAAOAOIAAgHIAXAAIAAAHgAAPAAQgEgEAAgGQAAgGAEgEQAEgEAHAAQAFAAAEAEQAEAEAAAGQAAAGgEAEQgEACgFAAQgHAAgEgCgAARgKQAAAIAJAAQAHAAABgIQgBgIgHAAQgJAAAAAIg");
	this.shape_38.setTransform(83.3,81.3,0.81,0.806);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgRAVQgHgIAAgNQAAgLAHgIQAIgJAMAAQAPAAAGAKIgEAEQgIgHgJAAQgIAAgGAGQgGAGAAAJQAAAKAGAGQAGAGAJAAQALAAAGgIIAEAFQgHAKgPAAQgMAAgIgIg");
	this.shape_39.setTransform(74.6,81.3,0.81,0.806);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgTAVQgIgIAAgNQAAgLAIgIQAIgJALAAQAMAAAIAIQAIAJAAALQAAANgIAIQgIAIgMAAQgLAAgIgIgAgOgPQgGAHAAAIQAAAJAGAHQAGAGAIAAQAJAAAGgGQAGgGAAgKQAAgIgGgHQgGgGgJAAQgIAAgGAGg");
	this.shape_40.setTransform(69.8,81.3,0.81,0.806);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgFAGIAFgCQABgDgBgBQgDAAgBgFQABgEADAAQAGAAAAAHQAAAKgJACg");
	this.shape_41.setTransform(64.2,83.7,0.81,0.806);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgNAcIAagwIghAAIAAgHIApAAIAAAFIgbAyg");
	this.shape_42.setTransform(62.1,81.3,0.81,0.806);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgRAUQgGgHAAgNQAAgbAXgBQAYABAAAbQAAAcgYAAQgKAAgHgIgAgPAAQAAAWAPAAQARAAAAgWQAAgVgRAAQgPAAAAAVg");
	this.shape_43.setTransform(58,81.3,0.81,0.806);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgVAOIAGgDQAHALAKAAQANAAAAgKQAAgJgPAAIgFAAIAAgGIAFAAQANAAAAgJQAAgJgMAAQgKAAgFALIgFgDQAFgPAQAAQAIAAAGAEQAFAEAAAHQAAAKgKADQALAAAAAMQAAAIgFAEQgHAFgJAAQgRAAgFgPg");
	this.shape_44.setTransform(53.7,81.3,0.81,0.806);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAFAcIAAgvIgNAHIgDgGIASgJIAFAAIAAA3g");
	this.shape_45.setTransform(50.3,81.3,0.81,0.806);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAAAcIgggqIAAAqIgHAAIAAg3IAGAAIAhArIAAgrIAGAAIAAA3gAANAOIAAgHIAYAAIAAAHgAAPAAQgEgEAAgGQAAgGAEgEQAEgEAHAAQAFAAAFAEQADAEAAAGQAAAGgDAEQgFACgFAAQgHAAgEgCgAASgKQgBAIAJAAQAHAAAAgIQAAgIgHAAQgJAAABAIg");
	this.shape_46.setTransform(43,81.3,0.81,0.806);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AASAcIAAgwIgXAAIAAADQAAAtgQAAIgEAAIAAgHQANACAAgpIAAgJIAmAAIAAA3g");
	this.shape_47.setTransform(256.8,73.6,0.81,0.806);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgQAVQgIgIAAgNQAAgLAHgIQAIgJAMAAQAOAAAIAKIgFAEQgHgHgKAAQgIAAgGAGQgGAGAAAJQAAAKAGAGQAGAGAJAAQALAAAGgIIAEAFQgHAKgOAAQgMAAgIgIg");
	this.shape_48.setTransform(252.8,73.6,0.81,0.806);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgFAGQACAAACgCQACgDAAgBQgFAAAAgFQAAgEAEAAQAGAAAAAHQAAAJgKADg");
	this.shape_49.setTransform(248.1,76,0.81,0.806);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgNAcIAagwIghAAIAAgHIApAAIAAAFIgbAyg");
	this.shape_50.setTransform(246,73.6,0.81,0.806);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgRAVQgGgJAAgMQAAgcAXAAQAYAAAAAcQAAAdgYAAQgKgBgHgHgAgQAAQAAAKAFAGQAEAGAHAAQAQAAAAgWQAAgVgQAAQgQAAAAAVg");
	this.shape_51.setTransform(241.9,73.6,0.81,0.806);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgVAOIAGgDQAGALALAAQAMAAAAgKQAAgJgOAAIgFAAIAAgGIAFAAQANAAAAgJQAAgJgMAAQgLAAgEALIgGgDQAGgPAQAAQATAAgBAPQAAAKgJADQALAAAAAMQAAAIgGAEQgFAFgKAAQgSAAgEgPg");
	this.shape_52.setTransform(237.6,73.6,0.81,0.806);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAFAcIAAgvIgNAHIgDgGIATgJIAEAAIAAA3g");
	this.shape_53.setTransform(234.1,73.6,0.81,0.806);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAAAcIgggqIAAAqIgHAAIAAg3IAGAAIAhAqIAAgqIAGAAIAAA3gAANAOIAAgHIAYAAIAAAHgAAPAAQgEgEAAgGQAAgHAEgDQAEgEAGAAQAHAAAEAEQAEADAAAHQAAAGgEAEQgEACgHABQgGgBgEgCgAARgKQAAAHAIAAQAIAAAAgHQAAgIgIAAQgIAAAAAIg");
	this.shape_54.setTransform(227.6,73.6,0.81,0.806);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAQAcIAAgqIghAqIgGAAIAAg3IAHAAIAAAqIAhgqIAHAAIAAA3g");
	this.shape_55.setTransform(219.4,73.6,0.81,0.806);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgRAVQgHgIAAgNQAAgLAHgIQAIgJAMAAQAPAAAGAKIgEAEQgIgHgJAAQgJAAgFAGQgGAGAAAJQAAAKAGAGQAGAGAJAAQALAAAGgIIAEAFQgIAKgOAAQgMAAgIgIg");
	this.shape_56.setTransform(214.8,73.6,0.81,0.806);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgEAQQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFgAgEgQQAAgEAEAAQAFAAAAAEQAAAGgFgBQgEABAAgGg");
	this.shape_57.setTransform(209.6,74.2,0.81,0.806);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgVAPIAGgDQAGAKAKAAQAHAAAEgEQADgEAAgFQAAgLgPAAQgHAAgFAEIgGgCIAEgbIAiAAIAAAHIgcAAIgCAPQAEgEAHAAQAKAAAGAGQAFAEAAAIQAAAJgGAFQgGAFgJAAQgQAAgGgNg");
	this.shape_58.setTransform(206.4,73.6,0.81,0.806);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAFAcIAAgvIgNAHIgDgGIASgJIAFAAIAAA3g");
	this.shape_59.setTransform(202.9,73.6,0.81,0.806);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgRAVQgGgIAAgNQAAgcAXAAQAYAAAAAcQAAAdgYAAQgLgBgGgHgAgQAAQAAAKAFAGQAEAGAHAAQAQAAAAgWQAAgVgQAAQgQAAAAAVg");
	this.shape_60.setTransform(199.7,73.6,0.81,0.806);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgVAcIAAgFIAMgIQAKgHAEgEQAHgGAAgIQAAgKgLAAQgLAAgEAMIgFgCQADgRARAAQAJAAAFAEQAFAFAAAHQAAAOgWAPIgGAEIAeAAIAAAGg");
	this.shape_61.setTransform(195.5,73.6,0.81,0.806);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgEAAQAAgDAEgBQAFABAAADQAAAEgFAAQgEAAAAgEg");
	this.shape_62.setTransform(192.8,75.5,0.81,0.806);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgVAPIAGgDQAEAKAMAAQAHAAAEgEQADgEAAgFQAAgLgPAAQgHAAgFAEIgGgCIAEgbIAiAAIAAAHIgcAAIgCAPQAEgEAHAAQAKAAAGAGQAFAEAAAIQAAAJgGAFQgGAFgJAAQgQAAgGgNg");
	this.shape_63.setTransform(190,73.6,0.81,0.806);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgRAVQgGgJAAgMQAAgcAXAAQAYAAAAAcQAAAdgYAAQgKgBgHgHgAgQAAQAAAKAFAGQAEAGAHAAQAQAAAAgWQAAgVgQAAQgQAAAAAVg");
	this.shape_64.setTransform(185.8,73.6,0.81,0.806);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgEAAQAAgDAEgBQAFABAAADQAAAEgFAAQgEAAAAgEg");
	this.shape_65.setTransform(182.9,75.5,0.81,0.806);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgVAPIAGgDQAGAKAKAAQAHAAAEgEQADgEAAgFQAAgLgPAAQgHAAgFAEIgGgCIAEgbIAiAAIAAAHIgcAAIgCAPQAEgEAHAAQAKAAAGAGQAFAEAAAIQAAAJgGAFQgGAFgJAAQgQAAgGgNg");
	this.shape_66.setTransform(180.1,73.6,0.81,0.806);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgVAcIAAgFIAMgIQAKgHAEgEQAHgGAAgIQAAgKgLAAQgLAAgEAMIgFgCQACgRASAAQAJAAAFAEQAFAFAAAHQAAAOgWAPIgGAEIAeAAIAAAGg");
	this.shape_67.setTransform(176.1,73.6,0.81,0.806);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgCAVIAAgjIgQAAIAAgGIAlAAIAAAGIgQAAIAAAjg");
	this.shape_68.setTransform(170.6,74.2,0.81,0.806);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgPAPQgGgGAAgJQAAgJAGgFQAGgHAJABQAJgBAHAHQAGAFAAAJQAAAJgGAGQgHAGgJABQgJgBgGgGgAgKgKQgEAEAAAGQAAAHAEAEQAFAEAFAAQAGAAAEgEQAFgFAAgGQAAgGgFgEQgEgFgGABQgGgBgEAFg");
	this.shape_69.setTransform(167.2,74.2,0.81,0.806);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgCAdIAAgHIgBAAQgNAAgIgGQgHgGAAgKQAAgLAIgGQAHgGAOAAIAAgFIAFAAIAAAFQANAAAHAFQAJAHAAALQAAAJgHAHQgIAGgNAAIgBAAIAAAHgAADAPIABAAQAUAAABgPQgBgQgUAAIgBAAgAgYAAQAAAPAVAAIABAAIAAgfQgWAAAAAQg");
	this.shape_70.setTransform(160.4,73.6,0.81,0.806);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgVAcIAAg3IAVAAQAWAAAAARQAAASgWgBIgOAAIAAAVgAgOABIAOAAQAPAAAAgLQAAgKgPAAIgOAAg");
	this.shape_71.setTransform(155.8,73.6,0.81,0.806);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgVAcIAAg3IAnAAIAAAHIggAAIAAAQIAQAAQAUAAAAAPQAAARgWAAgAgOAVIAPAAQAOAAAAgKQgBgKgNABIgPAAg");
	this.shape_72.setTransform(149.5,73.6,0.81,0.806);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AATAhIAAgKIgsAAIAAg3IAHAAIAAAwIAeAAIAAgwIAHAAIAAAwIAIAAIAAARg");
	this.shape_73.setTransform(145.1,74,0.81,0.806);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AANAVIAAgeIgZAeIgGAAIAAgpIAGAAIAAAeIAZgeIAGAAIAAApg");
	this.shape_74.setTransform(138.5,74.2,0.81,0.806);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AAMAVIAAgeIgYAeIgGAAIAAgpIAHAAIAAAeIAYgeIAGAAIAAApg");
	this.shape_75.setTransform(134.6,74.2,0.81,0.806);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgSAMIAGgEQADAIAJgBQALABAAgIQAAgFgIAAIgJAAIAAgFIAJAAQAHAAAAgHQAAgFgKAAQgHAAgFAFIgEgDQAEgIAMAAQARgBAAALQAAAGgFADQAHADAAAGQAAAOgTAAQgMAAgGgKg");
	this.shape_76.setTransform(131,74.2,0.81,0.806);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AAMAVIAAgSIgXAAIAAASIgHAAIAAgpIAHAAIAAARIAXAAIAAgRIAHAAIAAApg");
	this.shape_77.setTransform(127.5,74.2,0.81,0.806);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgNAQQgGgGAAgKQAAgIAFgGQAGgGAJAAQAJAAAFAEQAFAGAAAIIAAAFIggAAQABANANgBQAIAAAEgGIAFAEQgGAJgLAAQgJAAgGgGgAgMgDIAZAAQgBgMgLABQgLgBgCAMg");
	this.shape_78.setTransform(123.7,74.2,0.81,0.806);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAPAaIAAgKIgjAAIAAgpIAHAAIAAAiIAWAAIAAgiIAHAAIAAAiIAFAAIAAARg");
	this.shape_79.setTransform(120,74.6,0.81,0.806);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAMAVIAAgeIgYAeIgGAAIAAgpIAHAAIAAAeIAYgeIAGAAIAAApg");
	this.shape_80.setTransform(116,74.2,0.81,0.806);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AASAcIAAgwIgXAAIAAADQAAAtgQAAIgDAAIAAgHQALACAAgpIAAgJIAnAAIAAA3g");
	this.shape_81.setTransform(111.5,73.6,0.81,0.806);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgEAAQAAgDAEgBQAFABAAADQAAAEgFAAQgEAAAAgEg");
	this.shape_82.setTransform(107.1,75.5,0.81,0.806);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgBANIAKgNIgKgMIADgEIAQAQIAAAAIgPARgAgRANIAMgNIgMgMIAFgEIAOAQIAAAAIgNARg");
	this.shape_83.setTransform(104.7,74.2,0.81,0.806);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgNAQQgGgGAAgKQAAgIAFgGQAGgGAJAAQAJAAAFAEQAFAGAAAIIAAAFIggAAQABANANgBQAIAAAEgGIAFAEQgGAJgLAAQgJAAgGgGgAgMgDIAZAAQgBgMgLABQgLgBgCAMg");
	this.shape_84.setTransform(101.1,74.2,0.81,0.806);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AANAVIAAgeIgZAeIgGAAIAAgpIAGAAIAAAeIAZgeIAGAAIAAApg");
	this.shape_85.setTransform(97.3,74.2,0.81,0.806);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgNAQQgGgGAAgKQAAgIAGgGQAHgGAIAAQAMAAAFAIIgFADQgFgFgHAAQgFgBgEAFQgFAEAAAGQAAAHAFAEQAEAEAGAAQAIAAAEgGIAFAEQgFAIgMABQgJAAgHgGg");
	this.shape_86.setTransform(93.8,74.2,0.81,0.806);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgNASQgEgEAAgFQAAgMATAAIAKABQAAgMgLAAQgGAAgGAEIgDgEQAGgHAJABQARAAAAARIAAAYIgGAAIAAgGQgFAHgJAAQgHAAgEgEgAgKAIQAAAIAKgBQAIABAEgJIAAgEIgJgBQgNAAAAAGg");
	this.shape_87.setTransform(90.1,74.2,0.81,0.806);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgTAVIAAgHQAEAAACgEQAEgGAAgPIAAgJIAdAAIAAApIgHAAIAAgiIgQAAIAAABQAAATgEAIQgEAGgHAAIgBAAg");
	this.shape_88.setTransform(86.5,74.2,0.81,0.806);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgOAVIAAgpIAdAAIAAAGIgWAAIAAAjg");
	this.shape_89.setTransform(83.8,74.2,0.81,0.806);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgPAPQgGgGAAgJQAAgJAGgFQAHgHAIABQAKgBAGAHQAGAFAAAJQAAAJgGAGQgGAGgKABQgIgBgHgGgAgKgKQgEAEAAAGQAAAHAEAEQAEAEAGAAQAGAAAEgEQAFgFAAgGQAAgGgFgEQgEgFgGABQgFgBgFAFg");
	this.shape_90.setTransform(80.2,74.2,0.81,0.806);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgRAVQgHgIAAgNQgBgLAIgIQAIgJAMAAQAPAAAGAKIgEAEQgIgHgJAAQgIAAgGAGQgGAGAAAJQABAKAFAGQAGAGAJAAQALAAAGgIIAEAFQgHAKgOAAQgMAAgJgIg");
	this.shape_91.setTransform(76.2,73.6,0.81,0.806);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgBAAIAAAAIAOgQIAEAEIgLAMIALANIgEAEgAgQAAIAAAAIAOgQIAEAEIgKAMIAKANIgEAEg");
	this.shape_92.setTransform(72.2,74.2,0.81,0.806);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AAOAcIgYgaIgGAGIAAAUIgGAAIAAg3IAGAAIAAAbIAcgbIAKAAIgaAZIAcAeg");
	this.shape_93.setTransform(66.7,73.6,0.81,0.806);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgRAVQgHgIAAgNQAAgLAHgIQAIgJAMAAQAPAAAGAKIgEAEQgIgHgJAAQgJAAgFAGQgGAGAAAJQAAAKAGAGQAGAGAJAAQALAAAGgIIAEAFQgIAKgOAAQgMAAgIgIg");
	this.shape_94.setTransform(62.1,73.6,0.81,0.806);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgBAAIAAAAIAOgQIAEAEIgLAMIALANIgEAEgAgQAAIAAAAIAOgQIAEAEIgKAMIAKANIgEAEg");
	this.shape_95.setTransform(58,74.2,0.81,0.806);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgTAVQgJgJAAgMQAAgLAJgIQAIgJALAAQAMAAAJAIQAHAJABALQgBANgHAIQgJAIgMAAQgLAAgIgIgAgNgPQgHAHAAAIQAAAJAHAHQAFAGAIAAQAJAAAGgGQAGgGAAgKQAAgIgGgHQgGgGgJAAQgIAAgFAGg");
	this.shape_96.setTransform(51.9,73.6,0.81,0.806);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgTAVQgIgIAAgNQAAgLAIgIQAIgJALAAQAMAAAIAIQAJAJgBALQABANgJAIQgIAIgMAAQgLAAgIgIgAgOgPQgGAHAAAIQAAAKAGAGQAGAGAIAAQAJAAAGgGQAGgGAAgKQAAgIgGgHQgHgGgIAAQgIAAgGAGg");
	this.shape_97.setTransform(46.8,73.6,0.81,0.806);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgTAVQgJgIAAgNQAAgLAJgIQAIgJALAAQAMAAAIAIQAJAJAAALQAAAMgJAJQgIAIgMAAQgLAAgIgIgAgOgPQgGAHAAAIQAAAKAGAGQAGAGAIAAQAJAAAFgGQAHgGAAgKQAAgIgHgHQgFgGgJAAQgIAAgGAGg");
	this.shape_98.setTransform(41.7,73.6,0.81,0.806);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AkECZQhAhAAAhZQAAhZBAhAQA/g/BaAAQA6AAAxAdQAygdA6AAQBaAAA/BAQBABAAABYQAABZhABAQg/BAhagBQg5AAgzgcQgxAdg6AAQhaAAg/hAgACZhdQAbAbAAAmQAAAPgFANQgYBQhaBHQAZAIAYAAQBCAAAuguQAugwAAhBQAAhBguguQgugvhCAAQggAAgdAMQgOAFgWAMQgpAYgmAmQg2A4AAAlIAAACQAAAOAKAKQAKALAPAAQAVAAAJgTIA+h3IAAAAQANgVAVgMQAVgMAZAAQAmAAAcAbgAjbhvQgvAuABBBQgBBBAvAwQAuAuBCAAQAgAAAcgMIABAAIAjgRQAqgZAlgmQA2g3AAgmIAAgCQAAgOgKgLQgKgJgPgBQgVABgKATIAAAAIgBACIg7B0QgNAVgWAMQgWANgYAAQgmAAgcgbQgbgbAAgnQAAgOAEgOIAAAAQAYhPBchHQgYgIgZAAQhCAAguAvg");
	this.shape_99.setTransform(83.1,33,0.666,0.666);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgcAiQgNgOAAgUQAAgTAMgNQANgNARAAQATAAALAOQALANAAATIAAAEIhFAAQABAOAJAIQAJAIALAAQAPAAANgNIAIAIQgQAQgVAAQgRAAgNgMgAAdgEQgCgNgHgIQgHgJgNAAQgKAAgIAIQgIAJgBANIA4AAIAAAAg");
	this.shape_100.setTransform(237.1,50.7,0.666,0.666);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AAaAsIAAhFIg0BFIgMAAIAAhXIANAAIAABFIAzhFIANAAIAABXg");
	this.shape_101.setTransform(230.1,50.7,0.666,0.666);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AAaAsIAAgnIgyAAIAAAnIgOAAIAAhXIAOAAIAAAmIAyAAIAAgmIANAAIAABXg");
	this.shape_102.setTransform(223,50.7,0.666,0.666);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgbAnQgLgIAAgNQAAgOALgGQAKgIARAAQAMAAAOAEIAAgDQAAgYgaAAQgNAAgNAHIgEgLQAQgIAPAAQATAAAJAKQAKAKAAAQIAAA1IgNAAIAAgNQgMAPgTAAQgOAAgIgHgAgZASQABAIAGAFQAGAEAKAAQALAAAIgGQAJgHAAgKIAAgJQgPgDgLAAQgYAAgBASg");
	this.shape_103.setTransform(215.9,50.7,0.666,0.666);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AglAsIAAhXIApAAQAOAAAIAGQAHAGAAAKQAAANgOAHQATAEAAARQAAALgJAHQgJAGgOAAgAgYAhIAcAAQAVAAAAgPQAAgOgWAAIgbAAgAgYgFIAaAAQASAAAAgPQAAgMgSAAIgaAAg");
	this.shape_104.setTransform(209.7,50.7,0.666,0.666);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AggAhQgNgOAAgTQAAgSANgOQAOgNASAAQATAAAOANQANAOAAASQAAATgNANQgNAOgUAAQgTAAgNgNgAgXgYQgJAKAAAOQAAAOAKAKQAJAKANAAQAOAAAKgKQAIgKABgOQAAgOgKgKQgKgKgNAAQgOAAgJAKg");
	this.shape_105.setTransform(202.5,50.7,0.666,0.666);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AAbAsIgbgkIgbAkIgOAAIAigsIghgrIAPAAIAZAiIAagiIAPAAIgiArIAjAsg");
	this.shape_106.setTransform(195.9,50.7,0.666,0.666);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgcAnQgKgIAAgNQAAgOAKgGQALgIARAAQAMAAAOAEIAAgDQAAgYgaAAQgNAAgNAHIgEgLQAQgIAPAAQATAAAKAKQAJAJAAARIAAA1IgNAAIAAgNQgMAPgTAAQgNAAgKgHgAgSAFQgHAEAAAJQAAAIAHAFQAGAEAKAAQALAAAIgGQAJgHAAgKIAAgJQgPgDgLAAQgLAAgHAFg");
	this.shape_107.setTransform(189.2,50.7,0.666,0.666);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgrA7IAAhzIAMAAIAAASQANgUAUAAQARAAAMAMQANAOABAUQgBAUgNANQgMAMgRAAQgUAAgNgSIAAAsgAgVgkQgKAJAAAPQAAAOAKAKQAJAKAMAAQANAAAJgJQAJgKAAgPQAAgPgJgKQgJgJgNAAQgMAAgJAKg");
	this.shape_108.setTransform(182.2,51.5,0.666,0.666);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgGAsIAAhMIgfAAIAAgLIBLAAIAAALIgfAAIAABMg");
	this.shape_109.setTransform(175.4,50.7,0.666,0.666);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgbAhQgNgOAAgTQAAgSANgOQANgNATAAQAUAAAPAQIgIAIQgNgNgOAAQgNAAgJAKQgJAKAAAOQAAAOAJAKQAJAKANAAQAPAAAMgNIAJAIQgQARgUAAQgTAAgNgNg");
	this.shape_110.setTransform(169.4,50.7,0.666,0.666);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AhHBYQglgkAAg0QAAgzAlgkQAlglAyAAQAyAAAkAjIgeAqIgCACQgUgWgfAAQgbAAgUAUQgUAUAAAbQAAAcAUAVQAUATAbAAQAZAAAUgRIAAAAIAFgEIAoAlQgmApg3AAQgyAAglglg");
	this.shape_111.setTransform(197.7,33.1,0.666,0.666);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AA2BsQgegTgQgfQgRAXgWAQQgRANgWAIQgYAIgVAAIgPAAQg0gEgigoQgignADgzQAEg1AogiQAngiA1AEQAuADAhAiIgkAyQgSgYgegDQgbgCgVASQgUASgCAbQgCAcASAUQATAVAhAAQAuAAAng3QAWgcAcg1QASgZAbgOQAcgPAgAAQA0AAAlAlQAlAlAAA0QAAA0glAlQglAlg0AAQglAAgfgTgABVg1QgQALgIASQgFAMAAANQAAANAFAMQAIASAQALQAQALAVAAQAIAAALgDQAUgGANgRQANgSAAgVQAAgVgNgSQgNgRgUgGQgLgDgIAAQgVAAgQALg");
	this.shape_112.setTransform(125.3,33.1,0.666,0.666);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AhjB5IAAjxIDGAAIAAA5IiKAAIAAApIB+AAIAAAuIh+AAIAAAuICMAAIAAAzg");
	this.shape_113.setTransform(233.2,33.1,0.666,0.666);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AA1B5IAAiMIhrCMIg7AAIAAjxIA9AAIAACPIBsiPIA5AAIAADxg");
	this.shape_114.setTransform(215.2,33.1,0.666,0.666);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("ABCB6IgTgtIheAAIgTAtIhBAAIBmjzIA7AAIBlDzgAAdAeIgdhLIgeBLIA7AAg");
	this.shape_115.setTransform(181.6,33,0.666,0.666);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AhWB5IAAjyICtAAIAAA2IhvAAIAAC8g");
	this.shape_116.setTransform(149.8,33.1,0.666,0.666);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AA5B5IAAi9Ig+AAIAAAQQAABigzAvQgcAagiACIAAg1QAggKAMgjQAMgjAAhPIAAgeIC1AAIAADyg");
	this.shape_117.setTransform(163.2,33.1,0.666,0.666);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#EA600A").s().p("A3oKYIAA0vMAvSAAAIAAUvg");
	this.shape_118.setTransform(152,46,0.991,0.678,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fg, new cjs.Rectangle(2,1,300.1,90), null);


(lib.cloud = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA600A").s().p("AgDBpIAAgMIgMAGQgEACgBgDIgBgCQgCgEAEgBIAQgJIAAgPIgXAMQgDABgCgDIgBgCQgBgDADgCIAbgOIAAgPIgHADQgEACgBgDIgBgCQgCgEAEgBIALgGIAAgLIgLgGIgJAFIAAANQAAABAAAAQAAAAAAABQAAAAAAABQAAAAgBAAIgCABIgCABQgEAAAAgEIgBgIIgNAHIACAfQAAAEgEAAIgCAAQgEAAAAgEIgBgZIgOAHIABATQAAAEgDAAIgCAAQgEAAAAgDIgBgOIgKAGQgEACgBgEQgDgDAEgCIAKgGIgLgIQgEgBACgEIABgBQACgEAEACIAPAKIAOgHIgWgOQgDgDACgDIABgBIACgCIADABIAaAQIANgHIgGgFQgEgBACgEIABgCQACgDAEACIALAHIAJgFIAAgLIAAAAIgJgFIgLAHQgDACgDgDIgBgCQgCgDADgCIAHgFIgNgHIgaAQQgDADgCgEIgBgBQgCgDADgDIAWgOIgOgHIgPAKQgEABgCgCIgBgCQgCgDADgCIAMgIIgKgGQgEgBACgEQACgEAEACIAKAGIABgOQAAgDAEAAIABAAQAEAAAAAEIgBATIAOAHIABgZQABgEADAAIACAAQAEAAAAAEIgCAfIANAHIABgIQAAgEAEABIABAAQAEAAAAAEIAAANIAJAFIALgGIAAgLIgLgGQgEgCACgDIABgCQABgDAEACIAHADIAAgPIgbgOQgEgBACgEIABgCQACgEADACIAXAMIAAgPIgQgJQgEgCACgDIABgCQABgDAEACIAMAGIAAgMQAAgEADAAQAEAAAAAEIAAAMIANgGQADgCACADIABACQACADgEACIgRAJIAAAPIAXgMQAEgCACAEIAAACQACAEgDABIgcAOIAAAPIAHgDQAEgCACADIABACQACADgEACIgMAGIAAALIALAGIAJgFIAAgNQAAgEAEAAIABAAQAEgBAAAEIABAIIANgHIgBgfQgBgEAEAAIACAAQAEAAAAAEIABAZIAOgHIgBgTQAAgEAEAAIABAAQAEAAAAADIABAOIAKgGQAEgCACAEQACAEgEABIgKAGIAMAIQADACgCADIgBACQgDADgCgCIgQgKIgOAHIAWAOQAEAEgDACIgBABQgCAEgDgDIgagQIgNAHIAHAFQADACgCADIgBACQgDADgDgCIgKgHIgKAFIAAALIAKAFIALgHQADgCACADIABACQACAEgDABIgHAFIANAHIAagQQADgDADAEIABABQACADgEADIgVAOIANAHIAQgKQAEgCABAEIABABQACAEgDABIgMAIIAKAGQAEACgCADQgCAEgEgCIgKgGIAAAOQAAADgFAAIgBAAQgFAAABgEIABgTIgNgHIgCAZQAAAEgEAAIgBAAQgEAAAAgEIABgfIgNgHIAAAIQAAAEgFAAIgBgBIgDgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBIABgNIgKgFIgLAGIAAALIAMAGQADACgBADIgBACQgBADgEgCIgIgDIAAAPIAcAOQADACgBADIgBACQgCAEgEgCIgXgMIAAAPIARAJQAEABgCAEIgBACQgBADgEgCIgNgGIAAAMQAAAEgEAAQgDAAAAgEgAgKgFIAAAMIAKAGIALgHIAAgMIgLgGg");
	this.shape.setTransform(47.6,52.7,0.62,0.62);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EA600A").s().p("AgBBJIAAgJIgJAFQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAgBIgBAAQAAgBAAAAQAAgBAAgBQABAAAAAAQAAgBABAAIAMgGIAAgLIgQAIQgBABAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAIAAgBQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBIAUgJIAAgLIgGADQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBgBIAAgBQAAAAAAgBQgBAAABgBQAAAAAAAAQABgBABAAIAIgEIAAgIIgIgEIgHADIAAAJQAAABAAABQAAAAAAABQAAAAgBAAQAAABgBAAIgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIgBgFIgJAEIABAWQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAIgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAIgBgSIgKAFIACANQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgBABQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIgBgJIgHADQgBABAAAAQgBABAAgBQgBAAAAAAQAAgBgBgBIAAgBIACgCIAGgFIgIgEQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAABABAAIALAHIAJgGIgPgJQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgBQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABIASALIAJgGIgFgCQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIABAAQAAgBABAAQAAgBAAAAQABAAAAAAQABAAABABIAIAFIAGgEIAAgHIgBAAIgGgEIgHAFQgBAAAAABQgBAAAAAAQgBAAAAgBQgBAAgBAAIAAgCQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBIAFgCIgJgGIgSAMQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBgBIAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAIAPgJIgKgGIgKAHQgBAAAAABQgBAAgBAAQAAAAAAgBQgBAAAAAAIgBgBQAAgBAAAAQAAgBAAAAQAAgBAAgBQABAAAAgBIAIgEIgHgFQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABABIAHADIABgJQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAABIABAAQABAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIgBANIAKAFIABgSQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAIAAAAQABAAABAAQAAAAABABQAAAAAAABQAAAAAAABIgBAWIAJAEIAAgFQABgBAAAAQAAgBABAAQAAAAABAAQAAgBAAAAIACAAQAAAAABABQAAAAABAAQAAABAAAAQAAABAAABIAAAJIAHADIAIgFIAAgGIgJgFQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIAAgBQABgBAAgBQABAAAAAAQABAAAAAAQABAAAAABIAGACIAAgLIgUgJQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAABABIAQAIIAAgLIgNgGQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIABgCQAAAAABgBQAAAAAAAAQABgBAAABQABAAAAAAIAKAFIAAgIQAAgBAAgBQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAABIAAAIIAIgFQABAAABAAQAAgBABABQAAAAAAAAQABABAAAAIABACIAAACIgCABIgLAGIAAALIAQgIQABgBAAAAQABAAAAAAQABAAAAABQAAAAAAABIABAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABIgTAJIAAALIAFgCQABgBAAAAQABgBAAAAQABABAAAAQAAABAAABIABABQAAAAABABQAAAAAAABQgBAAAAAAQAAABgBAAIgIAFIAAAGIAHAFIAHgDIAAgJQAAgBAAgBQAAAAAAgBQAAAAABAAQAAgBABAAIABAAQABAAAAABQABAAAAAAQABAAAAABQAAAAAAABIAAAFIAJgEIgBgWQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABAAIABAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAIABASIAJgFIgBgNQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAAAIACAAQAAgBABAAQAAAAABABQAAAAAAABQABAAAAABIAAAJIAHgDQABgBAAAAQABgBAAABQABAAAAAAQAAABAAABQABAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAIgHAFIAIAEQABABAAAAQABABAAAAQAAABAAAAQAAABgBABIAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBgBAAAAIgLgHIgJAGIAPAJQABAAAAABQAAAAAAABQAAAAAAABQAAABgBAAIAAABQAAABgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAIgSgMIgKAGIAFACQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIAAACQAAAAgBAAQAAABAAAAQgBAAgBAAQAAgBgBAAIgIgFIgGAEIAAAHIAAAAIAHAEIAIgFQAAAAABgBQAAAAAAAAQABAAAAABQABAAAAABIABAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABIgEACIAJAGIASgLQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABIABABQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgPAJIAKAGIAKgHQABAAAAgBQABAAAAAAQABABAAAAQABAAAAABIAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAAgBABIgJAEIAIAFQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBgBIgHgDIAAAJQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAIgCgBQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBIAAgNIgJgFIgBASQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAAAIgBAAQgBAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBIABgWIgJgEIAAAFQAAABAAAAQAAABgBAAQAAABAAAAQgBAAgBAAIgBAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBIAAgJIgHgDIgHAEIAAAIIAIAEIABACQABAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgBABQAAABAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgFgDIAAALIATAJQABABAAAAQAAABABAAQAAABAAAAQgBABAAABIgBABQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBgBIgQgIIAAALIALAGQABAAABABQAAAAAAAAQAAABAAABQAAAAAAABIAAAAQgBABAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAIgIgFIAAAJQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAgAgHgEIAAAIIAHAFIAIgFIAAgIIgIgEg");
	this.shape_1.setTransform(18.6,47.3,0.62,0.62);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EA600A").s().p("AgBBJIAAgIIgJADQgBABAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBIAAAAQgBgBAAgBQAAAAAAgBQABAAAAAAQAAgBABAAIAMgGIAAgLIgQAJQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBIgBgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAABgBIATgJIAAgLIgFACQgBABgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgBgBQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABgBIAIgDIAAgIIgIgEIgHAEIABAIQAAABgBABQAAAAAAABQAAAAgBAAQAAAAgBAAIgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAgBIAAgGIgJAFIABAWQAAABgBAAQAAAAAAABQAAAAgBAAQAAABgBAAIgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIgBgSIgJAFIABANQAAABgBABQAAAAAAABQgBAAAAAAQgBABAAAAIgBAAQgBAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIgBgKIgHAFQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAAAABgBQAAAAABgBIAHgDIgIgGQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBABAAIAAgBQABgBAAAAQABgBAAAAQABAAAAAAQABABAAAAIALAHIAJgFIgPgKQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBIAAgBQAAgBABAAQAAAAAAAAQABgBAAABQABAAABAAIASALIAJgEIgFgDQAAgBgBgBQAAAAAAgBQAAAAAAgBQAAAAABgBIAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABABIAIAEIAGgDIAAgHIAAAAIgHgEIgHAFQgBABAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBIgBgBQAAgBAAAAQgBgBABAAQAAgBAAAAQAAAAABAAIAFgEIgJgFIgSAMQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIgBgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAPgKIgJgFIgLAHQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBAAAAgBIAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAIAIgGIgHgEQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAIAHAFIABgKQAAgBAAgBQAAAAAAAAQABgBAAAAQABAAABAAIABAAQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABIAAANIAJAGIABgSQAAgBAAgBQAAAAABAAQAAgBABAAQAAAAABAAIABAAQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABIgBAVIAJAGIAAgGQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAIABABQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABIgBAJIAHAEIAIgFIAAgHIgJgEQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIABgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAIAFACIAAgKIgTgKQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIABgBQAAgBAAgBQABAAAAAAQABAAAAAAQABAAABABIAQAHIAAgKIgMgGQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBIAAgBQAAAAABgBQAAAAAAAAQABAAAAAAQABAAABAAIAJAEIAAgIQAAgBAAAAQAAgBAAAAQABAAAAAAQAAgBAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAAAABIAAAIIAJgEQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAIABABQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgMAGIAAAKIAQgHQABgBAAAAQABgBAAAAQABABAAAAQAAABABABIAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAIgTAKIAAAKIAFgCQABAAAAAAQABgBAAABQABAAAAAAQAAABABAAIAAABQABABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgIAEIAAAHIAIAFIAGgEIAAgJQAAgBAAAAQAAgBAAAAQABAAAAAAQAAAAABAAIABgBQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABIABAGIAJgGIgBgVQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAIABAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAABIABASIAKgGIgBgNQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAABAAIABAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAABIAAAKIAHgFQABAAAAAAQABgBAAABQABAAAAAAQAAABABAAIAAADIgBABIgHAEIAIAGIABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAIgBABQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgLgHIgJAFIAPAKQABABAAAAQAAAAAAABQAAAAAAABQAAAAAAABIgBABQAAAAAAABQgBAAAAAAQgBABAAgBQgBAAAAAAIgSgMIgKAFIAFAEQABAAAAAAQAAABAAAAQABABgBAAQAAABAAAAIgBABQAAABgBAAQAAABAAAAQgBAAgBAAQAAAAgBgBIgHgFIgHAEIAAAHIABAAIAGADIAIgEQAAAAABgBQAAAAABAAQAAAAABABQAAAAABAAIAAABQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABIgEADIAJAEIASgLQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAIAAABQAAABABAAQAAABAAAAQgBABAAAAQAAAAgBABIgPAKIAKAFIAKgHQABAAAAgBQABAAAAAAQABAAAAABQABAAAAABIABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgIAGIAHADQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgHgFIAAAKQAAABgBAAQAAABAAAAQgBAAAAAAQgBABAAAAIgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAgBIABgNIgKgFIAAASQgBABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAIgBAAQgBAAgBgBQAAAAgBAAQAAgBAAAAQAAAAAAgBIABgWIgJgFIgBAGQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgCAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAgBIAAgIIgGgEIgIAEIAAAIIAIADQABABAAAAQAAABABAAQAAABAAAAQgBABAAABIAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBgBIgFgCIAAALIATAJIACACQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAIAAABQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgQgJIAAALIAMAGQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAABIAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAAAgBIgJgDIAAAIQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAgAgHgEIAAAIIAHAFIAIgFIAAgIIgIgEg");
	this.shape_2.setTransform(76.9,49.1,0.62,0.62);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EA600A").s().p("AgBBJIAAgIIgJAEQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBgBIgBgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAIAMgGIAAgKIgQAIQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBIgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAABAAIATgKIAAgKIgGACQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAIgBgBQAAgBAAgBQgBAAABgBQAAAAAAAAQABgBABAAIAIgEIAAgHIgIgFIgHAEIAAAJQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAIgBAAQgBABAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIgBgGIgJAGIABAVQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAIgCAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBIgBgSIgJAGIAAANQAAABAAAAQAAAAAAABQgBAAAAAAQgBABgBAAIgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBIAAgKIgHAFQgBAAAAAAQgBABAAAAQgBgBAAAAQAAgBAAAAIgBgDIACgBIAHgEIgIgGQgBAAgBAAQAAgBAAAAQAAgBAAAAQAAgBABAAIAAgBQAAgBABAAQAAAAABgBQAAAAABAAQAAABABAAIALAHIAJgFIgPgKQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIABgBQAAgBABAAQAAAAABAAQAAAAABAAQAAAAAAAAIASAMIAKgFIgFgEQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIABAAQAAgBABAAQAAgBAAAAQABAAAAAAQABAAAAABIAIAFIAHgEIAAAAIAAgHIAAAAIgHgDIgIAEQAAAAAAABQgBAAAAAAQgBAAgBgBQAAAAgBgBIAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAIAEgEIgJgEIgSALQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAIgBgBQgBgBAAAAQAAgBAAAAQAAAAABgBQAAAAABgBIAPgKIgKgFIgLAHQAAABAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBIAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAIAIgGIgHgDQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAIAHAFIAAgKQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAAAIABAAQABAAABABQAAAAAAAAQABABAAAAQAAABAAABIAAAMIAJAGIABgSQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAIABAAQABAAABAAQAAAAABABQAAAAAAABQAAAAAAABIgBAVIAJAGIAAgGQABgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAIABAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAIAAAJIAHAEIAHgEIAAgIIgIgEQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAgBIABgBQAAAAAAgBQAAAAABgBQAAAAABABQAAAAABAAIAFADIAAgLIgTgKQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAgBAAAAIABgBQAAgBAAAAQABAAAAgBQABAAAAAAQABAAABAAIAPAJIAAgLIgMgGQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBIABgBQAAAAABgBQAAAAAAAAQABgBAAABQABAAABAAIAIAEIAAgIQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAIAAAIIAIgEQABAAABAAQAAgBABABQAAAAAAAAQABABAAAAIABABQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgMAGIAAALIAPgJQABAAABAAQAAAAABAAQAAABABAAQAAAAABABIAAABQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAAAIgTAKIAAALIAFgDQABAAAAAAQABgBAAAAQABABAAAAQAAABAAAAIABABQAAABAAABQAAAAAAABQAAAAAAAAQAAABgBAAIgIAEIAAAIIAHAEIAHgEIAAgJQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIABAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAABIABAGIAJgGIgBgVQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAIABAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABIABASIAJgGIgBgMQAAgBABgBQAAAAAAgBQABAAAAAAQABgBABAAIABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABIAAAKIAIgFQABAAAAAAQABgBAAAAQABABAAAAQAAABAAAAQABABAAABQAAAAAAABQAAAAgBABQAAAAgBABIgHADIAIAGQABAAAAAAQABABAAAAQAAABAAAAQAAABgBAAIAAABQAAABgBAAQAAABgBAAQAAAAgBAAQgBgBAAAAIgLgHIgJAFIAPAKQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgSgLIgJAEIAFAEQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAIgBABQAAABgBAAQAAABgBAAQAAAAgBAAQgBgBAAAAIgIgEIgGADIAAAHIAAAAIAHAEIAHgFQABgBABAAQAAAAABAAQAAAAAAABQABAAAAABIABAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAAAIgEAEIAIAFIASgMQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABIABABQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgPAKIAJAFIALgHQABAAAAgBQABAAAAAAQABABAAAAQABAAAAABIAAABQABAAAAABQAAAAAAABQAAAAAAABQgBAAgBAAIgIAGIAHAEIACABQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBgBQAAAAgBAAIgHgFIgBAKQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAIgBAAQgBAAgBgBQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgNIgJgGIgBASQAAABAAABQAAAAgBAAQAAABAAAAQgBAAgBAAIgBAAQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgVIgJgGIgBAGQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBgBIgBAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgJIgHgEIgHAFIAAAHIAIAEIABABQABABAAAAQAAABAAAAQAAAAgBAAQAAAAAAABIgBABQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgFgCIAAAKIATAKQABAAAAAAQAAABAAAAQABABgBAAQAAABAAAAIAAABQgBABAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAIgQgIIAAAKIAMAGQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABIgBABQAAABgBAAQAAAAAAAAQgBAAAAAAQgBAAgBAAIgIgEIAAAIQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAgAgHgEIAAAIIAHAFIAIgFIAAgIIgIgEg");
	this.shape_3.setTransform(93.8,4.7,0.62,0.62);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EA600A").s().p("AgdAPQgHAAgDgEQgFgFAAgGQAAgFAFgFQADgEAHAAIA6AAQAHAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgHAAg");
	this.shape_4.setTransform(78.3,32.4,0.62,0.62);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EA600A").s().p("AgbAPQgGAAgEgFQgFgEABgGQgBgGAFgDQAEgFAGAAIA2AAQAHAAAEAFQAEADAAAGQAAAGgEAEQgEAFgHAAg");
	this.shape_5.setTransform(52.4,26.8,0.62,0.62);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EA600A").s().p("AjYAPQgHAAgEgFQgEgEAAgGQAAgGAEgDQAEgFAHAAIGxAAQAHAAAEAFQAEADAAAGQAAAGgEAEQgEAFgHAAg");
	this.shape_6.setTransform(72.9,26.8,0.62,0.62);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EA600A").s().p("An/APQgGAAgEgEQgEgFAAgGQAAgFAEgFQAEgEAGAAIP+AAQAGAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgGAAg");
	this.shape_7.setTransform(40.1,32.4,0.62,0.62);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EA600A").s().p("ACjCxQgFgDgBgGQgBgGADgFQAkgyAAg/QAAhQg5g4Qg5g5hRAAQg7gBgxAhQgwAhgXA2QgPAiAAAoIAAAAQAAAHgEAEQgFAEgGAAQgGAAgFgEQgEgEAAgHQAAgsASgqQAag+A3glQA5gnBEAAQBdAABCBDQBCBBAABcQAABIgpA6QgFAHgHgBQgFAAgEgDg");
	this.shape_8.setTransform(55.7,16.6,0.62,0.62);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EA600A").s().p("Ak0CjQgFgEAAgGQAAhPAkhGQAphNBLguQBNgwBaAAQBsABBWBBQBUBAAdBkQACAGgDAFQgDAGgGABQgGACgFgDQgGgDgCgGQgahahNg6QhNg8hiAAQhRAAhGAsQhEAqglBFQghA+AABJQAAAGgEAEQgFAFgGAAQgGAAgEgFg");
	this.shape_9.setTransform(30.5,4,0.62,0.62);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EA600A").s().p("AhnCvQhIhIAAhnQAAhlBIhIQBIhJBmAAQAyAAAuATQAGADACAGQADAFgDAGQgCAFgGADQgGADgFgDQgogRgtAAQhZAAhAA/Qg/BAgBBZQABBaA/BAQBABABZgBQAGAAAFAFQAEAFAAAFQAAAHgEAEQgFAEgGABQhmAAhIhJg");
	this.shape_10.setTransform(4,17.9,0.62,0.62);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cloud, new cjs.Rectangle(-6.9,-6.4,105,65.9), null);


(lib.Image_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Image_15();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.926,0.926);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image_14, new cjs.Rectangle(0,0,92.6,92.6), null);


(lib.Group_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_12, null, null);


(lib.Group_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_4_1, null, null);


(lib.ClipGroup_174 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhmiJIC9gKIAQEdIi9AKg");
	mask.setTransform(10.3,15.3);

	// Слой 3
	this.instance = new lib.Image_33();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.48,0.48);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_174, new cjs.Rectangle(0.1,0.5,20.6,29.6), null);


(lib.ClipGroup_170 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgPAgIgZg7IBRgEIgTA9IglACg");
	mask.setTransform(4.1,3.4);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#622F25","#A1837D","#E4DCDA","#FFFFFF","#FFFFFF"],[0,0.369,0.784,0.973,1],-4,0.2,4.1,-0.2).s().p("AgpgcIBQgFIADA+IhQAFg");
	this.shape.setTransform(4.2,3.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_170, new cjs.Rectangle(0,0.2,8.2,6.5), null);


(lib.ClipGroup_168 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Amaj1IKQilIClKQIqQClg");
	mask.setTransform(41.1,41.1);

	// Слой 3
	this.instance = new lib.Image_32();
	this.instance.parent = this;
	this.instance.setTransform(0,16.5,0.196,0.196,-14.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_168, new cjs.Rectangle(0,0,82.2,82.2), null);


(lib.ClipGroup_165 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcA9IgbhpQAMgNATgEQAZgHAXAOQAWANAHAaQAHAZgOAXQgOAXgaAGQgHACgIAAQgJAAgKgDg");
	mask.setTransform(10.3,11.2);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F4E0CA","#F4E0CA","#EFDBC4","#E0CCB2","#DBC6AB"],[0,0.027,0.376,0.855,1],-3.4,-1.8,4.5,2.3).s().p("AhrAjIBLiPICMBKIhLCOg");
	this.shape.setTransform(10.8,10.9);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_165, new cjs.Rectangle(4.7,4.8,11.1,12.8), null);


(lib.ClipGroup_164 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgsgHIBQgUIAJAjIhQAUg");
	mask.setTransform(4.8,3.1);

	// Слой 3
	this.instance = new lib.Image_31();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.48,0.48);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_164, new cjs.Rectangle(0.4,0.3,9,5.6), null);


(lib.ClipGroup_162 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Amaj1IKQilIClKQIqQClg");
	mask.setTransform(41.1,41.1);

	// Слой 3
	this.instance = new lib.Image_30();
	this.instance.parent = this;
	this.instance.setTransform(0,16.5,0.196,0.196,-14.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_162, new cjs.Rectangle(0,0,82.2,82.2), null);


(lib.ClipGroup_154 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhiihICzgKIASFOIizAJg");
	mask.setTransform(10.2,17.4);

	// Слой 3
	this.instance = new lib.Image_28();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.48,0.48);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_154, new cjs.Rectangle(0.3,0.2,19.8,34.5), null);


(lib.ClipGroup_150 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgklYIAjgCIAlKzIgjACg");
	mask.setTransform(3.8,34.8);

	// Слой 3
	this.instance = new lib.Image_27();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.48,0.48);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_150, new cjs.Rectangle(0.1,0.1,7.3,69.4), null);


(lib.ClipGroup_85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiyEXQjYirg/mGQgMhMAygwQAsgrBDgBQAxAAAkAbQAnAcAJA1QAeFSClCHQCOByErACIgBDLQmpgCjVipg");
	mask.setTransform(92.1,91.4);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D64C15","#E4580E","#EA5D0B"],[0,0.522,1],-19.9,22.9,-1.9,2.2).s().p("AuRA+INSvPIPRNUItSPPg");
	this.shape.setTransform(91.4,91.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_85, new cjs.Rectangle(46.1,46.4,92.1,90.1), null);


(lib.ClipGroup_84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AliFfIAAq9ILFAAIAAK9g");
	mask.setTransform(35.5,35.4);

	// Слой 3
	this.instance = new lib.Image_13();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.48,0.48);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_84, new cjs.Rectangle(0,0.4,70.9,70.2), null);


(lib.ClipGroup_82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiJDLIAAmVIETAAIAAGVg");
	mask.setTransform(14.2,20.4);

	// Слой 3
	this.instance = new lib.Image_12();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.48,0.48);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_82, new cjs.Rectangle(0.4,0.1,27.6,40.7), null);


(lib.ClipGroup_78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAGA0Ig5g+IArgUQAdgNAZgIIAGBUIguATg");
	mask.setTransform(8.9,9);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#622F25","#A1837D","#E4DCDA","#FFFFFF","#FFFFFF"],[0,0.369,0.784,0.973,1],-3.9,1.7,5.8,-2.4).s().p("AhYgjIB8g2IA1B9Ih8A2g");
	this.shape.setTransform(8.9,9);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_78, new cjs.Rectangle(3.8,3.8,10.4,10.4), null);


(lib.ClipGroup_70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhKAYIAAgvICVAAIAAAvg");
	mask.setTransform(7.6,2.7);

	// Слой 3
	this.instance = new lib.Image_11();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.48,0.48);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_70, new cjs.Rectangle(0.1,0.3,15,4.8), null);


(lib.ClipGroup_64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag6BBQgJgCgFgHIgDgFQgFgIACgJQACgJAHgFIB6hVIAbAqIh6BVQgGAEgGAAIgEgBg");
	mask.setTransform(9,7.6);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DBC7AC","#E0CCB2","#EFDBC4","#F4E1CA","#F4E1CA"],[0,0.122,0.616,0.973,1],6.5,-0.3,-1.2,0.1).s().p("AhYhBICpgLIAICPIioAKg");
	this.shape.setTransform(8.9,7.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_64, new cjs.Rectangle(1.1,1,15.9,13.2), null);


(lib.ClipGroup_63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhcDYIAAmuIC5AAIAAGug");
	mask.setTransform(9.5,21.7);

	// Слой 3
	this.instance = new lib.Image_10();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.48,0.48);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_63, new cjs.Rectangle(0.2,0.2,18.7,43.1), null);


(lib.ClipGroup_59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah1CkIAAlHIDrAAIAAFHg");
	mask.setTransform(12.1,16.8);

	// Слой 3
	this.instance = new lib.Image_9();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.48,0.48);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_59, new cjs.Rectangle(0.3,0.4,23.7,32.7), null);


(lib.ClipGroup_55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgWG1IAAtpIAtAAIAANpg");
	mask.setTransform(2.3,43.7);

	// Слой 3
	this.instance = new lib.Image_8();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.48,0.48);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_55, new cjs.Rectangle(0,0.1,4.6,87.4), null);


(lib.ClipGroup_51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmiG1IAAtpINEAAIAANpg");
	mask.setTransform(41.9,43.7);

	// Слой 3
	this.instance = new lib.Image_7();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.837,0.874);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_51, new cjs.Rectangle(0,0,83.7,87.4), null);


(lib.ClipGroup_44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjmBWQAYhLA+guQA/gxBOgCIAFAAQBNAAA/AuQA+ArAbBIInNAMg");
	mask.setTransform(23.5,9.8);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F4E1CA","#F6E8D6","#FDF9F5","#FFFFFF","#FFFFFF"],[0,0.176,0.49,0.58,1],0,-2.8,0.2,8).s().p("AjqhWIHRgLIAEC3InRAMg");
	this.shape.setTransform(23.5,9.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_44, new cjs.Rectangle(0.4,1.1,46.3,17.3), null);


(lib.ClipGroup_42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhAAPIAAgdICBAAIAAAdg");
	mask.setTransform(6.8,1.9);

	// Слой 3
	this.instance = new lib.Image_5();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.48,0.48);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_42, new cjs.Rectangle(0.4,0.5,13,2.9), null);


(lib.ClipGroup_38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjlBIIAAiPIHLAAIAACPg");
	mask.setTransform(23,7.2);

}).prototype = getMCSymbolPrototype(lib.ClipGroup_38, null, null);


(lib.ClipGroup_17_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAMB6QgKgBgFgHIhshdQgVgSACgaIALhiICWAFIBeBnQAGAIAAAIQgBAJgIAGQgGAGgJAAQgJgBgGgGIAIALQAGAHAAAKQgBAJgIAGQgHAGgIgBQgJgBgGgGIADAFQAGAHgBAKQgBAJgHAGQgHAGgJgBQgJgBgGgGQAEAPgMAJQgGAFgHAAIgDAAg");
	mask.setTransform(19.9,21.4);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DBC6AB","#E0CCB2","#EFDBC4","#F4E0CA","#F4E0CA"],[0,0.145,0.624,0.973,1],6.9,-5,-4.6,3.5).s().p("Ai7gxIDDiRIC0D0IjDCRg");
	this.shape.setTransform(18.8,19.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_17_0, new cjs.Rectangle(6.8,9.2,26.2,24.5), null);


(lib.ClipGroup_16_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AktglQDmgTE8htIBCDBQlhB5kMAQg");
	mask.setTransform(44.9,40.4);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D64C15","#E4580E","#EA5D0B"],[0,0.522,1],0.8,-4.6,3,-17.4).s().p("AmnEhIB8rBILTCAIh8LBg");
	this.shape.setTransform(42.4,41.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_16_0, new cjs.Rectangle(13.9,23.8,62.2,33.1), null);


(lib.ClipGroup_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EiLNAOuIAA26MEWbAAAIAAW6g");
	mask.setTransform(339.3,94.2);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA600A").s().p("AgHANQgFgEgBgFQgCgGAEgFQADgFAGgBQAEgBAGADQAFADABAGQABAEgDAFQgDAFgGACIgDAAQgDAAgEgBg");
	this.shape.setTransform(1020.5,150.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EA600A").s().p("AgHAMQgFgDgBgFQgBgGADgEQADgGAGgBQAEgCAGADQAFAEABAFQABAHgDADQgDAGgGABIgDABQgDAAgEgDg");
	this.shape_1.setTransform(1021.8,161.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EA600A").s().p("AgHANQgFgEgBgFQgCgGAEgEQADgFAGgCQAEgCAGADQAFAEABAFQABAHgDADQgDAFgGACIgDABQgDAAgEgCg");
	this.shape_2.setTransform(1043.7,168.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EA600A").s().p("AgGAMQgGgCgBgHQgBgFADgFQADgFAGgBQAEgCAGAEQAFADABAGQACADgEAHQgDAEgFACIgEAAQgDABgDgDg");
	this.shape_3.setTransform(1033.5,163.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EA600A").s().p("AgHAMQgFgDgBgGQgCgEAEgGQADgFAGgBQAFgBAFADQAFADABAGQABAFgDAFQgDAFgGABIgDABQgCAAgFgDg");
	this.shape_4.setTransform(1006,170.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EA600A").s().p("AgHAMQgFgCgBgHQgBgFADgFQADgEAGgCQAEgCAGAEQAFADABAGQACAEgEAGQgDAFgGABIgDABQgDAAgEgDg");
	this.shape_5.setTransform(1034.1,137.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EA600A").s().p("AgHANQgFgEgBgFQgCgFAEgGQADgFAGgBQAEgBAFADQAGACABAHQABAFgDAEQgDAGgGABIgDAAQgDAAgEgBg");
	this.shape_6.setTransform(1027.3,143.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EA600A").s().p("AgHAMQgFgDgBgFQgBgGADgEQADgHAGAAQAEgCAGADQAFAEABAFQACAFgEAFQgDAGgGABIgDABQgDAAgEgDg");
	this.shape_7.setTransform(1016.7,168);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EA600A").s().p("AgGAMQgFgCgCgHQgCgEADgGQAEgFAFgBQAGgCAEAEQAGADABAGQACAEgDAGQgEAEgFACIgEABQgDAAgDgDg");
	this.shape_8.setTransform(1016.6,175.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EA600A").s().p("AgHAMQgFgDgBgGQgBgFADgFQADgFAGgBQAFgBAFADQAFADABAGQABAFgDAFQgDAFgGABIgDAAQgDAAgEgCg");
	this.shape_9.setTransform(1027.5,132.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EA600A").s().p("AgHAMQgFgDgBgGQgBgFADgFQADgFAGgBQAEgCAGAEQAFADABAGQACAEgEAFQgDAGgGABIgDABQgDAAgEgDg");
	this.shape_10.setTransform(1036.7,148.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EA600A").s().p("AgGAMQgGgCgBgHQgBgFADgEQADgFAGgCQAEgBAGACQAFAEABAFQACAFgEAGQgDAFgGABIgDABQgDgBgDgCg");
	this.shape_11.setTransform(1050.8,173.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EA600A").s().p("AgHAMQgGgDAAgGQgBgEACgGQAEgFAFgBQAFgBAGADQAEADACAGQABAEgDAGQgCAFgHABIgDABQgDAAgEgDg");
	this.shape_12.setTransform(1030.4,154.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EA600A").s().p("AgHAMQgFgDgBgGQgCgEAEgGQACgEAGgCQAGgBAEADQAGADABAGQABAEgDAGQgDAFgGABIgCAAQgEAAgEgCg");
	this.shape_13.setTransform(1038.3,174.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EA600A").s().p("AgGAMQgGgDgBgGQgBgEADgGQADgFAGgBQAFgBAFADQAFADABAGQACAEgEAGQgDAFgGABIgDAAQgDAAgDgCg");
	this.shape_14.setTransform(1030.7,177.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EA600A").s().p("AgHANQgFgEgBgGQgCgDAEgGQADgGAGgBQAEgCAGADQAFAEABAFQABAHgDADQgDAGgGABIgDABQgDAAgEgCg");
	this.shape_15.setTransform(1040,155.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EA600A").s().p("AgHAMQgFgCgBgHQgCgFADgFQADgEAGgCQAFgCAFAEQAFADACAGQACAEgEAGQgCAEgHACIgDABQgEAAgDgDg");
	this.shape_16.setTransform(1024.7,173.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EA600A").s().p("AhkFkQgEAAgDgCQgIgFABgIQAAgGAFgEQAEgEAGAAIBQACIABgrQhCgDg+gPQhKgRgwgeQgsgbgVgkQgUgkAFgqQABgHAGgDQAFgEAHACQAdAIAmgJQAhgIAdgTQAcgSgBgdQAAgQgKgOQgJgNgQgHIgBAAQgKgEABgKQAAgKAKgDQAXgIAfgSQAygeABgZQAAgOgXgOQgKgGgUgIQgKgDAAgLQAAgKAKgEQAlgLAzgnQAzgnAPgcQADgHAJAAQAIAAAFAIQAKAVAhAgQAiAgAjAVQAWANANAFQAKADAAAKQgBALgJADIgBAAQgzARgDAWQgDAYAzAiQAhAVAVAHQAKAEgBAKQAAAKgKAEIgBAAQgPAFgKAMQgKALgCAPQgCAPAGAOQAHAOAOAKIANAJQAXAOAYAIQAlALAegIQAGgCAGADQAFAEABAGQAIAwgiAoQgrAxhkAeQhUAYhVABIgBArIBRACQAGAAAEAFQAEAEAAAGQAAAGgEAEQgFAEgGAAgAj9DFQAwAdBKAQQBAAOBAABQBTACBXgZQBfgbAmgsQAUgXABgaQg5AHg/gmIgPgKQgVgPgJgVQgKgWADgXQAFghAZgTQgRgJgPgKQhCgsAGgqQADgdAogVIgKgFQgegTgegaQghgcgSgZQgUAZgjAcQgjAbgiASQApAXAAAhQgBAphAAlQgRALgQAHQAbAYABAkQABAtgqAcQgcASghAKQgoALgigFQABA6BCAog");
	this.shape_17.setTransform(1029,156.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EA600A").s().p("AAlBOIgmgUIgnATQgHADgHgEIgBgBQgHgGACgJIAIgnIgegbQgHgGADgJQADgJAJgBIArgFIAUgkQAFgHAHAAQAJAAAEAIIASAkIAsAHQAJACACAJQADAJgHAFIgfAbIAGAnQABAIgHAGQgEADgEAAQgEAAgDgCgAAZAnIgDgTQgCgIAGgFIAOgLIgTgDQgIgBgDgHIgKgTIgJATQgEAGgHABIgUACIAOAMQAFAFgBAIIgEATIAUgJQAGgDAFADIAUAKg");
	this.shape_18.setTransform(1030.2,113.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhkFkQgEAAgDgCQgIgFABgIQAAgGAFgEQAEgEAGAAIBQACIABgrQhCgDg+gPQhKgRgwgeQhag2AKhXQABgHAGgDQAFgEAHACQAdAIAmgJQAhgIAdgTQAcgSgBgdQAAgQgKgOQgJgNgQgHIgBAAQgKgEABgKQAAgKAKgDQAXgIAfgSQAygeABgZQAAgOgXgOQgKgGgUgIQgKgDAAgLQAAgKAKgEQAlgLAzgnQAzgnAPgcQADgHAJAAQAIAAAFAIQAKAVAhAgQAiAgAjAVQAWANANAFQAKADAAAKQgBALgJADIgBAAQgzARgDAWQgDAYAzAiQAgAVAVAHQALAEgBAKQAAAKgKAEIgBAAQgPAFgKAMQgKALgCAPQgCAPAGAOQAHAOAOAKIANAJQAXAOAYAIQAlALAegIQAGgCAGADQAFAEABAGQAIAwgiAoQgrAxhkAeQhUAYhVABIgBArIBRACQAGAAAEAFQAEAEAAAGQAAAGgEAEQgFAEgGAAg");
	this.shape_19.setTransform(1029,156.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAGAbQgGgDgGADIgUAJIAEgTQABgIgFgFIgNgMIAUgDQAGAAAEgHIAJgSIAKATQADAHAIAAIAUAEIgPALQgFAFABAIIADATg");
	this.shape_20.setTransform(1030.2,113.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EA600A").s().p("AgGANQgGgEgBgFQgBgGADgFQADgFAGgBQAEgBAGADQAFADABAGQACAEgEAFQgDAFgFACIgEAAQgDAAgDgBg");
	this.shape_21.setTransform(540.7,150.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EA600A").s().p("AgGAMQgGgDgBgFQgBgGADgEQACgFAHgCQAEgCAGADQAFAEABAFQACAGgEAEQgCAFgGACIgEABQgDAAgDgDg");
	this.shape_22.setTransform(542,161.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EA600A").s().p("AgGANQgGgEgBgFQgBgGADgEQADgFAGgCQAEgCAGADQAFAEABAFQACAGgEAEQgCAFgGACIgEABQgDAAgDgCg");
	this.shape_23.setTransform(564,168.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EA600A").s().p("AgHAMQgEgCgCgHQgBgFADgFQADgFAGgBQAFgCAEAEQAFACACAHQABAEgCAGQgEAEgFACIgEAAQgEABgDgDg");
	this.shape_24.setTransform(553.8,163.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EA600A").s().p("AgGAMQgGgDgBgGQgBgFADgFQADgFAGgBQAFgBAFADQAFADABAGQACAEgEAGQgDAFgGABIgDABQgDAAgDgDg");
	this.shape_25.setTransform(526.2,170.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EA600A").s().p("AgHAMQgEgCgCgHQgCgEAEgGQADgEAGgCQAEgCAGAEQAEADACAGQACAFgEAFQgCAFgHABIgDABQgEAAgDgDg");
	this.shape_26.setTransform(554.4,137.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EA600A").s().p("AgGANQgGgEgBgFQgBgFADgGQADgFAGgBQADgBAHADQAFADABAGQACAFgEAEQgDAGgGABIgDAAQgDAAgDgBg");
	this.shape_27.setTransform(547.5,143.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EA600A").s().p("AgHAMQgFgDgBgFQgBgGADgEQADgGAGgBQAEgCAGADQAEAEACAFQABAFgCAFQgEAGgFABIgEABQgDAAgEgDg");
	this.shape_28.setTransform(537,168);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EA600A").s().p("AgHAMQgFgCgBgHQgBgFADgFQADgFAGgBQAEgCAGAEQAFADABAGQABAEgDAGQgDAEgGACIgDABQgDAAgEgDg");
	this.shape_29.setTransform(536.8,175.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EA600A").s().p("AgGAMQgGgDgBgGQgBgEADgGQADgFAGgBQAFgBAFADQAFADABAGQACAEgEAGQgCAFgGABIgEAAQgDAAgDgCg");
	this.shape_30.setTransform(547.8,132.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EA600A").s().p("AgGAMQgGgDgBgGQgBgEADgGQADgFAGgBQAEgCAGAEQAFADABAGQACAEgEAFQgCAFgGACIgEABQgDAAgDgDg");
	this.shape_31.setTransform(557,148.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EA600A").s().p("AgHAMQgFgCgBgHQgCgFAEgEQACgFAHgCQAEgBAGACQAEAEACAFQACAGgEAFQgCAEgHACIgDABQgEgBgDgCg");
	this.shape_32.setTransform(571.1,173.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EA600A").s().p("AgHAMQgFgDgBgGQgBgEADgGQADgFAGgBQAFgBAEADQAFADACAGQABAEgCAGQgEAFgFABIgEABQgDAAgEgDg");
	this.shape_33.setTransform(550.6,154.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EA600A").s().p("AgHAMQgFgDgBgGQgBgFADgFQADgFAGgBQAFgBAFADQAFADABAGQABAFgDAFQgDAFgGABIgDAAQgDAAgEgCg");
	this.shape_34.setTransform(558.6,174.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EA600A").s().p("AgHAMQgFgDgBgGQgBgEADgGQADgFAGgBQAFgBAFADQAEADACAGQABAEgCAGQgEAFgFABIgEAAQgDAAgEgCg");
	this.shape_35.setTransform(551,177.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EA600A").s().p("AgGANQgGgEgBgGQgBgEADgFQADgGAGgBQAEgCAGADQAFAEABAFQACAGgEAEQgDAGgFABIgEABQgDAAgDgCg");
	this.shape_36.setTransform(560.3,155.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EA600A").s().p("AgHAMQgEgCgCgHQgCgFADgFQADgEAGgCQAGgCAEAEQAFACACAHQACAEgEAGQgCAEgHACIgDABQgEAAgDgDg");
	this.shape_37.setTransform(545,173.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EA600A").s().p("AhkFkQgEAAgDgCQgHgEAAgJQAAgGAFgEQAEgEAGAAIBRACIAAgrQhCgDg+gPQhKgRgwgeQgsgbgVgkQgUgkAFgqQABgHAGgDQAFgEAHACQAdAIAmgJQAhgIAdgTQAcgSgBgdQAAgQgJgOQgKgNgQgHIgBAAQgJgEAAgKQAAgKAKgDQAWgHAggTQAzgeAAgZQAAgOgXgOQgLgHgTgHQgKgEAAgKQABgLAKgDQAkgLAzgnQAzgnAPgcQADgHAJAAQAIAAAFAIQAKAVAiAgQAhAgAkAVQAUAMAPAGQAJADAAAKQAAALgKADIAAAAQg0ASgCAVQgEAYAzAiQAgAUAWAIQAJAEAAAKQgBALgJADIAAAAQgQAFgKAMQgKALgCAPQgFAgAeAVIANAJQAXAOAZAIQAlALAdgIQAGgCAGADQAGAEAAAGQAJAwgjAoQgrAxhkAeQhUAYhVABIgBArIBRACQAGAAAEAFQAEAEAAAGQAAAGgEAEQgFAEgGAAgAj9DFQAwAdBKAQQBAAOBAABQBTACBXgZQBfgbAmgsQAUgXABgaQg5AHg/gmIgPgKQgUgPgKgVQgKgWADgXQAFggAZgUQgRgJgPgKQhCgsAGgqQADgdAogVIgJgFQgfgSgegbQghgcgSgZQgUAZgjAcQgjAbgiASQApAXAAAhQgBAphAAlQgRALgQAHQAcAZAAAjQABAtgpAcQgdASghAKQgoALgigFQACA6BBAog");
	this.shape_38.setTransform(549.3,156.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EA600A").s().p("AAlBOIgmgUIgnATQgHADgHgEIgBgBQgHgGACgJIAIgnIgegbQgHgHADgIQADgJAJgBIAsgFIAUgkQAEgHAIAAQAIAAAEAIIATAkIArAHQAJACACAJQAEAIgIAGIgfAbIAGAnQABAJgHAFQgEADgEAAQgEAAgDgCgAAZAnIgDgTQgCgIAHgFIAOgLIgUgDQgHgBgEgHIgJgTIgKATQgEAGgHABIgUACIAOAMQAFAFgBAIIgEATIAUgJQAGgDAFADIAUAKg");
	this.shape_39.setTransform(550.5,113.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AhkFkQgEAAgDgCQgHgEAAgJQAAgGAFgEQAEgEAGAAIBQACIABgrQhCgDg+gPQhKgRgwgeQgsgbgVgkQgUgkAFgqQABgHAGgDQAFgEAHACQAdAIAmgJQAhgIAdgTQAcgSgBgdQAAgQgJgOQgKgNgQgHIgBAAQgJgEAAgKQAAgKAKgDQAWgHAggTQAzgeAAgZQAAgOgXgOQgLgHgTgHQgKgEAAgKQABgLAKgDQAkgLAzgnQAzgnAPgcQADgHAJAAQAIAAAFAIQAKAVAiAgQAhAgAkAVQAUANAPAFQAJADAAAKQAAALgKADIAAAAQg0ASgCAVQgEAYAzAiQAgAUAWAIQAJAEAAAKQgBALgJADIAAAAQgQAFgKAMQgKALgCAPQgFAgAeAVIANAJQAXAOAZAIQAlALAdgIQAGgCAGADQAGAEAAAGQAJAwgjAoQgrAxhkAeQhUAYhVABIgBArIBRACQAGAAAEAFQAEAEAAAGQAAAGgEAEQgFAEgGAAg");
	this.shape_40.setTransform(549.3,156.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAFAbQgFgDgGADIgUAJIAEgTQABgIgFgFIgOgMIAUgDQAHAAAEgHIAKgSIAJATQAEAHAHAAIAUAEIgOALQgHAFACAIIADATg");
	this.shape_41.setTransform(550.5,113.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EA600A").s().p("AgHANQgFgEgBgFQgCgGAEgFQADgFAGgBQAEgBAGADQAFADABAGQABAEgDAFQgDAFgGACIgDAAQgDAAgEgBg");
	this.shape_42.setTransform(59.7,150.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EA600A").s().p("AgHAMQgFgDgBgFQgBgGADgEQADgGAGgBQAEgCAGADQAFAEABAFQABAHgDADQgDAGgGABIgDABQgDAAgEgDg");
	this.shape_43.setTransform(61,161.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EA600A").s().p("AgHANQgFgEgBgFQgCgGAEgEQADgFAGgCQAEgCAGADQAFAEABAFQABAHgDADQgDAFgGACIgDABQgDAAgEgCg");
	this.shape_44.setTransform(82.9,168.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EA600A").s().p("AgGAMQgGgCgBgHQgBgFADgFQADgFAGgBQAEgCAGAEQAFADABAGQACADgEAHQgDAEgFACIgEAAQgDABgDgDg");
	this.shape_45.setTransform(72.7,163.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EA600A").s().p("AgHAMQgFgDgBgGQgCgEAEgGQADgFAGgBQAFgBAEADQAGADABAGQABAFgDAFQgDAFgGABIgDABQgCAAgFgDg");
	this.shape_46.setTransform(45.2,170.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#EA600A").s().p("AgHAMQgFgCgBgHQgBgFADgFQADgEAGgCQAEgCAGAEQAFADABAGQACAEgEAGQgDAFgGABIgDABQgDAAgEgDg");
	this.shape_47.setTransform(73.3,137.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EA600A").s().p("AgHANQgFgEgBgFQgCgFAEgGQADgFAGgBQAEgBAFADQAGACABAHQABAFgDAEQgDAGgGABIgDAAQgDAAgEgBg");
	this.shape_48.setTransform(66.5,143.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#EA600A").s().p("AgHAMQgFgDgBgFQgBgGADgEQADgHAGAAQAEgCAGADQAFAEABAFQABAGgDAEQgDAGgGABIgDABQgDAAgEgDg");
	this.shape_49.setTransform(55.9,168);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EA600A").s().p("AgHAMQgEgCgCgHQgCgFAEgFQADgFAGgBQAFgCAFAEQAFADABAGQACAEgEAGQgCAEgHACIgDABQgDAAgEgDg");
	this.shape_50.setTransform(55.8,175.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EA600A").s().p("AgHAMQgFgDgBgGQgBgFADgFQADgFAGgBQAFgBAFADQAFADABAGQABAFgDAFQgDAFgGABIgDAAQgDAAgEgCg");
	this.shape_51.setTransform(66.7,132.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EA600A").s().p("AgHAMQgFgDgBgGQgBgFADgFQADgFAGgBQAEgCAGAEQAFADABAGQABAFgDAEQgDAGgGABIgDABQgDAAgEgDg");
	this.shape_52.setTransform(75.9,148.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EA600A").s().p("AgGAMQgGgCgBgHQgBgFADgEQADgFAGgCQAEgBAGACQAFAEABAFQACAFgEAGQgDAFgGABIgDABQgDgBgDgCg");
	this.shape_53.setTransform(90,173.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EA600A").s().p("AgHAMQgGgDAAgGQgBgEADgGQADgFAGgBQAEgBAFADQAFADACAGQABAEgCAGQgEAFgFABIgEABQgDAAgEgDg");
	this.shape_54.setTransform(69.6,154.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EA600A").s().p("AgGAMQgGgDgBgGQgCgDADgHQAEgFAFgBQAHgBADADQAHADAAAGQABAEgCAGQgEAFgGABIgCAAQgEAAgDgCg");
	this.shape_55.setTransform(77.5,174.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EA600A").s().p("AgGAMQgGgDgBgGQgBgEADgGQADgFAGgBQAFgBAFADQAFADABAGQACAEgEAGQgDAFgGABIgDAAQgDAAgDgCg");
	this.shape_56.setTransform(69.9,177.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EA600A").s().p("AgHANQgFgEgBgGQgCgDAEgGQADgGAGgBQAEgCAGADQAFAEABAFQABAHgDADQgDAGgGABIgDABQgDAAgEgCg");
	this.shape_57.setTransform(79.2,155.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EA600A").s().p("AgHAMQgFgCgBgHQgCgFADgFQADgEAGgCQAFgCAFAEQAFADACAGQACAEgEAGQgCAEgHACIgDABQgEAAgDgDg");
	this.shape_58.setTransform(63.9,173.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EA600A").s().p("AhkFkQgEAAgDgCQgIgFABgIQAAgGAFgEQAEgEAGAAIBQACIABgrQhCgDg+gPQhKgRgwgeQgsgbgVgkQgUgkAFgqQABgHAGgDQAFgEAHACQAdAIAmgJQAhgIAdgTQAcgSgBgdQAAgQgKgOQgJgNgQgHIgBAAQgKgEABgKQAAgKAKgDQAXgIAfgSQAygeABgZQAAgOgXgOQgKgGgUgIQgKgDAAgLQAAgKAKgEQAlgLAzgnQAzgnAPgcQADgHAJAAQAIAAAFAIQAKAVAhAgQAiAgAjAVQAWANANAFQAKADAAAKQgBALgJADIgBAAQgzARgDAWQgDAYAzAiQAhAVAVAHQAKAEgBAKQAAAKgKAEIgBAAQgPAFgKAMQgKALgCAPQgCAPAGAOQAHAOAOAKIANAJQAXAOAYAIQAlALAegIQAGgCAGADQAFAEABAGQAIAwgiAoQgrAxhkAeQhUAYhVABIgBArIBRACQAGAAAEAFQAEAEAAAGQAAAGgEAEQgFAEgGAAgAj9DFQAwAdBKAQQBAAOBAABQBTACBXgZQBfgbAmgsQATgXACgaQg5AHg/gmIgPgKQgVgPgJgVQgKgWADgXQAFghAZgTQgRgJgPgKQhCgsAGgqQADgdAogVIgKgFQgegTgegaQghgcgSgZQgUAZgjAcQgjAbgiASQApAXAAAhQgBAphAAlQgRALgQAHQAbAYABAkQABAtgqAcQgcASghAKQgoALgigFQABA6BCAog");
	this.shape_59.setTransform(68.2,156.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EA600A").s().p("AAlBOIgmgUIgnATQgHADgHgEIgBgBQgHgGACgJIAIgnIgegbQgHgGADgJQADgJAJgBIArgFIAUgkQAFgHAHAAQAJAAAEAIIASAkIAsAHQAJACACAJQADAJgHAFIgfAbIAGAnQABAIgHAGQgEADgEAAQgEAAgDgCgAAZAnIgDgTQgCgIAGgFIAOgLIgTgDQgIgBgDgHIgKgTIgJATQgEAGgHABIgUACIAOAMQAFAFgBAIIgEATIAUgJQAGgDAFADIAUAKg");
	this.shape_60.setTransform(69.4,113.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AhkFkQgEAAgDgCQgIgFABgIQAAgGAFgEQAEgEAGAAIBQACIABgrQhCgDg+gPQhKgRgwgeQhag2AKhXQABgHAGgDQAFgEAHACQAdAIAmgJQAhgIAdgTQAcgSgBgdQAAgQgKgOQgJgNgQgHIgBAAQgKgEABgKQAAgKAKgDQAXgIAfgSQAygeABgZQAAgOgXgOQgMgHgSgHQgKgDAAgLQAAgKAKgEQAlgLAzgnQAzgnAPgcQADgHAJAAQAIAAAFAIQAKAVAhAgQAiAgAjAVQAWANANAFQAKADAAAKQgBALgJADIgBAAQgzARgDAWQgDAYAzAiQAgAVAVAHQALAEgBAKQAAAKgKAEIgBAAQgPAFgKAMQgKALgCAPQgCAPAGAOQAHAOAOAKIANAJQAXAOAYAIQAlALAegIQAGgCAGADQAFAEABAGQAIAwgiAoQgrAxhkAeQhUAYhVABIgBArIBRACQAGAAAEAFQAEAEAAAGQAAAGgEAEQgFAEgGAAg");
	this.shape_61.setTransform(68.2,156.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAFAbQgFgDgGADIgUAJIAEgTQACgIgGgFIgOgMIAUgDQAHAAAFgHIAJgSIAJATQADAHAIAAIATAEIgNALQgHAFACAIIADATg");
	this.shape_62.setTransform(69.4,113.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EA600A").s().p("AgkBcIAAi3IBJAAIAAC3gAgSBKIAlAAIAAiTIglAAg");
	this.shape_63.setTransform(1188.6,109.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgbBTIAAilIA3AAIAAClg");
	this.shape_64.setTransform(1188.5,109.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EA600A").s().p("AgkBcIAAi3IBJAAIAAC3gAgSBKIAlAAIAAiTIglAAg");
	this.shape_65.setTransform(1177.2,109.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgbBTIAAilIA3AAIAAClg");
	this.shape_66.setTransform(1177.2,109.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#EA600A").s().p("AgkBcIAAi3IBJAAIAAC3gAgRBKIAjAAIAAiTIgjAAg");
	this.shape_67.setTransform(1165.9,109.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgbBTIAAilIA3AAIAAClg");
	this.shape_68.setTransform(1165.9,109.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#EA600A").s().p("AjuAKQgEAAgCgDQgEgDAAgEQAAgDAEgDQACgDAEAAIHdAAQAEAAADADQACADAAADQAAAEgCADQgDADgEAAg");
	this.shape_69.setTransform(1167.3,168.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#EA600A").s().p("AjuAKQgEAAgCgDQgEgDAAgEQAAgDAEgDQACgDAEAAIHdAAQAEAAADADQACADAAADQAAAEgCADQgDADgEAAg");
	this.shape_70.setTransform(1167.3,158.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#EA600A").s().p("AjuAKQgEAAgCgDQgEgDAAgEQAAgDAEgDQACgDAEAAIHdAAQAEAAADADQACADAAADQAAAEgCADQgDADgEAAg");
	this.shape_71.setTransform(1167.3,147.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#EA600A").s().p("AjuAKQgEAAgCgDQgEgDAAgEQAAgDAEgDQACgDAEAAIHdAAQAEAAADADQACADAAADQAAAKgJAAg");
	this.shape_72.setTransform(1167.3,137.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#EA600A").s().p("AjRCsIAAlXIGjAAIAAFXgAi1CQIFrAAIAAkfIlrAAg");
	this.shape_73.setTransform(1176.5,109.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#EA600A").s().p("AlKFZIAAqxIKUAAIAAKxgAkuE9IJcAAIAAp5IpcAAg");
	this.shape_74.setTransform(1164.4,158.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EA600A").s().p("AgxAyIAAhjIBjAAIAABjgAgeAfIA9AAIAAg9Ig9AAg");
	this.shape_75.setTransform(834.6,33.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgoAoIAAhQIBQAAIAABQg");
	this.shape_76.setTransform(834.6,34);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EA600A").s().p("AgkBDIAAiFIBJAAIAACFgAgRAwIAkAAIAAhfIgkAAg");
	this.shape_77.setTransform(834.6,51.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgbA5IAAhxIA3AAIAABxg");
	this.shape_78.setTransform(834.6,51.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#EA600A").s().p("AgkBDIAAiFIBJAAIAACFgAgSAwIAkAAIAAhfIgkAAg");
	this.shape_79.setTransform(824.7,51.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgbA5IAAhxIA3AAIAABxg");
	this.shape_80.setTransform(824.7,51.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EA600A").s().p("AgkBDIAAiFIBJAAIAACFgAgRAwIAkAAIAAhfIgkAAg");
	this.shape_81.setTransform(814.7,51.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgbA5IAAhxIA3AAIAABxg");
	this.shape_82.setTransform(814.7,51.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#EA600A").s().p("AjMAIIAAgPIGZAAIAAAPg");
	this.shape_83.setTransform(822.8,177.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#EA600A").s().p("AjMAIIAAgPIGZAAIAAAPg");
	this.shape_84.setTransform(822.8,171.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#EA600A").s().p("AjMAIIAAgPIGZAAIAAAPg");
	this.shape_85.setTransform(822.8,164.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#EA600A").s().p("AjMAIIAAgPIGZAAIAAAPg");
	this.shape_86.setTransform(822.8,157.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#EA600A").s().p("AjHAIIAAgPIGOAAIAAAPg");
	this.shape_87.setTransform(824.2,86.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#EA600A").s().p("AjHAIIAAgPIGOAAIAAAPg");
	this.shape_88.setTransform(824.2,79.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#EA600A").s().p("AjHAIIAAgPIGOAAIAAAPg");
	this.shape_89.setTransform(824.2,73.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#EA600A").s().p("AjHAIIAAgPIGOAAIAAAPg");
	this.shape_90.setTransform(824.2,66.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#EA600A").s().p("AgHEOIAAobIAPAAIAAIbg");
	this.shape_91.setTransform(796.8,122.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#EA600A").s().p("AgHEOIAAobIAPAAIAAIbg");
	this.shape_92.setTransform(805.9,122.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#EA600A").s().p("AgHEOIAAobIAPAAIAAIbg");
	this.shape_93.setTransform(814.5,122.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#EA600A").s().p("AgHEOIAAobIAPAAIAAIbg");
	this.shape_94.setTransform(822.8,122.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#EA600A").s().p("AgHEOIAAobIAPAAIAAIbg");
	this.shape_95.setTransform(831.9,122.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#EA600A").s().p("AgHEOIAAobIAPAAIAAIbg");
	this.shape_96.setTransform(841.4,122.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#EA600A").s().p("Ah0AMIAAgXIDoAAIAAAXg");
	this.shape_97.setTransform(834.5,38.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#EA600A").s().p("AkfAMIAAgXII/AAIAAAXg");
	this.shape_98.setTransform(817.3,57.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#EA600A").s().p("AkpNaIAA1YICaAAIAAjBIClAAIAAiaIEUAAIAAazgAkOM/IIcAAIAA58IjdAAIAACZIilAAIAADCIiaAAg");
	this.shape_99.setTransform(817.9,107.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#EA600A").s().p("AjYAMIAAgXIGxAAIAAAXg");
	this.shape_100.setTransform(1095.9,161.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#EA600A").s().p("AjYAMIAAgXIGxAAIAAAXg");
	this.shape_101.setTransform(1095.9,148.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#EA600A").s().p("AjYAMIAAgXIGxAAIAAAXg");
	this.shape_102.setTransform(1095.9,135.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#EA600A").s().p("AjYAMIAAgXIGxAAIAAAXg");
	this.shape_103.setTransform(1095.9,122);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#EA600A").s().p("AjYAMIAAgXIGxAAIAAAXg");
	this.shape_104.setTransform(1095.9,109.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#EA600A").s().p("AjYAMIAAgXIGxAAIAAAXg");
	this.shape_105.setTransform(1095.9,96.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#EA600A").s().p("AjYAMIAAgXIGxAAIAAAXg");
	this.shape_106.setTransform(1095.9,82.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#EA600A").s().p("AjYAMIAAgXIGxAAIAAAXg");
	this.shape_107.setTransform(1095.9,69.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#EA600A").s().p("AlLOIIAA1xIB7AAIAAkMIB2AAIAAiSICtAAIAACSIB3AAIAAEMICCAAIAAVxgAkvNsIJfAAIAA05IiCAAIAAkMIh3AAIAAiSIh1AAIAACSIh3AAIAAEMIh6AAg");
	this.shape_108.setTransform(1086,102.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#EA600A").s().p("AhABmIAAjLICBAAIAADLgAguBTIBdAAIAAilIhdAAg");
	this.shape_109.setTransform(776.7,166);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("Ag3BcIAAi3IBvAAIAAC3g");
	this.shape_110.setTransform(776.7,165.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#EA600A").s().p("AhABmIAAjLICBAAIAADLgAguBTIBdAAIAAilIhdAAg");
	this.shape_111.setTransform(759.7,166);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("Ag3BcIAAi3IBvAAIAAC3g");
	this.shape_112.setTransform(759.7,165.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#EA600A").s().p("AhBBmIAAjLICCAAIAADLgAguBTIBdAAIAAilIhdAAg");
	this.shape_113.setTransform(742.7,166);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("Ag3BcIAAi3IBvAAIAAC3g");
	this.shape_114.setTransform(742.7,165.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#EA600A").s().p("AhABmIAAjLICBAAIAADLgAguBTIBdAAIAAilIhdAAg");
	this.shape_115.setTransform(777.6,141.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("Ag3BdIAAi5IBvAAIAAC5g");
	this.shape_116.setTransform(777.6,141.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#EA600A").s().p("AhABmIAAjLICBAAIAADLgAguBTIBdAAIAAilIhdAAg");
	this.shape_117.setTransform(760.6,141.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("Ag3BdIAAi5IBvAAIAAC5g");
	this.shape_118.setTransform(760.6,141.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#EA600A").s().p("AhABmIAAjLICBAAIAADLgAguBTIBdAAIAAilIhdAAg");
	this.shape_119.setTransform(743.6,141.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("Ag3BdIAAi5IBvAAIAAC5g");
	this.shape_120.setTransform(743.6,141.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#EA600A").s().p("AhABlIAAjJICBAAIAADJgAguBTIBdAAIAAilIhdAAg");
	this.shape_121.setTransform(777.6,116.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("Ag3BcIAAi3IBvAAIAAC3g");
	this.shape_122.setTransform(777.6,116.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#EA600A").s().p("AhABlIAAjJICBAAIAADJgAguBTIBdAAIAAilIhdAAg");
	this.shape_123.setTransform(760.6,116.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("Ag3BcIAAi3IBvAAIAAC3g");
	this.shape_124.setTransform(760.6,116.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#EA600A").s().p("AhABlIAAjJICBAAIAADJgAguBTIBdAAIAAilIhdAAg");
	this.shape_125.setTransform(743.6,116.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("Ag3BcIAAi3IBvAAIAAC3g");
	this.shape_126.setTransform(743.6,116.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#EA600A").s().p("AksJUIAAynIJZDyIAAO1gAkQI4IIhAAIAAuGIohjcg");
	this.shape_127.setTransform(760.2,133.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AkeJDIAAyFII9DnIAAOeg");
	this.shape_128.setTransform(760.2,133.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#EA600A").s().p("AhHBIIAAiPICPAAIAACPgAg0A1IBpAAIAAhpIhpAAg");
	this.shape_129.setTransform(1000.3,159.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("Ag9A+IAAh7IB7AAIAAB7g");
	this.shape_130.setTransform(1000.3,159.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#EA600A").s().p("AhHBIIAAiPICOAAIAACPgAg0A1IBpAAIAAhpIhpAAg");
	this.shape_131.setTransform(982.1,159.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("Ag+A+IAAh7IB8AAIAAB7g");
	this.shape_132.setTransform(982.1,159.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#EA600A").s().p("AhHBIIAAiPICPAAIAACPgAg0A1IBpAAIAAhpIhpAAg");
	this.shape_133.setTransform(963.8,159.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("Ag+A+IAAh7IB8AAIAAB7g");
	this.shape_134.setTransform(963.8,159.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#EA600A").s().p("AhHBIIAAiPICPAAIAACPgAg0A1IBpAAIAAhpIhpAAg");
	this.shape_135.setTransform(1000.3,136.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("Ag9A+IAAh7IB7AAIAAB7g");
	this.shape_136.setTransform(1000.3,136.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#EA600A").s().p("AhHBIIAAiPICOAAIAACPgAg0A1IBpAAIAAhpIhpAAg");
	this.shape_137.setTransform(982.1,136.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("Ag+A+IAAh7IB8AAIAAB7g");
	this.shape_138.setTransform(982.1,136.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#EA600A").s().p("AhHBIIAAiPICPAAIAACPgAg0A1IBpAAIAAhpIhpAAg");
	this.shape_139.setTransform(963.8,136.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("Ag+A+IAAh7IB8AAIAAB7g");
	this.shape_140.setTransform(963.8,136.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#EA600A").s().p("AhHBIIAAiPICPAAIAACPgAg0A1IBpAAIAAhpIhpAAg");
	this.shape_141.setTransform(1000.3,113.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("Ag9A/IAAh9IB7AAIAAB9g");
	this.shape_142.setTransform(1000.3,113.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#EA600A").s().p("AhHBIIAAiPICOAAIAACPgAg0A1IBpAAIAAhpIhpAAg");
	this.shape_143.setTransform(982.1,113.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("Ag+A/IAAh9IB8AAIAAB9g");
	this.shape_144.setTransform(982.1,113.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#EA600A").s().p("AhHBIIAAiPICPAAIAACPgAg0A1IBpAAIAAhpIhpAAg");
	this.shape_145.setTransform(963.8,113.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("Ag+A/IAAh9IB8AAIAAB9g");
	this.shape_146.setTransform(963.8,113.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#EA600A").s().p("AlBIcIAAw3IKDAAIAAQ3gAkkIAIJKAAIAAv/IpKAAg");
	this.shape_147.setTransform(982.1,139.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#EA600A").s().p("AjLMxIAA5hIGWEAIAAVhgAivMWIFeAAIAA03Ilejdg");
	this.shape_148.setTransform(750.5,110.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#EA600A").s().p("ADjLRQgFgEAAgHIAAx9QAAhphKhKQhLhLhoAAIjPAAQgGAAgEgFQgFgEAAgHQAAgHAFgEQAEgEAGgBIDPAAQB2ABBTBTQBUBUAAB2IAAR9QgBAHgEAEQgFAFgGgBQgGABgFgFg");
	this.shape_149.setTransform(1010.8,120.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#EA600A").s().p("AgoiNIAbgFIA2EgIgbAFg");
	this.shape_150.setTransform(933.8,126.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#EA600A").s().p("AgdiPIAcgEIAfEkIgcADg");
	this.shape_151.setTransform(922.4,126.6);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#EA600A").s().p("AgYiRIAagBIAXEjIgbADg");
	this.shape_152.setTransform(911.8,126.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#EA600A").s().p("AgpCOIA3kgIAbAFIg2Egg");
	this.shape_153.setTransform(866.6,126.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#EA600A").s().p("AgdCRIAfkkIAcAEIgfEjg");
	this.shape_154.setTransform(878,126.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#EA600A").s().p("AgYCRIAWkjIAbABIgWElg");
	this.shape_155.setTransform(888.7,126.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#EA600A").s().p("AgLCUIAAknIAXAAIAAEng");
	this.shape_156.setTransform(900.9,126.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#EA600A").s().p("AmkCgQgjAAgVgcQgTgcAKgiIBQjlIMqAAIBQDlQAMAigVAcQgTAcgkAAgAnLBQQgGATAMARQAMAQAVAAINJAAQAVAAAMgQQAMgRgHgUIhKjSIsCAAg");
	this.shape_157.setTransform(899.9,126.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AmkCTQgcgBgQgWQgRgXAKgaIBMjdIMWAAIBODdQAJAagRAXQgQAWgcABg");
	this.shape_158.setTransform(899.9,126.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#EA600A").s().p("AhvC9IAAl5IDfAAIAAF5gAhUChICpAAIAAlBIipAAg");
	this.shape_159.setTransform(924.5,164.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#EA600A").s().p("AiyAmIAAhKIFmAAIAABKgAiXAKIEuAAIAAgTIkuAAg");
	this.shape_160.setTransform(885.7,173);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#EA600A").s().p("Ag4AMIAAgXIBxAAIAAAXg");
	this.shape_161.setTransform(891.6,158.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#EA600A").s().p("AgLB5IAAjwIAXAAIAADwg");
	this.shape_162.setTransform(885.1,157.8);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#EA600A").s().p("AiECFIAAkJIEJAAIAAEJgAhoBpIDRAAIAAjRIjRAAg");
	this.shape_163.setTransform(885.5,158.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#EA600A").s().p("An5A8IAAgPQABgrAegdQAfgfArgBIMhAAQArABAfAfQAfAdgBArIAAAPgAnCgMQgUARgGAbIO4AAQgEgbgWgRQgVgTgcABIshAAQgcgBgWATg");
	this.shape_164.setTransform(900.2,186.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#EA600A").s().p("AmYFsIAArXIMxAAIAALXgAl9FQIL7AAIAAqfIr7AAg");
	this.shape_165.setTransform(899.9,147.3);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#EA600A").s().p("AgkBcIAAi3IBJAAIAAC3gAgSBKIAkAAIAAiTIgkAAg");
	this.shape_166.setTransform(721.8,109.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgbBTIAAilIA3AAIAAClg");
	this.shape_167.setTransform(721.8,109.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#EA600A").s().p("AgkBcIAAi3IBJAAIAAC3gAgRBKIAjAAIAAiTIgjAAg");
	this.shape_168.setTransform(710.5,109.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgbBTIAAilIA3AAIAAClg");
	this.shape_169.setTransform(710.5,109.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#EA600A").s().p("AgkBcIAAi3IBJAAIAAC3gAgRBKIAkAAIAAiTIgkAAg");
	this.shape_170.setTransform(699.2,109.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AgbBTIAAilIA3AAIAAClg");
	this.shape_171.setTransform(699.2,109.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#EA600A").s().p("AjuAKQgEAAgDgDQgDgDABgEQgBgDADgDQADgDAEAAIHdAAQADAAAEADQACADAAADQAAAEgCADQgEADgDAAg");
	this.shape_172.setTransform(700.6,168.4);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#EA600A").s().p("AjuAKQgEAAgDgDQgDgDABgEQgBgDADgDQADgDAEAAIHdAAQADAAAEADQACADAAADQAAAEgCADQgEADgDAAg");
	this.shape_173.setTransform(700.6,158.2);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#EA600A").s().p("AjuAKQgEAAgDgDQgDgDABgEQgBgDADgDQADgDAEAAIHdAAQADAAAEADQACADAAADQAAAEgCADQgEADgDAAg");
	this.shape_174.setTransform(700.6,147.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#EA600A").s().p("AjuAKQgJAAAAgKQgBgDADgDQADgDAEAAIHdAAQADAAAEADQACADAAADQAAAEgCADQgEADgDAAg");
	this.shape_175.setTransform(700.6,137.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#EA600A").s().p("AjQCsIAAlXIGhAAIAAFXgAi1CQIFrAAIAAkfIlrAAg");
	this.shape_176.setTransform(709.8,109.7);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#EA600A").s().p("AlKFZIAAqxIKVAAIAAKxgAkuE9IJdAAIAAp5IpdAAg");
	this.shape_177.setTransform(697.6,158.6);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#EA600A").s().p("AgkBcIAAi3IBJAAIAAC3gAgSBKIAkAAIAAiTIgkAAg");
	this.shape_178.setTransform(261.2,109.9);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AgbBTIAAilIA3AAIAAClg");
	this.shape_179.setTransform(261.1,109.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#EA600A").s().p("AgkBcIAAi3IBJAAIAAC3gAgSBKIAkAAIAAiTIgkAAg");
	this.shape_180.setTransform(249.8,109.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AgbBTIAAilIA3AAIAAClg");
	this.shape_181.setTransform(249.8,109.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#EA600A").s().p("AgkBcIAAi3IBJAAIAAC3gAgSBKIAlAAIAAiTIglAAg");
	this.shape_182.setTransform(238.5,109.9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AgbBTIAAilIA3AAIAAClg");
	this.shape_183.setTransform(238.5,109.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#EA600A").s().p("AjtAKQgFAAgDgDQgCgDAAgEQAAgDACgDQADgDAFAAIHcAAQAEAAADADQADADgBADQABAEgDADQgDADgEAAg");
	this.shape_184.setTransform(239.9,168.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#EA600A").s().p("AjtAKQgFAAgDgDQgCgDAAgEQAAgDACgDQADgDAFAAIHcAAQAEAAADADQADADgBADQABAEgDADQgDADgEAAg");
	this.shape_185.setTransform(239.9,158.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#EA600A").s().p("AjtAKQgFAAgDgDQgCgDAAgEQAAgDACgDQADgDAFAAIHcAAQAEAAADADQADADgBADQABAEgDADQgDADgEAAg");
	this.shape_186.setTransform(239.9,147.5);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#EA600A").s().p("AjtAKQgFAAgDgDQgCgDAAgEQAAgDACgDQADgDAFAAIHcAAQAEAAADADQADADgBADQAAAKgJAAg");
	this.shape_187.setTransform(239.9,137.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#EA600A").s().p("AjRCsIAAlXIGjAAIAAFXgAi1CQIFrAAIAAkfIlrAAg");
	this.shape_188.setTransform(249.1,109.7);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#EA600A").s().p("AlJFZIAAqxIKUAAIAAKxgAkuE9IJdAAIAAp5IpdAAg");
	this.shape_189.setTransform(237,158.6);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#EA600A").s().p("AgxAyIAAhjIBiAAIAABjgAgeAfIA9AAIAAg9Ig9AAg");
	this.shape_190.setTransform(371.8,33.9);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgoAoIAAhQIBQAAIAABQg");
	this.shape_191.setTransform(371.8,34);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#EA600A").s().p("AgkBDIAAiFIBJAAIAACFgAgRAwIAkAAIAAhfIgkAAg");
	this.shape_192.setTransform(371.8,51.8);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgbA5IAAhxIA3AAIAABxg");
	this.shape_193.setTransform(371.8,51.8);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#EA600A").s().p("AgkBDIAAiFIBJAAIAACFgAgSAwIAkAAIAAhfIgkAAg");
	this.shape_194.setTransform(361.9,51.8);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AgbA5IAAhxIA3AAIAABxg");
	this.shape_195.setTransform(361.9,51.8);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#EA600A").s().p("AgkBDIAAiFIBJAAIAACFgAgSAwIAlAAIAAhfIglAAg");
	this.shape_196.setTransform(351.9,51.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgbA5IAAhxIA3AAIAABxg");
	this.shape_197.setTransform(351.9,51.8);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#EA600A").s().p("AjMAIIAAgPIGZAAIAAAPg");
	this.shape_198.setTransform(360,177.7);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#EA600A").s().p("AjMAIIAAgPIGZAAIAAAPg");
	this.shape_199.setTransform(360,171.4);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#EA600A").s().p("AjMAIIAAgPIGZAAIAAAPg");
	this.shape_200.setTransform(360,164.3);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#EA600A").s().p("AjMAIIAAgPIGZAAIAAAPg");
	this.shape_201.setTransform(360,157.6);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#EA600A").s().p("AjGAIIAAgPIGNAAIAAAPg");
	this.shape_202.setTransform(361.4,86.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#EA600A").s().p("AjGAIIAAgPIGNAAIAAAPg");
	this.shape_203.setTransform(361.4,79.8);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#EA600A").s().p("AjGAIIAAgPIGNAAIAAAPg");
	this.shape_204.setTransform(361.4,73.5);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#EA600A").s().p("AjGAIIAAgPIGNAAIAAAPg");
	this.shape_205.setTransform(361.4,66.8);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#EA600A").s().p("AgHEOIAAobIAPAAIAAIbg");
	this.shape_206.setTransform(334,122.6);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#EA600A").s().p("AgHEOIAAobIAPAAIAAIbg");
	this.shape_207.setTransform(343.1,122.6);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#EA600A").s().p("AgHEOIAAobIAPAAIAAIbg");
	this.shape_208.setTransform(351.7,122.6);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#EA600A").s().p("AgHEOIAAobIAPAAIAAIbg");
	this.shape_209.setTransform(360,122.6);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#EA600A").s().p("AgHEOIAAobIAPAAIAAIbg");
	this.shape_210.setTransform(369.1,122.6);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#EA600A").s().p("AgHEOIAAobIAPAAIAAIbg");
	this.shape_211.setTransform(378.6,122.6);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#EA600A").s().p("AhzAMIAAgXIDoAAIAAAXg");
	this.shape_212.setTransform(371.7,38.4);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#EA600A").s().p("AkfAMIAAgXII/AAIAAAXg");
	this.shape_213.setTransform(354.5,57.7);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#EA600A").s().p("AkpNaIAA1YICaAAIAAjBICkAAIAAiaIEVAAIAAazgAkOM/IIcAAIAA58IjdAAIAACZIilAAIAADCIiaAAg");
	this.shape_214.setTransform(355.1,107.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#EA600A").s().p("AjYAMIAAgXIGxAAIAAAXg");
	this.shape_215.setTransform(629.2,161.5);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#EA600A").s().p("AjYAMIAAgXIGxAAIAAAXg");
	this.shape_216.setTransform(629.2,148.5);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#EA600A").s().p("AjYAMIAAgXIGxAAIAAAXg");
	this.shape_217.setTransform(629.2,135.1);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#EA600A").s().p("AjYAMIAAgXIGxAAIAAAXg");
	this.shape_218.setTransform(629.2,122);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#EA600A").s().p("AjYAMIAAgXIGxAAIAAAXg");
	this.shape_219.setTransform(629.2,109.4);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#EA600A").s().p("AjYAMIAAgXIGxAAIAAAXg");
	this.shape_220.setTransform(629.2,96.4);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#EA600A").s().p("AjYAMIAAgXIGxAAIAAAXg");
	this.shape_221.setTransform(629.2,82.2);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#EA600A").s().p("AjYAMIAAgXIGxAAIAAAXg");
	this.shape_222.setTransform(629.2,69.6);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#EA600A").s().p("AlKOIIAA1xIB6AAIAAkMIB3AAIAAiSICsAAIAACSIB3AAIAAEMICBAAIAAVxgAkuNsIJeAAIAA05IiCAAIAAkMIh2AAIAAiSIh2AAIAACSIh3AAIAAEMIh5AAg");
	this.shape_223.setTransform(619.3,102.7);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#EA600A").s().p("AjYAMIAAgXIGxAAIAAAXg");
	this.shape_224.setTransform(121.3,161.5);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#EA600A").s().p("AjYAMIAAgXIGxAAIAAAXg");
	this.shape_225.setTransform(121.3,148.5);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#EA600A").s().p("AjYAMIAAgXIGxAAIAAAXg");
	this.shape_226.setTransform(121.3,135.1);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#EA600A").s().p("AjYAMIAAgXIGxAAIAAAXg");
	this.shape_227.setTransform(121.3,122);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#EA600A").s().p("AjYAMIAAgXIGxAAIAAAXg");
	this.shape_228.setTransform(121.3,109.4);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#EA600A").s().p("AjYAMIAAgXIGxAAIAAAXg");
	this.shape_229.setTransform(121.3,96.4);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#EA600A").s().p("AjYAMIAAgXIGxAAIAAAXg");
	this.shape_230.setTransform(121.3,82.2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#EA600A").s().p("AjYAMIAAgXIGxAAIAAAXg");
	this.shape_231.setTransform(121.3,69.6);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#EA600A").s().p("AlLOIIAA1xIB7AAIAAkMIB2AAIAAiSICtAAIAACSIB3AAIAAEMICBAAIAAVxgAkvNsIJfAAIAA05IiCAAIAAkMIh3AAIAAiSIh1AAIAACSIh3AAIAAEMIh6AAg");
	this.shape_232.setTransform(111.4,102.7);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#EA600A").s().p("AhABmIAAjLICBAAIAADLgAguBTIBdAAIAAilIhdAAg");
	this.shape_233.setTransform(313.9,166);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFFFF").s().p("Ag3BcIAAi3IBvAAIAAC3g");
	this.shape_234.setTransform(313.9,165.9);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#EA600A").s().p("AhABmIAAjLICBAAIAADLgAguBTIBdAAIAAilIhdAAg");
	this.shape_235.setTransform(296.9,166);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("Ag3BcIAAi3IBvAAIAAC3g");
	this.shape_236.setTransform(296.9,165.9);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#EA600A").s().p("AhABmIAAjLICBAAIAADLgAguBTIBdAAIAAilIhdAAg");
	this.shape_237.setTransform(279.9,166);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("Ag3BcIAAi3IBvAAIAAC3g");
	this.shape_238.setTransform(279.9,165.9);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#EA600A").s().p("AhABmIAAjLICBAAIAADLgAguBTIBdAAIAAilIhdAAg");
	this.shape_239.setTransform(314.8,141.1);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("Ag3BdIAAi5IBvAAIAAC5g");
	this.shape_240.setTransform(314.8,141.1);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#EA600A").s().p("AhABmIAAjLICBAAIAADLgAguBTIBdAAIAAilIhdAAg");
	this.shape_241.setTransform(297.8,141.1);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFFFF").s().p("Ag3BdIAAi5IBvAAIAAC5g");
	this.shape_242.setTransform(297.8,141.1);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#EA600A").s().p("AhABmIAAjLICBAAIAADLgAguBTIBdAAIAAilIhdAAg");
	this.shape_243.setTransform(280.8,141.1);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("Ag3BdIAAi5IBvAAIAAC5g");
	this.shape_244.setTransform(280.8,141.1);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#EA600A").s().p("AhABlIAAjJICBAAIAADJgAguBTIBdAAIAAilIhdAAg");
	this.shape_245.setTransform(314.8,116.3);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFFFF").s().p("Ag3BcIAAi3IBvAAIAAC3g");
	this.shape_246.setTransform(314.8,116.3);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#EA600A").s().p("AhABlIAAjJICBAAIAADJgAguBTIBdAAIAAilIhdAAg");
	this.shape_247.setTransform(297.8,116.3);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("Ag3BcIAAi3IBvAAIAAC3g");
	this.shape_248.setTransform(297.8,116.3);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#EA600A").s().p("AhABlIAAjJICBAAIAADJgAguBTIBdAAIAAilIhdAAg");
	this.shape_249.setTransform(280.8,116.3);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFFFF").s().p("Ag3BcIAAi3IBvAAIAAC3g");
	this.shape_250.setTransform(280.8,116.3);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#EA600A").s().p("AksJUIAAynIJZDyIAAO1gAkQI4IIhAAIAAuGIohjcg");
	this.shape_251.setTransform(297.4,133.5);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AkdJDIAAyFII7DnIAAOeg");
	this.shape_252.setTransform(297.4,133.9);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#EA600A").s().p("AhHBIIAAiPICOAAIAACPgAg0A1IBpAAIAAhpIhpAAg");
	this.shape_253.setTransform(533.6,159.5);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("Ag+A+IAAh7IB8AAIAAB7g");
	this.shape_254.setTransform(533.6,159.5);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#EA600A").s().p("AhHBIIAAiPICPAAIAACPgAg0A1IBpAAIAAhpIhpAAg");
	this.shape_255.setTransform(515.3,159.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("Ag9A+IAAh7IB8AAIAAB7g");
	this.shape_256.setTransform(515.4,159.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#EA600A").s().p("AhHBIIAAiPICPAAIAACPgAg0A1IBpAAIAAhpIhpAAg");
	this.shape_257.setTransform(497.1,159.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFFFFF").s().p("Ag9A+IAAh7IB7AAIAAB7g");
	this.shape_258.setTransform(497.1,159.5);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#EA600A").s().p("AhHBIIAAiPICOAAIAACPgAg0A1IBpAAIAAhpIhpAAg");
	this.shape_259.setTransform(533.6,136.4);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFFFFF").s().p("Ag+A+IAAh7IB8AAIAAB7g");
	this.shape_260.setTransform(533.6,136.4);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#EA600A").s().p("AhHBIIAAiPICPAAIAACPgAg0A1IBpAAIAAhpIhpAAg");
	this.shape_261.setTransform(515.3,136.4);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFFFFF").s().p("Ag9A+IAAh7IB8AAIAAB7g");
	this.shape_262.setTransform(515.4,136.4);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#EA600A").s().p("AhHBIIAAiPICPAAIAACPgAg0A1IBpAAIAAhpIhpAAg");
	this.shape_263.setTransform(497.1,136.4);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFFFFF").s().p("Ag9A+IAAh7IB7AAIAAB7g");
	this.shape_264.setTransform(497.1,136.4);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#EA600A").s().p("AhHBIIAAiPICOAAIAACPgAg0A1IBpAAIAAhpIhpAAg");
	this.shape_265.setTransform(533.6,113.4);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFFFFF").s().p("Ag+A/IAAh9IB8AAIAAB9g");
	this.shape_266.setTransform(533.6,113.4);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#EA600A").s().p("AhHBIIAAiPICPAAIAACPgAg0A1IBpAAIAAhpIhpAAg");
	this.shape_267.setTransform(515.3,113.4);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FFFFFF").s().p("Ag9A/IAAh9IB8AAIAAB9g");
	this.shape_268.setTransform(515.4,113.4);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#EA600A").s().p("AhHBIIAAiPICPAAIAACPgAg0A1IBpAAIAAhpIhpAAg");
	this.shape_269.setTransform(497.1,113.4);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FFFFFF").s().p("Ag9A/IAAh9IB7AAIAAB9g");
	this.shape_270.setTransform(497.1,113.4);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#EA600A").s().p("AlAIcIAAw3IKBAAIAAQ3gAkkIAIJKAAIAAv/IpKAAg");
	this.shape_271.setTransform(515.3,139.1);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#EA600A").s().p("AhHBHIAAiOICPAAIAACOgAg0A1IBpAAIAAhpIhpAAg");
	this.shape_272.setTransform(192.6,127.7);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FFFFFF").s().p("Ag9A+IAAh8IB7AAIAAB8g");
	this.shape_273.setTransform(192.6,127.7);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#EA600A").s().p("AhHBHIAAiOICPAAIAACOgAg0A1IBpAAIAAhpIhpAAg");
	this.shape_274.setTransform(174.3,127.7);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFFFFF").s().p("Ag9A+IAAh8IB7AAIAAB8g");
	this.shape_275.setTransform(174.3,127.7);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#EA600A").s().p("AhHBHIAAiOICPAAIAACOgAg0A1IBpAAIAAhpIhpAAg");
	this.shape_276.setTransform(156.1,127.7);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FFFFFF").s().p("Ag+A+IAAh8IB8AAIAAB8g");
	this.shape_277.setTransform(156.1,127.7);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#EA600A").s().p("AhHBIIAAiPICPAAIAACPgAg0A1IBpAAIAAhpIhpAAg");
	this.shape_278.setTransform(192.6,104.6);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFFFFF").s().p("Ag9A+IAAh8IB7AAIAAB8g");
	this.shape_279.setTransform(192.6,104.7);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#EA600A").s().p("AhHBIIAAiPICPAAIAACPgAg0A1IBpAAIAAhpIhpAAg");
	this.shape_280.setTransform(174.3,104.6);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFFFFF").s().p("Ag9A+IAAh8IB7AAIAAB8g");
	this.shape_281.setTransform(174.3,104.7);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#EA600A").s().p("AhHBIIAAiPICPAAIAACPgAg0A1IBpAAIAAhpIhpAAg");
	this.shape_282.setTransform(156.1,104.6);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFFFFF").s().p("Ag+A+IAAh8IB8AAIAAB8g");
	this.shape_283.setTransform(156.1,104.7);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#EA600A").s().p("AhHBIIAAiPICPAAIAACPgAg0A1IBpAAIAAhpIhpAAg");
	this.shape_284.setTransform(192.6,81.6);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FFFFFF").s().p("Ag9A+IAAh7IB7AAIAAB7g");
	this.shape_285.setTransform(192.6,81.6);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#EA600A").s().p("AhHBIIAAiPICPAAIAACPgAg0A1IBpAAIAAhpIhpAAg");
	this.shape_286.setTransform(174.3,81.6);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFFFFF").s().p("Ag9A+IAAh7IB7AAIAAB7g");
	this.shape_287.setTransform(174.3,81.6);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#EA600A").s().p("AhHBIIAAiPICPAAIAACPgAg0A1IBpAAIAAhpIhpAAg");
	this.shape_288.setTransform(156.1,81.6);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFFFFF").s().p("Ag+A+IAAh7IB8AAIAAB7g");
	this.shape_289.setTransform(156.1,81.6);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#EA600A").s().p("AhHBIIAAiPICPAAIAACPgAg0A1IBpAAIAAhpIhpAAg");
	this.shape_290.setTransform(192.6,58.5);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFFFFF").s().p("Ag9A+IAAh7IB7AAIAAB7g");
	this.shape_291.setTransform(192.6,58.5);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#EA600A").s().p("AhHBIIAAiPICPAAIAACPgAg0A1IBpAAIAAhpIhpAAg");
	this.shape_292.setTransform(174.3,58.5);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FFFFFF").s().p("Ag9A+IAAh7IB7AAIAAB7g");
	this.shape_293.setTransform(174.3,58.5);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#EA600A").s().p("AhHBIIAAiPICPAAIAACPgAg0A1IBpAAIAAhpIhpAAg");
	this.shape_294.setTransform(156.1,58.5);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FFFFFF").s().p("Ag+A+IAAh7IB8AAIAAB7g");
	this.shape_295.setTransform(156.1,58.5);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#EA600A").s().p("AhHBHIAAiOICPAAIAACOgAg0A1IBpAAIAAhpIhpAAg");
	this.shape_296.setTransform(192.6,35.5);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FFFFFF").s().p("Ag9A+IAAh8IB7AAIAAB8g");
	this.shape_297.setTransform(192.6,35.5);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#EA600A").s().p("AhHBHIAAiOICPAAIAACOgAg0A1IBpAAIAAhpIhpAAg");
	this.shape_298.setTransform(174.3,35.5);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FFFFFF").s().p("Ag9A+IAAh8IB7AAIAAB8g");
	this.shape_299.setTransform(174.3,35.5);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#EA600A").s().p("AhHBHIAAiOICPAAIAACOgAg0A1IBpAAIAAhpIhpAAg");
	this.shape_300.setTransform(156.1,35.5);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#FFFFFF").s().p("Ag+A+IAAh8IB8AAIAAB8g");
	this.shape_301.setTransform(156.1,35.5);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#EA600A").s().p("AlAN/IAA79IKBAAIAAb9gAklNjIJLAAIAA7FIpLAAg");
	this.shape_302.setTransform(174.3,103.6);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#EA600A").s().p("AjLPDIAA+FIGWEAIAAaFgAivOnIFeAAIAA5ZIlejeg");
	this.shape_303.setTransform(287.7,96.3);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#EA600A").s().p("ADjLRQgFgEAAgHIAAx9QAAhphKhKQhLhLhoAAIjOAAQgHAAgEgFQgFgEAAgHQAAgHAFgEQAEgEAHgBIDOAAQB1ABBUBTQBUBUAAB2IAAR9QAAAHgFAEQgEAFgHgBQgGABgFgFg");
	this.shape_304.setTransform(544.1,120.4);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#EA600A").s().p("ADjLRQgFgEAAgHIAAx9QAAhphKhKQhKhLhoAAIjPAAQgHAAgEgFQgFgEAAgHQAAgHAFgEQAEgEAHgBIDPAAQB0ABBUBTQBUBUAAB2IAAR9QAAAHgFAEQgEAFgHgBQgGABgFgFg");
	this.shape_305.setTransform(32.7,120.4);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#EA600A").s().p("AgoiNIAbgFIA2EgIgbAFg");
	this.shape_306.setTransform(467.1,126.7);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#EA600A").s().p("AgciPIAbgEIAeEkIgbADg");
	this.shape_307.setTransform(455.7,126.6);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#EA600A").s().p("AgYiRIAbgBIAWEjIgaADg");
	this.shape_308.setTransform(445,126.6);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#EA600A").s().p("AgoCOIA2kgIAbAFIg2Egg");
	this.shape_309.setTransform(399.8,126.7);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#EA600A").s().p("AgcCRIAekkIAbAEIgeEjg");
	this.shape_310.setTransform(411.3,126.6);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#EA600A").s().p("AgYCRIAWkjIAbABIgWElg");
	this.shape_311.setTransform(421.9,126.6);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#EA600A").s().p("AgLCUIAAknIAXAAIAAEng");
	this.shape_312.setTransform(434.2,126.2);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#EA600A").s().p("AmlCgQgiAAgVgcQgUgdAMghIBQjlIMpAAIBRDlQALAigUAcQgVAcgiAAgAnKBQQgHAUAMAQQAMAQAUAAINLAAQAUAAAMgQQAMgRgHgUIhKjSIsCAAg");
	this.shape_313.setTransform(433.2,126.9);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FFFFFF").s().p("AmlCTQgbgBgQgWQgQgXAJgaIBNjdIMVAAIBNDdQAKAagQAXQgQAWgcABg");
	this.shape_314.setTransform(433.2,126.9);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#EA600A").s().p("AhvC9IAAl5IDfAAIAAF5gAhUChICoAAIAAlBIioAAg");
	this.shape_315.setTransform(457.8,164.8);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#EA600A").s().p("AiyAmIAAhKIFlAAIAABKgAiWAKIEuAAIAAgTIkuAAg");
	this.shape_316.setTransform(419,173);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#EA600A").s().p("Ag4AMIAAgXIBxAAIAAAXg");
	this.shape_317.setTransform(424.9,158.4);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#EA600A").s().p("AgLB5IAAjwIAXAAIAADwg");
	this.shape_318.setTransform(418.4,157.8);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#EA600A").s().p("AiECFIAAkJIEJAAIAAEJgAhoBpIDRAAIAAjRIjRAAg");
	this.shape_319.setTransform(418.8,158.4);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#EA600A").s().p("An5A8IAAgPQAAgrAfgdQAfgfArgBIMhAAQArABAfAfQAfAdAAArIAAAPgAnBgMQgWARgFAbIO5AAQgFgbgVgRQgWgTgcABIshAAQgcgBgVATg");
	this.shape_320.setTransform(433.4,186.8);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#EA600A").s().p("AmYFsIAArXIMxAAIAALXgAl9FQIL6AAIAAqfIr6AAg");
	this.shape_321.setTransform(433.2,147.3);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#EA600A").s().p("AhdAMQgGAAgDgEQgEgDAAgFQAAgEAEgDQADgEAGAAIC8AAQAFAAADAEQADADABAEQgBAFgDADQgDAEgFAAg");
	this.shape_322.setTransform(759.3,59.2);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#EA600A").s().p("AhdAMQgGAAgDgEQgEgDAAgFQAAgEAEgDQADgEAGAAIC8AAQAFAAADAEQADADABAEQgBAFgDADQgDAEgFAAg");
	this.shape_323.setTransform(759.3,69.5);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#EA600A").s().p("AhwAQQgGAAgFgFQgEgFAAgGQAAgGAEgEQAFgFAGAAIDgAAQAHAAAFAFQAEAEAAAGQAAAHgEAEQgFAFgHAAg");
	this.shape_324.setTransform(999.2,55);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#EA600A").s().p("AhvAQQgHAAgFgFQgEgEAAgHQAAgGAEgEQAFgFAHAAIDgAAQAGAAAFAFQAEAEAAAGQAAAGgEAFQgFAFgGAAg");
	this.shape_325.setTransform(531.5,55);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#EA600A").s().p("AheAMQgFAAgDgEQgDgDgBgFQABgEADgDQADgEAFAAIC8AAQAGAAADAEQAEADAAAEQAAAFgEADQgDAEgGAAg");
	this.shape_326.setTransform(278,71.1);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#EA600A").s().p("AheAMQgFAAgDgEQgDgDgBgFQABgEADgDQADgEAFAAIC8AAQAGAAADAEQAEADAAAEQAAAFgEADQgDAEgGAAg");
	this.shape_327.setTransform(278,61.7);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#EA600A").s().p("AheAMQgFAAgDgEQgDgDgBgFQABgEADgDQADgEAFAAIC8AAQAGAAADAEQAEADAAAEQAAAFgEADQgDAEgGAAg");
	this.shape_328.setTransform(278,30.1);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#EA600A").s().p("AheAMQgFAAgDgEQgDgDgBgFQABgEADgEQADgDAFAAIC8AAQAGAAADADQAEAEAAAEQAAAFgEADQgDAEgGAAg");
	this.shape_329.setTransform(278,51);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#EA600A").s().p("AheAMQgFAAgDgDQgDgEgBgFQABgEADgDQADgEAFAAIC8AAQAGAAADAEQAEADAAAEQAAAFgEAEQgDADgGAAg");
	this.shape_330.setTransform(278,40.4);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#EA600A").s().p("AhvAQQgHAAgEgFQgFgFAAgGQAAgGAFgEQAEgFAHAAIDgAAQAGAAAFAFQAEAEAAAGQAAAGgEAFQgFAFgGAAg");
	this.shape_331.setTransform(20,55);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128,this.shape_129,this.shape_130,this.shape_131,this.shape_132,this.shape_133,this.shape_134,this.shape_135,this.shape_136,this.shape_137,this.shape_138,this.shape_139,this.shape_140,this.shape_141,this.shape_142,this.shape_143,this.shape_144,this.shape_145,this.shape_146,this.shape_147,this.shape_148,this.shape_149,this.shape_150,this.shape_151,this.shape_152,this.shape_153,this.shape_154,this.shape_155,this.shape_156,this.shape_157,this.shape_158,this.shape_159,this.shape_160,this.shape_161,this.shape_162,this.shape_163,this.shape_164,this.shape_165,this.shape_166,this.shape_167,this.shape_168,this.shape_169,this.shape_170,this.shape_171,this.shape_172,this.shape_173,this.shape_174,this.shape_175,this.shape_176,this.shape_177,this.shape_178,this.shape_179,this.shape_180,this.shape_181,this.shape_182,this.shape_183,this.shape_184,this.shape_185,this.shape_186,this.shape_187,this.shape_188,this.shape_189,this.shape_190,this.shape_191,this.shape_192,this.shape_193,this.shape_194,this.shape_195,this.shape_196,this.shape_197,this.shape_198,this.shape_199,this.shape_200,this.shape_201,this.shape_202,this.shape_203,this.shape_204,this.shape_205,this.shape_206,this.shape_207,this.shape_208,this.shape_209,this.shape_210,this.shape_211,this.shape_212,this.shape_213,this.shape_214,this.shape_215,this.shape_216,this.shape_217,this.shape_218,this.shape_219,this.shape_220,this.shape_221,this.shape_222,this.shape_223,this.shape_224,this.shape_225,this.shape_226,this.shape_227,this.shape_228,this.shape_229,this.shape_230,this.shape_231,this.shape_232,this.shape_233,this.shape_234,this.shape_235,this.shape_236,this.shape_237,this.shape_238,this.shape_239,this.shape_240,this.shape_241,this.shape_242,this.shape_243,this.shape_244,this.shape_245,this.shape_246,this.shape_247,this.shape_248,this.shape_249,this.shape_250,this.shape_251,this.shape_252,this.shape_253,this.shape_254,this.shape_255,this.shape_256,this.shape_257,this.shape_258,this.shape_259,this.shape_260,this.shape_261,this.shape_262,this.shape_263,this.shape_264,this.shape_265,this.shape_266,this.shape_267,this.shape_268,this.shape_269,this.shape_270,this.shape_271,this.shape_272,this.shape_273,this.shape_274,this.shape_275,this.shape_276,this.shape_277,this.shape_278,this.shape_279,this.shape_280,this.shape_281,this.shape_282,this.shape_283,this.shape_284,this.shape_285,this.shape_286,this.shape_287,this.shape_288,this.shape_289,this.shape_290,this.shape_291,this.shape_292,this.shape_293,this.shape_294,this.shape_295,this.shape_296,this.shape_297,this.shape_298,this.shape_299,this.shape_300,this.shape_301,this.shape_302,this.shape_303,this.shape_304,this.shape_305,this.shape_306,this.shape_307,this.shape_308,this.shape_309,this.shape_310,this.shape_311,this.shape_312,this.shape_313,this.shape_314,this.shape_315,this.shape_316,this.shape_317,this.shape_318,this.shape_319,this.shape_320,this.shape_321,this.shape_322,this.shape_323,this.shape_324,this.shape_325,this.shape_326,this.shape_327,this.shape_328,this.shape_329,this.shape_330,this.shape_331];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_16, new cjs.Rectangle(7.2,41.7,1190.3,146.6), null);


(lib.ClipGroup_15_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah0AOIDKhFQAJgDAJAEQAIAEADAJQAEAJgFAJQgEAIgJADIjKBFg");
	mask.setTransform(12.9,11.6);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E0D7BE","#E2D9C1","#EEE8D3","#F2EDD9","#F2EDD9"],[0,0.067,0.592,0.973,1],-11.6,-0.5,11.3,0.5).s().p("AiBBlIAJjVID6ALIgJDWg");
	this.shape.setTransform(13,11.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_15_0, new cjs.Rectangle(1.2,5.9,23.4,11.5), null);


(lib.ClipGroup_14_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah1APIDNhHQAJgDAJAEQAIAEADAJQADAJgEAJQgEAIgJADIjRBHg");
	mask.setTransform(13.3,11.8);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E0D7BE","#E2D9C1","#EEE8D3","#F2EDD9","#F2EDD9"],[0,0.067,0.592,0.973,1],-11.6,-0.5,11.7,0.5).s().p("AiFBoIAKjaIEBALIgKDag");
	this.shape.setTransform(13.4,11.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14_1, new cjs.Rectangle(1.5,6,23.7,11.7), null);


(lib.ClipGroup_13_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah0AOIDLhFQAJgDAIAEQAJAEADAJQADAJgEAJQgEAIgJADIjLBGg");
	mask.setTransform(12.9,11.7);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E0D7BE","#E2D9C1","#EEE8D3","#F2EDD9","#F2EDD9"],[0,0.067,0.592,0.973,1],-11.6,-0.5,11.4,0.5).s().p("AiCBmIAKjXID7AMIgKDWg");
	this.shape.setTransform(13.1,11.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13_1, new cjs.Rectangle(1.2,6,23.5,11.5), null);


(lib.ClipGroup_12_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhsALIC6g/QAJgDAIAEQAJAEADAJQADAJgEAJQgEAIgJADIi6A/g");
	mask.setTransform(12.1,11);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E0D7BE","#E2D9C1","#EEE8D3","#F2EDD9","#F2EDD9"],[0,0.067,0.592,0.973,1],-10.8,-0.4,10.5,0.5).s().p("Ah5BgIAJjJIDqAKIgJDJg");
	this.shape.setTransform(12.2,10.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12_2, new cjs.Rectangle(1.2,5.6,21.7,10.8), null);


(lib.ClipGroup_12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AilA2IB1gnIA/hAICDgUIAZBXIlVA0g");
	mask.setTransform(21.3,18.1);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#5A2B25","#542823","#43201D","#371A18"],[0,0.325,0.761,1],3,1.1,15.6,5.5).s().p("AjUA4IBPjsIFaB+IhPDrg");
	this.shape.setTransform(21.3,18.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12_1, new cjs.Rectangle(4.2,11.1,34.2,14.1), null);


(lib.ClipGroup_11_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AA/LxQgDmhhDkYQhHkli4k6QAAgIgGgGQgGgGgIAAIgCAAIAFhaQAEg5AAgiIFRAAQCfGhArFDQAqE7goHCg");
	mask.setTransform(52.8,85.1);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D64C15","#E4580E","#EA5D0B"],[0,0.522,1],-33.6,-5.5,8.7,1.5).s().p("AogLJIED4bIM+CKIkDYbg");
	this.shape.setTransform(54.5,85.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11_2, new cjs.Rectangle(24.3,9.8,57.1,150.7), null);


(lib.ClipGroup_11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApagDQAWkkBqmiIKBg9QBdG4BeE9QBeE/CiGlIirAuQjrmEh0kSQhzkThal+QgBgJgGgFQgGgFgIABQgHABgFAGQgFAGAAAIQiGFzgzEHQg5EsADGDIipABQhAmyAZlYg");
	mask.setTransform(90.9,100.1);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D95725","#E66325","#EC6825"],[0,0.518,1],-61.8,10.9,-31.8,5.6).s().p("At2rYIXIkQIElbBI3IEQg");
	this.shape.setTransform(88.7,100.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11_1, new cjs.Rectangle(29.9,22.6,122,155.1), null);


(lib.ClipGroup_10_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("An7JxQEPk7B0kPQCMlJAFnAIHjAdQhyGki9FUQjgGXlEEZg");
	mask.setTransform(95.5,104.6);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D64C15","#E4580E","#EA5D0B"],[0,0.522,1],-14.2,-4.7,14.2,4.8).s().p("Au6JMIIm5hIVPHKIomZhg");
	this.shape.setTransform(95.5,104.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10_2, new cjs.Rectangle(44.7,30.7,101.6,147.8), null);


(lib.ClipGroup_10_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiUh2IEjgGIAGDzIkjAGg");
	mask.setTransform(21.5,21.2);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DBC7AC","#E3CFB5","#EDD9C1","#F2DFC8","#F4E1CA"],[0,0.075,0.227,0.443,1],-0.8,-2.6,3.7,12.2).s().p("AjWhnIFShsIBbE7IlSBrg");
	this.shape.setTransform(21.5,21.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10_1, new cjs.Rectangle(6.7,8.6,29.8,25.1), null);


(lib.ClipGroup_9_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ai4AvIANhdICOAAIBNA4ICCAUIAHARg");
	mask.setTransform(22.4,19.9);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#622F25","#5C2D23","#4A261F","#3D211B"],[0,0.318,0.753,1],-3.5,1.9,-16.1,8.4).s().p("AjfgaIFJisIB2DhIlJCsg");
	this.shape.setTransform(22.4,19.9);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9_2, new cjs.Rectangle(3.9,15.2,37.1,9.4), null);


(lib.ClipGroup_9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AitC+QhMhLgChtQgDhsBIhPQBJhPBogCIAFAAQBnAABJBLQBKBLACBrQADBshIBPQhJBPhoACIgGAAQhkAAhJhJg");
	mask.setTransform(35.8,37.1);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DBC7AC","#E3CFB5","#EDD9C1","#F2DFC8","#F4E1CA"],[0,0.075,0.227,0.443,1],-5.1,24.2,5.5,-25.9).s().p("AllDyIB8pmIJPCCIh8Jng");
	this.shape.setTransform(35.8,37.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9_1, new cjs.Rectangle(10.6,10.8,50.5,52.7), null);


(lib.ClipGroup_8_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgggsQgCgGADgHQADgGAHgDQAHgCAHAEQAGADABAHIAiBwIghAKg");
	mask.setTransform(7,8);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DBC6AB","#E0CCB2","#EFDBC4","#F4E0CA","#F4E0CA"],[0,0.145,0.624,0.973,1],29.4,-98.8,27.3,-91.6).s().p("AhDAxIAlh+IBiAeIglB9g");
	this.shape.setTransform(6.8,7.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8_5, new cjs.Rectangle(3.7,1.3,6.8,13.5), null);


(lib.ClipGroup_8_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiYhIIBChFIByBSIAfBaIBdBdIgDASg");
	mask.setTransform(19.2,18.4);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#622F25","#5C2D23","#4A261F","#3D211B"],[0,0.318,0.753,1],-1.5,-0.2,-15.5,-2.1).s().p("Ai/CIIAtk/IFSAwIgtE/g");
	this.shape.setTransform(19.2,18.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8_2, new cjs.Rectangle(3.9,4.2,30.5,28.4), null);


(lib.ClipGroup_7_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AghgvQgCgHADgGQAEgGAHgDQAHgCAGAEQAGADACAHIAjB1IgiAKg");
	mask.setTransform(7.3,8.3);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DBC6AB","#E0CCB2","#EFDBC4","#F4E0CA","#F4E0CA"],[0,0.145,0.624,0.973,1],29.9,-100.5,27.7,-93.1).s().p("AhGAyIAniCIBmAfIgoCCg");
	this.shape.setTransform(7.1,8.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7_5, new cjs.Rectangle(3.8,1.3,7,14.1), null);


(lib.ClipGroup_7_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AipBrIAcj4IE2AjIgcD4g");
	mask.setTransform(21.4,19.5);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DBC6AB","#E3CFB5","#EDD9C1","#F2DEC8","#F4E0CA"],[0,0.082,0.235,0.443,1],-0.4,-2.7,2.1,12.8).s().p("AjViGIF2g8IA1FJIl2A8g");
	this.shape.setTransform(21.4,19.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7_2, new cjs.Rectangle(4.5,5.4,33.9,28.4), null);


(lib.ClipGroup_7_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A62VGMAAAgqLMA1tAAAMAAAAqLg");
	mask.setTransform(171.9,135);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AKcA+IpZguQg3gFivgKQivgKgzgEIkYgdQijgThtgOQBuAFCkAJIEYAUQAyAECwAJQCwAIA3AFIJYA7QCjASBtAOQhugEikgKg");
	this.shape.setTransform(145.8,131.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AFECBQgIgxghg6QgmhChJguQhOgyheAAQgtAAgtANQgsAMglAZQhIAtgnBDQghA8gIAvQgFAcgBAQIAAgLQgCgTACgPQACgWAGgdQAJgiAOgeQAohPBHgwQApgbAvgPQAygPAxgBQAzABAwAPQAxAPAnAbQBIAwAoBPQAQAhAHAfQAGAdACAWQACAOgCAUIAAALQgBgQgFgcg");
	this.shape_1.setTransform(238.8,170.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ACqCqQgjgCiVgEQiPgDgpgDIjzgPIgBgLQgOhlguhLQguhPhUg5QBaAuA3BRQAyBJAUBgIDcAKIC5AHIC3AIQDyAPDcAYQjeABjxgLg");
	this.shape_2.setTransform(133.7,173.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E30613").s().p("Ag0CSQgMgKgIghQgIghAEgWQAIgtALgvQAWheAOgKQAkgYAiBhQAeBUAABGQAAAYg0AfQghAUgWAAQgOAAgKgIg");
	this.shape_3.setTransform(39,138.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F6E943").s().p("AAuBNIgbgYQg2gygmg9QgJgOAEgJQAGgLAXACQBGAJAcAgQATAWAIA4QAIA2gKAHIgCABQgIAAgSgOg");
	this.shape_4.setTransform(256.9,144.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#EB6218","#FFFFFF"],[0,1],-72.6,0,72.6,0).s().p("ArVByQgEg9AahFQA0iLCTgrQBngeDIADQDvAFCbA+QDCBOC9ChQBfBQA3BBg");
	this.shape_5.setTransform(144.7,108.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C7C7C7").s().p("AiQCRQg8g8AAhVQAAhUA8g8QA9g8BTAAQBVAAA8A8QA8A8AABUQAABVg8A8Qg8A8hVAAQhTAAg9g8g");
	this.shape_6.setTransform(240,191.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1B").s().p("AjQDQQhVhWgBh6QABh5BVhWQBXhWB5AAQB6AABWBWQBWBWABB5QgBB6hWBWQhWBXh6gBQh5ABhXhXg");
	this.shape_7.setTransform(240,191.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C7C7C7").s().p("AiQCRQg8g8AAhVQAAhUA8g8QA9g8BTAAQBVAAA8A8QA8A8AABUQAABVg8A8Qg8A8hVAAQhTAAg9g8g");
	this.shape_8.setTransform(51.6,191.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1D1B").s().p("AjPDQQhXhWABh6QgBh5BXhWQBWhWB5AAQB6AABWBWQBWBWAAB5QAAB6hWBWQhWBXh6gBQh5ABhWhXg");
	this.shape_9.setTransform(51.7,191.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EA600A").s().p("AtFJqQhpgFhugJQjbgSgWgWQgegegEheQgFhnAnhMQAZgvAnglIAigcQgVhNABgaQAFhRBPjaIBOjJQgXgQgBgIQgBgEAIgLIAHgKQC1gwDsgiQHZhDETBKQEUBKDGC1QBjBaAsBMIDDAoQDMAwAoApQApAngBBPQAAAngIAfIAuAxQAzBBAXBRQAXBPgFBBQgEA8gaAaQgUAVg+AIIg6AEg");
	this.shape_10.setTransform(147.3,139.8);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7_0, new cjs.Rectangle(14.5,78.1,265.8,142.8), null);


(lib.ClipGroup_6_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgggsQgCgHADgGQAEgHAHgCQAHgCAGAEQAGADABAHIAiBwIghAKg");
	mask.setTransform(7,8);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DBC6AB","#E0CCB2","#EFDBC4","#F4E0CA","#F4E0CA"],[0,0.145,0.624,0.973,1],30.5,-102.5,28.4,-95.3).s().p("AhEAxIAmh+IBiAeIgmB9g");
	this.shape.setTransform(6.9,7.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_5, new cjs.Rectangle(3.7,1.3,6.8,13.5), null);


(lib.ClipGroup_6_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ai3DGQhShMgEhwQgFhvBNhSQBMhSBwgFIAJAAQBtAABPBMQBPBLAEBtQAEBvhMBTQhNBShwAEIgKABQhpAAhOhJg");
	mask.setTransform(37.9,37.5);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DBC6AB","#E3CFB5","#EDD9C1","#F2DEC8","#F4E0CA"],[0,0.082,0.235,0.443,1],-4.8,24.7,5.2,-26.5).s().p("Al6D9IB7p1IJ6B8Ih7J1g");
	this.shape.setTransform(37.9,37.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_2, new cjs.Rectangle(10.9,10.4,54.1,54.1), null);


(lib.ClipGroup_6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag6BIIgEiNQAUgNAXgBIACAAQAfAAAYAYQAYAYAAAiQABAigXAZQgXAZghABIgBAAQgWAAgTgMg");
	mask.setTransform(14.2,14.9);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F4E1CA","#F4E1CA","#EFDBC4","#E0CCB2","#DBC7AC"],[0,0.027,0.384,0.878,1],-3.8,-3.2,4.9,4.2).s().p("AiOAOICFiiICYCIIiEChg");
	this.shape.setTransform(14.3,14.9);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_1, new cjs.Rectangle(8,6.5,12.5,16.8), null);


(lib.ClipGroup_5_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgfgmQgCgHAEgHQADgGAHgCQAHgCAGADQAGAEACAHIAeBkIggAKg");
	mask.setTransform(6.6,7.5);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DBC6AB","#E0CCB2","#EFDBC4","#F4E0CA","#F4E0CA"],[0,0.145,0.624,0.973,1],31.3,-104.9,29.1,-97.5).s().p("Ag/AtIAjh0IBcAcIgjBzg");
	this.shape.setTransform(6.4,7.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_5, new cjs.Rectangle(3.4,1.3,6.5,12.4), null);


(lib.ClipGroup_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AisAuIAHgQIB6gUIBHg3ICEAAIANBbg");
	mask.setTransform(20.9,19.4);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#5A2B25","#542823","#43201D","#371A18"],[0,0.325,0.761,1],3.5,1.8,15.3,8).s().p("AjQAaIBujbIEyCoIhtDbg");
	this.shape.setTransform(20.9,19.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_1, new cjs.Rectangle(3.6,14.8,34.6,9.1), null);


(lib.ClipGroup_4_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiOg/IDpg6IA0DRIjuAig");
	mask.setTransform(18.8,17.8);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DBC6AB","#E3CFB5","#EDD9C1","#F2DEC8","#F4E0CA"],[0,0.082,0.235,0.443,1],-0.1,0.3,7.1,12.9).s().p("Ai6gmID1iLICAEVIj6BOg");
	this.shape.setTransform(18.7,17.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_5, new cjs.Rectangle(4.5,5.6,28.5,24.5), null);


(lib.ClipGroup_4_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgnA/QgagYgBgkQgCgjAZgaQAYgaAjgBIADAAQAYAAATALIAFCRQgUAPgZAAIgDAAQghAAgZgXg");
	mask.setTransform(15.6,15.5);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F4E0CA","#F4E0CA","#EFDBC4","#E0CCB2","#DBC6AB"],[0,0.027,0.376,0.855,1],3.8,-3.5,-4.8,4.7).s().p("AiagDICdiYICYCfIidCYg");
	this.shape.setTransform(15.5,15.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_2, new cjs.Rectangle(8.9,6.9,13.5,17.3), null);


(lib.ClipGroup_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AibgDQh0kRhZl0IFNAAQBMFNBXEZQBWETCLFqIirAuQjml+hzkOg");
	mask.setTransform(89.2,97.1);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D95725","#E66325","#EC6825"],[0,0.518,1],-12.8,7.3,0.3,-0.1).s().p("At7lRIQ3p5ILAUcIw3J5g");
	this.shape.setTransform(89.2,97.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_1, new cjs.Rectangle(53.1,32.2,72.3,129.8), null);


(lib.ClipGroup_3_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhnCtQhIgrgUhRQgUhQArhIQArhIBRgUQBQgUBIArQBIArAUBRQAUBQgrBIQgrBIhRAUQgaAGgYAAQg1AAgxgdg");
	mask.setTransform(24.6,24.7);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DBC6AB","#E3CFB5","#EDD9C1","#F2DEC8","#F4E0CA"],[0,0.082,0.235,0.443,1],0.3,19.1,-0.3,-19.9).s().p("Aj1juIHkgIIAHHlInkAIg");
	this.shape.setTransform(24.6,24.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_6, new cjs.Rectangle(4.4,4.4,40.5,40.5), null);


(lib.ClipGroup_3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsJcQAPjIATjdQAom6AWhrQAah/BShPQBVhTB0AAIAXABQB4AJBTBrQBJBgANB9QAUC2gOGdQgHDPgLCrg");
	mask.setTransform(93.5,98.2);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D64C15","#E4580E","#EA5D0B"],[0,0.522,1],-37.8,22,4,-2.3).s().p("AuwlEIRqqRIL3UaIxqKRg");
	this.shape.setTransform(94.5,98.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_3, new cjs.Rectangle(57,32.6,73.1,131.2), null);


(lib.ClipGroup_3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhBBGQgJgCgFgIIgDgEQgFgIACgJQACgJAHgFICIhfIAbAqIiIBfQgFAEgGAAIgFgBg");
	mask.setTransform(9.7,8.1);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DBC7AC","#E0CCB2","#EFDBC4","#F4E1CA","#F4E1CA"],[0,0.122,0.616,0.973,1],14.7,-0.8,7,-0.4).s().p("AhfhHIC3gLIAICZIi3ALg");
	this.shape.setTransform(9.6,8.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_2, new cjs.Rectangle(1.1,1.1,17.3,14.1), null);


(lib.ClipGroup_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzoMXIAA4tMAnRAAAIAAYtg");
	mask.setTransform(125.7,79.1);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6C7A89").s().p("Ag+BjQgigWgFgsQgGgrAagpQAagpAqgOQAqgNAiAVQAiAWAGAsQAFArgaApQgaApgqAOQgQAFgPAAQgYAAgVgNg");
	this.shape.setTransform(168.5,50);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhlB7QAIhIAjg9QAjg9A4gqQAVgPAYAMQAYAMAAAbQgBAWgRAMQhFAzgWBTQgDAOgMAJQgMAJgOAAg");
	this.shape_1.setTransform(28.6,85.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgHBIIAAiPIAPAAIAACPg");
	this.shape_2.setTransform(111.1,57.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C50700").s().p("AgPAzQgWgVABgeQgBgdAWgVQAWgVAfAAIAACPQgfAAgWgVg");
	this.shape_3.setTransform(106.5,57.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgwARQAAgOAKgJQAKgKAOAAIA/AAIAAAhg");
	this.shape_4.setTransform(339.7,126.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D91E18").s().p("AmBAIIAAgPIMDAAIAAAPg");
	this.shape_5.setTransform(235.2,61.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C50700").s().p("AgXAHIAAgNIAuAAIAAANg");
	this.shape_6.setTransform(248.5,121.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D91E18").s().p("AgIBrIAAjVIARAAIAADVg");
	this.shape_7.setTransform(252.2,51.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BDC3C7").s().p("AiNCOQg7g6AAhUQAAhSA7g7QA7g7BSAAQBTAAA7A7QA7A7AABSQAABUg7A6Qg6A7hUAAQhSAAg7g7gAh8h8Qg0A0AABIQAABJA0A0QA0A0BIAAQBJAAA0g0QA0g0AAhJQAAhIg0g0Qg0gzhJAAQhIAAg0Azg");
	this.shape_8.setTransform(72.6,122.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#ECF0F1").s().p("AgeAfQgNgNAAgSQAAgRANgNQANgNARABQASgBANANQANANAAARQAAASgNANQgNANgSAAQgRAAgNgNg");
	this.shape_9.setTransform(72.6,122.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BDC3C7").s().p("AgNDBQgHAAgEgFQgFgGABgGIAJhZQABgKgLgFIAAAAQgKgFgIAJIg4BFQgEAGgHgBQgHABgFgFIgTgTQgFgGAAgGQABgHAFgEIBFg4QAJgHgFgLIAAgBQgEgKgMABIhYAJQgHABgFgFQgFgEAAgIIAAgaQAAgGAFgFQAGgEAGAAIBYAJQAMABAEgLIAAAAQAFgLgJgHIhFg4QgFgEgBgHQAAgGAFgFIATgUQAFgFAHAAQAHABAEAFIA4BEQAIAKAKgFQALgEgBgLIgJhZQgBgGAFgGQAEgFAHAAIAbAAQAHAAAEAFQAFAGgBAGIgJBZQgBALALAEQAKAFAIgKIA4hEQAEgFAHgBQAHAAAFAFIATAUQAFAFAAAGQgBAHgFAEIhFA4QgJAHAFALIAAAAQAEALAMgBIBYgJQAHAAAFAEQAFAEAAAHIAAAaQAAAIgFAEQgFAFgHgBIhYgJQgMgBgEAKIAAABQgFALAJAHIBFA4QAFAEABAHQAAAGgFAGIgTATQgFAFgHgBQgHABgEgGIg4hFQgIgJgKAFIAAAAQgLAFABAKIAJBZQABAGgFAGQgEAFgHAAg");
	this.shape_10.setTransform(72.6,122.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AhhBiQgogpAAg5QAAg4AogoQApgpA4AAQA5AAApApQAoAoAAA4QAAA5goApQgpAog5AAQg4AAgpgog");
	this.shape_11.setTransform(72.6,122.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F3E8D5").s().p("AhlAZQgtgegTg0IFLAAQgTA0gtAeQgtAhg5AAQg3AAgughg");
	this.shape_12.setTransform(72.6,134);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#96281B").s().p("AilB3QgLgeAAgfQAAhIA0g0QA0g0BIAAQBJAAA0A0QA0A0AABIQAAAfgLAeg");
	this.shape_13.setTransform(72.6,116.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("Ai2C3QhMhMAAhrQAAhrBMhLQBMhMBqAAQBsAABLBMQBMBMAABqQAABrhMBMQhLBMhsAAQhqAAhMhMg");
	this.shape_14.setTransform(72.6,122.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D91E18").s().p("AGHDpIAAgfQAAgkgYgYIiZiVQhnhlh+g2QiAg2iIAAIhvAAIAAHBIgQAAIgBnRICAAAQCMAACCA3QCDA3BoBnICZCVQAdAdAAArIAAAfg");
	this.shape_15.setTransform(236,47);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C50700").s().p("AmVECIgCoDIARAAIACHzIHbAAQABg+AYg6QAXg4AqguQAqgtA3gbQA3gbA+gHIAAirIARAAIAACzQAAAHgIABQg9AEg2AbQg2AagqAsQgpAtgXA4QgWA5AAA9IAAAIg");
	this.shape_16.setTransform(236,96.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D91E18").s().p("AmuAIIAAgPINdAAIAAAPg");
	this.shape_17.setTransform(145,61.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C50700").s().p("AgpAIIAAgPIBTAAIAAAPg");
	this.shape_18.setTransform(105.3,121.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C50700").s().p("AliECIAAgIQgChfgxhOQg6hfgBhpIgBhlQAAgRADgQIARAAQgEAPAAASIAABdQABBpA6BeQAxBQAEBeIMQAAIACnzIARAAIgCIDg");
	this.shape_19.setTransform(143,96.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D91E18").s().p("AHADpIAAnBIh8AAQiYAAiOA2QiNA2hyBkIipCWQgqAlgLA2IgRAAQAMg+AvgqICpiVQB1hnCPg3QCRg3CbAAICNAAIgBHSg");
	this.shape_20.setTransform(143.2,47.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#9E1723").s().p("AgWA5QgGgEABgFIAAhhQgBgIALAAIAkAAQAKAAAAAIIAAA+QgBAPgKANQgLAMgSAFIgEAAQgEAAgDgBg");
	this.shape_21.setTransform(336.4,117);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#6C7A89").s().p("Ag3AhIARgsQAFgPARgFQAQgEAMAKIAZAZQANANAGAUg");
	this.shape_22.setTransform(267.3,58.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#AFDFF9").s().p("AmHC7IAAl1IB4AAQCKAACBA3QCAA2BoBlICkCjg");
	this.shape_23.setTransform(235.2,43.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F9920E").s().p("ABKB6QgPAAgNgJQgMgKgEgPQgXhYhKg2QgSgOAAgXQAAgQALgOQBBAkAqBAQAsBBAJBOg");
	this.shape_24.setTransform(322.1,85.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#9E1723").s().p("AA8CCQgJhOgshBQgqhAhBgjQALgOASgCQASgDAPALQA2ApAlA7QAkA6AMBFQABAJgGAHQgGAHgJAAg");
	this.shape_25.setTransform(324.7,84.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#ECF0F1").s().p("AhIAOQAAgMAIgHQAIgIALAAIBbAAQALAAAIAIQAIAHAAAMg");
	this.shape_26.setTransform(263.6,69);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D1D3D4").s().p("AgtAOQgLAAgIgIQgIgHAAgMICRAAQAAAMgIAHQgIAIgLAAg");
	this.shape_27.setTransform(263.6,71.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#ECF0F1").s().p("AhIAOQAAgMAIgHQAIgIAMAAIBZAAQAMAAAIAIQAIAHAAAMg");
	this.shape_28.setTransform(175.9,69);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D1D3D4").s().p("AgsAOQgMAAgIgIQgIgHAAgMICRAAQAAAMgIAHQgIAIgMAAg");
	this.shape_29.setTransform(175.9,71.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#6C7A89").s().p("AgIA0IgmhAQgFgJADgLQACgKAKgGQAJgFAKADQALADAFAJIA0Bag");
	this.shape_30.setTransform(122.9,56.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#6C7A89").s().p("AhGCGIAHgSQALgZAYgNQAYgNAZAEIAJgUIgHABQgSAEgNgMQgNgLgBgSIgDhqQAAgOAJgMQAJgLANgCIAAAAQAQgDANAJQANAJADAQIATBnQAEAYgTAPIgPAhIACAAQAOAGAFAOQAGAOgGAOIgFAMg");
	this.shape_31.setTransform(181.7,48.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAMBCQgRgGgLgOQgMgOAAgRIAAhHQABgEADgDQACgCAFAAIAjAAQAEAAADACQAEADAAAEIAABvQgBAGgFADQgDACgEAAIgEAAg");
	this.shape_32.setTransform(16.8,117.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D91E18").s().p("AXoEjIjLAAIAAhCQgBh1hThTQhShSh2AAQh1AAhSBSQhTBTAAB1IAABCI3ZAAIAAhCQAAh1hThTQhShSh1AAQh2AAhSBSQhTBTgBB1IAABCIi/AAQgjAAgagZQgZgZAAgkIAAhQIAMgHICvAAQALAAAIgIQAHgJgBgLQgBgJgHgHQgIgGgKAAIh9AAQgNAAgJgKQgKgJAAgNIAAgdQAAhqBJhOQBJhOBrgIIIFgbMAgeAAAQBsAMBNBZQBOBbAAB3IAAAPQAAANgJAJQgKAKgNAAIhkAAQgMAAgGAIQgIAIABALQABAKAHAGQAIAHAJAAICuAAIANAHIAABQQAAAkgZAZQgZAZgiAAIgCAAg");
	this.shape_33.setTransform(176.6,99.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F64747").s().p("AUcImIAAhCQAAh1hThSQhThTh1AAQh1AAhTBTQhTBSAAB1IAABCI3YAAIAAhCQAAh1hThSQhThTh1AAQh1AAhTBTQhTBSAAB1IAABCIkGAAQgkAAgagaQgagZAAglIAAhqQAAgLAIgJQAIgIALAAQALAAAIgIQAJgIAAgLIAAgVIASh+QAIgxA5hAQA4hAArgKQBOgRBxgRQBygSDRgaIBGgJID+jVQB9hvCPg0QCQg2CuAAIFsAAQCxAACeA3QCkA6B/BxIDdC2QDCAfBxB5QBrB0AACaIAAAVQAAALAIAIQAIAIAMAAQALAAAIAIQAIAJAAALIAABqQAAAlgaAZQgaAaglAAgAkymyQiPA2hzBmIipCWIgNAMINkAAIAAl1IiDAAQiaAAiPA3g");
	this.shape_34.setTransform(176.6,73.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#81CFE0").s().p("AmyC7IANgNICpiWQBzhlCPg2QCPg3CZAAICFAAIAAF1g");
	this.shape_35.setTransform(145.3,42.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#96281B").s().p("Ak2C5IAAg6QAAiBBbhbQBbhbCAAAQCBAABbBbQBbBbAACBIAAA6g");
	this.shape_36.setTransform(72.6,109.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#BDC3C7").s().p("AiNCOQg8g7AAhTQAAhSA8g7QA7g7BSAAQBTAAA7A7QA8A7AABSQAABTg8A7Qg7A7hTAAQhSAAg7g7gAh8h8Qg0A0ABBIQgBBJA0A0QA0A0BIAAQBJAAA0g0QA0g0gBhJQABhIg0g0Qg0gzhJAAQhIAAg0Azg");
	this.shape_37.setTransform(279,122.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#ECF0F1").s().p("AgeAfQgMgNAAgSQAAgRAMgNQANgNARABQASgBANANQAMANAAARQAAASgMANQgNANgSAAQgRAAgNgNg");
	this.shape_38.setTransform(279,122.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#BDC3C7").s().p("AgNDBQgGAAgFgFQgEgFAAgHIAJhZQABgKgLgFIAAAAQgKgFgIAJIg4BFQgEAGgHgBQgGABgGgFIgTgTQgFgGABgGQAAgHAFgEIBFg4QADgEACgFQABgEgCgFIAAgBQgEgKgLABIhZAJQgHABgFgFQgFgEAAgIIAAgaQAAgGAFgFQAGgEAGAAIBZAJQALABAEgLIAAAAQACgEgBgGQgCgEgDgEIhFg4QgFgEAAgHQgBgGAFgFIATgUQAGgFAGAAQAHABAEAFIA4BEQADAFAFABQAFABAFgCIAAAAQALgEgBgLIgJhZQAAgGAEgGQAFgFAGAAIAbAAQAGAAAFAFQAFAFgBAHIgJBZQgBALALAEIAAAAQAFACAFgBQAFgBADgFIA4hEQAEgFAHgBQAGAAAGAFIATAUQAFAFgBAGQABAHgGAEIhFA4QgEAEgBAEQgBAGABAEIABAAQAEALALgBIBZgJQAHAAAFAEQAFAFAAAGIAAAaQAAAIgFAEQgFAFgHgBIhZgJQgLgBgEAKIgBABQgBAFABAEQABAFAEAEIBFA4QAGAEgBAHQABAGgFAGIgTATQgGAFgGgBQgHABgEgGIg4hFQgIgJgKAFIAAAAQgLAFABAKIAJBZQABAHgFAFQgFAFgGAAg");
	this.shape_39.setTransform(279,122.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AhgBiQgpgpAAg5QAAg4ApgoQAogpA4AAQA5AAAoApQApAoAAA4QAAA5gpApQgoAog5AAQg4AAgogog");
	this.shape_40.setTransform(279,122.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F3E8D5").s().p("AhlAZQgtgegTg0IFLAAQgTA0gtAeQgtAhg5AAQg3AAgughg");
	this.shape_41.setTransform(279,134);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#96281B").s().p("AilB3QgKgdAAggQgBhIA0g0QA0g0BIAAQBJAAA0A0QA0A0gBBIQABAfgLAeg");
	this.shape_42.setTransform(279,116.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("Ai2C3QhMhMAAhrQAAhqBMhMQBMhMBqAAQBsAABLBMQBMBMAABqQAABrhMBMQhLBMhsAAQhqAAhMhMg");
	this.shape_43.setTransform(279,122.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#96281B").s().p("Ak2C5IAAg6QAAiBBbhbQBbhbCAAAQCBAABbBbQBcBbgBCBIAAA6g");
	this.shape_44.setTransform(279,109.2);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_1, new cjs.Rectangle(9.5,18.5,242,129.6), null);


(lib.ClipGroup_2_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgXA3QgXgOgGgaQgHgZAOgWQAOgXAagHQAQgEASAGIAbBoQgOAOgRAEQgJACgIAAQgQAAgPgJg");
	mask.setTransform(11.7,10.8);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F4E0CA","#F4E0CA","#EFDBC4","#E0CCB2","#DBC6AB"],[0,0.027,0.376,0.855,1],2.2,-3.2,-2.8,4.1).s().p("AhvAUIBaiCICFBbIhaCCg");
	this.shape.setTransform(11.2,11.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_6, new cjs.Rectangle(6.2,4.4,11.1,12.9), null);


(lib.ClipGroup_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhEBJQgJgCgFgIIgDgFQgFgHACgJQACgJAHgGICOhjIAbAqIiOBjQgGAEgGAAIgEAAg");
	mask.setTransform(10.1,8.4);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DBC7AC","#E0CCB2","#EFDBC4","#F4E1CA","#F4E1CA"],[0,0.122,0.616,0.973,1],12.5,-0.7,4.8,-0.3).s().p("AhjhJIC9gMIAJCfIi9AMg");
	this.shape.setTransform(10,8.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_2, new cjs.Rectangle(1.1,1.1,18,14.6), null);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhBBGQgJgCgFgIIgDgEQgFgIACgJQACgJAHgFICIhfIAbAqIiIBfQgFAEgGAAIgFgBg");
	mask.setTransform(9.7,8.1);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DBC7AC","#E0CCB2","#EFDBC4","#F4E1CA","#F4E1CA"],[0,0.122,0.616,0.973,1],9.7,-0.5,2,-0.1).s().p("AhfhHIC3gLIAICZIi2ALg");
	this.shape.setTransform(9.6,8.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, new cjs.Rectangle(1.1,1.1,17.3,14.1), null);


(lib.city = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA600A").s().p("AgCBIIAAgIIgIAFQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAIAAgBIgBgDIACgBIALgGIAAgLIgQAIQAAABgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBIgBgBIAAgCIABgBIATgKIAAgLIgFADQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAIgBgCQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAIgFIAAgGIgIgFIgGAEIAAAJQABAAAAABQgBAAAAABQAAAAgBAAQAAAAgBABIgBAAQgBgBgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBIAAgGIgKAGIABAVQAAAAAAABQAAAAAAABQgBAAAAAAQgBABAAAAIgBAAQgBAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIgBgSIgJAGIAAAMQAAABAAABQAAAAAAABQgBAAAAAAQgBAAgBAAIgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAgBIgBgKIgHAFQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAHgEIgIgFQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIABgBQAAAAABAAQABgBAAAAQABAAAAAAQAAABABAAIALAHIAJgGIgPgKQgBAAAAAAQgBgBAAAAQAAgBABAAQAAAAAAgBIABgBQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAIASALIAJgFIgFgDQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgBQAAgBABAAQAAgBABAAQAAAAABAAQAAABABAAIAHAEIAHgDIAAgHIgHgEIgIAFQAAABgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBIgBgBQAAgBAAAAQgBAAAAgBQAAAAABgBQAAAAABgBIAFgCIgKgGIgSAMQAAAAgBAAQAAABgBAAQAAgBgBAAQAAgBAAAAIgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBABAAIAPgJIgJgGIgLAHQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBIgBgBIAAgCIABgCIAIgFIgHgEIgBgCIAAgCQABAAAAgBQAAAAABAAQAAgBABABQAAAAABAAIAHAEIAAgJQAAgBAAAAQABgBAAAAQAAgBABAAQABAAAAAAIABAAQABAAABAAQAAAAABABQAAAAAAABQAAAAAAABIgBANIAKAFIABgSQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAABAAIABAAQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABIgBAVIAJAFIABgFQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAABAAIABAAQAAAAABABQAAAAABAAQAAAAAAABQAAAAAAABIAAAJIAGAEIAIgEIAAgIIgIgEQAAAAgBgBQAAAAAAAAQgBgBABgBQAAAAAAgBIAAgBQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAIAFACIAAgKIgTgJQAAgBgBAAQAAgBAAAAQgBgBABAAQAAgBAAgBIAAgBQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAIAQAIIAAgKIgLgGQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgBQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAIAIAEIAAgIQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIAAAIIAIgEQABAAAAAAQABAAABAAQAAAAAAAAQABABAAAAIAAABQABABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgLAGIAAAKIAQgIQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAIABABQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABIgTAJIAAAKIAFgCQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAIABABQAAABAAAAQABABAAABQgBAAAAAAQAAABgBAAIgIAEIAAAIIAIAEIAGgEIgBgJQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAIABAAQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABIAAAFIAJgFIgBgVQAAgBAAAAQABgBAAAAQAAgBABAAQABAAAAAAIABAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAIABASIAJgFIAAgNQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAIABAAQABAAABAAQAAAAABABQAAAAAAABQAAAAAAABIABAJIAHgEQAAAAABAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgIAEIAJAFQAAABABAAQAAABAAAAQAAABAAAAQAAAAgBABIAAABQgBABAAAAQAAAAgBAAQAAAAgBAAQgBAAAAAAIgLgHIgJAGIAPAJQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABIgBABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgSgMIgJAGIAFACQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABIgBABQAAABgBAAQAAABgBAAQAAAAgBAAQAAgBgBAAIgHgFIgHAEIAAAHIAHADIAHgEQABAAAAgBQABAAAAAAQABAAAAABQABAAAAABIABABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAIgFADIAJAFIASgLQABAAAAAAQABAAABAAQAAAAAAAAQABAAAAABIABABIAAACIgBABIgPAKIAJAGIALgHQABAAAAgBQABAAAAAAQABAAAAABQAAAAABAAIABABQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABIgIAFIAHAEQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgHgFIgBAKQAAABAAAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAgBIAAgMIgJgGIgBASQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAIgBAAQAAAAgBgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIABgVIgKgGIAAAGQAAABAAAAQAAABAAAAQgBAAAAAAQgBAAgBABIgBAAQAAgBgBAAQgBAAAAAAQAAgBgBAAQAAgBAAAAIABgJIgHgEIgHAEIAAAHIAIAFQAAAAABAAQAAABAAAAQABABAAAAQAAABgBAAIAAACQgBAAAAABQAAAAgBAAQAAAAgBAAQgBAAAAAAIgFgDIAAALIATAKQABAAAAAAQAAAAABABQAAAAAAABQAAAAgBABIAAABQgBABAAAAQAAAAgBABQAAAAgBAAQgBAAAAgBIgQgIIAAALIALAGQABAAABABQAAAAAAAAQAAABAAAAQAAABAAABIgBABQAAAAgBABQAAAAAAAAQgBAAgBAAQAAAAgBAAIgIgFIAAAIQAAABAAABQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAgBgAgHgDIAAAIIAHAEIAIgEIAAgIIgIgFg");
	this.shape.setTransform(412.6,-82.2,0.62,0.62);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EA600A").s().p("AgBBJIAAgIIgJAEQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIgBgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBIAMgGIAAgLIgQAJQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBIAAgBQAAAAAAgBQgBAAABgBQAAAAAAgBQABAAAAAAIAUgKIAAgLIgGADQAAAAAAAAQgBAAAAAAQgBAAgBAAQAAgBgBAAIAAgBQAAgBAAAAQAAgBAAgBQAAAAAAAAQABgBABAAIAIgEIAAgHIgIgFIgHAEIAAAJQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBIgBgGIgJAGIABAVQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAgBIgBgSIgKAGIACANQAAAAgBABQAAABAAAAQgBAAAAABQgBAAgBAAIgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIgBgJIgHAEQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAAAQABgBAAAAIAHgEIgHgFQgBgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgBQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAIALAHIAJgFIgPgKQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIABgBQAAgBABAAQAAgBAAAAQABAAAAAAQABABABAAIASAMIAJgFIgFgDQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgBQAAgBABAAQAAAAAAgBQABAAAAAAQABABABAAIAHAFIAHgEIAAgHIgBAAIgGgEIgHAFQgBABgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBIAAgBQAAAAAAgBQgBAAABgBQAAAAAAgBQAAAAABAAIAEgEIgIgFIgSAMQgBAAAAAAQgBABAAAAQgBgBAAAAQgBgBgBAAIAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBIAPgKIgKgFIgKAHQgBABgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBIgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAIAIgGIgHgEQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAIAHAFIABgKQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAIABAAQABAAABAAQAAABAAAAQABAAAAABQAAABAAAAIgBANIAKAGIAAgSQABgBAAgBQAAAAABAAQAAgBABAAQAAAAABAAIAAAAQABAAABAAQAAABABAAQAAAAAAABQAAABAAAAIgBAVIAJAGIAAgGQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAAAAQABAAABABQAAAAABAAQAAABAAAAQAAABAAAAIAAAJIAHAEIAIgEIAAgIIgJgEQAAAAgBgBQAAAAAAAAQAAgBAAgBQAAAAAAgBIAAgBQABAAAAgBQAAAAABAAQAAAAABAAQABAAAAAAIAGADIAAgLIgUgKQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAgBQABgBAAAAQABgBAAAAQABAAAAAAQABAAABABIAQAIIAAgLIgNgGQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgBQAAgBABAAQAAAAABgBQAAAAABABQAAAAABAAIAJAFIAAgJQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAIAAAJIAIgFQABAAABgBQAAAAABAAQAAAAAAABQABAAAAABIAAABQABABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgLAGIAAALIAQgIQABgBAAAAQABAAAAAAQABAAAAAAQAAABAAABIABABQAAAAABABQAAAAgBABQAAAAAAABQAAAAgBAAIgTAKIAAALIAFgDQABAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAIABABQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgIAEIAAAIIAHAEIAHgEIAAgJQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBABAAIABAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABIAAAGIAJgGIgBgVQAAAAABgBQAAgBAAAAQAAAAABgBQAAAAABAAIABAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAABIABASIAJgGIgBgNQAAAAABgBQAAgBAAAAQABAAAAgBQABAAAAAAIABAAQABAAABAAQAAABABAAQAAAAAAABQABAAAAABIAAAKIAHgFQABAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAABQAAAAAAABQAAAAAAABQgBAAAAAAIgIAEIAIAGIACABQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAIAAABQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBgBIgLgHIgJAFIAPAKQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIAAABQAAABgBAAQAAABAAAAQgBAAAAAAQgBgBAAAAIgSgMIgKAGIAFADQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAIAAABQAAABAAAAQgBAAAAAAQgBABAAAAQgBgBgBAAIgHgFIgHAEIAAAHIAAAAIAHAEIAIgFQAAAAAAgBQABAAAAAAQABABAAAAQABAAAAABIABABQAAAAAAABQABABAAAAQgBAAAAABQAAAAgBABIgEADIAJAFIASgMQAAAAABAAQAAgBAAAAQABABAAAAQABAAAAABIABABQAAABABAAQAAABAAAAQgBABAAAAQAAAAgBABIgPAKIAJAFIALgHQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABIAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBABIgJAFIAIAEQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgHgEIAAAJQAAABgBAAQAAABAAAAQgBAAAAABQgBAAgBAAIgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAgBAAAAIAAgNIgJgGIgBASQAAABAAABQAAAAgBABQAAAAgBAAQAAAAAAAAIgBAAQgBAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBIABgVIgJgGIAAAGQAAABAAAAQAAABgBAAQAAAAAAABQgBAAgBAAIgBAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIAAgJIgHgEIgHAEIAAAIIAIAEQABAAAAABQAAAAABAAQAAABAAABQgBAAAAABIgBABQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgFgDIAAALIATAKIABABQABABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgBABQAAABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgQgJIAAALIALAGQABABABAAQAAAAAAABQAAAAAAABQAAAAAAABIgBABQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAIgIgEIAAAIQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAgAgHgDIAAAIIAHAEIAIgFIAAgIIgIgEg");
	this.shape_1.setTransform(473.3,-86.1,0.62,0.62);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EA600A").s().p("AgBBJIAAgIIgJAEQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAgBIgBgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBABAAIAMgGIAAgLIgQAJQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIgBgBIAAgCIACgCIATgKIAAgKIgGACQAAABgBAAQAAAAgBAAQAAAAAAgBQgBAAAAgBIAAAAQgBgBAAgBQAAAAAAgBQAAAAABgBQAAAAABgBIAIgEIAAgHIgIgEIgHADIAAAJQAAABAAABQAAAAAAABQAAAAgBAAQAAAAgBAAIgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAgBIgBgFIgJAEIABAWQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAIgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIgBgSIgJAFIABAOQAAAAgBABQAAAAAAABQgBAAAAAAQgBABgBAAIgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBIgBgKIgHAEQAAABgBAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBIAHgEIgHgFQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBABgBIAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAABABAAIALAHIAJgGIgPgJQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgBQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAIARAMIAKgGIgFgCQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBIABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAABABAAIAHAFIAHgEIAAgHIAAAAIgHgEIgIAFQAAABgBAAQAAAAgBAAQAAAAAAgBQgBAAAAgBIgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAIAFgEIgKgFIgSALQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBIgBgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAPgKIgJgFIgLAHQgBAAAAAAQgBABAAgBQgBAAAAAAQgBAAAAgBIAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQABAAABgBIAHgFIgHgEIgBgBIABgCQAAgBAAgBQAAAAABgBQAAAAABABQAAAAABAAIAHAFIAAgKQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAAAIABAAQABAAABABQAAAAABAAQAAABAAAAQAAAAAAABIAAANIAJAGIABgSQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIACAAQABAAAAAAQABAAAAABQAAAAAAABQAAAAAAABIgBAVIAJAGIABgGQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIABAAQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAABIAAAJIAHAEIAIgFIAAgHIgIgEQgBAAgBgBQAAAAAAAAQgBgBABAAQAAgBAAAAIABgCQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAIAGADIAAgLIgTgKQgBAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAgBQABgBAAAAQABgBABAAQAAAAABAAQAAAAABABIAQAIIAAgLIgMgGQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgBQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAIAJAEIAAgHQAAgBAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAABIAAAHIAIgEQABAAABAAQAAAAABAAQAAAAAAAAQABAAAAABIABABQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgMAGIAAALIAQgIQABgBAAAAQABAAAAAAQABAAAAABQAAAAAAABIABABQAAAAAAABQABAAgBABQAAAAAAABQAAAAgBAAIgTAKIAAALIAFgDQABAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAIABACIAAACIgBABIgIAEIAAAHIAHAFIAHgEIAAgJQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBABAAIABAAQABAAABAAQAAAAAAABQABAAAAABQAAAAAAABIABAGIAIgGIAAgVQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAIABAAQABAAABAAQAAAAAAABQABAAAAAAQAAABAAABIABASIAJgGIAAgNQAAgBAAAAQAAAAAAgBQABAAAAAAQABgBABAAIABAAQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABIABAKIAHgFQAAAAABAAQABAAAAAAQABAAAAAAQABABAAABQAAAAAAABQABAAgBABQAAAAAAAAQgBABgBAAIgHAEIAIAFQABABABAAQAAAAAAABQAAAAAAABQAAABgBAAIAAABQAAABgBAAQAAAAgBAAQAAABgBgBQAAAAgBAAIgLgHIgJAFIAPAKQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABIgBABQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBIgSgLIgIAFIAEAEQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAIgBABQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAgBgBIgHgFIgHAEIAAAAIAAAHIAAAAIAHAEIAHgFQABAAAAgBQABAAAAAAQABAAAAABQABAAABAAIAAABQAAABAAABQABAAgBABQAAAAAAABQAAAAgBABIgEACIAIAGIASgMQABAAABAAQAAAAABAAQAAAAABAAQAAABAAAAIABABQAAAAABABQAAAAAAABQAAAAgBABQAAAAgBABIgPAJIAKAGIAKgHQABgBAAAAQABAAAAAAQABAAAAABQABAAAAABIAAAAQABABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgIAFIAHAEQABABAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBgBIgHgEIgBAKQAAABAAAAQAAABAAAAQgBAAAAAAQgBABAAAAIgBAAQgBAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAgOIgJgFIgBASQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAIAAAAQgBAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgWIgJgEIAAAFQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAgBIAAgJIgHgDIgHAEIAAAHIAIAEQABABAAAAQAAABABAAQAAABAAAAQAAABgBABIAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBgBIgFgCIAAAKIATAKQABABAAAAQABAAAAABQAAAAAAABQAAAAAAABIgBABQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgQgJIAAALIAMAGQAAAAABABQAAAAAAAAQABABgBAAQAAABAAAAIAAABQgBABAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAIgIgEIAAAIQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAgBAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAgAgHgEIAAAIIAHAFIAIgFIAAgIIgIgEg");
	this.shape_2.setTransform(443.6,-67.7,0.62,0.62);

	this.instance = new lib.ClipGroup_16();
	this.instance.parent = this;
	this.instance.setTransform(432.2,-63.9,0.62,0.62,0,0,0,598.8,96.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.city, new cjs.Rectangle(-281.1,-123.8,1104.9,119.7), null);


(lib.car = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ClipGroup_3_1();
	this.instance.parent = this;
	this.instance.setTransform(173.5,1.1,0.8,0.8,0,0,0,172.7,79);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.car, new cjs.Rectangle(35.4,-62.1,275.7,126.6), null);


(lib.ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fgh();
	this.instance.parent = this;
	this.instance.setTransform(167.6,129.4);

	this.instance_1 = new lib.fgh();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-50.5,129.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA600A").s().p("AgCADIgCgDQAAAAABAAQAAAAAAgBQAAAAAAAAQABgBAAAAIACgBIADABQAAAAABABQAAAAAAAAQAAABAAAAQABAAAAAAIgCADIgDABIgCgBg");
	this.shape.setTransform(46.3,103.9,0.62,0.62);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EA600A").s().p("AgCAEQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAg");
	this.shape_1.setTransform(40.8,108.4,0.62,0.62);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EA600A").s().p("AgCADQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAABgBIACgBIADABQABABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_2.setTransform(54.4,150,0.62,0.62);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCIACgBIACABIACACQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape_3.setTransform(74.6,106.7,0.62,0.62);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCIACgBIACABIACACIgCADIgCABIgCgBg");
	this.shape_4.setTransform(77.1,109,0.62,0.62);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCIACgBIADABIABACIgBADIgDABg");
	this.shape_5.setTransform(57.8,150.7,0.62,0.62);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EA600A").s().p("AgCAEQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAAAAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAAAQAAAAAAABQAAABAAAAQgBABAAAAQAAAAgBABIgDABIgCgBg");
	this.shape_6.setTransform(68.4,149.1,0.62,0.62);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EA600A").s().p("AgDAEQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAAAQAAAAAAABQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_7.setTransform(68.7,152.1,0.62,0.62);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EA600A").s().p("AgDADIgBgDIABgCQABgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABIACACQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_8.setTransform(68.9,156.3,0.62,0.62);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EA600A").s().p("AgCADQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBgBAAAAIACgCIACgBIADABIACACQAAAAgBABQAAAAAAABQAAAAAAAAQgBABAAAAIgDABIgCgBg");
	this.shape_9.setTransform(74,154.5,0.62,0.62);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EA600A").s().p("AgCADIgBgDQAAAAAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAIACgBIADABQAAAAAAABQAAAAABAAQAAABAAAAQAAAAAAAAIgBADIgDABg");
	this.shape_10.setTransform(47.2,137.3,0.62,0.62);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCIACgBIADABIABACQAAABAAAAQAAABAAAAQgBAAAAAAQAAABAAAAIgDABg");
	this.shape_11.setTransform(50.7,137,0.62,0.62);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EA600A").s().p("AgCADQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgCIACgCQABAAAAABQABAAAAAAQAAAAABAAQAAABAAAAIACACQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAIgDABg");
	this.shape_12.setTransform(35,116,0.62,0.62);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EA600A").s().p("AgCADQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBgBAAAAIACgCIACgBIADABIABACQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgDABg");
	this.shape_13.setTransform(32.8,115.9,0.62,0.62);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EA600A").s().p("AgCACIgBgCIABgCIACgBIACABQABAAAAABQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_14.setTransform(48,109.9,0.62,0.62);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCIACgBIADABIABACIgBADIgDABg");
	this.shape_15.setTransform(49.9,108.8,0.62,0.62);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EA600A").s().p("AgBADQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAIABACIgBADIgDABg");
	this.shape_16.setTransform(54.2,106.1,0.62,0.62);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EA600A").s().p("AgCADIgBgDQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAIADABIABACIgBADIgDABg");
	this.shape_17.setTransform(57.1,106.5,0.62,0.62);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EA600A").s().p("AgCACIgBgCIABgCIACgBIADABIABACIgBACIgDACg");
	this.shape_18.setTransform(59.2,106.9,0.62,0.62);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EA600A").s().p("AgBACQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIACgCIABgBIADABIABACIgBACQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape_19.setTransform(48.3,153.1,0.62,0.62);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EA600A").s().p("AgBADIgCgDQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIABABIgBADIgDABg");
	this.shape_20.setTransform(51.1,153.7,0.62,0.62);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EA600A").s().p("AgCACIgBgCIABgCIACgBIADABIABACIgBACIgDACg");
	this.shape_21.setTransform(53.9,155.8,0.62,0.62);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EA600A").s().p("AgCAEQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgDABg");
	this.shape_22.setTransform(81.7,122.7,0.62,0.62);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EA600A").s().p("AgCADQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIACgCQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABACIgBADQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_23.setTransform(78.8,135.7,0.62,0.62);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EA600A").s().p("AgCADQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABACIgBADQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_24.setTransform(81.7,126.1,0.62,0.62);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EA600A").s().p("AgCADIgCgDQAAAAAAAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQABABAAAAQAAAAAAAAIgCADQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBg");
	this.shape_25.setTransform(84.4,125,0.62,0.62);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EA600A").s().p("AgCAEQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgDABg");
	this.shape_26.setTransform(58.3,101.9,0.62,0.62);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EA600A").s().p("AgCADIgBgDIABgBQAAgBABAAQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAAAIgCADIgCABg");
	this.shape_27.setTransform(73.3,105.2,0.62,0.62);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EA600A").s().p("AgCACQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIABgCIACgBIADABIABACIgBACIgDACQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape_28.setTransform(69.3,103.9,0.62,0.62);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCIACgBIADABIABACIgBADIgDABg");
	this.shape_29.setTransform(65,102.9,0.62,0.62);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCQABAAAAgBQAAAAAAAAQABAAAAAAQAAgBAAAAIADACIABACIgBADIgDABQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAgBgBAAg");
	this.shape_30.setTransform(62.1,102.8,0.62,0.62);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EA600A").s().p("AgCADQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAgBQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAAAAAIgDABQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAg");
	this.shape_31.setTransform(67.3,103.4,0.62,0.62);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EA600A").s().p("AgFAnQgEgBgBgEIgFgTIgSgGQgDAAgBgFQgBgEAEgCIAPgKIABgUQABgGAGAAIABAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABIAOALIASgFQAEgBADADQADAEgCADIgGARIAKAPQACADgBAEQgDAEgEAAIgSgBIgMAPQgBADgDAAgAgLgKQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAIgPAKIASAGIACACIAFASIAKgPQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIATABIgLgPIgBgDIAHgSIgSAGIgEgBIgNgMg");
	this.shape_32.setTransform(29.8,115.4,0.62,0.62);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EA600A").s().p("AgEAcIgHgNIgPgCQgEAAgBgEQgCgEADgDIALgKIgDgOIAAgCIABgEIAFgCIADABIANAGIANgHQACgCAEACQAEADgBAEIgCAPIALAJQADAEgCACQAAAEgFABIgPACIgGAOQgCADgEABQgCAAgCgEgAgLgHIgBADIgKAJIAOACQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAIAFANIAGgNQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAIAOgCIgKgJQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIACgOIgNAHQAAAAAAABQgBAAAAAAQAAAAAAAAQgBgBAAAAIgNgGg");
	this.shape_33.setTransform(54.7,153.2,0.62,0.62);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EA600A").s().p("AgDATIgEgJIgKgBQgBAAgBgBQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAgBIAHgGIgCgKIAAgBIABgDIADgBIACAAIAJAFIAJgFQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQAAABAAAAQAAABAAAAIgCALIAIAGQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAIgLACIgEAJQAAABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBgBgAgHgFIgBADIgHAGIAKABQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAAAIADAJIAEgJIACgBIAKgCIgHgGIgBgCIABgJIgIAEQAAABgBAAQAAAAAAAAQAAAAAAAAQAAAAgBgBIgIgEg");
	this.shape_34.setTransform(45.8,136.2,0.62,0.62);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EA600A").s().p("AgEAbIgGgNIgPgCQgDgBgBgDQgBgDACgDIAKgJIgCgNIAAgCQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIADABIAMAGIAMgHQADgCADADQADACgBADIgCAOIALAJQACADgBADQgBAEgEAAIgOADIgFAMQgCAEgEAAQgDAAgBgDgAgKgGIgBADIgKAJIANABQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAIAFAMIAGgMIADgCIANgCIgKgJIgBgDIACgNIgMAGQAAAAgBABQAAAAAAAAQAAAAAAAAQgBgBAAAAIgMgGg");
	this.shape_35.setTransform(87.7,118.8,0.62,0.62);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EA600A").s().p("AgDATIgEgJIgKgBQgBAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBIAHgGIgCgJIAAgCIABgDIADgBIABAAIABABIAJAEIAIgFQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAABIgCAKIAHAFQABABAAABQABAAAAABQAAAAAAABQAAAAAAABQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAIgKABIgEAKQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAgBgBAAgAgHgFIgBADIgHAGIAKABQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAIADAJIAEgJQAAAAAAAAQABgBAAAAQAAAAAAAAQABAAAAAAIAJgCIgHgGIAAgCIABgJIgIAEQAAABgBAAQAAAAAAAAQAAAAAAAAQAAAAgBgBIgIgEg");
	this.shape_36.setTransform(56,99.8,0.62,0.62);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EA600A").s().p("AgTAbIAAgDIABgPIgLgJQgDgBABgEQABgEAEgBIAOgCIAGgOQABgEAEAAIABAAQACAAACADIAHANIAPABQAEABABADQABAEgCADIgKAJIADAPQABADgDACQgDADgDgCIgOgFIgLAHIgDABQgFAAgBgEgAgGgIIgCACIgOADIALAIQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAIgCAOIAMgHQAAAAAAAAQABgBAAAAQABAAAAABQABAAAAAAIAMAGIgDgOQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAJgKIgNgBIgDgCIgGgLg");
	this.shape_37.setTransform(38.4,97.6,0.62,0.62);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EA600A").s().p("AgCADQAAgBAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIABgCIACgBIADABIABACIgBADQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAgBAAg");
	this.shape_38.setTransform(70.5,94.5,0.62,0.62);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EA600A").s().p("AhDA+QgogZgQgfQgKgTABgTQABgUAMgQQASgZAhAAQALAAAOAEQASAHAOARQAJALAMAYIAFAKQAiA9BRApQADABgBAEQgBADgDAAQgfAEgdAAQhRAAg2gggAhwg+QgKANgBASQgBARAJAQQAPAdAmAXQA0AfBOAAIAtgCQhIgogig7IgFgKQgLgXgIgKQgNgQgQgFQgKgEgMAAQgdAAgPAWg");
	this.shape_39.setTransform(54.4,71.8,0.62,0.62);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EA600A").s().p("AjfCYQgqAAghgQQgqgTgZgmQgDgEAEgDQAEgDACAFQAaAlAmARQAlARAtgCQBPgFBUhBQAkgbAxgwIAzgvQAogkAigVQAtgbAogKQA2gOA/AJQAFABgBAFQgBAEgEAAQg9gKg1AOQhJAThSBJIgzAuQg6A4gbAVQhXBDhSAEg");
	this.shape_40.setTransform(40.8,86.6,0.62,0.62);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EA600A").s().p("Ah/BaQgDAAgBgDQgBgEADgBQBRgpAig9IAFgKQAMgYAJgLQAOgRASgHQAOgEALAAQAhAAASAZQAMAQABAUQABATgKATQgQAfgoAZQg2AghRAAQgdAAgfgEgAAvhQQgQAFgNAQQgIAKgLAXIgFAKQgiA7hIAoIAtACQBOAAA0gfQAmgXAPgdQAJgQgBgRQgBgSgKgNQgPgWgdAAQgMAAgKAEg");
	this.shape_41.setTransform(70.9,71.8,0.62,0.62);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EA600A").s().p("ADVCZQhSgFhXhDQgbgVg7g4QgbgagYgUQhShJhIgTQg2gOg8AJQgFAAgBgEQgBgEAFgBQBAgJA2AOQBKATBVBLIAzAvQA3A1AeAXQBVBBBOAFQAtACAlgRQAmgRAaglQADgEADADQAEACgDAEQgZAmgqATQgiAQgoAAg");
	this.shape_42.setTransform(84.6,86.6,0.62,0.62);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EA600A").s().p("AgCACQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAIACgBIADABIABACIgBACIgDACQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape_43.setTransform(85,103.3,0.62,0.62);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EA600A").s().p("AgCADIgBgDQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAg");
	this.shape_44.setTransform(82.8,104.6,0.62,0.62);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EA600A").s().p("AgCACIgBgCIABgCIACgBIACABIACACQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape_45.setTransform(85.6,105.3,0.62,0.62);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EA600A").s().p("AgCACQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIABgCIACgBIADABIABACIgBACIgDACQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape_46.setTransform(70,88.6,0.62,0.62);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#EA600A").s().p("AgCADIgBgDQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAIADABIABACIgBADIgDABg");
	this.shape_47.setTransform(70.8,86.1,0.62,0.62);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCIACgBIADABIABACIgBADIgDABIgCgBg");
	this.shape_48.setTransform(68.2,87.5,0.62,0.62);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#EA600A").s().p("AgCADIgBgDIABgBIACgCIADACIABABIgBADIgDABg");
	this.shape_49.setTransform(78.7,105.6,0.62,0.62);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EA600A").s().p("AgCADQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAIACgBIADABIABACIgBADIgDABIgCgBg");
	this.shape_50.setTransform(76.4,106.9,0.62,0.62);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EA600A").s().p("AgBADQgBgBAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAIADABIABACIgBADIgDABQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAg");
	this.shape_51.setTransform(79.3,107.7,0.62,0.62);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EA600A").s().p("AgCADQAAgBAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIABgCIACgBIADABIABACIgBADIgDABQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAgBAAg");
	this.shape_52.setTransform(39.5,100.9,0.62,0.62);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EA600A").s().p("AgCADQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIABABQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIgCgBg");
	this.shape_53.setTransform(40.8,102.3,0.62,0.62);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EA600A").s().p("AgBADIgCgDIACgCIABgBIADABIABACIgBADIgDABg");
	this.shape_54.setTransform(43.5,101.9,0.62,0.62);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCIACgBIADABIABACIgBADIgDABg");
	this.shape_55.setTransform(41.9,100.8,0.62,0.62);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EA600A").s().p("AgCACQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIABgCIACgBIADABIABACIgBACQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape_56.setTransform(73.3,87.3,0.62,0.62);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCIACgBIADABIABACIgBADIgDABg");
	this.shape_57.setTransform(74.1,88.9,0.62,0.62);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCIACgBIADABIABACIgBADIgDABg");
	this.shape_58.setTransform(77.1,89.1,0.62,0.62);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCIACgBIADABIABACIgBADIgDABg");
	this.shape_59.setTransform(75.7,87.6,0.62,0.62);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EA600A").s().p("AgCADIgBgDQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAIADACIABABIgBADIgDABg");
	this.shape_60.setTransform(43.1,136.2,0.62,0.62);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCIACgBIADABIABACIgBADIgDABg");
	this.shape_61.setTransform(43.5,138.6,0.62,0.62);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCIACgBQAAAAABAAQAAAAABAAQAAABAAAAQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAAAAAIgDABg");
	this.shape_62.setTransform(46.1,139.3,0.62,0.62);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCIACgBIACABIACACQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAg");
	this.shape_63.setTransform(45.1,137.6,0.62,0.62);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EA600A").s().p("AgCACIgBgCIABgCIACgBIADABIABACIgBACIgDACg");
	this.shape_64.setTransform(46.7,128.7,0.62,0.62);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EA600A").s().p("AgCACIgBgCIABgCIACgBIADABQAAAAAAABQAAAAABAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape_65.setTransform(52.6,141.7,0.62,0.62);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCIACgBIADABIABACIgBADIgDABg");
	this.shape_66.setTransform(52.6,139,0.62,0.62);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#EA600A").s().p("AgCACIgBgCIABgCIACgBIADABQAAAAAAABQAAAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape_67.setTransform(49,138.7,0.62,0.62);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#EA600A").s().p("AgCAEQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAAAAAIADACQABAAAAABQAAAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgDABg");
	this.shape_68.setTransform(32.4,132.1,0.62,0.62);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#EA600A").s().p("AgDAEIgBgEIABgCQABgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgDABg");
	this.shape_69.setTransform(39.8,130,0.62,0.62);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#EA600A").s().p("AgDAEIgBgEIABgCQABgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgDABg");
	this.shape_70.setTransform(36.9,131.4,0.62,0.62);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#EA600A").s().p("AgCADQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAABgBIACgBIADABQABABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_71.setTransform(39.1,131.9,0.62,0.62);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#EA600A").s().p("AgCADQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIACgCQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIACACQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAIgDACQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_72.setTransform(34.7,132.4,0.62,0.62);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#EA600A").s().p("AgCACIgBgCIABgCIACgBIADABIABACIgBACIgDACg");
	this.shape_73.setTransform(84.4,93,0.62,0.62);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#EA600A").s().p("AgCADIgBgDQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAIADABIABACIgBADIgDABg");
	this.shape_74.setTransform(86.4,94.3,0.62,0.62);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EA600A").s().p("AgBADIgCgDQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAIADACIABABIgBADIgDABg");
	this.shape_75.setTransform(88,96.5,0.62,0.62);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EA600A").s().p("AgCACIgBgCIABgCIACgBIACABIACACQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAg");
	this.shape_76.setTransform(88,98.4,0.62,0.62);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EA600A").s().p("AgBADIgCgDIACgCIABgBIADABIABACIgBADIgDABg");
	this.shape_77.setTransform(90.5,99.8,0.62,0.62);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCIACgBIADABIABACIgBADIgDABg");
	this.shape_78.setTransform(89.9,97.9,0.62,0.62);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#EA600A").s().p("AgBACQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAgBABAAIABgBQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAIgBACQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape_79.setTransform(92.3,100.9,0.62,0.62);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EA600A").s().p("AgCADQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIABgBQAAgBABAAQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAAAABQAAAAAAAAIgDABQAAAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape_80.setTransform(71.3,101.6,0.62,0.62);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EA600A").s().p("AgCACIgBgCIABgCIACgBIACABIACACQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape_81.setTransform(71.9,103.4,0.62,0.62);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCIACgBIADABIABACIgBADIgDABg");
	this.shape_82.setTransform(74.7,103.9,0.62,0.62);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#EA600A").s().p("AgCACIgBgCIABgCIACgBIADABIABACIgBACIgDACg");
	this.shape_83.setTransform(73.6,102.3,0.62,0.62);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#EA600A").s().p("AgBADQgBgBAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAIADABIABACIgBADIgDABQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAg");
	this.shape_84.setTransform(76.8,104.4,0.62,0.62);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#EA600A").s().p("AgBAZQgEgUgSgBQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAgBQAAAAABgBQAAAAABAAQAAAAABAAQAAgBABAAQAKAAAFgFQAEgFAAgHIAAgFQAAAAAAgBQAAgBAAAAQABAAAAAAQABgBABAAQAAAAAAAAQABAAAAAAQAAABABAAQAAABAAABIAAAEQACAQARAAIADAAQAAAAABAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBABQgBAAAAAAQgMABgFAGQgEAFABAJIAAABQAAABAAAAQAAABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQgBgBAAAAgAgDgBIgGADQAGAEADAFIACgGIAHgFQgGgCgDgFIgDAGg");
	this.shape_85.setTransform(69.6,100.4,0.62,0.62);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#EA600A").s().p("AAOAbIgEgGQgKgNgQAJIgFADQgDABgCgCQgDgDADgCIAFgEQAQgKgJgPIgEgGQgCgEADgBQACgCADACIAEAGQAIAIAHAAQAFAAAEgCIAHgFQADgCACADQACADgDACIgHAFQgMAKAIAPIAEAFIABACQAAAEgEAAgAAFAIQAAgHADgFIgBAAQgFAAgFgDQABAHgEAGIACgBQAEAAAFADIAAAAg");
	this.shape_86.setTransform(82.4,107.4,0.62,0.62);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#EA600A").s().p("AgCADQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAABgBIACgBIADABQABABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBg");
	this.shape_87.setTransform(40.9,116.6,0.62,0.62);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#EA600A").s().p("AgCADQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAABgBIACgBIAEABIABADIgBADQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_88.setTransform(41.8,112.5,0.62,0.62);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#EA600A").s().p("AgCADQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBg");
	this.shape_89.setTransform(39.4,114.1,0.62,0.62);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#EA600A").s().p("AgDADIgBgDIABgDIADgBIADABQABABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_90.setTransform(42.4,109.5,0.62,0.62);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#EA600A").s().p("AgDAEQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAAAQAAAAAAABQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_91.setTransform(36.5,144.8,0.62,0.62);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#EA600A").s().p("AgDAEQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAAAQAAAAAAABQAAABAAAAQAAAAgBABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_92.setTransform(39.5,144.4,0.62,0.62);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#EA600A").s().p("AgDADQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQABAAAAAAQAAAAAAAAIAEABQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAIgEACQAAAAAAAAQAAAAgBAAQgBgBAAAAQAAAAgBgBg");
	this.shape_93.setTransform(39.3,147.1,0.62,0.62);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAAAAAIADABIABACIgBADIgDACQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_94.setTransform(53.7,148.3,0.62,0.62);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#EA600A").s().p("AgCADIgCgDQAAAAABAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAAAIgBADQAAAAAAABQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_95.setTransform(56.7,149,0.62,0.62);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#EA600A").s().p("AgCADQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_96.setTransform(68,137.9,0.62,0.62);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#EA600A").s().p("AgCADQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABACIgBADQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_97.setTransform(64.6,140.1,0.62,0.62);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#EA600A").s().p("AgCADQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAABgBIACgBIADABQABABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_98.setTransform(65.7,143.2,0.62,0.62);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#EA600A").s().p("AgCADQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBg");
	this.shape_99.setTransform(62.2,138.2,0.62,0.62);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#EA600A").s().p("AgCAEQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABACIgBAEIgEABg");
	this.shape_100.setTransform(60.1,140.5,0.62,0.62);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCIACgBQAAAAABAAQAAAAABAAQAAABAAAAQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAAAAAIgDABg");
	this.shape_101.setTransform(70.1,106.9,0.62,0.62);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCIACgBIADABIABACIgBADIgDABg");
	this.shape_102.setTransform(72.1,106.1,0.62,0.62);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#EA600A").s().p("AgCADQAAgBAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIABgCIACgBQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAIABACIgBADQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAgBAAg");
	this.shape_103.setTransform(67,105.2,0.62,0.62);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCIACgBIADABIABACIgBADIgDABIgCgBg");
	this.shape_104.setTransform(41.5,126,0.62,0.62);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#EA600A").s().p("AgCADQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAIABACQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIgCgBg");
	this.shape_105.setTransform(42.6,127.8,0.62,0.62);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#EA600A").s().p("AgCACIgBgCIABgCIACgBIADABIABACQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape_106.setTransform(42.7,122.7,0.62,0.62);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#EA600A").s().p("AgCADQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIABgCIACgBIADABIABACIgBADIgDABQAAAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_107.setTransform(74.7,138.9,0.62,0.62);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#EA600A").s().p("AgCADIgBgDQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAIACgBQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAAAQAAAAAAAAIgBADQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAIgCgBg");
	this.shape_108.setTransform(76.2,137.3,0.62,0.62);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCIACgBIADABIABACQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAg");
	this.shape_109.setTransform(71.2,138.8,0.62,0.62);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#EA600A").s().p("AgBADIgCgDQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIABABIgBADIgDABg");
	this.shape_110.setTransform(48.6,105.5,0.62,0.62);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#EA600A").s().p("AgCADIgBgDQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAIADACIABABIgBADIgDABg");
	this.shape_111.setTransform(48.1,107.5,0.62,0.62);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCIACgBIADABIABACIgBADIgDABg");
	this.shape_112.setTransform(51.9,104,0.62,0.62);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#EA600A").s().p("AgCADIgBgDIABgBIACgCIADACIABABIgBADIgDABg");
	this.shape_113.setTransform(55.3,143,0.62,0.62);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#EA600A").s().p("AgCACIgBgCIABgCIACgBIADABIABACIgBACIgDACg");
	this.shape_114.setTransform(57,143.6,0.62,0.62);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCIACgBIADABIABACIgBADIgDABg");
	this.shape_115.setTransform(84.6,145.7,0.62,0.62);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCIACgBQAAAAABAAQAAAAABAAQAAABAAAAQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAAAQAAAAAAAAIgBADIgDABg");
	this.shape_116.setTransform(86,147,0.62,0.62);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#EA600A").s().p("AgCADQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAgBQABAAAAAAIACgBIAEABIABACIgBADQgBAAAAABQgBAAAAAAQgBAAAAAAQAAABgBAAg");
	this.shape_117.setTransform(53.5,136.3,0.62,0.62);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#EA600A").s().p("AgCADQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBIACgBIADABQABABAAAAQAAABAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAg");
	this.shape_118.setTransform(55.7,137.8,0.62,0.62);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#EA600A").s().p("AgCADQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIABgCIACgBIADABIABACIgBADIgDABg");
	this.shape_119.setTransform(66.5,137.1,0.62,0.62);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAAAAAIADABIACACIgCADIgDABIgCgBg");
	this.shape_120.setTransform(64.3,137.6,0.62,0.62);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#EA600A").s().p("AgCADQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIABgCIACgBIADABIABACIgBADIgDABQAAAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape_121.setTransform(63.1,135.9,0.62,0.62);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCIACgBIADABIABACQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgDABg");
	this.shape_122.setTransform(60.5,136.5,0.62,0.62);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#EA600A").s().p("AgCADQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBgBAAAAIACgCIACgBIADABIABACQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgDABg");
	this.shape_123.setTransform(79.7,129.9,0.62,0.62);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#EA600A").s().p("AgCADQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBgBAAAAIACgCIACgBIADABIABACQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgDABIgCgBg");
	this.shape_124.setTransform(82.1,129.9,0.62,0.62);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCIACgCQAAAAABABQAAAAABAAQAAAAAAAAQABABAAAAIABACIgBADQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAg");
	this.shape_125.setTransform(82.7,131.9,0.62,0.62);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#EA600A").s().p("AgCADQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAIABACQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIgCgBg");
	this.shape_126.setTransform(82.3,135,0.62,0.62);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCIACgBIADABIABACIgBADIgDABg");
	this.shape_127.setTransform(83.7,136.2,0.62,0.62);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCIACgCQAAAAABABQAAAAABAAQAAAAAAAAQABABAAAAIABACIgBADQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAg");
	this.shape_128.setTransform(49.2,88.1,0.62,0.62);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#EA600A").s().p("AgCADIgBgDQAAAAAAAAQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAAAAAIADABQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAAAIgBADIgDABg");
	this.shape_129.setTransform(51.6,87.2,0.62,0.62);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#EA600A").s().p("AgCADIgBgDQAAAAAAAAQAAAAAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAAAAAIADABQAAAAABABQAAAAAAABQAAAAAAAAQAAAAAAAAIgBADIgDABg");
	this.shape_130.setTransform(54.7,93.1,0.62,0.62);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCIACgBQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAQAAAAAAAAIgBADIgDABg");
	this.shape_131.setTransform(55.2,95.7,0.62,0.62);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCIACgBIADABIABACIgBADIgDABIgCgBg");
	this.shape_132.setTransform(62.2,104.8,0.62,0.62);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCIACgCQAAAAABABQAAAAABAAQAAAAAAAAQABABAAAAIABACIgBADQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAg");
	this.shape_133.setTransform(64.3,106.3,0.62,0.62);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#EA600A").s().p("AgCADQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABgBAAAAQAAAAAAAAQABAAAAAAQAAAAABABQAAAAABAAQAAAAABABQAAAAAAAAQAAABABAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAABAAAAQgBABAAAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAAAAAgBg");
	this.shape_134.setTransform(56.3,104.5,0.62,0.62);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#EA600A").s().p("AgDADQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBIADgBIADABQABABAAAAQAAAAABABQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBg");
	this.shape_135.setTransform(59.1,104.9,0.62,0.62);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#EA600A").s().p("AgBADIgBgDIABgBIABgBIACABIABABIgBADIgCAAg");
	this.shape_136.setTransform(41.5,120.2,0.62,0.62);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#EA600A").s().p("AgBADIgBgDIABgCIABAAIACAAIABACIgBADIgCABg");
	this.shape_137.setTransform(40.9,121.9,0.62,0.62);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#EA600A").s().p("AgCAEQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQABgBAAAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABIgDABg");
	this.shape_138.setTransform(28,117.8,0.62,0.62);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#EA600A").s().p("AgDADIgBgDIABgCIADgCQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAAAAAAAQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape_139.setTransform(27.3,120,0.62,0.62);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#EA600A").s().p("AgDAEQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_140.setTransform(80.6,152.2,0.62,0.62);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#EA600A").s().p("AgDAEQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_141.setTransform(78.2,152.2,0.62,0.62);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#EA600A").s().p("AgDAEQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_142.setTransform(77,154.1,0.62,0.62);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#EA600A").s().p("AgDAEQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAAAAAABQABAAAAABQABAAAAABQAAAAABAAQAAABAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_143.setTransform(28.3,112.1,0.62,0.62);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#EA600A").s().p("AgDAEQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAIADgBIAEABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAABIgEACQAAAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_144.setTransform(30.4,113,0.62,0.62);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCIACgBIADABIABACIgBADIgDABIgCgBg");
	this.shape_145.setTransform(96.1,125.2,0.62,0.62);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCIACgBIADABIABACIgBADIgDABg");
	this.shape_146.setTransform(97.2,126.9,0.62,0.62);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#EA600A").s().p("AgCACIgBgCIABgCIACgBIADABIABACIgBACQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape_147.setTransform(98,123.1,0.62,0.62);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCIACgBIADABIABACIgBADIgDABIgCgBg");
	this.shape_148.setTransform(97.8,125.1,0.62,0.62);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCIACgBIACABIACACQAAABAAAAQAAABgBAAQAAAAAAAAQAAABgBAAIgCABIgCgBg");
	this.shape_149.setTransform(81.7,111.3,0.62,0.62);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#EA600A").s().p("AgCADIgBgDIABgBQABgBAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAIADACIABABIgBADIgDABIgCgBg");
	this.shape_150.setTransform(83,112.9,0.62,0.62);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#EA600A").s().p("AgCADQAAAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIABgCIACgBIADABIABACQAAABAAAAQAAABAAAAQgBAAAAAAQAAABAAAAIgDABIgCgBg");
	this.shape_151.setTransform(90.1,118.2,0.62,0.62);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#EA600A").s().p("AgCACIgBgCIABgBIACgCQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIABABIgBACQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_152.setTransform(89.9,120.3,0.62,0.62);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#EA600A").s().p("AgCADQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBgBAAAAIACgCQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAIADABIABACQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgDABQAAAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape_153.setTransform(83.1,120.1,0.62,0.62);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#EA600A").s().p("AgCADIgCgDQAAAAABAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAAAAAIADABQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAAAIgBADIgDACQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_154.setTransform(86,119.6,0.62,0.62);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#EA600A").s().p("AgBADQgBgBAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIACgCIABgBIADABIABACIgBADIgDABQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAg");
	this.shape_155.setTransform(84.7,122,0.62,0.62);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#EA600A").s().p("AgBADIgCgDIACgCIABgBIADABIABACIgBADIgDABg");
	this.shape_156.setTransform(86.5,121.7,0.62,0.62);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCIACgBIADABIABACIgBADIgDABIgCgBg");
	this.shape_157.setTransform(46,122.8,0.62,0.62);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCIACgBIADABIABACIgBADIgDABg");
	this.shape_158.setTransform(47.9,122.5,0.62,0.62);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#EA600A").s().p("AgCADQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAAAQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBg");
	this.shape_159.setTransform(30.2,106.2,0.62,0.62);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#EA600A").s().p("AgCADIgCgDIACgDIACgBIADABQABABAAAAQAAAAABABQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAAAAAgBg");
	this.shape_160.setTransform(29.2,108.9,0.62,0.62);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#EA600A").s().p("AgCAEQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAg");
	this.shape_161.setTransform(33.8,102,0.62,0.62);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#EA600A").s().p("AgCAEQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAAAAAIADABIACADIgCAEIgDABQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAg");
	this.shape_162.setTransform(31.5,103.8,0.62,0.62);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#EA600A").s().p("AgCACIgBgCIABgCIACgBIADABIABACIgBACIgDACg");
	this.shape_163.setTransform(45.5,110.9,0.62,0.62);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCIACgBIADABIABACQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape_164.setTransform(47.1,111.8,0.62,0.62);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#EA600A").s().p("AALATIgYgHIgCgBIAAgDIAGgYQABgDAEABQAEABgBADIgGAUIAUAGQAEABgBADQAAABgBABQAAAAAAABQgBAAgBAAQAAAAgBAAg");
	this.shape_165.setTransform(97.3,117.4,0.62,0.62);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#EA600A").s().p("AAFATQgEgBABgDIAGgUIgUgGQgEgBABgEQABgDAEABIAXAGIADACIAAADIgHAXQAAABAAABQAAAAgBABQAAAAgBAAQgBAAAAAAg");
	this.shape_166.setTransform(92.7,120.3,0.62,0.62);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#EA600A").s().p("AgwAdQgCgDADgCIBcg1QADgCACAEQABADgDACIhbA0IgCABQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_167.setTransform(95,118.8,0.62,0.62);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#EA600A").s().p("AgFATQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBgBgBIgGgXIAAgDIACgCIAYgGQADgBACADQABAEgEABIgUAGIAGAUQABADgEABg");
	this.shape_168.setTransform(97.3,120.3,0.62,0.62);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#EA600A").s().p("AgPAQQgBgDAEgBIAUgGIgGgUQgBgDAEgBQADgBABADIAHAYIAAADQgBAAAAABQAAAAAAAAQgBAAAAAAQAAAAgBAAIgXAHIgBAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAgBg");
	this.shape_169.setTransform(92.7,117.4,0.62,0.62);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#EA600A").s().p("AAsAeIhcg0QgCgCABgEQACgDADACIBcA1QADABgCAEQAAAAAAAAQAAABgBAAQAAAAAAAAQgBABgBAAg");
	this.shape_170.setTransform(95,118.8,0.62,0.62);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#EA600A").s().p("AAPAMIgPgPIgPAPQAAAAgBABQgBAAAAAAQgBAAgBAAQAAgBgBAAQgCgDACgDIASgRQABAAABgBQAAAAAAAAQAAAAABAAQABABAAAAIASARQADADgDADIgCABg");
	this.shape_171.setTransform(95,121.2,0.62,0.62);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#EA600A").s().p("AgCAMIgRgRQgBgBgBAAQAAgBAAgBQAAAAAAgBQABAAABgBQAAgBABAAQAAgBABAAQAAAAABABQABAAAAABIAPAOIAQgOQAAgBABAAQAAAAABAAQABAAAAAAQABAAAAABQABABABAAQAAABAAAAQAAABAAABQgBAAgBABIgSARIgCABQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAgBAAg");
	this.shape_172.setTransform(95,116.5,0.62,0.62);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#EA600A").s().p("AgDA1IAAhqQAAgDADAAQABAAABAAQAAAAABABQAAAAABABQAAAAAAABIAABqQAAAEgEAAQgDAAAAgEg");
	this.shape_173.setTransform(95,118.8,0.62,0.62);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#EA600A").s().p("AAPAMIgPgPIgPAPQAAAAgBABQgBAAAAAAQgBAAgBAAQAAgBgBAAQgCgDACgDIASgRQABAAABgBQAAAAAAAAQAAAAABAAQABABAAAAIASARQADADgDADIgCABg");
	this.shape_174.setTransform(95,121.2,0.62,0.62);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#EA600A").s().p("AgCAMIgRgRQgBgBgBAAQAAgBAAgBQAAAAAAgBQABAAABgBQAAgBABAAQAAgBABAAQAAAAABABQABAAAAABIAPAOIAQgOQAAgBABAAQAAAAABAAQABAAAAAAQABAAAAABQABABABAAQAAABAAAAQAAABAAABQgBAAgBABIgSARIgCABQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAgBAAg");
	this.shape_175.setTransform(95,116.5,0.62,0.62);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#EA600A").s().p("AgDA1IAAhqQAAgDADAAQABAAABAAQAAAAABABQAAAAABABQAAAAAAABIAABqQAAAEgEAAQgDAAAAgEg");
	this.shape_176.setTransform(95,118.8,0.62,0.62);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#EA600A").s().p("AAHANIgPgEIgCgCIAAgCIAEgPQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAIgDANIAMADQABABAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAg");
	this.shape_177.setTransform(89.6,101.1,0.62,0.62);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#EA600A").s().p("AADANQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIADgMIgMgDQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQABAAAAAAQABAAABAAIAPAEIACABIAAADIgEAPQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAg");
	this.shape_178.setTransform(86.5,103.1,0.62,0.62);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#EA600A").s().p("AghATQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAIA8giQABgBAAAAQABAAAAAAQABAAAAABQABAAABABQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBAAIg8AiIgBABQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape_179.setTransform(88,102.1,0.62,0.62);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#EA600A").s().p("AgDANQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAgBIgEgPIAAgDIACgBIAPgEQABAAABAAQAAAAABAAQAAAAABABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgMADIADAMQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBAAg");
	this.shape_180.setTransform(89.6,103.1,0.62,0.62);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#EA600A").s().p("AgHANQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAAAABgBIAMgDIgDgNQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABIAEAPIAAACQAAABAAAAQgBAAAAABQAAAAAAAAQgBAAAAAAIgPAEg");
	this.shape_181.setTransform(86.5,101.1,0.62,0.62);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#EA600A").s().p("AAdAUIg8giQgBAAAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQABgBABAAQAAgBABAAQAAAAABAAQAAAAABABIA8AiQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAIgEACg");
	this.shape_182.setTransform(88,102.1,0.62,0.62);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#EA600A").s().p("AAJAIIgJgIIgJAIIgCABIgCgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAIAMgLQAAgBABAAQAAAAAAAAQAAAAABAAQABAAAAABIAMALQABAAAAABQAAAAAAABQAAAAAAABQAAABgBAAIgCABIgDgBg");
	this.shape_183.setTransform(88,103.6,0.62,0.62);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#EA600A").s().p("AgBAJIgMgLQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgBABAAQABAAAAAAQABAAAAAAQABAAAAABIAJAJIAJgJQABgBABAAQAAAAABAAQAAAAABAAQAAAAABABQABABAAAAQAAABAAAAQAAABAAAAQAAABgBABIgMALIgCAAg");
	this.shape_184.setTransform(88,100.5,0.62,0.62);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#EA600A").s().p("AgCAjIAAhFQAAgBAAgBQAAAAABgBQAAAAABAAQAAgBAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAABIAABFQAAABAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape_185.setTransform(88,102.1,0.62,0.62);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#EA600A").s().p("AAJAIIgJgIIgJAIIgCABIgCgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAIAMgLQAAgBABAAQAAAAAAAAQAAAAABAAQABAAAAABIAMALQABAAAAABQAAAAAAABQAAAAAAABQAAABgBAAIgCABIgDgBg");
	this.shape_186.setTransform(88,103.6,0.62,0.62);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#EA600A").s().p("AgBAJIgMgLQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgBABAAQABAAAAAAQABAAAAAAQABAAAAABIAJAJIAJgJQABgBABAAQAAAAABAAQAAAAABAAQAAAAABABQABABAAAAQAAABAAAAQAAABAAAAQAAABgBABIgMALIgCAAg");
	this.shape_187.setTransform(88,100.5,0.62,0.62);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#EA600A").s().p("AgCAjIAAhFQAAgBAAgBQAAAAABgBQAAAAABAAQAAgBAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAABIAABFQAAABAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape_188.setTransform(88,102.1,0.62,0.62);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#EA600A").s().p("AADAhQgIgXgVAAIgEAAQgEABgBgEQAAgEAEgBQANgBAHgHQAEgHgBgLIgCgGQgBgEAEgBQAFgBAAAEIACAGQAEASASAAIAIgBIABAAQADgBABAEQABAEgEAAIAAABQgQACgFAJQgEAHADANIABACQgBADgEABQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBgAgEgBQgEADgEADQAJADAEAGQAAgEADgEQADgFAFgDQgIgCgFgGIgDAJg");
	this.shape_189.setTransform(44.3,106.4,0.62,0.62);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#EA600A").s().p("AACAbQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQgEgTgTAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAABAAQAAAAABAAQALAAAEgFQAFgEgBgJIgBgEQAAgBAAgBQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAQABAAAAAAQAAABAAAAQAAABABABIAAAEQADAPAPAAIAEAAQABAAABAAQAAAAABAAQAAABABAAQAAAAAAABQAAABAAABQgBAAAAAAQAAAAgBAAQAAABgBAAIAAAAQgMABgFAHQgDAFABAJIABABQAAABAAAAQgBABAAAAQAAABgBAAQgBAAAAAAgAgDgBIgGAEQAFADAEAFIACgGQACgDAFgCQgHgCgCgFIgDAGg");
	this.shape_190.setTransform(56.6,146,0.62,0.62);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#EA600A").s().p("AgYAfQgDgCACgEQAOgZgSgSQgDgDADgDQADgEADAEQALAKAKAAQAIAAAJgKIAEgFQADgDADACQADADgCADIgEAFQgOAUAVARIABABQADACgCAEQgDAEgEgDIAAgBQgLgJgLAAQgLAAgJAOQAAAAAAABQAAAAgBAAQAAABgBAAQgBAAAAAAgAgLALQAKgGALADQgDgIABgIQgIAEgMgDQADAIgCAKg");
	this.shape_191.setTransform(54.4,88.9,0.62,0.62);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#EA600A").s().p("AgNAUQgEgBACgEQAIgOgLgJQgDgDADgDQACgDAEADQAFAFAFAAQAFAAAEgGIACgDQADgDADACQADACgCAEIgCADQgHAKAMAJIAAAAQADACgCAEQgCADgEgCIAAgBQgGgEgFAAQgGAAgFAIQAAAAAAABQgBAAAAAAQAAABgBAAQgBAAAAAAgAgEAEIAHgBIABAAIgBgFQgEABgDAAg");
	this.shape_192.setTransform(78.7,110.8,0.62,0.62);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#EA600A").s().p("AgGAYQgDgBAAgEQACgQgNgEQgEgCACgEQACgDADABIAIACQAIAAACgJIABgEQABgEAEABQAEABgBAEIgBAEQgDANAOADIABAAQAEABgBAEQgCAEgDgBIgBAAIgHgBQgKAAgCAMQAAADgEAAgAgFAAIADAGIAHgFQgDgBAAgDIgHADg");
	this.shape_193.setTransform(96.7,113.2,0.62,0.62);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#EA600A").s().p("AAMAcQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBIgBAAQgHgPgLAAQgGAAgHAEQgDACgCgDQgCgDADgCQAUgMgHgTQgBgEAEgBQAAAAABAAQAAAAABAAQABAAAAABQABAAAAABQAFAQAMAAQAEAAAGgDIAFgCQAAgBABAAQABAAAAABQABAAAAAAQABABAAABQABAAAAABQAAAAAAABQgBABAAAAQgBABAAAAIgFADQgRAJAJATIAAAAQABAEgDABgAgLAEIABAAQAJAAAGAGQAAgHAEgFQgJAAgFgHQgBAHgFAGg");
	this.shape_194.setTransform(57.6,139.9,0.62,0.62);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#EA600A").s().p("AAMAZQgJgKgKAAQgGAAgGAEQgDACgCgEQgCgEADgBQAJgFADgHQABgHgFgHIgDgFQgCgDADgCQADgCADADIADAEQALAOAQgMIAAAAQAEgCACADQACADgDACIgBABQgKAIgBAGQAAAHAGAIIABADQAAAEgEAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAgBAAgAgEAAIgDAHQAGAAAFADIAAgGIADgIQgFABgFgDIgBAGg");
	this.shape_195.setTransform(69.5,145.3,0.62,0.62);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#EA600A").s().p("AgFAaQgBAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQACgUgRgFQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAJACQAMAAACgMIABgFQAAAAAAgBQABAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAABAAAAQAAABAAAAIgBAFQgDAQASAEIABAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAAIgIgBQgOAAgCAQQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAgAgJAAQAEAEACAGQAEgGAHgCQgDgCgDgGQgDAFgIABg");
	this.shape_196.setTransform(67.6,139.3,0.62,0.62);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#EA600A").s().p("AgMARQgBgBAAAAQAAAAgBgBQAAAAAAAAQAAgBABAAQAIgOgKgJQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQALALAJgKIACgDQABgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAABQgBAAAAABIgCADQgHAKALAJIAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQAAAAgBgBQAAAAgBAAQgGgFgGAAQgFAAgFAHIgCABgAgFAGQAFgDAGACQgDgFABgEQgFADgFgCQACADgBAGg");
	this.shape_197.setTransform(43.8,113,0.62,0.62);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#EA600A").s().p("AgNARQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAABAAQAIgOgLgJQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAAAAABABQALALAJgLIACgDQABgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAAAABIgCADQgHAKALAJQAAABABAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAgBgBAAIAAAAQgHgFgFAAQgGAAgEAHIgCABgAgFAGQAFgDAFACQgBgFAAgEQgEADgGgCQABAFAAAEg");
	this.shape_198.setTransform(84.4,116.1,0.62,0.62);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#EA600A").s().p("AgQAWQgBgBAAAAQgBgBAAAAQAAgBAAgBQABAAAAgBQAKgRgNgMQAAgBgBAAQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABgBAAAAQABAAAAABQABAAABABQAPAOAKgOIADgEQAAAAABgBQAAAAABAAQAAAAABAAQABAAABABQAAAAAAABQABAAAAABQAAAAAAABQgBAAAAABIgDAEQgJANAPAMQAAAAABABQAAAAAAABQAAAAAAABQAAAAgBABQAAABgBAAQAAABgBAAQAAAAgBgBQAAAAgBAAIAAgBQgIgGgHAAQgIAAgGAKQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAgAgHAHQAHgDAHACQgCgGABgFQgGADgIgCQACAEgBAHg");
	this.shape_199.setTransform(92.5,139.1,0.62,0.62);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#EA600A").s().p("AAAATIAAgEQgCgKgLAAIgEABQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABgBIAEAAQAMgBgBgLIgBgFQgBAAAAgBQAAAAABgBQAAAAAAAAQABgBABAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAIABAFQADAKAIAAIABAAIAFgBQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgFABQgKADABAKIAAAEIABAAQAAABgBAAQAAABAAAAQAAAAgBABQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAgAgEABQAEACABADQABgEADgCQgDgBgCgDQgBAEgDABg");
	this.shape_200.setTransform(80.9,132.6,0.62,0.62);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#EA600A").s().p("AgCASIAAgFQAAgKgLAAIgEAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAIAEAAQALgBAAgJIAAgEQAAgBABgBQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAABIAAAEQABAJAJABIAFAAQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAAAAAQAAABgBAAIgFAAQgKABAAAJIAAAFQAAAAgBAAQAAABAAAAQAAAAgBAAQAAABgBAAIAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAgAgEAAIAEAFQACgEADgBIgFgEQgBAEgDAAg");
	this.shape_201.setTransform(41.8,132.1,0.62,0.62);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#EA600A").s().p("AgDAeIAAgGQgBgSgTgCQgDABgEgBQgDAAAAgEQAAAAAAgBQAAgBABAAQAAAAABgBQAAAAABAAIAHAAQATAAACgSIgBgIQAAgBAAgBQABgBAAAAQAAAAABgBQABAAAAAAQAEgBAAAEIAAAJQADARAPABIAJAAQABAAAAAAQABABAAAAQABAAAAABQAAABAAAAQABAEgEAAIgFAAIgEAAQgRACgBASQABADgBADQAAAEgEAAQgDAAAAgEgAgJABQAHADACAGQAEgHAFgDQgGgDgCgFQgDAGgHADg");
	this.shape_202.setTransform(71.4,90.6,0.62,0.62);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#EA600A").s().p("AgHATQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAgBAAAAIABgEQADgKgKgDIgDgCQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABABIADABIAGABQAGAAACgGIACgFQAAAAABgBQAAAAAAAAQABgBAAAAQABAAABABQAAAAABAAQAAABAAAAQAAAAAAABQAAABAAAAIgBAFQgDAJAIADIAFACQABAAAAABQAAAAABABQAAAAAAAAQAAABgBABQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgFgCQgJgCgDAJIgCAEQAAAAgBABQAAAAAAAAQAAAAgBABQAAAAgBAAgAgEAAQACAAABAEIAFgCQgCgCAAgDIgGADg");
	this.shape_203.setTransform(30.1,133,0.62,0.62);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#EA600A").s().p("AACATIgBgEQgDgKgKACIgEABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAgBAAgBQAAAAAAAAQAAgBABAAQAAgBABAAIAEgBQALgDgCgJIgCgFQAAAAAAgBQAAgBAAAAQAAAAABgBQAAAAABAAQABgBAAAAQABAAAAABQABAAAAAAQABABAAAAIABAFQADAIAHAAIACAAIAFgCQABAAAAAAQABAAAAAAQABAAAAABQAAAAABABQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgFABQgJADACAKIABAEIAAABQAAAAAAABQAAABgBAAQAAAAAAAAQgBABgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAgAgDACIAEADIADgFIgEgDQgBADgCACg");
	this.shape_204.setTransform(37.9,116.3,0.62,0.62);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#EA600A").s().p("AAJATIgDgFQgHgIgJAGIgDACQgBABgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAgBQgBAAAAgBQAAAAABgBQAAAAABgBIADgDQAJgGgGgKIgCgDQgBgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAABgBQAAAAABAAQAAAAABABQAAAAABABIACADQAGAGAEAAQADAAADgCIAEgDQABgBAAAAQABAAABAAQAAAAABABQAAAAABABQAAAAAAABQABAAAAABQAAAAgBABQAAABgBAAIgEADQgHAHAEAIIADAFQABAAAAABQAAABAAAAQAAABAAAAQgBABAAAAIgCABgAgDADIABAAIAFABIABgFIgGgCIgBAGg");
	this.shape_205.setTransform(52.7,103.5,0.62,0.62);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#EA600A").s().p("AAAAUQgCAAAAgEIgBgfQAAgEADAAQADAAAAAEIABAfQAAADgDABg");
	this.shape_206.setTransform(85.8,97.1,0.62,0.62);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#EA600A").s().p("AgCAmIgChLQAAgDADAAQADAAAAADIADBLQAAADgEAAQgDAAAAgDg");
	this.shape_207.setTransform(84.5,97.1,0.62,0.62);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#EA600A").s().p("AgBA6IgEhzQAAgBAAgBQABgBAAAAQABAAAAgBQABAAABAAQADgBAAAFIAEBzQAAADgEABQgDAAAAgEg");
	this.shape_208.setTransform(83.1,97.2,0.62,0.62);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#EA600A").s().p("AAABHIgFiNQAAgDAEgBQACAAABAEIAECNQABAEgEAAQgDAAAAgEg");
	this.shape_209.setTransform(81.8,97.8,0.62,0.62);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#EA600A").s().p("AgBBHIgEiMQgBgDAEgCQADAAAAAFIAFCLQAAAFgEAAQgDgBAAgDg");
	this.shape_210.setTransform(80.6,99.1,0.62,0.62);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#EA600A").s().p("AgBA/IgEh9QgBgDAFAAQADAAAAADIAEB8QAAAEgEAAQgDAAAAgDg");
	this.shape_211.setTransform(79.3,100,0.62,0.62);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#EA600A").s().p("AgBApIgDhRQAAgEADAAQADAAAAAEIADBRQAAAEgEAAQgCAAAAgEg");
	this.shape_212.setTransform(78,100.1,0.62,0.62);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#EA600A").s().p("AAAAYQAAAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAgBIgCgmQAAgFAEAAQADAAAAAEIABAmQABAEgEABg");
	this.shape_213.setTransform(76.7,100.2,0.62,0.62);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#EA600A").s().p("AgTABQAAgDAEAAIAfgBQAEAAAAADQAAADgEAAIgfABQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBg");
	this.shape_214.setTransform(74.9,99.5,0.62,0.62);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#EA600A").s().p("AgfABQAAgDADAAIA4gCQAEAAAAAEQAAADgDAAIg5ACQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape_215.setTransform(75.4,98.2,0.62,0.62);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#EA600A").s().p("AgfABQAAgDADAAIA4gCQAFAAAAAEQAAADgFAAIg4ACQgBAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBg");
	this.shape_216.setTransform(76.7,96.8,0.62,0.62);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#EA600A").s().p("AggABQAAgDAEAAIA4gCQADAAACAEQgBADgEAAIg4ACQgBAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAgBg");
	this.shape_217.setTransform(77.9,95.5,0.62,0.62);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#EA600A").s().p("AggABQAAgCAEgBIA5gCQADAAABAEQAAACgEABIg5ACQgEAAAAgEg");
	this.shape_218.setTransform(79.2,94.1,0.62,0.62);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#EA600A").s().p("AggABQAAgDAEAAIA5gCQAEgBAAAFQAAADgDAAIg6ACQgEAAAAgEg");
	this.shape_219.setTransform(80.4,92.8,0.62,0.62);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#EA600A").s().p("AgRAAQAAgCAEAAIAbgBQADAAABADQAAADgEAAIgbABQgEAAAAgEg");
	this.shape_220.setTransform(80.9,91.4,0.62,0.62);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#EA600A").s().p("AAxAzIhmhfQgDgCADgDQADgDACADIBmBeQADADgDADIgDABIgCgBg");
	this.shape_221.setTransform(80.2,97.7,0.62,0.62);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#EA600A").s().p("AgZAeIgFgEQgJgMAIgMQAFgIAMgBQADgBACABQAIAAADgBIABgBIALgFQAGgEAJgKQADgDADADQADADgDACQgLALgGAFQgEADgIACIgCABQgEABgJAAIgFAAQgIAAgDAGQgFAIAGAHIADADQAEACgDADQAAAAAAABQAAAAgBAAQAAAAgBAAQAAABgBAAg");
	this.shape_222.setTransform(73.8,97.5,0.62,0.62);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#EA600A").s().p("AgaAkQgDgCACgDQAKgKAEgGQACgEACgHIAAgCQACgEgBgGIgBgGQAAgMAJgGQAEgEAHAAQAGAAAGAEIAFAFQABADgCACQgDACgCgDIgEgDQgDgCgEAAQgEAAgDACQgFAFAAAHIAAAEQABAJgBAFIgBACQgCAIgDAEQgDAHgLALIgDABg");
	this.shape_223.setTransform(79.5,91.4,0.62,0.62);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#EA600A").s().p("AgeAaQgKgKgBgPQAAgNAKgLQAKgMAQAAQAMAAALAKIAXAWIABACIgBACIgWAXQgKALgOAAQgOAAgLgJgAgagSQgIAIABALQAAAMAJAIQAIAHALAAQALAAAIgJIATgUIgUgTQgJgHgJAAQgMAAgJAJg");
	this.shape_224.setTransform(74.5,94.8,0.62,0.62);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#EA600A").s().p("AAAApIgXgWQgLgKgBgNQAAgPAKgLQAKgLAPAAQANAAALAKQALAJAAAQQABANgKAKIgVAYIgEABgAgTgYQgJAHABAMQAAAKAJAJIATASIATgTQAIgJgBgKQAAgMgIgIQgIgIgLAAQgLAAgIAKg");
	this.shape_225.setTransform(76.8,92.3,0.62,0.62);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#EA600A").s().p("Ag4BOIgRgQQgEgDAAgGQgBgFAEgEIBxh5QADgEAGAAQAGAAADADIASARQAEADAAAGQAAAFgEAEIhxB5QgEAEgFAAQgFAAgEgEgAAthIIhxB5QgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAABAAIASARQAAAAAAABQAAAAABAAQAAAAABAAQAAAAABABQABgBAAAAQAAAAABAAQAAAAABAAQAAgBABAAIBxh6QAAAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIgSgRIgEgBQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABAAAAg");
	this.shape_226.setTransform(77.9,95.6,0.62,0.62);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#EA600A").s().p("AgZBcIhDg/IgBgCIABgDIBth2QADgCADACIBDA/QADADABAGQAAAEgDAFIhiBpQgDAEgGAAQgEAAgFgEgAhUAaIBAA9IAEABQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBIBihoQADgEgDgDIhBg9g");
	this.shape_227.setTransform(81,98.5,0.62,0.62);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#EA600A").s().p("AALAgQgOgMgIgQQgHgQABgQQAAgEAFAAQAFABgBAEQgBAPAGANQAGAOANALQAEACgDADQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgDgBg");
	this.shape_228.setTransform(73.4,150.3,0.62,0.62);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#EA600A").s().p("AAHASQgNgNgHgSQgBgDAEgCQAEgBABAEQAGAPAMAMQADADgDADIgDACQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_229.setTransform(75.5,149.1,0.62,0.62);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#EA600A").s().p("AAJAkQgOgOgHgTQgGgSAFgSQABgEAEABQAEABgBAEQgEAQAGAPQAFARANAMQADADgCAEQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAg");
	this.shape_230.setTransform(74.4,149.1,0.62,0.62);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#EA600A").s().p("AANAZQgYgQgIgcQAAgEAEgBQAEgBABAEQAGAYAWAPQADADgCADQAAAAgBABQAAAAAAAAQgBAAAAAAQgBABAAAAg");
	this.shape_231.setTransform(72.5,151.6,0.62,0.62);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#EA600A").s().p("AACAeQgCgEAGgIIACgDIgEAAQgIgBgCgFQgCgFAFgGIADgDIgEAAQgIgCgDgEQgCgGAGgGIACgDQgCgDAEgCQAEgCACAEQABAFgFAHIgBACIADABQAHAAADAGQACAFgGAFIgCADIAEABQAJABACAFQACAFgGAGIgCADQACAEgEACIgBAAQgEAAgBgCg");
	this.shape_232.setTransform(72.6,142.7,0.62,0.62);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#EA600A").s().p("AgnAUQgFgCgDABQgEACgCgEQgCgEAEgCQAHgCAIADQAGACACgBQAEgCACgFQADgHAHgDQAGgDAIAEQAFACADgCQAEgBABgFQAEgIAGgDQAIgDAHADQAFACAEgBQADgCACAEQACAEgEACQgFACgKgCQgFgDgDACQgDABgDAFQgDAIgHACQgGADgHgDQgGgCgDABQgCABgDAGQgEAIgGADQgDABgEAAQgDAAgFgCg");
	this.shape_233.setTransform(80,145.6,0.62,0.62);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#EA600A").s().p("AAkARQgFgBgEgIQgCgEgCAAQgCAAgDADQgHAFgFgBQgGgBgDgIQgBgDgCAAQgCgBgDACQgHAGgGgBQgFgCgEgGQgCgEgCgBQgEgBABgEQABgEAEABQAGABAEAIQABAEACAAQABAAAAAAQABAAAAAAQABgBAAAAQABgBABAAQAHgGAFABQAFABAEAIQACADACAAQABABAEgDQAGgFAGACQAGABAEAHQABADACABQAEABgBAEQAAADgEAAg");
	this.shape_234.setTransform(80.7,148.8,0.62,0.62);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#EA600A").s().p("AgKArQgEgBABgEQAAgGAIgEQAEgDAAgBQAAgCgDgDQgGgGAAgGQABgGAIgEQACgBABgCQAAgCgCgDQgGgGAAgGQABgGAHgFQADgBABgDQAAgEAEABQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQgBAHgHAEQgEACAAACQAAABADAEQAGAFgBAHQAAAFgIAEQgDACAAACQAAABACAEQAGAHgBAFQAAAFgHAFQgEACAAACQgBAEgDAAg");
	this.shape_235.setTransform(75.3,142.3,0.62,0.62);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#EA600A").s().p("AglAmQgDgDADgDQADgFAJgBQAFAAACgDQACgCAAgFQgBgJAEgFQAFgFAIAAQAFgBACgCQACgDgBgFQgBgIAEgGQAEgEAKgCQAFAAACgCQACgDAEACQADADgDADQgDAFgKABQgEAAgDADQgCACABAFQABAKgFAFQgEAEgJAAQgEABgCACQgCACAAAGQACAJgEAFQgFAFgJABQgFAAgCACQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgCgBg");
	this.shape_236.setTransform(77.9,143.4,0.62,0.62);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#EA600A").s().p("AgLASQgHgGgBgKQAAgIAGgHQAFgIAJgBQAJAAAIAGQADADgDADQgCADgEgDQgEgEgGABQgFAAgEAFQgDAFAAAFQABAFAEAEQAFAFAHgCQAEgBABAEQACADgFACIgGABQgHAAgHgFg");
	this.shape_237.setTransform(70.5,154,0.62,0.62);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#EA600A").s().p("AgFAIQgDgDACgDIAGgIQACgDADACQAEADgDADIgFAIIgDACg");
	this.shape_238.setTransform(71.7,152.9,0.62,0.62);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#EA600A").s().p("AAZAaQgDgCACgEQABAAAAgBQAAAAAAgBQAAAAgBgBQAAgBAAgBQgEgJgQgLQgOgLgKgBQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgDAEgEgDQgDgDACgDQAFgGAIABQAMABARANQARAMAFAMQADAHgDAGQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAg");
	this.shape_239.setTransform(75.5,147.5,0.62,0.62);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#EA600A").s().p("AgkAyQgNgJgEgIQgDgGADgEIArhNIABgCQACgDAEACQADACgCAEIAAABQgBABADAGQAHAKAPAKQAPAKAIAAIACgBIAAAAQAEgDACACQAEADgDADIgBACIg9A/QgCADgFAAQgIAAgNgJgAgtAbIgBABQAAACAFAEQAGAGAIAGQAIAFAEAAIABAAIAAgBIA1g3QgLgDgPgLQgNgKgHgJIgBgCg");
	this.shape_240.setTransform(74.1,149.7,0.62,0.62);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCIACgBIADABIABACIgBADIgDABIgCgBg");
	this.shape_241.setTransform(70,150.3,0.62,0.62);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#EA600A").s().p("AgCADQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIABgCIACgCQABAAAAABQABAAAAAAQAAAAABAAQAAABAAAAIACACQAAABgBAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAg");
	this.shape_242.setTransform(71.3,147.7,0.62,0.62);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#EA600A").s().p("AgCADIgCgDQAAAAABAAQAAAAAAgBQAAAAAAAAQABgBAAAAIACgBIADABQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAAAIgBADIgDABg");
	this.shape_243.setTransform(70.3,144.8,0.62,0.62);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#EA600A").s().p("AgCADQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBgBAAAAIACgCQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAIABACQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape_244.setTransform(69.3,146.9,0.62,0.62);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#EA600A").s().p("AgCADIgCgDQAAAAABAAQAAAAAAgBQAAAAAAAAQABgBAAAAIACgBIADABQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAAAIgBADIgDABg");
	this.shape_245.setTransform(76.2,152.8,0.62,0.62);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCIACgBIADABIABACIgBADIgDABg");
	this.shape_246.setTransform(78.3,140.4,0.62,0.62);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#EA600A").s().p("AgCADIgCgDQAAAAABAAQAAAAAAgBQAAAAAAAAQABgBAAAAIACgCQABAAAAABQABAAAAAAQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAAAIgBADQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAg");
	this.shape_247.setTransform(76.6,142,0.62,0.62);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#EA600A").s().p("AgCADIgCgDQAAAAABAAQAAAAAAgBQAAAAAAAAQABgBAAAAIACgCQABAAAAABQABAAAAAAQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAAAIgBADQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAg");
	this.shape_248.setTransform(78.3,151.1,0.62,0.62);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#EA600A").s().p("AgCADQAAAAgBAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAAAQABgBAAAAIACgCQABAAAAABQABAAAAAAQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAg");
	this.shape_249.setTransform(79.5,153.2,0.62,0.62);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#EA600A").s().p("AgCADQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAIACgCQABAAAAABQABAAAAAAQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAQAAABgBAAg");
	this.shape_250.setTransform(80.3,143.5,0.62,0.62);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#EA600A").s().p("AgCADQAAAAgBAAQAAgBAAAAQAAAAAAgBQgBAAAAgBIACgCIACgBQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAIABACQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAQAAABgBAAg");
	this.shape_251.setTransform(82.1,140.9,0.62,0.62);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCIACgBIADABIABACIgBADQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAg");
	this.shape_252.setTransform(69.4,142.6,0.62,0.62);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#EA600A").s().p("AgCADIgBgDQAAAAAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAIACgBIADABQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAAAIgBADIgDABg");
	this.shape_253.setTransform(81.2,147,0.62,0.62);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCIACgBQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAIABACIgBADQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAg");
	this.shape_254.setTransform(79.6,137.3,0.62,0.62);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAAAAAIADABIABACIgBADIgDACQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_255.setTransform(82.2,151.1,0.62,0.62);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#EA600A").s().p("AgCADIgBgDQAAAAAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAAAAAIADABQAAAAABABQAAAAAAAAQAAABAAAAQABAAAAAAIgCADIgDACQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_256.setTransform(83.3,146.9,0.62,0.62);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#EA600A").s().p("AgCADQAAAAgBAAQAAgBAAAAQAAAAAAgBQgBAAAAgBIACgCQAAAAABgBQAAAAAAAAQABAAAAAAQAAgBAAAAIADACIABACQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgDABQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_257.setTransform(80.7,150.4,0.62,0.62);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#EA600A").s().p("AgBAkIgcgQQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBIAAgfQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAIAcgQQAAAAABAAQAAgBAAAAQABAAAAABQABAAAAAAIAcAQQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAfQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgcAQIgCABgAgWgMIAAAZIAWAOIAXgOIAAgZIgXgNg");
	this.shape_258.setTransform(47.7,145.6,0.62,0.62);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#EA600A").s().p("AAOAYIgegIIgDgCIAAgEIAIgeQABgFAFACQAFABgBAFIgIAZIAaAHQAEABgBAFQgBAEgEAAg");
	this.shape_259.setTransform(51.1,143.5,0.62,0.62);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#EA600A").s().p("AAWAjIgugNQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAgBAAIAAgEIAMguQABgEAFABQAFABgBAFIgMApIAqALQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAEgEAAg");
	this.shape_260.setTransform(52.6,142.6,0.62,0.62);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#EA600A").s().p("AAGAYQgEgBABgFIAHgZIgZgHQgGgBACgFQABgEAFABIAeAIIADACIAAAEIgIAeQgBAEgEAAg");
	this.shape_261.setTransform(44.2,147.8,0.62,0.62);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#EA600A").s().p("AAKAjQgFgCABgEIALgqIgpgLQgEgBABgFQABgEAFABIAuAMIADADIAAADIgNAuQgBAEgDAAg");
	this.shape_262.setTransform(42.7,148.7,0.62,0.62);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#EA600A").s().p("AgcARQgCgEAEgDIAxgcQAFgCABAEQACAEgDADIgxAcIgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAg");
	this.shape_263.setTransform(44.4,147.5,0.62,0.62);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#EA600A").s().p("AgcARQgCgEAEgDIAwgbQAEgCADAEQACAEgEACIgwAcIgDAAQgCAAgCgCg");
	this.shape_264.setTransform(50.9,143.8,0.62,0.62);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#EA600A").s().p("AgLAVIgIgeIAAgEIADgCIAegIQAFgBABAEQABAFgEABIgaAHIAIAZQABAFgFABIgBABQgEAAgBgEg");
	this.shape_265.setTransform(51.1,147.8,0.62,0.62);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#EA600A").s().p("AgKAjQgEAAgBgEIgMguIAAgDQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAIAugMQAFgBABAEQABAEgEACIgqALIAMAqQABAEgFACg");
	this.shape_266.setTransform(52.6,148.7,0.62,0.62);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#EA600A").s().p("AgTAVQgBgFAFgBIAZgHIgHgaQgBgEAEgBQAEgCACAFIAIAeIAAADQgBABAAAAQAAABAAAAQgBAAAAAAQgBABAAAAIgeAIIgBAAQgEAAgBgDg");
	this.shape_267.setTransform(44.3,143.5,0.62,0.62);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#EA600A").s().p("AgXAjQgDAAgBgEQgBgFAEgBIApgLIgLgpQgCgFAGgBQAEgBABAEIANAuIAAAEIgDACIguANg");
	this.shape_268.setTransform(42.7,142.6,0.62,0.62);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#EA600A").s().p("AgIAPQgEgCACgEIAMgVQADgEADACQAFADgDAEIgLAVQgBAAAAABQAAAAgBAAQAAAAgBABQgBAAAAAAg");
	this.shape_269.setTransform(46.5,147.7,0.62,0.62);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#EA600A").s().p("AgHAOQgEgDACgDIAKgTQADgEAEACQAEADgCAEIgLASQAAABAAAAQAAABgBAAQAAAAgBABQgBAAgBAAg");
	this.shape_270.setTransform(48.9,143.5,0.62,0.62);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#EA600A").s().p("AACAOIgMgVQgCgEAEgDQAEgCADAEIALAVQADADgEADIgDABQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_271.setTransform(48.9,147.7,0.62,0.62);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#EA600A").s().p("AABAMIgKgSQgCgFAEgCQADgCADAEIALATQACAEgEACIgDABQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_272.setTransform(46.4,143.5,0.62,0.62);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#EA600A").s().p("AgJAFQgFAAAAgFQAAgEAFAAIATAAQAFAAAAAEQAAAFgFAAg");
	this.shape_273.setTransform(50.2,145.7,0.62,0.62);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#EA600A").s().p("AgLAFQgEAAAAgFQAAgEAEAAIAXAAQAEAAAAAEQAAAFgEAAg");
	this.shape_274.setTransform(45.2,145.7,0.62,0.62);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#EA600A").s().p("AAWASIgwgbQgEgDACgEQACgDAFABIAwAcQAEADgCADQgBABAAABQgBAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_275.setTransform(44.4,143.8,0.62,0.62);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#EA600A").s().p("AAXATIgxgdQgFgCADgEQADgEADACIAyAcQAEADgCAEQgCACgDAAg");
	this.shape_276.setTransform(50.9,147.5,0.62,0.62);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#EA600A").s().p("AAUAOIgUgSIgSASQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgEgDAEgDIAWgWQADgDADADIAXAWQADADgDADQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_277.setTransform(47.7,149.2,0.62,0.62);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#EA600A").s().p("AAfAVIgfgfIgeAfIgDABQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAIAigiQADgDADADIAjAiQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_278.setTransform(47.7,150.8,0.62,0.62);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#EA600A").s().p("AgDAPIgWgWQgEgDAEgDQAEgEADAEIASASIAUgSQACgEAEAEQADADgDADIgXAWIgDABg");
	this.shape_279.setTransform(47.7,142.1,0.62,0.62);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#EA600A").s().p("AgDAVIgigiQgDgDADgDQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABIAeAdIAfgdQADgEAEAEQADADgDADIgjAiQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_280.setTransform(47.7,140.5,0.62,0.62);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#EA600A").s().p("AgEAcIAAg3QAAgFAEAAQAFAAAAAFIAAA3QAAAFgFAAQgEAAAAgFg");
	this.shape_281.setTransform(47.7,141.9,0.62,0.62);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#EA600A").s().p("AgEAdIAAg5QAAgFAEAAQAFAAAAAFIAAA5QAAAFgFAAQgEAAAAgFg");
	this.shape_282.setTransform(47.7,149.4,0.62,0.62);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#EA600A").s().p("AgJAKQgEgEAAgGQAAgEAEgFQAEgEAFAAQAGAAAEAEQAEAFAAAEQAAAGgEAEQgEAEgGAAQgFAAgEgEgAgEAAQAAAFAEAAQAFAAAAgFQAAgDgFAAQgEAAAAADg");
	this.shape_283.setTransform(59.4,91.3,0.62,0.62);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#EA600A").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAFgEAEAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgEAAgFgEgAgEAAQAAAEAEAAQAFAAAAgEQAAgDgFgBQgEABAAADg");
	this.shape_284.setTransform(58.3,94.4,0.62,0.62);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#EA600A").s().p("AgJAKQgEgEAAgGQAAgEAEgFQAEgEAFAAQAGAAAEAEQAEAFAAAEQAAAGgEAEQgEAEgGAAQgFAAgEgEgAgEAAQAAAFAEAAQAFAAAAgFQAAgDgFAAQgEAAAAADg");
	this.shape_285.setTransform(66.1,91.3,0.62,0.62);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#EA600A").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAFAAAFAEQAEAEAAAFQAAAGgEAEQgFAEgFAAQgFAAgEgEgAgEAAQAAAEAEAAQAEAAAAgEQAAgDgEgBQgEABAAADg");
	this.shape_286.setTransform(67.2,94.4,0.62,0.62);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#EA600A").s().p("AgJAKQgEgEAAgGQAAgEAEgFQAFgEAEAAQAGAAAEAEQAEAFAAAEQAAAGgEAEQgEAEgGAAQgEAAgFgEgAgDAAQAAAFADAAQAFAAAAgFQAAgEgFAAQgDAAAAAEg");
	this.shape_287.setTransform(62.7,89.8,0.62,0.62);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#EA600A").s().p("AgJAdQgIgDgCgJQgCgRACgQQACgJAIgDQAJgCAKACQAJADABAJQACAQgCARQgBAJgJADIgKABgAgGgTQgDAAgBAFQgBAOABAPQABADADACQAGABAHgBQAEgBAAgEQACgPgCgPIgBgCIgDgCIgHgBIgGABg");
	this.shape_288.setTransform(62.7,98.2,0.62,0.62);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#EA600A").s().p("AgFAGQgEAAgBgDQgBgEAFgBIALgDQAEgBACAEQABAEgFABIgMADg");
	this.shape_289.setTransform(64.2,97.7,0.62,0.62);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#EA600A").s().p("AAFAGIgLgDQgFgCABgDQACgEADABIAMADQAFABgBAEQgBADgEAAg");
	this.shape_290.setTransform(64.2,98.6,0.62,0.62);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#EA600A").s().p("AgcAXQgFgCADgEIADgCQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAdASAKgIQAIgGAAgUQAAgUgGgFQgDgCgLAEQgLAFgPALQgEADgDgEQgCgEADgDQAQgLANgFQAQgGAGAFQAKAHAAAaQAAAYgLAIQgGAEgHAAQgOAAgWgNg");
	this.shape_291.setTransform(65.4,98,0.62,0.62);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#EA600A").s().p("AAFAGIgMgDQgEgBABgEQABgEAFABIALADQAFABgBAEQgCADgCAAg");
	this.shape_292.setTransform(61.3,97.7,0.62,0.62);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#EA600A").s().p("AgKADQgBgEAEgBIAMgDQAFgBABAEQABADgFACIgLADIgCAAQgDAAgBgDg");
	this.shape_293.setTransform(61.3,98.6,0.62,0.62);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#EA600A").s().p("AgTAgQgMgHAAgZQAAgIABgIQADgMAGgFQAHgFAOAGQAOAFAQALQAEADgDAEQgDADgDgCQgPgLgMgFQgKgEgDACQgIAGABATQAAAUAIAGQALAIAcgSQAEgBACADQACAEgDACQgOAIgKADQgHACgFAAQgIAAgFgEg");
	this.shape_294.setTransform(60.1,98,0.62,0.62);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#EA600A").s().p("AgNAZQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgDgCACgDIAEgKIgQgEQgDAAAAgEQABgDADAAQAbgCAOgRQADgEAEADQADADgDAEQgLAMgOAEIADACIAAAEIgCAFQAUgLAIgRQACgEAEACQAFACgCAEQgNAZgfANg");
	this.shape_295.setTransform(60.9,100.8,0.62,0.62);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#EA600A").s().p("AAMAZQgfgNgNgZQgCgEAEgCQAEgCADAFQAJARATALIgCgGIAAgEIACgCQgOgFgLgLQgCgDADgDQADgDADADQAOARAcACQADAAABADQAAAEgDAAIgRAEIAFALQABACgCACQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape_296.setTransform(64.7,100.7,0.62,0.62);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#EA600A").s().p("AAOAyQgFgBACgEQABgEAEABIABgCQABgDAEgDQACgCAFAAIACAAIAAgBIABgIQACgDAFgBIABgBIAAgBQgCgFAAgDQAAgCAEgEIABgBIgBgCQgEgCAAgDQAAgDACgEIAAgCIgBgBIgHgEIgBgHIAAgCIgCAAQgFAAgCgCQgEgCgBgEIgBgCIgBABQgGACgCgBQgCAAgDgEIgCgBIgBABQgDAEgDAAQgBABgGgCIgBgBIgCACIgDAGQgDACgFAAIgCAAIAAACQAAAFgBACIgHAEIgBABIABACQABAEAAADIgEAFIgBACIABABIAEAGQAAADgBAFIgBABIABABQAFABACADQABADAAAFIAAABIACAAQAFAAADACIADAGIACACQADgBACAEQABAEgEACIgHAAQgDgCgCgFIgBgCIgCAAQgGAAgDgDQgCgCAAgGIAAgDIgCgBQgGgCgBgDQgCgDADgGIABgCIgCgCQgEgDAAgEQAAgDAEgEIACgCIgBgCQgDgGACgDQABgDAGgCIACgBIAAgCQAAgGACgDQADgCAGAAIACAAIABgCQACgGADgBQADgCAGADIACAAIACgBQAFgEACAAQACAAAGAEIABABIADAAQAFgDADACQAEABACAGIAAACIADAAQAGAAACACQADADAAAGIAAACIACABQAGACABADQABAEgCAFIgBACIACACQAEAEAAADQAAAEgEADIgCACIABACQACAFgBAEQgBADgGACIgCABIAAADQAAAGgDACQgCADgGAAIgDAAIAAACQgCAFgEACIgDAAg");
	this.shape_297.setTransform(62.8,94.1,0.62,0.62);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#EA600A").s().p("ABEBTQgEgDADgEQADgDAFgBIAEgDIAAgFQAAgGACgDQACgEADgCIAEgEIgBgFQgCgGABgDIAEgIIACgFIgCgFQgEgDAAgFQgBgDACgEIABgFIgEgEIgFgHQgCgDAAgGIAAgFQgBgBgDgBIgIgFIgEgIIgCgFIgEgBIgJgDIgGgGQgBgDgCgBQAAgBgBAAQAAAAgBAAQgBAAAAAAQgBAAgBABQgFABgEgBIgIgFIgDgDQgBAAgFACIgIACIgIgCQgEgCAAAAQgCAAgDADIgHAFQgFABgEgBQgBgBgBAAQAAAAgBAAQgBAAAAAAQgBAAAAABQgCABgBADIgGAGIgJADIgEABIgDAFIgEAIIgHAFQgDABgBABIgBAFIgBAJIgFAHIgEAEIAAAFQACADAAAEQgBAEgDAEIgCAFIACAFIAEAIQAAAEgCAFIAAAFIAEAEQADACACAEIABAJIABAFIAEADQAEABADADQAEAEgEADQgDADgEgEIgDgCQgHgCgCgEQgCgDAAgHIgBgFIgDgEQgFgFgBgDQgBgEACgGIAAgFIgCgEQgDgGAAgEQAAgDADgHIACgEIAAgEQgCgGABgEIAGgIIADgEIABgFQAAgGACgEQACgCAHgEIADgCIACgFQACgGADgDQAEgCAGgBIAFgCIADgDQADgGAEgCQADgBAIABIAEAAIAFgDQADgEAGgBQAEAAAFACIAEACIAFgCQAFgCAEAAQAFABAFAEIADADIAFAAQAHgBAEABQADABAEAHIADADIAFACQAHABACACQADADACAGIACAFQACACACAAQAGADACADQADAFAAAFIAAAFIAEAEQAFAGABACQABAEgCAGIgBAEIACAEQAEAHAAADQAAAEgEAGIgCAEIABAFQACAGgBAEQgBAEgFAEIgEAEIAAAFQAAAGgDAEQgCAEgGACIgEACQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAAAg");
	this.shape_298.setTransform(62.8,93.1,0.62,0.62);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#EA600A").s().p("AgrAAQgEgBABgEIAGgSIACgCQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABIBOAZQAEABgCAFIgGASQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIgCABgAgkgGIBFAXIAEgKIhGgXg");
	this.shape_299.setTransform(91.8,123.2,0.62,0.62);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#EA600A").s().p("AA4AXIhxglQgEgBABgEQABgFAEACIBxAlQAEABgBAFQAAADgEAAg");
	this.shape_300.setTransform(91.6,123.8,0.62,0.62);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#EA600A").s().p("AAJAQIgagEQgEgBABgEQAAgFAFABIAWAEIAGgSQACgFADACQAFABgCAEIgHAWQAAADgEAAg");
	this.shape_301.setTransform(83.5,127.7,0.62,0.62);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#EA600A").s().p("AAHAWIgVgmQgCgDADgDQAFgCABAEIAWAmQACAEgEACIgCAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_302.setTransform(84.1,128.6,0.62,0.62);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#EA600A").s().p("ABMAhIiZgaQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIARgeQABgEADABICEAWQAAAAABABQABAAAAAAQABABAAAAQAAABAAABIAFAhIAAABQAAAFgEAAgAhFAAICNAXIgFgZIh8gVg");
	this.shape_303.setTransform(89.8,129.5,0.62,0.62);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#EA600A").s().p("AgOAgIgCgDIgEgaQgBgDAEgBQAEgBABADIAEAWIAUgDIgIguQgBgEAFgBQAAgBABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAIAIAzQABAEgEABIgdAEIgBABg");
	this.shape_304.setTransform(93.9,132.2,0.62,0.62);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#EA600A").s().p("AAKAcIgcgFIgDgCIgBgDIAHgpQAAgBAAAAQAAAAABgBQAAAAAAAAQAAgBABAAIADgBIAdAFQAEABAAAEIgHApQgBAEgEAAgAgMAPIAUADIAFggIgUgDg");
	this.shape_305.setTransform(91.9,132.2,0.62,0.62);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#EA600A").s().p("AAWAMIgxgOQgEgBABgEQAAgEAFAAIA0AAQAAAAABAAQAAAAAAABQABAAAAAAQABAAAAABIABADIgDAOQAAABgBAAQAAABAAAAQAAAAgBABQAAAAAAAAIgCABgAAEgCIAQAEIABgEg");
	this.shape_306.setTransform(89.1,126.8,0.62,0.62);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#EA600A").s().p("AAAALQgEAAgDgDQgEgDAAgEQgBgDADgEQAEgDAFgBQAEgBAEADQAEADAAAFQABACgDAFQgDAEgGAAgAgCAAIgBAAQAAAAABABQAAAAABABQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAIABgBQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgCABg");
	this.shape_307.setTransform(92.3,125.7,0.62,0.62);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#EA600A").s().p("AgEAKQgFgDgCgEQgBgDACgEQACgGAIAAIAFABQAFACACAFQABAEgCADQgDAGgHAAIgFgBgAgCAAIAAAAIACACIABABQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAAAgBIAAgBIgCgBIgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAABg");
	this.shape_308.setTransform(89,125.1,0.62,0.62);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#EA600A").s().p("AgBAKQgDgBgDgDQgDgDABgDQACgJAHAAIACAAQAEABACADQACAEAAADQgCAIgIAAgAAAAAIAAABIAAAAIABgBIgBAAIAAAAg");
	this.shape_309.setTransform(89.2,134.4,0.62,0.62);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#EA600A").s().p("AgBAJQgDAAgDgDQgCgEAAgDQACgIAHAAIACAAQAEABACAEQADADgBADQgCAIgIAAgAAAAAIAAABIAAAAIABgBIgBAAg");
	this.shape_310.setTransform(89.5,132.3,0.62,0.62);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#EA600A").s().p("AgWAqQgEAAgBgEQgBgLABgMQAEgTAOgQQAMgPAUgFQAFgBABAEQABAEgEABQgSAFgLANQgMANgDARQgBAIABANQABAEgEABg");
	this.shape_311.setTransform(87.8,125.4,0.62,0.62);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#EA600A").s().p("AgCAoQgEgBACgFQAEgJACgKQAEgZgQgWQgCgEADgDQADgCADADQATAZgGAdQgBAMgGALQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAAAAAg");
	this.shape_312.setTransform(94,126.7,0.62,0.62);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#EA600A").s().p("AgLBAQgjgFgVgdQgVgdAGgiQADgQAIgOQADgEADADQAEACgDAEQgHANgCANQgFAgASAZQATAaAfAFQAbAEAZgPQAZgPAIgcQABgEAFACQAEAAgBAFQgIAbgXARQgXARgcAAIgNgCg");
	this.shape_313.setTransform(89.4,133.5,0.62,0.62);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#EA600A").s().p("AANATIgagFQgFgBABgDIABgYQABgEAEAAQAEAAAAAFIgBATIAWAEQAFAAgBAFQAAAEgEAAg");
	this.shape_314.setTransform(96.7,129.8,0.62,0.62);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#EA600A").s().p("AgTASQgDgDADgDIAhgdQAEgDACADQADADgDAEIghAcQAAABgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAg");
	this.shape_315.setTransform(95.8,130.5,0.62,0.62);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#EA600A").s().p("AgZANQgDgBABgFQABgDAEABQAMAEAMgFQAMgEAHgMQABgDAEACQADACgBADQgJAOgOAFQgHADgJAAQgIAAgGgBg");
	this.shape_316.setTransform(35,128.1,0.62,0.62);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#EA600A").s().p("AhMAgIgBgCQgDgHADgHQADgHAHgDIB4gvQADgBAEAAQAMAAAFALIABACQACAIgCAGQgDAHgHADIh4AvIgHABQgMAAgFgLgAA4giIh4AvQgEACgCAEQgBAEABAEIABADQADAGAHAAIAEgBIB4gwQAEgBABgEQACgEgCgEIgBgCQgCgHgHAAg");
	this.shape_317.setTransform(32.4,121.7,0.62,0.62);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#EA600A").s().p("AgXAKQgEgKAEgJQAEgKAKgEQAGgCADAAQASAAAGAQQAEAJgEAKQgEALgKADQgEACgGAAQgRAAgGgQgAgGgQQgHADgDAHQgDAGADAHQAFAMALAAQAEAAADgCQAHgDADgHQADgHgDgGQgFgLgMAAQgDAAgDABg");
	this.shape_318.setTransform(38.4,121.5,0.62,0.62);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#EA600A").s().p("AgWAJQgDgIAFgHQAFgHAJgEQAGgCAEAAQAPAAAEALQADAHgFAHQgFAIgJAEQgGACgFAAQgOAAgEgLgAgDgKQgHADgEAGQgDAEACADQACAGAJAAQAEAAAEgCQAHgCADgFQADgEgBgEQgDgGgJAAQgEAAgDABg");
	this.shape_319.setTransform(34,125.4,0.62,0.62);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#EA600A").s().p("AgRAeQgRAAgJgMQgCgCACgDQADgCADACQAGAJAOAAIABAAQAKAAAPgHQAQgHAHgIQAFgHAAgJQgHAIgOABQgHABgLgCIgKgCQgKgCgIAEQgDACgCgEQgBgEADgCQAJgDANABIAKABQALACAFAAQAGAAAGgDQAGgDACgFIADgDQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAIAPgMAPQgIALgSAIQgNAHgPABg");
	this.shape_320.setTransform(37,125.3,0.62,0.62);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#EA600A").s().p("AgWAgQgUgDgEgQQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAFADAHgCQAGgCAFgEQAFgEAGgIIAGgJQAIgKAKgDQAEgCABAFQABADgDACQgIACgIAJIgRAVQgKAJgMAAQAFAFAJACQANABAPgFQAOgFAJgIQALgKgBgKQgBgDAEgBQAEAAAAADQACAPgNALQgKAKgRAFQgMAFgLAAIgIgBg");
	this.shape_321.setTransform(31.5,127.2,0.62,0.62);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#EA600A").s().p("AgLACQgBgDADgEQADgEAFgBIABAAQAKAAACAIQABAEgDAEQgDAEgFABIgCAAQgJAAgCgJgAgDABQAAAAAAABQABAAAAABQABAAAAAAQABAAAAAAIABAAQADgBAAgCQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAgBAAIAAAAQgDABAAADg");
	this.shape_322.setTransform(31.2,124.6,0.62,0.62);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#EA600A").s().p("AgJAGQgCgEAAgEQACgEAEgCQACgDAEAAQAGABADAEQADAFgCAEQgBAEgEADQgDABgDAAQgGABgDgGgAgBgCQAAAAgBABQAAAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAABQAAAAABAAQAAAAAAAAQABAAAAAAIACAAIACgCIgBgCQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_323.setTransform(35.5,122.9,0.62,0.62);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#EA600A").s().p("AhRAqQgEAAAAgEQgBgOAHgNQALgUAegPQA2gbAlARQAZALAHAZQACAEgEABQgEABgBgEQgGgVgWgKQgjgPgyAZQgsAWACAgQABAEgFABg");
	this.shape_324.setTransform(33.4,119.9,0.62,0.62);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#EA600A").s().p("AAPAMQgEgIgIgFQgIgGgGACIgDADQgCADgEgBQgDgCACgDQABgFAGgCIABAAQAIgDAKAGQALAHAGALQACADgEACIgBAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBg");
	this.shape_325.setTransform(37.2,119.5,0.62,0.62);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#EA600A").s().p("AghBAIgBABQgKAEgKgEQgKgEgDgKIgBgDQgIABgGgEQgFgEgDgHQgDgIADgIQgIgDgDgJQgFgKAIgKQgDgEgCgEQgCgHACgIQADgHAIgEQAEgBACADQABAEgDACQgGACgBAEQgCAFACAFQABADAEADQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgJAGAEAIQADAHAHACQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAABQABABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgFAGADAIQACAFAFACQAFACAFgBIADABIACACIABAFQACAHAHADQAHACAGgCIAEgCQACgCADADQAEAGAGACQAHACAHgDQAFgDAEgFQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAJAJAMgFQAMgGABgMQAAgBABAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAHACAFgCQAHgDADgGQAEgGgBgHQgBgEAEAAIADgBQAIgEACgGQACgFgCgHIgDgEIgBgDIACgDQAFgCACgFQACgFgCgFQgEgIgHgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAEgHgCgGQgCgEAEgBQADgCACAEQADAIgDAIQAIAEADAIQAGAPgMAKIABACQAEAJgEAKQgEAJgKAEIgBAAQAAAUgRAHQgHADgIgCQgCAPgPAGQgOAFgNgIQgEAGgGACQgEACgGAAQgMAAgIgJg");
	this.shape_326.setTransform(34.1,126.9,0.62,0.62);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#EA600A").s().p("AADAYIgCgBIgMgKQgIgFAAgIQgCgIAFgHQAHgIAJAAQAHAAAFAEQAIAFAAAJQACAHgFAHIgKAOIgDABgAgJgKQgEAFACAEQABAFADADIAJAHIAIgKQADgEgBgEQAAgFgEgEQgEgCgEAAQgFAAgEAFg");
	this.shape_327.setTransform(34.6,99.7,0.62,0.62);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#EA600A").s().p("AgNAGQgBgEAEgCIASgHQAEgCACAEQACAEgEABIgVAIQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAg");
	this.shape_328.setTransform(33,108,0.62,0.62);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#EA600A").s().p("AAKAFIgUgCQgEgBAAgDQAAgDAFAAIAUACQAFABgBADQgBADgEAAg");
	this.shape_329.setTransform(33.2,109.7,0.62,0.62);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#EA600A").s().p("AAGAKIgQgMQgDgCACgEQACgDAEACIAQAMQADACgCAEQAAABgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAg");
	this.shape_330.setTransform(32.6,111.2,0.62,0.62);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#EA600A").s().p("AgIAMQgDgCACgEIAMgQQADgDADACQADADgCADIgMAQQgBABAAAAQAAAAgBAAQAAAAgBABQAAAAgBAAg");
	this.shape_331.setTransform(32,106.7,0.62,0.62);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#EA600A").s().p("AgFAtQgDgDAEgCIAEgHQAMgPgCgTQgDgUgPgMIgHgEQgDgDABgDQACgEAEACIAIAFQASAPADAXQADAWgOASIgHAIIgCABg");
	this.shape_332.setTransform(32.4,109,0.62,0.62);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#EA600A").s().p("AgSAaQgEgDADgDIAhgrQADgEACADQADACgCAEIggArIgEABg");
	this.shape_333.setTransform(38.4,107,0.62,0.62);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#EA600A").s().p("AgKAPQgEgDADgDIAQgWQADgDADACQAEACgDAEIgQAWQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_334.setTransform(35.8,101.3,0.62,0.62);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#EA600A").s().p("AgKAPQgEgCADgEIAQgWQADgDADACQADADgCADIgQAWIgDACIgDgBg");
	this.shape_335.setTransform(36.6,101.9,0.62,0.62);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#EA600A").s().p("AgKAPQgDgDACgDIAQgWQADgDADACQADACgCAEIgRAWQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAg");
	this.shape_336.setTransform(37.4,102.6,0.62,0.62);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#EA600A").s().p("AgKAPQgDgCACgEIAQgWQADgDADACQADADgCADIgRAWQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAAAg");
	this.shape_337.setTransform(38.3,103.2,0.62,0.62);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#EA600A").s().p("AgKAPQgEgDADgDIARgWQACgDADACQADACgCAEIgRAWQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAg");
	this.shape_338.setTransform(39.1,103.9,0.62,0.62);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#EA600A").s().p("AgKAPQgDgCACgEIARgWQACgDADACQADADgCADIgQAWQgBABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAIgCgBg");
	this.shape_339.setTransform(40,104.5,0.62,0.62);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#EA600A").s().p("AAeAuIhRg9QgDgDgBgEQgBgEADgEIAKgNQADgEAFAAQAEAAADACIBQA9QAEADAAAEQABAFgDADIgJANQgDAEgGAAQgEAAgCgCgAglgmIgKANQAAAAAAABQAAABAAAAQAAABAAAAQAAAAABABIBRA8IABABIACgBIAKgNIAAgCIgBgBIhQg9IgCgBg");
	this.shape_340.setTransform(37.9,102.9,0.62,0.62);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#EA600A").s().p("AgZAoQgJgOAAgQQAAgQAKgNQAKgOAPgFQAQgEAQAFQADACgBADQgBAEgEgBQgNgFgOAEQgMAFgIALQgJALAAANQAAAOAIALQACADgDADIgCAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAg");
	this.shape_341.setTransform(36.7,111.6,0.62,0.62);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#EA600A").s().p("AgPAsIgxglIgBgCIABgDQABgCAEABIAxAlQANALASgDQASgCAKgPQALgOgDgQQgCgSgOgLIgWgQQgDgCACgEQADgDADADIAWAQQARANADAVQACATgMARQgPAVgaAAQgQAAgOgLg");
	this.shape_342.setTransform(35.3,111,0.62,0.62);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#EA600A").s().p("AgSBNQgRgMgDgVQgDgVANgRIA8hRQADgDADACQADACgCAEIg9BRQgLAOADARQACASAOALQAEADgDACIgDACg");
	this.shape_343.setTransform(32.5,106.6,0.62,0.62);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#EA600A").s().p("AgMARQAAgPAJgMQAFgIAEgCQADgCADADQACAEgDACQgEADgEAFQgGAKAAAMQAAAFgFAAQgEAAAAgFg");
	this.shape_344.setTransform(62.2,142.6,0.62,0.62);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#EA600A").s().p("AgRAsQgRgIgBgXQAAgTARgUIALgMIAGgEQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAIAGAFQAGAFAFAGQARAUAAATQAAAXgRAHQgEACgCgEQgCgEAEgCQAMgFAAgRQgBgXgagXQgaAXAAAXQAAARAMAFQAFACgDAEQAAABAAAAQgBABAAAAQgBABAAAAQgBAAgBAAg");
	this.shape_345.setTransform(62.8,142.9,0.62,0.62);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#EA600A").s().p("AgDATIgBgmQAAgEAEAAQAEAAAAAEIAAAmQAAAFgEAAQgDAAAAgFg");
	this.shape_346.setTransform(62.8,145.5,0.62,0.62);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#EA600A").s().p("AgEAMIAAgXQAAgEAEAAQAFAAgBAEIAAAXQAAAEgEAAQgEAAAAgEg");
	this.shape_347.setTransform(62.4,149.3,0.62,0.62);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#EA600A").s().p("AgbALQgNgLAAgRQAAgEAFAAQAFAAgBAEQABANAIAJQAKAJAMAAQAOgBAIgIQAJgIAAgOQAAgEAFAAQAFgBgBAFQAAAQgLALQgMANgRAAQgQAAgLgMg");
	this.shape_348.setTransform(64.6,151.1,0.62,0.62);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#EA600A").s().p("AgXAJQgKgJAAgNQAAgFAFAAQAEAAAAAFQAAAKAIAGQAHAHAJAAQAKAAAIgHQAHgGAAgLQAAgEAEAAQAFAAAAAEQAAAOgKAJQgLAKgNAAQgMAAgLgKg");
	this.shape_349.setTransform(60.6,149.3,0.62,0.62);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#EA600A").s().p("AhOARIgEgBIgBgEIAAgXQAAgEAFAAICdgBQAEAAABAFIAAAXIgBADQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAgAhKAIICVAAIAAgPIiVAAg");
	this.shape_350.setTransform(62.8,155.3,0.62,0.62);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#EA600A").s().p("AA9AaIAAguIh5AAIAAAWQAAAEgEAAQgFAAAAgEIAAgbQAAgEAFAAICBAAIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAIAAAzQAAADgFABQgEAAAAgEg");
	this.shape_351.setTransform(62.8,148.3,0.62,0.62);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#EA600A").s().p("Ag2ApQgEAAAAgEIAAhJQAAgEAEAAQAFAAAAAEIAABFIBjgBIAAgoQAAgFAFAAQAEAAAAAFIAAAtIgBADQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAg");
	this.shape_352.setTransform(62.8,152.2,0.62,0.62);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#EA600A").s().p("AADAPIgBgBIgWgPQgBAAAAgBQAAAAgBgBQAAgBABAAQAAgBABAAQAAgBABgBQAAAAABAAQAAAAABAAQABAAAAABIATANIANgTQACgDADACQADACgCADIgQAVIgCACg");
	this.shape_353.setTransform(37,135.5,0.62,0.62);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#EA600A").s().p("AgUANQgBAAAAAAQgBgBAAAAQAAgBABgBQAAAAAAgBIAQgVIACgBIADAAIAVAPQADACgCACQgDADgCgCIgTgMIgNASQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAg");
	this.shape_354.setTransform(38.1,140.7,0.62,0.62);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#EA600A").s().p("AAKA8QgBAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBIgShwQAAAAAAgBQAAgBAAAAQABgBAAAAQABAAAAgBQABAAABAAQABAAAAAAQABABAAAAQAAABAAABIATBwQAAABAAAAQAAABAAAAQgBABAAAAQgBABgBAAg");
	this.shape_355.setTransform(37.6,138.1,0.62,0.62);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#EA600A").s().p("AANASIgagCIgCgBIgBgDIADgaIABgCIACgBQAEAAgBAEIgCAWIAXADQAAAAABAAQABAAAAAAQABABAAABQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_356.setTransform(39.9,136.1,0.62,0.62);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#EA600A").s().p("AAIARIAAgCIACgXIgXgCIgCgBIgBgDQAAgEAEABIAaACIACACIABACIgDAaQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAIgDgBg");
	this.shape_357.setTransform(35.2,140.1,0.62,0.62);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#EA600A").s().p("AgtAnQgDgCADgDIBWhIQADgDACAEQABAAAAABQAAABAAAAQAAABAAAAQAAABgBAAIhXBJIgCAAg");
	this.shape_358.setTransform(37.6,138.1,0.62,0.62);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#EA600A").s().p("AgDATIgMgXQAAgBAAgBQAAAAAAgBQABAAAAgBQABAAAAgBIAYgLQABAAAAAAQABgBAAABQABAAAAAAQABABAAAAQABABAAABQAAABgBAAQAAABAAAAQgBABgBAAIgUAKIAJAUQAAABAAABQABABgBAAQAAABAAAAQgBABAAAAIgBABQgBAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_359.setTransform(40.1,139.2,0.62,0.62);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#EA600A").s().p("AgLAVQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQABgBAAAAQABAAAAgBIAVgKIgJgVQAAAAAAgBQgBAAABgBQAAgBAAAAQABgBAAAAQAAAAABAAQABAAABAAQAAAAABABQAAAAAAABIALAXQABABAAABQAAAAAAABQgBABAAAAQAAAAgBABIgYALg");
	this.shape_360.setTransform(35,137,0.62,0.62);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#EA600A").s().p("AA1AXIhrgnQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQABAAAAgBQABgBAAAAQABAAAAAAQABAAABAAIBqAmQABABAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQgBAAAAAAg");
	this.shape_361.setTransform(37.6,138.1,0.62,0.62);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#EA600A").s().p("AgDATIgMgXQAAgBAAgBQAAAAAAgBQABAAAAgBQABAAAAgBIAYgLQABAAAAAAQABgBAAABQABAAAAAAQABABAAAAQABABAAABQAAABgBAAQAAABAAAAQgBABgBAAIgUAKIAJAUQAAABAAABQABABgBAAQAAABAAAAQgBABAAAAIgBABQgBAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_362.setTransform(40.1,139.2,0.62,0.62);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#EA600A").s().p("AgLAVQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQABgBAAAAQABAAAAgBIAVgKIgJgVQAAAAAAgBQgBAAABgBQAAgBAAAAQABgBAAAAQAAAAABAAQABAAABAAQAAAAABABQAAAAAAABIALAXQABABAAABQAAAAAAABQgBABAAAAQAAAAgBABIgYALg");
	this.shape_363.setTransform(35,137,0.62,0.62);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#EA600A").s().p("AA1AXIhrgnQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQABAAAAgBQABgBAAAAQABAAAAAAQABAAABAAIBqAmQABABAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQgBAAAAAAg");
	this.shape_364.setTransform(37.6,138.1,0.62,0.62);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#EA600A").s().p("AgFAhIgKgEQgFgCgCgEQgCgFACgEIAOgnQADgHAHgBIAEABIALAEQAEACACAEQACAEgBAGIgPAmQgCAIgIAAgAgCgXIgOAnQgCAFAFACIAKADIACAAQADAAABgDIAOgmQACgEgFgCIgKgFIgCAAQgCAAgCADg");
	this.shape_365.setTransform(32.5,136.3,0.62,0.62);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#EA600A").s().p("AgBASQgHgCgEgIQgDgHADgGQACgIAIgDQAGgEAIADQABABAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAABgBABQAAABgBAAQAAAAgBAAQgBAAgBgBQgFgBgEACQgEACgCAFQgCAEADAFQACAEAEACQABABAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAABgBABQAAAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_366.setTransform(31.4,135.9,0.62,0.62);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#EA600A").s().p("AgcBPQgagJgPgWQgPgVAAgaQAAAAAAgBQABAAAAAAQAAAAABgBQABAAAAAAQAEgBAAADQABAXANAVQAOATAXAJQAdALAdgNQAegOALgeQALgegOgdQgNgdgegLQgXgIgXAGQgYAGgQASQAAABgBAAQAAABgBAAQAAAAgBAAQgBgBAAAAQgBgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAgBQASgUAZgHQAZgHAZAJQAhANAPAfQAOAggMAgQgMAhggAPQgRAIgSAAQgNAAgPgGg");
	this.shape_367.setTransform(37.6,138.1,0.62,0.62);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#EA600A").s().p("AALAUIgYgHIgCgCIAAgDIAGgYQACgDADABQAEABgBADIgGAVIAUAFQAEABgBAEQAAADgEAAg");
	this.shape_368.setTransform(52.8,93.1,0.62,0.62);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#EA600A").s().p("AAPAZIgggJIgCgCIAAgDIAIgfQABgEAEABQAEABgBAEIgIAcIAcAHQAEABgBAEQgBADgDAAg");
	this.shape_369.setTransform(50.3,94.5,0.62,0.62);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#EA600A").s().p("AAWAhIgugNIgCgBIAAgDIAMguQABgEAEACQADABgBADIgLAqIAqAMQAEABgBADQgBADgDAAg");
	this.shape_370.setTransform(52.3,93.3,0.62,0.62);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#EA600A").s().p("AAFAUQgEgBABgEIAGgUIgVgGQgDgBABgEQABgDADABIAYAGIADACQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAIgHAYQAAABAAAAQgBABAAAAQAAAAgBAAQgBABAAAAg");
	this.shape_371.setTransform(42.8,99.1,0.62,0.62);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#EA600A").s().p("AAHAYQgEgBABgDIAIgcIgcgIQgEgBABgEQABgDAEABIAfAIIADACIAAADIgJAgQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape_372.setTransform(45.4,97.7,0.62,0.62);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#EA600A").s().p("AAKAhQgEgBABgDIAMgqIgqgMQgEgBABgEQABgDAEABIAtAMIADACIAAADIgMAuQgBAAAAABQAAAAgBABQAAAAgBAAQgBAAAAAAg");
	this.shape_373.setTransform(43.4,98.9,0.62,0.62);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#EA600A").s().p("AhaA1QgCgDADgCICvhlQAEgBABACQACAEgDACIivBkIgCABQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape_374.setTransform(47.8,96.1,0.62,0.62);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#EA600A").s().p("AgFAUQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBIgGgYIAAgDIACgCIAYgGQAEgBABADQABAEgEABIgUAGIAGAUQABAEgEABg");
	this.shape_375.setTransform(52.8,99.1,0.62,0.62);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#EA600A").s().p("AgGAYQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAIgJggQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBIACgCIAfgIQAEgBABADQABAEgEABIgcAIIAIAcQABADgEABg");
	this.shape_376.setTransform(50.3,97.7,0.62,0.62);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#EA600A").s().p("AgKAhQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBgBAAIgMguQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIACgCIAugMQAEgBABADQABAEgEABIgqAMIALAqQABADgDABg");
	this.shape_377.setTransform(52.3,98.9,0.62,0.62);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#EA600A").s().p("AgMAUQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAgBAAAAQgBgEADgBIAVgFIgGgVQgBgDAEgBQADgBABADIAHAYQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAIgDACIgYAHg");
	this.shape_378.setTransform(42.8,93.1,0.62,0.62);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#EA600A").s().p("AgPAZQgBAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQgBgEAEgBIAcgHIgIgcQgBgEAEgBQADgBABAEIAJAfIAAADIgDACIgfAJg");
	this.shape_379.setTransform(45.4,94.5,0.62,0.62);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#EA600A").s().p("AgaAeQgBgDAEgBIAqgMIgMgqQgBgDAEgBQADgCACAEIAMAuIAAADQgBAAAAABQAAAAAAAAQgBAAAAAAQAAAAgBAAIgtANIgBAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAgBg");
	this.shape_380.setTransform(43.4,93.3,0.62,0.62);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#EA600A").s().p("ABWA2IivhkQgDgCACgEQACgDADACICvBlQADACgCADQAAAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAg");
	this.shape_381.setTransform(47.8,96.1,0.62,0.62);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#EA600A").s().p("AAPAMIgPgPIgPAPQgBAAAAABQgBAAgBAAQAAAAgBAAQAAgBgBAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAgBABAAIASgSQACgCADACIASASQABAAAAABQAAABAAAAQAAABAAABQAAAAgBABIgDABQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_382.setTransform(47.8,101.5,0.62,0.62);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#EA600A").s().p("AgZAOQgBAAAAgBQgBgBAAAAQAAgBABAAQAAgBABgBIAXgXQACgCADACIAXAXQABABAAABQABAAAAABQAAAAgBABQAAABgBAAIgCACIgDgCIgVgUIgVAUIgCACIgCgCg");
	this.shape_383.setTransform(47.8,98.5,0.62,0.62);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#EA600A").s().p("AgkAUQgCgDACgDIAighQACgCADACIAiAhQADADgDADIgDABIgCgBIgggfIgeAfIgDABIgDgBg");
	this.shape_384.setTransform(47.8,100.6,0.62,0.62);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#EA600A").s().p("AgCAMIgSgRQgDgDADgDQABAAAAgBQABAAAAAAQABAAABAAQAAABABAAIAPAPIAPgPQADgCADACQADADgDADIgTARQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAg");
	this.shape_385.setTransform(47.8,90.6,0.62,0.62);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#EA600A").s().p("AgCAPIgYgXQgCgDACgDQABAAAAgBQABAAABAAQAAAAABAAQABABAAAAIAVAVIAVgVQADgCACACQADADgDADIgYAXIgCABg");
	this.shape_386.setTransform(47.8,93.7,0.62,0.62);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#EA600A").s().p("AgCAUIgigiQAAAAgBgBQAAAAAAgBQAAgBAAAAQABgBAAgBQADgCADACIAeAfIAggfQACgCADACQABABAAABQAAAAAAABQAAABAAAAQAAABgBAAIgiAiIgDABg");
	this.shape_387.setTransform(47.8,91.6,0.62,0.62);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#EA600A").s().p("AgDBlIAAjJQAAgFADAAQAEAAAAAFIAADJQAAAFgEAAQgDAAAAgFg");
	this.shape_388.setTransform(47.8,96.1,0.62,0.62);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#EA600A").s().p("ABHAqIgWgCQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAgBAAIgNgQIgUgCIgDgBIgLgRIgUgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBIgNgPIgUgBIgDgCIgNgSQgCgCACgDQAEgBACACIAMAQIAVACQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAAAIANAQIATACIADABIAMAQIAVABQAAAAABAAQAAABABAAQAAAAAAAAQAAAAAAABIANAQIAUACQAEAAAAAEQAAABAAAAQAAABgBAAQAAABgBAAQgBAAgBAAg");
	this.shape_389.setTransform(89.2,111.5,0.62,0.62);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#EA600A").s().p("AAxApIgDgCIgMgQIgVgCQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAIgMgQIgUgCIgDgBIgMgQIgVgBQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIgOgRQgCgDADgDQADgCACADIAMAQIAVACIADABIAMARIATABIADACIANAPIAUACIADABIAMAQIAVACQADAAAAAEQgBADgDAAg");
	this.shape_390.setTransform(89.9,110.2,0.62,0.62);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#EA600A").s().p("ABHAqIgWgCIgDgBIgMgQIgUgCIgDgBIgMgRIgUgBQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIgMgPIgVgBIgCgCIgOgSQgDgDAEgCQADgCACADIANAQIAUACQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAIAMAQIAUACIACABIANAQIAUABQABAAAAABQABAAAAAAQAAAAAAAAQABABAAAAIAMAQIAVACQADAAAAAEQAAABAAAAQAAABgBABQAAAAgBAAQAAAAgBAAg");
	this.shape_391.setTransform(90.6,109,0.62,0.62);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#EA600A").s().p("AAKAbIglgVQgEgCgCgFQgCgGADgEIAFgKQAEgGAHAAIAGABIAmAVQAFADABAEQACAEgDAFIgFAKQgEAHgIAAIgGgBgAgUgRIgGAKQAAABAAAAQgBAAAAABQAAAAAAABQAAABABAAIACADIAmAUIACABQAEAAABgDIAFgKQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAIglgUIgDgBQgDAAgBADg");
	this.shape_392.setTransform(92.5,105.3,0.62,0.62);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#EA600A").s().p("AAMAQQgDgCACgDQACgFgBgFQgCgFgEgCQgFgDgEACQgGABgCAFQgCACgDgBQgEgBACgDQAEgIAJgCQAHgDAHAEQAIAEACAJQACAHgEAHQAAABgBAAQAAAAAAABQgBAAAAAAQAAAAgBAAg");
	this.shape_393.setTransform(93,104.2,0.62,0.62);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#EA600A").s().p("AgpBOQghgRgKgkQgLgiASghQANgYAZgNQAYgMAaADQABABABAAQABAAAAABQAAAAAAABQAAABAAAAQAAAEgEAAQgYgDgWALQgWALgNAXQgQAeAKAfQAJAhAeAQQAdAQAggKQAhgJAQgeQAMgWgDgaQgDgZgQgTQgDgCADgDQADgCACACQATAVADAbQADAcgNAYQgSAhgjAKQgOAEgMAAQgWAAgTgLg");
	this.shape_394.setTransform(89.8,110.2,0.62,0.62);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#EA600A").s().p("AgCADIgBgDIABgBQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAAAAAIADACIABABIgBADIgDABIgCgBg");
	this.shape_395.setTransform(90.8,113.8,0.62,0.62);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#EA600A").s().p("AgCACIgBgCIABgCIACgBIADABIABACIgBACQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape_396.setTransform(88.6,112.7,0.62,0.62);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCIACgBIACABIACACIgCADIgCABg");
	this.shape_397.setTransform(86.5,111.5,0.62,0.62);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#EA600A").s().p("AgCADIgBgDIABgBQABgBAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAIADACIABABIgBADIgDABg");
	this.shape_398.setTransform(94.3,110,0.62,0.62);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#EA600A").s().p("AgCADIgBgDIABgBIACgCIADACIABABIgBADIgDABIgCgBg");
	this.shape_399.setTransform(92.1,108.8,0.62,0.62);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#EA600A").s().p("AgBADIgCgDQAAAAAAAAQAAAAABgBQAAAAAAAAQAAgBABAAIABgBIADABIABACIgBADIgDABg");
	this.shape_400.setTransform(89.9,107.6,0.62,0.62);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#EA600A").s().p("AgCADIgBgDIABgCIACgBIADABIABACIgBADIgDABg");
	this.shape_401.setTransform(87.7,106.4,0.62,0.62);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#EA600A").s().p("AAHBFQgIgCgFgIQgFgJACgKQACgIAHgFQAFgFAIAAIAGABQAFABAFgCQAEgDABgFQABgFgCgEQgDgFgFAAIhZgXQgKgCgFgJQgFgJADgKQACgIAGgFQAHgEAIgBIAGABIBZAYQAZAGAMAVQANAWgGAXIAAAAQgGAYgWANQgOAJgRgBQgIAAgHgCgAgCAqQgCAHADAGQADAGAHACIANABQAPAAAMgHQATgLAGgWQAGgVgMgSQgLgTgVgFIhagYIgEgBQgNABgEANQgCAHAEAFQAEAHAHABIBZAYQAIACAEAGQAEAGgCAIQgDAIgGADQgHAFgHgCIgFgBQgNAAgCANg");
	this.shape_402.setTransform(85.3,141.4,0.62,0.62);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#EA600A").s().p("AALAXQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAgBQgBgIgGgMQgFgIgIgIQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBABAAQACgEADADQAIAIAGALQAGAKABALQAAABAAABQAAAAAAABQgBAAAAABQgBAAAAAAg");
	this.shape_403.setTransform(86.4,144.3,0.62,0.62);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#EA600A").s().p("AAOASQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAgBQgGgLgFgFQgFgGgJgFQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQACgDADABQAJAFAGAIQAIAGAFAMQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAg");
	this.shape_404.setTransform(88.1,143.9,0.62,0.62);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#EA600A").s().p("AARAJQgHgGgJgDQgIgCgLAAQgBAAgBAAQgBAAAAgBQAAAAgBgBQAAgBAAAAQAAgBAAgBQABgBAAAAQAAgBABAAQABAAABAAQALAAAKAEQAJADAJAGQABAAAAABQABABAAAAQAAABAAAAQAAABgBAAIgDACg");
	this.shape_405.setTransform(89,142.5,0.62,0.62);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#EA600A").s().p("AgaAHQAAgBgBAAQAAgBAAgBQAAAAABgBQAAAAABgBQALgGAOgCQANgDAMAEQABAAABAAQAAAAAAABQABAAAAABQAAABAAABQgBABAAAAQAAAAgBAAQAAAAgBAAQgBABAAgBQgLgBgNABQgMACgJAGIgCAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape_406.setTransform(88.4,140.8,0.62,0.62);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#EA600A").s().p("AgcAQQgCgCABgDQAJgLAMgHQAQgJATABQABAAAAAAQABAAAAAAQABABAAAAQAAABAAABQAAABAAABQAAAAgBABQAAAAgBAAQAAABgBAAQgSgBgNAIQgNAHgGAJIgDACg");
	this.shape_407.setTransform(86.7,139.8,0.62,0.62);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#EA600A").s().p("AgTASQgBAAAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQAFgJAGgFQALgMARgGQABAAAAAAQABAAAAAAQABABAAAAQABABAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQgQAEgJALQgFAFgFAIQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAg");
	this.shape_408.setTransform(84.2,139.1,0.62,0.62);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#EA600A").s().p("AgRAUQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIAJgPQALgNAPgFQABgBABAAQAAAAABABQAAAAABAAQAAABAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQgOAFgJAMQgEAFgEAIQAAAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAg");
	this.shape_409.setTransform(82.2,138.6,0.62,0.62);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#EA600A").s().p("AgEBqIAAjXIAJAAIAADXQAAAFgFAAQgEAAAAgFg");
	this.shape_410.setTransform(62.7,71.3,0.62,0.62);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#EA600A").s().p("AApAXQgBgRgMgLQgLgMgRAAQgQAAgMAMQgMALABARQgBAEgFAAQgEAAAAgEQAAgVAOgOQAPgPAUAAQAUAAAPAPQAPAOAAAVQAAAEgFAAQgFAAABgEg");
	this.shape_411.setTransform(62.7,79.3,0.62,0.62);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#EA600A").s().p("AAZAsQgIAOgRAAQgPAAgJgOQgKAOgQAAQgMAAgJgJQgJgJAAgMIAGhRQAAgEAEAAICNAAQAEAAAAAEIAGBQIAAACQAAAMgJAJQgJAIgMAAQgQAAgKgOgAAeAcQAAAIAGAHQAGAGAJAAQAIAAAGgGQAGgHAAgIIAAgBIgFhLIiDAAIgFBIIAAABIAAADQAAAIAGAHQAGAGAIAAQAJAAAGgGQAGgHAAgIQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBIAEgBQAEAAAAAFQAAAIAGAHQAHAGAHAAQAJAAAGgGQAGgHAAgIQAAgFAEAAQAFAAAAAFg");
	this.shape_412.setTransform(62.7,83.9,0.62,0.62);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#EA600A").s().p("Ai2BsQgtgtAAg/QAAg/AtgsQAsgtA/AAQApABAiATQAkgTAogBQA/ABAtAsQAsAtAAA+QAAA/gsAsQgtAtg/AAQgoAAgkgUQgiAVgpgBQg/AAgsgsgABrhBQATATAAAbQAAAKgDAJQgRA5g/AxQARAFARAAQAuAAAhggQAhghAAguQAAgtghghQghghguAAQgWAAgVAJQgKADgPAIQgcARgbAbQglAmgBAbIAAABQAAAKAHAIQAHAHAKAAQAPAAAHgMIArhVQAIgOAQgJQAPgJARABQAbAAATATgAiahOQggAhAAAtQAAAuAgAhQAhAgAuAAQAWAAAVgIIAZgMQAcgSAbgaQAmgnAAgaIAAgBQAAgKgHgIQgIgHgKAAQgPAAgHAOIgBACIgmBLIgDAFIAAAAQgJAPgPAKQgPAIgSAAQgbAAgTgTQgTgTAAgcQAAgKADgJIAAAAQARg3BAgzQgRgFgRAAQguAAghAhg");
	this.shape_413.setTransform(62.8,120.9,0.62,0.62);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#EA600A").s().p("AgDBvIAAgNIgNAHQgDACgDgDIAAgCQgCgEAEgCIARgJIAAgRIgYANQgEACgCgEIgBgBQgCgEAEgCIAdgOIAAgRIgHAEQgFACgBgEIgBgBQgBgFADgBIAMgGIAAgMIgMgGIgKAFIABAOQAAAFgEgBIgCAAQgEABAAgEIgBgJIgOAIIACAgQAAAFgEAAIgCAAQgDABgBgFIgBgbIgPAIIABAUQAAADgEABIgBAAQgFAAAAgDIAAgPIgLAGQgEACgCgDQgCgEAEgCIAKgHIgMgIQgDgCACgDIABgCQACgDAEACIAQAKIAOgHIgXgQQgDgCACgDIABgCQACgDAEACIAbASIAOgIIgHgFQgEgCADgEIABgBQACgEAEADIALAHIAKgFIAAgBIAAgLIAAAAIgKgFIgMAHQgDACgDgEIAAgBQgDgDAEgDIAHgFIgOgIIgbASQgEACgCgDIgBgCQgCgDADgDIAXgOIgOgIIgRAKQgDADgDgEIAAgBQgDgEAEgCIAMgIIgLgHQgDgBACgEQACgFAEAEIAKAFIABgOQAAgEAFAAIABAAQAEAAAAAFIgBATIAOAJIACgcQAAgEAEAAIACAAQAEABAAAEIgCAgIAOAIIABgJQAAgDAEAAIACAAQAEABAAADIgBAOIAKAGIAMgHIAAgLIgMgGQgEgDACgEIABgBQACgEADACIAIAEIAAgQIgdgPQgEgBACgFIABgBQACgEAEACIAYAMIAAgQIgSgJQgEgCACgDIABgCQACgEAEACIANAHIAAgMQAAgFADAAQAEAAAAAFIAAAMIANgHQAEgCACAEIABACQACADgEACIgSAJIAAAQIAZgMQADgCACAEIABABQACAEgEACIgdAPIAAAQIAIgEQAEgCACAEIABABQABAEgDADIgNAGIAAALIAMAHIAKgGIgBgOQAAgDAEgBIACAAQAEAAAAADIABAJIAOgIIgCggQgBgEAFgBIACAAQAEAAAAAEIACAcIAOgJIgBgTQAAgFAEAAIABAAQAFAAAAAEIABAOIAKgFQADgDADAEQACAEgDABIgLAHIAMAIQAEACgDAEIAAABQgDAEgDgDIgRgKIgOAIIAXAOQADADgCADIgBACQgCADgEgCIgbgSIgOAIIAHAFQAEADgDADIAAABQgDAEgDgCIgMgHIgKAFIAAAMIAKAFIAMgHQADgDADAEIABABQACAEgEACIgHAEIAOAJIAbgSQAEgCACADIABACQADADgEACIgXAQIAOAHIARgKQADgCADADIABACQACADgEACIgMAIIALAHQAEACgDAEQgBADgEgCIgLgGIgBAPQgBADgDAAIgCAAQgFgBABgDIABgUIgOgIIgCAbQAAAFgEgBIgCAAQgEAAAAgFIACggIgOgIIAAAJQgBAEgEgBIgCAAQgEABAAgFIABgOIgKgFIgLAGIAAAMIAMAGQADACgBAEIgBABQgCAEgEgCIgHgEIAAARIAdAOQADACgCAEIAAABQgCAEgEgCIgYgNIAAARIARAJQAEACgCAEIgBACQgBADgEgCIgNgHIAAANQAAAEgFAAQgDAAAAgEgAgLgGIAAANIALAHIAMgHIAAgNIgMgGg");
	this.shape_414.setTransform(123.6,118.4,0.62,0.62);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#EA600A").s().p("AgDBuIAAgMIgNAHQgEACgCgEIgBgCQgCgDAEgCIASgJIAAgRIgYANQgEACgCgEIgBgCQgCgDAEgCIAdgPIAAgQIgIAEQgDACgCgEIgBgBQgCgEAEgCIAMgHIAAgLIgMgHIgKAGIABAOQAAAEgEABIgCAAQgEAAAAgFIgBgIIgOAIIACAgQAAAFgEAAIgCAAQgEAAAAgEIgCgcIgOAJIABATQAAAFgEAAIgBAAQgFABAAgFIgBgOIgKAFQgEADgCgEQgCgEADgCIALgGIgMgIQgEgCADgEIAAgBQADgEADADIARAKIAOgIIgXgOQgDgDACgDIABgCQACgDAEACIAbARIAOgHIgHgFQgEgDADgDIAAgCQADgDADACIAMAIIAKgGIAAAAIAAgLIAAgBIgKgFIgMAHQgEACgCgDIgBgBQgCgEAEgCIAHgEIgOgJIgcASQgEACgBgDIgBgCQgDgDAEgCIAXgQIgOgIIgRALQgDACgDgDIgBgCQgCgDAEgCIAMgIIgLgHQgEgBADgFQABgDAEACIALAGIABgPQAAgDAEAAIACAAQAFAAgBAEIgBAUIAOAIIACgbQAAgFAEABIACAAQAEAAAAAEIgCAhIAOAIIAAgJQABgFAEACIACAAQAEAAAAAEIgBANIAKAGIAMgHIAAgLIgNgGQgDgCACgDIAAgCQACgEAEACIAIAEIAAgQIgdgPQgEgCACgEIABgBQABgEAEACIAZANIAAgRIgSgJQgEgCACgEIABgBQACgEAEACIANAHIAAgNQAAgEADAAQAEAAAAAEIAAANIANgHQAEgCACAEIABABQACAEgEACIgSAJIAAARIAYgNQAFgCABAEIABABQADAEgFACIgdAPIAAAQIAIgEQADgBADADIAAACQACADgEACIgMAGIAAALIAMAHIAKgGIgBgNQAAgEAEAAIACAAQADgCABAFIAAAJIAOgIIgBghQAAgEAEAAIACAAQAEgBAAAFIABAbIAPgIIgBgUQgBgEAFAAIABAAQAFAAAAADIAAAQIALgHQAEgCACADQADAFgFABIgKAHIAMAIQADACgCADIgBACQgCADgEgCIgQgLIgOAIIAXAQQADACgCADIgBACQgCADgEgCIgbgSIgOAJIAHAEQADACgCAEIgBABQgCADgEgCIgLgHIgKAFIAAAMIAAAAIAKAGIAMgIQADgCADADIAAACQADADgEADIgHAFIAOAHIAbgRQAEgCACADIABACQACADgDADIgXAOIAOAIIARgKQADgDADAEIAAABQADAEgEACIgMAIIALAGQADACgCAEQgDAEgDgDIgKgFIgBAOQAAAFgFgBIgBAAQgEAAAAgFIABgTIgOgJIgCAcQAAAEgEAAIgCAAQgFAAABgFIACggIgOgIIgBAIQAAAFgEAAIgCAAQgEgBAAgEIABgOIgKgGIgMAHIAAALIANAHQAEACgDAEIAAABQgCAEgEgCIgIgEIAAAQIAdAPQAEACgCADIgBACQgCAEgDgCIgZgNIAAARIASAJQAEACgCADIgBACQgCAEgEgCIgNgHIAAAMQAAAFgEAAQgDAAAAgFgAgLgGIAAANIALAGIAMgHIAAgMIgMgHg");
	this.shape_415.setTransform(237.9,128.5,0.62,0.62);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#EA600A").s().p("AgBBFIAAgIIgIAFQgBAAgBAAQAAAAAAAAQgBgBAAAAQgBAAAAgBIAAgBQgBAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIALgGIAAgKIgPAHQgBABgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAIAAgBIgBgDIACgBIASgJIAAgKIgFACQgBAAAAAAQgBABAAgBQAAAAgBAAQAAAAgBgBIAAgBQgBgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAIAIgFIAAgGIgIgFIgGAEIABAJQAAAAgBAAQAAABAAAAQAAABgBAAQAAAAgBABIgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBIAAgFIgJAFIABAUQAAABAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgBAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBIgBgRIgJAFIABANQAAAAgBAAQAAABAAAAQAAABgBAAQAAAAgBAAIgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAgBIgBgJIgGADQgBABgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAIAHgEIgIgFQgBAAAAgBQAAAAAAAAQgBgBABAAQAAgBAAgBIABAAQAAgBAAAAQABgBAAAAQAAAAABAAQABAAAAABIALAHIAJgGIgPgJQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABABABAAIARALIAIgFIgEgDQgBAAAAgBQgBAAAAgBQAAAAAAgBQABAAAAAAIABgBQAAgBAAAAQABgBAAAAQABAAAAAAQABAAAAABIAHAEIAHgDIAAgGIgBgBIgGgEIgHAFQAAAAgBABQgBAAAAAAQAAAAgBgBQAAAAAAAAIgBgBQgBgBAAgBQAAAAAAgBQABAAAAAAQAAgBABAAIAEgDIgIgFIgRALQgBAAgBAAQAAABgBgBQAAAAgBAAQAAAAAAgBIgBAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBIAOgJIgIgEIgLAGQAAAAgBABQgBAAAAAAQAAAAgBgBQAAAAAAgBIgBgBQgBAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAIAHgFIgGgEQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBABgBQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAIAHAFIABgKQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIABABQABAAAAAAQABAAAAABQAAAAAAAAQABABAAABIgBAMIAJAFIABgRQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBABAAIABAAQAAAAABABQAAAAABAAQAAABAAAAQAAABAAABIgBAUIAJAFIAAgGQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAIABAAQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABIAAAIIAGADIAIgEIAAgHIgIgDQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAABgBIAAgBQAAgBABAAQAAgBABAAQAAAAAAAAQABAAABABIAFACIAAgKIgSgJQgBAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIABgBQAAgBABgBQAAAAABAAQAAAAAAAAQABAAAAABIAQAHIAAgKIgLgFQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAABIAJAEIAAgIQAAgBAAAAQAAgBAAAAQABAAAAAAQAAgBAAAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABIAAAIIAIgEQAAgBABAAQAAAAABAAQAAABABAAQAAAAAAABIABAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABIgLAFIAAAKIAPgHQAAgBABAAQAAAAABAAQAAAAABABQAAAAABABIAAABIAAABIgBACIgSAJIAAAKIAFgCQAAAAAAAAQABgBAAABQABAAAAAAQABAAAAABIABABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBABIgHADIAAAHIAHAEIAGgDIAAgIQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAIABAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIAAAGIAJgFIgBgUQAAgBAAgBQAAAAAAgBQABAAAAAAQABgBABAAIABAAQAAAAABABQAAAAABAAQAAAAAAABQAAAAAAABIABARIAJgFIgBgMQAAgBAAgBQAAAAABAAQAAgBABAAQAAAAABAAIABgBQAAAAABABQABAAAAAAQAAAAAAABQABAAAAABIAAAKIAHgFQAAAAABAAQAAgBABAAQAAABABAAQAAABAAAAIABACIgCACIgGAEIAHAFQABAAAAAAQAAABAAAAQABABgBAAQAAABAAAAIAAABQgBABAAAAQgBABAAAAQgBAAAAAAQgBgBAAAAIgKgGIgJAEIAOAJQABABAAAAQAAABAAAAQAAABAAAAQAAABAAABIgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBAAAAgBIgRgLIgJAFIAEADQABAAAAABQABAAAAAAQAAABAAAAQAAABgBABIAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBgBAAAAIgHgFIgGAEIAAAHIAGADIAHgEQABAAAAgBQAAAAABAAQAAAAABABQAAAAABABIAAABQABAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgFADIAJAFIARgLQAAgBABAAQAAAAABAAQAAAAABABQAAAAAAABIABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgOAJIAJAGIAKgHQABAAAAAAQAAgBABABQAAAAABAAQAAAAABABIAAAAQABABAAABQAAAAAAABQAAAAgBAAQAAABgBAAIgHAFIAHAEQAAAAABABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBAAAAgBIgHgDIAAAJQAAABgBAAQAAABAAAAQAAAAgBAAQgBAAAAAAIgBAAQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAAAIABgNIgJgFIgBARQAAABAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAgBIABgUIgJgFIAAAFQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAIgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBQAAAAAAAAIAAgJIgGgEIgHAFIAAAGIAIAFQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABIgBABQAAABAAAAQgBABAAAAQgBAAAAAAQgBAAAAgBIgFgCIAAAKIASAJQAAAAABABQAAAAABAAQAAABAAAAQAAABgBABIAAABQgBAAAAABQAAAAgBAAQAAABgBgBQAAAAgBgBIgPgHIAAAKIALAGQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAIAAABQgBABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIgIgFIAAAIQAAABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBgAgGgDIAAAIIAGADIAIgEIgBgHIgHgFg");
	this.shape_416.setTransform(-83.1,104.8,0.62,0.62);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#EA600A").s().p("AgDBoIAAgMIgMAGQgCABgDgDIgBgBQgCgEAEgCIAQgIIAAgPIgWAMQgEABgCgDIAAgBQgCgEADgCIAbgOIAAgPIgHAEQgDACgCgEIgBgBQgCgEAEgCIALgFIAAgLIgLgGIgJAFIABANQAAAEgEAAIgCAAQgEAAAAgDIAAgJIgNAIIABAeQAAAEgDABIgCAAQgDgBgBgEIgBgZIgOAIIABASQAAAFgDAAIgCAAQgDAAgBgFIgBgNIgKAGQgEACgBgEQgCgEADgBIAKgGIgLgHQgDgDACgCIAAgCQADgDADACIAPAKIAOgHIgWgPQgDgCACgDIABgBQACgDADABIAaARIANgIIgHgEQgDgCACgEIABgBQADgDACADIALAGIAJgFIABgBIAAgJIgBAAIgJgGIgLAHQgDACgCgDIgBgBQgCgEADgCIAHgEIgNgIIgaARQgDACgCgEIgBgBQgCgDADgCIAWgOIgOgIIgPAKQgEACgCgDIgBgBQgCgEAEgCIALgHIgKgGQgDgBACgFQACgCADABIAKAGIABgOQAAgEAEAAIABABQAEAAAAAEIgBATIANAHIACgZQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAABAAIABAAQAEAAAAAEIgBAeIANAIIAAgIQAAgEAEAAIACAAQAEABAAADIgBANIAJAGIALgHIAAgLIgLgFQgEgCACgDIABgCQABgEAEADIAHADIAAgPIgbgOQgDgCACgDIAAgCQACgDAEACIAWALIAAgPIgQgJQgEgBACgEIABgBQACgEADACIAMAGIAAgLQAAgEADAAQAEAAAAAEIAAALIAMgGQAEgCACAEIAAABQACAEgDABIgRAJIAAAPIAXgLQADgCACADIABACQACADgEACIgbAOIAAAPIAHgDQAEgDACAEIAAACQACADgDACIgMAFIAAALIALAHIAJgGIgBgNQAAgDAEgBIACAAQAEAAAAAEIAAAIIANgIIgBgeQAAgEAEAAIABAAQAEgBAAAFIACAZIANgHIgBgTQAAgEAEAAIABgBQAEAAAAAEIABAOIAKgGQADgCACADQACAFgDABIgKAGIALAHQAEACgCAEIgBABQgCADgEgCIgPgKIgNAIIAVAOQADACgCADIgBABQgCAEgDgCIgagRIgNAIIAHAEQADACgCAEIgBABQgCADgDgCIgLgHIgJAGIAAAJIAAABIAJAFIALgGQADgDADADIAAABQADADgEADIgGAEIANAIIAZgRQAEgBABADIABABQACADgDACIgVAPIANAHIAPgKQAEgCACADIABACQABADgCACIgMAHIAKAGQAEABgCAEQgDADgDgBIgKgGIAAANQgBAFgEAAIgBAAIgDgBQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIABgSIgNgIIgBAZQgBAEgEABIgBAAQgEgBAAgEIACgeIgOgIIAAAJQAAADgEAAIgCAAQgDAAAAgEIAAgNIgJgFIgLAGIAAALIAMAFQADACgCAEIAAABQgCAEgEgCIgHgEIAAAPIAbAOQAEACgCAEIgBABQgCADgDgBIgXgMIAAAPIARAIQADACgBAEIgBABQgCADgEgBIgMgGIAAAMQAAADgEAAQgDAAAAgDgAgKgFIAAALIAKAHIALgHIAAgLIgLgGg");
	this.shape_417.setTransform(-20.6,80.6,0.62,0.62);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#EA600A").s().p("AgCBJIAAgIIgIAEQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIgBgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAIALgGIAAgLIgQAIQAAABgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBIAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIATgKIAAgLIgFADQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAIAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAIgEIAAgIIgIgEIgGAEIAAAJQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBABIgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAgBAAAAIgBgGIgJAGIABAVQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIgCAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAgBIgBgSIgKAGIABANQAAABAAAAQAAABAAAAQAAAAgBABQgBAAgBAAIgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBIAAgJIgHAEQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAHgEIgIgGIgBgBIAAgCIABgBQAAgBABAAQAAAAABAAQAAgBABAAQAAABABAAIALAHIAJgFIgPgKQgBAAAAgBQAAAAAAAAQAAgBAAgBQAAAAAAgBIABgBQAAgBABAAQAAgBAAAAQABAAAAAAQABABAAAAIASAMIAJgFIgEgDQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgBQAAgBABAAQAAgBAAAAQABAAAAAAQABAAAAABIAIAFIAGgEIABAAIAAgHIgBAAIgGgEIgIAFQAAAAgBABQAAAAgBgBQAAAAgBAAQAAAAgBgBIAAgBQgBAAAAgBQAAAAAAgBQAAAAABgBQAAAAABgBIAEgDIgJgFIgSAMQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAIAAgBIgBgCIACgCIAPgKIgKgFIgLAHQAAABgBAAQAAAAgBAAQAAAAAAgBQgBAAAAgBIgBgBQAAAAAAgBQAAAAAAAAQAAgBAAgBQAAAAABgBIAIgFIgHgEQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAIAHAEIAAgJQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAIABAAQABAAABAAQAAABAAAAQABAAAAABQAAAAAAABIgBANIAKAGIAAgSQAAgBABgBQAAAAAAgBQABAAAAAAQABAAAAAAIABAAQABAAABAAQAAABABAAQAAAAAAABQAAAAAAABIgBAVIAJAGIAAgGQAAAAABgBQAAgBAAAAQABAAAAgBQABAAAAAAIABAAQABAAABAAQAAABABAAQAAAAAAABQAAABAAAAIAAAJIAGAEIAIgFIAAgHIgIgEQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgBQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAIAFADIAAgLIgTgKQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAgBQABgBAAAAQAAgBABAAQAAAAABAAQABAAAAABIAQAIIAAgLIgMgGQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIABgBQAAgBABAAQAAgBAAAAQABAAAAAAQABABAAAAIAJAEIAAgIQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAIAAAIIAIgEQABAAABgBQAAAAABAAQAAAAAAABQABAAAAABIAAABQABABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgLAGIAAALIAPgIQABgBABAAQAAAAABAAQAAAAABABQAAAAAAABIABABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAIgTAKIAAALIAFgDQABAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAIABABQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgIAEIAAAHIAHAFIAHgEIgBgJQAAAAABgBQAAgBAAAAQAAAAABgBQAAAAABAAIABAAQABAAAAAAQABABAAAAQABAAAAABQAAABAAAAIAAAGIAJgGIgBgVQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABAAIABAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAABIABASIAJgGIgBgNQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAIABAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABIAAAJIAHgEQABAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgHAEIAIAFQABABAAAAQABABAAAAQAAABAAAAQAAABgBAAIAAABQAAABgBAAQAAAAgBAAQAAABgBAAQAAgBgBAAIgLgHIgKAFIAQAKQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABIAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgSgMIgJAFIAFADQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIAAABQAAABgBAAQAAAAgBAAQAAABgBAAQAAgBgBAAIgIgFIgGAEIAAAHIAAAAIAHAEIAHgFQABgBABAAQAAAAABAAQAAAAAAABQABAAAAABIABABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABIgFADIAJAFIASgMQABAAABgBQAAAAABAAQAAAAAAABQABAAAAABIABABQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgPAKIAJAFIALgHQABAAAAgBQABAAAAABQABAAAAAAQABAAAAABIAAABIABACIgCABIgIAGIAHAEQABAAAAABQABAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgHgEIgBAJQAAABAAAAQAAABAAAAQgBAAAAABQgBAAgBAAIgBAAQAAAAgBAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIAAgNIgJgGIgBASQAAABAAABQAAAAgBABQAAAAAAAAQgBAAgBAAIgBAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBIABgVIgJgGIAAAGQAAAAAAABQAAABgBAAQAAAAgBABQAAAAgBAAIgBAAQgBgBAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIABgJIgHgEIgHAEIAAAIIAIAEQABAAAAABQAAAAAAABQABAAgBABQAAAAAAABIgBABQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgFgDIAAALIATAKQABAAAAAAQAAABAAAAQABABgBAAQAAABAAAAIgBABQAAABAAABQAAAAgBAAQAAAAgBAAQAAAAgBgBIgQgIIAAALIALAGQABAAAAABQABAAAAABQAAAAAAABQAAAAgBABIAAABQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAgBAAIgIgEIAAAIQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAgAgHgDIAAAIIAHAEIAIgFIgBgIIgHgEg");
	this.shape_418.setTransform(-8.8,111,0.62,0.62);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#EA600A").s().p("AgCBJIAAgIIgIAEQgBAAgBABQAAAAgBAAQAAAAAAgBQgBAAAAgBIAAgBQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAIALgGIAAgLIgPAIQgBABgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBIgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIATgKIAAgLIgFADQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBAAAAIgBgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAIgEIAAgIIgHgEIgHAEIABAJQAAAAgBABQAAABAAAAQgBAAAAABQgBAAAAAAIgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAgBAAAAIAAgGIgJAGIABAVQAAAAgBABQAAABAAAAQgBAAAAABQgBAAAAAAIgBAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAgBIgBgSIgJAGIAAANQAAAAAAABQAAABgBAAQAAAAAAABQgBAAAAAAIgBAAQgBAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIgBgJIgHAEQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAHgEIgIgFQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBABAAIAAgBQAAgBABAAQAAgBAAAAQABAAAAAAQABAAABABIALAHIAJgFIgPgKIgBgCIAAgCIABgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAIASAMIAJgFIgFgDQgBgBAAAAQgBgBAAAAQAAgBAAAAQABgBAAAAIABgBQAAgBAAAAQABAAAAAAQABgBAAAAQABABABAAIAHAFIAHgEIAAAAIAAgHIAAAAIgHgEIgHAFQgBABgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBIgBgBQAAAAgBgBQAAAAAAgBQAAAAABgBQAAAAABgBIAFgDIgJgFIgSAMQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAIgBgBIAAgCIABgCIAPgKIgJgFIgLAHQgBABgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBIgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABAAAAgBIAIgFIgHgEQgBAAAAgBQAAAAAAgBQgBAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAHAEIABgJQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIACAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAAANIAJAGIABgSQAAgBAAgBQAAAAAAgBQABAAAAAAQABAAABAAIABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIgBAVIAKAGIAAgGQAAAAAAgBQAAgBAAAAQABAAAAgBQABAAABAAIABAAQAAAAABAAQABABAAAAQAAAAAAABQAAABAAAAIAAAJIAGAEIAIgFIAAgHIgIgEQgBAAAAgBQAAAAAAgBQgBAAABgBQAAAAAAgBIABgBQAAAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAIAFADIAAgLIgTgKQgBAAAAAAQAAgBAAAAQgBgBABAAQAAgBAAAAIABgBQAAgBAAgBQAAAAABAAQAAAAABAAQAAAAABABIAQAIIAAgLIgLgGQgBAAAAgBQgBAAAAAAQAAgBAAgBQAAAAABgBIAAgBQAAAAABgBQAAAAAAAAQABAAAAAAQABAAABAAIAIAEIAAgIQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAIAAAIIAIgEQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAIABABQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAIgLAGIAAALIAQgIQAAgBABAAQAAAAABAAQAAAAABABQAAAAABABIAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAIgTAKIAAALIAFgDQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAIAAABQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgIAEIAAAHIAIAFIAGgEIgBgJQAAAAAAgBQAAgBABAAQAAAAABgBQAAAAABAAIABAAQABAAAAAAQABABAAAAQABAAAAABQAAABAAAAIAAAGIAKgGIgBgVQgBgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAIABAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAABIABASIAJgGIAAgNQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIABAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABIABAJIAHgEQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgHAEIAIAFQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAIgBABQgBABAAAAQAAABgBAAQAAAAgBAAQAAAAgBgBIgLgHIgJAFIAPAKIABACQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAIgBABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgSgMIgJAFIAFADQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAIgBABQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBgBIgHgFIgHAEIAAAHIAHAEIAHgFQABAAAAgBQABAAAAABQABAAAAAAQABAAAAABIABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABIgFADIAKAFIARgMQABAAAAAAQABgBABABQAAAAAAAAQABABAAAAIABABQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBABIgPAKIAJAFIALgHQABAAAAgBQABAAAAABQABAAAAAAQABAAAAABIABABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABIgIAFIAHAEQAAAAABABQAAAAAAAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgHgEIAAAJQgBABAAAAQAAABgBAAQAAAAgBABQAAAAAAAAIgBAAQgBAAgBAAQAAgBgBAAQAAAAAAgBQAAgBAAAAIABgNIgKgGIgBASQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAIgBAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAgBAAAAIABgVIgJgGIgBAGQAAAAAAABQAAABgBAAQAAAAgBABQAAAAgBAAIgBAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAgBAAAAIAAgJIgGgEIgIAEIAAAIIAIAEQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIAAABQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgFgDIAAALIATAKQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIAAABQgBABAAAAQAAABgBAAQAAAAgBAAQgBAAAAgBIgQgIIAAALIAMAGQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIgBABQAAABgBAAQAAABAAAAQgBAAAAAAQgBgBAAAAIgJgEIAAAIQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAgAgHgDIAAAIIAHAEIAIgFIAAgIIgIgEg");
	this.shape_419.setTransform(234.1,80.7,0.62,0.62);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#EA600A").s().p("AgCBJIAAgIIgIAEQgBAAgBAAQAAABAAgBQgBAAAAAAQgBgBAAgBIAAAAQgBgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAIALgGIAAgKIgPAIQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBIgBgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAgBIATgJIAAgLIgFACQAAABgBAAQgBABAAgBQAAAAgBAAQAAgBAAAAIgBgBQAAgBAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAIAIgEIAAgIIgHgEIgHAEIABAJQAAAAgBABQAAAAAAABQAAAAgBAAQgBAAAAAAIgBAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBIAAgGIgJAGIABAVQAAABgBAAQAAABAAAAQAAABgBAAQgBAAAAAAIgBAAQgBAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAgBIgBgSIgJAGIAAAMQAAABAAABQAAAAAAABQgBAAAAAAQgBABAAAAIgBAAQgBAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIgBgKIgHAFQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBIAHgDIgIgGQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAABAAIAAgBQAAgBABAAQAAgBABAAQAAAAAAAAQABAAABABIALAHIAJgFIgPgKQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIABgBQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAIASAMIAJgFIgFgEQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAABABAAIAHAFIAHgEIAAAAIAAgHIAAAAIgHgEIgHAFQgBAAgBABQAAAAgBAAQAAgBgBAAQAAAAAAgBIgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAFgEIgJgFIgSALQgBABAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIgBgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAPgKIgJgFIgLAHQgBAAAAABQgBAAAAAAQgBAAAAgBQgBAAAAgBIgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAIgGIgHgEIgBgBIAAgDQABAAAAgBQAAAAABAAQAAAAABAAQABAAAAAAIAHAFIABgKQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAIACAAQAAAAABABQAAAAABAAQAAAAAAABQAAAAAAABIAAANIAJAGIABgSQAAgBAAgBQAAAAAAAAQABgBAAAAQABAAABAAIABAAQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABIgBAVIAKAGIAAgGQAAgBAAAAQAAgBAAAAQABAAAAAAQABAAABAAIABAAQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIAAAJIAGAEIAIgFIAAgHIgIgEIgBgBIAAgDIABgBQAAAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAIAFACIAAgKIgTgKQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgBQAAgBAAAAQABgBAAAAQAAAAABAAQABAAAAABIAQAHIAAgKIgLgGQgBAAgBgBQAAAAAAAAQAAgBAAgBQAAAAABgBIAAgBQAAAAABgBQAAAAABAAQAAAAAAAAQABAAABAAIAIAEIAAgHQAAgBAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAABIAAAHIAIgEQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAIABABQAAABAAAAQAAABAAABQAAAAgBAAQAAABgBAAIgLAGIAAAKIAQgHQAAgBABAAQAAAAABABQAAAAABAAQAAAAABABIAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAIgTAKIAAAKIAFgCQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAIAAABQABABAAABQAAAAAAABQgBAAAAAAQgBABAAAAIgIAEIAAAHIAIAFIAGgEIgBgJQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABAAIABAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAABIAAAGIAKgGIgBgVQgBgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAIABAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAABIABASIAJgGIAAgNQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIABAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABIABAKIAHgFQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAABAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgHAEIAIAGQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAIgBABQgBABAAAAQAAABgBAAQAAAAgBAAQAAAAgBgBIgLgHIgJAFIAPAKQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABIgBABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBgBIgSgLIgJAFIAFAEQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAIgBABQAAABgBAAQAAAAgBABQAAAAgBAAQAAgBgBAAIgHgFIgHAEIAAAHIAHAEIAHgFQABAAAAgBQABAAAAAAQABAAAAABQABAAAAAAIABABQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgFAEIAKAFIARgMQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAIABABQAAABAAAAQAAAAAAABQAAAAAAABQAAAAgBABIgPAKIAJAFIALgHQABAAAAgBQABAAAAAAQABABAAAAQABAAAAABIABABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAIgIAGIAHADQAAABABAAQAAABAAAAQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBAAQAAABgBgBQAAAAgBAAIgHgFIAAAKQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAIgBAAQgBAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAgBIABgMIgKgGIgBASQAAABAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgVIgJgGIgBAGQAAABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAgJIgGgEIgIAEIAAAIIAIAEQABAAAAABQAAAAAAAAQABABgBAAQAAABAAABIAAABQgBAAAAABQAAAAgBAAQAAABgBgBQAAAAgBgBIgFgCIAAALIATAJQABABAAAAQAAAAAAABQABAAgBABQAAABAAAAIAAABQgBABAAAAQAAAAgBABQAAAAgBAAQgBAAAAAAIgQgIIAAAKIAMAGQAAAAABABQAAAAAAABQABAAgBABQAAAAAAABIgBAAQAAABAAABQgBAAAAAAQgBABAAgBQgBAAAAAAIgJgEIAAAIQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAgAgHgEIAAAIIAHAFIAIgFIAAgIIgIgEg");
	this.shape_420.setTransform(127.9,84.1,0.62,0.62);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#EA600A").s().p("AgBBIIAAgIIgJAFQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAgBIAAAAQgBgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAIAMgGIAAgLIgQAJQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAIgBgBQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABgBIATgJIAAgLIgFADQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAgBIgBgBQAAAAAAgBQgBAAABgBQAAAAAAAAQABgBABAAIAIgEIAAgIIgIgEIgHADIABAJQAAABgBABQAAAAAAABQAAAAgBAAQAAABgBAAIgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIAAgFIgJAFIABAVQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBAAIgBAAQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIgBgSIgJAFIAAANQAAAAAAABQAAAAAAABQgBAAAAAAQgBABAAAAIgBAAQgBAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIgBgJIgHADQgBABAAAAQgBABAAgBQgBAAAAAAQAAgBAAgBIgBgBIACgCIAHgEIgIgFQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBABgBIAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAABABAAIALAHIAJgGIgPgJQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIABgBQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAIASAMIAJgGIgFgCQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIABAAQAAgBABAAQAAgBAAAAQABAAAAAAQABAAABABIAIAFIAGgEIAAAAIAAgHIAAAAIgHgEIgHAFQgBAAAAABQgBAAAAAAQgBAAAAgBQgBAAAAgBIgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBIAFgCIgJgGIgSAMQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBIgBgBQAAAAgBgBQAAgBAAAAQAAgBABAAQAAgBABAAIAPgJIgJgGIgLAHQgBAAAAABQgBAAAAAAQgBAAAAgBQgBAAAAAAIAAgBQgBgBAAAAQAAgBAAAAQAAgBAAgBQABAAAAgBIAIgEIgHgFQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABABIAHADIABgJQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAABABIABAAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIAAANIAJAFIABgSQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAABAAIABAAQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABIgBAWIAJAEIAAgFQAAgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAIABAAQAAAAABABQAAAAABAAQAAABAAAAQABABAAABIgBAJIAHADIAHgFIAAgGIgIgFQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIABgBQAAgBAAgBQABAAAAAAQABAAAAAAQABAAABABIAEACIAAgLIgTgKQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAABABIAPAIIAAgLIgLgGQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBABAAIAAgCQAAAAABgBQAAAAAAAAQABgBAAABQABAAABAAIAIAFIAAgIQAAgBAAgBQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAABIAAAIIAJgFQAAAAABAAQAAgBABABQAAAAAAAAQABABAAAAIABACQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgMAGIAAALIAQgIQAAgBABAAQABAAAAAAQABABAAAAQAAAAABABIAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBAAIgTAKIAAALIAFgCQABgBAAAAQABgBAAAAQABABAAAAQAAABABABIAAABQAAAAABABQAAAAAAABQgBAAAAAAQAAABgBAAIgIAFIAAAGIAIAFIAGgDIAAgJQAAgBAAgBQAAAAAAgBQAAAAABAAQAAgBABAAIABAAQABAAAAABQABAAAAAAQABAAAAABQAAAAAAABIABAFIAJgEIgBgWQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAIABAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAIABASIAKgFIgBgNQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAABAAIABAAQAAgBAAAAQABABAAAAQABAAAAABQAAAAABABIAAAJIAHgDQABgBAAAAQABgBAAAAQABABAAAAQAAABABABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAIgHAFIAIAEQAAABABAAQAAABAAAAQAAABAAAAQAAABAAABIgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAgBgBAAIgLgHIgJAGIAPAJQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgBABQAAABgBAAQAAAAAAAAQgBAAgBAAQAAAAgBAAIgRgMIgKAGIAFACQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgBABQAAABgBAAQAAABAAAAQgBAAgBAAQAAgBgBAAIgHgFIgHAEIAAAHIABAAIAGAEIAIgFQAAgBABAAQAAAAABAAQAAAAAAABQABAAAAABIABAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABIgEACIAJAGIASgMQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAABIABABQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgPAJIAJAGIALgHQABAAAAgBQABAAAAAAQABABAAAAQABAAAAABIABAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABIgIAEIAHAFQAAAAABABQAAAAAAAAQABABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBgBIgHgDIAAAJQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAIgBAAQgBAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIABgNIgKgFIgBASQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgBAAQgBAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgWIgJgEIgBAFQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAIgCAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBIAAgJIgGgDIgIAEIAAAIIAIAEIACACQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIAAABQgBABAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgFgDIAAALIATAJQABABAAAAQAAABABAAQAAABAAAAQgBABAAABIAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgQgJIAAALIAMAGQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABIgBAAQAAABgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAIgJgFIAAAIQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAgBgAgHgEIAAAIIAHAFIAIgFIAAgIIgIgEg");
	this.shape_421.setTransform(202,101,0.62,0.62);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ball, new cjs.Rectangle(-87.1,64.5,331.4,92.1), null);


(lib.Group_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ClipGroup_38();
	this.instance.parent = this;
	this.instance.setTransform(22.9,7.2,1,1,0,0,0,22.9,7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_11, new cjs.Rectangle(0,0,46,14.4), null);


(lib.ClipGroup_173 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhmiJIC9gKIAQEdIi9AKg");
	mask.setTransform(10.3,15.3);

	// Слой 3
	this.instance = new lib.ClipGroup_174();
	this.instance.parent = this;
	this.instance.setTransform(10.3,15.1,1,1,0,0,0,10.3,15.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_173, new cjs.Rectangle(0.1,0.5,20.6,29.6), null);


(lib.ClipGroup_172 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ABYCCIgEgDIgDgCIg7gtIgeggIgog0IgVgnIgVgzIgMgrIBQCBIA6BKIAIAIIA7BAg");
	mask.setTransform(93.4,13.8);

	// Слой 3
	this.instance = new lib.ClipGroup_173();
	this.instance.parent = this;
	this.instance.setTransform(10.3,160.5,1,1,0,0,0,10.3,15.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_172, null, null);


(lib.ClipGroup_171 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhmiJIC9gKIAQEdIi9AKg");
	mask.setTransform(93.4,14.8);

	// Слой 3
	this.instance = new lib.ClipGroup_172();
	this.instance.parent = this;
	this.instance.setTransform(51.8,88.9,1,1,0,0,0,51.8,87.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_171, new cjs.Rectangle(83.2,1.1,20.5,28.6), null);


(lib.ClipGroup_169 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgpgcIBQgFIADA+IhQAFg");
	mask.setTransform(4.2,3.4);

	// Слой 3
	this.instance = new lib.ClipGroup_170();
	this.instance.parent = this;
	this.instance.setTransform(4.2,3.4,1,1,0,0,0,4.2,3.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_169, new cjs.Rectangle(0,0,8.5,6.8), null);


(lib.ClipGroup_167 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Amaj1IKQilIClKQIqQClg");
	mask.setTransform(41.1,41.1);

	// Слой 3
	this.instance = new lib.ClipGroup_168();
	this.instance.parent = this;
	this.instance.setTransform(41.1,41.1,1,1,0,0,0,41.1,41.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_167, new cjs.Rectangle(0,0,82.2,82.2), null);


(lib.ClipGroup_166 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiEhGIDYg2IAxDDIjYA2g");
	mask.setTransform(44.4,40.9);

	// Слой 3
	this.instance = new lib.ClipGroup_167();
	this.instance.parent = this;
	this.instance.setTransform(41.1,41.1,1,1,0,0,0,41.1,41.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_166, new cjs.Rectangle(31.2,28.4,26.6,25), null);


(lib.ClipGroup_163 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgsgHIBQgUIAJAjIhQAUg");
	mask.setTransform(4.8,3.1);

	// Слой 3
	this.instance = new lib.ClipGroup_164();
	this.instance.parent = this;
	this.instance.setTransform(5,3.1,1,1,0,0,0,5,3.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_163, new cjs.Rectangle(0.4,0.3,9,5.6), null);


(lib.ClipGroup_161 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Amaj1IKQilIClKQIqQClg");
	mask.setTransform(41.1,41.1);

	// Слой 3
	this.instance = new lib.ClipGroup_162();
	this.instance.parent = this;
	this.instance.setTransform(41.1,41.1,1,1,0,0,0,41.1,41.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_161, new cjs.Rectangle(0,0,82.2,82.2), null);


(lib.ClipGroup_153 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhiihICzgKIASFOIizAJg");
	mask.setTransform(10.2,17.4);

	// Слой 3
	this.instance = new lib.ClipGroup_154();
	this.instance.parent = this;
	this.instance.setTransform(10.3,17.5,1,1,0,0,0,10.3,17.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_153, new cjs.Rectangle(0.3,0.2,19.8,34.5), null);


(lib.ClipGroup_152 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAgglIAxiGIgCAcIgHAwIgTBDIgmBMIgGAKIgoA8IgkApIgNANg");
	mask.setTransform(93.1,17.2);

	// Слой 3
	this.instance = new lib.ClipGroup_153();
	this.instance.parent = this;
	this.instance.setTransform(10,164.2,1,1,0,0,0,10.3,17.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_152, null, null);


(lib.ClipGroup_151 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhjiiIC0gJIASFNIizAKg");
	mask.setTransform(93.1,17.2);

	// Слой 3
	this.instance = new lib.ClipGroup_152();
	this.instance.parent = this;
	this.instance.setTransform(50.4,90.9,1,1,0,0,0,50.4,90.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_151, new cjs.Rectangle(83.1,0,18.1,34.5), null);


(lib.ClipGroup_149 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgklYIAjgCIAlKzIgjACg");
	mask.setTransform(3.8,34.8);

	// Слой 3
	this.instance = new lib.ClipGroup_150();
	this.instance.parent = this;
	this.instance.setTransform(4,34.8,1,1,0,0,0,4,34.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_149, new cjs.Rectangle(0.1,0.1,7.3,69.4), null);


(lib.ClipGroup_148 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AANEvIggpGIAAgBIAXhCIgNBFIAdJEIgBArg");
	mask.setTransform(86.2,34.7);

	// Слой 3
	this.instance = new lib.ClipGroup_149();
	this.instance.parent = this;
	this.instance.setTransform(3.9,181.6,1,1,0,0,0,4,34.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_148, null, null);


(lib.ClipGroup_147 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgklYIAkgCIAlKzIgkACg");
	mask.setTransform(86.8,34.7);

	// Слой 3
	this.instance = new lib.ClipGroup_148();
	this.instance.parent = this;
	this.instance.setTransform(44.1,108.2,1,1,0,0,0,44.1,108.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_147, new cjs.Rectangle(83.1,0,5.2,69.4), null);


(lib.ClipGroup_83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AliFfIAAq9ILFAAIAAK9g");
	mask.setTransform(35.5,35.4);

	// Слой 3
	this.instance = new lib.ClipGroup_84();
	this.instance.parent = this;
	this.instance.setTransform(35.8,35.5,1,1,0,0,0,35.8,35.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_83, new cjs.Rectangle(0,0.4,70.9,70.2), null);


(lib.ClipGroup_81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiJDLIAAmVIETAAIAAGVg");
	mask.setTransform(14.2,20.4);

	// Слой 3
	this.instance = new lib.ClipGroup_82();
	this.instance.parent = this;
	this.instance.setTransform(14.4,20.7,1,1,0,0,0,14.4,20.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_81, new cjs.Rectangle(0.4,0.1,27.6,40.7), null);


(lib.ClipGroup_80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ABrC3IgugjIgMgLIgmgkIgkgtIgKgNIgphDIgUgrIgjhoIgGgfIByDJIAoA5IADAEIB2CPg");
	mask.setTransform(14,20.6);

	// Слой 3
	this.instance = new lib.ClipGroup_81();
	this.instance.parent = this;
	this.instance.setTransform(14,20.7,1,1,0,0,0,14.4,20.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_80, new cjs.Rectangle(0.2,0.3,27.6,40.6), null);


(lib.ClipGroup_79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiJDLIAAmVIETAAIAAGVg");
	mask.setTransform(14,20.6);

	// Слой 3
	this.instance = new lib.ClipGroup_80();
	this.instance.parent = this;
	this.instance.setTransform(14,20.6,1,1,0,0,0,14,20.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_79, new cjs.Rectangle(0.2,0.3,27.6,40.6), null);


(lib.ClipGroup_77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhYBaIAAizICxAAIAACzg");
	mask.setTransform(8.9,9);

	// Слой 3
	this.instance = new lib.ClipGroup_78();
	this.instance.parent = this;
	this.instance.setTransform(8.9,9,1,1,0,0,0,8.9,9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_77, new cjs.Rectangle(0,0,17.9,17.9), null);


(lib.ClipGroup_69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhKAYIAAgvICVAAIAAAvg");
	mask.setTransform(7.6,2.7);

	// Слой 3
	this.instance = new lib.ClipGroup_70();
	this.instance.parent = this;
	this.instance.setTransform(7.7,2.9,1,1,0,0,0,7.7,2.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_69, new cjs.Rectangle(0.1,0.3,15,4.8), null);


(lib.ClipGroup_62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhcDYIAAmuIC5AAIAAGug");
	mask.setTransform(9.5,21.7);

	// Слой 3
	this.instance = new lib.ClipGroup_63();
	this.instance.parent = this;
	this.instance.setTransform(9.6,22.1,1,1,0,0,0,9.6,22.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_62, new cjs.Rectangle(0.2,0.2,18.7,43.1), null);


(lib.ClipGroup_61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhcDYIAAgIIB+j7IA7isIgBAkIgSBmIgYBLIgyBeIg8BYIgfAkg");
	mask.setTransform(9.3,21.6);

	// Слой 3
	this.instance = new lib.ClipGroup_62();
	this.instance.parent = this;
	this.instance.setTransform(9.5,22.2,1,1,0,0,0,9.6,22.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_61, new cjs.Rectangle(0,0.1,18.7,43.1), null);


(lib.ClipGroup_60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhlDhIAAnBIDLAAIAAHBg");
	mask.setTransform(10.2,22.5);

	// Слой 3
	this.instance = new lib.ClipGroup_61();
	this.instance.parent = this;
	this.instance.setTransform(10.3,23.1,1,1,0,0,0,9.5,22.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_60, new cjs.Rectangle(0.7,1,19.2,44.1), null);


(lib.ClipGroup_58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah1CkIAAlHIDrAAIAAFHg");
	mask.setTransform(12.1,16.8);

	// Слой 3
	this.instance = new lib.ClipGroup_59();
	this.instance.parent = this;
	this.instance.setTransform(12,17.1,1,1,0,0,0,12,17.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_58, new cjs.Rectangle(0.3,0.4,23.7,32.7), null);


(lib.ClipGroup_57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ABuCjIgHgDIg3gpIgxgwIgjgsIgkg6Igbg8IgSg2IAAgSIACAGIAEAFIBkCgIBKBfIA3A8g");
	mask.setTransform(11.8,16.4);

	// Слой 3
	this.instance = new lib.ClipGroup_58();
	this.instance.parent = this;
	this.instance.setTransform(11.7,16.9,1,1,0,0,0,12,17.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_57, new cjs.Rectangle(0,0,23.7,32.7), null);


(lib.ClipGroup_56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiCCzIAAllIEFAAIAAFlg");
	mask.setTransform(13.1,17.9);

	// Слой 3
	this.instance = new lib.ClipGroup_57();
	this.instance.parent = this;
	this.instance.setTransform(12.6,19,1,1,0,0,0,11.7,16.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_56, new cjs.Rectangle(0.6,2,24,33.9), null);


(lib.ClipGroup_54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgWG1IAAtpIAtAAIAANpg");
	mask.setTransform(2.3,43.7);

	// Слой 3
	this.instance = new lib.ClipGroup_55();
	this.instance.parent = this;
	this.instance.setTransform(2.6,44.1,1,1,0,0,0,2.6,44.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_54, new cjs.Rectangle(0,0.1,4.6,87.4), null);


(lib.ClipGroup_53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAVG1IgrnzIAAk5IAVg9IgRBXIAWD1IAQEuIADDvg");
	mask.setTransform(2.3,43.7);

	// Слой 3
	this.instance = new lib.ClipGroup_54();
	this.instance.parent = this;
	this.instance.setTransform(2.6,44.3,1,1,0,0,0,2.6,44.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_53, new cjs.Rectangle(0,0.2,4.5,87.2), null);


(lib.ClipGroup_52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeG+IAAt7IA9AAIAAN7g");
	mask.setTransform(3.1,44.6);

	// Слой 3
	this.instance = new lib.ClipGroup_53();
	this.instance.parent = this;
	this.instance.setTransform(3.4,45.2,1,1,0,0,0,2.6,44.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_52, new cjs.Rectangle(0.8,1,5.3,88.3), null);


(lib.ClipGroup_50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmiG1IAAtpINEAAIAANpg");
	mask.setTransform(41.9,43.7);

	// Слой 3
	this.instance = new lib.ClipGroup_51();
	this.instance.parent = this;
	this.instance.setTransform(41.9,43.7,1,1,0,0,0,41.9,43.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_50, new cjs.Rectangle(0,0,83.7,87.4), null);


(lib.ClipGroup_49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmiG1IAAtpINEAAIAANpg");
	mask.setTransform(41.9,43.7);

	// Слой 3
	this.instance = new lib.ClipGroup_50();
	this.instance.parent = this;
	this.instance.setTransform(41.9,43.7,1,1,0,0,0,41.9,43.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_49, new cjs.Rectangle(0,0,83.7,87.4), null);


(lib.ClipGroup_43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjqBjIAAjFIHVAAIAADFg");
	mask.setTransform(23.5,9.9);

	// Слой 3
	this.instance = new lib.ClipGroup_44();
	this.instance.parent = this;
	this.instance.setTransform(23.4,10.1,1,1,0,0,0,23.4,9.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_43, new cjs.Rectangle(0,0.3,47,19.6), null);


(lib.ClipGroup_41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhAAPIAAgdICBAAIAAAdg");
	mask.setTransform(6.8,1.9);

	// Слой 3
	this.instance = new lib.ClipGroup_42();
	this.instance.parent = this;
	this.instance.setTransform(7,1.9,1,1,0,0,0,7,1.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_41, new cjs.Rectangle(0.4,0.5,13,2.9), null);


(lib.ClipGroup_8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhAAEIAEgEIAEgDIAJgHIALgCIAFgBIA3AAIApADIgoAFIg4ACIgIABIgIACIgFACIgDADIgJAKg");
	mask.setTransform(6.5,1.5);

	// Слой 3
	this.instance = new lib.ClipGroup_41();
	this.instance.parent = this;
	this.instance.setTransform(6.7,1.7,1,1,0,0,0,7,1.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8_1, new cjs.Rectangle(0,0.1,13,2.9), null);


(lib.ClipGroup_5_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ABJAQIgBgCIgDgFIgGgJIgDgCIgIgGIgJgDIgKgBIg6ABIgFAAIgsgDIAxgHIAFAAIAxgCIALACIAFABIAGACIAFAEIAFADIAHAJIAFAJIACAIIAAAJg");
	mask.setTransform(7.7,2.6);

	// Слой 3
	this.instance = new lib.ClipGroup_69();
	this.instance.parent = this;
	this.instance.setTransform(7.6,2.6,1,1,0,0,0,7.7,2.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_2, new cjs.Rectangle(0.2,0.2,15,4.8), null);


(lib.ClipGroup_1_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AApAJIgBgCIgFgFIgDgCIgGgEIgHgBIgEgBIgEAAIgHABIgCABIgZAFIgUACIAEgDIAPgFIACAAIADgBIAVgHIABAAIAIgBIAJACIAIAEIAHAEIADAEIAEAGIACAIg");
	mask.setTransform(57.8,1.5);

	// Слой 3
	this.instance = new lib.ClipGroup_163();
	this.instance.parent = this;
	this.instance.setTransform(4.7,162.2,1,1,0,0,0,5,3.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_6, null, null);


(lib.ClipGroup_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AD5FeIhIgFIhGgOIhdgiIgqgYIgngdIgTgSIgSgSIgggmIgOgVIgHgKIgFgKIgdg4IgEgKIgJgYIgLgiQgGgRgEgSIgIgjIgGgjIgLiNIgCgOIgEgPQgFgPgJgNQgJgLgGgFIgHgHQgEgEgKgGQgUgMgcgGIAIgBIAFAAQAWABATAGIARAHIAKAGQAJAFAMALQAPANAJASIAJASIAEANIACAGIAAACIAAAAIAjCmIAgBfIAJAVIAFAMIAkBAQAEAIAIAKIApAyIAYAWIAqAhIA6AhIAoARIAVAIIBMAWICJAdQgcADgZABIgSAAIgMABIgXgBg");
	mask.setTransform(35.7,35.3);

	// Слой 3
	this.instance = new lib.ClipGroup_83();
	this.instance.parent = this;
	this.instance.setTransform(35.8,35.2,1,1,0,0,0,35.8,35.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_2, new cjs.Rectangle(0.2,0.2,71,70.1), null);


(lib.Group_9_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ClipGroup_147();
	this.instance.parent = this;
	this.instance.setTransform(45.1,108.2,1,1,0,0,0,45.1,108.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_9_2, new cjs.Rectangle(-0.1,0,90.6,216.4), null);


(lib.Group_9_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ClipGroup_43();
	this.instance.parent = this;
	this.instance.setTransform(23.5,9.9,1,1,0,0,0,23.5,9.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_9_0, new cjs.Rectangle(0,0,47,19.8), null);


(lib.Group_8_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ClipGroup_151();
	this.instance.parent = this;
	this.instance.setTransform(51.4,90.9,1,1,0,0,0,51.4,90.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_8_2, new cjs.Rectangle(-0.3,0,103.3,181.8), null);


(lib.Group_7_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ClipGroup_49();
	this.instance.parent = this;
	this.instance.setTransform(41.9,43.7,1,1,0,0,0,41.9,43.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_7_0, new cjs.Rectangle(0,0,83.7,87.4), null);


(lib.Group_6_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ClipGroup_52();
	this.instance.parent = this;
	this.instance.setTransform(3.1,44.7,1,1,0,0,0,3.1,44.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_6_0, new cjs.Rectangle(0,0,6.2,89.4), null);


(lib.Group_5_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ClipGroup_56();
	this.instance.parent = this;
	this.instance.setTransform(13.1,18,1,1,0,0,0,13.1,18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_5_0, new cjs.Rectangle(0,0,26.1,36.1), null);


(lib.Group_4_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ClipGroup_161();
	this.instance.parent = this;
	this.instance.setTransform(41.1,41.1,1,1,0,0,0,41.1,41.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_4_4, new cjs.Rectangle(0,0,82.2,82.2), null);


(lib.Group_4_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ClipGroup_60();
	this.instance.parent = this;
	this.instance.setTransform(10.2,22.6,1,1,0,0,0,10.2,22.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_4_0, new cjs.Rectangle(0,0,20.3,45.2), null);


(lib.Group_3_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ClipGroup_166();
	this.instance.parent = this;
	this.instance.setTransform(41.1,41.1,1,1,0,0,0,41.1,41.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3_4, new cjs.Rectangle(0,0,82.2,82.2), null);


(lib.Group_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ClipGroup_169();
	this.instance.parent = this;
	this.instance.setTransform(4.2,3.4,1,1,0,0,0,4.2,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2_2, new cjs.Rectangle(0,0,8.5,6.8), null);


(lib.Group_1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ClipGroup_171();
	this.instance.parent = this;
	this.instance.setTransform(51.8,88.3,1,1,0,0,0,51.8,88.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_4, new cjs.Rectangle(0,0,103.8,176.7), null);


(lib.Group_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ClipGroup_79();
	this.instance.parent = this;
	this.instance.setTransform(14,20.6,1,1,0,0,0,14,20.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(-0.4,0,28.8,41.3), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ClipGroup_77();
	this.instance.parent = this;
	this.instance.setTransform(8.9,9,1,1,0,0,0,8.9,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,17.9,17.9), null);


(lib.ClipGroup_142 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwYJxIAA1mMAgxAAAIAAXrg");
	mask.setTransform(104.9,75.8);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4E0CA").s().p("AgYAOQgCgUgOgcQgEgJABgKQABgLAJgFQAVgJAaArQAbApAEAwIhKARQAGgpgBgQg");
	this.shape.setTransform(60.2,68.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdAmQgQgNgCgTQgCgSANgRQANgQATgDQATgCAPANQAQANACATQACARgNARQgNARgTACIgFABQgQAAgNgLgAgDgcQgLABgHAKQgIAJABAKQABALALAIQAJAIAKgBQAMgBAHgJQAIgKgBgKQgBgLgKgIQgJgHgJAAIgDAAg");
	this.shape_1.setTransform(55.7,31);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag+AFIANgOIAdAVIgFg1IAQgTIAFA8IBCgFIgQATIgxAEIABAJIAWATIgMAQg");
	this.shape_2.setTransform(50.1,38);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgdAlQgQgNgCgSQgCgSANgRQAJgKALgFQAKgFAJADIgBARQgOAAgJALQgIAKACAKQABALAKAIQAKAIAKgCQAMgBAIgLQAJgLgFgOIAQgFQALAWgSAVQgNARgTADIgFAAQgPAAgOgLg");
	this.shape_3.setTransform(44.2,45.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRAqQgWgSAaggQAHgIAGgFQgPgNgMAQQgJAKAAAPIgSgCQgBgSAPgTQALgOAOgBQANgBANALIAsAiIgNAPIgIgGQADAOgMAOQgJAMgMACIgEABQgJAAgIgHgAABAAQgOASAJAIQAIAHALgNQAKgMgFgNIgHgFQgHAEgFAGg");
	this.shape_4.setTransform(38.5,53.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag9AFIAMgPIAcAXIgDg1IAQgUIAEA7IBDgEIgQATIgyADIAAAKIAYATIgMAPg");
	this.shape_5.setTransform(32.6,59.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EA600A").s().p("AlSjMIH8iZICpIyIn7CZg");
	this.shape_6.setTransform(44.3,43.3);

	this.instance = new lib.Group_1_4();
	this.instance.parent = this;
	this.instance.setTransform(80.7,206.2,1,1,0,0,0,51.8,88.3);
	this.instance.alpha = 0.219;

	this.instance_1 = new lib.Group_2_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(131.4,117.8,1,1,0,0,0,4.2,3.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#38473F").s().p("AgaBEIAJiWIgZg8IAkgDIAsgBIgSA/IAXCKIgZBcg");
	this.shape_7.setTransform(131.6,129.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ah3h7QA+gTBCgDQAygDA9AHIhVEgg");
	this.shape_8.setTransform(129.9,129.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EA5D0B").s().p("ABhBWQgqithEheIkUARIgQk2QBvgFBgAjQAvASAaASQCSBjBUDiQBUDcASFKIidAIQgMjegping");
	this.shape_9.setTransform(162.6,162.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhQAEICWgsIALAlIiVAsg");
	this.shape_10.setTransform(58.1,77.1);

	this.instance_2 = new lib.Group_3_4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(138.3,84.6,1,1,0,0,0,41.1,41.1);
	this.instance_2.alpha = 0.27;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgXA0QgjgSgpgtIApgBQAtgCARgFQAcgHBEgjQgNA6gXAgQgTAagVAGIgLABQgQAAgUgKg");
	this.shape_11.setTransform(125.7,95.3);

	this.instance_3 = new lib.ClipGroup_165();
	this.instance_3.parent = this;
	this.instance_3.setTransform(144.2,83.2,1,1,0,0,0,10.8,10.9);

	this.instance_4 = new lib.ClipGroup_1_6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(100.9,163.5,1,1,0,0,0,30.9,82.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F4E0CA").s().p("AgrgYIAugMQAOgEAMAHQALAHAEAOQADAMgHAMQgHALgOAEIguAMg");
	this.shape_12.setTransform(127.8,85);

	this.instance_5 = new lib.Group_4_4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(111.3,91,1,1,0,0,0,41.1,41.1);
	this.instance_5.alpha = 0.27;

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#13110C").s().p("AgEAXQgDgFgEgPQgEgPABgFQABgFAIgCQAGgCAEAEQAEAEADAQQAEAOgBAGQgBAFgIACIgEABQgEAAgCgDg");
	this.shape_13.setTransform(131.1,76.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#13110C").s().p("AgEAXQgDgEgEgQQgEgPABgFQABgFAIgCQAGgCAEAEQAEAEADAQQAEAOgBAGQgBAFgIACIgEABQgDAAgDgDg");
	this.shape_14.setTransform(113.5,81);

	this.instance_6 = new lib.ClipGroup_2_6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(104.2,93.2,1,1,0,0,0,11.2,11.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#13110C").s().p("AjVBNQgShJATg1QATg0AvgMQAUgFASAIQgEgeARgaQASgaAegIQAdgHAZANQAbANAMAbQAJgVATgOQATgPAZgDQAfgEAcAQQAcARALAeQAPAogUAlQgTAkgoAKIgDAAIABAAIijAoQhFARgSAJQg3AaACAyIAABIIgZAUQgLgigYhig");
	this.shape_15.setTransform(120.2,68.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#13110C").s().p("AAOAMQgNgegWgLQgPgHgmgDIBhgiQAcA7AYBXIgjABg");
	this.shape_16.setTransform(136.4,71.2);

	this.instance_7 = new lib.ClipGroup_3_6();
	this.instance_7.parent = this;
	this.instance_7.setTransform(123.5,85.2,1,1,0,0,0,24.6,24.7);

	this.instance_8 = new lib.Group_8_2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(97.9,207.1,1,1,0,0,0,51.4,90.9);
	this.instance_8.alpha = 0.219;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#622F25").s().p("AgHAAQgBgCADgDQACgCADAAQADgBADADQACACABADQAAAIgIABQgHAAgBgJg");
	this.shape_17.setTransform(136.2,189.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#622F25").s().p("AgIAAQAAgHAIgBQAIAAAAAIQABADgDADQgCACgEAAIAAABQgHAAgBgJg");
	this.shape_18.setTransform(135.2,170.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#622F25").s().p("AgFAGQgCgCAAgEQgBgCADgDQACgCADgBQAIAAABAIQAAADgDADQgCACgDAAIgBABQgCAAgDgDg");
	this.shape_19.setTransform(134.1,151.4);

	this.instance_9 = new lib.Group_9_2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(91.8,252.1,1,1,0,0,0,45.1,108.2);
	this.instance_9.alpha = 0.219;

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EA5D0B").s().p("AC0FRIhCgRQi5g6iPi0Qiai/gMjkICagKQAJCfBvCWQBvCWCXAzIAvAIICyCwQghABgeAAQhMAAg+gLg");
	this.shape_20.setTransform(89,111.2);

	this.instance_10 = new lib.ClipGroup_4_5();
	this.instance_10.parent = this;
	this.instance_10.setTransform(128.2,106.2,1,1,0,0,0,18.7,17.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EA5D0B").s().p("AkXitIgmjSIAWgRQAcgUAigRQBpg4BygGQBxgGBhAkQAwARAbATIAvOIIoyAdg");
	this.shape_21.setTransform(132.4,164.6);

	this.instance_11 = new lib.ClipGroup_5_5();
	this.instance_11.parent = this;
	this.instance_11.setTransform(50.9,70.9,1,1,0,0,0,6.4,7.2);

	this.instance_12 = new lib.ClipGroup_6_5();
	this.instance_12.parent = this;
	this.instance_12.setTransform(54.1,69.3,1,1,0,0,0,6.9,7.8);

	this.instance_13 = new lib.ClipGroup_7_5();
	this.instance_13.parent = this;
	this.instance_13.setTransform(57.3,68,1,1,0,0,0,7,8.1);

	this.instance_14 = new lib.ClipGroup_8_5();
	this.instance_14.parent = this;
	this.instance_14.setTransform(60.8,67.3,1,1,0,0,0,6.8,7.8);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.instance,this.instance_1,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.instance_2,this.shape_11,this.instance_3,this.instance_4,this.shape_12,this.instance_5,this.shape_13,this.shape_14,this.instance_6,this.shape_15,this.shape_16,this.instance_7,this.instance_8,this.shape_17,this.shape_18,this.shape_19,this.instance_9,this.shape_20,this.instance_10,this.shape_21,this.instance_11,this.instance_12,this.instance_13,this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.shape_21},{t:this.instance_10},{t:this.shape_20},{t:this.instance_9},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.instance_8},{t:this.instance_7},{t:this.shape_16},{t:this.shape_15},{t:this.instance_6},{t:this.shape_14},{t:this.shape_13},{t:this.instance_5},{t:this.shape_12},{t:this.instance_4},{t:this.instance_3},{t:this.shape_11},{t:this.instance_2},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.instance_1},{t:this.instance},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_142, new cjs.Rectangle(10.4,7.5,182.8,144.1), null);


(lib.ClipGroup_2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ahbi1IACAAQBKArAwBYQAsBPAKBaQAEAjABAXIgBAFg");
	mask.setTransform(10.5,21.4);

	// Слой 3
	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(8.9,9,1,1,0,0,0,8.9,9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#38473F").s().p("AAZCwIhFkAIg5g/IAqgTQAegNAZgIIAFBUIBbCgIAKB7g");
	this.shape.setTransform(14,22.2);

	var maskedShapeInstanceList = [this.instance,this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_3, new cjs.Rectangle(1.3,3.2,18.4,36.5), null);


(lib.man3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ClipGroup_142();
	this.instance.parent = this;
	this.instance.setTransform(63,115.1,0.666,0.666,0,0,0,105,180.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.man3, new cjs.Rectangle(-6.9,-4.9,139.7,239.9), null);


(lib.man2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Group_12();
	this.instance.parent = this;
	this.instance.setTransform(89.9,93.2,0.666,0.666,0,0,0,29.2,59.7);
	this.instance.alpha = 0.219;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC6825").s().p("AjhGAIAkgUQAsgZAlgfQB0hkAFh1QAFhugvh8QgshygsgbIAXkgIA2AhQBAAvA0BDQCnDWgSFKQgOC1h/CDQgsAsg8ArIhWA3g");
	this.shape.setTransform(88.9,93.2,0.666,0.666);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9F6944").s().p("AD+DiIoQgaQgSgBgLgNQgMgNABgRIARlWQABgRANgMQANgLARABIIQAaQARABAMANQAMAMgBASIgRFVQgBARgNAMQgMALgQAAIgCAAg");
	this.shape_1.setTransform(89.6,103.7,0.666,0.666);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4E1CA").s().p("AhPA8QgQgXArgrQAsgsA2gSIAnBWQgyAEgTAGQgXAHgdAZQgJAHgMABIgEABQgLAAgHgJg");
	this.shape_2.setTransform(7,114.4,0.666,0.666);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhEhXIAvgXIBaDGIgwAXg");
	this.shape_3.setTransform(14.3,114.9,0.666,0.666);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EC6825").s().p("AjvEhQB6hBA/haQAuhDAZhpQAYh8ATg/QAghvA/hRIAOgOQAWgVArgfIAFGrQgQChhEB0QhhChjRBmg");
	this.shape_4.setTransform(26,89.8,0.666,0.666);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E9D0B7").s().p("Ag/A1QgJgDgEgJQgEgJADgKQADgJAJgEIB8g/IAVAsIh9A+QgFADgFAAIgIgCg");
	this.shape_5.setTransform(10.3,122.1,0.666,0.666);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E9D0B7").s().p("AhGA5QgJgEgEgJQgEgJADgJQADgKAJgEICLhFIAUArIiLBGQgFACgFAAIgIgBg");
	this.shape_6.setTransform(8.5,119.5,0.666,0.666);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E9D0B7").s().p("AhJA7QgKgEgEgJQgEgJADgJQADgKAJgEICShJIAUArIiSBKQgFACgFAAIgHgBg");
	this.shape_7.setTransform(6.9,116.7,0.666,0.666);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E9D0B7").s().p("AhGA5QgJgDgEgKQgEgJADgJQADgJAIgFICLhFIAUArIiKBGQgFACgFAAQgEAAgEgBg");
	this.shape_8.setTransform(5.8,113.7,0.666,0.666);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhQhNIAsgfIB2C6IgsAfg");
	this.shape_9.setTransform(76.7,126,0.666,0.666);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhQhNIAsgfIB2C6IgsAfg");
	this.shape_10.setTransform(76.7,126,0.666,0.666);

	this.instance_1 = new lib.ClipGroup_64();
	this.instance_1.parent = this;
	this.instance_1.setTransform(73.3,134.3,0.666,0.666,0,0,0,8.8,7.8);

	this.instance_2 = new lib.ClipGroup_1_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(71.1,131.8,0.666,0.666,0,0,0,9.7,8.3);

	this.instance_3 = new lib.ClipGroup_2_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(69.1,129.2,0.666,0.666,0,0,0,10,8.7);

	this.instance_4 = new lib.ClipGroup_3_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(67.5,126.2,0.666,0.666,0,0,0,9.6,8.3);

	this.instance_5 = new lib.Group_4_0();
	this.instance_5.parent = this;
	this.instance_5.setTransform(69.2,66.6,0.666,0.666,0,0,0,10.2,22.6);
	this.instance_5.alpha = 0.219;

	this.instance_6 = new lib.Group_5_0();
	this.instance_6.parent = this;
	this.instance_6.setTransform(55.2,66.1,0.666,0.666,0,0,0,13.1,18);
	this.instance_6.alpha = 0.219;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5A2B25").s().p("AgGAIQgDgDAAgEQgBgEADgDQADgDAEgBQAEAAADADQADADABAEQAAAKgKABIgBAAQgDAAgDgDg");
	this.shape_11.setTransform(66.5,114.7,0.666,0.666);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5A2B25").s().p("AgGAIQgDgDAAgEQgBgEADgDQADgDAEgBQAEAAADADQADADAAAEQABAEgDADQgDAEgEAAIgBAAQgDAAgDgDg");
	this.shape_12.setTransform(65.6,98.5,0.666,0.666);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5A2B25").s().p("AgGAIQgDgDAAgEQgBgEADgDQADgDAEgBQAEAAADADQADADAAAEQABAEgDADQgDAEgEAAIgBAAQgDAAgDgDg");
	this.shape_13.setTransform(64.6,82.1,0.666,0.666);

	this.instance_7 = new lib.Group_6_0();
	this.instance_7.parent = this;
	this.instance_7.setTransform(64.1,105,0.666,0.666,0,0,0,3.1,44.8);
	this.instance_7.alpha = 0.219;

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5A2B25").s().p("AgfBXIAJi/IgfhMQAVgDAXgCQAfgBAXAAIgVBQIAeCxIgeB0g");
	this.shape_14.setTransform(62.4,63.3,0.666,0.666);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AiOicQBLgXBSgGQBBgEA/AIIhfFwg");
	this.shape_15.setTransform(60.8,63.3,0.666,0.666);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EC6825").s().p("Al4n+IAWgSQAcgWAkgSQBxg8CKgJQCJgIB4AsQA7AWAgAYIAFADQACAugCAgQgCAYAGA2IAAABQgBAEAGBCQAFA+gCgDIAzNdIqtAsg");
	this.shape_16.setTransform(64.4,93.4,0.666,0.666);

	this.instance_8 = new lib.ClipGroup_4_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(93.4,189.2,0.666,0.666,0,0,0,89.3,97.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#010202").s().p("AgNgGIAKgJIARAWIgKAJg");
	this.shape_17.setTransform(38.9,235.4,0.666,0.666);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#010202").s().p("AgOgFIAJgKIAUAVIgJAKg");
	this.shape_18.setTransform(40.2,234.5,0.666,0.666);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#010202").s().p("ABNAJIAAgLIhFALIi0AAIAAgRIFZAAIgFARg");
	this.shape_19.setTransform(38.9,239.5,0.666,0.666);

	this.instance_9 = new lib.ClipGroup_5_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(38.9,235.8,0.666,0.666,0,0,0,20.9,19.4);

	this.instance_10 = new lib.Group_7_0();
	this.instance_10.parent = this;
	this.instance_10.setTransform(59,29.1,0.666,0.666,0,0,0,41.9,43.7);
	this.instance_10.alpha = 0.27;

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EC6825").s().p("AhAAtQgFAAgEgEQgDgDgBgGQgBgGAEgEQADgEAGgBQAxgFAogaQAUgNALgMQAEgEAGgBQAFAAAEAEQAEAEAAAGQABAFgEAFQgOAPgXAOQgtAeg3AGg");
	this.shape_20.setTransform(51.8,35.9,0.666,0.666);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#010202").s().p("AgLAbQgDgGAAgVQgBgTADgGQADgHAJAAQAJAAADAGQADAGAAAUQABAUgDAGQgDAGgJABIgBAAQgIAAgDgGg");
	this.shape_21.setTransform(50.2,22.5,0.666,0.666);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#31443F").s().p("AgYANQgFgFAAgHQgBgGAFgGQAFgFAHAAIAagBQAHABAFAEQAFAFAAAHQAAAGgEAGQgFAFgHAAIgbABQgHAAgEgFg");
	this.shape_22.setTransform(44.3,21.8,0.666,0.666);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#31443F").s().p("AhwAPQgFgFAAgHQAAgGAEgGQAFgFAHAAIDKgFQAHABAFAEQAFAFAAAHQABAGgFAGQgFAFgHAAIjKAFQgHAAgFgFg");
	this.shape_23.setTransform(63.3,22.4,0.666,0.666);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#31443F").s().p("AAABqQgoAAgegeQgegegBgsQgBgrAeggQAcgfAqgBQApgCAgAfQAeAeABAtQABArgdAgQgeAggqAAgAgxgwQgSAUgBAeQABAdAUAUQAVAUAaAAIACAAQAcAAATgWQAVgVgCgdQgBgegUgUQgTgTgcAAIAAAAQgeABgTAVg");
	this.shape_24.setTransform(50.8,22.7,0.666,0.666);

	this.instance_11 = new lib.ClipGroup_6_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(74.3,28.6,0.666,0.666,0,0,0,14.3,15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#5A2B25").s().p("ABuBLIgSBKIgwAHIAAjAQAAgZgRgRQgQgSgXAAIi5gBQgOAAgEgOQgFgNALgKQA5gyBUgKQBdgMBPAxQBwBFACCVQABBLgWA+g");
	this.shape_25.setTransform(62.7,18.9,0.666,0.666);

	this.instance_12 = new lib.Group_9_0();
	this.instance_12.parent = this;
	this.instance_12.setTransform(59.7,14.4,0.666,0.666,0,0,0,23.5,9.9);

	this.instance_13 = new lib.ClipGroup_8_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(41.9,23.8,0.666,0.666,0,0,0,6.6,1.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F4E1CA").s().p("Ag3AgQgNgMAAgSQgBgRAMgNQAMgNARAAIBggDIACBWIhgACIgBABQgQAAgMgNg");
	this.shape_26.setTransform(41.6,25.9,0.666,0.666);

	this.instance_14 = new lib.ClipGroup_9_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(60.1,26.2,0.666,0.666,0,0,0,35.8,37.3);

	this.instance_15 = new lib.ClipGroup_10_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(60.8,46.6,0.666,0.666,0,0,0,21.6,21.2);

	this.instance_16 = new lib.ClipGroup_11_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(75.3,181.2,0.666,0.666,0,0,0,88.7,100.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#010202").s().p("AgOgDIAIgLIAVATIgJAKg");
	this.shape_27.setTransform(106.9,233.5,0.666,0.666);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#010202").s().p("AgPgDIAIgLIAXARIgHAMg");
	this.shape_28.setTransform(108,232.4,0.666,0.666);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#010202").s().p("AiqARIFVg0IgCATIhaAPIgCgNIhCAWIiyAcg");
	this.shape_29.setTransform(107.3,237.6,0.666,0.666);

	this.instance_17 = new lib.ClipGroup_12_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(107.3,234.1,0.666,0.666,0,0,0,21.3,18.2);

	this.instance_18 = new lib.Group_11();
	this.instance_18.parent = this;
	this.instance_18.setTransform(38.7,239.5,0.666,0.666,0,0,0,22.9,7.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.shape_26},{t:this.instance_13},{t:this.instance_12},{t:this.shape_25},{t:this.instance_11},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.instance_10},{t:this.instance_9},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.instance_8},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.instance_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.man2, new cjs.Rectangle(0,0,152.8,253.8), null);


(lib.man1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Image_14();
	this.instance.parent = this;
	this.instance.setTransform(64.2,37.3,0.666,0.666,0,0,0,46.3,46.3);
	this.instance.alpha = 0.301;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYBmIABjLIAwABIgBDKg");
	this.shape.setTransform(112.6,122.1,0.666,0.666);

	this.instance_1 = new lib.ClipGroup_85();
	this.instance_1.parent = this;
	this.instance_1.setTransform(83.3,98.9,0.666,0.666,0,0,0,91.5,91.4);

	this.instance_2 = new lib.ClipGroup_1_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(87.5,92.2,0.666,0.666,0,0,0,35.8,35.1);

	this.instance_3 = new lib.Group_0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(74.9,73.1,0.666,0.666,0,0,0,14.1,20.7);
	this.instance_3.alpha = 0.219;

	this.instance_4 = new lib.ClipGroup_2_3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(79.3,73,0.666,0.666,0,0,0,12.2,20.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ahbi1IACAAQBKArAwBYQAtBPAJBaQAEAjABAXIgCAFg");
	this.shape_1.setTransform(78.1,73.6,0.666,0.666);

	this.instance_5 = new lib.ClipGroup_3_3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(61.1,102.8,0.666,0.666,0,0,0,94.5,98.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#EA5D0B").ss(2.1,1,1).p("AhDgVQAiAZA1ALQAbAGAVAB");
	this.shape_2.setTransform(77.4,41.2,0.666,0.666);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#13110C").s().p("AgMAdQgDgHgBgVQgBgVADgHQADgGALgBQAJAAADAGQAEAHABAVQABAVgDAHQgDAGgLABIgBAAQgIAAgEgGg");
	this.shape_3.setTransform(73.4,26.8,0.666,0.666);

	this.instance_6 = new lib.ClipGroup_4_2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(51.3,36.8,0.666,0.666,0,0,0,15.6,15.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#13110C").s().p("AkpDSQgNg/gDhVQgEhjAphBQAnhABBgDQAcAAAVAPQADgpAegdQAegdAqgCQAngBAfAYQAeAZAJAmQATgZAcgNQAdgOAhACQArAEAgAeQAgAdAGArQAIA3gjArQgkAqg3ACIjkAIQgsACghAdQghAdgGAsIgLBJIh8AqQgGgPgHgfg");
	this.shape_4.setTransform(67.2,17,0.666,0.666);

	this.instance_7 = new lib.ClipGroup_5_2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(85.7,31.5,0.666,0.666,0,0,0,7.5,2.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F4E0CA").s().p("AhKgpIBngEQASgBAOANQANAMABATQABARgNAOQgNANgSABIhnAEg");
	this.shape_5.setTransform(85.8,33.3,0.666,0.666);

	this.instance_8 = new lib.ClipGroup_6_2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(66.2,33.6,0.666,0.666,0,0,0,37.9,37.7);

	this.instance_9 = new lib.ClipGroup_7_2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(65.9,54,0.666,0.666,0,0,0,21.4,19.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#13110C").ss(1.1).p("AAPgDIgdAG");
	this.shape_6.setTransform(12.6,242,0.666,0.666);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#13110C").ss(1.1).p("AAQgCIgfAF");
	this.shape_7.setTransform(12,240.4,0.666,0.666);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#13110C").s().p("AgNADIg1g1IgIALIhQg5IAIgSIEtDWIgMAPg");
	this.shape_8.setTransform(10.3,245.4,0.666,0.666);

	this.instance_10 = new lib.ClipGroup_8_2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(10.7,242.6,0.666,0.666,0,0,0,19.1,18.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#13110C").ss(1.1).p("AAKgKIgTAV");
	this.shape_9.setTransform(93.6,248,0.666,0.666);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#13110C").ss(1.1).p("AAMgKIgWAV");
	this.shape_10.setTransform(92.2,247,0.666,0.666);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#13110C").s().p("AgIAKIhKgNIAAANIhiAAIgEgTIFxAAIAAATg");
	this.shape_11.setTransform(93.7,252.2,0.666,0.666);

	this.instance_11 = new lib.ClipGroup_9_2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(93.7,248.4,0.666,0.666,0,0,0,22.4,19.9);

	this.instance_12 = new lib.Group_4_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(61.4,149,0.666,0.666,0,0,0,34.1,13.8);
	this.instance_12.alpha = 0.359;

	this.instance_13 = new lib.ClipGroup_10_2();
	this.instance_13.parent = this;
	this.instance_13.setTransform(38.3,191.5,0.666,0.666,0,0,0,95.4,104.7);

	this.instance_14 = new lib.ClipGroup_11_2();
	this.instance_14.parent = this;
	this.instance_14.setTransform(77.9,195.2,0.666,0.666,0,0,0,54.6,85.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag4hXIAwgQIBBDAIgwAPg");
	this.shape_12.setTransform(101.5,100,0.666,0.666);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F2EDD9").s().p("AhXgQICQgyQAJgDAIAEQAJAFADAIQADAJgEAJQgEAIgJADIiEBbg");
	this.shape_13.setTransform(104.9,96.3,0.666,0.666);

	this.instance_15 = new lib.ClipGroup_12_2();
	this.instance_15.parent = this;
	this.instance_15.setTransform(109.4,102,0.666,0.666,0,0,0,12.3,10.7);

	this.instance_16 = new lib.ClipGroup_13_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(108.9,98.9,0.666,0.666,0,0,0,13.2,11.4);

	this.instance_17 = new lib.ClipGroup_14_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(108.2,95.9,0.666,0.666,0,0,0,13.4,11.5);

	this.instance_18 = new lib.ClipGroup_15_0();
	this.instance_18.parent = this;
	this.instance_18.setTransform(106.9,93.2,0.666,0.666,0,0,0,13,11.4);

	this.instance_19 = new lib.ClipGroup_16_0();
	this.instance_19.parent = this;
	this.instance_19.setTransform(82.9,104.9,0.666,0.666,0,0,0,42.4,41.6);

	this.instance_20 = new lib.ClipGroup_17_0();
	this.instance_20.parent = this;
	this.instance_20.setTransform(119.1,122.7,0.666,0.666,0,0,0,18.9,19.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_13},{t:this.shape_12},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.instance_10},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.instance_9},{t:this.instance_8},{t:this.shape_5},{t:this.instance_7},{t:this.shape_4},{t:this.instance_6},{t:this.shape_3},{t:this.shape_2},{t:this.instance_5},{t:this.shape_1},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.man1, new cjs.Rectangle(-25.3,0,169.4,261.6), null);


(lib.a4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.man3();
	this.instance.parent = this;
	this.instance.setTransform(-16.7,37.2,1,1,0,0,0,62.9,115);

	this.instance_1 = new lib.ClipGroup_7_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(16.5,20.7,0.666,0.666,0,0,0,172,134.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.1,-82.8,229,239.9);


(lib.a3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.man3();
	this.instance.parent = this;
	this.instance.setTransform(-16.7,37.2,1,1,0,0,0,62.9,115);

	this.instance_1 = new lib.ClipGroup_7_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(16.5,20.7,0.666,0.666,0,0,0,172,134.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.1,-82.8,229,239.9);


(lib.a2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.man3();
	this.instance.parent = this;
	this.instance.setTransform(-16.7,37.2,1,1,0,0,0,62.9,115);

	this.instance_1 = new lib.ClipGroup_7_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(16.5,20.7,0.666,0.666,0,0,0,172,134.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.1,-82.8,229,239.9);


(lib.a1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.man3();
	this.instance.parent = this;
	this.instance.setTransform(-16.7,37.2,1,1,0,0,0,62.9,115);

	this.instance_1 = new lib.ClipGroup_7_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(16.5,20.7,0.666,0.666,0,0,0,172,134.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.1,-82.8,229,239.9);


// stage content:
(lib._970x90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_280 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(280).call(this.frame_280).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EhLsgG8MCXZAAAIAAN5MiXZAAAg");
	this.shape.setTransform(485,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(281));

	// fg
	this.instance = new lib.fg();
	this.instance.parent = this;
	this.instance.setTransform(787.5,44.5,1,1,0,0,0,120,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(281));

	// t5
	this.instance_1 = new lib.t5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(90,63.2,1,1,0,0,0,0.1,0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(267).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(8));

	// t4
	this.instance_2 = new lib.t4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(90,44.5,0.83,0.83);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(188).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(67).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(13));

	// t3
	this.instance_3 = new lib.t3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(90,46,0.83,0.83);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(109).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(67).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(92));

	// t2
	this.instance_4 = new lib.t2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(90,44.8,0.83,0.83);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(67).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(171));

	// cloud1
	this.instance_5 = new lib.cloud();
	this.instance_5.parent = this;
	this.instance_5.setTransform(93.1,43.4,1,1,0,0,0,50.6,21.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(30).to({_off:true},1).wait(250));

	// ball
	this.instance_6 = new lib.ball();
	this.instance_6.parent = this;
	this.instance_6.setTransform(459.7,17.8,1,1,0,0,0,82.5,85);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(267).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(8));

	// man3
	this.instance_7 = new lib.a3("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(244.5,66,0.8,0.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.instance_8 = new lib.a4("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(422.4,66,0.8,0.8);

	this.instance_9 = new lib.a1("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(422.4,66,0.8,0.8);
	this.instance_9._off = true;

	this.instance_10 = new lib.a2("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(730.4,66,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},188).to({state:[{t:this.instance_8}]},12).to({state:[{t:this.instance_9}]},54).to({state:[{t:this.instance_10}]},12).to({state:[]},2).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(188).to({_off:false},0).to({_off:true,x:422.4,alpha:1},12,cjs.Ease.get(1)).wait(81));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(254).to({_off:false},0).to({_off:true,x:730.4},12,cjs.Ease.get(0.54)).wait(15));

	// man1
	this.instance_11 = new lib.man1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(307.2,82.4,0.605,0.605,0,0,0,59.5,130.9);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(109).to({_off:false},0).to({x:379.8,alpha:1},8,cjs.Ease.get(1)).wait(63).to({alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(92));

	// man2
	this.instance_12 = new lib.man2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(537.9,83.2,0.605,0.605,0,0,0,76.5,127);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(109).to({_off:false},0).to({x:459.3,alpha:1},8,cjs.Ease.get(1)).wait(63).to({alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(92));

	// car2
	this.instance_13 = new lib.car();
	this.instance_13.parent = this;
	this.instance_13.setTransform(595.3,70.8,0.8,0.8,0,0,0,53,32.5);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(24).to({_off:false},0).to({rotation:-4.2,x:525.3},4,cjs.Ease.get(1)).to({rotation:0,x:523.3},2).wait(73).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(171));

	// car1
	this.instance_14 = new lib.ClipGroup_7_0();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-52.4,44.5,0.533,0.533,0,0,0,171.8,134.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({regX:172,x:525.6},23,cjs.Ease.get(0.5)).wait(1).to({regX:171.9,regY:135.2,rotation:-3,x:455.8,y:42.2},4,cjs.Ease.get(1)).to({regX:171.8,regY:134.9,rotation:0,x:457.6,y:44.5},2).wait(73).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(171));

	// city
	this.instance_15 = new lib.city();
	this.instance_15.parent = this;
	this.instance_15.setTransform(244.5,158.5,1,1,0,0,0,152.4,60.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(261).to({alpha:0},6,cjs.Ease.get(1)).wait(14));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape_1.setTransform(485,45,4.042,0.225);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(281));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(295.9,17.6,1159.6,143.8);
// library properties:
lib.properties = {
	width: 970,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/970x90_atlas_.png", id:"970x90_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;