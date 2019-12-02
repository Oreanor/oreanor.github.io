(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"600x500_atlas_", frames: [[1204,502,600,500],[602,502,600,500],[0,502,600,500],[1204,0,600,500],[0,0,600,500],[602,0,600,500]]}
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
	this.spriteSheet = ss["600x500_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["600x500_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["600x500_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["600x500_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
	this.spriteSheet = ss["600x500_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._6 = function() {
	this.spriteSheet = ss["600x500_atlas_"];
	this.gotoAndStop(5);
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


(lib.www = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD052B").s().p("AghE0QgPgOAAgUIAAi+IikBfQgRAKgUgFQgTgFgKgSQgKgRAFgUQAFgTASgKICkhfIikheQgSgKgFgUQgFgTAKgRQAKgSATgFQAUgFARAKICkBfIAAi+QAAgUAPgOQAOgOATAAQAUAAAOAOQAOAOAAAUIAAC+IClhfQARgKAUAFQATAFAKASQAKARgFATQgFAUgSAKIikBeICkBfQASAKAFATQAFAUgKARQgKASgTAFQgUAFgRgKIilhfIAAC+QAAAUgOAOQgOAOgUAAQgTAAgOgOg");
	this.shape.setTransform(0,0,0.198,0.198);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.www, new cjs.Rectangle(-5.7,-6.3,11.4,12.8), null);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ah0DAIByl/IB3AAIhyF/g");
	this.shape.setTransform(11.7,19.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,23.5,38.3), null);


(lib.t6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAUArQgDgDgCgEQgDAEgIAEQgGACgHAAQgPAAgHgHQgJgIAAgMQAAgPAMgIQALgKAVAAIAJACQAAgQgTAAQgLAAgJAEIgEgQQAKgFAQAAQATAAAJAKQAJAJAAAaIAAASQAAARAHAEQgBAFgEABIgHABQgFAAgDgDgAgTASQAAAMAOgBQASAAAAgSIAAgJIgIgBQgYABAAAQg");
	this.shape.setTransform(151.7,32.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKAtIAAhHIgZAAIAAgRIBHAAIAAARIgaAAIAABHg");
	this.shape_1.setTransform(142.9,32.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgoA/IAAh7IAVAAIAAAGQAIgIALAAQApAAAAAvQAAAVgLAMQgMALgTAAQgKAAgIgDIAAAlgAgTgmIAAAtQAFAFAIAAQANAAAGgHQAHgGAAgPQAAgPgGgGQgGgHgOAAQgHAAgGAGg");
	this.shape_2.setTransform(134,33.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfAiQgLgNAAgVQAAgTAMgOQAMgMASAAQAUAAALAMQALANAAAUQABAWgMAMQgLAMgUAAQgTAAgMgMgAgOgVQgGAIAAANQAAAdAUAAQAKAAAFgHQAGgIAAgOQAAgcgVAAQgIAAgGAHg");
	this.shape_3.setTransform(124,32.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJBRIAAglQgIADgIAAQgQAAgKgMQgJgMAAgVQAAgVAKgMQAKgNARAAQAHABAHADIAAgjIATgFIAAAoQAHgDAHgBQASABAJAMQAKAMAAAUQAAAWgKAMQgKAMgPAAQgJAAgHgDIAAAlgAAKgaIAAA3QAGADAFAAQAUAAAAggQAAgMgFgIQgFgHgJgBQgGAAgGACgAgoAAQAAAgAUAAQAFAAAGgDIAAg2QgGgCgGgBQgTABAAAbg");
	this.shape_4.setTransform(112.3,32.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgDAuIgQgeIgHgPIgBgEIgBAAIgCAOIgFAiIgVAAIARhaIAIAAIAfA/IAgg/IAIAAIARBaIgWAAIgHgrIAAgFIgBAAIgDAHIgVAqg");
	this.shape_5.setTransform(99.5,32.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfAiQgKgNgBgVQAAgTAMgOQAMgMASAAQAUAAALAMQAMANAAAUQAAAWgMAMQgLAMgUAAQgTAAgMgMgAgPgVQgFAIAAANQAAAdAUAAQAJAAAHgHQAFgIAAgOQAAgcgVAAQgIAAgHAHg");
	this.shape_6.setTransform(88.5,32.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAKAdQgDgXgWAAIgBAAIAAAnIgVAAIAAhYIAVAAIAAAhIABAAQAWAAADgTQACgPAPAAIAJAAIAAARIgDAAQgEAAgBAEQgEARgTAFQAUAEAEAUQABAGAEgBIAEAAIAAARIgKABQgPgBgDgQg");
	this.shape_7.setTransform(79.2,32.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgkAtIAAhYIAVAAIAAAfIARgBQAQABAKAHQAJAHAAAPQAAAMgIAIQgJAIgTAAgAgPADIAAAZIAPAAQAQABAAgNQAAgGgDgDQgEgFgJAAIgPABg");
	this.shape_8.setTransform(64.9,32.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AATAtIAAgmIgkAAIAAAmIgVAAIAAhYIAVAAIAAAhIAkAAIAAghIAUAAIAABYg");
	this.shape_9.setTransform(55,32.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfAjQgLgMAAgWQAAgUANgNQANgNARAAQATAAAMALQALAMAAASIgBALIg/AAQABAKAHAGQAGAGALAAQAOAAAHgIIAIARQgLAIgVAAQgUAAgMgLgAgUgIIAqAAQgCgUgTAAQgRAAgEAUg");
	this.shape_10.setTransform(45,32.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgkAtIAAhYIAlgBQAQAAAIAHQAJAGAAALQgBAGgDAFQgEAFgGADQARAFAAAQQAAALgJAIQgIAGgSAAgAgQAGIAAAXIARAAQAQAAAAgMQAAgGgEgDQgFgCgHAAgAgQgcIAAAUIAQAAQAOAAAAgLQAAgEgEgDQgDgDgGAAIgRABg");
	this.shape_11.setTransform(35.7,32.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgeAiQgLgNAAgVQAAgTALgOQALgMATAAQAUAAAMAMQALANgBAUQAAAWgLAMQgMAMgTAAQgTAAgLgMgAgOgVQgGAIAAANQAAAdAUAAQAKAAAFgHQAGgIAAgOQAAgcgVAAQgJAAgFAHg");
	this.shape_12.setTransform(26,32.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgoA/IAAh7IAVAAIAAAGQAIgIALAAQApAAAAAvQAAAVgLAMQgMALgTAAQgKAAgIgDIAAAlgAgTgmIAAAtQAFAFAIAAQANAAAGgHQAHgGAAgPQAAgPgGgGQgGgHgOAAQgHAAgGAGg");
	this.shape_13.setTransform(16.4,33.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AghArQAYABAAgMQAAgJgHgQIgbhEIAVAAIAXA9IAWg9IAWAAIgoBnQgDAIgJAGQgLAGgPAAg");
	this.shape_14.setTransform(6.6,34);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgnBFIAAhaIAVAAIAAA1IA1g3IAFAAIAABaIgVAAIAAg2Ig0A4gAgRgtQgJgHgCgMIASgEQABAPALAAQANAAABgPIARAEQgDAMgIAHQgJAGgLAAQgMAAgHgGg");
	this.shape_15.setTransform(86.7,11.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAgAsIAAhXIAUAAIAABXgAgzAsIAAhXIAUAAIAAAfIAQgBQAPAAAJAJQAKAGAAAOQAAAcgiAAgAgfADIAAAaIAOAAQAJAAAEgEQADgEAAgGQAAgFgEgEQgEgEgIABIgOAAg");
	this.shape_16.setTransform(75.2,13.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AglAtIAAhYIAmgBQAQAAAIAHQAJAHAAALQgBAFgDAFQgEAFgGADQARAFAAAQQAAAMgJAGQgIAHgSAAgAgQAGIAAAXIARAAQAQAAAAgLQAAgHgEgCQgFgDgHAAgAgQgbIAAATIAQAAQAOAAAAgKQAAgFgEgCQgDgDgGAAIgRABg");
	this.shape_17.setTransform(64.5,13.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgUALgMQALgNATAAQAUAAAMANQALAMgBAUQAAAWgLAMQgMAMgTAAQgTAAgLgNgAgOgVQgGAIAAANQAAAdAUAAQAKAAAFgHQAGgIAAgOQAAgcgVAAQgJAAgFAHg");
	this.shape_18.setTransform(54.8,13.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AATAsIAAgmIgkAAIAAAmIgVAAIAAhXIAVAAIAAAhIAkAAIAAghIAUAAIAABXg");
	this.shape_19.setTransform(44.9,13.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag4AsIAAhXIAVAAIAABHIAaAAIAAhHIATAAIAABHIAbAAIAAhHIAUAAIAABXg");
	this.shape_20.setTransform(28,13.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAUArQgDgDgCgFQgDAGgIACQgFADgHAAQgQAAgIgHQgIgHAAgNQAAgPAMgIQALgJAVAAIAJABQAAgQgTAAQgMAAgIAEIgEgQQAKgFAPAAQAUAAAJAJQAJAKAAAZIAAASQABASAGAFQgBAEgDABIgIABQgEAAgEgDgAgTARQAAAMAOABQASAAAAgTIAAgIIgIgBQgYAAAAAPg");
	this.shape_21.setTransform(16.8,13.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgoA9IAAh4IAigBQASAAALAIQALAIAAAPQgBAPgPAIQAXAHAAAYQAAARgNAKQgMAKgTgBgAgSArIAKABQANAAAGgFQAIgEgBgNQAAgKgFgEQgHgFgOAAIgKAAgAgSgpIAAAcIAKAAQAUAAAAgPQAAgOgSAAIgMABg");
	this.shape_22.setTransform(7.4,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t6, new cjs.Rectangle(0,0,158.4,42.5), null);


(lib.t5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmAtIAAgRIAEAAQADABABgGQACgGAFgGQAFgFAHgCQgWgEABgSQAAgLAIgIQAIgHATAAIAkABIAABYIgUAAIAAgiIgGAAQgWAAgDAUQgCAPgQAAIgIgBgAgIgZQgDADgBAFQAAAGAGAEQAEADAHAAIAOAAIAAgYIgQgBQgHAAgEAEg");
	this.shape.setTransform(93.7,32.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnAuIAAhZIAVAAIAAA1IA1g3IAFAAIAABaIgVAAIAAg1Ig0A2g");
	this.shape_1.setTransform(84.1,32.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AATAtIAAgmIgkAAIAAAmIgVAAIAAhYIAVAAIAAAhIAkAAIAAghIAUAAIAABYg");
	this.shape_2.setTransform(73.9,32.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAUArQgDgDgCgEQgDAEgHAEQgGACgHAAQgPAAgJgHQgHgIAAgMQgBgPAMgIQALgKAVAAIAIACQAAgQgSAAQgMAAgIAEIgEgQQAKgFAPAAQAUAAAJAKQAKAJAAAaIAAASQgBARAIAEQgDAFgDABIgHABQgFAAgDgDgAgSASQAAAMANgBQASAAAAgSIAAgJIgIgBQgYABABAQg");
	this.shape_3.setTransform(64.4,32.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgkAtIAAhYIAlgBQAQAAAIAHQAJAGAAALQgBAGgDAFQgEAFgGADQARAFAAAQQABALgKAIQgIAGgSAAgAgQAGIAAAXIARAAQAQAAAAgMQAAgGgFgDQgEgCgHAAgAgQgcIAAAUIAQAAQAOAAAAgLQAAgEgEgDQgDgDgGAAIgRABg");
	this.shape_4.setTransform(55.4,32.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAgAtIAAhYIAUAAIAABYgAgzAtIAAhYIAUAAIAAAfIAQgBQAPABAJAHQAKAHAAAPQAAAcgiAAgAgfADIAAAZIAOAAQAJAAAEgDQADgEAAgFQAAgGgEgEQgEgDgIgBIgOABg");
	this.shape_5.setTransform(44.2,32.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZAjQgMgMAAgWQAAgUANgNQANgNAVAAQAQAAAMAJIgJAPQgIgHgMAAQgLAAgGAIQgIAIABANQgBAcAaAAQALAAAJgIIAIARQgJAFgIACQgGABgJAAQgTAAgMgLg");
	this.shape_6.setTransform(33.5,32.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAUArQgEgDgBgEQgDAEgIAEQgGACgGAAQgPAAgJgHQgHgIgBgMQAAgPAMgIQALgKAVAAIAIACQAAgQgSAAQgLAAgJAEIgEgQQALgFAOAAQAUAAAJAKQAKAJAAAaIAAASQAAARAGAEQgCAFgCABIgIABQgEAAgEgDgAgSASQAAAMANgBQASAAAAgSIAAgJIgIgBQgXABAAAQg");
	this.shape_7.setTransform(24.6,32.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZAjQgMgMAAgWQAAgUANgNQAMgNAWAAQAQAAAMAJIgJAPQgIgHgMAAQgLAAgHAIQgGAIAAANQAAAcAZAAQALAAAKgIIAHARQgKAFgGACQgHABgJAAQgTAAgMgLg");
	this.shape_8.setTransform(15.7,32.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AglAtIAAhYIAngBQAPAAAIAHQAJAGgBALQABAGgEAFQgDAFgHADQASAFAAAQQgBALgIAIQgJAGgRAAgAgQAGIAAAXIARAAQAQAAAAgMQAAgGgFgDQgEgCgHAAgAgQgcIAAAUIAQAAQAOAAAAgLQAAgEgDgDQgEgDgGAAIgRABg");
	this.shape_9.setTransform(6.9,32.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgkAsIAAhXIAVAAIAAAfIARgBQAQAAAKAJQAJAGAAAOQAAANgIAIQgJAIgTgBgAgPADIAAAZIAPABQAQAAAAgOQAAgFgDgEQgEgDgJAAIgPAAg");
	this.shape_10.setTransform(153.8,13.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgJAsIAAhGIgaAAIAAgRIBHAAIAAARIgaAAIAABGg");
	this.shape_11.setTransform(144.9,13.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgZAiQgMgMAAgVQAAgUANgNQAMgNAWAAQAQAAAMAIIgJAQQgIgHgMAAQgLAAgHAIQgGAHAAAOQAAAcAZAAQALAAAKgIIAHARQgJAFgHABQgHACgJAAQgTAAgMgMg");
	this.shape_12.setTransform(136.4,13.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgfAhQgLgMAAgVQAAgUAMgMQAMgNASAAQAUAAALANQALAMAAAUQABAWgMAMQgLAMgUAAQgTAAgMgNgAgOgVQgGAIAAANQAAAdAUAAQAKAAAFgHQAGgIAAgOQAAgcgVAAQgIAAgGAHg");
	this.shape_13.setTransform(127.1,13.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AATAsIAAgmIgkAAIAAAmIgVAAIAAhXIAVAAIAAAhIAkAAIAAghIAUAAIAABXg");
	this.shape_14.setTransform(117.2,13.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAsA8IAAgfIhpAAIAAhYIAUAAIAABHIAaAAIAAhHIATAAIAABHIAaAAIAAhHIAUAAIAABHIAMAAIAAAwg");
	this.shape_15.setTransform(105.5,15.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgfAhQgLgMAAgVQAAgUAMgMQAMgNASAAQAUAAALANQALAMAAAUQABAWgMAMQgLAMgUAAQgTAAgMgNgAgPgVQgFAIAAANQAAAdAUAAQAKAAAFgHQAGgIAAgOQAAgcgVAAQgIAAgHAHg");
	this.shape_16.setTransform(93.4,13.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgDAuIgQgeIgHgPIgBgEIgBAAIgCAOIgFAhIgVAAIARhZIAIAAIAfA+IAgg+IAIAAIARBZIgWAAIgHgpIAAgGIgBAAIgDAHIgVAqg");
	this.shape_17.setTransform(82.4,13.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgmAtIAAgRIADABQAEgBACgFQABgGAFgGQAFgFAHgCQgVgEgBgSQAAgMAJgHQAIgIASAAIAlACIAABXIgVAAIAAghIgFAAQgWAAgDAUQgCAPgPAAIgJgBgAgIgZQgEADABAFQAAAGAEAEQAFADAIAAIAMABIAAgZIgQgBQgGAAgEAEg");
	this.shape_18.setTransform(66.2,13.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAUArQgDgDgCgFQgDAGgHACQgGADgIAAQgOAAgJgHQgHgHAAgNQgBgPAMgIQALgJAVAAIAIABQAAgQgSAAQgMAAgIAEIgEgQQAKgFAPAAQAUAAAJAJQAKAKAAAZIAAASQgBASAIAFQgDAEgDABIgHABQgFAAgDgDgAgSARQAAAMANABQASAAAAgTIAAgIIgIgBQgYAAABAPg");
	this.shape_19.setTransform(57.2,13.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAKAeQgDgYgWAAIgBAAIAAAmIgVAAIAAhXIAVAAIAAAhIABAAQAWAAADgTQACgPAPgBIAJABIAAARIgDgBQgEABgBAFQgEAQgTAEQAUAFAEAUQABAFAEABIAEgBIAAARIgKABQgPAAgDgQg");
	this.shape_20.setTransform(48.2,13.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgfAhQgLgMABgVQAAgUALgMQAMgNASAAQAUAAALANQALAMAAAUQABAWgMAMQgLAMgUAAQgTAAgMgNgAgPgVQgFAIAAANQAAAdAUAAQAKAAAFgHQAGgIAAgOQAAgcgVAAQgIAAgHAHg");
	this.shape_21.setTransform(38.5,13.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgZAiQgMgMAAgVQAAgUANgNQAMgNAWAAQAQAAAMAIIgJAQQgIgHgMAAQgLAAgHAIQgGAHAAAOQAAAcAZAAQALAAAKgIIAHARQgJAFgHABQgHACgJAAQgTAAgMgMg");
	this.shape_22.setTransform(29.3,13.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAgAsIAAhXIAUAAIAABXgAgzAsIAAhXIAUAAIAAAfIAQgBQAPAAAJAJQAKAGAAAOQAAAcgiAAgAgfADIAAAaIAOAAQAJAAAEgEQADgEAAgGQAAgFgEgEQgEgEgIABIgOAAg");
	this.shape_23.setTransform(18.5,13.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgoA9IAAh4IAigBQASAAALAIQALAIAAAPQgBAPgPAIQAXAHAAAYQAAARgNAKQgMAKgTgBgAgSArIAKABQANAAAGgFQAIgEgBgNQAAgKgFgEQgHgFgOAAIgKAAgAgSgpIAAAcIAKAAQAUAAAAgPQAAgOgSAAIgMABg");
	this.shape_24.setTransform(7.4,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t5, new cjs.Rectangle(0,0,160.4,42.5), null);


(lib.t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AATAtIAAgmIgkAAIAAAmIgVAAIAAhYIAVAAIAAAhIAkAAIAAghIAUAAIAABYg");
	this.shape.setTransform(70.7,32.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnBFIAAhaIAVAAIAAA1IA0g3IAGAAIAABaIgVAAIAAg2Ig0A4gAgSgtQgHgHgDgMIARgEQADAPALAAQALAAACgPIARAEQgCAMgJAHQgIAGgMAAQgLAAgJgGg");
	this.shape_1.setTransform(60.6,30);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAUArQgDgDgCgEQgDAEgIAEQgFACgHAAQgQAAgHgHQgJgIAAgMQAAgPAMgIQALgKAVAAIAJACQAAgQgTAAQgMAAgIAEIgEgQQAKgFAPAAQAUAAAJAKQAJAJAAAaIAAASQABARAGAEQgBAFgDABIgIABQgEAAgEgDgAgTASQAAAMAOgBQASAAAAgSIAAgJIgIgBQgYABAAAQg");
	this.shape_2.setTransform(51,32.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgjAlIAKgRQALAJAOAAQAOAAABgLQgBgMgQAAIgMABIAAgPIANAAQAOAAAAgKQAAgFgEgCQgDgDgGAAQgMAAgLAGIgHgQQAQgIAPABQAOgBAJAIQAKAHAAAKQgBAPgOAFQAHACAFAFQAFAFAAAHQAAAOgLAHQgKAHgQAAQgVABgNgKg");
	this.shape_3.setTransform(42.1,32.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnAuIAAhZIAVAAIAAA1IA1g3IAFAAIAABaIgVAAIAAg1Ig0A2g");
	this.shape_4.setTransform(33.1,32.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAfA8IAAgfIg9AAIAAAfIgSAAIAAgwIAIAAQAJgLAFgQQAFgQAAgQIAAgMIA6AAIAABHIAMAAIAAAwgAgUAMIAmAAIAAg3IgWAAQgBAkgPATg");
	this.shape_5.setTransform(22.6,33.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgnAuIAAhZIAVAAIAAA1IA0g3IAGAAIAABaIgVAAIAAg1Ig0A2g");
	this.shape_6.setTransform(7.1,32.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgnAvIAAhaIAVAAIAAA1IA0g4IAGAAIAABaIgVAAIAAg0Ig0A3g");
	this.shape_7.setTransform(87.8,13.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgnAvIAAhaIAVAAIAAA1IA1g4IAFAAIAABaIgVAAIAAg0Ig0A3g");
	this.shape_8.setTransform(77.6,13.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAZA8IAAgfIhEAAIAAhYIAWAAIAABHIAfAAIAAhHIAVAAIAABHIAMAAIAAAwg");
	this.shape_9.setTransform(67.7,15.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAUArQgDgDgCgFQgDAGgIACQgFADgHAAQgQAAgHgHQgJgHAAgNQAAgPAMgIQALgJAVAAIAJABQAAgQgTAAQgMAAgIAEIgEgQQAKgFAPAAQAUAAAJAJQAJAKAAAZIAAASQABASAGAFQgBAEgDABIgIABQgEAAgEgDgAgTARQAAAMAOABQASAAAAgTIAAgIIgIgBQgYAAAAAPg");
	this.shape_10.setTransform(57.7,13.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AglAtIAAhYIAngBQAPAAAIAHQAJAHgBALQABAFgEAFQgDAFgHADQASAFAAAQQgBAMgIAGQgJAHgRAAgAgQAGIAAAXIARAAQAQAAAAgLQAAgHgEgCQgFgDgHAAgAgQgbIAAATIAQAAQAOAAAAgKQAAgFgDgCQgEgDgGAAIgRABg");
	this.shape_11.setTransform(48.7,13.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgfAhQgKgMgBgVQAAgUAMgMQAMgNASAAQAUAAALANQAMAMAAAUQAAAWgMAMQgLAMgUAAQgTAAgMgNgAgPgVQgFAIAAANQAAAdAUAAQAJAAAHgHQAFgIAAgOQAAgcgVAAQgIAAgHAHg");
	this.shape_12.setTransform(39,13.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AATAsIAAgmIgkAAIAAAmIgVAAIAAhXIAVAAIAAAhIAkAAIAAghIAUAAIAABXg");
	this.shape_13.setTransform(29.1,13.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AATAsIAAgmIgkAAIAAAmIgVAAIAAhXIAVAAIAAAhIAkAAIAAghIAUAAIAABXg");
	this.shape_14.setTransform(19,13.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AguA/IAAh7IAWAAIAABRIA+hTIAJAAIAAB7IgVAAIAAhRIg/BTg");
	this.shape_15.setTransform(8,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4, new cjs.Rectangle(0,0,95.1,42.5), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkAtIAAhYIAVAAIAAAfIARgBQAQABAKAHQAJAHAAAPQAAAMgIAIQgJAIgTAAgAgPADIAAAZIAPAAQAQABAAgNQAAgGgDgDQgEgFgJAAIgPABg");
	this.shape.setTransform(125.5,32.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKAtIAAhHIgZAAIAAgRIBHAAIAAARIgZAAIAABHg");
	this.shape_1.setTransform(116.6,32.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZAjQgMgMAAgWQAAgUANgNQANgNAVAAQAQAAALAJIgJAPQgHgHgMAAQgLAAgHAIQgHAIAAANQABAcAZAAQAMAAAIgIIAIARQgJAFgIACQgGABgJAAQgTAAgMgLg");
	this.shape_2.setTransform(108.1,32.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeAiQgLgNAAgVQgBgTAMgOQALgMATAAQAUAAAMAMQALANgBAUQAAAWgLAMQgMAMgTAAQgTAAgLgMgAgOgVQgGAIAAANQAAAdAUAAQAJAAAGgHQAGgIAAgOQAAgcgVAAQgJAAgFAHg");
	this.shape_3.setTransform(98.8,32.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATAtIAAgmIgkAAIAAAmIgVAAIAAhYIAVAAIAAAhIAkAAIAAghIAUAAIAABYg");
	this.shape_4.setTransform(88.9,32.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AglAtIAAhYIAmgBQAQAAAIAHQAIAGAAALQAAAGgDAFQgEAFgGADQARAFAAAQQAAALgJAIQgIAGgRAAgAgQAGIAAAXIARAAQAQAAAAgMQAAgGgEgDQgFgCgHAAgAgQgcIAAAUIAQAAQAOAAAAgLQAAgEgEgDQgDgDgGAAIgRABg");
	this.shape_5.setTransform(79.5,32.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgnAuIAAhZIAVAAIAAA1IA1g3IAFAAIAABaIgVAAIAAg1Ig0A2g");
	this.shape_6.setTransform(69.5,32.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJAtIAAhHIgaAAIAAgRIBHAAIAAARIgaAAIAABHg");
	this.shape_7.setTransform(60.3,32.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AASAtIAAhHIgjAAIAABHIgVAAIAAhYIBNAAIAABYg");
	this.shape_8.setTransform(51.1,32.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAUArQgDgDgCgEQgDAEgHAEQgHACgHAAQgPAAgHgHQgJgIABgMQAAgPALgIQALgKAVAAIAJACQgBgQgSAAQgMAAgIAEIgEgQQALgFAPAAQATAAAJAKQAKAJgBAaIAAASQAAARAIAEQgDAFgDABIgHABQgEAAgEgDgAgTASQAAAMAOgBQASAAAAgSIAAgJIgIgBQgXABgBAQg");
	this.shape_9.setTransform(41.7,32.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAfA8IAAgfIg9AAIAAAfIgSAAIAAgwIAIAAQAJgLAFgQQAFgQAAgQIAAgMIA6AAIAABHIAMAAIAAAwgAgUAMIAmAAIAAg3IgWAAQgBAkgPATg");
	this.shape_10.setTransform(31.7,33.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAUArQgEgDgBgEQgDAEgIAEQgGACgGAAQgPAAgJgHQgHgIgBgMQAAgPAMgIQALgKAVAAIAIACQAAgQgSAAQgLAAgJAEIgEgQQALgFAOAAQAUAAAJAKQAKAJAAAaIAAASQAAARAGAEQgCAFgCABIgIABQgEAAgEgDgAgSASQAAAMANgBQASAAAAgSIAAgJIgIgBQgXABAAAQg");
	this.shape_11.setTransform(21.9,32.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgnAuIAAhZIAVAAIAAA1IA0g3IAGAAIAABaIgVAAIAAg1Ig0A2g");
	this.shape_12.setTransform(7.1,32.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgkAsIAAhXIAVAAIAAAfIARgBQAQAAAKAJQAJAGAAAOQAAANgIAIQgJAIgTgBgAgPADIAAAZIAPABQAQAAAAgOQAAgFgDgEQgEgDgJAAIgPAAg");
	this.shape_13.setTransform(125.1,13.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgKAsIAAhGIgZAAIAAgRIBHAAIAAARIgZAAIAABGg");
	this.shape_14.setTransform(116.1,13.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgZAiQgMgMAAgVQAAgUANgNQANgNAVAAQAQAAALAIIgJAQQgHgHgMAAQgLAAgGAIQgIAHAAAOQABAcAZAAQAMAAAIgIIAIARQgJAFgIABQgGACgJAAQgTAAgMgMg");
	this.shape_15.setTransform(107.6,13.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQgBgUAMgMQALgNATAAQAUAAAMANQALAMgBAUQAAAWgLAMQgMAMgTAAQgTAAgLgNgAgOgVQgGAIAAANQAAAdAUAAQAJAAAHgHQAFgIAAgOQAAgcgVAAQgJAAgFAHg");
	this.shape_16.setTransform(98.4,13.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AATAsIAAgmIgkAAIAAAmIgVAAIAAhXIAVAAIAAAhIAkAAIAAghIAUAAIAABXg");
	this.shape_17.setTransform(88.4,13.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AATAsIAAgmIgkAAIAAAmIgVAAIAAhXIAVAAIAAAhIAkAAIAAghIAUAAIAABXg");
	this.shape_18.setTransform(78.3,13.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgfAiQgLgLAAgWQAAgUANgNQANgNARAAQATAAAMAMQALALAAASIgBAKIg/AAQABALAHAGQAGAGALAAQAOAAAHgHIAIAQQgLAIgVAAQgUAAgMgMgAgUgIIAqAAQgCgUgTAAQgRAAgEAUg");
	this.shape_19.setTransform(68.4,13.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgoA/IAAh7IAVAAIAAAGQAIgIALAAQApAAAAAvQAAAVgLAMQgMALgTAAQgKAAgIgDIAAAlgAgTgmIAAAtQAFAFAIAAQANAAAGgHQAHgGAAgPQAAgPgGgGQgGgHgOAAQgHAAgGAGg");
	this.shape_20.setTransform(58.7,15.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgkAtIAAhYIAlgBQAQAAAIAHQAJAHAAALQgBAFgDAFQgDAFgHADQARAFAAAQQABAMgKAGQgIAHgSAAgAgQAGIAAAXIARAAQAQAAAAgLQAAgHgFgCQgEgDgHAAgAgQgbIAAATIAQAAQAOAAAAgKQAAgFgEgCQgDgDgGAAIgRABg");
	this.shape_21.setTransform(49.1,13.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgfAiQgLgLAAgWQAAgUANgNQANgNARAAQATAAAMAMQALALAAASIgBAKIg/AAQABALAHAGQAGAGALAAQAOAAAHgHIAIAQQgLAIgVAAQgUAAgMgMgAgUgIIAqAAQgCgUgTAAQgRAAgEAUg");
	this.shape_22.setTransform(39.3,13.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AATAsIAAgmIgkAAIAAAmIgVAAIAAhXIAVAAIAAAhIAkAAIAAghIAUAAIAABXg");
	this.shape_23.setTransform(29.3,13.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAUArQgDgDgCgFQgDAGgIACQgGADgHAAQgPAAgHgHQgJgHAAgNQAAgPAMgIQALgJAVAAIAJABQAAgQgTAAQgLAAgJAEIgEgQQAKgFAQAAQATAAAJAJQAJAKAAAZIAAASQAAASAIAFQgCAEgEABIgHABQgFAAgDgDgAgTARQAAAMAOABQASAAAAgTIAAgIIgIgBQgYAAAAAPg");
	this.shape_24.setTransform(19.8,13.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgCA9IgZhBIgNBAIgVAAIAZh5IALAAIAZBSIAahSIALAAIAZB5IgVAAIgNhAIgYBBg");
	this.shape_25.setTransform(8.6,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(0,0,132.1,42.5), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgnAuIAAhZIAVAAIAAA1IA1g3IAFAAIAABaIgVAAIAAg1Ig0A2g");
	this.shape.setTransform(134.2,32.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAKAdQgDgXgWAAIgBAAIAAAnIgVAAIAAhYIAVAAIAAAhIABAAQAWAAADgTQACgPAPAAIAJAAIAAARIgDAAQgEAAgBAEQgEARgTAFQAUAEAEAUQABAGAEgBIAEAAIAAARIgKABQgPgBgDgQg");
	this.shape_1.setTransform(124.6,32.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgoA/IAAh7IAVAAIAAAGQAIgIALAAQApAAAAAvQAAAVgLAMQgMALgTAAQgKAAgIgDIAAAlgAgTgmIAAAtQAFAFAIAAQANAAAGgHQAHgGAAgPQAAgPgGgGQgGgHgOAAQgHAAgGAGg");
	this.shape_2.setTransform(115,33.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfAiQgLgNABgVQAAgTALgOQAMgMASAAQAUAAALAMQALANAAAUQAAAWgLAMQgLAMgUAAQgTAAgMgMgAgOgVQgGAIAAANQAAAdAUAAQAKAAAFgHQAGgIAAgOQAAgcgVAAQgJAAgFAHg");
	this.shape_3.setTransform(105,32.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfAyQgLgOAAgZQAAgPADgMQACgMAGgIQAGgIAJgGQAKgFANgDIAcgFIAFASIgnAIQgFABgGADQgHAEgDAHQgEAGgCALQAGgIAJgEQAIgFAHAAQASAAALAMQAKAKAAATQAAAUgLANQgLAMgUAAQgUAAgMgOgAgOABQgHAIAAALQAAAMAHAIQAGAIAJAAQALAAAFgIQAGgHAAgMQAAgNgGgHQgFgGgLAAQgJAAgGAGg");
	this.shape_4.setTransform(95.2,30.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghArQAYABAAgMQAAgJgHgQIgbhEIAVAAIAXA9IAWg9IAWAAIgoBnQgDAIgJAGQgLAGgPAAg");
	this.shape_5.setTransform(85.6,34);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfAiQgKgNgBgVQAAgTAMgOQAMgMASAAQAUAAALAMQAMANAAAUQAAAWgMAMQgLAMgUAAQgTAAgMgMgAgPgVQgFAIAAANQAAAdAUAAQAJAAAHgHQAFgIAAgOQAAgcgVAAQgIAAgHAHg");
	this.shape_6.setTransform(71.1,32.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AglAtIAAhYIAmgBQAQAAAIAHQAJAGAAALQgBAGgDAFQgEAFgGADQARAFAAAQQAAALgJAIQgIAGgSAAgAgQAGIAAAXIARAAQAQAAAAgMQAAgGgEgDQgFgCgHAAgAgQgcIAAAUIAQAAQAOAAAAgLQAAgEgEgDQgDgDgGAAIgRABg");
	this.shape_7.setTransform(61.8,32.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgJAtIAAhHIgaAAIAAgRIBHAAIAAARIgaAAIAABHg");
	this.shape_8.setTransform(52.8,32.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZAjQgMgMAAgWQAAgUANgNQANgNAVAAQAQAAAMAJIgJAPQgIgHgMAAQgLAAgGAIQgIAIABANQgBAcAaAAQALAAAJgIIAIARQgJAFgIACQgGABgJAAQgTAAgMgLg");
	this.shape_9.setTransform(44.3,32.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfAjQgLgMAAgWQAAgUANgNQANgNARAAQATAAAMALQALAMAAASIgBALIg/AAQABAKAHAGQAGAGALAAQAOAAAHgIIAIARQgLAIgVAAQgUAAgMgLgAgUgIIAqAAQgCgUgTAAQgRAAgEAUg");
	this.shape_10.setTransform(35,32.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AARAtIAAgiQgNADgIAAQgQAAgJgJQgIgHAAgPIAAgaIAVAAIAAAYQAAARAQAAQAIAAAJgDIAAgmIAVAAIAABYg");
	this.shape_11.setTransform(25.1,32.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAUArQgEgDgBgEQgDAEgHAEQgGACgIAAQgPAAgHgHQgIgIAAgMQAAgPALgIQALgKAVAAIAJACQgBgQgSAAQgMAAgIAEIgEgQQAKgFAQAAQATAAAJAKQAKAJAAAaIAAASQgBARAIAEQgCAFgEABIgHABQgFAAgDgDgAgTASQAAAMAOgBQASAAAAgSIAAgJIgIgBQgYABAAAQg");
	this.shape_12.setTransform(15.9,32.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAKAdQgDgXgWAAIgBAAIAAAnIgVAAIAAhYIAVAAIAAAhIABAAQAWAAADgTQACgPAPAAIAJAAIAAARIgDAAQgEAAgBAEQgEARgTAFQAUAEAEAUQABAGAEgBIAEAAIAAARIgKABQgPgBgDgQg");
	this.shape_13.setTransform(6.9,32.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgfAiQgLgLAAgWQAAgUANgNQANgNARAAQATAAAMAMQALALAAASIgBAKIg/AAQABALAHAGQAGAGALAAQAOAAAHgHIAIAQQgLAIgVAAQgUAAgMgMgAgUgIIAqAAQgCgUgTAAQgRAAgEAUg");
	this.shape_14.setTransform(137.3,13.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgfAhQgLgMAAgVQAAgUAMgMQAMgNASAAQAUAAALANQALAMAAAUQABAWgMAMQgLAMgUAAQgTAAgMgNgAgPgVQgFAIAAANQAAAdAUAAQAKAAAFgHQAGgIAAgOQAAgcgVAAQgIAAgHAHg");
	this.shape_15.setTransform(127.6,13.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AATAsIAAgmIgkAAIAAAmIgVAAIAAhXIAVAAIAAAhIAkAAIAAghIAUAAIAABXg");
	this.shape_16.setTransform(117.6,13.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgkAsIAAhXIAVAAIAAAfIARgBQAQAAAKAJQAJAGAAAOQAAANgIAIQgJAIgTgBgAgPADIAAAZIAPABQAQAAAAgOQAAgFgDgEQgEgDgJAAIgPAAg");
	this.shape_17.setTransform(108.2,13.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgrAaQAJAAAFgFQAGgGAEgPQADgRAAgVIAAgGIA7AAIAABYIgTAAIAAhHIgXAAQAAASgCAPQgEAQgGAJQgHAJgHADQgGACgMAAg");
	this.shape_18.setTransform(97.9,13.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgfAiQgLgLAAgWQAAgUANgNQANgNARAAQATAAAMAMQALALAAASIgBAKIg/AAQABALAHAGQAGAGALAAQAOAAAHgHIAIAQQgLAIgVAAQgUAAgMgMgAgUgIIAqAAQgCgUgTAAQgRAAgEAUg");
	this.shape_19.setTransform(88.3,13.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgKAsIAAhGIgZAAIAAgRIBHAAIAAARIgZAAIAABGg");
	this.shape_20.setTransform(79.2,13.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgnAvIAAhaIAVAAIAAA1IA1g4IAFAAIAABaIgVAAIAAg0Ig0A3g");
	this.shape_21.setTransform(70,13.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AARAsIAAghQgMADgJAAQgQAAgIgJQgJgHAAgQIAAgZIAVAAIAAAXQAAASAQAAQAIAAAJgCIAAgnIAVAAIAABXg");
	this.shape_22.setTransform(59.9,13.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgJAjQgKgKgCgTIgPAAIAAAmIgUAAIAAhXIAUAAIAAAhIAQAAQADgPAJgKQAJgKAQAAQAUAAAKANQAJAMABAUQAAAWgMAMQgKAMgSAAQgRAAgJgLgAAEgUQgFAIAAAMQAAAdASAAQAIAAAGgHQAFgHAAgPQAAgcgTAAQgJAAgEAIg");
	this.shape_23.setTransform(49,13.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgrAaQAJAAAFgFQAGgGAEgPQADgRAAgVIAAgGIA7AAIAABYIgTAAIAAhHIgXAAQAAASgCAPQgEAQgGAJQgHAJgHADQgGACgMAAg");
	this.shape_24.setTransform(36.7,13.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAKAeQgDgYgWAAIgBAAIAAAmIgVAAIAAhXIAVAAIAAAhIABAAQAWAAADgTQACgPAPgBIAJABIAAARIgDgBQgEABgBAFQgEAQgTAEQAUAFAEAUQABAFAEABIAEgBIAAARIgKABQgPAAgDgQg");
	this.shape_25.setTransform(27.6,13.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgZAiQgMgMAAgVQAAgUANgNQAMgNAWAAQAQAAAMAIIgJAQQgIgHgMAAQgLAAgHAIQgGAHAAAOQAAAcAZAAQALAAAKgIIAHARQgKAFgGABQgHACgJAAQgTAAgMgMg");
	this.shape_26.setTransform(18.4,13.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AguA/IAAh7IAWAAIAABRIA+hTIAJAAIAAB7IgVAAIAAhRIg/BTg");
	this.shape_27.setTransform(8,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(0,0,144.5,42.5), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAgAtIAAhYIAUAAIAABYgAgzAtIAAhYIAUAAIAAAfIAQgBQAPABAJAHQAKAHAAAPQAAAcgiAAgAgfADIAAAZIAOAAQAJAAAEgDQADgEAAgFQAAgGgEgEQgEgDgIgBIgOABg");
	this.shape.setTransform(78.2,32.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZAjQgMgMAAgWQAAgUANgNQANgNAVAAQAQAAALAJIgJAPQgHgHgMAAQgLAAgHAIQgHAIAAANQABAcAZAAQAMAAAIgIIAIARQgJAFgIACQgGABgJAAQgTAAgMgLg");
	this.shape_1.setTransform(67.6,32.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeAiQgLgNAAgVQgBgTAMgOQALgMATAAQAUAAAMAMQALANgBAUQAAAWgLAMQgMAMgTAAQgTAAgLgMgAgOgVQgGAIAAANQAAAdAUAAQAJAAAGgHQAGgIAAgOQAAgcgVAAQgJAAgFAHg");
	this.shape_2.setTransform(58.3,32.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZAjQgMgMAAgWQAAgUANgNQANgNAVAAQAQAAALAJIgJAPQgHgHgMAAQgLAAgHAIQgHAIAAANQABAcAZAAQAMAAAIgIIAIARQgJAFgIACQgGABgJAAQgTAAgMgLg");
	this.shape_3.setTransform(49.1,32.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfAjQgLgMAAgWQAAgUANgNQANgNARAAQATAAAMALQALAMAAASIgBALIg/AAQABAKAHAGQAGAGALAAQAOAAAHgIIAIARQgLAIgVAAQgUAAgMgLgAgUgIIAqAAQgCgUgTAAQgRAAgEAUg");
	this.shape_4.setTransform(39.8,32.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgqAaQAIABAFgGQAGgGAEgQQADgQABgVIAAgGIA6AAIAABYIgUAAIAAhIIgVAAQgBATgDAPQgDAQgHAJQgGAJgGACQgIADgKAAg");
	this.shape_5.setTransform(29.4,32.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAgAtIAAhYIAUAAIAABYgAgzAtIAAhYIAUAAIAAAfIAQgBQAPABAJAHQAKAHAAAPQAAAcgiAAgAgfADIAAAZIAOAAQAJAAAEgDQADgEAAgFQAAgGgEgEQgEgDgIgBIgOABg");
	this.shape_6.setTransform(18.3,32.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AASAtIAAhHIgiAAIAABHIgWAAIAAhYIBNAAIAABYg");
	this.shape_7.setTransform(7,32.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfAiQgLgLAAgWQAAgUANgNQANgNARAAQATAAAMAMQALALAAASIgBAKIg/AAQABALAHAGQAGAGALAAQAOAAAHgHIAIAQQgLAIgVAAQgUAAgMgMgAgUgIIAqAAQgCgUgTAAQgRAAgEAUg");
	this.shape_8.setTransform(117.7,13.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAgAsIAAhXIAUAAIAABXgAgzAsIAAhXIAUAAIAAAfIAQgBQAPAAAJAJQAKAGAAAOQAAAcgiAAgAgfADIAAAaIAOAAQAJAAAEgEQADgEAAgGQAAgFgEgEQgEgEgIABIgOAAg");
	this.shape_9.setTransform(106.4,13.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AATAsIAAgmIgkAAIAAAmIgVAAIAAhXIAVAAIAAAhIAkAAIAAghIAUAAIAABXg");
	this.shape_10.setTransform(95,13.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAfA8IAAgfIg9AAIAAAfIgSAAIAAgwIAIAAQAJgMAFgPQAFgQAAgRIAAgLIA6AAIAABHIAMAAIAAAwgAgUAMIAmAAIAAg3IgWAAQgBAkgPATg");
	this.shape_11.setTransform(84.6,15.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgfAhQgLgMAAgVQAAgUAMgMQAMgNASAAQAUAAALANQALAMAAAUQABAWgMAMQgLAMgUAAQgTAAgMgNgAgOgVQgGAIAAANQAAAdAUAAQAKAAAFgHQAGgIAAgOQAAgcgVAAQgIAAgGAHg");
	this.shape_12.setTransform(74.5,13.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgkAtIAAhYIAlgBQAQAAAIAHQAJAHAAALQAAAFgEAFQgDAFgHADQARAFAAAQQABAMgKAGQgIAHgSAAgAgQAGIAAAXIARAAQAQAAAAgLQAAgHgFgCQgEgDgHAAgAgQgbIAAATIAQAAQAOAAAAgKQAAgFgEgCQgDgDgGAAIgRABg");
	this.shape_13.setTransform(65.2,13.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgeAhQgMgMAAgVQAAgUAMgMQALgNATAAQAUAAAMANQAKAMABAUQAAAWgMAMQgMAMgTAAQgTAAgLgNgAgPgVQgFAIAAANQAAAdAUAAQAJAAAHgHQAFgIAAgOQAAgcgVAAQgIAAgHAHg");
	this.shape_14.setTransform(55.5,13.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgoA/IAAh7IAVAAIAAAGQAIgIALAAQApAAAAAvQAAAVgLAMQgMALgTAAQgKAAgIgDIAAAlgAgTgmIAAAtQAFAFAIAAQANAAAGgHQAHgGAAgPQAAgPgGgGQgGgHgOAAQgHAAgGAGg");
	this.shape_15.setTransform(45.9,15.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AASAsIAAhGIgjAAIAABGIgUAAIAAhXIBLAAIAABXg");
	this.shape_16.setTransform(35.7,13.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgZAiQgMgMAAgVQAAgUANgNQAMgNAWAAQAQAAALAIIgIAQQgIgHgMAAQgLAAgGAIQgIAHABAOQgBAcAaAAQAMAAAIgIIAIARQgJAFgIABQgGACgJAAQgTAAgMgMg");
	this.shape_17.setTransform(26.4,13.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgfAiQgLgLAAgWQAAgUANgNQANgNARAAQATAAAMAMQALALAAASIgBAKIg/AAQABALAHAGQAGAGALAAQAOAAAHgHIAIAQQgLAIgVAAQgUAAgMgMgAgUgIIAqAAQgCgUgTAAQgRAAgEAUg");
	this.shape_18.setTransform(17.1,13.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgoA9IAAh5IBJAAIAAATIgzAAIAAAdIAPgBQAVAAALAKQAMAJAAASQAAARgMAKQgLAKgVAAgAgSAEIAAAnIALAAQANAAAHgFQAFgFAAgKQABgJgGgFQgGgGgOAAIgLABg");
	this.shape_19.setTransform(7.4,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(0,0,124.8,42.5), null);


(lib.qqq = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD052B").s().p("AgqKWQgSgRAAgaIAAh1IhnA8QgVALgZgGQgZgHgMgVQgMgVAGgZQAHgYAVgNICkhfIAAkAIjdCAIAAC9QAAAagSARQgSATgZgBQgZABgSgTQgSgRAAgaIAAh3IhmA8QgVAMgZgHQgZgHgMgVQgNgXAHgXQAGgZAWgMIBmg7Ihng7QgWgNgGgYQgHgZANgVQAMgVAZgHQAZgHAVAMICkBfIDdiAIjdh/IikBfQgVAMgZgHQgZgHgMgVQgNgVAHgZQAGgYAWgNIBng8Ihmg6QgWgNgGgYQgHgYANgWQAMgVAZgHQAZgHAVAMIBmA8IAAh4QAAgZASgSQASgRAZAAQAZAAASARQASASAAAZIAAC+IDdCAIAAkBIikheQgVgMgHgZQgGgZAMgVQAMgVAZgHQAZgGAVALIBnA8IAAh2QAAgZASgSQASgRAYAAQAaAAARARQATATgBAYIAAB2IBng8QAVgLAZAGQAZAHAMAVQANAVgGAZQgHAYgWANIikBeIAAEBIDeiAIAAi+QAAgZARgSQASgRAZAAQAaAAASARQARASAAAZIAAB4IBmg8QAWgMAZAHQAYAHANAVQAMAVgGAZQgHAYgWANIhmA6IBnA8QAWANAHAYQAGAZgMAVQgNAVgYAHQgZAHgWgMIikhfIjdB/IDdCAICkhfQAWgMAZAHQAYAHANAVQAMAVgGAZQgGAYgXANIhnA7IBmA7QAWAMAHAZQAGAZgNAVQgIAOgOAJQgOAHgQABQgRgBgOgHIhmg8IAAB3QAAAagRARQgSATgagBQgZABgSgTQgRgRAAgaIAAi9IjeiAIAAEAICkBfQAWANAHAYQAGAZgNAVQgMAVgZAHQgZAGgVgLIhng8IAAB1QAAAagSARQgSASgZAAQgYAAgSgSgAgiJrQAAAPAKAKQALALANgBQAOAAALgKQAKgKAAgPIAAijICOBSQAMAHAOgDQAPgEAHgMQAHgMgEgPQgEgOgMgGIixhnIAAk8IESCeIAADMQAAAPAKAKQAKAKAOAAQAPAAAKgKQAKgKAAgPIAAikICNBSQANAHAOgEQAOgEAHgMQAHgNgEgNQgEgOgMgHIiNhSICOhSQANgIADgNQAEgPgHgMQgHgLgOgFQgOgDgMAHIiyBmIkSieIESidICyBmQAMAGAOgDQAOgEAHgLQAHgNgEgOQgDgOgNgHIiOhTICNhRQAMgHAEgOQAEgPgHgMQgHgMgOgDQgPgEgMAHIiNBSIAAilQAAgPgKgJQgKgKgPAAQgOAAgKAKQgKAKAAAOIAADMIkSCfIAAk8ICxhnQAMgHAEgOQAEgOgHgMQgHgMgPgEQgOgDgMAGIiOBTIAAikQAAgOgKgKQgKgLgPABQgNgBgLALQgKAKAAAOIAACkIiOhTQgMgHgOAEQgPAEgGAMQgHANADANQAEAOAMAHICxBnIAAE8IkRifIAAjMQAAgOgLgKQgKgKgOAAQgOAAgLAKQgKAKAAAOIAAClIiNhSQgMgHgOAEQgPADgHAMQgGAMADAPQAEAOAMAHICNBRIiOBTQgMAHgEAOQgEAOAHANQAHAMAPADQAOAEAMgHICxhmIESCdIkSCeIixhmQgMgHgOADQgPAFgHALQgHANAEAOQAEAOAMAHICOBSIiNBSQgMAHgEAOQgDAOAGAMQAHAMAPAEQAOAEAMgHICNhSIAACkQAAAPAKAKQALAKAOAAQAOAAAKgKQALgKAAgPIAAjMIERieIAAE8IixBnQgMAGgEAOQgEAPAIAMQAHAMAOAEQAOADAMgHICOhSg");
	this.shape.setTransform(0,0,0.198,0.198);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.qqq, new cjs.Rectangle(-11.8,-13.5,23.8,27), null);


(lib.p5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p5, new cjs.Rectangle(0,0,600,500), null);


(lib.p4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p4, new cjs.Rectangle(0,0,600,500), null);


(lib.p3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p3, new cjs.Rectangle(0,0,600,500), null);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2, new cjs.Rectangle(0,0,600,500), null);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1, new cjs.Rectangle(0,0,600,500), null);


(lib.legal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AARAbIAAgOIggAAIAAAMIgBABIgCABIgFAAIAAgTIACAAIADgBIADgCIABgEIACgFIACgJIABgNIAZAAIAAAiIAHAAIAAARIAAACIgCAAgAgEgIIgBAHIgBADIAAADIgBABIAQAAIAAgYIgMAAIgBAKg");
	this.shape.setTransform(27.2,19.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AARAbIAAgOIghAAIAAAMIgBABIgBABIgFAAIAAgTIADAAIACgBIACgCIACgEIADgFIABgJIABgNIAZAAIAAAiIAIAAIAAARIgBACIgCAAgAgEgIIgBAHIgBADIgBADIAAABIAQAAIAAgYIgMAAIgBAKg");
	this.shape_1.setTransform(95,19.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AIZCGIgFgDIgEgFIgCgGIACgBIADgBQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAABIABACIACADIADACIAGABIAFgBIADgCIACgDIABgEIAAgEQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAIgDgDIgIAAIAAgGIAGgBQABAAAAAAQABAAABAAQAAgBABAAQAAAAABgBIABgDIABgEIgBgEIgBgDIgDgCIgFAAIgDAAIgEACIgCADIgBADIgBACIgDAAIgEgBIACgHIAFgFIAFgDIAHgBIAHABQADABACACIAEAFIAAAGIAAAFIgCAEIgDACIgEACQAGACADADQACADAAAGQAAAEgCADQgBADgCACQgDADgDABIgIABIgIgBgAHrCGIgEgBIgEgCIgDgCIACgEIACgBIACABIADABIADACIAFAAIAEgBIAFgCQAAgBAAAAQABAAAAgBQAAAAABgBQAAgBAAAAIABgGIgBgFIgCgDIgEgCIgFgBIgJABIgFgBIAFgbIAbAAIAAADIgBADIgEABIgRAAIgCAOIAIgBQAEAAADACIAGADQADADABADIABAHQgBAEgBAEQgCAEgDACQgCADgEABQgEACgEAAIgFgBgAGOCFQgEgCgDgDQgDgEgCgFQgBgGAAgHQAAgIABgGQACgFADgEQADgDAEgCIAIgCQAEAAAEACIAGAFQADAEACAFQABAGABAIQgBAHgBAGQgCAFgDAEIgGAFQgEACgEAAIgIgCgAGRBUIgEAEIgEAHIgBALIABAKIAEAIIAEADIAFABIAEgBQADgBACgCIADgIIAAgKIAAgLQgBgFgCgCQgCgDgDgBIgEgBIgFABgAEwCFQgEgCgCgDQgDgEgCgFQgBgGAAgHQAAgIABgGQACgFADgEQACgDAEgCIAIgCQAFAAAEACIAHAFQADAEABAFQACAGAAAIQAAAHgCAGQgBAFgDAEIgHAFQgEACgFAAIgIgCgAE0BUIgFAEIgCAHIgBALIABAKIACAIIAFADIAEABIAGgBQACgBABgCIAEgIIABgKIgBgLQgCgFgCgCQgBgDgCgBIgGgBIgEABgAECCGIgFgEIgFgHQgBgDAAgFQAAgEACgEQACgEADgFIAOgTIACgCIADAAIAHAAIgRAVIgCACIgCACIAFgCIAFgBQADAAADABIAGADQACADABADQACADAAAEQAAAEgCAEIgDAFIgHAEIgIACIgIgBgAEGBqIgFACIgBAEIgBAEIAAAFIACAEIAEADIAFABIAFgBIAEgDIACgEIABgEIgBgFQAAgBAAAAQAAgBAAgBQgBAAAAAAQAAgBgBAAIgDgCIgGgBIgEABgAAZCFQgEgCgCgDQgDgEgCgFQgBgGAAgHQAAgIABgGQACgFADgEQACgDAEgCIAIgCQAFAAAEACIAHAFQADAEABAFQACAGAAAIQAAAHgCAGQgBAFgDAEIgHAFQgEACgFAAIgIgCgAAdBUIgFAEIgCAHIgBALIABAKIACAIIAFADIAEABIAGgBQACgBABgCIAEgIIABgKIgBgLQgCgFgCgCQgBgDgCgBIgGgBIgEABgAj8CFQgEgCgFgEQgDgEgCgGQgCgFAAgGQAAgHACgFQACgGADgEIAJgGQAGgCAGAAQAHAAAEACQAGADADADQAFAEACAGQACAFAAAHQAAAGgCAFQgCAGgFAEQgDAEgGACQgEACgHAAQgGAAgGgCgAj4BVQgEABgDADIgDAHQgCAEAAAGQAAAFACAEIADAHQADADAEABQAEACAEAAQAFAAAEgCQADgBACgDQAEgDABgEQABgEAAgFQAAgGgBgEQgBgEgEgDQgCgDgDgBQgEgCgFAAQgEAAgEACgAlECGIgEgBIgDgCIgEgCIACgEIADgBIACABIACABIAEACIAEAAIAFgBIAEgCQABgBAAAAQAAAAABgBQAAAAAAgBQAAgBAAAAIABgGIAAgFIgDgDIgDgCIgGgBIgJABIgEgBIAEgbIAbAAIAAADIAAADIgEABIgRAAIgDAOIAIgBQAEAAADACIAHADQACADABADIABAHQAAAEgCAEQgBAEgDACQgDADgDABQgEACgFAAIgFgBgAmhCFQgEgCgDgDQgDgEgBgFQgBgGAAgHQAAgIABgGQABgFADgEQADgDAEgCIAIgCQAFAAAEACIAGAFQADAEABAFQACAGAAAIQAAAHgCAGQgBAFgDAEIgGAFQgEACgFAAIgIgCgAmeBUIgEAEIgDAHIgBALIABAKIADAIIAEADIAFABIAFgBQACgBACgCQACgDABgFIABgKIgBgLQgBgFgCgCQgCgDgCgBIgFgBIgFABgAosCGIgFgBIgDgCIgDgCIACgEIACgBIACABIACABIAEACIAEAAIAGgBIADgCQABgBAAAAQABAAAAgBQAAAAABgBQAAgBAAAAIABgGIAAgFIgDgDIgEgCIgFgBIgKABIgEgBIAEgbIAcAAIAAADIgBADIgDABIgSAAIgCAOIAHgBQAFAAADACIAGADQADADAAADIABAHQAAAEgBAEQgBAEgDACQgDADgEABQgEACgEAAIgFgBgAqKCFQgEgCgCgDQgDgEgCgFQgBgGAAgHQAAgIABgGQACgFADgEQACgDAEgCIAIgCQAFAAAEACIAHAFQADAEABAFQABAGAAAIQAAAHgBAGQgBAFgDAEIgHAFQgEACgFAAIgIgCgAqGBUIgFAEIgCAHIgBALIABAKIACAIIAFADIAEABIAGgBQACgBABgCIADgIIACgKIgCgLQgBgFgCgCQgBgDgCgBIgGgBIgEABgAHKCGIAAgPIgZAAIgCAAIgBgBIAAgEIAbglIAHAAIAAAkIAJAAIAAAFIAAABIgBAAIgIAAIAAAPgAG2BxIAUAAIAAgWIAAgDIAAgCgAFaCGIAXguIADgEIgeAAIgCgBIAAgBIAAgFIAoAAIAAADIgBADIAAABIgYAwIgBABIgDABgADOCGIASgXIACgCIABgCQgCACgDABIgFABIgGgBIgGgDQgCgDgBgDQgCgDABgEIABgHIAEgGIAGgDQAEgCAEAAQAEAAADACQADABADACQADADABADQABAEAAAEIAAAFIgBAEIgDAEIgDAFIgNATIgCACIgDAAgADXBTIgDADIgDADIgBAFQAAAFADADQADADAFAAIAFgBIAEgCIACgEIABgEIgBgFIgCgDIgEgDIgEAAIgFAAgACfCGIAYguIACgEIgdAAIgBgBIgBgBIAAgFIAnAAIAAADIAAADIAAABIgYAwIgCABIgCABgABxCGIAYguIACgEIgdAAIgCgBIgBgBIAAgFIAoAAIAAADIAAADIgBABIgYAwIgBABIgCABgABWCGIAAgPIgZAAIgCAAIgBgBIAAgEIAcglIAHAAIAAAkIAIAAIAAAFIAAABIgBAAIgHAAIAAAPgABCBxIAUAAIAAgWIAAgDIAAgCgAgZCGIAAgGIAMAAIAAgmIAAgDIgJAIIgCABIgBAAIAAgBIgCAAIgCgDIARgPIAHAAIAAAzIAKAAIAAAGgAhHCGIAAgaIgeAAIAAAaIgJAAIAAg5IAJAAIAAAZIAeAAIAAgZIAIAAIAAA5gAieCGIAAg5IASAAQAFAAAEABQAEABADADQADACAAADQACAEAAAEQAAAEgCADIgDAGIgHAEQgFABgEAAIgJAAIAAAVgAiVBqIAJAAIAFAAIAFgDIACgEIAAgEIAAgFIgCgEIgFgCIgFgBIgJAAgAjJCGIAAg5IAjAAIAAAGIgaAAIAAAzgAl3CGIAAgGIALAAIAAgmIAAgDIgJAIIgBABIgBAAIgBgBIgBAAIgCgDIARgPIAGAAIAAAzIALAAIAAAGgAnbCGIAAgCIABgCIABgCIASgSIAEgEIADgFIACgEIABgFIgBgEIgCgDIgEgCIgDAAIgEAAIgDACIgCADIgCADIgCACIgCAAIgDgBIACgHIADgFIAGgDIAHgBIAHABIAFADQADADABADQABADABADIgBAGIgDAFIgEAFIgFAFIgOAPIADgBIAEAAIASAAIACABIABACIAAAEgAoDCGIAAgGIAMAAIAAgmIAAgDIgKAIIgBABIgBAAIgBgBIAAAAIgCgDIARgPIAFAAIAAAzIAMAAIAAAGgApNCGIAAgPIgZAAIgCAAIAAgBIgBgEIAcglIAHAAIAAAkIAIAAIAAAFIAAABIgCAAIgGAAIAAAPgAphBxIAUAAIAAgWIAAgDIAAgCgAq+CGIAYguIACgEIgdAAIgBgBIgBgBIAAgFIAnAAIAAADIAAADIgBABIgXAwIgCABIgCABgArsCGIAYguIACgEIgdAAIgCgBIAAgBIAAgFIAnAAIAAADIgBADIAAABIgYAwIgBABIgCABgAkwArIAAgOIg4AAIAAgoIAHAAIAAAiIAQAAIAAgiIAJAAIAAAiIAQAAIAAgiIAHAAIAAAiIAHAAIAAARIgBACIgBABgAq1AqIAAg1IAFAAQAAAAAAAAQAAAAABABQAAAAAAAAQAAAAAAABIABAEIAGgFQAEgCAEAAQADAAADACIAFAEQACACABAEIABAIIgBAJIgDAGIgGAFQgDABgFAAIgFgBIgGgDIAAARgAqogEIgGAEIAAATIAFADIAFABQAFAAADgEQADgDABgIIgCgGIgCgEIgCgDIgFAAQgDAAgCABgABxAmIAAgBIAAgBIABgBIACgCIABgCIABgCIAAAAIgDgBIgBgBIgBgBIgBgCQABgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAIACAAIACACIAAACIAAACIAAAEIgBAEIgDADIgDAEgAD7AcQgEgBgCgCIgEgFIgBgHQAAgFACgEQADgEAGAAQgEgCgDgDQgDgEAAgEIACgGIAEgFIAFgDIAHgBIAHABIAGADIADAFIABAGQAAAEgCAEQgCADgFACQAGAAADAEQACAEAAAFQAAAEgBADQgBADgDACQgDACgDABIgIABIgIgBgAD/ADIgEACIgDADIgBAFIABAEIACADIAFADIAEAAIAFAAIAEgDIACgDIABgEIgBgFIgDgDIgDgCIgFgBIgEABgAD/gWIgEACIgBADIgBAEIAAAEIACADIAEACIAEABIAFgBIADgCIABgDIABgEIgBgEIgCgDIgCgCIgFAAIgEAAgADMAdIgCgBIgBgCIAAgCIAAgCIABgCIACgBIACAAIACAAIACABIABACIAAACIAAACIgBACIgCABIgCAAIgCAAgAi/AcQgDgBgCgDQgDgDgCgEQgBgEAAgFQAAgEABgEQACgDACgDIAGgEQAEgBAEAAIAIABIAGAEIgCADIgBAAIgBABIgBgBIgCgBIgCgBIgEgBIgFABIgEADIgCAEIgBAGIABAHQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAEADIAEABIAFAAIADgCIABgBIACgBIABABIADADIgEADIgDACIgFABIgEAAIgHgBgAmNAcIgFgEIgFgHQgBgEAAgFQAAgEABgEQACgDADgDQACgDADgBIAJgBIAIABQADABADADQADADABADIABAIIgBAJIgEAHIgGAEIgIABQgFAAgEgBgAmNgCQgDADAAAHQAAAIADADQADAEAGAAQAFAAADgEQADgDABgIQgBgHgDgDQgDgEgFAAQgGAAgDAEgAopAdIgDgBIgFgCIgCgDIACgDIABgBIABABIADABIADACIAEAAIAEAAIACgCIACgCIABgDQAAgCgDgCQgCgCgFAAIgEAAIAAgFIAEAAQAEAAADgCQABAAAAgBQABAAAAAAQAAgBAAgBQAAAAAAAAIAAgCIgCgCIgCgBIgEgBIgEABIgDABIgCABIgBAAIgBAAIgBgBIgBgDIAFgDIAIgBIAGAAIAGADIACADIABAEIAAACIgBACIgCACIgEACQADABADADQACACAAAEIgBAFIgDAEIgGACIgGABIgEAAgApRAcIgGgEIgFgHQgBgEAAgFQAAgFABgDIAFgGQABgCAEgCQAEgBAEAAIAHABQADABADACQACADABADQACACgBAFIAAACIgCABIgbAAIACAGQABADABACQABAAAAABQABAAAAAAQABABAAAAQAAAAABAAIAFABIAFAAIADgCIADgBIABgBIACABIABADIgCADIgFACIgEABIgFAAQgEAAgDgBgApSgDQgCADgBAEIAVAAIAAgEIgCgDIgDgCIgFgBQgEAAgEADgAp/AcIgGgEIgEgHQgBgEgBgFQABgEABgEQACgDACgDQACgDAEgBIAIgBIAIABQAEABADADQACADABADIABAIIgBAJIgDAHIgHAEIgIABQgEAAgEgBgAqAgCQgCADgBAHQABAIACADQAEAEAFAAQAGAAADgEQADgDAAgIQAAgHgDgDQgDgEgGAAQgFAAgEAEgAHXAdIAAgaIgfAAIAAAaIgIAAIAAg5IAIAAIAAAaIAfAAIAAgaIAIAAIAAA5gAGZAdIAAgaIgdAAIAAAaIgJAAIAAg5IAJAAIAAAaIAdAAIAAgaIAJAAIAAA5gAFcAdIAAgnIABgEIAAgEIgCADIgBADIgaAmIgBACIgCABIgHAAIAAg5IAJAAIAAAnIAAAEIgBAEIABgDIACgDIAagmIABgCIADgBIAGAAIAAA5gABfAdIAAgbIAAgCIABgBIgBABIgBABIAAABIgDADIgDAEIgDAFIgJANIgCABIgBABIgFAAIAAgoIAIAAIAAAaIAAACIAAACIABgDIAAgBIADgDIADgEIADgFIAKgMIABgBIABgBIAFAAIAAAogAgKAdIAAgDIABgCIABgBIARgSIAEgFIADgDIADgEIAAgFIAAgEIgDgDIgDgCIgEgBIgEABIgDACIgCACIgBADIgBACIgCABIgEgBIACgHIAEgFIAFgDIAHgBIAGABIAGADQADACAAADQACADAAAEIgBAGIgDAFIgDAEIgFAFIgOAPIADgBIADAAIASAAIADAAIAAACIAAAFgAgvAdIAAgbIAAgCIABgBIgBABIgBABIAAABIgDADIgDAEIgDAFIgKANIgBABIgBABIgFAAIAAgoIAHAAIAAAaIAAACIAAACIACgDIAAgBIADgDIADgEIADgFIAKgMIABgBIACgBIAEAAIAAAogAhdAdIAAgbIAAgCIABgBIgBABIAAABIgBABIgDADIgDAEIgDAFIgJANIgCABIgBABIgFAAIAAgoIAIAAIAAAaIAAACIAAACIABgDIAAgBIADgDIADgEIADgFIAKgMIABgBIABgBIAFAAIAAAogAiDAdIgEgBIgCgCIgHgMIgDgDIgCAAIgFAAIAAASIgIAAIAAgoIAIAAIAAARIAEAAIADgBIACgCIAIgMIABgBIADgBIAFAAIgKAPIgBACIgDABIADACIACADIALARgAjaAdIAAgTIgTAAIAAATIgIAAIAAgoIAIAAIAAAPIATAAIAAgPIAIAAIAAAogAkHAdIAAgbIAAgCIAAgBIgBABIAAABIgBABIgCADIgEAEIgDAFIgJANIgBABIgCABIgFAAIAAgoIAIAAIAAAaIAAACIAAACIABgDIABgBIACgDIAEgEIADgFIAJgMIABgBIACgBIAFAAIAAAogAnFAdIAAg5IASAAQAGAAADACQAEABADACQADADABADQABADAAAEQAAAEgBAEIgEAEIgHAEQgEACgFAAIgJAAIAAAVgAm8ABIAJAAIAGgBIAEgBIACgEIABgFIgBgFIgCgDIgEgCIgGgBIgJAAgArKAdIAAgyIgcAAIAAAyIgIAAIAAg5IAsAAIAAA5gAAmAIIAAgGIAUAAIAAAGgABRgRIgEgCIgCgDIgBgDIABgCIABgBIAEAAIAAAEIACACIACABIACAAIADAAIACgBIABgCIAAgEIAEAAIABABIABACIgBADIgCADIgEACIgFAAIgFAAgAg9gRIgEgCIgCgDIgBgDIABgCIABgBIAFAAIAAAEIABACIACABIACAAIADAAIACgBIABgCIAAgEIAEAAIABABIABACIgBADIgCADIgEACIgFAAIgFAAgAkgg+IAAgOIguAAIAAAMIAAABIgCABIgFAAIAAgUIAGAAIACgCIADgEIACgGIABgJIACgNIABgRIAiAAIAAAzIAKAAIAAASIgBABIgCABgAk+huIgBANIgDAJIgEAGIAcAAIAAgtIgTAAIgBARgALphDIAAAAIABgBIABgCIACgBIABgCIABgDIgBAAIgCAAIgCgBIgBgCIAAgCQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAQAAAAABAAIACABIACABIABACIAAACIgBAEIgBAEIgCAEIgDADgAFjhDIAAAAIABgBIAAgCIACgBIABgCIABgDIgBAAIgCAAIgBgBIgBgCIAAgCQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAIADABIACABIAAACIAAACIAAAEIgBAEIgDAEIgDADgALGhMIgDgCIgCgDIgBgFIABgFQABgCADgBIAHgDIAMgCIAAgDQAAgEgCgDQgCgCgDAAIgFABIgCABIgDACIgCAAIgBAAIgBgBIgBgDQADgDAEgBQADgCAGAAQADAAACABQAEABABACIADAFIABAGIAAAaIgDAAIgCAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBIgBgDIgDACIgDACIgEABIgEABIgFgBgALRhdIgGABIgDADIgBADIABACIABACIACABIACABIAEgBIADgBIACgBIACgDIAAgIIgHABgAJUhNQgEgBgCgDQgDgCgBgEQgCgEAAgFQAAgFACgDQABgEADgDIAGgEQAEgCAEAAIAHABIAGAEIgBADIgBABIgBAAIgBAAIgDgCIgCgBIgDAAIgGABIgDADIgDAFIgBAGIABAGQABABAAABQAAAAAAABQABAAAAABQAAAAABABIADADIAFABIAEgBIADgBIACgBIACgBIABABIACADIgDACIgEACIgEABIgFABIgGgCgAInhNIgGgEIgEgGQgCgEAAgFQAAgFACgEQABgEADgCQACgDAEgCIAIgBIAIABQADACADADQADACABAEIABAJIgBAJIgEAGIgGAEIgIACQgEAAgEgCgAImhrQgDAEAAAHQAAAHADAEQADAEAGAAQAGAAADgEQADgEAAgHQAAgHgDgEQgDgEgGAAQgGAAgDAEgAGthMIgCgBIAAgBIAAgCIAAgCIAAgCIACgBIACgBIADABIABABIABACIABACIgBACIgBABIgBABIgDABIgCgBgAC0hMIgEgBIgEgCIgDgCIACgEIACgBIACABIACABIAEACIAEAAIAGgBIADgCQABgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAIABgGIgBgFIgCgDIgEgCIgFgBIgKABIgEgBIAEgbIAcAAIAAADIgBADIgDABIgSAAIgDAOIAIgBQAFAAADACIAGADQADADAAADIABAHQAAAEgBAEQgBAEgDACQgDADgEABQgEACgEAAIgFgBgAAFhMIgCgBIgBgBIAAgCIAAgCIABgCIACgBIACgBIACABIACABIABACIAAACIAAACIgBABIgCABIgCABIgCgBgAg4hMIgCgBIgBgBIAAgCIAAgCIABgCIACgBIACgBIACABIACABIABACIAAACIAAACIgBABIgCABIgCABIgCgBgAiIhMIgCgBIgBgBIAAgCIAAgCIABgCIACgBIACgBIACABIACABIAAACIABACIgBACIAAABIgCABIgCABIgCgBgAixhNQgGgCgDgEQgEgEgCgGQgBgFAAgGQAAgHABgFQADgGAEgEQADgDAGgDQAEgCAHAAQAGAAAEACQAFACAEAEIgDADIAAABIgBAAIgDAAIgCgCIgEgCIgGgBQgFAAgDACQgEABgDADIgEAHQgBAEAAAGQAAAFABAEQACAEACADQADADAEABQAEACAEAAIAEgBIAEAAIADgCIADgCIABgBIABAAIABABIADADQgDAEgGADQgFACgHAAQgGAAgFgCgAphhNQgFgCgEgEQgDgEgDgGQgCgFAAgGQAAgHACgFQADgGADgEIAJgGQAFgCAGAAQAHAAAFACQAGADADADQAEAEACAGQACAFAAAHQAAAGgCAFQgCAGgEAEQgDAEgGACQgFACgHAAQgGAAgFgCgApeh9QgDABgDADIgEAHQgCAEABAGQgBAFACAEIAEAHQADADADABQAEACAEAAQAFAAAEgCQAEgBACgDQADgDABgEQACgEgBgFQABgGgCgEQgBgEgDgDQgCgDgEgBQgEgCgFAAQgEAAgEACgAqhhNQgFgCgEgEQgDgEgDgGQgCgFAAgGQAAgHACgFQADgGADgEIAJgGQAFgCAHAAQAGAAAFACQAFADAEADQAEAEACAGQACAFAAAHQAAAGgCAFQgCAGgEAEQgEAEgFACQgFACgGAAQgHAAgFgCgAqdh9QgEABgDADIgEAHQgBAEAAAGQAAAFABAEIAEAHQADADAEABQADACAFAAQAEAAAEgCQAEgBACgDQADgDABgEQACgEgBgFQABgGgCgEQgBgEgDgDQgCgDgEgBQgEgCgEAAQgFAAgDACgArhhNQgFgCgEgEQgDgEgDgGQgCgFAAgGQAAgHACgFQADgGADgEIAJgGQAFgCAHAAQAGAAAFACQAFADAEADQAEAEACAGQACAFAAAHQAAAGgCAFQgCAGgEAEQgEAEgFACQgFACgGAAQgHAAgFgCgArdh9QgEABgDADIgEAHQgBAEAAAGQAAAFABAEIAEAHQADADAEABQADACAFAAQAEAAAEgCQADgBADgDQADgDABgEQABgEAAgFQAAgGgBgEQgBgEgDgDQgDgDgDgBQgEgCgEAAQgFAAgDACgAKbhMIAAgoIAOAAIAHAAIAEACIADAEIABADIAAADIgCADIgCACIgEACQAFABACACQACADAAADIAAAGIgEADIgFADIgGAAgAKihRIAIAAQAEAAACgCQACgCAAgDIAAgCIgBgCIgDgCIgEAAIgIAAgAKihjIAHAAIAEAAIACgCIABgCIABgDIAAgCIgBgBIgDgCIgEAAIgHAAgAKPhMIgDAAIgCgCIgHgNIgDgCIgDgBIgEAAIAAASIgIAAIAAgoIAIAAIAAARIADAAIADgBIADgCIAIgMIABgCIACAAIAGAAIgKAPIgCADIgDABIADACIADACIALARgAIJhMIAAgpIAAgCIAAgCIgTAjIgBACIgBAAIgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBIgVgjIABACIAAACIAAApIgHAAIAAg5IAGAAIABAAIACABIATAjIACAEIABgCIABgCIATgjIABgBIACAAIAGAAIAAA5gAGKhMIAAgoIAbAAIAAAFIgTAAIAAAjgAE6hMIARgXIACgCIACgCQgCACgDABIgGABIgGgBIgFgDQgCgDgBgDQgCgDAAgEIACgHIADgGIAGgDQAEgCAEAAQAEAAAEACQADABACACQADADABADQABAEABAEIgBAFIgBAEIgDAEIgCAFIgOATIgCACIgCAAgAFCh/IgDADIgCADIgBAFQAAAFADADQACADAGAAIAEgBIAFgCIABgEIABgEIgBgFIgCgDIgEgDIgEAAIgFAAgAELhMIAAgGIANAAIAAgmIAAgDIgKAIIgCABIgBAAIAAgBIgBAAIgCgDIARgPIAGAAIAAAzIAMAAIAAAGgADwhMIAAgPIgZAAIgCAAIgBgBIAAgEIAbglIAIAAIAAAkIAIAAIAAAFIAAABIgBAAIgHAAIAAAPgADchhIAUAAIAAgWIAAgDIAAgCgACAhMIAAgGIAMAAIAAgmIAAgDIgJAIIgCABIgBAAIAAgBIgBAAIgDgDIARgPIAHAAIAAAzIALAAIAAAGgABShMIAAgGIAMAAIAAgmIAAgDIgKAIIgBABIgBAAIgBgBIgBAAIgCgDIARgPIAGAAIAAAzIALAAIAAAGgAgmhMIAAg5IAjAAIAAAGIgaAAIAAAzgAhPhMIAAgaIgeAAIAAAaIgJAAIAAg5IAJAAIAAAZIAeAAIAAgZIAJAAIAAA5gAjphMIAAgoIABgDIAAgFIgCAEIgCADIgaAnIgBABIgCABIgHAAIAAg5IAJAAIAAAoIAAADIgBAEIACgDIABgDIAagnIACgBIADgBIAFAAIAAA5gAllhMIAAgaIgeAAIAAAaIgJAAIAAg5IAJAAIAAAZIAeAAIAAgZIAJAAIAAA5gAmZhMIgBAAIgBgCIgGgNIgZAAIgFANIgBACIgCAAIgGAAIAWg5IAJAAIAXA5gAmuh6IgBACIgJAXIAVAAIgIgXIgBgCIgBgDIgBADgAnQhMIgCAAIgCgCIgPgVIgCgCIgEgBIgGAAIAAAaIgJAAIAAg5IAJAAIAAAZIAGAAIABAAIACgBIABgBIACgBIAOgUIABgCIADAAIAGAAIgQAXQgDADgDABIAEACIADAEIARAYgAAjhSIgCgBIABgCIAGgLIABAAIAAgBIAAgBIgBAAIgGgLIgBgCIACgBIACgBIAKAPIAAACIgKAPgAAXhSIgBgBIAAgCIAGgLIABAAIABgBIgBgBIgBAAIgGgLIAAgCIABgBIACgBIAKAPIAAACIgKAPgAoRhgIAAgCIAKgPIADABIAAABIAAACIgGALIgBABIABABIAGALIAAACIAAABIgDABgAodhgIAAgCIAKgPIADABIABABIgBACIgGALIgBABIABABIAGALIABACIgBABIgDABg");
	this.shape_2.setTransform(77.9,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal, new cjs.Rectangle(0,0,157.4,34.7), null);


(lib.eee = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD052B").s().p("AiUCVQg+g+AAhXQAAhXA+g9QA9g+BXAAQBYAAA9A+QA+A9AABXQAABXg+A+Qg9A+hYAAQhXAAg9g+gAhfhfQgnAoAAA3QAAA4AnAoQAoAnA3AAQA4AAAognQAogoAAg4QAAg3gogoQgogog4AAQg3AAgoAog");
	this.shape.setTransform(0,0,0.198,0.198);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.eee, new cjs.Rectangle(-4.1,-4.1,8.4,8.4), null);


(lib.buy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD052B").s().p("AiXAmQAVAAAAgLQAAgGgGgOIgXg6IASAAIAVAzIASgzIATAAIgiBXQgCAIgJAFQgJAFgOAAgAAKAaIAAhNIASAAIAAAuIAtgwIAFAAIAABNIgRAAIAAgtIguAvgAi9ALQgDgTgUAAIAAAAIAAAgIgSAAIAAhLIASAAIAAAdIABAAQATAAACgRQACgNANAAIAIABIAAAOIgDAAQgDAAgBAEQgEAPgPADQARAFADAQQABAEADAAIAEAAIAAAOIgJABQgNAAgCgOgACnAYIAAhLIASAAIAAAbIAPAAQAPAAAIAGQAIAHAAALQAAALgHAHQgIAGgQAAgAC5gKIAAAUIAOAAQAOAAAAgKQAAgEgDgEQgEgDgHAAIgOABgAByAYIAAg8IgWAAIAAgPIA+AAIAAAPIgWAAIAAA8gAgZAYIAAg8IgeAAIAAA8IgSAAIAAhLIBCAAIAABLg");
	this.shape.setTransform(2.4,1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#DD052B").ss(0.7).p("AF0CIIsxAAIBJkPIMyAAg");
	this.shape_1.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.buy, new cjs.Rectangle(-41.1,-13.2,82.3,26.5), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,240,400), null);


(lib.ClipGroup_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjdDfQhdhdAAiCQAAiBBdhdQBchcCBAAQCCAABdBcQBcBdAACBQAACChcBdQhdBciCAAQiBAAhchcgAhCAaIhADsQA+AfBEAAQB5AABWhWQBWhWAAh5QAAgqgMgqgAkVBdQARAxAhApQAgApAtAbIA6jZIhMAYIgWBUIgaAHIAXhTgAjuioQg2BMAABcQAAApALAlIBcgdIBXlCQhUAfg0BKgAhMkaIhXFDIBMgYIAzi/IAagHIg0C+IFShrQgehWhLg2QhNg2heAAQglAAgnAKg");
	mask.setTransform(59.4,59.4);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(196,196,196,0)","#C4C4C4","#A9A9A8","#898988","#646462","#3B3B39","#1D1D1B","#1D1D1B"],[0,0.933,0.933,0.949,0.961,0.976,0.988,0.992,1],36.8,22.3,-34.9,-21.1).s().p("ApRCSIHArjILjHBInALig");
	this.shape.setTransform(59.4,59.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#FFFFFF","#F8F8F8","#E4E4E4","#C3C3C3","#ADADAD","#E8E8E8","#FFFFFF","#FDFDFD","#F6F6F6","#EBEBEA","#DADADA","#C4C4C4","rgba(196,196,196,0)","rgba(0,0,0,0)"],[0,0.02,0.075,0.157,0.259,0.314,0.596,0.733,0.831,0.871,0.894,0.914,0.933,0.933,1],36.8,22.3,-34.9,-21.1).s().p("ApRCSIHArjILjHBInALig");
	this.shape_1.setTransform(59.4,59.4);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9, new cjs.Rectangle(27.9,27.9,63,63), null);


(lib.ClipGroup_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj+D4QhphtgBiLQABiUBphqQBqhqCUAAQCVAABqBqQBqBqgBCUQABCWhqBpQhqBqiVAAQiSAAhshxg");
	mask.setTransform(72.2,72.1);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#D42D3F","#D32D3F","#CC2D3D","#CA2D3C","#B92B35","#B52B34","#AB2A30","#A3292D","#9A292A","#76231D"],[0,0.047,0.051,0.082,0.161,0.439,0.502,0.694,0.835,1,1],26.3,26.3,-32.2,-32.2).s().p("ArQAAILQrQILRLQIrRLRg");
	this.shape.setTransform(72.1,72.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_1, new cjs.Rectangle(36.1,36.1,72.1,72.2), null);


(lib.ClipGroup_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj4D5QhohnABiSQgBiRBohnQBnhnCRAAQCSAABnBnQBoBngBCRQABCShoBnQhnBniSAAQiRAAhnhng");
	mask.setTransform(68.9,68.9);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#D42D3F","#C52C3A","#9E292B","#9A292A","#76231D"],[0,0.514,0.671,0.973,1,1],-23.1,-31.4,33.6,45.5).s().p("AqwhnIMYpJIJJMYIsYJJg");
	this.shape.setTransform(68.9,68.9);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_1, new cjs.Rectangle(33.7,33.7,70.5,70.5), null);


(lib.ClipGroup_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjzD0QhmhlAAiPQAAiOBmhlQBlhmCOAAQCPAABmBmQBlBlAACOQAACPhlBlQhmBmiPAAQiOAAhlhmg");
	mask.setTransform(67.6,67.6);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#D42D3F","#C52C3A","#9E292B","#9A292A","#76231D"],[0,0.224,0.475,0.957,1,1],-22.6,-30.8,33,44.7).s().p("AqjhlIMJo+II+MJIsJI+g");
	this.shape.setTransform(67.6,67.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_1, new cjs.Rectangle(33.1,33.1,69.2,69.2), null);


(lib.ClipGroup_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgwAJQgGgHACgPIATAAQAAAKAJgCQAGgCAFgGIAQAAQgLATgTAGIgJACQgHAAgFgFgAAWgNIAgAAQgFADgFACIgJABQgJAAgEgGg");
	mask.setTransform(7,6.3);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(196,196,196,0)","#C4C4C4","#A9A9A8","#898988","#646462","#3B3B39","#1D1D1B","#1D1D1B"],[0,0.933,0.933,0.949,0.961,0.976,0.988,0.992,1],33.4,20.2,-38.2,-23.2).s().p("AhEAHIArhHIBeA6IgsBGg");
	this.shape.setTransform(6.9,6.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#FFFFFF","#F8F8F8","#E4E4E4","#C3C3C3","#ADADAD","#E8E8E8","#FFFFFF","#FDFDFD","#F6F6F6","#EBEBEA","#DADADA","#C4C4C4","rgba(196,196,196,0)","rgba(0,0,0,0)"],[0,0.02,0.075,0.157,0.259,0.314,0.596,0.733,0.831,0.871,0.894,0.914,0.933,0.933,1],33.4,20.2,-38.2,-23.2).s().p("AhEAHIArhHIBeA6IgsBGg");
	this.shape_1.setTransform(6.9,6.5);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_1, new cjs.Rectangle(1.7,4.9,10.8,2.7), null);


(lib.ClipGroup_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhfBFQgGgHADgRQADgRALgMQALgOAOgDIAJgBQAKgBAEAIQAEAIgDANQgGAdgXAOgAg/AQQgMAEgEAUQgEAQAKAAIADgBQAMgDAEgUQACgLgDgEQgBAAAAAAQAAgBgBAAQgBAAAAAAQgBgBgBAAIgDABgAiEBFQAEgGACgKQAEgTgMADQgNAFgEATIgBAIIgTAAIABgCQADgRALgNQALgNAOgFIAJgBQAKAAAEAIQAEAIgCAOQgCAKgGALgAgagLIAVgHIACApIAAAAIAVgxIAWgHIgnBSIgWAIgAAxglIArgMIgEATIgWAIIgCAJIATgHIgDATIgUAFIgCAJIAYgIIgFAVIgsAOgABwg4IApgLIAHgBQAOAAgDAPQgDAQgLAGQAIABgCAOQgCANABADIgVAFIAAgKIABgKQgCgDgFABIgKABIgGAdIgWAGgACMgvIgKACIgDAQIALgEQAJgDACgHQABgFgFAAIgFABg");
	mask.setTransform(23.3,22.2);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(196,196,196,0)","#C4C4C4","#A9A9A8","#898988","#646462","#3B3B39","#1D1D1B","#1D1D1B"],[0,0.933,0.933,0.949,0.961,0.976,0.988,0.992,1],28.4,17.3,-43.5,-26.3).s().p("AjpAgICaj9IE5C+IiaD9g");
	this.shape.setTransform(23.4,22.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#FFFFFF","#F8F8F8","#E4E4E4","#C3C3C3","#ADADAD","#E8E8E8","#FFFFFF","#FDFDFD","#F6F6F6","#EBEBEA","#DADADA","#C4C4C4","rgba(196,196,196,0)","rgba(0,0,0,0)"],[0,0.02,0.075,0.157,0.259,0.314,0.596,0.733,0.831,0.871,0.894,0.914,0.933,0.933,1],28.4,17.3,-43.5,-26.3).s().p("AjpAgICaj9IE5C+IiaD9g");
	this.shape_1.setTransform(23.4,22.2);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_2, new cjs.Rectangle(6.1,15.3,34.3,13.8), null);


(lib.p6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eee();
	this.instance.parent = this;
	this.instance.setTransform(-121.9,126.4,1.8,1.8,0,0,0,-0.1,0.1);

	this.instance_1 = new lib.eee();
	this.instance_1.parent = this;
	this.instance_1.setTransform(353.3,-48.1,1.8,1.8,0,0,0,0.1,-0.1);

	this.instance_2 = new lib.qqq();
	this.instance_2.parent = this;
	this.instance_2.setTransform(125,-78.2,1.137,1.137,0,0,0,0.4,-0.1);

	this.instance_3 = new lib.www();
	this.instance_3.parent = this;
	this.instance_3.setTransform(146.1,247,1.421,1.419,0,0,0,0.1,0.3);

	this.instance_4 = new lib.www();
	this.instance_4.parent = this;
	this.instance_4.setTransform(76.7,138.7,1.8,1.8,0,0,0,-0.1,0.1);

	this.instance_5 = new lib.qqq();
	this.instance_5.parent = this;
	this.instance_5.setTransform(172.7,160.1,1.8,1.8,0,0,0,0.1,0.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD052B").s().p("AgBAkQg0ABgUAJIAAhSQAZgIAwgBQAygBAYAKIAABSQgXgKg0AAg");
	this.shape.setTransform(-18.6,-101.1,0.357,0.357);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DD052B").s().p("Aj2D3QhmhnAAiQQAAiQBmhmQBmhmCQAAQCQAABnBmQBmBmAACQQAACQhmBnQhnBmiQAAQiQAAhmhmgAi7i7QhOBOAABtQAABuBOBOQBOBOBtAAQBuAABOhOQBOhOAAhuQAAhthOhOQhOhOhuAAQhtAAhOBOg");
	this.shape_1.setTransform(-18.7,-86.5,0.357,0.357);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DD052B").s().p("AgOCLQgHgGAAgJIAAhXIhKArQgIAFgJgDQgJgBgEgJQgEgHACgJQACgJAIgFIBKgqIhKgqQgIgEgCgJQgCgJAEgIQAEgIAJgCQAJgDAIAFIBKArIAAhVQAAgKAHgGQAFgGAJgBQAJABAGAGQAHAGAAAJIAABWIBKgrQAIgFAIADQAKACAEAIQAEAIgCAJQgCAJgIAEIhLAqIBLAqQAIAFACAJQACAJgEAHQgEAJgKABQgIADgIgFIhKgrIAABXQAAAJgHAGQgGAHgJgBQgIABgGgHg");
	this.shape_2.setTransform(-18.6,-86.4,0.357,0.357);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DD052B").s().p("AgVGoQgJgJAAgNIAAhbIhQAuQgLAHgMgEQgMgDgHgLQgHgMAEgMQADgMALgHIBvhAIAAi5IihBdIAAB/QAAANgJAJQgJAJgNAAQgNAAgJgJQgJgJAAgNIAAhcIhPAuQgLAHgMgEQgMgEgHgLQgGgLADgMQADgMALgHIBPgtIhPgvQgLgGgEgNQgDgMAGgLQAHgLAMgDQANgEALAHIBuBAIChhdIihhcIhuBAQgLAGgNgDQgMgDgHgLQgGgMADgMQAEgMALgHIBPguIhPgtQgLgGgDgNQgDgNAGgLQAHgLAMgDQAMgDALAGIBPAuIAAhcQAAgMAJgKQAKgJAMAAQANAAAJAJQAJAKAAAMIAAB/IChBdIAAi5IhvhAQgLgGgDgNQgEgMAHgLQAHgLAMgEQAMgDALAHIBQAuIAAhbQAAgOAJgJQAJgJAMAAQANAAAJAJQAJAJAAANIAABcIBQguQALgHAMADQAMAEAHALQAGALgDAMQgDANgLAGIhvBAIAAC5IChhdIAAh/QAAgMAJgKQAJgJANAAQANAAAJAJQAJAKAAAMIAABcIBPguQALgGAMADQAMADAHALQAGAMgDAMQgEANgLAGIhOAtIBPAuQAMAHADAMQADANgHALQgGALgMADQgNADgLgGIhuhAIihBcIChBdIBuhAQALgHANAEQAMADAGAMQAHALgDAMQgDAMgMAGIhPAvIBOAtQAMAHADAMQADAMgGALQgHALgMAEQgMAEgLgHIhPguIAABcQAAANgJAJQgJAJgNAAQgNAAgJgJQgJgJAAgNIAAh/IihhdIAAC5IBvBAQALAHADAMQADAMgGAMQgHAKgMAEQgMADgLgGIhQguIAABbQAAANgJAJQgJAJgNAAQgMAAgJgJg");
	this.shape_3.setTransform(355.8,112.4,0.357,0.357);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DD052B").s().p("AlKHgIAAmSIguAAIAAkJICsAAQhvgzgag/QgYg8Axg5QAyg+BDAAQA+AAA4A3QA2A1AbBSQAchSA2g1QA4g3A+AAQBDAAAyA+QAxA5gZA8QgZA/hvAzICsAAIAAEJIguAAIAAGSgAApGVIDWAAIAAlHIjWAAgAj+GVIDcAAIAAlHIjcAAgAApAAIEEAAIAAhwIkEAAgAksAAIEKAAIAAhwIkKAAgAB0leQgrA3gMBMQBFgQA7gdQBFghANghQAGgRgRgXQgdgigfAAQgrAAgpA2gAg8jbQgNhMgqg3Qgqg2gqAAQgfAAgdAiQgRAXAGARQANAhBFAhQA7AdBFAQIAAAAg");
	this.shape_4.setTransform(-40.5,96.1,0.357,0.357);

	this.instance_6 = new lib._6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-150,-125,0.893,0.893);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.p6, new cjs.Rectangle(-150,-125,535.8,446.5), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4A4A49").s().p("AgYAZQgKgLAAgOQAAgOAKgKQALgKANAAQAPAAAKAKQAKAKAAAOQAAAOgKALQgKAKgPAAQgOAAgKgKgAgUgVQgJAJAAAMQAAAMAJAJQAIAJAMAAQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgJgNAAQgLAAgJAJgAAKATIAAAAIgBgBIAAgEQAAgHgDgCQgCgBgFAAIgFAAIAAAPIgHAAIAAgmIANAAQAHAAADACQAGACAAAIQAAAFgEACIgGABQAFABACADQACACAAAEIAAAGIABACIAAAAgAgGAAIAGAAIAFgBQAEgBAAgFQAAgEgCgCQgDgBgFAAIgFAAg");
	this.shape.setTransform(102.8,90.3);

	this.instance = new lib.ClipGroup_9();
	this.instance.parent = this;
	this.instance.setTransform(70.9,58.1,1,1,0,0,0,59.4,59.4);

	this.instance_1 = new lib.ClipGroup_1_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(81.7,59.3,1,1,0,0,0,23.4,22.2);

	this.instance_2 = new lib.ClipGroup_2_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(69.6,67.8,1,1,0,0,0,6.9,6.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjeDfQhchdAAiCQAAiBBchdQBdhcCBAAQCCAABdBcQBcBdAACBQAACChcBdQhdBciCAAQiBAAhdhcgAhCAaIhADsQA+AfBEAAQB5AABWhWQBWhWAAh5QAAgtgNgngAkVBcQARAyAhApQAgApAtAbIA6jZIhMAYIgWBUIgaAHIAXhTgAjvioQg1BMAABcQAAAnALAnIBcgdIBXlDQhVAgg0BKgAhMkaIhXFDIBLgYIA0i/IAZgHIgzC+IFShrQgfhWhLg2QhMg2heAAQgnAAglAKg");
	this.shape_1.setTransform(70.2,58.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhgBFQgGgJADgPQAEgQALgNQALgOAOgDQAOgEAHAHQAHAIgEAQQgFAegYANgAg/AQQgNAEgDATQgCALADAEQADADAEgBQANgEAEgUQADgQgIAAIgEAAgAiEBFQAEgHACgIQACgLgDgEQgDgDgFACQgMACgEAVIgBAIIgTAAIABgCQADgRALgNQALgNAOgEQAOgEAHAIQAHAHgEARQgCAMgGAJgAgbgLIAWgGIACAoIAUgxIAWgHIgmBSIgWAIgAAxgkIArgNIgEATIgXAIIgBAJIATgHIgEATIgTAFIgCAJIAXgJIgEAWIgsAOgABwg4IAogLQAKgDAFAEQAGAEgCAKQgDAPgMAGQAIACgBAOQgCANABACIgWAFIABgKIAAgJQgBgEgGABIgJABIgGAdIgXAGgACMgvIgKADIgEAPIAMgDQAJgEACgGQABgGgFAAIgFABg");
	this.shape_2.setTransform(80.9,59.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgwAJQgHgHADgOIATAAQAAAKAJgCQAGgCAEgGIARAAQgLATgTAFIgJABQgHAAgFgEgAAWgMIAgAAIgLAEIgJABQgIAAgEgFg");
	this.shape_3.setTransform(69.1,67.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#76231F").s().p("AjeDfQhchdABiCQgBiBBchdQBdhcCBAAQCDAABbBcQBdBdAACBQAACChdBdQhbBciDAAQiBAAhdhcgAhDAaIg/DsQA+AfBEAAQB5AABXhWQBVhWAAh5QAAgqgMgqgAkVBcQARAyAgApQAhApAtAbIA6jZIhLAYIgXBUIgZAHIAVhTgAjvioQg1BMAABcQAAApAKAlIBdgdIBXlCQhVAfg0BKgAhNkaIhWFDIBMgYIAzi/IAZgHIgzC+IFShrQgehWhLg2QhNg2heAAQgnAAgmAKg");
	this.shape_4.setTransform(71.1,58.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#76231F").s().p("AhfBFQgGgIADgQQADgQALgNQALgOAOgDQAOgEAHAHQAHAIgDARQgGAcgXAOgAg+AQQgNAEgEAUQgDATAMgDQANgEADgUQACgKgDgEQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAIgDAAgAiEBFQAFgHABgIQADgLgEgEQgCgDgFACQgMADgFAUIAAAIIgTAAIAAgCQADgRALgNQALgNAOgEQAOgEAHAIQAHAIgDAQQgDAMgFAJgAgagLIAVgGIACAoIAVgxIAWgHIgmBSIgWAIgAAxgkIArgNIgEATIgWAIIgCAJIATgHIgDATIgUAFIgBAJIAXgJIgFAWIgsAOgABwg4IApgLQAJgCAFADQAGAEgCAKQgDAPgLAGQAIACgCAOQgCANABACIgVAFIAAgKIABgJQgCgEgFABIgKABIgGAdIgWAGgACMgvIgKADIgDAPIALgDQAJgEACgGQABgGgFAAIgFABg");
	this.shape_5.setTransform(81.7,60);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#76231F").s().p("AgwAJQgHgIADgOIATAAQAAALAJgDQAGgCAEgGIARAAQgLATgUAGIgIACQgIAAgEgFgAAWgNIAgAAIgLAFIgJABQgIAAgEgGg");
	this.shape_6.setTransform(69.9,68.3);

	this.instance_3 = new lib.ClipGroup_3_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(70.3,57.7,1,1,0,0,0,67.6,67.6);

	this.instance_4 = new lib.ClipGroup_4_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(70.3,57.7,1,1,0,0,0,68.9,68.9);

	this.instance_5 = new lib.ClipGroup_5_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(70.3,57.7,1,1,0,0,0,72.1,72.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ap3JBIE3yBIO4AAIAASBg");
	this.shape_7.setTransform(63.3,57.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-1.8,-14.4,144.3,144.3), null);


// stage content:
(lib._600x500 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Eguygm+MBdlAAAMAAABN9MhdlAAAg");
	this.shape.setTransform(300,250);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(459));

	// legal
	this.instance = new lib.legal();
	this.instance.parent = this;
	this.instance.setTransform(108.6,480.2,2,2,0,0,0,49.1,27.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(459));

	// logo
	this.instance_1 = new lib.logo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(487.4,385.5,2.003,2.003,0,0,0,70.3,57.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(67).to({scaleX:1.8,scaleY:1.8,x:498.7,y:397.2},7,cjs.Ease.get(1)).wait(380).to({scaleX:2,scaleY:2,x:487.4,y:385.5},4,cjs.Ease.get(1)).wait(1));

	// buy
	this.instance_2 = new lib.buy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(465.9,55.8,1.8,1.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(383).to({_off:false},0).to({scaleX:2,scaleY:2,x:466,alpha:1},6,cjs.Ease.get(1)).wait(61).to({scaleX:1.8,scaleY:1.8,x:465.9,alpha:0},8).wait(1));

	// t6
	this.instance_3 = new lib.t6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(470,158.1,1.78,1.78,0,0,0,79.2,21.3);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(375).to({_off:false},0).to({x:450,alpha:1},8,cjs.Ease.get(1)).wait(67).to({x:454},0).to({x:434,alpha:0},8,cjs.Ease.get(1)).wait(1));

	// t5
	this.instance_4 = new lib.t5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(471.7,161.6,1.771,1.771,0,0,0,85.9,23);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(300).to({_off:false},0).to({x:462.8,alpha:1},8,cjs.Ease.get(1)).wait(67).to({regX:85.8,x:453.8,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(75));

	// t4
	this.instance_5 = new lib.t4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(479.5,161.6,1.771,1.771,0,0,0,69.5,23);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(225).to({_off:false},0).to({x:470.6,alpha:1},8,cjs.Ease.get(1)).wait(67).to({x:461.8,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(150));

	// t3
	this.instance_6 = new lib.t3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(443.5,161.6,1.771,1.771,0,0,0,70,23);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(150).to({_off:false},0).to({x:434.6,alpha:1},8,cjs.Ease.get(1)).wait(67).to({x:425.8,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(225));

	// t2
	this.instance_7 = new lib.t2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(454,180.2,1.771,1.771,0,0,0,75.9,33.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(75).to({_off:false},0).to({x:445.1,alpha:1},8,cjs.Ease.get(1)).wait(67).to({x:436.3,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(300));

	// t1
	this.instance_8 = new lib.t1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(460.1,161.6,1.771,1.771,0,0,0,72.4,23);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:451.2,alpha:1},8,cjs.Ease.get(1)).wait(67).to({x:442.4,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(375));

	// plate
	this.instance_9 = new lib.Path_7();
	this.instance_9.parent = this;
	this.instance_9.setTransform(257.9,195.2,1.8,1.8,0,0,0,11.7,19.2);
	this.instance_9.alpha = 0.398;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhUDFIBomJIBCAAIhpGJg");
	this.shape_1.setTransform(295.4,126.1,1.8,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DD052B").s().p("Au3EEICKoHIblAAIAAIHg");
	this.shape_2.setTransform(427.5,161.3,1.8,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance_9}]}).wait(459));

	// Слой 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AklLmIGS3LIC4AAImRXLg");
	this.shape_3.setTransform(514.1,135.6,1.82,1.82);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(459));

	// p6
	this.instance_10 = new lib.p6();
	this.instance_10.parent = this;
	this.instance_10.setTransform(156.8,140.1,1.232,1.232,0,0,0,0.1,0.1);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(375).to({_off:false},0).to({regX:0,regY:0,scaleX:1.12,scaleY:1.12,x:166.8,alpha:1},8,cjs.Ease.get(1)).wait(76));

	// p5
	this.instance_11 = new lib.p5();
	this.instance_11.parent = this;
	this.instance_11.setTransform(100.6,200.6,1.1,1.1,0,0,0,120.1,200);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(300).to({_off:false},0).to({regX:120,scaleX:1,scaleY:1,x:120.5,alpha:1},8,cjs.Ease.get(1)).wait(151));

	// p4
	this.instance_12 = new lib.p4();
	this.instance_12.parent = this;
	this.instance_12.setTransform(100.6,200.6,1.1,1.1,0,0,0,120.1,200);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(225).to({_off:false},0).to({regX:120,scaleX:1,scaleY:1,x:120.5,alpha:1},8,cjs.Ease.get(1)).to({_off:true},76).wait(150));

	// p3
	this.instance_13 = new lib.p3();
	this.instance_13.parent = this;
	this.instance_13.setTransform(100.6,200.6,1.1,1.1,0,0,0,120.1,200);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(150).to({_off:false},0).to({regX:120,scaleX:1,scaleY:1,x:120.5,alpha:1},8,cjs.Ease.get(1)).to({_off:true},76).wait(225));

	// p2
	this.instance_14 = new lib.p2();
	this.instance_14.parent = this;
	this.instance_14.setTransform(100.6,200.6,1.1,1.1,0,0,0,120.1,200);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(75).to({_off:false},0).to({regX:120,scaleX:1,scaleY:1,x:120.5,alpha:1},8,cjs.Ease.get(1)).to({_off:true},76).wait(300));

	// p1
	this.instance_15 = new lib.p1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(100.6,200.6,1.1,1.1,0,0,0,120.1,200);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({regX:120,scaleX:1,scaleY:1,x:120.5,alpha:1},8).to({_off:true},76).wait(375));

	// bg
	this.instance_16 = new lib.bg();
	this.instance_16.parent = this;
	this.instance_16.setTransform(300,250,2.5,1.25,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(459));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(268.5,230.6,663.3,550.1);
// library properties:
lib.properties = {
	width: 600,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/600x500_atlas_.jpg", id:"600x500_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;