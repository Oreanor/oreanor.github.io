(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"100pcx240_atlas_NP_", frames: [[0,0,260,240],[0,242,260,240],[0,484,260,240]]}
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
p.nominalBounds = new cjs.Rectangle(0,0,175,190);


(lib.p2 = function() {
	this.spriteSheet = ss["100pcx240_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.p3 = function() {
	this.spriteSheet = ss["100pcx240_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.p4 = function() {
	this.spriteSheet = ss["100pcx240_atlas_NP_"];
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
	this.shape.setTransform(0,-2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(-52,-13,104.2,21.4), null);


(lib.p4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#074AA8").s().p("AARAYIAAgdIABgEIgOAZQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAIAAAAIgDgCIgOgZIAAAEIAAAdIgKAAIAAgvIAKAAIACAAIACADIANAWIAAADIABgDIABgCIAMgUQAAAAAAgBQAAAAAAgBQABAAAAAAQAAAAABgBIACAAIAKAAIAAAvg");
	this.shape.setTransform(37.2,-102.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#074AA8").s().p("AgGAXQgEgCgDgDQgDgCgCgGQgBgEAAgGQAAgEABgFIAEgIIAIgFQAEgCAFAAQAFAAAFACQADACADADIgCAEIgBABIgCABIgBgBIgDgBIgCgBIgFgBIgEABIgEADIgCAFIgBAGIABAHIACAFIAEADIAEABIAFgBIAFgDIACAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAIADAEIgEAEIgFACIgEABIgGABQgEAAgDgCg");
	this.shape_1.setTransform(31.7,-102.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#074AA8").s().p("AgSA9QgIgDgGgGQgEgEgFgKQgDgIAAgKQAAgJAEgKQAEgIAHgLIAegoIAFgEQADgBAEgBIATAAIgpA1IAIgDIAIgCQAGAAAIADQAGACAGAFQAGAGACAFQAEAHAAAKQAAAHgEAKQgDAHgGAGQgGAGgIADQgIADgKAAQgJAAgJgDgAgJABIgHAFQgDADgCAFQgCAEAAAFQAAAGACAEQABAEADADQADADAEACQAGACAEAAIAJgCQAEgBADgEIAFgHQACgEAAgFQAAgGgCgEIgFgIQgDgDgEgCQgEgBgFAAQgFAAgEABg");
	this.shape_2.setTransform(24.3,-106.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#074AA8").s().p("AAOBAIAAgfIg1AAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIgDgLIA8hQIAUAAIAABPIARAAIAAAMQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgDABIgMAAIAAAfgAgYAQIAmAAIAAg2g");
	this.shape_3.setTransform(13.8,-106.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#074192").s().p("AgPgSIAfASIgfATg");
	this.shape_4.setTransform(68.2,-97.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#074192").s().p("AgQABIAggTIAAAlg");
	this.shape_5.setTransform(51.2,-97.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#074192").p("AkzAAIJoAA");
	this.shape_6.setTransform(39,-97.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#074192").p("AAABrIAAjV");
	this.shape_7.setTransform(69.9,-95.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#074192").p("AAABrIAAjV");
	this.shape_8.setTransform(50.4,-95.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1
	this.instance = new lib.p4();
	this.instance.parent = this;
	this.instance.setTransform(-130,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p4_1, new cjs.Rectangle(-130,-120,260,240), null);


(lib.p3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p3();
	this.instance.parent = this;
	this.instance.setTransform(-130,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p3_1, new cjs.Rectangle(-130,-120,260,240), null);


(lib.p2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p2();
	this.instance.parent = this;
	this.instance.setTransform(-130,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2_1, new cjs.Rectangle(-130,-120,260,240), null);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_316 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_graphics_317 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_graphics_318 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_graphics_319 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_graphics_320 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_graphics_321 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_graphics_322 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_graphics_323 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_graphics_324 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_graphics_387 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_graphics_388 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_graphics_389 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_graphics_390 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_graphics_391 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_graphics_392 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_graphics_393 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_graphics_394 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_graphics_395 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(316).to({graphics:mask_graphics_316,x:250.5,y:63}).wait(1).to({graphics:mask_graphics_317,x:154.4,y:63}).wait(1).to({graphics:mask_graphics_318,x:71.1,y:63}).wait(1).to({graphics:mask_graphics_319,x:0.7,y:63}).wait(1).to({graphics:mask_graphics_320,x:-57,y:63}).wait(1).to({graphics:mask_graphics_321,x:-101.8,y:63}).wait(1).to({graphics:mask_graphics_322,x:-133.9,y:63}).wait(1).to({graphics:mask_graphics_323,x:-153.1,y:63}).wait(1).to({graphics:mask_graphics_324,x:-159.5,y:63}).wait(1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_graphics_387,x:77.7,y:67}).wait(1).to({graphics:mask_graphics_388,x:-20.7,y:67}).wait(1).to({graphics:mask_graphics_389,x:-106,y:67}).wait(1).to({graphics:mask_graphics_390,x:-178.2,y:67}).wait(1).to({graphics:mask_graphics_391,x:-237.3,y:67}).wait(1).to({graphics:mask_graphics_392,x:-283.2,y:67}).wait(1).to({graphics:mask_graphics_393,x:-316.1,y:67}).wait(1).to({graphics:mask_graphics_394,x:-335.7,y:67}).wait(1).to({graphics:mask_graphics_395,x:-342.3,y:67}).wait(1));

	// t1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5FB0D3").s().p("AgSA3QgKgFgFgFQgFgHgEgIQgDgIAAgLIAAhEIAQAAIAABEQABAFACAJQACAFADAFQAEAEAFACQAHADAFAAQAHAAAFgDQAHgCADgEQAFgGABgEQACgGgBgIIAAhEIARAAIAABEQAAAKgDAJQgEAJgFAGQgFAFgJAFQgJADgLAAQgKAAgIgDg");
	this.shape.setTransform(45.9,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5FB0D3").s().p("AAcA5QgFAAgBgDIgcgoIgDgDIgFgBIgLAAIAAAvIgRAAIAAhxIAhAAQAJAAAJACQAIADAFADQAFAEADAHQADAGAAAHQAAAEgCAHQgDAGgDAEIgIAGQgFADgHABIAFAFIAhAtgAgZgBIAQAAQAHAAADgCQAFgBAEgDQAEgEABgDQABgEAAgFQAAgKgGgFQgGgFgNAAIgQAAg");
	this.shape_1.setTransform(35.7,19.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5FB0D3").s().p("AgDAKIgEgDIgBgDIgBgEIABgDIABgDIAEgCIADgCIAEACIAEACIABADIABADIgBAEIgBADIgEADIgEABg");
	this.shape_2.setTransform(28.1,24.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5FB0D3").s().p("AgHA5IAAgtIgqhEIAOAAIAEABIAbAuIAEAKIAFgKIAZgrIACgDIADgBIAPAAIgqBEIAAAtg");
	this.shape_3.setTransform(22.5,19.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5FB0D3").s().p("AgxA5IAAhxIArAAQALAAALAEQALAEAHAIQAIAIAEAKQAEAKAAAMQAAANgEAKQgEALgIAIQgHAGgLAFQgLAEgLAAgAggAsIAaAAQAIAAAIgDQAGgDAGgGQAFgFADgIQADgIAAgLQAAgJgDgIQgDgKgFgEQgFgGgHgDQgIgDgIAAIgaAAg");
	this.shape_4.setTransform(12.4,19.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5FB0D3").s().p("AAmA5IgDAAIgDgDIhAhTIAAAEIABAEIAABOIgPAAIAAhxIAJAAIADAAIACADIBBBTIgBhWIAPAAIAABxg");
	this.shape_5.setTransform(-0.1,19.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5FB0D3").s().p("AApA5IgEgBIgCgDIgKgaIgyAAIgKAaIgCADIgDABIgNAAIAthxIAQAAIAuBxgAgBgiIgTAxIApAAIgVg4g");
	this.shape_6.setTransform(-11.6,19.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5FB0D3").s().p("AgPA2QgLgFgGgHQgGgGgGgMQgDgLAAgNQAAgNAEgKQAEgLAHgHQAIgIAKgFQAKgDAMAAQAOAAAHADQAKAFAHAGIgHAJIgCAAIgDgBIgGgDIgIgEQgFgCgHAAQgIAAgHAEQgIADgEAGQgGAEgCAJQgDAIAAAKQAAALADAHQACAIAGAHQAFAFAHADQAHADAIAAIAJgBIAHgBIAGgDIAGgFIABgBIACAAIADABIAGAHQgIAJgJAEQgLAEgNABQgMgBgKgEg");
	this.shape_7.setTransform(-22.2,20);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#474A4E").s().p("AAqA5IgEgBIgDgDIgKgaIgxAAIgLAaIgCADIgDABIgNAAIAthxIAQAAIAuBxgAgCgdIgSAsIApAAIgTgxIgCgHg");
	this.shape_8.setTransform(-37.2,19.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#474A4E").s().p("AAeA5IAAgzIg7AAIAAAzIgRAAIAAhxIARAAIAAAzIA7AAIAAgzIARAAIAABxg");
	this.shape_9.setTransform(-48.7,19.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#474A4E").s().p("AAeA5IAAgxIgQAAIgEABIgDABIgDADIgEAEIgXAiQgBADgDACQgDABgDAAIgMAAIAdgpQAEgHAHgDIgMgEQgGgDgCgDIgFgJQgCgFAAgFQAAgHADgHQADgGAFgEQAFgFAIgCQAIgCAIAAIAmAAIAABxgAgCgqIgIAEIgEAGIgCAIQAAAFACAEQABADADADQADADAFABQADABAHAAIAWAAIAAgnIgWAAQgHAAgDABg");
	this.shape_10.setTransform(56.5,-1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#474A4E").s().p("AAeA5IAAhWIABgIIgDAHIg2BSQAAABgBAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgMAAIAAhxIARAAIAABWIgBAIIAGgNIAzhMIADgEQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIANAAIAABxg");
	this.shape_11.setTransform(45.8,-1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#474A4E").s().p("AAeA5IAAgzIg7AAIAAAzIgRAAIAAhxIARAAIAAAzIA7AAIAAgzIARAAIAABxg");
	this.shape_12.setTransform(33.6,-1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#474A4E").s().p("AgiA5IAAhxIBFAAIAAANIg1AAIAAAlIArAAIAAAMIgrAAIAAAmIA1AAIAAANg");
	this.shape_13.setTransform(23.2,-1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#474A4E").s().p("ABHA5QgDAAgDgBQgDgCgBgDIgdgnQAAgDgEgCQgDgCgEAAIgNAAIAAA0IgPAAIAAg0IgNAAQgEAAgDACQgDABgCAEIgcAnIgEAFQgCABgEAAIgLAAIAhgxIAGgHQADgBAEgCQgDAAgDgDIglgzIAMAAQAEAAACABIADAEIAbAnQAEAEACAAQADACADAAIALAAIAAgyIAPAAIAAAyIALAAQAEAAACgCQADgBACgDIAcgnIAEgEIAEgBIAOAAIgmAzQgDADgDAAQAFACACABIAGAHIAhAxg");
	this.shape_14.setTransform(9.9,-1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#474A4E").s().p("AgWA2QgKgEgIgIQgHgIgEgLQgFgLAAgMQAAgMAFgLQADgKAIgIQAIgIAKgFQAKgEAMAAQAOAAAJAEQALAFAHAIQAIAIAEAKQAEAKAAANQAAANgEAKQgEALgIAIQgHAIgLAEQgKAEgNAAQgLAAgLgEgAgPgoQgHACgGAHQgFAFgDAIQgDAIAAAKQAAALADAIQACAHAGAGQAGAGAHADQAHADAIAAQAJAAAIgDQAHgDAFgGQAFgFADgIQADgIAAgLQAAgKgDgIQgDgJgFgEQgFgHgHgCQgIgDgJAAQgIAAgHADg");
	this.shape_15.setTransform(-4.3,-1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#474A4E").s().p("AgwA5QAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAAAIAAgLIAFAAIAHgBQADgBADgEIAFgKIAFgTQACgJABgRIADgoIBDAAIAAByIgQAAIAAhlIgkAAIgDAmQgCARgDAKQgCALgEAIQgDAHgEAEQgDADgGACIgKACg");
	this.shape_16.setTransform(-17.3,-1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#474A4E").s().p("AAuBHIAAgcIhaAAIAAAXQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgKAAIAAgpIAMAAIAFgDIAFgIIAEgNIAEgRIAEg7IBEAAIAABkIATAAIAAAkQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAgAgNgYIgEAYQgDANgCAFQgDAIgEAEIA2AAIAAhXIgjAAIgDAhg");
	this.shape_17.setTransform(-28.8,0.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#474A4E").s().p("AgjA5IAAhxIBGAAIAAANIg1AAIAAAlIArAAIAAAMIgrAAIAAAmIA1AAIAAANg");
	this.shape_18.setTransform(-39.2,-1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#474A4E").s().p("AgmA5IAAhxIAjAAQAJAAAJACQAJAEAEAEQAGAEACAHQADAHAAAHQAAAJgDAGQgDAGgFAFQgGAEgIADQgHADgKAAIgSAAIAAAqgAgVACIASAAQAFAAAFgCQAGgBACgDQAEgCABgFQACgEAAgGQAAgFgCgEQgBgEgDgDQgEgDgFgCQgFgBgFAAIgSAAg");
	this.shape_19.setTransform(-48.5,-1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#474A4E").s().p("AAcA5IAAhkIg3AAIAABkIgRAAIAAhxIBZAAIAABxg");
	this.shape_20.setTransform(-59.7,-1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#474A4E").s().p("AgjA5IAAhxIBGAAIAAANIg1AAIAAAlIArAAIAAAMIgrAAIAAAmIA1AAIAAANg");
	this.shape_21.setTransform(85.6,-22);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#474A4E").s().p("AAeA5IAAhWIABgIIgGANIgzBMQgBABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgNAAIAAhxIARAAIAABWIgBAIIADgHIA2hSIADgEIAFgBIAMAAIAABxg");
	this.shape_22.setTransform(74.5,-22);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#474A4E").s().p("AAeA5IAAgzIg7AAIAAAzIgRAAIAAhxIARAAIAAAzIA7AAIAAgzIARAAIAABxg");
	this.shape_23.setTransform(62.3,-22);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#474A4E").s().p("AAeA5IAAgzIg7AAIAAAzIgRAAIAAhxIARAAIAAAzIA7AAIAAgzIARAAIAABxg");
	this.shape_24.setTransform(50.1,-22);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#474A4E").s().p("AgiA5IAAhxIBGAAIAAANIg2AAIAAAlIArAAIAAAMIgrAAIAAAmIA2AAIAAANg");
	this.shape_25.setTransform(39.7,-22);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#474A4E").s().p("AgPA2QgJgEgIgIQgIgIgDgLQgEgKAAgNQAAgNAEgKQAEgLAIgIQAIgIAJgDQAKgFAMAAQANABAJADQAKAEAGAHIgGAJIgDABIgDgCIgFgEIgJgDQgFgCgHABQgIAAgHACQgHAEgFAFQgFAFgDAJQgDAIAAAKQAAAKADAJQACAHAGAGQAFAGAHADQAHADAIAAIAJAAIAHgDIAGgDIAIgFIABAAIACABIAHAHQgIAJgJAEQgKAFgOgBQgMABgKgFg");
	this.shape_26.setTransform(29.6,-21.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#474A4E").s().p("AgjA5IAAhxIBGAAIAAANIg1AAIAAAlIArAAIAAAMIgrAAIAAAmIA1AAIAAANg");
	this.shape_27.setTransform(20.1,-22);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#474A4E").s().p("AgoA5IAAhxIAlAAQALAAAHACQAHACAFAEQAEACAEAHQACAFAAAIIgBAIIgEAHQgDAEgEACQgEADgFABQAMACAGAGQAHAHAAALQAAAGgDAHQgDAGgFAEQgEAEgJADQgGACgLAAgAgXAsIAXAAQAHAAAEgBIAIgEQADgDABgEIABgIQAAgIgGgGQgGgFgMAAIgXAAgAgXgFIAUAAQAFAAAFgCQADAAAEgDIAFgGQACgEAAgEQAAgKgGgFQgGgEgMAAIgUAAg");
	this.shape_28.setTransform(10.3,-22);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#474A4E").s().p("AgiA5IAAhxIBGAAIAAANIg2AAIAAAlIArAAIAAAMIgrAAIAAAmIA2AAIAAANg");
	this.shape_29.setTransform(-3.5,-22);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#474A4E").s().p("AApA5IAAhxIARAAIAABxgAg4A5IAAhxIAQAAIAAAxIAVAAQANAAAFACQAHACAGADQAEAFACAFQADAHAAAGQAAAIgDAGQgCAGgGAFQgFAFgHACQgFACgMAAgAgoAsIAVAAIALgBIAIgEQACgDACgEIABgIIgBgIQgCgDgCgDQgEgDgEgBQgEgBgHAAIgVAAg");
	this.shape_30.setTransform(-15.7,-22);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#474A4E").s().p("AAeA5IAAgzIg7AAIAAAzIgRAAIAAhxIARAAIAAAzIA7AAIAAgzIARAAIAABxg");
	this.shape_31.setTransform(-29,-22);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#474A4E").s().p("AAtBHIAAgcIhaAAIAAAXQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgKAAIAAgpIANAAIAEgDQADgDACgFIAEgNQACgGACgLIADgaIABghIBEAAIAABkIATAAIAAAkQAAABgBAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAgAgNgYIgEAYQgCAKgEAIIgFAMIA2AAIAAhXIgkAAg");
	this.shape_32.setTransform(-41.5,-20.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#474A4E").s().p("AgWA2QgLgFgHgHQgIgJgEgKQgEgJAAgOQAAgNAEgKQAEgJAIgKQAHgHALgEQAJgFANAAQAOAAAJAFQAKADAIAIQAIAKADAJQAFALAAAMQAAANgFAKQgDAKgIAJQgIAIgKAEQgKAFgNgBQgMABgKgFgAgQgpQgHAEgFAFQgFAFgDAJQgDAIAAAKQAAAKADAJQADAIAFAFQAFAGAHADQAIADAIAAQAJAAAHgDQAHgDAGgGQAGgGACgHQADgJAAgKQAAgKgDgIQgDgIgFgGQgGgFgHgEQgHgCgJAAQgIAAgIACg");
	this.shape_33.setTransform(-53.6,-21.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#474A4E").s().p("AgiA5IAAhxIBFAAIAAANIg0AAIAABkg");
	this.shape_34.setTransform(-63.2,-22);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#474A4E").s().p("AApA5IAAhxIARAAIAABxgAg5A5IAAhxIARAAIAAAxIAVAAQAMAAAHACQAGACAFADQAEADAEAHQACAGAAAHQAAAHgDAHQgDAHgFAEQgGAFgFACQgHACgLAAgAgoAsIAVAAQAHAAAEgBQAFgCADgCQACgDABgEQACgDAAgFIgCgIIgDgGQgEgDgDgBQgFgBgHAAIgVAAg");
	this.shape_35.setTransform(-75.3,-22);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#474A4E").s().p("AgoA5IAAhxIAlAAQAKAAAIACQAHACAFAEQAEACAEAHQACAFAAAIIgBAIIgEAHQgEAEgDACQgEADgFABQAMACAGAGQAHAHAAALQAAAHgDAGQgCAGgGAEQgEAEgJADQgGACgLAAgAgXAsIAXAAIALgBIAIgEQADgDABgEIABgIQAAgIgGgGQgGgFgMAAIgXAAgAgXgFIAUAAIAKgCQADAAAEgDIAFgGQACgEAAgEQAAgKgGgFQgGgEgMAAIgUAAg");
	this.shape_36.setTransform(-87.3,-22);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#408734","#32702B","#7CAD35","#387B2F"],[0,0.298,0.671,1],13.7,-9.7,-12.8,11).s().p("AjCAbIgagcIgXgdQA1A0BSgYQBggqAwgNQAlgJAdAFQAiAHAjAbQAWAQAzA+IgXgVQgkgbghgGQgegFglAIQgxANhfArQgaAIgXAAQgyAAgkglg");
	this.shape_37.setTransform(116.8,4.3,0.85,0.85);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#F2F3F3","#D3D4D6","#FFFFFF","#DEDFE0"],[0,0.31,0.671,1],14.7,-9.3,-12.8,11.5).s().p("ADXAfQgkgcghgFQgegGglAJQgwANhfAqQhSAYg2g0Igwg4QA1AyBSgYQBggqAvgNQAlgJAeAFQAhAHAkAbQANAKAZAcIAtA1QgWgZgMgIg");
	this.shape_38.setTransform(113.1,-0.7,0.85,0.85);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#A7000D","#890009","#C83F27","#860008"],[0,0.298,0.659,1],14.2,-9.3,-12.4,11.5).s().p("AjFAeIgOgPIgignQA1AvBRgYQBegqAwgMQAlgKAeAGQAhAGAjAcQAVAQA6BFQgUgXgKgIQgkgbghgGQgegFgmAJQgwAMhdAqQgcAIgYAAQgwAAgiggg");
	this.shape_39.setTransform(109,-5.5,0.85,0.85);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},316).wait(80));

	// mask - копия: 2 - копия (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_237 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_2_graphics_238 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_2_graphics_239 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_2_graphics_240 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_2_graphics_241 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_2_graphics_242 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_2_graphics_243 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_2_graphics_244 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_2_graphics_245 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_2_graphics_308 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_2_graphics_309 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_2_graphics_310 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_2_graphics_311 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_2_graphics_312 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_2_graphics_313 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_2_graphics_314 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_2_graphics_315 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_2_graphics_316 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(237).to({graphics:mask_2_graphics_237,x:255.5,y:63}).wait(1).to({graphics:mask_2_graphics_238,x:159.4,y:63}).wait(1).to({graphics:mask_2_graphics_239,x:76.1,y:63}).wait(1).to({graphics:mask_2_graphics_240,x:5.7,y:63}).wait(1).to({graphics:mask_2_graphics_241,x:-52,y:63}).wait(1).to({graphics:mask_2_graphics_242,x:-96.8,y:63}).wait(1).to({graphics:mask_2_graphics_243,x:-128.9,y:63}).wait(1).to({graphics:mask_2_graphics_244,x:-148.1,y:63}).wait(1).to({graphics:mask_2_graphics_245,x:-154.5,y:63}).wait(1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_2_graphics_308,x:82.7,y:67}).wait(1).to({graphics:mask_2_graphics_309,x:-15.7,y:67}).wait(1).to({graphics:mask_2_graphics_310,x:-101.1,y:67}).wait(1).to({graphics:mask_2_graphics_311,x:-173.2,y:67}).wait(1).to({graphics:mask_2_graphics_312,x:-232.3,y:67}).wait(1).to({graphics:mask_2_graphics_313,x:-278.2,y:67}).wait(1).to({graphics:mask_2_graphics_314,x:-311,y:67}).wait(1).to({graphics:mask_2_graphics_315,x:-330.7,y:67}).wait(1).to({graphics:mask_2_graphics_316,x:-337.3,y:67}).wait(80));

	// t4
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#19B7E4").s().p("AgiA5IAAhxIBFAAIAAANIg1AAIAAAlIArAAIAAAMIgrAAIAAAmIA1AAIAAANg");
	this.shape_40.setTransform(41.7,9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#19B7E4").s().p("AAeA5IAAgzIg7AAIAAAzIgRAAIAAhxIARAAIAAAzIA7AAIAAgzIARAAIAABxg");
	this.shape_41.setTransform(30.6,9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#19B7E4").s().p("AAeA5IAAgzIg7AAIAAAzIgRAAIAAhxIARAAIAAAzIA7AAIAAgzIARAAIAABxg");
	this.shape_42.setTransform(18.4,9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#19B7E4").s().p("AgWA2QgLgEgHgIQgGgGgGgNQgEgLAAgMQAAgLAEgLQAFgMAHgHQAHgIALgFQALgDALAAQAMAAALADQAKAFAIAIQAIAIADALQAFAKAAAMQAAANgFAKQgEALgHAIQgIAIgKAEQgKAEgNAAQgMAAgKgEgAgQgoQgHADgFAGQgFAEgDAJQgDAJAAAJQAAALADAHQADAJAFAFQAFAGAHADQAIADAIAAQAJAAAHgDQAHgCAGgHQAGgGACgIQADgHAAgLQAAgJgDgJQgCgIgGgFQgGgHgHgCQgHgDgJAAQgIAAgIADg");
	this.shape_43.setTransform(5.9,9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#19B7E4").s().p("AgwA5QgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAgKIAFAAIAGgBQAEgCACgDQAEgFACgGQADgKABgIQADgMABgPIACgnIBEAAIAABxIgQAAIAAhkIgkAAQgBAWgCAQIgFAaQgCALgEAIQgEAIgDAEQgEAEgFABQgEACgGAAg");
	this.shape_44.setTransform(-7,9.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#19B7E4").s().p("AgWA2QgKgEgIgIQgIgIgEgLQgDgJAAgOQAAgNADgJQAEgLAIgIQAHgIALgFQALgDALAAQAMAAALADQALAFAHAIQAIAIAEALQADAJAAANQAAAOgDAJQgFALgHAIQgIAIgKAEQgLAEgMAAQgLAAgLgEgAgQgoQgHACgFAHQgEAEgEAJQgDAJAAAJQAAALADAHQADAJAFAFQAGAHAGACQAIADAIAAQAJAAAIgDQAGgCAGgHQAFgFADgJQADgHAAgLQAAgJgDgJQgEgJgEgEQgGgHgGgCQgIgDgJAAQgIAAgIADg");
	this.shape_45.setTransform(-18.2,9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#19B7E4").s().p("AAfA5IgEgBIgfgtQgDgEgCAAQgCgCgEAAIgOAAIAAA0IgQAAIAAhxIAQAAIAAAyIAMAAIAGgBIAFgFIAcgoIADgDQABAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAIAOAAIgiAvQgDAFgGACQAEACACABIAGAHIAiAxg");
	this.shape_46.setTransform(-28.8,9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#19B7E4").s().p("AgoA5IAAhxIAlAAQAIAAAKACQAHACAFAEQAEACAEAHQACAGAAAHIgBAIIgEAHIgHAGIgJAEQAMACAGAGQAHAHAAALQAAAGgDAHQgDAGgFAEQgEAEgJADQgGACgLAAgAgXAsIAXAAQAHAAAEgBIAIgEQADgDABgEIABgIQAAgJgGgEQgFgFgNAAIgXAAgAgXgFIAegBIAHgEIAFgGQACgEAAgEQAAgKgGgFQgGgEgMAAIgUAAg");
	this.shape_47.setTransform(-43.7,9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#4D575B").s().p("AAuA5IAAhZIgnBGIgCACIgDABIgCAAQgEAAgCgDIgohGIABAEIAABVIgOAAIAAhxIAMAAIAEAAIACADIAmBEIADAJIAEgJIAmhEIACgDIAEAAIAMAAIAABxg");
	this.shape_48.setTransform(69.6,-12);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#4D575B").s().p("AAeA5IAAhWIABgIIgGANIgzBMQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgNAAIAAhxIARAAIgBBeIADgHIADgGIA2hQIAFgBIAMAAIAABxg");
	this.shape_49.setTransform(56,-12);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#4D575B").s().p("AhHA5IAAhxIARAAIAABkIAvAAIAAhkIAPAAIAABkIAvAAIAAhkIARAAIAABxg");
	this.shape_50.setTransform(41.3,-12);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#4D575B").s().p("AgaA5QgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIAAgKIAFAAIAEgBQABAAAAAAQABAAAAAAQABAAAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAgBQACgBACgEIAFgLIguhQIAPAAIAEABIACADIAbAyIAEALIACgGIAag3IACgDQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAIANAAIguBjIgEAIIgGAEIgGADIgHABg");
	this.shape_51.setTransform(27.7,-11.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#4D575B").s().p("AgPA2QgJgEgIgIQgIgIgDgLQgEgKAAgNQAAgMAEgLQAEgJAIgJQAHgIALgEQAKgFALAAQANAAAJAFQAKAEAGAGIgFAIIgCABIgCABIgDgCIgGgEIgIgDQgFgCgHABQgIAAgHACQgGAEgGAFQgEAFgEAJQgDAIAAAKQAAAKADAJQADAIAGAFQADAGAIADQAHADAIAAIAJAAIAHgCIAHgEIAHgFIABAAIADABIAGAHQgHAJgKAEQgJAEgPAAQgMAAgKgEg");
	this.shape_52.setTransform(17.6,-11.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#4D575B").s().p("AAeA5IAAhWIABgIIgGANIgzBMQgBABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgNAAIAAhxIARAAIAABWIgBAIIADgHIA2hSIADgEQABAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAIANAAIAABxg");
	this.shape_53.setTransform(1.9,-12);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#4D575B").s().p("AAuA5IAAhVIAAgEIgnBGIgCACIgDABIgCAAQgEAAgCgDIgnhGIAAAEIABAEIAABRIgPAAIAAhxIAMAAIAEAAIACADIAmBEIADAJIAEgJIAmhEIADgDIACAAIANAAIAABxg");
	this.shape_54.setTransform(-15.7,-12);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#4D575B").s().p("AgiA5IAAhxIBFAAIAAANIg1AAIAAAlIArAAIAAAMIgrAAIAAAmIA1AAIAAANg");
	this.shape_55.setTransform(-27.4,-12);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#4D575B").s().p("AApA5IgEgBIgBgDIgLgaIgxAAIgLAaIgCADIgEABIgMAAIAuhxIAPAAIAuBxgAgUAPIApAAIgTgxIgCgGg");
	this.shape_56.setTransform(-37.7,-12);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#4D575B").s().p("AgmA5IAAhxIAjAAQAJAAAJACQAIADAFAFQAFAEADAHQADAHAAAIQAAAIgDAGQgCAGgGAFQgFAFgJACQgIADgJAAIgSAAIAAAqgAgVACIASAAIAKgCQAEAAAFgEIAFgHQABgEAAgFQAAgGgBgEQgCgEgDgDQgDgDgGgCQgEgBgGAAIgSAAg");
	this.shape_57.setTransform(-46.7,-12);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#4D575B").s().p("AAeA5IAAhWIABgIIgDAHIg2BSQAAABgBAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgMAAIAAhxIARAAIAABWIgBAIIAGgNIAzhMIADgEQABAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAIANAAIAABxg");
	this.shape_58.setTransform(-58.1,-12);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#4D575B").s().p("AgIA5IAAhjIgkAAIAAgOIBZAAIAAAOIglAAIAABjg");
	this.shape_59.setTransform(-68.9,-12);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#4D575B").s().p("AgPA2QgKgFgHgHQgHgHgEgMQgEgJAAgOQAAgLAEgMQADgJAIgJQAIgIAKgEQALgFALAAQANAAAJAFQAKAEAGAGIgFAIIgCABIgBABIgEgCIgFgEIgJgDQgFgCgHABQgIAAgHACQgHAEgGAFQgEAGgEAIQgCAJAAAJQAAAKADAJQADAJAFAEQAEAGAJADQAGADAIAAIAIAAIAIgCIAGgEIAHgEIABgBIABAAIACABIAHAHQgHAIgKAFQgLAEgOAAQgLAAgKgEg");
	this.shape_60.setTransform(-78.8,-11.9);

	var maskedShapeInstanceList = [this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},237).to({state:[]},80).wait(79));

	// mask - копия: 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_158 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_3_graphics_159 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_3_graphics_160 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_3_graphics_161 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_3_graphics_162 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_3_graphics_163 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_3_graphics_164 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_3_graphics_165 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_3_graphics_166 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_3_graphics_229 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_3_graphics_230 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_3_graphics_231 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_3_graphics_232 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_3_graphics_233 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_3_graphics_234 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_3_graphics_235 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_3_graphics_236 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_3_graphics_237 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(158).to({graphics:mask_3_graphics_158,x:250.5,y:63}).wait(1).to({graphics:mask_3_graphics_159,x:154.4,y:63}).wait(1).to({graphics:mask_3_graphics_160,x:71.1,y:63}).wait(1).to({graphics:mask_3_graphics_161,x:0.7,y:63}).wait(1).to({graphics:mask_3_graphics_162,x:-57,y:63}).wait(1).to({graphics:mask_3_graphics_163,x:-101.8,y:63}).wait(1).to({graphics:mask_3_graphics_164,x:-133.9,y:63}).wait(1).to({graphics:mask_3_graphics_165,x:-153.1,y:63}).wait(1).to({graphics:mask_3_graphics_166,x:-159.5,y:63}).wait(1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_3_graphics_229,x:82.7,y:67}).wait(1).to({graphics:mask_3_graphics_230,x:-15.7,y:67}).wait(1).to({graphics:mask_3_graphics_231,x:-101.1,y:67}).wait(1).to({graphics:mask_3_graphics_232,x:-173.2,y:67}).wait(1).to({graphics:mask_3_graphics_233,x:-232.3,y:67}).wait(1).to({graphics:mask_3_graphics_234,x:-278.2,y:67}).wait(1).to({graphics:mask_3_graphics_235,x:-311,y:67}).wait(1).to({graphics:mask_3_graphics_236,x:-330.7,y:67}).wait(1).to({graphics:mask_3_graphics_237,x:-337.3,y:67}).wait(159));

	// t3
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#19B7E4").s().p("AApA5IgDgBIgCgDIgLgbIgxAAIgLAbQAAABAAAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgMAAIAthxIAQAAIAuBxgAgUAPIApAAIgTgyIgCgGg");
	this.shape_61.setTransform(57.6,20.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#19B7E4").s().p("AgoA5IAAhxIAlAAQALAAAHACQAIACAEAEQAGAEACAFQACAFAAAIIgBAIIgEAHQgDAEgEACQgEADgFABQAMACAGAGQAHAHAAAKQAAAHgDAHQgDAGgFAEQgGAFgHACQgIACgJAAgAgXAsIAXAAQAHAAAEgBQAFgCADgDQACgCACgEQACgDAAgFQAAgIgHgGQgFgFgNAAIgXAAgAgXgFIAUAAQAFAAAFgCQAFgBACgDQAEgCABgEQACgDAAgEQAAgKgGgFQgGgEgMAAIgUAAg");
	this.shape_62.setTransform(47.4,20.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#19B7E4").s().p("AgHA5IAAhkIglAAIAAgNIBZAAIAAANIglAAIAABkg");
	this.shape_63.setTransform(37.2,20.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#19B7E4").s().p("AgPA2QgLgFgGgGQgHgJgEgKQgEgMAAgMQAAgMAEgKQAFgMAGgHQAIgIAKgEQALgFALABQALAAALADQAHADAJAIIgFAIIgCABIgCAAIgJgEIgIgEQgEgBgIAAQgIAAgHADQgGACgGAHQgGAHgCAGQgDAJAAAJQAAALADAIQADAIAFAGQAGAGAGADQAHACAIAAIAJAAIAHgCIAGgDIAGgEIABgBIACgBIADABIAGAIQgGAHgLAFQgKAFgOAAQgLAAgLgFg");
	this.shape_64.setTransform(27.4,20.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#19B7E4").s().p("AAeA5IAAg0Ig7AAIAAA0IgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_65.setTransform(15.7,20.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#19B7E4").s().p("AApA5IgDgBIgCgDIgKgbIgzAAIgJAbIgDADQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgMAAIAuhxIAQAAIAtBxgAgUAPIApAAIgSgtIgDgLg");
	this.shape_66.setTransform(4.2,20.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#19B7E4").s().p("AgmA5IAAhxIAjAAQALAAAHACQAIACAFAFQAFAEADAIQADAHAAAHQAAAIgDAHQgDAGgFAFQgFAEgJADQgIADgJAAIgSAAIAAAqgAgVACIASAAQAGAAAEgCQAFgBAEgDQAEgDABgEQABgFAAgFQAAgFgBgEQgCgEgDgDQgDgDgFgCQgFgBgGAAIgSAAg");
	this.shape_67.setTransform(-4.8,20.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#19B7E4").s().p("AgHA5IAAhkIglAAIAAgNIBZAAIAAANIgkAAIAABkg");
	this.shape_68.setTransform(-14.8,20.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#19B7E4").s().p("AgPA2QgJgEgIgHQgIgKgDgJQgEgMAAgMQAAgMAEgKQAEgLAIgIQAGgIALgEQALgFALABQALAAALADQAJADAHAIIgFAIIgBABIgDAAIgJgEQgCgCgGgCQgEgBgIAAQgIAAgHADQgGACgGAHQgFAFgDAIQgDAJAAAJQAAALADAIQADAHAFAHQAFAFAHAEQAHACAIAAIAJAAIAHgCIAGgDIAIgFIACgBIACABIAGAIQgHAHgKAFQgKAFgOAAQgLAAgLgFg");
	this.shape_69.setTransform(-24.6,20.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#19B7E4").s().p("AgWA2QgLgEgHgIQgIgIgDgKQgFgLAAgNQAAgMAFgKQAEgLAHgIQAIgIAKgEQAKgFAMABQANgBAKAFQALAEAHAIQAHAGAFANQAEAKAAAMQAAANgEALQgFALgHAHQgHAIgLAEQgLAFgMAAQgLAAgLgFgAgPgoQgHACgGAHQgGAHgCAGQgDAJAAAJQAAAKADAIQADAJAFAGQAFAFAIADQAHADAIAAQAKAAAHgDQAIgDAEgFQAFgFADgKQADgHAAgLQAAgKgDgIQgDgIgFgFQgGgHgGgCQgIgDgJAAQgIAAgHADg");
	this.shape_70.setTransform(-36.6,20.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#19B7E4").s().p("AgmA5IAAhxIAiAAQAMAAAHACQAHACAGAFQAGAFACAHQADAHAAAHQAAAJgDAGQgEAGgFAFQgFAEgIADQgJADgJAAIgRAAIAAAqgAgVACIARAAQAHAAAEgCQAFgBADgDQAEgCABgFIACgKQAAgFgCgEQgBgEgEgDQgCgDgGgCQgFgBgGAAIgRAAg");
	this.shape_71.setTransform(-47.3,20.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#19B7E4").s().p("AAcA5IAAhkIg3AAIAABkIgRAAIAAhxIBYAAIAABxg");
	this.shape_72.setTransform(-58.5,20.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#19B7E4").s().p("AAeA5IAAgxIgQAAIgEABQAAAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAIgDADIgbAmIgEAFQgCABgEAAIgNAAIAdgpQAGgIAGgDQgGAAgGgEQgFgBgDgEQgEgEgBgFQgCgEAAgHQAAgGADgHQACgGAGgEQAEgEAIgDQAHgCAKAAIAmAAIAABxgAgCgqIgIAEQgDACgBAEIgCAIQAAAFACAEQAAADAEADQACACAGACQADABAHAAIAWAAIAAgnIgWAAQgHAAgDABg");
	this.shape_73.setTransform(41.5,-0.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#19B7E4").s().p("AAeA5IAAhPIABgPIgGANIgzBMIgDADQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgNAAIAAhxIARAAIgBBeIADgHIADgGIAzhMIADgEIAFgBIAMAAIAABxg");
	this.shape_74.setTransform(30.8,-0.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#19B7E4").s().p("AAuA5IAAhVIAAgEIgmBFIgDADIgEABIgBAAQgEAAgCgEIgnhFIABAEIAABVIgPAAIAAhxIAQAAIACACIAqBNIADgJIAmhEIADgCIAPAAIAABxg");
	this.shape_75.setTransform(17.3,-0.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#19B7E4").s().p("AgWA2QgKgEgIgIQgHgHgFgMQgEgLAAgMQAAgLAEgLQAFgMAHgHQAIgIAKgEQAKgEAMAAQANAAAKAEQALAFAHAHQAHAHAFAMQAEALAAALQAAAMgEALQgFAMgHAHQgHAIgLAEQgKAEgNABQgMgBgKgEgAgPgoQgIADgFAGQgFAFgDAIQgDAIAAAKQAAAMADAGQADAKAFAEQAEAFAJAEQAGAEAJgBQAKABAGgEQAJgEAEgFQAFgEADgKQADgIAAgKQAAgJgDgJQgDgIgFgFQgFgGgIgDQgGgDgKAAQgIAAgHADg");
	this.shape_76.setTransform(3.4,-0.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#19B7E4").s().p("AAeA5IAAg0Ig7AAIAAA0IgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_77.setTransform(-9.1,-0.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#19B7E4").s().p("AgWA2QgLgEgHgIQgHgHgFgMQgEgLAAgMQAAgLAEgLQAGgMAGgHQAHgHALgFQAKgEAMAAQANAAAKAEQALAFAHAHQAHAIAEALQAFAKAAAMQAAANgFAKQgDALgIAIQgHAIgLAEQgKAEgNABQgMgBgKgEgAgQgoQgHADgFAGQgFAFgDAIQgDAJAAAJQAAALADAHQADAKAFAEQAEAFAIAEQAHAEAJgBQAJABAHgEQAIgDAFgGQAGgFACgJQADgHAAgLQAAgJgDgJQgCgHgGgGQgGgHgHgCQgHgDgJAAQgIAAgIADg");
	this.shape_78.setTransform(-21.6,-0.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#19B7E4").s().p("AAgA5QgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAIgfgtIgFgFQgCgBgEAAIgOAAIAAA0IgQAAIAAhxIAQAAIAAAxIAPAAIADgBIADgBIAegrQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAIAEgBIAOAAIgiAuQgDAGgGACQACABAEACIAGAHIAiAxg");
	this.shape_79.setTransform(-32.2,-0.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#19B7E4").s().p("AgeA2QgLgFgGgHIAGgIIADgBIABAAIACABIAFAFIAHADIAHACIAJAAQAHAAAHgCQAGgDAFgFQAGgFADgHQAEgIAAgJIg4AAIAAgLIA4AAIgFgQQgCgHgGgEQgFgFgGgCQgGgDgIAAQgHAAgFACIgIACIgGAEQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAIgBgBIgCgBIgFgIQAHgGAJgFQALgDALAAQAMAAAJAEQALAEAIAIQAGAHAFAMQAEALAAALQAAAMgEAMQgDAKgIAIQgGAIgLAEQgLAFgLAAQgNgBgLgEg");
	this.shape_80.setTransform(-43.7,-0.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#4D575B").s().p("AAeA5IAAgxIgQAAIgEABQAAAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAIgDADIgaAmIgFAFQgCABgEAAIgNAAIAdgpQAGgIAGgDQgGAAgGgEQgEgBgEgEQgEgEgBgFQgCgEAAgHQAAgGADgHQACgGAGgEQAFgFAHgCQAHgCAJAAIAoAAIAABxgAgDgqIgHAEQgEADAAADIgBAIQAAAFABAEQAAADAEADQACACAFACQAEABAGAAIAXAAIAAgnIgXAAQgGAAgEABg");
	this.shape_81.setTransform(48.9,-21);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#4D575B").s().p("AApA5IgEgBIgCgDIgKgbIgxAAIgLAbQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAIgNAAIAthxIAQAAIAuBxgAgUAOIApAAIgUgxIgBgGg");
	this.shape_82.setTransform(38.9,-21);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#4D575B").s().p("AAeA5IAAg0Ig7AAIAAA0IgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_83.setTransform(27.4,-21);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#4D575B").s().p("AgnA5IAAhxIARAAIAAAwIAWAAQAJAAAIADQAIACAEADQAGAFACAFQACAGAAAHQAAAIgCAGQgDAGgFAFQgGAFgHACQgJACgHAAgAgWAsIAWAAIAKgBQAEgCAEgDQACgBABgFQACgDAAgFQAAgEgCgEQAAgEgDgCIgIgEIgggBg");
	this.shape_84.setTransform(16.9,-21);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#4D575B").s().p("AgwA5QAAAAgBgBQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgKIAFAAIAHgBQADgCADgDQADgGACgFQACgFADgNQACgIABgTIADgnIBDAAIAAByIgQAAIAAhlIgkAAQgBAWgCAQQgCAQgDALQgCAMgEAGQgDAHgEAFQgEAEgFABQgFACgFAAg");
	this.shape_85.setTransform(5,-21);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#4D575B").s().p("AAqA5IgEgBIgCgDIgLgbIgyAAIgKAbIgCADQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgNAAIAuhxIAPAAIAuBxgAgBgjIgTAxIApAAIgRgsIgEgLg");
	this.shape_86.setTransform(-5.7,-21);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#4D575B").s().p("AAgA5QgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAIgfgtQgCgDgDgCQgCgBgEAAIgOAAIAAA0IgQAAIAAhxIAQAAIAAAxIAPAAIADgBIADgBIAegrIADgDIAEgBIAOAAIgiAuQgDAGgGACQACABAEACIAGAHIAiAxg");
	this.shape_87.setTransform(-15.9,-21);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#4D575B").s().p("AAeA5IAAhWIABgIIgGANIgzBMQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgNAAIAAhxIARAAIAABWIgBAIIADgHIA2hSQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQAAAAABAAQABAAAAAAIANAAIAABxg");
	this.shape_88.setTransform(-28,-21);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#4D575B").s().p("AAeA5IAAg0Ig7AAIAAA0IgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_89.setTransform(-40.2,-21);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#4D575B").s().p("AgaA5QgBAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAgBIAAgKIAKAAIAEgCIADgDIAJgQIguhQIAPAAIAEABIACADIAbAyIAEALIACgGIAag3IACgDQAAAAABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAOAAIguBjIgEAHQgDAEgDABIgGADIgHABg");
	this.shape_90.setTransform(-51.3,-21);

	var maskedShapeInstanceList = [this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61}]},158).to({state:[]},80).wait(158));

	// mask - копия (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_79 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_4_graphics_80 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_4_graphics_81 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_4_graphics_82 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_4_graphics_83 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_4_graphics_84 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_4_graphics_85 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_4_graphics_86 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_4_graphics_87 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_4_graphics_150 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_4_graphics_151 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_4_graphics_152 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_4_graphics_153 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_4_graphics_154 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_4_graphics_155 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_4_graphics_156 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_4_graphics_157 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_4_graphics_158 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(79).to({graphics:mask_4_graphics_79,x:250.5,y:63}).wait(1).to({graphics:mask_4_graphics_80,x:154.4,y:63}).wait(1).to({graphics:mask_4_graphics_81,x:71.1,y:63}).wait(1).to({graphics:mask_4_graphics_82,x:0.7,y:63}).wait(1).to({graphics:mask_4_graphics_83,x:-57,y:63}).wait(1).to({graphics:mask_4_graphics_84,x:-101.8,y:63}).wait(1).to({graphics:mask_4_graphics_85,x:-133.9,y:63}).wait(1).to({graphics:mask_4_graphics_86,x:-153.1,y:63}).wait(1).to({graphics:mask_4_graphics_87,x:-159.5,y:63}).wait(1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_4_graphics_150,x:77.7,y:67}).wait(1).to({graphics:mask_4_graphics_151,x:-20.7,y:67}).wait(1).to({graphics:mask_4_graphics_152,x:-106,y:67}).wait(1).to({graphics:mask_4_graphics_153,x:-178.2,y:67}).wait(1).to({graphics:mask_4_graphics_154,x:-237.3,y:67}).wait(1).to({graphics:mask_4_graphics_155,x:-283.2,y:67}).wait(1).to({graphics:mask_4_graphics_156,x:-316.1,y:67}).wait(1).to({graphics:mask_4_graphics_157,x:-335.7,y:67}).wait(1).to({graphics:mask_4_graphics_158,x:-342.3,y:67}).wait(238));

	// t2
	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#19B7E4").s().p("AAtA5IAAhVIABgEIgnBGIgCACIgEABIgBAAQgEAAgCgDIgnhGIAAAEIAAAEIAABRIgOAAIAAhxIAMAAIADAAIADADIApBNIAEgJIAmhEIACgDIAEAAIAMAAIAABxg");
	this.shape_91.setTransform(63.7,10.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#19B7E4").s().p("AgPA2QgKgEgHgIQgHgHgEgLQgEgKAAgOQAAgLAEgMQADgKAIgJQAIgHAKgFQALgDALAAQANAAAIADQALAEAGAHIgFAHIgCACIgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIgGgDIgIgEQgEgBgIgBQgIAAgHADQgJAGgEADQgEAGgEAJQgCAJAAAIQAAAKADAIQADAKAFAFQAFAFAIAEQAGACAIABIAQgDIAGgDIAHgFIABAAIABgBIACABIAHAHQgHAIgKAFQgLAFgOAAQgLAAgKgFg");
	this.shape_92.setTransform(51.2,10.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#19B7E4").s().p("AgPA3QgIgEgGgHQgFgHgDgLQgEgKAAgQQAAgPAEgKQADgKAFgJQAGgGAIgEQAHgDAIAAQAJAAAHADQAIAEAGAGQAFAIAEALQADAKAAAPQAAAPgDALQgEALgFAHQgGAHgIAEQgIAEgIAAQgGAAgJgEgAgJgrQgFADgDAFQgDAEgDAKQgCAIAAANQAAAOACAHQADAKADAFQADAFAFADQAEABAFAAQAGAAAEgBQAFgDADgFQADgFADgKQACgJAAgMQAAgLgCgKQgDgKgDgEQgDgFgFgDQgFgCgFAAQgEAAgFACg");
	this.shape_93.setTransform(36.9,10.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#19B7E4").s().p("AANA5IAAgdIgxAAIgDgBIgCgDIgBgHIA2hJIAOAAIAABIIARAAIAAAJIgBACIgCABIgOAAIAAAdgAgaAQIAnAAIABg3g");
	this.shape_94.setTransform(27.5,10.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#19B7E4").s().p("AgHA5IAAhjIglAAIAAgOIBZAAIAAAOIglAAIAABjg");
	this.shape_95.setTransform(14.3,10.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#19B7E4").s().p("AgWA2QgLgFgHgHQgIgIgEgKQgEgKAAgOQAAgNAEgKQAEgKAIgIQAHgIALgEQAKgFAMABQANgBAKAFQAKAEAIAIQAIAIADAKQAFALAAAMQAAANgFALQgEAKgHAIQgIAHgKAFQgKAFgNAAQgMAAgKgFgAgQgpQgIAFgEAEQgFAGgDAJQgDAIAAAJQAAAKADAIQADAJAFAGQAGAFAGADQAIADAIAAQAJAAAHgDQAHgDAGgFQAGgHACgIQADgIAAgKQAAgJgDgIQgCgIgGgHQgFgEgIgFQgHgDgJAAQgIAAgIADg");
	this.shape_96.setTransform(3.7,10.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#19B7E4").s().p("AAeA5IAAgzIg7AAIAAAzIgRAAIAAhxIARAAIAAAzIA7AAIAAgzIARAAIAABxg");
	this.shape_97.setTransform(-12.9,10.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#19B7E4").s().p("AAeA5IAAhWIABgIIgGANIgzBMQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBABAAAAQAAAAgBAAQgBAAAAAAIgNAAIAAhxIARAAIAABWIgBAIIADgHIA2hSIADgDQABgBAAAAQABAAAAgBQABAAABAAQAAAAABAAIAMAAIAABxg");
	this.shape_98.setTransform(-25.1,10.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#19B7E4").s().p("AhHA5IAAhxIARAAIAABlIAvAAIAAhlIAPAAIAABlIAvAAIAAhlIARAAIAABxg");
	this.shape_99.setTransform(-39.8,10.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#19B7E4").s().p("AAqA5IgEgBQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAAAIgKgbIgzAAIgKAbIgBACIgEABIgNAAIAuhxIAPAAIAuBxgAgBgiIgTAxIApAAIgSgsIgDgLg");
	this.shape_100.setTransform(-53.8,10.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#19B7E4").s().p("AAuA5IAAhZIgnBGIgCACIgDABIgCAAQgEAAgBgDIgohGIAAAEIAABVIgOAAIAAhxIAMAAIAEAAIACADIAnBEIACAJIAFgJIAlhEIACgDIAEAAIAMAAIAABxg");
	this.shape_101.setTransform(-66.7,10.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#4D575B").s().p("AAiA5IgDAAIgfgyIAAACIgeAtIgCACIgCABIgQAAIAog5Igmg4IAQAAIADAAIABACIAdAtIAAgBIABgCIAcgqQAAAAABgBQAAAAAAgBQABAAABAAQAAAAABAAIAPAAIglA3IAnA6g");
	this.shape_102.setTransform(68.1,-10.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#4D575B").s().p("AApA5IAAhxIARAAIAABxgAg5A5IAAhxIARAAIAAAxIAVAAQAKAAAJACQAGADAFADQAFAEACAFQADAHAAAGQAAAHgDAHQgDAIgFADQgEAEgIADQgGACgLAAgAgoAsIAVAAQAHAAAEgBQAGgCACgCQABgCACgEIABgJIgBgIQgBgDgCgDQgCgCgGgCQgEgBgHAAIgVAAg");
	this.shape_103.setTransform(55.7,-10.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#4D575B").s().p("AAeA5IAAgzIg7AAIAAAzIgQAAIAAhxIAQAAIAAAzIA7AAIAAgzIAQAAIAABxg");
	this.shape_104.setTransform(42.4,-10.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#4D575B").s().p("AgmA5IAAhxIAQAAIAAAxIAWAAQAIAAAJACQAIADAFADQAEAEADAFQACAFAAAIQAAAHgCAHQgEAIgEADQgFAEgIADQgHACgJAAgAgWAsIAWAAQAFAAAFgBQAFgCACgCQADgCACgEQABgEAAgFIgBgIQgCgDgDgDQgCgCgFgCQgFgBgFAAIgWAAg");
	this.shape_105.setTransform(31.9,-10.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#4D575B").s().p("AgwA5QgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIAAgLIAFAAIAGgBQAEgBACgEQAEgFACgFQADgLABgHQADgOABgNIACgoIBEAAIAABxIgQAAIAAhkIgkAAQgBAWgCAQIgFAbIgGASQgEAJgDACQgFAFgEABQgFACgFAAg");
	this.shape_106.setTransform(20,-10.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#4D575B").s().p("AApA5IgEgBIgCgCIgKgbIgyAAIgKAbIgCACIgDABIgNAAIAthxIAQAAIAuBxgAgCgdIgSAsIApAAIgUgxIgBgGg");
	this.shape_107.setTransform(9.3,-10.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#4D575B").s().p("AgmA5IAAhxIAjAAQAJAAAJACQAIADAFAFQAFAEADAHQADAHAAAIQAAAIgDAGQgCAGgGAFQgFAFgJACQgIADgJAAIgSAAIAAAqgAgVACIASAAQAFAAAFgCQAFAAAEgEIAFgHQABgEAAgFQAAgGgBgEQgBgDgEgEQgDgDgGgCQgEgBgGAAIgSAAg");
	this.shape_108.setTransform(0.3,-10.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#4D575B").s().p("AAeA5IAAhWIABgIIgDAHIg2BSQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgMAAIAAhxIARAAIAABWIgBAIIAGgNIAzhMQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIANAAIAABxg");
	this.shape_109.setTransform(-11.1,-10.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#4D575B").s().p("AgHA5IAAhjIglAAIAAgOIBZAAIAAAOIglAAIAABjg");
	this.shape_110.setTransform(-21.9,-10.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#4D575B").s().p("AgPA2QgLgEgGgIQgHgHgEgLQgEgLAAgNQAAgLAEgMQAFgLAHgHQAHgIAKgFQALgDALAAQANAAAJADQAJAFAHAGIgFAHIgCACIgCAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIgGgDIgIgEQgEgCgIAAQgIAAgHAEQgIADgEAGQgGAFgDAIQgCAKAAAIQAAALADAHQAEAKAEAFQAGAFAGAEQAHACAIAAIAIgBIAIgBIAGgDIAGgFIABAAIACgBIADABIAGAHQgHAIgKAFQgLAEgOABQgLgBgKgEg");
	this.shape_111.setTransform(-31.8,-10.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#4D575B").s().p("AAeA5IAAgwIgQAAIgEAAIgDABIgDADIgEAEIgWAjIgFAEQgDABgDAAIgNAAIAegpQAFgHAGgDIgMgEIgIgGQgDgEgCgFQgCgEAAgGQAAgJADgFQADgGAFgEQAHgFAFgCQAJgCAIAAIAmAAIAABxgAgCgqIgIAEQgDADgBAEQgCADAAAFQAAAFACADQAAADAEADIAIAEIAgABIAAgnIgWAAIgKABg");
	this.shape_112.setTransform(-47.4,-10.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#4D575B").s().p("AgwA5QgBAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAAAIAAgLIAGAAIAHgBQADgBACgEIAGgKIAFgSIADgbIACgoIBEAAIAABxIgQAAIAAhkIgkAAIgIBBQgDAMgDAGQgEAIgDADQgEAFgFABQgFACgFAAg");
	this.shape_113.setTransform(-58.6,-10.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#4D575B").s().p("AAuBHIAAgcIhbAAIAAAXQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgKAAIAAgoIAMAAIAFgEIAEgIIAFgMIADgSIAFg7IBEAAIAABlIASAAIAAAjQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAgAgRABIgGASIgGAMIA2AAIAAhYIgkAAg");
	this.shape_114.setTransform(-70.1,-9.1);

	var maskedShapeInstanceList = [this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91}]},79).to({state:[]},80).wait(237));

	// mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_0 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_5_graphics_1 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_5_graphics_2 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_5_graphics_3 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_5_graphics_4 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_5_graphics_5 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_5_graphics_6 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_5_graphics_7 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_5_graphics_8 = new cjs.Graphics().p("ADlUAIAAgYMhC9AAAIgI15QA8AZBtAfIAAAAQDZA/D1AiIAAAAQMRBxL+jIIAAAAQLsjFJqmFIAAAAQG7kWEulFIAAAAIAAgLMA78AAAMAAAAn/gAD3Tog");
	var mask_5_graphics_71 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_5_graphics_72 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_5_graphics_73 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_5_graphics_74 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_5_graphics_75 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_5_graphics_76 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");
	var mask_5_graphics_77 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_5_graphics_78 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrsDEIAAAAQmwBxm2AOIAAAAIAAAAQhUAChTAAIAAAAQmZAAmcgpg");
	var mask_5_graphics_79 = new cjs.Graphics().p("EgheATYIAAgYMA77AAAIAAAYgA8fAwQiEgNh/gRIAAAAIAAzpMBCBAAAIAAAPQkuFCm4EVIAAAAQpqGFrtDEIAAAAQmvBxm3AOIAAAAIAAAAQhTAChTAAIAAAAQmZAAmcgpg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:mask_5_graphics_0,x:250.5,y:63}).wait(1).to({graphics:mask_5_graphics_1,x:154.4,y:63}).wait(1).to({graphics:mask_5_graphics_2,x:71.1,y:63}).wait(1).to({graphics:mask_5_graphics_3,x:0.7,y:63}).wait(1).to({graphics:mask_5_graphics_4,x:-57,y:63}).wait(1).to({graphics:mask_5_graphics_5,x:-101.8,y:63}).wait(1).to({graphics:mask_5_graphics_6,x:-133.9,y:63}).wait(1).to({graphics:mask_5_graphics_7,x:-153.1,y:63}).wait(1).to({graphics:mask_5_graphics_8,x:-159.5,y:63}).wait(1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_5_graphics_71,x:77.7,y:67}).wait(1).to({graphics:mask_5_graphics_72,x:-20.7,y:67}).wait(1).to({graphics:mask_5_graphics_73,x:-106,y:67}).wait(1).to({graphics:mask_5_graphics_74,x:-178.2,y:67}).wait(1).to({graphics:mask_5_graphics_75,x:-237.3,y:67}).wait(1).to({graphics:mask_5_graphics_76,x:-283.2,y:67}).wait(1).to({graphics:mask_5_graphics_77,x:-316.1,y:67}).wait(1).to({graphics:mask_5_graphics_78,x:-335.7,y:67}).wait(1).to({graphics:mask_5_graphics_79,x:-342.3,y:67}).wait(317));

	// t1
	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#19B7E4").s().p("AAgApIAAg5IABgFIgcAvIgBACIgDABIgBAAIgCgBIgCgCIgcgvIABAFIAAA5IgOAAIAAhRIANAAIADABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABIAZAnIACAJIAEgJIAXgnQABgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIADgBIANAAIAABRg");
	this.shape_115.setTransform(57.9,21.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#19B7E4").s().p("AgKAnQgHgCgFgGQgFgHgCgGQgDgIAAgKQAAgHACgJQADgIAFgFQAFgGAHgDQAHgDAIAAQAJAAAHADQAFACAGAGIgEAFIgBACIgCAAIgDgBIgDgCIgFgCIgIgBQgGAAgDACQgFACgDAEQgDAEgBAFQgCAGAAAGQAAAHACAGQACAGADADQADAEAEACQADACAFAAQAHAAACgBIAFgDIAEgDIADgBQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABIAEAFIgGAGIgHAEIgRADQgHAAgGgDg");
	this.shape_116.setTransform(48.6,21.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#19B7E4").s().p("AgPA3QgIgDgEgFQgFgFgDgHQgDgJAAgIQAAgHADgJIALgRIAcgmIADgDIAFgBIANAAIgmAyIAJgEQAEgCAFAAQAHAAAGACQAFACAGAFQAEAEADAGQADAGAAAIQAAAJgDAGQgCAHgGAFQgFAFgIADQgGADgJAAQgIAAgHgDgAgJAAIgIAFIgFAHQgBAFAAAEQAAAFABAFIAFAIQADADAEABQAEACAGAAQAFAAAEgCQAFgBADgEQADgCACgFQACgEAAgGQAAgGgCgDQgCgFgDgDIgHgEQgFgBgFAAQgFAAgEABg");
	this.shape_117.setTransform(36,19.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#19B7E4").s().p("AANA5IAAgdIgxAAIgDgBIgCgDIgBgHIA2hKIAPAAIAABJIAQAAIAAAJIAAACIgDABIgNAAIAAAdgAgaAQIAnAAIAAgyIABgFg");
	this.shape_118.setTransform(26.5,19.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#19B7E4").s().p("AAqA5QgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAIgCgDIgKgbIgyAAIgKAbQAAABAAAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAIgNAAIAthxIAQAAIAuBxgAgCgeIgSAsIApAAIgUgxIgBgGg");
	this.shape_119.setTransform(12.6,19.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#19B7E4").s().p("AAeA5IAAg0Ig7AAIAAA0IgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_120.setTransform(1.1,19.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#19B7E4").s().p("AAeA5IAAhWIABgIIgGANIgzBMIgDADQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAIgMAAIAAhxIARAAIgBBeIAGgNIAzhMIADgEQABAAAAAAQABgBAAAAQAAAAABAAQABAAAAAAIANAAIAABxg");
	this.shape_121.setTransform(-11.1,19.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#19B7E4").s().p("AhHA5IAAhxIARAAIAABkIAuAAIAAhkIAQAAIAABkIAvAAIAAhkIARAAIAABxg");
	this.shape_122.setTransform(-25.8,19.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#19B7E4").s().p("AApA5QgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAIgCgDIgKgbIgyAAIgKAbQAAABAAAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAIgNAAIAuhxIAPAAIAuBxgAgDgeIgRAsIApAAIgTgxIgCgGg");
	this.shape_123.setTransform(-39.8,19.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#19B7E4").s().p("AAuA5IAAhVIAAgEIgmBFIgDADIgDABIgCAAQgEAAgCgEIgnhFIAAAEIABAEIAABRIgPAAIAAhxIAQAAIACACIAqBNIADgJIAmhEIADgCIAPAAIAABxg");
	this.shape_124.setTransform(-52.7,19.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#19B7E4").s().p("AAeA5IAAgxIgQAAIgDABIgEABIgDADIgaAmIgFAEQgCACgEAAIgMAAIAdgpQAFgIAGgDQgGAAgGgEQgEgBgEgEQgDgEgCgFQgCgEAAgHQAAgHADgGQACgGAGgEQAFgFAIgCQAGgCAKAAIAmAAIAABxgAgCgqIgIAEQgDADgBADIgBAIIABAJQACAEACACIAIAEQADABAHAAIAWAAIAAgnIgWAAg");
	this.shape_125.setTransform(73.9,-1.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#19B7E4").s().p("AApA5QgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAIgCgDIgJgbIgzAAIgKAbQAAABAAAAQAAAAAAABQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAIgNAAIAthxIAQAAIAuBxgAgUAOIAoAAIgTgxIgBgGg");
	this.shape_126.setTransform(63.9,-1.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#19B7E4").s().p("AAeA5IAAg0Ig7AAIAAA0IgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_127.setTransform(52.4,-1.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#19B7E4").s().p("AgmA5IAAhxIAQAAIAAAwIAWAAQAJAAAIADQAJACAEADQAFAEACAGQACAFAAAHQAAAKgCAFQgDAGgFAFQgGAFgHACQgIACgIAAgAgWAsIAWAAQAGAAAEgCQAEAAAEgEQACgBACgFQABgDAAgFQAAgEgBgEQgBgEgDgCIgIgEIgKgBIgWAAg");
	this.shape_128.setTransform(41.9,-1.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#19B7E4").s().p("AgwA5QAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAgKIAFAAIAHgBQADgCACgDQAEgFACgGQACgFADgNQACgIABgTIACgnIBEAAIAAByIgQAAIAAhlIgkAAQgBAWgCAQQgCAQgDALQgCALgEAHQgDAHgEAFQgGAEgDABQgFACgFAAg");
	this.shape_129.setTransform(30,-1.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#19B7E4").s().p("AAeA5IABheIgGANIgzBMIgDADQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAIgNAAIAAhxIARAAIgBBeIADgHIADgGIAzhMIADgEIAFgBIAMAAIAABxg");
	this.shape_130.setTransform(18.8,-1.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#19B7E4").s().p("AhHA5IAAhxIARAAIAABkIAvAAIAAhkIAPAAIAABkIAvAAIAAhkIARAAIAABxg");
	this.shape_131.setTransform(4.1,-1.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#19B7E4").s().p("AgaA5QgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAgKIAJAAIAEgCIAEgDIADgFIAFgLIguhQIAPAAIAEABIACADIAbAyIAEALIAFgLIAXgyIACgDIAEgBIANAAIguBiQgCAGgCACIgFAFQgCACgFABIgHABg");
	this.shape_132.setTransform(-9.5,-1.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#19B7E4").s().p("AgPA2QgKgEgHgIQgIgJgDgJQgEgMAAgMQAAgMAEgLQAEgKAIgIQAIgJAJgDQALgFALABQALAAALAEQAKADAGAHIgFAIIgBABIgDAAIgDgBIgFgDIgJgEQgFgBgHAAQgIAAgHADQgIADgEAFQgFAGgDAIQgDAJAAAJQAAALADAIQADAIAFAGQAGAFAGAEQAHACAIAAIAJAAIAHgCIAGgDIAIgFIABgBIACABIAHAIQgIAIgJAEQgKAFgOAAQgLgBgLgEg");
	this.shape_133.setTransform(-19.7,-1.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#19B7E4").s().p("AAeA5IAAgxIgQAAIgEABIgDABIgDADIgEAEIgXAiIgEAEQgCACgEAAIgMAAIAdgpQAEgIAHgDQgGAAgGgEIgIgFQgEgFgBgEQgCgFAAgGQAAgHADgGQADgHAFgDQAFgFAIgCQAGgCAKAAIAmAAIAABxgAgCgqIgIAEQgDADgBADIgBAIIABAJQACAEACACIAIAEQADABAHAAIAWAAIAAgnIgWAAQgHAAgDABg");
	this.shape_134.setTransform(-35.3,-1.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#19B7E4").s().p("AApA5QAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIgCgDIgLgbIgxAAIgLAbIgCADQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgNAAIAuhxIAPAAIAuBxgAgBgjIgTAxIApAAIgVg3g");
	this.shape_135.setTransform(-45.3,-1.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#19B7E4").s().p("AAgA5IgFgBIgfgtQgCgEgDgBQgCgBgEAAIgOAAIAAA0IgQAAIAAhxIAQAAIAAAxIAPAAIADgBIAFgEIAcgoIADgDIAEgBIAOAAIgiAuQgEAGgFACQADABAEACIAFAHIAiAxg");
	this.shape_136.setTransform(-55.4,-1.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#19B7E4").s().p("AgXA2QgKgFgHgFIAFgIIACgCIACAAIADABIAMAHIAIACIAIAAQAMAAAGgFQAHgFAAgLIgBgIQgCgDgEgDQgCgCgFgCIgKgCIgQAAIAAgMIAPAAQAFAAAEgBQAEgBADgDQADgBABgEIACgIQAAgEgCgDQgBgDgDgCQgDgCgEgCQgEgBgFAAQgHAAgEABIgHAEIgGADIgDABIgDgBIgBgBIgEgIQAHgHAJgCQAIgDALAAQAGAAAJACQAFABAHAFQAFAEADAFQADAGgBAGQAAAIgDAHQgFAHgIAEIAIADIAHAGIADAHIABAJQAAAIgCAFQgDAHgFAFQgIAGgFABQgIADgJABQgMgBgLgEg");
	this.shape_137.setTransform(-66.3,-1.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#19B7E4").s().p("AgaA5QgBgBAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIAAgKIAKAAIAEgCIADgDIAJgQIguhQIAPAAIAEABIACADIAbAyQACAEACAHIACgGIAag3IACgDIADgBIAOAAIgvBiIgDAIIgGAFIgGADIgHABg");
	this.shape_138.setTransform(-75.5,-1.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#4D575B").s().p("AAeA5IAAgxIgQAAIgDABIgEABIgHAGIgWAjIgFAEQgCACgEAAIgNAAIAegpQAEgIAHgDQgGAAgGgEQgGgCgCgDQgEgEgBgFQgCgFABgGQAAgHACgGQAEgHAEgDQAGgFAGgCQAHgCAKAAIAmAAIAABxgAgCgqQgFABgDADQgDADgBADIgCAIQAAAFACAEIAEAGIAHAEQAFABAGAAIAWAAIAAgnIgWAAQgHAAgDABg");
	this.shape_139.setTransform(55,-22.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#4D575B").s().p("AAqA5QgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAIgCgDIgLgbIgyAAIgKAbIgCADQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgNAAIAuhxIAPAAIAuBxgAgBgjIgTAxIApAAIgSgsIgDgLg");
	this.shape_140.setTransform(45,-22.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#4D575B").s().p("AAgA5QgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAIgfgtQgCgEgDgBQgCgBgEAAIgOAAIAAA0IgQAAIAAhxIAQAAIAAAxIAMAAIAGgBIADgCIAegqQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAIAEgBIAOAAIgiAuQgDAGgGACQACABAEACIAGAHIAiAxg");
	this.shape_141.setTransform(34.9,-22.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#4D575B").s().p("AgOA2QgLgEgHgIQgHgIgEgKQgEgLAAgNQAAgMAEgKQAEgLAHgIQAIgIALgEQAKgFAMABQALAAAKADQAKAEAHAHIgGAHIgCACIgBAAIgEgBIgFgDIgIgDQgGgCgHAAQgIAAgGADQgJADgEAGQgFAFgDAIQgDAJAAAJQAAALADAIQADAIAFAGQAFAFAIAEQAGACAIAAIAJAAIAHgCIAHgDIAHgGIABAAIACABIAHAHQgHAJgKAEQgJAEgPABQgLAAgKgFg");
	this.shape_142.setTransform(23.7,-22.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#4D575B").s().p("AAeA5IAAg0Ig7AAIAAA0IgRAAIAAhxIARAAIAAAyIA7AAIAAgyIARAAIAABxg");
	this.shape_143.setTransform(12.1,-22.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#4D575B").s().p("AAeA5IAAgxIgQAAIgEABIgDABIgHAGIgWAjIgFAEQgCACgEAAIgMAAIAdgpQAEgIAHgDQgGAAgGgEIgIgFQgEgEgBgFQgCgFAAgGQAAgIADgFQADgHAFgDQAGgFAHgCQAGgCAKAAIAmAAIAABxgAgCgqQgFABgDADQgDACgBAEIgCAIQAAAFACAEIAEAGIAIAEQADABAHAAIAWAAIAAgnIgWAAQgGAAgEABg");
	this.shape_144.setTransform(-0.1,-22.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#4D575B").s().p("AgmA5IAAhxIAQAAIAAAwIAWAAQAJAAAIADQAJACAEADQAFAEACAGQACAFAAAHQAAAKgCAFQgDAGgFAFQgFAEgIADQgIACgIAAgAgWAsIAWAAIAKgCQAGgBACgDIAEgGQABgDAAgFQAAgEgBgEQgCgFgCgBQgCgCgGgCIgKgBIgWAAg");
	this.shape_145.setTransform(-9.1,-22.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#4D575B").s().p("AgwA5QAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAgKIAFAAIAHgBQADgCACgDQAEgFACgGQACgFADgNIAFhCIBEAAIAAByIgQAAIAAhlIgkAAQgBAWgCAQQgCAQgDALIgGASQgDAHgEAFQgGAEgDABQgFACgFAAg");
	this.shape_146.setTransform(-21,-22.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#4D575B").s().p("AAqA5QgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBIgKgbIgzAAIgKAbIgBADQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgNAAIAuhxIAPAAIAuBxgAAAgjIgUAxIApAAIgVg3g");
	this.shape_147.setTransform(-31.7,-22.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#4D575B").s().p("AgHA5IAAhkIglAAIAAgNIBZAAIAAANIglAAIAABkg");
	this.shape_148.setTransform(-40.7,-22.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#4D575B").s().p("AAeA5IAAhWIABgIIgGANIgzBMIgDADQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgNAAIAAhxIARAAIgBBeIADgHIADgGIAzhMIADgEIAFgBIAMAAIAABxg");
	this.shape_149.setTransform(-51.6,-22.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.lf(["#408734","#32702B","#7CAD35","#387B2F"],[0,0.298,0.671,1],13.7,-9.7,-12.8,11).s().p("AjCAbIgagcIgXgdQA1A0BSgYQBggqAwgNQAlgJAdAFQAiAHAjAbQAWAQAzA+IgXgVQgkgbghgGQgegFglAIQgxANhfArQgaAIgXAAQgyAAgkglg");
	this.shape_150.setTransform(116.8,4.3,0.85,0.85);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.lf(["#F2F3F3","#D3D4D6","#FFFFFF","#DEDFE0"],[0,0.31,0.671,1],14.7,-9.3,-12.8,11.5).s().p("ADXAfQgkgcghgFQgegGglAJQgwANhfAqQhSAYg2g0Igwg4QA1AyBSgYQBggqAvgNQAlgJAeAFQAhAHAkAbQANAKAZAcIAtA1QgWgZgMgIg");
	this.shape_151.setTransform(113.1,-0.7,0.85,0.85);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.lf(["#A7000D","#890009","#C83F27","#860008"],[0,0.298,0.659,1],14.2,-9.3,-12.4,11.5).s().p("AjFAeIgOgPIgignQA1AvBRgYQBegqAwgMQAlgKAeAGQAhAGAjAcQAVAQA6BFQgUgXgKgIQgkgbghgGQgegFgmAJQgwAMhdAqQgcAIgYAAQgwAAgiggg");
	this.shape_152.setTransform(109,-5.5,0.85,0.85);

	var maskedShapeInstanceList = [this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128,this.shape_129,this.shape_130,this.shape_131,this.shape_132,this.shape_133,this.shape_134,this.shape_135,this.shape_136,this.shape_137,this.shape_138,this.shape_139,this.shape_140,this.shape_141,this.shape_142,this.shape_143,this.shape_144,this.shape_145,this.shape_146,this.shape_147,this.shape_148,this.shape_149,this.shape_150,this.shape_151,this.shape_152];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115}]}).to({state:[]},80).wait(316));

	// Слой 3
	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("rgba(0,102,204,0)").s().p("A3bH0IAAvnMAu3AAAIAAPng");
	this.shape_153.setTransform(-3,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_153).wait(396));

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
	this.instance.setTransform(-87,-99);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1_1, new cjs.Rectangle(-87,-99,175,190), null);


(lib.pics = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// p1.jpg - копия
	this.instance = new lib.p1_1();
	this.instance.parent = this;
	this.instance.setTransform(136.5,122.2,1,1,0,0,0,130,120);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(316).to({_off:false},0).to({regX:129.9,x:130,alpha:1},5,cjs.Ease.get(1)).wait(69).to({alpha:0},5,cjs.Ease.get(1)).wait(1));

	// p4.jpg
	this.instance_1 = new lib.p4_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(130,122.2,1,1,0,0,0,129.9,120);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(237).to({_off:false},0).to({alpha:1},5,cjs.Ease.get(1)).wait(69).to({alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(79));

	// p3.jpg
	this.instance_2 = new lib.p3_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(130,122.2,1,1,0,0,0,129.9,120);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(158).to({_off:false},0).to({alpha:1},5,cjs.Ease.get(1)).wait(69).to({alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(158));

	// p2.jpg
	this.instance_3 = new lib.p2_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(130,122.2,1,1,0,0,0,129.9,120);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(79).to({_off:false},0).to({alpha:1},5,cjs.Ease.get(1)).wait(69).to({alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(237));

	// p1.jpg
	this.instance_4 = new lib.p1_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(136.5,122.2,1,1,0,0,0,130,120);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:129.9,x:130,alpha:1},5,cjs.Ease.get(1)).wait(69).to({alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(316));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.5,-96.8,175,190);


// stage content:
(lib._100pcx240 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
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
			
			
			bg.x = 0;
			bg.scaleX = wdt/400;
		
			legal.x = 5;
		
			pics.y = 120;
			text.y = 120;
			bg.y = 120;
			
		
			if (wdt<500){
				text.scaleX = 0.6;
				text.scaleY = 0.6;
				text.x = 0.2*wdt;
				
				logo.scaleX = 1;		
				logo.scaleY = 1;
				logo.x = 0.2*wdt;
				logo.y = 180;
				
				pics.x = wdt-80;
				
				
			} else if (wdt<700){
				text.scaleX = 0.8;
				text.scaleY = 0.8;
				text.x = 0.2*wdt;
				
				logo.scaleX = 1;		
				logo.scaleY = 1;
				logo.x = 0.2*wdt;
				logo.y = 180;
				
				pics.x = wdt-130;
				
			} else if (wdt<900){
				text.scaleX = 0.9;
				text.scaleY = 0.9;
				text.x = 0.16*wdt;
				
				logo.scaleX = 1.5;		
				logo.scaleY = 1.5;
				logo.x = 0.85*wdt;
				logo.y = 120;
				
				pics.x = 0.55*wdt;
			} else {
				text.scaleX = 1.3;
				text.scaleY = 1.3;
				text.x = 0.18*wdt;
				
				logo.scaleX = 2;		
				logo.scaleY = 2;
				logo.x = 0.8*wdt;
				logo.y = 120;
				
				pics.x = 0.5*wdt;
			} 
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(396));

	// legal
	this.legal = new lib.dfgdfggg();
	this.legal.parent = this;
	this.legal.setTransform(5,222.7);

	this.timeline.addTween(cjs.Tween.get(this.legal).wait(396));

	// logo
	this.logo = new lib.ClipGroup_8();
	this.logo.parent = this;
	this.logo.setTransform(543.8,-111,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(396));

	// pics
	this.pics = new lib.pics();
	this.pics.parent = this;
	this.pics.setTransform(263.6,-143.1);

	this.timeline.addTween(cjs.Tween.get(this.pics).wait(396));

	// text
	this.text = new lib.main();
	this.text.parent = this;
	this.text.setTransform(-59.7,-150.9);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(396));

	// bg
	this.bg = new lib.bg();
	this.bg.parent = this;
	this.bg.setTransform(0,120,1,1,0,0,0,0,120);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(396));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.7,-120,827.2,480);
// library properties:
lib.properties = {
	width: 400,
	height: 240,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/p1.png", id:"p1"},
		{src:"images/100pcx240_atlas_NP_.jpg", id:"100pcx240_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;