(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"100pcx240_atlas_P_", frames: [[102,91,23,2],[0,91,100,73],[152,0,50,225],[0,0,150,89]]},
		{name:"100pcx240_atlas_NP_", frames: [[0,0,160,224],[0,226,220,153]]}
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
	this.spriteSheet = ss["100pcx240_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hoov2 = function() {
	this.spriteSheet = ss["100pcx240_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.pic1 = function() {
	this.spriteSheet = ss["100pcx240_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pic2a = function() {
	this.spriteSheet = ss["100pcx240_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.pic2b = function() {
	this.spriteSheet = ss["100pcx240_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.pic3 = function() {
	this.spriteSheet = ss["100pcx240_atlas_NP_"];
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
	this.shape.setTransform(30.5,68.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AAbAyIgjguIgUAVIAAAZIgQAAIAAhjIAQAAIAAA4IA1g4IATAAIgqArIArA4g");
	this.shape_1.setTransform(19.6,68.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("AgxBCIAAiBIAOAAIAAAUQAPgWAXAAQASAAAPAOQAOAOAAAYQAAAWgOAOQgPAPgSAAQgXAAgPgVIAAAxgAgYgpQgLALAAARQAAAQALALQAKAKAOAAQAPAAAKgKQAKgKAAgRQAAgSgKgKQgLgLgOAAQgOAAgKALg");
	this.shape_2.setTransform(7.4,70.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("AgkAlQgPgPAAgWQAAgUAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAUQAAAVgPAQQgPAPgWAAQgVAAgPgPgAgagbQgKAMAAAPQAAARALAKQAKAMAPAAQAQAAAKgMQALgKAAgRQAAgPgLgMQgLgLgPAAQgPAAgLALg");
	this.shape_3.setTransform(-5.5,68.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("AgkA3QgOgPAAgaIACgdQACgKACgEIAGgMQAGgGAFgDQAHgFAIgBIA2gNIADANIg1ANQgQAEgFAIQgHAIgBAPQAMgVAcAAQATAAAPAOQAOAOAAAUQAAAWgPAOQgOAPgWAAQgWAAgOgPgAgYgGQgKAJAAARQAAAPAKALQALALANAAQAPAAALgLQAKgLAAgPQAAgQgLgKQgLgLgOAAQgOAAgKALg");
	this.shape_4.setTransform(-17.9,67);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1B").s().p("AgtA8IAFgLQAHADAJAAQAGAAAFgEQAFgEAEgKIgthiIAQAAIAjBSIAghSIAQAAIgqBlQgGAPgHAHQgHAGgMAAQgLAAgKgFg");
	this.shape_5.setTransform(-29.9,70.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1B").s().p("AgqAyIAAhjIAvAAQAOAAAKAHQAJAHAAALQAAARgRAGQAWAFAAATQAAAMgKAIQgJAHgRAAgAgbAlIAgAAQALAAAGgEQAGgFAAgIQAAgHgHgEQgFgEgNAAIgeAAgAgbgGIAdAAQAJAAAGgEQAGgEAAgIQAAgGgGgEQgFgEgJAAIgeAAg");
	this.shape_6.setTransform(23.7,45.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1B").s().p("AgkAlQgPgPAAgWQAAgUAPgPQAPgQAVAAQAWAAAPAPQAPAQAAAUQAAAWgPAPQgOAPgXAAQgVAAgPgPgAgZgaQgLAKAAAQQAAAQALAMQALAKAOABQAQgBAKgKQALgMAAgQQAAgPgLgLQgKgMgQAAQgPAAgKAMg");
	this.shape_7.setTransform(11.5,45.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1B").s().p("AAcAyIAAhWIg3AAIAABWIgPAAIAAhjIBVAAIAABjg");
	this.shape_8.setTransform(-0.7,45.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1D1B").s().p("AAdAyIAAhOIg6BOIgOAAIAAhjIAPAAIAABOIA6hOIAOAAIAABjg");
	this.shape_9.setTransform(-12.7,45.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D1D1B").s().p("AgHAyIAAhWIgjAAIAAgNIBVAAIAAANIgjAAIAABWg");
	this.shape_10.setTransform(-23.6,45.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D1D1B").s().p("AAfAyIgfgpIgeApIgRAAIAngyIglgxIARAAIAcAnIAegnIAQAAIglAxIAnAyg");
	this.shape_11.setTransform(37.1,22.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D1D1B").s().p("AggAmQgOgOAAgYQAAgVANgPQAOgPATAAQAWAAANAPQAMAOAAAXIAAAFIhOAAQABAQALAIQAKAJAMAAQASAAAOgOIAJAIQgRATgZAAQgTAAgPgOgAgUgdQgKAKgBAOIA/AAQgCgPgHgJQgIgKgPAAQgMAAgIAKg");
	this.shape_12.setTransform(26.3,22.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1D1D1B").s().p("AgeAlQgPgPAAgWQAAgUAPgPQAPgQAUAAQAXAAARASIgJAKQgOgPgRAAQgOAAgKAMQgLALAAAPQAAAQALAMQAKAKAPABQAQgBAOgPIAKAKQgSATgXAAQgUAAgPgPg");
	this.shape_13.setTransform(15.2,22.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1D1D1B").s().p("AgqAyIAAhjIAvAAQAOAAAKAHQAJAHAAALQAAARgRAGQAWAFAAATQAAAMgKAIQgJAHgRAAgAgbAlIAgAAQALAAAGgEQAGgFAAgIQAAgHgHgEQgFgEgNAAIgeAAgAgbgGIAdAAQAJAAAGgEQAGgEAAgIQAAgGgGgEQgFgEgJAAIgeAAg");
	this.shape_14.setTransform(4.2,22.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1D1D1B").s().p("AAdAyIAAgkIgbAAIgbAkIgSAAIAegnQgLgCgIgIQgHgHAAgMQAAgOAKgIQAKgJARAAIAuAAIAABjgAgSgfQgHAGAAAIQAAAJAHAFQAIAEAJAAIAeAAIAAglIgeAAQgLAAgGAFg");
	this.shape_15.setTransform(-13.6,22.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1D1D1B").s().p("AgyAxIACgNIAHACIAHgBIAGgGQADgEACgJIADgWQABgPAAgWIAAgJIBGAAIAABjIgPAAIAAhWIgpAAIAAADQAAAYgCAOQgBAOgDALQgDAIgEAGQgFAFgEABIgLACIgMgCg");
	this.shape_16.setTransform(-25.5,22.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1D1D1B").s().p("AAoA+IAAgZIhPAAIgDAZIgMAAIAAgmIAKAAQAOgYAAgsIAAgRIBGAAIAABVIAPAAIgDAmgAgQgiQAAAkgMAWIA1AAIAAhIIgpAAg");
	this.shape_17.setTransform(-36.4,23.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1D1D1B").s().p("AAdAyIAAhOIg6BOIgOAAIAAhjIAOAAIAABOIA7hOIAOAAIAABjg");
	this.shape_18.setTransform(30.1,0.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1D1D1B").s().p("AgxAxIABgMIAIABQAEAAACgBQADgBADgFQAEgGABgGIADgXIABglIAAgIIBGAAIAABiIgPAAIAAhWIgoAAIAAADQAAARgCAVQgCAPgDAKQgDAJgEAEQgEAGgFABQgFACgGgBQgFABgGgCg");
	this.shape_19.setTransform(17.3,0.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1D1D1B").s().p("AgfAlQgPgOAAgXQAAgVAOgPQAOgPATAAQAWAAALAPQANAOAAAWIAAAGIhOAAQACAPAJAJQAKAJANAAQATAAAMgOIAJAIQgQATgYAAQgUAAgOgPgAgVgdQgIAJgCAPIA/AAQAAgNgJgLQgJgKgNABQgMgBgKAKg");
	this.shape_20.setTransform(6.6,0.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1D1D1B").s().p("AAoA+IAAgZIhQAAIgCAZIgMAAIAAgmIALAAQANgYAAgsIAAgRIBFAAIAABVIAQAAIgDAmgAgQgiQAAAkgMAWIA1AAIAAhIIgpAAg");
	this.shape_21.setTransform(-5,1.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1D1D1B").s().p("AgkAkQgPgOAAgWQAAgUAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAUQAAAWgPAOQgPAQgWAAQgVAAgPgQgAgagaQgKALABAPQAAARAKALQAKALAPgBQAQABAKgLQALgLAAgRQAAgPgLgLQgKgMgQAAQgQAAgKAMg");
	this.shape_22.setTransform(-16.7,0.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1D1D1B").s().p("AAkAyIAAhLIgkAxIgkgxIAABLIgOAAIAAhjIAOAAIAkA0IAlg0IAOAAIAABjg");
	this.shape_23.setTransform(-29.4,0.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1D1D1B").s().p("AAkAyIAAhLIgkAxIgkgxIAABLIgOAAIAAhjIAOAAIAkA0IAlg0IAOAAIAABjg");
	this.shape_24.setTransform(51.8,-22.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1D1D1B").s().p("AggAlQgOgOAAgXQAAgVAOgPQANgPAUAAQAVAAANAPQAMAOAAAWIAAAGIhOAAQACAPAJAJQALAJAMAAQASAAANgOIAKAIQgRATgYAAQgUAAgPgPgAgUgdQgJAJgCAPIA/AAQgBgOgIgKQgIgKgPABQgLgBgJAKg");
	this.shape_25.setTransform(39.3,-22.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1D1D1B").s().p("AggAsQgLgJAAgPQAAgPAMgIQALgIAUAAQAQAAANAEIAAgDQAAgOgIgGQgIgHgNAAQgNAAgRAHIgEgMQATgJAQAAQAWABAKAKQALALAAATIAAA7IgPAAIAAgOQgNARgWAAQgQgBgKgHgAgUAFQgIAFAAAKQAAAJAHAGQAIAFAKAAQANAAAKgHQAJgIAAgMIAAgKQgPgDgOAAQgMAAgIAFg");
	this.shape_26.setTransform(27.7,-22.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1D1D1B").s().p("AghAyIAAhjIBDAAIAAANIg0AAIAABWg");
	this.shape_27.setTransform(19.3,-22.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1D1D1B").s().p("AggAsQgLgJAAgPQAAgPAMgIQALgIAUAAQAQAAANAEIAAgDQAAgOgIgGQgIgHgNAAQgNAAgRAHIgEgMQATgJAQAAQAWABAKAKQALALAAATIAAA7IgPAAIAAgOQgNARgWAAQgQgBgKgHgAgUAFQgIAFAAAKQAAAJAHAGQAIAFAKAAQANAAAKgHQAJgIAAgMIAAgKQgPgDgOAAQgMAAgIAFg");
	this.shape_28.setTransform(8.4,-22.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1D1D1B").s().p("AgyAxIACgMIAHABIAHgBQADgCADgEQADgEACgIIADgXQABgPAAgWIAAgIIBGAAIAABiIgPAAIAAhWIgpAAIAAADQAAAZgCANIgEAZQgDAJgEAEQgEAGgFABQgFACgGgBQgGABgGgCg");
	this.shape_29.setTransform(-3.6,-22.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1D1D1B").s().p("AAoA+IAAgZIhPAAIgDAZIgMAAIAAgmIAKAAQAOgYAAgsIAAgRIBGAAIAABVIAPAAIgDAmgAgQgiQAAAkgMAWIA1AAIAAhIIgpAAg");
	this.shape_30.setTransform(-14.5,-21.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1D1D1B").s().p("AggAlQgOgOAAgXQAAgVAOgPQANgPATAAQAWAAAMAPQANAOAAAWIAAAGIhOAAQABAPALAJQAKAJAMAAQASAAANgOIAJAIQgQATgYAAQgVAAgOgPgAgUgdQgKAJgBAPIA/AAQgCgOgHgKQgJgKgOABQgLgBgJAKg");
	this.shape_31.setTransform(-25.8,-22.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1D1D1B").s().p("AgxBCIAAiBIAPAAIAAAUQAPgWAWAAQATAAAOAOQAOAOAAAYQAAAWgOAOQgOAOgTAAQgXAAgOgVIAAAygAgYgpQgLALAAARQAAAQALAKQALALANAAQAPAAAKgKQAKgLAAgRQAAgRgKgKQgKgLgPAAQgMAAgMALg");
	this.shape_32.setTransform(-37.7,-21.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1D1D1B").s().p("AAmBDIAAh4IhLAAIAAB4IgPAAIAAiFIBpAAIAACFg");
	this.shape_33.setTransform(-51.6,-24.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text2, new cjs.Rectangle(-56.9,-31.4,113.9,108.3), null);


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
	this.shape.setTransform(-0.1,-26.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003EC9").s().p("AgKASIgCgBQgIgKAGgIIAFgKQAEgGAFAAQAEAAAEADIABABQAIAHAAAFQABAFgIAHQgHAHgLAAg");
	this.shape_1.setTransform(-0.1,-26.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003EC9").s().p("AgGARQgLgPAGgLIACgDIALgHQAEgDAEAEQAEAEAAAIIgHAWQgCAEgEABIgBAAQgDAAgDgEgAAAACQAGgFgEgGQgDAFABAGg");
	this.shape_2.setTransform(-1.2,-14.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003EC9").s().p("AgKAUQgNgSAHgNIABgBIADgEIAMgIIAFgBQAGAAADAFQAFAFAAAJIAAABIgIAXQgCAIgJAAQgFAAgFgGg");
	this.shape_3.setTransform(-1.2,-14.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003EC9").s().p("AgfBRIArhyIgJgBQgDAAgDgFQgDgEADgFQANgWALgJQADgDAEACQAEACAAAEQAAAKgGAUQgHAbgNAaIgiBGIgCADgAAHgtQAAABAAABQgBAAAAABQAAAAAAABQABAAAAAAQABACAFABIAHgXIgBgBQgHAEgFANg");
	this.shape_4.setTransform(-40,-23);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003EC9").s().p("AglBSIArhwIgCgBIAAgEIAAAEQgHAAgEgGQgEgHAFgHQAKgVAOgMQADgDAFAAIAEABQAIADAAAIQgBALgFASIAAADQgIAbgNAaIgiBGIgCADIgBABIgDAEg");
	this.shape_5.setTransform(-40.1,-22.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003EC9").s().p("AgdBKIADgIIAmhjIgIgBQgGgBgCgEQgCgFAEgGIAPgWIAGgGQAEgFAEADQAGADgBAEIgGAdQgFAXgQAgIggBCIgEAFQgBgEADgEgAAHgrQgCAGAIgCIAGgWIgBgBQgJAIgCALg");
	this.shape_6.setTransform(50.4,6.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003EC9").s().p("AgkBQQAAgGAEgIIAlhiIgBAAQgKgBgDgHQgCgHAFgIIAPgWIAHgHQAEgEAFAAIAFABQAIAEgBAJIgGAdQgGAWgQAiIggBCQgCAEgDACIgHAGg");
	this.shape_7.setTransform(50.4,7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003EC9").s().p("AgmA8QgMgOAAgNIgFg7IAAgDIgBgRQAAgJgFgHQAJgHAEAKQADAGAAAIIAHBSQABAGADAGQAFAHAHgGQAHgGAHgNIANgVIARgdQAKgTARgTQACgDAGgDIAEAAIAAACIgMAQIgPAXIgbAxQgFAJgMASQgEAEgHAFQgFADgDAAQgFAAgEgGg");
	this.shape_8.setTransform(1.5,-65.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003EC9").s().p("AgqA/QgMgQAAgNIgEgqIgCgSIAAgIQAAgSgEgHIgDgEIAEgDQAFgEAFAAQAGAAAEAJQAEAJgBAGIACAmQACAVADAXQABAEADAGIACACIADgCQAGgFAHgMIAdgyQAJgTATgUQADgEAGgDIADgBIAHAAIACAIIgBACIgEAFIgIALQgKANgFAJIgMAVIgPAcQgHANgLAPQgDAFgJAGQgFADgFAAQgIAAgGgIg");
	this.shape_9.setTransform(1.5,-65.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003EC9").s().p("AgnBFQgMgCgIgJQgHgIgBgMQgBgUALgaQAIgUAWgfQAHgKAJAAQAIgBADAFQAFAEgCAIIgFAbQgCALgJAHIgBgBIAEgOQAGgTAAgKIgBgHQgLAFgEAFQgdAngGAeQgCAKACAKQABALAKAGQAKAFAKgFQAVgJAWgUIAtgeQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAIgGAGIgaAXIgjAcIgRALQgIAFgJAAIgGgBg");
	this.shape_10.setTransform(38.7,3.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#003EC9").s().p("AhAA+QgIgJgCgOQgBgXALgaQAIgSAXgiQAIgMAMAAIACAAQAKAAAEAGQAFAGgCALIgGAaQgCAMgKAJIgCACIgJgEIAHgSIAAgBQAFgQAAgKIAAAAQgEACgDADQgcAmgGAdQgCAIABAKQABAHAFAEQAFAFAHAAQAEAAADgDQAUgIAWgTIANgLIAegTIADgBIAEgBIAEAAIAHACIgLAMIgbAXIgjAcIgPALIgCABQgJAFgKAAQgRAAgNgNg");
	this.shape_11.setTransform(38.9,3.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#003EC9").s().p("Ag5BQIAAgVQgBgGACgKIACgQQAEgogCgUIAAgOQgBgDAEgCQAEgBACADIAGAMQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBAAQgCAGgBAJIAAAPIgFAwIgBAXQARgVAGgKIAhg/IAWghIAPgXQAEgFACAAQACABADAGIgVAfQgXAkgJATQgIAVgSAcQgHALgRAVIgFAFQgHgDAAgHg");
	this.shape_12.setTransform(12.1,-22.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#003EC9").s().p("Ag0BeQgKgFAAgJIAAgVQgBgFADgQIABgMIABgFQADgmgCgQQgBgFABgFIAAgEQAAgHAGgDIAEgBQAFAAADAFIAHANQACADgCAEQgCAEgBAQIAAAIIgGA4QAJgKAFgJIA/hsIABgCIAGgKQAGgGADAAQAFAAAFAJIACACIgXAiIgCAFQgUAdgKAVQgJAWgRAbQgEAIgNAQIgLANIgBABIgDACg");
	this.shape_13.setTransform(12.1,-22.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#003EC9").s().p("AgbBHQgNAAgJgOIgDgGIgHAIIgIgCQABgIAGgHQADgDABgGIACgYQACgJALgSQAJgNAOgRQARgRAMgEQAFgDAGAFQAHAGABAGQACAFgCAFQgGAOgEAFQgPAUgWAVIgbAYIADAKQAIAPAOgDQALgBAHgGQAQgLAHgGIAWgSQAOgKAIgIIABgBQACADgDADIgYAXIgiAeQgNAMgSAAIgEAAgAAIg6QgQANgHAIIgGAKQgMANgIASQgFAKAAANIAWgTIAggjQAFgGAJgPQAEgHgFgEQgCgBgIAAIgDACg");
	this.shape_14.setTransform(16.5,-71.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#003EC9").s().p("AgcBMQgPAAgKgRIgEAEIgDABQgDgBgDgBIgCgBIgEgBIAAgEQABgIAIgJQACgDAAgEIAAgFIACgSQACgKAMgUQAKgOAOgQQAQgSAOgGIAGgBQAFAAAFAFQAJAHABAIQACAIgCAFQgHAOgEAGQgQAVgWAUIgYAXIAAAAIABAGQAGAKAIgBIADAAQAKgCAGgEIAJgHIAOgLIATgOQAUgRAEgDIAGgDIADADQAFAFgHAGIg6A2QgOANgUAAgAALg2QgOAKgIAKIgCAEIgFAGQgKALgJATIgDAJIANgLIAfgiQAFgFAHgNIACgDQAAgBABAAQAAgBAAgBQAAAAAAAAQAAgBgBAAIgDgBIgDAAg");
	this.shape_15.setTransform(16.5,-71.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#003EC9").s().p("Ag5EAIgCgPQACgwAJgmIA8k+IAPg5IAHgQIAGgRIAJgJIALADQgBAEgDACIgGACIgFANQgKAagEARIgLApIgKA0IgsDpIgFAWIgGAiQgGAkgCAmIgBACQgDgDAAgEg");
	this.shape_16.setTransform(-46.3,-63.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#003EC9").s().p("Ag4ELQgGgEgBgIIAAgCIgBgNQACgtAJgpIAxkGQAFgeAGgaQADgPAFgNIAIgeQABgHAFgLIAGgOQABgDACgCIABgBIAJgJIARAGIgBAEQgBAIgKAEIgEAKQgIAWgGAVIhLF+QgHApgBAgIgBAEIAAAAIgDAFg");
	this.shape_17.setTransform(-46.3,-63.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#003EC9").s().p("Ag8CnIAHg8IABgQIAXi8QACgQAAgRQAAgFAFgGQACgBADABQAJADAIgFIAUgIIAjgVQACgCADADQADADgDADIgFAEIgwAdQgNAJgKgDIgHBJIgGAqIgTCkIAAAHIAGgBIAzgSQAKgDAHgGIAGgEIAIAJIgEAEQgUALgXAGIgYAJIgVAGIgEABQgFAAABgHg");
	this.shape_18.setTransform(-51.2,-2.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#003EC9").s().p("Ag/CvQgDgCABgIIAfkGQACgSAAgPQAAgHAGgHQADgDAEAAIAJACQADAAAFgDIAKgEQAGgCADgCIAjgUIAFgBQACAAAFACQAFAHgFAGIgGAFIgxAcQgKAIgJAAIgCAAIgfESIAAACIAzgSQAIgDAHgGIAEgDIACgBIAEgDIAOAQIgFAFIgEADQgWALgVAHIgZAIIgVAHIgEABQgFAAgDgEg");
	this.shape_19.setTransform(-51.2,-2.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#003EC9").s().p("Ag5CkQALgIARgJIAagPQAKgHAKACIABgVIAekBIAAgIIgEABIg7AVQgDABgGAFQgFAEgDgBIgFgFIgCgDIAFgEIBXggQAKgDgBAKIgYDEIAAABIgEAjIgDAZIgDApQAAAFgGAFQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgIgDgJAEIgUAJIggASIgEADQgKgFAIgFg");
	this.shape_20.setTransform(40.4,-32.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#003EC9").s().p("Ag6CyQgHgEgBgFQAAgEAGgGIA3ggQAIgGAJAAIABAAIAAgCIAekPIABgBIg5AUIgIAFQgFAFgEAAQgFAAgEgGIgBgBIgCgDIgBgBIgCgDIADgDIABgBIAFgEIACAAIBWggIAEgBQAEAAAEADQADAEAAAGIgYDEIAAABIgKBlQAAAHgHAGQgCACgEAAIgEgBIgFgBQgEAAgEACQgFAEgFABIgKAEIgmAWg");
	this.shape_21.setTransform(40.4,-32.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#003EC9").s().p("Ah4BbQgFgDADgEQADgFADgLIAEgQIAFgQIABgCIABgLQABgHADgEIADgLIACgLIANg8QABgKAJgDIAPgGQAKgFAMAEQAJAEAAAJQABAKgDAJQgGASgRASIgbAcIgLAJIgCADIACACIAYAFIAOAFQANAGAgADQAhAEAsgCIAzgCIADABIAAABIgDABIgqAFQgTADgmABQgXABgUgFIgkgHIgcgHIgJgCIgCADIgSA7IgGgCgAhLg0IACAIQgBAHgDABQgCABgDAIIgEAYQAIgEABgCIAfgjQAHgIADgTQAAgEgCgDQgCgDgDAAQgNAAgFAHIgEACQgFACgCACQgBACAAAHIAGACQAEABABADQgDACgEgBIgEgBIgCABg");
	this.shape_22.setTransform(36.4,-76);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#003EC9").s().p("Ah0BhIgCgBIgFgBQgEgCgBgFQgBgDACgEQADgFADgNIAJgdIAAgBIAAgBIABgHQABgLAEgFQACgDACgKIANg/IAAgFQADgMALgEIAOgGQAGgDAHAAQAGAAAHACQALAFACAMQABANgEAIQgGASgSAUIgbAcIgHAGIgBABIATAEQAHACAHADQALAFAbADIAGABQAYACAYAAIAdAAIAkgCIAPAAIAHABIABAIIgEACIAAAAIgEABIgqAFQgTADgnABIgFAAQgVAAgSgDIhFgQIgTA+gAhFgsQAAAJgGADQAAAAAAAAQgBABAAAAQAAABAAABQgBAAAAABIgDAOIAdghQAHgIACgRIgBgEIgBgBIgDAAQgGAAgEAFQgDADgEACQgFABAAADIABABQAIABACAGIABADIgCACQgDADgFAAIgCAAQABAAAAAAQAAABAAAAQAAABAAAAQAAAAgBABg");
	this.shape_23.setTransform(36.4,-75.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#003EC9").s().p("Ag/BfQgCgJADgNIAhhlQAGgRAAgEIAEgLQACgDAEABQAEACAAADIACAVQACALgMgEIgjBkQgCAKACAJQAFACADgFQAPgTAGgKIAcg1IAXgrQAFgKAEgMQACgEgBgGQAAgEACgCQAHgGAFgOQACgFACgBQADAAAGADIgFAQIgRApIgHARIgHAZQgGASADAgQABAHADADQAEADAJgDIAEAAIgCAEQgFAGgIAAQgIAAgEgFQgEgFgBgKQgCgVgDgLIgGALQgIATgYAjQgFAHgJAIQgDADgFABIgEABQgHAAgCgIg");
	this.shape_24.setTransform(-14.5,-17.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#003EC9").s().p("AhEBgQgDgLAEgOIAHgYIAchRQADgJAAgGQAAgEAEgHIABgCQADgFAFAAIAEAAQAHAEABAGIAAAEIAAADIABADIAAAKQABAIgDADQgCADgFAAIgDAAIgBADIgGAQIgPAsIgKAgQgCAHABAFIAGgIIAOgVIAWgnIAdg4QAFgJAEgMIABgIQgCgHAFgEQAGgFAFgMQADgKAHAAQAEAAAGAEIADACIgGAUIgYA6IgHAYQgGASAEAeQABAIADAAIAJgCIACAAIAHgBIgDAJQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgGAIgLAAQgKAAgGgHQgDgFgCgMIgDgSQgJAVgWAgIgPAQQgDADgIACIgEABQgLAAgDgMg");
	this.shape_25.setTransform(-14.5,-17.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#003EC9").s().p("AhDBtQgOgCgDgNQgGgTADgdQAAgEAEgDQAHgCAIgGIAMgKQAdgWAZgKIARgJQAEgDABgEQAGgjAAgJQgBgNgDgFQgDgGgHgCQgIgDgHAFQgOAJgRAQQgIAIgDAJQgDAHABACQABADAGADQgEADgEgBIgHgEQgGgCAEgIQAHgTAKgJQAPgOAJgGQAFgEANgGQAFgCAJADQAJADADAGQAGAJABANQACAQgEAOIgCAQIAdgMIAdgLQgCAEgHAEIgrAYQgJAFgDANQgIAbgLAVIgGALQgXAfgRAOQgLAJgLAAIgFgBgAABAAQgcANgKAHIgmAeQgDADAAAEQgBAMAEAUQACAGAFADQAFACAFgBQALgDAKgLQANgMAFgIQASgXAIgXQAGgRACgJgAgeAJIABACIACgDIgCAAg");
	this.shape_26.setTransform(27.6,-29.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#003EC9").s().p("AhGByQgQgEgFgPQgFgUACgdQABgJAHgCQAHgDAMgKIAGgFQAfgWAYgKQAGgDALgGIACgDIACgLQAEgXAAgKQAAgKgDgFQgEgHgHAAQgEAAgEADQgOAHgPARQgIAJgDAGIgBAFQAAABAFADIAHAEIgHAEQgDADgGAAQgEAAgHgEIgBAAQgJgFAFgMQAHgTAMgLIAJgIIAPgMQADgDARgIIAFgBQAHAAAIAEQAIAEAEAFQAHAMAAAMQACATgEAOIgBAGIA9gYIgFALQgDAHgHADIgBAAIgrAYQgHAFgDAKQgGAZgNAYIgBAEIgFAIQgXAegSAQQgMAKgMAAgAgHAHQgWAMgHAFIgmAeIgBADQgCAOAFARQACAGAGAAIADAAQAKgDAJgJIAAgBQAMgMAFgHQASgWAHgXIAGgRg");
	this.shape_27.setTransform(27.8,-29.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#003EC9").s().p("Ag/CNQACgFgEgOIAFgMQACgGADgEQACgCABgGIA6jJQABgGABgVQABgFAEgEQACgEADACQAEACABADIABAKQAAABAAABQAAABgBAAQAAABAAAAQAAAAAAABQgDADgCAGIgCAKIgQBEIgOAtIAAAHIAKgMQAOgVAXgSIAOgIQANgDAEAOQAFARgFAUQgKAkgMAaQgNAegHAdQgBAFACAFQgCAFgEgDQgEgDgBgEQgBgEACgGIAOgrIANgfIAPg2QACgNgFgMIgIACIgQANQgXAVgNAWIgJAOQgGAGgEAOIgYBTIgFAKQgIgDABgFg");
	this.shape_28.setTransform(-32.8,-16.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#003EC9").s().p("Ag5CZQgNgFACgJQACgFgDgJIgBgDIAAgBIAAgCIAFgLIABgBQACgGADgFIACgFIAtiQIANg6QACgKAAgOIABgCQAAgGAFgGQAEgEAEAAIAEABQAFADABAFIACAKIAAACQAAAFgDADQgDADgBAIIgBAFIgaBlQANgTAWgRIACgCQAHgGAHgBIAGgBQANAAAEAPQAFAUgGAUQgIAjgNAbQgOAfgGAbQgBAEABAEIABABIgBADQgCAFgGAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgGgFgBgFQgBgEABgJIAqh/QACgKgDgJIgCAAIgQANQgWATgMAXQgFAIgGAGQgGAJgCAKIgYBTIgEAIIgCACIgCAEg");
	this.shape_29.setTransform(-32.8,-16.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#003EC9").s().p("AAAD7QgMgJgHgPQgGgNgBgaIAAgfQAAgYAEgkIAMhbIgFABIgQANIgRAKIgSAKIgLAGQgKAFgCAGIgEACIgFgJQgDgDAFgDIASgJIAHgEQAEgEATgJQAKgFAHgGIAUgOQADgDACgJQAJgjACgQIAIgdIAJgcQAHgYAMgXIAnhHQADgGAHABIAKAAQACAFgGADQgJADgGANIgZAuIgJATQgIAQgMAoIgJAaIgNA2IAAAFQAGgDAIgFIAMgKIAYgRIAXgUIACABQgEAIgMALIgfAbIgXARQgIAGgCAJIgIAtIgCARIgGBIIgBAsIAAASQACASACAIQADAKAKAJIAGAFQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAIgDAAg");
	this.shape_30.setTransform(-36.1,-66.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#003EC9").s().p("AgCD/QgPgLgGgPQgHgPgBgbIAAgeQAAgYAEgkIAAgBIAFgzIAEgXIABgIIgCACIgKAHIgLAIIgXANIgCABIgKAFQgIAFgBAEQgCADgDABIgBAAIgEADIgJgOQgCgDABgEQABgEAEgBIAUgKIAEgDQAFgEAOgIIAGgCIAQgKIAUgOQACgCABgHIABgBIALgyQACgNAIgYIAHgVQAGgYANgXIAmhIQAFgHAIAAIACAAIANAAIABADQACAEgBAEQgCADgFADQgHADgGALIgYAtIgFAKIgEAKQgJAQgKAjIgKAfIgKApIgCAGIApgdIAQgOIAKgJIAHAHIgBADQgDAHgNANIAAABIg3AsQgGAEgCAHIgKA+IgHB5QgBAHABAFQABALADAOQADAJAIAIIAKAIIgDAEQgDADgEABQgDAAgCgCg");
	this.shape_31.setTransform(-36.1,-66.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#003EC9").s().p("AhfBcQgNAAgIgQQgGgNACgNIAAgKQgCgQANgNIAcgaQAKgIAMgGQALgEAKAHQAMAIgBASQAAAXgPAVIgVAgQAMgEAKgKQAOgMAegjIASgXQAJgOgCgQQgCgPAKgOQAFgIALgFIAPgIQAQgHAMAFQAGADADADIAKAJQAFAFABAGQACANgBAGQgDARgKAMQgUAagWANIgLAEQgKACgHgGQgIgGgBgKIgBgMQgGABgGAHIgkAvQgJAKgVARQgHAGgOAGQgJAEgKAAIgFgBgAhkAZIgBABQgMATAGAWQACAHAHAHQADACACgBQAOgEAHgIIAMgQQAUgYAHgbIAAgKQAAgIgIgEQgHgEgHADQgSAKgHAIIgDADQAAABAAAAQAAABABAAQAAABAAAAQAAABABABIADAGIgEABIgCAAQgKAAgGAMgAAlgNIADASQABAHAGADQAGAEAHgFQAPgJAPgPQAJgJAIgPIAEgMQAFgPgKgJQgRgSgVALIgMAHQgMAGgFARQAGABABACQABACgDAGQgIAKAHAKIgDAAQgBAAAAAAQgBAAAAABQgBAAAAABQAAABAAAAg");
	this.shape_32.setTransform(-19.6,-59.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#003EC9").s().p("AhfBhQgQAAgJgTQgHgPACgOIAAgIQgDgSAQgPIAcgbQAHgFAQgJQAGgCAEgBQAIAAAIAHQANAJAAAUQAAAZgQAXIgKAOIAEgDQAQgPAbgeIABgCIARgXQAIgMgCgOQgCgRALgQQAGgIAMgGIAPgIQAKgFAJAAQAGAAAGADQAIAEADADIAEADQAMAKACAKQACAKgBAKQgEARgKAOQgVAbgXANIgMAFIgFABQgKAAgIgIQgIgHgBgLIAAgGIgoAzIAAABQgLANgUAPQgHAGgPAHQgKADgNAAgAheBOQAMgEAGgHIAMgQQAUgYAGgYIABgKQgBgEgDgCQgEgEgEAAIgDABIgCACQgPAIgHAGIgCACIABACIAFALIgKADIgBAAIgCgBQgFAAgFAKIgBACQgMAQAGAWQABAFAGAGIAAgBgAAtAEQABAIAGAAQADAAACgCQANgIARgPQAKgLAFgMIABgBIAEgKQADgOgHgFQgJgKgKAAQgIAAgGAEIgMAHQgJAFgEAKQAFACABACQACAHgFAFQgGAJAFAGIAGAKIgLgCg");
	this.shape_33.setTransform(-19.6,-59.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#003EC9").s().p("AhXBdQgKgEgEgJQgEgMACgVQACgUALgYQAIgPALgOQAMgQAVAHQAIACACAHIAEAIIgFAFIgDgHQgGgIgNAEQgLADgKAPQgKAMgEARQgJAeABAMQAAAHAEAGQAEAIANgDQAMgEAOgOQALgKAfgjQAJgMABgJQAAgFAEgMQANglAdgcQASgTAWANQAFADAEAIQAIAOgFAXQgFAcgWAZQgQAUgMAKQgJAFgIACQgHABgJgFQgJgGgCgHIgBgGIgEAEQgIALgWAWIgSASQgKAHgLAFIgHACQgFAAgFgCgAAPAZQACALAMABQAGABAGgFIAWgWQAUgTAKgfQAFgSgGgPQgFgLgLABQgIAAgMAJQgEADAAAGQABAEgDAFIgMAXQgKAOAJAQIAMAOIADADQAAAAAAABQABAAAAABQAAAAAAABQgBAAAAABQgJgDgHgHIgLgPQgOANAEASg");
	this.shape_34.setTransform(19.3,12.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#003EC9").s().p("AhdBfQgJgFgDgIQgGgOADgVQACgVAMgZQAHgOAMgQQAKgNAQAAQAHAAAGACQAKADADAJIAFALIgNAOIgFgOQgCgDgFAAIgGABQgKADgJANQgIAJgGASIgBAGQgHAXABAMQAAAGADAEQACAEAFAAIAFgBQALgDANgNQANgMAVgZIAIgJQAIgLAAgHQAAgHAEgJIAAgCQAOgmAdgdQAMgMAPAAQAJAAAKAGQAHAEAEAIQAJARgFAYQgGAdgWAaQgRAWgMAJQgKAGgJACIgEAAQgHAAgJgFQgJgGgDgIQgHALgUAUIgHAHQgGAHgGAFQgFAEgRAJQgGACgEAAQgIAAgHgFgAAUAYQACAIAHAAIABABQAEAAAEgEIAIgHQgLgFgLgQQgHAKADANgAA7hFQAAAAgBABQAAAAAAABQgBAAAAABQAAABAAAAQABAFgDAHIgCAFIgLATQgJAMAIAMQADAFAGAFIAGAHIAEgEQATgTAJgdQAFgQgGgOQgDgIgGAAIgCAAQgHABgKAIg");
	this.shape_35.setTransform(19.3,12.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#003EC9").s().p("AhrBiQgJgCgFgJQgEgJADgJQAIgTAPgSIAGgFQAHgEAFAFQAEAEgCAHIgIAaQgBAFgDAAQgFABgDgEQgDgEAEgEIACgDIAGgPIgDABQgNAPgEALQgCAEABALQABAGAGgBQAIgBAFgDQAHgDAFgGIAdgdQAJgJACgLQAIgmAegmIAEgIQAGgHAGAEQAHADgCAJQgBAHgEAIIgIAOIgJARQgKAQgHAHQgMANAAAMQgBAMAFAHQAEAEAEAAQADABAFgDQAJgEAOgPQAUgVAFgIIAPgSQAEgDAAgGQACgjAUgkQACgDAMgMQAGgFAIAEQAHADAAAJQAAAIgHAOIgTAfQgIAMgHAJQgGAGABAMQABAMAHAGQAIAFAFgCQAGgBAIgEIASgKIAFgCQgCAFgGAFQgNALgNAEQgPAFgJgKQgKgNgBgGQgEACgEAFIgGAIQgaAggQAMQgJAHgJABQgHABgFgGQgLgLAAgIIgCgCIAAgBIgWAWIgRAQQgKAIgKAAIgFgBgAgWAJQAbgiAGgYQgXAYgKAigABjhVIgLAKQgLAOgIAhIAAADIACAAIAegsQAFgJgCgIIgFABg");
	this.shape_36.setTransform(-4.7,21.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#003EC9").s().p("AhuBnQgMgDgFgKQgGgMAFgLQAHgTARgTQACgEAFgCQAEgCAEAAQAFAAAFAEQAGAGgEAKIgHAZIgBAAQgBAJgHAAIgCAAQgHAAgDgFIgBgEIgCAEQgBADABAKIABAAQAJgBADgCQAFgCAFgGIAegeQAIgHABgKQAJgnAegnIAFgHQAEgHAHAAQAEAAADABQAGADABAHIAAAIQgBAIgJARIgNAWQgIAQgJAJQgLAMgBAJQAAAKAEAGQABABAAAAQABABAAAAQABAAAAAAQABABAAAAIAGgCQAIgEANgNIAAgBQARgRAIgMIANgPIADgCIACgHQADgnAUgiQACgEAJgJIAEgDQAEgEAGgBQAEABAFACQAKAEAAAMQAAAJgIAQQgHANgMASQgGALgJALQgFAEABAKQABAJAFAFQAEADADAAIACAAIANgFIAhgRIgEALQgBAGgHAEIgBABQgNAMgOAFIgLABQgLABgIgJIgBgCQgFgFgEgHIgHAKQgYAegUAPQgKAJgJAAIgCAAQgJAAgGgHQgJgIgCgHIgBABIghAfQgLAJgMgBgABahHQgIAJgFASIACgDIAPgYIADgHQgFADgCAEg");
	this.shape_37.setTransform(-4.5,21.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#003EC9").s().p("AizCBQgDgCgBgDIAAgGIAJgXIANgrIAIgkQADgKADgVIACgIQADgEACAAQAFABACADQADAGgDAHQgFALgJAoIABADIAGgJQANgYAIgLQAPgSAUgWQAHgIAKgCQAQgEADAQQADAQgEASIgIAnIgGAuIAAAJQACAIAFABQAFACAGgGQALgKAIgLQAQgTAIgOQAVgkAOgdIAMgYIAdg4QACgFAGACQAEABgCAGIgEALQgLAUgCARIAoggQAKgIAKgGIAvgdQADgDAFACQADABgBAFIgCAOIgVBDIgOA5QgBADABADQABAGABACQACACAGABQAAAEgBABQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQgHABgEgJQgGgMAFgVQAMgyAHgSIAKgjIABgHIgBgBIgsAcQgKAGgaAWQgEADgEALQgCACAEAEIAOAZQAIAMgGAQQgEAOgIANQgHANgPgBQgHgBgEgEQgJgKAAgNQAAgMAGgvIgBgGIgHAMIgVApQgWApgHAKIgXAbQgHAKgIAFQgPAIgIgOQgEgIgBgJQAAgdAKgqQAGgagBgRQAAgIgEgEQgHABgJAJQgWAWgKAPQgXAfgOAfIgUAxIgGAKQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIgCgBgAA/gmQgGAYgCAoQAAAGACAEQADAHAHABQAGABAFgGQAJgMADgOQACgJgDgHQgDgNgJgMIgLgSg");
	this.shape_38.setTransform(-62.5,78.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#003EC9").s().p("Ai1CFQgFgCgCgFQgBgFACgFIAVhBIAOhDIAAgCIADgIQAEgGAFAAIABAAQAHABADAGQAEAIgEAIQgFAMgEATIAAgBIAQgXIAfgmIADgDQAHgJAMgDIAHgBQAQAAADARQADAQgEAUIgIAmIgGAsIAAACIAAAIQABAGAEAAQACAAACgDIATgVIACgDQARgVAFgIQAWgmANgbIAphQQADgHAGAAIAEABQAJAEgDAKIgFAMQgGAKgDAMIAAgBIAdgXIBDgrQADgDAEAAIAGABQAHADgCAJIgXBRIgKApIgEAQIAAAFIABAFIAFACIADABIAAADQABAGgCADQgCACgGAAQgKAAgGgKQgHgPAGgWIAAgCQANgzAGgPIAIgaIACgHIglAXQgJAFgVASIgFAFQgEADgCAIIgBAAIARAcQAIAOgGARQgFAQgHAMQgJAPgQAAIgDAAQgHgBgHgGQgKgMAAgOQAAgQAEgcIgEAIQgHAPgGAMIgGALQgPAcgJAMIgXAbQgHAKgKAGQgFADgHAAQgLAAgGgKQgGgKAAgKQAAgdAKgrQAGgZgBgRIgBgHQgFACgFAGQgWAWgKAOQgYAigMAcIgVAxIgEAIIgCACQgDAGgFAAIgEgCgAA8AaQAAAFACADQACAFAEAAQADAAADgDQAIgKADgOQACgIgCgFQgFgOgHgKIgGgJQgEAUgDAog");
	this.shape_39.setTransform(-62.5,78.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#003EC9").s().p("AjGCYQgEgEABgGIANgrQAEgKAKgrIAVhNQABgDADgCQAFgDAEAHIADAEQABADgDACIgCAFIgCADQgFAFgCAIIgEAOIgJAiIgBAGIACABIACgEQAOgZAqgtIAdgeQAEgEAEgBQAFgDAFACQAFACACAGQAEANgEARIgbBgQgBAHABAFQACAHAHgCQAFgBADgDIAWgWQAUgVAhgvIAPgVQgDgGAAgDQAAgCAFgFIATgSQAFgFAEgKQANgbAHgKIACgBQAEgFAEACQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQABADgCADIgOAWIgBAIIBSg2IAMgIIARgQQAFgFAFABQAEABABACQABACgDAEIgKAKQgFAIgFAKIgpBqQgEAKgCAYQgBAFABACQABABAGABQgBAKgIgFQgJgEABgNQADgbAGgOIAPgrIAVg4IgCgBIhAAtIgdATQgOAMgDAMQgBAHAFAEIADADQAIAEAKAMQAKAKgFAUQgDAOgOAMQgHAGgIgBQgIgCgGgIQgHgMACgMQADgaADgJIABgKIgEADIgcAnIgkAuIgUAXQgMAMgJACQgNADgFgLQgFgKACgMQADgNAHgWIALgjIAIgiQACgLgFgHIgGADQgXAVgMAQIgWAYQggAngPAnIgIAaIgDAGIgEANQAAADgCAEIgEAFQAAABAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAIgDgCgAAtAgQAAAGAFAGQAEAHAHgFQAPgIAEgUIgBgFQgDgLgOgKIgJgGQgJAZABAVg");
	this.shape_40.setTransform(-37,33.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#003EC9").s().p("AjKCcQgFgHACgIQACgKAHgVIAmiOQACgEAFgEIAFgBQAGAAAEAHIABABQAGAHgGAHIgBABIgBACIAAABIgCAEQgFAFgEAOIgGAXQAOgUAggiIAagcIAEgDQAFgFAEgBQADgCAFAAQAMAAAEAMQAFAOgFATIgSA+IgBACIgIAgQgBAFABAFQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAAAAAIAIgDIAWgVQAUgXAagnIATgZQgDgGABgEQABgDAGgGIADgCIAPgPIAJgPQALgYAJgNIACgCQAFgFAFAAQAAAAABAAQAAAAABAAQABAAAAABQABAAAAAAQAEACABAEQABAFgDAGIgJAQIAAgBIBRg1IAQgQQAGgGAGAAIADAAQAIAEABADQABAGgEAEIgJAKIgLARIgoBqQgEAKgCAXIgBADIAIABIAAAFQgCALgIAAIgHgCQgLgHABgOQADgbAGgRIAghVIABgBIhAArIgUAOQgNAKgCALQAAAEACACIADACQAIAEALANQALANgFAVQgEAQgPANQgHAGgIAAQgOAAgHgMQgIgOACgNIAAgGQACgQACgGIgUAcQgLAQgZAeQgLAPgKAJQgMAMgLADIgGABQgMAAgGgMQgFgLADgNQAEgUAHgWIAJgdIAAgBIAIggQACgHgCgEIgBABQgWAUgNAPIgWAZQgfAmgPAmIgIAaIgEAJIgCAIQAAAGgFAHIgCACQgCAEgEAAQgEAAgDgDgAAyAgQAAAEAEAGIACACIACgBQANgIAEgRIgBgCIAAgBQgCgJgNgKIgDgCQgHAUABASg");
	this.shape_41.setTransform(-37,33.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#003EC9").s().p("AkKC0QgFAAgFgFQgFgFgCgGQgEgOAGgLIALgVIAEgGQAFgHAIADQAKAEABAIIgBALIgBAIQAAAEABADQACAFgFABIgGABQgGAAAAgGIAGgXIAAgHIgIAHIgLAVQgCAGABAIQABAHAFADQAFACAGgDIALgJIAQgSIAQgUQAWggAHgMQADgFACgIIAEgOIAIgZQACgIAFAAQAGgCADAEQAEAEgCAGIgQAeQgDAIgDAKQgEAQAEASQACAOAMgJQAHgGAJgIIAQgTIAQgQQAMgLABgUQACgWADgQQADgMAOgaQAEgHAKACQAHABAGAHQAGAGABAHIgBAJQgEAMgKAMQgKAOgHALIgJALIgEAHQgEAKADAPQAEAXAXgLQAGgDAIgIIAogiIAagXIAVgSQAEgDABgHIAHglQACgJAMgYIAKgQQACgDAEgCQAGgEAFAEQAIAGABAHQACALgDAQQgDABgCgEQgFgLAAgIIAAgGQgNAHgLAYQgLAYABATQAHgDAMgKQALgKAHgEIgCAEIghAeQgGAGADAIIACAEQACAHAGACQAGACAHgDQANgFALgMQAQgOAOgSQAegmAFgJIAFgGQAGgJAEgMQAJgbAIgPQANgdAfgFQAGgCAOACQAHACAFAHQAFAHABAIQACATgLAYQgFAOgNARIgXAeQgJALgLAJQgJAHgKgCQgIgCgEgIQgFgKAAgLIAAgNIgEAEIgZAjIgtAxQgHAHgRAHQgRAGgKgQIgHgMQgEAAgEADIgGAHIgeAcIgUAUQgRAPgTANQgHAFgOAAQgLAAgHgMIgEgMIgCgHIgNANIgfAhQgFAGgIAFQgHAEgIgDQgHgDgCgIIgFgWIgEADIgKASIgMAQIghAmQgHAJgNAAIgDAAgAhMgJIgIAlIAAAFQAJgIAGgJIAQgXQAGgKgCgFQgBgFgIgGQgNAIgFAQgAC+hDQgBANADAJQADALAKgDIAHgEIATgVQATgVAOgZQANgWgBgVQAAgQgSgBQgOgBgTANQgJAGACAIQABACgDAKIgEAHQgEAJACAEQAFAOAKAFIAGAEQgKABgIgGIgMgNQgHAPgEAXg");
	this.shape_42.setTransform(-11.9,59.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#003EC9").s().p("AkJC5QgHAAgHgGQgGgGgCgIQgFgPAHgNIALgVIAEgHQAGgHAHAAIAGABQAOAFAAAMIAAAMIgBADQgBAFABAFIAAAAIAJgKIANgRIAEgFIAZgnIAHgSIAKghQADgKAIgBIADgBQAHAAAFAGQAEAHgDAHIgQAeIgFARQgEAOADASIACAEQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABgBIAQgOIAggjQAKgKACgSQABgTAEgTQADgPAOgYQAFgIAKAAIAEAAQAJACAHAHQAHAIABAIQABAGgCAFQgFAOgJAMQgIAJgJAPIgGAIIgEAEIgDAGQgDAKACAMQACALAIAAQAFAAAFgDIAOgJIBWhLQACgBABgGIACgHQADgVACgKQADgMAKgRIACgFIAKgRIAHgGQAFgDAEAAQAEAAAFADQAJAHABAJQADANgDAQIgBADIgDABIgDAAQgGAAgCgGQgFgKAAgHQgIAIgIAQQgGAQgCAPIAKgIQAOgLAGgDIAPgIIgJAPIAAABIgDAEIghAeQgEACACAGIACAFQADAGAFAAIAGgBQALgEAMgMQAQgOAOgSIAEgFQAWgbAJgPIADgFIABgBQAHgIADgMQAHgYAKgSQAPggAggFIAIgBIAOACQAJACAGAHQAGAIABALQACAVgLAYQgHARgLAOIgFAHIgTAYQgIAKgMALQgJAGgIAAQgPAAgHgNQgFgLAAgLIgNASIgCACIgKANIgWAaIgTASQgIAIgSAHQgGADgFAAQgOAAgIgOIgFgJIAAgBIgFAFIg2A0QgWATgOAJQgHAGgQAAQgOAAgJgOIgEgNIgmApQgIAHgGAEQgFADgGAAQgRAAgEgQIgCgLIgPAWIgFAGIgXAdIgJAKQgJAKgRAAgAkKCTQgCAGABAGQAAAGAGAAQAAAAABAAQAAAAABgBQAAAAABAAQABAAAAgBIAIgFIgCAAIgBAAQgFAAgDgDQgDgDABgFIACgLIgGALgAhHgHQgDALgDAPIAAAAIAUgcQAFgIgBgDQAAgDgFgEQgJAHgEANgADEhCQgCAMADAIQABAEAEAAIACAAIAFgCIATgVQARgSAPgbQANgWgBgTQgBgMgMAAIgCgBQgNAAgPAMQgHAEACAFQABAEgEAIIAAACIgDAGIgBACQgEAGACADQAEAMAJAEIAEADIACACIAJAHIgQACQgIAAgGgEIgKgKQgFANgCARg");
	this.shape_43.setTransform(-11.9,59.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#003EC9").s().p("AkiDQQgHgBgGgFQgHgFgBgHQgFgdAEgXQAFgfALgRQAKgSALgIQAHgFAIABQAIACAEAHIABAGIgDARQAAAEgFAAQgEgBAAgCQgBgCAAgEIACgRIgKADQgMAHgIAPQgKASgFAhQgCAXAEAPQABAHAEADQAGAFAGgCQAKgDAMgLIAUgVQALgMAWghQAMgQAJgSIAHgQIALgcIACgKQABgHAIABQAEABACACQACADgBADQgEAPgEAGQgOAVgCAVIgDAUQABAEACACQADABAEgCQAHgFAIgJIAyhBIAEgKIAJgeIAIgSIADAAQAIgBACADQADADgCAIQgCAHgFALIgKARQgEAJgBANQgBAKAGAPIADADQAGgBAFgEIAJgJQAQgPAKgOIAPgSIAlgvQALgMADgVQAAgKAKgKQAEgEAHAFIgDAEQgEAEgBAIQAAAGgDAIIgEANIgJAfIABAAIAVgpQAWglALgNQAGgHAJgIQAEgDAIgCQADgBADABQAEACABADQAEAKgBAGQgDAfgDAIIAAAGIAEgGIAYglIAUgZQAIgKAIgEIAFgEQADgBADABQADACAAADQACALgBAIIgKA9IALgKQAGgFADgFQAJgOAMgNIAHgKIAGgMIAFgIQADgGAKgPQAJgOADgIIARgeIAAgBQAFgHAEACQAAABABAAQAAABAAAAQABABAAABQAAAAAAABIgCAEIgLAWIgQAsIgEAUQgDAPgCARQAAADACAHQACAHAFADQAFACAGgCQARgHAHgJQAEgGgDgEIgFgIQgFgIgKgGIgFgDQgFgCADgEQABgEAEABIALACIAPATIAFAGQADAEgBAEQgCAMgHAHQgMAMgPAEQgLADgIgGQgIgGgBgMIAAgUIABgEQADgGABgLIACgSIgBgGIgEADIg3BTQgEAIgGAEQgIAEgEgGQgBgCAAgDQACgZAEgPIACgNIACgOQACgIgEgFIgEACIgjAsIgNAWQgDAEgDAJIgGAOIgMAbIgEAIIgIANQgBACgEgDQgFgDADgGQAEgIADgNIAFgWQAHgYADgQIADgPQABgJgEgHQgHAAgGAGQgXAWgMAYIgPAbIgcBCIgEAKQgCAGgEADIgHgEQgBgDACgFIANg2IAAgFIgBgBIhTBkIgIAFQgLAEgGgKIgHgPIgDgNIgtA5QgHAJgHAGQgHAHgLgEQgIgDgBgMIAAgMIgEACQgRAdgKAOIgJAKIgLANIgZAaQgLAJgLAAIgDAAg");
	this.shape_44.setTransform(49.4,31.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#003EC9").s().p("AkiDVQgKgBgHgGQgHgHgCgIQgGgdAFgZQAGghAKgRQANgUAKgHQAGgFAJAAQANAAAGALQACAEAAAFIgDASQgBAIgHAAIgDgBQgLgCACgMIACgIIAAgCIgCABQgLAGgHAOQgMAUgDAdQgDAVAEAQQACAFACACQADACADAAIACAAQAKgDAKgKIAIgJIALgMQALgMARgZIAFgHIAVgiIAFgLIAMggIACgJQACgKAKAAIADAAQAGABADAFQADAEgCAFIAAADQgFAOgDAFQgMAUgDAUIgCAQIgBABIAAACIABADIABgBQAIgGAHgIIAZgfIAYghQACgCAAgEIABgDIASgyIAGgCIAEAAQAIAAADAFQAEAEgDAKQgDANgKARIgEAHQgDAGgCAOQAAAIAGAOQAEgBAHgHIADgDQAOgNAMgQIAJgMIAigrIAJgLQALgKACgUQABgNAKgKQAEgDAFAAQAFABAEADIAEADIgDADIgBACIgCADQgEAEAAAFQAAAEgCAJIABgDQASggANgOIAQgQQAEgEAKgDIADAAQAKAAADAJQAFAJgBAJIgCAWIAPgXIAVgaQAHgKAJgFIABgBIAFgDIAFAAQAKgBABAKQACAPgBAFIgJAxIAKgLQAIgMANgPQAEgEAFgKIAJgQQADgHAIgLQAKgQAEgJIAEgIIACgDIALgTIAAAAQAFgIAGAAIAFABQAHAFgFAKIgMAWIgPArQgDALgCAIIgEAgIABAJQADAGAGAAIAEAAQAPgGAGgIQABgBAAAAQAAgBABgBQAAAAgBgBQAAAAAAgBIgGgIQgDgGgKgGIgFgDQgHgGADgHQAEgFAFAAIACAAIAMACIARAVQAAABAAAAQABABAAAAQAAABABAAQAAAAABABQAGAIgBAFQgDAOgIAJQgMAMgRAFIgIABQgLAAgHgIQgHgHgBgMIAAgVIABgFQADgFABgOIAAgGIgyBNQgFAHgFAEQgFACgEAAQgHAAgDgGQgCgDAAgFQACgZAEgQIAFgeIgIAJIgZAfQgEAHgDAFIgFAKQgDAEgDAJIgHAOIgJATIgDAHIgBADIgCAGQgEAIgFAFQgBADgEAAQgFAAgCgCQgIgGAFgJQAEgIAEgTIAEgQIAKgoIAAgCQADgPgCgHQgDABgEADQgVAVgMAYIgTAiIgZA6IgBAFQgFANgEADIgDADIgDgCQgHgDgBgDQgCgEACgHIACgMIAAgBIAIgfIhJBYQgEAEgGACQgEABgEAAQgKAAgFgJQgEgFgDgJIAAgBIgCgFIgmAyQgFAHgKAIQgGAGgIAAQgEAAgEgCQgLgDgCgPQgOAYgIALIgbAeIgTATQgMALgNAAg");
	this.shape_45.setTransform(49.4,31.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ghghj, new cjs.Rectangle(-81.4,-92.3,162.9,184.6), null);


(lib.ghggg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D5D5D").s().p("AAfArIAAhEIgfAsIAAAAIgfgsIAABEIgJAAIAAhVIAKAAIAeAuIAfguIAKAAIAABVg");
	this.shape.setTransform(118,-160);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5D5D5D").s().p("AAhArIAAhVIAJAAIAABVgAgpArIAAhVIAKAAIAAAiIAVAAQAOAAAJAFQAJAHAAAMQAAANgJAGQgIAIgOAAgAgfAiIAWAAQAKAAAGgFQAFgFAAgIQAAgIgGgFQgGgDgJAAIgWAAg");
	this.shape_1.setTransform(107.2,-160);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5D5D5D").s().p("AAZArIAAgnIgxAAIAAAnIgJAAIAAhVIAJAAIAAAmIAxAAIAAgmIAJAAIAABVg");
	this.shape_2.setTransform(97.2,-160);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5D5D5D").s().p("AAYArIAAgnIgvAAIAAAnIgKAAIAAhVIAKAAIAAAmIAvAAIAAgmIAKAAIAABVg");
	this.shape_3.setTransform(88,-160);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5D5D5D").s().p("AgeAfQgMgMAAgTQAAgRAMgNQANgNARAAQATAAAMANQAMANAAARQAAATgMAMQgNANgSAAQgSAAgMgNgAgXgYQgJAKAAAOQAAAPAJAKQAKAKANAAQAPAAAJgKQAJgKAAgPQAAgOgJgKQgKgKgOAAQgOAAgJAKg");
	this.shape_4.setTransform(78.2,-160);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5D5D5D").s().p("AAZArIAAhGIgyBGIgJAAIAAhVIAKAAIAABGIAyhGIAJAAIAABVg");
	this.shape_5.setTransform(68.4,-160);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5D5D5D").s().p("AAeA0IAAgTIhEAAIAAhUIAJAAIAABLIAwAAIAAhLIAJAAIAABLIALAAIgBAcg");
	this.shape_6.setTransform(59.6,-159);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5D5D5D").s().p("AAhArIgKgXIgtAAIgLAXIgJAAIAmhVIAIAAIAnBVgAgTAMIAmAAIgTgrg");
	this.shape_7.setTransform(49.7,-160);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5D5D5D").s().p("AghArIAAhVIAjAAQAPABAHAHQAGAGAAAIQAAANgOAHQASAEAAAQQAAAKgIAHQgIAFgPABgAgYAiIAcAAQAJAAAGgEQAGgFAAgGQAAgIgGgDQgGgEgLAAIgaAAgAgYgEIAYAAQAIAAAHgDQAFgFAAgHQAAgGgFgEQgFgEgJAAIgZAAg");
	this.shape_8.setTransform(41,-160);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5D5D5D").s().p("AgeAfQgMgMAAgTQAAgRAMgNQANgNARAAQATAAAMANQAMAOAAAQQAAASgMANQgMANgTAAQgRAAgNgNgAgXgYQgJAKAAAOQAAAOAJALQAKAKANAAQAOAAAKgKQAJgLAAgOQAAgNgJgLQgKgKgOAAQgNAAgKAKg");
	this.shape_9.setTransform(31.2,-160);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5D5D5D").s().p("AAZArIAAgnIgwAAIAAAnIgKAAIAAhVIAKAAIAAAmIAwAAIAAgmIAJAAIAABVg");
	this.shape_10.setTransform(21.4,-160);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5D5D5D").s().p("AAYArIAAgnIgvAAIAAAnIgKAAIAAhVIAKAAIAAAmIAvAAIAAgmIAKAAIAABVg");
	this.shape_11.setTransform(12.2,-160);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5D5D5D").s().p("AAZArIAAhGIgxBGIgKAAIAAhVIAKAAIAABGIAyhGIAJAAIAABVg");
	this.shape_12.setTransform(2.9,-160);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5D5D5D").s().p("AAZArIAAgnIgxAAIAAAnIgJAAIAAhVIAJAAIAAAmIAxAAIAAgmIAJAAIAABVg");
	this.shape_13.setTransform(-10,-160);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5D5D5D").s().p("AgeA0IAAhUIA8AAIAAAJIgyAAIAAAcIAtAAIAAAJIgtAAIAAAdIAzAAIAAAJgAAFgnIAAgMIALAAIAAAMgAgPgnIAAgMIALAAIAAAMg");
	this.shape_14.setTransform(-18.4,-160.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5D5D5D").s().p("AAjA0IAAgTIhEAAIgCATIgIAAIAAgcIAIAAQAOgUAAgoIAAgPIA2AAIAABLIALAAIgBAcgAgMgfQAAARgDAOQgDAPgGAJIAwAAIAAhCIgkAAg");
	this.shape_15.setTransform(-27.3,-159);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#5D5D5D").s().p("AAzArIgdgqIgRATIAAAXIgJAAIAAgXIgRgTIgdAqIgMAAIAjgwIghglIAMAAIAsAyIAAgyIAJAAIAAAyIAsgyIAMAAIghAlIAjAwg");
	this.shape_16.setTransform(-38.5,-160);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#5D5D5D").s().p("AgeAfQgMgMAAgTQAAgRAMgNQANgNARAAQATAAAMANQAMANAAARQAAATgMAMQgNANgSAAQgSAAgMgNgAgXgYQgJAKAAAOQAAAPAJAKQAKAKANAAQAPAAAJgKQAJgKAAgPQAAgOgJgKQgJgKgPAAQgOAAgJAKg");
	this.shape_17.setTransform(-49.9,-160);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#5D5D5D").s().p("AgfArIAAhVIAfAAQAPABAIAHQAJAHAAAMQAAAOgKAGQgJAHgOAAIgUAAIAAAfgAgVAEIAVAAQAJAAAHgEQAGgGAAgIQAAgIgGgGQgGgEgKgBIgVAAg");
	this.shape_18.setTransform(-58.7,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ghggg, new cjs.Rectangle(-61.9,-166.1,184,12.3), null);


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


(lib.fghf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pic3();
	this.instance.parent = this;
	this.instance.setTransform(-110,-76.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.fghf, new cjs.Rectangle(-110,-76.5,220,153), null);


(lib.dfs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAPAVIAAghIgNAhIgEAAIgMgiIAAAiIgHAAIAAgpIALAAIAKAgIAMggIAKAAIAAApg");
	this.shape.setTransform(43.2,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAQAVIAAgpIAHAAIAAApgAgWAVIAAgpIAHAAIAAAQIAJAAQAHAAAFAEQAFACAAAGQAAAFgEAEQgEAEgIAAgAgPAPIAHAAQAHAAACgCQACgBAAgEQAAgCgCgDQgBgCgHAAIgIAAg");
	this.shape_1.setTransform(37.5,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAKAVIAAgTIgTAAIAAATIgHAAIAAgpIAHAAIAAASIATAAIAAgSIAHAAIAAApg");
	this.shape_2.setTransform(32.5,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAKAVIAAgTIgTAAIAAATIgHAAIAAgpIAHAAIAAASIATAAIAAgSIAHAAIAAApg");
	this.shape_3.setTransform(28.1,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgNAQQgGgFABgLQgBgLAHgFQAGgFAGAAQAIAAAGAGQAFAGABAJQgBAHgCAFQgCAFgFACQgEADgGAAQgHAAgGgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQADgEAAgIQAAgHgDgEQgDgEgGAAQgEAAgDAEg");
	this.shape_4.setTransform(23.6,0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAKAVIAAgfIgSAfIgIAAIAAgpIAHAAIAAAfIATgfIAHAAIAAApg");
	this.shape_5.setTransform(19.2,0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AANAbIAAgMIgfAAIAAgpIAHAAIAAAjIATAAIAAgjIAHAAIAAAjIAEAAIAAASg");
	this.shape_6.setTransform(14.8,1.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgOASQgEgDAAgFQAAgDACgDQAAgCADgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgCACQgDACgBAEIgHgBIADgHQACgDAFgBQAEgCAEAAQAFAAAEACQADABABACIADAFIAAAGIAAAIIABANIABAFIgHAAQgCgCABgDIgIAEIgHACQgHAAgDgEgAAAADIgHABIgCACIgCAEQAAAAABABQAAABAAAAQAAABABAAQAAABABAAQACACAEAAQADAAADgCQADgBACgDQABgDAAgEIAAgDIgKADg");
	this.shape_7.setTransform(10.1,0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgQAVIAAgpIAQAAIAIABQADABACADQACADAAADIgBAFIgEAEQADAAACADQACACAAAEQAAAGgFADQgDADgIAAgAgJAPIAJAAIAIgBQABgCAAgDIgBgEQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAIgFAAIgJAAgAgJgCIAIAAIAEgBIAEgCQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgDgCgCIgHgBIgIAAg");
	this.shape_8.setTransform(5.9,0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgNAQQgFgFAAgLQAAgLAGgFQAGgFAGAAQAJAAAFAGQAGAGgBAJQABAHgDAFQgDAFgEACQgFADgFAAQgIAAgFgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAFAAAEgEQADgEAAgIQAAgHgDgEQgEgEgFAAQgEAAgEAEg");
	this.shape_9.setTransform(1.4,0.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAKAVIAAgTIgTAAIAAATIgHAAIAAgpIAHAAIAAASIATAAIAAgSIAHAAIAAApg");
	this.shape_10.setTransform(-3,0.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAKAVIAAgTIgTAAIAAATIgHAAIAAgpIAHAAIAAASIATAAIAAgSIAHAAIAAApg");
	this.shape_11.setTransform(-7.4,0.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAKAVIAAgfIgTAfIgHAAIAAgpIAHAAIAAAfIASgfIAIAAIAAApg");
	this.shape_12.setTransform(-11.8,0.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAKAVIAAgTIgTAAIAAATIgHAAIAAgpIAHAAIAAASIATAAIAAgSIAHAAIAAApg");
	this.shape_13.setTransform(-18.4,0.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgMAQQgGgGAAgKQAAgJAGgGQAEgGAIAAQAJAAAFAGQAFAGAAAJIAAACIgeAAQAAAHAEADQAEAEADAAQAEAAAEgCQACgCABgFIAIABQgCAHgFADQgEAEgIAAQgIAAgEgGgAgHgMQgDAEAAAFIAWAAQAAgFgDgDQgEgEgFAAQgEAAgDADg");
	this.shape_14.setTransform(-22.9,0.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAQAbIAAgMIgfAAIAAAMIgGAAIAAgSIADAAQAIgJAAgaIAbAAIAAAjIAFAAIAAASgAgLAJIAWAAIAAgdIgPAAQgBAUgGAJg");
	this.shape_15.setTransform(-27.5,1.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AATAVIgHgNIgFgFIgDgBIAAATIgHAAIAAgTIgEABIgEAFIgIANIgHAAIAHgNQAFgHAEgBQgDgBgBgCIgEgIIgCgCIgCgBIgCAAIAAgGIABAAIAFABIADACIADAGQADAHACABQAAAAAAAAQABABAAAAQABAAABAAQAAAAABAAIAAgSIAHAAIAAASQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBADgHIAEgHQACgCAEAAIADAAIAAAGIgCAAIgDABIgDAFIgDAGIgEACQAEABAFAHIAIANg");
	this.shape_16.setTransform(-32.4,0.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgNAQQgGgFAAgLQAAgLAHgFQAFgFAHAAQAJAAAFAGQAGAGAAAJQAAAHgDAFQgDAFgEACQgFADgFAAQgIAAgFgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAFAAAEgEQADgEABgIQgBgHgDgEQgEgEgFAAQgEAAgDAEg");
	this.shape_17.setTransform(-37.3,0.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAJABQADABADACQAEACABADQACAEAAAEQAAAHgFAEQgEAFgMAAIgOAAIAAAYgAgNAAIAOAAQAHAAADgDQADgDAAgFQAAgDgCgDQgBgCgDgBIgHgBIgOAAg");
	this.shape_18.setTransform(-42.1,-0.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAAADIgEAJIgFgDIAGgIIgJgBIACgGIAJAFIgBgKIAFAAIgBAKIAJgFIACAGIgKABIAHAIIgFADIgFgJg");
	this.shape_19.setTransform(-46.4,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dfs, new cjs.Rectangle(-50,-6.4,100.1,12.9), null);


(lib.dfgdfggg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMAZQgFgFgBgHIAHgBQABAGADADQADACAEAAQAEAAAEgDQADgDAAgGQAAgEgDgDQgDgEgFAAIgEABIABgFIABAAQADAAAEgCQAEgDAAgFQAAgDgDgDQgDgCgDAAQgEAAgDACQgCADgBAFIgHgBQABgHAFgEQAEgEAHAAQAEAAAEACQAEACACADQACAEAAAEQAAADgCADQgCADgEACQAFABADADQADAEAAAFQAAAIgGAFQgFAFgIAAQgHAAgFgEg");
	this.shape.setTransform(147.8,-145.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMAYQgGgEAAgHIAHgBQABAGADACQADADAEAAQAEAAAEgEQAEgEAAgGQAAgGgEgDQgEgDgEAAQgEAAgCACQgDABgCACIgGgBIAGgdIAbAAIAAAHIgWAAIgDAPQAFgDAFAAQAHAAAGAFQAFAEAAAIQAAAIgEAGQgGAHgJAAQgIAAgEgFg");
	this.shape_1.setTransform(143.4,-145.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_2.setTransform(138.7,-145.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMAXQgGgHABgQQAAgJABgGQACgHAFgDQAEgDAFAAQAFAAADACQADABADAEIAEAIIABANQAAAKgCAGQgCAGgFAEQgDADgHAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQADgFAAgOQAAgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_3.setTransform(134.4,-145.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJAcQgBgHADgJQADgKAEgIQAEgIAFgHIgaAAIAAgGIAjAAIAAAFQgFAGgFAKQgGAIgCALQgCAHAAAIg");
	this.shape_4.setTransform(130,-145.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMAXQgFgHAAgQQAAgJABgGQACgHAFgDQAEgDAFAAQAFAAADACQAEABACAEIAEAIIAAANQABAKgCAGQgDAGgEAEQgDADgHAAQgHAAgFgGgAgHgSQgEAFABANQgBAOAEAFQADAEAEAAQAFAAADgEQAEgFgBgOQABgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_5.setTransform(125.5,-145.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNAXQgFgHAAgPQAAgPAGgIQAFgGAJAAQAHAAAEAEQAEADABAHIgHABQgBgFgCgBQgDgDgEAAIgFABQgDADgCAEQgCAFAAAJQADgEADgCIAHgCQAHAAAFAFQAFAEAAAJQAAAFgDAFQgCAEgEADQgEACgFAAQgIAAgGgGgAgGABQgEADAAAGIABAHQACADADACQADABACAAQAEAAADgDQAEgEAAgGQAAgGgEgDQgDgDgEAAQgFAAgCADg");
	this.shape_6.setTransform(121.1,-145.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMAaQgEgEgBgHIAHgBQABAFACACQADACADAAQADAAACgBIAEgEIADgHIABgIIAAgCQgCAEgEACQgEACgDAAQgHAAgFgFQgFgEAAgJQAAgJAFgFQAFgFAIAAQAFAAAEADQAFADACAFQADAGAAAKQAAAKgDAHQgCAGgFAEQgEADgGAAQgGAAgFgDgAgHgTQgEAEAAAGQAAAGAEADQADADAEAAQAFAAADgDQADgDAAgGQAAgGgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_7.setTransform(116.6,-145.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgJAcQAAgHACgJQADgKAEgIQAEgIAFgHIgbAAIAAgGIAkAAIAAAFQgFAGgGAKQgFAIgCALQgCAHAAAIg");
	this.shape_8.setTransform(112.2,-145.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgJAcQAAgHACgJQADgKAEgIQAEgIAGgHIgbAAIAAgGIAkAAIAAAFQgGAGgFAKQgGAIgCALQgCAHgBAIg");
	this.shape_9.setTransform(107.8,-145.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_10.setTransform(103.1,-145.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgMAXQgFgHgBgQQAAgJACgGQADgHADgDQAEgDAGAAQAEAAAEACQADABADAEIADAIIABANQAAAKgCAGQgBAGgFAEQgEADgGAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQAEgFAAgOQAAgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_11.setTransform(98.8,-145.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_12.setTransform(94.1,-145.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_13.setTransform(87.1,-145.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAIABQAEABAEACQADACABADQACAEAAAEQAAAHgFAEQgFAFgMAAIgNAAIAAAYgAgNAAIANAAQAIAAADgDQADgDAAgFQAAgDgBgDQgDgCgDgBIgHgBIgNAAg");
	this.shape_14.setTransform(81.6,-145.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgSAdIAAg5IAlAAIAAAHIgdAAIAAAyg");
	this.shape_15.setTransform(77,-145.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_16.setTransform(71.4,-145.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgNAYQgFgEAAgHIAHgBQABAGADACQADADAEAAQAFAAADgEQAEgEgBgGQABgGgEgDQgDgDgFAAQgDAAgDACQgDABgBACIgHgBIAGgdIAbAAIAAAHIgWAAIgDAPQAGgDAEAAQAHAAAFAFQAGAEAAAIQAAAIgEAGQgGAHgJAAQgHAAgGgFg");
	this.shape_17.setTransform(63.9,-145.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_18.setTransform(59.1,-145.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgMAXQgGgHAAgQQABgJACgGQACgHADgDQAFgDAFAAQAEAAAEACQADABADAEIADAIIACANQgBAKgCAGQgCAGgDAEQgFADgGAAQgIAAgEgGgAgHgSQgDAFgBANQABAOADAFQADAEAEAAQAFAAADgEQADgFABgOQgBgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_19.setTransform(54.9,-145.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgSAdIAAgFIAFgIIAKgIQAIgIADgEQADgEABgEQAAgEgEgDQgDgDgEAAQgFAAgCADQgEADAAAGIgGgBQAAgIAFgEQAEgFAIAAQAIAAAFAFQAFAEAAAHIgCAHQgBADgDADQgDAEgIAGIgHAHIgEAEIAcAAIAAAHg");
	this.shape_20.setTransform(50.4,-145.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_21.setTransform(45.7,-145.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgNAYQgEgEgBgHIAHgBQABAGADACQADADAEAAQAFAAADgEQADgEAAgGQAAgGgDgDQgDgDgFAAQgDAAgDACQgDABgCACIgGgBIAFgdIAcAAIAAAHIgWAAIgDAPQAGgDAEAAQAIAAAEAFQAGAEAAAIQAAAIgFAGQgFAHgJAAQgHAAgGgFg");
	this.shape_22.setTransform(41.6,-145.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_23.setTransform(37,-145.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgMAXQgFgHgBgQQAAgJACgGQADgHADgDQAEgDAGAAQAEAAAEACQADABADAEIADAIIABANQAAAKgCAGQgBAGgFAEQgEADgGAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQAEgFAAgOQAAgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_24.setTransform(32.7,-145.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgKAcQABgHACgJQACgKAFgIQAEgIAFgHIgbAAIAAgGIAkAAIAAAFQgFAGgGAKQgFAIgCALQgCAHgBAIg");
	this.shape_25.setTransform(28.3,-145.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgJAcQgBgHADgJQADgKAEgIQAEgIAGgHIgbAAIAAgGIAjAAIAAAFQgFAGgFAKQgGAIgCALQgCAHAAAIg");
	this.shape_26.setTransform(23.8,-145.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_27.setTransform(16.5,-145.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_28.setTransform(10.7,-145.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAQAdIAAgsIgeAsIgIAAIAAg5IAHAAIAAAtIAegtIAHAAIAAA5g");
	this.shape_29.setTransform(4.9,-145.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_30.setTransform(259.8,-150.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgNAYQgFgFAAgHQAAgGADgEQADgCAFgCQgEgBgDgDQgBgDgBgEQABgHAEgEQAEgEAHAAQAHAAAFAEQAFAEAAAHQAAAEgDADQgBADgFABQAGACACADQADAEAAAFQAAAHgFAFQgGAFgIAAQgHAAgGgFgAgHAEQgDADAAAFIABAGIAEAEIAFABQAFAAAEgDQADgDAAgFQAAgFgDgDQgEgEgFAAQgEAAgDAEgAgGgUQgCADAAADQAAAEACADQADADADAAQAEAAADgDQACgDABgDQgBgEgCgDQgDgCgEAAQgDAAgDACg");
	this.shape_31.setTransform(256.4,-153.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_32.setTransform(250.9,-150.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAQAbIAAgMIgfAAIAAAMIgGAAIAAgSIADAAQAIgJAAgaIAbAAIAAAjIAFAAIAAASgAgLAJIAVAAIAAgdIgOAAQgBAUgGAJg");
	this.shape_33.setTransform(247.3,-151.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgDAHQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_34.setTransform(241.8,-150.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAKAdIAAgfIgTAfIgHAAIAAgpIAHAAIAAAeIATgeIAHAAIAAApgAgGgUQgEgDAAgFIAFAAIACAFIADABIAFgBIACgFIAFAAQAAAFgEADQgDACgEAAQgFAAgCgCg");
	this.shape_35.setTransform(238.5,-153.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgKAEIAAgHIAVAAIAAAHg");
	this.shape_36.setTransform(234.9,-152.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgSAdIAAgFIAFgIIAJgIQAJgIADgEQADgEABgEQAAgEgEgDQgDgDgEAAQgFAAgCADQgEADAAAGIgGgBQAAgIAFgEQAEgFAIAAQAIAAAFAFQAFAEAAAHIgCAHQgBADgDADQgDAEgIAGIgHAHIgEAEIAcAAIAAAHg");
	this.shape_37.setTransform(231.3,-153.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAKAdIAAgfIgSAfIgIAAIAAgpIAHAAIAAAeIATgeIAHAAIAAApgAgGgUQgDgDgBgFIAEAAIADAFIADABIAFgBIACgFIAFAAQAAAFgDADQgEACgEAAQgFAAgCgCg");
	this.shape_38.setTransform(224.8,-153.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAKAVIAAgfIgTAfIgHAAIAAgpIAHAAIAAAfIASgfIAIAAIAAApg");
	this.shape_39.setTransform(220.3,-152.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAIAVIgIgNIgDgFIgEgBIAAATIgHAAIAAgpIAHAAIAAASQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQABgBACgHIADgGIADgCIAFgBIACAAIAAAGIgCAAIgEABIgCAFIgDAGIgDACQADABAFAHIAHANg");
	this.shape_40.setTransform(216.6,-152.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_41.setTransform(212.7,-152.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAKAVIAAgTIgTAAIAAATIgHAAIAAgpIAHAAIAAASIATAAIAAgSIAHAAIAAApg");
	this.shape_42.setTransform(208.4,-152.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAKAVIAAgfIgSAfIgIAAIAAgpIAHAAIAAAfIATgfIAHAAIAAApg");
	this.shape_43.setTransform(204,-152.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAXAbIAAgMIgzAAIAAgpIAHAAIAAAjIAQAAIAAgjIAGAAIAAAjIAQAAIAAgjIAHAAIAAAjIAFAAIAAASg");
	this.shape_44.setTransform(198.6,-151.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgNAQQgFgFgBgLQABgLAGgFQAGgFAGAAQAIAAAGAGQAGAGgBAJQAAAHgCAFQgDAFgEACQgEADgGAAQgHAAgGgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAGAAADgEQAEgEAAgIQAAgHgEgEQgDgEgGAAQgEAAgEAEg");
	this.shape_45.setTransform(192.9,-152.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAIABQAFABACACQADACACADQACAEAAAEQAAAHgFAEQgFAFgLAAIgOAAIAAAYgAgNAAIAOAAQAHAAADgDQADgDAAgFQAAgDgBgDQgCgCgEgBIgGgBIgOAAg");
	this.shape_46.setTransform(188.1,-153.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AARAbIAAgMIggAAIAAAMIgGAAIAAgSIAEAAQAHgJAAgaIAcAAIAAAjIAEAAIAAASgAgLAJIAWAAIAAgdIgQAAQAAAUgGAJg");
	this.shape_47.setTransform(180.7,-151.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgPAJIAHgBQAAAEADACQADACADAAQADAAACgCQADgCAAgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAIgFAAIgCAAIAAgFIAFAAIADgCQABAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAQgCgCgDAAQgEAAgDAHIgHgBQAEgMALAAQAGAAAEAEQAEAEgBAFQAAAFgEADQACAAACADQACADAAADQAAAGgEADQgFAEgGAAQgOAAgCgNg");
	this.shape_48.setTransform(176.6,-152.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgNAQQgFgGAAgKQAAgJAFgGQAGgGAIAAQAHAAAGAGQAFAGAAAJIAAACIgeAAQABAHADADQAEAEAEAAQADAAAEgCQACgCABgFIAIABQgCAHgFADQgEAEgHAAQgIAAgGgGgAgGgMQgEAEgBAFIAXAAQAAgFgDgDQgEgEgEAAQgFAAgCADg");
	this.shape_49.setTransform(172.6,-152.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgNAQQgFgFgBgLQABgLAGgFQAGgFAGAAQAIAAAGAGQAGAGgBAJQAAAHgCAFQgDAFgEACQgEADgGAAQgHAAgGgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAGAAADgEQAEgEAAgIQAAgHgEgEQgDgEgGAAQgEAAgEAEg");
	this.shape_50.setTransform(168.1,-152.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgRAdIAAg4IAGAAIAAAFQADgDADgCQACgBADAAQAFAAAFADQAEACABAFQADAFAAAGQAAAHgDAEQgCAFgEACQgEADgFAAQgDAAgCgBQgDgCgCgCIAAAUgAgHgSQgEAEAAAIQAAAHAEAEQADADAEAAQAEAAADgEQAEgEAAgHQAAgIgEgEQgDgEgEAAQgEAAgDAFg");
	this.shape_51.setTransform(163.8,-151.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAOAdIAAgyIgcAAIAAAyIgIAAIAAg5IAsAAIAAA5g");
	this.shape_52.setTransform(158.6,-153.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgDAHQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_53.setTransform(152.4,-150.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgOASQgEgDAAgFQAAgDACgDQAAgCADgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgCACQgDACgBAEIgHgBIADgHQADgDAEgBQAEgCAEAAQAFAAAEACQADABABACIACAFIABAGIAAAIIABANIABAFIgHAAQgCgCABgDIgIAEIgHACQgHAAgDgEgAgBADIgGABIgDACIgBAEQAAAAABABQAAABAAAAQAAABABAAQAAABABAAQABACAFAAQADAAADgCQADgBACgDQABgDAAgEIAAgDIgLADg");
	this.shape_54.setTransform(149.1,-152.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgQAVIAAgpIAQAAIAIABQADABACADQACADAAADIgBAFIgEAEQADAAACADQACACAAAEQAAAGgFADQgDADgIAAgAgJAPIAJAAIAIgBQACgCAAgDIgBgEQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAIgFAAIgJAAgAgJgCIAIAAIAEgBIAEgCQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgDgCgCIgHgBIgIAAg");
	this.shape_55.setTransform(144.9,-152.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAIAVIgIgNIgDgFIgEgBIAAATIgHAAIAAgpIAHAAIAAASQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQABgBACgHIADgGIADgCIAFgBIACAAIAAAGIgCAAIgEABIgCAFIgDAGIgDACQADABAFAHIAHANg");
	this.shape_56.setTransform(141.1,-152.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_57.setTransform(137.2,-152.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgNAQQgGgFAAgLQAAgLAHgFQAGgFAGAAQAIAAAGAGQAFAGABAJQgBAHgCAFQgCAFgFACQgEADgGAAQgIAAgFgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQADgEAAgIQAAgHgDgEQgDgEgGAAQgEAAgDAEg");
	this.shape_58.setTransform(132.9,-152.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAUAdIAAgvIgRAvIgFAAIgRgwIAAAwIgHAAIAAg5IALAAIAOAoIABAJIADgKIAOgnIAKAAIAAA5g");
	this.shape_59.setTransform(127.3,-153.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_60.setTransform(120.8,-150.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgLAVIAAgpIAXAAIAAAGIgQAAIAAAjg");
	this.shape_61.setTransform(118.4,-152.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgDAHQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_62.setTransform(113.4,-150.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgMAaQgEgEgBgHIAHgBQABAFACACQADACADAAQADAAACgBIAEgEIADgHIABgIIAAgCQgCAEgEACQgEACgDAAQgHAAgFgFQgFgEAAgJQAAgJAFgFQAFgFAIAAQAFAAAEADQAFADACAFQADAGAAAKQAAAKgDAHQgCAGgFAEQgEADgGAAQgGAAgFgDgAgHgTQgEAEAAAGQAAAGAEADQADADAEAAQAFAAADgDQADgDAAgGQAAgGgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_63.setTransform(110.1,-153.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_64.setTransform(105.3,-153.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_65.setTransform(101,-153.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgMAYQgFgEgBgHIAHgBQABAGADACQADADAEAAQAEAAAEgEQADgEABgGQgBgGgDgDQgEgDgEAAQgDAAgDACQgDABgCACIgGgBIAFgdIAcAAIAAAHIgWAAIgDAPQAFgDAFAAQAIAAAEAFQAGAEAAAIQAAAIgFAGQgFAHgJAAQgIAAgEgFg");
	this.shape_66.setTransform(96.8,-153);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_67.setTransform(92,-153.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_68.setTransform(87.5,-153.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgBASIAKgSIgKgRIAFAAIANARIgNASgAgQASIALgSIgLgRIAGAAIALARIgLASg");
	this.shape_69.setTransform(81.2,-152.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_70.setTransform(77.9,-150.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgRAdIAAg5IAkAAIAAAHIgdAAIAAAyg");
	this.shape_71.setTransform(74.9,-153.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_72.setTransform(71.4,-150.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_73.setTransform(67.3,-153.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_74.setTransform(63.4,-150.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgMAZQgGgDgDgHQgDgHAAgIQAAgIADgHQAEgHAGgEQAGgDAHAAQAIAAAGAFQAGAEACAIIgHABQgCgFgEgEQgEgCgFAAQgGgBgEAEQgFADgCAFQgBAFAAAGQAAAHACAFQACAFAEAEQAFACAEAAQAGAAAFgDQAEgFACgHIAHADQgCAIgGAFQgGAFgJABQgJAAgFgFg");
	this.shape_75.setTransform(59.3,-153.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAQAdIAAgsIgeAsIgHAAIAAg5IAGAAIAAAtIAegtIAIAAIAAA5g");
	this.shape_76.setTransform(51.4,-153.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AATAkIAAgOIglAAIAAAOIgHAAIAAgVIAFAAQAHgKAAgfIAAgIIAhAAIAAAxIAGAAIAAAVgAgGgYIgBATQgCAMgEAIIAaAAIAAgrIgTAAg");
	this.shape_77.setTransform(45.6,-152.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_78.setTransform(40.2,-153.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AASAdIgHgSIgXAAIgGASIgIAAIAWg5IAHAAIAYA5gAgDgLIgGAQIASAAIgGgPIgDgLIgDAKg");
	this.shape_79.setTransform(34.6,-153.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AALAdIgKgQQgDgGgDgDQgDgCgEAAIAAAbIgHAAIAAg5IAHAAIAAAaQAGAAABgCQADgCACgIIAEgIIAFgEQACgCADAAIAGABIAAAGIgCAAIgCAAQgDAAgCACIgFAHQgCAIgCABIgEADQAEABAGAJIAMATg");
	this.shape_80.setTransform(29.9,-153.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AALASIgLgSIALgRIAGAAIgKARIAKASgAgDASIgNgSIANgRIAFAAIgJARIAJASg");
	this.shape_81.setTransform(25,-152.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_82.setTransform(17.5,-153.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_83.setTransform(11.3,-153.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_84.setTransform(5.1,-153.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dfgdfggg, new cjs.Rectangle(0,-159.4,286,20.8), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape.setTransform(150,125,1.25,0.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,300,250), null);


(lib.aaa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Mesh_1();
	this.instance.parent = this;
	this.instance.setTransform(0,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.aaa, new cjs.Rectangle(0,-1,23,2), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.text3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1D1D1B").s().p("AggAlQgOgPAAgWQAAgVANgPQAPgPATAAQAWAAAMAPQAMAPAAAVIAAAGIhOAAQACAPAJAJQALAJAMAAQARAAAPgOIAJAIQgRATgYAAQgUAAgPgPgAgVgdQgIAJgCAPIA/AAQAAgPgKgJQgHgJgOAAQgMAAgKAJg");
	this.shape_32.setTransform(115.5,9.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1D1D1B").s().p("AAcAyIAAgsIg4AAIAAAsIgPAAIAAhjIAPAAIAAArIA4AAIAAgrIAPAAIAABjg");
	this.shape_33.setTransform(103.7,9.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1D1D1B").s().p("AAdBGIAAhOIg6BOIgOAAIAAhjIAPAAIAABOIA6hOIAOAAIAABjgAgSgyQgHgGgCgLIAKgCQAFAOAMAAQANAAADgOIALACQgDAMgHAFQgHAHgKAAQgLAAgHgHg");
	this.shape_34.setTransform(91.6,7.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1D1D1B").s().p("AggArQgLgHAAgQQAAgPAMgIQALgIAUAAQAOAAAPAEIAAgDQAAgNgIgHQgHgHgOAAQgNAAgRAHIgEgMQARgJASABQAWAAAKALQALAKAAASIAAA9IgPAAIAAgQQgNARgWABQgQAAgKgJgAgUAFQgIAGAAAJQAAAJAHAFQAHAFALABQANAAAKgIQAJgHAAgMIAAgJQgPgEgOAAQgMAAgIAFg");
	this.shape_35.setTransform(79.7,9.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1D1D1B").s().p("AgnAlIAHgLQAQANAQAAQALAAAHgFQAHgEAAgJQAAgHgHgFQgGgEgMAAIgMAAIAAgMIAMAAQAKABAGgFQAHgFAAgHQAAgHgHgEQgFgEgKAAQgQgBgOAKIgHgJQAQgNAWAAQAQAAAKAHQAKAIAAALQAAARgQAGQATAFAAATQgBAMgKAJQgLAJgSAAQgWAAgSgPg");
	this.shape_36.setTransform(69.3,9.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1D1D1B").s().p("AAeAyIAAhOIg7BOIgOAAIAAhjIAOAAIAABOIA7hOIAOAAIAABjg");
	this.shape_37.setTransform(58.5,9.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1D1D1B").s().p("AAoA+IAAgZIhQAAIgCAZIgMAAIAAgmIALAAQANgYAAgsIAAgRIBGAAIAABVIAPAAIgDAmgAgQgiQAAAlgMAVIA1AAIAAhIIgpAAg");
	this.shape_38.setTransform(46.5,10.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#1D1D1B").s().p("AAeAyIAAhOIg7BOIgOAAIAAhjIAPAAIAABOIA6hOIAOAAIAABjg");
	this.shape_39.setTransform(28.9,9.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#1D1D1B").s().p("AAfAyIgfgpIgeApIgRAAIAngyIglgxIARAAIAcAnIAegnIAQAAIgmAxIAoAyg");
	this.shape_40.setTransform(12.9,9.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#1D1D1B").s().p("AAdAyIAAglIgbAAIgbAlIgSAAIAegnQgLgDgIgHQgHgHAAgMQAAgOAKgIQAKgJARAAIAuAAIAABjgAgSgfQgGAFAAAJQAAAJAGAFQAHAEALAAIAdAAIAAglIgeAAQgLAAgGAFg");
	this.shape_41.setTransform(1.3,9.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#1D1D1B").s().p("AAdAyIAAhOIg6BOIgOAAIAAhjIAPAAIAABOIA6hOIAOAAIAABjg");
	this.shape_42.setTransform(-10,9.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#1D1D1B").s().p("AghAyIAAhjIBDAAIAAANIg0AAIAABWg");
	this.shape_43.setTransform(-19.9,9.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#1D1D1B").s().p("AgkAlQgPgPAAgWQAAgUAPgPQAPgQAVAAQAWAAAPAQQAPAPAAAUQAAAWgPAPQgPAPgWAAQgVAAgPgPgAgagbQgKAMAAAPQAAAQALALQAKAMAPAAQAPAAALgLQALgLAAgRQAAgPgLgMQgLgLgPABQgPgBgLALg");
	this.shape_44.setTransform(-31.2,9.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1D1D1B").s().p("AgyAxIACgNIAHABIAHgBQADgBADgEQADgEACgJIADgWQABgQAAgWIAAgHIBGAAIAABiIgPAAIAAhVIgpAAIAAABQAAAagCANQgBAOgDAKQgDAJgEAGQgEAEgFACQgEABgHABIgMgCg");
	this.shape_45.setTransform(-44.1,9.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1D1D1B").s().p("AgkAlQgPgPAAgWQAAgVAPgOQAQgQAUAAQAWAAAPAQQAPAOAAAVQAAAWgPAPQgPAPgWAAQgWAAgOgPgAgagbQgKALAAAQQAAAQALALQAKAMAPAAQAPAAAMgLQAKgLgBgRQAAgPgKgMQgKgLgQABQgPgBgLALg");
	this.shape_46.setTransform(-55.2,9.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#1D1D1B").s().p("AAdAyIAAgsIg4AAIAAAsIgQAAIAAhjIAQAAIAAArIA4AAIAAgrIAPAAIAABjg");
	this.shape_47.setTransform(-67.4,9.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1D1D1B").s().p("AAfAyIgfgpIgeApIgRAAIAngyIglgxIARAAIAcAnIAegnIAQAAIgmAxIAoAyg");
	this.shape_48.setTransform(-79,9.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#1D1D1B").s().p("AggAlQgOgOAAgXQAAgUAOgPQAOgQATAAQAVAAANAPQAMAQAAAVIAAAFIhOAAQACAQAJAIQALAJAMAAQARAAAOgNIAKAIQgRASgYAAQgVAAgOgPgAgUgdQgJAKgCAOIA/AAQgBgPgIgIQgJgKgOAAQgLAAgJAJg");
	this.shape_49.setTransform(-89.8,9.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#1D1D1B").s().p("AgHAyIAAhWIgjAAIAAgNIBVAAIAAANIgjAAIAABWg");
	this.shape_50.setTransform(-99.9,9.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#1D1D1B").s().p("AgqAyIAAhjIAvAAQAPAAAIAHQAJAHAAALQAAAQgQAHQAWAFAAATQAAAMgKAHQgJAIgRAAgAgcAlIAhAAQAKAAAHgEQAFgFAAgIQAAgHgGgEQgHgEgLAAIgfAAgAgcgGIAeAAQAKAAAFgEQAGgFAAgHQgBgGgFgEQgFgEgKAAIgeAAg");
	this.shape_51.setTransform(-115.8,9.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#1D1D1B").s().p("AAqAyIAAhjIAPAAIAABjgAg4AyIAAhjIAPAAIAAAlIAbAAQAQABALAHQALAHAAAOQAAAPgKAJQgKAJgQAAgAgpAkIAbAAQAMABAFgFQAGgFAAgJQAAgIgGgFQgGgFgLAAIgbAAg");
	this.shape_52.setTransform(67.8,-12.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#1D1D1B").s().p("AAoA+IAAgYIhPAAIgDAYIgMAAIAAgmIAKAAQAOgYAAgsIAAgRIBGAAIAABVIAPAAIgDAmgAgQgiQAAAkgMAWIA1AAIAAhIIgpAAg");
	this.shape_53.setTransform(54.6,-11.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#1D1D1B").s().p("AAdAyIAAgsIg5AAIAAAsIgPAAIAAhjIAPAAIAAArIA5AAIAAgrIAPAAIAABjg");
	this.shape_54.setTransform(42.9,-12.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#1D1D1B").s().p("AgfAmQgPgPAAgXQAAgUAOgQQAOgPATAAQAWAAALAPQANAOAAAXIAAAFIhOAAQABAQAKAIQALAJAMAAQATAAAMgOIAKAIQgRATgYAAQgUAAgOgOgAgUgdQgKAKgBAOIA/AAQAAgOgJgKQgJgKgOAAQgLAAgJAKg");
	this.shape_55.setTransform(31.2,-12.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#1D1D1B").s().p("AgxBCIAAiBIAOAAIAAAUQAPgWAXAAQASAAAPAOQAOAOAAAYQAAAWgOAOQgPAPgSAAQgXAAgPgWIAAAygAgYgpQgLALAAARQAAAQALAKQAKALAOAAQAPAAAKgKQAKgKAAgRQAAgSgKgKQgLgLgOAAQgOAAgKALg");
	this.shape_56.setTransform(19.4,-11.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#1D1D1B").s().p("AgHAyIAAhWIgjAAIAAgNIBVAAIAAANIgjAAIAABWg");
	this.shape_57.setTransform(7.9,-12.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#1D1D1B").s().p("AAkAyIAAhLIgkAxIgkgxIAABLIgOAAIAAhjIAOAAIAkA0IAlg0IAOAAIAABjg");
	this.shape_58.setTransform(-9.9,-12.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#1D1D1B").s().p("AggA1QgOgOAAgXQAAgVANgPQAOgPAUgBQAVABANAPQAMAOAAAWIAAAGIhOAAQACAQAKAHQAJAKANgBQASABAOgOIAJAIQgRASgZABQgTAAgPgPgAgVgNQgIAJgCANIA/AAQgBgNgJgJQgIgKgOAAQgLAAgKAKgAAIgwIAAgSIARAAIAAASgAgZgwIAAgSIARAAIAAASg");
	this.shape_59.setTransform(-22.3,-14);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#1D1D1B").s().p("AggArQgLgIAAgPQAAgPAMgIQALgIAUAAQANAAAQAEIAAgDQAAgOgIgGQgIgHgNAAQgOAAgQAHIgEgMQATgJAQAAQAVAAALALQALALAAATIAAA8IgPAAIAAgPQgNARgWAAQgPAAgLgJgAgUAFQgIAGAAAJQAAAJAHAFQAIAGAKAAQANAAAKgIQAJgHAAgMIAAgJQgOgEgPAAQgMAAgIAFg");
	this.shape_60.setTransform(-33.9,-12.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#1D1D1B").s().p("AApA+IAAgYIhQAAIgDAYIgMAAIAAgmIALAAQANgYAAgsIAAgRIBGAAIAABVIAPAAIgDAmgAgPgiQAAAlgNAVIA1AAIAAhIIgoAAg");
	this.shape_61.setTransform(-45.1,-11.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#1D1D1B").s().p("AggArQgLgIAAgPQAAgPAMgIQAMgIATAAQANAAAQAEIAAgDQAAgNgHgHQgJgHgNAAQgOAAgPAHIgFgMQAUgJAPAAQAUAAANALQAKALAAATIAAA8IgPAAIAAgPQgNARgWAAQgPAAgLgJgAgUAFQgIAGAAAJQAAAJAIAFQAGAGALAAQAOAAAIgIQAKgHAAgMIAAgJQgPgEgOAAQgMAAgIAFg");
	this.shape_62.setTransform(-56.6,-12.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#1D1D1B").s().p("AgzAwIAJgLQAVATAaAAQAMABAKgIQAJgHAAgMQAAgMgKgGQgJgHgRABIgOAAIAAgMIAOAAQAOAAAKgHQAJgHAAgMQAAgJgJgIQgJgGgNAAQgWAAgQAPIgJgLQAKgJAMgEQALgEAPgBQATABANAJQANALAAAPQAAAXgZAJQANACAIAJQAIAJAAAMQAAARgNAKQgNAMgVAAQgggBgYgVg");
	this.shape_63.setTransform(-68.3,-14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text3_1, new cjs.Rectangle(-120.1,-21.2,240.3,38.3), null);


(lib.text2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1D1D1B").s().p("AAdAyIAAhOIg6BOIgOAAIAAhjIAOAAIAABOIA7hOIAOAAIAABjg");
	this.shape_34.setTransform(94.4,-9.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1D1D1B").s().p("AgxAxIABgMIAIABQAEAAACgBQADgBADgFQAEgGABgGIADgXIABglIAAgIIBGAAIAABiIgPAAIAAhWIgoAAIAAADQAAARgCAVQgCAPgDAKQgDAJgEAEQgEAGgFABQgFACgGgBQgFABgGgCg");
	this.shape_35.setTransform(81.6,-9.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1D1D1B").s().p("AgfAlQgPgOAAgXQAAgVAOgPQAOgPATAAQAWAAALAPQANAOAAAWIAAAGIhOAAQACAPAJAJQAKAJANAAQATAAAMgOIAJAIQgQATgYAAQgUAAgOgPgAgVgdQgIAJgCAPIA/AAQAAgNgJgLQgJgKgNABQgMgBgKAKg");
	this.shape_36.setTransform(70.9,-9.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1D1D1B").s().p("AAoA+IAAgZIhQAAIgCAZIgMAAIAAgmIALAAQANgYAAgsIAAgRIBFAAIAABVIAQAAIgDAmgAgQgiQAAAkgMAWIA1AAIAAhIIgpAAg");
	this.shape_37.setTransform(59.3,-8.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1D1D1B").s().p("AgkAkQgPgOAAgWQAAgUAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAUQAAAWgPAOQgPAQgWAAQgVAAgPgQgAgagaQgKALABAPQAAARAKALQAKALAPgBQAQABAKgLQALgLAAgRQAAgPgLgLQgKgMgQAAQgQAAgKAMg");
	this.shape_38.setTransform(47.5,-9.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#1D1D1B").s().p("AAkAyIAAhLIgkAxIgkgxIAABLIgOAAIAAhjIAOAAIAkA0IAlg0IAOAAIAABjg");
	this.shape_39.setTransform(34.9,-9.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#1D1D1B").s().p("AAkAyIAAhLIgkAxIgkgxIAABLIgOAAIAAhjIAOAAIAkA0IAlg0IAOAAIAABjg");
	this.shape_40.setTransform(10,-9.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#1D1D1B").s().p("AggAlQgOgOAAgXQAAgVAOgPQANgPAUAAQAVAAANAPQAMAOAAAWIAAAGIhOAAQACAPAJAJQALAJAMAAQASAAANgOIAKAIQgRATgYAAQgUAAgPgPgAgUgdQgJAJgCAPIA/AAQgBgOgIgKQgIgKgPABQgLgBgJAKg");
	this.shape_41.setTransform(-2.5,-9.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#1D1D1B").s().p("AggAsQgLgJAAgPQAAgPAMgIQALgIAUAAQAQAAANAEIAAgDQAAgOgIgGQgIgHgNAAQgNAAgRAHIgEgMQATgJAQAAQAWABAKAKQALALAAATIAAA7IgPAAIAAgOQgNARgWAAQgQgBgKgHgAgUAFQgIAFAAAKQAAAJAHAGQAIAFAKAAQANAAAKgHQAJgIAAgMIAAgKQgPgDgOAAQgMAAgIAFg");
	this.shape_42.setTransform(-14.1,-9.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#1D1D1B").s().p("AghAyIAAhjIBDAAIAAANIg0AAIAABWg");
	this.shape_43.setTransform(-22.5,-9.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#1D1D1B").s().p("AggAsQgLgJAAgPQAAgPAMgIQALgIAUAAQAQAAANAEIAAgDQAAgOgIgGQgIgHgNAAQgNAAgRAHIgEgMQATgJAQAAQAWABAKAKQALALAAATIAAA7IgPAAIAAgOQgNARgWAAQgQgBgKgHgAgUAFQgIAFAAAKQAAAJAHAGQAIAFAKAAQANAAAKgHQAJgIAAgMIAAgKQgPgDgOAAQgMAAgIAFg");
	this.shape_44.setTransform(-33.4,-9.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1D1D1B").s().p("AgyAxIACgMIAHABIAHgBQADgCADgEQADgEACgIIADgXQABgPAAgWIAAgIIBGAAIAABiIgPAAIAAhWIgpAAIAAADQAAAZgCANIgEAZQgDAJgEAEQgEAGgFABQgFACgGgBQgGABgGgCg");
	this.shape_45.setTransform(-45.4,-9.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1D1D1B").s().p("AAoA+IAAgZIhPAAIgDAZIgMAAIAAgmIAKAAQAOgYAAgsIAAgRIBGAAIAABVIAPAAIgDAmgAgQgiQAAAkgMAWIA1AAIAAhIIgpAAg");
	this.shape_46.setTransform(-56.3,-8.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#1D1D1B").s().p("AggAlQgOgOAAgXQAAgVAOgPQANgPATAAQAWAAAMAPQANAOAAAWIAAAGIhOAAQABAPALAJQAKAJAMAAQASAAANgOIAJAIQgQATgYAAQgVAAgOgPgAgUgdQgKAJgBAPIA/AAQgCgOgHgKQgJgKgOABQgLgBgJAKg");
	this.shape_47.setTransform(-67.6,-9.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1D1D1B").s().p("AgxBCIAAiBIAPAAIAAAUQAPgWAWAAQATAAAOAOQAOAOAAAYQAAAWgOAOQgOAOgTAAQgXAAgOgVIAAAygAgYgpQgLALAAARQAAAQALAKQALALANAAQAPAAAKgKQAKgLAAgRQAAgRgKgKQgKgLgPAAQgMAAgMALg");
	this.shape_48.setTransform(-79.5,-8.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#1D1D1B").s().p("AAmBDIAAh4IhLAAIAAB4IgPAAIAAiFIBpAAIAACFg");
	this.shape_49.setTransform(-93.4,-11.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#1D1D1B").s().p("AAdAyIAAhOIg6BOIgOAAIAAhjIAPAAIAABOIA6hOIAOAAIAABjg");
	this.shape_50.setTransform(110,11.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#1D1D1B").s().p("AAbAyIgjguIgUAVIAAAZIgQAAIAAhjIAQAAIAAA4IA1g4IATAAIgqArIArA4g");
	this.shape_51.setTransform(99.1,11.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#1D1D1B").s().p("AgxBCIAAiBIAOAAIAAAUQAPgWAXAAQASAAAPAOQAOAOAAAYQAAAWgOAOQgPAPgSAAQgXAAgPgVIAAAxgAgYgpQgLALAAARQAAAQALALQAKAKAOAAQAPAAAKgKQAKgKAAgRQAAgSgKgKQgLgLgOAAQgOAAgKALg");
	this.shape_52.setTransform(86.9,13.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#1D1D1B").s().p("AgkAlQgPgPAAgWQAAgUAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAUQAAAVgPAQQgPAPgWAAQgVAAgPgPgAgagbQgKAMAAAPQAAARALAKQAKAMAPAAQAQAAAKgMQALgKAAgRQAAgPgLgMQgLgLgPAAQgPAAgLALg");
	this.shape_53.setTransform(74,11.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#1D1D1B").s().p("AgkA3QgOgPAAgaIACgdQACgKACgEIAGgMQAGgGAFgDQAHgFAIgBIA2gNIADANIg1ANQgQAEgFAIQgHAIgBAPQAMgVAcAAQATAAAPAOQAOAOAAAUQAAAWgPAOQgOAPgWAAQgWAAgOgPgAgYgGQgKAJAAARQAAAPAKALQALALANAAQAPAAALgLQAKgLAAgPQAAgQgLgKQgLgLgOAAQgOAAgKALg");
	this.shape_54.setTransform(61.7,10);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#1D1D1B").s().p("AgtA8IAFgLQAHADAJAAQAGAAAFgEQAFgEAEgKIgthiIAQAAIAjBSIAghSIAQAAIgqBlQgGAPgHAHQgHAGgMAAQgLAAgKgFg");
	this.shape_55.setTransform(49.6,13.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#1D1D1B").s().p("AgqAyIAAhjIAvAAQAOAAAKAHQAJAHAAALQAAARgRAGQAWAFAAATQAAAMgKAIQgJAHgRAAgAgbAlIAgAAQALAAAGgEQAGgFAAgIQAAgHgHgEQgFgEgNAAIgeAAgAgbgGIAdAAQAJAAAGgEQAGgEAAgIQAAgGgGgEQgFgEgJAAIgeAAg");
	this.shape_56.setTransform(30.2,11.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#1D1D1B").s().p("AgkAlQgPgPAAgWQAAgUAPgPQAPgQAVAAQAWAAAPAPQAPAQAAAUQAAAWgPAPQgOAPgXAAQgVAAgPgPgAgZgaQgLAKAAAQQAAAQALAMQALAKAOABQAQgBAKgKQALgMAAgQQAAgPgLgLQgKgMgQAAQgPAAgKAMg");
	this.shape_57.setTransform(18,12);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#1D1D1B").s().p("AAcAyIAAhWIg3AAIAABWIgPAAIAAhjIBVAAIAABjg");
	this.shape_58.setTransform(5.8,11.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#1D1D1B").s().p("AAdAyIAAhOIg6BOIgOAAIAAhjIAPAAIAABOIA6hOIAOAAIAABjg");
	this.shape_59.setTransform(-6.2,11.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#1D1D1B").s().p("AgHAyIAAhWIgjAAIAAgNIBVAAIAAANIgjAAIAABWg");
	this.shape_60.setTransform(-17.1,11.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#1D1D1B").s().p("AAfAyIgfgpIgeApIgRAAIAngyIglgxIARAAIAcAnIAegnIAQAAIglAxIAnAyg");
	this.shape_61.setTransform(-35.4,11.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#1D1D1B").s().p("AggAmQgOgOAAgYQAAgVANgPQAOgPATAAQAWAAANAPQAMAOAAAXIAAAFIhOAAQABAQALAIQAKAJAMAAQASAAAOgOIAJAIQgRATgZAAQgTAAgPgOgAgUgdQgKAKgBAOIA/AAQgCgPgHgJQgIgKgPAAQgMAAgIAKg");
	this.shape_62.setTransform(-46.2,12);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#1D1D1B").s().p("AgeAlQgPgPAAgWQAAgUAPgPQAPgQAUAAQAXAAARASIgJAKQgOgPgRAAQgOAAgKAMQgLALAAAPQAAAQALAMQAKAKAPABQAQgBAOgPIAKAKQgSATgXAAQgUAAgPgPg");
	this.shape_63.setTransform(-57.3,12);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#1D1D1B").s().p("AgqAyIAAhjIAvAAQAOAAAKAHQAJAHAAALQAAARgRAGQAWAFAAATQAAAMgKAIQgJAHgRAAgAgbAlIAgAAQALAAAGgEQAGgFAAgIQAAgHgHgEQgFgEgNAAIgeAAgAgbgGIAdAAQAJAAAGgEQAGgEAAgIQAAgGgGgEQgFgEgJAAIgeAAg");
	this.shape_64.setTransform(-68.3,11.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#1D1D1B").s().p("AAdAyIAAgkIgbAAIgbAkIgSAAIAegnQgLgCgIgIQgHgHAAgMQAAgOAKgIQAKgJARAAIAuAAIAABjgAgSgfQgHAGAAAIQAAAJAHAFQAIAEAJAAIAeAAIAAglIgeAAQgLAAgGAFg");
	this.shape_65.setTransform(-86.1,11.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#1D1D1B").s().p("AgyAxIACgNIAHACIAHgBIAGgGQADgEACgJIADgWQABgPAAgWIAAgJIBGAAIAABjIgPAAIAAhWIgpAAIAAADQAAAYgCAOQgBAOgDALQgDAIgEAGQgFAFgEABIgLACIgMgCg");
	this.shape_66.setTransform(-98,12);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#1D1D1B").s().p("AAoA+IAAgZIhPAAIgDAZIgMAAIAAgmIAKAAQAOgYAAgsIAAgRIBGAAIAABVIAPAAIgDAmgAgQgiQAAAkgMAWIA1AAIAAhIIgpAAg");
	this.shape_67.setTransform(-108.9,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text2_1, new cjs.Rectangle(-114.4,-18.4,228.9,38.3), null);


(lib.text1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1D1D1B").s().p("AgIAKIAAgTIARAAIAAATg");
	this.shape_23.setTransform(37.6,3.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1D1D1B").s().p("AghAyIAAhjIBDAAIAAANIg0AAIAABWg");
	this.shape_24.setTransform(33.1,-0.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1D1D1B").s().p("AgjA7QgPgMAAgQQAAgMAIgIQAHgJANgDQgXgLAAgVQAAgPAOgKQAOgKARAAQASAAAOAKQAOAKAAAQQAAAUgXALQAcAJAAAXQAAAQgPAMQgOAKgWAAQgVAAgOgKgAgYAMQgKAHAAAMQAAAKAJAIQAKAHAPAAQAQAAAKgHQAJgIAAgLQAAgLgKgHQgLgHgOAAQgOAAgKAHgAgVgwQgJAGAAALQAAALAJAGQAJAHAMAAQANAAAJgHQAJgGAAgMQAAgKgJgGQgJgHgNAAQgMAAgJAHg");
	this.shape_25.setTransform(16.2,-2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1D1D1B").s().p("AgoAyQgQgUAAgeQAAgcAQgUQAQgVAYAAQAaAAAPAUQAQAUAAAdQAAAdgQAUQgQAVgZAAQgYAAgQgUgAgdgnQgLARAAAWQAAAWALARQAMARARAAQASAAAMgQQALgRAAgXQAAgVgLgRQgMgRgSAAQgRAAgMAQg");
	this.shape_26.setTransform(3.2,-2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1D1D1B").s().p("AguA1IAJgMQAQAPARAAQAQAAAMgQQALgQAAgZIAAgBQgOAUgXAAQgVAAgNgMQgNgKAAgTQAAgTANgOQAOgNAVAAQAXAAAOAQQAOAQAAAjQAAAfgPAUQgQAVgYAAQgVAAgUgRgAgZguQgJAJAAAOQAAANAJAIQAKAHAOAAQAOAAAKgIQAJgJAAgNQAAgNgKgJQgKgIgNAAQgPAAgJAJg");
	this.shape_27.setTransform(-9.9,-2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1D1D1B").s().p("AAHBEIAAh3IgYAIIgEgNIAggLIALAAIAACHg");
	this.shape_28.setTransform(-20.3,-2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1D1D1B").s().p("AgqAyIAAhjIAvAAQAOAAAKAHQAJAHAAALQAAAQgRAHQAWAFAAATQAAAMgKAIQgKAHgQAAgAgbAlIAgAAQALAAAGgEQAGgFAAgIQAAgHgHgEQgGgEgMAAIgeAAgAgbgGIAdAAQAKAAAFgEQAGgEAAgIQAAgGgGgEQgFgEgJAAIgeAAg");
	this.shape_29.setTransform(-34.1,-0.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1D1D1B").s().p("AgeAkQgPgOAAgWQAAgUAPgQQAOgPAVAAQAYAAAQARIgJAKQgOgOgRAAQgOAAgLALQgJALgBAQQAAAQALAMQALALAOgBQAQABAOgPIAKAJQgRATgYAAQgVAAgOgQg");
	this.shape_30.setTransform(98.1,-21.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1D1D1B").s().p("AgkAkQgPgOAAgWQAAgUAPgQQAPgPAVAAQAXAAAOAPQAPAPAAAVQAAAWgPAOQgQAQgVAAQgVAAgPgQgAgZgbQgLALABAQQAAAQAKAMQAKALAPgBQAQABALgLQAKgLAAgRQAAgPgLgLQgKgMgQAAQgPAAgKALg");
	this.shape_31.setTransform(86.2,-21.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1D1D1B").s().p("AgeAkQgPgOAAgWQAAgVAPgPQAPgPAUAAQAYAAAQARIgKAKQgNgOgRAAQgPAAgJALQgLALAAAQQAAAQALAMQAKALAPgBQAQABAOgPIAKAJQgRATgYAAQgUAAgPgQg");
	this.shape_32.setTransform(74.6,-21.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1D1D1B").s().p("AggAlQgOgOAAgXQAAgVAOgPQANgPAUAAQAVAAANAPQAMAPAAAVIAAAGIhOAAQACAPAJAJQALAJAMAAQARAAAOgOIAKAIQgRATgYAAQgUAAgPgPgAgUgdQgJAJgCAPIA/AAQgBgPgIgJQgIgKgPABQgLgBgJAKg");
	this.shape_33.setTransform(63.3,-21.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1D1D1B").s().p("AgyAxIACgMIAHABIAHgBQADgCADgEQADgFACgIIADgWQABgQAAgVIAAgIIBGAAIAABiIgPAAIAAhWIgpAAIAAADQAAAZgCANQgBAOgDALQgDAJgEAEQgEAGgFABQgFACgGgBQgGABgGgCg");
	this.shape_34.setTransform(50.9,-21.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1D1D1B").s().p("AAqAyIAAhjIAPAAIAABjgAg4AyIAAhjIAPAAIAAAmIAbAAQAQAAALAHQALAHAAAOQAAAQgKAIQgKAJgQAAgAgpAlIAbAAQAMAAAFgFQAGgFAAgJQAAgIgGgFQgGgFgLAAIgbAAg");
	this.shape_35.setTransform(38.5,-21.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1D1D1B").s().p("AAcAyIAAhWIg3AAIAABWIgPAAIAAhjIBVAAIAABjg");
	this.shape_36.setTransform(25.2,-21.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1D1D1B").s().p("AAeAyIAAhOIg7BOIgOAAIAAhjIAOAAIAABOIA7hOIAOAAIAABjg");
	this.shape_37.setTransform(6.1,-21.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1D1D1B").s().p("AgxAxIABgNIAHACIAHgBQADgBADgFQAEgGABgHIADgXIABglIAAgIIBGAAIAABjIgPAAIAAhVIgoAAIAAACQgBASgCATQgBAQgDAJQgCAJgFAGQgEAFgFABQgFABgFAAIgMgBg");
	this.shape_38.setTransform(-6.7,-21.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#1D1D1B").s().p("AggArQgLgJAAgOQAAgPAMgIQAMgIATAAQAOAAAPAEIAAgDQAAgNgHgHQgHgHgPAAQgPAAgOAHIgFgNQASgHARAAQAWgBALALQAKAKAAAUIAAA8IgPAAIAAgQQgNARgVAAQgPAAgMgIgAgUAFQgIAFAAAJQAAAKAIAFQAGAGALAAQANAAAKgIQAKgHAAgMIAAgJQgOgEgQAAQgNAAgHAFg");
	this.shape_39.setTransform(-17.6,-21.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#1D1D1B").s().p("AAoA+IAAgYIhPAAIgCAYIgNAAIAAgmIALAAQANgYAAgsIAAgRIBGAAIAABVIAPAAIgCAmgAgPgiQAAAkgMAWIA0AAIAAhIIgoAAg");
	this.shape_40.setTransform(-28.8,-20.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#1D1D1B").s().p("AgoAmIAIgLQAQANARgBQAIAAAJgEQAHgFAAgJQAAgHgGgEQgHgFgMAAIgMAAIAAgLIANAAQAJAAAGgFQAHgFgBgHQABgGgHgFQgGgEgJAAQgRAAgNAKIgGgLQAQgMAVAAQARAAAJAIQAKAHAAAMQAAARgQAFQASAGAAASQABAMgLAKQgKAIgTAAQgXAAgSgOg");
	this.shape_41.setTransform(-39.6,-21.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#1D1D1B").s().p("AgkAlQgPgPAAgWQAAgVAPgPQAQgPAUAAQAWAAAPAPQAPAPAAAVQAAAVgPAQQgPAPgWAAQgVAAgPgPgAgagbQgKAMAAAPQAAAQALALQAKAMAPAAQAQAAAKgMQALgKgBgRQAAgPgKgMQgKgKgQgBQgQABgKAKg");
	this.shape_42.setTransform(-50.1,-21.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#1D1D1B").s().p("AgeAlQgPgPAAgWQAAgUAPgPQAPgQAUAAQAYAAAQASIgJAKQgNgPgSAAQgOAAgKAMQgKAKAAAQQAAAQAKAMQALALAOAAQAQAAAOgPIAKAJQgRATgYAAQgUAAgPgPg");
	this.shape_43.setTransform(-61.8,-21.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#1D1D1B").s().p("AAqAyIAAhjIAPAAIAABjgAg4AyIAAhjIAPAAIAAAlIAbAAQAQAAALAIQALAGAAAPQAAAPgKAJQgLAJgQAAgAgpAlIAbAAQAKAAAHgFQAGgFAAgJQAAgJgHgEQgFgFgMAAIgaAAg");
	this.shape_44.setTransform(-80.5,-21.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1D1D1B").s().p("AAxBEIAAhtIgwBIIgBAAIgxhHIAABsIgOAAIAAiGIAPAAIAwBIIAxhIIAQAAIAACGg");
	this.shape_45.setTransform(-96.2,-23.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text1_1, new cjs.Rectangle(-102.6,-29.9,205.3,35), null);


(lib.ghghj_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#003EC9").s().p("AizCBQgDgCgBgDIAAgGIAJgXIANgrIAIgkQADgKADgVIACgIQADgEACAAQAFABACADQADAGgDAHQgFALgJAoIABADIAGgJQANgYAIgLQAPgSAUgWQAHgIAKgCQAQgEADAQQADAQgEASIgIAnIgGAuIAAAJQACAIAFABQAFACAGgGQALgKAIgLQAQgTAIgOQAVgkAOgdIAMgYIAdg4QACgFAGACQAEABgCAGIgEALQgLAUgCARIAoggQAKgIAKgGIAvgdQADgDAFACQADABgBAFIgCAOIgVBDIgOA5QgBADABADQABAGABACQACACAGABQAAAEgBABQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQgHABgEgJQgGgMAFgVQAMgyAHgSIAKgjIABgHIgBgBIgsAcQgKAGgaAWQgEADgEALQgCACAEAEIAOAZQAIAMgGAQQgEAOgIANQgHANgPgBQgHgBgEgEQgJgKAAgNQAAgMAGgvIgBgGIgHAMIgVApQgWApgHAKIgXAbQgHAKgIAFQgPAIgIgOQgEgIgBgJQAAgdAKgqQAGgagBgRQAAgIgEgEQgHABgJAJQgWAWgKAPQgXAfgOAfIgUAxIgGAKQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIgCgBgAA/gmQgGAYgCAoQAAAGACAEQADAHAHABQAGABAFgGQAJgMADgOQACgJgDgHQgDgNgJgMIgLgSg");
	this.shape_46.setTransform(35.7,33.8,1.3,1.3,5.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#003EC9").s().p("Ai1CFQgFgCgCgFQgBgFACgFIAVhBIAOhDIAAgCIADgIQAEgGAFAAIABAAQAHABADAGQAEAIgEAIQgFAMgEATIAAgBIAQgXIAfgmIADgDQAHgJAMgDIAHgBQAQAAADARQADAQgEAUIgIAmIgGAsIAAACIAAAIQABAGAEAAQACAAACgDIATgVIACgDQARgVAFgIQAWgmANgbIAphQQADgHAGAAIAEABQAJAEgDAKIgFAMQgGAKgDAMIAAgBIAdgXIBDgrQADgDAEAAIAGABQAHADgCAJIgXBRIgKApIgEAQIAAAFIABAFIAFACIADABIAAADQABAGgCADQgCACgGAAQgKAAgGgKQgHgPAGgWIAAgCQANgzAGgPIAIgaIACgHIglAXQgJAFgVASIgFAFQgEADgCAIIgBAAIARAcQAIAOgGARQgFAQgHAMQgJAPgQAAIgDAAQgHgBgHgGQgKgMAAgOQAAgQAEgcIgEAIQgHAPgGAMIgGALQgPAcgJAMIgXAbQgHAKgKAGQgFADgHAAQgLAAgGgKQgGgKAAgKQAAgdAKgrQAGgZgBgRIgBgHQgFACgFAGQgWAWgKAOQgYAigMAcIgVAxIgEAIIgCACQgDAGgFAAIgEgCgAA8AaQAAAFACADQACAFAEAAQADAAADgDQAIgKADgOQACgIgCgFQgFgOgHgKIgGgJQgEAUgDAog");
	this.shape_47.setTransform(35.7,33.8,1.3,1.3,5.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#003EC9").s().p("AkKC0QgFAAgFgFQgFgFgCgGQgEgOAGgLIALgVIAEgGQAFgHAIADQAKAEABAIIgBALIgBAIQAAAEABADQACAFgFABIgGABQgGAAAAgGIAGgXIAAgHIgIAHIgLAVQgCAGABAIQABAHAFADQAFACAGgDIALgJIAQgSIAQgUQAWggAHgMQADgFACgIIAEgOIAIgZQACgIAFAAQAGgCADAEQAEAEgCAGIgQAeQgDAIgDAKQgEAQAEASQACAOAMgJQAHgGAJgIIAQgTIAQgQQAMgLABgUQACgWADgQQADgMAOgaQAEgHAKACQAHABAGAHQAGAGABAHIgBAJQgEAMgKAMQgKAOgHALIgJALIgEAHQgEAKADAPQAEAXAXgLQAGgDAIgIIAogiIAagXIAVgSQAEgDABgHIAHglQACgJAMgYIAKgQQACgDAEgCQAGgEAFAEQAIAGABAHQACALgDAQQgDABgCgEQgFgLAAgIIAAgGQgNAHgLAYQgLAYABATQAHgDAMgKQALgKAHgEIgCAEIghAeQgGAGADAIIACAEQACAHAGACQAGACAHgDQANgFALgMQAQgOAOgSQAegmAFgJIAFgGQAGgJAEgMQAJgbAIgPQANgdAfgFQAGgCAOACQAHACAFAHQAFAHABAIQACATgLAYQgFAOgNARIgXAeQgJALgLAJQgJAHgKgCQgIgCgEgIQgFgKAAgLIAAgNIgEAEIgZAjIgtAxQgHAHgRAHQgRAGgKgQIgHgMQgEAAgEADIgGAHIgeAcIgUAUQgRAPgTANQgHAFgOAAQgLAAgHgMIgEgMIgCgHIgNANIgfAhQgFAGgIAFQgHAEgIgDQgHgDgCgIIgFgWIgEADIgKASIgMAQIghAmQgHAJgNAAIgDAAgAhMgJIgIAlIAAAFQAJgIAGgJIAQgXQAGgKgCgFQgBgFgIgGQgNAIgFAQgAC+hDQgBANADAJQADALAKgDIAHgEIATgVQATgVAOgZQANgWgBgVQAAgQgSgBQgOgBgTANQgJAGACAIQABACgDAKIgEAHQgEAJACAEQAFAOAKAFIAGAEQgKABgIgGIgMgNQgHAPgEAXg");
	this.shape_48.setTransform(103.6,14.9,1.3,1.3,5.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#003EC9").s().p("AkJC5QgHAAgHgGQgGgGgCgIQgFgPAHgNIALgVIAEgHQAGgHAHAAIAGABQAOAFAAAMIAAAMIgBADQgBAFABAFIAAAAIAJgKIANgRIAEgFIAZgnIAHgSIAKghQADgKAIgBIADgBQAHAAAFAGQAEAHgDAHIgQAeIgFARQgEAOADASIACAEQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABgBIAQgOIAggjQAKgKACgSQABgTAEgTQADgPAOgYQAFgIAKAAIAEAAQAJACAHAHQAHAIABAIQABAGgCAFQgFAOgJAMQgIAJgJAPIgGAIIgEAEIgDAGQgDAKACAMQACALAIAAQAFAAAFgDIAOgJIBWhLQACgBABgGIACgHQADgVACgKQADgMAKgRIACgFIAKgRIAHgGQAFgDAEAAQAEAAAFADQAJAHABAJQADANgDAQIgBADIgDABIgDAAQgGAAgCgGQgFgKAAgHQgIAIgIAQQgGAQgCAPIAKgIQAOgLAGgDIAPgIIgJAPIAAABIgDAEIghAeQgEACACAGIACAFQADAGAFAAIAGgBQALgEAMgMQAQgOAOgSIAEgFQAWgbAJgPIADgFIABgBQAHgIADgMQAHgYAKgSQAPggAggFIAIgBIAOACQAJACAGAHQAGAIABALQACAVgLAYQgHARgLAOIgFAHIgTAYQgIAKgMALQgJAGgIAAQgPAAgHgNQgFgLAAgLIgNASIgCACIgKANIgWAaIgTASQgIAIgSAHQgGADgFAAQgOAAgIgOIgFgJIAAgBIgFAFIg2A0QgWATgOAJQgHAGgQAAQgOAAgJgOIgEgNIgmApQgIAHgGAEQgFADgGAAQgRAAgEgQIgCgLIgPAWIgFAGIgXAdIgJAKQgJAKgRAAgAkKCTQgCAGABAGQAAAGAGAAQAAAAABAAQAAAAABgBQAAAAABAAQABAAAAgBIAIgFIgCAAIgBAAQgFAAgDgDQgDgDABgFIACgLIgGALgAhHgHQgDALgDAPIAAAAIAUgcQAFgIgBgDQAAgDgFgEQgJAHgEANgADEhCQgCAMADAIQABAEAEAAIACAAIAFgCIATgVQARgSAPgbQANgWgBgTQgBgMgMAAIgCgBQgNAAgPAMQgHAEACAFQABAEgEAIIAAACIgDAGIgBACQgEAGACADQAEAMAJAEIAEADIACACIAJAHIgQACQgIAAgGgEIgKgKQgFANgCARg");
	this.shape_49.setTransform(103.6,14.9,1.3,1.3,5.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#003EC9").s().p("AkiDQQgHgBgGgFQgHgFgBgHQgFgdAEgXQAFgfALgRQAKgSALgIQAHgFAIABQAIACAEAHIABAGIgDARQAAAEgFAAQgEgBAAgCQgBgCAAgEIACgRIgKADQgMAHgIAPQgKASgFAhQgCAXAEAPQABAHAEADQAGAFAGgCQAKgDAMgLIAUgVQALgMAWghQAMgQAJgSIAHgQIALgcIACgKQABgHAIABQAEABACACQACADgBADQgEAPgEAGQgOAVgCAVIgDAUQABAEACACQADABAEgCQAHgFAIgJIAyhBIAEgKIAJgeIAIgSIADAAQAIgBACADQADADgCAIQgCAHgFALIgKARQgEAJgBANQgBAKAGAPIADADQAGgBAFgEIAJgJQAQgPAKgOIAPgSIAlgvQALgMADgVQAAgKAKgKQAEgEAHAFIgDAEQgEAEgBAIQAAAGgDAIIgEANIgJAfIABAAIAVgpQAWglALgNQAGgHAJgIQAEgDAIgCQADgBADABQAEACABADQAEAKgBAGQgDAfgDAIIAAAGIAEgGIAYglIAUgZQAIgKAIgEIAFgEQADgBADABQADACAAADQACALgBAIIgKA9IALgKQAGgFADgFQAJgOAMgNIAHgKIAGgMIAFgIQADgGAKgPQAJgOADgIIARgeIAAgBQAFgHAEACQAAABABAAQAAABAAAAQABABAAABQAAAAAAABIgCAEIgLAWIgQAsIgEAUQgDAPgCARQAAADACAHQACAHAFADQAFACAGgCQARgHAHgJQAEgGgDgEIgFgIQgFgIgKgGIgFgDQgFgCADgEQABgEAEABIALACIAPATIAFAGQADAEgBAEQgCAMgHAHQgMAMgPAEQgLADgIgGQgIgGgBgMIAAgUIABgEQADgGABgLIACgSIgBgGIgEADIg3BTQgEAIgGAEQgIAEgEgGQgBgCAAgDQACgZAEgPIACgNIACgOQACgIgEgFIgEACIgjAsIgNAWQgDAEgDAJIgGAOIgMAbIgEAIIgIANQgBACgEgDQgFgDADgGQAEgIADgNIAFgWQAHgYADgQIADgPQABgJgEgHQgHAAgGAGQgXAWgMAYIgPAbIgcBCIgEAKQgCAGgEADIgHgEQgBgDACgFIANg2IAAgFIgBgBIhTBkIgIAFQgLAEgGgKIgHgPIgDgNIgtA5QgHAJgHAGQgHAHgLgEQgIgDgBgMIAAgMIgEACQgRAdgKAOIgJAKIgLANIgZAaQgLAJgLAAIgDAAg");
	this.shape_50.setTransform(186.4,-13.8,1.3,1.3,5.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#003EC9").s().p("AkiDVQgKgBgHgGQgHgHgCgIQgGgdAFgZQAGghAKgRQANgUAKgHQAGgFAJAAQANAAAGALQACAEAAAFIgDASQgBAIgHAAIgDgBQgLgCACgMIACgIIAAgCIgCABQgLAGgHAOQgMAUgDAdQgDAVAEAQQACAFACACQADACADAAIACAAQAKgDAKgKIAIgJIALgMQALgMARgZIAFgHIAVgiIAFgLIAMggIACgJQACgKAKAAIADAAQAGABADAFQADAEgCAFIAAADQgFAOgDAFQgMAUgDAUIgCAQIgBABIAAACIABADIABgBQAIgGAHgIIAZgfIAYghQACgCAAgEIABgDIASgyIAGgCIAEAAQAIAAADAFQAEAEgDAKQgDANgKARIgEAHQgDAGgCAOQAAAIAGAOQAEgBAHgHIADgDQAOgNAMgQIAJgMIAigrIAJgLQALgKACgUQABgNAKgKQAEgDAFAAQAFABAEADIAEADIgDADIgBACIgCADQgEAEAAAFQAAAEgCAJIABgDQASggANgOIAQgQQAEgEAKgDIADAAQAKAAADAJQAFAJgBAJIgCAWIAPgXIAVgaQAHgKAJgFIABgBIAFgDIAFAAQAKgBABAKQACAPgBAFIgJAxIAKgLQAIgMANgPQAEgEAFgKIAJgQQADgHAIgLQAKgQAEgJIAEgIIACgDIALgTIAAAAQAFgIAGAAIAFABQAHAFgFAKIgMAWIgPArQgDALgCAIIgEAgIABAJQADAGAGAAIAEAAQAPgGAGgIQABgBAAAAQAAgBABgBQAAAAgBgBQAAAAAAgBIgGgIQgDgGgKgGIgFgDQgHgGADgHQAEgFAFAAIACAAIAMACIARAVQAAABAAAAQABABAAAAQAAABABAAQAAAAABABQAGAIgBAFQgDAOgIAJQgMAMgRAFIgIABQgLAAgHgIQgHgHgBgMIAAgVIABgFQADgFABgOIAAgGIgyBNQgFAHgFAEQgFACgEAAQgHAAgDgGQgCgDAAgFQACgZAEgQIAFgeIgIAJIgZAfQgEAHgDAFIgFAKQgDAEgDAJIgHAOIgJATIgDAHIgBADIgCAGQgEAIgFAFQgBADgEAAQgFAAgCgCQgIgGAFgJQAEgIAEgTIAEgQIAKgoIAAgCQADgPgCgHQgDABgEADQgVAVgMAYIgTAiIgZA6IgBAFQgFANgEADIgDADIgDgCQgHgDgBgDQgCgEACgHIACgMIAAgBIAIgfIhJBYQgEAEgGACQgEABgEAAQgKAAgFgJQgEgFgDgJIAAgBIgCgFIgmAyQgFAHgKAIQgGAGgIAAQgEAAgEgCQgLgDgCgPQgOAYgIALIgbAeIgTATQgMALgNAAg");
	this.shape_51.setTransform(186.4,-13.8,1.3,1.3,5.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#003EC9").s().p("AgdBKIADgIIAmhjIgIgBQgGgBgCgEQgCgFAEgGIAPgWIAGgGQAEgFAEADQAGADgBAEIgGAdQgFAXgQAgIggBCIgEAFQgBgEADgEgAAHgrQgCAGAIgCIAGgWIgBgBQgJAIgCALg");
	this.shape_52.setTransform(191.2,-42.3,1.3,1.3,5.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#003EC9").s().p("AgkBQQAAgGAEgIIAlhiIgBAAQgKgBgDgHQgCgHAFgIIAPgWIAHgHQAEgEAFAAIAFABQAIAEgBAJIgGAdQgGAWgQAiIggBCQgCAEgDACIgHAGg");
	this.shape_53.setTransform(191.2,-42,1.3,1.3,5.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#003EC9").s().p("AgnBFQgMgCgIgJQgHgIgBgMQgBgUALgaQAIgUAWgfQAHgKAJAAQAIgBADAFQAFAEgCAIIgFAbQgCALgJAHIgBgBIAEgOQAGgTAAgKIgBgHQgLAFgEAFQgdAngGAeQgCAKACAKQABALAKAGQAKAFAKgFQAVgJAWgUIAtgeQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAIgGAGIgaAXIgjAcIgRALQgIAFgJAAIgGgBg");
	this.shape_54.setTransform(176.5,-48.2,1.3,1.3,5.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#003EC9").s().p("AhAA+QgIgJgCgOQgBgXALgaQAIgSAXgiQAIgMAMAAIACAAQAKAAAEAGQAFAGgCALIgGAaQgCAMgKAJIgCACIgJgEIAHgSIAAgBQAFgQAAgKIAAAAQgEACgDADQgcAmgGAdQgCAIABAKQABAHAFAEQAFAFAHAAQAEAAADgDQAUgIAWgTIANgLIAegTIADgBIAEgBIAEAAIAHACIgLAMIgbAXIgjAcIgPALIgCABQgJAFgKAAQgRAAgNgNg");
	this.shape_55.setTransform(176.7,-48.2,1.3,1.3,5.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#003EC9").s().p("AhXBdQgKgEgEgJQgEgMACgVQACgUALgYQAIgPALgOQAMgQAVAHQAIACACAHIAEAIIgFAFIgDgHQgGgIgNAEQgLADgKAPQgKAMgEARQgJAeABAMQAAAHAEAGQAEAIANgDQAMgEAOgOQALgKAfgjQAJgMABgJQAAgFAEgMQANglAdgcQASgTAWANQAFADAEAIQAIAOgFAXQgFAcgWAZQgQAUgMAKQgJAFgIACQgHABgJgFQgJgGgCgHIgBgGIgEAEQgIALgWAWIgSASQgKAHgLAFIgHACQgFAAgFgCgAAPAZQACALAMABQAGABAGgFIAWgWQAUgTAKgfQAFgSgGgPQgFgLgLABQgIAAgMAJQgEADAAAGQABAEgDAFIgMAXQgKAOAJAQIAMAOIADADQAAAAAAABQABAAAAABQAAAAAAABQgBAAAAABQgJgDgHgHIgLgPQgOANAEASg");
	this.shape_56.setTransform(150.3,-39.3,1.3,1.3,5.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#003EC9").s().p("AhdBfQgJgFgDgIQgGgOADgVQACgVAMgZQAHgOAMgQQAKgNAQAAQAHAAAGACQAKADADAJIAFALIgNAOIgFgOQgCgDgFAAIgGABQgKADgJANQgIAJgGASIgBAGQgHAXABAMQAAAGADAEQACAEAFAAIAFgBQALgDANgNQANgMAVgZIAIgJQAIgLAAgHQAAgHAEgJIAAgCQAOgmAdgdQAMgMAPAAQAJAAAKAGQAHAEAEAIQAJARgFAYQgGAdgWAaQgRAWgMAJQgKAGgJACIgEAAQgHAAgJgFQgJgGgDgIQgHALgUAUIgHAHQgGAHgGAFQgFAEgRAJQgGACgEAAQgIAAgHgFgAAUAYQACAIAHAAIABABQAEAAAEgEIAIgHQgLgFgLgQQgHAKADANgAA7hFQAAAAgBABQAAAAAAABQgBAAAAABQAAABAAAAQABAFgDAHIgCAFIgLATQgJAMAIAMQADAFAGAFIAGAHIAEgEQATgTAJgdQAFgQgGgOQgDgIgGAAIgCAAQgHABgKAIg");
	this.shape_57.setTransform(150.3,-39.2,1.3,1.3,5.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#003EC9").s().p("AhrBiQgJgCgFgJQgEgJADgJQAIgTAPgSIAGgFQAHgEAFAFQAEAEgCAHIgIAaQgBAFgDAAQgFABgDgEQgDgEAEgEIACgDIAGgPIgDABQgNAPgEALQgCAEABALQABAGAGgBQAIgBAFgDQAHgDAFgGIAdgdQAJgJACgLQAIgmAegmIAEgIQAGgHAGAEQAHADgCAJQgBAHgEAIIgIAOIgJARQgKAQgHAHQgMANAAAMQgBAMAFAHQAEAEAEAAQADABAFgDQAJgEAOgPQAUgVAFgIIAPgSQAEgDAAgGQACgjAUgkQACgDAMgMQAGgFAIAEQAHADAAAJQAAAIgHAOIgTAfQgIAMgHAJQgGAGABAMQABAMAHAGQAIAFAFgCQAGgBAIgEIASgKIAFgCQgCAFgGAFQgNALgNAEQgPAFgJgKQgKgNgBgGQgEACgEAFIgGAIQgaAggQAMQgJAHgJABQgHABgFgGQgLgLAAgIIgCgCIAAgBIgWAWIgRAQQgKAIgKAAIgFgBgAgWAJQAbgiAGgYQgXAYgKAigABjhVIgLAKQgLAOgIAhIAAADIACAAIAegsQAFgJgCgIIgFABg");
	this.shape_58.setTransform(118.2,-30.3,1.3,1.3,5.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#003EC9").s().p("AhuBnQgMgDgFgKQgGgMAFgLQAHgTARgTQACgEAFgCQAEgCAEAAQAFAAAFAEQAGAGgEAKIgHAZIgBAAQgBAJgHAAIgCAAQgHAAgDgFIgBgEIgCAEQgBADABAKIABAAQAJgBADgCQAFgCAFgGIAegeQAIgHABgKQAJgnAegnIAFgHQAEgHAHAAQAEAAADABQAGADABAHIAAAIQgBAIgJARIgNAWQgIAQgJAJQgLAMgBAJQAAAKAEAGQABABAAAAQABABAAAAQABAAAAAAQABABAAAAIAGgCQAIgEANgNIAAgBQARgRAIgMIANgPIADgCIACgHQADgnAUgiQACgEAJgJIAEgDQAEgEAGgBQAEABAFACQAKAEAAAMQAAAJgIAQQgHANgMASQgGALgJALQgFAEABAKQABAJAFAFQAEADADAAIACAAIANgFIAhgRIgEALQgBAGgHAEIgBABQgNAMgOAFIgLABQgLABgIgJIgBgCQgFgFgEgHIgHAKQgYAegUAPQgKAJgJAAIgCAAQgJAAgGgHQgJgIgCgHIgBABIghAfQgLAJgMgBgABahHQgIAJgFASIACgDIAPgYIADgHQgFADgCAEg");
	this.shape_59.setTransform(118.4,-30.3,1.3,1.3,5.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#003EC9").s().p("AjGCYQgEgEABgGIANgrQAEgKAKgrIAVhNQABgDADgCQAFgDAEAHIADAEQABADgDACIgCAFIgCADQgFAFgCAIIgEAOIgJAiIgBAGIACABIACgEQAOgZAqgtIAdgeQAEgEAEgBQAFgDAFACQAFACACAGQAEANgEARIgbBgQgBAHABAFQACAHAHgCQAFgBADgDIAWgWQAUgVAhgvIAPgVQgDgGAAgDQAAgCAFgFIATgSQAFgFAEgKQANgbAHgKIACgBQAEgFAEACQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQABADgCADIgOAWIgBAIIBSg2IAMgIIARgQQAFgFAFABQAEABABACQABACgDAEIgKAKQgFAIgFAKIgpBqQgEAKgCAYQgBAFABACQABABAGABQgBAKgIgFQgJgEABgNQADgbAGgOIAPgrIAVg4IgCgBIhAAtIgdATQgOAMgDAMQgBAHAFAEIADADQAIAEAKAMQAKAKgFAUQgDAOgOAMQgHAGgIgBQgIgCgGgIQgHgMACgMQADgaADgJIABgKIgEADIgcAnIgkAuIgUAXQgMAMgJACQgNADgFgLQgFgKACgMQADgNAHgWIALgjIAIgiQACgLgFgHIgGADQgXAVgMAQIgWAYQggAngPAnIgIAaIgDAGIgEANQAAADgCAEIgEAFQAAABAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAIgDgCgAAtAgQAAAGAFAGQAEAHAHgFQAPgIAEgUIgBgFQgDgLgOgKIgJgGQgJAZABAVg");
	this.shape_60.setTransform(74.8,-18.3,1.3,1.3,5.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#003EC9").s().p("AjKCcQgFgHACgIQACgKAHgVIAmiOQACgEAFgEIAFgBQAGAAAEAHIABABQAGAHgGAHIgBABIgBACIAAABIgCAEQgFAFgEAOIgGAXQAOgUAggiIAagcIAEgDQAFgFAEgBQADgCAFAAQAMAAAEAMQAFAOgFATIgSA+IgBACIgIAgQgBAFABAFQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAAAAAIAIgDIAWgVQAUgXAagnIATgZQgDgGABgEQABgDAGgGIADgCIAPgPIAJgPQALgYAJgNIACgCQAFgFAFAAQAAAAABAAQAAAAABAAQABAAAAABQABAAAAAAQAEACABAEQABAFgDAGIgJAQIAAgBIBRg1IAQgQQAGgGAGAAIADAAQAIAEABADQABAGgEAEIgJAKIgLARIgoBqQgEAKgCAXIgBADIAIABIAAAFQgCALgIAAIgHgCQgLgHABgOQADgbAGgRIAghVIABgBIhAArIgUAOQgNAKgCALQAAAEACACIADACQAIAEALANQALANgFAVQgEAQgPANQgHAGgIAAQgOAAgHgMQgIgOACgNIAAgGQACgQACgGIgUAcQgLAQgZAeQgLAPgKAJQgMAMgLADIgGABQgMAAgGgMQgFgLADgNQAEgUAHgWIAJgdIAAgBIAIggQACgHgCgEIgBABQgWAUgNAPIgWAZQgfAmgPAmIgIAaIgEAJIgCAIQAAAGgFAHIgCACQgCAEgEAAQgEAAgDgDgAAyAgQAAAEAEAGIACACIACgBQANgIAEgRIgBgCIAAgBQgCgJgNgKIgDgCQgHAUABASg");
	this.shape_61.setTransform(74.8,-18.3,1.3,1.3,5.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#003EC9").s().p("AgKAAIAFgIQAFgHAFAFIABABQAGAFAAAEQAAACgFAFQgGAGgJAAQgGgGAEgHg");
	this.shape_62.setTransform(-124.9,21.1,1.3,1.3,5.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#003EC9").s().p("AgKASIgCgBQgIgKAGgIIAFgKQAEgGAFAAQAEAAAEADIABABQAIAHAAAFQABAFgIAHQgHAHgLAAg");
	this.shape_63.setTransform(-124.9,21.1,1.3,1.3,5.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#003EC9").s().p("AgGARQgLgPAGgLIACgDIALgHQAEgDAEAEQAEAEAAAIIgHAWQgCAEgEABIgBAAQgDAAgDgEgAAAACQAGgFgEgGQgDAFABAGg");
	this.shape_64.setTransform(-127.9,37.4,1.3,1.3,5.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#003EC9").s().p("AgKAUQgNgSAHgNIABgBIADgEIAMgIIAFgBQAGAAADAFQAFAFAAAJIAAABIgIAXQgCAIgJAAQgFAAgFgGg");
	this.shape_65.setTransform(-127.9,37.4,1.3,1.3,5.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#003EC9").s().p("AgfBRIArhyIgJgBQgDAAgDgFQgDgEADgFQANgWALgJQADgDAEACQAEACAAAEQAAAKgGAUQgHAbgNAaIgiBGIgCADgAAHgtQAAABAAABQgBAAAAABQAAAAAAABQABAAAAAAQABACAFABIAHgXIgBgBQgHAEgFANg");
	this.shape_66.setTransform(-177,21.2,1.3,1.3,5.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#003EC9").s().p("AglBSIArhwIgCgBIAAgEIAAAEQgHAAgEgGQgEgHAFgHQAKgVAOgMQADgDAFAAIAEABQAIADAAAIQgBALgFASIAAADQgIAbgNAaIgiBGIgCADIgBABIgDAEg");
	this.shape_67.setTransform(-177.1,21.3,1.3,1.3,5.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#003EC9").s().p("Ag5BQIAAgVQgBgGACgKIACgQQAEgogCgUIAAgOQgBgDAEgCQAEgBACADIAGAMQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBAAQgCAGgBAJIAAAPIgFAwIgBAXQARgVAGgKIAhg/IAWghIAPgXQAEgFACAAQACABADAGIgVAfQgXAkgJATQgIAVgSAcQgHALgRAVIgFAFQgHgDAAgHg");
	this.shape_68.setTransform(-109.7,27.9,1.3,1.3,5.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#003EC9").s().p("Ag0BeQgKgFAAgJIAAgVQgBgFADgQIABgMIABgFQADgmgCgQQgBgFABgFIAAgEQAAgHAGgDIAEgBQAFAAADAFIAHANQACADgCAEQgCAEgBAQIAAAIIgGA4QAJgKAFgJIA/hsIABgCIAGgKQAGgGADAAQAFAAAFAJIACACIgXAiIgCAFQgUAdgKAVQgJAWgRAbQgEAIgNAQIgLANIgBABIgDACg");
	this.shape_69.setTransform(-109.6,27.9,1.3,1.3,5.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#003EC9").s().p("Ag8CnIAHg8IABgQIAXi8QACgQAAgRQAAgFAFgGQACgBADABQAJADAIgFIAUgIIAjgVQACgCADADQADADgDADIgFAEIgwAdQgNAJgKgDIgHBJIgGAqIgTCkIAAAHIAGgBIAzgSQAKgDAHgGIAGgEIAIAJIgEAEQgUALgXAGIgYAJIgVAGIgEABQgFAAABgHg");
	this.shape_70.setTransform(-194.1,46.5,1.3,1.3,5.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#003EC9").s().p("Ag/CvQgDgCABgIIAfkGQACgSAAgPQAAgHAGgHQADgDAEAAIAJACQADAAAFgDIAKgEQAGgCADgCIAjgUIAFgBQACAAAFACQAFAHgFAGIgGAFIgxAcQgKAIgJAAIgCAAIgfESIAAACIAzgSQAIgDAHgGIAEgDIACgBIAEgDIAOAQIgFAFIgEADQgWALgVAHIgZAIIgVAHIgEABQgFAAgDgEg");
	this.shape_71.setTransform(-194.1,46.5,1.3,1.3,5.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#003EC9").s().p("Ag5CkQALgIARgJIAagPQAKgHAKACIABgVIAekBIAAgIIgEABIg7AVQgDABgGAFQgFAEgDgBIgFgFIgCgDIAFgEIBXggQAKgDgBAKIgYDEIAAABIgEAjIgDAZIgDApQAAAFgGAFQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgIgDgJAEIgUAJIggASIgEADQgKgFAIgFg");
	this.shape_72.setTransform(-71.8,18.5,1.3,1.3,5.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#003EC9").s().p("Ag6CyQgHgEgBgFQAAgEAGgGIA3ggQAIgGAJAAIABAAIAAgCIAekPIABgBIg5AUIgIAFQgFAFgEAAQgFAAgEgGIgBgBIgCgDIgBgBIgCgDIADgDIABgBIAFgEIACAAIBWggIAEgBQAEAAAEADQADAEAAAGIgYDEIAAABIgKBlQAAAHgHAGQgCACgEAAIgEgBIgFgBQgEAAgEACQgFAEgFABIgKAEIgmAWg");
	this.shape_73.setTransform(-71.8,18.6,1.3,1.3,5.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#003EC9").s().p("Ag/BfQgCgJADgNIAhhlQAGgRAAgEIAEgLQACgDAEABQAEACAAADIACAVQACALgMgEIgjBkQgCAKACAJQAFACADgFQAPgTAGgKIAcg1IAXgrQAFgKAEgMQACgEgBgGQAAgEACgCQAHgGAFgOQACgFACgBQADAAAGADIgFAQIgRApIgHARIgHAZQgGASADAgQABAHADADQAEADAJgDIAEAAIgCAEQgFAGgIAAQgIAAgEgFQgEgFgBgKQgCgVgDgLIgGALQgIATgYAjQgFAHgJAIQgDADgFABIgEABQgHAAgCgIg");
	this.shape_74.setTransform(-144.7,31,1.3,1.3,5.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#003EC9").s().p("AhEBgQgDgLAEgOIAHgYIAchRQADgJAAgGQAAgEAEgHIABgCQADgFAFAAIAEAAQAHAEABAGIAAAEIAAADIABADIAAAKQABAIgDADQgCADgFAAIgDAAIgBADIgGAQIgPAsIgKAgQgCAHABAFIAGgIIAOgVIAWgnIAdg4QAFgJAEgMIABgIQgCgHAFgEQAGgFAFgMQADgKAHAAQAEAAAGAEIADACIgGAUIgYA6IgHAYQgGASAEAeQABAIADAAIAJgCIACAAIAHgBIgDAJQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgGAIgLAAQgKAAgGgHQgDgFgCgMIgDgSQgJAVgWAgIgPAQQgDADgIACIgEABQgLAAgDgMg");
	this.shape_75.setTransform(-144.6,31,1.3,1.3,5.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#003EC9").s().p("AhDBtQgOgCgDgNQgGgTADgdQAAgEAEgDQAHgCAIgGIAMgKQAdgWAZgKIARgJQAEgDABgEQAGgjAAgJQgBgNgDgFQgDgGgHgCQgIgDgHAFQgOAJgRAQQgIAIgDAJQgDAHABACQABADAGADQgEADgEgBIgHgEQgGgCAEgIQAHgTAKgJQAPgOAJgGQAFgEANgGQAFgCAJADQAJADADAGQAGAJABANQACAQgEAOIgCAQIAdgMIAdgLQgCAEgHAEIgrAYQgJAFgDANQgIAbgLAVIgGALQgXAfgRAOQgLAJgLAAIgFgBgAABAAQgcANgKAHIgmAeQgDADAAAEQgBAMAEAUQACAGAFADQAFACAFgBQALgDAKgLQANgMAFgIQASgXAIgXQAGgRACgJgAgeAJIABACIACgDIgCAAg");
	this.shape_76.setTransform(-88.7,20.9,1.3,1.3,5.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#003EC9").s().p("AhGByQgQgEgFgPQgFgUACgdQABgJAHgCQAHgDAMgKIAGgFQAfgWAYgKQAGgDALgGIACgDIACgLQAEgXAAgKQAAgKgDgFQgEgHgHAAQgEAAgEADQgOAHgPARQgIAJgDAGIgBAFQAAABAFADIAHAEIgHAEQgDADgGAAQgEAAgHgEIgBAAQgJgFAFgMQAHgTAMgLIAJgIIAPgMQADgDARgIIAFgBQAHAAAIAEQAIAEAEAFQAHAMAAAMQACATgEAOIgBAGIA9gYIgFALQgDAHgHADIgBAAIgrAYQgHAFgDAKQgGAZgNAYIgBAEIgFAIQgXAegSAQQgMAKgMAAgAgHAHQgWAMgHAFIgmAeIgBADQgCAOAFARQACAGAGAAIADAAQAKgDAJgJIAAgBQAMgMAFgHQASgWAHgXIAGgRg");
	this.shape_77.setTransform(-88.4,20.9,1.3,1.3,5.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#003EC9").s().p("Ag/CNQACgFgEgOIAFgMQACgGADgEQACgCABgGIA6jJQABgGABgVQABgFAEgEQACgEADACQAEACABADIABAKQAAABAAABQAAABgBAAQAAABAAAAQAAAAAAABQgDADgCAGIgCAKIgQBEIgOAtIAAAHIAKgMQAOgVAXgSIAOgIQANgDAEAOQAFARgFAUQgKAkgMAaQgNAegHAdQgBAFACAFQgCAFgEgDQgEgDgBgEQgBgEACgGIAOgrIANgfIAPg2QACgNgFgMIgIACIgQANQgXAVgNAWIgJAOQgGAGgEAOIgYBTIgFAKQgIgDABgFg");
	this.shape_78.setTransform(-168.5,30.5,1.3,1.3,5.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#003EC9").s().p("Ag5CZQgNgFACgJQACgFgDgJIgBgDIAAgBIAAgCIAFgLIABgBQACgGADgFIACgFIAtiQIANg6QACgKAAgOIABgCQAAgGAFgGQAEgEAEAAIAEABQAFADABAFIACAKIAAACQAAAFgDADQgDADgBAIIgBAFIgaBlQANgTAWgRIACgCQAHgGAHgBIAGgBQANAAAEAPQAFAUgGAUQgIAjgNAbQgOAfgGAbQgBAEABAEIABABIgBADQgCAFgGAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgGgFgBgFQgBgEABgJIAqh/QACgKgDgJIgCAAIgQANQgWATgMAXQgFAIgGAGQgGAJgCAKIgYBTIgEAIIgCACIgCAEg");
	this.shape_79.setTransform(-168.5,30.6,1.3,1.3,5.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#003EC9").s().p("AgmA8QgMgOAAgNIgFg7IAAgDIgBgRQAAgJgFgHQAJgHAEAKQADAGAAAIIAHBSQABAGADAGQAFAHAHgGQAHgGAHgNIANgVIARgdQAKgTARgTQACgDAGgDIAEAAIAAACIgMAQIgPAXIgbAxQgFAJgMASQgEAEgHAFQgFADgDAAQgFAAgEgGg");
	this.shape_80.setTransform(-111.5,-38.2,1.3,1.3,5.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#003EC9").s().p("AgqA/QgMgQAAgNIgEgqIgCgSIAAgIQAAgSgEgHIgDgEIAEgDQAFgEAFAAQAGAAAEAJQAEAJgBAGIACAmQACAVADAXQABAEADAGIACACIADgCQAGgFAHgMIAdgyQAJgTATgUQADgEAGgDIADgBIAHAAIACAIIgBACIgEAFIgIALQgKANgFAJIgMAVIgPAcQgHANgLAPQgDAFgJAGQgFADgFAAQgIAAgGgIg");
	this.shape_81.setTransform(-111.5,-38.3,1.3,1.3,5.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#003EC9").s().p("AgbBHQgNAAgJgOIgDgGIgHAIIgIgCQABgIAGgHQADgDABgGIACgYQACgJALgSQAJgNAOgRQARgRAMgEQAFgDAGAFQAHAGABAGQACAFgCAFQgGAOgEAFQgPAUgWAVIgbAYIADAKQAIAPAOgDQALgBAHgGQAQgLAHgGIAWgSQAOgKAIgIIABgBQACADgDADIgYAXIgiAeQgNAMgSAAIgEAAgAAIg6QgQANgHAIIgGAKQgMANgIASQgFAKAAANIAWgTIAggjQAFgGAJgPQAEgHgFgEQgCgBgIAAIgDACg");
	this.shape_82.setTransform(-91.3,-44.1,1.3,1.3,5.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#003EC9").s().p("AgcBMQgPAAgKgRIgEAEIgDABQgDgBgDgBIgCgBIgEgBIAAgEQABgIAIgJQACgDAAgEIAAgFIACgSQACgKAMgUQAKgOAOgQQAQgSAOgGIAGgBQAFAAAFAFQAJAHABAIQACAIgCAFQgHAOgEAGQgQAVgWAUIgYAXIAAAAIABAGQAGAKAIgBIADAAQAKgCAGgEIAJgHIAOgLIATgOQAUgRAEgDIAGgDIADADQAFAFgHAGIg6A2QgOANgUAAgAALg2QgOAKgIAKIgCAEIgFAGQgKALgJATIgDAJIANgLIAfgiQAFgFAHgNIACgDQAAgBABAAQAAgBAAgBQAAAAAAAAQAAgBgBAAIgDgBIgDAAg");
	this.shape_83.setTransform(-91.3,-44.1,1.3,1.3,5.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#003EC9").s().p("Ag5EAIgCgPQACgwAJgmIA8k+IAPg5IAHgQIAGgRIAJgJIALADQgBAEgDACIgGACIgFANQgKAagEARIgLApIgKA0IgsDpIgFAWIgGAiQgGAkgCAmIgBACQgDgDAAgEg");
	this.shape_84.setTransform(-173.6,-40.9,1.3,1.3,5.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#003EC9").s().p("Ag4ELQgGgEgBgIIAAgCIgBgNQACgtAJgpIAxkGQAFgeAGgaQADgPAFgNIAIgeQABgHAFgLIAGgOQABgDACgCIABgBIAJgJIARAGIgBAEQgBAIgKAEIgEAKQgIAWgGAVIhLF+QgHApgBAgIgBAEIAAAAIgDAFg");
	this.shape_85.setTransform(-173.6,-40.8,1.3,1.3,5.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#003EC9").s().p("Ah4BbQgFgDADgEQADgFADgLIAEgQIAFgQIABgCIABgLQABgHADgEIADgLIACgLIANg8QABgKAJgDIAPgGQAKgFAMAEQAJAEAAAJQABAKgDAJQgGASgRASIgbAcIgLAJIgCADIACACIAYAFIAOAFQANAGAgADQAhAEAsgCIAzgCIADABIAAABIgDABIgqAFQgTADgmABQgXABgUgFIgkgHIgcgHIgJgCIgCADIgSA7IgGgCgAhLg0IACAIQgBAHgDABQgCABgDAIIgEAYQAIgEABgCIAfgjQAHgIADgTQAAgEgCgDQgCgDgDAAQgNAAgFAHIgEACQgFACgCACQgBACAAAHIAGACQAEABABADQgDACgEgBIgEgBIgCABg");
	this.shape_86.setTransform(-65.1,-47.1,1.3,1.3,5.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#003EC9").s().p("Ah0BhIgCgBIgFgBQgEgCgBgFQgBgDACgEQADgFADgNIAJgdIAAgBIAAgBIABgHQABgLAEgFQACgDACgKIANg/IAAgFQADgMALgEIAOgGQAGgDAHAAQAGAAAHACQALAFACAMQABANgEAIQgGASgSAUIgbAcIgHAGIgBABIATAEQAHACAHADQALAFAbADIAGABQAYACAYAAIAdAAIAkgCIAPAAIAHABIABAIIgEACIAAAAIgEABIgqAFQgTADgnABIgFAAQgVAAgSgDIhFgQIgTA+gAhFgsQAAAJgGADQAAAAAAAAQgBABAAAAQAAABAAABQgBAAAAABIgDAOIAdghQAHgIACgRIgBgEIgBgBIgDAAQgGAAgEAFQgDADgEACQgFABAAADIABABQAIABACAGIABADIgCACQgDADgFAAIgCAAQABAAAAAAQAAABAAAAQAAABAAAAQAAAAgBABg");
	this.shape_87.setTransform(-65,-47.1,1.3,1.3,5.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#003EC9").s().p("AAAD7QgMgJgHgPQgGgNgBgaIAAgfQAAgYAEgkIAMhbIgFABIgQANIgRAKIgSAKIgLAGQgKAFgCAGIgEACIgFgJQgDgDAFgDIASgJIAHgEQAEgEATgJQAKgFAHgGIAUgOQADgDACgJQAJgjACgQIAIgdIAJgcQAHgYAMgXIAnhHQADgGAHABIAKAAQACAFgGADQgJADgGANIgZAuIgJATQgIAQgMAoIgJAaIgNA2IAAAFQAGgDAIgFIAMgKIAYgRIAXgUIACABQgEAIgMALIgfAbIgXARQgIAGgCAJIgIAtIgCARIgGBIIgBAsIAAASQACASACAIQADAKAKAJIAGAFQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAIgDAAg");
	this.shape_88.setTransform(-160,-44.1,1.3,1.3,5.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#003EC9").s().p("AgCD/QgPgLgGgPQgHgPgBgbIAAgeQAAgYAEgkIAAgBIAFgzIAEgXIABgIIgCACIgKAHIgLAIIgXANIgCABIgKAFQgIAFgBAEQgCADgDABIgBAAIgEADIgJgOQgCgDABgEQABgEAEgBIAUgKIAEgDQAFgEAOgIIAGgCIAQgKIAUgOQACgCABgHIABgBIALgyQACgNAIgYIAHgVQAGgYANgXIAmhIQAFgHAIAAIACAAIANAAIABADQACAEgBAEQgCADgFADQgHADgGALIgYAtIgFAKIgEAKQgJAQgKAjIgKAfIgKApIgCAGIApgdIAQgOIAKgJIAHAHIgBADQgDAHgNANIAAABIg3AsQgGAEgCAHIgKA+IgHB5QgBAHABAFQABALADAOQADAJAIAIIAKAIIgDAEQgDADgEABQgDAAgCgCg");
	this.shape_89.setTransform(-160,-44,1.3,1.3,5.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#003EC9").s().p("AhfBcQgNAAgIgQQgGgNACgNIAAgKQgCgQANgNIAcgaQAKgIAMgGQALgEAKAHQAMAIgBASQAAAXgPAVIgVAgQAMgEAKgKQAOgMAegjIASgXQAJgOgCgQQgCgPAKgOQAFgIALgFIAPgIQAQgHAMAFQAGADADADIAKAJQAFAFABAGQACANgBAGQgDARgKAMQgUAagWANIgLAEQgKACgHgGQgIgGgBgKIgBgMQgGABgGAHIgkAvQgJAKgVARQgHAGgOAGQgJAEgKAAIgFgBgAhkAZIgBABQgMATAGAWQACAHAHAHQADACACgBQAOgEAHgIIAMgQQAUgYAHgbIAAgKQAAgIgIgEQgHgEgHADQgSAKgHAIIgDADQAAABAAAAQAAABABAAQAAABAAAAQAAABABABIADAGIgEABIgCAAQgKAAgGAMgAAlgNIADASQABAHAGADQAGAEAHgFQAPgJAPgPQAJgJAIgPIAEgMQAFgPgKgJQgRgSgVALIgMAHQgMAGgFARQAGABABACQABACgDAGQgIAKAHAKIgDAAQgBAAAAAAQgBAAAAABQgBAAAAABQAAABAAAAg");
	this.shape_90.setTransform(-139.6,-32.2,1.3,1.3,5.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#003EC9").s().p("AhfBhQgQAAgJgTQgHgPACgOIAAgIQgDgSAQgPIAcgbQAHgFAQgJQAGgCAEgBQAIAAAIAHQANAJAAAUQAAAZgQAXIgKAOIAEgDQAQgPAbgeIABgCIARgXQAIgMgCgOQgCgRALgQQAGgIAMgGIAPgIQAKgFAJAAQAGAAAGADQAIAEADADIAEADQAMAKACAKQACAKgBAKQgEARgKAOQgVAbgXANIgMAFIgFABQgKAAgIgIQgIgHgBgLIAAgGIgoAzIAAABQgLANgUAPQgHAGgPAHQgKADgNAAgAheBOQAMgEAGgHIAMgQQAUgYAGgYIABgKQgBgEgDgCQgEgEgEAAIgDABIgCACQgPAIgHAGIgCACIABACIAFALIgKADIgBAAIgCgBQgFAAgFAKIgBACQgMAQAGAWQABAFAGAGIAAgBgAAtAEQABAIAGAAQADAAACgCQANgIARgPQAKgLAFgMIABgBIAEgKQADgOgHgFQgJgKgKAAQgIAAgGAEIgMAHQgJAFgEAKQAFACABACQACAHgFAFQgGAJAFAGIAGAKIgLgCg");
	this.shape_91.setTransform(-139.6,-32.2,1.3,1.3,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ghghj_1, new cjs.Rectangle(-204.7,-76.1,433.7,145.1), null);


(lib.ghggg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1D1D1B").s().p("AAsA8IAAhaIgsA7Igrg7IAABaIgSAAIAAh3IARAAIAsA+IAtg+IARAAIAAB3g");
	this.shape_19.setTransform(465.3,-311.2,1.2,1.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1D1D1B").s().p("AAyA8IAAh3IASAAIAAB3gAhDA8IAAh3IARAAIAAAtIAgAAQAUAAAOAJQANAIAAASQAAASgMALQgNAKgTAAgAgyAsIAhAAQANAAAHgGQAIgFAAgMQAAgJgIgGQgGgGgPAAIggAAg");
	this.shape_20.setTransform(444.9,-311.2,1.2,1.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1D1D1B").s().p("AAjA8IAAg0IhFAAIAAA0IgRAAIAAh3IARAAIAAAzIBFAAIAAgzIASAAIAAB3g");
	this.shape_21.setTransform(425.6,-311.2,1.2,1.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1D1D1B").s().p("AAiA8IAAg0IhEAAIAAA0IgSAAIAAh3IASAAIAAAzIBEAAIAAgzIASAAIAAB3g");
	this.shape_22.setTransform(408.3,-311.2,1.2,1.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1D1D1B").s().p("AgsAtQgSgTAAgaQAAgZASgSQATgTAZAAQAbABASARQARAUAAAYQABAagTASQgRATgbgBQgaAAgSgRgAgeghQgNAOAAATQAAAUANANQANANARAAQAUAAAMgNQAMgOAAgTQAAgSgMgOQgNgOgTAAQgTAAgLANg");
	this.shape_23.setTransform(390.6,-311.2,1.2,1.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1D1D1B").s().p("AAkA8IAAheIhHBeIgRAAIAAh3IASAAIAABeIBGheIARAAIAAB3g");
	this.shape_24.setTransform(372.8,-311.2,1.2,1.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1D1D1B").s().p("AArBLIAAgeIhnAAIAAh3IASAAIAABnIBDAAIAAhnIASAAIAABnIASAAIgDAug");
	this.shape_25.setTransform(356.2,-309.4,1.2,1.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1D1D1B").s().p("AgmA0QgOgJAAgTQAAgSAOgKQAPgKAWAAQATAAARAFIAAgDQAAgQgJgJQgKgIgQAAQgRAAgTAJIgFgPQAWgKAUAAQAaAAANANQANANAAAWIAABJIgSAAIAAgSQgQAUgaAAQgRAAgOgKgAgZAGQgIAHgBALQAAALAJAGQAJAHANAAQAPAAAMgJQALgJAAgOIAAgMQgUgEgPAAQgOAAgLAGg");
	this.shape_26.setTransform(338.1,-311.2,1.2,1.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1D1D1B").s().p("AgzA8IAAh3IA5AAQATAAAKAIQAKAIAAAOQAAAUgUAIQAbAGAAAWQAAAPgMAJQgLAJgVAAgAghAtIAnAAQANgBAHgFQAHgFAAgJQAAgJgHgGQgIgEgOAAIglAAgAghgIIAkAAQALAAAHgEQAGgGAAgJQAAgIgGgEQgGgEgMgBIgkAAg");
	this.shape_27.setTransform(322.7,-311.2,1.2,1.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1D1D1B").s().p("AgsAtQgSgTAAgaQAAgZASgSQATgTAZAAQAbABASARQARAUAAAYQABAagTASQgRATgbgBQgaAAgSgRgAgfghQgMAPAAASQAAAUANANQAMANASAAQATAAANgNQAMgOAAgTQABgSgNgOQgNgOgTAAQgSAAgNANg");
	this.shape_28.setTransform(305.1,-311.2,1.2,1.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1D1D1B").s().p("AAjA8IAAg0IhFAAIAAA0IgRAAIAAh3IARAAIAAAzIBFAAIAAgzIARAAIAAB3g");
	this.shape_29.setTransform(287.5,-311.2,1.2,1.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1D1D1B").s().p("AAjA8IAAg0IhFAAIAAA0IgSAAIAAh3IASAAIAAAzIBFAAIAAgzIASAAIAAB3g");
	this.shape_30.setTransform(270.1,-311.2,1.2,1.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1D1D1B").s().p("AAkA8IAAheIhHBeIgRAAIAAh3IASAAIAABeIBGheIARAAIAAB3g");
	this.shape_31.setTransform(252.6,-311.2,1.2,1.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1D1D1B").s().p("AAiA8IAAg0IhEAAIAAA0IgSAAIAAh3IASAAIAAAzIBEAAIAAgzIASAAIAAB3g");
	this.shape_32.setTransform(226.8,-311.2,1.2,1.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1D1D1B").s().p("AgmBAQgSgSAAgbQAAgZARgTQAQgSAYAAQAaAAAPASQAPASAAAbIAAAGIheAAQABASAMALQAMALAQAAQAWAAAQgRIALAKQgUAWgeAAQgYAAgRgRgAgZgQQgLAMgBAQIBMAAQgCgRgKgLQgKgMgRAAQgNAAgMAMgAAKg6IAAgWIAUAAIAAAWgAgeg6IAAgWIAVAAIAAAWg");
	this.shape_33.setTransform(209.9,-313.5,1.2,1.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1D1D1B").s().p("AAxBLIAAgeIhgAAIgEAeIgOAAIAAguIANAAQAQgdAAg1IAAgVIBUAAIAABnIASAAIgDAugAgTgqQAAAtgOAaIA/AAIAAhYIgxAAg");
	this.shape_34.setTransform(193.1,-309.4,1.2,1.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1D1D1B").s().p("ABKA8Igpg4IgYAaIAAAeIgRAAIAAgeIgYgaIgoA4IgVAAIAxhEIgvgzIAWAAIA9BEIAAhEIARAAIAABEIA9hEIAWAAIgvAzIAxBEg");
	this.shape_35.setTransform(173.1,-311.2,1.2,1.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1D1D1B").s().p("AgrAtQgTgTABgaQgBgZATgSQARgTAaAAQAbABARARQATAUgBAYQABAagTASQgRATgbgBQgaAAgRgRgAgfghQgMAPAAASQAAAUAMANQAOANARAAQATAAANgNQAMgOAAgTQAAgTgMgNQgNgOgTAAQgSAAgNANg");
	this.shape_36.setTransform(153.1,-311.2,1.2,1.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1D1D1B").s().p("Ag8BRIAAihIA8AAQAcAAAQAOQARANAAAZQAAAZgSANQgTAOgaAAIgnAAIAAA5gAgpAHIAoAAQASAAANgJQAMgJAAgRQAAgRgLgJQgMgJgTAAIgpAAg");
	this.shape_37.setTransform(135.5,-313.8,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ghggg_1, new cjs.Rectangle(128.3,-323.5,344.5,23.1), null);


(lib.dfgdfggg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgMAZQgFgFgBgHIAHgBQABAGADADQADACAEAAQAEAAAEgDQADgDAAgGQAAgEgDgDQgDgEgFAAIgEABIABgFIABAAQADAAAEgCQAEgDAAgFQAAgDgDgDQgDgCgDAAQgEAAgDACQgCADgBAFIgHgBQABgHAFgEQAEgEAHAAQAEAAAEACQAEACACADQACAEAAAEQAAADgCADQgCADgEACQAFABADADQADAEAAAFQAAAIgGAFQgFAFgIAAQgHAAgFgEg");
	this.shape_85.setTransform(408.8,-306.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgMAYQgGgEAAgHIAHgBQABAGADACQADADAEAAQAEAAAEgEQAEgEAAgGQAAgGgEgDQgEgDgEAAQgEAAgCACQgDABgCACIgGgBIAGgdIAbAAIAAAHIgWAAIgDAPQAFgDAFAAQAHAAAGAFQAFAEAAAIQAAAIgEAGQgGAHgJAAQgIAAgEgFg");
	this.shape_86.setTransform(404.4,-306);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_87.setTransform(399.7,-306.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgMAXQgGgHABgQQAAgJACgGQABgHAFgDQAEgDAFAAQAFAAADACQADABADAEIAEAIIABANQAAAKgCAGQgDAGgEAEQgDADgHAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQADgFAAgOQAAgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_88.setTransform(395.4,-306.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgJAcQgBgHADgJQADgKAEgIQAEgIAFgHIgaAAIAAgGIAkAAIAAAFQgGAGgFAKQgGAIgCALQgCAHAAAIg");
	this.shape_89.setTransform(391,-306.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgMAXQgFgHAAgQQAAgJABgGQACgHAFgDQADgDAGAAQAFAAADACQAEABACAEIAEAIIABANQgBAKgBAGQgDAGgEAEQgDADgHAAQgHAAgFgGgAgHgSQgEAFABANQgBAOAEAFQADAEAEAAQAFAAADgEQAEgFgBgOQABgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_90.setTransform(386.5,-306.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgNAXQgFgHAAgPQAAgPAGgIQAFgGAJAAQAHAAAEAEQAEADABAHIgHABQgBgFgCgBQgDgDgEAAIgFABQgDADgCAEQgCAFAAAJQADgEADgCIAHgCQAHAAAFAFQAFAEAAAJQAAAFgDAFQgCAEgEADQgEACgFAAQgIAAgGgGgAgGABQgEADAAAGIABAHQACADADACQADABACAAQAEAAADgDQAEgEAAgGQAAgGgEgDQgDgDgEAAQgFAAgCADg");
	this.shape_91.setTransform(382.1,-306.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgMAaQgEgEgBgHIAHgBQABAFACACQADACADAAQADAAACgBIAEgEIADgHIABgIIAAgCQgCAEgEACQgEACgDAAQgHAAgFgFQgFgEAAgJQAAgJAFgFQAFgFAIAAQAFAAAEADQAFADACAFQADAGAAAKQAAAKgDAHQgCAGgFAEQgEADgGAAQgGAAgFgDgAgHgTQgEAEAAAGQAAAGAEADQADADAEAAQAFAAADgDQADgDAAgGQAAgGgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_92.setTransform(377.6,-306.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgKAcQABgHACgJQADgKAEgIQAEgIAFgHIgbAAIAAgGIAkAAIAAAFQgFAGgGAKQgFAIgCALQgCAHAAAIg");
	this.shape_93.setTransform(373.2,-306.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgJAcQAAgHACgJQADgKAEgIQAEgIAGgHIgbAAIAAgGIAkAAIAAAFQgGAGgFAKQgGAIgCALQgCAHgBAIg");
	this.shape_94.setTransform(368.8,-306.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_95.setTransform(364.1,-306.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgMAXQgFgHgBgQQAAgJACgGQADgHADgDQAEgDAGAAQAEAAAEACQADABADAEIADAIIABANQAAAKgCAGQgBAGgFAEQgEADgGAAQgHAAgFgGgAgHgSQgDAFgBANQABAOADAFQADAEAEAAQAFAAADgEQAEgFAAgOQAAgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_96.setTransform(359.8,-306.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_97.setTransform(355.1,-306.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_98.setTransform(348.1,-306.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAIABQAEABAEACQADACABADQACAEAAAEQAAAHgFAEQgFAFgMAAIgNAAIAAAYgAgNAAIANAAQAIAAADgDQADgDAAgFQAAgDgBgDQgDgCgCgBIgIgBIgNAAg");
	this.shape_99.setTransform(342.6,-306.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgSAdIAAg5IAlAAIAAAHIgdAAIAAAyg");
	this.shape_100.setTransform(338,-306.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_101.setTransform(332.4,-306.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgNAYQgFgEAAgHIAHgBQABAGADACQADADAEAAQAFAAADgEQAEgEgBgGQABgGgEgDQgDgDgFAAQgDAAgDACQgDABgBACIgHgBIAGgdIAbAAIAAAHIgWAAIgDAPQAGgDAEAAQAHAAAFAFQAGAEAAAIQAAAIgEAGQgGAHgJAAQgHAAgGgFg");
	this.shape_102.setTransform(324.9,-306);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_103.setTransform(320.1,-306.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgMAXQgGgHAAgQQABgJACgGQACgHADgDQAFgDAFAAQAEAAAEACQADABADAEIADAIIACANQgBAKgCAGQgCAGgDAEQgFADgGAAQgIAAgEgGgAgHgSQgDAFgBANQABAOADAFQADAEAEAAQAFAAADgEQADgFABgOQgBgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_104.setTransform(315.9,-306.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgSAdIAAgFIAFgIIAJgIQAJgIADgEQADgEABgEQAAgEgEgDQgDgDgEAAQgFAAgCADQgEADAAAGIgGgBQAAgIAFgEQAEgFAIAAQAIAAAFAFQAFAEAAAHIgCAHQgBADgDADQgDAEgIAGIgHAHIgEAEIAcAAIAAAHg");
	this.shape_105.setTransform(311.4,-306.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_106.setTransform(306.7,-306.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgNAYQgEgEgBgHIAHgBQABAGADACQADADAEAAQAFAAADgEQADgEAAgGQAAgGgDgDQgDgDgFAAQgDAAgDACQgDABgCACIgGgBIAFgdIAcAAIAAAHIgWAAIgDAPQAGgDAEAAQAIAAAEAFQAGAEAAAIQAAAIgFAGQgFAHgJAAQgHAAgGgFg");
	this.shape_107.setTransform(302.6,-306);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_108.setTransform(298,-306.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgMAXQgFgHgBgQQAAgJACgGQADgHADgDQAEgDAGAAQAEAAAEACQADABADAEIADAIIABANQAAAKgCAGQgBAGgFAEQgEADgGAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQAEgFAAgOQAAgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_109.setTransform(293.7,-306.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgKAcQABgHACgJQACgKAFgIQAEgIAFgHIgbAAIAAgGIAkAAIAAAFQgFAGgGAKQgFAIgCALQgCAHgBAIg");
	this.shape_110.setTransform(289.3,-306.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgJAcQgBgHADgJQACgKAFgIQAEgIAGgHIgbAAIAAgGIAjAAIAAAFQgFAGgFAKQgGAIgCALQgCAHAAAIg");
	this.shape_111.setTransform(284.8,-306.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_112.setTransform(277.5,-306.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_113.setTransform(271.7,-306.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AAQAdIAAgsIgeAsIgIAAIAAg5IAHAAIAAAtIAegtIAHAAIAAA5g");
	this.shape_114.setTransform(265.9,-306.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_115.setTransform(259.8,-303.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgNAYQgFgFAAgHQAAgGADgEQADgCAFgCQgEgBgDgDQgBgDgBgEQABgHAEgEQAEgEAHAAQAHAAAFAEQAFAEAAAHQAAAEgDADQgBADgFABQAGACACADQADAEAAAFQAAAHgFAFQgGAFgIAAQgHAAgGgFgAgHAEQgDADAAAFIABAGIAEAEIAFABQAFAAAEgDQADgDAAgFQAAgFgDgDQgEgEgFAAQgEAAgDAEgAgGgUQgCADAAADQAAAEACADQADADADAAQAEAAADgDQACgDABgDQgBgEgCgDQgDgCgEAAQgDAAgDACg");
	this.shape_116.setTransform(256.4,-306.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_117.setTransform(250.9,-303.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AAQAbIAAgMIgfAAIAAAMIgGAAIAAgSIADAAQAIgJAAgaIAbAAIAAAjIAFAAIAAASgAgLAJIAVAAIAAgdIgOAAQgBAUgGAJg");
	this.shape_118.setTransform(247.3,-304.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgDAHQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_119.setTransform(241.8,-303.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AAKAdIAAgfIgTAfIgHAAIAAgpIAHAAIAAAeIATgeIAHAAIAAApgAgGgUQgEgDAAgFIAFAAIACAFIADABIAFgBIACgFIAFAAQAAAFgEADQgDACgEAAQgFAAgCgCg");
	this.shape_120.setTransform(238.5,-306.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgKAEIAAgHIAVAAIAAAHg");
	this.shape_121.setTransform(234.9,-305.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgSAdIAAgFIAFgIIAJgIQAJgIADgEQADgEABgEQAAgEgEgDQgDgDgEAAQgFAAgCADQgEADAAAGIgGgBQAAgIAFgEQAEgFAIAAQAIAAAFAFQAFAEAAAHIgCAHQgBADgDADQgDAEgIAGIgHAHIgEAEIAcAAIAAAHg");
	this.shape_122.setTransform(231.3,-306.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AAKAdIAAgfIgSAfIgIAAIAAgpIAHAAIAAAeIATgeIAHAAIAAApgAgGgUQgDgDgBgFIAEAAIADAFIADABIAFgBIACgFIAFAAQAAAFgDADQgEACgEAAQgFAAgCgCg");
	this.shape_123.setTransform(224.8,-306.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AAKAVIAAgfIgTAfIgHAAIAAgpIAHAAIAAAfIASgfIAIAAIAAApg");
	this.shape_124.setTransform(220.3,-305.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AAIAVIgIgNIgDgFIgEgBIAAATIgHAAIAAgpIAHAAIAAASQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQABgBACgHIADgGIADgCIAFgBIACAAIAAAGIgCAAIgEABIgCAFIgDAGIgDACQADABAFAHIAHANg");
	this.shape_125.setTransform(216.6,-305.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_126.setTransform(212.7,-305.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AAKAVIAAgTIgTAAIAAATIgHAAIAAgpIAHAAIAAASIATAAIAAgSIAHAAIAAApg");
	this.shape_127.setTransform(208.4,-305.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AAKAVIAAgfIgSAfIgIAAIAAgpIAHAAIAAAfIATgfIAHAAIAAApg");
	this.shape_128.setTransform(204,-305.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AAXAbIAAgMIgzAAIAAgpIAHAAIAAAjIAQAAIAAgjIAGAAIAAAjIAQAAIAAgjIAHAAIAAAjIAFAAIAAASg");
	this.shape_129.setTransform(198.6,-304.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgNAQQgFgFgBgLQABgLAGgFQAGgFAGAAQAIAAAGAGQAGAGgBAJQAAAHgCAFQgDAFgEACQgEADgGAAQgHAAgGgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAGAAADgEQAEgEAAgIQAAgHgEgEQgDgEgGAAQgEAAgEAEg");
	this.shape_130.setTransform(192.9,-305.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAIABQAFABACACQADACACADQACAEAAAEQAAAHgFAEQgFAFgLAAIgOAAIAAAYgAgNAAIAOAAQAHAAADgDQADgDAAgFQAAgDgBgDQgCgCgEgBIgGgBIgOAAg");
	this.shape_131.setTransform(188.1,-306.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AARAbIAAgMIggAAIAAAMIgGAAIAAgSIAEAAQAHgJAAgaIAcAAIAAAjIAEAAIAAASgAgLAJIAWAAIAAgdIgQAAQAAAUgGAJg");
	this.shape_132.setTransform(180.7,-304.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgPAJIAHgBQAAAEADACQADACADAAQADAAACgCQADgCAAgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAIgFAAIgCAAIAAgFIAFAAIADgCQABAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAQgCgCgDAAQgEAAgDAHIgHgBQAEgMALAAQAGAAAEAEQAEAEgBAFQAAAFgEADQACAAACADQACADAAADQAAAGgEADQgFAEgGAAQgOAAgCgNg");
	this.shape_133.setTransform(176.6,-305.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgNAQQgFgGAAgKQAAgJAFgGQAGgGAIAAQAHAAAGAGQAFAGAAAJIAAACIgeAAQABAHADADQAEAEAEAAQADAAAEgCQACgCABgFIAIABQgCAHgFADQgEAEgHAAQgIAAgGgGgAgGgMQgEAEgBAFIAXAAQAAgFgDgDQgEgEgEAAQgFAAgCADg");
	this.shape_134.setTransform(172.6,-305.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgNAQQgFgFgBgLQABgLAGgFQAGgFAGAAQAIAAAGAGQAGAGgBAJQAAAHgCAFQgDAFgEACQgEADgGAAQgHAAgGgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAGAAADgEQAEgEAAgIQAAgHgEgEQgDgEgGAAQgEAAgEAEg");
	this.shape_135.setTransform(168.1,-305.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgRAdIAAg4IAGAAIAAAFQADgDADgCQACgBADAAQAFAAAFADQAEACABAFQADAFAAAGQAAAHgDAEQgCAFgEACQgEADgFAAQgDAAgCgBQgDgCgCgCIAAAUgAgHgSQgEAEAAAIQAAAHAEAEQADADAEAAQAEAAADgEQAEgEAAgHQAAgIgEgEQgDgEgEAAQgEAAgDAFg");
	this.shape_136.setTransform(163.8,-304.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AAOAdIAAgyIgcAAIAAAyIgIAAIAAg5IAsAAIAAA5g");
	this.shape_137.setTransform(158.6,-306.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgDAHQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_138.setTransform(152.4,-303.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgOASQgEgDAAgFQAAgDACgDQAAgCADgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgCACQgDACgBAEIgHgBIADgHQADgDAEgBQAEgCAEAAQAFAAAEACQADABABACIACAFIABAGIAAAIIABANIABAFIgHAAQgCgCABgDIgIAEIgHACQgHAAgDgEgAgBADIgGABIgDACIgBAEQAAAAABABQAAABAAAAQAAABABAAQAAABABAAQABACAFAAQADAAADgCQADgBACgDQABgDAAgEIAAgDIgLADg");
	this.shape_139.setTransform(149.1,-305.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgQAVIAAgpIAQAAIAIABQADABACADQACADAAADIgBAFIgEAEQADAAACADQACACAAAEQAAAGgFADQgDADgIAAgAgJAPIAJAAIAIgBQACgCAAgDIgBgEQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAIgFAAIgJAAgAgJgCIAIAAIAEgBIAEgCQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgDgCgCIgHgBIgIAAg");
	this.shape_140.setTransform(144.9,-305.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AAIAVIgIgNIgDgFIgEgBIAAATIgHAAIAAgpIAHAAIAAASQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQABgBACgHIADgGIADgCIAFgBIACAAIAAAGIgCAAIgEABIgCAFIgDAGIgDACQADABAFAHIAHANg");
	this.shape_141.setTransform(141.1,-305.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_142.setTransform(137.2,-305.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgNAQQgGgFAAgLQAAgLAHgFQAGgFAGAAQAIAAAGAGQAFAGABAJQgBAHgCAFQgCAFgFACQgEADgGAAQgIAAgFgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQADgEAAgIQAAgHgDgEQgDgEgGAAQgEAAgDAEg");
	this.shape_143.setTransform(132.9,-305.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AAUAdIAAgvIgRAvIgFAAIgRgwIAAAwIgHAAIAAg5IALAAIAOAoIABAJIADgKIAOgnIAKAAIAAA5g");
	this.shape_144.setTransform(127.3,-306.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_145.setTransform(120.8,-303.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgLAVIAAgpIAXAAIAAAGIgQAAIAAAjg");
	this.shape_146.setTransform(118.4,-305.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgDAHQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_147.setTransform(113.4,-303.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgMAaQgEgEgBgHIAHgBQABAFACACQADACADAAQADAAACgBIAEgEIADgHIABgIIAAgCQgCAEgEACQgEACgDAAQgHAAgFgFQgFgEAAgJQAAgJAFgFQAFgFAIAAQAFAAAEADQAFADACAFQADAGAAAKQAAAKgDAHQgCAGgFAEQgEADgGAAQgGAAgFgDgAgHgTQgEAEAAAGQAAAGAEADQADADAEAAQAFAAADgDQADgDAAgGQAAgGgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_148.setTransform(110.1,-306.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_149.setTransform(105.3,-306.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_150.setTransform(101,-306.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgMAYQgFgEgBgHIAHgBQABAGADACQADADAEAAQAEAAAEgEQADgEABgGQgBgGgDgDQgEgDgEAAQgDAAgDACQgDABgCACIgGgBIAFgdIAcAAIAAAHIgWAAIgDAPQAFgDAFAAQAIAAAEAFQAGAEAAAIQAAAIgFAGQgFAHgJAAQgIAAgEgFg");
	this.shape_151.setTransform(96.8,-306);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_152.setTransform(92,-306.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_153.setTransform(87.5,-306.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgBASIAKgSIgKgRIAFAAIANARIgNASgAgQASIALgSIgLgRIAGAAIALARIgLASg");
	this.shape_154.setTransform(81.2,-305.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_155.setTransform(77.9,-303.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgRAdIAAg5IAkAAIAAAHIgdAAIAAAyg");
	this.shape_156.setTransform(74.9,-306.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_157.setTransform(71.4,-303.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_158.setTransform(67.3,-306.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_159.setTransform(63.4,-303.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgMAZQgGgDgDgHQgDgHAAgIQAAgIADgHQAEgHAGgEQAGgDAHAAQAIAAAGAFQAGAEACAIIgHABQgCgFgEgEQgEgCgFAAQgGgBgEAEQgFADgCAFQgBAGAAAFQAAAHACAFQACAFAEAEQAFACAEAAQAGAAAFgDQAEgFACgHIAHADQgCAIgGAFQgGAGgJAAQgJAAgFgFg");
	this.shape_160.setTransform(59.3,-306.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AAQAdIAAgsIgeAsIgHAAIAAg5IAGAAIAAAtIAegtIAIAAIAAA5g");
	this.shape_161.setTransform(51.4,-306.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AATAkIAAgOIglAAIAAAOIgHAAIAAgVIAFAAQAHgKAAgfIAAgIIAhAAIAAAxIAGAAIAAAVgAgGgYIgBATQgCAMgEAIIAaAAIAAgrIgTAAg");
	this.shape_162.setTransform(45.6,-305.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_163.setTransform(40.2,-306.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AASAdIgHgSIgXAAIgGASIgIAAIAWg5IAHAAIAYA5gAgDgLIgGAQIASAAIgGgPIgDgLIgDAKg");
	this.shape_164.setTransform(34.6,-306.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AALAdIgKgQQgDgGgDgDQgDgCgEAAIAAAbIgHAAIAAg5IAHAAIAAAaQAGAAABgCQADgCACgIIAEgIIAFgEQACgCADAAIAGABIAAAGIgCAAIgCAAQgDAAgCACIgFAHQgCAIgCABIgEADQAEABAGAJIAMATg");
	this.shape_165.setTransform(29.9,-306.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AALASIgLgSIALgRIAGAAIgKARIAKASgAgDASIgNgSIANgRIAFAAIgJARIAJASg");
	this.shape_166.setTransform(25,-305.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_167.setTransform(17.5,-306.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_168.setTransform(11.3,-306.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_169.setTransform(5.1,-306.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dfgdfggg_1, new cjs.Rectangle(0,-312.4,505.2,12.9), null);


(lib.ClipGroup_9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AlsFtQiXiXgBjWQABjVCXiXQCXiXDVgBQDWABCXCXQCYCXAADVQAADWiYCXQiXCXjWABQjVgBiXiXgAhuAqIhnGEQBjAzByAAQDHAACNiNQCMiNABjHQgBhGgThEgAnHCYQAbBSA2BDQA1BDBKAsIBflkIh8AnIglCKIgqANIAliKgAmIkUQhYB9AACXQAABDASA+ICXgwICPoTQiLA0hVB6gAh+nPIiPITIB8goIBVk6IAqgMIhUE4IIrivQgziOh6hXQh+haiaAAQhAAAg+ARg");
	mask_1.setTransform(51.7,51.7);

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9_1, null, null);


(lib.ClipGroup_5_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AmhGXQhShVguhpQguhrAAhuQAAj0CuitQCtiuD0AAQD2AACtCuQCtCtAAD0QAAD2itCtQitCtj2AAQjvAAiyi5g");
	mask_1.setTransform(118.4,118.4);

	// Слой 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#D52E3F","#D52E3F","#CE2E3D","#CC2E3C","#BA2E36","#B72C35","#AC2B30","#A62A2E","#9B2829","#76231D"],[0,0.047,0.047,0.078,0.161,0.439,0.502,0.694,0.835,1,1],43,42.9,-52.8,-52.9).s().p("AyfAAISfyfISgSfIygSgg");
	this.shape_1.setTransform(118.4,118.4);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_1_1, new cjs.Rectangle(59.2,59.2,118.4,118.4), null);


(lib.ClipGroup_4_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AmYGZQipiqAAjvQAAjuCpiqQCqipDuAAQDvAACqCpQCqCqgBDuQABDviqCqQiqCqjvgBQjuABiqiqg");
	mask_1.setTransform(113.1,113.1);

	// Слой 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#D52E3F","#C82D3A","#A5292D","#9B2829","#76231D"],[0,0.514,0.663,0.933,1,1],-37.8,-51.3,55.1,74.6).s().p("AxqiqIUVvAIPAUVI0VPAg");
	this.shape_1.setTransform(113.1,113.1);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_1_1, new cjs.Rectangle(55.3,55.3,115.7,115.7), null);


(lib.ClipGroup_3_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AmRGRQimimAAjrQAAjqCminQCnilDqAAQDrAACmClQCnCnAADqQAADrinCmQimCnjrAAQjqAAining");
	mask_1.setTransform(111,111);

	// Слой 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#D52E3F","#C82D3A","#A5292D","#9B2829","#76231D"],[0,0.224,0.459,0.89,1,1],-37,-50.2,54.1,73.3).s().p("AxVinIT9uuIOuT8Iz9Ovg");
	this.shape_1.setTransform(111,111);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_0_1, new cjs.Rectangle(54.3,54.3,113.6,113.5), null);


(lib.ClipGroup_2_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AhPAPQgLgMAEgYIAfAAQABARAPgEQAJgCAHgLIAcAAQgTAggfAJQgIACgHAAQgMAAgHgHgAAkgVIA1AAIgRAHQgIACgHAAQgNAAgIgJg");
	mask_1.setTransform(8.8,2.2);

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_0_1, null, null);


(lib.ClipGroup_1_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AidBxQgKgNAFgaQAFgbASgVQASgWAXgGQAIgCAHAAQAQAAAHAMQAHANgEAWQgFAWgMATQgNATgSAKgAhnAaQgVAHgGAgQgFAbAOAAIAFgBQAVgGAGggQADgSgFgGQgDgEgEAAIgFABgAjZBxQAHgJADgQQADgRgFgHQgEgFgIADQgIACgHAIQgJAKgDASQgCAJABAEIggAAIABgEQAGgbARgVQASgWAYgHQAIgCAGAAQAQAAAHANQAHANgEAXQgEASgJAQgAgsgTIAjgKIADBDIABAAIAihRIAkgLIg/CHIgkANgABRg8IBGgVIgGAfIglANIgDAPIAfgMIgFAfIggAJIgDAPIAmgOIgIAkIhIAWgAC4hcIBDgTIALgBQALAAAFAGQAFAHgDANQgFAYgSALQANACgDAYIgBAMQgBAJABADIgjAJIABgRQABgLgBgEQgCgHgJADIgQABIgKAxIgkAKgADlhOIgQAFIgFAYIASgFQAPgEADgMQACgJgIAAIgJABg");
	mask_1.setTransform(28.2,11.3);

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1_1, null, null);


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


(lib.main2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 19
	this.instance = new lib.ghggg_1();
	this.instance.parent = this;
	this.instance.setTransform(-106,504.8,1.2,1.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(298).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(46).to({alpha:0},6,cjs.Ease.get(1)).wait(1));

	// Слой 24 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A9lfKMAANg+aMA6+AAMMgVxA+Vg");
	var mask_graphics_1 = new cjs.Graphics().p("A+WfJMAANg+ZMA8gAAMMgWVA+Vg");
	var mask_graphics_2 = new cjs.Graphics().p("A/BfJMAANg+aMA92AANMgW0A+Wg");
	var mask_graphics_3 = new cjs.Graphics().p("A/lfJMAANg+aMA++AANMgXPA+Wg");
	var mask_graphics_4 = new cjs.Graphics().p("EggCAfJMAANg+aMA/4AAOMgXkA+Vg");
	var mask_graphics_5 = new cjs.Graphics().p("A+6fJMAANg+aMBAnAAOMgX1A+Vg");
	var mask_graphics_6 = new cjs.Graphics().p("A9lfJMAANg+aMBBIAAOMgYBA+Vg");
	var mask_graphics_7 = new cjs.Graphics().p("A8yfJMAANg+aMBBbAAOMgYIA+Vg");
	var mask_graphics_8 = new cjs.Graphics().p("A8hfJMAANg+aMBBiAAOMgYLA+Vg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-14.1,y:197.3}).wait(1).to({graphics:mask_graphics_1,x:51.6,y:197.3}).wait(1).to({graphics:mask_graphics_2,x:108.4,y:197.3}).wait(1).to({graphics:mask_graphics_3,x:156.6,y:197.4}).wait(1).to({graphics:mask_graphics_4,x:195.9,y:197.4}).wait(1).to({graphics:mask_graphics_5,x:217,y:197.4}).wait(1).to({graphics:mask_graphics_6,x:228.8,y:197.4}).wait(1).to({graphics:mask_graphics_7,x:235.8,y:197.4}).wait(1).to({graphics:mask_graphics_8,x:238.2,y:197.3}).wait(352));

	// ghghj
	this.instance_1 = new lib.ghghj_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(252,114.8,0.8,0.8);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},9).wait(351));

	// mask-out (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_62 = new cjs.Graphics().p("EgwvAcLMAAAg4VMBkTAAAMgkrA4Vg");
	var mask_1_graphics_63 = new cjs.Graphics().p("EgqrAcLMAAAg4VMBVdAAAMgfQA4Vg");
	var mask_1_graphics_64 = new cjs.Graphics().p("EgkAAcLMAAAg4VMBIBAAAMgaVA4Vg");
	var mask_1_graphics_65 = new cjs.Graphics().p("A9/cLMAAAg4VMA7/AAAMgV8A4Vg");
	var mask_1_graphics_66 = new cjs.Graphics().p("A4scLMAAAg4VMAxZAAAMgSEA4Vg");
	var mask_1_graphics_67 = new cjs.Graphics().p("A0FcLMAAAg4VMAoLAAAMgOsA4Vg");
	var mask_1_graphics_68 = new cjs.Graphics().p("AwNcLMAAAg4VMAgbAAAMgL3A4Vg");
	var mask_1_graphics_69 = new cjs.Graphics().p("AtBcLMAAAg4VIaDAAMgJiA4Vg");
	var mask_1_graphics_70 = new cjs.Graphics().p("AqicLMAAAg4VIVFAAMgHtA4Vg");
	var mask_1_graphics_71 = new cjs.Graphics().p("AoxcLMAAAg4VIRjAAMgGbA4Vg");
	var mask_1_graphics_72 = new cjs.Graphics().p("AntcLMAAAg4VIPbAAMgFpA4Vg");
	var mask_1_graphics_73 = new cjs.Graphics().p("AnXcLMAAAg4VIOvAAMgFZA4Vg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_1_graphics_62,x:330,y:142}).wait(1).to({graphics:mask_1_graphics_63,x:273.8,y:142}).wait(1).to({graphics:mask_1_graphics_64,x:215.3,y:142}).wait(1).to({graphics:mask_1_graphics_65,x:162.8,y:142}).wait(1).to({graphics:mask_1_graphics_66,x:116.4,y:142}).wait(1).to({graphics:mask_1_graphics_67,x:76.2,y:142}).wait(1).to({graphics:mask_1_graphics_68,x:42.2,y:142}).wait(1).to({graphics:mask_1_graphics_69,x:14.4,y:142}).wait(1).to({graphics:mask_1_graphics_70,x:-7.2,y:142}).wait(1).to({graphics:mask_1_graphics_71,x:-22.7,y:142}).wait(1).to({graphics:mask_1_graphics_72,x:-31.9,y:142}).wait(1).to({graphics:mask_1_graphics_73,x:-34.8,y:142}).wait(287));

	// ghghj
	this.instance_2 = new lib.ghghj_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(252,114.8,0.8,0.8);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({_off:true},65).wait(286));

	// mask-in-out (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_62 = new cjs.Graphics().p("Aw+cLMAkpg4VMA/pAAAMAAAA4Vg");
	var mask_2_graphics_63 = new cjs.Graphics().p("EgyQAcLMAfSg4VMBFPAAAMAAAA4Vg");
	var mask_2_graphics_64 = new cjs.Graphics().p("EgyXAcLMAabg4VMBKTAAAMAAAA4Vg");
	var mask_2_graphics_65 = new cjs.Graphics().p("EgydAcLMAWEg4VMBO3AAAMAAAA4Vg");
	var mask_2_graphics_66 = new cjs.Graphics().p("EgyiAcLMASOg4VMBS3AAAMAAAA4Vg");
	var mask_2_graphics_67 = new cjs.Graphics().p("EgymAcLMAO4g4VMBWVAAAMAAAA4Vg");
	var mask_2_graphics_68 = new cjs.Graphics().p("EgyqAcLMAMEg4VMBZRAAAMAAAA4Vg");
	var mask_2_graphics_69 = new cjs.Graphics().p("EgytAcLMAJwg4VMBbrAAAMAAAA4Vg");
	var mask_2_graphics_70 = new cjs.Graphics().p("EgywAcLMAH+g4VMBdjAAAMAAAA4Vg");
	var mask_2_graphics_71 = new cjs.Graphics().p("EgyxAcLMAGrg4VMBe4AAAMAAAA4Vg");
	var mask_2_graphics_72 = new cjs.Graphics().p("EgyyAcLMAF6g4VMBfrAAAMAAAA4Vg");
	var mask_2_graphics_73 = new cjs.Graphics().p("EgyzAcLMAFrg4VMBf8AAAMAAAA4Vg");
	var mask_2_graphics_137 = new cjs.Graphics().p("Eg46Af+MAAAg/7MBx1AAAMgpnA/7g");
	var mask_2_graphics_138 = new cjs.Graphics().p("EgwUAfUMAAAg+nMBgpAAAMgjVA+ng");
	var mask_2_graphics_139 = new cjs.Graphics().p("EgoiAeuMAAAg9bMBRFAAAMgdpA9bg");
	var mask_2_graphics_140 = new cjs.Graphics().p("EghkAeLMAAAg8VMBDJAAAMgYjA8Vg");
	var mask_2_graphics_141 = new cjs.Graphics().p("A7bdtMAAAg7ZMA23AAAMgUEA7Zg");
	var mask_2_graphics_142 = new cjs.Graphics().p("A2GdTMAAAg6lMAsNAAAMgQKA6lg");
	var mask_2_graphics_143 = new cjs.Graphics().p("Axmc9MAAAg55MAjNAAAMgM4A55g");
	var mask_2_graphics_144 = new cjs.Graphics().p("At6crMAAAg5VIb1AAMgKLA5Vg");
	var mask_2_graphics_145 = new cjs.Graphics().p("ArDcdMAAAg45IWHAAMgIGA45g");
	var mask_2_graphics_146 = new cjs.Graphics().p("ApAcTMAAAg4lISBAAMgGmA4lg");
	var mask_2_graphics_147 = new cjs.Graphics().p("AnxcNMAAAg4ZIPjAAMgFsA4Zg");
	var mask_2_graphics_148 = new cjs.Graphics().p("AnXcLMAAAg4VIOvAAMgFZA4Vg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_2_graphics_62,x:533.2,y:142.3}).wait(1).to({graphics:mask_2_graphics_63,x:668,y:142.3}).wait(1).to({graphics:mask_2_graphics_64,x:597.9,y:142.3}).wait(1).to({graphics:mask_2_graphics_65,x:535.1,y:142.3}).wait(1).to({graphics:mask_2_graphics_66,x:479.8,y:142.3}).wait(1).to({graphics:mask_2_graphics_67,x:431.8,y:142.3}).wait(1).to({graphics:mask_2_graphics_68,x:391.2,y:142.3}).wait(1).to({graphics:mask_2_graphics_69,x:358,y:142.3}).wait(1).to({graphics:mask_2_graphics_70,x:332.1,y:142.3}).wait(1).to({graphics:mask_2_graphics_71,x:313.7,y:142.3}).wait(1).to({graphics:mask_2_graphics_72,x:302.6,y:142.3}).wait(1).to({graphics:mask_2_graphics_73,x:298.9,y:142.3}).wait(1).to({graphics:null,x:0,y:0}).wait(63).to({graphics:mask_2_graphics_137,x:336.8,y:162}).wait(1).to({graphics:mask_2_graphics_138,x:272.3,y:158.6}).wait(1).to({graphics:mask_2_graphics_139,x:213.9,y:155.4}).wait(1).to({graphics:mask_2_graphics_140,x:161.7,y:152.6}).wait(1).to({graphics:mask_2_graphics_141,x:115.6,y:150.1}).wait(1).to({graphics:mask_2_graphics_142,x:75.6,y:148}).wait(1).to({graphics:mask_2_graphics_143,x:41.8,y:146.2}).wait(1).to({graphics:mask_2_graphics_144,x:14.2,y:144.7}).wait(1).to({graphics:mask_2_graphics_145,x:-7.4,y:143.5}).wait(1).to({graphics:mask_2_graphics_146,x:-22.7,y:142.7}).wait(1).to({graphics:mask_2_graphics_147,x:-31.9,y:142.2}).wait(1).to({graphics:mask_2_graphics_148,x:-34.8,y:142}).wait(212));

	// pic1
	this.instance_3 = new lib.pic1_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(84.5,137.1,1,1,0,0,0,4,13);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(62).to({_off:false},0).to({_off:true},87).wait(211));

	// text1
	this.instance_4 = new lib.text1_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(352.3,146.7,1.3,1.3,0,0,0,0.1,0.1);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(62).to({_off:false},0).to({_off:true},87).wait(211));

	// mask-in-out - копия (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_137 = new cjs.Graphics().p("A3Af+MApmg/7MBIPAAAMAAAA/7g");
	var mask_3_graphics_138 = new cjs.Graphics().p("Eg4FAfUMAjXg+nMBM0AAAMAAAA+ng");
	var mask_3_graphics_139 = new cjs.Graphics().p("Eg3VAeuMAdug9bMBQ9AAAMAAAA9bg");
	var mask_3_graphics_140 = new cjs.Graphics().p("Eg2qAeLMAYrg8VMBUqAAAMAAAA8Vg");
	var mask_3_graphics_141 = new cjs.Graphics().p("Eg2DAduMAUNg7bMBX6AAAMAAAA7bg");
	var mask_3_graphics_142 = new cjs.Graphics().p("Eg1iAdTMAQWg6lMBavAAAMAAAA6lg");
	var mask_3_graphics_143 = new cjs.Graphics().p("Eg1HAc9MANGg55MBdIAAAMAAAA55g");
	var mask_3_graphics_144 = new cjs.Graphics().p("Eg0wAcrMAKbg5VMBfGAAAMAAAA5Vg");
	var mask_3_graphics_145 = new cjs.Graphics().p("Eg0eAcdMAIVg45MBgoAAAMAAAA45g");
	var mask_3_graphics_146 = new cjs.Graphics().p("Eg0RAcTMAG2g4lMBhtAAAMAAAA4lg");
	var mask_3_graphics_147 = new cjs.Graphics().p("Eg0JAcNMAF9g4ZMBiWAAAMAAAA4Zg");
	var mask_3_graphics_148 = new cjs.Graphics().p("Eg0HAcLMAFqg4VMBilAAAMAAAA4Vg");
	var mask_3_graphics_211 = new cjs.Graphics().p("EgwvAcLMAAAg4VMBkTAAAMgkrA4Vg");
	var mask_3_graphics_212 = new cjs.Graphics().p("EgqrAcLMAAAg4VMBVdAAAMgfQA4Vg");
	var mask_3_graphics_213 = new cjs.Graphics().p("EgkAAcLMAAAg4VMBIBAAAMgaVA4Vg");
	var mask_3_graphics_214 = new cjs.Graphics().p("A9/cLMAAAg4VMA7/AAAMgV8A4Vg");
	var mask_3_graphics_215 = new cjs.Graphics().p("A4scLMAAAg4VMAxZAAAMgSEA4Vg");
	var mask_3_graphics_216 = new cjs.Graphics().p("A0FcLMAAAg4VMAoLAAAMgOsA4Vg");
	var mask_3_graphics_217 = new cjs.Graphics().p("AwNcLMAAAg4VMAgbAAAMgL3A4Vg");
	var mask_3_graphics_218 = new cjs.Graphics().p("AtBcLMAAAg4VIaDAAMgJiA4Vg");
	var mask_3_graphics_219 = new cjs.Graphics().p("AqicLMAAAg4VIVFAAMgHtA4Vg");
	var mask_3_graphics_220 = new cjs.Graphics().p("AoxcLMAAAg4VIRjAAMgGbA4Vg");
	var mask_3_graphics_221 = new cjs.Graphics().p("AntcLMAAAg4VIPbAAMgFpA4Vg");
	var mask_3_graphics_222 = new cjs.Graphics().p("AnXcLMAAAg4VIOvAAMgFZA4Vg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(137).to({graphics:mask_3_graphics_137,x:581.3,y:162.3}).wait(1).to({graphics:mask_3_graphics_138,x:713.1,y:158.9}).wait(1).to({graphics:mask_3_graphics_139,x:636,y:155.7}).wait(1).to({graphics:mask_3_graphics_140,x:567.1,y:152.9}).wait(1).to({graphics:mask_3_graphics_141,x:506.2,y:150.4}).wait(1).to({graphics:mask_3_graphics_142,x:453.4,y:148.2}).wait(1).to({graphics:mask_3_graphics_143,x:408.8,y:146.4}).wait(1).to({graphics:mask_3_graphics_144,x:372.3,y:144.9}).wait(1).to({graphics:mask_3_graphics_145,x:343.9,y:143.8}).wait(1).to({graphics:mask_3_graphics_146,x:323.6,y:142.9}).wait(1).to({graphics:mask_3_graphics_147,x:311.4,y:142.4}).wait(1).to({graphics:mask_3_graphics_148,x:307.3,y:142.3}).wait(1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_3_graphics_211,x:330,y:142}).wait(1).to({graphics:mask_3_graphics_212,x:273.8,y:142}).wait(1).to({graphics:mask_3_graphics_213,x:215.3,y:142}).wait(1).to({graphics:mask_3_graphics_214,x:162.8,y:142}).wait(1).to({graphics:mask_3_graphics_215,x:116.4,y:142}).wait(1).to({graphics:mask_3_graphics_216,x:76.2,y:142}).wait(1).to({graphics:mask_3_graphics_217,x:42.2,y:142}).wait(1).to({graphics:mask_3_graphics_218,x:14.4,y:142}).wait(1).to({graphics:mask_3_graphics_219,x:-7.2,y:142}).wait(1).to({graphics:mask_3_graphics_220,x:-22.7,y:142}).wait(1).to({graphics:mask_3_graphics_221,x:-31.9,y:142}).wait(1).to({graphics:mask_3_graphics_222,x:-34.8,y:142}).wait(138));

	// pic2
	this.instance_5 = new lib.pic2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(128,121.9,1,1,0,0,0,0.3,0.3);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(137).to({_off:false},0).to({_off:true},86).wait(137));

	// text2
	this.instance_6 = new lib.text2_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(374,131,1.3,1.3);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(137).to({_off:false},0).to({_off:true},86).wait(137));

	// mask-in-out - копия: 2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_211 = new cjs.Graphics().p("Aw+cLMAkpg4VMA/pAAAMAAAA4Vg");
	var mask_4_graphics_212 = new cjs.Graphics().p("EgyfAcLMAfSg4VMBFtAAAMAAAA4Vg");
	var mask_4_graphics_213 = new cjs.Graphics().p("EgyzAcLMAabg4VMBLMAAAMAAAA4Vg");
	var mask_4_graphics_214 = new cjs.Graphics().p("EgzEAcLMAWDg4VMBQGAAAMAAAA4Vg");
	var mask_4_graphics_215 = new cjs.Graphics().p("EgzUAcLMASOg4VMBUbAAAMAAAA4Vg");
	var mask_4_graphics_216 = new cjs.Graphics().p("EgziAcLMAO5g4VMBYLAAAMAAAA4Vg");
	var mask_4_graphics_217 = new cjs.Graphics().p("EgztAcLMAMEg4VMBbXAAAMAAAA4Vg");
	var mask_4_graphics_218 = new cjs.Graphics().p("Egz2AcLMAJwg4VMBd9AAAMAAAA4Vg");
	var mask_4_graphics_219 = new cjs.Graphics().p("Egz+AcLMAH+g4VMBf/AAAMAAAA4Vg");
	var mask_4_graphics_220 = new cjs.Graphics().p("Eg0DAcLMAGsg4VMBhbAAAMAAAA4Vg");
	var mask_4_graphics_221 = new cjs.Graphics().p("Eg0GAcLMAF6g4VMBiTAAAMAAAA4Vg");
	var mask_4_graphics_222 = new cjs.Graphics().p("Eg0HAcLMAFqg4VMBilAAAMAAAA4Vg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(211).to({graphics:mask_4_graphics_211,x:533.2,y:142.3}).wait(1).to({graphics:mask_4_graphics_212,x:669.4,y:142.3}).wait(1).to({graphics:mask_4_graphics_213,x:600.7,y:142.3}).wait(1).to({graphics:mask_4_graphics_214,x:539.1,y:142.3}).wait(1).to({graphics:mask_4_graphics_215,x:484.8,y:142.3}).wait(1).to({graphics:mask_4_graphics_216,x:437.7,y:142.3}).wait(1).to({graphics:mask_4_graphics_217,x:397.9,y:142.3}).wait(1).to({graphics:mask_4_graphics_218,x:365.3,y:142.3}).wait(1).to({graphics:mask_4_graphics_219,x:339.9,y:142.3}).wait(1).to({graphics:mask_4_graphics_220,x:321.8,y:142.3}).wait(1).to({graphics:mask_4_graphics_221,x:311,y:142.3}).wait(1).to({graphics:mask_4_graphics_222,x:307.3,y:142.3}).wait(1).to({graphics:null,x:0,y:0}).wait(137));

	// pic3
	this.instance_7 = new lib.fghf();
	this.instance_7.parent = this;
	this.instance_7.setTransform(112,126.9,1,1,0,0,0,0.1,0.1);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(211).to({_off:false},0).to({_off:true},87).wait(62));

	// text3
	this.instance_8 = new lib.text3_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(404.7,133.7,1.3,1.3,0,0,0,0.1,0.3);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(211).to({_off:false},0).to({_off:true},87).wait(62));

	// Слой 4
	this.instance_9 = new lib.bg();
	this.instance_9.parent = this;
	this.instance_9.setTransform(375,125,2.5,1,0,0,0,150,125);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(360));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,250);


(lib.legal2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// legal
	this.addr2 = new lib.dfgdfggg_1();
	this.addr2.parent = this;
	this.addr2.setTransform(0,312.2);
	this.addr2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.addr2).wait(303).to({alpha:1},9,cjs.Ease.get(1)).wait(41).to({alpha:0},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.3,505.2,12.9);


(lib.legal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// legal
	this.addr2 = new lib.dfgdfggg();
	this.addr2.parent = this;
	this.addr2.setTransform(0,159.5);
	this.addr2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.addr2).wait(303).to({alpha:1},9,cjs.Ease.get(1)).wait(41).to({alpha:0},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,286,20.8);


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
	this.instance.setTransform(30,-112.9,0.9,0.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#706F6F").s().p("AgrBHIAAiNIBWAAIAAAOIhHAAIAAAyIA/AAIAAAMIg/AAIAAAzIBIAAIAAAOg");
	this.shape.setTransform(101.5,-44.5,0.9,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#706F6F").s().p("AgGBHIgziNIARAAIAoB3IAqh3IAQAAIgzCNg");
	this.shape_1.setTransform(90.2,-44.4,0.9,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#706F6F").s().p("AgHBHIAAiNIAPAAIAACNg");
	this.shape_2.setTransform(82,-44.5,0.9,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#706F6F").s().p("AgHBHIAAh/IgnAAIAAgOIBdAAIAAAOIgoAAIAAB/g");
	this.shape_3.setTransform(74.7,-44.5,0.9,0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#706F6F").s().p("AAtBHIgNglIg/AAIgOAlIgQAAIA2iNIAOAAIA3CNgAgaAUIA1AAIgbhHg");
	this.shape_4.setTransform(65,-44.5,0.9,0.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#706F6F").s().p("AgGBHIgziNIARAAIAoB3IAqh3IAQAAIgzCNg");
	this.shape_5.setTransform(54.5,-44.4,0.9,0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#706F6F").s().p("AgrA1QgRgUAAggIAAgBQAAgfARgVQARgUAaAAQAbAAARAUQARAUAAAgIAAABQAAAfgRAVQgRAUgbAAQgaAAgRgUgAgggqQgMAQAAAaIAAABQAAAZAMARQAOAQASAAQAUAAAMgQQANgQAAgaIAAgBQAAgZgNgRQgMgQgUAAQgTAAgNAQg");
	this.shape_6.setTransform(42.8,-44.5,0.9,0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAPAAIBJBvIAAhvIAPAAIAACNg");
	this.shape_7.setTransform(30,-44.5,0.9,0.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAPAAIBJBvIAAhvIAPAAIAACNg");
	this.shape_8.setTransform(17.6,-44.5,0.9,0.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#706F6F").s().p("AgHBHIAAiNIAOAAIAACNg");
	this.shape_9.setTransform(9.1,-44.5,0.9,0.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAOAAIBKBvIAAhvIAPAAIAACNg");
	this.shape_10.setTransform(-4.2,-44.5,0.9,0.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#706F6F").s().p("AAgBHIgig3IghAAIAAA3IgPAAIAAiNIAxAAQAYAAAMANQALAMAAARIAAABQAAAfgiAJIAnA6gAgjACIAfAAQAQAAAKgHQAJgIAAgOQAAgdghAAIghAAg");
	this.shape_11.setTransform(-15.6,-44.5,0.9,0.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#706F6F").s().p("AgrA1QgRgUAAggIAAgBQAAgfARgVQARgUAaAAQAbAAARAUQARAUAAAgIAAABQAAAfgRAVQgRAUgbAAQgaAAgRgUgAgggqQgMAQAAAaIAAABQAAAZAMARQAOAQASAAQAUAAAMgQQANgQAAgaIAAgBQAAgZgNgRQgMgQgUAAQgTAAgNAQg");
	this.shape_12.setTransform(-28.2,-44.5,0.9,0.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#706F6F").s().p("AgwBHIAAiNIAwAAQAWAAAMAMQAJAKAAAOQAAAYgXAJQAdAIAAAZIAAABQAAASgNAKQgOAKgWAAgAghA5IAhAAQAQAAAJgGQAJgHAAgMIAAgBQAAgZgiAAIghAAgAghgGIAfAAQANAAAIgHQAJgHAAgMQAAgMgIgGQgIgGgNAAIggAAg");
	this.shape_13.setTransform(-40.1,-44.5,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ghgf, new cjs.Rectangle(-76.5,-219.4,213.1,213.1), null);


(lib.bg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(0,125,1,1,0,0,0,0,125);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(293).to({alpha:1},9,cjs.Ease.get(1)).wait(51).to({alpha:0},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.hgj_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#706F70").s().p("AgoApQgRgRAAgYQAAgXARgRQARgQAXgBQAYAAARARQARARAAAXQAAAYgRARQgQARgZAAQgXAAgRgRgAgigjQgPAQAAATQAAAUAPAQQAOAOAUAAQAUAAAPgOQAPgQAAgUQAAgTgPgQQgPgOgUAAQgTAAgPAOgAAQAgIgBgBIAAgIQAAgLgGgEQgDgBgIAAIgJAAIAAAZIgLAAIAAg/IAWAAQALAAAFADQAKADAAANQAAAHgGAFQgDABgGABQAHABADAFQAEAFAAAFIAAAFIABAHIAAACgAgLAAIAKAAQAGgBAEgBQAFgCABgHQAAgIgEgCQgEgDgJAAIgJAAg");
	this.shape_7.setTransform(53.4,53.4);

	this.instance_6 = new lib.ClipGroup_9_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1,0.5,1,1,0,0,0,51.6,51.6);

	this.instance_7 = new lib.ClipGroup_1_1_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(18.6,2.5,1,1,0,0,0,28.2,11.3);

	this.instance_8 = new lib.ClipGroup_2_0_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-0.9,16.1,1,1,0,0,0,8.8,2.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AlsFtQiYiXABjWQgBjVCYiYQCXiWDVgBQDWABCXCWQCYCYAADVQAADWiYCXQiXCYjWgBQjVABiXiYgAhuAqIhoGEQBlAyBxAAQDHAACNiMQCNiNAAjHQAAhGgVhEgAnHCYQAbBSA2BDQA1BDBKAsIBflkIh8AnIglCKIgqANIAliJgAmIkUQhYB9AACXQAABCASA/ICXgwICOoSQiKAzhVB6gAh+nPIiPISIB8gnIBVk6IAqgMIhUE4IIrivQgziNh6hYQh9haibAAQhAAAg+ARg");
	this.shape_8.setTransform(-0.1,0.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AidBxQgJgMAEgbQAGgbASgWQASgWAXgFQAXgHALAMQAMANgGAbQgEAWgNATQgNATgRAKgAhnAaQgVAHgGAgQgDARAFAHQAEAEAIgCQAVgGAGggQAEgSgGgGQgDgDgEAAIgFAAgAjZBxQAIgJACgQQAEgSgGgGQgEgFgIACQgHADgHAIQgJAKgEASQgBAJAAAEIgfAAIABgEQAFgbASgVQASgWAXgHQAXgHAMANQALANgGAcQgEASgJAQgAgsgUIAkgJIADBDIAAAAIAihRIAkgMIg+CIIglANgABRg8IBHgWIgHAgIglANIgCAPIAfgMIgGAfIggAJIgDAPIAngOIgIAkIhJAWgAC5hdIBCgSQAQgEAIAGQAJAGgDARQgFAXgSAMQANABgDAYIgCANQgBAJABADIgjAJQAAgHABgKQACgLgBgEQgCgHgJADIgQABIgLAwIgkALgADmhOIgQAFIgGAYIATgFQAPgEADgMQABgHgDgBIgFgBIgIABg");
	this.shape_9.setTransform(17.4,2.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhPAPQgLgMAEgYIAfAAQABAJAFADQAEADAGgCQAKgEAGgJIAcAAQgTAggfAJQgIACgHAAQgMAAgHgHgAAkgVIA1AAQgKAFgHACQgJACgHAAQgNAAgHgJg");
	this.shape_10.setTransform(-2,16.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#77231F").s().p("AlsFtQiYiXABjWQgBjVCYiXQCXiYDVAAQDWAACYCYQCXCXAADVQAADWiXCXQiYCYjWAAQjVAAiXiYgAhuAqIhoGFQBlAyBxAAQDHAACNiNQCNiNAAjHQAAhHgVhDgAnHCYQAbBSA2BDQA2BDBJAsIBflkIh8AnIglCKIgpANIAkiJgAmIkUQhYB8AACYQAABCASA/ICYgwICNoSQiKA0hVB5gAh+nPIiPISIB9gnIBUk6IAqgMIhUE5IIriwQgziNh6hYQh9haibAAQhCAAg8ARg");
	this.shape_11.setTransform(1.3,1.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#77231F").s().p("AjPBYQAEgSgGgGQgEgFgIACQgVAGgGAhIgBANIgfAAIAAgEQAGgbARgVQASgWAYgHQAXgHALANQAMANgGAbQgDATgKAQIgdAAQAIgLACgOgAidBxQgKgNAFgaQAGgbARgWQASgWAYgFQAXgHALAMQALANgFAbQgEAWgNATQgNATgSAKgAhnAaQgIACgHAIQgJALgDASQgEARAGAGQAEAFAIgCQAVgHAGggQAEgRgGgGQgDgDgFAAIgEAAgAgsgUIAjgJIAEBDIAihSIAkgLIg+CIIglANgABRg8IBGgWIgGAfIglAOIgDAPIAfgMIgFAfIggAJIgDAPIAmgOIgIAkIhIAWgAC4hdIBDgSQAQgEAIAGQAJAGgDARQgFAXgTAMQAOABgDAYQgEAVACAEIgjAJQAAgHABgKQACgLgBgEQgCgHgKADIgQABIgKAwIgkALgADmhOIgRAFIgFAYIASgFQAQgFACgMQACgIgIAAIgIABg");
	this.shape_12.setTransform(18.8,3.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#77231F").s().p("AhPAPQgLgMAEgZIAfAAQAAAKAFADQAEADAGgCQAJgDAIgLIAcABQgTAggfAJQgIADgHAAQgMAAgHgIgAAkgWIA0AAQgIAGgJACQgIACgGAAQgOAAgHgKg");
	this.shape_13.setTransform(-0.6,17.3);

	this.instance_9 = new lib.ClipGroup_3_0_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,0,1,1,0,0,0,111,111);

	this.instance_10 = new lib.ClipGroup_4_1_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,0,1,1,0,0,0,113.1,113.1);

	this.instance_11 = new lib.ClipGroup_5_1_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,0,1,1,0,0,0,118.4,118.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_7}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hgj_1, new cjs.Rectangle(-118.4,-118.4,236.8,236.8), null);


(lib.Символ1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hgj_1();
	this.instance.parent = this;
	this.instance.setTransform(-5.1,-6.8,0.495,0.495,0,0,0,0.2,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#706F6F").s().p("AgrBHIAAiNIBWAAIAAAOIhHAAIAAAyIA/AAIAAAMIg/AAIAAAzIBIAAIAAAOg");
	this.shape_1.setTransform(34,30.8,0.495,0.495);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#706F6F").s().p("AgGBHIgziNIARAAIAoB3IAqh3IAQAAIgzCNg");
	this.shape_2.setTransform(27.8,30.8,0.495,0.495);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#706F6F").s().p("AgHBHIAAiNIAPAAIAACNg");
	this.shape_3.setTransform(23.3,30.8,0.495,0.495);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#706F6F").s().p("AgHBHIAAh/IgnAAIAAgOIBdAAIAAAOIgoAAIAAB/g");
	this.shape_4.setTransform(19.3,30.8,0.495,0.495);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#706F6F").s().p("AAtBHIgNglIg/AAIgOAlIgQAAIA2iNIAOAAIA3CNgAgaAUIA1AAIgbhHg");
	this.shape_5.setTransform(14,30.7,0.495,0.495);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#706F6F").s().p("AgGBHIgziNIARAAIAoB3IAqh3IAQAAIgzCNg");
	this.shape_6.setTransform(8.2,30.8,0.495,0.495);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#706F6F").s().p("AgrA1QgRgUAAggIAAgBQAAgfARgVQARgUAaAAQAbAAARAUQARAUAAAgIAAABQAAAfgRAVQgRAUgbAAQgaAAgRgUgAgggqQgMAQAAAaIAAABQAAAZAMARQAOAQASAAQAUAAAMgQQANgQAAgaIAAgBQAAgZgNgRQgMgQgUAAQgTAAgNAQg");
	this.shape_7.setTransform(1.7,30.8,0.495,0.495);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAPAAIBJBvIAAhvIAPAAIAACNg");
	this.shape_8.setTransform(-5.3,30.8,0.495,0.495);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAPAAIBJBvIAAhvIAPAAIAACNg");
	this.shape_9.setTransform(-12.1,30.8,0.495,0.495);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#706F6F").s().p("AgHBHIAAiNIAOAAIAACNg");
	this.shape_10.setTransform(-16.8,30.8,0.495,0.495);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAOAAIBKBvIAAhvIAPAAIAACNg");
	this.shape_11.setTransform(-24.1,30.8,0.495,0.495);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#706F6F").s().p("AAgBHIgig3IghAAIAAA3IgPAAIAAiNIAxAAQAYAAAMANQALAMAAARIAAABQAAAfgiAJIAnA6gAgjACIAfAAQAQAAAKgHQAJgIAAgOQAAgdghAAIghAAg");
	this.shape_12.setTransform(-30.3,30.8,0.495,0.495);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#706F6F").s().p("AgrA1QgRgUAAggIAAgBQAAgfARgVQARgUAaAAQAbAAARAUQARAUAAAgIAAABQAAAfgRAVQgRAUgbAAQgaAAgRgUgAgggqQgMAQAAAaIAAABQAAAZAMARQAOAQASAAQAUAAAMgQQANgQAAgaIAAgBQAAgZgNgRQgMgQgUAAQgTAAgNAQg");
	this.shape_13.setTransform(-37.3,30.8,0.495,0.495);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#706F6F").s().p("AgwBHIAAiNIAwAAQAWAAAMAMQAJAKAAAOQAAAYgXAJQAdAIAAAZIAAABQAAASgNAKQgOAKgWAAgAghA5IAhAAQAQAAAJgGQAJgHAAgMIAAgBQAAgZgiAAIghAAgAghgGIAfAAQANAAAIgHQAJgHAAgMQAAgMgIgGQgIgGgNAAIggAAg");
	this.shape_14.setTransform(-43.8,30.8,0.495,0.495);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1_1, new cjs.Rectangle(-63.8,-65.5,117.2,117.2), null);


(lib.spr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pr();
	this.instance.parent = this;
	this.instance.setTransform(12.2,247.7,1,1,0,0,0,12.2,0);

	this.instance_1 = new lib.pr();
	this.instance_1.parent = this;
	this.instance_1.setTransform(12.2,230.6,1,1,0,0,0,12.2,0);

	this.instance_2 = new lib.pr();
	this.instance_2.parent = this;
	this.instance_2.setTransform(12.2,213.4,1,1,0,0,0,12.2,0);

	this.instance_3 = new lib.pr();
	this.instance_3.parent = this;
	this.instance_3.setTransform(12.2,196.3,1,1,0,0,0,12.2,0);

	this.instance_4 = new lib.pr();
	this.instance_4.parent = this;
	this.instance_4.setTransform(12.2,179.1,1,1,0,0,0,12.2,0);

	this.instance_5 = new lib.pr();
	this.instance_5.parent = this;
	this.instance_5.setTransform(12.2,162,1,1,0,0,0,12.2,0);

	this.instance_6 = new lib.pr();
	this.instance_6.parent = this;
	this.instance_6.setTransform(12.2,144.8,1,1,0,0,0,12.2,0);

	this.instance_7 = new lib.pr();
	this.instance_7.parent = this;
	this.instance_7.setTransform(12.2,127.7,1,1,0,0,0,12.2,0);

	this.instance_8 = new lib.pr();
	this.instance_8.parent = this;
	this.instance_8.setTransform(12.2,110.5,1,1,0,0,0,12.2,0);

	this.instance_9 = new lib.pr();
	this.instance_9.parent = this;
	this.instance_9.setTransform(12.2,93.4,1,1,0,0,0,12.2,0);

	this.instance_10 = new lib.pr();
	this.instance_10.parent = this;
	this.instance_10.setTransform(12.2,76.2,1,1,0,0,0,12.2,0);

	this.instance_11 = new lib.pr();
	this.instance_11.parent = this;
	this.instance_11.setTransform(12.2,59.1,1,1,0,0,0,12.2,0);

	this.instance_12 = new lib.pr();
	this.instance_12.parent = this;
	this.instance_12.setTransform(12.2,41.9,1,1,0,0,0,12.2,0);

	this.instance_13 = new lib.pr();
	this.instance_13.parent = this;
	this.instance_13.setTransform(12.2,24.8,1,1,0,0,0,12.2,0);

	this.instance_14 = new lib.pr();
	this.instance_14.parent = this;
	this.instance_14.setTransform(12.2,7.6,1,1,0,0,0,12.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.spr, new cjs.Rectangle(0,4,24.5,247.3), null);


(lib.main1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 19
	this.instance = new lib.ghggg();
	this.instance.parent = this;
	this.instance.setTransform(-30,231.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(298).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(46).to({alpha:0},6,cjs.Ease.get(1)).wait(1));

	// final
	this.instance_1 = new lib.ghgf();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-30,75);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(293).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(51).to({alpha:0},6,cjs.Ease.get(1)).wait(1));

	// born
	this.born2 = new lib.dfs();
	this.born2.parent = this;
	this.born2.setTransform(-78,115.7);
	this.born2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.born2).to({alpha:1},6).to({_off:true},306).wait(48));

	// logo
	this.instance_2 = new lib.Символ1_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(74.8,-8,1,1,0,0,0,-5.2,-7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({alpha:1},6).wait(47).to({y:60},11,cjs.Ease.get(1)).to({_off:true},229).wait(58));

	// Слой 24 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgioAfKMAANg+aMA6+AAMMgVxA+Vg");
	var mask_graphics_1 = new cjs.Graphics().p("EggnAfKMAANg+aMA6+AAMMgVxA+Vg");
	var mask_graphics_2 = new cjs.Graphics().p("A+4fKMAANg+aMA6+AAMMgVxA+Vg");
	var mask_graphics_3 = new cjs.Graphics().p("A9lfKMAANg+aMA6+AAMMgVxA+Vg");
	var mask_graphics_4 = new cjs.Graphics().p("A9lfKMAANg+aMA6+AAMMgVxA+Vg");
	var mask_graphics_5 = new cjs.Graphics().p("A9lfKMAANg+aMA6+AAMMgVxA+Vg");
	var mask_graphics_6 = new cjs.Graphics().p("A9lfKMAANg+aMA6+AAMMgVxA+Vg");
	var mask_graphics_7 = new cjs.Graphics().p("A9lfKMAANg+aMA6+AAMMgVxA+Vg");
	var mask_graphics_8 = new cjs.Graphics().p("A9lfKMAANg+aMA6+AAMMgVxA+Vg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-221.7,y:72.3}).wait(1).to({graphics:mask_graphics_1,x:-208.8,y:72.3}).wait(1).to({graphics:mask_graphics_2,x:-197.7,y:72.3}).wait(1).to({graphics:mask_graphics_3,x:-187,y:72.3}).wait(1).to({graphics:mask_graphics_4,x:-171.6,y:72.3}).wait(1).to({graphics:mask_graphics_5,x:-159.5,y:72.3}).wait(1).to({graphics:mask_graphics_6,x:-150.9,y:72.3}).wait(1).to({graphics:mask_graphics_7,x:-145.8,y:72.3}).wait(1).to({graphics:mask_graphics_8,x:-144.1,y:72.3}).wait(352));

	// ghghj
	this.instance_3 = new lib.ghghj();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-55,3.8,0.7,0.7,0,0,0,0.1,0.1);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},9).wait(351));

	// mask-out (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_62 = new cjs.Graphics().p("A9efOMAAAg+aMA69AAAMgVjA+ag");
	var mask_1_graphics_63 = new cjs.Graphics().p("A5HfOMAAAg+aMAyPAAAMgSYA+ag");
	var mask_1_graphics_64 = new cjs.Graphics().p("A1KfOMAAAg+aMAqVAAAMgPfA+ag");
	var mask_1_graphics_65 = new cjs.Graphics().p("AxofOMAAAg+aMAjRAAAMgM5A+ag");
	var mask_1_graphics_66 = new cjs.Graphics().p("AugfOMAAAg+aIdBAAMgKnA+ag");
	var mask_1_graphics_67 = new cjs.Graphics().p("Au6fOMAAAg+aIXoAAMgIpA+ag");
	var mask_1_graphics_68 = new cjs.Graphics().p("AvUfOMAAAg+aITDAAMgG9A+ag");
	var mask_1_graphics_69 = new cjs.Graphics().p("AvqfOMAAAg+aIPVAAMgFnA+ag");
	var mask_1_graphics_70 = new cjs.Graphics().p("Av7fOMAAAg+aIMaAAMgEiA+ag");
	var mask_1_graphics_71 = new cjs.Graphics().p("AwIfOMAAAg+aIKWAAMgDyA+ag");
	var mask_1_graphics_72 = new cjs.Graphics().p("AwPfOMAAAg+aIJGAAMgDVA+ag");
	var mask_1_graphics_73 = new cjs.Graphics().p("AwRfOMAAAg+aIIrAAMgDLA+ag");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_1_graphics_62,x:39.3,y:75.3}).wait(1).to({graphics:mask_1_graphics_63,x:1.1,y:75.3}).wait(1).to({graphics:mask_1_graphics_64,x:-33.5,y:75.3}).wait(1).to({graphics:mask_1_graphics_65,x:-64.4,y:75.3}).wait(1).to({graphics:mask_1_graphics_66,x:-91.6,y:75.3}).wait(1).to({graphics:mask_1_graphics_67,x:-95.5,y:75.3}).wait(1).to({graphics:mask_1_graphics_68,x:-98.1,y:75.3}).wait(1).to({graphics:mask_1_graphics_69,x:-100.3,y:75.3}).wait(1).to({graphics:mask_1_graphics_70,x:-102,y:75.3}).wait(1).to({graphics:mask_1_graphics_71,x:-103.3,y:75.3}).wait(1).to({graphics:mask_1_graphics_72,x:-104,y:75.3}).wait(1).to({graphics:mask_1_graphics_73,x:-104.2,y:75.3}).wait(287));

	// ghghj
	this.instance_4 = new lib.ghghj();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-55,3.8,0.7,0.7,0,0,0,0.1,0.1);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({_off:true},65).wait(286));

	// mask-in-out (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_62 = new cjs.Graphics().p("A9efOMAVkg+aMAlaAAAMAAAA+ag");
	var mask_2_graphics_63 = new cjs.Graphics().p("A8xfOMASag+aMAnJAAAMAAAA+ag");
	var mask_2_graphics_64 = new cjs.Graphics().p("A8HfOMAPig+aMAotAAAMAAAA+ag");
	var mask_2_graphics_65 = new cjs.Graphics().p("A7ifOMAM/g+aMAqGAAAMAAAA+ag");
	var mask_2_graphics_66 = new cjs.Graphics().p("A7BfOMAKug+aMArVAAAMAAAA+ag");
	var mask_2_graphics_67 = new cjs.Graphics().p("A6kfOMAIwg+aMAsZAAAMAAAA+ag");
	var mask_2_graphics_68 = new cjs.Graphics().p("A6MfOMAHGg+aMAtTAAAMAAAA+ag");
	var mask_2_graphics_69 = new cjs.Graphics().p("A55fOMAFwg+aMAuCAAAMAAAA+ag");
	var mask_2_graphics_70 = new cjs.Graphics().p("A5pfOMAEsg+aMAunAAAMAAAA+ag");
	var mask_2_graphics_71 = new cjs.Graphics().p("A5efOMAD8g+aMAvBAAAMAAAA+ag");
	var mask_2_graphics_72 = new cjs.Graphics().p("A5YfOMADfg+aMAvSAAAMAAAA+ag");
	var mask_2_graphics_73 = new cjs.Graphics().p("A5VfOMADVg+aMAvWAAAMAAAA+ag");
	var mask_2_graphics_137 = new cjs.Graphics().p("A9efOMAAAg+aMA69AAAMgVjA+ag");
	var mask_2_graphics_138 = new cjs.Graphics().p("A5HfOMAAAg+aMAyPAAAMgSYA+ag");
	var mask_2_graphics_139 = new cjs.Graphics().p("A1KfOMAAAg+aMAqVAAAMgPfA+ag");
	var mask_2_graphics_140 = new cjs.Graphics().p("AxofOMAAAg+aMAjRAAAMgM5A+ag");
	var mask_2_graphics_141 = new cjs.Graphics().p("AugfOMAAAg+aIdBAAMgKnA+ag");
	var mask_2_graphics_142 = new cjs.Graphics().p("Au6fOMAAAg+aIXoAAMgIpA+ag");
	var mask_2_graphics_143 = new cjs.Graphics().p("AvUfOMAAAg+aITDAAMgG9A+ag");
	var mask_2_graphics_144 = new cjs.Graphics().p("AvqfOMAAAg+aIPVAAMgFnA+ag");
	var mask_2_graphics_145 = new cjs.Graphics().p("Av7fOMAAAg+aIMaAAMgEiA+ag");
	var mask_2_graphics_146 = new cjs.Graphics().p("AwIfOMAAAg+aIKWAAMgDyA+ag");
	var mask_2_graphics_147 = new cjs.Graphics().p("AwPfOMAAAg+aIJGAAMgDVA+ag");
	var mask_2_graphics_148 = new cjs.Graphics().p("AwRfOMAAAg+aIIrAAMgDLA+ag");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_2_graphics_62,x:278.4,y:75.3}).wait(1).to({graphics:mask_2_graphics_63,x:227.8,y:75.3}).wait(1).to({graphics:mask_2_graphics_64,x:182,y:75.3}).wait(1).to({graphics:mask_2_graphics_65,x:141,y:75.3}).wait(1).to({graphics:mask_2_graphics_66,x:104.9,y:75.3}).wait(1).to({graphics:mask_2_graphics_67,x:73.5,y:75.3}).wait(1).to({graphics:mask_2_graphics_68,x:47,y:75.3}).wait(1).to({graphics:mask_2_graphics_69,x:25.4,y:75.3}).wait(1).to({graphics:mask_2_graphics_70,x:8.5,y:75.3}).wait(1).to({graphics:mask_2_graphics_71,x:-3.6,y:75.3}).wait(1).to({graphics:mask_2_graphics_72,x:-10.8,y:75.3}).wait(1).to({graphics:mask_2_graphics_73,x:-13.2,y:75.3}).wait(1).to({graphics:null,x:0,y:0}).wait(63).to({graphics:mask_2_graphics_137,x:39.3,y:75.3}).wait(1).to({graphics:mask_2_graphics_138,x:1.1,y:75.3}).wait(1).to({graphics:mask_2_graphics_139,x:-33.5,y:75.3}).wait(1).to({graphics:mask_2_graphics_140,x:-64.4,y:75.3}).wait(1).to({graphics:mask_2_graphics_141,x:-91.6,y:75.3}).wait(1).to({graphics:mask_2_graphics_142,x:-95.5,y:75.3}).wait(1).to({graphics:mask_2_graphics_143,x:-98.1,y:75.3}).wait(1).to({graphics:mask_2_graphics_144,x:-100.3,y:75.3}).wait(1).to({graphics:mask_2_graphics_145,x:-102,y:75.3}).wait(1).to({graphics:mask_2_graphics_146,x:-103.3,y:75.3}).wait(1).to({graphics:mask_2_graphics_147,x:-104,y:75.3}).wait(1).to({graphics:mask_2_graphics_148,x:-104.2,y:75.3}).wait(212));

	// pic1
	this.instance_5 = new lib.pic1_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-60,-3,0.8,0.8,0,0,0,0.1,0.1);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(62).to({_off:false},0).to({_off:true},87).wait(211));

	// text1
	this.instance_6 = new lib.text1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(75.8,-60.3);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(62).to({_off:false},0).to({_off:true},87).wait(211));

	// mask-in-out - копия (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_137 = new cjs.Graphics().p("A9efOMAVkg+aMAlaAAAMAAAA+ag");
	var mask_3_graphics_138 = new cjs.Graphics().p("A8xfOMASag+aMAnJAAAMAAAA+ag");
	var mask_3_graphics_139 = new cjs.Graphics().p("A8HfOMAPig+aMAotAAAMAAAA+ag");
	var mask_3_graphics_140 = new cjs.Graphics().p("A7ifOMAM/g+aMAqGAAAMAAAA+ag");
	var mask_3_graphics_141 = new cjs.Graphics().p("A7BfOMAKug+aMArVAAAMAAAA+ag");
	var mask_3_graphics_142 = new cjs.Graphics().p("A6kfOMAIwg+aMAsZAAAMAAAA+ag");
	var mask_3_graphics_143 = new cjs.Graphics().p("A6MfOMAHGg+aMAtTAAAMAAAA+ag");
	var mask_3_graphics_144 = new cjs.Graphics().p("A55fOMAFwg+aMAuCAAAMAAAA+ag");
	var mask_3_graphics_145 = new cjs.Graphics().p("A5pfOMAEsg+aMAunAAAMAAAA+ag");
	var mask_3_graphics_146 = new cjs.Graphics().p("A5efOMAD8g+aMAvBAAAMAAAA+ag");
	var mask_3_graphics_147 = new cjs.Graphics().p("A5YfOMADfg+aMAvSAAAMAAAA+ag");
	var mask_3_graphics_148 = new cjs.Graphics().p("A5VfOMADVg+aMAvWAAAMAAAA+ag");
	var mask_3_graphics_211 = new cjs.Graphics().p("A9efOMAAAg+aMA69AAAMgVjA+ag");
	var mask_3_graphics_212 = new cjs.Graphics().p("A5HfOMAAAg+aMAyPAAAMgSYA+ag");
	var mask_3_graphics_213 = new cjs.Graphics().p("A1KfOMAAAg+aMAqVAAAMgPfA+ag");
	var mask_3_graphics_214 = new cjs.Graphics().p("AxofOMAAAg+aMAjRAAAMgM5A+ag");
	var mask_3_graphics_215 = new cjs.Graphics().p("AugfOMAAAg+aIdBAAMgKnA+ag");
	var mask_3_graphics_216 = new cjs.Graphics().p("Au6fOMAAAg+aIXoAAMgIpA+ag");
	var mask_3_graphics_217 = new cjs.Graphics().p("AvUfOMAAAg+aITDAAMgG9A+ag");
	var mask_3_graphics_218 = new cjs.Graphics().p("AvqfOMAAAg+aIPVAAMgFnA+ag");
	var mask_3_graphics_219 = new cjs.Graphics().p("Av7fOMAAAg+aIMaAAMgEiA+ag");
	var mask_3_graphics_220 = new cjs.Graphics().p("AwIfOMAAAg+aIKWAAMgDyA+ag");
	var mask_3_graphics_221 = new cjs.Graphics().p("AwPfOMAAAg+aIJGAAMgDVA+ag");
	var mask_3_graphics_222 = new cjs.Graphics().p("AwRfOMAAAg+aIIrAAMgDLA+ag");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(137).to({graphics:mask_3_graphics_137,x:278.4,y:75.3}).wait(1).to({graphics:mask_3_graphics_138,x:227.8,y:75.3}).wait(1).to({graphics:mask_3_graphics_139,x:182,y:75.3}).wait(1).to({graphics:mask_3_graphics_140,x:141,y:75.3}).wait(1).to({graphics:mask_3_graphics_141,x:104.9,y:75.3}).wait(1).to({graphics:mask_3_graphics_142,x:73.5,y:75.3}).wait(1).to({graphics:mask_3_graphics_143,x:47,y:75.3}).wait(1).to({graphics:mask_3_graphics_144,x:25.4,y:75.3}).wait(1).to({graphics:mask_3_graphics_145,x:8.5,y:75.3}).wait(1).to({graphics:mask_3_graphics_146,x:-3.6,y:75.3}).wait(1).to({graphics:mask_3_graphics_147,x:-10.8,y:75.3}).wait(1).to({graphics:mask_3_graphics_148,x:-13.2,y:75.3}).wait(1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_3_graphics_211,x:39.3,y:75.3}).wait(1).to({graphics:mask_3_graphics_212,x:1.1,y:75.3}).wait(1).to({graphics:mask_3_graphics_213,x:-33.5,y:75.3}).wait(1).to({graphics:mask_3_graphics_214,x:-64.4,y:75.3}).wait(1).to({graphics:mask_3_graphics_215,x:-91.6,y:75.3}).wait(1).to({graphics:mask_3_graphics_216,x:-95.5,y:75.3}).wait(1).to({graphics:mask_3_graphics_217,x:-98.1,y:75.3}).wait(1).to({graphics:mask_3_graphics_218,x:-100.3,y:75.3}).wait(1).to({graphics:mask_3_graphics_219,x:-102,y:75.3}).wait(1).to({graphics:mask_3_graphics_220,x:-103.3,y:75.3}).wait(1).to({graphics:mask_3_graphics_221,x:-104,y:75.3}).wait(1).to({graphics:mask_3_graphics_222,x:-104.2,y:75.3}).wait(138));

	// pic2
	this.instance_7 = new lib.pic2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-43,-10.5,0.7,0.7);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(137).to({_off:false},0).to({_off:true},86).wait(137));

	// text2
	this.instance_8 = new lib.text2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(76,-61.2);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(137).to({_off:false},0).to({_off:true},86).wait(137));

	// mask-in-out - копия: 2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_211 = new cjs.Graphics().p("A9efOMAVkg+aMAlaAAAMAAAA+ag");
	var mask_4_graphics_212 = new cjs.Graphics().p("A8xfOMASag+aMAnJAAAMAAAA+ag");
	var mask_4_graphics_213 = new cjs.Graphics().p("A8HfOMAPig+aMAotAAAMAAAA+ag");
	var mask_4_graphics_214 = new cjs.Graphics().p("A7ifOMAM/g+aMAqGAAAMAAAA+ag");
	var mask_4_graphics_215 = new cjs.Graphics().p("A7BfOMAKug+aMArVAAAMAAAA+ag");
	var mask_4_graphics_216 = new cjs.Graphics().p("A6kfOMAIwg+aMAsZAAAMAAAA+ag");
	var mask_4_graphics_217 = new cjs.Graphics().p("A6MfOMAHGg+aMAtTAAAMAAAA+ag");
	var mask_4_graphics_218 = new cjs.Graphics().p("A55fOMAFwg+aMAuCAAAMAAAA+ag");
	var mask_4_graphics_219 = new cjs.Graphics().p("A5pfOMAEsg+aMAunAAAMAAAA+ag");
	var mask_4_graphics_220 = new cjs.Graphics().p("A5efOMAD8g+aMAvBAAAMAAAA+ag");
	var mask_4_graphics_221 = new cjs.Graphics().p("A5YfOMADfg+aMAvSAAAMAAAA+ag");
	var mask_4_graphics_222 = new cjs.Graphics().p("A5VfOMADVg+aMAvWAAAMAAAA+ag");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(211).to({graphics:mask_4_graphics_211,x:278.4,y:75.3}).wait(1).to({graphics:mask_4_graphics_212,x:227.8,y:75.3}).wait(1).to({graphics:mask_4_graphics_213,x:182,y:75.3}).wait(1).to({graphics:mask_4_graphics_214,x:141,y:75.3}).wait(1).to({graphics:mask_4_graphics_215,x:104.9,y:75.3}).wait(1).to({graphics:mask_4_graphics_216,x:73.5,y:75.3}).wait(1).to({graphics:mask_4_graphics_217,x:47,y:75.3}).wait(1).to({graphics:mask_4_graphics_218,x:25.4,y:75.3}).wait(1).to({graphics:mask_4_graphics_219,x:8.5,y:75.3}).wait(1).to({graphics:mask_4_graphics_220,x:-3.6,y:75.3}).wait(1).to({graphics:mask_4_graphics_221,x:-10.8,y:75.3}).wait(1).to({graphics:mask_4_graphics_222,x:-13.2,y:75.3}).wait(138));

	// pic3
	this.instance_9 = new lib.gdfg();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-57,-37.4,1,1,0,0,0,77,53.6);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(211).to({_off:false},0).wait(82).to({alpha:0},9,cjs.Ease.get(1)).to({_off:true},1).wait(57));

	// text3
	this.instance_10 = new lib.text3();
	this.instance_10.parent = this;
	this.instance_10.setTransform(75.5,-63.8,0.9,0.9);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(211).to({_off:false},0).wait(82).to({alpha:0},9,cjs.Ease.get(1)).to({_off:true},1).wait(57));

	// bg
	this.instance_11 = new lib.bg();
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,0,1,1,0,0,0,150,125);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(360));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.born2 = new lib.dfs();
	this.born2.parent = this;
	this.born2.setTransform(-3.8,103.1);

	this.instance = new lib.hgj();
	this.instance.parent = this;
	this.instance.setTransform(-9.2,-23.2,0.9,0.9,0,0,0,0.1,-0.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#706F6F").s().p("AgrBHIAAiNIBWAAIAAAOIhHAAIAAAyIA/AAIAAAMIg/AAIAAAzIBIAAIAAAOg");
	this.shape.setTransform(62.1,45.3,0.9,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#706F6F").s().p("AgGBHIgziNIARAAIAoB3IAqh3IAQAAIgzCNg");
	this.shape_1.setTransform(50.8,45.4,0.9,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#706F6F").s().p("AgHBHIAAiNIAPAAIAACNg");
	this.shape_2.setTransform(42.6,45.3,0.9,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#706F6F").s().p("AgHBHIAAh/IgnAAIAAgOIBdAAIAAAOIgoAAIAAB/g");
	this.shape_3.setTransform(35.3,45.3,0.9,0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#706F6F").s().p("AAtBHIgNglIg/AAIgOAlIgQAAIA2iNIAOAAIA3CNgAgaAUIA1AAIgbhHg");
	this.shape_4.setTransform(25.6,45.3,0.9,0.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#706F6F").s().p("AgGBHIgziNIARAAIAoB3IAqh3IAQAAIgzCNg");
	this.shape_5.setTransform(15.1,45.4,0.9,0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#706F6F").s().p("AgrA1QgRgUAAggIAAgBQAAgfARgVQARgUAaAAQAbAAARAUQARAUAAAgIAAABQAAAfgRAVQgRAUgbAAQgaAAgRgUgAgggqQgMAQAAAaIAAABQAAAZAMARQAOAQASAAQAUAAAMgQQANgQAAgaIAAgBQAAgZgNgRQgMgQgUAAQgTAAgNAQg");
	this.shape_6.setTransform(3.4,45.3,0.9,0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAPAAIBJBvIAAhvIAPAAIAACNg");
	this.shape_7.setTransform(-9.4,45.3,0.9,0.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAPAAIBJBvIAAhvIAPAAIAACNg");
	this.shape_8.setTransform(-21.7,45.3,0.9,0.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#706F6F").s().p("AgHBHIAAiNIAOAAIAACNg");
	this.shape_9.setTransform(-30.3,45.3,0.9,0.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAOAAIBKBvIAAhvIAPAAIAACNg");
	this.shape_10.setTransform(-43.5,45.3,0.9,0.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#706F6F").s().p("AAgBHIgig3IghAAIAAA3IgPAAIAAiNIAxAAQAYAAAMANQALAMAAARIAAABQAAAfgiAJIAnA6gAgjACIAfAAQAQAAAKgHQAJgIAAgOQAAgdghAAIghAAg");
	this.shape_11.setTransform(-54.9,45.3,0.9,0.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#706F6F").s().p("AgrA1QgRgUAAggIAAgBQAAgfARgVQARgUAaAAQAbAAARAUQARAUAAAgIAAABQAAAfgRAVQgRAUgbAAQgaAAgRgUgAgggqQgMAQAAAaIAAABQAAAZAMARQAOAQASAAQAUAAAMgQQANgQAAgaIAAgBQAAgZgNgRQgMgQgUAAQgTAAgNAQg");
	this.shape_12.setTransform(-67.6,45.3,0.9,0.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#706F6F").s().p("AgwBHIAAiNIAwAAQAWAAAMAMQAJAKAAAOQAAAYgXAJQAdAIAAAZIAAABQAAASgNAKQgOAKgWAAgAghA5IAhAAQAQAAAJgGQAJgHAAgMIAAgBQAAgZgiAAIghAAgAghgGIAfAAQANAAAIgHQAJgHAAgMQAAgMgIgGQgIgGgNAAIggAAg");
	this.shape_13.setTransform(-79.4,45.3,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance},{t:this.born2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-115.8,-129.6,213.1,239.2), null);


(lib.tetrad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.spr();
	this.instance.parent = this;
	this.instance.setTransform(12.2,197.9,1,1,0,0,0,12.2,192.5);

	this.instance_1 = new lib.fvgdfg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(159.7,97.2,2.164,2.164,-90,0,0,55.1,70);

	this.instance_2 = new lib.fvgdfg();
	this.instance_2.parent = this;
	this.instance_2.setTransform(159.7,314.2,2.164,2.164,-90,0,0,55.1,70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tetrad, new cjs.Rectangle(0,-1.5,163,437.7), null);


// stage content:
(lib._100pcx240 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if (typeof(this.initialized) == "undefined") {
		    this.button_main.addEventListener("click", function() {
		        window.click();
		    });
		    this.initialized = true;
		}
		
		this.stop();
		 
		stage.addEventListener("resize", res);
		
		var bg = this.bg;
		var tetrad = this.tetrad;
		var bg2 = this.bg2;
		var main1 = this.main1;
		var legal1 = this.legal1;
		
		var main2 = this.main2;
		var logo2 = this.logo2;
		var legal2 = this.legal2;
		
		
		var button_main = this.button_main;
		
		function res() {
			
			var wdt = stage.canvas.width;
			var hgt = stage.canvas.height;
			
			button_main.x = 0;
			button_main.scaleX = wdt/300;
			
			tetrad.x = 0;	
			
			bg.x = 0;
			bg.scaleX = wdt/300;
			bg2.x = 0;
			bg2.scaleX = wdt/300;	
		
			if (wdt<500){
				main1.visible = true;
				legal1.visible = true;
				
				main2.visible = false;
				logo2.visible = false;
				legal2.visible = false;
				
			
				main1.x = wdt/2;
				legal1.x = wdt/2;
				
				
			} else if (wdt<650){
				main1.visible = true;
				legal1.visible = true;
				
				main2.visible = false;
				logo2.visible = false;
				legal2.visible = false;
				
				bg2.x = 0;
				bg2.scaleX = wdt/300;	
				main1.x = wdt/2;
				legal1.x = wdt/2;
				
				
			} else if (wdt<790){
				main1.visible = true;
				legal1.visible = true;
				
				main2.visible = false;
				logo2.visible = false;
				legal2.visible = false;
				
				bg2.x = 0;
				bg2.scaleX = wdt/300;	
				main1.x = wdt/2;
				legal1.x = wdt/2;
				
				
			} else if (wdt<1000) {
		
				main1.visible = false;
				legal1.visible = false;
				
				main2.visible = true;
				logo2.visible = true;
				legal2.visible = true;
				
				main2.x = wdt*0.5;
				logo2.x = wdt*0.85;
				legal2.x = 0;
				
				main2.scaleX = 1;
				main2.scaleY = 1;
				
				
			} else {
				main1.visible = false;
				legal1.visible = false;
				
				main2.visible = true;
				logo2.visible = true;
				legal2.visible = true;
				
				main2.x = wdt*0.5;
				logo2.x = wdt*0.85;
				legal2.x = 0;
				
				main2.scaleX = 1.1;
				main2.scaleY = 1.1;
		
				
				
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(447));

	// button
	this.button_main = new lib.Символ1();
	this.button_main.parent = this;
	this.button_main.setTransform(150,125,1,1,0,0,0,150,125);
	this.button_main.alpha = 0;
	new cjs.ButtonHelper(this.button_main, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_main).wait(447));

	// legal2
	this.legal2 = new lib.legal2();
	this.legal2.parent = this;
	this.legal2.setTransform(3.5,223.9);

	this.timeline.addTween(cjs.Tween.get(this.legal2).wait(447));

	// main2
	this.main2 = new lib.main2();
	this.main2.parent = this;
	this.main2.setTransform(274.3,118,1,1,0,0,0,374.3,125);

	this.timeline.addTween(cjs.Tween.get(this.main2).wait(447));

	// logo2
	this.logo2 = new lib.logo();
	this.logo2.parent = this;
	this.logo2.setTransform(655.1,124,1.031,1.031,0,0,0,-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.logo2).wait(447));

	// legal
	this.legal1 = new lib.legal();
	this.legal1.parent = this;
	this.legal1.setTransform(150,226.1,1,1,0,0,0,143,10.4);

	this.timeline.addTween(cjs.Tween.get(this.legal1).to({_off:true},360).wait(87));

	// main
	this.main1 = new lib.main1();
	this.main1.parent = this;
	this.main1.setTransform(150,120);

	this.timeline.addTween(cjs.Tween.get(this.main1).to({_off:true},360).wait(87));

	// bg2
	this.bg2 = new lib.bg2();
	this.bg2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.bg2).to({_off:true},360).wait(87));

	// tetrad
	this.tetrad = new lib.tetrad();
	this.tetrad.parent = this;
	this.tetrad.setTransform(-7.7,217.8,1,1,0,0,0,0,217.8);

	this.timeline.addTween(cjs.Tween.get(this.tetrad).to({_off:true},360).wait(87));

	// bg
	this.bg = new lib.bg();
	this.bg.parent = this;
	this.bg.setTransform(0,125,1,1,0,0,0,0,125);

	this.timeline.addTween(cjs.Tween.get(this.bg).to({_off:true},360).wait(87));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-153.4,110.2,1059.8,446);
// library properties:
lib.properties = {
	width: 300,
	height: 240,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/100pcx240_atlas_P_.png", id:"100pcx240_atlas_P_"},
		{src:"images/100pcx240_atlas_NP_.jpg", id:"100pcx240_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;