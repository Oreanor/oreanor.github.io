(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x300_atlas_P_", frames: [[102,91,23,2],[0,91,100,73],[152,0,50,225],[0,0,150,89]]},
		{name:"300x300_atlas_NP_", frames: [[0,0,160,224],[0,226,220,153]]}
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



(lib.Mesh_1 = function() {
	this.spriteSheet = ss["300x300_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hoov2 = function() {
	this.spriteSheet = ss["300x300_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.pic1 = function() {
	this.spriteSheet = ss["300x300_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pic2a = function() {
	this.spriteSheet = ss["300x300_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.pic2b = function() {
	this.spriteSheet = ss["300x300_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.pic3 = function() {
	this.spriteSheet = ss["300x300_atlas_NP_"];
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


(lib.text3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AggAlQgOgPAAgWQAAgVANgPQAPgPATAAQAWAAAMAPQAMAPAAAVIAAAGIhOAAQACAPAJAJQALAJAMAAQARAAAPgOIAJAIQgRATgYAAQgUAAgPgPgAgVgdQgIAJgCAPIA/AAQAAgPgKgJQgHgJgOAAQgMAAgKAJg");
	this.shape.setTransform(43.2,46.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AAcAyIAAgsIg4AAIAAAsIgPAAIAAhjIAPAAIAAArIA4AAIAAgrIAPAAIAABjg");
	this.shape_1.setTransform(31.4,46.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("AAdBGIAAhOIg6BOIgOAAIAAhjIAPAAIAABOIA6hOIAOAAIAABjgAgSgyQgHgGgCgLIAKgCQAFAOAMAAQANAAADgOIALACQgDAMgHAFQgHAHgKAAQgLAAgHgHg");
	this.shape_2.setTransform(19.3,44.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("AggArQgLgHAAgQQAAgPAMgIQALgIAUAAQAOAAAPAEIAAgDQAAgNgIgHQgHgHgOAAQgNAAgRAHIgEgMQARgJASABQAWAAAKALQALAKAAASIAAA9IgPAAIAAgQQgNARgWABQgQAAgKgJgAgUAFQgIAGAAAJQAAAJAHAFQAHAFALABQANAAAKgIQAJgHAAgMIAAgJQgPgEgOAAQgMAAgIAFg");
	this.shape_3.setTransform(7.4,46.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("AgnAlIAHgLQAQANAQAAQALAAAHgFQAHgEAAgJQAAgHgHgFQgGgEgMAAIgMAAIAAgMIAMAAQAKABAGgFQAHgFAAgHQAAgHgHgEQgFgEgKAAQgQgBgOAKIgHgJQAQgNAWAAQAQAAAKAHQAKAIAAALQAAARgQAGQATAFAAATQgBAMgKAJQgLAJgSAAQgWAAgSgPg");
	this.shape_4.setTransform(-3,46.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1B").s().p("AAeAyIAAhOIg7BOIgOAAIAAhjIAOAAIAABOIA7hOIAOAAIAABjg");
	this.shape_5.setTransform(-13.8,46.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1B").s().p("AAoA+IAAgZIhQAAIgCAZIgMAAIAAgmIALAAQANgYAAgsIAAgRIBGAAIAABVIAPAAIgDAmgAgQgiQAAAlgMAVIA1AAIAAhIIgpAAg");
	this.shape_6.setTransform(-25.8,47.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1B").s().p("AAeAyIAAhOIg7BOIgOAAIAAhjIAPAAIAABOIA6hOIAOAAIAABjg");
	this.shape_7.setTransform(-43.4,46.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1B").s().p("AAfAyIgfgpIgeApIgRAAIAngyIglgxIARAAIAcAnIAegnIAQAAIgmAxIAoAyg");
	this.shape_8.setTransform(64.1,23.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1D1B").s().p("AAdAyIAAglIgbAAIgbAlIgSAAIAegnQgLgDgIgHQgHgHAAgMQAAgOAKgIQAKgJARAAIAuAAIAABjgAgSgfQgGAFAAAJQAAAJAGAFQAHAEALAAIAdAAIAAglIgeAAQgLAAgGAFg");
	this.shape_9.setTransform(52.5,23.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D1D1B").s().p("AAdAyIAAhOIg6BOIgOAAIAAhjIAPAAIAABOIA6hOIAOAAIAABjg");
	this.shape_10.setTransform(41.3,23.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D1D1B").s().p("AghAyIAAhjIBDAAIAAANIg0AAIAABWg");
	this.shape_11.setTransform(31.3,23.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D1D1B").s().p("AgkAlQgPgPAAgWQAAgUAPgPQAPgQAVAAQAWAAAPAQQAPAPAAAUQAAAWgPAPQgPAPgWAAQgVAAgPgPgAgagbQgKAMAAAPQAAAQALALQAKAMAPAAQAPAAALgLQALgLAAgRQAAgPgLgMQgLgLgPABQgPgBgLALg");
	this.shape_12.setTransform(20.1,23.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1D1D1B").s().p("AgyAxIACgNIAHABIAHgBQADgBADgEQADgEACgJIADgWQABgQAAgWIAAgHIBGAAIAABiIgPAAIAAhVIgpAAIAAABQAAAagCANQgBAOgDAKQgDAJgEAGQgEAEgFACQgEABgHABIgMgCg");
	this.shape_13.setTransform(7.1,23.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1D1D1B").s().p("AgkAlQgPgPAAgWQAAgVAPgOQAQgQAUAAQAWAAAPAQQAPAOAAAVQAAAWgPAPQgPAPgWAAQgWAAgOgPgAgagbQgKALAAAQQAAAQALALQAKAMAPAAQAPAAAMgLQAKgLgBgRQAAgPgKgMQgKgLgQABQgPgBgLALg");
	this.shape_14.setTransform(-3.9,23.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1D1D1B").s().p("AAdAyIAAgsIg4AAIAAAsIgQAAIAAhjIAQAAIAAArIA4AAIAAgrIAPAAIAABjg");
	this.shape_15.setTransform(-16.2,23.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1D1D1B").s().p("AAfAyIgfgpIgeApIgRAAIAngyIglgxIARAAIAcAnIAegnIAQAAIgmAxIAoAyg");
	this.shape_16.setTransform(-27.7,23.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1D1D1B").s().p("AggAlQgOgOAAgXQAAgUAOgPQAOgQATAAQAVAAANAPQAMAQAAAVIAAAFIhOAAQACAQAJAIQALAJAMAAQARAAAOgNIAKAIQgRASgYAAQgVAAgOgPgAgUgdQgJAKgCAOIA/AAQgBgPgIgIQgJgKgOAAQgLAAgJAJg");
	this.shape_17.setTransform(-38.5,23.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1D1D1B").s().p("AgHAyIAAhWIgjAAIAAgNIBVAAIAAANIgjAAIAABWg");
	this.shape_18.setTransform(-48.7,23.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1D1D1B").s().p("AgqAyIAAhjIAvAAQAPAAAIAHQAJAHAAALQAAAQgQAHQAWAFAAATQAAAMgKAHQgJAIgRAAgAgcAlIAhAAQAKAAAHgEQAFgFAAgIQAAgHgGgEQgHgEgLAAIgfAAgAgcgGIAeAAQAKAAAFgEQAGgFAAgHQgBgGgFgEQgFgEgKAAIgeAAg");
	this.shape_19.setTransform(-64.6,23.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1D1D1B").s().p("AAqAyIAAhjIAPAAIAABjgAg4AyIAAhjIAPAAIAAAlIAbAAQAQABALAHQALAHAAAOQAAAPgKAJQgKAJgQAAgAgpAkIAbAAQAMABAFgFQAGgFAAgJQAAgIgGgFQgGgFgLAAIgbAAg");
	this.shape_20.setTransform(29.3,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1D1D1B").s().p("AAoA+IAAgYIhPAAIgDAYIgMAAIAAgmIAKAAQAOgYAAgsIAAgRIBGAAIAABVIAPAAIgDAmgAgQgiQAAAkgMAWIA1AAIAAhIIgpAAg");
	this.shape_21.setTransform(16.1,1.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1D1D1B").s().p("AAdAyIAAgsIg5AAIAAAsIgPAAIAAhjIAPAAIAAArIA5AAIAAgrIAPAAIAABjg");
	this.shape_22.setTransform(4.4,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1D1D1B").s().p("AgfAmQgPgPAAgXQAAgUAOgQQAOgPATAAQAWAAALAPQANAOAAAXIAAAFIhOAAQABAQAKAIQALAJAMAAQATAAAMgOIAKAIQgRATgYAAQgUAAgOgOgAgUgdQgKAKgBAOIA/AAQAAgOgJgKQgJgKgOAAQgLAAgJAKg");
	this.shape_23.setTransform(-7.3,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1D1D1B").s().p("AgxBCIAAiBIAOAAIAAAUQAPgWAXAAQASAAAPAOQAOAOAAAYQAAAWgOAOQgPAPgSAAQgXAAgPgWIAAAygAgYgpQgLALAAARQAAAQALAKQAKALAOAAQAPAAAKgKQAKgKAAgRQAAgSgKgKQgLgLgOAAQgOAAgKALg");
	this.shape_24.setTransform(-19.1,1.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1D1D1B").s().p("AgHAyIAAhWIgjAAIAAgNIBVAAIAAANIgjAAIAABWg");
	this.shape_25.setTransform(-30.6,0);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1D1D1B").s().p("AAkAyIAAhLIgkAxIgkgxIAABLIgOAAIAAhjIAOAAIAkA0IAlg0IAOAAIAABjg");
	this.shape_26.setTransform(29.2,-22.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1D1D1B").s().p("AggA1QgOgOAAgXQAAgVANgPQAOgPAUgBQAVABANAPQAMAOAAAWIAAAGIhOAAQACAQAKAHQAJAKANgBQASABAOgOIAJAIQgRASgZABQgTAAgPgPgAgVgNQgIAJgCANIA/AAQgBgNgJgJQgIgKgOAAQgLAAgKAKgAAIgwIAAgSIARAAIAAASgAgZgwIAAgSIARAAIAAASg");
	this.shape_27.setTransform(16.8,-24);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1D1D1B").s().p("AggArQgLgIAAgPQAAgPAMgIQALgIAUAAQANAAAQAEIAAgDQAAgOgIgGQgIgHgNAAQgOAAgQAHIgEgMQATgJAQAAQAVAAALALQALALAAATIAAA8IgPAAIAAgPQgNARgWAAQgPAAgLgJgAgUAFQgIAGAAAJQAAAJAHAFQAIAGAKAAQANAAAKgIQAJgHAAgMIAAgJQgOgEgPAAQgMAAgIAFg");
	this.shape_28.setTransform(5.2,-22.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1D1D1B").s().p("AApA+IAAgYIhQAAIgDAYIgMAAIAAgmIALAAQANgYAAgsIAAgRIBGAAIAABVIAPAAIgDAmgAgPgiQAAAlgNAVIA1AAIAAhIIgoAAg");
	this.shape_29.setTransform(-6,-21.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1D1D1B").s().p("AggArQgLgIAAgPQAAgPAMgIQAMgIATAAQANAAAQAEIAAgDQAAgNgHgHQgJgHgNAAQgOAAgPAHIgFgMQAUgJAPAAQAUAAANALQAKALAAATIAAA8IgPAAIAAgPQgNARgWAAQgPAAgLgJgAgUAFQgIAGAAAJQAAAJAIAFQAGAGALAAQAOAAAIgIQAKgHAAgMIAAgJQgPgEgOAAQgMAAgIAFg");
	this.shape_30.setTransform(-17.5,-22.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1D1D1B").s().p("AgzAwIAJgLQAVATAaAAQAMABAKgIQAJgHAAgMQAAgMgKgGQgJgHgRABIgOAAIAAgMIAOAAQAOAAAKgHQAJgHAAgMQAAgJgJgIQgJgGgNAAQgWAAgQAPIgJgLQAKgJAMgEQALgEAPgBQATABANAJQANALAAAPQAAAXgZAJQANACAIAJQAIAJAAAMQAAARgNAKQgNAMgVAAQgggBgYgVg");
	this.shape_31.setTransform(-29.2,-24.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text3, new cjs.Rectangle(-68.9,-31.2,137.8,84.9), null);


(lib.text2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AAdAyIAAhOIg6BOIgOAAIAAhjIAPAAIAABOIA6hOIAOAAIAABjg");
	this.shape.setTransform(30.5,49.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AAbAyIgjguIgUAVIAAAZIgQAAIAAhjIAQAAIAAA4IA1g4IATAAIgqArIArA4g");
	this.shape_1.setTransform(19.6,49.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("AgxBCIAAiBIAOAAIAAAUQAPgWAXAAQASAAAPAOQAOAOAAAYQAAAWgOAOQgPAPgSAAQgXAAgPgVIAAAxgAgYgpQgLALAAARQAAAQALALQAKAKAOAAQAPAAAKgKQAKgKAAgRQAAgSgKgKQgLgLgOAAQgOAAgKALg");
	this.shape_2.setTransform(7.4,51.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("AgkAlQgPgPAAgWQAAgUAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAUQAAAVgPAQQgPAPgWAAQgVAAgPgPgAgagbQgKAMAAAPQAAARALAKQAKAMAPAAQAQAAAKgMQALgKAAgRQAAgPgLgMQgLgLgPAAQgPAAgLALg");
	this.shape_3.setTransform(-5.5,49.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("AgkA3QgOgPAAgaIACgdQACgKACgEIAGgMQAGgGAFgDQAHgFAIgBIA2gNIADANIg1ANQgQAEgFAIQgHAIgBAPQAMgVAcAAQATAAAPAOQAOAOAAAUQAAAWgPAOQgOAPgWAAQgWAAgOgPgAgYgGQgKAJAAARQAAAPAKALQALALANAAQAPAAALgLQAKgLAAgPQAAgQgLgKQgLgLgOAAQgOAAgKALg");
	this.shape_4.setTransform(-17.9,48);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1B").s().p("AgtA8IAFgLQAHADAJAAQAGAAAFgEQAFgEAEgKIgthiIAQAAIAjBSIAghSIAQAAIgqBlQgGAPgHAHQgHAGgMAAQgLAAgKgFg");
	this.shape_5.setTransform(-29.9,51.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1B").s().p("AgqAyIAAhjIAvAAQAOAAAKAHQAJAHAAALQAAARgRAGQAWAFAAATQAAAMgKAIQgJAHgRAAgAgbAlIAgAAQALAAAGgEQAGgFAAgIQAAgHgHgEQgFgEgNAAIgeAAgAgbgGIAdAAQAJAAAGgEQAGgEAAgIQAAgGgGgEQgFgEgJAAIgeAAg");
	this.shape_6.setTransform(23.7,28.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1B").s().p("AgkAlQgPgPAAgWQAAgUAPgPQAPgQAVAAQAWAAAPAPQAPAQAAAUQAAAWgPAPQgOAPgXAAQgVAAgPgPgAgZgaQgLAKAAAQQAAAQALAMQALAKAOABQAQgBAKgKQALgMAAgQQAAgPgLgLQgKgMgQAAQgPAAgKAMg");
	this.shape_7.setTransform(11.5,28.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1B").s().p("AAcAyIAAhWIg3AAIAABWIgPAAIAAhjIBVAAIAABjg");
	this.shape_8.setTransform(-0.7,28.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1D1B").s().p("AAdAyIAAhOIg6BOIgOAAIAAhjIAPAAIAABOIA6hOIAOAAIAABjg");
	this.shape_9.setTransform(-12.7,28.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D1D1B").s().p("AgHAyIAAhWIgjAAIAAgNIBVAAIAAANIgjAAIAABWg");
	this.shape_10.setTransform(-23.6,28.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D1D1B").s().p("AAfAyIgfgpIgeApIgRAAIAngyIglgxIARAAIAcAnIAegnIAQAAIglAxIAnAyg");
	this.shape_11.setTransform(37.1,8.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D1D1B").s().p("AggAmQgOgOAAgYQAAgVANgPQAOgPATAAQAWAAANAPQAMAOAAAXIAAAFIhOAAQABAQALAIQAKAJAMAAQASAAAOgOIAJAIQgRATgZAAQgTAAgPgOgAgUgdQgKAKgBAOIA/AAQgCgPgHgJQgIgKgPAAQgMAAgIAKg");
	this.shape_12.setTransform(26.3,8.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1D1D1B").s().p("AgeAlQgPgPAAgWQAAgUAPgPQAPgQAUAAQAXAAARASIgJAKQgOgPgRAAQgOAAgKAMQgLALAAAPQAAAQALAMQAKAKAPABQAQgBAOgPIAKAKQgSATgXAAQgUAAgPgPg");
	this.shape_13.setTransform(15.2,8.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1D1D1B").s().p("AgqAyIAAhjIAvAAQAOAAAKAHQAJAHAAALQAAARgRAGQAWAFAAATQAAAMgKAIQgJAHgRAAgAgbAlIAgAAQALAAAGgEQAGgFAAgIQAAgHgHgEQgFgEgNAAIgeAAgAgbgGIAdAAQAJAAAGgEQAGgEAAgIQAAgGgGgEQgFgEgJAAIgeAAg");
	this.shape_14.setTransform(4.2,8.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1D1D1B").s().p("AAdAyIAAgkIgbAAIgbAkIgSAAIAegnQgLgCgIgIQgHgHAAgMQAAgOAKgIQAKgJARAAIAuAAIAABjgAgSgfQgHAGAAAIQAAAJAHAFQAIAEAJAAIAeAAIAAglIgeAAQgLAAgGAFg");
	this.shape_15.setTransform(-13.6,8.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1D1D1B").s().p("AgyAxIACgNIAHACIAHgBIAGgGQADgEACgJIADgWQABgPAAgWIAAgJIBGAAIAABjIgPAAIAAhWIgpAAIAAADQAAAYgCAOQgBAOgDALQgDAIgEAGQgFAFgEABIgLACIgMgCg");
	this.shape_16.setTransform(-25.5,8.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1D1D1B").s().p("AAoA+IAAgZIhPAAIgDAZIgMAAIAAgmIAKAAQAOgYAAgsIAAgRIBGAAIAABVIAPAAIgDAmgAgQgiQAAAkgMAWIA1AAIAAhIIgpAAg");
	this.shape_17.setTransform(-36.4,9.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1D1D1B").s().p("AAdAyIAAhOIg6BOIgOAAIAAhjIAOAAIAABOIA7hOIAOAAIAABjg");
	this.shape_18.setTransform(30.1,-11.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1D1D1B").s().p("AgxAxIABgMIAIABQAEAAACgBQADgBADgFQAEgGABgGIADgXIABglIAAgIIBGAAIAABiIgPAAIAAhWIgoAAIAAADQAAARgCAVQgCAPgDAKQgDAJgEAEQgEAGgFABQgFACgGgBQgFABgGgCg");
	this.shape_19.setTransform(17.3,-11.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1D1D1B").s().p("AgfAlQgPgOAAgXQAAgVAOgPQAOgPATAAQAWAAALAPQANAOAAAWIAAAGIhOAAQACAPAJAJQAKAJANAAQATAAAMgOIAJAIQgQATgYAAQgUAAgOgPgAgVgdQgIAJgCAPIA/AAQAAgNgJgLQgJgKgNABQgMgBgKAKg");
	this.shape_20.setTransform(6.6,-11.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1D1D1B").s().p("AAoA+IAAgZIhQAAIgCAZIgMAAIAAgmIALAAQANgYAAgsIAAgRIBFAAIAABVIAQAAIgDAmgAgQgiQAAAkgMAWIA1AAIAAhIIgpAAg");
	this.shape_21.setTransform(-5,-10.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1D1D1B").s().p("AgkAkQgPgOAAgWQAAgUAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAUQAAAWgPAOQgPAQgWAAQgVAAgPgQgAgagaQgKALABAPQAAARAKALQAKALAPgBQAQABAKgLQALgLAAgRQAAgPgLgLQgKgMgQAAQgQAAgKAMg");
	this.shape_22.setTransform(-16.7,-11.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1D1D1B").s().p("AAkAyIAAhLIgkAxIgkgxIAABLIgOAAIAAhjIAOAAIAkA0IAlg0IAOAAIAABjg");
	this.shape_23.setTransform(-29.4,-11.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1D1D1B").s().p("AAkAyIAAhLIgkAxIgkgxIAABLIgOAAIAAhjIAOAAIAkA0IAlg0IAOAAIAABjg");
	this.shape_24.setTransform(51.8,-32.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1D1D1B").s().p("AggAlQgOgOAAgXQAAgVAOgPQANgPAUAAQAVAAANAPQAMAOAAAWIAAAGIhOAAQACAPAJAJQALAJAMAAQASAAANgOIAKAIQgRATgYAAQgUAAgPgPgAgUgdQgJAJgCAPIA/AAQgBgOgIgKQgIgKgPABQgLgBgJAKg");
	this.shape_25.setTransform(39.3,-32.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1D1D1B").s().p("AggAsQgLgJAAgPQAAgPAMgIQALgIAUAAQAQAAANAEIAAgDQAAgOgIgGQgIgHgNAAQgNAAgRAHIgEgMQATgJAQAAQAWABAKAKQALALAAATIAAA7IgPAAIAAgOQgNARgWAAQgQgBgKgHgAgUAFQgIAFAAAKQAAAJAHAGQAIAFAKAAQANAAAKgHQAJgIAAgMIAAgKQgPgDgOAAQgMAAgIAFg");
	this.shape_26.setTransform(27.7,-32.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1D1D1B").s().p("AghAyIAAhjIBDAAIAAANIg0AAIAABWg");
	this.shape_27.setTransform(19.3,-32.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1D1D1B").s().p("AggAsQgLgJAAgPQAAgPAMgIQALgIAUAAQAQAAANAEIAAgDQAAgOgIgGQgIgHgNAAQgNAAgRAHIgEgMQATgJAQAAQAWABAKAKQALALAAATIAAA7IgPAAIAAgOQgNARgWAAQgQgBgKgHgAgUAFQgIAFAAAKQAAAJAHAGQAIAFAKAAQANAAAKgHQAJgIAAgMIAAgKQgPgDgOAAQgMAAgIAFg");
	this.shape_28.setTransform(8.4,-32.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1D1D1B").s().p("AgyAxIACgMIAHABIAHgBQADgCADgEQADgEACgIIADgXQABgPAAgWIAAgIIBGAAIAABiIgPAAIAAhWIgpAAIAAADQAAAZgCANIgEAZQgDAJgEAEQgEAGgFABQgFACgGgBQgGABgGgCg");
	this.shape_29.setTransform(-3.6,-32.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1D1D1B").s().p("AAoA+IAAgZIhPAAIgDAZIgMAAIAAgmIAKAAQAOgYAAgsIAAgRIBGAAIAABVIAPAAIgDAmgAgQgiQAAAkgMAWIA1AAIAAhIIgpAAg");
	this.shape_30.setTransform(-14.5,-31.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1D1D1B").s().p("AggAlQgOgOAAgXQAAgVAOgPQANgPATAAQAWAAAMAPQANAOAAAWIAAAGIhOAAQABAPALAJQAKAJAMAAQASAAANgOIAJAIQgQATgYAAQgVAAgOgPgAgUgdQgKAJgBAPIA/AAQgCgOgHgKQgJgKgOABQgLgBgJAKg");
	this.shape_31.setTransform(-25.8,-32.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1D1D1B").s().p("AgxBCIAAiBIAPAAIAAAUQAPgWAWAAQATAAAOAOQAOAOAAAYQAAAWgOAOQgOAOgTAAQgXAAgOgVIAAAygAgYgpQgLALAAARQAAAQALAKQALALANAAQAPAAAKgKQAKgLAAgRQAAgRgKgKQgKgLgPAAQgMAAgMALg");
	this.shape_32.setTransform(-37.7,-31.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1D1D1B").s().p("AAmBDIAAh4IhLAAIAAB4IgPAAIAAiFIBpAAIAACFg");
	this.shape_33.setTransform(-51.6,-34.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text2, new cjs.Rectangle(-56.9,-41.4,113.9,99.3), null);


(lib.text1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AgIAKIAAgTIARAAIAAATg");
	this.shape.setTransform(37.6,28.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AghAyIAAhjIBDAAIAAANIg0AAIAABWg");
	this.shape_1.setTransform(33.1,24.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("AgjA7QgPgMAAgQQAAgMAIgIQAHgJANgDQgXgLAAgVQAAgPAOgKQAOgKARAAQASAAAOAKQAOAKAAAQQAAAUgXALQAcAJAAAXQAAAQgPAMQgOAKgWAAQgVAAgOgKgAgYAMQgKAHAAAMQAAAKAJAIQAKAHAPAAQAQAAAKgHQAJgIAAgLQAAgLgKgHQgLgHgOAAQgOAAgKAHgAgVgwQgJAGAAALQAAALAJAGQAJAHAMAAQANAAAJgHQAJgGAAgMQAAgKgJgGQgJgHgNAAQgMAAgJAHg");
	this.shape_2.setTransform(16.2,23);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("AgoAyQgQgUAAgeQAAgcAQgUQAQgVAYAAQAaAAAPAUQAQAUAAAdQAAAdgQAUQgQAVgZAAQgYAAgQgUgAgdgnQgLARAAAWQAAAWALARQAMARARAAQASAAAMgQQALgRAAgXQAAgVgLgRQgMgRgSAAQgRAAgMAQg");
	this.shape_3.setTransform(3.2,23);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("AguA1IAJgMQAQAPARAAQAQAAAMgQQALgQAAgZIAAgBQgOAUgXAAQgVAAgNgMQgNgKAAgTQAAgTANgOQAOgNAVAAQAXAAAOAQQAOAQAAAjQAAAfgPAUQgQAVgYAAQgVAAgUgRgAgZguQgJAJAAAOQAAANAJAIQAKAHAOAAQAOAAAKgIQAJgJAAgNQAAgNgKgJQgKgIgNAAQgPAAgJAJg");
	this.shape_4.setTransform(-9.9,23);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1B").s().p("AAHBEIAAh3IgYAIIgEgNIAggLIALAAIAACHg");
	this.shape_5.setTransform(-20.3,23);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1B").s().p("AgqAyIAAhjIAvAAQAOAAAKAHQAJAHAAALQAAAQgRAHQAWAFAAATQAAAMgKAIQgKAHgQAAgAgbAlIAgAAQALAAAGgEQAGgFAAgIQAAgHgHgEQgGgEgMAAIgeAAgAgbgGIAdAAQAKAAAFgEQAGgEAAgIQAAgGgGgEQgFgEgJAAIgeAAg");
	this.shape_6.setTransform(-34.1,24.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1B").s().p("AgeAkQgPgOAAgWQAAgUAPgQQAOgPAVAAQAYAAAQARIgJAKQgOgOgRAAQgOAAgLALQgJALgBAQQAAAQALAMQALALAOgBQAQABAOgPIAKAJQgRATgYAAQgVAAgOgQg");
	this.shape_7.setTransform(36.7,1.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1B").s().p("AgkAkQgPgOAAgWQAAgUAPgQQAPgPAVAAQAXAAAOAPQAPAPAAAVQAAAWgPAOQgQAQgVAAQgVAAgPgQgAgZgbQgLALABAQQAAAQAKAMQAKALAPgBQAQABALgLQAKgLAAgRQAAgPgLgLQgKgMgQAAQgPAAgKALg");
	this.shape_8.setTransform(24.8,1.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1D1B").s().p("AgeAkQgPgOAAgWQAAgVAPgPQAPgPAUAAQAYAAAQARIgKAKQgNgOgRAAQgPAAgJALQgLALAAAQQAAAQALAMQAKALAPgBQAQABAOgPIAKAJQgRATgYAAQgUAAgPgQg");
	this.shape_9.setTransform(13.2,1.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D1D1B").s().p("AggAlQgOgOAAgXQAAgVAOgPQANgPAUAAQAVAAANAPQAMAPAAAVIAAAGIhOAAQACAPAJAJQALAJAMAAQARAAAOgOIAKAIQgRATgYAAQgUAAgPgPgAgUgdQgJAJgCAPIA/AAQgBgPgIgJQgIgKgPABQgLgBgJAKg");
	this.shape_10.setTransform(1.9,1.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D1D1B").s().p("AgyAxIACgMIAHABIAHgBQADgCADgEQADgFACgIIADgWQABgQAAgVIAAgIIBGAAIAABiIgPAAIAAhWIgpAAIAAADQAAAZgCANQgBAOgDALQgDAJgEAEQgEAGgFABQgFACgGgBQgGABgGgCg");
	this.shape_11.setTransform(-10.5,1.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D1D1B").s().p("AAqAyIAAhjIAPAAIAABjgAg4AyIAAhjIAPAAIAAAmIAbAAQAQAAALAHQALAHAAAOQAAAQgKAIQgKAJgQAAgAgpAlIAbAAQAMAAAFgFQAGgFAAgJQAAgIgGgFQgGgFgLAAIgbAAg");
	this.shape_12.setTransform(-22.9,1.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1D1D1B").s().p("AAcAyIAAhWIg3AAIAABWIgPAAIAAhjIBVAAIAABjg");
	this.shape_13.setTransform(-36.2,1.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1D1D1B").s().p("AAeAyIAAhOIg7BOIgOAAIAAhjIAOAAIAABOIA7hOIAOAAIAABjg");
	this.shape_14.setTransform(52.2,-21.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1D1D1B").s().p("AgxAxIABgNIAHACIAHgBQADgBADgFQAEgGABgHIADgXIABglIAAgIIBGAAIAABjIgPAAIAAhVIgoAAIAAACQgBASgCATQgBAQgDAJQgCAJgFAGQgEAFgFABQgFABgFAAIgMgBg");
	this.shape_15.setTransform(39.4,-21.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1D1D1B").s().p("AggArQgLgJAAgOQAAgPAMgIQAMgIATAAQAOAAAPAEIAAgDQAAgNgHgHQgHgHgPAAQgPAAgOAHIgFgNQASgHARAAQAWgBALALQAKAKAAAUIAAA8IgPAAIAAgQQgNARgVAAQgPAAgMgIgAgUAFQgIAFAAAJQAAAKAIAFQAGAGALAAQANAAAKgIQAKgHAAgMIAAgJQgOgEgQAAQgNAAgHAFg");
	this.shape_16.setTransform(28.5,-21.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1D1D1B").s().p("AAoA+IAAgYIhPAAIgCAYIgNAAIAAgmIALAAQANgYAAgsIAAgRIBGAAIAABVIAPAAIgCAmgAgPgiQAAAkgMAWIA0AAIAAhIIgoAAg");
	this.shape_17.setTransform(17.3,-20.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1D1D1B").s().p("AgoAmIAIgLQAQANARgBQAIAAAJgEQAHgFAAgJQAAgHgGgEQgHgFgMAAIgMAAIAAgLIANAAQAJAAAGgFQAHgFgBgHQABgGgHgFQgGgEgJAAQgRAAgNAKIgGgLQAQgMAVAAQARAAAJAIQAKAHAAAMQAAARgQAFQASAGAAASQABAMgLAKQgKAIgTAAQgXAAgSgOg");
	this.shape_18.setTransform(6.5,-21.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1D1D1B").s().p("AgkAlQgPgPAAgWQAAgVAPgPQAQgPAUAAQAWAAAPAPQAPAPAAAVQAAAVgPAQQgPAPgWAAQgVAAgPgPgAgagbQgKAMAAAPQAAAQALALQAKAMAPAAQAQAAAKgMQALgKgBgRQAAgPgKgMQgKgKgQgBQgQABgKAKg");
	this.shape_19.setTransform(-4,-21.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1D1D1B").s().p("AgeAlQgPgPAAgWQAAgUAPgPQAPgQAUAAQAYAAAQASIgJAKQgNgPgSAAQgOAAgKAMQgKAKAAAQQAAAQAKAMQALALAOAAQAQAAAOgPIAKAJQgRATgYAAQgUAAgPgPg");
	this.shape_20.setTransform(-15.7,-21.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1D1D1B").s().p("AAqAyIAAhjIAPAAIAABjgAg4AyIAAhjIAPAAIAAAlIAbAAQAQAAALAIQALAGAAAPQAAAPgKAJQgLAJgQAAgAgpAlIAbAAQAKAAAHgFQAGgFAAgJQAAgJgHgEQgFgFgMAAIgaAAg");
	this.shape_21.setTransform(-34.4,-21.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1D1D1B").s().p("AAxBEIAAhtIgwBIIgBAAIgxhHIAABsIgOAAIAAiGIAPAAIAwBIIAxhIIAQAAIAACGg");
	this.shape_22.setTransform(-50.1,-23.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text1, new cjs.Rectangle(-56.5,-29.9,113.2,60), null);


(lib.pic2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hoov2();
	this.instance.parent = this;
	this.instance.setTransform(-42,42);

	this.instance_1 = new lib.pic2a();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-107,-113);

	this.instance_2 = new lib.pic2b();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-67,-71);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic2, new cjs.Rectangle(-107,-113,190,228), null);


(lib.pic1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArBTiMAAAgnDIWDAAMAAAAnDg");
	mask.setTransform(5.5,13);

	// Слой 1
	this.instance = new lib.pic1();
	this.instance.parent = this;
	this.instance.setTransform(-76,-112);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic1_1, new cjs.Rectangle(-65.1,-112,141.3,224), null);


(lib.ClipGroup_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsFtQiXiXgBjWQABjVCXiXQCXiXDVgBQDWABCXCXQCYCXAADVQAADWiYCXQiXCXjWABQjVgBiXiXgAhuAqIhnGEQBjAzByAAQDHAACNiNQCMiNABjHQgBhGgThEgAnHCYQAbBSA2BDQA1BDBKAsIBflkIh8AnIglCKIgqANIAliKgAmIkUQhYB9AACXQAABDASA+ICXgwICPoTQiLA0hVB6gAh+nPIiPITIB8goIBVk6IAqgMIhUE4IIrivQgziOh6hXQh+haiaAAQhAAAg+ARg");
	mask.setTransform(51.7,51.7);

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9, null, null);


(lib.ClipGroup_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmhGXQhShVguhpQguhrAAhuQAAj0CuitQCtiuD0AAQD2AACtCuQCtCtAAD0QAAD2itCtQitCtj2AAQjvAAiyi5g");
	mask.setTransform(118.4,118.4);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#D52E3F","#D52E3F","#CE2E3D","#CC2E3C","#BA2E36","#B72C35","#AC2B30","#A62A2E","#9B2829","#76231D"],[0,0.047,0.047,0.078,0.161,0.439,0.502,0.694,0.835,1,1],43,42.9,-52.8,-52.9).s().p("AyfAAISfyfISgSfIygSgg");
	this.shape.setTransform(118.4,118.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_1, new cjs.Rectangle(59.2,59.2,118.4,118.4), null);


(lib.ClipGroup_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmYGZQipiqAAjvQAAjuCpiqQCqipDuAAQDvAACqCpQCqCqgBDuQABDviqCqQiqCqjvgBQjuABiqiqg");
	mask.setTransform(113.1,113.1);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#D52E3F","#C82D3A","#A5292D","#9B2829","#76231D"],[0,0.514,0.663,0.933,1,1],-37.8,-51.3,55.1,74.6).s().p("AxqiqIUVvAIPAUVI0VPAg");
	this.shape.setTransform(113.1,113.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_1, new cjs.Rectangle(55.3,55.3,115.7,115.7), null);


(lib.ClipGroup_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmRGRQimimAAjrQAAjqCminQCnilDqAAQDrAACmClQCnCnAADqQAADrinCmQimCnjrAAQjqAAining");
	mask.setTransform(111,111);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#D52E3F","#C82D3A","#A5292D","#9B2829","#76231D"],[0,0.224,0.459,0.89,1,1],-37,-50.2,54.1,73.3).s().p("AxVinIT9uuIOuT8Iz9Ovg");
	this.shape.setTransform(111,111);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_0, new cjs.Rectangle(54.3,54.3,113.6,113.5), null);


(lib.ClipGroup_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhPAPQgLgMAEgYIAfAAQABARAPgEQAJgCAHgLIAcAAQgTAggfAJQgIACgHAAQgMAAgHgHgAAkgVIA1AAIgRAHQgIACgHAAQgNAAgIgJg");
	mask.setTransform(8.8,2.2);

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_0, null, null);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AidBxQgKgNAFgaQAFgbASgVQASgWAXgGQAIgCAHAAQAQAAAHAMQAHANgEAWQgFAWgMATQgNATgSAKgAhnAaQgVAHgGAgQgFAbAOAAIAFgBQAVgGAGggQADgSgFgGQgDgEgEAAIgFABgAjZBxQAHgJADgQQADgRgFgHQgEgFgIADQgIACgHAIQgJAKgDASQgCAJABAEIggAAIABgEQAGgbARgVQASgWAYgHQAIgCAGAAQAQAAAHANQAHANgEAXQgEASgJAQgAgsgTIAjgKIADBDIABAAIAihRIAkgLIg/CHIgkANgABRg8IBGgVIgGAfIglANIgDAPIAfgMIgFAfIggAJIgDAPIAmgOIgIAkIhIAWgAC4hcIBDgTIALgBQALAAAFAGQAFAHgDANQgFAYgSALQANACgDAYIgBAMQgBAJABADIgjAJIABgRQABgLgBgEQgCgHgJADIgQABIgKAxIgkAKgADlhOIgQAFIgFAYIASgFQAPgEADgMQACgJgIAAIgJABg");
	mask.setTransform(28.2,11.3);

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, null, null);


(lib.ghghj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003EC9").s().p("AgKAAIAFgIQAFgHAFAFIABABQAGAFAAAEQAAACgFAFQgGAGgJAAQgGgGAEgHg");
	this.shape.setTransform(4.5,-25.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003EC9").s().p("AgKASIgCgBQgIgKAGgIIAFgKQAEgGAFAAQAEAAAEADIABABQAIAHAAAFQABAFgIAHQgHAHgLAAg");
	this.shape_1.setTransform(4.5,-25.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003EC9").s().p("AgGARQgLgPAGgLIACgDIALgHQAEgDAEAEQAEAEAAAIIgHAWQgCAEgEABIgBAAQgDAAgDgEgAAAACQAGgFgEgGQgDAFABAGg");
	this.shape_2.setTransform(3.4,-12.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003EC9").s().p("AgKAUQgNgSAHgNIABgBIADgEIAMgIIAFgBQAGAAADAFQAFAFAAAJIAAABIgIAXQgCAIgJAAQgFAAgFgGg");
	this.shape_3.setTransform(3.4,-12.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003EC9").s().p("AgfBRIArhyIgJgBQgDAAgDgFQgDgEADgFQANgWALgJQADgDAEACQAEACAAAEQAAAKgGAUQgHAbgNAaIgiBGIgCADgAAHgtQAAABAAABQgBAAAAABQAAAAAAABQABAAAAAAQABACAFABIAHgXIgBgBQgHAEgFANg");
	this.shape_4.setTransform(-35.5,-21.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003EC9").s().p("AglBSIArhwIgCgBIAAgEIAAAEQgHAAgEgGQgEgHAFgHQAKgVAOgMQADgDAFAAIAEABQAIADAAAIQgBALgFASIAAADQgIAbgNAaIgiBGIgCADIgBABIgDAEg");
	this.shape_5.setTransform(-35.5,-21.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003EC9").s().p("AgdBKIADgIIAmhjIgIgBQgGgBgCgEQgCgFAEgGIAPgWIAGgGQAEgFAEADQAGADgBAEIgGAdQgFAXgQAgIggBCIgEAFQgBgEADgEgAAHgrQgCAGAIgCIAGgWIgBgBQgJAIgCALg");
	this.shape_6.setTransform(55,8.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003EC9").s().p("AgkBQQAAgGAEgIIAlhiIgBAAQgKgBgDgHQgCgHAFgIIAPgWIAHgHQAEgEAFAAIAFABQAIAEgBAJIgGAdQgGAWgQAiIggBCQgCAEgDACIgHAGg");
	this.shape_7.setTransform(55,8.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003EC9").s().p("AgmA8QgMgOAAgNIgFg7IAAgDIgBgRQAAgJgFgHQAJgHAEAKQADAGAAAIIAHBSQABAGADAGQAFAHAHgGQAHgGAHgNIANgVIARgdQAKgTARgTQACgDAGgDIAEAAIAAACIgMAQIgPAXIgbAxQgFAJgMASQgEAEgHAFQgFADgDAAQgFAAgEgGg");
	this.shape_8.setTransform(6.1,-64.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003EC9").s().p("AgqA/QgMgQAAgNIgEgqIgCgSIAAgIQAAgSgEgHIgDgEIAEgDQAFgEAFAAQAGAAAEAJQAEAJgBAGIACAmQACAVADAXQABAEADAGIACACIADgCQAGgFAHgMIAdgyQAJgTATgUQADgEAGgDIADgBIAHAAIACAIIgBACIgEAFIgIALQgKANgFAJIgMAVIgPAcQgHANgLAPQgDAFgJAGQgFADgFAAQgIAAgGgIg");
	this.shape_9.setTransform(6,-64.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003EC9").s().p("AgnBFQgMgCgIgJQgHgIgBgMQgBgUALgaQAIgUAWgfQAHgKAJAAQAIgBADAFQAFAEgCAIIgFAbQgCALgJAHIgBgBIAEgOQAGgTAAgKIgBgHQgLAFgEAFQgdAngGAeQgCAKACAKQABALAKAGQAKAFAKgFQAVgJAWgUIAtgeQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAIgGAGIgaAXIgjAcIgRALQgIAFgJAAIgGgBg");
	this.shape_10.setTransform(43.2,4.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#003EC9").s().p("AhAA+QgIgJgCgOQgBgXALgaQAIgSAXgiQAIgMAMAAIACAAQAKAAAEAGQAFAGgCALIgGAaQgCAMgKAJIgCACIgJgEIAHgSIAAgBQAFgQAAgKIAAAAQgEACgDADQgcAmgGAdQgCAIABAKQABAHAFAEQAFAFAHAAQAEAAADgDQAUgIAWgTIANgLIAegTIADgBIAEgBIAEAAIAHACIgLAMIgbAXIgjAcIgPALIgCABQgJAFgKAAQgRAAgNgNg");
	this.shape_11.setTransform(43.4,4.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#003EC9").s().p("Ag5BQIAAgVQgBgGACgKIACgQQAEgogCgUIAAgOQgBgDAEgCQAEgBACADIAGAMQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBAAQgCAGgBAJIAAAPIgFAwIgBAXQARgVAGgKIAhg/IAWghIAPgXQAEgFACAAQACABADAGIgVAfQgXAkgJATQgIAVgSAcQgHALgRAVIgFAFQgHgDAAgHg");
	this.shape_12.setTransform(16.6,-21.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#003EC9").s().p("Ag0BeQgKgFAAgJIAAgVQgBgFADgQIABgMIABgFQADgmgCgQQgBgFABgFIAAgEQAAgHAGgDIAEgBQAFAAADAFIAHANQACADgCAEQgCAEgBAQIAAAIIgGA4QAJgKAFgJIA/hsIABgCIAGgKQAGgGADAAQAFAAAFAJIACACIgXAiIgCAFQgUAdgKAVQgJAWgRAbQgEAIgNAQIgLANIgBABIgDACg");
	this.shape_13.setTransform(16.6,-21.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#003EC9").s().p("AgbBHQgNAAgJgOIgDgGIgHAIIgIgCQABgIAGgHQADgDABgGIACgYQACgJALgSQAJgNAOgRQARgRAMgEQAFgDAGAFQAHAGABAGQACAFgCAFQgGAOgEAFQgPAUgWAVIgbAYIADAKQAIAPAOgDQALgBAHgGQAQgLAHgGIAWgSQAOgKAIgIIABgBQACADgDADIgYAXIgiAeQgNAMgSAAIgEAAgAAIg6QgQANgHAIIgGAKQgMANgIASQgFAKAAANIAWgTIAggjQAFgGAJgPQAEgHgFgEQgCgBgIAAIgDACg");
	this.shape_14.setTransform(21.1,-70.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#003EC9").s().p("AgcBMQgPAAgKgRIgEAEIgDABQgDgBgDgBIgCgBIgEgBIAAgEQABgIAIgJQACgDAAgEIAAgFIACgSQACgKAMgUQAKgOAOgQQAQgSAOgGIAGgBQAFAAAFAFQAJAHABAIQACAIgCAFQgHAOgEAGQgQAVgWAUIgYAXIAAAAIABAGQAGAKAIgBIADAAQAKgCAGgEIAJgHIAOgLIATgOQAUgRAEgDIAGgDIADADQAFAFgHAGIg6A2QgOANgUAAgAALg2QgOAKgIAKIgCAEIgFAGQgKALgJATIgDAJIANgLIAfgiQAFgFAHgNIACgDQAAgBABAAQAAgBAAgBQAAAAAAAAQAAgBgBAAIgDgBIgDAAg");
	this.shape_15.setTransform(21.1,-70.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#003EC9").s().p("Ag5EAIgCgPQACgwAJgmIA8k+IAPg5IAHgQIAGgRIAJgJIALADQgBAEgDACIgGACIgFANQgKAagEARIgLApIgKA0IgsDpIgFAWIgGAiQgGAkgCAmIgBACQgDgDAAgEg");
	this.shape_16.setTransform(-41.7,-61.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#003EC9").s().p("Ag4ELQgGgEgBgIIAAgCIgBgNQACgtAJgpIAxkGQAFgeAGgaQADgPAFgNIAIgeQABgHAFgLIAGgOQABgDACgCIABgBIAJgJIARAGIgBAEQgBAIgKAEIgEAKQgIAWgGAVIhLF+QgHApgBAgIgBAEIAAAAIgDAFg");
	this.shape_17.setTransform(-41.7,-61.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#003EC9").s().p("Ag8CnIAHg8IABgQIAXi8QACgQAAgRQAAgFAFgGQACgBADABQAJADAIgFIAUgIIAjgVQACgCADADQADADgDADIgFAEIgwAdQgNAJgKgDIgHBJIgGAqIgTCkIAAAHIAGgBIAzgSQAKgDAHgGIAGgEIAIAJIgEAEQgUALgXAGIgYAJIgVAGIgEABQgFAAABgHg");
	this.shape_18.setTransform(-46.7,-0.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#003EC9").s().p("Ag/CvQgDgCABgIIAfkGQACgSAAgPQAAgHAGgHQADgDAEAAIAJACQADAAAFgDIAKgEQAGgCADgCIAjgUIAFgBQACAAAFACQAFAHgFAGIgGAFIgxAcQgKAIgJAAIgCAAIgfESIAAACIAzgSQAIgDAHgGIAEgDIACgBIAEgDIAOAQIgFAFIgEADQgWALgVAHIgZAIIgVAHIgEABQgFAAgDgEg");
	this.shape_19.setTransform(-46.7,-0.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#003EC9").s().p("Ag5CkQALgIARgJIAagPQAKgHAKACIABgVIAekBIAAgIIgEABIg7AVQgDABgGAFQgFAEgDgBIgFgFIgCgDIAFgEIBXggQAKgDgBAKIgYDEIAAABIgEAjIgDAZIgDApQAAAFgGAFQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgIgDgJAEIgUAJIggASIgEADQgKgFAIgFg");
	this.shape_20.setTransform(44.9,-31.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#003EC9").s().p("Ag6CyQgHgEgBgFQAAgEAGgGIA3ggQAIgGAJAAIABAAIAAgCIAekPIABgBIg5AUIgIAFQgFAFgEAAQgFAAgEgGIgBgBIgCgDIgBgBIgCgDIADgDIABgBIAFgEIACAAIBWggIAEgBQAEAAAEADQADAEAAAGIgYDEIAAABIgKBlQAAAHgHAGQgCACgEAAIgEgBIgFgBQgEAAgEACQgFAEgFABIgKAEIgmAWg");
	this.shape_21.setTransform(44.9,-31.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#003EC9").s().p("Ah4BbQgFgDADgEQADgFADgLIAEgQIAFgQIABgCIABgLQABgHADgEIADgLIACgLIANg8QABgKAJgDIAPgGQAKgFAMAEQAJAEAAAJQABAKgDAJQgGASgRASIgbAcIgLAJIgCADIACACIAYAFIAOAFQANAGAgADQAhAEAsgCIAzgCIADABIAAABIgDABIgqAFQgTADgmABQgXABgUgFIgkgHIgcgHIgJgCIgCADIgSA7IgGgCgAhLg0IACAIQgBAHgDABQgCABgDAIIgEAYQAIgEABgCIAfgjQAHgIADgTQAAgEgCgDQgCgDgDAAQgNAAgFAHIgEACQgFACgCACQgBACAAAHIAGACQAEABABADQgDACgEgBIgEgBIgCABg");
	this.shape_22.setTransform(40.9,-74.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#003EC9").s().p("Ah0BhIgCgBIgFgBQgEgCgBgFQgBgDACgEQADgFADgNIAJgdIAAgBIAAgBIABgHQABgLAEgFQACgDACgKIANg/IAAgFQADgMALgEIAOgGQAGgDAHAAQAGAAAHACQALAFACAMQABANgEAIQgGASgSAUIgbAcIgHAGIgBABIATAEQAHACAHADQALAFAbADIAGABQAYACAYAAIAdAAIAkgCIAPAAIAHABIABAIIgEACIAAAAIgEABIgqAFQgTADgnABIgFAAQgVAAgSgDIhFgQIgTA+gAhFgsQAAAJgGADQAAAAAAAAQgBABAAAAQAAABAAABQgBAAAAABIgDAOIAdghQAHgIACgRIgBgEIgBgBIgDAAQgGAAgEAFQgDADgEACQgFABAAADIABABQAIABACAGIABADIgCACQgDADgFAAIgCAAQABAAAAAAQAAABAAAAQAAABAAAAQAAAAgBABg");
	this.shape_23.setTransform(41,-74.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#003EC9").s().p("Ag/BfQgCgJADgNIAhhlQAGgRAAgEIAEgLQACgDAEABQAEACAAADIACAVQACALgMgEIgjBkQgCAKACAJQAFACADgFQAPgTAGgKIAcg1IAXgrQAFgKAEgMQACgEgBgGQAAgEACgCQAHgGAFgOQACgFACgBQADAAAGADIgFAQIgRApIgHARIgHAZQgGASADAgQABAHADADQAEADAJgDIAEAAIgCAEQgFAGgIAAQgIAAgEgFQgEgFgBgKQgCgVgDgLIgGALQgIATgYAjQgFAHgJAIQgDADgFABIgEABQgHAAgCgIg");
	this.shape_24.setTransform(-10,-16.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#003EC9").s().p("AhEBgQgDgLAEgOIAHgYIAchRQADgJAAgGQAAgEAEgHIABgCQADgFAFAAIAEAAQAHAEABAGIAAAEIAAADIABADIAAAKQABAIgDADQgCADgFAAIgDAAIgBADIgGAQIgPAsIgKAgQgCAHABAFIAGgIIAOgVIAWgnIAdg4QAFgJAEgMIABgIQgCgHAFgEQAGgFAFgMQADgKAHAAQAEAAAGAEIADACIgGAUIgYA6IgHAYQgGASAEAeQABAIADAAIAJgCIACAAIAHgBIgDAJQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgGAIgLAAQgKAAgGgHQgDgFgCgMIgDgSQgJAVgWAgIgPAQQgDADgIACIgEABQgLAAgDgMg");
	this.shape_25.setTransform(-9.9,-16.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#003EC9").s().p("AhDBtQgOgCgDgNQgGgTADgdQAAgEAEgDQAHgCAIgGIAMgKQAdgWAZgKIARgJQAEgDABgEQAGgjAAgJQgBgNgDgFQgDgGgHgCQgIgDgHAFQgOAJgRAQQgIAIgDAJQgDAHABACQABADAGADQgEADgEgBIgHgEQgGgCAEgIQAHgTAKgJQAPgOAJgGQAFgEANgGQAFgCAJADQAJADADAGQAGAJABANQACAQgEAOIgCAQIAdgMIAdgLQgCAEgHAEIgrAYQgJAFgDANQgIAbgLAVIgGALQgXAfgRAOQgLAJgLAAIgFgBgAABAAQgcANgKAHIgmAeQgDADAAAEQgBAMAEAUQACAGAFADQAFACAFgBQALgDAKgLQANgMAFgIQASgXAIgXQAGgRACgJgAgeAJIABACIACgDIgCAAg");
	this.shape_26.setTransform(32.2,-28.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#003EC9").s().p("AhGByQgQgEgFgPQgFgUACgdQABgJAHgCQAHgDAMgKIAGgFQAfgWAYgKQAGgDALgGIACgDIACgLQAEgXAAgKQAAgKgDgFQgEgHgHAAQgEAAgEADQgOAHgPARQgIAJgDAGIgBAFQAAABAFADIAHAEIgHAEQgDADgGAAQgEAAgHgEIgBAAQgJgFAFgMQAHgTAMgLIAJgIIAPgMQADgDARgIIAFgBQAHAAAIAEQAIAEAEAFQAHAMAAAMQACATgEAOIgBAGIA9gYIgFALQgDAHgHADIgBAAIgrAYQgHAFgDAKQgGAZgNAYIgBAEIgFAIQgXAegSAQQgMAKgMAAgAgHAHQgWAMgHAFIgmAeIgBADQgCAOAFARQACAGAGAAIADAAQAKgDAJgJIAAgBQAMgMAFgHQASgWAHgXIAGgRg");
	this.shape_27.setTransform(32.4,-28.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#003EC9").s().p("Ag/CNQACgFgEgOIAFgMQACgGADgEQACgCABgGIA6jJQABgGABgVQABgFAEgEQACgEADACQAEACABADIABAKQAAABAAABQAAABgBAAQAAABAAAAQAAAAAAABQgDADgCAGIgCAKIgQBEIgOAtIAAAHIAKgMQAOgVAXgSIAOgIQANgDAEAOQAFARgFAUQgKAkgMAaQgNAegHAdQgBAFACAFQgCAFgEgDQgEgDgBgEQgBgEACgGIAOgrIANgfIAPg2QACgNgFgMIgIACIgQANQgXAVgNAWIgJAOQgGAGgEAOIgYBTIgFAKQgIgDABgFg");
	this.shape_28.setTransform(-28.3,-14.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#003EC9").s().p("Ag5CZQgNgFACgJQACgFgDgJIgBgDIAAgBIAAgCIAFgLIABgBQACgGADgFIACgFIAtiQIANg6QACgKAAgOIABgCQAAgGAFgGQAEgEAEAAIAEABQAFADABAFIACAKIAAACQAAAFgDADQgDADgBAIIgBAFIgaBlQANgTAWgRIACgCQAHgGAHgBIAGgBQANAAAEAPQAFAUgGAUQgIAjgNAbQgOAfgGAbQgBAEABAEIABABIgBADQgCAFgGAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgGgFgBgFQgBgEABgJIAqh/QACgKgDgJIgCAAIgQANQgWATgMAXQgFAIgGAGQgGAJgCAKIgYBTIgEAIIgCACIgCAEg");
	this.shape_29.setTransform(-28.3,-14.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#003EC9").s().p("AAAD7QgMgJgHgPQgGgNgBgaIAAgfQAAgYAEgkIAMhbIgFABIgQANIgRAKIgSAKIgLAGQgKAFgCAGIgEACIgFgJQgDgDAFgDIASgJIAHgEQAEgEATgJQAKgFAHgGIAUgOQADgDACgJQAJgjACgQIAIgdIAJgcQAHgYAMgXIAnhHQADgGAHABIAKAAQACAFgGADQgJADgGANIgZAuIgJATQgIAQgMAoIgJAaIgNA2IAAAFQAGgDAIgFIAMgKIAYgRIAXgUIACABQgEAIgMALIgfAbIgXARQgIAGgCAJIgIAtIgCARIgGBIIgBAsIAAASQACASACAIQADAKAKAJIAGAFQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAIgDAAg");
	this.shape_30.setTransform(-31.5,-65.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#003EC9").s().p("AgCD/QgPgLgGgPQgHgPgBgbIAAgeQAAgYAEgkIAAgBIAFgzIAEgXIABgIIgCACIgKAHIgLAIIgXANIgCABIgKAFQgIAFgBAEQgCADgDABIgBAAIgEADIgJgOQgCgDABgEQABgEAEgBIAUgKIAEgDQAFgEAOgIIAGgCIAQgKIAUgOQACgCABgHIABgBIALgyQACgNAIgYIAHgVQAGgYANgXIAmhIQAFgHAIAAIACAAIANAAIABADQACAEgBAEQgCADgFADQgHADgGALIgYAtIgFAKIgEAKQgJAQgKAjIgKAfIgKApIgCAGIApgdIAQgOIAKgJIAHAHIgBADQgDAHgNANIAAABIg3AsQgGAEgCAHIgKA+IgHB5QgBAHABAFQABALADAOQADAJAIAIIAKAIIgDAEQgDADgEABQgDAAgCgCg");
	this.shape_31.setTransform(-31.5,-65.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#003EC9").s().p("AhfBcQgNAAgIgQQgGgNACgNIAAgKQgCgQANgNIAcgaQAKgIAMgGQALgEAKAHQAMAIgBASQAAAXgPAVIgVAgQAMgEAKgKQAOgMAegjIASgXQAJgOgCgQQgCgPAKgOQAFgIALgFIAPgIQAQgHAMAFQAGADADADIAKAJQAFAFABAGQACANgBAGQgDARgKAMQgUAagWANIgLAEQgKACgHgGQgIgGgBgKIgBgMQgGABgGAHIgkAvQgJAKgVARQgHAGgOAGQgJAEgKAAIgFgBgAhkAZIgBABQgMATAGAWQACAHAHAHQADACACgBQAOgEAHgIIAMgQQAUgYAHgbIAAgKQAAgIgIgEQgHgEgHADQgSAKgHAIIgDADQAAABAAAAQAAABABAAQAAABAAAAQAAABABABIADAGIgEABIgCAAQgKAAgGAMgAAlgNIADASQABAHAGADQAGAEAHgFQAPgJAPgPQAJgJAIgPIAEgMQAFgPgKgJQgRgSgVALIgMAHQgMAGgFARQAGABABACQABACgDAGQgIAKAHAKIgDAAQgBAAAAAAQgBAAAAABQgBAAAAABQAAABAAAAg");
	this.shape_32.setTransform(-15,-57.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#003EC9").s().p("AhfBhQgQAAgJgTQgHgPACgOIAAgIQgDgSAQgPIAcgbQAHgFAQgJQAGgCAEgBQAIAAAIAHQANAJAAAUQAAAZgQAXIgKAOIAEgDQAQgPAbgeIABgCIARgXQAIgMgCgOQgCgRALgQQAGgIAMgGIAPgIQAKgFAJAAQAGAAAGADQAIAEADADIAEADQAMAKACAKQACAKgBAKQgEARgKAOQgVAbgXANIgMAFIgFABQgKAAgIgIQgIgHgBgLIAAgGIgoAzIAAABQgLANgUAPQgHAGgPAHQgKADgNAAgAheBOQAMgEAGgHIAMgQQAUgYAGgYIABgKQgBgEgDgCQgEgEgEAAIgDABIgCACQgPAIgHAGIgCACIABACIAFALIgKADIgBAAIgCgBQgFAAgFAKIgBACQgMAQAGAWQABAFAGAGIAAgBgAAtAEQABAIAGAAQADAAACgCQANgIARgPQAKgLAFgMIABgBIAEgKQADgOgHgFQgJgKgKAAQgIAAgGAEIgMAHQgJAFgEAKQAFACABACQACAHgFAFQgGAJAFAGIAGAKIgLgCg");
	this.shape_33.setTransform(-15,-57.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#003EC9").s().p("AhXBdQgKgEgEgJQgEgMACgVQACgUALgYQAIgPALgOQAMgQAVAHQAIACACAHIAEAIIgFAFIgDgHQgGgIgNAEQgLADgKAPQgKAMgEARQgJAeABAMQAAAHAEAGQAEAIANgDQAMgEAOgOQALgKAfgjQAJgMABgJQAAgFAEgMQANglAdgcQASgTAWANQAFADAEAIQAIAOgFAXQgFAcgWAZQgQAUgMAKQgJAFgIACQgHABgJgFQgJgGgCgHIgBgGIgEAEQgIALgWAWIgSASQgKAHgLAFIgHACQgFAAgFgCgAAPAZQACALAMABQAGABAGgFIAWgWQAUgTAKgfQAFgSgGgPQgFgLgLABQgIAAgMAJQgEADAAAGQABAEgDAFIgMAXQgKAOAJAQIAMAOIADADQAAAAAAABQABAAAAABQAAAAAAABQgBAAAAABQgJgDgHgHIgLgPQgOANAEASg");
	this.shape_34.setTransform(23.8,13.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#003EC9").s().p("AhdBfQgJgFgDgIQgGgOADgVQACgVAMgZQAHgOAMgQQAKgNAQAAQAHAAAGACQAKADADAJIAFALIgNAOIgFgOQgCgDgFAAIgGABQgKADgJANQgIAJgGASIgBAGQgHAXABAMQAAAGADAEQACAEAFAAIAFgBQALgDANgNQANgMAVgZIAIgJQAIgLAAgHQAAgHAEgJIAAgCQAOgmAdgdQAMgMAPAAQAJAAAKAGQAHAEAEAIQAJARgFAYQgGAdgWAaQgRAWgMAJQgKAGgJACIgEAAQgHAAgJgFQgJgGgDgIQgHALgUAUIgHAHQgGAHgGAFQgFAEgRAJQgGACgEAAQgIAAgHgFgAAUAYQACAIAHAAIABABQAEAAAEgEIAIgHQgLgFgLgQQgHAKADANgAA7hFQAAAAgBABQAAAAAAABQgBAAAAABQAAABAAAAQABAFgDAHIgCAFIgLATQgJAMAIAMQADAFAGAFIAGAHIAEgEQATgTAJgdQAFgQgGgOQgDgIgGAAIgCAAQgHABgKAIg");
	this.shape_35.setTransform(23.8,13.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#003EC9").s().p("AhrBiQgJgCgFgJQgEgJADgJQAIgTAPgSIAGgFQAHgEAFAFQAEAEgCAHIgIAaQgBAFgDAAQgFABgDgEQgDgEAEgEIACgDIAGgPIgDABQgNAPgEALQgCAEABALQABAGAGgBQAIgBAFgDQAHgDAFgGIAdgdQAJgJACgLQAIgmAegmIAEgIQAGgHAGAEQAHADgCAJQgBAHgEAIIgIAOIgJARQgKAQgHAHQgMANAAAMQgBAMAFAHQAEAEAEAAQADABAFgDQAJgEAOgPQAUgVAFgIIAPgSQAEgDAAgGQACgjAUgkQACgDAMgMQAGgFAIAEQAHADAAAJQAAAIgHAOIgTAfQgIAMgHAJQgGAGABAMQABAMAHAGQAIAFAFgCQAGgBAIgEIASgKIAFgCQgCAFgGAFQgNALgNAEQgPAFgJgKQgKgNgBgGQgEACgEAFIgGAIQgaAggQAMQgJAHgJABQgHABgFgGQgLgLAAgIIgCgCIAAgBIgWAWIgRAQQgKAIgKAAIgFgBgAgWAJQAbgiAGgYQgXAYgKAigABjhVIgLAKQgLAOgIAhIAAADIACAAIAegsQAFgJgCgIIgFABg");
	this.shape_36.setTransform(-0.1,22.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#003EC9").s().p("AhuBnQgMgDgFgKQgGgMAFgLQAHgTARgTQACgEAFgCQAEgCAEAAQAFAAAFAEQAGAGgEAKIgHAZIgBAAQgBAJgHAAIgCAAQgHAAgDgFIgBgEIgCAEQgBADABAKIABAAQAJgBADgCQAFgCAFgGIAegeQAIgHABgKQAJgnAegnIAFgHQAEgHAHAAQAEAAADABQAGADABAHIAAAIQgBAIgJARIgNAWQgIAQgJAJQgLAMgBAJQAAAKAEAGQABABAAAAQABABAAAAQABAAAAAAQABABAAAAIAGgCQAIgEANgNIAAgBQARgRAIgMIANgPIADgCIACgHQADgnAUgiQACgEAJgJIAEgDQAEgEAGgBQAEABAFACQAKAEAAAMQAAAJgIAQQgHANgMASQgGALgJALQgFAEABAKQABAJAFAFQAEADADAAIACAAIANgFIAhgRIgEALQgBAGgHAEIgBABQgNAMgOAFIgLABQgLABgIgJIgBgCQgFgFgEgHIgHAKQgYAegUAPQgKAJgJAAIgCAAQgJAAgGgHQgJgIgCgHIgBABIghAfQgLAJgMgBgABahHQgIAJgFASIACgDIAPgYIADgHQgFADgCAEg");
	this.shape_37.setTransform(0.1,22.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#003EC9").s().p("AizCBQgDgCgBgDIAAgGIAJgXIANgrIAIgkQADgKADgVIACgIQADgEACAAQAFABACADQADAGgDAHQgFALgJAoIABADIAGgJQANgYAIgLQAPgSAUgWQAHgIAKgCQAQgEADAQQADAQgEASIgIAnIgGAuIAAAJQACAIAFABQAFACAGgGQALgKAIgLQAQgTAIgOQAVgkAOgdIAMgYIAdg4QACgFAGACQAEABgCAGIgEALQgLAUgCARIAoggQAKgIAKgGIAvgdQADgDAFACQADABgBAFIgCAOIgVBDIgOA5QgBADABADQABAGABACQACACAGABQAAAEgBABQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQgHABgEgJQgGgMAFgVQAMgyAHgSIAKgjIABgHIgBgBIgsAcQgKAGgaAWQgEADgEALQgCACAEAEIAOAZQAIAMgGAQQgEAOgIANQgHANgPgBQgHgBgEgEQgJgKAAgNQAAgMAGgvIgBgGIgHAMIgVApQgWApgHAKIgXAbQgHAKgIAFQgPAIgIgOQgEgIgBgJQAAgdAKgqQAGgagBgRQAAgIgEgEQgHABgJAJQgWAWgKAPQgXAfgOAfIgUAxIgGAKQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIgCgBgAA/gmQgGAYgCAoQAAAGACAEQADAHAHABQAGABAFgGQAJgMADgOQACgJgDgHQgDgNgJgMIgLgSg");
	this.shape_38.setTransform(-58,80.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#003EC9").s().p("Ai1CFQgFgCgCgFQgBgFACgFIAVhBIAOhDIAAgCIADgIQAEgGAFAAIABAAQAHABADAGQAEAIgEAIQgFAMgEATIAAgBIAQgXIAfgmIADgDQAHgJAMgDIAHgBQAQAAADARQADAQgEAUIgIAmIgGAsIAAACIAAAIQABAGAEAAQACAAACgDIATgVIACgDQARgVAFgIQAWgmANgbIAphQQADgHAGAAIAEABQAJAEgDAKIgFAMQgGAKgDAMIAAgBIAdgXIBDgrQADgDAEAAIAGABQAHADgCAJIgXBRIgKApIgEAQIAAAFIABAFIAFACIADABIAAADQABAGgCADQgCACgGAAQgKAAgGgKQgHgPAGgWIAAgCQANgzAGgPIAIgaIACgHIglAXQgJAFgVASIgFAFQgEADgCAIIgBAAIARAcQAIAOgGARQgFAQgHAMQgJAPgQAAIgDAAQgHgBgHgGQgKgMAAgOQAAgQAEgcIgEAIQgHAPgGAMIgGALQgPAcgJAMIgXAbQgHAKgKAGQgFADgHAAQgLAAgGgKQgGgKAAgKQAAgdAKgrQAGgZgBgRIgBgHQgFACgFAGQgWAWgKAOQgYAigMAcIgVAxIgEAIIgCACQgDAGgFAAIgEgCgAA8AaQAAAFACADQACAFAEAAQADAAADgDQAIgKADgOQACgIgCgFQgFgOgHgKIgGgJQgEAUgDAog");
	this.shape_39.setTransform(-58,80.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#003EC9").s().p("AjGCYQgEgEABgGIANgrQAEgKAKgrIAVhNQABgDADgCQAFgDAEAHIADAEQABADgDACIgCAFIgCADQgFAFgCAIIgEAOIgJAiIgBAGIACABIACgEQAOgZAqgtIAdgeQAEgEAEgBQAFgDAFACQAFACACAGQAEANgEARIgbBgQgBAHABAFQACAHAHgCQAFgBADgDIAWgWQAUgVAhgvIAPgVQgDgGAAgDQAAgCAFgFIATgSQAFgFAEgKQANgbAHgKIACgBQAEgFAEACQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQABADgCADIgOAWIgBAIIBSg2IAMgIIARgQQAFgFAFABQAEABABACQABACgDAEIgKAKQgFAIgFAKIgpBqQgEAKgCAYQgBAFABACQABABAGABQgBAKgIgFQgJgEABgNQADgbAGgOIAPgrIAVg4IgCgBIhAAtIgdATQgOAMgDAMQgBAHAFAEIADADQAIAEAKAMQAKAKgFAUQgDAOgOAMQgHAGgIgBQgIgCgGgIQgHgMACgMQADgaADgJIABgKIgEADIgcAnIgkAuIgUAXQgMAMgJACQgNADgFgLQgFgKACgMQADgNAHgWIALgjIAIgiQACgLgFgHIgGADQgXAVgMAQIgWAYQggAngPAnIgIAaIgDAGIgEANQAAADgCAEIgEAFQAAABAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAIgDgCgAAtAgQAAAGAFAGQAEAHAHgFQAPgIAEgUIgBgFQgDgLgOgKIgJgGQgJAZABAVg");
	this.shape_40.setTransform(-32.5,35.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#003EC9").s().p("AjKCcQgFgHACgIQACgKAHgVIAmiOQACgEAFgEIAFgBQAGAAAEAHIABABQAGAHgGAHIgBABIgBACIAAABIgCAEQgFAFgEAOIgGAXQAOgUAggiIAagcIAEgDQAFgFAEgBQADgCAFAAQAMAAAEAMQAFAOgFATIgSA+IgBACIgIAgQgBAFABAFQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAAAAAIAIgDIAWgVQAUgXAagnIATgZQgDgGABgEQABgDAGgGIADgCIAPgPIAJgPQALgYAJgNIACgCQAFgFAFAAQAAAAABAAQAAAAABAAQABAAAAABQABAAAAAAQAEACABAEQABAFgDAGIgJAQIAAgBIBRg1IAQgQQAGgGAGAAIADAAQAIAEABADQABAGgEAEIgJAKIgLARIgoBqQgEAKgCAXIgBADIAIABIAAAFQgCALgIAAIgHgCQgLgHABgOQADgbAGgRIAghVIABgBIhAArIgUAOQgNAKgCALQAAAEACACIADACQAIAEALANQALANgFAVQgEAQgPANQgHAGgIAAQgOAAgHgMQgIgOACgNIAAgGQACgQACgGIgUAcQgLAQgZAeQgLAPgKAJQgMAMgLADIgGABQgMAAgGgMQgFgLADgNQAEgUAHgWIAJgdIAAgBIAIggQACgHgCgEIgBABQgWAUgNAPIgWAZQgfAmgPAmIgIAaIgEAJIgCAIQAAAGgFAHIgCACQgCAEgEAAQgEAAgDgDgAAyAgQAAAEAEAGIACACIACgBQANgIAEgRIgBgCIAAgBQgCgJgNgKIgDgCQgHAUABASg");
	this.shape_41.setTransform(-32.5,35.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#003EC9").s().p("AkKC0QgFAAgFgFQgFgFgCgGQgEgOAGgLIALgVIAEgGQAFgHAIADQAKAEABAIIgBALIgBAIQAAAEABADQACAFgFABIgGABQgGAAAAgGIAGgXIAAgHIgIAHIgLAVQgCAGABAIQABAHAFADQAFACAGgDIALgJIAQgSIAQgUQAWggAHgMQADgFACgIIAEgOIAIgZQACgIAFAAQAGgCADAEQAEAEgCAGIgQAeQgDAIgDAKQgEAQAEASQACAOAMgJQAHgGAJgIIAQgTIAQgQQAMgLABgUQACgWADgQQADgMAOgaQAEgHAKACQAHABAGAHQAGAGABAHIgBAJQgEAMgKAMQgKAOgHALIgJALIgEAHQgEAKADAPQAEAXAXgLQAGgDAIgIIAogiIAagXIAVgSQAEgDABgHIAHglQACgJAMgYIAKgQQACgDAEgCQAGgEAFAEQAIAGABAHQACALgDAQQgDABgCgEQgFgLAAgIIAAgGQgNAHgLAYQgLAYABATQAHgDAMgKQALgKAHgEIgCAEIghAeQgGAGADAIIACAEQACAHAGACQAGACAHgDQANgFALgMQAQgOAOgSQAegmAFgJIAFgGQAGgJAEgMQAJgbAIgPQANgdAfgFQAGgCAOACQAHACAFAHQAFAHABAIQACATgLAYQgFAOgNARIgXAeQgJALgLAJQgJAHgKgCQgIgCgEgIQgFgKAAgLIAAgNIgEAEIgZAjIgtAxQgHAHgRAHQgRAGgKgQIgHgMQgEAAgEADIgGAHIgeAcIgUAUQgRAPgTANQgHAFgOAAQgLAAgHgMIgEgMIgCgHIgNANIgfAhQgFAGgIAFQgHAEgIgDQgHgDgCgIIgFgWIgEADIgKASIgMAQIghAmQgHAJgNAAIgDAAgAhMgJIgIAlIAAAFQAJgIAGgJIAQgXQAGgKgCgFQgBgFgIgGQgNAIgFAQgAC+hDQgBANADAJQADALAKgDIAHgEIATgVQATgVAOgZQANgWgBgVQAAgQgSgBQgOgBgTANQgJAGACAIQABACgDAKIgEAHQgEAJACAEQAFAOAKAFIAGAEQgKABgIgGIgMgNQgHAPgEAXg");
	this.shape_42.setTransform(-7.3,61);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#003EC9").s().p("AkJC5QgHAAgHgGQgGgGgCgIQgFgPAHgNIALgVIAEgHQAGgHAHAAIAGABQAOAFAAAMIAAAMIgBADQgBAFABAFIAAAAIAJgKIANgRIAEgFIAZgnIAHgSIAKghQADgKAIgBIADgBQAHAAAFAGQAEAHgDAHIgQAeIgFARQgEAOADASIACAEQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABgBIAQgOIAggjQAKgKACgSQABgTAEgTQADgPAOgYQAFgIAKAAIAEAAQAJACAHAHQAHAIABAIQABAGgCAFQgFAOgJAMQgIAJgJAPIgGAIIgEAEIgDAGQgDAKACAMQACALAIAAQAFAAAFgDIAOgJIBWhLQACgBABgGIACgHQADgVACgKQADgMAKgRIACgFIAKgRIAHgGQAFgDAEAAQAEAAAFADQAJAHABAJQADANgDAQIgBADIgDABIgDAAQgGAAgCgGQgFgKAAgHQgIAIgIAQQgGAQgCAPIAKgIQAOgLAGgDIAPgIIgJAPIAAABIgDAEIghAeQgEACACAGIACAFQADAGAFAAIAGgBQALgEAMgMQAQgOAOgSIAEgFQAWgbAJgPIADgFIABgBQAHgIADgMQAHgYAKgSQAPggAggFIAIgBIAOACQAJACAGAHQAGAIABALQACAVgLAYQgHARgLAOIgFAHIgTAYQgIAKgMALQgJAGgIAAQgPAAgHgNQgFgLAAgLIgNASIgCACIgKANIgWAaIgTASQgIAIgSAHQgGADgFAAQgOAAgIgOIgFgJIAAgBIgFAFIg2A0QgWATgOAJQgHAGgQAAQgOAAgJgOIgEgNIgmApQgIAHgGAEQgFADgGAAQgRAAgEgQIgCgLIgPAWIgFAGIgXAdIgJAKQgJAKgRAAgAkKCTQgCAGABAGQAAAGAGAAQAAAAABAAQAAAAABgBQAAAAABAAQABAAAAgBIAIgFIgCAAIgBAAQgFAAgDgDQgDgDABgFIACgLIgGALgAhHgHQgDALgDAPIAAAAIAUgcQAFgIgBgDQAAgDgFgEQgJAHgEANgADEhCQgCAMADAIQABAEAEAAIACAAIAFgCIATgVQARgSAPgbQANgWgBgTQgBgMgMAAIgCgBQgNAAgPAMQgHAEACAFQABAEgEAIIAAACIgDAGIgBACQgEAGACADQAEAMAJAEIAEADIACACIAJAHIgQACQgIAAgGgEIgKgKQgFANgCARg");
	this.shape_43.setTransform(-7.4,61);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#003EC9").s().p("AkiDQQgHgBgGgFQgHgFgBgHQgFgdAEgXQAFgfALgRQAKgSALgIQAHgFAIABQAIACAEAHIABAGIgDARQAAAEgFAAQgEgBAAgCQgBgCAAgEIACgRIgKADQgMAHgIAPQgKASgFAhQgCAXAEAPQABAHAEADQAGAFAGgCQAKgDAMgLIAUgVQALgMAWghQAMgQAJgSIAHgQIALgcIACgKQABgHAIABQAEABACACQACADgBADQgEAPgEAGQgOAVgCAVIgDAUQABAEACACQADABAEgCQAHgFAIgJIAyhBIAEgKIAJgeIAIgSIADAAQAIgBACADQADADgCAIQgCAHgFALIgKARQgEAJgBANQgBAKAGAPIADADQAGgBAFgEIAJgJQAQgPAKgOIAPgSIAlgvQALgMADgVQAAgKAKgKQAEgEAHAFIgDAEQgEAEgBAIQAAAGgDAIIgEANIgJAfIABAAIAVgpQAWglALgNQAGgHAJgIQAEgDAIgCQADgBADABQAEACABADQAEAKgBAGQgDAfgDAIIAAAGIAEgGIAYglIAUgZQAIgKAIgEIAFgEQADgBADABQADACAAADQACALgBAIIgKA9IALgKQAGgFADgFQAJgOAMgNIAHgKIAGgMIAFgIQADgGAKgPQAJgOADgIIARgeIAAgBQAFgHAEACQAAABABAAQAAABAAAAQABABAAABQAAAAAAABIgCAEIgLAWIgQAsIgEAUQgDAPgCARQAAADACAHQACAHAFADQAFACAGgCQARgHAHgJQAEgGgDgEIgFgIQgFgIgKgGIgFgDQgFgCADgEQABgEAEABIALACIAPATIAFAGQADAEgBAEQgCAMgHAHQgMAMgPAEQgLADgIgGQgIgGgBgMIAAgUIABgEQADgGABgLIACgSIgBgGIgEADIg3BTQgEAIgGAEQgIAEgEgGQgBgCAAgDQACgZAEgPIACgNIACgOQACgIgEgFIgEACIgjAsIgNAWQgDAEgDAJIgGAOIgMAbIgEAIIgIANQgBACgEgDQgFgDADgGQAEgIADgNIAFgWQAHgYADgQIADgPQABgJgEgHQgHAAgGAGQgXAWgMAYIgPAbIgcBCIgEAKQgCAGgEADIgHgEQgBgDACgFIANg2IAAgFIgBgBIhTBkIgIAFQgLAEgGgKIgHgPIgDgNIgtA5QgHAJgHAGQgHAHgLgEQgIgDgBgMIAAgMIgEACQgRAdgKAOIgJAKIgLANIgZAaQgLAJgLAAIgDAAg");
	this.shape_44.setTransform(54,32.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#003EC9").s().p("AkiDVQgKgBgHgGQgHgHgCgIQgGgdAFgZQAGghAKgRQANgUAKgHQAGgFAJAAQANAAAGALQACAEAAAFIgDASQgBAIgHAAIgDgBQgLgCACgMIACgIIAAgCIgCABQgLAGgHAOQgMAUgDAdQgDAVAEAQQACAFACACQADACADAAIACAAQAKgDAKgKIAIgJIALgMQALgMARgZIAFgHIAVgiIAFgLIAMggIACgJQACgKAKAAIADAAQAGABADAFQADAEgCAFIAAADQgFAOgDAFQgMAUgDAUIgCAQIgBABIAAACIABADIABgBQAIgGAHgIIAZgfIAYghQACgCAAgEIABgDIASgyIAGgCIAEAAQAIAAADAFQAEAEgDAKQgDANgKARIgEAHQgDAGgCAOQAAAIAGAOQAEgBAHgHIADgDQAOgNAMgQIAJgMIAigrIAJgLQALgKACgUQABgNAKgKQAEgDAFAAQAFABAEADIAEADIgDADIgBACIgCADQgEAEAAAFQAAAEgCAJIABgDQASggANgOIAQgQQAEgEAKgDIADAAQAKAAADAJQAFAJgBAJIgCAWIAPgXIAVgaQAHgKAJgFIABgBIAFgDIAFAAQAKgBABAKQACAPgBAFIgJAxIAKgLQAIgMANgPQAEgEAFgKIAJgQQADgHAIgLQAKgQAEgJIAEgIIACgDIALgTIAAAAQAFgIAGAAIAFABQAHAFgFAKIgMAWIgPArQgDALgCAIIgEAgIABAJQADAGAGAAIAEAAQAPgGAGgIQABgBAAAAQAAgBABgBQAAAAgBgBQAAAAAAgBIgGgIQgDgGgKgGIgFgDQgHgGADgHQAEgFAFAAIACAAIAMACIARAVQAAABAAAAQABABAAAAQAAABABAAQAAAAABABQAGAIgBAFQgDAOgIAJQgMAMgRAFIgIABQgLAAgHgIQgHgHgBgMIAAgVIABgFQADgFABgOIAAgGIgyBNQgFAHgFAEQgFACgEAAQgHAAgDgGQgCgDAAgFQACgZAEgQIAFgeIgIAJIgZAfQgEAHgDAFIgFAKQgDAEgDAJIgHAOIgJATIgDAHIgBADIgCAGQgEAIgFAFQgBADgEAAQgFAAgCgCQgIgGAFgJQAEgIAEgTIAEgQIAKgoIAAgCQADgPgCgHQgDABgEADQgVAVgMAYIgTAiIgZA6IgBAFQgFANgEADIgDADIgDgCQgHgDgBgDQgCgEACgHIACgMIAAgBIAIgfIhJBYQgEAEgGACQgEABgEAAQgKAAgFgJQgEgFgDgJIAAgBIgCgFIgmAyQgFAHgKAIQgGAGgIAAQgEAAgEgCQgLgDgCgPQgOAYgIALIgbAeIgTATQgMALgNAAg");
	this.shape_45.setTransform(54,32.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ghghj, new cjs.Rectangle(-76.9,-90.7,162.9,184.6), null);


(lib.ghggg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D5D5D").s().p("AAfArIAAhEIgfAsIAAAAIgfgsIAABEIgJAAIAAhVIAKAAIAeAuIAfguIAKAAIAABVg");
	this.shape.setTransform(118,-130);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5D5D5D").s().p("AAhArIAAhVIAJAAIAABVgAgpArIAAhVIAKAAIAAAiIAVAAQAOAAAJAFQAJAHAAAMQAAANgJAGQgIAIgOAAgAgfAiIAWAAQAKAAAGgFQAFgFAAgIQAAgIgGgFQgGgDgJAAIgWAAg");
	this.shape_1.setTransform(107.2,-130);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5D5D5D").s().p("AAZArIAAgnIgxAAIAAAnIgJAAIAAhVIAJAAIAAAmIAxAAIAAgmIAJAAIAABVg");
	this.shape_2.setTransform(97.2,-130);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5D5D5D").s().p("AAYArIAAgnIgvAAIAAAnIgKAAIAAhVIAKAAIAAAmIAvAAIAAgmIAKAAIAABVg");
	this.shape_3.setTransform(88,-130);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5D5D5D").s().p("AgeAfQgMgMAAgTQAAgRAMgNQANgNARAAQATAAAMANQAMANAAARQAAATgMAMQgNANgSAAQgSAAgMgNgAgXgYQgJAKAAAOQAAAPAJAKQAKAKANAAQAPAAAJgKQAJgKAAgPQAAgOgJgKQgKgKgOAAQgOAAgJAKg");
	this.shape_4.setTransform(78.2,-130);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5D5D5D").s().p("AAZArIAAhGIgyBGIgJAAIAAhVIAKAAIAABGIAyhGIAJAAIAABVg");
	this.shape_5.setTransform(68.4,-130);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5D5D5D").s().p("AAeA0IAAgTIhEAAIAAhUIAJAAIAABLIAwAAIAAhLIAJAAIAABLIALAAIgBAcg");
	this.shape_6.setTransform(59.6,-129);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5D5D5D").s().p("AAhArIgKgXIgtAAIgLAXIgJAAIAmhVIAIAAIAnBVgAgTAMIAmAAIgTgrg");
	this.shape_7.setTransform(49.7,-130);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5D5D5D").s().p("AghArIAAhVIAjAAQAPABAHAHQAGAGAAAIQAAANgOAHQASAEAAAQQAAAKgIAHQgIAFgPABgAgYAiIAcAAQAJAAAGgEQAGgFAAgGQAAgIgGgDQgGgEgLAAIgaAAgAgYgEIAYAAQAIAAAHgDQAFgFAAgHQAAgGgFgEQgFgEgJAAIgZAAg");
	this.shape_8.setTransform(41,-130);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5D5D5D").s().p("AgeAfQgMgMAAgTQAAgRAMgNQANgNARAAQATAAAMANQAMAOAAAQQAAASgMANQgMANgTAAQgRAAgNgNgAgXgYQgJAKAAAOQAAAOAJALQAKAKANAAQAOAAAKgKQAJgLAAgOQAAgNgJgLQgKgKgOAAQgNAAgKAKg");
	this.shape_9.setTransform(31.2,-130);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5D5D5D").s().p("AAZArIAAgnIgwAAIAAAnIgKAAIAAhVIAKAAIAAAmIAwAAIAAgmIAJAAIAABVg");
	this.shape_10.setTransform(21.4,-130);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5D5D5D").s().p("AAYArIAAgnIgvAAIAAAnIgKAAIAAhVIAKAAIAAAmIAvAAIAAgmIAKAAIAABVg");
	this.shape_11.setTransform(12.2,-130);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5D5D5D").s().p("AAZArIAAhGIgxBGIgKAAIAAhVIAKAAIAABGIAyhGIAJAAIAABVg");
	this.shape_12.setTransform(2.9,-130);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5D5D5D").s().p("AAZArIAAgnIgxAAIAAAnIgJAAIAAhVIAJAAIAAAmIAxAAIAAgmIAJAAIAABVg");
	this.shape_13.setTransform(-10,-130);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5D5D5D").s().p("AgeA0IAAhUIA8AAIAAAJIgyAAIAAAcIAtAAIAAAJIgtAAIAAAdIAzAAIAAAJgAAFgnIAAgMIALAAIAAAMgAgPgnIAAgMIALAAIAAAMg");
	this.shape_14.setTransform(-18.4,-130.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5D5D5D").s().p("AAjA0IAAgTIhEAAIgCATIgIAAIAAgcIAIAAQAOgUAAgoIAAgPIA2AAIAABLIALAAIgBAcgAgMgfQAAARgDAOQgDAPgGAJIAwAAIAAhCIgkAAg");
	this.shape_15.setTransform(-27.3,-129);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#5D5D5D").s().p("AAzArIgdgqIgRATIAAAXIgJAAIAAgXIgRgTIgdAqIgMAAIAjgwIghglIAMAAIAsAyIAAgyIAJAAIAAAyIAsgyIAMAAIghAlIAjAwg");
	this.shape_16.setTransform(-38.5,-130);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#5D5D5D").s().p("AgeAfQgMgMAAgTQAAgRAMgNQANgNARAAQATAAAMANQAMANAAARQAAATgMAMQgNANgSAAQgSAAgMgNgAgXgYQgJAKAAAOQAAAPAJAKQAKAKANAAQAPAAAJgKQAJgKAAgPQAAgOgJgKQgJgKgPAAQgOAAgJAKg");
	this.shape_17.setTransform(-49.9,-130);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#5D5D5D").s().p("AgfArIAAhVIAfAAQAPABAIAHQAJAHAAAMQAAAOgKAGQgJAHgOAAIgUAAIAAAfgAgVAEIAVAAQAJAAAHgEQAGgGAAgIQAAgIgGgGQgGgEgKgBIgVAAg");
	this.shape_18.setTransform(-58.7,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ghggg, new cjs.Rectangle(-61.9,-136.1,184,12.3), null);


(lib.gdfg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApOInIAAxNITrAAIAARNg");
	mask.setTransform(66.9,53.1);

	// Слой 1
	this.instance = new lib.pic3();
	this.instance.parent = this;
	this.instance.setTransform(-17,0,0.7,0.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.gdfg, new cjs.Rectangle(7.9,0,126.1,107.1), null);


(lib.fvgdfg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-0.1,25.1,-0.1,-34.7).s().p("An4FeIAAq7IPxAAIAAK7g");
	this.shape.setTransform(49.5,35.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#C8D5E8").ss(2,1,1,3,true).p("AnzBkIPnAAAnzDIIPnAAAnzEsIPnAAAnzAAIPnAAAnzhjIPnAAAnzjHIPnAAAnzkrIPnAA");
	this.shape_1.setTransform(49.7,30);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C8D5E8").ss(2,1,1,3,true).p("AHCFhIAArBAFeFhIAArBAgxFhIAArBAAyFhIAArBACWFhIAArBAD6FhIAArBAj5FhIAArBAldFhIAArBAnBFhIAArBAiVFhIAArB");
	this.shape_2.setTransform(45,35.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fvgdfg, new cjs.Rectangle(-1.3,-1,102,72.6), null);


(lib.dfs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAPAVIAAghIgNAhIgEAAIgMgiIAAAiIgHAAIAAgpIALAAIAKAgIAMggIAKAAIAAApg");
	this.shape.setTransform(43.2,20.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAQAVIAAgpIAHAAIAAApgAgWAVIAAgpIAHAAIAAAQIAJAAQAHAAAFAEQAFACAAAGQAAAFgEAEQgEAEgIAAgAgPAPIAHAAQAHAAACgCQACgBAAgEQAAgCgCgDQgBgCgHAAIgIAAg");
	this.shape_1.setTransform(37.5,20.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAKAVIAAgTIgTAAIAAATIgHAAIAAgpIAHAAIAAASIATAAIAAgSIAHAAIAAApg");
	this.shape_2.setTransform(32.5,20.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAKAVIAAgTIgTAAIAAATIgHAAIAAgpIAHAAIAAASIATAAIAAgSIAHAAIAAApg");
	this.shape_3.setTransform(28.1,20.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgNAQQgGgFABgLQgBgLAHgFQAGgFAGAAQAIAAAGAGQAFAGABAJQgBAHgCAFQgCAFgFACQgEADgGAAQgHAAgGgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQADgEAAgIQAAgHgDgEQgDgEgGAAQgEAAgDAEg");
	this.shape_4.setTransform(23.6,20.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAKAVIAAgfIgSAfIgIAAIAAgpIAHAAIAAAfIATgfIAHAAIAAApg");
	this.shape_5.setTransform(19.2,20.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AANAbIAAgMIgfAAIAAgpIAHAAIAAAjIATAAIAAgjIAHAAIAAAjIAEAAIAAASg");
	this.shape_6.setTransform(14.8,21.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgOASQgEgDAAgFQAAgDACgDQAAgCADgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgCACQgDACgBAEIgHgBQABgEACgDQACgDAFgBQAEgCAEAAQAFAAAEACQADABABACIADAFIAAAGIAAAIIABANIABAFIgHAAQgCgCABgDIgIAEIgHACQgHAAgDgEgAAAADIgHABIgCACIgCAEQAAAAABABQAAABAAAAQAAABABAAQAAABABAAQACACAEAAQADAAADgCQADgBACgDQABgDAAgEIAAgDIgKADg");
	this.shape_7.setTransform(10.1,20.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgQAVIAAgpIAQAAIAIABQADABACADQACADAAADIgBAFIgEAEQADAAACADQACACAAAEQAAAGgFADQgDADgIAAgAgJAPIAJAAIAIgBQABgCAAgDIgBgEQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAIgFAAIgJAAgAgJgCIAIAAIAEgBIAEgCQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgDgCgCIgHgBIgIAAg");
	this.shape_8.setTransform(5.9,20.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgNAQQgFgFAAgLQAAgLAGgFQAGgFAGAAQAJAAAFAGQAGAGgBAJQABAHgDAFQgDAFgEACQgFADgFAAQgIAAgFgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAFAAAEgEQADgEAAgIQAAgHgDgEQgEgEgFAAQgEAAgEAEg");
	this.shape_9.setTransform(1.4,20.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAKAVIAAgTIgTAAIAAATIgHAAIAAgpIAHAAIAAASIATAAIAAgSIAHAAIAAApg");
	this.shape_10.setTransform(-3,20.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAKAVIAAgTIgTAAIAAATIgHAAIAAgpIAHAAIAAASIATAAIAAgSIAHAAIAAApg");
	this.shape_11.setTransform(-7.4,20.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAKAVIAAgfIgTAfIgHAAIAAgpIAHAAIAAAfIASgfIAIAAIAAApg");
	this.shape_12.setTransform(-11.8,20.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAKAVIAAgTIgTAAIAAATIgHAAIAAgpIAHAAIAAASIATAAIAAgSIAHAAIAAApg");
	this.shape_13.setTransform(-18.4,20.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgMAQQgGgGAAgKQAAgJAGgGQAEgGAIAAQAJAAAFAGQAFAGAAAJIAAACIgeAAQAAAHAEADQAEAEADAAQAEAAAEgCQACgCABgFIAIABQgCAHgFADQgEAEgIAAQgIAAgEgGgAgHgMQgDAEAAAFIAWAAQAAgFgDgDQgEgEgFAAQgEAAgDADg");
	this.shape_14.setTransform(-22.9,20.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAQAbIAAgMIgfAAIAAAMIgGAAIAAgSIADAAQAIgJAAgaIAbAAIAAAjIAFAAIAAASgAgLAJIAWAAIAAgdIgPAAQgBAUgGAJg");
	this.shape_15.setTransform(-27.5,21.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AATAVIgHgNIgFgFIgDgBIAAATIgHAAIAAgTIgEABIgEAFIgIANIgHAAIAHgNQAFgHAEgBQgDgBgBgCIgEgIIgCgCIgCgBIgCAAIAAgGIABAAIAFABIADACIADAGQADAHACABQAAAAAAAAQABABAAAAQABAAABAAQAAAAABAAIAAgSIAHAAIAAASQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBADgHIAEgHQACgCAEAAIADAAIAAAGIgCAAIgDABIgDAFIgDAGIgEACQAEABAFAHIAIANg");
	this.shape_16.setTransform(-32.4,20.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgNAQQgGgFAAgLQAAgLAHgFQAFgFAHAAQAJAAAFAGQAGAGAAAJQAAAHgDAFQgDAFgEACQgFADgFAAQgIAAgFgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAFAAAEgEQADgEABgIQgBgHgDgEQgEgEgFAAQgEAAgDAEg");
	this.shape_17.setTransform(-37.3,20.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAJABQADABADACQAEACABADQACAEAAAEQAAAHgFAEQgEAFgMAAIgOAAIAAAYgAgNAAIAOAAQAHAAADgDQADgDAAgFQAAgDgCgDQgBgCgDgBIgHgBIgOAAg");
	this.shape_18.setTransform(-42.1,19.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAAAEIgEAIIgFgDIAGgIIgJgBIACgGIAJAFIgBgKIAFAAIgBAKIAJgFIACAGIgKABIAHAIIgFADIgFgIg");
	this.shape_19.setTransform(-46.4,18.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dfs, new cjs.Rectangle(-50,13.6,100.1,12.9), null);


(lib.dfgdfggg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMAZQgFgFgBgHIAHgBQABAGADADQADACAEAAQAEAAAEgDQADgDAAgGQAAgEgDgDQgDgEgFAAIgEABIABgFIABAAQADAAAEgCQAEgDAAgFQAAgDgDgDQgDgCgDAAQgEAAgDACQgCADgBAFIgHgBQABgHAFgEQAEgEAHAAQAEAAAEACQAEACACADQACAEAAAEQAAADgCADQgCADgEACQAFABADADQADAEAAAFQAAAIgGAFQgFAFgIAAQgHAAgFgEg");
	this.shape.setTransform(147.8,-96.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMAYQgGgEAAgHIAHgBQABAGADACQADADAEAAQAEAAAEgEQAEgEAAgGQAAgGgEgDQgEgDgEAAQgEAAgCACQgDABgCACIgGgBIAGgdIAbAAIAAAHIgWAAIgDAPQAFgDAFAAQAHAAAGAFQAFAEAAAIQAAAIgEAGQgGAHgJAAQgIAAgEgFg");
	this.shape_1.setTransform(143.4,-96.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_2.setTransform(138.7,-96.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMAXQgGgHABgQQAAgJABgGQACgHAFgDQAEgDAFAAQAFAAADACQADABADAEIAEAIIABANQAAAKgCAGQgCAGgFAEQgDADgHAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQADgFAAgOQAAgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_3.setTransform(134.4,-96.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJAcQgBgHADgJQADgKAEgIQAEgIAFgHIgaAAIAAgGIAjAAIAAAFQgFAGgFAKQgGAIgCALQgCAHAAAIg");
	this.shape_4.setTransform(130,-96.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMAXQgFgHAAgQQAAgJABgGQACgHAFgDQAEgDAFAAQAFAAADACQAEABACAEIAEAIIAAANQABAKgCAGQgDAGgEAEQgDADgHAAQgHAAgFgGgAgHgSQgEAFABANQgBAOAEAFQADAEAEAAQAFAAADgEQAEgFgBgOQABgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_5.setTransform(125.5,-96.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNAXQgFgHAAgPQAAgPAGgIQAFgGAJAAQAHAAAEAEQAEADABAHIgHABQgBgFgCgBQgDgDgEAAIgFABQgDADgCAEQgCAFAAAJQADgEADgCIAHgCQAHAAAFAFQAFAEAAAJQAAAFgDAFQgCAEgEADQgEACgFAAQgIAAgGgGgAgGABQgEADAAAGIABAHQACADADACQADABACAAQAEAAADgDQAEgEAAgGQAAgGgEgDQgDgDgEAAQgFAAgCADg");
	this.shape_6.setTransform(121.1,-96.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMAaQgEgEgBgHIAHgBQABAFACACQADACADAAQADAAACgBIAEgEIADgHIABgIIAAgCQgCAEgEACQgEACgDAAQgHAAgFgFQgFgEAAgJQAAgJAFgFQAFgFAIAAQAFAAAEADQAFADACAFQADAGAAAKQAAAKgDAHQgCAGgFAEQgEADgGAAQgGAAgFgDgAgHgTQgEAEAAAGQAAAGAEADQADADAEAAQAFAAADgDQADgDAAgGQAAgGgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_7.setTransform(116.6,-96.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgJAcQAAgHACgJQADgKAEgIQAEgIAFgHIgbAAIAAgGIAkAAIAAAFQgFAGgGAKQgFAIgCALQgCAHAAAIg");
	this.shape_8.setTransform(112.2,-96.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgJAcQAAgHACgJQADgKAEgIQAEgIAGgHIgbAAIAAgGIAkAAIAAAFQgGAGgFAKQgGAIgCALQgCAHgBAIg");
	this.shape_9.setTransform(107.8,-96.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_10.setTransform(103.1,-96.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgMAXQgFgHgBgQQAAgJACgGQADgHADgDQAEgDAGAAQAEAAAEACQADABADAEIADAIIABANQAAAKgCAGQgBAGgFAEQgEADgGAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQAEgFAAgOQAAgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_11.setTransform(98.8,-96.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_12.setTransform(94.1,-96.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_13.setTransform(87.1,-96.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAIABQAEABAEACQADACABADQACAEAAAEQAAAHgFAEQgFAFgMAAIgNAAIAAAYgAgNAAIANAAQAIAAADgDQADgDAAgFQAAgDgBgDQgDgCgDgBIgHgBIgNAAg");
	this.shape_14.setTransform(81.6,-96.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgSAdIAAg5IAlAAIAAAHIgdAAIAAAyg");
	this.shape_15.setTransform(77,-96.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_16.setTransform(71.4,-96.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgNAYQgFgEAAgHIAHgBQABAGADACQADADAEAAQAFAAADgEQAEgEgBgGQABgGgEgDQgDgDgFAAQgDAAgDACQgDABgBACIgHgBIAGgdIAbAAIAAAHIgWAAIgDAPQAGgDAEAAQAHAAAFAFQAGAEAAAIQAAAIgEAGQgGAHgJAAQgHAAgGgFg");
	this.shape_17.setTransform(63.9,-96.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_18.setTransform(59.1,-96.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgMAXQgGgHAAgQQABgJACgGQACgHADgDQAFgDAFAAQAEAAAEACQADABADAEIADAIIACANQgBAKgCAGQgCAGgDAEQgFADgGAAQgIAAgEgGgAgHgSQgDAFgBANQABAOADAFQADAEAEAAQAFAAADgEQADgFABgOQgBgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_19.setTransform(54.9,-96.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgSAdIAAgFIAFgIIAKgIQAIgIADgEQADgEABgEQAAgEgEgDQgDgDgEAAQgFAAgCADQgEADAAAGIgGgBQAAgIAFgEQAEgFAIAAQAIAAAFAFQAFAEAAAHIgCAHQgBADgDADQgDAEgIAGIgHAHIgEAEIAcAAIAAAHg");
	this.shape_20.setTransform(50.4,-96.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_21.setTransform(45.7,-96.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgNAYQgEgEgBgHIAHgBQABAGADACQADADAEAAQAFAAADgEQADgEAAgGQAAgGgDgDQgDgDgFAAQgDAAgDACQgDABgCACIgGgBIAFgdIAcAAIAAAHIgWAAIgDAPQAGgDAEAAQAIAAAEAFQAGAEAAAIQAAAIgFAGQgFAHgJAAQgHAAgGgFg");
	this.shape_22.setTransform(41.6,-96.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_23.setTransform(37,-96.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgMAXQgFgHgBgQQAAgJACgGQADgHADgDQAEgDAGAAQAEAAAEACQADABADAEIADAIIABANQAAAKgCAGQgBAGgFAEQgEADgGAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQAEgFAAgOQAAgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_24.setTransform(32.7,-96.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgKAcQABgHACgJQACgKAFgIQAEgIAFgHIgbAAIAAgGIAkAAIAAAFQgFAGgGAKQgFAIgCALQgCAHgBAIg");
	this.shape_25.setTransform(28.3,-96.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgJAcQgBgHADgJQADgKAEgIQAEgIAGgHIgbAAIAAgGIAjAAIAAAFQgFAGgFAKQgGAIgCALQgCAHAAAIg");
	this.shape_26.setTransform(23.8,-96.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_27.setTransform(16.5,-96.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_28.setTransform(10.7,-96.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAQAdIAAgsIgeAsIgIAAIAAg5IAHAAIAAAtIAegtIAHAAIAAA5g");
	this.shape_29.setTransform(4.9,-96.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_30.setTransform(259.8,-101.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgNAYQgFgFAAgHQAAgGADgEQADgCAFgCQgEgBgDgDQgBgDgBgEQABgHAEgEQAEgEAHAAQAHAAAFAEQAFAEAAAHQAAAEgDADQgBADgFABQAGACACADQADAEAAAFQAAAHgFAFQgGAFgIAAQgHAAgGgFgAgHAEQgDADAAAFIABAGIAEAEIAFABQAFAAAEgDQADgDAAgFQAAgFgDgDQgEgEgFAAQgEAAgDAEgAgGgUQgCADAAADQAAAEACADQADADADAAQAEAAADgDQACgDABgDQgBgEgCgDQgDgCgEAAQgDAAgDACg");
	this.shape_31.setTransform(256.4,-104.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_32.setTransform(250.9,-101.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAQAbIAAgMIgfAAIAAAMIgGAAIAAgSIADAAQAIgJAAgaIAbAAIAAAjIAFAAIAAASgAgLAJIAVAAIAAgdIgOAAQgBAUgGAJg");
	this.shape_33.setTransform(247.3,-102.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgDAHQAAgBABAAQAAAAABgBQAAAAABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_34.setTransform(241.8,-101.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAKAcIAAgeIgTAeIgHAAIAAgoIAHAAIAAAfIATgfIAHAAIAAAogAgGgUQgEgDAAgEIAFAAIACADIADABIAFgBIACgDIAFAAQAAAEgEADQgDACgEABQgFgBgCgCg");
	this.shape_35.setTransform(238.5,-104.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgKAEIAAgHIAVAAIAAAHg");
	this.shape_36.setTransform(234.9,-103.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgSAdIAAgFIAFgIIAJgIQAJgIADgEQADgEABgEQAAgEgEgDQgDgDgEAAQgFAAgCADQgEADAAAGIgGgBQAAgIAFgEQAEgFAIAAQAIAAAFAFQAFAEAAAHIgCAHQgBADgDADQgDAEgIAGIgHAHIgEAEIAcAAIAAAHg");
	this.shape_37.setTransform(231.3,-104.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAKAcIAAgeIgSAeIgIAAIAAgoIAHAAIAAAfIATgfIAHAAIAAAogAgGgUQgDgDgBgEIAEAAIADADIADABIAFgBIACgDIAFAAQAAAEgDADQgEACgEABQgFgBgCgCg");
	this.shape_38.setTransform(224.8,-104.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAKAVIAAgfIgTAfIgHAAIAAgpIAHAAIAAAfIASgfIAIAAIAAApg");
	this.shape_39.setTransform(220.3,-103.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAIAVIgIgNIgDgFIgEgBIAAATIgHAAIAAgpIAHAAIAAASQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQABgBACgHIADgGIADgCIAFgBIACAAIAAAGIgCAAIgEABIgCAFIgDAGIgDACQADABAFAHIAHANg");
	this.shape_40.setTransform(216.6,-103.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_41.setTransform(212.7,-103.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAKAVIAAgTIgTAAIAAATIgHAAIAAgpIAHAAIAAASIATAAIAAgSIAHAAIAAApg");
	this.shape_42.setTransform(208.4,-103.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAKAVIAAgfIgSAfIgIAAIAAgpIAHAAIAAAfIATgfIAHAAIAAApg");
	this.shape_43.setTransform(204,-103.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAXAbIAAgMIgzAAIAAgpIAHAAIAAAjIAQAAIAAgjIAGAAIAAAjIAQAAIAAgjIAHAAIAAAjIAFAAIAAASg");
	this.shape_44.setTransform(198.6,-102.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgNAQQgFgFgBgLQABgLAGgFQAGgFAGAAQAIAAAGAGQAGAGgBAJQAAAHgCAFQgDAFgEACQgEADgGAAQgHAAgGgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAGAAADgEQAEgEAAgIQAAgHgEgEQgDgEgGAAQgEAAgEAEg");
	this.shape_45.setTransform(192.9,-103.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAIABQAFABACACQADACACADQACAEAAAEQAAAHgFAEQgFAFgLAAIgOAAIAAAYgAgNAAIAOAAQAHAAADgDQADgDAAgFQAAgDgBgDQgCgCgEgBIgGgBIgOAAg");
	this.shape_46.setTransform(188.1,-104.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AARAbIAAgMIggAAIAAAMIgGAAIAAgSIAEAAQAHgJAAgaIAcAAIAAAjIAEAAIAAASgAgLAJIAWAAIAAgdIgQAAQAAAUgGAJg");
	this.shape_47.setTransform(180.7,-102.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgPAJIAHgBQAAAEADACQADACADAAQADAAACgCQADgCAAgDQAAgBAAAAQAAgBAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAIgFAAIgCAAIAAgFIAFAAIADgCQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAQgCgCgDAAQgEAAgDAHIgHgBQAEgMALAAQAGAAAEAEQAEAEgBAFQAAAFgEADQACAAACADQACADAAADQAAAGgEADQgFAEgGAAQgOAAgCgNg");
	this.shape_48.setTransform(176.6,-103.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgNAQQgFgGAAgKQAAgJAFgGQAGgGAIAAQAHAAAGAGQAFAGAAAJIAAACIgeAAQABAHADADQAEAEAEAAQADAAAEgCQACgCABgFIAIABQgCAHgFADQgEAEgHAAQgIAAgGgGgAgGgMQgEAEgBAFIAXAAQAAgFgDgDQgEgEgEAAQgFAAgCADg");
	this.shape_49.setTransform(172.6,-103.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgNAQQgFgFgBgLQABgLAGgFQAGgFAGAAQAIAAAGAGQAGAGgBAJQAAAHgCAFQgDAFgEACQgEADgGAAQgHAAgGgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAGAAADgEQAEgEAAgIQAAgHgEgEQgDgEgGAAQgEAAgEAEg");
	this.shape_50.setTransform(168.1,-103.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgRAdIAAg4IAGAAIAAAFQADgDADgCQACgBADAAQAFAAAFADQAEACABAFQADAFAAAGQAAAHgDAEQgCAFgEACQgEADgFAAQgDAAgCgBQgDgCgCgCIAAAUgAgHgSQgEAEAAAIQAAAHAEAEQADADAEAAQAEAAADgEQAEgEAAgHQAAgIgEgEQgDgEgEAAQgEAAgDAFg");
	this.shape_51.setTransform(163.8,-102.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAOAdIAAgyIgcAAIAAAyIgIAAIAAg5IAsAAIAAA5g");
	this.shape_52.setTransform(158.6,-104.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgDAHQAAgBABAAQAAAAABgBQAAAAABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_53.setTransform(152.4,-101.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgOASQgEgDAAgFQAAgDACgDQAAgCADgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgCACQgDACgBAEIgHgBIADgHQADgDAEgBQAEgCAEAAQAFAAAEACQADABABACIACAFIABAGIAAAIIABANIABAFIgHAAQgCgCABgDIgIAEIgHACQgHAAgDgEgAgBADIgGABIgDACIgBAEQAAAAABABQAAABAAAAQAAABABAAQAAABABAAQABACAFAAQADAAADgCQADgBACgDQABgDAAgEIAAgDIgLADg");
	this.shape_54.setTransform(149.1,-103.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgQAVIAAgpIAQAAIAIABQADABACADQACADAAADIgBAFIgEAEQADAAACADQACACAAAEQAAAGgFADQgDADgIAAgAgJAPIAJAAIAIgBQACgCAAgDIgBgEQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAIgFAAIgJAAgAgJgCIAIAAIAEgBIAEgCQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgDgCgCIgHgBIgIAAg");
	this.shape_55.setTransform(144.9,-103.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAIAVIgIgNIgDgFIgEgBIAAATIgHAAIAAgpIAHAAIAAASQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQABgBACgHIADgGIADgCIAFgBIACAAIAAAGIgCAAIgEABIgCAFIgDAGIgDACQADABAFAHIAHANg");
	this.shape_56.setTransform(141.1,-103.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_57.setTransform(137.2,-103.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgNAQQgGgFAAgLQAAgLAHgFQAGgFAGAAQAIAAAGAGQAFAGABAJQgBAHgCAFQgCAFgFACQgEADgGAAQgIAAgFgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQADgEAAgIQAAgHgDgEQgDgEgGAAQgEAAgDAEg");
	this.shape_58.setTransform(132.9,-103.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAUAdIAAgvIgRAvIgFAAIgRgwIAAAwIgHAAIAAg5IALAAIAOAoIABAJIADgKIAOgnIAKAAIAAA5g");
	this.shape_59.setTransform(127.3,-104.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_60.setTransform(120.8,-101.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgLAVIAAgpIAXAAIAAAGIgQAAIAAAjg");
	this.shape_61.setTransform(118.4,-103.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgDAHQAAgBABAAQAAAAABgBQAAAAABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_62.setTransform(113.4,-101.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgMAaQgEgEgBgHIAHgBQABAFACACQADACADAAQADAAACgBIAEgEIADgHIABgIIAAgCQgCAEgEACQgEACgDAAQgHAAgFgFQgFgEAAgJQAAgJAFgFQAFgFAIAAQAFAAAEADQAFADACAFQADAGAAAKQAAAKgDAHQgCAGgFAEQgEADgGAAQgGAAgFgDgAgHgTQgEAEAAAGQAAAGAEADQADADAEAAQAFAAADgDQADgDAAgGQAAgGgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_63.setTransform(110.1,-104.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_64.setTransform(105.3,-104.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_65.setTransform(101,-104.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgMAYQgFgEgBgHIAHgBQABAGADACQADADAEAAQAEAAAEgEQADgEABgGQgBgGgDgDQgEgDgEAAQgDAAgDACQgDABgCACIgGgBIAFgdIAcAAIAAAHIgWAAIgDAPQAFgDAFAAQAIAAAEAFQAGAEAAAIQAAAIgFAGQgFAHgJAAQgIAAgEgFg");
	this.shape_66.setTransform(96.8,-104);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_67.setTransform(92,-104.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_68.setTransform(87.5,-104.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgBASIAKgSIgKgRIAFAAIANARIgNASgAgQASIALgSIgLgRIAGAAIALARIgLASg");
	this.shape_69.setTransform(81.2,-103.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_70.setTransform(77.9,-101.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgRAdIAAg5IAkAAIAAAHIgdAAIAAAyg");
	this.shape_71.setTransform(74.9,-104.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_72.setTransform(71.4,-101.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_73.setTransform(67.3,-104.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_74.setTransform(63.4,-101.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgMAaQgGgEgDgHQgDgIAAgHQAAgJADgGQAEgHAGgDQAGgDAHAAQAIAAAGADQAGAFACAIIgHACQgCgHgEgCQgEgEgFAAQgGABgEADQgFADgCAGQgBAEAAAGQAAAGACAGQACAFAEADQAFADAEAAQAGAAAFgEQAEgEACgGIAHABQgCAJgGAGQgGAEgJAAQgJAAgFgDg");
	this.shape_75.setTransform(59.3,-104.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAQAdIAAgsIgeAsIgHAAIAAg5IAGAAIAAAtIAegtIAIAAIAAA5g");
	this.shape_76.setTransform(51.4,-104.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AATAjIAAgNIglAAIAAANIgHAAIAAgUIAFAAQAHgKAAgfIAAgJIAhAAIAAAyIAGAAIAAAUgAgGgZIgBAUQgCAMgEAIIAaAAIAAgqIgTAAg");
	this.shape_77.setTransform(45.6,-103.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_78.setTransform(40.2,-104.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AASAdIgHgSIgXAAIgGASIgIAAIAWg5IAHAAIAYA5gAgDgLIgGAQIASAAIgGgPIgDgLIgDAKg");
	this.shape_79.setTransform(34.6,-104.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AALAdIgKgQQgDgGgDgDQgDgCgEAAIAAAbIgHAAIAAg5IAHAAIAAAaQAGAAABgCQADgCACgIIAEgIIAFgEQACgCADAAIAGABIAAAGIgCAAIgCAAQgDAAgCACIgFAHQgCAIgCABIgEADQAEABAGAJIAMATg");
	this.shape_80.setTransform(29.9,-104.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AALASIgLgSIALgRIAGAAIgKARIAKASgAgDASIgNgSIANgRIAFAAIgJARIAJASg");
	this.shape_81.setTransform(25,-103.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_82.setTransform(17.5,-104.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_83.setTransform(11.3,-104.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_84.setTransform(5.1,-104.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dfgdfggg, new cjs.Rectangle(0,-110.4,286,20.8), null);


(lib.aaa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Mesh_1();
	this.instance.parent = this;
	this.instance.setTransform(0,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.aaa, new cjs.Rectangle(0,-1,23,2), null);


(lib.pr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.aaa();
	this.instance.parent = this;
	this.instance.setTransform(11.5,1.9,1,1,0,0,0,11.5,0);

	this.instance_1 = new lib.aaa();
	this.instance_1.parent = this;
	this.instance_1.setTransform(11.5,-1.4,1,1,0,0,0,11.5,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7C7B7B").s().p("AgZAZQgKgKAAgPQAAgOAKgLQALgKAOAAQAPAAAKAKQALALAAAOQAAAPgLAKQgKALgPAAQgOAAgLgLg");
	this.shape.setTransform(20.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pr, new cjs.Rectangle(0,-3.6,24.5,7.2), null);


(lib.hgj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#706F70").s().p("AgoApQgRgRAAgYQAAgXARgRQARgQAXgBQAYAAARARQARARAAAXQAAAYgRARQgQARgZAAQgXAAgRgRgAgigjQgPAQAAATQAAAUAPAQQAOAOAUAAQAUAAAPgOQAPgQAAgUQAAgTgPgQQgPgOgUAAQgTAAgPAOgAAQAgIgBgBIAAgIQAAgLgGgEQgDgBgIAAIgJAAIAAAZIgLAAIAAg/IAWAAQALAAAFADQAKADAAANQAAAHgGAFQgDABgGABQAHABADAFQAEAFAAAFIAAAFIABAHIAAACgAgLAAIAKAAQAGgBAEgBQAFgCABgHQAAgIgEgCQgEgDgJAAIgJAAg");
	this.shape.setTransform(53.4,53.4);

	this.instance = new lib.ClipGroup_9();
	this.instance.parent = this;
	this.instance.setTransform(1,0.5,1,1,0,0,0,51.6,51.6);

	this.instance_1 = new lib.ClipGroup_1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(18.6,2.5,1,1,0,0,0,28.2,11.3);

	this.instance_2 = new lib.ClipGroup_2_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.9,16.1,1,1,0,0,0,8.8,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlsFtQiYiXABjWQgBjVCYiYQCXiWDVgBQDWABCXCWQCYCYAADVQAADWiYCXQiXCYjWgBQjVABiXiYgAhuAqIhoGEQBlAyBxAAQDHAACNiMQCNiNAAjHQAAhGgVhEgAnHCYQAbBSA2BDQA1BDBKAsIBflkIh8AnIglCKIgqANIAliJgAmIkUQhYB9AACXQAABCASA/ICXgwICOoSQiKAzhVB6gAh+nPIiPISIB8gnIBVk6IAqgMIhUE4IIrivQgziNh6hYQh9haibAAQhAAAg+ARg");
	this.shape_1.setTransform(-0.1,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AidBxQgJgMAEgbQAGgbASgWQASgWAXgFQAXgHALAMQAMANgGAbQgEAWgNATQgNATgRAKgAhnAaQgVAHgGAgQgDARAFAHQAEAEAIgCQAVgGAGggQAEgSgGgGQgDgDgEAAIgFAAgAjZBxQAIgJACgQQAEgSgGgGQgEgFgIACQgHADgHAIQgJAKgEASQgBAJAAAEIgfAAIABgEQAFgbASgVQASgWAXgHQAXgHAMANQALANgGAcQgEASgJAQgAgsgUIAkgJIADBDIAAAAIAihRIAkgMIg+CIIglANgABRg8IBHgWIgHAgIglANIgCAPIAfgMIgGAfIggAJIgDAPIAngOIgIAkIhJAWgAC5hdIBCgSQAQgEAIAGQAJAGgDARQgFAXgSAMQANABgDAYIgCANQgBAJABADIgjAJQAAgHABgKQACgLgBgEQgCgHgJADIgQABIgLAwIgkALgADmhOIgQAFIgGAYIATgFQAPgEADgMQABgHgDgBIgFgBIgIABg");
	this.shape_2.setTransform(17.4,2.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhPAPQgLgMAEgYIAfAAQABAJAFADQAEADAGgCQAKgEAGgJIAcAAQgTAggfAJQgIACgHAAQgMAAgHgHgAAkgVIA1AAQgKAFgHACQgJACgHAAQgNAAgHgJg");
	this.shape_3.setTransform(-2,16.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#77231F").s().p("AlsFtQiYiXABjWQgBjVCYiXQCXiYDVAAQDWAACYCYQCXCXAADVQAADWiXCXQiYCYjWAAQjVAAiXiYgAhuAqIhoGFQBlAyBxAAQDHAACNiNQCNiNAAjHQAAhHgVhDgAnHCYQAbBSA2BDQA2BDBJAsIBflkIh8AnIglCKIgpANIAkiJgAmIkUQhYB8AACYQAABCASA/ICYgwICNoSQiKA0hVB5gAh+nPIiPISIB9gnIBUk6IAqgMIhUE5IIriwQgziNh6hYQh9haibAAQhCAAg8ARg");
	this.shape_4.setTransform(1.3,1.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#77231F").s().p("AjPBYQAEgSgGgGQgEgFgIACQgVAGgGAhIgBANIgfAAIAAgEQAGgbARgVQASgWAYgHQAXgHALANQAMANgGAbQgDATgKAQIgdAAQAIgLACgOgAidBxQgKgNAFgaQAGgbARgWQASgWAYgFQAXgHALAMQALANgFAbQgEAWgNATQgNATgSAKgAhnAaQgIACgHAIQgJALgDASQgEARAGAGQAEAFAIgCQAVgHAGggQAEgRgGgGQgDgDgFAAIgEAAgAgsgUIAjgJIAEBDIAihSIAkgLIg+CIIglANgABRg8IBGgWIgGAfIglAOIgDAPIAfgMIgFAfIggAJIgDAPIAmgOIgIAkIhIAWgAC4hdIBDgSQAQgEAIAGQAJAGgDARQgFAXgTAMQAOABgDAYQgEAVACAEIgjAJQAAgHABgKQACgLgBgEQgCgHgKADIgQABIgKAwIgkALgADmhOIgRAFIgFAYIASgFQAQgFACgMQACgIgIAAIgIABg");
	this.shape_5.setTransform(18.8,3.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#77231F").s().p("AhPAPQgLgMAEgZIAfAAQAAAKAFADQAEADAGgCQAJgDAIgLIAcABQgTAggfAJQgIADgHAAQgMAAgHgIgAAkgWIA0AAQgIAGgJACQgIACgGAAQgOAAgHgKg");
	this.shape_6.setTransform(-0.6,17.3);

	this.instance_3 = new lib.ClipGroup_3_0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,1,1,0,0,0,111,111);

	this.instance_4 = new lib.ClipGroup_4_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,1,1,0,0,0,113.1,113.1);

	this.instance_5 = new lib.ClipGroup_5_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,0,1,1,0,0,0,118.4,118.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hgj, new cjs.Rectangle(-118.4,-118.4,236.8,236.8), null);


(lib.ghgf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hgj();
	this.instance.parent = this;
	this.instance.setTransform(30,-114.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#706F6F").s().p("AgrBHIAAiNIBWAAIAAAOIhHAAIAAAyIA/AAIAAAMIg/AAIAAAzIBIAAIAAAOg");
	this.shape.setTransform(109.4,-38.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#706F6F").s().p("AgGBHIgziNIARAAIAoB3IAqh3IAQAAIgzCNg");
	this.shape_1.setTransform(96.8,-38);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#706F6F").s().p("AgHBHIAAiNIAPAAIAACNg");
	this.shape_2.setTransform(87.7,-38.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#706F6F").s().p("AgHBHIAAh/IgnAAIAAgOIBdAAIAAAOIgoAAIAAB/g");
	this.shape_3.setTransform(79.6,-38.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#706F6F").s().p("AAtBHIgNglIg/AAIgOAlIgQAAIA2iNIAOAAIA3CNgAgaAUIA1AAIgbhHg");
	this.shape_4.setTransform(68.8,-38.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#706F6F").s().p("AgGBHIgziNIARAAIAoB3IAqh3IAQAAIgzCNg");
	this.shape_5.setTransform(57.1,-38);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#706F6F").s().p("AgrA1QgRgUAAggIAAgBQAAgfARgVQARgUAaAAQAbAAARAUQARAUAAAgIAAABQAAAfgRAVQgRAUgbAAQgaAAgRgUgAgggqQgMAQAAAaIAAABQAAAZAMARQAOAQASAAQAUAAAMgQQANgQAAgaIAAgBQAAgZgNgRQgMgQgUAAQgTAAgNAQg");
	this.shape_6.setTransform(44.1,-38.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAPAAIBJBvIAAhvIAPAAIAACNg");
	this.shape_7.setTransform(29.9,-38.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAPAAIBJBvIAAhvIAPAAIAACNg");
	this.shape_8.setTransform(16.2,-38.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#706F6F").s().p("AgHBHIAAiNIAOAAIAACNg");
	this.shape_9.setTransform(6.7,-38.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAOAAIBKBvIAAhvIAPAAIAACNg");
	this.shape_10.setTransform(-8,-38.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#706F6F").s().p("AAgBHIgig3IghAAIAAA3IgPAAIAAiNIAxAAQAYAAAMANQALAMAAARIAAABQAAAfgiAJIAnA6gAgjACIAfAAQAQAAAKgHQAJgIAAgOQAAgdghAAIghAAg");
	this.shape_11.setTransform(-20.7,-38.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#706F6F").s().p("AgrA1QgRgUAAggIAAgBQAAgfARgVQARgUAaAAQAbAAARAUQARAUAAAgIAAABQAAAfgRAVQgRAUgbAAQgaAAgRgUgAgggqQgMAQAAAaIAAABQAAAZAMARQAOAQASAAQAUAAAMgQQANgQAAgaIAAgBQAAgZgNgRQgMgQgUAAQgTAAgNAQg");
	this.shape_12.setTransform(-34.7,-38.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#706F6F").s().p("AgwBHIAAiNIAwAAQAWAAAMAMQAJAKAAAOQAAAYgXAJQAdAIAAAZIAAABQAAASgNAKQgOAKgWAAgAghA5IAhAAQAQAAAJgGQAJgHAAgMIAAgBQAAgZgiAAIghAAgAghgGIAfAAQANAAAIgHQAJgHAAgMQAAgMgIgGQgIgGgNAAIggAAg");
	this.shape_13.setTransform(-47.9,-38.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// Слой 2
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("A3bYOMAAAgwbMAu3AAAMAAAAwbg");
	this.shape_14.setTransform(30,-70.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

}).prototype = getMCSymbolPrototype(lib.ghgf, new cjs.Rectangle(-120,-232.5,300,317.5), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAAFIgGALIgGgFQAGgHADgCIgNgCIACgIIAMAGIgBgNIAHAAIgCANIAMgGIADAIIgNACIAJAJIgGAFIgHgLg");
	this.shape.setTransform(45.5,37.5);

	this.instance = new lib.hgj();
	this.instance.parent = this;
	this.instance.setTransform(-6.1,-2.1,0.588,0.588,0,0,0,-1.2,-1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#706F6F").s().p("AgrBHIAAiNIBWAAIAAAOIhHAAIAAAyIA/AAIAAAMIg/AAIAAAzIBIAAIAAAOg");
	this.shape_1.setTransform(41.3,43.3,0.588,0.588);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#706F6F").s().p("AgGBHIgziNIARAAIAoB3IAqh3IAQAAIgzCNg");
	this.shape_2.setTransform(33.9,43.3,0.588,0.588);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#706F6F").s().p("AgHBHIAAiNIAPAAIAACNg");
	this.shape_3.setTransform(28.6,43.3,0.588,0.588);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#706F6F").s().p("AgHBHIAAh/IgnAAIAAgOIBdAAIAAAOIgoAAIAAB/g");
	this.shape_4.setTransform(23.8,43.3,0.588,0.588);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#706F6F").s().p("AAtBHIgNglIg/AAIgOAlIgQAAIA2iNIAOAAIA3CNgAgaAUIA1AAIgbhHg");
	this.shape_5.setTransform(17.4,43.2,0.588,0.588);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#706F6F").s().p("AgGBHIgziNIARAAIAoB3IAqh3IAQAAIgzCNg");
	this.shape_6.setTransform(10.6,43.3,0.588,0.588);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#706F6F").s().p("AgrA1QgRgUAAggIAAgBQAAgfARgVQARgUAaAAQAbAAARAUQARAUAAAgIAAABQAAAfgRAVQgRAUgbAAQgaAAgRgUgAgggqQgMAQAAAaIAAABQAAAZAMARQAOAQASAAQAUAAAMgQQANgQAAgaIAAgBQAAgZgNgRQgMgQgUAAQgTAAgNAQg");
	this.shape_7.setTransform(2.9,43.3,0.588,0.588);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAPAAIBJBvIAAhvIAPAAIAACNg");
	this.shape_8.setTransform(-5.4,43.3,0.588,0.588);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAPAAIBJBvIAAhvIAPAAIAACNg");
	this.shape_9.setTransform(-13.5,43.3,0.588,0.588);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#706F6F").s().p("AgHBHIAAiNIAOAAIAACNg");
	this.shape_10.setTransform(-19.1,43.3,0.588,0.588);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAOAAIBKBvIAAhvIAPAAIAACNg");
	this.shape_11.setTransform(-27.7,43.3,0.588,0.588);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#706F6F").s().p("AAgBHIgig3IghAAIAAA3IgPAAIAAiNIAxAAQAYAAAMANQALAMAAARIAAABQAAAfgiAJIAnA6gAgjACIAfAAQAQAAAKgHQAJgIAAgOQAAgdghAAIghAAg");
	this.shape_12.setTransform(-35.2,43.3,0.588,0.588);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#706F6F").s().p("AgrA1QgRgUAAggIAAgBQAAgfARgVQARgUAaAAQAbAAARAUQARAUAAAgIAAABQAAAfgRAVQgRAUgbAAQgaAAgRgUgAgggqQgMAQAAAaIAAABQAAAZAMARQAOAQASAAQAUAAAMgQQANgQAAgaIAAgBQAAgZgNgRQgMgQgUAAQgTAAgNAQg");
	this.shape_13.setTransform(-43.4,43.3,0.588,0.588);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#706F6F").s().p("AgwBHIAAiNIAwAAQAWAAAMAMQAJAKAAAOQAAAYgXAJQAdAIAAAZIAAABQAAASgNAKQgOAKgWAAgAghA5IAhAAQAQAAAJgGQAJgHAAgMIAAgBQAAgZgiAAIghAAgAghgGIAfAAQANAAAIgHQAJgHAAgMQAAgMgIgGQgIgGgNAAIggAAg");
	this.shape_14.setTransform(-51.2,43.3,0.588,0.588);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-74.9,-70.9,139.2,139.2), null);


(lib.spr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pr();
	this.instance.parent = this;
	this.instance.setTransform(12.2,505.2,1,1,0,0,0,12.2,0);

	this.instance_1 = new lib.pr();
	this.instance_1.parent = this;
	this.instance_1.setTransform(12.2,488.1,1,1,0,0,0,12.2,0);

	this.instance_2 = new lib.pr();
	this.instance_2.parent = this;
	this.instance_2.setTransform(12.2,470.9,1,1,0,0,0,12.2,0);

	this.instance_3 = new lib.pr();
	this.instance_3.parent = this;
	this.instance_3.setTransform(12.2,453.8,1,1,0,0,0,12.2,0);

	this.instance_4 = new lib.pr();
	this.instance_4.parent = this;
	this.instance_4.setTransform(12.2,436.6,1,1,0,0,0,12.2,0);

	this.instance_5 = new lib.pr();
	this.instance_5.parent = this;
	this.instance_5.setTransform(12.2,419.5,1,1,0,0,0,12.2,0);

	this.instance_6 = new lib.pr();
	this.instance_6.parent = this;
	this.instance_6.setTransform(12.2,402.3,1,1,0,0,0,12.2,0);

	this.instance_7 = new lib.pr();
	this.instance_7.parent = this;
	this.instance_7.setTransform(12.2,385.2,1,1,0,0,0,12.2,0);

	this.instance_8 = new lib.pr();
	this.instance_8.parent = this;
	this.instance_8.setTransform(12.2,368,1,1,0,0,0,12.2,0);

	this.instance_9 = new lib.pr();
	this.instance_9.parent = this;
	this.instance_9.setTransform(12.2,350.9,1,1,0,0,0,12.2,0);

	this.instance_10 = new lib.pr();
	this.instance_10.parent = this;
	this.instance_10.setTransform(12.2,333.7,1,1,0,0,0,12.2,0);

	this.instance_11 = new lib.pr();
	this.instance_11.parent = this;
	this.instance_11.setTransform(12.2,316.6,1,1,0,0,0,12.2,0);

	this.instance_12 = new lib.pr();
	this.instance_12.parent = this;
	this.instance_12.setTransform(12.2,299.4,1,1,0,0,0,12.2,0);

	this.instance_13 = new lib.pr();
	this.instance_13.parent = this;
	this.instance_13.setTransform(12.2,282.3,1,1,0,0,0,12.2,0);

	this.instance_14 = new lib.pr();
	this.instance_14.parent = this;
	this.instance_14.setTransform(12.2,265.1,1,1,0,0,0,12.2,0);

	this.instance_15 = new lib.pr();
	this.instance_15.parent = this;
	this.instance_15.setTransform(12.2,247.7,1,1,0,0,0,12.2,0);

	this.instance_16 = new lib.pr();
	this.instance_16.parent = this;
	this.instance_16.setTransform(12.2,230.6,1,1,0,0,0,12.2,0);

	this.instance_17 = new lib.pr();
	this.instance_17.parent = this;
	this.instance_17.setTransform(12.2,213.4,1,1,0,0,0,12.2,0);

	this.instance_18 = new lib.pr();
	this.instance_18.parent = this;
	this.instance_18.setTransform(12.2,196.3,1,1,0,0,0,12.2,0);

	this.instance_19 = new lib.pr();
	this.instance_19.parent = this;
	this.instance_19.setTransform(12.2,179.1,1,1,0,0,0,12.2,0);

	this.instance_20 = new lib.pr();
	this.instance_20.parent = this;
	this.instance_20.setTransform(12.2,162,1,1,0,0,0,12.2,0);

	this.instance_21 = new lib.pr();
	this.instance_21.parent = this;
	this.instance_21.setTransform(12.2,144.8,1,1,0,0,0,12.2,0);

	this.instance_22 = new lib.pr();
	this.instance_22.parent = this;
	this.instance_22.setTransform(12.2,127.7,1,1,0,0,0,12.2,0);

	this.instance_23 = new lib.pr();
	this.instance_23.parent = this;
	this.instance_23.setTransform(12.2,110.5,1,1,0,0,0,12.2,0);

	this.instance_24 = new lib.pr();
	this.instance_24.parent = this;
	this.instance_24.setTransform(12.2,93.4,1,1,0,0,0,12.2,0);

	this.instance_25 = new lib.pr();
	this.instance_25.parent = this;
	this.instance_25.setTransform(12.2,76.2,1,1,0,0,0,12.2,0);

	this.instance_26 = new lib.pr();
	this.instance_26.parent = this;
	this.instance_26.setTransform(12.2,59.1,1,1,0,0,0,12.2,0);

	this.instance_27 = new lib.pr();
	this.instance_27.parent = this;
	this.instance_27.setTransform(12.2,41.9,1,1,0,0,0,12.2,0);

	this.instance_28 = new lib.pr();
	this.instance_28.parent = this;
	this.instance_28.setTransform(12.2,24.8,1,1,0,0,0,12.2,0);

	this.instance_29 = new lib.pr();
	this.instance_29.parent = this;
	this.instance_29.setTransform(12.2,7.6,1,1,0,0,0,12.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.spr, new cjs.Rectangle(0,4,24.5,504.8), null);


// stage content:
(lib._300x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("A3W3WMAutAAAMAAAAutMgutAAAg");
	this.shape.setTransform(150,150);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	// legal
	this.addr2 = new lib.dfgdfggg();
	this.addr2.parent = this;
	this.addr2.setTransform(3.5,388.2);
	this.addr2.alpha = 0;
	this.addr2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.addr2).wait(303).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(41).to({alpha:0},6,cjs.Ease.get(1)).wait(1));

	// Слой 19
	this.instance = new lib.ghggg();
	this.instance.parent = this;
	this.instance.setTransform(120,376.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(298).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(46).to({alpha:0},6,cjs.Ease.get(1)).wait(1));

	// final
	this.instance_1 = new lib.ghgf();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120,220);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(293).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(51).to({alpha:0},6,cjs.Ease.get(1)).wait(1));

	// born
	this.born2 = new lib.dfs();
	this.born2.parent = this;
	this.born2.setTransform(73,268.7);
	this.born2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.born2).to({alpha:1},6).to({_off:true},306).wait(48));

	// logo
	this.instance_2 = new lib.Символ1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(225.8,128,1,1,0,0,0,-5.2,-7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({alpha:1},6).wait(47).to({y:196},11,cjs.Ease.get(1)).to({_off:true},229).wait(58));

	// Слой 24 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgdlAggMAANg+aMA6+AAMMgVxA+Vg");
	var mask_graphics_1 = new cjs.Graphics().p("EgdlAggMAANg+aMA6+AAMMgVxA+Vg");
	var mask_graphics_2 = new cjs.Graphics().p("EgdlAggMAANg+aMA6+AAMMgVxA+Vg");
	var mask_graphics_3 = new cjs.Graphics().p("EgdlAggMAANg+aMA6+AAMMgVxA+Vg");
	var mask_graphics_4 = new cjs.Graphics().p("EgdlAggMAANg+aMA6+AAMMgVxA+Vg");
	var mask_graphics_5 = new cjs.Graphics().p("EgdlAggMAANg+aMA6+AAMMgVxA+Vg");
	var mask_graphics_6 = new cjs.Graphics().p("EgdlAggMAANg+aMA6+AAMMgVxA+Vg");
	var mask_graphics_7 = new cjs.Graphics().p("EgdlAggMAANg+aMA6+AAMMgVxA+Vg");
	var mask_graphics_8 = new cjs.Graphics().p("EgdlAggMAANg+aMA6+AAMMgVxA+Vg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-104.1,y:208.7}).wait(1).to({graphics:mask_graphics_1,x:-78.3,y:208.7}).wait(1).to({graphics:mask_graphics_2,x:-55.9,y:208.7}).wait(1).to({graphics:mask_graphics_3,x:-37,y:208.7}).wait(1).to({graphics:mask_graphics_4,x:-21.6,y:208.7}).wait(1).to({graphics:mask_graphics_5,x:-9.5,y:208.7}).wait(1).to({graphics:mask_graphics_6,x:-0.9,y:208.7}).wait(1).to({graphics:mask_graphics_7,x:4.2,y:208.7}).wait(1).to({graphics:mask_graphics_8,x:5.9,y:208.7}).wait(352));

	// ghghj
	this.instance_3 = new lib.ghghj();
	this.instance_3.parent = this;
	this.instance_3.setTransform(85,148.8,0.7,0.7,0,0,0,0.1,0.1);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},9).wait(351));

	// mask-out (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_62 = new cjs.Graphics().p("EgdcAg0MAAAg+aMA6+AAAMgVkA+ag");
	var mask_1_graphics_63 = new cjs.Graphics().p("EgZHAg0MAAAg+aMAyPAAAMgSYA+ag");
	var mask_1_graphics_64 = new cjs.Graphics().p("EgVKAg0MAAAg+aMAqVAAAMgPfA+ag");
	var mask_1_graphics_65 = new cjs.Graphics().p("EgRoAg0MAAAg+aMAjRAAAMgM5A+ag");
	var mask_1_graphics_66 = new cjs.Graphics().p("EgOgAg0MAAAg+aIdBAAMgKnA+ag");
	var mask_1_graphics_67 = new cjs.Graphics().p("EgL0Ag0MAAAg+aIXpAAMgIqA+ag");
	var mask_1_graphics_68 = new cjs.Graphics().p("EgJhAg0MAAAg+aITDAAMgG+A+ag");
	var mask_1_graphics_69 = new cjs.Graphics().p("EgHpAg0MAAAg+aIPTAAMgFmA+ag");
	var mask_1_graphics_70 = new cjs.Graphics().p("EgGMAg0MAAAg+aIMZAAMgEiA+ag");
	var mask_1_graphics_71 = new cjs.Graphics().p("EgFKAg0MAAAg+aIKVAAMgDyA+ag");
	var mask_1_graphics_72 = new cjs.Graphics().p("EgEiAg0MAAAg+aIJFAAMgDVA+ag");
	var mask_1_graphics_73 = new cjs.Graphics().p("EgEjAg0MAAAg+aIIqAAMgDLA+ag");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_1_graphics_62,x:189,y:210}).wait(1).to({graphics:mask_1_graphics_63,x:151.1,y:210}).wait(1).to({graphics:mask_1_graphics_64,x:116.5,y:210}).wait(1).to({graphics:mask_1_graphics_65,x:85.6,y:210}).wait(1).to({graphics:mask_1_graphics_66,x:58.4,y:210}).wait(1).to({graphics:mask_1_graphics_67,x:34.7,y:210}).wait(1).to({graphics:mask_1_graphics_68,x:14.7,y:210}).wait(1).to({graphics:mask_1_graphics_69,x:-1.6,y:210}).wait(1).to({graphics:mask_1_graphics_70,x:-14.3,y:210}).wait(1).to({graphics:mask_1_graphics_71,x:-23.4,y:210}).wait(1).to({graphics:mask_1_graphics_72,x:-28.9,y:210}).wait(1).to({graphics:mask_1_graphics_73,x:-29.2,y:210}).wait(287));

	// ghghj
	this.instance_4 = new lib.ghghj();
	this.instance_4.parent = this;
	this.instance_4.setTransform(85,148.8,0.7,0.7,0,0,0,0.1,0.1);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({_off:true},65).wait(286));

	// mask-in-out (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_62 = new cjs.Graphics().p("A9ffNMAVlg+ZMAlaAAAMAAAA+Zg");
	var mask_2_graphics_63 = new cjs.Graphics().p("A8xfNMASag+ZMAnIAAAMAAAA+Zg");
	var mask_2_graphics_64 = new cjs.Graphics().p("A8HfNMAPig+ZMAotAAAMAAAA+Zg");
	var mask_2_graphics_65 = new cjs.Graphics().p("A7ifNMAM/g+ZMAqGAAAMAAAA+Zg");
	var mask_2_graphics_66 = new cjs.Graphics().p("A7BfNMAKug+ZMArVAAAMAAAA+Zg");
	var mask_2_graphics_67 = new cjs.Graphics().p("A6kfNMAIwg+ZMAsZAAAMAAAA+Zg");
	var mask_2_graphics_68 = new cjs.Graphics().p("A6MfNMAHGg+ZMAtTAAAMAAAA+Zg");
	var mask_2_graphics_69 = new cjs.Graphics().p("A54fNMAFvg+ZMAuDAAAMAAAA+Zg");
	var mask_2_graphics_70 = new cjs.Graphics().p("A5pfNMAEsg+ZMAunAAAMAAAA+Zg");
	var mask_2_graphics_71 = new cjs.Graphics().p("A5efNMAD8g+ZMAvBAAAMAAAA+Zg");
	var mask_2_graphics_72 = new cjs.Graphics().p("A5YfNMADfg+ZMAvSAAAMAAAA+Zg");
	var mask_2_graphics_73 = new cjs.Graphics().p("A5WfNMADWg+ZMAvXAAAMAAAA+Zg");
	var mask_2_graphics_137 = new cjs.Graphics().p("A9cfQMAAAg+aMA6+AAAMgVkA+ag");
	var mask_2_graphics_138 = new cjs.Graphics().p("A5HfQMAAAg+aMAyPAAAMgSYA+ag");
	var mask_2_graphics_139 = new cjs.Graphics().p("A1KfQMAAAg+aMAqVAAAMgPfA+ag");
	var mask_2_graphics_140 = new cjs.Graphics().p("AxofQMAAAg+aMAjRAAAMgM5A+ag");
	var mask_2_graphics_141 = new cjs.Graphics().p("AugfQMAAAg+aIdBAAMgKnA+ag");
	var mask_2_graphics_142 = new cjs.Graphics().p("Ar0fQMAAAg+aIXpAAMgIqA+ag");
	var mask_2_graphics_143 = new cjs.Graphics().p("AphfQMAAAg+aITDAAMgG+A+ag");
	var mask_2_graphics_144 = new cjs.Graphics().p("AnpfQMAAAg+aIPTAAMgFmA+ag");
	var mask_2_graphics_145 = new cjs.Graphics().p("AmMfQMAAAg+aIMZAAMgEiA+ag");
	var mask_2_graphics_146 = new cjs.Graphics().p("AlKfQMAAAg+aIKVAAMgDyA+ag");
	var mask_2_graphics_147 = new cjs.Graphics().p("AkifQMAAAg+aIJFAAMgDVA+ag");
	var mask_2_graphics_148 = new cjs.Graphics().p("AkjfQMAAAg+aIIqAAMgDLA+ag");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_2_graphics_62,x:428.4,y:200.3}).wait(1).to({graphics:mask_2_graphics_63,x:377.8,y:200.3}).wait(1).to({graphics:mask_2_graphics_64,x:332,y:200.3}).wait(1).to({graphics:mask_2_graphics_65,x:291,y:200.3}).wait(1).to({graphics:mask_2_graphics_66,x:254.9,y:200.3}).wait(1).to({graphics:mask_2_graphics_67,x:223.5,y:200.3}).wait(1).to({graphics:mask_2_graphics_68,x:197,y:200.3}).wait(1).to({graphics:mask_2_graphics_69,x:175.4,y:200.3}).wait(1).to({graphics:mask_2_graphics_70,x:158.5,y:200.3}).wait(1).to({graphics:mask_2_graphics_71,x:146.4,y:200.3}).wait(1).to({graphics:mask_2_graphics_72,x:139.2,y:200.3}).wait(1).to({graphics:mask_2_graphics_73,x:136.8,y:200.3}).wait(1).to({graphics:null,x:0,y:0}).wait(63).to({graphics:mask_2_graphics_137,x:189,y:200}).wait(1).to({graphics:mask_2_graphics_138,x:151.1,y:200}).wait(1).to({graphics:mask_2_graphics_139,x:116.5,y:200}).wait(1).to({graphics:mask_2_graphics_140,x:85.6,y:200}).wait(1).to({graphics:mask_2_graphics_141,x:58.4,y:200}).wait(1).to({graphics:mask_2_graphics_142,x:34.7,y:200}).wait(1).to({graphics:mask_2_graphics_143,x:14.7,y:200}).wait(1).to({graphics:mask_2_graphics_144,x:-1.6,y:200}).wait(1).to({graphics:mask_2_graphics_145,x:-14.3,y:200}).wait(1).to({graphics:mask_2_graphics_146,x:-23.4,y:200}).wait(1).to({graphics:mask_2_graphics_147,x:-28.9,y:200}).wait(1).to({graphics:mask_2_graphics_148,x:-29.2,y:200}).wait(212));

	// pic1
	this.instance_5 = new lib.pic1_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(90,147,0.8,0.8,0,0,0,0.1,0.1);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(62).to({_off:false},0).to({_off:true},87).wait(211));

	// text1
	this.instance_6 = new lib.text1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(225.8,89.7);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(62).to({_off:false},0).to({_off:true},87).wait(211));

	// mask-in-out - копия (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_137 = new cjs.Graphics().p("EgKxAg0MAVkg+aMAlbAAAMAAAA+ag");
	var mask_3_graphics_138 = new cjs.Graphics().p("A8xfOMASag+aMAnIAAAMAAAA+ag");
	var mask_3_graphics_139 = new cjs.Graphics().p("A8HfOMAPig+aMAotAAAMAAAA+ag");
	var mask_3_graphics_140 = new cjs.Graphics().p("A7ifOMAM/g+aMAqGAAAMAAAA+ag");
	var mask_3_graphics_141 = new cjs.Graphics().p("A7BfOMAKug+aMArVAAAMAAAA+ag");
	var mask_3_graphics_142 = new cjs.Graphics().p("A6kfOMAIwg+aMAsZAAAMAAAA+ag");
	var mask_3_graphics_143 = new cjs.Graphics().p("A6MfOMAHGg+aMAtTAAAMAAAA+ag");
	var mask_3_graphics_144 = new cjs.Graphics().p("A54fOMAFvg+aMAuDAAAMAAAA+ag");
	var mask_3_graphics_145 = new cjs.Graphics().p("A5pfOMAEsg+aMAunAAAMAAAA+ag");
	var mask_3_graphics_146 = new cjs.Graphics().p("A5efOMAD8g+aMAvBAAAMAAAA+ag");
	var mask_3_graphics_147 = new cjs.Graphics().p("A5YfOMADfg+aMAvSAAAMAAAA+ag");
	var mask_3_graphics_148 = new cjs.Graphics().p("EgZWAg0MADWg+aMAvXAAAMAAAA+ag");
	var mask_3_graphics_211 = new cjs.Graphics().p("EgdcAg0MAAAg+aMA6+AAAMgVkA+ag");
	var mask_3_graphics_212 = new cjs.Graphics().p("EgZHAg0MAAAg+aMAyPAAAMgSYA+ag");
	var mask_3_graphics_213 = new cjs.Graphics().p("EgVKAg0MAAAg+aMAqVAAAMgPfA+ag");
	var mask_3_graphics_214 = new cjs.Graphics().p("EgRoAg0MAAAg+aMAjRAAAMgM5A+ag");
	var mask_3_graphics_215 = new cjs.Graphics().p("EgOgAg0MAAAg+aIdBAAMgKnA+ag");
	var mask_3_graphics_216 = new cjs.Graphics().p("EgL0Ag0MAAAg+aIXpAAMgIqA+ag");
	var mask_3_graphics_217 = new cjs.Graphics().p("EgJhAg0MAAAg+aITDAAMgG+A+ag");
	var mask_3_graphics_218 = new cjs.Graphics().p("EgHpAg0MAAAg+aIPTAAMgFmA+ag");
	var mask_3_graphics_219 = new cjs.Graphics().p("EgGMAg0MAAAg+aIMZAAMgEiA+ag");
	var mask_3_graphics_220 = new cjs.Graphics().p("EgFKAg0MAAAg+aIKVAAMgDyA+ag");
	var mask_3_graphics_221 = new cjs.Graphics().p("EgEiAg0MAAAg+aIJFAAMgDVA+ag");
	var mask_3_graphics_222 = new cjs.Graphics().p("EgEjAg0MAAAg+aIIqAAMgDLA+ag");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(137).to({graphics:mask_3_graphics_137,x:308.6,y:210}).wait(1).to({graphics:mask_3_graphics_138,x:377.8,y:220.3}).wait(1).to({graphics:mask_3_graphics_139,x:332,y:220.3}).wait(1).to({graphics:mask_3_graphics_140,x:291,y:220.3}).wait(1).to({graphics:mask_3_graphics_141,x:254.9,y:220.3}).wait(1).to({graphics:mask_3_graphics_142,x:223.5,y:220.3}).wait(1).to({graphics:mask_3_graphics_143,x:197,y:220.3}).wait(1).to({graphics:mask_3_graphics_144,x:175.4,y:220.3}).wait(1).to({graphics:mask_3_graphics_145,x:158.5,y:220.3}).wait(1).to({graphics:mask_3_graphics_146,x:146.4,y:220.3}).wait(1).to({graphics:mask_3_graphics_147,x:139.2,y:220.3}).wait(1).to({graphics:mask_3_graphics_148,x:136.8,y:210}).wait(1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_3_graphics_211,x:189,y:210}).wait(1).to({graphics:mask_3_graphics_212,x:151.1,y:210}).wait(1).to({graphics:mask_3_graphics_213,x:116.5,y:210}).wait(1).to({graphics:mask_3_graphics_214,x:85.6,y:210}).wait(1).to({graphics:mask_3_graphics_215,x:58.4,y:210}).wait(1).to({graphics:mask_3_graphics_216,x:34.7,y:210}).wait(1).to({graphics:mask_3_graphics_217,x:14.7,y:210}).wait(1).to({graphics:mask_3_graphics_218,x:-1.6,y:210}).wait(1).to({graphics:mask_3_graphics_219,x:-14.3,y:210}).wait(1).to({graphics:mask_3_graphics_220,x:-23.4,y:210}).wait(1).to({graphics:mask_3_graphics_221,x:-28.9,y:210}).wait(1).to({graphics:mask_3_graphics_222,x:-29.2,y:210}).wait(138));

	// pic2
	this.instance_7 = new lib.pic2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(104,139.5,0.7,0.7);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(137).to({_off:false},0).to({_off:true},86).wait(137));

	// text2
	this.instance_8 = new lib.text2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(226,88.8);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(137).to({_off:false},0).to({_off:true},86).wait(137));

	// mask-in-out - копия: 2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_211 = new cjs.Graphics().p("EgKxAg0MAVkg+aMAlbAAAMAAAA+ag");
	var mask_4_graphics_212 = new cjs.Graphics().p("A8xfOMASag+aMAnIAAAMAAAA+ag");
	var mask_4_graphics_213 = new cjs.Graphics().p("A8HfOMAPig+aMAotAAAMAAAA+ag");
	var mask_4_graphics_214 = new cjs.Graphics().p("A7ifOMAM/g+aMAqGAAAMAAAA+ag");
	var mask_4_graphics_215 = new cjs.Graphics().p("A7BfOMAKug+aMArVAAAMAAAA+ag");
	var mask_4_graphics_216 = new cjs.Graphics().p("A6kfOMAIwg+aMAsZAAAMAAAA+ag");
	var mask_4_graphics_217 = new cjs.Graphics().p("A6MfOMAHGg+aMAtTAAAMAAAA+ag");
	var mask_4_graphics_218 = new cjs.Graphics().p("A54fOMAFvg+aMAuDAAAMAAAA+ag");
	var mask_4_graphics_219 = new cjs.Graphics().p("A5pfOMAEsg+aMAunAAAMAAAA+ag");
	var mask_4_graphics_220 = new cjs.Graphics().p("A5efOMAD8g+aMAvBAAAMAAAA+ag");
	var mask_4_graphics_221 = new cjs.Graphics().p("A5YfOMADfg+aMAvSAAAMAAAA+ag");
	var mask_4_graphics_222 = new cjs.Graphics().p("EgZWAg0MADWg+aMAvXAAAMAAAA+ag");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(211).to({graphics:mask_4_graphics_211,x:308.6,y:210}).wait(1).to({graphics:mask_4_graphics_212,x:377.8,y:220.3}).wait(1).to({graphics:mask_4_graphics_213,x:332,y:220.3}).wait(1).to({graphics:mask_4_graphics_214,x:291,y:220.3}).wait(1).to({graphics:mask_4_graphics_215,x:254.9,y:220.3}).wait(1).to({graphics:mask_4_graphics_216,x:223.5,y:220.3}).wait(1).to({graphics:mask_4_graphics_217,x:197,y:220.3}).wait(1).to({graphics:mask_4_graphics_218,x:175.4,y:220.3}).wait(1).to({graphics:mask_4_graphics_219,x:158.5,y:220.3}).wait(1).to({graphics:mask_4_graphics_220,x:146.4,y:220.3}).wait(1).to({graphics:mask_4_graphics_221,x:139.2,y:220.3}).wait(1).to({graphics:mask_4_graphics_222,x:136.8,y:210}).wait(1).to({graphics:null,x:0,y:0}).wait(137));

	// pic3
	this.instance_9 = new lib.gdfg();
	this.instance_9.parent = this;
	this.instance_9.setTransform(93,112.6,1,1,0,0,0,77,53.6);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(211).to({_off:false},0).to({_off:true},87).wait(62));

	// text3
	this.instance_10 = new lib.text3();
	this.instance_10.parent = this;
	this.instance_10.setTransform(225.5,86.2,0.9,0.9);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(211).to({_off:false},0).to({_off:true},87).wait(62));

	// spring
	this.instance_11 = new lib.spr();
	this.instance_11.parent = this;
	this.instance_11.setTransform(4.5,197.9,1,1,0,0,0,12.2,192.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(360));

	// Слой 25
	this.instance_12 = new lib.fvgdfg();
	this.instance_12.parent = this;
	this.instance_12.setTransform(152,97.2,2.164,2.164,-90,0,0,55.1,70);

	this.instance_13 = new lib.fvgdfg();
	this.instance_13.parent = this;
	this.instance_13.setTransform(152,314.2,2.164,2.164,-90,0,0,55.1,70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12}]}).wait(360));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape_1.setTransform(150,150,1.25,0.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(360));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(142.3,148.5,308.2,515.8);
// library properties:
lib.properties = {
	width: 300,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/300x300_atlas_P_.png", id:"300x300_atlas_P_"},
		{src:"images/300x300_atlas_NP_.jpg", id:"300x300_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;