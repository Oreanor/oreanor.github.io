(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"100pcx400_atlas_NP_", frames: [[402,402,400,400],[0,0,400,400],[0,402,400,400],[402,0,400,400]]}
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

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgwBaIAAi0IBhAAIAAAhIg/AAIAAAqIA8AAIAAAfIg8AAIAAAqIA/AAIAAAgg");
	this.shape.setTransform(172.6,92.6,0.8,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgvBaIAAi0IBgAAIAAAhIg/AAIAAAqIA8AAIAAAfIg8AAIAAAqIA/AAIAAAgg");
	this.shape_1.setTransform(162.4,92.6,0.8,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAhBaIAAhLIhBAAIAABLIghAAIAAi0IAhAAIAABJIBBAAIAAhJIAhAAIAAC0g");
	this.shape_2.setTransform(150.5,92.6,0.8,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag8BaIAAi0IBpAAIAAAhIhIAAIAAAlIAcAAQAlAAAPAYQAIANAAASQAAAZgQAPQgRAPgbAAgAgbA6IAdAAQAMAAAIgHQAGgHAAgJQAAgJgFgFQgHgJgOAAIgdAAg");
	this.shape_3.setTransform(138.3,92.6,0.8,0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhDBDQgbgbAAgoQAAgmAbgbQAcgcAnAAQAoAAAcAcQAbAbAAAmQAAAogbAbQgcAbgoAAQgnAAgcgbgAgrgrQgSASAAAZQAAAZASATQASASAZAAQAaAAASgTQASgSAAgZQAAgZgSgSQgRgSgbAAQgZAAgSASg");
	this.shape_4.setTransform(123.9,92.6,0.8,0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag5BaIAAi0IAzAAQAlAAAQAXQALAOAAAUQAAAWgNAOQgRATgiAAIgRAAIAABEgAgXgKIAUAAQAbAAAAgXQAAgYgbAAIgUAAg");
	this.shape_5.setTransform(110.6,92.6,0.8,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABCBsIAAgjIiCAAIAAAjIgiAAIAAhDIARAAIBEiUIAcAAIBDCUIARAAIAABDgAgsApIBZAAIgthlg");
	this.shape_6.setTransform(96.7,94,0.8,0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhDBDQgbgbgBgoQABgmAbgbQAcgcAnAAQAoAAAcAcQAbAbAAAmQAAAogbAbQgcAbgoAAQgoAAgbgbgAgrgrQgSASAAAZQAAAZASATQASASAZAAQAaAAATgTQARgSAAgZQAAgZgRgSQgTgSgaAAQgaAAgRASg");
	this.shape_7.setTransform(80.4,92.6,0.8,0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAhBaIAAiTIhBAAIAACTIghAAIAAi0ICEAAIAAC0g");
	this.shape_8.setTransform(65.5,92.6,0.8,0.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00A7E0").s().p("AvPD9IAAn5IefAAIAAH5g");
	this.shape_9.setTransform(118.2,91.6,0.8,0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00A7E0").s().p("AgPBZIAAgfIAfAAIAAAfgAgPAsIAAiEIAfAAIAACEg");
	this.shape_10.setTransform(236.2,39.1,0.975,0.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00A7E0").s().p("AA9BZIAAiEIgvCEIgbAAIgviEIAACEIghAAIAAixIAtAAIAwCHIAxiHIAtAAIAACxg");
	this.shape_11.setTransform(222.2,39.1,0.975,0.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00A7E0").s().p("AgvBZIAAixIBeAAIAAAgIg9AAIAAApIA7AAIAAAfIg7AAIAAApIA9AAIAAAgg");
	this.shape_12.setTransform(205.5,39.1,0.975,0.975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00A7E0").s().p("AAoBZIAAh8IhPB8IghAAIAAixIAhAAIAAB8IBPh8IAhAAIAACxg");
	this.shape_13.setTransform(190.5,39.1,0.975,0.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00A7E0").s().p("Ag5BZIAAixIArAAQATAAAPAGQAbAMAAAdQAAAXgUALQAPAFAHAKQAJAMgBAPQABA2hGAAgAgYA5IAVAAQAcAAAAgWQAAgXgcAAIgVAAgAgYgTIAPAAQAXAAAAgTQAAgSgXAAIgPAAg");
	this.shape_14.setTransform(175.5,39.1,0.975,0.975);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00A7E0").s().p("AgPBZIAAiRIghAAIAAggIBhAAIAAAgIggAAIAACRg");
	this.shape_15.setTransform(163.4,39.1,0.975,0.975);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00A7E0").s().p("AhAA9QgXgbAAgiQAAgiAXgbQAageArgBQAcABAVAOQAXAOAKAZIglAAQgRgVgbgBQgaAAgRASQgRASAAAYQAAAZARARQASASAZABQAbAAAQgVIAlAAQgLAYgVAOQgVAOgdAAQgqABgaggg");
	this.shape_16.setTransform(149.5,39.2,0.975,0.975);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00A7E0").s().p("Ag6BZIAAixIAhAAIAABFIAZAAQAfAAAPARQANANAAAXQAAAZgQAPQgRAPgaAAgAgZA5IAZAAQANAAAGgGQAHgGAAgLQAAgKgHgGQgGgGgNAAIgZAAg");
	this.shape_17.setTransform(134,39.1,0.975,0.975);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00A7E0").s().p("AAxBZIgxiDIgvCDIglAAIBHixIAcAAIBGCxg");
	this.shape_18.setTransform(118.2,39.1,0.975,0.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00A7E0").s().p("AhCBBQgbgaAAgnQAAgmAbgbQAbgbAnAAQAnAAAcAbQAbAbAAAmQAAAngbAaQgcAbgnAAQgmAAgcgbgAgqgqQgSASAAAYQAAAZASASQARASAZAAQAaAAARgSQASgTAAgYQAAgYgSgSQgRgSgaAAQgZAAgRASg");
	this.shape_19.setTransform(100,39.2,0.975,0.975);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00A7E0").s().p("Ag5BZIAAixIArAAQAUAAAOAGQAbAMAAAdQAAAXgTALQANAFAIAKQAJAMAAAPQAAAXgPAOQgSARglAAgAgXA5IAVAAQAbAAAAgWQAAgXgbAAIgVAAgAgXgTIAPAAQAWAAAAgTQAAgSgWAAIgPAAg");
	this.shape_20.setTransform(83.8,39.1,0.975,0.975);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00A7E0").s().p("AhCBCQgbgbAAgmQAAgnAbgbQAbgaAnAAQAoAAAbAaQAbAbAAAnQAAAmgbAbQgbAagoAAQgmAAgcgagAgqgqQgSASAAAYQAAAZASASQARARAZAAQAaAAASgRQARgSAAgZQAAgZgSgRQgRgSgaABQgZAAgRARg");
	this.shape_21.setTransform(66.8,39.2,0.975,0.975);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00A7E0").s().p("ABABqIAAgiIh/AAIAAAiIghAAIAAhCIARAAIBCiRIAcAAIBBCRIARAAIAABCgAgrAoIBXAAIgshjg");
	this.shape_22.setTransform(47.3,40.7,0.975,0.975);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00A7E0").s().p("AghBZIAVgtIhFiEIAoAAIAuBeIApheIAkAAIhRCxg");
	this.shape_23.setTransform(33.1,39.1,0.975,0.975);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00A7E0").s().p("AhAA9QgXgbAAgiQAAgiAXgbQAbgeAqAAQAcAAAWAOQAWAOALAaIgmAAQgRgWgcgBQgZABgRARQgRASAAAYQAAAZASASQARARAZABQAbAAAPgVIAnAAQgMAYgUAOQgWAOgcAAQgqAAgbgfg");
	this.shape_24.setTransform(10.5,39.2,0.975,0.975);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00A7E0").s().p("AAzBZIgSguIhBAAIgSAuIgkAAIBKixIAZAAIBKCxgAgTALIAnAAIgUgzg");
	this.shape_25.setTransform(206.7,9.8,0.975,0.975);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00A7E0").s().p("AA9BZIAAiEIgvCEIgbAAIgviEIAACEIghAAIAAixIAsAAIAxCHIAxiHIAtAAIAACxg");
	this.shape_26.setTransform(187.2,9.8,0.975,0.975);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00A7E0").s().p("AhCBCQgbgbAAgnQAAgmAbgbQAcgaAmAAQAoAAAbAaQAbAbAAAmQAAAngbAbQgbAbgoAAQgmAAgcgbgAgqgqQgSARAAAZQAAAZASASQARARAZAAQAaAAASgRQARgTAAgYQAAgZgSgRQgRgRgagBQgZABgRARg");
	this.shape_27.setTransform(166.6,9.9,0.975,0.975);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00A7E0").s().p("ABABqIAAgiIh/AAIAAAiIghAAIAAhCIARAAIBCiRIAbAAIBCCRIARAAIAABCgAgqAoIBWAAIgshjg");
	this.shape_28.setTransform(147.2,11.5,0.975,0.975);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00A7E0").s().p("AgvBZIAAixIBfAAIAAAgIg+AAIAAApIA7AAIAAAfIg7AAIAAApIA+AAIAAAgg");
	this.shape_29.setTransform(126.2,9.8,0.975,0.975);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00A7E0").s().p("AgQBZIAAiRIggAAIAAggIBhAAIAAAgIghAAIAACRg");
	this.shape_30.setTransform(115.1,9.8,0.975,0.975);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00A7E0").s().p("Ag6BZIAAixIAhAAIAABFIAZAAQAeAAAQARQANAOAAAWQAAAZgRAPQgQAPgaAAgAgZA5IAZAAQAMAAAHgGQAHgGAAgLQAAgKgHgGQgHgGgMAAIgZAAg");
	this.shape_31.setTransform(104.6,9.8,0.975,0.975);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00A7E0").s().p("Ag5BZIAAixIArAAQAUAAAOAGQAbAMAAAdQAAAYgUAKQAPAFAIAKQAIAMAAAPQAAA2hGAAgAgYA5IAWAAQAbAAAAgWQAAgXgbAAIgWAAgAgYgTIAQAAQAWAAAAgTQAAgSgWAAIgQAAg");
	this.shape_32.setTransform(90.8,9.8,0.975,0.975);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#00A7E0").s().p("AhBBCQgcgbABgmQgBgnAcgbQAagaAnAAQAoAAAaAaQAcAbAAAnQAAAmgcAbQgbAagnABQgngBgagagAgrgqQgRASABAYQgBAZASARQARASAZAAQAaAAARgSQARgSAAgYQAAgZgRgRQgRgSgaAAQgZAAgSASg");
	this.shape_33.setTransform(73.8,9.9,0.975,0.975);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#00A7E0").s().p("AgQBZIAAiRIggAAIAAggIBhAAIAAAgIghAAIAACRg");
	this.shape_34.setTransform(59.6,9.8,0.975,0.975);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#00A7E0").s().p("AhCBCQgbgbAAgmQAAgnAbgaQAbgcAnABQAogBAbAcQAbAaAAAnQAAAmgbAbQgbAagoAAQgmAAgcgagAgqgqQgSARAAAZQAAAZASARQARATAZAAQAaAAASgTQARgRAAgZQAAgZgSgRQgRgSgaABQgZgBgRASg");
	this.shape_35.setTransform(45.5,9.9,0.975,0.975);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#00A7E0").s().p("AgrBZIAAixIBXAAIAAAgIg2AAIAACRg");
	this.shape_36.setTransform(31.3,9.8,0.975,0.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t5, new cjs.Rectangle(2,0.9,235.8,110.9), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("AoTDgQgVgNgNgUQgMgVAAgaQAAgaAMgVQANgVAVgMQAVgNAbAAQAaAAAVANQAVAMANAVQAMAVAAAaQAAAagMAVQgNAUgVANQgVAMgaAAQgbAAgVgMgAoDBbQgNAIgIAOQgIANAAARQAAARAIAOQAIAOANAIQAOAIARAAQASAAAOgIQAOgJAHgNQAIgOAAgRQAAgRgIgNQgIgOgNgIQgOgIgRAAQgSAAgOAIgAKlDoIgSguIhCAAIgSAuIgkAAIBKiyIAaAAIBKCygAKGCaIgUg0IgUA0IAoAAgAHhDoIAAiSIghAAIAAggIBjAAIAAAgIghAAIAACSgAGSDoIg3hOIAABOIghAAIAAiyIAhAAIAABNIA3hNIAoAAIhDBYIBDBagAC+DoIAAiyIBfAAIAAAgIg/AAIAAApIA8AAIAAAgIg8AAIAAApIA/AAIAAAggACHDoIgwiEIgxCEIgkAAIBGiyIAdAAIBGCygAgwDoIAAiSIhBAAIAACSIggAAIAAiyICCAAIAACygAjTDoIAAiFIgvCFIgcAAIgwiFIAACFIggAAIAAiyIAsAAIAyCIIAxiIIAtAAIAACygAplDoIg4hOIAABOIggAAIAAiyIAgAAIAABNIA4hNIAnAAIhDBYIBDBagAhOg+QgVgNgNgUQgMgVAAgaQAAgaAMgVQANgVAVgMQAVgNAbAAQAaAAAUANQAVAMANAVQAMAVAAAaQAAAagMAVQgNAUgVANQgUAMgaAAQgbAAgVgMgAg+jDQgNAIgIAOQgIANAAARQAAARAIAOQAIAOANAIQAOAIARAAQASAAANgIQAOgJAHgNQAIgOAAgRQAAgRgIgNQgIgOgNgIQgNgIgRAAQgSAAgOAIgALLg2IAAiyIBfAAIAAAgIg/AAIAAApIA8AAIAAAgIg8AAIAAApIA/AAIAAAggAKOg2Ig4hOIAABOIggAAIAAiyIAgAAIAABNIA4hNIAnAAIhDBYIBDBagAH0g2IAAiSIhBAAIAACSIggAAIAAiyICCAAIAACygAEMg2IAVgtIhFiFIAoAAIAvBfIAphfIAkAAIhQCygACug2Ig4hOIAABOIggAAIAAiyIAgAAIAABNIA4hNIAnAAIhDBYIBDBagAi0g2IAAiSIhBAAIAACSIghAAIAAiyICDAAIAACygAmPg2IAAh9IhQB9IggAAIAAiyIAgAAIAAB9IBQh9IAhAAIAACygAqGg2IAAiyIAyAAQAVAAANAGQAMAGAHAKQAGAJACAJQACAJAAAHQAAAIgCAKQgDAJgHAIQgHAJgNAFQgMAFgTAAIgRAAIAABEgApliZIATAAIAMgCQAGgBAFgFQAFgFAAgLQAAgKgFgGQgFgEgGgCIgMgBIgTAAgArHg2IAAiSIhBAAIAACSIghAAIAAiyICDAAIAACyg");
	this.shape.setTransform(98.7,39.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(17.8,15.7,162,47.3), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("AgVDgQgVgNgNgUQgMgVAAgaQAAgaAMgVQANgVAVgMQAVgNAaAAQAaAAAVANQAVAMANAVQAMAVAAAaQAAAagMAVQgNAUgVANQgVAMgaAAQgaAAgVgMgAgFBbQgNAIgIAOQgIANAAARQAAARAIAOQAIAOANAIQANAIARAAQASAAAOgIQAOgJAHgNQAIgOAAgRQAAgRgIgNQgIgOgNgIQgOgIgRAAQgSAAgNAIgAlwDjQgRgIgMgOQgLgOgGgQQgGgQAAgQQAAgPAGgQQAGgQALgOQAMgOARgIQASgJAXAAQATAAAQAGQAQAHAMAMQAMAMAIARIgmAAQgEgGgHgFQgGgFgIgDQgJgDgKAAQgSAAgOAIQgNAJgIANQgIAOAAAQQAAARAIAOQAIANAOAJQAOAIARAAQAMAAALgFQALgFAJgKIAmAAQgIAPgLAMQgMAMgQAGQgQAHgTAAQgXAAgSgJgAIaDoIAAhFIgBAAIgvBFIgnAAIAxhCQgOgCgKgGQgLgHgGgMQgHgLAAgQQAAgHACgJQADgKAGgJQAHgKANgGQAOgHAWAAIAzAAIAACygAHyBaQgHAEgDAGQgDAGAAAGQAAAHADAGQADAGAHAEQAHAEANAAIAUAAIAAg1IgUAAQgNAAgHAEgAGKDoIAAh9IhQB9IggAAIAAiyIAgAAIAAB9IBQh9IAhAAIAACygACPDoIAAiyIAqAAIALAAIAQADQAIACAIAFQAIAFAGAJQAFAJAAAOQAAALgEAHQgEAHgEAEIgHAFQAOAFAIALQAIAMAAAPQAAANgGAMQgGAMgPAIQgQAIgcABgACvDIIAWAAIAGAAQAEgBAFgCQAFgCAEgFQAEgEAAgJQAAgDgCgGQgBgFgGgEQgHgEgMgBIgWAAgACvB7IAQAAQAKgBAFgDQAFgEACgEIABgHQAAgIgEgEQgFgEgFgBIgJgBIgQAAgAhpDoIgwiEIgxCEIgkAAIBGiyIAdAAIBGCygAoSDoIAVgtIhEiFIAoAAIAvBfIAphfIAkAAIhRCygAkfgVIAAghIh1AAIAAiyIAgAAIAACSIBBAAIAAiSIAhAAIAACSIAUAAIAABBgAtEg7QgSgIgLgOQgMgOgFgQQgGgQAAgQQAAgPAGgQQAFgQAMgOQALgOASgIQARgJAYAAQASAAAQAGQAQAHAMAMQANAMAHARIglAAQgFgGgGgFQgHgFgIgDQgIgDgLAAQgSAAgNAIQgOAJgHANQgIAOAAAQQAAARAIAOQAIANANAJQAOAIARAAQAMAAAMgFQALgFAIgKIAmAAQgHAPgMAMQgMAMgPAGQgQAHgUAAQgXAAgRgJgAMag2IAAiyIBfAAIAAAgIg+AAIAAApIA8AAIAAAgIg8AAIAAApIA+AAIAAAggALZg2IAAiyIAhAAIAACygAJRg2IAAiyIAgAAIAABFIAbAAQAWAAANAIQANAIAFAMQAGANAAANQAAARgIAMQgHAMgOAHQgNAHgRAAgAJxhWIAbAAQAMAAAHgGQAHgGAAgLQAAgLgHgGQgHgFgMgBIgbAAgAIPg2IAAhLIhBAAIAABLIggAAIAAiyIAgAAIAABHIBBAAIAAhHIAhAAIAACygAEjg2IAAiyIAgAAIAABFIAbAAQAWAAANAIQANAIAFAMQAGANAAANQAAARgIAMQgHAMgOAHQgNAHgRAAgAFDhWIAbAAQAMAAAHgGQAHgGAAgLQAAgLgHgGQgHgFgMgBIgbAAgADsg2IgwiEIgxCEIgkAAIBGiyIAdAAIBGCygAA/g2IgSguIhAAAIgSAuIglAAIBKiyIAaAAIBKCygAAhiEIgUg0IgUA0IAoAAgAh8g2IAAh9IhQB9IggAAIAAiyIAgAAIAAB9IBQh9IAhAAIAACygAoRg2IAAiyIBfAAIAAAgIg+AAIAAApIA8AAIAAAgIg8AAIAAApIA+AAIAAAggApSg2IAAiSIhBAAIAACSIghAAIAAiyICDAAIAACyg");
	this.shape.setTransform(106.1,25.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(17.2,1.8,177.9,47.3), null);


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
	this.instance = new lib._4();
	this.instance.parent = this;
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p5, new cjs.Rectangle(-200,-200,400,400), null);


(lib.p4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib._4();
	this.instance.parent = this;
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p4, new cjs.Rectangle(-200,-200,400,400), null);


(lib.p3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._3();
	this.instance.parent = this;
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p3, new cjs.Rectangle(-200,-200,400,400), null);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2, new cjs.Rectangle(-200,-200,400,400), null);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1, new cjs.Rectangle(-200,-200,400,400), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("AqTBeQgvgrAbhAQAag5BOghQBYglCOAAQAgAAAcAEIAlAFIAPADIgUAkQgsgMgmAAQhIAAg7AVQhQAcgMA5QgHAiAYAeQAgAnBFgEQAWgBAqgOQAzgRAdgYIBIg/QAHgFAHgEQAGgCAIgBIAHAAIBNAAIAZBqIAwhpIBVAAIAxBRIAlhRIBOAAIhFCUIhQAAIgzhWIgmBWIgxAAIAAABIhcAAIgEgbIhUAAIgcAZIg3AAQg/AXhUAAQh4AAg0gvgAjhA/IAxgBIgEgpgAG6CFIAygxIgyhxIBNAAIAVA8IA/g9IBXAAIibCaQgFAFgEABQgFACgNABgAEgB3Ih+AAIBEiUIB+AAQA9AAAWAcQASAXgOAeQgNAbggASQgpAWhCAAIgDAAgAEHBSIAWAAQAaAAAUgGQAggKAGgYQAGgUgUgJQgOgGgWAAIgXAAg");
	this.shape.setTransform(0,-5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-68.9,-19.1,138,28.2), null);


(lib.legal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("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");
	this.shape.setTransform(-26.7,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AMGAcQgGgFgBgIIAIgBQABAHAEACQADADAEAAQAFAAAEgDQAFgEAAgGQAAgFgFgDQgDgEgGAAIgFABIACgGIAAAAQAFAAAEgCQAFgDAAgGQgBgDgDgDQgDgDgEAAQgEAAgDADQgEADgBAFIgHgBQACgIAEgEQAFgFAIAAQAFAAAEADQAFACACAEQACAEAAAEQAAAEgCADQgCADgFADQAGABADADQAEAEAAAGQAAAIgHAGQgFAGgKAAQgIAAgFgFgALUAcQgFgFAAgIIAHAAQABAGADACQAEADAEAAQAGAAAEgEQAEgEAAgHQAAgHgEgEQgEgCgGAAQgEAAgDACQgCAAgCADIgHgBIAGgfIAfAAIAAAHIgaAAIgCARQAFgEAGAAQAJAAAFAFQAGAFAAAJQAAAJgEAGQgHAIgLAAQgIAAgGgFgAJzAaQgHgHABgSQAAgLABgGQADgHAFgEQADgEAIAAQAFAAADADQAEABAEAEIADAKIABAOQAAALgCAHQgCAGgFAEQgEAEgHAAQgKAAgEgHgAJ4gUQgEAGAAAPQAAAPAEAFQADAFAGAAQAFAAADgFQAEgFABgPQgBgPgEgFQgDgFgFAAQgGAAgDAEgAIRAaQgHgHAAgSQABgLACgGQACgHAEgEQAFgEAHAAQAFAAAEADQAEABADAEIADAKQACAFAAAJQAAALgDAHQgCAGgEAEQgFAEgHAAQgKAAgEgHgAIWgUQgDAGAAAPQAAAPADAFQADAFAGAAQAGAAADgFQAEgFAAgPQAAgPgEgFQgDgFgGAAQgGAAgDAEgAHvAhQgKAAgGgHQgGgHAAgRQAAgRAGgIQAHgIAKAAIACABQAHAAADAEQAEAEACAHIgIABQgBgFgCgCQgCgCgDAAIgDgBIgHACQgDACgCAFQgCAGAAAJQADgEADgCIAJgCIACABQAHAAAFAFQAFAEAAAJQAAAGgDAFQgDAFgEADIgHADIgDAAgAHmABQgEAEAAAGIACAIQABADADADQADABAEAAIADAAIAGgEQACgDAAgHQAAgHgCgEIgGgCIgDAAQgGAAgDACgAGwAdQgFgEgBgIIAHgBQABAGADACQACACAEAAQAFAAACgBIAEgEIADgIQABgEABgFIAAgCQgDAEgFACQgDACgFAAQgIAAgFgFQgGgFAAgJQABgKAFgFQAGgHAIAAQAGAAAGAEQAFADACAGQADAGAAAMQAAALgDAHQgCAHgFAEQgFAEgIAAQgGAAgFgEgAG0gUQgEAEAAAHQAAAGAEADQADAEAGAAQAFAAAEgEQADgDAAgHQAAgGgDgEQgEgEgFAAQgFAAgEAEgADrAaQgGgHAAgSQAAgLACgGQACgHAEgEQAFgEAIAAQAEAAAEADQAEABACAEQADAEACAGIABAOQAAALgCAHQgDAGgEAEQgFAEgGAAQgKAAgFgHgADxgUQgFAGAAAPQAAAPAFAFQADAFAGAAQAFAAADgFQAEgFAAgPQAAgPgEgFQgDgFgFAAQgGAAgDAEgAhDAcQgHgEgEgHQgEgIABgIQAAgOAIgJQAIgKAOAAQAIAAAIAFQAGAEAEAHQADAIAAAIQAAAKgEAHQgDAIgHAEQgIAEgHAAQgKAAgGgFgAhDgSQgGAGAAANQAAALAGAHQAGAHAJAAQAKAAAHgHQAFgHABgMQgBgGgDgGQgCgGgFgDQgFgDgGAAQgJAAgHAGgAiVAcQgGgFAAgIIAHAAQACAGADACQADADAFAAQAGAAAEgEQADgEAAgHQAAgHgDgEQgEgCgGAAQgEAAgDACQgDAAgCADIgHgBIAGgfIAgAAIAAAHIgaAAIgDARQAGgEAGAAQAIAAAGAFQAFAFAAAJQABAJgFAGQgGAIgLAAQgJAAgFgFgAj3AaQgGgHAAgSQAAgLACgGQADgHAEgEQAEgEAHAAQAFAAAEADQAEABADAEIADAKIABAOQAAALgCAHQgCAGgEAEQgFAEgHAAQgJAAgFgHgAjygUQgDAGAAAPQAAAPADAFQAEAFAFAAQAGAAADgFQAEgFAAgPQAAgPgEgFQgDgFgGAAQgFAAgEAEgAmKAcQgGgFAAgIIAIAAQABAGAEACQADADAEAAQAGAAAEgEQADgEAAgHQAAgHgDgEQgEgCgGAAQgEAAgCACQgEAAgCADIgGgBIAFgfIAgAAIAAAHIgZAAIgEARQAGgEAGAAQAIAAAGAFQAGAFAAAJQAAAJgFAGQgGAIgLAAQgJAAgFgFgAnsAaQgFgHAAgSQAAgLACgGQACgHAEgEQAEgEAIAAQAEAAAFADQAEABACAEIAEAKIABAOQAAALgCAHQgDAGgEAEQgEAEgHAAQgJAAgGgHgAnmgUQgEAGAAAPQAAAPAEAFQADAFAGAAQAFAAAEgFQADgFAAgPQAAgPgDgFQgEgFgFAAQgGAAgDAEgAK2AgIAAgPIgcAAIAAgHIAdgpIAHAAIAAApIAIAAIAAAHIgIAAIAAAPgAKjAKIATAAIAAgcgAJFAgQAAgIADgKQADgLAFgJQAFgJAGgHIgfAAIAAgHIApAAIAAAGQgGAGgGALQgHAJgCAMQgDAHgBAKgAGBAgQAAgIADgKQADgLAFgJQAFgJAGgHIgeAAIAAgHIAoAAIAAAGQgGAGgGALQgGAJgDAMQgCAHgBAKgAFQAgQAAgIADgKQADgLAFgJQAFgJAGgHIgfAAIAAgHIApAAIAAAGQgGAGgGALQgGAJgEAMQgBAHgBAKgAEvAgIAAgPIgcAAIAAgHIAdgpIAGAAIAAApIAIAAIAAAHIgIAAIAAAPgAEbAKIAUAAIAAgcgADJAgIAAgxIgIAGIgHAEIAAgIQAGgDAFgEQAFgFACgEIAFAAIAAA/gACIAgIAAgeIghAAIAAAeIgHAAIAAg/IAHAAIAAAbIAhAAIAAgbIAJAAIAAA/gAAkAgIAAg/IAYAAQAGAAAEACQAEAAADACQADADACADQACAEAAAFQABAIgGAEQgFAGgNAAIgQAAIAAAagAAtAAIAQAAQAIAAADgEQAEgCgBgGQAAgEgBgCQgDgDgCgBIgIgBIgQAAgAgKAgIAAg/IAnAAIAAAIIgfAAIAAA3gAi2AgIAAgxIgIAGIgIAEIAAgIQAGgDAFgEQAFgFACgEIAFAAIAAA/gAkvAgIAAgGQACgEAEgEIAKgJQAKgJADgEQAFgFAAgEQgBgFgDgDQgDgDgFAAQgGAAgDADQgEAEAAAGIgIgBQABgJAFgFQAFgFAKAAQAJAAAFAFQAFAFAAAIIgBAHQgCAEgEADQgCAEgJAHIgJAIIgEAEIAgAAIAAAIgAlKAgIAAgxIgHAGIgJAEIAAgIQAHgDAFgEQAFgFADgEIAEAAIAAA/gAmoAgIAAgPIgbAAIAAgHIAcgpIAHAAIAAApIAIAAIAAAHIgIAAIAAAPgAm8AKIAUAAIAAgcgAoaAgQAAgIADgKQADgLAFgJQAGgJAGgHIgfAAIAAgHIApAAIAAAGQgHAGgGALQgFAJgEAMQgCAHgBAKgApKAgQAAgIACgKQADgLAGgJQAFgJAFgHIgeAAIAAgHIAoAAIAAAGQgGAGgFALQgGAJgEAMQgCAHAAAKgAp/AgIAAgeIghAAIAAAeIgJAAIAAg/IAJAAIAAAbIAhAAIAAgbIAIAAIAAA/gAq/AgIAAgeIghAAIAAAeIgIAAIAAg/IAIAAIAAAbIAhAAIAAgbIAJAAIAAA/gAr9AgIAAgxIgiAxIgJAAIAAg/IAIAAIAAAyIAigyIAIAAIAAA/g");
	this.shape_1.setTransform(-1.8,11.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AlKAnIAAgPIgqAAIAAAPIgHAAIAAgWIAFAAQAHgLAAgjIAAgJIAmAAIAAA3IAGAAIAAAWgAlngaIgBAVQgCANgEAJIAdAAIAAgvIgWAAgAMyAiQACgBACgDIABgGIgFAAIAAgIIAJAAIAAAIQAAAGgCACQgBADgEADgAGFAiQACgBACgDIABgGIgFAAIAAgIIAJAAIAAAIQAAAGgCACQgBADgEADgAMBAWQgEgEAAgGQAAgDACgDQABgDACgBIAGgCIAGgBIAPgDIAAgBQAAgFgCgCQgEgDgFABQgGgBgCACQgDADgBAFIgIgCIADgIQADgDAEgCQAFgBAGAAQAFAAAEABQAEABACADIACAFIAAAHIAAAJQAAAMABACIACAFIgIAAQgCgCAAgDIgIAFIgJABQgHAAgEgDgAMQAFIgHABIgDADIgBADQAAADACADQADACAEAAQAFAAADgCQADgCACgEQACgCAAgFIAAgDIgNADgAKCAUQgGgHAAgLQAAgHACgFQADgGAFgDQAEgCAHAAQAHAAAFAEQAFAEABAGIgHACQgCgFgCgDQgDgBgEAAQgGAAgEADQgDAFAAAIQAAAJADAEQAEAEAGAAQAEAAADgDQADgDABgFIAIABQgCAIgFAEQgFAEgHAAQgKAAgFgFgAJQAUQgGgHAAgLQAAgMAHgGQAGgFAJAAQAJAAAGAGQAGAGAAAKQAAAJgDAFQgCAFgFADQgFACgGAAQgKAAgGgFgAJWgKQgEAFAAAHQAAAJAEADQAEAFAGAAQAGAAADgFQAEgEAAgIQAAgIgEgEQgDgEgGAAQgGAAgEAEgAFXAWQgFgFAAgGIAHgCQABAGADACQACACAEAAQAEAAADgBIAEgFIADgHIABgJIAAgBQgCAEgFABQgDACgFAAQgIAAgGgFQgFgFAAgJQAAgKAGgGQAFgFAJgBQAGAAAFAEQAFADADAGQADAGAAAMQAAALgDAHQgDAHgFAEQgFADgHAAQgHAAgFgDgAFcgbQgEAEAAAHQAAAGAEAEQADADAGAAQAFAAAEgDQADgEAAgGQAAgIgDgDQgEgEgFAAQgFAAgEAEgADEAVQgGgFAAgIIAHgBQABAHAEACQADADAEAAQAGAAAEgEQAEgEAAgIQAAgFgEgDQgEgEgGgBQgDABgDACQgEABgBADIgHgBIAGghIAfAAIAAAHIgZAAIgEARQAHgDAGAAQAIAAAFAFQAGAHAAAHQAAAJgFAGQgGAIgLgBQgIABgFgFgAjXAVQgGgDgEgIQgDgJAAgHQAAgKAEgHQAEgIAGgEQAHgDAJAAQAJAAAHAEQAGAFACAJIgIABQgCgGgEgEQgEgDgGAAQgHAAgFAEQgFAEgDAFQgBAGAAAHQAAAGACAGQACAHAFADQAFADAGAAQAHAAAFgFQAFgEABgHIAJACQgDAJgHAGQgGAGgKgBQgLAAgGgEgAqkAVQgHgEgEgHQgDgIAAgHQAAgPAIgKQAJgIANgBQAJAAAHAFQAHAEAEAHQADAIAAAKQAAAIgEAIQgEAHgHAEQgHADgIAAQgJAAgHgEgAqjgZQgHAGAAAOQAAALAHAGQAGAHAJAAQAKAAAGgHQAGgGAAgLQAAgJgDgGQgDgFgFgEQgFgDgGAAQgJABgGAGgAroAVQgHgEgEgHQgDgIAAgHQAAgPAIgKQAIgIAOgBQAIAAAHAFQAIAEADAHQAEAIAAAKQAAAIgEAIQgEAHgHAEQgHADgIAAQgJAAgHgEgArngZQgHAGAAAOQAAALAHAGQAGAHAJAAQAJAAAGgHQAHgGAAgLQAAgJgDgGQgDgFgFgEQgFgDgGAAQgJABgGAGgAssAVQgHgEgEgHQgDgIAAgHQAAgPAIgKQAIgIAOgBQAIAAAHAFQAHAEAEAHQAEAIAAAKQAAAIgEAIQgEAHgHAEQgHADgIAAQgJAAgHgEgAssgZQgGAGAAAOQAAALAGAGQAHAHAIAAQAKAAAGgHQAGgGAAgLQAAgJgCgGQgDgFgFgEQgFgDgGAAQgJABgHAGgALRAYIAAgsIARAAIAKABQAEABACADQACADAAAEQAAADgBACQgCADgCABQADABACADQACADAAAEQAAAHgFACQgEADgIAAgALZASIAJAAIAKgBQACgCAAgDQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAIgHAAIgJAAgALZgBIAIAAIAGgBIAEgCQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgEgCgCIgJgBIgIAAgALDAYIgIgNIgFgGIgCgBIgCgBIAAAVIgIAAIAAgsIAIAAIAAAUIACAAIADgCQACgBACgHIAEgHQABgBAAAAQAAgBABAAQAAAAABAAQAAAAABgBIAFAAIACAAIAAAGIgCAAIgEABIgDAGIgDAGQgBABgEABQAFABAFAJIAIANgAI5AYIAAgzIgTAzIgHAAIgSg0IAAA0IgIAAIAAg+IAMAAIAPAsIADAKIADgLIAQgrIALAAIAAA+gAHWAYIAAgIIAJAAIAAAIgAG0AYIAAgsIAaAAIAAAGIgSAAIAAAmgAE1AYIAAgwIgIAFQgEAEgEABIAAgIQAHgDAFgFIAHgIIAFAAIAAA+gAEHAYIAAgOIgbAAIAAgHIAcgpIAHAAIAAApIAIAAIAAAHIgIAAIAAAOgADzADIAUAAIAAgcgACiAYIAAgwIgIAFIgIAFIAAgIQAHgDAFgFQAFgEACgEIAFAAIAAA+gABxAYIAAgwIgIAFQgEAEgEABIAAgIQAHgDAFgFQAFgEACgEIAFAAIAAA+gAAAAYIAAgIIAIAAIAAAIgAgxAYIAAg+IAoAAIAAAIIggAAIAAA2gAhIAYIAAgIIAIAAIAAAIgAhgAYIAAgcIghAAIAAAcIgIAAIAAg+IAIAAIAAAbIAhAAIAAgbIAIAAIAAA+gAigAYIAAgIIAIAAIAAAIgAkPAYIAAgwIghAwIgJAAIAAg+IAHAAIAAAyIAigyIAJAAIAAA+gAmLAYIAAgcIghAAIAAAcIgIAAIAAg+IAIAAIAAAbIAhAAIAAgbIAJAAIAAA+gAnEAYIgIgTIgaAAIgHATIgJAAIAYg+IAJAAIAaA+gAndgTIgHATIAWAAIgHgSQgDgIgBgFIgEAMgAoAAYIgLgRIgHgJQgDgCgFAAIAAAcIgIAAIAAg+IAIAAIAAAcQAGAAACgCQADgCADgJIAFgJQABgCADgBQADgDAEAAIAGABIAAAHIgCAAIgCAAQgEAAgCABIgFAJQgCAIgDACQgCACgDABQAGACAGAIIANAVgAAlAVIAMgTIgMgSIAHAAIAOASIgOATgAAVAVIALgTIgLgSIAGAAIAOASIgOATgAo2AVIgNgTIANgSIAGAAIgLASIALATgApHAVIgNgTIANgSIAHAAIgLASIALATg");
	this.shape_2.setTransform(0,-10.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal, new cjs.Rectangle(-82.7,-45,168.2,59.7), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bfQMAAAg+fMAu3AAAMAAAA+fg");
	this.shape.setTransform(300,200,2,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,600,400), null);


(lib.text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t5
	this.instance = new lib.t5();
	this.instance.parent = this;
	this.instance.setTransform(-119.6,-55.4,0.99,0.99);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(224).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,x:-133,y:-58.3,alpha:1},5,cjs.Ease.get(1)).wait(70).to({alpha:0},5).wait(1));

	// t3
	this.instance_1 = new lib.t3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-97.1,-39.4,0.99,0.99);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(149).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,x:-107.9,y:-43.8,alpha:1},5,cjs.Ease.get(1)).wait(67).to({scaleX:0.99,scaleY:0.99,x:-97.1,y:-39.4,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(78));

	// t2
	this.instance_2 = new lib.t2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-108.4,-25.7,0.99,0.99);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(75).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,x:-120.5,y:-28.6,alpha:1},5,cjs.Ease.get(1)).wait(66).to({scaleX:0.99,scaleY:0.99,x:-108.4,y:-25.7,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(153));

	// t1
	this.instance_3 = new lib.t1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-119.9,-23.9,0.99,0.99);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.1,scaleY:1.1,x:-133.3,y:-26.6,alpha:1},4,cjs.Ease.get(1)).wait(68).to({scaleX:0.99,scaleY:0.99,x:-119.9,y:-23.9,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(227));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.9,-23.9,240,48);


(lib.pics2copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// p4
	this.instance = new lib.p4();
	this.instance.parent = this;
	this.instance.setTransform(156,206.7,1,1,0,0,0,156.3,140.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(226).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(66).to({alpha:0},6,cjs.Ease.get(1)).wait(1));

	// p3
	this.instance_1 = new lib.p3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,136,1,1,0,0,0,150,136);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(149).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(69).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(74));

	// p2
	this.instance_2 = new lib.p2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150,126,1,1,0,0,0,150,136);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(74).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).to({_off:true},76).wait(149));

	// p1
	this.instance_3 = new lib.p1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150,46,1,1,0,0,0,150,136);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},6,cjs.Ease.get(1)).to({_off:true},75).wait(224));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-290,400,400);


(lib.pics2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// p4
	this.instance = new lib.p4();
	this.instance.parent = this;
	this.instance.setTransform(160.5,141,1,1,0,0,0,156.3,140.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(226).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(66).to({alpha:0},6,cjs.Ease.get(1)).wait(1));

	// p3
	this.instance_1 = new lib.p3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(210,136,1,1,0,0,0,150,136);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(149).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(69).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(74));

	// p2
	this.instance_2 = new lib.p2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(130,136,1,1,0,0,0,150,136);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(74).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).to({_off:true},76).wait(149));

	// p1
	this.instance_3 = new lib.p1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(110,137,1,1,0,0,0,150,136);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},6,cjs.Ease.get(1)).to({_off:true},75).wait(224));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-199,400,400);


(lib.pics2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// p5
	this.instance = new lib.p5();
	this.instance.parent = this;
	this.instance.setTransform(10,0.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(225).to({_off:false},0).to({x:0,y:0,alpha:1},6,cjs.Ease.get(1)).wait(67).to({x:-10,alpha:0},6,cjs.Ease.get(1)).wait(1));

	// p3
	this.instance_1 = new lib.p3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(10,0.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(150).to({_off:false},0).to({x:0,y:0,alpha:1},6,cjs.Ease.get(1)).to({_off:true},74).wait(75));

	// p2
	this.instance_2 = new lib.p2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(10,0.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(75).to({_off:false},0).to({x:0,y:0,alpha:1},6,cjs.Ease.get(1)).to({_off:true},74).wait(150));

	// p1
	this.instance_3 = new lib.p1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(10,0.7);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:0,y:0,alpha:1},6,cjs.Ease.get(1)).to({_off:true},74).wait(225));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bWqMAAAgtTMAu3AAAMAAAAtTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(305));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-190,-199.3,400,400);


(lib.pics = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3bfQMAAAg+fMAu3AAAMAAAA+fg");

	// Слой 1
	this.instance = new lib.pics2();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pics, new cjs.Rectangle(-150,-199.3,300,399.3), null);


(lib.pics4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A/KPoIAA/PMA+VAAAIAAfPg");
	mask.setTransform(-0.5,0);

	// Слой 1
	this.instance = new lib.pics2copy2();
	this.instance.parent = this;
	this.instance.setTransform(0,-2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pics4, new cjs.Rectangle(-200,-100,399.1,200), null);


(lib.pics3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvnfQMAAAg+fIfPAAMAAAA+fg");

	// Слой 1
	this.instance = new lib.pics2copy();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pics3, new cjs.Rectangle(-100,-199,200,399), null);


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
		var pics3 = this.pics3;
		var pics4 = this.pics4;
		
		function res() {
			var wdt = stage.canvas.width;
			var hgt = stage.canvas.height;
			
			var sc = wdt/300;
			
			bg.scaleX = sc;
			
			
			if (wdt<400){
				pics.x = -1000;
				pics2.x = - 1000;
				pics3.x = - 1000;
				
				let x1 = wdt/2;
				
				pics4.x = x1;
				
				
				text.scaleX = 0.7;
				text.scaleY = 0.7;
				text.x = x1;
				text.y = 50;
				
				logo.scaleX = 0.7;
				logo.scaleY = 0.7;
				logo.x = x1;
				logo.y = 330;
				
				legal.x = x1;
				legal.y = 380;
				legal.scaleX = 0.8;
				legal.scaleY = 0.8;
				
			} else if (wdt<600){
				pics.x = -1000;
				pics2.x = - 1000;
				pics3.x = 100;
				pics4.x = - 1000;
				
				let x1 = (wdt - 200)*0.5 + 200;
				
				text.scaleX = 0.9;
				text.scaleY = 0.9;
				text.x = x1;
				text.y = 150;
				
				logo.scaleX = 0.8;
				logo.scaleY = 0.8;
				logo.x = x1;
				logo.y = 270;
				
				legal.x = x1;
				legal.y = 370;
				legal.scaleX = 0.7;
				legal.scaleY = 0.7;
				
			} else if (wdt<700){
				pics.x = 150;
				pics2.x = - 1000;
				pics3.x = - 1000;
				pics4.x = - 1000;
				
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
				legal.scaleX = 1;
				legal.scaleY = 1;
				
			} else if (wdt<1000){
				pics.x = -1000;
				pics2.x = 200;
				pics3.x = - 1000;
				pics4.x = - 1000;
				
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
				legal.scaleX = 1;
				legal.scaleY = 1;
			} else if (wdt<1300){
				pics.x = wdt/2;
				pics2.x = - 1000;
				pics3.x = - 1000;
				pics4.x = - 1000;
				
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
				legal.scaleX = 1;
				legal.scaleY = 1;
			} else {
				pics2.x = wdt/2;
				pics.x = - 1000;
				pics3.x = - 1000;
				pics4.x = - 1000;
				
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
				legal.scaleX = 1;
				legal.scaleY = 1;
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

	// pics4
	this.pics4 = new lib.pics4();
	this.pics4.parent = this;
	this.pics4.setTransform(150.5,200);

	this.timeline.addTween(cjs.Tween.get(this.pics4).wait(1));

	// pics3
	this.pics3 = new lib.pics3();
	this.pics3.parent = this;
	this.pics3.setTransform(79.1,200);

	this.timeline.addTween(cjs.Tween.get(this.pics3).wait(1));

	// pics2
	this.pics2 = new lib.pics2();
	this.pics2.parent = this;
	this.pics2.setTransform(208,200);

	this.timeline.addTween(cjs.Tween.get(this.pics2).wait(1));

	// pics
	this.pics = new lib.pics();
	this.pics.parent = this;
	this.pics.setTransform(150,200);

	this.timeline.addTween(cjs.Tween.get(this.pics).wait(1));

	// legal
	this.legal = new lib.legal();
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
p.nominalBounds = new cjs.Rectangle(139.1,108,761,493);
// library properties:
lib.properties = {
	width: 600,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/100pcx400_atlas_NP_.jpg", id:"100pcx400_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;