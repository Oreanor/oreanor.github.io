(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"100pcx250_atlas_", frames: [[0,282,300,280],[302,282,300,280],[0,0,300,280],[302,0,300,280],[604,0,300,280]]}
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
	this.shape.graphics.f("#00A7E0").s().p("AAvBTIgRgrIg8AAIgQArIgiAAIBFilIAXAAIBFClgAgRALIAkAAIgTgwg");
	this.shape.setTransform(190.1,37.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A7E0").s().p("AA5BTIAAh7IgsB7IgZAAIgsh7IAAB7IgeAAIAAilIApAAIAtB9IAuh9IApAAIAAClg");
	this.shape_1.setTransform(171.6,37.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00A7E0").s().p("Ag9A9QgZgZAAgjQAAgkAZgZQAZgZAkAAQAlAAAZAZQAZAZAAAkQAAAjgZAZQgaAZgkAAQgjAAgagZgAgngnQgRARABAWQgBAYARAQQAQAQAXAAQAYABAQgSQAQgQAAgXQAAgXgQgQQgRgQgXAAQgXAAgQAQg");
	this.shape_2.setTransform(152.1,37.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00A7E0").s().p("AA7BiIAAgfIh2AAIAAAfIgeAAIAAg8IAPAAIA9iHIAaAAIA+CHIAPAAIAAA8gAgoAmIBRAAIgphdg");
	this.shape_3.setTransform(133.6,38.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00A7E0").s().p("Ag9A9QgZgZAAgjQAAgkAZgZQAZgZAkAAQAlAAAZAZQAZAZAAAkQAAAjgZAZQgaAZgkAAQgjAAgagZgAgngnQgQAQAAAXQAAAYAQAQQAQAQAXAAQAYABAQgSQAQgQAAgXQAAgWgQgRQgQgQgYAAQgXAAgQAQg");
	this.shape_4.setTransform(109.9,37.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00A7E0").s().p("AgoBTIAAilIBRAAIAAAeIgzAAIAACHg");
	this.shape_5.setTransform(96.3,37.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00A7E0").s().p("AgrBTIAAilIBXAAIAAAeIg5AAIAAAnIA3AAIAAAcIg3AAIAAAmIA5AAIAAAeg");
	this.shape_6.setTransform(85.1,37.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00A7E0").s().p("AhfBTIAAilIAeAAIAACHIAzAAIAAiHIAdAAIAACHIAzAAIAAiHIAeAAIAAClg");
	this.shape_7.setTransform(68,37.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00A7E0").s().p("AAvBTIgRgrIg8AAIgQArIgiAAIBFilIAXAAIBFClgAgSALIAlAAIgTgwg");
	this.shape_8.setTransform(48.6,37.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00A7E0").s().p("Ag0BTIAAilIAnAAQAcABAOAMQAPALAAAUQgBAMgFAHQgFAIgHAFQANAEAHAJQAIALAAAOQAAAYgRANQgRAOggAAgAgWA1IAUAAQALAAAHgFQAHgHAAgJQAAgJgHgHQgGgEgMgBIgUAAgAgWgSIAPAAQAJAAAFgEQAFgFABgIQAAgIgFgFQgGgEgJAAIgPAAg");
	this.shape_9.setTransform(34.3,37.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00A7E0").s().p("AAvBSIgQgrIg8AAIgSArIghAAIBFijIAXAAIBFCjgAgSAKIAlAAIgTgvg");
	this.shape_10.setTransform(224.3,9.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00A7E0").s().p("AAeBSIAAhFIg7AAIAABFIgfAAIAAijIAfAAIAABCIA7AAIAAhCIAfAAIAACjg");
	this.shape_11.setTransform(208.4,9.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00A7E0").s().p("AgrBSIAAijIBXAAIAAAdIg4AAIAAAmIA2AAIAAAdIg2AAIAAAmIA4AAIAAAdg");
	this.shape_12.setTransform(195.2,9.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00A7E0").s().p("AAlBSIAAhzIhJBzIgeAAIAAijIAeAAIAABzIBJhzIAeAAIAACjg");
	this.shape_13.setTransform(181,9.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00A7E0").s().p("AgoBSIAAijIBRAAIAAAdIgzAAIAACGg");
	this.shape_14.setTransform(168.6,9.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00A7E0").s().p("AAlBSIAAhzIhJBzIgeAAIAAijIAeAAIAABzIBJhzIAeAAIAACjg");
	this.shape_15.setTransform(154.7,9.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00A7E0").s().p("AgoBSIAAijIBRAAIAAAdIgzAAIAACGg");
	this.shape_16.setTransform(142.3,9.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00A7E0").s().p("AAlBSIAAhzIhJBzIgeAAIAAijIAeAAIAABzIBJhzIAeAAIAACjg");
	this.shape_17.setTransform(123.2,9.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00A7E0").s().p("AgOBSIAAiGIgfAAIAAgdIBbAAIAAAdIgfAAIAACGg");
	this.shape_18.setTransform(105.1,9.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00A7E0").s().p("AgzBSIAAijIAuAAQAcAAAOANQAPAOAAAYQAAAXgOAMQgQAPgbAAIgQAAIAAA+gAgVgIIASAAQALgBAHgFQAHgGAAgLQAAgKgHgFQgHgGgLAAIgSAAg");
	this.shape_19.setTransform(94.8,9.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00A7E0").s().p("Ag9A9QgZgYAAglQAAgiAZgaQAZgZAkAAQAlAAAZAZQAZAaAAAiQAAAlgaAYQgZAZgkAAQgjAAgagZgAgognQgQARAAAWQAAAXAQARQARAQAXAAQAXAAARgQQARgRAAgXQAAgWgRgRQgRgRgXAAQgXAAgRARg");
	this.shape_20.setTransform(78.7,9.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00A7E0").s().p("AgOBdIAAgXQghAAgUgUQgVgUAAgeQAAgfAVgUQAVgUAgAAIAAgVIAdAAIAAAVQAhAAAUAUQAVAUAAAfQAAAegVAUQgTATgiABIAAAXgAAPAoQAUABAMgMQAMgMAAgRQAAgSgMgMQgLgMgVAAgAgugeQgMAMAAASQAAARAMAMQANAMATgBIAAhSQgUAAgMAMg");
	this.shape_21.setTransform(59.7,9.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00A7E0").s().p("AA5BSIAAh6IgsB6IgZAAIgsh6IAAB6IgeAAIAAijIApAAIAtB9IAuh9IApAAIAACjg");
	this.shape_22.setTransform(39.9,9.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00A7E0").s().p("Ag9A9QgZgZAAgkQAAgjAZgZQAZgZAkAAQAlAAAZAZQAZAZAAAjQAAAkgZAZQgaAZgkAAQgkAAgZgZgAgngnQgQAQAAAXQAAAYAQAQQAQAQAXAAQAYAAAQgQQAQgRAAgXQAAgWgQgRQgQgRgYAAQgXAAgQARg");
	this.shape_23.setTransform(20.3,9.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00A7E0").s().p("AAXBSIgzhIIAABIIgeAAIAAijIAeAAIAABHIAzhHIAkAAIg9BRIA9BSg");
	this.shape_24.setTransform(5.9,9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t5, new cjs.Rectangle(0,0,232.4,48.5), null);


(lib.t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("AgVAWQgJgJAAgNQAAgMAJgJQAJgJAMAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAQgMAAgJgJgAgNgNQgGAGAAAHQAAAJAGAFQAGAGAHAAQAJAAAFgGQAGgFAAgJQAAgHgGgGQgFgGgJAAQgHAAgGAGg");
	this.shape.setTransform(177.1,29.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A7E0").s().p("AgnBGQgPgPAAgcIAAg1QAAgbAPgQQAPgQAYAAQAaAAAPAQQAOAQAAAbIAAA1QAAAbgOAQQgQAQgZAAQgYAAgPgQgAgSgxQgGAHAAAQIAAA1QgBAOAHAJQAGAIAMAAQAMAAAHgIQAHgIAAgPIAAg1QAAgQgHgHQgHgIgMAAQgLAAgHAIg");
	this.shape_1.setTransform(166.1,36.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00A7E0").s().p("AgoBEQgQgRAAgZQAAgKADgKQADgIAGgJIAuhIIAjAAIglA4IAEgBIAFAAQAUAAAOAPQAOAOAAAZQAAAagQAQQgPAQgaAAQgYAAgQgQgAgTAGQgHAJAAAMQAAANAHAIQAIAIALAAQAMAAAIgIQAHgIABgNQgBgMgHgJQgIgHgMAAQgLAAgIAHg");
	this.shape_2.setTransform(153.6,36.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00A7E0").s().p("AAlBSIAAhyIhJByIgeAAIAAijIAeAAIAAByIBJhyIAeAAIAACjg");
	this.shape_3.setTransform(133.9,36);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00A7E0").s().p("Ag0BSIAAijIAvAAQAbAAAPAOQAQAOAAAXQAAAXgPANQgPAOgcAAIgQAAIAAA+gAgVgJIASAAQAMAAAGgFQAGgFABgLQAAgLgHgFQgHgGgLAAIgSAAg");
	this.shape_4.setTransform(120,36);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00A7E0").s().p("AAeBSIAAiGIg7AAIAACGIgfAAIAAijIB5AAIAACjg");
	this.shape_5.setTransform(105.6,36);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00A7E0").s().p("AAvBSIgRgqIg8AAIgQAqIgiAAIBFijIAXAAIBFCjgAgRAKIAkAAIgTgvg");
	this.shape_6.setTransform(84.6,36);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00A7E0").s().p("AAWBSIgyhIIAABIIgeAAIAAijIAeAAIAABHIAyhHIAlAAIg9BRIA9BSg");
	this.shape_7.setTransform(70,36);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00A7E0").s().p("Ag0BSIAAijIAvAAQAbAAAPAOQAQANgBAYQABAXgQANQgOAOgcAAIgQAAIAAA+gAgVgJIASAAQAMAAAGgFQAHgFAAgLQAAgLgHgFQgGgGgMAAIgSAAg");
	this.shape_8.setTransform(56.9,36);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00A7E0").s().p("AAlBSIAAhyIhJByIgeAAIAAijIAeAAIAAByIBJhyIAeAAIAACjg");
	this.shape_9.setTransform(41.8,36);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00A7E0").s().p("AgOBSIAAiGIgfAAIAAgdIBbAAIAAAdIgfAAIAACGg");
	this.shape_10.setTransform(28.9,36);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00A7E0").s().p("Ag4A9QgYgZAAgkQAAgjAYgZQAZgZAkAAQAZAAAVANQATANALAYIgjAAQgHgKgLgFQgLgFgMAAQgYAAgPARQgQAQAAAWQAAAWAQASQARAQAWAAQAMAAAKgEQAKgFAIgKIAjAAQgLAXgTANQgTANgbAAQgjAAgZgZg");
	this.shape_11.setTransform(15.7,36.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00A7E0").s().p("AAZBSIAAg/IAAAAIgrA/IglAAIAug9QgUgCgMgNQgMgNAAgUQAAgZAQgPQAQgOAdAAIAvAAIAACjgAgPgtQgIAGABAMQgBAMAIAGQAIAHAOgBIASAAIAAgxIgSAAQgPAAgHAHg");
	this.shape_12.setTransform(173.7,8.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00A7E0").s().p("AAvBSIgQgqIg9AAIgRAqIghAAIBFijIAXAAIBFCjgAgSALIAlAAIgTgwg");
	this.shape_13.setTransform(159.1,8.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00A7E0").s().p("AAXBSIgzhHIAABHIgeAAIAAijIAeAAIAABHIAzhHIAkAAIg9BRIA9BSg");
	this.shape_14.setTransform(144.5,8.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00A7E0").s().p("Ag4A9QgYgZAAgkQAAgjAYgZQAZgZAkAAQAaAAAUANQAUAOAKAXIgjAAQgHgKgLgFQgKgFgNAAQgXAAgQAQQgQARAAAWQAAAWAQASQARAQAWAAQAMAAAKgFQALgEAHgKIAjAAQgKAXgUANQgUANgaAAQgjAAgZgZg");
	this.shape_15.setTransform(128.5,8.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00A7E0").s().p("AgrBSIAAijIBXAAIAAAdIg5AAIAAAmIA3AAIAAAdIg3AAIAAAmIA5AAIAAAdg");
	this.shape_16.setTransform(114,8.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00A7E0").s().p("AAaBSIAAg+IgbAAQgOABgKgDQgJgDgHgFQgIgHgDgIQgEgIAAgPIAAg1IAfAAIAAAwQAAAJABADQACAFADACQACADAFACIAmABIAAhJIAfAAIAACjg");
	this.shape_17.setTransform(100.9,8.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00A7E0").s().p("AAlBSIAAhzIhJBzIgeAAIAAijIAeAAIAABzIBJhzIAeAAIAACjg");
	this.shape_18.setTransform(86,8.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00A7E0").s().p("AAeBSIAAhFIg7AAIAABFIgeAAIAAijIAeAAIAABCIA7AAIAAhCIAeAAIAACjg");
	this.shape_19.setTransform(70.2,8.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00A7E0").s().p("AgrBSIAAijIBXAAIAAAdIg5AAIAAAmIA3AAIAAAdIg3AAIAAAmIA5AAIAAAdg");
	this.shape_20.setTransform(57,8.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00A7E0").s().p("AAlBSIAAhzIhJBzIgeAAIAAijIAeAAIAABzIBIhzIAgAAIAACjg");
	this.shape_21.setTransform(42.8,8.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00A7E0").s().p("AgoBSIAAijIBRAAIAAAdIgzAAIAACGg");
	this.shape_22.setTransform(30.4,8.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00A7E0").s().p("AAlBSIAAhzIhJBzIgeAAIAAijIAeAAIAABzIBJhzIAeAAIAACjg");
	this.shape_23.setTransform(16.5,8.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00A7E0").s().p("AgoBSIAAijIBRAAIAAAdIgzAAIAACGg");
	this.shape_24.setTransform(4.1,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4, new cjs.Rectangle(0,0,180.2,44.7), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("AgOBSIAAiGIgfAAIAAgeIBbAAIAAAeIgeAAIAACGg");
	this.shape.setTransform(165.2,63.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A7E0").s().p("AgfBSIATgpIg/h7IAlAAIArBXIAmhXIAhAAIhLCkg");
	this.shape_1.setTransform(152.7,63.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00A7E0").s().p("AAeBSIAAhEIg7AAIAABEIgfAAIAAikIAfAAIAABCIA7AAIAAhCIAfAAIAACkg");
	this.shape_2.setTransform(137.4,63.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00A7E0").s().p("AAlBSIAAhzIhJBzIgeAAIAAikIAeAAIAAB0IBJh0IAeAAIAACkg");
	this.shape_3.setTransform(121.5,63.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00A7E0").s().p("AA5BSIAAh6IgsB6IgZAAIgsh6IAAB6IgeAAIAAikIApAAIAtB+IAuh+IApAAIAACkg");
	this.shape_4.setTransform(103,63.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00A7E0").s().p("AAMBSIAAgYIhGAAIAAgYIBLh0IAZAAIAABvIARAAIAAAdIgRAAIAAAYgAgaAdIAmAAIAAg8g");
	this.shape_5.setTransform(81,63.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00A7E0").s().p("AAOBSIAAh6IghArIgXgQIAzhFIAiAAIAACkg");
	this.shape_6.setTransform(68.1,63.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00A7E0").s().p("AgOBSIAAiGIgfAAIAAgeIBbAAIAAAeIgfAAIAACGg");
	this.shape_7.setTransform(52.8,63.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00A7E0").s().p("Ag9A9QgZgZAAgjQAAgjAZgaQAagZAjAAQAkAAAaAZQAZAaAAAjQAAAjgZAZQgaAZgkAAQgjAAgagZgAgngnQgQAQAAAXQAAAXAQAQQAQARAXAAQAZAAAPgRQAQgQAAgXQAAgXgQgQQgPgQgZgBQgXABgQAQg");
	this.shape_8.setTransform(39.4,63.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00A7E0").s().p("AAlBSIAAhyIhJByIgeAAIAAijIAeAAIAAByIBJhyIAeAAIAACjg");
	this.shape_9.setTransform(187.9,36);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00A7E0").s().p("AAWBSIgxhIIAABIIgfAAIAAijIAfAAIAABHIAxhHIAlAAIg9BRIA9BSg");
	this.shape_10.setTransform(173.3,36);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00A7E0").s().p("Ag0BSIAAijIAuAAQAcAAAPAOQAPANABAYQgBAWgOAOQgPAOgdAAIgPAAIAAA+gAgVgJIASAAQAMAAAHgFQAGgFAAgLQAAgLgGgFQgIgGgLAAIgSAAg");
	this.shape_11.setTransform(160.2,36);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00A7E0").s().p("AAkBSIAAhyIhIByIgeAAIAAijIAeAAIAAByIBIhyIAgAAIAACjg");
	this.shape_12.setTransform(145.2,36);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00A7E0").s().p("AgOBSIAAiGIgfAAIAAgdIBbAAIAAAdIgfAAIAACGg");
	this.shape_13.setTransform(132.2,36);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00A7E0").s().p("Ag4A9QgYgZAAgkQAAgjAYgZQAagZAjAAQAZAAAVANQATANALAYIgiAAQgJgKgKgFQgMgFgLAAQgXAAgQARQgQAQAAAWQAAAWAQASQARAQAWAAQAMAAAKgEQALgGAHgJIAjAAQgLAXgTANQgTANgbAAQgjAAgZgZg");
	this.shape_14.setTransform(119,36.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00A7E0").s().p("AAlBmIAAhyIhJByIgeAAIAAijIAeAAIAABzIBJhzIAeAAIAACjgAgahPQgLgJgCgOIAaAAQABAGADADQAEADAFAAQAGAAAEgDQADgCACgHIAZAAQgCAOgLAJQgLAJgQAAQgPAAgLgJg");
	this.shape_15.setTransform(96.7,34);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00A7E0").s().p("Ag9A9QgZgZAAgkQAAgiAZgaQAagZAjAAQAlAAAZAZQAZAaAAAiQAAAkgZAZQgZAZglAAQgjAAgagZgAgngnQgQARAAAWQAAAXAQARQAQAQAXAAQAYAAAQgQQAQgRAAgXQAAgWgQgRQgQgQgYAAQgXAAgQAQg");
	this.shape_16.setTransform(79.2,36.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00A7E0").s().p("Ag0BSIAAijIAvAAQAbAAAPAOQAQAOAAAXQAAAXgPANQgPAOgcAAIgQAAIAAA+gAgVgJIASAAQAMAAAGgFQAGgFABgLQAAgLgHgFQgHgGgLAAIgSAAg");
	this.shape_17.setTransform(64.1,36);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00A7E0").s().p("AgOBSIAAiGIgfAAIAAgdIBbAAIAAAdIgfAAIAACGg");
	this.shape_18.setTransform(52.6,36);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00A7E0").s().p("Ag4A9QgYgZAAgkQAAgjAYgZQAZgZAkAAQAZAAAVANQATANALAYIgjAAQgHgKgLgFQgLgFgMAAQgYAAgPARQgQAQAAAWQAAAWAQASQARAQAWAAQAMAAAKgEQALgGAHgJIAjAAQgLAXgTANQgTANgbAAQgjAAgZgZg");
	this.shape_19.setTransform(39.4,36.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00A7E0").s().p("AAwBSIAAijIAeAAIAACjgAhOBSIAAijIAfAAIAAA/IAZAAQAYAAAPAOQAPANAAAXQAAAWgQAOQgPAOgXAAgAgvA1IAZAAQAKAAAHgGQAGgFAAgKQgBgKgFgGQgHgFgKAAIgZAAg");
	this.shape_20.setTransform(21.2,36);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00A7E0").s().p("Ag3BSIAAijIBfAAIAAAdIhAAAIAAAiIAZAAQAcAAANAPQAOAOAAAVQAAAXgQANQgOAOgZAAgAgYA1IAZAAQALAAAGgGQAGgFABgKQAAgJgGgGQgGgGgMAAIgZAAg");
	this.shape_21.setTransform(5.6,36);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00A7E0").s().p("AAwBTIAAilIAfAAIAAClgAhOBTIAAilIAfAAIAABAIAZAAQAZAAAOAOQAPANAAAXQAAAWgQAOQgPAPgXAAgAgvA1IAZAAQAKAAAHgFQAGgHAAgJQgBgKgFgGQgGgFgLAAIgZAAg");
	this.shape_22.setTransform(162.1,8.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00A7E0").s().p("AA5BTIAAh7IgsB7IgZAAIgsh7IAAB7IgeAAIAAilIApAAIAtB9IAuh9IApAAIAAClg");
	this.shape_23.setTransform(142.5,8.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00A7E0").s().p("AA5BTIAAh7IgsB7IgZAAIgsh7IAAB7IgfAAIAAilIAqAAIAtB9IAuh9IApAAIAAClg");
	this.shape_24.setTransform(122,8.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00A7E0").s().p("AAvBTIgQgrIg8AAIgRArIgiAAIBFilIAXAAIBFClgAgSALIAlAAIgTgwg");
	this.shape_25.setTransform(103.5,8.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00A7E0").s().p("AgzBTIAAilIAtAAQAcABAPAOQAPANAAAYQAAAXgOANQgPAOgdAAIgPAAIAAA/gAgVgJIASAAQALABAHgGQAHgGAAgKQAAgLgHgFQgGgGgMABIgSAAg");
	this.shape_26.setTransform(91.4,8.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00A7E0").s().p("AgoBTIAAilIBRAAIAAAfIgzAAIAACGg");
	this.shape_27.setTransform(80.4,8.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00A7E0").s().p("Ag9A9QgZgZAAgkQAAgjAZgZQAZgZAkAAQAmAAAYAZQAZAZAAAjQAAAkgZAZQgZAZglAAQgkAAgZgZgAgngnQgQAQAAAXQAAAXAQARQAQAQAXAAQAYAAAQgQQAQgRAAgXQAAgXgQgQQgQgQgYAAQgXAAgQAQg");
	this.shape_28.setTransform(65.4,8.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00A7E0").s().p("Ag0BTIAAilIAuAAQAdABAOAOQAQANAAAYQgBAXgPANQgOAOgdAAIgPAAIAAA/gAgVgJIASAAQALABAHgGQAHgGAAgKQAAgLgGgFQgIgGgLABIgSAAg");
	this.shape_29.setTransform(50.4,8.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00A7E0").s().p("AAeBTIAAiGIg7AAIAACGIgfAAIAAilIB4AAIAAClg");
	this.shape_30.setTransform(36,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(0,0,194.6,72.2), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("AAeBTIAAhGIg7AAIAABGIgfAAIAAikIAfAAIAABCIA7AAIAAhCIAfAAIAACkg");
	this.shape.setTransform(129.2,39.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A7E0").s().p("AAkBnIAAh0IhIB0IgfAAIAAikIAfAAIAAByIBIhyIAgAAIAACkgAgbhPQgKgJgCgOIAaAAQAAAFAEADQAEADAFAAQAGABAEgDQAEgEAAgFIAaAAQgCAOgLAJQgKAJgRAAQgQAAgLgJg");
	this.shape_1.setTransform(113.4,37.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00A7E0").s().p("AAvBTIgQgrIg8AAIgRArIgiAAIBFikIAYAAIBECkgAgSALIAlAAIgTgwg");
	this.shape_2.setTransform(96.9,39.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00A7E0").s().p("AgpBHQgQgPACgZIAfAAQAAALAGAGQAHAIALAAQALgBAHgFQAHgGAAgKQAAgJgGgHQgHgGgKAAIgPAAIAAgcIANAAQAJAAAFgGQAGgEAAgJQAAgJgGgGQgFgEgJAAQgHAAgGAEQgGAEAAAHIgfAAQAAgTAOgNQANgNAXAAQAWAAAOAMQAOAMAAAVQAAAMgGAKQgHAIgKAGQANADAIALQAIAMAAAOQgBAWgPANQgQANgYAAQgZAAgQgOg");
	this.shape_3.setTransform(82.6,39.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00A7E0").s().p("AAkBTIAAh0IhIB0IgfAAIAAikIAfAAIAAByIBIhyIAfAAIAACkg");
	this.shape_4.setTransform(68,39.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00A7E0").s().p("AA8BiIAAgfIh3AAIAAAfIgeAAIAAg9IAQAAIA9iGIAaAAIA9CGIAPAAIAAA9gAgnAlIBQAAIgphbg");
	this.shape_5.setTransform(50.6,41.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00A7E0").s().p("AAlBmIAAhzIhJBzIgeAAIAAikIAeAAIAAB0IBIh0IAgAAIAACkgAgbhPQgLgJgBgNIAZAAQABAEAEADQAEAEAFAAQAGAAAEgEQAEgDABgEIAZAAQgDAOgKAIQgLAIgQABQgPgBgMgIg");
	this.shape_6.setTransform(171.5,10.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00A7E0").s().p("AAwBSIAAikIAeAAIAACkgAhNBSIAAikIAeAAIAABAIAZAAQAYAAAOAOQAPAMAAAYQAAAXgPAOQgPANgXAAgAgvA0IAZAAQALAAAGgFQAGgFAAgKQAAgLgGgFQgGgFgLgBIgZAAg");
	this.shape_7.setTransform(153.9,12.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00A7E0").s().p("AAeBSIAAhEIg7AAIAABEIgfAAIAAikIAfAAIAABCIA7AAIAAhCIAfAAIAACkg");
	this.shape_8.setTransform(137,12.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00A7E0").s().p("AAeBSIAAiGIg7AAIAACGIgfAAIAAikIB5AAIAACkg");
	this.shape_9.setTransform(121.8,12.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00A7E0").s().p("AgrBSIAAikIBXAAIAAAeIg4AAIAAAmIA2AAIAAAdIg2AAIAAAlIA4AAIAAAeg");
	this.shape_10.setTransform(108.6,12.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00A7E0").s().p("AAtBSIgth5IgsB5IgiAAIBCikIAZAAIBCCkg");
	this.shape_11.setTransform(94.6,12.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00A7E0").s().p("Ag9A9QgZgYAAgkQAAgkAZgZQAZgZAkAAQAlAAAZAZQAZAZAAAkQAAAkgZAYQgZAZglAAQgkAAgZgZgAgngnQgQARAAAWQAAAXAQAQQAQARAXAAQAYAAAQgRQAQgQAAgXQAAgXgQgQQgQgQgYgBQgXABgQAQg");
	this.shape_12.setTransform(77.3,12.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00A7E0").s().p("AAWBSIgxhIIAABIIgfAAIAAikIAfAAIAABIIAxhIIAlAAIg9BSIA9BSg");
	this.shape_13.setTransform(63,12.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00A7E0").s().p("AAlBSIAAhzIhJBzIgeAAIAAikIAeAAIAAB0IBJh0IAeAAIAACkg");
	this.shape_14.setTransform(47.3,12.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00A7E0").s().p("AAtBSIgth5IgsB5IgiAAIBBikIAaAAIBCCkg");
	this.shape_15.setTransform(31,12.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00A7E0").s().p("AgrBSIAAikIBXAAIAAAeIg5AAIAAAmIA3AAIAAAdIg3AAIAAAlIA5AAIAAAeg");
	this.shape_16.setTransform(17.3,12.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00A7E0").s().p("Ag1BSIAAikIAoAAQAcAAAOAMQAPAMAAAUQAAAKgGAJQgFAJgHADQAMAFAIAJQAHALABAOQAAAYgRAOQgRAMggAAgAgWA0IAUAAQALABAHgGQAHgFAAgKQAAgJgHgHQgGgEgMgCIgUAAgAgWgSIAOAAQAKAAAFgEQAFgFABgIQAAgJgFgDQgHgFgJAAIgOAAg");
	this.shape_17.setTransform(5.4,12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(0,0,178.3,51.1), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("AAuBOIAAibIAcAAIAACbgAhKBOIAAibIAdAAIAAA8IAYAAQAXAAAOANQANAMAAAWQABAWgPANQgOANgWAAgAgtAyIAYAAQAKAAAGgFQAFgFABgKQgBgJgFgFQgHgGgJAAIgYAAg");
	this.shape.setTransform(257.8,34.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A7E0").s().p("AAcBOIAAhCIg4AAIAABCIgdAAIAAibIAdAAIAAA+IA4AAIAAg+IAeAAIAACbg");
	this.shape_1.setTransform(241.7,34.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00A7E0").s().p("AAjBOIAAhsIhFBsIgdAAIAAibIAdAAIAABtIBFhtIAdAAIAACbg");
	this.shape_2.setTransform(226.7,34.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00A7E0").s().p("AhaBOIAAibIAdAAIAAB/IAvAAIAAh/IAdAAIAAB/IAvAAIAAh/IAdAAIAACbg");
	this.shape_3.setTransform(208.3,34.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00A7E0").s().p("AAtBOIgQgoIg5AAIgQAoIggAAIBCibIAWAAIBBCbgAgRAKIAjAAIgSgtg");
	this.shape_4.setTransform(189.9,34.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00A7E0").s().p("AA2BOIAAh0IgqB0IgXAAIgqh0IAAB0IgdAAIAAibIAnAAIArB3IArh3IAoAAIAACbg");
	this.shape_5.setTransform(172.4,34.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00A7E0").s().p("AgpBOIAAibIBTAAIAAAcIg2AAIAAAkIAzAAIAAAbIgzAAIAAAkIA2AAIAAAcg");
	this.shape_6.setTransform(152.4,34.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00A7E0").s().p("AAuBOIAAibIAcAAIAACbgAhJBOIAAibIAdAAIAAA8IAWAAQAYAAAOANQAOAMgBAWQAAAWgOANQgOANgXAAgAgsAyIAXAAQAKAAAGgFQAFgFABgKQgBgJgFgFQgGgGgKAAIgXAAg");
	this.shape_7.setTransform(137.9,34.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00A7E0").s().p("AAdBOIAAhCIg5AAIAABCIgdAAIAAibIAdAAIAAA+IA5AAIAAg+IAcAAIAACbg");
	this.shape_8.setTransform(121.9,34.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00A7E0").s().p("AgzBOIAAibIAdAAIAAA8IAWAAQAZAAANANQAOAMAAAWQAAAWgOANQgPANgXAAgAgWAyIAWAAQAKAAAGgFQAHgGAAgJQgBgJgGgFQgGgGgKAAIgWAAg");
	this.shape_9.setTransform(109.1,34.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00A7E0").s().p("AArBOIgrhzIgqBzIggAAIA+ibIAZAAIA+Cbg");
	this.shape_10.setTransform(94.8,34.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00A7E0").s().p("AAjBOIAAhsIhFBsIgdAAIAAibIAdAAIAABtIBFhtIAdAAIAACbg");
	this.shape_11.setTransform(79.4,34.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00A7E0").s().p("AhaBOIAAibIAdAAIAAB/IAvAAIAAh/IAcAAIAAB/IAwAAIAAh/IAdAAIAACbg");
	this.shape_12.setTransform(61,34.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00A7E0").s().p("AgdBOIASgoIg8hzIAjAAIAoBSIAlhSIAfAAIhHCbg");
	this.shape_13.setTransform(43,34.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00A7E0").s().p("Ag1A6QgXgYAAgiQAAgiAXgXQAYgYAiABQAWgBAVANQATANAKAWIghAAQgIgKgKgEQgJgFgMAAQgWAAgQAPQgOARAAAUQAAAVAPARQAQAQAVAAQALAAAJgFQALgFAHgIIAhAAQgKAVgTAMQgSANgZAAQghgBgYgXg");
	this.shape_14.setTransform(27.5,34.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00A7E0").s().p("AAjBOIAAhsIhFBsIgdAAIAAibIAdAAIAABtIBFhtIAdAAIAACbg");
	this.shape_15.setTransform(6.4,34.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00A7E0").s().p("AgpBOIAAibIBTAAIAAAcIg2AAIAAAkIA0AAIAAAbIg0AAIAAAkIA2AAIAAAcg");
	this.shape_16.setTransform(231.1,8.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00A7E0").s().p("AAtBOIAAibIAdAAIAACbgAhJBOIAAibIAcAAIAAA8IAYAAQAXAAAOANQAOAMAAAWQAAAVgPAOQgPANgVAAgAgtAyIAYAAQAKAAAGgFQAGgGAAgJQgBgKgFgFQgGgFgKAAIgYAAg");
	this.shape_17.setTransform(216.6,8.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00A7E0").s().p("AAcBOIAAhBIg3AAIAABBIgdAAIAAibIAdAAIAAA+IA3AAIAAg+IAdAAIAACbg");
	this.shape_18.setTransform(200.6,8.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00A7E0").s().p("AgzBOIAAibIAdAAIAAA8IAXAAQAXAAAOANQAOAMAAAWQAAAVgOAOQgPANgWAAgAgWAyIAXAAQAKAAAFgFQAHgFAAgKQAAgKgHgFQgFgFgKAAIgXAAg");
	this.shape_19.setTransform(187.8,8.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00A7E0").s().p("AArBOIgrhzIgpBzIghAAIA+ibIAZAAIA+Cbg");
	this.shape_20.setTransform(173.5,8.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00A7E0").s().p("AAtBOIgQgoIg5AAIgQAoIggAAIBCibIAWAAIBBCbgAgRAKIAjAAIgSgtg");
	this.shape_21.setTransform(158.1,8.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00A7E0").s().p("AgxBOIAAibIAsAAQAZAAAPANQAPANAAAXQAAAVgPAMQgOAOgaAAIgPAAIAAA7gAgUgIIARAAQALAAAGgFQAHgFAAgLQAAgKgHgFQgHgFgKAAIgRAAg");
	this.shape_22.setTransform(146.6,8.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00A7E0").s().p("AAjBOIAAhtIhFBtIgdAAIAAibIAdAAIAABtIBFhtIAdAAIAACbg");
	this.shape_23.setTransform(132.4,8.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00A7E0").s().p("AgOBOIAAh/IgdAAIAAgcIBWAAIAAAcIgcAAIAAB/g");
	this.shape_24.setTransform(120.1,8.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00A7E0").s().p("Ag1A6QgXgYAAgiQAAghAXgYQAYgYAiABQAXAAAUAMQATANAKAWIghAAQgHgIgKgGQgKgFgMAAQgWAAgPAPQgPARAAAUQAAAWAPAQQAQAQAVAAQALAAAKgFQAJgFAIgIIAhAAQgKAVgTAMQgSANgZAAQghgBgYgXg");
	this.shape_25.setTransform(107.5,8.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00A7E0").s().p("AgpBOIAAibIBTAAIAAAcIg2AAIAAAkIA0AAIAAAbIg0AAIAAAkIA2AAIAAAcg");
	this.shape_26.setTransform(88.9,8.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00A7E0").s().p("AAjBOIAAhtIhFBtIgdAAIAAibIAdAAIAABtIBFhtIAdAAIAACbg");
	this.shape_27.setTransform(75.5,8.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00A7E0").s().p("AAWBOIgwhEIAABEIgdAAIAAibIAdAAIAABEIAwhEIAiAAIg6BNIA6BOg");
	this.shape_28.setTransform(61.6,8.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00A7E0").s().p("AgmBDQgPgNABgYIAdAAQAAAKAGAGQAGAHALAAQALAAAHgFQAGgGAAgJQAAgJgGgHQgHgFgJAAIgOAAIAAgbIAMAAQAJAAAFgFQAFgFAAgIQAAgJgFgEQgFgFgIAAQgIAAgFAEQgFADgBAIIgdAAQAAgSANgNQANgNAWAAQAUAAAOAMQANANAAASQAAAMgGAJQgHAJgKAEQANADAIAKQAHAKAAAPQAAAVgPAMQgPANgXAAQgXAAgPgOg");
	this.shape_29.setTransform(48.8,8.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00A7E0").s().p("AgeBOIATgoIg8hzIAjAAIAoBSIAlhSIAfAAIhHCbg");
	this.shape_30.setTransform(36.2,8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(0,0,265.2,42.4), null);


(lib.p5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._5();
	this.instance.parent = this;
	this.instance.setTransform(-149,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p5, new cjs.Rectangle(-149,-145,300,280), null);


(lib.p4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("ACTAvIAAgZIgGAFIgHABQgIgBgGgGQgGgIAAgNQgBgKAGgIQAFgIAKABQAEAAADABQAEABACADIAAgYIAIAAIAAAYIAGgEIAIgBQAJgBAFAIQAFAIAAALQAAAMgFAHQgGAIgIAAIgHgBQgCgBgFgEIAAAZgACfgOQgDAFgBAKQABALADAEQADAFAFAAQAFAAAEgGQADgEAAgLQAAgJgCgFQgFgEgEgBQgHABgCAEgAB+gOQgEAFABAJQAAALADAEQAEAGAFAAQAGAAADgGQADgEAAgKQAAgJgDgFQgDgGgGAAQgGABgDAEgADIAXQgEgEAAgGQAAgEACgDQABgDAEgCIAFgCIAIgCQALgBAFgBIAAgCQAAgGgCgCQgEgDgGgBQgHAAgCADQgEACgBAGIgJgCQACgFADgEQACgDAFgBQAFgCAHAAQAHAAAEABQAEABACADQACACABAEIAAAIIAAALIAAAQIADAGIgKAAIgBgHQgFAFgFABQgEACgFAAQgIAAgGgFgADaAEIgIABIgEAEIgBADQABAEACADQADACAFAAQAFAAAEgCQAEgCACgFIABgJIAAgCQgEABgKACgAj6AVQgGgHAAgNQAAgHADgHQADgGAFgEQAGgCAGAAQAJgBAGAFQAEAEACAIIgIABQgCgFgDgCQgDgDgEgBQgHABgEAEQgEAFAAAKQAAAKAEAEQAEAGAGAAQAFAAAEgDQAEgEABgHIAIACQgBAIgGAFQgGAFgJABQgKgBgHgGgAgeAbIAAgIIAEAAIAEAAIACgCIAAgIIAAghIAnAAIAAAzIgIAAIAAgsIgWAAIAAAZIgBAMQgBACgCACQgDADgEAAIgIAAgAEgAbIAAgnIgYAnIgKAAIAAgzIAJAAIAAAmIAYgmIAKAAIAAAzgABDAbIAAgnIgZAnIgJAAIAAgzIAJAAIAAAmIAXgmIAKAAIAAAzgAguAbIAAgsIgYAAIAAAsIgJAAIAAgzIAqAAIAAAzgAhlAbIAAgpIgPApIgIAAIgOgrIAAArIgJAAIAAgzIANAAIAOAoIAPgoIANAAIAAAzgAiqAbIAAgnIgYAnIgKAAIAAgzIAJAAIAAAmIAYgmIAKAAIAAAzgAkYgZIgHAKIgFgEIAIgJIgMgDIACgHIAMAFIgBgNIAHAAIgCANIAMgFIADAHIgNADIAIAJIgFAEIgHgKgAELgiQgEgEgBgGIAGAAQABADACACQACABAEAAQADAAADgBQABgCABgDIAGAAQgBAGgEAEQgDACgGAAQgGAAgEgCg");
	this.shape.setTransform(-111,-106.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib._4();
	this.instance.parent = this;
	this.instance.setTransform(-149,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p4, new cjs.Rectangle(-149,-145,300,280), null);


(lib.p3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._3();
	this.instance.parent = this;
	this.instance.setTransform(-149,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p3, new cjs.Rectangle(-149,-145,300,280), null);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(-119,-117,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2, new cjs.Rectangle(-119,-117,240,224), null);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(-149,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1, new cjs.Rectangle(-149,-145,300,280), null);


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
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(300).to({_off:false},0).to({x:0,y:0,alpha:1},6,cjs.Ease.get(1)).wait(67).to({x:-10,alpha:0},6,cjs.Ease.get(1)).wait(1));

	// p4
	this.instance_1 = new lib.p4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(10,0.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(225).to({_off:false},0).to({x:0,y:0,alpha:1},6,cjs.Ease.get(1)).wait(67).to({x:-10,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(75));

	// p3
	this.instance_2 = new lib.p3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(10,0.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(150).to({_off:false},0).to({x:0,y:0,alpha:1},6,cjs.Ease.get(1)).wait(67).to({x:-10,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(150));

	// p2
	this.instance_3 = new lib.p2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(10,0.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(75).to({_off:false},0).to({x:0,y:0,alpha:1},6,cjs.Ease.get(1)).wait(67).to({x:-10,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(225));

	// p1
	this.instance_4 = new lib.p1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(10,0.7);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:0,y:0,alpha:1},6,cjs.Ease.get(1)).wait(67).to({x:-10,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(300));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bWqMAAAgtTMAu3AAAMAAAAtTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(380));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-145,311,290);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t5
	this.instance = new lib.t5();
	this.instance.parent = this;
	this.instance.setTransform(-115,-24,0.99,0.99);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(300).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,x:-127.8,y:-26.6,alpha:1},6,cjs.Ease.get(1)).wait(67).to({scaleX:0.99,scaleY:0.99,x:-115,y:-24,alpha:0},6,cjs.Ease.get(1)).wait(1));

	// t4
	this.instance_1 = new lib.t4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-89.2,-22.1,0.99,0.99);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(225).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,x:-99.1,y:-24.5,alpha:1},6,cjs.Ease.get(1)).wait(67).to({scaleX:0.99,scaleY:0.99,x:-89.2,y:-22.1,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(75));

	// t3
	this.instance_2 = new lib.t3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-96.3,-35.7,0.99,0.99);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(150).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,x:-107,y:-39.7,alpha:1},6,cjs.Ease.get(1)).wait(67).to({scaleX:0.99,scaleY:0.99,x:-96.3,y:-35.7,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(150));

	// t2
	this.instance_3 = new lib.t2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-88.2,-25.3,0.99,0.99);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(75).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,x:-98,y:-28.1,alpha:1},6,cjs.Ease.get(1)).wait(67).to({scaleX:0.99,scaleY:0.99,x:-88.2,y:-25.3,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(225));

	// t1
	this.instance_4 = new lib.t1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-131.2,-21,0.99,0.99);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1.1,scaleY:1.1,x:-145.8,y:-23.3,alpha:1},6,cjs.Ease.get(1)).wait(67).to({scaleX:0.99,scaleY:0.99,x:-131.2,y:-21,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(300));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.2,-21,262.6,42);


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
				text.scaleX = 0.25 + 0.2*sc;
				text.scaleY = 0.25 + 0.2*sc;
				text.x = (wdt - 250)/2;
				text.y = 110;
				
				logo.scaleX = 0.7;		
				logo.scaleY = 0.7;
				logo.x = (wdt - 250)/2;
				logo.y = 40;
				
				uznat.scaleX = 0.5;		
				uznat.scaleY = 0.5;
				uznat.x = (wdt - 250)/2;
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
				text.scaleX = 0.95;
				text.scaleY = 0.95;
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
p.nominalBounds = new cjs.Rectangle(9.1,13,794,770);
// library properties:
lib.properties = {
	width: 400,
	height: 250,
	fps: 24,
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