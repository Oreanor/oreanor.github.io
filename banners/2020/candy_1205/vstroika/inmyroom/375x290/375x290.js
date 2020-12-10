(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"375x290_atlas_", frames: [[0,648,375,160],[0,486,375,160],[0,324,375,160],[0,0,375,160],[0,162,375,160]]}
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
	this.spriteSheet = ss["375x290_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["375x290_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["375x290_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["375x290_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
	this.spriteSheet = ss["375x290_atlas_"];
	this.gotoAndStop(4);
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


(lib.ClipGroup_46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj6CGIAAkLIH1AAIAAELg");
	mask.setTransform(25.1,19.7);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99DCF3").s().p("AgZAOIARgcIAhAAIgRAdgAgKAGIAOABIAHgNIgOAAg");
	this.shape.setTransform(30.8,8.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99DCF3").s().p("AgZgNIAhgBIABAAIAQAdIghAAgAgKgFIAHAMIAOAAIgHgNg");
	this.shape_1.setTransform(30.8,13.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#99DCF3").s().p("AgRAAIARgcIARAcIgRAdgAgHAAIAHANIAIgNIgIgMg");
	this.shape_2.setTransform(26.8,15.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#99DCF3").s().p("AgYAPIAQgdIAhABIgQAcgAgLAHIAPAAIAIgMIgPgBg");
	this.shape_3.setTransform(22.9,13.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#99DCF3").s().p("AgYgOIAhAAIAQAcIghABgAgLgGIAIANIAPgBIgIgMg");
	this.shape_4.setTransform(22.9,8.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#99DCF3").s().p("AgRAAIARgcIARAcIgRAdgAgHAAIAHANIAIgNIgIgMg");
	this.shape_5.setTransform(26.8,6.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#99DCF3").s().p("AgKAGQgDgEACgEQAAgFAGgDQACgCADAAQAIAAADAHQACAEgBAEQgBAGgFACQgCACgEAAQgGAAgEgHgAgBgDQgBAAAAABQAAAAgBAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAAAAAIACAAIACgDIAAgCQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAg");
	this.shape_6.setTransform(26.8,10.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#99DCF3").s().p("AgiAtIASgfIgNgsIAIgCIAAABIAKAjIALgSIgHgcIAHgCIAFAUIAPgYIAHAEIgOAYIATgFIACAIIgcAHIgKASIAkgJIADAHIgBAAIgrAMIgSAfg");
	this.shape_7.setTransform(30.7,4.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#99DCF3").s().p("AgSAEIgkAAIAAgHIAkAAIAgghIAGAGIgaAbIAUAAIAVgVIAGAGIgPAPIAdAAIAAAHIgdAAIAPAPIgGAGIgVgVIgUAAIAaAbIgGAGg");
	this.shape_8.setTransform(33.8,10.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#99DCF3").s().p("AATAxIgOgYIgFAUIgHgCIAHgcIgLgSIgKAkIgIgCIANgsIgSgfIAHgEIAAAAIASAfIAsAMIgDAHIgkgJIAKASIAcAHIgCAIIAAAAIgTgFIAOAYIgHAEg");
	this.shape_9.setTransform(30.7,16.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#99DCF3").s().p("AgaAtIABAAIANgYIgUAFIgCgIIAcgHIAKgSIgkAJIgCgHIAsgMIASgfIAHAEIgBAAIgRAfIAMAsIgIACIgKgkIgLASIAHAcIgHACIgEgUIgPAYg");
	this.shape_10.setTransform(23,16.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#99DCF3").s().p("AgTAfIAagbIgVAAIgUAVIgGgGIAPgPIgcAAIAAgHIAcAAIgPgPIAGgGIAUAVIAVAAIgagbIAGgGIAgAhIAkAAIAAAHIgkAAIggAhg");
	this.shape_11.setTransform(19.9,10.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#99DCF3").s().p("AAKASIgsgMIACgHIABABIAjAIIgKgSIgcgHIACgIIAUAFIgOgYIAHgEIAPAYIAEgUIAHACIgHAcIALASIAKgkIAIACIAAABIgMArIASAfIgHAEg");
	this.shape_12.setTransform(23,4.9);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_46, new cjs.Rectangle(14.5,6.3,24.8,15.6), null);


(lib.ClipGroup_3_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjZCXIAAktIGyAAIAAEtg");
	mask.setTransform(21.8,29.7);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99DCF3").s().p("AA3BHIhIgnIgtAbIgDABQgFAAgBgEQgEgGAGgEIAtgaIAEhUQABgHAGAAQADAAACADIACAFIgEBKIAWgMIACgxQAAgHAHAAQAHAAAAAHIgCAoIAlgWIAEgBQAEAAACAEQABACAAADQgBADgDABIglAWIAiASQADABABADQABADgCADQgBAEgFAAIgDgBIgqgXIgWAOIBAAiQAGADgDAHQgCAEgEAAg");
	this.shape.setTransform(33.3,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99DCF3").s().p("AgGBQIAAgtIggAWIgEABQgEAAgCgDQgEgHAGgDIAogbIAAgaIg9AoIgEABQgDAAgDgDQgDgGAFgEIBFgtIAAg1QAAgIAGAAQAHAAAAAIIAAA1IBFAtQAGAEgEAGQgCADgEAAIgEgBIg9goIAAAaIAoAbQAGADgEAHQgCADgEAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIghgWIAAAtQAAAHgHAAQgGAAAAgHg");
	this.shape_1.setTransform(22.3,35.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#99DCF3").s().p("Ag/BEQgEgGAHgEIBAgiIgWgOIgqAXIgDABQgEAAgDgEQgBgEABgCQABgDADgBIAigSIglgWQgDgBgBgDQAAgDABgCQACgEAEAAIAEABIAlAWIgCgoQAAgHAHAAQACgBADADQACACAAADIACAxIAWAMIgEhKQAAgIAHAAQAHAAAAAHIAEBUIAtAaQAGAEgEAGQgCAEgEAAIgDgBIgtgbIhIAnIgDABQgFAAgBgEg");
	this.shape_2.setTransform(11.3,14);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#99DCF3").s().p("ABpC7QgHAAAAgHIgEhUIgSgLIACAoQAAADgCACQgCACgDAAQgHAAAAgGIgDgyIgTgLIADBLQABAHgHABIgBAAQgGAAgBgHIgEhVIgKgGQgHAHgKAAQgJAAgHgHIgKAGIgEBVQgBAHgGAAIAAAAQgIgBABgHIAEhLIgUALIgCAyQAAAGgHAAIgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQgCgCAAgDIACgoIgSALIgEBUQgBAHgGAAIgBAAQgDAAgCgCQgCgCABgDIADhMIgTAMIgDAxQAAAHgHAAIAAAAQgHgBAAgHIACgnIgfATIgEABQgEAAgCgEQgBgDAAgDQABgDADgBIAfgTIgigSQgBAAAAgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBgCABgEQACgEAEAAIADABIArAWIATgLIhBgjQgGgDADgGQADgEAEAAIADABIBJAmIASgLIgjgSQgFgDACgHQADgDAEAAIADAAIAqAXIAUgMIhBgiQgGgDADgHQACgEAEAAIADABIBJAmIAKgGIAAgGQAAgIAFgHQAFgGAHgDIAAgLIhFguQgFgEADgGQADgDADAAIAEABIA9ApIAAgYIgogaQgGgEAEgGQACgEAEAAIAEABIAgAWIAAgVIhFguQgFgFADgFQACgEAEAAIAEABIA9ApIAAgXIgogbQgGgDAEgHQACgDAEAAIAEABIAgAWIAAgmQAAgHAGAAQAHAAAAAHIAAAmIAhgWIADgBQAEAAACADQAEAHgGADIgoAbIAAAXIA9gpIAEgBQAEAAACAEQAEAFgGAFIhFAuIAAAVIAhgWIADgBQAEAAACAEQAEAFgGAFIgoAaIAAAYIA9gpIAEgBQAEAAACADQAEAGgGAEIhFAuIAAALQAIADAFAGQAFAHAAAIIgBAGIAKAGIBJgmIADgBQAEAAADAEQACAGgFAEIhBAiIATAMIArgXIADAAQAEAAACADQADAHgGADIgiASIASALIBJgmIADgBQAEAAACAEQABACgBADQgBADgCABIhBAjIAUALIAqgWIADgBQAFAAABAEQACACgBAEQgBADgDABIgiASIAgATQACABABADQABADgCADQgBAEgFAAIgDgBIgggTIACAnQAAAHgHABQgHAAAAgHIgCgxIgUgMIAEBMQAAADgCACQgCACgDAAg");
	this.shape_3.setTransform(22.3,18.7);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_5, new cjs.Rectangle(3.6,14.6,37.4,29.2), null);


(lib.ClipGroup_2_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmECKIAAkTIMJAAIAAETg");
	mask.setTransform(38.9,28.9);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99DCF3").s().p("AgIAbIABgNIgLAHIgEgGIAQgKIAAgBIgBAAIgRAIIgDgGIAAAAIAMgGIgMgFIADgGIARAIIABAAIAAgBIgQgLIAEgFIALAHIgBgNIAHgBIABATIAAAAIABAAIABgTIAHABIgBANIALgHIAEAFIgQALIAAABIABAAIARgIIADAGIgMAFIAMAGIgDAGIgRgIIgBAAIAAABIAQALIgEAFIgLgHIABANIgHAAIgBgSIgBgBIAAABIgBATg");
	this.shape.setTransform(14.2,23.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99DCF3").s().p("AgDAtIAAgIIgjgjIAGgFIAdAcIAAgOIgcgbIAGgFIAWAVIAAgOIgTgSIAGgGIANAMIAAgSIAHAAIAAASIANgMIAGAGIgTASIAAAOIAWgVIAGAFIgcAbIAAAOIAdgcIAGAFIgjAjIAAAIg");
	this.shape_1.setTransform(14.2,16.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#99DCF3").s().p("AgSAcIAAAAIAmgLIgMgHIgkAKIgCgIIAdgIIgMgGIgZAGIgDgHIASgFIgQgJIAEgHIAQAJIgFgRIAIgCIAHAZIALAHIgHgeIAHgCIABABIAKAkIAMAHIgLgnIAIgCIANAuIAHAFIgFAHIgGgEIgvANg");
	this.shape_2.setTransform(7.5,19.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#99DCF3").s().p("AgXAhIAEgRIgQAJIgDgHIAPgJIgRgEIACgHIAAAAIAZAFIAMgGIgdgIIACgIIAkAKIANgHIgngLIACgIIAAAAIAvAOIAGgFIAFAHIgHAFIgNAvIgIgDIAKgnIgLAHIgKAlIgHgCIAHgeIgMAHIgHAZg");
	this.shape_3.setTransform(7.5,27.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#99DCF3").s().p("AgDAtIAAgSIgNAMIgGgFIATgTIAAgOIgWAVIgGgFIAcgbIAAgOIgdAcIgGgEIAjgjIAAgIIAHAAIAAAIIAjAjIgGAEIgdgcIAAAOIAcAbIgGAFIgWgVIAAAOIATATIgGAFIgNgMIAAASg");
	this.shape_4.setTransform(14.2,31.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#99DCF3").s().p("AARAjIgHgZIgLgHIAHAdIgHADIgBAAIgKglIgLgHIAKAnIgIACIAAgBIgNguIgHgDIAFgIIAAABIAHADIAugMIACAIIgmAKIAMAHIAkgKIACAHIAAABIgdAHIAMAHIAZgGIADAHIgSAFIAQAJIgEAHIgBAAIgPgJIAFARIgIADg");
	this.shape_5.setTransform(20.9,27.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#99DCF3").s().p("AgeAXIgGAEIgFgHIAHgEIANgvIAIACIAAAAIgLAnIAMgHIAKgkIAHABIAAABIgHAdIAMgHIAHgZIAHACIAAAAIgEARIAQgJIADAIIgPAJIARAEIgCAHIgZgGIgMAGIAdAIIgCAJIgkgLIgNAHIAnALIgCAIg");
	this.shape_6.setTransform(20.9,19.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#99DCF3").s().p("AgPARQgHgHAAgKQAAgIAHgHQAHgHAIAAQAKAAAGAHQAHAHAAAIQAAAJgHAIQgGAGgKAAQgIAAgHgGg");
	this.shape_7.setTransform(51.6,20);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#99DCF3").s().p("AgHDAIAAgmIgcATIgEAAQgFAAgCgDQgBgCAAgDQABgDACgDIAlgXIAAgWIg3AkQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAQgFAAgCgEQgEgGAGgFIBAgqIAAgqQgUgEgNgQIgmAWIgEBLQAAAIgHAAIgBAAQgDAAgCgCQgCgCAAgEIADhCIgSAKIgCAtQgBAHgHAAIgBAAQgDAAgCgDQgCgDAAgCIACgiIghATIgEABQgFAAgCgEQgBgDAAgDQABgDADgBIAhgTIgegQQgDgBgBgEQgBgDABgCQADgFAEAAIAEABIAnAUIASgLIg6geQgDgBgBgEQgBgDABgCQACgFAFAAIAEABIBDAjIAmgVQgEgLAAgJQAAgIAEgKIgmgWIhDAjIgEAAQgFAAgCgDQgBgDABgEQAAgCAEgCIA6geIgSgLIgnAUIgEABQgEAAgDgEQgDgHAHgDIAegQIghgTQgDgCgBgDQAAgDABgDQACgDAFgBIAEABIAhATIgCghQAAgDACgDQACgCADgBIABAAQAHAAABAIIACArIASALIgDhCQAAgDACgCQACgDADAAQAIAAAAAHIAEBNIAmAVQANgQAUgDIAAgsIhAgpQgDgCAAgDQAAgEABgCQACgDAFAAIAEABIA3AkIAAgVIglgYQgCgCgBgDQgBgDACgDQACgEAFAAIAEACIAcASIAAgmQAAgIAHAAQAIAAAAAIIAAAmIAcgSIAFgCQAEAAACAEQAFAGgHAFIglAYIAAAVIA3gkIAFgBQAEAAACADQACADgBADQAAAEgDABIhAApIAAAsQAVADAMAQIAmgVIAEhNQABgHAHAAQADAAACADQACACAAADIgDBCIASgLIADgrQAAgEACgBQADgDADAAQADABACACQACACAAAEIgBAhIAhgTIADgBQAFABACADQACADgBADQgBADgDACIghATIAfAQQAGADgDAHQgCAEgFAAIgEgBIgngUIgSALIA7AeQACABACADQABAEgCADQgCADgFAAIgDAAIhEgjIgmAWQAEAIAAAKQAAALgEAJIAmAVIBEgjIADgBQAFAAACAFQACACgBADQgCAFgCAAIg7AeIASALIAngUIAEgBQAFAAACAFQABACgBADQgBAEgCABIgfAQIAhATQADABABADQABADgCADQgCAEgFAAIgDgBIghgTIABAiQAAADgCACQgCADgDAAIgBAAQgDAAgCgCQgCgCAAgDIgDgtIgSgKIADBCQAAAEgCACQgCACgDAAQgHAAgBgIIgEhLIgmgWQgNAQgUAEIAAAqIBAAqQAHAEgFAHQgCAEgEAAIgFgCIg3gkIAAAWIAlAXQACACABAEQABACgCADQgCADgEAAIgFAAIgcgTIAAAmQAAAIgIAAQgHAAAAgIgAgZgZQgLAKAAAPQAAAPALAMQALAKAOABQAQgBAKgKQALgMAAgPQAAgPgLgKQgKgLgQAAQgOAAgLALg");
	this.shape_8.setTransform(51.6,20);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_5, new cjs.Rectangle(3.3,15.1,65.7,25), null);


(lib.ClipGroup_1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiWBcIAAi3IEtAAIAAC3g");
	mask.setTransform(15.1,20.9);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99DCF3").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape.setTransform(14.8,14.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99DCF3").s().p("AgFCMIAAgcIgVANIgCABQgDABgDgDIAAgFIACgDIAbgSIAAgPIgoAaIgDABQgDAAgCgDQgDgEAFgEIAugdIAAggQgOgCgKgMIgbAQIgDA3QgBAGgFgBQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIACgxIgNAIIgCAgQAAAGgGgBQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIACgZIgYAOIgDABQgDgBgCgDIAAgDIACgEIAYgOIgWgLQgEgDABgEQACgEAEAAIACABIAdAOIANgIIgqgVQgBgBAAAAQgBAAAAAAQgBgBAAAAQAAgBAAgBIAAgEQABgDAEAAIACABIAyAZIAbgQQgCgGAAgIQAAgFACgIIgbgQIgyAaIgCAAQgEAAgBgDIAAgEQAAgBAAgBQAAAAABAAQAAgBABAAQAAAAABAAIAqgXIgNgIIgdAQIgCAAQgEAAgCgDQgBgGAEgCIAWgLIgYgOIgCgDIAAgFQACgCADAAIADABIAYANIgCgYQAAgBABgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAIAAAAQAGAAAAAFIACAgIANAHIgCgvQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAAgBABAAQAFABABAFIADA4IAbAPQAKgLAOgDIAAggIgugeQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAAgFQACgCADAAIADABIAoAaIAAgQIgbgRQgEgDACgFQADgDADAAIACABIAVAOIAAgbQAAgHAFAAQAGAAAAAHIAAAbIAVgOIACgBQADAAACADQADAFgEADIgbARIAAAQIAogaIADgBQADAAACACIABAFQgBAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAIguAeIAAAgQAPADAJALIAbgPIADg4QABgFAFgBQABAAAAABQABAAAAAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAAAQABABAAABIgDAvIANgHIACggQAAgFAGAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQABABAAABIgCAYIAYgNIADgBQADAAACACQAAABAAAAQABABAAAAQAAABAAAAQAAABgBABIgCADIgYAOIAWALQAEACgBAGQgCADgEAAIgCAAIgdgQIgOAIIArAXQABAAAAAAQABAAAAABQABAAAAAAQAAABAAABIAAAEQgCADgDAAIgDAAIgxgaIgbAQQACAHAAAGQAAAIgCAGIAbAQIAxgZIADgBQADAAACADIAAAEQAAABAAABQAAAAgBABQAAAAAAAAQgBAAgBABIgrAVIAOAIIAdgOIACgBQAEAAACAEQABAEgEADIgWALIAYAOIACAEQABAAAAABQAAAAAAAAQAAABgBAAQAAABAAAAQgCADgDABIgDgBIgYgOIACAZQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIAAAAQgGABAAgGIgCggIgNgIIADAxQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQgBABAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAQgFABgBgGIgDg3IgbgQQgJAMgPACIAAAgIAuAdQAFAEgDAEQgCADgDAAIgDgBIgogaIAAAPIAbASIACADQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQgCADgDgBIgCgBIgVgNIAAAcQAAAGgGgBQgFABAAgGgAgSgSQgIAIAAAKQAAAMAIAHQAIAIAKAAQALAAAIgIQAIgHAAgMQAAgKgIgIQgIgIgLAAQgKAAgIAIg");
	this.shape_1.setTransform(14.8,14.6);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_5, new cjs.Rectangle(2.2,11.7,25.3,17.5), null);


(lib.t5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("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");
	this.shape.setTransform(68.8,14.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t5, new cjs.Rectangle(0.2,-7.1,137.2,43.9), null);


(lib.t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("AAXAzIAAhHIgtBHIgSAAIAAhlIASAAIAABGIAthGIASAAIAABlg");
	this.shape.setTransform(135.7,22.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A7E0").s().p("AAOAzIgegtIAAAtIgTAAIAAhlIATAAIAAAsIAegsIAWAAIgkAyIAkAzg");
	this.shape_1.setTransform(126.7,22.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00A7E0").s().p("AgIAzIAAhTIgTAAIAAgSIA3AAIAAASIgSAAIAABTg");
	this.shape_2.setTransform(119.2,22.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00A7E0").s().p("AgkAjQgNgQAAgTQAAgTANgPQAPgSAYAAQAQAAAMAIQANAIAGAPIgVAAQgKgNgQAAQgOAAgKALQgJAKAAANQAAAPAKAKQAKAKANAAQAQAAAJgMIAWAAQgOAeghAAQgYAAgPgSg");
	this.shape_3.setTransform(111,22.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00A7E0").s().p("AAXAzIAAhHIgtBHIgTAAIAAhlIATAAIAABGIAthGIASAAIAABlg");
	this.shape_4.setTransform(100.5,22.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00A7E0").s().p("AARAzIAAgnIgRAAQgRAAgHgGQgKgHAAgRIAAggIATAAIAAAeQAAAIADAEQAEADAIAAIARAAIAAgtIASAAIAABlg");
	this.shape_5.setTransform(90.9,22.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00A7E0").s().p("AglAmQgQgPAAgXQAAgVAQgPQAQgQAVAAQAXAAAPAQQAQAPAAAVQAAAXgQAPQgPAPgXAAQgWAAgPgPgAgYgYQgKAKAAAOQAAAPAKAKQAKAKAOAAQAPAAAKgKQAKgKAAgPQAAgOgKgKQgKgJgPgBQgOABgKAJg");
	this.shape_6.setTransform(81,22.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00A7E0").s().p("AAWA/IAAhHIgsBHIgTAAIAAhkIATAAIAABGIAshGIATAAIAABkgAgPgwQgIgGAAgJIAPAAQABAIAHAAQAJAAAAgIIAQAAQgCAJgGAGQgHAFgKAAQgJAAgGgFg");
	this.shape_7.setTransform(67,21.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00A7E0").s().p("AglAmQgQgPAAgXQAAgVAQgPQAPgQAWAAQAXAAAPAQQAQAPAAAVQAAAXgQAPQgPAPgXAAQgWAAgPgPgAgYgYQgKAKAAAOQAAAPAKAKQAKAKAOAAQAPAAAKgKQAKgKAAgPQAAgOgKgKQgKgJgPgBQgOABgKAJg");
	this.shape_8.setTransform(56.1,22.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00A7E0").s().p("AASAzIAAgrIgkAAIAAArIgTAAIAAhlIATAAIAAApIAkAAIAAgpIATAAIAABlg");
	this.shape_9.setTransform(45.6,22.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00A7E0").s().p("AAWA/IAAhHIgsBHIgTAAIAAhkIATAAIAABGIAshGIAUAAIAABkgAgQgwQgHgGgBgJIAQAAQAAAIAIAAQAHAAACgIIAQAAQgBAJgHAGQgHAFgKAAQgJAAgHgFg");
	this.shape_10.setTransform(35.9,21.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00A7E0").s().p("AglAmQgQgPAAgXQAAgVAQgPQAQgQAVAAQAWAAAQAQQAQAPAAAVQAAAXgQAPQgPAPgXAAQgVAAgQgPgAgYgYQgKAKAAAOQAAAPAKAKQAKAKAOAAQAPAAAKgKQAKgKAAgPQAAgOgKgKQgKgJgPgBQgOABgKAJg");
	this.shape_11.setTransform(25,22.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00A7E0").s().p("AggAzIAAhlIAYAAQAjAAAAAbQAAANgLAGQARAFAAATQAAAfgoAAgAgNAhIAMAAQAPAAAAgOQAAgNgPABIgMAAgAgNgLIAJAAQAMAAAAgKQAAgLgMAAIgJAAg");
	this.shape_12.setTransform(15.4,22.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00A7E0").s().p("AAkA8IAAgTIhIAAIAAATIgTAAIAAglIAKAAIAmhSIAPAAIAmBSIAJAAIAAAlgAgYAXIAxAAIgZg4g");
	this.shape_13.setTransform(5.6,23.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00A7E0").s().p("AAdAzIgKgaIglAAIgLAaIgUAAIArhlIAOAAIAqBlgAgLAGIAXAAIgMgcg");
	this.shape_14.setTransform(99,5.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00A7E0").s().p("AAjAzIAAhLIgbBLIgPAAIgbhLIAABLIgTAAIAAhlIAZAAIAcBNIAdhNIAZAAIAABlg");
	this.shape_15.setTransform(87.6,5.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00A7E0").s().p("AgaAzIAAhlIA1AAIAAASIgiAAIAAAYIAhAAIAAARIghAAIAAAYIAiAAIAAASg");
	this.shape_16.setTransform(77.7,5.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00A7E0").s().p("AgIAzIAAhTIgTAAIAAgSIA3AAIAAASIgTAAIAABTg");
	this.shape_17.setTransform(71.2,5.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00A7E0").s().p("AgkAjQgNgQAAgTQAAgTANgPQAPgSAYAAQAQAAAMAIQANAIAGAPIgVAAQgKgNgQAAQgOAAgKALQgJAKAAANQAAAOAKALQAKAKANAAQAQAAAJgMIAWAAQgOAeghAAQgYAAgPgSg");
	this.shape_18.setTransform(63,5.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00A7E0").s().p("AAWAzIAAhHIgsBHIgSAAIAAhlIASAAIAABHIAshHIATAAIAABlg");
	this.shape_19.setTransform(52.5,5.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00A7E0").s().p("AgkAjQgNgQAAgTQAAgTANgPQAPgSAYAAQAQAAAMAIQANAIAGAPIgVAAQgKgNgQAAQgOAAgJALQgLAKAAANQAAAOALALQAKAKANAAQAQAAAJgMIAVAAQgNAegiAAQgXAAgPgSg");
	this.shape_20.setTransform(42.1,5.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4, new cjs.Rectangle(0,0,139.9,29.3), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("AAjAzIAAhMIgbBMIgPAAIgbhMIAABMIgTAAIAAhlIAZAAIAcBNIAdhNIAZAAIAABlg");
	this.shape.setTransform(118.2,23);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A7E0").s().p("AglAmQgQgQAAgWQAAgVAQgQQAQgPAVAAQAXAAAPAPQAQAQAAAVQAAAWgQAQQgPAPgXAAQgWAAgPgPgAgYgYQgKAKAAAOQAAAOAKALQAKAKAOAAQAPAAAKgLQAKgKAAgOQAAgOgKgKQgKgKgPAAQgOAAgKAKg");
	this.shape_1.setTransform(106,23);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00A7E0").s().p("AgfAzIAAhlIAcAAQAjAAAAAgQAAAMgHAHQgJALgTAAIgKAAIAAAngAgNgFIAMAAQAPAAAAgNQAAgOgPAAIgMAAg");
	this.shape_2.setTransform(96.7,23);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00A7E0").s().p("AAdAzIgLgaIgkAAIgLAaIgUAAIArhlIANAAIArBlgAgLAGIAXAAIgMgdg");
	this.shape_3.setTransform(87.5,23);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00A7E0").s().p("AASAzIAAhTIgkAAIAABTIgTAAIAAhlIBLAAIAABlg");
	this.shape_4.setTransform(77.7,23);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00A7E0").s().p("AgkAjQgNgPAAgUQAAgTANgPQAPgSAYAAQAQAAAMAIQANAIAGAPIgVAAQgKgNgQAAQgOAAgKALQgJAKAAANQAAAOAKAKQAKALANAAQAQAAAJgMIAWAAQgPAeggAAQgYAAgPgSg");
	this.shape_5.setTransform(64.5,23);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00A7E0").s().p("AAPAzIAAgoIgaAoIgWAAIAcgmQgMgBgIgJQgIgHAAgNQAAgMAHgIQAJgNAWAAIAdAAIAABlgAgOgRQAAAPASABIALAAIAAgfIgLAAQgSAAAAAPg");
	this.shape_6.setTransform(179.6,6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00A7E0").s().p("AAXAzIAAhHIgtBHIgTAAIAAhlIATAAIAABGIAthGIATAAIAABlg");
	this.shape_7.setTransform(170.6,6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00A7E0").s().p("AASAzIAAgrIgkAAIAAArIgTAAIAAhlIATAAIAAApIAkAAIAAgpIAUAAIAABlg");
	this.shape_8.setTransform(160.8,6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00A7E0").s().p("AgaAzIAAhlIA1AAIAAASIgiAAIAAAYIAhAAIAAARIghAAIAAAYIAiAAIAAASg");
	this.shape_9.setTransform(152.6,6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00A7E0").s().p("AAcAzIgchLIgbBLIgVAAIAphlIAPAAIAoBlg");
	this.shape_10.setTransform(144,6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00A7E0").s().p("AggAzIAAhlIAYAAQAjAAAAAbQAAAOgLAFQARAFAAATQAAAfgoAAgAgNAhIAMAAQAPAAAAgOQAAgNgPABIgMAAgAgNgLIAIAAQANAAAAgKQAAgLgNAAIgIAAg");
	this.shape_11.setTransform(135.3,6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00A7E0").s().p("AglAmQgQgPAAgXQAAgVAQgPQAPgQAWAAQAXAAAPAQQAQAPAAAVQAAAXgQAPQgPAPgXAAQgWAAgPgPgAgYgYQgKALAAANQAAAPAKAKQAKAKAOAAQAPAAAKgKQAKgKAAgPQAAgNgKgLQgKgJgPgBQgOABgKAJg");
	this.shape_12.setTransform(125.3,6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00A7E0").s().p("AgIAzIAAhTIgTAAIAAgSIA3AAIAAASIgTAAIAABTg");
	this.shape_13.setTransform(116.9,6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00A7E0").s().p("AglAmQgQgPAAgXQAAgVAQgPQAPgQAWAAQAXAAAPAQQAQAPAAAVQAAAXgQAPQgPAPgXAAQgWAAgPgPgAgYgYQgKALAAANQAAAPAKAKQAKAKAOAAQAPAAAKgKQAKgKAAgPQAAgNgKgLQgKgJgPgBQgOABgKAJg");
	this.shape_14.setTransform(108.6,6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00A7E0").s().p("AgYAzIAAhlIAxAAIAAASIgfAAIAABTg");
	this.shape_15.setTransform(100.3,6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00A7E0").s().p("AAWAzIAAhHIgsBHIgTAAIAAhlIATAAIAABGIAshGIATAAIAABlg");
	this.shape_16.setTransform(91.7,6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00A7E0").s().p("AggAzIAAhlIAdAAQAUAAAJAMQAGAIABAMQgBAMgGAHQgKALgTAAIgKAAIAAAngAgNgFIAMAAQAPAAAAgNQAAgOgPAAIgMAAg");
	this.shape_17.setTransform(83.1,6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00A7E0").s().p("AASAzIAAhTIgkAAIAABTIgSAAIAAhlIBJAAIAABlg");
	this.shape_18.setTransform(74.2,6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00A7E0").s().p("AAPAzIAAgoIAAAAIgaAoIgWAAIAcgmQgMgBgIgJQgIgHAAgNQAAgMAHgIQAJgNAWAAIAdAAIAABlgAgOgRQAAAPASABIALAAIAAgfIgLAAQgSAAAAAPg");
	this.shape_19.setTransform(62,6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00A7E0").s().p("AAXAzIAAhHIgsBHIgUAAIAAhlIAUAAIAABGIAshGIATAAIAABlg");
	this.shape_20.setTransform(53,6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00A7E0").s().p("AAYA8IAAgTIhCAAIAAhkIATAAIAABSIAkAAIAAhSIATAAIAABSIALAAIAAAlg");
	this.shape_21.setTransform(43.5,6.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00A7E0").s().p("AAOAzIgfgtIAAAtIgSAAIAAhlIASAAIAAAsIAfgsIAXAAIgmAyIAmAzg");
	this.shape_22.setTransform(34.3,6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00A7E0").s().p("AATAzIAAgrIglAAIAAArIgTAAIAAhlIATAAIAAApIAlAAIAAgpIATAAIAABlg");
	this.shape_23.setTransform(25,6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00A7E0").s().p("AgSAzIALgaIgnhLIAXAAIAaA1IAYg1IAUAAIguBlg");
	this.shape_24.setTransform(15.5,6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00A7E0").s().p("AgJA6IAAgPQgUAAgMgMQgNgNAAgSQAAgTANgMQAMgNAUAAIAAgNIASAAIAAANQAUAAANANQANAMAAATQAAASgNANQgNAMgUAAIAAAPgAAJgZIAAAyQAMAAAIgIQAHgHAAgKQAAgLgHgHQgHgHgLAAIgCAAgAgcgSQgHAHAAALQAAAKAHAHQAHAIAMAAIAAgyIgBAAQgLAAgHAHg");
	this.shape_25.setTransform(5.5,5.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(0,0,183,28.3), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("AATCSIAAgSIhEAAIAAASIgSAAIAAgkIAJAAIAkhOIAPAAIAjBOIAJAAIAAAkgAAJBuIgXg2IgYA2IAvAAgAiUB7QgLgGgHgMQgHgLABgOQgBgOAHgLQAHgMALgGQAMgHAOAAQAPAAALAHQAMAGAGAMQAGALABAOQgBAOgGALQgGAMgMAGQgLAHgPAAQgOAAgMgHgAiLA0QgHAEgFAHQgDAIgBAJQABAJADAHQAFAIAHAEQAHAFAKAAQAJAAAIgFQAHgEAEgIQAFgHAAgJQAAgJgFgIQgEgHgHgEQgIgFgJAAQgKAAgHAFgAENCAIAAhEIgrBEIgSAAIAAhgIASAAIAABDIArhDIASAAIAABggACzCAIgahIIgbBIIgTAAIAlhgIAQAAIAmBggAAvCAIAAhgIA0AAIAAARIgjAAIAAAWIAhAAIAAARIghAAIAAAWIAjAAIAAASgAjLCAIAAhIIgaBIIgPAAIgZhIIAABIIgSAAIAAhgIAYAAIAbBJIAbhJIAYAAIAABggAAYgdIAAgSIg/AAIAAhgIARAAIAABPIAjAAIAAhPIARAAIAABPIAMAAIAAAjgACngzQgLgHgIgLQgGgLAAgOQAAgOAGgMQAIgLAKgHQAMgHAOAAQAPAAALAHQAMAHAGALQAHAMAAAOQAAAOgHALQgGALgMAHQgLAGgPABQgOgBgLgGgACvh7QgGAEgFAIQgEAHAAAJQAAAJAEAIQAFAHAGAFQAIAEAJAAQAKAAAHgEQAIgFAEgHQAEgIABgJQgBgJgEgHQgEgIgIgEQgHgEgKAAQgJAAgIAEgAkrgzQgMgHgHgLQgGgLAAgOQAAgOAGgMQAHgLALgHQAMgHAOAAQAOAAAMAHQALAHAHALQAGAMABAOQgBAOgGALQgHALgLAHQgMAGgOABQgPgBgKgGgAkjh7QgHAEgFAIQgEAHAAAJQAAAJAEAIQAFAHAHAFQAIAEAJAAQAKAAAHgEQAHgFAFgHQAEgIAAgJQAAgJgEgHQgFgIgHgEQgHgEgKAAQgJAAgIAEgAIegvIAAhgIA0AAIAAARIgjAAIAAAXIAhAAIAAARIghAAIAAAWIAjAAIAAARgAH6gvIAAhgIASAAIAABggAGxgvIAAhgIASAAIAAAlIAOAAQAMAAAHAFQAHAEADAHQADAGAAAIQAAAJgEAGQgFAHgHAEQgGADgKAAgAHDhAIAOAAQAHAAADgDQAEgDAAgGQAAgGgEgDQgDgEgHAAIgOAAgAGNgvIAAgoIgjAAIAAAoIgSAAIAAhgIASAAIAAAnIAjAAIAAgnIASAAIAABggAE1gvIAAgoIgkAAIAAAoIgRAAIAAhgIARAAIAAAnIAkAAIAAgnIARAAIAABggABvgvIAAhDIgqBDIgSAAIAAhgIASAAIAABEIAqhEIASAAIAABggAhFgvIgJgZIgkAAIgKAZIgTAAIAohgIAOAAIAoBggAhVhZIgLgcIgLAcIAWAAgAjTgvIAAhgIAXAAIAHAAIAIACQAEABAFADQAEACADAFQADAFAAAHQAAAGgDAEIgEAGIgDADQAHACAFAHQADAGABAIQAAAHgEAHQgCAGgJAFQgIAEgQAAgAjBhAIAMAAIADAAIAFgCQADgBACgCQACgDAAgEIgBgFQgBgDgDgCQgEgDgGAAIgMAAgAjBhqIAIAAQAGAAADgCIAEgEIAAgEQAAgEgDgDQgCgCgCAAIgGgBIgIAAgAljgvIAAgoIgkAAIAAAoIgRAAIAAhgIARAAIAAAnIAkAAIAAgnIARAAIAABggAm7gvIAAgoIgkAAIAAAoIgRAAIAAhgIARAAIAAAnIAkAAIAAgnIARAAIAABggAoUgvIAAhDIgrBDIgSAAIAAhgIASAAIAABEIArhEIASAAIAABgg");
	this.shape.setTransform(59.4,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(0,1.4,118.7,29.2), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("AAbAvIgKgYIghAAIgKAYIgTAAIAnhdIANAAIAnBdgAgKAGIAVAAIgLgbg");
	this.shape.setTransform(124.1,20.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A7E0").s().p("AANAvIgcgpIAAApIgSAAIAAhdIASAAIAAApIAcgpIAVAAIgjAuIAjAvg");
	this.shape_1.setTransform(115.8,20.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00A7E0").s().p("AAVAvIAAhBIgpBBIgRAAIAAhdIARAAIAABBIAphBIARAAIAABdg");
	this.shape_2.setTransform(106.8,20.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00A7E0").s().p("AARAvIAAgnIghAAIAAAnIgSAAIAAhdIASAAIAAAmIAhAAIAAgmIASAAIAABdg");
	this.shape_3.setTransform(97.7,20.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00A7E0").s().p("AAWAvIgWghIgWAhIgUAAIAhgvIghguIAUAAIAWAhIAWghIAVAAIghAuIAhAvg");
	this.shape_4.setTransform(89.1,20.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00A7E0").s().p("AgYAvIAAhdIAxAAIAAARIggAAIAAAVIAfAAIAAAQIgfAAIAAAWIAgAAIAAARg");
	this.shape_5.setTransform(81.5,20.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00A7E0").s().p("AgIAvIAAhMIgRAAIAAgRIAzAAIAAARIgRAAIAABMg");
	this.shape_6.setTransform(75.4,20.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00A7E0").s().p("AAOAvIAAglIAAAAIgYAlIgVAAIAagjQgLgBgHgIQgHgGAAgMQAAgLAGgIQAJgMATAAIAcAAIAABdgAgNgPQAAAOARAAIAKAAIAAgcIgKAAQgRAAAAAOg");
	this.shape_7.setTransform(65.7,20.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00A7E0").s().p("AAbAvIgKgYIgiAAIgJAYIgTAAIAnhdIANAAIAnBdgAgKAGIAUAAIgKgbg");
	this.shape_8.setTransform(57.4,20.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00A7E0").s().p("AARAvIAAgnIghAAIAAAnIgSAAIAAhdIASAAIAAAmIAhAAIAAgmIASAAIAABdg");
	this.shape_9.setTransform(48.3,20.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00A7E0").s().p("AARAvIAAgnIghAAIAAAnIgSAAIAAhdIASAAIAAAmIAhAAIAAgmIASAAIAABdg");
	this.shape_10.setTransform(39.7,20.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00A7E0").s().p("AgiAjQgPgOAAgVQAAgTAPgPQAOgOAUAAQAVAAAPAOQAOAPAAATQAAAVgOAOQgPAOgVAAQgUAAgOgOgAgWgWQgJAJAAANQAAANAJAJQAJAKANAAQAOAAAJgKQAJgIAAgOQAAgNgJgJQgJgJgOAAQgNAAgJAJg");
	this.shape_11.setTransform(30,20.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00A7E0").s().p("AAXAvIgXghIgVAhIgVAAIAhgvIghguIAVAAIAVAhIAXghIAUAAIghAuIAhAvg");
	this.shape_12.setTransform(20.3,20.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00A7E0").s().p("AgSAvIALgYIgkhFIAWAAIAXAxIAXgxIATAAIgsBdg");
	this.shape_13.setTransform(11.5,20.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00A7E0").s().p("AANAvIgcgpIAAApIgSAAIAAhdIASAAIAAApIAcgpIAVAAIgjAuIAjAvg");
	this.shape_14.setTransform(3.4,20.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00A7E0").s().p("AAOAvIAAgkIgYAkIgVAAIAagjQgLgBgHgHQgHgHAAgMQAAgMAGgHQAJgMAUAAIAbAAIAABdgAgMgPQAAAOAQAAIAKAAIAAgcIgKAAQgQAAAAAOg");
	this.shape_15.setTransform(107.2,4.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00A7E0").s().p("AAbAvIgKgYIgiAAIgJAYIgTAAIAnhdIANAAIAnBdgAgKAGIAVAAIgLgbg");
	this.shape_16.setTransform(98.9,4.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00A7E0").s().p("AANAvIgcgpIAAApIgSAAIAAhdIASAAIAAApIAcgpIAVAAIgjAuIAjAvg");
	this.shape_17.setTransform(90.5,4.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00A7E0").s().p("AgiAgQgMgOAAgSQAAgSAMgOQAPgQAWAAQAOAAAMAHQAMAIAGAOIgUAAQgKgMgOAAQgNAAgJAJQgJAKAAAMQAAANAJAJQAJAKANAAQAPAAAIgLIAUAAQgNAcgeAAQgXAAgOgRg");
	this.shape_18.setTransform(81.3,4.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00A7E0").s().p("AARAvIAAgnIghAAIAAAnIgRAAIAAhdIARAAIAAAmIAhAAIAAgmIASAAIAABdg");
	this.shape_19.setTransform(72,4.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00A7E0").s().p("AAOAvIAAgkIgYAkIgVAAIAagjQgLgBgHgHQgHgHAAgMQAAgLAGgIQAJgMATAAIAcAAIAABdgAgNgPQAAAOARAAIAKAAIAAgcIgKAAQgRAAAAAOg");
	this.shape_20.setTransform(63.6,4.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00A7E0").s().p("AgeAvIAAhdIARAAIAAAkIANAAQAQAAAIAJQAHAHAAAMQAAANgIAIQgJAIgOAAgAgNAeIANAAQAOAAAAgMQAAgMgOAAIgNAAg");
	this.shape_21.setTransform(56.6,4.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00A7E0").s().p("AAaAvIgahFIgZBFIgTAAIAlhdIAPAAIAlBdg");
	this.shape_22.setTransform(48,4.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00A7E0").s().p("AAbAvIgKgYIghAAIgKAYIgTAAIAnhdIANAAIAnBdgAgKAGIAVAAIgLgbg");
	this.shape_23.setTransform(38.7,4.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00A7E0").s().p("AgIAvIAAhMIgRAAIAAgRIAzAAIAAARIgRAAIAABMg");
	this.shape_24.setTransform(31.8,4.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00A7E0").s().p("AAVAvIAAhBIgpBBIgSAAIAAhdIASAAIAABBIAphBIASAAIAABdg");
	this.shape_25.setTransform(24.4,4.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(0,0,128.8,25.6), null);


(lib.p5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p5, new cjs.Rectangle(0,0,375,160), null);


(lib.p4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p4, new cjs.Rectangle(0,0,375,160), null);


(lib.p3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p3, new cjs.Rectangle(0,0,375,160), null);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2, new cjs.Rectangle(0,0,375,160), null);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1, new cjs.Rectangle(0,0,375,160), null);


// stage content:
(lib._375x290 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A9N2kMA6bAAAMAAAAtJMg6bAAAg");
	this.shape.setTransform(187.5,145);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(306));

	// t5
	this.instance = new lib.t5();
	this.instance.parent = this;
	this.instance.setTransform(125.7,249.2,1.069,1.069,0,0,0,69.4,14.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(240).to({_off:false},0).to({regX:69.5,regY:14.8,scaleX:1.1,scaleY:1.1,x:125.8,alpha:1},7,cjs.Ease.get(1)).wait(51).to({scaleX:1.19,scaleY:1.19,x:125.9},0).to({regX:69.4,regY:14.7,scaleX:1.07,scaleY:1.07,x:125.7,alpha:0},7,cjs.Ease.get(1)).wait(1));

	// t4
	this.instance_1 = new lib.t4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(125.7,249.2,1.069,1.069,0,0,0,70,14.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(180).to({_off:false},0).to({regY:14.8,scaleX:1.19,scaleY:1.19,x:125.8,alpha:1},7,cjs.Ease.get(1)).wait(51).to({regY:14.7,scaleX:1.07,scaleY:1.07,x:125.7,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(60));

	// t3
	this.instance_2 = new lib.t3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(125.7,249.2,1.069,1.069,0,0,0,91.5,14.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(120).to({_off:false},0).to({regY:14.3,scaleX:1.19,scaleY:1.19,alpha:1},7,cjs.Ease.get(1)).wait(51).to({regY:14.2,scaleX:1.07,scaleY:1.07,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(120));

	// t2
	this.instance_3 = new lib.t2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(125.8,249.2,1.069,1.069,0,0,0,59.6,14.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60).to({_off:false},0).to({regY:14,scaleX:1.19,scaleY:1.19,x:125.7,y:249,alpha:1},7,cjs.Ease.get(1)).wait(51).to({regY:14.1,scaleX:1.07,scaleY:1.07,x:125.8,y:249.2,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(180));

	// t1
	this.instance_4 = new lib.t1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(125.8,249.2,1.069,1.069,0,0,0,64.5,12.8);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:64.4,regY:12.9,scaleX:1.19,scaleY:1.19,x:125.7,y:249.1,alpha:1},7,cjs.Ease.get(1)).wait(51).to({regX:64.5,regY:12.8,scaleX:1.07,scaleY:1.07,x:125.8,y:249.2,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(240));

	// 5.jpg
	this.instance_5 = new lib.p5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(160,127.5,1,1,0,0,0,150,67.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(240).to({_off:false},0).to({x:150,alpha:1},7,cjs.Ease.get(1)).wait(51).to({x:140,alpha:0},7,cjs.Ease.get(1)).wait(1));

	// 4.jpg
	this.instance_6 = new lib.p4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(160,127.5,1,1,0,0,0,150,67.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(180).to({_off:false},0).to({x:150,alpha:1},7,cjs.Ease.get(1)).wait(51).to({x:140,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(60));

	// 3.jpg
	this.instance_7 = new lib.p3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(160,127.5,1,1,0,0,0,150,67.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(120).to({_off:false},0).to({x:150,alpha:1},7,cjs.Ease.get(1)).wait(51).to({x:140,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(120));

	// 2.jpg
	this.instance_8 = new lib.p2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(160,127.5,1,1,0,0,0,150,67.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(60).to({_off:false},0).to({x:150,alpha:1},7,cjs.Ease.get(1)).wait(51).to({x:140,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(180));

	// 1.jpg
	this.instance_9 = new lib.p1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(160,127.5,1,1,0,0,0,150,67.5);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:150,alpha:1},7,cjs.Ease.get(1)).wait(51).to({x:140,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(240));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUAoIAAhPIApAAIAAAPIgbAAIAAASIAaAAIAAANIgaAAIAAASIAbAAIAAAPg");
	this.shape_1.setTransform(339.8,249.7,1.25,1.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAoIAAhPIApAAIAAAPIgbAAIAAASIAaAAIAAANIgaAAIAAASIAbAAIAAAPg");
	this.shape_2.setTransform(332.9,249.7,1.25,1.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAOAoIAAgiIgbAAIAAAiIgPAAIAAhPIAPAAIAAAgIAbAAIAAggIAPAAIAABPg");
	this.shape_3.setTransform(324.8,249.7,1.25,1.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaAoIAAhPIAtAAIAAAPIgeAAIAAAQIALAAQARAAAGAKQAEAGAAAHQAAALgHAHQgIAHgMAAgAgLAZIAMAAQALAAAAgKQAAgKgLAAIgMAAg");
	this.shape_4.setTransform(316.4,249.7,1.25,1.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdAdQgMgMAAgRQAAgQAMgMQAMgMARAAQASAAAMAMQAMAMAAAQQAAARgMAMQgMAMgSAAQgQAAgNgMgAgSgSQgIAHAAALQAAALAIAIQAIAIAKAAQAMAAAIgIQAHgIAAgLQAAgLgHgHQgIgIgMAAQgKAAgIAIg");
	this.shape_5.setTransform(306.6,249.8,1.25,1.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYAoIAAhPIAWAAQAQAAAHAKQAEAGAAAJQAAAYgbAAIgHAAIAAAegAgJgEIAIAAQAMAAAAgKQAAgKgMAAIgIAAg");
	this.shape_6.setTransform(297.5,249.7,1.25,1.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAcAvIAAgPIg4AAIAAAPIgOAAIAAgdIAHAAIAehAIALAAIAeBAIAHAAIAAAdgAgTASIAnAAIgUgsg");
	this.shape_7.setTransform(288,250.7,1.25,1.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdAdQgMgMAAgRQAAgQAMgMQAMgMARAAQASAAAMAMQAMAMAAAQQAAARgMAMQgMAMgSAAQgQAAgNgMgAgSgSQgIAHAAALQAAALAIAIQAIAIAKAAQAMAAAIgIQAHgIAAgLQAAgLgHgHQgIgIgMAAQgKAAgIAIg");
	this.shape_8.setTransform(276.9,249.8,1.25,1.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAPAoIAAhAIgcAAIAABAIgPAAIAAhPIA5AAIAABPg");
	this.shape_9.setTransform(266.7,249.7,1.25,1.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00A7E0").s().p("AmqBuIAAjbINVAAIAADbg");
	this.shape_10.setTransform(302.7,249,1.25,1.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00A7E0").s().p("Am7A/QgggdASgqQASgnA0gWQA8gZBfAAQAVAAATACIAZAEIALACIgOAZQgegJgZAAQgxAAgoAOQg1ATgJAmQgEAXAQAUQAWAaAugCQAPgBAcgJQAigMAUgQIAxgpIAJgGQAHgDAHAAIA0AAIAQBHIAhhGIA5AAIAhA2IAZg2IA0AAIguBjIg2AAIgig6IgaA6IghAAIAAABIg+AAIgCgSIg5AAIgTAQIgkAAQgrAQg4AAQhRAAgjgggAiXArIAhgBIgDgcgAEqBaIAhgiIgihLIA0AAIAOAoIArgpIA6AAIhlBlQgFAFgEABIgMADgADCBQIhVAAIAuhjIBVAAQAoAAAPATQAMAPgJAUQgJATgVALQgcAPgrAAIgDAAgACxA3IAPAAQARAAAOgEQAVgHAEgQQAGgXgoAAIgPAAg");
	this.shape_11.setTransform(185.2,29.2,1.25,1.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#737373").s().p("AgEATIgDgCIgDgEIgCgDIAEgCIACABIAAACIACACIACABIACABIAEgBIACgBIABgDIABgCIgBgDQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgDgCIgEAAIAAgCIAEgBIACgCIACgCIAAgCIAAgDIgCgCIgBgBIgDgBIgCABIgCABIgBACIgBACIgBACIgCAAIgDgBIACgFIADgDIADgCIAEAAIAEAAIAEACIADADIAAAEIAAADIgBADIgDACIgDABQAEAAACACQACACAAAEIgBAEIgCAFIgFACIgFAAg");
	this.shape_12.setTransform(349.1,281.2,1.25,1.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#737373").s().p("AgEATIgFgCIgCgBIABgDIACgBIABABIAEABIADABIACgBIADgCIACgCIAAgEIAAgDIgCgCIgCgBIgDAAIgGAAIgDAAIADgSIARAAIAAACIgBABIgCABIgLAAIgBAKIAEgBIAFABIAEADIADACIAAAFIgBAFIgDAFQgBACgDABIgFAAg");
	this.shape_13.setTransform(345.3,281.2,1.25,1.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#737373").s().p("AAEATIAAgKIgQAAIgBgBIAAgCIARgYIAFAAIAAAXIAFAAIAAAEIgBAAIgEAAIAAAKgAgIAFIAMAAIAAgPIABgCg");
	this.shape_14.setTransform(341.4,281.2,1.25,1.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#737373").s().p("AgFASQgCAAgCgEQgCgCgBgDIgBgJIABgIIADgGQACgDACAAIAFgBIAFABQADAAACADQACADABADIABAIIgBAJQgBADgCACQgCAEgDAAQgCABgDAAIgFgBgAgCgOIgDADIgCAEIgBAHIABAHIACAFIADACIACABIADgBIADgCIACgFIABgHIgBgHIgCgEIgDgDIgDgBg");
	this.shape_15.setTransform(337.6,281.2,1.25,1.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#737373").s().p("AgIATIAQggIgSAAIgCgBIAAgBIAAgDIAZAAIAAAEIgPAfIgBACIgCAAg");
	this.shape_16.setTransform(333.7,281.2,1.25,1.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#737373").s().p("AgEASQgDAAgCgEIgDgFIgBgJIABgIIADgGQACgDADAAIAEgBIAFABIAFADIADAGQABAEAAAEQAAAFgBAEIgDAFIgFAEIgFABQgCAAgCgBgAgDgOIgCADIgCAEIgBAHIABAHIACAFIACACIADABIADgBIADgCIACgFIAAgHIAAgHIgCgEIgDgDIgDgBg");
	this.shape_17.setTransform(329.9,281.2,1.25,1.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#737373").s().p("AgEATIgFgDIgCgFIgBgFIABgFIAEgFIAIgNIABgBIACAAIAEAAIgKAOIgBABIgBACIADgCIADgBIAEABIAEADIACACIABAFIgBAFIgDAEIgEADIgFAAgAgCAAIgDABIgCADIAAADIAAADIACADIACABIADABIADgBIADgBIABgDIABgDIgBgDIgBgDQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAAAgBAAIgDAAg");
	this.shape_18.setTransform(326,281.2,1.25,1.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#737373").s().p("AgHATIAMgSIgDACIgDABIgEgBIgEgCIgCgDIgBgEIABgFIADgEIAEgDIAEAAIAFAAIAEADIADAEIABAFIgBADIgBADIgDAFIgJANIgBABIgBAAgAgCgOIgCACIgCACIAAADQAAAEACACQABABADAAIADAAIACgCIACgCIAAgDIAAgDIgCgCIgCgCIgDAAg");
	this.shape_19.setTransform(322.1,281.2,1.25,1.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#737373").s().p("AgIATIAOgeIACgCIgTAAIgBgBIAAgBIAAgDIAZAAIAAAEIgPAfIgBACIgCAAg");
	this.shape_20.setTransform(318.3,281.2,1.25,1.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#737373").s().p("AgJATIARggIgSAAIgBgBIgBgBIAAgDIAZAAIAAAEIgPAfIgBACIgCAAg");
	this.shape_21.setTransform(314.4,281.2,1.25,1.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#737373").s().p("AAEATIAAgKIgPAAIgBAAIgBgBIAAgCIARgYIAEAAIAAAXIAHAAIAAADIgBABIgBAAIgFAAIAAAKgAgIAFIAMAAIAAgOIABgBIAAgCg");
	this.shape_22.setTransform(310.5,281.2,1.25,1.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#737373").s().p("AgEASQgDAAgCgEIgDgFIgBgJIABgIIADgGQACgDADAAIAEgBIAGABIAEADIADAGQABAEAAAEQAAAFgBAEIgDAFIgEAEIgGABQgCAAgCgBgAgCgOIgDADIgCAEIgBAHIABAHIACAFIADACIACABIADgBIADgCIACgFIAAgHIAAgHIgCgEIgDgDIgDgBg");
	this.shape_23.setTransform(306.7,281.2,1.25,1.25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#737373").s().p("AgIATIAAgEIAIAAIAAgYIAAgCIgHAFIAAABIgBAAIgBgBIAAAAIgBgCIAKgKIAEAAIAAAhIAHAAIAAAEg");
	this.shape_24.setTransform(302.8,281.2,1.25,1.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#737373").s().p("AAKATIAAgRIgTAAIAAARIgGAAIAAglIAGAAIAAARIATAAIAAgRIAGAAIAAAlg");
	this.shape_25.setTransform(296.6,281.2,1.25,1.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#737373").s().p("AgMATIAAglIAMAAIAFABQACAAACACIADAEIABAFIgBAFIgDADQgCACgCAAIgFABIgGAAIAAAOgAgGABIAGAAIACgBIADAAIACgDIAAgDIAAgDIgCgDIgDgBIgCgBIgGAAg");
	this.shape_26.setTransform(292.3,281.2,1.25,1.25);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#737373").s().p("AgLATIAAglIAXAAIAAAEIgRAAIAAAhg");
	this.shape_27.setTransform(288.5,281.2,1.25,1.25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#737373").s().p("AgHASIgGgEQgCgCgCgEQgBgEAAgEIABgHQACgFACgBQADgDADgBIAHgBIAIABQADABACADQADABACAFIABAHQAAAEgBAEQgCAEgDACIgFAEQgDABgFAAQgEAAgDgBgAgFgNIgDADIgDAEIgCAGIACAGQABADACABIADADIAFABIAGgBIADgDIADgEIABgGIgBgGIgDgEIgDgDIgGgBg");
	this.shape_28.setTransform(283.8,281.2,1.25,1.25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#737373").s().p("AgEATIgFgCIgCgBIABgDIACgBIABABIACAAIACABIADABIACgBIADgCIACgCIAAgEIAAgDIgCgCIgCgBIgDAAIgGAAIgDAAIADgSIARAAIAAACIAAABIgDABIgLAAIgBAKIAEgBIAFABIAEADIADACIAAAFIgBAFIgDAFIgEADIgEAAg");
	this.shape_29.setTransform(277.4,281.2,1.25,1.25);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#737373").s().p("AgIATIAAgEIAIAAIAAgaIgHAFIAAABIgBAAIgBgBIgBgCIAKgKIAEAAIAAAhIAHAAIAAAEg");
	this.shape_30.setTransform(273.7,281.2,1.25,1.25);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#737373").s().p("AgEASQgDAAgCgEQgCgCgBgDIgBgJIABgIIADgGQACgDADAAIAEgBIAGABQACAAACADQACADABADIABAIIgBAJQgBADgCACQgCAEgCAAIgGABQgCAAgCgBgAgCgOIgDADIgCAEIgBAHIABAHIACAFIADACIACABIADgBIADgCIACgFIABgHIgBgHIgCgEIgDgDIgDgBg");
	this.shape_31.setTransform(269.8,281.2,1.25,1.25);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#737373").s().p("AgMATIAAgDIAMgNIAFgFIABgDIABgDIgBgCIgBgDIgCgBIgDAAIgBAAIgDABIgBACIgBACIgBACIgBAAIgDgBIABgEIADgEIAEgCIADAAIAFAAIAEACIACAEIABAEIgBAEIgBAEIgPAPIAFgBIALAAIABABIABABIAAADg");
	this.shape_32.setTransform(265.9,281.2,1.25,1.25);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#737373").s().p("AgIATIAAgEIAIAAIAAgYIAAgCIgGAFIgBABIAAAAIgBgBIAAAAIgDgCIALgKIAEAAIAAAhIAIAAIAAAEg");
	this.shape_33.setTransform(262,281.2,1.25,1.25);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#737373").s().p("AgEATIgFgCIgCgBIABgDIACgBIABABIAEABIADABIACgBIADgCIACgCIAAgEIAAgDIgCgCIgCgBIgDAAIgGAAIgDAAIADgSIARAAIAAACIgBABIgCABIgLAAIgBAKIAEgBIAFABIAEADIADACIAAAFIgBAFIgDAFQgBACgDABIgFAAg");
	this.shape_34.setTransform(258.1,281.2,1.25,1.25);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#737373").s().p("AAFATIAAgKIgQAAIgBAAIgBgBIAAgCIASgYIAEAAIAAAXIAGAAIAAAEIgBAAIgFAAIAAAKgAgIAFIANAAIAAgPIAAgCg");
	this.shape_35.setTransform(254.2,281.2,1.25,1.25);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#737373").s().p("AgFASQgCAAgCgEQgCgCgBgDIgBgJIABgIIADgGQACgDACAAIAFgBIAFABQADAAACADQACADABADIABAIIgBAJQgBADgCACQgCAEgDAAQgCABgDAAIgFgBgAgCgOIgDADIgCAEIgBAHIABAHIACAFIADACIACABIADgBIADgCIACgFIABgHIgBgHIgCgEIgDgDIgDgBg");
	this.shape_36.setTransform(250.4,281.2,1.25,1.25);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#737373").s().p("AgJATIARggIgTAAIgBgBIAAgBIAAgDIAZAAIAAAEIgPAfIgBACIgCAAg");
	this.shape_37.setTransform(246.6,281.2,1.25,1.25);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#737373").s().p("AgJATIARggIgTAAIgBgBIAAgBIAAgDIAZAAIAAACIAAACIgPAfIgBACIgCAAg");
	this.shape_38.setTransform(242.8,281.2,1.25,1.25);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#737373").s().p("AAKATIAAgRIgTAAIAAARIgGAAIAAglIAGAAIAAARIATAAIAAgRIAGAAIAAAlg");
	this.shape_39.setTransform(236.5,281.2,1.25,1.25);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#737373").s().p("AAKATIAAgRIgTAAIAAARIgGAAIAAglIAGAAIAAARIATAAIAAgRIAGAAIAAAlg");
	this.shape_40.setTransform(231.4,281.2,1.25,1.25);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#737373").s().p("AAKATIAAgcIABgDIgDAFIgRAaIgCAAIgDAAIAAglIAFAAIAAAcIgBADIABgDIASgaIABgBIACgBIADAAIAAAlg");
	this.shape_41.setTransform(226.4,281.2,1.25,1.25);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#737373").s().p("AgEATIgFgCIgCgEIgBgEQAAgEACgDQADgCADAAQgDAAgCgEQgBgCgBgCIABgFIACgDIAFgCIADAAIAFAAIADACIADADIABAFQAAACgCACQgCAEgDAAQAEAAACACQACADAAAEIgBAEIgDAEIgEACIgFAAgAgCABIgCACIgCACIAAAEIAAACQAAABAAAAQAAAAAAABQABAAAAAAQAAAAABAAIACACIACABIAEgBIACgCIABgCIABgCIgBgEIgCgCIgCgCIgDAAgAgCgPIgCACIgBACIAAADIAAACIABACIACABIACABIADgBIACgBIABgCIABgCIgBgDIgBgCIgCgCIgDAAg");
	this.shape_42.setTransform(220.2,281.2,1.25,1.25);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#737373").s().p("AgBADIgBAAIgBgBIAAgDIACgCIACAAIACABIAAABIABABIgBACIAAABIgCAAIgBAAg");
	this.shape_43.setTransform(215.8,283.2,1.25,1.25);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#737373").s().p("AALASIAAgJIgVAAIAAAJIgFAAIAAgMIABAAIACgBIACgCIABgCIACgDIACgPIAQAAIAAAWIAFAAIAAAMIgBABgAgDAAIgBACIgCAEIAMAAIAAgTIgHAAg");
	this.shape_44.setTransform(212.9,282.5,1.25,1.25);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#737373").s().p("AgCAGIAAgBIABgBIABgBIAAgCIAAgBIAAAAIgBAAIgBgBIAAgCIABgCIABgBIACAAIABABIAAACIAAADIgBACIgDAFg");
	this.shape_45.setTransform(208.4,283.6,1.25,1.25);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#737373").s().p("AAHATIAAgTIgCACIgLAQIAAABIgBAAIgEAAIAAgaIAGAAIAAARIgBABIAAABIABgBIABgBIALgQIACgBIADAAIAAAagAgCgLIgCgBQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAgDIAAgBIABAAIADAAIAAACIAAACIACABIACgBIABAAIABgCIAAgCIADAAIABAAIAAABIAAADIgCACIgCABIgEAAg");
	this.shape_46.setTransform(205.7,281.2,1.25,1.25);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#737373").s().p("AgFACIAAgDIALAAIAAADg");
	this.shape_47.setTransform(202.5,281.6,1.25,1.25);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#737373").s().p("AgMATIAAgCIABgCIALgMIAFgFIABgDIABgDIgBgCIgBgDIgCgBIgDAAIgCAAIgBABIgCACIgBACIgBACIgCAAIgCgBIABgEIADgEIAEgCIADAAIAFAAIAEACIACAEIABAEIAAAEIgCAEIgOAPIADgBIAMAAIACABIAAABIAAADg");
	this.shape_48.setTransform(199.4,281.2,1.25,1.25);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#737373").s().p("AAHATIAAgTIgCACIgLAQIAAABIgCAAIgDAAIAAgaIAFAAIAAATIABgBIABgBIALgQIACgBIADAAIAAAagAgCgLIgCgBQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAgDIAAgBIABAAIADAAIAAACIAAACIACABIACgBIABAAIABgCIAAgCIADAAIABAAIAAABIAAADIgCACIgCABIgEAAg");
	this.shape_49.setTransform(193.8,281.2,1.25,1.25);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#737373").s().p("AAGANIAAgRIABgBIAAgBIgCADIgLAPIgBABIgBAAIgDAAIAAgaIAFAAIAAAUIABgCIABgBIADgEIABgDIAHgIIAAgBIABgBIAEAAIAAAag");
	this.shape_50.setTransform(190,281.9,1.25,1.25);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#737373").s().p("AAIANIgCAAIgBgCIgFgIQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAIgCgBIgDAAIAAAMIgFAAIAAgaIAFAAIAAAMIADAAIACAAIABgCIAFgIIABgBIABgBIAEAAIgIANIgCAAIACAAIACACIAHALg");
	this.shape_51.setTransform(186.5,281.9,1.25,1.25);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#737373").s().p("AgDANIgDgDIgDgEIgBgGIABgFQAAgCADgCIADgDIAFgBIAFABIAEADIgCABIAAABIgBAAIgDgCIgDAAIgCABIgDABIgBADIAAAEIAAAEQAAABAAAAQAAAAAAABQABAAAAABQAAAAAAABIADABIACABIADgBIADgBIABAAIABAAIABABIgCACIgDACIgFABg");
	this.shape_52.setTransform(183,281.9,1.25,1.25);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#737373").s().p("AAGANIAAgMIgLAAIAAAMIgFAAIAAgaIAFAAIAAALIALAAIAAgLIAGAAIAAAag");
	this.shape_53.setTransform(179.5,281.9,1.25,1.25);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#737373").s().p("AAGANIAAgSIABgBIgBACIgBABIgBACIgCABIgIAMIAAABIgCAAIgDAAIAAgaIAGAAIAAATIgBABIABgCIABgBIABgCIACgCIABgDIAHgIIAAgBIABgBIAEAAIAAAag");
	this.shape_54.setTransform(175.7,281.9,1.25,1.25);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#737373").s().p("AAQASIAAgJIgkAAIAAgaIAFAAIAAAWIALAAIAAgWIAEAAIAAAWIALAAIAAgWIAFAAIAAAWIAFAAIAAAMIgBABg");
	this.shape_55.setTransform(171.1,282.5,1.25,1.25);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#737373").s().p("AgEANIgEgDIgDgEIgBgGIABgFIADgEIAEgDIAEgBIAFABIAEADIADAEIABAFIgBAGIgDAEIgEADIgFABgAgFgHQgCADAAAEQAAAFACADQACACADAAQAEAAACgCQACgDAAgFQAAgEgCgDQgCgCgEAAQgDAAgCACg");
	this.shape_56.setTransform(166.1,281.9,1.25,1.25);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#737373").s().p("AgMATIAAglIAMAAIAFABQADAAACACIACAEIABAFIgBAFIgCADIgFACIgFABIgGAAIAAAOgAgGABIAGAAIACgBIADAAIACgDIABgDIgBgDIgCgDIgDgBIgCgBIgGAAg");
	this.shape_57.setTransform(162.6,281.2,1.25,1.25);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#737373").s().p("AALASIAAgJIgVAAIAAAIIgBABIgEAAIAAgMIABAAIACgBIACgCIABgCIACgDIABgPIARAAIAAAWIAFAAIAAAMIgBABgAgDAAIgDAGIAMAAIAAgTIgIAAg");
	this.shape_58.setTransform(156.6,282.5,1.25,1.25);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#737373").s().p("AgFANIgEgEIABgBIABAAIABAAIACABIACAAIACABIACgBIACAAIABgCIAAgBQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgEgBIgDAAIAAgCIADAAQAAAAAAgBQABAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAQABAAAAAAQAAgBAAAAQAAgBAAgBIAAgBIgBgBIgCgBIgEAAIgEACIgBgBIgBgCIADgCIAFgBIAEAAIADACIACADIABACIgBAEIgCABIgCABIAEABQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABIgBADIgCACIgDACIgEABg");
	this.shape_59.setTransform(153,281.9,1.25,1.25);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#737373").s().p("AgDANIgFgDIgDgEIAAgGIAAgFIADgEIAEgDIAEgBIAFABIADACIADAEIABAFIAAABIgBAAIgRAAIABAEIABAEIADABIACABIADgBIACAAIACgBIABAAIABAAIACABIgDACIgDACIgGABgAgDgIIgDAGIANAAIAAgDIgCgDIgBgBIgEAAQgCAAgBABg");
	this.shape_60.setTransform(149.9,281.9,1.25,1.25);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#737373").s().p("AgFANIgDgDQgDgCAAgCIgBgGIABgFIADgEIADgDIAFgBIAFABIAFADIACAEIABAFIgBAGQgBACgBACIgFADIgFABgAgFgHQgCAEAAADQAAADACAFQADACACAAQADAAADgCQABgDAAgFQAAgEgBgDQgDgCgDAAQgCAAgDACg");
	this.shape_61.setTransform(146.2,281.9,1.25,1.25);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#737373").s().p("AgLASIAAgjIADAAQAAAAABAAQAAAAAAAAQAAABAAAAQABAAAAAAIAAADIAEgDIAEgBIAEABIAEACIABAFIABAFIgBAFIgCAFIgEACQgCACgCAAIgEgBIgDgDIAAAMgAgDgMQAAAAAAAAQgBAAAAABQgBAAAAABQgBAAAAABIAAAMIADACIADABQADAAACgDQACgCAAgFIAAgEIgCgDIgCgCIgCAAIgEABg");
	this.shape_62.setTransform(142.5,282.4,1.25,1.25);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#737373").s().p("AAJATIAAghIgRAAIAAAhIgGAAIAAglIAdAAIAAAlg");
	this.shape_63.setTransform(138.1,281.2,1.25,1.25);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#737373").s().p("AgCAGIAAgBIAAAAIABgBIABgBIAAgDIgBAAIgBAAIAAgBIgBgCIABgCIACgBIACAAIABABIAAADIAAACIgBACIgBADIgCACg");
	this.shape_64.setTransform(133.2,283.6,1.25,1.25);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#737373").s().p("AgFANIgDgBIgBgCIgBgDIABgEIADgCIAFgBIAHgBIAAgCQAAgBAAAAQAAgBgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAgBAAQgBAAAAAAIgCABIgCAAIgCABIgBABIgBgBIgBAAIgBgCIAFgDIAFgBIAEAAIADADIACADIABAEIAAAQIgDAAIgBAAIAAgBIgBgCIgEADIgEABgAAAACIgCABIgCABIgBADIAAABIABABIADABIACAAIABgBIACAAIACgCIAAgGg");
	this.shape_65.setTransform(130.7,281.9,1.25,1.25);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#737373").s().p("AgJANIAAgaIAJAAIAEABQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIACACIAAACIgBAEIgBABIgDABIAFABQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABIAAADIgDACIgDACIgEAAgAgFAKIAFAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABgBAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAIgBgDIAAgBIgCgBIgDAAIgFAAgAgFgBIAFAAIADgBIABgCIABgCIAAgBIgBgBIgCgBIgHAAg");
	this.shape_66.setTransform(127.6,281.9,1.25,1.25);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#737373").s().p("AAIANIgCAAIgBgCIgFgIQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAIgCgBIgDAAIAAAMIgFAAIAAgaIAFAAIAAAMIADAAIACAAIABgCIAFgIIABgBIABgBIAEAAIgIANIgCAAIACAAIACACIAHALg");
	this.shape_67.setTransform(124.3,281.9,1.25,1.25);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#737373").s().p("AgCANIgFgDIgCgEIgBgGIABgFQAAgCACgCIAFgDIAEgBIAFABIAEADIgCABIAAABIAAAAIgEgCIgDAAIgCABIgCABIgCADIgBAEIABAEQAAABAAAAQAAAAAAABQABAAAAABQAAAAABABIACABIACABIADgBIADgBIABAAIABAAIABABIgCACIgCACIgGABg");
	this.shape_68.setTransform(120.8,281.9,1.25,1.25);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#737373").s().p("AgFANIgDgDIgDgEIgBgGIABgFIADgEIADgDIAFgBIAFABIAEADIADAEIABAFIgBAGQAAACgDACIgEADIgFABgAgFgHQgCADAAAEQAAAFACADQACACADAAQAEAAACgCQACgDAAgFQAAgEgCgDQgCgCgEAAQgDAAgCACg");
	this.shape_69.setTransform(117.3,281.9,1.25,1.25);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#737373").s().p("AAQATIAAgdIgOAYIgCAAIgBgBIgNgXIAAAdIgFAAIAAglIAEAAIABAAIABABIANAZIABgDIANgWIACgBIAEAAIAAAlg");
	this.shape_70.setTransform(112.4,281.2,1.25,1.25);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#737373").s().p("AgBADIgBAAIAAgBIgBgCIABgBIAAgBIABgBIADAAIABABIAAABIAAABIAAACIAAABIgBAAIgCAAg");
	this.shape_71.setTransform(106.8,283.2,1.25,1.25);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#737373").s().p("AgIANIAAgaIARAAIAAAEIgMAAIAAAWg");
	this.shape_72.setTransform(105.2,281.9,1.25,1.25);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#737373").s().p("AgCAGIAAgBIAAAAIABgBIABgBIAAgDIgBAAIgBAAIAAgBIgBgCIABgCIACgBIACAAIABABIAAADIAAACIgBACIgBADIgCACg");
	this.shape_73.setTransform(101.2,283.6,1.25,1.25);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#737373").s().p("AgHATIANgSIgEACIgDABIgDgBIgEgCIgCgDIgBgEIABgFIACgEIAFgDIADAAIAGAAIADADIADAEIABAIIgCADIgLASIgBABIgBAAgAgCgOIgCACIgCACIAAADQAAAEACACQABABADAAIAEAAIACgCIACgCIAAgDIAAgDIgCgCIgCgCIgEAAg");
	this.shape_74.setTransform(98.4,281.2,1.25,1.25);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#737373").s().p("AgIATIAAgEIAIAAIAAgaIgGAFIgBABIgBAAIgBgBIgBgCIAKgKIAEAAIAAAhIAHAAIAAAEg");
	this.shape_75.setTransform(94.7,281.2,1.25,1.25);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#737373").s().p("AAFATIAAgKIgQAAIgBAAIgBgBIAAgCIARgYIAFAAIAAAXIAGAAIAAAEIgBAAIgFAAIAAAKgAgIAFIANAAIAAgPIAAgCg");
	this.shape_76.setTransform(90.7,281.2,1.25,1.25);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#737373").s().p("AgEATIgFgCIgCgBIABgDIACgBIABABIACAAIACABIADABIACgBIADgCIACgCIAAgEIAAgDIgCgCIgCgBIgDAAIgGAAIgDAAIADgSIARAAIAAACIAAABIgDABIgKAAIgCAKIAEgBIAFABIAEADIADACIAAAFIgBAFIgDAFIgEADIgEAAg");
	this.shape_77.setTransform(86.8,281.2,1.25,1.25);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#737373").s().p("AgIATIAAgEIAIAAIAAgaIgGAFIgBABIgBAAIgBgBIgCgCIALgKIAEAAIAAAhIAIAAIAAAEg");
	this.shape_78.setTransform(83,281.2,1.25,1.25);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#737373").s().p("AgIATIAAgEIAIAAIAAgaIgHAFIAAABIgBAAIgBgBIgBgCIAKgKIAEAAIAAAhIAHAAIAAAEg");
	this.shape_79.setTransform(79.2,281.2,1.25,1.25);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#737373").s().p("AAAAKIAAgBIAAgBIAEgHIAAgBIABAAIgBAAIgEgHIAAgBIAAgBIACgBIAHAKIAAAAIgHALgAgHAKIgBgBIABgBIAEgHIAAgBIABAAIgBAAIgEgHIgBgBIABgBIACgBIAGAKIAAAAIgGALg");
	this.shape_80.setTransform(74.1,281.8,1.25,1.25);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#737373").s().p("AAAADIgBAAIgBgBIAAgCIAAgBIABgBIABgBIABAAIABABIABABIAAABIAAACIgBABIgBAAIgBAAg");
	this.shape_81.setTransform(71.9,283.2,1.25,1.25);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#737373").s().p("AgKATIAAglIAVAAIAAAEIgQAAIAAAhg");
	this.shape_82.setTransform(70.2,281.2,1.25,1.25);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#737373").s().p("AAAADIgBAAIgBgBIAAgCIAAgBIABgBIABgBIABAAIABABIABABIAAABIAAACIgBABIgBAAIgBAAg");
	this.shape_83.setTransform(67.4,283.2,1.25,1.25);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#737373").s().p("AAKATIAAgRIgTAAIAAARIgGAAIAAglIAGAAIAAARIATAAIAAgRIAGAAIAAAlg");
	this.shape_84.setTransform(64,281.2,1.25,1.25);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#737373").s().p("AAAADIgCAAIAAgBIgBgCIABgBIAAgBIACgBIACAAIACACIAAADIgBABIgBAAIgCAAg");
	this.shape_85.setTransform(60.7,283.2,1.25,1.25);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#737373").s().p("AgEASIgGgEIgEgGQgBgEAAgEIABgHIAEgHIAGgDIAHgBIAHABIAFADIgBACIgBABIgBABIgBgBIgBgCIgDgBIgEAAIgFABIgEADIgCAEIgBAGIABAGQAAACACACIAEADIAFABIADAAIACAAIACgBIACgCIABAAIABAAIACACIgGAFQgDABgFAAQgDAAgDgBg");
	this.shape_86.setTransform(57.8,281.2,1.25,1.25);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#737373").s().p("AAKATIAAgfIgCAFIgRAaIgBAAIgFAAIAAglIAGAAIAAAaIAAACIAAADIABgDIARgaIABgBIACgBIAEAAIAAAlg");
	this.shape_87.setTransform(51.2,281.2,1.25,1.25);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#737373").s().p("AAPAYIAAgJIgdAAIAAAHIAAACIgFAAIAAgOIAEAAIACgBIABgCIACgFIABgFIABgUIAWAAIAAAhIAGAAIAAAMIAAACgAgDgHIgCAHIgCAGIgCAEIASAAIAAgcIgMAAg");
	this.shape_88.setTransform(45.9,281.7,1.25,1.25);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#737373").s().p("AAKATIAAgRIgTAAIAAARIgFAAIAAglIAFAAIAAARIATAAIAAgRIAFAAIAAAlg");
	this.shape_89.setTransform(40.9,281.2,1.25,1.25);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#737373").s().p("AAOATIgCAAIAAgBIgDgJIgQAAIgEAJIgBABIgBAAIgEAAIAPglIAFAAIAPAlgAAAgJIgGAOIANAAIgGgQIgBgCg");
	this.shape_90.setTransform(36,281.2,1.25,1.25);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#737373").s().p("AAKATIgBAAIgBgCIgJgNIgBgCIgCAAIgFAAIAAARIgFAAIAAglIAFAAIAAARIAEAAIABgBIABAAIABAAIABgBIAJgPIACAAIAEAAIgLAQIgDACIACAAIACADIALAQg");
	this.shape_91.setTransform(31.8,281.2,1.25,1.25);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#737373").s().p("AAAAAIAAAAIAGgKIACABIAAABIAAABIgDAHIgBAAIABABIADAHIAAABIAAABIgCABgAgIAAIAAAAIAHgKIABABIAAABIAAABIgDAHIAAAAIAAABIADAHIAAABIAAABIgBABg");
	this.shape_92.setTransform(27.8,281.8,1.25,1.25);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#737373").s().p("AgHASIgFgEQgDgCgCgEQgBgEAAgEIABgHQACgFADgBQACgDADgBIAHgBIAIABIAGAEIADAGIACAHQAAAEgCAEIgDAGIgGAEQgEABgEAAQgEAAgDgBgAgEgNIgFADIgCAEIgBAGIABAGIACAEIAFADIAEABIAGgBIADgDQADgBABgDIABgGIgBgGIgEgEIgDgDIgGgBg");
	this.shape_93.setTransform(22,281.2,1.25,1.25);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#737373").s().p("AgHASIgGgEIgEgGQgBgEAAgEIABgHQABgDADgDIAGgEIAHgBIAIABQADABADADIAEAGIABAHQAAAEgBAEIgEAGIgGAEIgIABIgHgBgAgFgNIgEADIgCAEIgBAGIABAGQAAACACACIAEADIAFABIAGgBIADgDQACgCABgCIABgGIgBgGIgDgEIgDgDIgGgBg");
	this.shape_94.setTransform(16.7,281.2,1.25,1.25);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#737373").s().p("AgHASIgFgEQgDgCgCgEQgBgEAAgEIABgHQACgFADgBQACgDADgBIAHgBIAIABIAGAEIADAGIACAHQAAAEgCAEIgDAGIgGAEQgEABgEAAQgEAAgDgBgAgEgNIgFADIgCAEIgBAGIABAGIACAEIAFADIAEABIAGgBIAEgDQACgCABgCIABgGIgBgGIgDgEIgEgDIgGgBg");
	this.shape_95.setTransform(11.4,281.2,1.25,1.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(306));

	// Слой 3
	this.instance_10 = new lib.ClipGroup_46();
	this.instance_10.parent = this;
	this.instance_10.setTransform(243.7,8.6,1.1,1.1,0,0,0,25.3,16.4);

	this.instance_11 = new lib.ClipGroup_1_5();
	this.instance_11.parent = this;
	this.instance_11.setTransform(120.2,1.1,1.1,1.1,0,0,0,15.2,14.9);

	this.instance_12 = new lib.ClipGroup_2_5();
	this.instance_12.parent = this;
	this.instance_12.setTransform(332.5,4.7,1.1,1.1,0,0,0,39.1,21.2);

	this.instance_13 = new lib.ClipGroup_3_5();
	this.instance_13.parent = this;
	this.instance_13.setTransform(30.9,5.8,1.1,1.1,0,0,0,21.7,22.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#99DCF3").s().p("AgBBFIAAgMIgKAJIgCgDIAMgMIAAgFIgKAJIgCgDIAMgMIAAgFIgKAJIgCgCIAMgMIAAgGIgKAKIgCgDIAMgMIAAgGIgJAJIgBABIgBgBIgBgBIAAgBIAAAAIADgMIgEADIgFARIgEgBIAEgNIgEACIgFARIgEgBIADgNIgEADIgFAQIgDgBIADgMIgEACIgFARIgDgBIADgNIgLAGIgCgDIALgGIgNgEIABgEIABAAIAQAFIAEgDIgMgDIABgEIAAAAIAQAEIAEgCIgMgEIABgDIARAEIAEgDIgMgDIABgEIAQAFIAEgDIgLgDIAAAAIAAAAIgBAAIAAgCIAAgBIABAAIAAAAIAAAAIAAAAIALgDIgEgDIgQAFIgBgEIAMgDIgEgDIgRAEIgBgDIANgEIgFgCIgQAEIgBgEIAMgDIgEgDIgQAFIgBgEIAMgEIgLgGIACgDIALAGIgDgNIADgBIAFARIAEACIgDgMIADgBIAFAQIAEADIgCgNIADgBIAFARIAEACIgEgNIAEgBIAFARIAEADIgDgMIAAAAIAAgBIABgBIACgBIAJAKIAAgGIgMgMIADgDIAJAKIAAgFIgMgNIADgCIAJAJIAAgFIgMgMIADgDIAJAJIAAgFIgMgMIADgDIAJAJIAAgMIADAAIAAAMIAKgJIACADIgMAMIAAAFIAKgJIACADIgMAMIAAAFIAKgJIACACIgMANIAAAFIAKgKIACADIgMAMIAAAGIAJgJIAAAAIABgBIABACIABAAIAAABIgBAAIgCAMIAEgDIAFgQIADABIgDAMIAEgCIAFgRIAEABIgDANIAEgDIAFgQIADABIgDANIAEgDIAFgRIADABIgDANIALgGIACADIgLAHIANADIgBAEIgBAAIgPgFIgGADIAOADIgCAEIgQgEIgFACIANAEIgBAEIAAgBIgQgEIgFADIANADIgBAEIgBAAIgQgFIgEADIALADIAAAAIAAAAIABABIAAAAIAAACIgBAAIAAAAIAAAAIgLADIAEADIAQgFIABAEIgMAEIAFACIAQgEIABAEIgNADIAFADIAQgFIACAEIgOADIAFADIARgEIABADIgNAEIALAGIgCADIgLgGIADANIgDABIgFgRIgEgCIADANIgDABIgFgRIgEgDIACANIgDABIgFgQIgEgDIADANIgDABIgFgRIgEgCIACALIABAAIAAABIgBABIgBABIgBgBIgJgJIAAAGIAMAMIgCADIgKgKIAAAGIAMAMIgCACIgKgJIAAAFIAMAMIgCADIgKgJIAAAFIAMAMIgCADIgKgJIAAAMgAAIAOIgCgIIgEgDIABgDIgBgCIgDAAIgCACIACADIADAAIAAAFIAGAGgAgFAGIgCAIIAGgGIAAgFgAAEAAIAEACIAIgCIgIgBgAgPAAIAIACIAEgCIgEgBgAACgHIAAAFIAEgDIACgIgAgFgFIAEADIAAgFIgGgGg");
	this.shape_96.setTransform(60,43.7,1.1,1.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#99DCF3").s().p("AgBBZIAAgQIgMALIgEgDIAQgPIAAgIIgMANIgEgEIAQgQIAAgGIgMALIgEgDIAQgPIAAgHIgMAMIgEgEIAQgPIAAgHIgLALIAAABIAAgBIgBABIgCgBIgCgBIAAgBIAAAAIAAgBIAFgOIgHADIgFAVIgFgBIAEgQIgFADIgGAVIgFgBIAEgRIgGAEIgFAVIgFgCIAFgQIgGAEIgGAVIgFgBIAEgRIgNAJIgDgFIAOgIIgRgFIACgFIAAABIAVAFIAGgDIgQgFIABgEIAVAFIAGgDIgQgFIABgEIAVAGIAGgEIgRgEIACgFIAVAGIAGgEIgOgEIgBAAIAAAAIgBAAIAAgCIAAgBIABgBIAAAAIABAAIAOgDIgGgEIgVAGIgCgFIARgFIgGgDIgVAGIgBgFIAQgFIgGgDIgVAGIgBgFIAQgEIgGgEIgVAGIgCgFIARgEIgOgJIADgDIANAHIgEgQIAFgBIAGAVIAGADIgFgQIAFgBIAFAVIAGAEIgEgRIAFgCIAGAWIAFADIgEgQIAFgBIAFAVIAHADIgFgOIAAAAIAAgBIAAgBIACgBIACgBIABABIAAAAIAAABIALAKIAAgHIgQgQIAEgDIAMAMIAAgHIgQgPIAEgEIAMAMIAAgGIgQgQIAEgDIAMALIAAgHIgQgPIAEgEIAMANIAAgQIADAAIAAAQIANgNIADAEIgQAPIAAAHIANgLIADADIgQAQIAAAGIANgMIADAEIgQAPIAAAHIANgMIADADIgQAQIAAAHIALgKIAAgBIABAAIABgBIABACIACAAIgBABIABABIgBAAIgDAPIAFgEIAGgVIAFABIgFARIAHgEIAFgVIAFABIgFARIAGgEIAGgVIAFABIgEAQIAFgDIAGgVIAFACIgFAPIAPgHIACAEIgOAIIAQAEIgBAFIgVgGIgGAEIARAEIgCAFIgVgGIgGAEIAQAEIgBAFIgVgFIgGACIAQAFIgBAFIgVgGIgGAEIAPADIAAAAIABAAIABABIgBABIABACIgBAAIgBABIAAgBIAAAAIgPAEIAGAEIAVgGIABAFIgQAEIAGAEIAVgGIABAFIgQAEIAGADIAVgFIACAFIgRAEIAGADIAVgFIABAEIgQAFIAOAIIgCAFIgPgIIAFAQIgFABIgGgVIgFgEIAEARIgFABIgGgVIgGgEIAFARIgFABIgFgVIgHgDIAFAQIgFACIgGgWIgFgDIADAOIABABIgBAAIABABIgCABIgBABIgBAAIgBAAIAAgBIgLgLIAAAHIAQAPIgDAEIgNgMIAAAHIAQAPIgDADIgNgLIAAAGIAQAQIgDAEIgNgNIAAAIIAQAPIgDADIgNgLIAAAQgAAKASIgCgLIgGgDIAAAGIAIAIgAgHAHIgCALIAIgIIAAgGgAgDAAIACAEIADAAIADgEIgDgDIgDAAgAAFAAIAFADIALgDIgLgCgAgUAAIALADIAFgDIgFgCgAACgJIAAAFIAGgCIACgLgAgHgGIAGACIAAgFIgIgIg");
	this.shape_97.setTransform(319.6,34.8,1.1,1.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#99DCF3").s().p("AgHAIQgEgDAAgFQAAgEAEgDQAEgEADAAQAFAAADAEQADADABAEQgBAFgDADQgDADgFAAQgDAAgEgDg");
	this.shape_98.setTransform(351.9,45.2,1.1,1.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#99DCF3").s().p("AgDBfIAAgSIgOAJIgCAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAIAAgDIACgCIASgNIAAgKIgcASIgCAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgDgEAEgCIAggVIAAgVQgKgCgHgHIgSAKIgCAmQAAAEgEAAIgDgCIgBgCIACghIgKAFIgBAWQAAAEgEAAIAAAAIgCgBIgBgEIAAgQIgQAJIgCABQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBIgBgDIACgCIARgKIgQgHQgDgCACgEQAAAAAAgBQABAAAAgBQABAAAAAAQABAAAAAAIACAAIAUAKIAJgFIgegPIgCgCIABgDQAAAAAAgBQAAAAABAAQAAgBABAAQABAAAAAAIACAAIAiARIASgKQgBgFAAgFQAAgEABgEIgSgMIgiASIgCAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBIgBgCIACgDIAegPIgJgGIgUAKIgCABQAAAAgBAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQgCgEADgBIAQgIIgRgJIgCgDIABgDQAAAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAIACAAIAQAJIAAgRIABgCIACgBQAEgBAAAEIABAWIAKAFIgCggIABgEIADgBQAAAAAAAAQABAAAAAAQABABAAAAQAAAAABAAIABADIACAmIASALQAHgJAKgBIAAgWIgggUIgCgCIABgDQABgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAIACABIAcASIAAgLIgSgLQgEgCACgEQABAAAAAAQAAgBABAAQAAAAABAAQAAgBABAAIACABIAOAJIAAgTQAAgDADAAQAEAAAAADIAAATIAOgJIACgBQABAAAAABQABAAAAAAQABAAAAABQAAAAAAAAQADAEgEACIgSALIAAALIAbgSIADgBQAAAAABABQAAAAAAAAQABAAAAABQAAAAABABIAAADQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIggAUIAAAWQAJABAIAJIASgLIACgmQAAgEAEAAIADABIABAEIgCAgIAJgFIACgWQAAgFAEACIACABIABACIgBARIARgJIACAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAIABADIgCADIgRAJIAPAIQAEABgCAEQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgCgBIgUgKIgJAGIAdAPQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAABQABAAAAAAQAAABAAAAQAAAAAAAAQAAABgBAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgCAAIgigSIgTAMQACAEAAAEQAAAFgCAFIATAKIAigRIACAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAIgCACIgdAPIAJAFIAUgKIACAAIADACQACAEgEACIgPAHIARAKIACACIgBADIgDACIgCgBIgRgJIABAQIgBAEIgCABIgBAAQgDAAAAgEIgCgWIgJgFIACAhIgBACQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAQgEAAAAgEIgCgmIgSgKQgIAHgJACIAAAVIAgAVQAEACgDAEQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgDAAIgbgSIAAAKIASANQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAIgBADQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgCAAIgOgJIAAASQAAAFgEAAQgDAAAAgFgAgMgMQgGAGAAAGQAAAIAGAFQAFAFAHABQAIgBAFgFQAFgFAAgIQAAgGgFgGQgFgGgIABQgHgBgFAGg");
	this.shape_99.setTransform(351.9,45.2,1.1,1.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#99DCF3").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_100.setTransform(17.8,43.6,1.1,1.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#99DCF3").s().p("AgCBUIAAgQIgNAIIgCAAIgDgCIAAgCIABgCIARgKIAAgKIgZAQIgCABQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAgBAAAAQgCgDADgCIAcgSIAAgTQgKgCgFgGIgRAJIgBAiQAAAAAAABQgBAAAAABQgBAAAAAAQgBABgBAAIgCgBIgBgDIABgdIgIAFIgBATQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAIgDgBIAAgCIAAgPIgOAIIgCAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBgBAAIAAgCIABgDIAPgIIgNgHIgCgCIAAgDQABAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAIACABIARAJIAIgFIgagNQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAIABABIAeAPIARgKQgCgDAAgFQAAgDACgFIgRgJIgeAQIgBAAQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAagNIgIgFIgRAJIgCAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAgBABAAIANgGIgPgJIgBgCIAAgDQABAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAIACABIAOAIIAAgPIAAgCIADgBIAAAAQABAAABAAQAAAAAAABQABAAAAABQAAABAAAAIABAUIAIAEIgBgdIABgCQAAAAAAgBQABAAAAAAQAAAAABAAQAAgBAAAAQABAAABABQAAAAABAAQAAABABAAQAAABAAABIABAhIARAKQAFgIAKgBIAAgSIgcgTQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAAAAAIACABIAZAPIAAgJIgRgLQgDgCACgCIADgCIACABIANAIIAAgRQAAgBAAgBQAAAAABgBQAAAAABAAQAAgBAAAAQABAAABABQAAAAAAAAQABABAAAAQAAABAAABIAAARIANgIIACgBQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQACACgDACIgRALIAAAJIAZgPIACgBQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAIgcATIAAASQAKABAFAIIARgKIABghQAAgBAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABABQAAAAAAAAQABAAAAAAQAAABAAAAIABACIgBAdIAIgEIABgUQAAAAAAgBQAAgBABAAQAAgBABAAQAAAAABAAIADABIAAACIAAAPIAOgIIACgBQAAAAABABQAAAAABAAQAAAAAAABQABAAAAAAIAAADIgBACIgPAJIANAGQABAAABABQAAAAAAABQABAAgBABQAAABAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgCAAIgRgJIgIAFIAaANIACACIgBADQAAAAAAABQAAAAgBAAQAAAAgBAAQAAABgBAAIgBAAIgegQIgQAJIABAIQAAAFgBADIAQAKIAegPIABgBQABAAAAABQABAAAAAAQABAAAAABQAAAAAAABIABACIgCACIgaANIAIAFIARgJIACgBQAAAAABABQAAAAABAAQAAAAAAABQABAAAAAAQAAABABABQAAABAAAAQgBABAAAAQgBABgBAAIgNAHIAPAIIABADIAAACQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAIgCAAIgOgIIAAAPQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAIgDABQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIgBgTIgIgFIABAdIgBADIgCABQgBAAgBgBQAAAAgBAAQAAgBgBAAQAAgBAAAAIgBgiIgRgJQgFAGgKACIAAATIAcASQAEABgDAEQAAAAAAABQAAAAgBAAQAAAAAAAAQgBABAAAAIgCgBIgZgQIAAAKIARAKIABACIAAACQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgCAAIgNgIIAAAQQAAABAAABQAAAAgBABQAAAAAAAAQgBABgBAAQAAAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAgBgAgKgKQgFAEAAAGQAAAHAFAEQAFAGAFgBQAHABAFgGQAEgEAAgHQAAgGgEgEQgFgFgHAAQgGAAgEAFg");
	this.shape_101.setTransform(17.8,43.6,1.1,1.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#99DCF3").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_102.setTransform(200.3,8.1,1.1,1.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#99DCF3").s().p("AgCBTIAAgQIgMAIIgDAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIAAgDIABgCIARgKIAAgKIgZAQIgCAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAgBQAAAAABgBQAAAAABgBIAcgSIAAgSQgKgCgFgHIgQAKIgCAhQAAAAAAABQAAABgBAAQAAAAgBABQAAAAgBAAIAAAAIgDgBIAAgDIABgcIgIAEIgBATQAAABAAABQAAAAgBAAQAAABgBAAQgBAAgBAAIgCgBIgBgCIABgPIgPAIIgBABQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBIAAgCIABgCIAPgJIgOgGQAAgBgBAAQAAgBgBAAQAAgBAAAAQABgBAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIACABIAQAIIAIgEIgZgNIgCgCIAAgDQABAAAAgBQAAAAAAAAQABAAAAgBQABAAABAAIABABIAdAPIARgKQgCgDAAgFIACgIIgRgJIgdAPIgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIAAgDIACgCIAZgNIgIgFIgQAJIgCAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBgBgBQAAgBAAAAQABgBAAAAQABAAAAgBIAOgHIgPgIIgBgCIAAgCQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIABAAIAPAJIgBgPIABgDIACgBQABAAABAAQABABAAAAQABAAAAABQAAABAAAAIABAUIAIAEIgBgcIAAgDIADgBQAAAAABAAQABAAAAABQABAAAAABQAAAAAAABIACAhIAQAKQAFgHAKgCIAAgTIgcgSQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAgCQAAgBABAAQAAAAAAAAQAAgBABAAQAAAAAAAAIACABIAZAPIAAgJIgRgKQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAIADAAIAMAIIAAgQQAAgBAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQABAAABAAQAAABABAAQAAABAAAAQABABAAABIAAAQIAMgIIABAAQABAAABAAQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAgBABIgPAKIAAAJIAXgPIADgBQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABACQAAABgBAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgbASIAAATQAIACAGAHIAQgKIACghQAAgBAAAAQAAgBABAAQAAgBABAAQABAAABAAIACABIABADIgCAcIAIgEIABgUQAAAAAAgBQAAgBABAAQAAAAABgBQABAAAAAAIADABIABADIgBAPIAOgJIACAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIABACIgCACIgOAIIAMAHQABABABAAQAAAAABABQAAAAAAABQgBABAAABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIgCAAIgRgJIgIAFIAaANIACACIgBADQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgCAAIgegPIgPAJIABAIQAAAFgBADIAPAKIAegPIACgBQAAAAABAAQAAABAAAAQABAAAAAAQAAABAAAAIABADIgCACIgaANIAIAEIARgIIACgBQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABABABQAAAAAAABQgBAAAAABQgBAAgBABIgMAGIAOAJIACACIgBACQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAIgCgBIgOgIIABAPIgBACIgDABQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAgBAAgBIgBgTIgIgEIACAcIgBADIgCABIgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAgBAAAAIgCghIgQgKQgGAHgIACIAAASIAbASQABABAAAAQABABAAAAQAAABAAABQgBAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAIgDAAIgXgQIAAAKIAPAKIACACIAAADQgBAAAAAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgBAAIgMgIIAAAQQAAABgBABQAAAAAAABQgBAAAAABQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBgAgLgLQgEAFAAAGQAAAHAEAEQAFAFAGAAQAGAAAGgFQAEgEAAgHQAAgGgEgFQgFgEgHAAQgGAAgFAEg");
	this.shape_103.setTransform(200.3,8.1,1.1,1.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#99DCF3").s().p("AgDB8IAAgPIgIAFIgDgFIALgIIAAgIIgNAJIgEgGIARgLIAAgKIgTANIgDgGIAWgPIAAgOIgLgVIgHAMIAGAVIgGABIgEgQIgCAEIAEAPIgFABIgDgKIgFAKIgFgDIAGgJIgKACIgCgFIAPgEIACgEIgPAFIgCgFIAWgGIAHgMIgYAAIgOAIIgBAbIgGAAIABgXIgIAEIgBAVIgHAAIAAgRIgHAEIAAAPIgHgBIAAgKIgMAIIgEgGIANgIIgJgEIADgGIANAGIAHgEIgPgHIADgGIATAJIAIgEIgVgLIADgGIAZANIAOgIIALgUIgOAAIgPAPIgEgEIAMgLIgEAAIgLAKIgEgDIAHgHIgLAAIAAgFIALAAIgHgHIAEgDIALAKIAEAAIgMgLIAEgEIAPAPIAOAAIgNgVIgMgHIgZANIgDgGIAVgLIgIgEIgTAJIgDgGIAPgHIgHgEIgNAGIgDgGIAJgEIgNgIIAEgGIAMAIIAAgLIAHAAIAAAPIAHAEIAAgRIAHAAIABAVIAIAEIgBgXIAGAAIABAbIAOAIIAYAAIgHgMIgWgGIACgFIAPAFIgCgEIgPgEIACgFIAKACIgGgJIAFgDIAFAKIADgKIAFABIgEAPIACAEIAEgQIAGABIAAABIgGAUIAHAMIALgUIAAgPIgWgPIADgGIATANIAAgKIgRgLIAEgGIANAJIAAgIIgLgIIADgFIAIAFIAAgPIAGAAIAAAPIAJgFIADAFIgMAIIAAAIIAPgJIADAGIgSALIAAAKIAUgNIAEAGIgYAPIAAAOIAMAVIAHgMIgFgVIAEgBIAFAQIACgEIgEgPIAGgBIACAKIAGgKIAEADIgFAJIAJgCIABAFIgPAEIgCAEIARgFIABAFIgVAGIgHAMIAYAAIAMgIIACgbIAHAAIgBAXIAIgEIABgVIAHAAIgCARIAHgEIABgPIAHAAIgBALIAOgIIADAGIgNAIIAJAEIgDAGIgNgGIgHAEIAPAHIgDAGIgTgJIgIAEIAVALIgEAGIgYgNIgNAIIgMAUIAOAAIAQgPIADAEIgMALIAFAAIALgKIADADIgHAHIALAAIAAAFIgLAAIAHAHIgDADIgLgKIgFAAIAMALIgDAEIgQgPIgNAAIAMAVIAMAHIAYgNIAEAGIgVALIAIAEIATgJIADAGIgPAHIAHAEIANgGIADAGIgJAEIANAIIgDAGIgOgIIABAKIgHABIgBgPIgHgEIACARIgHAAIgBgVIgIgEIABAXIgHAAIgCgbIgMgIIgYAAIAHAMIAVAGIgBAFIgRgFIACAEIAPAEIgBAFIgJgCIAFAJIgEADIgGgKIgCAKIgGgBIAEgPIgCgEIgFAQIgEgBIAAgBIAFgUIgHgMIgMAUIAAAPIAYAPIgEAGIgUgNIAAAKIASALIgDAGIgPgJIAAAIIAMAIIgDAFIgJgFIAAAPgAgZABIgNAVIAZAAIANAXIANgXIAaAAIgNgWIAMgVIgZAAIgMgXIgNAXIgaAAg");
	this.shape_104.setTransform(79,16.1,1.1,1.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#99DCF3").s().p("AgJAKQgFgDAAgHQAAgFAFgEQAEgFAFAAQAHAAAEAFQAEAEAAAFQAAAHgEADQgEAFgHAAQgFAAgEgFg");
	this.shape_105.setTransform(79,16.1,1.1,1.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#99DCF3").s().p("AAdBFIACgLIgEgHIgEAOIgEgCIAFgSIgBgCIgVAYIgCAAIgVgYIgCADIAFARIgEABIgEgNIgEAHIADALIgEAAIgCgGIgDAGIgEgCIADgGIgGACIgBgEIAKgDIAFgHIgOADIgBgEIASgFIABgCIgfgHIgBgCIAJgeIgDAAIgMANIgDgDIAJgKIgIAAIgHAHIgDgDIAEgEIgGAAIAAgDIAGAAIgEgEIADgEIAHAIIAJAAIgKgKIADgDIANANIACAAIgJgeIABgDIAfgGIgCgDIgRgEIABgEIANADIgEgHIgKgDIABgEIAGACIgDgGIAEgCIAAABIADAEIACgFIAEABIgDAKIAEAHIAEgOIAEABIgFASIACADIAVgYIACAAIAVAYIABgDIgEgSIAEgBIADAOIAEgHIgCgKIAEgBIABAFIADgFIAEACIAAAAIgDAGIAGgCIABAEIgKADIgEAHIANgDIABAEIgRAFIgBACIAeAGIACADIgKAeIADAAIANgNIADADIgKAKIAIAAIAIgIIADAEIgFAEIAGAAIAAADIgGAAIAFAEIgDADIgIgHIgIAAIAKAKIgDADIgNgNIgDAAIAKAeIgCACIgeAHIABACIARAGIgBADIAAAAIgNgDIAEAHIAKADIgBAEIgGgCIADAGIgEACIAAAAIgDgGIgBAGgAgTAoIATAWIAVgWIgGgJIgNAOIgCAAIgOgOgAgMAaIAMAPIANgPIgFgJIgCAGIgDAAIADgJIgGgKIgEAKIACAJIgDAAIgCgGgAAoAWIgBACIgUAEIAFAKIAegHIgJgdIgLAAgAg1AfIAeAHIAFgKIgTgEIgCgCIAGgUIgKAAgAARAYIASgDIgFgTIgLAAIAFAEIgDADIgGgHIgLAAIAFAKIAJACIAAADIgGgCgAgiAVIATADIAFgJIgGACIgBgDIAJgCIAFgKIgKAAIgHAHIgCgDIAEgEIgKAAgAATgcIAUAFIABACIgGAUIALAAIAJgdIgegHgAAYgFIgFAEIALAAIAFgTIgSgDIgFAJIAGgCIAAADIgJACIgFAKIALAAIAGgHgAgNgBIAKAAIgFgKIgJgCIABgDIAGACIgFgJIgTADIAGATIAKAAIgEgEIACgDgAghgBIgGgUIACgCIATgFIgFgJIgeAHIAKAdIAKAAgAgCgWIgCAKIAEAJIAGgJIgDgKIADgBIACAGIAFgJIgNgOIgMAOIAFAJIACgGgAACgtIANAPIAGgJIgVgWIgTAWIAFAJIAOgPg");
	this.shape_106.setTransform(160.2,8.2,1.1,1.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#99DCF3").s().p("AAYA5IACgIIgEgHIgDALIgDAAIAEgPIgBgCIgSAUIgBAAIgSgUIgBACIAEAOIgEABIgDgLIgDAHIACAIIgDABIgCgFIgCAFIgDgCIACgFIgFABIgBgDIAJgCIADgGIgLACIgBgDIAPgEIABgCIgagFIgBgDIAAAAIAIgYIgCAAIgLALIgCgEIAIgHIgHAAIgGAGIgDgDIAEgDIgFAAIAAgDIAFAAIgEgDIADgDIAGAGIAHAAIgIgIIACgDIALALIACAAIgIgZIABgCIAagFIgBgDIgPgDIABgEIALADIgDgGIgJgCIABgEIAFACIgCgFIADgBIACAEIACgFIADABIgCAIIADAHIAEgMIADABIgEAOIABACIASgTIABAAIASATIABgCIgEgOIAEgBIADALIADgGIgCgIIADgBIACAFIACgEIADABIgCAFIAFgCIABAEIgJACIgDAGIALgDIABAEIgPADIgBADIAaAFIABACIgIAZIACAAIALgKIACACIgIAIIAHAAIAGgGIADADIgEADIAFAAIAAADIgFAAIAEADIgDADIgGgGIgHAAIAIAIIgCADIgLgLIgCAAIAIAYIgBADIgaAFIABACIAPAFIgBADIAAgBIgLgCIADAGIAJACIgBADIgFgBIACAFIgDACIgCgFIgCAFgAgQAhIAQATIARgTIgEgIIgMANIgBAAIgMgNgAgKAWIAKAMIALgMIgFgIIgBAGIgDgBIACgIIgEgHIgEAHIADAIIgDABIgBgGgAAiASIgCACIgQADIAEAIIAZgFIgIgYIgJAAgAgsAaIAZAFIAEgIIgQgDIgCgCIAAgBIAGgPIgJAAgAAOAVIAQgEIgFgPIgJAAIAEADIgCACIgGgFIgJAAIAFAHIAHADIAAACIgFgBgAgdARIAQAEIAEgIIgFABIAAgCIAHgDIAFgHIgJAAIgGAFIgCgCIAEgDIgJAAgAAQgXIAQADIACADIgGAQIAJAAIAIgYIgZgFgAAUgEIgEADIAJAAIAFgPIgQgEIgEAIIAFgBIAAACIgHACIgFAIIAJAAIAGgFgAgLgBIAJAAIgFgIIgHgCIAAgCIAFABIgEgIIgQAEIAFAPIAJAAIgEgDIACgCgAgbgBIgGgQIACgDIAQgDIgEgHIgZAFIAIAYIAJAAgAgBgSIgDAHIAEAIIAEgIIgCgHIADgBIABAFIAFgHIgLgMIgKAMIAFAHIABgFgAABglIAMANIAEgIIgRgTIgQATIAEAIIAMgNg");
	this.shape_107.setTransform(268.4,22.1,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]}).wait(306));

	// Слой 14
	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("A9SWqMAAAgtTMA6lAAAMAAAAtTg");
	this.shape_108.setTransform(187.5,145);

	this.timeline.addTween(cjs.Tween.get(this.shape_108).wait(306));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(187,126.4,385.5,309.1);
// library properties:
lib.properties = {
	width: 375,
	height: 290,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/375x290_atlas_.jpg", id:"375x290_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;