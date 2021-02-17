(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"320x100_atlas_", frames: [[0,404,240,200],[0,606,240,200],[0,202,240,200],[0,0,240,200],[0,808,240,200]]}
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
	this.spriteSheet = ss["320x100_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["320x100_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["320x100_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["320x100_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
	this.spriteSheet = ss["320x100_atlas_"];
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


(lib.text2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ADgBLIAAgwIAEAAIACACIAAADIAGgEQACgCAEAAIAGACQACABACACIADAGIABAHIgBAIIgDAGIgFADQgDACgEAAIgFgBIgEgDIAAAQgADrAhIgEAEIAAARIADADIAFABQAFAAACgDQADgEAAgHIgBgFIgCgFIgCgCIgEgBQgDABgCABgAk/BLIAAgwIAEAAIACACIAAADIAGgEQACgCAEAAIAGACQACABACACIADAGIABAHIgBAIIgDAGIgFADQgDACgEAAIgFgBIgEgDIAAAQgAk0AhIgEAEIAAARIADADIAFABQAFAAACgDQADgEAAgHIgBgFIgCgFIgCgCIgEgBQgDABgCABgAEQA9QgEAAgCgDQgCgCgBgEIgBgIIABgHQABgDACgDQACgCAEgBIAHgCIAHACIAFADIAEAGIABAHIgBAIIgEAGQgCADgDAAQgDACgEAAQgEAAgDgCgAEPAjQgDADAAAGQAAAHADAEQACADAGAAQAFAAACgDQADgEAAgHQAAgGgDgDQgCgDgFgBQgGABgCADgADBA+IgEgCIgCgCIgBgFIACgEIADgDIAHgDIAKgBIAAgCQAAgEgBgCQgCgCgEgBIgDABIgDABIgCACIgCAAIgBAAIgBgBIgBgCQADgDAEgBIAHgCIAGACIADACQACACABACIABAGIAAAWIgDAAIgCAAIgBgBIAAgDIgDACIgDABIgDABIgEABIgDgBgADJAwIgFABIgCABIgBADIAAADIABABIACABIACAAIADAAIADgBIACgBIACgCIAAgHIgHABgAgKA9QgDAAgDgDIgDgGIgBgIIABgHIADgGQACgCADgBQADgCAEAAIAFACIAFADIADAEIABAHIAAACIgBABIgXAAIABAFIACAFIAEACIAEABIADgBIADgBIACgBIACAAIABAAIACADIgDACIgEABIgDABIgDABQgEAAgDgCgAgLAiQgCACgBAFIASAAIAAgEIgCgDIgCgCIgEgBQgEABgDACgAhAA+IAAgEIACAAIACAAIACgCIADgEIACgFIABgIIABgMIAXAAIAAAjIgHAAIAAgeIgKAAIgCAMIgCAIIgCAGIgDADIgEABIgDABQgBAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAgAh+A9QgEAAgCgDQgCgCgBgEIgBgIIABgHQABgDACgDQACgCAEgBIAHgCIAHACIAFADIAEAGIABAHIgBAIIgEAGQgCADgDAAQgDACgEAAQgEAAgDgCgAh/AjQgDADAAAGQAAAHADAEQACADAGAAQAFAAACgDQADgEAAgHQAAgGgDgDQgCgDgFgBQgGABgCADgAjKA9QgDAAgCgDQgDgCgBgEIgBgIIABgHQABgDADgDQACgCADgBIAHgCIAHACIAGADIADAGIABAHIgBAIIgDAGQgDADgDAAQgDACgEAAQgEAAgDgCgAjLAjQgCADAAAGQAAAHACAEQADADAFAAQAFAAADgDQACgEAAgHQAAgGgCgDQgDgDgFgBQgFABgDADgAFRA+IAAgWIABgCIAAgDIgMAVIgBABIgBABIgBAAIgBgBIgBgBIgMgVIAAADIABACIAAAWIgGAAIAAgjIAFAAIABAAIABACIALARIABACIABACIAAgCIABgCIALgRIABgCIABAAIAFAAIAAAjgACtA+IAAgeIgRAAIAAAeIgGAAIAAgjIAdAAIAAAjgAB0A+IAAgOIgCAAIgCAAIgBABIgBAAIgBABIgHAKIgCACIgCAAIgFAAIAKgNQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAIgFgCIgDgCIgBgDIgBgDIABgEQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAEgCIAGgBIANAAIAAAjgABrAgIgCABIgBACIAAADQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAQACABADAAIAFAAIAAgMIgGAAIgDABgABRA+IAAgXIAAgBIAAgCIAAABIgBABIgBACIgCACIgCAEIgDADIgJAMIAAABIgCAAIgEAAIAAgjIAHAAIAAAXIAAACIgBABIAAAAIAAAAIACgCIABgBIABgCIADgEIADgEIAIgLIABgBIACgBIAEAAIAAAjgAApA+IAAgQIgRAAIAAAQIgGAAIAAgjIAGAAIAAAOIARAAIAAgOIAGAAIAAAjgAheA+IAAgjIANAAIAFABIAEACIADACIAAADIAAADIgBACIgCACIgEACQAEABADACQACACAAADIgBAFIgDADIgEACIgGAAgAhYA6IAHAAQAEAAACgBQAAgBABgBQAAAAAAgBQABAAAAgBQAAAAAAgBIgBgCIgBgCIgCgBIgEAAIgHAAgAhYAqIAHAAIACAAIADgCIABgBIAAgCIAAgDIgBgBIgCgBIgDgBIgHAAgAigA+IAAgeIgOAAIAAgFIAiAAIAAAFIgOAAIAAAegAjvA+IAAgjIAXAAIAAAFIgQAAIAAAegAj/A+IAAgXIAAgBIAAgCIgBABIAAABIgBACIgCACIgDAEIgDADIgIAMIgBABIgBAAIgEAAIAAgjIAGAAIAAAXIAAACIAAABIAAAAIAAAAIABgCIABgBIACgCIADgEIADgEIAIgLIABgBIABgBIAEAAIAAAjgAlPA+IAAgeIgRAAIAAAeIgGAAIAAgjIAdAAIAAAjgAD8gJIAAgMIgeAAIAAgjIAGAAIAAAfIARAAIAAgfIAGAAIAAAfIAHAAIAAAOIgBACIgBAAgABygJIAGgNIgPgiIAGAAIABAAIABABIAJAWIABADIABgBIAAgCIAJgWIABgBIABAAIAGAAIgUAuIgBABIgCAAgABNgJIAAgLIgIgCIgGgDQgCgDgCgDQgBgDAAgFQAAgDABgEIAEgFIAGgEQAEgBAEgBIAAgNIAGAAIAAANQAFABADABIAGAEIAEAFQABAEAAADQAAAFgBADIgEAGIgGADQgDACgFAAIAAALgABTgZIAFgBIAEgDIADgEIABgGIgBgEIgDgFIgEgCIgFgBgABEgwQgDAEAAAFQAAAGADAEQADADAGABIAAgaQgGAAgDADgAingJIAAgMIgdAAIAAALIgBABIgBAAIgEAAIAAgQIABAAIACgBIADgCIACgDIABgGIACgIIABgLIAWAAIAAAfIAHAAIAAAOIgBACIgBAAgAi5gdIALAAIAAgUIgLAAgAE5gWQgDgBgDgCIgDgGIgBgIIABgHIADgFQACgDADgBQADgBAEgBIAGABIAFAEIADAEIABAIIAAABIgBABIgYAAIABAGIACADIAEADIAEABIAEgBIADgBIACgBIACgBIABABIACADIgDACIgEABIgDABIgEABQgEAAgDgCgAE4gxQgCADgBAEIATAAIAAgEIgCgDIgDgCIgEAAQgEAAgDACgAARgVIgFgEIgEgGIgBgIIABgHIADgFQADgDADgBQADgBAEgBIAHABIAFAEIgCADIgBAAIAAAAIgCAAIgBgBIgCgBIgEAAIgEABIgDACIgCAEIgBAFIABAHIACADIADADIAEABIAEAAIACgCIACgBIABgBIABABIACADIgDACIgDABIgDABIgEABIgGgBgAh7gVIAAgEIACAAIADAAIACgCIACgEIACgFIACgJIABgLIAXAAIAAAjIgHAAIAAgeIgLAAIgBAMIgCAIIgDAGIgDADIgDABIgEABQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAgAiTgWQgDgBgCgCIgEgGIgBgIIABgHIADgFQADgDADgBQADgBAEgBIAGABIAEAEIAEAEIABAIIgBABIgBABIgXAAIABAGIACADIADADIAFABIAEgBIACgBIADgBIABgBIABABIACADIgDACIgDABIgEABIgEABQgEAAgDgCgAiTgxQgDADAAAEIATAAIgBgEIgCgDIgCgCIgEAAQgFAAgCACgAjmgWQgEgBgCgCQgCgDgBgDIgBgIIABgHQABgDACgCQACgDAEgCIAHgBIAHABIAFAFIAEAFIABAHIgBAIIgEAGQgCACgDABQgDACgEAAQgEAAgDgCgAjngwQgDAEAAAFQAAAHADADQACAEAGAAQAFAAACgEQADgDAAgHQAAgFgDgEQgCgEgFABQgGgBgCAEgAFugVIAAgXIAAgCIAAgBIgBABIAAABIgBACIgCACIgDADIgDAFIgIALIgBABIgBAAIgEAAIAAgjIAGAAIAAAYIAAABIAAABIAAAAIAAAAIABgBIABgCIACgDIADgDIADgEIAIgMIABgBIABAAIAEAAIAAAjgAEggVIAAgXIAAgCIAAgBIAAABIgBABIgBACIgCACIgCADIgDAFIgJALIAAABIgCAAIgEAAIAAgjIAHAAIAAAYIAAABIgBABIAAAAIAAAAIACgBIABgCIABgDIADgDIADgEIAIgMIABgBIACAAIAEAAIAAAjgADTgVIgCAAIgCgCIgHgKIgCgDIgDgBIgDAAIAAAQIgHAAIAAgjIAHAAIAAAPIADAAIADAAIABgCIAIgLIABgCIACAAIAFAAIgJAOIgCACIgCABIADABIACADIAJAOgACpgVIAAgQIgRAAIAAAQIgGAAIAAgjIAGAAIAAAOIARAAIAAgOIAGAAIAAAjgAgTgVIgBAAIgBgBIgJgOIAAACIgBABIgIALIAAABIgCAAIgGAAIANgSIgMgRIAHAAIABABIAJANIAAgBIABgBIAHgLIABgBIABAAIAGAAIgMARIAMASgAg6gVIAAgPIgDAAIgBABIgCABIAAAAIgBABIgIAKIgBACIgDAAIgEAAIAKgNQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAgBIgEgBIgDgCIgCgDIgBgDIABgDQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAIAEgCIAGgBIAMAAIAAAjgAhDgzIgCACIgCABIAAACQAAABAAABQABABAAAAQAAABAAAAQABABAAAAQACABAEAAIAFAAIAAgLIgGAAIgDAAgAj+gVIAAgWIAAgDIAAgCIgMAVIAAABIgCABIAAAAIgBgBIgBgBIgMgVIAAACIAAADIAAAWIgGAAIAAgjIAFAAIACAAIABABIALASIAAACIABACIABgCIABgCIAKgSIABgBIACAAIAFAAIAAAjgAlUgVIAAgjIANAAIAFAAIAEACIADADIAAADIAAADIgBADIgCACIgEABQAEABADABQACACAAAEIgBAEIgDAEIgEACIgGAAgAlOgZIAHAAQAEAAACgCQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAgBIgBgCIgBgCIgCgBIgEgBIgHAAgAlOgpIAHAAIACAAIADgBIABgCIAAgDIAAgCIgBgBIgCgBIgDAAIgHAAgAlqgyIAAgIIAAAAIAAgCIgBACIgGADIgCgDIAGgDIABAAIABgBIgCgBIgGgEIACgCIAGADIABACIAAgBIAAgCIAAgHIADAAIAAAHIAAACIAAAAIACgBIAGgDIABADIgGADIgBABIgBAAIACABIAGADIgBADIgGgDIgBgBIgBgBIAAACIAAAIgAFhg9IgDgCIgCgDIgBgDIAAgBIABAAIAEAAIABACIAAACIACABIACAAIADAAIABgBIABgCIAAgCIAEAAIABAAIABABIgBADIgCADIgDACIgFAAIgEAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.text2, new cjs.Rectangle(-37.2,-7.4,74.5,14.9), null);


(lib.t5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("AgPBZIAAgfIAfAAIAAAfgAgPAsIAAiEIAfAAIAACEg");
	this.shape.setTransform(89.4,9.9,0.75,0.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A7E0").s().p("AA9BZIAAiEIgvCEIgbAAIgviEIAACEIghAAIAAixIAtAAIAwCHIAxiHIAtAAIAACxg");
	this.shape_1.setTransform(78.6,9.9,0.75,0.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00A7E0").s().p("AgvBZIAAixIBeAAIAAAgIg9AAIAAApIA7AAIAAAfIg7AAIAAApIA9AAIAAAgg");
	this.shape_2.setTransform(65.8,9.9,0.75,0.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00A7E0").s().p("AAoBZIAAh8IhPB8IghAAIAAixIAhAAIAAB8IBPh8IAhAAIAACxg");
	this.shape_3.setTransform(54.3,9.9,0.75,0.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00A7E0").s().p("Ag5BZIAAixIArAAQATAAAPAGQAbAMAAAdQAAAXgUALQAPAFAHAKQAJAMgBAPQABA2hGAAgAgYA5IAVAAQAcAAAAgWQAAgXgcAAIgVAAgAgYgTIAPAAQAXAAAAgTQAAgSgXAAIgPAAg");
	this.shape_4.setTransform(42.7,9.9,0.75,0.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00A7E0").s().p("AgPBZIAAiRIghAAIAAggIBhAAIAAAgIggAAIAACRg");
	this.shape_5.setTransform(33.4,9.9,0.75,0.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00A7E0").s().p("AhAA9QgXgbAAgiQAAgiAXgbQAageArgBQAcABAVAOQAXAOAKAZIglAAQgRgVgbgBQgaAAgRASQgRASAAAYQAAAZARARQASASAZABQAbAAAQgVIAlAAQgLAYgVAOQgVAOgdAAQgqABgaggg");
	this.shape_6.setTransform(22.7,10,0.75,0.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00A7E0").s().p("Ag6BZIAAixIAhAAIAABFIAZAAQAfAAAPARQANANAAAXQAAAZgQAPQgRAPgaAAgAgZA5IAZAAQANAAAGgGQAHgGAAgLQAAgKgHgGQgGgGgNAAIgZAAg");
	this.shape_7.setTransform(10.8,9.9,0.75,0.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00A7E0").s().p("AAxBZIgxiDIgvCDIglAAIBHixIAcAAIBGCxg");
	this.shape_8.setTransform(-1.3,9.9,0.75,0.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00A7E0").s().p("AhCBBQgbgaAAgnQAAgmAbgbQAbgbAnAAQAnAAAcAbQAbAbAAAmQAAAngbAaQgcAbgnAAQgmAAgcgbgAgqgqQgSASAAAYQAAAZASASQARASAZAAQAaAAARgSQASgTAAgYQAAgYgSgSQgRgSgaAAQgZAAgRASg");
	this.shape_9.setTransform(-15.4,10,0.75,0.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00A7E0").s().p("Ag5BZIAAixIArAAQAUAAAOAGQAbAMAAAdQAAAXgTALQANAFAIAKQAJAMAAAPQAAAXgPAOQgSARglAAgAgXA5IAVAAQAbAAAAgWQAAgXgbAAIgVAAgAgXgTIAPAAQAWAAAAgTQAAgSgWAAIgPAAg");
	this.shape_10.setTransform(-27.8,9.9,0.75,0.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00A7E0").s().p("AhCBCQgbgbAAgmQAAgnAbgbQAbgaAnAAQAoAAAbAaQAbAbAAAnQAAAmgbAbQgbAagoAAQgmAAgcgagAgqgqQgSASAAAYQAAAZASASQARARAZAAQAaAAASgRQARgSAAgZQAAgZgSgRQgRgSgaABQgZAAgRARg");
	this.shape_11.setTransform(-40.9,10,0.75,0.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00A7E0").s().p("ABABqIAAgiIh/AAIAAAiIghAAIAAhCIARAAIBCiRIAcAAIBBCRIARAAIAABCgAgrAoIBXAAIgshjg");
	this.shape_12.setTransform(-55.9,11.2,0.75,0.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00A7E0").s().p("AghBZIAVgtIhFiEIAoAAIAuBeIApheIAkAAIhRCxg");
	this.shape_13.setTransform(-66.8,9.9,0.75,0.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00A7E0").s().p("AhAA9QgXgbAAgiQAAgiAXgbQAbgeAqAAQAcAAAWAOQAWAOALAaIgmAAQgRgWgcgBQgZABgRARQgRASAAAYQAAAZASASQARARAZABQAbAAAPgVIAnAAQgMAYgUAOQgWAOgcAAQgqAAgbgfg");
	this.shape_14.setTransform(-84.2,10,0.75,0.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00A7E0").s().p("AAzBZIgSguIhBAAIgSAuIgkAAIBKixIAZAAIBKCxgAgTALIAnAAIgUgzg");
	this.shape_15.setTransform(66.7,-12.6,0.75,0.75);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00A7E0").s().p("AA9BZIAAiEIgvCEIgbAAIgviEIAACEIghAAIAAixIAsAAIAxCHIAxiHIAtAAIAACxg");
	this.shape_16.setTransform(51.7,-12.6,0.75,0.75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00A7E0").s().p("AhCBCQgbgbAAgnQAAgmAbgbQAcgaAmAAQAoAAAbAaQAbAbAAAmQAAAngbAbQgbAbgoAAQgmAAgcgbgAgqgqQgSARAAAZQAAAZASASQARARAZAAQAaAAASgRQARgTAAgYQAAgZgSgRQgRgRgagBQgZABgRARg");
	this.shape_17.setTransform(35.9,-12.5,0.75,0.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00A7E0").s().p("ABABqIAAgiIh/AAIAAAiIghAAIAAhCIARAAIBCiRIAbAAIBCCRIARAAIAABCgAgqAoIBWAAIgshjg");
	this.shape_18.setTransform(21,-11.3,0.75,0.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00A7E0").s().p("AgvBZIAAixIBfAAIAAAgIg+AAIAAApIA7AAIAAAfIg7AAIAAApIA+AAIAAAgg");
	this.shape_19.setTransform(4.8,-12.6,0.75,0.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00A7E0").s().p("AgQBZIAAiRIggAAIAAggIBhAAIAAAgIghAAIAACRg");
	this.shape_20.setTransform(-3.7,-12.6,0.75,0.75);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00A7E0").s().p("Ag6BZIAAixIAhAAIAABFIAZAAQAeAAAQARQANAOAAAWQAAAZgRAPQgQAPgaAAgAgZA5IAZAAQAMAAAHgGQAHgGAAgLQAAgKgHgGQgHgGgMAAIgZAAg");
	this.shape_21.setTransform(-11.9,-12.6,0.75,0.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00A7E0").s().p("Ag5BZIAAixIArAAQAUAAAOAGQAbAMAAAdQAAAYgUAKQAPAFAIAKQAIAMAAAPQAAA2hGAAgAgYA5IAWAAQAbAAAAgWQAAgXgbAAIgWAAgAgYgTIAQAAQAWAAAAgTQAAgSgWAAIgQAAg");
	this.shape_22.setTransform(-22.4,-12.6,0.75,0.75);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00A7E0").s().p("AhBBCQgcgbABgmQgBgnAcgbQAagaAnAAQAoAAAaAaQAcAbAAAnQAAAmgcAbQgbAagnABQgngBgagagAgrgqQgRASABAYQgBAZASARQARASAZAAQAaAAARgSQARgSAAgYQAAgZgRgRQgRgSgaAAQgZAAgSASg");
	this.shape_23.setTransform(-35.5,-12.5,0.75,0.75);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00A7E0").s().p("AgQBZIAAiRIggAAIAAggIBhAAIAAAgIghAAIAACRg");
	this.shape_24.setTransform(-46.4,-12.6,0.75,0.75);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00A7E0").s().p("AhCBCQgbgbAAgmQAAgnAbgaQAbgcAnABQAogBAbAcQAbAaAAAnQAAAmgbAbQgbAagoAAQgmAAgcgagAgqgqQgSARAAAZQAAAZASARQARATAZAAQAaAAASgTQARgRAAgZQAAgZgSgRQgRgSgaABQgZgBgRASg");
	this.shape_25.setTransform(-57.3,-12.5,0.75,0.75);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00A7E0").s().p("AgrBZIAAixIBXAAIAAAgIg2AAIAACRg");
	this.shape_26.setTransform(-68.2,-12.6,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t5, new cjs.Rectangle(-90.8,-19.4,181.4,38.6), null);


(lib.t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("AsaBfIAAgZIhgAAIAAAZIgZAAIAAgxIANAAIAxhsIAWAAIAxBsIANAAIAAAxgAspAuIghhKIghBKIBCAAgAHQBDQgNgHgIgKQgJgKgEgNQgEgMAAgLQAAgLAEgMQAEgMAJgKQAIgKAOgHQANgGARAAQAOAAAMAEQAMAFAJAJQAJAJAGANIgcAAQgDgEgFgEQgFgEgGgCQgHgCgIAAQgNAAgKAGQgKAGgGAKQgGALAAALQAAAMAGALQAGAKALAGQAKAGANABQAJAAAIgEQAIgEAHgIIAcAAQgFAMgJAJQgJAJgMAEQgMAFgOABQgSgBgNgGgABBBAQgQgJgJgQQgKgPAAgUQAAgSAKgQQAJgQAPgJQAQgJAUAAQAUAAAQAJQAQAJAJAQQAJAQABASQgBAUgJAPQgJAQgQAJQgQAJgUABQgUgBgPgJgABNgiQgKAGgGAKQgGAKAAAMQAAANAGAKQAGAKAKAGQAKAGANABQAOgBAKgGQAKgGAGgKQAGgLAAgMQAAgMgGgKQgGgKgKgGQgKgGgOAAQgNAAgKAGgApwBAQgQgJgJgQQgJgPAAgUQAAgSAJgQQAJgQAQgJQAQgJAUAAQAUAAAQAJQAQAJAJAQQAJAQAAASQAAAUgJAPQgKAQgPAJQgQAJgUABQgUgBgQgJgApkgiQgKAGgGAKQgGAKAAAMQAAANAGAKQAGAKAKAGQALAGANABQANgBAKgGQALgGAFgKQAGgLAAgMQAAgMgGgKQgGgKgKgGQgKgGgNAAQgNAAgLAGgANVBGIgOgiIgxAAIgOAiIgbAAIA3iEIAUAAIA4CEgAM9AMIgPgmIgPAmIAeAAgALLBGIgqg6IAAA6IgZAAIAAiEIAZAAIAAA6IAqg6IAdAAIgyBBIAyBDgAJKBGIAAhsIgYAAIAAgYIBKAAIAAAYIgZAAIAABsgAF/BGIAAhcIg7BcIgZAAIAAiEIAZAAIAABdIA7hdIAZAAIAACEgAD6BGIAAgyIgWAAIgRgCQgIgBgIgGQgFgEgDgGQgCgEgBgGIgBgKIAAgrIAZAAIAAAnIAAAIQABAEAEAEQADACAEABIAIABIAWAAIAAg7IAZAAIAACEgAg1BGIAAgzIgkAzIgdAAIAlgxQgLgBgIgFQgIgGgEgIQgFgIAAgLIABgNQACgHAFgHQAFgHAKgFQAKgFARAAIAnAAIAACEgAhTgjQgFADgCAEQgCAFAAAFQAAAFACAEQACAFAFADQAGABAJABIAPAAIAAgnIgPAAQgJAAgGADgAiYBGIgOgiIgxAAIgOAiIgbAAIA3iEIAUAAIA4CEgAiwAMIgPgmIgPAmIAeAAgAkmBGIAAg4IgxAAIAAA4IgZAAIAAiEIAZAAIAAA2IAxAAIAAg2IAYAAIAACEgAmhBGIAAhcIg7BcIgZAAIAAiEIAZAAIAABdIA7hdIAZAAIAACEgAr0BGIAAiEIAgAAIAIAAIAMACQAGACAGAEQAGADAEAHQAEAHAAAKQAAAIgDAGIgGAIIgFAEQALACAFAJQAGAIAAAMQABAKgFAJQgEAJgMAGQgMAGgVAAgArbAuIAQAAIAEAAIAHgCQAEgBADgEQADgDAAgGIgBgHQgCgEgEgDQgFgEgJAAIgQAAgArbgLIALAAQAIAAAEgCQAEgDABgDIABgFQgBgHgDgDQgDgDgEAAIgHgBIgLAAgAN5gbIgIAQIgLgFIAJgRIgSACIAAgNIASABIgJgQIALgFIAIAQIAIgQIAKAGIgJAPIASgBIAAANIgTgCIAKAQIgKAGgAnOhJQgHgDgEgFQgEgGgCgHIAVAAQABAEADADQAEACAEAAQAEAAADgCQAEgDABgEIAUAAQgBAHgEAGQgEAFgHADQgHAEgJAAQgJAAgHgEg");
	this.shape.setTransform(1.9,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4, new cjs.Rectangle(-89.7,-10.2,183.2,19.1), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("ABuC7QgPgJgKgQQgJgPAAgUQAAgTAJgQQAJgQAQgJQAQgJAUAAQAUAAAQAJQAQAJAJAQQAJAQABATQgBAUgJAPQgJAQgQAJQgQAJgUABQgUgBgQgJgAB6BYQgJAGgGAKQgHAKABANQgBANAHAKQAGAKAJAGQALAGANABQAOgBAKgGQAKgGAFgKQAHgLgBgMQABgNgHgKQgGgKgJgGQgKgGgOAAQgNAAgLAGgAmnC+QgOgHgIgKQgIgKgFgNQgEgMAAgLQAAgMAEgMQAFgMAIgKQAIgKAOgHQANgGARAAQAOAAAMAEQANAFAIAJQAKAJAFANIgcAAQgDgEgFgEQgEgEgHgCQgGgCgJAAQgMAAgLAGQgKAGgFAKQgHALAAAMQAAAMAHALQAFAKALAGQAKAGANABQAJAAAIgEQAJgEAGgIIAdAAQgGAMgJAJQgJAJgMAEQgLAFgPABQgSgBgMgGgAFeDBIAAhkIgjBkIgVAAIgjhkIAABkIgZAAIAAiFIAhAAIAmBmIAlhmIAhAAIAACFgAgRDBIAAiFIAkAAQAQAAAKAFQAJAEAFAHQAEAHACAHQACAHgBAFQABAGgDAHQgBAHgGAGQgFAHgJAEQgJAEgPAAIgMAAIAAAygAAHB3IAOAAIAIgBQAFgBAEgEQAEgEAAgIQAAgIgEgDQgEgEgFgBIgIgBIgOAAgAg6DBIgNgiIgyAAIgNAiIgbAAIA3iFIAUAAIA3CFgAhRCHIgPgnIgPAnIAeAAgAjHDBIAAhtIgxAAIAABtIgZAAIAAiFIBiAAIAACFgAGrBfIgIAQIgLgFIAJgRIgSACIAAgNIASABIgJgQIALgFIAIAQIAIgQIAKAGIgJAPIASgBIAAANIgTgCIAKAQIgKAGgAgwhCQgQgKgIgPQgKgQAAgTQAAgUAKgPQAIgQAQgJQAQgKAUAAQATAAAQAKQAQAJAJAQQAJAPAAAUQAAATgJAQQgKAPgPAKQgQAJgTAAQgUAAgQgJgAgjimQgLAGgGALQgFAKgBAMQABANAFAKQAGALALAGQAKAGANAAQAMAAAKgGQALgGAGgLQAFgKAAgNQAAgMgFgKQgHgLgKgGQgKgGgMAAQgNAAgKAGgAkJhCQgQgKgIgPQgKgQAAgTQAAgUAKgPQAIgQAQgJQAQgKAUAAQAUAAAQAKQAQAJAJAQQAJAPAAAUQAAATgJAQQgKAPgPAKQgQAJgUAAQgUAAgQgJgAj8imQgLAGgFALQgHAKAAAMQAAANAHAKQAFALALAGQAKAGANAAQANAAALgGQAKgGAGgLQAFgKAAgNQAAgMgFgKQgHgLgJgGQgLgGgNAAQgNAAgKAGgAKSg8IAAiFIBHAAIAAAXIguAAIAAAfIAsAAIAAAYIgsAAIAAAfIAuAAIAAAYgAJgg8IAAheIg6BeIgaAAIAAiFIAaAAIAABdIA6hdIAZAAIAACFgAHcg8IAAg4IgxAAIAAA4IgZAAIAAiFIAZAAIAAA1IAxAAIAAg1IAYAAIAACFgAE0g8IAAiFIBIAAIAAAXIguAAIAAAfIAsAAIAAAYIgsAAIAAAfIAuAAIAAAYgAEMg8IgkhjIgkBjIgcAAIA1iFIAWAAIA1CFgABKg8IAAiFIAhAAIAIAAIAMACQAGABAGAEQAGAEAEAHQAEAGAAALQAAAIgDAFIgGAIIgGAEQALAEAGAIQAGAJAAALQAAAKgEAJQgFAKgLAGQgMAFgVABgABkhUIAQAAIAEAAIAHgCQAEgCADgDQADgEgBgGIAAgHQgCgEgFgDQgEgDgJAAIgQAAgABkiOIALAAQAIAAADgDQAFgDABgDIAAgFQAAgGgDgDQgDgDgEgBIgHgBIgLAAgAiFg8IAAhuIgZAAIAAgXIBKAAIAAAXIgYAAIAABugAl0g8IAAiFIBEAAIAAAXIgrAAIAABugAmlg8IAAheIg7BeIgYAAIAAiFIAYAAIAABdIA7hdIAaAAIAACFgApeg8IAAiFIAmAAQAQAAAJAEQAKAFAFAHQAEAGACAHQACAHAAAFQAAAGgCAIQgCAHgFAGQgGAGgJAEQgKAEgOAAIgNAAIAAAzgApFiHIAPAAIAJAAQAEgCAEgDQAEgEAAgIQAAgIgEgEQgEgEgEgBIgJgBIgPAAgAqPg8IAAhuIgwAAIAABuIgZAAIAAiFIBiAAIAACFg");
	this.shape.setTransform(0.8,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-72.1,-19.4,145.8,39.3), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("AAcDGIAAgZIhfAAIAAAZIgaAAIAAgxIAOAAIAwhtIAWAAIAxBtIAMAAIAAAxgAANCVIghhLIggBLIBBAAgAjMCnQgRgKgIgPQgKgQAAgTQAAgUAKgPQAJgQAPgJQAQgKAUAAQAUAAAQAKQAQAJAJAQQAJAPAAAUQAAATgJAQQgKAPgPAKQgQAJgUAAQgUAAgPgJgAjBBDQgJAGgHALQgFAKAAAMQAAANAFAKQAHALAJAGQALAGANAAQANAAAKgGQALgGAFgLQAGgKABgNQgBgMgGgKQgFgLgLgGQgKgGgNAAQgNAAgLAGgAF0CtIAAheIg7BeIgZAAIAAiFIAZAAIAABdIA7hdIAZAAIAACFgAD4CtIglhjIgkBjIgbAAIA1iFIAVAAIA1CFgABBCtIAAiFIBIAAIAAAXIgvAAIAAAfIAsAAIAAAYIgsAAIAAAfIAvAAIAAAYgAkaCtIAAhkIgjBkIgUAAIgkhkIAABkIgZAAIAAiFIAiAAIAlBlIAlhlIAiAAIAACFgAAhgkIAAgZIhYAAIAAiFIAZAAIAABtIAwAAIAAhtIAYAAIAABtIAQAAIAAAxgADnhDQgPgKgKgPQgJgQAAgTQAAgUAJgPQAKgQAPgJQAQgKAUAAQAUAAAQAKQAQAJAJAQQAJAPABAUQgBATgJAQQgJAPgQAKQgQAJgUAAQgUAAgQgJgAD0inQgLAGgFALQgHAKAAAMQAAANAHAKQAFALALAGQAKAGANAAQAOAAAKgGQAKgGAGgLQAFgKAAgNQAAgMgFgKQgGgLgKgGQgKgGgOAAQgNAAgKAGgAmfhDQgQgKgJgPQgKgQAAgTQAAgUAKgPQAJgQAPgJQAQgKAUAAQAVAAAPAKQAQAJAJAQQAKAPAAAUQAAATgKAQQgJAPgQAKQgPAJgVAAQgTAAgQgJgAmTinQgKAGgGALQgGAKAAAMQAAANAGAKQAGALAKAGQAKAGANAAQAOAAAKgGQALgGAFgLQAGgKAAgNQAAgMgGgKQgGgLgKgGQgKgGgOAAQgNAAgKAGgALvg9IAAiFIBHAAIAAAXIguAAIAAAfIAsAAIAAAYIgsAAIAAAfIAuAAIAAAYgAK+g9IAAiFIAYAAIAACFgAJXg9IAAiFIAaAAIAAAzIATAAQAQAAAKAGQAKAGAEAJQAEAKAAAKQAAAMgGAJQgFAJgKAGQgKAFgNAAgAJxhVIATAAQAJAAAGgFQAEgEAAgIQAAgIgEgFQgGgEgJAAIgTAAgAIng9IAAg4IgxAAIAAA4IgZAAIAAiFIAZAAIAAA1IAxAAIAAg1IAYAAIAACFgAGsg9IAAg4IgwAAIAAA4IgZAAIAAiFIAZAAIAAA1IAwAAIAAg1IAZAAIAACFgACbg9IAAheIg8BeIgZAAIAAiFIAZAAIAABdIA8hdIAYAAIAACFgAheg9IgPgjIgwAAIgOAjIgcAAIA4iFIAUAAIA4CFgAh2h4IgPgmIgPAmIAeAAgAkkg9IAAiFIAhAAIAHAAIAMACQAHABAFAEQAHAEADAHQAFAGAAALQAAAIgEAFIgFAIIgGAEQALAEAGAIQAFAJABALQAAAKgFAJQgEAKgMAGQgMAFgUABgAkLhVIAQAAIAEAAIAIgCQAEgCACgDQADgEAAgGIgBgHQgCgEgEgDQgFgDgJAAIgQAAgAkLiPIALAAQAJAAADgDQAEgDABgDIABgFQgBgGgCgDQgEgDgDgBIgIgBIgLAAgAnsg9IAAg4IgxAAIAAA4IgYAAIAAiFIAYAAIAAA1IAxAAIAAg1IAYAAIAACFgApng9IAAg4IgwAAIAAA4IgZAAIAAiFIAZAAIAAA1IAwAAIAAg1IAZAAIAACFgArhg9IAAheIg7BeIgZAAIAAiFIAZAAIAABdIA7hdIAZAAIAACFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-82.2,-19.8,164.4,39.6), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("AAmBDIgNgjIgxAAIgNAjIgcAAIA4iFIATAAIA4CFgAgOAIIAdAAIgPgmg");
	this.shape.setTransform(84.7,11.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A7E0").s().p("AATBDIgpg7IAAA7IgZAAIAAiFIAZAAIAAA6IApg6IAdAAIgyBCIAyBDg");
	this.shape_1.setTransform(72.9,11.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00A7E0").s().p("AAeBDIAAhdIg7BdIgZAAIAAiFIAZAAIAABdIA7hdIAZAAIAACFg");
	this.shape_2.setTransform(60.1,11.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00A7E0").s().p("AAYBDIAAg4IgvAAIAAA4IgZAAIAAiFIAZAAIAAA2IAvAAIAAg2IAZAAIAACFg");
	this.shape_3.setTransform(47.3,11.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00A7E0").s().p("AAgBDIggguIgfAuIgdAAIAvhDIgvhCIAdAAIAfAvIAggvIAdAAIguBCIAuBDg");
	this.shape_4.setTransform(35,11.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00A7E0").s().p("AgjBDIAAiFIBHAAIAAAYIguAAIAAAfIAsAAIAAAXIgsAAIAAAfIAuAAIAAAYg");
	this.shape_5.setTransform(24.3,11.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00A7E0").s().p("AgLBDIAAhtIgZAAIAAgYIBJAAIAAAYIgYAAIAABtg");
	this.shape_6.setTransform(15.6,11.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00A7E0").s().p("AAUBDIAAg0IgBAAIgiA0IgdAAIAlgyQgQgCgJgKQgLgKAAgRQAAgQAIgLQANgRAcAAIAnAAIAACFgAgTgWQAAAUAZAAIAOAAIAAgoIgOAAQgZAAAAAUg");
	this.shape_7.setTransform(1.9,11.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00A7E0").s().p("AAmBDIgNgjIgxAAIgNAjIgcAAIA4iFIATAAIA4CFgAgOAIIAdAAIgPgmg");
	this.shape_8.setTransform(-9.9,11.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00A7E0").s().p("AAYBDIAAg4IgvAAIAAA4IgZAAIAAiFIAZAAIAAA2IAvAAIAAg2IAZAAIAACFg");
	this.shape_9.setTransform(-22.8,11.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00A7E0").s().p("AAZBDIAAg4IgwAAIAAA4IgZAAIAAiFIAZAAIAAA2IAwAAIAAg2IAYAAIAACFg");
	this.shape_10.setTransform(-35.1,11.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00A7E0").s().p("AgxAxQgVgUAAgdQAAgcAVgUQAUgVAdAAQAeAAAVAVQATAUABAcQgBAdgUAUQgUAVgeAAQgdAAgUgVgAgggfQgNANAAASQAAATANANQANAOATAAQATAAAOgOQAMgNABgTQgBgSgMgNQgNgOgUAAQgSAAgOAOg");
	this.shape_11.setTransform(-48.8,11.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00A7E0").s().p("AAgBDIggguIgeAuIgeAAIAvhDIgvhCIAeAAIAeAvIAggvIAdAAIguBCIAuBDg");
	this.shape_12.setTransform(-62.5,11.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00A7E0").s().p("AgZBDIAQgiIg0hjIAeAAIAjBGIAehGIAcAAIg9CFg");
	this.shape_13.setTransform(-75,11.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00A7E0").s().p("AATBDIgpg7IAAA7IgZAAIAAiFIAZAAIAAA6IApg6IAdAAIgyBCIAyBDg");
	this.shape_14.setTransform(-86.5,11.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00A7E0").s().p("AAUBDIAAg0IgjA0IgdAAIAlgxQgQgCgJgLQgLgKAAgRQAAgQAIgLQANgRAcAAIAnAAIAACFgAgTgWQAAAUAYAAIAPAAIAAgoIgPAAQgYAAAAAUg");
	this.shape_15.setTransform(60.7,-11.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00A7E0").s().p("AAmBDIgNgjIgxAAIgNAjIgcAAIA4iFIATAAIA4CFgAgOAIIAdAAIgPgmg");
	this.shape_16.setTransform(48.9,-11.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00A7E0").s().p("AASBDIgog7IAAA7IgZAAIAAiFIAZAAIAAA6IAog6IAeAAIgxBCIAxBDg");
	this.shape_17.setTransform(37,-11.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00A7E0").s().p("AgwAuQgRgUAAgaQAAgZARgUQAUgYAgAAQAVAAAQALQARALAIATIgcAAQgOgRgUAAQgSAAgNAOQgNAOAAARQAAATANANQAOAOARAAQAVAAAMgQIAcAAQgSAogsAAQgfAAgUgYg");
	this.shape_18.setTransform(24,-11.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00A7E0").s().p("AAYBDIAAg4IgvAAIAAA4IgZAAIAAiFIAZAAIAAA2IAvAAIAAg2IAZAAIAACFg");
	this.shape_19.setTransform(10.7,-11.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00A7E0").s().p("AAUBDIAAg0IgjA0IgdAAIAlgxQgQgCgJgLQgLgKAAgRQAAgQAIgLQAMgRAdAAIAnAAIAACFgAgTgWQAAAUAZAAIAOAAIAAgoIgOAAQgZAAAAAUg");
	this.shape_20.setTransform(-1.1,-11.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00A7E0").s().p("AgrBDIAAiFIAZAAIAAA0IATAAQAXAAALANQAKAKAAARQgBASgMALQgMAMgTAAgAgSArIATAAQATAAAAgRQAAgIgGgFQgFgEgIAAIgTAAg");
	this.shape_21.setTransform(-11.1,-11.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00A7E0").s().p("AAkBDIgkhiIgkBiIgbAAIA1iFIAVAAIA1CFg");
	this.shape_22.setTransform(-23.3,-11.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00A7E0").s().p("AAmBDIgOgjIgwAAIgNAjIgcAAIA4iFIATAAIA4CFgAgOAIIAdAAIgPgmg");
	this.shape_23.setTransform(-36.5,-11.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00A7E0").s().p("AgMBDIAAhtIgYAAIAAgYIBJAAIAAAYIgZAAIAABtg");
	this.shape_24.setTransform(-46.2,-11.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00A7E0").s().p("AAeBDIAAhdIg6BdIgaAAIAAiFIAaAAIAABdIA6hdIAYAAIAACFg");
	this.shape_25.setTransform(-56.7,-11.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-91.3,-18.1,182.6,36.3), null);


(lib.pic5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._5();
	this.instance.parent = this;
	this.instance.setTransform(-120,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic5, new cjs.Rectangle(-120,-100,240,200), null);


(lib.pic4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._4();
	this.instance.parent = this;
	this.instance.setTransform(-120,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic4, new cjs.Rectangle(-120,-100,240,200), null);


(lib.pic3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AyvPoIAA/PMAlfAAAIAAfPg");
	mask.setTransform(-4,0);

	// Слой 1
	this.instance = new lib._3();
	this.instance.parent = this;
	this.instance.setTransform(-120,-100);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic3, new cjs.Rectangle(-120,-100,236,200), null);


(lib.pic2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(-120,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic2, new cjs.Rectangle(-120,-100,240,200), null);


(lib.pic1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(-120,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic1, new cjs.Rectangle(-120,-100,240,200), null);


(lib.fff = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYAvIAAhdIAxAAIAAARIggAAIAAAWIAfAAIAAAPIgfAAIAAAWIAgAAIAAARg");
	this.shape.setTransform(21.2,0.4,0.6,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAvIAAhdIAxAAIAAARIggAAIAAAWIAfAAIAAAPIgfAAIAAAWIAgAAIAAARg");
	this.shape_1.setTransform(17.2,0.4,0.6,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARAvIAAgoIghAAIAAAoIgSAAIAAhdIASAAIAAAmIAhAAIAAgmIASAAIAABdg");
	this.shape_2.setTransform(12.6,0.4,0.6,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfAvIAAhdIA2AAIAAARIgkAAIAAATIAOAAQATAAAIAMQAEAHAAAJQAAANgJAIQgIAIgOAAgAgNAeIAOAAQAGAAAEgEQAEgDAAgFQAAgFgDgCQgEgFgHAAIgOAAg");
	this.shape_3.setTransform(7.8,0.4,0.6,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgiAjQgPgOAAgVQAAgTAPgOQAOgPAUAAQAVAAAPAPQANAOAAATQAAAVgNAOQgPAOgVAAQgUAAgOgOgAgWgWQgJAKAAAMQAAANAJAKQAJAJANAAQANAAAKgJQAKgKgBgNQABgMgKgKQgJgJgOAAQgNAAgJAJg");
	this.shape_4.setTransform(2.2,0.4,0.6,0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdAvIAAhdIAaAAQASAAAKAMQAFAHAAALQAAALgHAHQgIAKgSgBIgJAAIAAAkgAgMgFIALAAQAOAAgBgMQABgMgOAAIgLAAg");
	this.shape_5.setTransform(-2.9,0.4,0.6,0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAiA4IAAgSIhDAAIAAASIgRAAIAAgjIAJAAIAihMIAPAAIAiBMIAJAAIAAAjgAgWAVIAtAAIgXg0g");
	this.shape_6.setTransform(-8.4,0.9,0.6,0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgiAjQgPgOAAgVQAAgTAPgOQAOgPAUAAQAVAAAOAPQAOAOABATQgBAVgOAOQgOAOgVAAQgUAAgOgOgAgWgWQgJAKAAAMQAAANAJAKQAKAJAMAAQAOAAAJgJQAKgKgBgNQAAgMgJgKQgJgJgOAAQgMAAgKAJg");
	this.shape_7.setTransform(-14.7,0.4,0.6,0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AARAvIAAhMIghAAIAABMIgSAAIAAhdIBEAAIAABdg");
	this.shape_8.setTransform(-20.5,0.4,0.6,0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00A7E0").s().p("An6CDIAAkFIP1AAIAAEFg");
	this.shape_9.setTransform(0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.3,-7.8,60.8,15.8);


(lib.fdddd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYAvIAAhdIAxAAIAAARIggAAIAAAWIAfAAIAAAPIgfAAIAAAWIAgAAIAAARg");
	this.shape.setTransform(21.2,0.4,0.6,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAvIAAhdIAxAAIAAARIggAAIAAAWIAfAAIAAAPIgfAAIAAAWIAgAAIAAARg");
	this.shape_1.setTransform(17.2,0.4,0.6,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARAvIAAgoIghAAIAAAoIgSAAIAAhdIASAAIAAAmIAhAAIAAgmIASAAIAABdg");
	this.shape_2.setTransform(12.6,0.4,0.6,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfAvIAAhdIA2AAIAAARIgkAAIAAATIAOAAQATAAAIAMQAEAHAAAJQAAANgJAIQgIAIgOAAgAgNAeIAOAAQAGAAAEgEQAEgDAAgFQAAgFgDgCQgEgFgHAAIgOAAg");
	this.shape_3.setTransform(7.8,0.4,0.6,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgiAjQgPgOAAgVQAAgTAPgOQAOgPAUAAQAVAAAPAPQANAOAAATQAAAVgNAOQgPAOgVAAQgUAAgOgOgAgWgWQgJAKAAAMQAAANAJAKQAJAJANAAQANAAAKgJQAKgKgBgNQABgMgKgKQgJgJgOAAQgNAAgJAJg");
	this.shape_4.setTransform(2.2,0.4,0.6,0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdAvIAAhdIAaAAQASAAAKAMQAFAHAAALQAAALgHAHQgIAKgSgBIgJAAIAAAkgAgMgFIALAAQAOAAgBgMQABgMgOAAIgLAAg");
	this.shape_5.setTransform(-2.9,0.4,0.6,0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAiA4IAAgSIhDAAIAAASIgRAAIAAgjIAJAAIAihMIAPAAIAiBMIAJAAIAAAjgAgWAVIAtAAIgXg0g");
	this.shape_6.setTransform(-8.4,0.9,0.6,0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgiAjQgPgOAAgVQAAgTAPgOQAOgPAUAAQAVAAAOAPQAOAOABATQgBAVgOAOQgOAOgVAAQgUAAgOgOgAgWgWQgJAKAAAMQAAANAJAKQAKAJAMAAQAOAAAJgJQAKgKgBgNQAAgMgJgKQgJgJgOAAQgMAAgKAJg");
	this.shape_7.setTransform(-14.7,0.4,0.6,0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AARAvIAAhMIghAAIAABMIgSAAIAAhdIBEAAIAABdg");
	this.shape_8.setTransform(-20.5,0.4,0.6,0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00A7E0").s().p("An6CDIAAkFIP1AAIAAEFg");
	this.shape_9.setTransform(0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.3,-7.8,60.8,15.8);


// stage content:
(lib._320x100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A46nuMAx1AAAIAAPdMgx1AAAg");
	this.shape.setTransform(160,49.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(272));

	// t5
	this.instance = new lib.t5();
	this.instance.parent = this;
	this.instance.setTransform(266,26.5,0.4,0.4,0,0,0,0.1,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(212).to({_off:false},0).to({regX:0,regY:0,scaleX:0.5,scaleY:0.5,alpha:1},6,cjs.Ease.get(1)).wait(47).to({regX:0.1,regY:0.1,scaleX:0.4,scaleY:0.4,alpha:0},6,cjs.Ease.get(1)).wait(1));

	// t4
	this.instance_1 = new lib.t4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(266,26.5,0.4,0.4,0,0,0,0.1,0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(159).to({_off:false},0).to({regX:0,regY:0,scaleX:0.5,scaleY:0.5,alpha:1},6,cjs.Ease.get(1)).wait(47).to({regX:0.1,regY:0.1,scaleX:0.4,scaleY:0.4,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(53));

	// t3
	this.instance_2 = new lib.t3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(266,26.5,0.4,0.4,0,0,0,0.1,0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(106).to({_off:false},0).to({regX:0,regY:0,scaleX:0.5,scaleY:0.5,alpha:1},6,cjs.Ease.get(1)).wait(47).to({regX:0.1,regY:0.1,scaleX:0.4,scaleY:0.4,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(106));

	// t2
	this.instance_3 = new lib.t2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(266,26.5,0.4,0.4,0,0,0,0.1,0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(53).to({_off:false},0).to({regX:0,regY:0,scaleX:0.5,scaleY:0.5,alpha:1},6,cjs.Ease.get(1)).wait(47).to({regX:0.1,regY:0.1,scaleX:0.4,scaleY:0.4,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(159));

	// t1
	this.instance_4 = new lib.t1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(266,26.5,0.4,0.4,0,0,0,0.1,0.1);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:0,regY:0,scaleX:0.5,scaleY:0.5,alpha:1},6,cjs.Ease.get(1)).wait(47).to({regX:0.1,regY:0.1,scaleX:0.4,scaleY:0.4,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(212));

	// 5.jpg
	this.instance_5 = new lib.pic5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150,51,0.5,0.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(212).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(47).to({alpha:0},6,cjs.Ease.get(1)).wait(1));

	// 4.jpg
	this.instance_6 = new lib.pic4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(150,51,0.5,0.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(159).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(47).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(53));

	// 3.jpg
	this.instance_7 = new lib.pic3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(150,51,0.5,0.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(106).to({_off:false},0).to({x:151,alpha:1},6,cjs.Ease.get(1)).wait(47).to({x:150},0).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(106));

	// 2.jpg
	this.instance_8 = new lib.pic2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(150,51,0.5,0.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(53).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(47).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(159));

	// 1.jpg
	this.instance_9 = new lib.pic1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(150,51,0.5,0.5);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({alpha:1},6,cjs.Ease.get(1)).wait(47).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(212));

	// Слой 2
	this.instance_10 = new lib.text2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(250.7,66.7);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.instance_11 = new lib.fff("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(263,60.6);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.instance_12 = new lib.fdddd("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(263,60.6);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(106).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(94).to({alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(212).to({_off:false},0).to({_off:true,alpha:1},6,cjs.Ease.get(1)).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(212).to({_off:false},6,cjs.Ease.get(1)).wait(47).to({startPosition:0},0).to({alpha:0},6,cjs.Ease.get(0.99)).wait(1));

	// fon
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGAZIgEgDIgEgEIgCgFIADgCIACAAQAAAAABAAQAAAAAAAAQAAABAAAAQABAAAAAAIACAFIAEACIADABIAFgBIADgCIABgDIABgDIAAgEIgCgDIgEgBIgFgBIAAgEIAEgBIAEgBIACgDIAAgEIAAgDIgCgDIgDgBIgDgBIgCABIgEABIgCACIgBADIgBACIgCAAIgEAAIADgHIADgEIAFgDIAFgBIAGABIAFADIADAEIABAFIAAAFIgCADIgDACIgDACQAFAAACADQACAEAAAEQAAAEgBACIgEAFQgCACgDABIgHABg");
	this.shape_1.setTransform(313.5,92.5,0.752,0.751);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGAZIgDgBIgDgCIgDgCIACgDIACAAIACAAIABABIADABIAFABIADgBIAEgCIACgEIAAgFIAAgEIgCgDIgEgBIgDgBIgJABIgDgBIADgXIAYAAIAAACIgBADIgEABIgOAAIgCANIAGgBQAEgBADACQADAAACADQACACABACIABAGIgBAHIgEAGQgDACgDABQgDABgDAAg");
	this.shape_2.setTransform(310.5,92.5,0.752,0.751);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAGAZIAAgNIgVAAIgBAAIgBgBIgBgEIAXgfIAHAAIAAAfIAHAAIAAAFIgCAAIgFAAIAAANgAgLAHIARAAIAAgVIAAgCg");
	this.shape_3.setTransform(307.4,92.5,0.752,0.751);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgGAYQgDgBgDgEQgDgEgBgEQgBgEAAgHQAAgGABgEQABgEADgEIAGgFQADgCADAAIAHACQADABADAEQACACACAGQABAEAAAGQAAAHgBAEQgCAGgCACQgCADgEACIgHACQgDAAgDgCgAgDgSIgEADIgDAHIAAASIADAGIAEADIADABIAEgBIAEgDIACgGIABgKIgBgIQAAgEgCgDIgEgDIgEgBg");
	this.shape_4.setTransform(304.4,92.5,0.752,0.751);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMAZIAVgoIACgDIgZAAIgBAAIgBgCIAAgEIAhAAIAAAFIgBABIgTApIgCABIgCABg");
	this.shape_5.setTransform(301.4,92.5,0.752,0.751);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgGAYQgEgBgCgEQgDgDgBgFQgBgEAAgHQAAgGABgEQABgFADgDQADgEADgBQADgCADAAQAEAAADACQADABADAEQADADABAFIABAKIgBALQgBAFgDADQgCAEgEABQgDACgEAAQgDAAgDgCgAgDgSIgEADQgCADAAAEIgBAIIABAKIACAGIAEADIADABIAEgBIAEgDIADgGIABgKIgBgIQgBgEgCgDIgEgDIgEgBg");
	this.shape_6.setTransform(298.3,92.5,0.752,0.751);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgGAYQgDgBgCgCIgEgGQgBgDAAgEIABgHIAFgHIAMgRIABgBIADAAIAFAAIgNATIgCABIgBABIAEgCIADAAIAGABQADABACACIADADIABAHIgBAGIgEAGQgCACgDABQgDABgEAAQgDAAgDgBgAgDAAIgEACIgCADIAAAFIAAADIACAEIAEACIADABIAEgBIAEgCIACgEIAAgDIAAgFIgCgDIgDgCIgFAAg");
	this.shape_7.setTransform(295.2,92.5,0.752,0.751);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgKAZIAPgWIACgBIgEACIgFABIgFgBIgFgDIgCgDIgBgHIABgGIADgFIAGgDQADgCACAAQAEAAADACQACAAADADQACACABADQABAEAAADIgBAIIgQAYIgBABIgCAAgAgDgSIgDACIgCADIgBAEQAAAFADACQADACADAAIAEAAIADgCIADgDIAAgEIgBgEIgCgDIgDgCIgEgBg");
	this.shape_8.setTransform(292.2,92.4,0.752,0.751);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgLAZIATgoIACgDIgZAAIgBAAIAAgCIAAgEIAhAAIAAAFIAAABIgUApIgCABIgCABg");
	this.shape_9.setTransform(289.2,92.5,0.752,0.751);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgLAZIATgoIACgDIgZAAIgBAAIAAgCIAAgEIAhAAIAAAFIAAABIgUApIgCABIgCABg");
	this.shape_10.setTransform(286.1,92.5,0.752,0.751);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAGAZIAAgNIgWAAIgBAAIAAgBIgBgEIAXgfIAGAAIAAAfIAIAAIAAAEIgBABIAAAAIgHAAIAAANgAgLAHIARAAIAAgVIAAgCg");
	this.shape_11.setTransform(283,92.5,0.752,0.751);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgGAYQgEgCgCgDQgCgCgCgGQgBgEAAgHQAAgGABgEQACgGACgCQADgEADgBIAGgCIAHACIAGAFQACACACAGQABAEAAAGQAAAHgBAEQgCAGgCACQgCAEgEABIgHACIgGgCgAgDgSIgEADQgCADAAAEIgBAIIABAKIACAGIAEADIADABIAEgBIAEgDQABgCABgEIABgKIgBgIQgBgFgBgCIgEgDIgEgBg");
	this.shape_12.setTransform(280,92.5,0.752,0.751);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgLAZIAAgFIAKAAIAAggIABgDIgJAHIgBAAIgCAAIAAAAIgCgDIAOgNIAFAAIAAAsIAKAAIAAAFg");
	this.shape_13.setTransform(276.9,92.5,0.752,0.751);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AANAZIAAgXIgZAAIAAAXIgIAAIAAgxIAIAAIAAAWIAZAAIAAgWIAIAAIAAAxg");
	this.shape_14.setTransform(272,92.5,0.752,0.751);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgQAZIAAgxIAPAAQAEAAAEABQADABADACIADAFIABAHIgBAGIgEAEQgCACgDABQgEACgEAAIgIAAIAAASgAgJABIAMgBIAEgBIACgDIABgEIgBgFIgCgDIgDgCIgNAAg");
	this.shape_15.setTransform(268.6,92.5,0.752,0.751);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgOAZIAAgxIAdAAIAAAGIgWAAIAAArg");
	this.shape_16.setTransform(265.6,92.5,0.752,0.751);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgJAYIgIgFQgEgFgBgEQgCgGAAgEQAAgDACgGQACgFADgDQADgDAFgDQAGgCADAAQAEAAAGACQAFADADADQADADACAFQACAEAAAFQAAAGgCAEQgBAEgEAFQgEAEgEABQgEACgGAAQgFAAgEgCgAgGgRIgFAEQgDACgBAEQgCAEAAADQAAAFACADQABADADADIAFAEIAGABIAHgBIAGgEIADgGIABgIIgBgHIgDgGIgGgEIgHgBg");
	this.shape_17.setTransform(261.9,92.5,0.752,0.751);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgFAZIgEgBIgDgCIgDgCIACgDIABAAIACAAIACABIAEABIADABIAEgBIADgCIACgEIABgFIAAgEIgCgDIgDgBIgEgBIgJABIgDgBIADgXIAYAAIAAACIgBADIgDABIgOAAIgDANIAGgBQAEgBADACQADAAACADQACACABACIABAGIgBAHIgEAGQgDACgDABQgDABgDAAg");
	this.shape_18.setTransform(256.9,92.5,0.752,0.751);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgLAZIAAgFIALAAIAAgjIgJAHIgBAAIgCAAIAAAAIgCgDIAOgNIAFAAIAAAsIAKAAIAAAFg");
	this.shape_19.setTransform(253.9,92.5,0.752,0.751);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgGAYQgEgBgCgEQgCgCgCgGQgBgEAAgHQAAgGABgEQACgGACgCIAGgFQADgCADAAIAHACQADABADAEQACACACAGQABAEAAAGQAAAHgBAEQgCAGgCACQgCADgEACIgHACQgDAAgDgCgAgDgSIgEADIgDAHIAAASIADAGIAEADIADABIAEgBIAEgDIACgGIABgKIgBgIQAAgEgCgDIgEgDIgEgBg");
	this.shape_20.setTransform(250.8,92.5,0.752,0.751);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgQAZIAAgCIABgCIAAgBIATgUIADgCIACgEIAAgEIgBgEIgBgDIgDgBIgEgBIgCABIgDABIgCACIgBAEIgBABIgCABIgEgBIACgHIAEgEIAFgDIAFgBIAGABQACABADADIADAEIABAGIgBAFIgCAFIgDACIgQASIAFgBIAQAAIABAAIABACIAAAEg");
	this.shape_21.setTransform(247.7,92.4,0.752,0.751);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgLAZIAAgFIALAAIAAgjIgJAHIgBAAIgBAAIgBAAIgCgDIAOgNIAFAAIAAAsIAKAAIAAAFg");
	this.shape_22.setTransform(244.7,92.5,0.752,0.751);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgGAZIgDgBIgEgCIgCgCIACgDIABAAIADAAIACABIACABIAFABIADgBIAEgCIACgEIABgFIgBgEIgCgDIgEgBIgDgBIgIABIgFgBIAFgXIAWAAIAAACIgBADIgDABIgOAAIgCANIAGgBQAEgBADACQACAAADADQADACAAACIABAGQAAAEgCADQAAADgDADQgDACgDABQgDABgDAAg");
	this.shape_23.setTransform(241.6,92.5,0.752,0.751);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAGAZIAAgNIgVAAIgCAAIAAgBIgBgEIAYgfIAGAAIAAAfIAHAAIAAAFIgCAAIgFAAIAAANgAgKAHIAQAAIAAgXg");
	this.shape_24.setTransform(238.5,92.5,0.752,0.751);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgGAYQgDgBgDgEQgDgEgBgEQgBgEAAgHQAAgGABgEQABgEADgEIAGgFQADgCADAAIAHACQADABADAEQACACACAGQABAEAAAGQAAAHgBAEQgCAGgCACQgCADgEACIgHACQgDAAgDgCgAgDgSIgEADIgDAHIAAASIADAGIAEADIADABIAEgBIAEgDIACgGIABgKIgBgIQAAgEgCgDIgEgDIgEgBg");
	this.shape_25.setTransform(235.6,92.5,0.752,0.751);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgMAZIAUgoIADgDIgZAAIgBAAIgBgCIAAgEIAhAAIAAAFIgBABIgTApIgBABIgDABg");
	this.shape_26.setTransform(232.5,92.5,0.752,0.751);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgMAZIAUgoIADgDIgZAAIgBAAIgBgCIAAgEIAhAAIAAAFIgBABIgTApIgBABIgDABg");
	this.shape_27.setTransform(229.5,92.5,0.752,0.751);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AANAZIAAgXIgZAAIAAAXIgIAAIAAgxIAIAAIAAAWIAZAAIAAgWIAIAAIAAAxg");
	this.shape_28.setTransform(224.6,92.5,0.752,0.751);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAOAZIAAgXIgaAAIAAAXIgHAAIAAgxIAHAAIAAAWIAaAAIAAgWIAGAAIAAAxg");
	this.shape_29.setTransform(220.5,92.5,0.752,0.751);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AANAZIAAgiIAAgDIAAgEIgBADIgXAkIgCABIgBABIgGAAIAAgxIAHAAIAAApIABgDIAZglIACgBIAGAAIAAAxg");
	this.shape_30.setTransform(216.5,92.5,0.752,0.751);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgGAZQgCgBgDgCQgDgCAAgDQgCgCAAgEQAAgEADgEQACgDAFAAQgEgBgCgDQgCgDAAgEIABgGIADgEIAFgDIAFgBIAGABIAFADIADAEIABAGQAAAEgCADQgCADgEABQAGAAABADQADADAAAFIgBAGQgBAEgCABQgCACgEABIgHABgAgDACIgDACIgCADIgBAEIAAAEIADADIADACIADAAIAEAAIADgCIADgDIABgEIgBgEIgDgDIgDgCIgEAAgAgDgTIgCACIgCADIAAADIAAADIACADIACACIADAAIAEAAIADgCIABgDIABgDIgBgDIgCgDIgCgCIgEgBg");
	this.shape_31.setTransform(281.4,86.5,0.752,0.751);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgBAEIgCgBIAAgCIAAgCIAAgCIACAAIADAAIABAAIABACIABABIgBABIgBACIgBABIgCAAg");
	this.shape_32.setTransform(278,88.1,0.752,0.751);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAOAYIAAgMIgbAAIAAAKIgBABIgBABIgFAAIAAgRIACAAIACgBIADgBIABgEIACgEIADgUIAVAAIAAAeIAHAAIAAAPIgBABIgBABgAgEgBIgCAEIgCAEIAQAAIAAgZIgKAAg");
	this.shape_33.setTransform(275.7,87.5,0.752,0.751);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAIAZIAAgZIABgBIgBABIgBABIAAABIgPAWIgBABIgCAAIgDAAIAAgiIAGAAIAAAZIACgDIAPgVIABgBIACAAIADAAIAAAigAgDgPIgDgCIgDgCIAAgDIAAgBIACgBIAEAAIAAADIAAACIACABIAEAAIABgBIABgFIAFAAIABABIAAABIgBADIgCACIgEACIgDABg");
	this.shape_34.setTransform(269.8,86.6,0.752,0.751);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgIADIAAgFIARAAIAAAFg");
	this.shape_35.setTransform(267.3,86.9,0.752,0.751);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgQAZIAAgDIAQgRIAHgHIABgEIABgEIgBgEIgCgDQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAIgEgBIgCABQgBAAAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAIgCADIgBADQAAAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAAAIgCAAIgEAAIACgHIAEgEIAFgDIAFgBIAGABQADABABADIAEAEIABAGIgBAFIgCAFIgEACIgQASIAGgBIAPAAIACAAIABADIAAADg");
	this.shape_36.setTransform(264.8,86.6,0.752,0.751);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAJAZIAAgaIgBABIAAABIgBABIgPAWIgBABIgBAAIgEAAIAAgiIAGAAIAAAYIAAABIABgCIABgBIACgDIADgDIAKgPIABgBIABAAIAEAAIAAAigAgDgPIgDgCIgCgCIgBgDIAAgBIABgBIAEAAIAAADIABACIACABIAEAAIABgBIABgCIAAgDIAEAAIABABIABABIgBADIgCACIgDACIgFABg");
	this.shape_37.setTransform(260.4,86.6,0.752,0.751);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAJASIAAgaIgBABIAAABIgBABIgPAVIgBABIgBABIgEAAIAAgjIAGAAIAAAaIABgDIABgBIAPgUIABgBIABgBIAEAAIAAAjg");
	this.shape_38.setTransform(257.4,87.2,0.752,0.751);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AALASIgDgBIgCgCIgGgKIgBgDIgDAAIgEAAIAAAQIgGAAIAAgjIAGAAIAAAPIAEAAIACAAIACgCIAGgLIABgBIACgBIAGAAIgLAQIgDABIADAAIACADIAJAPg");
	this.shape_39.setTransform(254.6,87.2,0.752,0.751);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgEARIgFgEIgDgFIgCgIIACgGIADgGIAFgEIAGgBIAHABIAFADIgCADIgBAAIgCAAIgBgBIgCgBIgEAAIgDABIgDACIgCAEIgBAFIABAFIACAFIADACIADABIAHgCIABgBIABAAIABAAIADADIgEACIgCACIgEABIgEAAIgFgBg");
	this.shape_40.setTransform(251.9,87.2,0.752,0.751);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAIASIAAgRIgPAAIAAARIgHAAIAAgjIAHAAIAAAOIAPAAIAAgOIAHAAIAAAjg");
	this.shape_41.setTransform(249.1,87.2,0.752,0.751);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAJASIAAgYIAAgCIgBABIAAABIgBABIgCADIgDADIgKAPIgBABIgBABIgEAAIAAgjIAGAAIAAAaIABgDIABgBIAPgUIABgBIABgBIAEAAIAAAjg");
	this.shape_42.setTransform(246.1,87.2,0.752,0.751);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAVAYIAAgMIgvAAIAAgjIAGAAIAAAeIAOAAIAAgeIAGAAIAAAeIAOAAIAAgeIAHAAIAAAeIAGAAIAAAPIAAABIgCABg");
	this.shape_43.setTransform(242.4,87.7,0.752,0.751);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgGARQgCgBgDgDIgEgGIgBgHIABgHIAEgFIAFgEIAGgBIAHABQAEABACADIADAFIABAHIgBAHIgDAGQgEADgCABQgDABgEAAQgDAAgDgBgAgHgJQgCADAAAGQAAAHACADQADADAEAAQAFAAADgDQACgEAAgGQAAgFgCgEQgDgDgFAAQgEAAgDADg");
	this.shape_44.setTransform(238.5,87.2,0.752,0.751);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgQAZIAAgxIAPAAQAEAAAEABQADABADACIADAFIABAHIgBAGIgEAEQgCACgDABQgEACgEAAIgIAAIAAASgAgJABIAMgBIAEgBIACgDIABgEIgBgFIgCgDIgDgCIgNAAg");
	this.shape_45.setTransform(235.7,86.6,0.752,0.751);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAPAYIAAgMIgcAAIAAAKIgBABIgCABIgDAAIAAgRIABAAIACgBIADgBIACgEIABgEIACgUIAWAAIAAAeIAGAAIAAAPIAAABIgBABgAgEgBIgCAEIgCAEIAQAAIAAgZIgKAAg");
	this.shape_46.setTransform(231,87.7,0.752,0.751);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgDASIgDgBIgEgCIgCgCIACgDIABAAIABAAIACABIACABIAEABIACAAIADgCIACgCIAAgCQAAgBAAAAQAAgBAAgBQgBAAAAAAQgBgBAAAAQgCgCgDAAIgFAAIAAgDIAFAAQADAAABgCQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAIgBgCIgBgCIgDgBIgCAAIgDAAIgEACIgBAAIgBAAIgCgDIAEgDIAHgBIAFAAIAEACIADADIABAEIgBACIgBACIgCACIgDACQADAAACACQACACAAADQAAABAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAIgEACIgFABg");
	this.shape_47.setTransform(228.2,87.2,0.752,0.751);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgFARIgFgEQgCgBgCgFIgBgHIABgHIAEgFIAFgEIAGgBIAGABQACAAADADIADAFIABAHIgBABIgBAAIgWAAIABAGIACAEIADACIAEABIAEgBIADgBIACgBIABAAIABAAIACADIgDACIgDACIgEABIgEAAIgGgBgAgFgKQgCACgBAFIASAAIgBgEIgBgDIgDgCIgEgBQgDAAgDADg");
	this.shape_48.setTransform(225.6,87.2,0.752,0.751);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgGARIgFgEQgDgDgBgDQgBgDAAgEIABgHQABgCADgDIAFgEIAGgBIAHABIAFAEQADADABACIABAHQAAAEgBADQgBADgDADIgFAEQgDABgEAAIgGgBgAgHgJQgCAEAAAFQAAAGACAEQADADAEAAQAFAAADgDQACgEAAgGQAAgFgCgEQgDgDgFAAQgFAAgCADg");
	this.shape_49.setTransform(222.7,87.2,0.752,0.751);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgPAYIAAgvIAEAAQABAAAAABQAAAAAAAAQABAAAAAAQAAAAAAABIAAAEQACgDAEgBQADgCACAAIAGABIAEADIADAGIABAIIgBAGIgDAGIgFAEQgDACgEAAIgEgCIgEgDIAAAQgAgEgRIgEAFIAAAQIADACIAFACQAEgBACgDQADgEAAgFIgBgGIgBgEIgDgCIgEgBQgCAAgCABg");
	this.shape_50.setTransform(219.9,87.6,0.752,0.751);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAMAZIAAgrIgXAAIAAArIgIAAIAAgxIAnAAIAAAxg");
	this.shape_51.setTransform(216.4,86.6,0.752,0.751);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgDAIIAAAAIAAgBIABgBIAAgBIACgBIAAgDIAAgBIAAAAIgBAAIgBgBIgBgBIAAgCIABgDIACgBIACAAIABABIABACIAAACIAAADIgBACIgEAHg");
	this.shape_52.setTransform(312.9,83.1,0.752,0.751);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgHASIgDgCIgCgDIgBgEIABgEIAEgEIAGgBIAKgBIAAgDQAAgDgCgDQgCgCgDAAIgDAAIgGAEIgBgBIgBgBIgCgCIAHgEIAHgBIAFAAIAEADIACAEIABAGIAAAWIgDAAIgBgBIgBgBIgBgDIgDACIgCACIgDABIgDAAgAAAACIgDACIgDACIgBACIABADIABABIACABIACABIACgBIACgBIAFgDIAAgHg");
	this.shape_53.setTransform(310.9,81.7,0.752,0.751);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgMASIAAgjIAMAAIAFABIAEACIADACIAAAEIAAACIgCACIgCADIgDABQAEAAADACQACACAAADIgBAFQgBAAAAABQAAAAAAABQgBAAAAAAQgBABgBAAIgDACIgGABgAgHANIAHAAQADAAADgCQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBIAAgCIgBgCIgCgBIgEAAIgHAAgAgHgCIAHAAIACAAIACgBQAAAAABgBQAAAAAAAAQAAAAAAgBQABAAAAAAIAAgCIAAgCIgBgCIgCgBIgDAAIgHAAg");
	this.shape_54.setTransform(308.5,81.7,0.752,0.751);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AALASIgDgBIgCgCIgGgKIgBgDIgDAAIgEAAIAAAQIgGAAIAAgjIAGAAIAAAPIADAAIADAAIACgCIAGgLIABgBIACgBIAFAAIgKAQIgDABIADAAIACADIAJAPg");
	this.shape_55.setTransform(305.8,81.7,0.752,0.751);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgEARIgFgEIgDgFIgBgIIABgGIACgGIAGgEIAGgBIAHABIAFADIgCADIAAAAIgDAAIgBgBIgCgBIgDAAIgEABQAAAAgBAAQAAAAgBABQAAAAAAAAQgBABAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAAAIgBAFIABAFIACAFIADACIADABIAEgBIACgBIACgBIABAAIACAAIABADIgCACIgEACIgDABIgEAAIgFgBg");
	this.shape_56.setTransform(303.1,81.7,0.752,0.751);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgGARQgCgBgEgDQgCgCgBgEQgBgDAAgEIABgHQABgDACgCIAGgEIAGgBIAHABQADABACADIAEAFIABAHIgBAHIgEAGQgDADgCABQgDABgEAAQgDAAgDgBgAgGgJQgDADAAAGQAAAHADADQACADAEAAQAFAAADgDQACgEABgGQgBgFgCgEQgDgDgFAAQgEAAgCADg");
	this.shape_57.setTransform(300.3,81.7,0.752,0.751);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAUAZIAAglIAAgBIgRAdIgBACIgBAAIgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBIgRgeIAAAnIgGAAIAAgxIAFAAIABAAIABABIASAhIABgCIARgfIABgBIACAAIAFAAIAAAxg");
	this.shape_58.setTransform(296.4,81.1,0.752,0.751);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgBAEIgBgBIgBgCIgBgBIABgBIABgBIABgBIADAAIACABIAAABIAAACIAAACIgCABIgCABg");
	this.shape_59.setTransform(292,82.7,0.752,0.751);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgLASIAAgjIAXAAIAAAFIgQAAIAAAeg");
	this.shape_60.setTransform(290.8,81.7,0.752,0.751);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgDAIIAAgBIABgBIABgBIABgBIAAgDIAAgBIgBAAIgBgBIgBgBIgBgCIACgDQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAIACAAIABABIABAEIAAADIgDAGIgCADg");
	this.shape_61.setTransform(287.6,83.1,0.752,0.751);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgKAZIARgXIgEACIgEABIgGgBIgEgDIgDgDIgBgHIABgFIADgGIAGgDQADgCACAAQAEAAADACIAFADIADAGIABAGIAAAEIgDAGIgNAWIgCABIgCAAgAgDgSIgDACIgCADIgBAEQAAAFADACQADACADAAIAEAAIADgCIACgDIABgEIgBgEIgCgDIgDgCIgEgBg");
	this.shape_62.setTransform(285.4,81.1,0.752,0.751);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgLAZIAAgFIALAAIAAgjIgJAHIgBAAIgCAAIAAAAIgCgDIAOgNIAFAAIAAAsIAKAAIAAAFg");
	this.shape_63.setTransform(282.4,81.1,0.752,0.751);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAFAZIAAgNIgUAAIgCAAIAAgBIgBgEIAXgfIAHAAIAAAfIAHAAIAAAEIAAABIgBAAIgGAAIAAANgAgLAHIAQAAIAAgVIABgCg");
	this.shape_64.setTransform(279.3,81.1,0.752,0.751);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgFAZIgEgBIgEgCIgCgCIACgDIABAAIAFABIACABIAFABIADgBIADgCIADgEIABgFIgBgEIgDgDIgDgBIgDgBIgIABIgFAAIAFgZIAWAAIAAADIgBADIgCABIgPAAIgCAMIAGgBQAEAAADACQACABADACQADACAAACIABAGQAAAEgCADQAAACgDAEIgGADQgDACgDAAg");
	this.shape_65.setTransform(276.3,81.2,0.752,0.751);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgLAZIAAgFIALAAIAAgjIgJAHIgBAAIgBAAIgBAAIgCgDIAOgNIAGAAIAAAsIAJAAIAAAFg");
	this.shape_66.setTransform(273.3,81.1,0.752,0.751);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgLAZIAAgFIAKAAIAAgjIgIAHIgBAAIgBAAIgBAAIgCgDIAOgNIAGAAIAAAsIAJAAIAAAFg");
	this.shape_67.setTransform(270.2,81.1,0.752,0.751);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAAANIAAgCIAAgBIAFgJIABgBIAAAAIgBAAIgFgJIAAgCIAAgBIADgBIAIANIAAAAIgIAOgAgJANIgBgCIAAgBIAGgJIABgBIgBAAIAAAAIgGgJIAAgCIABgBIACgBIAIANIAAAAIgIAOg");
	this.shape_68.setTransform(266.2,81.7,0.752,0.751);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgBAEIgCgBIgBgDIABgCIACgBIADAAIABABIABABIAAABIAAABIgBACIgBABIgCABg");
	this.shape_69.setTransform(264.4,82.7,0.752,0.751);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgOAZIAAgxIAdAAIAAAGIgWAAIAAArg");
	this.shape_70.setTransform(263.1,81.1,0.752,0.751);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAAAEIgCgBIgBgCIgBgBIABgBIABgBIACgBIACAAIABABIABABIAAACIgBACIgBABIgCABg");
	this.shape_71.setTransform(260.9,82.7,0.752,0.751);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAOAZIAAgXIgaAAIAAAXIgHAAIAAgxIAHAAIAAAWIAaAAIAAgWIAGAAIAAAxg");
	this.shape_72.setTransform(258.2,81.1,0.752,0.751);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgBAEIgBgBIgBgCIAAgBIAAgBIABgBIABgBIADAAIABABIABABIABABIgBABIgBACIgBABIgCABg");
	this.shape_73.setTransform(255.6,82.7,0.752,0.751);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgGAYQgDgBgEgEQgEgEgCgFQgBgEAAgGQAAgFABgEIAGgIQACgDAGgDQAFgCAEAAQAFAAAEACQAEACADADIgCADIgBABIgBAAIgBgBIgCgBIgFgCIgEAAIgGABIgGAEIgDAGQgCAEAAADQAAAFACADIADAGIAGAEIAFABIAEAAIAGgCIADgCIAAAAIACAAIADADQgDADgEADQgFACgGAAQgFAAgEgCg");
	this.shape_74.setTransform(253.3,81.1,0.752,0.751);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AANAZIAAgpIgBADIgYAlIgCABIgGAAIAAgxIAIAAIAAAiIgBADIAAAEIABgDIAYgkIABgBIACgBIAGAAIAAAxg");
	this.shape_75.setTransform(248.1,81.1,0.752,0.751);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAUAfIAAgMIgnAAIAAAKIgBACIgBAAIgEAAIAAgSIAEAAIADgBIACgEIACgFIACgHIABgaIAeAAIAAArIAHAAIAAAQIAAACIgCAAgAgFgKIgEASIgDAFIAXAAIAAglIgPAAg");
	this.shape_76.setTransform(244,81.6,0.752,0.751);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AANAZIAAgXIgZAAIAAAXIgIAAIAAgxIAIAAIAAAWIAZAAIAAgWIAIAAIAAAxg");
	this.shape_77.setTransform(239.9,81.1,0.752,0.751);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AASAZIgBAAIgBgCIgFgLIgVAAIgFALIgBACIgBAAIgGAAIAUgxIAHAAIAUAxgAAAgOIgBACIgHASIARAAIgHgSIgBgCIgBgDg");
	this.shape_78.setTransform(236.1,81.1,0.752,0.751);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAOAZIgCAAIgBgCIgMgSIgCgCIgDgBIgGAAIAAAXIgHAAIAAgxIAHAAIAAAWIAHAAIACgBIANgTIABgCIACAAIAGAAIgPAUQgCADgCABIADAAIARAZg");
	this.shape_79.setTransform(232.8,81.1,0.752,0.751);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAAAAIAAAAIAIgNIACABIABABIAAACIgHAJIABABIAGAJIAAABIgBACIgCABgAgKAAIAAAAIAIgNIACABIABABIgBACIgFAJIABABIAEAJIABABIgBACIgCABg");
	this.shape_80.setTransform(229.6,81.7,0.752,0.751);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgJAYIgIgFQgEgFgBgEQgCgGAAgEQAAgDACgGQABgFAEgDQADgDAFgDQAGgCADAAIAKACQAFADADADQADACACAGQACAEAAAFQAAAGgCAEQgBAFgEAEQgDAEgFABQgEACgGAAQgFAAgEgCgAgGgRIgFAEQgDACgBAEQgBAEgBADQABAFABADQAAADAEADIAFAEIAGABIAIgBIAFgEIAEgGIAAgIIAAgHIgEgGIgFgEIgIgBg");
	this.shape_81.setTransform(225.1,81.1,0.752,0.751);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgJAYQgEgCgEgDQgEgFgBgEQgCgEAAgGQAAgFACgEQACgFADgDQACgDAGgDQAGgCADAAQAEAAAGACQAGADACADQAEADABAFQACAGAAADQAAAEgCAGQgBAEgEAFQgDADgFACQgEACgGAAQgFAAgEgCgAgGgRIgGAEIgEAGIAAAHIAAAIIAEAGIAGAEIAGABIAHgBIAFgEQADgDABgDQABgDABgFQgBgDgBgEQgBgEgDgCIgFgEIgHgBg");
	this.shape_82.setTransform(220.9,81.1,0.752,0.751);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgJAYQgEgBgEgEQgDgEgCgFQgCgEAAgGQAAgFACgEQACgGADgCQADgDAFgDIAJgCQAEAAAGACQAFADADADIAFAIQACAEAAAFQAAAGgCAEIgFAJIgIAFQgEACgGAAQgFAAgEgCgAgGgRIgGAEIgDAGIgBAHIABAIIADAGIAGAEIAGABIAHgBIAGgEQADgDAAgDQACgDAAgFQAAgDgCgEQgBgEgCgCIgGgEIgHgBg");
	this.shape_83.setTransform(216.6,81.1,0.752,0.751);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#00A7E0").s().p("ApGBTQgqgmAYg4QAWgzBGgdQBOghB9ABQAcAAAaADIAgAEIANADIgSAgQgogLggAAQhAAAg0ATQhHAZgKAyQgHAeAWAaQAcAiA9gDQATgBAlgMQAtgPAbgVIA/g3IANgIQAIgDAKgBIBEAAIAWBeIArhcIBLAAIArBHIAghHIBFAAIg8CDIhHAAIgthMIgiBMIgrAAIAAAAIhSAAIgDgXIhKAAIgZAWIgwAAQg4AUhKAAQhqAAgugqgAjHA4IArgBIgDglgAGHB1IAsgrIgshjIBEAAIASA0IA4g2IBNAAIiFCFQgHAHgFACIgQACgAD+BqIhvAAIA9iDIBvAAQA1AAAUAYQAQAVgMAaQgLAYgdAQQglAUg6AAIgDAAgADpBIIATAAQAXABARgGQAdgIAFgWQAIgeg0gBIgUAAg");
	this.shape_84.setTransform(46,46.1,0.5,0.5,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(272));

	// bg
	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("A4/H0IAAvnMAx/AAAIAAPng");
	this.shape_85.setTransform(160,50);

	this.timeline.addTween(cjs.Tween.get(this.shape_85).wait(272));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(159.5,49.5,321,101.6);
// library properties:
lib.properties = {
	width: 320,
	height: 100,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/320x100_atlas_.jpg", id:"320x100_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;