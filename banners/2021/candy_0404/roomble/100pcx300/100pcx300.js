(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"100pcx300_atlas_P_", frames: [[0,0,289,24],[291,0,116,39]]},
		{name:"100pcx300_atlas_NP_", frames: [[0,0,400,400],[402,0,400,400],[402,402,400,400],[0,402,400,400]]}
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
	this.spriteSheet = ss["100pcx300_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["100pcx300_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["100pcx300_atlas_NP_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["100pcx300_atlas_NP_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.legal = function() {
	this.spriteSheet = ss["100pcx300_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["100pcx300_atlas_P_"];
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

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AATA/IAAgxIAAAAIghAxIgbAAIAjguQgQgDgJgJQgJgKAAgQQAAgSAMgMQAMgLAWAAIAkAAIAAB9gAgLgjQgGAEAAALQAAAIAGAFQAFAFALAAIAOAAIAAglIgOAAQgLAAgFAEg");
	this.shape.setTransform(84.6,12.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AArA/IAAhdIghBdIgTAAIgihdIAABdIgXAAIAAh9IAgAAIAiBfIAjhfIAgAAIAAB9g");
	this.shape_1.setTransform(72,12.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghA/IAAh9IBDAAIAAAXIgsAAIAAAdIAqAAIAAAVIgqAAIAAAdIAsAAIAAAXg");
	this.shape_2.setTransform(59.8,12.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgnA/IAAh9IAjAAQAVAAALAKQAMALAAASQAAARgLALQgLAKgWAAIgMAAIAAAwgAgQgHIAOAAQAIAAAGgDQAFgEAAgJQAAgJgFgDQgFgFgJABIgOAAg");
	this.shape_3.setTransform(50.9,12.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgoA/IAAh9IAfAAQAVAAAKAJQALAJAAAPQAAAJgDAFQgEAHgGADQAKAEAFAHQAGAHAAAMQAAASgNAKQgNAKgXAAgAgQAoIAPAAQAJABAEgFQAGgEAAgHQAAgIgFgFQgFgEgJAAIgPAAgAgQgOIALAAQAHAAAEgDQAEgEAAgGQAAgGgEgDQgEgDgHAAIgLAAg");
	this.shape_4.setTransform(41.1,12.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgpA/IAAh9IAXAAIAAAwIASAAQAUAAALALQALAJAAASQAAASgMAKQgMALgSAAgAgSAoIASAAQAJAAAEgEQAFgFAAgHQAAgHgFgFQgFgEgIAAIgSAAg");
	this.shape_5.setTransform(27.4,12.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgLA/IAAhmIgXAAIAAgXIBFAAIAAAXIgXAAIAABmg");
	this.shape_6.setTransform(18.5,12.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAcA/IAAhYIg3BYIgYAAIAAh9IAYAAIAABYIA3hYIAYAAIAAB9g");
	this.shape_7.setTransform(8.7,12.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AArA/IAAhdIghBdIgTAAIghhdIAABdIgYAAIAAh9IAgAAIAiBfIAjhfIAgAAIAAB9g");
	this.shape_8.setTransform(-5.5,12.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AguAvQgTgTAAgcQAAgZATgVQATgTAbAAQAdAAASATQATAUAAAaQAAAbgTAUQgTASgcABQgagBgUgSgAgegeQgMAMAAASQAAASAMAMQANAMARAAQASAAANgMQAMgOAAgQQAAgRgMgNQgNgMgSAAQgRAAgNAMg");
	this.shape_9.setTransform(-20.4,13);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAXA/IAAg1IgtAAIAAA1IgXAAIAAh9IAXAAIAAAzIAtAAIAAgzIAXAAIAAB9g");
	this.shape_10.setTransform(-33.4,12.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AguAvQgTgUAAgbQAAgZATgVQATgTAbAAQAdAAASATQATAUAAAaQAAAcgTATQgTASgcABQgagBgUgSgAgegeQgMAMAAASQAAASAMAMQANAMARAAQASAAANgMQAMgNAAgRQAAgSgMgMQgNgMgSAAQgRAAgNAMg");
	this.shape_11.setTransform(-46.3,13);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AARA/Igmg3IAAA3IgXAAIAAh9IAXAAIAAA2IAmg2IAcAAIgvA+IAvA/g");
	this.shape_12.setTransform(-57.2,12.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AglA4QgPgLgIgRIAbAAQAFAHAJAEQAHAEALgBQAPAAAKgIQALgJADgOIg4AAIAAgWIA4AAQgEgPgKgIQgMgIgNAAQgLAAgHAEQgJADgGAJIgbAAQAIgSAQgLQAPgJAUgBQAaABATASQATASAAAcQAAAcgTATQgTASgaABQgUgBgPgJg");
	this.shape_13.setTransform(-69.5,13);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgqAvQgTgUAAgbQAAgbATgTQATgTAaAAQAVABAOAJQAPAJAJAUIgbAAQgGgJgIgDQgIgEgJAAQgRAAgNAMQgMANAAARQAAAQAMAOQANANARgBQAKABAGgEQAIgCAGgJIAbAAQgIAQgPAMQgPAJgUABQgagBgTgSg");
	this.shape_14.setTransform(-82.6,13);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgqA/IAAh9IBIAAIAAAXIgxAAIAAAaIAUAAQAUgBALALQAKALAAAQQAAARgMALQgMALgRAAgAgTAoIAUAAQAHABAGgFQAFgFAAgHQAAgGgFgFQgFgFgIAAIgUAAg");
	this.shape_15.setTransform(83.1,-10.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgvAuQgTgSAAgcQAAgaATgTQATgUAcABQAdgBASAUQAUATAAAaQgBAcgTASQgTAUgcgBQgbABgUgUgAgdgdQgNAMAAARQAAASANAMQALANASAAQASAAANgNQAMgNAAgRQAAgRgMgMQgNgNgSAAQgSAAgLANg");
	this.shape_16.setTransform(70.5,-10);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgrAuQgSgSAAgcQAAgbATgSQASgUAbABQAVgBAOALQAPAJAJASIgaAAQgHgIgIgDQgIgEgJAAQgSAAgMANQgMANAAAQQAAAQAMAOQAOANAQAAQAKgBAGgDQAIgDAHgIIAbAAQgJAQgPALQgQAKgTAAQgaABgUgUg");
	this.shape_17.setTransform(56.8,-10);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AguAuQgUgSABgcQgBgaAUgTQASgUAcABQAcgBATAUQATATAAAaQAAAcgTASQgTAUgcgBQgbABgTgUgAgdgdQgNAMAAARQAAASANAMQAMANARAAQATAAALgNQANgNAAgRQAAgRgNgMQgMgNgSAAQgRAAgMANg");
	this.shape_18.setTransform(43,-10);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAXA/IAAhmIgtAAIAABmIgXAAIAAh9IBbAAIAAB9g");
	this.shape_19.setTransform(30,-10.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgqAuQgTgSAAgcQAAgbATgSQASgUAbABQAUgBAPALQAPAKAJARIgbAAQgFgHgJgEQgIgEgKAAQgRAAgMANQgMANAAAQQAAARANANQAMAOARgBQAJgBAIgDQAHgDAGgIIAbAAQgHAQgQALQgQAKgTAAQgbABgSgUg");
	this.shape_20.setTransform(17.7,-10);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAcBOIAAhXIg3BXIgXAAIAAh9IAXAAIAABYIA3hYIAXAAIAAB9gAgUg8QgIgHgCgKIAUAAQABAEACACQAEACADAAQAFAAACgCQADgCABgEIATAAQgBAKgIAHQgIAGgNAAQgMAAgIgGg");
	this.shape_21.setTransform(0.7,-11.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAlA/IAAh9IAXAAIAAB9gAg7A/IAAh9IAXAAIAAAxIATAAQATAAALAKQALAIAAATQAAARgMALQgMALgRAAgAgkAoIATAAQAJAAAEgEQAFgFAAgHQgBgIgEgDQgEgFgJAAIgTAAg");
	this.shape_22.setTransform(-12.7,-10.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAXA/IAAg1IgtAAIAAA1IgXAAIAAh9IAXAAIAAAyIAtAAIAAgyIAXAAIAAB9g");
	this.shape_23.setTransform(-25.6,-10.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAUA/IAAgwIgUAAQgJABgKgDQgIgCgEgEQgGgFgCgGQgDgGAAgMIAAgoIAXAAIAAAlQAAAGABAEQABADACABQACACAEACQACABAHAAIAUAAIAAg4IAXAAIAAB9g");
	this.shape_24.setTransform(-36.9,-10.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAcA/IAAhXIg3BXIgXAAIAAh9IAXAAIAABXIA3hXIAXAAIAAB9g");
	this.shape_25.setTransform(-48.3,-10.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAiA/IgihdIghBdIgaAAIAyh9IAUAAIAxB9g");
	this.shape_26.setTransform(-60.7,-10.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgLA/IAAhmIgXAAIAAgXIBFAAIAAAXIgYAAIAABmg");
	this.shape_27.setTransform(-69.7,-10.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AguAuQgTgSAAgcQAAgaATgTQATgUAbABQAdgBASAUQATASAAAbQAAAcgTASQgTAUgcgBQgaABgUgUgAgegdQgMAMAAARQAAASAMAMQANANARAAQATAAAMgNQAMgNAAgRQAAgRgMgMQgMgNgTAAQgRAAgNANg");
	this.shape_28.setTransform(-80,-10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4, new cjs.Rectangle(-88.8,-19.4,177.6,39), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghA/IAAh9IBDAAIAAAXIgrAAIAAAdIApAAIAAAWIgpAAIAAAdIArAAIAAAWg");
	this.shape.setTransform(53.3,34.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAcA/IAAhXIg3BXIgXAAIAAh9IAXAAIAABXIA3hXIAXAAIAAB9g");
	this.shape_1.setTransform(42.5,34.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAXA/IAAg0IgtAAIAAA0IgXAAIAAh9IAXAAIAAAyIAtAAIAAgyIAXAAIAAB9g");
	this.shape_2.setTransform(30.5,34.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AghA/IAAh9IBDAAIAAAXIgsAAIAAAdIAqAAIAAAWIgqAAIAAAdIAsAAIAAAWg");
	this.shape_3.setTransform(20.4,34.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAwA/Igkg3IAAA3IgXAAIAAg3IgkA3IgcAAIAthAIgsg9IAbAAIAkA2IAAg2IAXAAIAAA2IAkg2IAbAAIgsA8IAtBBg");
	this.shape_4.setTransform(7.8,34.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AguAuQgTgSAAgcQAAgbATgSQATgUAbABQAcgBATAUQATATAAAaQAAAbgTATQgTAUgcgBQgbABgTgUgAgegdQgMANAAAQQAAARAMANQANANARAAQASAAANgNQAMgMAAgSQAAgRgMgMQgNgNgSAAQgSAAgMANg");
	this.shape_5.setTransform(-7.3,34.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAiA/IgihcIghBcIgaAAIAyh9IATAAIAyB9g");
	this.shape_6.setTransform(-20,34.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAcA/IAAhXIg3BXIgXAAIAAh9IAXAAIAABXIA3hXIAXAAIAAB9g");
	this.shape_7.setTransform(-32.4,34.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgnA/IAAh9IAjAAQAVABALAKQAMAKAAATQAAAQgLALQgMALgVgBIgMAAIAAAwgAgQgGIAOAAQAJAAAFgFQAFgEAAgHQAAgKgFgDQgFgEgJAAIgOAAg");
	this.shape_8.setTransform(-43.1,34.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAXA/IAAhmIgtAAIAABmIgXAAIAAh9IBbAAIAAB9g");
	this.shape_9.setTransform(-54,34.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgLA/IAAhmIgXAAIAAgXIBFAAIAAAXIgXAAIAABmg");
	this.shape_10.setTransform(94.4,11.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AghA/IAAh9IBDAAIAAAXIgsAAIAAAdIAqAAIAAAVIgqAAIAAAdIAsAAIAAAXg");
	this.shape_11.setTransform(86.5,11.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgnA/IAAh9IAjAAQAVABALAKQAMAKAAASQAAARgLAKQgMAMgVAAIgMAAIAAAvgAgQgGIAOAAQAJAAAFgEQAFgEAAgJQAAgIgFgEQgFgEgJAAIgOAAg");
	this.shape_12.setTransform(77.6,11.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AghA/IAAh9IBDAAIAAAXIgsAAIAAAdIAqAAIAAAVIgqAAIAAAdIAsAAIAAAXg");
	this.shape_13.setTransform(68.1,11.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgqA/IAAh9IBJAAIAAAXIgyAAIAAAZIAUAAQAUAAALAMQAKAKAAARQAAAQgLALQgMALgSAAgAgTAoIAUAAQAIABAFgFQAFgEAAgHQAAgIgFgEQgEgEgJgBIgUAAg");
	this.shape_14.setTransform(58.8,11.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAuBLIAAgYIhaAAIAAAYIgYAAIAAgvIAMAAIAvhmIATAAIAvBmIALAAIAAAvgAgeAcIA9AAIgfhGg");
	this.shape_15.setTransform(46.4,12.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgvAvQgTgUABgbQgBgZATgVQAUgSAbgBQAcABATASQATAUABAaQgBAcgTATQgTATgcAAQgbAAgUgTgAgdgdQgNAMAAARQAAASANANQAMAMARAAQATAAALgNQANgMAAgSQAAgRgNgMQgLgNgTAAQgSAAgLANg");
	this.shape_16.setTransform(32.3,11.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAXA/IAAhmIgtAAIAABmIgXAAIAAh9IBbAAIAAB9g");
	this.shape_17.setTransform(19.4,11.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgYA/IAQggIgxhdIAdAAIAfBCIAehCIAZAAIg5B9g");
	this.shape_18.setTransform(3.7,11.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAsA/IAAhdIgiBdIgTAAIgihdIAABdIgWAAIAAh9IAfAAIAiBgIAjhgIAfAAIAAB9g");
	this.shape_19.setTransform(-10.1,11.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AArA/IAAhdIghBdIgTAAIgihdIAABdIgWAAIAAh9IAfAAIAiBgIAjhgIAgAAIAAB9g");
	this.shape_20.setTransform(-25.7,11.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAkA/IgNghIgtAAIgNAhIgaAAIA1h9IARAAIA1B9gAgNAIIAcAAIgPgkg");
	this.shape_21.setTransform(-39.9,11.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgnA/IAAh9IAjAAQAVABALAKQAMAKAAASQAAARgLAKQgMAMgVAAIgMAAIAAAvgAgQgGIAOAAQAJAAAFgEQAFgEAAgJQAAgIgFgEQgFgEgJAAIgOAAg");
	this.shape_22.setTransform(-49.1,11.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgfA/IAAh9IA+AAIAAAXIgnAAIAABmg");
	this.shape_23.setTransform(-57.4,11.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AguAvQgUgUABgbQAAgaATgUQATgSAbgBQAcABATASQATAVAAAZQAAAcgTATQgTATgcAAQgbAAgTgTgAgegdQgMAMAAARQAAASAMANQANAMARAAQASAAAMgNQANgMAAgSQAAgRgNgMQgMgNgSAAQgSAAgMANg");
	this.shape_24.setTransform(-68.9,11.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgnA/IAAh9IAjAAQAVABALAKQAMAKAAASQAAASgMAJQgMAMgUAAIgMAAIAAAvgAgQgGIAOAAQAJAAAEgEQAFgEABgJQAAgIgGgEQgEgEgJAAIgOAAg");
	this.shape_25.setTransform(-80.4,11.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAXA/IAAhmIgtAAIAABmIgXAAIAAh9IBbAAIAAB9g");
	this.shape_26.setTransform(-91.4,11.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgKAMQAFAAACgDQADgCAAgFIAAgCIgKAAIAAgWIAVAAIAAAVQAAAHgBAEQgCAEgDADQgDADgDABIgJACg");
	this.shape_27.setTransform(111.1,-5.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AghA/IAAh9IBDAAIAAAXIgrAAIAAAdIApAAIAAAWIgpAAIAAAdIArAAIAAAWg");
	this.shape_28.setTransform(104.4,-11.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgpA/IAAh9IAXAAIAAAxIASAAQAUAAALAKQALAKAAASQAAAQgMALQgLALgTAAgAgSApIASAAQAIgBAGgEQAEgEAAgHQAAgIgEgEQgGgFgIAAIgSAAg");
	this.shape_29.setTransform(95.4,-11.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAiA/IgihcIghBcIgaAAIAyh9IATAAIAyB9g");
	this.shape_30.setTransform(83.9,-11.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AghA/IAAh9IBDAAIAAAXIgsAAIAAAdIAqAAIAAAWIgqAAIAAAdIAsAAIAAAWg");
	this.shape_31.setTransform(73.5,-11.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgqA/IAAh9IBJAAIAAAXIgxAAIAAAaIATAAQAVAAAKALQALAKAAARQAAAQgMALQgLALgTAAgAgSApIATAAQAIgBAFgEQAFgEAAgHQAAgHgEgFQgFgEgJgBIgTAAg");
	this.shape_32.setTransform(64.2,-11.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AghA/IAAh9IBDAAIAAAXIgrAAIAAAdIApAAIAAAWIgpAAIAAAdIArAAIAAAWg");
	this.shape_33.setTransform(50.5,-11.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgLA/IAAhmIgXAAIAAgXIBFAAIAAAXIgXAAIAABmg");
	this.shape_34.setTransform(42.4,-11.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAcBOIAAhXIg3BXIgXAAIAAh9IAXAAIAABYIA3hYIAXAAIAAB9gAgUg8QgIgGgCgLIAUAAQAAADADADQADACAEAAQAFAAADgCQADgCAAgEIAUAAQgCALgIAGQgJAHgMAAQgLAAgJgHg");
	this.shape_35.setTransform(32.5,-13.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgYA/IAPggIgwhdIAcAAIAgBCIAdhCIAaAAIg5B9g");
	this.shape_36.setTransform(20.3,-11.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgnA/IAAh9IAjAAQAVABALAKQAMAKAAATQAAAQgLALQgMALgVgBIgMAAIAAAwgAgQgGIAOAAQAJAAAFgFQAFgDAAgIQAAgKgFgDQgFgEgJAAIgOAAg");
	this.shape_37.setTransform(10,-11.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAcA/IAAhYIg3BYIgXAAIAAh9IAXAAIAABXIA3hXIAXAAIAAB9g");
	this.shape_38.setTransform(-1.5,-11.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgLBHIAAgSQgZAAgPgPQgQgPAAgXQAAgXAQgPQAPgQAZAAIAAgQIAXAAIAAAQQAYAAAQAQQAQAPAAAXQAAAXgQAPQgQAPgYAAIAAASgAAMAfQAPAAAJgJQAJgKAAgMQAAgMgJgLQgJgIgPgBgAgjgXQgJAKAAANQAAAMAJAKQAJAJAPAAIAAg/QgPABgJAIg");
	this.shape_39.setTransform(-15.1,-11.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAkA/IgNggIgtAAIgNAgIgaAAIA1h9IARAAIA1B9gAgNAIIAcAAIgPgkg");
	this.shape_40.setTransform(-28.1,-11.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgnA/IAAh9IAjAAQAVABALAKQAMAKAAATQAAAQgMALQgMALgUgBIgMAAIAAAwgAgQgGIAOAAQAIAAAFgFQAFgDABgIQAAgJgGgEQgEgEgJAAIgOAAg");
	this.shape_41.setTransform(-37.3,-11.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgeA/IAAh9IA9AAIAAAXIgmAAIAABmg");
	this.shape_42.setTransform(-45.7,-11.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AguAvQgUgTABgcQAAgbATgSQATgUAbABQAcgBATAUQATATAAAaQAAAcgTATQgTASgcAAQgbAAgTgSgAgegeQgMAOAAAQQAAARAMANQANANARAAQASAAANgNQAMgMAAgSQAAgRgMgNQgNgMgSAAQgSAAgMAMg");
	this.shape_43.setTransform(-57.1,-11.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgKA/IAAhmIgYAAIAAgXIBFAAIAAAXIgYAAIAABmg");
	this.shape_44.setTransform(-67.4,-11.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AguAvQgUgTABgcQAAgbATgSQATgUAbABQAcgBATAUQATATAAAaQAAAcgTATQgTASgcAAQgbAAgTgSgAgegeQgMANAAARQAAASAMAMQANANARAAQASAAAMgNQANgMAAgSQAAgRgNgNQgMgMgSAAQgSAAgMAMg");
	this.shape_45.setTransform(-77.7,-11.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgLBHIAAgSQgZAAgPgPQgQgOAAgYQAAgYAQgOQAPgQAZAAIAAgQIAXAAIAAAQQAYAAAQAQQAQAPAAAXQAAAXgQAPQgQAPgYAAIAAASgAAMAfQAPAAAIgJQAKgLAAgLQAAgMgKgLQgIgIgPgBgAgjgXQgJAKAAANQAAAMAJAKQAJAJAPAAIAAg/QgPABgJAIg");
	this.shape_46.setTransform(-92.1,-11.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgqAvQgTgTAAgcQAAgbATgSQAUgUAaABQATAAAQAKQAPAKAIASIgaAAQgFgHgKgFQgIgEgJAAQgRAAgNANQgMANAAAQQAAARANANQALANASAAQAHAAAKgEQAJgEAEgHIAbAAQgJASgOAJQgPALgUgBQgaAAgTgSg");
	this.shape_47.setTransform(-106,-11.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AguAuQgTgSAAgcQAAgZATgVQAUgSAaAAQAcAAATASQATAUAAAaQAAAcgTASQgTAUgcAAQgaAAgUgUgAgegdQgMANAAAQQAAASAMANQAOAMAQAAQASAAANgNQAMgMAAgSQAAgRgMgMQgNgNgSAAQgRAAgNANg");
	this.shape_48.setTransform(28.1,-34.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgLA/IAAhmIgXAAIAAgXIBFAAIAAAXIgXAAIAABmg");
	this.shape_49.setTransform(17.8,-34.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgqAuQgTgSAAgcQAAgaATgUQATgSAbAAQATgBAPAKQARAMAHAQIgbAAQgFgGgIgFQgJgEgJAAQgRAAgNANQgMANAAAQQAAASAMAMQANANARAAQAIAAAJgDQAIgEAFgIIAbAAQgIASgPAJQgPALgUAAQgaAAgTgUg");
	this.shape_50.setTransform(7.7,-34.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AguAuQgUgSABgcQAAgaATgUQATgSAbAAQAcAAATASQATAVAAAZQAAAcgTASQgTAUgcAAQgbAAgTgUgAgegdQgMAMAAARQAAASAMANQANAMARAAQASAAAMgNQANgMAAgSQAAgRgNgMQgMgNgSAAQgSAAgMANg");
	this.shape_51.setTransform(-6.2,-34.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgnA/IAAh9IAjAAQAVABAMAKQALALAAARQAAARgLAKQgNALgUAAIgMAAIAAAwgAgQgGIAOAAQAIAAAGgFQAEgDABgJQAAgIgFgEQgFgEgJAAIgOAAg");
	this.shape_52.setTransform(-17.7,-34.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAXA/IAAhmIgtAAIAABmIgXAAIAAh9IBbAAIAAB9g");
	this.shape_53.setTransform(-28.7,-34.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-112.2,-41,224.5,82.1), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAcA/IAAhYIg3BYIgXAAIAAh9IAXAAIAABYIA3hYIAXAAIAAB9g");
	this.shape.setTransform(100.1,11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AARA/Igmg3IAAA3IgXAAIAAh9IAXAAIAAA2IAmg2IAcAAIguA+IAuA/g");
	this.shape_1.setTransform(88.9,11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeA2QgNgLACgTIAXAAQAAAIAFAFQAFAFAIAAQAJAAAFgEQAGgEAAgIQAAgHgFgFQgFgFgIAAIgLAAIAAgVIAJAAQAIAAADgEQAFgDAAgHQAAgHgEgEQgEgEgHAAQgGAAgEADQgFAEAAAFIgXAAQAAgPAKgKQAKgKASAAQARAAAKAJQALAKAAAQQAAAJgFAHQgGAHgHAEQALACAFAIQAGAJAAALQAAARgMAKQgMAKgTAAQgTAAgLgLg");
	this.shape_2.setTransform(78.6,11.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYA/IAPggIgwhdIAcAAIAgBCIAehCIAZAAIg5B9g");
	this.shape_3.setTransform(68.5,11.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnA/IAAh9IAjAAQAVAAALAKQAMALAAASQAAARgLALQgLAKgWAAIgMAAIAAAwgAgQgHIAOAAQAIAAAGgDQAFgFAAgIQAAgJgFgDQgFgFgJABIgOAAg");
	this.shape_4.setTransform(58.1,11.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeA/IAAh9IA9AAIAAAXIgmAAIAABmg");
	this.shape_5.setTransform(49.8,11.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAkA/IgNghIgtAAIgNAhIgaAAIA1h9IARAAIA1B9gAgNAIIAbAAIgOgkg");
	this.shape_6.setTransform(39.2,11.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgeA2QgNgLACgTIAXAAQAAAIAFAFQAFAFAIAAQAJAAAFgEQAGgEAAgIQAAgHgFgFQgFgFgIAAIgLAAIAAgVIAJAAQAIAAADgEQAFgDAAgHQAAgHgEgEQgEgEgHAAQgGAAgEADQgFAEAAAFIgXAAQAAgPAKgKQAKgKASAAQARAAAKAJQALAKAAAQQAAAJgFAHQgGAHgHAEQALACAFAIQAGAJAAALQAAARgMAKQgMAKgTAAQgTAAgLgLg");
	this.shape_7.setTransform(28.2,11.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAcBOIAAhXIg3BXIgXAAIAAh9IAXAAIAABYIA3hYIAXAAIAAB9gAgUg8QgIgHgCgKIAUAAQABAEACACQAEACADAAQAFAAACgCQADgCABgEIATAAQgBAKgIAHQgIAGgNAAQgMAAgIgGg");
	this.shape_8.setTransform(13.1,10.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgvAvQgSgUgBgbQABgZASgVQATgTAcAAQAdAAASATQAUAUAAAaQAAAcgUATQgTASgcABQgagBgVgSgAgdgeQgNAMAAASQAAASANAMQALAMASAAQASAAANgMQAMgNAAgRQAAgSgMgMQgNgMgSAAQgSAAgLAMg");
	this.shape_9.setTransform(-0.3,11.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAXA/IAAg1IgtAAIAAA1IgXAAIAAh9IAXAAIAAAzIAtAAIAAgzIAXAAIAAB9g");
	this.shape_10.setTransform(-13.2,11.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgpA/IAAh9IBHAAIAAAXIgxAAIAAAZIATAAQAWAAAKAMQAKAKAAAQQAAASgMAKQgLALgTAAgAgTAoIAUAAQAHABAGgFQAFgFAAgHQAAgHgEgEQgHgFgHAAIgUAAg");
	this.shape_11.setTransform(-23.8,11.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AguAvQgUgUAAgbQAAgZAUgVQASgTAcAAQAcAAATATQAUAUgBAaQABAcgUATQgTASgcABQgbgBgTgSgAgegeQgMAMAAASQAAASAMAMQAMAMASAAQASAAAMgMQANgNAAgRQAAgSgNgMQgMgMgSAAQgSAAgMAMg");
	this.shape_12.setTransform(-36.3,11.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAtBLIAAgYIhZAAIAAAYIgYAAIAAgvIAMAAIAvhmIATAAIAvBmIAMAAIAAAvgAgeAcIA9AAIgfhFg");
	this.shape_13.setTransform(-50.5,13);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgYA/IAPggIgwhdIAdAAIAfBCIAehCIAZAAIg5B9g");
	this.shape_14.setTransform(-60.8,11.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AATA/IAAgxIghAxIgbAAIAiguQgPgDgJgJQgJgKAAgQQAAgSAMgMQALgLAXAAIAkAAIAAB9gAgLgjQgGAFAAAKQAAAIAGAFQAFAFALAAIAOAAIAAglIgOAAQgLAAgFAEg");
	this.shape_15.setTransform(-76.1,11.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAiA/IgihcIghBcIgaAAIAyh9IATAAIAyB9g");
	this.shape_16.setTransform(-87,11.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAtBLIAAgYIhZAAIAAAYIgYAAIAAgvIANAAIAuhmIATAAIAvBmIAMAAIAAAvgAgeAcIA9AAIgfhFg");
	this.shape_17.setTransform(-100.1,13);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AARA/Iglg4IAAA4IgYAAIAAh9IAYAAIAAA3IAlg3IAcAAIguA+IAuA/g");
	this.shape_18.setTransform(116.2,-11.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgVAyQgRgRgFgXIgUAAIAAA0IgXAAIAAh8IAXAAIAAAyIAVAAQAEgZATgOQASgOAXABQAbgBATAUQATATAAAaQAAAcgTASQgUAUgagBQgYAAgTgPgAgIgdQgMAMAAARQAAARAMANQAMANARAAQARAAANgNQAMgNAAgRQAAgRgMgMQgMgNgRAAQgTAAgLANg");
	this.shape_19.setTransform(101.3,-11.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAiA/IgihdIghBdIgaAAIAyh9IAUAAIAxB9g");
	this.shape_20.setTransform(85.3,-11.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAcBOIAAhXIg3BXIgYAAIAAh9IAYAAIAABYIA3hYIAXAAIAAB9gAgUg8QgIgHgCgKIAUAAQABAEACACQAEACADAAQAFAAADgCQACgCABgEIATAAQgBAKgJAHQgIAGgMAAQgMAAgIgGg");
	this.shape_21.setTransform(69,-12.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAcA/IAAhXIg3BXIgXAAIAAh9IAXAAIAABXIA3hXIAXAAIAAB9g");
	this.shape_22.setTransform(56.4,-11.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AASA/Igng4IAAA4IgXAAIAAh9IAXAAIAAA3IAng3IAbAAIguA+IAuA/g");
	this.shape_23.setTransform(45.2,-11.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AguAuQgUgSABgcQAAgbATgSQASgUAcABQAcgBATAUQATATAAAaQAAAcgTASQgTAUgcgBQgbABgTgUgAgegdQgMAMAAARQAAASAMAMQAMANASAAQASAAAMgNQANgNAAgRQAAgRgNgMQgMgNgSAAQgSAAgMANg");
	this.shape_24.setTransform(32.4,-11.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgnA/IAAh9IAjAAQAUAAAMALQAMAKAAATQAAAQgMALQgLAKgVAAIgMAAIAAAwgAgQgGIAOAAQAIAAAFgFQAFgDABgJQAAgIgGgEQgEgEgJAAIgOAAg");
	this.shape_25.setTransform(20.9,-11.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAcA/IAAhXIg3BXIgXAAIAAh9IAXAAIAABXIA3hXIAXAAIAAB9g");
	this.shape_26.setTransform(9.4,-11.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhJA/IAAh9IAYAAIAABmIAmAAIAAhmIAWAAIAABmIAnAAIAAhmIAXAAIAAB9g");
	this.shape_27.setTransform(-5.3,-11.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAcA/IAAhXIg3BXIgYAAIAAh9IAYAAIAABXIA3hXIAYAAIAAB9g");
	this.shape_28.setTransform(-24.1,-11.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAcBOIAAhXIg3BXIgYAAIAAh9IAYAAIAABYIA3hYIAYAAIAAB9gAgUg8QgIgHgBgKIATAAQAAADADADQADACAEAAQAFAAADgCQACgCABgEIATAAQgBAKgJAHQgIAGgMAAQgMAAgIgGg");
	this.shape_29.setTransform(-40.6,-12.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAcA/IAAhXIg3BXIgXAAIAAh9IAXAAIAABXIA3hXIAXAAIAAB9g");
	this.shape_30.setTransform(-53.2,-11.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AARA/Igmg4IAAA4IgXAAIAAh9IAXAAIAAA3IAmg3IAcAAIguA+IAuA/g");
	this.shape_31.setTransform(-64.4,-11.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AguAuQgTgSAAgcQAAgaATgTQATgUAbABQAdgBASAUQATATAAAaQAAAcgTASQgTAUgcgBQgbABgTgUgAgegdQgMAMAAARQAAASAMAMQAMANASAAQASAAAMgNQANgNAAgRQAAgRgNgMQgMgNgSAAQgSAAgMANg");
	this.shape_32.setTransform(-77.2,-11.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgqAuQgTgSAAgcQAAgbATgSQATgUAaABQAVgBAOALQAPAJAJASIgaAAQgHgIgIgDQgJgEgIAAQgSAAgLANQgNAMAAARQAAAQANAOQAMANARAAQAJgBAIgDQAHgDAGgIIAbAAQgIAQgPALQgQAKgTAAQgaABgTgUg");
	this.shape_33.setTransform(-90.9,-11.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAlA/IAAh9IAXAAIAAB9gAg7A/IAAh9IAYAAIAAAxIASAAQATAAAKAKQALAIAAATQAAASgLAKQgMALgRAAgAgjAoIASAAQAJAAAEgEQAEgFAAgHQAAgHgEgEQgFgFgIAAIgSAAg");
	this.shape_34.setTransform(-104.7,-11.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgoA/IAAh9IAeAAQAWAAAKAJQALAJAAAPQAAAIgEAHQgEAGgGADQALAEAFAGQAGAJAAAKQAAATgNAKQgNAKgXAAgAgRAoIAQAAQAIABAFgFQAGgEAAgIQAAgHgGgEQgFgFgIAAIgQAAgAgRgNIALAAQAIgBAEgDQAEgEAAgGQAAgGgEgDQgEgDgIAAIgLAAg");
	this.shape_35.setTransform(-116.5,-11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-120.6,-20.5,241.3,41), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLA/IAAhnIgXAAIAAgWIBFAAIAAAWIgXAAIAABng");
	this.shape.setTransform(66.3,23);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXA/IAOggIgwhdIAdAAIAgBCIAdhCIAZAAIg5B9g");
	this.shape_1.setTransform(56.7,23);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAXA/IAAg1IgtAAIAAA1IgXAAIAAh9IAXAAIAAAyIAtAAIAAgyIAXAAIAAB9g");
	this.shape_2.setTransform(45,23);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAcA/IAAhXIg3BXIgYAAIAAh9IAYAAIAABXIA3hXIAXAAIAAB9g");
	this.shape_3.setTransform(32.9,23);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AArA/IAAheIghBeIgTAAIghheIAABeIgYAAIAAh9IAgAAIAiBfIAjhfIAgAAIAAB9g");
	this.shape_4.setTransform(18.8,23);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbBAIAcgrIgDABIgEAAQgPAAgLgMQgLgKABgTQgBgTAMgMQANgNASAAQATAAAMANQAMANAAASQAAAJgCAGQgBAEgIANIghAzgAgOgkQgGAGAAAKQAAALAGAFQAGAFAIAAQAKAAAFgFQAGgGAAgKQAAgKgGgGQgFgFgKgBQgJAAgFAGg");
	this.shape_5.setTransform(2.2,22.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdA1QgMgMgBgRIAWAAQACAJAFAEQAGAGAHAAQAJAAAGgHQAGgFAAgLQAAgKgGgFQgGgGgJAAQgEAAgFABQgFAEgCADIgUgGIALhBIA5AAIgBAWIgnAAIgEAXIAIgCIAHgBQASAAALAMQALANAAASQAAATgMAMQgNAMgSAAQgRAAgMgLg");
	this.shape_6.setTransform(-7.5,23.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AghA/IAAh9IBDAAIAAAWIgrAAIAAAdIApAAIAAAXIgpAAIAAAcIArAAIAAAXg");
	this.shape_7.setTransform(-20.3,23);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AghA/IAAh9IBDAAIAAAWIgrAAIAAAdIApAAIAAAXIgpAAIAAAcIArAAIAAAXg");
	this.shape_8.setTransform(-29.2,23);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAXA/IAAg1IgtAAIAAA1IgXAAIAAh9IAXAAIAAAyIAtAAIAAgyIAXAAIAAB9g");
	this.shape_9.setTransform(-39.5,23);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AghA/IAAh9IBDAAIAAAWIgrAAIAAAdIApAAIAAAXIgpAAIAAAcIArAAIAAAXg");
	this.shape_10.setTransform(-49.6,23);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AArA/IAAheIghBeIgTAAIghheIAABeIgYAAIAAh9IAgAAIAiBfIAjhfIAgAAIAAB9g");
	this.shape_11.setTransform(-61.9,23);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgVAxQgSgQgDgXIgVAAIAAA1IgXAAIAAh9IAXAAIAAAxIAVAAQAFgXASgOQASgPAXAAQAbAAATATQATAVAAAZQAAAbgTAUQgTASgbABQgYgBgTgQgAgIgeQgMAMAAASQAAARAMANQAMAMASAAQARABAMgNQANgNAAgRQAAgSgNgMQgMgMgRAAQgSAAgMAMg");
	this.shape_12.setTransform(99.7,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgpA/IAAh9IAYAAIAAAwIARAAQAUAAALALQALAJAAASQAAASgMAKQgMALgSAAgAgRAoIARAAQAJAAAFgEQAFgFAAgHQAAgHgGgFQgEgEgJAAIgRAAg");
	this.shape_13.setTransform(85.3,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgLA/IAAhmIgXAAIAAgXIBFAAIAAAXIgYAAIAABmg");
	this.shape_14.setTransform(76.4,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgqAvQgTgUAAgbQAAgaATgUQASgTAcAAQAUABAPAJQAPAKAIATIgbAAQgGgJgHgDQgIgEgKAAQgSAAgMAMQgMANAAARQAAARANANQANANAQgBQAKABAHgEQAHgCAGgJIAbAAQgHARgPALQgRAJgSABQgbgBgTgSg");
	this.shape_15.setTransform(66.3,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AguAvQgTgTAAgcQAAgaATgUQASgTAcAAQAcAAATATQATAVAAAZQAAAbgTAUQgTASgcABQgbgBgTgSgAgegeQgMANAAARQAAARAMANQAMAMASAAQASAAANgMQAMgNAAgRQAAgSgMgMQgNgMgSAAQgSAAgMAMg");
	this.shape_16.setTransform(52.4,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAXA/IAAg1IgtAAIAAA1IgXAAIAAh9IAXAAIAAAzIAtAAIAAgzIAXAAIAAB9g");
	this.shape_17.setTransform(39.5,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgpA/IAAh9IAXAAIAAAwIASAAQAUAAALALQALAJAAASQAAASgMAKQgMALgSAAgAgSAoIASAAQAJAAAEgEQAGgFAAgHQgBgHgFgFQgFgEgIAAIgSAAg");
	this.shape_18.setTransform(29.2,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAjA/IgjhcIghBcIgaAAIAyh9IATAAIAyB9g");
	this.shape_19.setTransform(17.7,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AghA/IAAh9IBDAAIAAAXIgrAAIAAAdIApAAIAAAVIgpAAIAAAdIArAAIAAAXg");
	this.shape_20.setTransform(7.3,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgLA/IAAhmIgXAAIAAgXIBFAAIAAAXIgXAAIAABmg");
	this.shape_21.setTransform(-0.8,0);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAcA/IAAhYIg3BYIgXAAIAAh9IAXAAIAABYIA3hYIAXAAIAAB9g");
	this.shape_22.setTransform(-10.7,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAwA/Igkg3IAAA3IgXAAIAAg3IgkA3IgcAAIAthAIgsg9IAbAAIAkA2IAAg2IAXAAIAAA2IAkg2IAbAAIgsA9IAtBAg");
	this.shape_23.setTransform(-25,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAjA/IgjhcIghBcIgaAAIAyh9IATAAIAyB9g");
	this.shape_24.setTransform(-39.1,0);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AguAvQgTgTAAgcQAAgZATgVQASgTAcAAQAcAAATATQATAVAAAZQAAAbgTAUQgTASgcABQgagBgUgSgAgegeQgMANAAARQAAARAMANQANAMARAAQASAAANgMQAMgOAAgQQAAgRgMgNQgNgMgSAAQgRAAgNAMg");
	this.shape_25.setTransform(-52.3,0);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAuBLIAAgYIhaAAIAAAYIgYAAIAAgvIANAAIAuhmIAUAAIAuBmIAMAAIAAAvgAgeAcIA9AAIgfhFg");
	this.shape_26.setTransform(-66.5,1.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgvAvQgSgUAAgbQAAgZASgVQATgTAcAAQAdAAASATQATAUABAaQgBAcgTATQgTASgcABQgbgBgUgSgAgdgeQgNAMAAASQAAASANAMQALAMASAAQASAAANgMQAMgNAAgRQAAgSgMgMQgNgMgSAAQgSAAgLAMg");
	this.shape_27.setTransform(-80.5,0);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgnA/IAAh9IAjAAQAVAAALAKQAMALAAASQAAARgLALQgLAKgWAAIgMAAIAAAwgAgQgHIAOAAQAIAAAGgDQAFgEAAgJQAAgJgFgDQgFgFgJABIgOAAg");
	this.shape_28.setTransform(-92.1,0);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAXA/IAAhmIgtAAIAABmIgXAAIAAh9IBbAAIAAB9g");
	this.shape_29.setTransform(-103,0);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AArA/IAAheIghBeIgTAAIghheIAABeIgYAAIAAh9IAgAAIAiBfIAjhfIAgAAIAAB9g");
	this.shape_30.setTransform(119.9,-23);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAsA/IAAheIgiBeIgTAAIghheIAABeIgYAAIAAh9IAgAAIAiBfIAjhfIAgAAIAAB9g");
	this.shape_31.setTransform(104.2,-23);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAkA/IgNggIgtAAIgNAgIgaAAIA1h9IARAAIA1B9gAgNAHIAbAAIgOgjg");
	this.shape_32.setTransform(90.1,-23);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgnA/IAAh9IAjAAQAVAAALALQAMAKAAATQAAAQgLALQgLAKgWAAIgMAAIAAAwgAgQgGIAOAAQAIAAAGgFQAFgDAAgJQAAgIgFgEQgFgEgJAAIgOAAg");
	this.shape_33.setTransform(80.9,-23);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgeA/IAAh9IA9AAIAAAXIgmAAIAABmg");
	this.shape_34.setTransform(72.5,-23);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AguAuQgUgSABgcQgBgaAUgTQASgUAcABQAcgBATAUQATATABAaQgBAcgTASQgTAUgcgBQgbABgTgUgAgdgdQgNAMAAARQAAASANAMQALANASAAQASAAANgNQAMgNAAgRQAAgRgMgMQgNgNgSAAQgSAAgLANg");
	this.shape_35.setTransform(61.1,-23);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgnA/IAAh9IAjAAQAVAAAMALQALAKAAATQAAAQgLALQgLAKgWAAIgMAAIAAAwgAgQgGIAOAAQAIAAAGgFQAFgDAAgJQAAgIgFgEQgFgEgJAAIgOAAg");
	this.shape_36.setTransform(49.6,-23);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAXA/IAAhmIgtAAIAABmIgXAAIAAh9IBbAAIAAB9g");
	this.shape_37.setTransform(38.6,-23);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAeA/IgegrIgdArIgbAAIArg/Igrg+IAbAAIAdArIAegrIAbAAIgrA+IArA/g");
	this.shape_38.setTransform(23.1,-23);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAlA/IAAh9IAXAAIAAB9gAg7A/IAAh9IAYAAIAAAxIASAAQATAAALAKQALAIAAATQAAASgMAKQgMALgRAAgAgjAoIASAAQAJAAAFgEQAEgFAAgHQAAgHgFgEQgEgFgJAAIgSAAg");
	this.shape_39.setTransform(10.2,-23);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgnA/IAAh9IAjAAQAUAAAMALQAMAKAAATQAAAQgMALQgLAKgVAAIgMAAIAAAwgAgQgGIAOAAQAIAAAFgFQAFgDABgJQAAgIgGgEQgEgEgJAAIgOAAg");
	this.shape_40.setTransform(-1.3,-23);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgLA/IAAhmIgXAAIAAgXIBFAAIAAAXIgXAAIAABmg");
	this.shape_41.setTransform(-10,-23);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgqAuQgTgSAAgcQAAgbATgSQASgUAcABQAUgBAPALQAOAJAJASIgbAAQgGgHgHgEQgIgEgKAAQgSAAgMANQgMANAAAQQAAARAMANQANANARAAQAJgBAIgDQAHgDAGgIIAbAAQgHAQgQALQgQAKgSAAQgbABgTgUg");
	this.shape_42.setTransform(-20.1,-23);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAlA/IAAh9IAXAAIAAB9gAg7A/IAAh9IAXAAIAAAxIATAAQATAAALAKQALAIAAATQAAARgMALQgMALgRAAgAgkAoIATAAQAJAAAEgEQAFgFAAgHQgBgIgEgDQgEgFgJAAIgTAAg");
	this.shape_43.setTransform(-34,-23);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgqA/IAAh9IBJAAIAAAXIgxAAIAAAaIATAAQAWgBAJALQAKALAAAQQAAARgLALQgMALgSAAgAgSAoIATAAQAHAAAGgEQAFgFAAgHQAAgGgFgFQgEgFgJAAIgTAAg");
	this.shape_44.setTransform(-45.9,-23);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgbBAIAcgrIgDABIgDAAQgRAAgKgMQgLgLAAgSQAAgTAMgMQAMgNATAAQAUAAALANQANANAAASQAAAHgDAJQgCAGgHALIghAygAgOgkQgGAGAAAKQAAAKAGAHQAGAEAIAAQAJAAAGgFQAGgFAAgLQAAgKgGgGQgFgFgKgBQgJAAgFAGg");
	this.shape_45.setTransform(-60.1,-23.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAeA/IgegrIgdArIgbAAIAsg/Igsg+IAbAAIAdArIAegrIAbAAIgrA+IArA/g");
	this.shape_46.setTransform(-74.6,-23);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAlA/IAAh9IAXAAIAAB9gAg7A/IAAh9IAYAAIAAAxIASAAQATAAALAKQALAIAAATQAAASgMAKQgMALgRAAgAgjAoIASAAQAJAAAEgEQAFgFAAgHQgBgIgEgDQgEgFgJAAIgSAAg");
	this.shape_47.setTransform(-87.5,-23);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAiA/IgihdIghBdIgaAAIAyh9IATAAIAyB9g");
	this.shape_48.setTransform(-100.8,-23);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AghA/IAAh9IBDAAIAAAXIgrAAIAAAcIApAAIAAAXIgpAAIAAAcIArAAIAAAXg");
	this.shape_49.setTransform(-111.2,-23);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAeBLIAAgYIhTAAIAAh9IAYAAIAABmIAtAAIAAhmIAXAAIAABmIAOAAIAAAvg");
	this.shape_50.setTransform(-121.1,-21.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-126.5,-29.5,253.1,59.1), null);


(lib.six = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag4ArQgGgCgEgDQgFgGgCgIQgDgIAAgLQAAgLACgIQADgJAFgIQAFgGAJgDQAIgEAKgBIAGABIAFABIAAALIgBAAIgEgBIgHgBQgNAAgHAHQgIAIgBAOIAKgFQAEgBAHAAIAJABQAFABAEADQAFADADAFQADAGAAAHQAAANgJAJQgJAJgNAAQgGgBgFgCgAg3gBIgJADIAAACIAAADQAAAKACAGQABAEAEAEQACADAEAAQADACADAAQAJAAAFgFQAFgFAAgLQAAgFgCgEQgCgDgDgCQgDgCgDAAIgHgBIgJABgAAjAqIAAggIgfAAIAAgJIAfAAIAAggIAKAAIAAAgIAgAAIAAAJIggAAIAAAgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.six, new cjs.Rectangle(-7.7,-4.5,15.5,9.1), null);


(lib.rapido = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-58,-19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.rapido, new cjs.Rectangle(-58,-19.5,116,39), null);


(lib.p4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A6Ga4QlAlHFAlrIHMAAMAAAgq9MAlBAAAMAAAAq9IISAAQEcFHkcFrg");
	mask.setTransform(192,208.9);

	// Слой_1
	this.instance = new lib._4();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("A/PfQMAAAg+fMA+fAAAMAAAA+fg");
	this.shape.setTransform(200,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.p4, new cjs.Rectangle(0,0,400,400), null);


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


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AvwCQQhJhCArhiQAmhYB4gzQCHg4DZAAQAwABAsAFIA5AIIAWAFIgfA3QhEgTg5AAQhuAAhaAgQh6AsgTBWQgLA0AlAuQAxA7BpgEQAigCBAgWQBOgbAtgjIBuhgIAHgFQAIgGAHgDQAOgGARAAIB2AAIAmCjIBKihICDAAIBLB8IA4h8IB3AAIhpDjIh6AAIhPiDIg7CDIhLAAIAAABIiNAAIgFgoIiBAAIgrAlIhTAAQhiAkh/AAQi4AAhPhIgAlZBhIBLgCIgGhAgAKkDLIBMhLIhMitIB1AAIAhBdIBghfICFAAIjmDmQgMAMgIADIgcAFgAG4C2IjBAAIBpjjIDBAAQBcAAAhAsQAcAjgVAtQgTAqgxAbQhAAihmAAIgDAAgAGSB9IAiAAQAoAAAegJQAxgPAKglQAIgfgfgNQgUgJgjAAIgiAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(-105.5,-21.5,211,43.2), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("EgXXAvFMAAAheJMAuuAAAMAAABeJg");
	this.shape.setTransform(300,150,2.006,0.498);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,600,300), null);


(lib.text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t4
	this.instance = new lib.t4();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.1,0.864,0.864,0,0,0,0.1,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(273).to({_off:false},0).to({regX:0,regY:0,scaleX:1.08,scaleY:1.08,x:0,y:0,alpha:1},6,cjs.Ease.get(1)).wait(83).to({regX:0.1,regY:0.1,scaleX:0.86,scaleY:0.86,x:0.1,y:0.1,alpha:0},6,cjs.Ease.get(1)).wait(1));

	// t3
	this.instance_1 = new lib.t3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.1,0.1,0.864,0.864,0,0,0,0.1,0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(182).to({_off:false},0).to({regX:0,regY:0,scaleX:1.08,scaleY:1.08,x:0,y:0,alpha:1},6,cjs.Ease.get(1)).wait(83).to({regX:0.1,regY:0.1,scaleX:0.86,scaleY:0.86,x:0.1,y:0.1,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(91));

	// t2
	this.instance_2 = new lib.t2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.1,0.1,0.864,0.864,0,0,0,0.1,0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(91).to({_off:false},0).to({regX:0,regY:0,scaleX:1.08,scaleY:1.08,x:0,y:0,alpha:1},6,cjs.Ease.get(1)).wait(83).to({regX:0.1,regY:0.1,scaleX:0.86,scaleY:0.86,x:0.1,y:0.1,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(182));

	// t1
	this.instance_3 = new lib.t1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.1,0.1,0.864,0.864,0,0,0,0.1,0.1);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:0,regY:0,scaleX:1.08,scaleY:1.08,x:0,y:0,alpha:1},6,cjs.Ease.get(1)).wait(83).to({regX:0.1,regY:0.1,scaleX:0.86,scaleY:0.86,x:0.1,y:0.1,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(273));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.3,-25.5,218.7,51.1);


(lib.pics2copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// p4
	this.instance = new lib.p4();
	this.instance.parent = this;
	this.instance.setTransform(-13.6,-19.1,0.36,0.36,0,0,0,156.3,140.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(273).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(83).to({alpha:0},6,cjs.Ease.get(1)).wait(1));

	// p3
	this.instance_1 = new lib.p3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-50,36,1,1,0,0,0,150,136);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(182).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(83).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(91));

	// p2
	this.instance_2 = new lib.p2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-50,-84,1,1,0,0,0,150,136);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(91).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).to({_off:true},92).wait(180));

	// p1
	this.instance_3 = new lib.p1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-50,-44,1,1,0,0,0,150,136);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},6,cjs.Ease.get(1)).to({_off:true},92).wait(271));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-180,400,400);


(lib.pics2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// p4
	this.instance = new lib.p4();
	this.instance.parent = this;
	this.instance.setTransform(-29.5,-19,0.7,0.7,0,0,0,156.3,140.8);
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
	this.instance_2.setTransform(40,-64,1,1,0,0,0,150,136);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(91).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).to({_off:true},92).wait(180));

	// p1
	this.instance_3 = new lib.p1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-20,-64,1,1,0,0,0,150,136);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},6,cjs.Ease.get(1)).to({_off:true},92).wait(271));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-170,-200,400,400);


(lib.pics2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// p4
	this.instance = new lib.p4();
	this.instance.parent = this;
	this.instance.setTransform(-44.5,-59,1,1,0,0,0,156.3,140.8);
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

}).prototype = getMCSymbolPrototype(lib.pics, new cjs.Rectangle(-150,-200,300,400), null);


(lib.legal_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.six();
	this.instance.parent = this;
	this.instance.setTransform(-133.5,15);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(182).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(83).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(91));

	// Слой 2
	this.instance_1 = new lib.legal();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-145,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(369));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145,-12,289,24);


(lib.pics4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A/KJYIAAyvMA+VAAAIAASvg");
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

}).prototype = getMCSymbolPrototype(lib.pics4, new cjs.Rectangle(-200,-60,399.1,120), null);


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

}).prototype = getMCSymbolPrototype(lib.pics3, new cjs.Rectangle(-100,-200,200,400), null);


// stage content:
(lib._100pcx300 = function(mode,startPosition,loop) {
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
		var rapido = this.rapido;
		
		res();
		
		function res() {
			var wdt = stage.canvas.width;
			var hgt = stage.canvas.height;
			
			var sc = wdt/300;
			
			bg.scaleX = sc;
			
			
			if (wdt<370){
				pics.x = -1000;
				pics2.x = - 1000;
				pics3.x = - 1000;
				
				let x1 = wdt/2;
				
				pics4.x = x1;
				pics4.y = 155;
				
				rapido.x = x1;
				rapido.y = 20;
				rapido.scaleX = 0.7;
				rapido.scaleY = 0.7;
				
				text.scaleX = 0.6;
				text.scaleY = 0.6;
				text.x = x1;
				text.y = 65;
				
				logo.scaleX = 0.6;
				logo.scaleY = 0.6;
				logo.x = x1;
				logo.y = 240;
				
				legal.x = x1;
				legal.y = 280;
				legal.scaleX = 0.8;
				legal.scaleY = 0.8;
				
			} else if (wdt<600){
				pics.x = -1000;
				pics2.x = - 1000;
				pics3.x = 75;
				pics4.x = - 1000;
				
				let x1 = (wdt - 150)*0.5 + 150;
				
				rapido.x = x1;
				rapido.y = 30;
				rapido.scaleX = 1;
				rapido.scaleY = 1;
				
				text.scaleX = 0.7;
				text.scaleY = 0.7;
				text.x = x1;
				text.y = 120;
				
				logo.scaleX = 0.8;
				logo.scaleY = 0.8;
				logo.x = x1;
				logo.y = 200;
				
				legal.x = x1;
				legal.y = 270;
				legal.scaleX = 0.7;
				legal.scaleY = 0.7;
				
			} else if (wdt<700){
				pics.x = 112;
				pics2.x = - 1000;
				pics3.x = - 1000;
				pics4.x = - 1000;
				
				let x1 = (wdt - 300)*0.5 + 300;
				
				rapido.x = x1;
				rapido.y = 30;
				rapido.scaleX = 1;
				rapido.scaleY = 1;
				
				text.scaleX = 1;
				text.scaleY = 1;
				text.x = x1;
				text.y = 120;
				
				logo.scaleX = 1;
				logo.scaleY = 1;
				logo.x = x1;
				logo.y = 200;
				
				legal.x = x1;
				legal.y = 270;
				legal.scaleX = 1;
				legal.scaleY = 1;
				
			} else if (wdt<1000){
				pics.x = -1000;
				pics2.x = 150;
				pics3.x = - 1000;
				pics4.x = - 1000;
				
				let x1 = (wdt - 400)*0.5 + 400;
				
				rapido.x = x1;
				rapido.y = 30;
				rapido.scaleX = 1;
				rapido.scaleY = 1;
				
				text.scaleX = 1;
				text.scaleY = 1;
				text.x = x1;
				text.y = 120;
				
				logo.scaleX = 1;
				logo.scaleY = 1;
				logo.x = x1;
				logo.y = 200;
				
				legal.x = x1;
				legal.y = 270;
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
				
				rapido.x = x1;
				rapido.y = 70;
				rapido.scaleX = 1;
				rapido.scaleY = 1;
				
				text.scaleX = 1.2;
				text.scaleY = 1.2;
				text.x = x1;
				text.y = 160;
				
				logo.scaleX = 1.2;
				logo.scaleY = 1.2;
				logo.x = x2;
				logo.y = hgt/2 - 10;
				
				legal.x = x2;
				legal.y = 270;
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
				
				rapido.x = x1;
				rapido.y = 70;
				rapido.scaleX = 1;
				rapido.scaleY = 1;
				
				text.scaleX = 1.2;
				text.scaleY = 1.2;
				text.x = x1;
				text.y = 160;
				
				logo.scaleX = 1.2;
				logo.scaleY = 1.2;
				logo.x = x2;
				logo.y = hgt/2 - 10;
				
				legal.x = x2;
				legal.y = 270;
				legal.scaleX = 1;
				legal.scaleY = 1;
			}
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// rapido
	this.rapido = new lib.rapido();
	this.rapido.parent = this;
	this.rapido.setTransform(449.4,48.5);

	this.timeline.addTween(cjs.Tween.get(this.rapido).wait(1));

	// text
	this.text = new lib.text();
	this.text.parent = this;
	this.text.setTransform(450.6,144.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// pics4
	this.pics4 = new lib.pics4();
	this.pics4.parent = this;
	this.pics4.setTransform(-12.3,307.5);

	this.timeline.addTween(cjs.Tween.get(this.pics4).wait(1));

	// pics3
	this.pics3 = new lib.pics3();
	this.pics3.parent = this;
	this.pics3.setTransform(64.1,150,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.pics3).wait(1));

	// pics2
	this.pics2 = new lib.pics2();
	this.pics2.parent = this;
	this.pics2.setTransform(200.8,151,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.pics2).wait(1));

	// pics
	this.pics = new lib.pics();
	this.pics.parent = this;
	this.pics.setTransform(157.3,151,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.pics).wait(1));

	// legal
	this.legal = new lib.legal_1();
	this.legal.parent = this;
	this.legal.setTransform(452.9,375.4);

	this.timeline.addTween(cjs.Tween.get(this.legal).wait(1));

	// logo
	this.logo = new lib.logo_1();
	this.logo.parent = this;
	this.logo.setTransform(446.8,274);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// bg
	this.bg = new lib.bg();
	this.bg.parent = this;
	this.bg.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(87.7,150,812.4,525.6);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/100pcx300_atlas_P_.png", id:"100pcx300_atlas_P_"},
		{src:"images/100pcx300_atlas_NP_.jpg", id:"100pcx300_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;