(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x600_atlas_", frames: [[0,0,300,280],[0,282,300,280],[0,564,300,280],[302,0,300,280],[302,282,300,280],[302,564,60,10]]}
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



(lib.simply = function() {
	this.spriteSheet = ss["300x600_atlas_"];
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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p5, new cjs.Rectangle(0,0,300,280), null);


(lib.p4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.simply();
	this.instance.parent = this;
	this.instance.setTransform(13,263);

	this.instance_1 = new lib._4();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.p4, new cjs.Rectangle(0,0,300,280), null);


(lib.p3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p3, new cjs.Rectangle(0,0,300,280), null);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2, new cjs.Rectangle(0,0,300,280), null);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1, new cjs.Rectangle(0,0,300,280), null);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgXWguyMAutAAAMAAABdlMgutAAAg");
	this.shape.setTransform(150,300);

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
	this.instance_5.setTransform(154.4,426.7,0.9,0.9,0,0,0,121,25.7);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(240).to({_off:false},0).to({regX:120.9,scaleX:1,scaleY:1,x:154.8,y:426.8,alpha:1},7,cjs.Ease.get(1)).wait(51).to({regX:121,scaleX:0.9,scaleY:0.9,x:154.4,y:426.7,alpha:0},7,cjs.Ease.get(1)).wait(1));

	// t4
	this.instance_6 = new lib.t4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(178.8,428.4,0.9,0.9,0,0,0,122,25.7);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(180).to({_off:false},0).to({regX:121.9,scaleX:1,scaleY:1,x:181.9,y:428.7,alpha:1},7,cjs.Ease.get(1)).wait(51).to({regX:122,scaleX:0.9,scaleY:0.9,x:178.8,y:428.4,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(60));

	// t3
	this.instance_7 = new lib.t3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(150.8,428.7,0.9,0.9,0,0,0,98.1,39.9);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(120).to({_off:false},0).to({regY:39.8,scaleX:1,scaleY:1,y:429,alpha:1},7,cjs.Ease.get(1)).wait(51).to({regY:39.9,scaleX:0.9,scaleY:0.9,y:428.7,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(120));

	// t2
	this.instance_8 = new lib.t2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(168.5,425.8,0.9,0.9,0,0,0,109.6,26.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(60).to({_off:false},0).to({scaleX:1,scaleY:1,x:170.5,y:425.9,alpha:1},7,cjs.Ease.get(1)).wait(51).to({scaleX:0.9,scaleY:0.9,x:168.5,y:425.8,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(180));

	// t1
	this.instance_9 = new lib.t1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(139.8,428.1,0.9,0.9,0,0,0,121.2,24.3);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:1,scaleY:1,x:138.6,y:428.4,alpha:1},7,cjs.Ease.get(1)).wait(51).to({scaleX:0.9,scaleY:0.9,x:139.8,y:428.1,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(240));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeA6IAAhzIA9AAIAAAVIgoAAIAAAbIAmAAIAAATIgmAAIAAAbIAoAAIAAAVg");
	this.shape_1.setTransform(193.4,508.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeA6IAAhzIA9AAIAAAVIgnAAIAAAbIAlAAIAAATIglAAIAAAbIAnAAIAAAVg");
	this.shape_2.setTransform(185.3,508.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAVA6IAAgwIgpAAIAAAwIgVAAIAAhzIAVAAIAAAvIApAAIAAgvIAVAAIAABzg");
	this.shape_3.setTransform(175.8,508.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgmA6IAAhzIBCAAIAAAVIgtAAIAAAXIASAAQATAAAKALQAJAKAAAOQAAAQgLAKQgLAKgQAAgAgRAlIASAAQAIAAAEgEQAFgEAAgHQAAgFgFgFQgEgFgIABIgSAAg");
	this.shape_4.setTransform(166.1,508.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgrArQgRgRAAgaQAAgXARgTQASgRAZAAQAaAAARARQASATAAAXQAAAZgSASQgRARgaAAQgZAAgSgRgAgcgbQgLALABAQQgBARALALQANAMAPAAQARAAALgMQAMgMAAgQQAAgPgMgMQgLgLgRAAQgQAAgMALg");
	this.shape_5.setTransform(154.6,508.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgkA6IAAhzIAgAAQATAAALAKQALAKAAAQQAAAQgLAJQgKAKgUAAIgKAAIAAAsgAgOgGIAMAAQAIAAAFgDQAEgEAAgIQAAgHgEgFQgFgDgIAAIgMAAg");
	this.shape_6.setTransform(144,508.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAqBFIAAgWIhTAAIAAAWIgVAAIAAgrIALAAIArheIASAAIAqBeIALAAIAAArgAgbAaIA4AAIgdhAg");
	this.shape_7.setTransform(132.8,509.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgrArQgRgSAAgZQAAgXARgTQATgRAYAAQAaAAARARQASASAAAYQAAAZgSASQgRARgaAAQgZAAgSgRgAgbgbQgLAMAAAPQAAAQALAMQALAMAQAAQAQAAAMgMQALgLAAgRQAAgQgLgLQgLgLgRAAQgQAAgLALg");
	this.shape_8.setTransform(119.8,508.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAVA6IAAheIgpAAIAABeIgWAAIAAhzIBVAAIAABzg");
	this.shape_9.setTransform(107.9,508.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00A7E0").s().p("ApvCiIAAlDITfAAIAAFDg");
	this.shape_10.setTransform(150,507.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00A7E0").s().p("Au+CJQhGhAAphcQAkhUBzgwQB/g1DPAAQAuAAAqAFIA1AIIAWAEIgeA1QhAgSg3AAQhpAAhVAeQh0AqgSBSQgLAxAkAtQAuA4BlgFQAggBA8gVQBKgaArgiIBphbIAGgEQAIgGAHgCQANgHARABIBwAAIAjCaIBHiZIB8AAIBIB2IA1h2IBxAAIhkDYIh0AAIhLh8Ig4B8IhHAAIAAABIiGAAIgFgmIh7AAIgoAkIhQAAQhdAhh4AAQivAAhLhEgAlIBcIBHgBIgGg+gAKDDBIBIhIIhJikIBwAAIAfBYIBbhZIB/AAIjbDaQgLAMgIACQgFACgLABIgKACgAGiCtIi3AAIBkjYIC3AAQBYAAAfAqQAbAhgUArQgSAogvAaQg9AghhAAIgDAAgAF+B3IAhAAQAlAAAdgJQAvgPAJgiQAHgegdgMQgTgJghAAIggAAg");
	this.shape_11.setTransform(156.3,55.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#737373").s().p("AgHAeQgDAAgDgDIgEgFIgDgHIAEgBIACgBIACACIACADIACADIAEADIAEABQAEAAACgCIAEgCIACgDIABgFIgBgEIgCgEQgCgCgDAAIgHgBIAAgFIAGgBQACAAACgCIADgDIABgFIgBgEIgCgEIgEgBIgEgBIgDABIgEABIgCADIgCAEIgBACIgDAAIgEgBIACgHQACgEADgBIAGgEIAGgBIAIABIAGAEIADAEQACADAAAEIgBAFIgCAFIgEACIgEACQAHABACAEQADADAAAGIgCAIIgEAGIgHADQgDACgFAAQgDAAgEgCg");
	this.shape_12.setTransform(239.4,570.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#737373").s().p("AgHAfIgFgCIgHgEIACgEIADgBIACAAIACACIAEACIAFAAIAFgBQACAAACgDIACgEIACgGIgBgFIgDgEIgEgCIgFAAIgKABIgFgBIAFgdIAdAAIAAADIgBADIgEABIgSAAIgDAPIAIgBQAFABADABIAHAEIADAFIACAHQAAAGgCADQgBAEgEAEIgHAEIgIACg");
	this.shape_13.setTransform(234.4,570.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#737373").s().p("AAHAfIAAgQIgaAAIgCgBIgBgBIgBgEIAegnIAHAAIAAAnIAKAAIAAAEIgBABIgBABIgIAAIAAAQgAgOAJIAVAAIAAgbIABgDg");
	this.shape_14.setTransform(229.3,570.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#737373").s().p("AgIAeIgHgGQgDgDgCgHQgCgGAAgIQAAgHACgGQACgHADgDQACgDAFgDQAEgCAEAAQAFAAAEACQAEACADAEQADAEACAGQACAIAAAFQAAAGgCAIQgCAGgDAEQgEAEgDACQgFACgEAAIgIgCgAgFgXQgCABgCADIgDAIIgBALIABAMIADAIQACADACAAIAFACIAFgCQACAAADgDQACgDABgFQABgFAAgHQAAgGgBgFQgBgFgCgDQgDgDgCgBIgFgBIgFABg");
	this.shape_15.setTransform(224.4,570.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#737373").s().p("AgPAfIAZgyIADgEIgfAAIgCAAIAAgBIAAgGIApAAIAAAEIgBAEIgYAyIgCACIgDABg");
	this.shape_16.setTransform(219.4,570.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#737373").s().p("AgIAeQgEgCgDgEQgDgEgCgGQgCgGAAgIQAAgIACgFQACgGADgEQACgEAFgCQAEgCAEAAQAFAAAEACQAFACACAEQADADACAHQACAGAAAHQAAAIgCAGQgCAHgDADQgDAEgEACQgFACgEAAQgDAAgFgCgAgEgXQgDABgCADIgDAIQgBAFAAAGQAAAHABAFIADAIQACADADAAQACACACAAQADAAACgCQADAAACgDQACgDABgFIABgMIgBgLQgBgFgCgDQgCgDgDgBQgCgBgDAAQgCAAgCABg");
	this.shape_17.setTransform(214.3,570.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#737373").s().p("AgIAeQgFgCgBgCQgDgEgCgEIgBgIIABgJIAGgJIAPgUIACgCIACAAIAHAAIgSAYIgBADIAEgDIAFgBIAGABIAGAEIAFAFIABAIQAAAFgBADQgCAEgDADIgHADQgDADgFAAQgEAAgEgCgAgFAAIgEACIgDAFIgBAEIABAGIADAEIAEADIAFABIAFgBIAEgDIADgEIABgGIgBgFIgDgEIgEgCIgFgBg");
	this.shape_18.setTransform(209.3,570.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#737373").s().p("AgMAgIAUgeIgEAEIgGAAIgHgBIgFgEIgEgEIgCgHIACgIIAFgHQADgDADgBQAEgCADAAQAFAAADACIAHAEIAEAHQABADAAAFIAAAFIgCAFIgCADIgRAaIgBACIgDABgAgDgXIgFADIgCAEIgBAFQAAAFADAEQADACAFAAIAFAAIAEgDIADgEIAAgEIAAgGIgDgDIgEgDIgFgBg");
	this.shape_19.setTransform(204.2,570.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#737373").s().p("AgPAfIAZgyIADgEIgfAAIgCAAIAAgBIAAgGIApAAIAAAEIgBAEIgYAyIgCACIgDABg");
	this.shape_20.setTransform(199.2,570.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#737373").s().p("AgPAfIAZgyIADgEIgfAAIgCAAIAAgBIAAgGIApAAIAAAEIgBAEIgYAyIgCACIgDABg");
	this.shape_21.setTransform(194.2,570.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#737373").s().p("AAHAfIAAgQIgaAAIgCgBIgCgFIAdgnIAIAAIAAAnIAKAAIAAAEIgBABIgBABIgIAAIAAAQgAgOAJIAVAAIAAgYIABgDIAAgDg");
	this.shape_22.setTransform(189,570.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#737373").s().p("AgIAeQgEgCgDgEQgEgEgBgGQgCgGAAgIQAAgHACgGQABgGAEgEQACgEAFgCQAEgCAEAAQAFAAAEACQAFADACADQACADADAHQABAGAAAHQAAAIgBAGQgDAHgCADIgHAGIgJACQgDAAgFgCgAgFgXQgCABgCADIgDAIIgBALIABAMIADAIQADADABAAIAFACQADAAACgCQACAAADgDIADgIIABgMIgBgLIgDgIQgDgDgCgBQgCgBgDAAIgFABg");
	this.shape_23.setTransform(184.1,570.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#737373").s().p("AgOAfIAAgGIAOAAIAAgsIgLAJIgCABIgBgBIgBAAIgDgEIASgQIAHAAIAAA3IAMAAIAAAGg");
	this.shape_24.setTransform(179,570.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#737373").s().p("AAQAfIAAgcIgfAAIAAAcIgKAAIAAg9IAKAAIAAAbIAfAAIAAgbIAJAAIAAA9g");
	this.shape_25.setTransform(171,570.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#737373").s().p("AgUAfIAAg9IATAAIAJABIAHAEIAFAGIABAIQAAAFgBADQgCADgDADQgCACgFABQgFACgEAAIgKAAIAAAXgAgLABIAKAAIAFgBQACAAACgCIADgDIABgGIgBgFIgCgEIgFgDIgPAAg");
	this.shape_26.setTransform(165.3,570.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#737373").s().p("AgSAfIAAg9IAlAAIAAAHIgcAAIAAA2g");
	this.shape_27.setTransform(160.4,570.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#737373").s().p("AgMAeQgFgCgEgFQgEgEgDgGQgCgFAAgIQAAgGACgGQACgGAFgEQADgEAGgDQAHgCAFAAQAGAAAHACQAGADADAEQAFAEACAGQACAGAAAGQAAAIgCAFQgDAGgEAEQgEAFgFACQgHACgGAAQgFAAgHgCgAgIgWQgEACgDAEQgDADgBAEQgCAFAAAEQAAAFACAFQABAEADAEQAEADADABQAEACAEAAQAFAAAEgCQADgBAEgDQADgEABgEQACgFAAgFQAAgEgCgFQgBgEgDgDQgDgEgEgCQgEgBgFAAQgEAAgEABg");
	this.shape_28.setTransform(154.2,570.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#737373").s().p("AgHAfIgFgCIgHgEIACgEIADgBIACAAIACACIAEACIAFAAIAFgBIAEgDIADgEIABgGIgBgFIgDgEIgEgCIgFAAIgKABIgFgBIAFgdIAdAAIAAADIgBADIgEABIgSAAIgDAPIAIgBQAFABAEABIAGAEIAEAFIABAHQAAAEgCAFQgBAEgDAEIgIAEQgDACgFAAg");
	this.shape_29.setTransform(146,570.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#737373").s().p("AgOAfIAAgGIANAAIAAgsIgKAJIgBAAIgCABIgBgBIAAAAIgDgEIASgQIAHAAIAAA3IAMAAIAAAGg");
	this.shape_30.setTransform(141,570.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#737373").s().p("AgIAeQgDgCgEgEQgDgEgCgGQgCgIAAgGQAAgFACgIQACgGADgEQADgEAEgCQAEgCAEAAQAFAAAEACQAFADACADQADADACAHQACAGAAAHQAAAIgCAGQgCAHgDADIgHAGIgJACQgDAAgFgCgAgEgXQgCABgDADIgDAIIgBALIABAMIADAIQADADACAAQACACACAAQADAAACgCQADAAACgDQACgDABgFIABgMIgBgLQgBgFgCgDQgCgDgDgBQgCgBgDAAQgCAAgCABg");
	this.shape_31.setTransform(135.9,570.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#737373").s().p("AgUAgIAAgFIAcgeIACgFIABgEIgBgFIgCgDQAAgBgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAIgFgBIgDABIgDACIgDADIgBADIgCADIgCAAIgFgBIADgHQABgEADgCIAGgDIAHgCIAHACQAEABACACIAEAGIACAHIgBAGIgDAGIgEAEIgUAWIADgBIAXAAIACABIABACIAAAFg");
	this.shape_32.setTransform(130.9,570.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#737373").s().p("AgOAfIAAgGIANAAIAAgsIgKAJIgCAAIgBABIgBgBIAAAAIgDgEIASgQIAGAAIAAA3IANAAIAAAGg");
	this.shape_33.setTransform(125.9,570.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#737373").s().p("AgHAfIgFgCIgHgEIACgEIADgBIACAAIACACIAEACIAFAAIAFgBIAEgDIADgEIABgGIgBgFIgDgEIgEgCIgFAAIgKABIgFgBIAFgdIAdAAIAAADIgBADIgEABIgSAAIgDAPIAIgBQAFABAEABIAGAEIAEAFIABAHQAAAEgCAFQgBAEgDAEIgIAEQgDACgFAAg");
	this.shape_34.setTransform(120.8,570.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#737373").s().p("AAHAfIAAgQIgbAAIgBgBIgBgFIAcgnIAIAAIAAAnIAJAAIAAAEIAAABIgBABIgIAAIAAAQgAgNAJIAUAAIAAgYIAAgDIAAgDg");
	this.shape_35.setTransform(115.7,570.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#737373").s().p("AgIAeQgDgCgEgEQgDgEgCgGQgCgIAAgGQAAgFACgIQACgGADgEQADgEAEgCQAEgCAEAAQAFAAAEACQAFADACADQADADACAHQACAGAAAHQAAAIgCAGQgCAHgDADIgHAGIgJACQgDAAgFgCgAgEgXQgCABgDADIgDAIQgBAFAAAGQAAAHABAFIADAIQADADACAAQACACACAAQADAAACgCQADAAACgDQACgDABgFIABgMIgBgLQgBgFgCgDQgCgDgDgBQgCgBgDAAQgCAAgCABg");
	this.shape_36.setTransform(110.7,570.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#737373").s().p("AgPAfIAZgyIADgEIgfAAIgCAAIAAgBIAAgGIApAAIAAAEIgBAEIgYAyIgCACIgDABg");
	this.shape_37.setTransform(105.8,570.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#737373").s().p("AgPAfIAZgyIADgEIgfAAIgCAAIAAgBIAAgGIApAAIAAAEIgBAEIgYAyIgCACIgDABg");
	this.shape_38.setTransform(100.7,570.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#737373").s().p("AARAfIAAgcIghAAIAAAcIgIAAIAAg9IAIAAIAAAbIAhAAIAAgbIAIAAIAAA9g");
	this.shape_39.setTransform(92.6,570.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#737373").s().p("AARAfIAAgcIghAAIAAAcIgJAAIAAg9IAJAAIAAAbIAhAAIAAgbIAJAAIAAA9g");
	this.shape_40.setTransform(86,570.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#737373").s().p("AAQAfIAAguIABgFIgDAHIgcAqIgBABIgDABIgHAAIAAg9IAJAAIAAAzIADgIIAdgrIADAAIAHAAIAAA9g");
	this.shape_41.setTransform(79.3,570.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#737373").s().p("AgIAeIgGgDQgDgCgCgEIgBgHQAAgGADgEQACgDAHgCQgEgBgEgEQgCgEAAgEQAAgEABgDIAEgFQADgDADgBIAHgBQAEAAAEABQADABADADIAEAFIABAHQAAAFgDADQgCAEgFABQAGACADADQADAEAAAGIgBAHQgCAEgDACIgGADIgJACQgEAAgEgCgAgEADIgEACIgDAEIgBAFIABAFIADADIAEACIAEABIAFgBIAEgCIADgDIABgFIgBgFIgDgEIgEgCIgFgBgAgEgYIgDACIgCADIgBAFIABADIACAEIADADIAEAAIAFAAIADgDIACgEIABgDIgBgFIgCgDIgDgCIgFAAg");
	this.shape_42.setTransform(71.3,570.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#737373").s().p("AgBAFIgCgBIgBgCIgBgCIABgBIABgCIACgBIABgBIACABIACABIABACIABABIgBACIgDADIgCABg");
	this.shape_43.setTransform(65.5,573.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#737373").s().p("AASAdIAAgOIgjAAIAAAMIgBACIgCAAIgFAAIAAgUIACAAIADgBIADgCIACgEIAEgRIABgNIAcAAIAAAlIAIAAIAAASIgBACIgCAAgAgGgBIgCAFQgBADgCACIAVAAIAAgfIgNAAg");
	this.shape_44.setTransform(61.8,572.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#737373").s().p("AgEAKIAAgBIABgBIACgEIABgEIAAAAIgBAAIgCgBIgBgCIAAgCIABgEQAAAAABAAQAAgBAAAAQABAAABAAQAAAAAAAAIACAAIACACIABACIAAACIAAAEIgCAEIgCAEIgDADg");
	this.shape_45.setTransform(280.3,564);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#737373").s().p("AALAfIAAgfIAAgBIgBABIgBABIgDAFIgQAXIgBABIgCABIgFAAIAAgrIAIAAIAAAeIAAACIABgDIABgBIADgDIAGgKIAKgNIABgBIACgBIAFAAIAAArgAgEgTIgEgCIgDgDIAAgEIAAgBIABgBIAFAAIAAADIACADIABABIACAAIADAAIACgBIABgDIABgDIAFAAIABABIAAABIgBAEIgCADIgEACIgGABg");
	this.shape_46.setTransform(276.8,560.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#737373").s().p("AgKADIAAgFIAVAAIAAAFg");
	this.shape_47.setTransform(272.7,561.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#737373").s().p("AgUAfIAAgEIAZgbIADgDIACgFIABgFIgBgEIgCgEIgDgCIgFgBIgDABIgDACIgDADIgBADIgCACQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAAAgBIgFAAIADgHQABgEADgCQADgDADAAIAHgCIAHACIAGADIAEAGQACADAAADIgBAHIgDAGIgYAaIAHgBIATAAIACABIABACIAAAEg");
	this.shape_48.setTransform(268.5,560.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#737373").s().p("AALAfIAAgfIAAgBIgBACIgUAcIgBABIgCABIgFAAIAAgrIAIAAIAAAeIAAACIALgRIAKgNIABgBIACgBIAFAAIAAArgAgEgTIgEgCIgCgDIgBgEIAAgBIABgBIAFAAIABADIABADIACABIACAAIADAAIABgBIACgDIAAgDIAFAAIABABIAAABIAAAEIgDADIgEACIgFABg");
	this.shape_49.setTransform(261.3,560.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#737373").s().p("AALAWIAAgeIAAgCIgBACIgBABIgCAFIgRAWIgBABIgCABIgFAAIAAgrIAIAAIAAAeIAAACIABgDIABgBIAGgHIADgFIAKgOIABgBIACgBIAFAAIAAArg");
	this.shape_50.setTransform(256.3,561.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#737373").s().p("AAOAWIgEgBIgCgCIgIgNIgCgDIgEgBIgEAAIAAAUIgIAAIAAgrIAIAAIAAATIAEAAIADgBIACgCIAJgOIABgBIACgBIAHAAIgLARIgCACIgEACIAEABIADADIALASg");
	this.shape_51.setTransform(251.8,561.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#737373").s().p("AgGAVQgDgBgCgDIgFgHQgBgFAAgFIABgIIAEgHQADgDADgCQAFgCADAAQAGAAADACQAEABACADIgCADIAAABIgBAAIgCAAIgCgCIgDgBIgEAAIgFABIgEADIgCAFIgBAGIABAHIACAFIAEADIAFABIAFAAIACgCIACgBIACgBIACABIACADIgDADIgFACIgJACIgHgCg");
	this.shape_52.setTransform(247.3,561.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#737373").s().p("AAKAWIAAgUIgTAAIAAAUIgJAAIAAgrIAJAAIAAARIATAAIAAgRIAJAAIAAArg");
	this.shape_53.setTransform(242.6,561.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#737373").s().p("AALAWIAAgeIABgCIgBACIgBABIgEAFIgQAWIgBABIgCABIgFAAIAAgrIAIAAIAAAeIAAACIABgDIACgBIAFgHIADgFIALgOIABgBIABgBIAFAAIAAArg");
	this.shape_54.setTransform(237.7,561.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#737373").s().p("AAaAeIAAgPIg7AAIAAgsIAIAAIAAAlIASAAIAAglIAHAAIAAAlIARAAIAAglIAJAAIAAAlIAIAAIAAATIgBACIgCABg");
	this.shape_55.setTransform(231.6,562.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#737373").s().p("AgIAVQgDgBgEgDIgEgIQgBgDAAgGQAAgEABgEIAEgIIAHgEQAEgCAEAAQAFAAAEACQADABADADQADADACAFQABAEAAAEQAAAGgBADQgCAFgDADQgDADgDABQgEACgFAAQgEAAgEgCgAgJgLQgDAEAAAHQAAAIADAEQADAEAGAAQAGAAADgEQADgEAAgIQAAgHgDgEQgDgEgGAAQgGAAgDAEg");
	this.shape_56.setTransform(225.2,561.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#737373").s().p("AgUAfIAAg9IATAAQAFAAAEABQAFACACACQADADACADIABAIQAAAFgBADQgCADgDACQgDAEgEABQgEABgFAAIgKAAIAAAXgAgLABIAKAAIAFgBQADAAABgCIAEgEIABgFIgBgFQgBgBAAAAQAAgBAAAAQgBgBAAAAQgBAAgBgBQgBgCgDAAIgFgBIgKAAg");
	this.shape_57.setTransform(220.6,560.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#737373").s().p("AASAeIAAgPIgjAAIAAAMIgBACQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAIgFAAIAAgVIACAAIADgBIADgCIACgEIACgGIAEgZIAbAAIAAAlIAIAAIAAATIgBACIgCABgAgEgKIgEAOIgCAFIATAAIAAgfIgMAAg");
	this.shape_58.setTransform(212.8,562.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#737373").s().p("AgEAWIgEgBIgEgCQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAgBAAAAIACgDIABgBIACABIAFADIAFAAIADAAIADgCIACgCIABgDQAAgEgDgBQgCgCgFAAIgFAAIAAgFIAFAAQAEAAACgBQADgCAAgDIgBgCIgBgCIgDgCIgDAAIgFAAIgCABIgEACIgBAAIgBgBIgCgDQACgDAFgBQADgCAFAAIAGABIAFADIADAEIABAEIAAADIgBACIgDADIgDACQADAAADADQACACAAAEIgBAGQgBADgDABIgFADIgGABg");
	this.shape_59.setTransform(208.1,561.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#737373").s().p("AgGAVQgEgCgCgCQgDgDgCgFQgCgEAAgFQAAgEACgEQAAgEAEgDQACgDAEgCQAEgCAEAAIAHACIAGADIAEAHQACAEAAAEIgBACIgCAAIgcAAIABAHIADAFIAEADIAFABIAFAAIAEgCIACgBIACgBIABABIADADIgEADIgEACIgFABIgEABQgEAAgEgCgAgHgNQgDAEAAAFIAWAAIAAgFIgCgDIgEgDIgFgBQgEAAgEADg");
	this.shape_60.setTransform(203.9,561.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#737373").s().p("AgIAVQgEgBgDgDIgEgIQgBgDAAgGQAAgEABgEIAEgIQADgDAEgBQAEgCAEAAQAFAAAEACQAEACACACQADADACAFQABAEAAAEQAAAGgBADQgCAFgDADQgCACgEACQgEACgFAAQgEAAgEgCgAgJgLQgDAEAAAHQAAAIADAEQADAEAGAAQAGAAADgEQAEgEAAgIQAAgHgEgEQgDgEgGAAQgGAAgDAEg");
	this.shape_61.setTransform(199.1,561.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#737373").s().p("AgTAeIAAg6IAFAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAABABIAAAFIAHgGQADgCAEAAQAEAAADACIAFAEQADADAAAEQACAEAAAGQAAAFgCADQgBAFgCACIgGAFQgEACgEAAQgDAAgDgCIgFgDIAAATgAgFgUIgFAEIAAAUIAEAEIAGABQAFAAADgEQADgEAAgHIgBgHIgCgFQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAAAIgFgBQgDAAgCACg");
	this.shape_62.setTransform(194.3,562.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#737373").s().p("AAPAfIAAg2IgdAAIAAA2IgJAAIAAg9IAvAAIAAA9g");
	this.shape_63.setTransform(188.6,560.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#737373").s().p("AgEAKIAAAAIAAgBIAAgBIAEgGIAAgCIgBAAIgCgBIgBgCIgBgCQAAAAABgBQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAIACAAIACACIABACIABACIgBAEIgCAEIgCAEIgDADg");
	this.shape_64.setTransform(182.3,564);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#737373").s().p("AgJAWIgEgCIgDgEIgBgFIACgFQABgDAEgBQACgCAGAAQAEgCAHAAIAAgDQABgEgDgEQgCgCgEAAIgEABIgGADIgBAAIgCAAIgBgBIgCgDQAEgDAEgCQAFgCAEAAIAGABIAGAEQABACABADIABAHIAAAbIgDAAIgCAAIgBgCIgBgEIgEADIgDACIgDABIgEABgAAAADIgFACIgDACQAAABAAAAQAAAAgBABQAAAAAAABQAAAAAAABIABADIABACIACABIADAAIADAAIAGgDIACgDIAAgJg");
	this.shape_65.setTransform(179,561.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#737373").s().p("AgQAWIAAgrIAQAAIAHABIAEACQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAIABAFIAAADIgCADIgCACIgFACQAEAAAEACQADAEAAADIgBAGQgBACgDACIgFACIgHABgAgIAQIAIAAQAFAAACgCQACgBAAgEIAAgDIgCgCIgCgBIgFgBIgIAAgAgIgCIAIAAIADgBQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAAAIACgCIABgDIgBgDIgBgCIgDgBIgDAAIgIAAg");
	this.shape_66.setTransform(174.9,561.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#737373").s().p("AANAWIgDgBIgCgCIgIgNIgCgDIgDgBIgFAAIAAAUIgIAAIAAgrIAIAAIAAATIAEAAIADgBIACgCIAIgOIACgBIACgBIAHAAIgLARIgDACQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAIADABIADADIALASg");
	this.shape_67.setTransform(170.6,561.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#737373").s().p("AgFAVQgEgBgCgDIgFgHQgBgFAAgFIABgIQACgFADgCQABgDAFgCQADgCAFAAQAFAAADACQAEABADADIgCADIgDABIgBAAIgCgCIgCgBIgFAAIgEABIgEADQgBABgCAEIAAAGIAAAHIADAFIAEADIAEABIAFAAIACgCIACgBIACgBIACABIACADQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAIgEACIgDABIgGABg");
	this.shape_68.setTransform(166.1,561.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#737373").s().p("AgIAVQgDgBgDgDQgDgDgCgFQgBgDAAgGQAAgEABgEQACgFADgDQADgDADgBQAEgCAEAAQAFAAAEACQAEABADADIAEAIQABAEAAAEQAAAGgBADIgEAIQgDADgEABQgEACgFAAQgEAAgEgCgAgIgLQgEAEAAAHQAAAIAEAEQADAEAFAAQAHAAADgEQADgEAAgIQAAgHgDgEQgDgEgHAAQgFAAgDAEg");
	this.shape_69.setTransform(161.4,561.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#737373").s().p("AAZAfIAAgwIgVAlIgBACIgCAAIgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAgBgBIgVglIAAACIAAACIAAAsIgIAAIAAg9IAJAAIABABIAVAlIABAFIABgDIAWgnIABgBIAIAAIAAA9g");
	this.shape_70.setTransform(155.1,560.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#737373").s().p("AgBAFIgCgBIgBgCIgBgCIABgBIADgDIABgBIACABIACABIABACIABABIgBACIgBACIgCABIgCABg");
	this.shape_71.setTransform(147.8,563.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#737373").s().p("AgNAWIAAgrIAbAAIAAAGIgTAAIAAAlg");
	this.shape_72.setTransform(145.7,561.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#737373").s().p("AgDAKIgBAAIAAgBIABgBIADgGIAAgCIgCAAIgBgBIgBgCIAAgCQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAIADAAIABACIABACIAAACIAAAEIgCAEIgDAEIgCADg");
	this.shape_73.setTransform(140.5,564);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#737373").s().p("AgNAfIASgYIACgCIACgDQgCACgEABIgFABQgDAAgDgBQgDgBgDgDIgEgEQgBgEAAgEQAAgFABgCQACgEADgDIAGgEQAEgCAEAAQAEAAAEACQAEABACADQADADABAEIABAIIgBAKIgUAdIgBACIgDAAgAgEgXIgEADIgCADIgBAGQAAAFADAEQADACAFAAIAFAAIAEgDIADgEIABgEIgBgGIgDgDIgEgDIgFgBg");
	this.shape_74.setTransform(136.9,560.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#737373").s().p("AgOAfIAAgGIANAAIAAgpIABgEIgLAKIgBAAIgBAAIgCgBIgDgDIASgQIAHAAIAAA3IAMAAIAAAGg");
	this.shape_75.setTransform(131.9,560.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#737373").s().p("AAHAfIAAgQIgaAAIgCgBIgBgBIgBgEIAegnIAHAAIAAAmIAKAAIAAAFIgBABIgBABIgIAAIAAAQgAgOAIIAVAAIAAgaIABgDg");
	this.shape_76.setTransform(126.8,560.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#737373").s().p("AgHAfIgFgBIgDgCIgEgDIADgDQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIAEACIAEACIAFAAIAFgBIAEgCQACgCABgDIABgGIgBgFIgCgEIgFgCIgEgBQgGAAgFACIgEgBIAEgeIAdAAIAAAEIgBADIgEABIgSAAIgCAQIAHgBQAGAAADACQAEABACACQACACACAEIABAHQAAAFgBAEQgCADgEADQgCAEgFABQgDABgFAAg");
	this.shape_77.setTransform(121.8,560.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#737373").s().p("AgOAfIAAgGIANAAIAAgtIgKAKIgCAAIgBAAIgBAAIAAgBIgDgDIASgQIAGAAIAAA3IANAAIAAAGg");
	this.shape_78.setTransform(116.8,560.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#737373").s().p("AgOAfIAAgGIANAAIAAgtIgKAKIgBAAIgCAAIgBAAIAAgBIgDgDIASgQIAHAAIAAA3IAMAAIAAAGg");
	this.shape_79.setTransform(111.8,560.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#737373").s().p("AABAQIgBgBIAAgCIAGgLIACgCIgBAAIgBgBIgGgLIAAgCIABgBIACgBIALAQIAAABIgLAQgAgMAQIgBgBIAAgCIAHgLIAAgBIABgBIgBAAIAAgBIgHgLIAAgCIABgBIADgBIAKAQIAAABIgKAQg");
	this.shape_80.setTransform(105.2,561.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#737373").s().p("AgBAFIgCgBIgBgCIgBgCIABgBIABgCIACgBIABgBIACABIADADIABABIgBACIgBACIgCABIgCABg");
	this.shape_81.setTransform(102.2,563.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#737373").s().p("AgSAfIAAg9IAlAAIAAAHIgcAAIAAA2g");
	this.shape_82.setTransform(100,560.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#737373").s().p("AgCAFIgBgBIgBgCIAAgDIACgDIACgBIACABIACABIABACIAAABIAAACIgBACIgCABIgCABg");
	this.shape_83.setTransform(96.4,563.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#737373").s().p("AAQAfIAAgcIggAAIAAAcIgJAAIAAg9IAJAAIAAAbIAgAAIAAgbIAKAAIAAA9g");
	this.shape_84.setTransform(92,560.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#737373").s().p("AgCAFIgBgBIgBgCIgBgCIABgBIABgCIABgBIACgBIACABIACABIABACIAAABIAAACIgBACIgCABIgCABg");
	this.shape_85.setTransform(87.7,563.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#737373").s().p("AgIAdQgFgCgEgEQgEgEgCgGQgCgHAAgGQAAgGACgGIAGgKQAGgFAEgCQAFgCAHAAQAHAAAEACQAGADADADIgDAEIAAABIgCAAIgBgBIgIgDIgHgBQgEAAgDABIgHAFQgDADgBAFQgCAEAAAFQAAAGACAEQABAFADADQADADAEABQADACAEAAIAFAAIAEgBIAEgCIADgCIABgBIAAAAIACAAIADAEQgEAFgFACQgGADgHAAQgFAAgHgDg");
	this.shape_86.setTransform(83.8,560.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#737373").s().p("AAQAfIAAguIABgFIgEAHIgcArIgDABIgGAAIAAg9IAJAAIAAAuIgBAEIABgDIAdgsIACgCIACgBIAHAAIAAA9g");
	this.shape_87.setTransform(75.3,560.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#737373").s().p("AAZAnIAAgPIgwAAIAAAMIgCACIgCABIgFAAIAAgWIAHAAIADgDIACgEIAEgQIADggIAkAAIAAA3IAKAAIAAATIgBACIgBABgAgJAAIgDAKIgDAHIAdAAIAAgwIgTAAg");
	this.shape_88.setTransform(68.5,561.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#737373").s().p("AAQAfIAAgcIgfAAIAAAcIgJAAIAAg9IAJAAIAAAbIAfAAIAAgbIAJAAIAAA9g");
	this.shape_89.setTransform(61.8,560.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#737373").s().p("AAWAfIgCAAIgBgCIgFgPIgbAAIgFAPIgCABIgCABIgGAAIAYg9IAIAAIAZA9gAgBgQIgJAYIAVAAIgKgaIgBgEg");
	this.shape_90.setTransform(55.5,560.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#737373").s().p("AARAfIgCgBIgCgCIgPgWIgCgDIgEAAIgHAAIAAAcIgJAAIAAg9IAJAAIAAAbIAIAAIACgBIABgBIARgZIADAAIAHAAIgSAZQgDAEgCAAIAEABIAVAfg");
	this.shape_91.setTransform(50,560.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#737373").s().p("AAAABIAAgBIAKgQIADABIABABQAAAAAAABQAAAAAAAAQAAAAAAABQgBAAAAAAIgGALIgCABIACACIAGALIABACIgBABIgDABgAgNABIAAgBIALgQIACABIABABIgBACIgFALIgCABIACACIAFALIABACIgBABIgCABg");
	this.shape_92.setTransform(44.8,561.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#737373").s().p("AgMAdQgGgCgDgEQgEgEgDgGQgCgGAAgHQAAgHACgFQADgGAEgEQACgDAHgEQAGgCAGAAQAHAAAGACQAHAEACADQAFAFACAFQACAFAAAHQAAAHgCAGQgCAFgFAFQgDAEgGACQgHADgGAAQgFAAgHgDgAgIgWIgHAFQgDADgBAFQgCAEAAAFQAAAGACAEQABAFADADQACACAFACIAIACQAFAAAEgCQAEgBADgDQADgDABgFQACgEAAgGQAAgFgCgEQgBgFgDgDIgHgFQgEgBgFAAIgIABg");
	this.shape_93.setTransform(37.3,560.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#737373").s().p("AgMAdQgFgCgFgEQgDgEgDgGQgCgHAAgGQAAgGACgGQADgGADgEQAEgEAGgDQAFgCAHAAQAIAAAFACQAFADAEAEQAEAEADAGQACAGAAAGQAAAGgCAHQgDAGgEAEQgEAEgFACQgHADgGAAQgFAAgHgDgAgIgWIgHAFIgEAIQgCAGAAADQAAAEACAGIAEAIQADADAEABQAEACAEAAQAGAAADgCQAEgBADgDIAEgIQABgEAAgGQAAgFgBgEIgEgIIgHgFQgDgBgGAAQgEAAgEABg");
	this.shape_94.setTransform(30.3,560.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#737373").s().p("AgLAdQgHgCgDgEQgFgFgCgFQgCgGAAgHQAAgHACgFQACgFAFgFQADgDAHgEQAEgCAHAAQAHAAAGACQAGADADAEQAEAEADAGQACAFAAAHQAAAHgCAGQgDAGgEAEQgDAEgGACQgHADgGAAQgFAAgGgDgAgIgWIgHAFQgDADgBAFQgCAEAAAFQAAAGACAEQABAFADADQAEADADABQAEACAEAAIAJgCQAFgCACgCQADgDABgFQACgEAAgGQAAgFgCgEQgBgFgDgDIgHgFIgJgBQgEAAgEABg");
	this.shape_95.setTransform(23.3,560.9);

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