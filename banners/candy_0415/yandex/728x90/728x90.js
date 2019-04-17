(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"728x90_atlas_", frames: [[238,0,180,199],[0,231,175,90],[238,201,150,169],[0,0,236,229]]}
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
	this.spriteSheet = ss["728x90_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["728x90_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._2_1 = function() {
	this.spriteSheet = ss["728x90_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["728x90_atlas_"];
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
	this.shape.graphics.f("#FFFFFF").s().p("AgGA2IAAheIgjAAIAAgNIBTAAIAAANIgiAAIAABeg");
	this.shape.setTransform(197,33.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAaA2QgEAAgCgEIgaglIgDgDQAAAAAAAAQgBAAAAgBQgBAAgBAAQAAAAgBAAIgLAAIAAAtIgPAAIAAhrIAfAAQAKAAAGACQAJADAEADQAFAEACAGQACAEAAAIQAAAGgBAFIgFAJIgJAFQgEADgHACQAEACABACIAfArgAgYgBIAPAAIAKgCIAIgEQADgDACgDQABgEAAgFQAAgJgGgFQgGgFgLAAIgQAAg");
	this.shape_1.setTransform(188.8,33.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAnA2IgEgBIgCgDIgJgZIgvAAIgKAZIgCADIgDABIgMAAIArhrIAPAAIArBrgAgBggIgSAuIAmAAIgSguIgBgGg");
	this.shape_2.setTransform(178.4,33.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AArA2IAAhQIAAgEIgkBBIgCADIgEABIgBAAQgDAAgCgEIglhBIAAAEIAABQIgNAAIAAhrIAOAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAABIAlBAIACAIIAEgIIAkhAQAAgBAAAAQAAgBAAAAQABAAAAAAQAAgBABAAIAOAAIAABrg");
	this.shape_3.setTransform(166.3,33.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKA2QgFAAgEgDIgIgEIgHgGIAEgIIACgBIACgBQAAAAABABQAAAAABAAQAAAAABABQAAAAABAAIAFAEIAHADQAEACAGAAIAIgBIAHgEQADgCABgEQACgDAAgFQAAgEgDgEQgCgDgDgBIgagLIgJgEQgCgCgDgGQgDgGAAgGQAAgFADgHQACgFAEgEQAFgEAGgCQAGgDAHAAQAJAAAIADQAIADAFAFIgFAKIgDAAIgHgEIgGgDIgJgBIgHABIgGADIgEAGQgBACAAAEQAAAEACADIAGAFIAaAKIAIAFQADACADAFQACAHAAAFQAAAGgCAHQgCAGgFAFQgFAEgHADQgHADgHAAg");
	this.shape_4.setTransform(155.1,33.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAnA2IgDgBIgCgDIgKgZIgvAAIgKAZIgBADIgEABIgMAAIArhrIAPAAIArBrgAgTAOIAnAAIgRgqIgDgKg");
	this.shape_5.setTransform(142.7,33.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGA2IAAheIgjAAIAAgNIBTAAIAAANIgjAAIAABeg");
	this.shape_6.setTransform(134.3,33.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHA2IAAhrIAPAAIAABrg");
	this.shape_7.setTransform(127.7,33.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgGA2IgshrIAMAAIAEABIACADIAfBPIABAGIADgMIAehJIACgDIADgBIANAAIgsBrg");
	this.shape_8.setTransform(120.5,33.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVAzQgJgEgHgHQgHgHgEgLQgEgKAAgMQAAgLAEgKQADgKAIgIQAGgGAKgFQALgEAKAAQALAAALAEQAKAEAHAHQAHAJADAJQAEAIAAANQAAAOgEAIQgEALgGAHQgIAHgJAEQgLAEgLAAQgKAAgLgEgAgOgmQgHADgFAFQgFAFgDAJQgDAIAAAIQAAAKADAHQADAJAFAFQAFAFAHADQAHACAHAAQAIAAAIgCQAGgDAFgFQAFgFADgJQACgFAAgMQAAgKgCgGQgDgJgFgFQgFgFgGgDQgIgCgIAAQgHAAgHACg");
	this.shape_9.setTransform(106.1,33.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgHATIgBgCIAEgHIACgHIAAgIIgDgHIgBgEIACgCIAIgDQADAFABAGQABAGgBAFQgBAHgCAFQgEAGgDADg");
	this.shape_10.setTransform(98.5,29.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AguA2IAAhrIAoAAQAMAAAJAEQAKAEAHAHQAHAHAEAKQAEAKAAALQAAALgEALQgEALgHAGQgHAHgKAEQgKAEgLAAgAgeApIAYAAQAIAAAHgDQAGgCAGgGQAFgFACgIQADgGAAgLQAAgKgDgHQgCgIgFgFQgGgFgGgDQgGgCgJAAIgYAAg");
	this.shape_11.setTransform(91.5,33.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAkA2IgDgBIgCgCIg9hPIAAAEIAABOIgNAAIAAhrIALAAIACADIA9BOIAAhRIANAAIAABrg");
	this.shape_12.setTransform(79.7,33.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAnA2IgEgBIgCgDIgJgZIgvAAIgKAZIgCADIgDABIgMAAIArhrIAPAAIArBrgAgBggIgSAuIAmAAIgSguIgBgGg");
	this.shape_13.setTransform(68.9,33.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAaA2QgEAAgCgEIgaglIgDgDQAAAAAAAAQgBAAAAgBQgBAAgBAAQAAAAgBAAIgLAAIAAAtIgPAAIAAhrIAfAAQAKAAAGACQAJADAEADQAFAEACAGQACAEAAAIQAAAGgBAFIgFAJIgJAFQgEADgHACQAEACABACIAfArgAgYgBIAPAAIAKgCIAIgEQADgDACgDQABgEAAgFQAAgJgGgFQgGgFgLAAIgQAAg");
	this.shape_14.setTransform(59.7,33.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgNAzQgKgEgIgHQgHgIgEgJQgEgMAAgLQAAgLAEgKQAEgMAHgGQAHgHAKgEQALgEALAAIAMABQAFAAAFADIAJAEIAHAGIgEAHIgDACIgEgBIgJgGIgIgCIgLAAQgHAAgIACQgIADgEAFQgFAGgDAIQgDAIAAAIQAAAKADAIQADAIAFAFQAGAFAHAEQAHACAJAAIANgBIALgEIAAgYIgQAAIgDAAIAAgCIAAgJIAhAAIAAApQgIAHgJACQgJADgLAAQgMAAgLgEg");
	this.shape_15.setTransform(48.8,33.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAAAzQgIgDgGgHQgGgFgEgKQgEgIgBgMIgXAAIAAAwIgPAAIAAhqIAPAAIAAAvIAXAAQABgMAEgIQAEgKAGgFQAGgHAIgDQAKgEAJAAQALAAAJAEQALAGAFAFQAGAIAEAKQADAJAAAMQAAANgDAJQgEAKgGAIQgFAGgLAFQgJAEgLAAQgJAAgKgEgAAFgmQgGADgEAFQgEAHgCAHQgDAIAAAIQAAAJADAIQACAHAEAHQAEAFAGADQAGADAIAAQAIAAAGgDQAHgDADgFQAFgGACgIQADgIAAgJQAAgIgDgIQgCgIgFgGQgDgFgHgDQgGgDgIAAQgIAAgGADg");
	this.shape_16.setTransform(171.2,15.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgVAzQgJgEgHgHQgHgHgEgLQgEgKAAgMQAAgLAEgKQADgKAIgIQAGgGAKgFQALgEAKAAQALAAALAEQALAGAGAFQAHAJADAJQAEAIAAANQAAAOgEAIQgEALgGAHQgHAHgKAEQgLAEgLAAQgKAAgLgEgAgOgmQgGACgGAGQgFAFgDAJQgCAGAAAKQAAAMACAFQADAJAFAFQAGAGAGACQAHACAHAAQAIAAAIgCQAGgDAFgFQAFgFADgJQADgHAAgKQAAgIgDgIQgDgJgFgFQgFgFgGgDQgIgCgIAAQgHAAgHACg");
	this.shape_17.setTransform(157,15.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AglA2IAAhrIAiAAQAJAAAIACQAHACAEAEQAFACACAGQADAGAAAGIgCAIIgDAGIgHAGIgIAEQALACAGAGQAGAGAAAKQAAAGgCAGQgDAFgFAFQgFAEgHACQgIADgIAAgAgWApIAWAAQAGAAAEgBQAGgCABgCQADgCACgEIABgIQAAgIgGgEQgFgFgMAAIgWAAgAgWgFIATAAIAJgBQAGgCABgCQADgCACgEQABgDAAgEQAAgJgFgFQgHgEgKAAIgTAAg");
	this.shape_18.setTransform(146.4,15.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgOAzQgJgEgHgHQgGgGgEgLQgEgMAAgLQAAgLAEgKQAEgLAHgHQAGgGAKgFQALgEAKAAQALAAAJAEQAKAFAGAFIgGAHIgBABIgCABIgDgBIgFgEIgIgDQgFgCgGABQgIAAgGACQgHADgFAFQgEAFgEAJQgCAIAAAIQAAAKADAHQABAGAGAIQAFAFAHADQAFACAIAAIAJAAIAHgBIAGgDIAFgFIABgBIACAAIACABIAGAHQgGAHgKAFQgKAEgNAAQgKAAgKgEg");
	this.shape_19.setTransform(136.4,15.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAcA2IABhZIgDAHIgCAFIgxBIIgCADQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgLAAIAAhrIAQAAIAABRIgBAHIACgGIA0hNIACgDIAEgCIAMAAIAABrg");
	this.shape_20.setTransform(121.7,15.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgjA2IAAhrIAgAAQAKAAAHACQAJAEADADQAGAFACAGQACAFAAAJQAAAIgCAFQgCAGgGAEQgFAFgIACQgIADgIAAIgRAAIAAAogAgUACIARAAQAEAAAGgCIAIgEQADgDABgEQACgDAAgFQAAgFgCgEQgBgEgDgDQgEgDgEgBQgFgCgFAAIgRAAg");
	this.shape_21.setTransform(111.9,15.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AggA2IAAhrIBBAAIAAANIgyAAIAAAiIAoAAIAAALIgoAAIAAAkIAyAAIAAANg");
	this.shape_22.setTransform(102.9,15.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIBFAAIAAAMIg2AAIAAAiIAVAAQAHAAAJACQAIADAEACQAFAFACAEQACAHAAAFQAAAHgCAHQgDAFgFAFQgFAEgHACQgIADgHAAgAgVApIAVAAQAFAAAFgBQACgBAFgDIADgGIABgHIgBgIIgDgGQgFgDgCAAQgFgCgFAAIgVAAg");
	this.shape_23.setTransform(94,15.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAnA2IAAhrIAPAAIAABrgAg1A2IAAhrIAPAAIAAAuIAVAAQAJAAAIACQAGADAFACQAFAEACAFQACAGAAAGQAAAHgDAHQgCAFgFAFQgEAEgHACQgIADgIAAgAgmApIAVAAQAGAAAEgBQADgBAEgDIADgGIABgHIgBgIIgDgGQgEgDgDAAQgEgCgGAAIgVAAg");
	this.shape_24.setTransform(82.1,15.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AglA2IAAhrIAiAAQAJAAAIACQAHACAFAEQAEACACAGQADAGAAAGIgCAIQAAACgDAEIgHAGIgIAEQALACAGAGQAGAGAAAKQAAAGgCAGQgDAFgFAFQgFAEgHACQgHADgJAAgAgWApIAWAAQAGAAAEgBQAGgCABgCQADgCACgEIABgIQAAgIgGgEQgFgFgMAAIgWAAgAgWgFIATAAIAJgBQAGgCABgCQADgCACgEQABgDAAgEQAAgJgFgFQgHgEgKAAIgTAAg");
	this.shape_25.setTransform(70.8,15.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIAQAAIAAAuIAUAAQAGAAAKACQAIADADADQAFADADAGQACAGAAAFQAAAIgDAGQgCAFgFAFQgGAFgGACQgGACgJAAgAgUAqIAUAAQAFAAAEgCQAFgCACgCQADgCABgDQABgEAAgEQAAgFgBgDIgDgGQgDgCgFgBIgdgBg");
	this.shape_26.setTransform(-8,26.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgHA2IAAheIgiAAIAAgNIBTAAIAAANIgiAAIAABeg");
	this.shape_27.setTransform(-17.5,26.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAnA2IgEgBIgCgDIgJgZIgvAAIgKAZIgCADQAAAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgMAAIArhrIAPAAIArBrgAgCgbIgRApIAnAAIgUg0g");
	this.shape_28.setTransform(-26,26.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgjA2IAAhrIAgAAQAIAAAJADQAGACAHAFQAEAEADAGQACAHABAHQAAAIgEAGQgBAFgGAFQgEAEgJADQgIACgIAAIgRAAIAAAogAgUACIARAAQAFAAAEgCQAGAAACgDIAGgHQABgEAAgFIgBgJQgCgEgEgDQgDgDgEgBIgKgCIgRAAg");
	this.shape_29.setTransform(-34.4,26.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIBFAAIAAAMIg1AAIAAAiIAUAAQAGAAAKACQAIADAEADQAFAEACAFQACAEAAAHQAAAJgDAFQgCAGgFAEQgGAFgGACQgGACgJAAgAgUAqIAUAAQAFAAAEgCQAGgCABgCQADgCABgDQACgEAAgEQAAgFgCgDQAAgCgEgEIgHgDIgdgBg");
	this.shape_30.setTransform(-43.7,26.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAnA2IAAhrIAPAAIAABrgAg1A2IAAhrIAPAAIAAAuIAVAAQAHAAAKACQAGADAEADQAFADACAGQADAGAAAFQAAAHgDAHQgDAGgEAEQgHAFgEACQgHACgKAAgAgmAqIAUAAQAHAAAEgCQAFgCACgCQACgCABgDQABgEAAgEIgBgIIgDgGQgCgCgFgBIgKgBIgVAAg");
	this.shape_31.setTransform(-55.5,26.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AglA2IAAhrIAjAAQAKAAAGACQAIADAEADQAFAEACAFQACAEAAAIIgBAHIgEAHQgDADgDACIgJAFQAMABAGAGQAFAHAAAJQAAAIgCAFQgDAGgFADQgEAEgHADQgHACgKAAgAgWAqIAWAAQAGAAAFgCIAHgEQACgBACgFQABgDAAgEQAAgIgGgFQgFgFgMAAIgWAAgAgWgFIATAAQAFAAAEgBQAEgBAEgDQADgCABgDIABgIQAAgJgFgEQgFgFgLAAIgUAAg");
	this.shape_32.setTransform(-66.9,26.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0EA6E0").s().p("AnpB+QgMAAgIgIQgIgIAAgLIAAjEQAAgLAIgJQAJgIALAAIPTAAQAMAAAIAIQAIAIAAAMIAADEQAAALgIAIQgIAIgMAAg");
	this.shape_33.setTransform(-38,27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text5, new cjs.Rectangle(-89.7,9.6,291,30), null);


(lib.text4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AArA2IAAhUIgkBBIgCADIgEABIgBAAQgDAAgDgEIglhBIABAEIAABQIgNAAIAAhrIALAAIADABIADACIAkBAIACAIIAohIIACgCIADgBIALAAIAABrg");
	this.shape.setTransform(108,-19.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AArA2IAAhQIAAgEIgkBBIgCADIgEABIgBAAQgDAAgCgEIglhBIAAAEIAABQIgNAAIAAhrIALAAIADABQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABIAlBAIACAIIAEgIIAkhAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAIADgBIALAAIAABrg");
	this.shape_1.setTransform(94,-19.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAnA2IgEgBIgCgDIgJgZIgvAAIgKAZIgCACIgDACIgMAAIArhrIAPAAIArBrgAgBggIgSAuIAmAAIgTg0g");
	this.shape_2.setTransform(81.9,-19.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgjA2IAAhrIAgAAQAIAAAIADQAHABAGAGQAFAEADAGQACAHAAAHQAAAHgDAHQgCAFgFAFQgGAEgHADQgIACgIAAIgRAAIAAAogAgUACIARAAQAFAAAEgCQAGgBACgCQAEgEABgEQACgDAAgFQAAgFgCgEQgBgDgEgEQgCgCgFgCIgKgBIgRAAg");
	this.shape_3.setTransform(73.5,-19.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggA2IAAhrIBBAAIAAANIgxAAIAABeg");
	this.shape_4.setTransform(65.1,-19.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgVAzQgKgFgHgGQgGgHgFgLQgDgJAAgNQAAgMADgJQAFgKAGgIQAHgGAKgFQALgEAKAAQALAAALAEQAKAFAHAGQAHAJADAJQAEAKAAALQAAAMgEAKQgEALgGAHQgHAGgKAFQgLAEgLAAQgKAAgLgEgAgPgmQgGADgFAFQgFAFgDAJQgDAIAAAIQAAAKADAHQADAJAFAFQAFAFAGADQAIACAHAAQAJAAAGgCQAGgDAGgFQAFgFADgJQACgFAAgMQAAgKgCgGQgDgJgFgFQgGgFgGgDQgGgCgJAAQgHAAgIACg");
	this.shape_5.setTransform(54.5,-19.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgjA2IAAhrIAgAAQAIAAAJADQAIACAEAFQAGAEACAGQACAFAAAJQAAAIgCAGQgCAFgGAFQgFAEgIADQgIACgIAAIgRAAIAAAogAgUACIARAAQAFAAAFgCIAIgDQADgEABgEQACgDAAgFQAAgFgCgEQgBgEgDgDQgDgCgFgCQgFgCgFABIgRAAg");
	this.shape_6.setTransform(44.4,-19.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAaA2IAAheIgzAAIAABeIgQAAIAAhrIBTAAIAABrg");
	this.shape_7.setTransform(33.9,-19.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgjA2IAAhrIAgAAQAIAAAJADQAIACAEAEQAGAFACAGQACAFAAAJQAAAIgCAGQgCAFgGAFQgFAFgIACQgIACgIAAIgRAAIAAAogAgUACIARAAQAFAAAFgCQAFAAADgDQADgEABgEQACgDAAgFQAAgFgCgEQgBgEgDgDQgDgCgFgCQgFgCgFABIgRAAg");
	this.shape_8.setTransform(20.2,-19.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVAzQgKgFgGgGQgHgHgEgLQgEgKAAgMQAAgLAEgKQADgKAIgHQAGgHAKgFQALgEAKAAQALAAALAEQALAGAGAGQAGAHAFAKQADAJAAAMQAAANgDAJQgFALgGAHQgGAGgLAFQgLAEgLAAQgKAAgLgEgAgOgmQgGADgGAFQgGAHgCAGQgCAIAAAJQAAAMACAFQACAHAGAHQAGAGAGACQAHACAHAAQAIAAAIgCQAGgCAFgGQAFgGADgIQADgHAAgKQAAgIgDgJQgDgIgFgFQgFgFgGgDQgIgCgIAAQgHAAgHACg");
	this.shape_9.setTransform(9.2,-19.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIBFAAIAAANIg2AAIAAAhIAVAAQAIAAAIADQAHACAFACQAEAEACAFQADAHAAAGQAAAGgDAHQgCAFgFAFQgFAEgHACQgIADgIAAgAgVApIAUAAQAHAAADgBQAFgBACgDQADgDABgCIACgIIgBgIIgFgGIgHgDIgJgBIgVAAg");
	this.shape_10.setTransform(-1.1,-19.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAnA2IAAhrIAPAAIAABrgAg1A2IAAhrIAPAAIAAAuIAVAAQAIAAAJADQAFABAGADQAEAEACAFQADAHAAAGQAAAGgDAHQgCAFgFAFQgFAEgGACQgJADgHAAgAgmApIAVAAQAGAAAEgBIAHgEIADgFIABgIIgBgIIgDgGIgHgDIgKgBIgVAAg");
	this.shape_11.setTransform(-12.9,-19.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AglA2IAAhrIAjAAQAGAAAKACQAHADAEADQAFADADAFQABAFAAAIIgBAHQgBAEgCACIgGAHIgJADQALABAHAHQAFAGABAKQgBAIgDAEQgBAGgGAEQgEAFgIABQgIADgIAAgAgWApIAWAAQAGAAAEgBQAFgCACgCQAEgDABgDQABgDAAgEQAAgJgGgEQgFgFgMAAIgWAAgAgWgFIAdgBIAHgEIAEgFQABgEAAgDQAAgKgFgFQgGgDgKAAIgUAAg");
	this.shape_12.setTransform(-24.2,-19.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAcBDIAAhKIABgOIgCAGIgDAGIgwBHIgDAEQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgMAAIAAhrIAQAAIAABRIgBAIIADgHIAzhNIACgDQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAIAMAAIAABrgAgPgzQgGgDAAgIIABgDIACgBIAJAAIAAAGIACADIADADIAFAAIAFAAIADgDIACgDIAAgGIAJAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAIABADQAAAIgGADQgGAFgKAAQgKAAgGgFg");
	this.shape_13.setTransform(-39,-21);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAdA2IAAhRIAAgIIgGANIgvBHQgBABAAAAQAAABgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgLAAIAAhrIAQAAIgBBYIADgGIAzhNIADgDQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAMAAIAABrg");
	this.shape_14.setTransform(-50.4,-19.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAdA2QAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBIgEgDIgagnIgEgEIgHgBIgMAAIAAAxIgQAAIAAhrIAQAAIAAAvIALAAIAGgBIACgCIAcgnIAEgDQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIANAAIgfAsQgEAFgFACQACABAEACIAmA1g");
	this.shape_15.setTransform(-60.5,-19.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgVAzQgKgFgGgGQgHgHgEgLQgEgKAAgMQAAgLAEgKQADgKAIgHQAGgHAKgFQALgEAKAAQALAAALAEQALAGAGAGQAGAHAFAKQADAJAAAMQAAANgDAJQgFALgGAHQgGAGgLAFQgLAEgLAAQgKAAgLgEgAgOgmQgGADgGAFQgGAHgCAGQgCAIAAAJQAAAMACAFQACAHAGAHQAGAGAGACQAHACAHAAQAIAAAIgCQAGgCAFgGQAFgGADgIQADgHAAgKQAAgIgDgJQgDgIgFgFQgFgFgGgDQgIgCgIAAQgHAAgHACg");
	this.shape_16.setTransform(-72.3,-19.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgjA2IAAhrIAgAAQAIAAAJADQAGACAHAEQAFAFACAGQACAHABAHQgBAHgCAHQgDAFgFAFQgGAFgHACQgIACgIAAIgRAAIAAAogAgUACIARAAQAFAAAEgCQAGAAACgDIAGgIQABgDAAgFQAAgFgBgEQgCgEgEgDQgCgCgFgCQgFgCgFABIgRAAg");
	this.shape_17.setTransform(-82.3,-19.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAcA2IABhZIgFANIgwBHIgDADIgEACIgMAAIAAhrIAQAAIgBBYIADgGIAyhNIADgDQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAMAAIAABrg");
	this.shape_18.setTransform(-93.1,-19.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhDA2IAAhrIAQAAIAABeIAsAAIAAheIAPAAIAABeIAsAAIAAheIAPAAIAABrg");
	this.shape_19.setTransform(-106.9,-19.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgDAJIgDgCIgCgDIgBgEIABgDIACgDQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIADgBIAEABIADACIACADIABADIgBAEIgCADIgDACIgEABg");
	this.shape_20.setTransform(61.2,22.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AASAmIAAgjIgjAAIAAAjIgOAAIAAhLIAOAAIAAAeIAjAAIAAgeIAOAAIAABLg");
	this.shape_21.setTransform(55.2,19.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AATAmIAAg1IABgDIgDAFIglAyIgDABIgJAAIAAhLIAPAAIAAA1IgBADIACgFIAlgyIAEgBIAIAAIAABLg");
	this.shape_22.setTransform(46.6,19.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAeAmIAAgwIABgKIgaAsIgCACIgCABIgBAAIgCgBIgCgCIgagsIABAKIAAAwIgNAAIAAhLIAMAAIADAAIACADIAZApIAAAEIADgIIAXglIACgDIADAAIAMAAIAABLg");
	this.shape_23.setTransform(37,19.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgXA2IAjguIADgEQgFAEgEABIgKABQgEAAgHgCQgGgBgEgFQgDgCgEgHQgCgGAAgGQAAgHADgHQACgGAFgFQAGgEAFgDQAIgCAGgBQAHABAHACQAHADAEAEQAFAGACAFQACAGAAAIIgBAJQgBAGgBADIgEAHIgeAtQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAIgEABgAgHgoQgFACgCACQgCACgCAFQgCAEAAAFQAAAKAGAFQAFAFAJAAQAFAAAEgBIAHgFQACgCACgEIACgIQAAgFgCgEQgBgDgDgEIgHgEIgIgCQgEAAgEACg");
	this.shape_24.setTransform(23.4,18.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgMA1IgJgCIgHgDIgGgFIAFgGQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIADABIAFADIAGACQAEABAEABQADgBAGgBQAEgCAEgEQAEgDABgFQABgEAAgGIgBgJIgEgGQgDgCgFgBQgEgCgFAAQgIAAgJADIgJgCIAJg0IAyAAIAAAHQAAADgCACQgCACgEAAIggAAIgFAbIAOgBQAKAAAFACQAFACAGAFQAEAEACAFQADAHAAAGQAAAJgDAHQgDAGgGAFQgFAFgHADQgIACgGAAg");
	this.shape_25.setTransform(14.7,18.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgIAQIAAgBIABgDIAFgEIACgFIAAgDIAAAAIgDgBIgDgCIgCgDIgBgDQABgEACgDQADgCADAAIAEABIADABIACAEIAAAFIAAAHIgDAGQgBADgEAEIgFAGg");
	this.shape_26.setTransform(5,23.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAMA2IAAgcIguAAIgCgBQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIgBgHIAyhEIAOAAIAABDIAPAAIAAAJIAAACIgDABIgMAAIAAAcgAgYAOIAkAAIABgyg");
	this.shape_27.setTransform(-1.2,18.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAMA2IAAgcIguAAIgCgBQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIgBgHIAyhEIAOAAIAABDIAQAAIAAAJIgBACIgDABIgMAAIAAAcgAgYAOIAkAAIABgyg");
	this.shape_28.setTransform(-9.9,18.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgHARIgBgCIACgDIAEgEIACgFQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAAAAIgDgBIgDgCIgCgDIAAgDQAAgFACgCQADgCADAAIAEABIADABIACAEIAAAFIgBAHIgCAGIgFAHIgFAGg");
	this.shape_29.setTransform(-19.6,23.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgOAzQgIgCgFgIQgFgGgDgLQgDgKAAgOQAAgNADgKQADgLAFgHQAFgGAIgEQAGgDAIAAQAJAAAGADQAIAEAFAGQAFAHADALQADAKAAANQAAAOgDAKQgDALgFAGQgFAIgIACQgGAEgJAAQgIAAgGgEgAgIgoQgFADgDAEQgDAEgDAJQgBALAAAJQAAAJABAMQADAJADADQADAGAFACQAEACAEAAQAFAAAEgCQAFgCADgGQADgDACgJQACgIAAgNQAAgMgCgIQgCgJgDgEQgDgEgFgDQgEgCgFAAQgEAAgEACg");
	this.shape_30.setTransform(-25.7,18.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgNA1QgGgCgFgEIgHgJQgDgEgBgHIAGgDIAEgBQABABAAAAQABAAAAAAQABABAAAAQAAABABABIACAEIAEAGIAGAEQAEACAFAAQAGAAAEgCQAEgCACgCQADgDACgEIABgHIgBgIQgBgDgDgCQgDgDgGgCQgFgBgHAAIAAgKQAGAAAEgBQAGgBACgDIAFgFIABgIIgCgIQAAgDgDgDIgGgDQgDgBgFAAQgDAAgDABIgGADIgEAFIgDAHIgCADIgFABIgHgBQAAgIAEgFQADgHAFgDQADgEAHgCQAGgCAGAAQAIAAAFACQAHACADADQAEAEACAFQADAFAAAHQAAAFgCAEQAAADgDAEIgGAFIgIADQALACAFAGQAFAIAAAJQAAAHgDAHQgCAFgFAFIgMAGQgGACgIAAQgIAAgFgCg");
	this.shape_31.setTransform(-34.5,18.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgIAQIAAgBIACgDIAEgEIACgFIAAgDIAAAAIgDgBIgDgCIgCgDIgBgDQAAgEADgDQADgCADAAIAEABIADABIACAEIAAAFIgBAHIgDAGQgBADgDAEIgFAGg");
	this.shape_32.setTransform(-44.2,23.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AANA2IAAgcIgvAAIgDgBIgBgDIgBgHIAzhEIANAAIAABDIAPAAIAAAJIAAACIgCABIgNAAIAAAcgAgYAOIAlAAIAAgyg");
	this.shape_33.setTransform(-50.4,18.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgZA2IAAgLIAXAAIAAhGIABgHIgTAQIgCABIgCAAIgCgBIgBgBIgFgGIAggcIALAAIAABgIAWAAIAAALg");
	this.shape_34.setTransform(-58.9,18.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAcA2IAAhKIABgOIgCAGIgEAFIgvBIIgDADQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgLAAIAAhrIAQAAIAABRIgCAIIAEgHIAzhNIACgDQAAgBABAAQAAAAABgBQABAAAAAAQABAAAAAAIAMAAIAABrg");
	this.shape_35.setTransform(63.8,-0.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAeA2IgFgCIgCgDIgagnIgFgEIgGgBIgNAAIAAAxIgPAAIAAhrIAPAAIAAAvIALAAIAGgBIACgBIADgDIAagmQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAIAOAAIggAtQgDADgGADIAGADIAGAGIAfAvg");
	this.shape_36.setTransform(53.6,-0.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIAhAAQAIAAAJADQAHABAGAGQAFAEACAGQADAGgBAIQABAHgDAHQgDAFgFAEQgGAFgGADQgJACgIAAIgRAAIAAAogAgUACIARAAIAKgCQAEgBAEgDQADgDABgEQACgDAAgFQAAgFgCgEQgBgEgDgDQgDgCgFgCQgEgBgGgBIgRAAg");
	this.shape_37.setTransform(43.9,-0.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAcA2IAAhKIABgOIgDAGIgCAFIgxBIIgDADQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgMAAIAAhrIAPAAIAABRIAAAIIACgHIA0hNIACgDQABgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAMAAIAABrg");
	this.shape_38.setTransform(33.2,-0.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgHA2IAAheIgiAAIAAgNIBTAAIAAANIgiAAIAABeg");
	this.shape_39.setTransform(23,-0.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgOAzQgJgEgHgIQgGgGgFgLQgDgKAAgMQAAgLAEgLQAEgKAHgHQAGgGALgFQAKgEAKAAQALAAAJAEQAJAEAHAGIgGAHIgBABIgBAAIgEAAIgFgEIgIgDQgFgBgGgBQgIAAgGADQgGACgGAGQgFAGgDAIQgCAGAAAKQAAALACAHQADAHAFAGQAEAEAIAEQAFADAJgBIAIAAIAHgCIAFgCIAIgGIABAAIACABIAGAHQgGAHgKAFQgJAEgNAAQgKAAgLgEg");
	this.shape_40.setTransform(13.7,-0.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAcBDIAAhRIABgHIgGAMIgyBLQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgMAAIAAhrIAQAAIgBBZIADgHIAyhNIADgDQABAAAAgBQAAAAABAAQABgBAAAAQABAAAAAAIAMAAIAABrgAgOgzQgGgDAAgIIAAgDQABAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAIAIAAIABAGQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIAEADIAEAAIAFAAIADgDIACgDIAAgGIAJAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAIABADQAAAIgGADQgGAFgKAAQgKAAgFgFg");
	this.shape_41.setTransform(-1,-2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgVAzQgKgFgHgHQgGgGgFgLQgDgJAAgNQAAgMADgJQAFgKAGgIQAHgGAKgFQALgEAKAAQALAAALAEQAKAFAGAGQAIAIADAKQAEAKAAALQAAAMgEAKQgEALgHAGQgGAHgKAFQgLAEgLAAQgKAAgLgEgAgPgmQgGACgFAGQgFAGgDAIQgDAIAAAIQAAAKADAIQADAIAFAFQAFAFAGADQAIACAHAAQAJAAAGgCQAGgDAGgFQAFgFADgIQACgJAAgJQAAgIgCgIQgDgIgFgGQgGgGgGgCQgGgDgJAAQgHAAgIADg");
	this.shape_42.setTransform(-12.7,-0.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgjA2IAAhrIAgAAQAIAAAJADQAIACAEAFQAGAEACAGQACAFAAAJQAAAJgCAFQgCAFgGAEQgFAFgIADQgIACgIAAIgRAAIAAAogAgUACIARAAQAFgBAFgBIAIgEQADgCABgFQACgDAAgFQAAgFgCgEQgBgEgDgDQgDgCgFgCQgFgBgFgBIgRAAg");
	this.shape_43.setTransform(-22.8,-0.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgHA2IAAheIgiAAIAAgNIBTAAIAAANIgiAAIAABeg");
	this.shape_44.setTransform(-32.2,-0.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgOAzQgJgEgHgIQgHgGgEgLQgDgKAAgMQAAgLAEgLQAEgKAGgHQAHgGAKgFQALgEAKAAQAKAAAKAEQAJAEAHAGIgFAHIgCABIgCAAIgDAAIgFgEIgIgDQgFgBgGgBQgIAAgGADQgFACgHAGQgEAGgDAIQgDAGAAAKQAAALADAHQACAHAGAGQAEAEAHAEQAGADAIgBIAHAAIAHgCIAHgCIAHgGIABAAIACABIAGAHQgGAHgKAFQgJAEgOAAQgJAAgLgEg");
	this.shape_45.setTransform(-41.5,-0.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAnA2IAAhrIAPAAIAABrgAg1A2IAAhrIAPAAIAAAuIAVAAQAJAAAIADQAGACAFADQAFADACAGIACALQAAAHgDAHQgDAGgEAEQgEAEgHACQgIADgIAAgAgmApIAVAAQAGABAEgCIAHgDIADgGIABgIIgBgIIgDgFIgHgFIgKgBIgVAAg");
	this.shape_46.setTransform(-53.5,-0.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIBFAAIAAAMIg1AAIAAAiIAUAAQAIAAAIADQAHACAFADQAEADADAGQACAFAAAGQAAAJgDAFQgCAFgFAFQgFAEgHACQgIADgHAAgAgUApIAUAAQAFABAEgCQAGgCABgBQAEgEAAgCIACgIIgCgIQgBgDgDgCQgCgDgFgCIgdgBg");
	this.shape_47.setTransform(-64.5,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text4, new cjs.Rectangle(-113.6,-27.7,227.3,53.5), null);


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
	this.instance.setTransform(-157,-28,0.65,0.65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic5, new cjs.Rectangle(-157,-28,153.4,148.9), null);


(lib.pic2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(-137,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic2, new cjs.Rectangle(-137,-6,175,90), null);


(lib.pic1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._2_1();
	this.instance.parent = this;
	this.instance.setTransform(-49,-50,0.648,0.648);

	this.instance_1 = new lib._1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-147,-48,0.54,0.54);

	this.instance_2 = new lib._1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(49,-49,0.54,0.54);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic1, new cjs.Rectangle(-147,-50,293.2,109.5), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqACBIAAkBIUBAAIAAEBg");
	mask.setTransform(64.1,12.9);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0EA6E0").s().p("ApZBWQgsgoAag6QAXg0BIgeQBQgiCCAAQAcAAAbAEIAhAEIAOADIgTAhQgpgLgiAAQhBAAg2ATQhJAagLAzQgHAfAXAcQAdAjA/gDQAUgBAlgNQAvgQAbgVIBCg5IANgIQAIgEALAAIBGAAIAWBhIAthgIBNAAIAtBKIAhhKIBHAAIg+CIIhJgBIgvhOIgjBPIgtAAIAAAAIhTAAIgEgYIhNAAIgZAXIgyAAQg7AVhLAAQhuAAgvgrgAjOA6IAtgBIgEgmgAGTB5IAugtIguhnIBGAAIAUA3IA5g4IBPAAIiJCJQgHAHgFACIgQADgAEGBtIhyAAIA+iIIBzAAQA3AAAUAaQAQAVgMAbQgLAZgeAQQgmAVg8AAIgDAAgADwBKIAUAAQBDAAAKgkQAIggg3AAIgUAAg");
	this.shape.setTransform(65.2,12.9);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(2.3,0.1,125.9,25.8), null);


// stage content:
(lib._728x90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Eg4ygG8MBxlAAAIAAN5MhxlAAAg");
	this.shape.setTransform(364,44.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(418));

	// legal
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A4A49").s().p("AgGAZIgFgDIgEgFIgBgGQAAgEACgEQAEgDAEAAQgEgCgCgDQgCgCAAgFIABgFIADgEQACgCADgBIAFgBIAGABQAEABABACIADAEIABAFQAAAFgCACQgCADgDACQAEAAACADQADADAAAFIgBAGIgEAFIgFADIgHABgAgDACIgDACIgCADIgBAEIABAEIACADIADACIADAAIAEAAIAEgCIACgDIABgEIgBgEIgCgDIgEgCIgEAAgAgDgTIgDACIgBACIAAAEIAAADIABADIADACIADAAIAEAAIADgCIACgDIAAgDIAAgEIgCgCIgDgCIgEgBg");
	this.shape_1.setTransform(719.8,73.6,1.167,1.167);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A4A49").s().p("AAOAYIAAgMIgcAAIAAAKIAAABIgBABIgFAAIAAgRIACAAIADgBIABgBIACgEIAEgNIABgLIAVAAIAAAdIAGAAIAAAQIAAABIgBABgAgDgIIgDALIgCAEIAQAAIAAgZIgKAAg");
	this.shape_2.setTransform(710.9,75.2,1.167,1.167);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4A4A49").s().p("AAJAZIAAgaIgBABIAAABIgBABIgQAXIgBAAIgEAAIAAgiIAGAAIAAAZIABgCIABgBIAPgVIABgBIABAAIAEAAIAAAigAgDgPQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBIgCgCIgBgDIAAgCIABAAIAEAAIABADIAAABIACACIAEAAIABgCIABgBIAAgDIAEAAIABAAIABACIgBADIgCACQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAIgFAAg");
	this.shape_3.setTransform(702.1,73.6,1.167,1.167);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4A4A49").s().p("AgIADIAAgFIAQAAIAAAFg");
	this.shape_4.setTransform(698.2,74.1,1.167,1.167);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4A4A49").s().p("AgQAZIAAgCIABgBIABgCIAOgQIAEgEIAFgGIAAgFIAAgDIgCgDIgDgCIgEAAIgCAAIgDACIgCADIgBADIgBABIgCAAIgEgBIACgGIAEgEIAFgCIAFgCIAGACIAFACIADAEIABAGIgBAGIgCAEIgDAEIgQARIADgBIASAAIABAAIABADIAAADg");
	this.shape_5.setTransform(694.3,73.6,1.167,1.167);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4A4A49").s().p("AAIAZIAAgZIABgBIgBABIgBACIgQAXIgCAAIgDAAIAAgiIAGAAIAAAZIACgDIAPgVIABgBIACAAIADAAIAAAigAgDgPQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBIgDgCIAAgDIAAgCIACAAIADAAIAAADIABABIACACIAEAAIABgCIABgBIAAgDIAFAAIABAAIAAACIgBADIgCACQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgDAAg");
	this.shape_6.setTransform(687.5,73.6,1.167,1.167);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4A4A49").s().p("AAIASIAAgXIABgCIAAgBIgBABIgBABIAAABIgCADIgCADIgDAEIgJAMIgCABIgDAAIAAgjIAHAAIAAAXIgBABIAAACIACgEIACgCIACgDIADgEIAIgLIABgBIACgBIADAAIAAAjg");
	this.shape_7.setTransform(682.8,74.5,1.167,1.167);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4A4A49").s().p("AALASIgDgBIgBgCIgHgLIgBgCIgDAAIgEAAIAAAQIgHAAIAAgjIAHAAIAAAPIADAAIADAAIACgCIAGgLIACgBIABgBIAGAAIgMAQIgCABIADAAIADADIAJAPg");
	this.shape_8.setTransform(678.5,74.5,1.167,1.167);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4A4A49").s().p("AgEARIgFgEIgDgGQgCgDABgEIABgGQABgEACgCQACgDAEgBQACgBAEAAQAEAAACABQADAAACADIgBADIgBAAIgBAAIgBAAIgCgBIgFgBQgBAAgBAAQAAAAgBAAQAAAAAAABQAAAAgBAAIgDADIgCAEIAAAEIAAAFIACAFIADADIAEAAIADAAIACgBIACgCIACAAIABABIABACIgCACIgEACIgDABIgDABQgDAAgDgCg");
	this.shape_9.setTransform(674.3,74.5,1.167,1.167);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4A4A49").s().p("AAIASIAAgRIgPAAIAAARIgHAAIAAgjIAHAAIAAAOIAPAAIAAgOIAHAAIAAAjg");
	this.shape_10.setTransform(670,74.5,1.167,1.167);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4A4A49").s().p("AAJASIAAgaIgBABIAAABIgBABIgCADIgDADIgLAQIgBABIgEAAIAAgjIAGAAIAAAYIAAACIABgDIABgBIACgCIANgSIABgBIABgBIAEAAIAAAjg");
	this.shape_11.setTransform(665.3,74.5,1.167,1.167);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4A4A49").s().p("AAVAYIAAgMIgvAAIAAgjIAGAAIAAAdIAPAAIAAgdIAFAAIAAAdIAOAAIAAgdIAHAAIAAAdIAGAAIAAAQIAAABIgCABg");
	this.shape_12.setTransform(659.6,75.2,1.167,1.167);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4A4A49").s().p("AgGARIgFgEIgEgGIgBgHIABgGIAEgHIAFgDQADgBADAAQAEAAADABIAGADQACADABAEQABADAAADQAAAEgBADQgBAFgCABIgGAEQgDACgEAAQgDAAgDgCgAgHgIQgCADgBAFQABAGACAEQADADAEAAQAFAAACgDQADgEAAgGQAAgFgDgDQgCgEgFAAQgEAAgDAEg");
	this.shape_13.setTransform(653.6,74.5,1.167,1.167);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4A4A49").s().p("AgQAZIAAgxIAPAAIAIABIAFADQADACABADQABADAAADQAAAEgBADQgBACgDACQgDADgDAAIgHABIgIAAIAAATgAgJABIAIAAIAEgBIAEgBIACgDIAAgFIAAgEIgCgDIgEgCIgEgBIgIAAg");
	this.shape_14.setTransform(649.2,73.6,1.167,1.167);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4A4A49").s().p("AAPAYIAAgMIgdAAIAAAKIAAABIgBABIgFAAIAAgRIACAAIACgBIACgBIACgEIACgEIADgUIAVAAIAAAdIAHAAIAAAQIgBABIgBABgAgEgBIgCAEIgCAEIAQAAIAAgZIgKAAg");
	this.shape_15.setTransform(641.9,75.2,1.167,1.167);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4A4A49").s().p("AgDASIgEgBIgCgCIgEgCIADgCIABgBIABAAIACACIACABIAEAAIACAAIADgBIACgCIAAgDQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQgCgCgDABIgFAAIAAgEIAFAAQACAAACgCQABAAAAAAQABgBAAAAQAAgBAAAAQABgBAAAAIgBgCIgBgCIgDgBIgCAAIgEAAIgCABIgCABIgBAAIgBgBIgCgCQADgDACAAQADgBAEAAIAFABIAFACIACACIAAAEIAAACIgBACIgBACIgDACQACAAACACQACACAAADIgBAFIgCADIgFADIgFABg");
	this.shape_16.setTransform(637.4,74.5,1.167,1.167);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4A4A49").s().p("AgFARIgFgEIgEgGQgBgDAAgEQAAgEABgCQABgDACgDIAGgEQADgBADAAIAGABQADABACACQABACABADQACADAAADIgBACIgBAAIgWAAIABAGIACAEIADADIAEAAIAEAAIADgBIACgCIABAAIABABIACACIgDACIgDACIgHACQgEAAgDgCgAgFgKQgDADAAAEIASAAIAAgDIgDgEIgCgCIgEgBQgCABgEACg");
	this.shape_17.setTransform(633.5,74.5,1.167,1.167);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4A4A49").s().p("AgGARIgGgEIgDgGIgBgHIABgGIADgHIAGgDQADgBADAAQAEAAADABIAFADIAEAHIABAGIgBAHIgEAGIgFAEQgDACgEAAQgDAAgDgCgAgHgIQgCACAAAGQAAAHACADQACADAFAAQAGAAACgDQACgDAAgHQAAgGgCgCQgCgEgGAAQgFAAgCAEg");
	this.shape_18.setTransform(629,74.5,1.167,1.167);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4A4A49").s().p("AgPAYIAAguIAEAAIACABIABAEIAFgEQACgCAEAAIAFABQADABABADIADAFIABAIIgBAHQgBADgCADIgFAEQgDABgDAAQgCAAgDgBIgEgDIAAAPgAgEgQQgCAAgCADIAAAQQABABAAABQAAAAABAAQAAABABAAQAAAAABAAIAEACQAEAAADgEQACgEAAgFIAAgGIgCgDIgDgDIgEAAIgEABg");
	this.shape_19.setTransform(624.5,75.1,1.167,1.167);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4A4A49").s().p("AAMAZIAAgsIgXAAIAAAsIgHAAIAAgxIAlAAIAAAxg");
	this.shape_20.setTransform(619.2,73.6,1.167,1.167);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4A4A49").s().p("AgHASIgEgCIgBgDIgBgEIABgEIADgDIAHgCIAJgBIAAgDQABgEgCgCQgCgCgEAAIgCAAIgFADIgCABIgBAAIgBgCIAAgCIAGgEQADgBADAAIAGABIAEACIADAEIAAAGIAAAWIgDAAIgCAAIgBgFIgCACIgDACIgDABIgDABgAAAADIgDABIgDACIgBADIAAACIACACIACAAIADAAIAEAAIACgCIABgCIAAgHg");
	this.shape_21.setTransform(610.1,74.5,1.167,1.167);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4A4A49").s().p("AgNASIAAgjIANAAIAFABIAEABIACADIABADIAAADIgBACIgDACIgDACQAEAAACACQADACAAADQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAIgFACIgFABgAgGANIAGAAQAEAAABgCQABAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBIAAgCIgBgCIgCgBIgKAAgAgGgCIAGAAIACAAIACgBIACgCIAAgDIAAgBIgBgCIgCgBIgDgBIgGAAg");
	this.shape_22.setTransform(606.2,74.5,1.167,1.167);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#4A4A49").s().p("AALASIgDgBIgCgCIgGgLIgBgCIgDAAIgEAAIAAAQIgGAAIAAgjIAGAAIAAAPIAEAAIACAAIACgCIAGgLIABgBIACgBIAGAAIgJANIgCADIgDABIADAAIACADIAJAPg");
	this.shape_23.setTransform(602.2,74.5,1.167,1.167);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4A4A49").s().p("AgEARIgFgEQgCgBgBgFQgBgDgBgEIABgGIAEgGIAFgEIAGgBQAEAAADABIAFADIgCADIAAAAIgBAAIgBAAIgBgBIgGgBQgBAAgBAAQAAAAgBAAQAAAAAAABQAAAAAAAAIgEADIgCAEIAAAEIAAAFIACAFIAEADIACAAIAEAAIADgBIABgCIABAAIADADIgCACIgDACIgEABIgDABQgDAAgDgCg");
	this.shape_24.setTransform(597.9,74.5,1.167,1.167);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4A4A49").s().p("AgGARIgGgEIgDgGIgBgHIABgGIADgHIAGgDQADgBADAAQAEAAADABIAFADIAEAHIABAGIgBAHIgEAGIgFAEQgDACgEAAQgDAAgDgCgAgHgIQgDADAAAFQAAAGADAEQADADAEAAQAGAAABgDQADgEAAgGQAAgFgDgDQgBgEgGAAQgEAAgDAEg");
	this.shape_25.setTransform(593.6,74.5,1.167,1.167);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4A4A49").s().p("AAUAZIAAgnIgQAeIgCACIgCAAIAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBIgRgeIAAAnIgHAAIAAgxIAHAAIABABIARAdIABAEIASghIACgBIAGAAIAAAxg");
	this.shape_26.setTransform(587.6,73.6,1.167,1.167);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4A4A49").s().p("AgLASIAAgjIAXAAIAAAFIgQAAIAAAeg");
	this.shape_27.setTransform(578.8,74.5,1.167,1.167);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#4A4A49").s().p("AgKAZIAOgTIABgCIACgCIgEACIgFABIgEgBIgFgDQgCgBgBgCIgBgHQgBgDACgDIADgFQADgDADAAQACgCAEAAIAGACIAFADIADAFIABAHIgBAIIgQAYIgBABIgCAAgAgDgSIgDACIgCADIAAAEQAAAFACACQACACAEAAIAEAAIADgCIADgDIAAgEIAAgEIgDgEIgDgCIgDAAg");
	this.shape_28.setTransform(570.5,73.6,1.167,1.167);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#4A4A49").s().p("AgLAZIAAgFIALAAIAAgkIgJAIIgBAAIgCAAIAAAAIgCgDIAOgNIAFAAIAAAsIAKAAIAAAFg");
	this.shape_29.setTransform(565.8,73.6,1.167,1.167);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#4A4A49").s().p("AAGAZIAAgNIgWAAIgBAAIAAgBIgBgEIAYgfIAFAAIAAAfIAIAAIAAAEIgBABIgBAAIgGAAIAAANgAgKAHIAQAAIAAgYg");
	this.shape_30.setTransform(561,73.6,1.167,1.167);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#4A4A49").s().p("AgFAZIgHgDIgDgCIACgDIACgBIABABIACABIADABIAEABIAEgBIADgCIADgEIAAgFIAAgEIgCgDIgEgBIgDgBIgIABIgEgBIAEgXIAXAAIAAACIgBADIgDABIgPAAIgCAMIAGgBIAHABIAFAEIADAEIABAGQAAAEgBADIgEAFQgDADgDABQgDACgDAAg");
	this.shape_31.setTransform(556.3,73.7,1.167,1.167);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#4A4A49").s().p("AgLAZIAAgFIAKAAIAAgkIgIAIIgBAAIgBAAIgBAAIgCgDIAOgNIAFAAIAAAsIAKAAIAAAFg");
	this.shape_32.setTransform(551.6,73.6,1.167,1.167);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#4A4A49").s().p("AgLAZIAAgFIALAAIAAgkIgJAIIgBAAIgCAAIAAAAIgCgDIAOgNIAFAAIAAAsIAKAAIAAAFg");
	this.shape_33.setTransform(546.9,73.6,1.167,1.167);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#4A4A49").s().p("AAAANIAAgBIAAgCIAFgJIAAAAIABgBIgBAAIAAAAIgFgJIAAgCIAAgBIACgBIAJANIAAAAIgJAOgAgJANIgBgBIAAgCIAFgJIABAAIAAgBIgBAAIgFgJIAAgCIABgBIACgBIAIANIAAAAIgIAOg");
	this.shape_34.setTransform(540.7,74.4,1.167,1.167);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#4A4A49").s().p("AgOAZIAAgxIAdAAIAAAFIgWAAIAAAsg");
	this.shape_35.setTransform(535.8,73.6,1.167,1.167);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#4A4A49").s().p("AANAZIAAgXIgaAAIAAAXIgGAAIAAgxIAGAAIAAAWIAaAAIAAgWIAHAAIAAAxg");
	this.shape_36.setTransform(528.3,73.6,1.167,1.167);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#4A4A49").s().p("AgGAYQgFgDgDgDQgCgCgCgGQgCgEAAgGQAAgFACgEQABgFAEgEIAIgFQAEgCAEAAQAGAAAEACQAFACADADIgDADIAAABIgCAAIgBgBIgDgBIgDgCIgGAAIgGABIgEAEQgDABgCAFIgBAHQABAFABADQAAADAEADIAFAEIAFABIAEAAIAEgBIACgBIADgCIAAAAIACgBIABABIACADQgEAEgEACQgFACgFAAQgDAAgGgCg");
	this.shape_37.setTransform(520.6,73.6,1.167,1.167);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#4A4A49").s().p("AANAZIAAglIAAgEIgCAGIgWAhIgCABIgBABIgGAAIAAgxIAHAAIAAAlIAAADIABgDIAYgjIABgBIACgBIAGAAIAAAxg");
	this.shape_38.setTransform(512.6,73.6,1.167,1.167);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#4A4A49").s().p("AAUAfIAAgMIgnAAIAAAKIgBACIgBAAIgFAAIAAgSIAGAAIACgBIACgEIACgFIABgHIACgaIAdAAIAAArIAJAAIAAAQIgBACIgCAAgAgHAAIgCAIIgDAFIAXAAIAAgmIgPAAg");
	this.shape_39.setTransform(506.1,74.3,1.167,1.167);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#4A4A49").s().p("AANAZIAAgXIgZAAIAAAXIgIAAIAAgxIAIAAIAAAWIAZAAIAAgWIAIAAIAAAxg");
	this.shape_40.setTransform(499.9,73.6,1.167,1.167);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#4A4A49").s().p("AASAZIgCAAIgBgCIgEgLIgVAAIgEALIgCACIgBAAIgFAAIAUgxIAGAAIAUAxgAAAgPIgBADIgHASIARAAIgJgVIAAgCg");
	this.shape_41.setTransform(494,73.6,1.167,1.167);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#4A4A49").s().p("AAOAZIgCgBIgCgBIgLgSIgCgCIgDgBIgGAAIAAAXIgHAAIAAgxIAHAAIAAAWIAGAAIACgBIACgCIALgRIACgCIACAAIAGAAIgPAUQgCADgCABIADAAIACADIAPAWg");
	this.shape_42.setTransform(488.8,73.6,1.167,1.167);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#4A4A49").s().p("AAAAAIAAAAIAIgNIACABIABABIAAACIgFAJIgBAAIAGAKIAAACIgBABIgCABgAgKAAIAAAAIAJgNIABABIABABIgBACIgEAJIgBAAIABABIAEAJIABACIgBABIgBABg");
	this.shape_43.setTransform(483.8,74.4,1.167,1.167);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#4A4A49").s().p("AgJAYQgFgDgDgDQgDgCgCgGQgCgEAAgGQAAgFACgEQACgFADgEQAEgEAEgBQAEgCAFAAQAGAAAEACIAIAFIAFAJQACAEAAAFQAAAGgCAEIgFAIQgDADgFADQgGACgEAAQgDAAgGgCgAgGgRIgGAEIgDAGIgBAHIABAIIADAGQADADADABIAGABQAEAAADgBQADgBADgDIADgGQACgDAAgFIgCgHQAAgDgDgDIgGgEIgHgBIgGABg");
	this.shape_44.setTransform(476.8,73.6,1.167,1.167);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#4A4A49").s().p("AgJAYQgFgDgDgDQgCgCgDgGQgCgEAAgGQAAgFACgEIAFgJIAIgFQAEgCAFAAQAGAAAEACIAIAFIAFAJQACAEAAAFQAAAGgCAEIgFAIQgDADgFADQgGACgEAAQgDAAgGgCgAgGgRIgGAEIgDAGIgCAHQAAAFACADIADAGQADADADABQADABADAAQAEAAADgBQADgBADgDIADgGIABgIIgBgHIgDgGIgGgEIgHgBIgGABg");
	this.shape_45.setTransform(470.2,73.6,1.167,1.167);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#4A4A49").s().p("AgJAYQgFgDgDgDIgFgIQgCgEAAgGQAAgFACgEIAFgJIAIgFQAEgCAFAAQAGAAAEACQAEACAEADQADAEACAFQACAEAAAFQAAAGgCAEQgCAGgDACQgDADgFADIgKACQgDAAgGgCgAgGgRIgGAEQgDADAAADIgCAHQAAAFACADIADAGQADADADABQADABADAAQAEAAADgBQADgBADgDIADgGIABgIIgBgHIgDgGIgGgEIgHgBIgGABg");
	this.shape_46.setTransform(463.7,73.6,1.167,1.167);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#4A4A49").s().p("AgFAZIgGgDIgCgEIgDgGIADgBIACAAIACABIABADIACACIADACIADABIAEgBIAEgCIACgDIABgDIgBgEIgCgDIgEgCIgFAAIAAgEIAFgBIADgCIACgCIABgEIgBgDIgCgDIgDgCIgDAAIgDAAIgCACIgCACIgBADIgCACIgCAAIgDgBIABgGIAEgEIAFgDIAGgBIAFABIAFADIADAEIABAFIgBAEIgCAEIgCACIgEACQAGABABACQADACAAAGIgBAGIgEAFIgFADIgGABg");
	this.shape_47.setTransform(720.1,83,1.167,1.167);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#4A4A49").s().p("AgFAZIgIgDIgCgCIACgDIACgBIABABIACABIADABIAEABIAEgBIADgCIADgEIAAgFIAAgEIgCgDIgEgBIgDgBIgIABIgFgBIAEgXIAXAAIAAACIAAADIgDABIgPAAIgCAMIAGAAIAHAAIAFAEQACACABACQABADAAADQAAAEgBADIgEAFQgDADgDABIgGACg");
	this.shape_48.setTransform(715.4,83,1.167,1.167);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#4A4A49").s().p("AAGAZIAAgNIgVAAIgCAAIAAgBIgBgEIAXgfIAHAAIAAAfIAHAAIAAAFIgBAAIgGAAIAAANgAgLAHIARAAIAAgVIAAgDg");
	this.shape_49.setTransform(710.6,83,1.167,1.167);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#4A4A49").s().p("AgGAYQgDgBgDgEQgCgCgCgGQgBgEAAgHQAAgFABgGIAEgHQACgDAEgCIAGgCIAHACQAEABACAEQACACACAFQABAGAAAFQAAAHgBAEQgCAGgCACIgGAFIgHACIgGgCgAgDgSIgEADIgCAGIgBAJIABAJQAAAEACADQABAAAAABQAAAAABABQAAAAABAAQAAABABAAIADABIAEgBQABAAAAgBQABAAAAAAQABgBAAAAQAAgBABAAQABgCABgFIABgJIgBgJQgBgEgBgCIgEgDIgEgBg");
	this.shape_50.setTransform(705.9,83,1.167,1.167);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#4A4A49").s().p("AgMAZIAWgrIgZAAIgBgBIAAgBIAAgEIAhAAIAAADIgBADIgTApIgCABIgCABg");
	this.shape_51.setTransform(701.3,83,1.167,1.167);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#4A4A49").s().p("AgGAYQgDgBgDgEQgDgDgBgFIgBgLIABgLIAEgHQACgEAEgBQADgCADAAQAEAAADACQAEABACAEIAEAHQABAGAAAFQAAAHgBAEQgBAFgDADQgDAEgDABQgDACgEAAQgDAAgDgCgAgEgSIgDADIgDAGIgBAJIABAJQABAEACADIADADIAEABIAEgBQABAAAAgBQABAAAAAAQABgBAAAAQABgBAAAAQACgDAAgEIABgJIgBgJIgCgGIgEgDIgEgBg");
	this.shape_52.setTransform(696.5,83,1.167,1.167);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#4A4A49").s().p("AgHAYIgEgEQgEgCAAgDIgBgHIABgHIAQgYIACgBIACAAIAGAAIgOASIgBACIgCABIAFgCIADAAIAGABQACABACACQADABABACQABADAAAEQAAADgBADIgEAFIgFAEQgDACgEAAQgEAAgDgCgAgDAAIgEACIgCADIgBAEIABAEIACAEIADACIAEABIAEgBIADgCIACgEIABgDIgBgFIgBgDIgEgCIgEAAg");
	this.shape_53.setTransform(691.8,83,1.167,1.167);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#4A4A49").s().p("AgKAZIAOgTIACgCIABgCIgFACIgDABIgGgBIgEgDQgCgBgCgCIgBgHQABgDABgDIAEgFQABgCADgBQADgCADAAIAHABIAFAEIAEAFIABAHIgCAIIgCACIgNAWIgCABIgCAAgAgDgSIgDACIgCADIgBAEQAAAFADACQACACAEAAIAEAAIAEgCIABgEIABgDIgBgEIgBgEIgEgCIgEAAg");
	this.shape_54.setTransform(686.9,82.9,1.167,1.167);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#4A4A49").s().p("AgMAZIAWgrIgZAAIgBgBIAAgBIAAgEIAhAAIAAADIgBADIgTApIgCABIgCABg");
	this.shape_55.setTransform(682.3,83,1.167,1.167);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#4A4A49").s().p("AgMAZIAXgrIgZAAIgBgBIgBgBIAAgEIAhAAIAAAFIgBABIgTApIgBABIgCABg");
	this.shape_56.setTransform(677.5,83,1.167,1.167);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#4A4A49").s().p("AAFAZIAAgNIgUAAIgCAAIgBgBIAAgEIAXgfIAHAAIAAAfIAHAAIAAAEIgBABIgBAAIgFAAIAAANgAgLAHIAQAAIAAgVIABgDg");
	this.shape_57.setTransform(672.7,83,1.167,1.167);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#4A4A49").s().p("AgGAYQgDgBgDgEQgDgDgBgFQgBgEAAgHQAAgFABgGIAEgHQACgDAEgCIAGgCQAEAAADACQADABADAEIAEAHIABALIgBALQgBAFgDADIgGAFQgDACgEAAgAgDgSIgEADIgCAGIgBAJIABAJQAAAEACADQABAAAAABQAAAAABABQAAAAABAAQAAABABAAIADABIAEgBIAEgDIADgHIABgJIgBgJIgDgGIgEgDIgEgBg");
	this.shape_58.setTransform(668,83,1.167,1.167);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#4A4A49").s().p("AgLAZIAAgFIALAAIAAgkIgIAIIgBAAIgCAAIgBAAIgCgDIAOgNIAGAAIAAAsIAJAAIAAAFg");
	this.shape_59.setTransform(663.3,83,1.167,1.167);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#4A4A49").s().p("AANAZIAAgXIgaAAIAAAXIgHAAIAAgxIAHAAIAAAWIAaAAIAAgWIAHAAIAAAxg");
	this.shape_60.setTransform(655.7,83,1.167,1.167);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#4A4A49").s().p("AgQAZIAAgxIAPAAIAHABIAGADIAEAFIABAGIgBAHIgEAEIgGADIgHABIgHAAIAAATgAgIABIAHAAIAEgBIAEgBIACgDIABgFIgBgEIgCgDIgEgCIgEgBIgHAAg");
	this.shape_61.setTransform(650.3,83,1.167,1.167);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#4A4A49").s().p("AgOAZIAAgxIAdAAIAAAFIgWAAIAAAsg");
	this.shape_62.setTransform(645.8,83,1.167,1.167);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#4A4A49").s().p("AgJAYQgFgDgDgDIgFgIQgCgEAAgGQAAgFACgEIAFgJIAIgFQAEgCAFAAQAGAAAEACQAEACAEADQADAEACAFQACAEAAAFQAAAGgCAEQgCAGgDACQgDADgFADQgGACgEAAQgDAAgGgCgAgGgRIgGAEQgDADAAADIgCAHQAAAFACADIADAGQADADADABQADABADAAQAEAAADgBQADgBADgDIADgGIABgIIgBgHIgDgGIgGgEIgHgBIgGABg");
	this.shape_63.setTransform(640,83,1.167,1.167);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#4A4A49").s().p("AgFAZIgIgDIgCgCIACgDIACgBIABABIACABIADABIAEABIAEgBIADgCIADgEIAAgFIAAgEIgCgDIgEgBIgDgBIgIABIgFgBIAEgXIAXAAIAAACIAAADIgDABIgPAAIgCAMIAGAAIAHAAIAFAEIADAEIABAGQAAAEgBADIgEAFQgDADgDABIgGACg");
	this.shape_64.setTransform(632.2,83,1.167,1.167);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#4A4A49").s().p("AgLAZIAAgFIALAAIAAgkIgJAIIgBAAIgBAAIgBAAIgCgDIAOgNIAFAAIAAAsIAKAAIAAAFg");
	this.shape_65.setTransform(627.5,83,1.167,1.167);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#4A4A49").s().p("AgGAYQgDgBgDgEQgCgCgCgGQgBgEAAgHQAAgFABgGIAEgHQACgDAEgCIAGgCQAEAAADACQAEABACAEQACACACAFQABAGAAAFQAAAHgBAEQgCAGgCACIgGAFQgDACgEAAIgGgCgAgDgSIgEADIgCAGIgBAJIABAJQAAAEACADQABAAAAABQAAAAABABQAAAAABAAQAAABABAAIADABIAEgBQABAAAAgBQABAAAAAAQABgBAAAAQAAgBABAAQABgBACgGIAAgSIgDgGIgEgDIgEgBg");
	this.shape_66.setTransform(622.8,83,1.167,1.167);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#4A4A49").s().p("AgQAZIAAgCIAAgBIABgCIAPgQIAEgEIAFgGIAAgEIAAgEIgCgDIgEgCIgDAAIgCAAIgDACIgCACIgBAEIgBABIgDABIgDgBIACgHIAEgEIAEgDIAGgBIAGABIAEADIADAEIACAHIgBAEIgDAFIgCADIgRASIADgBIASAAIACAAIABADIAAADg");
	this.shape_67.setTransform(618,82.9,1.167,1.167);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#4A4A49").s().p("AgLAZIAAgFIAKAAIAAgkIgIAIIgBAAIgCAAIAAAAIgCgDIAOgNIAFAAIAAAsIAKAAIAAAFg");
	this.shape_68.setTransform(613.3,83,1.167,1.167);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#4A4A49").s().p("AgFAZIgHgDIgDgCIACgDIACgBIABABIACABIAEABIADABIAEgBIADgCIADgEIAAgFIAAgEIgCgDIgDgBIgEgBIgIABIgEgBIADgXIAYAAIAAACIgBADIgDABIgOAAIgDAMIAGAAIAHAAIAFAEQACACABACIABAGIgBAHIgEAFQgDADgCABIgHACg");
	this.shape_69.setTransform(608.5,83,1.167,1.167);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#4A4A49").s().p("AAGAZIAAgNIgVAAIgCAAIAAgBIgBgEIAXgfIAHAAIAAAfIAHAAIAAAFIgBAAIgGAAIAAANgAgLAHIARAAIAAgVIAAgDg");
	this.shape_70.setTransform(603.7,83,1.167,1.167);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#4A4A49").s().p("AgGAYQgDgBgDgEQgCgCgCgGQgBgEAAgHQAAgFABgGIAEgHQACgDAEgCIAGgCQAEAAADACQAEACACADQACACACAFQABAGAAAFQAAAHgBAEQgCAGgCACQgDAEgDABQgDACgEAAIgGgCgAgDgSIgEADQgBACgBAEIgBAJIABAJQABAFABACQABAAAAABQAAAAABABQAAAAABAAQAAABABAAIADABIAEgBQABAAAAgBQABAAAAAAQABgBAAAAQAAgBABAAQACgDAAgEIABgJIgBgJIgCgGIgEgDIgEgBg");
	this.shape_71.setTransform(599.1,83,1.167,1.167);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#4A4A49").s().p("AgMAZIAWgrIgZAAIgBgBIAAgBIAAgEIAhAAIAAADIgBADIgTApIgCABIgCABg");
	this.shape_72.setTransform(594.4,83,1.167,1.167);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#4A4A49").s().p("AgMAZIAWgrIgZAAIgBgBIAAgBIAAgEIAhAAIAAAFIAAABIgUApIgCABIgCABg");
	this.shape_73.setTransform(589.6,83,1.167,1.167);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#4A4A49").s().p("AANAZIAAgXIgZAAIAAAXIgHAAIAAgxIAHAAIAAAWIAZAAIAAgWIAHAAIAAAxg");
	this.shape_74.setTransform(580.4,83,1.167,1.167);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#4A4A49").s().p("AAOAZIAAgXIgaAAIAAAXIgIAAIAAgxIAIAAIAAAWIAaAAIAAgWIAHAAIAAAxg");
	this.shape_75.setTransform(574.2,83,1.167,1.167);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#4A4A49").s().p("AANAZIAAgiIAAgDIAAgEIgBADIgYAlIgCABIgFAAIAAgxIAGAAIAAAoIACgDIAYgkIACgBIAFAAIAAAxg");
	this.shape_76.setTransform(567.9,83,1.167,1.167);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#4A4A49").s().p("ANYAJIAAgBIABgCIABgBIADgDIAAgCIgCAAIgCgBIgCgEIACgDQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAIACABIABABIABADIABABIgBAEIgDAHIgEAEgAhBAJIAAgBIABgCIAAgBIADgDIAAgCIgCAAIgBgBIgBgCIAAgCQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAIADABIACABIABAEIAAAEIgCADIgDAEIgEAEgAnKAKIAAgBIgBgBIABgCIADgCIACgEIgBAAIgCAAIgCgBIgBgCIAAgCIABgDIAEgCIAEACIABADIAAABIgCAHIgFAIgAO1AAIgCgBIgBgBIAAgEIABgCIACgBIADgBIABABIACABIABACIAAACIAAACIgBABIgCABIgBABgAmEgBIgBgBIAAgEIABgCIADgCIADABIABABIACACIAAACIAAACIgCABIgBABIgDABgAsvAAIgCgBIgBgBIgBgCIABgCIABgCIACgBIACgBIACABIABABIACACIAAAEIgCABIgBABIgCABgAtpgBIAAgBIAAgEIAAgCIAFgCIACABIABABIABACIABACIgBACIgBABIgBABIgCABgAu5AAIgBgBIgBgBIAAgEIABgCIABgBIADgBIACABIACABIAAACIABACIgBACIAAABIgCABIgCABg");
	this.shape_77.setTransform(580,78.3,1,1,0,0,0,-17.3,1.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#4A4A49").s().p("AgDASIgEAAIgEgCIgBgDIgBgEIABgEIADgEIAHgBIAJgBIAAgDQABgEgCgCQgCgCgDAAIgDABIgCABIgDABIgCABIgBgBIgBgBIAAgCQACgCAEgCIAGgBIAGABIAEACIADAFIAAAFIAAAWIgFAAIgBgFIgFAEIgDABgAAAADIgDABIgDACIgBADIAAACIACACIACAAIACABIAFgBIACgCIABgCIAAgHg");
	this.shape_78.setTransform(58.1,80.9,1.167,1.167);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#4A4A49").s().p("AgCASIAAgeIgOAAIAAgFIAhAAIAAAFIgOAAIAAAeg");
	this.shape_79.setTransform(54.2,80.9,1.167,1.167);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#4A4A49").s().p("AAJASIAAgYIAAgCIgBABIAAACIgBABIgCACIgDADIgKAPIgBABIgBABIgEAAIAAgjIAGAAIAAAaIABgCIABgBIAQgWIABgBIAEAAIAAAjg");
	this.shape_80.setTransform(49.8,80.9,1.167,1.167);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#4A4A49").s().p("AgRAZIAAgxIAQAAIAHABIAGACIADAEIABAGIAAADIgCAEIgDACIgEACQAFABADACQADADAAAFIgBAFQgCAEgCABQgCACgDABIgIABgAgKAUIAKAAIAFgCIADgBIACgDIABgDQAAgEgDgCQgCgCgGAAIgKAAgAgKgCIAJAAIAEgBIADgBIACgCIABgEQAAgEgDgDQgCgCgFAAIgJAAg");
	this.shape_81.setTransform(45,80,1.167,1.167);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#4A4A49").s().p("AgJAXQgDAAgFgFIgFgHQgCgGAAgFIACgKIAFgIIAIgFQAEgBAFAAQAGAAAEABQAEACAEADQADAEACAEIACAKQAAAFgCAGQgCAEgDADQgEAFgEAAQgEACgGAAQgFAAgEgCgAgGgRIgGAEIgDAGIgCAHQAAAEACAEIADAGIAGAEQADACADAAQAEAAADgCIAGgEIADgGIABgIIgBgHIgDgGIgGgEQgDgBgEgBQgDABgDABg");
	this.shape_82.setTransform(36.9,80,1.167,1.167);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#4A4A49").s().p("AAPAYIAAgMIgcAAIAAAKIgBABIgBABIgFAAIAAgRIACAAIACgBIADgBIACgDIABgFIADgUIAVAAIAAAdIAHAAIAAAQIgBABIgBABgAgEgBIgEAIIAQAAIAAgZIgKAAg");
	this.shape_83.setTransform(28.9,81.6,1.167,1.167);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#4A4A49").s().p("AAIASIAAgRIgPAAIAAARIgHAAIAAgjIAHAAIAAAOIAPAAIAAgOIAHAAIAAAjg");
	this.shape_84.setTransform(24.1,80.9,1.167,1.167);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#4A4A49").s().p("AgDASIgEAAIgDgCIgCgDIgBgEIABgEIADgEIAIgBIAIgBIAAgDQAAgEgBgCQgCgCgEAAIgCABIgCABIgDABIgCABIgBgBIAAgBIgBgCQACgCAEgCQADgBADAAIAGABIAEACIACAFIABAFIAAAWIgFAAIgBgFIgGAEIgCABgAAAADIgDABIgDACIgBADIAAACIABACIAFABIAEgBIADgCIABgCIAAgHg");
	this.shape_85.setTransform(19.7,80.9,1.167,1.167);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#4A4A49").s().p("AgPAYIAAgvIAEAAQABAAAAABQAAAAABAAQAAAAAAAAQAAABAAAAIABAEIAFgFQADgBACAAIAGABQADACABACIADAFIABAIIgBAHIgDAGIgFADQgCACgEgBIgFgBIgEgCIAAAPgAgEgQIgEADIAAAQIAEAEIAEABQAEAAACgEQADgDAAgGIgBgFIgBgFIgDgCIgEAAg");
	this.shape_86.setTransform(15.6,81.5,1.167,1.167);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#4A4A49").s().p("AgOAZIAAgxIAdAAIAAAFIgWAAIAAAsg");
	this.shape_87.setTransform(12.2,80,1.167,1.167);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#4A4A49").s().p("AAAALIAAgIIAAgBIgCACIgGADIgBgDIAHgEIABAAIgCAAIgGgDIABgDIAGADIACACIAAgBIAAgIIABAAIAAAIIAAABIACgCIAGgDIABADIgFADIgCAAIgBAAIADABIAFADIgBADIgGgDIgCgCIAAACIAAAHg");
	this.shape_88.setTransform(5.9,78.1,1.167,1.167);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#4A4A49").s().p("AAtAmIAAg7IAGAAIAAAFIAGgEIAGgBQAHAAADADQAEACADAGQACAFAAAFQAAAGgCAFQgDAGgEACQgEACgGAAIgGgBQgDgBgCgCIAAAVgAA2gLQgDADAAAIQAAAJADADQAEAEAEAAQAFAAAFgFQADgDAAgIQAAgIgDgEQgFgEgEAAQgFAAgEAFgAAAATQgCgEAAgFIABgGQABgCACgCQACAAADgBIAGgBIANgDIAAgCQAAgEgCgDQgDgCgFAAQgGAAgCACQgCACgBAEIgHAAQABgGACgCIAHgEIAJgBIAIABQAEAAACADQACACAAADIAAAHIAAAIQAAAKABADIACAFIgIAAIgBgFQgEAEgEAAIgJABQgGAAgEgCgAAOACIgGACIgDADIgBADQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAQACACAFABQAEgBADgCQADgBACgDQABgDAAgFIAAgCIgMACgAhqARQgGgDgEgGQgCgIAAgIQAAgJADgHQAEgHAGgEQAGgCAIAAQAJAAAGADQAHAGACAHIgHACQgDgHgEgCQgEgDgGAAQgHAAgFADQgEAEgCAFQgBAFAAAGQAAAIACAEQACAGAEADQAFACAGABQAGAAAFgFQAEgDACgHIAHABQgCAKgFAFQgHAEgKAAQgJAAgGgEgABiAVIAAgkIgNAAIAAgGIAiAAIAAAGIgNAAIAAAkgAgTAVIAAgiIgNAiIgGAAIgMgjIAAAjIgHAAIAAgqIALAAIAMAhIAMghIAKAAIAAAqg");
	this.shape_89.setTransform(75,81.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape_89}]},328).wait(90));

	// pic5
	this.instance = new lib.pic5();
	this.instance.parent = this;
	this.instance.setTransform(364.3,34.6,0.66,0.66,0,0,0,0.1,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(328).to({_off:false},0).to({y:21.5,alpha:1},7,cjs.Ease.get(1)).wait(75).to({y:34.7,alpha:0},7,cjs.Ease.get(1)).wait(1));

	// pic3
	this.instance_1 = new lib.pic1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(369.1,42.6,0.66,0.66,0,0,0,0.1,0);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(164).to({_off:false},0).to({x:359.1,alpha:1},7,cjs.Ease.get(1)).wait(157).to({x:349.1,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(82));

	// pic2
	this.instance_2 = new lib.pic2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(410.9,7.1,1,1,0,0,0,0.1,0.1);
	this.instance_2.alpha = 0.289;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(82).to({_off:false},0).to({regX:0.2,x:405.3,alpha:1},7,cjs.Ease.get(1)).wait(75).to({regX:0.1,x:391.1,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(246));

	// pic1
	this.instance_3 = new lib.pic1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(369.1,42.6,0.66,0.66,0,0,0,0.1,0);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:359.1,alpha:1},7,cjs.Ease.get(1)).wait(75).to({x:349.1,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(328));

	// text5
	this.instance_4 = new lib.text5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(480,13.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(328).to({_off:false},0).to({x:470,alpha:1},7,cjs.Ease.get(1)).wait(75).to({x:460,alpha:0},7,cjs.Ease.get(1)).wait(1));

	// text4
	this.instance_5 = new lib.text4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(590,36.6,0.8,0.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(246).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},7,cjs.Ease.get(1)).wait(75).to({scaleX:0.8,scaleY:0.8,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(82));

	// text3
	this.instance_6 = new lib.text3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(590,35.6,0.8,0.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(164).to({_off:false},0).to({scaleX:1,scaleY:1,y:36,alpha:1},7,cjs.Ease.get(1)).wait(75).to({scaleX:0.8,scaleY:0.8,y:35.6,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(164));

	// text2
	this.instance_7 = new lib.text2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(590,35.3,0.8,0.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(82).to({_off:false},0).to({scaleX:1,scaleY:1,y:35.6,alpha:1},7,cjs.Ease.get(1)).wait(75).to({scaleX:0.8,scaleY:0.8,y:35.3,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(246));

	// text1
	this.instance_8 = new lib.text1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(590,36.5,0.8,0.8);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:1,scaleY:1,y:37.1,alpha:1},7,cjs.Ease.get(1)).wait(75).to({scaleX:0.8,scaleY:0.8,y:36.5,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(328));

	// bg
	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#3B454C").s().p("ACvA9QgIgIAFgVIADgXQAEgUALgJQAIgIARgBIAFAAQAMABAHADQAHAEACAIIAJg2IAPAAIgYCIIgOAAIADgPQgEAHgKAGIgIACIgNABQgUAAgHgJgADXgPQgLAAgFAEQgFAEgDATIgEARQgDASADAFQAFAFAOAAIAJAAQAJgCAFgFQAKgHABgOIADgQQADgPgGgHQgHgHgOAAgAgqA/QgGgGACgRQACgLADgGQAEgGAEgDQADgDAIgBIASgBIABAAQAOAAAFACQAHACACAFIAEgRQACgKgEgEQgFgEgSAAIgIAAQgHABgDADQgEABgCAJIgOAAIAAgCQACgNAJgFQAGgEANgBIAJgBIAYABQAHACADADQAEADABAFQABAEgCAMIgMBEIgNAAIABgKQgFAHgHACQgDABgIABIgJAAQgWABgHgIgAgXAYQgFAEgCAJQgDALAFAFQAEAEAQAAIAEAAQAKAAAGgEQAHgCACgHIABgKQACgHgGgEQgHgCgPAAQgOgBgFAEgAjkBGQgcAAgJgKQgJgKAFgbIAIgtQAEgbANgKQANgLAcABIASAAQAZAAALAJQAKAHgDATIgBAGIgQAAIAAgBQADgPgHgFQgFgGgVAAIgMAAQgOAAgHABQgFACgGAEQgGAEgBAFQgEALgCAJIgHAnIgCAUQAAAGAFAEQADADAGABQAGACAOAAIAMAAIATgBIAKgFQAEgDADgFIAFgTIABgIIgmAAIACgPIA2AAIgDAXQgGAbgMAKQgNAKgcAAgAB+BFIAKg9QADgOgDgFQgFgFgMAAQgOAAgKAHQgIAHgDAPIgJA4IgPAAIARhhIAOAAIgDAOQAGgHAIgEQAHgDANgBQAUABAGAHQAHAIgEASIgLBAgAiHBFIARhhIAOAAIgCAOQAFgHAGgFQAIgDAKAAQARABAEAHQAFAIgDASIAAABIgPAAIABgDQACgKgDgFQgDgEgLAAQgKAAgIAHQgHAHgDAPIgJA4g");
	this.shape_90.setTransform(187.5,36.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#3B454C").s().p("AB4BMQgCgDAAgCIABgFIgPAIQgNAFgNAAQgJAAgEgCIgDgCQgEgCgCgEQgCgEAAgEQAAgOALgLIAAgBQAMgNATgFIAIgDQAKgCALAAIAKAAQAFAAADgDQADgEAAgFQAAgGgFgCQgEgEgJAAQgMAAgMAFIgLAEIgFADQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAgBQAAgFAIgFIALgHQAQgFASAAQAOgBAIAGQADACADAEQACAEAAAFQAAAIgKAWIgQAhQgCAEAAAHQAAACgGAFQgHAFgDAAQgCAAgCgEgABoAaIgCABQgGABgHAGQgNAIAAALQAAAGAEADQADADAHAAQAGAAAIgDIABAAQAIgDAGgFQAGgDADgGQAEgFAAgEQAAgGgEgDQgGgCgGAAIgMABgAhLBMQgCgCAAgDQAAgLASgjIATgnQACgFACgCQACgBADgBQAJgEAEAAQAFAAAAAFQAAADgEAGIgJARQgXAtgCAOQAAACgDACIgDADQgLAHgEAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAgAgEBJIgCgCQgHgGAAgIQAAgJAJgSIAQgiIABgCQAAAAAAAAQAAgBAAAAQgBAAAAAAQgBAAgBAAIAAAAIgRAAQAAAAgBAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABgBIADgCIACgCIAEgFIAPgBIAFgBIACgEIALgVIAEgFIADgCQAIgEAGAAQAAAAABAAQAAAAABAAQAAABABAAQAAABABAAIABAEIgNAcQAAACAFAAIARAAQAFgBAAACIgDAFIgHAFIAAAAIgNAEIgIAAIgFABIgDADQgIAMgMAYQgGANAAAGQAAAFADADQADACAGAAQAMAAAOgJIAEgCQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAAEgKAIQgRAOgTAAQgIABgEgEgAikBEQgDgJAAgWIAEhgIABgDIAGgCQAKgGAFAAIADABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAABIgBAQQgEAwAAAXIABASQAAABAAABQAAABABAAQAAABAAAAQAAABABAAIAHgHIA6hRIAOgTIADgFIADgCIADAAQAMgEAFAAQADAAAAAEQAAABgEAGIgTAVIhDBdQgJAKgGAEQgLAJgIAAQgHAAgCgIgAgdgyQAAgEAEgGQAFgJACgCQADgEAFgCIAGgCIADAAQABAAAAAAQAAAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAAAABQgBAFgCAGIgEAGIgDADIgJAFIgJADQgEAAAAgEg");
	this.shape_91.setTransform(198.5,53.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#3B454C").s().p("AhwCMQgigSAAgjQAAg2AtgvQApgsA5gSQAKgCAFAAQALAAAAAFQAAAFgGABIgBgBQgJAAgHACQguAMghAqQgiAqgBAvQABAZAUAPQASAOAeADQA6AIAygeQA3ghAAg6QAAgigUgTQgTgUgiAAQgZABgRAJQgRAIgOAUIgIAGQgFAEgDgEQgFgEAHgMQAQgUAfgMQAdgJAdgBQAkABAXATQAYAUABAkQgDA+g9AqQg6AohJAAQgmAAgagOgAARheQABgGAEgBQALgIAJgPIAPgZQADgEACAAIAEACQADACADAIQABAGgDAGQgFALgMAKQgLAKgLAGQgDACgEAAIgHgEg");
	this.shape_92.setTransform(229.8,36.9);

	this.instance_9 = new lib.ClipGroup_7();
	this.instance_9.parent = this;
	this.instance_9.setTransform(82.9,39.9,1,1,0,0,0,64.1,12.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["#E6F4FC","#E3F3FB","#D9EEFA","#C7E6F7","#B0DCF3","#A3D6F1","#90CEEB","#8BCCEA","#31AED8"],[0,0.192,0.349,0.49,0.627,0.686,0.82,0.843,1],-484.9,0,243.1,0).s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_93.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_93},{t:this.instance_9},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90}]}).wait(418));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(363.5,44.5,729,91);
// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/728x90_atlas_.png", id:"728x90_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;