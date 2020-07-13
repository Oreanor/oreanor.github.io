(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x600_atlas_", frames: [[302,276,300,274],[0,276,300,274],[604,0,300,274],[302,0,300,274],[0,0,300,274]]}
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
	this.spriteSheet = ss["300x600_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["300x600_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["300x600_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["300x600_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
	this.spriteSheet = ss["300x600_atlas_"];
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
	this.shape.setTransform(144.1,70.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A7E0").s().p("AhCBCQgbgbAAgnQAAglAbgcQAbgbAnAAQAoAAAbAbQAbAcAAAlQAAAngbAbQgbAbgoAAQgmAAgcgbgAgqgqQgSARAAAZQAAAZASASQARARAZAAQAaAAASgSQARgRAAgZQAAgZgSgRQgRgRgaAAQgZAAgRARg");
	this.shape_1.setTransform(123,70.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00A7E0").s().p("Ag3BZIAAixIAxAAQAkAAAQAWQAKAOAAAUQAAAVgMAOQgRATghAAIgRAAIAABDgAgXgJIAUAAQAbAAAAgXQAAgYgbAAIgUAAg");
	this.shape_2.setTransform(106.8,70.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00A7E0").s().p("AAzBZIgSguIhBAAIgSAuIgkAAIBKixIAZAAIBKCxgAgTALIAnAAIgUgzg");
	this.shape_3.setTransform(90.6,70.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00A7E0").s().p("AAgBZIAAiRIg/AAIAACRIghAAIAAixICBAAIAACxg");
	this.shape_4.setTransform(73.5,70.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00A7E0").s().p("AhAA9QgXgbAAgiQAAghAXgbQAbggAqAAQAcAAAWAPQAWAOALAZIgmAAQgRgWgbABQgZgBgSATQgRARAAAYQAAAZASARQARASAZAAQAbABAQgVIAmAAQgLAYgVAOQgWAPgcAAQgqgBgbgfg");
	this.shape_5.setTransform(50.5,70.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00A7E0").s().p("AAbBZIAAhFIgBAAIguBFIgnAAIAxhCQgVgCgNgOQgNgOAAgXQAAgVALgOQAQgXAmAAIA0AAIAACxgAgZgdQAAAaAgAAIAUAAIAAg1IgUAAQggAAAAAbg");
	this.shape_6.setTransform(190.2,40.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00A7E0").s().p("AAoBZIAAh8IhPB8IghAAIAAixIAhAAIAAB8IBPh8IAgAAIAACxg");
	this.shape_7.setTransform(174.6,40.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00A7E0").s().p("AAhBZIAAhKIhAAAIAABKIghAAIAAixIAhAAIAABIIBAAAIAAhIIAgAAIAACxg");
	this.shape_8.setTransform(157.5,40.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00A7E0").s().p("AgvBZIAAixIBfAAIAAAgIg+AAIAAApIA7AAIAAAfIg7AAIAAApIA+AAIAAAgg");
	this.shape_9.setTransform(143.3,40.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00A7E0").s().p("AAxBZIgxiDIgwCDIgjAAIBGixIAbAAIBHCxg");
	this.shape_10.setTransform(128.2,40.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00A7E0").s().p("Ag5BZIAAixIArAAQAUAAAOAGQAbAMAAAdQAAAYgUAKQAPAFAIAKQAIAMAAAPQAAA2hGAAgAgYA5IAWAAQAbAAAAgWQAAgXgbAAIgWAAgAgYgTIAQAAQAWAAAAgSQAAgTgWAAIgQAAg");
	this.shape_11.setTransform(113,40.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00A7E0").s().p("AhCBBQgbgaAAgnQAAgmAbgaQAbgbAnAAQAnAAAbAbQAbAaAAAmQAAAngbAaQgbAbgnAAQgnAAgbgbgAgqgqQgSARAAAZQAAAZASASQASASAYAAQAagBARgRQASgSAAgZQAAgZgSgRQgRgSgaAAQgZAAgRASg");
	this.shape_12.setTransform(95.6,40.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00A7E0").s().p("AgQBZIAAiRIggAAIAAggIBhAAIAAAgIghAAIAACRg");
	this.shape_13.setTransform(81,40.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00A7E0").s().p("AhCBBQgbgaAAgnQAAgmAbgaQAcgbAmAAQAoAAAbAbQAbAaAAAmQAAAngbAaQgbAbgoAAQgmAAgcgbgAgqgqQgSARAAAZQAAAZASASQARASAZAAQAagBASgRQARgSAAgZQAAgZgSgRQgRgSgaAAQgZAAgRASg");
	this.shape_14.setTransform(66.5,40.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00A7E0").s().p("AgrBZIAAixIBXAAIAAAgIg2AAIAACRg");
	this.shape_15.setTransform(52,40.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00A7E0").s().p("AAnBZIAAh8IhOB8IggAAIAAixIAgAAIAAB8IBOh8IAiAAIAACxg");
	this.shape_16.setTransform(37.1,40.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00A7E0").s().p("Ag4BZIAAixIAyAAQAkAAAQAWQAKAOAAAUQAAAVgMAOQgQATgiAAIgRAAIAABDgAgXgJIAUAAQAbAAAAgXQAAgYgbAAIgUAAg");
	this.shape_17.setTransform(22,40.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00A7E0").s().p("AAhBZIAAiRIhAAAIAACRIghAAIAAixICBAAIAACxg");
	this.shape_18.setTransform(6.5,40.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00A7E0").s().p("AAbBZIAAhFIgBAAIguBFIgnAAIAxhCQgVgCgNgOQgOgOAAgXQAAgVALgOQARgXAmAAIA0AAIAACxgAgZgdQAAAaAgAAIAUAAIAAg1IgUAAQggAAAAAbg");
	this.shape_19.setTransform(148.7,10.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00A7E0").s().p("AAnBZIAAh8IhOB8IggAAIAAixIAgAAIAAB8IBOh8IAiAAIAACxg");
	this.shape_20.setTransform(133,10.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00A7E0").s().p("AAqBqIAAgiIh0AAIAAixIAgAAIAACRIBAAAIAAiRIAhAAIAACRIAUAAIAABCg");
	this.shape_21.setTransform(116.5,12);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00A7E0").s().p("AAYBZIg2hOIAABOIghAAIAAixIAhAAIAABNIA2hNIAoAAIhCBYIBCBZg");
	this.shape_22.setTransform(100.4,10.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00A7E0").s().p("AAhBZIAAhKIhBAAIAABKIggAAIAAixIAgAAIAABIIBBAAIAAhIIAgAAIAACxg");
	this.shape_23.setTransform(84.3,10.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00A7E0").s().p("AghBZIAUgtIhEiEIAoAAIAuBeIApheIAkAAIhQCxg");
	this.shape_24.setTransform(67.7,10.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00A7E0").s().p("AgQBkIAAgZQgiAAgXgVQgWgWAAggQAAghAWgWQAXgWAiAAIAAgWIAgAAIAAAWQAjAAAXAWQAWAWAAAhQAAAggWAWQgXAVgjAAIAAAZgAAQgtIAABZQAVAAAOgOQAMgMAAgSQAAgTgMgNQgNgNgUAAIgCAAgAgyggQgMANAAATQAAASAMAMQANAOAVAAIAAhZIgBAAQgUAAgNANg");
	this.shape_25.setTransform(50.3,10.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(0,0,196.2,79.7), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p5, new cjs.Rectangle(0,0,300,274), null);


(lib.p4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p4, new cjs.Rectangle(0,0,300,274), null);


(lib.p3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p3, new cjs.Rectangle(0,0,300,274), null);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2, new cjs.Rectangle(0,0,300,274), null);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1, new cjs.Rectangle(0,0,300,274), null);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgZKgo8MAyUAAAMAAABR5MgyUAAAg");
	this.shape.setTransform(150,300,0.928,1.143);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(306));

	// 5.jpg
	this.instance = new lib.p5();
	this.instance.parent = this;
	this.instance.setTransform(160,247,1,1,0,0,0,150,137);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(240).to({_off:false},0).to({x:150,alpha:1},7,cjs.Ease.get(1)).wait(51).to({x:140,alpha:0},7,cjs.Ease.get(1)).wait(1));

	// 4.jpg
	this.instance_1 = new lib.p4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(160,247,1,1,0,0,0,150,137);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(180).to({_off:false},0).to({x:150,alpha:1},7,cjs.Ease.get(1)).wait(51).to({x:140,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(60));

	// 3.jpg
	this.instance_2 = new lib.p3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(160,247,1,1,0,0,0,150,137);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(120).to({_off:false},0).to({x:150,alpha:1},7,cjs.Ease.get(1)).wait(51).to({x:140,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(120));

	// 2.jpg
	this.instance_3 = new lib.p2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(160,247,1,1,0,0,0,150,137);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60).to({_off:false},0).to({x:150,alpha:1},7,cjs.Ease.get(1)).wait(51).to({x:140,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(180));

	// 1.jpg
	this.instance_4 = new lib.p1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(160,247,1,1,0,0,0,150,137);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:150,alpha:1},7,cjs.Ease.get(1)).wait(51).to({x:140,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(240));

	// t5
	this.instance_5 = new lib.t5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150.1,429,0.9,0.9,0,0,0,121,25.7);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(240).to({_off:false},0).to({regX:120.9,scaleX:1,scaleY:1,x:150,alpha:1},7,cjs.Ease.get(1)).wait(51).to({regX:121,scaleX:0.9,scaleY:0.9,x:150.1,alpha:0},7,cjs.Ease.get(1)).wait(1));

	// t4
	this.instance_6 = new lib.t4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(150.1,429,0.9,0.9,0,0,0,122,25.7);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(180).to({_off:false},0).to({regX:121.9,scaleX:1,scaleY:1,x:150,alpha:1},7,cjs.Ease.get(1)).wait(51).to({regX:122,scaleX:0.9,scaleY:0.9,x:150.1,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(60));

	// t3
	this.instance_7 = new lib.t3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(150,429.1,0.9,0.9,0,0,0,98.1,39.9);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(120).to({_off:false},0).to({regY:39.8,scaleX:1,scaleY:1,y:429,alpha:1},7,cjs.Ease.get(1)).wait(51).to({regY:39.9,scaleX:0.9,scaleY:0.9,y:429.1,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(120));

	// t2
	this.instance_8 = new lib.t2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(150.1,429.1,0.9,0.9,0,0,0,109.6,26.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(60).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},7,cjs.Ease.get(1)).wait(51).to({scaleX:0.9,scaleY:0.9,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(180));

	// t1
	this.instance_9 = new lib.t1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(150,429,0.9,0.9,0,0,0,121.2,24.3);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:1,scaleY:1,y:429.1,alpha:1},7,cjs.Ease.get(1)).wait(51).to({scaleX:0.9,scaleY:0.9,y:429,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(240));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A7E0").s().p("Au+CJQhGhAAphcQAkhUBzgwQB/g1DPAAQAuAAAqAFIA1AIIAWAEIgeA1QhAgSg3AAQhpAAhVAeQh0AqgSBSQgLAxAkAtQAuA4BlgFQAggBA8gVQBKgaArgiIBphbIAGgEQAIgGAHgCQANgHARABIBwAAIAjCaIBHiZIB8AAIBIB2IA1h2IBxAAIhkDYIh0AAIhLh8Ig4B8IhHAAIAAABIiGAAIgFgmIh7AAIgoAkIhQAAQhdAhh4AAQivAAhLhEgAlIBcIBHgBIgGg+gAKDDBIBIhIIhJikIBwAAIAfBYIBbhZIB/AAIjbDaQgLAMgIACQgFACgLABIgKACgAGiCtIi3AAIBkjYIC3AAQBYAAAfAqQAbAhgUArQgSAogvAaQg9AghhAAIgDAAgAF+B3IAhAAQAlAAAdgJQAvgPAJgiQAHgegdgMQgTgJghAAIggAAg");
	this.shape_1.setTransform(156.3,55.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#737373").s().p("AgHAeQgDAAgDgDIgEgFIgDgHIAEgBIACgBIACACIACADIACADIAEADIAEABQAEAAACgCIAEgCIACgDIABgFIgBgEIgCgEQgCgCgDAAIgHgBIAAgFIAGgBQACAAACgCIADgDIABgFIgBgEIgCgEIgEgBIgEgBIgDABIgEABIgCADIgCAEIgBACIgDAAIgEgBIACgHQACgEADgBIAGgEIAGgBIAIABIAGAEIADAEQACADAAAEIgBAFIgCAFIgEACIgEACQAHABACAEQADADAAAGIgCAIIgEAGIgHADQgDACgFAAQgDAAgEgCg");
	this.shape_2.setTransform(239.4,570.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#737373").s().p("AgHAfIgFgCIgHgEIACgEIADgBIACAAIACACIAEACIAFAAIAFgBQACAAACgDIACgEIACgGIgBgFIgDgEIgEgCIgFAAIgKABIgFgBIAFgdIAdAAIAAADIgBADIgEABIgSAAIgDAPIAIgBQAFABADABIAHAEIADAFIACAHQAAAGgCADQgBAEgEAEIgHAEIgIACg");
	this.shape_3.setTransform(234.4,570.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#737373").s().p("AAHAfIAAgQIgaAAIgCgBIgBgBIgBgEIAegnIAHAAIAAAnIAKAAIAAAEIgBABIgBABIgIAAIAAAQgAgOAJIAVAAIAAgbIABgDg");
	this.shape_4.setTransform(229.3,570.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#737373").s().p("AgIAeIgHgGQgDgDgCgHQgCgGAAgIQAAgHACgGQACgHADgDQACgDAFgDQAEgCAEAAQAFAAAEACQAEACADAEQADAEACAGQACAIAAAFQAAAGgCAIQgCAGgDAEQgEAEgDACQgFACgEAAIgIgCgAgFgXQgCABgCADIgDAIIgBALIABAMIADAIQACADACAAIAFACIAFgCQACAAADgDQACgDABgFQABgFAAgHQAAgGgBgFQgBgFgCgDQgDgDgCgBIgFgBIgFABg");
	this.shape_5.setTransform(224.4,570.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#737373").s().p("AgPAfIAZgyIADgEIgfAAIgCAAIAAgBIAAgGIApAAIAAAEIgBAEIgYAyIgCACIgDABg");
	this.shape_6.setTransform(219.4,570.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#737373").s().p("AgIAeQgEgCgDgEQgDgEgCgGQgCgGAAgIQAAgIACgFQACgGADgEQACgEAFgCQAEgCAEAAQAFAAAEACQAFACACAEQADADACAHQACAGAAAHQAAAIgCAGQgCAHgDADQgDAEgEACQgFACgEAAQgDAAgFgCgAgEgXQgDABgCADIgDAIQgBAFAAAGQAAAHABAFIADAIQACADADAAQACACACAAQADAAACgCQADAAACgDQACgDABgFIABgMIgBgLQgBgFgCgDQgCgDgDgBQgCgBgDAAQgCAAgCABg");
	this.shape_7.setTransform(214.3,570.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#737373").s().p("AgIAeQgFgCgBgCQgDgEgCgEIgBgIIABgJIAGgJIAPgUIACgCIACAAIAHAAIgSAYIgBADIAEgDIAFgBIAGABIAGAEIAFAFIABAIQAAAFgBADQgCAEgDADIgHADQgDADgFAAQgEAAgEgCgAgFAAIgEACIgDAFIgBAEIABAGIADAEIAEADIAFABIAFgBIAEgDIADgEIABgGIgBgFIgDgEIgEgCIgFgBg");
	this.shape_8.setTransform(209.3,570.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#737373").s().p("AgMAgIAUgeIgEAEIgGAAIgHgBIgFgEIgEgEIgCgHIACgIIAFgHQADgDADgBQAEgCADAAQAFAAADACIAHAEIAEAHQABADAAAFIAAAFIgCAFIgCADIgRAaIgBACIgDABgAgDgXIgFADIgCAEIgBAFQAAAFADAEQADACAFAAIAFAAIAEgDIADgEIAAgEIAAgGIgDgDIgEgDIgFgBg");
	this.shape_9.setTransform(204.2,570.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#737373").s().p("AgPAfIAZgyIADgEIgfAAIgCAAIAAgBIAAgGIApAAIAAAEIgBAEIgYAyIgCACIgDABg");
	this.shape_10.setTransform(199.2,570.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#737373").s().p("AgPAfIAZgyIADgEIgfAAIgCAAIAAgBIAAgGIApAAIAAAEIgBAEIgYAyIgCACIgDABg");
	this.shape_11.setTransform(194.2,570.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#737373").s().p("AAHAfIAAgQIgaAAIgCgBIgCgFIAdgnIAIAAIAAAnIAKAAIAAAEIgBABIgBABIgIAAIAAAQgAgOAJIAVAAIAAgYIABgDIAAgDg");
	this.shape_12.setTransform(189,570.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#737373").s().p("AgIAeQgEgCgDgEQgEgEgBgGQgCgGAAgIQAAgHACgGQABgGAEgEQACgEAFgCQAEgCAEAAQAFAAAEACQAFADACADQACADADAHQABAGAAAHQAAAIgBAGQgDAHgCADIgHAGIgJACQgDAAgFgCgAgFgXQgCABgCADIgDAIIgBALIABAMIADAIQADADABAAIAFACQADAAACgCQACAAADgDIADgIIABgMIgBgLIgDgIQgDgDgCgBQgCgBgDAAIgFABg");
	this.shape_13.setTransform(184.1,570.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#737373").s().p("AgOAfIAAgGIAOAAIAAgsIgLAJIgCABIgBgBIgBAAIgDgEIASgQIAHAAIAAA3IAMAAIAAAGg");
	this.shape_14.setTransform(179,570.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#737373").s().p("AAQAfIAAgcIgfAAIAAAcIgKAAIAAg9IAKAAIAAAbIAfAAIAAgbIAJAAIAAA9g");
	this.shape_15.setTransform(171,570.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#737373").s().p("AgUAfIAAg9IATAAIAJABIAHAEIAFAGIABAIQAAAFgBADQgCADgDADQgCACgFABQgFACgEAAIgKAAIAAAXgAgLABIAKAAIAFgBQACAAACgCIADgDIABgGIgBgFIgCgEIgFgDIgPAAg");
	this.shape_16.setTransform(165.3,570.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#737373").s().p("AgSAfIAAg9IAlAAIAAAHIgcAAIAAA2g");
	this.shape_17.setTransform(160.4,570.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#737373").s().p("AgMAeQgFgCgEgFQgEgEgDgGQgCgFAAgIQAAgGACgGQACgGAFgEQADgEAGgDQAHgCAFAAQAGAAAHACQAGADADAEQAFAEACAGQACAGAAAGQAAAIgCAFQgDAGgEAEQgEAFgFACQgHACgGAAQgFAAgHgCgAgIgWQgEACgDAEQgDADgBAEQgCAFAAAEQAAAFACAFQABAEADAEQAEADADABQAEACAEAAQAFAAAEgCQADgBAEgDQADgEABgEQACgFAAgFQAAgEgCgFQgBgEgDgDQgDgEgEgCQgEgBgFAAQgEAAgEABg");
	this.shape_18.setTransform(154.2,570.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#737373").s().p("AgHAfIgFgCIgHgEIACgEIADgBIACAAIACACIAEACIAFAAIAFgBIAEgDIADgEIABgGIgBgFIgDgEIgEgCIgFAAIgKABIgFgBIAFgdIAdAAIAAADIgBADIgEABIgSAAIgDAPIAIgBQAFABAEABIAGAEIAEAFIABAHQAAAEgCAFQgBAEgDAEIgIAEQgDACgFAAg");
	this.shape_19.setTransform(146,570.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#737373").s().p("AgOAfIAAgGIANAAIAAgsIgKAJIgBAAIgCABIgBgBIAAAAIgDgEIASgQIAHAAIAAA3IAMAAIAAAGg");
	this.shape_20.setTransform(141,570.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#737373").s().p("AgIAeQgDgCgEgEQgDgEgCgGQgCgIAAgGQAAgFACgIQACgGADgEQADgEAEgCQAEgCAEAAQAFAAAEACQAFADACADQADADACAHQACAGAAAHQAAAIgCAGQgCAHgDADIgHAGIgJACQgDAAgFgCgAgEgXQgCABgDADIgDAIIgBALIABAMIADAIQADADACAAQACACACAAQADAAACgCQADAAACgDQACgDABgFIABgMIgBgLQgBgFgCgDQgCgDgDgBQgCgBgDAAQgCAAgCABg");
	this.shape_21.setTransform(135.9,570.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#737373").s().p("AgUAgIAAgFIAcgeIACgFIABgEIgBgFIgCgDQAAgBgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAIgFgBIgDABIgDACIgDADIgBADIgCADIgCAAIgFgBIADgHQABgEADgCIAGgDIAHgCIAHACQAEABACACIAEAGIACAHIgBAGIgDAGIgEAEIgUAWIADgBIAXAAIACABIABACIAAAFg");
	this.shape_22.setTransform(130.9,570.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#737373").s().p("AgOAfIAAgGIANAAIAAgsIgKAJIgCAAIgBABIgBgBIAAAAIgDgEIASgQIAGAAIAAA3IANAAIAAAGg");
	this.shape_23.setTransform(125.9,570.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#737373").s().p("AgHAfIgFgCIgHgEIACgEIADgBIACAAIACACIAEACIAFAAIAFgBIAEgDIADgEIABgGIgBgFIgDgEIgEgCIgFAAIgKABIgFgBIAFgdIAdAAIAAADIgBADIgEABIgSAAIgDAPIAIgBQAFABAEABIAGAEIAEAFIABAHQAAAEgCAFQgBAEgDAEIgIAEQgDACgFAAg");
	this.shape_24.setTransform(120.8,570.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#737373").s().p("AAHAfIAAgQIgbAAIgBgBIgBgFIAcgnIAIAAIAAAnIAJAAIAAAEIAAABIgBABIgIAAIAAAQgAgNAJIAUAAIAAgYIAAgDIAAgDg");
	this.shape_25.setTransform(115.7,570.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#737373").s().p("AgIAeQgDgCgEgEQgDgEgCgGQgCgIAAgGQAAgFACgIQACgGADgEQADgEAEgCQAEgCAEAAQAFAAAEACQAFADACADQADADACAHQACAGAAAHQAAAIgCAGQgCAHgDADIgHAGIgJACQgDAAgFgCgAgEgXQgCABgDADIgDAIQgBAFAAAGQAAAHABAFIADAIQADADACAAQACACACAAQADAAACgCQADAAACgDQACgDABgFIABgMIgBgLQgBgFgCgDQgCgDgDgBQgCgBgDAAQgCAAgCABg");
	this.shape_26.setTransform(110.7,570.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#737373").s().p("AgPAfIAZgyIADgEIgfAAIgCAAIAAgBIAAgGIApAAIAAAEIgBAEIgYAyIgCACIgDABg");
	this.shape_27.setTransform(105.8,570.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#737373").s().p("AgPAfIAZgyIADgEIgfAAIgCAAIAAgBIAAgGIApAAIAAAEIgBAEIgYAyIgCACIgDABg");
	this.shape_28.setTransform(100.7,570.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#737373").s().p("AARAfIAAgcIghAAIAAAcIgIAAIAAg9IAIAAIAAAbIAhAAIAAgbIAIAAIAAA9g");
	this.shape_29.setTransform(92.6,570.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#737373").s().p("AARAfIAAgcIghAAIAAAcIgJAAIAAg9IAJAAIAAAbIAhAAIAAgbIAJAAIAAA9g");
	this.shape_30.setTransform(86,570.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#737373").s().p("AAQAfIAAguIABgFIgDAHIgcAqIgBABIgDABIgHAAIAAg9IAJAAIAAAzIADgIIAdgrIADAAIAHAAIAAA9g");
	this.shape_31.setTransform(79.3,570.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#737373").s().p("AgIAeIgGgDQgDgCgCgEIgBgHQAAgGADgEQACgDAHgCQgEgBgEgEQgCgEAAgEQAAgEABgDIAEgFQADgDADgBIAHgBQAEAAAEABQADABADADIAEAFIABAHQAAAFgDADQgCAEgFABQAGACADADQADAEAAAGIgBAHQgCAEgDACIgGADIgJACQgEAAgEgCgAgEADIgEACIgDAEIgBAFIABAFIADADIAEACIAEABIAFgBIAEgCIADgDIABgFIgBgFIgDgEIgEgCIgFgBgAgEgYIgDACIgCADIgBAFIABADIACAEIADADIAEAAIAFAAIADgDIACgEIABgDIgBgFIgCgDIgDgCIgFAAg");
	this.shape_32.setTransform(71.3,570.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#737373").s().p("AgBAFIgCgBIgBgCIgBgCIABgBIABgCIACgBIABgBIACABIACABIABACIABABIgBACIgDADIgCABg");
	this.shape_33.setTransform(65.5,573.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#737373").s().p("AASAdIAAgOIgjAAIAAAMIgBACIgCAAIgFAAIAAgUIACAAIADgBIADgCIACgEIAEgRIABgNIAcAAIAAAlIAIAAIAAASIgBACIgCAAgAgGgBIgCAFQgBADgCACIAVAAIAAgfIgNAAg");
	this.shape_34.setTransform(61.8,572.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#737373").s().p("AgEAKIAAgBIABgBIACgEIABgEIAAAAIgBAAIgCgBIgBgCIAAgCIABgEQAAAAABAAQAAgBAAAAQABAAABAAQAAAAAAAAIACAAIACACIABACIAAACIAAAEIgCAEIgCAEIgDADg");
	this.shape_35.setTransform(280.3,564);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#737373").s().p("AALAfIAAgfIAAgBIgBABIgBABIgDAFIgQAXIgBABIgCABIgFAAIAAgrIAIAAIAAAeIAAACIABgDIABgBIADgDIAGgKIAKgNIABgBIACgBIAFAAIAAArgAgEgTIgEgCIgDgDIAAgEIAAgBIABgBIAFAAIAAADIACADIABABIACAAIADAAIACgBIABgDIABgDIAFAAIABABIAAABIgBAEIgCADIgEACIgGABg");
	this.shape_36.setTransform(276.8,560.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#737373").s().p("AgKADIAAgFIAVAAIAAAFg");
	this.shape_37.setTransform(272.7,561.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#737373").s().p("AgUAfIAAgEIAZgbIADgDIACgFIABgFIgBgEIgCgEIgDgCIgFgBIgDABIgDACIgDADIgBADIgCACQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAAAgBIgFAAIADgHQABgEADgCQADgDADAAIAHgCIAHACIAGADIAEAGQACADAAADIgBAHIgDAGIgYAaIAHgBIATAAIACABIABACIAAAEg");
	this.shape_38.setTransform(268.5,560.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#737373").s().p("AALAfIAAgfIAAgBIgBACIgUAcIgBABIgCABIgFAAIAAgrIAIAAIAAAeIAAACIALgRIAKgNIABgBIACgBIAFAAIAAArgAgEgTIgEgCIgCgDIgBgEIAAgBIABgBIAFAAIABADIABADIACABIACAAIADAAIABgBIACgDIAAgDIAFAAIABABIAAABIAAAEIgDADIgEACIgFABg");
	this.shape_39.setTransform(261.3,560.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#737373").s().p("AALAWIAAgeIAAgCIgBACIgBABIgCAFIgRAWIgBABIgCABIgFAAIAAgrIAIAAIAAAeIAAACIABgDIABgBIAGgHIADgFIAKgOIABgBIACgBIAFAAIAAArg");
	this.shape_40.setTransform(256.3,561.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#737373").s().p("AAOAWIgEgBIgCgCIgIgNIgCgDIgEgBIgEAAIAAAUIgIAAIAAgrIAIAAIAAATIAEAAIADgBIACgCIAJgOIABgBIACgBIAHAAIgLARIgCACIgEACIAEABIADADIALASg");
	this.shape_41.setTransform(251.8,561.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#737373").s().p("AgGAVQgDgBgCgDIgFgHQgBgFAAgFIABgIIAEgHQADgDADgCQAFgCADAAQAGAAADACQAEABACADIgCADIAAABIgBAAIgCAAIgCgCIgDgBIgEAAIgFABIgEADIgCAFIgBAGIABAHIACAFIAEADIAFABIAFAAIACgCIACgBIACgBIACABIACADIgDADIgFACIgJACIgHgCg");
	this.shape_42.setTransform(247.3,561.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#737373").s().p("AAKAWIAAgUIgTAAIAAAUIgJAAIAAgrIAJAAIAAARIATAAIAAgRIAJAAIAAArg");
	this.shape_43.setTransform(242.6,561.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#737373").s().p("AALAWIAAgeIABgCIgBACIgBABIgEAFIgQAWIgBABIgCABIgFAAIAAgrIAIAAIAAAeIAAACIABgDIACgBIAFgHIADgFIALgOIABgBIABgBIAFAAIAAArg");
	this.shape_44.setTransform(237.7,561.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#737373").s().p("AAaAeIAAgPIg7AAIAAgsIAIAAIAAAlIASAAIAAglIAHAAIAAAlIARAAIAAglIAJAAIAAAlIAIAAIAAATIgBACIgCABg");
	this.shape_45.setTransform(231.6,562.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#737373").s().p("AgIAVQgDgBgEgDIgEgIQgBgDAAgGQAAgEABgEIAEgIIAHgEQAEgCAEAAQAFAAAEACQADABADADQADADACAFQABAEAAAEQAAAGgBADQgCAFgDADQgDADgDABQgEACgFAAQgEAAgEgCgAgJgLQgDAEAAAHQAAAIADAEQADAEAGAAQAGAAADgEQADgEAAgIQAAgHgDgEQgDgEgGAAQgGAAgDAEg");
	this.shape_46.setTransform(225.2,561.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#737373").s().p("AgUAfIAAg9IATAAQAFAAAEABQAFACACACQADADACADIABAIQAAAFgBADQgCADgDACQgDAEgEABQgEABgFAAIgKAAIAAAXgAgLABIAKAAIAFgBQADAAABgCIAEgEIABgFIgBgFQgBgBAAAAQAAgBAAAAQgBgBAAAAQgBAAgBgBQgBgCgDAAIgFgBIgKAAg");
	this.shape_47.setTransform(220.6,560.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#737373").s().p("AASAeIAAgPIgjAAIAAAMIgBACQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAIgFAAIAAgVIACAAIADgBIADgCIACgEIACgGIAEgZIAbAAIAAAlIAIAAIAAATIgBACIgCABgAgEgKIgEAOIgCAFIATAAIAAgfIgMAAg");
	this.shape_48.setTransform(212.8,562.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#737373").s().p("AgEAWIgEgBIgEgCQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAgBAAAAIACgDIABgBIACABIAFADIAFAAIADAAIADgCIACgCIABgDQAAgEgDgBQgCgCgFAAIgFAAIAAgFIAFAAQAEAAACgBQADgCAAgDIgBgCIgBgCIgDgCIgDAAIgFAAIgCABIgEACIgBAAIgBgBIgCgDQACgDAFgBQADgCAFAAIAGABIAFADIADAEIABAEIAAADIgBACIgDADIgDACQADAAADADQACACAAAEIgBAGQgBADgDABIgFADIgGABg");
	this.shape_49.setTransform(208.1,561.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#737373").s().p("AgGAVQgEgCgCgCQgDgDgCgFQgCgEAAgFQAAgEACgEQAAgEAEgDQACgDAEgCQAEgCAEAAIAHACIAGADIAEAHQACAEAAAEIgBACIgCAAIgcAAIABAHIADAFIAEADIAFABIAFAAIAEgCIACgBIACgBIABABIADADIgEADIgEACIgFABIgEABQgEAAgEgCgAgHgNQgDAEAAAFIAWAAIAAgFIgCgDIgEgDIgFgBQgEAAgEADg");
	this.shape_50.setTransform(203.9,561.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#737373").s().p("AgIAVQgEgBgDgDIgEgIQgBgDAAgGQAAgEABgEIAEgIQADgDAEgBQAEgCAEAAQAFAAAEACQAEACACACQADADACAFQABAEAAAEQAAAGgBADQgCAFgDADQgCACgEACQgEACgFAAQgEAAgEgCgAgJgLQgDAEAAAHQAAAIADAEQADAEAGAAQAGAAADgEQAEgEAAgIQAAgHgEgEQgDgEgGAAQgGAAgDAEg");
	this.shape_51.setTransform(199.1,561.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#737373").s().p("AgTAeIAAg6IAFAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAABABIAAAFIAHgGQADgCAEAAQAEAAADACIAFAEQADADAAAEQACAEAAAGQAAAFgCADQgBAFgCACIgGAFQgEACgEAAQgDAAgDgCIgFgDIAAATgAgFgUIgFAEIAAAUIAEAEIAGABQAFAAADgEQADgEAAgHIgBgHIgCgFQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAAAIgFgBQgDAAgCACg");
	this.shape_52.setTransform(194.3,562.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#737373").s().p("AAPAfIAAg2IgdAAIAAA2IgJAAIAAg9IAvAAIAAA9g");
	this.shape_53.setTransform(188.6,560.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#737373").s().p("AgEAKIAAAAIAAgBIAAgBIAEgGIAAgCIgBAAIgCgBIgBgCIgBgCQAAAAABgBQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAIACAAIACACIABACIABACIgBAEIgCAEIgCAEIgDADg");
	this.shape_54.setTransform(182.3,564);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#737373").s().p("AgJAWIgEgCIgDgEIgBgFIACgFQABgDAEgBQACgCAGAAQAEgCAHAAIAAgDQABgEgDgEQgCgCgEAAIgEABIgGADIgBAAIgCAAIgBgBIgCgDQAEgDAEgCQAFgCAEAAIAGABIAGAEQABACABADIABAHIAAAbIgDAAIgCAAIgBgCIgBgEIgEADIgDACIgDABIgEABgAAAADIgFACIgDACQAAABAAAAQAAAAgBABQAAAAAAABQAAAAAAABIABADIABACIACABIADAAIADAAIAGgDIACgDIAAgJg");
	this.shape_55.setTransform(179,561.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#737373").s().p("AgQAWIAAgrIAQAAIAHABIAEACQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAIABAFIAAADIgCADIgCACIgFACQAEAAAEACQADAEAAADIgBAGQgBACgDACIgFACIgHABgAgIAQIAIAAQAFAAACgCQACgBAAgEIAAgDIgCgCIgCgBIgFgBIgIAAgAgIgCIAIAAIADgBQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAAAIACgCIABgDIgBgDIgBgCIgDgBIgDAAIgIAAg");
	this.shape_56.setTransform(174.9,561.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#737373").s().p("AANAWIgDgBIgCgCIgIgNIgCgDIgDgBIgFAAIAAAUIgIAAIAAgrIAIAAIAAATIAEAAIADgBIACgCIAIgOIACgBIACgBIAHAAIgLARIgDACQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAIADABIADADIALASg");
	this.shape_57.setTransform(170.6,561.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#737373").s().p("AgFAVQgEgBgCgDIgFgHQgBgFAAgFIABgIQACgFADgCQABgDAFgCQADgCAFAAQAFAAADACQAEABADADIgCADIgDABIgBAAIgCgCIgCgBIgFAAIgEABIgEADQgBABgCAEIAAAGIAAAHIADAFIAEADIAEABIAFAAIACgCIACgBIACgBIACABIACADQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAIgEACIgDABIgGABg");
	this.shape_58.setTransform(166.1,561.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#737373").s().p("AgIAVQgDgBgDgDQgDgDgCgFQgBgDAAgGQAAgEABgEQACgFADgDQADgDADgBQAEgCAEAAQAFAAAEACQAEABADADIAEAIQABAEAAAEQAAAGgBADIgEAIQgDADgEABQgEACgFAAQgEAAgEgCgAgIgLQgEAEAAAHQAAAIAEAEQADAEAFAAQAHAAADgEQADgEAAgIQAAgHgDgEQgDgEgHAAQgFAAgDAEg");
	this.shape_59.setTransform(161.4,561.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#737373").s().p("AAZAfIAAgwIgVAlIgBACIgCAAIgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAgBgBIgVglIAAACIAAACIAAAsIgIAAIAAg9IAJAAIABABIAVAlIABAFIABgDIAWgnIABgBIAIAAIAAA9g");
	this.shape_60.setTransform(155.1,560.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#737373").s().p("AgBAFIgCgBIgBgCIgBgCIABgBIADgDIABgBIACABIACABIABACIABABIgBACIgBACIgCABIgCABg");
	this.shape_61.setTransform(147.8,563.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#737373").s().p("AgNAWIAAgrIAbAAIAAAGIgTAAIAAAlg");
	this.shape_62.setTransform(145.7,561.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#737373").s().p("AgDAKIgBAAIAAgBIABgBIADgGIAAgCIgCAAIgBgBIgBgCIAAgCQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAIADAAIABACIABACIAAACIAAAEIgCAEIgDAEIgCADg");
	this.shape_63.setTransform(140.5,564);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#737373").s().p("AgNAfIASgYIACgCIACgDQgCACgEABIgFABQgDAAgDgBQgDgBgDgDIgEgEQgBgEAAgEQAAgFABgCQACgEADgDIAGgEQAEgCAEAAQAEAAAEACQAEABACADQADADABAEIABAIIgBAKIgUAdIgBACIgDAAgAgEgXIgEADIgCADIgBAGQAAAFADAEQADACAFAAIAFAAIAEgDIADgEIABgEIgBgGIgDgDIgEgDIgFgBg");
	this.shape_64.setTransform(136.9,560.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#737373").s().p("AgOAfIAAgGIANAAIAAgpIABgEIgLAKIgBAAIgBAAIgCgBIgDgDIASgQIAHAAIAAA3IAMAAIAAAGg");
	this.shape_65.setTransform(131.9,560.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#737373").s().p("AAHAfIAAgQIgaAAIgCgBIgBgBIgBgEIAegnIAHAAIAAAmIAKAAIAAAFIgBABIgBABIgIAAIAAAQgAgOAIIAVAAIAAgaIABgDg");
	this.shape_66.setTransform(126.8,560.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#737373").s().p("AgHAfIgFgBIgDgCIgEgDIADgDQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIAEACIAEACIAFAAIAFgBIAEgCQACgCABgDIABgGIgBgFIgCgEIgFgCIgEgBQgGAAgFACIgEgBIAEgeIAdAAIAAAEIgBADIgEABIgSAAIgCAQIAHgBQAGAAADACQAEABACACQACACACAEIABAHQAAAFgBAEQgCADgEADQgCAEgFABQgDABgFAAg");
	this.shape_67.setTransform(121.8,560.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#737373").s().p("AgOAfIAAgGIANAAIAAgtIgKAKIgCAAIgBAAIgBAAIAAgBIgDgDIASgQIAGAAIAAA3IANAAIAAAGg");
	this.shape_68.setTransform(116.8,560.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#737373").s().p("AgOAfIAAgGIANAAIAAgtIgKAKIgBAAIgCAAIgBAAIAAgBIgDgDIASgQIAHAAIAAA3IAMAAIAAAGg");
	this.shape_69.setTransform(111.8,560.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#737373").s().p("AABAQIgBgBIAAgCIAGgLIACgCIgBAAIgBgBIgGgLIAAgCIABgBIACgBIALAQIAAABIgLAQgAgMAQIgBgBIAAgCIAHgLIAAgBIABgBIgBAAIAAgBIgHgLIAAgCIABgBIADgBIAKAQIAAABIgKAQg");
	this.shape_70.setTransform(105.2,561.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#737373").s().p("AgBAFIgCgBIgBgCIgBgCIABgBIABgCIACgBIABgBIACABIADADIABABIgBACIgBACIgCABIgCABg");
	this.shape_71.setTransform(102.2,563.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#737373").s().p("AgSAfIAAg9IAlAAIAAAHIgcAAIAAA2g");
	this.shape_72.setTransform(100,560.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#737373").s().p("AgCAFIgBgBIgBgCIAAgDIACgDIACgBIACABIACABIABACIAAABIAAACIgBACIgCABIgCABg");
	this.shape_73.setTransform(96.4,563.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#737373").s().p("AAQAfIAAgcIggAAIAAAcIgJAAIAAg9IAJAAIAAAbIAgAAIAAgbIAKAAIAAA9g");
	this.shape_74.setTransform(92,560.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#737373").s().p("AgCAFIgBgBIgBgCIgBgCIABgBIABgCIABgBIACgBIACABIACABIABACIAAABIAAACIgBACIgCABIgCABg");
	this.shape_75.setTransform(87.7,563.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#737373").s().p("AgIAdQgFgCgEgEQgEgEgCgGQgCgHAAgGQAAgGACgGIAGgKQAGgFAEgCQAFgCAHAAQAHAAAEACQAGADADADIgDAEIAAABIgCAAIgBgBIgIgDIgHgBQgEAAgDABIgHAFQgDADgBAFQgCAEAAAFQAAAGACAEQABAFADADQADADAEABQADACAEAAIAFAAIAEgBIAEgCIADgCIABgBIAAAAIACAAIADAEQgEAFgFACQgGADgHAAQgFAAgHgDg");
	this.shape_76.setTransform(83.8,560.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#737373").s().p("AAQAfIAAguIABgFIgEAHIgcArIgDABIgGAAIAAg9IAJAAIAAAuIgBAEIABgDIAdgsIACgCIACgBIAHAAIAAA9g");
	this.shape_77.setTransform(75.3,560.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#737373").s().p("AAZAnIAAgPIgwAAIAAAMIgCACIgCABIgFAAIAAgWIAHAAIADgDIACgEIAEgQIADggIAkAAIAAA3IAKAAIAAATIgBACIgBABgAgJAAIgDAKIgDAHIAdAAIAAgwIgTAAg");
	this.shape_78.setTransform(68.5,561.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#737373").s().p("AAQAfIAAgcIgfAAIAAAcIgJAAIAAg9IAJAAIAAAbIAfAAIAAgbIAJAAIAAA9g");
	this.shape_79.setTransform(61.8,560.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#737373").s().p("AAWAfIgCAAIgBgCIgFgPIgbAAIgFAPIgCABIgCABIgGAAIAYg9IAIAAIAZA9gAgBgQIgJAYIAVAAIgKgaIgBgEg");
	this.shape_80.setTransform(55.5,560.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#737373").s().p("AARAfIgCgBIgCgCIgPgWIgCgDIgEAAIgHAAIAAAcIgJAAIAAg9IAJAAIAAAbIAIAAIACgBIABgBIARgZIADAAIAHAAIgSAZQgDAEgCAAIAEABIAVAfg");
	this.shape_81.setTransform(50,560.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#737373").s().p("AAAABIAAgBIAKgQIADABIABABQAAAAAAABQAAAAAAAAQAAAAAAABQgBAAAAAAIgGALIgCABIACACIAGALIABACIgBABIgDABgAgNABIAAgBIALgQIACABIABABIgBACIgFALIgCABIACACIAFALIABACIgBABIgCABg");
	this.shape_82.setTransform(44.8,561.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#737373").s().p("AgMAdQgGgCgDgEQgEgEgDgGQgCgGAAgHQAAgHACgFQADgGAEgEQACgDAHgEQAGgCAGAAQAHAAAGACQAHAEACADQAFAFACAFQACAFAAAHQAAAHgCAGQgCAFgFAFQgDAEgGACQgHADgGAAQgFAAgHgDgAgIgWIgHAFQgDADgBAFQgCAEAAAFQAAAGACAEQABAFADADQACACAFACIAIACQAFAAAEgCQAEgBADgDQADgDABgFQACgEAAgGQAAgFgCgEQgBgFgDgDIgHgFQgEgBgFAAIgIABg");
	this.shape_83.setTransform(37.3,560.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#737373").s().p("AgMAdQgFgCgFgEQgDgEgDgGQgCgHAAgGQAAgGACgGQADgGADgEQAEgEAGgDQAFgCAHAAQAIAAAFACQAFADAEAEQAEAEADAGQACAGAAAGQAAAGgCAHQgDAGgEAEQgEAEgFACQgHADgGAAQgFAAgHgDgAgIgWIgHAFIgEAIQgCAGAAADQAAAEACAGIAEAIQADADAEABQAEACAEAAQAGAAADgCQAEgBADgDIAEgIQABgEAAgGQAAgFgBgEIgEgIIgHgFQgDgBgGAAQgEAAgEABg");
	this.shape_84.setTransform(30.3,560.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#737373").s().p("AgLAdQgHgCgDgEQgFgFgCgFQgCgGAAgHQAAgHACgFQACgFAFgFQADgDAHgEQAEgCAHAAQAHAAAGACQAGADADAEQAEAEADAGQACAFAAAHQAAAHgCAGQgDAGgEAEQgDAEgGACQgHADgGAAQgFAAgGgDgAgIgWIgHAFQgDADgBAFQgCAEAAAFQAAAGACAEQABAFADADQAEADADABQAEACAEAAIAJgCQAFgCACgCQADgDABgFQACgEAAgGQAAgFgCgEQgBgFgDgDIgHgFIgJgBQgEAAgEABg");
	this.shape_85.setTransform(23.3,560.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgwBaIAAi0IBhAAIAAAhIg/AAIAAAqIA8AAIAAAfIg8AAIAAAqIA/AAIAAAgg");
	this.shape_86.setTransform(217.7,508.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgvBaIAAi0IBgAAIAAAhIg/AAIAAAqIA8AAIAAAfIg8AAIAAAqIA/AAIAAAgg");
	this.shape_87.setTransform(205,508.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AAhBaIAAhLIhBAAIAABLIghAAIAAi0IAhAAIAABJIBBAAIAAhJIAhAAIAAC0g");
	this.shape_88.setTransform(190.1,508.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("Ag8BaIAAi0IBpAAIAAAhIhIAAIAAAlIAcAAQAlAAAPAYQAIANAAASQAAAZgQAPQgRAPgbAAgAgbA6IAdAAQAMAAAIgHQAGgHAAgJQAAgJgFgFQgHgJgOAAIgdAAg");
	this.shape_89.setTransform(174.9,508.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AhDBDQgbgbAAgoQAAgmAbgbQAcgcAnAAQAoAAAcAcQAbAbAAAmQAAAogbAbQgcAbgoAAQgnAAgcgbgAgrgrQgSASAAAZQAAAZASATQASASAZAAQAaAAASgTQASgSAAgZQAAgZgSgSQgRgSgbAAQgZAAgSASg");
	this.shape_90.setTransform(156.8,508.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("Ag5BaIAAi0IAzAAQAlAAAQAXQALAOAAAUQAAAWgNAOQgRATgiAAIgRAAIAABEgAgXgKIAUAAQAbAAAAgXQAAgYgbAAIgUAAg");
	this.shape_91.setTransform(140.3,508.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("ABCBsIAAgjIiCAAIAAAjIgiAAIAAhDIARAAIBEiUIAcAAIBDCUIARAAIAABDgAgsApIBZAAIgthlg");
	this.shape_92.setTransform(122.8,510.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AhDBDQgbgbgBgoQABgmAbgbQAcgcAnAAQAoAAAcAcQAbAbAAAmQAAAogbAbQgcAbgoAAQgoAAgbgbgAgrgrQgSASAAAZQAAAZASATQASASAZAAQAaAAATgTQARgSAAgZQAAgZgRgSQgTgSgaAAQgaAAgRASg");
	this.shape_93.setTransform(102.5,508.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AAhBaIAAiTIhBAAIAACTIghAAIAAi0ICEAAIAAC0g");
	this.shape_94.setTransform(83.9,508.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#00A7E0").s().p("AvPD9IAAn5IefAAIAAH5g");
	this.shape_95.setTransform(149.8,507.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(306));

	// Слой 8
	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_96.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_96).wait(306));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.5,299.5,310.5,601);
// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/300x600_atlas_.jpg", id:"300x600_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;