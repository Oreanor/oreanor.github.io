(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"681x173_atlas_P_", frames: [[0,0,163,173],[0,234,129,28],[0,175,127,57]]}
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
	this.spriteSheet = ss["681x173_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_0 = function() {
	this.spriteSheet = ss["681x173_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Image_1 = function() {
	this.spriteSheet = ss["681x173_atlas_P_"];
	this.gotoAndStop(2);
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


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgvBpIAAgoIAHAAIAAADIAEgDIAFgBQAGAAAEAFQAEAEAAAHQAAAGgEAFQgEAEgGAAIgFgBIgEgDIAAAOgAgmBJQgCADAAAEQAAAEACACQACACAEAAQADAAACgCQADgDAAgDQAAgEgDgCQgCgDgDAAQgEAAgCACgAjBBpIAAgoIAHAAIAAADIAFgDIAFgBQAGAAADAFQAFAEAAAHQAAAGgFAFQgDAEgGAAIgFgBIgFgDIAAAOgAi4BJQgCADAAAEQAAAEACACQACACAEAAQAEAAACgCQACgDAAgDQAAgEgCgCQgCgDgEAAQgEAAgCACgADsBbQgEgFAAgGQAAgHAEgEQAFgFAGAAQAHAAAEAFQAFAEAAAHIAAACIgYAAQAAADADACQACACADAAQAFAAACgDIAHADQgDADgDACQgDABgFAAQgGAAgFgEgADyBIIgDAEIAQAAQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBgBQgBgBgEAAIgFABgACGBbQgEgFAAgGQAAgGAEgFQAFgFAGAAQAHAAAFAFQAEAFAAAGIAAACIgYAAQABAEACABQACACAEAAQAEAAADgDIAGADQgDADgDACQgDABgEAAQgHAAgFgEgACMBIIgCAEIAQAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQgBAAAAgBQgCgBgDAAQgDAAgDABgAA2BbQgEgFAAgGQAAgHAFgFQAFgEAFAAIAIACQADACADAEQACADAAAFQAAAFgCACQgDAEgDACIgIACQgGAAgFgEgAA8BKQgDACAAAEQAAADADADQACACADAAQAEAAACgCQACgCAAgEQAAgEgCgCQgCgDgEAAQgDAAgCADgAh7BcIAEgFIAFACIADgBIABgDIgBgCQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIgCAAIAAgFIABAAIADgBQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAIgBgCIgCgBIgFABIgDgFQAEgDAFAAQADAAAEADQADACAAAEQAAADgEADQAFACAAAFQAAAEgDADQgEACgFAAQgGAAgDgDgAiZBbQgFgFAAgGQAAgHAFgEQAEgFAGAAQAHAAAFAFQAEAEAAAHIAAACIgYAAQABADACACQACACAEAAQAEAAADgDIAGADQgDAEgDABQgDABgEAAQgHAAgEgEgAiUBIIgCAEIAQAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQgBAAAAgBQgCgBgDAAQgDAAgDABgAjhBbQgFgFAAgGQAAgHAFgEQAEgFAGAAQAHAAAFAFQAEAEAAAHIAAACIgYAAQABADACACQACACAEAAQAEAAADgDIAGADQgCADgDACQgEABgEAAQgHAAgEgEgAjcBIIgCAEIAQAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQgBAAAAgBQgCgBgDAAIgGABgADbBeIAAgQIgPAQIgEAAIAAgdIAHAAIAAARIAPgRIAEAAIAAAdgAC5BeIAAgMIgLAAIAAAMIgHAAIAAgdIAHAAIAAALIALAAIAAgLIAIAAIAAAdgAB3BeIgJgKIgBABIAAAJIgHAAIAAgJIgBgBIgJAKIgKAAIAOgPIgNgOIAJAAIAKALIAAgLIAHAAIAAALIAKgLIAJAAIgNAOIANAPgAAoBeIgHgSIgIASIgHAAIAMgdIAFAAIANAdgAAHBeIAAgQIgOAQIgEAAIAAgdIAHAAIAAARIAOgRIAEAAIAAAdgAg+BeIAAgWIgLAAIAAAWIgIAAIAAgdIAaAAIAAAdgAjzBeIAAgLIgGAAQgHAAgCgDQgEgCAAgFIAAgIIAIAAIAAAHQAAAEAFAAIAGAAIAAgLIAHAAIAAAdgAhhAZIAAgnIAHAAIAAADIAFgDIAFgBQAGAAADAFQAEADAAAHQAAAGgEAFQgEAEgGAAIgEgBIgFgDIAAAOgAhYgGQgCADAAADQAAADACADQACACAEAAQADAAADgCQACgDAAgDQAAgCgCgEQgCgCgEAAQgEAAgCACgAigAZIAGgNIgMgaIAIAAIAIARIAIgRIAIAAIgTAngACLALQgEgFAAgGQAAgFAEgFQAFgFAGAAQAHAAAFAFQAEAEAAAGIAAACIgYAAQABACACADQACACAEAAQAEAAADgDIAGADQgDADgDABQgCACgFAAQgHAAgFgEgACRgHIgCAEIAQAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgCgBgDAAQgDAAgDABgAAmALQgFgFAAgGQAAgGAFgEQAEgFAHAAQAGAAAFAFQAEAEAAAGIAAACIgYAAQABACACADQADACADAAQAEAAADgDIAGADQgCADgDABQgEACgEAAQgHAAgEgEgAAsgHIgDAEIAQAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgCgBgDAAIgFABgAg6ALQgEgFAAgGQAAgHAEgDQAEgFAGAAIAFABIAEADIAAgDIAIAAIAAAcIgIAAIAAgDIgEADIgFABQgFAAgFgEgAg0gGQgDAEAAACQAAADADADQACACADAAQAEAAACgCQADgDAAgDQAAgDgDgDQgCgCgEAAQgDAAgCACgAB6AOIAAgQIgPAQIgEAAIAAgcIAIAAIAAAQIAPgQIADAAIAAAcgABZAOIAAgMIgMAAIAAAMIgHAAIAAgcIAHAAIAAALIAMAAIAAgLIAHAAIAAAcgAAXAOIgHgRIgIARIgHAAIANgcIAEAAIANAcgAgYgOIAMAAQAFAAADACQACACAAADQAAAEgEADQAFAAAAAGQAAADgBACIgEADIgSAAgAgRAJIAEAAIADgBIABgCIgBgDQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgDAAgAgRgCIADAAIADgBIABgCIgBgDIgCgBIgEAAgAhwAOIAAgVIgLAAIAAAVIgHAAIAAgcIAaAAIAAAcgAi+g7IAAgGIgcAAIAAAGIgHAAIAAgNIAEAAIANggIAIAAIANAgIAEAAIAAANgAjVhIIASAAIgJgWgAAOg8IAAgFIgZAAIAAgdIAHAAIAAAWIAKAAIAAgWIAIAAIAAAWIAHAAIAAAMgADHhEQgFgFAAgGQAAgHAFgEQAEgFAHAAQAGAAAFAFQAEAEAAAHIAAACIgYAAQABACACADQADABADAAQAEAAADgCIAGADQgCADgDABQgEACgEAAQgHAAgEgEgADNhXIgDAEIAQAAIgDgEQgCgCgDAAIgFACgACjhFQgEgEAAgGQAAgHAFgFQAEgEAGAAQAFAAADACQAEADACADQACADAAAFQAAAEgCADQgDAEgDACQgDACgFAAQgGAAgFgFgACphWQgDADAAAEQAAAEACACQADACADAAQADAAADgCQACgCAAgEQAAgEgCgDQgCgCgEAAQgDAAgCACgAA+hFQgFgEAAgGQAAgHAFgFQAEgEAGAAQAFAAADACQAFADABADQACADAAAFQAAAEgCADQgDAFgDABQgDACgFAAQgGAAgEgFgABDhWQgDAEAAADQAAADADADQACACADAAQAEAAACgCQACgCAAgEQAAgEgCgDQgCgCgEAAQgDAAgCACgAhOhEQgEgFAAgGQAAgHAEgFQAEgEAGAAIAFABIAEADIAAgDIAHAAIAAAdIgHAAIAAgDIgEADIgFABQgGAAgEgEgAhIhWQgDADAAAEQAAADADADQACACADAAQAEAAACgCQACgCAAgFQAAgEgCgCQgCgCgEAAQgDAAgCACgAiPhFQgEgEAAgGIACgIQACgDAEgDQAEgCAFAAQAEAAADACIAGAFIgGADIgDgCIgEgBQgFAAgCACQgDAEAAADQAAADADADQACACAEAAQAGAAACgDIAGAEQgFAGgJAAQgHAAgFgFgACShBIAAgMIgMAAIAAAMIgHAAIAAgdIAHAAIAAAKIAMAAIAAgKIAHAAIAAAdgABwhBIAAgMIgLAAIAAAMIgHAAIAAgdIAHAAIAAAKIALAAIAAgKIAIAAIAAAdgAAshBIAAgRIgPARIgEAAIAAgdIAHAAIAAARIAQgRIADAAIAAAdgAgahBIAAgMIgLAAIAAAMIgHAAIAAgdIAHAAIAAAKIALAAIAAgKIAIAAIAAAdgAhnhBIAAgWIgKAAIAAgHIAbAAIAAAHIgJAAIAAAWgAighBIAAgRIgPARIgEAAIAAgdIAHAAIAAARIAPgRIAEAAIAAAdg");
	this.shape.setTransform(0,0,4.168,4.167);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-109.5,-43.8,219,87.7), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AChBhQgFgFAAgGQAAgGAEgFQAFgFAFAAIAFABIAEADIAAgDIAIAAIAAAeIgIAAIAAgEIgEADIgFABQgFAAgEgEgACmBQQgCACAAAEQAAADACADQACACAEAAQADAAADgCQACgCAAgEQAAgEgCgCQgDgDgDAAQgEAAgCADgAB9BhQgEgFAAgGQAAgEACgEQACgDAEgDIAJgCQADAAAEACQAEACACADIgGADIgDgCIgEgBQgEAAgDADQgDACAAAEQAAAEADACQACACAEAAQAGAAACgDIAGAEQgFAGgJAAQgHAAgFgEgABZBhQgFgFAAgGQAAgHAFgEQAEgFAFAAIAFABIAFADIAAgDIAHAAIAAAeIgHAAIAAgEIgFADIgEABQgGAAgEgEgABeBQQgCACAAAEQAAADACADQACACAEAAQAEAAACgCQACgCAAgEQAAgEgCgCQgCgDgEAAQgEAAgCADgAgmBhQgFgFAAgGQAAgHAFgEQAEgFAHAAQAGAAAFAFQAEAEAAAIIAAABIgYAAQABADACACQACACAEAAQAEAAADgDIAGADQgCADgDACQgEABgEAAQgHAAgEgEgAghBOIgCAEIAQAAIgDgEQgCgBgDAAgAhKBhQgEgFAAgGQAAgHAEgEQAFgFAGAAQAHAAAEAFQAFAEAAAIIAAABIgYAAQAAADADACQACACADAAQAFAAACgDIAHADQgDADgDACQgDABgFAAQgGAAgFgEgAhEBOIgDAEIAQAAIgDgEQgBgBgEAAIgFABgAiOBhQgFgFAAgGQAAgHAFgEQAEgFAGAAQAHAAAFAFQAEAEAAAIIAAABIgYAAQABADACACQACACAEAAQAEAAADgDIAGADQgCADgDACQgEABgEAAQgHAAgEgEgAiJBOIgCAEIAQAAIgDgEQgCgBgDAAIgGABgABHBlIAAgMIgGAAQgGAAgDgCQgDgCAAgGIAAgIIAHAAIAAAHQAAAEAFAAIAGAAIAAgLIAHAAIAAAegAASBlIAAghIgIAAIAEgHIALAAIAAAogAhbBlIAAgNIgMAAIAAANIgHAAIAAgeIAHAAIAAALIAMAAIAAgLIAHAAIAAAegAidBlIgEgSIgIASIgDAAIgJgSIgEASIgHAAIAHgeIAFAAIAJATIAJgTIAFAAIAIAegAi9AaIAAgGIgUAAIAAAGIgHAAIAAgMIAFAAIAKgWIAFAAIAKAWIAEAAIAAAMgAjMAOIAKAAIgFgMgAC7ASQgEgDgBgGIgEAAIAAALIgHAAIAAgcIAHAAIAAALIAEAAQABgFAFgDQADgEAGAAQAGAAAFAFQAFAEAAAGQAAAGgFAFQgEAEgHAAQgGAAgEgDgAC/AAQgCACAAAEQAAAEACACQADACADAAQADAAADgCQACgDAAgDQAAgEgCgCQgDgCgDAAQgDAAgDACgABQARQgEgEAAgHQAAgFACgCIAGgGQAFgCAEAAQAEAAAEACQADACACADIgGACIgDgBIgEgBQgEAAgDACQgDACAAAEQAAADADADQACACAEAAQAFAAADgDIAGAEQgFAGgIAAQgIAAgFgEgAAtARQgEgFAAgGQAAgGAFgFQAFgEAFAAIAIACQAEADABADQACACAAAFQAAAFgCACQgBAEgEACIgIACQgGAAgFgEgAAyAAQgCACAAAEQAAADACADQADACADAAQADAAADgCQACgCAAgEQAAgEgCgCQgDgCgDAAQgDAAgDACgAhRARQgEgFAAgGQAAgGAEgEQAEgFAHAAQAHAAAEAFQAFAEAAAGIgBACIgXAAQABADACACQACACADAAQAEAAADgDIAGADQgDAEgCABQgDABgFAAQgHAAgEgEgAhLgBIgDADIAQAAQAAgCgDgBQgCgBgDAAQgDAAgCABgACOgIIAIAAIAAAKIAJAAIAEADQACADAAADQAAAEgCACQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAIgSAAgACWAPIACAAIADgBIACgBIAAgCQAAgDgEAAIgDAAgAB4AUIAAgVIgKAAIAAgHIAcAAIAAAHIgKAAIAAAVgAAbAUIAAgMIgLAAIAAAMIgHAAIAAgcIAHAAIAAAKIALAAIAAgKIAIAAIAAAcgAgSgIIAHAAIAAAKIAJAAIADADQACACAAAEQAAAEgBACIgDADIgRAAgAgLAPIACAAIADgBIACgBIAAgCQAAgDgEAAIgDAAgAgeAUIgHgSIgIASIgHAAIAMgcIAFAAIANAcgAhqAUIAAgVIgKAAIAAgHIAbAAIAAAHIgKAAIAAAVgAiAAUIAAgQIgPAQIgEAAIAAgcIAHAAIAAAQIAQgQIADAAIAAAcgAieAUIgHgSIgIASIgHAAIAMgcIAFAAIAMAcgACQgwIAAgoIAHAAIAAADIAEgDIAFgBQAHAAADAFQAEAEAAAHQAAAGgEAFQgEAEgGAAIgEgBIgFgDIAAAOgACZhQQgCADAAAEQAAADACADQACACAEAAQADAAADgCQACgCAAgEQAAgEgCgDQgDgCgDAAQgDAAgDACgAAygwIAAgoIAHAAIAAADIAEgDIAFgBQAHAAADAFQAEAEAAAHQAAAGgEAFQgEAEgGAAIgFgBIgEgDIAAAOgAA7hQQgCADAAAEQAAADACADQACACAEAAQADAAADgCQACgCAAgEQAAgEgCgDQgDgCgDAAQgDAAgDACgAhsgwIAAgoIAHAAIAAADIAFgDIAFgBQAFAAAFAFQAEAEAAAHQAAAGgFAFQgDAEgGAAIgFgBIgFgDIAAAOgAhjhQQgCACAAAFQAAAEACACQACACAEAAQADAAADgCQACgDAAgDQAAgDgCgEQgDgCgDAAQgDAAgDACgAC3g+QgEgEAAgHQAAgIAEgDQAEgFAGAAIAFABIAEADIAAgDIAHAAIAAAdIgHAAIAAgDIgEADIgFABQgGAAgEgEgAC9hQQgDAEAAADQAAADADADQACACADAAQAEAAACgCQACgCAAgEQAAgFgCgCQgCgCgEAAQgDAAgCACgABZg+QgEgFAAgGQAAgHAFgFQAFgEAFAAQAEAAAEACQADACADAEQACADAAAFQAAAEgCADQgCAEgEACIgIACQgGAAgFgEgABehPQgCACAAAEQAAAEACACQADACADAAQADAAADgCQACgDAAgDQAAgEgCgCQgCgDgEAAQgDAAgDADgAiqg/QgEgEAAgGQAAgFACgDQACgEAEgCQADgCAFAAQAFAAADACIAGAFIgGADIgEgCIgEgBQgEAAgCADQgDACAAAEQAAAEADACQACACAEAAQAFAAADgDIAGAEQgFAGgJAAQgIAAgEgFgAj2g9QgEgDgCgFIgBgKQAAgGACgFQABgDADgDQACgCAEgBIASgBIAAAHIgPABIgEACQgBAAAAABQgBAAAAAAQgBABAAAAQAAABAAAAIgBAGQADgIAIAAQAGAAADAFQAFAEAAAGQAAAHgFAFQgEAEgHAAQgFAAgEgDgAjzhPQgCACAAAEQAAAEACACQADACADAAQADAAADgCQACgDAAgDQAAgEgCgCQgBgDgFAAQgEAAgCADgAklg9IAHgNQgEAAgFgEQgDgDAAgGQAAgFADgEQAEgDAFAAQAGAAADADQAEAFAAAEIgBAEIgNAZgAkhhbQgBABAAAAQAAAAAAABQgBAAAAABQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAgAEkg7IgEgRIgIARIgDAAIgJgRIgEARIgHAAIAHgdIAFAAIAJASIAJgSIAFAAIAHAdgAD5g7IgEgRIgJARIgDAAIgIgRIgEARIgIAAIAIgdIAFAAIAJASIAJgSIAFAAIAHAdgAB6g7IAAgdIARAAIAAAHIgKAAIAAAWgAAjg7IAAgWIgLAAIAAAWIgHAAIAAgdIAZAAIAAAdgAgKg7IgHgJIgHAJIgJAAIAMgPIgLgOIAJAAIAGAIIAGgIIAIAAIgKAOIALAPgAgsg7IAAgdIAIAAIAAAdgAhHhYIAHAAIAAALIAJAAIAFADQABADAAADQAAAEgBACIgEADIgRAAgAhAhAIACAAIADgBIACgBIAAgCQAAgDgEAAIgDAAgAiCg7IAAgWIgKAAIAAgHIAbAAIAAAHIgJAAIAAAWgAi8g7IAAgdIAIAAIAAAdgAjXhYIAHAAIAAALIAJAAIAEADQACACAAAEQAAAEgBACIgEADIgRAAgAjQhAIACAAIADgBIACgBIAAgCQAAgDgEAAIgDAAg");
	this.shape.setTransform(0,0,4.168,4.165);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-124.7,-42.1,249.4,84.4), null);


(lib.ClipGroup_4_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgYAEQgBAAAAgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAABAAIAyAAIgBAIg");
	mask.setTransform(2.7,0.5);

	// Слой 2
	this.instance = new lib.Image_0();
	this.instance.parent = this;
	this.instance.setTransform(0,1,0.042,0.034,0,180,0.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_0, new cjs.Rectangle(0.1,0.1,5.4,0.9), null);


(lib.ClipGroup_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgZAJQgCgHAEgBIgCgBQAAgFABgBQABgCAGAAIAsAAIgBASg");
	mask.setTransform(2.7,1);

	// Слой 2
	this.instance = new lib.Image_1();
	this.instance.parent = this;
	this.instance.setTransform(0,2,0.042,0.034,0,180,0.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_0, new cjs.Rectangle(0.1,0.1,5.3,1.9), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgaAEIAAgIIA1AAIAAAJg");
	mask.setTransform(2.7,0.5);

	// Слой 3
	this.instance = new lib.ClipGroup_4_0();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0,0,5.5,1), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgaAKIAAgTIA1ABIAAASg");
	mask.setTransform(2.7,1);

	// Слой 3
	this.instance = new lib.ClipGroup_3_0();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0,0,5.4,2), null);


// stage content:
(lib._681x173 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Eg1HgNbMBqPAAAIAAa3MhqPAAAg");
	this.shape.setTransform(340.5,86.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(156));

	// Слой 4
	this.instance = new lib.t2();
	this.instance.parent = this;
	this.instance.setTransform(370.4,88.9,0.9,0.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(78).to({_off:false},0).to({scaleX:1,scaleY:1,x:370.5,y:89,alpha:1},6,cjs.Ease.get(1)).wait(66).to({scaleX:0.9,scaleY:0.9,x:370.4,y:88.9,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// Слой 3
	this.instance_1 = new lib.t1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(370,86.7,0.9,0.9);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,y:86.5,alpha:1},4,cjs.Ease.get(1)).wait(69).to({scaleX:0.9,scaleY:0.9,y:86.7,alpha:0},6,cjs.Ease.get(1)).wait(77));

	// Слой 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#418BBF").s().p("AgJAYQgEgCgEgDQgDgDgBgFQgCgFAAgGQAAgFACgFQABgFADgDQAEgDAEgCQAFgCAEAAQAGAAAEACQAFACADADQADADACAFQABAFAAAFQAAAGgBAFQgCAFgDADQgDADgFACQgEACgGAAQgEAAgFgCgAgKgNQgDAFAAAIQAAAJADAFQAEAFAGAAQAHAAAEgFQAEgFAAgJQAAgIgEgFQgEgEgHgBQgGABgEAEg");
	this.shape_1.setTransform(70.7,162.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#418BBF").s().p("AgWAiIAAhCIAGAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIABAGQADgEAFgCQAEgCAEAAQAEAAAEABQAEACADADQACAEABAEQABAFAAAHQAAAFgBAEQgBAFgDADQgDAEgEACQgFACgFAAQgDAAgEgCIgFgEIAAAWgAgGgYQgEACgCAEIAAAXQACADADABQADACAEAAQAFAAAEgFQAEgFgBgIIAAgJIgCgFQgCgDgCgBIgGgBQgDAAgDACg");
	this.shape_2.setTransform(65.2,163.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#418BBF").s().p("AASAkIAAg/IgiAAIAAA/IgLAAIAAhHIA3AAIAABHg");
	this.shape_3.setTransform(58.6,161.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#418BBF").s().p("AgEAZIAAgqIgTAAIAAgHIAvAAIAAAHIgUAAIAAAqg");
	this.shape_4.setTransform(52.4,162.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#418BBF").s().p("AgWAiIAAhCIAGAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIABAGQADgEAFgCQAEgCAEAAQAEAAAEABQAEACADADQACAEABAEQABAFAAAHQAAAFgBAEQgBAFgDADQgDAEgEACQgFACgFAAQgDAAgEgCIgFgEIAAAWgAgGgYQgEACgCAEIAAAXQACADADABQADACAEAAQAFAAAEgFQAEgFgBgIIAAgJIgDgFQgBgDgCgBIgGgBQgDAAgDACg");
	this.shape_5.setTransform(47.2,163.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#418BBF").s().p("AgKAZIgFgCQgCgCgBgDQgBgCAAgDQAAgEACgCIAFgFIAJgDQAFgBAJAAIAAgEQAAgGgCgDQgDgDgFAAIgEABIgEACIgDACIgCAAIgCAAIgBgBIgCgDQAFgEAFgCQAEgCAFAAQAFAAADABQADABADADIADAGIABAIIAAAfIgEAAIgCAAIgBgCIgBgEIgEADIgEACIgEACIgFAAIgFgBgAABAEIgGACIgEACIgBAEIABADIABADIADABIADAAIADAAIAEgBIADgCIADgDIAAgKIgKABg");
	this.shape_6.setTransform(41.6,162.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#418BBF").s().p("AAUAZIAAgfIAAgEIAAgDIgQAdIgCABIgCABIAAAAIgBgBIgBgBIgRgdIAAADIAAAEIAAAfIgJAAIAAgxIAIAAIACAAIABACIAQAZIABABIAAADIABgDIABgBIAPgZIABgCIACAAIAIAAIAAAxg");
	this.shape_7.setTransform(35.7,162.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#418BBF").s().p("AgJAiQgGgDgEgFQgFgFgDgGQgCgHAAgIQAAgHACgHQADgHAFgFQAFgEAGgDQAHgDAGAAQAIAAAGADQAGACAEAEIgDAFIgBABIgBAAIgCgBIgEgCIgFgCIgIgBQgFAAgDACQgGACgCAEQgDADgDAFQgCAFABAGQgBAGACAGQADAFADADQADAEAFACQADACAFAAIAFgBIAFgBIAEgCIAEgDIABAAIABAAIABAAIAEAFQgEAFgHADQgGADgIAAQgIAAgGgDg");
	this.shape_8.setTransform(29,161.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#418BBF").s().p("AgBAQIAAgJIAAgCIAAgBIAAgBIAAABIgCABIgJAFIgCgEIAIgFIACAAIACgBIgEAAIgIgFIACgEIAJAFIACACIAAgBIAAgCIAAgKIADAAIAAAKIAAACIAAABIACgCIAJgFIACAEIgIAFIgCAAIgCAAIAEABIAIAFIgCAEIgJgFIgBgBIgBgBIAAAEIAAAJg");
	this.shape_9.setTransform(20.8,159.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(156));

	// Слой 1
	this.instance_2 = new lib.ClipGroup_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(540.1,127.3,4.169,4.167,0,0,0,2.6,1);

	this.instance_3 = new lib.ClipGroup_4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(539.9,133.2,4.169,4.167,0,0,0,2.7,0.5);

	this.instance_4 = new lib._1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(518,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgFABIgBgBIAMAAIABABg");
	this.shape_10.setTransform(129.4,84.9,4.168,4.165);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgCAGIADgLIACAAIgDALg");
	this.shape_11.setTransform(132.4,89.7,4.168,4.165);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#01A0C6").s().p("AgFAEIACgHIAIAAIgCAHg");
	this.shape_12.setTransform(129.2,89.5,4.168,4.165);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgMALQgDgCABgHQAAgFAGgFQAGgGAGAAQAFAAAEAEQADACgBAHQAAAGgGAFQgGAFgGAAQgGAAgDgEgAgDgEQgDADgBACQAAABAAABQAAABAAAAQABABAAAAQAAABABAAQAAAAAAABQABAAAAAAQABABABAAQAAAAABAAQADAAADgDQACgDAAgCIgBgFQAAAAAAgBQgBAAAAAAQgBAAgBAAQAAAAgBgBQgCABgDACg");
	this.shape_13.setTransform(151.5,93.7,4.168,4.165);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgLAOIAIgbIAGAAIAAAEIACgEIAEgBIADABIgCAHIgDAAQgDAAgCACIgCAFIgDANg");
	this.shape_14.setTransform(140.7,93.7,4.168,4.165);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#01A0C6").s().p("AgKASIAFgTIgEAAIACgIIAFAAIACgIIAIAAIgDAIIAGAAIgCAIIgGAAIgEATg");
	this.shape_15.setTransform(128.3,92.1,4.168,4.165);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgSAXIANgtIAMAAQAFAAAEACQAEADgBAFIgBADQgBAGgFADQgFADgHAAIgDAAIgGAUgAgBgEIADAAQAIAAAAgGQAAgEgFAAIgEAAg");
	this.shape_16.setTransform(131.4,90,4.168,4.165);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#418BBF").s().p("AgLAOIAIgbIAGAAIgBAEIAEgEIADgBIADABIgCAHIgDAAQgDAAgCACIgCAFIgCANg");
	this.shape_17.setTransform(119.2,93.7,4.168,4.165);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#418BBF").s().p("AgOALQgDgDABgFQAAgGAGgFQAFgGAGAAQAFAAADAEIAAgDIAIAAIgHAbIgIAAIABgDQgDAEgGAAQgGAAgCgEgAgFgEQgDADAAACQAAABAAABQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABQABAAAAAAQABABAAAAQABAAAAAAQADAAADgDQACgCABgDIgBgFQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAgBgBQgCABgDACg");
	this.shape_18.setTransform(107.6,93.7,4.168,4.165);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#418BBF").s().p("AALAOIAEgRQAAgEgDAAQgEAAgDAHIgEAOIgHAAIAFgRQAAgBAAAAQAAgBgBgBQAAAAgBAAQAAgBgBAAQgFABgCAGIgEAOIgIAAIAIgbIAHAAIgBAEQAEgFAFAAQAEABACAEQAEgEAGgBQAEAAACACQACAEAAACIgFAUg");
	this.shape_19.setTransform(89.5,93.7,4.168,4.165);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#418BBF").s().p("AgMASQgDgDAAgFIABgDIAJAAIgBABQAAAFAEAAQAAAAABAAQAAAAABgBQAAAAAAAAQAAAAAAgBQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgCgCgCIgHgDQgDgDAAgEQABgFAFgEQAEgDAGAAQAEAAADACQADADgBAEIAAACIgJAAIAAgBQABgDgEAAIgDABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQgBACADACIAGAEQAEACAAAEIgBACQgBAGgFADQgEADgFAAQgGAAgCgCg");
	this.shape_20.setTransform(74,91.5,4.168,4.165);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#418BBF").s().p("AByAQIAAgFIgSAAIAAAFIgDAAIAAgIIACAAIAIgWIADAAIAJAWIACAAIAAAIgABpgKIgHASIANAAIgGgTgAB5AHQgEgFAAgDQAAgGAEgEQAGgEAEAAQAFAAAFAEQADAEAAAGQAAAEgDAEQgFAEgFABQgFgBgFgEgAB8gJQgDAEAAAEQAAADADADQADAEAEgBQAEABADgEQAEgDAAgDQAAgFgEgDQgDgDgEAAQgEAAgDADgAiuAHQgEgFAAgDQAAgGAEgEQAFgEAFAAQAIAAAEAHIgFAAQgDgEgEAAQgFAAgCADQgDADgBAFQABADADADQACAEAFgBQAEAAADgDIAFAAIgGAEQgCACgEABQgGgBgEgEgADRALIAAgZIAOAAIAAADIgLAAIAAAIIAKAAIAAADIgKAAIAAAIIALAAIAAADgAC+ALIAAgZIAPAAIAAADIgLAAIAAAIIAKAAIAAADIgKAAIAAAIIALAAIAAADgAC2ALIAAgLIgLAAIAAALIgDAAIAAgZIADAAIAAALIALAAIAAgLIAEAAIAAAZgACUALIAAgZIAOAAIAAADIgKAAIAAAHIADAAQAFAAACACQACACAAADQAAAEgCACQgCACgFAAgACYAIIADAAQAGAAAAgFQAAgEgGAAIgDAAgABPALIACgFIgKgUIADAAIAIARIAIgRIADAAIgMAZgAA2ALIAAgFIADAAIAAAFgAAjALIAAgZIANAAIAAADIgKAAIAAAIIAKAAIAAADIgKAAIAAAIIAKAAIAAADgAARALIAAgZIANAAIAAADIgKAAIAAAIIAKAAIAAADIgKAAIAAAIIAKAAIAAADgAAJALIAAgLIgLAAIAAALIgDAAIAAgZIADAAIAAALIALAAIAAgLIADAAIAAAZgAgNALIAAgWIgJAWIgDAAIgIgWIgBAAIAAABIABABIAAAUIgDAAIAAgZIAEAAIAJAUIAIgUIAFAAIAAAZgAg1ALIACgFIgKgUIADAAIAIARIAIgRIAEAAIgMAZgAhNALIAAgFIADAAIAAAFgAhhALIAAgZIAOAAIAAADIgLAAIAAAIIALAAIAAADIgLAAIAAAIIALAAIAAADgAhzALIAAgZIAOAAIAAADIgLAAIAAAIIAKAAIAAADIgKAAIAAAIIALAAIAAADgAiGALIAAgZIAHAAQAEAAACACQADABAAAEQAAAEgDACQgCABgEAAIgEAAIAAALgAiDgCIAEAAQAFAAAAgFQAAgEgFAAIgEAAgAiRALIAAgWIgGAAIAAgDIAOAAIAAADIgGAAIAAAWgAi5ALIAAgZIAEAAIAAAZgAjKALIAAgZIADAAIAAAKIADAAQAEAAADACQACACAAADQAAAEgCACQgCACgFAAgAjHAIIADAAQAGAAAAgFQAAgEgGAAIgDAAgAjeALIAAgZIAPAAIAAADIgLAAIAAAHIADAAQAFAAACACQACACAAADQAAAEgCACQgCACgFAAgAjaAIIADAAQAGAAAAgFQAAgEgGAAIgDAAg");
	this.shape_21.setTransform(112.7,134.7,4.168,4.165);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#418BBF").s().p("AiKAoQgiAAgPgOQgNgMAIgRQAHgQAWgJQAZgLAoAAIAcADIAEABIgGAJQgOgDgJAAQgUAAgRAGQgXAIgDAPQgCAKAHAIQAJAMATgBQAHgBAMgDQAOgGAIgGIAVgRIAEgDIAGgBIAWAAIAHAdIANgdIAYAAIAOAXIAKgXIAWAAIgTAqIgXAAIgOgZIgLAZIgoAAIgBgIIgYAAIgIAIIgPAAQgRAGgYAAgAgyASIgBgMIgNAMIAOAAgAB9AmIAPgOIgPggIAWAAIAGARIASgRIAZAAIgrAqIgEADIgFABgAAuAiIATgqIAkAAQARAAAGAIQAFAGgDAJQgJATgkAAgABLAYIAGAAQAUAAAEgMQACgKgRAAIgGAAg");
	this.shape_22.setTransform(112.8,55.1,4.168,4.165);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#418BBF").s().p("AljDPIAAmdILHAAIAAGdg");
	this.shape_23.setTransform(370,86.6,4.168,4.165);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AswDPIAAmdIZhAAIAAGdg");
	this.shape_24.setTransform(340.5,86.6,4.168,4.165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(156));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(340,86,682,174);
// library properties:
lib.properties = {
	width: 681,
	height: 173,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/681x173_atlas_P_.png", id:"681x173_atlas_P_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;