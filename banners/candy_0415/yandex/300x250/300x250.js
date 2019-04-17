(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x250_atlas_", frames: [[238,0,180,199],[302,201,150,169],[0,231,300,120],[0,0,236,229]]}
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
	this.shape.graphics.f("#0EA6E0").s().p("AgGA2IAAheIgjAAIAAgNIBTAAIAAANIgjAAIAABeg");
	this.shape.setTransform(132.7,-36.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0EA6E0").s().p("AAaA2QgEAAgCgEIgaglIgDgDIgEAAIgLAAIAAAsIgPAAIAAhrIAfAAQAIAAAIADQAIABAFAEQAFAFACAFQACAEAAAIQAAAGgBAFIgFAJIgJAGQgEADgHABQAEACABADIAfAqgAgYgBIAPAAIAKgCIAIgDQADgEACgDQABgEAAgFQAAgJgGgFQgGgEgLAAIgQAAg");
	this.shape_1.setTransform(124.5,-36.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0EA6E0").s().p("AAnA2IgEgBIgCgDIgJgZIgvAAIgKAZIgCACIgDACIgMAAIArhrIAPAAIArBrgAgBggIgSAuIAmAAIgSguIgBgGg");
	this.shape_2.setTransform(114,-36.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0EA6E0").s().p("AArA2IAAhQIAAgEIgkBBIgCADIgEABIgBAAQgDAAgCgEIglhBIAAAEIAAAEIAABMIgNAAIAAhrIALAAIADABQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABIAlBAIACAIIAEgIIAkhAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAIADgBIALAAIAABrg");
	this.shape_3.setTransform(101.9,-36.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0EA6E0").s().p("AgKA2QgFAAgEgDIgIgEIgHgGIAEgIIACgBIACgBIADACIAGAEIAHADQAEACAGAAIAIgBIAHgEQADgCABgEQACgEAAgEQAAgEgDgEQgCgDgDgBIgagKIgJgFQgCgCgDgGQgDgGAAgGQAAgFADgHQACgFAEgEQAFgEAGgCQAGgDAHAAQAJAAAIADQAIADAFAFIgEAHQAAABAAAAQAAABgBAAQAAAAAAAAQAAAAgBABIgCAAIgNgHIgJgBIgHABIgGADIgEAGQgBADAAADQAAAEACADQACAEAEABIAHAEIATAGIAIAFQAEADACAFQACAGAAAFQAAAGgCAHQgCAGgFAFQgGAFgGACQgHADgHAAg");
	this.shape_4.setTransform(90.8,-36.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0EA6E0").s().p("AAnA2IgDgBIgCgDIgKgZIgvAAIgKAZQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgMAAIArhrIAPAAIArBrgAgTAOIAnAAIgRgqIgDgKg");
	this.shape_5.setTransform(78.4,-36.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0EA6E0").s().p("AgGA2IAAheIgjAAIAAgNIBTAAIAAANIgiAAIAABeg");
	this.shape_6.setTransform(69.9,-36.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0EA6E0").s().p("AgHA2IAAhrIAPAAIAABrg");
	this.shape_7.setTransform(63.3,-36.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0EA6E0").s().p("AgGA2IgshrIANAAIADABIACADIAgBPIAAAHIADgNIAehJIACgCQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAIANAAIgsBrg");
	this.shape_8.setTransform(56.1,-36.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0EA6E0").s().p("AgVAzQgKgFgHgGQgGgHgEgLQgEgIAAgOQAAgNAEgIQADgJAHgJQAHgGAKgFQALgEAKAAQALAAALAEQAKAFAHAGQAHAJADAJQAEAIAAANQAAAOgEAIQgEALgGAHQgHAGgKAFQgLAEgLAAQgKAAgLgEgAgOgmQgHADgFAFQgFAFgDAJQgDAIAAAIQAAAKADAHQADAJAFAFQAFAFAHADQAHACAHAAQAJAAAGgCQAHgDAFgFQAFgFADgJQACgFAAgMQAAgKgCgGQgDgJgFgFQgFgFgHgDQgGgCgJAAQgHAAgHACg");
	this.shape_9.setTransform(41.7,-36.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0EA6E0").s().p("AgHATIgBgCIAEgHIACgIIAAgGIgDgIIgBgEIACgCIAIgDQADAFABAHQABAFgBAFIgDAMQgDAFgEAEg");
	this.shape_10.setTransform(34.1,-40.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0EA6E0").s().p("AguA2IAAhrIAoAAQALAAAKAEQAJAEAIAHQAHAHAEAKQAEAKAAALQAAAMgEAKQgEALgHAGQgHAHgKAEQgKAEgLAAgAgeApIAYAAQAIAAAHgCQAHgDAFgFQAFgHACgHQADgFAAgMQAAgKgDgGQgCgHgFgHQgFgFgHgDQgGgCgJAAIgYAAg");
	this.shape_11.setTransform(27.1,-36.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0EA6E0").s().p("AAkA2IgDgBIgCgCIg9hPIABAFIAABNIgOAAIAAhrIAIAAIADABIADACIA8BPIAAhSIANAAIAABrg");
	this.shape_12.setTransform(15.4,-36.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0EA6E0").s().p("AAnA2IgEgBIgCgDIgJgZIgvAAIgKAZIgCACIgDACIgMAAIArhrIAPAAIArBrgAgBggIgSAuIAmAAIgSguIgBgGg");
	this.shape_13.setTransform(4.5,-36.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0EA6E0").s().p("AAaA2QgEAAgCgEIgaglIgDgDIgEAAIgLAAIAAAsIgPAAIAAhrIAfAAQAIAAAIADQAIABAFAEQAFAFACAFQACAEAAAIQAAAGgBAFIgFAJIgJAGQgEADgHABQAEACABADIAfAqgAgYgBIAPAAIAKgCIAIgDQADgEACgDQABgEAAgFQAAgJgGgFQgGgEgLAAIgQAAg");
	this.shape_14.setTransform(-4.7,-36.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0EA6E0").s().p("AgNAzQgKgEgIgHQgHgIgEgKQgEgLAAgLQAAgMAEgKQAEgKAHgHQAHgHAKgEQALgEALAAIAMABIAKADIAJAEIAHAGIgEAHIgDACIgEgBIgJgGIgIgBIgLgBQgHAAgIACQgIADgEAFQgFAHgDAHQgDAIAAAIQAAAKADAIQADAIAFAFQAFAFAIAEQAHACAJAAIANgBIAGgCIAFgCIAAgYIgQAAIgDAAIgBgCIAAgJIAiAAIAAApQgHAGgKADQgJADgLAAQgMAAgLgEg");
	this.shape_15.setTransform(-15.6,-36.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAAAzQgIgDgGgGQgGgGgFgKQgEgJAAgLIgXAAIAAAwIgPAAIAAhrIAPAAIAAAwIAXAAQABgLADgJQAFgKAGgFQAGgHAIgDQAIgEALAAQALAAAJAEQALAGAFAGQAGAHAEAKQADAJAAAMQAAANgDAJQgEAKgGAIQgFAGgLAFQgJAEgLAAQgJAAgKgEgAAFgmQgGAEgEAFQgEAEgCAIQgDAJAAAIQAAAJADAIQACAJAEAFQAEAFAGADQAHADAHAAQAIAAAGgDQAHgDADgFQAFgGACgIQADgIAAgJQAAgIgDgJQgCgHgFgFQgDgGgHgDQgGgDgIAAQgHAAgHADg");
	this.shape_16.setTransform(-32.6,-36.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgVAzQgKgFgGgGQgHgHgEgLQgEgLAAgLQAAgLAEgKQADgKAIgHQAGgHAKgFQALgEAKAAQALAAALAEQAKAEAHAIQAHAHADAKQAEAJAAAMQAAAOgEAIQgEALgGAHQgHAGgKAFQgLAEgLAAQgKAAgLgEgAgOgmQgHACgFAHQgFAFgDAHQgDAJAAAIQAAAKADAHQADAIAFAGQAFAFAHADQAHADAHAAQAIAAAIgDQAGgDAFgFQAFgGADgIQADgHAAgKQAAgIgDgJQgDgHgFgFQgFgHgGgCQgIgCgIAAQgHAAgHACg");
	this.shape_17.setTransform(-46.8,-36.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AglA2IAAhrIAiAAQAHAAAKACQAHACAEAEQAFADACAFQADAHAAAFIgCAIIgDAGIgHAHIgIADQALACAGAGQAGAGAAAKQAAAHgCAFQgDAGgFAEQgFAFgHABQgIADgIAAgAgWAqIAWAAQAGgBAEgBQAGgCABgCQADgCACgEIABgHQAAgJgGgEQgFgFgMAAIgWAAgAgWgFIAcgBIAHgEIAFgGQABgDAAgDQAAgKgFgFQgHgDgKAAIgTAAg");
	this.shape_18.setTransform(-57.4,-36.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgOAzQgJgEgHgHQgHgHgDgKQgEgLAAgMQAAgKAEgLQAEgMAHgFQAGgHAKgFQALgEAKAAQALAAAJAEQAKAEAGAGIgGAHIgBABIgCABIgDgBIgFgEIgIgDIgLgBQgIAAgGACQgHACgFAHQgEAEgEAIQgCAJAAAIQAAAKADAHQABAGAGAIQAFAFAHADQAFACAIABIAJgBIAHgBIAGgEIAFgDIABgBIACgBIACABIAGAHQgGAIgKAEQgKAEgNAAQgKAAgKgEg");
	this.shape_19.setTransform(-67.4,-36.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAcA2IABhZIgCAHIgDAGIgwBHIgDADQgBABAAAAQAAAAgBABQgBAAAAAAQgBAAAAAAIgMAAIAAhrIAQAAIAABRIgBAHIADgGIAzhNIACgDQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAIAMAAIAABrg");
	this.shape_20.setTransform(-82.1,-36.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgjA2IAAhrIAgAAQAIAAAJADQAIACAEAEQAGAFACAGQACAFAAAJQAAAHgCAHQgDAFgFAFQgFAEgIADQgIACgIAAIgRAAIAAAogAgUABIARAAQAFAAAFgBIAIgDQADgDABgFQACgDAAgFQAAgFgCgEQgBgEgDgDQgDgCgFgCQgFgBgFAAIgRAAg");
	this.shape_21.setTransform(-91.9,-36.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AggA2IAAhrIBBAAIAAANIgyAAIAAAjIAoAAIAAALIgoAAIAAAkIAyAAIAAAMg");
	this.shape_22.setTransform(-100.9,-36.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgkA2IAAhrIBFAAIAAANIg2AAIAAAhIAVAAQAIAAAIADQAGACAGACQAEAEACAFQADAHAAAGQAAAGgDAHQgCAFgFAFQgFAEgHACQgHADgIAAgAgVAqIAVAAQAFgBAFgBIAGgEIAFgFIABgIIgBgIIgFgGIgGgDIgKgBIgVAAg");
	this.shape_23.setTransform(-109.8,-36.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAnA2IAAhrIAPAAIAABrgAg1A2IAAhrIAPAAIAAAuIAVAAQAJAAAIADQAGACAFACQAFAFACAEQACAGAAAHQAAAGgDAHQgCAFgFAFQgEAEgHACQgIADgIAAgAgmAqIAVAAQAGgBAEgBIAHgEIADgFIABgIIgBgIIgDgGIgHgDIgKgBIgVAAg");
	this.shape_24.setTransform(-121.7,-36.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AglA2IAAhrIAiAAQAHAAAKACQAHACAEAEQAFADACAFQADAHAAAFIgCAIIgDAGIgHAHIgIADQALACAGAGQAGAGAAAKQAAAHgCAFQgDAGgFAEQgFAFgHABQgHADgJAAgAgWAqIAWAAQAGgBAEgBQAGgCABgCQADgCACgEIABgHQAAgJgGgEQgFgFgMAAIgWAAgAgWgFIAcgBQAGgCABgCIAFgGQABgDAAgDQAAgKgFgFQgHgDgKAAIgTAAg");
	this.shape_25.setTransform(-133,-36.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIAPAAIAAAuIAVAAQAIAAAIADQAGABAGAEQAEADACAGQADAGAAAGQAAAHgDAFQgCAGgFAFQgFAEgHACQgJADgHAAgAgVApIAUAAQAHABADgCQAGgCABgCQADgDABgDIABgHIgBgIIgEgGQgCgCgFgCIgJgBIgVAAg");
	this.shape_26.setTransform(103,-6.2,0.8,0.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgHA2IAAheIgiAAIAAgNIBTAAIAAANIgiAAIAABeg");
	this.shape_27.setTransform(95.4,-6.2,0.8,0.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAnA2QgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBIgCgCIgJgZIgvAAIgKAZQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgMAAIArhrIAPAAIArBrgAgCgcIgRApIAnAAIgUgzg");
	this.shape_28.setTransform(88.6,-6.2,0.8,0.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIAhAAQAIAAAJADQAHABAFAGQAFADADAHQACAHAAAGQAAAIgDAHQgCAFgFAEQgFAEgHAEQgJACgIAAIgRAAIAAAogAgUACIARAAQAFgBAEgBQAFgBAEgDIAEgHQACgDAAgGIgCgJQgBgDgDgDQgDgDgFgCIgbgBg");
	this.shape_29.setTransform(81.9,-6.2,0.8,0.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIBFAAIAAAMIg1AAIAAAiIAUAAQAIAAAIADQAGABAGAEQAFADACAGQACAEAAAIQAAAIgDAEQgCAHgFAEQgEAEgIACQgIADgHAAgAgUApIAUAAQAFABAEgCQAGgCABgCQADgDABgDIACgHIgCgIQAAgCgEgEIgHgEIgdgBg");
	this.shape_30.setTransform(74.5,-6.2,0.8,0.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAnA2IAAhrIAPAAIAABrgAg1A2IAAhrIAPAAIAAAuIAVAAQAIAAAJADQAFABAFAEQAFADACAGQADAGAAAGQAAAGgDAGQgDAHgEAEQgFAEgGACQgJADgIAAgAgmApIAUAAQAHABAEgCQAFgCACgCQACgDABgDIABgHIgBgIIgDgGQgCgCgFgCIgKgBIgVAAg");
	this.shape_31.setTransform(65,-6.2,0.8,0.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AglA2IAAhrIAjAAQAHAAAJACQAIADAEACQAFAFACAEQACAFAAAIIgBAHQgCAEgCACQgDAEgDACQgEADgFABQAMACAGAGQAFAGAAAKQAAAHgCAGQgCAFgGAEQgEAEgHACQgJADgIAAgAgWApIAWAAQAGABAFgCQAEgCADgCQACgBACgFQABgDAAgFQAAgHgGgFQgFgFgMAAIgWAAgAgWgFIATAAIAJgBIAIgEQADgCABgDIABgIQAAgJgFgFQgFgEgLAAIgUAAg");
	this.shape_32.setTransform(55.9,-6.2,0.8,0.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0EA6E0").s().p("Aq6C0QgQAAgMgMQgMgLAAgRIAAkYQAAgQAMgLQAMgMAQAAIV2AAQAQAAALAMQAMALAAAQIAAEYQAAARgMALQgLAMgQAAg");
	this.shape_33.setTransform(79.1,-6,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text5, new cjs.Rectangle(-136.8,-42.5,275,50.9), null);


(lib.text4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AArA2IAAhUIgkBBIgCADIgEABIgBAAQgDAAgDgEIglhBIABAEIAABQIgNAAIAAhrIALAAIADABIADACIAkBAIACAIIAohIIACgCIADgBIALAAIAABrg");
	this.shape.setTransform(108,-28.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AArA2IAAhQIAAgEIgkBBIgCADIgEABIgBAAQgDAAgCgEIglhBIAAAEIAABQIgNAAIAAhrIALAAIADABQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABIAlBAIACAIIAEgIIAkhAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAIADgBIALAAIAABrg");
	this.shape_1.setTransform(94,-28.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAnA2IgEgBIgCgDIgJgZIgvAAIgKAZIgCACIgDACIgMAAIArhrIAPAAIArBrgAgBggIgSAuIAmAAIgTg0g");
	this.shape_2.setTransform(82,-28.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgjA2IAAhrIAgAAQAIAAAIADQAHABAGAGQAFAEADAGQACAHAAAHQAAAHgDAHQgCAFgFAFQgGAEgHADQgIACgIAAIgRAAIAAAogAgUACIARAAQAFAAAEgCQAGgBACgCQAEgEABgEQACgDAAgFQAAgFgCgEQgBgDgEgEQgCgCgFgCIgKgBIgRAAg");
	this.shape_3.setTransform(73.6,-28.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggA2IAAhrIBBAAIAAANIgxAAIAABeg");
	this.shape_4.setTransform(65.1,-28.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgVAzQgKgFgHgGQgGgHgFgLQgDgJAAgNQAAgMADgJQAFgKAGgIQAHgGAKgFQALgEAKAAQALAAALAEQAKAFAHAGQAHAJADAJQAEAKAAALQAAAMgEAKQgEALgGAHQgHAGgKAFQgLAEgLAAQgKAAgLgEgAgPgmQgGADgFAFQgFAFgDAJQgDAIAAAIQAAAKADAHQADAJAFAFQAFAFAGADQAIACAHAAQAJAAAGgCQAGgDAGgFQAFgFADgJQACgFAAgMQAAgKgCgGQgDgJgFgFQgGgFgGgDQgGgCgJAAQgHAAgIACg");
	this.shape_5.setTransform(54.5,-28.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgjA2IAAhrIAgAAQAIAAAJADQAIACAEAFQAGAEACAGQACAFAAAJQAAAIgCAGQgCAFgGAFQgFAEgIADQgIACgIAAIgRAAIAAAogAgUACIARAAQAFAAAFgCIAIgDQADgEABgEQACgDAAgFQAAgFgCgEQgBgEgDgDQgDgCgFgCQgFgCgFABIgRAAg");
	this.shape_6.setTransform(44.4,-28.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAaA2IAAheIgzAAIAABeIgQAAIAAhrIBTAAIAABrg");
	this.shape_7.setTransform(33.9,-28.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgjA2IAAhrIAgAAQAIAAAJADQAIACAEAEQAGAFACAGQACAFAAAJQAAAIgCAGQgCAFgGAFQgFAFgIACQgIACgIAAIgRAAIAAAogAgUACIARAAQAFAAAFgCQAFAAADgDQADgEABgEQACgDAAgFQAAgFgCgEQgBgEgDgDQgDgCgFgCQgFgCgFABIgRAAg");
	this.shape_8.setTransform(20.2,-28.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVAzQgKgFgGgGQgHgHgEgLQgEgKAAgMQAAgLAEgKQADgKAIgHQAGgHAKgFQALgEAKAAQALAAALAEQALAGAGAGQAGAHAFAKQADAJAAAMQAAANgDAJQgFALgGAHQgGAGgLAFQgLAEgLAAQgKAAgLgEgAgOgmQgGADgGAFQgGAHgCAGQgCAIAAAJQAAAMACAFQACAHAGAHQAGAGAGACQAHACAHAAQAIAAAIgCQAGgCAFgGQAFgGADgIQADgHAAgKQAAgIgDgJQgDgIgFgFQgFgFgGgDQgIgCgIAAQgHAAgHACg");
	this.shape_9.setTransform(9.2,-28.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIBFAAIAAANIg2AAIAAAhIAVAAQAIAAAIADQAHACAFACQAEAEACAFQADAHAAAGQAAAGgDAHQgCAFgFAFQgFAEgHACQgIADgIAAgAgVApIAUAAQAHAAADgBQAFgBACgDQADgDABgCIACgIIgBgIIgFgGIgHgDIgJgBIgVAAg");
	this.shape_10.setTransform(-1,-28.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAnA2IAAhrIAPAAIAABrgAg1A2IAAhrIAPAAIAAAuIAVAAQAIAAAJADQAFABAGADQAEAEACAFQADAHAAAGQAAAGgDAHQgCAFgFAFQgFAEgGACQgJADgHAAgAgmApIAVAAQAGAAAEgBIAHgEIADgFIABgIIgBgIIgDgGIgHgDIgKgBIgVAAg");
	this.shape_11.setTransform(-12.9,-28.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AglA2IAAhrIAjAAQAGAAAKACQAHADAEADQAFADADAFQABAFAAAIIgBAHQgBAEgCACIgGAHIgJADQALABAHAHQAFAGABAKQgBAIgDAEQgBAGgGAEQgEAFgIABQgIADgIAAgAgWApIAWAAQAGAAAEgBQAFgCACgCQAEgDABgDQABgDAAgEQAAgJgGgEQgFgFgMAAIgWAAgAgWgFIAdgBIAHgEIAEgFQABgEAAgDQAAgKgFgFQgGgDgKAAIgUAAg");
	this.shape_12.setTransform(-24.2,-28.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAcBDIAAhKIABgOIgCAGIgDAGIgwBHIgDAEQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgMAAIAAhrIAQAAIAABRIgBAIIADgHIAzhNIACgDQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAIAMAAIAABrgAgPgzQgGgDAAgIIABgDIACgBIAJAAIAAAGIACADIADADIAFAAIAFAAIADgDIACgDIAAgGIAJAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAIABADQAAAIgGADQgGAFgKAAQgKAAgGgFg");
	this.shape_13.setTransform(-38.9,-29.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAdA2IAAhRIAAgIIgGANIgvBHQgBABAAAAQAAABgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgLAAIAAhrIAQAAIgBBYIADgGIAzhNIADgDQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAMAAIAABrg");
	this.shape_14.setTransform(-50.3,-28.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAdA2QAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBIgEgDIgagnIgEgEIgHgBIgMAAIAAAxIgQAAIAAhrIAQAAIAAAvIALAAIAGgBIACgCIAcgnIAEgDQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIANAAIgfAsQgEAFgFACQACABAEACIAmA1g");
	this.shape_15.setTransform(-60.5,-28.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgVAzQgKgFgGgGQgHgHgEgLQgEgKAAgMQAAgLAEgKQADgKAIgHQAGgHAKgFQALgEAKAAQALAAALAEQALAGAGAGQAGAHAFAKQADAJAAAMQAAANgDAJQgFALgGAHQgGAGgLAFQgLAEgLAAQgKAAgLgEgAgOgmQgGADgGAFQgGAHgCAGQgCAIAAAJQAAAMACAFQACAHAGAHQAGAGAGACQAHACAHAAQAIAAAIgCQAGgCAFgGQAFgGADgIQADgHAAgKQAAgIgDgJQgDgIgFgFQgFgFgGgDQgIgCgIAAQgHAAgHACg");
	this.shape_16.setTransform(-72.2,-28.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgjA2IAAhrIAgAAQAIAAAJADQAGACAHAEQAFAFACAGQACAHABAHQgBAHgCAHQgDAFgFAFQgGAFgHACQgIACgIAAIgRAAIAAAogAgUACIARAAQAFAAAEgCQAGAAACgDIAGgIQABgDAAgFQAAgFgBgEQgCgEgEgDQgCgCgFgCQgFgCgFABIgRAAg");
	this.shape_17.setTransform(-82.3,-28.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAcA2IABhZIgFANIgwBHIgDADIgEACIgMAAIAAhrIAQAAIgBBYIADgGIAyhNIADgDQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAMAAIAABrg");
	this.shape_18.setTransform(-93,-28.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhDA2IAAhrIAQAAIAABeIAsAAIAAheIAPAAIAABeIAsAAIAAheIAPAAIAABrg");
	this.shape_19.setTransform(-106.8,-28.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgDAJIgDgCIgCgDIgBgEIABgDIACgDQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIADgBIAEABIADACIACADIABADIgBAEIgCADIgDACIgEABg");
	this.shape_20.setTransform(132.6,-4.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AASAmIAAgjIgjAAIAAAjIgOAAIAAhLIAOAAIAAAeIAjAAIAAgeIAOAAIAABLg");
	this.shape_21.setTransform(126.6,-7.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AATAmIAAg1IABgDIgDAFIglAyIgDABIgJAAIAAhLIAPAAIAAA1IgBADIACgFIAlgyIAEgBIAIAAIAABLg");
	this.shape_22.setTransform(118,-7.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAeAmIAAgwIABgKIgaAsIgCACIgCABIgBAAIgCgBIgCgCIgagsIABAKIAAAwIgNAAIAAhLIAMAAIADAAIACADIAZApIAAAEIADgIIAXglIACgDIADAAIAMAAIAABLg");
	this.shape_23.setTransform(108.4,-7.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgXA2IAjguIADgEQgFAEgEABIgKABQgEAAgHgCQgGgBgEgFQgDgCgEgHQgCgGAAgGQAAgHADgHQACgGAFgFQAGgEAFgDQAIgCAGgBQAHABAHACQAHADAEAEQAFAGACAFQACAGAAAIIgBAJQgBAGgBADIgEAHIgeAtQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAIgEABgAgHgoQgFACgCACQgCACgCAFQgCAEAAAFQAAAKAGAFQAFAFAJAAQAFAAAEgBIAHgFQACgCACgEIACgIQAAgFgCgEQgBgDgDgEIgHgEIgIgCQgEAAgEACg");
	this.shape_24.setTransform(94.8,-9.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgMA1IgJgCIgHgDIgGgFIAFgGQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIADABIAFADIAGACQAEABAEABQADgBAGgBQAEgCAEgEQAEgDABgFQABgEAAgGIgBgJIgEgGQgDgCgFgBQgEgCgFAAQgIAAgJADIgJgCIAJg0IAyAAIAAAHQAAADgCACQgCACgEAAIggAAIgFAbIAOgBQAKAAAFACQAFACAGAFQAEAEACAFQADAHAAAGQAAAJgDAHQgDAGgGAFQgFAFgHADQgIACgGAAg");
	this.shape_25.setTransform(86.1,-9.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgIAQIAAgBIABgDIAFgEIACgFIAAgDIAAAAIgDgBIgDgCIgCgDIgBgDQABgEACgDQADgCADAAIAEABIADABIACAEIAAAFIAAAHIgDAGQgBADgEAEIgFAGg");
	this.shape_26.setTransform(76.4,-3.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAMA2IAAgcIguAAIgCgBQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIgBgHIAyhEIAOAAIAABDIAPAAIAAAJIAAACIgDABIgMAAIAAAcgAgYAOIAkAAIABgyg");
	this.shape_27.setTransform(70.2,-9.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAMA2IAAgcIguAAIgCgBQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIgBgHIAyhEIAOAAIAABDIAQAAIAAAJIgBACIgDABIgMAAIAAAcgAgYAOIAkAAIABgyg");
	this.shape_28.setTransform(61.5,-9.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgHARIgBgCIACgDIAEgEIACgFQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAAAAIgDgBIgDgCIgCgDIAAgDQAAgFACgCQADgCADAAIAEABIADABIACAEIAAAFIgBAHIgCAGIgFAHIgFAGg");
	this.shape_29.setTransform(51.8,-3.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgOAzQgIgCgFgIQgFgGgDgLQgDgKAAgOQAAgNADgKQADgLAFgHQAFgGAIgEQAGgDAIAAQAJAAAGADQAIAEAFAGQAFAHADALQADAKAAANQAAAOgDAKQgDALgFAGQgFAIgIACQgGAEgJAAQgIAAgGgEgAgIgoQgFADgDAEQgDAEgDAJQgBALAAAJQAAAJABAMQADAJADADQADAGAFACQAEACAEAAQAFAAAEgCQAFgCADgGQADgDACgJQACgIAAgNQAAgMgCgIQgCgJgDgEQgDgEgFgDQgEgCgFAAQgEAAgEACg");
	this.shape_30.setTransform(45.7,-9.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgNA1QgGgCgFgEIgHgJQgDgEgBgHIAGgDIAEgBQABABAAAAQABAAAAAAQABABAAAAQAAABABABIACAEIAEAGIAGAEQAEACAFAAQAGAAAEgCQAEgCACgCQADgDACgEIABgHIgBgIQgBgDgDgCQgDgDgGgCQgFgBgHAAIAAgKQAGAAAEgBQAGgBACgDIAFgFIABgIIgCgIQAAgDgDgDIgGgDQgDgBgFAAQgDAAgDABIgGADIgEAFIgDAHIgCADIgFABIgHgBQAAgIAEgFQADgHAFgDQADgEAHgCQAGgCAGAAQAIAAAFACQAHACADADQAEAEACAFQADAFAAAHQAAAFgCAEQAAADgDAEIgGAFIgIADQALACAFAGQAFAIAAAJQAAAHgDAHQgCAFgFAFIgMAGQgGACgIAAQgIAAgFgCg");
	this.shape_31.setTransform(36.9,-9.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgIAQIAAgBIACgDIAEgEIACgFIAAgDIAAAAIgDgBIgDgCIgCgDIgBgDQAAgEADgDQADgCADAAIAEABIADABIACAEIAAAFIgBAHIgDAGQgBADgDAEIgFAGg");
	this.shape_32.setTransform(27.2,-3.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AANA2IAAgcIgvAAIgDgBIgBgDIgBgHIAzhEIANAAIAABDIAPAAIAAAJIAAACIgCABIgNAAIAAAcgAgYAOIAlAAIAAgyg");
	this.shape_33.setTransform(21,-9.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgZA2IAAgLIAXAAIAAhGIABgHIgTAQIgCABIgCAAIgCgBIgBgBIgFgGIAggcIALAAIAABgIAWAAIAAALg");
	this.shape_34.setTransform(12.5,-9.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAcA2IAAhKIABgOIgCAGIgEAFIgvBIIgDADQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgLAAIAAhrIAQAAIAABRIgCAIIAEgHIAzhNIACgDQAAgBABAAQAAAAABgBQABAAAAAAQABAAAAAAIAMAAIAABrg");
	this.shape_35.setTransform(-1.5,-9.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAeA2IgFgCIgCgDIgagnIgFgEIgGgBIgNAAIAAAxIgPAAIAAhrIAPAAIAAAvIALAAIAGgBIACgBIADgDIAagmQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAIAOAAIggAtQgDADgGADIAGADIAGAGIAfAvg");
	this.shape_36.setTransform(-11.7,-9.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIAhAAQAIAAAJADQAHABAGAGQAFAEACAGQADAGgBAIQABAHgDAHQgDAFgFAEQgGAFgGADQgJACgIAAIgRAAIAAAogAgUACIARAAIAKgCQAEgBAEgDQADgDABgEQACgDAAgFQAAgFgCgEQgBgEgDgDQgDgCgFgCQgEgBgGgBIgRAAg");
	this.shape_37.setTransform(-21.4,-9.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAcA2IAAhKIABgOIgDAGIgCAFIgxBIIgDADQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgMAAIAAhrIAPAAIAABRIAAAIIACgHIA0hNIACgDQABgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAMAAIAABrg");
	this.shape_38.setTransform(-32.1,-9.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgHA2IAAheIgiAAIAAgNIBTAAIAAANIgiAAIAABeg");
	this.shape_39.setTransform(-42.3,-9.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgOAzQgJgEgHgIQgGgGgFgLQgDgKAAgMQAAgLAEgLQAEgKAHgHQAGgGALgFQAKgEAKAAQALAAAJAEQAJAEAHAGIgGAHIgBABIgBAAIgEAAIgFgEIgIgDQgFgBgGgBQgIAAgGADQgGACgGAGQgFAGgDAIQgCAGAAAKQAAALACAHQADAHAFAGQAEAEAIAEQAFADAJgBIAIAAIAHgCIAFgCIAIgGIABAAIACABIAGAHQgGAHgKAFQgJAEgNAAQgKAAgLgEg");
	this.shape_40.setTransform(-51.6,-9.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAcBDIAAhRIABgHIgGAMIgyBLQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgMAAIAAhrIAQAAIgBBZIADgHIAyhNIADgDQABAAAAgBQAAAAABAAQABgBAAAAQABAAAAAAIAMAAIAABrgAgOgzQgGgDAAgIIAAgDQABAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAIAIAAIABAGQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIAEADIAEAAIAFAAIADgDIACgDIAAgGIAJAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAIABADQAAAIgGADQgGAFgKAAQgKAAgFgFg");
	this.shape_41.setTransform(-66.3,-10.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgVAzQgKgFgHgHQgGgGgFgLQgDgJAAgNQAAgMADgJQAFgKAGgIQAHgGAKgFQALgEAKAAQALAAALAEQAKAFAGAGQAIAIADAKQAEAKAAALQAAAMgEAKQgEALgHAGQgGAHgKAFQgLAEgLAAQgKAAgLgEgAgPgmQgGACgFAGQgFAGgDAIQgDAIAAAIQAAAKADAIQADAIAFAFQAFAFAGADQAIACAHAAQAJAAAGgCQAGgDAGgFQAFgFADgIQACgJAAgJQAAgIgCgIQgDgIgFgGQgGgGgGgCQgGgDgJAAQgHAAgIADg");
	this.shape_42.setTransform(-78,-9.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgjA2IAAhrIAgAAQAIAAAJADQAIACAEAFQAGAEACAGQACAFAAAJQAAAJgCAFQgCAFgGAEQgFAFgIADQgIACgIAAIgRAAIAAAogAgUACIARAAQAFgBAFgBIAIgEQADgCABgFQACgDAAgFQAAgFgCgEQgBgEgDgDQgDgCgFgCQgFgBgFgBIgRAAg");
	this.shape_43.setTransform(-88.1,-9.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgHA2IAAheIgiAAIAAgNIBTAAIAAANIgiAAIAABeg");
	this.shape_44.setTransform(-97.5,-9.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgOAzQgJgEgHgIQgHgGgEgLQgDgKAAgMQAAgLAEgLQAEgKAGgHQAHgGAKgFQALgEAKAAQAKAAAKAEQAJAEAHAGIgFAHIgCABIgCAAIgDAAIgFgEIgIgDQgFgBgGgBQgIAAgGADQgFACgHAGQgEAGgDAIQgDAGAAAKQAAALADAHQACAHAGAGQAEAEAHAEQAGADAIgBIAHAAIAHgCIAHgCIAHgGIABAAIACABIAGAHQgGAHgKAFQgJAEgOAAQgJAAgLgEg");
	this.shape_45.setTransform(-106.8,-9.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAnA2IAAhrIAPAAIAABrgAg1A2IAAhrIAPAAIAAAuIAVAAQAJAAAIADQAGACAFADQAFADACAGIACALQAAAHgDAHQgDAGgEAEQgEAEgHACQgIADgIAAgAgmApIAVAAQAGABAEgCIAHgDIADgGIABgIIgBgIIgDgFIgHgFIgKgBIgVAAg");
	this.shape_46.setTransform(-118.8,-9.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIBFAAIAAAMIg1AAIAAAiIAUAAQAIAAAIADQAHACAFADQAEADADAGQACAFAAAGQAAAJgDAFQgCAFgFAFQgFAEgHACQgIADgHAAgAgUApIAUAAQAFABAEgCQAGgCABgBQAEgEAAgCIACgIIgCgIQgBgDgDgCQgCgDgFgCIgdgBg");
	this.shape_47.setTransform(-129.8,-9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text4, new cjs.Rectangle(-133.5,-36.2,267.1,34.5), null);


(lib.text3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAcAmIABg2IgXApQgBADgEAAIgBAAQgEAAgBgDIgXgpIABANIAAApIgRAAIAAhLIAQAAIADABQABAAAAAAQABAAAAAAQABABAAAAQAAABABAAIAUAlIABAFIACgFIAUglIADgCIAEgBIAQAAIAABLg");
	this.shape.setTransform(120.3,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKAlQgHgCgEgGQgFgFgCgHQgEgIAAgJQAAgHADgIQACgGAFgGQAGgGAGgDQAHgDAIAAQAJAAAGADQAGACAGAGIgFAHIgBABIgDABIgDgBIgDgCIgFgCIgGgBQgDAAgEACQgEACgCADQgDAEgBAEQgCAFAAAFQAAAGACAFIAEAIQACADAEACIAHABIAHgBIAFgCIACgCIAEgBQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAIAGAHIgHAGIgIAEIgIACIgIABQgGAAgGgDg");
	this.shape_1.setTransform(111.5,2.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAMA2IAAgaIgtAAIgDgBIgDgDIgCgJIAzhEIASAAIAABDIANAAIAAAKIgBADIgCABIgKAAIAAAagAgVAOIAhAAIAAgug");
	this.shape_2.setTransform(99.6,1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNA2QgGgCgEgEQgFgDgDgGIgGgMIAIgDQAEgCADAAIAEAEQAAACADADIADAFIAGACQADACADAAQAFAAAEgCIAFgDIAEgGIABgHIgBgGQgBgEgCgCQgDgCgFgBQgDgBgJAAIAAgNIAKgBQAGgCABgBIAEgGIACgGQAAgHgFgFQgFgEgGAAIgGABIgEADIgEADIgCAGQgCADgBABQgDACgDgCIgKgBQABgJADgEQADgGAFgEQAFgFAGgCQAGgBAHAAQAFAAAIABQAGADAFAEQAEADACAGQADAGAAAFQAAAFgCAEQAAADgDAEIgGAEQgCACgFACQAKACAFAGQAEAHABAJQAAAIgEAGQgDAHgEAEQgHAFgGABQgHADgGgBQgJAAgFgBg");
	this.shape_3.setTransform(90.9,1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHA2IAAheIgiAAIAAgNIBTAAIAAANIgiAAIAABeg");
	this.shape_4.setTransform(74.6,1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgVAzQgKgFgGgGQgIgIgDgKQgEgKAAgMQAAgKAEgLQAEgLAHgHQAHgHAJgEQALgEAKAAQALAAALAEQAKAEAHAHQAGAHAFALQADAKAAALQAAANgDAJQgFAKgGAIQgGAGgLAFQgLAEgLAAQgKAAgLgEgAgOgmQgHADgFAFQgFAFgDAJQgCAGAAAKQAAALACAGQADAJAFAFQAFAFAHADQAHACAHAAQAJAAAHgCQAHgEAEgEQAFgFADgJQADgHAAgKQAAgJgDgHQgDgJgFgFQgEgFgHgDQgIgDgIABQgHgBgHADg");
	this.shape_5.setTransform(64.6,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAcA2IAAgxIg3AAIAAAxIgQAAIAAhrIAQAAIAAAwIA3AAIAAgwIAQAAIAABrg");
	this.shape_6.setTransform(49.1,1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAdA2IAAhRIABgIIgEAHIgyBNIgEADQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgMAAIAAhrIAPAAIAABZIACgHIAEgFIAvhIIAEgDQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAMAAIAABrg");
	this.shape_7.setTransform(37.6,1.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhCA2IAAhrIAPAAIAABfIAsAAIAAhfIAPAAIAABfIAsAAIAAhfIAPAAIAABrg");
	this.shape_8.setTransform(23.8,1.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAnA2IgEgBIgCgDIgJgZIgvAAIgKAZIgCADIgDABIgMAAIArhrIAPAAIArBrgAgCgbIgRApIAmAAIgTg0g");
	this.shape_9.setTransform(10.6,1.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AArA2IAAhUIgkBBIgDADIgCABIgCAAQgDAAgCgEIglhBIAAAEIAABQIgOAAIAAhrIAMAAIADABIACACIAkBAIADAIIAohIIABgCIAEgBIAMAAIAABrg");
	this.shape_10.setTransform(-1.4,1.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAgA2IgCgBIgCgCIgcgsIgBADIgbApIgCACIgCABIgPAAIAlg2Igjg1IAPAAIACABIACABIAaArIACgCIAAgCIAagmQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAIAPAAIgkA0IAlA3g");
	this.shape_11.setTransform(-18.2,1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAcA2IAAhRIABgIIgCAHIg0BNIgCADQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgLAAIAAhrIAQAAIgBBZIACgHIADgFIAxhIIACgDQABgBAAAAQABAAAAAAQABgBAAAAQABAAABAAIALAAIAABrg");
	this.shape_12.setTransform(-28.8,1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAeA2IgFgBIgCgEIgbgnIgEgEQgCgBgEAAIgNAAIAAAxIgQAAIAAhrIAQAAIAAAvIALAAIAGgBIACgCIAdgnIADgDQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAOAAIghAsQgEAGgEACQADABADABIAFAHIAgAug");
	this.shape_13.setTransform(-39,1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgVAzQgJgDgHgIIAEgHIACgBIACgBIACABIAHAFIAFACIAHACIAIABQAKAAAHgFQAGgGAAgKIgBgHIgFgGQgCgCgFgCQgFgBgFAAIgOAAIAAgLIAOAAQAEAAAEgCIAHgDIAEgFQABgDAAgEIgBgHQgBgDgDgCIgHgDIgIgBIgKABIgQAHIgCAAIgBgCIgEgIQAGgFAIgDQAJgDAKAAQAIAAAGACQAHADAEADQAFADACAFQADAGAAAGQAAAHgEAHQgEAGgHADIAHAEIAGAFIAEAHIABAIQAAAHgDAGQgCAHgFAEQgGAFgHACQgHADgIAAQgMAAgJgEg");
	this.shape_14.setTransform(-49.2,1.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgZA1QAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAgJIAFAAIAEgBIAEgBIADgDIAIgPIgrhMIAOAAIADABIACADIAaAwIAEAJIACgFIAYg0IACgDIADgBIANAAIgsBdIgDAHQgCADgDACIgGACIgHABg");
	this.shape_15.setTransform(-57.9,1.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIAhAAQAIAAAJADQAGACAGAFQAFAEADAGQADAHAAAHQgBAIgDAGQgCAFgFAFQgEAEgJADQgIACgIAAIgRAAIAAAogAgUACIARAAQAFAAAEgCQAGAAACgDIAGgHQABgEAAgFIgBgJQgCgEgEgDQgDgDgEgBQgFgCgFAAIgRAAg");
	this.shape_16.setTransform(-66.7,1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AggA2IAAhrIBBAAIAAANIgyAAIAAAjIAoAAIAAALIgoAAIAAAjIAyAAIAAANg");
	this.shape_17.setTransform(-75.7,1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAaA2IAAhfIgzAAIAABfIgQAAIAAhrIBTAAIAABrg");
	this.shape_18.setTransform(-85.9,1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgZA1QAAAAgBAAQAAAAAAAAQAAgBgBAAQAAgBAAAAIAAgJIAFAAIAEgBIAEgBIADgDIAIgPIgrhMIAOAAIADABIACADIAaAwIAEAJIACgFIAYg0IACgDIADgBIANAAIgsBdIgDAHIgFAFIgGACIgHABg");
	this.shape_19.setTransform(-96.1,1.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgOAzQgLgFgFgHQgHgHgEgKQgDgJAAgNQAAgLAEgLQAEgKAGgHQAJgIAIgDQAJgEAMAAQALAAAJAEQAIADAHAGIgFAIIgBABIgCAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAIgFgDQgDgCgFgCIgMgBQgHABgGACQgHADgFAFQgFAGgDAIQgCAIAAAIQAAAJACAJQAEAIAEAEQAFAHAHABQAGADAHAAIAJAAIAGgCIAGgCIAGgFIABgBIACAAIACABIAGAGQgGAJgKADQgJAFgOAAQgKAAgKgEg");
	this.shape_20.setTransform(-105.6,1.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAcA2IAAhRIABgIIgCAHIgzBNIgDADIgEACIgMAAIAAhrIAQAAIgBBZIADgHIACgFIAxhIIACgDQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAMAAIAABrg");
	this.shape_21.setTransform(-120.4,1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAgA2IgCgBIgCgCIgcgsIAAABIgeAtIgCABIgPAAIAlg2Igjg1IAPAAIADABIABABIAbArIAAgCIABgCIAagmQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAOAAIgjA0IAlA3g");
	this.shape_22.setTransform(90.5,-18);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAdA2IAAhZIgDAHIgyBNIgEADQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgMAAIAAhrIAPAAIAABRIgBAIIAHgMIAvhIIAEgDQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAMAAIAABrg");
	this.shape_23.setTransform(79.9,-18);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAeA2IgEgBIgDgEIgbgnQgCgDgCgBQgCgBgEAAIgNAAIAAAxIgPAAIAAhrIAPAAIAAAvIALAAIAGgBIACgCIAdgnIADgDQAAgBABAAQAAAAAAAAQABgBABAAQAAAAABAAIANAAIggAsQgEAGgFACQAEABACABQADADACAEIAgAug");
	this.shape_24.setTransform(69.7,-18);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgVAzQgKgEgGgHIAEgHQAAAAABAAQAAAAAAgBQAAAAAAAAQABAAAAAAIACgBIADABIAHAFIAEACIAHACIAIABQALAAAGgFQAHgGgBgKIgBgHIgEgGQgDgCgFgCQgEgBgGAAIgOAAIAAgLIAOAAQAEAAAEgCQAFgBABgCIAFgFQACgDgBgEQABgEgCgDIgEgFIgHgDIgIgBIgKABIgPAHIgCAAIgCgCIgEgIQAFgEAKgEQAIgDAKAAQAIAAAGACQAGACAGAEQAEADACAFQADAFAAAHQAAAIgEAGQgDAGgIADIAIAEIAFAFIAEAHIABAIQAAAHgCAGQgEAHgEAEQgGAFgGACQgIADgIAAQgLAAgKgEg");
	this.shape_25.setTransform(59.5,-17.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgYA1QgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgJIAFAAIAEgBIAEgBIADgDIADgEIAFgLIgrhMIAOAAIADABIADADIAZAwIAEAJIAEgJIAWgwIACgDIAEgBIAMAAIgsBdIgDAHQgCAEgEABQgBACgEAAIgHABg");
	this.shape_26.setTransform(50.9,-17.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgjA2IAAhrIAgAAQAIAAAIADQAHACAHAFQAEAEADAGQACAHAAAHQAAAIgCAGQgCAFgGAFQgEAEgJADQgIACgIAAIgRAAIAAAogAgUACIARAAQAFAAAFgCQAFAAADgDQACgDACgEQACgEAAgFIgCgJIgEgHQgDgDgFgBIgKgCIgRAAg");
	this.shape_27.setTransform(37.6,-17.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgVAzQgLgFgGgHQgHgHgEgKQgDgLAAgLQAAgKADgMQAFgKAGgGQAIgIAJgEQAJgEAMAAQAMAAAKAEQAJADAHAJQAIAHADAJQAFAMAAAKQAAALgFALQgCAJgJAIQgGAHgKAFQgLAEgLAAQgKAAgLgEgAgPgmQgGADgFAGQgFAEgDAIQgCAJAAAIQAAAIACAKQADAHAFAFQAEAGAHACQAIADAHABQAJgBAGgDQAHgCAGgGQAEgFADgHQACgKABgIQgBgIgCgJQgDgIgEgEQgGgGgHgDQgFgDgKAAQgJAAgGADg");
	this.shape_28.setTransform(26.6,-17.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIBFAAIAAAMIg1AAIAAAiIAUAAQAGAAAKACQAHACAFAEQAEADACAGQADAGAAAFQAAAHgDAHQgDAGgEAEQgHAFgFACQgHACgIAAgAgUAqIAUAAQAFAAAEgCQAGgCABgCIAFgFIABgIIgBgIIgFgGIgHgDIgJgBIgUAAg");
	this.shape_29.setTransform(16.3,-17.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAnA2IAAhrIAPAAIAABrgAg1A2IAAhrIAPAAIAAAuIAVAAQAIAAAJACQAHADAEADQAFAEACAFQACAEAAAHQAAAHgDAHQgDAHgEADQgGAFgFACQgGACgKAAgAgmAqIAVAAQAGAAAEgCIAHgEIADgFIABgIIgBgIIgDgGIgHgDIgKgBIgVAAg");
	this.shape_30.setTransform(4.5,-17.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AglA2IAAhrIAiAAQAKAAAHACQAIADADADQAFADACAGQADAGAAAGIgCAHIgDAHIgHAFIgIAFQAMABAFAGQAGAGAAAKQAAAGgCAHQgEAGgEADQgFAEgHADQgGACgKAAgAgWAqIAWAAIAKgCQAFgBACgDQADgCACgEIABgHQAAgIgGgFQgGgFgLAAIgWAAgAgWgFIATAAQAFAAAEgBQAEgBADgDQADgCACgDQABgDAAgFQAAgJgFgEQgGgFgLAAIgTAAg");
	this.shape_31.setTransform(-6.8,-17.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAdBDIAAhZIgCAHIgEAGIgvBIIgDACQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgLAAIAAhrIAQAAIAABSIgCAHIAGgMIAxhIIADgDQAAAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAIAMAAIAABrgAgPgzQgGgDAAgIIABgDIACgBIAJAAIAAAFIACAFIADACIAFABIAEgBIAEgCIACgFIABgFIAIAAIACABIAAADQABAIgGADQgGAFgKAAQgJAAgHgFg");
	this.shape_32.setTransform(-21.5,-19.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgUAzQgLgEgGgIQgIgHgDgKQgEgLAAgLQAAgKAEgMQAEgKAHgGQAHgJAKgDQAIgEAMAAQANAAAJAEQAKADAHAJQAHAHAEAJQADALAAALQAAANgDAJQgDAJgIAIQgGAIgLAEQgLAEgLAAQgKAAgKgEgAgOgmQgHADgFAGQgFAEgDAIQgCAJAAAIQAAAIACAKQADAHAFAFQAFAGAHACQAHADAHABQAJgBAHgDQAHgDAEgFQAFgEADgIQADgKAAgIQAAgIgDgJQgDgIgFgEQgEgGgHgDQgGgDgKAAQgJAAgFADg");
	this.shape_33.setTransform(-33.3,-17.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AhDA2IAAhrIAQAAIAABfIAsAAIAAhfIAOAAIAABfIAtAAIAAhfIAQAAIAABrg");
	this.shape_34.setTransform(-47.4,-17.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIAQAAIAAAuIAUAAQAGAAAKACQAIADAEADQAFAEACAFQACAGAAAFQAAAHgCAHQgDAGgFAEQgGAFgGACQgGACgJAAgAgUAqIAUAAQAFAAAFgCQAEgCADgCIADgFIABgIIgBgIIgDgGIgHgDIgKgBIgUAAg");
	this.shape_35.setTransform(-59.6,-17.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgtA1QAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAgKIAFAAIAGgBQADAAADgFQACgCADgIIAEgRQACgIABgQIADgmIA/AAIAABrIgQAAIAAheIghAAQAAAUgDAQIgEAZQgEAOgCADQgDAGgEAFQgEAEgEABQgFACgFAAg");
	this.shape_36.setTransform(-70.8,-17.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgVAzQgKgEgHgIQgHgHgDgKQgEgJAAgNQAAgMAEgKQAEgKAGgGQAIgJAJgDQAJgEAMAAQANAAAJAEQAJADAIAJQAGAGAEAKQAEAMAAAKQAAALgEALQgDAKgHAHQgHAIgKAEQgLAEgLAAQgKAAgLgEgAgPgmQgHADgEAGQgFAEgDAIQgDAIAAAJQAAAJADAJQADAHAFAFQAEAFAHADQAIADAHABQAJgBAGgDQAHgCAFgGQAFgFADgHQACgIAAgKQAAgKgCgHQgDgIgFgEQgGgHgGgCQgFgDgKAAQgIAAgHADg");
	this.shape_37.setTransform(-81.3,-17.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIBFAAIAAAMIg2AAIAAAiIAVAAQAHAAAJACQAIADAEADQAFAEACAFQACAEAAAHQAAAJgDAFQgCAGgFAEQgGAFgGACQgGACgJAAgAgVAqIAVAAQAFAAAEgCQAFgBACgDIAFgFQABgEAAgEQAAgFgBgDQgBgCgEgEIgHgDIgJgBIgVAAg");
	this.shape_38.setTransform(-91.6,-17.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text3, new cjs.Rectangle(-124.8,-25.9,249.6,32.6), null);


(lib.text2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVAzQgIgDgJgIQgHgIgEgJQgDgLAAgMQAAgLADgKQAEgJAHgJQAJgIAIgCQAKgFALAAQAMAAAKAFQAJADAHAHQAHAIAEAKQAEALAAAKQAAAMgEALQgEAKgHAHQgHAHgJAEQgJAEgNAAQgMAAgJgEgAgPgmQgHAEgEAEQgGAGgCAIQgDAJAAAHQAAAJADAIQADAIAFAGQAEAEAHAEQAHACAIAAQAKAAAFgCQAIgEAEgEQAFgGADgIQACgIAAgJQAAgHgCgJQgDgHgFgHQgFgEgHgEQgGgCgJAAQgHAAgIACg");
	this.shape.setTransform(130.7,-17.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAdA2IAAgxIg5AAIAAAxIgPAAIAAhrIAPAAIAAAwIA5AAIAAgwIAPAAIAABrg");
	this.shape_1.setTransform(119,-17.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIAQAAIAAAuIAUAAQAKAAAGACQAHADAFACQAFAFACAFQACAEAAAHQAAAHgCAHQgDAGgFAEQgEADgIAEQgGACgJAAgAgUApIAUAAIAJgBIAIgEQACgBABgFQACgDAAgEQAAgFgCgDQgBgEgCgCIgIgDQgEgCgFAAIgUAAg");
	this.shape_2.setTransform(109.1,-17.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgtA2QgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAgKIAFAAIAGgBQADgBACgDQADgEACgGQADgGACgLIADgZIACglIBAAAIAABqIgPAAIAAheIgiAAIgHA9QgCAKgEAHQgEAIgDADQgEADgEACQgFABgFAAg");
	this.shape_3.setTransform(97.9,-17.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAnA2IgDgBIgCgDIgKgZIgvAAIgKAZIgCADIgDABIgMAAIArhrIAPAAIArBrgAAAggIgSAuIAlAAIgQgqIgCgEIgBgGg");
	this.shape_4.setTransform(87.9,-17.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggA2IAAhrIBBAAIAAANIgyAAIAAAiIAoAAIAAAMIgoAAIAAAjIAyAAIAAANg");
	this.shape_5.setTransform(78.8,-17.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AArBDIAAgaIhVAAIAAAVQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABIgDABIgKAAIAAgmIAMAAIAEgEIAFgHIAHgcIAEg4IA/AAIAABfIASAAIAAAhQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABIgDABgAgMgWQgBALgDAMQgDALgCAFQgCAHgDAFIAyAAIAAhTIghAAg");
	this.shape_6.setTransform(68.1,-16.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAdA2IAAhRIABgIIgHAMIgyBLIgEACIgMAAIAAhrIAQAAIAABKIgBAPIADgHIACgFIAwhIIAEgDQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAMAAIAABrg");
	this.shape_7.setTransform(56.5,-17.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAdA2IAAgxIg5AAIAAAxIgPAAIAAhrIAPAAIAAAwIA5AAIAAgwIAPAAIAABrg");
	this.shape_8.setTransform(40,-17.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAcBDIABhYIgGAMIgvBHIgDAEIgEABIgMAAIAAhqIAQAAIgBBYIAGgMIAvhHIADgEIAEgBIAMAAIAABqgAgPgyQgGgFAAgHIABgDQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAIAJAAIAAAGIACAEIADACIAEAAIAGAAIADgCIACgEIAAgGIAJAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAIABADQAAAHgGAFQgHAEgKAAQgIAAgHgEg");
	this.shape_9.setTransform(28.5,-19);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAnA2IgEgBIgCgDIgJgZIgvAAIgKAZIgCADIgDABIgMAAIArhrIAPAAIArBrgAgBggIgCAEIgQAqIAmAAIgSguIgBgGg");
	this.shape_10.setTransform(17.7,-17.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgVAzQgLgFgFgFIAEgIIACgBIACgBIACABIAHAFIAFACIAHACIAIABQALAAAGgFQAHgGAAgJQAAgFgCgDQgCgDgDgDIgHgEIgXgBIgBgMIAOAAIAIgBQAEAAADgDIAEgFQACgDAAgEQAAgEgCgDIgEgFQgCgCgFgBQgEgBgEAAQgGAAgEABIgHADIgFADIgDABIgDgBIgBgBIgEgIQAGgFAIgDQAJgDAKAAQAIAAAGACQAGACAFAEQAFAEADAFQACAFAAAGQAAAHgEAHQgDAGgIAEIAHADQAEACACADIAEAHIABAIQAAAHgCAGQgDAHgFAEQgDADgJAEQgJADgHAAQgMAAgJgEg");
	this.shape_11.setTransform(8.2,-17.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAcA2IAAhKIABgPIgFAMIgwBIIgDADQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgMAAIAAhrIAQAAIgBBZIAGgMIAvhIIADgDIAEgCIAMAAIAABrg");
	this.shape_12.setTransform(-1.7,-17.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAqBDIAAgaIhUAAIAAAVIgBAEIgEABIgJAAIAAgmIALAAIAFgEIAEgHIAEgMIAGgoQABgOABgSIA/AAIAABfIASAAIAAAhQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAABIgEABgAgNgWIgDAXQgCALgDAFIgGAMIAzAAIAAhTIgiAAIgDAgg");
	this.shape_13.setTransform(-13.4,-16.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAcBDIAAhQIABgIIgFAMIgxBHQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgLAAIAAhqIAQAAIgBBYIACgGIADgGIAxhHQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAIALAAIAABqgAgPgyQgGgFAAgHIABgDQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAIAAIAAAGIACAEIADACIAFAAIAFAAIADgCIACgEIAAgGIAIAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAIABADQAAAHgGAFQgGAEgKAAQgKAAgGgEg");
	this.shape_14.setTransform(-28.8,-19);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAcA2IAAhKIABgPIgGAMIgvBIIgDADIgEACIgMAAIAAhrIAQAAIgBBZIAGgMIAvhIIADgDIAEgCIAMAAIAABrg");
	this.shape_15.setTransform(-40.3,-17.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAeA2IgFgBIgdgrIgEgEIgGgBIgNAAIAAAxIgPAAIAAhrIAPAAIAAAvIAOAAIADgBIACgCIADgCIAaglIACgEIAFgBIAMAAIggAsQgDAGgFABIAGADIAGAGIAfAvg");
	this.shape_16.setTransform(-50.4,-17.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgOAzQgJgEgHgHQgHgIgEgKQgDgKAAgMQAAgLAEgKQADgKAHgIQAIgHAJgEQAKgEAKAAQALAAAKAEQAIADAHAHIgGAIIgCABQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBIgFgDIgIgDQgFgCgHAAQgHAAgGADQgHADgFAFQgFAFgDAIQgCAHAAAKQAAAJACAJQAEAIAEAFQAEAEAIAEQAGADAHAAIAJgBIAGgCQAEAAACgDIAHgFIACAAIACABIAGAHQgGAHgKAFQgJAEgOAAQgKAAgKgEg");
	this.shape_17.setTransform(-60.9,-17.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAcA2IAAgxIg3AAIAAAxIgQAAIAAhrIAQAAIAAAwIA3AAIAAgwIAQAAIAABrg");
	this.shape_18.setTransform(-71.9,-17.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAcA2IAAguIgPAAIgDAAIgDACIgDACIgZAkIgEAEQgCACgEAAIgMAAIAcgnQAEgHAGgDQgIgCgDgCQgEgBgEgEQgDgDgBgFQgCgFAAgFQAAgGADgHQADgGAEgDQAFgEAHgDQAGgCAJAAIAlAAIAABrgAgCgnIgHAEIgEAFIgBAIIABAIIAEAGIAHADQADACAGAAIAVAAIAAgmIgVAAQgGAAgDACg");
	this.shape_19.setTransform(-83.3,-17.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIAPAAIAAAuIAVAAQAKAAAGACQAHADAFACQAFAFACAFQACAEAAAHQAAAHgDAHQgCAGgFAEQgEADgIAEQgGACgJAAgAgVApIAVAAIAKgBIAGgEQADgBACgFIAAgHIAAgIQgCgEgDgCIgGgDQgFgCgFAAIgVAAg");
	this.shape_20.setTransform(-91.7,-17.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgtA2QgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAgKIAFAAIAGgBQADgBACgDQADgEACgGQADgGACgLIADgZIACglIBAAAIAABqIgPAAIAAheIgiAAIgHA9QgCAKgEAHQgEAIgDADQgEADgEACQgFABgFAAg");
	this.shape_21.setTransform(-102.9,-17.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAnA2IgEgBIgCgDIgJgZIgvAAIgJAZIgCADIgEABIgMAAIArhrIAPAAIArBrgAgTAOIAnAAIgQgqIgCgEIgCgGg");
	this.shape_22.setTransform(-113,-17.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgHA2IAAheIgiAAIAAgNIBTAAIAAANIgiAAIAABeg");
	this.shape_23.setTransform(-121.5,-17.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAcA2IAAhKIABgPIgGAMIgyBLIgEACIgMAAIAAhrIAQAAIgBBZIAGgMIAvhIIADgDQABgBAAAAQAAAAABAAQAAgBABAAQABAAAAAAIAMAAIAABrg");
	this.shape_24.setTransform(-131.7,-17.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAcA2IAAguIgPAAIgDAAIgDACIgDACIgZAkIgEAEQgCACgEAAIgMAAIAbgnQAFgHAHgDQgIgBgEgDQgFgBgDgEIgEgIQgCgFAAgFQAAgGACgHQAEgGAEgDQAFgEAHgDQAGgCAJAAIAkAAIAABrgAgCgnQgFACgCACQgDACgBADIgCAIIACAIIADAGQADACAFABQADACAGAAIAVAAIAAgmIgVAAQgGAAgDACg");
	this.shape_25.setTransform(-30.6,1.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgOAzQgJgEgHgHQgHgIgDgKQgEgLAAgLQAAgLAEgKQADgKAIgIQAGgHAKgEQAKgEALAAQALAAAJAEQAJAEAGAGIgGAIIgCABIgDgCIgFgDQgDgCgFgBQgFgCgGAAQgIAAgGADQgIAEgEAEQgEAFgEAIQgCAJAAAIQAAAKADAIQACAIAFAFQAFAFAHADQAGADAHAAIAJgBIAHgCIAGgDIAFgEIABgBIACAAIACABIAGAHQgGAHgKAFQgJAEgOAAQgLAAgJgEg");
	this.shape_26.setTransform(-39.8,1.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgHA2IAAheIgiAAIAAgNIBTAAIAAANIgiAAIAABeg");
	this.shape_27.setTransform(-48.9,1.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AggA2IAAhrIBBAAIAAANIgyAAIAAAiIAoAAIAAAMIgoAAIAAAjIAyAAIAAANg");
	this.shape_28.setTransform(-57.3,1.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhCA2IAAhrIAPAAIAABfIAsAAIAAhfIAPAAIAABfIAsAAIAAhfIAPAAIAABrg");
	this.shape_29.setTransform(-70.1,1.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAcA2IAAhRIABgIIgFAMIgxBIQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgLAAIAAhrIAQAAIgBBZIACgHIADgFIAxhIQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAQABAAABAAIALAAIAABrg");
	this.shape_30.setTransform(-83.9,1.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAaA2IAAhfIgzAAIAABfIgQAAIAAhrIBTAAIAABrg");
	this.shape_31.setTransform(-95.2,1.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgmA2IAAhrIAjAAQAKAAAHACQAGACAGAEQAEAEACAFQACAEABAHIgCAIIgEAHQgCADgEACIgJAEQAMABAGAHQAHAHgBAJQAAAHgCAGQgDAFgEAEQgHAFgFACQgHACgKAAgAgWApIAWAAIALgBIAHgEQADgDAAgDIACgHQAAgJgFgEQgHgFgLAAIgWAAgAgWgFIATAAQAFAAAEgBQAFgCACgCQADgCACgDIACgIQAAgJgHgEQgEgFgMAAIgTAAg");
	this.shape_32.setTransform(-105.3,1.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgjA2IAAhrIAgAAQALAAAGADQAIACAEAEQAGAFACAGQACAFAAAJQAAAIgCAGQgCAFgGAEQgFAFgIACQgGADgKAAIgRAAIAAAogAgUACIARAAQAFAAAFgCIAIgDQADgDABgEIACgJQAAgFgCgEQgCgFgCgCQgDgDgFgBQgFgCgFAAIgRAAg");
	this.shape_33.setTransform(105.6,1.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AggA2IAAhrIBBAAIAAANIgyAAIAAAiIAoAAIAAAMIgoAAIAAAjIAyAAIAAANg");
	this.shape_34.setTransform(96.6,1.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIAQAAIAAAuIAUAAQAKAAAGACQAHADAEACQAFAEADAGQACAGAAAFQAAAIgDAGQgDAGgEAEQgEADgIAEQgGACgJAAgAgUApIAUAAIAJgBQAEgBADgDQAEgCAAgEQABgDAAgEQAAgFgBgDQAAgDgEgDIgHgDQgEgCgFAAIgUAAg");
	this.shape_35.setTransform(87.9,1.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgjA2IAAhrIAgAAQALAAAGADQAIACAEAEQAGAFACAGQACAFAAAJQAAAGgCAIQgDAFgFAEQgFAFgIACQgGADgKAAIgRAAIAAAogAgUACIARAAIAKgCIAIgDQADgDABgEIACgJQAAgFgCgEQgCgFgCgCQgDgDgFgBQgFgCgFAAIgRAAg");
	this.shape_36.setTransform(78.7,1.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AggA2IAAhrIBBAAIAAANIgyAAIAAAiIAoAAIAAAMIgoAAIAAAjIAyAAIAAANg");
	this.shape_37.setTransform(69.8,1.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgHA2IAAheIgiAAIAAgNIBTAAIAAANIgiAAIAABeg");
	this.shape_38.setTransform(60.7,1.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAdA2IAAgxIg5AAIAAAxIgPAAIAAhrIAPAAIAAAwIA5AAIAAgwIAPAAIAABrg");
	this.shape_39.setTransform(50.5,1.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAcA2IABhZIgFAMIgwBIIgDADQgBABAAAAQgBAAAAAAQAAABgBAAQgBAAAAAAIgMAAIAAhrIAQAAIAABRIgBAIIAGgMIAyhLIAEgCIAMAAIAABrg");
	this.shape_40.setTransform(39,1.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AhCA2IAAhrIAPAAIAABfIAsAAIAAhfIAOAAIAABfIAtAAIAAhfIAQAAIAABrg");
	this.shape_41.setTransform(21.4,1.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAnA2IgDgBIgCgDIgKgZIgvAAIgJAZIgCADIgEABIgMAAIArhrIAPAAIArBrgAgTAOIAnAAIgRgqIgDgKg");
	this.shape_42.setTransform(8.2,1.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AglA2IAAhrIAjAAQAKAAAGACQAHACAFAEQAFAEACAFQACAEAAAHIgBAIIgEAHQgDADgDACIgJAEQALABAGAHQAGAHAAAJQAAAIgCAFQgDAGgFADQgFAFgHACQgGACgKAAgAgWApIAWAAIALgBIAHgEIAEgGIABgHQAAgJgGgEQgFgFgMAAIgWAAgAgWgFIATAAQAFAAAEgBQAFgCADgCQADgCABgDIABgIQAAgJgFgEQgFgFgLAAIgUAAg");
	this.shape_43.setTransform(-1.3,1.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AglA2IAAhrIAjAAQAJAAAHACQAHACAFAEQAEADADAGQACAEAAAHIgBAIIgEAHIgGAFIgJAEQALACAHAGQAFAHAAAJQABAGgDAHQgEAGgEADQgGAFgFACQgHACgKAAgAgWApIAWAAIAKgBQAFgBADgDQADgDAAgDIACgHQAAgJgFgEQgHgFgLAAIgWAAgAgWgFIATAAQAFAAAFgBIAGgEQAEgCABgDIABgIQAAgJgFgEQgGgFgKAAIgUAAg");
	this.shape_44.setTransform(-14.8,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text2, new cjs.Rectangle(-136,-25.7,272.1,32.6), null);


(lib.text1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAcA2IAAguIgSAAIgEACIgCACIgDAEIgWAhIgEADIgGACIgLAAIAbgnQAEgHAHgDQgFAAgHgDIgHgGIgGgIQgBgEAAgGQAAgGACgGQADgFAFgFIAMgGQAIgDAHAAIAkAAIAABrgAgCgnQgEABgDADQgDACgBAEIgBAHIABAIIADAGQAFADACAAQAEACAGAAIAVAAIAAglIgVAAQgGAAgDABg");
	this.shape.setTransform(-7.5,-19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAcA2IABhZIgCAHIg0BNIgCADQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgLAAIAAhrIAQAAIAABRIgBAIIAFgMIAzhLIAEgCIAMAAIAABrg");
	this.shape_1.setTransform(-17.6,-19);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjA2IAAhrIAgAAQAIAAAJADQAIACAEAFQAGAEACAGQACAFAAAJQAAAJgCAFQgCAFgGAFQgEADgJAEQgIACgIAAIgRAAIAAAogAgUACIARAAQAFAAAFgCIAIgDQADgDABgEQACgEAAgFIgCgJQgBgEgDgDQgDgDgFgBIgKgBIgRAAg");
	this.shape_2.setTransform(-27.4,-19);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggA2IAAhrIBBAAIAAANIgyAAIAAAjIAoAAIAAALIgoAAIAAAjIAyAAIAAANg");
	this.shape_3.setTransform(-36.4,-19);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOAzQgKgFgGgHQgGgHgEgKQgEgLAAgLQAAgLAEgLQAEgKAHgHQAHgIAJgDQALgEAKAAQAMAAAIAEQAIADAIAGIgGAIIgBABIgCAAIgDgBIgFgDIgIgDQgEgBgHgBQgIABgGACQgHADgFAFQgEAFgEAJQgCAIAAAIQAAAKADAIQACAGAFAGQAGAGAGADQAGACAHAAIAJAAIAHgCIAGgCIAFgFIABgBIACAAIACABIAGAHQgGAIgKADQgJAFgOAAQgKAAgKgEg");
	this.shape_4.setTransform(-45.9,-19);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAcA2IAAguIgSAAIgDACIgHAGIgVAhQgCACgCABQgCACgEAAIgMAAIAcgnQAFgHAFgDQgFAAgGgDIgIgGIgEgIQgCgEAAgGQAAgGADgGQADgGAEgEQAFgEAHgCQAIgDAHAAIAlAAIAABrgAgCgnQgDABgEADIgEAGIgBAHIABAIQABAEADACQAEADADAAQADACAGAAIAVAAIAAglIgVAAQgGAAgDABg");
	this.shape_5.setTransform(-60.6,-19);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAnA2QgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAAAIgCgDIgKgZIgvAAIgKAZIgBADIgEABIgMAAIArhrIAPAAIArBrgAgTAOIAnAAIgRgpIgDgLg");
	this.shape_6.setTransform(-70,-19);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AglA2IAAhrIAjAAQAHAAAJACQAIADAEADQAFAEACAFQACAEAAAIIgBAHIgEAHQgDADgDACQgEADgFACQAMABAFAGQAGAGAAAKQAAAIgCAFQgCAFgGAEQgEAEgIADQgGACgKAAgAgWAqIAWAAQAGAAAFgCIAHgEQACgBACgFQABgDAAgEQAAgIgGgFQgFgFgMAAIgWAAgAgWgFIAcgBIAIgEQADgCABgDQABgDAAgFQAAgJgFgEQgFgEgLAAIgUAAg");
	this.shape_7.setTransform(-79.5,-19);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUAzQgMgFgFgHQgJgIgCgJQgFgLAAgLQAAgKAFgLQADgKAIgIQAGgHALgEQAKgEAKAAQALAAALAEQAKAEAGAHQAIAIAEAKQADALAAAKQAAALgDALQgEAJgIAIQgFAHgLAFQgLAEgLAAQgKAAgKgEgAgPgmQgGADgGAFQgEAGgDAIQgCAIgBAIQABAJACAJQADAHAEAFQAGAFAGAEQAHACAIAAQAJAAAHgCQAGgEAFgFQAFgFADgHQACgJAAgJQAAgIgCgIQgDgIgFgGQgFgFgGgDQgIgCgIgBQgHABgIACg");
	this.shape_8.setTransform(-90.6,-19);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAdA2IAAgxIg5AAIAAAxIgPAAIAAhrIAPAAIAAAwIA5AAIAAgwIAPAAIAABrg");
	this.shape_9.setTransform(-102.4,-19);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAgA2IgCgBIgCgCIgcgsIAAABIgeAtIgCABIgPAAIAlg2Igjg1IAPAAIADABIABABIAbArIAAgCIABgCIAagmQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAOAAIgjA0IAlA3g");
	this.shape_10.setTransform(102.1,-19);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAnA2IAAhrIAPAAIAABrgAg1A2IAAhrIAPAAIAAAuIAUAAQAJAAAJADQAGABAEAEQAFADACAGQADAGAAAGQAAAHgDAGQgCAFgFAFQgHAFgEACQgHACgKAAgAgmAqIAUAAQAHAAAEgCQAFgCACgCQACgCABgDIABgIIgBgIIgDgGIgHgDIgfgBg");
	this.shape_11.setTransform(90.4,-19);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAdA2IAAgxIg4AAIAAAxIgQAAIAAhrIAQAAIAAAwIA4AAIAAgwIAPAAIAABrg");
	this.shape_12.setTransform(77.9,-19);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIAQAAIAAAuIAUAAQAIAAAIADQAIABAEAEQAFAEACAFQACAEAAAIQAAAGgDAHQgCAGgFAEQgGAFgGACQgGACgJAAgAgUAqIAUAAQAFAAAEgCQAFgBACgDIAFgFIABgIIgBgIIgFgGIgHgDIgJgBIgUAAg");
	this.shape_13.setTransform(68.1,-19);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgtA1QgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIAAgJIAFAAIAGgBQADgCACgEQADgCACgHQADgHACgLQACgIABgRIACglIBAAAIAABrIgPAAIAAheIgiAAIgHA9QgCAJgEAIQgEAIgDADQgEAEgEABQgFABgFAAg");
	this.shape_14.setTransform(56.9,-18.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAnA2IgEgBIgBgDIgKgZIgvAAIgKAZIgCADIgDABIgMAAIArhrIAPAAIArBrgAgTAOIAmAAIgSguIgBgGg");
	this.shape_15.setTransform(46.8,-19);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgjA2IAAhrIAgAAQAIAAAJADQAIACAEAFQAGAEACAGQACAFAAAJQAAAHgCAHQgEAGgEAEQgEADgJAEQgIACgIAAIgRAAIAAAogAgUACIARAAQAFAAAFgCIAIgDQADgDABgEQACgEAAgFQAAgFgCgEQgBgEgDgDQgDgDgFgBIgKgBIgRAAg");
	this.shape_16.setTransform(38.4,-19);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAdA2IAAhRIABgIIgEAHIgyBNIgEADQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgMAAIAAhrIAPAAIAABZIACgHIAEgFIAvhIIAEgDQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAMAAIAABrg");
	this.shape_17.setTransform(27.7,-19);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgHA2IAAheIgiAAIAAgNIBTAAIAAANIgiAAIAABeg");
	this.shape_18.setTransform(17.5,-19);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgOAzQgKgFgGgHQgIgIgCgJQgEgLAAgLQAAgLAEgLQAEgKAHgHQAHgIAJgDQALgEAKAAQAMAAAIADQAJAEAGAGIgFAIIgBABIgCAAIgDgBIgFgDIgIgDQgFgBgGgBQgIABgGACQgHADgFAFQgEAFgEAJQgCAIAAAIQAAAKADAIQACAHAFAFQAGAGAGADQAGACAHAAIAJAAIAHgCIAGgCIAFgFIABgBIACAAIACABIAGAGQgGAJgKADQgJAFgOAAQgKAAgKgEg");
	this.shape_19.setTransform(8.2,-19);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAcA2IAAgxIg3AAIAAAxIgQAAIAAhrIAQAAIAAAwIA3AAIAAgwIAQAAIAABrg");
	this.shape_20.setTransform(86.4,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAcA2IABhZIgDAHIgzBNIgCADQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgLAAIAAhrIAQAAIAABRIgBAIIAFgMIAxhIIACgDQABgBAAAAQABAAAAAAQABgBAAAAQABAAABAAIALAAIAABrg");
	this.shape_21.setTransform(75,0);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhCA2IAAhrIAPAAIAABfIAsAAIAAhfIAPAAIAABfIAsAAIAAhfIAQAAIAABrg");
	this.shape_22.setTransform(61.1,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAnA2IgEgBIgBgDIgKgZIgvAAIgKAZIgCADIgDABIgMAAIArhrIAPAAIArBrgAAAggIgSAuIAlAAIgTg0g");
	this.shape_23.setTransform(48,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AArA2IAAhQIAAgEIgkBBIgCADIgEABIgBAAQgEAAgBgEIglhBIAAAEIAABQIgNAAIAAhrIALAAIADABIACACIAlBAIACAIIAEgIIAkhAIACgCIADgBIALAAIAABrg");
	this.shape_24.setTransform(35.9,0);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAgA2IgDgBIgBgCIgcgsIAAADIgcApIgCACIgDABIgOAAIAlg2Igjg1IAPAAIADABIABABIAbArIABgCIAAgCIAagmQAAgBABAAQAAgBABAAQAAAAABgBQAAAAAAAAIAQAAIgkA0IAkA3g");
	this.shape_25.setTransform(20.2,0);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAnA2IAAhrIAPAAIAABrgAg1A2IAAhrIAPAAIAAAuIAVAAQAIAAAJADQAGABAFAEQAFAEABAFQADAGAAAGQAAAGgDAHQgDAGgEAEQgHAFgEACQgGACgKAAgAgmAqIAVAAQAGAAAEgCQAFgCACgCIADgFIABgIIgBgIIgDgGIgHgDIgKgBIgVAAg");
	this.shape_26.setTransform(8.5,0);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAcA2IAAgxIg3AAIAAAxIgQAAIAAhrIAQAAIAAAwIA3AAIAAgwIAQAAIAABrg");
	this.shape_27.setTransform(-4,0);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIAQAAIAAAuIAUAAQAIAAAIADQAHABAFAEQAEADADAGQACAEAAAIQAAAIgDAFQgCAFgFAFQgGAFgGACQgGACgJAAgAgUAqIAUAAQAFAAAEgCQAGgCABgCQADgCABgDIACgIIgCgIQAAgCgEgEIgHgDIgdgBg");
	this.shape_28.setTransform(-13.8,0);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgtA1QAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgKIAFAAIAGAAQADgCADgEQADgEACgFIAEgSIADgYIADgmIA/AAIAABrIgPAAIAAheIgiAAIgDAkQgBAOgDALQgCAJgEAIQgDAGgEAFQgEAEgEABIgJACg");
	this.shape_29.setTransform(-25,0.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAcA2IAAhRIABgIIgDAHIgzBNIgCADIgEACIgMAAIAAhrIAQAAIgBBZIAFgMIAwhIIADgDQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAMAAIAABrg");
	this.shape_30.setTransform(-35.5,0);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhDA2IAAhrIAQAAIAABfIAsAAIAAhfIAPAAIAABfIAsAAIAAhfIAPAAIAABrg");
	this.shape_31.setTransform(-49.3,0);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgZA1QAAAAgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBIAAgKIAGAAIADAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABAAIADgDIADgFIAFgKIgrhMIAOAAIAEACIACACIAZAvIAEAKIAag5IACgCIADgCIANAAIgsBdQgBAEgCAEIgFAEIgGACIgHACg");
	this.shape_32.setTransform(-62.1,0.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgOAzQgKgFgGgHQgIgHgCgKQgEgLAAgLQAAgKAEgMQAEgKAHgHQAHgIAJgDQALgEAKAAQAMAAAIADQAJAFAGAFIgFAIIgBABIgCAAIgDgBIgFgDIgIgDQgFgCgGAAQgIAAgGADQgHADgFAGQgFAEgDAIQgCAJAAAIQAAAKADAIQACAHAFAFQAGAHAGACQAGADAHAAIAJgBIAHgCIAGgDIAFgEIABgBIACAAIACABIAGAGQgGAIgKAFQgJAEgOAAQgKAAgKgEg");
	this.shape_33.setTransform(-71.7,0);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAcA2IABhZIgFAMIgwBIIgDADIgEACIgMAAIAAhrIAQAAIgBBZIAGgMIAvhIIADgDIAEgCIAMAAIAABrg");
	this.shape_34.setTransform(-86.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text1, new cjs.Rectangle(-106.8,-24.5,213.7,30), null);


(lib.pic5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._4();
	this.instance.parent = this;
	this.instance.setTransform(-118,-114.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic5, new cjs.Rectangle(-118,-114.5,236,229), null);


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

}).prototype = getMCSymbolPrototype(lib.pic2, new cjs.Rectangle(-120,-105,300,120), null);


(lib.pic1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(-65,-83,0.867,0.867);

	this.instance_1 = new lib._1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-120,-97,0.694,0.694);

	this.instance_2 = new lib._1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6,-97,0.694,0.694);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic1, new cjs.Rectangle(-120,-97,239,160.5), null);


(lib.legal2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4A4A49").s().p("ADnCRIgGgEIgEgEIgDgGIAEgCIACAAQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABIAEAGIADACIAGACIAFgCIAEgCIACgEIABgEIAAgFIgDgDIgFgBIgHgCIAAgFIAGgBIAFgCIACgEIABgEIgBgFIgCgCIgEgCIgDAAIgEAAIgEACIgCACIgCAEIgBACIgDAAIgEAAIACgHQACgEADgCQACgCAEgBIAHgCIAHACIAGACIAEAGIABAGIgBAFIgCAEIgDADIgEABQAGACACAEQADAEAAAFQAAAEgCAEQAAABgEAEQgDADgEABIgHABgAC2CSIgEgCIgHgEIACgDQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAAAAAIACABIAGADIAFABIAGgCIAEgDIACgEIABgGIAAgFIgDgEIgEgCIgGgBIgJABIgFgBIAFgcIAcAAIAAADIgBAEIgDABIgTAAIgCAOIAIgBQAFAAADACQADABADADQADACABAEIABAHIgBAIIgFAHQgCADgFACIgIABgABUCQQgEgBgDgFQgDgFgBgEQgCgGAAgIQAAgIACgFQABgFADgFIAHgGQAEgCAFAAIAJACQADACADAEQADADACAHQACAFAAAIQAAAIgCAGQgCAGgDADQgCAEgEACIgJACQgFAAgEgCgABYBdIgFADIgDAIIAAAXIADAHIAFAEIAFACIAFgCIAEgEQADgDAAgEIACgMIgCgLQAAgFgDgDQgBgDgDAAIgFgBQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAABgAgMCQQgFgBgCgFQgEgEgBgFQgCgGAAgIQAAgIACgFQABgGAEgEQAEgEADgCQAEgCAFAAQADAAAEACQAEACADAEQAEAEABAGQABADAAAKIgBAOQgBAFgEAEQgCAFgFABQgEACgDAAQgFAAgEgCgAgJBdQgCAAgCADQgCADgBAFIgBALIABAMQABAEACADIAEAEIAGACIADgCIAFgEQADgDAAgEIABgMIgBgLQAAgFgDgDQgCgDgDAAQAAgBAAAAQAAAAAAAAQgBAAgBAAQAAAAgBAAIgGABgAg8CRIgHgFIgEgGIgBgJIABgJIAGgJIAPgUIACgBIADgBIAHAAIgUAZIgBABIAFgCIAFgBIAHACQADAAADADIADAGQACADAAAEQAAAEgCAEIgEAGIgHAEQgDACgFAAgAg5BzIgEADIgCAEIgCAFIABAEIACAFIAFACIAFACIAFgCIAEgCIADgFIABgEIgBgGIgDgDIgEgDIgFgBgAkxCQQgEgCgCgEQgDgDgCgGQgCgGAAgIQAAgIACgFQACgHADgDQADgEADgCQAFgCAEAAIAJACQACABAFAFIAEAKQACAFAAAIQAAAIgCAGIgEAJQgDAFgEABIgJACQgEAAgFgCgAktBdQgCAAgCADQgDADAAAFIgBALIABAMQAAAEADADIAEAEIAFACIAFgCIAEgEQACgCABgFQACgEAAgIQAAgIgCgDQgBgGgCgCQgBgDgDAAIgFgBIgFABgApUCPIgCAAIgIgFQgFgHgBgDQgCgIAAgFQAAgFACgHQACgFAEgFIAIgGIACgBQAHgCAFAAQAFAAAHACQAGADADAEQAFAFABAFQADAFAAAHQAAAHgDAGQgBADgFAHQgEAEgFABQgFADgHAAQgHAAgFgDgApRBeIgFACIgBACQgEAEAAADQgCAFAAAFQAAAGACAEQAAADAEAEIABABIAFAEIAJABIAJgBIAGgFQADgDACgEIABgKIgBgKIgFgHQgDgDgDgBIgJgCQgFAAgEACgAqgCSIgEgCIgHgEIACgDQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAAAAAIACABIAGADIAFABIAGgCIAEgDIACgEIABgGIAAgFIgDgEIgEgCIgFgBIgKABIgFgBIAFgcIAcAAIAAADIgBAEIgDABIgSAAIgDAOIAIgBQAFAAADACQADABADADQADACABAEIABAHIgBAIIgFAHQgCADgFACIgIABgAsCCQQgEgBgDgFQgCgDgCgGQgCgGAAgIQAAgIACgFQACgHACgDIAHgGQAEgCAFAAQAFAAAEACQADACADAEQADADACAHQACAFAAAIQAAAIgCAGQgCAGgDADQgCAEgEACQgEACgFAAQgFAAgEgCgAr+BdIgFADIgDAIIAAAXIADAHIAFAEIAFACIAFgCIAEgEQADgDAAgEQACgEAAgIQAAgIgCgDQAAgFgDgDQgBgDgDAAIgFgBIgFABgAuTCSIgFgCIgHgEIADgDIABgCIADABIAGADIAFABIAFgCIAEgDIADgEIABgGIgBgFIgCgEIgEgCIgGgBIgKABIgFgBIAFgcIAdAAIAAADIgBAEIg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AAAAIAAgDQAAgDgCgCQgDgBgFAAIgFAAIAAgGIAFAAQAFAAACgBQADgCAAgDIgBgDIgBgBIgDgBIgEgBIgEABIgDABIgCAAIgCABIAAAAIgBgBIgCgDIAGgEIAIgBIAHAAIAFADIADAEIABAEIAAADIgBADIgDABIgDACQADACADADQACACAAAFIgBAEIgEAFIgFACIgHABgAGuAwQgDgBgEgDIgEgHIgBgKIABgIIAEgHIAGgFIAJgBQAFAAACABQAEABABADQADADABADQACADAAAFIgBADIgBABIgcAAQAAAEABACIACAFIAFACIAFABIAFgBIAHgCIACABIACACIgDAEIgFABIgJACQgEAAgEgCgAGtAPQgCADgBAFIAXAAIgBgEIgCgEIgDgCIgFgBQgFgBgEAEgAF+AwQgDgBgEgDIgEgHIgBgJIABgJIAEgHQACgDAFgCIAIgBIAJABQAEACACADIAFAHIABAJIgBAJQgCAFgDACQgDADgDABQgEACgFAAQgEAAgEgCgAF9AQQgDAEAAAIQAAAIADAEQADAEAGAAQAGAAADgEQAEgEAAgIQAAgHgEgFQgCgEgHAAQgGAAgDAEgAC6AyIgEgDQAAAAgBgBQAAAAgBgBQAAAAAAgBQgBAAAAgBIAAgEIABgGQAAgBAEgCQAFgDADgBIAMgBIAAgCQAAgFgBgEQgEgCgCAAIgFABIgIAEIgBgBIgBgBIgCgCQAEgEAEgCIAJgBQAFAAACABIAFAEQACACABACIAAAjIgDAAIgCgBIgBgBIgBgFIgDAEIgHADIgEAAgAC+AgIgDADIgBADIAAADIAEADIADAAIAEAAIADgCIACgBIACgCIAAgJgABBAwIgGgEIgEgGQgCgFAAgFQAAgFACgDQABgFADgDQADgEADgBIAJgBIAHABIAHAFIgCACIgBABIgBAAIgGgCIgEgBIgFABIgEADIgDAFIAAAHIAAAGIADAGIAEACIAFACIAEgBIAGgDIACABIACACIgDAEIgIADIgFAAQgEAAgDgCgAASAwQgDgBgEgDQgCgCgCgFIgBgJIABgJIAEgHQACgDAFgCIAIgBIAJABQAEACACADIAEAHIACAJIgCAJQgBAFgDACQgDADgDABQgEACgFAAQgFAAgDgCgAARAQQgDAFAAAHQAAAIADAEQADAEAGAAQAGAAADgEQADgEAAgIQAAgIgDgEQgCgEgHAAQgGAAgDAEgAhrAyIgCgCIgBgEIABgDIACgCIAEAAIADADIABACIgBADQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgCACIgCAAgAlsAyIgFgCIgHgFIACgCQAAgBABAAQAAAAAAgBQABAAAAAAQAAAAABAAIACABIAGACIAEABIAGgBQADgBABgCIADgEIABgFIgBgGIgCgDIgFgDIgFgBIgKACIgEgCIAEgcIAdAAIAAAFIgBACIgEABIgSAAIgDAPIAJgBQAFAAADABQADAAADADIAEAHIABAHQAAAFgCAEQgCAEgDACQgBADgFACIgJABgAokAyIgDgDIAAgFIADgDIAFAAIADADIAAACIAAADIgDADIgCAAgApdAyIgBgCIgCgEIACgDIABgCIAFAAIADADIAAACIAAADIgBABIgBAAIgBACIgCAAgAqxAyIgDgDIAAgFIADgDIAFAAIADADIAAACIAAADQAAAAAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAIgBACIgCAAgArcAwQgFgDgEgEIgFgKQgDgEAAgHQAAgIADgGQACgEAEgEQADgEAGgDIAMgCQAFAAAGACQAGADADADIgDADIAAABIgCAAIgBgBIgIgDIgGAAIgJABIgGAEQgDADgBAEQgCAFAAAGQAAAFACAEQABADADAEQACACAFADQAEACAEgBIAFAAIAHgCIADgCIAAgBIACAAIAEAEQgDAEgGADQgEACgJAAQgHAAgFgCgAyhAwQgGgDgEgEQgEgEgCgGQgCgEAAgHQAAgIACgGQACgGAEgCQACgDAIgEQAHgCAFAAQAEAAAIACQAHAEACADQAEAEACAEQADAIAAAGQAAAEgDAHQgBAFgFAFQgEAEgFADQgFACgHAAQgIAAgEgCgAyegCQgDABgEADIgEAHIgBALIABAJQACAFACACIAHAFIAJABIAIgBIAHgFQADgEABgDQACgEAAgFQAAgGgCgFQgBgCgDgFQgEgDgDgBQgEgBgEAAgAzlAwQgEgCgFgFQgEgDgDgHQgCgFAAgGQAAgIACgGQAEgGADgCQADgEAGgDQAHgCAFAAQAFAAAHACQAGADAEAEIAGAIQACAGAAAIQAAAGgCAFIgGAKQgGAFgEACQgEACgIAAQgHAAgFgCgAzigCQgDABgDADIgEAHQgCADAAAIQAAAGACADQABAFADACIAGAFIAJABIAJgBIAGgFQADgCACgFQABgEAAgFQAAgGgBgFIgFgHQgDgDgDgBQgEgBgFAAQgFAAgEABgA0oAwQgEgCgGgFIgGgKQgCgFAAgGQAAgIACgGQAEgGACgCQAEgEAGgDQAHgCAFAAQAFAAAHACQAGADADAEQADACAEAGQACAGAAAIQAAAGgCAFQgDAHgEADQgEAFgFACQgFACgHAAQgIAAgEgCgA0lgCQgDABgDADIgFAHQgBAFAAAGQAAAFABAEQABADAEAEIAGAFIAJABIAJgBIAGgFQADgCABgFQACgDAAgGQAAgIgCgDIgEgHQgDgDgDgBQgEgBgFAAQgFAAgEABgASAAyIAAghIgBADIgUAcIgBABIgCABIgFAAIAAgsIAIAAIAAAhIABgEIABgBIATgaIADgCIAFAAIAAAsgAQRAyIAAgDIAAgDIAVgUIAHgJIACgEIABgGIgBgEIgCgDIgEgBIgDgBIgEABIgEABIgCACIgCAEIgBACIgDAAIgEgBIACgGQACgEADgBQADgDADgBIAHgBIAHABIAGAEQADABABAEQABADAAADIgBAHIgDAFIgDAFIgVAUIAHgBIAUAAIABABQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAAAIAAAGgAPqAyIAAgdIAAgBIAAgDIAAACIgBABIgBACIgTAaIgBABIgCABIgFAAIAAgsIAIAAIAAAdIAAACIAAACIACgFIATgaIADgCIAFAAIAAAsgAO6AyIAAghIgBACIgVAdIgBABIgCABIgFAAIAAgsIAJAAIAAAfIgBACIADgFIATgaIADgCIAFAAIAAAsgAOQAyIgDgBIgCgCIgIgOIgCgCIgEgBIgEAAIAAAUIgIAAIAAgsIAIAAIAAASIAEAAIADAAIACgBIAIgPIAFgCIAGAAIgNATIgDACIAEACIACACIALATgAM1AyIAAgUIgUAAIAAAUIgIAAIAAgsIAIAAIAAARIAUAAIAAgRIAIAAIAAAsgAMGAyIAAghIgBADIgVAcIgBABIgBABIgFAAIAAgsIAIAAIAAAfIgBACIACgEIABgBIATgaIADgCIAFAAIAAAsgAJCAyIAAg9IASAAQAGAAAEACQAEACACACQAEADABACQABAEAA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FAAIABAHIACABIADAAIADAAIABgBIACgCIAAgFIAEAAIACACIAAABIAAAEIgDADIgEABIgFABgAPbAAIgEgBIgDgDIAAgEIAAgBIABgCIAFAAIAAAFIABACIACABIADAAIADAAIACgBIABgHIAFAAIABACIABABIgBAEIgDADIgDABIgGABgAwshDIAAgPIgjAAIAAANIAAABIgCABIgFAAIAAgUIACAAIACgBIADgDIADgDIAEgeIAbAAIAAAkIAIAAIAAASIAAACQAAAAAAAAQgBAAAAABQAAAAAAAAQgBAAAAAAgAxEhjIgFAMIAVAAIAAgfIgNAAgAzahDIAAg5IAFAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAIABAFIAGgFQADgCAFgBIAHACIAFAEQACAEABAEQABABAAAIIgBAJIgEAHIgFADQgEACgEAAIgHgBIgFgDIAAATgAzNh2IgFAGIAAATQACADADACIAFABQAGAAACgFQAEgEAAgHIgBgIQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAIgDgDIgFgBIgGABgAsbhSIgEgCIgDgDIAAgGIABgEIAEgFIAJgDIAMgBIAAgDQAAgFgCgDQgCgCgEAAIgFABIgDABIgCACIgCABIgCgBIgCgEQADgCAEgCIAJgDIAHACIAFADIADAGIAAAhIgFAAIgCgFIgGAEIgEABgAsRhkIgGABIgDADIgBADIABACIABADIAFABIAHgBIAFgFIAAgJgAv4hUQgFgBgEgFQgEgDgDgHQgCgFAAgHQAAgGACgGQADgGAEgFQAEgEAFgCQAFgBAHAAQAHAAAFABIAKAGIAGALQACAGAAAGQAAAHgCAFIgGAKQgGAFgEABQgFACgHAAQgIAAgEgCgAv1iFIgGADIgFAJQgBAEAAAFQAAAGABAEQACAEADADQABACAFACQAEACAFABQAFgBAEgCQAEgCACgCQADgDABgEQACgEAAgGQAAgFgCgEIgEgJIgGgDQgEgDgFAAQgFAAgEADgAymhSIgFgCIgCgDIgBgGQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAABAAIAEgFIAIgDIAMgBIAAgDQAAgFgCgDQgCgCgEAAIgEABIgDABIgDACIgCABIgBgBIgCgCIgBgCQADgCAFgCQAEgCAFgBIAHACIAEADIADAGIABAGIAAAbIgFAAIgCgFIgHAEIgDABgAychkIgGABIgDADIgBADIAAACIACADIACABIADAAIAGgBIAFgFIAAgJgAs+hSIAAglIgQAAIAAgFIAoAAIAAAFIgQAAIAAAlgAtdhSIAAgeIABgCIgCACIgBACIgTAaIgBABIgCABIgFAAIAAgqIAIAAIAAAfIABgCIABgBIAVgcIACAAIAEAAIAAAqgAuthSIAAg8IATAAQAHAAACABIAHADIAEAFIABAGIAAAFIgDADIgDAEIgFACQAGABAEADQADAFAAAEIgBAHQgCAFgCABQgDACgEABIgJACgAulhYIANAAIAGgCIAEgCIACgDIABgFQAAgDgDgDQgDgDgHAAIgNAAgAulhzIALAAIAFgCIAEgBIADgDIAAgFQAAgFgDgCQgCgDgHAAIgLAAgAxlhSIAAgUIgUAAIAAAUIgIAAIAAgqIAIAAIAAAQIAUAAIAAgQIAIAAIAAAqgAz8hSIAAg8IAlAAIAAAGIgcAAIAAA2gA0sh2IAAgKIAAgBIgCACIgHAEIgCgEIAIgEIACgBIgDAAIgHgFIACgDIAHAEIACABIAAgBIAAgJIADAAIAAAJIAAABIAJgFIACADIgGAFIgCAAIgBAAIAKAFIgDAEIgHgEIgCgDIAAADIAAAJg");
	this.shape.setTransform(133.8,13.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal2, new cjs.Rectangle(-0.1,-1.5,267.8,29.2), null);


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
(lib._300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ayq/KMAlVAAAMAAAA+VMglVAAAg");
	this.shape.setTransform(150,125,1.251,0.624);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(418));

	// legal
	this.instance = new lib.legal2();
	this.instance.parent = this;
	this.instance.setTransform(116.2,230.8,1,1,0,0,0,105.1,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A4A49").s().p("AAtAmIAAg7IAGAAIAAAGIAGgGIAGgBQAHABADADQAEACADAFQACAGAAAFQAAAHgCAEQgDAFgEAEQgEABgGAAIgGgBQgDAAgCgDIAAAVgAA2gMQgDAFAAAIQAAAHADAEQAEAEAEAAQAFAAAFgFQADgDAAgIQAAgIgDgEQgFgEgEAAQgFAAgEAEgAAAATQgCgDAAgGIABgGQABgDACAAQACgBADgCIAGgBIANgCIAAgBQAAgFgCgDQgDgCgFAAQgGAAgCACQgCACgBAFIgHgBQABgFACgDIAHgFIAJgBIAIABQAEABACADQACACAAADIAAAHIAAAIQAAALABACIACAFIgIAAIgBgFQgEADgEABIgJABQgGABgEgDgAAOADIgGABIgDACIgBAEQAAABAAAAQABABAAAAQAAABAAAAQABABAAAAQACADAFAAQAEAAADgDQADgBACgDQABgDAAgEIAAgDIgMADgAhqASQgGgEgEgGQgCgIAAgIQAAgJADgHQAEgHAGgDQAGgDAIAAQAJAAAGAEQAHAEACAIIgHABQgDgFgEgEQgEgCgGAAQgHAAgFADQgEADgCAFQgBAGAAAGQAAAHACAFQACAGAEADQAFACAGAAQAGAAAFgEQAEgDACgHIAHACQgCAJgFAFQgHAEgKAAQgJAAgGgDgABiAVIAAgkIgNAAIAAgGIAiAAIAAAGIgNAAIAAAkgAgTAVIAAgiIgNAiIgGAAIgMgjIAAAjIgHAAIAAgqIALAAIAMAhIAMghIAKAAIAAAqg");
	this.shape_1.setTransform(83.4,219.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.shape_1}]},328).wait(90));

	// pic5
	this.instance_1 = new lib.pic5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,219.5,1,1,0,0,0,0.1,0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(328).to({_off:false},0).to({regX:0,regY:0,y:199.5,alpha:1},7,cjs.Ease.get(1)).wait(75).to({y:219.5,alpha:0},7,cjs.Ease.get(1)).wait(1));

	// pic4
	this.instance_2 = new lib.pic4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(157,101.5,0.63,0.63,0,0,0,0.1,0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(246).to({_off:false},0).to({x:150.7,alpha:1},7,cjs.Ease.get(1)).wait(75).to({x:138.1,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(82));

	// pic3
	this.instance_3 = new lib.pic1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(158.4,120,0.8,0.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(164).to({_off:false},0).to({x:150.4,alpha:1},7,cjs.Ease.get(1)).wait(75).to({x:142.4,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(164));

	// pic2
	this.instance_4 = new lib.pic2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(130,155);
	this.instance_4.alpha = 0.289;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(82).to({_off:false},0).to({x:120,alpha:1},7,cjs.Ease.get(1)).wait(75).to({x:100,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(246));

	// pic1
	this.instance_5 = new lib.pic1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(158.4,120,0.8,0.8);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:150.4,alpha:1},7,cjs.Ease.get(1)).wait(75).to({x:142.4,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(328));

	// text5
	this.instance_6 = new lib.text5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(160,93.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(328).to({_off:false},0).to({x:150,alpha:1},7,cjs.Ease.get(1)).wait(75).to({x:140,alpha:0},7,cjs.Ease.get(1)).wait(1));

	// text4
	this.instance_7 = new lib.text4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(150,211.1,0.8,0.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(246).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},7,cjs.Ease.get(1)).wait(75).to({scaleX:0.8,scaleY:0.8,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(82));

	// text3
	this.instance_8 = new lib.text3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(150,200.6,0.8,0.8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(164).to({_off:false},0).to({scaleX:1,scaleY:1,y:201,alpha:1},7,cjs.Ease.get(1)).wait(75).to({scaleX:0.8,scaleY:0.8,y:200.6,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(164));

	// text2
	this.instance_9 = new lib.text2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(150,199.8,0.8,0.8);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(82).to({_off:false},0).to({scaleX:1,scaleY:1,y:200.1,alpha:1},7,cjs.Ease.get(1)).wait(75).to({scaleX:0.8,scaleY:0.8,y:199.8,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(246));

	// text1
	this.instance_10 = new lib.text1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(150,201.5,0.8,0.8);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleX:1,scaleY:1,y:202.1,alpha:1},7,cjs.Ease.get(1)).wait(75).to({scaleX:0.8,scaleY:0.8,y:201.5,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(328));

	// bg
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3B454C").s().p("AC+BDQgIgKAEgWIAEgaQAFgWAKgJQALgJARAAIAHAAQANAAAGAEQAHAEADAIIALg7IAPAAIgaCVIgPAAIADgQQgHAJgIAEIgJADIgNACQgWAAgIgKgADpgRQgMAAgFAFQgGAFgDAUIgEASQgDAUAEAGQAEAFAPAAIAKgBQAKgBAGgFQAKgIACgQIADgSQAEgPgIgIQgGgHgRAAgAguBFQgHgHADgTQACgMADgFQACgHAGgEQAEgDAJgBQAHgCANAAIABAAQAPAAAFADQAHACADAFIAEgSQACgMgFgDQgEgFgUAAIgIABQgJABgCACQgGADgBAIIgQAAIABgCQADgNAJgGQAIgFANgBIAJAAIAaABQAIACAEADQADACABAHQACAFgDAMIgMBKIgPAAIABgLQgEAGgJADQgDACgIABIgKABQgYAAgIgIgAgaAaQgGAEgBALQgCAMAEAEQAFAEARAAIAFAAQAKAAAHgDQAHgDADgHIABgLQACgIgHgDQgHgEgQAAQgQAAgGAEgAj4BNQgeAAgKgLQgKgLAFgdIAJgyQAFgdAOgLQAOgMAeAAIATAAQAbAAAMAKQAMAJgEAUIgBAGIgRAAIAAgBQADgPgHgHQgHgGgWAAIgNAAQgQAAgHACQgGABgGAEQgGAGgCAEIgGAXIgHAqQgCANAAAJQABAGADAEQAEAEAHABQAGACAQAAIAMAAIAVgBIALgFQAEgDAEgHQADgIACgMIACgJIgqAAIACgQIA7AAIgEAaQgFAcgOAMQgOALgeAAgACIBLIAMhCQADgQgEgFQgEgFgOAAQgPAAgLAHQgJAIgDAPIgLA+IgPAAIAShpIAPAAIgCAOQAGgIAJgDQAHgEAPAAQAVAAAHAIQAHAJgEATIgMBGgAiTBLIAThpIAPAAIgDAOQAGgHAHgFQAHgDAMAAQASAAAFAIQAFAJgDATIAAABIgQAAIAAgDQACgLgCgFQgEgEgLAAQgMAAgIAHQgHAIgEAPIgKA+g");
	this.shape_2.setTransform(240.7,20.2,0.8,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3B454C").s().p("ACCBTQgCgCAAgEIABgFQgGAEgKAFQgNAFgPAAQgKAAgFgCIgDgCQgEgDgCgEQgDgDAAgFQAAgOAMgOIABgBQANgNAUgGQAEgDAFAAQANgDAKAAIALAAQAGAAACgEQAEgDAAgGQAAgGgFgDQgFgEgKAAQgNAAgNAFQgIADgDADIgGABQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAgFAJgGIAMgHQAPgGAWAAQAQAAAHAFQAGAEABADQADAFAAAFQAAAKgLAWIgRAkQgCAFAAAHQAAACgHAGQgHAFgEAAQgCAAgDgEgABxAcIgCABQgIADgHAFQgNAJAAAMQAAAGAEADQADAEAIAAQAGAAAJgDIABAAQAIgDAHgGQAGgEAEgGQAEgFAAgFQAAgHgEgCQgFgDgHAAIgOABgAhSBTQgCgCAAgDQAAgMATgnIAQgeIAGgMIAEgHIAFgDQAKgEAFAAQAFAAAAAFQAAADgEAIIgKASQgZAygCANIgDAGIgEACQgMAJgEAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAgAgEBPIgDgBQgHgGAAgKQAAgKAKgTIABgFIAQgfIABgDQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBAAgBAAIAAAAIgPABIgDAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgCADgCIAEgEIABgCIAGgFIAPAAQAEAAACgCIACgEIARgdIADgCQAIgEAHAAQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABIABAEIgCAGIgKAVQgBABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAACAGAAIASgBQAGAAAAADIgEAEIgHAGIgBABQgIADgFAAIgJAAIgFABIgEAEQgJAOgMAZQgHAOAAAHQAAAFADADQADADAHAAQAMAAAQgKIAFgDQAAAAABAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAADgKAJQgUAQgTAAQgJAAgEgEgAizBKQgDgLAAgWIAFhpIABgDIAGgDQALgGAFAAIAEABQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABIgBASQgEAxAAAcIAAAUQABAFACAAQACAAAFgHIBShyIAEgCIADgBQAMgEAGAAQAEAAAAAEIgFAHQgOAPgGAJIhKBkQgFAHgKAJQgNAKgJAAQgHAAgDgJgAggg2QAAgDAEgIQAFgJAEgDQACgDAGgDIAHgCIADgBQABAAAAAAQAAABAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAABQgBAHgCAEIgEAIIgDACIgLAGQgGADgEAAQgEAAAAgEg");
	this.shape_3.setTransform(250.3,34.6,0.8,0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3B454C").s().p("Ah7CYQgkgTAAgmQABg8AvgzQAtgwA+gTIARgDQALAAAAAHQAAAFgGABIgBgBQgJAAgIACQgyAOglAtQgkAtAAA0QAAAbAWAQQAUAPAfAEQBBAIA1ggQA8gkAAg/QAAgmgWgVQgVgUglgBQgaABgTAKQgSAJgQAVQgLAOgHgHQgFgGAIgLQARgWAigMQAggLAfAAQAoABAYAUQAbAWAAAnQgDBDhCAuQg/AshPAAQgqAAgdgQgAAThmQABgHAEAAQALgJAKgRIARgbQADgFACAAIAFADQADACADAIQACAHgEAHQgGALgNAMQgLALgMAGQgEACgDAAQgCAAgGgEg");
	this.shape_4.setTransform(277.5,20.2,0.8,0.8);

	this.instance_11 = new lib.ClipGroup_20();
	this.instance_11.parent = this;
	this.instance_11.setTransform(58.5,20.5,0.9,0.9,0,0,0,53,10.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#E6F4FC","#E3F3FB","#D9EEFA","#C7E6F7","#B0DCF3","#A3D6F1","#90CEEB","#8BCCEA","#31AED8"],[0,0.192,0.349,0.49,0.627,0.686,0.82,0.843,1],8.6,-168.6,-3.5,70.5).s().p("AyzfRMAAAg+hMAlnAAAMAAAA+hg");
	this.shape_5.setTransform(150,120,1.246,0.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.instance_11},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(418));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.5,95,301,300);
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