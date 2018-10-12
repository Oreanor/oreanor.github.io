(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x250_atlas_", frames: [[302,0,198,164],[0,0,300,126]]}
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



(lib.сушилкаpsd = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pic2 = function() {
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


(lib.text2b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAqQgGgCgGgHQgGgGgDgIQgDgKAAgKQAAgKADgHQADgJAFgFQAFgGAHgEQAIgCAIAAQAJAAAFACQAGACAFAGQAGAFACAHQADAHAAAKIgBAFIgDAAIg4AAQAAAIACAGQACAGAEAFQADAEAFACQAEACAGAAIAKgBIAHgDIAFgDIADgCQABAAAAABQABAAAAAAQAAAAAAAAQABABAAAAIAEAGIgGAGIgJAEIgJADIgJABQgIAAgIgEgAgOgbQgGAHgCAMIAuAAQAAgGgBgEIgFgIQgEgFgDgBQgFgBgEAAQgJAAgHAGg");
	this.shape.setTransform(104.2,-1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAUAsIAAgpIgnAAIAAApIgQAAIAAhXIAQAAIAAAjIAnAAIAAgjIAPAAIAABXg");
	this.shape_1.setTransform(95,-1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAVAsIAAgpIgpAAIAAApIgOAAIAAhXIAOAAIAAAjIApAAIAAgjIAOAAIAABXg");
	this.shape_2.setTransform(85.5,-1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQAqQgIgDgFgGQgGgHgCgHQgDgJAAgKQAAgKADgIQACgIAGgGQAFgGAIgEQAIgCAIAAQAJAAAIACQAIAEAFAGQAEAFAEAJQADAIAAAKQAAAKgDAJQgDAIgFAGQgFAGgIADQgHADgKABQgJgBgHgDgAgKgeQgFACgDAFQgDADgCAHQgBAGAAAHQAAAQAGAIQAHAJALAAQANAAAGgJQAGgIAAgQQAAgPgGgIQgGgKgNABQgEAAgGACg");
	this.shape_3.setTransform(75.9,-1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgqArIAAgKIAEAAIAGgBQACgBAEgEIAFgIQACgEADgKIADgTIADgeIA1AAIAABXIgPAAIAAhKIgbAAQgBAQgBANIgFATIgGAPQgEAFgDADIgIAEIgIABQgHAAAAgCg");
	this.shape_4.setTransform(65.6,-1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQAqQgHgDgFgGQgGgGgDgIQgDgHAAgMQAAgLADgHQADgKAGgEQAFgGAHgEQAIgCAIAAQAKAAAHACQAHADAGAHQAEAFAEAJQACAHAAALQAAAMgCAHQgDAIgFAGQgGAGgHADQgHADgKABQgJgBgHgDgAgKgeQgGADgCAEQgDADgCAHQgCAGAAAHQABAPAGAJQAGAJAMAAQANAAAGgJQAGgIAAgQQAAgPgGgIQgGgKgNABQgFAAgFACg");
	this.shape_5.setTransform(56.5,-1.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgjAtIAAhYIAOAAIAAAmIAIAAQAIAAADgGIARgcIAEgDQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAIAMAAIgWAiIgEAEIgFAEQADABADACIAFAGIAXAkIgLAAIgGgBIgEgEIgQgbQgDgIgJAAIgJAAIAAApg");
	this.shape_6.setTransform(47.9,-1.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgfAsIAAhXIAfAAQAHAAAGACQAFABAEADQAEADABAEIABAIIAAAGIgDAGIgFAFQgEADgEABQAKABAFAFQAFAFABAJQgBAFgCAGQgDAFgEADQgEADgGACQgGABgHAAgAgRAiIARAAQAJAAAFgFQAEgDAAgIIgBgFQAAgDgCgCQgDgCgDgBIgJgBIgRAAgAgRgFIAQAAIAGgBIAFgDIAEgFIACgGIgBgEIgDgFIgFgCQgEgCgEAAIgQAAg");
	this.shape_7.setTransform(34.8,-1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAiAsIAAg5IABgLIgfA3IgCAAIgCAAIgCAAIgCgDIgeg1IABAGIAAA/IgOAAIAAhXIANAAIACAAIADADIAdAxIABAFIADgJIAagtQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAgBIAEAAIAMAAIAABXg");
	this.shape_8.setTransform(20.9,-1.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgkAtIAAhYIAPAAIAAA+IAAAFIADgGIAqg8QABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAIAJAAIAABXIgPAAIAAg+IAAgFIgBAEIgCACIgCADIgmA2IgDADQAAAAAAABQAAAAgBAAQAAAAgBAAQAAABgBAAg");
	this.shape_9.setTransform(10.1,-1.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag4AsIAAhXIAOAAIAABMIAjAAIAAhMIAOAAIAABMIAjAAIAAhMIAQAAIAABXg");
	this.shape_10.setTransform(-1.7,-1.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgVA7IAPgjIgjhSIANAAIADABIACACIAXA3IABAIIACgIIAXg3QAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIADgBIAMAAIgvByIgCACQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAg");
	this.shape_11.setTransform(-13,0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgLArQgGgEgGgFQgFgHgDgIQgDgIAAgLQAAgJADgIQADgJAFgGQAFgGAHgEQAIgCAJAAQAJAAAGACQAIADAFAGIgEAGIgCABIgCAAIgCAAIgEgDIgGgDIgIgBQgGAAgEACQgGAFgCACQgCAEgDAHQgBAGAAAHQAAAJACAFQABAHAEAEQADAEAEACQAEADAGAAQAFAAAEgCIAGgDIADgDIAEgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAIAFAGIgHAGIgHAEIgJADIgJABQgHgBgHgCg");
	this.shape_12.setTransform(-21.2,-1.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgkAtIAAhYIAQAAIAAA+IgBAFIADgGIAog6IADgCIACgBIAJAAIAABXIgOAAIAAg7IAAgDIAAgFIgDAGIgoA5IgDADIgDACg");
	this.shape_13.setTransform(-34.5,-1.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAiAsIAAg/IABgFIgeA0IgBADIgDAAIgBAAIgCAAIggg4IABAMIAAA5IgOAAIAAhXIAMAAIAEAAQAAABAAAAQABAAAAABQAAAAABAAQAAABAAAAIAcAxIABAFIAEgJIAagtIADgDIACAAIANAAIAABXg");
	this.shape_14.setTransform(-49.6,-1.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgMArQgHgEgGgGQgGgHgDgIQgDgJAAgKQAAgIADgJQADgIAFgGQAFgGAHgEQAIgCAIAAQAJgBAFADQAGACAFAFQAGAGACAHQADAHAAAKIgBAFIgDAAIg4AAQABAKABAFQACAFAEAFQAFAFADABQAEACAGAAIAKgBIAHgDIAFgDIADgBIADABIAEAGIgGAGIgJAEIgJADIgJABQgIgBgHgCgAgOgbQgGAIgCALIAuAAQAAgGgBgEIgFgIQgCgEgEgCIgKgCQgJABgHAGg");
	this.shape_15.setTransform(-60,-1.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgSAsQgFgBgDgDQgDgDgCgEQgCgEAAgHQAAgFADgFQADgFAGgDQAFgDALgDQALgCANAAIAAgHQAAgKgEgGQgFgFgIAAQgEAAgEABIgLAHIgEABIgDgBIgCgCIgCgFQAHgGAIgEQAJgEAIAAQAGAAAHADQAEACAFAFQADADADAHQACAGAAAIIAAA3IgHAAIgDAAIgCgDIgCgJIgHAGIgGAEIgHADIgJABQgFAAgEgCgAABAGIgLAEQgEACgCADQgCACAAAFIABAGIADAEIAEACIAGABIAGgBIAGgCIALgJIAAgSQgKAAgIABg");
	this.shape_16.setTransform(-69,-1.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AglA8IAAh2IAJAAQADABABADIACALQAGgIAGgEQAHgEAIAAQAIAAAGADQAGADAEAFQAEAHACAIQADAJAAALQAAAJgDAIQgDAKgEAEQgEAGgIAEQgIADgHAAQgHAAgGgCQgFgDgFgFIAAAngAgLgrQgEADgHAHIAAAqQAGAGADACQAGADAFAAQAMgBAGgIQAGgJAAgPQAAgJgBgHQgCgGgDgEQgCgDgEgDIgKgCQgFABgGADg");
	this.shape_17.setTransform(-77.4,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgkAtIAAhYIAPAAIAAA+IAAAFIADgGIAqg8QABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAIAJAAIAABXIgPAAIAAg+IAAgFIgDAGIgqA8QgBAAAAABQAAAAgBAAQAAAAgBAAQAAABgBAAg");
	this.shape_18.setTransform(-87.2,-1.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgHAsIAAhLIggAAIAAgMIBPAAIAAAMIghAAIAABLg");
	this.shape_19.setTransform(-96.3,-1.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgLArQgHgEgFgFQgFgHgDgIQgDgIAAgLQAAgIADgJQADgKAFgFQAFgGAHgEQAIgCAIAAQAKAAAGACQAHADAGAGIgEAGIgCABIgCAAIgCAAIgEgDIgGgDIgIgBQgGAAgEACQgGAFgCACQgEAGgBAFQgBAGAAAHQAAAIABAGQADAHACAEQAEAEAEACQAEADAGAAQAFAAAEgCIAFgDIAEgDIADgBQABAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAIAFAGIgHAGIgHAEIgJADIgJABQgHgBgHgCg");
	this.shape_20.setTransform(-104.4,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text2b, new cjs.Rectangle(-107.9,-6,215.9,12), null);


(lib.text2a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D97D3").s().p("AAuBFQgEAAgBgCIgDgEIgKgcIg2AAIgKAcIgDAEQgCACgEAAIgTAAIA0iJIAZAAIA0CJgAgUARIApAAIgVg+g");
	this.shape.setTransform(132.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D97D3").s().p("AgwBFIAAiJIAtAAQALAAALADQAKADAFAEQAGAEADAIQACAHAAAHQAAAGgBAEQgBAFgDADIgIAHQgDADgHADQAbAFABAYQgBAIgDAIQgDAJgHAEQgGAGgIADQgKADgLAAgAgXAxIAXAAQAIAAAEgCQAFgBADgDQADgEABgDQABgEAAgEQAAgEgBgFIgFgFQgEgEgDAAIgMgBIgXAAgAgXgJIATAAQAMAAAGgEQAHgFAAgKQAAgLgGgFQgGgEgMAAIgUAAg");
	this.shape_1.setTransform(120.4,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D97D3").s().p("AgMBFIAAh0IgnAAIAAgVIBoAAIAAAVIgpAAIAAB0g");
	this.shape_2.setTransform(108.1,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D97D3").s().p("AgSBBQgMgGgIgIQgIgJgFgOQgEgNAAgPQAAgQAFgLQAEgNAJgKQAJgJAMgFQALgGAOAAQAQAAAKAGQAMAEAHAIIgIANIgCACIgDAAIgDAAIgDgCIgEgEIgFgCIgHgCIgKAAQgJAAgGACQgIAEgFAGQgGAHgCAJQgDAKAAAJQAAALADAJQADAKAGAGQAEAGAJADQAGADAIAAIAKAAIAHgCIAHgDIAGgFIACgBIACgBQAAAAABABQAAAAABAAQAAAAAAAAQABABAAAAIAKALQgHAKgNAGQgMAFgQABQgNgBgNgFg");
	this.shape_3.setTransform(96.3,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D97D3").s().p("AAfBFIAAg8Ig9AAIAAA8IgZAAIAAiJIAZAAIAAA7IA9AAIAAg7IAZAAIAACJg");
	this.shape_4.setTransform(82.6,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D97D3").s().p("AAuBFQgDAAgDgCIgCgEIgKgcIg3AAIgKAcIgCAEQgCACgEAAIgTAAIA0iJIAZAAIA0CJgAgUARIAqAAIgWg+g");
	this.shape_5.setTransform(68.7,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D97D3").s().p("AguBFIAAiJIArAAQAMAAAKADQAKAEAGAGQAGAEADAJQADAIAAAKQAAAJgDAJQgCAGgHAIQgIAGgJADQgLAEgKgBIgTAAIAAAxgAgWAAIATAAQAEAAAHAAQADgBAFgFIAFgIQACgEAAgGQAAgGgCgEIgFgIQgDgDgFgBQgFgCgGAAIgTAAg");
	this.shape_6.setTransform(56.8,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D97D3").s().p("AgLBFIAAh0IgpAAIAAgVIBpAAIAAAVIgpAAIAAB0g");
	this.shape_7.setTransform(44.7,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D97D3").s().p("AgSBBQgMgGgIgIQgIgKgFgNQgEgNAAgPQAAgQAFgLQAEgNAJgKQAJgJAMgFQALgGAPAAQAPAAAKAGQALAEAJAIIgJANIgCACIgDAAIgDAAIgHgGIgFgCIgHgCIgKAAQgIAAgHACQgIAEgFAGQgFAGgDAKQgDAIAAALQAAALADAJQADAKAGAGQAGAGAHADQAGADAJAAIAJAAIAHgCIAHgDIAGgFIACgBIACgBIAEACIAJALQgHAKgNAGQgMAFgQABQgNgBgNgFg");
	this.shape_8.setTransform(33,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D97D3").s().p("AgaBBQgNgFgJgJQgKgMgDgLQgGgMAAgQQAAgPAGgMQADgLAKgMQAIgIAOgGQALgGAPAAQAJABAKACIARAGQAGAFAHAGIAKAPQAEAIACAJQADALgBAHQAAAOgEAOQgFALgJAMQgJAJgMAFQgNAFgPABQgOgBgMgFgAgQgtQgJAFgFAFQgFAGgDAKQgDAIAAALQAAALADAJQADAKAFAFQAHAHAHADQAGADAKAAQAKAAAIgDQAHgDAFgHQAGgEADgLQADgJAAgLQAAgLgDgIQgDgKgGgGQgEgFgIgFQgIgCgKAAQgJAAgHACg");
	this.shape_9.setTransform(18.9,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D97D3").s().p("AgvBFIAAiJIArAAQANAAAKADQAKAEAGAGQAGAEADAJQADAHABALQgBAKgDAIQgDAGgGAIQgJAGgHADQgMAEgLgBIgSAAIAAAxgAgWAAIASAAQAFAAAHAAQADgBAFgFQADgDACgFQACgEgBgGQABgGgCgEQgBgEgEgEQgDgDgFgBQgGgCgGAAIgSAAg");
	this.shape_10.setTransform(5.9,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D97D3").s().p("AAdBFIAAh1Ig5AAIAAB1IgZAAIAAiJIBrAAIAACJg");
	this.shape_11.setTransform(-7.6,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D97D3").s().p("AAfBFIAAg5IgOAAIgEABQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAABgBAAIgEADIgDAEIgXAnQgCAEgEACQgEADgFAAIgTAAIAfgwQAGgKAIgEQgJgCgEgDQgGgDgDgEQgEgFgBgFQgCgIAAgFQAAgHADgJQADgGAHgHQAGgFAJgDQAKgDAKAAIAvAAIAACJgAgCgvQgEABgDAEQgEAEAAADIgCAHIACAJQAAADAEADQACADAFACQAEABAHAAIAWAAIAAgpIgWAAQgHAAgEABg");
	this.shape_12.setTransform(-31,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1D97D3").s().p("AAfBFIABhrIgDAKIg4BcIgDACIgDACIgDABIgTAAIAAiJIAZAAIgBBrIAIgSIA0hUIACgDIADgBIAEgBIASAAIAACJg");
	this.shape_13.setTransform(-43.9,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1D97D3").s().p("AAyBFIABhkIgoBOQgDAFgGAAIgDAAQgFAAgDgFIgphOIABBkIgWAAIAAiJIAVAAIADAAIABACIACACIArBSIABAGIADgGIAqhSIACgCIABgCIADAAIAVAAIAACJg");
	this.shape_14.setTransform(-60.1,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1D97D3").s().p("AgaBBQgNgFgJgKQgJgJgEgNQgFgMAAgQQAAgPAFgMQAEgMAJgLQAKgJAMgFQAMgGAOABQAJgBAKADQAJACAIAFQAHAFAGAFQAHAJADAGQAEAHACAJQACAJAAAKQAAAPgEANQgGAOgIAIQgHAJgOAGQgOAGgOgBQgOABgMgGgAgQgsQgJADgFAHQgFAGgDAIQgDAJAAALQAAALADAKQADAIAFAHQAFAGAJADQAHADAJAAQAKAAAIgDQAIgDAFgGQAFgHADgIQADgKAAgLQAAgLgDgJQgDgIgFgGQgFgGgIgEQgIgEgKAAQgJAAgHAEg");
	this.shape_15.setTransform(-76.6,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1D97D3").s().p("AAfBFIAAg8Ig+AAIAAA8IgYAAIAAiJIAYAAIAAA8IA+AAIAAg8IAZAAIAACJg");
	this.shape_16.setTransform(-91.4,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1D97D3").s().p("AgbBBQgMgFgJgKQgJgLgFgLQgEgMAAgQQAAgPAEgMQAFgLAJgMQAJgJAMgFQAOgGANABQAJgBAKADQAJACAHAFQAIAFAGAFQAGAGAEAJQAFAKABAGQADALAAAIQgBAQgFAMQgEANgJAJQgJAKgNAFQgMAGgPgBQgNABgOgGgAgRgsQgIAEgEAGQgFAFgEAJQgDAJAAALQAAALADAKQAEAJAFAGQAFAGAHADQAIADAJAAQAKAAAHgDQAJgDAFgGQAFgGADgJQADgKAAgLQAAgLgDgJQgDgJgFgFQgFgHgJgDQgHgEgKAAQgJAAgIAEg");
	this.shape_17.setTransform(-106.3,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1D97D3").s().p("AAiBFQgEAAgCgCIgEgGIgegxIgDgCIgDgBIgTAAIAAA8IgYAAIAAiJIAYAAIAAA6IANAAQADAAADgCQADgBACgDIAdgtIAEgFQACgCAEAAIAVAAIgkA3IgFAHIgHADQAEABAFADQAFAFADAFIAiA6g");
	this.shape_18.setTransform(-119.8,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1D97D3").s().p("AgjBBQgNgGgHgKIAJgLQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABIAGAEIAHAEIAHABIAJABQAIAAAGgDQAFgCAHgFQAFgFAEgJQAEgJAAgHIg8AAIAAgTIA8AAQgBgJgEgGQgDgHgFgGQgFgFgHgCQgFgCgJgBQgHABgGABIgIAEIgGADIgEACIgDgBIgCgCIgJgLQAIgIALgGQALgEAPAAQAMAAAOAEQALAGAKAJQAJAKAEAMQAFAOAAAOQAAAPgEAOQgFAMgIAJQgIAKgMAGQgMAEgOAAQgQABgMgGg");
	this.shape_19.setTransform(-133.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text2a, new cjs.Rectangle(-139.2,-7,278.5,14.1), null);


(lib.text1b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQArQgIgEgFgGQgGgGgCgIQgDgJAAgKQAAgIADgKQACgIAGgGQAFgGAIgEQAHgDAJAAQAJAAAIADQAIAEAFAGQAFAFADAJQADAJAAAJQAAALgDAIQgDAIgFAGQgFAFgIAFQgIACgJAAQgJAAgHgCgAgKgeQgGADgCADQgDAFgCAGQgBAGAAAHQAAAPAGAKQAHAIALABQANgBAGgIQAGgKAAgPQAAgOgGgKQgGgIgNgBQgFAAgFADg");
	this.shape.setTransform(94.1,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgkA8IAAh1IAJAAQAAAAABAAQABAAAAABQABAAAAAAQAAABAAABIABAKQAGgHAHgEQAIgEAHAAQAHAAAHADQAFADAFAGQAFAGACAIQACAHAAAMQgBALgCAGQgCAHgFAIQgGAGgGAEQgHADgIAAQgHAAgGgCQgFgDgFgFIAAAngAgMgrQgEADgGAHIAAAqQAEAFAFADQAGACAFAAQALAAAGgJQAHgIAAgQQAAgJgCgGQgBgHgCgDQgEgEgDgCQgEgBgFAAQgHAAgGADg");
	this.shape_1.setTransform(84.8,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGAsIAAhMIghAAIAAgLIBPAAIAAALIggAAIAABMg");
	this.shape_2.setTransform(75.6,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLArQgGgDgGgGQgFgGgDgJQgCgKgBgJQABgKACgIQACgGAFgIQAGgGAIgDQAGgDAKgBQAIAAAHADQAIAEAFAFIgFAGIgBABIgBAAIgDgBIgEgCIgFgDIgIgBQgGAAgFADQgEACgEAEQgDAFgCAGQgBAFAAAIQAAAIABAHQABAEAFAGQADAEAEACQAEACAGABQAFgBAEgBIAFgDIAFgDIACgBIADABIAFAGQgDAEgEACIgIAEIgIACIgJABQgHAAgHgCg");
	this.shape_3.setTransform(67.5,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAiAsIAAhXIAPAAIAABXgAgwAsIAAhXIAOAAIAAAiIASAAQAKAAAGACQAEACAEAEQAEADACAFQABAEAAAGQAAAGgCAFQgCAEgEAEQgEAEgFACQgGACgHAAgAgiAhIATAAIAHgBIAGgEIACgFIABgGIgBgGIgBgFIgGgDIgJgBIgSAAg");
	this.shape_4.setTransform(57.2,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPA9QgIgDgFgHQgEgGgFgMQgDgLAAgQQAAgMADgNQACgNAGgHQAEgJAJgFQAKgGAKgBIAfgDIABAIIgBAFIgEACIgZACQgHABgHADQgGADgEAGQgEAFgCAIQgDAIABAJIAEgIIAIgGQAFgDAEAAQAEgCAFAAQAJAAAGADQAIADAEAGQAEAEADAJQADAJAAAJQAAAKgDAHQgDAJgGAFQgFAGgHADQgHADgKAAQgIAAgHgDgAgJgIIgIAFIgGAJQgBAFAAAHQAAAIABAHQACAGADAEQAEAFAEACQAFACAFAAQAMAAAHgIQAGgIABgPQAAgPgHgIQgGgIgNAAQgFAAgEACg");
	this.shape_5.setTransform(46.3,-1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAWAsIAAg/IAAgEIgDAGIgoA5IgCADIgDABIgKAAIAAhXIAQAAIAAA7IgBAHIABgDIACgCIACgDIAmg3IADgCIADgBIAJAAIAABXg");
	this.shape_6.setTransform(32.1,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQAqQgHgDgGgGQgFgFgDgJQgCgJgBgKQABgIACgKQADgIAFgGQAGgGAHgDQAIgEAIAAQAKAAAHAEQAHADAGAGQAFAGADAIQADAHgBALQABAMgDAHQgDAJgFAFQgGAGgHADQgHADgKAAQgIAAgIgDgAgKgeQgFADgDAEQgDAEgCAGQgBAIAAAFQAAAPAGAJQAGAKAMgBQANABAGgKQAGgJAAgPQAAgPgGgIQgGgJgNAAQgFAAgFACg");
	this.shape_7.setTransform(19,0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAVAsIAAgpIgoAAIAAApIgQAAIAAhXIAQAAIAAAjIAoAAIAAgjIAPAAIAABXg");
	this.shape_8.setTransform(9.4,0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA2AsQgEAAgCgBIgDgEIgRgcQgEgHgIAAIgJAAIAAAoIgNAAIAAgoIgJAAQgDAAgEACQgDACgCADIgQAcIgEAEQgCABgEAAIgKAAIAWglIAFgGIAHgCIgFgDIgFgGIgWghIAMAAIAEABQAAAAABAAQAAAAAAABQABAAAAABQABAAAAABIASAcIAEAEQADACAEAAIAHAAIAAgmIANAAIAAAmIAIAAQAHAAADgGIASgcIADgDIAEgBIAMAAIgaAnIgGADQADAAAEACIAFAGIAWAlg");
	this.shape_9.setTransform(-2,0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgMAqQgIgDgFgGQgGgGgDgJQgDgJAAgKQAAgIADgJQADgIAFgGQAFgGAHgDQAIgEAIAAQAHABAHACQAGACAGAFQAEAGADAHQADAIAAAJIgBAFIgDAAIg4AAQAAAJACAGQADAHADADQADAEAFACQAGACAEAAQAGAAAEgBIAHgDIAFgDIADgCQABABAAAAQABAAAAAAQABAAAAAAQAAABAAAAIAEAGIgGAGIgJAEQgCACgHAAIgJABQgIAAgHgDgAgOgbQgGAHgBALIAtAAQAAgFgBgFIgEgIIgHgEQgFgCgFAAQgJAAgHAGg");
	this.shape_10.setTransform(-13,0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AglA8IAAh1IAJAAQABAAABAAQABAAAAABQABAAAAAAQAAABAAABIABAKQAHgIAGgDQAHgEAIAAQAIAAAGADQAGADAEAGQAEAEACAKQADAJAAAKQAAAJgDAIQgCAIgFAHQgEAGgIAEQgGADgJAAQgHAAgGgCQgFgDgFgFIAAAngAgMgrQgFADgFAHIAAAqQAEAFAFADQAGACAFAAQALAAAHgJQAGgJAAgPQAAgJgBgGQgCgGgDgEQgDgEgDgCQgFgBgFAAQgGAAgGADg");
	this.shape_11.setTransform(-22,1.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMAqQgIgDgFgGQgGgGgDgJQgDgJAAgKQAAgJADgIQACgGAGgIQAEgFAJgEQAHgEAIAAQAIABAGACQAHADAFAEQAEAGADAHQADAIAAAJIgBAFIgDAAIg4AAQAAAGACAJQACAFAEAFQADAEAFACQAGACAEAAQAGAAAEgBIAPgIQABABAAAAQABAAAAAAQABAAAAAAQAAABAAAAIAFAGIgHAGIgIAEIgKACIgJABQgIAAgHgDgAgOgbQgGAHgBALIAtAAQAAgFgBgFIgEgIIgHgEQgEgCgFAAQgKAAgHAGg");
	this.shape_12.setTransform(-31.4,0.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgPA9QgIgDgFgHQgFgGgEgMQgDgLAAgQQAAgMACgNQADgNAFgHQAFgJAKgFQAIgGALgBIAfgDIABAIIgBAFIgEACIgaACQgGABgHADQgGADgEAGQgEAFgCAIQgDAIAAAJIAFgIIAIgGQAFgDAEAAQAFgCAEAAQAJAAAHADQAGADAFAGQAEAEAEAJQACAJAAAJQAAAKgDAHQgDAJgFAFQgHAGgGADQgIADgJAAQgIAAgHgDgAgJgIIgJAFIgEAJQgCAFAAAHQAAAIACAHQABAGADAEQADAFAFACQAFACAFAAQAMAAAHgIQAHgIgBgPQABgQgHgHQgGgIgMAAQgGAAgEACg");
	this.shape_13.setTransform(-40.6,-1.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgHAsIAAhMIggAAIAAgLIBPAAIAAALIghAAIAABMg");
	this.shape_14.setTransform(-54.3,0.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAVAsIAAg7IABgIIgBADIgqA8IgDADQAAAAAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgJAAIAAhXIAOAAIAAA+IAAAEIADgFIAqg8IAEgBIAJAAIAABXg");
	this.shape_15.setTransform(-63.4,0.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag4AsIAAhXIAPAAIAABLIAjAAIAAhLIAOAAIAABLIAiAAIAAhLIAPAAIAABXg");
	this.shape_16.setTransform(-75.2,0.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgVA7IAPgjIgjhSIANAAIADABIACACIAXA3IABAHIACgHIAXg3IABgDIADAAIAMAAIgvBxIgCADQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAg");
	this.shape_17.setTransform(-86.4,1.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgLAqQgGgDgGgGQgFgFgDgJQgDgIAAgLQAAgIADgKQACgHAGgGQAFgHAHgDQAHgDAKgBQAJAAAGAEQAIADAFAFIgEAFIgCACIgCAAIgCgBIgEgCIgGgCIgIgBQgFAAgFACQgFADgDAEQgEAFgBAFQgBAGAAAHQAAAIACAHQABAGAEAEQADAEAEACQAEACAGAAQAFAAAEgBIAGgDIADgDIAEgCQAAABABAAQAAAAAAAAQABAAAAAAQAAABAAAAIAFAGQgDAEgEACIgHAEIgJACIgJABQgHAAgHgDg");
	this.shape_18.setTransform(-94.7,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text1b, new cjs.Rectangle(-98.1,-7.8,196.3,15.7), null);


(lib.text1a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D97D3").s().p("AAiAxIABg9IABgIIgcA0QgDAEgDAAIgCAAQgEAAgCgEIgcg0IABAPIAAA2IgUAAIAAhhIASAAIAFABIAEAEIAWApIAEAMIAFgMIAXgpQABgEACAAIAFgBIATAAIAABhg");
	this.shape.setTransform(130.3,1.6,0.8,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D97D3").s().p("AgNAvQgIgEgFgGQgGgHgDgJQgEgJAAgMQAAgKADgJQADgJAGgHQAFgGAJgEQAIgFALAAQALAAAIAEQAJAFAFAFIgIALIgDAAIgDgBIgEgCIgGgDIgHgBQgHAAgDADQgEABgDAFQgDAEgCAGQgBAGAAAHQAAAHABAGQACAHADAEQAEAFADABQAEADAFAAQAGAAADgCIAFgDIAEgDIAEgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABIAHAJQgEAEgEADIgJAFIgKACIgKACQgGAAgKgEg");
	this.shape_1.setTransform(121.6,1.6,0.8,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D97D3").s().p("AgSBCQgIgDgHgHQgGgHgDgIQgDgKAAgKQAAgJADgLQAEgJAIgLIAfgsIAFgEQADgCAEAAIAUAAIgqA4QADgCAEgBQAEgBAGAAQAHAAAHADQAHACAGAFQAEAFAFAHQADAIAAAKQgBALgDAHQgDAJgHAGQgFAHgJADQgKAEgJAAQgJAAgJgEgAgJACQgFABgDAEIgFAIQgCAEAAAGQABAGABAEQACAGADACQACADAFADQAEABAGAAQAFAAAEgCQAFgBADgEIAFgIQACgEAAgGQAAgHgCgEQgCgEgDgEQgDgDgEgCQgFgBgFAAQgGAAgDACg");
	this.shape_2.setTransform(110.1,0.1,0.8,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D97D3").s().p("AAOBFIAAgiIg3AAIgEgCIgCgDIgDgMIA+hWIAWAAIAABVIARAAIAAANQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgDABIgMAAIAAAigAgZARIAnAAIABg7g");
	this.shape_3.setTransform(101.4,0,0.8,0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D97D3").s().p("AAuBFQgEAAgCgCIgDgEIgJgcIg2AAIgKAcIgEAEIgEACIgUAAIA0iJIAYAAIA1CJgAgUARIApAAIgVg9g");
	this.shape_4.setTransform(88.6,0,0.8,0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D97D3").s().p("AAfBFIAAg8Ig9AAIAAA8IgZAAIAAiJIAZAAIAAA7IA9AAIAAg7IAZAAIAACJg");
	this.shape_5.setTransform(77.8,0,0.8,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D97D3").s().p("AAfBFIAAhfIABgMIgIARIg0BVIgCACIgDACIgEABIgSAAIAAiJIAZAAIgBBgIgBALIAEgKIA4hcIADgDIADgCIADAAIATAAIAACJg");
	this.shape_6.setTransform(66.5,0,0.8,0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D97D3").s().p("AhUBFIAAiJIAZAAIAAB1IAwAAIAAh1IAYAAIAAB1IAvAAIAAh1IAZAAIAACJg");
	this.shape_7.setTransform(52.8,0,0.8,0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D97D3").s().p("AAuBFQgDAAgDgCIgCgEIgKgcIg3AAIgKAcIgDAEQgBACgEAAIgTAAIA0iJIAZAAIA0CJgAgUARIApAAIgVg9g");
	this.shape_8.setTransform(39.7,0,0.8,0.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D97D3").s().p("AAzBFIAAhkIgpBOQgCAFgGAAIgDAAQgFAAgEgFIgohOIABBkIgWAAIAAiJIAWAAIACAAIABABIACADIAqBSIACAGIADgGIADgHIAnhLIABgDIADgBIACAAIAVAAIAACJg");
	this.shape_9.setTransform(27.7,0,0.8,0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D97D3").s().p("AAfBFIAAg5IgOAAIgEABQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAABgBAAIgEADIgDAFIgXAmQgCAEgEADQgEACgFAAIgTAAIAfgwQAGgKAIgEQgJgCgEgDIgJgHQgEgFgBgGQgCgEAAgIQAAgJADgHQADgHAHgFQAGgGAJgDQAJgDALAAIAvAAIAACJgAgCgvQgEACgDADQgCACgCAEQgCADAAAFQAAAFACAEQAAADAEADQADADAEABQAEACAHAAIAWAAIAAgpIgWAAQgHAAgEABg");
	this.shape_10.setTransform(10,0,0.8,0.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D97D3").s().p("AAuBFQgEAAgBgBIgDgFIgKgcIg2AAIgKAcIgDAEQgCACgEAAIgTAAIA0iJIAZAAIA0CJgAgUARIApAAIgVg9g");
	this.shape_11.setTransform(0.5,0,0.8,0.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D97D3").s().p("AAfBFIAAg9Ig+AAIAAA9IgYAAIAAiJIAYAAIAAA7IA+AAIAAg7IAZAAIAACJg");
	this.shape_12.setTransform(-10.2,0,0.8,0.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1D97D3").s().p("AgvBFIAAiJIAZAAIAAA5IAWAAQAMAAAJADQAKADAGAFQAFAFADAGQACAIABAHQAAAKgDAHQgFAJgFAFQgHAGgIADQgKADgKAAgAgWAxIAWAAQAGAAAFgBQAEgCADgDQACgDACgEIABgIIgBgIQgCgEgCgCIgHgFQgFgBgGAAIgWAAg");
	this.shape_13.setTransform(-20,0,0.8,0.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1D97D3").s().p("Ag5BEQgBAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgQIAMgBIAFgCIAEgGIAFgJIAEgPQACgHABgNIAFhBIBTAAIAACJIgZAAIAAh1IgkAAQAAAVgDAYIgFAfQgEAOgEAIQgFAJgEAEQgFAEgGACQgEACgIAAQgGAAgDgCg");
	this.shape_14.setTransform(-31.1,0.1,0.8,0.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1D97D3").s().p("AAfBFIAAhgIABgLIgIASIg0BUIgCADIgDABIgEABIgSAAIAAiJIAYAAIAABfIgBAMIAJgSIA0hUIACgCIADgCIAEgBIASAAIAACJg");
	this.shape_15.setTransform(-41.6,0,0.8,0.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1D97D3").s().p("AhUBFIAAiJIAZAAIAAB1IAvAAIAAh1IAYAAIAAB1IAwAAIAAh1IAZAAIAACJg");
	this.shape_16.setTransform(-55.3,0,0.8,0.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1D97D3").s().p("AggBEQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIAAgQIAIAAIAEgBIAEgBIAEgDIADgGIAGgLIg2hgIAXAAQAEAAACACIADAEIAaAzQACAGADAJIADgHIAag7IADgEQACgCADAAIAVAAIg2B2IgGAKIgGAHQgEACgEABIgJABQgHAAgDgCg");
	this.shape_17.setTransform(-68,0.1,0.8,0.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1D97D3").s().p("AgSBBQgNgGgHgIQgIgKgFgNQgEgNAAgPQAAgNAFgPQAEgMAJgKQAKgKALgEQAMgFAOgBQAPABAKAFQALAEAJAIIgJANIgCABIgDABIgDgBIgHgFIgFgCIgHgCIgJAAQgJAAgHACQgHAEgGAGQgFAGgDAKQgDAJAAAKQAAAMADAJQAFAKAEAFQAFAGAIADQAGAEAJAAIAJgBIAHgCIANgHIACgCIACgBQABAAAAABQABAAAAAAQABAAAAAAQAAABABAAIAJALQgHAKgNAGQgMAFgQAAQgNAAgNgFg");
	this.shape_18.setTransform(-77.4,0,0.8,0.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1D97D3").s().p("AAfBFIAAg5IgNAAIgFABIgEABIgDADIgEAFIgXAmQgCAEgEADQgEACgFAAIgTAAIAfgwQAGgKAIgEQgJgCgEgDIgJgHQgDgDgCgIQgCgEAAgIQAAgJADgHQAEgIAGgEQAGgGAJgDQAJgDALAAIAvAAIAACJgAgCgvQgEACgDADQgCACgCAEQgCADAAAFQAAAFACAEQAAADAEADQADADAEABQAEACAHAAIAWAAIAAgpIgWAAQgHAAgEABg");
	this.shape_19.setTransform(-91.7,0,0.8,0.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1D97D3").s().p("AAtBFQgDAAgCgBIgDgFIgKgcIg1AAIgKAcIgEAEQgBACgEAAIgTAAIA0iJIAYAAIA1CJgAgUARIApAAIgVg9g");
	this.shape_20.setTransform(-101.1,0,0.8,0.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1D97D3").s().p("AAiBFQgEAAgCgCIgEgGIgbguIgDgDIgDgDIgDgBIgSAAIAAA9IgZAAIAAiJIAZAAIAAA6IAMAAQADAAAEgBQADgCABgEIAcgsIAFgFQACgCAEAAIAVAAIgkA4IgGAFIgGAEQAEABAFADIAHAJIAjA7g");
	this.shape_21.setTransform(-110.8,0,0.8,0.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1D97D3").s().p("AgOBFIgNgDIgLgGQgGgDgEgFIAIgMIACgDIADgBIAFADIAIAEIAJAFQAHACAGAAQAMAAAGgHQAIgFgBgLQAAgFgCgEIgFgGIgIgEQgEgBgGgBIgTAAIAAgTIARAAQALAAAGgFQAHgEAAgJQAAgJgGgEQgGgFgLABIgLABIgJADIgGAEIgEABIgDgBQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAAAgBgBIgFgMQAHgHALgDQALgEAMgBQAJAAAKADQAJADAFAFQAGAFAEAGQADAHAAAHQAAAKgEAIQgFAJgIAEIAIAEIAHAHIAEAIIACAJQAAALgEAHQgEAJgGAGQgEAFgLAEQgMADgJAAIgNgBg");
	this.shape_22.setTransform(-121,0,0.8,0.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1D97D3").s().p("AggBEQAAAAgBAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIAAgQIAHAAIAEgBQABAAAAAAQABAAABAAQAAAAABgBQAAAAABAAIAEgDIADgGIAFgLIg1hgIAXAAQAEAAABACIAEAEIAZAzQAEAHACAIIADgHIAag7IADgEQACgCADAAIAVAAIg2B2QgDAHgDADIgGAHQgEACgEABIgJABQgHAAgDgCg");
	this.shape_23.setTransform(-129.8,0.1,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text1a, new cjs.Rectangle(-134.6,-5.6,269.2,11.3), null);


(lib.rect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D97D3").s().p("AtqDmIAAnLIbVAAIAAHLg");
	this.shape.setTransform(0,0,1.309,0.457);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.rect, new cjs.Rectangle(-114.5,-10.5,229,21), null);


(lib.pic2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pic2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic2_1, new cjs.Rectangle(-150,-80,300,126), null);


(lib.pic1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.сушилкаpsd();
	this.instance.parent = this;
	this.instance.setTransform(-99,-82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic1, new cjs.Rectangle(-99,-82,198,164), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D97D3").s().p("AtPB5Qg9g4AkhSQAghKBlgrQBxgvC3ABQAoAAAlAEIAvAHIAUAEIgbAvQg5gQgwAAQhdAAhLAbQhnAkgQBJQgJAsAgAnQApAxBYgEQAdgBA1gTQBBgWAmgeIBdhRQAJgHAJgEQAIgDAKgCIBsAAIAfCJIA/iIIBtAAIBABoIAuhoIBkAAIhYC/IhmAAIhChuIgyBuIg/AAIAAABIh2AAIgFgiIhsAAIgkAgIhGAAQhSAdhrAAQiaAAhDg8gAkiBRIA/gBIgFg2gAI4CrIBAhAIhAiRIBjAAIAbBOIBRhPIBvAAIjHDHQgGAFgFACQgGACgRACgAFyCZIiiAAIBYi/ICiAAQBOAAAcAlQAXAdgSAmQgQAkgpAWQg2AdhVAAIgDAAgAFSBpIAdAAQAhAAAZgHQAqgNAHgfQAHgagagLQgRgIgdAAIgcAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-88.6,-18.1,177.3,36.3), null);


(lib.dfgdfggg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMAZQgFgFgBgHIAHgBQABAGADADQADACAEAAQAEAAAEgDQADgDAAgGQAAgEgDgDQgDgEgFAAIgEABIABgFIABAAQADAAAEgCQAEgDAAgFQAAgDgDgDQgDgCgDAAQgEAAgDACQgCADgBAFIgHgBQABgHAFgEQAEgEAHAAQAEAAAEACQAEACACADQACAEAAAEQAAADgCADQgCADgEACQAFABADADQADAEAAAFQAAAIgGAFQgFAFgIAAQgHAAgFgEg");
	this.shape.setTransform(146.2,6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgNAYQgEgEgBgHIAHgBQABAGADACQADADAEAAQAFAAADgEQADgEABgGQgBgGgDgDQgDgDgFAAQgEAAgCACQgDABgCACIgGgBIAFgdIAcAAIAAAHIgWAAIgDAPQAFgDAFAAQAIAAAEAFQAGAEAAAIQAAAIgFAGQgFAHgJAAQgIAAgFgFg");
	this.shape_1.setTransform(141.8,6.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_2.setTransform(137.1,6.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMAXQgFgHgBgQQABgJABgGQADgHAEgDQADgDAGAAQAEAAAEACQAEABACAEIAEAIIAAANQAAAKgBAGQgCAGgFAEQgEADgGAAQgIAAgEgGgAgHgSQgEAFABANQgBAOAEAFQADAEAEAAQAFAAADgEQAEgFgBgOQABgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_3.setTransform(132.8,6.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgKAcQABgHACgJQADgKAEgIQAEgIAFgHIgbAAIAAgGIAkAAIAAAFQgFAGgGAKQgFAIgCALQgCAHAAAIg");
	this.shape_4.setTransform(128.4,6.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMAXQgFgHgBgQQAAgJACgGQACgHAEgDQAEgDAGAAQAEAAAEACQAEABACAEIADAIIABANQAAAKgBAGQgCAGgFAEQgEADgGAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQADgFAAgOQAAgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_5.setTransform(123.9,6.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNAXQgFgHAAgPQAAgPAGgIQAFgGAJAAQAGAAAEAEQAFADABAHIgHABQgBgFgCgBQgCgDgFAAIgFABQgDADgCAEQgCAFAAAJQACgEAEgCIAHgCQAHAAAFAFQAFAEAAAJQAAAFgCAFQgDAEgEADQgEACgFAAQgIAAgGgGgAgGABQgEADAAAGIACAHQABADADACQADABACAAQAEAAAEgDQACgEAAgGQAAgGgCgDQgEgDgEAAQgFAAgCADg");
	this.shape_6.setTransform(119.5,6.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMAaQgEgEgBgHIAHgBQABAFACACQADACADAAQADAAACgBIAEgEIADgHIABgIIAAgCQgCAEgEACQgEACgDAAQgHAAgFgFQgFgEAAgJQAAgJAFgFQAFgFAIAAQAFAAAEADQAFADACAFQADAGAAAKQAAAKgDAHQgCAGgFAEQgEADgGAAQgGAAgFgDgAgHgTQgEAEAAAGQAAAGAEADQADADAEAAQAFAAADgDQADgDAAgGQAAgGgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_7.setTransform(115,6.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgKAcQABgHACgJQACgKAFgIQAEgIAFgHIgbAAIAAgGIAkAAIAAAFQgFAGgGAKQgFAIgCALQgCAHAAAIg");
	this.shape_8.setTransform(110.6,6.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgJAcQgBgHADgJQADgKAEgIQAEgIAFgHIgaAAIAAgGIAjAAIAAAFQgFAGgFAKQgGAIgCALQgCAHAAAIg");
	this.shape_9.setTransform(106.2,6.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_10.setTransform(101.5,6.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgMAXQgGgHAAgQQABgJACgGQACgHADgDQAFgDAFAAQAEAAAEACQADABADAEIADAIIACANQgBAKgCAGQgCAGgDAEQgFADgGAAQgIAAgEgGgAgHgSQgDAFgBANQABAOADAFQADAEAEAAQAFAAADgEQADgFABgOQgBgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_11.setTransform(97.2,6.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_12.setTransform(92.5,6.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_13.setTransform(85.5,6.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAIABQAFABACACQADACACADQACAEAAAEQAAAHgFAEQgFAFgMAAIgNAAIAAAYgAgNAAIANAAQAIAAADgDQADgDAAgFQAAgDgBgDQgDgCgDgBIgHgBIgNAAg");
	this.shape_14.setTransform(80,6.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgRAdIAAg5IAkAAIAAAHIgdAAIAAAyg");
	this.shape_15.setTransform(75.4,6.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_16.setTransform(69.8,6.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgMAYQgGgEAAgHIAHgBQABAGADACQADADAEAAQAEAAAEgEQADgEAAgGQAAgGgDgDQgEgDgEAAQgEAAgCACQgDABgBACIgHgBIAGgdIAbAAIAAAHIgWAAIgDAPQAFgDAFAAQAHAAAGAFQAFAEAAAIQAAAIgEAGQgGAHgJAAQgIAAgEgFg");
	this.shape_17.setTransform(62.3,6.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_18.setTransform(57.5,6.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgMAXQgGgHABgQQAAgJACgGQABgHAFgDQAEgDAFAAQAFAAADACQADABADAEIAEAIIABANQAAAKgCAGQgDAGgDAEQgEADgHAAQgHAAgFgGgAgHgSQgEAFAAANQAAAOAEAFQADAEAEAAQAFAAADgEQADgFABgOQgBgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_19.setTransform(53.3,6.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgSAdIABgFIAEgIIAJgIQAJgIADgEQADgEABgEQgBgEgCgDQgEgDgEAAQgFAAgCADQgDADAAAGIgHgBQAAgIAFgEQAFgFAHAAQAIAAAFAFQAEAEABAHIgBAHQgCADgEADQgCAEgIAGIgIAHIgCAEIAbAAIAAAHg");
	this.shape_20.setTransform(48.8,6.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_21.setTransform(44.1,6.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgNAYQgFgEAAgHIAHgBQABAGADACQADADAEAAQAFAAADgEQAEgEgBgGQABgGgEgDQgDgDgFAAQgDAAgDACQgDABgBACIgHgBIAGgdIAbAAIAAAHIgWAAIgDAPQAGgDAEAAQAHAAAFAFQAGAEAAAIQAAAIgEAGQgGAHgJAAQgHAAgGgFg");
	this.shape_22.setTransform(40,6.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_23.setTransform(35.4,6.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgMAXQgGgHAAgQQABgJACgGQACgHADgDQAFgDAFAAQAFAAADACQADABADAEIADAIIACANQgBAKgCAGQgCAGgDAEQgFADgGAAQgIAAgEgGgAgHgSQgDAFgBANQABAOADAFQADAEAEAAQAFAAADgEQADgFABgOQgBgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_24.setTransform(31.1,6.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgKAcQAAgHADgJQACgKAFgIQAEgIAGgHIgbAAIAAgGIAkAAIAAAFQgGAGgGAKQgFAIgCALQgCAHgBAIg");
	this.shape_25.setTransform(26.7,6.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgKAcQABgHACgJQADgKAEgIQAEgIAFgHIgbAAIAAgGIAkAAIAAAFQgFAGgGAKQgFAIgCALQgCAHAAAIg");
	this.shape_26.setTransform(22.2,6.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_27.setTransform(14.9,6.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_28.setTransform(9.1,6.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAQAdIAAgsIgeAsIgHAAIAAg5IAGAAIAAAtIAegtIAIAAIAAA5g");
	this.shape_29.setTransform(3.3,6.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_30.setTransform(258.2,0.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgMAYQgGgFAAgHQAAgGADgEQADgCAFgCQgEgBgDgDQgCgDAAgEQABgHAEgEQAFgEAGAAQAIAAAEAEQAEAEABAHQAAAEgCADQgCADgFABQAGACACADQADAEAAAFQAAAHgFAFQgGAFgIAAQgIAAgEgFgAgHAEQgEADABAFIABAGIAEAEIAFABQAFAAAEgDQADgDAAgFQAAgFgDgDQgEgEgFAAQgEAAgDAEgAgGgUQgCADAAADQAAAEACADQADADADAAQAEAAADgDQADgDgBgDQABgEgDgDQgDgCgEAAQgDAAgDACg");
	this.shape_31.setTransform(254.8,-2.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_32.setTransform(249.3,0.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAQAbIAAgMIgfAAIAAAMIgGAAIAAgSIADAAQAIgJAAgaIAbAAIAAAjIAFAAIAAASgAgLAJIAWAAIAAgdIgPAAQgBAUgGAJg");
	this.shape_33.setTransform(245.7,-0.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgDAHQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_34.setTransform(240.2,0.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAKAcIAAgeIgSAeIgIAAIAAgoIAHAAIAAAeIATgeIAHAAIAAAogAgGgUQgDgDgBgFIAFAAIACAEIADACIAFgCIACgEIAFAAQAAAFgDADQgEADgEgBQgFABgCgDg");
	this.shape_35.setTransform(236.9,-2.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgKAEIAAgHIAVAAIAAAHg");
	this.shape_36.setTransform(233.3,-1.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgSAdIABgFIAEgIIAJgIQAJgIADgEQADgEAAgEQAAgEgCgDQgEgDgEAAQgFAAgCADQgDADAAAGIgHgBQAAgIAFgEQAFgFAHAAQAIAAAFAFQAEAEABAHIgBAHQgCADgEADQgCAEgIAGIgHAHIgDAEIAbAAIAAAHg");
	this.shape_37.setTransform(229.7,-2.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAKAcIAAgeIgSAeIgIAAIAAgoIAHAAIAAAeIASgeIAIAAIAAAogAgHgUQgDgDAAgFIAEAAIADAEIADACIAFgCIACgEIAFAAQAAAFgDADQgEADgFgBQgDABgEgDg");
	this.shape_38.setTransform(223.2,-2.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAKAVIAAgfIgTAfIgHAAIAAgpIAHAAIAAAfIATgfIAHAAIAAApg");
	this.shape_39.setTransform(218.7,-1.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAIAVIgIgNIgDgFIgEgBIAAATIgHAAIAAgpIAHAAIAAASQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQABgBACgHIADgGIADgCIAFgBIACAAIAAAGIgCAAIgEABIgCAFIgDAGIgDACQADABAFAHIAHANg");
	this.shape_40.setTransform(215,-1.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_41.setTransform(211.1,-1.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAKAVIAAgTIgTAAIAAATIgHAAIAAgpIAHAAIAAASIATAAIAAgSIAHAAIAAApg");
	this.shape_42.setTransform(206.8,-1.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAKAVIAAgfIgSAfIgIAAIAAgpIAHAAIAAAfIATgfIAHAAIAAApg");
	this.shape_43.setTransform(202.4,-1.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAXAbIAAgMIgzAAIAAgpIAHAAIAAAjIAQAAIAAgjIAGAAIAAAjIAQAAIAAgjIAHAAIAAAjIAFAAIAAASg");
	this.shape_44.setTransform(197,-0.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgNAQQgGgFAAgLQAAgLAHgFQAFgFAHAAQAJAAAFAGQAGAGAAAJQAAAHgDAFQgDAFgEACQgFADgFAAQgIAAgFgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAFAAAEgEQADgEABgIQgBgHgDgEQgEgEgFAAQgEAAgDAEg");
	this.shape_45.setTransform(191.3,-1.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAJABQADABADACQAEACABADQACAEAAAEQAAAHgFAEQgEAFgMAAIgOAAIAAAYgAgNAAIAOAAQAHAAADgDQADgDAAgFQAAgDgCgDQgBgCgDgBIgHgBIgOAAg");
	this.shape_46.setTransform(186.5,-2.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AARAbIAAgMIggAAIAAAMIgGAAIAAgSIAEAAQAHgJAAgaIAcAAIAAAjIAEAAIAAASgAgKAJIAUAAIAAgdIgPAAQAAAUgFAJg");
	this.shape_47.setTransform(179.1,-0.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgPAJIAHgBQABAEACACQADACADAAQADAAADgCQACgCAAgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAIgFAAIgBAAIAAgFIAEAAIAEgCQAAAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBgCgEAAQgEAAgDAHIgHgBQADgMAMAAQAGAAAEAEQAEAEAAAFQgBAFgFADQADAAADADQABADAAADQAAAGgEADQgFAEgGAAQgOAAgCgNg");
	this.shape_48.setTransform(175,-1.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgNAQQgFgGAAgKQAAgJAFgGQAGgGAIAAQAIAAAFAGQAFAGAAAJIAAACIgeAAQAAAHAEADQAEAEAEAAQAEAAADgCQACgCABgFIAIABQgCAHgFADQgEAEgHAAQgIAAgGgGgAgHgMQgDAEAAAFIAWAAQAAgFgDgDQgEgEgEAAQgEAAgEADg");
	this.shape_49.setTransform(171,-1.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgNAQQgGgFAAgLQAAgLAHgFQAFgFAHAAQAJAAAFAGQAGAGAAAJQAAAHgDAFQgDAFgEACQgFADgFAAQgIAAgFgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAFAAAEgEQADgEABgIQgBgHgDgEQgEgEgFAAQgEAAgDAEg");
	this.shape_50.setTransform(166.5,-1.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgRAdIAAg4IAGAAIAAAFQADgDADgCQACgBADAAQAFAAAFADQADACACAFQADAFAAAGQAAAHgDAEQgCAFgEACQgEADgFAAQgDAAgCgBQgDgCgCgCIAAAUgAgHgSQgEAEAAAIQAAAHAEAEQADADAEAAQAEAAAEgEQADgEAAgHQAAgIgDgEQgEgEgEAAQgEAAgDAFg");
	this.shape_51.setTransform(162.2,-0.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAPAdIAAgyIgdAAIAAAyIgIAAIAAg5IAsAAIAAA5g");
	this.shape_52.setTransform(157,-2.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgDAHQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_53.setTransform(150.8,0.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgPASQgDgDAAgFQAAgDACgDQABgCACgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgDACQgCACgBAEIgHgBIADgHQADgDAEgBQADgCAFAAQAFAAAEACQADABABACIADAFIAAAGIAAAIIABANIABAFIgHAAQgBgCAAgDIgIAEIgHACQgHAAgEgEgAAAADIgHABIgCACIgBAEQAAAAAAABQAAABAAAAQAAABABAAQAAABABAAQACACAEAAQADAAADgCQADgBACgDQABgDAAgEIAAgDIgKADg");
	this.shape_54.setTransform(147.5,-1.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgQAVIAAgpIAQAAIAIABQADABACADQACADAAADIgBAFIgEAEQADAAACADQACACAAAEQAAAGgEADQgEADgIAAgAgJAPIAJAAIAIgBQABgCAAgDIgBgEQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAIgGAAIgIAAgAgJgCIAIAAIAFgBIADgCQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgDgCgCIgHgBIgIAAg");
	this.shape_55.setTransform(143.3,-1.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAIAVIgIgNIgDgFIgEgBIAAATIgHAAIAAgpIAHAAIAAASQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQABgBACgHIADgGIADgCIAFgBIACAAIAAAGIgCAAIgEABIgCAFIgDAGIgDACQADABAFAHIAHANg");
	this.shape_56.setTransform(139.5,-1.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_57.setTransform(135.6,-1.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgNAQQgGgFABgLQgBgLAHgFQAFgFAHAAQAIAAAGAGQAFAGAAAJQAAAHgCAFQgCAFgFACQgEADgGAAQgHAAgGgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQAEgEgBgIQABgHgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_58.setTransform(131.3,-1.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAUAdIAAgvIgRAvIgFAAIgRgwIAAAwIgHAAIAAg5IALAAIAOAoIABAJIADgKIAOgnIAKAAIAAA5g");
	this.shape_59.setTransform(125.7,-2.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_60.setTransform(119.2,0.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgLAVIAAgpIAXAAIAAAGIgQAAIAAAjg");
	this.shape_61.setTransform(116.8,-1.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgDAHQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_62.setTransform(111.8,0.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgMAaQgEgEgBgHIAHgBQABAFACACQADACADAAQADAAACgBIAEgEIADgHIABgIIAAgCQgCAEgEACQgEACgDAAQgHAAgFgFQgFgEAAgJQAAgJAFgFQAFgFAIAAQAFAAAEADQAFADACAFQADAGAAAKQAAAKgDAHQgCAGgFAEQgEADgGAAQgGAAgFgDgAgHgTQgEAEAAAGQAAAGAEADQADADAEAAQAFAAADgDQADgDAAgGQAAgGgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_63.setTransform(108.5,-2.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_64.setTransform(103.7,-2.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_65.setTransform(99.4,-2.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgNAYQgEgEgBgHIAHgBQABAGADACQADADAEAAQAFAAADgEQADgEAAgGQAAgGgDgDQgDgDgFAAQgDAAgDACQgDABgCACIgGgBIAFgdIAcAAIAAAHIgWAAIgDAPQAGgDAEAAQAIAAAEAFQAGAEAAAIQAAAIgFAGQgFAHgJAAQgHAAgGgFg");
	this.shape_66.setTransform(95.2,-2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_67.setTransform(90.4,-2.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_68.setTransform(85.9,-2.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgBASIAKgSIgKgRIAFAAIANARIgNASgAgQASIALgSIgLgRIAGAAIALARIgLASg");
	this.shape_69.setTransform(79.6,-1.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_70.setTransform(76.3,0.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgRAdIAAg5IAkAAIAAAHIgdAAIAAAyg");
	this.shape_71.setTransform(73.3,-2.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_72.setTransform(69.8,0.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_73.setTransform(65.7,-2.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_74.setTransform(61.8,0.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgMAZQgGgDgDgHQgDgHAAgIQAAgJADgGQAEgHAGgEQAGgCAHAAQAIAAAGADQAGAFACAIIgHACQgCgHgEgCQgEgDgFAAQgGAAgEADQgFADgCAGQgBAFAAAFQAAAHACAFQACAFAEADQAFADAEAAQAGAAAFgEQAEgDACgIIAHACQgCAKgGAFQgGAEgJAAQgJAAgFgEg");
	this.shape_75.setTransform(57.7,-2.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAPAdIAAgsIgdAsIgHAAIAAg5IAGAAIAAAtIAegtIAIAAIAAA5g");
	this.shape_76.setTransform(49.8,-2.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AATAjIAAgNIglAAIAAANIgHAAIAAgUIAFAAQAHgKAAgfIAAgJIAhAAIAAAyIAGAAIAAAUgAgGgYIgBAUQgCALgEAIIAaAAIAAgrIgTAAg");
	this.shape_77.setTransform(44,-1.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_78.setTransform(38.6,-2.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AASAdIgHgSIgXAAIgGASIgIAAIAWg5IAHAAIAYA5gAgDgLIgGAQIASAAIgGgPIgDgLIgDAKg");
	this.shape_79.setTransform(33,-2.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAKAdIgJgQQgDgGgDgDQgCgCgEAAIAAAbIgIAAIAAg5IAIAAIAAAaQAEAAACgCQADgCACgIIAEgIIAFgEQACgCAEAAIAEABIAAAGIgBAAIgCAAQgDAAgCACIgEAHQgDAIgCABIgEADQAFABAFAJIAMATg");
	this.shape_80.setTransform(28.3,-2.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AALASIgLgSIALgRIAGAAIgKARIAKASgAgDASIgNgSIANgRIAFAAIgJARIAJASg");
	this.shape_81.setTransform(23.4,-1.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_82.setTransform(15.9,-2.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_83.setTransform(9.7,-2.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_84.setTransform(3.5,-2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dfgdfggg, new cjs.Rectangle(-1.6,-8.4,289.6,21.8), null);


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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(224));

	// legal
	this.addr2 = new lib.dfgdfggg();
	this.addr2.parent = this;
	this.addr2.setTransform(5,235.8);

	this.timeline.addTween(cjs.Tween.get(this.addr2).wait(224));

	// text2b
	this.instance = new lib.text2b();
	this.instance.parent = this;
	this.instance.setTransform(150.1,214.1,0.9,0.045);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120).to({_off:false},0).to({scaleY:0.9},6,cjs.Ease.get(1)).wait(88).to({scaleY:0.05,y:212.1},6,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// text2a
	this.instance_1 = new lib.text2a();
	this.instance_1.parent = this;
	this.instance_1.setTransform(189,187.3,0.64,0.64,0,0,0,0.1,0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(116).to({_off:false},0).to({regX:0,regY:0,scaleX:0.8,scaleY:0.8,x:149,alpha:1},6,cjs.Ease.get(1)).wait(89).to({regX:0.1,regY:0.1,scaleX:0.64,scaleY:0.64,x:101,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(6));

	// pic2
	this.instance_2 = new lib.pic2_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(180,126.8,0.8,0.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(113).to({_off:false},0).to({scaleX:1,scaleY:1,x:150,alpha:1},6,cjs.Ease.get(1)).wait(89).to({scaleX:0.8,scaleY:0.8,x:120,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(9));

	// text1a
	this.instance_3 = new lib.text1a();
	this.instance_3.parent = this;
	this.instance_3.setTransform(201,186.1,0.8,0.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:0.9,scaleY:0.9,x:151,y:187.2,alpha:1},6,cjs.Ease.get(1)).wait(90).to({scaleX:0.64,scaleY:0.64,x:101,y:186.1,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(118));

	// pic1
	this.instance_4 = new lib.pic1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(170.8,112,0.64,0.64,0,0,0,0.1,0);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:0,scaleX:0.8,scaleY:0.8,x:146.7,alpha:1},6,cjs.Ease.get(1)).wait(90).to({regX:0.1,scaleX:0.64,scaleY:0.64,x:130.8,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(121));

	// text1b
	this.instance_5 = new lib.text1b();
	this.instance_5.parent = this;
	this.instance_5.setTransform(151,212,0.9,0.045,0,0,0,0,2.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12).to({_off:false},0).to({regY:0,scaleY:0.9,y:211.8},6,cjs.Ease.get(1)).wait(85).to({regY:1.1,scaleY:0.05},6,cjs.Ease.get(1)).to({_off:true},1).wait(114));

	// rect
	this.instance_6 = new lib.rect();
	this.instance_6.parent = this;
	this.instance_6.setTransform(151.1,212,0.857,0.045,0,0,0,0.1,2.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({_off:false},0).to({regY:1.1,scaleY:0.99},4,cjs.Ease.get(1)).to({regY:0.1,scaleY:0.9},2).wait(92).to({regY:2.2,scaleY:0.05},6,cjs.Ease.get(1)).to({_off:true},1).wait(1).to({_off:false,scaleX:0.92},0).to({regY:1.1,scaleY:0.99},4,cjs.Ease.get(1)).to({regX:0,regY:0,scaleY:0.9,x:151,y:211.9},2).wait(97).to({regX:0.1,regY:2.2,scaleY:0.05,x:151.1,y:212},6,cjs.Ease.get(1)).wait(1));

	// logo
	this.instance_7 = new lib.logo();
	this.instance_7.parent = this;
	this.instance_7.setTransform(150,23.4,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(224));

	// bg
	this.instance_8 = new lib.bg();
	this.instance_8.parent = this;
	this.instance_8.setTransform(150,125,1.25,0.625,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(224));

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
		{src:"images/300x250_atlas_.png", id:"300x250_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;