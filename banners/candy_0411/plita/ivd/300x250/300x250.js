(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x250_atlas_", frames: [[0,0,300,145],[0,147,300,145],[0,294,300,145],[0,588,300,145],[0,441,300,145]]}
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



(lib._3 = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
	this.spriteSheet = ss["300x250_atlas_"];
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


(lib.t5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEYBDIAAgVIhQAAIAAAVIgUAAIAAgpIAKAAIAphaIASAAIApBaIALAAIAAApgAEMAaIgcg+IgbA+IA3AAgANoArQgLgFgHgJQgIgJgDgJQgEgLAAgJQAAgJAEgKQADgKAIgJQAHgIALgFQALgGAOAAQAMAAAKAEQAKAEAHAIQAIAHAFALIgYAAQgCgEgEgDQgEgDgGgCQgFgCgHAAQgLAAgIAGQgJAEgEAJQgFAJAAAJQAAAKAFAJQAFAIAIAFQAJAFALABQAHAAAHgEQAHgDAFgGIAYAAQgEAJgIAIQgHAHgKAEQgKAFgMAAQgPgBgKgFgAIjApQgNgHgHgNQgIgOAAgPQAAgQAIgOQAHgNANgHQANgIARAAQARAAANAIQANAHAIANQAIAOAAAQQAAAPgIAOQgIANgNAHQgNAHgRABQgQgBgOgHgAIugpQgJAFgFAIQgFAJAAAKQAAAKAFAJQAFAJAJAEQAIAFALABQALgBAJgFQAIgFAFgIQAFgJAAgKQAAgKgFgJQgFgIgIgFQgJgFgLAAQgLAAgIAFgAFPApQgNgHgIgNQgIgOAAgPQAAgQAIgOQAIgNANgHQANgIARAAQARAAANAIQANAHAHANQAIAOAAAQQAAAPgIAOQgHANgNAHQgOAHgQABQgRgBgNgHgAFZgpQgIAFgFAIQgFAJAAAKQAAAKAFAJQAFAJAIAEQAJAFALABQALgBAIgFQAJgFAFgIQAFgJAAgKQAAgKgFgJQgFgIgJgFQgIgFgLAAQgLAAgJAFgAgRArQgLgFgHgJQgHgJgEgJQgDgLAAgJQAAgJADgKQAEgKAHgJQAHgIALgFQALgGAOAAQALAAAKAEQAKAEAIAIQAIAHAEALIgXAAQgDgEgEgDQgEgDgFgCQgFgCgHAAQgKAAgJAGQgIAEgFAJQgFAJAAAJQAAAKAFAJQAFAIAJAFQAIAFAKABQAIAAAHgEQAHgDAFgGIAYAAQgFAJgHAIQgIAHgKAEQgJAFgMAAQgOgBgLgFgAolArQgLgFgHgJQgIgJgDgJQgEgLAAgJQAAgJAEgKQADgKAIgJQAHgIALgFQALgGAOAAQAMAAAKAEQAKAEAHAIQAIAHAFALIgYAAQgCgEgEgDQgEgDgGgCQgFgCgHAAQgLAAgIAGQgJAEgEAJQgFAJAAAJQAAAKAFAJQAFAIAIAFQAJAFALA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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t5, new cjs.Rectangle(-141.7,-25.6,283.6,51.4), null);


(lib.t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4, new cjs.Rectangle(-103.5,-25.6,207.1,51.4), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AKNA7IAAguIggAuIgaAAIAhgrQgJgCgHgEQgHgFgFgGQgEgIAAgLIABgKQACgHAFgGQAEgHAJgEQAJgEAPAAIAiAAIAAB1gAJzgiQgFACgCAEQgCAEAAAFQAAAEACAEQACAEAFADQAEACAJAAIANAAIAAgjIgNAAQgJAAgEADgAItA7IAAhSIg1BSIgWAAIAAh1IAWAAIAABSIA1hSIAWAAIAAB1gAG2A7IAAgxIgrAAIAAAxIgWAAIAAh1IAWAAIAAAvIArAAIAAgvIAWAAIAAB1gAEiA7IAAh1IBAAAIAAAVIgqAAIAAAbIAoAAIAAAVIgoAAIAAAbIAqAAIAAAVgACCA7IAAh1IAWAAIAABgIAkAAIAAhgIAWAAIAABgIAkAAIAAhgIAWAAIAAB1gAAvA7IAAh1IBAAAIAAAVIgqAAIAAAbIAoAAIAAAVIgoAAIAAAbIAqAAIAAAVgAgpA7IAAh1IAhAAQANAAAIAEQAJAEAEAGQAEAGACAGIABALQAAAFgCAHQgCAGgEAFQgFAFgIAEQgIADgMAAIgLAAIAAAtgAgTgGIANAAIAGgBQAEgBAEgDQADgDAAgHQAAgIgDgDQgEgDgEgBIgGgBIgNAAgAiiA7IAAh1IBAAAIAAAVIgqAAIAAAbIAoAAIAAAVIgoAAIAAAbIAqAAIAAAVgAjOA7IAAh1IAWAAIAAB1gAkoA7IAAh1IAWAAIAAAtIARAAQAPABAIAFQAJAFAEAIQADAIAAAJQAAALgFAIQgFAIgIAFQgJAEgMAAgAkSAmIARAAQAIAAAFgEQAEgEAAgHQAAgHgEgEQgFgEgIAAIgRAAgAlUA7IAAgxIgrAAIAAAxIgWAAIAAh1IAWAAIAAAvIArAAIAAgvIAWAAIAAB1gAnBA7IAAhXIgfBXIgTAAIgfhXIAABXIgWAAIAAh1IAdAAIAhBZIAhhZIAeAAIAAB1gAqCA7IAOgeIguhXIAbAAIAfA+IAbg+IAYAAIg1B1g");
	this.shape.setTransform(-0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-78.9,-12.7,157.8,25.6), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-131.5,-25.6,263,51.4), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AucA1QgOgIgIgOQgIgNAAgSQAAgQAIgOQAIgOAOgIQAOgJASAAQASAAAOAJQAOAIAIAOQAIAOAAAQQAAASgIANQgIAOgOAIQgOAIgSABQgSgBgOgIgAuRgiQgJAFgFAJQgFAKgBAKQABALAFAJQAFAJAJAGQAJAFAMAAQAMAAAJgFQAJgGAFgJQAFgJAAgLQAAgKgFgKQgFgJgJgFQgJgFgMgBQgMABgJAFgAIQA4QgJgFgGgIQgFgJABgMIAWAAIABAHQACAEAEADQAEADAHAAQAHAAAEgCQAEgCABgEQACgDAAgEIgBgIQgCgDgEgCQgDgDgGAAIgMAAIAAgUIAKAAQAHAAAEgEQADgDAAgGQAAgHgDgEQgEgEgHAAQgGAAgEAEQgEACAAAGIgWAAIAAAAQAAgJAEgHQAEgIAIgEQAIgFANAAQAKAAAIAEQAIAEAFAHQAEAIAAAKQAAAJgFAGQgEAHgIAEQAGABAEADQAFADADAGQADAGAAAJQAAALgFAHQgFAIgKAEQgJAEgMABQgLgBgJgEgATfA7IAAhSIg0BSIgWAAIAAh2IAWAAIAABTIA0hTIAWAAIAAB2gARpA7IAAhSIg1BSIgWAAIAAh2IAWAAIAABTIA1hTIAWAAIAAB2gAP6A7IgghXIggBXIgZAAIAvh2IATAAIAvB2gAOHA7IgMgfIgsAAIgMAfIgYAAIAxh2IASAAIAxB2gANyAHIgNgiIgNAiIAaAAgAMEA7IAAhgIgVAAIAAgWIBBAAIAAAWIgWAAIAABggALNA7IAAhSIg1BSIgWAAIAAh2IAWAAIAABTIA1hTIAWAAIAAB2gAHXA7IAAhSIg0BSIgWAAIAAh2IAWAAIAABTIA0hTIAWAAIAAB2gAFDA7IgMgfIgsAAIgMAfIgYAAIAxh2IASAAIAxB2gAEuAHIgNgiIgNAiIAaAAgADIA7Igkg0IAAA0IgWAAIAAh2IAWAAIAAA0IAkg0IAbAAIgtA7IAtA7gABiA7IAAhSIg1BSIgWAAIAAh2IAWAAIAABTIA1hTIAWAAIAAB2gAgUA7IAAgyIgrAAIAAAyIgWAAIAAh2IAWAAIAAAwIArAAIAAgwIAVAAIAAB2gAh6A7IgcgpIgcApIgaAAIApg7Igpg7IAaAAIAcApIAcgpIAZAAIgpA7IApA7gAkVA7IAAh2IBAAAIAAAWIgqAAIAAAbIAoAAIAAAUIgoAAIAAAcIAqAAIAAAVgAlMA7IAAhgIgWAAIAAgWIBCAAIAAAWIgWAAIAABggAmpA7IAAguIggAuIgaAAIAhgsQgJgBgHgFQgHgEgFgHQgEgIAAgKIABgLQACgGAFgHQAEgGAJgEQAJgFAPAAIAiAAIAAB2gAnDgjQgFADgCAEQgCAEAAAEQAAAFACAEQACAEAFACQAEADAJAAIANAAIAAgjIgNAAQgJAAgEACgAoCA7IgMgfIgrAAIgMAfIgZAAIAyh2IARAAIAyB2gAoWAHIgOgiIgNAiIAbAAgAqAA7IAAgyIgrAAIAAAyIgWAAIAAh2IAWAAIAAAwIArAAIAAgwIAWAAIAAB2gArtA7IAAgyIgrAAIAAAyIgWAAIAAh2IAWAAIAAAwIArAAIAAgwIAWAAIAAB2gAvaA7IgcgpIgcApIgZAAIAog7Igog7IAZAAIAcApIAcgpIAaAAIgpA7IApA7gAx7A7IAOgeIguhYIAbAAIAfA+IAbg+IAYAAIg1B2gAy6A7Igkg0IAAA0IgWAAIAAh2IAWAAIAAA0IAkg0IAbAAIgtA7IAtA7g");
	this.shape.setTransform(1.9,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-125,-25.6,253.9,51.4), null);


(lib.p5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._5();
	this.instance.parent = this;
	this.instance.setTransform(-150,-73);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p5, new cjs.Rectangle(-150,-73,300,145), null);


(lib.p4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._4();
	this.instance.parent = this;
	this.instance.setTransform(-150,-73);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p4, new cjs.Rectangle(-150,-73,300,145), null);


(lib.p3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._3();
	this.instance.parent = this;
	this.instance.setTransform(-150,-73);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p3, new cjs.Rectangle(-150,-73,300,145), null);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-73);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2, new cjs.Rectangle(-150,-73,300,145), null);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(-150,-73);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1, new cjs.Rectangle(-150,-73,300,145), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("AqTBeQgvgrAbhAQAag5BOghQBYglCOAAQAgAAAcAEIAlAFIAPADIgUAkQgsgMgmAAQhIAAg7AVQhQAcgMA5QgHAiAYAeQAgAnBFgEQAWgBAqgOQAzgRAdgYIBIg/QAHgFAHgEQAGgCAIgBIAHAAIBNAAIAZBqIAwhpIBVAAIAxBRIAlhRIBOAAIhFCUIhQAAIgzhWIgmBWIgxAAIAAABIhcAAIgEgbIhUAAIgcAZIg3AAQg/AXhUAAQh4AAg0gvgAjhA/IAxgBIgEgpgAG6CFIAygxIgyhxIBNAAIAVA8IA/g9IBXAAIibCaQgFAFgEABQgFACgNABgAEgB3Ih+AAIBEiUIB+AAQA9AAAWAcQASAXgOAeQgNAbggASQgpAWhCAAIgDAAgAEHBSIAWAAQAaAAAUgGQAggKAGgYQAGgUgUgJQgOgGgWAAIgXAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-68.9,-14.1,138,28.2), null);


(lib.legal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADSBRIgGgDIgDgFIgDgGIADgBIADgBQAAAAAAABQABAAAAAAQAAAAAAAAQABABAAAAIABADIACACIADACIAGACIAFgCIADgCIACgDIABgEIAAgEQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAgBgBAAIgEgDIgHAAIAAgFIAGgBQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAgBIACgDIABgDIgBgFIgCgCIgDgCIgEgBIgEABIgDACIgCACIgBADIgCACIgCABIgEgBIACgHIAEgGIAGgCIAHgBIAGABQAEABACABIADAFIABAGIAAAFIgCAEIgDADIgEACQAFABADADQADADAAAGQAAAEgCADQgBAEgDACQgCACgEABIgHABIgIgBgACkBRIgFgBIgDgBIgDgDIACgEIACgBIACABIACABIAEACIAEABIAFgCIAEgCQABAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBIABgGIgBgEIgCgEIgEgCIgFgBIgKABIgEgBIAEgbIAcAAIAAADIgBADIgEABIgRAAIgDAOIAIgBQAFABADABIAGAEQACACABADIABAHQAAAFgBAEQgCADgDADQgCACgEABQgEACgEAAIgFgBgABGBQQgEgCgCgDQgDgEgCgFQgBgFAAgIQAAgIABgFQACgGADgDQACgEAEgCIAIgBQAFgBAEACIAGAGQADADACAGQABAFAAAIQAAAIgBAFQgCAFgDAEIgGAFQgEACgFAAIgIgCgABJAfIgEAEIgDAHIgBALIABAKIADAIIAEADIAFACIAFgCQADgBABgCIADgIIABgKIgBgLQgBgEgCgDQgBgDgDgBIgFgBIgFABgAgWBQQgEgCgCgDQgDgEgCgFQgBgFAAgIQAAgIABgFQACgGADgDQACgEAEgCIAIgBQAFgBAEACIAFAGQADADACAGQABAFAAAIQAAAIgBAFQgCAFgDAEIgFAFQgEACgFAAIgIgCgAgTAfIgEAEIgDAHIgBALIABAKIADAIIAEADIAFACIAFgCQADgBABgCIADgIIABgKIgBgLQgBgEgCgDQgBgDgDgBIgFgBIgFABgAhEBRIgGgEIgEgGQgBgEAAgFQAAgDACgFQABgEAEgFIAOgTIACgBIACgBIAHAAIgRAVIgBACIgCACIAFgCIAFgBQADAAADABIAGAEQACACABADQACADAAAEQAAAFgCADIgEAGIgGADIgIACIgIgBgAhBA1IgEACIgCAFIgBADIABAGIACADIAEADIAFABIAFgBIAEgDIACgDIABgFIgBgFQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAIgEgCIgFgBIgFABgAktBQQgEgCgCgDQgDgEgCgFQgBgFAAgIQAAgIABgFQACgGADgDQACgEAEgCIAIgBQAFgBAEACIAGAGQADADACAGQABAFAAAIQAAAIgBAFQgCAFgDAEIgGAFQgEACgFAAIgIgCgAkqAfIgEAEIgDAHIgBALIABAKIADAIIAEADIAFACIAFgCQADgBABgCIADgIIABgKIgBgLQgBgEgCgDQgBgDgDgBIgFgBIgFABgApDBQQgFgCgEgEQgDgEgDgGQgCgFAAgGQAAgGACgGQADgFADgEIAJgHQAFgBAHAAQAGAAAFABQAGADADAEQAEAEACAFQACAGAAAGQAAAGgCAFQgCAGgEAEQgDAEgGACQgFACgGAAQgHAAgFgCgAo/AgQgEABgDADIgEAHQgBAEAAAGQAAAFABAEIAEAHQADADAEABQADACAFAAQAEAAAEgCQAEgBACgDQADgDABgEQACgEAAgFQAAgGgCgEQgBgEgDgDQgCgDgEgBQgEgBgEAAQgFAAgDABgAqLBRIgEgBIgEgBIgDgDIACgEIACgBIACABIADABIADACIAFABIAFgCIAEgCQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBIABgGIAAgEIgDgEIgEgCIgFgBIgJABIgFgBIAFgbIAbAAIAAADIgBADIgDABIgSAAIgCAOIAIgBQAEABADABIAGAEQADACABADIABAHQAAAFgCAEQgBADgDADQgDACgEABQgDACgFAAIgFgBgAroBQQgEgCgDgDQgDgEgBgFQgCgFAAgIQAAgIACgFQABgGADgDQADgEAEgCIAIgBQAEgBAEACIAHAGQADADABAGQACAFAAAIQAAAIgCAFQgBAFgDAEIgHAFQgEACgEAAIgIgCgArlAfIgEAEIgDAHIgBALIABAKIADAIIAEADIAFACIAFgCQACgBACgCIADgIIABgKIgBgLQgBgEgCgDQgCgDgCgBIgFgBIgFABgAtzBRIgFgBIgDgBIgDgDIACgEIACgBIACABIACABIAEACIAE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gGIABgKIABgNIAaAAIAAAkIAIAAIAAARIgBABIgBABgAHsgeIASAAIAAgaIgNAAgAszgJIAAgOIgtAAIAAAMIgBABIgCABIgFAAIAAgUIAGAAIADgCIACgEIACgHIACgJIABgNIABgRIAjAAIAAA0IAJAAIAAASIgBABIgCABgAtQg5IgCAMIgDAJIgDAHIAbAAIAAgtIgSAAIgBARgAE5gKIAAg2IAFAAQAAABAAAAQABAAAAAAQAAAAAAAAQABABAAAAIAAAFIAGgGQAEgBAEAAQAEgBACACIAFAEQACACABAEIABAJIgBAJIgDAHIgGAEQgDACgEAAIgGgCIgFgDIAAARgAFGg4IgFADIAAAUIAEAEIAFABQAGAAADgFQADgDAAgIIgBgGIgCgFIgDgCIgEgBQgEAAgCACgASsgMIAAgOIgiAAIAAALIgBACIgBABIgFAAIAAgTIACAAIADgBIACgCIACgEIACgGIACgKIABgMIAaAAIAAAjIAHAAIAAAQIAAADIgCAAgASSghIASAAIAAgaIgOAAgARggOIAAgBIABgBIABgBIABgCIABgBIABgDIAAAAIgCgBIgCgBIgBgBIAAgCQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIACAAIACACIABACIAAACIgBAEIgBAEIgDADIgDAEgADXgOIAAgBIAAgBIABgBIACgCIABgBIABgDIgBAAIgCgBIgBgBIgBgBIgBgCQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIADAAIABACIABACIAAACIAAAEIgCAEIgCADIgDAEgAivgOIAAgBIABgBIABgBIABgCIABgBIABgDIAAAAIgCgBIgCgBIgBgBIAAgCQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIACAAIACACIABACIAAACIgBAEIgBAEIgDADIgDAEgATrgYQgEgBgDgCIgEgFIgBgGQAAgGADgEQADgDAFgCQgEgCgDgDQgCgDAAgFIABgGQABgDADgBIAFgEIAHgBIAIABIAFAEIAEAEIABAGQAAAFgCADQgDADgEACQAFACADADQADAEAAAGQAAADgCADQgBADgDACQgCACgEABIgIACIgHgCgATugxIgEACIgCADIgBAFIABAEIACAEIAEACIAEABIAFgBIAEgCIACgEIABgEIgBgFIgCgDIgEgCIgFAAIgEAAgATuhKIgDABIgCADIgBAEIABAEIACADIADADIAEAAIAFAAIADgDIACgDIAAgEIAAgEIgCgDIgDgBIgFgBIgEABgAS7gXIgCgBIgBgCIAAgCIAAgBIABgCIACgCIACAAIACAAIACACIABACIAAABIAAACIgBACIgCABIgCABIgCgBgAMvgYQgDgBgCgDQgDgCgBgFQgCgDAAgGQAAgEACgEQABgDACgDIAGgFQAEgBAFAAIAHABIAGAEIgCADIgBABIAAAAIgCAAIgCgCIgCgBIgEAAIgFABIgEACIgCAGIgBAFIABAHQAAABABAAQAAABAAABQAAAAABABQAAAAAAAAIAEAEIAFABIAEgBIADgBIACgBIABgCIACACIACADIgDACIgEACIgEABIgFABIgHgCgAJigYIgGgEIgEgHQgCgDAAgGQAAgEACgEQABgEADgCQACgEAEgBIAIgBIAIABQAEABACAEQADACABAEIABAIIgBAJIgEAHIgGAEIgIACQgEAAgEgCgAJhg3QgDAFAAAGQAAAIADADQADAFAGAAQAGAAADgFQADgDAAgIQAAgGgDgFQgDgDgGAAQgGAAgDADgAHGgXIgEgBIgEgCIgDgCIACgDIABgCIACACIACABIADABIAEABIAEgBIADgBIABgDIABgDQAAgCgCgCQgDgCgFAAIgEAAIAAgEIAEAAQAFAAACgCQABgBAAAAQABgBAAAAQAAgBABAAQAAgBAAgBIgBgCIgCgBIgCgCIgEAAIgEAAIgDABIgCABIgBABIgBAAIgBgBIgBgEIAFgDIAIgBIAHAAIAFADIACAEIABADIAAADIgBADIgCACIgEABQAEACACACQACACAAAEIgBAGIgDADIgGACIgFACIgEgBgAGdgYIgGgEIgEgHQgCgEAAgFQAAgFACgDIAEgGQACgDAEgCQADgBAFAAIAGABQADABADACQACADABADQACAEAAAEIgBACIgBABIgbAAIABAHQABACACACQAAAAABABQAAAAAAABQABAAAAAAQABAAAAABIAGABIAEgBIADgBIADgBIABgCIACACIACADIgDACIgEACIgFABIgEABQgEAAgEgCgAGdg4QgDADgBAFIAWAAIgBgEIgCgDIgDgDIgEAAQgFAAgDACgAFvgYIgGgEIgEgHQgBgDAAgGQAAgEABgEQACgEACgCQADgEADgBIAJgBIAIABQADABADAEQACACACAEIABAIIgBAJIgEAHIgGAEIgIACQgFAAgEgCgAFvg3QgDAFAAAGQAAAIADADQADAFAGAAQAFAAADgFQADgDAAgIQAAgGgDgFQgDgDgFAAQgGAAgDADgAC0gXIgEgCIgCgDIgBgFIABgFQABgCADgCIAIgDIAMgBIAAgDQAAgEgCgDQgCgCgEAAIgEABIgDABIgDABIgCABIgBgBIgBAAIgBgDQADgDAEgCQAEgBAFAAQADgBADACQADABABACIADAFIABAGIAAAaIgDAAIgCgBQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAIgBgDIgDACIgDACIgEABIgEABIgEgBgAC+goIgGABIgDADIgBACIABADIABACIACABIADAAIADAAIADgBIACgBIADgDIAAgIIgIABgABBgYQgDgBgDgDQgCgCgCgFQgBgDAAgGQAAgEABgEQABgDADgDIAGgFQAEgBAEAAIAIABIAGAEIgCADIgBABIgBAAIgBAAIgCgCIgDgBIgDAAIgFABIgEACIgCAGIgBAFIABAHQAAABAAAAQAAABAAABQABAAAAABQAAAAABAAIAEAEIAEABIAFgBIACgBIACgBIACgCIABACIACADIgDACIgEACIgEABIgEABIgHgCgAAUgYIgGgEIgEgHQgCgDAAgGQAAgEACgEQABgEADgCQACgEAEgBIAIgBIAIABQAEABACAEQADACABAEIABAIIgBAJIgEAHIgGAEIgIACQgEAAgEgCgAATg3QgDAFAAAGQAAAIADADQADAFAGAAQAGAAADgFQADgDAAgIQAAgGgDgFQgDgDgGAAQgGAAgDADgAhkgXIgCgBIgBgCIAAgCIAAgBIABgCIACgCIACAAIACAAIABACIABACIABABIgBACIgBACIgBABIgCABIgCgBgAlegXIgEgBIgEgCIgDgCIACgEIACgBIACAAIADACIADACIAFAAIAFgBIAEgDQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAIABgGIAAgFIgDgEIgEgCIgFgBIgJACIgFgCIAFgbIAbAAIAAAEIgBADIgDABIgSAAIgCAOIAIgBQAEAAADACIAGADQADADABADIABAGQAAAFgCAEQgBADgDADQgDADgEABQgDACgFAAIgFgBgAoNgXIgCgBIgBgCIAAgCIAAgBIABgCIACgCIACAAIACAAIACACIABACIAAABIAAACIgBACIgCABIgCABIgCgBgApLgXIgCgBIgBgCIAAgCIAAgBIABgCIACgCIACAAIACAAIACACIABACIAAABIAAACIgBACIgCABIgCABIgCgBgAqbgXIgCgBIgBgCIAAgCIAAgBIABgCIACgCIACAAIACAAIACACIABACIAAABIAAACIgBACIgCABIgCABIgCgBgArEgZQgFgCgEgDQgDgEgCgGQgCgFAAgHQAAgGACgGQACgFAEgEQADgEAGgCQAFgCAGAAQAGAAAFACQAFACADAEIgDADIAAABIgBAAIgCgBIgDgCIgEgBIgGgBQgEAAgEABQgEACgCADIgEAHQgCAEAAAFQAAAGACADQABAFADACQADADADACQAEABAEABIAEgBIAEAAIADgDIADgCIABAAIABAAIABAAIADAEQgDAEgGACQgFACgHABQgGgBgFgCgAx0gZQgFgCgEgDQgDgEgDgGQgCgFAAgHQAAgGACgGQADgFADgEIAJgGQAFgCAHAAQAGAAAFACQAGACADAEQAEAEACAFQACAGAAAGQAAAHgCAFQgCAGgEAEQgDADgGACQgFACgGABQgHgBgFgCgAxwhJQgEACgDADIgEAHQgBAEAAAFQAAAGABADIAEAHQADADAEACQADABAFABQAEgBAEgBQAEgCACgDQADgCABgFQACgDAAgGQAAgFgCgEQgBgEgDgDQgCgDgEgCQgEgBgEAAQgFAAgDABgAy0gZQgFgCgEgDQgDgEgDgGQgCgFAAgHQAAgGACgGQADgFADgEIAJgGQAFgCAHAAQAGAAAFACQAGACADAEQAEAEACAFQACAGAAAGQAAAHgCAFQgCAGgEAEQgDADgGACQgFACgGABQgHgBgFgCgAywhJQgEACgDADIgEAHQgBAEAAAFQAAAGABADIAEAHQADADAEACQADABAFABQAEgBAEgBQAEgCACgDQADgCABgFQACgDAAgGQAAgFgCgEQgBgEgDgDQgCgDgEgCQgEgBgEAAQgFAAgDABgAz0gZQgFgCgEgDQgDgEgDgGQgCgFAAgHQAAgGACgGQADgFADgEIAJgGQAFgCAHAAQAGAAAFACQAGACADAEQAEAEACAFQACAGAAAGQAAAHgCAFQgCAGgEAEQgDADgGACQgFACgGABQgHgBgFgCgAzwhJQgEACgDADIgEAHQgBAEAAAFQAAAGABADIAEAHQADADAEACQADABAFABQAEgBAEgBQAEgCACgDQADgCABgFQACgDAAgGQAAgFgCgEQgBgEgDgDQgCgDgEgCQgEgBgEAAQgFAAgDABgARPgXIAAgbIAAgCIAAgCIgBACIAAABIgBACIgDADIgDADIgDAGIgJAMIgCABIgBABIgFAAIAAgpIAIAAIAAAcIAAABIAAACIABgDIABgBIACgDIADgEIAEgFIAJgNIABgBIACgBIAEAAIAAApgAPlgXIAAgDIAAgCIABgBIASgSIAFgFIADgEIACgEIAAgFIAAgEIgCgDIgEgCIgEAAIgDAAIgEACIgCACIgBAEIgCACIgCAAIgEgBIACgHIAEgFIAGgDIAHgBIAHABIAFADQADACABADQABADAAAEIgBAGIgCAFIgEAFIgFAFIgOAPIADgBIADAAIATAAIACABIAAABIAAAFgAPAgXIAAgbIAAgCIAAgCIgBACIAAABIgBACIgDADIgDADIgDAGIgJAMIgCABIgBABIgFAAIAAgpIAIAAIAAAcIAAABIAAACIABgDIABgBIACgDIADgEIAEgFIAJgNIABgBIACgBIAEAAIAAApgAOSgXIAAgbIAAgCIAAgCIgBACIAAABIgBACIgDADIgDADIgDAGIgJAMIgCABIgBABIgFAAIAAgpIAIAAIAAAcIAAABIAAACIABgDIABgBIACgDIADgEIAEgFIAJgNIABgBIACgBIAEAAIAAApgANrgXIgDgBIgCgCIgIgMIgCgCIgDgBIgFAAIAAASIgHAAIAAgpIAHAAIAAASIAEAAIADgBIACgCIAIgNIACgBIACgBIAGAAIgKAQIgCADIgDAAIADACIADADIAKARgAMUgXIAAgTIgTAAIAAATIgHAAIAAgpIAHAAIAAARIATAAIAAgRIAIAAIAAApgALngXIAAgbIAAgCIABgCIgBACIgBABIgBACIgCADIgDADIgEAGIgJAMIgBABIgCABIgEAAIAAgpIAHAAIAAAcIAAABIAAACIACgDIAAgBIADgDIADgEIADgFIAKgNIABgBIABgBIAFAAIAAApgAIqgXIAAg6IARAAQAGABAEABQAEABACADQADACABADQACAEAAADQAAAEgCAEIgEAGIgHAEQgEABgFAAIgJAAIAAAVgAIygzIAJAAIAGgBIAEgCIADgEIAAgFIAAgEIgDgEIgEgCIgGgBIgJAAgAEkgXIAAgzIgcAAIAAAzIgIAAIAAg6IAtAAIAAA6gACIgXIAAgpIAPAAIAGABIAFACIACAEIABADIAAADIgCADIgCACIgEABQAFACACACQADACAAAEIgBAGIgEADIgEACIgGABgACPgcIAJAAQADgBADgBQACgCAAgDIgBgCIgBgCIgDgCIgDgBIgJAAgACPguIAIAAIADAAIACgCIACgCIAAgDIAAgCIgBgBIgDgCIgDAAIgIAAgAB8gXIgDgBIgCgCIgHgMIgDgCIgDgBIgEAAIAAASIgIAAIAAgpIAIAAIAAASIAEAAIACgBIADgCIAIgNIABgBIACgBIAGAAIgKAQIgCADIgDAAIAEACIACADIALARgAgIgXIAAgpIAAgCIAAgCIgTAjIgCACIgBAAIgBAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBIgUgkIAAADIAAACIAAApIgHAAIAAg6IAGAAIACABIABABIATAiIACAFIABgCIABgDIATgiIABgBIACgBIAGAAIAAA6gAiHgXIAAgpIAaAAIAAAGIgTAAIAAAjgAjYgXIASgXIABgCIACgCQgCACgDABIgGABIgGgBIgFgEQgCgCgBgDQgCgDAAgEIACgHIAEgGIAGgEQADgBAEAAQAFAAADABQADABADADQACADABADQACAEAAADIgBAGIgBADIgCAFIgDAEIgOAUIgBABIgDABgAjPhKIgEACIgCAEIgBAEQAAAGADADQADADAFgBIAFAAIAEgCIACgEIABgFIgBgEIgDgEIgDgCIgFAAIgEAAgAkGgXIAAgGIAMAAIAAgmIAAgEIgKAJIgBAAIgBAAIgBAAIgBgBIgCgCIARgQIAGAAIAAA0IAMAAIAAAGgAkigXIAAgPIgZAAIgBAAIgBgBIgBgFIAcglIAHAAIAAAlIAIAAIAAAFIAAABIgBAAIgHAAIAAAPgAk2gsIAUAAIAAgWIAAgDIABgDgAmSgXIAAgGIAMAAIAAgmIAAgEIgJAJIgCAAIgBAAIAAAAIgBgBIgCgCIARgQIAGAAIAAA0IALAAIAAAGgAnAgXIAAgGIAMAAIAAgmIAAgEIgKAJIgBAAIgBAAIgBAAIgBgBIgCgCIARgQIAGAAIAAA0IAMAAIAAAGgAo4gXIAAg6IAjAAIAAAHIgbAAIAAAzgApigXIAAgaIgeAAIAAAaIgIAAIAAg6IAIAAIAAAaIAeAAIAAgaIAJAAIAAA6gAr8gXIAAgoIABgDIAAgFIgCAEIgBADIgaAmIgCACIgCABIgGAAIAAg6IAIAAIAAApIAAADIAAAEIABgDIACgDIAagnIABgCIADgBIAGAAIAAA6gAt4gXIAAgaIgeAAIAAAaIgIAAIAAg6IAIAAIAAAaIAeAAIAAgaIAJAAIAAA6gAurgXIgCgBIgBgBIgFgNIgaAAIgFANIgBABIgCABIgGAAIAXg6IAIAAIAXA6gAvBhGIgBADIgJAWIAVAAIgIgWIgBgDIgBgDIgBADgAvjgXIgCgBIgCgCIgPgUIgCgCIgDgBIgHAAIAAAaIgIAAIAAg6IAIAAIAAAaIAGAAIACAAIABgBIABgBIACgBIAOgUIACgCIACgBIAHAAIgRAYQgCADgDABIADACIADAEIARAYgAnvgdIgBgBIAAgDIAGgKIABgBIABAAIgBgBIgBAAIgGgLIAAgCIABgBIACgCIAKAQIAAABIgKAQgAn7gdIgBgBIAAgDIAGgKIABgBIABAAIgBgBIgBAAIgGgLIAAgCIABgBIACgCIAKAQIAAABIgKAQgAwkgsIAAgBIAKgQIADACIABABIAAACIgHALIgBABIABABIAHAKIAAADIgBABIgDABgAwwgsIAAgBIAKgQIADACIABABIgBACIgGALIgBABIABABIAGAKIABADIgBABIgDABgAQVgsIAAgGIAUAAIAAAGgARAhGIgDgCIgDgCIgBgEIABgCIABgBIAFAAIAAAEIABACIACABIACABIADgBIACgBIABgCIAAgEIAFAAIABABIAAACIgBAEIgCACIgEACIgFAAIgFAAgAOxhGIgDgCIgDgCIgBgEIABgCIABgBIAFAAIAAAEIABACIACABIACABIADgBIACgBIABgCIAAgEIAFAAIABABIAAACIgBAEIgCACIgEACIgFAAIgFAAg");
	this.shape.setTransform(128.9,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal, new cjs.Rectangle(-2,0,259.5,24.2), null);


(lib.bg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("AyqaBMAAAg0BMAlVAAAMAAAA0Bg");
	this.shape.setTransform(120,170,1.004,1.021);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg2, new cjs.Rectangle(0,0,240,340), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,240,400), null);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AXXTdMgutAAAMAAAgm5MAutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(380));

	// legal
	this.instance = new lib.legal();
	this.instance.parent = this;
	this.instance.setTransform(116.3,234.2,1,1,0,0,0,111.1,10.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(380));

	// p5
	this.instance_1 = new lib.p5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,177.5,0.9,0.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(300).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},6,cjs.Ease.get(1)).wait(67).to({scaleX:0.9,scaleY:0.9,alpha:0},6,cjs.Ease.get(1)).wait(1));

	// t5
	this.instance_2 = new lib.t5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(160,83.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(300).to({_off:false},0).to({x:150,alpha:1},6,cjs.Ease.get(1)).wait(67).to({x:140,alpha:0},6,cjs.Ease.get(1)).wait(1));

	// p4
	this.instance_3 = new lib.p4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150,177.5,0.9,0.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(225).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},6,cjs.Ease.get(1)).wait(67).to({scaleX:0.9,scaleY:0.9,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(75));

	// t4
	this.instance_4 = new lib.t4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(160,83.7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(225).to({_off:false},0).to({x:150,alpha:1},6,cjs.Ease.get(1)).wait(67).to({x:140,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(75));

	// p3
	this.instance_5 = new lib.p3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150,177.5,0.9,0.9);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(150).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},6,cjs.Ease.get(1)).wait(67).to({scaleX:0.9,scaleY:0.9,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(150));

	// t3
	this.instance_6 = new lib.t3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(160,83.7);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(150).to({_off:false},0).to({x:150,alpha:1},6,cjs.Ease.get(1)).wait(67).to({x:140,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(150));

	// p2
	this.instance_7 = new lib.p2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(150,177.5,0.9,0.9);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(75).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},6,cjs.Ease.get(1)).wait(67).to({scaleX:0.9,scaleY:0.9,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(225));

	// t2
	this.instance_8 = new lib.t2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(160,83.7);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(75).to({_off:false},0).to({x:150,alpha:1},6,cjs.Ease.get(1)).wait(67).to({x:140,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(225));

	// p1
	this.instance_9 = new lib.p1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(150,177.5,0.9,0.9);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:1,scaleY:1,alpha:1},6,cjs.Ease.get(1)).wait(67).to({scaleX:0.9,scaleY:0.9,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(300));

	// t1
	this.instance_10 = new lib.t1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(160,83.7);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:150,alpha:1},6,cjs.Ease.get(1)).wait(67).to({x:140,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(300));

	// logo
	this.instance_11 = new lib.logo();
	this.instance_11.parent = this;
	this.instance_11.setTransform(151.7,31.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(380));

	// bg2
	this.instance_12 = new lib.bg2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(150,155,1.25,0.559,0,0,0,120,170);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(380));

	// bg
	this.bg = new lib.bg();
	this.bg.parent = this;
	this.bg.setTransform(150,125,1.25,0.625,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(380));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.5,124.5,301,251);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/300x250_atlas_.jpg", id:"300x250_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;