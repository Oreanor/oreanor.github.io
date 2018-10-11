(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"160x600_atlas_", frames: [[0,162,198,164],[0,0,240,160]]}
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
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pic2 = function() {
	this.spriteSheet = ss["160x600_atlas_"];
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
	this.shape.setTransform(32.8,8.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAUAsIAAgpIgnAAIAAApIgQAAIAAhXIAQAAIAAAjIAnAAIAAgjIAPAAIAABXg");
	this.shape_1.setTransform(23.6,8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAVAsIAAgpIgpAAIAAApIgOAAIAAhXIAOAAIAAAjIApAAIAAgjIAOAAIAABXg");
	this.shape_2.setTransform(14.1,8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQAqQgIgDgFgGQgGgHgCgHQgDgJAAgKQAAgKADgIQACgIAGgGQAFgGAIgEQAIgCAIAAQAJAAAIACQAIAEAFAGQAEAFAEAJQADAIAAAKQAAAKgDAJQgDAIgFAGQgFAGgIADQgHADgKABQgJgBgHgDgAgKgeQgFACgDAFQgDADgCAHQgBAGAAAHQAAAQAGAIQAHAJALAAQANAAAGgJQAGgIAAgQQAAgPgGgIQgGgKgNABQgEAAgGACg");
	this.shape_3.setTransform(4.6,8.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgqArIAAgKIAEAAIAGgBQACgBAEgEIAFgIQACgEADgKIADgTIADgeIA1AAIAABXIgPAAIAAhKIgbAAQgBAQgBANIgFATIgGAPQgEAFgDADIgIAEIgIABQgHAAAAgCg");
	this.shape_4.setTransform(-5.7,8.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQAqQgHgDgFgGQgGgGgDgIQgDgHAAgMQAAgLADgHQADgKAGgEQAFgGAHgEQAIgCAIAAQAKAAAHACQAHADAGAHQAEAFAEAJQACAHAAALQAAAMgCAHQgDAIgFAGQgGAGgHADQgHADgKABQgJgBgHgDgAgKgeQgGADgCAEQgDADgCAHQgCAGAAAHQABAPAGAJQAGAJAMAAQANAAAGgJQAGgIAAgQQAAgPgGgIQgGgKgNABQgFAAgFACg");
	this.shape_5.setTransform(-14.8,8.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgjAtIAAhYIAOAAIAAAmIAIAAQAIAAADgGIARgcIAEgDQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAIAMAAIgWAiIgEAEIgFAEQADABADACIAFAGIAXAkIgLAAIgGgBIgEgEIgQgbQgDgIgJAAIgJAAIAAApg");
	this.shape_6.setTransform(-23.5,8.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgfAsIAAhXIAfAAQAHAAAGACQAFABAEADQAEADABAEIABAIIAAAGIgDAGIgFAFQgEADgEABQAKABAFAFQAFAFABAJQgBAFgCAGQgDAFgEADQgEADgGACQgGABgHAAgAgRAiIARAAQAJAAAFgFQAEgDAAgIIgBgFQAAgDgCgCQgDgCgDgBIgJgBIgRAAgAgRgFIAQAAIAGgBIAFgDIAEgFIACgGIgBgEIgDgFIgFgCQgEgCgEAAIgQAAg");
	this.shape_7.setTransform(-36.6,8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAiAsIAAg5IABgLIgfA3IgCAAIgCAAIgCAAIgCgDIgeg1IABAGIAAA/IgOAAIAAhXIANAAIACAAIADADIAdAxIABAFIADgJIAagtQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAgBIAEAAIAMAAIAABXg");
	this.shape_8.setTransform(62,-8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgkAtIAAhYIAPAAIAAA+IAAAFIADgGIAqg8QABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAIAJAAIAABXIgPAAIAAg+IAAgFIgBAEIgCACIgCADIgmA2IgDADQAAAAAAABQAAAAgBAAQAAAAgBAAQAAABgBAAg");
	this.shape_9.setTransform(51.2,-7.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag4AsIAAhXIAOAAIAABMIAjAAIAAhMIAOAAIAABMIAjAAIAAhMIAQAAIAABXg");
	this.shape_10.setTransform(39.5,-8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgVA7IAPgjIgjhSIANAAIADABIACACIAXA3IABAIIACgIIAXg3QAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIADgBIAMAAIgvByIgCACQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAg");
	this.shape_11.setTransform(28.2,-6.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgLArQgGgEgGgFQgFgHgDgIQgDgIAAgLQAAgJADgIQADgJAFgGQAFgGAHgEQAIgCAJAAQAJAAAGACQAIADAFAGIgEAGIgCABIgCAAIgCAAIgEgDIgGgDIgIgBQgGAAgEACQgGAFgCACQgCAEgDAHQgBAGAAAHQAAAJACAFQABAHAEAEQADAEAEACQAEADAGAAQAFAAAEgCIAGgDIADgDIAEgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAIAFAGIgHAGIgHAEIgJADIgJABQgHgBgHgCg");
	this.shape_12.setTransform(19.9,-7.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgkAtIAAhYIAQAAIAAA+IgBAFIADgGIAog6IADgCIACgBIAJAAIAABXIgOAAIAAg7IAAgDIAAgFIgDAGIgoA5IgDADIgDACg");
	this.shape_13.setTransform(6.6,-7.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAiAsIAAg/IABgFIgeA0IgBADIgDAAIgBAAIgCAAIggg4IABAMIAAA5IgOAAIAAhXIAMAAIAEAAQAAABAAAAQABAAAAABQAAAAABAAQAAABAAAAIAcAxIABAFIAEgJIAagtIADgDIACAAIANAAIAABXg");
	this.shape_14.setTransform(-8.5,-8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgMArQgHgEgGgGQgGgHgDgIQgDgJAAgKQAAgIADgJQADgIAFgGQAFgGAHgEQAIgCAIAAQAJgBAFADQAGACAFAFQAGAGACAHQADAHAAAKIgBAFIgDAAIg4AAQABAKABAFQACAFAEAFQAFAFADABQAEACAGAAIAKgBIAHgDIAFgDIADgBIADABIAEAGIgGAGIgJAEIgJADIgJABQgIgBgHgCgAgOgbQgGAIgCALIAuAAQAAgGgBgEIgFgIQgCgEgEgCIgKgCQgJABgHAGg");
	this.shape_15.setTransform(-18.9,-7.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgSAsQgFgBgDgDQgDgDgCgEQgCgEAAgHQAAgFADgFQADgFAGgDQAFgDALgDQALgCANAAIAAgHQAAgKgEgGQgFgFgIAAQgEAAgEABIgLAHIgEABIgDgBIgCgCIgCgFQAHgGAIgEQAJgEAIAAQAGAAAHADQAEACAFAFQADADADAHQACAGAAAIIAAA3IgHAAIgDAAIgCgDIgCgJIgHAGIgGAEIgHADIgJABQgFAAgEgCgAABAGIgLAEQgEACgCADQgCACAAAFIABAGIADAEIAEACIAGABIAGgBIAGgCIALgJIAAgSQgKAAgIABg");
	this.shape_16.setTransform(-27.8,-8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AglA8IAAh2IAJAAQADABABADIACALQAGgIAGgEQAHgEAIAAQAIAAAGADQAGADAEAFQAEAHACAIQADAJAAALQAAAJgDAIQgDAKgEAEQgEAGgIAEQgIADgHAAQgHAAgGgCQgFgDgFgFIAAAngAgLgrQgEADgHAHIAAAqQAGAGADACQAGADAFAAQAMgBAGgIQAGgJAAgPQAAgJgBgHQgCgGgDgEQgCgDgEgDIgKgCQgFABgGADg");
	this.shape_17.setTransform(-36.2,-6.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgkAtIAAhYIAPAAIAAA+IAAAFIADgGIAqg8QABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAIAJAAIAABXIgPAAIAAg+IAAgFIgDAGIgqA8QgBAAAAABQAAAAgBAAQAAAAgBAAQAAABgBAAg");
	this.shape_18.setTransform(-46,-7.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgHAsIAAhLIggAAIAAgMIBPAAIAAAMIghAAIAABLg");
	this.shape_19.setTransform(-55.1,-8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgLArQgHgEgFgFQgFgHgDgIQgDgIAAgLQAAgIADgJQADgKAFgFQAFgGAHgEQAIgCAIAAQAKAAAGACQAHADAGAGIgEAGIgCABIgCAAIgCAAIgEgDIgGgDIgIgBQgGAAgEACQgGAFgCACQgEAGgBAFQgBAGAAAHQAAAIABAGQADAHACAEQAEAEAEACQAEADAGAAQAFAAAEgCIAFgDIAEgDIADgBQABAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAIAFAGIgHAGIgHAEIgJADIgJABQgHgBgHgCg");
	this.shape_20.setTransform(-63.3,-7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text2b, new cjs.Rectangle(-66.7,-12.5,133.5,25.2), null);


(lib.text2a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D97D3").s().p("AAuBFQgEAAgBgCIgDgEIgKgcIg2AAIgKAcIgDAEQgCACgEAAIgTAAIA0iJIAZAAIA0CJgAgUARIApAAIgVg+g");
	this.shape.setTransform(69.6,11.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D97D3").s().p("AgwBFIAAiJIAtAAQALAAALADQAKADAFAEQAGAEADAIQACAHAAAHQAAAGgBAEQgBAFgDADIgIAHQgDADgHADQAbAFABAYQgBAIgDAIQgDAJgHAEQgGAGgIADQgKADgLAAgAgXAxIAXAAQAIAAAEgCQAFgBADgDQADgEABgDQABgEAAgEQAAgEgBgFIgFgFQgEgEgDAAIgMgBIgXAAgAgXgJIATAAQAMAAAGgEQAHgFAAgKQAAgLgGgFQgGgEgMAAIgUAAg");
	this.shape_1.setTransform(57.2,11.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D97D3").s().p("AgMBFIAAh0IgnAAIAAgVIBoAAIAAAVIgpAAIAAB0g");
	this.shape_2.setTransform(44.9,11.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D97D3").s().p("AgSBBQgMgGgIgIQgIgJgFgOQgEgNAAgPQAAgQAFgLQAEgNAJgKQAJgJAMgFQALgGAOAAQAQAAAKAGQAMAEAHAIIgIANIgCACIgDAAIgDAAIgDgCIgEgEIgFgCIgHgCIgKAAQgJAAgGACQgIAEgFAGQgGAHgCAJQgDAKAAAJQAAALADAJQADAKAGAGQAEAGAJADQAGADAIAAIAKAAIAHgCIAHgDIAGgFIACgBIACgBQAAAAABABQAAAAABAAQAAAAAAAAQABABAAAAIAKALQgHAKgNAGQgMAFgQABQgNgBgNgFg");
	this.shape_3.setTransform(33.2,11.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D97D3").s().p("AAfBFIAAg8Ig9AAIAAA8IgZAAIAAiJIAZAAIAAA7IA9AAIAAg7IAZAAIAACJg");
	this.shape_4.setTransform(19.4,11.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D97D3").s().p("AAuBFQgDAAgDgCIgCgEIgKgcIg3AAIgKAcIgCAEQgCACgEAAIgTAAIA0iJIAZAAIA0CJgAgUARIAqAAIgWg+g");
	this.shape_5.setTransform(5.6,11.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D97D3").s().p("AguBFIAAiJIArAAQAMAAAKADQAKAEAGAGQAGAEADAJQADAIAAAKQAAAJgDAJQgCAGgHAIQgIAGgJADQgLAEgKgBIgTAAIAAAxgAgWAAIATAAQAEAAAHAAQADgBAFgFIAFgIQACgEAAgGQAAgGgCgEIgFgIQgDgDgFgBQgFgCgGAAIgTAAg");
	this.shape_6.setTransform(-6.3,11.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D97D3").s().p("AgLBFIAAh0IgpAAIAAgVIBpAAIAAAVIgpAAIAAB0g");
	this.shape_7.setTransform(-18.4,11.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D97D3").s().p("AgSBBQgMgGgIgIQgIgKgFgNQgEgNAAgPQAAgQAFgLQAEgNAJgKQAJgJAMgFQALgGAPAAQAPAAAKAGQALAEAJAIIgJANIgCACIgDAAIgDAAIgHgGIgFgCIgHgCIgKAAQgIAAgHACQgIAEgFAGQgFAGgDAKQgDAIAAALQAAALADAJQADAKAGAGQAGAGAHADQAGADAJAAIAJAAIAHgCIAHgDIAGgFIACgBIACgBIAEACIAJALQgHAKgNAGQgMAFgQABQgNgBgNgFg");
	this.shape_8.setTransform(-30.2,11.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D97D3").s().p("AgaBBQgNgFgJgJQgKgMgDgLQgGgMAAgQQAAgPAGgMQADgLAKgMQAIgIAOgGQALgGAPAAQAJABAKACIARAGQAGAFAHAGIAKAPQAEAIACAJQADALgBAHQAAAOgEAOQgFALgJAMQgJAJgMAFQgNAFgPABQgOgBgMgFgAgQgtQgJAFgFAFQgFAGgDAKQgDAIAAALQAAALADAJQADAKAFAFQAHAHAHADQAGADAKAAQAKAAAIgDQAHgDAFgHQAGgEADgLQADgJAAgLQAAgLgDgIQgDgKgGgGQgEgFgIgFQgIgCgKAAQgJAAgHACg");
	this.shape_9.setTransform(-44.3,11.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D97D3").s().p("AgvBFIAAiJIArAAQANAAAKADQAKAEAGAGQAGAEADAJQADAHABALQgBAKgDAIQgDAGgGAIQgJAGgHADQgMAEgLgBIgSAAIAAAxgAgWAAIASAAQAFAAAHAAQADgBAFgFQADgDACgFQACgEgBgGQABgGgCgEQgBgEgEgEQgDgDgFgBQgGgCgGAAIgSAAg");
	this.shape_10.setTransform(-57.2,11.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D97D3").s().p("AAdBFIAAh1Ig5AAIAAB1IgZAAIAAiJIBrAAIAACJg");
	this.shape_11.setTransform(-70.7,11.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D97D3").s().p("AAfBFIAAg5IgOAAIgEABQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAABgBAAIgEADIgDAEIgXAnQgCAEgEACQgEADgFAAIgTAAIAfgwQAGgKAIgEQgJgCgEgDQgGgDgDgEQgEgFgBgFQgCgIAAgFQAAgHADgJQADgGAHgHQAGgFAJgDQAKgDAKAAIAvAAIAACJgAgCgvQgEABgDAEQgEAEAAADIgCAHIACAJQAAADAEADQACADAFACQAEABAHAAIAWAAIAAgpIgWAAQgHAAgEABg");
	this.shape_12.setTransform(50,-11.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1D97D3").s().p("AAfBFIABhrIgDAKIg4BcIgDACIgDACIgDABIgTAAIAAiJIAZAAIgBBrIAIgSIA0hUIACgDIADgBIAEgBIASAAIAACJg");
	this.shape_13.setTransform(37.1,-11.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1D97D3").s().p("AAyBFIABhkIgoBOQgDAFgGAAIgDAAQgFAAgDgFIgphOIABBkIgWAAIAAiJIAVAAIADAAIABACIACACIArBSIABAGIADgGIAqhSIACgCIABgCIADAAIAVAAIAACJg");
	this.shape_14.setTransform(20.9,-11.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1D97D3").s().p("AgaBBQgNgFgJgKQgJgJgEgNQgFgMAAgQQAAgPAFgMQAEgMAJgLQAKgJAMgFQAMgGAOABQAJgBAKADQAJACAIAFQAHAFAGAFQAHAJADAGQAEAHACAJQACAJAAAKQAAAPgEANQgGAOgIAIQgHAJgOAGQgOAGgOgBQgOABgMgGgAgQgsQgJADgFAHQgFAGgDAIQgDAJAAALQAAALADAKQADAIAFAHQAFAGAJADQAHADAJAAQAKAAAIgDQAIgDAFgGQAFgHADgIQADgKAAgLQAAgLgDgJQgDgIgFgGQgFgGgIgEQgIgEgKAAQgJAAgHAEg");
	this.shape_15.setTransform(4.4,-11.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1D97D3").s().p("AAfBFIAAg8Ig+AAIAAA8IgYAAIAAiJIAYAAIAAA8IA+AAIAAg8IAZAAIAACJg");
	this.shape_16.setTransform(-10.4,-11.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1D97D3").s().p("AgbBBQgMgFgJgKQgJgLgFgLQgEgMAAgQQAAgPAEgMQAFgLAJgMQAJgJAMgFQAOgGANABQAJgBAKADQAJACAHAFQAIAFAGAFQAGAGAEAJQAFAKABAGQADALAAAIQgBAQgFAMQgEANgJAJQgJAKgNAFQgMAGgPgBQgNABgOgGgAgRgsQgIAEgEAGQgFAFgEAJQgDAJAAALQAAALADAKQAEAJAFAGQAFAGAHADQAIADAJAAQAKAAAHgDQAJgDAFgGQAFgGADgJQADgKAAgLQAAgLgDgJQgDgJgFgFQgFgHgJgDQgHgEgKAAQgJAAgIAEg");
	this.shape_17.setTransform(-25.3,-11.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1D97D3").s().p("AAiBFQgEAAgCgCIgEgGIgegxIgDgCIgDgBIgTAAIAAA8IgYAAIAAiJIAYAAIAAA6IANAAQADAAADgCQADgBACgDIAdgtIAEgFQACgCAEAAIAVAAIgkA3IgFAHIgHADQAEABAFADQAFAFADAFIAiA6g");
	this.shape_18.setTransform(-38.8,-11.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1D97D3").s().p("AgjBBQgNgGgHgKIAJgLQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABIAGAEIAHAEIAHABIAJABQAIAAAGgDQAFgCAHgFQAFgFAEgJQAEgJAAgHIg8AAIAAgTIA8AAQgBgJgEgGQgDgHgFgGQgFgFgHgCQgFgCgJgBQgHABgGABIgIAEIgGADIgEACIgDgBIgCgCIgJgLQAIgIALgGQALgEAPAAQAMAAAOAEQALAGAKAJQAJAKAEAMQAFAOAAAOQAAAPgEAOQgFAMgIAJQgIAKgMAGQgMAEgOAAQgQABgMgGg");
	this.shape_19.setTransform(-52.6,-11.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text2a, new cjs.Rectangle(-76.1,-18.5,152.2,37), null);


(lib.text1b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQArQgIgEgFgGQgGgGgCgIQgDgJAAgKQAAgIADgKQACgIAGgGQAFgGAIgEQAHgDAJAAQAJAAAIADQAIAEAFAGQAFAFADAJQADAJAAAJQAAALgDAIQgDAIgFAGQgFAFgIAFQgIACgJAAQgJAAgHgCgAgKgeQgGADgCADQgDAFgCAGQgBAGAAAHQAAAPAGAKQAHAIALABQANgBAGgIQAGgKAAgPQAAgOgGgKQgGgIgNgBQgFAAgFADg");
	this.shape.setTransform(28.9,8.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgkA8IAAh1IAJAAQAAAAABAAQABAAAAABQABAAAAAAQAAABAAABIABAKQAGgHAHgEQAIgEAHAAQAHAAAHADQAFADAFAGQAFAGACAIQACAHAAAMQgBALgCAGQgCAHgFAIQgGAGgGAEQgHADgIAAQgHAAgGgCQgFgDgFgFIAAAngAgMgrQgEADgGAHIAAAqQAEAFAFADQAGACAFAAQALAAAGgJQAHgIAAgQQAAgJgCgGQgBgHgCgDQgEgEgDgCQgEgBgFAAQgHAAgGADg");
	this.shape_1.setTransform(19.7,9.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGAsIAAhMIghAAIAAgLIBPAAIAAALIggAAIAABMg");
	this.shape_2.setTransform(10.4,8.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLArQgGgDgGgGQgFgGgDgJQgCgKgBgJQABgKACgIQACgGAFgIQAGgGAIgDQAGgDAKgBQAIAAAHADQAIAEAFAFIgFAGIgBABIgBAAIgDgBIgEgCIgFgDIgIgBQgGAAgFADQgEACgEAEQgDAFgCAGQgBAFAAAIQAAAIABAHQABAEAFAGQADAEAEACQAEACAGABQAFgBAEgBIAFgDIAFgDIACgBIADABIAFAGQgDAEgEACIgIAEIgIACIgJABQgHAAgHgCg");
	this.shape_3.setTransform(2.3,8.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAiAsIAAhXIAPAAIAABXgAgwAsIAAhXIAOAAIAAAiIASAAQAKAAAGACQAEACAEAEQAEADACAFQABAEAAAGQAAAGgCAFQgCAEgEAEQgEAEgFACQgGACgHAAgAgiAhIATAAIAHgBIAGgEIACgFIABgGIgBgGIgBgFIgGgDIgJgBIgSAAg");
	this.shape_4.setTransform(-7.9,8.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPA9QgIgDgFgHQgEgGgFgMQgDgLAAgQQAAgMADgNQACgNAGgHQAEgJAJgFQAKgGAKgBIAfgDIABAIIgBAFIgEACIgZACQgHABgHADQgGADgEAGQgEAFgCAIQgDAIABAJIAEgIIAIgGQAFgDAEAAQAEgCAFAAQAJAAAGADQAIADAEAGQAEAEADAJQADAJAAAJQAAAKgDAHQgDAJgGAFQgFAGgHADQgHADgKAAQgIAAgHgDgAgJgIIgIAFIgGAJQgBAFAAAHQAAAIABAHQACAGADAEQAEAFAEACQAFACAFAAQAMAAAHgIQAGgIABgPQAAgPgHgIQgGgIgNAAQgFAAgEACg");
	this.shape_5.setTransform(-18.8,6.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAWAsIAAg/IAAgEIgDAGIgoA5IgCADIgDABIgKAAIAAhXIAQAAIAAA7IgBAHIABgDIACgCIACgDIAmg3IADgCIADgBIAJAAIAABXg");
	this.shape_6.setTransform(-33.1,8.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQAqQgHgDgGgGQgFgFgDgJQgCgJgBgKQABgIACgKQADgIAFgGQAGgGAHgDQAIgEAIAAQAKAAAHAEQAHADAGAGQAFAGADAIQADAHgBALQABAMgDAHQgDAJgFAFQgGAGgHADQgHADgKAAQgIAAgIgDgAgKgeQgFADgDAEQgDAEgCAGQgBAIAAAFQAAAPAGAJQAGAKAMgBQANABAGgKQAGgJAAgPQAAgPgGgIQgGgJgNAAQgFAAgFACg");
	this.shape_7.setTransform(56.6,-7.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAVAsIAAgpIgoAAIAAApIgQAAIAAhXIAQAAIAAAjIAoAAIAAgjIAPAAIAABXg");
	this.shape_8.setTransform(47,-7.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA2AsQgEAAgCgBIgDgEIgRgcQgEgHgIAAIgJAAIAAAoIgNAAIAAgoIgJAAQgDAAgEACQgDACgCADIgQAcIgEAEQgCABgEAAIgKAAIAWglIAFgGIAHgCIgFgDIgFgGIgWghIAMAAIAEABQAAAAABAAQAAAAAAABQABAAAAABQABAAAAABIASAcIAEAEQADACAEAAIAHAAIAAgmIANAAIAAAmIAIAAQAHAAADgGIASgcIADgDIAEgBIAMAAIgaAnIgGADQADAAAEACIAFAGIAWAlg");
	this.shape_9.setTransform(35.6,-7.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgMAqQgIgDgFgGQgGgGgDgJQgDgJAAgKQAAgIADgJQADgIAFgGQAFgGAHgDQAIgEAIAAQAHABAHACQAGACAGAFQAEAGADAHQADAIAAAJIgBAFIgDAAIg4AAQAAAJACAGQADAHADADQADAEAFACQAGACAEAAQAGAAAEgBIAHgDIAFgDIADgCQABABAAAAQABAAAAAAQABAAAAAAQAAABAAAAIAEAGIgGAGIgJAEQgCACgHAAIgJABQgIAAgHgDgAgOgbQgGAHgBALIAtAAQAAgFgBgFIgEgIIgHgEQgFgCgFAAQgJAAgHAGg");
	this.shape_10.setTransform(24.6,-7.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AglA8IAAh1IAJAAQABAAABAAQABAAAAABQABAAAAAAQAAABAAABIABAKQAHgIAGgDQAHgEAIAAQAIAAAGADQAGADAEAGQAEAEACAKQADAJAAAKQAAAJgDAIQgCAIgFAHQgEAGgIAEQgGADgJAAQgHAAgGgCQgFgDgFgFIAAAngAgMgrQgFADgFAHIAAAqQAEAFAFADQAGACAFAAQALAAAHgJQAGgJAAgPQAAgJgBgGQgCgGgDgEQgDgEgDgCQgFgBgFAAQgGAAgGADg");
	this.shape_11.setTransform(15.6,-6.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMAqQgIgDgFgGQgGgGgDgJQgDgJAAgKQAAgJADgIQACgGAGgIQAEgFAJgEQAHgEAIAAQAIABAGACQAHADAFAEQAEAGADAHQADAIAAAJIgBAFIgDAAIg4AAQAAAGACAJQACAFAEAFQADAEAFACQAGACAEAAQAGAAAEgBIAPgIQABABAAAAQABAAAAAAQABAAAAAAQAAABAAAAIAFAGIgHAGIgIAEIgKACIgJABQgIAAgHgDgAgOgbQgGAHgBALIAtAAQAAgFgBgFIgEgIIgHgEQgEgCgFAAQgKAAgHAGg");
	this.shape_12.setTransform(6.2,-7.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgPA9QgIgDgFgHQgFgGgEgMQgDgLAAgQQAAgMACgNQADgNAFgHQAFgJAKgFQAIgGALgBIAfgDIABAIIgBAFIgEACIgaACQgGABgHADQgGADgEAGQgEAFgCAIQgDAIAAAJIAFgIIAIgGQAFgDAEAAQAFgCAEAAQAJAAAHADQAGADAFAGQAEAEAEAJQACAJAAAJQAAAKgDAHQgDAJgFAFQgHAGgGADQgIADgJAAQgIAAgHgDgAgJgIIgJAFIgEAJQgCAFAAAHQAAAIACAHQABAGADAEQADAFAFACQAFACAFAAQAMAAAHgIQAHgIgBgPQABgQgHgHQgGgIgMAAQgGAAgEACg");
	this.shape_13.setTransform(-3,-9.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgHAsIAAhMIggAAIAAgLIBPAAIAAALIghAAIAABMg");
	this.shape_14.setTransform(-16.7,-7.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAVAsIAAg7IABgIIgBADIgqA8IgDADQAAAAAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgJAAIAAhXIAOAAIAAA+IAAAEIADgFIAqg8IAEgBIAJAAIAABXg");
	this.shape_15.setTransform(-25.8,-7.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag4AsIAAhXIAPAAIAABLIAjAAIAAhLIAOAAIAABLIAiAAIAAhLIAPAAIAABXg");
	this.shape_16.setTransform(-37.6,-7.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgVA7IAPgjIgjhSIANAAIADABIACACIAXA3IABAHIACgHIAXg3IABgDIADAAIAMAAIgvBxIgCADQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAg");
	this.shape_17.setTransform(-48.8,-6.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgLAqQgGgDgGgGQgFgFgDgJQgDgIAAgLQAAgIADgKQACgHAGgGQAFgHAHgDQAHgDAKgBQAJAAAGAEQAIADAFAFIgEAFIgCACIgCAAIgCgBIgEgCIgGgCIgIgBQgFAAgFACQgFADgDAEQgEAFgBAFQgBAGAAAHQAAAIACAHQABAGAEAEQADAEAEACQAEACAGAAQAFAAAEgBIAGgDIADgDIAEgCQAAABABAAQAAAAAAAAQABAAAAAAQAAABAAAAIAFAGQgDAEgEACIgHAEIgJACIgJABQgHAAgHgDg");
	this.shape_18.setTransform(-57.1,-7.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text1b, new cjs.Rectangle(-60.5,-15.8,121.2,31.7), null);


(lib.text1a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D97D3").s().p("AAiAxIABg9IABgIIgcA0QgDAEgDAAIgCAAQgEAAgCgEIgcg0IABAPIAAA2IgUAAIAAhhIASAAIAFABIAEAEIAWApIAEAMIAFgMIAXgpQABgEACAAIAFgBIATAAIAABhg");
	this.shape.setTransform(66,13.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D97D3").s().p("AgNAvQgIgEgFgGQgGgHgDgJQgEgJAAgMQAAgKADgJQADgJAGgHQAFgGAJgEQAIgFALAAQALAAAIAEQAJAFAFAFIgIALIgDAAIgDgBIgEgCIgGgDIgHgBQgHAAgDADQgEABgDAFQgDAEgCAGQgBAGAAAHQAAAHABAGQACAHADAEQAEAFADABQAEADAFAAQAGAAADgCIAFgDIAEgDIAEgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABIAHAJQgEAEgEADIgJAFIgKACIgKACQgGAAgKgEg");
	this.shape_1.setTransform(55.1,13.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D97D3").s().p("AgSBCQgIgDgHgHQgGgHgDgIQgDgKAAgKQAAgJADgLQAEgJAIgLIAfgsIAFgEQADgCAEAAIAUAAIgqA4QADgCAEgBQAEgBAGAAQAHAAAHADQAHACAGAFQAEAFAFAHQADAIAAAKQgBALgDAHQgDAJgHAGQgFAHgJADQgKAEgJAAQgJAAgJgEgAgJACQgFABgDAEIgFAIQgCAEAAAGQABAGABAEQACAGADACQACADAFADQAEABAGAAQAFAAAEgCQAFgBADgEIAFgIQACgEAAgGQAAgHgCgEQgCgEgDgEQgDgDgEgCQgFgBgFAAQgGAAgDACg");
	this.shape_2.setTransform(40.8,11.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D97D3").s().p("AAOBFIAAgiIg3AAIgEgCIgCgDIgDgMIA+hWIAWAAIAABVIARAAIAAANQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgDABIgMAAIAAAigAgZARIAnAAIABg7g");
	this.shape_3.setTransform(29.8,11.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D97D3").s().p("AAuBFQgEAAgCgCIgDgEIgJgcIg2AAIgKAcIgEAEIgEACIgUAAIA0iJIAYAAIA1CJgAgUARIApAAIgVg9g");
	this.shape_4.setTransform(13.9,11.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D97D3").s().p("AAfBFIAAg8Ig9AAIAAA8IgZAAIAAiJIAZAAIAAA7IA9AAIAAg7IAZAAIAACJg");
	this.shape_5.setTransform(0.4,11.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D97D3").s().p("AAfBFIAAhfIABgMIgIARIg0BVIgCACIgDACIgEABIgSAAIAAiJIAZAAIgBBgIgBALIAEgKIA4hcIADgDIADgCIADAAIATAAIAACJg");
	this.shape_6.setTransform(-13.8,11.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D97D3").s().p("AhUBFIAAiJIAZAAIAAB1IAwAAIAAh1IAYAAIAAB1IAvAAIAAh1IAZAAIAACJg");
	this.shape_7.setTransform(-30.8,11.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D97D3").s().p("AAuBFQgDAAgDgCIgCgEIgKgcIg3AAIgKAcIgDAEQgBACgEAAIgTAAIA0iJIAZAAIA0CJgAgUARIApAAIgVg9g");
	this.shape_8.setTransform(-47.2,11.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D97D3").s().p("AAzBFIAAhkIgpBOQgCAFgGAAIgDAAQgFAAgEgFIgohOIABBkIgWAAIAAiJIAWAAIACAAIABABIACADIAqBSIACAGIADgGIADgHIAnhLIABgDIADgBIACAAIAVAAIAACJg");
	this.shape_9.setTransform(-62.2,11.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D97D3").s().p("AAfBFIAAg5IgOAAIgEABQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAABgBAAIgEADIgDAFIgXAmQgCAEgEADQgEACgFAAIgTAAIAfgwQAGgKAIgEQgJgCgEgDIgJgHQgEgFgBgGQgCgEAAgIQAAgJADgHQADgHAHgFQAGgGAJgDQAJgDALAAIAvAAIAACJgAgCgvQgEACgDADQgCACgCAEQgCADAAAFQAAAFACAEQAAADAEADQADADAEABQAEACAHAAIAWAAIAAgpIgWAAQgHAAgEABg");
	this.shape_10.setTransform(87.6,-11.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D97D3").s().p("AAuBFQgEAAgBgBIgDgFIgKgcIg2AAIgKAcIgDAEQgCACgEAAIgTAAIA0iJIAZAAIA0CJgAgUARIApAAIgVg9g");
	this.shape_11.setTransform(75.8,-11.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D97D3").s().p("AAfBFIAAg9Ig+AAIAAA9IgYAAIAAiJIAYAAIAAA7IA+AAIAAg7IAZAAIAACJg");
	this.shape_12.setTransform(62.4,-11.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1D97D3").s().p("AgvBFIAAiJIAZAAIAAA5IAWAAQAMAAAJADQAKADAGAFQAFAFADAGQACAIABAHQAAAKgDAHQgFAJgFAFQgHAGgIADQgKADgKAAgAgWAxIAWAAQAGAAAFgBQAEgCADgDQACgDACgEIABgIIgBgIQgCgEgCgCIgHgFQgFgBgGAAIgWAAg");
	this.shape_13.setTransform(50.1,-11.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1D97D3").s().p("Ag5BEQgBAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgQIAMgBIAFgCIAEgGIAFgJIAEgPQACgHABgNIAFhBIBTAAIAACJIgZAAIAAh1IgkAAQAAAVgDAYIgFAfQgEAOgEAIQgFAJgEAEQgFAEgGACQgEACgIAAQgGAAgDgCg");
	this.shape_14.setTransform(36.3,-11.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1D97D3").s().p("AAfBFIAAhgIABgLIgIASIg0BUIgCADIgDABIgEABIgSAAIAAiJIAYAAIAABfIgBAMIAJgSIA0hUIACgCIADgCIAEgBIASAAIAACJg");
	this.shape_15.setTransform(23.1,-11.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1D97D3").s().p("AhUBFIAAiJIAZAAIAAB1IAvAAIAAh1IAYAAIAAB1IAwAAIAAh1IAZAAIAACJg");
	this.shape_16.setTransform(6,-11.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1D97D3").s().p("AggBEQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIAAgQIAIAAIAEgBIAEgBIAEgDIADgGIAGgLIg2hgIAXAAQAEAAACACIADAEIAaAzQACAGADAJIADgHIAag7IADgEQACgCADAAIAVAAIg2B2IgGAKIgGAHQgEACgEABIgJABQgHAAgDgCg");
	this.shape_17.setTransform(-9.9,-11.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1D97D3").s().p("AgSBBQgNgGgHgIQgIgKgFgNQgEgNAAgPQAAgNAFgPQAEgMAJgKQAKgKALgEQAMgFAOgBQAPABAKAFQALAEAJAIIgJANIgCABIgDABIgDgBIgHgFIgFgCIgHgCIgJAAQgJAAgHACQgHAEgGAGQgFAGgDAKQgDAJAAAKQAAAMADAJQAFAKAEAFQAFAGAIADQAGAEAJAAIAJgBIAHgCIANgHIACgCIACgBQABAAAAABQABAAAAAAQABAAAAAAQAAABABAAIAJALQgHAKgNAGQgMAFgQAAQgNAAgNgFg");
	this.shape_18.setTransform(-21.7,-11.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1D97D3").s().p("AAfBFIAAg5IgNAAIgFABIgEABIgDADIgEAFIgXAmQgCAEgEADQgEACgFAAIgTAAIAfgwQAGgKAIgEQgJgCgEgDIgJgHQgDgDgCgIQgCgEAAgIQAAgJADgHQAEgIAGgEQAGgGAJgDQAJgDALAAIAvAAIAACJgAgCgvQgEACgDADQgCACgCAEQgCADAAAFQAAAFACAEQAAADAEADQADADAEABQAEACAHAAIAWAAIAAgpIgWAAQgHAAgEABg");
	this.shape_19.setTransform(-39.5,-11.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1D97D3").s().p("AAtBFQgDAAgCgBIgDgFIgKgcIg1AAIgKAcIgEAEQgBACgEAAIgTAAIA0iJIAYAAIA1CJgAgUARIApAAIgVg9g");
	this.shape_20.setTransform(-51.3,-11.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1D97D3").s().p("AAiBFQgEAAgCgCIgEgGIgbguIgDgDIgDgDIgDgBIgSAAIAAA9IgZAAIAAiJIAZAAIAAA6IAMAAQADAAAEgBQADgCABgEIAcgsIAFgFQACgCAEAAIAVAAIgkA4IgGAFIgGAEQAEABAFADIAHAJIAjA7g");
	this.shape_21.setTransform(-63.3,-11.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1D97D3").s().p("AgOBFIgNgDIgLgGQgGgDgEgFIAIgMIACgDIADgBIAFADIAIAEIAJAFQAHACAGAAQAMAAAGgHQAIgFgBgLQAAgFgCgEIgFgGIgIgEQgEgBgGgBIgTAAIAAgTIARAAQALAAAGgFQAHgEAAgJQAAgJgGgEQgGgFgLABIgLABIgJADIgGAEIgEABIgDgBQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAAAgBgBIgFgMQAHgHALgDQALgEAMgBQAJAAAKADQAJADAFAFQAGAFAEAGQADAHAAAHQAAAKgEAIQgFAJgIAEIAIAEIAHAHIAEAIIACAJQAAALgEAHQgEAJgGAGQgEAFgLAEQgMADgJAAIgNgBg");
	this.shape_22.setTransform(-76.1,-11.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1D97D3").s().p("AggBEQAAAAgBAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIAAgQIAHAAIAEgBQABAAAAAAQABAAABAAQAAAAABgBQAAAAABAAIAEgDIADgGIAFgLIg1hgIAXAAQAEAAABACIAEAEIAZAzQAEAHACAIIADgHIAag7IADgEQACgCADAAIAVAAIg2B2QgDAHgDADIgGAHQgEACgEABIgJABQgHAAgDgCg");
	this.shape_23.setTransform(-87.1,-11.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text1a, new cjs.Rectangle(-93.1,-18.5,186.3,37), null);


(lib.rect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D97D3").s().p("AtqDmIAAnLIbVAAIAAHLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.rect, new cjs.Rectangle(-87.5,-23,175,46), null);


(lib.pic2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pic2();
	this.instance.parent = this;
	this.instance.setTransform(-120,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic2_1, new cjs.Rectangle(-120,-80,240,160), null);


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
	this.shape.setTransform(126.6,34.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMAYQgGgEAAgHIAHgBQABAGADACQADADAEAAQAEAAAEgEQAEgEAAgGQAAgGgEgDQgEgDgEAAQgEAAgCACQgDABgCACIgGgBIAGgdIAbAAIAAAHIgWAAIgDAPQAFgDAFAAQAHAAAGAFQAFAEAAAIQAAAIgEAGQgGAHgJAAQgIAAgEgFg");
	this.shape_1.setTransform(122.2,34.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_2.setTransform(117.6,34.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMAXQgGgHABgQQAAgJABgGQACgHAFgDQAEgDAFAAQAFAAADACQADABADAEIAEAIIABANQAAAKgCAGQgCAGgFAEQgDADgHAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQADgFAAgOQAAgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_3.setTransform(113.3,34.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJAcQgBgHADgJQADgKAEgIQAEgIAFgHIgaAAIAAgGIAjAAIAAAFQgFAGgFAKQgGAIgCALQgCAHAAAIg");
	this.shape_4.setTransform(108.9,34.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMAXQgFgHAAgQQAAgJABgGQACgHAFgDQAEgDAFAAQAFAAADACQAEABACAEIAEAIIAAANQAAAKgBAGQgDAGgEAEQgDADgHAAQgHAAgFgGgAgHgSQgEAFABANQgBAOAEAFQADAEAEAAQAFAAADgEQAEgFgBgOQABgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_5.setTransform(104.4,34.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNAXQgFgHAAgPQAAgPAGgIQAFgGAJAAQAHAAAEAEQAEADABAHIgHABQgBgFgCgBQgDgDgEAAIgFABQgDADgCAEQgCAFAAAJQADgEADgCIAHgCQAHAAAFAFQAFAEAAAJQAAAFgDAFQgCAEgEADQgEACgFAAQgIAAgGgGgAgGABQgEADAAAGIABAHQACADADACQADABACAAQAEAAADgDQAEgEAAgGQAAgGgEgDQgDgDgEAAQgFAAgCADg");
	this.shape_6.setTransform(99.9,34.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMAaQgEgEgBgHIAHgBQABAFACACQADACADAAQADAAACgBIAEgEIADgHIABgIIAAgCQgCAEgEACQgEACgDAAQgHAAgFgFQgFgEAAgJQAAgJAFgFQAFgFAIAAQAFAAAEADQAFADACAFQADAGAAAKQAAAKgDAHQgCAGgFAEQgEADgGAAQgGAAgFgDgAgHgTQgEAEAAAGQAAAGAEADQADADAEAAQAFAAADgDQADgDAAgGQAAgGgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_7.setTransform(95.5,34.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgKAcQABgHACgJQADgKAEgIQAEgIAFgHIgbAAIAAgGIAkAAIAAAFQgFAGgGAKQgFAIgCALQgCAHAAAIg");
	this.shape_8.setTransform(91.1,34.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgJAcQAAgHACgJQADgKAEgIQAEgIAGgHIgbAAIAAgGIAkAAIAAAFQgGAGgFAKQgGAIgCALQgCAHgBAIg");
	this.shape_9.setTransform(86.6,34.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_10.setTransform(82,34.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgMAXQgFgHgBgQQAAgJACgGQADgHADgDQAEgDAGAAQAEAAAEACQADABADAEIADAIIABANQAAAKgCAGQgBAGgFAEQgEADgGAAQgHAAgFgGgAgHgSQgDAFgBANQABAOADAFQADAEAEAAQAFAAADgEQAEgFAAgOQAAgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_11.setTransform(77.7,34.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_12.setTransform(72.9,34.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_13.setTransform(65.9,34.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAIABQAEABAEACQADACABADQACAEAAAEQAAAHgFAEQgFAFgMAAIgNAAIAAAYgAgNAAIANAAQAIAAADgDQADgDAAgFQAAgDgBgDQgDgCgCgBIgIgBIgNAAg");
	this.shape_14.setTransform(60.5,34.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgSAdIAAg5IAlAAIAAAHIgdAAIAAAyg");
	this.shape_15.setTransform(55.8,34.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_16.setTransform(50.2,34.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgNAYQgFgEAAgHIAHgBQABAGADACQADADAEAAQAFAAADgEQAEgEgBgGQABgGgEgDQgDgDgFAAQgDAAgDACQgDABgBACIgHgBIAGgdIAbAAIAAAHIgWAAIgDAPQAGgDAEAAQAHAAAFAFQAGAEAAAIQAAAIgEAGQgGAHgJAAQgHAAgGgFg");
	this.shape_17.setTransform(42.7,34.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_18.setTransform(37.9,34.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgMAXQgGgHAAgQQABgJACgGQACgHADgDQAFgDAFAAQAEAAAEACQADABADAEIADAIIACANQgBAKgCAGQgCAGgDAEQgFADgGAAQgIAAgEgGgAgHgSQgDAFgBANQABAOADAFQADAEAEAAQAFAAADgEQADgFABgOQgBgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_19.setTransform(33.8,34.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgSAdIAAgFIAFgIIAJgIQAJgIADgEQADgEABgEQAAgEgEgDQgDgDgEAAQgFAAgCADQgEADAAAGIgGgBQAAgIAFgEQAEgFAIAAQAIAAAFAFQAFAEAAAHIgCAHQgBADgDADQgDAEgIAGIgHAHIgEAEIAcAAIAAAHg");
	this.shape_20.setTransform(29.3,34.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_21.setTransform(24.6,34.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgNAYQgEgEgBgHIAHgBQABAGADACQADADAEAAQAFAAADgEQADgEABgGQgBgGgDgDQgDgDgFAAQgDAAgDACQgDABgCACIgGgBIAFgdIAcAAIAAAHIgWAAIgDAPQAGgDAEAAQAIAAAEAFQAGAEAAAIQAAAIgFAGQgFAHgJAAQgHAAgGgFg");
	this.shape_22.setTransform(20.5,34.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_23.setTransform(15.8,34.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgMAXQgFgHgBgQQAAgJACgGQADgHADgDQAEgDAGAAQAEAAAEACQADABADAEIADAIIABANQAAAKgCAGQgBAGgFAEQgEADgGAAQgHAAgFgGgAgHgSQgDAFgBANQABAOADAFQADAEAEAAQAFAAADgEQAEgFAAgOQAAgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_24.setTransform(11.5,34.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgKAcQABgHACgJQACgKAFgIQAEgIAFgHIgbAAIAAgGIAkAAIAAAFQgFAGgGAKQgFAIgCALQgCAHAAAIg");
	this.shape_25.setTransform(7.1,34.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgJAcQgBgHADgJQADgKAEgIQAEgIAFgHIgaAAIAAgGIAkAAIAAAFQgGAGgFAKQgGAIgCALQgCAHAAAIg");
	this.shape_26.setTransform(2.7,34.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_27.setTransform(122.2,25.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_28.setTransform(116.4,25.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAPAdIAAgsIgdAsIgHAAIAAg5IAGAAIAAAtIAdgtIAJAAIAAA5g");
	this.shape_29.setTransform(110.6,25.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_30.setTransform(104.5,28.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgMAYQgGgFAAgHQAAgGADgEQADgCAFgCQgEgBgCgDQgCgDgBgEQAAgHAFgEQAFgEAGAAQAHAAAFAEQAEAEAAAHQAAAEgBADQgCADgFABQAFACADADQADAEAAAFQAAAHgFAFQgGAFgIAAQgIAAgEgFgAgHAEQgDADAAAFIABAGIAEAEIAFABQAFAAADgDQAEgDAAgFQAAgFgEgDQgDgEgFAAQgEAAgDAEgAgFgUQgEADAAADQAAAEAEADQACADADAAQAEAAADgDQACgDAAgDQAAgEgCgDQgDgCgEAAQgDAAgCACg");
	this.shape_31.setTransform(101.1,25.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_32.setTransform(95.6,28.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AARAbIAAgMIggAAIAAAMIgGAAIAAgSIAEAAQAHgJAAgaIAcAAIAAAjIAEAAIAAASgAgLAJIAWAAIAAgdIgQAAQAAAUgGAJg");
	this.shape_33.setTransform(92,27.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgDAHQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_34.setTransform(86.5,28.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAKAcIAAgeIgSAeIgIAAIAAgoIAHAAIAAAeIATgeIAHAAIAAAogAgHgUQgDgDAAgFIAEAAIADAEIADACIAFgCIACgEIAFAAQAAAFgDADQgEADgFgBQgDABgEgDg");
	this.shape_35.setTransform(83.2,25.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgKAEIAAgHIAVAAIAAAHg");
	this.shape_36.setTransform(79.6,26.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgSAdIABgFIAEgIIAJgIQAJgIADgEQAEgEgBgEQAAgEgCgDQgEgDgFAAQgDAAgEADQgCADAAAGIgIgBQABgIAFgEQAEgFAIAAQAIAAAFAFQAEAEAAAHIAAAHQgCADgEADQgDAEgHAGIgIAHIgCAEIAbAAIAAAHg");
	this.shape_37.setTransform(76,25.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAKAcIAAgeIgTAeIgHAAIAAgoIAHAAIAAAeIASgeIAIAAIAAAogAgHgUQgDgDAAgFIAEAAIADAEIADACIAFgCIACgEIAFAAQgBAFgDADQgCADgGgBQgDABgEgDg");
	this.shape_38.setTransform(69.5,25.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAKAVIAAgfIgSAfIgIAAIAAgpIAHAAIAAAfIATgfIAHAAIAAApg");
	this.shape_39.setTransform(65,26.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAIAVIgIgNIgDgFIgEgBIAAATIgHAAIAAgpIAHAAIAAASQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQABgBACgHIADgGIADgCIAFgBIACAAIAAAGIgCAAIgEABIgCAFIgDAGIgDACQADABAFAHIAHANg");
	this.shape_40.setTransform(61.3,26.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_41.setTransform(57.4,26.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAKAVIAAgTIgTAAIAAATIgHAAIAAgpIAHAAIAAASIATAAIAAgSIAHAAIAAApg");
	this.shape_42.setTransform(53.1,26.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAKAVIAAgfIgSAfIgIAAIAAgpIAHAAIAAAfIASgfIAIAAIAAApg");
	this.shape_43.setTransform(48.7,26.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAXAbIAAgMIgzAAIAAgpIAHAAIAAAjIAQAAIAAgjIAGAAIAAAjIAQAAIAAgjIAHAAIAAAjIAFAAIAAASg");
	this.shape_44.setTransform(43.3,27.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgNAQQgGgFABgLQgBgLAHgFQAGgFAGAAQAIAAAGAGQAFAGABAJQgBAHgCAFQgCAFgFACQgEADgGAAQgHAAgGgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQADgEAAgIQAAgHgDgEQgDgEgGAAQgEAAgDAEg");
	this.shape_45.setTransform(37.6,26.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAJABQADABAEACQADACABADQACAEAAAEQAAAHgFAEQgEAFgNAAIgNAAIAAAYgAgNAAIANAAQAIAAADgDQADgDAAgFQAAgDgCgDQgCgCgCgBIgIgBIgNAAg");
	this.shape_46.setTransform(32.8,25.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAQAbIAAgMIgfAAIAAAMIgGAAIAAgSIADAAQAIgJAAgaIAbAAIAAAjIAFAAIAAASgAgKAJIAUAAIAAgdIgOAAQgBAUgFAJg");
	this.shape_47.setTransform(25.4,27.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgPAJIAGgBQACAEACACQADACACAAQAEAAADgCQACgCAAgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAIgFAAIgBAAIAAgFIAEAAIAEgCQAAAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQgCgCgDAAQgFAAgCAHIgHgBQADgMALAAQAHAAAEAEQADAEABAFQAAAFgGADQADAAADADQABADAAADQAAAGgEADQgEAEgIAAQgNAAgCgNg");
	this.shape_48.setTransform(21.3,26.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgMAQQgGgGAAgKQAAgJAGgGQAFgGAHAAQAJAAAFAGQAFAGAAAJIAAACIgeAAQABAHADADQAEAEADAAQAFAAADgCQACgCABgFIAIABQgCAHgEADQgFAEgIAAQgHAAgFgGgAgHgMQgDAEAAAFIAWAAQAAgFgDgDQgEgEgFAAQgDAAgEADg");
	this.shape_49.setTransform(17.3,26.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgNAQQgGgFABgLQgBgLAHgFQAGgFAGAAQAIAAAGAGQAFAGABAJQgBAHgCAFQgCAFgFACQgEADgGAAQgHAAgGgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQADgEAAgIQAAgHgDgEQgDgEgGAAQgEAAgDAEg");
	this.shape_50.setTransform(12.8,26.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgRAdIAAg4IAGAAIAAAFQACgDADgCQADgBADAAQAGAAADADQAFACACAFQACAFAAAGQAAAHgCAEQgDAFgEACQgFADgEAAQgDAAgDgBQgDgCgBgCIAAAUgAgHgSQgEAEAAAIQAAAHAEAEQACADAFAAQAEAAAEgEQACgEAAgHQAAgIgCgEQgEgEgEAAQgEAAgDAFg");
	this.shape_51.setTransform(8.5,27.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAPAdIAAgyIgdAAIAAAyIgHAAIAAg5IAsAAIAAA5g");
	this.shape_52.setTransform(3.3,25.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgDAHQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_53.setTransform(150.8,19.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgPASQgDgDAAgFQAAgDACgDQABgCACgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgDACQgCACgBAEIgHgBIADgHQADgDAEgBQADgCAFAAQAFAAAEACQADABABACIADAFIAAAGIAAAIIABANIABAFIgHAAQgBgCAAgDIgIAEIgHACQgHAAgEgEgAAAADIgHABIgCACIgBAEQAAAAAAABQAAABAAAAQAAABABAAQAAABABAAQACACAEAAQADAAADgCQADgBACgDQABgDAAgEIAAgDIgKADg");
	this.shape_54.setTransform(147.5,17.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgQAVIAAgpIAQAAIAIABQADABACADQACADAAADIgBAFIgEAEQADAAACADQACACAAAEQAAAGgEADQgEADgIAAgAgJAPIAJAAIAIgBQABgCAAgDIgBgEQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAIgGAAIgIAAgAgJgCIAIAAIAFgBIADgCQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgDgCgCIgHgBIgIAAg");
	this.shape_55.setTransform(143.3,17.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAIAVIgIgNIgDgFIgEgBIAAATIgHAAIAAgpIAHAAIAAASQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQABgBACgHIADgGIADgCIAFgBIACAAIAAAGIgCAAIgEABIgCAFIgDAGIgDACQADABAFAHIAHANg");
	this.shape_56.setTransform(139.5,17.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_57.setTransform(135.6,17.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgNAQQgGgFABgLQgBgLAHgFQAFgFAHAAQAIAAAGAGQAFAGAAAJQAAAHgCAFQgCAFgFACQgEADgGAAQgHAAgGgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQAEgEgBgIQABgHgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_58.setTransform(131.3,17.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAUAdIAAgvIgRAvIgFAAIgRgwIAAAwIgHAAIAAg5IALAAIAOAoIABAJIADgKIAOgnIAKAAIAAA5g");
	this.shape_59.setTransform(125.7,16.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_60.setTransform(119.2,19.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgLAVIAAgpIAXAAIAAAGIgQAAIAAAjg");
	this.shape_61.setTransform(116.8,17.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgDAHQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_62.setTransform(111.8,19.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgMAaQgEgEgBgHIAHgBQABAFACACQADACADAAQADAAACgBIAEgEIADgHIABgIIAAgCQgCAEgEACQgEACgDAAQgHAAgFgFQgFgEAAgJQAAgJAFgFQAFgFAIAAQAFAAAEADQAFADACAFQADAGAAAKQAAAKgDAHQgCAGgFAEQgEADgGAAQgGAAgFgDgAgHgTQgEAEAAAGQAAAGAEADQADADAEAAQAFAAADgDQADgDAAgGQAAgGgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_63.setTransform(108.5,16.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_64.setTransform(103.7,16.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_65.setTransform(99.4,16.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgNAYQgEgEgBgHIAHgBQABAGADACQADADAEAAQAFAAADgEQADgEAAgGQAAgGgDgDQgDgDgFAAQgDAAgDACQgDABgCACIgGgBIAFgdIAcAAIAAAHIgWAAIgDAPQAGgDAEAAQAIAAAEAFQAGAEAAAIQAAAIgFAGQgFAHgJAAQgHAAgGgFg");
	this.shape_66.setTransform(95.2,17);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_67.setTransform(90.4,16.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_68.setTransform(85.9,16.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgBASIAKgSIgKgRIAFAAIANARIgNASgAgQASIALgSIgLgRIAGAAIALARIgLASg");
	this.shape_69.setTransform(79.6,17.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_70.setTransform(76.3,19.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgRAdIAAg5IAkAAIAAAHIgdAAIAAAyg");
	this.shape_71.setTransform(73.3,16.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_72.setTransform(69.8,19.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_73.setTransform(65.7,16.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_74.setTransform(61.8,19.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgMAZQgGgDgDgHQgDgHAAgIQAAgIADgHQAEgHAGgEQAGgCAHgBQAIAAAGAEQAGAFACAIIgHACQgCgGgEgEQgEgCgFAAQgGgBgEAEQgFADgCAGQgBAEAAAGQAAAHACAFQACAGAEADQAFACAEAAQAGAAAFgEQAEgDACgIIAHACQgCAKgGAFQgGAEgJABQgJgBgFgEg");
	this.shape_75.setTransform(57.7,16.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAPAdIAAgsIgdAsIgHAAIAAg5IAGAAIAAAtIAegtIAIAAIAAA5g");
	this.shape_76.setTransform(49.8,16.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AATAjIAAgNIglAAIAAANIgHAAIAAgUIAFAAQAHgKAAgfIAAgIIAhAAIAAAxIAGAAIAAAUgAgGgYIgBAUQgCALgEAIIAaAAIAAgrIgTAAg");
	this.shape_77.setTransform(44,17.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_78.setTransform(38.6,16.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AASAdIgHgSIgXAAIgGASIgIAAIAWg5IAHAAIAYA5gAgDgLIgGAQIASAAIgGgPIgDgLIgDAKg");
	this.shape_79.setTransform(33,16.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAKAdIgJgQQgDgGgDgDQgCgCgEAAIAAAbIgIAAIAAg5IAIAAIAAAaQAEAAACgCQADgCACgIIAEgIIAFgEQACgCAEAAIAEABIAAAGIgBAAIgCAAQgDAAgCACIgEAHQgDAIgCABIgEADQAFABAFAJIAMATg");
	this.shape_80.setTransform(28.3,16.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AALASIgLgSIALgRIAGAAIgKARIAKASgAgDASIgNgSIANgRIAFAAIgJARIAJASg");
	this.shape_81.setTransform(23.4,17.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_82.setTransform(15.9,16.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_83.setTransform(9.7,16.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_84.setTransform(3.5,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dfgdfggg, new cjs.Rectangle(-1.6,10.6,155.6,30.7), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,240,400), null);


// stage content:
(lib._160x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgMaguyIY1AAMAAABdlI41AAg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(200));

	// legal
	this.addr2 = new lib.dfgdfggg();
	this.addr2.parent = this;
	this.addr2.setTransform(5,555.8);

	this.timeline.addTween(cjs.Tween.get(this.addr2).wait(200));

	// text2b
	this.instance = new lib.text2b();
	this.instance.parent = this;
	this.instance.setTransform(80.2,424.7,0.733,0.037,0,0,0,0,2.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(108).to({_off:false},0).to({regY:0.1,scaleY:0.73,y:424.6},6,cjs.Ease.get(1)).wait(78).to({regY:2.8,scaleY:0.04,y:424.7},6,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// text2a
	this.instance_1 = new lib.text2a();
	this.instance_1.parent = this;
	this.instance_1.setTransform(113.5,356.5,0.533,0.533,0,0,0,0.1,0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(104).to({_off:false},0).to({regX:0,scaleX:0.67,scaleY:0.67,x:80.2,alpha:1},6,cjs.Ease.get(1)).wait(79).to({regX:0.1,scaleX:0.53,scaleY:0.53,x:40.3,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(4));

	// pic2
	this.instance_2 = new lib.pic2_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(104.2,238.4,0.639,0.639,0,0,0,0.1,0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(101).to({_off:false},0).to({regX:0,regY:0,scaleX:0.8,scaleY:0.8,x:80.2,alpha:1},6,cjs.Ease.get(1)).wait(79).to({regX:0.1,regY:0.1,scaleX:0.64,scaleY:0.64,x:56.2,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(7));

	// text1a
	this.instance_3 = new lib.text1a();
	this.instance_3.parent = this;
	this.instance_3.setTransform(113.5,355.7,0.533,0.533,0,0,0,0.1,0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({regX:0,scaleX:0.67,scaleY:0.67,x:80.2,alpha:1},6,cjs.Ease.get(1)).wait(78).to({regX:0.1,scaleX:0.53,scaleY:0.53,x:46.9,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(106));

	// pic1
	this.instance_4 = new lib.pic1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(100.8,234.1,0.639,0.639,0,0,0,0.1,0.1);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:0.8,scaleY:0.8,x:76.9,y:234.2,alpha:1},6,cjs.Ease.get(1)).wait(78).to({scaleX:0.64,scaleY:0.64,x:60.8,y:234.1,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(109));

	// text1b
	this.instance_5 = new lib.text1b();
	this.instance_5.parent = this;
	this.instance_5.setTransform(80.2,424.4,0.733,0.037,0,0,0,0.1,2.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12).to({_off:false},0).to({regX:0,regY:0,scaleY:0.73,y:424.2},6,cjs.Ease.get(1)).wait(73).to({regX:0.1,regY:1.4,scaleY:0.04,y:424.3},6,cjs.Ease.get(1)).to({_off:true},1).wait(102));

	// rect
	this.instance_6 = new lib.rect();
	this.instance_6.parent = this;
	this.instance_6.setTransform(80.2,424.4,0.733,0.037,0,0,0,0,2.8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({_off:false},0).to({regY:1.2,scaleY:0.81},4,cjs.Ease.get(1)).to({regY:0,scaleY:0.73,y:424.3},2).wait(80).to({regY:0.1,y:424.4},0).to({regY:2.8,scaleY:0.04},6,cjs.Ease.get(1)).to({_off:true},1).wait(1).to({_off:false},0).to({regY:1.2,scaleY:0.81},4,cjs.Ease.get(1)).to({regY:0.1,scaleY:0.73},2).wait(85).to({regY:2.8,scaleY:0.04},6,cjs.Ease.get(1)).wait(1));

	// logo
	this.instance_7 = new lib.logo();
	this.instance_7.parent = this;
	this.instance_7.setTransform(80,54.9,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(200));

	// bg
	this.instance_8 = new lib.bg();
	this.instance_8.parent = this;
	this.instance_8.setTransform(80,300,0.667,1.5,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(200));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(79.5,299.5,164.5,601);
// library properties:
lib.properties = {
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/160x600_atlas_.png", id:"160x600_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;