(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"336x280_atlas_", frames: [[0,844,40,92],[0,938,32,12],[151,796,60,86],[0,694,149,148],[253,694,100,100],[213,796,17,145],[94,844,43,73],[0,347,345,345],[0,952,21,13],[0,0,345,345],[42,917,43,63],[0,967,29,8],[151,694,100,100],[232,796,11,184],[42,844,50,71]]}
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
	this.spriteSheet = ss["336x280_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_11 = function() {
	this.spriteSheet = ss["336x280_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Image_12 = function() {
	this.spriteSheet = ss["336x280_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Image_13 = function() {
	this.spriteSheet = ss["336x280_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Image_15 = function() {
	this.spriteSheet = ss["336x280_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Image_27 = function() {
	this.spriteSheet = ss["336x280_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Image_28 = function() {
	this.spriteSheet = ss["336x280_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Image_30 = function() {
	this.spriteSheet = ss["336x280_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Image_31 = function() {
	this.spriteSheet = ss["336x280_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Image_32 = function() {
	this.spriteSheet = ss["336x280_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Image_33 = function() {
	this.spriteSheet = ss["336x280_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Image_5 = function() {
	this.spriteSheet = ss["336x280_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Image_7 = function() {
	this.spriteSheet = ss["336x280_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Image_8 = function() {
	this.spriteSheet = ss["336x280_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Image_9 = function() {
	this.spriteSheet = ss["336x280_atlas_"];
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
	this.shape.graphics.f("#000000").s().p("AgRBkQgGgHgBgJQABgJAGgGQAIgHAJAAQAKAAAHAHQAHAHABAIQgBAJgHAHQgHAHgKAAQgKAAgHgHgAgRApIAAiTIAjAAIAACTg");
	this.shape.setTransform(137.6,6.6,0.636,0.636);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAyBPIAAhhIgwA+Igzg/IAABiIgjAAIAAidIAfAAIA2BHIA4hHIAcAAIAACdg");
	this.shape_1.setTransform(128.2,8.3,0.636,0.636);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag8A7QgYgXAAgkQAAgjAYgXQAYgXAkAAQAlAAAYAXQAYAXAAAjQAAAkgYAXQgYAXglAAQgkAAgYgXgAgigjQgOANAAAWQAAAWAOAOQANAOAVAAQAWAAANgNQAOgOAAgXQAAgVgOgOQgOgOgVAAQgUAAgOAOg");
	this.shape_2.setTransform(115.8,8.3,0.636,0.636);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA6BhIAAgkIhyAAIAAAkIghAAIAAhFIATAAQASgdAAhEIAAgbIB4AAIAAB8IAWAAIAABFgAgUgzQAAAzgOAcIBDAAIAAhcIg1AAg");
	this.shape_3.setTransform(104.1,9.5,0.636,0.636);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag8A7QgYgXABgkQgBgjAYgXQAYgXAkAAQAlAAAYAXQAXAXAAAjQAAAkgXAXQgYAXglAAQgkAAgYgXgAgigjQgOANAAAWQAAAWANAOQAOAOAVAAQAWAAANgNQAOgOAAgXQAAgVgPgOQgNgOgVAAQgVAAgNAOg");
	this.shape_4.setTransform(92.8,8.3,0.636,0.636);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag7BPIAAidIB3AAIAAAgIhUAAIAAB9g");
	this.shape_5.setTransform(83.3,8.3,0.636,0.636);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAyBPIAAhhIgwA+Ig0g/IAABiIgiAAIAAidIAfAAIA3BHIA3hHIAcAAIAACdg");
	this.shape_6.setTransform(67.5,8.3,0.636,0.636);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AA3BPIAAidIAjAAIAACdgAhZBPIAAidIAjAAIAAAtIAbAAQBCAAAAA4QAAAYgPAPQgSARgjAAgAg2AuIAYAAQAhAAAAgXQAAgXghAAIgYAAg");
	this.shape_7.setTransform(54.4,8.3,0.636,0.636);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhEBPIAAidIBDAAQAhAAAQAJQARALAAAWQAAATgSANQAWAIAAAcQAAAXgQAMQgRAMgeAAgAgiAvIAkAAQAgAAAAgQQAAgRgfAAIglAAgAgigQIAoAAQAXABAAgRQAAgIgIgEQgHgDgQAAIggAAg");
	this.shape_8.setTransform(42.7,8.3,0.636,0.636);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag8A7QgYgXAAgkQAAgjAYgXQAXgXAlAAQAlAAAYAXQAXAXABAjQgBAkgXAXQgYAXglAAQgkAAgYgXgAgigjQgOANAAAWQAAAWANAOQAOAOAVAAQAVAAAOgNQAOgOAAgXQAAgVgPgOQgNgOgVAAQgVAAgNAOg");
	this.shape_9.setTransform(31.3,8.3,0.636,0.636);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AA4BqIAAhaIhuAAIAABaIglAAIAAjTIAlAAIAABXIBuAAIAAhXIAkAAIAADTg");
	this.shape_10.setTransform(18.1,6.6,0.636,0.636);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAyBPIAAhiIgxA/IgyhAIAABjIgjAAIAAidIAfAAIA2BIIA4hIIAcAAIAACdg");
	this.shape_11.setTransform(-1.7,8.6,0.636,0.636);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAoBPIAAhmIhTBmIgeAAIAAidIAiAAIAABmIBThmIAeAAIAACdg");
	this.shape_12.setTransform(-13.9,8.6,0.636,0.636);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("ABMBhIAAgkIi3AAIAAidIAjAAIAAB9IAtAAIAAh9IAiAAIAAB9IAtAAIAAh9IAjAAIAAB9IAVAAIAABEg");
	this.shape_13.setTransform(-26.7,9.7,0.636,0.636);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgXA/QgVgSgFgfIgbAAIAABCIgiAAIAAidIAiAAIAAA9IAcAAQAFgeAVgRQAVgSAfAAQAkAAAXAXQAWAXAAAjQAAAkgWAXQgXAXgkAAQggAAgVgTgAgBgjQgNAOAAAVQAAAXANAOQALANAUAAQAUAAANgNQANgOAAgXQAAgWgNgNQgNgOgUAAQgTAAgMAOg");
	this.shape_14.setTransform(-42.2,8.5,0.636,0.636);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag1BEQgRgNABgXQgBgZAWgMQATgMAgAAQATAAAOAEQAAgSgIgIQgIgJgSAAQgWAAgXAQIgRgZQAMgLARgGQASgHATAAQAfAAARARQARARgBAfIAABgIgiAAIAAgRQgRATgfAAQgaAAgPgOgAgiAgQAAAJAIAFQAIAGANAAQAaAAAPgWIAAgPQgMgEgRAAQgpAAAAAVg");
	this.shape_15.setTransform(-55.8,8.5,0.636,0.636);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAlBPIAAh9IhJAAIAAB9IgjAAIAAidICPAAIAACdg");
	this.shape_16.setTransform(-66.3,8.6,0.636,0.636);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ag7BqIAOgdQADABAEAAQAOAAALgaIAFgOIhOiUIAoAAIA2BrIAqhrIAlAAIg+CZQgQAmgNAPQgOAPgTAAQgMAAgKgFg");
	this.shape_17.setTransform(-77.2,10.6,0.636,0.636);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgQBPIAAh9Ig6AAIAAggICUAAIAAAgIg4AAIAAB9g");
	this.shape_18.setTransform(-87.6,8.6,0.636,0.636);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ag0A8QgYgWABgmQAAgiAWgYQAYgXAjAAQAZAAASAKQARAKAIAQIgZARQgPgVgaAAQgVAAgNAOQgNAOAAAVQAAAWAOAOQAOAOAXAAQAZAAAOgWIAaAPQgKATgTAKQgSAKgWAAQglAAgXgWg");
	this.shape_19.setTransform(-97.6,8.5,0.636,0.636);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ag2BEQgPgNAAgXQgBgZAWgMQATgMAgAAQAUAAANAEQAAgSgIgIQgHgJgUAAQgWAAgWAQIgQgZQAKgLASgGQASgHASAAQAgAAARARQAQARAAAfIAABgIgiAAIAAgRQgRATgfAAQgaAAgQgOgAgiAgQAAAJAIAFQAIAGAOAAQAaAAAOgWIAAgPQgMgEgRAAQgpAAAAAVg");
	this.shape_20.setTransform(-108.4,8.5,0.636,0.636);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAmBPIAAhBIhLAAIAABBIgjAAIAAidIAjAAIAAA+IBLAAIAAg+IAjAAIAACdg");
	this.shape_21.setTransform(-119,8.6,0.636,0.636);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ag0A8QgYgWAAgmQAAgiAYgYQAXgXAkAAQAYAAASAKQASAKAHAQIgZARQgPgVgaAAQgUAAgOAOQgOAOAAAVQAAAWAPAOQAOAOAXAAQAZAAAPgWIAYAPQgJATgTAKQgSAKgWAAQglAAgXgWg");
	this.shape_22.setTransform(-134.2,8.5,0.636,0.636);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("Ag1A8QgYgXAAglQAAgjAVgWQAWgYAlAAQAhAAAVAUQAVAUAAAgQAAAJgCAMIh1AAQACASAOAKQAOAKATAAQAbAAAPgVIAVAVQgXAggpAAQglAAgXgWgAgagpQgLAJgDAPIBSAAQgEghgkAAQgQAAgMAJg");
	this.shape_23.setTransform(86.5,-32.3,0.636,0.636);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAnBPIAAhlIhSBlIgfAAIAAidIAjAAIAABmIBThmIAeAAIAACdg");
	this.shape_24.setTransform(75.2,-32.3,0.636,0.636);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("Ag0A8QgYgXAAglQAAgiAYgYQAXgXAjAAQAYAAATAKQARAKAJAQIgbARQgOgVgaAAQgVAAgNAOQgOAOAAAVQAAAWAPAOQAPAOAWAAQAZAAAOgXIAZAQQgJATgTAKQgSAKgWAAQglAAgXgWg");
	this.shape_25.setTransform(64.5,-32.3,0.636,0.636);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("Ag2BEQgPgNAAgXQgBgZAVgMQATgMAhAAQAUAAANAEQAAgkgiAAQgXAAgVARIgSgZQAMgLARgGQASgHASAAQAgAAARARQAQARAAAfIAABgIgiAAIAAgRQgSATgeAAQgaAAgQgOgAgiAgQAAAJAIAFQAIAGANAAQAaAAAPgWIAAgPQgNgEgQAAQgpAAAAAVg");
	this.shape_26.setTransform(53.6,-32.3,0.636,0.636);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AhMBQIgDghQAjADAAhUIAAgtIB8AAIAACdIgjAAIAAh8Ig3AAIAAAYQAAA7gSAYQgOATgbAAIgHAAg");
	this.shape_27.setTransform(42.6,-32.2,0.636,0.636);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("Ag7BPIAAidIB2AAIAAAgIhTAAIAAB9g");
	this.shape_28.setTransform(34.4,-32.3,0.636,0.636);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("Ag8A7QgYgXAAgkQAAgjAYgXQAXgXAlAAQAlAAAYAXQAYAXAAAjQAAAkgYAXQgYAXglAAQgkAAgYgXgAgigkQgOAOAAAWQAAAWAOAOQANAOAVAAQAWAAANgOQAOgNAAgXQAAgWgOgOQgOgNgVAAQgUAAgOANg");
	this.shape_29.setTransform(23.7,-32.3,0.636,0.636);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AhDBPQgegdAAgyQAAgtAegfQAeggAwAAQAcAAAXALQAVAKALAQIgYAXQgWgYgjAAQggAAgUAUQgUAUAAAgQAAAhAVAVQAUAUAgAAQAmAAAYgcIAWAXQgNATgXAKQgXALgcAAQgxAAgdgeg");
	this.shape_30.setTransform(11.7,-34,0.636,0.636);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAmBPIAAg0IgeAAIgnA0IgoAAIAtg6QgRgEgJgNQgKgMAAgRQAAgYAQgNQASgQAjAAIBBAAIAACdgAgagZQAAAJAIAHQAIAFANAAIAjAAIAAgpIgiAAQgegBAAAVg");
	this.shape_31.setTransform(-7.3,-31.2,0.636,0.636);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAnBPIAAhmIhSBmIgeAAIAAidIAiAAIAABmIBThmIAeAAIAACdg");
	this.shape_32.setTransform(-17.9,-31.2,0.636,0.636);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAmBPIAAhAIhLAAIAABAIgjAAIAAidIAjAAIAAA+IBLAAIAAg+IAjAAIAACdg");
	this.shape_33.setTransform(-29.3,-31.2,0.636,0.636);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("Ag2BEQgQgNABgXQgBgZAWgMQATgMAhAAQARAAAPAEQABgkgjAAQgWAAgWARIgRgZQALgLARgHQASgGATAAQAfAAARARQAQARAAAfIAABgIgiAAIAAgRQgSATgeAAQgaAAgQgOgAghAgQgBAJAJAFQAHAGANAAQAaAAAPgWIAAgPQgNgEgQAAQgoAAAAAVg");
	this.shape_34.setTransform(-40.4,-31.2,0.636,0.636);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAlBPIAAh8IhJAAIAAB8IgjAAIAAidICPAAIAACdg");
	this.shape_35.setTransform(-50.9,-31.2,0.636,0.636);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAzBPIAAhhIgyA/IgyhAIAABiIgjAAIAAidIAfAAIA2BIIA3hIIAdAAIAACdg");
	this.shape_36.setTransform(-62.9,-31.2,0.636,0.636);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("Ag8A7QgYgXAAgkQAAgjAYgXQAXgXAlAAQAlAAAYAXQAYAXAAAjQAAAkgYAXQgYAXglAAQgkAAgYgXgAgigkQgOAOAAAWQAAAWAOAOQANAOAVAAQAWAAANgOQAOgNAAgXQAAgWgOgOQgOgNgVAAQgUAAgOANg");
	this.shape_37.setTransform(-75.3,-31.2,0.636,0.636);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAtBqIhShcIgTASIAABKIglAAIAAjTIAlAAIAABdIBfhdIAwAAIhgBfIBnB0g");
	this.shape_38.setTransform(-86.2,-32.9,0.636,0.636);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("Ag0A8QgXgWAAgmQgBgiAXgYQAYgXAkAAQAYAAASAKQARAKAIAQIgaARQgPgVgZAAQgVAAgNAOQgOAOAAAVQABAWAOAOQAPAOAWAAQAZAAAPgWIAYAPQgJATgTAKQgSAKgWAAQglAAgXgWg");
	this.shape_39.setTransform(71.7,-11.8,0.636,0.636);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("Ag2BEQgQgNAAgXQAAgZAWgMQATgMAgAAQAUAAANAEQAAgSgIgIQgIgJgSAAQgXAAgWAQIgRgZQAMgLARgGQASgHATAAQAfAAARARQARARgBAfIAABgIgiAAIAAgRQgRATgfAAQgaAAgQgOgAgiAgQAAAJAIAFQAIAGANAAQAbAAAOgWIAAgPQgNgEgQAAQgpAAAAAVg");
	this.shape_40.setTransform(60.8,-11.9,0.636,0.636);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AhEBPIAAidIBDAAQAhAAAQAJQARAKAAAXQAAATgSANQAWAHAAAdQAAAXgQAMQgRAMgeAAgAgiAwIAkAAQAgAAAAgRQAAgRgfAAIglAAgAgigPIAoAAQAXAAAAgRQAAgJgIgDQgHgDgQAAIggAAg");
	this.shape_41.setTransform(51,-11.8,0.636,0.636);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgQBPIAAh9Ig6AAIAAggICUAAIAAAgIg5AAIAAB9g");
	this.shape_42.setTransform(36.2,-11.8,0.636,0.636);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("Ag1A8QgYgWAAgmQAAgjAVgWQAWgYAlAAQAhAAAVAUQAUAUAAAgIgBAVIh1AAQACATAPAKQAMAJAUAAQAaAAAQgVIAVAVQgYAggoAAQglAAgXgWgAgogRIBSAAQgFghgjAAQgiAAgIAhg");
	this.shape_43.setTransform(26.2,-11.8,0.636,0.636);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAmBPIAAg0IgeAAIgnA0IgoAAIAtg6QgRgDgJgNQgKgMAAgTQAAgXAQgNQASgQAjAAIBBAAIAACdgAgagZQAAAKAIAFQAIAGANAAIAjAAIAAgqIgiAAQgeAAAAAVg");
	this.shape_44.setTransform(15.1,-11.8,0.636,0.636);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AhMBQIgDghQAjAEAAhVIAAgtIB8AAIAACeIgjAAIAAh9Ig3AAIAAAYQAAA7gSAYQgOATgaAAIgIAAg");
	this.shape_45.setTransform(4.2,-11.8,0.636,0.636);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AhEBPIAAidIBDAAQAhAAAQAJQARAKAAAXQAAATgSANQAWAHAAAdQAAAXgQAMQgRAMgeAAgAghAwIAjAAQAgAAAAgRQAAgRgfAAIgkAAgAghgPIAnAAQAXAAAAgRQAAgJgIgDQgHgDgQAAIgfAAg");
	this.shape_46.setTransform(-5.9,-11.8,0.636,0.636);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("Ag2BEQgPgNAAgXQgBgZAVgMQATgMAhAAQAUAAANAEQAAgSgHgIQgJgJgSAAQgXAAgVAQIgSgZQAMgLARgGQASgHASAAQAfAAASARQAQARAAAfIAABgIgiAAIAAgRQgRATggAAQgaAAgPgOgAgiAgQAAAJAIAFQAIAGANAAQAaAAAPgWIAAgPQgNgEgQAAQgpAAAAAVg");
	this.shape_47.setTransform(-16.7,-11.9,0.636,0.636);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AhNBvIAAjaIAjAAIAAAPQAOgSAdAAQAjAAAVAWQAVAWgBAkQABAkgWAXQgWAYgjAAQgfAAgKgNIAABHgAgqg0IAAA2QALATAbAAQATAAAOgOQANgNgBgWQABgXgMgOQgNgNgTAAQgbAAgNAag");
	this.shape_48.setTransform(-27,-10.1,0.636,0.636,0,0,0,0.1,-0.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AA6BhIAAgkIhyAAIAAAkIghAAIAAhEIATAAQASgfAAhDIAAgbIB4AAIAAB9IAWAAIAABEgAgUgzQAAAzgOAdIBDAAIAAhdIg1AAg");
	this.shape_49.setTransform(-38.8,-10.8,0.636,0.636,0,0,0,-0.1,-0.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AhHAtIAagSQAOAZAgAAQAQAAAJgGQAKgGAAgKQAAgQgZAAIgiAAIAAgdIAgAAQAKAAAGgEQAGgFAAgIQAAgJgJgFQgIgFgNAAQgaAAgSAVIgYgQQAIgPARgKQATgLAaAAQAeAAARANQARAMAAAUQAAAUgQAMQAVALAAAYQAAAYgUAPQgUAOgfAAQgyAAgWgmg");
	this.shape_50.setTransform(-49.8,-11.8,0.636,0.636);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("Ag8A7QgYgXAAgkQAAgjAYgXQAXgXAlAAQAlAAAYAXQAYAXAAAjQAAAkgYAXQgYAXglAAQgkAAgYgXgAgigjQgOANAAAWQAAAWAOAOQANAOAVAAQAWAAANgNQAOgOAAgXQAAgVgOgOQgOgOgVAAQgUAAgOAOg");
	this.shape_51.setTransform(-60.4,-11.8,0.636,0.636);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAlBPIAAh9IhJAAIAAB9IgjAAIAAidICPAAIAACdg");
	this.shape_52.setTransform(-72,-11.8,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t5, new cjs.Rectangle(-139,-40.9,278.2,58.6), null);


(lib.t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQBPIAAh9Ig5AAIAAggICTAAIAAAgIg5AAIAAB9g");
	this.shape.setTransform(73.5,-11,0.666,0.666);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag1A8QgYgXAAglQAAgjAVgWQAWgYAmAAQAgAAAVAUQAVAUAAAgQAAAJgCAMIh0AAQACASANAKQANAKAUAAQAbAAAPgVIAVAVQgXAggpAAQglAAgXgWgAgagpQgLAJgDAPIBSAAQgEghgkAAQgQAAgMAJg");
	this.shape_1.setTransform(63,-11,0.666,0.666);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AA6BhIAAgkIhzAAIAAAkIggAAIAAhEIASAAQATgegBhEIAAgbIB5AAIAAB9IAVAAIAABEgAgUgzQAAAzgPAdIBEAAIAAhdIg1AAg");
	this.shape_2.setTransform(51.2,-9.8,0.666,0.666);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag1A8QgYgXAAglQAAgjAVgWQAWgYAlAAQAhAAAVAUQAVAUAAAgQAAAJgCAMIh0AAQACASANAKQANAKAUAAQAbAAAPgVIAVAVQgXAggpAAQglAAgXgWgAgagpQgLAJgDAPIBSAAQgEghgkAAQgQAAgMAJg");
	this.shape_3.setTransform(39.6,-11,0.666,0.666);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhEBPIAAidIBDAAQAhAAAQAKQARAKAAAWQAAATgSAOQAWAGAAAdQAAAXgRAMQgQAMgfAAgAgiAwIAkAAQAfAAAAgRQAAgRgeAAIglAAgAgigPIAoAAQAXAAAAgQQAAgKgIgCQgHgEgQAAIggAAg");
	this.shape_4.setTransform(28.7,-11,0.666,0.666);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag1A8QgYgXABglQAAgjAUgWQAWgYAmAAQAgAAAVAUQAUAUAAAgIgBAVIh0AAQABASAOAKQANAKAUAAQAaAAAQgVIAVAVQgYAggoAAQglAAgXgWgAgagpQgLAJgDAPIBSAAQgFghgjAAQgQAAgMAJg");
	this.shape_5.setTransform(9,-11.1,0.666,0.666);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAoBPIAAhmIhTBmIgeAAIAAidIAiAAIAABmIBThmIAeAAIAACdg");
	this.shape_6.setTransform(-2.8,-11.1,0.666,0.666);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhNBvIAAjaIAjAAIAAAPQAOgSAdAAQAjAAAVAWQAUAWABAkQAAAjgWAYQgXAYghAAQggAAgKgNIAABHgAgqg0IAAA1QAMAUAZAAQAVAAAMgOQANgNAAgWQAAgYgMgNQgLgNgTAAQgdAAgMAag");
	this.shape_7.setTransform(-14.6,-9.2,0.666,0.666);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag1A8QgYgXAAglQABgjAUgWQAWgYAlAAQAhAAAUAUQAWAUAAAgIgCAVIh1AAQADASANAKQANAKAUAAQAbAAAPgVIAVAVQgYAggoAAQglAAgXgWgAgagpQgLAJgDAPIBSAAQgFghgjAAQgRAAgLAJg");
	this.shape_8.setTransform(-26.6,-11.1,0.666,0.666);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhFBPIAAidIBEAAQAhAAAQAJQARALAAAWQAAAUgSAMQAWAIAAAcQABAXgSAMQgQAMgfAAgAgiAwIAkAAQAgAAgBgRQAAgRgeAAIglAAgAgigQIAoAAQAXAAAAgQQAAgIgJgDQgHgDgPAAIggAAg");
	this.shape_9.setTransform(-37.5,-11.1,0.666,0.666);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag8A7QgXgXgBgkQABgjAXgXQAXgXAlAAQAlAAAYAXQAXAXAAAjQAAAkgXAXQgYAXglAAQgkAAgYgXgAghgkQgPAOAAAWQAAAWAOAOQAOAOAUAAQAWAAAOgOQANgNAAgXQAAgWgOgOQgOgNgVAAQgUAAgNANg");
	this.shape_10.setTransform(-49.4,-11.1,0.666,0.666);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("ABMB9IAAgmIiXAAIAAAmIgjAAIAAhIIAWAAQAMgSAGgcQAGgiAAhCIAAgfICWAAIAACxIAZAAIAABIgAgdhMQAABcgUAlIBiAAIAAiPIhOAAg");
	this.shape_11.setTransform(-62.8,-11.7,0.666,0.666);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgXA/QgVgSgFgfIgbAAIAABCIgjAAIAAieIAjAAIAAA+IAbAAQAGgeAVgRQAVgSAfAAQAkAAAXAXQAWAXAAAjQAAAkgWAXQgXAXgkAAQgfAAgWgTgAgBgjQgNAOAAAVQAAAXANAOQAMANATAAQAVAAAMgNQANgOAAgXQAAgVgNgOQgMgOgVAAQgTAAgMAOg");
	this.shape_12.setTransform(54.3,10.1,0.666,0.666);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAoBPIAAhmIhTBmIgeAAIAAidIAiAAIAABmIBThmIAeAAIAACdg");
	this.shape_13.setTransform(39.8,10.1,0.666,0.666);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ag0A8QgYgWAAgmQAAgiAYgYQAXgXAkAAQAYAAASAKQASAKAIAQIgaARQgPgVgaAAQgUAAgOAOQgOAOAAAVQAAAWAPAOQAPAOAWAAQAZAAAPgWIAYAPQgJATgTAKQgSAKgVAAQgmAAgXgWg");
	this.shape_14.setTransform(28.5,10.1,0.666,0.666);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag2BEQgQgNABgXQgBgZAWgMQATgMAhAAQATAAANAEQABgSgIgIQgIgJgTAAQgWAAgWAQIgRgZQALgLARgGQASgHATAAQAfAAARARQAQARAAAfIAABgIgiAAIAAgRQgRATgfAAQgaAAgQgOgAghAgQAAAJAIAFQAHAGANAAQAaAAAPgWIAAgPQgNgEgQAAQgoAAAAAVg");
	this.shape_15.setTransform(17.2,10,0.666,0.666);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhMBQIgDghQAjAEABhVIAAgtIB7AAIAACeIgiAAIAAh9Ig3AAIAAAYQAAA7gTAYQgOATgaAAIgIAAg");
	this.shape_16.setTransform(5.7,10.1,0.666,0.666);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ag7BPIAAidIB3AAIAAAgIhUAAIAAB9g");
	this.shape_17.setTransform(-2.9,10.1,0.666,0.666);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ag8A7QgYgXAAgkQAAgjAYgXQAXgXAlAAQAlAAAYAXQAXAXAAAjQAAAkgXAXQgYAXglAAQgkAAgYgXgAgigjQgOANAAAWQAAAWAOAOQAOAOAUAAQAWAAAOgNQANgOAAgXQAAgVgOgOQgOgOgVAAQgVAAgNAOg");
	this.shape_18.setTransform(-14.2,10.1,0.666,0.666);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhEBPQgdgdAAgyQAAgtAegfQAeggAwAAQAcAAAXALQAWAKAKAQIgXAXQgYgYgiAAQggAAgUAUQgUAUAAAgQAAAhAVAVQAUAUAhAAQAlAAAYgcIAWAXQgNATgXAKQgXALgcAAQgxAAgegeg");
	this.shape_19.setTransform(-26.7,8.3,0.666,0.666);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAgBPIg8hBIgLALIAAA2IgkAAIAAidIAkAAIAABAIBChAIAuAAIhMBHIBPBWg");
	this.shape_20.setTransform(-48.4,10.1,0.666,0.666);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4, new cjs.Rectangle(-70.1,-20,148.6,35.6), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgRBkQgGgHAAgJQAAgJAGgGQAIgIAJABQAKgBAIAIQAGAGAAAJQAAAJgGAHQgHAHgLAAQgKAAgHgHgAgQApIAAiTIAiAAIAACTg");
	this.shape.setTransform(115.6,6.7,0.666,0.666);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag2BEQgQgNAAgXQABgZAVgMQATgMAgAAQASAAAPAEQAAgSgIgIQgHgKgUAAQgWAAgWARIgRgZQALgLATgHQARgGATAAQAfAAARARQARARAAAfIAABgIgjAAIAAgRQgSATgeAAQgaAAgQgOgAgiAgQAAAJAIAFQAIAGANAAQAaAAAPgWIAAgPQgNgEgQAAQgpAAAAAVg");
	this.shape_1.setTransform(106.8,8.5,0.666,0.666);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhMBQIgDghQAjADAAhUIAAgtIB8AAIAACdIgjAAIAAh8Ig3AAIAAAYQAAA7gSAYQgPATgbAAIgGAAg");
	this.shape_2.setTransform(95.3,8.6,0.666,0.666);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag1A8QgYgXAAglQAAgjAVgWQAWgYAmAAQAgAAAVAUQAVAUAAAgQAAAJgCAMIh0AAQACASANAKQANAKAUAAQAbAAAPgVIAVAVQgYAggoAAQglAAgXgWgAgagpQgLAJgDAPIBSAAQgCgQgLgJQgKgIgRAAQgQAAgMAJg");
	this.shape_3.setTransform(84.7,8.5,0.666,0.666);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AA5BhIAAgkIhxAAIAAAkIghAAIAAhEIASAAQASgeAAhEIAAgbIB4AAIAAB9IAWAAIAABEgAgTgzQgBAzgPAdIBEAAIAAhdIg0AAg");
	this.shape_4.setTransform(72.9,9.7,0.666,0.666);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag8A7QgYgXAAgkQAAgjAYgXQAXgXAlAAQAlAAAYAXQAXAXAAAjQAAAkgXAXQgYAXglAAQgkAAgYgXgAgigkQgNAOAAAWQgBAWAOAOQAOAOAUAAQAWAAANgOQAOgNAAgXQAAgWgOgOQgOgNgVAAQgUAAgOANg");
	this.shape_5.setTransform(55.8,8.5,0.666,0.666);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag7BPIAAidIB2AAIAAAhIhTAAIAAB8g");
	this.shape_6.setTransform(45.9,8.5,0.666,0.666);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag1A8QgXgXgBglQABgjAUgWQAWgYAlAAQAhAAAUAUQAWAUAAAgIgCAVIh1AAQADASANAKQANAKAUAAQAbAAAPgVIAVAVQgYAggoAAQglAAgXgWgAgagpQgLAJgDAPIBSAAQgFghgjAAQgRAAgLAJg");
	this.shape_7.setTransform(35.1,8.5,0.666,0.666);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag8A7QgYgXAAgkQAAgjAYgXQAXgXAlAAQAlAAAYAXQAXAXAAAjQAAAkgXAXQgYAXglAAQgkAAgYgXgAgigkQgOAOAAAWQAAAWAOAOQAOAOAUAAQAVAAAOgOQAOgNAAgXQAAgVgOgPQgOgNgVAAQgVAAgNANg");
	this.shape_8.setTransform(23.1,8.5,0.666,0.666);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhFBPIAAidIBEAAQAhAAAQAJQARALAAAWQAAAUgSAMQAWAIABAcQAAAXgRAMQgRAMgeAAgAgiAwIAkAAQAgAAAAgRQAAgJgIgEQgHgEgQAAIglAAgAgigQIAoAAQAXAAAAgQQAAgIgIgDQgHgDgPAAIghAAg");
	this.shape_9.setTransform(11.7,8.5,0.666,0.666);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag0A8QgYgXABglQgBgiAXgYQAYgXAkAAQAYAAASAKQASAKAIAQIgaARQgQgVgZAAQgVAAgNAOQgNAOAAAVQAAAWAOAOQAOAOAXAAQAaAAAOgXIAZAQQgLATgSAKQgSAKgWAAQgkAAgYgWg");
	this.shape_10.setTransform(0.8,8.5,0.666,0.666);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAyBPIAAhhIgwA+Igzg/IAABiIgjAAIAAidIAfAAIA2BHIA4hHIAcAAIAACdg");
	this.shape_11.setTransform(-17.4,8.6,0.666,0.666);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ag2BEQgQgNAAgXQAAgZAWgMQASgMAhAAQAVAAALAEQABgkgjAAQgWAAgWARIgRgZQALgLATgHQARgGATAAQAfAAARARQARARgBAfIAABgIgjAAIAAgSQgQAUgfAAQgaAAgQgOgAgiAfQAAAKAIAFQAIAGAOAAQAaAAANgWIAAgPQgLgEgRAAQgpAAAAAUg");
	this.shape_12.setTransform(-29.9,8.6,0.666,0.666);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgRBPIAAh9Ig4AAIAAggICTAAIAAAgIg5AAIAAB9g");
	this.shape_13.setTransform(-40,8.6,0.666,0.666);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhMBvIAAjaIAiAAIAAAPQAOgSAdAAQAjAAAVAWQAVAWgBAkQABAjgWAYQgXAYgiAAQgeAAgLgNIAABHgAgbhGQgKAGgFAMIAAA1QAMAUAaAAQAUAAANgOQANgNgBgWQAAgYgLgNQgMgNgUAAQgNAAgMAIg");
	this.shape_14.setTransform(-50.3,10.6,0.666,0.666);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag1A8QgYgXABglQgBgjAVgWQAWgYAlAAQAhAAAVATQAUAVAAAgIgBAVIh1AAQACASAOAKQANAKATAAQAbAAAQgVIAVAVQgYAggoAAQglAAgXgWgAgagpQgKAJgEAPIBSAAQgFghgjAAQgRAAgLAJg");
	this.shape_15.setTransform(-62.3,8.6,0.666,0.666);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAlBPIAAh9IhJAAIAAB9IgjAAIAAidICPAAIAACdg");
	this.shape_16.setTransform(-74,8.6,0.666,0.666);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ag0A8QgXgXAAglQAAgjAXgXQAXgXAkAAQAXAAATAKQASAJAIAQIgaASQgPgVgaAAQgUAAgOAOQgOAOAAAVQAAAWAPAOQAOAOAXAAQAZAAAPgXIAYAQQgJATgTAKQgSAKgVAAQgmAAgXgWg");
	this.shape_17.setTransform(-85,8.6,0.666,0.666);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAfBPIg7hBIgMAMIAAA1IgjAAIAAidIAjAAIAABAIBEhAIAtAAIhMBHIBPBWg");
	this.shape_18.setTransform(-95.1,8.6,0.666,0.666);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AguBKQgWgJgJgSIAZgSQAPAVAeAAQAUAAANgKQANgKADgQIhKAAIAAgdIBJAAQgHgigoAAQgeAAgQAXIgZgTQAbgkAvAAQAkAAAXAWQAWAWAAAlQAAAkgWAWQgWAYgmAAQgYAAgSgIg");
	this.shape_19.setTransform(-107,8.6,0.666,0.666);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhCBPIAAidIAiAAIAAAuIAgAAQBDAAABA3QAAAYgQAOQgSASgjAAgAggAvIAeAAQAiAAAAgYQgBgXggAAIgfAAg");
	this.shape_20.setTransform(54.4,-12.7,0.666,0.666);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ag0A8QgYgXABglQgBgiAXgYQAYgXAkAAQAYAAASAKQASAKAHAQIgZARQgQgVgZAAQgUAAgOAOQgOAOABAVQAAAWAOAOQAOAOAXAAQAZAAAPgXIAZARQgKASgTAKQgSAKgWAAQglAAgXgWg");
	this.shape_21.setTransform(43.6,-12.8,0.666,0.666);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ag1A8QgYgXAAglQAAgjAVgWQAWgYAmAAQAgAAAVATQAVAVAAAgQAAAJgCAMIh0AAQACATANAJQANAKAUAAQAbAAAPgVIAVAVQgYAggoAAQglAAgXgWgAgagpQgLAIgDAQIBSAAQgCgQgLgJQgKgIgRAAQgQAAgMAJg");
	this.shape_22.setTransform(32.4,-12.8,0.666,0.666);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgQBPIAAh9Ig5AAIAAggICTAAIAAAgIg5AAIAAB9g");
	this.shape_23.setTransform(22,-12.7,0.666,0.666);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhDBPIAAidIAjAAIAAAuIAhAAQBDAAgBA3QAAAYgPAOQgSASgjAAgAggAvIAeAAQAhAAAAgYQABgXgiAAIgeAAg");
	this.shape_24.setTransform(13,-12.7,0.666,0.666);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AhNBvIAAjaIAjAAIAAAOQAOgRAdAAQAjAAAVAWQAUAWAAAjQAAAkgVAYQgWAYgjAAQgfAAgKgNIAABHgAgqg0IAAA1QALAUAaAAQAVAAAMgOQANgNAAgWQAAgYgMgNQgLgNgUAAQgcAAgMAag");
	this.shape_25.setTransform(1.7,-10.8,0.666,0.666);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("Ag1A8QgYgXAAglQAAgjAVgWQAWgYAmAAQAgAAAVATQAVAVAAAgQAAAJgCAMIh0AAQACATANAJQANAKAUAAQAbAAAPgVIAVAVQgYAggoAAQglAAgXgWgAgagpQgLAIgDAQIBSAAQgCgQgLgJQgKgIgRAAQgQAAgMAJg");
	this.shape_26.setTransform(-10.3,-12.8,0.666,0.666);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AhEBPIAAidIBDAAQAhAAAQAKQARAKAAAWQAAASgSAOQAWAIAAAcQAAAXgQAMQgRAMgeAAgAgiAwIAkAAQAfAAAAgRQAAgSgeAAIglAAgAgigPIAoAAQAXAAAAgQQAAgKgIgDQgHgCgQgBIggAAg");
	this.shape_27.setTransform(-21.2,-12.7,0.666,0.666);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("Ag8A7QgXgYgBgjQABgjAXgXQAXgXAlAAQAlAAAYAXQAXAYABAiQgBAjgXAYQgYAXglAAQgkAAgYgXgAgigjQgOANAAAWQAAAWAOAOQAOAOAUAAQAWAAANgNQAOgOgBgXQAAgVgOgOQgOgOgUAAQgUAAgOAOg");
	this.shape_28.setTransform(-33.1,-12.8,0.666,0.666);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("ABMB9IAAglIiXAAIAAAlIgkAAIAAhIIAXAAQAMgRAGgdQAGgiAAhCIAAgfICVAAIAACxIAaAAIAABIgAgdhMQAABbgUAmIBiAAIAAiPIhOAAg");
	this.shape_29.setTransform(-46.5,-13.3,0.666,0.666);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-112.2,-21.6,229.4,39.6), null);


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


(lib.snow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA600A").s().p("AgDBpIAAgMIgMAGQgDACgCgEIgBgBQgCgEAEgBIAQgJIAAgPIgWALQgEACgCgDIgBgCQgCgDAEgCIAbgOIAAgPIgHADQgDACgCgEIgBgBQgCgEAEgBIALgGIAAgLIgLgGIgJAFIAAANQABAEgEAAIgCAAQgDAAgBgDIAAgIIgOAHIACAfQAAADgEABIgCAAQgEAAAAgEIgBgZIgNAHIAAATQABAEgEAAIgCAAQgEAAAAgEIgBgNIgKAGQgDABgCgDQgDgDAEgCIAKgGIgLgIQgEgCACgDIABgCQADgDADACIAPAKIAOgHIgWgOQgDgDACgDIABgBQACgEADACIAaARIANgHIgGgFQgEgDADgCIAAgCQADgDADACIALAHIAJgFIAAgLIAAAAIgJgFIgLAHQgEACgCgEIgBgBQgCgEAEgBIAGgFIgNgHIgaAQQgDACgCgDIgBgBQgCgEADgCIAWgOIgOgIIgPALQgEACgCgEIgBgBQgCgDADgCIAMgIIgKgGQgEgBACgEQACgEAEACIAKAGIABgOQAAgEAEAAIABABQAEAAAAAEIgBASIAOAIIABgaQAAgDAEAAIACAAQAEAAAAAEIgCAfIANAHIABgIQAAgEAEAAIABAAQAEABAAAEIAAANIAJAFIALgHIAAgKIgLgGQgEgCACgDIABgCQABgDAEACIAHADIAAgPIgbgOQgEgCACgEIABgBQACgEADACIAXAMIAAgPIgQgJQgEgCACgDIABgCQABgDAEACIAMAGIAAgMQAAgEADAAQAEAAAAAEIAAAMIANgGQAEgCABADIABACQACADgEACIgRAJIAAAPIAXgMQAEgCACAEIAAABQACAEgDACIgcAOIAAAPIAHgDQAEgCACADIABACQACADgEACIgMAGIAAAKIAMAHIAJgFIgBgNQAAgEAEgBIABAAQAEAAAAAEIABAIIANgHIgBgfQgBgEAEAAIACAAQAEAAAAADIABAaIAOgIIgBgSQAAgEAEAAIABgBQAEAAABAEIAAAOIAKgGQAEgCACAEQACAEgEABIgKAGIAMAIQADABgCAEIgBABQgCAEgDgCIgQgLIgOAIIAWAOQAEACgDAEIAAABQgDADgDgCIgagQIgNAHIAHAFQADACgCADIgBABQgCAEgEgCIgKgHIgKAFIAAALIAKAFIALgHQADgCACADIABACQACADgDACIgHAFIANAHIAagRQAEgCACAEIABABQACADgEADIgVAOIANAHIAQgKQADgCACADIABACQACACgDADIgMAIIALAGQADACgCADQgDADgDgBIgKgGIAAANQAAAEgFAAIgBAAQgEAAAAgEIABgTIgNgHIgCAZQAAAEgEAAIgBAAQgEgBAAgDIABgfIgNgIIAAAJQAAADgFAAIgBAAQgEAAAAgEIABgNIgKgFIgKAGIAAALIALAGQAEABgCAEIgBABQgCAEgDgCIgHgDIAAAPIAbAOQAEACgCADIgBACQgCADgEgCIgWgLIAAAPIAQAJQAEABgCAEIgBABQgCAEgDgCIgMgGIAAAMQAAAEgEAAQgEAAAAgEgAgKgGIAAAMIAKAHIAMgHIgBgMIgLgGg");
	this.shape.setTransform(-82.6,23.7,0.666,0.666);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EA600A").s().p("AgBBJIAAgIIgJAEQgBAAAAAAQgBABAAgBQgBAAAAAAQgBAAAAgBIAAgBQgBgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBIAMgGIAAgLIgQAJQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBIgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAABAAIATgKIAAgLIgFADQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIgBgBQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBABAAIAIgEIAAgHIgIgFIgHAEIABAJQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAIgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBIAAgGIgJAGIABAVQAAABgBAAQAAABAAAAQAAABgBAAQgBAAAAAAIgBAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAgBIgBgRIgJAFIAAANQAAAAAAABQAAABAAAAQgBAAAAABQgBAAAAAAIgBAAQgBAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIgBgJIgHAEQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBABAAIAHgEIgJgFQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBABAAIAAgBQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAIALAHIAJgFIgPgKQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIABgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAIASAMIAJgFIgFgDQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgBQAAgBABAAQAAAAABAAQAAgBABAAQAAABABAAIAHAFIAHgEIAAAAIAAgHIAAAAIgHgEIgHAFQgBABgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBIgBgBIAAgCIABgBIAFgDIgJgGIgSAMQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAIgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBIAPgKIgJgFIgLAHQgBABAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBIAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAIAIgGIgHgEQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAHAFIABgKQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAABAAIABAAQAAAAABAAQAAABABAAQAAAAAAABQAAABAAAAIAAANIAJAGIABgSQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAABAAIABAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIgBAVIAKAGIAAgGQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAABAAIABAAQAAAAABABQABAAAAAAQAAABAAAAQABABAAAAIgBAJIAHAEIAHgEIAAgIIgIgEQAAAAgBgBQAAAAAAAAQAAgBAAgBQAAAAAAgBIABAAQAAgBAAAAQABgBAAAAQAAAAABAAQABAAAAAAIAFADIAAgLIgTgJQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAIABgBQAAgBAAgBQABAAAAAAQAAAAABAAQABAAAAABIAQAIIAAgLIgLgGQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAABgBIAAgBQABgBAAAAQAAAAABgBQAAAAABABQAAAAABAAIAIAFIAAgJQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAIAAAJIAJgFQAAAAABAAQAAgBABAAQAAABAAAAQABAAAAABIABABQAAABAAAAQAAABAAABQAAAAgBAAQAAABAAAAIgMAGIAAALIAQgIQAAgBABAAQABAAAAAAQABAAAAABQAAAAABABIAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABIgTAJIAAALIAFgDQAAAAABAAQABAAAAAAQABAAAAABQAAAAABABIAAAAQAAABAAABQABAAgBABQAAAAAAABQAAAAgBAAIgIAEIAAAIIAIAEIAGgEIAAgJQAAAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAIABAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABIABAGIAJgGIgBgVQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAIABAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABIABASIAJgGIAAgNQAAAAAAgBQAAgBAAAAQABAAAAgBQABAAABAAIABAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABIABAKIAHgFQAAAAABAAQABAAAAAAQABAAAAAAQAAABABAAQAAABAAABQABAAgBABQAAAAAAABQgBAAAAAAIgHAEIAIAGQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAIgBABQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBgBIgLgHIgJAFIAPAKQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgBABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgSgMIgJAGIAFADIABABQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgBABQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBgBIgHgFIgHAEIAAAHIAHAEIAIgFQAAAAABgBQAAAAABABQAAAAABAAQAAAAAAABIABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABIgFADIAKAFIASgMQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAIABABQAAABAAAAQABABgBAAQAAABAAAAQAAABgBAAIgPAKIAJAFIALgHQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABIABABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABIgIAFIAHAEQAAAAABABQAAAAAAAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgHgEIAAAJQAAABgBAAQAAABAAAAQAAAAgBABQgBAAAAAAIgBAAQgBAAgBAAQAAgBgBAAQAAAAAAgBQAAgBAAAAIABgNIgKgFIgBARQAAABAAABQAAAAAAABQgBAAAAAAQgBAAAAAAIgCAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIABgVIgJgGIgBAGQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAgJIgGgEIgIAEIAAAIIAIAEQABAAAAABQABAAAAAAQAAABAAABQAAAAgBABIAAABQgBABAAAAQgBAAAAABQAAAAgBgBQAAAAgBAAIgFgDIAAALIATAKQABAAAAABQABAAAAAAQAAABAAAAQAAABgBAAIAAABQgBABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgQgJIAAALIAMAGQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABIgBABQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAIgJgEIAAAIQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAgAgHgDIAAAIIAHAEIAIgFIAAgIIgIgEg");
	this.shape_1.setTransform(144.4,36.7,0.666,0.666);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EA600A").s().p("AgBBJIAAgIIgJAEQgBAAAAAAQgBABAAAAQgBgBAAAAQgBAAAAgBIAAgBQgBgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBIAMgGIAAgLIgQAJQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBIgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAABAAIATgKIAAgLIgFADQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAIgBgBQAAgBAAAAQAAgBAAgBQAAAAAAAAQABgBABAAIAIgEIAAgHIgIgFIgHAEIABAJQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAIgBAAQgBAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIAAgGIgJAGIABAVQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAIgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAgBIgBgSIgJAGIAAANQAAAAAAABQAAABgBAAQAAAAAAABQgBAAAAAAIgBAAQgBAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIgBgJIgHAEQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAHgEIgIgFQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBABAAIAAgBQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAIALAHIAJgFIgPgKQgBgBAAAAQAAAAAAgBQgBAAABgBQAAAAAAgBIABgBQAAgBABAAQAAAAABgBQAAAAABABQAAAAABAAIASAMIAJgFIgFgDQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAIABgBQAAgBAAAAQABAAAAAAQABgBAAAAQABABABAAIAHAFIAHgEIAAAAIAAgHIAAAAIgHgEIgHAFQgBAAgBABQAAAAgBgBQAAAAgBAAQAAAAAAgBIgBgBQAAAAgBgBQAAAAAAgBQAAAAABgBQAAAAABgBIAFgDIgJgFIgSAMQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAIgBgBQAAAAgBgBQAAgBAAAAQAAgBABAAQAAAAABgBIAPgKIgJgFIgLAHQgBABgBAAQAAAAgBAAQAAAAAAgBQgBAAAAgBIgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAIgGIgHgEQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAgBAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAHAEIABgJQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAABAAIABAAQAAAAABAAQAAABAAAAQABAAAAABQAAABAAAAIAAANIAJAGIABgSQAAgBAAgBQAAAAAAgBQABAAAAAAQABAAABAAIABAAQAAAAABAAQABABAAAAQAAAAAAABQAAABAAAAIgBAVIAKAGIAAgGQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAABAAIABAAQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAIgBAJIAGAEIAIgFIAAgHIgIgEQgBAAAAgBQAAAAAAAAQgBgBABgBQAAAAAAgBIABgBQAAAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAIAFADIAAgLIgTgKQgBAAAAAAQAAgBAAAAQgBgBABAAQAAgBAAAAIABgBQAAgBAAgBQAAAAABAAQAAAAABAAQAAAAABABIAQAIIAAgLIgLgGQgBAAAAgBQgBAAAAAAQAAgBAAgBQAAAAABgBIAAgBQAAAAABgBQAAAAAAAAQABAAAAAAQABAAABAAIAIAFIAAgJQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAIAAAJIAIgFQABAAAAAAQABgBABAAQAAABAAAAQABAAAAABIABABQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAIgLAGIAAALIAQgIQAAgBABAAQAAAAABAAQAAAAABABQAAAAABABIAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAIgTAKIAAALIAFgDQAAAAABAAQABAAAAAAQABAAAAAAQAAABABAAIAAABQAAABAAAAQAAABAAABQAAAAAAAAQgBABAAAAIgIAEIAAAIIAIAEIAGgEIAAgJQgBAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAIABAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABIAAAGIAKgGIgBgVQAAAAAAgBQAAgBAAAAQAAAAABgBQAAAAABAAIABAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAABIABASIAJgGIAAgNQAAAAAAgBQAAgBAAAAQAAAAABgBQAAAAABAAIACAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIABAJIAHgEQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAAAIgHAEIAIAGQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAIgBABQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBgBIgLgHIgJAFIAPAKQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAIgBABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgSgMIgJAFIAFADQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAIgBABQAAABgBAAQAAAAgBAAQAAABgBAAQAAgBgBAAIgHgFIgHAEIAAAHIAHAEIAIgFQAAgBABAAQAAAAABAAQAAAAAAABQABAAAAABIABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABIgFADIAKAFIASgMQAAAAABgBQAAAAABAAQAAAAAAABQABAAAAABIABABQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBABIgPAKIAJAFIALgHQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABIABABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABIgIAFIAHAEQAAAAABABQAAAAAAAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgHgEIAAAJQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAIgBAAQgBAAgBAAQAAgBgBAAQAAAAAAgBQAAgBAAAAIABgNIgKgGIgBASQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAIgBAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIABgVIgJgGIgBAGQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIgBAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIAAgJIgGgEIgIAEIAAAIIAIAEQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIAAABQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgFgDIAAALIATAKQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIAAABQgBABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgQgJIAAALIAMAGQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABIgBABQAAABgBAAQAAABAAAAQgBAAAAAAQgBgBAAAAIgJgEIAAAIQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAgAgHgDIAAAIIAHAEIAIgFIAAgIIgIgEg");
	this.shape_2.setTransform(122.9,18.9,0.666,0.666);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EA600A").s().p("AgBBJIAAgIIgJAEQgBAAAAAAQgBABAAAAQgBgBAAAAQgBAAAAgBIAAgBQgBgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBIAMgGIAAgLIgQAJQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBIgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAABAAIATgKIAAgLIgFADQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIgBgBQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBABAAIAIgEIAAgHIgIgFIgHAEIABAJQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAIgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBIAAgGIgJAGIABAVQAAABgBAAQAAABAAAAQAAABgBAAQgBAAAAAAIgBAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAgBIgBgRIgJAFIAAANQAAAAAAABQAAABAAAAQgBAAAAABQgBAAAAAAIgBAAQgBAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIgBgJIgHAEQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBABAAIAHgEIgJgFQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBABAAIAAgBQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAIALAHIAJgFIgPgKQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIABgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAIASAMIAJgFIgFgDQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAIABgBQAAgBABAAQAAAAABAAQAAgBABAAQAAABABAAIAHAFIAHgEIAAAAIAAgHIAAAAIgHgEIgHAFQgBAAgBABQAAAAgBgBQAAAAgBAAQAAAAAAgBIgBgBIAAgCIABgBIAFgDIgJgGIgSAMQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAIgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBIAPgKIgJgFIgLAHQgBABAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBIAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAIAIgGIgHgEQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAHAFIABgKQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAABAAIABAAQAAAAABAAQAAABABAAQAAAAAAABQAAABAAAAIAAANIAJAGIABgSQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAABAAIABAAQABAAAAAAQABABAAAAQAAAAAAABQAAABAAAAIgBAVIAKAGIAAgGQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAABAAIABAAQAAAAABABQABAAAAAAQAAABAAAAQABABAAAAIgBAJIAHAEIAHgEIAAgIIgIgEQAAAAgBgBQAAAAAAAAQAAgBAAgBQAAAAAAgBIABAAQAAgBAAAAQABgBAAAAQAAAAABAAQABAAAAAAIAFADIAAgLIgTgJQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAIABgBQAAgBAAgBQABAAAAAAQAAAAABAAQABAAAAABIAQAIIAAgLIgLgGQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAABgBIAAgBQABgBAAAAQAAAAABgBQAAAAABABQAAAAABAAIAIAFIAAgJQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAIAAAJIAJgFQAAAAABAAQAAgBABAAQAAABAAAAQABAAAAABIABABQAAABAAAAQAAABAAABQAAAAgBAAQAAABAAAAIgMAGIAAALIAQgIQAAgBABAAQABAAAAAAQABAAAAABQAAAAABABIAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABIgTAJIAAALIAFgDQAAAAABAAQABAAAAAAQABAAAAABQAAAAABABIAAAAQAAABAAABQABAAgBABQAAAAAAABQAAAAgBAAIgIAEIAAAIIAIAEIAGgEIAAgJQAAAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAIABAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABIABAGIAJgGIgBgVQAAAAAAgBQAAgBAAAAQABAAAAgBQABAAAAAAIABAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABIABASIAJgGIAAgNQAAAAAAgBQAAgBAAAAQABAAAAgBQABAAABAAIABAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABIABAKIAHgFQAAAAABAAQABAAAAAAQABAAAAAAQAAABABAAQAAABAAABQABAAgBABQAAAAAAABQgBAAAAAAIgHAEIAIAGQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAIgBABQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBgBIgLgHIgJAFIAPAKQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgBABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgSgMIgJAGIAFADIABABQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgBABQAAABgBAAQAAAAgBAAQAAABgBAAQAAgBgBAAIgHgFIgHAEIAAAHIAHAEIAIgFQAAAAABgBQAAAAABABQAAAAABAAQAAAAAAABIABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABIgFADIAKAFIASgMQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAIABABQAAABAAAAQABABgBAAQAAABAAAAQAAAAgBABIgPAKIAJAFIALgHQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABIABABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABIgIAFIAHAEQAAAAABABQAAAAAAAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgHgEIAAAJQAAABgBAAQAAABAAAAQAAAAgBABQgBAAAAAAIgBAAQgBAAgBAAQAAgBgBAAQAAAAAAgBQAAgBAAAAIABgNIgKgFIgBARQAAABAAABQAAAAAAABQgBAAAAAAQgBAAAAAAIgCAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIABgVIgJgGIgBAGQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAgJIgGgEIgIAEIAAAIIAIAEQABAAAAABQABAAAAAAQAAABAAABQAAAAgBABIAAABQgBABAAAAQgBAAAAABQAAAAgBgBQAAAAgBAAIgFgDIAAALIATAKQABAAAAABQABAAAAAAQAAABAAAAQAAABgBAAIAAABQgBABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgQgJIAAALIAMAGQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABIgBABQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAIgJgEIAAAIQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAgAgHgDIAAAIIAHAEIAIgFIAAgIIgIgEg");
	this.shape_3.setTransform(170.3,18,0.666,0.666);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EA600A").s().p("AgBBJIAAgIIgJAEQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAgBIgBAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAIAMgGIAAgKIgRAIQAAAAAAAAQgBAAAAAAQgBAAgBgBQAAAAgBAAIAAgBQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAABgBIATgJIAAgKIgGACQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAIgBgBQAAgBAAgBQgBAAABgBQAAAAAAAAQABgBABAAIAIgEIAAgIIgIgEIgHADIAAAJQAAABAAABQAAAAAAABQAAAAgBAAQAAAAgBAAIgBAAQgBABAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIgBgFIgJAFIACAVQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBAAIgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAIgBgSIgJAFIABANQAAAAgBABQAAAAAAABQgBAAAAAAQgBABgBAAIgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBAAABgBIgBgJIgHADQgBABAAAAQgBABAAgBQgBAAAAAAQAAgBAAAAIgBgCIACgCIAHgEIgIgGQgBAAgBAAQAAgBAAAAQAAgBAAAAQAAgBABgBIAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAABABAAIALAHIAJgGIgPgJQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAIAAgBQAAgBABAAQAAAAABAAQAAAAABAAQAAAAAAAAIASAMIAKgGIgFgCQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBIAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQABAAAAABIAJAFIAGgEIAAgHIgBAAIgGgDIgIAEQAAABAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBIgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAIAEgEIgJgFIgSAMQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBIgBgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAIAPgKIgKgFIgKAHQAAAAgBABQAAAAgBAAQgBAAAAgBQgBAAAAAAIAAgCQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBIAIgFIgHgEQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABgBQAAAAABAAQAAAAABAAQAAAAABAAIAHAFIABgKQgBgBABAAQAAgBAAAAQABgBAAAAQABAAAAABIABAAQABAAABAAQAAAAAAAAQABABAAAAQAAABAAABIAAAMIAJAGIABgSQAAgBAAgBQAAAAABAAQAAgBABAAQAAAAAAAAIABAAQABAAABAAQAAAAABABQAAAAAAABQABAAAAABIgCAVIAJAGIAAgGQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAIABAAQAAAAABABQAAAAABAAQAAABAAAAQAAABAAAAIAAAJIAHAEIAIgFIAAgHIgIgEQgBAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIABgCQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAIAGADIAAgLIgTgKQgBAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAgBQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAABIARAIIAAgLIgNgGQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBIABgBQAAAAABgBQAAAAAAAAQABAAABAAQAAAAABAAIAJAFIAAgIQAAgBAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAABIAAAIIAIgFQABAAABAAQAAgBABABQAAAAAAAAQABABAAAAIABABIAAADIgBABIgMAGIAAALIAQgIQABgBAAAAQABAAAAAAQABAAAAABQAAAAAAABIABABQAAAAABABQAAAAAAABQAAAAgBABQAAAAgBAAIgTAKIAAALIAFgDQABAAAAAAQABgBAAAAQABABAAAAQAAABAAAAIABACQAAAAABABQAAAAAAABQgBAAAAAAQAAABgBAAIgIAEIAAAHIAHAFIAHgEIAAgJQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBABAAIABAAQABAAAAABQABAAAAAAQABAAAAABQAAAAAAABIABAGIAJgGIgCgVQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABAAIABAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAABIABASIAJgGIgBgMQAAgBABgBQAAAAAAgBQABAAAAAAQABAAABAAIABAAQAAgBABAAQAAAAABABQAAAAAAABQAAAAAAABIABAKIAHgFQABAAAAAAQABgBAAAAQABABAAAAQAAABAAABQABAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAIgHAEIAIAFQABABAAAAQABABAAAAQAAABAAAAQAAABgBAAIAAACQAAAAgBAAQAAABgBAAQAAAAgBAAQgBgBAAAAIgLgHIgJAFIAPAKQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIAAABQAAABgBAAQAAAAAAAAQgBAAAAAAQgBAAgBAAIgRgMIgKAFIAFAEQAAAAABABQAAAAAAAAQAAABAAAAQAAABgBAAIAAABQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBgBIgIgEIgGADIAAAHIABAAIAGAEIAHgFQABAAAAgBQABAAAAAAQABAAAAABQABAAAAABIABAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABIgFACIAKAGIARgMQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAIABABQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgPAJIAKAGIAKgHQABAAAAgBQABAAAAAAQABABAAAAQABAAAAABIAAAAQABABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgIAGIAHAEQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBgBIgHgDIgBAJQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAIgBAAQgBAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAgNIgJgFIgBASQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAAAIgBAAQgBAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBIACgWIgJgEIgBAFQAAABAAAAQAAABgBAAQAAABAAAAQgBAAgBgBIgBAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAgBIAAgJIgHgDIgHAEIAAAIIAIAEIABACQABAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAABIgBABQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgFgCIAAAKIATAJQABABAAAAQAAABAAAAQABABgBAAQAAABAAABIgBABQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgQgIIAAAKIAMAGQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABIAAAAQgBABAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAIgIgEIAAAIQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAgAgHgEIAAAIIAHAFIAIgFIAAgIIgIgEg");
	this.shape_4.setTransform(29.5,36.7,0.666,0.666);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.snow, new cjs.Rectangle(-89.1,13,264,28.7), null);


(lib.fg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEAAQAAgEAEABQAFgBAAAEQAAAEgFABQgEgBAAgEg");
	this.shape.setTransform(257.2,34.9,0.891,0.886);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgNAcIAZgwIggAAIAAgHIApAAIAAAFIgbAyg");
	this.shape_1.setTransform(254.8,32.8,0.891,0.886);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgRAUQgGgHAAgNQAAgbAXgBQAYABAAAbQAAAcgYAAQgLAAgGgIgAgQAAQAAAKAFAGQAEAGAHAAQAQAAAAgWQAAgVgQAAQgQAAAAAVg");
	this.shape_2.setTransform(250.4,32.8,0.891,0.886);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgVAOIAHgDQAEALAMAAQANAAAAgKQAAgJgPAAIgFAAIAAgGIAFAAQANAAAAgJQAAgJgMAAQgLAAgDALIgHgDQAGgPAPAAQAJAAAFAEQAGAEAAAHQAAAKgKADQALAAAAAMQAAAIgGAEQgGAFgJAAQgSAAgEgPg");
	this.shape_3.setTransform(245.6,32.8,0.891,0.886);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAFAcIAAgvIgOAHIgCgGIASgJIAFAAIAAA3g");
	this.shape_4.setTransform(241.8,32.8,0.891,0.886);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAAAcIgggqIAAAqIgHAAIAAg3IAGAAIAhArIAAgrIAGAAIAAA3gAANAOIAAgHIAYAAIAAAHgAAPAAQgEgEAAgGQAAgGAEgEQAEgEAGAAQAHAAAEAEQAEAEAAAGQAAAGgEAEQgEACgHAAQgGAAgEgCgAARgKQAAAIAIAAQAIAAAAgIQAAgIgIAAQgIAAAAAIg");
	this.shape_5.setTransform(233.8,32.8,0.891,0.886);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgQAVQgJgIABgNQAAgLAHgIQAIgJAMAAQAOAAAHAKIgEAEQgIgHgJAAQgIAAgHAGQgFAGAAAJQAAAKAGAGQAGAGAJAAQALAAAGgIIAFAFQgJAKgOAAQgMAAgHgIg");
	this.shape_6.setTransform(224.3,32.8,0.891,0.886);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAQAcIAAgwIggAAIAAAwIgHAAIAAg3IAvAAIAAA3g");
	this.shape_7.setTransform(219.2,32.8,0.891,0.886);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgFAGIAFgCQABgDgBgBQgDAAAAgFQgBgEAEAAQAGAAAAAHQAAAKgJACg");
	this.shape_8.setTransform(213.2,35.4,0.891,0.886);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgVAPIAGgDQAFAKAKAAQAHAAAEgEQAEgEAAgFQAAgLgPAAQgIAAgEAEIgGgCIADgbIAiAAIAAAHIgcAAIgCAPQAFgEAHAAQAKAAAGAGQAFAEAAAIQAAAIgGAGQgGAFgKAAQgQAAgFgNg");
	this.shape_9.setTransform(210.1,32.8,0.891,0.886);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgRAUQgGgHAAgNQAAgbAXgBQAYABAAAbQAAAcgYAAQgKAAgHgIgAgPAAQAAAWAPAAQAQAAAAgWQAAgVgQAAQgPAAAAAVg");
	this.shape_10.setTransform(205.5,32.8,0.891,0.886);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgJADIAAgFIATAAIAAAFg");
	this.shape_11.setTransform(201.6,33.3,0.891,0.886);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgNAcIAagwIghAAIAAgHIApAAIAAAFIgbAyg");
	this.shape_12.setTransform(198.4,32.8,0.891,0.886);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgRAUQgGgHAAgNQAAgbAXgBQAYABAAAbQAAAcgYAAQgKAAgHgIgAgQAAQAAAKAFAGQAEAGAHAAQAQAAAAgWQAAgVgQAAQgQAAAAAVg");
	this.shape_13.setTransform(194,32.8,0.891,0.886);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgVAOIAGgDQAGALALAAQANAAAAgKQAAgJgPAAIgFAAIAAgGIAFAAQANAAAAgJQAAgJgMAAQgKAAgFALIgFgDQAFgPAQAAQAIAAAFAEQAFAEAAAHQAAAKgJADQALAAAAAMQAAAIgGAEQgFAFgKAAQgSAAgEgPg");
	this.shape_14.setTransform(189.2,32.8,0.891,0.886);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAFAcIAAgvIgOAHIgCgGIATgJIAEAAIAAA3g");
	this.shape_15.setTransform(185.4,32.8,0.891,0.886);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAAAcIgggqIAAAqIgHAAIAAg3IAGAAIAhArIAAgrIAGAAIAAA3gAANAOIAAgHIAYAAIAAAHgAAPAAQgEgEAAgGQAAgGAEgEQAEgEAGAAQAHAAAEAEQAEAEAAAGQAAAGgEAEQgEACgHAAQgGAAgEgCgAARgKQAAAIAIAAQAIAAAAgIQAAgIgIAAQgIAAAAAIg");
	this.shape_16.setTransform(177.4,32.8,0.891,0.886);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgRAVQgIgIAAgNQAAgLAIgIQAIgJAMAAQAOAAAHAKIgEAEQgIgHgJAAQgJAAgFAGQgGAGAAAJQAAAKAGAGQAHAGAIAAQALAAAGgIIAEAFQgHAKgOAAQgMAAgJgIg");
	this.shape_17.setTransform(167.9,32.8,0.891,0.886);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgTAVQgIgIgBgNQABgLAIgIQAIgJALAAQAMAAAJAIQAHAJAAALQAAANgHAIQgJAIgMAAQgLAAgIgIgAgOgPQgGAHAAAIQAAAKAGAGQAHAGAHAAQAJAAAGgGQAGgGAAgKQAAgIgGgHQgHgGgIAAQgIAAgGAGg");
	this.shape_18.setTransform(162.6,32.8,0.891,0.886);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAIAcIAAgMIghAAIAAgEIAignIAHAAIAAAlIAKAAIAAAGIgKAAIAAAMgAgPAKIAXAAIAAgag");
	this.shape_19.setTransform(267,24.7,0.891,0.886);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgRAUQgGgHAAgNQAAgbAXgBQAYABAAAbQAAAcgYAAQgKAAgHgIgAgQAAQAAAWAQAAQAQAAAAgWQAAgVgQAAQgQAAAAAVg");
	this.shape_20.setTransform(262.2,24.7,0.891,0.886);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgJADIAAgFIATAAIAAAFg");
	this.shape_21.setTransform(258.4,25.3,0.891,0.886);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgNAcIAZgwIggAAIAAgHIApAAIAAAFIgbAyg");
	this.shape_22.setTransform(255.1,24.7,0.891,0.886);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgRAUQgGgHAAgNQAAgMAGgHQAGgJALAAQAYABAAAbQAAAcgYAAQgLAAgGgIgAgQAAQABAWAPAAQAQAAAAgWQAAgVgQAAQgPAAgBAVg");
	this.shape_23.setTransform(250.7,24.7,0.891,0.886);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgVAOIAHgDQAEALAMAAQAMAAAAgKQAAgJgOAAIgFAAIAAgGIAFAAQANAAAAgJQAAgJgLAAQgLAAgEALIgHgDQAGgPAQAAQAIAAAFAEQAGAEAAAHQgBAKgJADQALAAAAAMQAAAIgGAEQgGAFgIAAQgTAAgEgPg");
	this.shape_24.setTransform(246,24.7,0.891,0.886);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAFAcIAAgvIgOAHIgCgGIASgJIAFAAIAAA3g");
	this.shape_25.setTransform(242.1,24.7,0.891,0.886);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAAAcIgggqIAAAqIgHAAIAAg3IAGAAIAhArIAAgrIAGAAIAAA3gAANAOIAAgHIAYAAIAAAHgAAPAAQgEgEAAgGQAAgOAOAAQAHAAAEAEQAEAEAAAGQAAAGgEAEQgEACgHAAQgGAAgEgCgAARgKQAAAIAIAAQAIAAAAgIQAAgIgIAAQgIAAAAAIg");
	this.shape_26.setTransform(234.1,24.7,0.891,0.886);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgQAVQgIgIAAgNQAAgLAHgIQAIgJAMAAQAOAAAIAKIgFAEQgHgHgKAAQgIAAgGAGQgGAGAAAJQAAAKAGAGQAGAGAJAAQALAAAGgIIAEAFQgHAKgOAAQgMAAgIgIg");
	this.shape_27.setTransform(224.6,24.7,0.891,0.886);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgTAVQgJgIABgNQgBgLAJgIQAIgJALAAQAMAAAIAIQAJAJAAALQAAAMgJAJQgIAIgMAAQgLAAgIgIgAgOgPQgGAHAAAIQAAAKAGAGQAHAGAHAAQAJAAAFgGQAHgGgBgKQABgIgHgHQgFgGgJAAQgIAAgGAGg");
	this.shape_28.setTransform(219.4,24.7,0.891,0.886);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgFAGQADAAACgCQABgDgBgBQgEAAAAgFQAAgEAEAAQAGAAAAAHQAAAKgJACg");
	this.shape_29.setTransform(243.8,27.3,0.891,0.886);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgVAOIAGgDQAHALAKAAQAMAAAAgKQAAgJgNAAIgGAAIAAgGIAFAAQANAAAAgJQABgJgMAAQgMAAgEALIgGgDQAGgPAQAAQAJAAAEAEQAGAEAAAHQAAAKgKADQALAAAAAMQAAAIgGAEQgFAFgJAAQgSAAgFgPg");
	this.shape_30.setTransform(210.1,24.7,0.891,0.886);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgRAUQgGgHAAgNQAAgMAGgHQAHgJAKAAQAYABAAAbQAAAcgYAAQgLAAgGgIgAgPAAQAAAWAPAAQAQAAAAgWQAAgVgQAAQgPAAAAAVg");
	this.shape_31.setTransform(205.6,24.7,0.891,0.886);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgJADIAAgFIATAAIAAAFg");
	this.shape_32.setTransform(201.7,25.3,0.891,0.886);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgNAcIAagwIghAAIAAgHIApAAIAAAFIgbAyg");
	this.shape_33.setTransform(198.5,24.7,0.891,0.886);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgRAUQgGgHAAgNQAAgbAXgBQAYABAAAbQAAAcgYAAQgKAAgHgIgAgPAAQAAAWAPAAQAQAAAAgWQAAgVgQAAQgPAAAAAVg");
	this.shape_34.setTransform(194.1,24.7,0.891,0.886);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgVAOIAHgDQAFALALAAQANAAAAgKQAAgJgPAAIgFAAIAAgGIAFAAQAOAAAAgJQgBgJgMAAQgKAAgEALIgGgDQAFgPAQAAQAJAAAEAEQAGAEAAAHQAAAKgKADQALAAAAAMQAAAIgGAEQgFAFgKAAQgRAAgFgPg");
	this.shape_35.setTransform(189.3,24.7,0.891,0.886);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAFAcIAAgvIgNAHIgDgGIASgJIAFAAIAAA3g");
	this.shape_36.setTransform(185.5,24.7,0.891,0.886);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAAAcIgggqIAAAqIgGAAIAAg3IAFAAIAhArIAAgrIAGAAIAAA3gAAOAOIAAgHIAXAAIAAAHgAAPAAQgEgEAAgGQAAgGAEgEQAEgEAHAAQAFAAAEAEQAEAEAAAGQAAAGgEAEQgEACgFAAQgHAAgEgCgAARgKQAAAIAJAAQAHAAABgIQgBgIgHAAQgJAAAAAIg");
	this.shape_37.setTransform(177.5,24.7,0.891,0.886);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgRAVQgHgIAAgNQAAgLAHgIQAIgJAMAAQAPAAAGAKIgEAEQgIgHgJAAQgIAAgGAGQgGAGAAAJQAAAKAGAGQAGAGAJAAQALAAAGgIIAEAFQgHAKgPAAQgMAAgIgIg");
	this.shape_38.setTransform(168.1,24.7,0.891,0.886);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgTAVQgIgIAAgNQAAgLAIgIQAIgJALAAQAMAAAIAIQAIAJAAALQAAANgIAIQgIAIgMAAQgLAAgIgIgAgOgPQgGAHAAAIQAAAJAGAHQAGAGAIAAQAJAAAGgGQAGgGAAgKQAAgIgGgHQgGgGgJAAQgIAAgGAGg");
	this.shape_39.setTransform(162.8,24.7,0.891,0.886);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgFAGQADAAABgCQACgDAAgBQgFAAAAgFQAAgEAEAAQAGAAAAAHQAAAKgKACg");
	this.shape_40.setTransform(270.7,27.3,0.891,0.886);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgFAGIAFgCQABgDgBgBQgDAAgBgFQABgEADAAQAGAAAAAHQAAAKgJACg");
	this.shape_41.setTransform(293.7,19.3,0.891,0.886);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgNAcIAagwIghAAIAAgHIApAAIAAAFIgbAyg");
	this.shape_42.setTransform(291.3,16.7,0.891,0.886);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgRAUQgGgHAAgNQAAgbAXgBQAYABAAAbQAAAcgYAAQgKAAgHgIgAgPAAQAAAWAPAAQARAAAAgWQAAgVgRAAQgPAAAAAVg");
	this.shape_43.setTransform(286.9,16.7,0.891,0.886);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgVAOIAGgDQAHALAKAAQANAAAAgKQAAgJgPAAIgFAAIAAgGIAFAAQANAAAAgJQAAgJgMAAQgKAAgFALIgFgDQAFgPAQAAQAIAAAGAEQAFAEAAAHQAAAKgKADQALAAAAAMQAAAIgFAEQgHAFgJAAQgRAAgFgPg");
	this.shape_44.setTransform(282.1,16.7,0.891,0.886);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAFAcIAAgvIgNAHIgDgGIASgJIAFAAIAAA3g");
	this.shape_45.setTransform(278.3,16.7,0.891,0.886);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAAAcIgggqIAAAqIgHAAIAAg3IAGAAIAhArIAAgrIAGAAIAAA3gAANAOIAAgHIAYAAIAAAHgAAPAAQgEgEAAgGQAAgGAEgEQAEgEAHAAQAFAAAFAEQADAEAAAGQAAAGgDAEQgFACgFAAQgHAAgEgCgAASgKQgBAIAJAAQAHAAAAgIQAAgIgHAAQgJAAABAIg");
	this.shape_46.setTransform(270.3,16.7,0.891,0.886);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AASAcIAAgwIgXAAIAAADQAAAtgQAAIgEAAIAAgHQANACAAgpIAAgJIAmAAIAAA3g");
	this.shape_47.setTransform(261,16.7,0.891,0.886);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgQAVQgIgIAAgNQAAgLAHgIQAIgJAMAAQAOAAAIAKIgFAEQgHgHgKAAQgIAAgGAGQgGAGAAAJQAAAKAGAGQAGAGAJAAQALAAAGgIIAEAFQgHAKgOAAQgMAAgIgIg");
	this.shape_48.setTransform(256.5,16.7,0.891,0.886);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgFAGQACAAACgCQACgDAAgBQgFAAAAgFQAAgEAEAAQAGAAAAAHQAAAJgKADg");
	this.shape_49.setTransform(251.4,19.3,0.891,0.886);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgNAcIAagwIghAAIAAgHIApAAIAAAFIgbAyg");
	this.shape_50.setTransform(249,16.7,0.891,0.886);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgRAVQgGgJAAgMQAAgcAXAAQAYAAAAAcQAAAdgYAAQgKgBgHgHgAgQAAQAAAKAFAGQAEAGAHAAQAQAAAAgWQAAgVgQAAQgQAAAAAVg");
	this.shape_51.setTransform(244.6,16.7,0.891,0.886);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgVAOIAGgDQAGALALAAQAMAAAAgKQAAgJgOAAIgFAAIAAgGIAFAAQANAAAAgJQAAgJgMAAQgLAAgEALIgGgDQAGgPAQAAQATAAgBAPQAAAKgJADQALAAAAAMQAAAIgGAEQgFAFgKAAQgSAAgEgPg");
	this.shape_52.setTransform(239.8,16.7,0.891,0.886);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAFAcIAAgvIgNAHIgDgGIATgJIAEAAIAAA3g");
	this.shape_53.setTransform(236,16.7,0.891,0.886);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAAAcIgggqIAAAqIgHAAIAAg3IAGAAIAhAqIAAgqIAGAAIAAA3gAANAOIAAgHIAYAAIAAAHgAAPAAQgEgEAAgGQAAgHAEgDQAEgEAGAAQAHAAAEAEQAEADAAAHQAAAGgEAEQgEACgHABQgGgBgEgCgAARgKQAAAHAIAAQAIAAAAgHQAAgIgIAAQgIAAAAAIg");
	this.shape_54.setTransform(228.8,16.7,0.891,0.886);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAQAcIAAgqIghAqIgGAAIAAg3IAHAAIAAAqIAhgqIAHAAIAAA3g");
	this.shape_55.setTransform(219.8,16.7,0.891,0.886);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgRAVQgHgIAAgNQAAgLAHgIQAIgJAMAAQAPAAAGAKIgEAEQgIgHgJAAQgJAAgFAGQgGAGAAAJQAAAKAGAGQAGAGAJAAQALAAAGgIIAEAFQgIAKgOAAQgMAAgIgIg");
	this.shape_56.setTransform(214.8,16.7,0.891,0.886);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgEAQQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFgAgEgQQAAgEAEAAQAFAAAAAEQAAAGgFgBQgEABAAgGg");
	this.shape_57.setTransform(209,17.3,0.891,0.886);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgVAPIAGgDQAGAKAKAAQAHAAAEgEQADgEAAgFQAAgLgPAAQgHAAgFAEIgGgCIAEgbIAiAAIAAAHIgcAAIgCAPQAEgEAHAAQAKAAAGAGQAFAEAAAIQAAAJgGAFQgGAFgJAAQgQAAgGgNg");
	this.shape_58.setTransform(205.5,16.7,0.891,0.886);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAFAcIAAgvIgNAHIgDgGIASgJIAFAAIAAA3g");
	this.shape_59.setTransform(201.6,16.7,0.891,0.886);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgRAVQgGgIAAgNQAAgcAXAAQAYAAAAAcQAAAdgYAAQgLgBgGgHgAgQAAQAAAKAFAGQAEAGAHAAQAQAAAAgWQAAgVgQAAQgQAAAAAVg");
	this.shape_60.setTransform(198.1,16.7,0.891,0.886);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgVAcIAAgFIAMgIQAKgHAEgEQAHgGAAgIQAAgKgLAAQgLAAgEAMIgFgCQADgRARAAQAJAAAFAEQAFAFAAAHQAAAOgWAPIgGAEIAeAAIAAAGg");
	this.shape_61.setTransform(193.5,16.7,0.891,0.886);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgEAAQAAgDAEgBQAFABAAADQAAAEgFAAQgEAAAAgEg");
	this.shape_62.setTransform(190.5,18.8,0.891,0.886);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgVAPIAGgDQAEAKAMAAQAHAAAEgEQADgEAAgFQAAgLgPAAQgHAAgFAEIgGgCIAEgbIAiAAIAAAHIgcAAIgCAPQAEgEAHAAQAKAAAGAGQAFAEAAAIQAAAJgGAFQgGAFgJAAQgQAAgGgNg");
	this.shape_63.setTransform(187.4,16.7,0.891,0.886);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgRAVQgGgJAAgMQAAgcAXAAQAYAAAAAcQAAAdgYAAQgKgBgHgHgAgQAAQAAAKAFAGQAEAGAHAAQAQAAAAgWQAAgVgQAAQgQAAAAAVg");
	this.shape_64.setTransform(182.8,16.7,0.891,0.886);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgEAAQAAgDAEgBQAFABAAADQAAAEgFAAQgEAAAAgEg");
	this.shape_65.setTransform(179.6,18.8,0.891,0.886);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgVAPIAGgDQAGAKAKAAQAHAAAEgEQADgEAAgFQAAgLgPAAQgHAAgFAEIgGgCIAEgbIAiAAIAAAHIgcAAIgCAPQAEgEAHAAQAKAAAGAGQAFAEAAAIQAAAJgGAFQgGAFgJAAQgQAAgGgNg");
	this.shape_66.setTransform(176.5,16.7,0.891,0.886);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgVAcIAAgFIAMgIQAKgHAEgEQAHgGAAgIQAAgKgLAAQgLAAgEAMIgFgCQACgRASAAQAJAAAFAEQAFAFAAAHQAAAOgWAPIgGAEIAeAAIAAAGg");
	this.shape_67.setTransform(172.2,16.7,0.891,0.886);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgCAVIAAgjIgQAAIAAgGIAlAAIAAAGIgQAAIAAAjg");
	this.shape_68.setTransform(166.1,17.4,0.891,0.886);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgPAPQgGgGAAgJQAAgJAGgFQAGgHAJABQAJgBAHAHQAGAFAAAJQAAAJgGAGQgHAGgJABQgJgBgGgGgAgKgKQgEAEAAAGQAAAHAEAEQAFAEAFAAQAGAAAEgEQAFgFAAgGQAAgGgFgEQgEgFgGABQgGgBgEAFg");
	this.shape_69.setTransform(162.3,17.3,0.891,0.886);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgCAdIAAgHIgBAAQgNAAgIgGQgHgGAAgKQAAgLAIgGQAHgGAOAAIAAgFIAFAAIAAAFQANAAAHAFQAJAHAAALQAAAJgHAHQgIAGgNAAIgBAAIAAAHgAADAPIABAAQAUAAABgPQgBgQgUAAIgBAAgAgYAAQAAAPAVAAIABAAIAAgfQgWAAAAAQg");
	this.shape_70.setTransform(293.2,8.2,0.891,0.886);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgVAcIAAg3IAVAAQAWAAAAARQAAASgWgBIgOAAIAAAVgAgOABIAOAAQAPAAAAgLQAAgKgPAAIgOAAg");
	this.shape_71.setTransform(288.1,8.2,0.891,0.886);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgVAcIAAg3IAnAAIAAAHIggAAIAAAQIAQAAQAUAAAAAPQAAARgWAAgAgOAVIAPAAQAOAAAAgKQgBgKgNABIgPAAg");
	this.shape_72.setTransform(281.2,8.2,0.891,0.886);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AATAhIAAgKIgsAAIAAg3IAHAAIAAAwIAeAAIAAgwIAHAAIAAAwIAIAAIAAARg");
	this.shape_73.setTransform(276.3,8.7,0.891,0.886);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AANAVIAAgeIgZAeIgGAAIAAgpIAGAAIAAAeIAZgeIAGAAIAAApg");
	this.shape_74.setTransform(269.1,8.9,0.891,0.886);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AAMAVIAAgeIgYAeIgGAAIAAgpIAHAAIAAAeIAYgeIAGAAIAAApg");
	this.shape_75.setTransform(264.9,8.9,0.891,0.886);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgSAMIAGgEQADAIAJgBQALABAAgIQAAgFgIAAIgJAAIAAgFIAJAAQAHAAAAgHQAAgFgKAAQgHAAgFAFIgEgDQAEgIAMAAQARgBAAALQAAAGgFADQAHADAAAGQAAAOgTAAQgMAAgGgKg");
	this.shape_76.setTransform(260.8,8.8,0.891,0.886);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AAMAVIAAgSIgXAAIAAASIgHAAIAAgpIAHAAIAAARIAXAAIAAgRIAHAAIAAApg");
	this.shape_77.setTransform(257,8.9,0.891,0.886);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgNAQQgGgGAAgKQAAgIAFgGQAGgGAJAAQAJAAAFAEQAFAGAAAIIAAAFIggAAQABANANgBQAIAAAEgGIAFAEQgGAJgLAAQgJAAgGgGgAgMgDIAZAAQgBgMgLABQgLgBgCAMg");
	this.shape_78.setTransform(252.8,8.8,0.891,0.886);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAPAaIAAgKIgjAAIAAgpIAHAAIAAAiIAWAAIAAgiIAHAAIAAAiIAFAAIAAARg");
	this.shape_79.setTransform(248.8,9.3,0.891,0.886);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAMAVIAAgeIgYAeIgGAAIAAgpIAHAAIAAAeIAYgeIAGAAIAAApg");
	this.shape_80.setTransform(244.4,8.9,0.891,0.886);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AASAcIAAgwIgXAAIAAADQAAAtgQAAIgDAAIAAgHQALACAAgpIAAgJIAnAAIAAA3g");
	this.shape_81.setTransform(239.4,8.2,0.891,0.886);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgEAAQAAgDAEgBQAFABAAADQAAAEgFAAQgEAAAAgEg");
	this.shape_82.setTransform(234.6,10.3,0.891,0.886);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgBANIAKgNIgKgMIADgEIAQAQIAAAAIgPARgAgRANIAMgNIgMgMIAFgEIAOAQIAAAAIgNARg");
	this.shape_83.setTransform(231.9,8.9,0.891,0.886);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgNAQQgGgGAAgKQAAgIAFgGQAGgGAJAAQAJAAAFAEQAFAGAAAIIAAAFIggAAQABANANgBQAIAAAEgGIAFAEQgGAJgLAAQgJAAgGgGgAgMgDIAZAAQgBgMgLABQgLgBgCAMg");
	this.shape_84.setTransform(228,8.8,0.891,0.886);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AANAVIAAgeIgZAeIgGAAIAAgpIAGAAIAAAeIAZgeIAGAAIAAApg");
	this.shape_85.setTransform(223.8,8.9,0.891,0.886);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgNAQQgGgGAAgKQAAgIAGgGQAHgGAIAAQAMAAAFAIIgFADQgFgFgHAAQgFgBgEAFQgFAEAAAGQAAAHAFAEQAEAEAGAAQAIAAAEgGIAFAEQgFAIgMABQgJAAgHgGg");
	this.shape_86.setTransform(219.9,8.8,0.891,0.886);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgNASQgEgEAAgFQAAgMATAAIAKABQAAgMgLAAQgGAAgGAEIgDgEQAGgHAJABQARAAAAARIAAAYIgGAAIAAgGQgFAHgJAAQgHAAgEgEgAgKAIQAAAIAKgBQAIABAEgJIAAgEIgJgBQgNAAAAAGg");
	this.shape_87.setTransform(215.9,8.8,0.891,0.886);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgTAVIAAgHQAEAAACgEQAEgGAAgPIAAgJIAdAAIAAApIgHAAIAAgiIgQAAIAAABQAAATgEAIQgEAGgHAAIgBAAg");
	this.shape_88.setTransform(211.9,8.9,0.891,0.886);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgOAVIAAgpIAdAAIAAAGIgWAAIAAAjg");
	this.shape_89.setTransform(209,8.9,0.891,0.886);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgPAPQgGgGAAgJQAAgJAGgFQAHgHAIABQAKgBAGAHQAGAFAAAJQAAAJgGAGQgGAGgKABQgIgBgHgGgAgKgKQgEAEAAAGQAAAHAEAEQAEAEAGAAQAGAAAEgEQAFgFAAgGQAAgGgFgEQgEgFgGABQgFgBgFAFg");
	this.shape_90.setTransform(205,8.8,0.891,0.886);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgRAVQgHgIAAgNQgBgLAIgIQAIgJAMAAQAPAAAGAKIgEAEQgIgHgJAAQgIAAgGAGQgGAGAAAJQABAKAFAGQAGAGAJAAQALAAAGgIIAEAFQgHAKgOAAQgMAAgJgIg");
	this.shape_91.setTransform(200.6,8.2,0.891,0.886);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgBAAIAAAAIAOgQIAEAEIgLAMIALANIgEAEgAgQAAIAAAAIAOgQIAEAEIgKAMIAKANIgEAEg");
	this.shape_92.setTransform(196.2,8.9,0.891,0.886);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AAOAcIgYgaIgGAGIAAAUIgGAAIAAg3IAGAAIAAAbIAcgbIAKAAIgaAZIAcAeg");
	this.shape_93.setTransform(190.1,8.2,0.891,0.886);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgRAVQgHgIAAgNQAAgLAHgIQAIgJAMAAQAPAAAGAKIgEAEQgIgHgJAAQgJAAgFAGQgGAGAAAJQAAAKAGAGQAGAGAJAAQALAAAGgIIAEAFQgIAKgOAAQgMAAgIgIg");
	this.shape_94.setTransform(185.1,8.2,0.891,0.886);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgBAAIAAAAIAOgQIAEAEIgLAMIALANIgEAEgAgQAAIAAAAIAOgQIAEAEIgKAMIAKANIgEAEg");
	this.shape_95.setTransform(180.6,8.9,0.891,0.886);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgTAVQgJgJAAgMQAAgLAJgIQAIgJALAAQAMAAAJAIQAHAJABALQgBANgHAIQgJAIgMAAQgLAAgIgIgAgNgPQgHAHAAAIQAAAJAHAHQAFAGAIAAQAJAAAGgGQAGgGAAgKQAAgIgGgHQgGgGgJAAQgIAAgFAGg");
	this.shape_96.setTransform(173.8,8.2,0.891,0.886);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgTAVQgIgIAAgNQAAgLAIgIQAIgJALAAQAMAAAIAIQAJAJgBALQABANgJAIQgIAIgMAAQgLAAgIgIgAgOgPQgGAHAAAIQAAAKAGAGQAGAGAIAAQAJAAAGgGQAGgGAAgKQAAgIgGgHQgHgGgIAAQgIAAgGAGg");
	this.shape_97.setTransform(168.2,8.2,0.891,0.886);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgTAVQgJgIAAgNQAAgLAJgIQAIgJALAAQAMAAAIAIQAJAJAAALQAAAMgJAJQgIAIgMAAQgLAAgIgIgAgOgPQgGAHAAAIQAAAKAGAGQAGAGAIAAQAJAAAFgGQAHgGAAgKQAAgIgHgHQgFgGgJAAQgIAAgGAGg");
	this.shape_98.setTransform(162.7,8.2,0.891,0.886);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AkECZQhAhAAAhZQAAhZBAhAQA/g/BaAAQA6AAAxAdQAygdA6AAQBaAAA/BAQBABAAABYQAABZhABAQg/BAhagBQg5AAgzgcQgxAdg6AAQhaAAg/hAgACZhdQAbAbAAAmQAAAPgFANQgYBQhaBHQAZAIAYAAQBCAAAuguQAugwAAhBQAAhBguguQgugvhCAAQggAAgdAMQgOAFgWAMQgpAYgmAmQg2A4AAAlIAAACQAAAOAKAKQAKALAPAAQAVAAAJgTIA+h3IAAAAQANgVAVgMQAVgMAZAAQAmAAAcAbgAjbhvQgvAuABBBQgBBBAvAwQAuAuBCAAQAgAAAcgMIABAAIAjgRQAqgZAlgmQA2g3AAgmIAAgCQAAgOgKgLQgKgJgPgBQgVABgKATIAAAAIgBACIg7B0QgNAVgWAMQgWANgYAAQgmAAgcgbQgbgbAAgnQAAgOAEgOIAAAAQAYhPBchHQgYgIgZAAQhCAAguAvg");
	this.shape_99.setTransform(23.7,16.9,0.533,0.533);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgcAiQgNgOAAgUQAAgTAMgNQANgNARAAQATAAALAOQALANAAATIAAAEIhFAAQABAOAJAIQAJAIALAAQAPAAANgNIAIAIQgQAQgVAAQgRAAgNgMgAAdgEQgCgNgHgIQgHgJgNAAQgKAAgIAIQgIAJgBANIA4AAIAAAAg");
	this.shape_100.setTransform(146.9,31,0.533,0.533);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AAaAsIAAhFIg0BFIgMAAIAAhXIANAAIAABFIAzhFIANAAIAABXg");
	this.shape_101.setTransform(141.3,31,0.533,0.533);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AAaAsIAAgnIgyAAIAAAnIgOAAIAAhXIAOAAIAAAmIAyAAIAAgmIANAAIAABXg");
	this.shape_102.setTransform(135.5,31,0.533,0.533);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgbAnQgLgIAAgNQAAgOALgGQAKgIARAAQAMAAAOAEIAAgDQAAgYgaAAQgNAAgNAHIgEgLQAQgIAPAAQATAAAJAKQAKAKAAAQIAAA1IgNAAIAAgNQgMAPgTAAQgOAAgIgHgAgZASQABAIAGAFQAGAEAKAAQALAAAIgGQAJgHAAgKIAAgJQgPgDgLAAQgYAAgBASg");
	this.shape_103.setTransform(129.9,31,0.533,0.533);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AglAsIAAhXIApAAQAOAAAIAGQAHAGAAAKQAAANgOAHQATAEAAARQAAALgJAHQgJAGgOAAgAgYAhIAcAAQAVAAAAgPQAAgOgWAAIgbAAgAgYgFIAaAAQASAAAAgPQAAgMgSAAIgaAAg");
	this.shape_104.setTransform(124.9,31,0.533,0.533);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AggAhQgNgOAAgTQAAgSANgOQAOgNASAAQATAAAOANQANAOAAASQAAATgNANQgNAOgUAAQgTAAgNgNgAgXgYQgJAKAAAOQAAAOAKAKQAJAKANAAQAOAAAKgKQAIgKABgOQAAgOgKgKQgKgKgNAAQgOAAgJAKg");
	this.shape_105.setTransform(119.1,31,0.533,0.533);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AAbAsIgbgkIgbAkIgOAAIAigsIghgrIAPAAIAZAiIAagiIAPAAIgiArIAjAsg");
	this.shape_106.setTransform(113.9,31,0.533,0.533);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgcAnQgKgIAAgNQAAgOAKgGQALgIARAAQAMAAAOAEIAAgDQAAgYgaAAQgNAAgNAHIgEgLQAQgIAPAAQATAAAKAKQAJAJAAARIAAA1IgNAAIAAgNQgMAPgTAAQgNAAgKgHgAgSAFQgHAEAAAJQAAAIAHAFQAGAEAKAAQALAAAIgGQAJgHAAgKIAAgJQgPgDgLAAQgLAAgHAFg");
	this.shape_107.setTransform(108.5,31,0.533,0.533);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgrA7IAAhzIAMAAIAAASQANgUAUAAQARAAAMAMQANAOABAUQgBAUgNANQgMAMgRAAQgUAAgNgSIAAAsgAgVgkQgKAJAAAPQAAAOAKAKQAJAKAMAAQANAAAJgJQAJgKAAgPQAAgPgJgKQgJgJgNAAQgMAAgJAKg");
	this.shape_108.setTransform(103,31.6,0.533,0.533);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgGAsIAAhMIgfAAIAAgLIBLAAIAAALIgfAAIAABMg");
	this.shape_109.setTransform(97.5,31,0.533,0.533);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgbAhQgNgOAAgTQAAgSANgOQANgNATAAQAUAAAPAQIgIAIQgNgNgOAAQgNAAgJAKQgJAKAAAOQAAAOAJAKQAJAKANAAQAPAAAMgNIAJAIQgQARgUAAQgTAAgNgNg");
	this.shape_110.setTransform(92.7,31,0.533,0.533);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AhHBYQglgkAAg0QAAgzAlgkQAlglAyAAQAyAAAkAjIgeAqIgCACQgUgWgfAAQgbAAgUAUQgUAUAAAbQAAAcAUAVQAUATAbAAQAZAAAUgRIAAAAIAFgEIAoAlQgmApg3AAQgyAAglglg");
	this.shape_111.setTransform(115.4,16.9,0.533,0.533);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AA2BsQgegTgQgfQgRAXgWAQQgRANgWAIQgYAIgVAAIgPAAQg0gEgigoQgignADgzQAEg1AogiQAngiA1AEQAuADAhAiIgkAyQgSgYgegDQgbgCgVASQgUASgCAbQgCAcASAUQATAVAhAAQAuAAAng3QAWgcAcg1QASgZAbgOQAcgPAgAAQA0AAAlAlQAlAlAAA0QAAA0glAlQglAlg0AAQglAAgfgTgABVg1QgQALgIASQgFAMAAANQAAANAFAMQAIASAQALQAQALAVAAQAIAAALgDQAUgGANgRQANgSAAgVQAAgVgNgSQgNgRgUgGQgLgDgIAAQgVAAgQALg");
	this.shape_112.setTransform(57.4,16.9,0.533,0.533);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AhjB5IAAjxIDGAAIAAA5IiKAAIAAApIB+AAIAAAuIh+AAIAAAuICMAAIAAAzg");
	this.shape_113.setTransform(143.7,16.9,0.533,0.533);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AA1B5IAAiMIhrCMIg7AAIAAjxIA9AAIAACPIBsiPIA5AAIAADxg");
	this.shape_114.setTransform(129.3,16.9,0.533,0.533);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("ABCB6IgTgtIheAAIgTAtIhBAAIBmjzIA7AAIBlDzgAAdAeIgdhLIgeBLIA7AAg");
	this.shape_115.setTransform(102.4,16.9,0.533,0.533);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AhWB5IAAjyICtAAIAAA2IhvAAIAAC8g");
	this.shape_116.setTransform(77,16.9,0.533,0.533);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AA5B5IAAi9Ig+AAIAAAQQAABigzAvQgcAagiACIAAg1QAggKAMgjQAMgjAAhPIAAgeIC1AAIAADyg");
	this.shape_117.setTransform(87.8,16.9,0.533,0.533);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#EA600A").s().p("A3oKYIAA0vMAvSAAAIAAUvg");
	this.shape_118.setTransform(150,25,0.991,0.377,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fg, new cjs.Rectangle(0,0,300.1,50), null);


(lib.cloud = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA600A").s().p("AgdAPQgGAAgFgEQgEgFAAgGQAAgFAEgFQAFgEAGAAIA7AAQAGAAAEAEQAFAFAAAFQAAAGgFAFQgEAEgGAAg");
	this.shape.setTransform(91.6,41.6,0.666,0.666);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EA600A").s().p("AgbAPQgGAAgEgFQgFgEAAgGQAAgGAFgDQAEgFAGAAIA2AAQAHAAAEAFQAEADABAGQgBAGgEAEQgEAFgHAAg");
	this.shape_1.setTransform(63.7,35.7,0.666,0.666);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EA600A").s().p("AjYAPQgHAAgEgFQgEgEAAgGQAAgGAEgDQAEgFAHAAIGyAAQAFAAAFAFQAFADAAAGQAAAGgFAEQgFAFgFAAg");
	this.shape_2.setTransform(85.7,35.7,0.666,0.666);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EA600A").s().p("An+APQgHAAgEgEQgEgFAAgGQAAgFAEgFQAEgEAHAAIP9AAQAGAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgGAAg");
	this.shape_3.setTransform(50.5,41.6,0.666,0.666);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EA600A").s().p("ACiCyQgEgEgBgGQgCgGAEgFQAkgzAAg+QgBhPg4g5Qg6g5hQgBQg7AAgyAiQgvAggXA1QgPAjAAAoQAAAHgFAEQgEAEgGAAQgHAAgDgEQgFgEAAgHQAAgtARgpQAbg+A3glQA5gnBEAAQBdAABCBCQBCBCAABcQAABIgpA6QgGAHgHAAQgEAAgFgDg");
	this.shape_4.setTransform(67.2,24.7,0.666,0.666);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EA600A").s().p("Ak0CjQgFgEAAgHQAAhOAkhFQAphOBLgtQBNgxBaABQBsgBBWBCQBUBAAdBkQACAGgDAFQgDAGgGABQgGACgFgDQgGgCgCgHQgahahNg6QhNg7hiAAQhRAAhGArQhEAqglBFQghA/AABHQAAAHgEAEQgFAEgGABQgGgBgEgEg");
	this.shape_5.setTransform(40.2,11.2,0.666,0.666);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EA600A").s().p("AhnCvQhIhIAAhnQAAhlBIhJQBJhIBlAAQAyAAAuATQAGADADAGQACAFgDAGQgCAFgGADQgGACgFgCQgogRgtAAQhZAAhAA/Qg/BAAABZQAABaA/BAQBAA/BZAAQAGAAAFAFQAEAFAAAFQAAAHgEAEQgFAFgGAAQhlgBhJhIg");
	this.shape_6.setTransform(11.7,26.2,0.666,0.666);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cloud, new cjs.Rectangle(0,0,101.2,42.7), null);


(lib.ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA600A").s().p("AgEAFQgDgCAAgDQAAgCADgCQACgDACAAQADAAACADQADACAAACQAAADgDACQgCADgDAAQgCAAgCgDg");
	this.shape.setTransform(55.2,78.6,0.599,0.599);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EA600A").s().p("AgFAGQgCgCAAgEQAAgDACgCQADgCACAAQADAAADACQACADAAACQAAADgCADQgCACgEAAQgDAAgCgCg");
	this.shape_1.setTransform(46,86.1,0.599,0.599);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EA600A").s().p("AgFAGQgCgDAAgDQAAgDACgCQACgCADAAQAEAAACACQACACAAADQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_2.setTransform(68.7,155.1,0.599,0.599);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EA600A").s().p("AgEAFQgCgCAAgDQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQACgCACAAQABAAABAAQAAABABAAQAAAAABAAQAAABABAAQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAQAAADgCACQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQgCAAgCgCg");
	this.shape_3.setTransform(102.2,83.2,0.599,0.599);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EA600A").s().p("AgEAFQgCgCAAgDQAAgCACgCIAEgCQABAAAAAAQABAAABABQAAAAABAAQAAABABAAQACACAAACQAAADgCACQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAIgEgCg");
	this.shape_4.setTransform(106.5,87,0.599,0.599);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EA600A").s().p("AgDAEQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_5.setTransform(74.4,156.3,0.599,0.599);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EA600A").s().p("AgGAHQgCgEAAgDQAAgCACgEQADgCADAAQADAAADACQADADAAADQAAAEgDADQgDACgDAAQgDAAgDgCg");
	this.shape_6.setTransform(92,153.6,0.599,0.599);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EA600A").s().p("AgFAGQgDgCAAgEQAAgDADgCQACgDADAAQAEAAACADQADACAAADQAAAEgDACQgCADgEAAQgDAAgCgDg");
	this.shape_7.setTransform(92.4,158.7,0.599,0.599);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EA600A").s().p("AgFAGQgCgCAAgEQAAgCACgDQADgCACAAQADAAADACQACADAAACQAAAEgCACQgCACgEAAQgDAAgCgCg");
	this.shape_8.setTransform(92.9,165.6,0.599,0.599);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EA600A").s().p("AgEAFQgDgCAAgDQAAgCADgCQADgCABAAIAFACQADACAAACQAAADgDACQgCACgDAAQgCAAgCgCg");
	this.shape_9.setTransform(101.3,162.7,0.599,0.599);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EA600A").s().p("AgEAEQAAAAgBAAQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBQABAAAAgBQACgCACAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAQABABAAABQABAAAAABQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgCgBgCgCg");
	this.shape_10.setTransform(56.8,134,0.599,0.599);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EA600A").s().p("AgDAFIgDgFIADgEIADgCIAFACIACAEQgBADgBACIgFACIgDgCg");
	this.shape_11.setTransform(62.5,133.6,0.599,0.599);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EA600A").s().p("AgEAFQgDgBAAgEQAAgCADgDQACgCACAAQAEAAABACQADADAAACQAAAEgDABQgBACgEABQgCgBgCgCg");
	this.shape_12.setTransform(36.5,98.7,0.599,0.599);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EA600A").s().p("AgEAFQgCgCgBgDQABgCACgCQABgDADAAQADAAACADQACACABACQAAADgDACQgCADgDAAQgDAAgBgDg");
	this.shape_13.setTransform(32.8,98.5,0.599,0.599);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EA600A").s().p("AgEAEQAAAAAAAAQgBgBAAAAQAAgBAAgBQgBAAAAgBQAAAAABAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_14.setTransform(58,88.5,0.599,0.599);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EA600A").s().p("AgEAFQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAgBAAgBQAAAAAAgBQABAAAAAAQACgCACAAQABAAAAAAQABAAABAAQAAAAABABQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBABQAAAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgCAAgCgBg");
	this.shape_15.setTransform(61.2,86.8,0.599,0.599);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EA600A").s().p("AgEAFQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAgCACgCQACgCACAAQABAAAAAAQABAAABABQAAAAABAAQAAABABAAQACACAAACQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAgBAAQgCAAgCgCg");
	this.shape_16.setTransform(68.4,82.3,0.599,0.599);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EA600A").s().p("AgEAFQgCgCAAgDQAAgCACgCQABAAAAgBQABAAAAAAQABgBABAAQAAAAAAAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQAAAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_17.setTransform(73.2,83,0.599,0.599);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EA600A").s().p("AgEAFQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAgCACgCQACgCACAAQABAAABAAQAAAAABABQAAAAABAAQAAABABAAQACACAAACQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAgBAAQgCAAgCgCg");
	this.shape_18.setTransform(76.7,83.5,0.599,0.599);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EA600A").s().p("AgEAFQgCgCAAgDQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQACgCACAAQABAAABAAQAAABABAAQAAAAABAAQAAABABAAQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAQAAADgCACQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQgCAAgCgCg");
	this.shape_19.setTransform(58.6,160.3,0.599,0.599);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EA600A").s().p("AgEAFQgCgCAAgDQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQACgCACAAQABAAABAAQAAABABAAQAAAAABAAQAAABABAAQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAQAAADgCACQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQgCAAgCgCg");
	this.shape_20.setTransform(63.3,161.3,0.599,0.599);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EA600A").s().p("AgEAFIgCgFIACgEIAEgCIAFACIACAEIgCAFIgFACIgEgCg");
	this.shape_21.setTransform(67.8,164.8,0.599,0.599);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EA600A").s().p("AgEAGQgDgDAAgDQAAgCADgDQACgCACAAQADAAADACQACACAAADQAAAEgCACQgDACgDAAQgCAAgCgCg");
	this.shape_22.setTransform(114,109.9,0.599,0.599);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EA600A").s().p("AgFAGQgCgCAAgEQAAgDACgCQACgCADAAQADAAADACQACACAAADQAAAEgCACQgDACgDAAQgDAAgCgCg");
	this.shape_23.setTransform(109.3,131.4,0.599,0.599);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EA600A").s().p("AgFAGQgCgCAAgEQAAgDACgCQACgCADAAQAEAAACACQACACAAADQAAADgCADQgCACgEAAQgDAAgCgCg");
	this.shape_24.setTransform(114,115.5,0.599,0.599);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EA600A").s().p("AgFAGQgCgCAAgEQAAgDACgCQADgCACAAQADAAACACQADADAAACQAAADgDADQgCACgDAAQgCAAgDgCg");
	this.shape_25.setTransform(118.5,113.7,0.599,0.599);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EA600A").s().p("AgFAGQgCgDAAgDQAAgCACgDQADgCACAAQADAAADACQACADAAACQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_26.setTransform(75.3,75.3,0.599,0.599);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EA600A").s().p("AgEAFIgCgFIACgEQADgCABAAIAFACIACAEIgCAFIgFACIgEgCg");
	this.shape_27.setTransform(100.1,80.8,0.599,0.599);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EA600A").s().p("AgEAFQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBQAAgCACgCQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQADAAACACQACACAAACQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgCACgDAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_28.setTransform(93.5,78.6,0.599,0.599);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EA600A").s().p("AgEAFQgCgCAAgDQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQACgCACAAQABAAABAAQAAABABAAQAAAAABAAQAAABABAAQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAQAAADgCACQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQgCAAgCgCg");
	this.shape_29.setTransform(86.3,77,0.599,0.599);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EA600A").s().p("AgEAFQgDgCAAgDQABgCACgCQABgCADAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQgDAAgBgCg");
	this.shape_30.setTransform(81.5,76.7,0.599,0.599);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EA600A").s().p("AgEAFQgCgCAAgDQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQADAAACACQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQAAADgCACQgCACgDAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_31.setTransform(90.1,77.8,0.599,0.599);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EA600A").s().p("AgJBCQgHgBgCgHIgJgfIgegLQgHgCgBgIQgBgGAGgEIAbgSIABgiQABgKALAAIACAAIAFADIAYAUIAfgJQAIgCAEAFQAFAFgCAHIgMAfIATAZQAEAGgDAGQgEAIgHgBIghgCIgTAaQgCAEgHAAgAgTgSQAAADgDADIgbAQIAeALQADACACADIAIAfIATgaQACgCADgBIAhACIgTgaQgCgCABgEIAMgfIgfAKQgEACgCgDIgZgUg");
	this.shape_32.setTransform(27.8,97.8,0.599,0.599);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EA600A").s().p("AgIAwIgMgXIgagDQgGgBgDgGQgBgHAEgFIASgRIgFgbQAAgEADgEQADgDAFAAIAFABIAXALIAWgMQAFgDAGADQAGAEgBAHIgEAaIATAQQAFAFgCAGQgCAHgHABIgZAEIgLAYQgDAFgHABQgGAAgDgGgAgUgNQAAAEgCACIgRAQIAYADQAEABABADIALAWIAKgXQABgCAEgBIAYgEIgSgQQgDgDABgDIAEgYIgWAMQgCABgDgBIgWgLg");
	this.shape_33.setTransform(69.3,160.5,0.599,0.599);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EA600A").s().p("AgFAhIgIgQIgSgCQgEAAgCgFQgBgEADgDIAMgMIgDgRIAAgBQAAgEACgCIAFgCIAAAAIADABIAQAIIAPgJQAEgCADADQAEACAAAFIgDARIANALQADAEgBAEQgCAEgEABIgRADIgIAQQgCAEgFAAQgDAAgCgEgAgNgIQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABIgLALIAQACIAEACIAGAPIAHgPQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAQgDIgMgKQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIACgQIgOAIQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAIgPgIg");
	this.shape_34.setTransform(54.4,132.2,0.599,0.599);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EA600A").s().p("AgHAtIgLgVIgZgDQgGgBgCgGQgCgFAEgFIASgRIgFgZQAAgEADgDQADgDAEgBQAAAAABAAQAAAAABABQABAAAAAAQABAAAAABIAWAKIAVgLQAFgDAFADQAFAEgBAGIgDAYIASAQQAEAEgCAGQgBAGgHABIgYAEIgKAWQgDAGgGAAQgFAAgDgGgAgTgMQAAAEgCACIgQAPIAXADQADAAACADIAKAVIAKgVQABgDADAAIAXgEIgRgPQgCgDAAgDIAEgXIgVAMQgCABgCgBIgVgLg");
	this.shape_35.setTransform(124,103.4,0.599,0.599);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EA600A").s().p("AgFAgIgIgPIgSgCQgEgBgBgEQgCgEADgEIAMgLIgDgSQAAgDACgDQADgCADAAIADABIAPAIIAOgJQAFgBADACQAFADgBAEIgDARIANALQADADgCAEQgBAFgFABIgRACIgHAQQgCAEgFAAQgEAAgBgEgAgNgIQAAAAAAABQAAABAAAAQgBABAAAAQAAAAgBABIgLAKIARACQAAAAAAAAQABABAAAAQABAAAAABQABAAAAABIAGAOIAIgPQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAIARgDIgMgKQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBIADgQIgPAIQAAAAgBABQAAAAAAAAQAAAAAAAAQgBgBAAAAIgPgHg");
	this.shape_36.setTransform(71.4,71.8,0.599,0.599);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EA600A").s().p("AghAvIAAgGIACgZIgTgQQgFgDACgHQABgFAHgCIAZgGIAJgXQADgGAHAAIAAAAQAGgBACAGIANAWIAZACQAGAAADAHQACAGgEAFIgRASIAGAYQABAHgFAEQgFADgGgCIgXgKIgWANIgEACQgHgBgDgGgAgKgOQgBACgDABIgYAGIASAOQADABAAAEIgDAYIAUgNQACgBADABIAWAKIgGgXQAAgEACgCIAQgRIgYgCQgDAAgCgCIgKgVg");
	this.shape_37.setTransform(42.1,68.1,0.599,0.599);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EA600A").s().p("AgEAFQgCgCAAgDQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQADAAACACQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQAAADgCACQgCACgDAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_38.setTransform(95.6,63,0.599,0.599);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EA600A").s().p("AhzBqQhFgrgcg2QgRgfACgiQACgiAUgbQAfgrA4AAQAVAAAWAHQAgAKAYAfQAPASAVApIAJARQAfA3AwArQAvArBIAkQAFACgBAGQgBAFgGABQg5AGguAAQiMAAhdg3gAjBhsQgRAXgBAeQgCAeAPAcQAZAyBCAoQBYA1CJAAQAmAAAmgEQhAgjgsgqQgsgpgdg1IgKgRQgTgngOgRQgWgbgbgKQgUgGgTAAQgwAAgbAlg");
	this.shape_39.setTransform(68.7,25.3,0.599,0.599);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EA600A").s().p("AoBDqQhGghguhCQgCgCABgEQABgDACgCQADgCADABQADABACACQAsA/BCAfQBAAeBNgFQCGgGCShxQA0goBfhaQAzgwAlghQBCg7A9gmQBKgtBHgTQBegYBsAQQAIABgBAIQgBAEgCACQgDACgDgBQhqgQhaAYQh8AgiOB9QgnAjgwAtQhdBZg3AqQiWB0iMAHIgTABQhHAAg6gcg");
	this.shape_40.setTransform(46.1,49.9,0.599,0.599);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EA600A").s().p("AjcCbQgGgBgBgFQgBgGAFgCQBIgkAwgrQAvgrAfg3IAJgRQAVgpAPgSQAYgfAggKQAWgHAVAAQA4AAAfArQAUAbACAiQABAigQAfQgcA2hFArQhdA3iMAAQguAAg5gGgABQiLQgbAKgWAbQgOARgUAnIgJARQgdA1gsApQgsAqhAAjQAmAEAmAAQCJAABYg1QBCgpAZgxQAPgcgCgeQgBgegRgXQgbglgwAAQgTAAgUAGg");
	this.shape_41.setTransform(96.1,25.3,0.599,0.599);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EA600A").s().p("AFuEGQiMgIiWh0Qg2gqhdhaQg1gwgjgfQiOh+h8ghQhcgXhoAPQgDABgDgCQgDgCAAgDQgBgIAIgBQBrgRBfAZQBMAUBPAzQA2AjA/A4IBZBRQBcBYA2AqQCSBxCHAHQBOAEA/gdQBBgfAsg+QACgDADAAQAEgBACACQADACABADQAAADgCADQguBDhFAfQg8AchEAAIgVgBg");
	this.shape_42.setTransform(118.9,50,0.599,0.599);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EA600A").s().p("AgEAFQgCgCAAgDQAAgCACgCQACgCACAAQABAAAAAAQABAAABABQAAAAABAAQAAABABAAQACACAAACQAAADgCACQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_43.setTransform(119.6,77.6,0.599,0.599);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EA600A").s().p("AgEAFQgCgCAAgDQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQACgCACAAQABAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAQAAADgCACQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQgCAAgCgCg");
	this.shape_44.setTransform(115.8,79.8,0.599,0.599);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EA600A").s().p("AgEAFQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgCACgCQACgCACAAQADAAACACQACACAAACQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgCACgDAAQgCAAgCgCg");
	this.shape_45.setTransform(120.5,81,0.599,0.599);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EA600A").s().p("AgEAFQgCgCAAgDQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQACgCACAAQABAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAQAAADgCACQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAgBAAQgCAAgCgCg");
	this.shape_46.setTransform(94.7,53.2,0.599,0.599);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#EA600A").s().p("AgEAFIgCgFIACgEIAEgCIAFACIACAEIgCAFIgFACQgBAAgDgCg");
	this.shape_47.setTransform(95.9,49.1,0.599,0.599);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EA600A").s().p("AgEAFIgCgFQAAAAAAAAQAAgBAAgBQABAAAAgBQAAAAABgBQACgCACAAQADAAACACQABABAAAAQAAABABAAQAAABAAABQAAAAAAAAIgCAFIgFACIgEgCg");
	this.shape_48.setTransform(91.6,51.4,0.599,0.599);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#EA600A").s().p("AgEAFQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAgCACgCQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQADAAACACQACACAAACQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgCACgDAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_49.setTransform(109.1,81.4,0.599,0.599);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EA600A").s().p("AgEAFQgCgCAAgDQAAgCACgCQABgBAAAAQABAAAAgBQABAAABAAQAAAAAAAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQAAAAAAAAQgBAAgBAAQAAgBgBAAQAAgBgBAAg");
	this.shape_50.setTransform(105.3,83.6,0.599,0.599);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EA600A").s().p("AgEAFIgCgFIACgEIAEgCIAFACIACAEIgCAFIgFACIgEgCg");
	this.shape_51.setTransform(110,84.8,0.599,0.599);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EA600A").s().p("AgEAFIgCgFIACgEIAEgCIAFACIACAEIgCAFIgFACQgBAAgDgCg");
	this.shape_52.setTransform(44,73.6,0.599,0.599);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EA600A").s().p("AgEAFQgCgCAAgDQAAAAAAAAQAAgBAAgBQABAAAAgBQAAAAABgBQACgCACAAQADAAACACQAAABABAAQAAABAAAAQABABAAABQAAAAAAAAQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_53.setTransform(46.2,76,0.599,0.599);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EA600A").s().p("AgEAFQgCgCAAgDQAAgCACgCQABAAAAgBQABAAAAAAQABgBABAAQAAAAAAAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQAAAAAAAAQgBAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_54.setTransform(50.7,75.3,0.599,0.599);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EA600A").s().p("AgEAFQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAgCACgCQACgCACAAQABAAABAAQAAABABAAQAAAAABAAQAAABABAAQACACAAACQAAABAAABQgBAAAAABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQgCAAgCgCg");
	this.shape_55.setTransform(47.9,73.4,0.599,0.599);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EA600A").s().p("AgEAFIgCgFIACgEIAEgCIAFACIACAEIgCAFQgDACgCAAIgEgCg");
	this.shape_56.setTransform(100.1,51,0.599,0.599);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EA600A").s().p("AgEAFQgCgCAAgDQAAAAAAAAQAAgBAAgBQABAAAAgBQAAAAABgBQACgCACAAQADAAACACQAAABABAAQAAABAAAAQABABAAABQAAAAAAAAQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_57.setTransform(101.5,53.8,0.599,0.599);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EA600A").s().p("AgEAFQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgCACgCQACgCACAAQADAAACACQACACAAACQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQgCACgDAAQgCAAgCgCg");
	this.shape_58.setTransform(106.3,54,0.599,0.599);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EA600A").s().p("AgEAFIgCgFIACgEIAEgCIAFACIACAEIgCAFIgFACIgEgCg");
	this.shape_59.setTransform(104,51.6,0.599,0.599);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EA600A").s().p("AgEAFQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAgCACgCQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQADAAACACQACACAAACQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgCACgDAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_60.setTransform(50,132.2,0.599,0.599);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EA600A").s().p("AgEAFQgCgCAAgDQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQADAAACACQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQAAADgCACQgCACgDAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_61.setTransform(50.6,136.2,0.599,0.599);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EA600A").s().p("AgEAFQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgCACgCQACgCACAAQADAAACACQACACAAACQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgCACgDAAQgCAAgCgCg");
	this.shape_62.setTransform(55,137.4,0.599,0.599);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EA600A").s().p("AgEAFQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAgCACgCQABAAAAgBQABAAAAAAQABAAABgBQAAAAAAAAQADAAACACQACACAAACQAAABAAABQgBAAAAABQAAAAAAABQgBAAAAABQgCACgDAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_63.setTransform(53.2,134.5,0.599,0.599);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EA600A").s().p("AgEAFQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIACgEQACgCACAAQADAAACACIACAEQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgCACgDAAQgCAAgCgCg");
	this.shape_64.setTransform(55.9,119.8,0.599,0.599);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EA600A").s().p("AgEAFQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBQAAgCACgCQACgCACAAQABAAABAAQAAAAABABQAAAAABAAQAAABABAAQACACAAACQAAABAAABQgBAAAAABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAgBAAQgCAAgCgCg");
	this.shape_65.setTransform(65.6,141.4,0.599,0.599);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#EA600A").s().p("AgEAFQgCgCAAgDQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQADAAACACQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAQAAADgCACQgCACgDAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_66.setTransform(65.8,136.9,0.599,0.599);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#EA600A").s().p("AgEAFIgCgFIACgEIAEgCIAFACIACAEIgCAFIgFACIgEgCg");
	this.shape_67.setTransform(59.7,136.4,0.599,0.599);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#EA600A").s().p("AgFAGQgCgDAAgDQAAgCACgDQADgCACAAQADAAADACQACADAAACQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_68.setTransform(32.1,125.5,0.599,0.599);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#EA600A").s().p("AgFAGQgCgDAAgDQAAgCACgDQADgCACAAQADAAADACQACADAAACQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_69.setTransform(44.5,122,0.599,0.599);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#EA600A").s().p("AgFAGQgCgDAAgDQAAgCACgDQADgCACAAQADAAADACQACADAAACQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_70.setTransform(39.6,124.4,0.599,0.599);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#EA600A").s().p("AgFAGQgCgDAAgDQAAgCACgCQADgDACAAQADAAADADQACACAAACQAAADgCADQgCACgEAAQgDAAgCgCg");
	this.shape_71.setTransform(43.3,125.1,0.599,0.599);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#EA600A").s().p("AgEAGQgDgDAAgDQAAgCADgDQACgCACAAQADAAADACQACACAAADQAAAEgCACQgDACgDAAQgCAAgCgCg");
	this.shape_72.setTransform(36,126,0.599,0.599);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#EA600A").s().p("AgEAFQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAgCACgCQABAAAAgBQABAAAAAAQABAAABgBQAAAAAAAAQADAAACACQACACAAACQAAABAAABQgBAAAAABQAAAAAAABQgBAAAAABQgCACgDAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_73.setTransform(118.6,60.4,0.599,0.599);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#EA600A").s().p("AgEAFQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBQAAgCACgCQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQADAAACACQACACAAACQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgCACgDAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_74.setTransform(121.8,62.7,0.599,0.599);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EA600A").s().p("AgEAFQgCgCAAgDQAAgCACgCQABgBAAAAQABAAAAgBQABAAABAAQAAAAAAAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQAAAAAAAAQgBAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_75.setTransform(124.5,66.3,0.599,0.599);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EA600A").s().p("AgEAFQgCgCAAgDQAAgCACgCIAEgCQABAAAAAAQABAAABABQAAAAABAAQAAABABAAQACACAAACQAAADgCACQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAIgEgCg");
	this.shape_76.setTransform(124.4,69.4,0.599,0.599);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EA600A").s().p("AgEAFQAAgBgBAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAgCACgCQACgCACAAQADAAACACQACACAAACQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQgCACgDAAQgCAAgCgCg");
	this.shape_77.setTransform(128.7,71.8,0.599,0.599);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#EA600A").s().p("AgEAFQgCgCAAgDQAAgCACgCQABAAAAgBQABAAAAAAQABgBABAAQAAAAAAAAIAFACQACACAAACQAAADgCACIgFACQAAAAAAAAQgBAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_78.setTransform(127.7,68.6,0.599,0.599);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#EA600A").s().p("AgEAFQgCgCAAgDQAAgCACgCQABgBAAAAQABAAAAgBQABAAABAAQAAAAAAAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQAAAAAAAAQgBAAgBAAQAAgBgBAAQAAgBgBAAg");
	this.shape_79.setTransform(131.7,73.6,0.599,0.599);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EA600A").s().p("AgEAFQAAgBgBAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIACgEIAEgCIAFACIACAEQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgCACgDAAQgCAAgCgCg");
	this.shape_80.setTransform(96.7,74.8,0.599,0.599);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EA600A").s().p("AgEAFIgCgFQAAAAAAAAQAAgBAAgBQABAAAAgBQAAAAABgBQACgCACAAQADAAACACQAAABABAAQAAABAAAAQABABAAABQAAAAAAAAIgCAFQgCACgDAAQgCAAgCgCg");
	this.shape_81.setTransform(97.7,77.8,0.599,0.599);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#EA600A").s().p("AgEAFQgCgCAAgDQAAgCACgCQACgCACAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAACQAAADgCACQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_82.setTransform(102.5,78.7,0.599,0.599);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#EA600A").s().p("AgEAFQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBIACgEQACgCACAAQADAAACACIACAEQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgCACgDAAQgCAAgCgCg");
	this.shape_83.setTransform(100.5,76,0.599,0.599);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#EA600A").s().p("AgEAFIgCgFIACgEIAEgCIAFACQACADAAABIgCAFIgFACIgEgCg");
	this.shape_84.setTransform(105.9,79.4,0.599,0.599);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#EA600A").s().p("AACAuQgDAAgBgEQgHghgfgCQgFAAAAgFQAAgEAFAAQASABAJgKQAHgHAAgOIAAgIQAAgFAEAAQAFgBAAAFIABAIQAEAbAcAAIAEAAQAFAAABAEQAAAEgFABIgBAAQgUACgIAKQgHAKACAPIAAABQAAAFgFAAgAgGgDQgEADgGADQAKAGAFAJIAFgKQAEgFAHgDQgJgEgGgJQgCAGgEAEg");
	this.shape_85.setTransform(94,72.7,0.599,0.599);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#EA600A").s().p("AAcAwQgDAAgCgCIgHgJQgSgYgcAQIgJAFQgFADgDgFQgDgEAEgEIAJgGQAbgUgPgZQgEgEgEgGQgDgFAEgEQAFgEAEAFIAIALQAMANANAAQAJAAAHgEQAFgEAIgEQAFgDADAFQAEAEgFAEQgIAHgEACQgWARAPAaIAGAJIABAEQAAAGgGAAgAgMAKIADAAQAJAAAIAEQgBgMAFgKIgCAAQgJAAgIgEQABAMgGAKg");
	this.shape_86.setTransform(115.3,84.5,0.599,0.599);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#EA600A").s().p("AgFAGQgCgDAAgDQAAgCACgDQADgCACAAQADAAADACQACADAAACQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_87.setTransform(46.3,99.7,0.599,0.599);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#EA600A").s().p("AgFAGQgCgDAAgDQAAgCACgDQADgCACAAQADAAADACQACADAAACQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_88.setTransform(47.7,92.9,0.599,0.599);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#EA600A").s().p("AgEAGQgDgDAAgDQAAgCADgDQABgCADAAQAEAAACACQACADAAACQAAAEgCACQgCACgEAAQgDAAgBgCg");
	this.shape_89.setTransform(43.8,95.6,0.599,0.599);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#EA600A").s().p("AgFAGQgCgDAAgDQAAgCACgDQADgCACAAQADAAADACQACADAAACQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_90.setTransform(48.8,87.9,0.599,0.599);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#EA600A").s().p("AgGAGQgCgDAAgDQAAgCACgDQAEgDACAAQADAAAEADQACADAAACQAAADgCADQgEADgDAAQgCAAgEgDg");
	this.shape_91.setTransform(39,146.6,0.599,0.599);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#EA600A").s().p("AgFAHQgDgCAAgFQAAgDADgDQACgCADAAQAEAAACACQADAEAAACQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_92.setTransform(43.9,145.9,0.599,0.599);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#EA600A").s().p("AgFAGQgDgBAAgFQAAgCADgDQACgDADAAQAEAAACADQADADAAACQAAAEgDACQgCADgEAAQgDAAgCgDg");
	this.shape_93.setTransform(43.6,150.4,0.599,0.599);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#EA600A").s().p("AgEAGQgDgDAAgDQAAgDADgBQACgCACgBQAEABABACQADABAAADQAAADgDADQgBACgEAAQgCAAgCgCg");
	this.shape_94.setTransform(67.6,152.4,0.599,0.599);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#EA600A").s().p("AgEAFQgDgCAAgDQAAgDADgBQACgDACAAQADAAACADQADABAAADQAAADgDACQgCADgDAAQgCAAgCgDg");
	this.shape_95.setTransform(72.5,153.5,0.599,0.599);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#EA600A").s().p("AgFAGQgCgDAAgDQAAgCACgDQADgCACAAQADAAADACQACADAAACQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_96.setTransform(91.3,135.1,0.599,0.599);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#EA600A").s().p("AgFAGQgCgDAAgDQAAgCACgDQADgCACAAQADAAADACQACADAAACQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_97.setTransform(85.7,138.8,0.599,0.599);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#EA600A").s().p("AgFAGQgCgCAAgEQAAgDACgCQADgCACAAQADAAADACQACACAAADQAAAEgCACQgDACgDAAQgCAAgDgCg");
	this.shape_98.setTransform(87.5,143.8,0.599,0.599);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#EA600A").s().p("AgFAGQgCgDAAgDQAAgCACgDQADgCACAAQADAAADACQACADAAACQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_99.setTransform(81.6,135.5,0.599,0.599);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#EA600A").s().p("AgFAGQgCgDAAgDQAAgCACgDQADgCACAAQADAAADACQACADAAACQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_100.setTransform(78.1,139.5,0.599,0.599);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#EA600A").s().p("AgEAFQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIACgEQACgCACAAQADAAACACIACAEQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQgCACgDAAQgCAAgCgCg");
	this.shape_101.setTransform(94.7,83.6,0.599,0.599);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#EA600A").s().p("AgEAFIgCgFIACgEIAEgCIAFACIACAEQAAACgCADIgFACIgEgCg");
	this.shape_102.setTransform(98.1,82.3,0.599,0.599);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#EA600A").s().p("AgEAFQgCgCAAgDQAAAAAAAAQAAgBABgBQAAAAAAgBQABAAAAgBQACgCACAAQACAAADACQAAABABAAQAAABAAAAQAAABABABQAAAAAAAAQAAADgCACIgFACQAAAAAAAAQgBAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_103.setTransform(89.7,80.7,0.599,0.599);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#EA600A").s().p("AgEAFQgCgCAAgDQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQADAAACACQAAABABAAQAAABAAAAQAAABABABQAAAAAAAAIgCAFQgCACgDAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_104.setTransform(47.3,115.3,0.599,0.599);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#EA600A").s().p("AgEAFQAAgBgBAAQAAgBAAAAQAAgBgBgBQAAAAAAgBIACgEQACgCACAAQABAAABAAQAAABABAAQAAAAABAAQAAABABAAQACACAAACQAAABAAABQgBAAAAABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQgCAAgCgCg");
	this.shape_105.setTransform(49.2,118.4,0.599,0.599);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#EA600A").s().p("AgEAFQgCgCAAgDQAAgCACgCIAEgCQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAACQAAADgCACQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAIgEgCg");
	this.shape_106.setTransform(49.3,109.8,0.599,0.599);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#EA600A").s().p("AgFAFIgCgFQAAgBACgDQACgCADAAQADAAACACQACACABACQgBADgCACQgCACgDAAQgDAAgCgCg");
	this.shape_107.setTransform(102.5,136.8,0.599,0.599);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#EA600A").s().p("AgEAFIgCgFQAAgBACgDQACgCACAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_108.setTransform(104.8,134.1,0.599,0.599);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#EA600A").s().p("AgEAFQgDgCAAgDQAAgCADgCQACgCACAAQAEAAABACQADACAAACQAAADgDACQgCACgDAAQgCAAgCgCg");
	this.shape_109.setTransform(96.7,136.5,0.599,0.599);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#EA600A").s().p("AgEAFQgCgCAAgDQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQADAAACACQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQAAADgCACQgCACgDAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_110.setTransform(59.1,81.2,0.599,0.599);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#EA600A").s().p("AgEAFQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIACgEIAEgCIAFACIACAEQAAABAAAAQAAABAAABQgBAAAAABQgBAAAAABQgCACgDAAQgCAAgCgCg");
	this.shape_111.setTransform(58.3,84.7,0.599,0.599);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#EA600A").s().p("AgEAFQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBQAAgCACgCQABAAAAgBQABAAAAAAQABAAABgBQAAAAAAAAQADAAACACQACACAAACQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgCACgDAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_112.setTransform(64.5,78.8,0.599,0.599);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#EA600A").s().p("AgEAFQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBQAAgCACgCQACgCACAAQABAAABAAQAAAAABABQAAAAABAAQAAABABAAQACACAAACQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAgBAAQgCAAgCgCg");
	this.shape_113.setTransform(70.1,143.5,0.599,0.599);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#EA600A").s().p("AgEAFQgCgCAAgDQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQACgCACAAQABAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAQAAADgCACQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_114.setTransform(73.1,144.5,0.599,0.599);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#EA600A").s().p("AgEAFQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgCACgCQACgCACAAQADAAACACQACACAAACQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgCACgDAAQgCAAgCgCg");
	this.shape_115.setTransform(118.9,148.1,0.599,0.599);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#EA600A").s().p("AgEAFIgCgFQAAgBACgDIAEgCQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAACQAAADgCACQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAIgEgCg");
	this.shape_116.setTransform(121.1,150.2,0.599,0.599);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#EA600A").s().p("AgFAGQgCgDAAgDQAAgDACgBQADgDACAAQADAAACADQADABAAADQAAADgDADQgCACgDAAQgDAAgCgCg");
	this.shape_117.setTransform(67.2,132.4,0.599,0.599);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#EA600A").s().p("AgFAFQgCgCAAgDQAAgDACgCQACgCADAAQADAAACACQADADAAACQAAADgDACQgCADgDAAQgCAAgDgDg");
	this.shape_118.setTransform(70.9,134.9,0.599,0.599);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#EA600A").s().p("AgEAFQgCgCAAgDQAAgCACgCQACgCACAAQADAAACACIACAEQAAADgCACQgBACgEAAQgCAAgCgCg");
	this.shape_119.setTransform(88.9,133.8,0.599,0.599);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#EA600A").s().p("AgEAFQgBgBgBgEQAAgCABgCQADgCACAAQADAAACACQACACAAACQAAACgCADQgCACgCAAIgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_120.setTransform(85.2,134.5,0.599,0.599);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#EA600A").s().p("AgEAFQgCgCAAgDQAAgCACgCQACgCACAAQADAAACACQACACAAACQAAADgCACQgDACgCAAIgEgCg");
	this.shape_121.setTransform(83.2,131.7,0.599,0.599);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#EA600A").s().p("AgEAFQgCgBAAgEQAAgDACgBQACgCACgBQADABACACQACACAAACQAAADgCACQgCACgDABQgCgBgCgCg");
	this.shape_122.setTransform(78.9,132.8,0.599,0.599);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#EA600A").s().p("AgEAFQgDgCAAgDQAAgCADgCQACgDACAAQADAAACADQADACAAACQAAADgDACQgCADgDAAQgCAAgCgDg");
	this.shape_123.setTransform(110.7,121.9,0.599,0.599);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#EA600A").s().p("AgEAFQgDgCAAgDQAAgCADgCQACgDACAAQADAAACADQADACgBACQABADgDACQgCADgDAAQgCAAgCgDg");
	this.shape_124.setTransform(114.8,121.9,0.599,0.599);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#EA600A").s().p("AgEAGQgDgDAAgDQAAgCADgCQACgCACAAQADAAACACQADACAAACQAAADgDADQgDABgCAAIgEgBg");
	this.shape_125.setTransform(115.6,125.1,0.599,0.599);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#EA600A").s().p("AgEAFIgCgFQAAAAAAAAQAAgBABgBQAAAAAAgBQABAAAAgBQACgCACAAQABAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAQAAADgCACQgBAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAIgEgCg");
	this.shape_126.setTransform(115,130.3,0.599,0.599);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#EA600A").s().p("AgEAFQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAgCACgCQABAAAAgBQABAAAAAAQABgBABAAQAAAAAAAAQADAAACACQACACAAACQAAABAAABQgBAAAAABQAAAAAAABQgBAAAAABQgCACgDAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_127.setTransform(117.3,132.4,0.599,0.599);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#EA600A").s().p("AgEAFQgCgCAAgDQAAgCACgCIAEgCQACAAADACQACADAAABIgCAFQgCACgDAAQgCAAgCgCg");
	this.shape_128.setTransform(60,52.4,0.599,0.599);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#EA600A").s().p("AgEAFQgCgCAAgDQAAgCACgCQACgDACAAQADAAACADQACACAAACQAAADgCACQgCADgDgBQgCABgCgDg");
	this.shape_129.setTransform(64.1,50.9,0.599,0.599);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#EA600A").s().p("AgEAFQgDgCABgDQgBgCADgCQACgCACAAQADAAACACIACAEQAAACgCADQgCACgDAAQgCAAgCgCg");
	this.shape_130.setTransform(69.3,60.8,0.599,0.599);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#EA600A").s().p("AgEAFQgCgCAAgDQAAgCACgCQACgCACAAQADAAACACIACAEQAAACgCADQgCACgDAAQgCAAgCgCg");
	this.shape_131.setTransform(70.1,65,0.599,0.599);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#EA600A").s().p("AgEAFQgDgCAAgDQAAgCADgCQACgCACAAQADAAACACQADACAAACQAAADgDACQgCACgDAAQgCAAgCgCg");
	this.shape_132.setTransform(81.6,80.1,0.599,0.599);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#EA600A").s().p("AgEAGQgDgDAAgDQAAgCADgDQACgCACAAQADAAACACQADADAAACQAAADgDADIgFACQgBAAgDgCg");
	this.shape_133.setTransform(85.1,82.6,0.599,0.599);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#EA600A").s().p("AgFAGQgCgCAAgEQAAgDACgCQADgCACAAQADAAADACQACADAAACQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_134.setTransform(71.8,79.6,0.599,0.599);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#EA600A").s().p("AgFAGQgCgCAAgEQAAgDACgCQACgCADAAQAEAAACACQACADAAACQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_135.setTransform(76.5,80.2,0.599,0.599);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#EA600A").s().p("AgDAEQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBg");
	this.shape_136.setTransform(47.2,105.7,0.599,0.599);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#EA600A").s().p("AgDAEIgCgEIACgDQAAgBABAAQAAAAAAAAQABgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAABABIACADIgCAEQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQgBAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_137.setTransform(46.3,108.5,0.599,0.599);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#EA600A").s().p("AgFAGQgCgDAAgDQAAgDACgCQACgCADAAQAEAAACACQACACAAADQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_138.setTransform(24.8,101.8,0.599,0.599);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#EA600A").s().p("AgFAGQgCgDAAgDQAAgCACgDQADgCACAAQADAAADACQACACAAADQAAAEgCACQgDADgDAAQgCAAgDgDg");
	this.shape_139.setTransform(23.6,105.3,0.599,0.599);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#EA600A").s().p("AgFAGQgDgCAAgEQAAgDADgDQACgCADAAQAEAAACACQADADAAADQAAAEgDACQgCADgEAAQgDAAgCgDg");
	this.shape_140.setTransform(112.2,158.8,0.599,0.599);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#EA600A").s().p("AgGAGQgCgCAAgEQAAgCACgEQAEgCACAAQAEAAACACQADADAAADQAAAEgDACQgCADgEAAQgDAAgDgDg");
	this.shape_141.setTransform(108.3,158.8,0.599,0.599);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#EA600A").s().p("AgFAHQgDgDAAgEQAAgCADgEQADgCACAAQAEAAACACQADAEAAACQAAAEgDADQgCACgEAAQgCAAgDgCg");
	this.shape_142.setTransform(106.2,161.9,0.599,0.599);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#EA600A").s().p("AgGAHQgEgDAAgEQAAgDAEgDQACgEAEAAQAFAAADAEQADADAAADQAAAEgDADQgDAEgFAAQgEAAgCgEg");
	this.shape_143.setTransform(25.4,92.3,0.599,0.599);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#EA600A").s().p("AgFAHQgDgDAAgEQAAgDADgDQACgCADAAQAEAAACACQADADAAADQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_144.setTransform(28.9,93.7,0.599,0.599);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#EA600A").s().p("AgEAFQgCgCAAgDQAAAAABAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAABgBQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQABABAAAAQABABAAAAQAAABAAABQAAAAAAAAQAAADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBgBAAg");
	this.shape_145.setTransform(137.9,114,0.599,0.599);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#EA600A").s().p("AgEAFQAAgBAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBABAAQAAgBABAAQAAAAABAAQAAgBAAAAQADAAACADQAAAAABAAQAAABAAAAQAAABAAABQAAAAAAAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAABQgCACgDAAQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAgBAAg");
	this.shape_146.setTransform(139.7,116.9,0.599,0.599);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#EA600A").s().p("AgEAFQgCgCAAgDIACgEQADgCABAAIAFACIACAEIgCAFIgFACIgEgCg");
	this.shape_147.setTransform(141.1,110.4,0.599,0.599);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#EA600A").s().p("AgDAFQgBgBAAAAQgBgBAAAAQAAgBAAgBQgBAAAAgBQAAAAABAAQAAgBAAgBQAAAAABgBQAAAAABAAQAAgBAAAAQABgBAAAAQABAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAAAABABQAAAAAAABQABAAAAAAQABABAAAAQAAABAAABQABAAAAAAQAAABgBAAQAAABAAABQAAAAgBABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAgBAAQAAAAgBgBQAAAAAAAAg");
	this.shape_148.setTransform(140.8,113.8,0.599,0.599);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#EA600A").s().p("AgEAFIgCgFIACgEIAEgCIAFACIACAEIgCAFQgBAAAAABQgBAAAAAAQgBAAgBAAQAAABgBAAIgEgCg");
	this.shape_149.setTransform(114,90.9,0.599,0.599);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#EA600A").s().p("AgDAEQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAgBAAAAQADAAACACQAAABABAAQAAABAAAAQAAABAAABQAAAAAAAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAAAQgCADgDAAQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_150.setTransform(116.1,93.6,0.599,0.599);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#EA600A").s().p("AgEAFQgCgCAAgDIACgEIAEgCQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAIADAEIgDAFQAAAAAAABQgBAAAAAAQgBAAgBAAQAAABgBAAIgEgCg");
	this.shape_151.setTransform(128,102.5,0.599,0.599);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#EA600A").s().p("AgEAFQAAgBAAAAQgBgBAAAAQAAgBAAgBQgBAAAAgBQAAAAABAAQAAgBAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABgBAAAAQABAAABAAQAAgBAAAAQABAAAAABQABAAABAAQAAAAABABQAAAAAAABQABAAAAAAQABABAAAAQAAABAAABQAAAAAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAgBAAQAAABgBAAQAAAAAAgBQgBAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_152.setTransform(127.7,105.9,0.599,0.599);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#EA600A").s().p("AgEAFQgCgBgBgEQABgCACgDQACgCACAAQADAAACACQACACABADQAAAEgDABQgCACgDABQgCgBgCgCg");
	this.shape_153.setTransform(116.4,105.5,0.599,0.599);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#EA600A").s().p("AgFAGQgBgDAAgDIABgEQADgCACgBQADABACACIADAEQAAADgDADQgCACgDAAQgDAAgCgCg");
	this.shape_154.setTransform(121.2,104.7,0.599,0.599);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#EA600A").s().p("AgEAFQgCgCAAgDQAAgCACgCQABgBAAAAQABAAAAgBQABAAABAAQAAAAAAAAIAFACQACACAAACQAAADgCACQgDACgCAAQAAAAAAAAQgBAAgBAAQAAgBgBAAQAAgBgBAAg");
	this.shape_155.setTransform(119,108.7,0.599,0.599);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#EA600A").s().p("AgEAFQgCgCAAgDQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQACgCACAAQABAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAQAAADgCACQgBAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAIgEgCg");
	this.shape_156.setTransform(122,108.2,0.599,0.599);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#EA600A").s().p("AgEAFQgCgCAAgDQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQADAAACACQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAQAAADgCACQgCACgDAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_157.setTransform(54.8,110,0.599,0.599);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#EA600A").s().p("AgEAFQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAgCACgCQACgCACAAQABAAABAAQAAABABAAQAAAAABAAQAAABABAAQACACAAACQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQgCAAgCgCg");
	this.shape_158.setTransform(57.8,109.5,0.599,0.599);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#EA600A").s().p("AgFAGQgCgCAAgEQAAgDACgCQACgCADAAQAEAAACACQACADAAACQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_159.setTransform(28.5,82.4,0.599,0.599);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#EA600A").s().p("AgFAGQgDgDAAgDQAAgCADgDQACgCADAAQADAAADACQADADgBACQABADgDADQgCACgEAAQgDAAgCgCg");
	this.shape_160.setTransform(26.8,86.8,0.599,0.599);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#EA600A").s().p("AgFAGQgDgDABgDQgBgCADgDQACgCADAAQAEAAACACQACADAAACQAAADgCADQgCACgEAAQgDAAgCgCg");
	this.shape_161.setTransform(34.4,75.5,0.599,0.599);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#EA600A").s().p("AgFAGQgCgDAAgDQAAgDACgCQADgDACAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgCAAgDgCg");
	this.shape_162.setTransform(30.7,78.5,0.599,0.599);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#EA600A").s().p("AgEAFQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBIACgEIAEgCIAFACIACAEQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgCACgDAAQgCAAgCgCg");
	this.shape_163.setTransform(54,90.3,0.599,0.599);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#EA600A").s().p("AgEAFQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgCACgCQACgCACAAQABAAABAAQAAAAABABQAAAAABAAQAAABABAAQACACAAACQAAABAAABQgBAAAAABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAgBAAQgCAAgCgCg");
	this.shape_164.setTransform(56.6,91.8,0.599,0.599);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#EA600A").s().p("AAUAhIgqgLQgBgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBgBgBQAAAAAAgBQAAAAABgBIALgpQACgGAGABQAGACgCAGIgJAjIAjAKQAGACgCAGQAAAEgGAAg");
	this.shape_165.setTransform(140,101,0.599,0.599);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#EA600A").s().p("AAIAhQgGgCACgGIAJgjIgjgJQgGgCACgGQACgGAFABIAqAMQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQABABAAAAQAAABgBAAIgLAqQgCAEgEAAg");
	this.shape_166.setTransform(132.3,105.8,0.599,0.599);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#EA600A").s().p("AhUAxQgCgCABgDQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAAAICfhbQAFgDADAFQACADgBACQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABIifBbIgDABQgDAAgCgEg");
	this.shape_167.setTransform(136.1,103.4,0.599,0.599);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#EA600A").s().p("AgJAhQgFAAgBgEIgLgqQgBAAAAgBQAAAAABgBQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAqgMQAGgBABAGQACAGgGACIgjAJIAJAjQACAGgGACg");
	this.shape_168.setTransform(140,105.8,0.599,0.599);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#EA600A").s().p("AgUAhQgFAAgBgEQgCgGAGgCIAjgKIgJgjQgCgGAGgCQAGgBACAGIALApQABABAAAAQAAABAAAAQgBABAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBABIgqALg");
	this.shape_169.setTransform(132.3,101,0.599,0.599);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#EA600A").s().p("ABNA0IifhbQAAgBgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQgBgCACgDQADgFAFADICfBbQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQABADgCACQgBAEgFAAg");
	this.shape_170.setTransform(136.1,103.4,0.599,0.599);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#EA600A").s().p("AgiAUQgFgFAFgEIAegeQAEgFAFAFIAeAeQAFAEgFAFQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAgBgBAAIgagZIgaAZQgCACgCAAQgCAAgCgCg");
	this.shape_171.setTransform(136.1,107.3,0.599,0.599);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#EA600A").s().p("AgEAUIgegeQgFgEAFgFQAEgEAEAEIAaAaIAagaQAFgEAEAEQAFAFgFAEIgeAeQgBABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBgBg");
	this.shape_172.setTransform(136.1,99.5,0.599,0.599);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#EA600A").s().p("AgFBcIAAi3QAAgGAFAAQAHAAgBAGIAAC3QABAGgHAAQgFAAAAgGg");
	this.shape_173.setTransform(136.1,103.4,0.599,0.599);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#EA600A").s().p("AgiAUQgFgFAFgEIAegeQAEgFAFAFIAeAeQAFAEgFAFQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAgBgBAAIgagZIgaAZQgCACgCAAQgCAAgCgCg");
	this.shape_174.setTransform(136.1,107.3,0.599,0.599);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#EA600A").s().p("AgEAUIgegeQgFgEAFgFQAEgEAEAEIAaAaIAagaQAFgEAEAEQAFAFgFAEIgeAeQgBABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBgBg");
	this.shape_175.setTransform(136.1,99.5,0.599,0.599);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#EA600A").s().p("AgFBcIAAi3QAAgGAFAAQAHAAgBAGIAAC3QABAGgHAAQgFAAAAgGg");
	this.shape_176.setTransform(136.1,103.4,0.599,0.599);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#EA600A").s().p("AANAXIgbgHIgEgDIAAgEIAHgbQACgFAFABQAEACAAAFIgGAWIAVAGQAFABgBAFQgBAEgEAAg");
	this.shape_177.setTransform(127.1,74,0.599,0.599);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#EA600A").s().p("AAFAXQgFgBABgGIAGgVIgVgGQgFgCABgFQACgGAEACIAbAIIAEACIAAAEIgHAbQgBAEgFAAg");
	this.shape_178.setTransform(122,77.2,0.599,0.599);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#EA600A").s().p("Ag4AhQgDgEAFgDIBog8QAEgDADAFQADAFgFADIhoA7IgDABQgDAAgBgDg");
	this.shape_179.setTransform(124.6,75.6,0.599,0.599);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#EA600A").s().p("AgLATIgHgbIAAgEIAEgCIAbgIQAEgCACAGQABAFgFACIgVAGIAGAVQABAGgFABIgBAAQgFAAgBgEg");
	this.shape_180.setTransform(127.1,77.2,0.599,0.599);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#EA600A").s().p("AgNAXQgEAAgBgEQgBgFAFgBIAVgGIgGgWQgBgFAFgCQAFgBACAFIAHAbIAAAEIgEADIgbAHg");
	this.shape_181.setTransform(122,74,0.599,0.599);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#EA600A").s().p("AAyAjIhog7QgFgDADgFQADgFAEADIBoA8QAFADgDAEQgBADgDAAg");
	this.shape_182.setTransform(124.6,75.6,0.599,0.599);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#EA600A").s().p("AARAOIgRgPIgQAPQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBgBgBAAQAAAAAAAAQgBgBAAAAQgDgEADgEIAUgTQADgEAEAEIAUATQADAEgDAEQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_183.setTransform(124.6,78.2,0.599,0.599);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#EA600A").s().p("AgDAOIgUgTQgEgEAEgEQAEgDADADIAQAQIARgQQAEgDADADQAEAEgEAEIgUATIgEACQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_184.setTransform(124.6,73,0.599,0.599);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#EA600A").s().p("AgEA9IAAh5QAAgFAEAAQAFAAAAAFIAAB5QAAAFgFAAQgEAAAAgFg");
	this.shape_185.setTransform(124.6,75.6,0.599,0.599);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#EA600A").s().p("AARAOIgRgPIgQAPQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBgBgBAAQAAAAAAAAQgBgBAAAAQgDgEADgEIAUgTQADgEAEAEIAUATQADAEgDAEQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_186.setTransform(124.6,78.2,0.599,0.599);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#EA600A").s().p("AgDAOIgUgTQgEgEAEgEQAEgDADADIAQAQIARgQQAEgDADADQAEAEgEAEIgUATIgEACQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_187.setTransform(124.6,73,0.599,0.599);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#EA600A").s().p("AgEA9IAAh5QAAgFAEAAQAFAAAAAFIAAB5QAAAFgFAAQgEAAAAgFg");
	this.shape_188.setTransform(124.6,75.6,0.599,0.599);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#EA600A").s().p("AALA9QgEAAgCgEQgOgogkAAIgHABQgHABgBgHQAAgDACgDQACgCACAAQAYgDAKgMQAJgMgDgTIgDgKQgBgHAGgBQAHgCACAGIACALQAIAeAeAAIAOgCIABAAQAHgBACAGQABAHgHACIgBAAQgaAFgJAPQgIAOAHAUIAAADQAAAGgGABgAgJgDQgFAHgHAEQANAFAKAMQABgJAEgGQAFgIAIgFQgNgEgJgLQgBAIgGAHg");
	this.shape_189.setTransform(52,82.8,0.599,0.599);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#EA600A").s().p("AAEAvQgEAAAAgEQgJghgeAAIgBAAQgFAAAAgFQgBgFAGAAQARAAAJgJQAIgIgBgPIgCgIQAAgEAFgBQAEgBABAFIABAIQAGAZAZAAIAHAAQAFgBABAFQAAAEgFABIAAAAQgUADgIALQgHAKAEAPIAAABQAAAGgFAAgAgGgCQgDADgHADQALAGAFAIIAEgJQAFgHAGgCQgJgEgGgIQgBAEgFAGg");
	this.shape_190.setTransform(72.4,148.5,0.599,0.599);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#EA600A").s().p("AgqA2QgGgFAEgGQAZgrggggQgFgFAFgFQACgDADAAQADAAACACQATASARAAQAPAAAPgRIAHgJQACgCADgBQAEAAACACQAGAFgFAFIgHAJQgXAjAkAdIABABQAGAEgFAHQgCACgDAAQgDABgCgCIgBgBQgUgPgRAAQgUAAgPAXQgDAEgEAAgAgTASQARgJATAFQgGgOADgOQgRAHgTgGQAFANgCASg");
	this.shape_191.setTransform(68.8,53.7,0.599,0.599);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#EA600A").s().p("AgYAjQgFgDACgHQANgYgSgQQgFgEAFgGQAEgFAFAFQALAIAIAAQAIAAAIgJIAEgGQAEgFAFAEQAGAEgEAFIgEAGQgLASAUAPIAAABQADABAAADQABADgCACQgFAGgFgEIgBgBQgKgHgJAAQgLAAgHANQgDAEgDAAgAgIAHQAGgCAGAAIACAAQgBgFAAgEQgGACgIgBIABAKg");
	this.shape_192.setTransform(109.1,90.1,0.599,0.599);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#EA600A").s().p("AgLApQgGgCABgGQAEgbgXgJQgHgDADgGQADgGAGACQAHADAHAAQAOAAAEgPIACgHQABgDACgBIAFgBQAGACgBAHIgCAGQgEAWAYAHIABAAQAGACgCAGQgBAHgHgCIgBAAIgNgCQgSAAgDAUQgBAGgFAAgAgKAAQAEAFABAFQAFgFAIgDIgFgHQgFAEgIABg");
	this.shape_193.setTransform(138.9,94.1,0.599,0.599);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#EA600A").s().p("AAOAtIAAgBQgNgZgTAAQgKAAgMAHQgFADgEgFQgCgFAEgDQAigWgMghQgCgGAGgCQAGgDACAHQAJAaAUAAQAJAAAIgEIAJgEQAFgDADAGQACAFgFADIgIAEQgeARAQAgIAAABQADAFgGADIgCABQgEAAgCgEgAgUAHIACAAQAPAAAKAJQABgMAHgJQgPgBgKgKQgCAMgIALg");
	this.shape_194.setTransform(74,138.5,0.599,0.599);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#EA600A").s().p("AAVArQgQgRgRAAQgLAAgKAGQgCACgDgBQgBgBgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAQgEgGAGgEQARgJADgMQADgLgJgNIgFgIQgEgFAGgEQAFgEAEAFIAFAHQATAYAdgUIAAAAQADgCACABQADAAACACQAEAGgGAEIAAAAQgSAOgCANQgBANALAMQACACAAADQAAADgCACQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQgCAAgDgCgAgHABQgBAGgEAGQALAAAJAEIAAgLQABgHADgGQgKAAgIgDIgBALg");
	this.shape_195.setTransform(93.8,147.5,0.599,0.599);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#EA600A").s().p("AgKAtQgFAAABgGQADghgdgKQgFgCACgFQACgFAFACQAIADAHAAQATAAAGgVIABgIQACgFAFABQAFABgBAFIgCAIQgEAcAeAHIABAAQAFABgBAFQgCAFgFgBIgBAAQgGgCgHAAQgYAAgEAbQgBAFgEAAgAgQgBQAHAHADALQAIgLANgCQgIgGgDgKQgIAKgMABg");
	this.shape_196.setTransform(90.7,137.5,0.599,0.599);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#EA600A").s().p("AgWAdQgDgBACgEQAOgYgSgQQgDgDADgDQADgDADADQAUASAPgSIAEgFQACgDADACQADACgCAEIgEAFQgNASAUAQIABAAQADACgCAEQgDADgDgCIgBAAQgLgJgJAAQgKAAgIANQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAgAgKAKQAJgFALADQgEgIACgHQgKAEgJgDQADAHgCAJg");
	this.shape_197.setTransform(51.2,93.7,0.599,0.599);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#EA600A").s().p("AgWAdQgDgCACgEQAOgXgSgRQgDgCADgEQADgCADACQAUATAPgSIAEgFQACgEADADQAEACgDAEIgEAFQgMASATAQIABAAQADADgCADQgDADgDgCIgBgBQgLgIgJAAQgKAAgIANQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAgAgKAKQAKgFAKADQgEgIACgHQgJAEgKgDQADAHgCAJg");
	this.shape_198.setTransform(118.6,98.9,0.599,0.599);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#EA600A").s().p("AgdAlQgEgDADgEQARgegWgVQgEgEAEgEQAEgDADADQAaAYATgXIAFgHQADgEAEADQAEAEgCAEIgFAGQgRAYAaAUIAAAAQAEADgDAFQgEAEgDgEIgBAAQgOgLgLAAQgOAAgKARQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAgBAAgAgNANQAMgGANADQgEgKABgJQgLAFgNgEQAEAJgCAMg");
	this.shape_199.setTransform(132,137,0.599,0.599);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#EA600A").s().p("AAAAgIAAgHQgFgSgTACIgGABQgFAAAAgEQgBgFAEAAIAHgBQAUgEgCgRIgBgIQgBgFAEgBQAEAAABAEIABAIQAFAQAPAAIABAAQAEgBAFAAQAEAAABAEQABAEgEAAQgFABgFAAQgRAFACASIABAGIAAABQAAAFgFAAQgDAAgBgEgAgIACQAGADADAEQACgGAFgDQgEgCgEgFQgCAGgGADg");
	this.shape_200.setTransform(112.7,126.4,0.599,0.599);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#EA600A").s().p("AgDAeIgBgHQgBgRgSgCIgHAAQgDAAAAgEQAAgDADgBIAHABQAUgBAAgRIAAgIQAAgEADAAQADAAABADIAAAJQADAQAOACIAJAAQAEAAAAADQAAAEgEAAIgJAAQgQADgBAQIAAAHQgBAEgDAAQgDAAAAgEgAgHABQADABAEAHQADgGAFgDQgEgCgEgFQgCAGgFACg");
	this.shape_201.setTransform(47.7,125.4,0.599,0.599);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#EA600A").s().p("AgGA0IAAgLQgCgfgigDIgKAAQgGgBAAgGQAAgFAGgBIALABQAigDACgdIgBgOQAAgGAGAAQAFgBACAGIAAAOQAFAdAZAEIAQgBQAGABAAAFQAAAGgGABIgJAAIgHAAQgcAEgCAeQABAFgBAGQAAAGgHAAQgGAAAAgGgAgQABQAKAGAGAKQAFgLALgGQgKgFgFgKQgFALgMAFg");
	this.shape_202.setTransform(97,56.5,0.599,0.599);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#EA600A").s().p("AgMAhQgEgBABgFIACgGQAFgRgQgHIgGgDQgEgBACgFQABgEAEABIAGADIAKABQALAAAEgLIACgHQACgEAEABQAFACgBAEIgDAIQgEAQANAGIAJADQAEACgCAEQgBAEgEgBIgJgDQgQgEgHAPIgBAHQgCADgDAAgAgGgBQADAEAAAFQAEgEAGgBIgEgIQgEADgFABg");
	this.shape_203.setTransform(28.3,127,0.599,0.599);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#EA600A").s().p("AAIAkQgEAAAAgEIgCgGQgGgRgSAEIgGABQgFABgCgFQgBgFAFgBIAGgCQASgFgDgQIgDgIQgBgFAFgCQAEgCACAFIADAIQAFAOAMAAIADgBIAKgCQAEgBACAEQABAFgEACIgKACQgPAGAEARIACAGIAAACQAAAFgFAAgAgGADQAFACADADQABgFAEgEQgFgBgCgDQgCAFgEADg");
	this.shape_204.setTransform(41.3,99.2,0.599,0.599);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#EA600A").s().p("AAQAgIgHgIQgLgNgQAJIgGAFQgEADgEgFQgCgEADgDIAHgFQAOgLgKgSIgEgGQgDgEAFgDQAEgEADAFIAEAGQAJAKAIAAQAFAAAGgEIAIgFQAEgDADAEQAEAEgEAEIgIAGQgNALAIAOIAGAJQACAEgEADIgDABQgBAAAAAAQgBAAgBAAQAAgBAAAAQgBAAAAgBgAgGAFIABAAQAEAAAFACIACgJQgFAAgFgDQAAAFgCAFg");
	this.shape_205.setTransform(65.9,78,0.599,0.599);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#EA600A").s().p("AgFAcIgBg2QgBgGAHAAQAAgBAAAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQABABAAAAQAAABAAAAQAAABAAABIACA1QAAAHgGAAQgFAAgBgGg");
	this.shape_206.setTransform(120.8,67.3,0.599,0.599);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#EA600A").s().p("AgEBBIgEiBQAAgGAHAAQAEAAACAGIAECAQAAAHgHAAQgFAAgBgGg");
	this.shape_207.setTransform(118.6,67.4,0.599,0.599);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#EA600A").s().p("AADBqQgFAAAAgFIgHjIQAAgGAGAAQAGgBAAAHIAHDHQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAg");
	this.shape_208.setTransform(116.5,67.5,0.599,0.599);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#EA600A").s().p("AgBB6IgJjzQAAgHAHAAQAFAAAAAHIAJDzQAAAGgHABQgFAAAAgHg");
	this.shape_209.setTransform(114.3,68.5,0.599,0.599);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#EA600A").s().p("AgBB5IgJjxQAAgGAGgBQAGAAAAAHIAJDxQAAAGgHABQgFAAAAgHg");
	this.shape_210.setTransform(112.2,70.7,0.599,0.599);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#EA600A").s().p("AgCBsIgHjWQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAFgBABAHIAHDXQAAAGgGAAQgGAAAAgGg");
	this.shape_211.setTransform(110.1,72.2,0.599,0.599);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#EA600A").s().p("AACBOQgFgBAAgGIgFiNQAAgGAGAAQAGAAAAAGIAFCMQABAIgHAAg");
	this.shape_212.setTransform(107.9,72.3,0.599,0.599);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#EA600A").s().p("AgEAiIgDhDQAAgGAHgBQAFABAAAGIADBCQAAAHgHAAQgFAAAAgGg");
	this.shape_213.setTransform(105.7,72.4,0.599,0.599);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#EA600A").s().p("AghABQAAgGAGABIA2gDQAGABABAFQAAAHgGAAIg3ABQgGAAAAgGg");
	this.shape_214.setTransform(102.7,71.4,0.599,0.599);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#EA600A").s().p("Ag2ACQgBgFAHgBIBhgDQACAAADACQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAFgHABIhhADQgGAAAAgGg");
	this.shape_215.setTransform(103.5,69.1,0.599,0.599);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#EA600A").s().p("Ag3ACQAAgGAHAAIBhgDQAHAAAAAGQAAAGgGAAIhiADQgHAAAAgGg");
	this.shape_216.setTransform(105.7,66.9,0.599,0.599);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#EA600A").s().p("Ag3ACQAAgGAHAAIBhgDQAHAAAAAGQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAIhiADQgHAAAAgGg");
	this.shape_217.setTransform(107.8,64.6,0.599,0.599);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#EA600A").s().p("Ag4ACQAAgFAHgBIBigDQADgBADACQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAFgGABIhjADQgGAAgBgGg");
	this.shape_218.setTransform(109.8,62.4,0.599,0.599);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#EA600A").s().p("Ag4ACQgBgGAHAAIBlgDQAGAAAAAGQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAABQgBAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAIhkADQgHAAAAgGg");
	this.shape_219.setTransform(112,60.1,0.599,0.599);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#EA600A").s().p("AgeABQAAgFAGgBIAwgBQAGAAAAAGQABAAAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgvADQgHAAAAgHg");
	this.shape_220.setTransform(112.8,57.9,0.599,0.599);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#EA600A").s().p("ABTBXIivikQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQABgBAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABAAAAgBQABAAABAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABICvCjQAFAFgEAFIgFACQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_221.setTransform(111.6,68.4,0.599,0.599);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#EA600A").s().p("AgsA0QgGgFgDgEQgHgIgBgLQAAgLAGgKQAKgPATgBIAKAAQAMAAAGgCIADgBQANgFAGgEQAKgHAQgRQAFgFAEAFQABAAAAAAQABABAAAAQAAABAAABQAAAAAAABQABABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgSATgLAHQgHAFgOAFIgDABQgKADgOAAIgIAAQgNAAgGAKQgEAGABAHQAAAHAEAFIAGAFQAGAEgEAFQgBAEgEAAg");
	this.shape_222.setTransform(101,68,0.599,0.599);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#EA600A").s().p("AguA+QgFgFAEgEQARgSAGgKQAEgHADgMIABgDQADgIgCgLIgBgKQAAgTAPgLQAIgHAMAAQALAAAJAGQAEADAEAGQAFAFgGAEQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQgDAAgBgCIgGgGQgFgEgHAAQgIABgFAEQgJAHAAANIABAHQACANgDALIgBADQgEAOgEAIQgHAMgSASQgCADgDAAIgEgCg");
	this.shape_223.setTransform(110.4,57.9,0.599,0.599);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#EA600A").s().p("AgzAsQgTgRgBgZQgBgYARgTQASgTAbAAQAYAAAQAQIAoAmQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBABIglAnQgRAUgaAAQgYAAgRgRgAgtggQgNAPAAASQABAUAOAOQAOANATAAQAUAAAOgQIAgghIgjghQgNgNgSAAQgVAAgOAPg");
	this.shape_224.setTransform(102.2,63.5,0.599,0.599);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#EA600A").s().p("AgBBHIgogmQgSgRgBgYQgBgZARgTQASgTAaAAQAXAAASARQATARABAZQAAAYgRASIglAoQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAAAgBAAgAgigrQgOAOABAVQABASAOAOIAiAgIAhgjQANgOAAgSQgBgVgPgNQgOgNgSAAQgTAAgPAPg");
	this.shape_225.setTransform(105.9,59.4,0.599,0.599);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#EA600A").s().p("AhhCHIgfgcQgGgHAAgIQAAgJAFgHIDDjRQAGgHALAAQAIAAAHAGIAeAcQAHAGAAAKQABAIgHAHIjDDRQgGAHgKAAQgIAAgHgGgABMh8IjDDRQgCADAAADQAAAEACACIAfAdQAEACACAAQAEAAACgDIDEjRQACgCAAgEQAAgEgDgCIgfgdQgCgCgDAAQgEAAgDADg");
	this.shape_226.setTransform(107.7,64.8,0.599,0.599);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#EA600A").s().p("AgrCfIh0hsIgCgFIABgFIC+jKQAFgFAEAEIB0BsQAGAGABAJQAAAKgGAGIipC1QgGAHgKAAQgHAAgHgGgAiSAuIBwBnQACACADAAQADAAAEgCICpi1QACgDAAgDQgBgEgCgCIhvhog");
	this.shape_227.setTransform(112.9,69.6,0.599,0.599);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#EA600A").s().p("AATA3QgZgUgNgcQgNgcACgcQABgIAHABQAIABgBAHQgCAZAMAYQALAYAWASQADACAAADQAAAEgCACQgCADgEAAIgEgCg");
	this.shape_228.setTransform(100.3,155.6,0.599,0.599);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#EA600A").s().p("AAMAgQgZgYgKgeQgCgHAHgDQAHgCACAHQAJAbAWAVQAGAFgGAFQgCADgDAAQgDAAgCgCg");
	this.shape_229.setTransform(103.7,153.6,0.599,0.599);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#EA600A").s().p("AAQA+QgZgZgMggQgLggAIgeQACgHAHABQAIACgCAHQgHAbAKAbQAJAdAXAWQACACABADQAAADgCACQgDADgDAAQgDAAgCgCg");
	this.shape_230.setTransform(101.9,153.6,0.599,0.599);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#EA600A").s().p("AAWArQgsgegLgvQgBgDACgDQABgCADgBQAHgCACAIQAKApAnAaQAHAEgFAGQgCAEgEAAg");
	this.shape_231.setTransform(98.8,157.9,0.599,0.599);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#EA600A").s().p("AAEAzQgEgIAJgMIADgFIgFgBQgOgBgDgJQgEgJAJgKIADgEIgFgBIgKgCQgGgDgCgGQgDgFACgGIAGgJQACgBABgDQgDgIAHgCQAIgDACAHQADAIgIAMIgEAFIAGABQAOABADAJQAEAIgJALIgDAEIAFABQAPACADAIQAEAJgJALIgDAFQACAHgGADIgDABQgFAAgCgFg");
	this.shape_232.setTransform(98.9,143.1,0.599,0.599);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#EA600A").s().p("AhEAjQgIgEgGADQgIADgCgHQgDgHAHgDQAKgFAQAGQAIAEAGgDQAFgCAEgJQAGgNALgFQALgFAOAGQAJAEAFgDQAGgCADgJQAGgOALgFQAKgEAQAFQAIAEAGgDQAIgDACAHQABADgBADQgBADgDABQgLAFgOgGQgKgEgFADQgFACgEAJQgFANgMAFQgKAEgPgFQgIgDgGACQgFACgEAJQgGAOgLAFQgGACgGAAQgGAAgIgDg");
	this.shape_233.setTransform(111.3,147.9,0.599,0.599);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#EA600A").s().p("AA+AeQgKgCgGgOQgDgGgDgBQgDAAgGAEQgLAKgKgCQgKgCgGgOQgDgFgDgBQgCAAgGADQgLAKgLgCQgKgCgGgNQgDgGgDgBQgIgCACgHQABgHAIABQAKADAGANQADAHAEAAQADABAFgFQALgKAKACQAHACAEAFIAFAJQADAGADAAQADABAFgFQAMgJAKACQAKADAGAMQADAHADAAQAIACgCAHQgBAGgGAAg");
	this.shape_234.setTransform(112.3,153.3,0.599,0.599);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#EA600A").s().p("AgRBJQgDAAgCgDQgCgCAAgDQABgLAOgHQAGgEAAgDQAAgDgEgFQgLgJABgMQABgKANgGQAFgEABgDQABgDgFgFQgLgLACgKQABgKAMgIQAGgEAAgDQABgDACgCQADgCADABQADAAACADQACACgBADQgBAKgMAIQgHAEgBADQAAADAGAFQAKAKgBALQgCAKgNAHQgEADgBADQAAADAEAFQAKAMgBAJQgBAKgMAIQgHAEABADQgBAGgHAAg");
	this.shape_235.setTransform(103.4,142.5,0.599,0.599);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#EA600A").s().p("AhABBQgCgCgBgDQAAgDACgDQAHgJAQgBQAJAAADgEQADgEgBgJQgCgPAIgKQAHgIAPgBQAJgBADgDQADgFgBgIQgCgPAIgKQAIgJAPgBQAIAAAEgEQACgCADgBQADAAACACQADACAAADQABADgDACQgHAJgPABQgKABgDAEQgDAEABAJQACAQgIAIQgHAIgPABQgJABgDAEQgDAEABAJQABAQgHAIQgHAJgPABQgJABgEAEQgCADgDAAQgDAAgCgCg");
	this.shape_236.setTransform(107.7,144.3,0.599,0.599);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#EA600A").s().p("AgTAeQgMgKgBgRQgCgPAKgMQAKgNAQgBQAPgCANALQAGAFgFAFQgCADgDAAQgDABgCgDQgIgGgKABQgJABgGAHQgHAIABAJQABAKAIAHQAJAIAMgEQAIgCABAHQABADgBADQgCADgDABIgLABQgNAAgLgJg");
	this.shape_237.setTransform(95.5,161.8,0.599,0.599);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#EA600A").s().p("AgJANQgCgBgBgDQAAgEACgCIAKgNQAEgGAGAEQACACABADQAAADgCADIgKANQgBADgEAAIgFgCg");
	this.shape_238.setTransform(97.4,160,0.599,0.599);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#EA600A").s().p("AArAtQgFgFAEgGQACgDgDgEQgHgRgbgSQgZgUgSgCQgGAAgBABQgCADgDAAQgDABgCgCQgDgCAAgDQgBgDACgCQAGgKAPACQAVADAdAVQAeAVAJAUQAGAPgHAIQgCADgEAAIgFgBg");
	this.shape_239.setTransform(103.9,151.1,0.599,0.599);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#EA600A").s().p("Ag/BWQgVgQgHgNQgFgLAEgHIBMiJQAEgFAGAEQAGADgEAHIgBABQAAAFAFAIQALARAaARQAaARAOAAIAEgBIABgBQAFgFAFAFQAFAEgEAGIhrBwQgEAGgIAAQgOAAgXgQgAhPAuIAAABQAAADAIAJQAKAKAOAJQAOAJAHAAIABAAIBchhQgTgFgZgSQgXgRgMgRIgCgDg");
	this.shape_240.setTransform(101.5,154.7,0.599,0.599);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#EA600A").s().p("AgEAGQgDgDAAgDQAAgCADgDQADgCABAAIAFACQADADAAACQAAADgDADQgCACgDAAQgCAAgCgCg");
	this.shape_241.setTransform(94.6,155.7,0.599,0.599);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#EA600A").s().p("AgEAFQgDgCAAgDQAAgDADgBQABgDADAAQADAAACADQACACAAACQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_242.setTransform(96.8,151.5,0.599,0.599);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#EA600A").s().p("AgFAFIgBgFQgBgBACgDQADgDACAAQADAAACADQADADAAABIgDAFQgCADgDAAQgCAAgDgDg");
	this.shape_243.setTransform(95.1,146.6,0.599,0.599);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#EA600A").s().p("AgEAFQgDgCAAgDQAAgCADgCQACgCACAAQADAAACACQADACgBACQABADgDACQgCACgDAAQgCAAgCgCg");
	this.shape_244.setTransform(93.5,150.1,0.599,0.599);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#EA600A").s().p("AgFAGQgCgDAAgDQAAgBACgDQACgCADgBQADABADACQACACAAACQAAAEgCACQgDABgDAAQgCAAgDgBg");
	this.shape_245.setTransform(104.9,159.9,0.599,0.599);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#EA600A").s().p("AgEAFQgCgCAAgDQAAgBACgDQABgCADAAQADAAACACQACADAAABQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_246.setTransform(108.4,139.2,0.599,0.599);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#EA600A").s().p("AgFAGQgCgCAAgEQAAgDACgBQADgCACgBQADABACACQACABABADQgBADgCADQgCACgDAAQgCAAgDgCg");
	this.shape_247.setTransform(105.6,142,0.599,0.599);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#EA600A").s().p("AgEAGQgCgDgBgDQABgCACgDQACgCACAAQACAAAEACQABACABADQgBADgBADQgDACgDAAQgCAAgCgCg");
	this.shape_248.setTransform(108.4,157,0.599,0.599);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#EA600A").s().p("AgFAGQgBgDAAgDQAAgDABgBQADgCACgBQADABACACQADABAAADQAAADgDADQgCACgDAAQgDAAgCgCg");
	this.shape_249.setTransform(110.4,160.5,0.599,0.599);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#EA600A").s().p("AgEAFQgDgCAAgDQAAgCADgCQABgCADAAQADAAACACQADACgBACQABACgDADQgCACgDAAQgCAAgCgCg");
	this.shape_250.setTransform(111.8,144.4,0.599,0.599);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#EA600A").s().p("AgEAFQgDgCAAgDQAAgCADgCQACgDACAAQADAAADADQABACAAACQAAADgBACQgDADgDAAQgCAAgCgDg");
	this.shape_251.setTransform(114.8,140,0.599,0.599);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#EA600A").s().p("AgEAFQgDgCABgDQgBgCADgCQADgDABABQADgBACADQACACAAACQAAADgCACQgCACgDABQgCgBgCgCg");
	this.shape_252.setTransform(93.5,142.9,0.599,0.599);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#EA600A").s().p("AgFAFQgCgCAAgDQAAgDACgCQADgBACAAIAFABQACADABACQgBADgCACQgCACgDABQgDgBgCgCg");
	this.shape_253.setTransform(113.3,150.1,0.599,0.599);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#EA600A").s().p("AgEAFQgCgCAAgDQAAgCACgCQABgCADAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQgDAAgBgCg");
	this.shape_254.setTransform(110.5,134.1,0.599,0.599);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#EA600A").s().p("AgFAFQgCgBAAgEQAAgCACgDQACgCADAAQADAAACACQACADAAACQAAAEgCABQgDACgCABQgCgBgDgCg");
	this.shape_255.setTransform(114.9,157.1,0.599,0.599);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#EA600A").s().p("AgEAGQgCgDAAgDQAAgCACgCQACgCACgBQADABACACQACACAAACQAAADgCADQgBACgEAAQgCAAgCgCg");
	this.shape_256.setTransform(116.7,150,0.599,0.599);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#EA600A").s().p("AgEAFQgDgCAAgDQAAgCADgCQABgCADAAQADAAADACQABACAAACQAAADgBACQgEACgCAAQgCAAgCgCg");
	this.shape_257.setTransform(112.3,155.9,0.599,0.599);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#EA600A").s().p("AgDA+IgwgbQgEgDAAgFIAAg2QAAgEAEgDIAwgbQADgDAEADIAwAbQAEADAAAEIAAA2QAAAFgEADIgwAbQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAgAgmgWIAAAtIAmAWIAngWIAAgtIgngWg");
	this.shape_258.setTransform(57.5,147.8,0.599,0.599);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#EA600A").s().p("AgcAbQgDgBgCgDQgBgDAAgDIAPg0QACgIAIACQAIACgCAIIgMAsIAsAMQAIADgDAIQgBAGgHAAg");
	this.shape_259.setTransform(63.2,144.5,0.599,0.599);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#EA600A").s().p("AAmA7IhPgVQgEgCgBgCQgCgDABgEIAVhPQADgIAHACQAEABACADQABADgBADIgTBIIBIATQADABACADQABADgBADQgBAGgHAAg");
	this.shape_260.setTransform(65.8,142.8,0.599,0.599);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#EA600A").s().p("AALApQgEAAgCgDQgBgDAAgEIANgsIgsgMQgIgBACgJQACgHAIABIA0AOQAEACABACQABADgBAEIgNA0QgCAGgHAAg");
	this.shape_261.setTransform(51.8,151.5,0.599,0.599);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#EA600A").s().p("AAQA7QgDAAgCgEQgCgDABgDIAUhIIhIgTQgDgBgCgDQgBgDAAgDQADgIAIACIBPAWQADABACACQACAEgBADIgWBPQgBAGgHAAg");
	this.shape_262.setTransform(49.3,153.1,0.599,0.599);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#EA600A").s().p("AgxAdQgFgHAIgEIBUgxQAIgDAEAGQAEAHgHAFIhVAwIgEABQgFAAgCgEg");
	this.shape_263.setTransform(52.2,151.1,0.599,0.599);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#EA600A").s().p("AgwAdQgFgHAIgFIBTgvQAHgFAFAIQAEAHgHAEIhUAwIgEABQgFAAgCgEg");
	this.shape_264.setTransform(62.9,144.8,0.599,0.599);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#EA600A").s().p("AgTAkIgPg0QAAgDABgEQABgCAEgCIA0gOQAJgCABAIQABAEgBADQgCACgDABIgsAMIAMAsQACAJgIABIgCABQgHAAgBgGg");
	this.shape_265.setTransform(63.2,151.5,0.599,0.599);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#EA600A").s().p("AgSA7QgGAAgCgGIgVhPQgBgEACgDQACgDADAAIBPgWQAEgBADACQADABAAAEQABADgBADQgCADgDABIhIATIATBIQABADgBADQgCAEgEAAg");
	this.shape_266.setTransform(65.8,153.1,0.599,0.599);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#EA600A").s().p("AgiAkQgBgIAHgDIAsgMIgMgsQgCgIAIgCQADgBADACQAEACAAADIAOA0QABAEgBACQgCADgDABIg3APQgGAAgCgGg");
	this.shape_267.setTransform(51.8,144.5,0.599,0.599);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#EA600A").s().p("AgoA7QgGAAgCgGQAAgDABgDQACgDAEgBIBHgTIgThIQgCgIAHgCQAJgCABAIIAXBPQAAADgBAEQgCACgEACIhPAVg");
	this.shape_268.setTransform(49.3,142.8,0.599,0.599);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#EA600A").s().p("AgOAZQgDgBgBgDQgBgEACgDIAVgkQABgDAEgBQADgBADACQAHAEgEAHIgUAkQgCAFgGAAIgEgCg");
	this.shape_269.setTransform(55.5,151.5,0.599,0.599);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#EA600A").s().p("AgNAYQgDgBgBgDQgBgEACgDIATghQAEgHAHAEQAHAEgEAIIgSAgQgCAFgGAAIgEgCg");
	this.shape_270.setTransform(59.6,144.4,0.599,0.599);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#EA600A").s().p("AADAXIgUgkQgEgIAHgEQAHgDAEAGIAVAlQAEAHgHAEQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgEAAgDgEg");
	this.shape_271.setTransform(59.6,151.5,0.599,0.599);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#EA600A").s().p("AADAVIgTggQgEgHAHgFQAHgEAFAHIASAhQAEAIgHADQAAAAgBABQAAAAgBAAQgBAAAAABQgBAAAAAAQgFAAgCgFg");
	this.shape_272.setTransform(55.5,144.4,0.599,0.599);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#EA600A").s().p("AgQAIQgJAAAAgIQAAgHAJAAIAiAAQAIAAAAAHQAAADgDADQgCACgDAAg");
	this.shape_273.setTransform(61.8,148,0.599,0.599);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#EA600A").s().p("AgYAGQgDgDAAgDQAAgCADgDQACgDAEABIAmAAQADgBACADQADADAAACQAAAIgIAAIgmABQgEAAgCgDg");
	this.shape_274.setTransform(53.4,148,0.599,0.599);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#EA600A").s().p("AAmAgIhUgwQgDgCgBgDQgBgDACgDQACgDADgBQAEgBACACIBUAvQAIAFgFAHQgCAEgFAAIgEgBg");
	this.shape_275.setTransform(52.2,144.9,0.599,0.599);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#EA600A").s().p("AAnAgIhVgxQgIgEAFgHQABgDAEgBQADgBADACIBWAxQAGAEgDAHQgDAEgFAAg");
	this.shape_276.setTransform(62.9,151,0.599,0.599);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#EA600A").s().p("AAhAZIghgfIggAfQgCADgEAAQgDAAgDgDQgFgFAGgGIAmgmQAFgFAGAFIAnAmQAGAGgGAFQgCADgEAAQgDAAgDgDg");
	this.shape_277.setTransform(57.5,153.8,0.599,0.599);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#EA600A").s().p("AA1AjIg1g0Ig1A0QgBADgEgBQgEABgCgDQgFgFAFgGIA7g7QAFgEAGAEIA7A7QAFAGgFAFQgDADgDAAQgDAAgDgDg");
	this.shape_278.setTransform(57.5,156.5,0.599,0.599);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#EA600A").s().p("AgFAZIgmglQgDgCAAgEQAAgEACgCQAGgGAGAGIAgAgIAhggQADgCADgBQAEABACACQACACAAAEQAAAEgCACIgnAlQgDADgDAAQgCAAgDgDg");
	this.shape_279.setTransform(57.5,142.1,0.599,0.599);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#EA600A").s().p("AgFAkIg7g7QgCgCAAgDQAAgDACgDQACgDAEABQADgBACADIA1A0IA1g0QAGgGAGAGQACADAAADQAAADgCACIg7A7QgEACgCAAQgDAAgCgCg");
	this.shape_280.setTransform(57.6,139.5,0.599,0.599);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#EA600A").s().p("AgHAvIAAheQAAgEACgCQADgCACAAQAIAAAAAIIAABeQAAAJgIAAQgHAAAAgJg");
	this.shape_281.setTransform(57.5,141.7,0.599,0.599);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#EA600A").s().p("AgFA4QgCgDAAgDIAAhjQAAgEACgCQADgCACAAQAIAAAAAIIAABjQAAADgCADQgCACgEAAQgCAAgDgCg");
	this.shape_282.setTransform(57.5,154.1,0.599,0.599);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#EA600A").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgIAAgIgHgAgEgFQgDADAAACQAAAIAHAAQADAAADgDQACgCAAgDQAAgCgCgDQgDgCgDAAQgCAAgCACg");
	this.shape_283.setTransform(77,57.7,0.599,0.599);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#EA600A").s().p("AgQARQgHgHAAgKQAAgJAHgHQAIgHAIAAQAJAAAIAHQAGAHABAJQgBAKgGAHQgHAHgKAAQgIAAgIgHgAgHAAQAAADACADQACACADAAQAIAAAAgIQAAgHgIAAQgHAAAAAHg");
	this.shape_284.setTransform(75.2,62.8,0.599,0.599);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#EA600A").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHgAgEgFQgDADAAACQAAAIAHAAQADAAADgDQACgCAAgDQAAgCgCgDQgDgCgDAAQgCAAgCACg");
	this.shape_285.setTransform(88.2,57.7,0.599,0.599);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#EA600A").s().p("AgQARQgGgHAAgKQAAgJAGgHQAHgHAJAAQAKAAAGAHQAIAHgBAJQABAKgIAHQgGAHgKAAQgJAAgHgHgAgHAAQAAADADADQACACACAAQAIAAAAgIQAAgHgIAAQgHAAAAAHg");
	this.shape_286.setTransform(90,62.8,0.599,0.599);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#EA600A").s().p("AgPARQgIgHAAgKQAAgJAIgHQAGgHAJAAQAKAAAGAHQAHAHAAAJQAAAKgHAHQgGAHgKAAQgJAAgGgHgAgHAAQAAAIAHAAQAIAAAAgIQAAgHgIAAQgHAAAAAHg");
	this.shape_287.setTransform(82.6,55.2,0.599,0.599);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#EA600A").s().p("AgQAxQgGgBgFgGQgFgHgBgGQgEgdAEgbQAAgHAGgGQAFgGAGgCQAQgFAQAFQAHACAFAGQAFAFABAHQADAcgDAdQgBAHgFAGQgFAGgHABQgIADgIAAQgHAAgJgDgAgMghQgFABgBAHQgEAZAEAbQABAGAFABQAMADAMgDIAEgDIADgEQADgbgDgZIgDgFIgEgDQgGgCgGAAQgFAAgHACg");
	this.shape_288.setTransform(82.6,69.1,0.599,0.599);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#EA600A").s().p("AgRAFQgCgHAHgCIAVgGQADAAADABQADACABADQABAGgHACIgXAHQgGAAgBgGg");
	this.shape_289.setTransform(85,68.4,0.599,0.599);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#EA600A").s().p("AgMAFQgDgBgCgDQgBgCAAgDQACgHAIABIAVAGQADABABADQACACgBADQgBAGgGAAg");
	this.shape_290.setTransform(85,69.7,0.599,0.599);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#EA600A").s().p("AgyAoQgDgCgBgDQAAgDABgDQAEgGAHADQAUANATAFQAUAGAJgHQAGgEADgMQAEgNAAgPQABgPgDgNQgDgLgFgEQgFgEgTAHQgVAIgZASQgGAFgFgGQgCgDABgDQAAgDADgCQAbgUAXgJQAbgKALAJQARANAAArQgBArgTAOQgKAGgMAAQgbAAgkgWg");
	this.shape_291.setTransform(87,68.8,0.599,0.599);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#EA600A").s().p("AgMAEQgHgCABgGQABgDADgCQADgBADAAIAVAGQAIACgDAHQgBAGgGAAg");
	this.shape_292.setTransform(80.2,68.4,0.599,0.599);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#EA600A").s().p("AgSAFQAAgDABgCQACgDADgBIAVgGQAIgBABAHQABADgBACQgCADgDABIgXAGQgGAAgCgGg");
	this.shape_293.setTransform(80.2,69.7,0.599,0.599);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#EA600A").s().p("AgiA4QgKgHgFgSQgFgPAAgRQAAgNACgOQAFgVAKgIQAMgJAaAKQAXAJAbAUQADACABADQAAADgCADQgEAGgHgFQgZgSgVgIQgTgHgEAEQgFAEgEALQgDAMABAQQAAAPAEANQAEAMAFAEQAJAHAUgGQASgFAVgMQAGgFAFAHQAEAHgHAEQgUAMgVAGQgMAEgKAAQgNAAgJgGg");
	this.shape_294.setTransform(78.2,68.8,0.599,0.599);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#EA600A").s().p("AgdAoQgDgEACgEIAIgSQgQgCgNgEQgGgCABgGQABgGAGAAQAvgDAZgeQAGgFAFAFQAGAEgFAHQgRATgbAJIAEADQACADgBAEIgEAKQAkgUAOgeQADgGAHACQAIAEgEAHQgKAWgUAQQgVASgZAJIgDABQgDAAgDgDg");
	this.shape_295.setTransform(79.4,73.4,0.599,0.599);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#EA600A").s().p("AAVArQgZgKgVgRQgUgRgKgWQgDgHAHgDQAHgDADAHQAPAeAjATIgEgKQgBgDACgEIAEgCQgcgKgQgUQgFgGAGgFQAGgFAFAGQAZAeAvADQAGAAABAGQABAGgGACQgNAEgQADIAIARQACAEgDAFQgDACgDAAg");
	this.shape_296.setTransform(85.8,73.4,0.599,0.599);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#EA600A").s().p("AAXBXQgGgDACgHQABgDACgBQADgCAEABIABgCQADgIAEgEQAEgCAJAAIADAAIAAgDQAAgJADgEQADgEAHgDIADgCIgBgCQgEgIACgFQAAgEAHgHIACgCIgCgCQgHgFAAgFQgCgEAEgJIABgCIgDgCQgIgDgCgEQgDgEAAgIIAAgEIgDAAQgJAAgEgDQgDgCgEgIIgBgDIgDABQgIADgFAAQgFgBgFgHIgDgBIgCABQgGAHgEABQgFAAgIgDIgDgBIgBADQgEAJgDABQgEADgJAAIgDAAIAAAEQAAAIgDAEQgCAEgIADIgDACIABACQADAJgBAEQgBAFgFAFIgDACIADACQAFAHABAEQABAFgDAIIgBACIADACQAIADACAEQADAEAAAJIAAADIADAAQAJAAAEACQAEAEADAIIABACQAEgBACACQADACABACQABAEgBACQgCADgDABQgGACgFgCQgFgBgEgLIgCgDIgEAAQgKAAgEgFQgFgEAAgKIAAgEIgDgCQgKgEgCgFQgCgFADgKIACgDIgDgDQgHgIAAgGQAAgEAHgIIADgDIgCgEQgDgKACgFQACgEAKgGIADgBIAAgEQAAgKAFgEQAEgFAKABIAEAAIACgEQAEgKAFgCQAGgCAJADIAEACIACgCQAKgIADAAQAGAAAHAIIADACIAEgCQAKgDAFACQAEACAGAKIABAEIAEAAQAKgBAEAFQAEAEAAAKIABAEQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAQAKAGABAEQADAFgEAKIgCAEIACADQAIAHAAAFQAAAHgIAHIgCADIACADQAEAKgDAFQgBAFgKAEIgEACIgBAEQAAAKgEAEQgEAFgKAAIgEAAIgBADQgGALgEABIgFABg");
	this.shape_297.setTransform(82.6,62.3,0.599,0.599);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#EA600A").s().p("Ah/CNQgBgCgGgCQgLgFgDgFQgEgGABgMQAAgGgCgCIgFgGQgIgHgDgHQgCgGADgMQACgGAAgCIgEgIQgGgJAAgHQAAgIAGgJQADgEABgDQAAgDgCgFQgDgLACgGQADgHAIgHIAFgGQACgCAAgHQgBgMAEgFQAEgGAKgEIAHgFQADgCABgGQAEgMAEgDQAFgEAMgCIAIgCQACgBADgGQAHgKAFgCQAGgDAMABIAIABIAHgFQAJgIAHgBQAGAAALAEIAHADQACAAAHgDQAKgEAHAAQAGABAJAIQADAEAEABIAIAAQAMgCAGADQAFACAHAKIAGAHIAIACQALACAFAEQAGAFACAKIAEAIIAHAFQAKAEAEAGQAEAFAAAMIABAJIAFAGQAKAJABAFQACAGgEALIgBAIQABADADAEQAGAJAAAIQAAAHgGAJIgEAIIABAIQAEAMgCAGQgCAGgJAIIgFAGIgBAIQAAAMgEAGQgDAFgLAFIgHAEQgCADgFAAIgFgCQgFgFAFgGQAEgFAIgDIAIgFQABgBAAgIQAAgKACgFQACgEAIgHIAGgHQABgCgCgGQgDgLAAgEQACgHAEgHQAEgGAAgCQAAgCgEgGQgFgIgBgGQAAgEADgKQACgHgBgCQgBgCgFgEQgIgHgCgFQgCgFAAgKQAAgHgBgBIgIgFQgJgEgDgEQgEgFgDgJQgBgHgCgBQgDgCgGgBQgJgBgFgDQgFgDgFgIQgEgGgCgBIgJAAQgKABgFgBQgFgCgIgGIgHgFQgDAAgGADQgHAEgHAAQgFAAgJgEQgGgDgCAAIgIAFQgHAGgFACQgGABgJgBIgJAAQgCABgEAGQgFAIgFADQgFADgJABIgJADQgBACgCAGQgDAJgEAFQgCADgKAFQgHADgBACQgBABAAAHQAAAKgDAFQgCAFgHAHQgGAEAAACQgBACACAHQADAHAAAHQgCAGgFAIQgDAGAAACQAAACADAGQAFAHACAHQAAAHgDAIQgCAGABACIAGAHQAHAHACAEQADAFAAAKQAAAIABABQABACAHADQAJAEADAEQAFAGgFAFQgDADgDAAQgDAAgDgEg");
	this.shape_298.setTransform(82.6,60.6,0.599,0.599);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#EA600A").s().p("AA8AtIiGgtQgHgBACgIIAKgeQACgEACgBQADgBADABICHAsQADABABADQABADgBADIgKAfQgBADgDABIgDABgAg+gLIB4AoIAFgRIh4gng");
	this.shape_299.setTransform(130.7,110.7,0.599,0.599);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#EA600A").s().p("ABgAoIjEhAQgHgDACgHQADgHAHACIDEBBQAHACgCAIQgDAFgFAAg");
	this.shape_300.setTransform(130.4,111.6,0.599,0.599);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#EA600A").s().p("AAQAcIgtgIQgIgBABgIQABgDACgCQADgCADABIAnAHIAKghQADgHAHACQADABABADQACADgBADIgMAmQgCAGgGAAg");
	this.shape_301.setTransform(117,118.3,0.599,0.599);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#EA600A").s().p("AANAmIgmhCQgEgHAHgEQAGgEAEAHIAmBCQACADgBADQgBADgDACIgDABQgFAAgCgEg");
	this.shape_302.setTransform(118.1,119.6,0.599,0.599);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#EA600A").s().p("ACCA4IkGgrQgEgBgCgDQgBgDABgEIAcg1QACgFAGABIDiAlQAFABABAGIAJA6IAAACQAAAIgIAAgAh3AAIDxAoIgGgsIjXgjg");
	this.shape_303.setTransform(127.5,121.2,0.599,0.599);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#EA600A").s().p("AgVA4QgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgDgBgBgEIgHgtQAAgDABgBQACgDADAAQAIgBABAGIAGAlIAjgGIgNhPQgBgHAHgCQAHgBACAIIAOBWQABAEgCACQgCADgDAAIgyAJg");
	this.shape_304.setTransform(134.3,125.6,0.599,0.599);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#EA600A").s().p("AASAwIgygJQgDAAgBgDQgDgCABgEIAMhHQAAgCADgCQADgDADABIAyAJQADAAACADQACACgBADIgMBHQgBAHgGAAgAgWAZIAjAGIAKg4IgjgGg");
	this.shape_305.setTransform(131,125.6,0.599,0.599);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#EA600A").s().p("AgvgEQgGgCABgGQABgHAGAAIBbgBQADABADACQACADgBAEIgFAZIgEAEIgEACgAAGgEIAcAHIACgHg");
	this.shape_306.setTransform(126.4,116.7,0.599,0.599);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#EA600A").s().p("AAAATQgIAAgGgEQgGgFgBgIQAAgGAEgGQAGgHAKgBQAIAAAGAFQAHAFABAHQABAHgFAGQgFAGgKABgAgFAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAEAFAAQADAAACgCIABgCQAAgDgGAAIAAAAQgEABgBACg");
	this.shape_307.setTransform(131.7,114.7,0.599,0.599);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#EA600A").s().p("AgHASQgIgEgEgIQgDgIADgFQAGgMANABIAIABQAJAFADAHQADAHgDAHQgGALgNgBIgIgBgAgFgBIAAABQABACADABIACABQABAAABAAQABAAAAAAQABgBAAAAQABAAAAgBIAAgCIgEgCIgCgBQgBAAgBAAQgBAAAAAAQgBABAAAAQgBAAAAABg");
	this.shape_308.setTransform(126.2,113.9,0.599,0.599);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#EA600A").s().p("AgCAQQgHgBgEgFQgEgGABgGQABgGAFgEQAFgEAFAAIADAAQAHABAEAGQAEAGgCAGQAAAGgFAEQgFAEgGAAgAgBAAIABABIAAABQAAAAABgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAgBAAQAAgBgBAAIAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAg");
	this.shape_309.setTransform(126.4,129.3,0.599,0.599);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#EA600A").s().p("AgCARQgHgCgEgFQgEgGABgGQABgGAFgEQAFgEAFAAIADAAQAHABAEAGQAEAGgBAGQgBAGgFAEQgFAEgGAAgAgBAAIABABIAAABQAAAAAAAAQABAAAAgBQAAAAAAAAQABAAAAgBIgCgBIAAAAg");
	this.shape_310.setTransform(127,125.8,0.599,0.599);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#EA600A").s().p("AgnBIQgHAAgBgGQgDgUADgVQAGgiAXgaQAXgaAigJQADgBADACQADABABADQACAHgIACQgdAJgUAWQgVAXgFAeQgDARADASQABAHgHACg");
	this.shape_311.setTransform(124.2,114.3,0.599,0.599);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#EA600A").s().p("AgFBFQgGgEAEgGQAHgQADgSQAIgtgcglQgFgFAGgFQADgCADAAQADAAACADQAPAUAGAZQAGAYgEAYQgDAVgKASQgDAEgDAAIgEgBg");
	this.shape_312.setTransform(134.4,116.5,0.599,0.599);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#EA600A").s().p("AgUBvQg8gJgkgyQgjgyAKg7QAEgcAOgXQACgDADgBQADAAADABQACACABADQABADgCADQgNAWgDAXQgJA2AgAsQAgAtA1AIQAwAJArgbQAqgaAOgwQADgGAHACQADAAABADQACADgBADQgOAvgoAdQgnAcgwAAQgNAAgKgCg");
	this.shape_313.setTransform(126.8,127.8,0.599,0.599);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#EA600A").s().p("AAWAgIgtgIQgHgBAAgHIACgoQAAgDACgCQADgCADAAQADAAACADQACACAAADIgBAhIAnAHQAHACgBAHQgBAGgHAAg");
	this.shape_314.setTransform(139,121.7,0.599,0.599);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#EA600A").s().p("AgiAfQgFgGAFgFIA6gyQAGgFAFAFQAFAGgFAFIg7AyQgCACgCAAQgEAAgCgCg");
	this.shape_315.setTransform(137.5,122.8,0.599,0.599);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#EA600A").s().p("AgqAWQgHgCACgHQABgCADgCIAFAAQAVAHAVgJQAVgIALgTQAEgGAFADQACABABADIAAAFQgNAXgaALQgOAFgPAAQgMAAgKgDg");
	this.shape_316.setTransform(36.5,118.8,0.599,0.599);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#EA600A").s().p("Ah4BFQgIgFgDgIIgCgFQgFgMAFgMQAFgMAMgEIDPhTIAMgCQAKAAAHAGQAIAFAEAIIACAFQAFAMgGALQgFANgMAEIjPBSQgGADgFAAQgKAAgIgGgABgg7IjPBSQgGACgDAHQgDAHACAHIACAFQAEALANgBQADABADgCIDPhSQAIgEACgFQADgHgDgHIgCgEQgEgLgMAAg");
	this.shape_317.setTransform(32.3,108.2,0.599,0.599);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#EA600A").s().p("AgYAlQgMgHgFgNQgHgRAIgRQAHgQARgIQAKgDAGAAQAOAAALAIQALAIAGAMQAHAQgIASQgHARgRAHQgIADgJAAQgNAAgLgIgAgLgcQgMAFgFAMQgFALAFAMQADAJAIAGQAIAFAJAAQAFAAAHgDQAMgEAFgNQAFgLgFgLQgEgKgHgFQgJgGgJAAQgFAAgGADg");
	this.shape_318.setTransform(42.2,107.9,0.599,0.599);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#EA600A").s().p("AgmAQQgGgNAJgOQAIgNAQgFQALgEAIgBQAZABAHASQAFAMgIANQgIANgQAIQgLADgIAAQgZAAgHgSgAgGgRQgMAFgFAJQgGAHADAHQAEAKAQAAQAGAAAIgDQALgFAFgIQAGgHgDgIQgEgKgPAAQgIAAgGADg");
	this.shape_319.setTransform(34.8,114.3,0.599,0.599);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#EA600A").s().p("AgdAzQgfAAgPgTQgBgBAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQABgDACgBQACgCADAAQADABABACQAMAOAYAAIAAAAQAWgBAWgLQAbgMANgQQAJgMAAgNQgNANgYACQgJAAgWgDIgRgDQgSgCgNAGQgGACgDgGQgCgGAGgDQAQgGAVACIASACQAWAEAGgBQAMgBAJgFQALgFACgIQACgFAEAAQAEAAADADQAGALgBAPQgCAOgKAMQgOATgfAPQgbAMgXAAg");
	this.shape_320.setTransform(39.7,114.1,0.599,0.599);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#EA600A").s().p("AgnA3QgQgDgLgJQgLgJgDgNQgBgEADgDQAEgDADADQAIAEAMgEQAKgDAIgHQAKgHAKgOIALgPQANgQASgHQAHgCACAHQABACgBADQgCADgCAAQgPAFgMAOIgJAOQgNAQgJAHQgQAPgVAAQAJAKAPACQAVAEAcgKQAZgJAPgOQASgPgCgTQgBgGAHgBQAHAAAAAGQADAXgXAWQgPAPgeALQgWAIgUAAg");
	this.shape_321.setTransform(30.7,117.3,0.599,0.599);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#EA600A").s().p("AgMAPQgFgEgCgHQgCgGAFgHQAEgHAJgCIAEAAQAHgBAFAFQAGAEABAHQACAHgFAGQgFAHgIACIgEAAQgGAAgGgEgAAAgFQgDABgCACQAAAAAAABQgBABAAAAQAAAAAAAAQAAABAAAAQABAFAFAAIABAAQAHgCgBgEQgBgFgFAAg");
	this.shape_322.setTransform(30.1,113,0.599,0.599);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#EA600A").s().p("AgQALQgFgHADgHQACgJAHgEQAFgDAFAAQALAAAGAJQAEAIgCAGQgDAIgHAEQgFAEgFAAQgLAAgFgJgAgCgEQgCABgBADQgBAAAAAAQAAABAAAAQAAABABABQAAAAAAABQACACADAAIADgBQADgCABgDQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAgBgBQgBgCgEAAg");
	this.shape_323.setTransform(37.2,110.2,0.599,0.599);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#EA600A").s().p("AiMBHQgFAAgBgGQgCgXAMgYQAUgjAygZQAtgWAogFQApgFAgAOQArAUAMArQACAHgGACQgDABgCgCQgDgCgBgCQgLgmglgQQg7gahXAsQguAWgRAfQgMAUACAUQAAAHgGAAg");
	this.shape_324.setTransform(33.7,105.2,0.599,0.599);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#EA600A").s().p("AAaAVQgHgOgOgJQgOgKgLADQgEACgBADQgDAFgGgCQgGgDADgGQADgIAKgEIAAAAQAQgFARAMQATALAKATQADAGgGADIgDABQgEAAgCgEg");
	this.shape_325.setTransform(40.1,104.5,0.599,0.599);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#EA600A").s().p("Ag6BvIgCABQgRAHgQgHQgQgHgHgRIgCgFQgMABgKgHQgLgGgEgLQgGgPAGgOQgOgGgFgOQgEgJACgJQACgKAGgIQgFgFgEgHQgFgNAFgNQAGgNAMgGQAHgDACAGQADAGgGADQgIAEgDAIQgDAIADAIQADAHAHADQAEADAAADQAAAEgDACQgHAFgCAHQgDAIADAGQAFANANABQAEAAABAEQACAEgCADQgJALAFANQAEAIAIAEQAIAEAJgCQAEgBACACQACACAAADIACAIQAFALALAFQALAFAMgFIAFgCQAFgFAEAGQAHAKAMADQALAEALgEQAKgFAGgKQACgDADAAQADgBACACQASAPAUgIQAKgEAGgIQAGgJABgKQAAgDADgCQADgCACABQAMADALgEQALgEAGgLQAGgKgCgMQgBgCACgDQABgCADAAIAGgCQAMgFAEgLQAFgLgEgKIgFgIQgBgCAAgDQABgEACgBQAIgEADgJQAEgJgEgIQgFgMgOgDQgEgBgBgDQgBgDACgEQAIgKgEgMQgBgDABgCQAAgBAAAAQABgBAAAAQAAgBABAAQABAAAAgBQAHgCACAGQAFANgFAPQANAFAHAPQAEALgDAMQgDAMgJAIIACAFQAHAQgHAPQgIASgQAFIgDABQABAPgIANQgIAMgOAGQgMAEgMgBQgGAZgYAJQgYAKgWgOQgHAKgLAEQgJADgJAAQgVAAgOgPg");
	this.shape_326.setTransform(35,116.8,0.599,0.599);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#EA600A").s().p("AAGApQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAIgWgRQgMgJgCgOQgDgPAKgLQALgOAQgBQAMAAAKAHQAMAKACAPQACANgJAMIgSAXQgBACgDAAgAgQgSQgGAHACAJQABAIAHAFIARAOIANgRQAFgIgBgIQgBgJgIgGQgGgEgHAAQgJAAgHAJg");
	this.shape_327.setTransform(35.8,71.7,0.599,0.599);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#EA600A").s().p("AgXAKQgCgHAGgCIAhgOQAGgCADAGQADAHgGACIgiAOIgCAAQgFAAgCgEg");
	this.shape_328.setTransform(33.1,85.4,0.599,0.599);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#EA600A").s().p("AASAJIgkgEQgHgBABgGQABgHAHABIAjAEQAHABgBAGQAAAGgGAAg");
	this.shape_329.setTransform(33.5,88.2,0.599,0.599);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#EA600A").s().p("AAKARIgcgVQgFgEADgGQAFgGAFAFIAdAVQAFAEgEAGQgCACgDAAIgFgBg");
	this.shape_330.setTransform(32.5,90.8,0.599,0.599);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#EA600A").s().p("AgPAUQgCgBAAgDQgBgDACgCIAVgdQAFgGAFAFQAFAEgEAGIgVAcQgCADgDAAIgFgCg");
	this.shape_331.setTransform(31.4,83.3,0.599,0.599);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#EA600A").s().p("AgJBOQgEgGAFgEIAJgLQAUgcgEggQgFgigagVQgHgFgGgCQgFgEACgGQAEgGAGADIAOAJQAfAYAFAoQAGAmgYAgIgMANQgBACgDAAQgDAAgCgCg");
	this.shape_332.setTransform(32.1,87.1,0.599,0.599);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#EA600A").s().p("AggAsQgGgFAFgFIA4hLQACgCADgBQACAAADABQAGAFgFAFIg4BLQgCADgEAAIgEgBg");
	this.shape_333.setTransform(42.2,83.8,0.599,0.599);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#EA600A").s().p("AgSAZQgGgDAEgGIAdgnQAFgFAFADQAGAFgEAFIgdAnQgDADgDAAIgEgCg");
	this.shape_334.setTransform(37.7,74.3,0.599,0.599);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#EA600A").s().p("AgSAaQgGgEAFgGIAdgnQAEgFAGAEQACACAAADQABADgCACIgdAnQgDACgDAAg");
	this.shape_335.setTransform(39.1,75.4,0.599,0.599);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#EA600A").s().p("AgSAaQgGgFAFgFIAdgnQABgCADgBQADAAACACQADABAAADQABADgCACIgdAnQgCADgEAAIgEgBg");
	this.shape_336.setTransform(40.5,76.4,0.599,0.599);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#EA600A").s().p("AgSAaQgFgEADgGIAdgnQAFgGAFAFQAFAEgDAFIgeAnQgBADgEAAQgBAAAAAAQgBAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape_337.setTransform(41.9,77.5,0.599,0.599);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#EA600A").s().p("AgSAaQgDgCAAgDQgBgCACgDIAdgnQAFgFAFAEQAGAEgFAGIgdAmQgCADgDAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_338.setTransform(43.3,78.5,0.599,0.599);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#EA600A").s().p("AgSAZQgGgDAEgGIAegnQABgCADgBQADAAACABQAGAFgEAFIgdAnQgDADgDAAIgEgCg");
	this.shape_339.setTransform(44.7,79.6,0.599,0.599);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#EA600A").s().p("AAzBOIiMhpQgGgEgBgIQgBgHAFgGIAQgWQAGgHAJAAQAHAAAEADICLBpQAGAFABAIQACAHgFAGIgQAWQgHAHgIAAQgGAAgFgEgAhBhCIgQAWQgDAEAEACICLBpIADABQAAAAABAAQAAAAABAAQAAAAABgBQAAAAAAgBIARgVIABgEIgCgCIiMhpIgCgBQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAgBAAg");
	this.shape_340.setTransform(41.2,77,0.599,0.599);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#EA600A").s().p("AgsBEQgQgYAAgcQABgcARgXQARgXAagIQAcgIAbAJQAGADgCAGQgCAHgHgCQgWgIgYAHQgWAHgOATQgPATAAAXQAAAYAOAUQABACAAADQgBADgCABQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgEAAgCgDg");
	this.shape_341.setTransform(39.3,91.5,0.599,0.599);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#EA600A").s().p("AgaBMIhUhAQgCgBgBgDQAAgDACgCQABgDADAAQADAAACABIBVBAQAXASAegEQAegEATgZQASgYgEgdQgEgegZgTIglgcQgGgEAFgGQABgCADAAQADgBACACIAmAcQAcAWAGAkQAEAjgVAdQgNARgTAJQgSAJgUAAQgcAAgYgSg");
	this.shape_342.setTransform(37,90.4,0.599,0.599);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#EA600A").s().p("AghCEQgdgWgFgjQgFgkAWgdIBpiMQAEgFAGADQAGAFgFAFIhpCMQgSAYAEAfQAEAeAZASQACACAAADQABADgCACQgCADgEAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_343.setTransform(32.3,83.1,0.599,0.599);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#EA600A").s().p("AgWAeQAAgbAQgVQAHgLAJgGQAGgEAFAGQAEAHgGADQgHAGgHAIQgLARAAAWQAAAHgIAAQgIAAAAgHg");
	this.shape_344.setTransform(81.7,142.9,0.599,0.599);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#EA600A").s().p("AgfBLQgdgNAAgnQAAgjAcgiQAOgQAOgLQAEgDAEADIAJAIQALAJAIALQAdAiAAAiQAAAngdANQgDABgDgBQgDgBgBgDQgDgHAHgDQAUgJAAgdQAAgYgTgaQgLgQgQgOQgPAOgMAQQgSAaAAAYQAAAdAUAJQAHADgDAHQgCAFgFAAg");
	this.shape_345.setTransform(82.7,143.4,0.599,0.599);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#EA600A").s().p("AgGAhIgBhBQAAgEADgCQACgCACAAQADAAACACQADACAAAEIAABBQAAAEgCACQgDACgDAAQgGAAAAgIg");
	this.shape_346.setTransform(82.7,147.7,0.599,0.599);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#EA600A").s().p("AgHAUIAAgnQAAgDADgCQACgDACAAQAHAAAAAIIABAnQAAAIgIAAQgHAAAAgIg");
	this.shape_347.setTransform(82,154,0.599,0.599);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#EA600A").s().p("AgwASQgVgTAAgcQAAgIAIAAQAIAAgBAIQABAWAQAOQAQAQAVABQAXgBAPgQQAQgOAAgXQABgHAHgBQADABACACQACACABADQgBAegUASQgUAUgdABQgcAAgUgVg");
	this.shape_348.setTransform(85.7,157,0.599,0.599);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#EA600A").s().p("AgoAQQgQgQgBgYQABgDACgCQACgDADAAQADAAACADQADACAAADQAAARAMAMQAMAMARABQARgBANgMQAMgMAAgRQAAgDADgCQACgDADAAQAIAAgBAIQABAYgRAQQgRARgYAAQgWAAgSgRg");
	this.shape_349.setTransform(79,154.1,0.599,0.599);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#EA600A").s().p("AiMAbQgDgDAAgDIAAgpQAAgDADgCQACgCADAAIEPgBQADAAADADQACACAAADIAAApQAAACgCADQgCACgEAAIkPABQgDAAgCgCgAiAgMIAAAaIEBgBIgBgag");
	this.shape_350.setTransform(82.7,163.9,0.599,0.599);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#EA600A").s().p("ABoAtIAAhRIjPAAIAAAnQAAAIgIAAQgHAAgBgIIAAguQABgIAHAAIDfAAQACAAADACQADADAAACIAABZQAAADgDACQgCACgDAAQgHAAgBgHg");
	this.shape_351.setTransform(82.7,152.3,0.599,0.599);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#EA600A").s().p("AhdBHQgDAAgCgCQgDgDAAgDIAAh9QAAgDADgCQACgDADAAQADAAACADQACACAAADIABB2ICrgBIAAhGQAAgIAIAAQAHAAAAAIIABBOQAAADgDACQgCADgDAAg");
	this.shape_352.setTransform(82.7,158.9,0.599,0.599);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#EA600A").s().p("AAGAZQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgmgaQgEgDADgFQADgEAFACIAgAXIAYggQADgFAFADQABABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgaAlQgBABAAABQAAAAgBAAQAAABgBAAQgBAAAAAAg");
	this.shape_353.setTransform(39.8,131.1,0.599,0.599);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#EA600A").s().p("AgjAYQgEgEACgEIAbgmQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQAAAAABABQAAAAAAAAIAmAaQAEADgDAFQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAgBIghgWIgXAgQgCADgDAAg");
	this.shape_354.setTransform(41.6,139.8,0.599,0.599);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#EA600A").s().p("AARBnQgGAAAAgFIghjBQgBgFAGgBQAGgBABAFIAgDBQABAGgFABg");
	this.shape_355.setTransform(40.7,135.5,0.599,0.599);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#EA600A").s().p("AAXAfIgugEQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAgBgBIgBgEIAEguQABgGAFABQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAIgEAoIAnAEQAGABAAAFQgBAFgFAAg");
	this.shape_356.setTransform(44.6,132.1,0.599,0.599);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#EA600A").s().p("AATAfQgGgBABgFIADgoIgngEQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQABgFAGAAIAtAEQABAAAAAAQAAABABAAQAAAAABAAQAAABABAAQAAABAAAAQAAAAABABQAAAAAAABQAAABAAAAIgEAuQgBAFgFAAg");
	this.shape_357.setTransform(36.9,138.8,0.599,0.599);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#EA600A").s().p("AhPBDQgDgFAEgDICWh9QAEgEAEAEQAEAFgFAEIiWB9IgDABQgBAAgBAAQAAAAgBgBQgBAAAAAAQAAgBgBAAg");
	this.shape_358.setTransform(40.7,135.4,0.599,0.599);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#EA600A").s().p("AgGAhIgTgpQgDgFAGgDIApgTQAFgDADAFQACAGgFACIgkARIAQAkQACAFgFADIgBABQgEAAgCgEg");
	this.shape_359.setTransform(45,137.2,0.599,0.599);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#EA600A").s().p("AgaAhQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBABAAQAAAAAAgBQABAAAAgBQABAAAAAAIAkgSIgQgkQgDgFAGgCQAEgDADAFIATAqQADAFgGADIgpATIgCABQgEAAgCgEg");
	this.shape_360.setTransform(36.5,133.7,0.599,0.599);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#EA600A").s().p("ABaAnIi3hCQgGgCACgGQACgFAGACIC3BDQAGACgCAFQgCAEgEAAg");
	this.shape_361.setTransform(40.7,135.4,0.599,0.599);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#EA600A").s().p("AgGAhIgTgpQgDgFAGgDIApgTQAFgDADAFQACAGgFACIgkARIAQAkQACAFgFADIgBABQgEAAgCgEg");
	this.shape_362.setTransform(45,137.2,0.599,0.599);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#EA600A").s().p("AgaAhQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBABAAQAAAAAAgBQABAAAAgBQABAAAAAAIAkgSIgQgkQgDgFAGgCQAEgDADAFIATAqQADAFgGADIgpATIgCABQgEAAgCgEg");
	this.shape_363.setTransform(36.5,133.7,0.599,0.599);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#EA600A").s().p("ABaAnIi3hCQgGgCACgGQACgFAGACIC3BDQAGACgCAFQgCAEgEAAg");
	this.shape_364.setTransform(40.7,135.4,0.599,0.599);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#EA600A").s().p("AgKA4IgRgGQgIgDgEgIQgDgIADgIIAYhCQAFgNAOAAIAHABIARAGQAIADAEAIQADAIgCAIIgZBCQgFANgNAAgAgEgnIgYBCQgCAEACADQABAEAEABIARAGIAEABQAFAAACgGIAZhCQABgEgCgDQgBgEgEgBIgRgGIgDgBQgFAAgDAGg");
	this.shape_365.setTransform(32.4,132.4,0.599,0.599);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#EA600A").s().p("AgCAgQgMgEgGgNQgGgMAFgMQAEgNANgGQALgGANAFQAGACgCAFQgCAGgGgCQgIgDgIADQgHAEgDAJQgEAHAEAIQAEAIAHAEQABAAABAAQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQgBAEgEAAg");
	this.shape_366.setTransform(30.5,131.8,0.599,0.599);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#EA600A").s().p("AgxCJQgsgRgZgkQgZglgBgsQgBgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQAGAAAAAFQABAoAXAiQAZAiAnAPQAzATAygXQAygXAUg1QATgygYgzQgXgyg0gTQgngPgoALQgpALgbAgQgEAEgEgEQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAdgjAtgLQArgMArAQQA5AUAZA3QAZA3gVA3QgUA4g3AaQgdAOggAAQgYAAgZgJg");
	this.shape_367.setTransform(40.8,135.5,0.599,0.599);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#EA600A").s().p("AAUAiIgqgMIgEgDQgCgCABgDIAMgqQACgGAGACQAGACgCAGIgKAjIAkAKQADABABACQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgCAFgFAAg");
	this.shape_368.setTransform(66.1,60.6,0.599,0.599);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#EA600A").s().p("AgdAbQAAAAgBgBQgBAAAAAAQgBgBAAAAQAAgBgBAAQgBgCABgDIAPg3QACgHAGACQAGACgCAGIgNAxIAxANQAGACgCAGQgBAFgFAAg");
	this.shape_369.setTransform(61.8,63,0.599,0.599);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#EA600A").s().p("AgpAkQgCgBgCgDQAAAAAAAAQgBgBAAAAQAAgBAAgBQAAAAABgBIAVhQQACgGAGACQAGACgBAGIgUBJIBJATQAGACgCAGQgBAFgFAAg");
	this.shape_370.setTransform(65.1,61,0.599,0.599);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#EA600A").s().p("AAIAiQgGgCACgGIAKgkIgkgKQgGgCABgGQACgGAGACIAqALIAEADQACACgBADIgMAqQgBAFgFAAg");
	this.shape_371.setTransform(49.4,70.7,0.599,0.599);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#EA600A").s().p("AALAqQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBIANgxIgxgNQgGgCACgGQACgHAGACIA3APQACABACACQABACgBADIgPA3QgBAFgFAAg");
	this.shape_372.setTransform(53.7,68.3,0.599,0.599);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#EA600A").s().p("AARA5QgGgCABgGIAUhJIhJgUQgGgCACgGQACgGAGACIBPAVIAEADQABACgBADIgVBPQgBAFgFAAg");
	this.shape_373.setTransform(50.4,70.3,0.599,0.599);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#EA600A").s().p("AicBbQgDgFAGgEIEtitQAGgEADAGQAEAGgHADIktCtIgDABQgEAAgCgDg");
	this.shape_374.setTransform(57.8,65.6,0.599,0.599);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#EA600A").s().p("AgJAiQgFAAgBgFIgMgqQgBgDACgCIAEgDIAqgLQAGgCACAGQACAGgHACIgkAKIAKAkQACAGgGACg");
	this.shape_375.setTransform(66.1,70.7,0.599,0.599);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#EA600A").s().p("AgSAlIgPg3QgBgDABgCQACgCACgBIA3gPQAGgCACAHQACAGgGACIgxANIANAxQAAABABAAQAAABAAAAQAAABgBABQAAAAAAABQgCACgCABIgCAAQgFAAgBgFg");
	this.shape_376.setTransform(61.8,68.3,0.599,0.599);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#EA600A").s().p("AgYA0IgVhPQgBgDABgCIAEgDIBPgVQAGgCACAGQACAGgGACIhJAUIAUBJQABAGgGACIgCAAQgFAAgBgFg");
	this.shape_377.setTransform(65.1,70.3,0.599,0.599);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#EA600A").s().p("AgUAiQgFAAgCgFQAAgBAAAAQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABgBABAAIAkgKIgKgjQgCgGAGgCQAGgCACAGIAMAqQABADgCACIgEADIgqAMg");
	this.shape_378.setTransform(49.4,60.6,0.599,0.599);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#EA600A").s().p("AghAlQgCgGAGgCIAxgNIgNgxQgCgGAGgCQAGgCACAHIAPA3QABADgBACQgCACgCABIg5APQgFAAgBgFg");
	this.shape_379.setTransform(53.7,63,0.599,0.599);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#EA600A").s().p("AgtA0QgCgGAGgCIBJgTIgUhJQgBgHAGgBQAGgCACAGIAVBQQABABAAAAQAAABAAABQAAAAgBABQAAAAAAAAQgCADgCABIhRAVQgFAAgBgFg");
	this.shape_380.setTransform(50.4,61,0.599,0.599);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#EA600A").s().p("ACUBdIktiuQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBQAAgDABgCQADgGAGADIEtCuQAGADgDAGQgCADgEAAIgDgBg");
	this.shape_381.setTransform(57.8,65.6,0.599,0.599);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#EA600A").s().p("AgjAUQgFgEAFgFIAfgeQACgCACAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABABIAfAeQAFAFgFAEIgFACIgEgCIgbgaIgaAaQgCACgCAAQgDAAgCgCg");
	this.shape_382.setTransform(57.8,74.7,0.599,0.599);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#EA600A").s().p("AgtAZQgEgEAEgFIApgoQACgCACAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABABIApAoQAEAFgEAEIgFACQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIglgjIgjAjQgDACgCAAQgDAAgCgCg");
	this.shape_383.setTransform(57.8,69.6,0.599,0.599);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#EA600A").s().p("Ag+AhQgFgEAFgFIA6g5QACgCACAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABABIA6A5QAFAFgFAEQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBIg2g1Ig1A1QgDADgCAAQgCAAgCgDg");
	this.shape_384.setTransform(57.8,73.2,0.599,0.599);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#EA600A").s().p("AgEAUIgfgeQgFgFAFgEQAFgFAEAFIAaAZIAbgZQACgCADAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQAFAEgFAFIgfAeIgFACIgEgCg");
	this.shape_385.setTransform(57.8,56.6,0.599,0.599);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#EA600A").s().p("AgEAZIgpgoQgEgEAEgFQAFgFAFAFIAjAkIAlgkQAEgFAFAFQAEAFgEAEIgpAoIgFACIgEgCg");
	this.shape_386.setTransform(57.8,61.7,0.599,0.599);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#EA600A").s().p("AgEAiIg6g6QgFgEAFgFQAEgEAFAEIA1A1IA2g1QAFgEAEAEQAFAFgFAEIg6A6QgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_387.setTransform(57.8,58.1,0.599,0.599);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#EA600A").s().p("AgFCvIAAldQAAgGAFAAQAGAAAAAGIAAFdQAAAGgGAAQgFAAAAgGg");
	this.shape_388.setTransform(57.8,65.7,0.599,0.599);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#EA600A").s().p("AB6BJIgmgDQgDAAgCgDIgVgcIgjgCQgDAAgCgDIgUgcIgkgCQgDgBgBgCIgWgbIgjgCQgDgBgBgCIgXgeQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQABgDACgBQAFgEAEAFIAVAcIAjADQADAAACACIAVAcIAiADQADAAACACIAVAbIAkADQADAAABACIAWAcIAjADQAGABAAAGQgBAGgGAAg");
	this.shape_389.setTransform(126.5,91.3,0.599,0.599);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#EA600A").s().p("AB6BJIgmgDQgCAAgDgDIgVgcIgjgCQgEgBgBgCIgUgcIgjgDQgDAAgCgCIgVgbIgjgDQgDAAgCgCIgXgeQgEgGAFgDQAFgEAEAFIAWAcIAjACIAEADIAWAcIAiADQADAAABACIAWAbIAjADQADAAABACIAWAcIAjADQAHABgBAGQAAAGgGAAg");
	this.shape_390.setTransform(127.7,89.2,0.599,0.599);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#EA600A").s().p("AB6BJIgmgDIgFgCIgVgcIgjgDQgDAAgCgDIgUgcIgjgCQgDAAgCgDIgVgbIgkgCQgDAAgBgDIgXgeQgEgFAFgEQAFgEAEAFIAVAcIAjADQADAAACACIAVAcIAjADQADABABABIAWAbIAjADIAEACIAWAcIAjADQAAAAABAAQABABAAAAQABAAAAAAQABABAAAAQACACAAADQAAAGgHAAg");
	this.shape_391.setTransform(128.9,87,0.599,0.599);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#EA600A").s().p("AASAuIhCgkQgHgEgDgIQgDgJAFgIIAJgRQAGgMANAAQAGAAAFADIBBAkQAIAEADAIQACAJgEAIIgJARQgGAMgNAAQgHAAgEgDgAgkgeIgJARQgCAFABACQABAEAEACIBBAjIAFABQAFAAACgFIAKgRQABgDgBgEQgBgEgDgCIhBgjIgFgBQgFAAgDAFg");
	this.shape_392.setTransform(132,80.9,0.599,0.599);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#EA600A").s().p("AAVAbQgGgDADgGQAFgIgDgJQgDgIgIgEQgIgFgIADQgJADgEAIQgEAFgFgDQgFgDACgFQAHgNAOgEQAOgEAMAHQANAHAEAOQAEANgHANQgBADgEAAg");
	this.shape_393.setTransform(132.9,79.1,0.599,0.599);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#EA600A").s().p("AhICHQg4gfgSg8QgSg8Aeg4QAYgqAqgWQArgVAtAGQAGABgBAGQgBAGgGgBQgpgFgnATQgmAUgWAnQgcAzARA3QAQA4AzAbQAzAcA3gQQA5gSAbgyQAVgngFgrQgFgrgcghQgFgFAFgEQAFgEAEAEQAgAlAFAuQAFAvgXArQgeA4g9ASQgVAGgXAAQgmAAgigSg");
	this.shape_394.setTransform(127.6,89.1,0.599,0.599);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#EA600A").s().p("AgDAFQgBgBAAAAQgBgBAAAAQAAgBAAgBQgBAAAAgBQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAIgBAFQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAgBAAQAAAAgBgBQAAAAAAAAg");
	this.shape_395.setTransform(129.2,95.2,0.599,0.599);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#EA600A").s().p("AgDAEQgBAAAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAgBAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAAAIgFACQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_396.setTransform(125.5,93.2,0.599,0.599);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#EA600A").s().p("AgDAEQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABAAQAAABAAAAQABABAAAAQAAABAAABQABAAAAAAQAAABgBAAQAAABAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_397.setTransform(121.9,91.2,0.599,0.599);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#EA600A").s().p("AgEAFQgCgCAAgDQAAAAABAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAAAABABQAAAAAAAAIACAEIgCAFQAAAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_398.setTransform(135,88.7,0.599,0.599);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#EA600A").s().p("AgDAFQgBgBAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBAAAAQABAAAAABQABAAABAAQAAAAABABQAAAAABABQAAAAAAAAQABABAAAAQAAABAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAABIgFACQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_399.setTransform(131.3,86.7,0.599,0.599);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#EA600A").s().p("AgEAFQAAgBAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBABAAQAAgBABAAQAAAAABAAQAAgBAAAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQABAAAAAAQABABAAAAQAAABAAABQABAAAAAAQAAABgBAAQAAABAAABQAAAAgBABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAgBAAQAAABgBAAQAAAAAAgBQgBAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_400.setTransform(127.8,84.8,0.599,0.599);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#EA600A").s().p("AgEAEQAAAAAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAgBQABAAABAAQAAgBABAAQAAAAABAAQAAgBAAAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAIACAEQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAgBAAQAAABgBAAQAAAAAAgBQgBAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_401.setTransform(124.1,82.8,0.599,0.599);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#EA600A").s().p("AANB3QgQgEgIgPQgJgPAEgQQAEgOALgIQAKgJAOAAQAGAAAEABQAIACAIgEQAHgEADgJQACgIgEgHQgFgIgIgBIibgpQgQgEgJgPQgJgOAFgRQADgOALgIQALgJAPAAIAKABICbApQApALAWAkQAWAlgLApIAAAAQgLApglAWQgYAPgcAAQgLAAgPgEgAAFA4QgHAGgDAKQgDAMAHAKQAFALAMADQALADAMAAQAYAAAWgNQAhgTAJglQAKgkgTghQgUgggkgKIibgoIgHgBQgKAAgIAGQgIAGgDAKIAAAAQgDAMAGAKQAHALALADICbAoQANAEAHAKQAHAMgEANQgDANgMAHQgLAHgOgDIgHgBQgKAAgIAGg");
	this.shape_402.setTransform(120.1,141,0.599,0.599);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#EA600A").s().p("AANAiQgDgTgIgPQgIgPgPgNQgFgEAEgEQAEgEAEADQAQAOAKATQAKAQADAVQAAAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgBABQgGAAAAgGg");
	this.shape_403.setTransform(121.9,145.8,0.599,0.599);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#EA600A").s().p("AASAcQgHgRgLgLQgKgLgPgJQgFgDADgFQADgEAFACQAOAIANAOQANAMAIATQACAGgFACIgCABQgEAAgCgEg");
	this.shape_404.setTransform(124.8,145,0.599,0.599);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#EA600A").s().p("AAdAQQgMgKgQgFQgQgFgRAAIgBAAQgFAAAAgGQAAgGAFAAQATAAATAHQASAGAOAKQAEADgDAFQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAg");
	this.shape_405.setTransform(126.1,142.7,0.599,0.599);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#EA600A").s().p("AgtAMQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAUgMAXgEQAWgEAWAGQAFABgBAGQgCAFgFgCQgUgDgUADQgUADgRALIgDABQgEAAgBgDg");
	this.shape_406.setTransform(125.1,139.9,0.599,0.599);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#EA600A").s().p("AgwAbQgFgEADgEQAPgTAVgMQAbgRAhACQAGAAAAAGQgBAGgFgBQgcgBgaAPQgUALgMARQgCACgDAAg");
	this.shape_407.setTransform(122.4,138.3,0.599,0.599);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#EA600A").s().p("AgiAgQgFgDADgFQAIgOAKgKQAUgWAdgJQAFgCACAGQABAGgFACQgaAHgSATQgIAJgIANQgBADgEAAg");
	this.shape_408.setTransform(118.2,137.1,0.599,0.599);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#EA600A").s().p("AgfAiQgFgDACgFQAGgNAKgNQASgWAbgKQAGgDACAGQACAGgGACQgYAJgQAUQgHAHgHAPQgCAEgDAAg");
	this.shape_409.setTransform(115,136.3,0.599,0.599);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#EA600A").s().p("AgFC7QgCgCAAgDIAAlzIAPAAIAAFzQAAAIgIAAQgCAAgDgDg");
	this.shape_410.setTransform(82.5,24.5,0.599,0.599);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#EA600A").s().p("ABGAmQgBgcgUgTQgUgVgdAAQgcAAgUAVQgVATAAAcQAAAJgIAAQgIAAAAgJQAAgjAZgYQAagZAiAAQAjAAAaAZQAZAZAAAiQAAAJgIAAQgJAAABgJg");
	this.shape_411.setTransform(82.5,37.8,0.599,0.599);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#EA600A").s().p("AArBMQgPAYgcAAQgNAAgLgHQgMgGgGgLQgQAYgcAAQgVAAgPgPQgQgPAAgVIAJiMQACgIAHAAIDxAAQAEAAACADQACACAAADIAKCLIAAACQgBAUgPAPQgPAPgVAAQgcAAgQgYgAAxArQADACAAADIAAABQAAAOAKAKQALAKAOAAQAPAAALgKQAJgKAAgOIAAgBIgIiCIjjAAIgIB8IAAABIAAAGQAAAOAKAKQAKAKAPAAQAOAAALgKQALgKAAgOIAAgBQAAgDABgCQADgDAEAAQAHAAAAAIIAAABQAAAOALAKQAKAKAOAAQAOAAALgKQAKgKAAgOIAAgBQABgIAHAAQAEAAACADg");
	this.shape_412.setTransform(82.5,45.4,0.599,0.599);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#EA600A").s().p("AlMDEQhShRAAhzQAAhxBShSQBRhRByAAQBMAAA+AlQA/glBKAAQBzAABQBRQBRBSABBxQgBBzhRBRQhQBRhzAAQhKAAg/glQg/AlhLAAQhyAAhRhRgADDh4QAjAjAAAyQAAATgGARQgeBlh0BbQAdAJAhAAQBUABA8g8QA7g7AAhUQAAhTg7g7Qg8g8hUAAQgnAAgnAPQgSAGgbAQQg1AfgwAwQhEBHgCAxIAAACQAAASAOANQANANASABQAMgBALgGQAKgGAHgLIBJiQIADgGIACgDIAAAAQAQgbAbgPQAcgQAgAAQAwAAAjAigAkYiOQg7A7AABTQAABUA7A7QA8A8BTgBQApAAAlgOIAtgXQA1gfAwgxQBDhFACgxIAAgCQAAgTgNgNQgNgNgSAAQgNAAgLAHQgLAGgGAMIAAAAIhMCVIgBABQgQAbgbAQQgcAQggAAQgxABgigkQgkgiAAgxQAAgSAGgSIABAAQAehlB0hcQgfgJgfAAQhTAAg8A8g");
	this.shape_413.setTransform(83.3,106.5,0.599,0.599);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ball, new cjs.Rectangle(8.3,13.2,148.5,153), null);


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


(lib.ClipGroup_10_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA600A").s().p("AgIC8QgEgDAAgGIAAlkQAAgGAEgEQAEgDAEAAQAFAAAEADQAEAFAAAFIAAFkQAAAFgEAEQgEADgFAAQgEAAgEgDg");
	this.shape.setTransform(74.6,197.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EA600A").s().p("Ai9C+QhPhPAAhvQAAhuBPhPQBPhPBuAAQBvAABPBPQBPBOAABvQAABvhPBPQhPBPhvAAQhuAAhPhPgAirirQhIBHAABkQAABlBIBHQBHBHBkAAQBlAABHhHQBHhHAAhlQAAhkhHhHQhHhIhlAAQhkAAhHBIg");
	this.shape_1.setTransform(75.7,167.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ai0C1QhLhLAAhqQAAhpBLhLQBLhLBpAAQBqAABLBLQBLBLAABpQAABqhLBLQhLBLhqAAQhpAAhLhLg");
	this.shape_2.setTransform(75.7,167.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EA600A").s().p("AghBVIAAipIBDAAIAACpgAgQBEIAhAAIAAiHIghAAg");
	this.shape_3.setTransform(234.6,140.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZBMIAAiYIAyAAIAACYg");
	this.shape_4.setTransform(234.6,140.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EA600A").s().p("AghBVIAAipIBDAAIAACpgAgQBEIAhAAIAAiHIghAAg");
	this.shape_5.setTransform(224.1,140.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZBMIAAiYIAzAAIAACYg");
	this.shape_6.setTransform(224.2,140.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EA600A").s().p("AghBVIAAipIBDAAIAACpgAgQBEIAhAAIAAiHIghAAg");
	this.shape_7.setTransform(213.7,140.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZBMIAAiYIAzAAIAACYg");
	this.shape_8.setTransform(213.7,140.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EA600A").s().p("AjbAJQgEAAgDgDQgDgCAAgEQAAgDADgDQADgCAEAAIG4AAQAEAAACACQADADAAADQAAAEgDACQgDADgDAAg");
	this.shape_9.setTransform(214.9,194.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EA600A").s().p("AjbAJQgEAAgDgCQgDgDAAgEQAAgCADgDQADgDAEAAIG4AAQADAAADADQADACAAADQAAAEgDADQgCACgEAAg");
	this.shape_10.setTransform(214.9,184.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EA600A").s().p("AjbAJQgEAAgDgCQgDgEAAgDQAAgDADgDQADgCAEAAIG4AAQAEAAACACQADADAAADQAAAEgDADQgCACgEAAg");
	this.shape_11.setTransform(214.9,175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EA600A").s().p("AjbAJQgEAAgDgDQgDgDAAgDQAAgCADgDQADgDAEAAIG4AAQAEAAACADQADADAAACQAAAEgDACQgCADgEAAg");
	this.shape_12.setTransform(214.9,165.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EA600A").s().p("AjBCeIAAk8IGCAAIAAE8gAinCFIFPAAIAAkJIlPAAg");
	this.shape_13.setTransform(223.5,140.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EA600A").s().p("AkwE+IAAp7IJiAAIAAJ7gAkXElIIvAAIAApIIovAAg");
	this.shape_14.setTransform(212.3,185.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EA600A").s().p("AgtAuIAAhbIBbAAIAABbgAgcAdIA5AAIAAg5Ig5AAg");
	this.shape_15.setTransform(336.9,70.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AglAmIAAhLIBKAAIAABLg");
	this.shape_16.setTransform(336.9,70.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EA600A").s().p("AghA9IAAh5IBDAAIAAB5gAgQAsIAhAAIAAhXIghAAg");
	this.shape_17.setTransform(336.9,86.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgZA1IAAhpIAyAAIAABpg");
	this.shape_18.setTransform(336.9,86.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EA600A").s().p("AghA9IAAh5IBDAAIAAB5gAgQAsIAhAAIAAhXIghAAg");
	this.shape_19.setTransform(327.7,86.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgZA1IAAhpIAzAAIAABpg");
	this.shape_20.setTransform(327.7,86.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EA600A").s().p("AghA9IAAh5IBDAAIAAB5gAgQAsIAhAAIAAhXIghAAg");
	this.shape_21.setTransform(318.5,86.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgZA1IAAhpIAzAAIAABpg");
	this.shape_22.setTransform(318.5,86.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EA600A").s().p("Ai9AHIAAgNIF7AAIAAANg");
	this.shape_23.setTransform(326,202.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EA600A").s().p("Ai9AIIAAgPIF7AAIAAAPg");
	this.shape_24.setTransform(326,197.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EA600A").s().p("Ai9AHIAAgNIF7AAIAAANg");
	this.shape_25.setTransform(326,190.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EA600A").s().p("Ai9AHIAAgNIF7AAIAAANg");
	this.shape_26.setTransform(326,184.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EA600A").s().p("Ai3AHIAAgNIFvAAIAAANg");
	this.shape_27.setTransform(327.3,118.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EA600A").s().p("Ai3AHIAAgNIFvAAIAAANg");
	this.shape_28.setTransform(327.3,112.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EA600A").s().p("Ai3AHIAAgNIFvAAIAAANg");
	this.shape_29.setTransform(327.3,106.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EA600A").s().p("Ai3AHIAAgNIFvAAIAAANg");
	this.shape_30.setTransform(327.3,100.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EA600A").s().p("AgGD6IAAnzIANAAIAAHzg");
	this.shape_31.setTransform(301.9,152.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EA600A").s().p("AgGD6IAAnzIANAAIAAHzg");
	this.shape_32.setTransform(310.3,152.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EA600A").s().p("AgGD6IAAnzIANAAIAAHzg");
	this.shape_33.setTransform(318.3,152.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EA600A").s().p("AgGD6IAAnzIANAAIAAHzg");
	this.shape_34.setTransform(326,152.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EA600A").s().p("AgGD6IAAnzIANAAIAAHzg");
	this.shape_35.setTransform(334.4,152.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EA600A").s().p("AgGD6IAAnzIANAAIAAHzg");
	this.shape_36.setTransform(343.1,152.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EA600A").s().p("AhrALIAAgVIDXAAIAAAVg");
	this.shape_37.setTransform(336.7,74.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EA600A").s().p("AkJALIAAgVIITAAIAAAVg");
	this.shape_38.setTransform(320.9,92.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EA600A").s().p("AkSMZIAAzwICOAAIAAizICYAAIAAiOID/AAIAAYxgAj5L/IHzAAIAA39IjNAAIAACOIiYAAIAACzIiOAAg");
	this.shape_39.setTransform(321.4,137.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EA600A").s().p("AjHALIAAgVIGPAAIAAAVg");
	this.shape_40.setTransform(105.4,188);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EA600A").s().p("AjHALIAAgVIGPAAIAAAVg");
	this.shape_41.setTransform(105.4,175.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EA600A").s().p("AjHALIAAgVIGPAAIAAAVg");
	this.shape_42.setTransform(105.4,163.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EA600A").s().p("AjHALIAAgVIGPAAIAAAVg");
	this.shape_43.setTransform(105.4,151.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EA600A").s().p("AjHALIAAgVIGPAAIAAAVg");
	this.shape_44.setTransform(105.4,139.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EA600A").s().p("AjHALIAAgVIGPAAIAAAVg");
	this.shape_45.setTransform(105.4,127.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EA600A").s().p("AjHALIAAgVIGPAAIAAAVg");
	this.shape_46.setTransform(105.4,114.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#EA600A").s().p("AjHALIAAgVIGPAAIAAAVg");
	this.shape_47.setTransform(105.4,103);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EA600A").s().p("AkxNDIAA0GIBxAAIAAj4IBtAAIAAiHICfAAIAACHIBuAAIAAD4IB5AAIAAUGgAkXMpIIwAAIAAzSIh4AAIAAj4IhuAAIAAiHIhtAAIAACHIhtAAIAAD4IhwAAg");
	this.shape_48.setTransform(96.3,133.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#EA600A").s().p("AhWALQgFAAgDgDQgDgEAAgEQAAgDADgDQADgEAFAAICuAAQAEAAADAEQADADAAADQAAAEgDAEQgDADgEAAg");
	this.shape_49.setTransform(250.1,104.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EA600A").s().p("AhWALQgFAAgDgDQgDgDAAgFQAAgDADgDQADgEAFAAICuAAQAEAAADAEQADADAAADQAAAFgDADQgDADgEAAg");
	this.shape_50.setTransform(250.1,95.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EA600A").s().p("AhWALQgFAAgDgDQgDgDAAgFQAAgEADgDQADgDAFAAICuAAQAEAAADADQADADAAAEQAAAFgDADQgDADgEAAg");
	this.shape_51.setTransform(250.1,66.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EA600A").s().p("AhWALQgFAAgDgDQgDgDAAgFQAAgEADgDQADgDAFAAICuAAQAEAAADADQADADAAAEQAAAFgDADQgDADgEAAg");
	this.shape_52.setTransform(250.1,85.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EA600A").s().p("AhWALQgFAAgDgDQgDgEAAgEQAAgDADgDQADgEAFAAICuAAQAEAAADAEQADADAAADQAAAEgDAEQgDADgEAAg");
	this.shape_53.setTransform(250.1,76.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EA600A").s().p("Ag8BeIAAi7IB5AAIAAC7gAgrBNIBWAAIAAiZIhWAAg");
	this.shape_54.setTransform(283.4,192);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgzBVIAAipIBnAAIAACpg");
	this.shape_55.setTransform(283.3,192);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EA600A").s().p("Ag7BeIAAi7IB3AAIAAC7gAgqBNIBVAAIAAiZIhVAAg");
	this.shape_56.setTransform(267.6,192);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgzBVIAAipIBnAAIAACpg");
	this.shape_57.setTransform(267.6,192);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EA600A").s().p("Ag7BeIAAi7IB3AAIAAC7gAgqBNIBVAAIAAiZIhVAAg");
	this.shape_58.setTransform(251.9,192);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgzBVIAAipIBnAAIAACpg");
	this.shape_59.setTransform(251.9,192);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EA600A").s().p("Ag7BeIAAi7IB4AAIAAC7gAgqBNIBVAAIAAiZIhVAAg");
	this.shape_60.setTransform(284.2,169.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgzBVIAAipIBnAAIAACpg");
	this.shape_61.setTransform(284.2,169.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EA600A").s().p("Ag8BeIAAi7IB5AAIAAC7gAgrBNIBWAAIAAiZIhWAAg");
	this.shape_62.setTransform(268.5,169.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgzBVIAAipIBnAAIAACpg");
	this.shape_63.setTransform(268.5,169.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EA600A").s().p("Ag7BeIAAi7IB3AAIAAC7gAgqBNIBVAAIAAiZIhVAAg");
	this.shape_64.setTransform(252.8,169.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgzBVIAAipIBnAAIAACpg");
	this.shape_65.setTransform(252.8,169.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#EA600A").s().p("Ag7BeIAAi6IB4AAIAAC6gAgqBNIBVAAIAAiYIhVAAg");
	this.shape_66.setTransform(284.2,146.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgzBVIAAipIBnAAIAACpg");
	this.shape_67.setTransform(284.2,146.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#EA600A").s().p("Ag8BeIAAi6IB5AAIAAC6gAgrBNIBWAAIAAiYIhWAAg");
	this.shape_68.setTransform(268.5,146.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgzBVIAAipIBnAAIAACpg");
	this.shape_69.setTransform(268.5,146.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#EA600A").s().p("Ag7BeIAAi6IB3AAIAAC6gAgqBNIBVAAIAAiYIhVAAg");
	this.shape_70.setTransform(252.8,146.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgzBVIAAipIBnAAIAACpg");
	this.shape_71.setTransform(252.8,146.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#EA600A").s().p("AkVInIAAxNIIrDgIAANtgAj7INIH3AAIAAtCIn3jKg");
	this.shape_72.setTransform(268.1,162.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AkIIWIAAwrIIRDUIAANXg");
	this.shape_73.setTransform(268.1,162.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#EA600A").s().p("AhBBCIAAiDICDAAIAACDgAgwAxIBhAAIAAhhIhhAAg");
	this.shape_74.setTransform(171.3,156.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("Ag5A5IAAhyIBzAAIAAByg");
	this.shape_75.setTransform(171.3,156.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EA600A").s().p("AhBBCIAAiDICDAAIAACDgAgwAxIBhAAIAAhhIhhAAg");
	this.shape_76.setTransform(154.4,156.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("Ag4A5IAAhyIBxAAIAAByg");
	this.shape_77.setTransform(154.4,156.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#EA600A").s().p("AhBBCIAAiDICDAAIAACDgAgwAxIBhAAIAAhhIhhAAg");
	this.shape_78.setTransform(137.5,156.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("Ag5A5IAAhyIBzAAIAAByg");
	this.shape_79.setTransform(137.5,156.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EA600A").s().p("AhBBCIAAiDICDAAIAACDgAgwAxIBhAAIAAhhIhhAAg");
	this.shape_80.setTransform(171.3,135.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("Ag5A6IAAhzIBzAAIAABzg");
	this.shape_81.setTransform(171.3,135.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#EA600A").s().p("AhBBCIAAiDICDAAIAACDgAgwAxIBhAAIAAhhIhhAAg");
	this.shape_82.setTransform(154.4,135.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("Ag4A6IAAhzIBxAAIAABzg");
	this.shape_83.setTransform(154.4,135.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#EA600A").s().p("AhBBCIAAiDICDAAIAACDgAgwAxIBhAAIAAhhIhhAAg");
	this.shape_84.setTransform(137.5,135.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("Ag5A6IAAhzIBzAAIAABzg");
	this.shape_85.setTransform(137.5,135.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#EA600A").s().p("AhBBCIAAiDICDAAIAACDgAgwAxIBhAAIAAhhIhhAAg");
	this.shape_86.setTransform(171.3,114.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("Ag5A6IAAhzIBzAAIAABzg");
	this.shape_87.setTransform(171.3,114.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#EA600A").s().p("AhBBCIAAiDICDAAIAACDgAgwAxIBhAAIAAhhIhhAAg");
	this.shape_88.setTransform(154.4,114.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("Ag4A6IAAhzIBxAAIAABzg");
	this.shape_89.setTransform(154.4,114.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#EA600A").s().p("AhBBCIAAiDICDAAIAACDgAgwAxIBhAAIAAhhIhhAAg");
	this.shape_90.setTransform(137.5,114.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("Ag5A6IAAhzIBzAAIAABzg");
	this.shape_91.setTransform(137.5,114.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#EA600A").s().p("AhBBCIAAiDICDAAIAACDgAgwAxIBhAAIAAhhIhhAAg");
	this.shape_92.setTransform(171.3,92.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("Ag5A6IAAhzIBzAAIAABzg");
	this.shape_93.setTransform(171.3,92.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#EA600A").s().p("AhBBCIAAiDICDAAIAACDgAgwAxIBhAAIAAhhIhhAAg");
	this.shape_94.setTransform(154.4,92.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("Ag4A6IAAhzIBxAAIAABzg");
	this.shape_95.setTransform(154.4,92.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#EA600A").s().p("AhBBCIAAiDICDAAIAACDgAgwAxIBhAAIAAhhIhhAAg");
	this.shape_96.setTransform(137.5,92.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("Ag5A6IAAhzIBzAAIAABzg");
	this.shape_97.setTransform(137.5,92.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#EA600A").s().p("AhBBCIAAiDICDAAIAACDgAgwAxIBhAAIAAhhIhhAAg");
	this.shape_98.setTransform(171.3,71.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("Ag5A6IAAhzIBzAAIAABzg");
	this.shape_99.setTransform(171.3,71.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#EA600A").s().p("AhBBCIAAiDICDAAIAACDgAgwAxIBhAAIAAhhIhhAAg");
	this.shape_100.setTransform(154.4,71.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("Ag4A6IAAhzIBxAAIAABzg");
	this.shape_101.setTransform(154.4,71.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#EA600A").s().p("AhBBCIAAiDICDAAIAACDgAgwAxIBhAAIAAhhIhhAAg");
	this.shape_102.setTransform(137.5,71.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("Ag5A6IAAhzIBzAAIAABzg");
	this.shape_103.setTransform(137.5,71.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#EA600A").s().p("AkoM6IAA5zIJRAAIAAZzgAkOMhIIdAAIAA5BIodAAg");
	this.shape_104.setTransform(154.4,134.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#EA600A").s().p("Ai7N5IAA7xIF3DtIAAYEgAiiNgIFEAAIAA3dIlEjNg");
	this.shape_105.setTransform(259.1,127.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#EA600A").s().p("AhnAOQgGAAgEgDQgEgFgBgGQABgFAEgEQAEgEAGAAIDPAAQAGAAAFAEQADAEAAAFQAAAGgDAFQgFADgGAAg");
	this.shape_106.setTransform(11.9,89.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#EA600A").s().p("ADSKaQgFgEAAgGIAAwlQAAhhhEhFQhFhFhgAAIi/AAQgGAAgEgEQgFgEAAgHQAAgGAFgEQAEgEAGAAIC/AAQBsAABNBNQBOBOAABtIAAQlQAAAGgEAEQgFAEgGAAQgGAAgEgEg");
	this.shape_107.setTransform(23.5,149.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#EA600A").s().p("AgliCIAZgFIAyEKIgZAFg");
	this.shape_108.setTransform(442.1,155.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#EA600A").s().p("AgaiFIAZgCIAcEMIgZADg");
	this.shape_109.setTransform(431.5,155.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#EA600A").s().p("AgWiFIAYgCIAVENIgZACg");
	this.shape_110.setTransform(421.7,155.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#EA600A").s().p("AglCDIAykKIAZAFIgyEKg");
	this.shape_111.setTransform(379.9,155.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#EA600A").s().p("AgaCFIAckMIAZACIgcENg");
	this.shape_112.setTransform(390.5,155.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#EA600A").s().p("AgWCGIAVkNIAYACIgVENg");
	this.shape_113.setTransform(400.3,155.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#EA600A").s().p("AgKCIIAAkPIAVAAIAAEPg");
	this.shape_114.setTransform(411.7,155.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#EA600A").s().p("AmFCUQggAAgSgbQgTgaAKgeIBKjUILsAAIBLDUQAKAegSAaQgUAbgfAAgAmnBJQgHASALAQQALAPATAAIMLAAQATAAALgPQALgQgHgSIhEjDIrHAAg");
	this.shape_115.setTransform(410.7,156);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AmFCHQgZAAgPgVQgPgVAJgYIBHjLILZAAIBHDLQAJAYgPAVQgPAVgZAAg");
	this.shape_116.setTransform(410.7,156);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#EA600A").s().p("AhnCvIAAlcIDPAAIAAFcgAhNCVICbAAIAAkpIibAAg");
	this.shape_117.setTransform(433.5,191);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#EA600A").s().p("AilAjIAAhFIFLAAIAABFgAiLAJIEXAAIAAgRIkXAAg");
	this.shape_118.setTransform(397.6,198.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#EA600A").s().p("Ag0ALIAAgVIBpAAIAAAVg");
	this.shape_119.setTransform(403.1,185);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#EA600A").s().p("AgKBvIAAjdIAVAAIAADdg");
	this.shape_120.setTransform(397.1,184.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#EA600A").s().p("Ah6B7IAAj1ID1AAIAAD1gAhgBhIDBAAIAAjBIjBAAg");
	this.shape_121.setTransform(397.5,185.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#EA600A").s().p("AnSA3IAAgNQAAgoAcgcQAdgcAoAAILjAAQAoAAAdAcQAcAcAAAoIAAANgAmfgLQgUAPgFAZINwAAQgEgZgUgPQgUgRgaAAIrjAAQgaAAgUARg");
	this.shape_122.setTransform(411,211.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#EA600A").s().p("Al5FQIAAqfILzAAIAAKfgAlfE2IK/AAIAApsIq/AAg");
	this.shape_123.setTransform(410.7,174.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10_0, new cjs.Rectangle(0,38.8,457.7,178.4), null);


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
	this.shape.graphics.f("#EA600A").s().p("AgHAMQgFgDgBgGQgCgEAEgGQADgFAGgBQAEgCAGAEQAFADABAGQABAFgDAEQgDAGgGABIgDABQgDAAgEgDg");
	this.shape.setTransform(232.1,92.7,0.666,0.666);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EA600A").s().p("AgHAMQgFgDgBgGQgBgFADgFQADgFAGgBQAEgCAGAEQAFADABAGQABAFgDAFQgDAFgGABIgDABQgDAAgEgDg");
	this.shape_1.setTransform(233,100.4,0.666,0.666);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EA600A").s().p("AgHAMQgFgDgBgGQgCgEAEgGQADgFAGgBQAEgCAGAEQAFADABAGQABAFgDAEQgDAGgGABIgDABQgDAAgEgDg");
	this.shape_2.setTransform(247.6,104.8,0.666,0.666);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EA600A").s().p("AgGANQgGgEgBgFQgBgFADgGQADgFAGgBQAEgBAGADQAFADABAGQACAFgEAFQgDAFgFABIgEAAQgDAAgDgBg");
	this.shape_3.setTransform(240.8,101.8,0.666,0.666);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EA600A").s().p("AgHANQgFgDgBgGQgCgGAEgEQADgGAGgBQAEgBAGADQAFADABAFQABAHgDADQgDAGgGABIgDABQgDgBgEgBg");
	this.shape_4.setTransform(222.5,106.2,0.666,0.666);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EA600A").s().p("AgHAMQgFgDgBgGQgBgFADgFQADgFAGgBQAFgBAFADQAFADABAGQACAEgEAGQgDAFgGABIgDABQgDAAgEgDg");
	this.shape_5.setTransform(241.2,84.1,0.666,0.666);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EA600A").s().p("AgHAMQgFgDgBgGQgCgEAEgFQADgGAGgBQAFgBAEADQAGADABAGQABAFgDAFQgDAFgGABIgDABQgCAAgFgDg");
	this.shape_6.setTransform(236.6,88.4,0.666,0.666);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EA600A").s().p("AgHAMQgFgCgBgHQgBgEADgFQADgFAGgCQADgBAHACQAFAEABAFQACAFgEAGQgDAGgGAAIgDABQgDgBgEgCg");
	this.shape_7.setTransform(229.6,104.6,0.666,0.666);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EA600A").s().p("AgHAMQgEgDgCgGQgCgDAEgHQADgFAGgBQAEgCAGAEQAFACABAGQACAGgEAEQgCAGgHABIgDAAQgDAAgEgCg");
	this.shape_8.setTransform(229.5,109.6,0.666,0.666);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EA600A").s().p("AgHAMQgFgCgBgHQgBgFADgFQADgEAGgCQAEgCAGAEQAFADABAGQABAGgDAEQgDAEgGACIgDAAQgDABgEgDg");
	this.shape_9.setTransform(236.8,80.8,0.666,0.666);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EA600A").s().p("AgHAMQgEgCgCgGQgBgGADgEQADgGAGgBQAEgBAGADQAFADABAGQACAEgEAGQgDAFgGABIgDAAQgDAAgEgCg");
	this.shape_10.setTransform(243,91.7,0.666,0.666);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EA600A").s().p("AgGAMQgGgDgBgGQgBgFADgFQADgFAGgBQAEgCAGAEQAFADABAGQACAEgEAGQgDAFgGABIgDABQgDAAgDgDg");
	this.shape_11.setTransform(252.3,108.5,0.666,0.666);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EA600A").s().p("AgGAMQgGgCgBgHQgBgFADgFQACgEAGgCQAFgCAFAEQAFADACAGQACAFgDAFQgDAEgGACIgEABQgEAAgCgDg");
	this.shape_12.setTransform(238.7,95.4,0.666,0.666);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EA600A").s().p("AgHAMQgFgCgBgHQgCgEAEgGQACgEAGgCQAGgCAEAEQAGADABAGQABAFgDAFQgDAEgGACIgDAAQgDABgEgDg");
	this.shape_13.setTransform(244,108.7,0.666,0.666);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EA600A").s().p("AgGAMQgGgCgBgHQgBgFADgFQADgEAGgCQAEgCAGAEQAFADABAGQACADgEAHQgDAEgGACIgDAAQgDABgDgDg");
	this.shape_14.setTransform(238.9,111.1,0.666,0.666);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EA600A").s().p("AgHAMQgFgDgBgGQgCgEAEgGQADgFAGgBQAFgBAFADQAFADABAGQABAFgDAFQgDAFgGABIgDAAQgDAAgEgCg");
	this.shape_15.setTransform(245.1,96.5,0.666,0.666);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EA600A").s().p("AgGAMQgGgDgBgGQgCgEADgGQAEgFAFgBQAEgCAGAEQAGADABAGQABAFgCAEQgEAGgGABIgDAAQgEAAgCgCg");
	this.shape_16.setTransform(234.9,108.1,0.666,0.666);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EA600A").s().p("ABZFoIi9gEQgDAAgEgCQgHgFAAgIQAAgGAFgEQAEgEAGAAIBQACIABgrQhCgDg+gOQhKgSgwgdQgsgbgVgkQgUgkAFgrQABgGAGgEQAGgEAGACQAdAJAmgKQAhgIAdgTQAcgSgBgdQAAgQgKgNQgJgOgQgGIgBgBQgKgDABgLQAAgKAKgDQAUgGAigUQAygeABgYQAAgPgXgOQgKgGgUgIQgKgDAAgLQAAgLAKgCQAlgMAzgnQAzgmAPgcQADgIAJAAQAJABAEAHQAKAWAhAfQAiAgAjAVQAWANANAFQAKADAAALQgBAKgJADIgBAAQgzARgDAWQgDAZAzAhQAeAUAYAIQAKAFgBAJQAAAKgKAEIgBAAQghALgEAhQgCAOAGAOQAHAPAOAJIANAJQBAAnAygOQAGgCAGAEQAFADABAHQAIAvgiAoQgrAxhkAeQhUAYhVACIgBArIBRABQAGABAEAEQAEAEAAAGQAAAGgEAEQgEAEgFAAIgCAAgAj9DFQAvAdBLAQQA/AOBBACQBTABBXgZQBfgbAmgsQAUgXABgaQg5AHg/gmIgPgKQgVgPgJgVQgKgWADgXQAFggAZgUIgggTQhCgsAGgqQAEgeAngTIgKgGQgegTgegaQghgcgSgZQgUAZgjAcQgkAcghARQApAXAAAhQgBAphAAmIghARQAbAYABAlQABAVgLATQgLATgUANQgcASghAKQgoAMgigFQABA5BCAog");
	this.shape_17.setTransform(237.8,96.9,0.666,0.666);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EA600A").s().p("AAlBOIgmgUIgnASQgHADgHgEIgBgBQgHgFACgJIAIgnIgegbQgHgFADgKQADgJAJgBIArgFIAUgkQAFgHAHAAQAJAAAEAIIASAlIAsAGQAJACACAJQADAJgHAGIgfAZIAGAoQABAIgHAGQgEADgEAAQgEAAgDgCgAAZAnIgDgTQgCgHAGgGIAOgLIgTgDQgIgBgDgHIgKgTIgJATQgEAHgHAAIgUACIAOAMQAFAGgBAHIgEATIAUgJQAGgDAFADIAUAKg");
	this.shape_18.setTransform(238.6,68.4,0.666,0.666);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("ABZFoIi9gEQgDAAgEgCQgHgFAAgIQAAgGAFgEQAEgEAGAAIBQACIABgrQhCgDg+gOQhKgSgwgdQgsgbgVgkQgUgkAFgrQABgGAGgEQAGgEAGACQAdAJAmgKQAhgIAdgTQAcgSgBgdQAAgQgKgNQgJgOgQgGIgBgBQgKgDABgLQAAgKAKgDQAUgGAigUQAygeABgYQAAgPgXgOQgKgGgUgIQgKgDAAgLQAAgLAKgCQAlgMAzgnQAzgmAPgcQADgIAJAAQAJABAEAHQAKAWAhAfQAiAgAjAVQAWANANAFQAKADAAALQgBAKgJADIgBAAQgzARgDAWQgDAZAzAhQAeAUAYAIQAKAFgBAJQAAAKgKAEIgBAAQghALgEAhQgCAOAGAOQAHAPAOAJIANAJQBAAnAygOQAGgCAGAEQAFADABAHQAIAvgiAoQgrAxhkAeQhUAYhVACIgBArIBRABQAGABAEAEQAEAEAAAGQAAAGgEAEQgEAEgFAAIgCAAg");
	this.shape_19.setTransform(237.8,96.9,0.666,0.666);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAFAbQgFgEgGADIgUAJIAEgSQACgIgGgFIgOgMIAUgCQAHAAAFgIIAJgSIAJATQADAGAIACIATADIgNALQgHAGACAHIADATg");
	this.shape_20.setTransform(238.6,68.6,0.666,0.666);

	this.instance = new lib.ClipGroup_10_0();
	this.instance.parent = this;
	this.instance.setTransform(152.4,56.3,0.666,0.666,0,0,0,228.8,123.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.city, new cjs.Rectangle(0,0,304.8,120.9), null);


(lib.car = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ClipGroup_3_1();
	this.instance.parent = this;
	this.instance.setTransform(130.6,2.8,0.8,0.8,0,0,0,172.7,79);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.car, new cjs.Rectangle(-7.5,-60.4,275.7,126.6), null);


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


(lib.qwqwqw = function(mode,startPosition,loop) {
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


(lib.qqqw = function(mode,startPosition,loop) {
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


(lib.qqqqq = function(mode,startPosition,loop) {
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


(lib.qqq = function(mode,startPosition,loop) {
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
(lib._336x280 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_275 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(275).call(this.frame_275).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A6K1yMA0VAAAMAAAArlMg0VAAAg");
	this.shape.setTransform(168,140);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(276));

	// fg
	this.instance = new lib.fg();
	this.instance.parent = this;
	this.instance.setTransform(135,284.7,1.12,1.12,0,0,0,120,45.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(276));

	// t5
	this.instance_1 = new lib.t5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(168.6,63.1,1.12,1.12);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(262).to({_off:false},0).to({x:168,alpha:1},6,cjs.Ease.get(1)).wait(8));

	// t4
	this.instance_2 = new lib.t4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(168.6,37.9,1.12,1.12);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(183).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(67).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(13));

	// t3
	this.instance_3 = new lib.t3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(168.6,39.9,1.12,1.12);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(104).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(67).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(92));

	// t2
	this.instance_4 = new lib.t2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(168.6,38.3,1.12,1.12);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(67).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(171));

	// cloud1
	this.instance_5 = new lib.cloud();
	this.instance_5.parent = this;
	this.instance_5.setTransform(172,36.4,1.12,1.12,0,0,0,50.6,21.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(25).to({_off:true},1).wait(250));

	// ball
	this.instance_6 = new lib.ball();
	this.instance_6.parent = this;
	this.instance_6.setTransform(169.4,152.8,0.896,0.896,0,0,0,82.5,85);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(262).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(8));

	// man3
	this.instance_7 = new lib.qqqqq("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-71.6,164.3,0.896,0.896,0,0,0,-0.1,0.1);
	this.instance_7._off = true;

	this.instance_8 = new lib.qwqwqw("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(172.6,164.3,0.896,0.896,0,0,0,0.1,0.1);

	this.instance_9 = new lib.qqq("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(172.6,164.3,0.896,0.896,0,0,0,0.1,0.1);
	this.instance_9._off = true;

	this.instance_10 = new lib.qqqw("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(416.7,164.3,0.896,0.896,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},183).to({state:[{t:this.instance_8}]},13).to({state:[{t:this.instance_9}]},55).to({state:[{t:this.instance_10}]},10).to({state:[]},2).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(183).to({_off:false},0).to({_off:true,regX:0.1,x:172.6},13,cjs.Ease.get(1)).wait(80));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(251).to({_off:false},0).to({_off:true,x:416.7},10,cjs.Ease.get(1)).wait(15));

	// man1
	this.instance_11 = new lib.man1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(3.6,211.6,0.896,0.896,0,0,0,59.3,130.9);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(104).to({_off:false},0).to({regX:59.5,x:111.1},8,cjs.Ease.get(1)).wait(65).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(92));

	// man2
	this.instance_12 = new lib.man2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(345.5,212.8,0.896,0.896,0,0,0,76.4,127);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(104).to({_off:false},0).to({x:229},8,cjs.Ease.get(1)).wait(65).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(92));

	// car2
	this.instance_13 = new lib.car();
	this.instance_13.parent = this;
	this.instance_13.setTransform(321.3,212.2,0.896,0.896,0,0,0,53,32.6);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(19).to({_off:false},0).to({rotation:-8.9,x:242.9},4,cjs.Ease.get(1)).to({rotation:0,x:240.6},2).wait(73).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(171));

	// car1
	this.instance_14 = new lib.ClipGroup_7_0();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-57,182.8,0.597,0.597,0,0,0,171.8,135);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({regX:172.1,x:187.3},18,cjs.Ease.get(0.5)).wait(1).to({regX:172,regY:135.2,rotation:-3,x:131.5,y:180.2},4,cjs.Ease.get(1)).to({regX:172.1,regY:135,rotation:0,x:133.5,y:182.8},2).wait(73).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(171));

	// snow
	this.instance_15 = new lib.snow();
	this.instance_15.parent = this;
	this.instance_15.setTransform(197.7,68.1,1.12,1.12,0,0,0,67.4,15.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(256).to({alpha:0},6,cjs.Ease.get(1)).wait(14));

	// city
	this.instance_16 = new lib.city();
	this.instance_16.parent = this;
	this.instance_16.setTransform(169.1,142.9,1.12,1.12,0,0,0,152.3,60.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(256).to({alpha:0},6,cjs.Ease.get(1)).wait(14));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape_1.setTransform(150,125,1.25,0.625);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(276));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.5,139.5,499.4,290.7);
// library properties:
lib.properties = {
	width: 336,
	height: 280,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/336x280_atlas_.png", id:"336x280_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;