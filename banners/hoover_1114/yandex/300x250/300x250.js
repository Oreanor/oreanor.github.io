(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x250_atlas_P_", frames: [[302,138,69,260],[373,138,60,260],[0,0,210,278],[212,0,88,250],[302,0,150,136]]}
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



(lib._2a = function() {
	this.spriteSheet = ss["300x250_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2b = function() {
	this.spriteSheet = ss["300x250_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["300x250_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["300x250_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,554,368);


(lib.pic0 = function() {
	this.spriteSheet = ss["300x250_atlas_P_"];
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
	this.shape.setTransform(89,-156.8,0.692,0.692);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAfAzIAAhlIASAAIAABlgAgxAzIAAhlIASAAIAAAmIANgBQASAAAJAJQAJAHAAAQQAAAOgJAKQgJAIgTAAgAgfACIAAAiIAJAAQANAAAGgFQADgFAAgIQAAgIgEgFQgGgEgLAAg");
	this.shape_1.setTransform(81,-156.8,0.692,0.692);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAVAzIAAguIgoAAIAAAuIgTAAIAAhlIATAAIAAAoIAoAAIAAgoIASAAIAABlg");
	this.shape_2.setTransform(73.5,-156.8,0.692,0.692);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAUAzIAAguIgnAAIAAAuIgSAAIAAhlIASAAIAAAoIAnAAIAAgoIASAAIAABlg");
	this.shape_3.setTransform(66.7,-156.8,0.692,0.692);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghAmQgLgOAAgYQAAgVAMgQQAMgPAUAAQAVAAAMANQAMAPAAAYQAAAYgMAOQgNAPgVAAQgVAAgLgPgAgSgaQgHAJAAARQAAASAGAKQAGAJAMAAQAMAAAIgKQAHgJAAgSQAAgkgaAAQgMAAgGAKg");
	this.shape_4.setTransform(59.8,-156.8,0.692,0.692);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgnA1IAAhnIASAAIAABDIA1hFIAIAAIAABnIgTAAIAAhEIg0BGg");
	this.shape_5.setTransform(52.9,-156.8,0.692,0.692);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAaBCIAAgeIhDAAIAAhlIASAAIAABWIAjAAIAAhWIASAAIAABWIAMAAIAAAtg");
	this.shape_6.setTransform(46.3,-155.8,0.692,0.692);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAZA0IgIgVIgiAAIgHAVIgUAAIAphnIAHAAIApBngAgLARIAXAAIgMgkg");
	this.shape_7.setTransform(39.5,-156.9,0.692,0.692);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgiA0IAAhmIAdgBQAQAAAIAHQAKAHgBAMQAAANgNAHQATAGAAAUQAAAOgKAIQgKAJgRAAgAgQAlIAKAAQAJAAAHgEQAGgEgBgKQAAgJgEgEQgGgEgLAAIgKAAgAgQgjIAAAYIAKAAQAQAAAAgNQAAgMgPAAg");
	this.shape_8.setTransform(33.5,-156.9,0.692,0.692);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AghAmQgLgOAAgYQAAgVAMgQQAMgPAUAAQAWAAALANQAMAOAAAZQAAAYgNAOQgMAPgVAAQgVAAgLgPgAgTgaQgGAKAAAQQAAASAGAKQAGAJAMAAQAMAAAIgKQAHgJAAgSQAAgkgaAAQgMAAgHAKg");
	this.shape_9.setTransform(26.9,-156.8,0.692,0.692);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAVAzIAAguIgoAAIAAAuIgSAAIAAhlIASAAIAAAoIAoAAIAAgoIARAAIAABlg");
	this.shape_10.setTransform(20,-156.8,0.692,0.692);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAUAzIAAguIgoAAIAAAuIgSAAIAAhlIASAAIAAAoIAoAAIAAgoIATAAIAABlg");
	this.shape_11.setTransform(13.3,-156.8,0.692,0.692);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgnA1IAAhnIASAAIAABDIA1hFIAIAAIAABnIgTAAIAAhEIg0BGg");
	this.shape_12.setTransform(6.4,-156.8,0.692,0.692);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAVAzIAAguIgoAAIAAAuIgSAAIAAhlIASAAIAAAoIAoAAIAAgoIARAAIAABlg");
	this.shape_13.setTransform(-3.5,-156.8,0.692,0.692);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AggAzIAAhlIBBAAIAAAQIgvAAIAAAYIAhAAIAAAPIghAAIAAAeIAuAAIAAAQg");
	this.shape_14.setTransform(-9.6,-156.8,0.692,0.692);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAiBCIAAgeIhDAAIAAAeIgQAAIAAgtIAHAAQAIgJAJgUQAJgUAIglIAuAAIAABWIALAAIAAAtgAgHgJQgIAUgIAKIAsAAIAAhHIgSAAQgDAWgHATg");
	this.shape_15.setTransform(-16.2,-155.8,0.692,0.692);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AApAvQgEgFgCgKQgEgcgWAAIAAAvIgQAAIAAgvQgXAAgEAcQgCALgEAEQgFAFgIAAIgGgBIAAgQIACAAQAEAAABgBIADgIQABgKAGgHQAGgIAKgDQgTgDgEgVIgCgHQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAIgDAAIAAgQIAGgBQAJAAAEAEQAEAGACAKQAEAVAWABIAAgpIAQAAIAAApQAKAAAHgGQAHgGACgKQABgKAEgFQAFgFAIAAIAGABIAAAQIgCAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAIgCAHQgCAIgGAHQgEAGgKADQASAFAFAXQAAAGACACQACABADAAIACAAIAAAQIgFABQgJAAgFgFg");
	this.shape_16.setTransform(-24.4,-156.8,0.692,0.692);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AghAmQgLgOAAgYQAAgVAMgQQAMgPAUAAQAVAAAMANQAMAPAAAYQAAAYgMAOQgNAPgVAAQgVAAgLgPgAgSgaQgHAJAAARQAAASAGAKQAGAJAMAAQAMAAAIgKQAHgJAAgSQAAgkgaAAQgMAAgGAKg");
	this.shape_17.setTransform(-32.5,-156.8,0.692,0.692);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AghA0IAAhmIAVgBQAXAAAMAIQALAHAAAQQAAAigpAAIgHAAIAAAmgAgOgBIAHAAQALAAAGgEQAFgEAAgKQABgPgZAAIgFAAg");
	this.shape_18.setTransform(-38.7,-156.9,0.692,0.692);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhKCtIBclZIA5AAIhbFZg");
	this.shape_19.setTransform(107.3,-171.7,0.836,0.836);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CB0927").s().p("AhLB7IBCj1IBVAAIhCD1g");
	this.shape_20.setTransform(105.5,-152.2,0.836,0.836);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D1D1D1").s().p("Ah3DfIA3jHIBVAAIBCj2IAhAAIh4G9g");
	this.shape_21.setTransform(104.6,-143.8,0.836,0.836);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#DC052B").s().p("AzKDiIBjnDMAkyAABIh5HCg");
	this.shape_22.setTransform(29.7,-157.4,0.692,0.692);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ghggg, new cjs.Rectangle(-55.2,-186.1,169.9,61), null);


(lib.dfgdfggg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMAZQgFgFgBgHIAHgBQABAGADADQADACAEAAQAEAAAEgDQADgDAAgGQAAgEgDgDQgDgEgFAAIgEABIABgFIABAAQADAAAEgCQAEgDAAgFQAAgDgDgDQgDgCgDAAQgEAAgDACQgCADgBAFIgHgBQABgHAFgEQAEgEAHAAQAEAAAEACQAEACACADQACAEAAAEQAAADgCADQgCADgEACQAFABADADQADAEAAAFQAAAIgGAFQgFAFgIAAQgHAAgFgEg");
	this.shape.setTransform(225.5,-146.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgNAYQgEgEgBgHIAHgBQABAGADACQADADAEAAQAEAAAEgEQADgEABgGQgBgGgDgDQgEgDgEAAQgDAAgDACQgDABgCACIgGgBIAFgdIAcAAIAAAHIgWAAIgDAPQAFgDAFAAQAIAAAEAFQAGAEAAAIQAAAIgFAGQgFAHgJAAQgIAAgFgFg");
	this.shape_1.setTransform(221.1,-146.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_2.setTransform(216.4,-146.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMAXQgFgHgBgQQAAgJACgGQACgHAFgDQADgDAGAAQAEAAAEACQAEABACAEIADAIIABANQAAAKgBAGQgCAGgFAEQgEADgGAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQADgFAAgOQAAgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_3.setTransform(212.1,-146.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgKAcQABgHACgJQADgKAEgIQAEgIAFgHIgbAAIAAgGIAkAAIAAAFQgFAGgGAKQgFAIgCALQgCAHAAAIg");
	this.shape_4.setTransform(207.7,-146.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMAXQgFgHgBgQQAAgJACgGQADgHADgDQAEgDAGAAQAEAAAEACQADABADAEIADAIIABANQAAAKgCAGQgBAGgFAEQgEADgGAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQAEgFAAgOQAAgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_5.setTransform(203.2,-146.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNAXQgFgHAAgPQAAgPAGgIQAFgGAIAAQAIAAADAEQAFADABAHIgHABQgBgFgCgBQgCgDgFAAIgFABQgDADgCAEQgCAFAAAJQACgEAEgCIAHgCQAHAAAFAFQAFAEAAAJQAAAFgCAFQgDAEgEADQgEACgFAAQgIAAgGgGgAgHABQgDADAAAGIACAHQABADADACQACABADAAQAEAAAEgDQACgEAAgGQAAgGgCgDQgDgDgFAAQgEAAgEADg");
	this.shape_6.setTransform(198.8,-146.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMAaQgEgEgBgHIAHgBQABAFACACQADACADAAQADAAACgBIAEgEIADgHIABgIIAAgCQgCAEgEACQgEACgDAAQgHAAgFgFQgFgEAAgJQAAgJAFgFQAFgFAIAAQAFAAAEADQAFADACAFQADAGAAAKQAAAKgDAHQgCAGgFAEQgEADgGAAQgGAAgFgDgAgHgTQgEAEAAAGQAAAGAEADQADADAEAAQAFAAADgDQADgDAAgGQAAgGgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_7.setTransform(194.3,-146.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgKAcQAAgHADgJQACgKAFgIQAEgIAGgHIgcAAIAAgGIAlAAIAAAFQgGAGgGAKQgFAIgCALQgCAHgBAIg");
	this.shape_8.setTransform(189.9,-146.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgJAcQgBgHADgJQADgKAEgIQAEgIAFgHIgbAAIAAgGIAkAAIAAAFQgFAGgFAKQgGAIgCALQgCAHAAAIg");
	this.shape_9.setTransform(185.5,-146.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_10.setTransform(180.8,-146.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgMAXQgGgHABgQQAAgJACgGQABgHAEgDQAFgDAFAAQAEAAAEACQADABADAEIAEAIIABANQAAAKgDAGQgCAGgDAEQgFADgGAAQgIAAgEgGgAgHgSQgEAFAAANQAAAOAEAFQADAEAEAAQAFAAADgEQADgFABgOQgBgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_11.setTransform(176.5,-146.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_12.setTransform(171.8,-146.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_13.setTransform(164.8,-146.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAIABQAFABACACQADACACADQACAEAAAEQAAAHgFAEQgFAFgLAAIgOAAIAAAYgAgNAAIAOAAQAHAAADgDQADgDAAgFQAAgDgBgDQgCgCgEgBIgGgBIgOAAg");
	this.shape_14.setTransform(159.3,-146.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgRAdIAAg5IAkAAIAAAHIgdAAIAAAyg");
	this.shape_15.setTransform(154.7,-146.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_16.setTransform(149.1,-146.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgMAYQgGgEAAgHIAHgBQABAGADACQADADAEAAQAEAAAEgEQAEgEAAgGQAAgGgEgDQgEgDgEAAQgEAAgCACQgDABgCACIgGgBIAGgdIAbAAIAAAHIgWAAIgDAPQAFgDAFAAQAHAAAGAFQAFAEAAAIQAAAIgEAGQgGAHgJAAQgIAAgEgFg");
	this.shape_17.setTransform(141.6,-146.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_18.setTransform(136.8,-146.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgMAXQgGgHABgQQAAgJABgGQACgHAFgDQAEgDAFAAQAFAAADACQADABADAEIAEAIIABANQAAAKgCAGQgCAGgFAEQgDADgHAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQADgFAAgOQAAgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_19.setTransform(132.6,-146.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgSAdIABgFIAEgIIAJgIQAJgIADgEQADgEAAgEQAAgEgCgDQgDgDgFAAQgEAAgEADQgCADAAAGIgHgBQAAgIAFgEQAEgFAIAAQAIAAAFAFQAEAEABAHIgBAHQgCADgEADQgDAEgHAGIgIAHIgCAEIAbAAIAAAHg");
	this.shape_20.setTransform(128.1,-146.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_21.setTransform(123.4,-146.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgMAYQgGgEAAgHIAHgBQABAGADACQADADAEAAQAFAAADgEQAEgEgBgGQABgGgEgDQgDgDgFAAQgEAAgCACQgDABgBACIgHgBIAGgdIAbAAIAAAHIgWAAIgDAPQAFgDAFAAQAHAAAGAFQAFAEAAAIQAAAIgEAGQgGAHgJAAQgHAAgFgFg");
	this.shape_22.setTransform(119.3,-146.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_23.setTransform(114.7,-146.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgMAXQgGgHABgQQAAgJACgGQABgHAEgDQAFgDAFAAQAEAAAEACQADABADAEIAEAIIABANQAAAKgDAGQgCAGgDAEQgFADgGAAQgIAAgEgGgAgHgSQgEAFAAANQAAAOAEAFQADAEAEAAQAFAAADgEQADgFABgOQgBgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_24.setTransform(110.4,-146.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgJAcQAAgHACgJQADgKAEgIQAEgIAGgHIgbAAIAAgGIAkAAIAAAFQgGAGgFAKQgGAIgCALQgCAHgBAIg");
	this.shape_25.setTransform(106,-146.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgKAcQABgHACgJQADgKAEgIQAEgIAFgHIgbAAIAAgGIAkAAIAAAFQgFAGgGAKQgFAIgCALQgCAHAAAIg");
	this.shape_26.setTransform(101.5,-146.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_27.setTransform(94.2,-146.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_28.setTransform(88.4,-146.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAQAdIAAgsIgeAsIgHAAIAAg5IAGAAIAAAtIAegtIAIAAIAAA5g");
	this.shape_29.setTransform(82.6,-146.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_30.setTransform(76.5,-143.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgMAYQgGgFAAgHQAAgGADgEQADgCAFgCQgEgBgCgDQgDgDAAgEQAAgHAFgEQAFgEAGAAQAHAAAFAEQAEAEAAAHQAAAEgBADQgCADgFABQAFACADADQADAEAAAFQAAAHgFAFQgGAFgIAAQgIAAgEgFgAgHAEQgDADAAAFIABAGIAEAEIAFABQAFAAADgDQAEgDAAgFQAAgFgEgDQgDgEgFAAQgEAAgDAEgAgGgUQgDADAAADQAAAEADADQADADADAAQAEAAADgDQADgDgBgDQABgEgDgDQgDgCgEAAQgDAAgDACg");
	this.shape_31.setTransform(73.1,-146.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_32.setTransform(67.6,-143.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAQAbIAAgMIgfAAIAAAMIgGAAIAAgSIAEAAQAHgJAAgaIAcAAIAAAjIAEAAIAAASgAgLAJIAWAAIAAgdIgPAAQgBAUgGAJg");
	this.shape_33.setTransform(64,-144.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgDAHQAAAAABgBQAAAAABgBQAAAAABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_34.setTransform(58.5,-143.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAKAcIAAgeIgSAeIgIAAIAAgoIAHAAIAAAeIATgeIAHAAIAAAogAgGgUQgDgDgBgEIAEAAIADADIADABIAFgBIACgDIAFAAQAAAEgDADQgDACgFAAQgEAAgDgCg");
	this.shape_35.setTransform(55.2,-146.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgKAEIAAgHIAVAAIAAAHg");
	this.shape_36.setTransform(51.6,-145.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgSAdIABgFIAEgIIAJgIQAJgIADgEQADgEAAgEQAAgEgCgDQgDgDgFAAQgEAAgEADQgCADAAAGIgHgBQAAgIAFgEQAFgFAHAAQAIAAAFAFQAEAEABAHIgBAHQgCADgEADQgDAEgHAGIgIAHIgCAEIAbAAIAAAHg");
	this.shape_37.setTransform(48,-146.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAKAcIAAgeIgTAeIgHAAIAAgoIAHAAIAAAeIASgeIAIAAIAAAogAgHgUQgDgDAAgEIAEAAIADADIADABIAFgBIACgDIAFAAQgBAEgDADQgDACgFAAQgEAAgDgCg");
	this.shape_38.setTransform(41.5,-146.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAKAVIAAgfIgSAfIgIAAIAAgpIAHAAIAAAfIATgfIAHAAIAAApg");
	this.shape_39.setTransform(37,-145.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAIAVIgIgNIgDgFIgEgBIAAATIgHAAIAAgpIAHAAIAAASQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQABgBACgHIADgGIADgCIAFgBIACAAIAAAGIgCAAIgEABIgCAFIgDAGIgDACQADABAFAHIAHANg");
	this.shape_40.setTransform(33.3,-145.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_41.setTransform(29.4,-145.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAKAVIAAgTIgTAAIAAATIgHAAIAAgpIAHAAIAAASIATAAIAAgSIAHAAIAAApg");
	this.shape_42.setTransform(25.1,-145.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAKAVIAAgfIgSAfIgIAAIAAgpIAHAAIAAAfIATgfIAHAAIAAApg");
	this.shape_43.setTransform(20.7,-145.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAXAbIAAgMIgzAAIAAgpIAHAAIAAAjIAQAAIAAgjIAGAAIAAAjIAQAAIAAgjIAHAAIAAAjIAFAAIAAASg");
	this.shape_44.setTransform(15.3,-144.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgNAQQgGgFAAgLQAAgLAHgFQAGgFAGAAQAIAAAGAGQAFAGABAJQgBAHgCAFQgCAFgFACQgEADgGAAQgIAAgFgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQADgEABgIQgBgHgDgEQgDgEgGAAQgEAAgDAEg");
	this.shape_45.setTransform(9.6,-145.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAJABQADABAEACQACACACADQACAEAAAEQAAAHgFAEQgEAFgMAAIgOAAIAAAYgAgNAAIAOAAQAHAAADgDQADgDAAgFQAAgDgCgDQgCgCgCgBIgHgBIgOAAg");
	this.shape_46.setTransform(4.8,-146.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AARAbIAAgMIggAAIAAAMIgGAAIAAgSIAEAAQAHgJAAgaIAcAAIAAAjIAEAAIAAASgAgLAJIAWAAIAAgdIgQAAQAAAUgGAJg");
	this.shape_47.setTransform(180.7,-152.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgPAJIAHgBQAAAEADACQADACADAAQADAAACgCQADgCAAgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAIgFAAIgCAAIAAgFIAFAAIADgCQABAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAQgCgCgDAAQgEAAgDAHIgHgBQAEgMALAAQAGAAAEAEQAEAEgBAFQAAAFgEADQACAAACADQACADAAADQAAAGgEADQgFAEgGAAQgOAAgCgNg");
	this.shape_48.setTransform(176.6,-153.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgNAQQgFgGAAgKQAAgJAFgGQAGgGAIAAQAHAAAGAGQAFAGAAAJIAAACIgeAAQABAHADADQAEAEAEAAQADAAAEgCQACgCABgFIAIABQgCAHgFADQgEAEgHAAQgIAAgGgGgAgGgMQgEAEgBAFIAXAAQAAgFgDgDQgEgEgEAAQgFAAgCADg");
	this.shape_49.setTransform(172.6,-153.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgNAQQgFgFgBgLQABgLAGgFQAGgFAGAAQAIAAAGAGQAGAGgBAJQAAAHgCAFQgDAFgEACQgEADgGAAQgHAAgGgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAGAAADgEQAEgEAAgIQAAgHgEgEQgDgEgGAAQgEAAgEAEg");
	this.shape_50.setTransform(168.1,-153.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgRAdIAAg4IAGAAIAAAFQADgDADgCQACgBADAAQAFAAAFADQAEACABAFQADAFAAAGQAAAHgDAEQgCAFgEACQgEADgFAAQgDAAgCgBQgDgCgCgCIAAAUgAgHgSQgEAEAAAIQAAAHAEAEQADADAEAAQAEAAADgEQAEgEAAgHQAAgIgEgEQgDgEgEAAQgEAAgDAFg");
	this.shape_51.setTransform(163.8,-152.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAOAdIAAgyIgcAAIAAAyIgIAAIAAg5IAsAAIAAA5g");
	this.shape_52.setTransform(158.6,-154.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgDAHQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_53.setTransform(152.4,-151.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgOASQgEgDAAgFQAAgDACgDQAAgCADgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgCACQgDACgBAEIgHgBIADgHQADgDAEgBQAEgCAEAAQAFAAAEACQADABABACIACAFIABAGIAAAIIABANIABAFIgHAAQgCgCABgDIgIAEIgHACQgHAAgDgEgAgBADIgGABIgDACIgBAEQAAAAABABQAAABAAAAQAAABABAAQAAABABAAQABACAFAAQADAAADgCQADgBACgDQABgDAAgEIAAgDIgLADg");
	this.shape_54.setTransform(149.1,-153.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgQAVIAAgpIAQAAIAIABQADABACADQACADAAADIgBAFIgEAEQADAAACADQACACAAAEQAAAGgFADQgDADgIAAgAgJAPIAJAAIAIgBQACgCAAgDIgBgEQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAIgFAAIgJAAgAgJgCIAIAAIAEgBIAEgCQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgDgCgCIgHgBIgIAAg");
	this.shape_55.setTransform(144.9,-153.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAIAVIgIgNIgDgFIgEgBIAAATIgHAAIAAgpIAHAAIAAASQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQABgBACgHIADgGIADgCIAFgBIACAAIAAAGIgCAAIgEABIgCAFIgDAGIgDACQADABAFAHIAHANg");
	this.shape_56.setTransform(141.1,-153.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_57.setTransform(137.2,-153.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgNAQQgGgFAAgLQAAgLAHgFQAGgFAGAAQAIAAAGAGQAFAGABAJQgBAHgCAFQgCAFgFACQgEADgGAAQgIAAgFgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQADgEAAgIQAAgHgDgEQgDgEgGAAQgEAAgDAEg");
	this.shape_58.setTransform(132.9,-153.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAUAdIAAgvIgRAvIgFAAIgRgwIAAAwIgHAAIAAg5IALAAIAOAoIABAJIADgKIAOgnIAKAAIAAA5g");
	this.shape_59.setTransform(127.3,-154.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_60.setTransform(120.8,-151.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgLAVIAAgpIAXAAIAAAGIgQAAIAAAjg");
	this.shape_61.setTransform(118.4,-153.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgDAHQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_62.setTransform(113.4,-151.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgMAaQgEgEgBgHIAHgBQABAFACACQADACADAAQADAAACgBIAEgEIADgHIABgIIAAgCQgCAEgEACQgEACgDAAQgHAAgFgFQgFgEAAgJQAAgJAFgFQAFgFAIAAQAFAAAEADQAFADACAFQADAGAAAKQAAAKgDAHQgCAGgFAEQgEADgGAAQgGAAgFgDgAgHgTQgEAEAAAGQAAAGAEADQADADAEAAQAFAAADgDQADgDAAgGQAAgGgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_63.setTransform(110.1,-154.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_64.setTransform(105.3,-154.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_65.setTransform(101,-154.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgMAYQgFgEgBgHIAHgBQABAGADACQADADAEAAQAEAAAEgEQADgEABgGQgBgGgDgDQgEgDgEAAQgDAAgDACQgDABgCACIgGgBIAFgdIAcAAIAAAHIgWAAIgDAPQAFgDAFAAQAIAAAEAFQAGAEAAAIQAAAIgFAGQgFAHgJAAQgIAAgEgFg");
	this.shape_66.setTransform(96.8,-154);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_67.setTransform(92,-154.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_68.setTransform(87.5,-154.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgBASIAKgSIgKgRIAFAAIANARIgNASgAgQASIALgSIgLgRIAGAAIALARIgLASg");
	this.shape_69.setTransform(81.2,-153.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_70.setTransform(77.9,-151.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgRAdIAAg5IAkAAIAAAHIgdAAIAAAyg");
	this.shape_71.setTransform(74.9,-154.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_72.setTransform(71.4,-151.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_73.setTransform(67.3,-154.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_74.setTransform(63.4,-151.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgMAZQgGgDgDgHQgDgHAAgIQAAgIADgHQAEgHAGgEQAGgDAHAAQAIAAAGAEQAGAFACAIIgHABQgCgFgEgEQgEgCgFAAQgGgBgEAEQgFADgCAFQgBAFAAAGQAAAHACAFQACAGAEADQAFACAEAAQAGAAAFgEQAEgDACgIIAHACQgCAKgGAEQgGAFgJABQgJgBgFgEg");
	this.shape_75.setTransform(59.3,-154.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAQAdIAAgsIgeAsIgHAAIAAg5IAGAAIAAAtIAegtIAIAAIAAA5g");
	this.shape_76.setTransform(51.4,-154.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AATAjIAAgNIglAAIAAANIgHAAIAAgUIAFAAQAHgKAAgfIAAgIIAhAAIAAAxIAGAAIAAAUgAgGgYIgBAUQgCALgEAIIAaAAIAAgrIgTAAg");
	this.shape_77.setTransform(45.6,-153.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_78.setTransform(40.2,-154.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AASAdIgHgSIgXAAIgGASIgIAAIAWg5IAHAAIAYA5gAgDgLIgGAQIASAAIgGgPIgDgLIgDAKg");
	this.shape_79.setTransform(34.6,-154.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AALAdIgKgQQgDgGgDgDQgDgCgEAAIAAAbIgHAAIAAg5IAHAAIAAAaQAGAAABgCQADgCACgIIAEgIIAFgEQACgCADAAIAGABIAAAGIgCAAIgCAAQgDAAgCACIgFAHQgCAIgCABIgEADQAEABAGAJIAMATg");
	this.shape_80.setTransform(29.9,-154.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AALASIgLgSIALgRIAGAAIgKARIAKASgAgDASIgNgSIANgRIAFAAIgJARIAJASg");
	this.shape_81.setTransform(25,-153.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_82.setTransform(17.5,-154.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_83.setTransform(11.3,-154.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_84.setTransform(5.1,-154.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dfgdfggg, new cjs.Rectangle(0,-160.4,229.9,20.8), null);


(lib.a3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtHQkIAAoRIaPAAIAAIRg");
	mask.setTransform(73.1,106);

	// Слой 1
	this.instance = new lib._3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.7,0.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.a3, new cjs.Rectangle(0,159.2,147,35.4), null);


(lib.a2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtHMqIAAoRIaPAAIAAIRg");
	mask.setTransform(73.1,81);

	// Слой 1
	this.instance = new lib._3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.7,0.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.a2, new cjs.Rectangle(0,109.2,147,52.9), null);


(lib.a1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtHIrIAAxVIaPAAIAARVg");
	mask.setTransform(73.1,54.6);

	// Слой 1
	this.instance = new lib._3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.7,0.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.a1, new cjs.Rectangle(0,0,147,110.1), null);


(lib.hgj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#706F70").s().p("AgoApQgRgRAAgYQAAgXARgRQARgQAXgBQAYAAARARQARARAAAXQAAAYgRARQgQARgZAAQgXAAgRgRgAgigjQgPAQAAATQAAAUAPAQQAOAOAUAAQAUAAAPgOQAPgQAAgUQAAgTgPgQQgPgOgUAAQgTAAgPAOgAAQAgIgBgBIAAgIQAAgLgGgEQgDgBgIAAIgJAAIAAAZIgLAAIAAg/IAWAAQALAAAFADQAKADAAANQAAAHgGAFQgDABgGABQAHABADAFQAEAFAAAFIAAAFIABAHIAAACgAgLAAIAKAAQAGgBAEgBQAFgCABgHQAAgIgEgCQgEgDgJAAIgJAAg");
	this.shape.setTransform(53.4,53.4);

	this.instance = new lib.ClipGroup_9();
	this.instance.parent = this;
	this.instance.setTransform(1,0.5,1,1,0,0,0,51.6,51.6);

	this.instance_1 = new lib.ClipGroup_1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(18.6,2.5,1,1,0,0,0,28.2,11.3);

	this.instance_2 = new lib.ClipGroup_2_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.9,16.1,1,1,0,0,0,8.8,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlsFtQiYiXABjWQgBjVCYiYQCXiWDVgBQDWABCXCWQCYCYAADVQAADWiYCXQiXCYjWgBQjVABiXiYgAhuAqIhoGEQBlAyBxAAQDHAACNiMQCNiNAAjHQAAhGgVhEgAnHCYQAbBSA2BDQA1BDBKAsIBflkIh8AnIglCKIgqANIAliJgAmIkUQhYB9AACXQAABCASA/ICXgwICOoSQiKAzhVB6gAh+nPIiPISIB8gnIBVk6IAqgMIhUE4IIrivQgziNh6hYQh9haibAAQhAAAg+ARg");
	this.shape_1.setTransform(-0.1,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AidBxQgJgMAEgbQAGgbASgWQASgWAXgFQAXgHALAMQAMANgGAbQgEAWgNATQgNATgRAKgAhnAaQgVAHgGAgQgDARAFAHQAEAEAIgCQAVgGAGggQAEgSgGgGQgDgDgEAAIgFAAgAjZBxQAIgJACgQQAEgSgGgGQgEgFgIACQgHADgHAIQgJAKgEASQgBAJAAAEIgfAAIABgEQAFgbASgVQASgWAXgHQAXgHAMANQALANgGAcQgEASgJAQgAgsgUIAkgJIADBDIAAAAIAihRIAkgMIg+CIIglANgABRg8IBHgWIgHAgIglANIgCAPIAfgMIgGAfIggAJIgDAPIAngOIgIAkIhJAWgAC5hdIBCgSQAQgEAIAGQAJAGgDARQgFAXgSAMQANABgDAYIgCANQgBAJABADIgjAJQAAgHABgKQACgLgBgEQgCgHgJADIgQABIgLAwIgkALgADmhOIgQAFIgGAYIATgFQAPgEADgMQABgHgDgBIgFgBIgIABg");
	this.shape_2.setTransform(17.4,2.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhPAPQgLgMAEgYIAfAAQABAJAFADQAEADAGgCQAKgEAGgJIAcAAQgTAggfAJQgIACgHAAQgMAAgHgHgAAkgVIA1AAQgKAFgHACQgJACgHAAQgNAAgHgJg");
	this.shape_3.setTransform(-2,16.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#77231F").s().p("AlsFtQiYiXABjWQgBjVCYiXQCXiYDVAAQDWAACYCYQCXCXAADVQAADWiXCXQiYCYjWAAQjVAAiXiYgAhuAqIhoGFQBlAyBxAAQDHAACNiNQCNiNAAjHQAAhHgVhDgAnHCYQAbBSA2BDQA2BDBJAsIBflkIh8AnIglCKIgpANIAkiJgAmIkUQhYB8AACYQAABCASA/ICYgwICNoSQiKA0hVB5gAh+nPIiPISIB9gnIBUk6IAqgMIhUE5IIriwQgziNh6hYQh9haibAAQhCAAg8ARg");
	this.shape_4.setTransform(1.3,1.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#77231F").s().p("AjPBYQAEgSgGgGQgEgFgIACQgVAGgGAhIgBANIgfAAIAAgEQAGgbARgVQASgWAYgHQAXgHALANQAMANgGAbQgDATgKAQIgdAAQAIgLACgOgAidBxQgKgNAFgaQAGgbARgWQASgWAYgFQAXgHALAMQALANgFAbQgEAWgNATQgNATgSAKgAhnAaQgIACgHAIQgJALgDASQgEARAGAGQAEAFAIgCQAVgHAGggQAEgRgGgGQgDgDgFAAIgEAAgAgsgUIAjgJIAEBDIAihSIAkgLIg+CIIglANgABRg8IBGgWIgGAfIglAOIgDAPIAfgMIgFAfIggAJIgDAPIAmgOIgIAkIhIAWgAC4hdIBDgSQAQgEAIAGQAJAGgDARQgFAXgTAMQAOABgDAYQgEAVACAEIgjAJQAAgHABgKQACgLgBgEQgCgHgKADIgQABIgKAwIgkALgADmhOIgRAFIgFAYIASgFQAQgFACgMQACgIgIAAIgIABg");
	this.shape_5.setTransform(18.8,3.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#77231F").s().p("AhPAPQgLgMAEgZIAfAAQAAAKAFADQAEADAGgCQAJgDAIgLIAcABQgTAggfAJQgIADgHAAQgMAAgHgIgAAkgWIA0AAQgIAGgJACQgIACgGAAQgOAAgHgKg");
	this.shape_6.setTransform(-0.6,17.3);

	this.instance_3 = new lib.ClipGroup_3_0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,1,1,0,0,0,111,111);

	this.instance_4 = new lib.ClipGroup_4_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,1,1,0,0,0,113.1,113.1);

	this.instance_5 = new lib.ClipGroup_5_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,0,1,1,0,0,0,118.4,118.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hgj, new cjs.Rectangle(-118.4,-118.4,236.8,236.8), null);


(lib.ghgf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hgj();
	this.instance.parent = this;
	this.instance.setTransform(31.2,-115.5,0.855,0.855,0,0,0,0.3,-0.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#706F6F").s().p("AgrBHIAAiNIBWAAIAAAOIhHAAIAAAyIA/AAIAAAMIg/AAIAAAzIBIAAIAAAOg");
	this.shape.setTransform(99.1,-50.2,0.855,0.855);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#706F6F").s().p("AgGBHIgziNIARAAIAoB3IAqh3IAQAAIgzCNg");
	this.shape_1.setTransform(88.4,-50.2,0.855,0.855);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#706F6F").s().p("AgHBHIAAiNIAPAAIAACNg");
	this.shape_2.setTransform(80.6,-50.2,0.855,0.855);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#706F6F").s().p("AgHBHIAAh/IgnAAIAAgOIBdAAIAAAOIgoAAIAAB/g");
	this.shape_3.setTransform(73.7,-50.2,0.855,0.855);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#706F6F").s().p("AAtBHIgNglIg/AAIgOAlIgQAAIA2iNIAOAAIA3CNgAgaAUIA1AAIgbhHg");
	this.shape_4.setTransform(64.4,-50.3,0.855,0.855);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#706F6F").s().p("AgGBHIgziNIARAAIAoB3IAqh3IAQAAIgzCNg");
	this.shape_5.setTransform(54.5,-50.2,0.855,0.855);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#706F6F").s().p("AgrA1QgRgUAAggIAAgBQAAgfARgVQARgUAaAAQAbAAARAUQARAUAAAgIAAABQAAAfgRAVQgRAUgbAAQgaAAgRgUgAgggqQgMAQAAAaIAAABQAAAZAMARQAOAQASAAQAUAAAMgQQANgQAAgaIAAgBQAAgZgNgRQgMgQgUAAQgTAAgNAQg");
	this.shape_6.setTransform(43.3,-50.2,0.855,0.855);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAPAAIBJBvIAAhvIAPAAIAACNg");
	this.shape_7.setTransform(31.2,-50.2,0.855,0.855);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAPAAIBJBvIAAhvIAPAAIAACNg");
	this.shape_8.setTransform(19.5,-50.2,0.855,0.855);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#706F6F").s().p("AgHBHIAAiNIAOAAIAACNg");
	this.shape_9.setTransform(11.4,-50.2,0.855,0.855);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAOAAIBKBvIAAhvIAPAAIAACNg");
	this.shape_10.setTransform(-1.2,-50.2,0.855,0.855);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#706F6F").s().p("AAgBHIgig3IghAAIAAA3IgPAAIAAiNIAxAAQAYAAAMANQALAMAAARIAAABQAAAfgiAJIAnA6gAgjACIAfAAQAQAAAKgHQAJgIAAgOQAAgdghAAIghAAg");
	this.shape_11.setTransform(-12.1,-50.2,0.855,0.855);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#706F6F").s().p("AgrA1QgRgUAAggIAAgBQAAgfARgVQARgUAaAAQAbAAARAUQARAUAAAgIAAABQAAAfgRAVQgRAUgbAAQgaAAgRgUgAgggqQgMAQAAAaIAAABQAAAZAMARQAOAQASAAQAUAAAMgQQANgQAAgaIAAgBQAAgZgNgRQgMgQgUAAQgTAAgNAQg");
	this.shape_12.setTransform(-24.1,-50.2,0.855,0.855);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#706F6F").s().p("AgwBHIAAiNIAwAAQAWAAAMAMQAJAKAAAOQAAAYgXAJQAdAIAAAZIAAABQAAASgNAKQgOAKgWAAgAghA5IAhAAQAQAAAJgGQAJgHAAgMIAAgBQAAgZgiAAIghAAgAghgGIAfAAQANAAAIgHQAJgHAAgMQAAgMgIgGQgIgGgNAAIggAAg");
	this.shape_13.setTransform(-35.3,-50.2,0.855,0.855);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// Слой 4
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#DBDBDB","#E9E9E9","#8A8A8A"],[0,0.514,0.984],122.1,-313.5,-51,131.1).s().p("Aq6cMMAOZg4XIHcAAMgOaA4Xg");
	this.shape_14.setTransform(-87,-74.3,0.469,0.758,4,0,0,-0.3,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

	// Слой 5
	this.instance_1 = new lib.bg2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-119,-199,0.542,0.679);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ghgf, new cjs.Rectangle(-129.1,-216.4,310.2,277.7), null);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hgj();
	this.instance.parent = this;
	this.instance.setTransform(11.8,-20.3,0.57,0.57,0,0,0,0,-0.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#706F6F").s().p("AgrBHIAAiNIBWAAIAAAOIhHAAIAAAyIA/AAIAAAMIg/AAIAAAzIBIAAIAAAOg");
	this.shape.setTransform(57.1,23,0.57,0.57);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#706F6F").s().p("AgGBHIgziNIARAAIAoB3IAqh3IAQAAIgzCNg");
	this.shape_1.setTransform(49.9,23.1,0.57,0.57);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#706F6F").s().p("AgHBHIAAiNIAPAAIAACNg");
	this.shape_2.setTransform(44.7,23,0.57,0.57);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#706F6F").s().p("AgHBHIAAh/IgnAAIAAgOIBdAAIAAAOIgoAAIAAB/g");
	this.shape_3.setTransform(40.1,23,0.57,0.57);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#706F6F").s().p("AAtBHIgNglIg/AAIgOAlIgQAAIA2iNIAOAAIA3CNgAgaAUIA1AAIgbhHg");
	this.shape_4.setTransform(33.9,23,0.57,0.57);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#706F6F").s().p("AgGBHIgziNIARAAIAoB3IAqh3IAQAAIgzCNg");
	this.shape_5.setTransform(27.3,23.1,0.57,0.57);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#706F6F").s().p("AgrA1QgRgUAAggIAAgBQAAgfARgVQARgUAaAAQAbAAARAUQARAUAAAgIAAABQAAAfgRAVQgRAUgbAAQgaAAgRgUgAgggqQgMAQAAAaIAAABQAAAZAMARQAOAQASAAQAUAAAMgQQANgQAAgaIAAgBQAAgZgNgRQgMgQgUAAQgTAAgNAQg");
	this.shape_6.setTransform(19.9,23,0.57,0.57);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAPAAIBJBvIAAhvIAPAAIAACNg");
	this.shape_7.setTransform(11.8,23,0.57,0.57);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAPAAIBJBvIAAhvIAPAAIAACNg");
	this.shape_8.setTransform(3.9,23,0.57,0.57);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#706F6F").s().p("AgHBHIAAiNIAOAAIAACNg");
	this.shape_9.setTransform(-1.5,23,0.57,0.57);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAOAAIBKBvIAAhvIAPAAIAACNg");
	this.shape_10.setTransform(-9.9,23,0.57,0.57);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#706F6F").s().p("AAgBHIgig3IghAAIAAA3IgPAAIAAiNIAxAAQAYAAAMANQALAMAAARIAAABQAAAfgiAJIAnA6gAgjACIAfAAQAQAAAKgHQAJgIAAgOQAAgdghAAIghAAg");
	this.shape_11.setTransform(-17.1,23,0.57,0.57);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#706F6F").s().p("AgrA1QgRgUAAggIAAgBQAAgfARgVQARgUAaAAQAbAAARAUQARAUAAAgIAAABQAAAfgRAVQgRAUgbAAQgaAAgRgUgAgggqQgMAQAAAaIAAABQAAAZAMARQAOAQASAAQAUAAAMgQQANgQAAgaIAAgBQAAgZgNgRQgMgQgUAAQgTAAgNAQg");
	this.shape_12.setTransform(-25.1,23,0.57,0.57);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#706F6F").s().p("AgwBHIAAiNIAwAAQAWAAAMAMQAJAKAAAOQAAAYgXAJQAdAIAAAZIAAABQAAASgNAKQgOAKgWAAgAghA5IAhAAQAQAAAJgGQAJgHAAgMIAAgBQAAgZgiAAIghAAgAghgGIAfAAQANAAAIgHQAJgHAAgMQAAgMgIgGQgIgGgNAAIggAAg");
	this.shape_13.setTransform(-32.6,23,0.57,0.57);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#706F6F").s().p("AAVAcIAAgqIgVAcIgUgcIAAAqIgIAAIAAg3IAIAAIAUAdIAVgdIAIAAIAAA3g");
	this.shape_14.setTransform(67.7,49.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#706F6F").s().p("AAYAcIAAg3IAJAAIAAA3gAgfAcIAAg3IAIAAIAAAVIAPAAQAKAAAFAEQAHAEAAAIQgBAJgFAFQgGAEgJAAgAgXAVIAPAAQAHAAACgDQAEgDAAgFQAAgEgEgDQgDgDgGAAIgPAAg");
	this.shape_15.setTransform(59.6,49.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#706F6F").s().p("AARAcIAAgYIghAAIAAAYIgIAAIAAg3IAIAAIAAAYIAhAAIAAgYIAIAAIAAA3g");
	this.shape_16.setTransform(52,49.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#706F6F").s().p("AAQAcIAAgYIgfAAIAAAYIgJAAIAAg3IAJAAIAAAYIAfAAIAAgYIAJAAIAAA3g");
	this.shape_17.setTransform(45.1,49.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#706F6F").s().p("AgUAVQgJgIABgNQgBgLAJgJQAJgJALAAQANAAAIAJQAIAIAAAMQAAANgIAIQgJAJgMAAQgLAAgJgJgAgOgPQgGAHAAAIQAAAKAGAGQAGAGAIAAQAJAAAGgGQAGgGAAgKQAAgIgGgHQgGgGgJAAQgIAAgGAGg");
	this.shape_18.setTransform(38.2,49.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#706F6F").s().p("AARAcIAAgrIghArIgIAAIAAg3IAIAAIAAAsIAhgsIAIAAIAAA3g");
	this.shape_19.setTransform(31.1,49.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#706F6F").s().p("AAUAjIAAgOIgwAAIAAg4IAJAAIAAAxIAfAAIAAgxIAIAAIAAAxIAJAAIgCAVg");
	this.shape_20.setTransform(24.6,50.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#706F6F").s().p("AgSAYQgGgEAAgIQAAgKAGgDQAHgFALAAQAIAAAIACIAAgBQABgIgFgEQgEgEgIAAQgIAAgJAFIgCgHQAKgGAJAAQANAAAGAHQAGAGAAALIAAAhIgJAAIAAgIQgHAKgMAAQgJAAgGgGgAgLADQgFADABAGQAAAEADAEQAFACAGAAQAGAAAGgDQAGgFgBgHIAAgFQgJgCgHAAQgHAAgEADg");
	this.shape_21.setTransform(17.4,49.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#706F6F").s().p("AgYAcIAAg3IAbAAQAJAAAEADQAFAFABAGQAAAJgKAEQANACAAALQgBAHgFAEQgGAEgJAAgAgPAVIARAAQAHAAADgCQAEgDAAgEQAAgEgEgDQgEgCgHAAIgQAAgAgPgDIAQAAQAFAAADgCQAEgDAAgEQAAgDgDgDQgDgCgGAAIgQAAg");
	this.shape_22.setTransform(11.4,49.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#706F6F").s().p("AgUAVQgJgJAAgMQAAgKAJgKQAJgJALAAQANAAAIAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgMAAgIgJgAgOgPQgGAHAAAIQAAAKAGAGQAGAGAIAAQAJAAAGgGQAGgGAAgKQAAgIgGgHQgHgGgIAAQgIAAgGAGg");
	this.shape_23.setTransform(4.4,49.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#706F6F").s().p("AAQAcIAAgYIggAAIAAAYIgIAAIAAg3IAIAAIAAAYIAgAAIAAgYIAJAAIAAA3g");
	this.shape_24.setTransform(-2.6,49.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#706F6F").s().p("AAQAcIAAgYIgfAAIAAAYIgJAAIAAg3IAJAAIAAAYIAfAAIAAgYIAJAAIAAA3g");
	this.shape_25.setTransform(-9.5,49.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#706F6F").s().p("AARAcIAAgrIghArIgIAAIAAg3IAIAAIAAAsIAhgsIAIAAIAAA3g");
	this.shape_26.setTransform(-16.4,49.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#706F6F").s().p("AAQAcIAAgYIgfAAIAAAYIgJAAIAAg3IAJAAIAAAYIAfAAIAAgYIAJAAIAAA3g");
	this.shape_27.setTransform(-26.6,49.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#706F6F").s().p("AgSAeQgIgIAAgNQAAgMAIgIQAIgJAKAAQAMAAAIAJQAHAIAAANIAAADIgsAAQABAIAFAFQAFAFAIAAQAKAAAIgIIAFAFQgJALgPAAQgLgBgIgIgAgLgHQgGAGAAAGIAjAAQAAgGgFgGQgEgFgJgBQgGAAgFAGgAAEgbIAAgLIAKAAIAAALgAgOgbIAAgLIAKAAIAAALg");
	this.shape_28.setTransform(-33.2,48.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#706F6F").s().p("AAXAjIAAgOIgtAAIgBAOIgHAAIAAgVIAGAAQAHgOAAgZIAAgKIAoAAIAAAxIAIAAIgBAVgAgIgTQAAAUgHANIAdAAIAAgpIgWAAg");
	this.shape_29.setTransform(-39.9,50.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#706F6F").s().p("AAjAcIgTgaIgMANIAAANIgHAAIAAgNIgMgNIgTAaIgKAAIAYgfIgXgYIALAAIAdAgIAAggIAHAAIAAAgIAdggIALAAIgXAYIAYAfg");
	this.shape_30.setTransform(-47.8,49.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#706F6F").s().p("AgUAVQgIgIAAgNQAAgLAIgJQAJgJALAAQANAAAIAJQAJAIgBAMQABANgJAIQgJAJgMAAQgLAAgJgJgAgOgPQgGAHAAAIQAAAKAGAGQAGAGAIAAQAJAAAGgGQAGgGAAgKQAAgIgGgHQgHgGgIAAQgIAAgGAGg");
	this.shape_31.setTransform(-55.7,49.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#706F6F").s().p("AgcAmIAAhLIAcAAQAOAAAHAGQAIAHAAALQAAAMgJAGQgIAGgMAAIgTAAIAAAbgAgTADIATAAQAIAAAGgDQAGgEAAgJQAAgIgGgEQgEgEgKAAIgTAAg");
	this.shape_32.setTransform(-62.6,48.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#706F6F").s().p("AgCARIABgOIgLAIIgDgFIANgGIgNgFIADgFIALAIIgBgOIAEAAIgBAOIAMgIIADAFIgNAFIANAGIgDAFIgMgIIABAOg");
	this.shape_33.setTransform(-68.9,46.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.5,-87.7,149.9,141.8);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hgj();
	this.instance.parent = this;
	this.instance.setTransform(11.8,-20.3,0.57,0.57,0,0,0,0,-0.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#706F6F").s().p("AgrBHIAAiNIBWAAIAAAOIhHAAIAAAyIA/AAIAAAMIg/AAIAAAzIBIAAIAAAOg");
	this.shape.setTransform(57.1,23,0.57,0.57);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#706F6F").s().p("AgGBHIgziNIARAAIAoB3IAqh3IAQAAIgzCNg");
	this.shape_1.setTransform(49.9,23.1,0.57,0.57);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#706F6F").s().p("AgHBHIAAiNIAPAAIAACNg");
	this.shape_2.setTransform(44.7,23,0.57,0.57);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#706F6F").s().p("AgHBHIAAh/IgnAAIAAgOIBdAAIAAAOIgoAAIAAB/g");
	this.shape_3.setTransform(40.1,23,0.57,0.57);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#706F6F").s().p("AAtBHIgNglIg/AAIgOAlIgQAAIA2iNIAOAAIA3CNgAgaAUIA1AAIgbhHg");
	this.shape_4.setTransform(33.9,23,0.57,0.57);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#706F6F").s().p("AgGBHIgziNIARAAIAoB3IAqh3IAQAAIgzCNg");
	this.shape_5.setTransform(27.3,23.1,0.57,0.57);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#706F6F").s().p("AgrA1QgRgUAAggIAAgBQAAgfARgVQARgUAaAAQAbAAARAUQARAUAAAgIAAABQAAAfgRAVQgRAUgbAAQgaAAgRgUgAgggqQgMAQAAAaIAAABQAAAZAMARQAOAQASAAQAUAAAMgQQANgQAAgaIAAgBQAAgZgNgRQgMgQgUAAQgTAAgNAQg");
	this.shape_6.setTransform(19.9,23,0.57,0.57);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAPAAIBJBvIAAhvIAPAAIAACNg");
	this.shape_7.setTransform(11.8,23,0.57,0.57);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAPAAIBJBvIAAhvIAPAAIAACNg");
	this.shape_8.setTransform(3.9,23,0.57,0.57);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#706F6F").s().p("AgHBHIAAiNIAOAAIAACNg");
	this.shape_9.setTransform(-1.5,23,0.57,0.57);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAOAAIBKBvIAAhvIAPAAIAACNg");
	this.shape_10.setTransform(-9.9,23,0.57,0.57);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#706F6F").s().p("AAgBHIgig3IghAAIAAA3IgPAAIAAiNIAxAAQAYAAAMANQALAMAAARIAAABQAAAfgiAJIAnA6gAgjACIAfAAQAQAAAKgHQAJgIAAgOQAAgdghAAIghAAg");
	this.shape_11.setTransform(-17.1,23,0.57,0.57);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#706F6F").s().p("AgrA1QgRgUAAggIAAgBQAAgfARgVQARgUAaAAQAbAAARAUQARAUAAAgIAAABQAAAfgRAVQgRAUgbAAQgaAAgRgUgAgggqQgMAQAAAaIAAABQAAAZAMARQAOAQASAAQAUAAAMgQQANgQAAgaIAAgBQAAgZgNgRQgMgQgUAAQgTAAgNAQg");
	this.shape_12.setTransform(-25.1,23,0.57,0.57);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#706F6F").s().p("AgwBHIAAiNIAwAAQAWAAAMAMQAJAKAAAOQAAAYgXAJQAdAIAAAZIAAABQAAASgNAKQgOAKgWAAgAghA5IAhAAQAQAAAJgGQAJgHAAgMIAAgBQAAgZgiAAIghAAgAghgGIAfAAQANAAAIgHQAJgHAAgMQAAgMgIgGQgIgGgNAAIggAAg");
	this.shape_13.setTransform(-32.6,23,0.57,0.57);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#706F6F").s().p("AAVAcIAAgqIgVAcIgUgcIAAAqIgIAAIAAg3IAIAAIAUAdIAVgdIAIAAIAAA3g");
	this.shape_14.setTransform(67.7,49.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#706F6F").s().p("AAYAcIAAg3IAJAAIAAA3gAgfAcIAAg3IAIAAIAAAVIAPAAQAKAAAFAEQAHAEAAAIQgBAJgFAFQgGAEgJAAgAgXAVIAPAAQAHAAACgDQAEgDAAgFQAAgEgEgDQgDgDgGAAIgPAAg");
	this.shape_15.setTransform(59.6,49.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#706F6F").s().p("AARAcIAAgYIghAAIAAAYIgIAAIAAg3IAIAAIAAAYIAhAAIAAgYIAIAAIAAA3g");
	this.shape_16.setTransform(52,49.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#706F6F").s().p("AAQAcIAAgYIgfAAIAAAYIgJAAIAAg3IAJAAIAAAYIAfAAIAAgYIAJAAIAAA3g");
	this.shape_17.setTransform(45.1,49.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#706F6F").s().p("AgUAVQgJgIABgNQgBgLAJgJQAJgJALAAQANAAAIAJQAIAIAAAMQAAANgIAIQgJAJgMAAQgLAAgJgJgAgOgPQgGAHAAAIQAAAKAGAGQAGAGAIAAQAJAAAGgGQAGgGAAgKQAAgIgGgHQgGgGgJAAQgIAAgGAGg");
	this.shape_18.setTransform(38.2,49.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#706F6F").s().p("AARAcIAAgrIghArIgIAAIAAg3IAIAAIAAAsIAhgsIAIAAIAAA3g");
	this.shape_19.setTransform(31.1,49.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#706F6F").s().p("AAUAjIAAgOIgwAAIAAg4IAJAAIAAAxIAfAAIAAgxIAIAAIAAAxIAJAAIgCAVg");
	this.shape_20.setTransform(24.6,50.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#706F6F").s().p("AgSAYQgGgEAAgIQAAgKAGgDQAHgFALAAQAIAAAIACIAAgBQABgIgFgEQgEgEgIAAQgIAAgJAFIgCgHQAKgGAJAAQANAAAGAHQAGAGAAALIAAAhIgJAAIAAgIQgHAKgMAAQgJAAgGgGgAgLADQgFADABAGQAAAEADAEQAFACAGAAQAGAAAGgDQAGgFgBgHIAAgFQgJgCgHAAQgHAAgEADg");
	this.shape_21.setTransform(17.4,49.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#706F6F").s().p("AgYAcIAAg3IAbAAQAJAAAEADQAFAFABAGQAAAJgKAEQANACAAALQgBAHgFAEQgGAEgJAAgAgPAVIARAAQAHAAADgCQAEgDAAgEQAAgEgEgDQgEgCgHAAIgQAAgAgPgDIAQAAQAFAAADgCQAEgDAAgEQAAgDgDgDQgDgCgGAAIgQAAg");
	this.shape_22.setTransform(11.4,49.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#706F6F").s().p("AgUAVQgJgJAAgMQAAgKAJgKQAJgJALAAQANAAAIAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgMAAgIgJgAgOgPQgGAHAAAIQAAAKAGAGQAGAGAIAAQAJAAAGgGQAGgGAAgKQAAgIgGgHQgHgGgIAAQgIAAgGAGg");
	this.shape_23.setTransform(4.4,49.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#706F6F").s().p("AAQAcIAAgYIggAAIAAAYIgIAAIAAg3IAIAAIAAAYIAgAAIAAgYIAJAAIAAA3g");
	this.shape_24.setTransform(-2.6,49.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#706F6F").s().p("AAQAcIAAgYIgfAAIAAAYIgJAAIAAg3IAJAAIAAAYIAfAAIAAgYIAJAAIAAA3g");
	this.shape_25.setTransform(-9.5,49.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#706F6F").s().p("AARAcIAAgrIghArIgIAAIAAg3IAIAAIAAAsIAhgsIAIAAIAAA3g");
	this.shape_26.setTransform(-16.4,49.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#706F6F").s().p("AAQAcIAAgYIgfAAIAAAYIgJAAIAAg3IAJAAIAAAYIAfAAIAAgYIAJAAIAAA3g");
	this.shape_27.setTransform(-26.6,49.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#706F6F").s().p("AgSAeQgIgIAAgNQAAgMAIgIQAIgJAKAAQAMAAAIAJQAHAIAAANIAAADIgsAAQABAIAFAFQAFAFAIAAQAKAAAIgIIAFAFQgJALgPAAQgLgBgIgIgAgLgHQgGAGAAAGIAjAAQAAgGgFgGQgEgFgJgBQgGAAgFAGgAAEgbIAAgLIAKAAIAAALgAgOgbIAAgLIAKAAIAAALg");
	this.shape_28.setTransform(-33.2,48.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#706F6F").s().p("AAXAjIAAgOIgtAAIgBAOIgHAAIAAgVIAGAAQAHgOAAgZIAAgKIAoAAIAAAxIAIAAIgBAVgAgIgTQAAAUgHANIAdAAIAAgpIgWAAg");
	this.shape_29.setTransform(-39.9,50.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#706F6F").s().p("AAjAcIgTgaIgMANIAAANIgHAAIAAgNIgMgNIgTAaIgKAAIAYgfIgXgYIALAAIAdAgIAAggIAHAAIAAAgIAdggIALAAIgXAYIAYAfg");
	this.shape_30.setTransform(-47.8,49.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#706F6F").s().p("AgUAVQgIgIAAgNQAAgLAIgJQAJgJALAAQANAAAIAJQAJAIgBAMQABANgJAIQgJAJgMAAQgLAAgJgJgAgOgPQgGAHAAAIQAAAKAGAGQAGAGAIAAQAJAAAGgGQAGgGAAgKQAAgIgGgHQgHgGgIAAQgIAAgGAGg");
	this.shape_31.setTransform(-55.7,49.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#706F6F").s().p("AgcAmIAAhLIAcAAQAOAAAHAGQAIAHAAALQAAAMgJAGQgIAGgMAAIgTAAIAAAbgAgTADIATAAQAIAAAGgDQAGgEAAgJQAAgIgGgEQgEgEgKAAIgTAAg");
	this.shape_32.setTransform(-62.6,48.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#706F6F").s().p("AgCARIABgOIgLAIIgDgFIANgGIgNgFIADgFIALAIIgBgOIAEAAIgBAOIAMgIIADAFIgNAFIANAGIgDAFIgMgIIABAOg");
	this.shape_33.setTransform(-68.9,46.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.5,-87.7,149.9,141.8);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	// legal
	this.addr2 = new lib.dfgdfggg();
	this.addr2.parent = this;
	this.addr2.setTransform(3.5,388.2);
	this.addr2.alpha = 0;
	this.addr2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.addr2).wait(303).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(41).to({alpha:0},6,cjs.Ease.get(1)).wait(1));

	// Слой 19
	this.instance = new lib.ghggg();
	this.instance.parent = this;
	this.instance.setTransform(120,356.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(298).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(46).to({alpha:0},6,cjs.Ease.get(1)).wait(1));

	// final
	this.instance_1 = new lib.ghgf();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120,200);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(293).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(51).to({alpha:0},6,cjs.Ease.get(1)).wait(1));

	// logo
	this.instance_2 = new lib.Анимация1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(76.5,191.8);
	this.instance_2.alpha = 0;

	this.instance_3 = new lib.Анимация2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(76.5,191.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},8).to({state:[]},309).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,alpha:1},8).wait(352));

	// mask-in-out - копия: 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A9ffNMAVlg+ZMAlaAAAMAAAA+Zg");
	var mask_graphics_1 = new cjs.Graphics().p("A8xfNMASag+ZMAnIAAAMAAAA+Zg");
	var mask_graphics_2 = new cjs.Graphics().p("A8HfNMAPig+ZMAotAAAMAAAA+Zg");
	var mask_graphics_3 = new cjs.Graphics().p("A7ifNMAM/g+ZMAqGAAAMAAAA+Zg");
	var mask_graphics_4 = new cjs.Graphics().p("A7BfNMAKug+ZMArVAAAMAAAA+Zg");
	var mask_graphics_5 = new cjs.Graphics().p("A6kfNMAIwg+ZMAsZAAAMAAAA+Zg");
	var mask_graphics_6 = new cjs.Graphics().p("A6MfNMAHGg+ZMAtTAAAMAAAA+Zg");
	var mask_graphics_7 = new cjs.Graphics().p("A54fNMAFvg+ZMAuDAAAMAAAA+Zg");
	var mask_graphics_8 = new cjs.Graphics().p("A5pfNMAEsg+ZMAunAAAMAAAA+Zg");
	var mask_graphics_9 = new cjs.Graphics().p("A5efNMAD8g+ZMAvBAAAMAAAA+Zg");
	var mask_graphics_10 = new cjs.Graphics().p("A5YfNMADfg+ZMAvSAAAMAAAA+Zg");
	var mask_graphics_11 = new cjs.Graphics().p("A5WfNMADWg+ZMAvXAAAMAAAA+Zg");
	var mask_graphics_62 = new cjs.Graphics().p("A9cfQMAAAg+aMA6+AAAMgVkA+ag");
	var mask_graphics_63 = new cjs.Graphics().p("A5HfQMAAAg+aMAyPAAAMgSYA+ag");
	var mask_graphics_64 = new cjs.Graphics().p("A1KfQMAAAg+aMAqVAAAMgPfA+ag");
	var mask_graphics_65 = new cjs.Graphics().p("AxofQMAAAg+aMAjRAAAMgM5A+ag");
	var mask_graphics_66 = new cjs.Graphics().p("AugfQMAAAg+aIdBAAMgKnA+ag");
	var mask_graphics_67 = new cjs.Graphics().p("Ar0fQMAAAg+aIXpAAMgIqA+ag");
	var mask_graphics_68 = new cjs.Graphics().p("AphfQMAAAg+aITDAAMgG+A+ag");
	var mask_graphics_69 = new cjs.Graphics().p("AnpfQMAAAg+aIPTAAMgFmA+ag");
	var mask_graphics_70 = new cjs.Graphics().p("AmMfQMAAAg+aIMZAAMgEiA+ag");
	var mask_graphics_71 = new cjs.Graphics().p("AlKfQMAAAg+aIKVAAMgDyA+ag");
	var mask_graphics_72 = new cjs.Graphics().p("AkifQMAAAg+aIJFAAMgDVA+ag");
	var mask_graphics_73 = new cjs.Graphics().p("AkjfQMAAAg+aIIqAAMgDLA+ag");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:428.4,y:200.3}).wait(1).to({graphics:mask_graphics_1,x:377.8,y:200.3}).wait(1).to({graphics:mask_graphics_2,x:332,y:200.3}).wait(1).to({graphics:mask_graphics_3,x:291,y:200.3}).wait(1).to({graphics:mask_graphics_4,x:254.9,y:200.3}).wait(1).to({graphics:mask_graphics_5,x:223.5,y:200.3}).wait(1).to({graphics:mask_graphics_6,x:197,y:200.3}).wait(1).to({graphics:mask_graphics_7,x:175.4,y:200.3}).wait(1).to({graphics:mask_graphics_8,x:158.5,y:200.3}).wait(1).to({graphics:mask_graphics_9,x:146.4,y:200.3}).wait(1).to({graphics:mask_graphics_10,x:139.2,y:200.3}).wait(1).to({graphics:mask_graphics_11,x:136.8,y:200.3}).wait(1).to({graphics:null,x:0,y:0}).wait(50).to({graphics:mask_graphics_62,x:189,y:200}).wait(1).to({graphics:mask_graphics_63,x:151.1,y:200}).wait(1).to({graphics:mask_graphics_64,x:116.5,y:200}).wait(1).to({graphics:mask_graphics_65,x:85.6,y:200}).wait(1).to({graphics:mask_graphics_66,x:58.4,y:200}).wait(1).to({graphics:mask_graphics_67,x:34.7,y:200}).wait(1).to({graphics:mask_graphics_68,x:14.7,y:200}).wait(1).to({graphics:mask_graphics_69,x:-1.6,y:200}).wait(1).to({graphics:mask_graphics_70,x:-14.3,y:200}).wait(1).to({graphics:mask_graphics_71,x:-23.4,y:200}).wait(1).to({graphics:mask_graphics_72,x:-28.9,y:200}).wait(1).to({graphics:mask_graphics_73,x:-29.2,y:200}).wait(287));

	// text0
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVAgQgLgMAAgTIAAgBQAAgTALgMQALgMAQAAQAPAAAMALIgJANQgIgIgKAAQgIAAgGAHQgGAIAAAMIAAABQAAAMAGAHQAGAIAJAAQAJgBAJgHIAIAMQgMAMgPAAQgQAAgLgMg");
	this.shape_1.setTransform(130.3,65,0.8,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbAgQgLgMAAgTIAAgBQAAgSALgNQALgMAQAAQARAAALAMQALANAAASIAAABQAAASgLAMQgLANgRAAQgQAAgLgMgAgOgUQgGAIAAAMIAAABQAAALAGAIQAGAIAIAAQAKAAAFgIQAGgIAAgLIAAgBQAAgLgGgIQgGgIgJAAQgJAAgFAHg");
	this.shape_2.setTransform(123.4,65,0.8,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVAgQgLgMAAgTIAAgBQAAgTALgMQALgMAPAAQAQAAALALIgIANQgJgIgJAAQgIAAgGAHQgGAIAAAMIAAABQAAAMAGAHQAGAIAIAAQAKgBAJgHIAIAMQgMAMgQAAQgQAAgKgMg");
	this.shape_3.setTransform(116.8,65,0.8,0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXAgQgMgLAAgUIAAgBQAAgTALgMQAJgMAPAAQASAAAJAMQAJANAAATIgBAGIg0AAQADAWASAAQAMAAAIgJIAIALQgLANgSAAQgPAAgLgMgAgRgFIAjAAQgBgXgRAAQgPAAgCAXg");
	this.shape_4.setTransform(110.3,65,0.8,0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmAqIABgPIAFAAQAIAAADgLQAEgPAAgrIA4AAIAABUIgSAAIAAhEIgVAAQAAAqgHAPQgGAMgOAAg");
	this.shape_5.setTransform(102.9,65,0.8,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAcAqIAAhTIASAAIAABTgAgtAqIAAhTIATAAIAAAdIANAAQAfAAABAaQAAAcgfAAgAgaAcIANAAQAOgBAAgNQAAgNgOABIgNAAg");
	this.shape_6.setTransform(95.3,65,0.8,0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAPAqIAAhEIgdAAIAABEIgSAAIAAhTIBBAAIAABTg");
	this.shape_7.setTransform(87.3,65,0.8,0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AARAqIAAg3IghA3IgRAAIAAhTIARAAIAAA2IAhg2IARAAIAABTg");
	this.shape_8.setTransform(76.9,65,0.8,0.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgmAqIABgPIAFAAQAIAAACgLQAEgOAAgsIA5AAIAABUIgSAAIAAhEIgWAAQAAAqgGAPQgGAMgPAAg");
	this.shape_9.setTransform(69.4,65,0.8,0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgZAlQgIgHAAgMIAAgBQAAgNAIgGQAJgHAOAAQAKAAAIADIAAgDQAAgSgRAAQgLAAgLAFIgDgPQANgGANAAQAiAAAAAhIAAA0IgSAAIAAgKQgIAMgPAAQgLAAgHgHgAgPAQIAAABQAAAGAEAEQAEADAGAAQAHAAAFgEQAFgFABgHIAAgJQgHgDgKAAQgPAAAAAOg");
	this.shape_10.setTransform(62.8,65,0.8,0.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAZA0IAAgTIgyAAIgBATIgQAAIAAgjIAIAAQAJgRAAgnIAAgMIA5AAIAABEIALAAIgCAjgAgPARIAdAAIAAg0IgWAAQAAAjgHARg");
	this.shape_11.setTransform(56,65.7,0.8,0.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgeAiIAHgOQALAIAKAAQAPAAAAgLQAAgGgEgCQgFgDgKAAIgEAAIAAgMIAEAAQAJgBAEgCQAEgCAAgIQAAgIgMAAQgMgBgIAHIgGgMQALgKARAAQAMAAAIAGQAIAGAAAKQAAAOgNAGQAPAEAAAQQAAAKgJAIQgIAHgOAAQgRAAgNgKg");
	this.shape_12.setTransform(49.4,65,0.8,0.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgbAgQgLgMAAgTIAAgBQAAgSALgNQALgMAQAAQARAAALAMQALANAAASIAAABQAAASgLAMQgLANgRAAQgQAAgLgMgAgOgUQgGAIAAAMIAAABQAAALAGAIQAGAIAIAAQAKAAAFgIQAGgIAAgLIAAgBQAAgLgGgIQgGgIgJAAQgJAAgFAHg");
	this.shape_13.setTransform(43.2,65,0.8,0.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgVAgQgLgMAAgTIAAgBQAAgTALgMQALgMAQAAQAPAAAMALIgJANQgIgIgKAAQgIAAgGAHQgGAIAAAMIAAABQAAAMAGAHQAGAIAJAAQAJgBAJgHIAIAMQgMAMgPAAQgQAAgLgMg");
	this.shape_14.setTransform(36.7,65,0.8,0.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAcAqIAAhTIASAAIAABTgAgtAqIAAhTIASAAIAAAdIAOAAQAfAAAAAaQAAAcgeAAgAgbAcIAOAAQANgBAAgNQAAgNgNABIgOAAg");
	this.shape_15.setTransform(25.7,65,0.8,0.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAWAqIAAg3IgWAkIAAAAIgWgkIAAA3IgSAAIAAhTIASAAIAWAlIAWglIASAAIAABTg");
	this.shape_16.setTransform(17.1,65,0.8,0.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAaA0IAAgTIgzAAIgBATIgQAAIAAgiIAIAAQAJgTAAgmIAAgMIA6AAIAABFIAKAAIgCAigAgQASIAfAAIAAg1IgXAAQAAAjgIASg");
	this.shape_17.setTransform(111.4,52.2,0.8,0.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgZAlQgIgHAAgMIAAgBQAAgNAJgGQAIgHAOAAQAJAAAJADIAAgDQAAgSgRAAQgKAAgMAFIgDgPQANgGANAAQAiAAAAAhIAAA0IgSAAIAAgKQgIAMgPAAQgLAAgHgHgAgPAQIAAABQAAAGAEAEQAEADAGAAQAHAAAFgEQAFgFAAgHIAAgJQgGgDgKAAQgPAAAAAOg");
	this.shape_18.setTransform(104.4,51.5,0.8,0.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgeAiIAHgOQALAIAJAAQAQAAAAgLQAAgGgFgCQgEgDgLAAIgEAAIAAgNIAEAAQAJAAAEgCQAFgDAAgGQAAgKgMABQgMAAgIAGIgHgNQAMgJARAAQAMAAAIAGQAIAHAAAJQAAAOgNAGQAPAEAAAPQAAALgJAIQgJAHgNAAQgSAAgMgKg");
	this.shape_19.setTransform(98.2,51.5,0.8,0.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgZAlQgIgHAAgMIAAgBQAAgNAIgGQAJgHAOAAQAIAAAKADIAAgDQAAgSgRAAQgKAAgMAFIgEgPQAOgGANAAQAiAAAAAhIAAA0IgSAAIAAgKQgIAMgPAAQgLAAgHgHgAgPAQIAAABQAAANAOAAQAHAAAFgEQAFgFAAgHIAAgJQgGgDgKAAQgPAAAAAOg");
	this.shape_20.setTransform(92,51.5,0.8,0.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAQArIAAgjIgfAAIAAAjIgSAAIAAhVIASAAIAAAjIAfAAIAAgjIASAAIAABVg");
	this.shape_21.setTransform(85.3,51.5,0.8,0.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgZAlQgIgHAAgMIAAgBQAAgNAJgGQAHgHAOAAQAJAAAKADIAAgDQAAgSgSAAQgKAAgLAFIgDgPQANgGANAAQAiAAAAAhIAAA0IgSAAIAAgKQgJAMgOAAQgLAAgHgHgAgPAQIAAABQAAANAOAAQAHAAAFgEQAFgFAAgHIAAgJQgGgDgKAAQgPAAAAAOg");
	this.shape_22.setTransform(75,51.5,0.8,0.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAPArIgUgkIgLANIAAAXIgTAAIAAhVIATAAIAAAoIAdgoIAUAAIgcAkIAfAxg");
	this.shape_23.setTransform(69,51.5,0.8,0.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgXAgQgMgLAAgUIAAgBQAAgTAKgMQAKgMAPAAQASAAAJAMQAJANAAATIAAAGIg1AAQADAWASgBQAMAAAIgIIAJALQgMANgSAAQgQAAgKgMgAgRgFIAjAAQAAgKgFgHQgEgGgJAAQgPAAgCAXg");
	this.shape_24.setTransform(61.9,51.5,0.8,0.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AggArIAAhVIAiAAQANAAAHAHQAIAFAAALQAAAMgNAHQAQAEAAAOQAAAMgIAHQgIAFgOABgAgOAcIAOAAQAPAAAAgLQAAgLgPAAIgOAAgAgOgHIAOAAQAMAAAAgKQAAgKgMAAIgOAAg");
	this.shape_25.setTransform(55.4,51.5,0.8,0.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgXAgQgMgLAAgUIAAgBQAAgTALgMQAKgMAPAAQARAAAJAMQAJAMAAAUIAAAGIg1AAQADAWASgBQALAAAJgIIAJALQgMANgSAAQgQAAgKgMgAgLgWQgFAGgBALIAjAAQgBgXgQAAQgHAAgFAGg");
	this.shape_26.setTransform(45.2,51.5,0.8,0.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgXAgQgMgLAAgUIAAgBQAAgTALgMQAKgMAPAAQAQAAAKAMQAJANAAATIAAAGIg0AAQABAWATgBQALAAAJgIIAIALQgLANgSAAQgPAAgLgMgAgRgFIAjAAQgBgKgEgHQgFgGgHAAQgPAAgDAXg");
	this.shape_27.setTransform(38.4,51.5,0.8,0.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgmAqIABgPIAFAAQAIAAADgLQAEgPAAgrIA4AAIAABUIgSAAIAAhEIgVAAQAAAqgHAPQgGAMgOAAg");
	this.shape_28.setTransform(31.1,51.5,0.8,0.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgbAgQgLgMAAgTIAAgBQAAgSALgNQALgMAQAAQARAAALAMQALAMAAATIAAABQAAASgLAMQgLANgRAAQgQAAgLgMgAgOgTQgGAHAAAMIAAABQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMIAAgBQAAgLgGgIQgGgIgJAAQgJAAgFAIg");
	this.shape_29.setTransform(24.6,51.5,0.8,0.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgnA4IAAhvIBHAAIAAAQIg0AAIAAAcIAXAAQARAAAKAJQAKAIAAAPQAAARgLAJQgLAJgRAAgAgUAnIAWAAQATAAAAgRQAAgRgTAAIgWAAg");
	this.shape_30.setTransform(17.2,50.4,0.8,0.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhnDwIB/nfIBQAAIh/Hfg");
	this.shape_31.setTransform(150.7,40.1,0.8,0.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CB0927").s().p("AhwDIIBqmPIB3AAIhrGPg");
	this.shape_32.setTransform(147.8,68.9,0.8,0.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#DBDBDA").s().p("AinE/IBBjvIB2AAIBrmOIAtAAIirJ9g");
	this.shape_33.setTransform(147,78.5,0.8,0.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#DC052B").s().p("AvwE/IAAp9IfhAAIirJ9g");
	this.shape_34.setTransform(81.2,59.3,0.8,0.8);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[]},74).wait(286));

	// pic0
	this.instance_4 = new lib.pic0();
	this.instance_4.parent = this;
	this.instance_4.setTransform(140,1,1.1,1.1);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},74).wait(286));

	// mask-in-out (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_62 = new cjs.Graphics().p("A9ffNMAVlg+ZMAlaAAAMAAAA+Zg");
	var mask_1_graphics_63 = new cjs.Graphics().p("A8xfNMASag+ZMAnIAAAMAAAA+Zg");
	var mask_1_graphics_64 = new cjs.Graphics().p("A8HfNMAPig+ZMAotAAAMAAAA+Zg");
	var mask_1_graphics_65 = new cjs.Graphics().p("A7ifNMAM/g+ZMAqGAAAMAAAA+Zg");
	var mask_1_graphics_66 = new cjs.Graphics().p("A7BfNMAKug+ZMArVAAAMAAAA+Zg");
	var mask_1_graphics_67 = new cjs.Graphics().p("A6kfNMAIwg+ZMAsZAAAMAAAA+Zg");
	var mask_1_graphics_68 = new cjs.Graphics().p("A6MfNMAHGg+ZMAtTAAAMAAAA+Zg");
	var mask_1_graphics_69 = new cjs.Graphics().p("A54fNMAFvg+ZMAuDAAAMAAAA+Zg");
	var mask_1_graphics_70 = new cjs.Graphics().p("A5pfNMAEsg+ZMAunAAAMAAAA+Zg");
	var mask_1_graphics_71 = new cjs.Graphics().p("A5efNMAD8g+ZMAvBAAAMAAAA+Zg");
	var mask_1_graphics_72 = new cjs.Graphics().p("A5YfNMADfg+ZMAvSAAAMAAAA+Zg");
	var mask_1_graphics_73 = new cjs.Graphics().p("A5WfNMADWg+ZMAvXAAAMAAAA+Zg");
	var mask_1_graphics_137 = new cjs.Graphics().p("A9cfQMAAAg+aMA6+AAAMgVkA+ag");
	var mask_1_graphics_138 = new cjs.Graphics().p("A5HfQMAAAg+aMAyPAAAMgSYA+ag");
	var mask_1_graphics_139 = new cjs.Graphics().p("A1KfQMAAAg+aMAqVAAAMgPfA+ag");
	var mask_1_graphics_140 = new cjs.Graphics().p("AxofQMAAAg+aMAjRAAAMgM5A+ag");
	var mask_1_graphics_141 = new cjs.Graphics().p("AugfQMAAAg+aIdBAAMgKnA+ag");
	var mask_1_graphics_142 = new cjs.Graphics().p("Ar0fQMAAAg+aIXpAAMgIqA+ag");
	var mask_1_graphics_143 = new cjs.Graphics().p("AphfQMAAAg+aITDAAMgG+A+ag");
	var mask_1_graphics_144 = new cjs.Graphics().p("AnpfQMAAAg+aIPTAAMgFmA+ag");
	var mask_1_graphics_145 = new cjs.Graphics().p("AmMfQMAAAg+aIMZAAMgEiA+ag");
	var mask_1_graphics_146 = new cjs.Graphics().p("AlKfQMAAAg+aIKVAAMgDyA+ag");
	var mask_1_graphics_147 = new cjs.Graphics().p("AkifQMAAAg+aIJFAAMgDVA+ag");
	var mask_1_graphics_148 = new cjs.Graphics().p("AkjfQMAAAg+aIIqAAMgDLA+ag");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_1_graphics_62,x:428.4,y:200.3}).wait(1).to({graphics:mask_1_graphics_63,x:377.8,y:200.3}).wait(1).to({graphics:mask_1_graphics_64,x:332,y:200.3}).wait(1).to({graphics:mask_1_graphics_65,x:291,y:200.3}).wait(1).to({graphics:mask_1_graphics_66,x:254.9,y:200.3}).wait(1).to({graphics:mask_1_graphics_67,x:223.5,y:200.3}).wait(1).to({graphics:mask_1_graphics_68,x:197,y:200.3}).wait(1).to({graphics:mask_1_graphics_69,x:175.4,y:200.3}).wait(1).to({graphics:mask_1_graphics_70,x:158.5,y:200.3}).wait(1).to({graphics:mask_1_graphics_71,x:146.4,y:200.3}).wait(1).to({graphics:mask_1_graphics_72,x:139.2,y:200.3}).wait(1).to({graphics:mask_1_graphics_73,x:136.8,y:200.3}).wait(1).to({graphics:null,x:0,y:0}).wait(63).to({graphics:mask_1_graphics_137,x:189,y:200}).wait(1).to({graphics:mask_1_graphics_138,x:151.1,y:200}).wait(1).to({graphics:mask_1_graphics_139,x:116.5,y:200}).wait(1).to({graphics:mask_1_graphics_140,x:85.6,y:200}).wait(1).to({graphics:mask_1_graphics_141,x:58.4,y:200}).wait(1).to({graphics:mask_1_graphics_142,x:34.7,y:200}).wait(1).to({graphics:mask_1_graphics_143,x:14.7,y:200}).wait(1).to({graphics:mask_1_graphics_144,x:-1.6,y:200}).wait(1).to({graphics:mask_1_graphics_145,x:-14.3,y:200}).wait(1).to({graphics:mask_1_graphics_146,x:-23.4,y:200}).wait(1).to({graphics:mask_1_graphics_147,x:-28.9,y:200}).wait(1).to({graphics:mask_1_graphics_148,x:-29.2,y:200}).wait(212));

	// text1
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAQApIAAg1IggA1IgRAAIAAhRIASAAIAAA1IAfg1IASAAIAABRg");
	this.shape_35.setTransform(130.8,87.1,0.75,0.75);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AglApIABgPIAFABQAIAAACgLQAEgPAAgqIA3AAIAABSIgSAAIAAhDIgVAAQAAAqgGAOQgGAMgOAAg");
	this.shape_36.setTransform(123.9,87.1,0.75,0.75);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgXAfQgLgLAAgUIAAAAQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJAMAAASIAAAGIgzAAQADAWARAAQAKAAAKgIIAIALQgLAMgSAAQgPAAgLgMgAgQgEIAiAAQgBgYgQAAQgQAAgBAYg");
	this.shape_37.setTransform(118.1,87.1,0.75,0.75);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAZAyIAAgSIgxAAIgBASIgQAAIAAghIAIAAQAJgSAAgmIAAgKIA4AAIAABCIAKAAIgCAhgAgPARIAdAAIAAgzIgVAAQAAAjgIAQg");
	this.shape_38.setTransform(111.6,87.8,0.75,0.75);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgTIAAAAQAAgSALgMQALgMAPAAQARAAAKAMQALAMAAASIAAAAQAAATgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAHAAAMIAAAAQAAAMAGAIQAGAHAIAAQAJAAAGgHQAGgHAAgMIAAgBQAAgMgGgHQgGgIgJAAQgJAAgFAIg");
	this.shape_39.setTransform(105.1,87.1,0.75,0.75);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAWApIAAg2IgWAkIgVgjIAAA1IgRAAIAAhRIASAAIAUAlIAWglIASAAIAABRg");
	this.shape_40.setTransform(98,87.1,0.75,0.75);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgXAfQgLgLAAgUIAAAAQAAgSAKgMQAKgMAOAAQARAAAJAMQAJAMAAASIAAAGIgzAAQACAWASAAQAKAAAKgIIAIALQgLAMgSAAQgPAAgLgMgAgRgEIAjAAQgCgYgQAAQgOAAgDAYg");
	this.shape_41.setTransform(88.2,87.1,0.75,0.75);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAbApIAAhRIASAAIAABRgAgsApIAAhRIASAAIAAAdIAOAAQAeAAAAAZQAAAbgeAAgAgaAbIANAAQANAAAAgMQAAgNgNAAIgNAAg");
	this.shape_42.setTransform(80.9,87.1,0.75,0.75);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAPApIAAgiIgdAAIAAAiIgSAAIAAhRIASAAIAAAhIAdAAIAAghIASAAIAABRg");
	this.shape_43.setTransform(73.6,87.1,0.75,0.75);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAYAyIAAgSIgwAAIgBASIgQAAIAAghIAIAAQAJgSAAgmIAAgKIA3AAIAABCIAKAAIgBAhgAgPARIAdAAIAAgzIgVAAQAAAjgIAQg");
	this.shape_44.setTransform(66.9,87.8,0.75,0.75);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgTIAAAAQAAgSALgMQALgMAPAAQARAAALAMQAKALAAATIAAAAQAAATgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAHAAAMIAAAAQAAAMAGAIQAGAHAIAAQAJAAAGgHQAGgHAAgMIAAgBQAAgMgGgHQgGgIgJAAQgJAAgFAIg");
	this.shape_45.setTransform(60.4,87.1,0.75,0.75);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgfApIAAhRIAiAAQALAAAIAFQAHAGAAAKQAAANgNAGQAQAEABAOQgBAXgdAAgAgOAbIAOAAQAOAAABgLQgBgLgOAAIgOAAgAgOgGIANAAQANAAAAgLQAAgKgMAAIgOAAg");
	this.shape_46.setTransform(54.1,87.1,0.75,0.75);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgbAfQgLgMABgTIAAAAQgBgSALgMQALgMAQAAQAQAAALAMQALALAAATIAAAAQAAATgLAMQgLAMgQAAQgQAAgLgMgAgOgTQgFAHAAAMIAAAAQAAAMAFAIQAGAHAIAAQAJAAAGgHQAGgHgBgMIAAgBQABgMgGgHQgGgIgJAAQgJAAgFAIg");
	this.shape_47.setTransform(47.6,87.1,0.75,0.75);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgkA2IAAhpIARAAIAAANQALgPANAAQANAAAJAKQAKAMAAAUIAAACQAAATgKAMQgJAKgNAAQgNAAgLgOIAAAkgAgNgeQgGAHAAAMIAAACQAAALAGAHQAGAHAHAAQAIAAAGgHQAFgHAAgLIAAgCQAAgMgFgHQgGgHgIAAQgHAAgGAHg");
	this.shape_48.setTransform(40.9,87.9,0.75,0.75);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAPApIAAhCIgdAAIAABCIgSAAIAAhRIBBAAIAABRg");
	this.shape_49.setTransform(34.1,87.1,0.75,0.75);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgVAfQgKgMAAgTIAAAAQAAgSAKgMQALgMAPAAQAQAAALALIgIANQgJgJgJAAQgIAAgGAIQgGAHAAAMIAAAAQAAANAGAHQAGAHAJAAQAIAAAJgIIAIAMQgMAMgPAAQgPAAgLgMg");
	this.shape_50.setTransform(28.1,87.1,0.75,0.75);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgXAfQgLgLAAgUIAAAAQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJAMAAASIAAAGIgzAAQADAWAQAAQALAAAJgIIAJALQgMAMgRAAQgQAAgKgMgAgQgEIAiAAQgBgYgQAAQgPAAgCAYg");
	this.shape_51.setTransform(22.1,87.1,0.75,0.75);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgaAtQgKgMAAgWIAAgCQgBgXAFgMQAGgRASgEIAmgJIAEAOIgmAKQgRADgCATQAHgOATAAQAOAAAKALQAKAMAAAQIAAABQABASgKAMQgKALgSAAQgQAAgKgMgAgNgDQgGAHABALIAAABQgBALAGAIQAGAHAHAAQAJAAAFgHQAGgIAAgLIAAgBQAAgLgGgHQgFgHgJAAQgHAAgGAHg");
	this.shape_52.setTransform(15.7,86,0.75,0.75);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAOAAQARAAAJAMQAJAMAAASIAAAHIg0AAQAEAVARAAQALAAAJgJIAIALQgMANgRAAQgPAAgLgLgAgRgFIAjAAQgBgWgRAAQgOAAgDAWg");
	this.shape_53.setTransform(73.7,74.5,0.75,0.75);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAbApIAAhSIASAAIAABSgAgsApIAAhSIARAAIAAAeIAPAAQAeAAAAAZQAAAbgeAAgAgbAcIAPAAQAMgBAAgNQAAgMgMAAIgPAAg");
	this.shape_54.setTransform(66.5,74.5,0.75,0.75);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAPApIAAghIgdAAIAAAhIgSAAIAAhSIASAAIAAAjIAdAAIAAgjIASAAIAABSg");
	this.shape_55.setTransform(59.1,74.5,0.75,0.75);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgeApIAAhSIARAAIAAAeIANAAQAfAAAAAZQAAAbgeAAgAgNAcIANAAQAOgBAAgNQAAgMgOAAIgNAAg");
	this.shape_56.setTransform(53.2,74.5,0.75,0.75);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AglApIABgPIAFAAQAIAAACgKQAEgPAAgqIA3AAIAABSIgRAAIAAhDIgWAAQABApgHAPQgFAMgPAAg");
	this.shape_57.setTransform(46.5,74.5,0.75,0.75);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgYAkQgIgHAAgLIAAgBQAAgNAIgGQAIgHAOAAQAKAAAIADIAAgDQAAgRgRAAQgLAAgKAFIgEgPQAOgGAMAAQAhAAAAAhIAAAyIgRAAIAAgKQgJAMgNAAQgLAAgHgHgAgPAQIAAABQAAAGAEADQAEAEAGAAQAHAAAFgFQAFgEAAgHIAAgJQgFgDgLAAQgPAAAAAOg");
	this.shape_58.setTransform(40.4,74.5,0.75,0.75);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAOApIgUgiIgKANIAAAVIgSAAIAAhSIASAAIAAAoIAcgoIAVAAIgcAjIAeAvg");
	this.shape_59.setTransform(34.9,74.5,0.75,0.75);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AARApIAAg1IghA1IgRAAIAAhSIARAAIAAA1IAhg1IARAAIAABSg");
	this.shape_60.setTransform(28.3,74.5,0.75,0.75);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AAPApIAAghIgdAAIAAAhIgSAAIAAhSIASAAIAAAjIAdAAIAAgjIASAAIAABSg");
	this.shape_61.setTransform(21.7,74.5,0.75,0.75);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AghAyIAFgOQAGACAEAAQAHAAAEgJIgehSIATAAIASA9IATg9IATAAIgeBVQgHAVgQAAQgKAAgIgDg");
	this.shape_62.setTransform(15.4,75.4,0.75,0.75);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AAWApIAAg2IgWAjIgVgjIAAA2IgSAAIAAhSIASAAIAVAlIAWglIASAAIAABSg");
	this.shape_63.setTransform(102.6,61.9,0.75,0.75);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAOAAQARAAAJAMQAJAMAAATIAAAFIg0AAQADAWARAAQALAAAKgIIAIAKQgMANgRAAQgPAAgLgLgAgRgFIAjAAQgCgXgQABQgOgBgDAXg");
	this.shape_64.setTransform(95.8,61.9,0.75,0.75);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AARApIAAgcIgOAAIgPAcIgVAAIAUgfQgRgHAAgRQAAgbAeAAIAiAAIAABSgAgJgXQgDADAAAHQAAANANAAIAQAAIAAgaIgNAAQgJAAgEADg");
	this.shape_65.setTransform(89.3,61.9,0.75,0.75);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AglApIABgPIAFABQAIAAACgLQAEgOAAgrIA3AAIAABSIgSAAIAAhDIgVAAQAAAqgGAOQgFAMgPAAg");
	this.shape_66.setTransform(82.9,61.9,0.75,0.75);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AggApIAAhSIAiAAQANABAGAFQAIAGAAAKQAAANgMAFQAPAFAAAOQAAAXgdAAgAgOAbIAPAAQANAAAAgKQAAgMgOAAIgOAAgAgOgGIAOAAQAMAAAAgKQAAgKgMAAIgOAAg");
	this.shape_67.setTransform(77.1,61.9,0.75,0.75);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgYAkQgIgHAAgMIAAgBQAAgMAIgHQAIgGAOAAQAIAAAKADIAAgDQAAgRgRAAQgKAAgLAFIgEgPQANgGANAAQAhAAAAAhIAAAyIgRAAIAAgKQgJAMgNAAQgLAAgHgHgAgPAQIAAAAQAAANAOAAQAHAAAFgEQAFgFAAgHIAAgIQgIgDgIAAQgPAAAAAOg");
	this.shape_68.setTransform(70.8,61.9,0.75,0.75);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgIApIAAhCIgXAAIAAgQIA/AAIAAAQIgXAAIAABCg");
	this.shape_69.setTransform(65.5,61.9,0.75,0.75);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgVAfQgKgLAAgTIAAgBQAAgSALgMQAKgMAQAAQAQAAAKAKIgIAOQgJgJgJABQgIgBgFAIQgGAHAAAMIAAABQAAAMAGAHQAFAHAJAAQAJAAAJgIIAHAMQgLAMgQAAQgPAAgLgMg");
	this.shape_70.setTransform(60.1,61.9,0.75,0.75);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AAZAyIAAgSIgxAAIgCASIgPAAIAAghIAIAAQAIgRAAgnIAAgLIA4AAIAABDIALAAIgCAhgAgPARIAdAAIAAgzIgWAAQAAAjgHAQg");
	this.shape_71.setTransform(53.8,62.6,0.75,0.75);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJAMAAATIAAAFIgzAAQACAWASAAQAKAAAKgIIAIAKQgLANgSAAQgPAAgLgLgAgQgFIAiAAQgBgKgEgGQgFgHgHABQgQgBgBAXg");
	this.shape_72.setTransform(47.5,61.9,0.75,0.75);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgkA2IAAhqIASAAIAAAOQAJgPAOAAQANAAAJAKQAKAMAAATIAAADQAAATgKALQgJALgNAAQgNAAgKgOIAAAkgAgNgeQgGAIAAALIAAACQAAALAGAHQAGAHAHAAQAIAAAGgHQAGgHAAgLIAAgCQAAgMgGgIQgGgGgIAAQgHgBgGAIg");
	this.shape_73.setTransform(41,62.7,0.75,0.75);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AAPApIAAhCIgdAAIAABCIgSAAIAAhSIBBAAIAABSg");
	this.shape_74.setTransform(34.3,61.9,0.75,0.75);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AAbApIAAhSIASAAIAABSgAgsApIAAhSIARAAIAAAdIAOAAQAeAAAAAaQABAOgJAGQgIAHgNAAgAgbAbIAOAAQANAAAAgNQAAgNgNABIgOAAg");
	this.shape_75.setTransform(23.9,61.9,0.75,0.75);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AAWApIAAg2IgWAjIAAAAIgWgjIAAA2IgRAAIAAhSIASAAIAVAlIAWglIARAAIAABSg");
	this.shape_76.setTransform(16,61.9,0.75,0.75);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AARAqIAAgdIgOAAIgPAdIgVAAIAUggQgRgGAAgSQAAgbAeAAIAiAAIAABTgAgJgXQgDADAAAHQAAANANAAIAQAAIAAgaIgNAAQgJAAgEADg");
	this.shape_77.setTransform(52.6,49.3,0.75,0.75);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAQAqIAAgiIgfAAIAAAiIgRAAIAAhTIARAAIAAAiIAfAAIAAgiIARAAIAABTg");
	this.shape_78.setTransform(46.5,49.3,0.75,0.75);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AAZAzIAAgTIgxAAIgCATIgPAAIAAgiIAIAAQAIgRAAgnIAAgLIA4AAIAABDIALAAIgCAigAgPARIAdAAIAAgzIgWAAQAAAigHARg");
	this.shape_79.setTransform(39.9,50,0.75,0.75);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgSIAAgBQAAgSALgMQALgMAPAAQARAAALAMQAKAMAAASIAAABQAAASgLAMQgKAMgRAAQgPAAgLgMgAgOgTQgGAIAAALIAAABQAAALAGAIQAGAIAIAAQAKAAAFgIQAGgHAAgMIAAgBQAAgLgGgIQgGgIgJAAQgIAAgGAIg");
	this.shape_80.setTransform(33.4,49.3,0.75,0.75);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgZAqIAAhTIAzAAIAAAQIghAAIAABDg");
	this.shape_81.setTransform(28.1,49.3,0.75,0.75);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJAMAAASIAAAHIgzAAQADAVAQAAQAMAAAIgJIAJAMQgMAMgRAAQgPAAgLgLgAgQgFIAiAAQgBgWgQAAQgPAAgCAWg");
	this.shape_82.setTransform(22.3,49.3,0.75,0.75);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgbApQgNgPAAgZIAAgBQAAgYANgQQAOgPAUAAQAUAAAOAMIgJAPQgMgKgNAAQgLAAgJAKQgIALAAARIAAABQAAARAIALQAJALAMAAQAMAAANgLIAJANQgPAOgVAAQgUAAgNgPg");
	this.shape_83.setTransform(16,48.3,0.75,0.75);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AiaFlIC+rJIB3AAIi+LJg");
	this.shape_84.setTransform(159.6,41.7,0.75,0.75);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#CB0927").s().p("AioEqICgpSICxAAIifJSg");
	this.shape_85.setTransform(155.5,81.9,0.75,0.75);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#DBDBDA").s().p("Aj5HcIBfllICyAAICfpSIBDAAIj+O3g");
	this.shape_86.setTransform(154.4,95.3,0.75,0.75);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#DC052B").s().p("AyMHcIAAu3MAkZAAAIj/O3g");
	this.shape_87.setTransform(88,68.5,0.75,0.75);

	var maskedShapeInstanceList = [this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]},62).to({state:[]},87).wait(211));

	// pic1
	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#7E7E7E").s().p("AAhAlIAAgrQAAgQgMAAQgNAAAAAQIAAArIgOAAIAAgrQAAgQgNAAQgGAAgEAEQgDAFAAAHIAAArIgQAAIAAhIIAQAAIAAALQAIgMALAAQANAAAFAMQAIgMAOAAQAKAAAGAHQAGAGAAAMIAAAwg");
	this.shape_88.setTransform(231.4,151.2,0.7,0.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#7E7E7E").s().p("AgXAbQgKgKAAgQIAAgBQAAgQAKgLQAKgKANAAQAPAAAJAKQAKALAAAQIAAAAQAAARgKAKQgJALgPAAQgNAAgKgLgAgMgRQgFAHAAAKIAAAAQAAALAFAHQAFAGAHAAQAIAAAFgGQAFgHAAgKIAAgBQAAgJgFgIQgFgGgIAAQgHAAgFAGg");
	this.shape_89.setTransform(224.5,151.2,0.7,0.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#7E7E7E").s().p("AgXApQgJgKAAgRIAAgCQAAgRAJgKQAIgKAMABQAMAAAIAMIAAglIAQAAIAABiIgQAAIAAgLQgIANgMgBQgMAAgIgJgAgLgEQgFAFAAALIAAABQAAALAFAGQAFAGAGAAQAHAAAFgFQAGgIAAgJIAAgCQAAgKgGgGQgFgGgHgBQgGAAgFAHg");
	this.shape_90.setTransform(218.8,150.3,0.7,0.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#7E7E7E").s().p("AgUAcQgKgLAAgQIAAgBQAAgQAJgLQAJgKAMAAQAPAAAIALQAIALAAAPIAAAGIgtAAQACATAPAAQAKAAAIgIIAHAKQgKALgPAAQgOAAgJgKgAgOgEIAeAAQgCgUgOAAQgNAAgBAUg");
	this.shape_91.setTransform(213.6,151.2,0.7,0.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#7E7E7E").s().p("AgUAcQgKgLAAgQIAAgBQAAgQAJgLQAJgKANAAQANAAAJALQAIALAAAPIgBAGIgtAAQADATAPAAQAKAAAHgIIAIAKQgKALgQAAQgMAAgKgKgAgJgTQgFAGgBAJIAfAAQgBgJgEgGQgEgFgGAAQgGAAgEAFg");
	this.shape_92.setTransform(208.5,151.2,0.7,0.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#7E7E7E").s().p("AgSAlIAAhIIAQAAIAAAPQAGgQAPAAIAAARIgBAAQgUAAAAAYIAAAgg");
	this.shape_93.setTransform(204.5,151.2,0.7,0.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#7E7E7E").s().p("AgdAwIAAhfIA7AAIAAAPIgrAAIAAAbIAmAAIAAANIgmAAIAAAog");
	this.shape_94.setTransform(200.1,150.4,0.7,0.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#7E7E7E").s().p("AgSAlIAAhIIAQAAIAAAOQAGgQAPABIAAARIgBAAQgUAAAAAYIAAAgg");
	this.shape_95.setTransform(226.3,141.5,0.7,0.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#7E7E7E").s().p("AgUAcQgKgLAAgQIAAgBQAAgQAJgKQAJgLAMAAQAPAAAIALQAIAKAAARIAAAFIgtAAQACASAQAAQAJAAAIgHIAHAJQgLAMgOAAQgOAAgJgKgAgOgEIAdAAQgBgUgOAAQgMAAgCAUg");
	this.shape_96.setTransform(221.8,141.6,0.7,0.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#7E7E7E").s().p("AgGAlIgahJIARAAIAPA1IARg1IAQAAIgZBJg");
	this.shape_97.setTransform(216.9,141.6,0.7,0.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#7E7E7E").s().p("AgXAcQgKgMAAgPIAAgBQAAgQAKgKQAKgLANAAQAPAAAJALQAKAKAAAQIAAABQAAAPgKAMQgJAKgPAAQgNAAgKgKgAgMgRQgFAHAAAKIAAABQAAAJAFAIQAFAGAHAAQAIAAAFgGQAFgHAAgKIAAgBQAAgKgFgGQgFgIgIABQgHAAgFAGg");
	this.shape_98.setTransform(211.9,141.6,0.7,0.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#7E7E7E").s().p("AgXAcQgKgMAAgPIAAgBQAAgQAKgKQAKgLANAAQAPAAAJALQAKAKAAAQIAAABQAAAPgKAMQgJAKgPAAQgNAAgKgKgAgMgRQgFAHAAAKIAAABQAAAJAFAIQAFAGAHAAQAIAAAFgGQAFgHAAgKIAAgBQAAgKgFgGQgFgIgIABQgHAAgFAGg");
	this.shape_99.setTransform(206.3,141.6,0.7,0.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#7E7E7E").s().p("AATAwIAAgpIglAAIAAApIgQAAIAAhfIAQAAIAAAoIAlAAIAAgoIAQAAIAABfg");
	this.shape_100.setTransform(200.4,140.8,0.7,0.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#7E7E7E").s().p("AgdAsIAFgNQAEADAFAAQAFAAAEgIIgahIIARAAIAQA1IAQg1IAQAAIgaBKQgGATgOAAQgIAAgIgDg");
	this.shape_101.setTransform(291.7,152.5,0.7,0.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#7E7E7E").s().p("AgXApQgJgKAAgRIAAgDQAAgQAJgKQAIgKAMAAQANAAAHANIAAglIAQAAIAABiIgQAAIAAgMQgIAOgMAAQgMAAgIgKgAgLgEQgFAFAAAKIAAACQAAALAFAGQAEAHAHgBQAIAAAEgGQAGgGAAgLIAAgCQAAgJgGgGQgEgGgIAAQgHgBgEAHg");
	this.shape_102.setTransform(286.2,150.9,0.7,0.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#7E7E7E").s().p("AgXAbQgKgKAAgRIAAAAQAAgPAKgMQAKgKANAAQAPAAAJAKQAKALAAAQIAAAAQAAAQgKALQgKALgOAAQgOAAgJgLgAgMgRQgFAHAAAKIAAAAQAAALAFAGQAFAIAHAAQAIgBAFgGQAFgHAAgKIAAgBQAAgKgFgHQgFgGgIAAQgHAAgFAGg");
	this.shape_103.setTransform(280.7,151.8,0.7,0.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#7E7E7E").s().p("AgYAdIAFgMQALAIAJAAQAKAAAAgIQAAgFgNgHQgKgEgEgDQgGgFAAgJQAAgKAHgFQAHgGAJAAQANAAAJAGIgEANQgLgGgHAAQgIAAAAAHQAAAFANAGQAKAFADADQAGAGAAAIQAAAKgHAGQgGAGgLAAQgNAAgMgJg");
	this.shape_104.setTransform(275.8,151.8,0.7,0.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#7E7E7E").s().p("AggAwIAAhdIAQAAIAAAMQAIgOAMAAQAMAAAIAKQAJAKAAARIAAADQAAAQgJAKQgIAKgMAAQgLAAgJgNIAAAggAgLgaQgFAHAAAJIAAACQAAAKAFAGQAFAHAGgBQAHAAAFgFQAFgHAAgKIAAgCQAAgKgFgGQgFgHgHABQgGAAgFAGg");
	this.shape_105.setTransform(271.1,152.5,0.7,0.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#7E7E7E").s().p("AgVAgQgHgHAAgKIAAAAQAAgXAaAAQAHAAAJADIAAgDQAAgPgPAAQgJAAgKAEIgDgNQAMgFALAAQAdAAAAAdIAAAsIgPAAIAAgJQgIALgMAAQgJAAgGgGgAgNAOIAAABQAAALAMAAQAGAAAEgEQAFgEAAgGIAAgIQgGgCgIAAQgNAAAAAMg");
	this.shape_106.setTransform(265.6,151.8,0.7,0.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#7E7E7E").s().p("AANAyIAAgtQABgPgNAAQgNAAgBAQIAAAsIgPAAIAAhjIAPAAIAAAlQAIgMALAAQALAAAGAHQAGAHAAALIAAAxg");
	this.shape_107.setTransform(260.6,150.9,0.7,0.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#7E7E7E").s().p("AARAwIgTgiIgGAAIgLAAIAAAiIgQAAIAAhfIAjAAQAOAAAKAIQAJAIAAAOQAAAVgUAHIAXAlgAgTAAIASAAQASAAAAgQQAAgRgSAAIgSAAg");
	this.shape_108.setTransform(255.1,151,0.7,0.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#7E7E7E").s().p("AgSAlIAAhIIAQAAIAAAPQAGgQAPAAIAAARIgBAAQgUAAAAAYIAAAgg");
	this.shape_109.setTransform(280.9,142.1,0.7,0.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#7E7E7E").s().p("AgUAcQgKgKAAgRIAAgBQAAgQAJgKQAJgLANAAQAOAAAIALQAIALAAAPIAAAGIguAAQADATAPAAQAKAAAIgIIAHAKQgKALgQAAQgNAAgJgKgAgJgSQgFAFgBAJIAeAAQgBgUgNAAQgGAAgEAGg");
	this.shape_110.setTransform(276.4,142.2,0.7,0.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#7E7E7E").s().p("AgHAlIgZhJIAQAAIAQA0IARg0IAQAAIgaBJg");
	this.shape_111.setTransform(271.6,142.2,0.7,0.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#7E7E7E").s().p("AgXAbQgKgKAAgQIAAgBQAAgQAKgKQAKgLANAAQAPAAAJALQAKAKAAAQIAAABQAAAQgKAKQgKALgOAAQgOAAgJgLgAgMgRQgFAHAAAKIAAABQAAAKAFAHQAFAGAHAAQAIAAAFgGQAFgHAAgKIAAgBQAAgKgFgHQgFgGgIAAQgHAAgFAGg");
	this.shape_112.setTransform(266.5,142.2,0.7,0.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#7E7E7E").s().p("AgXAbQgKgKAAgQIAAgBQAAgQAKgKQAKgLANAAQAPAAAJALQAKAKAAAQIAAABQAAAQgKAKQgJALgPAAQgNAAgKgLgAgMgRQgFAHAAAKIAAABQAAAKAFAHQAFAGAHAAQAIAAAFgGQAFgHAAgKIAAgBQAAgKgFgHQgFgGgIAAQgHAAgFAGg");
	this.shape_113.setTransform(261,142.2,0.7,0.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#7E7E7E").s().p("AATAwIAAgpIglAAIAAApIgQAAIAAhfIAQAAIAAAoIAlAAIAAgoIAQAAIAABfg");
	this.shape_114.setTransform(255.1,141.3,0.7,0.7);

	this.instance_5 = new lib._2b();
	this.instance_5.parent = this;
	this.instance_5.setTransform(226,41,0.7,0.7);

	this.instance_6 = new lib._2a();
	this.instance_6.parent = this;
	this.instance_6.setTransform(169.1,40.9,0.7,0.7);

	var maskedShapeInstanceList = [this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.instance_5,this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88}]},62).to({state:[]},87).wait(211));

	// mask-in-out - копия (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_137 = new cjs.Graphics().p("A9ffNMAVlg+ZMAlaAAAMAAAA+Zg");
	var mask_2_graphics_138 = new cjs.Graphics().p("A8xfNMASag+ZMAnIAAAMAAAA+Zg");
	var mask_2_graphics_139 = new cjs.Graphics().p("A8HfNMAPig+ZMAotAAAMAAAA+Zg");
	var mask_2_graphics_140 = new cjs.Graphics().p("A7ifNMAM/g+ZMAqGAAAMAAAA+Zg");
	var mask_2_graphics_141 = new cjs.Graphics().p("A7BfNMAKug+ZMArVAAAMAAAA+Zg");
	var mask_2_graphics_142 = new cjs.Graphics().p("A6kfNMAIwg+ZMAsZAAAMAAAA+Zg");
	var mask_2_graphics_143 = new cjs.Graphics().p("A6MfNMAHGg+ZMAtTAAAMAAAA+Zg");
	var mask_2_graphics_144 = new cjs.Graphics().p("A54fNMAFvg+ZMAuDAAAMAAAA+Zg");
	var mask_2_graphics_145 = new cjs.Graphics().p("A5pfNMAEsg+ZMAunAAAMAAAA+Zg");
	var mask_2_graphics_146 = new cjs.Graphics().p("A5efNMAD8g+ZMAvBAAAMAAAA+Zg");
	var mask_2_graphics_147 = new cjs.Graphics().p("A5YfNMADfg+ZMAvSAAAMAAAA+Zg");
	var mask_2_graphics_148 = new cjs.Graphics().p("A5WfNMADWg+ZMAvXAAAMAAAA+Zg");
	var mask_2_graphics_211 = new cjs.Graphics().p("A9cfQMAAAg+aMA6+AAAMgVkA+ag");
	var mask_2_graphics_212 = new cjs.Graphics().p("A5HfQMAAAg+aMAyPAAAMgSYA+ag");
	var mask_2_graphics_213 = new cjs.Graphics().p("A1KfQMAAAg+aMAqVAAAMgPfA+ag");
	var mask_2_graphics_214 = new cjs.Graphics().p("AxofQMAAAg+aMAjRAAAMgM5A+ag");
	var mask_2_graphics_215 = new cjs.Graphics().p("AugfQMAAAg+aIdBAAMgKnA+ag");
	var mask_2_graphics_216 = new cjs.Graphics().p("Ar0fQMAAAg+aIXpAAMgIqA+ag");
	var mask_2_graphics_217 = new cjs.Graphics().p("AphfQMAAAg+aITDAAMgG+A+ag");
	var mask_2_graphics_218 = new cjs.Graphics().p("AnpfQMAAAg+aIPTAAMgFmA+ag");
	var mask_2_graphics_219 = new cjs.Graphics().p("AmMfQMAAAg+aIMZAAMgEiA+ag");
	var mask_2_graphics_220 = new cjs.Graphics().p("AlKfQMAAAg+aIKVAAMgDyA+ag");
	var mask_2_graphics_221 = new cjs.Graphics().p("AkifQMAAAg+aIJFAAMgDVA+ag");
	var mask_2_graphics_222 = new cjs.Graphics().p("AkjfQMAAAg+aIIqAAMgDLA+ag");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(137).to({graphics:mask_2_graphics_137,x:428.4,y:200.3}).wait(1).to({graphics:mask_2_graphics_138,x:377.8,y:200.3}).wait(1).to({graphics:mask_2_graphics_139,x:332,y:200.3}).wait(1).to({graphics:mask_2_graphics_140,x:291,y:200.3}).wait(1).to({graphics:mask_2_graphics_141,x:254.9,y:200.3}).wait(1).to({graphics:mask_2_graphics_142,x:223.5,y:200.3}).wait(1).to({graphics:mask_2_graphics_143,x:197,y:200.3}).wait(1).to({graphics:mask_2_graphics_144,x:175.4,y:200.3}).wait(1).to({graphics:mask_2_graphics_145,x:158.5,y:200.3}).wait(1).to({graphics:mask_2_graphics_146,x:146.4,y:200.3}).wait(1).to({graphics:mask_2_graphics_147,x:139.2,y:200.3}).wait(1).to({graphics:mask_2_graphics_148,x:136.8,y:200.3}).wait(1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_2_graphics_211,x:189,y:200}).wait(1).to({graphics:mask_2_graphics_212,x:151.1,y:200}).wait(1).to({graphics:mask_2_graphics_213,x:116.5,y:200}).wait(1).to({graphics:mask_2_graphics_214,x:85.6,y:200}).wait(1).to({graphics:mask_2_graphics_215,x:58.4,y:200}).wait(1).to({graphics:mask_2_graphics_216,x:34.7,y:200}).wait(1).to({graphics:mask_2_graphics_217,x:14.7,y:200}).wait(1).to({graphics:mask_2_graphics_218,x:-1.6,y:200}).wait(1).to({graphics:mask_2_graphics_219,x:-14.3,y:200}).wait(1).to({graphics:mask_2_graphics_220,x:-23.4,y:200}).wait(1).to({graphics:mask_2_graphics_221,x:-28.9,y:200}).wait(1).to({graphics:mask_2_graphics_222,x:-29.2,y:200}).wait(138));

	// pic2
	this.instance_7 = new lib.a3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(218.5,127.3,1,1,0,0,0,73.5,97.3);

	this.instance_8 = new lib.a2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(216.1,115,1,1,0,0,0,73.5,97.3);

	this.instance_9 = new lib.a1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(210.6,108.1,1.11,1.11,0,0,0,73.5,97.4);

	var maskedShapeInstanceList = [this.instance_7,this.instance_8,this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]},137).to({state:[]},86).wait(137));

	// text2
	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AAQAqIAAg2IggA2IgRAAIAAhSIASAAIAAA1IAfg1IASAAIAABSg");
	this.shape_115.setTransform(87.9,78.9,0.8,0.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AAOAqIgTgjIgLANIAAAWIgSAAIAAhSIASAAIAAAmIAcgmIAUAAIgbAjIAeAvg");
	this.shape_116.setTransform(81.4,78.9,0.8,0.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgkA2IAAhpIARAAIAAANQAKgPAOAAQANAAAJALQAKALAAAUIAAACQAAATgKAMQgJAKgNAAQgOAAgKgOIAAAkgAgNgeQgGAHAAAMIAAACQAAALAGAIQAGAGAHAAQAIAAAGgGQAFgIAAgLIAAgCQAAgMgFgIQgGgHgIAAQgHAAgGAIg");
	this.shape_117.setTransform(74.3,79.8,0.8,0.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgSIAAgBQAAgSALgMQALgMAPAAQARAAALAMQAKAMAAASIAAAAQAAATgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAHAAAMIAAAAQAAAMAGAIQAGAIAIgBQAKABAFgIQAGgHAAgMIAAgBQAAgLgGgIQgGgIgJAAQgJAAgFAIg");
	this.shape_118.setTransform(66.9,78.9,0.8,0.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgbAtQgKgMABgVIAAgCQAAgYAEgMQAGgRARgEIAngJIAEAPIgmAJQgSAEgBASQAIgOASAAQAOAAAKALQAKAMAAAQIAAABQABASgLAMQgKALgRAAQgRAAgKgMgAgNgCQgFAGAAALIAAABQAAAMAFAHQAFAHAIAAQAJAAAGgHQAEgHAAgMIAAgBQABgLgGgGQgGgIgIAAQgIAAgFAIg");
	this.shape_119.setTransform(59.8,77.8,0.8,0.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AghAxIAGgNQAEADAGAAQAHAAADgJIgdhSIASAAIASA8IATg8IASAAIgcBTQgIAWgRABQgJgBgIgEg");
	this.shape_120.setTransform(52.9,79.9,0.8,0.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AggAqIAAhSIAiAAQANgBAGAGQAIAGAAAKQAAANgMAFQAQAFAAAOQgBAMgHAFQgJAHgNAAgAgOAbIAOAAQAPAAAAgLQAAgLgPABIgOAAgAgOgGIAOAAQAMAAAAgLQAAgJgMgBIgOAAg");
	this.shape_121.setTransform(43.2,78.9,0.8,0.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgSIAAgBQAAgSALgMQALgMAPAAQARAAALAMQALAMgBASIAAAAQABATgLAMQgLAMgRAAQgPAAgLgMgAgOgTQgGAHABAMIAAAAQAAAMAFAIQAGAIAIgBQAKABAFgIQAFgHAAgMIAAgBQAAgLgFgIQgGgIgJAAQgIAAgGAIg");
	this.shape_122.setTransform(36.2,78.9,0.8,0.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AAPAqIAAhEIgdAAIAABEIgSAAIAAhSIBBAAIAABSg");
	this.shape_123.setTransform(29.2,78.9,0.8,0.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AAQAqIAAg2IggA2IgRAAIAAhSIASAAIAAA1IAfg1IASAAIAABSg");
	this.shape_124.setTransform(22.3,78.9,0.8,0.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgIAqIAAhEIgXAAIAAgOIA/AAIAAAOIgXAAIAABEg");
	this.shape_125.setTransform(16.1,78.9,0.8,0.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AARApIgRgdIgQAdIgTAAIAagpIgZgoIATAAIAPAbIARgbIASAAIgZAoIAaApg");
	this.shape_126.setTransform(109,65.5,0.8,0.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgUIAAAAQAAgSAKgMQAKgMAPAAQAQAAAJANQAJALAAASIAAAHIgzAAQACAVARAAQALAAAKgJIAIAMQgLAMgSAAQgPAAgLgLgAgQgEIAiAAQgBgYgQAAQgPAAgCAYg");
	this.shape_127.setTransform(102.7,65.5,0.8,0.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgVAfQgLgMAAgTIAAAAQABgSAKgMQALgMAPAAQARAAAKALIgJANQgIgJgJAAQgIAAgFAIQgHAHAAAMIAAAAQAAAMAHAIQAFAHAIAAQAKAAAIgIIAIAMQgMAMgPAAQgPAAgLgMg");
	this.shape_128.setTransform(96.6,65.5,0.8,0.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AggApIAAhRIAiAAQAMAAAHAFQAIAGAAAKQgBANgMAGQARAEgBAOQAAAXgdAAgAgOAbIAOAAQAOAAAAgLQABgLgPAAIgOAAgAgOgGIANAAQAMAAABgLQAAgKgMAAIgOAAg");
	this.shape_129.setTransform(90.4,65.5,0.8,0.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AARApIAAgcIgOAAIgPAcIgVAAIAUgfQgRgGAAgRQAAgbAeAAIAiAAIAABRgAgJgXQgEADAAAHQAAANAOAAIAQAAIAAgaIgNAAQgJAAgEADg");
	this.shape_130.setTransform(80.2,65.5,0.8,0.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AglApIABgPIAFABQAHAAADgLQAEgPAAgqIA3AAIAABSIgSAAIAAhDIgUAAQAAAqgHAOQgFAMgPAAg");
	this.shape_131.setTransform(73.4,65.5,0.8,0.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AAZAzIAAgTIgxAAIgBATIgQAAIAAgiIAIAAQAJgSAAglIAAgLIA4AAIAABCIAKAAIgCAigAgPARIAdAAIAAg0IgVAAQAAAjgIARg");
	this.shape_132.setTransform(66.7,66.2,0.8,0.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AAOApIgTgiIgLANIAAAVIgSAAIAAhRIASAAIAAAmIAdgmIAUAAIgbAiIAdAvg");
	this.shape_133.setTransform(57.1,65.5,0.8,0.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgTIAAAAQAAgSALgMQAKgMAQAAQARAAAKAMQALAMAAASIAAAAQAAATgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAIAAALIAAAAQAAAMAGAIQAGAHAIAAQAJAAAGgHQAGgIAAgLIAAgBQAAgMgGgHQgGgIgJAAQgJAAgFAIg");
	this.shape_134.setTransform(49.9,65.5,0.8,0.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AAZAzIAAgTIgxAAIgBATIgQAAIAAgiIAIAAQAJgSAAglIAAgLIA4AAIAABCIAKAAIgCAigAgPARIAdAAIAAg0IgWAAQAAAkgHAQg");
	this.shape_135.setTransform(42.7,66.2,0.8,0.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgZAkQgHgHAAgMIAAgBQAAgNAIgGQAIgGANAAQAJAAAKADIAAgDQAAgRgRAAQgJAAgMAEIgDgOQAMgGAOAAQAgAAAAAgIAAAzIgRAAIAAgKQgJAMgOAAQgKAAgIgHgAgPAPIAAABQAAANAOAAQAHAAAFgEQAFgFAAgHIAAgIQgIgDgHAAQgPAAgBANg");
	this.shape_136.setTransform(35.9,65.5,0.8,0.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgVAfQgKgMAAgTIAAAAQAAgSALgMQAKgMAQAAQAPAAALALIgIANQgJgJgJAAQgIAAgGAIQgFAHAAAMIAAAAQAAAMAGAIQAFAHAJAAQAIAAAKgIIAHAMQgLAMgQAAQgPAAgLgMg");
	this.shape_137.setTransform(29.8,65.5,0.8,0.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgYAkQgIgHAAgMIAAgBQAAgMAIgHQAIgGAOAAQAIAAAKADIAAgDQAAgRgRAAQgKAAgLAEIgEgOQANgGANAAQAhAAAAAgIAAAzIgRAAIAAgKQgJAMgNAAQgLAAgHgHgAgPAPIAAABQAAANAOAAQAHAAAFgEQAFgFAAgHIAAgIQgIgDgIAAQgPAAAAANg");
	this.shape_138.setTransform(23.3,65.5,0.8,0.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AAQApIAAgiIgfAAIAAAiIgRAAIAAhRIARAAIAAAhIAfAAIAAghIARAAIAABRg");
	this.shape_139.setTransform(16.8,65.5,0.8,0.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AAWApIAAg2IgWAkIAAAAIgVgkIAAA2IgRAAIAAhRIASAAIAUAkIAWgkIARAAIAABRg");
	this.shape_140.setTransform(127.8,52.1,0.8,0.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgaAfQgLgLAAgTIAAgBQAAgSALgMQALgMAPAAQARAAALAMQAKAMAAASIAAABQAAASgLAMQgKAMgRAAQgPAAgLgMgAgOgTQgGAIAAALIAAABQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMIAAgBQAAgLgGgIQgGgIgJAAQgIAAgGAIg");
	this.shape_141.setTransform(120.2,52.1,0.8,0.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgkA2IAAhpIARAAIAAANQAKgPAOAAQANAAAJAKQAKAMAAAUIAAACQAAATgKALQgJALgNAAQgOAAgKgOIAAAkgAgNgeQgGAHAAANIAAABQAAALAGAIQAGAGAHABQAIgBAGgGQAFgIAAgLIAAgBQAAgNgGgHQgFgIgIAAQgHAAgGAIg");
	this.shape_142.setTransform(113.1,53,0.8,0.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgaAfQgLgLAAgTIAAgBQAAgSALgMQALgMAPAAQARAAALAMQAKAMAAASIAAABQAAASgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAHAAAMIAAABQAAAMAGAHQAGAIAIAAQAJAAAGgIQAGgHAAgMIAAgBQAAgLgGgIQgGgIgJAAQgIAAgGAIg");
	this.shape_143.setTransform(105.7,52.1,0.8,0.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgaAtQgLgMABgWIAAgCQgBgYAFgLQAGgSASgDIAmgJIAEAOIgmAJQgSAFgBASQAIgPASAAQAOAAAKAMQAKAMAAAQIAAABQABASgLALQgKAMgRAAQgQAAgKgMgAgOgCQgFAGAAAMIAAAAQAAALAFAIQAHAHAHAAQAJAAAGgHQAEgIAAgLIAAAAQAAgMgFgGQgFgIgJAAQgIAAgGAIg");
	this.shape_144.setTransform(98.6,51,0.8,0.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AAbApIAAhRIASAAIAABRgAgsApIAAhRIARAAIAAAdIAPAAQAeAAAAAZQAAAcgegBgAgbAcIAPAAQAMAAAAgOQAAgMgMAAIgPAAg");
	this.shape_145.setTransform(90.6,52.1,0.8,0.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AggApIAAhRIAiAAQAMAAAHAFQAIAFAAALQAAANgMAFQAPAGAAAOQAAAKgHAGQgIAHgOgBgAgOAcIAOAAQAOAAAAgMQAAgKgOgBIgOAAgAgOgGIAOAAQAMAAgBgKQAAgLgLAAIgOAAg");
	this.shape_146.setTransform(83,52.1,0.8,0.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AAWApIAAg2IgWAkIgVgkIAAA2IgSAAIAAhRIASAAIAVAkIAWgkIASAAIAABRg");
	this.shape_147.setTransform(72.4,52.1,0.8,0.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AAQApIAAg1IggA1IgRAAIAAhRIASAAIAAA0IAgg0IARAAIAABRg");
	this.shape_148.setTransform(64.9,52.1,0.8,0.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgzApIAAhRIARAAIAABCIAaAAIAAhCIARAAIAABCIAaAAIAAhCIARAAIAABRg");
	this.shape_149.setTransform(56.4,52.1,0.8,0.8);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AgeApIAAhRIARAAIAAAdIANAAQAfAAAAAZQAAAcgfgBgAgNAcIANAAQAOAAAAgOQAAgMgOAAIgNAAg");
	this.shape_150.setTransform(48.6,52.1,0.8,0.8);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AglApIABgPIAFAAQAHAAADgKQAEgPAAgqIA3AAIAABSIgSAAIAAhDIgVAAQABAqgHAOQgFAMgPAAg");
	this.shape_151.setTransform(41.4,52.1,0.8,0.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgaAfQgLgLAAgTIAAgBQAAgSALgMQALgMAPAAQARAAALAMQAKAMAAASIAAABQAAASgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAHAAAMIAAABQAAAMAGAHQAGAIAIAAQAJAAAGgIQAGgHAAgMIAAgBQAAgLgGgIQgGgIgJAAQgIAAgGAIg");
	this.shape_152.setTransform(35,52.1,0.8,0.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgbAtQgKgMAAgWIAAgCQABgYAEgLQAGgSARgDIAogJIACAOIglAJQgSAFgBASQAIgPASAAQAOAAAKAMQALAMgBAQIAAABQAAASgKALQgKAMgRAAQgRAAgKgMgAgNgCQgGAGAAAMIAAAAQAAALAGAIQAFAHAIAAQAJAAAGgHQAEgIAAgLIAAAAQABgMgGgGQgGgIgIAAQgIAAgFAIg");
	this.shape_153.setTransform(27.9,51,0.8,0.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgbApQgNgQAAgYIAAgBQgBgYAOgQQAOgPAUAAQAUAAAOAMIgJAPQgMgKgNAAQgMAAgIAKQgIALgBARIAAABQABARAIALQAJAKAMAAQANAAAMgLIAIAOQgOAOgVAAQgTAAgOgPg");
	this.shape_154.setTransform(17.3,51,0.8,0.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AhpDmIB6nKIBYAAIh5HKg");
	this.shape_155.setTransform(150.3,40.8,0.8,0.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#CB0927").s().p("AiNEUICWonICFAAIiWIng");
	this.shape_156.setTransform(145.5,77.2,0.8,0.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#D1D1D1").s().p("AjCGDIBYlKICEAAIB3m6IAyAAIjOMEg");
	this.shape_157.setTransform(145.3,86,0.8,0.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#DC052B").s().p("Av4GaIAAszIfxAAIjZMzg");
	this.shape_158.setTransform(81.3,66.6,0.8,0.8);

	var maskedShapeInstanceList = [this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128,this.shape_129,this.shape_130,this.shape_131,this.shape_132,this.shape_133,this.shape_134,this.shape_135,this.shape_136,this.shape_137,this.shape_138,this.shape_139,this.shape_140,this.shape_141,this.shape_142,this.shape_143,this.shape_144,this.shape_145,this.shape_146,this.shape_147,this.shape_148,this.shape_149,this.shape_150,this.shape_151,this.shape_152,this.shape_153,this.shape_154,this.shape_155,this.shape_156,this.shape_157,this.shape_158];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115}]},137).to({state:[]},86).wait(137));

	// mask-in-out - копия: 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_211 = new cjs.Graphics().p("A9ffNMAVlg+ZMAlaAAAMAAAA+Zg");
	var mask_3_graphics_212 = new cjs.Graphics().p("A8xfNMASag+ZMAnIAAAMAAAA+Zg");
	var mask_3_graphics_213 = new cjs.Graphics().p("A8HfNMAPig+ZMAotAAAMAAAA+Zg");
	var mask_3_graphics_214 = new cjs.Graphics().p("A7ifNMAM/g+ZMAqGAAAMAAAA+Zg");
	var mask_3_graphics_215 = new cjs.Graphics().p("A7BfNMAKug+ZMArVAAAMAAAA+Zg");
	var mask_3_graphics_216 = new cjs.Graphics().p("A6kfNMAIwg+ZMAsZAAAMAAAA+Zg");
	var mask_3_graphics_217 = new cjs.Graphics().p("A6MfNMAHGg+ZMAtTAAAMAAAA+Zg");
	var mask_3_graphics_218 = new cjs.Graphics().p("A54fNMAFvg+ZMAuDAAAMAAAA+Zg");
	var mask_3_graphics_219 = new cjs.Graphics().p("A5pfNMAEsg+ZMAunAAAMAAAA+Zg");
	var mask_3_graphics_220 = new cjs.Graphics().p("A5efNMAD8g+ZMAvBAAAMAAAA+Zg");
	var mask_3_graphics_221 = new cjs.Graphics().p("A5YfNMADfg+ZMAvSAAAMAAAA+Zg");
	var mask_3_graphics_222 = new cjs.Graphics().p("A5WfNMADWg+ZMAvXAAAMAAAA+Zg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(211).to({graphics:mask_3_graphics_211,x:428.4,y:200.3}).wait(1).to({graphics:mask_3_graphics_212,x:377.8,y:200.3}).wait(1).to({graphics:mask_3_graphics_213,x:332,y:200.3}).wait(1).to({graphics:mask_3_graphics_214,x:291,y:200.3}).wait(1).to({graphics:mask_3_graphics_215,x:254.9,y:200.3}).wait(1).to({graphics:mask_3_graphics_216,x:223.5,y:200.3}).wait(1).to({graphics:mask_3_graphics_217,x:197,y:200.3}).wait(1).to({graphics:mask_3_graphics_218,x:175.4,y:200.3}).wait(1).to({graphics:mask_3_graphics_219,x:158.5,y:200.3}).wait(1).to({graphics:mask_3_graphics_220,x:146.4,y:200.3}).wait(1).to({graphics:mask_3_graphics_221,x:139.2,y:200.3}).wait(1).to({graphics:mask_3_graphics_222,x:136.8,y:200.3}).wait(1).to({graphics:null,x:0,y:0}).wait(137));

	// text3
	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAOAAQARAAAJAMQAJAMAAATIAAAGIgzAAQACAVASAAQALAAAJgJIAIAMQgNAMgQAAQgPAAgLgLgAgRgFIAjAAQgBgWgRAAQgOAAgDAWg");
	this.shape_159.setTransform(149,87.8,0.75,0.75);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AAOAqIgTgjIgLANIAAAWIgSAAIAAhTIASAAIAAAoIAdgoIAUAAIgbAjIAdAwg");
	this.shape_160.setTransform(143.4,87.8,0.75,0.75);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AgkA2IAAhqIARAAIAAAOQAKgPAOAAQANAAAJAKQAKAMAAAUIAAACQAAATgKALQgJALgNAAQgOAAgKgOIAAAkgAgNgeQgGAHAAAMIAAACQAAALAGAHQAGAHAHAAQAIAAAGgHQAFgHAAgLIAAgCQAAgMgGgHQgFgIgIAAQgHAAgGAIg");
	this.shape_161.setTransform(136.7,88.6,0.75,0.75);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgSIAAgBQAAgSALgMQALgMAPAAQARAAALAMQAKAMAAASIAAABQAAASgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAHAAAMIAAABQAAALAGAIQAGAIAIAAQAKAAAFgIQAGgHAAgMIAAgBQAAgLgGgIQgGgIgJAAQgIAAgGAIg");
	this.shape_162.setTransform(129.7,87.8,0.75,0.75);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AgaAtQgLgMABgWIAAgCQgBgXAFgMQAGgRASgEIAmgJIAEAOIgmAJQgSAFgBASQAHgOATAAQAOAAAKALQAKALAAARIAAAAQABATgLALQgKAMgRAAQgQAAgKgMgAgOgDQgFAHAAALIAAABQAAALAFAHQAHAIAHAAQAJAAAGgIQAEgHAAgLIAAgBQAAgLgFgHQgFgHgJAAQgIAAgGAHg");
	this.shape_163.setTransform(123.1,86.7,0.75,0.75);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AghAyIAGgOQAEADAGAAQAGAAAEgJIgdhTIASAAIATA9IASg9IATAAIgdBVQgFALgEAGQgGAEgKAAQgJAAgIgDg");
	this.shape_164.setTransform(116.6,88.7,0.75,0.75);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AgbAtQgJgMgBgWIAAgCQABgXAEgMQAGgRARgEIAogJIACAOIglAJQgSAFgBASQAIgOASAAQAOAAAKALQALALAAARIAAAAQAAATgLALQgKAMgRAAQgQAAgLgMgAgNgDQgFAHgBALIAAABQABALAFAHQAGAIAHAAQAJAAAFgIQAFgHABgLIAAgBQAAgLgGgHQgFgHgJAAQgHAAgGAHg");
	this.shape_165.setTransform(107.2,86.7,0.75,0.75);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgSIAAgBQAAgSALgMQALgMAPAAQARAAALAMQAKAMAAASIAAABQAAASgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAHAAAMIAAABQAAALAGAIQAGAIAIAAQAJAAAGgIQAGgIAAgLIAAgBQAAgLgGgIQgGgIgJAAQgIAAgGAIg");
	this.shape_166.setTransform(100.4,87.8,0.75,0.75);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJAMAAATIAAAGIgzAAQACAVASAAQALAAAJgJIAIAMQgMAMgRAAQgPAAgLgLgAgLgVQgEAGgBAKIAiAAQgBgKgEgGQgFgGgHAAQgHAAgFAGg");
	this.shape_167.setTransform(90.9,87.8,0.75,0.75);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AARAqIAAg2IghA2IgRAAIAAhTIASAAIAAA2IAgg2IARAAIAABTg");
	this.shape_168.setTransform(84.5,87.8,0.75,0.75);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AAQAqIAAgiIgfAAIAAAiIgRAAIAAhTIARAAIAAAiIAfAAIAAgiIARAAIAABTg");
	this.shape_169.setTransform(78,87.8,0.75,0.75);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJAMAAATIAAAGIgzAAQACAVASAAQALAAAJgJIAIAMQgMAMgRAAQgPAAgLgLgAgLgVQgEAGgBAKIAiAAQgCgWgPAAQgHAAgFAGg");
	this.shape_170.setTransform(71.7,87.8,0.75,0.75);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AglApIABgPIAFAAQAIAAACgKQAEgOAAgrIA3AAIAABSIgRAAIAAhCIgWAAQAAAogGAPQgGAMgOAAg");
	this.shape_171.setTransform(64.9,87.8,0.75,0.75);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgfAqIAAhTIAhAAQAMAAAIAGQAGAGAAAKQAAANgMAGQAQAEABAOQAAALgJAGQgIAGgNABgAgOAbIAOAAQAPABAAgLQgBgLgOAAIgOAAgAgOgGIANAAQANAAAAgLQAAgKgMABIgOAAg");
	this.shape_172.setTransform(59.2,87.8,0.75,0.75);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgYAkQgIgHAAgLIAAgBQAAgNAIgGQAIgHAOAAQAKAAAIADIAAgDQAAgRgRAAQgLAAgKAFIgEgPQAOgGAMAAQAhAAAAAhIAAAyIgRAAIAAgKQgIAMgOAAQgLAAgHgHgAgPAQIAAABQAAANAOAAQAHAAAFgFQAFgEAAgHIAAgJQgFgDgLAAQgPAAAAAOg");
	this.shape_173.setTransform(52.8,87.8,0.75,0.75);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AgIAqIAAhDIgXAAIAAgQIA+AAIAAAQIgWAAIAABDg");
	this.shape_174.setTransform(47.5,87.8,0.75,0.75);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgVAfQgLgMABgSIAAgBQgBgSALgMQAMgMAOAAQAQAAALALIgJANQgIgIgJAAQgIAAgFAHQgHAHABAMIAAABQgBAMAHAHQAGAHAHAAQAKAAAIgIIAIAMQgMAMgPAAQgPAAgLgMg");
	this.shape_175.setTransform(42.1,87.8,0.75,0.75);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AAZAzIAAgTIgxAAIgCATIgPAAIAAgiIAIAAQAJgSAAglIAAgMIA4AAIAABDIAKAAIgCAigAgPARIAdAAIAAgzIgWAAQAAAigHARg");
	this.shape_176.setTransform(35.8,88.5,0.75,0.75);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAOAAQARAAAJAMQAJAMAAATIAAAGIg0AAQAEAVARAAQAKAAAKgJIAIAMQgNAMgQAAQgPAAgLgLgAgLgVQgEAGgCAKIAiAAQAAgKgEgGQgFgGgIAAQgGAAgFAGg");
	this.shape_177.setTransform(29.5,87.8,0.75,0.75);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgkA2IAAhqIARAAIAAAOQAKgPANAAQAOAAAJAKQAKAMAAAUIAAACQAAATgKALQgJALgOAAQgNAAgKgOIAAAkgAgNgeQgGAHAAAMIAAACQAAALAGAHQAGAHAHAAQAIAAAGgHQAFgHAAgLIAAgCQAAgMgGgHQgFgIgIAAQgHAAgGAIg");
	this.shape_178.setTransform(23.1,88.6,0.75,0.75);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AAPAqIAAhDIgdAAIAABDIgSAAIAAhTIBBAAIAABTg");
	this.shape_179.setTransform(16.3,87.8,0.75,0.75);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAOAAQARAAAJAMQAJANAAARIAAAHIgzAAQACAVASAAQALAAAJgJIAIALQgLANgSAAQgPAAgLgLgAgRgFIAjAAQgCgWgQAAQgOAAgDAWg");
	this.shape_180.setTransform(103.5,75.2,0.75,0.75);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("Ag0ApIAAhSIASAAIAABDIAaAAIAAhDIARAAIAABDIAaAAIAAhDIARAAIAABSg");
	this.shape_181.setTransform(95.6,75.2,0.75,0.75);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AgZAkQgHgHAAgLIAAgBQAAgNAIgGQAIgHAOAAQAIAAAKADIAAgDQAAgRgSAAQgJAAgLAFIgEgPQAMgGAOAAQAhAAAAAhIAAAyIgRAAIAAgKQgJAMgOAAQgKAAgIgHgAgPAQIAAABQAAAMAOAAQAHAAAFgEQAFgFAAgHIAAgIQgHgDgJAAQgPAAAAAOg");
	this.shape_182.setTransform(87.8,75.2,0.75,0.75);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AggApIAAhSIAiAAQAbABgBAVQABANgMAGQAQAEAAAOQAAAXgfAAgAgOAcIAOAAQAPAAAAgLQAAgMgPAAIgOAAgAgOgGIAOAAQALAAAAgKQAAgLgLABIgOAAg");
	this.shape_183.setTransform(82,75.2,0.75,0.75);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgIApIAAhCIgWAAIAAgQIA+AAIAAAQIgYAAIAABCg");
	this.shape_184.setTransform(73.2,75.2,0.75,0.75);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AghAyIAGgPQAEADAFAAQAIAAADgJIgehSIATAAIASA9IATg9IASAAIgdBUQgHAXgRgBQgIAAgJgDg");
	this.shape_185.setTransform(67.5,76.1,0.75,0.75);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AAPApIAAghIgdAAIAAAhIgSAAIAAhSIASAAIAAAiIAdAAIAAgiIASAAIAABSg");
	this.shape_186.setTransform(61.2,75.2,0.75,0.75);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgkA2IAAhqIASAAIAAAOQAJgPAOAAQANAAAJAKQAKAMAAAUIAAACQAAATgKAMQgJAKgNAAQgNAAgKgOIAAAkgAgNgeQgGAHAAAMIAAACQAAAKAGAIQAGAIAHAAQAJAAAFgIQAGgHAAgLIAAgCQAAgMgGgHQgGgIgIABQgHAAgGAHg");
	this.shape_187.setTransform(54.7,76,0.75,0.75);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAOAAQARAAAJAMQAJANAAARIAAAHIgzAAQACAVASAAQALAAAJgJIAIALQgLANgSAAQgPAAgLgLgAgRgFIAjAAQgCgWgQAAQgOAAgDAWg");
	this.shape_188.setTransform(48,75.2,0.75,0.75);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AggApIAAhSIAiAAQAMAAAHAGQAHAGABAKQAAANgMAGQAPAEAAAOQAAALgHAHQgJAFgOAAgAgOAcIAOAAQAOAAAAgLQAAgMgOAAIgOAAgAgOgGIAOAAQAMAAgBgKQAAgLgLABIgOAAg");
	this.shape_189.setTransform(42,75.2,0.75,0.75);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJANAAARIAAAHIgzAAQABAKAGAGQAGAFAHAAQALAAAJgJIAIALQgLANgSAAQgPAAgLgLgAgQgFIAiAAQgCgWgPAAQgQAAgBAWg");
	this.shape_190.setTransform(35.7,75.2,0.75,0.75);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgkA2IAAhqIASAAIAAAOQAJgPAOAAQANAAAJAKQAKAMAAAUIAAACQAAATgKAMQgJAKgNAAQgNAAgKgOIAAAkgAgNgeQgGAHAAAMIAAACQAAALAGAHQAGAIAHAAQAIAAAGgIQAGgHAAgLIAAgCQAAgMgGgHQgGgIgIABQgHAAgGAHg");
	this.shape_191.setTransform(29.3,76,0.75,0.75);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJANAAARIAAAHIgzAAQADAVAQAAQAMAAAIgJIAJALQgLANgSAAQgPAAgLgLgAgQgFIAiAAQgBgWgQAAQgPAAgCAWg");
	this.shape_192.setTransform(22.6,75.2,0.75,0.75);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AAPApIAAhCIgdAAIAABCIgSAAIAAhSIBBAAIAABSg");
	this.shape_193.setTransform(16.3,75.2,0.75,0.75);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgUAqIAAhSIARAAIAAARQAHgSASAAIAAATIgBAAQgLAAgHAHQgGAIAAANIAAAkg");
	this.shape_194.setTransform(105.1,62.6,0.75,0.75);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AgXAfQgLgMAAgSIAAgBQAAgSAKgMQAKgMAOAAQARAAAJAMQAJAMAAATIAAAFIg0AAQADAWASAAQAKAAAKgIIAIAKQgNANgQAAQgPAAgLgMgAgRgFIAiAAQAAgKgEgGQgFgHgIABQgOAAgDAWg");
	this.shape_195.setTransform(99.6,62.7,0.75,0.75);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AgHAqIgdhTIATAAIARA8IATg8IASAAIgcBTg");
	this.shape_196.setTransform(93.7,62.6,0.75,0.75);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgSIAAgBQAAgSALgMQALgMAPAAQARAAALAMQALAMgBASIAAABQABASgLAMQgLAMgRAAQgPAAgLgMgAgOgTQgGAIABALIAAABQAAALAFAIQAGAHAIABQAKgBAFgHQAGgIAAgLIAAgBQAAgLgGgIQgGgHgJAAQgIAAgGAHg");
	this.shape_197.setTransform(87.6,62.7,0.75,0.75);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AgbAfQgKgMgBgSIAAgBQABgSAKgMQAMgMAPAAQARAAAKAMQAMAMAAASIAAABQAAASgMAMQgKAMgRAAQgQAAgLgMgAgOgTQgGAIAAALIAAABQAAALAGAIQAGAHAIABQAJgBAGgHQAGgIAAgLIAAgBQgBgLgFgIQgGgHgJAAQgIAAgGAHg");
	this.shape_198.setTransform(80.9,62.7,0.75,0.75);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AAWA3IAAgvIgqAAIAAAvIgSAAIAAhtIASAAIAAAuIAqAAIAAguIASAAIAABtg");
	this.shape_199.setTransform(73.6,61.6,0.75,0.75);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AAcAqIAAhSIARAAIAABSgAgsAqIAAhSIASAAIAAAdIAOAAQAeAAAAAZQAAAbgeABgAgaAbIANAAQANAAABgMQgBgNgNAAIgNAAg");
	this.shape_200.setTransform(62.6,62.6,0.75,0.75);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AgVAfQgKgMAAgSIAAgBQAAgSAKgMQALgMAPAAQAQAAALAKIgIAOQgJgIgJAAQgIAAgGAHQgGAHAAAMIAAABQAAAMAGAHQAGAHAJAAQAIAAAJgIIAIAMQgLAMgQAAQgPAAgLgMg");
	this.shape_201.setTransform(55.7,62.7,0.75,0.75);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgbAfQgLgMAAgSIAAgBQAAgSALgMQAMgMAPAAQARAAAKAMQAMAMAAASIAAABQAAASgMAMQgKAMgRAAQgPAAgMgMgAgOgTQgFAIgBALIAAABQAAALAHAIQAFAHAIABQAJgBAGgHQAGgIAAgLIAAgBQAAgLgGgIQgGgHgJAAQgIAAgGAHg");
	this.shape_202.setTransform(49.4,62.7,0.75,0.75);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AgVAfQgLgMAAgSIAAgBQABgSAKgMQALgMAPAAQARAAAKAKIgJAOQgIgIgJAAQgIAAgFAHQgHAHAAAMIAAABQAAAMAHAHQAFAHAJAAQAIAAAKgIIAHAMQgLAMgQAAQgPAAgLgMg");
	this.shape_203.setTransform(43.4,62.7,0.75,0.75);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AgXAfQgLgMAAgSIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJAMAAATIAAAFIgzAAQACAWASAAQAKAAAKgIIAIAKQgMANgRAAQgPAAgLgMgAgLgWQgEAHgBAKIAiAAQgBgKgEgGQgFgHgHABQgHAAgFAFg");
	this.shape_204.setTransform(37.3,62.7,0.75,0.75);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AglApIABgPIAFABQAHAAADgLQAEgOAAgrIA3AAIAABSIgSAAIAAhCIgUAAQAAApgHAOQgGAMgOAAg");
	this.shape_205.setTransform(30.6,62.7,0.75,0.75);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AAbAqIAAhSIASAAIAABSgAgsAqIAAhSIASAAIAAAdIAOAAQAeAAAAAZQAAAbgeABgAgaAbIANAAQANAAAAgMQAAgNgNAAIgNAAg");
	this.shape_206.setTransform(23.7,62.6,0.75,0.75);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AAPAqIAAhDIgdAAIAABDIgSAAIAAhSIBBAAIAABSg");
	this.shape_207.setTransform(16.3,62.6,0.75,0.75);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJANQAJAMAAARIAAAHIgzAAQABAKAGAGQAGAFAHAAQALAAAJgJIAIAMQgLAMgSAAQgPAAgLgLgAgLgVQgEAGgBAKIAiAAQgCgWgPAAQgHAAgFAGg");
	this.shape_208.setTransform(89.5,50.1,0.75,0.75);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AAbAqIAAhTIASAAIAABTgAgsAqIAAhTIASAAIAAAeIAOAAQAeAAAAAZQAAAbgeABgAgaAbIANAAQANAAAAgMQAAgOgNAAIgNAAg");
	this.shape_209.setTransform(82.2,50.1,0.75,0.75);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AAPAqIAAgiIgdAAIAAAiIgSAAIAAhTIASAAIAAAiIAdAAIAAgiIASAAIAABTg");
	this.shape_210.setTransform(74.8,50.1,0.75,0.75);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AAYAzIAAgSIgwAAIgCASIgPAAIAAgiIAIAAQAIgSAAglIAAgMIA4AAIAABDIALAAIgCAigAgPARIAdAAIAAg0IgWAAQAAAkgHAQg");
	this.shape_211.setTransform(68.2,50.7,0.75,0.75);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgSIAAgBQAAgSALgMQALgMAPAAQARAAALAMQAKAMAAASIAAABQAAASgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAIAAALIAAABQAAALAGAIQAGAHAIAAQAJAAAGgHQAGgIAAgLIAAgBQAAgLgGgIQgGgHgJgBQgJABgFAHg");
	this.shape_212.setTransform(61.7,50.1,0.75,0.75);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AggAqIAAhTIAiAAQANAAAGAGQAIAGAAAKQAAAMgMAGQAPAEAAAPQAAAMgIAFQgHAHgOAAgAgOAbIAPAAQANABAAgLQAAgMgOABIgOAAgAgOgGIAOAAQAMAAgBgLQAAgKgLAAIgOAAg");
	this.shape_213.setTransform(55.4,50.1,0.75,0.75);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AgbAfQgKgMgBgSIAAgBQABgSAKgMQAMgMAPAAQAQAAAMAMQAKAMABASIAAABQgBASgKAMQgMAMgQAAQgPAAgMgMgAgOgTQgFAIgBALIAAABQAAALAHAIQAFAHAIAAQAJAAAGgHQAFgHABgMIAAgBQgBgLgFgIQgGgHgJgBQgIABgGAHg");
	this.shape_214.setTransform(48.9,50.1,0.75,0.75);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AgkA2IAAhqIARAAIAAAOQALgPANAAQANAAAJAKQAKAMAAAUIAAACQAAATgKAMQgJAKgNAAQgNAAgLgOIAAAkgAgNgeQgGAIAAALIAAACQAAALAGAHQAGAIAHgBQAIABAGgIQAGgHAAgLIAAgCQAAgLgGgIQgGgHgIgBQgHABgGAHg");
	this.shape_215.setTransform(42.2,50.9,0.75,0.75);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AAPAqIAAhEIgdAAIAABEIgSAAIAAhTIBBAAIAABTg");
	this.shape_216.setTransform(35.4,50.1,0.75,0.75);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AgVAfQgKgMAAgSIAAgBQAAgSAKgMQALgMAPAAQAPAAAMAKIgIAOQgJgIgJAAQgIAAgGAHQgGAIAAALIAAABQAAAMAGAHQAGAHAJAAQAJAAAIgIIAIANQgLALgQAAQgPAAgLgMg");
	this.shape_217.setTransform(29.4,50.1,0.75,0.75);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAOAAQARAAAJANQAJAMAAARIAAAHIg0AAQAEAVARAAQALAAAJgJIAIAMQgMAMgRAAQgPAAgLgLgAgRgFIAjAAQgBgWgRAAQgOAAgDAWg");
	this.shape_218.setTransform(23.4,50.1,0.75,0.75);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AgmA3IAAhtIBFAAIAAARIgzAAIAAAbIAXAAQAQAAAKAIQAKAIAAAPQAAAQgLAJQgKAJgRAAgAgUAmIAWAAQATAAAAgQQAAgRgTAAIgWAAg");
	this.shape_219.setTransform(16.9,49.1,0.75,0.75);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AicFpIDBrRIB4AAIjBLRg");
	this.shape_220.setTransform(175.6,41.6,0.75,0.75);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#CB0927").s().p("AiqEtIChpZIC0AAIiiJZg");
	this.shape_221.setTransform(171.5,82.2,0.75,0.75);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#DBDBDA").s().p("Aj8HiIBhlqICzAAICipZIBDAAIkBPDg");
	this.shape_222.setTransform(170.4,95.8,0.75,0.75);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#DC052B").s().p("Az2HiIAAvCMAntAAAIkCPCg");
	this.shape_223.setTransform(96.3,68.7,0.75,0.75);

	var maskedShapeInstanceList = [this.shape_159,this.shape_160,this.shape_161,this.shape_162,this.shape_163,this.shape_164,this.shape_165,this.shape_166,this.shape_167,this.shape_168,this.shape_169,this.shape_170,this.shape_171,this.shape_172,this.shape_173,this.shape_174,this.shape_175,this.shape_176,this.shape_177,this.shape_178,this.shape_179,this.shape_180,this.shape_181,this.shape_182,this.shape_183,this.shape_184,this.shape_185,this.shape_186,this.shape_187,this.shape_188,this.shape_189,this.shape_190,this.shape_191,this.shape_192,this.shape_193,this.shape_194,this.shape_195,this.shape_196,this.shape_197,this.shape_198,this.shape_199,this.shape_200,this.shape_201,this.shape_202,this.shape_203,this.shape_204,this.shape_205,this.shape_206,this.shape_207,this.shape_208,this.shape_209,this.shape_210,this.shape_211,this.shape_212,this.shape_213,this.shape_214,this.shape_215,this.shape_216,this.shape_217,this.shape_218,this.shape_219,this.shape_220,this.shape_221,this.shape_222,this.shape_223];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159}]},211).to({state:[]},87).wait(62));

	// pic3
	this.instance_10 = new lib._4();
	this.instance_10.parent = this;
	this.instance_10.setTransform(198,1);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(211).to({_off:false},0).to({_off:true},87).wait(62));

	// bg
	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.lf(["#DBDBDB","#E9E9E9","#8A8A8A"],[0,0.514,0.984],122.1,-313.5,-51,131.1).s().p("Aq6cMMAOZg4XIHcAAMgOaA4Xg");
	this.shape_224.setTransform(257.2,124.8,0.469,0.758,4,0,0,-0.3,0.2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.lf(["#DBDBDB","#E9E9E9","#8A8A8A"],[0,0.514,0.984],122.1,-313.5,-51,131.1).s().p("Aq6cMMAOZg4XIHcAAMgOaA4Xg");
	this.shape_225.setTransform(33.2,124.8,0.469,0.758,4,0,0,-0.3,0.2);

	this.instance_11 = new lib.bg2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,0,0.542,0.679);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.shape_225},{t:this.shape_224}]}).wait(360));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(141.2,113.9,313.9,271.4);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/bg2.jpg", id:"bg2"},
		{src:"images/300x250_atlas_P_.png", id:"300x250_atlas_P_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;