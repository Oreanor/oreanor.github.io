(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"100pcx300_atlas_NP_", frames: [[402,0,400,400],[0,402,400,400],[0,0,400,400]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
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
	this.spriteSheet = ss["100pcx300_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["100pcx300_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["100pcx300_atlas_NP_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.legal = function() {
	this.initialize(img.legal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,254,32);// helper functions:

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


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdDhQgOgHgIgOQgIgOgBgVQABgTAIgPQAIgOANgJQAOgIAQAAQANgBAKAGQAKAFAHALIAAAAIAAgSIAbAAIAAB7IgbAAIAAgRIAAAAQgHAKgJAEQgIAEgHABIgJABQgQABgNgJgAgNCIQgIAGgFAIQgEAIAAALQAAALAEAIQAFAJAIAEQAIAEAKABQAPAAAKgLQAJgKABgRQgBgLgEgHQgEgJgIgFQgIgEgKAAQgKAAgIAEgAG2DmIAAhPIg2BPIgdAAIAAh7IAdAAIAABPIA2hPIAdAAIAAB7gAEuDmIAAhPIg3BPIgdAAIAAh7IAdAAIAABPIA3hPIAdAAIAAB7gACtDmIgehTIgfBTIggAAIAxh7IAbAAIAyB7gAh+DmIAAhhIgdAAIAAgaIBXAAIAAAaIgdAAIAABhgAjLDmIAAhzIhJBzIgeAAIAAijIAeAAIAAByIBJhyIAeAAIAACjgAnWDmIAAh7IA1AAQANABAHAFQAIAEAEAHQAEAIAAAIQgBAIgFAHQgFAGgIAEQALADAGAIQAGAHAAAKQAAAKgFAIQgEAJgJAEQgJAGgOAAgAm5DMIAVAAQAGAAADgBQADgDABgDIABgFIgBgFQAAgDgEgCQgDgCgGAAIgVAAgAm5CaIATAAQAFAAADgCQAEgDAAgGQAAgDgDgEQgCgDgHAAIgTAAgAlZgdIAAiiIAaAAIAAAQIABAAQAFgJAIgFQAHgEAHgBIAMgCQARABAOAHQANAJAJAOQAIAOAAAVQAAAMgEAMQgEAMgIAJQgIAIgLAGQgLAFgPABIgLgBQgHgCgGgEQgHgEgGgHIAAAAIAAA2gAktijQgIAFgEAJQgFAHAAAMQAAALAFAJQAEAIAIAEQAIAFAKAAQAKgBAJgEQAIgFAEgIQAFgJAAgKQAAgJgEgIQgDgJgIgGQgIgFgMAAQgLAAgIAEgAJnhKQgOgHgIgOQgIgPgBgTQABgUAIgPQAIgOANgJQAOgIARgBQANAAAKAGQAKAGAHAKIAAAAIAAgRIAbAAIAAB5IgbAAIAAgQIAAAAQgHAJgJAFQgIAFgHABIgKABQgQAAgNgJgAJ3ijQgIAFgFAJQgEAJAAALQAAAKAEAJQAFAHAIAFQAIAEALABQAPgBAKgJQAJgLABgQQgBgMgEgHQgEgJgIgFQgIgEgKAAQgLAAgIAEgAFWhKQgNgHgIgOQgJgPAAgTQAAgUAIgPQAIgOAOgJQANgIARgBQAOAAAKAGQAKAGAGAKIABAAIAAgRIAbAAIAAB5IgbAAIAAgQIgBAAQgHAJgIAFQgIAFgHABIgKABQgQAAgOgJgAFmijQgIAFgEAJQgFAJAAALQAAAKAFAJQAEAHAIAFQAIAEALABQAQgBAJgJQAKgLAAgQQAAgMgEgHQgFgJgHgFQgIgEgLAAQgLAAgIAEgABuhKQgPgJgIgPQgIgOgBgSQABgSAIgPQAIgPAPgJQAOgIATgBQATABAPAIQAOAJAIAPQAJAPAAASQAAASgJAOQgIAPgPAJQgOAJgTAAQgTAAgOgJgAB8ijQgIAFgEAJQgEAIAAALQAAAKAEAIQAEAJAIAEQAIAGALAAQALAAAIgGQAIgEAEgJQAFgIAAgKQAAgLgFgIQgEgJgIgFQgIgEgLAAQgLAAgIAEgAgbhHQgLgGgHgIQgHgIgEgLQgDgKgBgKIgCgSQABgaAGgQQAGgSAKgJQAKgJALgFQALgFAIAAIAOgCIAvgBIAAAaIgwABIgOACQgHABgIAEQgIAEgFAHQgGAIgDANIABAAQAHgLAMgFQAMgHAOAAQARAAANAIQANAHAHANQAIANAAATQAAASgIAPQgJAPgOAIQgPAJgUAAQgQgBgMgFgAgOigQgIAFgEAIQgFAIAAALQAAAQAKAKQAJAIAPABQAQgBAJgJQAJgJABgQQgBgMgEgHQgEgIgIgFQgIgEgKAAQgJAAgIAEgAiwhKQgOgHgIgOQgIgPgBgTQABgUAIgPQAIgOANgJQAOgIARgBQANAAAKAGQAKAGAHAKIAAAAIAAgRIAbAAIAAB5IgbAAIAAgQIAAAAQgHAJgJAFQgIAFgHABIgKABQgQAAgNgJgAigijQgIAFgFAJQgEAJAAALQAAAKAEAJQAFAHAIAFQAIAEALABQAPgBAKgJQAJgLABgQQgBgMgEgHQgEgJgIgFQgIgEgKAAQgLAAgIAEgAmuhGQgJgEgFgHQgFgHgCgHIgCgPIAdAAQAAAGAEAFQAEAGAJAAIAFgBQADgBADgCQADgDAAgGQAAgGgCgDQgDgCgDgCIgFAAIgGAAIAAgZIAFAAQAHAAADgDQADgEAAgFQAAgFgDgDQgCgDgDAAIgFAAQgGAAgDADQgEAEAAAFIgeAAQABgLAFgJQAFgJAJgGQAJgFAOgBQAOABAJAEQAKAFAEAIQAEAIAAAIQAAAKgFAHQgGAGgIAEQALADAFAIQAFAIAAAKQAAAMgFAKQgFAIgKAFQgKAGgOAAQgOgBgIgEgAo3hKQgOgHgIgOQgIgPgBgTQABgUAIgPQAIgOANgJQAOgIARgBQANAAAKAGQAKAGAHAKIAAAAIAAgRIAbAAIAAB5IgbAAIAAgQIAAAAQgHAJgJAFQgIAFgHABIgKABQgQAAgNgJgAonijQgIAFgFAJQgEAJAAALQAAAKAEAJQAFAHAIAFQAIAEALABQAPgBAKgJQAJgLABgQQgBgMgEgHQgEgJgIgFQgIgEgKAAQgLAAgIAEgAIahGIAAgyIguAAIAAAyIgdAAIAAh5IAdAAIAAAtIAuAAIAAgtIAdAAIAAB5gAD1hGIAAhfIgdAAIAAgaIBYAAIAAAaIgeAAIAABfgArHhGIAAijIAtAAQAUABALAFQAMAGAGAJQAGAHACAJQACAJAAAFQAAAJgDAIQgCAIgHAJQgGAHgMAFQgLAEgSABIgPAAIAAA9gAqpihIASAAQAEABAGgCQAGgBAEgEQAFgFAAgKQAAgJgFgGQgEgEgGgBQgGgCgEABIgSAAg");
	this.shape.setTransform(0,-2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-74.6,-33.5,149.3,60.3), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjZGSIAAijIAaAAIAAAQIABAAQAFgIAIgFQAHgEAHgBIAMgCQARAAAOAIQANAIAJAPQAIAOAAAUQAAANgEAMQgEALgIAJQgIAJgLAGQgLAFgPAAIgLgBQgHgBgGgEQgHgEgGgHIAAAAIAAA2gAitEMQgIAFgEAIQgFAIAAALQAAAMAFAIQAEAJAIAEQAIAFAKAAQAKgBAJgEQAIgFAEgJQAFgIAAgLQAAgIgEgJQgDgIgIgGQgIgGgMAAQgLAAgIAFgAsPGSIAAijIAaAAIAAAQIABAAQAFgIAIgFQAHgEAHgBIAMgCQARAAAOAIQANAIAJAPQAIAOAAAUQAAANgEAMQgEALgIAJQgIAJgLAGQgLAFgPAAIgLgBQgHgBgGgEQgHgEgGgHIAAAAIAAA2gArjEMQgIAFgEAIQgFAIAAALQAAAMAFAIQAEAJAIAEQAIAFAKAAQAKgBAJgEQAIgFAEgJQAFgIAAgLQAAgIgEgJQgDgIgIgGQgIgGgMAAQgLAAgIAFgAO4FnQgMgGgIgJQgIgKgEgLQgEgLAAgLQAAgKAEgMQAEgLAIgKQAIgKANgGQAMgGAQgBQATABAOAIQAOAJAIAOQAIAPAAASIAAAHIgBAGIhfAAQADAMAIAGQAJAGAMABQAHAAAHgDQAHgCAGgHIAhAAQgGAOgJAJQgJAIgKADQgJAEgHABIgJAAQgRAAgMgGgAP1EfQgDgLgJgHQgIgGgMAAQgMAAgJAHQgJAGgEALIBCAAIAAAAgAIjFnQgMgGgIgJQgIgKgEgLQgEgLAAgLQAAgKAEgMQAEgLAIgKQAIgKANgGQAMgGAQgBQATABAOAIQAOAJAIAOQAIAPAAASIAAAHIgBAGIhfAAQADAMAIAGQAJAGAMABQAHAAAHgDQAHgCAGgHIAhAAQgGAOgJAJQgJAIgKADQgJAEgHABIgJAAQgRAAgMgGgAJgEfQgDgLgJgHQgIgGgMAAQgMAAgJAHQgJAGgEALIBCAAIAAAAgADYFkQgPgIgIgPQgIgPgBgRQABgTAIgOQAIgPAPgJQAOgIATgBQATABAPAIQAOAJAIAPQAJAOAAATQAAARgJAPQgIAPgPAIQgOAJgTAAQgTAAgOgJgADmEMQgIAFgEAJQgEAIAAALQAAAKAEAIQAEAIAIAFQAIAFALABQALgBAIgFQAIgFAEgIQAFgIAAgKQ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QAOAAAKAGQAKAFAGALIABAAIAAgSIAbAAIAAB6IgbAAIAAgQIgBAAQgHAJgIAFQgIAEgHABIgKABQgQAAgOgIgAkClLQgIAFgEAJQgFAIAAALQAAALAFAIQAEAIAIAFQAIAEALABQAQgBAJgKQAKgKAAgRQAAgLgEgIQgFgIgHgFQgIgFgLAAQgLAAgIAFgAnzjwQgNgGgIgJQgIgKgFgMQgEgLAAgMQAAgKAEgMQAEgLAIgJQAJgKAMgGQANgFARgBQAPAAAMAGQANAGAIAKQAJAKAEANIghAAQgEgJgIgEQgHgEgKAAQgMAAgIAFQgIAFgEAJQgEAIAAAKQAAAKAEAJQAFAIAIAFQAIAFALABIAIgBQAFgBAGgEQAGgDAEgHIAhAAQgFANgIAJQgIAKgMAGQgMAFgPAAQgRAAgNgGgAJOjuIAAgzIguAAIAAAzIgdAAIAAh6IAdAAIAAAtIAuAAIAAgtIAdAAIAAB6gAHOjuIAAgzIgtAAIAAAzIgdAAIAAh6IAdAAIAAAtIAtAAIAAgtIAdAAIAAB6gADCjuIAAhPIg3BPIgdAAIAAh6IAdAAIAABPIA3hPIAdAAIAAB6gAhOjuIAAgzIguAAIAAAzIgdAAIAAh6IAdAAIAAAtIAuAAIAAgtIAdAAIAAB6gAlzjuIAAhgIgdAAIAAgaIBYAAIAAAaIgeAAIAABggApIjuIAAhPIg3BPIgdAAIAAh6IAdAAIAABPIA3hPIAdAAIAAB6g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-120.1,-49,229.8,90.3), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-134.4,-48.2,263.3,129.9), null);


(lib.six = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag4ArQgGgCgEgDQgFgGgCgIQgDgIAAgLQAAgLACgIQADgJAFgIQAFgGAJgDQAIgEAKgBIAGABIAFABIAAALIgBAAIgEgBIgHgBQgNAAgHAHQgIAIgBAOIAKgFQAEgBAHAAIAJABQAFABAEADQAFADADAFQADAGAAAHQAAANgJAJQgJAJgNAAQgGgBgFgCgAg3gBIgJADIAAACIAAADQAAAKACAGQABAEAEAEQACADAEAAQADACADAAQAJAAAFgFQAFgFAAgLQAAgFgCgEQgCgDgDgCQgDgCgDAAIgHgBIgJABgAAjAqIAAggIgfAAIAAgJIAfAAIAAggIAKAAIAAAgIAgAAIAAAJIggAAIAAAgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.six, new cjs.Rectangle(-7.7,-4.5,15.5,9.1), null);


(lib.p3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._3();
	this.instance.parent = this;
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p3, new cjs.Rectangle(-200,-200,400,400), null);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2, new cjs.Rectangle(-200,-200,400,400), null);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1, new cjs.Rectangle(-200,-200,400,400), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiAGIgDgLIBIAAIADALg");
	this.shape.setTransform(18.1,-6.4,1.061,1.061);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPAjIAShFIANAAIgTBFg");
	this.shape_1.setTransform(22.1,0.1,1.061,1.061);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009FE3").s().p("AgcAVIAKgpIAvAAIgKApg");
	this.shape_2.setTransform(17.7,-0.2,1.061,1.061);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("AhFA+QgSgSADgeQAEgmAggcQAggcAlAAQAfAAARASQATASgDAeQgFAogfAbQgfAcgmAAQgeAAgTgTgAgXgaQgPAQgCASQgCAPAJAJQAIAKAPAAQATAAAPgPQAPgPACgTQACgPgIgJQgIgKgQAAQgTAAgPAPg");
	this.shape_3.setTransform(48.3,5.7,1.061,1.061);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("AhABOIAoiXIAoAAIgEARQAGgIAKgGQALgHAIAAQALAAAHAEIgLAnQgIgDgJAAQgPAAgLAPQgJALgDARIgTBIg");
	this.shape_4.setTransform(33.5,5.5,1.061,1.061);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009FE3").s().p("Ag7BiIAdhuIgXAAIALgqIAYAAIALgrIAvAAIgLArIAfAAIgLAqIgMAAIAAAAIgTAAIgdBug");
	this.shape_5.setTransform(16.4,3.4,1.061,1.061);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1B").s().p("AhkB9IBCj6IBJAAQAeAAAQANQATAPgDAdIgDAOQgJAkgcARQgaAPgjABIgXAAIgdBugAgLgbIAUAAQApABADgjQACgVgfAAIgWAAg");
	this.shape_6.setTransform(20.8,0.5,1.061,1.061);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1899D6").s().p("AhABOIAoiXIAoAAIgEARQAGgIAKgGQALgHAIAAQALAAAHAEIgKAnQgJgDgJAAQgPAAgLAPQgJANgDAPIgTBIg");
	this.shape_7.setTransform(4,5.5,1.061,1.061);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1899D6").s().p("AhQA/QgPgTADgdQAEgmAdgcQAegdAjAAQAfAAAJAVIAEgQIAsAAIgoCXIgsAAIAFgRQgTAWgfAAQgeAAgPgSgAgggaQgPAPgCASQgCAOAJALQAIALAPAAQASAAAQgPQAQgQABgSQACgPgIgKQgJgKgQAAQgSAAgPAPg");
	this.shape_8.setTransform(-12,5.7,1.061,1.061);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1899D6").s().p("AA5BOIAYhfQADgWgUAAQgZAAgJAiIgWBTIgqAAIAYhfQACgWgTAAQgaAAgJAjIgWBSIgsAAIAoiXIAqAAIgFARQAUgVAbAAQAcAAAHAaQAVgaAjAAQAVAAAMALQALANgCAVIgdBug");
	this.shape_9.setTransform(-37,5.5,1.061,1.061);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1899D6").s().p("AhGBgQgQgPADgcIADgPIAwAAIgBAHQgDAXAUAAQAMAAAIgIQAJgIABgMQABgKgSgMIgjgVQgTgQADgVQADgfAcgTQAZgTAeAAQAZAAAPANQAOAOgCAZIgCAMIgvAAIABgGQACgSgSAAQgJAAgIAFQgHAGgBAJQgBAMASANIAjAXQATAOgCATIgCAMQgJAggYARQgXARggAAQgcAAgQgOg");
	this.shape_10.setTransform(-58.4,2.6,1.061,1.061);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1899D6").s().p("AJlBWIAAgbIhdAAIAAAbIgRAAIAAgqIAKAAIAth/IAQAAIAuB/IAJAAIAAAqgAI2g7IgkBnIBJAAIgkhngAKRAoQgUgWAAgeQgBgeAWgWQAVgVAeAAQAfAAAWAVQAVAVAAAfQAAAegVAWQgWAXgfAAQgeAAgWgXgAKfgzQgRARAAAWQAAAYAQARQAQARAYAAQAYAAAQgRQAPgTAAgWQAAgWgQgSQgRgRgXAAQgWAAgQASgAuyAoQgVgXABgdQgBgeAWgWQAVgVAeAAQAtAAATAnIgUAAQgRgWgbAAQgWAAgRARQgQAQAAAXQAAAXAPARQARASAXAAQAbAAAQgWIAVAAQgKATgRAJQgPAKgWAAQgfAAgVgWgARqA7IAAiOIBKAAIAAAQIg5AAIAAAvIA2AAIAAAPIg2AAIAAAxIA5AAIAAAPgAQIA7IAAiOIBKAAIAAAQIg5AAIAAAvIA1AAIAAAPIg1AAIAAAxIA5AAIAAAPgAPdA7IAAhAIhAAAIAABAIgSAAIAAiOIASAAIAAA+IBAAAIAAg+IAQAAIAACOgAMiA7IAAiOIBOAAIAAAQIg9AAIAAAqIATAAQAXAAAMAKQAPALAAAVQAAAWgPAKQgNALgWgBgAMzAsIATAAQAhAAAAgbQAAgbghAAIgTAAgAGpA7IALgZIg1h1IASAAIAsBiIAqhiIASAAIg/COgAEnA7IAAgaIAPAAIAAAagAC9A7IAAiOIBKAAIAAAQIg5AAIAAAvIA1AAIAAAPIg1AAIAAAxIA5AAIAAAPgABaA7IAAiOIBLAAIAAAQIg6AAIAAAvIA2AAIAAAPIg2AAIAAAxIA6AAIAAAPgAAwA7IAAhAIhAAAIAABAIgQAAIAAiOIAQAAIAAA+IBAAAIAAg+IAQAAIAACOgAhLA7IAAhuIABgOIgBAAIgwB8IgNAAIgwh8IgBAAIABANIAABvIgQAAIAAiOIAZAAIAuB1IAth1IAaAAIAACOgAkkA7IALgZIg2h1IASAAIAtBiIArhiIASAAIg/COgAmmA7IAAgaIAPAAIAAAagAoQA7IAAiOIBKAAIAAAQIg5AAIAAAvIA1AAIAAAPIg1AAIAAAxIA5AAIAAAPgApyA7IAAiOIBKAAIAAAQIg6AAIAAAvIA2AAIAAAPIg2AAIAAAxIA6AAIAAAPgAraA7IAAiOIAlAAQAWAAANAKQAOALAAAVQAAAVgOALQgNAJgWAAIgUAAIAAA7gArJgOIASAAQAhgBABgZQgBgbggAAIgTAAgAsYA7IAAh+IgdAAIAAgQIBMAAIAAAQIgeAAIAAB+gAvrA7IAAiOIARAAIAACOgAxKA7IAAiOIARAAIAAA7IARAAQAVgBAOALQAOAKAAAVQAAAWgOAKQgOALgVgBgAw5AsIARAAQAgAAAAgbQAAgaggAAIgRAAgAyzA7IAAiOIBNAAIAAAQIg9AAIAAAqIAUAAQAWAAANAKQAPALAAAVQAAAWgPAKQgNALgWgBgAyjAsIAUAAQAgAAAAgbQAAgbggAAIgUAAg");
	this.shape_11.setTransform(-5,60.7,1.061,1.061);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1899D6").s().p("AruDZQi5AAhPhJQhJhCArhiQAmhZB5gzQCHg4DbAAQAwABAtAFIA4AIIAXAEIgfA5QhGgUg4AAQhvAAhaAhQh7ArgTBYQgLA0AmAuQAxA8BqgFQAhgCBAgWQBPgbAtgkIB2hlIAPgIQAPgHARAAIB2AAIAmCjIBLihICDAAIBMB9IA4h9IB3AAIhpDkIh7AAIhPiDIg7CDIhMAAIABABIiOAAIgFgpIiCAAIgrAnIhUAAQhfAiiAABgAlbBiIBMgCIgHhAgAKoDNIBNhMIhNiuIB2AAIAhBdIBghfICGAAIjoDoQgLAMgJADIgbAFgAG7C3IjCAAIBpjkIDCAAQBdAAAhAsQAcAjgVAuQgTAqgyAbQg/AihkAAIgGAAgAGVB+IAiAAQAnAAAfgJQAxgPAKglQAIgggfgNQgUgJgjAAIgjAAg");
	this.shape_12.setTransform(-5,-47.4,1.061,1.061);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-132.7,-70.4,255.4,140.3), null);


(lib.bgwhite = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bXcMAAAgu3MAu3AAAMAAAAu3g");
	this.shape.setTransform(150,150);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgwhite, new cjs.Rectangle(0,0,300,300), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("EgXXAvFMAAAheJMAuuAAAMAAABeJg");
	this.shape.setTransform(300,150,2.006,0.498);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,600,300), null);


(lib.text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t3
	this.instance = new lib.t3();
	this.instance.parent = this;
	this.instance.setTransform(0,2.7,1.305,1.305);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(195).to({_off:false},0).to({scaleX:1.45,scaleY:1.45,y:2.9,alpha:1},6,cjs.Ease.get(1)).wait(93).to({scaleX:1.31,scaleY:1.31,y:2.7,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// t2
	this.instance_1 = new lib.t2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.2,0.2,1.305,1.305,0,0,0,0.1,0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(95).to({_off:false},0).to({regX:0,regY:0,scaleX:1.45,scaleY:1.45,x:0,y:0.1,alpha:1},6,cjs.Ease.get(1)).wait(90).to({regX:0.1,regY:0.1,scaleX:1.31,scaleY:1.31,x:0.2,y:0.2,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(103));

	// t1
	this.instance_2 = new lib.t1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.9,0.9);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.45,scaleY:1.45,alpha:1},4,cjs.Ease.get(1)).wait(86).to({regX:0.1,regY:0.1,scaleX:1.31,scaleY:1.31,x:0.2,y:0.2,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(203));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.2,-37.5,226.5,75.1);


(lib.pics2copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// p3
	this.instance = new lib.p3();
	this.instance.parent = this;
	this.instance.setTransform(150,216,1,1,0,0,0,150,136);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(189).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(98).to({alpha:0},6,cjs.Ease.get(1)).wait(1));

	// p2
	this.instance_1 = new lib.p2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,216,1,1,0,0,0,150,136);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(91).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).to({_off:true},99).wait(104));

	// p1
	this.instance_2 = new lib.p1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150,146,1,1,0,0,0,150,136);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},6,cjs.Ease.get(1)).to({_off:true},92).wait(202));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-190,400,400);


(lib.pics2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// p3
	this.instance = new lib.p3();
	this.instance.parent = this;
	this.instance.setTransform(-50,-64,1,1,0,0,0,150,136);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(189).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(98).to({alpha:0},6,cjs.Ease.get(1)).wait(1));

	// p2
	this.instance_1 = new lib.p2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-30,-64,1,1,0,0,0,150,136);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(91).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).to({_off:true},99).wait(104));

	// p1
	this.instance_2 = new lib.p1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-20,-64,1,1,0,0,0,150,136);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},6,cjs.Ease.get(1)).to({_off:true},92).wait(202));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-370,-400,400,400);


(lib.pics2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 3
	this.instance = new lib.p3();
	this.instance.parent = this;
	this.instance.setTransform(16,0.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(193).to({_off:false},0).to({x:0,alpha:1},5,cjs.Ease.get(1)).wait(98).to({alpha:0.5},3).wait(1));

	// 2
	this.instance_1 = new lib.p2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(16,0.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(93).to({_off:false},0).to({x:0,alpha:1},5,cjs.Ease.get(1)).to({_off:true},101).wait(101));

	// 1
	this.instance_2 = new lib.p1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(16.5,0);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:0.5,alpha:1},5,cjs.Ease.get(1)).to({_off:true},94).wait(201));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183.5,-200,400,400);


(lib.pics = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3bfQMAAAg+fMAu3AAAMAAAA+fg");

	// Слой 1
	this.instance = new lib.pics2();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pics, new cjs.Rectangle(-150,-200,300,400), null);


(lib.legal_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.six();
	this.instance.parent = this;
	this.instance.setTransform(-113.1,-21.4,0.9,0.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(95).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(89).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(103));

	// Слой 2
	this.instance_1 = new lib.legal();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-127,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(300));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127,-16,254,32);


(lib.pics4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A/KJYIAAyvMA+VAAAIAASvg");
	mask.setTransform(-0.5,0);

	// Слой 1
	this.instance = new lib.pics2copy2();
	this.instance.parent = this;
	this.instance.setTransform(0,-2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pics4, new cjs.Rectangle(-200,-60,399.1,120), null);


(lib.pics3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvnfQMAAAg+fIfPAAMAAAA+fg");

	// Слой 1
	this.instance = new lib.pics2copy();
	this.instance.parent = this;
	this.instance.setTransform(160,200);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pics3, new cjs.Rectangle(-100,-200,200,400), null);


// stage content:
(lib._100pcx300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop(); 
		stage.addEventListener("resize", res);
		
		var bg = this.bg;
		var bgwhite = this.bgwhite;
		var legal = this.legal;
		var text = this.text;
		var logo = this.logo;
		var pics = this.pics;
		var pics2 = this.pics2;
		var pics3 = this.pics3;
		var pics4 = this.pics4;
		
		res();
		
		function res() {
			var wdt = stage.canvas.width;
			var hgt = stage.canvas.height;
			
			var sc = wdt/300;
			
			bg.scaleX = sc;
			
			
			if (wdt<400){
				
				bgwhite.x = 0;
				bgwhite.y = 0;
				bgwhite.scaleX = sc;
				bgwhite.scaleY = 0.3;
				
				pics.x = -1000;
				pics2.x = - 1000;
				pics3.x = - 1000;
				
				let x1 = wdt/2;
				
				pics4.x = x1;
				pics4.y = 130;	
				
				
				text.scaleX = 0.5;
				text.scaleY = 0.5;
				text.x = x1;
				text.y = 230;
				
				logo.scaleX = 0.4;
				logo.scaleY = 0.4;
				logo.x = x1;
				logo.y = 40;
				
				legal.x = x1;
				legal.y = 280;
				legal.scaleX = 0.8;
				legal.scaleY = 0.8;
				
			} else if (wdt<600){
				bgwhite.x = 150;
				bgwhite.y = 0;
				bgwhite.scaleX = 2;
				bgwhite.scaleY = 0.3;
				
				pics.x = -1000;
				pics2.x = - 1000;
				pics3.x = 75;
				pics4.x = - 1000;
				
				let x1 = (wdt - 150)*0.5 + 150;
				
				text.scaleX = 0.55;
				text.scaleY = 0.55;
				text.x = x1;
				text.y = 170;
				
				logo.scaleX = 0.5;
				logo.scaleY = 0.5;
				logo.x = x1;
				logo.y = 45;
				
				legal.x = x1;
				legal.y = 270;
				legal.scaleX = 0.7;
				legal.scaleY = 0.7;
				
			} else if (wdt<700){
				bgwhite.x = 225;
				bgwhite.y = 0;
				bgwhite.scaleX = 2;
				bgwhite.scaleY = 0.3;
				
				pics.x = 112;
				pics2.x = - 1000;
				pics3.x = - 1000;
				pics4.x = - 1000;
				
				let x1 = (wdt - 225)*0.5 + 225;
				
				text.scaleX = 0.7;
				text.scaleY = 0.7;
				text.x = x1;
				text.y = 170;
				
				logo.scaleX = 0.5;
				logo.scaleY = 0.5;
				logo.x = x1;
				logo.y = 45;
				
				legal.x = x1;
				legal.y = 270;
				legal.scaleX = 1;
				legal.scaleY = 1;
				
			} else if (wdt<1000){
				bgwhite.x = 300;
				bgwhite.y = 0;
				bgwhite.scaleX = 3;
				bgwhite.scaleY = 0.3;
				
				pics.x = -1000;
				pics2.x = 150;
				pics3.x = - 1000;
				pics4.x = - 1000;
				
				let x1 = (wdt - 300)*0.5 + 300;
				
				text.scaleX = 0.7;
				text.scaleY = 0.7;
				text.x = x1;
				text.y = 170;
				
				logo.scaleX = 0.5;
				logo.scaleY = 0.5;
				logo.x = x1;
				logo.y = 45;
				
				legal.x = x1;
				legal.y = 270;
				legal.scaleX = 1;
				legal.scaleY = 1;
			} else if (wdt<1300){
				let pole = wdt/2 - 112;
				bgwhite.x = 0;
				bgwhite.y = 0;
				bgwhite.scaleX = (pole+1)/300;
				bgwhite.scaleY = 1;
				
				pics.x = wdt/2;
				pics2.x = - 1000;
				pics3.x = - 1000;
				pics4.x = - 1000;	
				
				
				let x1 = pole/2;
				let x2 = wdt/2 + 112 + pole/2;
				
				text.scaleX = 1;
				text.scaleY = 1;
				text.x = x2;
				text.y = 150;
				
				logo.scaleX = 1;
				logo.scaleY = 1;
				logo.x = x1;
				logo.y = hgt/2;
				
				legal.x = x2;
				legal.y = 270;
				legal.scaleX = 1;
				legal.scaleY = 1;
			} else {
				let pole = wdt/2 - 112;
				bgwhite.x = 0;
				bgwhite.y = 0;
				bgwhite.scaleX = (pole+1)/225;
				bgwhite.scaleY = 1;
				
				pics2.x = wdt/2;
				pics.x = - 1000;
				pics3.x = - 1000;
				pics4.x = - 1000;
				
			
				let x1 = pole/2;
				let x2 = wdt/2 + 112 + pole/2;
				
				text.scaleX = 1;
				text.scaleY = 1;
				text.x = x2;
				text.y = 150;
				
				logo.scaleX = 1;
				logo.scaleY = 1;
				logo.x = x1;
				logo.y = hgt/2;
				
				legal.x = x2;
				legal.y = 270;
				legal.scaleX = 1;
				legal.scaleY = 1;
			}
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.text = new lib.text();
	this.text.parent = this;
	this.text.setTransform(450.6,144.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// pics4
	this.pics4 = new lib.pics4();
	this.pics4.parent = this;
	this.pics4.setTransform(150.5,190);

	this.timeline.addTween(cjs.Tween.get(this.pics4).wait(1));

	// pics3
	this.pics3 = new lib.pics3();
	this.pics3.parent = this;
	this.pics3.setTransform(109.7,150,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.pics3).wait(1));

	// pics2
	this.pics2 = new lib.pics2();
	this.pics2.parent = this;
	this.pics2.setTransform(206.5,150,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.pics2).wait(1));

	// pics
	this.pics = new lib.pics();
	this.pics.parent = this;
	this.pics.setTransform(163,150,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.pics).wait(1));

	// legal
	this.legal = new lib.legal_1();
	this.legal.parent = this;
	this.legal.setTransform(452.9,375.4);

	this.timeline.addTween(cjs.Tween.get(this.legal).wait(1));

	// logo
	this.logo = new lib.logo();
	this.logo.parent = this;
	this.logo.setTransform(446.8,274);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// bgwhite
	this.bgwhite = new lib.bgwhite();
	this.bgwhite.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.bgwhite).wait(1));

	// bg
	this.bg = new lib.bg();
	this.bg.parent = this;
	this.bg.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(100.5,148,649.5,400);
// library properties:
lib.properties = {
	width: 300,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/legal.png", id:"legal"},
		{src:"images/100pcx300_atlas_NP_.jpg", id:"100pcx300_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;