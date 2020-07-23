(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"100pcx250_atlas_", frames: [[0,0,300,280],[302,0,300,280],[604,0,300,280],[0,282,300,280],[302,282,300,280],[604,282,189,38],[604,322,295,9]]}
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



(lib.legal = function() {
	this.spriteSheet = ss["100pcx250_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.legal2 = function() {
	this.spriteSheet = ss["100pcx250_atlas_"];
	this.gotoAndStop(6);
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
	this.shape.graphics.f("#00A7E0").s().p("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");
	this.shape.setTransform(116.2,24.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t5, new cjs.Rectangle(0,0,232.4,48.5), null);


(lib.t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("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");
	this.shape.setTransform(90.1,22.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4, new cjs.Rectangle(0,0,180.2,44.7), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("AqBFQQgZgZABgkQgBgjAZgaQAbgZAjAAQAlAAAZAZQAaAaAAAjQAAAkgaAZQgZAZglAAQgjAAgbgZgApqDrQgRAQAAAXQAAAYARARQAPAQAYAAQAZAAAQgQQAQgRAAgYQAAgXgQgQQgQgQgZAAQgYAAgPAQgAKXFlIAAiIIgeAAIAAgdIBcAAIAAAdIgeAAIAACIgAIKFlIAUgqIhAh7IAlAAIAsBYIAmhYIAhAAIhLClgAGuFlIAAhFIg7AAIAABFIgfAAIAAilIAfAAIAABCIA7AAIAAhCIAfAAIAAClgAEXFlIAAh0IhKB0IgeAAIAAilIAeAAIAAB0IBKh0IAfAAIAAClgAByFlIAAh7IgsB7IgZAAIgsh7IAAB7IgeAAIAAilIApAAIAtB+IAuh+IAqAAIAAClgAiWFlIAAgYIhHAAIAAgZIBMh0IAZAAIAABwIARAAIAAAdIgRAAIAAAYgAi9EwIAnAAIAAg9gAkVFlIAAh7IgiArIgYgRIA1hEIAiAAIAAClgAnMFlIAAiIIgeAAIAAgdIBbAAIAAAdIgeAAIAACIgACgA8QgYgYAAgkQAAgkAYgYQAagZAjAAQAaAAAUANQAUANALAYIgiAAQgJgKgKgFQgMgGgLAAQgYAAgQARQgQARAAAWQAAAWAQARQARARAXAAQALAAALgFQALgFAHgJIAjAAQgLAXgUANQgSANgbgBQgkAAgZgZgAjyA9QgZgZAAgkQAAgiAZgaQAZgZAkAAQAlAAAZAZQAZAaAAAiQAAAkgZAZQgZAZglgBQgkABgZgZgAjcgnQgRAQAAAXQAAAXARAQQAQARAXAAQAZAAAQgRQAQgQAAgXQAAgXgQgQQgQgRgZAAQgXAAgQARgAp7A8QgYgYgBgkQABgkAYgYQAZgZAlAAQAZAAAVANQATANALAYIgjAAQgIgKgLgFQgKgGgMAAQgZAAgQARQgPARAAAWQAAAWAQARQARARAXAAQAMAAAJgFQAMgFAGgJIAkAAQgLAXgTANQgUANgagBQgkAAgZgZgAOuBSIAAhzIhJBzIgeAAIAAikIAeAAIAAByIBJhyIAfAAIAACkgAMOBSIgyhIIAABIIgfAAIAAikIAfAAIAABHIAyhHIAlAAIg+BRIA+BTgAJABSIAAikIAuAAQAcAAAQAOQAPANAAAYQAAAXgOANQgQAPgdAAIgQAAIAAA+gAJegKIATAAQAMAAAHgEQAGgGABgLQgBgLgGgFQgHgGgMABIgTAAgAIDBSIAAhzIhJBzIgfAAIAAikIAfAAIAAByIBJhyIAfAAIAACkgAFOBSIAAiGIgfAAIAAgeIBcAAIAAAeIgfAAIAACGgAAfBSIAAhzIhIBzIgfAAIAAikIAfAAIAAByIBIhyIAeAAIAACkgAmABSIAAikIAvAAQAbAAAQAOQAPAOABAXQAAAXgPANQgPAPgdAAIgRAAIAAA+gAligKIASAAQANAAAHgEQAGgGABgLQAAgLgHgFQgHgGgNABIgSAAgAnNBSIAAiGIgeAAIAAgeIBbAAIAAAeIgeAAIAACGgArIBSIAAikIAfAAIAACkgAtHBSIAAikIAfAAIAAA/IAYAAQAaAAAPAOQAPANAAAXQgBAWgPAOQgPAPgZAAgAsoA0IAZAAQAKAAAHgFQAHgGAAgKQgBgKgGgGQgHgFgKAAIgZAAgAvMBSIAAikIBgAAIAAAeIhBAAIAAAhIAaAAQAcAAANAPQAOAOAAAVQAAAXgQANQgOAPgZAAgAutA0IAaAAQALAAAGgFQAGgGABgKQAAgIgGgHQgHgGgLAAIgaAAgAgghkQgLgJgBgNIAZAAQABAFAEADQAEADAGAAQAEAAAEgDQAEgDABgFIAZAAQgBANgMAJQgLAJgOAAQgQAAgMgJgAl8jVQgZgZABgkQgBgkAZgZQAZgZAlAAQAmAAAYAZQAZAZAAAkQAAAkgZAZQgZAZglAAQglAAgZgZgAlmk6QgQAQAAAYQAAAXAQAQQAQARAYAAQAYAAARgRQAPgQAAgXQAAgZgPgPQgRgQgYAAQgYAAgQAQgAK4jBIAAikIAeAAIAACkgAI5jBIAAikIAeAAIAAA/IAZAAQAaAAAOAOQAPAOAAAXQAAAWgQAPQgOAOgZgBgAJXjeIAaAAQAJAAAIgGQAGgFABgKQgCgKgFgFQgHgGgKAAIgaAAgAH8jBIAAh7IgsB7IgaAAIgsh7IAAB7IgeAAIAAikIAqAAIAuB+IAuh+IApAAIAACkgAEvjBIAAh7IgsB7IgZAAIgsh7IAAB7IgfAAIAAikIAqAAIAtB+IAuh+IAqAAIAACkgABtjBIgRgqIg9AAIgRAqIghAAIBEikIAZAAIBECkgAAqkJIAnAAIgUgwgAhvjBIAAikIAuAAQAdAAAOANQAQAOAAAYQAAAXgPAOQgOAOgeAAIgPAAIAAA+gAhQkcIASAAQALgBAIgFQAGgGAAgKQAAgKgGgGQgGgFgNgBIgSAAgAjRjBIAAikIBSAAIAAAdIgzAAIAACHgAoJjBIAAikIAuAAQAdAAAPANQAPAOAAAYQAAAXgPAOQgPAOgdAAIgQAAIAAA+gAnrkcIATAAQAMgBAGgFQAIgGAAgKQgBgLgGgFQgHgFgMgBIgTAAgApGjBIAAiHIg8AAIAACHIgeAAIAAikIB4AAIAACkg");
	this.shape.setTransform(97.3,36.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(0,0,194.6,72.2), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("AlFEAIAAggIh3AAIAAAgIgfAAIAAg9IAQAAIA9iIIAbAAIA9CIIAPAAIAAA9gAmpDDIBRAAIgohdgAhqDUQgQgOACgYIAfAAQAAAKAGAHQAHAGAMAAQALABAHgGQAHgGAAgKQAAgJgGgHQgHgGgKAAIgQAAIAAgeIAOAAQAJAAAFgEQAGgFAAgJQAAgJgGgFQgFgGgJABQgIgBgGAEQgGAFAAAIIgfAAQAAgUAOgNQANgNAYAAQAWAAAOAMQAOAMAAAVQAAAMgGAJQgHAKgKAFQANADAIALQAIAMAAAOQgBAXgPANQgQANgZAAQgZAAgQgPgAGvDgIAAhEIg8AAIAABEIgfAAIAAilIAfAAIAABDIA8AAIAAhDIAfAAIAAClgAEXDgIAAh0IhJB0IgfAAIAAilIAfAAIAAB1IBJh1IAfAAIAAClgAB9DgIgRgqIg9AAIgQAqIghAAIBEilIAYAAIBFClgAA7CYIAmAAIgTgwgAiuDgIAAh0IhJB0IgfAAIAAilIAeAAIAAB1IBKh1IAfAAIAAClgADXAqQgLgIgBgOIAZAAQABAEAEADQAEAEAGAAQAGAAAEgDQAEgEAAgEIAaAAQgCAOgLAIQgKAIgRABQgRgBgLgIgAizhHQgZgXAAglQAAgkAZgZQAZgZAlgBQAlABAYAZQAZAZAAAkQAAAlgZAXQgZAZgkAAQglAAgZgZgAieisQgQARAAAXQAAAXAQARQARARAXAAQAYAAARgRQAQgQAAgYQAAgYgQgQQgRgQgXAAQgYAAgRAQgANdgxIAAh0IhKB0IgfAAIAAimIAfAAIAAB0IBJh0IAfAAIAACmgAK4gxIAAimIAeAAIAACmgAI5gxIAAimIAfAAIAABAIAYAAQAaAAAOANQAPAOAAAYQAAAWgPAOQgQAOgYABgAJYhQIAZAAQALABAGgGQAGgFAAgKQAAgKgGgGQgHgFgKAAIgZAAgAH9gxIAAhGIg9AAIAABGIgeAAIAAimIAeAAIAABDIA9AAIAAhDIAeAAIAACmgAFlgxIAAiIIg8AAIAACIIgfAAIAAimIB6AAIAACmgACWgxIAAimIBZAAIAAAeIg6AAIAAAmIA3AAIAAAeIg3AAIAAAlIA6AAIAAAfgABkgxIgth7IgtB7IghAAIBBimIAaAAIBCCmgAjugxIgzhJIAABJIgfAAIAAimIAfAAIAABIIAzhIIAkAAIg+BRIA+BVgAl9gxIAAh0IhJB0IgfAAIAAimIAfAAIAAB0IBJh0IAfAAIAACmgAoXgxIgth7IgtB7IgiAAIBBimIAbAAIBBCmgAr5gxIAAimIBYAAIAAAeIg6AAIAAAmIA4AAIAAAeIg4AAIAAAlIA6AAIAAAfgAt6gxIAAimIAnAAQAdAAAOAMQAPAMAAAUQAAAKgFAJQgGAIgHAFQANAEAHAKQAIALAAAOQAAAYgRANQgRANggABgAtchQIAUAAQAMABAHgFQAHgHAAgJQAAgJgHgHQgGgEgNgBIgUAAgAtciXIAPAAQAKAAAFgFQAFgDABgJQAAgIgFgFQgGgEgKAAIgPAAgAMcjoQgLgKgBgNIAZAAQABAFAEAEQAEACAGAAQAGAAAEgCQAEgEAAgFIAaAAQgDAOgKAJQgLAJgQgBQgQABgMgJg");
	this.shape.setTransform(89.1,25.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(0,0,178.3,51.1), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("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");
	this.shape.setTransform(132.6,21.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

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

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqJH0IAAvnIUTAAIAAPng");
	this.shape.setTransform(1,-6,2.308,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2, new cjs.Rectangle(-149,-146,300,280), null);


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
	this.instance = new lib.legal2();
	this.instance.parent = this;
	this.instance.setTransform(-3,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal333, new cjs.Rectangle(-3,-7,295,9), null);


(lib.legal_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.legal();
	this.instance.parent = this;
	this.instance.setTransform(-2,-3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_1, new cjs.Rectangle(-2,-3,189,38), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(302).to({_off:false},0).to({x:0,y:0},4,cjs.Ease.get(1)).wait(74));

	// p4
	this.instance_1 = new lib.p4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(10,0.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(227).to({_off:false},0).to({x:0,y:0},4,cjs.Ease.get(1)).to({_off:true},74).wait(75));

	// p3
	this.instance_2 = new lib.p3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(10,0.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(152).to({_off:false},0).to({x:0,y:0},4,cjs.Ease.get(1)).to({_off:true},74).wait(150));

	// p2
	this.instance_3 = new lib.p2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(10,0.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(77).to({_off:false},0).to({x:0,y:0},4,cjs.Ease.get(1)).to({_off:true},74).wait(225));

	// p1
	this.instance_4 = new lib.p1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(10,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:0,y:0},4,cjs.Ease.get(1)).to({_off:true},76).wait(300));

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
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(302).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,x:-127.8,y:-26.6},5,cjs.Ease.get(1)).wait(68).to({scaleX:0.99,scaleY:0.99,x:-115,y:-24},4,cjs.Ease.get(1)).wait(1));

	// t4
	this.instance_1 = new lib.t4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-89.2,-22.1,0.99,0.99);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(227).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,x:-99.1,y:-24.5},5,cjs.Ease.get(1)).wait(64).to({scaleX:0.99,scaleY:0.99,x:-89.2,y:-22.1},5,cjs.Ease.get(1)).to({_off:true},1).wait(78));

	// t3
	this.instance_2 = new lib.t3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-96.3,-35.7,0.99,0.99);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(152).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,x:-107,y:-39.7},5,cjs.Ease.get(1)).wait(64).to({scaleX:0.99,scaleY:0.99,x:-96.3,y:-35.7},5,cjs.Ease.get(1)).to({_off:true},1).wait(153));

	// t2
	this.instance_3 = new lib.t2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-88.2,-25.3,0.99,0.99);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(77).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,x:-98,y:-28.1},5,cjs.Ease.get(1)).wait(64).to({scaleX:0.99,scaleY:0.99,x:-88.2,y:-25.3},5,cjs.Ease.get(1)).to({_off:true},1).wait(228));

	// t1
	this.instance_4 = new lib.t1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-131.2,-21,0.99,0.99);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1.1,scaleY:1.1,x:-145.8,y:-23.3},4,cjs.Ease.get(1)).wait(67).to({scaleX:0.99,scaleY:0.99,x:-131.2,y:-21},5,cjs.Ease.get(1)).to({_off:true},1).wait(303));

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
			
			legal.scaleX = 0.9;		
			legal.scaleY = 0.9;
		
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
	this.legal = new lib.legal_1();
	this.legal.parent = this;
	this.legal.setTransform(-0.7,226.3,1,1,0,0,0,0.3,17.6);

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
	fps: 20,
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