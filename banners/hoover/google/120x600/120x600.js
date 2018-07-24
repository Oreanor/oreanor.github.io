(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"120x600_atlas_P_", frames: [[0,91,100,73],[152,0,50,225],[0,0,150,89]]},
		{name:"120x600_atlas_NP_", frames: [[0,0,240,170],[242,0,160,224],[0,172,220,153]]}
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



(lib.hoov2 = function() {
	this.spriteSheet = ss["120x600_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pic0 = function() {
	this.spriteSheet = ss["120x600_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pic1 = function() {
	this.spriteSheet = ss["120x600_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.pic2a = function() {
	this.spriteSheet = ss["120x600_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.pic2b = function() {
	this.spriteSheet = ss["120x600_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.pic3 = function() {
	this.spriteSheet = ss["120x600_atlas_NP_"];
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


(lib.xxxc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiaE4ICqpvICLAAIipJvg");
	this.shape.setTransform(200.4,35.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CB0927").s().p("AjBFOICzqbIDQAAIizKbg");
	this.shape_1.setTransform(198.4,80.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D1D1D1").s().p("AkLHOIBGkCIDQAAICzqZIBOAAIj4Obg");
	this.shape_2.setTransform(198.8,93.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DC052B").s().p("AxhHLIgBuUMAjFAAAIj2OUg");
	this.shape_3.setTransform(112.3,68.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.xxxc, new cjs.Rectangle(0,4.6,225.6,135.4), null);


(lib.xfbdfb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AARAXIAAgkIgOAkIgGAAIgNgmIAAAmIgIAAIAAgtIANAAIALAkIAOgkIALAAIAAAtg");
	this.shape.setTransform(103.6,8.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AASAXIAAgtIAIAAIAAAtgAgZAXIAAgtIAIAAIAAASIAKAAQAJAAAFAEQAFACAAAHQAAAGgEAEQgFAEgIAAgAgRARIAIAAQAIAAACgCQADgCAAgEQAAgDgCgCQgCgDgIAAIgJAAg");
	this.shape_1.setTransform(97.3,8.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AALAXIAAgUIgVAAIAAAUIgIAAIAAgtIAIAAIAAATIAVAAIAAgTIAIAAIAAAtg");
	this.shape_2.setTransform(91.6,8.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AALAXIAAgUIgVAAIAAAUIgIAAIAAgtIAIAAIAAATIAVAAIAAgTIAIAAIAAAtg");
	this.shape_3.setTransform(86.6,8.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_4.setTransform(81.6,8.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AALAXIAAgiIgVAiIgIAAIAAgtIAIAAIAAAiIAVgiIAIAAIAAAtg");
	this.shape_5.setTransform(76.6,8.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAPAeIAAgNIgjAAIAAguIAIAAIAAAnIAUAAIAAgnIAIAAIAAAnIAGAAIAAAUg");
	this.shape_6.setTransform(71.7,9.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_7.setTransform(66.4,8.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgSAXIAAgtIASAAIAJABQADABADADQACADAAAEIgBAGQgCACgDACQAEAAACADQACADAAAEQAAAHgFADQgEADgIAAgAgKARIAKAAQAGAAACgCQADgBAAgEIgCgEQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAIgHAAIgJAAgAgKgDIAIAAIAGAAIADgCIACgEQAAgEgDgBQgCgCgGAAIgIAAg");
	this.shape_8.setTransform(61.7,8.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_9.setTransform(56.6,8.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AALAXIAAgUIgVAAIAAAUIgIAAIAAgtIAIAAIAAATIAVAAIAAgTIAIAAIAAAtg");
	this.shape_10.setTransform(51.7,8.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AALAXIAAgUIgVAAIAAAUIgIAAIAAgtIAIAAIAAATIAVAAIAAgTIAIAAIAAAtg");
	this.shape_11.setTransform(46.7,8.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AALAXIAAgiIgVAiIgIAAIAAgtIAIAAIAAAiIAVgiIAIAAIAAAtg");
	this.shape_12.setTransform(41.7,8.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AALAXIAAgUIgVAAIAAAUIgIAAIAAgtIAIAAIAAATIAVAAIAAgTIAIAAIAAAtg");
	this.shape_13.setTransform(34.2,8.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgOASQgHgGAAgMQAAgKAHgHQAFgGAJAAQAKAAAFAGQAHAGAAALIAAACIgjAAQABAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgFgGgAgIgNQgDADgBAGIAZAAQgBgFgCgDQgEgFgGAAQgEAAgEAEg");
	this.shape_14.setTransform(29.3,8.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AASAeIAAgNIgjAAIAAANIgHAAIAAgUIAEAAQAJgKgBgdIAgAAIAAAnIAFAAIAAAUgAgMAKIAYAAIAAggIgRAAQgBAWgGAKg");
	this.shape_15.setTransform(24,9.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAWAXIgJgOIgEgGQgCgBgDAAIAAAVIgHAAIAAgVQgBAAAAAAQgBAAgBAAQAAAAgBABQAAAAgBAAQgCABgCAFIgJAOIgIAAIAIgOQAFgIAFgBQgDgBgCgCIgEgJIgCgDIgDgBIgDAAIAAgGIABAAIAHAAIADACIAEAIIAEAIQACACAEAAIAAgUIAHAAIAAAUQAEAAABgCIAFgIQACgHADgCQACgBAFAAIACAAIAAAGIgCAAIgEABIgDAGIgDAGIgFADQAGABAFAIIAIAOg");
	this.shape_16.setTransform(18.5,8.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_17.setTransform(13,8.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgXAgIAAg/IAXAAIAKAAQAEABADACQAEADABAEQACAEAAAEQAAAJgEAEQgGAGgNAAIgQAAIAAAagAgPgBIAQAAQAIAAAEgDQADgDAAgFQAAgEgCgDQgDgDgDgBIgHgBIgQAAg");
	this.shape_18.setTransform(7.7,7.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAAAEIgFAKIgFgEIAHgIIgLgCIADgGIAKAEIgBgLIAFAAIgBALIAKgEIADAGIgMACIAIAIIgFAEIgGgKg");
	this.shape_19.setTransform(2.8,5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.xfbdfb, new cjs.Rectangle(-1,1,109.9,14.1), null);


(lib.pic2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hoov2();
	this.instance.parent = this;
	this.instance.setTransform(-57,36);

	this.instance_1 = new lib.pic2a();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-31,-205);

	this.instance_2 = new lib.pic2b();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-82,112);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic2, new cjs.Rectangle(-82,-205,150,406), null);


(lib.pic1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AskPZIAA+xIZJAAIAAexg");
	mask.setTransform(0.5,-13.5);

	// Слой 1
	this.instance = new lib.pic1();
	this.instance.parent = this;
	this.instance.setTransform(-80,-121);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic1_1, new cjs.Rectangle(-80,-112,160,197.1), null);


(lib.ClipGroup_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsFtQiXiXgBjWQABjVCXiXQCXiXDVgBQDWABCXCXQCYCXAADVQAADWiYCXQiXCXjWABQjVgBiXiXgAhuAqIhnGEQBjAzByAAQDHAACNiNQCMiNABjHQgBhGgThEgAnHCYQAbBSA2BDQA1BDBKAsIBflkIh8AnIglCKIgqANIAliKgAmIkUQhYB9AACXQAABDASA+ICXgwICPoTQiLA0hVB6gAh+nPIiPITIB8goIBVk6IAqgMIhUE4IIrivQgziOh6hXQh+haiaAAQhAAAg+ARg");
	mask.setTransform(51.7,51.7);

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9, null, null);


(lib.ClipGroup_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmhGXQhShVguhpQguhrAAhuQAAj0CuitQCtiuD0AAQD2AACtCuQCtCtAAD0QAAD2itCtQitCtj2AAQjvAAiyi5g");
	mask.setTransform(118.4,118.4);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#D52E3F","#D52E3F","#CE2E3D","#CC2E3C","#BA2E36","#B72C35","#AC2B30","#A62A2E","#9B2829","#76231D"],[0,0.047,0.047,0.078,0.161,0.439,0.502,0.694,0.835,1,1],43,42.9,-52.8,-52.9).s().p("AyfAAISfyfISgSfIygSgg");
	this.shape.setTransform(118.4,118.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_1, new cjs.Rectangle(59.2,59.2,118.4,118.4), null);


(lib.ClipGroup_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmYGZQipiqAAjvQAAjuCpiqQCqipDuAAQDvAACqCpQCqCqgBDuQABDviqCqQiqCqjvgBQjuABiqiqg");
	mask.setTransform(113.1,113.1);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#D52E3F","#C82D3A","#A5292D","#9B2829","#76231D"],[0,0.514,0.663,0.933,1,1],-37.8,-51.3,55.1,74.6).s().p("AxqiqIUVvAIPAUVI0VPAg");
	this.shape.setTransform(113.1,113.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_1, new cjs.Rectangle(55.3,55.3,115.7,115.7), null);


(lib.ClipGroup_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmRGRQimimAAjrQAAjqCminQCnilDqAAQDrAACmClQCnCnAADqQAADrinCmQimCnjrAAQjqAAining");
	mask.setTransform(111,111);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#D52E3F","#C82D3A","#A5292D","#9B2829","#76231D"],[0,0.224,0.459,0.89,1,1],-37,-50.2,54.1,73.3).s().p("AxVinIT9uuIOuT8Iz9Ovg");
	this.shape.setTransform(111,111);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_0, new cjs.Rectangle(54.3,54.3,113.6,113.5), null);


(lib.ClipGroup_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhPAPQgLgMAEgYIAfAAQABARAPgEQAJgCAHgLIAcAAQgTAggfAJQgIACgHAAQgMAAgHgHgAAkgVIA1AAIgRAHQgIACgHAAQgNAAgIgJg");
	mask.setTransform(8.8,2.2);

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_0, null, null);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AidBxQgKgNAFgaQAFgbASgVQASgWAXgGQAIgCAHAAQAQAAAHAMQAHANgEAWQgFAWgMATQgNATgSAKgAhnAaQgVAHgGAgQgFAbAOAAIAFgBQAVgGAGggQADgSgFgGQgDgEgEAAIgFABgAjZBxQAHgJADgQQADgRgFgHQgEgFgIADQgIACgHAIQgJAKgDASQgCAJABAEIggAAIABgEQAGgbARgVQASgWAYgHQAIgCAGAAQAQAAAHANQAHANgEAXQgEASgJAQgAgsgTIAjgKIADBDIABAAIAihRIAkgLIg/CHIgkANgABRg8IBGgVIgGAfIglANIgDAPIAfgMIgFAfIggAJIgDAPIAmgOIgIAkIhIAWgAC4hcIBDgTIALgBQALAAAFAGQAFAHgDANQgFAYgSALQANACgDAYIgBAMQgBAJABADIgjAJIABgRQABgLgBgEQgCgHgJADIgQABIgKAxIgkAKgADlhOIgQAFIgFAYIASgFQAPgEADgMQACgJgIAAIgJABg");
	mask.setTransform(28.2,11.3);

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, null, null);


(lib.ghggg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCA0IgVg4IgLA2IgRAAIAUhlIAKAAIAVBEIAWhEIAJAAIAVBlIgRAAIgLg2IgVA4g");
	this.shape.setTransform(13.7,79.3,0.665,0.664);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAfAzIAAhlIASAAIAABlgAgxAzIAAhlIASAAIAAAmIANgBQASAAAJAJQAJAHAAAQQAAAOgJAKQgJAIgTAAgAgfACIAAAiIAJAAQANAAAGgFQADgFAAgIQAAgIgEgFQgGgEgLAAg");
	this.shape_1.setTransform(6,79.2,0.665,0.664);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAVAzIAAguIgoAAIAAAuIgTAAIAAhlIATAAIAAAoIAoAAIAAgoIASAAIAABlg");
	this.shape_2.setTransform(-1.3,79.2,0.665,0.664);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAUAzIAAguIgnAAIAAAuIgSAAIAAhlIASAAIAAAoIAnAAIAAgoIASAAIAABlg");
	this.shape_3.setTransform(-7.8,79.2,0.665,0.664);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghAmQgLgOAAgYQAAgVAMgQQAMgPAUAAQAVAAAMANQAMAPAAAYQAAAYgMAOQgNAPgVAAQgVAAgLgPgAgSgaQgHAJAAARQAAASAGAKQAGAJAMAAQAMAAAIgKQAHgJAAgSQAAgkgaAAQgMAAgGAKg");
	this.shape_4.setTransform(-14.4,79.2,0.665,0.664);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgnA1IAAhnIASAAIAABDIA1hFIAIAAIAABnIgTAAIAAhEIg0BGg");
	this.shape_5.setTransform(-21.1,79.3,0.665,0.664);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAaBCIAAgeIhDAAIAAhlIASAAIAABWIAjAAIAAhWIASAAIAABWIAMAAIAAAtg");
	this.shape_6.setTransform(-27.4,80.2,0.665,0.664);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAZA0IgIgVIgiAAIgHAVIgUAAIAphnIAHAAIApBngAgLARIAXAAIgMgkg");
	this.shape_7.setTransform(-33.9,79.2,0.665,0.664);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgiA0IAAhmIAdgBQAQAAAIAHQAKAHgBAMQAAANgNAHQATAGAAAUQAAAOgKAIQgKAJgRAAgAgQAlIAKAAQAJAAAHgEQAGgEgBgKQAAgJgEgEQgGgEgLAAIgKAAgAgQgjIAAAYIAKAAQAQAAAAgNQAAgMgPAAg");
	this.shape_8.setTransform(-39.6,79.2,0.665,0.664);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AghAmQgLgOAAgYQAAgVAMgQQAMgPAUAAQAWAAALANQAMAOAAAZQAAAYgNAOQgMAPgVAAQgVAAgLgPgAgTgaQgGAKAAAQQAAASAGAKQAGAJAMAAQAMAAAIgKQAHgJAAgSQAAgkgaAAQgMAAgHAKg");
	this.shape_9.setTransform(-45.9,79.2,0.665,0.664);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAVAzIAAguIgoAAIAAAuIgSAAIAAhlIASAAIAAAoIAoAAIAAgoIARAAIAABlg");
	this.shape_10.setTransform(-52.6,79.2,0.665,0.664);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAUAzIAAguIgoAAIAAAuIgSAAIAAhlIASAAIAAAoIAoAAIAAgoIATAAIAABlg");
	this.shape_11.setTransform(-59,79.2,0.665,0.664);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgnA1IAAhnIASAAIAABDIA1hFIAIAAIAABnIgTAAIAAhEIg0BGg");
	this.shape_12.setTransform(-65.6,79.3,0.665,0.664);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAVAzIAAguIgoAAIAAAuIgSAAIAAhlIASAAIAAAoIAoAAIAAgoIARAAIAABlg");
	this.shape_13.setTransform(-75.1,79.2,0.665,0.664);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AggAzIAAhlIBBAAIAAAQIgvAAIAAAYIAhAAIAAAPIghAAIAAAeIAuAAIAAAQg");
	this.shape_14.setTransform(-81,79.2,0.665,0.664);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAiBCIAAgeIhDAAIAAAeIgQAAIAAgtIAHAAQAIgJAJgUQAJgUAIglIAuAAIAABWIALAAIAAAtgAgHgJQgIAUgIAKIAsAAIAAhHIgSAAQgDAWgHATg");
	this.shape_15.setTransform(-87.3,80.2,0.665,0.664);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AApAvQgEgFgCgKQgEgcgWAAIAAAvIgQAAIAAgvQgXAAgEAcQgCALgEAEQgFAFgIAAIgGgBIAAgQIACAAQAEAAABgBIADgIQABgKAGgHQAGgIAKgDQgTgDgEgVIgCgHQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAIgDAAIAAgQIAGgBQAJAAAEAEQAEAGACAKQAEAVAWABIAAgpIAQAAIAAApQAKAAAHgGQAHgGACgKQABgKAEgFQAFgFAIAAIAGABIAAAQIgCAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAIgCAHQgCAIgGAHQgEAGgKADQASAFAFAXQAAAGACACQACABADAAIACAAIAAAQIgFABQgJAAgFgFg");
	this.shape_16.setTransform(-95.2,79.2,0.665,0.664);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AghAmQgLgOAAgYQAAgVAMgQQAMgPAUAAQAVAAAMANQAMAPAAAYQAAAYgMAOQgNAPgVAAQgVAAgLgPgAgSgaQgHAJAAARQAAASAGAKQAGAJAMAAQAMAAAIgKQAHgJAAgSQAAgkgaAAQgMAAgGAKg");
	this.shape_17.setTransform(-103,79.2,0.665,0.664);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AghA0IAAhmIAVgBQAXAAAMAIQALAHAAAQQAAAigpAAIgHAAIAAAmgAgOgBIAHAAQALAAAGgEQAFgEAAgKQABgPgZAAIgFAAg");
	this.shape_18.setTransform(-109,79.2,0.665,0.664);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhKCtIBclZIA5AAIhbFZg");
	this.shape_19.setTransform(31.2,65,0.802,0.802);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CB0927").s().p("AhLB7IBCj1IBVAAIhCD1g");
	this.shape_20.setTransform(29.4,83.7,0.802,0.802);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D1D1D1").s().p("Ah3DfIA3jHIBVAAIBCj2IAhAAIh4G9g");
	this.shape_21.setTransform(28.5,91.7,0.802,0.802);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#DC052B").s().p("AzKDiIBjnDMAkyAABIh5HCg");
	this.shape_22.setTransform(-43.3,78.7,0.665,0.664);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ghggg, new cjs.Rectangle(-124.8,51.2,163.1,58.5), null);


(lib.eeer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AyvNDIAA3bMAlfAAAIAAXbg");
	mask.setTransform(120,83.5);

	// Слой 1
	this.instance = new lib.pic3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.091,1.091);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.eeer, new cjs.Rectangle(0,17.1,240,149.9), null);


(lib.dfgdfggg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMAZQgFgFgBgHIAHgBQABAGADADQADACAEAAQAEAAAEgDQADgDAAgGQAAgEgDgDQgDgEgFAAIgEABIABgFIABAAQADAAAEgCQAEgDAAgFQAAgDgDgDQgDgCgDAAQgEAAgDACQgCADgBAFIgHgBQABgHAFgEQAEgEAHAAQAEAAAEACQAEACACADQACAEAAAEQAAADgCADQgCADgEACQAFABADADQADAEAAAFQAAAIgGAFQgFAFgIAAQgHAAgFgEg");
	this.shape.setTransform(81.5,201.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMAYQgGgEAAgHIAHgBQABAGADACQADADAEAAQAEAAAEgEQADgEAAgGQAAgGgDgDQgEgDgEAAQgEAAgCACQgDABgBACIgHgBIAGgdIAbAAIAAAHIgWAAIgDAPQAFgDAFAAQAHAAAGAFQAFAEAAAIQAAAIgEAGQgGAHgJAAQgIAAgEgFg");
	this.shape_1.setTransform(77.1,201.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_2.setTransform(72.5,201.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMAXQgGgHABgQQAAgJACgGQABgHAFgDQAEgDAFAAQAFAAADACQADABADAEIAEAIIABANQAAAKgCAGQgDAGgDAEQgEADgHAAQgHAAgFgGgAgHgSQgEAFAAANQAAAOAEAFQADAEAEAAQAFAAADgEQADgFAAgOQAAgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_3.setTransform(68.2,201.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJAcQAAgHACgJQADgKAEgIQAEgIAGgHIgbAAIAAgGIAkAAIAAAFQgGAGgFAKQgGAIgCALQgCAHgBAIg");
	this.shape_4.setTransform(63.8,201.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMAXQgGgHABgQQAAgJABgGQACgHAFgDQAEgDAFAAQAFAAADACQADABADAEIAEAIIABANQAAAKgCAGQgCAGgFAEQgDADgHAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQADgFAAgOQAAgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_5.setTransform(59.3,201.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgMAXQgGgHAAgPQAAgPAGgIQAGgGAIAAQAGAAAFAEQAEADABAHIgHABQgBgFgCgBQgCgDgFAAIgFABQgDADgCAEQgCAFAAAJQADgEADgCIAHgCQAHAAAFAFQAFAEAAAJQAAAFgDAFQgCAEgEADQgEACgFAAQgIAAgFgGgAgGABQgEADAAAGIABAHQACADADACQADABACAAQAEAAADgDQAEgEAAgGQAAgGgEgDQgCgDgGAAQgDAAgDADg");
	this.shape_6.setTransform(54.8,201.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMAaQgEgEgBgHIAHgBQABAFACACQADACADAAQADAAACgBIAEgEIADgHIABgIIAAgCQgCAEgEACQgEACgDAAQgHAAgFgFQgFgEAAgJQAAgJAFgFQAFgFAIAAQAFAAAEADQAFADACAFQADAGAAAKQAAAKgDAHQgCAGgFAEQgEADgGAAQgGAAgFgDgAgHgTQgEAEAAAGQAAAGAEADQADADAEAAQAFAAADgDQADgDAAgGQAAgGgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_7.setTransform(50.4,201.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgJAcQgBgHADgJQADgKAEgIQAEgIAFgHIgbAAIAAgGIAkAAIAAAFQgFAGgFAKQgGAIgCALQgCAHAAAIg");
	this.shape_8.setTransform(46,201.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgKAcQAAgHADgJQACgKAFgIQAEgIAGgHIgbAAIAAgGIAkAAIAAAFQgGAGgGAKQgFAIgCALQgCAHgBAIg");
	this.shape_9.setTransform(41.5,201.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_10.setTransform(36.9,201.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgMAXQgFgHgBgQQAAgJACgGQACgHAFgDQADgDAGAAQAEAAAEACQAEABACAEIADAIIABANQAAAKgBAGQgCAGgFAEQgEADgGAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQADgFAAgOQAAgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_11.setTransform(32.6,201.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_12.setTransform(27.8,201.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_13.setTransform(20.8,201.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAIABQAFABADACQADACABADQACAEAAAEQAAAHgFAEQgEAFgNAAIgNAAIAAAYgAgNAAIANAAQAIAAADgDQADgDAAgFQAAgDgCgDQgCgCgCgBIgIgBIgNAAg");
	this.shape_14.setTransform(15.4,201.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgSAdIAAg5IAkAAIAAAHIgcAAIAAAyg");
	this.shape_15.setTransform(10.7,201.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_16.setTransform(5.1,201.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgMAYQgGgEAAgHIAHgBQABAGADACQADADAEAAQAFAAADgEQAEgEgBgGQABgGgEgDQgDgDgFAAQgEAAgCACQgDABgBACIgHgBIAGgdIAbAAIAAAHIgWAAIgDAPQAFgDAFAAQAHAAAGAFQAFAEAAAIQAAAIgEAGQgGAHgJAAQgHAAgFgFg");
	this.shape_17.setTransform(97.7,193.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_18.setTransform(92.9,193.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgMAXQgGgHABgQQAAgJACgGQABgHAEgDQAFgDAFAAQAEAAAEACQADABADAEIAEAIIABANQAAAKgDAGQgCAGgDAEQgFADgGAAQgIAAgEgGgAgHgSQgEAFAAANQAAAOAEAFQADAEAEAAQAFAAADgEQADgFABgOQgBgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_19.setTransform(88.8,193.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgSAdIABgFIAEgIIAJgIQAJgIADgEQADgEABgEQAAgEgDgDQgEgDgEAAQgFAAgCADQgDADgBAGIgGgBQAAgIAFgEQAFgFAHAAQAIAAAFAFQAFAEAAAHIgBAHQgCADgDADQgDAEgIAGIgHAHIgDAEIAbAAIAAAHg");
	this.shape_20.setTransform(84.3,193.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_21.setTransform(79.6,193.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgNAYQgFgEAAgHIAHgBQABAGADACQADADAEAAQAFAAADgEQADgEAAgGQAAgGgDgDQgDgDgFAAQgDAAgDACQgDABgBACIgHgBIAFgdIAcAAIAAAHIgWAAIgDAPQAGgDAEAAQAIAAAEAFQAGAEAAAIQAAAIgFAGQgFAHgJAAQgHAAgGgFg");
	this.shape_22.setTransform(75.5,193.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_23.setTransform(70.8,193.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgMAXQgGgHAAgQQAAgJADgGQACgHADgDQAFgDAFAAQAFAAADACQADABADAEIADAIIABANQAAAKgCAGQgCAGgDAEQgFADgGAAQgHAAgFgGgAgHgSQgDAFgBANQABAOADAFQADAEAEAAQAFAAADgEQAEgFAAgOQAAgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_24.setTransform(66.5,193.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgKAcQAAgHADgJQACgKAFgIQAEgIAGgHIgcAAIAAgGIAlAAIAAAFQgGAGgGAKQgFAIgCALQgCAHgBAIg");
	this.shape_25.setTransform(62.1,193.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgJAcQgBgHADgJQADgKAEgIQAEgIAFgHIgbAAIAAgGIAkAAIAAAFQgFAGgFAKQgGAIgCALQgCAHAAAIg");
	this.shape_26.setTransform(57.7,193.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_27.setTransform(50.3,193.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_28.setTransform(44.5,193.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAQAdIAAgsIgeAsIgHAAIAAg5IAGAAIAAAtIAegtIAIAAIAAA5g");
	this.shape_29.setTransform(38.8,193.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_30.setTransform(32.6,196.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgNAYQgFgFAAgHQAAgGADgEQADgCAFgCQgEgBgDgDQgCgDAAgEQABgHAEgEQAEgEAHAAQAHAAAFAEQAEAEABAHQAAAEgCADQgDADgEABQAGACACADQADAEAAAFQAAAHgFAFQgFAFgJAAQgHAAgGgFgAgHAEQgEADABAFIABAGIAEAEIAFABQAFAAAEgDQADgDAAgFQAAgFgDgDQgEgEgFAAQgEAAgDAEgAgGgUQgCADAAADQAAAEACADQADADADAAQAEAAADgDQACgDAAgDQAAgEgCgDQgDgCgEAAQgDAAgDACg");
	this.shape_31.setTransform(29.2,193.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_32.setTransform(23.8,196.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAQAbIAAgMIgfAAIAAAMIgGAAIAAgSIADAAQAIgJAAgaIAbAAIAAAjIAFAAIAAASgAgLAJIAWAAIAAgdIgPAAQgBAUgGAJg");
	this.shape_33.setTransform(20.2,195.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgDAHQAAgBABAAQAAAAABgBQAAAAABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_34.setTransform(14.6,196.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAKAdIAAgfIgSAfIgIAAIAAgpIAHAAIAAAfIATgfIAHAAIAAApgAgGgUQgDgDgBgEIAFAAIACAEIADAAIAFAAIACgEIAFAAQgBAEgCADQgEADgEAAQgFAAgCgDg");
	this.shape_35.setTransform(11.4,193.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgKAEIAAgHIAVAAIAAAHg");
	this.shape_36.setTransform(7.8,194.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgSAdIABgFIAEgIIAJgIQAJgIADgEQADgEABgEQAAgEgDgDQgEgDgEAAQgFAAgCADQgDADgBAGIgGgBQAAgIAFgEQAFgFAHAAQAIAAAFAFQAFAEAAAHIgBAHQgCADgDADQgDAEgIAGIgHAHIgDAEIAbAAIAAAHg");
	this.shape_37.setTransform(4.2,193.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAKAcIAAgeIgTAeIgHAAIAAgoIAHAAIAAAeIASgeIAIAAIAAAogAgHgUQgCgDgBgEIAFAAIACADIADABIAFgBIACgDIAFAAQgBAEgDADQgCACgGABQgDgBgEgCg");
	this.shape_38.setTransform(110.1,185.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAKAVIAAgfIgSAfIgIAAIAAgpIAHAAIAAAfIATgfIAHAAIAAApg");
	this.shape_39.setTransform(105.6,186.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAIAVIgIgNIgDgFIgEgBIAAATIgHAAIAAgpIAHAAIAAASQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQABgBACgHIADgGIADgCIAFgBIACAAIAAAGIgCAAIgEABIgCAFIgDAGQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAAAQADABAFAHIAHANg");
	this.shape_40.setTransform(101.9,186.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_41.setTransform(98,186.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAKAVIAAgTIgTAAIAAATIgHAAIAAgpIAHAAIAAASIATAAIAAgSIAHAAIAAApg");
	this.shape_42.setTransform(93.7,186.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAKAVIAAgfIgTAfIgHAAIAAgpIAHAAIAAAfIASgfIAIAAIAAApg");
	this.shape_43.setTransform(89.3,186.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAXAbIAAgMIgzAAIAAgpIAHAAIAAAjIAQAAIAAgjIAGAAIAAAjIAQAAIAAgjIAHAAIAAAjIAFAAIAAASg");
	this.shape_44.setTransform(83.9,187.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgNAQQgGgFABgLQgBgLAHgFQAGgFAGAAQAIAAAGAGQAFAGAAAJQAAAHgCAFQgCAFgFACQgEADgGAAQgHAAgGgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQAEgEgBgIQABgHgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_45.setTransform(78.2,186.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAIABQAFABADACQADACABADQACAEAAAEQAAAHgFAEQgEAFgNAAIgNAAIAAAYgAgNAAIANAAQAIAAADgDQADgDAAgFQAAgDgCgDQgCgCgCgBIgIgBIgNAAg");
	this.shape_46.setTransform(73.4,185.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAQAbIAAgMIgfAAIAAAMIgGAAIAAgSIADAAQAIgJAAgaIAbAAIAAAjIAFAAIAAASgAgLAJIAVAAIAAgdIgOAAQgBAUgGAJg");
	this.shape_47.setTransform(66,187.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgPAJIAGgBQABAEADACQADACACAAQAEAAACgCQADgCAAgDQAAgBAAAAQAAgBAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAIgFAAIgBAAIAAgFIAFAAIADgCQAAAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQgCgCgDAAQgFAAgCAHIgHgBQADgMALAAQAHAAAEAEQADAEABAFQAAAFgGADQAEAAACADQABADAAADQAAAGgEADQgEAEgIAAQgNAAgCgNg");
	this.shape_48.setTransform(61.9,186.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgMAQQgGgGAAgKQAAgJAGgGQAFgGAHAAQAJAAAFAGQAFAGAAAJIAAACIgeAAQABAHADADQADAEAEAAQAFAAACgCQADgCACgFIAHABQgCAHgEADQgFAEgIAAQgHAAgFgGgAgHgMQgDAEAAAFIAWAAQgBgFgCgDQgDgEgGAAQgDAAgEADg");
	this.shape_49.setTransform(57.9,186.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgNAQQgGgFABgLQgBgLAHgFQAGgFAGAAQAIAAAGAGQAFAGAAAJQAAAHgCAFQgCAFgFACQgEADgGAAQgHAAgGgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQAEgEgBgIQABgHgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_50.setTransform(53.4,186.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgRAdIAAg4IAGAAIAAAFQACgDADgCQADgBADAAQAGAAADADQAEACADAFQACAFAAAGQAAAHgCAEQgDAFgEACQgFADgEAAQgDAAgDgBQgDgCgBgCIAAAUgAgIgSQgDAEAAAIQAAAHADAEQADADAFAAQAEAAAEgEQACgEAAgHQAAgIgCgEQgEgEgEAAQgEAAgEAFg");
	this.shape_51.setTransform(49.1,187.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAPAdIAAgyIgdAAIAAAyIgHAAIAAg5IAsAAIAAA5g");
	this.shape_52.setTransform(43.9,185.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgDAHQAAAAABgBQAAAAABgBQAAAAABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_53.setTransform(37.7,188.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgPASQgDgDAAgFQAAgDABgDQABgCADgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgDACQgCACgBAEIgHgBIADgHQACgDAEgBQAFgCAEAAQAFAAADACQAEABACACIABAFIABAGIAAAIIAAANIACAFIgHAAQgCgCAAgDIgHAEIgHACQgHAAgEgEgAAAADIgHABIgDACIAAAEQAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAQACACAFAAQADAAADgCQADgBABgDQACgDAAgEIAAgDIgKADg");
	this.shape_54.setTransform(34.4,186.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgQAVIAAgpIAQAAIAIABQADABACADQACADAAADIgBAFIgEAEQADAAACADQACACAAAEQgBAGgDADQgEADgHAAgAgJAPIAJAAIAHgBQACgCABgDIgCgEQAAAAAAgBQgBAAAAAAQgBgBAAAAQAAAAgBAAIgGAAIgIAAgAgJgCIAHAAIAGgBIACgCQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgDgDgCIgHgBIgHAAg");
	this.shape_55.setTransform(30.2,186.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAIAVIgIgNIgDgFIgEgBIAAATIgHAAIAAgpIAHAAIAAASQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQABgBACgHIADgGIADgCIAFgBIACAAIAAAGIgCAAIgEABIgCAFIgDAGQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAAAQADABAFAHIAHANg");
	this.shape_56.setTransform(26.4,186.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_57.setTransform(22.5,186.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgNAQQgFgFgBgLQABgLAGgFQAGgFAGAAQAIAAAGAGQAGAGgBAJQAAAHgCAFQgDAFgEACQgFADgFAAQgHAAgGgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAFAAAEgEQAEgEAAgIQAAgHgEgEQgEgEgFAAQgEAAgEAEg");
	this.shape_58.setTransform(18.2,186.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAUAdIAAgvIgRAvIgFAAIgRgwIAAAwIgHAAIAAg5IALAAIAOAoIABAJIADgKIAOgnIAKAAIAAA5g");
	this.shape_59.setTransform(12.6,185.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_60.setTransform(6.1,188.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgLAVIAAgpIAXAAIAAAGIgQAAIAAAjg");
	this.shape_61.setTransform(3.7,186.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgDAHQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_62.setTransform(113.4,180.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgMAaQgEgEgBgHIAHgBQABAFACACQADACADAAQADAAACgBIAEgEIADgHIABgIIAAgCQgCAEgEACQgEACgDAAQgHAAgFgFQgFgEAAgJQAAgJAFgFQAFgFAIAAQAFAAAEADQAFADACAFQADAGAAAKQAAAKgDAHQgCAGgFAEQgEADgGAAQgGAAgFgDgAgHgTQgEAEAAAGQAAAGAEADQADADAEAAQAFAAADgDQADgDAAgGQAAgGgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_63.setTransform(110.1,177.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_64.setTransform(105.3,177.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_65.setTransform(101,177.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgMAYQgFgEgBgHIAHgBQABAGADACQADADAEAAQAEAAAEgEQADgEABgGQgBgGgDgDQgEgDgEAAQgDAAgDACQgDABgCACIgGgBIAFgdIAcAAIAAAHIgWAAIgDAPQAFgDAFAAQAIAAAEAFQAGAEAAAIQAAAIgFAGQgFAHgJAAQgIAAgEgFg");
	this.shape_66.setTransform(96.8,178);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_67.setTransform(92,177.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_68.setTransform(87.5,177.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgBASIAKgSIgKgRIAFAAIANARIgNASgAgQASIALgSIgLgRIAGAAIALARIgLASg");
	this.shape_69.setTransform(81.2,178.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_70.setTransform(77.9,180.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgRAdIAAg5IAkAAIAAAHIgdAAIAAAyg");
	this.shape_71.setTransform(74.9,177.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_72.setTransform(71.4,180.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_73.setTransform(67.3,177.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_74.setTransform(63.4,180.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgMAZQgGgDgDgHQgDgHAAgIQAAgJADgGQAEgHAGgEQAGgCAHAAQAIAAAGADQAGAFACAIIgHACQgCgHgEgCQgEgDgFAAQgGAAgEADQgFADgCAGQgBAFAAAFQAAAHACAFQACAFAEADQAFADAEAAQAGAAAFgEQAEgDACgIIAHACQgCAKgGAFQgGAEgJAAQgJAAgFgEg");
	this.shape_75.setTransform(59.3,177.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAQAdIAAgsIgeAsIgHAAIAAg5IAGAAIAAAtIAegtIAIAAIAAA5g");
	this.shape_76.setTransform(51.4,177.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AATAjIAAgNIglAAIAAANIgHAAIAAgUIAFAAQAHgKAAgfIAAgJIAhAAIAAAyIAGAAIAAAUgAgGgYIgBAUQgCALgEAIIAaAAIAAgrIgTAAg");
	this.shape_77.setTransform(45.6,178.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_78.setTransform(40.2,177.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AASAdIgHgSIgXAAIgGASIgIAAIAWg5IAHAAIAYA5gAgDgLIgGAQIASAAIgGgPIgDgLIgDAKg");
	this.shape_79.setTransform(34.6,177.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AALAdIgKgQQgDgGgDgDQgDgCgEAAIAAAbIgHAAIAAg5IAHAAIAAAaQAGAAABgCQADgCACgIIAEgIIAFgEQACgCADAAIAGABIAAAGIgCAAIgCAAQgDAAgCACIgFAHQgCAIgCABIgEADQAEABAGAJIAMATg");
	this.shape_80.setTransform(29.9,177.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AALASIgLgSIALgRIAGAAIgKARIAKASgAgDASIgNgSIANgRIAFAAIgJARIAJASg");
	this.shape_81.setTransform(25,178.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_82.setTransform(17.5,177.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_83.setTransform(11.3,177.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_84.setTransform(5.1,177.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dfgdfggg, new cjs.Rectangle(0,171.6,120,36.6), null);


(lib.hgj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#706F70").s().p("AgoApQgRgRAAgYQAAgXARgRQARgQAXgBQAYAAARARQARARAAAXQAAAYgRARQgQARgZAAQgXAAgRgRgAgigjQgPAQAAATQAAAUAPAQQAOAOAUAAQAUAAAPgOQAPgQAAgUQAAgTgPgQQgPgOgUAAQgTAAgPAOgAAQAgIgBgBIAAgIQAAgLgGgEQgDgBgIAAIgJAAIAAAZIgLAAIAAg/IAWAAQALAAAFADQAKADAAANQAAAHgGAFQgDABgGABQAHABADAFQAEAFAAAFIAAAFIABAHIAAACgAgLAAIAKAAQAGgBAEgBQAFgCABgHQAAgIgEgCQgEgDgJAAIgJAAg");
	this.shape.setTransform(64.1,64.1,1.2,1.2);

	this.instance = new lib.ClipGroup_9();
	this.instance.parent = this;
	this.instance.setTransform(1.2,0.6,1.2,1.2,0,0,0,51.6,51.6);

	this.instance_1 = new lib.ClipGroup_1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(22.3,3,1.2,1.2,0,0,0,28.2,11.3);

	this.instance_2 = new lib.ClipGroup_2_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1.1,19.3,1.2,1.2,0,0,0,8.8,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlsFtQiYiXABjWQgBjVCYiYQCXiWDVgBQDWABCXCWQCYCYAADVQAADWiYCXQiXCYjWgBQjVABiXiYgAhuAqIhoGEQBlAyBxAAQDHAACNiMQCNiNAAjHQAAhGgVhEgAnHCYQAbBSA2BDQA1BDBKAsIBflkIh8AnIglCKIgqANIAliJgAmIkUQhYB9AACXQAABCASA/ICXgwICOoSQiKAzhVB6gAh+nPIiPISIB8gnIBVk6IAqgMIhUE4IIrivQgziNh6hYQh9haibAAQhAAAg+ARg");
	this.shape_1.setTransform(-0.2,1,1.2,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AidBxQgJgMAEgbQAGgbASgWQASgWAXgFQAXgHALAMQAMANgGAbQgEAWgNATQgNATgRAKgAhnAaQgVAHgGAgQgDARAFAHQAEAEAIgCQAVgGAGggQAEgSgGgGQgDgDgEAAIgFAAgAjZBxQAIgJACgQQAEgSgGgGQgEgFgIACQgHADgHAIQgJAKgEASQgBAJAAAEIgfAAIABgEQAFgbASgVQASgWAXgHQAXgHAMANQALANgGAcQgEASgJAQgAgsgUIAkgJIADBDIAAAAIAihRIAkgMIg+CIIglANgABRg8IBHgWIgHAgIglANIgCAPIAfgMIgGAfIggAJIgDAPIAngOIgIAkIhJAWgAC5hdIBCgSQAQgEAIAGQAJAGgDARQgFAXgSAMQANABgDAYIgCANQgBAJABADIgjAJQAAgHABgKQACgLgBgEQgCgHgJADIgQABIgLAwIgkALgADmhOIgQAFIgGAYIATgFQAPgEADgMQABgHgDgBIgFgBIgIABg");
	this.shape_2.setTransform(20.8,3.3,1.2,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhPAPQgLgMAEgYIAfAAQABAJAFADQAEADAGgCQAKgEAGgJIAcAAQgTAggfAJQgIACgHAAQgMAAgHgHgAAkgVIA1AAQgKAFgHACQgJACgHAAQgNAAgHgJg");
	this.shape_3.setTransform(-2.4,19.6,1.2,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#77231F").s().p("AlsFtQiYiXABjWQgBjVCYiXQCXiYDVAAQDWAACYCYQCXCXAADVQAADWiXCXQiYCYjWAAQjVAAiXiYgAhuAqIhoGFQBlAyBxAAQDHAACNiNQCNiNAAjHQAAhHgVhDgAnHCYQAbBSA2BDQA2BDBJAsIBflkIh8AnIglCKIgpANIAkiJgAmIkUQhYB8AACYQAABCASA/ICYgwICNoSQiKA0hVB5gAh+nPIiPISIB9gnIBUk6IAqgMIhUE5IIriwQgziNh6hYQh9haibAAQhCAAg8ARg");
	this.shape_4.setTransform(1.5,2.1,1.2,1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#77231F").s().p("AjPBYQAEgSgGgGQgEgFgIACQgVAGgGAhIgBANIgfAAIAAgEQAGgbARgVQASgWAYgHQAXgHALANQAMANgGAbQgDATgKAQIgdAAQAIgLACgOgAidBxQgKgNAFgaQAGgbARgWQASgWAYgFQAXgHALAMQALANgFAbQgEAWgNATQgNATgSAKgAhnAaQgIACgHAIQgJALgDASQgEARAGAGQAEAFAIgCQAVgHAGggQAEgRgGgGQgDgDgFAAIgEAAgAgsgUIAjgJIAEBDIAihSIAkgLIg+CIIglANgABRg8IBGgWIgGAfIglAOIgDAPIAfgMIgFAfIggAJIgDAPIAmgOIgIAkIhIAWgAC4hdIBDgSQAQgEAIAGQAJAGgDARQgFAXgTAMQAOABgDAYQgEAVACAEIgjAJQAAgHABgKQACgLgBgEQgCgHgKADIgQABIgKAwIgkALgADmhOIgRAFIgFAYIASgFQAQgFACgMQACgIgIAAIgIABg");
	this.shape_5.setTransform(22.5,4.5,1.2,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#77231F").s().p("AhPAPQgLgMAEgZIAfAAQAAAKAFADQAEADAGgCQAJgDAIgLIAcABQgTAggfAJQgIADgHAAQgMAAgHgIgAAkgWIA0AAQgIAGgJACQgIACgGAAQgOAAgHgKg");
	this.shape_6.setTransform(-0.8,20.7,1.2,1.2);

	this.instance_3 = new lib.ClipGroup_3_0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.1,0.1,1.2,1.2,0,0,0,111,111);

	this.instance_4 = new lib.ClipGroup_4_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,1.2,1.2,0,0,0,113.1,113.1);

	this.instance_5 = new lib.ClipGroup_5_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0.1,0.1,1.2,1.2,0,0,0,118.4,118.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hgj, new cjs.Rectangle(-142,-142,284.2,284.2), null);


(lib.cvsd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJAKQgFgEAAgGQAAgFAFgFQAEgDAFAAQAHAAADADQAFAFAAAFQAAAGgFAEQgDAFgHAAQgFAAgEgFg");
	this.shape.setTransform(92.1,62.8,0.792,0.792);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeAiQgLgLAAgWQAAgUAMgNQANgMARAAQARgBANAMQALALAAASIgBAKIg+AAQABALAHAFQAGAGALABQANAAAHgIIAIAQQgLAIgUAAQgUAAgLgLgAgUgIIAqAAQgCgUgTAAQgRAAgEAUg");
	this.shape_1.setTransform(86,60.1,0.792,0.792);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AASArIAAglIgjAAIAAAlIgVAAIAAhVIAVAAIAAAgIAjAAIAAggIAVAAIAABVg");
	this.shape_2.setTransform(78.2,60.1,0.792,0.792);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgmBDIAAhXIAUAAIAAAzIA0g1IAFAAIAABXIgUAAIAAg0Ig0A2gAgRgsQgJgHgBgMIARgEQACAQAKgBQANAAABgOIAQADQgCAMgJAHQgHAGgMAAQgMAAgHgGg");
	this.shape_3.setTransform(70.4,58.4,0.792,0.792);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATAqQgDgDgCgEQgDAFgHACQgFAEgIgBQgOAAgIgHQgIgGAAgNQAAgPALgIQALgJAVAAIAIABQAAgQgSAAQgLAAgJAFIgEgQQAKgGAPABQATgBAJAKQAKAJAAAZIAAASQAAASAHAEQgDAFgDAAQgDABgEAAQgDAAgFgDgAgTARQAAAMAOAAQARAAAAgSIAAgIIgIgBQgXAAAAAPg");
	this.shape_4.setTransform(62.9,60.1,0.792,0.792);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiAkIAKgQQAKAJAOAAQAOAAAAgLQAAgMgQAAIgMAAIAAgPIAOABQAMAAAAgKQAAgFgDgCQgEgDgFAAQgLAAgMAHIgGgQQAPgIAPABQANAAAKAGQAIAHAAALQAAAPgOAEQAHABAFAGQAFAFAAAHQAAANgJAHQgMAHgPAAQgUAAgNgJg");
	this.shape_5.setTransform(56,60.1,0.792,0.792);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmAtIAAhXIAUAAIAAAzIAzg1IAGAAIAABXIgUAAIAAgzIg0A1g");
	this.shape_6.setTransform(49,60.1,0.792,0.792);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAfA7IAAgfIg8AAIAAAfIgSAAIAAgvIAIAAQAIgKAGgQQAEgRABgQIAAgLIA4AAIAABGIAMAAIAAAvgAgTAMIAkAAIAAg2IgUAAQgCAigOAUg");
	this.shape_7.setTransform(40.9,61.3,0.792,0.792);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgmAtIAAhXIAUAAIAAAzIA0g1IAFAAIAABXIgUAAIAAgzIgzA1g");
	this.shape_8.setTransform(28.8,60.1,0.792,0.792);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAUAsIgUgeIgUAeIgYAAIAigsIgggrIAYAAIASAcIAUgcIAWAAIgfAqIAiAtg");
	this.shape_9.setTransform(113.4,45.5,0.792,0.792);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AglAsIAAgRIADABQAEAAABgFQABgGAFgGQAFgFAHgCQgVgEAAgSQAAgLAIgHQAJgIARAAIAkACIAABWIgUAAIAAghIgFAAQgWAAgDATQgCAPgPAAgAgIgZQgDAEAAAFQAAAFAFAEQAFADAGAAIANAAIAAgYIgQAAQgGAAgEADg");
	this.shape_10.setTransform(105.8,45.5,0.792,0.792);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgmAuIAAhZIAVAAIAAA0IAzg2IAFAAIAABZIgUAAIAAg0Ig0A2g");
	this.shape_11.setTransform(98.4,45.5,0.792,0.792);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgdAsIAAhXIA7AAIAAASIgnAAIAABFg");
	this.shape_12.setTransform(91.6,45.5,0.792,0.792);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgTAMgNQALgMASAAQAUAAALAMQALANAAATQAAAWgLALQgMAMgTAAQgTAAgLgMgAgOgUQgGAHAAANQAAAdAUAAQAJAAAGgIQAGgIAAgNQAAgcgVAAQgIAAgGAIg");
	this.shape_13.setTransform(84.5,45.5,0.792,0.792);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgqAaQAJAAAFgGQAFgFAEgPQAEgSAAgUIAAgFIA6AAIAABWIgUAAIAAhGIgWAAQAAAQgDARQgEAQgFAIQgHAJgGACQgHADgLAAg");
	this.shape_14.setTransform(76.5,45.5,0.792,0.792);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgTAMgNQAKgMATAAQAUAAALAMQALANAAATQAAAVgLAMQgNAMgSAAQgTAAgLgMgAgOgUQgGAHAAANQAAAdAUAAQAJAAAGgIQAGgIAAgNQgBgcgUAAQgJAAgFAIg");
	this.shape_15.setTransform(69.1,45.5,0.792,0.792);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AASAsIAAgmIgjAAIAAAmIgVAAIAAhXIAVAAIAAAhIAjAAIAAghIAVAAIAABXg");
	this.shape_16.setTransform(61.4,45.5,0.792,0.792);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAVAsIgVgeIgUAeIgYAAIAigsIgfgrIAXAAIASAcIAUgcIAXAAIghAqIAjAtg");
	this.shape_17.setTransform(53.8,45.5,0.792,0.792);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgeAiQgMgLABgWQgBgUANgNQAMgMARAAQAUAAALALQALALAAASIgBAKIg9AAQAAALAHAFQAGAGALAAQANAAAIgHIAIAQQgMAIgVAAQgSAAgMgLgAgTgIIApAAQgDgTgSAAQgRAAgDATg");
	this.shape_18.setTransform(46.3,45.5,0.792,0.792);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgJAsIAAhFIgZAAIAAgSIBFAAIAAASIgZAAIAABFg");
	this.shape_19.setTransform(39.3,45.5,0.792,0.792);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgkAsIAAhWIAmgBQAOAAAJAGQAIAHAAALQAAAFgDAFQgDAFgHADQARAFAAAQQAAAMgJAFQgJAHgQAAgAgQAcIARABQAQAAAAgMQAAgGgFgDQgFgCgGAAIgRAAgAgQgbIAAATIAQAAQAOAAAAgKQAAgEgEgDQgDgDgGAAg");
	this.shape_20.setTransform(28.6,45.5,0.792,0.792);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAfArIAAhWIAUAAIAABWgAgyArIAAhWIATAAIAAAfIAQAAQAPAAAJAHQAJAHAAAOQAAAbghAAgAgfADIAAAYIAOABQAJAAADgDQAEgFAAgFQAAgFgEgEQgEgEgIAAg");
	this.shape_21.setTransform(118.5,30.9,0.792,0.792);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAfA7IAAgfIg9AAIAAAfIgRAAIAAgvIAIAAQAJgMAFgPQAFgRAAgPIAAgLIA4AAIAABGIAMAAIAAAvgAgTAMIAkAAIAAg2IgVAAQgBAjgOATg");
	this.shape_22.setTransform(109.4,32.1,0.792,0.792);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AASArIAAglIgjAAIAAAlIgVAAIAAhWIAVAAIAAAiIAjAAIAAgiIAVAAIAABWg");
	this.shape_23.setTransform(101.4,30.9,0.792,0.792);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgeAiQgMgMABgVQgBgUANgMQANgNARAAQASAAAMALQAMALAAASIgCAKIg9AAQABALAGAGQAGAFALAAQAOAAAHgHIAIAQQgLAIgWAAQgSAAgMgLgAgUgIIAqAAQgCgTgTAAQgQAAgFATg");
	this.shape_24.setTransform(93.7,30.9,0.792,0.792);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgnA+IAAh5IAUAAIAAAGQAIgIALAAQApAAAAAuQAAAVgMALQgLAMgUAAQgKAAgHgEIAAAlgAgTgmIAAAtQAFAFAIAAQANAAAGgHQAHgFgBgPQAAgPgFgHQgHgGgNAAQgHAAgGAFg");
	this.shape_25.setTransform(86.2,32.2,0.792,0.792);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgJArIAAhFIgZAAIAAgRIBFAAIAAARIgZAAIAABFg");
	this.shape_26.setTransform(78.9,30.9,0.792,0.792);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgDAtIgYgvIgBAAIgHAuIgUAAIARhYIAIAAIAeA9IAgg9IAHAAIAQBYIgUAAIgHgpIgBgFIgBAAIgCAHIgVAog");
	this.shape_27.setTransform(67,30.9,0.792,0.792);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgeAiQgMgLAAgWQABgUAMgMQANgNAQAAQAUAAALALQALAMAAARIgBAKIg9AAQAAAKAHAHQAFAFAMAAQAOAAAGgHIAJAQQgLAIgWAAQgSAAgMgLgAgUgIIAqAAQgCgTgTAAQgQAAgFATg");
	this.shape_28.setTransform(58.4,30.9,0.792,0.792);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AATAqQgDgDgCgEQgCAEgHAEQgIACgGAAQgPAAgHgHQgIgGAAgOQAAgOALgIQAMgJAUAAIAIABQAAgPgSAAQgLAAgIAEIgFgQQALgFAOAAQAUAAAJAJQAJAJAAAZIAAASQAAASAHAEQgDAEgCABIgIABQgEAAgEgDgAgSARQAAAMANAAQASAAAAgSIAAgIIgIgBQgXAAAAAPg");
	this.shape_29.setTransform(51.1,30.9,0.792,0.792);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAfA7IAAgfIg8AAIAAAfIgSAAIAAgvIAJAAQAIgMAFgPQAFgPAAgRIAAgLIA4AAIAABGIAMAAIAAAvgAgTAMIAkAAIAAg2IgUAAQgCAigOAUg");
	this.shape_30.setTransform(43.4,32.1,0.792,0.792);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAUAqQgDgCgCgFQgDAFgHADQgIACgFAAQgPAAgIgHQgIgHAAgNQAAgNALgJQAMgJAUAAIAJABQAAgPgTAAQgKAAgJAEIgFgQQALgFAOAAQAUAAAJAJQAJAJAAAZIAAASQAAASAHAEQgDAFgCAAIgIABQgEAAgDgDgAgSARQAAAMANAAQASAAAAgSIAAgIIgIgBQgXAAAAAPg");
	this.shape_31.setTransform(35.8,30.9,0.792,0.792);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgoA1IAJgTQAOAKAOAAQAKAAAGgFQAGgFAAgJQAAgKgHgGQgIgGgLAAIgMABIAAgQIAMAAQAKAAAGgEQAGgFAAgIQAAgGgFgEQgGgEgHAAQgLAAgNAIIgIgSQASgIAQAAQAQAAALAIQAKAJAAAOQAAAJgEAHQgFAHgHADQALAEAEAGQAGAHAAAMQAAARgMAKQgMAKgVAAQgVAAgPgJg");
	this.shape_32.setTransform(28.4,29.6,0.792,0.792);

	this.instance = new lib.xxxc();
	this.instance.parent = this;
	this.instance.setTransform(81.5,52.9,0.72,0.72,0,0,0,113.1,78);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cvsd, new cjs.Rectangle(0,0,162.5,97.5), null);


(lib.ghgf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hgj();
	this.instance.parent = this;
	this.instance.setTransform(0,-23.5,0.95,0.95);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#706F6F").s().p("AgrBHIAAiNIBWAAIAAAOIhHAAIAAAyIA/AAIAAAMIg/AAIAAAzIBIAAIAAAOg");
	this.shape.setTransform(75.4,60.3,0.95,0.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#706F6F").s().p("AgGBHIgziNIARAAIAoB3IAqh3IAQAAIgzCNg");
	this.shape_1.setTransform(63.5,60.3,0.95,0.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#706F6F").s().p("AgHBHIAAiNIAPAAIAACNg");
	this.shape_2.setTransform(54.8,60.3,0.95,0.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#706F6F").s().p("AgHBHIAAh/IgnAAIAAgOIBdAAIAAAOIgoAAIAAB/g");
	this.shape_3.setTransform(47.1,60.3,0.95,0.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#706F6F").s().p("AAtBHIgNglIg/AAIgOAlIgQAAIA2iNIAOAAIA3CNgAgaAUIA1AAIgbhHg");
	this.shape_4.setTransform(36.8,60.2,0.95,0.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#706F6F").s().p("AgGBHIgziNIARAAIAoB3IAqh3IAQAAIgzCNg");
	this.shape_5.setTransform(25.8,60.3,0.95,0.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#706F6F").s().p("AgrA1QgRgUAAggIAAgBQAAgfARgVQARgUAaAAQAbAAARAUQARAUAAAgIAAABQAAAfgRAVQgRAUgbAAQgaAAgRgUgAgggqQgMAQAAAaIAAABQAAAZAMARQAOAQASAAQAUAAAMgQQANgQAAgaIAAgBQAAgZgNgRQgMgQgUAAQgTAAgNAQg");
	this.shape_6.setTransform(13.4,60.3,0.95,0.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAPAAIBJBvIAAhvIAPAAIAACNg");
	this.shape_7.setTransform(-0.1,60.3,0.95,0.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAPAAIBJBvIAAhvIAPAAIAACNg");
	this.shape_8.setTransform(-13.1,60.3,0.95,0.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#706F6F").s().p("AgHBHIAAiNIAOAAIAACNg");
	this.shape_9.setTransform(-22.1,60.3,0.95,0.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAOAAIBKBvIAAhvIAPAAIAACNg");
	this.shape_10.setTransform(-36.1,60.3,0.95,0.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#706F6F").s().p("AAgBHIgig3IghAAIAAA3IgPAAIAAiNIAxAAQAYAAAMANQALAMAAARIAAABQAAAfgiAJIAnA6gAgjACIAfAAQAQAAAKgHQAJgIAAgOQAAgdghAAIghAAg");
	this.shape_11.setTransform(-48.2,60.3,0.95,0.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#706F6F").s().p("AgrA1QgRgUAAggIAAgBQAAgfARgVQARgUAaAAQAbAAARAUQARAUAAAgIAAABQAAAfgRAVQgRAUgbAAQgaAAgRgUgAgggqQgMAQAAAaIAAABQAAAZAMARQAOAQASAAQAUAAAMgQQANgQAAgaIAAgBQAAgZgNgRQgMgQgUAAQgTAAgNAQg");
	this.shape_12.setTransform(-61.5,60.3,0.95,0.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#706F6F").s().p("AgwBHIAAiNIAwAAQAWAAAMAMQAJAKAAAOQAAAYgXAJQAdAIAAAZIAAABQAAASgNAKQgOAKgWAAgAghA5IAhAAQAQAAAJgGQAJgHAAgMIAAgBQAAgZgiAAIghAAgAghgGIAfAAQANAAAIgHQAJgHAAgMQAAgMgIgGQgIgGgNAAIggAAg");
	this.shape_13.setTransform(-74,60.3,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ghgf, new cjs.Rectangle(-134.9,-158.4,270,270), null);


// stage content:
(lib._120x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_312 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(312).call(this.frame_312).wait(48));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("EgJSguyISlAAMAAABdlIylAAg");
	this.shape.setTransform(60,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	// legal
	this.addr2 = new lib.dfgdfggg();
	this.addr2.parent = this;
	this.addr2.setTransform(3.5,388.2);
	this.addr2.alpha = 0;
	this.addr2._off = true;

	this.text = new cjs.Text("", "8px '_sans'");
	this.text.lineHeight = 8;
	this.text.parent = this;
	this.text.setTransform(-304.9,15.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.addr2}]},303).to({state:[{t:this.addr2},{t:this.text}]},9).to({state:[{t:this.addr2}]},41).to({state:[{t:this.addr2}]},6).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.addr2).wait(303).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(41).to({alpha:0},6,cjs.Ease.get(1)).wait(1));

	// Слой 19
	this.instance = new lib.ghggg();
	this.instance.parent = this;
	this.instance.setTransform(95.5,392.2,0.799,0.799,0,0,0,0.2,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(298).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(46).to({alpha:0},6,cjs.Ease.get(1)).wait(1));

	// final
	this.instance_1 = new lib.ghgf();
	this.instance_1.parent = this;
	this.instance_1.setTransform(60.6,284.6,0.495,0.495,0,0,0,0.2,0.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(293).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(51).to({alpha:0},6,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_2 = new lib.xfbdfb();
	this.instance_2.parent = this;
	this.instance_2.setTransform(65.8,588.9,1,1,0,0,0,60.8,7.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},6,cjs.Ease.get(1)).wait(284).to({alpha:0},8).wait(62));

	// Слой 1
	this.instance_3 = new lib.ghgf();
	this.instance_3.parent = this;
	this.instance_3.setTransform(60,500.8,0.54,0.54,0,0,0,0.2,0.2);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},6,cjs.Ease.get(1)).wait(284).to({alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(61));

	// mask-in-out - копия: 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AulVfMAKrgq9ISgAAMAAAAq9g");
	var mask_graphics_1 = new cjs.Graphics().p("AuOVfMAJGgq9ITXAAMAAAAq9g");
	var mask_graphics_2 = new cjs.Graphics().p("At6VfMAHsgq9IUJAAMAAAAq9g");
	var mask_graphics_3 = new cjs.Graphics().p("AtnVfMAGagq9IU2AAMAAAAq9g");
	var mask_graphics_4 = new cjs.Graphics().p("AtXVfMAFTgq9IVcAAMAAAAq9g");
	var mask_graphics_5 = new cjs.Graphics().p("AtJVfMAEVgq9IV+AAMAAAAq9g");
	var mask_graphics_6 = new cjs.Graphics().p("As9VfMADhgq9IWaAAMAAAAq9g");
	var mask_graphics_7 = new cjs.Graphics().p("AszVfMAC2gq9IWxAAMAAAAq9g");
	var mask_graphics_8 = new cjs.Graphics().p("AssVfMACVgq9IXEAAMAAAAq9g");
	var mask_graphics_9 = new cjs.Graphics().p("AsmVfMAB8gq9IXRAAMAAAAq9g");
	var mask_graphics_10 = new cjs.Graphics().p("AsjVfMABugq9IXZAAMAAAAq9g");
	var mask_graphics_11 = new cjs.Graphics().p("AsidHMABqgq9IXbAAMAAAAq9g");
	var mask_graphics_62 = new cjs.Graphics().p("AuddHMAAAgq9IdLAAMgKrAq9g");
	var mask_graphics_63 = new cjs.Graphics().p("AsbdHMAAAgq9IY3AAMgJGAq9g");
	var mask_graphics_64 = new cjs.Graphics().p("AqedHMAAAgq9IU9AAMgHrAq9g");
	var mask_graphics_65 = new cjs.Graphics().p("AoudHMAAAgq9IRdAAMgGZAq9g");
	var mask_graphics_66 = new cjs.Graphics().p("AnLdHMAAAgq9IOXAAMgFQAq9g");
	var mask_graphics_67 = new cjs.Graphics().p("Al1dHMAAAgq9ILrAAMgERAq9g");
	var mask_graphics_68 = new cjs.Graphics().p("AktdHMAAAgq9IJbAAMgDdAq9g");
	var mask_graphics_69 = new cjs.Graphics().p("AjydHMAAAgq9IHlAAMgCyAq9g");
	var mask_graphics_70 = new cjs.Graphics().p("AjEdHMAAAgq9IGJAAMgCQAq9g");
	var mask_graphics_71 = new cjs.Graphics().p("AijdHMAAAgq9IFHAAMgB4Aq9g");
	var mask_graphics_72 = new cjs.Graphics().p("AiPdHMAAAgq9IEfAAMgBpAq9g");
	var mask_graphics_73 = new cjs.Graphics().p("AiJdHMAAAgq9IESAAMgBlAq9g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:213.4,y:235.2}).wait(1).to({graphics:mask_graphics_1,x:188.4,y:235.2}).wait(1).to({graphics:mask_graphics_2,x:165.7,y:235.2}).wait(1).to({graphics:mask_graphics_3,x:145.5,y:235.2}).wait(1).to({graphics:mask_graphics_4,x:127.6,y:235.2}).wait(1).to({graphics:mask_graphics_5,x:112.1,y:235.2}).wait(1).to({graphics:mask_graphics_6,x:98.9,y:235.2}).wait(1).to({graphics:mask_graphics_7,x:88.2,y:235.2}).wait(1).to({graphics:mask_graphics_8,x:79.8,y:235.2}).wait(1).to({graphics:mask_graphics_9,x:73.9,y:235.2}).wait(1).to({graphics:mask_graphics_10,x:70.3,y:235.2}).wait(1).to({graphics:mask_graphics_11,x:69.1,y:186.3}).wait(1).to({graphics:null,x:0,y:0}).wait(50).to({graphics:mask_graphics_62,x:94.2,y:186.3}).wait(1).to({graphics:mask_graphics_63,x:76.1,y:186.3}).wait(1).to({graphics:mask_graphics_64,x:59.1,y:186.3}).wait(1).to({graphics:mask_graphics_65,x:43.8,y:186.3}).wait(1).to({graphics:mask_graphics_66,x:30.3,y:186.3}).wait(1).to({graphics:mask_graphics_67,x:18.6,y:186.3}).wait(1).to({graphics:mask_graphics_68,x:8.7,y:186.3}).wait(1).to({graphics:mask_graphics_69,x:0.6,y:186.3}).wait(1).to({graphics:mask_graphics_70,x:-5.7,y:186.3}).wait(1).to({graphics:mask_graphics_71,x:-10.2,y:186.3}).wait(1).to({graphics:mask_graphics_72,x:-12.9,y:186.3}).wait(1).to({graphics:mask_graphics_73,x:-13.8,y:186.3}).wait(287));

	// text0
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVASIAPgiIAbgBIgdAjg");
	this.shape_1.setTransform(62,124.3,0.579,0.579);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUASIAOgjIAbAAIgdAjg");
	this.shape_2.setTransform(64.9,102.6,0.579,0.579);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVASIAPgiIAcgBIgeAjg");
	this.shape_3.setTransform(47.3,91.5,0.579,0.579);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgkAsIAAhXIAVAAIAAAgIARgBQAPAAAKAIQAJAGAAAOQAAANgHAHQgKAIgSAAgAgPADIAAAZIAPAAQAQAAAAgNQAAgFgDgEQgFgDgIAAg");
	this.shape_4.setTransform(81.8,128.9,0.579,0.579);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJAsIAAhFIgZAAIAAgSIBFAAIAAASIgZAAIAABFg");
	this.shape_5.setTransform(76.8,128.9,0.579,0.579);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmAuIAAhZIAUAAIAAA0IA0g2IAFAAIAABZIgUAAIAAg0Ig0A2g");
	this.shape_6.setTransform(71.5,128.9,0.579,0.579);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgZAiQgLgMAAgVQAAgUAMgNQANgMAVAAQAPAAAMAIIgJAQQgIgHgLAAQgLAAgHAHQgGAHAAAOQAAAbAZAAQAMAAAIgHIAHAQQgHAFgJACQgGABgJAAQgSAAgNgLg");
	this.shape_7.setTransform(66.1,128.9,0.579,0.579);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgeAhQgLgNAAgUQAAgTALgNQANgMARAAQAUAAALAMQALAMAAAUQAAAVgMAMQgKAMgUAAQgTAAgLgMgAgOgUQgGAIAAAMQABAdATAAQAKAAAFgIQAGgHAAgOQAAgcgVAAQgIAAgGAIg");
	this.shape_8.setTransform(60.8,128.9,0.579,0.579);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZAiQgMgMABgVQgBgUANgNQAMgMAWAAQAPAAALAIIgIAQQgIgHgLAAQgKAAgIAHQgGAHAAAOQAAAbAZAAQALAAAJgHIAHAQQgIAFgIACQgGABgJAAQgSAAgNgLg");
	this.shape_9.setTransform(55.6,128.9,0.579,0.579);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgeAiQgMgLAAgWQAAgUANgNQANgMARAAQATAAALALQAMAMAAARIgCAKIg9AAQAAALAHAGQAHAFAKAAQANAAAIgHIAIAQQgMAIgUAAQgTAAgMgLgAgUgIIAqAAQgCgTgTAAQgQAAgFATg");
	this.shape_10.setTransform(50.3,128.9,0.579,0.579);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgqAaQAIAAAGgFQAGgGADgPQAEgQAAgWIAAgFIA6AAIAABWIgUAAIAAhGIgWAAQgBAUgCANQgEARgFAHQgHAJgGACQgHADgLAAg");
	this.shape_11.setTransform(44.4,128.9,0.579,0.579);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAfAsIAAhXIAUAAIAABXgAgyAsIAAhXIAUAAIAAAgIAPgBQAQAAAIAIQAJAGAAAOQAAAcghAAgAgeADIAAAZIANAAQAJAAAEgEQADgDAAgGQAAgGgEgDQgEgEgIAAg");
	this.shape_12.setTransform(38.1,128.9,0.579,0.579);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AASAsIAAhFIgiAAIAABFIgVAAIAAhXIBLAAIAABXg");
	this.shape_13.setTransform(31.7,128.9,0.579,0.579);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRAsIgbhYIAVAAIAPA0IAeg0IAXAAIg3BYg");
	this.shape_14.setTransform(20.7,128.9,0.579,0.579);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgJAKQgFgDAAgHQAAgGAFgDQAEgFAFAAQAGAAAFAFQADAEAAAFQAAAGgDAEQgFAFgGAAQgFAAgEgFg");
	this.shape_15.setTransform(12.9,130.8,0.579,0.579);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AglA9IAAgHIAlg2QALgQAAgMQAAgOgPAAQgNAAgHANIgPgLQAEgIAKgGQAJgGALAAQARAAAKAJQALAIAAAPQAAANgNAUIgYAlIAsAAIAAATg");
	this.shape_16.setTransform(8.5,127.9,0.579,0.579);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgTBCQAQgTAAgxQAAgqgQgXIAAgLQARAIAKAXQAMAXAAAWQAAAagLAVQgJAVgTANg");
	this.shape_17.setTransform(106.3,118.2,0.579,0.579);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAfArIAAhWIAUAAIAABWgAgyArIAAhWIAUAAIAAAfIAPAAQAPAAAJAIQAJAGAAAOQAAAcghgBgAgeADIAAAZIANAAQAJAAAEgEQADgDAAgGQAAgFgEgEQgEgEgIAAg");
	this.shape_18.setTransform(100.7,118.2,0.579,0.579);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgDAtIgXgsIgBgDIAAAAIgIAtIgTAAIAQhYIAIAAIAeA+IAgg+IAHAAIAQBYIgUAAIgIgpIAAgEIgBAAIgCAHIgVAog");
	this.shape_19.setTransform(93.7,118.2,0.579,0.579);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgnA+IAAh5IAUAAIAAAGQAIgIAKAAQApAAABAvQAAAUgMALQgMAMgTAAQgIAAgJgEIAAAlgAgTgmIAAAtQAFAFAIAAQANAAAGgHQAGgFAAgPQAAgPgGgHQgGgGgNAAQgHAAgGAFg");
	this.shape_20.setTransform(87.5,119.1,0.579,0.579);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgmAtIAAhYIAUAAIAAA0IA0g2IAFAAIAABYIgUAAIAAgzIg0A1g");
	this.shape_21.setTransform(81.6,118.2,0.579,0.579);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgJBPIAAgkQgIAEgIAAQgQAAgJgMQgJgMAAgVQAAgVAKgMQALgMAPAAQAGAAAIADIAAgiIATgEIAAAmQAIgDAGAAQARAAAJAMQAKAMAAAVQAAAUgKANQgKAMgPAAQgIAAgHgDIAAAjgAAKgZIAAA2IAKACQAUAAAAgfQAAgMgFgIQgEgHgKAAQgGAAgFACgAgnAAQAAAfATAAIALgCIAAg1QgFgDgGAAQgTAAAAAbg");
	this.shape_22.setTransform(74.9,118.1,0.579,0.579);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgJAjQgJgKgCgTIgPAAIAAAlIgTAAIAAhWIATAAIAAAhIAPAAQADgPAKgKQAJgKAPAAQASAAAKANQAKANAAATQAAAVgKAMQgLAMgRAAQgRAAgJgKgAADgUQgEAKAAAKQAAAcASAAQAIAAAFgHQAFgIAAgNQAAgcgSAAQgJAAgFAIg");
	this.shape_23.setTransform(64.6,118.2,0.579,0.579);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgmAtIAAhYIAUAAIAAA0IA0g2IAFAAIAABYIgUAAIAAgzIgzA1g");
	this.shape_24.setTransform(57.8,118.2,0.579,0.579);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AASArIAAglIgjAAIAAAlIgUAAIAAhWIAUAAIAAAhIAjAAIAAghIAUAAIAABWg");
	this.shape_25.setTransform(52,118.2,0.579,0.579);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AATAqQgDgDgCgEQgDAFgHADQgGACgHAAQgOAAgIgHQgIgHAAgNQAAgOALgIQALgJAVAAIAIABQAAgPgSgBQgLAAgJAFIgEgQQALgGAOAAQATAAAJAKQAKAJAAAZIAAASQAAASAHAEQgEAEgCABQgDACgEgBQgEABgEgEgAgTARQAAAMAOAAQARAAAAgSIAAgJIgIgBQgXAAAAAQg");
	this.shape_26.setTransform(46.7,118.2,0.579,0.579);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgjAsIAAhWIAkgBQAPAAAJAGQAIAHAAALQAAAEgEAHQgDAEgHACQARAGAAAQQAAALgIAGQgIAHgSAAgAgQAGIAAAXIARAAQAQAAAAgMQAAgFgFgDQgEgEgHAAgAgQgbIAAATIAQAAQAOAAAAgKQAAgFgEgCQgDgDgGAAIgRABg");
	this.shape_27.setTransform(41.5,118.1,0.579,0.579);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgiAkIAKgQQALAIANAAQAOAAAAgKQAAgMgQAAIgMAAIAAgPIANABQANAAAAgKQAAgFgDgCQgDgDgGAAQgLAAgMAHIgHgQQAQgIAPAAQANAAAKAHQAIAHAAALQAAAOgNAFQAHABAEAGQAFAGAAAFQAAAOgKAIQgKAGgQAAQgVAAgMgJg");
	this.shape_28.setTransform(36.3,118.2,0.579,0.579);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAUAqQgDgDgCgEQgDAFgHADQgHACgGAAQgOAAgJgHQgIgHAAgNQAAgOALgIQAMgJAUAAIAJABQAAgPgTgBQgKAAgJAFIgFgQQALgGAOAAQATAAAKAKQAJAJAAAZIAAASQAAASAHAEQgDAEgCABQgDACgFgBQgEABgDgEgAgSARQAAAMANAAQASAAAAgSIAAgJIgIgBQgXAAAAAQg");
	this.shape_29.setTransform(31.5,118.2,0.579,0.579);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AASArIAAglIgjAAIAAAlIgUAAIAAhWIAUAAIAAAhIAjAAIAAghIAUAAIAABWg");
	this.shape_30.setTransform(26,118.2,0.579,0.579);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgdAhQgMgNAAgUQAAgTAMgMQAMgOARAAQATAAAMANQALAMAAAUQAAAUgMANQgLAMgTAAQgTAAgKgMgAgOgUQgGAHABANQgBAcAUAAQAJAAAGgHQAGgHAAgOQAAgcgVAAQgIABgGAHg");
	this.shape_31.setTransform(17.5,118.2,0.579,0.579);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AARArIAAhFIghAAIAABFIgVAAIAAhWIBLAAIAABWg");
	this.shape_32.setTransform(11.9,118.2,0.579,0.579);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgIAtQgLgVAAgaQAAgWAMgXQAKgXARgIIAAALQgQAXAAAqQAAAxAQATIAAANQgUgNgIgVg");
	this.shape_33.setTransform(7.5,118.2,0.579,0.579);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgZAiQgMgMABgVQgBgUANgNQANgMAVAAQAPAAAMAIIgJAQQgHgHgMAAQgKAAgHAHQgHAHAAAOQAAAbAZAAQALAAAJgHIAHAQQgIAFgIACQgGABgJAAQgSAAgNgLg");
	this.shape_34.setTransform(69.1,107.5,0.579,0.579);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgeAhQgLgNAAgUQAAgTAMgNQAKgMATAAQAUAAALAMQALANAAATQAAAVgLAMQgMAMgTAAQgTAAgLgMgAgOgUQgFAHgBANQAAAdAUAAQAJAAAGgIQAGgHAAgOQgBgcgUAAQgIAAgGAIg");
	this.shape_35.setTransform(63.8,107.5,0.579,0.579);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgYAiQgMgMAAgVQAAgUAMgNQANgMAVAAQAPAAAMAIIgJAQQgHgHgMAAQgKAAgHAHQgHAIAAANQAAAbAZAAQAMAAAIgHIAHAQQgHAFgIACQgHABgJAAQgTAAgLgLg");
	this.shape_36.setTransform(58.6,107.5,0.579,0.579);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgeAiQgMgMAAgVQAAgUANgNQANgMARAAQATAAALALQAMALAAASIgCAKIg9AAQAAALAHAFQAHAGAKAAQANAAAIgHIAIAQQgMAIgUAAQgTAAgMgLgAgUgIIAqAAQgCgTgTAAQgQAAgFATg");
	this.shape_37.setTransform(53.3,107.5,0.579,0.579);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgqAaQAIAAAGgFQAGgHADgOQAEgQAAgWIAAgFIA6AAIAABWIgUAAIAAhGIgWAAQAAAQgDARQgEAQgFAIQgHAJgGACQgHADgLAAg");
	this.shape_38.setTransform(47.4,107.5,0.579,0.579);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAfAsIAAhXIAUAAIAABXgAgyAsIAAhXIAUAAIAAAgIAPgBQAPAAAJAHQAJAGAAAPQAAAcghAAgAgeADIAAAZIANAAQAJAAAEgEQADgDAAgGQAAgFgEgEQgFgEgHAAg");
	this.shape_39.setTransform(41.1,107.5,0.579,0.579);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AARAsIAAhFIghAAIAABFIgVAAIAAhXIBLAAIAABXg");
	this.shape_40.setTransform(34.7,107.5,0.579,0.579);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AALAtIAKgyIABgKQAAgLgNAAQgKAAgJAJIgMA+IgUAAIAMhBIAAgFQAAgIgBgHIATgEIACAKQAKgJAQAAQAbAAAAAZIgBAKIgKA1g");
	this.shape_41.setTransform(23.2,107.4,0.579,0.579);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgJAKQgFgEAAgGQAAgGAFgDQAEgFAFAAQAGAAAFAFQADAEAAAFQAAAFgDAFQgFAFgGAAQgFAAgEgFg");
	this.shape_42.setTransform(12.9,109.4,0.579,0.579);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AABA8IAAhVIgXAPIAAgVQAXgMANgQIAJAAIAAB3g");
	this.shape_43.setTransform(8.2,106.5,0.579,0.579);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgUBPIAAgTIAUAAIAAh4IgUAAIAAgSIApAAIAACdg");
	this.shape_44.setTransform(75.2,96.7,0.579,0.579);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgeAiQgMgMAAgVQAAgTANgNQANgNARAAQATAAALALQAMAMAAARIgCAKIg9AAQAAAKAHAHQAHAFAKAAQAOAAAHgHIAIAQQgKAIgWAAQgUAAgLgLgAgUgIIAqAAQgCgTgTAAQgQAAgFATg");
	this.shape_45.setTransform(70.5,96.7,0.579,0.579);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgDAsIgnhXIAVAAIAVA0IAWg0IAVAAIgoBXg");
	this.shape_46.setTransform(65.2,96.8,0.579,0.579);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgKArQgDgFAAgFQAAgGADgFQAFgEAFAAQAGAAAFAEQAEAEAAAHQAAAGgEAEQgGAFgFAAQgFAAgFgFgAgKgWQgDgEAAgGQAAgGADgFQAEgEAGAAQAGAAAFAEQAEAFAAAGQAAAHgEADQgGAEgFABQgFgBgFgEg");
	this.shape_47.setTransform(60.7,96.8,0.579,0.579);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AglAMIAAg3IAUAAIAAA2QAAAQAPAAQAHAAAFgDQAGgEACgEIAAg7IAUAAIAABWIgUAAIAAgHQgEAEgIACQgGACgHAAQgeAAAAggg");
	this.shape_48.setTransform(56.2,96.8,0.579,0.579);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AASA+IAAg1QAAgJgFgDQgFgFgIAAQgEAAgFACQgGADgCADIAAA+IgUAAIAAh2IAUgFIAAArQAJgIAMAAQAQAAAJAKQAJAJAAAQIAAA1g");
	this.shape_49.setTransform(50.5,95.7,0.579,0.579);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgUBPIAAidIApAAIAAASIgVAAIAAB4IAVAAIAAATg");
	this.shape_50.setTransform(42.8,96.7,0.579,0.579);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgdAsIAAhWIAVAAIAAAJQAIgKANAAQALgBAFAEIgIARQgFgEgHAAQgHAAgFAHQgFAGAAAKIAAAwg");
	this.shape_51.setTransform(36.1,96.7,0.579,0.579);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgeAiQgLgNAAgUQAAgUAMgMQANgNARAAQASAAAMALQALALAAASIgBAKIg+AAQACALAGAGQAHAFAKAAQAOAAAHgHIAIAQQgLAIgWAAQgTAAgLgLgAgUgIIArAAQgDgTgTAAQgRAAgEATg");
	this.shape_52.setTransform(31,96.7,0.579,0.579);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgDAsIgohXIAXAAIAUA0IAWg0IAVAAIgnBXg");
	this.shape_53.setTransform(25.7,96.8,0.579,0.579);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgeAhQgLgNAAgUQAAgTAMgNQAMgMARAAQAUAAALAMQALANAAATQAAAUgMANQgKAMgUAAQgTAAgLgMgAgOgUQgGAHABANQgBAdAUAAQAKAAAFgIQAGgHgBgOQAAgbgUAAQgJAAgFAHg");
	this.shape_54.setTransform(20.4,96.7,0.579,0.579);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgeAhQgLgNAAgUQAAgTAMgNQAMgMARAAQAUAAALAMQALAMAAAUQAAAUgLANQgLAMgUAAQgTAAgLgMgAgOgUQgGAHABANQgBAdAUAAQAKAAAFgIQAGgHAAgOQAAgbgVAAQgJAAgFAHg");
	this.shape_55.setTransform(14.9,96.7,0.579,0.579);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAYA7IAAg1IgvAAIAAA1IgVAAIAAh2IAVAAIAAAvIAvAAIAAgvIAVAAIAAB2g");
	this.shape_56.setTransform(8.9,95.8,0.579,0.579);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AilFpIDArRICLAAIi/LRg");
	this.shape_57.setTransform(122.5,89,0.559,0.559);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#CB0927").s().p("AjFFdIC7q5IDQAAIi7K5g");
	this.shape_58.setTransform(117.6,123.4,0.559,0.559);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#D1D1D1").s().p("AkkIuIBwmjIDRAAIC7q5IBNAAIkqRcg");
	this.shape_59.setTransform(116.6,135.1,0.559,0.559);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#DC052B").s().p("AzpIuIAAxcMAnTAAAIksRcg");
	this.shape_60.setTransform(64.5,111.5,0.559,0.559);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[]},74).wait(286));

	// pic0
	this.instance_4 = new lib.pic0();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1,242,0.495,0.495);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},74).wait(286));

	// mask-in-out (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_62 = new cjs.Graphics().p("AlNdHMAKpgq9ISiAAMAAAAq9g");
	var mask_1_graphics_63 = new cjs.Graphics().p("AuOVfMAJGgq9ITXAAMAAAAq9g");
	var mask_1_graphics_64 = new cjs.Graphics().p("At6VfMAHsgq9IUJAAMAAAAq9g");
	var mask_1_graphics_65 = new cjs.Graphics().p("AtnVfMAGagq9IU2AAMAAAAq9g");
	var mask_1_graphics_66 = new cjs.Graphics().p("AtXVfMAFTgq9IVcAAMAAAAq9g");
	var mask_1_graphics_67 = new cjs.Graphics().p("AtJVfMAEVgq9IV+AAMAAAAq9g");
	var mask_1_graphics_68 = new cjs.Graphics().p("As9VfMADhgq9IWaAAMAAAAq9g");
	var mask_1_graphics_69 = new cjs.Graphics().p("AszVfMAC2gq9IWxAAMAAAAq9g");
	var mask_1_graphics_70 = new cjs.Graphics().p("AssVfMACVgq9IXEAAMAAAAq9g");
	var mask_1_graphics_71 = new cjs.Graphics().p("AsmVfMAB8gq9IXRAAMAAAAq9g");
	var mask_1_graphics_72 = new cjs.Graphics().p("AsjVfMABugq9IXZAAMAAAAq9g");
	var mask_1_graphics_73 = new cjs.Graphics().p("AsidHMABqgq9IXbAAMAAAAq9g");
	var mask_1_graphics_137 = new cjs.Graphics().p("AuddHMAAAgq9IdLAAMgKrAq9g");
	var mask_1_graphics_138 = new cjs.Graphics().p("AsbdHMAAAgq9IY3AAMgJGAq9g");
	var mask_1_graphics_139 = new cjs.Graphics().p("AqedHMAAAgq9IU9AAMgHrAq9g");
	var mask_1_graphics_140 = new cjs.Graphics().p("AoudHMAAAgq9IRdAAMgGZAq9g");
	var mask_1_graphics_141 = new cjs.Graphics().p("AnLdHMAAAgq9IOXAAMgFQAq9g");
	var mask_1_graphics_142 = new cjs.Graphics().p("Al1dHMAAAgq9ILrAAMgERAq9g");
	var mask_1_graphics_143 = new cjs.Graphics().p("AktdHMAAAgq9IJbAAMgDdAq9g");
	var mask_1_graphics_144 = new cjs.Graphics().p("AjydHMAAAgq9IHlAAMgCyAq9g");
	var mask_1_graphics_145 = new cjs.Graphics().p("AjEdHMAAAgq9IGJAAMgCQAq9g");
	var mask_1_graphics_146 = new cjs.Graphics().p("AijdHMAAAgq9IFHAAMgB4Aq9g");
	var mask_1_graphics_147 = new cjs.Graphics().p("AiPdHMAAAgq9IEfAAMgBpAq9g");
	var mask_1_graphics_148 = new cjs.Graphics().p("AiJdHMAAAgq9IESAAMgBlAq9g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_1_graphics_62,x:153.4,y:186.3}).wait(1).to({graphics:mask_1_graphics_63,x:188.4,y:235.2}).wait(1).to({graphics:mask_1_graphics_64,x:165.7,y:235.2}).wait(1).to({graphics:mask_1_graphics_65,x:145.5,y:235.2}).wait(1).to({graphics:mask_1_graphics_66,x:127.6,y:235.2}).wait(1).to({graphics:mask_1_graphics_67,x:112.1,y:235.2}).wait(1).to({graphics:mask_1_graphics_68,x:98.9,y:235.2}).wait(1).to({graphics:mask_1_graphics_69,x:88.2,y:235.2}).wait(1).to({graphics:mask_1_graphics_70,x:79.8,y:235.2}).wait(1).to({graphics:mask_1_graphics_71,x:73.9,y:235.2}).wait(1).to({graphics:mask_1_graphics_72,x:70.3,y:235.2}).wait(1).to({graphics:mask_1_graphics_73,x:69.1,y:186.3}).wait(1).to({graphics:null,x:0,y:0}).wait(63).to({graphics:mask_1_graphics_137,x:94.2,y:186.3}).wait(1).to({graphics:mask_1_graphics_138,x:76.1,y:186.3}).wait(1).to({graphics:mask_1_graphics_139,x:59.1,y:186.3}).wait(1).to({graphics:mask_1_graphics_140,x:43.8,y:186.3}).wait(1).to({graphics:mask_1_graphics_141,x:30.3,y:186.3}).wait(1).to({graphics:mask_1_graphics_142,x:18.6,y:186.3}).wait(1).to({graphics:mask_1_graphics_143,x:8.7,y:186.3}).wait(1).to({graphics:mask_1_graphics_144,x:0.6,y:186.3}).wait(1).to({graphics:mask_1_graphics_145,x:-5.7,y:186.3}).wait(1).to({graphics:mask_1_graphics_146,x:-10.2,y:186.3}).wait(1).to({graphics:mask_1_graphics_147,x:-12.9,y:186.3}).wait(1).to({graphics:mask_1_graphics_148,x:-13.8,y:186.3}).wait(212));

	// pic1
	this.instance_5 = new lib.pic1_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(61,305.5,0.6,0.6,0,0,0,0.1,0.1);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(62).to({_off:false},0).to({_off:true},87).wait(211));

	// text1
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgJAKQgFgDAAgHQAAgFAFgEQAEgFAFAAQAHAAADAFQAFAEAAAFQAAAHgFADQgDAFgHAAQgFAAgEgFg");
	this.shape_61.setTransform(102.5,110.9,0.673,0.673);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgdAsIAAhXIA7AAIAAASIgnAAIAABFg");
	this.shape_62.setTransform(98.2,108.7,0.673,0.673);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgcA1QgKgLAAgQQAAgIAFgKQAGgIAIgFQgIgFgDgGQgEgGAAgJQAAgOAKgHQAJgJAPAAQARAAAIAJQAKAIAAANQAAAIgGAIQgFAIgGADQAIAEAGAIQAHAKAAAIQAAAQgLAKQgKAJgSAAQgSAAgKgIgAgRAaQAAAHAFAFQAFAFAHABQAIAAAFgFQAFgFAAgGQAAgOgUgLQgPAJAAAOgAgNgfQAAAGAFAFQAGAFAEACQAEgCAEgGQADgFAAgFQAAgFgDgEQgEgDgGAAQgNAAAAAMg");
	this.shape_63.setTransform(88.7,107.6,0.673,0.673);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgfAuQgLgPAAgiQAAgYAMgQQALgRAUgBQAqABAAA8QAAAbgMASQgLAQgUAAQgWAAgJgPgAgUgBQAAAXAFALQAEAMALAAQAKgBAGgJQAFgMAAgYQAAgXgFgKQgFgJgKAAQgVgBAAArg");
	this.shape_64.setTransform(82.2,107.6,0.673,0.673);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgWAyQAYgOAKgWQgGADgHAAQgRAAgKgLQgKgKAAgRQAAgRAKgMQALgLAQAAQAoAAAAA1QAAAUgQAXQgQAWgSAFgAgMglQgFAGAAAJQAAALAFAFQAFAGAHAAQARAAAAgVQAAgWgRAAQgIAAgEAGg");
	this.shape_65.setTransform(75.6,107.6,0.673,0.673);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AABA8IAAhVIgXAPIAAgVQAWgLAOgRIAJAAIAAB3g");
	this.shape_66.setTransform(68.7,107.6,0.673,0.673);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgkAsIAAhWIAlgBQAPAAAJAGQAIAHAAALQAAAGgEAEQgDAFgGADQARAFAAAQQAAALgJAHQgJAGgRAAgAgQAcIARABQAQAAAAgMQAAgGgFgDQgFgCgGAAIgRAAgAgQgbIAAATIAQAAQANAAAAgKQAAgEgDgDQgEgDgFAAg");
	this.shape_67.setTransform(59.4,108.7,0.673,0.673);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgYAiQgMgMAAgVQAAgUAMgNQANgMAVAAQAPAAAMAIIgJAQQgIgHgLAAQgKAAgHAHQgHAIAAANQAAAbAZAAQAMAAAIgHIAHAQQgHAFgIACQgHABgJAAQgTAAgLgLg");
	this.shape_68.setTransform(49.9,108.7,0.673,0.673);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgUAMgMQALgMASAAQAUAAALAMQALAMAAAUQAAAWgMALQgLAMgTAAQgTAAgLgMgAgOgUQgGAIAAAMQAAAdAUAAQAJAAAGgIQAGgIAAgNQAAgcgVAAQgIAAgGAIg");
	this.shape_69.setTransform(43.8,108.7,0.673,0.673);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgZAiQgLgNAAgUQAAgUAMgNQANgMAVAAQAPAAAMAIIgJAQQgHgHgMAAQgKAAgHAHQgHAIAAANQAAAbAZAAQAMAAAIgHIAHAQQgHAFgJACQgGABgJAAQgSAAgNgLg");
	this.shape_70.setTransform(37.7,108.7,0.673,0.673);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgeAiQgMgMAAgVQAAgUANgNQAMgMASAAQATAAALALQALAMAAARIgBAKIg+AAQABALAHAGQAHAFAJAAQAOAAAIgHIAHAQQgLAIgUAAQgTAAgMgLgAgUgIIAqAAQgDgTgSAAQgQAAgFATg");
	this.shape_71.setTransform(31.6,108.7,0.673,0.673);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgpAaQAHAAAGgFQAFgGAEgPQAEgSAAgUIAAgFIA5AAIAABWIgTAAIAAhGIgVAAQgBASgDAPQgDAOgHAKQgGAJgGACQgIADgJAAg");
	this.shape_72.setTransform(24.7,108.7,0.673,0.673);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AAfAsIAAhXIAUAAIAABXgAgyAsIAAhXIATAAIAAAgIAQgBQAPAAAJAHQAJAIAAANQAAAcghAAgAgfADIAAAZIAOAAQAJAAADgEQAEgDAAgGQAAgGgEgDQgEgEgIAAg");
	this.shape_73.setTransform(17.4,108.7,0.673,0.673);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AARAsIAAhFIghAAIAABFIgVAAIAAhXIBLAAIAABXg");
	this.shape_74.setTransform(10,108.7,0.673,0.673);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgmAuIAAhYIAUAAIAAAzIA0g1IAFAAIAABXIgVAAIAAgzIgzA2g");
	this.shape_75.setTransform(67.9,96.3,0.673,0.673);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgqAaQAIAAAGgGQAFgFAEgPQAEgSAAgTIAAgGIA6AAIAABWIgUAAIAAhGIgWAAQAAARgDAQQgEAQgFAIQgGAIgHAEQgIACgKAAg");
	this.shape_76.setTransform(60.9,96.3,0.673,0.673);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AATAqQgDgCgCgFQgDAFgHADQgEACgJAAQgPAAgHgHQgIgGAAgNQAAgPALgIQALgJAVAAIAIACQAAgQgSAAQgLAAgJAEIgEgQQAKgFAPAAQATAAAJAJQAKAJAAAaIAAARQAAASAHAEQgDAFgDAAIgHABQgFAAgDgDgAgTARQAAAMAOAAQARAAAAgSIAAgIIgIgBQgXAAAAAPg");
	this.shape_77.setTransform(54.9,96.2,0.673,0.673);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAfA7IAAgfIg9AAIAAAfIgRAAIAAgvIAIAAQAJgMAFgOQAFgTAAgOIAAgLIA4AAIAABGIAMAAIAAAvgAgTAMIAkAAIAAg2IgVAAQgBAjgOATg");
	this.shape_78.setTransform(48.3,97.3,0.673,0.673);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgiAkIAKgQQAKAIAOABQAOAAAAgLQAAgMgQAAIgMAAIAAgPIANABQANAAAAgKQAAgFgDgCQgDgDgGAAQgLAAgLAHIgIgQQAQgIAPABQAOAAAJAGQAJAIAAAKQAAAOgOAFQAHABAFAGQAEAFAAAGQAAAOgKAIQgKAGgQABQgUAAgNgKg");
	this.shape_79.setTransform(42,96.3,0.673,0.673);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgeAhQgLgNAAgUQAAgTAMgMQALgNASAAQAUAAALAMQALANAAATQAAAVgLAMQgMAMgTAAQgTAAgLgMgAgOgUQgFAGgBAOQAAAdAUAAQAJAAAGgHQAGgHAAgPQgBgbgUAAQgJAAgFAHg");
	this.shape_80.setTransform(36.2,96.2,0.673,0.673);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgYAiQgMgLAAgWQAAgTAMgNQANgNAVAAQAQAAALAJIgJAPQgIgHgLAAQgLAAgGAIQgHAIAAAMQAAAcAZAAQAMAAAIgIIAHAQQgKAGgFABIgQABQgTAAgLgLg");
	this.shape_81.setTransform(30.1,96.2,0.673,0.673);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AAfArIAAhVIAUAAIAABVgAgyArIAAhVIAUAAIAAAeIAPAAQAPAAAJAHQAJAHAAAOQAAAbghAAgAgeADIAAAYIANABQAKAAADgEQADgDAAgGQAAgGgEgDQgEgEgIABg");
	this.shape_82.setTransform(19.6,96.3,0.673,0.673);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgCA8IgZhAIgMA/IgVAAIAYh2IALAAIAZBPIAZhPIAMAAIAYB2IgVAAIgMg/IgYBAg");
	this.shape_83.setTransform(11,95.2,0.673,0.673);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AiMEGICOoLICLAAIiOILg");
	this.shape_84.setTransform(121.3,85.4,0.612,0.612);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#CB0927").s().p("AigDSIBwmkIDRAAIhxGkg");
	this.shape_85.setTransform(120.9,109.3,0.612,0.612);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#D1D1D1").s().p("AjtFhIBJkXIDSAAIBymqIBOAAIhyGqIgBAAIhLEXg");
	this.shape_86.setTransform(121,118,0.612,0.612);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#DC052B").s().p("AqtDSIgBmjIVdABIhwGig");
	this.shape_87.setTransform(66.4,101.6);

	var maskedShapeInstanceList = [this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61}]},62).to({state:[]},87).wait(211));

	// mask-in-out - копия (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_137 = new cjs.Graphics().p("AlNdHMAKpgq9ISiAAMAAAAq9g");
	var mask_2_graphics_138 = new cjs.Graphics().p("AuOVfMAJGgq9ITXAAMAAAAq9g");
	var mask_2_graphics_139 = new cjs.Graphics().p("At6VfMAHsgq9IUJAAMAAAAq9g");
	var mask_2_graphics_140 = new cjs.Graphics().p("AtnVfMAGagq9IU2AAMAAAAq9g");
	var mask_2_graphics_141 = new cjs.Graphics().p("AtXVfMAFTgq9IVcAAMAAAAq9g");
	var mask_2_graphics_142 = new cjs.Graphics().p("AtJVfMAEVgq9IV+AAMAAAAq9g");
	var mask_2_graphics_143 = new cjs.Graphics().p("As9VfMADhgq9IWaAAMAAAAq9g");
	var mask_2_graphics_144 = new cjs.Graphics().p("AszVfMAC2gq9IWxAAMAAAAq9g");
	var mask_2_graphics_145 = new cjs.Graphics().p("AssVfMACVgq9IXEAAMAAAAq9g");
	var mask_2_graphics_146 = new cjs.Graphics().p("AsmVfMAB8gq9IXRAAMAAAAq9g");
	var mask_2_graphics_147 = new cjs.Graphics().p("AsjVfMABugq9IXZAAMAAAAq9g");
	var mask_2_graphics_148 = new cjs.Graphics().p("AsidHMABqgq9IXbAAMAAAAq9g");
	var mask_2_graphics_211 = new cjs.Graphics().p("AuddHMAAAgq9IdLAAMgKrAq9g");
	var mask_2_graphics_212 = new cjs.Graphics().p("AsbdHMAAAgq9IY3AAMgJGAq9g");
	var mask_2_graphics_213 = new cjs.Graphics().p("AqedHMAAAgq9IU9AAMgHrAq9g");
	var mask_2_graphics_214 = new cjs.Graphics().p("AoudHMAAAgq9IRdAAMgGZAq9g");
	var mask_2_graphics_215 = new cjs.Graphics().p("AnLdHMAAAgq9IOXAAMgFQAq9g");
	var mask_2_graphics_216 = new cjs.Graphics().p("Al1dHMAAAgq9ILrAAMgERAq9g");
	var mask_2_graphics_217 = new cjs.Graphics().p("AktdHMAAAgq9IJbAAMgDdAq9g");
	var mask_2_graphics_218 = new cjs.Graphics().p("AjydHMAAAgq9IHlAAMgCyAq9g");
	var mask_2_graphics_219 = new cjs.Graphics().p("AjEdHMAAAgq9IGJAAMgCQAq9g");
	var mask_2_graphics_220 = new cjs.Graphics().p("AijdHMAAAgq9IFHAAMgB4Aq9g");
	var mask_2_graphics_221 = new cjs.Graphics().p("AiPdHMAAAgq9IEfAAMgBpAq9g");
	var mask_2_graphics_222 = new cjs.Graphics().p("AiJdHMAAAgq9IESAAMgBlAq9g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(137).to({graphics:mask_2_graphics_137,x:153.4,y:186.3}).wait(1).to({graphics:mask_2_graphics_138,x:188.4,y:235.2}).wait(1).to({graphics:mask_2_graphics_139,x:165.7,y:235.2}).wait(1).to({graphics:mask_2_graphics_140,x:145.5,y:235.2}).wait(1).to({graphics:mask_2_graphics_141,x:127.6,y:235.2}).wait(1).to({graphics:mask_2_graphics_142,x:112.1,y:235.2}).wait(1).to({graphics:mask_2_graphics_143,x:98.9,y:235.2}).wait(1).to({graphics:mask_2_graphics_144,x:88.2,y:235.2}).wait(1).to({graphics:mask_2_graphics_145,x:79.8,y:235.2}).wait(1).to({graphics:mask_2_graphics_146,x:73.9,y:235.2}).wait(1).to({graphics:mask_2_graphics_147,x:70.3,y:235.2}).wait(1).to({graphics:mask_2_graphics_148,x:69.1,y:186.3}).wait(1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_2_graphics_211,x:94.2,y:186.3}).wait(1).to({graphics:mask_2_graphics_212,x:76.1,y:186.3}).wait(1).to({graphics:mask_2_graphics_213,x:59.1,y:186.3}).wait(1).to({graphics:mask_2_graphics_214,x:43.8,y:186.3}).wait(1).to({graphics:mask_2_graphics_215,x:30.3,y:186.3}).wait(1).to({graphics:mask_2_graphics_216,x:18.6,y:186.3}).wait(1).to({graphics:mask_2_graphics_217,x:8.7,y:186.3}).wait(1).to({graphics:mask_2_graphics_218,x:0.6,y:186.3}).wait(1).to({graphics:mask_2_graphics_219,x:-5.7,y:186.3}).wait(1).to({graphics:mask_2_graphics_220,x:-10.2,y:186.3}).wait(1).to({graphics:mask_2_graphics_221,x:-12.9,y:186.3}).wait(1).to({graphics:mask_2_graphics_222,x:-13.8,y:186.3}).wait(138));

	// pic2
	this.instance_6 = new lib.pic2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(65.8,289.9,0.701,0.7,0,0,0,0.5,0.5);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(137).to({_off:false},0).to({_off:true},86).wait(137));

	// text2
	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgJAKQgFgFAAgFQAAgFAFgEQAEgFAFAAQAGAAAFAFQADADAAAGQAAAGgDAEQgFAFgGAAQgFAAgEgFg");
	this.shape_88.setTransform(82.3,122.4,0.673,0.673);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgmAuIAAhZIAUAAIAAA0IA0g2IAFAAIAABZIgUAAIAAg0Ig0A2g");
	this.shape_89.setTransform(77,120.2,0.673,0.673);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AAKAdQgDgXgWAAIgBAAIAAAmIgUAAIAAhXIAUAAIAAAhIABAAQAVAAADgTQACgPAPAAIAKABIAAAQIgFAAQgDAAgBAFQgEAQgSAFQATAEAFAUQABAFADAAIAEgBIAAARIgJABQgQAAgCgQg");
	this.shape_90.setTransform(70.7,120.2,0.673,0.673);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgnA9IAAh4IAUAAIAAAGQAIgHALAAQAogBAAAvQAAAUgLALQgMAMgTAAQgIAAgJgEIAAAkgAgTgmIAAAtQAGAFAHAAQANAAAGgHQAGgGAAgOQAAgOgGgIQgGgGgNAAQgIAAgFAFg");
	this.shape_91.setTransform(64.4,121.3,0.673,0.673);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgTAMgNQALgMASAAQAUAAALAMQALAMAAAUQAAAWgMALQgLAMgTAAQgTAAgLgMgAgOgUQgGAHAAANQAAAdAUAAQAJAAAGgIQAGgIAAgNQAAgcgVAAQgIAAgGAIg");
	this.shape_92.setTransform(57.7,120.2,0.673,0.673);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgeAxQgMgOAAgYQAAgOADgNQADgMAGgHQAGgJAIgFQAKgGANgCIAcgFIAEASIgnAHIgKAFQgGACgEAIQgEAGgCALQAGgHAJgFQAIgFAHAAQARAAALALQALALAAATQgBASgKANQgLANgVAAQgTAAgLgOgAgPABQgFAHAAALQAAANAGAHQAGAHAJAAQAKABAGgIQAGgIAAgLQgBgNgGgGQgFgHgKAAQgIABgIAGg");
	this.shape_93.setTransform(51.3,119,0.673,0.673);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AggArQAXAAAAgMQAAgJgGgPIgchDIAVAAIAXA8IAWg8IAVAAIgmBlQgEAJgJAFQgLAGgOAAg");
	this.shape_94.setTransform(44.9,121.3,0.673,0.673);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgkAsIAAhWIAlgBQAPAAAJAGQAIAHAAALQAAAGgEAEQgCAEgHAEQARAFAAAQQAAALgJAGQgJAHgRAAgAgQAcIARABQAQAAAAgMQAAgGgFgDQgFgCgGAAIgRAAgAgQgbIAAATIAQAAQANAAAAgKQAAgEgDgDQgEgDgFAAg");
	this.shape_95.setTransform(35.6,120.1,0.673,0.673);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgTALgNQAMgMASAAQAUAAALAMQALAMAAAUQAAAVgMAMQgLAMgTAAQgTAAgLgMgAgOgUQgGAIAAAMQAAAdAUAAQAKAAAFgIQAGgHAAgOQAAgcgVAAQgIAAgGAIg");
	this.shape_96.setTransform(29.2,120.2,0.673,0.673);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AARAsIAAhFIghAAIAABFIgVAAIAAhXIBLAAIAABXg");
	this.shape_97.setTransform(22.7,120.2,0.673,0.673);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgmAuIAAhZIAUAAIAAA0IAzg2IAGAAIAABZIgUAAIAAg0IgzA2g");
	this.shape_98.setTransform(16,120.2,0.673,0.673);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgJAsIAAhFIgZAAIAAgSIBFAAIAAASIgZAAIAABFg");
	this.shape_99.setTransform(9.9,120.2,0.673,0.673);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AAUArIgUgdIgUAdIgYAAIAigrIgggrIAYAAIASAcIATgcIAYAAIghAqIAjAsg");
	this.shape_100.setTransform(97,107.7,0.673,0.673);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgeAiQgMgMAAgVQAAgTANgNQANgNARAAQASAAAMALQAMAMAAARIgCAKIg+AAQABALAHAGQAHAGAJAAQAOAAAIgIIAHAQQgKAIgWAAQgTAAgLgLgAgUgIIAqAAQgCgTgTAAQgQAAgFATg");
	this.shape_101.setTransform(90.6,107.7,0.673,0.673);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgYAiQgMgLAAgWQAAgUAMgMQANgNAVAAQAQAAALAJIgJAPQgIgHgLAAQgKAAgHAHQgHAJAAAMQAAAcAZAAQALAAAJgIIAHAQQgIAGgHABIgQABQgTAAgLgLg");
	this.shape_102.setTransform(84.5,107.7,0.673,0.673);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgkAsIAAhWIAlgBQAPAAAIAHQAJAGAAALQAAAFgEAGQgEAEgGACQASAGAAAPQAAAMgJAHQgIAGgSAAgAgQAcIARABQAQAAAAgMQAAgFgFgEQgFgDgGAAIgRAAgAgQgbIAAATIAQAAQANAAAAgKQAAgFgDgCQgDgDgGAAIgRABg");
	this.shape_103.setTransform(78.7,107.7,0.673,0.673);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AglAsIAAgRIADAAQAEABABgFQABgHAFgFQAGgGAGgBQgVgEAAgSQAAgLAJgIQAIgHARAAIAkABIAABWIgUAAIAAghIgFAAQgWABgDATQgBAOgQAAIgIAAgAgIgZQgDADAAAFQAAAGAFADQAEAEAHAAIANABIAAgZIgQgBQgFAAgFAEg");
	this.shape_104.setTransform(68.8,107.7,0.673,0.673);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgqAaQAJAAAFgGQAFgEAEgQQAEgSAAgTIAAgGIA6AAIAABWIgUAAIAAhGIgWAAQAAASgDAPQgDAPgGAJQgGAIgHADQgJADgJAAg");
	this.shape_105.setTransform(62.2,107.8,0.673,0.673);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AAfA7IAAgfIg9AAIAAAfIgRAAIAAgvIAIAAQAJgMAFgOQAEgRAAgQIAAgLIA5AAIAABGIAMAAIAAAvgAgTAMIAkAAIAAg2IgVAAQgBAjgOATg");
	this.shape_106.setTransform(55.5,108.8,0.673,0.673);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgmAtIAAhYIAUAAIAAA0IAzg2IAGAAIAABYIgUAAIAAgzIg0A1g");
	this.shape_107.setTransform(45.3,107.7,0.673,0.673);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgqAaQAIAAAGgGQAFgEAEgQQAEgQAAgVIAAgGIA6AAIAABWIgUAAIAAhGIgWAAQgBAVgCAMQgEAQgFAIQgGAIgHADQgIADgKAAg");
	this.shape_108.setTransform(38.3,107.8,0.673,0.673);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgeAiQgMgLAAgWQABgUAMgMQANgNAQAAQAUAAALALQALAMAAARIgBAKIg9AAQAAALAHAGQAGAGALAAQANAAAHgIIAJAQQgLAIgWAAQgTAAgLgLgAgUgIIAqAAQgCgTgTAAQgQAAgFATg");
	this.shape_109.setTransform(32,107.7,0.673,0.673);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AAfA7IAAgfIg9AAIAAAfIgRAAIAAgvIAIAAQAJgMAFgOQAEgRAAgQIAAgLIA5AAIAABGIAMAAIAAAvgAgTAMIAkAAIAAg2IgVAAQgBAigOAUg");
	this.shape_110.setTransform(25.2,108.8,0.673,0.673);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgTAMgMQALgNASAAQAUAAALAMQALANAAATQAAAVgMAMQgMAMgSAAQgSAAgMgMgAgOgUQgGAHAAANQAAAdAUAAQAJAAAGgIQAGgHgBgOQAAgbgUAAQgIAAgGAHg");
	this.shape_111.setTransform(18.5,107.7,0.673,0.673);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgDAtIgWgsIgCgDIgBAAIgHAuIgUAAIARhYIAIAAIAeA9IAgg9IAHAAIARBYIgVAAIgHgpIgBgFIAAAAIgDAHIgVAog");
	this.shape_112.setTransform(11.2,107.7,0.673,0.673);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgDAtIgWgsIgCgEIAAAAIgHAvIgVAAIARhYIAIAAIAfA9IAeg9IAIAAIARBYIgWAAIgGgqIAAgFIgBAAIgEAIIgUAog");
	this.shape_113.setTransform(69.2,95.3,0.673,0.673);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgeAiQgLgLgBgWQABgUAMgNQAMgMASAAQASAAAMALQALALAAASIgBAKIg+AAQABALAGAFQAIAGAJAAQAOAAAHgHIAIAQQgLAIgUAAQgUAAgLgLgAgUgIIAqAAQgDgTgSAAQgQAAgFATg");
	this.shape_114.setTransform(61.9,95.3,0.673,0.673);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AATAqQgDgDgCgEQgCAEgIADQgFADgIAAQgOAAgIgHQgIgHAAgNQAAgOALgIQALgJAVAAIAIABQAAgPgSAAQgMAAgHADIgFgPQAKgFAPAAQATAAAKAJQAJAKAAAYIAAASQAAARAHAFQgCADgEACIgHABQgEAAgEgDgAgSARQAAAMANAAQARAAAAgSIAAgIIgHgBQgXAAAAAPg");
	this.shape_115.setTransform(55.7,95.3,0.673,0.673);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgdAsIAAhXIA7AAIAAASIgnAAIAABFg");
	this.shape_116.setTransform(50.3,95.3,0.673,0.673);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AATAqQgDgDgCgEQgDAFgHACQgFADgIAAQgOAAgIgHQgIgHAAgNQAAgOALgIQALgJAVAAIAIABQAAgPgSAAQgMAAgIADIgEgPQAKgFAPAAQATAAAJAJQAKAJAAAZIAAASQAAASAHAEQgCADgEACIgHABQgFAAgDgDgAgTARQAAAMAOAAQARAAAAgSIAAgIIgIgBQgXAAAAAPg");
	this.shape_117.setTransform(44.5,95.3,0.673,0.673);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgqAaQAJAAAFgGQAFgFAEgPQAEgSAAgUIAAgFIA6AAIAABWIgUAAIAAhGIgWAAQAAAQgDARQgEAQgFAIQgGAIgHADQgHADgLAAg");
	this.shape_118.setTransform(37.9,95.3,0.673,0.673);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AAeA7IAAgeIg7AAIAAAeIgSAAIAAguIAIAAQAJgMAEgPQAFgPABgSIAAgLIA4AAIAABHIAMAAIAAAugAgTANIAkAAIAAg3IgVAAQgBAjgOAUg");
	this.shape_119.setTransform(31.2,96.3,0.673,0.673);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgeAiQgMgMAAgVQAAgUANgNQANgMAQAAQAUAAALALQAMALAAASIgCAKIg+AAQACALAGAFQAHAGAJAAQAPAAAHgHIAIAQQgMAIgVAAQgRAAgNgLgAgTgIIApAAQgCgTgTAAQgQAAgEATg");
	this.shape_120.setTransform(24.5,95.3,0.673,0.673);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgoA+IAAh5IAVAAIAAAGQAHgIAMAAQAoAAAAAuQAAAUgLANQgMALgSAAQgJAAgJgEIAAAlgAgTglIAAAtQAGAEAHAAQANAAAGgHQAGgHAAgOQABgOgHgHQgFgHgOAAQgHAAgGAHg");
	this.shape_121.setTransform(18.1,96.4,0.673,0.673);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AAWA8IAAhkIgrAAIAABkIgVAAIAAh3IBVAAIAAB3g");
	this.shape_122.setTransform(10.9,94.2,0.673,0.673);

	this.instance_7 = new lib.xxxc();
	this.instance_7.parent = this;
	this.instance_7.setTransform(66,114.1,0.612,0.612,0,0,0,113.2,78);

	var maskedShapeInstanceList = [this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88}]},137).to({state:[]},86).wait(137));

	// mask-in-out - копия: 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_211 = new cjs.Graphics().p("AulVfMAKrgq9ISgAAMAAAAq9g");
	var mask_3_graphics_212 = new cjs.Graphics().p("AuOVfMAJGgq9ITXAAMAAAAq9g");
	var mask_3_graphics_213 = new cjs.Graphics().p("At6VfMAHsgq9IUJAAMAAAAq9g");
	var mask_3_graphics_214 = new cjs.Graphics().p("AtnVfMAGagq9IU2AAMAAAAq9g");
	var mask_3_graphics_215 = new cjs.Graphics().p("AtXVfMAFTgq9IVcAAMAAAAq9g");
	var mask_3_graphics_216 = new cjs.Graphics().p("AtJVfMAEVgq9IV+AAMAAAAq9g");
	var mask_3_graphics_217 = new cjs.Graphics().p("As9VfMADhgq9IWaAAMAAAAq9g");
	var mask_3_graphics_218 = new cjs.Graphics().p("AszVfMAC2gq9IWxAAMAAAAq9g");
	var mask_3_graphics_219 = new cjs.Graphics().p("AssVfMACVgq9IXEAAMAAAAq9g");
	var mask_3_graphics_220 = new cjs.Graphics().p("AsmVfMAB8gq9IXRAAMAAAAq9g");
	var mask_3_graphics_221 = new cjs.Graphics().p("AsjVfMABugq9IXZAAMAAAAq9g");
	var mask_3_graphics_222 = new cjs.Graphics().p("AsiVfMABqgq9IXbAAMAAAAq9g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(211).to({graphics:mask_3_graphics_211,x:213.4,y:235.2}).wait(1).to({graphics:mask_3_graphics_212,x:188.4,y:235.2}).wait(1).to({graphics:mask_3_graphics_213,x:165.7,y:235.2}).wait(1).to({graphics:mask_3_graphics_214,x:145.5,y:235.2}).wait(1).to({graphics:mask_3_graphics_215,x:127.6,y:235.2}).wait(1).to({graphics:mask_3_graphics_216,x:112.1,y:235.2}).wait(1).to({graphics:mask_3_graphics_217,x:98.9,y:235.2}).wait(1).to({graphics:mask_3_graphics_218,x:88.2,y:235.2}).wait(1).to({graphics:mask_3_graphics_219,x:79.8,y:235.2}).wait(1).to({graphics:mask_3_graphics_220,x:73.9,y:235.2}).wait(1).to({graphics:mask_3_graphics_221,x:70.3,y:235.2}).wait(1).to({graphics:mask_3_graphics_222,x:69.1,y:235.2}).wait(1).to({graphics:null,x:0,y:0}).wait(137));

	// pic3
	this.instance_8 = new lib.eeer();
	this.instance_8.parent = this;
	this.instance_8.setTransform(60.1,296.8,0.5,0.5,0,0,0,120.1,83.5);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(211).to({_off:false},0).wait(79).to({alpha:0},6,cjs.Ease.get(0.97)).to({_off:true},8).wait(56));

	// text3
	this.instance_9 = new lib.cvsd();
	this.instance_9.parent = this;
	this.instance_9.setTransform(54.7,111,0.85,0.85,0,0,0,81.1,48.7);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(211).to({_off:false},0).wait(79).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},8).wait(56));

	// bg
	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.lf(["#DBDBDB","#FFFFFF","#8A8A8A"],[0,0.514,0.984],13,-49.7,-58.6,225).s().p("Ar1fKMAQwg+TIG7AAMgQwA+Tg");
	this.shape_123.setTransform(69.3,301.1,0.668,1.554,0,6.7,7.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.lf(["#DBDBDB","#FFFFFF","#E8E8E8"],[0,0.514,0.984],0,-51.2,0,86.8).s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape_124.setTransform(70,300,0.667,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_124},{t:this.shape_123}]}).wait(360));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(42.7,296.1,173.3,609.9);
// library properties:
lib.properties = {
	width: 120,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/120x600_atlas_P_.png", id:"120x600_atlas_P_"},
		{src:"images/120x600_atlas_NP_.jpg", id:"120x600_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;