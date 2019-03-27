(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"100pcx100pc_atlas_NP_", frames: [[0,0,520,450],[0,904,520,450],[0,452,520,450]]}
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



(lib.p1 = function() {
	this.initialize(img.p1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,372,360);


(lib.p2 = function() {
	this.spriteSheet = ss["100pcx100pc_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.p3 = function() {
	this.spriteSheet = ss["100pcx100pc_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.p4 = function() {
	this.spriteSheet = ss["100pcx100pc_atlas_NP_"];
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


(lib.ClipGroup_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00AAE3").s().p("AnxBHQgkghAVgvQATgsA7gZQBCgcBsAAQAbABAuAGIALACIgPAcQgigKgcAAQg2AAgtAQQg8AWgJAqQgGAaATAWQAYAeA0gDQAQAAAggLQAmgOAXgRIA2gvIALgHQAHgDAIAAIA7AAIASBQIAlhPIBAAAIAlA9IAbg9IA7AAIgzBwIg9AAIgnhBIgcBBIglAAIAAAAIhGAAIgCgUIhAAAIgVATIgpAAQgyASg9AAQhbAAgngkgAiqAwIAlgBIgDgggAFOBkIAlglIglhVIA6AAIAQAuIAvgvIBCAAIhyByQgGAFgEACIgNACgADZBaIhfAAIA0hwIBfAAQAtAAARAWQAOARgLAWQgJAVgYANQgfARgyAAIgDAAgADHA+IAQAAQA4AAAIgeQAHgbguAAIgQAAg");
	this.shape.setTransform(0.1,-2.3,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(-62.4,-15.1,125,25.7), null);


(lib.p4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.p4();
	this.instance.parent = this;
	this.instance.setTransform(-260,-225);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p4_1, new cjs.Rectangle(-260,-225,520,450), null);


(lib.p3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p3();
	this.instance.parent = this;
	this.instance.setTransform(-260,-225);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p3_1, new cjs.Rectangle(-260,-225,520,450), null);


(lib.p2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p2();
	this.instance.parent = this;
	this.instance.setTransform(-260,-225);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2_1, new cjs.Rectangle(-260,-225,520,450), null);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask - копия: 2 - копия (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_237 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_1_graphics_238 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_1_graphics_239 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_1_graphics_240 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_1_graphics_241 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_1_graphics_242 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_1_graphics_243 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_1_graphics_244 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_1_graphics_245 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_1_graphics_308 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_1_graphics_309 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_1_graphics_310 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_1_graphics_311 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_1_graphics_312 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_1_graphics_313 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_1_graphics_314 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_1_graphics_315 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_1_graphics_316 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(237).to({graphics:mask_1_graphics_237,x:255.5,y:63}).wait(1).to({graphics:mask_1_graphics_238,x:159.4,y:63}).wait(1).to({graphics:mask_1_graphics_239,x:76.1,y:63}).wait(1).to({graphics:mask_1_graphics_240,x:5.7,y:63}).wait(1).to({graphics:mask_1_graphics_241,x:-52,y:63}).wait(1).to({graphics:mask_1_graphics_242,x:-96.8,y:63}).wait(1).to({graphics:mask_1_graphics_243,x:-128.9,y:63}).wait(1).to({graphics:mask_1_graphics_244,x:-148.1,y:63}).wait(1).to({graphics:mask_1_graphics_245,x:-154.5,y:63}).wait(1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_1_graphics_308,x:82.7,y:67}).wait(1).to({graphics:mask_1_graphics_309,x:-15.7,y:67}).wait(1).to({graphics:mask_1_graphics_310,x:-101.1,y:67}).wait(1).to({graphics:mask_1_graphics_311,x:-173.2,y:67}).wait(1).to({graphics:mask_1_graphics_312,x:-232.3,y:67}).wait(1).to({graphics:mask_1_graphics_313,x:-278.2,y:67}).wait(1).to({graphics:mask_1_graphics_314,x:-311,y:67}).wait(1).to({graphics:mask_1_graphics_315,x:-330.7,y:67}).wait(1).to({graphics:mask_1_graphics_316,x:-337.3,y:67}).wait(1));

	// t4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0DA8E1").s().p("AgSA2QgHgCgIgHQgGgHgCgIQgEgIAAgLIAAhEIAQAAIAABEQABAIACAFQACAHADADQAEAEAFADQAGACAGAAQAIAAAEgCIAKgHQADgDADgHQABgFAAgIIAAhEIARAAIAABEQAAALgDAIQgDAIgHAHQgGAHgIACQgHAEgMAAQgKAAgIgEg");
	this.shape.setTransform(47.1,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0DA8E1").s().p("AAcA5QgEAAgCgDIgcgpIgDgCIgFgBIgLAAIAAAvIgRAAIAAhxIAhAAQALAAAHACQAJACAEAEQAFAEADAGQACAGAAAHQAAAHgBAFQgDAGgDADQgDAEgGACQgEADgHACIAFAFIAhAtgAgZgBIAQAAQAGAAAEgCQAFgBAEgDIAFgHIABgJQAAgLgGgEQgHgGgMAAIgQAAg");
	this.shape_1.setTransform(36.8,21);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0DA8E1").s().p("AgDAJIgDgBIgCgEIgBgEIABgDIACgDIADgDIADgBIAEABIADADIADADIAAADIAAAEIgDAEIgDABIgEABg");
	this.shape_2.setTransform(29.2,25.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0DA8E1").s().p("AgHA5IAAgtIgqhEIAPAAIADABIACACIAZAsIAEAJIACgEIAcgxIACgCIAEgBIAOAAIgqBEIAAAtg");
	this.shape_3.setTransform(23.7,21);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0DA8E1").s().p("AgxA5IAAhxIArAAQANAAAJAEQAKADAIAIQAIAIAEAKQAEAKAAANQAAAOgEAJQgEAKgIAIQgIAIgKAEQgKAEgMAAgAggAsIAaAAQAIAAAIgDQAGgDAGgGQAFgFADgJQADgIAAgKQAAgJgDgJQgDgIgFgGQgGgGgGgCQgIgDgIAAIgaAAg");
	this.shape_4.setTransform(13.5,21);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0DA8E1").s().p("AAmA5IgDgBIgDgCIhAhTIAAAEIAAADIAABPIgOAAIAAhxIAMAAIACACIBABUIAAgEIAAhSIAPAAIAABxg");
	this.shape_5.setTransform(1.1,21);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0DA8E1").s().p("AApA5QAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIgCgDIgLgbIgxAAIgLAbIgCADQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgNAAIAuhxIAPAAIAuBxgAgBgjIgTAxIApAAIgVg3g");
	this.shape_6.setTransform(-10.5,21);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0DA8E1").s().p("AgPA2QgKgDgHgJQgHgHgEgMQgEgJAAgOQAAgNAEgKQADgKAIgIQAJgIAJgEQAKgFAMAAQAMAAAKAFQAKAEAGAGIgGAIIgBABIgCAAIgEgBIgEgEIgJgDQgEgBgIAAQgIAAgHADQgIADgFAFQgEAGgEAJQgDAIAAAJQAAALADAIQADAIAGAFQAGAHAGACQAHAEAHAAIAJgBIAIgCIAGgDIAIgFIABgBIACABIAHAHQgIAJgKAEQgJAFgPgBQgLABgKgFg");
	this.shape_7.setTransform(-21,21);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4E585B").s().p("AApA5QAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAIgBgDIgKgbIgzAAIgKAbQAAABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgMAAIAuhxIAPAAIAuBxgAgCgeIgSAsIApAAIgUgxIgBgGg");
	this.shape_8.setTransform(-36,21);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4E585B").s().p("AAeA5IAAg0Ig7AAIAAA0IgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_9.setTransform(-47.5,21);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4E585B").s().p("AAeA5IAAgxIgQAAIgEABIgDABIgDACIgEAFIgXAjIgDADIgHACIgMAAIAdgpQAEgHAHgDIgMgFQgFgCgDgDQgEgEgBgFQgCgEAAgHQAAgGADgHQADgHAFgDQAGgFAHgCQAIgCAIAAIAmAAIAABxgAgCgqQgFABgCAEQgDACgCADIgCAIQABAGABADIAEAGIAIAEQAEACAGAAIAWAAIAAgoIgWAAQgHAAgDABg");
	this.shape_10.setTransform(57.6,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4E585B").s().p("AAeA5IABheIgDAHIgDAFIgzBNIgDADIgFACIgMAAIAAhxIARAAIgBBeIAGgMIAzhNIADgDIAEgCIANAAIAABxg");
	this.shape_11.setTransform(46.9,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4E585B").s().p("AAeA5IAAgzIg7AAIAAAzIgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_12.setTransform(34.7,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4E585B").s().p("AgiA5IAAhxIBFAAIAAANIg1AAIAAAlIArAAIAAAMIgrAAIAAAmIA1AAIAAANg");
	this.shape_13.setTransform(24.4,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4E585B").s().p("ABHA5QgDAAgDgCIgEgDIgdgpQgCgDgCgBQgCgCgFAAIgNAAIAAA0IgPAAIAAg0IgNAAQgEAAgDACQgDACgCACIgcApIgEADQgDACgDAAIgLAAIAhgxIAGgHQADgCAEAAIgGgEIglgzIAMAAQABAAABAAQABAAAAAAQABAAAAAAQABABAAAAIAEADIAbAoQACADAEABIAGABIALAAIAAgxIAPAAIAAAxIALAAIAGgBQACgBADgDIAcgoIAEgDIAEgBIAOAAIgmAzIgGAEQADAAAEACIAGAHIAhAxg");
	this.shape_14.setTransform(11.1,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4E585B").s().p("AgWA2QgKgEgIgIQgHgIgFgKQgDgMAAgMQAAgLADgMQAFgKAHgIQAIgIAKgEQALgFALABQAMgBALAFQAKAEAIAIQAHAHAFALQADAMAAALQAAAMgDAMQgFALgHAHQgIAIgKAEQgLAFgMAAQgLAAgLgFgAgPgoQgIADgEAFQgGAHgDAHQgCAKAAAIQAAAJACAJQADAIAGAHQAFAFAHADQAIADAHAAQAJAAAIgDQAGgDAGgFQAFgGADgJQACgHAAgLQAAgKgCgIQgDgIgFgGQgEgFgIgDQgIgDgJAAQgHAAgIADg");
	this.shape_15.setTransform(-3.1,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4E585B").s().p("AgwA5QAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAgLIAFAAIAHgBQADgBADgEQADgFACgFQACgGADgMQACgJABgSIADgoIBDAAIAAByIgQAAIAAhlIgkAAQgBAWgCARQgCAOgDAMQgCALgEAIQgDAGgEAFQgEAEgFACQgFABgFAAg");
	this.shape_16.setTransform(-16.1,0.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4E585B").s().p("AAtBHIAAgbIhaAAIAAAWQAAABAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgKAAIAAgoIAMAAIAFgEIAFgIQADgGABgGIAEgSIAEg7IBEAAIAABlIATAAIAAAjQAAABAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAgAgNgYIgEAZIgFASIgHAMIA2AAIAAhYIgjAAIgDAhg");
	this.shape_17.setTransform(-27.6,1.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4E585B").s().p("AgiA5IAAhxIBGAAIAAANIg2AAIAAAlIArAAIAAAMIgrAAIAAAmIA2AAIAAANg");
	this.shape_18.setTransform(-38,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4E585B").s().p("AgmA5IAAhxIAjAAQAKAAAIACQAIACAFAGQAGAEACAHQADAFAAAKQAAAIgDAGQgDAGgGAFQgEAFgIACQgJADgJAAIgSAAIAAAqgAgVACIASAAQAEAAAGgCQAFgBADgCQAEgEACgEIACgJQAAgFgCgFQgCgFgEgCIgIgFQgFgBgFgBIgSAAg");
	this.shape_19.setTransform(-47.3,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4E585B").s().p("AAcA5IAAhlIg3AAIAABlIgRAAIAAhxIBZAAIAABxg");
	this.shape_20.setTransform(-58.5,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4E585B").s().p("AgjA6IAAhyIBGAAIAAANIg1AAIAAAlIArAAIAAAMIgrAAIAAAmIA1AAIAAAOg");
	this.shape_21.setTransform(86.7,-20.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4E585B").s().p("AAeA6IAAhXIABgIIgGAMIgzBNQAAABgBAAQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAIgNAAIAAhyIARAAIAABWIgBAIIADgHIA2hSQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIANAAIAAByg");
	this.shape_22.setTransform(75.6,-20.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#4E585B").s().p("AAeA6IAAg0Ig7AAIAAA0IgRAAIAAhyIARAAIAAAzIA7AAIAAgzIARAAIAAByg");
	this.shape_23.setTransform(63.4,-20.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4E585B").s().p("AAeA6IAAg0Ig7AAIAAA0IgRAAIAAhyIARAAIAAAzIA7AAIAAgzIARAAIAAByg");
	this.shape_24.setTransform(51.2,-20.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4E585B").s().p("AgiA6IAAhyIBGAAIAAANIg2AAIAAAlIArAAIAAAMIgrAAIAAAmIA2AAIAAAOg");
	this.shape_25.setTransform(40.9,-20.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4E585B").s().p("AgOA2QgKgDgIgJQgIgIgDgKQgEgLAAgNQAAgLAEgMQAFgKAGgIQAIgIALgEQAKgFAMABQAKAAALADQAKAFAHAGIgGAHIgCACIgBAAIgEgBIgFgDIgIgDQgFgDgIAAQgIAAgGAEQgJADgEAGQgEAEgEAJQgDAJAAAJQAAAKADAJQADAJAFAFQAFAFAIAEQAGACAIAAIAQgCIAHgDIAHgGIABAAIACABIAHAHQgHAJgKAEQgKAEgOABQgLgBgKgEg");
	this.shape_26.setTransform(30.8,-20.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4E585B").s().p("AgjA6IAAhyIBHAAIAAANIg2AAIAAAlIArAAIAAAMIgrAAIAAAmIA2AAIAAAOg");
	this.shape_27.setTransform(21.3,-20.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#4E585B").s().p("AgoA6IAAhyIAlAAQAJgBAJADQAGABAGAFQAFAEACAFQADAFAAAHIgBAJIgEAHIgHAGIgJAEQAMACAGAGQAHAHAAAKQAAAIgDAGQgDAGgFAEQgFAFgIACQgIADgJAAgAgXAsIAXAAQAGAAAFgCQAGgBACgCQADgEABgDQABgDAAgFQAAgIgGgGQgFgEgNAAIgXAAgAgXgFIATAAIALgCIAHgEQADgBACgFQABgDAAgFQAAgJgFgEQgGgFgMgBIgUAAg");
	this.shape_28.setTransform(11.4,-20.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#4E585B").s().p("AgiA6IAAhyIBFAAIAAANIg1AAIAAAlIAqAAIAAAMIgqAAIAAAmIA1AAIAAAOg");
	this.shape_29.setTransform(-2.3,-20.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#4E585B").s().p("AApA6IAAhyIARAAIAABygAg5A6IAAhyIARAAIAAAwIAWAAQAJAAAJADQAHACAEADQAFAEADAGQACAGAAAHQAAAHgDAHQgCAGgGAFQgDADgIAEQgJADgIAAgAgoAsIAWAAQAGAAAFgCQAFgBACgCQACgDABgDQACgEAAgFQAAgEgCgEQAAgEgDgCQgCgCgFgCQgFgCgGABIgWAAg");
	this.shape_30.setTransform(-14.5,-20.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#4E585B").s().p("AAeA6IAAg0Ig7AAIAAA0IgRAAIAAhyIARAAIAAAzIA7AAIAAgzIARAAIAAByg");
	this.shape_31.setTransform(-27.8,-20.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#4E585B").s().p("AAuBHIAAgbIhaAAIAAAWQAAABgBABQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgJAAIAAgoIALAAIAFgEIAEgIIAFgMIADgSIAFg7IBEAAIAABlIASAAIAAAjQAAABAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAgAgRABIgGASIgGAMIA2AAIAAhYIgkAAg");
	this.shape_32.setTransform(-40.3,-19.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#4E585B").s().p("AgWA2QgKgDgIgJQgIgIgEgKQgDgKAAgOQAAgNADgJQAEgLAIgIQAIgIAKgEQALgFALABQAMgBALAFQALAEAHAIQAIAIADALQAEAJAAANQAAAOgEAKQgDAKgIAIQgHAJgLADQgLAEgMABQgLgBgLgEgAgQgoQgHADgFAGQgFAFgDAIQgDAJAAAJQAAALADAHQADAJAFAGQAGAFAGADQAIADAIAAQAJAAAHgDQAHgDAGgFQAFgGADgJQADgHAAgLQAAgJgDgJQgDgIgFgFQgEgGgJgDQgIgEgIAAQgHAAgJAEg");
	this.shape_33.setTransform(-52.4,-20.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#4E585B").s().p("AgiA6IAAhyIBFAAIAAAMIg0AAIAABmg");
	this.shape_34.setTransform(-62,-20.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#4E585B").s().p("AApA6IAAhyIARAAIAABygAg5A6IAAhyIARAAIAAAwIAVAAQAKAAAJADQAGACAFADQAFAFACAFQADAFAAAIQAAAGgDAIQgDAHgFAEQgEADgIAEQgIADgJAAgAgoAsIAVAAQAHAAAEgCQAGgBACgCQABgDACgDQACgEAAgFQAAgEgCgEQgBgEgCgCQgCgCgGgCQgEgCgHABIgVAAg");
	this.shape_35.setTransform(-74.1,-20.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#4E585B").s().p("AgoA6IAAhyIAlAAQAJgBAJADQAGABAGAFQAFAEACAFQADAFAAAHIgCAJIgDAHIgHAGIgJAEQAMACAGAGQAHAHAAAKQAAAIgDAGQgCAFgGAFQgFAFgIACQgIADgJAAgAgXAsIAXAAQAGAAAFgCQAGgBACgCQADgEABgDQABgDAAgFQAAgIgGgGQgFgEgNAAIgXAAgAgXgFIATAAIALgCIAHgEQADgBACgFQABgDAAgFQAAgJgGgEQgFgFgMgBIgUAAg");
	this.shape_36.setTransform(-86.1,-20.9);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},237).wait(80));

	// mask - копия: 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_158 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_2_graphics_159 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_2_graphics_160 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_2_graphics_161 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_2_graphics_162 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_2_graphics_163 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_2_graphics_164 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_2_graphics_165 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_2_graphics_166 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_2_graphics_229 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_2_graphics_230 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_2_graphics_231 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_2_graphics_232 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_2_graphics_233 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_2_graphics_234 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_2_graphics_235 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_2_graphics_236 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_2_graphics_237 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(158).to({graphics:mask_2_graphics_158,x:250.5,y:63}).wait(1).to({graphics:mask_2_graphics_159,x:154.4,y:63}).wait(1).to({graphics:mask_2_graphics_160,x:71.1,y:63}).wait(1).to({graphics:mask_2_graphics_161,x:0.7,y:63}).wait(1).to({graphics:mask_2_graphics_162,x:-57,y:63}).wait(1).to({graphics:mask_2_graphics_163,x:-101.8,y:63}).wait(1).to({graphics:mask_2_graphics_164,x:-133.9,y:63}).wait(1).to({graphics:mask_2_graphics_165,x:-153.1,y:63}).wait(1).to({graphics:mask_2_graphics_166,x:-159.5,y:63}).wait(1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_2_graphics_229,x:82.7,y:67}).wait(1).to({graphics:mask_2_graphics_230,x:-15.7,y:67}).wait(1).to({graphics:mask_2_graphics_231,x:-101.1,y:67}).wait(1).to({graphics:mask_2_graphics_232,x:-173.2,y:67}).wait(1).to({graphics:mask_2_graphics_233,x:-232.3,y:67}).wait(1).to({graphics:mask_2_graphics_234,x:-278.2,y:67}).wait(1).to({graphics:mask_2_graphics_235,x:-311,y:67}).wait(1).to({graphics:mask_2_graphics_236,x:-330.7,y:67}).wait(1).to({graphics:mask_2_graphics_237,x:-337.3,y:67}).wait(80));

	// t3
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#4D575B").s().p("AAeBIIABhfIgGANIgzBMQAAABgBABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAIgNAAIAAhyIARAAIAABWIgBAIIADgHIA2hSIADgEQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAIANAAIAABygAgQg2QgGgEAAgIIABgDQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAIAJAAIABAGQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABIADACIAFABIAFgBIAEgCIACgEIAAgGIAJAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAIABADQAAAIgGAEQgGAEgLAAQgLAAgGgEg");
	this.shape_37.setTransform(104.1,30);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#4D575B").s().p("AgWA2QgKgEgIgIQgHgIgFgKQgEgMAAgMQAAgKAEgMQAFgKAHgJQAIgHAKgFQAKgFAMABQANgBAKAFQALAFAHAHQAHAIAFALQAEAMAAAKQAAAMgEAMQgFALgHAHQgHAIgLAEQgJAFgOAAQgNAAgJgFgAgPgoQgIADgFAGQgFAFgDAIQgDAKAAAIQAAAKADAJQADAJAFAFQAFAFAIAEQAHACAIAAQAJAAAIgCQAHgEAFgFQAFgFADgJQADgJAAgKQAAgIgDgKQgDgIgFgFQgFgGgHgDQgIgDgJAAQgIAAgHADg");
	this.shape_38.setTransform(91.6,31.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#4D575B").s().p("AAeA5IAAg0Ig7AAIAAA0IgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_39.setTransform(79.1,31.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#4D575B").s().p("AAeA5IABheIgDAHIgDAGIgzBMIgDAEQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgMAAIAAhxIARAAIgBBeIAGgNIAzhMIADgEIAEgBIANAAIAABxg");
	this.shape_40.setTransform(66.9,31.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#4D575B").s().p("AhHA5IAAhxIARAAIAABkIAvAAIAAhkIAPAAIAABkIAvAAIAAhkIARAAIAABxg");
	this.shape_41.setTransform(52.2,31.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#4D575B").s().p("AApA5IgEgBIgBgDIgLgbIgyAAIgKAbIgCADIgEABIgMAAIAthxIAQAAIAuBxgAgUAPIAoAAIgTgxIgBgHg");
	this.shape_42.setTransform(38.2,31.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#4D575B").s().p("AAtA5IAAhVIABgEIgnBFIgCADIgEABIgBAAQgEAAgCgEIgnhFIAAAEIAAAEIAABRIgOAAIAAhxIAMAAIADAAQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABIAoBEIACAIIAqhMQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAAAAAIADAAIANAAIAABxg");
	this.shape_43.setTransform(25.4,31.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#4D575B").s().p("AAeBIIABhfIgGANIgzBMIgDAEQAAAAgBABQAAAAgBAAQAAAAgBAAQgBABAAAAIgNAAIAAhyIARAAIgBBeIAGgNIAzhMIADgEIAFgBIAMAAIAABygAgQg2QgGgEAAgIIABgDQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAIAJAAIABAGIACAEIADACIAFABIAFgBIAEgCIACgEIAAgGIAJAAQABAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAIAAADQAAAIgGAEQgGAEgLAAQgKAAgHgEg");
	this.shape_44.setTransform(7.7,30);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#4D575B").s().p("AgWA2QgKgEgIgIQgIgJgDgJQgFgLAAgNQAAgLAFgLQADgKAIgJQAIgHAKgFQALgFALABQANgBAKAFQALAFAHAHQAIAJAEAKQAEAJAAANQAAAOgEAKQgEAJgIAJQgHAIgLAEQgJAFgOAAQgMAAgKgFgAgPgoQgHADgGAGQgGAGgCAHQgDAJAAAJQAAALADAIQACAHAGAHQAGAFAHAEQAHACAIAAQAJAAAIgCQAHgEAFgFQAFgFADgJQADgIAAgLQAAgJgDgJQgDgIgFgFQgFgGgHgDQgIgDgJAAQgIAAgHADg");
	this.shape_45.setTransform(-4.8,31.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#4D575B").s().p("AAeA5IAAg0Ig7AAIAAA0IgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_46.setTransform(-17.3,31.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#4D575B").s().p("AgmA5IAAhxIAQAAIAAAxIAWAAQAKAAAHACQAIADAFACQAFAFACAFQACAHAAAGQAAAIgDAGQgCAGgFAFQgGAFgHACQgJACgHAAgAgWAsIAWAAQAFAAAFgBIAHgEQADgDACgEIABgIIgBgIQgCgDgDgDQgEgDgDgBQgFgBgFAAIgWAAg");
	this.shape_47.setTransform(-27.7,31.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#4D575B").s().p("AgwA5IgCgCIAAgLIAGAAIAGgBQADgBADgEIAFgKIAFgTQACgJABgRIADgoIBDAAIAAByIgQAAIAAhlIgkAAIgHBBQgEANgDAFQgDAIgEAEQgEAEgFABIgKACg");
	this.shape_48.setTransform(-39.7,31.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#4D575B").s().p("AAeA5IAAhWIABgIIgGANIgzBMIgDAEQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgMAAIAAhxIARAAIgBBeIAGgNIAzhMIADgEQABAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAIANAAIAABxg");
	this.shape_49.setTransform(-50.8,31.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#4D575B").s().p("AhHA5IAAhxIAQAAIAABkIAvAAIAAhkIAQAAIAABkIAvAAIAAhkIARAAIAABxg");
	this.shape_50.setTransform(-65.5,31.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#4D575B").s().p("AgaA5IgCgCIAAgLIAFAAIAEAAIAEgCIAEgDIACgEIAGgMIguhQIAPAAIAEABQAAABAAAAQABAAAAABQAAAAABAAQAAABAAAAIAbAyQADAFABAGIACgGIAag3IACgDIADgBIAOAAIgvBjIgDAIIgGAFIgGACIgHABg");
	this.shape_51.setTransform(-79.1,31.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#4D575B").s().p("AgPA2QgKgFgHgHQgHgHgEgLQgEgKAAgOQAAgMAEgLQAEgLAIgHQAHgIALgEQAJgFAMAAQAMAAAKAEQAJAFAHAGIgFAIIgBABIgDABQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBIgGgDIgIgEQgFgBgHAAQgIAAgHADQgHADgGAFQgEAGgEAIQgCAHAAALQAAALADAIQADAIAFAGQAGAGAGACQAHADAHAAIAJAAIAIgCQAEgBADgCQADgCACgDIABgBIACAAIADABIAGAHQgGAIgLAFQgKAFgPAAQgKAAgLgFg");
	this.shape_52.setTransform(-89.3,31.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#4D575B").s().p("AgPA2QgLgFgGgHQgHgHgEgLQgEgKAAgOQAAgMAEgLQAEgLAHgHQAIgIAKgEQAKgFAMAAQAMAAAJAEQAKAFAHAGIgFAIIgCABIgCABQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBIgGgDIgIgEQgFgBgHAAQgIAAgHADQgHADgFAFQgGAIgCAGQgDAJAAAJQAAALADAIQADAIAFAGQAGAGAGACQAHADAIAAIAJAAIAHgCQADgBADgCIAGgFIABgBIACAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAABAAIAGAHQgGAIgLAFQgKAFgOAAQgMAAgKgFg");
	this.shape_53.setTransform(-104,31.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#4D575B").s().p("AgiA5IAAhxIBGAAIAAANIg2AAIAAAlIArAAIAAAMIgrAAIAAAmIA2AAIAAANg");
	this.shape_54.setTransform(53.3,10.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#4D575B").s().p("AgIA5IAAhjIgkAAIAAgOIBZAAIAAAOIglAAIAABjg");
	this.shape_55.setTransform(43.6,10.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#4D575B").s().p("AAgA5QgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAIgDgEIgcgpQgCgDgDgCIgGgBIgOAAIAAA0IgQAAIAAhxIAQAAIAAAxIAPAAIADgBIADgBIACgDIAcgoIADgDIAEgBIAOAAIgiAvQgDAFgGACQACABAEACIAGAHIAiAxg");
	this.shape_56.setTransform(34.1,10.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#4D575B").s().p("AgiA5IAAhxIBFAAIAAANIg1AAIAAAlIArAAIAAAMIgrAAIAAAmIA1AAIAAANg");
	this.shape_57.setTransform(23.9,10.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#4D575B").s().p("AgwA5QAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAAAIAAgLIAFAAIAGgBQAEgBACgEQAEgEACgGIAFgTIAFhCIBEAAIAAByIgQAAIAAhlIgkAAQgBAWgCAQQgCAPgDAMIgGASQgEAIgDAEQgGAEgDABQgFACgFAAg");
	this.shape_58.setTransform(12.3,10.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#4D575B").s().p("AAcA5IAAhkIg3AAIAABkIgQAAIAAhxIBXAAIAABxg");
	this.shape_59.setTransform(1.4,10.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#4D575B").s().p("AAuA5IAAhVIAAgEIgmBFQgBABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAIgDABIgCAAQgDAAgDgEIgnhFIAAAEIABAEIAABRIgPAAIAAhxIAMAAIAEAAIACADIAqBMIABgEIAohIIADgDIADAAIAMAAIAABxg");
	this.shape_60.setTransform(-11.9,10.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#4D575B").s().p("AgWA3QgLgFgHgIQgHgHgFgLQgEgMAAgMQAAgKAEgMQAFgLAHgIQAHgIALgEQAKgEAMAAQANAAAKAEQALAEAHAIQAIAJADAKQAFALAAALQAAANgFALQgDAKgIAIQgHAIgLAFQgJADgOAAQgNAAgJgDgAgQgoQgHADgFAGQgFAFgDAIQgDAJAAAJQAAALADAIQADAJAFAEQAFAGAHADQAIADAIAAQAJAAAHgDQAHgCAGgHQAGgFACgIQADgIAAgLQAAgJgDgJQgCgHgGgGQgGgGgHgDQgHgDgJAAQgIAAgIADg");
	this.shape_61.setTransform(-25.8,10.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#4D575B").s().p("AAgA5QgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAIgDgEIgcgpIgFgFIgGgBIgOAAIAAA0IgQAAIAAhxIAQAAIAAAxIAPAAIADgBIADgBIAegrQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAIAEgBIAOAAIgiAvQgDAFgGACQACABAEACIAGAHIAiAxg");
	this.shape_62.setTransform(-36.4,10.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#4D575B").s().p("AgoA5IAAhxIAlAAQALAAAHACQAIACAEAEQAGAEACAFQACAGAAAHQAAAEgBAEIgEAHQgDAEgEACQgEADgFABQAMABAGAHQAHAHAAAKQAAAHgDAHQgDAGgFAEQgFAFgIACQgIACgJAAgAgXAsIAXAAIALgBQAFgCADgDQADgCABgEQACgDAAgFQAAgJgHgFQgGgFgMAAIgXAAgAgXgFIAUAAQAFAAAFgCIAIgDIAEgGQACgEAAgEQAAgKgGgFQgGgEgMAAIgUAAg");
	this.shape_63.setTransform(-51.3,10.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#19B7E4").s().p("AApA5IgDgBIgCgDIgLgbIgxAAIgLAbIgCADIgEABIgMAAIAuhxIAQAAIAtBxgAgDgdIgRAsIApAAIgTgxIgCgHg");
	this.shape_64.setTransform(58.6,-10.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#19B7E4").s().p("AgoA5IAAhxIAlAAQALAAAHACQAIACAEAEQAGAEACAFQACAGAAAHQAAAEgBAEIgEAHQgCADgFADQgDADgGABQAMABAHAHQAGAHAAAKQAAAHgDAHQgDAGgFAEQgFAEgHADQgJACgJAAgAgXAsIAXAAQAHAAAEgBQAFgCADgDQADgCABgEQACgDAAgFQAAgIgGgGQgHgFgMAAIgXAAgAgXgFIAUAAQAFAAAFgCIAIgDIAEgGQACgEAAgEQAAgKgGgFQgGgEgMAAIgUAAg");
	this.shape_65.setTransform(48.5,-10.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#19B7E4").s().p("AgHA5IAAhjIglAAIAAgOIBZAAIAAAOIglAAIAABjg");
	this.shape_66.setTransform(38.3,-10.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#19B7E4").s().p("AgPA2QgJgEgIgIQgIgJgDgJQgEgMAAgMQAAgMAEgLQAEgKAHgIQAIgIAKgEQALgFALAAQAMAAAKAEQAKAFAGAGIgFAIIgCABIgCABIgDgCIgGgDIgIgEQgEgBgIAAQgIAAgHADQgGACgGAGQgFAGgDAIQgDAJAAAJQAAALADAIQADAGAFAIQAGAFAGADQAHADAIAAIAJAAIAHgCQADgBADgCIAIgGIABAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAABAAIAGAHQgHAIgKAFQgLAFgNAAQgMAAgKgFg");
	this.shape_67.setTransform(28.4,-10.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#19B7E4").s().p("AAeA5IAAg0Ig7AAIAAA0IgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_68.setTransform(16.8,-10.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#19B7E4").s().p("AApA5IgDgBIgCgDIgKgbIgzAAIgJAbIgCADIgEABIgNAAIAuhxIAQAAIAtBxgAAAgiIgUAxIApAAIgSgsIgDgMg");
	this.shape_69.setTransform(5.3,-10.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#19B7E4").s().p("AgmA5IAAhxIAjAAQAJAAAIACQAJACAFAFQAGAHACAFQADAFAAAJQAAAKgDAFQgDAGgGAFQgEAEgJADQgIADgJAAIgSAAIAAAqgAgVACIASAAQAFAAAFgCQAFgBADgDQAEgDACgEQACgFAAgFIgCgJQgCgFgEgCQgCgDgGgCQgFgBgFAAIgSAAg");
	this.shape_70.setTransform(-3.7,-10.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#19B7E4").s().p("AgHA5IAAhjIglAAIAAgOIBZAAIAAAOIglAAIAABjg");
	this.shape_71.setTransform(-13.7,-10.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#19B7E4").s().p("AgPA2QgJgEgJgIQgGgIgEgKQgEgLAAgNQAAgNAEgKQAEgLAHgHQAJgIAJgEQAKgFAMAAQAMAAAJAEQALAFAGAGIgHAJIgCABIgDgCIgGgDIgIgEQgFgBgHAAQgIAAgHADQgGACgGAGQgGAGgCAIQgEAJAAAJQAAALAEAIQACAHAGAHQAGAFAGADQAHADAIAAIAJAAIAHgCIAGgDIAHgGIACAAIACABIAHAHQgIAIgKAFQgLAFgMAAQgMAAgKgFg");
	this.shape_72.setTransform(-23.5,-10.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#19B7E4").s().p("AgWA3QgKgFgIgIQgIgIgEgKQgDgKAAgOQAAgMADgLQAEgJAIgJQAIgHAKgFQALgEALgBQAMABALAEQALAFAHAHQAIAJAEAJQADALAAAMQAAAOgDAKQgEAKgIAIQgHAIgLAFQgLADgMAAQgLAAgLgDgAgQgoQgGADgGAFQgGAIgCAHQgDAIAAAJQAAALADAIQACAIAGAFQAGAHAGACQAIAEAIAAQAJAAAIgEQAGgCAGgHQAFgEADgJQADgIAAgLQAAgJgDgIQgDgJgFgGQgGgFgGgDQgIgDgJAAQgIAAgIADg");
	this.shape_73.setTransform(-35.5,-10.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#19B7E4").s().p("AgmA5IAAhxIAjAAQAJAAAJACQAGACAHAFQAGAGACAGQADAHAAAHQAAAJgDAGQgDAGgFAFQgGAEgIADQgJADgIAAIgSAAIAAAqgAgVACIASAAIAKgCIAIgEQAEgCABgFQACgEAAgGQAAgFgBgEIgFgHQgEgDgFgCQgFgBgFAAIgSAAg");
	this.shape_74.setTransform(-46.2,-10.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#19B7E4").s().p("AAcA5IAAhkIg3AAIAABkIgQAAIAAhxIBYAAIAABxg");
	this.shape_75.setTransform(-57.4,-10.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#19B7E4").s().p("AAeA5IAAgxIgQAAIgEABIgDABIgDADIgEAEIgWAiQgCADgDACQgDABgDAAIgNAAIAegpQAEgHAHgDQgGgCgGgDQgFgBgDgEQgDgDgCgGQgBgFAAgGQAAgIACgFQADgGAFgEQAFgEAHgDQAHgCAKAAIAmAAIAABxgAgCgqIgIAEIgEAGIgCAIQAAAFACAEQABAEADACQADACAFACQADABAHAAIAWAAIAAgnIgWAAg");
	this.shape_76.setTransform(42.6,-31.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#19B7E4").s().p("AAeA5IABheIgGANIgzBMIgDAEQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgMAAIAAhxIARAAIgBBeIAGgNIAzhMIADgEIAEgBIANAAIAABxg");
	this.shape_77.setTransform(31.9,-31.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#19B7E4").s().p("AAuA5IAAhZIgmBFQgBABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAIgEABIgBAAQgEAAgCgEIgnhFIABAEIAABVIgPAAIAAhxIANAAIADAAQAAAAAAAAQABABAAAAQAAAAAAAAQABABAAAAIAqBNIABgEIAphJIACgCIADAAIAMAAIAABxg");
	this.shape_78.setTransform(18.3,-31.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#19B7E4").s().p("AgWA2QgKgEgIgHQgIgJgDgKQgFgLAAgNQAAgLAFgMQADgJAIgJQAIgHAKgFQAKgFAMAAQANAAAKAFQALAFAHAHQAHAIAFAKQAEANAAAKQAAAMgEAMQgFALgHAIQgHAHgLAEQgLAEgMAAQgLAAgLgEgAgPgoQgHADgGAFQgGAHgCAIQgDAJAAAIQAAAKADAJQADAIAFAGQAGAFAHAEQAHADAIAAQAJAAAIgDQAHgEAFgFQAFgFADgJQADgHAAgMQAAgKgDgHQgDgJgFgGQgFgFgHgDQgIgDgJAAQgIAAgHADg");
	this.shape_79.setTransform(4.5,-31.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#19B7E4").s().p("AAeA5IAAg0Ig7AAIAAA0IgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_80.setTransform(-8,-31.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#19B7E4").s().p("AgWA2QgLgEgHgHQgHgIgFgLQgEgMAAgMQAAgKAEgNQAFgKAHgIQAHgHALgFQAKgFAMAAQANAAAKAFQALAFAHAHQAHAIAFAKQAEANAAAKQAAAMgEAMQgFALgHAIQgHAHgLAEQgLAEgMAAQgLAAgLgEgAgPgoQgIADgFAFQgFAGgDAJQgDAHAAAKQAAAMADAHQADAJAFAFQAFAFAIAEQAHADAIAAQAKAAAGgDQAIgEAFgFQAFgFADgJQADgJAAgKQAAgIgDgJQgDgJgFgGQgFgFgIgDQgGgDgKAAQgIAAgHADg");
	this.shape_81.setTransform(-20.5,-31.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#19B7E4").s().p("AAgA5IgFgBIgDgEIgcgpIgEgFIgHgBIgOAAIAAA0IgQAAIAAhxIAQAAIAAAxIAPAAIADgBIADgBIAegrIADgDIAEgBIAOAAIgiAvQgDAFgGACQADABADACIAGAHIAiAxg");
	this.shape_82.setTransform(-31.1,-31.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#19B7E4").s().p("AgeA2QgKgFgHgIIAGgHIADgBIACAAIABABIAGAFIAGADIAHACIAJAAQAHAAAHgCQAGgDAFgFQAGgGADgGQAEgJAAgIIg4AAIAAgLIA4AAQgBgJgEgHQgBgFgHgHQgFgFgGgCQgHgCgHAAQgHAAgFABIgIAEIgGADQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAAAAAIgCgBIgCgBIgFgIQAHgGAKgFQAJgEAMAAQALAAALAFQAKAEAIAIQAHAHAEALQAEAKAAANQAAAOgEAKQgDAKgIAIQgGAHgLAFQgKAFgMAAQgNAAgLgFg");
	this.shape_83.setTransform(-42.7,-31.4);

	var maskedShapeInstanceList = [this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},158).to({state:[]},80).wait(79));

	// mask - копия (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_79 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_3_graphics_80 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_3_graphics_81 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_3_graphics_82 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_3_graphics_83 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_3_graphics_84 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_3_graphics_85 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_3_graphics_86 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_3_graphics_87 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_3_graphics_150 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_3_graphics_151 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_3_graphics_152 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_3_graphics_153 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_3_graphics_154 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_3_graphics_155 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_3_graphics_156 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_3_graphics_157 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_3_graphics_158 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(79).to({graphics:mask_3_graphics_79,x:250.5,y:63}).wait(1).to({graphics:mask_3_graphics_80,x:154.4,y:63}).wait(1).to({graphics:mask_3_graphics_81,x:71.1,y:63}).wait(1).to({graphics:mask_3_graphics_82,x:0.7,y:63}).wait(1).to({graphics:mask_3_graphics_83,x:-57,y:63}).wait(1).to({graphics:mask_3_graphics_84,x:-101.8,y:63}).wait(1).to({graphics:mask_3_graphics_85,x:-133.9,y:63}).wait(1).to({graphics:mask_3_graphics_86,x:-153.1,y:63}).wait(1).to({graphics:mask_3_graphics_87,x:-159.5,y:63}).wait(1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_3_graphics_150,x:77.7,y:67}).wait(1).to({graphics:mask_3_graphics_151,x:-20.7,y:67}).wait(1).to({graphics:mask_3_graphics_152,x:-106,y:67}).wait(1).to({graphics:mask_3_graphics_153,x:-178.2,y:67}).wait(1).to({graphics:mask_3_graphics_154,x:-237.3,y:67}).wait(1).to({graphics:mask_3_graphics_155,x:-283.2,y:67}).wait(1).to({graphics:mask_3_graphics_156,x:-316.1,y:67}).wait(1).to({graphics:mask_3_graphics_157,x:-335.7,y:67}).wait(1).to({graphics:mask_3_graphics_158,x:-342.3,y:67}).wait(159));

	// t2
	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#19B7E4").s().p("AApA5IAAhxIARAAIAABxgAg5A5IAAhxIARAAIAAAxIAVAAQAKAAAJACQAGADAFADQAFAEACAGQADAEAAAIQAAAHgDAHQgDAIgFADQgEAEgIADQgGACgLAAgAgoAsIAVAAQAHAAAEgBQAGgCACgCQABgCACgEQACgEAAgEQAAgFgCgEIgDgGQgCgCgFgCQgFgBgHAAIgVAAg");
	this.shape_84.setTransform(91.6,21.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#19B7E4").s().p("AgmA5IAAhxIAjAAQAJAAAJACQAIADAFAFQAFAEADAHQADAHAAAIQAAAHgDAHQgDAGgFAFQgFAFgJACQgIADgJAAIgSAAIAAAqgAgVACIASAAQADAAAHgCQAFAAAEgDIAFgIQABgEAAgFQAAgGgBgEQgBgDgEgEQgDgDgGgCQgEgBgGAAIgSAAg");
	this.shape_85.setTransform(80,21.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#19B7E4").s().p("AgjA5IAAhxIBGAAIAAANIg1AAIAAAlIArAAIAAAMIgrAAIAAAmIA1AAIAAANg");
	this.shape_86.setTransform(70.5,21.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#19B7E4").s().p("AAuA5IAAhVIAAgEIgnBGIgCACIgDABIgCAAQgEAAgCgDIgnhGIAAAEIABAEIAABRIgPAAIAAhxIAMAAIAEAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAABABIAmBEIADAJIAEgJIAmhEIADgDIADAAIAMAAIAABxg");
	this.shape_87.setTransform(58.1,21.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#19B7E4").s().p("AgXA2QgKgEgHgHIAFgIIACgBIACgBIADABIADACIAEADIAMAFIAJAAQALABAHgGQAHgGAAgKIgCgIQgBgEgEgDIgHgDIgZgBIgBgNIAPAAQAFAAADgCQAEAAAEgDQACgBACgEIACgIQAAgDgCgEQgBgCgDgDQgEgDgDgBQgFgBgEAAQgHAAgEABIgIAEIgFACIgDACIgCgBIgCgCIgEgIQAHgFAIgEQAJgCALAAQAIAAAHABQAIADAEAEQAFADADAGQACAGAAAGQAAAIgEAHQgEAHgIAEIAIADQAEACACAEIAEAHQACAEAAAFQAAAHgDAGQgDAHgFAFQgFAEgJADQgHAEgJAAQgMAAgLgFg");
	this.shape_88.setTransform(45.8,21.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#19B7E4").s().p("AApA5IgDgBIgCgCIgLgbIgxAAIgLAbIgCACIgEABIgMAAIAuhxIAPAAIAuBxgAgDgdIgRAsIApAAIgTgxIgCgGg");
	this.shape_89.setTransform(36.1,21.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#19B7E4").s().p("AgmA5IAAhxIAjAAQAJAAAJACQAIADAFAFQAFAEADAHQADAHAAAIQAAAIgDAGQgCAGgGAFQgFAFgJACQgIADgJAAIgSAAIAAAqgAgVACIASAAQADAAAHgCQAFAAAEgDIAFgIQABgEAAgFQAAgGgBgEQgBgDgEgEQgDgDgGgCQgEgBgGAAIgSAAg");
	this.shape_90.setTransform(27.1,21.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#19B7E4").s().p("AgjA5IAAhxIBGAAIAAANIg1AAIAAAlIArAAIAAAMIgrAAIAAAmIA1AAIAAANg");
	this.shape_91.setTransform(13.5,21.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#19B7E4").s().p("AApA5IAAhxIARAAIAABxgAg5A5IAAhxIARAAIAAAxIAVAAQAKAAAIACQAHACAFAEQAFAEACAGQADAGAAAGQAAAHgDAHQgDAIgFADQgEAEgIADQgGACgLAAgAgoAsIAVAAQAHAAAEgBQAGgCACgCQABgCACgEIABgIIgBgJQgBgDgCgDQgCgCgGgCQgEgBgHAAIgVAAg");
	this.shape_92.setTransform(1.3,21.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#19B7E4").s().p("AAeA5IAAgzIg7AAIAAAzIgRAAIAAhxIARAAIAAAzIA7AAIAAgzIARAAIAABxg");
	this.shape_93.setTransform(-12,21.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#19B7E4").s().p("AgHA5IAAhjIglAAIAAgOIBZAAIAAAOIglAAIAABjg");
	this.shape_94.setTransform(-22.8,21.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#19B7E4").s().p("AAfA5IgEgBIgfgtQgCgDgDgBQgCgCgEAAIgOAAIAAA0IgQAAIAAhxIAQAAIAAAyIAMAAIAGgBIAFgFIAcgnQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAIAOAAIgiAvQgDAGgGABIAGADIAGAHIAiAxg");
	this.shape_95.setTransform(-32.3,21.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#19B7E4").s().p("AAqA5IgEgBIgCgCIgKgbIgzAAIgKAbIgBACIgEABIgNAAIAuhxIAQAAIAtBxgAAAgiIgTAxIAoAAIgVg3g");
	this.shape_96.setTransform(-43.7,21.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#19B7E4").s().p("AAcA5IAAhkIg3AAIAABkIgRAAIAAhxIBZAAIAABxg");
	this.shape_97.setTransform(-55,21.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#19B7E4").s().p("AAuA5IAAhVIAAgEIgnBGIgCACIgDABIgCAAQgEAAgBgDIgohGIABAEIAABVIgPAAIAAhxIAMAAIAEAAIACADIAqBNIADgJIAmhEIADgDIADAAIAMAAIAABxg");
	this.shape_98.setTransform(-68.3,21.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#19B7E4").s().p("AgWA2QgLgFgHgHQgGgGgGgMQgEgLAAgNQAAgMAEgKQAFgMAHgHQAHgIALgEQAKgFAMABQANgBAKAFQALAEAHAIQAHAHAFAMQAEAKAAAMQAAANgEALQgFAMgHAGQgHAHgLAFQgKAEgNABQgMgBgKgEgAgPgoQgJAEgEAFQgFAFgDAIQgDAIAAAKQAAAMADAGQADAJAFAGQAFAFAIADQAHADAIAAQAKAAAGgDQAIgDAFgFQAFgGADgJQADgJAAgJQAAgIgDgKQgDgIgFgFQgEgFgJgEQgGgEgKAAQgIAAgHAEg");
	this.shape_99.setTransform(-82.2,21.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#19B7E4").s().p("AAgA5IgFgBIgfgtQgCgDgCgBQgDgCgEAAIgOAAIAAA0IgQAAIAAhxIAQAAIAAAyIAMAAIAGgBIAFgFIAcgnIADgEQABAAAAAAQABgBAAAAQAAAAABAAQABAAAAAAIAOAAIgiAvQgDAGgGABQAFACABABIAGAHIAiAxg");
	this.shape_100.setTransform(-92.8,21.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#4D575B").s().p("AApA5IgEgBIgBgCIgKgbIgzAAIgKAbIgCACIgEABIgMAAIAuhxIAQAAIAtBxgAgDgdIgRAsIApAAIgUgxIgBgGg");
	this.shape_101.setTransform(26.4,0.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#4D575B").s().p("AAfA5IgEgBIgDgEIgcgpQgCgDgDgBQgCgCgEAAIgOAAIAAA0IgQAAIAAhxIAQAAIAAAyIAMAAIAGgBIAFgFIAcgnIADgEQABAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAIAOAAIgiAvQgDAGgGABQAEACACABQADADADAEIAiAxg");
	this.shape_102.setTransform(16.2,0.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#4D575B").s().p("AgmA5IAAhxIAjAAQAJAAAJACQAIADAFAFQAFAEADAHQADAHAAAIQAAAIgDAGQgCAGgGAFQgFAFgJACQgIADgJAAIgSAAIAAAqgAgVACIASAAQAFAAAFgCQAFAAAEgEIAFgHQABgEAAgFQAAgGgBgEQgBgDgEgEQgDgDgGgCIgKgBIgSAAg");
	this.shape_103.setTransform(5.8,0.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#4D575B").s().p("AAeA5IAAhWIABgIIgDAHIg2BSQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgMAAIAAhxIARAAIAABWIgBAIIAGgNIAzhMQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQABAAAAAAIANAAIAABxg");
	this.shape_104.setTransform(-5.6,0.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#4D575B").s().p("AgHA5IAAhjIglAAIAAgOIBZAAIAAAOIglAAIAABjg");
	this.shape_105.setTransform(-16.4,0.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#4D575B").s().p("AgPA2QgKgEgHgIQgHgHgEgMQgEgLAAgMQAAgLAEgMQAFgLAHgHQAHgIALgFQAKgEALAAQAOAAAIAEQAJAFAIAGIgGAHIgBACIgCABIgEgCIgFgEIgJgDQgFgBgHAAQgIAAgHADQgJAFgDAEQgGAFgDAIQgCAJAAAJQAAALADAIQADAJAFAEQAFAHAIACQAGADAHAAIAJgBIAIgBIAHgDIAFgFIACgBIABAAIACABIAHAHQgHAJgKAEQgKAEgPAAQgLAAgKgEg");
	this.shape_106.setTransform(-26.2,0.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#4D575B").s().p("AAeA5IAAgwIgQAAIgEAAIgDABIgDADIgEAEIgXAjIgEAEQgDABgDAAIgMAAIAdgpQAEgHAHgDIgMgEQgGgDgCgDIgFgJQgCgEAAgGQAAgHADgHQADgGAFgEQAGgFAHgCQAIgCAIAAIAmAAIAABxgAgCgqIgIAEQgDADgBAEQgCADAAAFQAAAEACAEQABADADADQADADAFABIAgABIAAgnIgWAAIgKABg");
	this.shape_107.setTransform(56.7,-20.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#4D575B").s().p("AApA5IgDgBIgCgCIgLgbIgxAAIgLAbIgCACIgDABIgNAAIAuhxIAPAAIAuBxgAgBgiIgTAxIApAAIgVg3g");
	this.shape_108.setTransform(46.7,-20.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#4D575B").s().p("AAeA5IAAgzIg7AAIAAAzIgRAAIAAhxIARAAIAAAzIA7AAIAAgzIARAAIAABxg");
	this.shape_109.setTransform(35.2,-20.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#4D575B").s().p("AgoA5IAAhxIAlAAQAIAAAKACQAIACAEAEQAGAEACAFQACAHAAAGQAAAEgBAEQgCAEgCADIgHAGIgJAEQAMACAHAHQAGAGAAALQAAAIgDAFQgCAGgGAEQgEAEgIADQgHACgLAAgAgXAsIAXAAQAHAAAEgBIAIgEQADgDABgEQACgDAAgFQAAgJgGgEQgGgFgNAAIgXAAgAgXgFIAegBQAEgBAEgDQADgCABgEQACgEAAgEQAAgJgGgGQgGgEgMAAIgUAAg");
	this.shape_110.setTransform(24.2,-20.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#4D575B").s().p("AAeA5IAAhWIABgIIgGANIgzBMQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgNAAIAAhxIARAAIAABWIgBAIIADgHIA2hSQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAIANAAIAABxg");
	this.shape_111.setTransform(12.6,-20.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#4D575B").s().p("AgHA5IAAhjIglAAIAAgOIBZAAIAAAOIglAAIAABjg");
	this.shape_112.setTransform(1.8,-20.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#4D575B").s().p("AAfA5IgEgBIgDgEIgcgpQgCgDgDgBQgCgCgEAAIgOAAIAAA0IgQAAIAAhxIAQAAIAAAyIAMAAIAGgBIAFgFIAcgnIADgEIAEgBIAOAAIgiAvQgEAGgFABQAEACACABIAGAHIAiAxg");
	this.shape_113.setTransform(-7.6,-20.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#4D575B").s().p("AgiA5IAAhxIBGAAIAAANIg2AAIAAAlIArAAIAAAMIgrAAIAAAmIA2AAIAAANg");
	this.shape_114.setTransform(-17.9,-20.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#4D575B").s().p("AgHA8IAAgOQgMgBgIgDQgIgDgHgHQgGgFgEgJQgEgIAAgKQAAgJAEgIQAEgJAGgFQAGgGAJgEQAKgEAKAAIAAgOIAPAAIAAAOQAKAAAKAEQAIADAHAHQAHAGADAIQAEAIAAAJQAAAKgEAIQgDAGgHAIQgHAHgIADQgIADgMABIAAAOgAAIAhQAHAAAGgDQAFgCAFgFQAEgEADgGQACgFAAgIQAAgHgCgFQgDgGgEgEQgFgFgFgDQgGgCgHAAgAgUgeQgHADgDAFQgFAFgCAFQgCAGAAAGQAAAHACAGQACAFAFAFQAEAFAGACQAGADAHAAIAAhBQgHAAgGACg");
	this.shape_115.setTransform(-29.2,-21);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#4D575B").s().p("AgHA8IAAgOQgMgBgIgDQgIgDgHgHQgGgFgEgJQgEgIAAgKQAAgJAEgIQAEgJAGgFQAGgGAJgEQAKgEAKAAIAAgOIAPAAIAAAOQAKAAAKAEQAIADAHAHQAHAGADAIQAEAIAAAJQAAAKgEAIQgDAGgHAIQgHAHgIADQgIADgMABIAAAOgAAIAhQAHAAAGgDQAFgCAFgFQAEgEADgGQACgFAAgIQAAgHgCgFQgDgGgEgEQgFgFgFgDQgGgCgHAAgAgUgeQgHADgDAFQgFAFgCAFQgCAGAAAGQAAAHACAGQACAFAFAFQAEAFAGACQAGADAHAAIAAhBQgHAAgGACg");
	this.shape_116.setTransform(-41.7,-21);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#4D575B").s().p("AgeA2QgJgEgIgJIAGgHIADgBIADABIAGAFIAGADIAQADQAIAAAGgEQAGgCAFgFQAGgFADgHQADgGABgLIg4AAIAAgLIA4AAQgBgKgEgGQgDgHgFgEQgFgFgGgDQgHgDgHABQgHgBgFACIgIADIgGAEIgDACIgCgBIgCgBIgFgIQAHgGAKgEQAHgFAOAAQALAAALAFQAKAEAIAHQAHAKAEAJQAEAKAAANQAAAOgEAJQgDAMgIAHQgGAIgLAEQgKAFgMgBQgOABgKgFg");
	this.shape_117.setTransform(-53.5,-20.7);

	var maskedShapeInstanceList = [this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84}]},79).to({state:[]},80).wait(158));

	// mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_0 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_4_graphics_1 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_4_graphics_2 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_4_graphics_3 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_4_graphics_4 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_4_graphics_5 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_4_graphics_6 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_4_graphics_7 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_4_graphics_8 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_4_graphics_71 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_4_graphics_72 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_4_graphics_73 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_4_graphics_74 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_4_graphics_75 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_4_graphics_76 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_4_graphics_77 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_4_graphics_78 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_4_graphics_79 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:mask_4_graphics_0,x:250.5,y:63}).wait(1).to({graphics:mask_4_graphics_1,x:154.4,y:63}).wait(1).to({graphics:mask_4_graphics_2,x:71.1,y:63}).wait(1).to({graphics:mask_4_graphics_3,x:0.7,y:63}).wait(1).to({graphics:mask_4_graphics_4,x:-57,y:63}).wait(1).to({graphics:mask_4_graphics_5,x:-101.8,y:63}).wait(1).to({graphics:mask_4_graphics_6,x:-133.9,y:63}).wait(1).to({graphics:mask_4_graphics_7,x:-153.1,y:63}).wait(1).to({graphics:mask_4_graphics_8,x:-159.5,y:63}).wait(1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_4_graphics_71,x:77.7,y:67}).wait(1).to({graphics:mask_4_graphics_72,x:-20.7,y:67}).wait(1).to({graphics:mask_4_graphics_73,x:-106,y:67}).wait(1).to({graphics:mask_4_graphics_74,x:-178.2,y:67}).wait(1).to({graphics:mask_4_graphics_75,x:-237.3,y:67}).wait(1).to({graphics:mask_4_graphics_76,x:-283.2,y:67}).wait(1).to({graphics:mask_4_graphics_77,x:-316.1,y:67}).wait(1).to({graphics:mask_4_graphics_78,x:-335.7,y:67}).wait(1).to({graphics:mask_4_graphics_79,x:-342.3,y:67}).wait(238));

	// t1
	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.lf(["#428835","#1C7131","#4FAE33","#3A7C32"],[0,0.298,0.671,1],-0.3,20.4,0.3,-18.9).s().p("AjxC6QAzgMAegaQAbgXASgoQANgdAQg4QARg+AKgYQAlhdBWgIQAggDC2AAQhXAKglBdQgKAXgRA+QgQA4gNAcQgTApgaAXQgeAZgyAMQggAIjaAAIAkgFg");
	this.shape_118.setTransform(102,0.2,0.5,0.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.lf(["#F2F3F3","#D4D4D6","#FFFFFF","#DEDFE0"],[0,0.31,0.671,1],-0.7,21.6,0.7,-19).s().p("AjmC5QAzgMAegaQAbgXASgoQANgdAQg4QASg9AJgYQAmhcBVgKIDTgCQhVALglBcQgKAYgRA9QgPA3gNAdQgUApgaAWQgeAbgyALQgTAFhrACIiOABQAogCAPgEg");
	this.shape_119.setTransform(112.2,0.1,0.5,0.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.lf(["#A81917","#B31918","#E41513","#A81917"],[0,0.298,0.659,1],-0.3,21,0.3,-18.5).s().p("AjxC5QAzgLAegbQAbgWATgpQANgcAQg4QARg9AJgXQAlhbBSgMIAXgCIDRgBQhSAMglBcQgJAXgSA9QgPA3gNAdQgTAogaAXQgeAZgyAMQgQAEh0ADIiYACQAjgCAPgEg");
	this.shape_120.setTransform(123.4,0,0.5,0.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#19B7E4").s().p("AApA5IAAhxIARAAIAABxgAg5A5IAAhxIARAAIAAAxIAVAAQAMAAAGACQAGABAGAEQAFAFACAFQADAGAAAHQAAAIgDAGQgCAGgGAFQgFAFgHACQgIACgJAAgAgoAsIAVAAQAHAAAEgBQAFgCADgDQACgCABgEIABgIIgBgIQgBgEgCgCIgIgEIgggBg");
	this.shape_121.setTransform(30.9,19.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#19B7E4").s().p("AAeA5IAAg0Ig7AAIAAA0IgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_122.setTransform(17.5,19.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#19B7E4").s().p("AAeA5IAAhWIABgIIgGANIgzBMQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQgBAAAAAAIgNAAIAAhxIARAAIAABWIgBAIIADgHIA2hSQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAIANAAIAABxg");
	this.shape_123.setTransform(5.3,19.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#19B7E4").s().p("AhHA5IAAhxIARAAIAABkIAuAAIAAhkIAQAAIAABkIAvAAIAAhkIARAAIAABxg");
	this.shape_124.setTransform(-9.4,19.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#19B7E4").s().p("AApA5IgDgBIgCgDIgKgbIgzAAIgJAbIgCADQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgMAAIAuhxIAQAAIAtBxgAgDgeIgRAsIApAAIgVg3g");
	this.shape_125.setTransform(-23.4,19.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#19B7E4").s().p("AAtA5IAAhRIABgEIAAgEIgmBFIgDADIgEABIgBAAQgEAAgCgEIgnhFIAAAEIAABVIgOAAIAAhxIAPAAIADACIApBNIACgEIAphJIABgCIAQAAIAABxg");
	this.shape_126.setTransform(-36.2,19.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#19B7E4").s().p("AgjA5IAAhxIBGAAIAAANIg1AAIAAAlIArAAIAAAMIgrAAIAAAmIA1AAIAAANg");
	this.shape_127.setTransform(47.7,-1.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#19B7E4").s().p("AApA5IAAhxIARAAIAABxgAg5A5IAAhxIARAAIAAAwIAWAAQAJAAAJADQAGACAFADQAGAFACAFQACAGAAAHQAAAIgDAGQgDAGgFAFQgGAFgFACQgJACgJAAgAgoAsIAVAAQAHAAAFgBQAEgCADgDQACgBABgFQACgDAAgFQAAgEgCgEQAAgEgDgCIgHgEIghgBg");
	this.shape_128.setTransform(35.5,-1.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#19B7E4").s().p("AAeA5IAAg0Ig7AAIAAA0IgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_129.setTransform(22.2,-1.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#19B7E4").s().p("AgnA5IAAhxIARAAIAAAwIAWAAQAJAAAIADQAIACAEADQAGAFACAFQADAGgBAHQAAAIgCAGQgDAGgGAFQgFAFgHACQgIACgIAAgAgWAsIAWAAQAFAAAFgBQAFgCADgDQACgBABgFQACgDAAgFQAAgEgCgEQAAgEgDgCIgIgEIgggBg");
	this.shape_130.setTransform(11.7,-1.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#19B7E4").s().p("AgwA5QAAAAgBgBQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgKIAFAAIAHgBQADgCADgDQADgGACgFQACgFADgNQACgIABgTIADgnIBDAAIAAByIgQAAIAAhlIgkAAQgBAWgCAQQgCAQgDALQgCAMgEAGQgDAHgEAFQgEAEgFABQgFACgFAAg");
	this.shape_131.setTransform(-0.2,-1.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#19B7E4").s().p("AAqA5IgEgBIgCgDIgLgbIgyAAIgKAbIgCADIgDABIgNAAIAuhxIAPAAIAuBxgAgBgjIgSAxIAoAAIgVg3g");
	this.shape_132.setTransform(-10.9,-1.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#19B7E4").s().p("AgmA5IAAhxIAiAAQAMAAAHACQAHACAGAFQAGAFACAHQADAGAAAIQAAAJgDAGQgEAGgFAEQgEAFgJADQgJADgJAAIgRAAIAAAqgAgVACIARAAQAHAAAEgCQAFgBADgDQAEgCABgFIACgKQAAgFgCgEQgBgEgEgDQgCgDgGgCQgHgCgEAAIgRAAg");
	this.shape_133.setTransform(-19.9,-1.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#19B7E4").s().p("AAeA5IAAhPIABgPIgGANIgzBMIgDADQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgNAAIAAhxIARAAIgBBeIADgHIADgGIAzhMIADgEIAFgBIAMAAIAABxg");
	this.shape_134.setTransform(-31.3,-1.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#19B7E4").s().p("AgHA5IAAhkIglAAIAAgNIBZAAIAAANIglAAIAABkg");
	this.shape_135.setTransform(-42.1,-1.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#19B7E4").s().p("AgPA2QgJgDgIgJQgIgJgDgJQgEgMAAgMQAAgMAEgKQAEgLAIgIQAHgIAKgEQALgEALAAQALAAALADQAKAFAGAGIgFAIIgCABIgCABIgDgCIgGgDIgIgDQgEgCgIAAQgIAAgHADQgGADgGAGQgFAFgDAIQgDAJAAAJQAAALADAIQACAIAHAGQAFAGAGACQAHADAIAAIAJAAIAIgCIAFgDIAIgGIABAAIADABIAGAHQgHAJgKAEQgKAEgOABQgLAAgLgFg");
	this.shape_136.setTransform(-52,-1.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#4D575B").s().p("AgjA5IAAhxIBHAAIAAANIg2AAIAAAlIArAAIAAAMIgrAAIAAAmIA2AAIAAANg");
	this.shape_137.setTransform(52.3,-22.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#4D575B").s().p("AAeA5IAAhWIABgIIgDAHIg2BSQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgMAAIAAhxIARAAIAABWIgBAIIAGgNIAzhMQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAIANAAIAABxg");
	this.shape_138.setTransform(41.2,-22.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#4D575B").s().p("AAfA5IgEgBIgfgtIgEgFQgEgBgDAAIgOAAIAAA0IgQAAIAAhxIAQAAIAAAxIAPAAIADgBIADgBIAegrIADgDIAFgBIANAAIgiAuQgDAGgGACQACABAEACIAoA4g");
	this.shape_139.setTransform(30.4,-22.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#4D575B").s().p("AgPA3QgKgFgIgIQgGgHgEgMQgEgKAAgNQAAgNAEgJQAEgLAHgIQAIgIAKgEQAKgEAMgBQAMAAAJAFQALAEAGAGIgGAIIgBABIgCABIgEgCIgEgEIgJgCQgEgCgIAAQgIAAgHADQgGADgHAFQgEAGgDAJQgEAIAAAJQAAALAEAIQACAHAGAHQAFAFAHADQAHADAIABIAJgBIAHgCIAGgDIAIgGIABAAIACABIAHAHQgIAJgKAEQgJAEgPAAQgKAAgLgDg");
	this.shape_140.setTransform(19.3,-22.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#4D575B").s().p("AAeA5IAAg0Ig7AAIAAA0IgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_141.setTransform(7.6,-22.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#4D575B").s().p("AAeA5IAAgxIgQAAIgEABIgDABIgDADIgEAEIgXAiIgEAEQgCACgEAAIgMAAIAdgpQAEgHAHgEQgHAAgFgEQgGgCgCgDQgEgFgBgEQgCgFAAgGQAAgHADgGQADgHAFgDQAGgFAHgCQAGgCAKAAIAmAAIAABxgAgCgqIgIAEQgDADgBADIgCAIQAAAFACAEQABAEADACQACACAGACQADABAHAAIAWAAIAAgnIgWAAQgHAAgDABg");
	this.shape_142.setTransform(-4.6,-22.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#4D575B").s().p("AgmA5IAAhxIAQAAIAAAwIAWAAQAIAAAJADQAIACAFADQAFAFACAFQADAGAAAHQAAAIgEAGQgBAGgHAFQgEAEgIADQgJACgHAAgAgWAsIAWAAIAKgBQAEgCADgDQAEgCABgEQABgDAAgFIgBgIQgCgEgDgCIgHgEIgggBg");
	this.shape_143.setTransform(-13.5,-22.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#4D575B").s().p("AgwA5QAAAAgBgBQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgKIAFAAIAHgBQADgCADgDIAFgLIAFgSQACgIABgTIADgnIBDAAIAAByIgQAAIAAhlIgkAAIgDAmQgCASgDAJQgCALgEAHQgCAHgFAFQgEAEgFABIgKACg");
	this.shape_144.setTransform(-25.5,-22.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#4D575B").s().p("AApA5IgDgBIgCgDIgLgbIgxAAIgLAbIgCADQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgNAAIAuhxIAPAAIAuBxgAgBgjIgTAxIApAAIgVg3g");
	this.shape_145.setTransform(-36.2,-22.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#4D575B").s().p("AgHA5IAAhkIglAAIAAgNIBZAAIAAANIglAAIAABkg");
	this.shape_146.setTransform(-45.2,-22.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#4D575B").s().p("AAeA5IAAhPIABgPIgGANIgzBMIgDADQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgLAAIAAhxIAQAAIgBBeIAGgNIAzhMIADgEIAFgBIALAAIAABxg");
	this.shape_147.setTransform(-56,-22.4);

	var maskedShapeInstanceList = [this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128,this.shape_129,this.shape_130,this.shape_131,this.shape_132,this.shape_133,this.shape_134,this.shape_135,this.shape_136,this.shape_137,this.shape_138,this.shape_139,this.shape_140,this.shape_141,this.shape_142,this.shape_143,this.shape_144,this.shape_145,this.shape_146,this.shape_147];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118}]}).to({state:[]},80).wait(237));

	// Слой 3
	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("rgba(0,102,204,0)").s().p("A3bH0IAAvnMAu3AAAIAAPng");
	this.shape_148.setTransform(-3,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_148).wait(317));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-153,-50,300,100);


(lib.dfgdfggg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMAZQgFgFgBgHIAHgBQABAGADADQADACAEAAQAEAAAEgDQADgDAAgGQAAgEgDgDQgDgEgFAAIgEABIABgFIABAAQADAAAEgCQAEgDAAgFQAAgDgDgDQgDgCgDAAQgEAAgDACQgCADgBAFIgHgBQABgHAFgEQAEgEAHAAQAEAAAEACQAEACACADQACAEAAAEQAAADgCADQgCADgEACQAFABADADQADAEAAAFQAAAIgGAFQgFAFgIAAQgHAAgFgEg");
	this.shape.setTransform(213.3,4.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMAYQgGgEAAgHIAHgBQABAGADACQADADAEAAQAEAAAEgEQAEgEAAgGQAAgGgEgDQgEgDgEAAQgEAAgCACQgDABgCACIgGgBIAGgdIAbAAIAAAHIgWAAIgDAPQAFgDAFAAQAHAAAGAFQAFAEAAAIQAAAIgEAGQgGAHgJAAQgIAAgEgFg");
	this.shape_1.setTransform(209.1,4.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_2.setTransform(204.6,4.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMAXQgFgHgBgQQAAgJACgGQADgHADgDQAEgDAGAAQAEAAAEACQADABADAEIADAIIABANQAAAKgCAGQgBAGgFAEQgEADgGAAQgHAAgFgGgAgHgSQgDAFgBANQABAOADAFQADAEAEAAQAFAAADgEQAEgFAAgOQAAgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_3.setTransform(200.5,4.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgKAcQAAgHADgJQACgKAFgIQAEgIAGgHIgbAAIAAgGIAkAAIAAAFQgGAGgGAKQgFAIgCALQgCAHgBAIg");
	this.shape_4.setTransform(196.3,4.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMAXQgGgHABgQQAAgJABgGQACgHAFgDQAEgDAFAAQAFAAADACQADABADAEIAEAIIABANQAAAKgCAGQgCAGgEAEQgEADgHAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQADgFAAgOQAAgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_5.setTransform(192,4.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNAXQgFgHAAgPQAAgPAGgIQAFgGAJAAQAGAAAFAEQAEADABAHIgHABQgBgFgCgBQgCgDgFAAIgFABQgDADgCAEQgCAFAAAJQACgEAEgCIAHgCQAHAAAFAFQAFAEAAAJQAAAFgDAFQgCAEgEADQgEACgFAAQgIAAgGgGgAgGABQgEADAAAGIACAHQABADADACQADABACAAQAEAAAEgDQADgEAAgGQAAgGgDgDQgEgDgEAAQgFAAgCADg");
	this.shape_6.setTransform(187.8,4.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMAaQgEgEgBgHIAHgBQABAFACACQADACADAAQADAAACgBIAEgEIADgHIABgIIAAgCQgCAEgEACQgEACgDAAQgHAAgFgFQgFgEAAgJQAAgJAFgFQAFgFAIAAQAFAAAEADQAFADACAFQADAGAAAKQAAAKgDAHQgCAGgFAEQgEADgGAAQgGAAgFgDgAgHgTQgEAEAAAGQAAAGAEADQADADAEAAQAFAAADgDQADgDAAgGQAAgGgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_7.setTransform(183.5,4.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgJAcQAAgHACgJQADgKAEgIQAEgIAGgHIgbAAIAAgGIAkAAIAAAFQgGAGgFAKQgGAIgCALQgCAHgBAIg");
	this.shape_8.setTransform(179.3,4.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgKAcQAAgHADgJQACgKAFgIQAEgIAGgHIgcAAIAAgGIAlAAIAAAFQgGAGgGAKQgFAIgCALQgCAHgBAIg");
	this.shape_9.setTransform(175.1,4.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_10.setTransform(170.6,4.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgMAXQgGgHAAgQQABgJACgGQACgHADgDQAFgDAFAAQAFAAADACQADABADAEIADAIIACANQgBAKgCAGQgCAGgDAEQgFADgGAAQgIAAgEgGgAgHgSQgDAFgBANQABAOADAFQADAEAEAAQAFAAADgEQADgFABgOQgBgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_11.setTransform(166.5,4.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_12.setTransform(162,4.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_13.setTransform(155.4,4.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAIABQAFABACACQADACACADQACAEAAAEQAAAHgFAEQgFAFgMAAIgNAAIAAAYgAgNAAIANAAQAIAAADgDQADgDAAgFQAAgDgBgDQgCgCgEgBIgHgBIgNAAg");
	this.shape_14.setTransform(150.1,4.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgRAdIAAg5IAkAAIAAAHIgdAAIAAAyg");
	this.shape_15.setTransform(145.7,4.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_16.setTransform(140.3,4.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgNAYQgFgEAAgHIAHgBQABAGADACQADADAEAAQAFAAADgEQAEgEgBgGQABgGgEgDQgDgDgFAAQgDAAgDACQgDABgBACIgHgBIAGgdIAbAAIAAAHIgWAAIgDAPQAGgDAEAAQAHAAAFAFQAGAEAAAIQAAAIgEAGQgGAHgJAAQgHAAgGgFg");
	this.shape_17.setTransform(133.2,4.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_18.setTransform(128.6,4.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgMAXQgFgHAAgQQAAgJABgGQACgHAFgDQAEgDAFAAQAFAAADACQAEABACAEIAEAIIAAANQAAAKgBAGQgDAGgEAEQgDADgHAAQgHAAgFgGgAgHgSQgEAFABANQgBAOAEAFQADAEAEAAQAFAAADgEQAEgFgBgOQABgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_19.setTransform(124.6,4.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgSAdIAAgFIAGgIIAJgIQAIgIADgEQADgEAAgEQAAgEgDgDQgCgDgGAAQgDAAgEADQgDADAAAGIgHgBQABgIAFgEQAFgFAHAAQAIAAAFAFQAFAEgBAHIgBAHQgBADgDADQgEAEgHAGIgIAHIgDAEIAcAAIAAAHg");
	this.shape_20.setTransform(120.3,4.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_21.setTransform(115.8,4.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgNAYQgFgEAAgHIAHgBQABAGADACQADADAEAAQAFAAADgEQADgEAAgGQAAgGgDgDQgDgDgFAAQgDAAgDACQgDABgBACIgHgBIAFgdIAcAAIAAAHIgWAAIgDAPQAGgDAEAAQAIAAAEAFQAGAEAAAIQAAAIgFAGQgFAHgJAAQgHAAgGgFg");
	this.shape_22.setTransform(111.9,4.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_23.setTransform(107.5,4.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgMAXQgGgHABgQQAAgJABgGQACgHAFgDQAEgDAFAAQAFAAADACQADABADAEIAEAIIABANQAAAKgCAGQgCAGgEAEQgEADgHAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQADgFAAgOQAAgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_24.setTransform(103.4,4.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgKAcQABgHACgJQADgKAEgIQAEgIAFgHIgbAAIAAgGIAkAAIAAAFQgFAGgFAKQgGAIgCALQgCAHAAAIg");
	this.shape_25.setTransform(99.2,4.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgJAcQgBgHADgJQADgKAEgIQAEgIAFgHIgaAAIAAgGIAjAAIAAAFQgFAGgFAKQgGAIgCALQgCAHAAAIg");
	this.shape_26.setTransform(94.9,4.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_27.setTransform(88,4.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_28.setTransform(82.4,4.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAQAdIAAgsIgeAsIgIAAIAAg5IAHAAIAAAtIAdgtIAIAAIAAA5g");
	this.shape_29.setTransform(76.8,4.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_30.setTransform(71.1,7.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgMAYQgGgFAAgHQAAgGADgEQADgCAFgCQgEgBgCgDQgCgDAAgEQgBgHAFgEQAEgEAHAAQAHAAAFAEQAFAEgBAHQAAAEgCADQgCADgEABQAFACADADQADAEAAAFQAAAHgFAFQgFAFgJAAQgIAAgEgFgAgHAEQgDADgBAFIACAGIAEAEIAFABQAFAAADgDQAEgDAAgFQAAgFgEgDQgDgEgFAAQgEAAgDAEgAgFgUQgEADAAADQAAAEAEADQACADADAAQAEAAADgDQACgDAAgDQAAgEgCgDQgDgCgEAAQgDAAgCACg");
	this.shape_31.setTransform(67.9,4.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_32.setTransform(62.8,7.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAQAbIAAgMIgfAAIAAAMIgGAAIAAgSIADAAQAIgJAAgaIAbAAIAAAjIAFAAIAAASgAgLAJIAWAAIAAgdIgPAAQgBAUgGAJg");
	this.shape_33.setTransform(59.4,6.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgDAHQAAgBABAAQAAAAABgBQAAAAABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_34.setTransform(54.3,7.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAKAdIAAgfIgTAfIgHAAIAAgpIAHAAIAAAfIASgfIAIAAIAAApgAgGgUQgEgDAAgEIAFAAIACADIADABIAFgBIACgDIAFAAQAAAEgEADQgCACgGABQgDgBgDgCg");
	this.shape_35.setTransform(51.2,4.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgKAEIAAgHIAVAAIAAAHg");
	this.shape_36.setTransform(47.8,5.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgSAdIABgFIAEgIIAJgIQAJgIADgEQADgEAAgEQAAgEgCgDQgDgDgFAAQgEAAgEADQgCADAAAGIgHgBQAAgIAFgEQAEgFAIAAQAIAAAFAFQAEAEABAHIgBAHQgCADgEADQgDAEgHAGIgIAHIgCAEIAbAAIAAAHg");
	this.shape_37.setTransform(44.4,4.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAKAdIAAgfIgTAfIgHAAIAAgpIAHAAIAAAfIATgfIAHAAIAAApgAgGgUQgEgDAAgEIAFAAIACADIADABIAFgBIACgDIAFAAQAAAEgEADQgDACgEABQgFgBgCgCg");
	this.shape_38.setTransform(38.3,4.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAKAVIAAgfIgTAfIgHAAIAAgpIAHAAIAAAfIASgfIAIAAIAAApg");
	this.shape_39.setTransform(34,5.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAIAVIgIgNIgDgFIgEgBIAAATIgHAAIAAgpIAHAAIAAASQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQABgBACgHIADgGIADgCIAFgBIACAAIAAAGIgCAAIgEABIgCAFIgDAGIgDACQADABAFAHIAHANg");
	this.shape_40.setTransform(30.5,5.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_41.setTransform(26.8,5.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAKAVIAAgTIgTAAIAAATIgHAAIAAgpIAHAAIAAASIATAAIAAgSIAHAAIAAApg");
	this.shape_42.setTransform(22.7,5.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAKAVIAAgfIgTAfIgHAAIAAgpIAHAAIAAAfIATgfIAHAAIAAApg");
	this.shape_43.setTransform(18.5,5.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAXAbIAAgMIgzAAIAAgpIAHAAIAAAjIAQAAIAAgjIAGAAIAAAjIAQAAIAAgjIAHAAIAAAjIAFAAIAAASg");
	this.shape_44.setTransform(13.3,6.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgNAQQgGgFAAgLQAAgLAHgFQAGgFAGAAQAIAAAGAGQAFAGABAJQgBAHgCAFQgCAFgFACQgEADgGAAQgIAAgFgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQADgEABgIQgBgHgDgEQgDgEgGAAQgEAAgDAEg");
	this.shape_45.setTransform(7.8,5.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAIABQAFABADACQADACABADQACAEAAAEQAAAHgFAEQgEAFgNAAIgNAAIAAAYgAgNAAIANAAQAIAAADgDQADgDAAgFQAAgDgCgDQgCgCgCgBIgIgBIgNAAg");
	this.shape_46.setTransform(3.2,4.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAQAbIAAgMIgfAAIAAAMIgGAAIAAgSIADAAQAIgJAAgaIAbAAIAAAjIAFAAIAAASgAgLAJIAWAAIAAgdIgPAAQgBAUgGAJg");
	this.shape_47.setTransform(170.5,-2.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgPAJIAHgBQABAEACACQADACADAAQADAAACgCQADgCAAgDQAAgBAAAAQAAgBAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAIgFAAIgCAAIAAgFIAGAAIACgCQABAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAQgCgCgDAAQgFAAgCAHIgHgBQAEgMALAAQAGAAAEAEQAEAEgBAFQAAAFgEADQACAAACADQACADAAADQAAAGgEADQgFAEgGAAQgOAAgCgNg");
	this.shape_48.setTransform(166.6,-3.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgNAQQgFgGAAgKQAAgJAFgGQAGgGAIAAQAHAAAGAGQAFAGAAAJIAAACIgeAAQAAAHAEADQAEAEAEAAQADAAAEgCQACgCABgFIAIABQgCAHgFADQgEAEgHAAQgIAAgGgGgAgHgMQgDAEAAAFIAWAAQAAgFgDgDQgEgEgEAAQgEAAgEADg");
	this.shape_49.setTransform(162.8,-3.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgNAQQgGgFAAgLQAAgLAHgFQAGgFAGAAQAIAAAGAGQAFAGABAJQgBAHgCAFQgCAFgFACQgEADgGAAQgIAAgFgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQADgEABgIQgBgHgDgEQgDgEgGAAQgEAAgDAEg");
	this.shape_50.setTransform(158.5,-3.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgRAdIAAg4IAGAAIAAAFQACgDADgCQADgBADAAQAGAAADADQAEACADAFQACAFAAAGQAAAHgCAEQgDAFgEACQgFADgEAAQgDAAgDgBQgDgCgBgCIAAAUgAgIgSQgDAEAAAIQAAAHADAEQADADAFAAQAEAAAEgEQACgEAAgHQAAgIgCgEQgEgEgEAAQgEAAgEAFg");
	this.shape_51.setTransform(154.4,-2.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAOAdIAAgyIgcAAIAAAyIgIAAIAAg5IAsAAIAAA5g");
	this.shape_52.setTransform(149.4,-4.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgDAHQAAAAABgBQAAAAABgBQAAAAABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_53.setTransform(143.6,-1.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgPASQgDgDAAgFQAAgDABgDQACgCACgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgDACQgCACgBAEIgHgBIADgHQADgDADgBQAEgCAFAAQAFAAADACQAEABACACIACAFIAAAGIAAAIIAAANIACAFIgHAAQgBgCgBgDIgHAEIgHACQgHAAgEgEgAAAADIgHABIgCACIgBAEQAAAAAAABQAAABAAAAQAAABABAAQAAABABAAQACACAEAAQADAAADgCQADgBACgDQABgDAAgEIAAgDIgKADg");
	this.shape_54.setTransform(140.5,-3.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgQAVIAAgpIAQAAIAIABQADABACADQACADAAADIgBAFIgEAEQADAAACADQACACAAAEQgBAGgEADQgDADgHAAgAgJAPIAJAAIAHgBQADgCAAgDIgBgEQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAAAgBAAIgGAAIgIAAgAgJgCIAHAAIAGgBIACgCQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgDgDgCIgHgBIgHAAg");
	this.shape_55.setTransform(136.5,-3.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAIAVIgIgNIgDgFIgEgBIAAATIgHAAIAAgpIAHAAIAAASQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQABgBACgHIADgGIADgCIAFgBIACAAIAAAGIgCAAIgEABIgCAFIgDAGQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAAAQADABAFAHIAHANg");
	this.shape_56.setTransform(132.9,-3.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_57.setTransform(129.2,-3.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgNAQQgGgFABgLQAAgLAGgFQAFgFAHAAQAJAAAFAGQAFAGAAAJQABAHgDAFQgDAFgEACQgFADgFAAQgIAAgFgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAGAAADgEQAEgEgBgIQABgHgEgEQgDgEgGAAQgEAAgEAEg");
	this.shape_58.setTransform(125.1,-3.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAUAdIAAgvIgRAvIgFAAIgRgwIAAAwIgHAAIAAg5IALAAIAOAoIABAJIADgKIAOgnIAKAAIAAA5g");
	this.shape_59.setTransform(119.7,-4.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_60.setTransform(113.6,-1.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgLAVIAAgpIAXAAIAAAGIgQAAIAAAjg");
	this.shape_61.setTransform(111.4,-3.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgDAHQAAAAABgBQAAAAABgBQAAAAABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_62.setTransform(106.8,-1.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgMAaQgEgEgBgHIAHgBQABAFACACQADACADAAQADAAACgBIAEgEIADgHIABgIIAAgCQgCAEgEACQgEACgDAAQgHAAgFgFQgFgEAAgJQAAgJAFgFQAFgFAIAAQAFAAAEADQAFADACAFQADAGAAAKQAAAKgDAHQgCAGgFAEQgEADgGAAQgGAAgFgDgAgHgTQgEAEAAAGQAAAGAEADQADADAEAAQAFAAADgDQADgDAAgGQAAgGgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_63.setTransform(103.7,-4.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_64.setTransform(99.1,-4.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_65.setTransform(95,-4.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgMAYQgGgEAAgHIAHgBQABAGADACQADADAEAAQAFAAADgEQAEgEgBgGQABgGgEgDQgDgDgFAAQgEAAgCACQgDABgBACIgHgBIAGgdIAbAAIAAAHIgWAAIgDAPQAFgDAFAAQAHAAAGAFQAFAEAAAIQAAAIgEAGQgGAHgJAAQgHAAgFgFg");
	this.shape_66.setTransform(91,-4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_67.setTransform(86.4,-4.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_68.setTransform(82.1,-4.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgBASIAKgSIgKgRIAFAAIANARIgNASgAgQASIALgSIgLgRIAGAAIALARIgLASg");
	this.shape_69.setTransform(76.2,-3.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_70.setTransform(73.1,-1.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgRAdIAAg5IAkAAIAAAHIgdAAIAAAyg");
	this.shape_71.setTransform(70.3,-4.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_72.setTransform(67,-1.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_73.setTransform(63.1,-4.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_74.setTransform(59.4,-1.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgMAaQgGgEgDgHQgDgIAAgHQAAgJADgGQAEgHAGgEQAGgCAHAAQAIAAAGADQAGAFACAIIgHACQgCgHgEgCQgEgEgFAAQgGAAgEAEQgFADgCAGQgBAEAAAGQAAAGACAGQACAFAEADQAFADAEAAQAGAAAFgEQAEgEACgGIAHABQgCAJgGAGQgGAEgJAAQgJAAgFgDg");
	this.shape_75.setTransform(55.5,-4.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAPAdIAAgsIgdAsIgHAAIAAg5IAGAAIAAAtIAegtIAIAAIAAA5g");
	this.shape_76.setTransform(48,-4.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AATAjIAAgNIglAAIAAANIgHAAIAAgUIAFAAQAHgKAAgfIAAgJIAhAAIAAAyIAGAAIAAAUgAgGgZIgBAVQgCALgEAIIAaAAIAAgrIgTAAg");
	this.shape_77.setTransform(42.4,-3.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_78.setTransform(37.2,-4.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AASAdIgHgSIgXAAIgGASIgIAAIAWg5IAHAAIAYA5gAgDgLIgGAQIASAAIgGgPIgDgLIgDAKg");
	this.shape_79.setTransform(31.8,-4.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AALAdIgKgQQgDgGgDgDQgDgCgEAAIAAAbIgHAAIAAg5IAHAAIAAAaQAGAAABgCQADgCACgIIAEgIIAFgEQACgCADAAIAFABIAAAGIgBAAIgCAAQgDAAgCACIgEAHQgDAIgCABIgEADQAEABAGAJIAMATg");
	this.shape_80.setTransform(27.3,-4.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AALASIgLgSIALgRIAGAAIgKARIAKASgAgDASIgNgSIANgRIAFAAIgJARIAJASg");
	this.shape_81.setTransform(22.6,-3.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_82.setTransform(15.5,-4.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_83.setTransform(9.5,-4.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_84.setTransform(3.5,-4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dfgdfggg, new cjs.Rectangle(-1.6,-10.4,219.1,21.8), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ECF1F6").s().p("A/PSwMAAAglfMA+fAAAMAAAAlfg");
	this.shape.setTransform(200,120);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,400,240), null);


(lib.p1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p1();
	this.instance.parent = this;
	this.instance.setTransform(-186,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1_1, new cjs.Rectangle(-186,-180,372,360), null);


(lib.pics = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// p4.jpg
	this.instance = new lib.p4_1();
	this.instance.parent = this;
	this.instance.setTransform(130,122.2,1,1,0,0,0,129.9,120);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(237).to({_off:false},0).to({alpha:1},5,cjs.Ease.get(1)).wait(69).to({alpha:0},5,cjs.Ease.get(1)).wait(1));

	// p3.jpg
	this.instance_1 = new lib.p3_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(130,122.2,1,1,0,0,0,129.9,120);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(158).to({_off:false},0).to({alpha:1},5,cjs.Ease.get(1)).wait(69).to({alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(79));

	// p2.jpg
	this.instance_2 = new lib.p2_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(130,122.2,1,1,0,0,0,129.9,120);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(79).to({_off:false},0).to({alpha:1},5,cjs.Ease.get(1)).wait(69).to({alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(158));

	// p1.jpg
	this.instance_3 = new lib.p1_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(126.5,122.2,1,1,0,0,0,130,120);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:129.9,x:120,alpha:1},5,cjs.Ease.get(1)).wait(69).to({alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(237));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-189.5,-177.8,372,360);


// stage content:
(lib._100pcx100pc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		canvas.style.cursor = "pointer";
		canvas.addEventListener("click", function() {
		    window.callClick();
		});
		
		
		this.stop();
		 
		stage.addEventListener("resize", res);
		
		var bg = this.bg;
		
		
		var legal = this.legal;
		var text = this.text;
		var logo = this.logo;
		var pics = this.pics;
		
		function res() {
			
			var wdt = stage.canvas.width;
			var hgt = stage.canvas.height;
			
			var ratio = wdt/hgt;
			
			
		
			
			
			
			if(ratio<1) {
				var scaleX = wdt/520;
				var scaleY = hgt/800;
				
				bg.x = 0;
				bg.y = 0;
				bg.scaleX = scaleX;
				bg.scaleY = scaleY;
				
				legal.x = 10;
				legal.y = hgt - 20;
				legal.scaleX = 1.5*scaleX;
				legal.scaleY = 1.5*scaleX;
		
				text.scaleX = 1.6*scaleX;
				text.scaleY = 1.6*scaleX;
				text.x = 0.5*wdt;
				text.y = 0.115*hgt;
					
				logo.scaleX = 1.6*scaleX;		
				logo.scaleY = 1.6*scaleX;
				logo.x = 0.5*wdt;
				logo.y = 0.88*hgt;
		
				pics.scaleX = 1.0*scaleX;		
				pics.scaleY = 1.0*scaleX;
				pics.x = 0.5*wdt;
				pics.y = 0.5*hgt;
			} else {
				var scaleX = wdt/1028;
				var scaleY = hgt/500;
				
				bg.x = 0;
				bg.y = 0;
				bg.scaleX = scaleX;
				bg.scaleY = scaleY;
				
				legal.x = 10;
				legal.y = hgt - 20;
				legal.scaleX = 1.5*scaleX;
				legal.scaleY = 1.5*scaleX;
		
		
				text.scaleX = 1.6*scaleX;
				text.scaleY = 1.6*scaleX;
				text.x = 0.22*wdt;
				text.y = 0.3*hgt;
					
				logo.scaleX = 1.6*scaleX;		
				logo.scaleY = 1.6*scaleX;
				logo.x = 0.22*wdt;
				logo.y = 0.7*hgt;
		
				pics.scaleX = 1.12*scaleX;		
				pics.scaleY = 1.12*scaleX;
				pics.x = 0.72*wdt;
				pics.y = 0.5*hgt;
			}
		
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(317));

	// legal
	this.legal = new lib.dfgdfggg();
	this.legal.parent = this;
	this.legal.setTransform(15,-24.2);

	this.timeline.addTween(cjs.Tween.get(this.legal).wait(317));

	// logo
	this.logo = new lib.ClipGroup_8();
	this.logo.parent = this;
	this.logo.setTransform(543.8,-90,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(317));

	// pics
	this.pics = new lib.pics();
	this.pics.parent = this;
	this.pics.setTransform(263.6,-92.1);

	this.timeline.addTween(cjs.Tween.get(this.pics).wait(317));

	// text
	this.text = new lib.main();
	this.text.parent = this;
	this.text.setTransform(-59.7,-99.9);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(317));

	// bg
	this.bg = new lib.bg();
	this.bg.parent = this;
	this.bg.setTransform(0,120,1,1,0,0,0,0,120);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(317));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(44.3,130,840.8,510);
// library properties:
lib.properties = {
	width: 520,
	height: 800,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/p1.png", id:"p1"},
		{src:"images/100pcx100pc_atlas_NP_.jpg", id:"100pcx100pc_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;