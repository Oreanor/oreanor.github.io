(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"240x400_atlas_", frames: [[0,0,240,200],[0,202,240,200],[0,404,240,200],[0,606,240,200],[0,808,240,200]]}
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
	this.spriteSheet = ss["240x400_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["240x400_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["240x400_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["240x400_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
	this.spriteSheet = ss["240x400_atlas_"];
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
	this.shape.graphics.f("#000000").s().p("ApgAmIAAgOIgiAAIAAAMIAAABIgCABIgFAAIAAgUIACAAIADgBIACgBIADgEIABgHIADgVIAaAAIAAAiIAIAAIAAASIgBABIgBABgAp5AOIgCAEIATAAIAAgdIgMAAgAiAAlIAAgOIgiAAIAAgoIAHAAIAAAiIATAAIAAgiIAIAAIAAAiIAHAAIAAARIAAACIgCABgAlHAlIAAgOQgFAAgEgBIgHgFQgDgCgCgEQgBgEAAgFQAAgDABgEQACgEADgCQADgDAEgCQAEgBAFAAIAAgRIAHAAIAAARQAFAAAEABQAEACACADQADACACAEQABAEAAADQAAAFgBAEQgCAEgDACIgGAFQgEABgFAAIAAAOgAlBASIAHgCIAEgDIADgEIABgHIgBgFIgDgEIgEgDQgDgCgEAAgAlSgHQgEAEAAAFQAAAHAEAEQAEAEAHABIAAgeQgHABgEAEgALCAkIAAg1IAFAAQAAAAAAAAQABAAAAABQAAAAAAAAQABAAAAABIAAAEIAGgFQAEgCAEAAQAEAAACACIAFAEQACACABAEIABAIIgBAJIgDAGIgGAFQgDABgEAAIgGgBIgFgDIAAARgALPgKIgFAEIAAATQACACACABIAFABQAGAAADgEQADgDAAgIIgBgFIgCgFIgDgDIgEAAQgEAAgCABgABVAkIAAg1IAFAAQAAAAAAAAQABAAAAABQAAAAAAAAQABAAAAABIAAAEIAGgFQAEgCAEAAQAEAAACACIAFAEQACACABAEIABAIIgBAJIgDAGIgGAFQgDABgEAAIgGgBIgFgDIAAARgABigKIgFAEIAAATQACACACABIAFABQAGAAADgEQADgDAAgIIgBgFIgCgFIgDgDIgEAAQgEAAgCABgAkeAkIAIgQIgRglIAHAAIABABIABABIAKAXIABAEIABgCIABgCIAKgXIABgBIABgBIAGAAIgWA0IgBABIgCAAgAL4AWIgGgEIgEgHQgBgEAAgFQAAgDABgEQACgEACgDQADgDADgBIAJgBIAIABQADABADADQACADACAEIABAHIgBAJIgEAHIgGAEIgIABQgFAAgEgBgAL4gIQgDAEAAAGQAAAIADADQADAEAGAAQAFAAADgEQADgDAAgIQAAgGgDgEQgDgEgFAAQgGAAgDAEgAKeAXIgDgCIgDgEIgBgEIACgFQABgCADgCIAHgDIAMgBIAAgCQAAgFgCgCQgCgCgEAAIgEAAIgDACIgCABIgCABIgBgBIgBgBIgCgCQAEgDAEgCQADgCAFAAQAEAAACACQADABACACIADAFIABAGIAAAZIgEAAIgBgBQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIgBgEIgDADIgEACIgDABIgEAAIgFAAgAKoAFIgFACIgEACIAAADIAAADIABACIACABIADAAIADAAIADgBIADgCIACgCIAAgIIgIAAgAG1AWIgGgEIgEgHQgCgEAAgFQAAgEACgDIAEgHQACgCAEgCQADgBAFAAIAGABQADABADACQACADABADQACADAAAEIgBACIgBABIgbAAIABAGQABADACACQAAAAABABQAAAAAAAAQABABAAAAQABAAAAAAIAGABIAEAAIADgCIADgBIABgBIACABIACADIgDADIgEACIgFABIgEAAQgEAAgEgBgAG1gJQgDADgBAFIAWAAIgBgEIgCgEIgDgCIgEgBQgFAAgDADgAF3AWIAAgFIACAAIADAAIADgCIACgEIADgGIABgJIABgNIAbAAIAAAoIgIAAIAAgiIgMAAIgCAMIgCAKIgDAGIgDAEIgEACIgEAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAgAEwAWIgGgEIgEgHQgBgEAAgFQAAgDABgEQACgEACgDQADgDADgBIAJgBIAIABQADABADADQACADACAEIABAHIgBAJIgEAHIgGAEIgIABQgFAAgEgBgAEwgIQgDAEAAAGQAAAIADADQADAEAGAAQAFAAADgEQADgDAAgIQAAgGgDgEQgDgEgFAAQgGAAgDAEgADaAWIgGgEIgEgHQgBgEAAgFQAAgDABgEQACgEACgDQADgDADgBIAJgBIAIABQADABADADQACADACAEIABAHIgBAJIgEAHIgGAEIgIABQgFAAgEgBgADagIQgDAEAAAGQAAAIADADQADAEAGAAQAFAAADgEQADgDAAgIQAAgGgDgEQgDgEgFAAQgGAAgDAEgAg6AWIgHgEIgEgHQgBgEAAgFQAAgEABgDIAEgHQACgCAEgCQAEgBAEAAIAHABQADABACACQADADABADQABADAAAEIAAACIgCABIgbAAIACAGQAAADACACQABAAAAABQAAAAABAAQAAABABAAQAAAAABAAIAFABIAFAAIADgCIACgBIACgBIABABIACADIgDADIgEACIgEABIgFAAQgEAAgDgBgAg7gJQgDADAAAFIAVAAIAAgEIgCgEIgEgCIgEgBQgFAAgDADgAmNAWQgDgBgCgDQgDgDgBgEQgCgEAAgFQAAgDACgEQABgEACgDIAGgEQAEgBAFAAIAHABIAGAEIgCADIgBAAIAAABIgCgBIgCgBIgCgBIgEgBIgFABIgEADIgCAFIgBAFIABAHQAAAAABABQAAABAAAAQAAABABAAQAAABAAAAIAEADIAFABIAEAAIADgCIACgBIABgBIACABIACADIgDADIgEACIgEABIgFAAIgHgBgAouAWIAAgFIACAAIADAAIADgCIACgEIADgGIABgJIABgNIAbAAIAAAoIgIAAIAAgiIgMAAIgCAMIgCAKIgDAGIgDAEIgEACIgEAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAgApJAWIgHgEIgEgHQgBgEAAgFQAAgEABgDIAEgHQACgCAEgCQAEgBAEAAIAHABQADABACACQADADABADQABADAAAEIAAACIgCABIgbAAIACAGQAAADACACQABAAAAABQAAAAABAAQAAABABAAQAAAAABAAIAFABIAFAAIADgCIACgBIACgBIABABIACADIgDADIgEACIgEABIgFAAQgEAAgDgBgApKgJQgDADAAAFIAVAAIAAgEIgCgEIgEgCIgEgBQgFAAgDADgAqpAWIgGgEIgEgHQgBgEAAgFQAAgDABgEQACgEACgDQADgDADgBIAJgBIAIABQADABADADQACADACAEIABAHIgBAJIgEAHIgGAEIgIABQgFAAgEgBgAqpgIQgDAEAAAGQAAAIADADQADAEAGAAQAFAAADgEQADgDAAgIQAAgGgDgEQgDgEgFAAQgGAAgDAEgANEAXIAAgZIAAgDIAAgDIgOAXIgBACIgBAAIgBAAIgBAAIgBgCIgOgXIAAADIABADIAAAZIgHAAIAAgoIAGAAIABAAIACACIAMATIABACIABACIAAgCIABgCIAMgTIACgCIABAAIAGAAIAAAogAKIAXIAAgiIgTAAIAAAiIgIAAIAAgoIAiAAIAAAogAJHAXIAAgRIgDAAIgCAAIgBABIgBAAIgBABIgJAMIgBACIgEABIgFAAIAMgPQABgDADgBIgFgBIgEgDIgCgCIAAgDIAAgEIADgEIAFgDIAHgBIAOAAIAAAogAI8gLIgCACIgBACIgBACQAAADADACQACABAEAAIAGAAIAAgNIgHAAIgEABgAIfAXIAAgaIAAgCIAAgCIgBACIAAABIgBABIgDADIgDADIgDAFIgJANIgCABIgBABIgFAAIAAgoIAIAAIAAAaIAAACIAAACIABgDIABgBIACgDIADgEIAEgEIAJgNIABgBIACgBIAEAAIAAAogAHxAXIAAgTIgTAAIAAATIgIAAIAAgoIAIAAIAAAQIATAAIAAgQIAHAAIAAAogAFVAXIAAgoIAPAAIAGABIAFACIACADIABAEIAAADIgCACIgCACIgEABQAFABACADQADACAAAEIgBAFIgEAEIgEACIgGABgAFcARIAJAAQADAAADgBQACgCAAgDIgBgDIgBgCIgDgBIgDgBIgJAAgAFcAAIAIAAIADAAIACgBIACgCIAAgDIAAgCIgBgCIgDgBIgDgBIgIAAgAEKAXIAAgiIgQAAIAAgGIAnAAIAAAGIgQAAIAAAigACwAXIAAgoIAbAAIAAAGIgTAAIAAAigACeAXIAAgaIAAgCIAAgCIgBACIAAABIgBABIgDADIgDADIgDAFIgJANIgCABIgBABIgFAAIAAgoIAIAAIAAAaIAAACIAAACIABgDIABgBIACgDIADgEIAEgEIAJgNIABgBIACgBIAEAAIAAAogABDAXIAAgiIgTAAIAAAiIgIAAIAAgoIAiAAIAAAogAABAXIAAgaIAAgCIABgCIgBACIgBABIAAABIgCADIgDADIgEAFIgJANIgBABIgCABIgEAAIAAgoIAHAAIAAAaIAAACIAAACIACgDIAAgBIADgDIADgEIADgEIAJgNIABgBIABgBIAFAAIAAAogAhWAXIAAgaIAAgCIAAgCIgBACIAAABIgBABIgDADIgDADIgDAFIgJANIgCABIgBABIgFAAIAAgoIAIAAIAAAaIAAACIAAACIABgDIABgBIACgDIADgEIAEgEIAJgNIABgBIACgBIAEAAIAAAogAiuAXIgDgBIgCgCIgHgMIgDgDIgDAAIgEAAIAAASIgIAAIAAgoIAIAAIAAARIAEAAIACAAIADgCIAIgNIABgBIACgBIAGAAIgKAQIgCABIgDABIAEACIACADIALARgAjeAXIAAgTIgTAAIAAATIgIAAIAAgoIAIAAIAAAQIATAAIAAgQIAHAAIAAAogAm3AXIgCgBIAAgBIgKgPIgBABIAAABIgJANIgBABIgCABIgGAAIAOgVIgOgTIAHAAIACAAIAAABIAKAPIABgBIAAgBIAJgNIAAgBIACAAIAHAAIgOATIAOAVgAnkAXIAAgRIgDAAIgCAAIgBABIgBAAIgBABIgIAMIgCACIgDABIgFAAIALgPQACgDACgBIgFgBIgDgDIgCgCIgBgDIABgEIADgEIAEgDIAHgBIAOAAIAAAogAnugLIgDACIgBACIAAACQAAADACACQACABAEAAIAGAAIAAgNIgGAAIgEABgArDAXIAAgZIAAgDIAAgDIgOAXIgBACIgBAAIgBAAIgBAAIgBgCIgOgXIAAADIABADIAAAZIgHAAIAAgoIAGAAIABAAIACACIAMATIABACIABACIAAgCIABgCIAMgTIACgCIABAAIAGAAIAAAogAsnAXIAAgoIAPAAIAHABIAEACIADADIABAEIgBADIgBACIgCACIgEABQAEABADADQACACAAAEIgBAFIgDAEIgFACIgGABgAsfARIAIAAQAEAAACgBQACgCAAgDIAAgDIgBgCIgDgBIgEgBIgIAAgAsfAAIAHAAIADAAIADgBIABgCIABgDIAAgCIgCgCIgCgBIgEgBIgHAAgAs/gLIAAgHIAAgCIAAgBIgCACIgHAEIgBgEIAGgEIACAAIABgBIgDgBIgGgEIABgDIAHAEIACACIAAgBIAAgCIAAgIIAEAAIAAAIIgBACIAAABIACgCIAHgEIACAEIgHADIgBABIgCAAIADABIAHAEIgCAEIgHgEIgBgBIgBgBIABADIAAAHgAgMgXIgEgCIgCgDIgBgDIAAgCIACgBIAEAAIAAAEIABACIACABIADAAIADAAIABgBIABgCIABgEIADAAIABABIABACIgBADIgCADIgDACIgFAAIgFAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.text2, new cjs.Rectangle(-84.2,-3.7,168.5,7.6), null);


(lib.t5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("AgLBDIAAgXIAXAAIAAAXgAgLAhIAAhjIAXAAIAABjg");
	this.shape.setTransform(89.9,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A7E0").s().p("AAuBDIAAhjIgjBjIgUAAIgkhjIAABjIgZAAIAAiFIAiAAIAkBlIAlhlIAiAAIAACFg");
	this.shape_1.setTransform(79.1,10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00A7E0").s().p("AgjBDIAAiFIBHAAIAAAYIguAAIAAAfIAsAAIAAAXIgsAAIAAAfIAuAAIAAAYg");
	this.shape_2.setTransform(66.2,10);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00A7E0").s().p("AAeBDIAAhdIg6BdIgZAAIAAiFIAZAAIAABdIA6hdIAYAAIAACFg");
	this.shape_3.setTransform(54.7,10);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00A7E0").s().p("AgrBDIAAiFIAhAAQAuAAgBAjQAAASgPAIQAYAHAAAYQgBApg0AAgAgSArIARAAQATAAAAgRQAAgRgTAAIgRAAgAgSgOIAMAAQAQAAAAgOQAAgOgQAAIgMAAg");
	this.shape_4.setTransform(43.1,10);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00A7E0").s().p("AgLBDIAAhtIgZAAIAAgYIBJAAIAAAYIgYAAIAABtg");
	this.shape_5.setTransform(33.7,10);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00A7E0").s().p("AgvAuQgSgUAAgaQAAgZASgUQATgYAgAAQAVAAARALQAQALAIATIgcAAQgNgRgUAAQgTAAgNAOQgNANAAASQAAASANAOQANAOATAAQATAAANgQIAcAAQgIASgPALQgRALgVAAQggAAgTgYg");
	this.shape_6.setTransform(22.9,10.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00A7E0").s().p("AgsBDIAAiFIAZAAIAAA0IATAAQAXAAAMANQAJAKAAARQAAASgMALQgMAMgUAAgAgTArIATAAQAJAAAGgFQAFgEAAgIQAAgRgUAAIgTAAg");
	this.shape_7.setTransform(11,10);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00A7E0").s().p("AAlBDIglhjIgjBjIgcAAIA1iFIAVAAIA1CFg");
	this.shape_8.setTransform(-1.2,10);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00A7E0").s().p("AgxAxQgUgUgBgdQABgcAUgUQAUgVAdAAQAeAAAVAVQATAUAAAcQAAAdgTAUQgVAVgeAAQgdAAgUgVgAgfgfQgNANgBASQABATANANQANAOASAAQATAAAOgOQANgNAAgTQAAgSgNgNQgOgOgTAAQgSAAgNAOg");
	this.shape_9.setTransform(-15.3,10.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00A7E0").s().p("AgrBDIAAiFIAhAAQAtAAAAAjQABASgPAIQAWAHAAAYQABApg1AAgAgSArIAQAAQAVAAgBgRQABgRgVAAIgQAAgAgSgOIAMAAQAQAAAAgOQAAgOgQAAIgMAAg");
	this.shape_10.setTransform(-27.8,10);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00A7E0").s().p("AgxAxQgVgUAAgdQAAgcAVgUQAUgVAdAAQAeAAAVAVQATAUABAcQAAAdgVAUQgUAVgeAAQgdAAgUgVgAgggfQgNANAAASQAAATANANQAOAOASAAQAUAAANgOQANgNgBgTQABgSgNgNQgOgOgTAAQgTAAgNAOg");
	this.shape_11.setTransform(-41,10.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00A7E0").s().p("AAwBPIAAgZIhfAAIAAAZIgZAAIAAgxIANAAIAxhsIAVAAIAyBsIAMAAIAAAxgAggAeIBBAAIghhLg");
	this.shape_12.setTransform(-56,11.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00A7E0").s().p("AgZBDIAQgiIg0hjIAeAAIAjBGIAehGIAcAAIg9CFg");
	this.shape_13.setTransform(-67,10);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00A7E0").s().p("AgwAuQgRgUAAgaQAAgZARgUQAUgYAgAAQAUAAARALQARALAIATIgcAAQgNgRgVAAQgSAAgNAOQgNANAAASQAAASANAOQANAOASAAQAVAAAMgQIAcAAQgSAogsAAQgfAAgUgYg");
	this.shape_14.setTransform(-84.5,10.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00A7E0").s().p("AAnBDIgOgjIgwAAIgPAjIgaAAIA3iFIATAAIA4CFgAgOAIIAdAAIgPgmg");
	this.shape_15.setTransform(67.1,-12.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00A7E0").s().p("AAuBDIAAhjIgjBjIgVAAIgjhjIAABjIgZAAIAAiFIAhAAIAlBmIAlhmIAiAAIAACFg");
	this.shape_16.setTransform(52.1,-12.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00A7E0").s().p("AgxAyQgVgUAAgeQAAgcAVgUQAUgVAdAAQAeAAAUAVQAVAUAAAcQgBAegUAUQgUAUgeAAQgdAAgUgUgAgggfQgNANAAASQAAATANANQANAOATAAQATAAAOgOQAMgNAAgTQAAgSgMgNQgNgOgUAAQgSAAgOAOg");
	this.shape_17.setTransform(36.2,-12.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00A7E0").s().p("AAwBQIAAgaIhfAAIAAAaIgZAAIAAgyIANAAIAxhtIAVAAIAyBtIAMAAIAAAygAggAeIBBAAIgghKg");
	this.shape_18.setTransform(21.2,-11);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00A7E0").s().p("AgjBDIAAiFIBHAAIAAAYIguAAIAAAfIAsAAIAAAXIgsAAIAAAfIAuAAIAAAYg");
	this.shape_19.setTransform(5,-12.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00A7E0").s().p("AgLBDIAAhtIgZAAIAAgYIBJAAIAAAYIgZAAIAABtg");
	this.shape_20.setTransform(-3.6,-12.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00A7E0").s().p("AgrBDIAAiFIAYAAIAAA0IATAAQAXAAAMANQAKAKAAARQAAASgNALQgNAMgTAAgAgTArIAUAAQASAAABgRQgBgIgFgFQgFgEgIAAIgUAAg");
	this.shape_21.setTransform(-11.8,-12.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00A7E0").s().p("AgrBDIAAiFIAhAAQAtAAABAjQgBARgPAJQAMADAFAIQAGAJABALQAAApg1AAgAgRArIAPAAQAVAAAAgRQAAgRgVAAIgPAAgAgRgOIALAAQAQAAABgOQgBgOgQAAIgLAAg");
	this.shape_22.setTransform(-22.4,-12.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00A7E0").s().p("AgxAyQgVgUABgeQgBgcAVgUQAUgVAdAAQAeAAAUAVQAUAUAAAcQAAAegUAUQgVAUgdAAQgdAAgUgUgAgggfQgNANAAASQAAATANANQANAOATAAQATAAANgOQANgNABgTQgBgSgNgNQgMgOgUAAQgSAAgOAOg");
	this.shape_23.setTransform(-35.5,-12.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00A7E0").s().p("AgLBDIAAhtIgZAAIAAgYIBJAAIAAAYIgZAAIAABtg");
	this.shape_24.setTransform(-46.5,-12.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00A7E0").s().p("AgxAyQgVgUAAgeQAAgcAVgUQAUgVAdAAQAeAAAUAVQAUAUAAAcQAAAegUAUQgUAUgeAAQgcAAgVgUgAgfgfQgOANAAASQAAATAOANQAMAOATAAQAUAAANgOQANgNAAgTQAAgSgNgNQgOgOgTAAQgTAAgMAOg");
	this.shape_25.setTransform(-57.4,-12.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00A7E0").s().p("AghBDIAAiFIBCAAIAAAYIgoAAIAABtg");
	this.shape_26.setTransform(-68.4,-12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t5, new cjs.Rectangle(-91.1,-19.2,182.3,38.5), null);


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

	// Слой 1
	this.instance = new lib._3();
	this.instance.parent = this;
	this.instance.setTransform(-120,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic3, new cjs.Rectangle(-120,-100,240,200), null);


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


(lib.butt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYAvIAAhdIAxAAIAAARIggAAIAAAWIAfAAIAAAPIgfAAIAAAWIAgAAIAAARg");
	this.shape.setTransform(35.3,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAvIAAhdIAxAAIAAARIggAAIAAAWIAfAAIAAAPIgfAAIAAAWIAgAAIAAARg");
	this.shape_1.setTransform(28.6,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARAvIAAgoIghAAIAAAoIgSAAIAAhdIASAAIAAAmIAhAAIAAgmIASAAIAABdg");
	this.shape_2.setTransform(21,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfAvIAAhdIA2AAIAAARIgkAAIAAATIAOAAQATAAAIAMQAEAHAAAJQAAANgJAIQgIAIgOAAgAgNAeIAOAAQAGAAAEgEQAEgDAAgFQAAgFgDgCQgEgFgHAAIgOAAg");
	this.shape_3.setTransform(13,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgiAjQgPgOAAgVQAAgTAPgOQAOgPAUAAQAVAAAPAPQANAOAAATQAAAVgNAOQgPAOgVAAQgUAAgOgOgAgWgWQgJAKAAAMQAAANAJAKQAJAJANAAQANAAAKgJQAKgKgBgNQABgMgKgKQgJgJgOAAQgNAAgJAJg");
	this.shape_4.setTransform(3.7,0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdAvIAAhdIAaAAQASAAAKAMQAFAHAAALQAAALgHAHQgIAKgSgBIgJAAIAAAkgAgMgFIALAAQAOAAgBgMQABgMgOAAIgLAAg");
	this.shape_5.setTransform(-4.9,0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAiA4IAAgSIhDAAIAAASIgRAAIAAgjIAJAAIAihMIAPAAIAiBMIAJAAIAAAjgAgWAVIAtAAIgXg0g");
	this.shape_6.setTransform(-14,1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgiAjQgPgOAAgVQAAgTAPgOQAOgPAUAAQAVAAAOAPQAOAOABATQgBAVgOAOQgOAOgVAAQgUAAgOgOgAgWgWQgJAKAAAMQAAANAJAKQAKAJAMAAQAOAAAJgJQAKgKgBgNQAAgMgJgKQgJgJgOAAQgMAAgKAJg");
	this.shape_7.setTransform(-24.5,0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AARAvIAAhMIghAAIAABMIgSAAIAAhdIBEAAIAABdg");
	this.shape_8.setTransform(-34.2,0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00A7E0").s().p("An6CDIAAkFIP1AAIAAEFg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.butt, new cjs.Rectangle(-50.6,-13.1,101.3,26.2), null);


// stage content:
(lib._240x400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ayq/KMAlVAAAMAAAA+VMglVAAAg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(272));

	// t5
	this.instance = new lib.t5();
	this.instance.parent = this;
	this.instance.setTransform(120,297,0.8,0.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(212).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},6,cjs.Ease.get(1)).wait(47).to({scaleX:0.8,scaleY:0.8,alpha:0},6,cjs.Ease.get(1)).wait(1));

	// t4
	this.instance_1 = new lib.t4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120,297,0.8,0.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(159).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},6,cjs.Ease.get(1)).wait(47).to({scaleX:0.8,scaleY:0.8,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(53));

	// t3
	this.instance_2 = new lib.t3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(120,297,0.8,0.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(106).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},6,cjs.Ease.get(1)).wait(47).to({scaleX:0.8,scaleY:0.8,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(106));

	// t2
	this.instance_3 = new lib.t2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(120,297,0.8,0.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(53).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},6,cjs.Ease.get(1)).wait(47).to({scaleX:0.8,scaleY:0.8,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(159));

	// t1
	this.instance_4 = new lib.t1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(120,297,0.8,0.8);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1,alpha:1},6,cjs.Ease.get(1)).wait(47).to({scaleX:0.8,scaleY:0.8,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(212));

	// 5.jpg
	this.instance_5 = new lib.pic5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(120,165);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(212).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(47).to({alpha:0},6,cjs.Ease.get(1)).wait(1));

	// 4.jpg
	this.instance_6 = new lib.pic4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(120,165);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(159).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(47).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(53));

	// 3.jpg
	this.instance_7 = new lib.pic3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(120,165);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(106).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(47).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(106));

	// 2.jpg
	this.instance_8 = new lib.pic2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(120,165);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(53).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(47).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(159));

	// 1.jpg
	this.instance_9 = new lib.pic1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(120,165);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({alpha:1},6,cjs.Ease.get(1)).wait(47).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(212));

	// Слой 1
	this.instance_10 = new lib.text2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(122.9,371);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.instance_11 = new lib.butt();
	this.instance_11.parent = this;
	this.instance_11.setTransform(120,351.7);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(106).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(94).to({alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(212).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(47).to({alpha:0},6,cjs.Ease.get(1)).wait(1));

	// fon
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGAZIgEgDIgEgEIgCgFIADgCIACAAQAAAAABAAQAAAAAAAAQAAABAAAAQABAAAAAAIACAFIAEACIADABIAFgBIADgCIABgDIABgDIAAgEIgCgDIgEgBIgFgBIAAgEIAEgBIAEgBIACgDIAAgEIAAgDIgCgDIgDgBIgDgBIgCABIgEABIgCACIgBADIgBACIgCAAIgEAAIADgHIADgEIAFgDIAFgBIAGABIAFADIADAEIABAFIAAAFIgCADIgDACIgDACQAFAAACADQACAEAAAEQAAAEgBACIgEAFQgCACgDABIgHABg");
	this.shape_1.setTransform(195.1,388.2,1.048,1.049);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGAZIgDgBIgDgCIgDgCIACgDIACAAIACAAIABABIADABIAFABIADgBIAEgCIACgEIAAgFIAAgEIgCgDIgEgBIgDgBIgJABIgDgBIADgXIAYAAIAAACIgBADIgEABIgOAAIgCANIAGgBQAEgBADACQADAAACADQACACABACIABAGIgBAHIgEAGQgDACgDABQgDABgDAAg");
	this.shape_2.setTransform(190.8,388.3,1.048,1.049);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAGAZIAAgNIgVAAIgBAAIgBgBIgBgEIAXgfIAHAAIAAAfIAHAAIAAAFIgCAAIgFAAIAAANgAgLAHIARAAIAAgVIAAgCg");
	this.shape_3.setTransform(186.5,388.2,1.048,1.049);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgGAYQgDgBgDgEQgDgEgBgEQgBgEAAgHQAAgGABgEQABgEADgEIAGgFQADgCADAAIAHACQADABADAEQACACACAGQABAEAAAGQAAAHgBAEQgCAGgCACQgCADgEACIgHACQgDAAgDgCgAgDgSIgEADIgDAHIAAASIADAGIAEADIADABIAEgBIAEgDIACgGIABgKIgBgIQAAgEgCgDIgEgDIgEgBg");
	this.shape_4.setTransform(182.4,388.2,1.048,1.049);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMAZIAVgoIACgDIgZAAIgBAAIgBgCIAAgEIAhAAIAAAFIgBABIgTApIgCABIgCABg");
	this.shape_5.setTransform(178.2,388.2,1.048,1.049);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgGAYQgEgBgCgEQgDgDgBgFQgBgEAAgHQAAgGABgEQABgFADgDQADgEADgBQADgCADAAQAEAAADACQADABADAEQADADABAFIABAKIgBALQgBAFgDADQgCAEgEABQgDACgEAAQgDAAgDgCgAgDgSIgEADQgCADAAAEIgBAIIABAKIACAGIAEADIADABIAEgBIAEgDIADgGIABgKIgBgIQgBgEgCgDIgEgDIgEgBg");
	this.shape_6.setTransform(173.8,388.2,1.048,1.049);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgGAYQgDgBgCgCIgEgGQgBgDAAgEIABgHIAFgHIAMgRIABgBIADAAIAFAAIgNATIgCABIgBABIAEgCIADAAIAGABQADABACACIADADIABAHIgBAGIgEAGQgCACgDABQgDABgEAAQgDAAgDgBgAgDAAIgEACIgCADIAAAFIAAADIACAEIAEACIADABIAEgBIAEgCIACgEIAAgDIAAgFIgCgDIgDgCIgFAAg");
	this.shape_7.setTransform(169.6,388.3,1.048,1.049);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgKAZIAPgWIACgBIgEACIgFABIgFgBIgFgDIgCgDIgBgHIABgGIADgFIAGgDQADgCACAAQAEAAADACQACAAADADQACACABADQABAEAAADIgBAIIgQAYIgBABIgCAAgAgDgSIgDACIgCADIgBAEQAAAFADACQADACADAAIAEAAIADgCIADgDIAAgEIgBgEIgCgDIgDgCIgEgBg");
	this.shape_8.setTransform(165.3,388.2,1.048,1.049);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgLAZIATgoIACgDIgZAAIgBAAIAAgCIAAgEIAhAAIAAAFIAAABIgUApIgCABIgCABg");
	this.shape_9.setTransform(161.1,388.2,1.048,1.049);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgLAZIATgoIACgDIgZAAIgBAAIAAgCIAAgEIAhAAIAAAFIAAABIgUApIgCABIgCABg");
	this.shape_10.setTransform(156.9,388.2,1.048,1.049);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAGAZIAAgNIgWAAIgBAAIAAgBIgBgEIAXgfIAGAAIAAAfIAIAAIAAAEIgBABIAAAAIgHAAIAAANgAgLAHIARAAIAAgVIAAgCg");
	this.shape_11.setTransform(152.5,388.2,1.048,1.049);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgGAYQgEgCgCgDQgCgCgCgGQgBgEAAgHQAAgGABgEQACgGACgCQADgEADgBIAGgCIAHACIAGAFQACACACAGQABAEAAAGQAAAHgBAEQgCAGgCACQgCAEgEABIgHACIgGgCgAgDgSIgEADQgCADAAAEIgBAIIABAKIACAGIAEADIADABIAEgBIAEgDQABgCABgEIABgKIgBgIQgBgFgBgCIgEgDIgEgBg");
	this.shape_12.setTransform(148.3,388.2,1.048,1.049);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgLAZIAAgFIAKAAIAAggIABgDIgJAHIgBAAIgCAAIAAAAIgCgDIAOgNIAFAAIAAAsIAKAAIAAAFg");
	this.shape_13.setTransform(144.1,388.2,1.048,1.049);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AANAZIAAgXIgZAAIAAAXIgIAAIAAgxIAIAAIAAAWIAZAAIAAgWIAIAAIAAAxg");
	this.shape_14.setTransform(137.3,388.2,1.048,1.049);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgQAZIAAgxIAPAAQAEAAAEABQADABADACIADAFIABAHIgBAGIgEAEQgCACgDABQgEACgEAAIgIAAIAAASgAgJABIAMgBIAEgBIACgDIABgEIgBgFIgCgDIgDgCIgNAAg");
	this.shape_15.setTransform(132.5,388.2,1.048,1.049);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgOAZIAAgxIAdAAIAAAGIgWAAIAAArg");
	this.shape_16.setTransform(128.4,388.2,1.048,1.049);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgJAYIgIgFQgEgFgBgEQgCgGAAgEQAAgDACgGQACgFADgDQADgDAFgDQAGgCADAAQAEAAAGACQAFADADADQADADACAFQACAEAAAFQAAAGgCAEQgBAEgEAFQgEAEgEABQgEACgGAAQgFAAgEgCgAgGgRIgFAEQgDACgBAEQgCAEAAADQAAAFACADQABADADADIAFAEIAGABIAHgBIAGgEIADgGIABgIIgBgHIgDgGIgGgEIgHgBg");
	this.shape_17.setTransform(123.1,388.2,1.048,1.049);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgFAZIgEgBIgDgCIgDgCIACgDIABAAIACAAIACABIAEABIADABIAEgBIADgCIACgEIABgFIAAgEIgCgDIgDgBIgEgBIgJABIgDgBIADgXIAYAAIAAACIgBADIgDABIgOAAIgDANIAGgBQAEgBADACQADAAACADQACACABACIABAGIgBAHIgEAGQgDACgDABQgDABgDAAg");
	this.shape_18.setTransform(116.2,388.3,1.048,1.049);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgLAZIAAgFIALAAIAAgjIgJAHIgBAAIgCAAIAAAAIgCgDIAOgNIAFAAIAAAsIAKAAIAAAFg");
	this.shape_19.setTransform(112,388.2,1.048,1.049);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgGAYQgEgBgCgEQgCgCgCgGQgBgEAAgHQAAgGABgEQACgGACgCIAGgFQADgCADAAIAHACQADABADAEQACACACAGQABAEAAAGQAAAHgBAEQgCAGgCACQgCADgEACIgHACQgDAAgDgCgAgDgSIgEADIgDAHIAAASIADAGIAEADIADABIAEgBIAEgDIACgGIABgKIgBgIQAAgEgCgDIgEgDIgEgBg");
	this.shape_20.setTransform(107.7,388.2,1.048,1.049);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgQAZIAAgCIABgCIAAgBIATgUIADgCIACgEIAAgEIgBgEIgBgDIgDgBIgEgBIgCABIgDABIgCACIgBAEIgBABIgCABIgEgBIACgHIAEgEIAFgDIAFgBIAGABQACABADADIADAEIABAGIgBAFIgCAFIgDACIgQASIAFgBIAQAAIABAAIABACIAAAEg");
	this.shape_21.setTransform(103.4,388.2,1.048,1.049);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgLAZIAAgFIALAAIAAgjIgJAHIgBAAIgBAAIgBAAIgCgDIAOgNIAFAAIAAAsIAKAAIAAAFg");
	this.shape_22.setTransform(99.3,388.2,1.048,1.049);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgGAZIgDgBIgEgCIgCgCIACgDIABAAIADAAIACABIACABIAFABIADgBIAEgCIACgEIABgFIgBgEIgCgDIgEgBIgDgBIgIABIgFgBIAFgXIAWAAIAAACIgBADIgDABIgOAAIgCANIAGgBQAEgBADACQACAAADADQADACAAACIABAGQAAAEgCADQAAADgDADQgDACgDABQgDABgDAAg");
	this.shape_23.setTransform(94.9,388.3,1.048,1.049);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAGAZIAAgNIgVAAIgCAAIAAgBIgBgEIAYgfIAGAAIAAAfIAHAAIAAAFIgCAAIgFAAIAAANgAgKAHIAQAAIAAgXg");
	this.shape_24.setTransform(90.6,388.2,1.048,1.049);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgGAYQgDgBgDgEQgDgEgBgEQgBgEAAgHQAAgGABgEQABgEADgEIAGgFQADgCADAAIAHACQADABADAEQACACACAGQABAEAAAGQAAAHgBAEQgCAGgCACQgCADgEACIgHACQgDAAgDgCgAgDgSIgEADIgDAHIAAASIADAGIAEADIADABIAEgBIAEgDIACgGIABgKIgBgIQAAgEgCgDIgEgDIgEgBg");
	this.shape_25.setTransform(86.4,388.2,1.048,1.049);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgMAZIAUgoIADgDIgZAAIgBAAIgBgCIAAgEIAhAAIAAAFIgBABIgTApIgBABIgDABg");
	this.shape_26.setTransform(82.2,388.2,1.048,1.049);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgMAZIAUgoIADgDIgZAAIgBAAIgBgCIAAgEIAhAAIAAAFIgBABIgTApIgBABIgDABg");
	this.shape_27.setTransform(78,388.2,1.048,1.049);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AANAZIAAgXIgZAAIAAAXIgIAAIAAgxIAIAAIAAAWIAZAAIAAgWIAIAAIAAAxg");
	this.shape_28.setTransform(71.1,388.2,1.048,1.049);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAOAZIAAgXIgaAAIAAAXIgHAAIAAgxIAHAAIAAAWIAaAAIAAgWIAGAAIAAAxg");
	this.shape_29.setTransform(65.5,388.2,1.048,1.049);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AANAZIAAgiIAAgDIAAgEIgBADIgXAkIgCABIgBABIgGAAIAAgxIAHAAIAAApIABgDIAZglIACgBIAGAAIAAAxg");
	this.shape_30.setTransform(59.9,388.2,1.048,1.049);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgGAZQgCgBgDgCQgDgCAAgDQgCgCAAgEQAAgEADgEQACgDAFAAQgEgBgCgDQgCgDAAgEIABgGIADgEIAFgDIAFgBIAGABIAFADIADAEIABAGQAAAEgCADQgCADgEABQAGAAABADQADADAAAFIgBAGQgBAEgCABQgCACgEABIgHABgAgDACIgDACIgCADIgBAEIAAAEIADADIADACIADAAIAEAAIADgCIADgDIABgEIgBgEIgDgDIgDgCIgEAAgAgDgTIgCACIgCADIAAADIAAADIACADIACACIADAAIAEAAIADgCIABgDIABgDIgBgDIgCgDIgCgCIgEgBg");
	this.shape_31.setTransform(53.1,388.2,1.048,1.049);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgBAEIgCgBIAAgCIAAgCIAAgCIACAAIADAAIABAAIABACIABABIgBABIgBACIgBABIgCAAg");
	this.shape_32.setTransform(48.3,390.5,1.048,1.049);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAOAYIAAgMIgbAAIAAAKIgBABIgBABIgFAAIAAgRIACAAIACgBIADgBIABgEIACgEIADgUIAVAAIAAAeIAHAAIAAAPIgBABIgBABgAgEgBIgCAEIgCAEIAQAAIAAgZIgKAAg");
	this.shape_33.setTransform(45.1,389.6,1.048,1.049);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgDAIIAAgBIAAgBIABgBIABgBIABgEIAAAAIgBAAIgBgBIgBgBIAAgCIABgDQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAIACAAIABABIABACIAAACIAAADIgBACIgDAEIgCADg");
	this.shape_34.setTransform(229.6,382.5,1.048,1.049);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAIAZIAAgZIABgBIgBABIgBABIAAABIgPAWIgBABIgCAAIgDAAIAAgiIAGAAIAAAZIACgDIAPgVIABgBIACAAIADAAIAAAigAgDgPIgDgCIgDgCIAAgDIAAgBIACgBIAEAAIAAADIAAACIACABIAEAAIABgBIABgFIAFAAIABABIAAABIgBADIgCACIgEACIgDABg");
	this.shape_35.setTransform(226.6,379.8,1.048,1.049);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgIADIAAgFIARAAIAAAFg");
	this.shape_36.setTransform(223.1,380.3,1.048,1.049);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgQAZIAAgDIAQgRIAHgHIABgEIABgEIgBgEIgCgDQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAIgEgBIgCABQgBAAAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAIgCADIgBADQAAAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAAAIgCAAIgEAAIACgHIAEgEIAFgDIAFgBIAGABQADABABADIAEAEIABAGIgBAFIgCAFIgEACIgQASIAGgBIAPAAIACAAIABADIAAADg");
	this.shape_37.setTransform(219.6,379.8,1.048,1.049);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAJAZIAAgaIgBABIAAABIgBABIgPAWIgBABIgBAAIgEAAIAAgiIAGAAIAAAYIAAABIABgCIABgBIACgDIADgDIAKgPIABgBIABAAIAEAAIAAAigAgDgPIgDgCIgCgCIgBgDIAAgBIABgBIAEAAIAAADIABACIACABIAEAAIABgBIABgCIAAgDIAEAAIABABIABABIgBADIgCACIgDACIgFABg");
	this.shape_38.setTransform(213.6,379.8,1.048,1.049);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAJASIAAgaIgBABIAAABIgBABIgPAVIgBABIgBABIgEAAIAAgjIAGAAIAAAaIABgDIABgBIAPgUIABgBIABgBIAEAAIAAAjg");
	this.shape_39.setTransform(209.3,380.6,1.048,1.049);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AALASIgDgBIgCgCIgGgKIgBgDIgDAAIgEAAIAAAQIgGAAIAAgjIAGAAIAAAPIAEAAIACAAIACgCIAGgLIABgBIACgBIAGAAIgLAQIgDABIADAAIACADIAJAPg");
	this.shape_40.setTransform(205.5,380.6,1.048,1.049);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgEARIgFgEIgDgFIgCgIIACgGIADgGIAFgEIAGgBIAHABIAFADIgCADIgBAAIgCAAIgBgBIgCgBIgEAAIgDABIgDACIgCAEIgBAFIABAFIACAFIADACIADABIAHgCIABgBIABAAIABAAIADADIgEACIgCACIgEABIgEAAIgFgBg");
	this.shape_41.setTransform(201.7,380.6,1.048,1.049);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAIASIAAgRIgPAAIAAARIgHAAIAAgjIAHAAIAAAOIAPAAIAAgOIAHAAIAAAjg");
	this.shape_42.setTransform(197.8,380.6,1.048,1.049);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAJASIAAgYIAAgCIgBABIAAABIgBABIgCADIgDADIgKAPIgBABIgBABIgEAAIAAgjIAGAAIAAAaIABgDIABgBIAPgUIABgBIABgBIAEAAIAAAjg");
	this.shape_43.setTransform(193.6,380.6,1.048,1.049);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAVAYIAAgMIgvAAIAAgjIAGAAIAAAeIAOAAIAAgeIAGAAIAAAeIAOAAIAAgeIAHAAIAAAeIAGAAIAAAPIAAABIgCABg");
	this.shape_44.setTransform(188.5,381.3,1.048,1.049);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgGARQgCgBgDgDIgEgGIgBgHIABgHIAEgFIAFgEIAGgBIAHABQAEABACADIADAFIABAHIgBAHIgDAGQgEADgCABQgDABgEAAQgDAAgDgBgAgHgJQgCADAAAGQAAAHACADQADADAEAAQAFAAADgDQACgEAAgGQAAgFgCgEQgDgDgFAAQgEAAgDADg");
	this.shape_45.setTransform(183,380.6,1.048,1.049);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgQAZIAAgxIAPAAQAEAAAEABQADABADACIADAFIABAHIgBAGIgEAEQgCACgDABQgEACgEAAIgIAAIAAASgAgJABIAMgBIAEgBIACgDIABgEIgBgFIgCgDIgDgCIgNAAg");
	this.shape_46.setTransform(179.2,379.8,1.048,1.049);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAPAYIAAgMIgcAAIAAAKIgBABIgCABIgDAAIAAgRIABAAIACgBIADgBIACgEIABgEIACgUIAWAAIAAAeIAGAAIAAAPIAAABIgBABgAgEgBIgCAEIgCAEIAQAAIAAgZIgKAAg");
	this.shape_47.setTransform(172.6,381.3,1.048,1.049);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgDASIgDgBIgEgCIgCgCIACgDIABAAIABAAIACABIACABIAEABIACAAIADgCIACgCIAAgCQAAgBAAAAQAAgBAAgBQgBAAAAAAQgBgBAAAAQgCgCgDAAIgFAAIAAgDIAFAAQADAAABgCQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAIgBgCIgBgCIgDgBIgCAAIgDAAIgEACIgBAAIgBAAIgCgDIAEgDIAHgBIAFAAIAEACIADADIABAEIgBACIgBACIgCACIgDACQADAAACACQACACAAADQAAABAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAIgEACIgFABg");
	this.shape_48.setTransform(168.6,380.6,1.048,1.049);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgFARIgFgEQgCgBgCgFIgBgHIABgHIAEgFIAFgEIAGgBIAGABQACAAADADIADAFIABAHIgBABIgBAAIgWAAIABAGIACAEIADACIAEABIAEgBIADgBIACgBIABAAIABAAIACADIgDACIgDACIgEABIgEAAIgGgBgAgFgKQgCACgBAFIASAAIgBgEIgBgDIgDgCIgEgBQgDAAgDADg");
	this.shape_49.setTransform(165.1,380.6,1.048,1.049);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgGARIgFgEQgDgDgBgDQgBgDAAgEIABgHQABgCADgDIAFgEIAGgBIAHABIAFAEQADADABACIABAHQAAAEgBADQgBADgDADIgFAEQgDABgEAAIgGgBgAgHgJQgCAEAAAFQAAAGACAEQADADAEAAQAFAAADgDQACgEAAgGQAAgFgCgEQgDgDgFAAQgFAAgCADg");
	this.shape_50.setTransform(161.1,380.6,1.048,1.049);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgPAYIAAgvIAEAAQABAAAAABQAAAAAAAAQABAAAAAAQAAAAAAABIAAAEQACgDAEgBQADgCACAAIAGABIAEADIADAGIABAIIgBAGIgDAGIgFAEQgDACgEAAIgEgCIgEgDIAAAQgAgEgRIgEAFIAAAQIADACIAFACQAEgBACgDQADgEAAgFIgBgGIgBgEIgDgCIgEgBQgCAAgCABg");
	this.shape_51.setTransform(157,381.2,1.048,1.049);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAMAZIAAgrIgXAAIAAArIgIAAIAAgxIAnAAIAAAxg");
	this.shape_52.setTransform(152.2,379.8,1.048,1.049);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgDAIIAAAAIAAgBIABgBIAAgBIACgBIAAgDIAAgBIAAAAIgBAAIgBgBIgBgBIAAgCIABgDIACgBIACAAIABABIABACIAAACIAAADIgBACIgEAHg");
	this.shape_53.setTransform(146.8,382.5,1.048,1.049);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgHASIgDgCIgCgDIgBgEIABgEIAEgEIAGgBIAKgBIAAgDQAAgDgCgDQgCgCgDAAIgDAAIgGAEIgBgBIgBgBIgCgCIAHgEIAHgBIAFAAIAEADIACAEIABAGIAAAWIgDAAIgBgBIgBgBIgBgDIgDACIgCACIgDABIgDAAgAAAACIgDACIgDACIgBACIABADIABABIACABIACABIACgBIACgBIAFgDIAAgHg");
	this.shape_54.setTransform(144,380.6,1.048,1.049);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgMASIAAgjIAMAAIAFABIAEACIADACIAAAEIAAACIgCACIgCADIgDABQAEAAADACQACACAAADIgBAFQgBAAAAABQAAAAAAABQgBAAAAAAQgBABgBAAIgDACIgGABgAgHANIAHAAQADAAADgCQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBIAAgCIgBgCIgCgBIgEAAIgHAAgAgHgCIAHAAIACAAIACgBQAAAAABgBQAAAAAAAAQAAAAAAgBQABAAAAAAIAAgCIAAgCIgBgCIgCgBIgDAAIgHAAg");
	this.shape_55.setTransform(140.6,380.6,1.048,1.049);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AALASIgDgBIgCgCIgGgKIgBgDIgDAAIgEAAIAAAQIgGAAIAAgjIAGAAIAAAPIADAAIADAAIACgCIAGgLIABgBIACgBIAFAAIgKAQIgDABIADAAIACADIAJAPg");
	this.shape_56.setTransform(137,380.6,1.048,1.049);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgEARIgFgEIgDgFIgBgIIABgGIACgGIAGgEIAGgBIAHABIAFADIgCADIAAAAIgDAAIgBgBIgCgBIgDAAIgEABQAAAAgBAAQAAAAgBABQAAAAAAAAQgBABAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAAAIgBAFIABAFIACAFIADACIADABIAEgBIACgBIACgBIABAAIACAAIABADIgCACIgEACIgDABIgEAAIgFgBg");
	this.shape_57.setTransform(133.2,380.6,1.048,1.049);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgGARQgCgBgEgDQgCgCgBgEQgBgDAAgEIABgHQABgDACgCIAGgEIAGgBIAHABQADABACADIAEAFIABAHIgBAHIgEAGQgDADgCABQgDABgEAAQgDAAgDgBgAgGgJQgDADAAAGQAAAHADADQACADAEAAQAFAAADgDQACgEABgGQgBgFgCgEQgDgDgFAAQgEAAgCADg");
	this.shape_58.setTransform(129.2,380.6,1.048,1.049);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAUAZIAAglIAAgBIgRAdIgBACIgBAAIgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBIgRgeIAAAnIgGAAIAAgxIAFAAIABAAIABABIASAhIABgCIARgfIABgBIACAAIAFAAIAAAxg");
	this.shape_59.setTransform(123.9,379.8,1.048,1.049);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgBAEIgBgBIgBgCIgBgBIABgBIABgBIABgBIADAAIACABIAAABIAAACIAAACIgCABIgCABg");
	this.shape_60.setTransform(117.7,382.1,1.048,1.049);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgLASIAAgjIAXAAIAAAFIgQAAIAAAeg");
	this.shape_61.setTransform(115.9,380.6,1.048,1.049);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgDAIIAAgBIABgBIABgBIABgBIAAgDIAAgBIgBAAIgBgBIgBgBIgBgCIACgDQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAIACAAIABABIABAEIAAADIgDAGIgCADg");
	this.shape_62.setTransform(111.5,382.5,1.048,1.049);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgKAZIARgXIgEACIgEABIgGgBIgEgDIgDgDIgBgHIABgFIADgGIAGgDQADgCACAAQAEAAADACIAFADIADAGIABAGIAAAEIgDAGIgNAWIgCABIgCAAgAgDgSIgDACIgCADIgBAEQAAAFADACQADACADAAIAEAAIADgCIACgDIABgEIgBgEIgCgDIgDgCIgEgBg");
	this.shape_63.setTransform(108.5,379.8,1.048,1.049);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgLAZIAAgFIALAAIAAgjIgJAHIgBAAIgCAAIAAAAIgCgDIAOgNIAFAAIAAAsIAKAAIAAAFg");
	this.shape_64.setTransform(104.3,379.8,1.048,1.049);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAFAZIAAgNIgUAAIgCAAIAAgBIgBgEIAXgfIAHAAIAAAfIAHAAIAAAEIAAABIgBAAIgGAAIAAANgAgLAHIAQAAIAAgVIABgCg");
	this.shape_65.setTransform(100,379.8,1.048,1.049);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgFAZIgEgBIgEgCIgCgCIACgDIABAAIAFABIACABIAFABIADgBIADgCIADgEIABgFIgBgEIgDgDIgDgBIgDgBIgIABIgFAAIAFgZIAWAAIAAADIgBADIgCABIgPAAIgCAMIAGgBQAEAAADACQACABADACQADACAAACIABAGQAAAEgCADQAAACgDAEIgGADQgDACgDAAg");
	this.shape_66.setTransform(95.7,379.9,1.048,1.049);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgLAZIAAgFIALAAIAAgjIgJAHIgBAAIgBAAIgBAAIgCgDIAOgNIAGAAIAAAsIAJAAIAAAFg");
	this.shape_67.setTransform(91.6,379.8,1.048,1.049);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgLAZIAAgFIAKAAIAAgjIgIAHIgBAAIgBAAIgBAAIgCgDIAOgNIAGAAIAAAsIAJAAIAAAFg");
	this.shape_68.setTransform(87.3,379.8,1.048,1.049);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAAANIAAgCIAAgBIAFgJIABgBIAAAAIgBAAIgFgJIAAgCIAAgBIADgBIAIANIAAAAIgIAOgAgJANIgBgCIAAgBIAGgJIABgBIgBAAIAAAAIgGgJIAAgCIABgBIACgBIAIANIAAAAIgIAOg");
	this.shape_69.setTransform(81.7,380.5,1.048,1.049);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgBAEIgCgBIgBgDIABgCIACgBIADAAIABABIABABIAAABIAAABIgBACIgBABIgCABg");
	this.shape_70.setTransform(79.2,382.1,1.048,1.049);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgOAZIAAgxIAdAAIAAAGIgWAAIAAArg");
	this.shape_71.setTransform(77.4,379.8,1.048,1.049);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAAAEIgCgBIgBgCIgBgBIABgBIABgBIACgBIACAAIABABIABABIAAACIgBACIgBABIgCABg");
	this.shape_72.setTransform(74.3,382.1,1.048,1.049);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAOAZIAAgXIgaAAIAAAXIgHAAIAAgxIAHAAIAAAWIAaAAIAAgWIAGAAIAAAxg");
	this.shape_73.setTransform(70.6,379.8,1.048,1.049);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgBAEIgBgBIgBgCIAAgBIAAgBIABgBIABgBIADAAIABABIABABIABABIgBABIgBACIgBABIgCABg");
	this.shape_74.setTransform(66.9,382.1,1.048,1.049);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgGAYQgDgBgEgEQgEgEgCgFQgBgEAAgGQAAgFABgEIAGgIQACgDAGgDQAFgCAEAAQAFAAAEACQAEACADADIgCADIgBABIgBAAIgBgBIgCgBIgFgCIgEAAIgGABIgGAEIgDAGQgCAEAAADQAAAFACADIADAGIAGAEIAFABIAEAAIAGgCIADgCIAAAAIACAAIADADQgDADgEADQgFACgGAAQgFAAgEgCg");
	this.shape_75.setTransform(63.7,379.8,1.048,1.049);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AANAZIAAgpIgBADIgYAlIgCABIgGAAIAAgxIAIAAIAAAiIgBADIAAAEIABgDIAYgkIABgBIACgBIAGAAIAAAxg");
	this.shape_76.setTransform(56.5,379.8,1.048,1.049);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AAUAfIAAgMIgnAAIAAAKIgBACIgBAAIgEAAIAAgSIAEAAIADgBIACgEIACgFIACgHIABgaIAeAAIAAArIAHAAIAAAQIAAACIgCAAgAgFgKIgEASIgDAFIAXAAIAAglIgPAAg");
	this.shape_77.setTransform(50.7,380.5,1.048,1.049);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AANAZIAAgXIgZAAIAAAXIgIAAIAAgxIAIAAIAAAWIAZAAIAAgWIAIAAIAAAxg");
	this.shape_78.setTransform(45.1,379.8,1.048,1.049);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AASAZIgBAAIgBgCIgFgLIgVAAIgFALIgBACIgBAAIgGAAIAUgxIAHAAIAUAxgAAAgOIgBACIgHASIARAAIgHgSIgBgCIgBgDg");
	this.shape_79.setTransform(39.8,379.8,1.048,1.049);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAOAZIgCAAIgBgCIgMgSIgCgCIgDgBIgGAAIAAAXIgHAAIAAgxIAHAAIAAAWIAHAAIACgBIANgTIABgCIACAAIAGAAIgPAUQgCADgCABIADAAIARAZg");
	this.shape_80.setTransform(35.2,379.8,1.048,1.049);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AAAAAIAAAAIAIgNIACABIABABIAAACIgHAJIABABIAGAJIAAABIgBACIgCABgAgKAAIAAAAIAIgNIACABIABABIgBACIgFAJIABABIAEAJIABABIgBACIgCABg");
	this.shape_81.setTransform(30.8,380.5,1.048,1.049);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgJAYIgIgFQgEgFgBgEQgCgGAAgEQAAgDACgGQABgFAEgDQADgDAFgDQAGgCADAAIAKACQAFADADADQADACACAGQACAEAAAFQAAAGgCAEQgBAFgEAEQgDAEgFABQgEACgGAAQgFAAgEgCgAgGgRIgFAEQgDACgBAEQgBAEgBADQABAFABADQAAADAEADIAFAEIAGABIAIgBIAFgEIAEgGIAAgIIAAgHIgEgGIgFgEIgIgBg");
	this.shape_82.setTransform(24.4,379.8,1.048,1.049);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgJAYQgEgCgEgDQgEgFgBgEQgCgEAAgGQAAgFACgEQACgFADgDQACgDAGgDQAGgCADAAQAEAAAGACQAGADACADQAEADABAFQACAGAAADQAAAEgCAGQgBAEgEAFQgDADgFACQgEACgGAAQgFAAgEgCgAgGgRIgGAEIgEAGIAAAHIAAAIIAEAGIAGAEIAGABIAHgBIAFgEQADgDABgDQABgDABgFQgBgDgBgEQgBgEgDgCIgFgEIgHgBg");
	this.shape_83.setTransform(18.5,379.8,1.048,1.049);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgJAYQgEgBgEgEQgDgEgCgFQgCgEAAgGQAAgFACgEQACgGADgCQADgDAFgDIAJgCQAEAAAGACQAFADADADIAFAIQACAEAAAFQAAAGgCAEIgFAJIgIAFQgEACgGAAQgFAAgEgCgAgGgRIgGAEIgDAGIgBAHIABAIIADAGIAGAEIAGABIAHgBIAGgEQADgDAAgDQACgDAAgFQAAgDgCgEQgBgEgCgCIgGgEIgHgBg");
	this.shape_84.setTransform(12.6,379.8,1.048,1.049);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#00A7E0").s().p("ApGBTQgqgmAYg4QAWgzBGgdQBOghB9ABQAcAAAaADIAgAEIANADIgSAgQgogLggAAQhAAAg0ATQhHAZgKAyQgHAeAWAaQAcAiA9gDQATgBAlgMQAtgPAbgVIA/g3IANgIQAIgDAKgBIBEAAIAWBeIArhcIBLAAIArBHIAghHIBFAAIg8CDIhHAAIgthMIgiBMIgrAAIAAAAIhSAAIgDgXIhKAAIgZAWIgwAAQg4AUhKAAQhqAAgugqgAjHA4IArgBIgDglgAGHB1IAsgrIgshjIBEAAIASA0IA4g2IBNAAIiFCFQgHAHgFACIgQACgAD+BqIhvAAIA9iDIBvAAQA1AAAUAYQAQAVgMAaQgLAYgdAQQglAUg6AAIgDAAgADpBIIATAAQAXABARgGQAdgIAFgWQAIgeg0gBIgUAAg");
	this.shape_85.setTransform(120,32.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(272));

	// bg
	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape_86.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape_86).wait(272));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(119.5,199.5,241,401);
// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/240x400_atlas_.jpg", id:"240x400_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;