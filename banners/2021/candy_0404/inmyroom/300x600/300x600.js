(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x600_atlas_P_", frames: [[0,0,313,282],[0,284,116,39]]},
		{name:"300x600_atlas_NP_", frames: [[0,548,300,272],[0,0,300,272],[0,274,300,272]]}
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
	this.spriteSheet = ss["300x600_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["300x600_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["300x600_atlas_NP_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["300x600_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["300x600_atlas_P_"];
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


(lib.p4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib._4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p4, new cjs.Rectangle(0,0,313,282), null);


(lib.p3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib._3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p3, new cjs.Rectangle(0,0,300,272), null);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib._2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2, new cjs.Rectangle(0,0,300,272), null);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib._1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1, new cjs.Rectangle(0,0,300,272), null);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgXWguyMAutAAAMAAABdlMgutAAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(369));

	// logo_png
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(92,29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(369));

	// t4
	this.instance_1 = new lib.t4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,128,0.8,0.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(273).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},6,cjs.Ease.get(1)).wait(83).to({scaleX:0.8,scaleY:0.8,alpha:0},6,cjs.Ease.get(1)).wait(1));

	// t3
	this.instance_2 = new lib.t3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150,128,0.8,0.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(182).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},6,cjs.Ease.get(1)).wait(83).to({scaleX:0.8,scaleY:0.8,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(91));

	// t2
	this.instance_3 = new lib.t2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150,128,0.8,0.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(91).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},6,cjs.Ease.get(1)).wait(83).to({scaleX:0.8,scaleY:0.8,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(182));

	// t1
	this.instance_4 = new lib.t1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150,128,0.8,0.8);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1,alpha:1},6,cjs.Ease.get(1)).wait(83).to({scaleX:0.8,scaleY:0.8,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(273));

	// p4
	this.instance_5 = new lib.p4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(152.5,340,1,1,0,0,0,156.5,141);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(273).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(83).to({alpha:0},6,cjs.Ease.get(1)).wait(1));

	// p3
	this.instance_6 = new lib.p3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(150,326,1,1,0,0,0,150,136);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(182).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(83).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(91));

	// p2
	this.instance_7 = new lib.p2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(150,326,1,1,0,0,0,150,136);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(91).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).to({_off:true},90).wait(182));

	// p1
	this.instance_8 = new lib.p1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(150,326,1,1,0,0,0,150,136);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({alpha:1},6,cjs.Ease.get(1)).wait(83).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(273));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AvwCQQhJhCArhiQAmhYB4gzQCHg4DZAAQAwABAsAFIA5AIIAWAFIgfA3QhEgTg5AAQhuAAhaAgQh6AsgTBWQgLA0AlAuQAxA7BpgEQAigCBAgWQBOgbAtgjIBuhgIAHgFQAIgGAHgDQAOgGARAAIB2AAIAmCjIBKihICDAAIBLB8IA4h8IB3AAIhpDjIh6AAIhPiDIg7CDIhLAAIAAABIiNAAIgFgoIiBAAIgrAlIhTAAQhiAkh/AAQi4AAhPhIgAlZBhIBLgCIgGhAgAKkDLIBMhLIhMitIB1AAIAhBdIBghfICFAAIjmDmQgMAMgIADIgcAFgAG4C2IjBAAIBpjjIDBAAQBcAAAhAsQAcAjgVAtQgTAqgxAbQhAAihmAAIgDAAgAGSB9IAiAAQAoAAAegJQAxgPAKglQAIgfgfgNQgUgJgjAAIgiAAg");
	this.shape_1.setTransform(153.2,512.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGAaQgDAAgCgDIgEgEIgCgGIAFgBIACABIABACIACADIADACIAEABIAFgBIADgCIACgDIABgDIgBgFIgCgCIgEgCIgGgBIAAgEIAFgBIAEgCIACgDIABgDIgBgEIgCgDIgDgCIgDAAIgDAAIgDACIgCADIgCAEIgDAAIgDAAIACgHIAEgEQACgDADAAIAFgBIAGABIAFADIADAEQACADAAADIgBAEIgCAEIgDACIgDABQAFABACADQADAEAAAEQAAAEgCADIgDAFIgGADIgHABg");
	this.shape_2.setTransform(231.4,581,1.2,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGAaIgDgBIgHgEIACgDIACgBIAHADIAFABIADgBIAEgDIACgDIABgFIAAgFIgDgDIgEgBIgDgBIgIABIgFgBIAEgZIAZAAIAAADIgCADIgDABIgPAAIgDANIAHgBQAEAAAEACQADABABACIAEAEIABAGQAAAFgBADIgFAGQgCADgEAAIgGACg");
	this.shape_3.setTransform(226.3,581,1.2,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAGAaIAAgNIgYAAIgBgGIAZghIAGAAIAAAhIAIAAIAAAFIgBABIgHAAIAAANgAgLAHIARAAIAAgWIABgDg");
	this.shape_4.setTransform(221.2,581,1.2,1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHAZQgDgBgCgDQgDgEgCgFIgBgMIABgLQACgFADgEQACgDADgCQAEgBADAAIAHABQADACAEADQACADABAGQACAFAAAGQAAAHgCAFQgBAFgCAEQgEADgDABIgHACQgDAAgEgCgAgDgTQgCAAgDAEIgCAGIgBAJIABAKQAAADACADQADADACABIADABIAFgBIADgEQACgDABgDIABgKIgBgJIgDgGIgDgEIgFgBIgDABg");
	this.shape_5.setTransform(216.1,581,1.2,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNAaIAYgtIgaAAIgBgBIgBgBIAAgFIAjAAIAAAEIAAACIgBABIgVArIgBABIgCABg");
	this.shape_6.setTransform(211.1,581,1.2,1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgGAZQgEgBgCgDQgEgEgBgFQgBgFAAgHQAAgGABgFQABgEAEgFQACgDAEgCIAGgBIAHABQAEACADADQADAEABAFIABALIgBAMQgBAFgDAEQgDADgEABIgHACgAgDgTQgCAAgDAEIgCAGIgBAJIABAKQABADABADQADADACABIADABIAFgBIADgEQACgDABgDIABgKIgBgJIgDgGIgDgEIgFgBIgDABg");
	this.shape_7.setTransform(205.9,581,1.2,1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgHAZQgCAAgDgDIgEgGIgBgHIACgIIAFgHIAMgSIACgBIACgBIAGAAIgPAUIgBACIgCABIAFgCIADAAIAGABQADAAADADIADAEIABAGIgBAHIgEAGQgDADgDAAIgHACQgDAAgEgCgAgDAAIgEACIgCAEIgBAEIABAEIACAEIADACIAEABIAFgBIADgCIACgEIABgEIgBgFIgCgDIgDgCIgFAAg");
	this.shape_8.setTransform(200.8,581,1.2,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgLAbIARgXIABgCIgEACIgFABIgFgBIgFgDIgDgEIgBgGIABgHIAEgFQADgDACAAQADgCADAAQAEAAADACQADAAADADQACADABACIABAHIAAAFIgBAEIgCADIgPAWIgBABIgCABgAgDgTIgDACIgDADIAAAEQAAAFACADQAEACADAAIAEAAIAEgCIACgEIABgDIgBgFIgCgDIgEgCIgEgBg");
	this.shape_9.setTransform(195.6,580.9,1.2,1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgNAaIAYgtIgaAAIgBgBIgBgBIAAgFIAjAAIAAAEIAAACIgBABIgVArIgBABIgCABg");
	this.shape_10.setTransform(190.6,581,1.2,1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgMAaIAXgtIgaAAIgCgBIAAgBIAAgFIAjAAIAAAGIgBABIgVArIgBABIgCABg");
	this.shape_11.setTransform(185.4,581,1.2,1.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAGAaIAAgNIgYAAIAAgCIgBgEIAZghIAGAAIAAAhIAIAAIAAAGIgIAAIAAANgAgLAHIARAAIAAgZg");
	this.shape_12.setTransform(180.1,581,1.2,1.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgHAZQgDgBgDgDQgCgEgCgFQgBgFAAgHQAAgGABgFQACgGACgDQADgDADgCIAHgBQAEAAADABIAHAFIAEAJQABAFAAAGQAAAHgBAFIgEAJIgHAEQgDACgEAAgAgEgTIgEAEIgCAGIgBAJIABAKQAAADACADIAEAEIAEABIAEgBQACgBACgDQACgDABgDIABgKIgBgJIgDgGQgCgEgCAAIgEgBIgEABg");
	this.shape_13.setTransform(175.1,581,1.2,1.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgMAaIAAgFIAMAAIAAgmIgJAIIgBABIgBAAIgBgBIgBAAIgCgDIAPgOIAGAAIAAAvIAKAAIAAAFg");
	this.shape_14.setTransform(170,581,1.2,1.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAOAaIAAgXIgbAAIAAAXIgHAAIAAg0IAHAAIAAAYIAbAAIAAgYIAHAAIAAA0g");
	this.shape_15.setTransform(161.8,581,1.2,1.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgRAaIAAg0IAQAAQAEAAAEACQAEABACACQADADABADQABACAAAEQAAAEgBADIgFAEQgCADgEAAQgDACgEAAIgJAAIAAATgAgKABIAJAAIAEgBIAEgBIADgDIAAgFIAAgEIgDgEIgEgCIgEgBIgJAAg");
	this.shape_16.setTransform(156,581,1.2,1.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgPAaIAAg0IAfAAIAAAGIgXAAIAAAug");
	this.shape_17.setTransform(151,581,1.2,1.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgKAZQgGgDgCgDIgFgIIgCgLIACgKIAFgJQACgCAGgDQAFgCAFAAQAHAAAEACIAIAFIAFAJQACAEAAAGQAAAGgCAFIgFAIIgIAGQgEACgHAAQgFAAgFgCgAgHgSIgFAEIgEAGIgBAIIABAIIAEAHIAFAEIAHACIAIgCIAFgEQADgDABgEIABgIIgBgIQgBgEgDgCIgFgEIgIgCIgHACg");
	this.shape_18.setTransform(144.7,581,1.2,1.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgGAaIgEgBIgEgCIgCgCIACgDIACgBIACABIAFACIAEABIAEgBIAEgDIACgDIABgFIgBgFIgCgDIgEgBIgDgBIgJABIgFgBIAFgZIAYAAIAAADIgBADIgDABIgPAAIgDANIAHgBQAEAAADACQADAAACADIAEAEQABADAAADQAAAFgBADIgFAGQgEADgCAAQgDACgDAAg");
	this.shape_19.setTransform(136.4,581,1.2,1.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgMAaIAAgFIAMAAIAAgmIgJAIIgBABIgBAAIgBgBIgBAAIgCgDIAPgOIAGAAIAAAvIAKAAIAAAFg");
	this.shape_20.setTransform(131.3,581,1.2,1.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgHAZIgGgEIgEgJQgBgFAAgHQAAgGABgFIAEgJIAGgFIAHgBQAEAAAEABIAGAFIAEAJQABAFAAAGQAAAHgBAFIgEAJIgGAEQgEACgEAAgAgEgTIgDAEIgDAGIgBAJIABAKIADAGIADAEIAEABIAEgBQACgBACgDQACgDABgDIABgKIgBgJIgDgGQgCgEgCAAQAAAAAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAIgEABg");
	this.shape_21.setTransform(126.1,581,1.2,1.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgRAbIAAgDIABgBIABgCIATgVIADgDIACgDIABgFIgBgEIgCgDIgDgBIgEgBIgCABIgDABIgCADIgDAFIgCAAIgEgBIACgGIAEgFQADgCACgBIAGgBIAGABIAFADQADACAAADQACADAAADIgBAFIgDAFIgDAEIgRASIADgBIATAAIACABIABABIAAAFg");
	this.shape_22.setTransform(121,580.9,1.2,1.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgMAaIAAgFIALAAIAAgiIABgEIgJAIIgCABIAAAAIgBgBIgBAAIgCgDIAPgOIAFAAIAAAvIALAAIAAAFg");
	this.shape_23.setTransform(115.9,581,1.2,1.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgGAaIgEgBIgGgEIADgDIABgBIACABIAFACIAEABIAEgBIAEgDIACgDIABgFIgBgFIgCgDIgDgBIgEgBIgJABIgEgBIAEgZIAYAAIAAADIAAADIgDABIgQAAIgCANIAGgBQAEAAADACQAEABACACIADAEIABAGQAAAFgCADQgBAEgCACQgEADgCAAIgHACg");
	this.shape_24.setTransform(110.7,581,1.2,1.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAGAaIAAgNIgYAAIgBgGIAZghIAHAAIAAAhIAHAAIAAAFIAAABIgHAAIAAANgAgLAHIARAAIAAgUIAAgCIAAgDg");
	this.shape_25.setTransform(105.5,581,1.2,1.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgHAZQgDgBgDgDQgCgEgCgFQgBgFAAgHQAAgGABgFQACgGACgDQADgDADgCIAHgBQAEAAADABQADACADADQADAEACAFQABAFAAAGQAAAHgBAFQgCAFgDAEQgDADgDABQgDACgEAAgAgEgTIgEAEIgCAGIgBAJIABAKQAAADACADIAEAEIAEABIAEgBQACgBACgDQACgDABgDIABgKIgBgJIgDgGQgCgEgCAAIgEgBIgEABg");
	this.shape_26.setTransform(100.5,581,1.2,1.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgMAaIAWgtIgaAAIgBgBIAAgBIAAgFIAjAAIAAAEIgBACIAAABIgUArIgCABIgDABg");
	this.shape_27.setTransform(95.5,581,1.2,1.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgMAaIAXgtIgaAAIgCgBIAAgBIAAgFIAjAAIAAAGIgBABIgUArIgBABIgDABg");
	this.shape_28.setTransform(90.3,581,1.2,1.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAOAaIAAgXIgbAAIAAAXIgHAAIAAg0IAHAAIAAAYIAbAAIAAgYIAIAAIAAA0g");
	this.shape_29.setTransform(82.1,581,1.2,1.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAOAaIAAgXIgbAAIAAAXIgIAAIAAg0IAIAAIAAAYIAbAAIAAgYIAIAAIAAA0g");
	this.shape_30.setTransform(75.3,581,1.2,1.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAOAaIAAgmIAAgFIgCAGIgYAjIgBABIgCABIgGAAIAAg0IAIAAIAAArIABgDIABgCIAXgjIACgCIACgBIAFAAIAAA0g");
	this.shape_31.setTransform(68.5,581,1.2,1.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgGAaIgGgEQgCgBgCgDIgBgGQAAgGADgCQACgEAFgBQgEgCgCgCQgCgEAAgDIABgGIADgEQADgDACAAIAGgBIAHABQACAAADADIADAEIABAGQAAADgCAEQgCADgEABQAFABACAEQADACAAAGIgBAGQgCADgCABIgGAEIgHABgAgDACIgDACIgDADIgBAFIABADIACADIAEADIADABIAFgBIADgDIACgDIABgDIgBgFIgCgDIgEgCIgEAAgAgDgUIgDABIgCAEIAAADIAAADIACADIADADIADAAIAEAAIADgDIACgDIAAgDIAAgDIgCgEIgDgBIgEgBg");
	this.shape_32.setTransform(288.6,569.2,1.2,1.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgBAEIgCgBIgBgBIAAgDIABgCIACgBIABAAIACAAIABABIABACIABABIgBACIgBABIgBABIgCABg");
	this.shape_33.setTransform(282.8,571.9,1.2,1.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAPAZIAAgNIgdAAIAAALIgBACIgBAAIgFAAIAAgSIACAAIACAAIADgCIACgEIACgEIACgVIAXAAIAAAfIAHAAIAAAQIgBACIgBAAgAgFgBIgCAEIgCAEIARAAIAAgZIgKAAg");
	this.shape_34.setTransform(279,570.9,1.2,1.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgCAIIgBAAIAAgBIABgBIABgBIABgBIAAgEIgBAAIgBgBIgBgDIABgDQAAgBAAAAQABAAAAAAQABgBAAAAQAAAAAAAAIACABIABABIABACIAAACIAAADIgBADIgEAHg");
	this.shape_35.setTransform(273,572.4,1.2,1.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgPAaIAAgkIAHAAIAAAbIACgEIAQgWIABgBIABAAIAEAAIAAAkIgHAAIAAgaIABgBIgBABIgBABIgDADIgCAEIgLAQIgBABIgCABgAgDgQIgDgCIgDgCIAAgDIAAgCIABgBIAEAAIABAFIACABIAEAAIACgBIABgBIAAgEIAEAAIABABIABACIgBADIgCACIgEACIgEABg");
	this.shape_36.setTransform(269.4,569.2,1.2,1.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgIADIAAgFIARAAIAAAFg");
	this.shape_37.setTransform(265.3,569.7,1.2,1.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgRAbIAAgEIABgCIAUgVIADgDIACgEIAAgDIAAgFIgCgCIgDgCIgEgBIgCABIgDACIgCACIgCADIgBACIgCAAIgEAAQAAgEACgDIAEgFIAFgDIAGAAIAGAAIAFADIADAFIABAGIAAAFIgDAGIgDADIgRASIAGgBIAQAAIACABIABABIAAAFg");
	this.shape_38.setTransform(261,569.2,1.2,1.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgPAaIAAgkIAHAAIAAAZIgBACIACgDIABgBIAFgHIACgDIAIgMIABgBIACAAIAEAAIAAAkIgHAAIAAgYIAAgCIAAgBIAAABIgBABIAAABIgDACIgDAEIgLAQIgBABIgBABgAgDgQIgEgCIgCgCIgBgDIABgCIABgBIAEAAIABAEIABABIABABIAEAAIACgBIABgBIAAgEIAEAAIABABIAAACIgBADIgCACIgDACIgFABg");
	this.shape_39.setTransform(253.7,569.2,1.2,1.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgPATIAAglIAHAAIAAAZIAAACIABgCIABgBIAFgGIACgEIAIgMIABgBIACgBIAEAAIAAAkIgHAAIAAgXIAAgCIAAgCIAAACIgBABIAAABIgDADIgDADIgKAQIgBABIgCABg");
	this.shape_40.setTransform(248.6,570.1,1.2,1.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgPATIAAglIAHAAIAAAQIADAAIADgBIACgBIAGgMIACgBIACgBIAFAAIgJAOIgCADIgDABIADAAIADADIAJAPIgFAAIgDAAIgBgCIgHgLIgBgCIgDgBIgEAAIAAARg");
	this.shape_41.setTransform(244,570.1,1.2,1.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgEASIgFgEQgDgDgBgDQgBgDAAgFQAAgEABgDQABgDACgDIAGgEIAHgBIAHABIAFADIgCAEIgBAAIgCgBIgBgBIgDgBIgDAAIgEABIgDADIgCAEIgBAFIABAGIACAEQAAAAABABQAAAAAAABQABAAAAAAQABABAAAAIAEABIAEgBIAFgDIABABIACACIgCADIgEACIgIABQgCAAgDgBg");
	this.shape_42.setTransform(239.4,570.1,1.2,1.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAJATIAAgRIgRAAIAAARIgHAAIAAgkIAHAAIAAAOIARAAIAAgOIAHAAIAAAkg");
	this.shape_43.setTransform(234.7,570.1,1.2,1.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgPATIAAglIAHAAIAAAbIAEgGIAOgTIABgBIABgBIAEAAIAAAkIgHAAIAAgZIABgCIgBACIgBABIgQAXIgBABIgCABg");
	this.shape_44.setTransform(229.6,570.1,1.2,1.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAWAZIAAgNIgxAAIAAgkIAGAAIAAAfIAPAAIAAgfIAGAAIAAAfIAPAAIAAgfIAHAAIAAAfIAHAAIAAAQIgBACIgBAAg");
	this.shape_45.setTransform(223.5,570.9,1.2,1.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgGASIgGgEIgEgGIgBgIIABgHIAEgGIAGgEIAGgBIAIABIAFAEIAEAGIABAHIgBAIIgEAGIgFAEIgIABQgDAAgDgBgAgHgJQgDAEAAAFQAAAGADAEQADAEAEAAQAFAAADgEQADgEAAgGQAAgFgDgEQgDgEgFAAQgEAAgDAEg");
	this.shape_46.setTransform(216.9,570.1,1.2,1.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgRAaIAAgzIAQAAIAIABIAGADIAEAFIABAHIgBAHIgEAEIgGAEIgIABIgIAAIAAATgAgJABIAIAAIAEgBIAEgBIADgEIAAgEIAAgEIgDgEIgEgCIgEAAIgIAAg");
	this.shape_47.setTransform(212.2,569.2,1.2,1.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAPAZIAAgNIgeAAIAAALIAAACIgCAAIgEAAIAAgSIACAAIACAAIACgCIADgEIABgEIADgVIAXAAIAAAfIAHAAIAAAQIgBACIgCAAgAgEgJQAAAFgBADIgCAEIgCAEIARAAIAAgZIgLAAg");
	this.shape_48.setTransform(204.3,570.9,1.2,1.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgDATIgEgBIgDgCIgDgDIACgCIABgBIACABIAEACIAEABIADgBIACgBIACgCIAAgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQgCgCgEAAIgEAAIAAgDIAEAAQAEAAACgCQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBIgBgCIgBgCIgCgBIgDAAIgEAAIgCABIgCABIgBABIgCgBIgBgDIAFgDIAHgBIAFAAQADABACACQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIABADIAAADIgBACIgCACIgDACQADAAACACIACAGQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAABQAAAAgBABQAAAAAAAAQgBABAAAAIgFACIgFABg");
	this.shape_49.setTransform(199.5,570.1,1.2,1.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgFASIgGgEIgDgGIgBgIIABgHIADgGIAGgEIAGgBIAGABQACAAADADIADAFIABAHIAAACIgBAAIgXAAIAAAGIADAEIADADIAEABIAHgCIAEgCIABABIACACIgDADIgDACIgIABIgHgBgAgFgLQgDADAAAFIATAAIgBgEIgCgEIgDgCIgEAAQgDAAgDACg");
	this.shape_50.setTransform(195.3,570.1,1.2,1.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgGASIgGgEQgDgDAAgDQgCgEAAgEIACgHQAAgDADgDIAGgEIAGgBIAHABIAGAEQADADAAADIACAHQAAAEgCAEQAAADgDADIgGAEIgHABIgGgBgAgHgJQgDAEAAAFQAAAHADADQADAEAEAAQAFAAADgEQACgDABgHQgBgGgCgDQgDgEgFAAQgEAAgDAEg");
	this.shape_51.setTransform(190.4,570.1,1.2,1.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgPAZIAAgwIADAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAIABAEQACgDADgBQAEgCADAAQADAAACABQADABACACQACADAAAEIABAIIgBAHIgDAFQgCADgDACIgGABQgDAAgDgBIgEgDIAAAQgAgFgSIgEAFIAAARIAEADIAFABQADAAADgEQAEgDAAgGIgBgHIgCgDIgDgDIgEgBg");
	this.shape_52.setTransform(185.6,570.8,1.2,1.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AANAaIAAgtIgZAAIAAAtIgIAAIAAgzIAoAAIAAAzg");
	this.shape_53.setTransform(179.8,569.2,1.2,1.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgEAIIAAgBIABgBIADgCIAAgCIAAgCIgBAAIgCgBIgBgBIAAgCIABgDQABgBAAAAQABAAAAAAQABgBAAAAQAAAAAAAAIACABIABABIABAEIAAADIgDAGIgDAEg");
	this.shape_54.setTransform(173.3,572.4,1.2,1.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgHATIgEgCIgCgEIgBgDIABgFIAEgDIAHgCIAKgCIAAgCQAAgFgCgCQgBgCgEAAIgEABIgEADIgCAAIgBAAIgBgBIgBgDQADgDAEgBIAHgBIAFABIAFACIACAFIABAGIAAAXIgFAAIgBgCIgBgDIgFAEIgDABIgEAAgAgEAEIgCADIgBACIAAACIACACIABABIACAAIADAAIACgBIAFgDIAAgIg");
	this.shape_55.setTransform(169.9,570.1,1.2,1.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgNATIAAgkIATAAIAEACQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAIABAEIAAACIgCACIgCACIgDACQAEAAACACQACACAAAEQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAIgEACIgGABgAgGAOIAGAAQAEAAACgCQACgBAAgDIAAgDIgCgCIgCgBIgEAAIgGAAgAgGgCIAGAAIACAAIADgCIABgBIABgCIgBgCIgBgDIgCgBIgDAAIgGAAg");
	this.shape_56.setTransform(165.7,570.1,1.2,1.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgPATIAAglIAHAAIAAAQIADAAIADgBIACgBIAHgMQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAIACgBIAFAAIgJAOIgCADIgCABIADAAIALASIgEAAIgDAAIgCgCIgHgLIgBgCIgDgBIgEAAIAAARg");
	this.shape_57.setTransform(161.4,570.1,1.2,1.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgEASIgGgEIgDgGIgBgIIABgHIADgGIAGgEIAGgBIAHABIAGADIgCADIgBABIgBAAIgBgBIgBgBIgDgBIgDAAIgEABIgDADIgDAEIAAAFIAAAGIADAEIADADIADABIAEgBIAGgDIABABIACACIgDADIgDACIgEABIgEAAQgCAAgDgBg");
	this.shape_58.setTransform(156.8,570.1,1.2,1.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgGASIgGgEQgDgDAAgDQgCgEAAgEIACgHQAAgDADgDIAGgEIAGgBIAHABIAGAEQADADAAADIACAHQAAAEgCAEQAAADgDADIgGAEIgHABQgDAAgDgBgAgHgJQgDAEAAAFQAAAHADADQACAEAFAAQAFAAADgEQACgDABgHQgBgGgCgDQgDgEgFAAQgFAAgCAEg");
	this.shape_59.setTransform(152.1,570.1,1.2,1.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAVAaIAAgoIgRAfIgCACIgBAAIgBAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBIgSgfIAAACIAAAmIgHAAIAAgzIAIAAIABABIASAfIAAAEIAUgjIABgBIAHAAIAAAzg");
	this.shape_60.setTransform(145.6,569.2,1.2,1.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgBAEIgBgBIgBgBIgBgCIABgBIABgCIABgBIABAAIACAAIABABIABACIABABIgBACIgBABIgBABIgCABg");
	this.shape_61.setTransform(138.2,571.9,1.2,1.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgLATIAAgkIAXAAIAAAEIgQAAIAAAgg");
	this.shape_62.setTransform(136,570.1,1.2,1.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgDAIIAAAAIgBgBIABgBIABgBIACgBIAAgCIAAgCIgBAAIgCgBIgBgBIAAgCIABgDQABgBAAAAQABAAAAAAQABgBAAAAQAAAAAAAAIACABIABABIABACIAAACIAAADQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBABIgBADIgDAEg");
	this.shape_63.setTransform(130.7,572.4,1.2,1.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgLAbIAQgVIABgCIABgCIgEACIgEABIgGgBIgFgDQgCgBgBgDIgBgGQAAgEABgDQABgCADgDIAFgEIAGAAIAHAAIAGAEIADAFIABAIIAAAEIgBAEIgCADIgPAWIgBACgAgDgTIgDACIgCADIgBAFQAAAEACADQADACAEAAIAEAAIAEgDIACgDIABgDIgBgFIgCgDIgEgCIgEgBg");
	this.shape_64.setTransform(127.1,569.2,1.2,1.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgMAaIAAgFIAMAAIAAglIgJAHIgBABQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgBAAIgBgBIgCgDIAPgNIAGAAIAAAuIAKAAIAAAFg");
	this.shape_65.setTransform(122.1,569.2,1.2,1.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AAGAaIAAgNIgWAAIgBgBIgBgBIgBgDIAZghIAGAAIAAAgIAIAAIAAAEIgBABIgBABIgGAAIAAANgAgMAHIASAAIAAgWIABgCg");
	this.shape_66.setTransform(116.8,569.2,1.2,1.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgGAaIgHgDIgDgCIACgDIACgBIABAAIAGADIAEABIAEgBIAEgDIACgEIABgFIAAgEIgDgDIgEgBIgEgBIgHABIgFgBIAEgZIAYAAIAAADIgBADIgCABIgQAAIgCANIAGgBIAHABIAFAEIAEAEIABAGIgCAIIgDAGIgHADIgGACg");
	this.shape_67.setTransform(111.7,569.2,1.2,1.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgLAaIAAgFIALAAIAAgiIAAgDIgJAHIgBABQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgBAAIAAgBIgDgDIAPgNIAGAAIAAAuIAKAAIAAAFg");
	this.shape_68.setTransform(106.7,569.2,1.2,1.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgMAaIAAgFIAMAAIAAglIgJAHIgBABIgBAAIgBAAIgBgBIgCgDIAPgNIAGAAIAAAuIAKAAIAAAFg");
	this.shape_69.setTransform(101.5,569.2,1.2,1.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AABAOIgBgCIAAgBIAFgKIABAAIAAgBIgBAAIgFgKIAAgCIABgBIACgBIAJAOIAAAAIgJAPgAgKAOIgBgCIAAgBIAHgKIAAAAIAAgBIAAAAIgHgKIAAgCIABgBIADgBIAIAOIAAAAIgIAPg");
	this.shape_70.setTransform(94.9,570,1.2,1.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgBAEIgBgBIgBgBIgBgCIABgBIABgCIABgBIABAAIACAAIABABIABACIABABIgBACIgBABIgBABIgCABg");
	this.shape_71.setTransform(91.8,571.9,1.2,1.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgPAaIAAgzIAfAAIAAAGIgYAAIAAAtg");
	this.shape_72.setTransform(89.6,569.2,1.2,1.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgBAEIgBgBIgBgBIgBgCIABgBIABgCIABgBIABAAIACAAIACABIABACIAAADIgBABIgCABIgCABg");
	this.shape_73.setTransform(85.8,571.9,1.2,1.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AAOAaIAAgXIgbAAIAAAXIgHAAIAAgzIAHAAIAAAXIAbAAIAAgXIAIAAIAAAzg");
	this.shape_74.setTransform(81.4,569.2,1.2,1.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgBAEIgBgBIgBgBIgBgCIABgBIABgCIABgBIABAAIACAAIABABIABACIABABIgBACIgBABIgBABIgCABg");
	this.shape_75.setTransform(77,571.9,1.2,1.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgGAZIgIgFIgGgJQgBgFAAgGQAAgGABgEQADgGADgDQADgEAFgBQAFgCAFAAQAGAAADACIAJAEIgDAEIgCABIgEgDIgDgBIgGgBQgEABgDABQgDABgDADIgDAGQgCAEABAEQgBAFACADIADAHIAGAEQADABAEABIADgBIAEgBIADgCIACgCIABAAIABAAIABAAIADAEQgDAEgFABQgFADgGAAQgEAAgFgCg");
	this.shape_76.setTransform(73.1,569.2,1.2,1.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAOAaIAAgnIABgDIgEAFIgXAjIgBACIgCAAIgFAAIAAgzIAHAAIAAAnIgBADIACgDIAagnIACAAIAFAAIAAAzg");
	this.shape_77.setTransform(64.4,569.2,1.2,1.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAVAhIAAgNIgpAAIAAALIgBABIgBABIgFAAIAAgTIAGAAIACgCIACgDIACgGIACgIIACgbIAfAAIAAAuIAIAAIAAARIAAABIgDABgAgHAAIgDAIIgDAGIAZAAIAAgoIgQAAg");
	this.shape_78.setTransform(57.5,570,1.2,1.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AAOAaIAAgXIgbAAIAAAXIgIAAIAAgzIAIAAIAAAXIAbAAIAAgXIAHAAIAAAzg");
	this.shape_79.setTransform(50.7,569.2,1.2,1.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AATAaIgBAAIgBgBIgGgNIgWAAIgFANIAAABIgCAAIgGAAIAVgzIAGAAIAWAzgAgJAHIATAAIgJgWIgBgDg");
	this.shape_80.setTransform(44.3,569.2,1.2,1.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AAOAaIgCAAIgBgCIgNgTIgCgCIgDgBIgGAAIAAAYIgHAAIAAgzIAHAAIAAAXIAGAAIABgBIABAAIABgBIACgBIANgUIACAAIAHAAIgQAVIgEAEIADABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAQAWg");
	this.shape_81.setTransform(38.7,569.2,1.2,1.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAIgOIADABIABABIgBACIgFAKIgBAAIAGALIABABIgBACIgDABgAgLAAIAAAAIAJgOIACABIABABIgBACIgEAKIgBAAIAFALIABABIgBACIgCABg");
	this.shape_82.setTransform(33.4,570,1.2,1.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgKAZQgEgCgEgEQgDgEgCgEQgCgFAAgGQAAgGACgEQABgDAEgGQAEgEAEgBQAFgCAFAAQAGAAAFACQAEABAEAEQADAEACAFQACAEAAAGQAAAGgCAFQgCAGgDACQgEAEgEACQgHACgEAAQgDAAgHgCgAgGgSQgEABgDADIgDAGIgCAIQAAAFACADIADAHIAHAEIAGABIAHgBIAGgEIAEgHQACgDAAgFIgCgIQgBgDgDgDQgCgDgEgBQgDgBgEgBQgDABgDABg");
	this.shape_83.setTransform(25.7,569.2,1.2,1.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgJAZQgFgCgEgEQgDgCgDgGQgBgFAAgGQAAgGABgEIAGgJQAEgEAFgBQADgCAGAAQAGAAAEACQAFABAEAEIAGAJQABAEAAAGQAAAGgBAFQgCAFgEADQgEAEgFACQgFACgFAAQgEAAgFgCgAgHgSQgDABgDADQgDADAAADIgCAIQABAFABADIADAHIAGAEIAHABIAIgBIAGgEIADgHQABgDAAgFIgBgIIgDgGQgDgDgDgBQgDgBgFgBQgEABgDABg");
	this.shape_84.setTransform(18.7,569.2,1.2,1.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgJAZQgFgCgEgEQgDgCgCgGQgCgHAAgEQAAgEACgGIAFgJQAFgEAEgBQAEgCAFAAQAHAAAEACQAEABAEAEQAEAGABADQACAEAAAGQAAAGgCAFQgBAEgEAEQgEAEgEACQgGACgFAAQgDAAgGgCgAgGgSQgEABgCADQgDADgBADIgBAIQAAAFABADIAEAHIAGAEIAGABIAIgBIAGgEIADgHQACgDAAgFIgCgIIgDgGQgEgDgCgBQgDgBgFgBQgDABgDABg");
	this.shape_85.setTransform(11.5,569.2,1.2,1.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#00A7E0").s().p("EgXXAvFMAAAheJMAuuAAAMAAABeJg");
	this.shape_86.setTransform(150,300,1.003,0.996);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(369));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.5,299.5,301,601);
// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/300x600_atlas_P_.png", id:"300x600_atlas_P_"},
		{src:"images/300x600_atlas_NP_.jpg", id:"300x600_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;