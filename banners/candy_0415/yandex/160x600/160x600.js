(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"160x600_atlas_", frames: [[0,231,180,199],[182,231,150,169],[238,0,159,221],[0,0,236,229]]}
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
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["160x600_atlas_"];
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
	this.shape.graphics.f("#FFFFFF").s().p("AjfA2QgFAAgEgDIgIgEIgHgGIAEgHIACgCIACAAIADABIAGAEIAHAEQAEABAHAAIAJgBIAGgEQADgCABgEQACgDAAgFQAAgEgCgDQgDgEgDgCIgbgKIgJgEQgCgCgDgGQgDgGAAgGQAAgFADgHQACgEAEgFQAFgFAGgCQAHgCAHAAQAKAAAHADQAIADAFAFIgEAHQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAIgCABIgOgHIgJgBIgIABIgGADIgEAGQgBADAAADQAAAEACADQACADAEACIAJAEIASAHIAJAEQADADACAEQACAHABAFQgBAGgCAIQgCAFgFAFQgGAFgGACQgHADgIAAgADHA2IAAheIgjAAIAAgNIBUAAIAAANIgjAAIAABegACWA2QgEAAgBgDIgbgmIgEgDIgEgBIgKAAIAAAtIgQAAIAAhrIAfAAQAJAAAIACQAJACAEAEQAGAEABAGQADAEAAAIQAAAGgCAFIgFAJQgEADgFACQgEAEgGABQADACABACIAgArgABkgBIAOAAIALgBIAIgFQADgDACgDQABgDAAgFQABgKgHgFQgFgFgNABIgPAAgAA6A2IgDgBIgCgDIgKgZIgvAAIgJAZIgCACIgDACIgMAAIAqhrIAQAAIAqBrgAASggIgSAuIAnAAIgSgvIgBgFgAg6A2IAAhQIABgEIglBBIgBADIgEABIgCAAQgEAAgBgEIgmhBIAAAEIABAEIAABMIgOAAIAAhrIAMAAIADAAQAAABABAAQAAAAAAAAQAAABABAAQAAABAAAAIAlBAIADAIIAEgIIAkhAQAAAAAAgBQAAAAAAgBQABAAAAAAQAAAAABgBIACAAIAMAAIAABrg");
	this.shape.setTransform(0,203.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABQA2QgKgFgHgHQgHgGgEgLQgEgJAAgNQAAgNAEgIQAEgJAHgJQAHgGAKgFQAKgEAMAAQALAAAKAEQAKAFAHAGQAHAJAEAJQAEAIAAANQAAANgEAJQgEALgHAGQgHAHgKAFQgKAEgLAAQgMAAgKgEgABWgjQgHACgFAGQgFAGgCAIQgDAIAAAIQAAAKADAIQACAIAFAFQAFAFAHADQAHACAJAAQAIAAAHgCQAHgDAFgFQAFgFACgIQADgHAAgLQAAgKgDgGQgCgIgFgGQgFgGgHgCQgHgCgIAAQgJAAgHACgAnkA2QgKgDgIgJQgIgHgEgKQgEgLAAgLQAAgMAEgKQAEgKAHgHQAHgHALgEQAKgEAMAAIAMABIALADIAIAEIAIAGIgFAHIgCACIgEgBIgKgGIgIgCIgKAAQgJAAgHACQgIAEgEAEQgGAHgCAHQgDAHAAAJQAAAKADAIQADAIAFAFQAEAFAJADQAHADAKAAIAMgBIAGgCIAFgCIAAgYIgQAAIgCgBIgBgBIAAgJIAiAAIAAApQgHAGgLADQgJADgLAAQgMAAgLgEgAH7A5IgDgBIgCgDIgKgZIgwAAIgKAZQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgMAAIArhrIAQAAIArBrgAHAARIAoAAIgRgqIgDgKgAF4A5IAAheIgjAAIAAgNIBUAAIAAANIgiAAIAABegAE2A5IAAhrIAPAAIAABrgADuA5IgshrIANAAIADABIACADIAgBPIABAHIAEgNIAdhJIACgCQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAMAAIgsBrgAhaA5IAAhrIAoAAQALAAALAEQAJADAHAIQAIAHADAKQADAKAAALQAAAMgDAKQgEALgHAGQgGAHgKAEQgLAEgLAAgAhLAsIAZAAQAJAAAGgCQAHgEAFgEQAGgHACgGQACgHAAgLQAAgKgCgGQgCgHgGgHQgFgEgHgEQgFgCgKAAIgZAAgAh9A5IgDgBIgDgCIg9hPIAAAFIAABNIgNAAIAAhrIAIAAIADABIACACIA9BPIAAhSIAOAAIAABrgAjnA5IgDgBIgCgDIgKgZIgwAAIgJAZIgCACIgDACIgMAAIAqhrIAQAAIArBrgAkPgdIgSAuIAnAAIgSguIgCgGgAlPA5QgFAAgBgEIgbglIgDgDIgFAAIgKAAIAAAsIgQAAIAAhrIAfAAQAJAAAJADQAIABAEAFQAGAEACAFQACAEAAAIQAAAGgCAFIgFAJIgIAGQgEADgHABQADACACADIAfAqgAmCABIAPAAIALgBIAHgDQAEgDABgEQACgEAAgFQAAgJgGgFQgGgEgNAAIgPAAgAASgQIgBgCIAEgHIACgHIgBgIIgDgIIAAgEIACgCIAIgDQADAFACAGQABAHgBAFIgEAMQgDAFgFAEg");
	this.shape_1.setTransform(0,183.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ACiAzQgJgDgGgHQgFgFgFgKQgFgJAAgLIgWAAIAAAwIgQAAIAAhrIAQAAIAAAwIAWAAQABgLAEgJQAFgKAFgFQAGgHAJgDQAJgEAKAAQALAAAKAEQAKAGAFAGQAGAHAEAKQADAJAAAMQAAANgDAJQgEAKgGAIQgFAGgKAFQgKAEgLAAQgJAAgKgEgACngmQgHAEgDAEQgEAFgDAIQgDAJABAIQgBAJADAIQADAJAEAFQADAEAHAEQAHADAHAAQAIAAAGgDQAHgDADgFQAGgGABgIQADgIAAgJQAAgIgDgJQgBgHgGgGQgDgFgHgDQgGgDgIAAQgHAAgHADgAgBAzQgKgFgGgGQgHgHgEgLQgEgKAAgMQAAgLAEgKQADgKAIgHQAGgHAKgFQAKgEAMAAQALAAAKAEQAKAFAHAHQAHAIADAJQAFAJAAAMQAAAOgFAIQgEALgGAHQgHAGgKAFQgKAEgLAAQgMAAgKgEgAAFgmQgGADgFAFQgFAFgCAIQgDAJAAAIQAAAKADAHQACAIAFAGQAFAGAGACQAHACAJAAQAHAAAIgCQAGgCAGgGQAEgGADgIQADgHAAgKQAAgIgDgJQgDgIgEgFQgGgFgGgDQgIgCgHAAQgJAAgHACgAjHAzQgJgEgIgHQgGgIgEgJQgDgLAAgMQAAgKADgLQAFgMAHgFQAFgHALgFQALgEALAAQALAAAJAEQAKAFAGAFIgGAHIgBABIgCABIgEgBIgEgEIgIgDIgLgBQgIAAgIACQgGADgFAFQgEAFgEAIQgCAJAAAIQAAAKACAHQACAGAGAIQAFAFAGADQAGACAJAAIAJAAIAGgBIAGgEIAGgEIABAAIABgBIADABIAGAHQgHAHgJAFQgLAEgMAAQgMAAgJgEgAh6A2IAAhrIAiAAQAIAAAKACQAGADAFADQAFADACAFQACAHABAGIgCAHIgEAGIgGAHIgIADQALACAGAGQAGAGAAAKQAAAHgDAFQgCAGgFAEQgFAFgHABQgIADgIAAgAhsApIAXAAQAGAAAFgBQAFgCACgCQADgCABgEIACgHQAAgJgGgEQgFgFgNAAIgXAAgAhsgFIAegBIAHgEIAEgFQACgEAAgDQAAgKgFgFQgHgDgLAAIgUAAg");
	this.shape_2.setTransform(0,163.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AEYA2IABhZIgDAHIgDAFIgxBIIgDAEQAAAAgBAAQAAAAAAABQgBAAgBAAQAAAAgBAAIgLAAIAAhrIAPAAIAABRIgBAIIADgHIA0hNIADgDQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABAAIALAAIAABrgAB1A2IAAhrIAgAAQAKAAAIACQAIADAFAEQAFAFACAGQADAFAAAJQAAAHgDAGQgDAGgEAEQgGAGgHABQgJADgJAAIgQAAIAAAogACFABIAQAAQAHABAEgCIAIgEQAEgDABgDQABgEAAgFQAAgFgBgEQgBgDgEgEQgCgDgGgBQgEgCgHAAIgQAAgAAfA2IAAhrIBCAAIAAANIgzAAIAAAiIApAAIAAAMIgpAAIAAAkIAzAAIAAAMgAg+A2IAAhrIBFAAIAAAMIg1AAIAAAiIAUAAQAJAAAIACQAGACAFADQAEAEADAFQACAHAAAFQAAAIgCAGQgDAFgFAFQgEAEgHADQgHACgJAAgAguAqIAUAAQAGAAAFgCIAHgEIAEgGIABgHIgBgIIgEgGIgHgDIgLgCIgUAAgAhoA2IAAhrIAPAAIAABrgAjFA2IAAhrIAPAAIAAAuIAVAAQAJAAAIACQAHADAFACQAFAFACAEQACAGAAAGQAAAIgDAGQgCAGgFAEQgEAEgIADQgIACgIAAgAi2AqIAVAAQAGAAAEgCIAHgEIAEgGIABgHIgBgIIgEgGIgHgDIgKgCIgVAAgAkmA2IAAhrIAiAAQAIAAAKACQAHADAEADQAFADACAGQADAGAAAFIgCAIIgDAHIgHAFIgIAFQALABAGAGQAGAGAAAKQAAAGgCAHQgDAFgFAEQgFAFgHACQgHACgJAAgAkXAqIAXAAQAGAAAEgCQAGgCABgCQADgCACgEIABgIQAAgHgGgFQgFgFgMAAIgXAAgAkXgFIAdgBQAGgBABgCIAFgHQABgCAAgFQAAgJgFgEQgHgFgLAAIgTAAg");
	this.shape_3.setTransform(0,143.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIAPAAIAAAuIAVAAQAIAAAIADQAGABAGAEQAEADACAGQADAGAAAGQAAAHgDAFQgCAGgFAFQgFAEgHACQgJADgHAAgAgVApIAUAAQAHABADgCQAGgCABgCQADgDABgDIABgHIgBgIIgEgGQgCgCgFgCIgJgBIgVAAg");
	this.shape_4.setTransform(29.1,66.2,0.95,0.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHA2IAAheIgiAAIAAgNIBTAAIAAANIgiAAIAABeg");
	this.shape_5.setTransform(20.1,66.2,0.95,0.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAnA2QgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBIgCgCIgJgZIgvAAIgKAZQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgMAAIArhrIAPAAIArBrgAgCgcIgRApIAnAAIgUgzg");
	this.shape_6.setTransform(12,66.2,0.95,0.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIAhAAQAIAAAJADQAHABAFAGQAFADADAHQACAHAAAGQAAAIgDAHQgCAFgFAEQgFAEgHAEQgJACgIAAIgRAAIAAAogAgUACIARAAQAFgBAEgBQAFgBAEgDIAEgHQACgDAAgGIgCgJQgBgDgDgDQgDgDgFgCIgbgBg");
	this.shape_7.setTransform(4,66.2,0.95,0.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIBFAAIAAAMIg1AAIAAAiIAUAAQAIAAAIADQAGABAGAEQAFADACAGQACAEAAAIQAAAIgDAEQgCAHgFAEQgEAEgIACQgIADgHAAgAgUApIAUAAQAFABAEgCQAGgCABgCQADgDABgDIACgHIgCgIQAAgCgEgEIgHgEIgdgBg");
	this.shape_8.setTransform(-4.8,66.2,0.95,0.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAnA2IAAhrIAPAAIAABrgAg1A2IAAhrIAPAAIAAAuIAVAAQAIAAAJADQAFABAFAEQAFADACAGQADAGAAAGQAAAGgDAGQgDAHgEAEQgFAEgGACQgJADgIAAgAgmApIAUAAQAHABAEgCQAFgCACgCQACgDABgDIABgHIgBgIIgDgGQgCgCgFgCIgKgBIgVAAg");
	this.shape_9.setTransform(-16,66.2,0.95,0.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AglA2IAAhrIAjAAQAHAAAJACQAIADAEACQAFAFACAEQACAFAAAIIgBAHQgCAEgCACQgDAEgDACQgEADgFABQAMACAGAGQAFAGAAAKQAAAHgCAGQgCAFgGAEQgEAEgHACQgJADgIAAgAgWApIAWAAQAGABAFgCQAEgCADgCQACgBACgFQABgDAAgFQAAgHgGgFQgFgFgMAAIgWAAgAgWgFIATAAIAJgBIAIgEQADgCABgDIABgIQAAgJgFgFQgFgEgLAAIgUAAg");
	this.shape_10.setTransform(-26.8,66.2,0.95,0.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0EA6E0").s().p("Aq6C0QgQAAgMgMQgMgLAAgRIAAkYQAAgQAMgLQAMgMAQAAIV2AAQAQAAALAMQAMALAAAQIAAEYQAAARgMALQgLAMgQAAg");
	this.shape_11.setTransform(0.7,66.4,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text5, new cjs.Rectangle(-69.5,49.4,140.4,159.3), null);


(lib.text4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDAJIgDgCIgCgDIgBgEIABgDIACgDQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIADgBIAEABIADACIACADIABADIgBAEIgCADIgDACIgEABg");
	this.shape.setTransform(61.2,70.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AASAmIAAgjIgjAAIAAAjIgOAAIAAhLIAOAAIAAAeIAjAAIAAgeIAOAAIAABLg");
	this.shape_1.setTransform(55.2,67.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AATAmIAAg1IABgDIgDAFIglAyIgDABIgJAAIAAhLIAPAAIAAA1IgBADIACgFIAlgyIAEgBIAIAAIAABLg");
	this.shape_2.setTransform(46.7,67.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAeAmIAAgwIABgKIgaAsIgCACIgCABIgBAAIgCgBIgCgCIgagsIABAKIAAAwIgNAAIAAhLIAMAAIADAAIACADIAZApIAAAEIADgIIAXglIACgDIADAAIAMAAIAABLg");
	this.shape_3.setTransform(37,67.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXA2IAjguIADgEQgFAEgEABIgKABQgEAAgHgCQgGgBgEgFQgDgCgEgHQgCgGAAgGQAAgHADgHQACgGAFgFQAGgEAFgDQAIgCAGgBQAHABAHACQAHADAEAEQAFAGACAFQACAGAAAIIgBAJQgBAGgBADIgEAHIgeAtQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAIgEABgAgHgoQgFACgCACQgCACgCAFQgCAEAAAFQAAAKAGAFQAFAFAJAAQAFAAAEgBIAHgFQACgCACgEIACgIQAAgFgCgEQgBgDgDgEIgHgEIgIgCQgEAAgEACg");
	this.shape_4.setTransform(23.5,65.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMA1IgJgCIgHgDIgGgFIAFgGQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIADABIAFADIAGACQAEABAEABQADgBAGgBQAEgCAEgEQAEgDABgFQABgEAAgGIgBgJIgEgGQgDgCgFgBQgEgCgFAAQgIAAgJADIgJgCIAJg0IAyAAIAAAHQAAADgCACQgCACgEAAIggAAIgFAbIAOgBQAKAAAFACQAFACAGAFQAEAEACAFQADAHAAAGQAAAJgDAHQgDAGgGAFQgFAFgHADQgIACgGAAg");
	this.shape_5.setTransform(14.8,65.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIAQIAAgBIABgDIAFgEIACgFIAAgDIAAAAIgDgBIgDgCIgCgDIgBgDQABgEACgDQADgCADAAIAEABIADABIACAEIAAAFIAAAHIgDAGQgBADgEAEIgFAGg");
	this.shape_6.setTransform(5,71.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAMA2IAAgcIguAAIgCgBQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIgBgHIAyhEIAOAAIAABDIAPAAIAAAJIAAACIgDABIgMAAIAAAcgAgYAOIAkAAIABgyg");
	this.shape_7.setTransform(-1.2,65.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAMA2IAAgcIguAAIgCgBQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIgBgHIAyhEIAOAAIAABDIAQAAIAAAJIgBACIgDABIgMAAIAAAcgAgYAOIAkAAIABgyg");
	this.shape_8.setTransform(-9.8,65.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHARIgBgCIACgDIAEgEIACgFQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAAAAIgDgBIgDgCIgCgDIAAgDQAAgFACgCQADgCADAAIAEABIADABIACAEIAAAFIgBAHIgCAGIgFAHIgFAGg");
	this.shape_9.setTransform(-19.6,71.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgOAzQgIgCgFgIQgFgGgDgLQgDgKAAgOQAAgNADgKQADgLAFgHQAFgGAIgEQAGgDAIAAQAJAAAGADQAIAEAFAGQAFAHADALQADAKAAANQAAAOgDAKQgDALgFAGQgFAIgIACQgGAEgJAAQgIAAgGgEgAgIgoQgFADgDAEQgDAEgDAJQgBALAAAJQAAAJABAMQADAJADADQADAGAFACQAEACAEAAQAFAAAEgCQAFgCADgGQADgDACgJQACgIAAgNQAAgMgCgIQgCgJgDgEQgDgEgFgDQgEgCgFAAQgEAAgEACg");
	this.shape_10.setTransform(-25.6,65.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgNA1QgGgCgFgEIgHgJQgDgEgBgHIAGgDIAEgBQABABAAAAQABAAAAAAQABABAAAAQAAABABABIACAEIAEAGIAGAEQAEACAFAAQAGAAAEgCQAEgCACgCQADgDACgEIABgHIgBgIQgBgDgDgCQgDgDgGgCQgFgBgHAAIAAgKQAGAAAEgBQAGgBACgDIAFgFIABgIIgCgIQAAgDgDgDIgGgDQgDgBgFAAQgDAAgDABIgGADIgEAFIgDAHIgCADIgFABIgHgBQAAgIAEgFQADgHAFgDQADgEAHgCQAGgCAGAAQAIAAAFACQAHACADADQAEAEACAFQADAFAAAHQAAAFgCAEQAAADgDAEIgGAFIgIADQALACAFAGQAFAIAAAJQAAAHgDAHQgCAFgFAFIgMAGQgGACgIAAQgIAAgFgCg");
	this.shape_11.setTransform(-34.4,65.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIAQIAAgBIACgDIAEgEIACgFIAAgDIAAAAIgDgBIgDgCIgCgDIgBgDQAAgEADgDQADgCADAAIAEABIADABIACAEIAAAFIgBAHIgDAGQgBADgDAEIgFAGg");
	this.shape_12.setTransform(-44.2,71.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AANA2IAAgcIgvAAIgDgBIgBgDIgBgHIAzhEIANAAIAABDIAPAAIAAAJIAAACIgCABIgNAAIAAAcgAgYAOIAlAAIAAgyg");
	this.shape_13.setTransform(-50.4,65.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgZA2IAAgLIAXAAIAAhGIABgHIgTAQIgCABIgCAAIgCgBIgBgBIgFgGIAggcIALAAIAABgIAWAAIAAALg");
	this.shape_14.setTransform(-58.9,65.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAcA2IAAhKIABgOIgCAGIgEAFIgvBIIgDADQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgLAAIAAhrIAQAAIAABRIgCAIIAEgHIAzhNIACgDQAAgBABAAQAAAAABgBQABAAAAAAQABAAAAAAIAMAAIAABrg");
	this.shape_15.setTransform(25.1,47.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAeA2IgFgCIgCgDIgagnIgFgEIgGgBIgNAAIAAAxIgPAAIAAhrIAPAAIAAAvIALAAIAGgBIACgBIADgDIAagmQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAIAOAAIggAtQgDADgGADIAGADIAGAGIAfAvg");
	this.shape_16.setTransform(14.9,47.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIAhAAQAIAAAJADQAHABAGAGQAFAEACAGQADAGgBAIQABAHgDAHQgDAFgFAEQgGAFgGADQgJACgIAAIgRAAIAAAogAgUACIARAAIAKgCQAEgBAEgDQADgDABgEQACgDAAgFQAAgFgCgEQgBgEgDgDQgDgCgFgCQgEgBgGgBIgRAAg");
	this.shape_17.setTransform(5.2,47.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAcA2IAAhKIABgOIgDAGIgCAFIgxBIIgDADQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgMAAIAAhrIAPAAIAABRIAAAIIACgHIA0hNIACgDQABgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAMAAIAABrg");
	this.shape_18.setTransform(-5.5,47.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgHA2IAAheIgiAAIAAgNIBTAAIAAANIgiAAIAABeg");
	this.shape_19.setTransform(-15.7,47.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgOAzQgJgEgHgIQgGgGgFgLQgDgKAAgMQAAgLAEgLQAEgKAHgHQAGgGALgFQAKgEAKAAQALAAAJAEQAJAEAHAGIgGAHIgBABIgBAAIgEAAIgFgEIgIgDQgFgBgGgBQgIAAgGADQgGACgGAGQgFAGgDAIQgCAGAAAKQAAALACAHQADAHAFAGQAEAEAIAEQAFADAJgBIAIAAIAHgCIAFgCIAIgGIABAAIACABIAGAHQgGAHgKAFQgJAEgNAAQgKAAgLgEg");
	this.shape_20.setTransform(-25,47.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAcBDIAAhRIABgHIgGAMIgyBLQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgMAAIAAhrIAQAAIgBBZIADgHIAyhNIADgDQABAAAAgBQAAAAABAAQABgBAAAAQABAAAAAAIAMAAIAABrgAgOgzQgGgDAAgIIAAgDQABAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAIAIAAIABAGQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIAEADIAEAAIAFAAIADgDIACgDIAAgGIAJAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAIABADQAAAIgGADQgGAFgKAAQgKAAgFgFg");
	this.shape_21.setTransform(31.4,27.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgVAzQgKgFgHgHQgGgGgFgLQgDgJAAgNQAAgMADgJQAFgKAGgIQAHgGAKgFQALgEAKAAQALAAALAEQAKAFAGAGQAIAIADAKQAEAKAAALQAAAMgEAKQgEALgHAGQgGAHgKAFQgLAEgLAAQgKAAgLgEgAgPgmQgGACgFAGQgFAGgDAIQgDAIAAAIQAAAKADAIQADAIAFAFQAFAFAGADQAIACAHAAQAJAAAGgCQAGgDAGgFQAFgFADgIQACgJAAgJQAAgIgCgIQgDgIgFgGQgGgGgGgCQgGgDgJAAQgHAAgIADg");
	this.shape_22.setTransform(19.7,29.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgjA2IAAhrIAgAAQAIAAAJADQAIACAEAFQAGAEACAGQACAFAAAJQAAAJgCAFQgCAFgGAEQgFAFgIADQgIACgIAAIgRAAIAAAogAgUACIARAAQAFgBAFgBIAIgEQADgCABgFQACgDAAgFQAAgFgCgEQgBgEgDgDQgDgCgFgCQgFgBgFgBIgRAAg");
	this.shape_23.setTransform(9.6,29.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgHA2IAAheIgiAAIAAgNIBTAAIAAANIgiAAIAABeg");
	this.shape_24.setTransform(0.2,29.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgOAzQgJgEgHgIQgHgGgEgLQgDgKAAgMQAAgLAEgLQAEgKAGgHQAHgGAKgFQALgEAKAAQAKAAAKAEQAJAEAHAGIgFAHIgCABIgCAAIgDAAIgFgEIgIgDQgFgBgGgBQgIAAgGADQgFACgHAGQgEAGgDAIQgDAGAAAKQAAALADAHQACAHAGAGQAEAEAHAEQAGADAIgBIAHAAIAHgCIAHgCIAHgGIABAAIACABIAGAHQgGAHgKAFQgJAEgOAAQgJAAgLgEg");
	this.shape_25.setTransform(-9.1,29.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAnA2IAAhrIAPAAIAABrgAg1A2IAAhrIAPAAIAAAuIAVAAQAJAAAIADQAGACAFADQAFADACAGIACALQAAAHgDAHQgDAGgEAEQgEAEgHACQgIADgIAAgAgmApIAVAAQAGABAEgCIAHgDIADgGIABgIIgBgIIgDgFIgHgFIgKgBIgVAAg");
	this.shape_26.setTransform(-21.1,29.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIBFAAIAAAMIg1AAIAAAiIAUAAQAIAAAIADQAHACAFADQAEADADAGQACAFAAAGQAAAJgDAFQgCAFgFAFQgFAEgHACQgIADgHAAgAgUApIAUAAQAFABAEgCQAGgCABgBQAEgEAAgCIACgIIgCgIQgBgDgDgCQgCgDgFgCIgdgBg");
	this.shape_27.setTransform(-32.1,29.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AArA2IAAhUIgkBBIgCADIgEABIgBAAQgDAAgDgEIglhBIABAEIAABQIgNAAIAAhrIALAAIADABIADACIAkBAIACAIIAohIIACgCIADgBIALAAIAABrg");
	this.shape_28.setTransform(36.3,10.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AArA2IAAhQIAAgEIgkBBIgCADIgEABIgBAAQgDAAgCgEIglhBIAAAEIAABQIgNAAIAAhrIALAAIADABQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABIAlBAIACAIIAEgIIAkhAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAIADgBIALAAIAABrg");
	this.shape_29.setTransform(22.3,10.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAnA2IgEgBIgCgDIgJgZIgvAAIgKAZIgCACIgDACIgMAAIArhrIAPAAIArBrgAgBggIgSAuIAmAAIgTg0g");
	this.shape_30.setTransform(10.3,10.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgjA2IAAhrIAgAAQAIAAAIADQAHABAGAGQAFAEADAGQACAHAAAHQAAAHgDAHQgCAFgFAFQgGAEgHADQgIACgIAAIgRAAIAAAogAgUACIARAAQAFAAAEgCQAGgBACgCQAEgEABgEQACgDAAgFQAAgFgCgEQgBgDgEgEQgCgCgFgCIgKgBIgRAAg");
	this.shape_31.setTransform(1.9,10.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AggA2IAAhrIBBAAIAAANIgxAAIAABeg");
	this.shape_32.setTransform(-6.6,10.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgVAzQgKgFgHgGQgGgHgFgLQgDgJAAgNQAAgMADgJQAFgKAGgIQAHgGAKgFQALgEAKAAQALAAALAEQAKAFAHAGQAHAJADAJQAEAKAAALQAAAMgEAKQgEALgGAHQgHAGgKAFQgLAEgLAAQgKAAgLgEgAgPgmQgGADgFAFQgFAFgDAJQgDAIAAAIQAAAKADAHQADAJAFAFQAFAFAGADQAIACAHAAQAJAAAGgCQAGgDAGgFQAFgFADgJQACgFAAgMQAAgKgCgGQgDgJgFgFQgGgFgGgDQgGgCgJAAQgHAAgIACg");
	this.shape_33.setTransform(-17.2,10.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgjA2IAAhrIAgAAQAIAAAJADQAIACAEAFQAGAEACAGQACAFAAAJQAAAIgCAGQgCAFgGAFQgFAEgIADQgIACgIAAIgRAAIAAAogAgUACIARAAQAFAAAFgCIAIgDQADgEABgEQACgDAAgFQAAgFgCgEQgBgEgDgDQgDgCgFgCQgFgCgFABIgRAAg");
	this.shape_34.setTransform(-27.3,10.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAaA2IAAheIgzAAIAABeIgQAAIAAhrIBTAAIAABrg");
	this.shape_35.setTransform(-37.8,10.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgjA2IAAhrIAgAAQAIAAAJADQAIACAEAEQAGAFACAGQACAFAAAJQAAAIgCAGQgCAFgGAFQgFAFgIACQgIACgIAAIgRAAIAAAogAgUACIARAAQAFAAAFgCQAFAAADgDQADgEABgEQACgDAAgFQAAgFgCgEQgBgEgDgDQgDgCgFgCQgFgCgFABIgRAAg");
	this.shape_36.setTransform(22.3,-8.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgVAzQgKgFgGgGQgHgHgEgLQgEgKAAgMQAAgLAEgKQADgKAIgHQAGgHAKgFQALgEAKAAQALAAALAEQALAGAGAGQAGAHAFAKQADAJAAAMQAAANgDAJQgFALgGAHQgGAGgLAFQgLAEgLAAQgKAAgLgEgAgOgmQgGADgGAFQgGAHgCAGQgCAIAAAJQAAAMACAFQACAHAGAHQAGAGAGACQAHACAHAAQAIAAAIgCQAGgCAFgGQAFgGADgIQADgHAAgKQAAgIgDgJQgDgIgFgFQgFgFgGgDQgIgCgIAAQgHAAgHACg");
	this.shape_37.setTransform(11.3,-8.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIBFAAIAAANIg2AAIAAAhIAVAAQAIAAAIADQAHACAFACQAEAEACAFQADAHAAAGQAAAGgDAHQgCAFgFAFQgFAEgHACQgIADgIAAgAgVApIAUAAQAHAAADgBQAFgBACgDQADgDABgCIACgIIgBgIIgFgGIgHgDIgJgBIgVAAg");
	this.shape_38.setTransform(1.1,-8.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAnA2IAAhrIAPAAIAABrgAg1A2IAAhrIAPAAIAAAuIAVAAQAIAAAJADQAFABAGADQAEAEACAFQADAHAAAGQAAAGgDAHQgCAFgFAFQgFAEgGACQgJADgHAAgAgmApIAVAAQAGAAAEgBIAHgEIADgFIABgIIgBgIIgDgGIgHgDIgKgBIgVAAg");
	this.shape_39.setTransform(-10.8,-8.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AglA2IAAhrIAjAAQAGAAAKACQAHADAEADQAFADADAFQABAFAAAIIgBAHQgBAEgCACIgGAHIgJADQALABAHAHQAFAGABAKQgBAIgDAEQgBAGgGAEQgEAFgIABQgIADgIAAgAgWApIAWAAQAGAAAEgBQAFgCACgCQAEgDABgDQABgDAAgEQAAgJgGgEQgFgFgMAAIgWAAgAgWgFIAdgBIAHgEIAEgFQABgEAAgDQAAgKgFgFQgGgDgKAAIgUAAg");
	this.shape_40.setTransform(-22.1,-8.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAcBDIAAhKIABgOIgCAGIgDAGIgwBHIgDAEQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgMAAIAAhrIAQAAIAABRIgBAIIADgHIAzhNIACgDQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAIAMAAIAABrgAgPgzQgGgDAAgIIABgDIACgBIAJAAIAAAGIACADIADADIAFAAIAFAAIADgDIACgDIAAgGIAJAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAIABADQAAAIgGADQgGAFgKAAQgKAAgGgFg");
	this.shape_41.setTransform(35.1,-29.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAdA2IAAhRIAAgIIgGANIgvBHQgBABAAAAQAAABgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgLAAIAAhrIAQAAIgBBYIADgGIAzhNIADgDQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAMAAIAABrg");
	this.shape_42.setTransform(23.7,-28.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAdA2QAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBIgEgDIgagnIgEgEIgHgBIgMAAIAAAxIgQAAIAAhrIAQAAIAAAvIALAAIAGgBIACgCIAcgnIAEgDQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIANAAIgfAsQgEAFgFACQACABAEACIAmA1g");
	this.shape_43.setTransform(13.6,-28.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgVAzQgKgFgGgGQgHgHgEgLQgEgKAAgMQAAgLAEgKQADgKAIgHQAGgHAKgFQALgEAKAAQALAAALAEQALAGAGAGQAGAHAFAKQADAJAAAMQAAANgDAJQgFALgGAHQgGAGgLAFQgLAEgLAAQgKAAgLgEgAgOgmQgGADgGAFQgGAHgCAGQgCAIAAAJQAAAMACAFQACAHAGAHQAGAGAGACQAHACAHAAQAIAAAIgCQAGgCAFgGQAFgGADgIQADgHAAgKQAAgIgDgJQgDgIgFgFQgFgFgGgDQgIgCgIAAQgHAAgHACg");
	this.shape_44.setTransform(1.8,-28.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgjA2IAAhrIAgAAQAIAAAJADQAGACAHAEQAFAFACAGQACAHABAHQgBAHgCAHQgDAFgFAFQgGAFgHACQgIACgIAAIgRAAIAAAogAgUACIARAAQAFAAAEgCQAGAAACgDIAGgIQABgDAAgFQAAgFgBgEQgCgEgEgDQgCgCgFgCQgFgCgFABIgRAAg");
	this.shape_45.setTransform(-8.2,-28.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAcA2IABhZIgFANIgwBHIgDADIgEACIgMAAIAAhrIAQAAIgBBYIADgGIAyhNIADgDQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAMAAIAABrg");
	this.shape_46.setTransform(-19,-28.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AhDA2IAAhrIAQAAIAABeIAsAAIAAheIAPAAIAABeIAsAAIAAheIAPAAIAABrg");
	this.shape_47.setTransform(-32.8,-28.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text4, new cjs.Rectangle(-62.1,-36.2,124.4,109.3), null);


(lib.text3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAcAmIABg2IgXApQgBADgEAAIgBAAQgEAAgBgDIgXgpIABANIAAApIgRAAIAAhLIAQAAIADABQABAAAAAAQABAAAAAAQABABAAAAQAAABABAAIAUAlIABAFIACgFIAUglIADgCIAEgBIAQAAIAABLg");
	this.shape.setTransform(28.3,79.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKAlQgHgCgEgGQgFgFgCgHQgEgIAAgJQAAgHADgIQACgGAFgGQAGgGAGgDQAHgDAIAAQAJAAAGADQAGACAGAGIgFAHIgBABIgDABIgDgBIgDgCIgFgCIgGgBQgDAAgEACQgEACgCADQgDAEgBAEQgCAFAAAFQAAAGACAFIAEAIQACADAEACIAHABIAHgBIAFgCIACgCIAEgBQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAIAGAHIgHAGIgIAEIgIACIgIABQgGAAgGgDg");
	this.shape_1.setTransform(19.4,79.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAMA2IAAgaIgtAAIgDgBIgDgDIgCgJIAzhEIASAAIAABDIANAAIAAAKIgBADIgCABIgKAAIAAAagAgVAOIAhAAIAAgug");
	this.shape_2.setTransform(7.5,77.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNA2QgGgCgEgEQgFgDgDgGIgGgMIAIgDQAEgCADAAIAEAEQAAACADADIADAFIAGACQADACADAAQAFAAAEgCIAFgDIAEgGIABgHIgBgGQgBgEgCgCQgDgCgFgBQgDgBgJAAIAAgNIAKgBQAGgCABgBIAEgGIACgGQAAgHgFgFQgFgEgGAAIgGABIgEADIgEADIgCAGQgCADgBABQgDACgDgCIgKgBQABgJADgEQADgGAFgEQAFgFAGgCQAGgBAHAAQAFAAAIABQAGADAFAEQAEADACAGQADAGAAAFQAAAFgCAEQAAADgDAEIgGAEQgCACgFACQAKACAFAGQAEAHABAJQAAAIgEAGQgDAHgEAEQgHAFgGABQgHADgGgBQgJAAgFgBg");
	this.shape_3.setTransform(-1.1,77.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHA2IAAheIgiAAIAAgNIBTAAIAAANIgiAAIAABeg");
	this.shape_4.setTransform(-17.4,77.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgVAzQgKgFgGgGQgIgIgDgKQgEgKAAgMQAAgKAEgLQAEgLAHgHQAHgHAJgEQALgEAKAAQALAAALAEQAKAEAHAHQAGAHAFALQADAKAAALQAAANgDAJQgFAKgGAIQgGAGgLAFQgLAEgLAAQgKAAgLgEgAgOgmQgHADgFAFQgFAFgDAJQgCAGAAAKQAAALACAGQADAJAFAFQAFAFAHADQAHACAHAAQAJAAAHgCQAHgEAEgEQAFgFADgJQADgHAAgKQAAgJgDgHQgDgJgFgFQgEgFgHgDQgIgDgIABQgHgBgHADg");
	this.shape_5.setTransform(-27.4,77.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAcA2IAAgxIg3AAIAAAxIgQAAIAAhrIAQAAIAAAwIA3AAIAAgwIAQAAIAABrg");
	this.shape_6.setTransform(25.9,58);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAdA2IAAhRIABgIIgEAHIgyBNIgEADQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgMAAIAAhrIAPAAIAABZIACgHIAEgFIAvhIIAEgDQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAMAAIAABrg");
	this.shape_7.setTransform(14.4,58);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhCA2IAAhrIAPAAIAABfIAsAAIAAhfIAPAAIAABfIAsAAIAAhfIAPAAIAABrg");
	this.shape_8.setTransform(0.6,58);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAnA2IgEgBIgCgDIgJgZIgvAAIgKAZIgCADIgDABIgMAAIArhrIAPAAIArBrgAgCgbIgRApIAmAAIgTg0g");
	this.shape_9.setTransform(-12.6,58);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AArA2IAAhUIgkBBIgDADIgCABIgCAAQgDAAgCgEIglhBIAAAEIAABQIgOAAIAAhrIAMAAIADABIACACIAkBAIADAIIAohIIABgCIAEgBIAMAAIAABrg");
	this.shape_10.setTransform(-24.6,58);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAgA2IgCgBIgCgCIgcgsIgBADIgbApIgCACIgCABIgPAAIAlg2Igjg1IAPAAIACABIACABIAaArIACgCIAAgCIAagmQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAIAPAAIgkA0IAlA3g");
	this.shape_11.setTransform(51,38.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAcA2IAAhRIABgIIgCAHIg0BNIgCADQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgLAAIAAhrIAQAAIgBBZIACgHIADgFIAxhIIACgDQABgBAAAAQABAAAAAAQABgBAAAAQABAAABAAIALAAIAABrg");
	this.shape_12.setTransform(40.3,38.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAeA2IgFgBIgCgEIgbgnIgEgEQgCgBgEAAIgNAAIAAAxIgQAAIAAhrIAQAAIAAAvIALAAIAGgBIACgCIAdgnIADgDQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAOAAIghAsQgEAGgEACQADABADABIAFAHIAgAug");
	this.shape_13.setTransform(30.2,38.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgVAzQgJgDgHgIIAEgHIACgBIACgBIACABIAHAFIAFACIAHACIAIABQAKAAAHgFQAGgGAAgKIgBgHIgFgGQgCgCgFgCQgFgBgFAAIgOAAIAAgLIAOAAQAEAAAEgCIAHgDIAEgFQABgDAAgEIgBgHQgBgDgDgCIgHgDIgIgBIgKABIgQAHIgCAAIgBgCIgEgIQAGgFAIgDQAJgDAKAAQAIAAAGACQAHADAEADQAFADACAFQADAGAAAGQAAAHgEAHQgEAGgHADIAHAEIAGAFIAEAHIABAIQAAAHgDAGQgCAHgFAEQgGAFgHACQgHADgIAAQgMAAgJgEg");
	this.shape_14.setTransform(19.9,38.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgZA1QAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAgJIAFAAIAEgBIAEgBIADgDIAIgPIgrhMIAOAAIADABIACADIAaAwIAEAJIACgFIAYg0IACgDIADgBIANAAIgsBdIgDAHQgCADgDACIgGACIgHABg");
	this.shape_15.setTransform(11.3,38.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIAhAAQAIAAAJADQAGACAGAFQAFAEADAGQADAHAAAHQgBAIgDAGQgCAFgFAFQgEAEgJADQgIACgIAAIgRAAIAAAogAgUACIARAAQAFAAAEgCQAGAAACgDIAGgHQABgEAAgFIgBgJQgCgEgEgDQgDgDgEgBQgFgCgFAAIgRAAg");
	this.shape_16.setTransform(2.5,38.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AggA2IAAhrIBBAAIAAANIgyAAIAAAjIAoAAIAAALIgoAAIAAAjIAyAAIAAANg");
	this.shape_17.setTransform(-6.5,38.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAaA2IAAhfIgzAAIAABfIgQAAIAAhrIBTAAIAABrg");
	this.shape_18.setTransform(-16.7,38.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgZA1QAAAAgBAAQAAAAAAAAQAAgBgBAAQAAgBAAAAIAAgJIAFAAIAEgBIAEgBIADgDIAIgPIgrhMIAOAAIADABIACADIAaAwIAEAJIACgFIAYg0IACgDIADgBIANAAIgsBdIgDAHIgFAFIgGACIgHABg");
	this.shape_19.setTransform(-26.9,38.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgOAzQgLgFgFgHQgHgHgEgKQgDgJAAgNQAAgLAEgLQAEgKAGgHQAJgIAIgDQAJgEAMAAQALAAAJAEQAIADAHAGIgFAIIgBABIgCAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAIgFgDQgDgCgFgCIgMgBQgHABgGACQgHADgFAFQgFAGgDAIQgCAIAAAIQAAAJACAJQAEAIAEAEQAFAHAHABQAGADAHAAIAJAAIAGgCIAGgCIAGgFIABgBIACAAIACABIAGAGQgGAJgKADQgJAFgOAAQgKAAgKgEg");
	this.shape_20.setTransform(-36.5,38.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAcA2IAAhRIABgIIgCAHIgzBNIgDADIgEACIgMAAIAAhrIAQAAIgBBZIADgHIACgFIAxhIIACgDQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAMAAIAABrg");
	this.shape_21.setTransform(-51.2,38.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAgA2IgCgBIgCgCIgcgsIAAABIgeAtIgCABIgPAAIAlg2Igjg1IAPAAIADABIABABIAbArIAAgCIABgCIAagmQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAOAAIgjA0IAlA3g");
	this.shape_22.setTransform(19.8,19.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAdA2IAAhZIgDAHIgyBNIgEADQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgMAAIAAhrIAPAAIAABRIgBAIIAHgMIAvhIIAEgDQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAMAAIAABrg");
	this.shape_23.setTransform(9.2,19.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAeA2IgEgBIgDgEIgbgnQgCgDgCgBQgCgBgEAAIgNAAIAAAxIgPAAIAAhrIAPAAIAAAvIALAAIAGgBIACgCIAdgnIADgDQAAgBABAAQAAAAAAAAQABgBABAAQAAAAABAAIANAAIggAsQgEAGgFACQAEABACABQADADACAEIAgAug");
	this.shape_24.setTransform(-1,19.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgVAzQgKgEgGgHIAEgHQAAAAABAAQAAAAAAgBQAAAAAAAAQABAAAAAAIACgBIADABIAHAFIAEACIAHACIAIABQALAAAGgFQAHgGgBgKIgBgHIgEgGQgDgCgFgCQgEgBgGAAIgOAAIAAgLIAOAAQAEAAAEgCQAFgBABgCIAFgFQACgDgBgEQABgEgCgDIgEgFIgHgDIgIgBIgKABIgPAHIgCAAIgCgCIgEgIQAFgEAKgEQAIgDAKAAQAIAAAGACQAGACAGAEQAEADACAFQADAFAAAHQAAAIgEAGQgDAGgIADIAIAEIAFAFIAEAHIABAIQAAAHgCAGQgEAHgEAEQgGAFgGACQgIADgIAAQgLAAgKgEg");
	this.shape_25.setTransform(-11.2,19.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgYA1QgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgJIAFAAIAEgBIAEgBIADgDIADgEIAFgLIgrhMIAOAAIADABIADADIAZAwIAEAJIAEgJIAWgwIACgDIAEgBIAMAAIgsBdIgDAHQgCAEgEABQgBACgEAAIgHABg");
	this.shape_26.setTransform(-19.9,19.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgjA2IAAhrIAgAAQAIAAAIADQAHACAHAFQAEAEADAGQACAHAAAHQAAAIgCAGQgCAFgGAFQgEAEgJADQgIACgIAAIgRAAIAAAogAgUACIARAAQAFAAAFgCQAFAAADgDQACgDACgEQACgEAAgFIgCgJIgEgHQgDgDgFgBIgKgCIgRAAg");
	this.shape_27.setTransform(22.3,0.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgVAzQgLgFgGgHQgHgHgEgKQgDgLAAgLQAAgKADgMQAFgKAGgGQAIgIAJgEQAJgEAMAAQAMAAAKAEQAJADAHAJQAIAHADAJQAFAMAAAKQAAALgFALQgCAJgJAIQgGAHgKAFQgLAEgLAAQgKAAgLgEgAgPgmQgGADgFAGQgFAEgDAIQgCAJAAAIQAAAIACAKQADAHAFAFQAEAGAHACQAIADAHABQAJgBAGgDQAHgCAGgGQAEgFADgHQACgKABgIQgBgIgCgJQgDgIgEgEQgGgGgHgDQgFgDgKAAQgJAAgGADg");
	this.shape_28.setTransform(11.3,0.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIBFAAIAAAMIg1AAIAAAiIAUAAQAGAAAKACQAHACAFAEQAEADACAGQADAGAAAFQAAAHgDAHQgDAGgEAEQgHAFgFACQgHACgIAAgAgUAqIAUAAQAFAAAEgCQAGgCABgCIAFgFIABgIIgBgIIgFgGIgHgDIgJgBIgUAAg");
	this.shape_29.setTransform(1,0.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAnA2IAAhrIAPAAIAABrgAg1A2IAAhrIAPAAIAAAuIAVAAQAIAAAJACQAHADAEADQAFAEACAFQACAEAAAHQAAAHgDAHQgDAHgEADQgGAFgFACQgGACgKAAgAgmAqIAVAAQAGAAAEgCIAHgEIADgFIABgIIgBgIIgDgGIgHgDIgKgBIgVAAg");
	this.shape_30.setTransform(-10.8,0.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AglA2IAAhrIAiAAQAKAAAHACQAIADADADQAFADACAGQADAGAAAGIgCAHIgDAHIgHAFIgIAFQAMABAFAGQAGAGAAAKQAAAGgCAHQgEAGgEADQgFAEgHADQgGACgKAAgAgWAqIAWAAIAKgCQAFgBACgDQADgCACgEIABgHQAAgIgGgFQgGgFgLAAIgWAAgAgWgFIATAAQAFAAAEgBQAEgBADgDQADgCACgDQABgDAAgFQAAgJgFgEQgGgFgLAAIgTAAg");
	this.shape_31.setTransform(-22.1,0.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAdBDIAAhZIgCAHIgEAGIgvBIIgDACQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgLAAIAAhrIAQAAIAABSIgCAHIAGgMIAxhIIADgDQAAAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAIAMAAIAABrgAgPgzQgGgDAAgIIABgDIACgBIAJAAIAAAFIACAFIADACIAFABIAEgBIAEgCIACgFIABgFIAIAAIACABIAAADQABAIgGADQgGAFgKAAQgJAAgHgFg");
	this.shape_32.setTransform(34.7,-19.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgUAzQgLgEgGgIQgIgHgDgKQgEgLAAgLQAAgKAEgMQAEgKAHgGQAHgJAKgDQAIgEAMAAQANAAAJAEQAKADAHAJQAHAHAEAJQADALAAALQAAANgDAJQgDAJgIAIQgGAIgLAEQgLAEgLAAQgKAAgKgEgAgOgmQgHADgFAGQgFAEgDAIQgCAJAAAIQAAAIACAKQADAHAFAFQAFAGAHACQAHADAHABQAJgBAHgDQAHgDAEgFQAFgEADgIQADgKAAgIQAAgIgDgJQgDgIgFgEQgEgGgHgDQgGgDgKAAQgJAAgFADg");
	this.shape_33.setTransform(22.9,-17.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AhDA2IAAhrIAQAAIAABfIAsAAIAAhfIAOAAIAABfIAtAAIAAhfIAQAAIAABrg");
	this.shape_34.setTransform(8.8,-17.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIAQAAIAAAuIAUAAQAGAAAKACQAIADAEADQAFAEACAFQACAGAAAFQAAAHgCAHQgDAGgFAEQgGAFgGACQgGACgJAAgAgUAqIAUAAQAFAAAFgCQAEgCADgCIADgFIABgIIgBgIIgDgGIgHgDIgKgBIgUAAg");
	this.shape_35.setTransform(-3.4,-17.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgtA1QAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAgKIAFAAIAGgBQADAAADgFQACgCADgIIAEgRQACgIABgQIADgmIA/AAIAABrIgQAAIAAheIghAAQAAAUgDAQIgEAZQgEAOgCADQgDAGgEAFQgEAEgEABQgFACgFAAg");
	this.shape_36.setTransform(-14.6,-17.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgVAzQgKgEgHgIQgHgHgDgKQgEgJAAgNQAAgMAEgKQAEgKAGgGQAIgJAJgDQAJgEAMAAQANAAAJAEQAJADAIAJQAGAGAEAKQAEAMAAAKQAAALgEALQgDAKgHAHQgHAIgKAEQgLAEgLAAQgKAAgLgEgAgPgmQgHADgEAGQgFAEgDAIQgDAIAAAJQAAAJADAJQADAHAFAFQAEAFAHADQAIADAHABQAJgBAGgDQAHgCAFgGQAFgFADgHQACgIAAgKQAAgKgCgHQgDgIgFgEQgGgHgGgCQgFgDgKAAQgIAAgHADg");
	this.shape_37.setTransform(-25.1,-17.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIBFAAIAAAMIg2AAIAAAiIAVAAQAHAAAJACQAIADAEADQAFAEACAFQACAEAAAHQAAAJgDAFQgCAGgFAEQgGAFgGACQgGACgJAAgAgVAqIAVAAQAFAAAEgCQAFgBACgDIAFgFQABgEAAgEQAAgFgBgDQgBgCgEgEIgHgDIgJgBIgVAAg");
	this.shape_38.setTransform(-35.4,-17.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text3, new cjs.Rectangle(-55.6,-25.9,111.4,109), null);


(lib.text2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjA2IAAhrIAgAAQALAAAGADQAIACAEAEQAGAFACAGQACAFAAAJQAAAIgCAGQgCAFgGAEQgFAFgIACQgGADgKAAIgRAAIAAAogAgUACIARAAQAFAAAFgCIAIgDQADgDABgEIACgJQAAgFgCgEQgCgFgCgCQgDgDgFgBQgFgCgFAAIgRAAg");
	this.shape.setTransform(33.7,77.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggA2IAAhrIBBAAIAAANIgyAAIAAAiIAoAAIAAAMIgoAAIAAAjIAyAAIAAANg");
	this.shape_1.setTransform(24.7,77.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIAQAAIAAAuIAUAAQAKAAAGACQAHADAEACQAFAEADAGQACAGAAAFQAAAIgDAGQgDAGgEAEQgEADgIAEQgGACgJAAgAgUApIAUAAIAJgBQAEgBADgDQAEgCAAgEQABgDAAgEQAAgFgBgDQAAgDgEgDIgHgDQgEgCgFAAIgUAAg");
	this.shape_2.setTransform(16,77.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgjA2IAAhrIAgAAQALAAAGADQAIACAEAEQAGAFACAGQACAFAAAJQAAAGgCAIQgDAFgFAEQgFAFgIACQgGADgKAAIgRAAIAAAogAgUACIARAAIAKgCIAIgDQADgDABgEIACgJQAAgFgCgEQgCgFgCgCQgDgDgFgBQgFgCgFAAIgRAAg");
	this.shape_3.setTransform(6.8,77.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggA2IAAhrIBBAAIAAANIgyAAIAAAiIAoAAIAAAMIgoAAIAAAjIAyAAIAAANg");
	this.shape_4.setTransform(-2.1,77.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHA2IAAheIgiAAIAAgNIBTAAIAAANIgiAAIAABeg");
	this.shape_5.setTransform(-11.2,77.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAdA2IAAgxIg5AAIAAAxIgPAAIAAhrIAPAAIAAAwIA5AAIAAgwIAPAAIAABrg");
	this.shape_6.setTransform(-21.4,77.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAcA2IABhZIgFAMIgwBIIgDADQgBABAAAAQgBAAAAAAQAAABgBAAQgBAAAAAAIgMAAIAAhrIAQAAIAABRIgBAIIAGgMIAyhLIAEgCIAMAAIAABrg");
	this.shape_7.setTransform(-32.9,77.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhCA2IAAhrIAPAAIAABfIAsAAIAAhfIAOAAIAABfIAtAAIAAhfIAQAAIAABrg");
	this.shape_8.setTransform(16.7,58.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAnA2IgDgBIgCgDIgKgZIgvAAIgJAZIgCADIgEABIgMAAIArhrIAPAAIArBrgAgTAOIAnAAIgRgqIgDgKg");
	this.shape_9.setTransform(3.5,58.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AglA2IAAhrIAjAAQAKAAAGACQAHACAFAEQAFAEACAFQACAEAAAHIgBAIIgEAHQgDADgDACIgJAEQALABAGAHQAGAHAAAJQAAAIgCAFQgDAGgFADQgFAFgHACQgGACgKAAgAgWApIAWAAIALgBIAHgEIAEgGIABgHQAAgJgGgEQgFgFgMAAIgWAAgAgWgFIATAAQAFAAAEgBQAFgCADgCQADgCABgDIABgIQAAgJgFgEQgFgFgLAAIgUAAg");
	this.shape_10.setTransform(-6,58.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AglA2IAAhrIAjAAQAJAAAHACQAHACAFAEQAEADADAGQACAEAAAHIgBAIIgEAHIgGAFIgJAEQALACAHAGQAFAHAAAJQABAGgDAHQgEAGgEADQgGAFgFACQgHACgKAAgAgWApIAWAAIAKgBQAFgBADgDQADgDAAgDIACgHQAAgJgFgEQgHgFgLAAIgWAAgAgWgFIATAAQAFAAAFgBIAGgEQAEgCABgDIABgIQAAgJgFgEQgGgFgKAAIgUAAg");
	this.shape_11.setTransform(-19.5,58.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgVAzQgIgDgJgIQgHgIgEgJQgDgLAAgMQAAgLADgKQAEgJAHgJQAJgIAIgCQAKgFALAAQAMAAAKAFQAJADAHAHQAHAIAEAKQAEALAAAKQAAAMgEALQgEAKgHAHQgHAHgJAEQgJAEgNAAQgMAAgJgEgAgPgmQgHAEgEAEQgGAGgCAIQgDAJAAAHQAAAJADAIQADAIAFAGQAEAEAHAEQAHACAIAAQAKAAAFgCQAIgEAEgEQAFgGADgIQACgIAAgJQAAgHgCgJQgDgHgFgHQgFgEgHgEQgGgCgJAAQgHAAgIACg");
	this.shape_12.setTransform(36.6,20.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAdA2IAAgxIg5AAIAAAxIgPAAIAAhrIAPAAIAAAwIA5AAIAAgwIAPAAIAABrg");
	this.shape_13.setTransform(24.9,20.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIAQAAIAAAuIAUAAQAKAAAGACQAHADAFACQAFAFACAFQACAEAAAHQAAAHgCAHQgDAGgFAEQgEADgIAEQgGACgJAAgAgUApIAUAAIAJgBIAIgEQACgBABgFQACgDAAgEQAAgFgCgDQgBgEgCgCIgIgDQgEgCgFAAIgUAAg");
	this.shape_14.setTransform(15,20.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgtA2QgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAgKIAFAAIAGgBQADgBACgDQADgEACgGQADgGACgLIADgZIACglIBAAAIAABqIgPAAIAAheIgiAAIgHA9QgCAKgEAHQgEAIgDADQgEADgEACQgFABgFAAg");
	this.shape_15.setTransform(3.8,20.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAnA2IgDgBIgCgDIgKgZIgvAAIgKAZIgCADIgDABIgMAAIArhrIAPAAIArBrgAAAggIgSAuIAlAAIgQgqIgCgEIgBgGg");
	this.shape_16.setTransform(-6.2,20.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AggA2IAAhrIBBAAIAAANIgyAAIAAAiIAoAAIAAAMIgoAAIAAAjIAyAAIAAANg");
	this.shape_17.setTransform(-15.3,20.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AArBDIAAgaIhVAAIAAAVQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABIgDABIgKAAIAAgmIAMAAIAEgEIAFgHIAHgcIAEg4IA/AAIAABfIASAAIAAAhQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABIgDABgAgMgWQgBALgDAMQgDALgCAFQgCAHgDAFIAyAAIAAhTIghAAg");
	this.shape_18.setTransform(-26,21.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAdA2IAAhRIABgIIgHAMIgyBLIgEACIgMAAIAAhrIAQAAIAABKIgBAPIADgHIACgFIAwhIIAEgDQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAMAAIAABrg");
	this.shape_19.setTransform(-37.6,20.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAcA2IAAguIgPAAIgDAAIgDACIgDACIgZAkIgEAEQgCACgEAAIgMAAIAbgnQAFgHAHgDQgIgBgEgDQgFgBgDgEIgEgIQgCgFAAgFQAAgGACgHQAEgGAEgDQAFgEAHgDQAGgCAJAAIAkAAIAABrgAgCgnQgFACgCACQgDACgBADIgCAIIACAIIADAGQADACAFABQADACAGAAIAVAAIAAgmIgVAAQgGAAgDACg");
	this.shape_20.setTransform(37.1,39.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgOAzQgJgEgHgHQgHgIgDgKQgEgLAAgLQAAgLAEgKQADgKAIgIQAGgHAKgEQAKgEALAAQALAAAJAEQAJAEAGAGIgGAIIgCABIgDgCIgFgDQgDgCgFgBQgFgCgGAAQgIAAgGADQgIAEgEAEQgEAFgEAIQgCAJAAAIQAAAKADAIQACAIAFAFQAFAFAHADQAGADAHAAIAJgBIAHgCIAGgDIAFgEIABgBIACAAIACABIAGAHQgGAHgKAFQgJAEgOAAQgLAAgJgEg");
	this.shape_21.setTransform(28,39.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgHA2IAAheIgiAAIAAgNIBTAAIAAANIgiAAIAABeg");
	this.shape_22.setTransform(18.8,39.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AggA2IAAhrIBBAAIAAANIgyAAIAAAiIAoAAIAAAMIgoAAIAAAjIAyAAIAAANg");
	this.shape_23.setTransform(10.4,39.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhCA2IAAhrIAPAAIAABfIAsAAIAAhfIAPAAIAABfIAsAAIAAhfIAPAAIAABrg");
	this.shape_24.setTransform(-2.4,39.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAcA2IAAhRIABgIIgFAMIgxBIQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgLAAIAAhrIAQAAIgBBZIACgHIADgFIAxhIQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAQABAAABAAIALAAIAABrg");
	this.shape_25.setTransform(-16.2,39.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAaA2IAAhfIgzAAIAABfIgQAAIAAhrIBTAAIAABrg");
	this.shape_26.setTransform(-27.5,39.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgmA2IAAhrIAjAAQAKAAAHACQAGACAGAEQAEAEACAFQACAEABAHIgCAIIgEAHQgCADgEACIgJAEQAMABAGAHQAHAHgBAJQAAAHgCAGQgDAFgEAEQgHAFgFACQgHACgKAAgAgWApIAWAAIALgBIAHgEQADgDAAgDIACgHQAAgJgFgEQgHgFgLAAIgWAAgAgWgFIATAAQAFAAAEgBQAFgCACgCQADgCACgDIACgIQAAgJgHgEQgEgFgMAAIgTAAg");
	this.shape_27.setTransform(-37.5,39.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAdA2IAAgxIg5AAIAAAxIgPAAIAAhrIAPAAIAAAwIA5AAIAAgwIAPAAIAABrg");
	this.shape_28.setTransform(27.4,1.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAcBDIABhYIgGAMIgvBHIgDAEIgEABIgMAAIAAhqIAQAAIgBBYIAGgMIAvhHIADgEIAEgBIAMAAIAABqgAgPgyQgGgFAAgHIABgDQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAIAJAAIAAAGIACAEIADACIAEAAIAGAAIADgCIACgEIAAgGIAJAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAIABADQAAAHgGAFQgHAEgKAAQgIAAgHgEg");
	this.shape_29.setTransform(15.9,-0.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAnA2IgEgBIgCgDIgJgZIgvAAIgKAZIgCADIgDABIgMAAIArhrIAPAAIArBrgAgBggIgCAEIgQAqIAmAAIgSguIgBgGg");
	this.shape_30.setTransform(5.1,1.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgVAzQgLgFgFgFIAEgIIACgBIACgBIACABIAHAFIAFACIAHACIAIABQALAAAGgFQAHgGAAgJQAAgFgCgDQgCgDgDgDIgHgEIgXgBIgBgMIAOAAIAIgBQAEAAADgDIAEgFQACgDAAgEQAAgEgCgDIgEgFQgCgCgFgBQgEgBgEAAQgGAAgEABIgHADIgFADIgDABIgDgBIgBgBIgEgIQAGgFAIgDQAJgDAKAAQAIAAAGACQAGACAFAEQAFAEADAFQACAFAAAGQAAAHgEAHQgDAGgIAEIAHADQAEACACADIAEAHIABAIQAAAHgCAGQgDAHgFAEQgDADgJAEQgJADgHAAQgMAAgJgEg");
	this.shape_31.setTransform(-4.4,1.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAcA2IAAhKIABgPIgFAMIgwBIIgDADQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgMAAIAAhrIAQAAIgBBZIAGgMIAvhIIADgDIAEgCIAMAAIAABrg");
	this.shape_32.setTransform(-14.3,1.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAqBDIAAgaIhUAAIAAAVIgBAEIgEABIgJAAIAAgmIALAAIAFgEIAEgHIAEgMIAGgoQABgOABgSIA/AAIAABfIASAAIAAAhQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAABIgEABgAgNgWIgDAXQgCALgDAFIgGAMIAzAAIAAhTIgiAAIgDAgg");
	this.shape_33.setTransform(-26,2.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAcBDIAAhQIABgIIgFAMIgxBHQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgLAAIAAhqIAQAAIgBBYIACgGIADgGIAxhHQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAIALAAIAABqgAgPgyQgGgFAAgHIABgDQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAIAAIAAAGIACAEIADACIAFAAIAFAAIADgCIACgEIAAgGIAIAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAIABADQAAAHgGAFQgGAEgKAAQgKAAgGgEg");
	this.shape_34.setTransform(51.4,-19);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAcA2IAAhKIABgPIgGAMIgvBIIgDADIgEACIgMAAIAAhrIAQAAIgBBZIAGgMIAvhIIADgDIAEgCIAMAAIAABrg");
	this.shape_35.setTransform(39.9,-17.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAeA2IgFgBIgdgrIgEgEIgGgBIgNAAIAAAxIgPAAIAAhrIAPAAIAAAvIAOAAIADgBIACgCIADgCIAaglIACgEIAFgBIAMAAIggAsQgDAGgFABIAGADIAGAGIAfAvg");
	this.shape_36.setTransform(29.8,-17.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgOAzQgJgEgHgHQgHgIgEgKQgDgKAAgMQAAgLAEgKQADgKAHgIQAIgHAJgEQAKgEAKAAQALAAAKAEQAIADAHAHIgGAIIgCABQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBIgFgDIgIgDQgFgCgHAAQgHAAgGADQgHADgFAFQgFAFgDAIQgCAHAAAKQAAAJACAJQAEAIAEAFQAEAEAIAEQAGADAHAAIAJgBIAGgCQAEAAACgDIAHgFIACAAIACABIAGAHQgGAHgKAFQgJAEgOAAQgKAAgKgEg");
	this.shape_37.setTransform(19.3,-17.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAcA2IAAgxIg3AAIAAAxIgQAAIAAhrIAQAAIAAAwIA3AAIAAgwIAQAAIAABrg");
	this.shape_38.setTransform(8.3,-17.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAcA2IAAguIgPAAIgDAAIgDACIgDACIgZAkIgEAEQgCACgEAAIgMAAIAcgnQAEgHAGgDQgIgCgDgCQgEgBgEgEQgDgDgBgFQgCgFAAgFQAAgGADgHQADgGAEgDQAFgEAHgDQAGgCAJAAIAlAAIAABrgAgCgnIgHAEIgEAFIgBAIIABAIIAEAGIAHADQADACAGAAIAVAAIAAgmIgVAAQgGAAgDACg");
	this.shape_39.setTransform(-3.1,-17.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIAPAAIAAAuIAVAAQAKAAAGACQAHADAFACQAFAFACAFQACAEAAAHQAAAHgDAHQgCAGgFAEQgEADgIAEQgGACgJAAgAgVApIAVAAIAKgBIAGgEQADgBACgFIAAgHIAAgIQgCgEgDgCIgGgDQgFgCgFAAIgVAAg");
	this.shape_40.setTransform(-11.5,-17.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgtA2QgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAgKIAFAAIAGgBQADgBACgDQADgEACgGQADgGACgLIADgZIACglIBAAAIAABqIgPAAIAAheIgiAAIgHA9QgCAKgEAHQgEAIgDADQgEADgEACQgFABgFAAg");
	this.shape_41.setTransform(-22.7,-17.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAnA2IgEgBIgCgDIgJgZIgvAAIgJAZIgCADIgEABIgMAAIArhrIAPAAIArBrgAgTAOIAnAAIgQgqIgCgEIgCgGg");
	this.shape_42.setTransform(-32.8,-17.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgHA2IAAheIgiAAIAAgNIBTAAIAAANIgiAAIAABeg");
	this.shape_43.setTransform(-41.3,-17.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAcA2IAAhKIABgPIgGAMIgyBLIgEACIgMAAIAAhrIAQAAIgBBZIAGgMIAvhIIADgDQABgBAAAAQAAAAABAAQAAgBABAAQABAAAAAAIAMAAIAABrg");
	this.shape_44.setTransform(-51.5,-17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text2, new cjs.Rectangle(-55.8,-25.7,111.7,108.8), null);


(lib.text1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAcA2IAAgxIg3AAIAAAxIgQAAIAAhrIAQAAIAAAwIA3AAIAAgwIAQAAIAABrg");
	this.shape.setTransform(25.9,37.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAcA2IABhZIgDAHIgzBNIgCADQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgLAAIAAhrIAQAAIAABRIgBAIIAFgMIAxhIIACgDQABgBAAAAQABAAAAAAQABgBAAAAQABAAABAAIALAAIAABrg");
	this.shape_1.setTransform(14.5,37.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhCA2IAAhrIAPAAIAABfIAsAAIAAhfIAPAAIAABfIAsAAIAAhfIAQAAIAABrg");
	this.shape_2.setTransform(0.6,37.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAnA2IgEgBIgBgDIgKgZIgvAAIgKAZIgCADIgDABIgMAAIArhrIAPAAIArBrgAAAggIgSAuIAlAAIgTg0g");
	this.shape_3.setTransform(-12.5,37.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AArA2IAAhQIAAgEIgkBBIgCADIgEABIgBAAQgEAAgBgEIglhBIAAAEIAABQIgNAAIAAhrIALAAIADABIACACIAlBAIACAIIAEgIIAkhAIACgCIADgBIALAAIAABrg");
	this.shape_4.setTransform(-24.6,37.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAgA2IgDgBIgBgCIgcgsIAAADIgcApIgCACIgDABIgOAAIAlg2Igjg1IAPAAIADABIABABIAbArIABgCIAAgCIAagmQAAgBABAAQAAgBABAAQAAAAABgBQAAAAAAAAIAQAAIgkA0IAkA3g");
	this.shape_5.setTransform(53.1,18.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAnA2IAAhrIAPAAIAABrgAg1A2IAAhrIAPAAIAAAuIAVAAQAIAAAJADQAGABAFAEQAFAEABAFQADAGAAAGQAAAGgDAHQgDAGgEAEQgHAFgEACQgGACgKAAgAgmAqIAVAAQAGAAAEgCQAFgCACgCIADgFIABgIIgBgIIgDgGIgHgDIgKgBIgVAAg");
	this.shape_6.setTransform(41.4,18.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAcA2IAAgxIg3AAIAAAxIgQAAIAAhrIAQAAIAAAwIA3AAIAAgwIAQAAIAABrg");
	this.shape_7.setTransform(28.9,18.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIAQAAIAAAuIAUAAQAIAAAIADQAHABAFAEQAEADADAGQACAEAAAIQAAAIgDAFQgCAFgFAFQgGAFgGACQgGACgJAAgAgUAqIAUAAQAFAAAEgCQAGgCABgCQADgCABgDIACgIIgCgIQAAgCgEgEIgHgDIgdgBg");
	this.shape_8.setTransform(19.1,18.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgtA1QAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgKIAFAAIAGAAQADgCADgEQADgEACgFIAEgSIADgYIADgmIA/AAIAABrIgPAAIAAheIgiAAIgDAkQgBAOgDALQgCAJgEAIQgDAGgEAFQgEAEgEABIgJACg");
	this.shape_9.setTransform(7.9,18.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAcA2IAAhRIABgIIgDAHIgzBNIgCADIgEACIgMAAIAAhrIAQAAIgBBZIAFgMIAwhIIADgDQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAMAAIAABrg");
	this.shape_10.setTransform(-2.6,18.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhDA2IAAhrIAQAAIAABfIAsAAIAAhfIAPAAIAABfIAsAAIAAhfIAPAAIAABrg");
	this.shape_11.setTransform(-16.4,18.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgZA1QAAAAgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBIAAgKIAGAAIADAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABAAIADgDIADgFIAFgKIgrhMIAOAAIAEACIACACIAZAvIAEAKIAag5IACgCIADgCIANAAIgsBdQgBAEgCAEIgFAEIgGACIgHACg");
	this.shape_12.setTransform(-29.2,18.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgOAzQgKgFgGgHQgIgHgCgKQgEgLAAgLQAAgKAEgMQAEgKAHgHQAHgIAJgDQALgEAKAAQAMAAAIADQAJAFAGAFIgFAIIgBABIgCAAIgDgBIgFgDIgIgDQgFgCgGAAQgIAAgGADQgHADgFAGQgFAEgDAIQgCAJAAAIQAAAKADAIQACAHAFAFQAGAHAGACQAGADAHAAIAJgBIAHgCIAGgDIAFgEIABgBIACAAIACABIAGAGQgGAIgKAFQgJAEgOAAQgKAAgKgEg");
	this.shape_13.setTransform(-38.8,18.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAcA2IABhZIgFAMIgwBIIgDADIgEACIgMAAIAAhrIAQAAIgBBZIAGgMIAvhIIADgDIAEgCIAMAAIAABrg");
	this.shape_14.setTransform(-53.5,18.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAgA2IgCgBIgCgCIgcgsIAAABIgeAtIgCABIgPAAIAlg2Igjg1IAPAAIADABIABABIAbArIAAgCIABgCIAagmQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAOAAIgjA0IAlA3g");
	this.shape_15.setTransform(46.8,-0.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAnA2IAAhrIAPAAIAABrgAg1A2IAAhrIAPAAIAAAuIAUAAQAJAAAJADQAGABAEAEQAFADACAGQADAGAAAGQAAAHgDAGQgCAFgFAFQgHAFgEACQgHACgKAAgAgmAqIAUAAQAHAAAEgCQAFgCACgCQACgCABgDIABgIIgBgIIgDgGIgHgDIgfgBg");
	this.shape_16.setTransform(35.1,-0.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAdA2IAAgxIg4AAIAAAxIgQAAIAAhrIAQAAIAAAwIA4AAIAAgwIAPAAIAABrg");
	this.shape_17.setTransform(22.6,-0.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIAQAAIAAAuIAUAAQAIAAAIADQAIABAEAEQAFAEACAFQACAEAAAIQAAAGgDAHQgCAGgFAEQgGAFgGACQgGACgJAAgAgUAqIAUAAQAFAAAEgCQAFgBACgDIAFgFIABgIIgBgIIgFgGIgHgDIgJgBIgUAAg");
	this.shape_18.setTransform(12.8,-0.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgtA1QgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIAAgJIAFAAIAGgBQADgCACgEQADgCACgHQADgHACgLQACgIABgRIACglIBAAAIAABrIgPAAIAAheIgiAAIgHA9QgCAJgEAIQgEAIgDADQgEAEgEABQgFABgFAAg");
	this.shape_19.setTransform(1.6,-0.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAnA2IgEgBIgBgDIgKgZIgvAAIgKAZIgCADIgDABIgMAAIArhrIAPAAIArBrgAgTAOIAmAAIgSguIgBgGg");
	this.shape_20.setTransform(-8.5,-0.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgjA2IAAhrIAgAAQAIAAAJADQAIACAEAFQAGAEACAGQACAFAAAJQAAAHgCAHQgEAGgEAEQgEADgJAEQgIACgIAAIgRAAIAAAogAgUACIARAAQAFAAAFgCIAIgDQADgDABgEQACgEAAgFQAAgFgCgEQgBgEgDgDQgDgDgFgBIgKgBIgRAAg");
	this.shape_21.setTransform(-16.9,-0.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAdA2IAAhRIABgIIgEAHIgyBNIgEADQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgMAAIAAhrIAPAAIAABZIACgHIAEgFIAvhIIAEgDQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAMAAIAABrg");
	this.shape_22.setTransform(-27.6,-0.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgHA2IAAheIgiAAIAAgNIBTAAIAAANIgiAAIAABeg");
	this.shape_23.setTransform(-37.8,-0.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgOAzQgKgFgGgHQgIgIgCgJQgEgLAAgLQAAgLAEgLQAEgKAHgHQAHgIAJgDQALgEAKAAQAMAAAIADQAJAEAGAGIgFAIIgBABIgCAAIgDgBIgFgDIgIgDQgFgBgGgBQgIABgGACQgHADgFAFQgEAFgEAJQgCAIAAAIQAAAKADAIQACAHAFAFQAGAGAGADQAGACAHAAIAJAAIAHgCIAGgCIAFgFIABgBIACAAIACABIAGAGQgGAJgKADQgJAFgOAAQgKAAgKgEg");
	this.shape_24.setTransform(-47.1,-0.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAcA2IAAguIgSAAIgEACIgCACIgDAEIgWAhIgEADIgGACIgLAAIAbgnQAEgHAHgDQgFAAgHgDIgHgGIgGgIQgBgEAAgGQAAgGACgGQADgFAFgFIAMgGQAIgDAHAAIAkAAIAABrgAgCgnQgEABgDADQgDACgBAEIgBAHIABAIIADAGQAFADACAAQAEACAGAAIAVAAIAAglIgVAAQgGAAgDABg");
	this.shape_25.setTransform(19.3,-19.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAcA2IABhZIgCAHIg0BNIgCADQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgLAAIAAhrIAQAAIAABRIgBAIIAFgMIAzhLIAEgCIAMAAIAABrg");
	this.shape_26.setTransform(9.2,-19.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgjA2IAAhrIAgAAQAIAAAJADQAIACAEAFQAGAEACAGQACAFAAAJQAAAJgCAFQgCAFgGAFQgEADgJAEQgIACgIAAIgRAAIAAAogAgUACIARAAQAFAAAFgCIAIgDQADgDABgEQACgEAAgFIgCgJQgBgEgDgDQgDgDgFgBIgKgBIgRAAg");
	this.shape_27.setTransform(-0.6,-19.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AggA2IAAhrIBBAAIAAANIgyAAIAAAjIAoAAIAAALIgoAAIAAAjIAyAAIAAANg");
	this.shape_28.setTransform(-9.6,-19.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgOAzQgKgFgGgHQgGgHgEgKQgEgLAAgLQAAgLAEgLQAEgKAHgHQAHgIAJgDQALgEAKAAQAMAAAIAEQAIADAIAGIgGAIIgBABIgCAAIgDgBIgFgDIgIgDQgEgBgHgBQgIABgGACQgHADgFAFQgEAFgEAJQgCAIAAAIQAAAKADAIQACAGAFAGQAGAGAGADQAGACAHAAIAJAAIAHgCIAGgCIAFgFIABgBIACAAIACABIAGAHQgGAIgKADQgJAFgOAAQgKAAgKgEg");
	this.shape_29.setTransform(-19.1,-19.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAcA2IAAguIgSAAIgDACIgHAGIgVAhQgCACgCABQgCACgEAAIgMAAIAcgnQAFgHAFgDQgFAAgGgDIgIgGIgEgIQgCgEAAgGQAAgGADgGQADgGAEgEQAFgEAHgCQAIgDAHAAIAlAAIAABrgAgCgnQgDABgEADIgEAGIgBAHIABAIQABAEADACQAEADADAAQADACAGAAIAVAAIAAglIgVAAQgGAAgDABg");
	this.shape_30.setTransform(20.9,-38.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAnA2QgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAAAIgCgDIgKgZIgvAAIgKAZIgBADIgEABIgMAAIArhrIAPAAIArBrgAgTAOIAnAAIgRgpIgDgLg");
	this.shape_31.setTransform(11.5,-38.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AglA2IAAhrIAjAAQAHAAAJACQAIADAEADQAFAEACAFQACAEAAAIIgBAHIgEAHQgDADgDACQgEADgFACQAMABAFAGQAGAGAAAKQAAAIgCAFQgCAFgGAEQgEAEgIADQgGACgKAAgAgWAqIAWAAQAGAAAFgCIAHgEQACgBACgFQABgDAAgEQAAgIgGgFQgFgFgMAAIgWAAgAgWgFIAcgBIAIgEQADgCABgDQABgDAAgFQAAgJgFgEQgFgEgLAAIgUAAg");
	this.shape_32.setTransform(2,-38.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgUAzQgMgFgFgHQgJgIgCgJQgFgLAAgLQAAgKAFgLQADgKAIgIQAGgHALgEQAKgEAKAAQALAAALAEQAKAEAGAHQAIAIAEAKQADALAAAKQAAALgDALQgEAJgIAIQgFAHgLAFQgLAEgLAAQgKAAgKgEgAgPgmQgGADgGAFQgEAGgDAIQgCAIgBAIQABAJACAJQADAHAEAFQAGAFAGAEQAHACAIAAQAJAAAHgCQAGgEAFgFQAFgFADgHQACgJAAgJQAAgIgCgIQgDgIgFgGQgFgFgGgDQgIgCgIgBQgHABgIACg");
	this.shape_33.setTransform(-9.1,-38.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAdA2IAAgxIg5AAIAAAxIgPAAIAAhrIAPAAIAAAwIA5AAIAAgwIAPAAIAABrg");
	this.shape_34.setTransform(-20.9,-38.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text1, new cjs.Rectangle(-57.9,-44,115.8,86.6), null);


(lib.pic5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._4();
	this.instance.parent = this;
	this.instance.setTransform(-118,-114.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic5, new cjs.Rectangle(-118,-114.5,236,229), null);


(lib.pic2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._3();
	this.instance.parent = this;
	this.instance.setTransform(-120,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic2, new cjs.Rectangle(-120,-65,159,221), null);


(lib.pic1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(-54,-62,0.72,0.72);

	this.instance_1 = new lib._1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-54,-191,0.6,0.6);

	this.instance_2 = new lib._1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-54,69,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic1, new cjs.Rectangle(-54,-191,108,379.4), null);


(lib.legal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AKCCrIgGgCIgCgFIgDgEIADgCIACAAQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAEAFIADACIAEABIAFgBIADgCIABgDIACgDIgBgEIgCgDIgEgBIgHgBIAAgFIAGgBIAEgBIACgDIAAgEIAAgDIgCgDIgDgCIgDAAIgEAAIgCACIgCACIgCADIgBACIgCAAIgDgBIACgFIADgFIAFgDIAGgBIAGABIAFACIADAFIABAFIgBAFIgBADIgDACIgEABQAGACACADQACAEAAAEQAAADgCADIgDAFQgDACgDAAIgGABgAJZCsIgDgBIgEgCIgDgCIACgDIACgBIACABIAFADIAEAAIAEgBIAEgDIACgDIABgFIAAgEIgCgDIgEgCIgFgBIgIABIgEgBIAEgXIAYAAIAAACIgBADIgDABIgQAAIgCANIAIgBQADAAAEABQACAAACADQADADABACIABAGIgBAHIgFAGQgBACgFABIgGABgAIHCrQgDgBgDgEQgCgEgBgEQgCgFABgGQgBgHACgFQABgDACgFIAGgEQAEgCAEAAIAHACQADABACADQADADACAFQABAFAAAHQAAAGgBAFQgCAGgDACQgCADgDACIgHABQgEAAgEgBgAIKCAIgEADIgCAGIAAAUIACAFIAEAEIAFABIAEgBIAEgEIACgFIABgKIgBgKQAAgDgCgDQgBgBAAAAQgBgBAAAAQgBAAAAgBQAAAAgBAAIgEgBIgFABgAG2CrQgDgBgDgEQgDgDgBgFQgBgFAAgGQAAgHABgFQABgEADgEQAEgDACgBQAEgCAEAAQADAAAEACQACABADADQAEAEABAEIABAMIgBALQgBAFgEADQgCAEgDABQgEABgDAAQgEAAgEgBgAG5CAQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAABQgDADAAADIgBAKIABAKIADAFIADAEIAFABIADgBIAFgEIACgFIABgKIgBgKQAAgDgCgDIgFgDIgDgBIgFABgAGOCrIgFgDIgDgGIgCgHIACgHIAEgIIANgQIACgCIABAAIAHAAIgPATIgCABIgBABIAEgBIAFgBIAFABQACABADACIADAFQABADAAADQAAADgBADIgDAGIgGADQgDABgEAAgAGRCTIgDACIgDADIgBAFIABADIACAEIAEACIAEABIAEgBIADgCIADgEIABgDIgBgFIgDgDIgCgCIgFgBgADCCrQgDgCgCgDQgCgCgCgGQgCgFABgGQgBgHACgFQACgFACgDQADgDACgBIAIgCIAHACIAGAEQACADACAFQABAFAAAHQAAAGgBAFQgCAGgCACQgCAEgEABIgHABIgIgBgADFCAQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAABQgCADAAADIgBAKIABAKIACAFIADAEIAFABIAEgBIAEgEQABgBABgEIABgKIgBgKQgBgFgBgBQgBgBAAAAQgBgBAAAAQgBAAAAgBQAAAAgBAAIgEgBIgFABgAgwCqIgIgEQgDgGgBgDQgDgGAAgEQAAgEADgHQABgEADgEQAEgCAEgDQAGgCAEAAQAEAAAGACQAGADACACQAEAEACAEQACAFAAAGQAAAGgCAEQgCADgEAGQgDADgFABQgDACgHAAQgFAAgFgCgAgtCBQgCABgDADIgEAGQgBAEAAAEQAAAEABAEQABADADADIAFAEIAHABIAIgBIAGgEIADgGIABgIIgBgIIgDgGQgDgDgDgBIgIgCQgDAAgEACgAhvCsIgDgBIgEgCIgCgCIACgDIABgBIADABIAEADIAFAAIAEgBIADgDIADgDIABgFIgBgEIgCgDIgEgCIgEgBIgIABIgFgBIAFgXIAXAAIAAACIgBADIgCABIgQAAIgCANIAHgBQAEAAADABQACAAADADQADADAAACIABAGIgBAHIgEAGQgCACgEABIgHABgAjACrQgEgBgCgEQgCgCgBgGQgCgFAAgGQAAgHACgFQABgFACgDIAGgEQADgCAEAAQAEAAAEACQACABADADQADADABAFQABAFABAHQgBAGgBAFQgBAGgDACQgCADgDACQgEABgEAAQgEAAgDgBgAi9CAIgEADIgCAGIAAAUIACAFIAEAEIAEABIAEgBIAEgEIADgFIAAgKIAAgKQgBgDgCgDQAAgBgBAAQAAgBgBAAQAAAAgBgBQAAAAgBAAIgEgBIgEABgAk6CsIgDgBIgDgCIgDgCIACgDIACgBIABABIAGADIADAAIAFgBIAEgDIABgDIABgFIAAgEIgCgDIgDgCIgGgBIgIABIgDgBIADgXIAZAAIAAACIgBADIgEABIgPAAIgCANIAHgBQAEAAADABQADAAACADQACADABACIABA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IQgBADgCACQAAACgEACQgDABgEABIgGgBIgDgEIAAAQgApcA6IgDADIAAASQAAAAAAABQABAAAAAAQABABAAAAQABAAAAAAIAFABQAEABADgEQACgEABgGIgBgGIgCgEIgDgCIgDgBIgGACgABZBfIAAAAIAAgBIABgCIACgBIABgCIAAgCIgCAAIgBgBQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAgBAAAAIgBgCIACgDIADAAIACAAIABABIABADIAAAEIgCADIgBAEIgEADgADhBXQgCgBgCgDQgDgBgBgDQgCgCAAgEQAAgEADgEQACgDAFgBQgEgBgBgEQgCgCAAgEIABgGIADgEIAFgDIAFgBIAHABIAEADIAEAEIABAGQAAAEgCACQgCAEgEABQAFABACADQADADgBAFIgBAGQgBAEgCAAQgCADgEABIgHABgADlBAIgEACIgCADIgBAEIABAEIACACIAEACIADABIAFgBIADgCIACgCIABgEIgBgEIgCgDIgDgCIgFgBgADlAqIgDACIgCACIAAAEIAAADQAAABABAAQAAAAAAABQAAAAAAAAQABAAAAAAIADADIADABIAFgBIACgDIACgCIAAgDIAAgEIgCgCIgCgCIgFAAgAC5BXIgCgBIgBgBIAAgEIABgCIACAAIADAAIABAAIACACIAAACIAAACQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAgBAAIgBABIgCABgAixBWQgDgBgCgDQgDgDAAgCQgCgDAAgFQAAgEACgDIACgGIAGgEIAHgBIAGABIAGADIgCADIgBABIgBAAIgBAAIgBgBIgCgCIgEAAIgEABIgDADIgDADIAAAGIAAAFQABADACACQAAAAABABQAAAAAAABQABAAAAAAQAAAAABAAIAEABIAEAAIACgCIADgBIACAAIACADIgEADIgDABIgHACQgDgBgDgBgAllBWQgDAAgDgEIgDgFIgBgIIABgIIADgFQADgCADgCIAHgBIAHABIAGAEIADAFIABAIIgBAIIgDAFQgDAEgDAAQgDABgEABQgEgBgDgBgAlmA8QgCAEgBAFQABAGACAEQAEAEAEgBQAFABACgEQADgDAAgHQAAgGgDgDQgCgEgFAAQgFAAgDAEgAnsBXIgEgBIgCgBIgDgDIACgDIABAAIABAAIAFADIADAAIADAAIADgCQAAAAABAAQAAAAAAAAQAAgBAAAAQABAAAAAAIAAgDQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgCgBgEgBIgFAAIAAgEIAFAAQADAAADgCQAAAAAAAAQABAAAAgBQAAAAAAgBQABAAAAgBIgBgCIgBgBIgDgCIgDAAIgDAAIgDACIgCAAIgBABIAAAAIgBgBIgBgDIAEgDIAHgBIAGABIAEABIADADIAAAEIAAACIgBACIgCADIgCABQACABACACQACACABAEIgCAEIgDAEIgEACIgGABgAoPBWQgDAAgDgEIgDgFIgBgIIABgIIADgFIAGgEIAGgBIAGABQADABACACQACACABADQACADgBAEIAAACIgBABIgYAAIABAFIADAEIADACIAFABIADgBIAHgCIABAAIACADIgDADIgEABIgHACQgEgBgDgBgAoPA7QgCACgCAEIATAAIAAgEIgCgCIgCgDIgFgBQgEAAgCAEgAo3BWQgCAAgDgEIgEgFIgBgIIABgIIAEgFIAFgEIAHgBIAHABQAEACABACIAEAFIABAIIgBAIIgEAFQgCAEgDAAQgDABgEABQgEgBgDgBgAo4A8QgCADAAAGQAAAHACADQADAEAFgBQAFABADgEQACgDAAgHQAAgFgCgEQgCgEgGAAQgGAAgCAEgABKBXIAAgaIgCABIgQAYIgBABIgCAAIgDAAIAAgjIAGAAIAAAaIABgCIABgCIAQgVIABgBIABAAIAEAAIAAAjgAgSBXIAAgCIAAgCIARgRIAGgHIABgFIABgDIgBgFIgBgCIgDgBIgDgBIgDABIgDABIgCACIgBADIgCACIgBAAIgEAAIACgHIADgEQADgCADgBIAFgBIAGABIAEADQADABABADQABADAAADIgBAFIgCAFIgEAEIgQARIAHgBIAPAAIABABQAAAAAAABQABAAAAAAQAAAAAAAAQAAABAAAAIAAAEgAgyBXIAAgYIAAgBIAAgBIAAAAIgBABIgBACIgQAWIgBABIgCAAIgDAAIAAgjIAHAAIAAAXIgBACIAAABIACgEIAQgVIABgBIABAAIAEAAIAAAjgAhbBXIAAgaIAAAAIgBABIgBACIgQAWIgBABIgBAAIgEAAIAAgjIAHAAIAAAZIgBABIACgEIAQgVIABgBIACAAIAEAAIAAAjgAh9BXIgDAAIgBgCIgHgLIgCgCIgDgBIgEAAIAAAQIgHAAIAAgjIAHAAIAAAPIAEAAIACgBIACgCIAHgLIABgBIACAAIAGAAIgLAPIgDACIAEABIACACIAJAPgAjJBXIAAgRIgRAAIAAARIgHAAIAAgjIAHAAIAAANIARAAIAAgNIAHAAIAAAjgAjwBXIAAgaIgCABIgQAYIgCABIgBAAIgDAAIAAgjIAGAAIAAAZIAAABIABgCIABgCIACgCIAOgTIABgBIABAAIAEAAIAAAjgAmUBXIAAgzIAPAAQAFABAEABQADABACACQADACAAADQACADAAAEQAAADgCADIgDAFQgCACgEABQgDABgFABIgIAAIAAASgAmNA+IANAAIAEgCIACgEIAAgDIAAgFIgCgDIgEgCIgNAAgAp4BXIAAgsIgZAAIAAAsIgHAAIAAgzIAnAAIAAAzgAAXBFIAAgGIASAAIAAAGgAA9AuIgDgCIgCgCIgBgEIAAgBIABgBIAEAAIABAGIACABIACAAIADAAIABgBIABgCIAAgEIAEAAIABABIABABIgBAEIgCACIgEACIgEAAgAg/AuIgDgCIgCgCIgBgEIABgBIABgBIADAAIAAAEIABACIACABIADAAIACAAIABgBIABgGIAFAAIABABIAAABIgBAEIgCACIgDACIgEAAgAj9ATIAAgMIgoAAIAAAKIAAABIgDABIgDAAIAAgSIAFAAIACgBIABgCIACgGIAEgUIAAgPIAfAAIAAAsIAIAAIAAAQIgBABIgCABgAkZgLIgCAIIgDAEIAYAAIAAgmIgQAAgAJ+APIAAAAIABgBIABgBIABgCIACgEIAAAAIgCAAIgCgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBgBAAAAIAAgCIABgCIAEAAIABAAIACAAIABAEIgBADIgBADIgCAEIgDACgAEuAPIAAAAIABgCIABgCIABgCIABgCIgBAAIgBAAIgBgBIgBgEIABgCIADAAIACAAIABAAIABABIAAAGIgBADIgDAEIgDACgAJgAHIgDgCQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAAAgBgBIAAgDIABgEIAEgEIAHgCIAKgBIAAgDQAAgEgCgCIgFgCIgEABIgGADIgBAAIgBgBIgCgCQADgEAEgBIAIgBIAFABIAEACQACACAAADIABAFIAAAWIgDAAIgBAAIgBgBIgBgEIgDADIgDABIgCABIgEABgAJjgGIgCACIgBADIAAABIACABIABABIADABIADgBIACgBIACgBIADgBIAAgHgAH7AGIgFgEIgDgEQgBgDAAgFQAAgEABgDIADgGIAGgEIAHgBIAGABIAGADIgCADIgBABIgBAAIgBAAIgCgBIgCgBIgDgBIgFABIgDADIgCADIgBAGIABAGIACAEIADABIAFABIADAAIAEgCIACAAIABAAIACACIgDADIgEABIgDABIgEABQgDgBgDgBgAHUAGQgCAAgDgEIgEgEIgBgIIABgIIAEgFIAFgEIAHgBIAHABIAGAEIADAFIABAIIgBAIIgDAEQgDAEgDAAQgDABgEABQgEgBgDgBgAHTgTQgDADAAAGQAAAGADAEQADACAFAAQAFAAADgCQACgDAAgHQAAgGgCgDQgDgEgFAAQgGAAgCAEgAFrAHIgBgBIgCgDIACgDIABAAIADAAIACAAIABABIAAACIAAACQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgCABIgBABgACVAHIgEgBIgGgEIACgCIACAAIABAAIAFABIAEABIAFgBIADgBIADgEIABgFIgBgEIgCgDIgEgCIgEAAIgIAAIgEAAIAEgZIAYAAIAAAEIgBACIgDABIgQAAIgBAMIAHgBQADAAADACQADAAADADIACAFIABAGQAAAEgBADQgBADgDABIgGAFIgHABgAgDAHIgBgBIgBgBIAAgEIABgBIABAAIADAAIABAAIABABIABACIgBACIgBABIgBABIgBABgAgyAHIgCgBIgBgDIABgDIACAAIADAAIABAAIABABIABACIgBACQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAIgBABIgBABgAh4AHIgCgBIgBgBIAAgEIABgBIACAAIADAAIABAAIACABIAAACIAAACQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAgBAAIgBABIgCABgAicAGQgEgCgEgEQgDgDgBgEQgDgEAAgGQAAgHADgEQABgEADgEQADgDAFgCIAKgCQAFAAAEACQAFACADACIgCAEIgBAAIgBAAIgCAAIgCgCIgDgBIgGgBIgHACIgFAEQgDACgBADQgBAFAAAEQAAAEABAEQABADADADIAFADQAEABADAAIAEAAIAGgBIACgCIABAAIABAAIABAAIACACQgCADgFADQgEABgHABQgFgBgEgBgAoWAGQgFgCgEgEQgDgCgCgFQgCgEAAgGQAAgHACgEQADgFACgDQACgCAHgDQAFgCAEAAQAFAAAFACQAHADABACQAEAEACAEQACAGAAAFQAAAEgCAGQgCAEgEADQgDAEgFACQgEABgGABQgFgBgEgBgAoUgjQgDAAgCAEIgEAFIgBAJIABAIIAEAGIAFADIAHABIAIgBIAFgDQADgDABgDQABgEAAgEQAAgEgBgFIgEgFQgDgEgCAAQgDgBgFgBgApPAGQgDgBgEgFQgDgCgDgFQgBgFgBgFQABgGABgFQADgFADgDQACgDAFgCQAGgCAFAAQADAAAHACQAFACADADIAEAIQACAFAAAGQAAAFgCAFIgEAHIgIAGQgEABgGABQgHgBgEgBgApMgjQgCAAgEAEIgDAFIgBAJIABAIIADAGIAGADIAIABIAHgBIAFgDIAEgGQABgEAAgEQAAgEgBgFIgEgFQgDgEgCAAQgEgBgDgBQgFABgDABgAqHAGQgDgBgFgFIgFgHQgCgFABgFQgBgGACgFIAFgIQADgDAFgCQAGgCAEAAQAEAAAHACQAFACACADQACADADAFQACAFAAAGQAAAFgCAFQgCAFgDACQgDAFgEABQgFABgGABQgGgBgEgBgAqEgjQgDAAgDAEIgDAFQgBAFAAAEQAAAEABAEQAAADADADIAGADIAHABIAHgBIAGgDIADgGIABgIIgBgJIgDgFQgDgEgDAAQgDgBgEgBQgEABgDABgAI6AHIAAgjIANAAIAGABIADACIACADIACADIgBACIgBACIgCADIgDACQADgBACADQADADAAADIgBADIgDAEIgEACIgGAAgAJAACIAHAAQAEAAACgCQAAAAABAAQAAAAAAAAQAAgBAAAAQAAgBABAAIAAgDIgCgCIgCgBIgEAAIgHAAgAJAgMIAJAAIADgCIABgCIABgCIgBgCIgBgBIgCgBIgEgBIgGAAgAIwAHIgEAAIgBgCIgHgKIgCgCIgCgBIgEAAIAAAPIgHAAIAAgjIAHAAIAAAQIADAAIACgBIACgCIAHgLIACgBIACgBIAFAAIgJAOIgCACIgCACIADAAIACADIAJAOgAG8AHIAAgmIgRAf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DgBIgEABIgCABIgDACIgCAAIgBAAIAAgBIgBgDQACgCAEgCQADgBAEAAIAGABIAEACIADAFIAAAFIAAAXIgFAAIgBgFIgGAFIgDABgAoCiGIgEABIgDADIgBACIAAACIACACIACAAIACABIAGgBIACgCIABgBIAAgIgAjdh3IAAgfIgOAAIAAgEIAiAAIAAAEIgOAAIAAAfgAj3h3IAAgZIAAgBIgBABIAAABIgBABIgQAWIgBABIgBAAIgFAAIAAgjIAHAAIAAAbIABgDIABgBIARgXIABAAIAFAAIAAAjgAk7h3IAAgyIAQAAIAIABIAGADIADADIABAGIAAADIgCADIgDAEIgEABQAFACADACQADADAAAEIgBAHQgBADgCABQgCACgEABIgIABgAk0h9IALAAIAFgBIADgBIACgDIABgEQAAgDgDgCQgCgDgGAAIgLAAgAk0iTIAJAAIAFAAIADgCIACgDIABgDQAAgFgDgCQgBgBgHAAIgJAAgAnUh3IAAgRIgQAAIAAARIgGAAIAAgjIAGAAIAAANIAQAAIAAgNIAHAAIAAAjgApRh3IAAgyIAfAAIAAAGIgYAAIAAAsgAp5iVIAAgIIAAgBIgCACIgGADIgBgDIAHgEIABgBIgCAAIgGgDIABgEIAGAEIACABIAAAAIAAgJIACAAIAAAJIAAAAIACgBIAGgEIABAEIgFADIgCAAIgBAAIADABIAGAEIgCADIgGgDIgCgDIAAADIAAAHg");
	this.shape.setTransform(66.5,17.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal, new cjs.Rectangle(0,0,133,34.5), null);


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
(lib._160x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgMaguyIY1AAMAAABdlI41AAg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(418));

	// legal
	this.instance = new lib.legal();
	this.instance.parent = this;
	this.instance.setTransform(123.2,570.8,1.1,1.1,0,0,0,105.1,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAmAgIAAgxIAFAAIAAAFIAEgFIAGgBQAFAAADADQAEACACAEQACAFAAAEQAAAGgCADQgCAFgEADQgEABgEAAIgGgBQgCgBgCgCIAAASgAAtgJQgCADAAAGQAAAIACACQADADAEABQAEgBAEgEQADgCAAgHQAAgHgDgCQgEgEgDAAQgEAAgEAEgAAAAQQgCgDAAgEIABgGIACgDIAFgBIAEgBQAIgBAEgBIAAgCQAAgDgCgCQgDgCgEAAQgFAAgBACQgCACgBADIgGgBQABgEABgCIAGgEIAIgBIAHABQADABACACQAAAAAAABQABAAAAABQAAAAAAABQABABAAABIAAAFIAAAHIAAALIACAEIgHAAIgBgEIgGADIgIABQgFAAgDgCgAAMACIgGABIgCADIgBADQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAQACACADAAQAEAAADgCIAEgDIABgHIAAgCIgKACgAhZAPQgFgDgDgFQgCgHAAgHQAAgHACgFQAEgHAEgCQAGgDAHAAQAHAAAFADQAGAFABAGIgGABQgCgGgDgCQgDgCgFAAQgGABgEACQgEACgCAFIgBAJQAAAHACADQACAGADACQAEACAFAAQAGAAAEgEQADgCACgGIAGABQgCAIgFAEQgFAEgIAAQgIAAgFgDgABSASIAAgeIgLAAIAAgFIAdAAIAAAFIgLAAIAAAegAgQASIAAgcIgLAcIgFAAIgKgdIAAAdIgGAAIAAgjIAJAAIAKAbIAKgbIAJAAIAAAjg");
	this.shape_1.setTransform(75.3,559.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.shape_1}]},328).wait(90));

	// pic5
	this.instance_1 = new lib.pic5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(80.3,274.6,0.66,0.66,0,0,0,0.1,0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(328).to({_off:false},0).to({y:261.5,alpha:1},7,cjs.Ease.get(1)).wait(75).to({y:274.7,alpha:0},7,cjs.Ease.get(1)).wait(1));

	// pic3
	this.instance_2 = new lib.pic1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(90.1,282.6,0.66,0.66,0,0,0,0.1,0);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(164).to({_off:false},0).to({x:80.1,alpha:1},7,cjs.Ease.get(1)).wait(157).to({x:70.1,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(82));

	// pic2
	this.instance_3 = new lib.pic2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(126.9,247.1,1,1,0,0,0,0.1,0.1);
	this.instance_3.alpha = 0.289;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(82).to({_off:false},0).to({regX:0.2,x:121.3,alpha:1},7,cjs.Ease.get(1)).wait(75).to({regX:0.1,x:107.1,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(246));

	// pic1
	this.instance_4 = new lib.pic1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(90.1,282.6,0.66,0.66,0,0,0,0.1,0);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:80.1,alpha:1},7,cjs.Ease.get(1)).wait(75).to({x:70.1,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(328));

	// text5
	this.instance_5 = new lib.text5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(80.4,306.6,1.04,1.04,0,0,0,0.1,0.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(331).to({_off:false},0).to({x:80,y:286.6,alpha:1},7,cjs.Ease.get(1)).wait(72).to({x:79.6,y:306.6,alpha:0},7,cjs.Ease.get(1)).wait(1));

	// text4
	this.instance_6 = new lib.text4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(80,451.7,0.832,0.832,0,0,0,0.1,0.2);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(246).to({_off:false},0).to({regY:0.1,scaleX:1.04,scaleY:1.04,y:463.8,alpha:1},7,cjs.Ease.get(1)).wait(75).to({regY:0.2,scaleX:0.83,scaleY:0.83,y:461.7,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(82));

	// text3
	this.instance_7 = new lib.text3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(80,453.2,0.832,0.832,0,0,0,0.1,0.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(164).to({_off:false},0).to({regY:0,scaleX:1.04,scaleY:1.04,y:453.6,alpha:1},7,cjs.Ease.get(1)).wait(75).to({regY:0.1,scaleX:0.83,scaleY:0.83,y:453.2,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(164));

	// text2
	this.instance_8 = new lib.text2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(80,453,0.832,0.832,0,0,0,0.1,0.2);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(82).to({_off:false},0).to({regY:0.1,scaleX:1.04,scaleY:1.04,y:453.3,alpha:1},7,cjs.Ease.get(1)).wait(75).to({regY:0.2,scaleX:0.83,scaleY:0.83,y:453,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(246));

	// text1
	this.instance_9 = new lib.text1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(80,474.2,0.832,0.832,0,0,0,0.1,0.1);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:1.04,scaleY:1.04,y:474.9,alpha:1},7,cjs.Ease.get(1)).wait(75).to({scaleX:0.83,scaleY:0.83,y:474.2,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(328));

	// bg
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3B454C").s().p("AC+BDQgIgKAEgWIAEgaQAFgWAKgJQALgJARAAIAHAAQANAAAGAEQAHAEADAIIALg7IAPAAIgaCVIgPAAIADgQQgHAJgIAEIgJADIgNACQgWAAgIgKgADpgRQgMAAgFAFQgGAFgDAUIgEASQgDAUAEAGQAEAFAPAAIAKgBQAKgBAGgFQAKgIACgQIADgSQAEgPgIgIQgGgHgRAAgAguBFQgHgHADgTQACgMADgFQACgHAGgEQAEgDAJgBQAHgCANAAIABAAQAPAAAFADQAHACADAFIAEgSQACgMgFgDQgEgFgUAAIgIABQgJABgCACQgGADgBAIIgQAAIABgCQADgNAJgGQAIgFANgBIAJAAIAaABQAIACAEADQADACABAHQACAFgDAMIgMBKIgPAAIABgLQgEAGgJADQgDACgIABIgKABQgYAAgIgIgAgaAaQgGAEgBALQgCAMAEAEQAFAEARAAIAFAAQAKAAAHgDQAHgDADgHIABgLQACgIgHgDQgHgEgQAAQgQAAgGAEgAj4BNQgeAAgKgLQgKgLAFgdIAJgyQAFgdAOgLQAOgMAeAAIATAAQAbAAAMAKQAMAJgEAUIgBAGIgRAAIAAgBQADgPgHgHQgHgGgWAAIgNAAQgQAAgHACQgGABgGAEQgGAGgCAEIgGAXIgHAqQgCANAAAJQABAGADAEQAEAEAHABQAGACAQAAIAMAAIAVgBIALgFQAEgDAEgHQADgIACgMIACgJIgqAAIACgQIA7AAIgEAaQgFAcgOAMQgOALgeAAgACIBLIAMhCQADgQgEgFQgEgFgOAAQgPAAgLAHQgJAIgDAPIgLA+IgPAAIAShpIAPAAIgCAOQAGgIAJgDQAHgEAPAAQAVAAAHAIQAHAJgEATIgMBGgAiTBLIAThpIAPAAIgDAOQAGgHAHgFQAHgDAMAAQASAAAFAIQAFAJgDATIAAABIgQAAIAAgDQACgLgCgFQgEgEgLAAQgMAAgIAHQgHAIgEAPIgKA+g");
	this.shape_2.setTransform(62.1,102.3,1.1,1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3B454C").s().p("ACCBTQgCgCAAgEIABgFQgGAEgKAFQgNAFgPAAQgKAAgFgCIgDgCQgEgDgCgEQgDgDAAgFQAAgOAMgOIABgBQANgNAUgGQAEgDAFAAQANgDAKAAIALAAQAGAAACgEQAEgDAAgGQAAgGgFgDQgFgEgKAAQgNAAgNAFQgIADgDADIgGABQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAgFAJgGIAMgHQAPgGAWAAQAQAAAHAFQAGAEABADQADAFAAAFQAAAKgLAWIgRAkQgCAFAAAHQAAACgHAGQgHAFgEAAQgCAAgDgEgABxAcIgCABQgIADgHAFQgNAJAAAMQAAAGAEADQADAEAIAAQAGAAAJgDIABAAQAIgDAHgGQAGgEAEgGQAEgFAAgFQAAgHgEgCQgFgDgHAAIgOABgAhSBTQgCgCAAgDQAAgMATgnIAQgeIAGgMIAEgHIAFgDQAKgEAFAAQAFAAAAAFQAAADgEAIIgKASQgZAygCANIgDAGIgEACQgMAJgEAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAgAgEBPIgDgBQgHgGAAgKQAAgKAKgTIABgFIAQgfIABgDQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBAAgBAAIAAAAIgPABIgDAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgCADgCIAEgEIABgCIAGgFIAPAAQAEAAACgCIACgEIARgdIADgCQAIgEAHAAQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABIABAEIgCAGIgKAVQgBABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAACAGAAIASgBQAGAAAAADIgEAEIgHAGIgBABQgIADgFAAIgJAAIgFABIgEAEQgJAOgMAZQgHAOAAAHQAAAFADADQADADAHAAQAMAAAQgKIAFgDQAAAAABAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAADgKAJQgUAQgTAAQgJAAgEgEgAizBKQgDgLAAgWIAFhpIABgDIAGgDQALgGAFAAIAEABQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABIgBASQgEAxAAAcIAAAUQABAFACAAQACAAAFgHIBShyIAEgCIADgBQAMgEAGAAQAEAAAAAEIgFAHQgOAPgGAJIhKBkQgFAHgKAJQgNAKgJAAQgHAAgDgJgAggg2QAAgDAEgIQAFgJAEgDQACgDAGgDIAHgCIADgBQABAAAAAAQAAABAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAABQgBAHgCAEIgEAIIgDACIgLAGQgGADgEAAQgEAAAAgEg");
	this.shape_3.setTransform(75.4,122.1,1.1,1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3B454C").s().p("Ah7CYQgkgTAAgmQABg8AvgzQAtgwA+gTIARgDQALAAAAAHQAAAFgGABIgBgBQgJAAgIACQgyAOglAtQgkAtAAA0QAAAbAWAQQAUAPAfAEQBBAIA1ggQA8gkAAg/QAAgmgWgVQgVgUglgBQgaABgTAKQgSAJgQAVQgLAOgHgHQgFgGAIgLQARgWAigMQAggLAfAAQAoABAYAUQAbAWAAAnQgDBDhCAuQg/AshPAAQgqAAgdgQgAAThmQABgHAEAAQALgJAKgRIARgbQADgFACAAIAFADQADACADAIQACAHgEAHQgGALgNAMQgLALgMAGQgEACgDAAQgCAAgGgEg");
	this.shape_4.setTransform(112.7,102.4,1.1,1.1);

	this.instance_10 = new lib.ClipGroup_20();
	this.instance_10.parent = this;
	this.instance_10.setTransform(79,55.3,1.3,1.3,0,0,0,53.1,10.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#E6F4FC","#E3F3FB","#D9EEFA","#C7E6F7","#B0DCF3","#A3D6F1","#90CEEB","#8BCCEA","#31AED8"],[0,0.192,0.349,0.49,0.627,0.686,0.82,0.843,1],8.6,-168.6,-3.5,70.5).s().p("AyzfRMAAAg+hMAlnAAAMAAAA+hg");
	this.shape_5.setTransform(80,300,0.664,1.499);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.instance_10},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(418));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(79.5,299.5,161,601);
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