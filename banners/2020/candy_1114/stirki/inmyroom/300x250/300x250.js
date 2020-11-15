(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x250_atlas_", frames: [[0,0,300,199],[0,201,300,199]]}
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
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["300x250_atlas_"];
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

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(0,11.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4, new cjs.Rectangle(-48.2,-16.5,96.5,55.8), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(0,11.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-38.8,-17.1,77.7,56.4), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABkFhQgOgOAAgVQAAgVAPgPQAOgOAVAAQAPAAAMAHQAMAJAGANIgUAAQgFgGgGgDQgGgDgHAAQgPAAgJAKQgJAJAAAOQAAAMAJALQAKAKAOAAQAGAAAGgDQAGgCAFgHIAUAAQgGAOgLAHQgLAIgQAAQgVAAgPgPgAotFhQgPgOAAgVQAAgUAPgQQAPgOAVAAQAPAAALAHQAMAJAGANIgUAAQgFgGgGgDQgGgDgHAAQgOAAgKAKQgJAKAAANQAAANAKAKQAIAKAPAAQAHAAAGgDQAGgCAEgHIAVAAQgGAOgMAHQgMAIgPAAQgVAAgOgPgAIrFuIAAhEIgrBEIgSAAIAAhhIASAAIAABEIArhEIASAAIAABhgAHNFuIgegqIAAAqIgSAAIAAhhIASAAIAAAqIAegqIAVAAIgkAwIAkAxgAEbFuIAAhhIASAAIAABPIAeAAIAAhPIARAAIAABPIAeAAIAAhPIASAAIAABhgADSFuIAMgZIglhIIAVAAIAaA0IAWg0IATAAIgrBhgAAZFuIAAhEIgqBEIgSAAIAAhhIASAAIAABEIAqhEIASAAIAABhgAhkFuIAAhEIgrBEIgSAAIAAhhIASAAIAABEIArhEIASAAIAABhgAjCFuIgegqIAAAqIgSAAIAAhhIASAAIAAAqIAegqIAVAAIgkAwIAkAxgAk6FuIAAhhIAaAAQARABAJAIQAJAHAAAOQAAAOgJAIQgJAIgRAAIgJAAIAAAlgAkpE4IALAAQAHAAAEgDQAEgDAAgHQAAgFgEgEQgEgDgHAAIgLAAgAleFuIAAhEIgrBEIgSAAIAAhhIASAAIAABEIArhEIASAAIAABhgAnIFuIAAhPIgRAAIAAgSIA1AAIAAASIgSAAIAABPgAB+CtQgOgOAAgVQAAgUAOgQQAQgOAVAAQAVAAAPAOQAOAQAAAUQAAAVgOAOQgPAPgVAAQgWAAgPgPgACLBzQgJAJAAAOQAAAOAJAJQAKAKANAAQAPAAAJgKQAJgJAAgOQAAgOgJgJQgJgKgOAAQgPAAgJAKgAhmCtQgOgOAAgVQAAgUAOgQQAQgOAUAAQAQAAALAHQAMAJAGANIgVAAQgFgGgFgDQgGgDgIAAQgOAAgJAKQgJAKAAANQAAANAJAKQAJAKAOAAQAHAAAGgDQAGgCAFgHIAUAAQgGAOgLAHQgMAIgPAAQgWAAgOgPgAEfC6IAAhEIgrBEIgSAAIAAhhIASAAIAABEIArhEIARAAIAABhgAAsC6IAAhhIAbAAQARABAIAIQAJAHAAAOQAAAOgJAIQgIAIgRAAIgJAAIAAAlgAA+CEIAKAAQAIAAADgDQAEgDAAgHQAAgGgEgDQgDgDgIAAIgKAAgAAAC6IAAhPIgSAAIAAgSIA0AAIAAASIgRAAIAABPgAiTC6IAAhhIASAAIAABhgAjcC6IAAhhIARAAIAAAlIAPAAQAOAAAJAIQAJAJAAANQAAANgJAIQgKAJgNAAgAjLCoIAPAAQAGAAAEgDQAEgEAAgFQAAgGgEgDQgEgDgGAAIgPAAgAkqC6IAAhhIA4AAIAAASIgnAAIAAATIAQAAQAQAAAIAJQAIAJAAAMQAAANgJAIQgKAJgNAAgAkZCoIAQAAQAGAAAEgDQAEgEAAgFQAAgFgEgEQgEgDgGAAIgQAAgAD5BPQgGgFgBgIIAPAAQAAADACACQADACADAAQAEAAACgCQACgCABgDIAPAAQgCAIgGAFQgGAFgKAAQgKAAgGgFgAjqgGQgPgOAAgVQAAgVAPgPQAPgOAVAAQAWAAAOAOQAPAPAAAVQAAAVgPAOQgOAOgWAAQgWAAgOgOgAjdhAQgKAJAAAOQAAAOAKAJQAKAKANAAQAOAAAKgKQAJgKAAgNQAAgOgJgJQgKgKgOAAQgOAAgJAKgAGJAGIAAhgIASAAIAABggAE/AGIAAhgIASAAIAAAlIAOAAQAPAAAJAIQAIAIAAAOQAAANgJAIQgJAIgOAAgAFRgLIAPAAQAGAAAEgDQAEgEAAgFQgBgGgDgDQgEgDgGAAIgPAAgAEcAGIAAhHIgaBHIgPAAIgZhHIAABHIgSAAIAAhgIAYAAIAbBKIAahKIAZAAIAABggACkAGIAAhHIgZBHIgPAAIgahHIAABHIgSAAIAAhgIAYAAIAbBKIAbhKIAYAAIAABggAAzAGIgKgYIgkAAIgIAYIgUAAIAnhgIAOAAIAoBggAAMgjIAWAAIgLgdgAhNAGIAAhgIAbAAQARABAIAIQAJAHAAAOQAAAOgJAIQgIAIgRAAIgJAAIAAAkgAg7gvIAKAAQAIAAADgDQAEgDAAgHQAAgFgEgEQgDgDgIAAIgKAAgAiGAGIAAhgIAwAAIAAASIgfAAIAABOgAk9AGIAAhgIAbAAQARABAJAIQAJAHAAAOQAAANgJAJQgJAIgRAAIgJAAIAAAkgAkrgvIALAAQAHAAAEgDQADgDABgHQAAgFgEgEQgEgDgHAAIgLAAgAlgAGIAAhOIgjAAIAABOIgSAAIAAhgIBHAAIAABggADgj4IAAguIAAAAIggAuIgaAAIAhgsQgPgCgIgJQgGgHgCgKIgBgIQAAgSAMgKQALgLAWAAIAiAAIAAB3gADDlVQgGAFAAAIQAAAFACADQABADADACQAFAFALAAIANAAIAAgjIgNAAQgLAAgFAEgACAj4IAAhZIgfBZIgTAAIgghZIAABZIgVAAIAAh3IAdAAIAhBbIAhhbIAeAAIAAB3gAg6j4IAAh3IA/AAIAAAWIgpAAIAAAbIAnAAIAAAVIgnAAIAAAbIApAAIAAAWgAiTj4IAAh3IAhAAQAUAAALAKQALAKAAARIAAABIgBAJQgBAGgEAFIgBACIgDAEQgLAKgVAAIgLAAIAAAtgAh9k6IANAAQAIAAAFgEIACgCQADgDAAgHQAAgIgFgDQgEgEgJAAIgNAAgAjwj4IAAh3IAcAAQAUAAALAJQALAIAAAPQAAAHgEAGIgBACQgDAEgFADQAJADAFAIQAGAIAAAKQAAARgMAJQgMAKgYAAgAjakOIAOAAQAJABAFgEQAFgFAAgGQAAgHgFgFQgFgEgJAAIgOAAgAjalBIAKAAQAIAAADgDQAEgDABgGQAAgGgEgDQgFgDgHAAIgKAAg");
	this.shape.setTransform(0,11.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-57.2,-25.6,114.6,73.6), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmpCaQgRgSAAgaQAAgaASgSQARgSAbAAQASAAAOAKQAPAJAIARIgZAAQgHgHgHgEQgHgDgJAAQgRAAgMAMQgLALAAARQAAARALALQAMAMARAAQAJAAAHgDQAHgDAFgHIAaAAQgHAPgPAKQgPAKgSAAQgaAAgSgSgAIRCpIAAh3IBAAAIAAAWIgqAAIAAAbIAoAAIAAAVIgoAAIAAAbIAqAAIAAAWgAHmCpIAAh3IAWAAIAAB3gAGLCpIAAh3IAWAAIAAAuIARAAQASAAALAKQALAKAAAQQAAAQgLALQgMAKgRAAgAGhCTIASAAQAIAAAEgEQAFgDAAgIQAAgGgFgFQgFgEgHAAIgSAAgAFfCpIAAgyIgrAAIAAAyIgWAAIAAh3IAWAAIAAAwIArAAIAAgwIAWAAIAAB3gADBCpIAAh3IAWAAIAAAuIASAAQASAAALAKQAKAKAAAQQAAAQgLALQgLAKgRAAgADXCTIASAAQAIAAAEgEQAFgDAAgIQAAgGgFgFQgFgEgHAAIgSAAgACdCpIgghYIghBYIgYAAIAvh3IATAAIAvB3gAAiCpIAAhTIgzBTIgWAAIAAh3IAWAAIAABUIAzhUIAWAAIAAB3gAjHCpIAAh3IAWAAIAABhIAkAAIAAhhIAWAAIAABhIAkAAIAAhhIAWAAIAAB3gAkhCpIAOgeIguhZIAbAAIAfA/IAbg/IAYAAIg1B3gAoFCpIAAhTIg1BTIgWAAIAAh3IAWAAIAABUIA1hUIAWAAIAAB3gAoEhBQgSgSAAgaQAAgZASgTQASgSAaAAQATAAAOAKQAOAJAIARIgZAAQgHgHgGgEQgHgDgKAAQgRAAgMAMQgLALAAARQAAARAMALQAMAMAQAAQAJAAAHgDQAHgDAGgHIAZAAQgHAPgPAKQgOAKgSAAQgaAAgSgSgAGsgyIAAh3IA/AAIAAAWIgpAAIAAAbIAoAAIAAAVIgoAAIAAAbIApAAIAAAWgAGAgyIAAh3IAWAAIAAB3gAElgyIAAh3IAWAAIAAAuIASAAQASAAALAKQAKAKAAAQQAAAQgLALQgLAKgRAAgAE7hIIASAAQAIAAAFgEQAEgDAAgIQAAgGgFgFQgFgEgHAAIgSAAgAD6gyIAAgyIgrAAIAAAyIgWAAIAAh3IAWAAIAAAwIArAAIAAgwIAWAAIAAB3gABcgyIAAh3IAWAAIAAAuIARAAQASAAALAKQALAKAAAQQAAAQgLALQgMAKgRAAgAByhIIASAAQAIAAAEgEQAFgDAAgIQAAgGgFgFQgFgEgHAAIgSAAgAA4gyIghhYIgfBYIgYAAIAuh3IATAAIAvB3gAg7gyIgMgfIgrAAIgMAfIgZAAIAyh3IARAAIAyB3gAhqhmIAbAAIgNgjgAjZgyIAAh3IAhAAQAUAAALAKQALAKAAARQAAAQgKALQgLAKgVAAIgLAAIAAAtgAjDh0IANAAQAIAAAFgEQAFgEAAgIQAAgIgFgDQgEgEgJAAIgNAAgAkFgyIAAhTIg1BTIgWAAIAAh3IAWAAIAABUIA1hUIAWAAIAAB3gAmHgyIAAhhIgWAAIAAgWIBCAAIAAAWIgWAAIAABhg");
	this.shape.setTransform(0,-13.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AElAwIAAhfIASAAIAABfgADcAwIAAhfIARAAIAAAlIAOAAQAPAAAJAIQAIAHABAOQAAANgKAIQgJAIgOAAgADtAfIAOAAQAHAAAEgEQADgDAAgFQAAgGgDgEQgEgDgHAAIgOAAgAC4AwIAAgoIgjAAIAAAoIgSAAIAAhfIASAAIAAAmIAjAAIAAgmIASAAIAABfgABfAwIAAhDIgrBDIgSAAIAAhfIASAAIAABCIArhCIASAAIAABfgAheAwIAAhfIASAAIAABOIAdAAIAAhOIARAAIAABOIAeAAIAAhOIARAAIAABfgAh7AwIgKgZIgkAAIgKAZIgUAAIAphfIAOAAIAoBfgAijAGIAXAAIgLgbgAjiAwIAAhHIgaBHIgOAAIgahHIAABHIgSAAIAAhfIAYAAIAbBIIAbhIIAYAAIAABfg");
	this.shape_1.setTransform(0,25.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-59.2,-30.4,118.6,61), null);


(lib.p4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-99.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p4, new cjs.Rectangle(-150,-99.5,300,199), null);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(-150,-99.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1, new cjs.Rectangle(-150,-99.5,300,199), null);


(lib.know = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("AgXAtIAAhZIAvAAIAAAQIgeAAIAAAVIAdAAIAAAPIgdAAIAAAVIAeAAIAAAQg");
	this.shape.setTransform(46,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A7E0").s().p("Ag0AtIAAhZIARAAIAABJIAbAAIAAhJIAQAAIAABJIAcAAIAAhJIAQAAIAABZg");
	this.shape_1.setTransform(36.7,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00A7E0").s().p("AgdAtIAAhZIARAAIAAAjIAMAAQAOAAAIAHQAIAGAAANQAAANgJAHQgIAIgNAAgAgMAdIAMAAQAGAAADgDQAEgDAAgGQAAgFgEgDQgDgDgGAAIgMAAg");
	this.shape_2.setTransform(27.4,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00A7E0").s().p("AAZAtIgZhCIgXBCIgTAAIAkhZIANAAIAkBZg");
	this.shape_3.setTransform(19.2,0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00A7E0").s().p("AghAhQgNgNAAgUQAAgSANgOQAOgOATAAQAUAAAOAOQANAOAAASQAAAUgNANQgNAOgVAAQgTAAgOgOgAgVgVQgJAJAAAMQAAANAJAIQAJAKAMgBQAOABAIgKQAJgIAAgNQAAgMgJgJQgIgIgOgBQgMABgJAIg");
	this.shape_4.setTransform(9.7,0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00A7E0").s().p("AgeAtIAAhZIA0AAIAAAQIgiAAIAAATIAMAAQAQAAAHAIQAIAGAAAMQAAANgJAHQgIAIgOAAgAgMAdIAMAAQAHAAADgDQADgDABgGQAAgFgDgDQgFgDgGAAIgMAAg");
	this.shape_5.setTransform(1.2,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00A7E0").s().p("AgdAtIAAhZIARAAIAAAjIAMAAQAOAAAIAHQAIAGAAANQAAANgIAHQgIAIgOAAgAgMAdIAMAAQAGAAAEgDQADgDAAgGQAAgFgDgDQgEgDgGAAIgMAAg");
	this.shape_6.setTransform(-8.7,0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00A7E0").s().p("AgHAtIAAhJIgRAAIAAgQIAxAAIAAAQIgRAAIAABJg");
	this.shape_7.setTransform(-15,0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00A7E0").s().p("AAZAtIgJgXIggAAIgJAXIgSAAIAlhZIANAAIAlBZgAgKAGIAUAAIgKgag");
	this.shape_8.setTransform(-21.5,0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00A7E0").s().p("AAQAtIAAgmIgfAAIAAAmIgRAAIAAhZIARAAIAAAkIAfAAIAAgkIARAAIAABZg");
	this.shape_9.setTransform(-30.1,0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00A7E0").s().p("AgVAnQgJgIABgOIARAAQAAAGADADQADAFAGAAQAHAAADgEQAEgDAAgFQAAgGgDgDQgEgDgFAAIgIAAIAAgQIAGAAQAGABACgDQADgDAAgFQAAgFgDgDQgDgCgEAAQgFAAgCACQgDADAAAEIgRAAQAAgLAHgHQAHgHANgBQALAAAIAIQAIAGAAAMQAAAGgEAFQgDAFgGADQAHABAFAGQAEAGAAAIQAAAMgJAIQgJAGgNAAQgNAAgIgHg");
	this.shape_10.setTransform(-37.6,0.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00A7E0").s().p("AgRAtIALgXIgihCIAUAAIAWAvIAVgvIATAAIgqBZg");
	this.shape_11.setTransform(-44.8,0.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AolBvIAAjdIRKAAIAADdg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.know, new cjs.Rectangle(-54.9,-11.1,109.9,22.3), null);


(lib.eko = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAsQgSgSAAgaQAAgZASgSQAQgSAbAAQAaAAATASQARASABAZQAAAZgTATQgSASgaAAQgbAAgQgSgAAJgcQgLAMAAAQQAAARALALQAMAMARAAQARAAALgMQAMgMAAgQQAAgQgMgMQgKgLgSAAQgSAAgLALgAj5AsQgSgSAAgaQAAgZASgSQASgSAbAAQAaAAASASQASASAAAZQAAAagSASQgSASgaAAQgbAAgSgSgAjpgcQgMANAAAPQAAARAMALQALAMASAAQAQAAANgMQALgMAAgQQAAgPgLgNQgMgLgRAAQgSAAgLALgAnMA0QgOgJgHgQIAaAAQAFAHAHADQAIADAKAAQAOAAAKgIQAKgIADgOIg1AAIAAgUIA1AAQgDgPgKgHQgKgHgOAAQgLAAgHADQgJAEgEAHIgaAAQAHgQAPgKQAPgKATAAQAZAAASASQASARAAAaQAAAagSASQgRASgbAAQgSAAgPgKgAGjA7IAAh2IA/AAIAAAWIgpAAIAAAbIAnAAIAAAUIgnAAIAAAbIApAAIAAAWgAFrA7IAAhgIgVAAIAAgWIBCAAIAAAWIgXAAIAABggAEHA7IAAh2IAWAAIAAAuIARAAQATAAAKAKQALAJAAAQQAAAQgLALQgMAKgRAAgAEdAlIARAAQAJAAAEgEQAFgEAAgHQgBgGgEgFQgFgEgIAAIgRAAgADbA7IAAhYIgfBYIgTAAIgfhYIAABYIgWAAIAAh2IAeAAIAgBaIAhhaIAeAAIAAB2gAg9A7IAAgyIgrAAIAAAyIgXAAIAAh2IAXAAIAAAwIArAAIAAgwIAVAAIAAB2gAkjA7Iglg0IAAA0IgWAAIAAh2IAWAAIAAA0IAlg0IAaAAIgtA7IAtA7g");
	this.shape.setTransform(48.3,6.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.eko, new cjs.Rectangle(0,0,96.5,12.4), null);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(305));

	// fg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A7E0").s().p("AoyBQQgpglAYg2QAVgxBDgcQBLggB6ABQAaAAAZADIAgAEIANADIgSAfQgmgLggAAQg9AAgzASQhEAYgKAwQgHAdAVAaQAbAhA7gDQATAAAkgNQArgPAagUIA9g1IAEgDIAIgEIAMgDIAGgBIBCAAIAVBbIAphaIBJAAIAqBFIAfhFIBCAAIg6B/IhEAAIgshJIghBJIgqAAIAAAAIhOAAIgDgWIhIAAIgYAVIgvAAQg2AThHAAQhnAAgsgogAjAA2IAqgBIgEgjgAF6ByIArgrIgrhgIBBAAIATA0IA1g1IBKAAIiACAQgHAHgEACIgQADgAD2BmIhrAAIA6h/IBsAAQAzAAATAZQAPATgLAZQgLAYgcAPQgjATg4AAIgDAAgADhBGIATAAQA/AAAJgiQAHgegzAAIgTAAg");
	this.shape_1.setTransform(152,27.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("A3fEMIAAoXMAu/AAAIAAIXg");
	this.shape_2.setTransform(150.5,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(305));

	// legal
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ADCA2IgEgCIgDgDIgCgFIADAAQAAgBAAAAQABAAAAAAQAAAAAAAAQABAAAAABIABAAIACAEIADACIADABIAEgBIADgCIABgDIABgCIgBgDIgBgCIgDgCIgGgBIAAgDIAFAAIADgCIABgDIABgCIgBgDQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAgBIgCgBIgDAAIgDAAIgCABIgCACIgBADIgBACIgBAAIgDgBIABgFIADgDIAEgDIAFAAIAFAAIAEADIACACIABAFIAAADIgCADIgCACIgDABIAGADIACAHQAAADgBACIgDAEIgEACIgGABgAChA3IgDgBIgDgBIgCgCIACgDIABgBIACABIABABIADABIADABIAEgBIADgCIABgDIABgEIgBgEIgBgCIgDgBIgEgBIgGABIgEgBIAEgTIATAAIAAACIgBACIgCABIgNAAIgBAKIAFgBIAGABIAEADIADAEIAAAFIgBAGIgDAFIgFACIgFABgABfA2IgFgEQgDgDAAgDIgBgJIABgKQAAgDADgEIAFgDIAFgBIAGABIAFADIADAHIABAKIgBAJIgDAGIgFAEIgGABgABhASIgDADIgCAGIgBAIIABAHIACAFIADADIADABIAEgBIADgDIACgFIABgHIgBgIIgCgGIgDgDIgEAAgAAcA2IgEgEQgCgCgBgEQgCgEAAgFQAAgGACgEQABgFACgCIAEgDIAGgBIAGABQAEACABABIADAHIABAKIgBAJIgDAGQgBABgEADIgGABgAAfASIgDADIgCAGIgBAIIABAHIACAFIADADIADABIAEgBIADgDIACgFIABgHIgBgIIgCgGIgDgDIgEAAgAgDA2IgFgCIgCgFIgBgGIABgGIAEgGIAJgOIABgBIAHAAIgMAPIgBABIAAACIACgCIADgBIAFABIAEADIACADIABAGIgBAFIgCAFIgFACIgGABIgEgBgAgBAjIgDABIgCADIAAADIAAADIACADIADACIACABIAEgBIADgCIABgDIABgDIgBgEIgBgCIgDgBIgDgBgAipA2IgFgEQgCgCgBgEIgBgJIABgKQABgFACgCIAFgDIAGgBIAGABQADABABACIAEAHIABAKIgBAJIgEAGQgBACgDACIgGABgAinASIgDADIgCAGIAAAIIAAAHIACAFIADADIAEABIADgBIADgDIACgFIABgHIgBgIIgCgGIgDgDIgDAAgACKA2IAAgKIgTAAIgBgBIAAgDIATgaIAFAAIAAAaIAGAAIAAAEIgGAAIAAAKgAB7AoIAPAAIAAgUgAA6A2IAQghIACgCIgVAAIgBgBIAAgBIAAgDIAcAAIAAAEIgSAjIgBABIgCAAgAgoA2IAMgQIACgDIgDACIgEABIgEgBIgEgCIgDgDIAAgFIABgGIACgEIAFgCIAFgBIAGABIAEACIACAEIABAGIgBAGIgBADIgMARIgBABgAgiASIgDACIgBADIgBADQAAAEACACQACACAEAAIADgBIADgBIACgDIAAgDIgBgDIgBgDIgDgCIgDAAgAhKA2IATgjIgVAAIgBgBIAAgEIAbAAIAAAEIgRAjIgBABIgCAAgAhrA2IATgjIgVAAIgBgBIAAgEIAbAAIAAAEIgRAjIgBABIgCAAgAh+A2IAAgKIgTAAIAAgBIgBgDIAUgaIAFAAIAAAaIAGAAIAAAEIgGAAIAAAKgAiMAoIAOAAIAAgUgAjOA2IAAgDIAJAAIAAgeIgHAGIgBAAIAAAAIgBAAIAAAAIgCgCIAMgLIAEAAIAAAlIAIAAIAAADgAICgDIAAgJIgGgCIgFgDIgDgEIgBgGIABgGIADgEIAFgEIAGgBIAAgMIAFAAIAAAMIAHABIAFAEQACABABADIABAGIgBAGIgDAEIgFADIgHACIAAAJgAIHgRIAFAAIADgCIACgEIAAgEIAAgFIgCgDIgDgCIgFgBgAH7gjQgDAEAAAEQAAAEADAEQADACAFAAIAAgVQgEAAgEADgAFygDIAAgJIgYAAIAAAHIAAACIgBAAIgEAAIAAgOIABAAIACAAIACgBIACgDIABgFIACgQIASAAIAAAZIAGAAIAAAMIgBACgAFjgdIgDAKIgCACIAOAAIAAgUIgJAAgAASgDIAAgJIgnAAIAAgeIAFAAIAAAZIAMAAIAAgZIAEAAIAAAZIAMAAIAAgZIAFAAIAAAZIAFAAIAAAOgAhwgDIAAgJIgYAAIAAAHIAAACIgBAAIgEAAIAAgOIABAAIACAAIACgBIACgDIABgFIACgQIASAAIAAAZIAGAAIAAAMIgBACgAh/gdIgDAKIgCACIAOAAIAAgUIgJAAgAkCgDIAAgnIAEAAIABABIAAAEIAFgEIAFgBIAFABIADADIACAEIABAHIgBAGIgCAEIgEADIgGACIgEgBIgDgDIAAANgAj5gkQAAAAgBAAQAAAAgBAAQAAABAAAAQgBABAAAAIAAAPIADACIADAAQAEAAACgCQACgDAAgFIAAgFIgBgEIgDgBIgDgBQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABgAwogDIAAgJIghAAIAAAHIAAACIgCAAIgDAAIAAgOIAEAAIACgBIABgDIADgMIACgVIAYAAIAAAlIAHAAIAAAMIgBACIgBAAgAw/gcIgCAHIgCAEIATAAIAAggIgNAAgAG4gGIAAgBIABgCIABAAIABgCIABgBIgBAAIgBgBIgBgBIgBgDIABgBIACgBIACAAIABABIABABIAAAEIgCADIgBACIgDADgAE9gGIgBAAIAAgBIABgCIABAAIABgCIABgBIgBAAIgBgBIgBgBIgBgDIABgBIACgBIACAAIABABIABACIAAADIgBADIgCACIgCADgAlHgGIgBAAIAAgBIABgCIABAAIABgCIABgBIgBAAIgBgBIgBgBIgBgDIABgBIACgBIACAAIABABIABABIAAAEIgBADIgFAFgApegGIAAAAIAAgBIAAgBIABgBIABAAIABgCIAAgBIgBgBIgBgBIgBgBIAAgCIABgBIACgBIACAAIABABIABACIgBADIgBADIgBACIgDADgAS8gMIgDgCIgFgDIACgCIABAAIACAAIABABIADABIADAAIAEAAIADgCIACgEIAAgEIAAgCIgCgDIgDgCIgEgBIgGABIgDgBIADgTIATAAIAAACIAAACIgDACIgMAAIgCAKIAGgBIAFABIAEACIADAEIABAFIgBAHIgEAEIgEADIgGABgAQXgMIgDgCIgFgDIACgCIABAAIABAAIAFACIADAAIAEAAIACgCIACgEIABgEIgBgCIgBgDIgDgCIgEgBIgGABIgEgBIAEgTIATAAIAAACIgBACIgCACIgNAAIgCAKIAGgBIAGABIAEACIACAEIABAFIgBAHIgDAEIgFADIgFABgAGfgNIgFgDIgDgDIgBgFIACgGQADgEADAAIgFgDQgBgDAAgEIABgDIACgEIAEgCIAFgBIAFABIAEACIADAEIABADQAAAEgCADIgFADQADAAADAEIACAGIgBAFIgDADQgCACgCABIgGABgAGegeIgBADIgBADIABADIABADIADABIADAAIAEAAIACgBIACgDIABgDIgBgDIgCgDIgDgCIgGAAgAGhgyIgCACIgBADIgBACIABACIABADIACACIADAAIAEAAIACgCIABgDIAAgEIgBgDIgDgCIgDAAgAlhgMIgCgCIgCgDIgBgDIABgDIADgDIAGgCIAIgBIAAgCIgBgFQgBgBAAAAQgBAAAAgBQgBAAgBAAQAAAAgBAAIgDABIgCABIgBAAIgCABIgBAAIAAgBIgBgBIAFgEIAGgBIAEAAIAEADIACADIAAAFIAAATIgCAAIgBgBIgBgBIgBgDIgCACIgFADIgDAAgAlagZIgEABIgCABIgBADIABACIABABIADABIAEgBIACgBIACgCIAAgGgArbgMIgDgCIgFgDIACgCIACAAIABAAIAEACIADAAIAEAAIADgCIACgEIAAgEIAAgCIgCgDIgDgCIgDgBIgHABIgDgBIADgTIATAAIAAACIAAACIgDACIgMAAIgCAKIAGgBIAFABIAEACIADAEIABAFIgBAHIgEAEIgEADIgGABgAvagOIgGgEIgEgHQgBgDAAgFQAAgFABgEQACgEADgCQACgDAEgCIAIgBQAEAAAEABIAGAEIgCADIgBABIgBAAIgGgDIgEgBIgGABIgEADIgDAFIgBAHQAAAEABACIADAGIAEADIAGABIADAAIADgBIACgBIACgCIABAAIAAAAIADADQgCADgEABQgFACgEAAQgEAAgEgCgAVwgMIAAgTIgVAAIAAATIgGAAIAAgqIAGAAIAAASIAVAAIAAgSIAGAAIAAAqgAUygMIAAgqIANAAIAGABIAFADIADAEIABAFIgBAFIgDAEIgFADIgGABIgHAAIAAAQgAU4ghIAHAAIAEAAIADgCIABgCIABgEIAAgEIgCgCIgDgBIgEgBIgHAAgAUUgMIAAgqIAYAAIAAAFIgSAAIAAAlgATvgOIgGgEQgDgDgBgEIgCgIQAAgFACgEQACgEACgCQADgDADgCQAEgBAFAAQAEAAAEABQAEACACADQACABACAFQACAEAAAFIgCAIQgBAFgDACIgGAEQgEACgEAAQgFAAgEgCgATygwIgFADIgDAFIgBAHIABAGIADAGIAFADIAGABIAGgBIAEgDIADgGIABgGIgBgHIgDgFIgEgDIgGgBgASXgMIAAgFIAJAAIAAgbIAAgCIgHAFIgBABIAAAAIgBgBIgBAAIgBgCIAMgLIAEAAIAAAlIAIAAIAAAFgAR6gOIgFgDQgCgDgBgEIgBgJIABgKIADgGIAFgEIAGgBIAGABIAEAEQADADAAADQACAFAAAFQAAAGgCADQAAAEgDADIgEADIgGACIgGgCgAR8gwIgDACIgCAFIgBAIIABAHIACAGIADADIAEAAIADAAIADgDIACgGIABgHIgBgIIgCgFIgDgCIgDgCgARRgMIAAgEIABgBIAQgQIACgDIABgDIABgEIgBgCIgBgCIgDgCIgCgBIgDABIgCABIgCACIgBACIgBACIgCAAIgDgBIACgEQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAIAEgDIAFAAIAFAAIAEADIACAEIABAEIAAAFIgCADIgDAEIgDADIgLALIAFgBIANAAIACABIAAABIAAAEgAQ0gMIAAgFIAJAAIAAgdIgHAFIgBABIgBAAIgBgBIgBgCIAMgLIAEAAIAAAlIAIAAIAAAFgAQAgMIAAgMIgTAAIgBgBIAAgCIATgbIAFAAIAAAbIAGAAIAAADIgGAAIAAAMgAPxgbIAPAAIAAgUgAPVgOIgFgDQgDgDAAgEQgCgDAAgGQAAgFACgFQAAgDADgDIAFgEIAFgBIAGABQADACACACIADAGIABAKIgBAJQgBAEgCADQgBACgEABIgGACIgFgCgAPXgwIgDACIgCAFIgBAIIABAHIACAGIADADIADAAIAEAAIADgDIACgGIABgHIgBgIIgCgFIgDgCIgEgCgAOvgMIARgiIACgCIgVAAIgBgBIAAgBIAAgEIAcAAIAAADIgBABIgRAjIgBACIgCABgAOOgMIARgiIACgCIgVAAIgBgBIAAgBIAAgEIAcAAIAAADIgBABIgRAjIgBACIgCABgANugMIAAgTIgVAAIAAATIgGAAIAAgqIAGAAIAAASIAVAAIAAgSIAGAAIAAAqgANDgMIAAgTIgWAAIAAATIgGAAIAAgqIAGAAIAAASIAWAAIAAgSIAGAAIAAAqgAMXgMIAAgiIgCAEIgSAbIgDADIgEAAIAAgqIAFAAIAAAjIACgFIAUgdIACgBIAEAAIAAAqgALOgMIAAgFIAJAAIAAgdIgHAFIgBABIgBAAIgDgDIANgLIAEAAIAAAlIAIAAIAAAFgAKwgOIgEgDQgDgDAAgEQgCgDAAgGQAAgFACgFQAAgDADgDIAEgEIAGgBIAGABQADACACACIADAGIABAKIgBAJQgBAEgCADQgBACgEABIgGACIgGgCgAKzgwIgDACIgCAFIgBAIIABAHIACAGIADADIADAAIAEAAIADgDIACgGIABgHIgBgIIgCgFIgDgCIgEgCgAKPgOIgEgDQgDgDAAgEQgCgDAAgGQAAgFACgFQAAgDADgDIAEgEIAGgBIAGABIAFAEIADAGIABAKIgBAJQgBAEgCADQgBABgEACIgGACIgGgCgAKSgwIgDACIgCAFIgBAIIABAHIACAGIADADIADAAIAEAAIADgDIACgGIABgHIgBgIIgCgFIgDgCIgEgCgAJrgMIAAgFIAIAAIAAgbIABgCIgIAFIAAABIgBAAIgBgBIgCgCIAMgLIAFAAIAAAlIAIAAIAAAFgAJJgMIgFgCIgEgCIgDgFIgBgGIABgGIADgFIAEgDIAGgBIAFABIAFADIgCACIgBAAIgBAAIgBgBIgFgBIgDABIgDACIgCADIAAAFIAAAEIACAEIADACIADAAIADAAIACgBIABgBIABAAIABAAIACACIgCACIgGADgAIxgMIAAgXIgCADIgNASIgBABIgBABIgDAAIAAgeIAFAAIAAAWIABgCIABgBIABgCIAMgPIABgBIABgBIADAAIAAAegAHbgOIgFgDQgCgCAAgCIgBgGIABgHIACgEIAFgDIAGgBIAFABIAFADIACAEIABAHIgBAGQAAACgCACIgFADIgFACQgFAAgBgCgAHagjQgCADAAAFQAAAGACACQADACAEAAQAEAAACgCQACgCAAgGQAAgFgCgDQgCgDgEAAQgEAAgDADgAF9gMIgBgCIgBgBIAAgBIAAgBIABgBIABgBIADAAIABABIABABIAAABIAAABIgBABIgBACgAEwgMIAAgXIgCADIgNASIgBABIgBABIgDAAIAAgeIAFAAIAAAWIABgCIABgBIANgRIABgBIABgBIADAAIAAAegADkgMIAAgDIABgBIAAgBIATgTIABgDIABgEIgBgCIgCgCIgCgCIgDgBIgCABIgDABIgBACIgBACIgBACIgCAAIgDgBIACgEIADgEIAEgDIAFAAIAFAAIAEADIACAEIABAEIgCAIIgRASIAFgBIANAAIABABIABABIAAAEgADKgMIAAgXIgBADIgCADIgLAPIgBABIgBABIgEAAIAAgeIAGAAIAAAWIABgCIAAgBIACgCIALgPIABgBIABgBIADAAIAAAegACpgMIAAgXIgBADIgNASIgBABIgBABIgDAAIAAgeIAFAAIAAAWIABgCIAAgBIANgRIABgBIABgBIAEAAIAAAegACNgMIgCgBIgHgLIgBgBIgDgBIgDAAIAAAOIgFAAIAAgeIAFAAIAAANIADAAIACAAIABgCIAGgJIABgBIACgBIAEAAIgHAMIgCABIgCABIADABIABACIAIANgABogMIgFgCIgEgCIgDgFIgBgGIABgGIACgFIAFgDIAGgBIAFABIAEADIgBACIgBAAIgBAAIgCgBIgBAAIgDgBIgEABIgCACIgCADIgBAFIABAEQAAABAAABQAAAAABABQAAAAAAAAQAAAAABABIACACIAEAAIADAAIACgBIABgBIABAAIABAAIACACIgDACIgFADgABPgMIAAgOIgNAAIAAAOIgGAAIAAgeIAGAAIAAAMIANAAIAAgMIAGAAIAAAegAAvgMIAAgXIgBADIgNASIgBABIgBABIgEAAIAAgeIAGAAIAAAWIABgCIAAgBIACgCIALgPIABgBIABgBIAEAAIAAAegAgvgOQgDAAgBgDQgCgCgBgCIgBgGIABgHIADgEQABgCADgBIAGgBIAGABIAEADIADAEIABAHIgBAGQgBACgCACIgEADIgGACIgGgCgAgvgjQgCADAAAFQAAAGACACQACACAEAAQAEAAACgCQACgCAAgGQAAgFgCgDQgCgDgEAAQgEAAgCADgAhXgMIAAgqIANAAIAHABIAEADIADAEIABAFIgBAFIgDAEIgFADIgGABIgHAAIAAAQgAhRghIAHAAIAEAAIADgCIACgCIAAgEIAAgEIgCgCIgDgBIgEgBIgHAAgAiegMIgFgDIgDgCIACgCIABAAIABAAIABABIADABIACAAIADAAIACgBIACgBIAAgCQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgFgBIgDAAIAAgDIADAAQADAAACgCQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAgBIgBgCIgBAAIgCgBIgDgBIgEABIgCABIgBAAIgBAAIgBgCIAEgDIAGgBIAEAAIAEADIACACIAAACIAAACIgBACIgBACIgDABIAFACIABAFIgBAEIgCACIgEACIgEABgAi1gMIgGgCIgEgDQgCgCgBgCIgBgHIABgGIADgEIAEgDIAGgBIAEABIAEADIADADIABAGIgBACIgBAAIgTAAIABAEIACAEIADACIADAAIAEAAIAFgCIABAAIABACIgCACIgDABIgDACgAi7gkQgCADAAADIAPAAIgBgEIgBgCIgCgBIgDgBQgEAAgCACgAjbgOIgFgDQgCgCAAgCIgBgGIABgHIACgEIAFgDIAGgBIAFABIAFADIACAEIABAHIgBAGQAAACgCACIgFADIgFACIgGgCgAjcgjQgCADAAAFQAAAGACACQADACAEAAQAEAAACgCQACgCAAgGQAAgFgCgDQgCgDgEAAQgEAAgDADgAkRgMIAAglIgUAAIAAAlIgGAAIAAgqIAgAAIAAAqgAmAgMIAAgeIALAAIAEABIAEACIABACIABACIAAACIgBACIgCACIgDABQAEABABABQABABAAAAQAAABABAAQAAABAAABQAAAAAAABIgBAEIgCACIgEACIgEABgAl7gRIAGAAQABAAABAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIAAgCIgBgCIgCgBIgJAAgAl7gdIAGAAIACAAIACgBIABgCIAAgCIAAgCIgBAAIgCgBIgCgBIgGAAgAmIgMIgDgBIgGgLIgCgBIgCgBIgDAAIAAAOIgGAAIAAgeIAGAAIAAANIACAAIACAAIACgCIAGgJIABgBIABgBIAFAAIgIAMIgBABIgCABIACABIACACIAHANgAmugMIgFgCIgEgCIgDgFIgBgGIABgGIADgFIAEgDIAGgBIAGABIAEADIgCACIgBAAIgBAAIgBgBIgCAAIgDgBIgDABIgDACIgCADIAAAFIAAAEIACAEIADACIADAAIADAAIACgBIABgBIABAAIABAAIACACIgCACIgGADgAnTgOQgDAAgBgDIgDgEIgBgGIABgHIADgEQABgCADgBIAGgBIAGABIAEADIADAEIABAHIgBAGQgBACgCACIgEADIgGACIgGgCgAnTgjQgCADAAAFQAAAGACACQABACAFAAQAEAAACgCQACgDAAgFQAAgEgCgEQgCgDgEAAQgFAAgBADgAnogMIAAggIABgBIgOAZIgBABIgBABIgBAAIgCgCIgOgZIAAAhIgFAAIAAgqIAFAAIABABIAPAcIABgCIABgBIANgZIABgBIAGAAIAAAqgAopgMIgBgCIgBgBIAAgBIAAgBIABgBIABgBIADAAIABABIABABIAAABIAAABIgBABIgBACgApCgMIAAgeIATAAIAAAFIgOAAIAAAZgAp7gMIAOgUIgDACIgEABIgEgBIgEgDIgDgDIgBgFIABgFIADgFQACgBADgBIAFgBIAFABIAFACIACAFIABAFIAAAEIgDAGIgLARIgCABIgBABgAp1gxIgDACIgCACIAAADQAAAEACACQACACAEAAIADAAIADgCQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAIABgEIgBgDIgBgCIgDgCIgDgBgAqcgMIAAgFIAIAAIAAgdIgHAFIgBABIAAAAIgBgBIgCgCIAMgLIAFAAIAAAlIAIAAIAAAFgAqwgMIAAgMIgTAAIAAgBIgBgCIAUgbIAFAAIAAAbIAGAAIAAADIgGAAIAAAMgAq+gbIAOAAIAAgUgAsAgMIAAgFIAJAAIAAgdIgHAFIgBABIAAAAIgBgBIgBAAIgBgCIAMgLIAEAAIAAAlIAIAAIAAAFgAshgMIAAgFIAJAAIAAgbIAAgCIgHAFIgBABIgBAAIgBgBIgBgCIAMgLIAEAAIAAAlIAIAAIAAAFgAtXgMIgCgDIAAgCIACgCIADAAIACACIAAACIgCADgAt2gMIAAgqIAZAAIAAAFIgTAAIAAAlgAuDgMIgCgDIgBgBIABgBIACgCIADAAIACACIAAACIgCADgAuUgMIAAgTIgVAAIAAATIgGAAIAAgqIAGAAIAAASIAVAAIAAgSIAGAAIAAAqgAu8gMIgCgCIAAgBIgBgBIABgBIAAgBIACgBIADAAIABABIAAABIABABIgBABIAAABIgBACgAwBgMIAAggIAAgCIgBACIgUAdIgBABIgBACIgFAAIAAgqIAGAAIAAAfIAAAEIACgFIAUgdIABgBIAFAAIAAAqgAxagMIAAgTIgVAAIAAATIgGAAIAAgqIAGAAIAAASIAVAAIAAgSIAGAAIAAAqgAx/gMIgBgBIgFgLIgSAAIgDAKIgBABIgBABIgFAAIAQgqIAGAAIARAqgAyPgsIgGAQIAPAAIgGgQIgBgCIgBgCgAyngMIgBgBIgMgQIgBgCIgDgBIgEAAIAAAUIgGAAIAAgqIAGAAIAAASIAGAAIACgCIAKgOIABgBIACgBIAFAAIgNARQAAAAAAABQAAAAgBABQAAAAgBAAQgBABAAAAIACABIAPAVgA0OgOIgGgEIgEgHIgCgIQAAgFACgEIAEgGQADgDADgCQAEgBAFAAQAEAAAEABQADACADADIAEAGQACAEAAAFIgCAIIgEAHIgGAEQgEACgEAAQgFAAgEgCgA0LgwIgFADQgCACgBADIgBAHIABAGQABADACADQACACADABIAGABIAFgBQADgBACgCQACgDABgDIABgGIgBgHQgBgDgCgCQgBgCgEgBIgFgBgA07gOIgHgEQgCgCgCgFIgBgIQAAgFABgEQACgFACgBQACgDAFgCIAIgBQAFAAADABQAEACADADIAEAGQABAEAAAFIgBAIIgEAHIgHAEQgDACgFAAIgIgCgA05gwIgFADIgCAFIgBAHIABAGIACAGIAFADIAGABIAGgBIAEgDIADgGIABgGIgBgHIgDgFIgEgDIgGgBgA1pgOIgGgEQgDgDgCgEIgBgIQAAgFABgEQACgEADgCQACgDAEgCQAEgBAEAAQAFAAADABQAFACACADQACABACAFQABAEAAAFIgBAIQgCAFgCACIgHAEQgDACgFAAQgEAAgEgCgA1ngwIgEADIgDAFIgBAHIABAGIADAGIAEADIAGABIAGgBIAFgDIACgGIABgGIgBgHIgCgFIgFgDIgGgBgAtCgRIgBgBIAAgBIAFgIIABgBIgBAAIAAgBIgFgHIAAgBIABgBIACgBIAHALIAAABIgHAKgAtLgRIAAgBIAAgBIAEgIIABgBIAAAAIgBgBIgEgHIAAgBIAAgBIACgBIAHALIAAABIgHAKgAzVgbIAAgBIAHgLIACABIABABIAAABIgFAHIgBABIABABIAFAIIAAABIgBABIgCAAgAzdgbIAAgBIAHgLIACABIAAABIAAABIgEAHIgBABIABABIAEAIIAAABIAAABIgCAAgAEGgbIAAgFIAPAAIAAAFgAElguIgCgBQgBgBAAAAQAAAAAAAAQgBAAAAgBQAAAAAAgBIgBgCIABgBIABgBIADAAIAAACIABACIABABIACABIACgBIABgBIABgEIADAAIABABIAAABIAAACIgCADIgDABIgDABgADAguIgDgBIgCgDIAAgCIAAgBIABgBIADAAIAAACIABACIABABIACABIACgBIACgBIAAgCIAAgCIAEAAIAAABIABABIgBACIgBADIgDABIgEABg");
	this.shape_3.setTransform(150.7,242.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(305));

	// know
	this.instance = new lib.know();
	this.instance.parent = this;
	this.instance.setTransform(229,191.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(237).to({_off:false},0).to({alpha:1},7,cjs.Ease.get(1)).wait(53).to({alpha:0},7,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.eko();
	this.instance_1.parent = this;
	this.instance_1.setTransform(229,92.7,1,1,0,0,0,48.3,6.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(74).to({_off:false},0).to({alpha:1},7,cjs.Ease.get(1)).wait(216).to({alpha:0},7,cjs.Ease.get(1)).wait(1));

	// t4
	this.instance_2 = new lib.t4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(229,125.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(224).to({_off:false},0).to({alpha:1},7,cjs.Ease.get(1)).wait(66).to({alpha:0},7,cjs.Ease.get(1)).wait(1));

	// t3
	this.instance_3 = new lib.t3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(229,125.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(149).to({_off:false},0).to({alpha:1},7,cjs.Ease.get(1)).wait(66).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(75));

	// t2
	this.instance_4 = new lib.t2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(229,134.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(74).to({_off:false},0).to({alpha:1},7,cjs.Ease.get(1)).wait(66).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(150));

	// t1
	this.instance_5 = new lib.t1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(364,116.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:229},13,cjs.Ease.get(1)).wait(59).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(225));

	// p4
	this.instance_6 = new lib.p4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(150,150.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(225).to({_off:false},0).to({alpha:1},7,cjs.Ease.get(1)).wait(65).to({alpha:0},7,cjs.Ease.get(1)).wait(1));

	// p1
	this.instance_7 = new lib.p1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(150,150.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(305));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.5,124.5,423.8,251);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/300x250_atlas_.png", id:"300x250_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;