(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"100pcx250_atlas_", frames: [[0,0,298,274],[300,0,298,274],[600,0,298,274],[0,276,298,274],[300,276,298,274]]}
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
	this.spriteSheet = ss["100pcx250_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["100pcx250_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["100pcx250_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["100pcx250_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
	this.spriteSheet = ss["100pcx250_atlas_"];
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


(lib.uznat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgwBaIAAi0IBhAAIAAAhIg/AAIAAAqIA8AAIAAAfIg8AAIAAAqIA/AAIAAAgg");
	this.shape.setTransform(67.9,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgvBaIAAi0IBgAAIAAAhIg/AAIAAAqIA8AAIAAAfIg8AAIAAAqIA/AAIAAAgg");
	this.shape_1.setTransform(55.2,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAhBaIAAhLIhBAAIAABLIghAAIAAi0IAhAAIAABJIBBAAIAAhJIAhAAIAAC0g");
	this.shape_2.setTransform(40.4,1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag8BaIAAi0IBpAAIAAAhIhIAAIAAAlIAcAAQAlAAAPAYQAIANAAASQAAAZgQAPQgRAPgbAAgAgbA6IAdAAQAMAAAIgHQAGgHAAgJQAAgJgFgFQgHgJgOAAIgdAAg");
	this.shape_3.setTransform(25.1,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhDBDQgbgbAAgoQAAgmAbgbQAcgcAnAAQAoAAAcAcQAbAbAAAmQAAAogbAbQgcAbgoAAQgnAAgcgbgAgrgrQgSASAAAZQAAAZASATQASASAZAAQAaAAASgTQASgSAAgZQAAgZgSgSQgRgSgbAAQgZAAgSASg");
	this.shape_4.setTransform(7.1,1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag5BaIAAi0IAzAAQAlAAAQAXQALAOAAAUQAAAWgNAOQgRATgiAAIgRAAIAABEgAgXgKIAUAAQAbAAAAgXQAAgYgbAAIgUAAg");
	this.shape_5.setTransform(-9.5,1.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABCBsIAAgjIiCAAIAAAjIgiAAIAAhDIARAAIBEiUIAcAAIBDCUIARAAIAABDgAgsApIBZAAIgthlg");
	this.shape_6.setTransform(-26.9,3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhDBDQgbgbgBgoQABgmAbgbQAcgcAnAAQAoAAAcAcQAbAbAAAmQAAAogbAbQgcAbgoAAQgoAAgbgbgAgrgrQgSASAAAZQAAAZASATQASASAZAAQAaAAATgTQARgSAAgZQAAgZgRgSQgTgSgaAAQgaAAgRASg");
	this.shape_7.setTransform(-47.2,1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAhBaIAAiTIhBAAIAACTIghAAIAAi0ICEAAIAAC0g");
	this.shape_8.setTransform(-65.8,1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00A7E0").s().p("AvPD9IAAn5IefAAIAAH5g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.uznat, new cjs.Rectangle(-97.6,-25.2,195.2,50.5), null);


(lib.t5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("AgPBZIAAgfIAfAAIAAAfgAgPAsIAAiEIAfAAIAACEg");
	this.shape.setTransform(240.3,39.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A7E0").s().p("AA9BZIAAiEIgvCEIgbAAIgviEIAACEIghAAIAAixIAtAAIAwCHIAxiHIAtAAIAACxg");
	this.shape_1.setTransform(225.9,39.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00A7E0").s().p("AgvBZIAAixIBeAAIAAAgIg9AAIAAApIA7AAIAAAfIg7AAIAAApIA9AAIAAAgg");
	this.shape_2.setTransform(208.8,39.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00A7E0").s().p("AAoBZIAAh8IhPB8IghAAIAAixIAhAAIAAB8IBPh8IAhAAIAACxg");
	this.shape_3.setTransform(193.5,39.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00A7E0").s().p("Ag5BZIAAixIArAAQATAAAPAGQAbAMAAAdQAAAXgUALQAPAFAHAKQAJAMgBAPQABA2hGAAgAgYA5IAVAAQAcAAAAgWQAAgXgcAAIgVAAgAgYgTIAPAAQAXAAAAgTQAAgSgXAAIgPAAg");
	this.shape_4.setTransform(178.1,39.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00A7E0").s().p("AgPBZIAAiRIghAAIAAggIBhAAIAAAgIggAAIAACRg");
	this.shape_5.setTransform(165.6,39.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00A7E0").s().p("AhAA9QgXgbAAgiQAAgiAXgbQAageArgBQAcABAVAOQAXAOAKAZIglAAQgRgVgbgBQgaAAgRASQgRASAAAYQAAAZARARQASASAZABQAbAAAQgVIAlAAQgLAYgVAOQgVAOgdAAQgqABgaggg");
	this.shape_6.setTransform(151.4,39.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00A7E0").s().p("Ag6BZIAAixIAhAAIAABFIAZAAQAfAAAPARQANANAAAXQAAAZgQAPQgRAPgaAAgAgZA5IAZAAQANAAAGgGQAHgGAAgLQAAgKgHgGQgGgGgNAAIgZAAg");
	this.shape_7.setTransform(135.5,39.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00A7E0").s().p("AAxBZIgxiDIgvCDIglAAIBHixIAcAAIBGCxg");
	this.shape_8.setTransform(119.3,39.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00A7E0").s().p("AhCBBQgbgaAAgnQAAgmAbgbQAbgbAnAAQAnAAAcAbQAbAbAAAmQAAAngbAaQgcAbgnAAQgmAAgcgbgAgqgqQgSASAAAYQAAAZASASQARASAZAAQAaAAARgSQASgTAAgYQAAgYgSgSQgRgSgaAAQgZAAgRASg");
	this.shape_9.setTransform(100.6,39.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00A7E0").s().p("Ag5BZIAAixIArAAQAUAAAOAGQAbAMAAAdQAAAXgTALQANAFAIAKQAJAMAAAPQAAAXgPAOQgSARglAAgAgXA5IAVAAQAbAAAAgWQAAgXgbAAIgVAAgAgXgTIAPAAQAWAAAAgTQAAgSgWAAIgPAAg");
	this.shape_10.setTransform(84,39.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00A7E0").s().p("AhCBCQgbgbAAgmQAAgnAbgbQAbgaAnAAQAoAAAbAaQAbAbAAAnQAAAmgbAbQgbAagoAAQgmAAgcgagAgqgqQgSASAAAYQAAAZASASQARARAZAAQAaAAASgRQARgSAAgZQAAgZgSgRQgRgSgaABQgZAAgRARg");
	this.shape_11.setTransform(66.5,39.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00A7E0").s().p("ABABqIAAgiIh/AAIAAAiIghAAIAAhCIARAAIBCiRIAcAAIBBCRIARAAIAABCgAgrAoIBXAAIgshjg");
	this.shape_12.setTransform(46.6,40.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00A7E0").s().p("AghBZIAVgtIhFiEIAoAAIAuBeIApheIAkAAIhRCxg");
	this.shape_13.setTransform(32,39.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00A7E0").s().p("AhAA9QgXgbAAgiQAAgiAXgbQAbgeAqAAQAcAAAWAOQAWAOALAaIgmAAQgRgWgcgBQgZABgRARQgRASAAAYQAAAZASASQARARAZABQAbAAAPgVIAnAAQgMAYgUAOQgWAOgcAAQgqAAgbgfg");
	this.shape_14.setTransform(8.8,39.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00A7E0").s().p("AAzBZIgSguIhBAAIgSAuIgkAAIBKixIAZAAIBKCxgAgTALIAnAAIgUgzg");
	this.shape_15.setTransform(210,9.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00A7E0").s().p("AA9BZIAAiEIgvCEIgbAAIgviEIAACEIghAAIAAixIAsAAIAxCHIAxiHIAtAAIAACxg");
	this.shape_16.setTransform(190.1,9.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00A7E0").s().p("AhCBCQgbgbAAgnQAAgmAbgbQAcgaAmAAQAoAAAbAaQAbAbAAAmQAAAngbAbQgbAbgoAAQgmAAgcgbgAgqgqQgSARAAAZQAAAZASASQARARAZAAQAaAAASgRQARgTAAgYQAAgZgSgRQgRgRgagBQgZABgRARg");
	this.shape_17.setTransform(168.9,9.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00A7E0").s().p("ABABqIAAgiIh/AAIAAAiIghAAIAAhCIARAAIBCiRIAbAAIBCCRIARAAIAABCgAgqAoIBWAAIgshjg");
	this.shape_18.setTransform(149,10.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00A7E0").s().p("AgvBZIAAixIBfAAIAAAgIg+AAIAAApIA7AAIAAAfIg7AAIAAApIA+AAIAAAgg");
	this.shape_19.setTransform(127.5,9.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00A7E0").s().p("AgQBZIAAiRIggAAIAAggIBhAAIAAAgIghAAIAACRg");
	this.shape_20.setTransform(116.1,9.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00A7E0").s().p("Ag6BZIAAixIAhAAIAABFIAZAAQAeAAAQARQANAOAAAWQAAAZgRAPQgQAPgaAAgAgZA5IAZAAQAMAAAHgGQAHgGAAgLQAAgKgHgGQgHgGgMAAIgZAAg");
	this.shape_21.setTransform(105.3,9.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00A7E0").s().p("Ag5BZIAAixIArAAQAUAAAOAGQAbAMAAAdQAAAYgUAKQAPAFAIAKQAIAMAAAPQAAA2hGAAgAgYA5IAWAAQAbAAAAgWQAAgXgbAAIgWAAgAgYgTIAQAAQAWAAAAgTQAAgSgWAAIgQAAg");
	this.shape_22.setTransform(91.2,9.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00A7E0").s().p("AhBBCQgcgbABgmQgBgnAcgbQAagaAnAAQAoAAAaAaQAcAbAAAnQAAAmgcAbQgbAagnABQgngBgagagAgrgqQgRASABAYQgBAZASARQARASAZAAQAaAAARgSQARgSAAgYQAAgZgRgRQgRgSgaAAQgZAAgSASg");
	this.shape_23.setTransform(73.7,9.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00A7E0").s().p("AgQBZIAAiRIggAAIAAggIBhAAIAAAgIghAAIAACRg");
	this.shape_24.setTransform(59.2,9.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00A7E0").s().p("AhCBCQgbgbAAgmQAAgnAbgaQAbgcAnABQAogBAbAcQAbAaAAAnQAAAmgbAbQgbAagoAAQgmAAgcgagAgqgqQgSARAAAZQAAAZASARQARATAZAAQAaAAASgTQARgRAAgZQAAgZgSgRQgRgSgaABQgZgBgRASg");
	this.shape_25.setTransform(44.7,9.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00A7E0").s().p("AgrBZIAAixIBXAAIAAAgIg2AAIAACRg");
	this.shape_26.setTransform(30.1,9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t5, new cjs.Rectangle(0,0,241.9,51.5), null);


(lib.t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("AAoBZIAAh8IhOB8IgiAAIAAixIAiAAIAAB8IBOh8IAgAAIAACxg");
	this.shape.setTransform(236.6,39.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A7E0").s().p("AAZBZIg3hOIAABOIghAAIAAixIAhAAIAABNIA3hNIAnAAIhCBXIBCBag");
	this.shape_1.setTransform(220.8,39.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00A7E0").s().p("AgQBZIAAiRIghAAIAAggIBjAAIAAAgIghAAIAACRg");
	this.shape_2.setTransform(207.8,39.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00A7E0").s().p("AhAA9QgXgaAAgjQAAgiAXgbQAbgeAqAAQAcAAAWAOQAVAOAMAZIgmAAQgRgVgcgBQgZABgRASQgRASABAXQgBAZASASQARARAZABQAbgBAPgUIAmAAQgLAYgUAOQgWAOgcAAQgrAAgagfg");
	this.shape_3.setTransform(193.5,39.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00A7E0").s().p("AAnBZIAAh8IhOB8IggAAIAAixIAgAAIAAB8IBOh8IAhAAIAACxg");
	this.shape_4.setTransform(175.2,39.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00A7E0").s().p("AAcBZIAAhEIgdAAQgdAAgOgKQgQgNAAgdIAAg5IAhAAIAAA1QAAAPAGAFQAGAGAOAAIAdAAIAAhPIAhAAIAACxg");
	this.shape_5.setTransform(158.5,39.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00A7E0").s().p("AhCBCQgbgbAAgmQAAgnAbgbQAcgbAmAAQAoAAAbAbQAaAbAAAnQAAAmgaAbQgbAagoABQgmgBgcgagAgqgqQgSARAAAZQAAAZASASQARASAZAAQAagBASgRQARgSgBgZQABgZgRgRQgSgSgaAAQgZAAgRASg");
	this.shape_6.setTransform(141.3,39.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00A7E0").s().p("AAnBvIAAh8IhNB8IghAAIAAixIAhAAIAAB8IBNh8IAhAAIAACxgAgchWQgMgJgDgPIAcAAQACAMANAAQAOAAABgMIAcAAQgDAPgKAJQgNAKgRAAQgRAAgLgKg");
	this.shape_7.setTransform(116.8,37.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00A7E0").s().p("AhCBCQgbgbAAgmQAAgnAbgbQAbgbAnAAQAoAAAbAbQAbAbAAAnQAAAmgbAbQgcAbgnAAQgnAAgbgbgAgqgqQgSASAAAYQAAAZASASQARARAZABQAagBASgRQARgSAAgZQAAgZgSgRQgRgSgaAAQgZABgRARg");
	this.shape_8.setTransform(97.8,39.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00A7E0").s().p("AAgBZIAAhKIg/AAIAABKIghAAIAAixIAhAAIAABHIA/AAIAAhHIAhAAIAACxg");
	this.shape_9.setTransform(79.5,39.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00A7E0").s().p("AAnBvIAAh9IhOB9IggAAIAAixIAgAAIAAB7IBOh7IAhAAIAACxgAgchWQgMgJgDgPIAcAAQACANANAAQAOAAABgNIAcAAQgCAPgMAJQgMAKgRAAQgRAAgLgKg");
	this.shape_10.setTransform(62.5,37.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00A7E0").s().p("AhCBCQgbgbAAgmQAAgnAbgbQAbgbAnAAQAoAAAbAbQAbAbAAAnQAAAmgbAbQgcAagnAAQgnAAgbgagAgqgqQgSASAAAYQAAAZASASQARASAZAAQAagBARgRQASgSAAgZQAAgZgSgRQgRgSgaAAQgZAAgRASg");
	this.shape_11.setTransform(43.5,39.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00A7E0").s().p("Ag4BZIAAixIAqAAQA9AAAAAvQAAAXgUALQAOAFAJALQAHALAAAPQAAA2hFAAgAgYA5IAWAAQAbAAAAgXQAAgXgbAAIgWAAgAgYgTIAQAAQAWAAAAgSQAAgTgWAAIgQAAg");
	this.shape_12.setTransform(26.9,39.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00A7E0").s().p("ABABqIAAgiIh/AAIAAAiIghAAIAAhCIARAAIBCiRIAcAAIBBCRIARAAIAABCgAgrAoIBXAAIgshjg");
	this.shape_13.setTransform(9.7,40.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00A7E0").s().p("AAzBZIgTguIhAAAIgSAuIgkAAIBJixIAaAAIBKCxgAgUALIAoAAIgUgzg");
	this.shape_14.setTransform(172.6,9.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00A7E0").s().p("AA9BZIAAiEIgvCEIgbAAIgviEIAACEIghAAIAAixIAsAAIAxCHIAyiHIAsAAIAACxg");
	this.shape_15.setTransform(152.7,9.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00A7E0").s().p("AgvBZIAAixIBfAAIAAAgIg+AAIAAApIA7AAIAAAfIg7AAIAAApIA+AAIAAAgg");
	this.shape_16.setTransform(135.5,9.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00A7E0").s().p("AgQBZIAAiRIggAAIAAggIBhAAIAAAgIghAAIAACRg");
	this.shape_17.setTransform(124.1,9.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00A7E0").s().p("Ag/A9QgYgaAAgjQAAghAYgbQAaggAqAAQAcAAAWAPQAVAOALAZIglAAQgSgVgbgBQgZABgRASQgRASAAAXQAAAZASASQASARAYABQAbgBAPgUIAnAAQgMAYgUAOQgWAPgcAAQgqAAgaggg");
	this.shape_18.setTransform(109.8,9.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00A7E0").s().p("AAnBZIAAh8IhOB8IghAAIAAixIAhAAIAAB8IBOh8IAhAAIAACxg");
	this.shape_19.setTransform(91.5,9.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00A7E0").s().p("AhAA9QgXgaAAgjQAAgiAXgaQAbggAqAAQAcAAAWAPQAWAOALAaIgmAAQgSgXgaAAQgZAAgSATQgRASAAAXQAAAZASASQARARAZABQAbAAAPgVIAnAAQgMAYgUAOQgWAPgcAAQgqgBgbgfg");
	this.shape_20.setTransform(73.3,9.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4, new cjs.Rectangle(0,0,243.9,51.5), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("AA9BZIAAiEIgvCEIgbAAIgviEIAACEIghAAIAAixIAsAAIAxCHIAyiHIAsAAIAACxg");
	this.shape.setTransform(139.5,65.7,0.9,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A7E0").s().p("AhCBCQgbgbAAgnQAAglAbgcQAbgbAnAAQAoAAAbAbQAbAcAAAlQAAAngbAbQgbAbgoAAQgmAAgcgbgAgqgqQgSARAAAZQAAAZASASQARARAZAAQAaAAASgSQARgRAAgZQAAgZgSgRQgRgRgaAAQgZAAgRARg");
	this.shape_1.setTransform(120.5,65.7,0.9,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00A7E0").s().p("Ag3BZIAAixIAxAAQAkAAAQAWQAKAOAAAUQAAAVgMAOQgRATghAAIgRAAIAABDgAgXgJIAUAAQAbAAAAgXQAAgYgbAAIgUAAg");
	this.shape_2.setTransform(105.9,65.7,0.9,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00A7E0").s().p("AAzBZIgSguIhBAAIgSAuIgkAAIBKixIAZAAIBKCxgAgTALIAnAAIgUgzg");
	this.shape_3.setTransform(91.3,65.7,0.9,0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00A7E0").s().p("AAgBZIAAiRIg/AAIAACRIghAAIAAixICBAAIAACxg");
	this.shape_4.setTransform(76,65.7,0.9,0.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00A7E0").s().p("AhAA9QgXgbAAgiQAAghAXgbQAbggAqAAQAcAAAWAPQAWAOALAZIgmAAQgRgWgbABQgZgBgSATQgRARAAAYQAAAZASARQARASAZAAQAbABAQgVIAmAAQgLAYgVAOQgWAPgcAAQgqgBgbgfg");
	this.shape_5.setTransform(55.3,65.7,0.9,0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00A7E0").s().p("AAbBZIAAhFIgBAAIguBFIgnAAIAxhCQgVgCgNgOQgNgOAAgXQAAgVALgOQAQgXAmAAIA0AAIAACxgAgZgdQAAAaAgAAIAUAAIAAg1IgUAAQggAAAAAbg");
	this.shape_6.setTransform(181,40.3,0.9,0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00A7E0").s().p("AAoBZIAAh8IhPB8IghAAIAAixIAhAAIAAB8IBPh8IAgAAIAACxg");
	this.shape_7.setTransform(166.9,40.3,0.9,0.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00A7E0").s().p("AAhBZIAAhKIhAAAIAABKIghAAIAAixIAhAAIAABIIBAAAIAAhIIAgAAIAACxg");
	this.shape_8.setTransform(151.6,40.3,0.9,0.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00A7E0").s().p("AgvBZIAAixIBfAAIAAAgIg+AAIAAApIA7AAIAAAfIg7AAIAAApIA+AAIAAAgg");
	this.shape_9.setTransform(138.8,40.3,0.9,0.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00A7E0").s().p("AAxBZIgxiDIgwCDIgjAAIBGixIAbAAIBHCxg");
	this.shape_10.setTransform(125.2,40.3,0.9,0.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00A7E0").s().p("Ag5BZIAAixIArAAQAUAAAOAGQAbAMAAAdQAAAYgUAKQAPAFAIAKQAIAMAAAPQAAA2hGAAgAgYA5IAWAAQAbAAAAgWQAAgXgbAAIgWAAgAgYgTIAQAAQAWAAAAgSQAAgTgWAAIgQAAg");
	this.shape_11.setTransform(111.6,40.3,0.9,0.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00A7E0").s().p("AhCBBQgbgaAAgnQAAgmAbgaQAbgbAnAAQAnAAAbAbQAbAaAAAmQAAAngbAaQgbAbgnAAQgnAAgbgbgAgqgqQgSARAAAZQAAAZASASQASASAYAAQAagBARgRQASgSAAgZQAAgZgSgRQgRgSgaAAQgZAAgRASg");
	this.shape_12.setTransform(95.8,40.3,0.9,0.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00A7E0").s().p("AgQBZIAAiRIggAAIAAggIBhAAIAAAgIghAAIAACRg");
	this.shape_13.setTransform(82.8,40.3,0.9,0.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00A7E0").s().p("AhCBBQgbgaAAgnQAAgmAbgaQAcgbAmAAQAoAAAbAbQAbAaAAAmQAAAngbAaQgbAbgoAAQgmAAgcgbgAgqgqQgSARAAAZQAAAZASASQARASAZAAQAagBASgRQARgSAAgZQAAgZgSgRQgRgSgaAAQgZAAgRASg");
	this.shape_14.setTransform(69.7,40.3,0.9,0.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00A7E0").s().p("AgrBZIAAixIBXAAIAAAgIg2AAIAACRg");
	this.shape_15.setTransform(56.6,40.3,0.9,0.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00A7E0").s().p("AAnBZIAAh8IhOB8IggAAIAAixIAgAAIAAB8IBOh8IAiAAIAACxg");
	this.shape_16.setTransform(43.2,40.3,0.9,0.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00A7E0").s().p("Ag4BZIAAixIAyAAQAkAAAQAWQAKAOAAAUQAAAVgMAOQgQATgiAAIgRAAIAABDgAgXgJIAUAAQAbAAAAgXQAAgYgbAAIgUAAg");
	this.shape_17.setTransform(29.6,40.3,0.9,0.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00A7E0").s().p("AAhBZIAAiRIhAAAIAACRIghAAIAAixICBAAIAACxg");
	this.shape_18.setTransform(15.7,40.3,0.9,0.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00A7E0").s().p("AAbBZIAAhFIgBAAIguBFIgnAAIAxhCQgVgCgNgOQgOgOAAgXQAAgVALgOQARgXAmAAIA0AAIAACxgAgZgdQAAAaAgAAIAUAAIAAg1IgUAAQggAAAAAbg");
	this.shape_19.setTransform(143.6,14.9,0.9,0.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00A7E0").s().p("AAnBZIAAh8IhOB8IggAAIAAixIAgAAIAAB8IBOh8IAiAAIAACxg");
	this.shape_20.setTransform(129.5,14.9,0.9,0.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00A7E0").s().p("AAqBqIAAgiIh0AAIAAixIAgAAIAACRIBAAAIAAiRIAhAAIAACRIAUAAIAABCg");
	this.shape_21.setTransform(114.7,16.4,0.9,0.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00A7E0").s().p("AAYBZIg2hOIAABOIghAAIAAixIAhAAIAABNIA2hNIAoAAIhCBYIBCBZg");
	this.shape_22.setTransform(100.2,14.9,0.9,0.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00A7E0").s().p("AAhBZIAAhKIhBAAIAABKIggAAIAAixIAgAAIAABIIBBAAIAAhIIAgAAIAACxg");
	this.shape_23.setTransform(85.7,14.9,0.9,0.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00A7E0").s().p("AghBZIAUgtIhEiEIAoAAIAuBeIApheIAkAAIhQCxg");
	this.shape_24.setTransform(70.7,14.9,0.9,0.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00A7E0").s().p("AgQBkIAAgZQgiAAgXgVQgWgWAAggQAAghAWgWQAXgWAiAAIAAgWIAgAAIAAAWQAjAAAXAWQAWAWAAAhQAAAggWAWQgXAVgjAAIAAAZgAAQgtIAABZQAVAAAOgOQAMgMAAgSQAAgTgMgNQgNgNgUAAIgCAAgAgyggQgMANAAATQAAASAMAMQANAOAVAAIAAhZIgBAAQgUAAgNANg");
	this.shape_25.setTransform(55.1,14.6,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(9.9,5.6,176.6,68.5), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("AAkEFIAAgiIh/AAIAAAiIghAAIAAhCIARAAIBCiRIAcAAIBBCRIARAAIAABCgAAQDDIgrhkIgsBkIBXAAgAkSDbQgVgMgNgVQgLgVgBgaQABgaALgVQANgUAVgNQAVgMAbgBQAaABAWAMQAUANANAUQAMAVABAaQgBAagMAVQgNAVgUAMQgWAMgaABQgbgBgVgMgAkCBXQgNAIgIANQgIAOAAARQAAARAIANQAIAOANAIQAOAIARABQATgBANgIQAOgIAHgOQAJgOgBgQQABgRgJgOQgHgNgOgIQgOgIgRgBQgSABgOAIgAHxDjIAAh9IhQB9IghAAIAAixIAhAAIAAB8IBQh8IAhAAIAACxgAFKDjIgxiEIgwCEIgkAAIBGixIAdAAIBGCxgABXDjIAAixIBfAAIAAAfIg+AAIAAAqIA8AAIAAAfIg8AAIAAApIA+AAIAAAggAl4DjIAAiFIgvCFIgdAAIgviFIAACFIggAAIAAixIAsAAIAxCIIAyiIIAsAAIAACxgAAsgtIAAgiIh1AAIAAixIAgAAIAACRIBAAAIAAiRIAhAAIAACRIAUAAIAABCgAE0hXQgVgMgNgVQgMgVAAgaQAAgaAMgVQANgUAVgNQAVgMAbgBQAbABAVAMQAUANANAUQAMAVABAaQgBAagMAVQgNAVgUAMQgVAMgbABQgbgBgVgMgAFFjbQgOAIgIANQgIAOAAARQAAARAIANQAIAOAOAIQANAIARABQATgBANgIQAOgIAHgOQAJgOgBgQQABgRgJgOQgHgNgOgIQgOgIgRgBQgSABgNAIgAorhXQgVgMgMgVQgMgVAAgaQAAgaAMgVQAMgUAVgNQAWgMAagBQAbABAVAMQAVANAMAUQAMAVABAaQgBAagMAVQgMAVgVAMQgVAMgbABQgagBgWgMgAoajbQgOAIgIANQgHAOAAARQAAARAHANQAIAOAOAIQANAIASABQASgBAOgIQANgIAIgOQAIgOAAgQQAAgRgIgOQgIgNgNgIQgOgIgSgBQgSABgNAIgAPphPIAAixIBeAAIAAAfIg+AAIAAAqIA8AAIAAAfIg8AAIAAApIA+AAIAAAggAOnhPIAAixIAhAAIAACxgAMfhPIAAixIAgAAIAABEIAbAAQAWAAANAIQANAIAFANQAGAMAAAOQAAAQgHAMQgIANgOAGQgNAHgRAAgAM/hvIAbAAQAMAAAHgGQAHgFAAgLQAAgLgHgGQgHgGgMAAIgbAAgALdhPIAAhKIhBAAIAABKIggAAIAAixIAgAAIAABHIBBAAIAAhHIAiAAIAACxgAI6hPIAAhKIhAAAIAABKIghAAIAAixIAhAAIAABHIBAAAIAAhHIAiAAIAACxgADOhPIAAh9IhPB9IghAAIAAixIAhAAIAAB8IBPh8IAhAAIAACxgAiAhPIgSguIhBAAIgSAuIglAAIBKixIAbAAIBKCxgAieicIgUg0IgUA0IAoAAgAmGhPIAAixIArAAIAKAAIARADQAIACAIAFQAIAFAFAJQAGAJAAANQAAALgFAHQgDAHgEAEIgHAFQAOAFAHAMQAJALgBAPQABANgGANQgGAMgQAIQgPAIgdAAgAllhvIAVAAIAGAAQAFAAAFgDQAFgCAEgEQADgFAAgIQABgEgCgFQgBgFgHgFQgGgEgNAAIgVAAgAlli8IAQAAQAKAAAFgEQAFgDABgEIACgHQAAgJgEgEQgFgEgFgBIgJgBIgQAAgAqQhPIAAhKIhCAAIAABKIggAAIAAixIAgAAIAABHIBCAAIAAhHIAgAAIAACxgAszhPIAAhKIhCAAIAABKIggAAIAAixIAgAAIAABHIBCAAIAAhHIAgAAIAACxgAvXhPIAAh9IhPB9IghAAIAAixIAhAAIAAB8IBPh8IAhAAIAACxg");
	this.shape.setTransform(109.6,26.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(0,0,219.1,52.2), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("AAzBZIgSguIhBAAIgSAuIgkAAIBKixIAZAAIBKCxgAgTALIAnAAIgUgzg");
	this.shape.setTransform(233.7,39.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A7E0").s().p("AAYBZIg2hOIAABOIghAAIAAixIAhAAIAABNIA2hNIAoAAIhCBYIBCBZg");
	this.shape_1.setTransform(217.9,39.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00A7E0").s().p("AAoBZIAAh8IhPB8IggAAIAAixIAgAAIAAB8IBPh8IAgAAIAACxg");
	this.shape_2.setTransform(201,39.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00A7E0").s().p("AAgBZIAAhLIg/AAIAABLIghAAIAAixIAhAAIAABIIA/AAIAAhIIAhAAIAACxg");
	this.shape_3.setTransform(184,39.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00A7E0").s().p("AArBZIgrg+IgpA+IgmAAIA9hZIg9hYIAmAAIApA+IArg+IAmAAIg9BYIA9BZg");
	this.shape_4.setTransform(167.7,39.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00A7E0").s().p("AgvBZIAAixIBfAAIAAAgIg9AAIAAApIA6AAIAAAfIg6AAIAAApIA9AAIAAAgg");
	this.shape_5.setTransform(153.4,39.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00A7E0").s().p("AgPBZIAAiRIghAAIAAggIBhAAIAAAgIggAAIAACRg");
	this.shape_6.setTransform(142,39.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00A7E0").s().p("AAbBZIAAhFIgBAAIguBFIgnAAIAxhCQgVgCgNgOQgNgOAAgXQAAgVALgOQAQgXAmAAIA0AAIAACxgAgYgdQAAAaAfAAIAUAAIAAg1IgUAAQgfAAAAAbg");
	this.shape_7.setTransform(123.7,39.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00A7E0").s().p("AAzBZIgTguIhAAAIgSAuIgkAAIBKixIAZAAIBKCxgAgTALIAnAAIgUgzg");
	this.shape_8.setTransform(108.1,39.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00A7E0").s().p("AAgBZIAAhLIhAAAIAABLIggAAIAAixIAgAAIAABIIBAAAIAAhIIAhAAIAACxg");
	this.shape_9.setTransform(91,39.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00A7E0").s().p("AAgBZIAAhLIg/AAIAABLIghAAIAAixIAhAAIAABIIA/AAIAAhIIAhAAIAACxg");
	this.shape_10.setTransform(74.7,39.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00A7E0").s().p("AhCBBQgbgaABgnQgBgmAbgaQAcgbAmAAQAnAAAcAbQAbAaAAAmQAAAngbAaQgbAbgoAAQgmAAgcgbgAgrgqQgRARAAAZQAAAZARASQASASAZAAQAaAAARgSQARgTAAgYQABgZgSgRQgRgSgaAAQgZAAgSASg");
	this.shape_11.setTransform(56.5,39.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00A7E0").s().p("AAqBZIgqg+IgpA+IgmAAIA8hZIg8hYIAmAAIApA+IAqg+IAmAAIg9BYIA9BZg");
	this.shape_12.setTransform(38.2,39.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00A7E0").s().p("AgiBZIAVgtIhEiEIAoAAIAuBeIApheIAkAAIhRCxg");
	this.shape_13.setTransform(21.6,39.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00A7E0").s().p("AAYBZIg2hOIAABOIghAAIAAixIAhAAIAABNIA2hNIAnAAIhBBYIBBBZg");
	this.shape_14.setTransform(6.4,39.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00A7E0").s().p("AAaBZIAAhFIAAAAIguBFIgmAAIAwhCQgVgCgNgOQgNgOAAgXQgBgVALgOQARgXAmAAIAzAAIAACxgAgZgdQABAaAfAAIATAAIAAg1IgTAAQgfAAgBAbg");
	this.shape_15.setTransform(201.8,9.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00A7E0").s().p("AAzBZIgTguIhAAAIgSAuIgkAAIBKixIAZAAIBKCxgAgTALIAnAAIgUgzg");
	this.shape_16.setTransform(186.1,9.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00A7E0").s().p("AAZBZIg3hOIAABOIghAAIAAixIAhAAIAABNIA3hNIAnAAIhCBYIBCBZg");
	this.shape_17.setTransform(170.3,9.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00A7E0").s().p("AhAA9QgXgbAAgiQAAghAXgbQAaggArAAQAcAAAVAPQAXAOALAZIgmAAQgQgVgcgBQgZABgSARQgRASAAAYQAAAYASASQARATAZgBQAbAAAPgUIAnAAQgMAYgUAOQgWAPgcAAQgrgBgagfg");
	this.shape_18.setTransform(153.1,9.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00A7E0").s().p("AAgBZIAAhLIhAAAIAABLIggAAIAAixIAgAAIAABIIBAAAIAAhIIAhAAIAACxg");
	this.shape_19.setTransform(135.5,9.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00A7E0").s().p("AAbBZIAAhFIgBAAIguBFIgnAAIAxhCQgVgCgNgOQgOgOABgXQAAgVALgOQAQgXAmAAIA0AAIAACxgAgZgdQAAAaAhAAIATAAIAAg1IgTAAQghAAAAAbg");
	this.shape_20.setTransform(119.7,9.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00A7E0").s().p("Ag6BZIAAixIAhAAIAABFIAZAAQAfAAAPARQANAOAAAWQAAAZgRAPQgQAPgaAAgAgZA5IAZAAQAMAAAHgGQAHgGAAgLQAAgKgHgGQgHgGgMAAIgZAAg");
	this.shape_21.setTransform(106.5,9.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00A7E0").s().p("AAwBZIgwiDIgwCDIgkAAIBHixIAbAAIBHCxg");
	this.shape_22.setTransform(90.3,9.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00A7E0").s().p("AAzBZIgTguIhAAAIgSAuIgkAAIBKixIAZAAIBKCxgAgTALIAnAAIgUgzg");
	this.shape_23.setTransform(72.8,9.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00A7E0").s().p("AgPBZIAAiRIghAAIAAggIBhAAIAAAgIghAAIAACRg");
	this.shape_24.setTransform(59.9,9.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00A7E0").s().p("AAnBZIAAh8IhOB8IghAAIAAixIAhAAIAAB8IBOh8IAhAAIAACxg");
	this.shape_25.setTransform(46,9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(0,0,242.4,48.5), null);


(lib.p5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._5();
	this.instance.parent = this;
	this.instance.setTransform(-149,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p5, new cjs.Rectangle(-149,-145,298,274), null);


(lib.p4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._4();
	this.instance.parent = this;
	this.instance.setTransform(-149,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p4, new cjs.Rectangle(-149,-145,298,274), null);


(lib.p3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._3();
	this.instance.parent = this;
	this.instance.setTransform(-149,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p3, new cjs.Rectangle(-149,-145,298,274), null);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(-149,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2, new cjs.Rectangle(-149,-145,298,274), null);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(-149,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1, new cjs.Rectangle(-149,-145,298,274), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("AqTBeQgvgrAbhAQAag5BOghQBYglCOAAQAgAAAcAEIAlAFIAPADIgUAkQgsgMgmAAQhIAAg7AVQhQAcgMA5QgHAiAYAeQAgAnBFgEQAWgBAqgOQAzgRAdgYIBIg/QAHgFAHgEQAGgCAIgBIAHAAIBNAAIAZBqIAwhpIBVAAIAxBRIAlhRIBOAAIhFCUIhQAAIgzhWIgmBWIgxAAIAAABIhcAAIgEgbIhUAAIgcAZIg3AAQg/AXhUAAQh4AAg0gvgAjhA/IAxgBIgEgpgAG6CFIAygxIgyhxIBNAAIAVA8IA/g9IBXAAIibCaQgFAFgEABQgFACgNABgAEgB3Ih+AAIBEiUIB+AAQA9AAAWAcQASAXgOAeQgNAbggASQgpAWhCAAIgDAAgAEHBSIAWAAQAaAAAUgGQAggKAGgYQAGgUgUgJQgOgGgWAAIgXAAg");
	this.shape.setTransform(0,-5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-68.9,-19.1,138,28.2), null);


(lib.legal333 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AG/AWIgEgDIgCgEIgCgEIACgBIACAAIABABIABACIACACIACACIAEAAIADAAIADgCIABgDIABgDIAAgDIgCgCIgDgCIgFAAIAAgDIAEgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBIACgCIAAgDIAAgDIgCgCIgCgCIgDAAIgDAAIgCACIgCACIAAACIgBABIgCABIgDgBIABgFIAEgEIAEgCIAFgBIAEABIAEACIACADIABAFIAAAEIgCADIgCACIgDABQAEAAACADQACACAAAEIgBAGIgDAEIgEADIgFAAIgGAAgAGfAWIgEgBIgCgBIgCgCIABgDIACgBIABABIACABIACABIADAAIAEAAIADgCIACgDIAAgEIAAgEIgCgDQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAIgDAAIgHAAIgDAAIADgVIAUAAIAAADIgBACIgDABIgMAAIgCALIAGgBQADAAACABIAEADIADADIABAFIgBAHQgBACgDACQgBACgDABIgGABIgDAAgAFcAVIgEgEQgCgDgBgEIgBgKIABgJQABgEACgDIAEgEIAGgBIAGABIAFAEQACADABAEIABAJIgBAKQgBAEgCADIgFAEIgGABIgGgBgAFfgPIgDADIgCAFIgBAHIABAIIACAGIADADIADAAIAEAAIACgDIADgGIAAgIIAAgHIgDgFQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAAAAAIgEgBIgDABgAEbAVQgDgBgCgDQgCgDgBgEIgBgKIABgJQABgEACgDQACgCADgCIAFgBQAEAAACABIAFAEQACADABAEIABAJIgBAKQgBAEgCADIgFAEIgGABIgFgBgAEdgPIgDADIgCAFIgBAHIABAIIACAGIADADIADAAIAEAAIADgDIACgGIABgIIgBgHIgCgFQgBgBAAAAQAAgBAAAAQgBgBAAAAQgBAAAAAAIgEgBIgDABgAD6AWIgEgEIgDgEIgBgGIABgHIAEgFIAKgPIABgBIACgBIAFAAIgMARIgBABIgBABIADgBIAEgBIAEABIAEACIADAEIABAFIgBAGIgDAEIgFADIgFABIgGAAgAD8AAIgDACIgBADIgBADIABAEIABADIADACIADABIAEgBIADgCIACgDIAAgDIAAgEIgCgDIgDgCIgDAAIgEAAgABVAVQgDgBgBgDQgCgDgBgEQgCgEAAgGQAAgEACgFQABgEACgDQABgCADgCIAGgBQADAAADABIAFAEQACADABAEIABAJIgBAKQgBAEgCADIgFAEIgGABIgGgBgABXgPIgCADIgDAFIAAAHIAAAIIADAGIACADIAEAAIAEAAIACgDIACgGIABgIIgBgHIgCgFQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAAAAAIgEgBIgEABgAhuAVQgEgCgDgDIgEgHIgBgJQAAgEABgEIAEgHQADgDAEgBQADgCAFAAQAEAAAEACQAEABACADQADADACAEIABAIIgBAJQgCAEgDADQgCADgEACQgEABgEAAQgFAAgDgBgAhsgPIgEAEIgDAFIgBAGIABAHIADAFQABADADABIAGABIAGgBIAEgEQACgCABgDIABgHIgBgGQgBgDgCgCIgEgEIgGgBIgGABgAihAWIgDgBIgDgBIgCgCIABgDIACgBIABABIACABIACABIAEAAIADAAIADgCIACgDIAAgEIAAgEIgCgDQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAAAAAIgEAAIgHAAIgDAAIADgVIAUAAIAAADIgBACIgCABIgNAAIgCALIAGgBQADAAACABIAFADIACADIABAFIgBAHIgDAEIgFADIgGABIgDAAgAjjAVQgDgBgCgDQgCgDgBgEIgBgKIABgJQABgEACgDQACgCADgCQACgBADAAIAGABIAFAEIADAHIABAJIgBAKIgDAHIgFAEIgGABIgFgBgAjhgPIgDADIgCAFIgBAHIABAIIACAGIADADIADAAIAEAAIADgDIACgGIAAgIIAAgHIgCgFQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAIgEgBIgDABgAlGAWIgDgBIgCgBIgCgCIABgDIABgBIACABIACABIACABIADAAIAEAAIADgCIABgDIABgEIAAgEIgCgDQgBAAAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAIgDAAIgHAAIgDAAIADgVIATAAIAAADIAAACIgDABIgMAAIgCALIAGgBQADAAACABIAEADIADADIAAAFIgBAHIgDAEIgFADIgFABIgEAAgAmIAVQgDgBgBgDQgDgDgBgEIgBgKIABgJQABgEADgDQABgCADgCQADgBADAAIAGABIAEAEQADADABAEIABAJIgBAKQgBAEgDADIgEAEIgGABIgGgBgAmGgPIgDADIgCAFIAAAHIAAAIIACAGIADADIAEAAIADAAIADgDIACgGIABgIIgBgHIgCgFQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBAAIgDgBIgEABgAGHAWIAAgLIgRAAIgBgBIgBgBIgBgDIAUgbIAFAAIAAAbIAGAAIAAADIAAABIgBABIgFAAIAAALgAF5AGIAOAAIAAgQIAAgCIABgCgAE4AWIAQgiIACgDIgVAAIgBgBIAAAAIAAgFIAcAAIAAADIgBACIAAABIgRAjIgBABIgBABgADaAWIgFAAIANgSIABgBIABgCIgDACIgFABIgEgBIgDgCQgCgBgBgCIgBgFIABgGIADgEIAEgDQADgBADAAQADAAACABQACABACACIADAEIABAGIgBAEIAAADIgCACIgCAEIgKAOIgBACIgCAAgADbgQIgCACIgCADIgBADQAAAEADADQACABADAAIAEAAIADgCIABgCIABgEIgBgDIgCgDIgCgCIgDAAIgEAAgAC0AWIARgiIACgDIgVAAIgBgBIgBAAIAAgFIAcAAIAAADIAAACIgBABIgQAjIgBABIgCABgACTAWIARgiIACgDIgVAAIgBgBIgBAAIAAgFIAcAAIAAADIAAACIAAABIgRAjIgBABIgCABgACAAWIAAgLIgSAAIgBgBIAAgBIgBgDIAUgbIAFAAIAAAbIAGAAIAAADIAAABIgBABIgFAAIAAALgAByAGIAOAAIAAgQIAAgCIAAgCgAAxAWIAAgFIAIAAIAAgbIAAgDIgGAGIgBABIgBAAIAAgBIgBAAIgCgCIAMgMIAFAAIAAAmIAIAAIAAAFgAAQAWIAAgUIgUAAIAAAUIgGAAIAAgrIAGAAIAAAUIAUAAIAAgUIAGAAIAAArgAgsAWIAAgrIAMAAQAEAAADACQADAAACACIACAEIABAGIgBAGIgCADIgFADQgDABgEAAIgGAAIAAAQgAgmABIAGAAIAEgBIADgBIACgDIAAgDIAAgEIgCgCQAAgBAAAAQgBAAAAAAQAAgBgBAAQAAAAgBAAIgEgBIgGAAgAhLAWIAAgrIAZAAIAAAFIgTAAIAAAmgAjGAWIAAgFIAIAAIAAgbIAAgDIgGAGIgBABIgBAAIAAgBIgBAAIgCgCIANgMIAEAAIAAAmIAIAAIAAAFgAkMAWIAAgCIAAgCIABgBIAMgNIAEgEIACgCIABgDIAAgEIAAgDIgBgCIgDgCIgDAAIgCAAIgDACIgBACIgBACQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAAAAAIgCABIgCgBQAAgDABgCIADgEIAEgCIAFgBIAFABIAEACIACAEIABAFIgBAFIgBADIgDADIgDAEIgLALIADAAIACAAIANAAIABAAIABABIAAAEgAkpAWIAAgFIAJAAIAAgbIAAgDIgHAGIgBABIgBAAIAAgBIgBAAIgBgCIAMgMIAEAAIAAAmIAIAAIAAAFgAldAWIAAgLIgSAAIgBgBIgBgBIAAgDIAUgbIAFAAIAAAbIAGAAIAAADIAAABIgCABIgEAAIAAALgAlrAGIAOAAIAAgQIAAgCIAAgCgAmtAWIARgiIACgDIgVAAIgBgBIgBAAIAAgFIAcAAIAAADIAAACIAAABIgRAjIgBABIgCABgAnOAWIARgiIACgDIgVAAIgBgBIAAgFIAcAAIAAADIgBACIAAABIgRAjIgBABIgCABg");
	this.shape.setTransform(243.3,-2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah3AbIAAgKIgnAAIAAgeIAFAAIAAAZIAMAAIAAgZIAFAAIAAAZIAMAAIAAgZIAFAAIAAAZIAFAAIAAANIgBACIgBAAgAmKAbIAAgoIAEAAQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIAAADIAFgDQACgCADAAIAEABIAEADIACAFIABAGIgBAGIgCAFIgEAEIgGABIgEgBIgDgCIAAANgAmBgIIgDADIAAAOIADADIADAAQAEAAACgDQADgCAAgGIgBgEIgCgEIgCgCIgDAAIgEABgACwAXIAAAAIABgBIAAgBIABgBIABgCIABgBIgBAAIgBgBIgBgBIgBgBIAAgBIABgDQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAIACAAIABABIABACIAAACIAAADIgBADIgCACIgCADgADmAYIAAgHIgWAAIAAAGIAAAAIgBABIgCAAIAAgKIACAAQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAgBIABgCIABgDIABgEIABgGIAAgIIARAAIAAAZIAFAAIAAAJIgBAAIgBABgADYAAIgCAGIgBAEIgBAEIANAAIAAgXIgJAAIAAAJgAj9AWIAAgHIgVAAIAAAHIgBAAIgDAAIAAgKIADAAIABgBIABgCIABgDIABgFIABgFIAAgJIARAAIAAAZIAEAAIAAAJIAAABIgBAAgAkKgBIgCAFIgBAFIgCADIAOAAIAAgWIgJAAIAAAJgAGtARIAAgTIgVAAIAAATIgGAAIAAgrIAGAAIAAATIAVAAIAAgTIAGAAIAAArgAGCARIAAgTIgVAAIAAATIgGAAIAAgrIAGAAIAAATIAVAAIAAgTIAGAAIAAArgAFXARIAAgeIAAgCIAAgEIgBADIgBACIgSAdIgBABIgCABIgEAAIAAgrIAGAAIAAAdIAAADIgBADIABgCIABgDIATgcIABgBIACgBIAEAAIAAArgAESAQIgEgCIgDgEIgBgFQAAgEACgCQACgDAEgBQgDgBgCgDQgCgDAAgDIABgFIADgDIAEgDIAEAAIAGAAIAEADIACADIABAFQAAADgCADQgBADgDABQADABADADQABACAAAEIgBAFQAAACgDACIgEACIgGABIgFgBgAEVgCIgDABIgCACIgBADIABAEIABACIADACIADAAIAEAAIADgCIABgCIABgEIgBgDIgBgCIgDgBIgEgBIgCABgAEVgVIgDABIgBACIgBADIABADIABACIACACIADABIAEgBIACgCIABgCIABgDIgBgDIgBgCIgCgBIgEgBIgCABgADyARIgBAAIgCgBIgBgBIAAgCIAAgBIABgCIACgBIABAAIABAAIABABIABACIABABIgBACIgBABIgBABIgBAAgACkARIAAgUIAAgBIAAgCIgBACIAAAAIgBABIgBADIgCACIgDAEIgGAJIgBABIgBABIgEAAIAAgeIAGAAIAAATIAAABIAAACIABgCIAAgBIACgCIACgDIACgDIAHgKIABgBIABAAIADAAIAAAegABZARIAAgCIAAgCIABgBIANgNIADgDIACgDIABgDIABgEIgBgDIgBgDIgDgBIgCAAIgDAAIgCABIgCACIgBADIgBABIgBABIgDgBIABgGIADgDIAEgDIAFAAIAFAAIAEADIACAEIABAFIAAAEIgCAEIgDAEIgDADIgKALIACgBIACAAIANAAIACABIAAABIAAAEgAA/ARIAAgUIAAgBIAAgCIgBACIAAAAIgBABIgBADIgDACIgCAEIgGAJIgCABIgBABIgDAAIAAgeIAGAAIAAATIAAABIAAACIABgCIAAgBIACgCIACgDIACgDIAHgKIABgBIABAAIADAAIAAAegAAeARIAAgUIAAgBIABgCIgBACIgBAAIAAABIgCADIgCACIgDAEIgGAJIgBABIgBABIgDAAIAAgeIAFAAIAAATIAAABIAAACIABgCIAAgBIACgCIACgDIADgDIAHgKIAAgBIABAAIADAAIAAAegAADARIgDgBIAAgBIgFgKIgCgCIgCAAIgDAAIAAAOIgGAAIAAgeIAGAAIAAANIACAAIACgBIACgBIAGgKIAAgBIABAAIAEAAIgGAMIgBABIgCAAIACACIACACIAGANgAgiARIgFgBQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAAAIgDgFIgBgHIABgFQAAgDACgCIAEgDIAGgBIAGAAIAEADIgBADIgBAAIAAAAIgCAAIgBgBIgCgBIgCAAIgEAAIgDADIgBADIgBAEIABAFIABADIADADIADAAIAEAAIABgBIACgBIABgBIABABIABACIgCACIgDACIgCABIgEAAgAg6ARIAAgPIgNAAIAAAPIgFAAIAAgeIAFAAIAAAMIANAAIAAgMIAGAAIAAAegAhZARIAAgUIAAgBIAAgCIgBACIAAAAIgBABIgCADIgCACIgCAEIgHAJIgBABIgBABIgDAAIAAgeIAFAAIAAATIAAABIAAACIABgCIABgBIACgCIACgDIACgDIAHgKIABgBIABAAIADAAIAAAegAi4AQIgEgDIgDgFQgBgDAAgEQAAgCABgDIADgFIAEgEIAGAAIAGAAIAEAEIADAFIABAFIgBAHIgDAFIgEADIgGABIgGgBgAi4gGQgCADAAAEQAAAGACACQACADAEAAQAEAAACgDQACgCAAgGQAAgEgCgDQgCgDgEAAQgEAAgCADgAjgARIAAgrIANAAIAHABQACABACACIADAEIABAGIgBAFIgDAEIgFADIgGABIgGAAIAAAQgAjZgEIAGAAIAEAAIADgCIACgDIAAgDIAAgEIgCgDIgDgBIgEgBIgGAAgAkmARIgDgBIgDgCIgCgCIABgCIABgBIACABIABABIACABIADAAIADAAIACgBIABgCIABgCQAAAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAIgFgBIgEAAIAAgDIAEAAQAAAAABAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBIAAgCIgCgBIgBgBIgDAAIgDAAIgCABIgBABIgBAAIgBAAIAAgBIgBgCIAEgDIAFAAIAFAAIADACIACACIABADIAAACIgBACIgCACIgCAAIAEADQACACAAADIgBAEIgDADIgEABIgDABIgDAAgAk+ARIgFgBIgEgDIgDgGIgBgGIABgFIADgFQAAgBAAAAQABgBAAAAQABAAAAgBQABAAABAAIAFgBIAFAAIAEADQACACAAACIABAGIAAABIgBAAIgTAAIABAFIACAEIACACIAEAAIADAAIACgBIACgBIABgBIABABIACACIgCACIgDACIgDABIgEAAgAlDgHQgCACgBAEIAPAAIAAgDIgBgDIgDgCIgDAAQgDAAgCACgAljAQIgFgDIgDgFIgBgHIABgFIADgFIAFgEIAGAAIAFAAQADABABADIADAFIABAFIgBAHIgDAFIgEADIgFABIgGgBgAlkgGQgCADAAAEQAAAGACACQACADAFAAQADAAADgDQACgCAAgGQAAgEgCgDQgDgDgDAAQgFAAgCADgAmYARIAAgmIgUAAIAAAmIgGAAIAAgrIAgAAIAAArgAB7ABIAAgEIAOAAIAAAEgACagSQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBIgCgBIAAgDIAAgBIABgBIADAAIAAADIABABIABABIACAAIACAAIABgBIABgBIAAgDIAEAAIAAABIABABIgBADIgCABQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAIgEAAIgDAAgAA0gSIgCgCIgCgBIgBgDIABgBIABgBIADAAIAAADIABABIABABIACAAIACAAIABgBIABgBIAAgDIADAAIABABIAAABIAAADIgCABIgCACIgEAAIgEAAg");
	this.shape_1.setTransform(151.2,-1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AjMAbIAAgKIgfAAIAAAIIgBACIgCAAIgDAAIAAgPIAEAAIACgCIACgCIABgFIABgGIABgKIABgNIAYAAIAAAmIAIAAIAAANIgBACIgCAAgAjggIIgBAIIgDAHIgCAFIATAAIAAghIgMAAIgBANgAIPAXIAAgBIACgBIABgBIAAgBIABgCIAAAAIgCgBIgBAAIgBgCIAAgBIABgDIADgBIACAAIAAACIABABIAAACIgBADIAAADIgCACIgCADgAD7AXIABgBIAAgBIACgBIAAgBIAAgCIgBgBIgBAAIgBgCIAAgBIABgDIACgBIACAAIABACIABABIAAACIgBADIgBADIgCACIgBADgAH3ARIgDgCIgCgCIgBgEIABgEIAEgCIAFgDIAIAAIAAgCQABgDgCgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAgBAAIgCABIgCABIgCABIgBAAIgBAAIgBgBIgBgCQADgCADgBQACgCAEAAIADABIAEADIACADIABAFIAAATIgDAAIgBgBIgBgBIgBgCIgBABQgBABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAIgDABIgCAAIgDAAgAH6AFIgCABIgBADIABACIAAABIABABIACAAIACAAIADgBIACgBIABgCIAAgGIgGAAIgDACgAGmAQQgDgBgCgCQgBgCgBgDIgBgHIABgFIACgFIAFgDIAFgBIAGAAIAEADIgCADIgBAAIAAAAIgCgBIgCgBIgDAAIgDABIgCACQgBAAAAABQAAAAgBAAQAAABAAABQAAAAAAABIgBADIABAFQAAABAAAAQAAABAAAAQABAAAAABQAAAAABAAIACADIADABIAEgBIABgBIACgBIAAgBIACABIABADIgCABIgDACIgCABIgEAAIgEgBgAGFAQIgEgDIgDgFIgBgHIABgFIADgFIAEgEIAHAAIAFAAIAFAEIACAFIABAFIgBAHIgCAFIgFADQgCABgDAAIgHgBgAGFgGQgCADAAAEQAAAGACACQACAEAFAAQADAAACgEQADgCAAgGQAAgEgDgDQgCgDgDAAQgFAAgCADgAEwARIgCgBIgBgBIAAgCIAAgBIABgCIACgBIACAAIABAAIABABIAAACIABABIgBACIAAABIgBABIgBAAIgCAAgACAARIgEgBIgDgCIgCgBIACgDIABgBIACAAIACACIACABIADAAIAEgBIACgCIACgDIABgEIgBgCIgBgDIgDgCIgEAAIgGABIgEgBIAEgVIAUAAIAAADIgBACIgDAAIgMAAIgCALIAGAAIAFABIAEACQACACABADIAAAEIAAAGQgCADgCACQgCACgDABQgCABgDAAIgDAAgAADARIgBgBIgBgBIAAgCIAAgBIABgCIABgBIACAAIACAAIABABIAAACIABABIgBACIAAABIgBABIgCAAIgCAAgAgoARIgBgBIgBgBIAAgCIAAgBIABgCIABgBIACAAIACAAIABABIABACIAAABIAAACIgBABIgBABIgCAAIgCAAgAhgARIgBgBIgBgBIAAgCIAAgBIABgCIABgBIABAAIACAAIABABIABACIAAABIAAACIgBABIgBABIgCAAIgBAAgAh9AQQgEgCgCgDIgEgHQgBgEAAgEQAAgFABgEQABgEADgDIAHgFQADgBAFAAQAEAAADABIAGAEIgCADIAAABIgBAAIgBgBIgCgBIgDgBIgEgBIgGABQgDABgBADIgEAFIgBAHIABAGQACADACACIAEAEIAGABIACgBIADAAIADgCIACgBIABAAIAAAAIADADQgCADgEACQgEABgFAAQgEAAgEgBgAmuAQQgEgCgDgDIgEgHQgBgEAAgEQAAgFABgEQABgEADgDIAHgFQADgBAFAAQAEAAAEABIAGAFQADADACAEQABAEAAAFQAAAEgBAEQgCAEgDADQgDADgDACQgEABgEAAQgFAAgDgBgAmsgUQgDABgBADIgEAFIgBAHIABAGIAEAFIAEAEIAGABIAFgBIAFgEIADgFIABgGIgBgHIgDgFQgCgDgDgBIgFgBIgGABgAnbAQQgEgCgDgDIgEgHQgCgEAAgEQAAgFACgEIAEgHIAHgFQADgBAFAAQAEAAAEABIAGAFQACADACAEQABAEABAFQgBAEgBAEIgEAHQgCADgEACQgEABgEAAQgFAAgDgBgAnagUIgEAEIgDAFIgBAHIABAGIADAFIAEAEIAHABIAFgBIAFgEQACgCAAgDIABgGIgBgHQAAgDgCgCQgCgDgDgBIgFgBIgHABgAoJAQQgEgCgDgDIgDgHQgCgEAAgEQAAgFACgEQABgEACgDIAHgFQAEgBAEAAQAFAAAEABIAFAFQAEADABAEQABAEAAAFQAAAEgBAEQgBAEgEADQgCADgDACQgEABgFAAQgEAAgEgBgAoHgUQgDABgBADIgDAFIgBAHIABAGIADAFIAEAEIAGABIAGgBIAFgEQACgCAAgDQABgCAAgEQAAgEgBgDQAAgDgCgCIgFgEIgGgBIgGABgAHXARIAAgeIALAAIAFAAIADACIABADIACACIgBACIgBACIgCACIgCAAQADABABACQABABAAAAQABABAAAAQAAABAAAAQABABAAABIgBAEIgDACIgDACIgEABgAHdANIAGAAQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIAAgCIAAgCIgCgBIgDAAIgGAAgAHdAAIAFAAIACAAIACgBIABgCIABgCIAAgCIgBgBIgCgBIgDAAIgFAAgAHPARIgCgBIgBgBIgGgKIgBgCIgCAAIgDAAIAAAOIgGAAIAAgeIAGAAIAAANIADAAIABAAIACgCIAGgJIAAgCIACAAIAEAAIgHAMIgBABIgDAAIADACIACACIAIANgAFxARIAAgfIAAgBIAAgBIgOAZIgBABIgBABIAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAgBIgPgaIAAACIAAABIAAAfIgEAAIAAgrIAEAAIABABIABAAIAOAZIABAEIAAgCIABgCIAOgZIABAAIABgBIAEAAIAAArgAEXARIAAgeIATAAIAAAEIgOAAIAAAagADeARIANgRIAAgBIABgCIgCACIgFABIgEgBIgEgCIgCgEIgBgGIABgFQABgDACgBIAEgDIAGgBIAEABIAFADIADAEIAAAGIAAAEIAAADIgCADIgCACIgKAPIgBABIgCABgADkgVIgCACIgCADIgBADQAAAEADACQACACADAAIAEAAIACgCIACgDIAAgDIAAgDIgCgDIgCgCIgDAAIgEAAgAC+ARIAAgFIAIAAIAAgcIAAgCIgHAGIgBABIAAAAIgBgBIgBAAIgBgCIAMgMIAEAAIAAAmIAIAAIAAAFgACqARIAAgMIgSAAIgBAAIAAgBIgBgDIAUgbIAEAAIAAAbIAHAAIAAAEIgBAAIgGAAIAAAMgACbABIAPAAIAAgQIAAgCIAAgCgABbARIAAgFIAIAAIAAgcIAAgCIgHAGIgBABIAAAAIgBgBIAAAAIgCgCIAMgMIAEAAIAAAmIAIAAIAAAFgAA5ARIAAgFIAJAAIAAgcIAAgCIgHAGIgBABIgBAAIAAgBIgBAAIgBgCIAMgMIAFAAIAAAmIAIAAIAAAFgAgaARIAAgrIAZAAIAAAFIgTAAIAAAmgAg3ARIAAgTIgWAAIAAATIgGAAIAAgrIAGAAIAAATIAWAAIAAgTIAFAAIAAArgAilARIAAgeIABgCIAAgEIgBADIgCACIgSAdIgBABIgBABIgFAAIAAgrIAGAAIAAAdIAAADIAAADIABgCIABgCIASgdIABgBIADgBIADAAIAAArgAj8ARIAAgTIgWAAIAAATIgFAAIAAgrIAFAAIAAATIAWAAIAAgTIAGAAIAAArgAkgARIgCgBIgBgBIgDgKIgTAAIgDAKIgBABIgBABIgEAAIAQgrIAFAAIAQArgAkwgSIAAACIgHAQIAPAAIgGgQIgBgCIgBgCIAAACgAlIARIgCgBIgBgBIgKgPIgBgCIgDAAIgFAAIAAATIgGAAIAAgrIAGAAIAAATIAEAAIABAAIACAAIABgBIABgBIAKgPIAAgBIACgBIAFAAIgMASQAAAAgBABQAAAAgBABQAAAAgBAAQAAABAAAAIACABIACADIAMASgAAZAMIgCgBIABgCIAFgHIAAgBIAAAAIAAgBIAAAAIgFgHIgBgCIACgBIABgBIAIALIAAABIgIAMgAARAMIgCgBIABgCIAEgHIAAgBIABAAIgBgBIAAAAIgEgHIgBgCIACgBIABgBIAHALIAAABIgHAMgAl2ABIAAgBIAHgLIACABIAAABIAAACIgEAHIAAABIAAABIAEAHIAAACIAAABIgCABgAl/ABIAAgBIAHgLIACABIABABIAAACIgEAHIgBABIABABIAEAHIAAACIgBABIgCABg");
	this.shape_2.setTransform(53.4,-1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal333, new cjs.Rectangle(0,-4.3,290,5.5), null);


(lib.legal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAPAYIAAgJIgeAAIAAAHIAAABIgCABIgCAAIAAgOIADAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAAAIACgDIABgEIABgFIABgIIAAgMIAXAAIAAAhIAGAAIAAAMIgBABIgBABgAgDgIIgDAIIgBAGIgCAEIARAAIAAgdIgLAAIAAALg");
	this.shape.setTransform(93,19.1,1,1,0,0,0,-0.2,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAPAYIAAgJIgeAAIAAAHIAAABIgCABIgCAAIAAgOIADAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAAAIACgDIABgEIABgFIABgIIAAgMIAXAAIAAAhIAGAAIAAAMIgBABIgBABgAgDgIIgDAIIgBAGIgCAEIARAAIAAgdIgLAAIAAALg");
	this.shape_1.setTransform(24.8,18.9,1,1,0,0,0,-0.1,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AIZCGIgGgDIgDgFIgCgGIACgBIADgBQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIABACIADADIACACIAGABIAFgBIAEgCIABgDIABgEIAAgEQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAIgFgDIgHAAIAAgGIAGgBQABAAAAAAQABAAABAAQAAgBABAAQAAAAABgBIACgDIAAgEIAAgEIgCgDIgEgCIgDAAIgFAAIgDACIgCADIgBADIgBACIgDAAIgEgBIACgHIAFgFIAFgDIAHgBIAHABQADABACACIAEAFIABAGIgBAFIgCAEIgDACIgEACQAFACAEADQACADAAAGQAAAEgBADQgCADgDACQgCADgDABIgIABIgIgBgAHrCGIgFgBIgDgCIgDgCIACgEIACgBIACABIADABIADACIAEAAIAGgBIADgCQABgBAAAAQABAAAAgBQAAAAABgBQAAgBAAAAIABgGIAAgFIgDgDIgEgCIgFgBIgKABIgEgBIAEgbIAcAAIAAADIgBADIgDABIgSAAIgCAOIAIgBQAEAAADACIAGADQACADACADIABAHQAAAEgCAEQgCAEgCACQgDADgEABQgDACgFAAIgFgBgAGNCFQgEgCgCgDQgDgEgCgFQgBgGAAgHQAAgIABgGQACgFADgEQACgDAEgCIAIgCQAFAAAEACIAHAFQACAEACAFQACAGAAAIQAAAHgCAGQgCAFgCAEIgHAFQgEACgFAAIgIgCgAGRBUIgFAEIgDAHIAAALIAAAKIADAIIAFADIAEABIAGgBQACgBABgCIAEgIIABgKIgBgLQgCgFgCgCQgBgDgCgBIgGgBIgEABgAEwCFQgDgCgDgDQgDgEgBgFQgCgGAAgHQAAgIACgGQABgFADgEQADgDADgCIAIgCQAFAAAEACIAHAFQADAEABAFQABAGAAAIQAAAHgBAGQgBAFgDAEIgHAFQgEACgFAAIgIgCgAEzBUIgEAEIgCAHIgBALIABAKIACAIIAEADIAFABIAGgBQACgBACgCIACgIIABgKIgBgLQgBgFgBgCQgCgDgCgBIgGgBIgFABgAECCGIgGgEIgDgHQgCgDAAgFQAAgEACgEQACgEADgFIAOgTIACgCIADAAIAGAAIgRAVIgBACIgCACIAFgCIAFgBQAEAAADABIAFADQACADACADQABADAAAEQAAAEgBAEIgFAFIgFAEIgIACIgJgBgAEFBqIgDACIgCAEIgBAEIAAAFIADAEIADADIAFABIAFgBIAEgDIACgEIABgEIgBgFQAAgBAAAAQAAgBAAgBQgBAAAAAAQgBgBAAAAIgEgCIgEgBIgGABgAAZCFQgDgCgDgDQgDgEgBgFQgCgGAAgHQAAgIACgGQABgFADgEQADgDADgCIAIgCQAFAAAEACIAHAFQADAEABAFQABAGAAAIQAAAHgBAGQgBAFgDAEIgHAFQgEACgFAAIgIgCgAAcBUIgEAEIgCAHIgBALIABAKIACAIIAEADIAFABIAGgBQACgBABgCIADgIIABgKIgBgLQgBgFgCgCQgBgDgCgBIgGgBIgFABgAj8CFQgEgCgFgEQgDgEgCgGQgDgFAAgGQAAgHADgFQACgGADgEIAJgGQAGgCAGAAQAGAAAGACQAFADAEADQADAEACAGQADAFAAAHQAAAGgDAFQgCAGgDAEQgEAEgFACQgGACgGAAQgGAAgGgCgAj4BVQgEABgCADIgFAHQgBAEAAAGQAAAFABAEIAFAHQACADAEABQADACAFAAQAEAAAEgCQAEgBACgDQADgDACgEQABgEAAgFQAAgGgBgEQgCgEgDgDQgCgDgEgBQgEgCgEAAQgFAAgDACgAlECGIgEgBIgEgCIgDgCIACgEIACgBIADABIACABIADACIAFAAIAFgBIAEgCQAAgBABAAQAAAAABgBQAAAAAAgBQAAgBAAAAIABgGIAAgFIgCgDIgFgCIgEgBIgKABIgFgBIAFgbIAcAAIAAADIgBADIgEABIgSAAIgCAOIAIgBQAFAAADACIAGADQACADABADIABAHQAAAEgBAEQgCAEgDACQgCADgEABQgEACgEAAIgGgBgAmhCFQgEgCgDgDQgDgEgBgFQgCgGAAgHQAAgIACgGQABgFADgEQADgDAEgCIAIgCQAFAAAEACIAGAFQADAEACAFQABAGAAAIQAAAHgBAGQgCAFgDAEIgGAFQgEACgFAAIgIgCgAmeBUIgEAEIgDAHIgBALIABAKIADAIIAEADIAFABIAFgBQACgBACgCIADgIIABgKIgBgLQgBgFgCgCQgCgDgCgBIgFgBIgFABgAosCGIgEgBIgEgCIgDgCIACgEIACgBIACABIACABIAEACIAEAAIAGgBIAEgCQAAgBAAAAQABAAAAgBQAAAAABgBQAAgBAAAAIABgGIgBgFIgCgDIgEgCIgFgBIgKABIgEgBIAEgbIAcAAIAAADIgBADIgDABIgSAAIgDAOIAIgBQAFAAADACIAGADQACADABADIABAHQABAEgCAEQgCAEgCACQgDADgEABQgDACgFAAIgFgBgAqJCFQgEgCgDgDQgDgEgBgFQgCgGAAgHQAAgIACgGQABgFADgEQADgDAEgCIAIgCQAEAAAEACIAHAFQACAEACAFQACAGgBAIQABAHgCAGQgCAFgCAEIgHAFQgEACgEAAIgIgCgAqHBUIgDAEIgDAHIgCALIACAKIADAIIADADIAGABIAEgBQADgBACgCIACgIIABgKIgBgLQgBgFgBgCQgCgDgDgBIgEgBIgGABgAHKCGIAAgPIgZAAIgCAAIgBgBIAAgEIAbglIAIAAIAAAkIAIAAIAAAFIAAABIgBAAIgHAAIAAAPgAG2BxIAUAAIAAgWIAAgDIAAgCgAFaCGIAXguIADgEIgeAAIgCgBIAAgBIAAgFIAnAAIAAADIAAADIgBABIgXAwIgBABIgDABgADOCGIASgXIABgCIACgCQgCACgDABIgGABIgFgBIgGgDQgCgDgBgDQgBgDAAgEIABgHIAEgGIAGgDQAEgCAEAAQAEAAADACQADABADACQACADACADQABAEAAAEIAAAFIgBAEIgDAEIgCAFIgPATIgBACIgDAAgADXBTIgDADIgDADIgBAFQAAAFADADQADADAFAAIAFgBIAEgCIACgEIABgEIgBgFIgCgDIgEgDIgEAAIgFAAgACfCGIAYguIADgEIgeAAIgCgBIAAgBIAAgFIAoAAIAAADIgBADIAAABIgYAwIgBABIgDABgABxCGIAXguIADgEIgeAAIgBgBIgBgBIAAgFIAoAAIAAADIAAADIgBABIgXAwIgCABIgDABgABWCGIAAgPIgZAAIgBAAIgBgBIgBgEIAcglIAHAAIAAAkIAIAAIAAAFIAAABIgCAAIgGAAIAAAPgABCBxIAUAAIAAgWIAAgDIABgCgAgZCGIAAgGIAMAAIAAgmIAAgDIgJAIIgCABIgBAAIgBgBIgBAAIgBgDIARgPIAGAAIAAAzIAKAAIAAAGgAhHCGIAAgaIgeAAIAAAaIgJAAIAAg5IAJAAIAAAZIAeAAIAAgZIAIAAIAAA5gAieCGIAAg5IASAAQAFAAAEABQAEABACADQAEACABADQABAEAAAEQAAAEgBADIgFAGIgGAEQgFABgEAAIgJAAIAAAVgAiVBqIAJAAIAFAAIAFgDIACgEIABgEIgBgFIgCgEIgFgCIgFgBIgJAAgAjJCGIAAg5IAjAAIAAAGIgaAAIAAAzgAl4CGIAAgGIANAAIAAgmIAAgDIgKAIIgBABIgCAAIAAgBIgBAAIgCgDIARgPIAGAAIAAAzIAMAAIAAAGgAnbCGIAAgCIAAgCIACgCIASgSIAEgEIADgFIACgEIABgFIgBgEIgCgDIgDgCIgEAAIgEAAIgDACIgCADIgCADIgCACIgCAAIgDgBIACgHIADgFIAHgDIAGgBIAHABIAGADQACADABADQACADAAADIgCAGIgCAFIgDAFIgGAFIgOAPIADgBIADAAIATAAIACABIABACIAAAEgAoDCGIAAgGIAMAAIAAgmIAAgDIgKAIIgBABIgBAAIAAgBIgBAAIgCgDIAQgPIAGAAIAAAzIAMAAIAAAGgApNCGIAAgPIgZAAIgBAAIgBgBIgBgEIAcglIAGAAIAAAkIAJAAIAAAFIAAABIgCAAIgHAAIAAAPgAphBxIAUAAIAAgWIAAgDIABgCgAq+CGIAYguIACgEIgdAAIgBgBIgBgBIAAgFIAnAAIAAADIAAADIAAABIgYAwIgCABIgCABgArsCGIAYguIACgEIgdAAIgCgBIgBgBIAAgFIAoAAIAAADIAAADIgBABIgYAwIgBABIgCABgAkxArIAAgOIg3AAIAAgoIAIAAIAAAiIAQAAIAAgiIAIAAIAAAiIAPAAIAAgiIAIAAIAAAiIAHAAIAAARIgBACIgBABgAq1AqIAAg1IAFAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAABABIAAAEIAGgFQADgCAFAAQADAAADACIAFAEQACACABAEIABAIIgBAJIgDAGIgGAFQgDABgFAAIgFgBIgGgDIAAARgAqogEIgGAEIAAATIAFADIAFABQAGAAACgEQADgDAAgIIgBgGIgCgEIgCgDIgFAAQgDAAgCABgABxAmIAAgBIABgBIAAgBIACgCIABgCIABgCIgBAAIgCgBIgBgBIgBgBIAAgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAIADAAIACACIABACIAAACIgBAEIgBAEIgDADIgDAEgAD7AcQgEgBgCgCIgEgFIgBgHQAAgFACgEQADgEAGAAQgFgCgCgDQgCgEgBgEIACgGQABgDADgCIAFgDIAHgBIAIABIAFADIAEAFIABAGQgBAEgBAEQgDADgFACQAGAAADAEQADAEgBAFQABAEgCADQgBADgDACQgCACgEABIgIABIgIgBgAD/ADIgEACIgCADIgBAFIABAEIABADIAFADIAEAAIAFAAIAEgDIACgDIABgEIgBgFIgDgDIgDgCIgFgBIgEABgAD/gWIgEACIgBADIgBAEIAAAEIACADIAEACIAEABIAFgBIADgCIABgDIABgEIgBgEIgBgDIgDgCIgFAAIgEAAgADMAdIgCgBIgBgCIAAgCIAAgCIABgCIACgBIACAAIACAAIACABIABACIAAACIAAACIgBACIgCABIgCAAIgCAAgAi/AcQgDgBgDgDQgCgDgBgEQgCgEAAgFQAAgEACgEQABgDACgDIAGgEQAEgBAFAAIAHABIAGAEIgCADIgBAAIAAABIgCgBIgCgBIgDgBIgDgBIgFABIgEADIgCAEIgBAGIABAHQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAEADIAFABIAEAAIADgCIACgBIABgBIABABIACADIgDADIgDACIgFABIgEAAIgHgBgAmNAcIgGgEIgEgHQgBgEAAgFQAAgEABgEQACgDACgDQADgDADgBIAJgBIAIABQAEABACADQACADACADIABAIIgBAJIgEAHIgGAEIgIABQgFAAgEgBgAmNgCQgDADAAAHQAAAIADADQADAEAGAAQAGAAACgEQADgDAAgIQAAgHgDgDQgCgEgGAAQgGAAgDAEgAooAdIgFgBIgDgCIgDgDIACgDIABgBIABABIACABIAEACIAEAAIAEAAIADgCIABgCIABgDQAAgCgCgCQgDgCgFAAIgEAAIAAgFIAEAAQAEAAADgCQABAAAAgBQABAAAAAAQAAgBAAgBQAAAAAAAAIAAgCIgCgCIgCgBIgEgBIgEABIgDABIgCABIgBAAIgBAAIgBgBIgBgDIAFgDIAIgBIAHAAIAEADIADADIABAEIAAACIgBACIgDACIgDACQAEABACADQACACAAAEIgBAFIgEAEIgFACIgGABIgDAAgApRAcIgGgEIgFgHQgBgEAAgFQAAgFABgDIAFgGQACgCADgCQAEgBAEAAIAHABQADABACACQADADABADQABACAAAFIAAACIgBABIgbAAIABAGQAAADACACQABAAAAABQABAAAAAAQABABAAAAQAAAAABAAIAFABIAFAAIADgCIACgBIACgBIACABIACADIgDADIgFACIgEABIgFAAQgDAAgEgBgApSgDQgDADAAAEIAVAAIAAgEIgCgDIgDgCIgFgBQgFAAgDADgAp/AcIgGgEIgEgHQgCgEABgFQgBgEACgEQACgDACgDQACgDAEgBIAIgBIAIABQAEABADADQACADABADIABAIIgBAJIgDAHIgHAEIgIABQgEAAgEgBgAqAgCQgCADAAAHQAAAIACADQAEAEAFAAQAGAAADgEQADgDAAgIQAAgHgDgDQgDgEgGAAQgFAAgEAEgAHXAdIAAgaIgfAAIAAAaIgIAAIAAg5IAIAAIAAAaIAfAAIAAgaIAIAAIAAA5gAGaAdIAAgaIgfAAIAAAaIgIAAIAAg5IAIAAIAAAaIAfAAIAAgaIAIAAIAAA5gAFcAdIAAgnIABgEIAAgEIgBADIgCADIgaAmIgBACIgDABIgGAAIAAg5IAJAAIAAAnIAAAEIgBAEIACgDIABgDIAagmIABgCIADgBIAGAAIAAA5gABgAdIAAgbIAAgCIAAgBIgBABIAAABIgBABIgDADIgDAEIgDAFIgJANIgCABIgCABIgEAAIAAgoIAIAAIAAAaIAAACIAAACIABgDIABgBIACgDIADgEIAEgFIAJgMIABgBIABgBIAFAAIAAAogAgKAdIAAgDIABgCIABgBIARgSIAFgFIACgDIACgEIABgFIgBgEIgCgDIgDgCIgEgBIgDABIgEACIgCACIgBADIgBACIgCABIgEgBIACgHIAEgFIAFgDIAGgBIAHABIAGADQACACABADQACADAAAEIgBAGIgCAFIgEAEIgFAFIgPAPIAEgBIADAAIASAAIACAAIABACIAAAFgAgvAdIAAgbIAAgCIABgBIgBABIAAABIgBABIgDADIgDAEIgDAFIgJANIgCABIgCABIgEAAIAAgoIAIAAIAAAaIAAACIAAACIABgDIAAgBIADgDIADgEIADgFIAKgMIABgBIABgBIAFAAIAAAogAhcAdIAAgbIAAgCIAAgBIgBABIAAABIgBABIgDADIgDAEIgDAFIgJANIgCABIgCABIgEAAIAAgoIAIAAIAAAaIAAACIAAACIABgDIABgBIACgDIADgEIAEgFIAJgMIABgBIABgBIAFAAIAAAogAiDAdIgEgBIgCgCIgHgMIgCgDIgDAAIgFAAIAAASIgIAAIAAgoIAIAAIAAARIAEAAIADgBIACgCIAIgMIABgBIACgBIAHAAIgKAPIgCACIgEABIAEACIACADIALARgAjaAdIAAgTIgTAAIAAATIgIAAIAAgoIAIAAIAAAPIATAAIAAgPIAIAAIAAAogAkHAdIAAgbIAAgCIABgBIgBABIgBABIgBABIgDADIgDAEIgDAFIgJANIgBABIgCABIgEAAIAAgoIAHAAIAAAaIAAACIAAACIACgDIAAgBIACgDIAEgEIADgFIAKgMIAAgBIACgBIAFAAIAAAogAnEAdIAAg5IARAAQAGAAAEACQADABADACQADADABADQACADgBAEQABAEgCAEIgEAEIgHAEQgEACgFAAIgJAAIAAAVgAm8ABIAJAAIAFgBIAFgBIACgEIABgFIgBgFIgCgDIgEgCIgGgBIgJAAgArKAdIAAgyIgcAAIAAAyIgIAAIAAg5IAtAAIAAA5gAAlAIIAAgGIAVAAIAAAGgABRgRIgDgCIgDgDIgBgDIABgCIABgBIAEAAIAAAEIABACIADABIACAAIADAAIABgBIABgCIABgEIAFAAIAAABIABACIgBADIgCADIgEACIgFAAIgFAAgAg9gRIgEgCIgCgDIgBgDIABgCIABgBIAEAAIAAAEIABACIADABIACAAIADAAIABgBIACgCIAAgEIAEAAIABABIABACIgBADIgCADIgEACIgFAAIgFAAgAkgg+IAAgOIguAAIAAAMIAAABIgCABIgFAAIAAgUIAGAAIACgCIADgEIACgGIACgJIABgNIABgRIAiAAIAAAzIAKAAIAAASIgBABIgCABgAk9huIgCANIgEAJIgCAGIAbAAIAAgtIgTAAIAAARgALphDIAAAAIABgBIABgCIABgBIACgCIABgDIgBAAIgCAAIgCgBIgBgCIAAgCQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAQAAAAABAAIADABIABABIABACIAAACIgBAEIgBAEIgCAEIgEADgAFjhDIAAAAIABgBIABgCIABgBIABgCIABgDIgBAAIgCAAIgBgBIgBgCIAAgCQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAIADABIACABIABACIAAACIgBAEIgBAEIgDAEIgDADgALGhMIgDgCIgCgDIgCgFIACgFQABgCADgBIAIgDIALgCIAAgDQAAgEgBgDQgCgCgFAAIgDABIgDABIgDACIgCAAIgBAAIgBgBIgBgDQADgDAEgBQADgCAFAAQAEAAACABQADABACACIADAFIABAGIAAAaIgDAAIgCAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBIgBgDIgDACIgDACIgEABIgEABIgFgBgALQhdIgFABIgEADIAAADIAAACIABACIADABIACABIADgBIAEgBIACgBIACgDIAAgIIgIABgAJThNQgCgBgDgDQgDgCgBgEQgBgEgBgFQABgFABgDQABgEADgDIAFgEQAFgCAEAAIAHABIAHAEIgCADIgBABIgBAAIgCAAIgCgCIgCgBIgEAAIgEABIgFADIgCAFIgBAGIABAGQABABAAABQAAAAAAABQAAAAABABQAAAAAAABIAFADIAEABIAFgBIACgBIACgBIACgBIABABIACADIgDACIgEACIgEABIgFABIgHgCgAImhNIgFgEIgFgGQgBgEAAgFQAAgFABgEQACgEADgCQACgDADgCIAJgBIAIABQADACADADQADACABAEIABAJIgBAJIgEAGIgGAEIgIACQgEAAgFgCgAImhrQgDAEAAAHQAAAHADAEQADAEAGAAQAFAAADgEQAEgEAAgHQAAgHgEgEQgDgEgFAAQgGAAgDAEgAGthMIgBgBIgBgBIAAgCIAAgCIABgCIABgBIACgBIACABIACABIABACIABACIgBACIgBABIgCABIgCABIgCgBgAC0hMIgEgBIgEgCIgDgCIACgEIACgBIACABIACABIAEACIAFAAIAEgBIAFgCQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAIABgGIgBgFIgCgDIgEgCIgFgBIgJABIgFgBIAFgbIAbAAIAAADIgBADIgEABIgRAAIgDAOIAIgBQAFAAADACIAGADQACADABADIABAHQABAEgCAEQgBAEgEACQgCADgEABQgDACgFAAIgFgBgAAFhMIgCgBIgBgBIAAgCIAAgCIABgCIACgBIACgBIACABIABABIACACIAAACIAAACIgCABIgBABIgCABIgCgBgAg4hMIgCgBIgBgBIAAgCIAAgCIABgCIACgBIACgBIACABIACABIABACIAAACIAAACIgBABIgCABIgCABIgCgBgAiIhMIgCgBIgBgBIAAgCIAAgCIABgCIACgBIACgBIACABIACABIABACIAAACIAAACIgBABIgCABIgCABIgCgBgAixhNQgFgCgEgEQgDgEgCgGQgCgFAAgGQAAgHACgFQACgGAEgEQADgDAGgDQAFgCAGAAQAGAAAEACQAFACAEAEIgDADIAAABIgCAAIgCAAIgCgCIgEgCIgGgBQgEAAgEACQgEABgDADIgDAHQgCAEAAAGQAAAFACAEQABAEACADQADADAEABQADACAFAAIAEgBIAEAAIADgCIADgCIAAgBIACAAIABABIADADQgEAEgFADQgFACgHAAQgGAAgFgCgAphhNQgFgCgEgEQgDgEgDgGQgCgFAAgGQAAgHACgFQADgGADgEIAJgGQAFgCAHAAQAGAAAFACQAFADAEADQAEAEACAGQACAFAAAHQAAAGgCAFQgCAGgEAEQgEAEgFACQgFACgGAAQgHAAgFgCgApdh9QgEABgDADIgEAHQgBAEAAAGQAAAFABAEIAEAHQADADAEABQADACAFAAQAEAAAEgCQADgBADgDQADgDABgEQABgEAAgFQAAgGgBgEQgBgEgDgDQgDgDgDgBQgEgCgEAAQgFAAgDACgAqhhNQgFgCgEgEQgDgEgDgGQgCgFAAgGQAAgHACgFQADgGADgEIAJgGQAFgCAHAAQAGAAAFACQAGADADADQAEAEACAGQACAFAAAHQAAAGgCAFQgCAGgEAEQgDAEgGACQgFACgGAAQgHAAgFgCgAqdh9QgFABgCADIgEAHQgCAEAAAGQAAAFACAEIAEAHQACADAFABQADACAFAAQAEAAAEgCQADgBADgDQADgDABgEQABgEABgFQgBgGgBgEQgBgEgDgDQgDgDgDgBQgEgCgEAAQgFAAgDACgArhhNQgFgCgEgEQgDgEgDgGQgCgFAAgGQAAgHACgFQADgGADgEIAJgGQAFgCAHAAQAGAAAFACQAGADADADQAEAEACAGQACAFAAAHQAAAGgCAFQgCAGgEAEQgDAEgGACQgFACgGAAQgHAAgFgCgArdh9QgEABgDADIgEAHQgCAEAAAGQAAAFACAEIAEAHQADADAEABQADACAFAAQAEAAAEgCQADgBADgDQADgDABgEQABgEABgFQgBgGgBgEQgBgEgDgDQgDgDgDgBQgEgCgEAAQgFAAgDACgAKahMIAAgoIAQAAIAGAAIAEACIADAEIABADIAAADIgCADIgCACIgEACQAFABACACQACADABADIgBAGIgEADIgEADIgHAAgAKihRIAIAAQAEAAADgCQABgCAAgDIAAgCIgBgCIgDgCIgEAAIgIAAgAKihjIAIAAIACAAIADgCIACgCIAAgDIAAgCIgBgBIgDgCIgDAAIgIAAgAKPhMIgDAAIgCgCIgHgNIgDgCIgDgBIgEAAIAAASIgIAAIAAgoIAIAAIAAARIAEAAIACgBIADgCIAHgMIACgCIACAAIAGAAIgKAPIgCADIgDABIADACIADACIALARgAIJhMIAAgpIAAgCIAAgCIgTAjIgBACIgBAAIgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBIgUgjIABACIAAACIAAApIgIAAIAAg5IAHAAIABAAIABABIAUAjIACAEIABgCIABgCIATgjIABgBIABAAIAHAAIAAA5gAGKhMIAAgoIAbAAIAAAFIgTAAIAAAjgAE6hMIARgXIACgCIABgCQgBACgDABIgGABIgGgBIgFgDQgDgDAAgDQgCgDAAgEIACgHIADgGIAHgDQADgCAEAAQAEAAADACQAEABACACQADADABADQACAEAAAEIgBAFIgBAEIgDAEIgCAFIgOATIgCACIgCAAgAFCh/IgDADIgDADIgBAFQAAAFAEADQACADAGAAIAEgBIAFgCIACgEIABgEIgBgFIgDgDIgEgDIgEAAIgFAAgAELhMIAAgGIAMAAIAAgmIAAgDIgJAIIgCABIgBAAIAAgBIgBAAIgCgDIARgPIAGAAIAAAzIALAAIAAAGgADwhMIAAgPIgZAAIgCAAIAAgBIgBgEIAcglIAHAAIAAAkIAIAAIAAAFIAAABIgCAAIgGAAIAAAPgADchhIAUAAIAAgWIAAgDIABgCgACAhMIAAgGIAMAAIAAgmIAAgDIgJAIIgCABIgBAAIgBgBIgBAAIgCgDIASgPIAGAAIAAAzIALAAIAAAGgABRhMIAAgGIANAAIAAgmIAAgDIgKAIIgCABIgBAAIAAgBIgBAAIgCgDIARgPIAGAAIAAAzIAMAAIAAAGgAglhMIAAg5IAjAAIAAAGIgbAAIAAAzgAhPhMIAAgaIgeAAIAAAaIgJAAIAAg5IAJAAIAAAZIAeAAIAAgZIAIAAIAAA5gAjphMIAAgoIAAgDIAAgFIgBAEIgBADIgbAnIgBABIgCABIgHAAIAAg5IAJAAIAAAoIAAADIAAAEIABgDIABgDIAagnIACgBIADgBIAFAAIAAA5gAllhMIAAgaIgeAAIAAAaIgJAAIAAg5IAJAAIAAAZIAeAAIAAgZIAIAAIAAA5gAmYhMIgCAAIgCgCIgEgNIgaAAIgGANIgBACIgBAAIgHAAIAXg5IAJAAIAWA5gAmvh6IAAACIgJAXIAVAAIgIgXIgBgCIgCgDIgBADgAnQhMIgDAAIgBgCIgPgVIgCgCIgDgBIgHAAIAAAaIgJAAIAAg5IAJAAIAAAZIAGAAIACAAIABgBIABgBIABgBIAPgUIABgCIACAAIAHAAIgRAXQgCADgCABIADACIADAEIARAYgAAjhSIgCgBIABgCIAGgLIABAAIABgBIgBgBIgBAAIgGgLIgBgCIACgBIACgBIAKAPIAAACIgKAPgAAXhSIgBgBIAAgCIAGgLIAAAAIACgBIgCgBIAAAAIgGgLIAAgCIABgBIACgBIAKAPIAAACIgKAPgAoRhgIAAgCIAKgPIADABIABABIAAACIgHALIgBABIABABIAHALIAAACIgBABIgDABgAodhgIAAgCIAKgPIACABIACABIgBACIgGALIgBABIABABIAGALIABACIgCABIgCABg");
	this.shape_2.setTransform(75.9,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal, new cjs.Rectangle(-2,0,167.5,34.7), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bfQMAAAg+fMAu3AAAMAAAA+fg");
	this.shape.setTransform(200,125,1.333,0.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,400,250), null);


(lib.pics = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// p5
	this.instance = new lib.p5();
	this.instance.parent = this;
	this.instance.setTransform(10,0.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(300).to({_off:false},0).to({x:0,y:0},6,cjs.Ease.get(1)).wait(67).to({x:-10},6,cjs.Ease.get(1)).wait(1));

	// p4
	this.instance_1 = new lib.p4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(10,0.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(225).to({_off:false},0).to({x:0,y:0},6,cjs.Ease.get(1)).to({_off:true},74).wait(75));

	// p3
	this.instance_2 = new lib.p3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(10,0.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(150).to({_off:false},0).to({x:0,y:0},6,cjs.Ease.get(1)).to({_off:true},74).wait(150));

	// p2
	this.instance_3 = new lib.p2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(10,0.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(75).to({_off:false},0).to({x:0,y:0},6,cjs.Ease.get(1)).to({_off:true},74).wait(225));

	// p1
	this.instance_4 = new lib.p1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(10,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:0,y:0},6,cjs.Ease.get(1)).to({_off:true},74).wait(300));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bWqMAAAgtTMAu3AAAMAAAAtTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(380));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-145,309,290);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t5
	this.instance = new lib.t5();
	this.instance.parent = this;
	this.instance.setTransform(-119.6,-25.4,0.99,0.99);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(302).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,x:-133,y:-28.3},5,cjs.Ease.get(1)).wait(73));

	// t4
	this.instance_1 = new lib.t4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-120.6,-25.4,0.99,0.99);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(227).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,x:-134.1,y:-28.3},5,cjs.Ease.get(1)).wait(64).to({scaleX:0.99,scaleY:0.99,x:-120.6,y:-25.4},5,cjs.Ease.get(1)).to({_off:true},1).wait(78));

	// t3
	this.instance_2 = new lib.t3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-97.1,-39.4,0.99,0.99);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(152).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,x:-107.9,y:-43.8},5,cjs.Ease.get(1)).wait(64).to({scaleX:0.99,scaleY:0.99,x:-97.1,y:-39.4},5,cjs.Ease.get(1)).to({_off:true},1).wait(153));

	// t2
	this.instance_3 = new lib.t2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-108.4,-25.7,0.99,0.99);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(78).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,x:-120.5,y:-28.6},5,cjs.Ease.get(1)).wait(63).to({scaleX:0.99,scaleY:0.99,x:-108.4,y:-25.7},5,cjs.Ease.get(1)).to({_off:true},1).wait(228));

	// t1
	this.instance_4 = new lib.t1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-119.9,-23.9,0.99,0.99);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1.1,scaleY:1.1,x:-133.3,y:-26.6},4,cjs.Ease.get(1)).wait(68).to({scaleX:0.99,scaleY:0.99,x:-119.9,y:-23.9},5,cjs.Ease.get(1)).to({_off:true},1).wait(302));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.9,-23.9,240,48);


(lib.pics2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3bK8IAA13MAu2AAAIAAV3g");
	mask.setTransform(0.1,0);

	// Слой 1
	this.pics = new lib.pics();
	this.pics.parent = this;
	this.pics.setTransform(0,45);

	var maskedShapeInstanceList = [this.pics];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.pics).wait(1));

}).prototype = getMCSymbolPrototype(lib.pics2, new cjs.Rectangle(-149.8,-70,299.9,140), null);


// stage content:
(lib._100pcx250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		 
		stage.addEventListener("resize", res);
		
		var bg = this.bg;
		var legal = this.legal;
		var legal2 = this.legal2;
		var text = this.text;
		var logo = this.logo;
		var pics = this.pics;
		var pics2 = this.pics2;
		
		var uznat = this.uznat;
		
		function res() {
			
			var wdt = stage.canvas.width;
			var hgt = stage.canvas.height;
			
			var sc = wdt/298;
			
			
			bg.x = 0;
			bg.scaleX = wdt/400;
			bg.y = 125;
		
			
			text.y = 125;
			pics.scaleX = 1;		
			pics.scaleY = 1;	
		
			if (wdt<400){
				text.scaleX = 0.1 + 0.4*sc;
				text.scaleY = 0.1 + 0.4*sc;
				text.x = wdt/2+70;
				text.y = 110+80*sc;
				
				logo.scaleX = 0.6;		
				logo.scaleY = 0.6;
				logo.x = 50;
				logo.y = 110+80*sc;
				
				pics2.x = wdt/2;
				pics2.y = 70*sc;
				
				pics2.scaleX = sc;
				pics2.scaleY = sc;
				
				pics.y = 500;
				
				legal.x = -1000;
				legal2.x = 5;
				
				uznat.x = - 500;
				
			} else if (wdt<600){
				text.scaleX = 0.6;
				text.scaleY = 0.6;
				text.x = (wdt - 260)/2;
				text.y = 110;
				
				logo.scaleX = 0.7;		
				logo.scaleY = 0.7;
				logo.x = (wdt - 260)/2;
				logo.y = 40;
				
				uznat.scaleX = 0.5;		
				uznat.scaleY = 0.5;
				uznat.x = (wdt - 260)/2;
				uznat.y = 170;
				
				pics.x = wdt-100;
				pics.y = 145;
		
				pics2.y = 500;
		
				
				legal2.x = - 1000;
				legal.x = 5;
				
			} else if (wdt<900){
				text.scaleX = 0.9;
				text.scaleY = 0.9;
				text.x = (wdt - 300)/2;
				text.y = 115;
				
				uznat.scaleX = 0.6;		
				uznat.scaleY = 0.6;
				uznat.x = (wdt - 300)/2;
				uznat.y = 180;
				
				logo.scaleX = 1;		
				logo.scaleY = 1;
				logo.x = (wdt - 300)/2;
				logo.y = 40;
				
				pics.x = wdt-149;
				pics.y = 145;
				
				pics2.y = 500;
				
				legal2.x = - 1000;
				legal.x = 5;
				
			} else if (wdt<1000){
				text.scaleX = 1;
				text.scaleY = 1;
				text.x = 0.84*wdt;
				text.y = 100;
				
				uznat.scaleX = 0.8;		
				uznat.scaleY = 0.8;
				uznat.x = 0.84*wdt;
				uznat.y = 200;
				
				logo.scaleX = 1.2;		
				logo.scaleY = 1.2;
				logo.x = 0.2*wdt;
				logo.y = 125;
				
				pics.x = 0.52*wdt;
				pics.y = 145;
				
				pics2.y = 500;
				
				legal2.x = - 1000;
				legal.x = 5;
			} else {
				text.scaleX = 1.1;
				text.scaleY = 1.1;
				text.x = 0.82*wdt;
				text.y = 100;
				
				uznat.scaleX = 0.8;		
				uznat.scaleY = 0.8;
				uznat.x = 0.82*wdt;
				uznat.y = 200;
				
				logo.scaleX = 1.4;		
				logo.scaleY = 1.4;
				logo.x = 0.18*wdt;
				logo.y = 125;
				
				pics.x = 0.5*wdt;
				pics.y = 145;
				
				pics2.y = 500;
				
				legal2.x = - 1000;
				legal.x = 5;
			} 
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// uznat
	this.uznat = new lib.uznat();
	this.uznat.parent = this;
	this.uznat.setTransform(341.6,632.8);

	this.timeline.addTween(cjs.Tween.get(this.uznat).wait(1));

	// legal2
	this.legal2 = new lib.legal333();
	this.legal2.parent = this;
	this.legal2.setTransform(4.8,262.9,1,1,0,0,0,0.3,17.7);

	this.timeline.addTween(cjs.Tween.get(this.legal2).wait(1));

	// legal
	this.legal = new lib.legal();
	this.legal.parent = this;
	this.legal.setTransform(-0.6,226.3,1.21,1.21,0,0,0,0.4,17.6);

	this.timeline.addTween(cjs.Tween.get(this.legal).wait(1));

	// logo
	this.logo = new lib.logo();
	this.logo.parent = this;
	this.logo.setTransform(200.5,-25.9);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// pics2
	this.pics2 = new lib.pics2();
	this.pics2.parent = this;
	this.pics2.setTransform(442,417);

	this.timeline.addTween(cjs.Tween.get(this.pics2).wait(1));

	// pics
	this.pics = new lib.pics();
	this.pics.parent = this;
	this.pics.setTransform(13.6,462.5);

	this.timeline.addTween(cjs.Tween.get(this.pics).wait(1));

	// text
	this.text = new lib.main();
	this.text.parent = this;
	this.text.setTransform(-59.7,-90.9);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// bg
	this.bg = new lib.bg();
	this.bg.parent = this;
	this.bg.setTransform(0,125,1,1,0,0,0,0,125);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(20.3,10.1,780.7,772.9);
// library properties:
lib.properties = {
	width: 400,
	height: 250,
	fps: 22,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/100pcx250_atlas_.jpg", id:"100pcx250_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;