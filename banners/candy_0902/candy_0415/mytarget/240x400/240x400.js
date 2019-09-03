(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"240x400_atlas_", frames: [[242,0,180,199],[242,201,150,169],[0,217,240,210],[0,0,240,215]]}
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


(lib.text5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIAPAAIAAAuIAVAAQAIAAAIADQAGABAGAEQAEADACAGQADAGAAAGQAAAHgDAFQgCAGgFAFQgFAEgHACQgJADgHAAgAgVApIAUAAQAHABADgCQAGgCABgCQADgDABgDIABgHIgBgIIgEgGQgCgCgFgCIgJgBIgVAAg");
	this.shape.setTransform(27,1.9,0.9,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHA2IAAheIgiAAIAAgNIBTAAIAAANIgiAAIAABeg");
	this.shape_1.setTransform(18.5,1.9,0.9,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAnA2QgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBIgCgCIgJgZIgvAAIgKAZQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgMAAIArhrIAPAAIArBrgAgCgcIgRApIAnAAIgUgzg");
	this.shape_2.setTransform(10.8,1.9,0.9,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIAhAAQAIAAAJADQAHABAFAGQAFADADAHQACAHAAAGQAAAIgDAHQgCAFgFAEQgFAEgHAEQgJACgIAAIgRAAIAAAogAgUACIARAAQAFgBAEgBQAFgBAEgDIAEgHQACgDAAgGIgCgJQgBgDgDgDQgDgDgFgCIgbgBg");
	this.shape_3.setTransform(3.2,1.9,0.9,0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIBFAAIAAAMIg1AAIAAAiIAUAAQAIAAAIADQAGABAGAEQAFADACAGQACAEAAAIQAAAIgDAEQgCAHgFAEQgEAEgIACQgIADgHAAgAgUApIAUAAQAFABAEgCQAGgCABgCQADgDABgDIACgHIgCgIQAAgCgEgEIgHgEIgdgBg");
	this.shape_4.setTransform(-5.1,1.9,0.9,0.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAnA2IAAhrIAPAAIAABrgAg1A2IAAhrIAPAAIAAAuIAVAAQAIAAAJADQAFABAFAEQAFADACAGQADAGAAAGQAAAGgDAGQgDAHgEAEQgFAEgGACQgJADgIAAgAgmApIAUAAQAHABAEgCQAFgCACgCQACgDABgDIABgHIgBgIIgDgGQgCgCgFgCIgKgBIgVAAg");
	this.shape_5.setTransform(-15.7,1.9,0.9,0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AglA2IAAhrIAjAAQAHAAAJACQAIADAEACQAFAFACAEQACAFAAAIIgBAHQgCAEgCACQgDAEgDACQgEADgFABQAMACAGAGQAFAGAAAKQAAAHgCAGQgCAFgGAEQgEAEgHACQgJADgIAAgAgWApIAWAAQAGABAFgCQAEgCADgCQACgBACgFQABgDAAgFQAAgHgGgFQgFgFgMAAIgWAAgAgWgFIATAAIAJgBIAIgEQADgCABgDIABgIQAAgJgFgFQgFgEgLAAIgUAAg");
	this.shape_6.setTransform(-25.9,1.9,0.9,0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0EA6E0").s().p("Aq6C0QgQAAgMgMQgMgLAAgRIAAkYQAAgQAMgLQAMgMAQAAIV2AAQAQAAALAMQAMALAAAQIAAEYQAAARgMALQgLAMgQAAg");
	this.shape_7.setTransform(0.1,2.1,0.9,0.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0EA6E0").s().p("AgGA2IAAheIgjAAIAAgNIBTAAIAAANIgjAAIAABeg");
	this.shape_8.setTransform(67,-25.2,0.9,0.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0EA6E0").s().p("AAaA2QgEAAgCgEIgaglIgDgDIgEAAIgLAAIAAAsIgPAAIAAhrIAfAAQAIAAAIADQAIABAFAEQAFAFACAFQACAEAAAIQAAAGgBAFIgFAJIgJAGQgEADgHABQAEACABADIAfAqgAgYgBIAPAAIAKgCIAIgDQADgEACgDQABgEAAgFQAAgJgGgFQgGgEgLAAIgQAAg");
	this.shape_9.setTransform(59.6,-25.2,0.9,0.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0EA6E0").s().p("AAnA2IgEgBIgCgDIgJgZIgvAAIgKAZIgCACIgDACIgMAAIArhrIAPAAIArBrgAgBggIgSAuIAmAAIgSguIgBgGg");
	this.shape_10.setTransform(50.2,-25.2,0.9,0.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0EA6E0").s().p("AArA2IAAhQIAAgEIgkBBIgCADIgEABIgBAAQgDAAgCgEIglhBIAAAEIAAAEIAABMIgNAAIAAhrIALAAIADABQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABIAlBAIACAIIAEgIIAkhAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAIADgBIALAAIAABrg");
	this.shape_11.setTransform(39.3,-25.2,0.9,0.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0EA6E0").s().p("AgKA2QgFAAgEgDIgIgEIgHgGIAEgIIACgBIACgBIADACIAGAEIAHADQAEACAGAAIAIgBIAHgEQADgCABgEQACgEAAgEQAAgEgDgEQgCgDgDgBIgagKIgJgFQgCgCgDgGQgDgGAAgGQAAgFADgHQACgFAEgEQAFgEAGgCQAGgDAHAAQAJAAAIADQAIADAFAFIgEAHQAAABAAAAQAAABgBAAQAAAAAAAAQAAAAgBABIgCAAIgNgHIgJgBIgHABIgGADIgEAGQgBADAAADQAAAEACADQACAEAEABIAHAEIATAGIAIAFQAEADACAFQACAGAAAFQAAAGgCAHQgCAGgFAFQgGAFgGACQgHADgHAAg");
	this.shape_12.setTransform(29.3,-25.2,0.9,0.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0EA6E0").s().p("AAnA2IgDgBIgCgDIgKgZIgvAAIgKAZQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgMAAIArhrIAPAAIArBrgAgTAOIAnAAIgRgqIgDgKg");
	this.shape_13.setTransform(18.1,-25.2,0.9,0.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0EA6E0").s().p("AgGA2IAAheIgjAAIAAgNIBTAAIAAANIgiAAIAABeg");
	this.shape_14.setTransform(10.5,-25.2,0.9,0.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0EA6E0").s().p("AgHA2IAAhrIAPAAIAABrg");
	this.shape_15.setTransform(4.6,-25.2,0.9,0.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0EA6E0").s().p("AgGA2IgshrIANAAIADABIACADIAgBPIAAAHIADgNIAehJIACgCQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAIANAAIgsBrg");
	this.shape_16.setTransform(-1.9,-25.2,0.9,0.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0EA6E0").s().p("AgVAzQgKgFgHgGQgGgHgEgLQgEgIAAgOQAAgNAEgIQADgJAHgJQAHgGAKgFQALgEAKAAQALAAALAEQAKAFAHAGQAHAJADAJQAEAIAAANQAAAOgEAIQgEALgGAHQgHAGgKAFQgLAEgLAAQgKAAgLgEgAgOgmQgHADgFAFQgFAFgDAJQgDAIAAAIQAAAKADAHQADAJAFAFQAFAFAHADQAHACAHAAQAJAAAGgCQAHgDAFgFQAFgFADgJQACgFAAgMQAAgKgCgGQgDgJgFgFQgFgFgHgDQgGgCgJAAQgHAAgHACg");
	this.shape_17.setTransform(-14.9,-25.2,0.9,0.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0EA6E0").s().p("AgHATIgBgCIAEgHIACgIIAAgGIgDgIIgBgEIACgCIAIgDQADAFABAHQABAFgBAFIgDAMQgDAFgEAEg");
	this.shape_18.setTransform(-21.7,-28.8,0.9,0.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0EA6E0").s().p("AguA2IAAhrIAoAAQALAAAKAEQAJAEAIAHQAHAHAEAKQAEAKAAALQAAAMgEAKQgEALgHAGQgHAHgKAEQgKAEgLAAgAgeApIAYAAQAIAAAHgCQAHgDAFgFQAFgHACgHQADgFAAgMQAAgKgDgGQgCgHgFgHQgFgFgHgDQgGgCgJAAIgYAAg");
	this.shape_19.setTransform(-28,-25.2,0.9,0.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0EA6E0").s().p("AAkA2IgDgBIgCgCIg9hPIABAFIAABNIgOAAIAAhrIAIAAIADABIADACIA8BPIAAhSIANAAIAABrg");
	this.shape_20.setTransform(-38.6,-25.2,0.9,0.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0EA6E0").s().p("AAnA2IgEgBIgCgDIgJgZIgvAAIgKAZIgCACIgDACIgMAAIArhrIAPAAIArBrgAgBggIgSAuIAmAAIgSguIgBgGg");
	this.shape_21.setTransform(-48.3,-25.2,0.9,0.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0EA6E0").s().p("AAaA2QgEAAgCgEIgaglIgDgDIgEAAIgLAAIAAAsIgPAAIAAhrIAfAAQAIAAAIADQAIABAFAEQAFAFACAFQACAEAAAIQAAAGgBAFIgFAJIgJAGQgEADgHABQAEACABADIAfAqgAgYgBIAPAAIAKgCIAIgDQADgEACgDQABgEAAgFQAAgJgGgFQgGgEgLAAIgQAAg");
	this.shape_22.setTransform(-56.6,-25.2,0.9,0.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0EA6E0").s().p("AgNAzQgKgEgIgHQgHgIgEgKQgEgLAAgLQAAgMAEgKQAEgKAHgHQAHgHAKgEQALgEALAAIAMABIAKADIAJAEIAHAGIgEAHIgDACIgEgBIgJgGIgIgBIgLgBQgHAAgIACQgIADgEAFQgFAHgDAHQgDAIAAAIQAAAKADAIQADAIAFAFQAFAFAIAEQAHACAJAAIANgBIAGgCIAFgCIAAgYIgQAAIgDAAIgBgCIAAgJIAiAAIAAApQgHAGgKADQgJADgLAAQgMAAgLgEg");
	this.shape_23.setTransform(-66.4,-25.2,0.9,0.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAAAzQgIgDgGgGQgGgGgFgKQgEgJAAgLIgXAAIAAAwIgPAAIAAhrIAPAAIAAAwIAXAAQABgLADgJQAFgKAGgFQAGgHAIgDQAIgEALAAQALAAAJAEQALAGAFAGQAGAHAEAKQADAJAAAMQAAANgDAJQgEAKgGAIQgFAGgLAFQgJAEgLAAQgJAAgKgEgAAFgmQgGAEgEAFQgEAEgCAIQgDAJAAAIQAAAJADAIQACAJAEAFQAEAFAGADQAHADAHAAQAIAAAGgDQAHgDADgFQAFgGACgIQADgIAAgJQAAgIgDgJQgCgHgFgFQgDgGgHgDQgGgDgIAAQgHAAgHADg");
	this.shape_24.setTransform(43.7,-43.2,0.9,0.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgVAzQgKgFgGgGQgHgHgEgLQgEgLAAgLQAAgLAEgKQADgKAIgHQAGgHAKgFQALgEAKAAQALAAALAEQAKAEAHAIQAHAHADAKQAEAJAAAMQAAAOgEAIQgEALgGAHQgHAGgKAFQgLAEgLAAQgKAAgLgEgAgOgmQgHACgFAHQgFAFgDAHQgDAJAAAIQAAAKADAHQADAIAFAGQAFAFAHADQAHADAHAAQAIAAAIgDQAGgDAFgFQAFgGADgIQADgHAAgKQAAgIgDgJQgDgHgFgFQgFgHgGgCQgIgCgIAAQgHAAgHACg");
	this.shape_25.setTransform(31,-43.2,0.9,0.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AglA2IAAhrIAiAAQAHAAAKACQAHACAEAEQAFADACAFQADAHAAAFIgCAIIgDAGIgHAHIgIADQALACAGAGQAGAGAAAKQAAAHgCAFQgDAGgFAEQgFAFgHABQgIADgIAAgAgWAqIAWAAQAGgBAEgBQAGgCABgCQADgCACgEIABgHQAAgJgGgEQgFgFgMAAIgWAAgAgWgFIAcgBIAHgEIAFgGQABgDAAgDQAAgKgFgFQgHgDgKAAIgTAAg");
	this.shape_26.setTransform(21.5,-43.2,0.9,0.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgOAzQgJgEgHgHQgHgHgDgKQgEgLAAgMQAAgKAEgLQAEgMAHgFQAGgHAKgFQALgEAKAAQALAAAJAEQAKAEAGAGIgGAHIgBABIgCABIgDgBIgFgEIgIgDIgLgBQgIAAgGACQgHACgFAHQgEAEgEAIQgCAJAAAIQAAAKADAHQABAGAGAIQAFAFAHADQAFACAIABIAJgBIAHgBIAGgEIAFgDIABgBIACgBIACABIAGAHQgGAIgKAEQgKAEgNAAQgKAAgKgEg");
	this.shape_27.setTransform(12.5,-43.2,0.9,0.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAcA2IABhZIgCAHIgDAGIgwBHIgDADQgBABAAAAQAAAAgBABQgBAAAAAAQgBAAAAAAIgMAAIAAhrIAQAAIAABRIgBAHIADgGIAzhNIACgDQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAIAMAAIAABrg");
	this.shape_28.setTransform(-0.8,-43.2,0.9,0.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgjA2IAAhrIAgAAQAIAAAJADQAIACAEAEQAGAFACAGQACAFAAAJQAAAHgCAHQgDAFgFAFQgFAEgIADQgIACgIAAIgRAAIAAAogAgUABIARAAQAFAAAFgBIAIgDQADgDABgFQACgDAAgFQAAgFgCgEQgBgEgDgDQgDgCgFgCQgFgBgFAAIgRAAg");
	this.shape_29.setTransform(-9.6,-43.2,0.9,0.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AggA2IAAhrIBBAAIAAANIgyAAIAAAjIAoAAIAAALIgoAAIAAAkIAyAAIAAAMg");
	this.shape_30.setTransform(-17.7,-43.2,0.9,0.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgkA2IAAhrIBFAAIAAANIg2AAIAAAhIAVAAQAIAAAIADQAGACAGACQAEAEACAFQADAHAAAGQAAAGgDAHQgCAFgFAFQgFAEgHACQgHADgIAAgAgVAqIAVAAQAFgBAFgBIAGgEIAFgFIABgIIgBgIIgFgGIgGgDIgKgBIgVAAg");
	this.shape_31.setTransform(-25.8,-43.2,0.9,0.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAnA2IAAhrIAPAAIAABrgAg1A2IAAhrIAPAAIAAAuIAVAAQAJAAAIADQAGACAFACQAFAFACAEQACAGAAAHQAAAGgDAHQgCAFgFAFQgEAEgHACQgIADgIAAgAgmAqIAVAAQAGgBAEgBIAHgEIADgFIABgIIgBgIIgDgGIgHgDIgKgBIgVAAg");
	this.shape_32.setTransform(-36.4,-43.2,0.9,0.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AglA2IAAhrIAiAAQAHAAAKACQAHACAEAEQAFADACAFQADAHAAAFIgCAIIgDAGIgHAHIgIADQALACAGAGQAGAGAAAKQAAAHgCAFQgDAGgFAEQgFAFgHABQgHADgJAAgAgWAqIAWAAQAGgBAEgBQAGgCABgCQADgCACgEIABgHQAAgJgGgEQgFgFgMAAIgWAAgAgWgFIAcgBQAGgCABgCIAFgGQABgDAAgDQAAgKgFgFQgHgDgKAAIgTAAg");
	this.shape_33.setTransform(-46.6,-43.2,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text5, new cjs.Rectangle(-70.6,-48.2,141.4,66.5), null);


(lib.text4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDAJIgDgCIgCgDIgBgEIABgDIACgDQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIADgBIAEABIADACIACADIABADIgBAEIgCADIgDACIgEABg");
	this.shape.setTransform(61,33.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AASAmIAAgjIgjAAIAAAjIgOAAIAAhLIAOAAIAAAeIAjAAIAAgeIAOAAIAABLg");
	this.shape_1.setTransform(55,30.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AATAmIAAg1IABgDIgDAFIglAyIgDABIgJAAIAAhLIAPAAIAAA1IgBADIACgFIAlgyIAEgBIAIAAIAABLg");
	this.shape_2.setTransform(46.4,30.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAeAmIAAgwIABgKIgaAsIgCACIgCABIgBAAIgCgBIgCgCIgagsIABAKIAAAwIgNAAIAAhLIAMAAIADAAIACADIAZApIAAAEIADgIIAXglIACgDIADAAIAMAAIAABLg");
	this.shape_3.setTransform(36.8,30.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXA2IAjguIADgEQgFAEgEABIgKABQgEAAgHgCQgGgBgEgFQgDgCgEgHQgCgGAAgGQAAgHADgHQACgGAFgFQAGgEAFgDQAIgCAGgBQAHABAHACQAHADAEAEQAFAGACAFQACAGAAAIIgBAJQgBAGgBADIgEAHIgeAtQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAIgEABgAgHgoQgFACgCACQgCACgCAFQgCAEAAAFQAAAKAGAFQAFAFAJAAQAFAAAEgBIAHgFQACgCACgEIACgIQAAgFgCgEQgBgDgDgEIgHgEIgIgCQgEAAgEACg");
	this.shape_4.setTransform(23.2,28.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMA1IgJgCIgHgDIgGgFIAFgGQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIADABIAFADIAGACQAEABAEABQADgBAGgBQAEgCAEgEQAEgDABgFQABgEAAgGIgBgJIgEgGQgDgCgFgBQgEgCgFAAQgIAAgJADIgJgCIAJg0IAyAAIAAAHQAAADgCACQgCACgEAAIggAAIgFAbIAOgBQAKAAAFACQAFACAGAFQAEAEACAFQADAHAAAGQAAAJgDAHQgDAGgGAFQgFAFgHADQgIACgGAAg");
	this.shape_5.setTransform(14.5,28.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIAQIAAgBIABgDIAFgEIACgFIAAgDIAAAAIgDgBIgDgCIgCgDIgBgDQABgEACgDQADgCADAAIAEABIADABIACAEIAAAFIAAAHIgDAGQgBADgEAEIgFAGg");
	this.shape_6.setTransform(4.8,34.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAMA2IAAgcIguAAIgCgBQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIgBgHIAyhEIAOAAIAABDIAPAAIAAAJIAAACIgDABIgMAAIAAAcgAgYAOIAkAAIABgyg");
	this.shape_7.setTransform(-1.4,28.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAMA2IAAgcIguAAIgCgBQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIgBgHIAyhEIAOAAIAABDIAQAAIAAAJIgBACIgDABIgMAAIAAAcgAgYAOIAkAAIABgyg");
	this.shape_8.setTransform(-10.1,28.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHARIgBgCIACgDIAEgEIACgFQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAAAAIgDgBIgDgCIgCgDIAAgDQAAgFACgCQADgCADAAIAEABIADABIACAEIAAAFIgBAHIgCAGIgFAHIgFAGg");
	this.shape_9.setTransform(-19.8,34.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgOAzQgIgCgFgIQgFgGgDgLQgDgKAAgOQAAgNADgKQADgLAFgHQAFgGAIgEQAGgDAIAAQAJAAAGADQAIAEAFAGQAFAHADALQADAKAAANQAAAOgDAKQgDALgFAGQgFAIgIACQgGAEgJAAQgIAAgGgEgAgIgoQgFADgDAEQgDAEgDAJQgBALAAAJQAAAJABAMQADAJADADQADAGAFACQAEACAEAAQAFAAAEgCQAFgCADgGQADgDACgJQACgIAAgNQAAgMgCgIQgCgJgDgEQgDgEgFgDQgEgCgFAAQgEAAgEACg");
	this.shape_10.setTransform(-25.9,28.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgNA1QgGgCgFgEIgHgJQgDgEgBgHIAGgDIAEgBQABABAAAAQABAAAAAAQABABAAAAQAAABABABIACAEIAEAGIAGAEQAEACAFAAQAGAAAEgCQAEgCACgCQADgDACgEIABgHIgBgIQgBgDgDgCQgDgDgGgCQgFgBgHAAIAAgKQAGAAAEgBQAGgBACgDIAFgFIABgIIgCgIQAAgDgDgDIgGgDQgDgBgFAAQgDAAgDABIgGADIgEAFIgDAHIgCADIgFABIgHgBQAAgIAEgFQADgHAFgDQADgEAHgCQAGgCAGAAQAIAAAFACQAHACADADQAEAEACAFQADAFAAAHQAAAFgCAEQAAADgDAEIgGAFIgIADQALACAFAGQAFAIAAAJQAAAHgDAHQgCAFgFAFIgMAGQgGACgIAAQgIAAgFgCg");
	this.shape_11.setTransform(-34.7,28.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIAQIAAgBIACgDIAEgEIACgFIAAgDIAAAAIgDgBIgDgCIgCgDIgBgDQAAgEADgDQADgCADAAIAEABIADABIACAEIAAAFIgBAHIgDAGQgBADgDAEIgFAGg");
	this.shape_12.setTransform(-44.4,34.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AANA2IAAgcIgvAAIgDgBIgBgDIgBgHIAzhEIANAAIAABDIAPAAIAAAJIAAACIgCABIgNAAIAAAcgAgYAOIAlAAIAAgyg");
	this.shape_13.setTransform(-50.6,28.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgZA2IAAgLIAXAAIAAhGIABgHIgTAQIgCABIgCAAIgCgBIgBgBIgFgGIAggcIALAAIAABgIAWAAIAAALg");
	this.shape_14.setTransform(-59.1,28.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAcA2IAAhKIABgOIgCAGIgEAFIgvBIIgDADQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgLAAIAAhrIAQAAIAABRIgCAIIAEgHIAzhNIACgDQAAgBABAAQAAAAABgBQABAAAAAAQABAAAAAAIAMAAIAABrg");
	this.shape_15.setTransform(63.4,9.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAeA2IgFgCIgCgDIgagnIgFgEIgGgBIgNAAIAAAxIgPAAIAAhrIAPAAIAAAvIALAAIAGgBIACgBIADgDIAagmQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAIAOAAIggAtQgDADgGADIAGADIAGAGIAfAvg");
	this.shape_16.setTransform(53.2,9.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIAhAAQAIAAAJADQAHABAGAGQAFAEACAGQADAGgBAIQABAHgDAHQgDAFgFAEQgGAFgGADQgJACgIAAIgRAAIAAAogAgUACIARAAIAKgCQAEgBAEgDQADgDABgEQACgDAAgFQAAgFgCgEQgBgEgDgDQgDgCgFgCQgEgBgGgBIgRAAg");
	this.shape_17.setTransform(43.5,9.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAcA2IAAhKIABgOIgDAGIgCAFIgxBIIgDADQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgMAAIAAhrIAPAAIAABRIAAAIIACgHIA0hNIACgDQABgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAMAAIAABrg");
	this.shape_18.setTransform(32.8,9.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgHA2IAAheIgiAAIAAgNIBTAAIAAANIgiAAIAABeg");
	this.shape_19.setTransform(22.6,9.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgOAzQgJgEgHgIQgGgGgFgLQgDgKAAgMQAAgLAEgLQAEgKAHgHQAGgGALgFQAKgEAKAAQALAAAJAEQAJAEAHAGIgGAHIgBABIgBAAIgEAAIgFgEIgIgDQgFgBgGgBQgIAAgGADQgGACgGAGQgFAGgDAIQgCAGAAAKQAAALACAHQADAHAFAGQAEAEAIAEQAFADAJgBIAIAAIAHgCIAFgCIAIgGIABAAIACABIAGAHQgGAHgKAFQgJAEgNAAQgKAAgLgEg");
	this.shape_20.setTransform(13.3,9.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAcBDIAAhRIABgHIgGAMIgyBLQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgMAAIAAhrIAQAAIgBBZIADgHIAyhNIADgDQABAAAAgBQAAAAABAAQABgBAAAAQABAAAAAAIAMAAIAABrgAgOgzQgGgDAAgIIAAgDQABAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAIAIAAIABAGQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIAEADIAEAAIAFAAIADgDIACgDIAAgGIAJAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAIABADQAAAIgGADQgGAFgKAAQgKAAgFgFg");
	this.shape_21.setTransform(-1.4,8.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgVAzQgKgFgHgHQgGgGgFgLQgDgJAAgNQAAgMADgJQAFgKAGgIQAHgGAKgFQALgEAKAAQALAAALAEQAKAFAGAGQAIAIADAKQAEAKAAALQAAAMgEAKQgEALgHAGQgGAHgKAFQgLAEgLAAQgKAAgLgEgAgPgmQgGACgFAGQgFAGgDAIQgDAIAAAIQAAAKADAIQADAIAFAFQAFAFAGADQAIACAHAAQAJAAAGgCQAGgDAGgFQAFgFADgIQACgJAAgJQAAgIgCgIQgDgIgFgGQgGgGgGgCQgGgDgJAAQgHAAgIADg");
	this.shape_22.setTransform(-13.1,9.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgjA2IAAhrIAgAAQAIAAAJADQAIACAEAFQAGAEACAGQACAFAAAJQAAAJgCAFQgCAFgGAEQgFAFgIADQgIACgIAAIgRAAIAAAogAgUACIARAAQAFgBAFgBIAIgEQADgCABgFQACgDAAgFQAAgFgCgEQgBgEgDgDQgDgCgFgCQgFgBgFgBIgRAAg");
	this.shape_23.setTransform(-23.2,9.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgHA2IAAheIgiAAIAAgNIBTAAIAAANIgiAAIAABeg");
	this.shape_24.setTransform(-32.6,9.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgOAzQgJgEgHgIQgHgGgEgLQgDgKAAgMQAAgLAEgLQAEgKAGgHQAHgGAKgFQALgEAKAAQAKAAAKAEQAJAEAHAGIgFAHIgCABIgCAAIgDAAIgFgEIgIgDQgFgBgGgBQgIAAgGADQgFACgHAGQgEAGgDAIQgDAGAAAKQAAALADAHQACAHAGAGQAEAEAHAEQAGADAIgBIAHAAIAHgCIAHgCIAHgGIABAAIACABIAGAHQgGAHgKAFQgJAEgOAAQgJAAgLgEg");
	this.shape_25.setTransform(-41.9,9.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAnA2IAAhrIAPAAIAABrgAg1A2IAAhrIAPAAIAAAuIAVAAQAJAAAIADQAGACAFADQAFADACAGIACALQAAAHgDAHQgDAGgEAEQgEAEgHACQgIADgIAAgAgmApIAVAAQAGABAEgCIAHgDIADgGIABgIIgBgIIgDgFIgHgFIgKgBIgVAAg");
	this.shape_26.setTransform(-53.9,9.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIBFAAIAAAMIg1AAIAAAiIAUAAQAIAAAIADQAHACAFADQAEADADAGQACAFAAAGQAAAJgDAFQgCAFgFAFQgFAEgHACQgIADgHAAgAgUApIAUAAQAFABAEgCQAGgCABgBQAEgEAAgCIACgIIgCgIQgBgDgDgCQgCgDgFgCIgdgBg");
	this.shape_27.setTransform(-64.9,9.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AArA2IAAhUIgkBBIgCADIgEABIgBAAQgDAAgDgEIglhBIABAEIAABQIgNAAIAAhrIALAAIADABIADACIAkBAIACAIIAohIIACgCIADgBIALAAIAABrg");
	this.shape_28.setTransform(35.9,-9.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AArA2IAAhQIAAgEIgkBBIgCADIgEABIgBAAQgDAAgCgEIglhBIAAAEIAABQIgNAAIAAhrIALAAIADABQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABIAlBAIACAIIAEgIIAkhAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAIADgBIALAAIAABrg");
	this.shape_29.setTransform(21.9,-9.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAnA2IgEgBIgCgDIgJgZIgvAAIgKAZIgCACIgDACIgMAAIArhrIAPAAIArBrgAgBggIgSAuIAmAAIgTg0g");
	this.shape_30.setTransform(9.9,-9.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgjA2IAAhrIAgAAQAIAAAIADQAHABAGAGQAFAEADAGQACAHAAAHQAAAHgDAHQgCAFgFAFQgGAEgHADQgIACgIAAIgRAAIAAAogAgUACIARAAQAFAAAEgCQAGgBACgCQAEgEABgEQACgDAAgFQAAgFgCgEQgBgDgEgEQgCgCgFgCIgKgBIgRAAg");
	this.shape_31.setTransform(1.5,-9.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AggA2IAAhrIBBAAIAAANIgxAAIAABeg");
	this.shape_32.setTransform(-7,-9.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgVAzQgKgFgHgGQgGgHgFgLQgDgJAAgNQAAgMADgJQAFgKAGgIQAHgGAKgFQALgEAKAAQALAAALAEQAKAFAHAGQAHAJADAJQAEAKAAALQAAAMgEAKQgEALgGAHQgHAGgKAFQgLAEgLAAQgKAAgLgEgAgPgmQgGADgFAFQgFAFgDAJQgDAIAAAIQAAAKADAHQADAJAFAFQAFAFAGADQAIACAHAAQAJAAAGgCQAGgDAGgFQAFgFADgJQACgFAAgMQAAgKgCgGQgDgJgFgFQgGgFgGgDQgGgCgJAAQgHAAgIACg");
	this.shape_33.setTransform(-17.6,-9.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgjA2IAAhrIAgAAQAIAAAJADQAIACAEAFQAGAEACAGQACAFAAAJQAAAIgCAGQgCAFgGAFQgFAEgIADQgIACgIAAIgRAAIAAAogAgUACIARAAQAFAAAFgCIAIgDQADgEABgEQACgDAAgFQAAgFgCgEQgBgEgDgDQgDgCgFgCQgFgCgFABIgRAAg");
	this.shape_34.setTransform(-27.7,-9.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAaA2IAAheIgzAAIAABeIgQAAIAAhrIBTAAIAABrg");
	this.shape_35.setTransform(-38.2,-9.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgjA2IAAhrIAgAAQAIAAAJADQAIACAEAEQAGAFACAGQACAFAAAJQAAAIgCAGQgCAFgGAFQgFAFgIACQgIACgIAAIgRAAIAAAogAgUACIARAAQAFAAAFgCQAFAAADgDQADgEABgEQACgDAAgFQAAgFgCgEQgBgEgDgDQgDgCgFgCQgFgCgFABIgRAAg");
	this.shape_36.setTransform(65.1,-28.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgVAzQgKgFgGgGQgHgHgEgLQgEgKAAgMQAAgLAEgKQADgKAIgHQAGgHAKgFQALgEAKAAQALAAALAEQALAGAGAGQAGAHAFAKQADAJAAAMQAAANgDAJQgFALgGAHQgGAGgLAFQgLAEgLAAQgKAAgLgEgAgOgmQgGADgGAFQgGAHgCAGQgCAIAAAJQAAAMACAFQACAHAGAHQAGAGAGACQAHACAHAAQAIAAAIgCQAGgCAFgGQAFgGADgIQADgHAAgKQAAgIgDgJQgDgIgFgFQgFgFgGgDQgIgCgIAAQgHAAgHACg");
	this.shape_37.setTransform(54.1,-28.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIBFAAIAAANIg2AAIAAAhIAVAAQAIAAAIADQAHACAFACQAEAEACAFQADAHAAAGQAAAGgDAHQgCAFgFAFQgFAEgHACQgIADgIAAgAgVApIAUAAQAHAAADgBQAFgBACgDQADgDABgCIACgIIgBgIIgFgGIgHgDIgJgBIgVAAg");
	this.shape_38.setTransform(43.9,-28.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAnA2IAAhrIAPAAIAABrgAg1A2IAAhrIAPAAIAAAuIAVAAQAIAAAJADQAFABAGADQAEAEACAFQADAHAAAGQAAAGgDAHQgCAFgFAFQgFAEgGACQgJADgHAAgAgmApIAVAAQAGAAAEgBIAHgEIADgFIABgIIgBgIIgDgGIgHgDIgKgBIgVAAg");
	this.shape_39.setTransform(32,-28.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AglA2IAAhrIAjAAQAGAAAKACQAHADAEADQAFADADAFQABAFAAAIIgBAHQgBAEgCACIgGAHIgJADQALABAHAHQAFAGABAKQgBAIgDAEQgBAGgGAEQgEAFgIABQgIADgIAAgAgWApIAWAAQAGAAAEgBQAFgCACgCQAEgDABgDQABgDAAgEQAAgJgGgEQgFgFgMAAIgWAAgAgWgFIAdgBIAHgEIAEgFQABgEAAgDQAAgKgFgFQgGgDgKAAIgUAAg");
	this.shape_40.setTransform(20.7,-28.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAcBDIAAhKIABgOIgCAGIgDAGIgwBHIgDAEQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgMAAIAAhrIAQAAIAABRIgBAIIADgHIAzhNIACgDQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAIAMAAIAABrgAgPgzQgGgDAAgIIABgDIACgBIAJAAIAAAGIACADIADADIAFAAIAFAAIADgDIACgDIAAgGIAJAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAIABADQAAAIgGADQgGAFgKAAQgKAAgGgFg");
	this.shape_41.setTransform(6,-29.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAdA2IAAhRIAAgIIgGANIgvBHQgBABAAAAQAAABgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgLAAIAAhrIAQAAIgBBYIADgGIAzhNIADgDQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAMAAIAABrg");
	this.shape_42.setTransform(-5.4,-28.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAdA2QAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBIgEgDIgagnIgEgEIgHgBIgMAAIAAAxIgQAAIAAhrIAQAAIAAAvIALAAIAGgBIACgCIAcgnIAEgDQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIANAAIgfAsQgEAFgFACQACABAEACIAmA1g");
	this.shape_43.setTransform(-15.6,-28.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgVAzQgKgFgGgGQgHgHgEgLQgEgKAAgMQAAgLAEgKQADgKAIgHQAGgHAKgFQALgEAKAAQALAAALAEQALAGAGAGQAGAHAFAKQADAJAAAMQAAANgDAJQgFALgGAHQgGAGgLAFQgLAEgLAAQgKAAgLgEgAgOgmQgGADgGAFQgGAHgCAGQgCAIAAAJQAAAMACAFQACAHAGAHQAGAGAGACQAHACAHAAQAIAAAIgCQAGgCAFgGQAFgGADgIQADgHAAgKQAAgIgDgJQgDgIgFgFQgFgFgGgDQgIgCgIAAQgHAAgHACg");
	this.shape_44.setTransform(-27.3,-28.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgjA2IAAhrIAgAAQAIAAAJADQAGACAHAEQAFAFACAGQACAHABAHQgBAHgCAHQgDAFgFAFQgGAFgHACQgIACgIAAIgRAAIAAAogAgUACIARAAQAFAAAEgCQAGAAACgDIAGgIQABgDAAgFQAAgFgBgEQgCgEgEgDQgCgCgFgCQgFgCgFABIgRAAg");
	this.shape_45.setTransform(-37.4,-28.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAcA2IABhZIgFANIgwBHIgDADIgEACIgMAAIAAhrIAQAAIgBBYIADgGIAyhNIADgDQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAMAAIAABrg");
	this.shape_46.setTransform(-48.1,-28.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AhDA2IAAhrIAQAAIAABeIAsAAIAAheIAPAAIAABeIAsAAIAAheIAPAAIAABrg");
	this.shape_47.setTransform(-61.9,-28.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text4, new cjs.Rectangle(-68.7,-36.2,137.5,72.5), null);


(lib.text3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAcAmIABg2IgXApQgBADgEAAIgBAAQgEAAgBgDIgXgpIABANIAAApIgRAAIAAhLIAQAAIADABQABAAAAAAQABAAAAAAQABABAAAAQAAABABAAIAUAlIABAFIACgFIAUglIADgCIAEgBIAQAAIAABLg");
	this.shape.setTransform(63.7,22);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKAlQgHgCgEgGQgFgFgCgHQgEgIAAgJQAAgHADgIQACgGAFgGQAGgGAGgDQAHgDAIAAQAJAAAGADQAGACAGAGIgFAHIgBABIgDABIgDgBIgDgCIgFgCIgGgBQgDAAgEACQgEACgCADQgDAEgBAEQgCAFAAAFQAAAGACAFIAEAIQACADAEACIAHABIAHgBIAFgCIACgCIAEgBQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAIAGAHIgHAGIgIAEIgIACIgIABQgGAAgGgDg");
	this.shape_1.setTransform(54.8,22);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAMA2IAAgaIgtAAIgDgBIgDgDIgCgJIAzhEIASAAIAABDIANAAIAAAKIgBADIgCABIgKAAIAAAagAgVAOIAhAAIAAgug");
	this.shape_2.setTransform(42.9,20.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNA2QgGgCgEgEQgFgDgDgGIgGgMIAIgDQAEgCADAAIAEAEQAAACADADIADAFIAGACQADACADAAQAFAAAEgCIAFgDIAEgGIABgHIgBgGQgBgEgCgCQgDgCgFgBQgDgBgJAAIAAgNIAKgBQAGgCABgBIAEgGIACgGQAAgHgFgFQgFgEgGAAIgGABIgEADIgEADIgCAGQgCADgBABQgDACgDgCIgKgBQABgJADgEQADgGAFgEQAFgFAGgCQAGgBAHAAQAFAAAIABQAGADAFAEQAEADACAGQADAGAAAFQAAAFgCAEQAAADgDAEIgGAEQgCACgFACQAKACAFAGQAEAHABAJQAAAIgEAGQgDAHgEAEQgHAFgGABQgHADgGgBQgJAAgFgBg");
	this.shape_3.setTransform(34.3,20.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHA2IAAheIgiAAIAAgNIBTAAIAAANIgiAAIAABeg");
	this.shape_4.setTransform(18,20.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgVAzQgKgFgGgGQgIgIgDgKQgEgKAAgMQAAgKAEgLQAEgLAHgHQAHgHAJgEQALgEAKAAQALAAALAEQAKAEAHAHQAGAHAFALQADAKAAALQAAANgDAJQgFAKgGAIQgGAGgLAFQgLAEgLAAQgKAAgLgEgAgOgmQgHADgFAFQgFAFgDAJQgCAGAAAKQAAALACAGQADAJAFAFQAFAFAHADQAHACAHAAQAJAAAHgCQAHgEAEgEQAFgFADgJQADgHAAgKQAAgJgDgHQgDgJgFgFQgEgFgHgDQgIgDgIABQgHgBgHADg");
	this.shape_5.setTransform(8,20.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAcA2IAAgxIg3AAIAAAxIgQAAIAAhrIAQAAIAAAwIA3AAIAAgwIAQAAIAABrg");
	this.shape_6.setTransform(-7.6,20.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAdA2IAAhRIABgIIgEAHIgyBNIgEADQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgMAAIAAhrIAPAAIAABZIACgHIAEgFIAvhIIAEgDQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAMAAIAABrg");
	this.shape_7.setTransform(-19,20.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhCA2IAAhrIAPAAIAABfIAsAAIAAhfIAPAAIAABfIAsAAIAAhfIAPAAIAABrg");
	this.shape_8.setTransform(-32.9,20.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAnA2IgEgBIgCgDIgJgZIgvAAIgKAZIgCADIgDABIgMAAIArhrIAPAAIArBrgAgCgbIgRApIAmAAIgTg0g");
	this.shape_9.setTransform(-46,20.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AArA2IAAhUIgkBBIgDADIgCABIgCAAQgDAAgCgEIglhBIAAAEIAABQIgOAAIAAhrIAMAAIADABIACACIAkBAIADAIIAohIIABgCIAEgBIAMAAIAABrg");
	this.shape_10.setTransform(-58.1,20.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAgA2IgCgBIgCgCIgcgsIgBADIgbApIgCACIgCABIgPAAIAlg2Igjg1IAPAAIACABIACABIAaArIACgCIAAgCIAagmQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAIAPAAIgkA0IAlA3g");
	this.shape_11.setTransform(78.2,1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAcA2IAAhRIABgIIgCAHIg0BNIgCADQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgLAAIAAhrIAQAAIgBBZIACgHIADgFIAxhIIACgDQABgBAAAAQABAAAAAAQABgBAAAAQABAAABAAIALAAIAABrg");
	this.shape_12.setTransform(67.5,1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAeA2IgFgBIgCgEIgbgnIgEgEQgCgBgEAAIgNAAIAAAxIgQAAIAAhrIAQAAIAAAvIALAAIAGgBIACgCIAdgnIADgDQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAOAAIghAsQgEAGgEACQADABADABIAFAHIAgAug");
	this.shape_13.setTransform(57.4,1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgVAzQgJgDgHgIIAEgHIACgBIACgBIACABIAHAFIAFACIAHACIAIABQAKAAAHgFQAGgGAAgKIgBgHIgFgGQgCgCgFgCQgFgBgFAAIgOAAIAAgLIAOAAQAEAAAEgCIAHgDIAEgFQABgDAAgEIgBgHQgBgDgDgCIgHgDIgIgBIgKABIgQAHIgCAAIgBgCIgEgIQAGgFAIgDQAJgDAKAAQAIAAAGACQAHADAEADQAFADACAFQADAGAAAGQAAAHgEAHQgEAGgHADIAHAEIAGAFIAEAHIABAIQAAAHgDAGQgCAHgFAEQgGAFgHACQgHADgIAAQgMAAgJgEg");
	this.shape_14.setTransform(47.1,1.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgZA1QAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAgJIAFAAIAEgBIAEgBIADgDIAIgPIgrhMIAOAAIADABIACADIAaAwIAEAJIACgFIAYg0IACgDIADgBIANAAIgsBdIgDAHQgCADgDACIgGACIgHABg");
	this.shape_15.setTransform(38.5,1.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIAhAAQAIAAAJADQAGACAGAFQAFAEADAGQADAHAAAHQgBAIgDAGQgCAFgFAFQgEAEgJADQgIACgIAAIgRAAIAAAogAgUACIARAAQAFAAAEgCQAGAAACgDIAGgHQABgEAAgFIgBgJQgCgEgEgDQgDgDgEgBQgFgCgFAAIgRAAg");
	this.shape_16.setTransform(29.7,1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AggA2IAAhrIBBAAIAAANIgyAAIAAAjIAoAAIAAALIgoAAIAAAjIAyAAIAAANg");
	this.shape_17.setTransform(20.7,1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAaA2IAAhfIgzAAIAABfIgQAAIAAhrIBTAAIAABrg");
	this.shape_18.setTransform(10.5,1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgZA1QAAAAgBAAQAAAAAAAAQAAgBgBAAQAAgBAAAAIAAgJIAFAAIAEgBIAEgBIADgDIAIgPIgrhMIAOAAIADABIACADIAaAwIAEAJIACgFIAYg0IACgDIADgBIANAAIgsBdIgDAHIgFAFIgGACIgHABg");
	this.shape_19.setTransform(0.3,1.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgOAzQgLgFgFgHQgHgHgEgKQgDgJAAgNQAAgLAEgLQAEgKAGgHQAJgIAIgDQAJgEAMAAQALAAAJAEQAIADAHAGIgFAIIgBABIgCAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAIgFgDQgDgCgFgCIgMgBQgHABgGACQgHADgFAFQgFAGgDAIQgCAIAAAIQAAAJACAJQAEAIAEAEQAFAHAHABQAGADAHAAIAJAAIAGgCIAGgCIAGgFIABgBIACAAIACABIAGAGQgGAJgKADQgJAFgOAAQgKAAgKgEg");
	this.shape_20.setTransform(-9.3,1.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAcA2IAAhRIABgIIgCAHIgzBNIgDADIgEACIgMAAIAAhrIAQAAIgBBZIADgHIACgFIAxhIIACgDQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAMAAIAABrg");
	this.shape_21.setTransform(-24,1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAgA2IgCgBIgCgCIgcgsIAAABIgeAtIgCABIgPAAIAlg2Igjg1IAPAAIADABIABABIAbArIAAgCIABgCIAagmQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAOAAIgjA0IAlA3g");
	this.shape_22.setTransform(-38.5,1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAdA2IAAhZIgDAHIgyBNIgEADQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgMAAIAAhrIAPAAIAABRIgBAIIAHgMIAvhIIAEgDQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAMAAIAABrg");
	this.shape_23.setTransform(-49.1,1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAeA2IgEgBIgDgEIgbgnQgCgDgCgBQgCgBgEAAIgNAAIAAAxIgPAAIAAhrIAPAAIAAAvIALAAIAGgBIACgCIAdgnIADgDQAAgBABAAQAAAAAAAAQABgBABAAQAAAAABAAIANAAIggAsQgEAGgFACQAEABACABQADADACAEIAgAug");
	this.shape_24.setTransform(-59.3,1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgVAzQgKgEgGgHIAEgHQAAAAABAAQAAAAAAgBQAAAAAAAAQABAAAAAAIACgBIADABIAHAFIAEACIAHACIAIABQALAAAGgFQAHgGgBgKIgBgHIgEgGQgDgCgFgCQgEgBgGAAIgOAAIAAgLIAOAAQAEAAAEgCQAFgBABgCIAFgFQACgDgBgEQABgEgCgDIgEgFIgHgDIgIgBIgKABIgPAHIgCAAIgCgCIgEgIQAFgEAKgEQAIgDAKAAQAIAAAGACQAGACAGAEQAEADACAFQADAFAAAHQAAAIgEAGQgDAGgIADIAIAEIAFAFIAEAHIABAIQAAAHgCAGQgEAHgEAEQgGAFgGACQgIADgIAAQgLAAgKgEg");
	this.shape_25.setTransform(-69.5,1.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgYA1QgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgJIAFAAIAEgBIAEgBIADgDIADgEIAFgLIgrhMIAOAAIADABIADADIAZAwIAEAJIAEgJIAWgwIACgDIAEgBIAMAAIgsBdIgDAHQgCAEgEABQgBACgEAAIgHABg");
	this.shape_26.setTransform(-78.1,1.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgjA2IAAhrIAgAAQAIAAAIADQAHACAHAFQAEAEADAGQACAHAAAHQAAAIgCAGQgCAFgGAFQgEAEgJADQgIACgIAAIgRAAIAAAogAgUACIARAAQAFAAAFgCQAFAAADgDQACgDACgEQACgEAAgFIgCgJIgEgHQgDgDgFgBIgKgCIgRAAg");
	this.shape_27.setTransform(65.2,-17.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgVAzQgLgFgGgHQgHgHgEgKQgDgLAAgLQAAgKADgMQAFgKAGgGQAIgIAJgEQAJgEAMAAQAMAAAKAEQAJADAHAJQAIAHADAJQAFAMAAAKQAAALgFALQgCAJgJAIQgGAHgKAFQgLAEgLAAQgKAAgLgEgAgPgmQgGADgFAGQgFAEgDAIQgCAJAAAIQAAAIACAKQADAHAFAFQAEAGAHACQAIADAHABQAJgBAGgDQAHgCAGgGQAEgFADgHQACgKABgIQgBgIgCgJQgDgIgEgEQgGgGgHgDQgFgDgKAAQgJAAgGADg");
	this.shape_28.setTransform(54.2,-17.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIBFAAIAAAMIg1AAIAAAiIAUAAQAGAAAKACQAHACAFAEQAEADACAGQADAGAAAFQAAAHgDAHQgDAGgEAEQgHAFgFACQgHACgIAAgAgUAqIAUAAQAFAAAEgCQAGgCABgCIAFgFIABgIIgBgIIgFgGIgHgDIgJgBIgUAAg");
	this.shape_29.setTransform(43.9,-17.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAnA2IAAhrIAPAAIAABrgAg1A2IAAhrIAPAAIAAAuIAVAAQAIAAAJACQAHADAEADQAFAEACAFQACAEAAAHQAAAHgDAHQgDAHgEADQgGAFgFACQgGACgKAAgAgmAqIAVAAQAGAAAEgCIAHgEIADgFIABgIIgBgIIgDgGIgHgDIgKgBIgVAAg");
	this.shape_30.setTransform(32,-17.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AglA2IAAhrIAiAAQAKAAAHACQAIADADADQAFADACAGQADAGAAAGIgCAHIgDAHIgHAFIgIAFQAMABAFAGQAGAGAAAKQAAAGgCAHQgEAGgEADQgFAEgHADQgGACgKAAgAgWAqIAWAAIAKgCQAFgBACgDQADgCACgEIABgHQAAgIgGgFQgGgFgLAAIgWAAgAgWgFIATAAQAFAAAEgBQAEgBADgDQADgCACgDQABgDAAgFQAAgJgFgEQgGgFgLAAIgTAAg");
	this.shape_31.setTransform(20.7,-17.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAdBDIAAhZIgCAHIgEAGIgvBIIgDACQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgLAAIAAhrIAQAAIAABSIgCAHIAGgMIAxhIIADgDQAAAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAIAMAAIAABrgAgPgzQgGgDAAgIIABgDIACgBIAJAAIAAAFIACAFIADACIAFABIAEgBIAEgCIACgFIABgFIAIAAIACABIAAADQABAIgGADQgGAFgKAAQgJAAgHgFg");
	this.shape_32.setTransform(6,-19.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgUAzQgLgEgGgIQgIgHgDgKQgEgLAAgLQAAgKAEgMQAEgKAHgGQAHgJAKgDQAIgEAMAAQANAAAJAEQAKADAHAJQAHAHAEAJQADALAAALQAAANgDAJQgDAJgIAIQgGAIgLAEQgLAEgLAAQgKAAgKgEgAgOgmQgHADgFAGQgFAEgDAIQgCAJAAAIQAAAIACAKQADAHAFAFQAFAGAHACQAHADAHABQAJgBAHgDQAHgDAEgFQAFgEADgIQADgKAAgIQAAgIgDgJQgDgIgFgEQgEgGgHgDQgGgDgKAAQgJAAgFADg");
	this.shape_33.setTransform(-5.8,-17.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AhDA2IAAhrIAQAAIAABfIAsAAIAAhfIAOAAIAABfIAtAAIAAhfIAQAAIAABrg");
	this.shape_34.setTransform(-19.8,-17.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIAQAAIAAAuIAUAAQAGAAAKACQAIADAEADQAFAEACAFQACAGAAAFQAAAHgCAHQgDAGgFAEQgGAFgGACQgGACgJAAgAgUAqIAUAAQAFAAAFgCQAEgCADgCIADgFIABgIIgBgIIgDgGIgHgDIgKgBIgUAAg");
	this.shape_35.setTransform(-32,-17.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgtA1QAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAgKIAFAAIAGgBQADAAADgFQACgCADgIIAEgRQACgIABgQIADgmIA/AAIAABrIgQAAIAAheIghAAQAAAUgDAQIgEAZQgEAOgCADQgDAGgEAFQgEAEgEABQgFACgFAAg");
	this.shape_36.setTransform(-43.2,-17.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgVAzQgKgEgHgIQgHgHgDgKQgEgJAAgNQAAgMAEgKQAEgKAGgGQAIgJAJgDQAJgEAMAAQANAAAJAEQAJADAIAJQAGAGAEAKQAEAMAAAKQAAALgEALQgDAKgHAHQgHAIgKAEQgLAEgLAAQgKAAgLgEgAgPgmQgHADgEAGQgFAEgDAIQgDAIAAAJQAAAJADAJQADAHAFAFQAEAFAHADQAIADAHABQAJgBAGgDQAHgCAFgGQAFgFADgHQACgIAAgKQAAgKgCgHQgDgIgFgEQgGgHgGgCQgFgDgKAAQgIAAgHADg");
	this.shape_37.setTransform(-53.7,-17.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIBFAAIAAAMIg2AAIAAAiIAVAAQAHAAAJACQAIADAEADQAFAEACAFQACAEAAAHQAAAJgDAFQgCAGgFAEQgGAFgGACQgGACgJAAgAgVAqIAVAAQAFAAAEgCQAFgBACgDIAFgFQABgEAAgEQAAgFgBgDQgBgCgEgEIgHgDIgJgBIgVAAg");
	this.shape_38.setTransform(-64,-17.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text3, new cjs.Rectangle(-82.8,-25.9,165.8,52), null);


(lib.text2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjA2IAAhrIAgAAQALAAAGADQAIACAEAEQAGAFACAGQACAFAAAJQAAAIgCAGQgCAFgGAEQgFAFgIACQgGADgKAAIgRAAIAAAogAgUACIARAAQAFAAAFgCIAIgDQADgDABgEIACgJQAAgFgCgEQgCgFgCgCQgDgDgFgBQgFgCgFAAIgRAAg");
	this.shape.setTransform(62.7,20.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggA2IAAhrIBBAAIAAANIgyAAIAAAiIAoAAIAAAMIgoAAIAAAjIAyAAIAAANg");
	this.shape_1.setTransform(53.7,20.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIAQAAIAAAuIAUAAQAKAAAGACQAHADAEACQAFAEADAGQACAGAAAFQAAAIgDAGQgDAGgEAEQgEADgIAEQgGACgJAAgAgUApIAUAAIAJgBQAEgBADgDQAEgCAAgEQABgDAAgEQAAgFgBgDQAAgDgEgDIgHgDQgEgCgFAAIgUAAg");
	this.shape_2.setTransform(45,20.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgjA2IAAhrIAgAAQALAAAGADQAIACAEAEQAGAFACAGQACAFAAAJQAAAGgCAIQgDAFgFAEQgFAFgIACQgGADgKAAIgRAAIAAAogAgUACIARAAIAKgCIAIgDQADgDABgEIACgJQAAgFgCgEQgCgFgCgCQgDgDgFgBQgFgCgFAAIgRAAg");
	this.shape_3.setTransform(35.8,20.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggA2IAAhrIBBAAIAAANIgyAAIAAAiIAoAAIAAAMIgoAAIAAAjIAyAAIAAANg");
	this.shape_4.setTransform(26.9,20.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHA2IAAheIgiAAIAAgNIBTAAIAAANIgiAAIAABeg");
	this.shape_5.setTransform(17.8,20.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAdA2IAAgxIg5AAIAAAxIgPAAIAAhrIAPAAIAAAwIA5AAIAAgwIAPAAIAABrg");
	this.shape_6.setTransform(7.6,20.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAcA2IABhZIgFAMIgwBIIgDADQgBABAAAAQgBAAAAAAQAAABgBAAQgBAAAAAAIgMAAIAAhrIAQAAIAABRIgBAIIAGgMIAyhLIAEgCIAMAAIAABrg");
	this.shape_7.setTransform(-3.9,20.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhCA2IAAhrIAPAAIAABfIAsAAIAAhfIAOAAIAABfIAtAAIAAhfIAQAAIAABrg");
	this.shape_8.setTransform(-21.5,20.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAnA2IgDgBIgCgDIgKgZIgvAAIgJAZIgCADIgEABIgMAAIArhrIAPAAIArBrgAgTAOIAnAAIgRgqIgDgKg");
	this.shape_9.setTransform(-34.7,20.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AglA2IAAhrIAjAAQAKAAAGACQAHACAFAEQAFAEACAFQACAEAAAHIgBAIIgEAHQgDADgDACIgJAEQALABAGAHQAGAHAAAJQAAAIgCAFQgDAGgFADQgFAFgHACQgGACgKAAgAgWApIAWAAIALgBIAHgEIAEgGIABgHQAAgJgGgEQgFgFgMAAIgWAAgAgWgFIATAAQAFAAAEgBQAFgCADgCQADgCABgDIABgIQAAgJgFgEQgFgFgLAAIgUAAg");
	this.shape_10.setTransform(-44.2,20.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AglA2IAAhrIAjAAQAJAAAHACQAHACAFAEQAEADADAGQACAEAAAHIgBAIIgEAHIgGAFIgJAEQALACAHAGQAFAHAAAJQABAGgDAHQgEAGgEADQgGAFgFACQgHACgKAAgAgWApIAWAAIAKgBQAFgBADgDQADgDAAgDIACgHQAAgJgFgEQgHgFgLAAIgWAAgAgWgFIATAAQAFAAAFgBIAGgEQAEgCABgDIABgIQAAgJgFgEQgGgFgKAAIgUAAg");
	this.shape_11.setTransform(-57.7,20.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAcA2IAAguIgPAAIgDAAIgDACIgDACIgZAkIgEAEQgCACgEAAIgMAAIAbgnQAFgHAHgDQgIgBgEgDQgFgBgDgEIgEgIQgCgFAAgFQAAgGACgHQAEgGAEgDQAFgEAHgDQAGgCAJAAIAkAAIAABrgAgCgnQgFACgCACQgDACgBADIgCAIIACAIIADAGQADACAFABQADACAGAAIAVAAIAAgmIgVAAQgGAAgDACg");
	this.shape_12.setTransform(82,1.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgOAzQgJgEgHgHQgHgIgDgKQgEgLAAgLQAAgLAEgKQADgKAIgIQAGgHAKgEQAKgEALAAQALAAAJAEQAJAEAGAGIgGAIIgCABIgDgCIgFgDQgDgCgFgBQgFgCgGAAQgIAAgGADQgIAEgEAEQgEAFgEAIQgCAJAAAIQAAAKADAIQACAIAFAFQAFAFAHADQAGADAHAAIAJgBIAHgCIAGgDIAFgEIABgBIACAAIACABIAGAHQgGAHgKAFQgJAEgOAAQgLAAgJgEg");
	this.shape_13.setTransform(72.8,1.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgHA2IAAheIgiAAIAAgNIBTAAIAAANIgiAAIAABeg");
	this.shape_14.setTransform(63.7,1.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AggA2IAAhrIBBAAIAAANIgyAAIAAAiIAoAAIAAAMIgoAAIAAAjIAyAAIAAANg");
	this.shape_15.setTransform(55.3,1.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhCA2IAAhrIAPAAIAABfIAsAAIAAhfIAPAAIAABfIAsAAIAAhfIAPAAIAABrg");
	this.shape_16.setTransform(42.5,1.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAcA2IAAhRIABgIIgFAMIgxBIQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgLAAIAAhrIAQAAIgBBZIACgHIADgFIAxhIQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAQABAAABAAIALAAIAABrg");
	this.shape_17.setTransform(28.7,1.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAaA2IAAhfIgzAAIAABfIgQAAIAAhrIBTAAIAABrg");
	this.shape_18.setTransform(17.4,1.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgmA2IAAhrIAjAAQAKAAAHACQAGACAGAEQAEAEACAFQACAEABAHIgCAIIgEAHQgCADgEACIgJAEQAMABAGAHQAHAHgBAJQAAAHgCAGQgDAFgEAEQgHAFgFACQgHACgKAAgAgWApIAWAAIALgBIAHgEQADgDAAgDIACgHQAAgJgFgEQgHgFgLAAIgWAAgAgWgFIATAAQAFAAAEgBQAFgCACgCQADgCACgDIACgIQAAgJgHgEQgEgFgMAAIgTAAg");
	this.shape_19.setTransform(7.3,1.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgVAzQgIgDgJgIQgHgIgEgJQgDgLAAgMQAAgLADgKQAEgJAHgJQAJgIAIgCQAKgFALAAQAMAAAKAFQAJADAHAHQAHAIAEAKQAEALAAAKQAAAMgEALQgEAKgHAHQgHAHgJAEQgJAEgNAAQgMAAgJgEgAgPgmQgHAEgEAEQgGAGgCAIQgDAJAAAHQAAAJADAIQADAIAFAGQAEAEAHAEQAHACAIAAQAKAAAFgCQAIgEAEgEQAFgGADgIQACgIAAgJQAAgHgCgJQgDgHgFgHQgFgEgHgEQgGgCgJAAQgHAAgIACg");
	this.shape_20.setTransform(-7.7,1.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAdA2IAAgxIg5AAIAAAxIgPAAIAAhrIAPAAIAAAwIA5AAIAAgwIAPAAIAABrg");
	this.shape_21.setTransform(-19.4,1.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIAQAAIAAAuIAUAAQAKAAAGACQAHADAFACQAFAFACAFQACAEAAAHQAAAHgCAHQgDAGgFAEQgEADgIAEQgGACgJAAgAgUApIAUAAIAJgBIAIgEQACgBABgFQACgDAAgEQAAgFgCgDQgBgEgCgCIgIgDQgEgCgFAAIgUAAg");
	this.shape_22.setTransform(-29.3,1.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgtA2QgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAgKIAFAAIAGgBQADgBACgDQADgEACgGQADgGACgLIADgZIACglIBAAAIAABqIgPAAIAAheIgiAAIgHA9QgCAKgEAHQgEAIgDADQgEADgEACQgFABgFAAg");
	this.shape_23.setTransform(-40.5,1.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAnA2IgDgBIgCgDIgKgZIgvAAIgKAZIgCADIgDABIgMAAIArhrIAPAAIArBrgAAAggIgSAuIAlAAIgQgqIgCgEIgBgGg");
	this.shape_24.setTransform(-50.5,1.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AggA2IAAhrIBBAAIAAANIgyAAIAAAiIAoAAIAAAMIgoAAIAAAjIAyAAIAAANg");
	this.shape_25.setTransform(-59.6,1.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AArBDIAAgaIhVAAIAAAVQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABIgDABIgKAAIAAgmIAMAAIAEgEIAFgHIAHgcIAEg4IA/AAIAABfIASAAIAAAhQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABIgDABgAgMgWQgBALgDAMQgDALgCAFQgCAHgDAFIAyAAIAAhTIghAAg");
	this.shape_26.setTransform(-70.3,2.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAdA2IAAhRIABgIIgHAMIgyBLIgEACIgMAAIAAhrIAQAAIAABKIgBAPIADgHIACgFIAwhIIAEgDQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAMAAIAABrg");
	this.shape_27.setTransform(-81.9,1.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAdA2IAAgxIg5AAIAAAxIgPAAIAAhrIAPAAIAAAwIA5AAIAAgwIAPAAIAABrg");
	this.shape_28.setTransform(85.9,-17.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAcBDIABhYIgGAMIgvBHIgDAEIgEABIgMAAIAAhqIAQAAIgBBYIAGgMIAvhHIADgEIAEgBIAMAAIAABqgAgPgyQgGgFAAgHIABgDQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAIAJAAIAAAGIACAEIADACIAEAAIAGAAIADgCIACgEIAAgGIAJAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAIABADQAAAHgGAFQgHAEgKAAQgIAAgHgEg");
	this.shape_29.setTransform(74.4,-19);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAnA2IgEgBIgCgDIgJgZIgvAAIgKAZIgCADIgDABIgMAAIArhrIAPAAIArBrgAgBggIgCAEIgQAqIAmAAIgSguIgBgGg");
	this.shape_30.setTransform(63.6,-17.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgVAzQgLgFgFgFIAEgIIACgBIACgBIACABIAHAFIAFACIAHACIAIABQALAAAGgFQAHgGAAgJQAAgFgCgDQgCgDgDgDIgHgEIgXgBIgBgMIAOAAIAIgBQAEAAADgDIAEgFQACgDAAgEQAAgEgCgDIgEgFQgCgCgFgBQgEgBgEAAQgGAAgEABIgHADIgFADIgDABIgDgBIgBgBIgEgIQAGgFAIgDQAJgDAKAAQAIAAAGACQAGACAFAEQAFAEADAFQACAFAAAGQAAAHgEAHQgDAGgIAEIAHADQAEACACADIAEAHIABAIQAAAHgCAGQgDAHgFAEQgDADgJAEQgJADgHAAQgMAAgJgEg");
	this.shape_31.setTransform(54,-17.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAcA2IAAhKIABgPIgFAMIgwBIIgDADQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgMAAIAAhrIAQAAIgBBZIAGgMIAvhIIADgDIAEgCIAMAAIAABrg");
	this.shape_32.setTransform(44.2,-17.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAqBDIAAgaIhUAAIAAAVIgBAEIgEABIgJAAIAAgmIALAAIAFgEIAEgHIAEgMIAGgoQABgOABgSIA/AAIAABfIASAAIAAAhQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAABIgEABgAgNgWIgDAXQgCALgDAFIgGAMIAzAAIAAhTIgiAAIgDAgg");
	this.shape_33.setTransform(32.4,-16.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAcBDIAAhQIABgIIgFAMIgxBHQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgLAAIAAhqIAQAAIgBBYIACgGIADgGIAxhHQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAIALAAIAABqgAgPgyQgGgFAAgHIABgDQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAIAAIAAAGIACAEIADACIAFAAIAFAAIADgCIACgEIAAgGIAIAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAIABADQAAAHgGAFQgGAEgKAAQgKAAgGgEg");
	this.shape_34.setTransform(17.1,-19);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAcA2IAAhKIABgPIgGAMIgvBIIgDADIgEACIgMAAIAAhrIAQAAIgBBZIAGgMIAvhIIADgDIAEgCIAMAAIAABrg");
	this.shape_35.setTransform(5.6,-17.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAeA2IgFgBIgdgrIgEgEIgGgBIgNAAIAAAxIgPAAIAAhrIAPAAIAAAvIAOAAIADgBIACgCIADgCIAaglIACgEIAFgBIAMAAIggAsQgDAGgFABIAGADIAGAGIAfAvg");
	this.shape_36.setTransform(-4.6,-17.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgOAzQgJgEgHgHQgHgIgEgKQgDgKAAgMQAAgLAEgKQADgKAHgIQAIgHAJgEQAKgEAKAAQALAAAKAEQAIADAHAHIgGAIIgCABQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBIgFgDIgIgDQgFgCgHAAQgHAAgGADQgHADgFAFQgFAFgDAIQgCAHAAAKQAAAJACAJQAEAIAEAFQAEAEAIAEQAGADAHAAIAJgBIAGgCQAEAAACgDIAHgFIACAAIACABIAGAHQgGAHgKAFQgJAEgOAAQgKAAgKgEg");
	this.shape_37.setTransform(-15.1,-17.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAcA2IAAgxIg3AAIAAAxIgQAAIAAhrIAQAAIAAAwIA3AAIAAgwIAQAAIAABrg");
	this.shape_38.setTransform(-26,-17.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAcA2IAAguIgPAAIgDAAIgDACIgDACIgZAkIgEAEQgCACgEAAIgMAAIAcgnQAEgHAGgDQgIgCgDgCQgEgBgEgEQgDgDgBgFQgCgFAAgFQAAgGADgHQADgGAEgDQAFgEAHgDQAGgCAJAAIAlAAIAABrgAgCgnIgHAEIgEAFIgBAIIABAIIAEAGIAHADQADACAGAAIAVAAIAAgmIgVAAQgGAAgDACg");
	this.shape_39.setTransform(-37.5,-17.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIAPAAIAAAuIAVAAQAKAAAGACQAHADAFACQAFAFACAFQACAEAAAHQAAAHgDAHQgCAGgFAEQgEADgIAEQgGACgJAAgAgVApIAVAAIAKgBIAGgEQADgBACgFIAAgHIAAgIQgCgEgDgCIgGgDQgFgCgFAAIgVAAg");
	this.shape_40.setTransform(-45.9,-17.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgtA2QgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAgKIAFAAIAGgBQADgBACgDQADgEACgGQADgGACgLIADgZIACglIBAAAIAABqIgPAAIAAheIgiAAIgHA9QgCAKgEAHQgEAIgDADQgEADgEACQgFABgFAAg");
	this.shape_41.setTransform(-57.1,-17.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAnA2IgEgBIgCgDIgJgZIgvAAIgJAZIgCADIgEABIgMAAIArhrIAPAAIArBrgAgTAOIAnAAIgQgqIgCgEIgCgGg");
	this.shape_42.setTransform(-67.1,-17.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgHA2IAAheIgiAAIAAgNIBTAAIAAANIgiAAIAABeg");
	this.shape_43.setTransform(-75.6,-17.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAcA2IAAhKIABgPIgGAMIgyBLIgEACIgMAAIAAhrIAQAAIgBBZIAGgMIAvhIIADgDQABgBAAAAQAAAAABAAQAAgBABAAQABAAAAAAIAMAAIAABrg");
	this.shape_44.setTransform(-85.8,-17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text2, new cjs.Rectangle(-90.2,-25.7,180.5,51.5), null);


(lib.text1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAcA2IAAgxIg3AAIAAAxIgQAAIAAhrIAQAAIAAAwIA3AAIAAgwIAQAAIAABrg");
	this.shape.setTransform(86.4,19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAcA2IABhZIgDAHIgzBNIgCADQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgLAAIAAhrIAQAAIAABRIgBAIIAFgMIAxhIIACgDQABgBAAAAQABAAAAAAQABgBAAAAQABAAABAAIALAAIAABrg");
	this.shape_1.setTransform(75,19);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhCA2IAAhrIAPAAIAABfIAsAAIAAhfIAPAAIAABfIAsAAIAAhfIAQAAIAABrg");
	this.shape_2.setTransform(61.1,19);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAnA2IgEgBIgBgDIgKgZIgvAAIgKAZIgCADIgDABIgMAAIArhrIAPAAIArBrgAAAggIgSAuIAlAAIgTg0g");
	this.shape_3.setTransform(48,19);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AArA2IAAhQIAAgEIgkBBIgCADIgEABIgBAAQgEAAgBgEIglhBIAAAEIAABQIgNAAIAAhrIALAAIADABIACACIAlBAIACAIIAEgIIAkhAIACgCIADgBIALAAIAABrg");
	this.shape_4.setTransform(35.9,19);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAgA2IgDgBIgBgCIgcgsIAAADIgcApIgCACIgDABIgOAAIAlg2Igjg1IAPAAIADABIABABIAbArIABgCIAAgCIAagmQAAgBABAAQAAgBABAAQAAAAABgBQAAAAAAAAIAQAAIgkA0IAkA3g");
	this.shape_5.setTransform(20.2,19);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAnA2IAAhrIAPAAIAABrgAg1A2IAAhrIAPAAIAAAuIAVAAQAIAAAJADQAGABAFAEQAFAEABAFQADAGAAAGQAAAGgDAHQgDAGgEAEQgHAFgEACQgGACgKAAgAgmAqIAVAAQAGAAAEgCQAFgCACgCIADgFIABgIIgBgIIgDgGIgHgDIgKgBIgVAAg");
	this.shape_6.setTransform(8.5,19);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAcA2IAAgxIg3AAIAAAxIgQAAIAAhrIAQAAIAAAwIA3AAIAAgwIAQAAIAABrg");
	this.shape_7.setTransform(-4,19);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIAQAAIAAAuIAUAAQAIAAAIADQAHABAFAEQAEADADAGQACAEAAAIQAAAIgDAFQgCAFgFAFQgGAFgGACQgGACgJAAgAgUAqIAUAAQAFAAAEgCQAGgCABgCQADgCABgDIACgIIgCgIQAAgCgEgEIgHgDIgdgBg");
	this.shape_8.setTransform(-13.8,19);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgtA1QAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgKIAFAAIAGAAQADgCADgEQADgEACgFIAEgSIADgYIADgmIA/AAIAABrIgPAAIAAheIgiAAIgDAkQgBAOgDALQgCAJgEAIQgDAGgEAFQgEAEgEABIgJACg");
	this.shape_9.setTransform(-25,19.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAcA2IAAhRIABgIIgDAHIgzBNIgCADIgEACIgMAAIAAhrIAQAAIgBBZIAFgMIAwhIIADgDQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAMAAIAABrg");
	this.shape_10.setTransform(-35.5,19);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhDA2IAAhrIAQAAIAABfIAsAAIAAhfIAPAAIAABfIAsAAIAAhfIAPAAIAABrg");
	this.shape_11.setTransform(-49.3,19);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgZA1QAAAAgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBIAAgKIAGAAIADAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABAAIADgDIADgFIAFgKIgrhMIAOAAIAEACIACACIAZAvIAEAKIAag5IACgCIADgCIANAAIgsBdQgBAEgCAEIgFAEIgGACIgHACg");
	this.shape_12.setTransform(-62.1,19.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgOAzQgKgFgGgHQgIgHgCgKQgEgLAAgLQAAgKAEgMQAEgKAHgHQAHgIAJgDQALgEAKAAQAMAAAIADQAJAFAGAFIgFAIIgBABIgCAAIgDgBIgFgDIgIgDQgFgCgGAAQgIAAgGADQgHADgFAGQgFAEgDAIQgCAJAAAIQAAAKADAIQACAHAFAFQAGAHAGACQAGADAHAAIAJgBIAHgCIAGgDIAFgEIABgBIACAAIACABIAGAGQgGAIgKAFQgJAEgOAAQgKAAgKgEg");
	this.shape_13.setTransform(-71.7,19);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAcA2IABhZIgFAMIgwBIIgDADIgEACIgMAAIAAhrIAQAAIgBBZIAGgMIAvhIIADgDIAEgCIAMAAIAABrg");
	this.shape_14.setTransform(-86.4,19);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAgA2IgCgBIgCgCIgcgsIAAABIgeAtIgCABIgPAAIAlg2Igjg1IAPAAIADABIABABIAbArIAAgCIABgCIAagmQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAOAAIgjA0IAlA3g");
	this.shape_15.setTransform(47.1,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAnA2IAAhrIAPAAIAABrgAg1A2IAAhrIAPAAIAAAuIAUAAQAJAAAJADQAGABAEAEQAFADACAGQADAGAAAGQAAAHgDAGQgCAFgFAFQgHAFgEACQgHACgKAAgAgmAqIAUAAQAHAAAEgCQAFgCACgCQACgCABgDIABgIIgBgIIgDgGIgHgDIgfgBg");
	this.shape_16.setTransform(35.4,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAdA2IAAgxIg4AAIAAAxIgQAAIAAhrIAQAAIAAAwIA4AAIAAgwIAPAAIAABrg");
	this.shape_17.setTransform(22.9,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIAQAAIAAAuIAUAAQAIAAAIADQAIABAEAEQAFAEACAFQACAEAAAIQAAAGgDAHQgCAGgFAEQgGAFgGACQgGACgJAAgAgUAqIAUAAQAFAAAEgCQAFgBACgDIAFgFIABgIIgBgIIgFgGIgHgDIgJgBIgUAAg");
	this.shape_18.setTransform(13.1,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgtA1QgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIAAgJIAFAAIAGgBQADgCACgEQADgCACgHQADgHACgLQACgIABgRIACglIBAAAIAABrIgPAAIAAheIgiAAIgHA9QgCAJgEAIQgEAIgDADQgEAEgEABQgFABgFAAg");
	this.shape_19.setTransform(1.9,0.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAnA2IgEgBIgBgDIgKgZIgvAAIgKAZIgCADIgDABIgMAAIArhrIAPAAIArBrgAgTAOIAmAAIgSguIgBgGg");
	this.shape_20.setTransform(-8.2,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgjA2IAAhrIAgAAQAIAAAJADQAIACAEAFQAGAEACAGQACAFAAAJQAAAHgCAHQgEAGgEAEQgEADgJAEQgIACgIAAIgRAAIAAAogAgUACIARAAQAFAAAFgCIAIgDQADgDABgEQACgEAAgFQAAgFgCgEQgBgEgDgDQgDgDgFgBIgKgBIgRAAg");
	this.shape_21.setTransform(-16.6,0);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAdA2IAAhRIABgIIgEAHIgyBNIgEADQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgMAAIAAhrIAPAAIAABZIACgHIAEgFIAvhIIAEgDQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAMAAIAABrg");
	this.shape_22.setTransform(-27.3,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgHA2IAAheIgiAAIAAgNIBTAAIAAANIgiAAIAABeg");
	this.shape_23.setTransform(-37.5,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgOAzQgKgFgGgHQgIgIgCgJQgEgLAAgLQAAgLAEgLQAEgKAHgHQAHgIAJgDQALgEAKAAQAMAAAIADQAJAEAGAGIgFAIIgBABIgCAAIgDgBIgFgDIgIgDQgFgBgGgBQgIABgGACQgHADgFAFQgEAFgEAJQgCAIAAAIQAAAKADAIQACAHAFAFQAGAGAGADQAGACAHAAIAJAAIAHgCIAGgCIAFgFIABgBIACAAIACABIAGAGQgGAJgKADQgJAFgOAAQgKAAgKgEg");
	this.shape_24.setTransform(-46.8,0);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAcA2IAAguIgSAAIgEACIgCACIgDAEIgWAhIgEADIgGACIgLAAIAbgnQAEgHAHgDQgFAAgHgDIgHgGIgGgIQgBgEAAgGQAAgGACgGQADgFAFgFIAMgGQAIgDAHAAIAkAAIAABrgAgCgnQgEABgDADQgDACgBAEIgBAHIABAIIADAGQAFADACAAQAEACAGAAIAVAAIAAglIgVAAQgGAAgDABg");
	this.shape_25.setTransform(47.5,-19);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAcA2IABhZIgCAHIg0BNIgCADQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgLAAIAAhrIAQAAIAABRIgBAIIAFgMIAzhLIAEgCIAMAAIAABrg");
	this.shape_26.setTransform(37.4,-19);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgjA2IAAhrIAgAAQAIAAAJADQAIACAEAFQAGAEACAGQACAFAAAJQAAAJgCAFQgCAFgGAFQgEADgJAEQgIACgIAAIgRAAIAAAogAgUACIARAAQAFAAAFgCIAIgDQADgDABgEQACgEAAgFIgCgJQgBgEgDgDQgDgDgFgBIgKgBIgRAAg");
	this.shape_27.setTransform(27.6,-19);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AggA2IAAhrIBBAAIAAANIgyAAIAAAjIAoAAIAAALIgoAAIAAAjIAyAAIAAANg");
	this.shape_28.setTransform(18.6,-19);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgOAzQgKgFgGgHQgGgHgEgKQgEgLAAgLQAAgLAEgLQAEgKAHgHQAHgIAJgDQALgEAKAAQAMAAAIAEQAIADAIAGIgGAIIgBABIgCAAIgDgBIgFgDIgIgDQgEgBgHgBQgIABgGACQgHADgFAFQgEAFgEAJQgCAIAAAIQAAAKADAIQACAGAFAGQAGAGAGADQAGACAHAAIAJAAIAHgCIAGgCIAFgFIABgBIACAAIACABIAGAHQgGAIgKADQgJAFgOAAQgKAAgKgEg");
	this.shape_29.setTransform(9.1,-19);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAcA2IAAguIgSAAIgDACIgHAGIgVAhQgCACgCABQgCACgEAAIgMAAIAcgnQAFgHAFgDQgFAAgGgDIgIgGIgEgIQgCgEAAgGQAAgGADgGQADgGAEgEQAFgEAHgCQAIgDAHAAIAlAAIAABrgAgCgnQgDABgEADIgEAGIgBAHIABAIQABAEADACQAEADADAAQADACAGAAIAVAAIAAglIgVAAQgGAAgDABg");
	this.shape_30.setTransform(-5.6,-19);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAnA2QgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAAAIgCgDIgKgZIgvAAIgKAZIgBADIgEABIgMAAIArhrIAPAAIArBrgAgTAOIAnAAIgRgpIgDgLg");
	this.shape_31.setTransform(-15,-19);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AglA2IAAhrIAjAAQAHAAAJACQAIADAEADQAFAEACAFQACAEAAAIIgBAHIgEAHQgDADgDACQgEADgFACQAMABAFAGQAGAGAAAKQAAAIgCAFQgCAFgGAEQgEAEgIADQgGACgKAAgAgWAqIAWAAQAGAAAFgCIAHgEQACgBACgFQABgDAAgEQAAgIgGgFQgFgFgMAAIgWAAgAgWgFIAcgBIAIgEQADgCABgDQABgDAAgFQAAgJgFgEQgFgEgLAAIgUAAg");
	this.shape_32.setTransform(-24.5,-19);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgUAzQgMgFgFgHQgJgIgCgJQgFgLAAgLQAAgKAFgLQADgKAIgIQAGgHALgEQAKgEAKAAQALAAALAEQAKAEAGAHQAIAIAEAKQADALAAAKQAAALgDALQgEAJgIAIQgFAHgLAFQgLAEgLAAQgKAAgKgEgAgPgmQgGADgGAFQgEAGgDAIQgCAIgBAIQABAJACAJQADAHAEAFQAGAFAGAEQAHACAIAAQAJAAAHgCQAGgEAFgFQAFgFADgHQACgJAAgJQAAgIgCgIQgDgIgFgGQgFgFgGgDQgIgCgIgBQgHABgIACg");
	this.shape_33.setTransform(-35.6,-19);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAdA2IAAgxIg5AAIAAAxIgPAAIAAhrIAPAAIAAAwIA5AAIAAgwIAPAAIAABrg");
	this.shape_34.setTransform(-47.4,-19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text1, new cjs.Rectangle(-90.8,-24.5,181.6,49), null);


(lib.pic5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._4();
	this.instance.parent = this;
	this.instance.setTransform(-119,-137);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic5, new cjs.Rectangle(-119,-137,240,215), null);


(lib.pic4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(-90,-99.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic4, new cjs.Rectangle(-90,-99.5,180,199), null);


(lib.pic2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._3();
	this.instance.parent = this;
	this.instance.setTransform(-120,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic2, new cjs.Rectangle(-120,-105,240,210), null);


(lib.pic1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(-77,-72.5);

	this.instance_1 = new lib._1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-120,-97,0.694,0.694);

	this.instance_2 = new lib._1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6,-97,0.694,0.694);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic1, new cjs.Rectangle(-120,-97,239,193.5), null);


(lib.legal2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAoAiIAAg1IAFAAIAAAFIAFgEIAHgBQAEAAADADQAFACABAFQADAFAAAEQAAAHgDADQgCAFgEADQgDACgGAAIgFgBIgFgEIAAATgAAwgKQgDAEAAAHQAAAHADADQADADAEAAQAFAAADgEQAEgCAAgIQAAgHgEgDQgDgEgFAAQgEAAgDAEgAAAARQgCgEAAgEIAAgGIADgCIAFgCIAFgBQAIAAAEgCIAAgCQAAgEgBgCQgEgCgEAAQgGAAgBACQgCACgBAEIgGgBQABgEABgDIAHgEIAIgBIAIABQADABABACQACABABAEIAAAGIAAAHIAAALIACAFIgIAAIAAgFQgEAEgEABIgIABQgFgBgDgCgAANADIgGAAIgDADIAAADQAAAAAAABQAAAAAAABQAAAAABABQAAAAABABQABACAEAAQADAAADgCIAFgEIABgGIAAgDIgKADgAheAQQgGgDgDgGQgCgHAAgHQAAgIADgGQAEgGAEgDQAHgDAGAAQAIAAAGADQAFAFACAGIgGACQgDgGgDgCQgDgCgGAAQgGAAgEADQgEADgCAEIgBAKQAAAHABADQADAGADADQAEABAGAAQAFAAAFgDQADgCACgHIAHACQgDAHgEAFQgGAEgJABQgIgBgFgDgABXATIAAggIgLAAIAAgGIAeAAIAAAGIgMAAIAAAggAgRATIAAgeIgMAeIgFAAIgKgfIAAAfIgHAAIAAgmIAKAAIALAeIAKgeIAKAAIAAAmg");
	this.shape.setTransform(64.6,3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal2, new cjs.Rectangle(54,-0.1,21.2,6.8), null);


(lib.legal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDASIgEAAIgDgCIgCgDIgBgEIABgEIADgEIAHgBIAJgBIAAgDQAAgEgBgCQgCgCgDAAIgDABIgCABIgCABIgCABIgCgBIAAgBIgCgCQADgCAEgCIAHgBIAFABIAEACIADAFIAAAFIAAAWIgFAAIgBgFIgFAEIgDABgAAAADIgDABIgDACIgBADIABACIABACIACAAIACABIAFgBIABgCIACgCIAAgHg");
	this.shape.setTransform(49.8,3.6,1.2,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCASIAAgeIgOAAIAAgFIAhAAIAAAFIgOAAIAAAeg");
	this.shape_1.setTransform(45.8,3.6,1.2,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAJASIAAgYIAAgCIgBABIAAACIgBABIgPAUIgBABIgBABIgFAAIAAgjIAHAAIAAAaIABgCIABgBIAPgVIABgBIABgBIAFAAIAAAjg");
	this.shape_2.setTransform(41.3,3.6,1.2,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRAZIAAgxIAQAAQAFAAACABIAGACIADAFIABAFIAAAEIgCACIgDADIgEACQAFAAADADQADAEAAAEIgBAGQgCADgCABQgCACgDABIgIABgAgKAUIAKAAIAFgBIADgCIACgDIABgDQAAgEgDgDQgCgCgGAAIgKAAgAgKgCIAJAAIAEgBIADgBIACgCIABgEQAAgEgDgCQgCgCgFAAIgJAAg");
	this.shape_3.setTransform(36.4,2.7,1.2,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJAXQgEgBgEgDQgDgDgCgFQgCgGAAgFIACgJQACgGADgCQAEgEAEgCQAEgCAFABQAGgBAEACIAIAGIAFAIIACAJQAAAFgCAGIgFAIIgIAEQgEACgGABQgFgBgEgCgAgGgRIgGADIgDAHIgCAHQAAAFACADIADAGIAGAEQADABADABQAEgBADgBIAGgEIADgGQACgDAAgFIgCgHIgDgHIgGgDQgDgBgEAAQgDAAgDABg");
	this.shape_4.setTransform(28,2.7,1.2,1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAOAYIAAgNIgcAAIAAALIAAABIgBABIgFAAIAAgRIACAAIACgBIACgCIACgDIACgFIADgTIAVAAIAAAdIAHAAIAAAPIgBACQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAgAgFgBIgDAIIAPAAIAAgYIgJAAg");
	this.shape_5.setTransform(19.8,4.3,1.2,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAIASIAAgRIgPAAIAAARIgHAAIAAgjIAHAAIAAAOIAPAAIAAgOIAHAAIAAAjg");
	this.shape_6.setTransform(14.9,3.6,1.2,1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgDASIgEAAIgEgCIgBgDIgBgEIABgEIADgEIAHgBIAJgBIAAgDQABgEgCgCQgCgCgDAAIgDABIgCABIgDABIgCABIgBgBIgBgBIAAgCQACgCAEgCQADgBADAAIAGABIAEACIADAFIAAAFIAAAWIgFAAIgBgFIgFAEIgDABgAAAADIgDABIgDACIgBADIAAACIACACIACAAIACABIAFgBIACgCIABgCIAAgHg");
	this.shape_7.setTransform(10.3,3.6,1.2,1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPAYIAAguIAEAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAIABAEIAFgEQADgCADAAIAFABIAEADIADAHIABAHIgBAGIgDAHIgFADQgDACgDAAIgFgCIgEgDIAAAQgAgEgRIgEAFIAAAQQABAAAAABQAAAAABABQAAAAABAAQAAAAABABIAEABQAEgBACgDQADgEAAgFIgBgFQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIgDgCIgEgBIgEABg");
	this.shape_8.setTransform(6.1,4.2,1.2,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgOAZIAAgxIAdAAIAAAGIgWAAIAAArg");
	this.shape_9.setTransform(2.7,2.7,1.2,1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgBALIAAgIIABgBIgCACIgGADIgCgDIAHgEIACAAIgDAAIgGgDIACgDIAGADIACACIgBgBIAAgIIACAAIAAAIIAAABIACgCIAGgDIABADIgFADIgCAAIgBAAIADABIAGADIgCADIgGgDIgCgCIAAACIAAAHg");
	this.shape_10.setTransform(-3.8,0.7,1.2,1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAIAZIAAgXIABgCIAAAAIgBAAIgBABIAAABIgFAGIgKAQIgBABIgBAAIgFAAIAAgiIAHAAIAAAWIAAACIAAABIACgDIAPgVIABgBIABAAIAFAAIAAAigAgDgPIgDgBIgDgDIAAgDIAAgBIABgBIAFAAIAAADIABACIABABIABAAIADAAIACgBIABgFIADAAIABABIABABIgBADIgCADIgDABIgFABg");
	this.shape_11.setTransform(220.7,14.7,1.163,1.163,0,0,0,0.1,-0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAJASIAAgaIgBABIgBABIAAACIgPAUIgBABIgBABIgFAAIAAgjIAHAAIAAAYIAAACIACgEIAPgUIABgBIABgBIAFAAIAAAjg");
	this.shape_12.setTransform(215.9,15.7,1.163,1.163);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AALASIgDgBIgCgCIgGgKIgBgCIgDgBIgDAAIAAAQIgHAAIAAgjIAHAAIAAAPIACAAIADAAIACgCIAGgLIABgBIADgBIAEAAIgKAQIgCABIACAAIACADIAJAPg");
	this.shape_13.setTransform(211.8,15.6,1.163,1.163,0,0,0,0.1,-0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgEARQgDgBgCgDQgDgDAAgCQgCgEAAgEQAAgDACgDIADgGIAFgEIAGgBIAHABIAFADIgCADIAAAAIgBABIgBgBIgCgBIgCgBIgDAAIgEABIgDACIgCAEIgBAFIABAFQAAADACACQABAAAAABQAAAAABAAQAAABAAAAQABAAAAAAIADABIAEAAIACgCIADgBIACAAIACADIgDACIgDACIgIABQgCAAgDgBg");
	this.shape_14.setTransform(207.7,15.6,1.163,1.163,0,0,0,0.2,-0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAJASIAAgRIgQAAIAAARIgHAAIAAgjIAHAAIAAAOIAQAAIAAgOIAGAAIAAAjg");
	this.shape_15.setTransform(203.4,15.6,1.163,1.163,0,0,0,0.2,-0.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAJASIAAgaIgBACIgQAWIgBABIgBABIgEAAIAAgjIAGAAIAAAYIAAACIABgDIABgBIACgCIANgSIABgBIABgBIAEAAIAAAjg");
	this.shape_16.setTransform(198.8,15.6,1.163,1.163,0,0,0,0.2,-0.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAVAYIAAgMIgvAAIAAgjIAHAAIAAAeIAOAAIAAgeIAFAAIAAAeIAOAAIAAgeIAHAAIAAAeIAGAAIAAAPIAAABIgBABg");
	this.shape_17.setTransform(192.9,16.3,1.163,1.163,0,0,0,0.1,-0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgGARQgDgBgDgDIgDgGIgBgHIABgHIADgFQADgDADgBIAGgBIAHABIAFAEIAEAFIABAHIgBAHIgEAGQgDADgCABQgDABgEAAQgDAAgDgBgAgHgJQgCAEAAAFQAAAGACAEQAEADADAAQAFAAADgDQACgDAAgHQAAgGgCgDQgCgDgGAAQgEAAgDADg");
	this.shape_18.setTransform(186.9,15.6,1.163,1.163,0,0,0,0.1,-0.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgQAZIAAgxIAPAAQAEAAADABQAEABACACQADACAAADQACADAAAEQAAADgCADIgDAEQgCADgEAAQgDACgEAAIgIAAIAAASgAgJABIAMgBIADgBIADgDIABgEIgBgFIgCgDIgEgCIgMAAg");
	this.shape_19.setTransform(182.6,14.7,1.163,1.163,0,0,0,0.1,-0.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAPAYIAAgMIgdAAIAAALIgBABIgFAAIAAgRIACAAIACgBIADgBIACgEIABgEIADgUIAVAAIAAAeIAHAAIAAAPIgBABIgBABgAgDgIIgBAHIgCAEIgCAEIAQAAIAAgZIgKAAg");
	this.shape_20.setTransform(175.2,16.3,1.163,1.163,0,0,0,0.1,-0.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgDASIgEgBIgDgCIgCgCIABgDIACAAIABAAIAEADIAEAAIACAAIADgCQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBIABgCQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgCgCgEAAIgEAAIAAgDIAEAAQADAAACgCQABAAAAAAQAAAAABgBQAAAAAAgBQAAgBAAAAIAAgCIgBgCIgDgBIgCAAIgDAAIgDABIgCABIgBAAIAAAAIgBgBIgCgCIAFgDIAHgBIAFAAIAEACIADADIAAAEIAAACIgBACIgCACIgDACQADAAACACQACACAAAEIgBAEIgDADIgEACIgFABg");
	this.shape_21.setTransform(171,15.6,1.163,1.163,0,0,0,0.2,-0.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgFARQgCgBgDgDIgEgGIgBgHIABgHIADgFIAGgEIAGgBIAGABQADABABACQADACAAADQACADAAAEIgBABIgBAAIgWAAIABAGIACAEIADACIAEABIAEgBIAGgCIABAAIACADIgDACIgDACIgIABQgDAAgDgBgAgFgKQgCACgBAFIASAAIgBgEIgCgDIgCgCIgEgBQgDAAgDADg");
	this.shape_22.setTransform(167.1,15.6,1.163,1.163,0,0,0,0.2,-0.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgGARQgDgBgDgDIgDgGIgBgHIABgHIADgFIAGgEIAGgBIAHABQAEABACADIADAFIABAHIgBAHIgDAGQgDADgDABQgDABgEAAQgDAAgDgBgAgGgJQgDADAAAGQAAAHADADQACADAEAAQAFAAACgDQAEgEAAgGQAAgFgEgEQgCgDgFAAQgEAAgCADg");
	this.shape_23.setTransform(162.6,15.6,1.163,1.163,0,0,0,0.2,-0.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgPAYIAAguIAEAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAABAAAAIABAEIAEgEQADgCADAAIAGABIAEADIADAGIABAIIgCAGQgBAEgCACQAAACgEACQgDACgDAAIgFgBIgEgEIAAAQgAgEgRIgEAFIAAAQQAAAAABABQAAAAABABQAAAAABAAQAAAAAAABIAFAAQADAAADgDQADgEAAgFIAAgGIgDgEIgCgCIgEgBIgEABg");
	this.shape_24.setTransform(158,16.1,1.163,1.163,0,0,0,0.1,-0.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAMAZIAAgrIgXAAIAAArIgIAAIAAgxIAnAAIAAAxg");
	this.shape_25.setTransform(152.6,14.7,1.163,1.163,0,0,0,0.1,-0.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgDAHIAAAAIAAgBIABgBIABgBIABgEIAAAAIgBAAIgBgBQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAIAAgCIABgDIACgBIACAAIACABIABAEIgBADIgBADIgDADIgCADg");
	this.shape_26.setTransform(146.8,17.7,1.163,1.163,0,0,0,0.2,-0.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgHASIgDgCQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBgBAAIAAgEIABgEIAEgEIAHgBIAJgBIAAgDQgBgEgBgCIgFgCIgDAAIgGAEIgBgBIgBgBIgBgCQADgDADgBIAGgBIAGABIAEACQACACAAADIABAFIAAAWIgDAAIgCgBIAAgBIgBgDIgCACIgEACIgCABIgDAAgAgEAEIgCACIgBACIAAADIACABIABABIADABIACgBIACgBIADgBIACgCIAAgHg");
	this.shape_27.setTransform(143.5,15.7,1.163,1.163);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgNASIAAgjIANAAIAFABIAEACIACACIABAEIAAACIgBACIgCADIgEABQAEAAACACQADACAAADIgBAFIgDADIgFACIgFABgAgGANIAGAAQAEAAACgCQAAAAAAgBQABAAAAAAQAAgBAAgBQAAAAAAgBIAAgCIgBgCIgCgBIgEAAIgGAAgAgGgCIAIAAIACgBIACgCIAAgCIAAgCIgBgCIgCgBIgDAAIgGAAg");
	this.shape_28.setTransform(139.6,15.7,1.163,1.163);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AALASIgDgBIgBgCIgHgKIgBgCIgDgBIgEAAIAAAQIgHAAIAAgjIAHAAIAAAPIADAAIADAAIACgCIAGgLIACgBIABgBIAGAAIgJAOIgDACIgCABIADAAIADADIAJAPg");
	this.shape_29.setTransform(135.9,15.6,1.163,1.163,0,0,0,0.2,-0.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgEARIgFgEIgDgFQgCgEABgEQgBgDACgDIADgGIAGgEIAGgBIAGABIAFADIgBADIgBAAIgBABIgBgBIgCgBIgCgBIgDAAIgEABIgDACIgCAEIAAAFIAAAFIACAFIADACIAEABIADAAIAEgDIACAAIABAAIABADIgCACIgEACIgDABIgDAAQgDAAgDgBg");
	this.shape_30.setTransform(131.5,15.6,1.163,1.163,0,0,0,0.1,-0.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgGARQgDgBgCgDIgEgGIgBgHIABgHIAEgFIAFgEIAGgBIAHABIAGAEIADAFIABAHIgBAHIgDAGQgEADgCABQgDABgEAAQgDAAgDgBgAgHgJQgDAEAAAFQAAAGADAEQADADAEAAQAFAAACgDQADgDAAgHQAAgGgDgDQgCgDgFAAQgEAAgDADg");
	this.shape_31.setTransform(127.2,15.6,1.163,1.163,0,0,0,0.1,-0.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAUAZIAAgmIgRAeIgBABIgCAAIAAAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAIgRgeIAAAmIgHAAIAAgxIAGAAIACAAIAAABIASAeIAAADIABgCIABgBIAQgeIABgBIACAAIAFAAIAAAxg");
	this.shape_32.setTransform(121.2,14.7,1.163,1.163,0,0,0,0.1,-0.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgBAEIgBgBIgBgDIABgCIABgBIACAAIACABIABABIABABIgBABQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgCABIgBABg");
	this.shape_33.setTransform(114.4,17.2,1.163,1.163,0,0,0,0.1,-0.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgKASIAAgjIAVAAIAAAFIgPAAIAAAeg");
	this.shape_34.setTransform(112.4,15.6,1.163,1.163,0,0,0,0.1,-0.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgDAHIAAAAIABgCIACgBIAAgDIAAgBIAAAAIgBAAIgBgBIgBgDIABgDIACgBIACAAIABABIABACIAAAFIgBADIgCADIgCADg");
	this.shape_35.setTransform(107.6,17.7,1.163,1.163,0,0,0,0.2,-0.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgKAZIAQgVIABgCIgEACIgEABIgGgBIgEgDQgCgBgBgCQgCgDAAgEIACgFIADgGIAGgDIAFgCQAEAAADACQADAAACADIADAGIABAGIgBAIIgCADIgOAVIgBABIgCAAgAgCgSIgEACIgCADIgBAEQAAAFADADQACABAEAAIAFAAIACgCIACgDIABgEIgBgEIgCgDIgCgCIgFgBg");
	this.shape_36.setTransform(104,14.7,1.163,1.163,0,0,0,0,-0.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgLAZIAAgFIALAAIAAgjIgJAHIgBAAIgBAAIgBAAIAAAAIgCgDIAOgNIAFAAIAAAsIAKAAIAAAFg");
	this.shape_37.setTransform(99.6,14.7,1.163,1.163,0,0,0,0.2,-0.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAGAZIAAgNIgVAAIgBAAIgBgBIgBgEIAXgfIAGAAIAAAfIAIAAIAAAFIgBAAIgHAAIAAANgAgLAHIARAAIAAgXg");
	this.shape_38.setTransform(94.8,14.7,1.163,1.163,0,0,0,0.2,-0.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgFAZIgEgBIgGgEIACgCIACgBIABAAIAFADIAEAAIAEgBIADgCIADgEIAAgEIAAgFIgCgDIgEgBIgDAAIgIAAIgEAAIAEgYIAXAAIAAACIgBADIgDABIgPAAIgCAMIAGgBQAEABADABQADABACACIADAEIABAGQAAAEgBADQgCADgCACIgGAFIgGABg");
	this.shape_39.setTransform(90.1,14.8,1.163,1.163,0,0,0,0.2,-0.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgLAZIAAgFIALAAIAAgjIgJAHIgBAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAgBAAAAIgBAAIAAAAIgCgDIAOgNIAFAAIAAAsIAKAAIAAAFg");
	this.shape_40.setTransform(85.3,14.7,1.163,1.163,0,0,0,0.1,-0.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgLAZIAAgFIALAAIAAgjIgJAHIgBAAIgBAAIAAAAIgBAAIgCgDIAOgNIAFAAIAAAsIAKAAIAAAFg");
	this.shape_41.setTransform(80.6,14.7,1.163,1.163,0,0,0,0.1,-0.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAAANIAAgBIAAgCIAFgJIABgBIAAAAIgBAAIgFgJIAAgCIAAgBIACgBIAJANIAAAAIgJAOgAgJANIgBgBIAAgCIAGgJIAAgBIAAAAIAAAAIgGgJIAAgCIABgBIACgBIAIANIAAAAIgIAOg");
	this.shape_42.setTransform(74.6,15.5,1.163,1.163,0,0,0,0.2,-0.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgBAEIgBgBIgBgCIAAgCIABgBIABgBIACAAIACABIABABIABABIgBABIgBACIgCABIgBABg");
	this.shape_43.setTransform(71.7,17.2,1.163,1.163,0,0,0,0.1,-0.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgOAZIAAgxIAdAAIAAAGIgWAAIAAArg");
	this.shape_44.setTransform(69.6,14.7,1.163,1.163,0,0,0,0.1,-0.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgBAEIgCgBIgBgDIABgCIACgBIADAAIABABIABABIAAABIAAABQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgBABIgCABg");
	this.shape_45.setTransform(66.1,17.2,1.163,1.163,0,0,0,0.1,-0.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AANAZIAAgXIgaAAIAAAXIgHAAIAAgxIAHAAIAAAWIAaAAIAAgWIAIAAIAAAxg");
	this.shape_46.setTransform(62.1,14.7,1.163,1.163,0,0,0,0.1,-0.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgBAEIgCgBIgBgCIAAgCIABgBIACgBIADAAIABABIABABIAAABIAAABQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgBABIgCABg");
	this.shape_47.setTransform(57.9,17.2,1.163,1.163,0,0,0,0,-0.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgGAYQgEgCgDgDQgEgEgBgFQgCgEAAgGQAAgFACgEQACgFADgDQACgDAGgDIAJgCQAEAAAFACQAEACAEADIgDADIgBABIgBAAIgBgBIgCgBIgEgCIgFAAIgGABIgGAEQgCACgBAEQgCAEABADQgBAFACADQAAADADADIAGAEQACACAEAAIADgBIAHgCIACgCIAAAAIABAAIABAAIADADQgDADgEADQgEACgHAAQgFAAgEgCg");
	this.shape_48.setTransform(54.5,14.7,1.163,1.163,0,0,0,0.2,-0.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AANAZIAAglIABgEIgCADIgBADIgWAhIgBABIgDABIgEAAIAAgxIAHAAIAAAlIgBAEIACgDIAWgkIACgBIACgBIAFAAIAAAxg");
	this.shape_49.setTransform(46.4,14.7,1.163,1.163,0,0,0,0.1,-0.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAUAfIAAgMIgnAAIAAAKIAAACIgCAAIgFAAIAAgRIAGAAIACgCIABgDIACgGIAEgSIAAgPIAdAAIAAAsIAIAAIAAAPIAAACIgCAAgAgHAAIgCAIIgDAGIAXAAIAAgmIgPAAg");
	this.shape_50.setTransform(40,15.4,1.163,1.163,0,0,0,0.1,-0.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAOAZIAAgXIgaAAIAAAXIgHAAIAAgxIAHAAIAAAWIAaAAIAAgWIAGAAIAAAxg");
	this.shape_51.setTransform(33.9,14.7,1.163,1.163,0,0,0,0.2,-0.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AASAZIgBAAIgBgCIgFgLIgVAAIgFALIgBACIgBAAIgGAAIAVgxIAFAAIAVAxgAgIAHIARAAIgJgYg");
	this.shape_52.setTransform(27.9,14.7,1.163,1.163,0,0,0,0.1,-0.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAOAZIgCAAIgNgUIgCgCIgDgBIgGAAIAAAXIgHAAIAAgxIAHAAIAAAWIAGAAIACgBIABAAIANgTQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAIACgBIAGAAIgPAVQgCACgCABIADABIACADIAPAVg");
	this.shape_53.setTransform(22.7,14.7,1.163,1.163,0,0,0,0.1,-0.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAIgNIACABIABABIAAACIgGAJIABABIAFAJIAAACIgBABIgCABgAgKAAIAAAAIAJgNIABABIABABIAAACIgGAJIABABIAFAJIAAACIgBABIgBABg");
	this.shape_54.setTransform(17.8,15.5,1.163,1.163,0,0,0,0.1,-0.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgJAYQgFgCgDgDQgDgEgCgFQgCgEAAgGQAAgFACgEQACgGADgCQACgDAGgDQAGgCADAAQAEAAAGACQAGADACADQADADACAFQACAGAAADQAAAEgCAGQgBAEgEAFQgDADgFACQgEACgGAAQgFAAgEgCgAgGgRQgDABgDADIgDAGIgBAHIABAIIADAGIAGAEIAGABIAHgBIAFgEQADgDABgDQACgDAAgFQAAgDgCgEIgEgGQgDgDgCgBQgDgBgEAAg");
	this.shape_55.setTransform(10.7,14.7,1.163,1.163,0,0,0,0.1,-0.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgJAYQgEgBgEgEQgDgDgCgGQgCgEAAgGQAAgFACgEQADgGACgCQADgDAFgDQAGgCADAAQAEAAAGACQAFADADADIAFAIQACAEAAAFQAAAGgCAEIgFAJIgIAFQgEACgGAAQgFAAgEgCgAgGgRQgDABgDADIgDAGIgBAHIABAIIADAGIAGAEIAGABIAHgBIAGgEIADgGQACgDAAgFQAAgDgCgEIgDgGQgDgDgDgBQgDgBgEAAQgDAAgDABg");
	this.shape_56.setTransform(4.2,14.7,1.163,1.163,0,0,0,0.1,-0.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgJAYIgIgFIgFgJQgCgEAAgGQAAgFACgEIAFgIQADgDAFgDQAGgCADAAQAEAAAGACQAFADADADQACACADAGQACAEAAAFQAAAGgCAEQgCAGgDADQgEAEgEABQgEACgGAAQgFAAgEgCgAgGgRQgDABgDADIgDAGQgCAEAAADQAAAFACADQAAADADADIAGAEIAGABIAHgBIAGgEIADgGIABgIIgBgHIgDgGQgDgDgDgBQgDgBgEAAQgDAAgDABg");
	this.shape_57.setTransform(-2.1,14.7,1.163,1.163,0,0,0,0.2,-0.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgDAHIAAAAIABgBIABgBIAAgBIABgDIAAgBIgBAAIgBgBQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAIAAgCIABgDIACgBIACAAIACABIABAEIgBADIgCADIgCADIgBADg");
	this.shape_58.setTransform(8.5,28.7,1.163,1.163);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAJAZIAAgZIgBABIgQAXIgBABIgBAAIgEAAIAAgiIAGAAIAAAZIABgCIABgBIAPgVIABgBIABAAIAEAAIAAAigAgDgPIgDgBIgCgDIgBgDIAAgBIABgBIAEAAIABAFIACABIABAAIADAAIABgBIABgCIABgDIADAAIABABIABABIgBADIgCADIgDABIgFABg");
	this.shape_59.setTransform(5.2,25.7,1.163,1.163);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgIADIAAgFIARAAIAAAFg");
	this.shape_60.setTransform(1.4,26.2,1.163,1.163);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgQAZIAAgCIABgBIAQgRIAFgHIADgEIAAgEIAAgEIgDgDIgDgBIgCgBIgDABIgDABIgCADIgBADIgCABIgCAAIgDAAIACgGIADgEQADgDACAAIAGgCIAFACIAGADQACABAAADQACADAAACIgBAGIgDAEIgCAEIgQARIAFgBIAPAAIACABQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAAADg");
	this.shape_61.setTransform(-2.5,25.6,1.163,1.163);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgGAZIgEgDIgEgEIgCgFIADgCIACAAQAAAAABAAQAAAAAAAAQAAABAAAAQABAAAAAAIACAFIADACIAEABIAEgBIAEgCIABgDIABgDIAAgEIgCgDIgEgBIgFgBIAAgEIAEgBIAEgBIACgDIAAgEIAAgDIgCgDIgDgBIgDgBIgCABIgEABIgCACIgBADIgBACIgCAAIgEAAIACgGIAEgFIAFgDIAFgBIAGABIAFADIADAEIABAFIAAAFIgDADIgCACIgDACQAEAAADADQACAEAAAEQAAADgBADIgEAFQgCACgDABIgHABg");
	this.shape_62.setTransform(180.1,25.4,1.163,1.163);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgGAZIgDgBIgEgCIgCgCIACgCIACgBIACAAIAEADIAFAAIADgBIAEgCIACgEIAAgEIAAgFIgCgDIgEgBIgDAAIgIAAIgFAAIAFgYIAXAAIAAACQAAABgBAAQAAABAAAAQAAAAAAABQAAAAgBAAIgDABIgOAAIgCANIAGgBQAEgBADACQACABADACQACACABACIABAGIgBAHIgEAFQgCADgEABIgGACg");
	this.shape_63.setTransform(175.4,25.4,1.163,1.163);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAGAZIAAgNIgVAAIgCAAIAAgBIgBgEIAXgfIAHAAIAAAfIAHAAIAAAFIgCAAIgFAAIAAANgAgLAHIARAAIAAgVIAAgCg");
	this.shape_64.setTransform(170.6,25.4,1.163,1.163);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgGAYQgEgBgCgEQgDgEgBgEQgBgEAAgHQAAgGABgEQABgEADgEIAGgFQADgCADAAIAHACQADABADAEQACACACAGQABAEAAAGQAAAHgBAEQgCAGgCACQgCADgEACIgHACQgDAAgDgCgAgDgSIgEADIgDAHIAAASIADAGIAEADIADABIAEgBIAEgDIACgGIABgKIgBgIQAAgEgCgDQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIgEgBIgDABg");
	this.shape_65.setTransform(166,25.4,1.163,1.163);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgMAZIAUgoIADgDIgZAAIgBAAIgBgBIAAgFIAhAAIAAAFIgUAqIgBACIgDAAg");
	this.shape_66.setTransform(161.3,25.4,1.163,1.163);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgGAYQgEgBgCgEQgDgDgBgFQgBgEAAgHQAAgGABgEQABgFADgDQADgEADgBQADgCADAAQAEAAADACQADABADAEQADADABAFIABAKIgBALQgBAFgDADQgCAEgEABQgDACgEAAQgDAAgDgCgAgDgSQgBAAAAABQgBAAAAAAQgBABAAAAQAAABgBAAQgCADAAAEIgBAIIABAKIACAGIAEADIADABIAEgBIAEgDIADgGIABgKIgBgIQgBgEgCgDIgEgDIgEgBIgDABg");
	this.shape_67.setTransform(156.5,25.4,1.163,1.163);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgGAYIgGgDIgDgGIgBgGIABgIIAFgHIAMgRIABgBIACAAIAGAAIgOATIgBABIgBABIAEgCIADAAIAGABQACABADACIADADQABADAAAEQAAADgBADIgEAGIgFADQgDACgEAAgAgDAAIgEACIgCADIgBAFIABADIACAEIADACIAEABIAEgBIADgCIADgEIAAgDIAAgFIgDgDIgDgCIgEAAg");
	this.shape_68.setTransform(151.9,25.4,1.163,1.163);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgKAZIAPgVIACgCIgEACIgFABIgFgBIgFgDIgCgDIgBgHIABgGIADgEQADgDADgBQADgCACAAQAEAAADACIAFADQACACABADQABADAAAEIgBAIIgCACIgOAWIgBABIgCAAgAgDgSIgDACIgCADIgBAEQAAAEADAEQADABADAAIAEAAIADgCIACgDIABgEIgBgEIgCgDIgDgCIgEgBg");
	this.shape_69.setTransform(147.1,25.4,1.163,1.163);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgLAZIAUgoIABgDIgZAAIgBAAIAAgBIAAgFIAhAAIAAAFIgUAqIgCACIgCAAg");
	this.shape_70.setTransform(142.4,25.4,1.163,1.163);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgLAZIATgoIACgDIgZAAIgBAAIAAgBIAAgFIAhAAIAAAFIgUAqIgCACIgCAAg");
	this.shape_71.setTransform(137.7,25.4,1.163,1.163);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AAFAZIAAgNIgVAAIgBAAIAAgBIgBgEIAXgfIAGAAIAAAfIAIAAIAAAEIAAABIgBAAIgHAAIAAANgAgLAHIAQAAIAAgVIABgCg");
	this.shape_72.setTransform(132.9,25.4,1.163,1.163);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgGAYQgEgCgCgDQgCgCgCgGQgBgEAAgHQAAgGABgEQACgGACgCQADgEADgBIAGgCIAHACIAGAFQACACACAGQABAEAAAGQAAAHgBAEQgCAGgCACQgCAEgEABIgHACIgGgCgAgDgSQgBAAAAABQgBAAAAAAQgBABAAAAQAAABgBAAQgCADAAAEIgBAIIABAKIACAGIAEADIADABIAEgBIAEgDQABgCABgEIABgKIgBgIQgBgFgBgCQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIgEgBIgDABg");
	this.shape_73.setTransform(128.2,25.4,1.163,1.163);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgLAZIAAgFIAKAAIAAggIABgDIgJAHIgBAAIgBAAIgBAAIAAAAIgCgDIAOgNIAFAAIAAAsIAKAAIAAAFg");
	this.shape_74.setTransform(123.5,25.4,1.163,1.163);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AANAZIAAgXIgZAAIAAAXIgHAAIAAgxIAHAAIAAAWIAZAAIAAgWIAHAAIAAAxg");
	this.shape_75.setTransform(115.9,25.4,1.163,1.163);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgQAZIAAgxIAPAAQAEAAAEABQADABACACIAEAFIABAHIgBAGIgEAEQgCACgDABQgEACgEAAIgIAAIAAASgAgJABIAMgBIAEgBIACgDIABgEIgBgFIgCgDIgEgCIgMAAg");
	this.shape_76.setTransform(110.6,25.4,1.163,1.163);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgOAZIAAgxIAdAAIAAAGIgWAAIAAArg");
	this.shape_77.setTransform(106,25.4,1.163,1.163);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgJAYIgIgFQgEgFgBgEQgCgGAAgEQAAgDACgGQABgFAEgDQADgDAFgDQAGgCADAAQAEAAAGACQAGADACADQADADACAFQACAEAAAFQAAAGgCAEQgBAEgEAFQgEAEgEABQgEACgGAAQgFAAgEgCgAgGgRQgCABgDADIgEAGQgCAEAAADQAAAFACADQABADADADIAFAEIAGABIAHgBIAGgEIADgGIABgIIgBgHIgDgGQgDgDgDgBIgHgBQgDAAgDABg");
	this.shape_78.setTransform(100.2,25.4,1.163,1.163);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgFAZIgEgBIgDgCIgDgCIACgCIACgBIABAAIAGADIADAAIAEgBIADgCIACgEIABgEIAAgFIgCgDIgDgBIgEAAIgJAAIgDAAIADgYIAYAAIAAACIgBADIgEABIgNAAIgDANIAGgBQAEgBADACQADABACACQACACABACIABAGIgBAHIgEAFQgBADgFABIgGACg");
	this.shape_79.setTransform(92.5,25.4,1.163,1.163);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgLAZIAAgFIALAAIAAgjIgJAHIgBAAQAAAAAAABQAAAAAAAAQgBAAAAAAQAAgBAAAAIgBAAIAAAAIgCgDIAOgNIAFAAIAAAsIAKAAIAAAFg");
	this.shape_80.setTransform(87.9,25.4,1.163,1.163);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgGAYQgEgBgCgEQgCgCgCgGQgBgEAAgHQAAgGABgEQACgGACgCIAGgFQADgCADAAQAEAAADACQADABADAEQACACACAGQABAEAAAGQAAAHgBAEQgCAGgCACQgCADgEACQgDACgEAAQgDAAgDgCgAgDgSIgEADIgDAHIAAASIADAGIAEADIADABIAEgBIAEgDIACgGIABgKIgBgIQAAgEgCgDQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIgEgBIgDABg");
	this.shape_81.setTransform(83.1,25.4,1.163,1.163);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgQAZIAAgCIABgBIAAgCIATgUIADgCIACgEIAAgEIgBgEIgBgDIgDgBIgEgBIgCABIgDABIgCACIgBAEIgBABIgCAAIgEAAIACgGIAEgEQACgDADgBIAFgBIAGABIAFAEIADAEIABAGIgBAFIgCAEIgTAVIAFgBIAQAAIABABIABACIAAADg");
	this.shape_82.setTransform(78.3,25.4,1.163,1.163);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgLAZIAAgFIALAAIAAgjIgJAHIgBAAIgBAAIgBAAIAAAAIgCgDIAOgNIAFAAIAAAsIAKAAIAAAFg");
	this.shape_83.setTransform(73.7,25.4,1.163,1.163);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgGAZIgDgBIgEgCIgCgCIACgCIABgBIADAAIAEADIAFAAIADgBIADgCIADgEIABgEIgBgFIgCgDIgEgBIgDAAIgIAAIgFAAIAFgYIAWAAIAAACIgBADIgCABIgPAAIgCANIAGgBQAEgBADACQACABADACQADACAAACIABAGQAAAEgCADQAAADgDACQgCADgEABIgGACg");
	this.shape_84.setTransform(68.9,25.4,1.163,1.163);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAGAZIAAgNIgVAAIgCAAIAAgBIgBgEIAYgfIAFAAIAAAfIAIAAIAAAFIgCAAIgGAAIAAANgAgKAHIAQAAIAAgXg");
	this.shape_85.setTransform(64.1,25.4,1.163,1.163);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgGAYQgDgBgDgEQgDgEgBgEQgBgEAAgHQAAgGABgEQABgEADgEIAGgFQADgCADAAIAHACQADABADAEQACACACAGQABAEAAAGQAAAHgBAEQgCAGgCACQgCADgEACIgHACQgDAAgDgCgAgDgSIgEADIgDAHIAAASIADAGIAEADIADABIAEgBIAEgDIACgGIABgKIgBgIQAAgEgCgDQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIgEgBIgDABg");
	this.shape_86.setTransform(59.5,25.4,1.163,1.163);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgLAZIATgoIACgDIgYAAIgCAAIAAgBIAAgFIAhAAIAAAFIgUAqIgBACIgDAAg");
	this.shape_87.setTransform(54.8,25.4,1.163,1.163);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgLAZIATgoIACgDIgYAAIgCAAIAAgBIAAgFIAhAAIAAAFIgBABIgUArIgDAAg");
	this.shape_88.setTransform(50.1,25.4,1.163,1.163);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AANAZIAAgXIgZAAIAAAXIgIAAIAAgxIAIAAIAAAWIAZAAIAAgWIAIAAIAAAxg");
	this.shape_89.setTransform(42.5,25.4,1.163,1.163);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AAOAZIAAgXIgaAAIAAAXIgHAAIAAgxIAHAAIAAAWIAaAAIAAgWIAGAAIAAAxg");
	this.shape_90.setTransform(36.3,25.4,1.163,1.163);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AANAZIAAgiIAAgDIAAgEIgBADIgBADIgXAiIgCABIgGAAIAAgxIAHAAIAAApIABgDIAZglIACgBIAGAAIAAAxg");
	this.shape_91.setTransform(30,25.4,1.163,1.163);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgGAZQgCgBgDgCQgDgCAAgDQgCgCAAgEQAAgEADgDQACgEAFAAQgEgBgCgDQgCgDAAgEIABgGIADgEIAFgDIAFgBIAGABIAFADIADAEIABAGQAAAEgBADQgCADgFABQAGAAABAEQADACAAAFIgBAGQgBAEgCABQgCACgEABIgHABgAgDACIgDACIgCADIgBAEIAAAEIADADIADACIADAAIAFAAIACgCIACgDIACgEIgCgEIgCgDIgDgCIgEAAgAgDgTIgCACIgCADIgBADIABADQAAABAAAAQAAABAAAAQABAAAAAAQAAABABAAIACACIADABIAEgBIADgCIABgDIABgDIgBgDIgCgDIgCgCIgEAAg");
	this.shape_92.setTransform(22.5,25.4,1.163,1.163);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgBAEIgBgBIgBgCIAAgCIABgBIABgBIACAAIACABIABABIABABIgBABQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgCABIgBABg");
	this.shape_93.setTransform(17.1,27.9,1.163,1.163);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AAOAYIAAgMIgbAAIAAAKIgBABIgBABIgFAAIAAgRIACAAIACgBIADgBIABgEIACgEIACgUIAWAAIAAAeIAHAAIAAAPIgBABIgBABgAgEgBIgCAEIgCAEIAQAAIAAgZIgKAAg");
	this.shape_94.setTransform(13.6,27,1.163,1.163);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal, new cjs.Rectangle(-5.3,-0.6,227.8,30.4), null);


(lib.ClipGroup_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoQBrIAAjVIQhAAIAADVg");
	mask.setTransform(52.9,10.7);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0EA6E0").s().p("AnwBHQgkghAVgvQATgsA7gZQBCgcBrABQAXAAAXACIAbAEIAMADIgQAbQgigJgbAAQg2AAgtAQQg8AVgJAqQgGAaATAWQAYAeA0gDQAQgBAfgKQAngOAWgRIA2gvIALgHQAHgDAJAAIA6AAIASBQIAlhPIBAAAIAlA9IAbg9IA7AAIg0BwIg8AAIgnhBIgcBBIglAAIAAAAIhFAAIgDgUIhAAAIgVATIgpAAQgwARg/AAQhaAAgngjgAiqAwIAlgBIgDgggAFNBkIAmglIgmhVIA6AAIAQAtIAvguIBCAAIhyBxQgGAGgDACIgOACgADZBaIhfAAIAzhwIBfAAQAuAAAQAWQAOARgKAWQgKAVgYANQgfARgxAAIgDAAgADGA+IARAAQA3AAAIgeQAHgbgtAAIgRAAg");
	this.shape.setTransform(53.9,10.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_20, new cjs.Rectangle(1.9,0.1,104,21.3), null);


// stage content:
(lib._240x400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ayq/KMAlVAAAMAAAA+VMglVAAAg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(418));

	// legal
	this.instance = new lib.legal();
	this.instance.parent = this;
	this.instance.setTransform(116.2,380.8,1,1,0,0,0,105.1,13.6);

	this.instance_1 = new lib.legal2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(121.2,382.3,1.1,1.1,0,0,0,105.1,13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance}]},328).wait(90));

	// pic5
	this.instance_2 = new lib.pic5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(120,305.5,1,1,0,0,0,0.1,0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(328).to({_off:false},0).to({regX:0,regY:0,y:285.5,alpha:1},7,cjs.Ease.get(1)).wait(75).to({y:305.5,alpha:0},7,cjs.Ease.get(1)).wait(1));

	// pic4
	this.instance_3 = new lib.pic4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(130,181.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(246).to({_off:false},0).to({x:120,alpha:1},7,cjs.Ease.get(1)).wait(75).to({x:100,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(82));

	// pic3
	this.instance_4 = new lib.pic1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(130.5,193.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(164).to({_off:false},0).to({x:120.5,alpha:1},7,cjs.Ease.get(1)).wait(75).to({x:110.5,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(164));

	// pic2
	this.instance_5 = new lib.pic2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(130,185);
	this.instance_5.alpha = 0.289;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(82).to({_off:false},0).to({x:120,alpha:1},7,cjs.Ease.get(1)).wait(75).to({x:100,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(246));

	// pic1
	this.instance_6 = new lib.pic1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(130.5,193.4);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:120.5,alpha:1},7,cjs.Ease.get(1)).wait(75).to({x:110.5,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(328));

	// text5
	this.instance_7 = new lib.text5();
	this.instance_7.parent = this;
	this.instance_7.setTransform(130,123.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(328).to({_off:false},0).to({x:120,alpha:1},7,cjs.Ease.get(1)).wait(75).to({x:110,alpha:0},7,cjs.Ease.get(1)).wait(1));

	// text4
	this.instance_8 = new lib.text4();
	this.instance_8.parent = this;
	this.instance_8.setTransform(120,326.1,0.8,0.8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(246).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},7,cjs.Ease.get(1)).wait(75).to({scaleX:0.8,scaleY:0.8,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(82));

	// text3
	this.instance_9 = new lib.text3();
	this.instance_9.parent = this;
	this.instance_9.setTransform(120,327.6,0.8,0.8);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(164).to({_off:false},0).to({scaleX:1,scaleY:1,y:328,alpha:1},7,cjs.Ease.get(1)).wait(75).to({scaleX:0.8,scaleY:0.8,y:327.6,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(164));

	// text2
	this.instance_10 = new lib.text2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(120,327.3,0.8,0.8);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(82).to({_off:false},0).to({scaleX:1,scaleY:1,y:327.6,alpha:1},7,cjs.Ease.get(1)).wait(75).to({scaleX:0.8,scaleY:0.8,y:327.3,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(246));

	// text1
	this.instance_11 = new lib.text1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(120,328.5,0.8,0.8);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({scaleX:1,scaleY:1,y:329.1,alpha:1},7,cjs.Ease.get(1)).wait(75).to({scaleX:0.8,scaleY:0.8,y:328.5,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(328));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3B454C").s().p("AC+BDQgIgKAEgWIAEgaQAFgWAKgJQALgJARAAIAHAAQANAAAGAEQAHAEADAIIALg7IAPAAIgaCVIgPAAIADgQQgHAJgIAEIgJADIgNACQgWAAgIgKgADpgRQgMAAgFAFQgGAFgDAUIgEASQgDAUAEAGQAEAFAPAAIAKgBQAKgBAGgFQAKgIACgQIADgSQAEgPgIgIQgGgHgRAAgAguBFQgHgHADgTQACgMADgFQACgHAGgEQAEgDAJgBQAHgCANAAIABAAQAPAAAFADQAHACADAFIAEgSQACgMgFgDQgEgFgUAAIgIABQgJABgCACQgGADgBAIIgQAAIABgCQADgNAJgGQAIgFANgBIAJAAIAaABQAIACAEADQADACABAHQACAFgDAMIgMBKIgPAAIABgLQgEAGgJADQgDACgIABIgKABQgYAAgIgIgAgaAaQgGAEgBALQgCAMAEAEQAFAEARAAIAFAAQAKAAAHgDQAHgDADgHIABgLQACgIgHgDQgHgEgQAAQgQAAgGAEgAj4BNQgeAAgKgLQgKgLAFgdIAJgyQAFgdAOgLQAOgMAeAAIATAAQAbAAAMAKQAMAJgEAUIgBAGIgRAAIAAgBQADgPgHgHQgHgGgWAAIgNAAQgQAAgHACQgGABgGAEQgGAGgCAEIgGAXIgHAqQgCANAAAJQABAGADAEQAEAEAHABQAGACAQAAIAMAAIAVgBIALgFQAEgDAEgHQADgIACgMIACgJIgqAAIACgQIA7AAIgEAaQgFAcgOAMQgOALgeAAgACIBLIAMhCQADgQgEgFQgEgFgOAAQgPAAgLAHQgJAIgDAPIgLA+IgPAAIAShpIAPAAIgCAOQAGgIAJgDQAHgEAPAAQAVAAAHAIQAHAJgEATIgMBGgAiTBLIAThpIAPAAIgDAOQAGgHAHgFQAHgDAMAAQASAAAFAIQAFAJgDATIAAABIgQAAIAAgDQACgLgCgFQgEgEgLAAQgMAAgIAHQgHAIgEAPIgKA+g");
	this.shape_1.setTransform(169.5,36.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3B454C").s().p("ACCBTQgCgCAAgEIABgFQgGAEgKAFQgNAFgPAAQgKAAgFgCIgDgCQgEgDgCgEQgDgDAAgFQAAgOAMgOIABgBQANgNAUgGQAEgDAFAAQANgDAKAAIALAAQAGAAACgEQAEgDAAgGQAAgGgFgDQgFgEgKAAQgNAAgNAFQgIADgDADIgGABQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAgFAJgGIAMgHQAPgGAWAAQAQAAAHAFQAGAEABADQADAFAAAFQAAAKgLAWIgRAkQgCAFAAAHQAAACgHAGQgHAFgEAAQgCAAgDgEgABxAcIgCABQgIADgHAFQgNAJAAAMQAAAGAEADQADAEAIAAQAGAAAJgDIABAAQAIgDAHgGQAGgEAEgGQAEgFAAgFQAAgHgEgCQgFgDgHAAIgOABgAhSBTQgCgCAAgDQAAgMATgnIAQgeIAGgMIAEgHIAFgDQAKgEAFAAQAFAAAAAFQAAADgEAIIgKASQgZAygCANIgDAGIgEACQgMAJgEAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAgAgEBPIgDgBQgHgGAAgKQAAgKAKgTIABgFIAQgfIABgDQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBAAgBAAIAAAAIgPABIgDAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgCADgCIAEgEIABgCIAGgFIAPAAQAEAAACgCIACgEIARgdIADgCQAIgEAHAAQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABIABAEIgCAGIgKAVQgBABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAACAGAAIASgBQAGAAAAADIgEAEIgHAGIgBABQgIADgFAAIgJAAIgFABIgEAEQgJAOgMAZQgHAOAAAHQAAAFADADQADADAHAAQAMAAAQgKIAFgDQAAAAABAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAADgKAJQgUAQgTAAQgJAAgEgEgAizBKQgDgLAAgWIAFhpIABgDIAGgDQALgGAFAAIAEABQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABIgBASQgEAxAAAcIAAAUQABAFACAAQACAAAFgHIBShyIAEgCIADgBQAMgEAGAAQAEAAAAAEIgFAHQgOAPgGAJIhKBkQgFAHgKAJQgNAKgJAAQgHAAgDgJgAggg2QAAgDAEgIQAFgJAEgDQACgDAGgDIAHgCIADgBQABAAAAAAQAAABAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAABQgBAHgCAEIgEAIIgDACIgLAGQgGADgEAAQgEAAAAgEg");
	this.shape_2.setTransform(181.5,54.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3B454C").s().p("Ah7CYQgkgTAAgmQABg8AvgzQAtgwA+gTIARgDQALAAAAAHQAAAFgGABIgBgBQgJAAgIACQgyAOglAtQgkAtAAA0QAAAbAWAQQAUAPAfAEQBBAIA1ggQA8gkAAg/QAAgmgWgVQgVgUglgBQgaABgTAKQgSAJgQAVQgLAOgHgHQgFgGAIgLQARgWAigMQAggLAfAAQAoABAYAUQAbAWAAAnQgDBDhCAuQg/AshPAAQgqAAgdgQgAAThmQABgHAEAAQALgJAKgRIARgbQADgFACAAIAFADQADACADAIQACAHgEAHQgGALgNAMQgLALgMAGQgEACgDAAQgCAAgGgEg");
	this.shape_3.setTransform(215.5,36.8);

	this.instance_12 = new lib.ClipGroup_20();
	this.instance_12.parent = this;
	this.instance_12.setTransform(76.5,38.5,1,1,0,0,0,53,10.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#E6F4FC","#E3F3FB","#D9EEFA","#C7E6F7","#B0DCF3","#A3D6F1","#90CEEB","#8BCCEA","#31AED8"],[0,0.192,0.349,0.49,0.627,0.686,0.82,0.843,1],8.6,-168.6,-3.5,70.5).s().p("AyzfRMAAAg+hMAlnAAAMAAAA+hg");
	this.shape_4.setTransform(120.4,200.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.instance_12},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(418));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(119.5,199.5,250,401);
// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/240x400_atlas_.png", id:"240x400_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;