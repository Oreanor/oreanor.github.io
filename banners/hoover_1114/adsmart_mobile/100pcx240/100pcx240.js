(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"100pcx240_atlas_P_", frames: [[364,252,69,260],[435,252,60,260],[0,0,210,278],[364,0,88,250],[212,0,150,290],[202,292,150,136],[0,280,200,183]]},
		{name:"100pcx240_atlas_NP_", frames: [[0,0,554,368],[556,0,220,153]]}
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
	this.spriteSheet = ss["100pcx240_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2b = function() {
	this.spriteSheet = ss["100pcx240_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["100pcx240_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["100pcx240_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._4_1 = function() {
	this.spriteSheet = ss["100pcx240_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bg2 = function() {
	this.spriteSheet = ss["100pcx240_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pic0 = function() {
	this.spriteSheet = ss["100pcx240_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.pic0_2 = function() {
	this.spriteSheet = ss["100pcx240_atlas_P_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.pic3 = function() {
	this.spriteSheet = ss["100pcx240_atlas_NP_"];
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


(lib.tetrad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DBDBDB","#E9E9E9","#8A8A8A"],[0,0.514,0.984],122.1,-313.5,-51,131.1).s().p("Aq6cMMAOZg4XIHcAAMgOaA4Xg");
	this.shape.setTransform(60.9,139.2,0.525,0.849,4,0,0,-0.4,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.tetrad, new cjs.Rectangle(13.8,-12.9,94.6,304), null);


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
	this.shape.setTransform(89,-151.8,0.692,0.692);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAfAzIAAhlIASAAIAABlgAgxAzIAAhlIASAAIAAAmIANgBQASAAAJAJQAJAHAAAQQAAAOgJAKQgJAIgTAAgAgfACIAAAiIAJAAQANAAAGgFQADgFAAgIQAAgIgEgFQgGgEgLAAg");
	this.shape_1.setTransform(81,-151.8,0.692,0.692);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAVAzIAAguIgoAAIAAAuIgTAAIAAhlIATAAIAAAoIAoAAIAAgoIASAAIAABlg");
	this.shape_2.setTransform(73.5,-151.8,0.692,0.692);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAUAzIAAguIgnAAIAAAuIgSAAIAAhlIASAAIAAAoIAnAAIAAgoIASAAIAABlg");
	this.shape_3.setTransform(66.7,-151.8,0.692,0.692);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghAmQgLgOAAgYQAAgVAMgQQAMgPAUAAQAVAAAMANQAMAPAAAYQAAAYgMAOQgNAPgVAAQgVAAgLgPgAgSgaQgHAJAAARQAAASAGAKQAGAJAMAAQAMAAAIgKQAHgJAAgSQAAgkgaAAQgMAAgGAKg");
	this.shape_4.setTransform(59.8,-151.8,0.692,0.692);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgnA1IAAhnIASAAIAABDIA1hFIAIAAIAABnIgTAAIAAhEIg0BGg");
	this.shape_5.setTransform(52.9,-151.8,0.692,0.692);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAaBCIAAgeIhDAAIAAhlIASAAIAABWIAjAAIAAhWIASAAIAABWIAMAAIAAAtg");
	this.shape_6.setTransform(46.3,-150.8,0.692,0.692);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAZA0IgIgVIgiAAIgHAVIgUAAIAphnIAHAAIApBngAgLARIAXAAIgMgkg");
	this.shape_7.setTransform(39.5,-151.9,0.692,0.692);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgiA0IAAhmIAdgBQAQAAAIAHQAKAHgBAMQAAANgNAHQATAGAAAUQAAAOgKAIQgKAJgRAAgAgQAlIAKAAQAJAAAHgEQAGgEgBgKQAAgJgEgEQgGgEgLAAIgKAAgAgQgjIAAAYIAKAAQAQAAAAgNQAAgMgPAAg");
	this.shape_8.setTransform(33.5,-151.9,0.692,0.692);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AghAmQgLgOAAgYQAAgVAMgQQAMgPAUAAQAWAAALANQAMAOAAAZQAAAYgNAOQgMAPgVAAQgVAAgLgPgAgTgaQgGAKAAAQQAAASAGAKQAGAJAMAAQAMAAAIgKQAHgJAAgSQAAgkgaAAQgMAAgHAKg");
	this.shape_9.setTransform(26.9,-151.8,0.692,0.692);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAVAzIAAguIgoAAIAAAuIgSAAIAAhlIASAAIAAAoIAoAAIAAgoIARAAIAABlg");
	this.shape_10.setTransform(20,-151.8,0.692,0.692);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAUAzIAAguIgoAAIAAAuIgSAAIAAhlIASAAIAAAoIAoAAIAAgoIATAAIAABlg");
	this.shape_11.setTransform(13.3,-151.8,0.692,0.692);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgnA1IAAhnIASAAIAABDIA1hFIAIAAIAABnIgTAAIAAhEIg0BGg");
	this.shape_12.setTransform(6.4,-151.8,0.692,0.692);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAVAzIAAguIgoAAIAAAuIgSAAIAAhlIASAAIAAAoIAoAAIAAgoIARAAIAABlg");
	this.shape_13.setTransform(-3.5,-151.8,0.692,0.692);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AggAzIAAhlIBBAAIAAAQIgvAAIAAAYIAhAAIAAAPIghAAIAAAeIAuAAIAAAQg");
	this.shape_14.setTransform(-9.6,-151.8,0.692,0.692);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAiBCIAAgeIhDAAIAAAeIgQAAIAAgtIAHAAQAIgJAJgUQAJgUAIglIAuAAIAABWIALAAIAAAtgAgHgJQgIAUgIAKIAsAAIAAhHIgSAAQgDAWgHATg");
	this.shape_15.setTransform(-16.2,-150.8,0.692,0.692);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AApAvQgEgFgCgKQgEgcgWAAIAAAvIgQAAIAAgvQgXAAgEAcQgCALgEAEQgFAFgIAAIgGgBIAAgQIACAAQAEAAABgBIADgIQABgKAGgHQAGgIAKgDQgTgDgEgVIgCgHQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAIgDAAIAAgQIAGgBQAJAAAEAEQAEAGACAKQAEAVAWABIAAgpIAQAAIAAApQAKAAAHgGQAHgGACgKQABgKAEgFQAFgFAIAAIAGABIAAAQIgCAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAIgCAHQgCAIgGAHQgEAGgKADQASAFAFAXQAAAGACACQACABADAAIACAAIAAAQIgFABQgJAAgFgFg");
	this.shape_16.setTransform(-24.4,-151.8,0.692,0.692);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AghAmQgLgOAAgYQAAgVAMgQQAMgPAUAAQAVAAAMANQAMAPAAAYQAAAYgMAOQgNAPgVAAQgVAAgLgPgAgSgaQgHAJAAARQAAASAGAKQAGAJAMAAQAMAAAIgKQAHgJAAgSQAAgkgaAAQgMAAgGAKg");
	this.shape_17.setTransform(-32.5,-151.8,0.692,0.692);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AghA0IAAhmIAVgBQAXAAAMAIQALAHAAAQQAAAigpAAIgHAAIAAAmgAgOgBIAHAAQALAAAGgEQAFgEAAgKQABgPgZAAIgFAAg");
	this.shape_18.setTransform(-38.7,-151.9,0.692,0.692);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhKCtIBclZIA5AAIhbFZg");
	this.shape_19.setTransform(107.3,-166.7,0.836,0.836);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CB0927").s().p("AhLB7IBCj1IBVAAIhCD1g");
	this.shape_20.setTransform(105.5,-147.2,0.836,0.836);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D1D1D1").s().p("Ah3DfIA3jHIBVAAIBCj2IAhAAIh4G9g");
	this.shape_21.setTransform(104.6,-138.8,0.836,0.836);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#DC052B").s().p("AzKDiIBjnDMAkyAABIh5HCg");
	this.shape_22.setTransform(29.7,-152.4,0.692,0.692);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ghggg, new cjs.Rectangle(-55.2,-181.1,169.9,61), null);


(lib.fghf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pic3();
	this.instance.parent = this;
	this.instance.setTransform(-110,-76.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.fghf, new cjs.Rectangle(-110,-76.5,220,153), null);


(lib.dfgdfggg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMAZQgFgFgBgHIAHgBQABAGADADQADACAEAAQAEAAAEgDQADgDAAgGQAAgEgDgDQgDgEgFAAIgEABIABgFIABAAQADAAAEgCQAEgDAAgFQAAgDgDgDQgDgCgDAAQgEAAgDACQgCADgBAFIgHgBQABgHAFgEQAEgEAHAAQAEAAAEACQAEACACADQACAEAAAEQAAADgCADQgCADgEACQAFABADADQADAEAAAFQAAAIgGAFQgFAFgIAAQgHAAgFgEg");
	this.shape.setTransform(147.8,-145.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMAYQgGgEAAgHIAHgBQABAGADACQADADAEAAQAEAAAEgEQAEgEAAgGQAAgGgEgDQgEgDgEAAQgEAAgCACQgDABgCACIgGgBIAGgdIAbAAIAAAHIgWAAIgDAPQAFgDAFAAQAHAAAGAFQAFAEAAAIQAAAIgEAGQgGAHgJAAQgIAAgEgFg");
	this.shape_1.setTransform(143.4,-145.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_2.setTransform(138.7,-145.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMAXQgGgHABgQQAAgJABgGQACgHAFgDQAEgDAFAAQAFAAADACQADABADAEIAEAIIABANQAAAKgCAGQgCAGgFAEQgDADgHAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQADgFAAgOQAAgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_3.setTransform(134.4,-145.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJAcQgBgHADgJQADgKAEgIQAEgIAFgHIgaAAIAAgGIAjAAIAAAFQgFAGgFAKQgGAIgCALQgCAHAAAIg");
	this.shape_4.setTransform(130,-145.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMAXQgFgHAAgQQAAgJABgGQACgHAFgDQAEgDAFAAQAFAAADACQAEABACAEIAEAIIAAANQABAKgCAGQgDAGgEAEQgDADgHAAQgHAAgFgGgAgHgSQgEAFABANQgBAOAEAFQADAEAEAAQAFAAADgEQAEgFgBgOQABgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_5.setTransform(125.5,-145.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNAXQgFgHAAgPQAAgPAGgIQAFgGAJAAQAHAAAEAEQAEADABAHIgHABQgBgFgCgBQgDgDgEAAIgFABQgDADgCAEQgCAFAAAJQADgEADgCIAHgCQAHAAAFAFQAFAEAAAJQAAAFgDAFQgCAEgEADQgEACgFAAQgIAAgGgGgAgGABQgEADAAAGIABAHQACADADACQADABACAAQAEAAADgDQAEgEAAgGQAAgGgEgDQgDgDgEAAQgFAAgCADg");
	this.shape_6.setTransform(121.1,-145.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMAaQgEgEgBgHIAHgBQABAFACACQADACADAAQADAAACgBIAEgEIADgHIABgIIAAgCQgCAEgEACQgEACgDAAQgHAAgFgFQgFgEAAgJQAAgJAFgFQAFgFAIAAQAFAAAEADQAFADACAFQADAGAAAKQAAAKgDAHQgCAGgFAEQgEADgGAAQgGAAgFgDgAgHgTQgEAEAAAGQAAAGAEADQADADAEAAQAFAAADgDQADgDAAgGQAAgGgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_7.setTransform(116.6,-145.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgJAcQAAgHACgJQADgKAEgIQAEgIAFgHIgbAAIAAgGIAkAAIAAAFQgFAGgGAKQgFAIgCALQgCAHAAAIg");
	this.shape_8.setTransform(112.2,-145.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgJAcQAAgHACgJQADgKAEgIQAEgIAGgHIgbAAIAAgGIAkAAIAAAFQgGAGgFAKQgGAIgCALQgCAHgBAIg");
	this.shape_9.setTransform(107.8,-145.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_10.setTransform(103.1,-145.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgMAXQgFgHgBgQQAAgJACgGQADgHADgDQAEgDAGAAQAEAAAEACQADABADAEIADAIIABANQAAAKgCAGQgBAGgFAEQgEADgGAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQAEgFAAgOQAAgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_11.setTransform(98.8,-145.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_12.setTransform(94.1,-145.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_13.setTransform(87.1,-145.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAIABQAEABAEACQADACABADQACAEAAAEQAAAHgFAEQgFAFgMAAIgNAAIAAAYgAgNAAIANAAQAIAAADgDQADgDAAgFQAAgDgBgDQgDgCgDgBIgHgBIgNAAg");
	this.shape_14.setTransform(81.6,-145.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgSAdIAAg5IAlAAIAAAHIgdAAIAAAyg");
	this.shape_15.setTransform(77,-145.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_16.setTransform(71.4,-145.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgNAYQgFgEAAgHIAHgBQABAGADACQADADAEAAQAFAAADgEQAEgEgBgGQABgGgEgDQgDgDgFAAQgDAAgDACQgDABgBACIgHgBIAGgdIAbAAIAAAHIgWAAIgDAPQAGgDAEAAQAHAAAFAFQAGAEAAAIQAAAIgEAGQgGAHgJAAQgHAAgGgFg");
	this.shape_17.setTransform(63.9,-145.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_18.setTransform(59.1,-145.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgMAXQgGgHAAgQQABgJACgGQACgHADgDQAFgDAFAAQAEAAAEACQADABADAEIADAIIACANQgBAKgCAGQgCAGgDAEQgFADgGAAQgIAAgEgGgAgHgSQgDAFgBANQABAOADAFQADAEAEAAQAFAAADgEQADgFABgOQgBgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_19.setTransform(54.9,-145.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgSAdIAAgFIAFgIIAKgIQAIgIADgEQADgEABgEQAAgEgEgDQgDgDgEAAQgFAAgCADQgEADAAAGIgGgBQAAgIAFgEQAEgFAIAAQAIAAAFAFQAFAEAAAHIgCAHQgBADgDADQgDAEgIAGIgHAHIgEAEIAcAAIAAAHg");
	this.shape_20.setTransform(50.4,-145.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_21.setTransform(45.7,-145.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgNAYQgEgEgBgHIAHgBQABAGADACQADADAEAAQAFAAADgEQADgEAAgGQAAgGgDgDQgDgDgFAAQgDAAgDACQgDABgCACIgGgBIAFgdIAcAAIAAAHIgWAAIgDAPQAGgDAEAAQAIAAAEAFQAGAEAAAIQAAAIgFAGQgFAHgJAAQgHAAgGgFg");
	this.shape_22.setTransform(41.6,-145.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_23.setTransform(37,-145.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgMAXQgFgHgBgQQAAgJACgGQADgHADgDQAEgDAGAAQAEAAAEACQADABADAEIADAIIABANQAAAKgCAGQgBAGgFAEQgEADgGAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQAEgFAAgOQAAgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_24.setTransform(32.7,-145.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgKAcQABgHACgJQACgKAFgIQAEgIAFgHIgbAAIAAgGIAkAAIAAAFQgFAGgGAKQgFAIgCALQgCAHgBAIg");
	this.shape_25.setTransform(28.3,-145.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgJAcQgBgHADgJQADgKAEgIQAEgIAGgHIgbAAIAAgGIAjAAIAAAFQgFAGgFAKQgGAIgCALQgCAHAAAIg");
	this.shape_26.setTransform(23.8,-145.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_27.setTransform(16.5,-145.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_28.setTransform(10.7,-145.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAQAdIAAgsIgeAsIgIAAIAAg5IAHAAIAAAtIAegtIAHAAIAAA5g");
	this.shape_29.setTransform(4.9,-145.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_30.setTransform(259.8,-150.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgNAYQgFgFAAgHQAAgGADgEQADgCAFgCQgEgBgDgDQgBgDgBgEQABgHAEgEQAEgEAHAAQAHAAAFAEQAFAEAAAHQAAAEgDADQgBADgFABQAGACACADQADAEAAAFQAAAHgFAFQgGAFgIAAQgHAAgGgFgAgHAEQgDADAAAFIABAGIAEAEIAFABQAFAAAEgDQADgDAAgFQAAgFgDgDQgEgEgFAAQgEAAgDAEgAgGgUQgCADAAADQAAAEACADQADADADAAQAEAAADgDQACgDABgDQgBgEgCgDQgDgCgEAAQgDAAgDACg");
	this.shape_31.setTransform(256.4,-153.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_32.setTransform(250.9,-150.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAQAbIAAgMIgfAAIAAAMIgGAAIAAgSIADAAQAIgJAAgaIAbAAIAAAjIAFAAIAAASgAgLAJIAVAAIAAgdIgOAAQgBAUgGAJg");
	this.shape_33.setTransform(247.3,-151.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgDAHQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_34.setTransform(241.8,-150.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAKAdIAAgfIgTAfIgHAAIAAgpIAHAAIAAAeIATgeIAHAAIAAApgAgGgUQgEgDAAgFIAFAAIACAFIADABIAFgBIACgFIAFAAQAAAFgEADQgDACgEAAQgFAAgCgCg");
	this.shape_35.setTransform(238.5,-153.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgKAEIAAgHIAVAAIAAAHg");
	this.shape_36.setTransform(234.9,-152.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgSAdIAAgFIAFgIIAJgIQAJgIADgEQADgEABgEQAAgEgEgDQgDgDgEAAQgFAAgCADQgEADAAAGIgGgBQAAgIAFgEQAEgFAIAAQAIAAAFAFQAFAEAAAHIgCAHQgBADgDADQgDAEgIAGIgHAHIgEAEIAcAAIAAAHg");
	this.shape_37.setTransform(231.3,-153.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAKAdIAAgfIgSAfIgIAAIAAgpIAHAAIAAAeIATgeIAHAAIAAApgAgGgUQgDgDgBgFIAEAAIADAFIADABIAFgBIACgFIAFAAQAAAFgDADQgEACgEAAQgFAAgCgCg");
	this.shape_38.setTransform(224.8,-153.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAKAVIAAgfIgTAfIgHAAIAAgpIAHAAIAAAfIASgfIAIAAIAAApg");
	this.shape_39.setTransform(220.3,-152.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAIAVIgIgNIgDgFIgEgBIAAATIgHAAIAAgpIAHAAIAAASQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQABgBACgHIADgGIADgCIAFgBIACAAIAAAGIgCAAIgEABIgCAFIgDAGIgDACQADABAFAHIAHANg");
	this.shape_40.setTransform(216.6,-152.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_41.setTransform(212.7,-152.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAKAVIAAgTIgTAAIAAATIgHAAIAAgpIAHAAIAAASIATAAIAAgSIAHAAIAAApg");
	this.shape_42.setTransform(208.4,-152.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAKAVIAAgfIgSAfIgIAAIAAgpIAHAAIAAAfIATgfIAHAAIAAApg");
	this.shape_43.setTransform(204,-152.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAXAbIAAgMIgzAAIAAgpIAHAAIAAAjIAQAAIAAgjIAGAAIAAAjIAQAAIAAgjIAHAAIAAAjIAFAAIAAASg");
	this.shape_44.setTransform(198.6,-151.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgNAQQgFgFgBgLQABgLAGgFQAGgFAGAAQAIAAAGAGQAGAGgBAJQAAAHgCAFQgDAFgEACQgEADgGAAQgHAAgGgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAGAAADgEQAEgEAAgIQAAgHgEgEQgDgEgGAAQgEAAgEAEg");
	this.shape_45.setTransform(192.9,-152.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAIABQAFABACACQADACACADQACAEAAAEQAAAHgFAEQgFAFgLAAIgOAAIAAAYgAgNAAIAOAAQAHAAADgDQADgDAAgFQAAgDgBgDQgCgCgEgBIgGgBIgOAAg");
	this.shape_46.setTransform(188.1,-153.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AARAbIAAgMIggAAIAAAMIgGAAIAAgSIAEAAQAHgJAAgaIAcAAIAAAjIAEAAIAAASgAgLAJIAWAAIAAgdIgQAAQAAAUgGAJg");
	this.shape_47.setTransform(180.7,-151.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgPAJIAHgBQAAAEADACQADACADAAQADAAACgCQADgCAAgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAIgFAAIgCAAIAAgFIAFAAIADgCQABAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAQgCgCgDAAQgEAAgDAHIgHgBQAEgMALAAQAGAAAEAEQAEAEgBAFQAAAFgEADQACAAACADQACADAAADQAAAGgEADQgFAEgGAAQgOAAgCgNg");
	this.shape_48.setTransform(176.6,-152.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgNAQQgFgGAAgKQAAgJAFgGQAGgGAIAAQAHAAAGAGQAFAGAAAJIAAACIgeAAQABAHADADQAEAEAEAAQADAAAEgCQACgCABgFIAIABQgCAHgFADQgEAEgHAAQgIAAgGgGgAgGgMQgEAEgBAFIAXAAQAAgFgDgDQgEgEgEAAQgFAAgCADg");
	this.shape_49.setTransform(172.6,-152.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgNAQQgFgFgBgLQABgLAGgFQAGgFAGAAQAIAAAGAGQAGAGgBAJQAAAHgCAFQgDAFgEACQgEADgGAAQgHAAgGgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAGAAADgEQAEgEAAgIQAAgHgEgEQgDgEgGAAQgEAAgEAEg");
	this.shape_50.setTransform(168.1,-152.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgRAdIAAg4IAGAAIAAAFQADgDADgCQACgBADAAQAFAAAFADQAEACABAFQADAFAAAGQAAAHgDAEQgCAFgEACQgEADgFAAQgDAAgCgBQgDgCgCgCIAAAUgAgHgSQgEAEAAAIQAAAHAEAEQADADAEAAQAEAAADgEQAEgEAAgHQAAgIgEgEQgDgEgEAAQgEAAgDAFg");
	this.shape_51.setTransform(163.8,-151.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAOAdIAAgyIgcAAIAAAyIgIAAIAAg5IAsAAIAAA5g");
	this.shape_52.setTransform(158.6,-153.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgDAHQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_53.setTransform(152.4,-150.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgOASQgEgDAAgFQAAgDACgDQAAgCADgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgCACQgDACgBAEIgHgBIADgHQADgDAEgBQAEgCAEAAQAFAAAEACQADABABACIACAFIABAGIAAAIIABANIABAFIgHAAQgCgCABgDIgIAEIgHACQgHAAgDgEgAgBADIgGABIgDACIgBAEQAAAAABABQAAABAAAAQAAABABAAQAAABABAAQABACAFAAQADAAADgCQADgBACgDQABgDAAgEIAAgDIgLADg");
	this.shape_54.setTransform(149.1,-152.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgQAVIAAgpIAQAAIAIABQADABACADQACADAAADIgBAFIgEAEQADAAACADQACACAAAEQAAAGgFADQgDADgIAAgAgJAPIAJAAIAIgBQACgCAAgDIgBgEQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAIgFAAIgJAAgAgJgCIAIAAIAEgBIAEgCQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgDgCgCIgHgBIgIAAg");
	this.shape_55.setTransform(144.9,-152.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAIAVIgIgNIgDgFIgEgBIAAATIgHAAIAAgpIAHAAIAAASQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQABgBACgHIADgGIADgCIAFgBIACAAIAAAGIgCAAIgEABIgCAFIgDAGIgDACQADABAFAHIAHANg");
	this.shape_56.setTransform(141.1,-152.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_57.setTransform(137.2,-152.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgNAQQgGgFAAgLQAAgLAHgFQAGgFAGAAQAIAAAGAGQAFAGABAJQgBAHgCAFQgCAFgFACQgEADgGAAQgIAAgFgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQADgEAAgIQAAgHgDgEQgDgEgGAAQgEAAgDAEg");
	this.shape_58.setTransform(132.9,-152.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAUAdIAAgvIgRAvIgFAAIgRgwIAAAwIgHAAIAAg5IALAAIAOAoIABAJIADgKIAOgnIAKAAIAAA5g");
	this.shape_59.setTransform(127.3,-153.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_60.setTransform(120.8,-150.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgLAVIAAgpIAXAAIAAAGIgQAAIAAAjg");
	this.shape_61.setTransform(118.4,-152.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgDAHQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_62.setTransform(113.4,-150.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgMAaQgEgEgBgHIAHgBQABAFACACQADACADAAQADAAACgBIAEgEIADgHIABgIIAAgCQgCAEgEACQgEACgDAAQgHAAgFgFQgFgEAAgJQAAgJAFgFQAFgFAIAAQAFAAAEADQAFADACAFQADAGAAAKQAAAKgDAHQgCAGgFAEQgEADgGAAQgGAAgFgDgAgHgTQgEAEAAAGQAAAGAEADQADADAEAAQAFAAADgDQADgDAAgGQAAgGgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_63.setTransform(110.1,-153.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_64.setTransform(105.3,-153.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_65.setTransform(101,-153.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgMAYQgFgEgBgHIAHgBQABAGADACQADADAEAAQAEAAAEgEQADgEABgGQgBgGgDgDQgEgDgEAAQgDAAgDACQgDABgCACIgGgBIAFgdIAcAAIAAAHIgWAAIgDAPQAFgDAFAAQAIAAAEAFQAGAEAAAIQAAAIgFAGQgFAHgJAAQgIAAgEgFg");
	this.shape_66.setTransform(96.8,-153);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_67.setTransform(92,-153.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_68.setTransform(87.5,-153.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgBASIAKgSIgKgRIAFAAIANARIgNASgAgQASIALgSIgLgRIAGAAIALARIgLASg");
	this.shape_69.setTransform(81.2,-152.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_70.setTransform(77.9,-150.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgRAdIAAg5IAkAAIAAAHIgdAAIAAAyg");
	this.shape_71.setTransform(74.9,-153.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_72.setTransform(71.4,-150.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_73.setTransform(67.3,-153.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_74.setTransform(63.4,-150.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgMAZQgGgDgDgHQgDgHAAgIQAAgIADgHQAEgHAGgEQAGgDAHAAQAIAAAGAFQAGAEACAIIgHABQgCgFgEgEQgEgCgFAAQgGgBgEAEQgFADgCAFQgBAFAAAGQAAAHACAFQACAFAEAEQAFACAEAAQAGAAAFgDQAEgFACgHIAHADQgCAIgGAFQgGAFgJABQgJAAgFgFg");
	this.shape_75.setTransform(59.3,-153.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAQAdIAAgsIgeAsIgHAAIAAg5IAGAAIAAAtIAegtIAIAAIAAA5g");
	this.shape_76.setTransform(51.4,-153.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AATAkIAAgOIglAAIAAAOIgHAAIAAgVIAFAAQAHgKAAgfIAAgIIAhAAIAAAxIAGAAIAAAVgAgGgYIgBATQgCAMgEAIIAaAAIAAgrIgTAAg");
	this.shape_77.setTransform(45.6,-152.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_78.setTransform(40.2,-153.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AASAdIgHgSIgXAAIgGASIgIAAIAWg5IAHAAIAYA5gAgDgLIgGAQIASAAIgGgPIgDgLIgDAKg");
	this.shape_79.setTransform(34.6,-153.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AALAdIgKgQQgDgGgDgDQgDgCgEAAIAAAbIgHAAIAAg5IAHAAIAAAaQAGAAABgCQADgCACgIIAEgIIAFgEQACgCADAAIAGABIAAAGIgCAAIgCAAQgDAAgCACIgFAHQgCAIgCABIgEADQAEABAGAJIAMATg");
	this.shape_80.setTransform(29.9,-153.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AALASIgLgSIALgRIAGAAIgKARIAKASgAgDASIgNgSIANgRIAFAAIgJARIAJASg");
	this.shape_81.setTransform(25,-152.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_82.setTransform(17.5,-153.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_83.setTransform(11.3,-153.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_84.setTransform(5.1,-153.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dfgdfggg, new cjs.Rectangle(0,-159.4,286,20.8), null);


(lib.dfgdfg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAOAAQARAAAJAMQAJAMAAATIAAAGIgzAAQACAVASAAQALAAAJgJIAIAMQgNAMgQAAQgPAAgLgLgAgRgFIAjAAQgBgWgRAAQgOAAgDAWg");
	this.shape.setTransform(181.3,83.8,0.76,0.76);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAOAqIgTgjIgLANIAAAWIgSAAIAAhTIASAAIAAAoIAdgoIAUAAIgbAjIAdAwg");
	this.shape_1.setTransform(175.7,83.8,0.76,0.76);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgkA2IAAhqIARAAIAAAOQAKgPAOAAQANAAAJAKQAKAMAAAUIAAACQAAATgKALQgJALgNAAQgOAAgKgOIAAAkgAgNgeQgGAHAAAMIAAACQAAALAGAHQAGAHAHAAQAIAAAGgHQAFgHAAgLIAAgCQAAgMgGgHQgFgIgIAAQgHAAgGAIg");
	this.shape_2.setTransform(168.9,84.6,0.76,0.76);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgSIAAgBQAAgSALgMQALgMAPAAQARAAALAMQAKAMAAASIAAABQAAASgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAHAAAMIAAABQAAALAGAIQAGAIAIAAQAKAAAFgIQAGgHAAgMIAAgBQAAgLgGgIQgGgIgJAAQgIAAgGAIg");
	this.shape_3.setTransform(161.9,83.8,0.76,0.76);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaAtQgLgMABgWIAAgCQgBgXAFgMQAGgRASgEIAmgJIAEAOIgmAJQgSAFgBASQAHgOATAAQAOAAAKALQAKALAAARIAAAAQABATgLALQgKAMgRAAQgQAAgKgMgAgOgDQgFAHAAALIAAABQAAALAFAHQAHAIAHAAQAJAAAGgIQAEgHAAgLIAAgBQAAgLgFgHQgFgHgJAAQgIAAgGAHg");
	this.shape_4.setTransform(155.1,82.7,0.76,0.76);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghAyIAGgOQAEADAGAAQAGAAAEgJIgdhTIASAAIATA9IASg9IATAAIgdBVQgFALgEAGQgGAEgKAAQgJAAgIgDg");
	this.shape_5.setTransform(148.5,84.7,0.76,0.76);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbAtQgJgMgBgWIAAgCQABgXAEgMQAGgRARgEIAogJIACAOIglAJQgSAFgBASQAIgOASAAQAOAAAKALQALALAAARIAAAAQAAATgLALQgKAMgRAAQgQAAgLgMgAgNgDQgFAHgBALIAAABQABALAFAHQAGAIAHAAQAJAAAFgIQAFgHABgLIAAgBQAAgLgGgHQgFgHgJAAQgHAAgGAHg");
	this.shape_6.setTransform(139,82.7,0.76,0.76);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgSIAAgBQAAgSALgMQALgMAPAAQARAAALAMQAKAMAAASIAAABQAAASgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAHAAAMIAAABQAAALAGAIQAGAIAIAAQAJAAAGgIQAGgIAAgLIAAgBQAAgLgGgIQgGgIgJAAQgIAAgGAIg");
	this.shape_7.setTransform(132.1,83.8,0.76,0.76);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJAMAAATIAAAGIgzAAQACAVASAAQALAAAJgJIAIAMQgMAMgRAAQgPAAgLgLgAgLgVQgEAGgBAKIAiAAQgBgKgEgGQgFgGgHAAQgHAAgFAGg");
	this.shape_8.setTransform(122.5,83.8,0.76,0.76);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AARAqIAAg2IghA2IgRAAIAAhTIASAAIAAA2IAgg2IARAAIAABTg");
	this.shape_9.setTransform(116.1,83.8,0.76,0.76);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAQAqIAAgiIgfAAIAAAiIgRAAIAAhTIARAAIAAAiIAfAAIAAgiIARAAIAABTg");
	this.shape_10.setTransform(109.4,83.8,0.76,0.76);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJAMAAATIAAAGIgzAAQACAVASAAQALAAAJgJIAIAMQgMAMgRAAQgPAAgLgLgAgLgVQgEAGgBAKIAiAAQgCgWgPAAQgHAAgFAGg");
	this.shape_11.setTransform(103,83.8,0.76,0.76);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AglApIABgPIAFAAQAIAAACgKQAEgOAAgrIA3AAIAABSIgRAAIAAhCIgWAAQAAAogGAPQgGAMgOAAg");
	this.shape_12.setTransform(96.2,83.8,0.76,0.76);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgfAqIAAhTIAhAAQAMAAAIAGQAGAGAAAKQAAANgMAGQAQAEABAOQAAALgJAGQgIAGgNABgAgOAbIAOAAQAPABAAgLQgBgLgOAAIgOAAgAgOgGIANAAQANAAAAgLQAAgKgMABIgOAAg");
	this.shape_13.setTransform(90.4,83.8,0.76,0.76);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgYAkQgIgHAAgLIAAgBQAAgNAIgGQAIgHAOAAQAKAAAIADIAAgDQAAgRgRAAQgLAAgKAFIgEgPQAOgGAMAAQAhAAAAAhIAAAyIgRAAIAAgKQgIAMgOAAQgLAAgHgHgAgPAQIAAABQAAANAOAAQAHAAAFgFQAFgEAAgHIAAgJQgFgDgLAAQgPAAAAAOg");
	this.shape_14.setTransform(83.9,83.8,0.76,0.76);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgIAqIAAhDIgXAAIAAgQIA+AAIAAAQIgWAAIAABDg");
	this.shape_15.setTransform(78.5,83.8,0.76,0.76);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgVAfQgLgMABgSIAAgBQgBgSALgMQAMgMAOAAQAQAAALALIgJANQgIgIgJAAQgIAAgFAHQgHAHABAMIAAABQgBAMAHAHQAGAHAHAAQAKAAAIgIIAIAMQgMAMgPAAQgPAAgLgMg");
	this.shape_16.setTransform(73.1,83.8,0.76,0.76);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAZAzIAAgTIgxAAIgCATIgPAAIAAgiIAIAAQAJgSAAglIAAgMIA4AAIAABDIAKAAIgCAigAgPARIAdAAIAAgzIgWAAQAAAigHARg");
	this.shape_17.setTransform(66.7,84.5,0.76,0.76);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAOAAQARAAAJAMQAJAMAAATIAAAGIg0AAQAEAVARAAQAKAAAKgJIAIAMQgNAMgQAAQgPAAgLgLgAgLgVQgEAGgCAKIAiAAQAAgKgEgGQgFgGgIAAQgGAAgFAGg");
	this.shape_18.setTransform(60.3,83.8,0.76,0.76);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgkA2IAAhqIARAAIAAAOQAKgPANAAQAOAAAJAKQAKAMAAAUIAAACQAAATgKALQgJALgOAAQgNAAgKgOIAAAkgAgNgeQgGAHAAAMIAAACQAAALAGAHQAGAHAHAAQAIAAAGgHQAFgHAAgLIAAgCQAAgMgGgHQgFgIgIAAQgHAAgGAIg");
	this.shape_19.setTransform(53.8,84.6,0.76,0.76);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAPAqIAAhDIgdAAIAABDIgSAAIAAhTIBBAAIAABTg");
	this.shape_20.setTransform(46.9,83.8,0.76,0.76);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAOAAQARAAAJAMQAJANAAARIAAAHIgzAAQACAVASAAQALAAAJgJIAIALQgLANgSAAQgPAAgLgLgAgRgFIAjAAQgCgWgQAAQgOAAgDAWg");
	this.shape_21.setTransform(135.2,71,0.76,0.76);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag0ApIAAhSIASAAIAABDIAaAAIAAhDIARAAIAABDIAaAAIAAhDIARAAIAABSg");
	this.shape_22.setTransform(127.3,71,0.76,0.76);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgZAkQgHgHAAgLIAAgBQAAgNAIgGQAIgHAOAAQAIAAAKADIAAgDQAAgRgSAAQgJAAgLAFIgEgPQAMgGAOAAQAhAAAAAhIAAAyIgRAAIAAgKQgJAMgOAAQgKAAgIgHgAgPAQIAAABQAAAMAOAAQAHAAAFgEQAFgFAAgHIAAgIQgHgDgJAAQgPAAAAAOg");
	this.shape_23.setTransform(119.3,71.1,0.76,0.76);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AggApIAAhSIAiAAQAbABgBAVQABANgMAGQAQAEAAAOQAAAXgfAAgAgOAcIAOAAQAPAAAAgLQAAgMgPAAIgOAAgAgOgGIAOAAQALAAAAgKQAAgLgLABIgOAAg");
	this.shape_24.setTransform(113.5,71,0.76,0.76);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgIApIAAhCIgWAAIAAgQIA+AAIAAAQIgYAAIAABCg");
	this.shape_25.setTransform(104.6,71,0.76,0.76);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AghAyIAGgPQAEADAFAAQAIAAADgJIgehSIATAAIASA9IATg9IASAAIgdBUQgHAXgRgBQgIAAgJgDg");
	this.shape_26.setTransform(98.8,72,0.76,0.76);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAPApIAAghIgdAAIAAAhIgSAAIAAhSIASAAIAAAiIAdAAIAAgiIASAAIAABSg");
	this.shape_27.setTransform(92.4,71,0.76,0.76);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgkA2IAAhqIASAAIAAAOQAJgPAOAAQANAAAJAKQAKAMAAAUIAAACQAAATgKAMQgJAKgNAAQgNAAgKgOIAAAkgAgNgeQgGAHAAAMIAAACQAAAKAGAIQAGAIAHAAQAJAAAFgIQAGgHAAgLIAAgCQAAgMgGgHQgGgIgIABQgHAAgGAHg");
	this.shape_28.setTransform(85.8,71.9,0.76,0.76);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAOAAQARAAAJAMQAJANAAARIAAAHIgzAAQACAVASAAQALAAAJgJIAIALQgLANgSAAQgPAAgLgLgAgRgFIAjAAQgCgWgQAAQgOAAgDAWg");
	this.shape_29.setTransform(79.1,71,0.76,0.76);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AggApIAAhSIAiAAQAMAAAHAGQAHAGABAKQAAANgMAGQAPAEAAAOQAAALgHAHQgJAFgOAAgAgOAcIAOAAQAOAAAAgLQAAgMgOAAIgOAAgAgOgGIAOAAQAMAAgBgKQAAgLgLABIgOAAg");
	this.shape_30.setTransform(73,71,0.76,0.76);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJANAAARIAAAHIgzAAQABAKAGAGQAGAFAHAAQALAAAJgJIAIALQgLANgSAAQgPAAgLgLgAgQgFIAiAAQgCgWgPAAQgQAAgBAWg");
	this.shape_31.setTransform(66.6,71,0.76,0.76);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgkA2IAAhqIASAAIAAAOQAJgPAOAAQANAAAJAKQAKAMAAAUIAAACQAAATgKAMQgJAKgNAAQgNAAgKgOIAAAkgAgNgeQgGAHAAAMIAAACQAAALAGAHQAGAIAHAAQAIAAAGgIQAGgHAAgLIAAgCQAAgMgGgHQgGgIgIABQgHAAgGAHg");
	this.shape_32.setTransform(60.1,71.9,0.76,0.76);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJANAAARIAAAHIgzAAQADAVAQAAQAMAAAIgJIAJALQgLANgSAAQgPAAgLgLgAgQgFIAiAAQgBgWgQAAQgPAAgCAWg");
	this.shape_33.setTransform(53.3,71,0.76,0.76);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAPApIAAhCIgdAAIAABCIgSAAIAAhSIBBAAIAABSg");
	this.shape_34.setTransform(46.9,71,0.76,0.76);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgUAqIAAhSIARAAIAAARQAHgSASAAIAAATIgBAAQgLAAgHAHQgGAIAAANIAAAkg");
	this.shape_35.setTransform(136.9,58.2,0.76,0.76);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgXAfQgLgMAAgSIAAgBQAAgSAKgMQAKgMAOAAQARAAAJAMQAJAMAAATIAAAFIg0AAQADAWASAAQAKAAAKgIIAIAKQgNANgQAAQgPAAgLgMgAgRgFIAiAAQAAgKgEgGQgFgHgIABQgOAAgDAWg");
	this.shape_36.setTransform(131.3,58.3,0.76,0.76);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgHAqIgdhTIATAAIARA8IATg8IASAAIgcBTg");
	this.shape_37.setTransform(125.4,58.3,0.76,0.76);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgSIAAgBQAAgSALgMQALgMAPAAQARAAALAMQALAMgBASIAAABQABASgLAMQgLAMgRAAQgPAAgLgMgAgOgTQgGAIABALIAAABQAAALAFAIQAGAHAIABQAKgBAFgHQAGgIAAgLIAAgBQAAgLgGgIQgGgHgJAAQgIAAgGAHg");
	this.shape_38.setTransform(119.1,58.3,0.76,0.76);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgbAfQgKgMgBgSIAAgBQABgSAKgMQAMgMAPAAQARAAAKAMQAMAMAAASIAAABQAAASgMAMQgKAMgRAAQgQAAgLgMgAgOgTQgGAIAAALIAAABQAAALAGAIQAGAHAIABQAJgBAGgHQAGgIAAgLIAAgBQgBgLgFgIQgGgHgJAAQgIAAgGAHg");
	this.shape_39.setTransform(112.3,58.3,0.76,0.76);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAWA3IAAgvIgqAAIAAAvIgSAAIAAhtIASAAIAAAuIAqAAIAAguIASAAIAABtg");
	this.shape_40.setTransform(105,57.3,0.76,0.76);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAcAqIAAhSIARAAIAABSgAgsAqIAAhSIASAAIAAAdIAOAAQAeAAAAAZQAAAbgeABgAgaAbIANAAQANAAABgMQgBgNgNAAIgNAAg");
	this.shape_41.setTransform(93.8,58.3,0.76,0.76);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgVAfQgKgMAAgSIAAgBQAAgSAKgMQALgMAPAAQAQAAALAKIgIAOQgJgIgJAAQgIAAgGAHQgGAHAAAMIAAABQAAAMAGAHQAGAHAJAAQAIAAAJgIIAIAMQgLAMgQAAQgPAAgLgMg");
	this.shape_42.setTransform(86.8,58.3,0.76,0.76);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgbAfQgLgMAAgSIAAgBQAAgSALgMQAMgMAPAAQARAAAKAMQAMAMAAASIAAABQAAASgMAMQgKAMgRAAQgPAAgMgMgAgOgTQgFAIgBALIAAABQAAALAHAIQAFAHAIABQAJgBAGgHQAGgIAAgLIAAgBQAAgLgGgIQgGgHgJAAQgIAAgGAHg");
	this.shape_43.setTransform(80.5,58.3,0.76,0.76);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgVAfQgLgMAAgSIAAgBQABgSAKgMQALgMAPAAQARAAAKAKIgJAOQgIgIgJAAQgIAAgFAHQgHAHAAAMIAAABQAAAMAHAHQAFAHAJAAQAIAAAKgIIAHAMQgLAMgQAAQgPAAgLgMg");
	this.shape_44.setTransform(74.3,58.3,0.76,0.76);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgXAfQgLgMAAgSIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJAMAAATIAAAFIgzAAQACAWASAAQAKAAAKgIIAIAKQgMANgRAAQgPAAgLgMgAgLgWQgEAHgBAKIAiAAQgBgKgEgGQgFgHgHABQgHAAgFAFg");
	this.shape_45.setTransform(68.2,58.3,0.76,0.76);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AglApIABgPIAFABQAHAAADgLQAEgOAAgrIA3AAIAABSIgSAAIAAhCIgUAAQAAApgHAOQgGAMgOAAg");
	this.shape_46.setTransform(61.4,58.3,0.76,0.76);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAbAqIAAhSIASAAIAABSgAgsAqIAAhSIASAAIAAAdIAOAAQAeAAAAAZQAAAbgeABgAgaAbIANAAQANAAAAgMQAAgNgNAAIgNAAg");
	this.shape_47.setTransform(54.4,58.3,0.76,0.76);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAPAqIAAhDIgdAAIAABDIgSAAIAAhSIBBAAIAABSg");
	this.shape_48.setTransform(46.9,58.3,0.76,0.76);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJANQAJAMAAARIAAAHIgzAAQABAKAGAGQAGAFAHAAQALAAAJgJIAIAMQgLAMgSAAQgPAAgLgLgAgLgVQgEAGgBAKIAiAAQgCgWgPAAQgHAAgFAGg");
	this.shape_49.setTransform(121.1,45.5,0.76,0.76);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAbAqIAAhTIASAAIAABTgAgsAqIAAhTIASAAIAAAeIAOAAQAeAAAAAZQAAAbgeABgAgaAbIANAAQANAAAAgMQAAgOgNAAIgNAAg");
	this.shape_50.setTransform(113.7,45.5,0.76,0.76);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAPAqIAAgiIgdAAIAAAiIgSAAIAAhTIASAAIAAAiIAdAAIAAgiIASAAIAABTg");
	this.shape_51.setTransform(106.2,45.5,0.76,0.76);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAYAzIAAgSIgwAAIgCASIgPAAIAAgiIAIAAQAIgSAAglIAAgMIA4AAIAABDIALAAIgCAigAgPARIAdAAIAAg0IgWAAQAAAkgHAQg");
	this.shape_52.setTransform(99.5,46.2,0.76,0.76);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgSIAAgBQAAgSALgMQALgMAPAAQARAAALAMQAKAMAAASIAAABQAAASgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAIAAALIAAABQAAALAGAIQAGAHAIAAQAJAAAGgHQAGgIAAgLIAAgBQAAgLgGgIQgGgHgJgBQgJABgFAHg");
	this.shape_53.setTransform(92.9,45.5,0.76,0.76);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AggAqIAAhTIAiAAQANAAAGAGQAIAGAAAKQAAAMgMAGQAPAEAAAPQAAAMgIAFQgHAHgOAAgAgOAbIAPAAQANABAAgLQAAgMgOABIgOAAgAgOgGIAOAAQAMAAgBgLQAAgKgLAAIgOAAg");
	this.shape_54.setTransform(86.6,45.5,0.76,0.76);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgbAfQgKgMgBgSIAAgBQABgSAKgMQAMgMAPAAQAQAAAMAMQAKAMABASIAAABQgBASgKAMQgMAMgQAAQgPAAgMgMgAgOgTQgFAIgBALIAAABQAAALAHAIQAFAHAIAAQAJAAAGgHQAFgHABgMIAAgBQgBgLgFgIQgGgHgJgBQgIABgGAHg");
	this.shape_55.setTransform(79.9,45.5,0.76,0.76);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgkA2IAAhqIARAAIAAAOQALgPANAAQANAAAJAKQAKAMAAAUIAAACQAAATgKAMQgJAKgNAAQgNAAgLgOIAAAkgAgNgeQgGAIAAALIAAACQAAALAGAHQAGAIAHgBQAIABAGgIQAGgHAAgLIAAgCQAAgLgGgIQgGgHgIgBQgHABgGAHg");
	this.shape_56.setTransform(73.2,46.4,0.76,0.76);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAPAqIAAhEIgdAAIAABEIgSAAIAAhTIBBAAIAABTg");
	this.shape_57.setTransform(66.3,45.5,0.76,0.76);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgVAfQgKgMAAgSIAAgBQAAgSAKgMQALgMAPAAQAPAAAMAKIgIAOQgJgIgJAAQgIAAgGAHQgGAIAAALIAAABQAAAMAGAHQAGAHAJAAQAJAAAIgIIAIANQgLALgQAAQgPAAgLgMg");
	this.shape_58.setTransform(60.2,45.5,0.76,0.76);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAOAAQARAAAJANQAJAMAAARIAAAHIg0AAQAEAVARAAQALAAAJgJIAIAMQgMAMgRAAQgPAAgLgLgAgRgFIAjAAQgBgWgRAAQgOAAgDAWg");
	this.shape_59.setTransform(54.1,45.5,0.76,0.76);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgmA3IAAhtIBFAAIAAARIgzAAIAAAbIAXAAQAQAAAKAIQAKAIAAAPQAAAQgLAJQgKAJgRAAgAgUAmIAWAAQATAAAAgQQAAgRgTAAIgWAAg");
	this.shape_60.setTransform(47.5,44.5,0.76,0.76);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AilFpIDArRICLAAIi/LRg");
	this.shape_61.setTransform(208.7,29.2,0.81,0.81);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#CB0927").s().p("AjFFdIC7q5IDQAAIi7K5g");
	this.shape_62.setTransform(203.2,80.3,0.81,0.81);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#D1D1D1").s().p("AkkIuIBwmjIDRAAIC7q5IBNAAIkqRcg");
	this.shape_63.setTransform(201.8,97.2,0.81,0.81);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#DC052B").s().p("AxAHEIDyuHIePAAIjyOHg");
	this.shape_64.setTransform(118.9,63.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dfgdfg, new cjs.Rectangle(10,0,217.8,142.5), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.542,0.679);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,300,250), null);


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


(lib.ghggg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgCA0IgVg4IgLA2IgRAAIAUhlIAKAAIAVBEIAWhEIAJAAIAVBlIgRAAIgLg2IgVA4g");
	this.shape_23.setTransform(408.7,-311.7,1.038,1.038);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAfAzIAAhlIASAAIAABlgAgxAzIAAhlIASAAIAAAmIANgBQASAAAJAJQAJAHAAAQQAAAOgJAKQgJAIgTAAgAgfACIAAAiIAJAAQANAAAGgFQADgFAAgIQAAgIgEgFQgGgEgLAAg");
	this.shape_24.setTransform(396.6,-311.8,1.038,1.038);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAVAzIAAguIgoAAIAAAuIgTAAIAAhlIATAAIAAAoIAoAAIAAgoIASAAIAABlg");
	this.shape_25.setTransform(385.3,-311.8,1.038,1.038);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAUAzIAAguIgnAAIAAAuIgSAAIAAhlIASAAIAAAoIAnAAIAAgoIASAAIAABlg");
	this.shape_26.setTransform(375.1,-311.8,1.038,1.038);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AghAmQgLgOAAgYQAAgVAMgQQAMgPAUAAQAVAAAMANQAMAPAAAYQAAAYgMAOQgNAPgVAAQgVAAgLgPgAgSgaQgHAJAAARQAAASAGAKQAGAJAMAAQAMAAAIgKQAHgJAAgSQAAgkgaAAQgMAAgGAKg");
	this.shape_27.setTransform(364.8,-311.8,1.038,1.038);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgnA1IAAhnIASAAIAABDIA1hFIAIAAIAABnIgTAAIAAhEIg0BGg");
	this.shape_28.setTransform(354.4,-311.8,1.038,1.038);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAaBCIAAgeIhDAAIAAhlIASAAIAABWIAjAAIAAhWIASAAIAABWIAMAAIAAAtg");
	this.shape_29.setTransform(344.5,-310.3,1.038,1.038);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAZA0IgIgVIgiAAIgHAVIgUAAIAphnIAHAAIApBngAgLARIAXAAIgMgkg");
	this.shape_30.setTransform(334.3,-311.9,1.038,1.038);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgiA0IAAhmIAdgBQAQAAAIAHQAKAHgBAMQAAANgNAHQATAGAAAUQAAAOgKAIQgKAJgRAAgAgQAlIAKAAQAJAAAHgEQAGgEgBgKQAAgJgEgEQgGgEgLAAIgKAAgAgQgjIAAAYIAKAAQAQAAAAgNQAAgMgPAAg");
	this.shape_31.setTransform(325.4,-311.9,1.038,1.038);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AghAmQgLgOAAgYQAAgVAMgQQAMgPAUAAQAWAAALANQAMAOAAAZQAAAYgNAOQgMAPgVAAQgVAAgLgPgAgTgaQgGAKAAAQQAAASAGAKQAGAJAMAAQAMAAAIgKQAHgJAAgSQAAgkgaAAQgMAAgHAKg");
	this.shape_32.setTransform(315.5,-311.8,1.038,1.038);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAVAzIAAguIgoAAIAAAuIgSAAIAAhlIASAAIAAAoIAoAAIAAgoIARAAIAABlg");
	this.shape_33.setTransform(305.2,-311.8,1.038,1.038);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAUAzIAAguIgoAAIAAAuIgSAAIAAhlIASAAIAAAoIAoAAIAAgoIATAAIAABlg");
	this.shape_34.setTransform(295,-311.8,1.038,1.038);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgnA1IAAhnIASAAIAABDIA1hFIAIAAIAABnIgTAAIAAhEIg0BGg");
	this.shape_35.setTransform(284.7,-311.8,1.038,1.038);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAVAzIAAguIgoAAIAAAuIgSAAIAAhlIASAAIAAAoIAoAAIAAgoIARAAIAABlg");
	this.shape_36.setTransform(269.9,-311.8,1.038,1.038);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AggAzIAAhlIBBAAIAAAQIgvAAIAAAYIAhAAIAAAPIghAAIAAAeIAuAAIAAAQg");
	this.shape_37.setTransform(260.8,-311.8,1.038,1.038);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAiBCIAAgeIhDAAIAAAeIgQAAIAAgtIAHAAQAIgJAJgUQAJgUAIglIAuAAIAABWIALAAIAAAtgAgHgJQgIAUgIAKIAsAAIAAhHIgSAAQgDAWgHATg");
	this.shape_38.setTransform(250.9,-310.3,1.038,1.038);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AApAvQgEgFgCgKQgEgcgWAAIAAAvIgQAAIAAgvQgXAAgEAcQgCALgEAEQgFAFgIAAIgGgBIAAgQIACAAQAEAAABgBIADgIQABgKAGgHQAGgIAKgDQgTgDgEgVIgCgHQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAIgDAAIAAgQIAGgBQAJAAAEAEQAEAGACAKQAEAVAWABIAAgpIAQAAIAAApQAKAAAHgGQAHgGACgKQABgKAEgFQAFgFAIAAIAGABIAAAQIgCAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAIgCAHQgCAIgGAHQgEAGgKADQASAFAFAXQAAAGACACQACABADAAIACAAIAAAQIgFABQgJAAgFgFg");
	this.shape_39.setTransform(238.5,-311.8,1.038,1.038);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AghAmQgLgOAAgYQAAgVAMgQQAMgPAUAAQAVAAAMANQAMAPAAAYQAAAYgMAOQgNAPgVAAQgVAAgLgPgAgSgaQgHAJAAARQAAASAGAKQAGAJAMAAQAMAAAIgKQAHgJAAgSQAAgkgaAAQgMAAgGAKg");
	this.shape_40.setTransform(226.4,-311.8,1.038,1.038);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AghA0IAAhmIAVgBQAXAAAMAIQALAHAAAQQAAAigpAAIgHAAIAAAmgAgOgBIAHAAQALAAAGgEQAFgEAAgKQABgPgZAAIgFAAg");
	this.shape_41.setTransform(217,-311.9,1.038,1.038);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AhYDOIBtmbIBEAAIhtGbg");
	this.shape_42.setTransform(433.7,-342.2,1.038,1.038);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CB0927").s().p("AhhCsIBclXIBnAAIhcFXg");
	this.shape_43.setTransform(429.4,-307.1,1.038,1.038);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D1D1D1").s().p("AiPETIA3jOIBmAAIBclXIAnAAIiTIlg");
	this.shape_44.setTransform(428.6,-296.4,1.038,1.038);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#DC052B").s().p("AzKDiIBjnDMAkyAABIh5HCg");
	this.shape_45.setTransform(315.2,-312.7,1.038,1.038);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ghggg_1, new cjs.Rectangle(187.8,-363.6,255.8,95.8), null);


(lib.dfgdfggg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgMAZQgFgFgBgHIAHgBQABAGADADQADACAEAAQAEAAAEgDQADgDAAgGQAAgEgDgDQgDgEgFAAIgEABIABgFIABAAQADAAAEgCQAEgDAAgFQAAgDgDgDQgDgCgDAAQgEAAgDACQgCADgBAFIgHgBQABgHAFgEQAEgEAHAAQAEAAAEACQAEACACADQACAEAAAEQAAADgCADQgCADgEACQAFABADADQADAEAAAFQAAAIgGAFQgFAFgIAAQgHAAgFgEg");
	this.shape_85.setTransform(408.8,-306.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgMAYQgGgEAAgHIAHgBQABAGADACQADADAEAAQAEAAAEgEQAEgEAAgGQAAgGgEgDQgEgDgEAAQgEAAgCACQgDABgCACIgGgBIAGgdIAbAAIAAAHIgWAAIgDAPQAFgDAFAAQAHAAAGAFQAFAEAAAIQAAAIgEAGQgGAHgJAAQgIAAgEgFg");
	this.shape_86.setTransform(404.4,-306);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_87.setTransform(399.7,-306.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgMAXQgGgHABgQQAAgJACgGQABgHAFgDQAEgDAFAAQAFAAADACQADABADAEIAEAIIABANQAAAKgCAGQgDAGgEAEQgDADgHAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQADgFAAgOQAAgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_88.setTransform(395.4,-306.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgJAcQgBgHADgJQADgKAEgIQAEgIAFgHIgaAAIAAgGIAkAAIAAAFQgGAGgFAKQgGAIgCALQgCAHAAAIg");
	this.shape_89.setTransform(391,-306.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgMAXQgFgHAAgQQAAgJABgGQACgHAFgDQADgDAGAAQAFAAADACQAEABACAEIAEAIIABANQgBAKgBAGQgDAGgEAEQgDADgHAAQgHAAgFgGgAgHgSQgEAFABANQgBAOAEAFQADAEAEAAQAFAAADgEQAEgFgBgOQABgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_90.setTransform(386.5,-306.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgNAXQgFgHAAgPQAAgPAGgIQAFgGAJAAQAHAAAEAEQAEADABAHIgHABQgBgFgCgBQgDgDgEAAIgFABQgDADgCAEQgCAFAAAJQADgEADgCIAHgCQAHAAAFAFQAFAEAAAJQAAAFgDAFQgCAEgEADQgEACgFAAQgIAAgGgGgAgGABQgEADAAAGIABAHQACADADACQADABACAAQAEAAADgDQAEgEAAgGQAAgGgEgDQgDgDgEAAQgFAAgCADg");
	this.shape_91.setTransform(382.1,-306.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgMAaQgEgEgBgHIAHgBQABAFACACQADACADAAQADAAACgBIAEgEIADgHIABgIIAAgCQgCAEgEACQgEACgDAAQgHAAgFgFQgFgEAAgJQAAgJAFgFQAFgFAIAAQAFAAAEADQAFADACAFQADAGAAAKQAAAKgDAHQgCAGgFAEQgEADgGAAQgGAAgFgDgAgHgTQgEAEAAAGQAAAGAEADQADADAEAAQAFAAADgDQADgDAAgGQAAgGgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_92.setTransform(377.6,-306.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgKAcQABgHACgJQADgKAEgIQAEgIAFgHIgbAAIAAgGIAkAAIAAAFQgFAGgGAKQgFAIgCALQgCAHAAAIg");
	this.shape_93.setTransform(373.2,-306.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgJAcQAAgHACgJQADgKAEgIQAEgIAGgHIgbAAIAAgGIAkAAIAAAFQgGAGgFAKQgGAIgCALQgCAHgBAIg");
	this.shape_94.setTransform(368.8,-306.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_95.setTransform(364.1,-306.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgMAXQgFgHgBgQQAAgJACgGQADgHADgDQAEgDAGAAQAEAAAEACQADABADAEIADAIIABANQAAAKgCAGQgBAGgFAEQgEADgGAAQgHAAgFgGgAgHgSQgDAFgBANQABAOADAFQADAEAEAAQAFAAADgEQAEgFAAgOQAAgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_96.setTransform(359.8,-306.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_97.setTransform(355.1,-306.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_98.setTransform(348.1,-306.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAIABQAEABAEACQADACABADQACAEAAAEQAAAHgFAEQgFAFgMAAIgNAAIAAAYgAgNAAIANAAQAIAAADgDQADgDAAgFQAAgDgBgDQgDgCgCgBIgIgBIgNAAg");
	this.shape_99.setTransform(342.6,-306.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgSAdIAAg5IAlAAIAAAHIgdAAIAAAyg");
	this.shape_100.setTransform(338,-306.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_101.setTransform(332.4,-306.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgNAYQgFgEAAgHIAHgBQABAGADACQADADAEAAQAFAAADgEQAEgEgBgGQABgGgEgDQgDgDgFAAQgDAAgDACQgDABgBACIgHgBIAGgdIAbAAIAAAHIgWAAIgDAPQAGgDAEAAQAHAAAFAFQAGAEAAAIQAAAIgEAGQgGAHgJAAQgHAAgGgFg");
	this.shape_102.setTransform(324.9,-306);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_103.setTransform(320.1,-306.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgMAXQgGgHAAgQQABgJACgGQACgHADgDQAFgDAFAAQAEAAAEACQADABADAEIADAIIACANQgBAKgCAGQgCAGgDAEQgFADgGAAQgIAAgEgGgAgHgSQgDAFgBANQABAOADAFQADAEAEAAQAFAAADgEQADgFABgOQgBgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_104.setTransform(315.9,-306.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgSAdIAAgFIAFgIIAJgIQAJgIADgEQADgEABgEQAAgEgEgDQgDgDgEAAQgFAAgCADQgEADAAAGIgGgBQAAgIAFgEQAEgFAIAAQAIAAAFAFQAFAEAAAHIgCAHQgBADgDADQgDAEgIAGIgHAHIgEAEIAcAAIAAAHg");
	this.shape_105.setTransform(311.4,-306.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_106.setTransform(306.7,-306.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgNAYQgEgEgBgHIAHgBQABAGADACQADADAEAAQAFAAADgEQADgEAAgGQAAgGgDgDQgDgDgFAAQgDAAgDACQgDABgCACIgGgBIAFgdIAcAAIAAAHIgWAAIgDAPQAGgDAEAAQAIAAAEAFQAGAEAAAIQAAAIgFAGQgFAHgJAAQgHAAgGgFg");
	this.shape_107.setTransform(302.6,-306);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_108.setTransform(298,-306.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgMAXQgFgHgBgQQAAgJACgGQADgHADgDQAEgDAGAAQAEAAAEACQADABADAEIADAIIABANQAAAKgCAGQgBAGgFAEQgEADgGAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQAEgFAAgOQAAgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_109.setTransform(293.7,-306.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgKAcQABgHACgJQACgKAFgIQAEgIAFgHIgbAAIAAgGIAkAAIAAAFQgFAGgGAKQgFAIgCALQgCAHgBAIg");
	this.shape_110.setTransform(289.3,-306.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgJAcQgBgHADgJQACgKAFgIQAEgIAGgHIgbAAIAAgGIAjAAIAAAFQgFAGgFAKQgGAIgCALQgCAHAAAIg");
	this.shape_111.setTransform(284.8,-306.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_112.setTransform(277.5,-306.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_113.setTransform(271.7,-306.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AAQAdIAAgsIgeAsIgIAAIAAg5IAHAAIAAAtIAegtIAHAAIAAA5g");
	this.shape_114.setTransform(265.9,-306.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_115.setTransform(259.8,-303.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgNAYQgFgFAAgHQAAgGADgEQADgCAFgCQgEgBgDgDQgBgDgBgEQABgHAEgEQAEgEAHAAQAHAAAFAEQAFAEAAAHQAAAEgDADQgBADgFABQAGACACADQADAEAAAFQAAAHgFAFQgGAFgIAAQgHAAgGgFgAgHAEQgDADAAAFIABAGIAEAEIAFABQAFAAAEgDQADgDAAgFQAAgFgDgDQgEgEgFAAQgEAAgDAEgAgGgUQgCADAAADQAAAEACADQADADADAAQAEAAADgDQACgDABgDQgBgEgCgDQgDgCgEAAQgDAAgDACg");
	this.shape_116.setTransform(256.4,-306.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_117.setTransform(250.9,-303.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AAQAbIAAgMIgfAAIAAAMIgGAAIAAgSIADAAQAIgJAAgaIAbAAIAAAjIAFAAIAAASgAgLAJIAVAAIAAgdIgOAAQgBAUgGAJg");
	this.shape_118.setTransform(247.3,-304.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgDAHQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_119.setTransform(241.8,-303.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AAKAdIAAgfIgTAfIgHAAIAAgpIAHAAIAAAeIATgeIAHAAIAAApgAgGgUQgEgDAAgFIAFAAIACAFIADABIAFgBIACgFIAFAAQAAAFgEADQgDACgEAAQgFAAgCgCg");
	this.shape_120.setTransform(238.5,-306.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgKAEIAAgHIAVAAIAAAHg");
	this.shape_121.setTransform(234.9,-305.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgSAdIAAgFIAFgIIAJgIQAJgIADgEQADgEABgEQAAgEgEgDQgDgDgEAAQgFAAgCADQgEADAAAGIgGgBQAAgIAFgEQAEgFAIAAQAIAAAFAFQAFAEAAAHIgCAHQgBADgDADQgDAEgIAGIgHAHIgEAEIAcAAIAAAHg");
	this.shape_122.setTransform(231.3,-306.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AAKAdIAAgfIgSAfIgIAAIAAgpIAHAAIAAAeIATgeIAHAAIAAApgAgGgUQgDgDgBgFIAEAAIADAFIADABIAFgBIACgFIAFAAQAAAFgDADQgEACgEAAQgFAAgCgCg");
	this.shape_123.setTransform(224.8,-306.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AAKAVIAAgfIgTAfIgHAAIAAgpIAHAAIAAAfIASgfIAIAAIAAApg");
	this.shape_124.setTransform(220.3,-305.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AAIAVIgIgNIgDgFIgEgBIAAATIgHAAIAAgpIAHAAIAAASQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQABgBACgHIADgGIADgCIAFgBIACAAIAAAGIgCAAIgEABIgCAFIgDAGIgDACQADABAFAHIAHANg");
	this.shape_125.setTransform(216.6,-305.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_126.setTransform(212.7,-305.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AAKAVIAAgTIgTAAIAAATIgHAAIAAgpIAHAAIAAASIATAAIAAgSIAHAAIAAApg");
	this.shape_127.setTransform(208.4,-305.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AAKAVIAAgfIgSAfIgIAAIAAgpIAHAAIAAAfIATgfIAHAAIAAApg");
	this.shape_128.setTransform(204,-305.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AAXAbIAAgMIgzAAIAAgpIAHAAIAAAjIAQAAIAAgjIAGAAIAAAjIAQAAIAAgjIAHAAIAAAjIAFAAIAAASg");
	this.shape_129.setTransform(198.6,-304.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgNAQQgFgFgBgLQABgLAGgFQAGgFAGAAQAIAAAGAGQAGAGgBAJQAAAHgCAFQgDAFgEACQgEADgGAAQgHAAgGgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAGAAADgEQAEgEAAgIQAAgHgEgEQgDgEgGAAQgEAAgEAEg");
	this.shape_130.setTransform(192.9,-305.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAIABQAFABACACQADACACADQACAEAAAEQAAAHgFAEQgFAFgLAAIgOAAIAAAYgAgNAAIAOAAQAHAAADgDQADgDAAgFQAAgDgBgDQgCgCgEgBIgGgBIgOAAg");
	this.shape_131.setTransform(188.1,-306.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AARAbIAAgMIggAAIAAAMIgGAAIAAgSIAEAAQAHgJAAgaIAcAAIAAAjIAEAAIAAASgAgLAJIAWAAIAAgdIgQAAQAAAUgGAJg");
	this.shape_132.setTransform(180.7,-304.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgPAJIAHgBQAAAEADACQADACADAAQADAAACgCQADgCAAgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAIgFAAIgCAAIAAgFIAFAAIADgCQABAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAQgCgCgDAAQgEAAgDAHIgHgBQAEgMALAAQAGAAAEAEQAEAEgBAFQAAAFgEADQACAAACADQACADAAADQAAAGgEADQgFAEgGAAQgOAAgCgNg");
	this.shape_133.setTransform(176.6,-305.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgNAQQgFgGAAgKQAAgJAFgGQAGgGAIAAQAHAAAGAGQAFAGAAAJIAAACIgeAAQABAHADADQAEAEAEAAQADAAAEgCQACgCABgFIAIABQgCAHgFADQgEAEgHAAQgIAAgGgGgAgGgMQgEAEgBAFIAXAAQAAgFgDgDQgEgEgEAAQgFAAgCADg");
	this.shape_134.setTransform(172.6,-305.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgNAQQgFgFgBgLQABgLAGgFQAGgFAGAAQAIAAAGAGQAGAGgBAJQAAAHgCAFQgDAFgEACQgEADgGAAQgHAAgGgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAGAAADgEQAEgEAAgIQAAgHgEgEQgDgEgGAAQgEAAgEAEg");
	this.shape_135.setTransform(168.1,-305.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgRAdIAAg4IAGAAIAAAFQADgDADgCQACgBADAAQAFAAAFADQAEACABAFQADAFAAAGQAAAHgDAEQgCAFgEACQgEADgFAAQgDAAgCgBQgDgCgCgCIAAAUgAgHgSQgEAEAAAIQAAAHAEAEQADADAEAAQAEAAADgEQAEgEAAgHQAAgIgEgEQgDgEgEAAQgEAAgDAFg");
	this.shape_136.setTransform(163.8,-304.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AAOAdIAAgyIgcAAIAAAyIgIAAIAAg5IAsAAIAAA5g");
	this.shape_137.setTransform(158.6,-306.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgDAHQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_138.setTransform(152.4,-303.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgOASQgEgDAAgFQAAgDACgDQAAgCADgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgCACQgDACgBAEIgHgBIADgHQADgDAEgBQAEgCAEAAQAFAAAEACQADABABACIACAFIABAGIAAAIIABANIABAFIgHAAQgCgCABgDIgIAEIgHACQgHAAgDgEgAgBADIgGABIgDACIgBAEQAAAAABABQAAABAAAAQAAABABAAQAAABABAAQABACAFAAQADAAADgCQADgBACgDQABgDAAgEIAAgDIgLADg");
	this.shape_139.setTransform(149.1,-305.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgQAVIAAgpIAQAAIAIABQADABACADQACADAAADIgBAFIgEAEQADAAACADQACACAAAEQAAAGgFADQgDADgIAAgAgJAPIAJAAIAIgBQACgCAAgDIgBgEQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAIgFAAIgJAAgAgJgCIAIAAIAEgBIAEgCQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgDgCgCIgHgBIgIAAg");
	this.shape_140.setTransform(144.9,-305.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AAIAVIgIgNIgDgFIgEgBIAAATIgHAAIAAgpIAHAAIAAASQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQABgBACgHIADgGIADgCIAFgBIACAAIAAAGIgCAAIgEABIgCAFIgDAGIgDACQADABAFAHIAHANg");
	this.shape_141.setTransform(141.1,-305.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_142.setTransform(137.2,-305.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgNAQQgGgFAAgLQAAgLAHgFQAGgFAGAAQAIAAAGAGQAFAGABAJQgBAHgCAFQgCAFgFACQgEADgGAAQgIAAgFgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQADgEAAgIQAAgHgDgEQgDgEgGAAQgEAAgDAEg");
	this.shape_143.setTransform(132.9,-305.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AAUAdIAAgvIgRAvIgFAAIgRgwIAAAwIgHAAIAAg5IALAAIAOAoIABAJIADgKIAOgnIAKAAIAAA5g");
	this.shape_144.setTransform(127.3,-306.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_145.setTransform(120.8,-303.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgLAVIAAgpIAXAAIAAAGIgQAAIAAAjg");
	this.shape_146.setTransform(118.4,-305.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgDAHQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_147.setTransform(113.4,-303.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgMAaQgEgEgBgHIAHgBQABAFACACQADACADAAQADAAACgBIAEgEIADgHIABgIIAAgCQgCAEgEACQgEACgDAAQgHAAgFgFQgFgEAAgJQAAgJAFgFQAFgFAIAAQAFAAAEADQAFADACAFQADAGAAAKQAAAKgDAHQgCAGgFAEQgEADgGAAQgGAAgFgDgAgHgTQgEAEAAAGQAAAGAEADQADADAEAAQAFAAADgDQADgDAAgGQAAgGgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_148.setTransform(110.1,-306.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_149.setTransform(105.3,-306.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_150.setTransform(101,-306.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgMAYQgFgEgBgHIAHgBQABAGADACQADADAEAAQAEAAAEgEQADgEABgGQgBgGgDgDQgEgDgEAAQgDAAgDACQgDABgCACIgGgBIAFgdIAcAAIAAAHIgWAAIgDAPQAFgDAFAAQAIAAAEAFQAGAEAAAIQAAAIgFAGQgFAHgJAAQgIAAgEgFg");
	this.shape_151.setTransform(96.8,-306);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_152.setTransform(92,-306.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_153.setTransform(87.5,-306.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgBASIAKgSIgKgRIAFAAIANARIgNASgAgQASIALgSIgLgRIAGAAIALARIgLASg");
	this.shape_154.setTransform(81.2,-305.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_155.setTransform(77.9,-303.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgRAdIAAg5IAkAAIAAAHIgdAAIAAAyg");
	this.shape_156.setTransform(74.9,-306.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_157.setTransform(71.4,-303.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_158.setTransform(67.3,-306.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_159.setTransform(63.4,-303.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgMAZQgGgDgDgHQgDgHAAgIQAAgIADgHQAEgHAGgEQAGgDAHAAQAIAAAGAFQAGAEACAIIgHABQgCgFgEgEQgEgCgFAAQgGgBgEAEQgFADgCAFQgBAGAAAFQAAAHACAFQACAFAEAEQAFACAEAAQAGAAAFgDQAEgFACgHIAHADQgCAIgGAFQgGAGgJAAQgJAAgFgFg");
	this.shape_160.setTransform(59.3,-306.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AAQAdIAAgsIgeAsIgHAAIAAg5IAGAAIAAAtIAegtIAIAAIAAA5g");
	this.shape_161.setTransform(51.4,-306.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AATAkIAAgOIglAAIAAAOIgHAAIAAgVIAFAAQAHgKAAgfIAAgIIAhAAIAAAxIAGAAIAAAVgAgGgYIgBATQgCAMgEAIIAaAAIAAgrIgTAAg");
	this.shape_162.setTransform(45.6,-305.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_163.setTransform(40.2,-306.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AASAdIgHgSIgXAAIgGASIgIAAIAWg5IAHAAIAYA5gAgDgLIgGAQIASAAIgGgPIgDgLIgDAKg");
	this.shape_164.setTransform(34.6,-306.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AALAdIgKgQQgDgGgDgDQgDgCgEAAIAAAbIgHAAIAAg5IAHAAIAAAaQAGAAABgCQADgCACgIIAEgIIAFgEQACgCADAAIAGABIAAAGIgCAAIgCAAQgDAAgCACIgFAHQgCAIgCABIgEADQAEABAGAJIAMATg");
	this.shape_165.setTransform(29.9,-306.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AALASIgLgSIALgRIAGAAIgKARIAKASgAgDASIgNgSIANgRIAFAAIgJARIAJASg");
	this.shape_166.setTransform(25,-305.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_167.setTransform(17.5,-306.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_168.setTransform(11.3,-306.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_169.setTransform(5.1,-306.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dfgdfggg_1, new cjs.Rectangle(0,-312.4,505.2,12.9), null);


(lib.ClipGroup_9копия2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsFtQiXiXgBjWQABjVCXiXQCXiXDVgBQDWABCXCXQCYCXAADVQAADWiYCXQiXCXjWABQjVgBiXiXgAhuAqIhnGEQBjAzByAAQDHAACNiNQCMiNABjHQgBhGgThEgAnHCYQAbBSA2BDQA1BDBKAsIBflkIh8AnIglCKIgqANIAliKgAmIkUQhYB9AACXQAABDASA+ICXgwICPoTQiLA0hVB6gAh+nPIiPITIB8goIBVk6IAqgMIhUE4IIrivQgziOh6hXQh+haiaAAQhAAAg+ARg");
	mask.setTransform(51.7,51.7);

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9копия2, null, null);


(lib.ClipGroup_9копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsFtQiXiXgBjWQABjVCXiXQCXiXDVgBQDWABCXCXQCYCXAADVQAADWiYCXQiXCXjWABQjVgBiXiXgAhuAqIhnGEQBjAzByAAQDHAACNiNQCMiNABjHQgBhGgThEgAnHCYQAbBSA2BDQA1BDBKAsIBflkIh8AnIglCKIgqANIAliKgAmIkUQhYB9AACXQAABDASA+ICXgwICPoTQiLA0hVB6gAh+nPIiPITIB8goIBVk6IAqgMIhUE4IIrivQgziOh6hXQh+haiaAAQhAAAg+ARg");
	mask.setTransform(51.7,51.7);

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9копия, null, null);


(lib.ClipGroup_5_1копия2 = function(mode,startPosition,loop) {
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

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_1копия2, new cjs.Rectangle(59.2,59.2,118.4,118.4), null);


(lib.ClipGroup_5_1копия = function(mode,startPosition,loop) {
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

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_1копия, new cjs.Rectangle(59.2,59.2,118.4,118.4), null);


(lib.ClipGroup_4_1копия2 = function(mode,startPosition,loop) {
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

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_1копия2, new cjs.Rectangle(55.3,55.3,115.7,115.7), null);


(lib.ClipGroup_4_1копия = function(mode,startPosition,loop) {
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

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_1копия, new cjs.Rectangle(55.3,55.3,115.7,115.7), null);


(lib.ClipGroup_3_0копия2 = function(mode,startPosition,loop) {
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

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_0копия2, new cjs.Rectangle(54.3,54.3,113.6,113.5), null);


(lib.ClipGroup_3_0копия = function(mode,startPosition,loop) {
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

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_0копия, new cjs.Rectangle(54.3,54.3,113.6,113.5), null);


(lib.ClipGroup_2_0копия2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhPAPQgLgMAEgYIAfAAQABARAPgEQAJgCAHgLIAcAAQgTAggfAJQgIACgHAAQgMAAgHgHgAAkgVIA1AAIgRAHQgIACgHAAQgNAAgIgJg");
	mask.setTransform(8.8,2.2);

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_0копия2, null, null);


(lib.ClipGroup_2_0копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhPAPQgLgMAEgYIAfAAQABARAPgEQAJgCAHgLIAcAAQgTAggfAJQgIACgHAAQgMAAgHgHgAAkgVIA1AAIgRAHQgIACgHAAQgNAAgIgJg");
	mask.setTransform(8.8,2.2);

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_0копия, null, null);


(lib.ClipGroup_1_1копия2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AidBxQgKgNAFgaQAFgbASgVQASgWAXgGQAIgCAHAAQAQAAAHAMQAHANgEAWQgFAWgMATQgNATgSAKgAhnAaQgVAHgGAgQgFAbAOAAIAFgBQAVgGAGggQADgSgFgGQgDgEgEAAIgFABgAjZBxQAHgJADgQQADgRgFgHQgEgFgIADQgIACgHAIQgJAKgDASQgCAJABAEIggAAIABgEQAGgbARgVQASgWAYgHQAIgCAGAAQAQAAAHANQAHANgEAXQgEASgJAQgAgsgTIAjgKIADBDIABAAIAihRIAkgLIg/CHIgkANgABRg8IBGgVIgGAfIglANIgDAPIAfgMIgFAfIggAJIgDAPIAmgOIgIAkIhIAWgAC4hcIBDgTIALgBQALAAAFAGQAFAHgDANQgFAYgSALQANACgDAYIgBAMQgBAJABADIgjAJIABgRQABgLgBgEQgCgHgJADIgQABIgKAxIgkAKgADlhOIgQAFIgFAYIASgFQAPgEADgMQACgJgIAAIgJABg");
	mask.setTransform(28.2,11.3);

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1копия2, null, null);


(lib.ClipGroup_1_1копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AidBxQgKgNAFgaQAFgbASgVQASgWAXgGQAIgCAHAAQAQAAAHAMQAHANgEAWQgFAWgMATQgNATgSAKgAhnAaQgVAHgGAgQgFAbAOAAIAFgBQAVgGAGggQADgSgFgGQgDgEgEAAIgFABgAjZBxQAHgJADgQQADgRgFgHQgEgFgIADQgIACgHAIQgJAKgDASQgCAJABAEIggAAIABgEQAGgbARgVQASgWAYgHQAIgCAGAAQAQAAAHANQAHANgEAXQgEASgJAQgAgsgTIAjgKIADBDIABAAIAihRIAkgLIg/CHIgkANgABRg8IBGgVIgGAfIglANIgDAPIAfgMIgFAfIggAJIgDAPIAmgOIgIAkIhIAWgAC4hcIBDgTIALgBQALAAAFAGQAFAHgDANQgFAYgSALQANACgDAYIgBAMQgBAJABADIgjAJIABgRQABgLgBgEQgCgHgJADIgQABIgKAxIgkAKgADlhOIgQAFIgFAYIASgFQAPgEADgMQACgJgIAAIgJABg");
	mask.setTransform(28.2,11.3);

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1копия, null, null);


(lib.Анимация6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._4();
	this.instance.parent = this;
	this.instance.setTransform(-44,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-125,88,250);


(lib.Анимация5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._4();
	this.instance.parent = this;
	this.instance.setTransform(-44,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-125,88,250);


(lib.Анимация4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAOAAQARAAAJAMQAJAMAAATIAAAGIgzAAQACAVASAAQALAAAJgJIAIAMQgNAMgQAAQgPAAgLgLgAgRgFIAjAAQgBgWgRAAQgOAAgDAWg");
	this.shape.setTransform(52.6,14.6,0.75,0.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAOAqIgTgjIgLANIAAAWIgSAAIAAhTIASAAIAAAoIAdgoIAUAAIgbAjIAdAwg");
	this.shape_1.setTransform(47,14.6,0.75,0.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgkA2IAAhqIARAAIAAAOQAKgPAOAAQANAAAJAKQAKAMAAAUIAAACQAAATgKALQgJALgNAAQgOAAgKgOIAAAkgAgNgeQgGAHAAAMIAAACQAAALAGAHQAGAHAHAAQAIAAAGgHQAFgHAAgLIAAgCQAAgMgGgHQgFgIgIAAQgHAAgGAIg");
	this.shape_2.setTransform(40.3,15.4,0.75,0.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgSIAAgBQAAgSALgMQALgMAPAAQARAAALAMQAKAMAAASIAAABQAAASgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAHAAAMIAAABQAAALAGAIQAGAIAIAAQAKAAAFgIQAGgHAAgMIAAgBQAAgLgGgIQgGgIgJAAQgIAAgGAIg");
	this.shape_3.setTransform(33.4,14.6,0.75,0.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaAtQgLgMABgWIAAgCQgBgXAFgMQAGgRASgEIAmgJIAEAOIgmAJQgSAFgBASQAHgOATAAQAOAAAKALQAKALAAARIAAAAQABATgLALQgKAMgRAAQgQAAgKgMgAgOgDQgFAHAAALIAAABQAAALAFAHQAHAIAHAAQAJAAAGgIQAEgHAAgLIAAgBQAAgLgFgHQgFgHgJAAQgIAAgGAHg");
	this.shape_4.setTransform(26.7,13.5,0.75,0.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghAyIAGgOQAEADAGAAQAGAAAEgJIgdhTIASAAIATA9IASg9IATAAIgdBVQgFALgEAGQgGAEgKAAQgJAAgIgDg");
	this.shape_5.setTransform(20.2,15.5,0.75,0.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbAtQgJgMgBgWIAAgCQABgXAEgMQAGgRARgEIAogJIACAOIglAJQgSAFgBASQAIgOASAAQAOAAAKALQALALAAARIAAAAQAAATgLALQgKAMgRAAQgQAAgLgMgAgNgDQgFAHgBALIAAABQABALAFAHQAGAIAHAAQAJAAAFgIQAFgHABgLIAAgBQAAgLgGgHQgFgHgJAAQgHAAgGAHg");
	this.shape_6.setTransform(10.8,13.5,0.75,0.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgSIAAgBQAAgSALgMQALgMAPAAQARAAALAMQAKAMAAASIAAABQAAASgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAHAAAMIAAABQAAALAGAIQAGAIAIAAQAJAAAGgIQAGgIAAgLIAAgBQAAgLgGgIQgGgIgJAAQgIAAgGAIg");
	this.shape_7.setTransform(4.1,14.6,0.75,0.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJAMAAATIAAAGIgzAAQACAVASAAQALAAAJgJIAIAMQgMAMgRAAQgPAAgLgLgAgLgVQgEAGgBAKIAiAAQgBgKgEgGQgFgGgHAAQgHAAgFAGg");
	this.shape_8.setTransform(-5.4,14.6,0.75,0.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AARAqIAAg2IghA2IgRAAIAAhTIASAAIAAA2IAgg2IARAAIAABTg");
	this.shape_9.setTransform(-11.8,14.6,0.75,0.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAQAqIAAgiIgfAAIAAAiIgRAAIAAhTIARAAIAAAiIAfAAIAAgiIARAAIAABTg");
	this.shape_10.setTransform(-18.3,14.6,0.75,0.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJAMAAATIAAAGIgzAAQACAVASAAQALAAAJgJIAIAMQgMAMgRAAQgPAAgLgLgAgLgVQgEAGgBAKIAiAAQgCgWgPAAQgHAAgFAGg");
	this.shape_11.setTransform(-24.7,14.6,0.75,0.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AglApIABgPIAFAAQAIAAACgKQAEgOAAgrIA3AAIAABSIgRAAIAAhCIgWAAQAAAogGAPQgGAMgOAAg");
	this.shape_12.setTransform(-31.4,14.6,0.75,0.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgfAqIAAhTIAhAAQAMAAAIAGQAGAGAAAKQAAANgMAGQAQAEABAOQAAALgJAGQgIAGgNABgAgOAbIAOAAQAPABAAgLQgBgLgOAAIgOAAgAgOgGIANAAQANAAAAgLQAAgKgMABIgOAAg");
	this.shape_13.setTransform(-37.2,14.6,0.75,0.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgYAkQgIgHAAgLIAAgBQAAgNAIgGQAIgHAOAAQAKAAAIADIAAgDQAAgRgRAAQgLAAgKAFIgEgPQAOgGAMAAQAhAAAAAhIAAAyIgRAAIAAgKQgIAMgOAAQgLAAgHgHgAgPAQIAAABQAAANAOAAQAHAAAFgFQAFgEAAgHIAAgJQgFgDgLAAQgPAAAAAOg");
	this.shape_14.setTransform(-43.6,14.6,0.75,0.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgIAqIAAhDIgXAAIAAgQIA+AAIAAAQIgWAAIAABDg");
	this.shape_15.setTransform(-48.9,14.6,0.75,0.75);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgVAfQgLgMABgSIAAgBQgBgSALgMQAMgMAOAAQAQAAALALIgJANQgIgIgJAAQgIAAgFAHQgHAHABAMIAAABQgBAMAHAHQAGAHAHAAQAKAAAIgIIAIAMQgMAMgPAAQgPAAgLgMg");
	this.shape_16.setTransform(-54.2,14.6,0.75,0.75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAZAzIAAgTIgxAAIgCATIgPAAIAAgiIAIAAQAJgSAAglIAAgMIA4AAIAABDIAKAAIgCAigAgPARIAdAAIAAgzIgWAAQAAAigHARg");
	this.shape_17.setTransform(-60.5,15.3,0.75,0.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAOAAQARAAAJAMQAJAMAAATIAAAGIg0AAQAEAVARAAQAKAAAKgJIAIAMQgNAMgQAAQgPAAgLgLgAgLgVQgEAGgCAKIAiAAQAAgKgEgGQgFgGgIAAQgGAAgFAGg");
	this.shape_18.setTransform(-66.9,14.6,0.75,0.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgkA2IAAhqIARAAIAAAOQAKgPANAAQAOAAAJAKQAKAMAAAUIAAACQAAATgKALQgJALgOAAQgNAAgKgOIAAAkgAgNgeQgGAHAAAMIAAACQAAALAGAHQAGAHAHAAQAIAAAGgHQAFgHAAgLIAAgCQAAgMgGgHQgFgIgIAAQgHAAgGAIg");
	this.shape_19.setTransform(-73.3,15.4,0.75,0.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAPAqIAAhDIgdAAIAABDIgSAAIAAhTIBBAAIAABTg");
	this.shape_20.setTransform(-80,14.6,0.75,0.75);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAOAAQARAAAJAMQAJANAAARIAAAHIgzAAQACAVASAAQALAAAJgJIAIALQgLANgSAAQgPAAgLgLgAgRgFIAjAAQgCgWgQAAQgOAAgDAWg");
	this.shape_21.setTransform(7.1,2,0.75,0.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag0ApIAAhSIASAAIAABDIAaAAIAAhDIARAAIAABDIAaAAIAAhDIARAAIAABSg");
	this.shape_22.setTransform(-0.7,2,0.75,0.75);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgZAkQgHgHAAgLIAAgBQAAgNAIgGQAIgHAOAAQAIAAAKADIAAgDQAAgRgSAAQgJAAgLAFIgEgPQAMgGAOAAQAhAAAAAhIAAAyIgRAAIAAgKQgJAMgOAAQgKAAgIgHgAgPAQIAAABQAAAMAOAAQAHAAAFgEQAFgFAAgHIAAgIQgHgDgJAAQgPAAAAAOg");
	this.shape_23.setTransform(-8.6,2,0.75,0.75);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AggApIAAhSIAiAAQAbABgBAVQABANgMAGQAQAEAAAOQAAAXgfAAgAgOAcIAOAAQAPAAAAgLQAAgMgPAAIgOAAgAgOgGIAOAAQALAAAAgKQAAgLgLABIgOAAg");
	this.shape_24.setTransform(-14.4,2,0.75,0.75);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgIApIAAhCIgWAAIAAgQIA+AAIAAAQIgYAAIAABCg");
	this.shape_25.setTransform(-23.1,2,0.75,0.75);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AghAyIAGgPQAEADAFAAQAIAAADgJIgehSIATAAIASA9IATg9IASAAIgdBUQgHAXgRgBQgIAAgJgDg");
	this.shape_26.setTransform(-28.8,2.9,0.75,0.75);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAPApIAAghIgdAAIAAAhIgSAAIAAhSIASAAIAAAiIAdAAIAAgiIASAAIAABSg");
	this.shape_27.setTransform(-35.1,2,0.75,0.75);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgkA2IAAhqIASAAIAAAOQAJgPAOAAQANAAAJAKQAKAMAAAUIAAACQAAATgKAMQgJAKgNAAQgNAAgKgOIAAAkgAgNgeQgGAHAAAMIAAACQAAAKAGAIQAGAIAHAAQAJAAAFgIQAGgHAAgLIAAgCQAAgMgGgHQgGgIgIABQgHAAgGAHg");
	this.shape_28.setTransform(-41.7,2.8,0.75,0.75);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAOAAQARAAAJAMQAJANAAARIAAAHIgzAAQACAVASAAQALAAAJgJIAIALQgLANgSAAQgPAAgLgLgAgRgFIAjAAQgCgWgQAAQgOAAgDAWg");
	this.shape_29.setTransform(-48.3,2,0.75,0.75);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AggApIAAhSIAiAAQAMAAAHAGQAHAGABAKQAAANgMAGQAPAEAAAOQAAALgHAHQgJAFgOAAgAgOAcIAOAAQAOAAAAgLQAAgMgOAAIgOAAgAgOgGIAOAAQAMAAgBgKQAAgLgLABIgOAAg");
	this.shape_30.setTransform(-54.3,2,0.75,0.75);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJANAAARIAAAHIgzAAQABAKAGAGQAGAFAHAAQALAAAJgJIAIALQgLANgSAAQgPAAgLgLgAgQgFIAiAAQgCgWgPAAQgQAAgBAWg");
	this.shape_31.setTransform(-60.7,2,0.75,0.75);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgkA2IAAhqIASAAIAAAOQAJgPAOAAQANAAAJAKQAKAMAAAUIAAACQAAATgKAMQgJAKgNAAQgNAAgKgOIAAAkgAgNgeQgGAHAAAMIAAACQAAALAGAHQAGAIAHAAQAIAAAGgIQAGgHAAgLIAAgCQAAgMgGgHQgGgIgIABQgHAAgGAHg");
	this.shape_32.setTransform(-67.1,2.8,0.75,0.75);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJANAAARIAAAHIgzAAQADAVAQAAQAMAAAIgJIAJALQgLANgSAAQgPAAgLgLgAgQgFIAiAAQgBgWgQAAQgPAAgCAWg");
	this.shape_33.setTransform(-73.7,2,0.75,0.75);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAPApIAAhCIgdAAIAABCIgSAAIAAhSIBBAAIAABSg");
	this.shape_34.setTransform(-80,2,0.75,0.75);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgUAqIAAhSIARAAIAAARQAHgSASAAIAAATIgBAAQgLAAgHAHQgGAIAAANIAAAkg");
	this.shape_35.setTransform(8.7,-10.6,0.75,0.75);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgXAfQgLgMAAgSIAAgBQAAgSAKgMQAKgMAOAAQARAAAJAMQAJAMAAATIAAAFIg0AAQADAWASAAQAKAAAKgIIAIAKQgNANgQAAQgPAAgLgMgAgRgFIAiAAQAAgKgEgGQgFgHgIABQgOAAgDAWg");
	this.shape_36.setTransform(3.3,-10.5,0.75,0.75);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgHAqIgdhTIATAAIARA8IATg8IASAAIgcBTg");
	this.shape_37.setTransform(-2.6,-10.6,0.75,0.75);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgSIAAgBQAAgSALgMQALgMAPAAQARAAALAMQALAMgBASIAAABQABASgLAMQgLAMgRAAQgPAAgLgMgAgOgTQgGAIABALIAAABQAAALAFAIQAGAHAIABQAKgBAFgHQAGgIAAgLIAAgBQAAgLgGgIQgGgHgJAAQgIAAgGAHg");
	this.shape_38.setTransform(-8.8,-10.5,0.75,0.75);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgbAfQgKgMgBgSIAAgBQABgSAKgMQAMgMAPAAQARAAAKAMQAMAMAAASIAAABQAAASgMAMQgKAMgRAAQgQAAgLgMgAgOgTQgGAIAAALIAAABQAAALAGAIQAGAHAIABQAJgBAGgHQAGgIAAgLIAAgBQgBgLgFgIQgGgHgJAAQgIAAgGAHg");
	this.shape_39.setTransform(-15.5,-10.5,0.75,0.75);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAWA3IAAgvIgqAAIAAAvIgSAAIAAhtIASAAIAAAuIAqAAIAAguIASAAIAABtg");
	this.shape_40.setTransform(-22.7,-11.6,0.75,0.75);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAcAqIAAhSIARAAIAABSgAgsAqIAAhSIASAAIAAAdIAOAAQAeAAAAAZQAAAbgeABgAgaAbIANAAQANAAABgMQgBgNgNAAIgNAAg");
	this.shape_41.setTransform(-33.8,-10.6,0.75,0.75);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgVAfQgKgMAAgSIAAgBQAAgSAKgMQALgMAPAAQAQAAALAKIgIAOQgJgIgJAAQgIAAgGAHQgGAHAAAMIAAABQAAAMAGAHQAGAHAJAAQAIAAAJgIIAIAMQgLAMgQAAQgPAAgLgMg");
	this.shape_42.setTransform(-40.7,-10.5,0.75,0.75);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgbAfQgLgMAAgSIAAgBQAAgSALgMQAMgMAPAAQARAAAKAMQAMAMAAASIAAABQAAASgMAMQgKAMgRAAQgPAAgMgMgAgOgTQgFAIgBALIAAABQAAALAHAIQAFAHAIABQAJgBAGgHQAGgIAAgLIAAgBQAAgLgGgIQgGgHgJAAQgIAAgGAHg");
	this.shape_43.setTransform(-47,-10.5,0.75,0.75);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgVAfQgLgMAAgSIAAgBQABgSAKgMQALgMAPAAQARAAAKAKIgJAOQgIgIgJAAQgIAAgFAHQgHAHAAAMIAAABQAAAMAHAHQAFAHAJAAQAIAAAKgIIAHAMQgLAMgQAAQgPAAgLgMg");
	this.shape_44.setTransform(-53,-10.5,0.75,0.75);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgXAfQgLgMAAgSIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJAMAAATIAAAFIgzAAQACAWASAAQAKAAAKgIIAIAKQgMANgRAAQgPAAgLgMgAgLgWQgEAHgBAKIAiAAQgBgKgEgGQgFgHgHABQgHAAgFAFg");
	this.shape_45.setTransform(-59,-10.5,0.75,0.75);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AglApIABgPIAFABQAHAAADgLQAEgOAAgrIA3AAIAABSIgSAAIAAhCIgUAAQAAApgHAOQgGAMgOAAg");
	this.shape_46.setTransform(-65.7,-10.5,0.75,0.75);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAbAqIAAhSIASAAIAABSgAgsAqIAAhSIASAAIAAAdIAOAAQAeAAAAAZQAAAbgeABgAgaAbIANAAQANAAAAgMQAAgNgNAAIgNAAg");
	this.shape_47.setTransform(-72.7,-10.6,0.75,0.75);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAPAqIAAhDIgdAAIAABDIgSAAIAAhSIBBAAIAABSg");
	this.shape_48.setTransform(-80,-10.6,0.75,0.75);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJANQAJAMAAARIAAAHIgzAAQABAKAGAGQAGAFAHAAQALAAAJgJIAIAMQgLAMgSAAQgPAAgLgLgAgLgVQgEAGgBAKIAiAAQgCgWgPAAQgHAAgFAGg");
	this.shape_49.setTransform(-6.9,-23.1,0.75,0.75);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAbAqIAAhTIASAAIAABTgAgsAqIAAhTIASAAIAAAeIAOAAQAeAAAAAZQAAAbgeABgAgaAbIANAAQANAAAAgMQAAgOgNAAIgNAAg");
	this.shape_50.setTransform(-14.1,-23.1,0.75,0.75);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAPAqIAAgiIgdAAIAAAiIgSAAIAAhTIASAAIAAAiIAdAAIAAgiIASAAIAABTg");
	this.shape_51.setTransform(-21.5,-23.1,0.75,0.75);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAYAzIAAgSIgwAAIgCASIgPAAIAAgiIAIAAQAIgSAAglIAAgMIA4AAIAABDIALAAIgCAigAgPARIAdAAIAAg0IgWAAQAAAkgHAQg");
	this.shape_52.setTransform(-28.1,-22.5,0.75,0.75);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgSIAAgBQAAgSALgMQALgMAPAAQARAAALAMQAKAMAAASIAAABQAAASgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAIAAALIAAABQAAALAGAIQAGAHAIAAQAJAAAGgHQAGgIAAgLIAAgBQAAgLgGgIQgGgHgJgBQgJABgFAHg");
	this.shape_53.setTransform(-34.6,-23.1,0.75,0.75);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AggAqIAAhTIAiAAQANAAAGAGQAIAGAAAKQAAAMgMAGQAPAEAAAPQAAAMgIAFQgHAHgOAAgAgOAbIAPAAQANABAAgLQAAgMgOABIgOAAgAgOgGIAOAAQAMAAgBgLQAAgKgLAAIgOAAg");
	this.shape_54.setTransform(-40.9,-23.1,0.75,0.75);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgbAfQgKgMgBgSIAAgBQABgSAKgMQAMgMAPAAQAQAAAMAMQAKAMABASIAAABQgBASgKAMQgMAMgQAAQgPAAgMgMgAgOgTQgFAIgBALIAAABQAAALAHAIQAFAHAIAAQAJAAAGgHQAFgHABgMIAAgBQgBgLgFgIQgGgHgJgBQgIABgGAHg");
	this.shape_55.setTransform(-47.5,-23.1,0.75,0.75);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgkA2IAAhqIARAAIAAAOQALgPANAAQANAAAJAKQAKAMAAAUIAAACQAAATgKAMQgJAKgNAAQgNAAgLgOIAAAkgAgNgeQgGAIAAALIAAACQAAALAGAHQAGAIAHgBQAIABAGgIQAGgHAAgLIAAgCQAAgLgGgIQgGgHgIgBQgHABgGAHg");
	this.shape_56.setTransform(-54.1,-22.3,0.75,0.75);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAPAqIAAhEIgdAAIAABEIgSAAIAAhTIBBAAIAABTg");
	this.shape_57.setTransform(-60.9,-23.1,0.75,0.75);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgVAfQgKgMAAgSIAAgBQAAgSAKgMQALgMAPAAQAPAAAMAKIgIAOQgJgIgJAAQgIAAgGAHQgGAIAAALIAAABQAAAMAGAHQAGAHAJAAQAJAAAIgIIAIANQgLALgQAAQgPAAgLgMg");
	this.shape_58.setTransform(-66.9,-23.1,0.75,0.75);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAOAAQARAAAJANQAJAMAAARIAAAHIg0AAQAEAVARAAQALAAAJgJIAIAMQgMAMgRAAQgPAAgLgLgAgRgFIAjAAQgBgWgRAAQgOAAgDAWg");
	this.shape_59.setTransform(-72.9,-23.1,0.75,0.75);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgmA3IAAhtIBFAAIAAARIgzAAIAAAbIAXAAQAQAAAKAIQAKAIAAAPQAAAQgLAJQgKAJgRAAgAgUAmIAWAAQATAAAAgQQAAgRgTAAIgWAAg");
	this.shape_60.setTransform(-79.4,-24.1,0.75,0.75);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AicFpIDBrRIB4AAIjBLRg");
	this.shape_61.setTransform(79.2,-31.6,0.75,0.75);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#CB0927").s().p("AiqEtIChpZIC0AAIiiJZg");
	this.shape_62.setTransform(75.2,9,0.75,0.75);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#DBDBDA").s().p("Aj8HiIBhlqICzAAICipZIBDAAIkBPDg");
	this.shape_63.setTransform(74.1,22.6,0.75,0.75);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#DC052B").s().p("Az2HiIAAvCMAntAAAIkCPCg");
	this.shape_64.setTransform(0,-4.5,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.3,-58.7,190.6,117.4);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAOAAQARAAAJAMQAJAMAAATIAAAGIgzAAQACAVASAAQALAAAJgJIAIAMQgNAMgQAAQgPAAgLgLgAgRgFIAjAAQgBgWgRAAQgOAAgDAWg");
	this.shape.setTransform(52.6,14.6,0.75,0.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAOAqIgTgjIgLANIAAAWIgSAAIAAhTIASAAIAAAoIAdgoIAUAAIgbAjIAdAwg");
	this.shape_1.setTransform(47,14.6,0.75,0.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgkA2IAAhqIARAAIAAAOQAKgPAOAAQANAAAJAKQAKAMAAAUIAAACQAAATgKALQgJALgNAAQgOAAgKgOIAAAkgAgNgeQgGAHAAAMIAAACQAAALAGAHQAGAHAHAAQAIAAAGgHQAFgHAAgLIAAgCQAAgMgGgHQgFgIgIAAQgHAAgGAIg");
	this.shape_2.setTransform(40.3,15.4,0.75,0.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgSIAAgBQAAgSALgMQALgMAPAAQARAAALAMQAKAMAAASIAAABQAAASgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAHAAAMIAAABQAAALAGAIQAGAIAIAAQAKAAAFgIQAGgHAAgMIAAgBQAAgLgGgIQgGgIgJAAQgIAAgGAIg");
	this.shape_3.setTransform(33.4,14.6,0.75,0.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaAtQgLgMABgWIAAgCQgBgXAFgMQAGgRASgEIAmgJIAEAOIgmAJQgSAFgBASQAHgOATAAQAOAAAKALQAKALAAARIAAAAQABATgLALQgKAMgRAAQgQAAgKgMgAgOgDQgFAHAAALIAAABQAAALAFAHQAHAIAHAAQAJAAAGgIQAEgHAAgLIAAgBQAAgLgFgHQgFgHgJAAQgIAAgGAHg");
	this.shape_4.setTransform(26.7,13.5,0.75,0.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghAyIAGgOQAEADAGAAQAGAAAEgJIgdhTIASAAIATA9IASg9IATAAIgdBVQgFALgEAGQgGAEgKAAQgJAAgIgDg");
	this.shape_5.setTransform(20.2,15.5,0.75,0.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbAtQgJgMgBgWIAAgCQABgXAEgMQAGgRARgEIAogJIACAOIglAJQgSAFgBASQAIgOASAAQAOAAAKALQALALAAARIAAAAQAAATgLALQgKAMgRAAQgQAAgLgMgAgNgDQgFAHgBALIAAABQABALAFAHQAGAIAHAAQAJAAAFgIQAFgHABgLIAAgBQAAgLgGgHQgFgHgJAAQgHAAgGAHg");
	this.shape_6.setTransform(10.8,13.5,0.75,0.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgSIAAgBQAAgSALgMQALgMAPAAQARAAALAMQAKAMAAASIAAABQAAASgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAHAAAMIAAABQAAALAGAIQAGAIAIAAQAJAAAGgIQAGgIAAgLIAAgBQAAgLgGgIQgGgIgJAAQgIAAgGAIg");
	this.shape_7.setTransform(4.1,14.6,0.75,0.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJAMAAATIAAAGIgzAAQACAVASAAQALAAAJgJIAIAMQgMAMgRAAQgPAAgLgLgAgLgVQgEAGgBAKIAiAAQgBgKgEgGQgFgGgHAAQgHAAgFAGg");
	this.shape_8.setTransform(-5.4,14.6,0.75,0.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AARAqIAAg2IghA2IgRAAIAAhTIASAAIAAA2IAgg2IARAAIAABTg");
	this.shape_9.setTransform(-11.8,14.6,0.75,0.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAQAqIAAgiIgfAAIAAAiIgRAAIAAhTIARAAIAAAiIAfAAIAAgiIARAAIAABTg");
	this.shape_10.setTransform(-18.3,14.6,0.75,0.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJAMAAATIAAAGIgzAAQACAVASAAQALAAAJgJIAIAMQgMAMgRAAQgPAAgLgLgAgLgVQgEAGgBAKIAiAAQgCgWgPAAQgHAAgFAGg");
	this.shape_11.setTransform(-24.7,14.6,0.75,0.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AglApIABgPIAFAAQAIAAACgKQAEgOAAgrIA3AAIAABSIgRAAIAAhCIgWAAQAAAogGAPQgGAMgOAAg");
	this.shape_12.setTransform(-31.4,14.6,0.75,0.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgfAqIAAhTIAhAAQAMAAAIAGQAGAGAAAKQAAANgMAGQAQAEABAOQAAALgJAGQgIAGgNABgAgOAbIAOAAQAPABAAgLQgBgLgOAAIgOAAgAgOgGIANAAQANAAAAgLQAAgKgMABIgOAAg");
	this.shape_13.setTransform(-37.2,14.6,0.75,0.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgYAkQgIgHAAgLIAAgBQAAgNAIgGQAIgHAOAAQAKAAAIADIAAgDQAAgRgRAAQgLAAgKAFIgEgPQAOgGAMAAQAhAAAAAhIAAAyIgRAAIAAgKQgIAMgOAAQgLAAgHgHgAgPAQIAAABQAAANAOAAQAHAAAFgFQAFgEAAgHIAAgJQgFgDgLAAQgPAAAAAOg");
	this.shape_14.setTransform(-43.6,14.6,0.75,0.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgIAqIAAhDIgXAAIAAgQIA+AAIAAAQIgWAAIAABDg");
	this.shape_15.setTransform(-48.9,14.6,0.75,0.75);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgVAfQgLgMABgSIAAgBQgBgSALgMQAMgMAOAAQAQAAALALIgJANQgIgIgJAAQgIAAgFAHQgHAHABAMIAAABQgBAMAHAHQAGAHAHAAQAKAAAIgIIAIAMQgMAMgPAAQgPAAgLgMg");
	this.shape_16.setTransform(-54.2,14.6,0.75,0.75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAZAzIAAgTIgxAAIgCATIgPAAIAAgiIAIAAQAJgSAAglIAAgMIA4AAIAABDIAKAAIgCAigAgPARIAdAAIAAgzIgWAAQAAAigHARg");
	this.shape_17.setTransform(-60.5,15.3,0.75,0.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAOAAQARAAAJAMQAJAMAAATIAAAGIg0AAQAEAVARAAQAKAAAKgJIAIAMQgNAMgQAAQgPAAgLgLgAgLgVQgEAGgCAKIAiAAQAAgKgEgGQgFgGgIAAQgGAAgFAGg");
	this.shape_18.setTransform(-66.9,14.6,0.75,0.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgkA2IAAhqIARAAIAAAOQAKgPANAAQAOAAAJAKQAKAMAAAUIAAACQAAATgKALQgJALgOAAQgNAAgKgOIAAAkgAgNgeQgGAHAAAMIAAACQAAALAGAHQAGAHAHAAQAIAAAGgHQAFgHAAgLIAAgCQAAgMgGgHQgFgIgIAAQgHAAgGAIg");
	this.shape_19.setTransform(-73.3,15.4,0.75,0.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAPAqIAAhDIgdAAIAABDIgSAAIAAhTIBBAAIAABTg");
	this.shape_20.setTransform(-80,14.6,0.75,0.75);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAOAAQARAAAJAMQAJANAAARIAAAHIgzAAQACAVASAAQALAAAJgJIAIALQgLANgSAAQgPAAgLgLgAgRgFIAjAAQgCgWgQAAQgOAAgDAWg");
	this.shape_21.setTransform(7.1,2,0.75,0.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag0ApIAAhSIASAAIAABDIAaAAIAAhDIARAAIAABDIAaAAIAAhDIARAAIAABSg");
	this.shape_22.setTransform(-0.7,2,0.75,0.75);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgZAkQgHgHAAgLIAAgBQAAgNAIgGQAIgHAOAAQAIAAAKADIAAgDQAAgRgSAAQgJAAgLAFIgEgPQAMgGAOAAQAhAAAAAhIAAAyIgRAAIAAgKQgJAMgOAAQgKAAgIgHgAgPAQIAAABQAAAMAOAAQAHAAAFgEQAFgFAAgHIAAgIQgHgDgJAAQgPAAAAAOg");
	this.shape_23.setTransform(-8.6,2,0.75,0.75);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AggApIAAhSIAiAAQAbABgBAVQABANgMAGQAQAEAAAOQAAAXgfAAgAgOAcIAOAAQAPAAAAgLQAAgMgPAAIgOAAgAgOgGIAOAAQALAAAAgKQAAgLgLABIgOAAg");
	this.shape_24.setTransform(-14.4,2,0.75,0.75);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgIApIAAhCIgWAAIAAgQIA+AAIAAAQIgYAAIAABCg");
	this.shape_25.setTransform(-23.1,2,0.75,0.75);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AghAyIAGgPQAEADAFAAQAIAAADgJIgehSIATAAIASA9IATg9IASAAIgdBUQgHAXgRgBQgIAAgJgDg");
	this.shape_26.setTransform(-28.8,2.9,0.75,0.75);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAPApIAAghIgdAAIAAAhIgSAAIAAhSIASAAIAAAiIAdAAIAAgiIASAAIAABSg");
	this.shape_27.setTransform(-35.1,2,0.75,0.75);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgkA2IAAhqIASAAIAAAOQAJgPAOAAQANAAAJAKQAKAMAAAUIAAACQAAATgKAMQgJAKgNAAQgNAAgKgOIAAAkgAgNgeQgGAHAAAMIAAACQAAAKAGAIQAGAIAHAAQAJAAAFgIQAGgHAAgLIAAgCQAAgMgGgHQgGgIgIABQgHAAgGAHg");
	this.shape_28.setTransform(-41.7,2.8,0.75,0.75);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAOAAQARAAAJAMQAJANAAARIAAAHIgzAAQACAVASAAQALAAAJgJIAIALQgLANgSAAQgPAAgLgLgAgRgFIAjAAQgCgWgQAAQgOAAgDAWg");
	this.shape_29.setTransform(-48.3,2,0.75,0.75);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AggApIAAhSIAiAAQAMAAAHAGQAHAGABAKQAAANgMAGQAPAEAAAOQAAALgHAHQgJAFgOAAgAgOAcIAOAAQAOAAAAgLQAAgMgOAAIgOAAgAgOgGIAOAAQAMAAgBgKQAAgLgLABIgOAAg");
	this.shape_30.setTransform(-54.3,2,0.75,0.75);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJANAAARIAAAHIgzAAQABAKAGAGQAGAFAHAAQALAAAJgJIAIALQgLANgSAAQgPAAgLgLgAgQgFIAiAAQgCgWgPAAQgQAAgBAWg");
	this.shape_31.setTransform(-60.7,2,0.75,0.75);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgkA2IAAhqIASAAIAAAOQAJgPAOAAQANAAAJAKQAKAMAAAUIAAACQAAATgKAMQgJAKgNAAQgNAAgKgOIAAAkgAgNgeQgGAHAAAMIAAACQAAALAGAHQAGAIAHAAQAIAAAGgIQAGgHAAgLIAAgCQAAgMgGgHQgGgIgIABQgHAAgGAHg");
	this.shape_32.setTransform(-67.1,2.8,0.75,0.75);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJANAAARIAAAHIgzAAQADAVAQAAQAMAAAIgJIAJALQgLANgSAAQgPAAgLgLgAgQgFIAiAAQgBgWgQAAQgPAAgCAWg");
	this.shape_33.setTransform(-73.7,2,0.75,0.75);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAPApIAAhCIgdAAIAABCIgSAAIAAhSIBBAAIAABSg");
	this.shape_34.setTransform(-80,2,0.75,0.75);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgUAqIAAhSIARAAIAAARQAHgSASAAIAAATIgBAAQgLAAgHAHQgGAIAAANIAAAkg");
	this.shape_35.setTransform(8.7,-10.6,0.75,0.75);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgXAfQgLgMAAgSIAAgBQAAgSAKgMQAKgMAOAAQARAAAJAMQAJAMAAATIAAAFIg0AAQADAWASAAQAKAAAKgIIAIAKQgNANgQAAQgPAAgLgMgAgRgFIAiAAQAAgKgEgGQgFgHgIABQgOAAgDAWg");
	this.shape_36.setTransform(3.3,-10.5,0.75,0.75);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgHAqIgdhTIATAAIARA8IATg8IASAAIgcBTg");
	this.shape_37.setTransform(-2.6,-10.6,0.75,0.75);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgSIAAgBQAAgSALgMQALgMAPAAQARAAALAMQALAMgBASIAAABQABASgLAMQgLAMgRAAQgPAAgLgMgAgOgTQgGAIABALIAAABQAAALAFAIQAGAHAIABQAKgBAFgHQAGgIAAgLIAAgBQAAgLgGgIQgGgHgJAAQgIAAgGAHg");
	this.shape_38.setTransform(-8.8,-10.5,0.75,0.75);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgbAfQgKgMgBgSIAAgBQABgSAKgMQAMgMAPAAQARAAAKAMQAMAMAAASIAAABQAAASgMAMQgKAMgRAAQgQAAgLgMgAgOgTQgGAIAAALIAAABQAAALAGAIQAGAHAIABQAJgBAGgHQAGgIAAgLIAAgBQgBgLgFgIQgGgHgJAAQgIAAgGAHg");
	this.shape_39.setTransform(-15.5,-10.5,0.75,0.75);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAWA3IAAgvIgqAAIAAAvIgSAAIAAhtIASAAIAAAuIAqAAIAAguIASAAIAABtg");
	this.shape_40.setTransform(-22.7,-11.6,0.75,0.75);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAcAqIAAhSIARAAIAABSgAgsAqIAAhSIASAAIAAAdIAOAAQAeAAAAAZQAAAbgeABgAgaAbIANAAQANAAABgMQgBgNgNAAIgNAAg");
	this.shape_41.setTransform(-33.8,-10.6,0.75,0.75);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgVAfQgKgMAAgSIAAgBQAAgSAKgMQALgMAPAAQAQAAALAKIgIAOQgJgIgJAAQgIAAgGAHQgGAHAAAMIAAABQAAAMAGAHQAGAHAJAAQAIAAAJgIIAIAMQgLAMgQAAQgPAAgLgMg");
	this.shape_42.setTransform(-40.7,-10.5,0.75,0.75);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgbAfQgLgMAAgSIAAgBQAAgSALgMQAMgMAPAAQARAAAKAMQAMAMAAASIAAABQAAASgMAMQgKAMgRAAQgPAAgMgMgAgOgTQgFAIgBALIAAABQAAALAHAIQAFAHAIABQAJgBAGgHQAGgIAAgLIAAgBQAAgLgGgIQgGgHgJAAQgIAAgGAHg");
	this.shape_43.setTransform(-47,-10.5,0.75,0.75);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgVAfQgLgMAAgSIAAgBQABgSAKgMQALgMAPAAQARAAAKAKIgJAOQgIgIgJAAQgIAAgFAHQgHAHAAAMIAAABQAAAMAHAHQAFAHAJAAQAIAAAKgIIAHAMQgLAMgQAAQgPAAgLgMg");
	this.shape_44.setTransform(-53,-10.5,0.75,0.75);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgXAfQgLgMAAgSIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJAMAAATIAAAFIgzAAQACAWASAAQAKAAAKgIIAIAKQgMANgRAAQgPAAgLgMgAgLgWQgEAHgBAKIAiAAQgBgKgEgGQgFgHgHABQgHAAgFAFg");
	this.shape_45.setTransform(-59,-10.5,0.75,0.75);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AglApIABgPIAFABQAHAAADgLQAEgOAAgrIA3AAIAABSIgSAAIAAhCIgUAAQAAApgHAOQgGAMgOAAg");
	this.shape_46.setTransform(-65.7,-10.5,0.75,0.75);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAbAqIAAhSIASAAIAABSgAgsAqIAAhSIASAAIAAAdIAOAAQAeAAAAAZQAAAbgeABgAgaAbIANAAQANAAAAgMQAAgNgNAAIgNAAg");
	this.shape_47.setTransform(-72.7,-10.6,0.75,0.75);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAPAqIAAhDIgdAAIAABDIgSAAIAAhSIBBAAIAABSg");
	this.shape_48.setTransform(-80,-10.6,0.75,0.75);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJANQAJAMAAARIAAAHIgzAAQABAKAGAGQAGAFAHAAQALAAAJgJIAIAMQgLAMgSAAQgPAAgLgLgAgLgVQgEAGgBAKIAiAAQgCgWgPAAQgHAAgFAGg");
	this.shape_49.setTransform(-6.9,-23.1,0.75,0.75);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAbAqIAAhTIASAAIAABTgAgsAqIAAhTIASAAIAAAeIAOAAQAeAAAAAZQAAAbgeABgAgaAbIANAAQANAAAAgMQAAgOgNAAIgNAAg");
	this.shape_50.setTransform(-14.1,-23.1,0.75,0.75);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAPAqIAAgiIgdAAIAAAiIgSAAIAAhTIASAAIAAAiIAdAAIAAgiIASAAIAABTg");
	this.shape_51.setTransform(-21.5,-23.1,0.75,0.75);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAYAzIAAgSIgwAAIgCASIgPAAIAAgiIAIAAQAIgSAAglIAAgMIA4AAIAABDIALAAIgCAigAgPARIAdAAIAAg0IgWAAQAAAkgHAQg");
	this.shape_52.setTransform(-28.1,-22.5,0.75,0.75);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgSIAAgBQAAgSALgMQALgMAPAAQARAAALAMQAKAMAAASIAAABQAAASgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAIAAALIAAABQAAALAGAIQAGAHAIAAQAJAAAGgHQAGgIAAgLIAAgBQAAgLgGgIQgGgHgJgBQgJABgFAHg");
	this.shape_53.setTransform(-34.6,-23.1,0.75,0.75);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AggAqIAAhTIAiAAQANAAAGAGQAIAGAAAKQAAAMgMAGQAPAEAAAPQAAAMgIAFQgHAHgOAAgAgOAbIAPAAQANABAAgLQAAgMgOABIgOAAgAgOgGIAOAAQAMAAgBgLQAAgKgLAAIgOAAg");
	this.shape_54.setTransform(-40.9,-23.1,0.75,0.75);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgbAfQgKgMgBgSIAAgBQABgSAKgMQAMgMAPAAQAQAAAMAMQAKAMABASIAAABQgBASgKAMQgMAMgQAAQgPAAgMgMgAgOgTQgFAIgBALIAAABQAAALAHAIQAFAHAIAAQAJAAAGgHQAFgHABgMIAAgBQgBgLgFgIQgGgHgJgBQgIABgGAHg");
	this.shape_55.setTransform(-47.5,-23.1,0.75,0.75);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgkA2IAAhqIARAAIAAAOQALgPANAAQANAAAJAKQAKAMAAAUIAAACQAAATgKAMQgJAKgNAAQgNAAgLgOIAAAkgAgNgeQgGAIAAALIAAACQAAALAGAHQAGAIAHgBQAIABAGgIQAGgHAAgLIAAgCQAAgLgGgIQgGgHgIgBQgHABgGAHg");
	this.shape_56.setTransform(-54.1,-22.3,0.75,0.75);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAPAqIAAhEIgdAAIAABEIgSAAIAAhTIBBAAIAABTg");
	this.shape_57.setTransform(-60.9,-23.1,0.75,0.75);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgVAfQgKgMAAgSIAAgBQAAgSAKgMQALgMAPAAQAPAAAMAKIgIAOQgJgIgJAAQgIAAgGAHQgGAIAAALIAAABQAAAMAGAHQAGAHAJAAQAJAAAIgIIAIANQgLALgQAAQgPAAgLgMg");
	this.shape_58.setTransform(-66.9,-23.1,0.75,0.75);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAOAAQARAAAJANQAJAMAAARIAAAHIg0AAQAEAVARAAQALAAAJgJIAIAMQgMAMgRAAQgPAAgLgLgAgRgFIAjAAQgBgWgRAAQgOAAgDAWg");
	this.shape_59.setTransform(-72.9,-23.1,0.75,0.75);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgmA3IAAhtIBFAAIAAARIgzAAIAAAbIAXAAQAQAAAKAIQAKAIAAAPQAAAQgLAJQgKAJgRAAgAgUAmIAWAAQATAAAAgQQAAgRgTAAIgWAAg");
	this.shape_60.setTransform(-79.4,-24.1,0.75,0.75);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AicFpIDBrRIB4AAIjBLRg");
	this.shape_61.setTransform(79.2,-31.6,0.75,0.75);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#CB0927").s().p("AiqEtIChpZIC0AAIiiJZg");
	this.shape_62.setTransform(75.2,9,0.75,0.75);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#DBDBDA").s().p("Aj8HiIBhlqICzAAICipZIBDAAIkBPDg");
	this.shape_63.setTransform(74.1,22.6,0.75,0.75);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#DC052B").s().p("Az2HiIAAvCMAntAAAIkCPCg");
	this.shape_64.setTransform(0,-4.5,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.3,-58.7,190.6,117.4);


(lib.legal2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// legal
	this.addr2 = new lib.dfgdfggg_1();
	this.addr2.parent = this;
	this.addr2.setTransform(0,312.2);
	this.addr2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.addr2).wait(303).to({alpha:1},9,cjs.Ease.get(1)).wait(41).to({alpha:0},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.3,505.2,12.9);


(lib.legal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// legal
	this.addr2 = new lib.dfgdfggg();
	this.addr2.parent = this;
	this.addr2.setTransform(0,159.5);
	this.addr2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.addr2).wait(303).to({alpha:1},9,cjs.Ease.get(1)).wait(41).to({alpha:0},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,286,20.8);


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

}).prototype = getMCSymbolPrototype(lib.ghgf, new cjs.Rectangle(-70.2,-216.4,202.5,202.5), null);


(lib.hgjкопия2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#706F70").s().p("AgoApQgRgRAAgYQAAgXARgRQARgQAXgBQAYAAARARQARARAAAXQAAAYgRARQgQARgZAAQgXAAgRgRgAgigjQgPAQAAATQAAAUAPAQQAOAOAUAAQAUAAAPgOQAPgQAAgUQAAgTgPgQQgPgOgUAAQgTAAgPAOgAAQAgIgBgBIAAgIQAAgLgGgEQgDgBgIAAIgJAAIAAAZIgLAAIAAg/IAWAAQALAAAFADQAKADAAANQAAAHgGAFQgDABgGABQAHABADAFQAEAFAAAFIAAAFIABAHIAAACgAgLAAIAKAAQAGgBAEgBQAFgCABgHQAAgIgEgCQgEgDgJAAIgJAAg");
	this.shape.setTransform(53.4,53.4);

	this.instance = new lib.ClipGroup_9копия2();
	this.instance.parent = this;
	this.instance.setTransform(1,0.5,1,1,0,0,0,51.6,51.6);

	this.instance_1 = new lib.ClipGroup_1_1копия2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(18.6,2.5,1,1,0,0,0,28.2,11.3);

	this.instance_2 = new lib.ClipGroup_2_0копия2();
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

	this.instance_3 = new lib.ClipGroup_3_0копия2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,1,1,0,0,0,111,111);

	this.instance_4 = new lib.ClipGroup_4_1копия2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,1,1,0,0,0,113.1,113.1);

	this.instance_5 = new lib.ClipGroup_5_1копия2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,0,1,1,0,0,0,118.4,118.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hgjкопия2, new cjs.Rectangle(-118.4,-118.4,236.8,236.8), null);


(lib.hgjкопия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#706F70").s().p("AgoApQgRgRAAgYQAAgXARgRQARgQAXgBQAYAAARARQARARAAAXQAAAYgRARQgQARgZAAQgXAAgRgRgAgigjQgPAQAAATQAAAUAPAQQAOAOAUAAQAUAAAPgOQAPgQAAgUQAAgTgPgQQgPgOgUAAQgTAAgPAOgAAQAgIgBgBIAAgIQAAgLgGgEQgDgBgIAAIgJAAIAAAZIgLAAIAAg/IAWAAQALAAAFADQAKADAAANQAAAHgGAFQgDABgGABQAHABADAFQAEAFAAAFIAAAFIABAHIAAACgAgLAAIAKAAQAGgBAEgBQAFgCABgHQAAgIgEgCQgEgDgJAAIgJAAg");
	this.shape.setTransform(53.4,53.4);

	this.instance = new lib.ClipGroup_9копия();
	this.instance.parent = this;
	this.instance.setTransform(1,0.5,1,1,0,0,0,51.6,51.6);

	this.instance_1 = new lib.ClipGroup_1_1копия();
	this.instance_1.parent = this;
	this.instance_1.setTransform(18.6,2.5,1,1,0,0,0,28.2,11.3);

	this.instance_2 = new lib.ClipGroup_2_0копия();
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

	this.instance_3 = new lib.ClipGroup_3_0копия();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,1,1,0,0,0,111,111);

	this.instance_4 = new lib.ClipGroup_4_1копия();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,1,1,0,0,0,113.1,113.1);

	this.instance_5 = new lib.ClipGroup_5_1копия();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,0,1,1,0,0,0,118.4,118.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hgjкопия, new cjs.Rectangle(-118.4,-118.4,236.8,236.8), null);


(lib.ghgfкопия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hgjкопия();
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

}).prototype = getMCSymbolPrototype(lib.ghgfкопия, new cjs.Rectangle(-70.2,-216.4,202.5,202.5), null);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hgjкопия2();
	this.instance.parent = this;
	this.instance.setTransform(6.8,-30.3,0.57,0.57,0,0,0,0,-0.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#706F6F").s().p("AgrBHIAAiNIBWAAIAAAOIhHAAIAAAyIA/AAIAAAMIg/AAIAAAzIBIAAIAAAOg");
	this.shape.setTransform(52.1,13,0.57,0.57);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#706F6F").s().p("AgGBHIgziNIARAAIAoB3IAqh3IAQAAIgzCNg");
	this.shape_1.setTransform(44.9,13.1,0.57,0.57);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#706F6F").s().p("AgHBHIAAiNIAPAAIAACNg");
	this.shape_2.setTransform(39.7,13,0.57,0.57);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#706F6F").s().p("AgHBHIAAh/IgnAAIAAgOIBdAAIAAAOIgoAAIAAB/g");
	this.shape_3.setTransform(35.1,13,0.57,0.57);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#706F6F").s().p("AAtBHIgNglIg/AAIgOAlIgQAAIA2iNIAOAAIA3CNgAgaAUIA1AAIgbhHg");
	this.shape_4.setTransform(28.9,13,0.57,0.57);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#706F6F").s().p("AgGBHIgziNIARAAIAoB3IAqh3IAQAAIgzCNg");
	this.shape_5.setTransform(22.3,13.1,0.57,0.57);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#706F6F").s().p("AgrA1QgRgUAAggIAAgBQAAgfARgVQARgUAaAAQAbAAARAUQARAUAAAgIAAABQAAAfgRAVQgRAUgbAAQgaAAgRgUgAgggqQgMAQAAAaIAAABQAAAZAMARQAOAQASAAQAUAAAMgQQANgQAAgaIAAgBQAAgZgNgRQgMgQgUAAQgTAAgNAQg");
	this.shape_6.setTransform(14.9,13,0.57,0.57);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAPAAIBJBvIAAhvIAPAAIAACNg");
	this.shape_7.setTransform(6.8,13,0.57,0.57);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAPAAIBJBvIAAhvIAPAAIAACNg");
	this.shape_8.setTransform(-1.1,13,0.57,0.57);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#706F6F").s().p("AgHBHIAAiNIAOAAIAACNg");
	this.shape_9.setTransform(-6.5,13,0.57,0.57);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAOAAIBKBvIAAhvIAPAAIAACNg");
	this.shape_10.setTransform(-14.9,13,0.57,0.57);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#706F6F").s().p("AAgBHIgig3IghAAIAAA3IgPAAIAAiNIAxAAQAYAAAMANQALAMAAARIAAABQAAAfgiAJIAnA6gAgjACIAfAAQAQAAAKgHQAJgIAAgOQAAgdghAAIghAAg");
	this.shape_11.setTransform(-22.1,13,0.57,0.57);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#706F6F").s().p("AgrA1QgRgUAAggIAAgBQAAgfARgVQARgUAaAAQAbAAARAUQARAUAAAgIAAABQAAAfgRAVQgRAUgbAAQgaAAgRgUgAgggqQgMAQAAAaIAAABQAAAZAMARQAOAQASAAQAUAAAMgQQANgQAAgaIAAgBQAAgZgNgRQgMgQgUAAQgTAAgNAQg");
	this.shape_12.setTransform(-30.1,13,0.57,0.57);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#706F6F").s().p("AgwBHIAAiNIAwAAQAWAAAMAMQAJAKAAAOQAAAYgXAJQAdAIAAAZIAAABQAAASgNAKQgOAKgWAAgAghA5IAhAAQAQAAAJgGQAJgHAAgMIAAgBQAAgZgiAAIghAAgAghgGIAfAAQANAAAIgHQAJgHAAgMQAAgMgIgGQgIgGgNAAIggAAg");
	this.shape_13.setTransform(-37.6,13,0.57,0.57);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#706F6F").s().p("AAVAcIAAgqIgVAcIgUgcIAAAqIgIAAIAAg3IAIAAIAUAdIAVgdIAIAAIAAA3g");
	this.shape_14.setTransform(67.7,39.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#706F6F").s().p("AAYAcIAAg3IAJAAIAAA3gAgfAcIAAg3IAIAAIAAAVIAPAAQAKAAAFAEQAHAEAAAIQgBAJgFAFQgGAEgJAAgAgXAVIAPAAQAHAAACgDQAEgDAAgFQAAgEgEgDQgDgDgGAAIgPAAg");
	this.shape_15.setTransform(59.6,39.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#706F6F").s().p("AARAcIAAgYIghAAIAAAYIgIAAIAAg3IAIAAIAAAYIAhAAIAAgYIAIAAIAAA3g");
	this.shape_16.setTransform(52,39.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#706F6F").s().p("AAQAcIAAgYIgfAAIAAAYIgJAAIAAg3IAJAAIAAAYIAfAAIAAgYIAJAAIAAA3g");
	this.shape_17.setTransform(45.1,39.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#706F6F").s().p("AgUAVQgJgIABgNQgBgLAJgJQAJgJALAAQANAAAIAJQAIAIAAAMQAAANgIAIQgJAJgMAAQgLAAgJgJgAgOgPQgGAHAAAIQAAAKAGAGQAGAGAIAAQAJAAAGgGQAGgGAAgKQAAgIgGgHQgGgGgJAAQgIAAgGAGg");
	this.shape_18.setTransform(38.2,39.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#706F6F").s().p("AARAcIAAgrIghArIgIAAIAAg3IAIAAIAAAsIAhgsIAIAAIAAA3g");
	this.shape_19.setTransform(31.1,39.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#706F6F").s().p("AAUAjIAAgOIgwAAIAAg4IAJAAIAAAxIAfAAIAAgxIAIAAIAAAxIAJAAIgCAVg");
	this.shape_20.setTransform(24.6,40.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#706F6F").s().p("AgSAYQgGgEAAgIQAAgKAGgDQAHgFALAAQAIAAAIACIAAgBQABgIgFgEQgEgEgIAAQgIAAgJAFIgCgHQAKgGAJAAQANAAAGAHQAGAGAAALIAAAhIgJAAIAAgIQgHAKgMAAQgJAAgGgGgAgLADQgFADABAGQAAAEADAEQAFACAGAAQAGAAAGgDQAGgFgBgHIAAgFQgJgCgHAAQgHAAgEADg");
	this.shape_21.setTransform(17.4,39.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#706F6F").s().p("AgYAcIAAg3IAbAAQAJAAAEADQAFAFABAGQAAAJgKAEQANACAAALQgBAHgFAEQgGAEgJAAgAgPAVIARAAQAHAAADgCQAEgDAAgEQAAgEgEgDQgEgCgHAAIgQAAgAgPgDIAQAAQAFAAADgCQAEgDAAgEQAAgDgDgDQgDgCgGAAIgQAAg");
	this.shape_22.setTransform(11.4,39.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#706F6F").s().p("AgUAVQgJgJAAgMQAAgKAJgKQAJgJALAAQANAAAIAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgMAAgIgJgAgOgPQgGAHAAAIQAAAKAGAGQAGAGAIAAQAJAAAGgGQAGgGAAgKQAAgIgGgHQgHgGgIAAQgIAAgGAGg");
	this.shape_23.setTransform(4.4,39.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#706F6F").s().p("AAQAcIAAgYIggAAIAAAYIgIAAIAAg3IAIAAIAAAYIAgAAIAAgYIAJAAIAAA3g");
	this.shape_24.setTransform(-2.6,39.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#706F6F").s().p("AAQAcIAAgYIgfAAIAAAYIgJAAIAAg3IAJAAIAAAYIAfAAIAAgYIAJAAIAAA3g");
	this.shape_25.setTransform(-9.5,39.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#706F6F").s().p("AARAcIAAgrIghArIgIAAIAAg3IAIAAIAAAsIAhgsIAIAAIAAA3g");
	this.shape_26.setTransform(-16.4,39.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#706F6F").s().p("AAQAcIAAgYIgfAAIAAAYIgJAAIAAg3IAJAAIAAAYIAfAAIAAgYIAJAAIAAA3g");
	this.shape_27.setTransform(-26.6,39.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#706F6F").s().p("AgSAeQgIgIAAgNQAAgMAIgIQAIgJAKAAQAMAAAIAJQAHAIAAANIAAADIgsAAQABAIAFAFQAFAFAIAAQAKAAAIgIIAFAFQgJALgPAAQgLgBgIgIgAgLgHQgGAGAAAGIAjAAQAAgGgFgGQgEgFgJgBQgGAAgFAGgAAEgbIAAgLIAKAAIAAALgAgOgbIAAgLIAKAAIAAALg");
	this.shape_28.setTransform(-33.2,38.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#706F6F").s().p("AAXAjIAAgOIgtAAIgBAOIgHAAIAAgVIAGAAQAHgOAAgZIAAgKIAoAAIAAAxIAIAAIgBAVgAgIgTQAAAUgHANIAdAAIAAgpIgWAAg");
	this.shape_29.setTransform(-39.9,40.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#706F6F").s().p("AAjAcIgTgaIgMANIAAANIgHAAIAAgNIgMgNIgTAaIgKAAIAYgfIgXgYIALAAIAdAgIAAggIAHAAIAAAgIAdggIALAAIgXAYIAYAfg");
	this.shape_30.setTransform(-47.8,39.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#706F6F").s().p("AgUAVQgIgIAAgNQAAgLAIgJQAJgJALAAQANAAAIAJQAJAIgBAMQABANgJAIQgJAJgMAAQgLAAgJgJgAgOgPQgGAHAAAIQAAAKAGAGQAGAGAIAAQAJAAAGgGQAGgGAAgKQAAgIgGgHQgHgGgIAAQgIAAgGAGg");
	this.shape_31.setTransform(-55.7,39.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#706F6F").s().p("AgcAmIAAhLIAcAAQAOAAAHAGQAIAHAAALQAAAMgJAGQgIAGgMAAIgTAAIAAAbgAgTADIATAAQAIAAAGgDQAGgEAAgJQAAgIgGgEQgEgEgKAAIgTAAg");
	this.shape_32.setTransform(-62.6,38.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#706F6F").s().p("AgCARIABgOIgLAIIgDgFIANgGIgNgFIADgFIALAIIgBgOIAEAAIgBAOIAMgIIADAFIgNAFIANAGIgDAFIgMgIIABAOg");
	this.shape_33.setTransform(-68.9,36.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.5,-97.7,144.9,141.8);


(lib.main2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// final
	this.instance = new lib.ghgfкопия();
	this.instance.parent = this;
	this.instance.setTransform(58.6,264,1.2,1.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(298).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(46).to({alpha:0},6,cjs.Ease.get(1)).wait(1));

	// Слой 19
	this.instance_1 = new lib.ghggg_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(24.8,499.8,1.1,1.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(298).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(46).to({alpha:0},6,cjs.Ease.get(1)).wait(1));

	// mask-in-out - копия: 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A6zcLMArEg4VMBKyAAAMAAAA4Vg");
	var mask_graphics_1 = new cjs.Graphics().p("Eg7DAcLMAkwg4VMBRXAAAMAAAA4Vg");
	var mask_graphics_2 = new cjs.Graphics().p("Eg7LAcLMAfCg4VMBXVAAAMAAAA4Vg");
	var mask_graphics_3 = new cjs.Graphics().p("Eg7SAcLMAZ7g4VMBcqAAAMAAAA4Vg");
	var mask_graphics_4 = new cjs.Graphics().p("Eg7YAcLMAVag4VMBhXAAAMAAAA4Vg");
	var mask_graphics_5 = new cjs.Graphics().p("Eg7dAcLMARfg4VMBlcAAAMAAAA4Vg");
	var mask_graphics_6 = new cjs.Graphics().p("Eg7hAcLMAOLg4VMBo5AAAMAAAA4Vg");
	var mask_graphics_7 = new cjs.Graphics().p("Eg7lAcLMALeg4VMBrtAAAMAAAA4Vg");
	var mask_graphics_8 = new cjs.Graphics().p("Eg7oAcLMAJWg4VMBt7AAAMAAAA4Vg");
	var mask_graphics_9 = new cjs.Graphics().p("Eg7qAcLMAH2g4VMBvfAAAMAAAA4Vg");
	var mask_graphics_10 = new cjs.Graphics().p("Eg7rAcLMAG8g4VMBwbAAAMAAAA4Vg");
	var mask_graphics_11 = new cjs.Graphics().p("Eg7sAcLMAGqg4VMBwvAAAMAAAA4Vg");
	var mask_graphics_62 = new cjs.Graphics().p("Eg9tAcLMAAAg4VMB7bAAAMgtIA4Vg");
	var mask_graphics_63 = new cjs.Graphics().p("Eg0fAcLMAAAg4VMBo/AAAMgmYA4Vg");
	var mask_graphics_64 = new cjs.Graphics().p("EgsKAcLMAAAg4VMBYVAAAMggTA4Vg");
	var mask_graphics_65 = new cjs.Graphics().p("EgktAcLMAAAg4VMBJbAAAMga2A4Vg");
	var mask_graphics_66 = new cjs.Graphics().p("A+IcLMAAAg4VMA8RAAAMgWCA4Vg");
	var mask_graphics_67 = new cjs.Graphics().p("A4ccLMAAAg4VMAw5AAAMgR4A4Vg");
	var mask_graphics_68 = new cjs.Graphics().p("AzncLMAAAg4VMAnPAAAMgOWA4Vg");
	var mask_graphics_69 = new cjs.Graphics().p("AvqcLMAAAg4VIfVAAMgLdA4Vg");
	var mask_graphics_70 = new cjs.Graphics().p("At3cLMAAAg4VIZNAAMgJOA4Vg");
	var mask_graphics_71 = new cjs.Graphics().p("AuJcLMAAAg4VIU0AAMgHnA4Vg");
	var mask_graphics_72 = new cjs.Graphics().p("AuUcLMAAAg4VISLAAMgGoA4Vg");
	var mask_graphics_73 = new cjs.Graphics().p("AuWcLMAAAg4VIRTAAMgGUA4Vg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:582.7,y:142.3}).wait(1).to({graphics:mask_graphics_1,x:697.2,y:142.3}).wait(1).to({graphics:mask_graphics_2,x:614.8,y:142.3}).wait(1).to({graphics:mask_graphics_3,x:541.1,y:142.3}).wait(1).to({graphics:mask_graphics_4,x:476,y:142.3}).wait(1).to({graphics:mask_graphics_5,x:419.7,y:142.3}).wait(1).to({graphics:mask_graphics_6,x:372,y:142.3}).wait(1).to({graphics:mask_graphics_7,x:333,y:142.3}).wait(1).to({graphics:mask_graphics_8,x:302.6,y:142.3}).wait(1).to({graphics:mask_graphics_9,x:280.9,y:142.3}).wait(1).to({graphics:mask_graphics_10,x:267.9,y:142.3}).wait(1).to({graphics:mask_graphics_11,x:263.6,y:142.3}).wait(1).to({graphics:null,x:0,y:0}).wait(50).to({graphics:mask_graphics_62,x:299.4,y:142}).wait(1).to({graphics:mask_graphics_63,x:225.1,y:142}).wait(1).to({graphics:mask_graphics_64,x:157.9,y:142}).wait(1).to({graphics:mask_graphics_65,x:97.7,y:142}).wait(1).to({graphics:mask_graphics_66,x:44.6,y:142}).wait(1).to({graphics:mask_graphics_67,x:-1.4,y:142}).wait(1).to({graphics:mask_graphics_68,x:-40.3,y:142}).wait(1).to({graphics:mask_graphics_69,x:-72.1,y:142}).wait(1).to({graphics:mask_graphics_70,x:-88.8,y:142}).wait(1).to({graphics:mask_graphics_71,x:-90.6,y:142}).wait(1).to({graphics:mask_graphics_72,x:-91.7,y:142}).wait(1).to({graphics:mask_graphics_73,x:-91.9,y:142}).wait(287));

	// text0
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVAgQgLgMAAgTIAAgBQAAgTALgMQALgMAQAAQAPAAAMALIgJANQgIgIgKAAQgIAAgGAHQgGAIAAAMIAAABQAAAMAGAHQAGAIAJAAQAJgBAJgHIAIAMQgMAMgPAAQgQAAgLgMg");
	this.shape.setTransform(170.9,121.8,1.1,1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbAgQgLgMAAgTIAAgBQAAgSALgNQALgMAQAAQARAAALAMQALANAAASIAAABQAAASgLAMQgLANgRAAQgQAAgLgMgAgOgUQgGAIAAAMIAAABQAAALAGAIQAGAIAIAAQAKAAAFgIQAGgIAAgLIAAgBQAAgLgGgIQgGgIgJAAQgJAAgFAHg");
	this.shape_1.setTransform(161.5,121.8,1.1,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVAgQgLgMAAgTIAAgBQAAgTALgMQALgMAPAAQAQAAALALIgIANQgJgIgJAAQgIAAgGAHQgGAIAAAMIAAABQAAAMAGAHQAGAIAIAAQAKgBAJgHIAIAMQgMAMgQAAQgQAAgKgMg");
	this.shape_2.setTransform(152.5,121.8,1.1,1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXAgQgMgLAAgUIAAgBQAAgTALgMQAJgMAPAAQASAAAJAMQAJANAAATIgBAGIg0AAQADAWASAAQAMAAAIgJIAIALQgLANgSAAQgPAAgLgMgAgRgFIAjAAQgBgXgRAAQgPAAgCAXg");
	this.shape_3.setTransform(143.4,121.8,1.1,1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgmAqIABgPIAFAAQAIAAADgLQAEgPAAgrIA4AAIAABUIgSAAIAAhEIgVAAQAAAqgHAPQgGAMgOAAg");
	this.shape_4.setTransform(133.3,121.8,1.1,1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAcAqIAAhTIASAAIAABTgAgtAqIAAhTIATAAIAAAdIANAAQAfAAABAaQAAAcgfAAgAgaAcIANAAQAOgBAAgNQAAgNgOABIgNAAg");
	this.shape_5.setTransform(122.9,121.8,1.1,1.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAPAqIAAhEIgdAAIAABEIgSAAIAAhTIBBAAIAABTg");
	this.shape_6.setTransform(111.9,121.8,1.1,1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AARAqIAAg3IghA3IgRAAIAAhTIARAAIAAA2IAhg2IARAAIAABTg");
	this.shape_7.setTransform(97.5,121.8,1.1,1.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgmAqIABgPIAFAAQAIAAACgLQAEgOAAgsIA5AAIAABUIgSAAIAAhEIgWAAQAAAqgGAPQgGAMgPAAg");
	this.shape_8.setTransform(87.2,121.8,1.1,1.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZAlQgIgHAAgMIAAgBQAAgNAIgGQAJgHAOAAQAKAAAIADIAAgDQAAgSgRAAQgLAAgLAFIgDgPQANgGANAAQAiAAAAAhIAAA0IgSAAIAAgKQgIAMgPAAQgLAAgHgHgAgPAQIAAABQAAAGAEAEQAEADAGAAQAHAAAFgEQAFgFABgHIAAgJQgHgDgKAAQgPAAAAAOg");
	this.shape_9.setTransform(78.2,121.8,1.1,1.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAZA0IAAgTIgyAAIgBATIgQAAIAAgjIAIAAQAJgRAAgnIAAgMIA5AAIAABEIALAAIgCAjgAgPARIAdAAIAAg0IgWAAQAAAjgHARg");
	this.shape_10.setTransform(68.8,122.8,1.1,1.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgeAiIAHgOQALAIAKAAQAPAAAAgLQAAgGgEgCQgFgDgKAAIgEAAIAAgMIAEAAQAJgBAEgCQAEgCAAgIQAAgIgMAAQgMgBgIAHIgGgMQALgKARAAQAMAAAIAGQAIAGAAAKQAAAOgNAGQAPAEAAAQQAAAKgJAIQgIAHgOAAQgRAAgNgKg");
	this.shape_11.setTransform(59.8,121.8,1.1,1.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgbAgQgLgMAAgTIAAgBQAAgSALgNQALgMAQAAQARAAALAMQALANAAASIAAABQAAASgLAMQgLANgRAAQgQAAgLgMgAgOgUQgGAIAAAMIAAABQAAALAGAIQAGAIAIAAQAKAAAFgIQAGgIAAgLIAAgBQAAgLgGgIQgGgIgJAAQgJAAgFAHg");
	this.shape_12.setTransform(51.3,121.8,1.1,1.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVAgQgLgMAAgTIAAgBQAAgTALgMQALgMAQAAQAPAAAMALIgJANQgIgIgKAAQgIAAgGAHQgGAIAAAMIAAABQAAAMAGAHQAGAIAJAAQAJgBAJgHIAIAMQgMAMgPAAQgQAAgLgMg");
	this.shape_13.setTransform(42.2,121.8,1.1,1.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAcAqIAAhTIASAAIAABTgAgtAqIAAhTIASAAIAAAdIAOAAQAfAAAAAaQAAAcgeAAgAgbAcIAOAAQANgBAAgNQAAgNgNABIgOAAg");
	this.shape_14.setTransform(27.1,121.8,1.1,1.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAWAqIAAg3IgWAkIAAAAIgWgkIAAA3IgSAAIAAhTIASAAIAWAlIAWglIASAAIAABTg");
	this.shape_15.setTransform(15.3,121.8,1.1,1.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAaA0IAAgTIgzAAIgBATIgQAAIAAgiIAIAAQAJgTAAgmIAAgMIA6AAIAABFIAKAAIgCAigAgQASIAfAAIAAg1IgXAAQAAAjgIASg");
	this.shape_16.setTransform(145,104.2,1.1,1.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgZAlQgIgHAAgMIAAgBQAAgNAJgGQAIgHAOAAQAJAAAJADIAAgDQAAgSgRAAQgKAAgMAFIgDgPQANgGANAAQAiAAAAAhIAAA0IgSAAIAAgKQgIAMgPAAQgLAAgHgHgAgPAQIAAABQAAAGAEAEQAEADAGAAQAHAAAFgEQAFgFAAgHIAAgJQgGgDgKAAQgPAAAAAOg");
	this.shape_17.setTransform(135.3,103.2,1.1,1.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgeAiIAHgOQALAIAJAAQAQAAAAgLQAAgGgFgCQgEgDgLAAIgEAAIAAgNIAEAAQAJAAAEgCQAFgDAAgGQAAgKgMABQgMAAgIAGIgHgNQAMgJARAAQAMAAAIAGQAIAHAAAJQAAAOgNAGQAPAEAAAPQAAALgJAIQgJAHgNAAQgSAAgMgKg");
	this.shape_18.setTransform(126.9,103.2,1.1,1.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgZAlQgIgHAAgMIAAgBQAAgNAIgGQAJgHAOAAQAIAAAKADIAAgDQAAgSgRAAQgKAAgMAFIgEgPQAOgGANAAQAiAAAAAhIAAA0IgSAAIAAgKQgIAMgPAAQgLAAgHgHgAgPAQIAAABQAAANAOAAQAHAAAFgEQAFgFAAgHIAAgJQgGgDgKAAQgPAAAAAOg");
	this.shape_19.setTransform(118.4,103.2,1.1,1.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAQArIAAgjIgfAAIAAAjIgSAAIAAhVIASAAIAAAjIAfAAIAAgjIASAAIAABVg");
	this.shape_20.setTransform(109.1,103.2,1.1,1.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgZAlQgIgHAAgMIAAgBQAAgNAJgGQAHgHAOAAQAJAAAKADIAAgDQAAgSgSAAQgKAAgLAFIgDgPQANgGANAAQAiAAAAAhIAAA0IgSAAIAAgKQgJAMgOAAQgLAAgHgHgAgPAQIAAABQAAANAOAAQAHAAAFgEQAFgFAAgHIAAgJQgGgDgKAAQgPAAAAAOg");
	this.shape_21.setTransform(95,103.2,1.1,1.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAPArIgUgkIgLANIAAAXIgTAAIAAhVIATAAIAAAoIAdgoIAUAAIgcAkIAfAxg");
	this.shape_22.setTransform(86.7,103.2,1.1,1.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgXAgQgMgLAAgUIAAgBQAAgTAKgMQAKgMAPAAQASAAAJAMQAJANAAATIAAAGIg1AAQADAWASgBQAMAAAIgIIAJALQgMANgSAAQgQAAgKgMgAgRgFIAjAAQAAgKgFgHQgEgGgJAAQgPAAgCAXg");
	this.shape_23.setTransform(77,103.2,1.1,1.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AggArIAAhVIAiAAQANAAAHAHQAIAFAAALQAAAMgNAHQAQAEAAAOQAAAMgIAHQgIAFgOABgAgOAcIAOAAQAPAAAAgLQAAgLgPAAIgOAAgAgOgHIAOAAQAMAAAAgKQAAgKgMAAIgOAAg");
	this.shape_24.setTransform(68,103.2,1.1,1.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgXAgQgMgLAAgUIAAgBQAAgTALgMQAKgMAPAAQARAAAJAMQAJAMAAAUIAAAGIg1AAQADAWASgBQALAAAJgIIAJALQgMANgSAAQgQAAgKgMgAgLgWQgFAGgBALIAjAAQgBgXgQAAQgHAAgFAGg");
	this.shape_25.setTransform(54,103.2,1.1,1.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgXAgQgMgLAAgUIAAgBQAAgTALgMQAKgMAPAAQAQAAAKAMQAJANAAATIAAAGIg0AAQABAWATgBQALAAAJgIIAIALQgLANgSAAQgPAAgLgMgAgRgFIAjAAQgBgKgEgHQgFgGgHAAQgPAAgDAXg");
	this.shape_26.setTransform(44.7,103.2,1.1,1.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgmAqIABgPIAFAAQAIAAADgLQAEgPAAgrIA4AAIAABUIgSAAIAAhEIgVAAQAAAqgHAPQgGAMgOAAg");
	this.shape_27.setTransform(34.6,103.2,1.1,1.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgbAgQgLgMAAgTIAAgBQAAgSALgNQALgMAQAAQARAAALAMQALAMAAATIAAABQAAASgLAMQgLANgRAAQgQAAgLgMgAgOgTQgGAHAAAMIAAABQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMIAAgBQAAgLgGgIQgGgIgJAAQgJAAgFAIg");
	this.shape_28.setTransform(25.6,103.2,1.1,1.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgnA4IAAhvIBHAAIAAAQIg0AAIAAAcIAXAAQARAAAKAJQAKAIAAAPQAAARgLAJQgLAJgRAAgAgUAnIAWAAQATAAAAgRQAAgRgTAAIgWAAg");
	this.shape_29.setTransform(15.5,101.7,1.1,1.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AilFpIDArRICLAAIi/LRg");
	this.shape_30.setTransform(216.9,70.1,0.971,0.971);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CB0927").s().p("AjFFdIC7q5IDQAAIi7K5g");
	this.shape_31.setTransform(210.4,131.3,0.971,0.971);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D1D1D1").s().p("AkkIuIBwmjIDRAAIC7q5IBNAAIkqRcg");
	this.shape_32.setTransform(208.7,151.7,0.971,0.971);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#DC052B").s().p("AxyHEIDyuHIfzAAIjyOHg");
	this.shape_33.setTransform(103.3,111.3,1.2,1.2);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},74).wait(286));

	// pic0
	this.instance_2 = new lib.pic0_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(288,1);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},74).wait(286));

	// mask-in-out (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_62 = new cjs.Graphics().p("A+GcLMAtGg4VMBOUAAAMAAAA4Vg");
	var mask_1_graphics_63 = new cjs.Graphics().p("Eg9XAcLMAmcg4VMBUTAAAMAAAA4Vg");
	var mask_1_graphics_64 = new cjs.Graphics().p("Eg9CAcLMAgZg4VMBZsAAAMAAAA4Vg");
	var mask_1_graphics_65 = new cjs.Graphics().p("Eg8wAcLMAbAg4VMBehAAAMAAAA4Vg");
	var mask_1_graphics_66 = new cjs.Graphics().p("Eg8gAcLMAWOg4VMBizAAAMAAAA4Vg");
	var mask_1_graphics_67 = new cjs.Graphics().p("Eg8SAcLMASGg4VMBmfAAAMAAAA4Vg");
	var mask_1_graphics_68 = new cjs.Graphics().p("Eg8GAcLMAOmg4VMBpoAAAMAAAA4Vg");
	var mask_1_graphics_69 = new cjs.Graphics().p("Eg79AcLMALvg4VMBsMAAAMAAAA4Vg");
	var mask_1_graphics_70 = new cjs.Graphics().p("Eg71AcLMAJgg4VMBuLAAAMAAAA4Vg");
	var mask_1_graphics_71 = new cjs.Graphics().p("Eg7wAcLMAH7g4VMBvmAAAMAAAA4Vg");
	var mask_1_graphics_72 = new cjs.Graphics().p("Eg7tAcLMAG+g4VMBwdAAAMAAAA4Vg");
	var mask_1_graphics_73 = new cjs.Graphics().p("Eg7sAcLMAGqg4VMBwvAAAMAAAA4Vg");
	var mask_1_graphics_137 = new cjs.Graphics().p("Eg66AcLMAAAg4VMB11AAAMgrFA4Vg");
	var mask_1_graphics_138 = new cjs.Graphics().p("EgyMAcLMAAAg4VMBkZAAAMgktA4Vg");
	var mask_1_graphics_139 = new cjs.Graphics().p("EgqTAcLMAAAg4VMBUnAAAMge8A4Vg");
	var mask_1_graphics_140 = new cjs.Graphics().p("EgjPAcLMAAAg4VMBGfAAAMgZxA4Vg");
	var mask_1_graphics_141 = new cjs.Graphics().p("A9AcLMAAAg4VMA6BAAAMgVOA4Vg");
	var mask_1_graphics_142 = new cjs.Graphics().p("A3mcLMAAAg4VMAvNAAAMgRRA4Vg");
	var mask_1_graphics_143 = new cjs.Graphics().p("AzCcLMAAAg4VMAmFAAAMgN7A4Vg");
	var mask_1_graphics_144 = new cjs.Graphics().p("AvTcLMAAAg4VIenAAMgLNA4Vg");
	var mask_1_graphics_145 = new cjs.Graphics().p("AtscLMAAAg4VIYyAAMgJEA4Vg");
	var mask_1_graphics_146 = new cjs.Graphics().p("AuEcLMAAAg4VIUoAAMgHiA4Vg");
	var mask_1_graphics_147 = new cjs.Graphics().p("AuTcLMAAAg4VISJAAMgGoA4Vg");
	var mask_1_graphics_148 = new cjs.Graphics().p("AuWcLMAAAg4VIRTAAMgGUA4Vg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_1_graphics_62,x:597.2,y:142.3}).wait(1).to({graphics:mask_1_graphics_63,x:706.5,y:142.3}).wait(1).to({graphics:mask_1_graphics_64,x:622.4,y:142.3}).wait(1).to({graphics:mask_1_graphics_65,x:547.1,y:142.3}).wait(1).to({graphics:mask_1_graphics_66,x:480.6,y:142.3}).wait(1).to({graphics:mask_1_graphics_67,x:423,y:142.3}).wait(1).to({graphics:mask_1_graphics_68,x:374.3,y:142.3}).wait(1).to({graphics:mask_1_graphics_69,x:334.5,y:142.3}).wait(1).to({graphics:mask_1_graphics_70,x:303.4,y:142.3}).wait(1).to({graphics:mask_1_graphics_71,x:281.3,y:142.3}).wait(1).to({graphics:mask_1_graphics_72,x:268,y:142.3}).wait(1).to({graphics:mask_1_graphics_73,x:263.6,y:142.3}).wait(1).to({graphics:null,x:0,y:0}).wait(63).to({graphics:mask_1_graphics_137,x:310.6,y:142}).wait(1).to({graphics:mask_1_graphics_138,x:234.4,y:142}).wait(1).to({graphics:mask_1_graphics_139,x:165.4,y:142}).wait(1).to({graphics:mask_1_graphics_140,x:103.7,y:142}).wait(1).to({graphics:mask_1_graphics_141,x:49.2,y:142}).wait(1).to({graphics:mask_1_graphics_142,x:2,y:142}).wait(1).to({graphics:mask_1_graphics_143,x:-38,y:142}).wait(1).to({graphics:mask_1_graphics_144,x:-70.7,y:142}).wait(1).to({graphics:mask_1_graphics_145,x:-87.7,y:142}).wait(1).to({graphics:mask_1_graphics_146,x:-90.1,y:142}).wait(1).to({graphics:mask_1_graphics_147,x:-91.6,y:142}).wait(1).to({graphics:mask_1_graphics_148,x:-91.9,y:142}).wait(212));

	// pic1
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#7E7E7E").s().p("AAhAlIAAgrQAAgQgMAAQgNAAAAAQIAAArIgOAAIAAgrQAAgQgNAAQgGAAgEAEQgDAFAAAHIAAArIgQAAIAAhIIAQAAIAAALQAIgMALAAQANAAAFAMQAIgMAOAAQAKAAAGAHQAGAGAAAMIAAAwg");
	this.shape_34.setTransform(479,149.5,0.865,0.865);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#7E7E7E").s().p("AgXAbQgKgKAAgQIAAgBQAAgQAKgLQAKgKANAAQAPAAAJAKQAKALAAAQIAAAAQAAARgKAKQgJALgPAAQgNAAgKgLgAgMgRQgFAHAAAKIAAAAQAAALAFAHQAFAGAHAAQAIAAAFgGQAFgHAAgKIAAgBQAAgJgFgIQgFgGgIAAQgHAAgFAGg");
	this.shape_35.setTransform(470.5,149.5,0.865,0.865);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#7E7E7E").s().p("AgXApQgJgKAAgRIAAgCQAAgRAJgKQAIgKAMABQAMAAAIAMIAAglIAQAAIAABiIgQAAIAAgLQgIANgMgBQgMAAgIgJgAgLgEQgFAFAAALIAAABQAAALAFAGQAFAGAGAAQAHAAAFgFQAGgIAAgJIAAgCQAAgKgGgGQgFgGgHgBQgGAAgFAHg");
	this.shape_36.setTransform(463.5,148.5,0.865,0.865);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#7E7E7E").s().p("AgUAcQgKgLAAgQIAAgBQAAgQAJgLQAJgKAMAAQAPAAAIALQAIALAAAPIAAAGIgtAAQACATAPAAQAKAAAIgIIAHAKQgKALgPAAQgOAAgJgKgAgOgEIAeAAQgCgUgOAAQgNAAgBAUg");
	this.shape_37.setTransform(457,149.5,0.865,0.865);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#7E7E7E").s().p("AgUAcQgKgLAAgQIAAgBQAAgQAJgLQAJgKANAAQANAAAJALQAIALAAAPIgBAGIgtAAQADATAPAAQAKAAAHgIIAIAKQgKALgQAAQgMAAgKgKgAgJgTQgFAGgBAJIAfAAQgBgJgEgGQgEgFgGAAQgGAAgEAFg");
	this.shape_38.setTransform(450.8,149.5,0.865,0.865);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#7E7E7E").s().p("AgSAlIAAhIIAQAAIAAAPQAGgQAPAAIAAARIgBAAQgUAAAAAYIAAAgg");
	this.shape_39.setTransform(445.8,149.5,0.865,0.865);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#7E7E7E").s().p("AgdAwIAAhfIA7AAIAAAPIgrAAIAAAbIAmAAIAAANIgmAAIAAAog");
	this.shape_40.setTransform(440.4,148.5,0.865,0.865);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#7E7E7E").s().p("AgSAlIAAhIIAQAAIAAAOQAGgQAPABIAAARIgBAAQgUAAAAAYIAAAgg");
	this.shape_41.setTransform(472.7,137.6,0.865,0.865);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#7E7E7E").s().p("AgUAcQgKgLAAgQIAAgBQAAgQAJgKQAJgLAMAAQAPAAAIALQAIAKAAARIAAAFIgtAAQACASAQAAQAJAAAIgHIAHAJQgLAMgOAAQgOAAgJgKgAgOgEIAdAAQgBgUgOAAQgMAAgCAUg");
	this.shape_42.setTransform(467.1,137.6,0.865,0.865);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#7E7E7E").s().p("AgGAlIgahJIARAAIAPA1IARg1IAQAAIgZBJg");
	this.shape_43.setTransform(461.2,137.6,0.865,0.865);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#7E7E7E").s().p("AgXAcQgKgMAAgPIAAgBQAAgQAKgKQAKgLANAAQAPAAAJALQAKAKAAAQIAAABQAAAPgKAMQgJAKgPAAQgNAAgKgKgAgMgRQgFAHAAAKIAAABQAAAJAFAIQAFAGAHAAQAIAAAFgGQAFgHAAgKIAAgBQAAgKgFgGQgFgIgIABQgHAAgFAGg");
	this.shape_44.setTransform(454.9,137.6,0.865,0.865);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#7E7E7E").s().p("AgXAcQgKgMAAgPIAAgBQAAgQAKgKQAKgLANAAQAPAAAJALQAKAKAAAQIAAABQAAAPgKAMQgJAKgPAAQgNAAgKgKgAgMgRQgFAHAAAKIAAABQAAAJAFAIQAFAGAHAAQAIAAAFgGQAFgHAAgKIAAgBQAAgKgFgGQgFgIgIABQgHAAgFAGg");
	this.shape_45.setTransform(448.1,137.6,0.865,0.865);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#7E7E7E").s().p("AATAwIAAgpIglAAIAAApIgQAAIAAhfIAQAAIAAAoIAlAAIAAgoIAQAAIAABfg");
	this.shape_46.setTransform(440.8,136.6,0.865,0.865);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#7E7E7E").s().p("AgdAsIAFgNQAEADAFAAQAFAAAEgIIgahIIARAAIAQA1IAQg1IAQAAIgaBKQgGATgOAAQgIAAgIgDg");
	this.shape_47.setTransform(403.9,148.7,0.865,0.865);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#7E7E7E").s().p("AgXApQgJgKAAgRIAAgDQAAgQAJgKQAIgKAMAAQANAAAHANIAAglIAQAAIAABiIgQAAIAAgMQgIAOgMAAQgMAAgIgKgAgLgEQgFAFAAAKIAAACQAAALAFAGQAEAHAHgBQAIAAAEgGQAGgGAAgLIAAgCQAAgJgGgGQgEgGgIAAQgHgBgEAHg");
	this.shape_48.setTransform(397.1,146.7,0.865,0.865);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#7E7E7E").s().p("AgXAbQgKgKAAgRIAAAAQAAgPAKgMQAKgKANAAQAPAAAJAKQAKALAAAQIAAAAQAAAQgKALQgKALgOAAQgOAAgJgLgAgMgRQgFAHAAAKIAAAAQAAALAFAGQAFAIAHAAQAIgBAFgGQAFgHAAgKIAAgBQAAgKgFgHQgFgGgIAAQgHAAgFAGg");
	this.shape_49.setTransform(390.4,147.8,0.865,0.865);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#7E7E7E").s().p("AgYAdIAFgMQALAIAJAAQAKAAAAgIQAAgFgNgHQgKgEgEgDQgGgFAAgJQAAgKAHgFQAHgGAJAAQANAAAJAGIgEANQgLgGgHAAQgIAAAAAHQAAAFANAGQAKAFADADQAGAGAAAIQAAAKgHAGQgGAGgLAAQgNAAgMgJg");
	this.shape_50.setTransform(384.3,147.8,0.865,0.865);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#7E7E7E").s().p("AggAwIAAhdIAQAAIAAAMQAIgOAMAAQAMAAAIAKQAJAKAAARIAAADQAAAQgJAKQgIAKgMAAQgLAAgJgNIAAAggAgLgaQgFAHAAAJIAAACQAAAKAFAGQAFAHAGgBQAHAAAFgFQAFgHAAgKIAAgCQAAgKgFgGQgFgHgHABQgGAAgFAGg");
	this.shape_51.setTransform(378.4,148.6,0.865,0.865);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#7E7E7E").s().p("AgVAgQgHgHAAgKIAAAAQAAgXAaAAQAHAAAJADIAAgDQAAgPgPAAQgJAAgKAEIgDgNQAMgFALAAQAdAAAAAdIAAAsIgPAAIAAgJQgIALgMAAQgJAAgGgGgAgNAOIAAABQAAALAMAAQAGAAAEgEQAFgEAAgGIAAgIQgGgCgIAAQgNAAAAAMg");
	this.shape_52.setTransform(371.6,147.8,0.865,0.865);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#7E7E7E").s().p("AANAyIAAgtQABgPgNAAQgNAAgBAQIAAAsIgPAAIAAhjIAPAAIAAAlQAIgMALAAQALAAAGAHQAGAHAAALIAAAxg");
	this.shape_53.setTransform(365.4,146.7,0.865,0.865);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#7E7E7E").s().p("AARAwIgTgiIgGAAIgLAAIAAAiIgQAAIAAhfIAjAAQAOAAAKAIQAJAIAAAOQAAAVgUAHIAXAlgAgTAAIASAAQASAAAAgQQAAgRgSAAIgSAAg");
	this.shape_54.setTransform(358.7,146.8,0.865,0.865);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#7E7E7E").s().p("AgSAlIAAhIIAQAAIAAAPQAGgQAPAAIAAARIgBAAQgUAAAAAYIAAAgg");
	this.shape_55.setTransform(390.5,135.8,0.865,0.865);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#7E7E7E").s().p("AgUAcQgKgKAAgRIAAgBQAAgQAJgKQAJgLANAAQAOAAAIALQAIALAAAPIAAAGIguAAQADATAPAAQAKAAAIgIIAHAKQgKALgQAAQgNAAgJgKgAgJgSQgFAFgBAJIAeAAQgBgUgNAAQgGAAgEAGg");
	this.shape_56.setTransform(385,135.9,0.865,0.865);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#7E7E7E").s().p("AgHAlIgZhJIAQAAIAQA0IARg0IAQAAIgaBJg");
	this.shape_57.setTransform(379,135.9,0.865,0.865);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#7E7E7E").s().p("AgXAbQgKgKAAgQIAAgBQAAgQAKgKQAKgLANAAQAPAAAJALQAKAKAAAQIAAABQAAAQgKAKQgKALgOAAQgOAAgJgLgAgMgRQgFAHAAAKIAAABQAAAKAFAHQAFAGAHAAQAIAAAFgGQAFgHAAgKIAAgBQAAgKgFgHQgFgGgIAAQgHAAgFAGg");
	this.shape_58.setTransform(372.8,135.9,0.865,0.865);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#7E7E7E").s().p("AgXAbQgKgKAAgQIAAgBQAAgQAKgKQAKgLANAAQAPAAAJALQAKAKAAAQIAAABQAAAQgKAKQgJALgPAAQgNAAgKgLgAgMgRQgFAHAAAKIAAABQAAAKAFAHQAFAGAHAAQAIAAAFgGQAFgHAAgKIAAgBQAAgKgFgHQgFgGgIAAQgHAAgFAGg");
	this.shape_59.setTransform(365.9,135.9,0.865,0.865);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#7E7E7E").s().p("AATAwIAAgpIglAAIAAApIgQAAIAAhfIAQAAIAAAoIAlAAIAAgoIAQAAIAABfg");
	this.shape_60.setTransform(358.6,134.9,0.865,0.865);

	this.instance_3 = new lib._2b();
	this.instance_3.parent = this;
	this.instance_3.setTransform(396.9,10.7,0.865,0.865);

	this.instance_4 = new lib._2a();
	this.instance_4.parent = this;
	this.instance_4.setTransform(314,11,0.865,0.865);

	var maskedShapeInstanceList = [this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.instance_3,this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]},62).to({state:[]},87).wait(211));

	// text1
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AAQApIAAg1IggA1IgRAAIAAhRIASAAIAAA1IAfg1IASAAIAABRg");
	this.shape_61.setTransform(186.5,139.9,1.1,1.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AglApIABgPIAFABQAIAAACgLQAEgPAAgqIA3AAIAABSIgSAAIAAhDIgVAAQAAAqgGAOQgGAMgOAAg");
	this.shape_62.setTransform(176.4,140,1.1,1.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgXAfQgLgLAAgUIAAAAQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJAMAAASIAAAGIgzAAQADAWARAAQAKAAAKgIIAIALQgLAMgSAAQgPAAgLgMgAgQgEIAiAAQgBgYgQAAQgQAAgBAYg");
	this.shape_63.setTransform(167.8,140,1.1,1.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAZAyIAAgSIgxAAIgBASIgQAAIAAghIAIAAQAJgSAAgmIAAgKIA4AAIAABCIAKAAIgCAhgAgPARIAdAAIAAgzIgVAAQAAAjgIAQg");
	this.shape_64.setTransform(158.3,141,1.1,1.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgTIAAAAQAAgSALgMQALgMAPAAQARAAAKAMQALAMAAASIAAAAQAAATgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAHAAAMIAAAAQAAAMAGAIQAGAHAIAAQAJAAAGgHQAGgHAAgMIAAgBQAAgMgGgHQgGgIgJAAQgJAAgFAIg");
	this.shape_65.setTransform(148.8,140,1.1,1.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AAWApIAAg2IgWAkIgVgjIAAA1IgRAAIAAhRIASAAIAUAlIAWglIASAAIAABRg");
	this.shape_66.setTransform(138.4,139.9,1.1,1.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgXAfQgLgLAAgUIAAAAQAAgSAKgMQAKgMAOAAQARAAAJAMQAJAMAAASIAAAGIgzAAQACAWASAAQAKAAAKgIIAIALQgLAMgSAAQgPAAgLgMgAgRgEIAjAAQgCgYgQAAQgOAAgDAYg");
	this.shape_67.setTransform(123.9,140,1.1,1.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AAbApIAAhRIASAAIAABRgAgsApIAAhRIASAAIAAAdIAOAAQAeAAAAAZQAAAbgeAAgAgaAbIANAAQANAAAAgMQAAgNgNAAIgNAAg");
	this.shape_68.setTransform(113.3,139.9,1.1,1.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AAPApIAAgiIgdAAIAAAiIgSAAIAAhRIASAAIAAAhIAdAAIAAghIASAAIAABRg");
	this.shape_69.setTransform(102.5,139.9,1.1,1.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AAYAyIAAgSIgwAAIgBASIgQAAIAAghIAIAAQAJgSAAgmIAAgKIA3AAIAABCIAKAAIgBAhgAgPARIAdAAIAAgzIgVAAQAAAjgIAQg");
	this.shape_70.setTransform(92.8,141,1.1,1.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgTIAAAAQAAgSALgMQALgMAPAAQARAAALAMQAKALAAATIAAAAQAAATgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAHAAAMIAAAAQAAAMAGAIQAGAHAIAAQAJAAAGgHQAGgHAAgMIAAgBQAAgMgGgHQgGgIgJAAQgJAAgFAIg");
	this.shape_71.setTransform(83.2,140,1.1,1.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgfApIAAhRIAiAAQALAAAIAFQAHAGAAAKQAAANgNAGQAQAEABAOQgBAXgdAAgAgOAbIAOAAQAOAAABgLQgBgLgOAAIgOAAgAgOgGIANAAQANAAAAgLQAAgKgMAAIgOAAg");
	this.shape_72.setTransform(74,139.9,1.1,1.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgbAfQgLgMABgTIAAAAQgBgSALgMQALgMAQAAQAQAAALAMQALALAAATIAAAAQAAATgLAMQgLAMgQAAQgQAAgLgMgAgOgTQgFAHAAAMIAAAAQAAAMAFAIQAGAHAIAAQAJAAAGgHQAGgHgBgMIAAgBQABgMgGgHQgGgIgJAAQgJAAgFAIg");
	this.shape_73.setTransform(64.4,140,1.1,1.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgkA2IAAhpIARAAIAAANQALgPANAAQANAAAJAKQAKAMAAAUIAAACQAAATgKAMQgJAKgNAAQgNAAgLgOIAAAkgAgNgeQgGAHAAAMIAAACQAAALAGAHQAGAHAHAAQAIAAAGgHQAFgHAAgLIAAgCQAAgMgFgHQgGgHgIAAQgHAAgGAHg");
	this.shape_74.setTransform(54.6,141.1,1.1,1.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AAPApIAAhCIgdAAIAABCIgSAAIAAhRIBBAAIAABRg");
	this.shape_75.setTransform(44.7,139.9,1.1,1.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgVAfQgKgMAAgTIAAAAQAAgSAKgMQALgMAPAAQAQAAALALIgIANQgJgJgJAAQgIAAgGAIQgGAHAAAMIAAAAQAAANAGAHQAGAHAJAAQAIAAAJgIIAIAMQgMAMgPAAQgPAAgLgMg");
	this.shape_76.setTransform(35.9,140,1.1,1.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgXAfQgLgLAAgUIAAAAQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJAMAAASIAAAGIgzAAQADAWAQAAQALAAAJgIIAJALQgMAMgRAAQgQAAgKgMgAgQgEIAiAAQgBgYgQAAQgPAAgCAYg");
	this.shape_77.setTransform(27,140,1.1,1.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgaAtQgKgMAAgWIAAgCQgBgXAFgMQAGgRASgEIAmgJIAEAOIgmAKQgRADgCATQAHgOATAAQAOAAAKALQAKAMAAAQIAAABQABASgKAMQgKALgSAAQgQAAgKgMgAgNgDQgGAHABALIAAABQgBALAGAIQAGAHAHAAQAJAAAFgHQAGgIAAgLIAAgBQAAgLgGgHQgFgHgJAAQgHAAgGAHg");
	this.shape_78.setTransform(17.6,138.4,1.1,1.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAOAAQARAAAJAMQAJAMAAASIAAAHIg0AAQAEAVARAAQALAAAJgJIAIALQgMANgRAAQgPAAgLgLgAgRgFIAjAAQgBgWgRAAQgOAAgDAWg");
	this.shape_79.setTransform(102.7,121.5,1.1,1.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AAbApIAAhSIASAAIAABSgAgsApIAAhSIARAAIAAAeIAPAAQAeAAAAAZQAAAbgeAAgAgbAcIAPAAQAMgBAAgNQAAgMgMAAIgPAAg");
	this.shape_80.setTransform(92.1,121.5,1.1,1.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AAPApIAAghIgdAAIAAAhIgSAAIAAhSIASAAIAAAjIAdAAIAAgjIASAAIAABSg");
	this.shape_81.setTransform(81.3,121.5,1.1,1.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgeApIAAhSIARAAIAAAeIANAAQAfAAAAAZQAAAbgeAAgAgNAcIANAAQAOgBAAgNQAAgMgOAAIgNAAg");
	this.shape_82.setTransform(72.6,121.5,1.1,1.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AglApIABgPIAFAAQAIAAACgKQAEgPAAgqIA3AAIAABSIgRAAIAAhDIgWAAQABApgHAPQgFAMgPAAg");
	this.shape_83.setTransform(62.7,121.5,1.1,1.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgYAkQgIgHAAgLIAAgBQAAgNAIgGQAIgHAOAAQAKAAAIADIAAgDQAAgRgRAAQgLAAgKAFIgEgPQAOgGAMAAQAhAAAAAhIAAAyIgRAAIAAgKQgJAMgNAAQgLAAgHgHgAgPAQIAAABQAAAGAEADQAEAEAGAAQAHAAAFgFQAFgEAAgHIAAgJQgFgDgLAAQgPAAAAAOg");
	this.shape_84.setTransform(53.9,121.5,1.1,1.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAOApIgUgiIgKANIAAAVIgSAAIAAhSIASAAIAAAoIAcgoIAVAAIgcAjIAeAvg");
	this.shape_85.setTransform(45.8,121.5,1.1,1.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AARApIAAg1IghA1IgRAAIAAhSIARAAIAAA1IAhg1IARAAIAABSg");
	this.shape_86.setTransform(36.1,121.5,1.1,1.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AAPApIAAghIgdAAIAAAhIgSAAIAAhSIASAAIAAAjIAdAAIAAgjIASAAIAABSg");
	this.shape_87.setTransform(26.5,121.5,1.1,1.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AghAyIAFgOQAGACAEAAQAHAAAEgJIgehSIATAAIASA9IATg9IATAAIgeBVQgHAVgQAAQgKAAgIgDg");
	this.shape_88.setTransform(17.2,122.8,1.1,1.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AAWApIAAg2IgWAjIgVgjIAAA2IgSAAIAAhSIASAAIAVAlIAWglIASAAIAABSg");
	this.shape_89.setTransform(145.1,103.1,1.1,1.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAOAAQARAAAJAMQAJAMAAATIAAAFIg0AAQADAWARAAQALAAAKgIIAIAKQgMANgRAAQgPAAgLgLgAgRgFIAjAAQgCgXgQABQgOgBgDAXg");
	this.shape_90.setTransform(135.1,103.1,1.1,1.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AARApIAAgcIgOAAIgPAcIgVAAIAUgfQgRgHAAgRQAAgbAeAAIAiAAIAABSgAgJgXQgDADAAAHQAAANANAAIAQAAIAAgaIgNAAQgJAAgEADg");
	this.shape_91.setTransform(125.6,103.1,1.1,1.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AglApIABgPIAFABQAIAAACgLQAEgOAAgrIA3AAIAABSIgSAAIAAhDIgVAAQAAAqgGAOQgFAMgPAAg");
	this.shape_92.setTransform(116.2,103.1,1.1,1.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AggApIAAhSIAiAAQANABAGAFQAIAGAAAKQAAANgMAFQAPAFAAAOQAAAXgdAAgAgOAbIAPAAQANAAAAgKQAAgMgOAAIgOAAgAgOgGIAOAAQAMAAAAgKQAAgKgMAAIgOAAg");
	this.shape_93.setTransform(107.7,103.1,1.1,1.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgYAkQgIgHAAgMIAAgBQAAgMAIgHQAIgGAOAAQAIAAAKADIAAgDQAAgRgRAAQgKAAgLAFIgEgPQANgGANAAQAhAAAAAhIAAAyIgRAAIAAgKQgJAMgNAAQgLAAgHgHgAgPAQIAAAAQAAANAOAAQAHAAAFgEQAFgFAAgHIAAgIQgIgDgIAAQgPAAAAAOg");
	this.shape_94.setTransform(98.4,103.1,1.1,1.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgIApIAAhCIgXAAIAAgQIA/AAIAAAQIgXAAIAABCg");
	this.shape_95.setTransform(90.6,103.1,1.1,1.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgVAfQgKgLAAgTIAAgBQAAgSALgMQAKgMAQAAQAQAAAKAKIgIAOQgJgJgJABQgIgBgFAIQgGAHAAAMIAAABQAAAMAGAHQAFAHAJAAQAJAAAJgIIAHAMQgLAMgQAAQgPAAgLgMg");
	this.shape_96.setTransform(82.7,103.1,1.1,1.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AAZAyIAAgSIgxAAIgCASIgPAAIAAghIAIAAQAIgRAAgnIAAgLIA4AAIAABDIALAAIgCAhgAgPARIAdAAIAAgzIgWAAQAAAjgHAQg");
	this.shape_97.setTransform(73.5,104,1.1,1.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJAMAAATIAAAFIgzAAQACAWASAAQAKAAAKgIIAIAKQgLANgSAAQgPAAgLgLgAgQgFIAiAAQgBgKgEgGQgFgHgHABQgQgBgBAXg");
	this.shape_98.setTransform(64.2,103.1,1.1,1.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgkA2IAAhqIASAAIAAAOQAJgPAOAAQANAAAJAKQAKAMAAATIAAADQAAATgKALQgJALgNAAQgNAAgKgOIAAAkgAgNgeQgGAIAAALIAAACQAAALAGAHQAGAHAHAAQAIAAAGgHQAGgHAAgLIAAgCQAAgMgGgIQgGgGgIAAQgHgBgGAIg");
	this.shape_99.setTransform(54.8,104.3,1.1,1.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AAPApIAAhCIgdAAIAABCIgSAAIAAhSIBBAAIAABSg");
	this.shape_100.setTransform(44.9,103.1,1.1,1.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AAbApIAAhSIASAAIAABSgAgsApIAAhSIARAAIAAAdIAOAAQAeAAAAAaQABAOgJAGQgIAHgNAAgAgbAbIAOAAQANAAAAgNQAAgNgNABIgOAAg");
	this.shape_101.setTransform(29.7,103.1,1.1,1.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AAWApIAAg2IgWAjIAAAAIgWgjIAAA2IgRAAIAAhSIASAAIAVAlIAWglIARAAIAABSg");
	this.shape_102.setTransform(18.1,103.1,1.1,1.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AARAqIAAgdIgOAAIgPAdIgVAAIAUggQgRgGAAgSQAAgbAeAAIAiAAIAABTgAgJgXQgDADAAAHQAAANANAAIAQAAIAAgaIgNAAQgJAAgEADg");
	this.shape_103.setTransform(71.7,84.6,1.1,1.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AAQAqIAAgiIgfAAIAAAiIgRAAIAAhTIARAAIAAAiIAfAAIAAgiIARAAIAABTg");
	this.shape_104.setTransform(62.8,84.6,1.1,1.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AAZAzIAAgTIgxAAIgCATIgPAAIAAgiIAIAAQAIgRAAgnIAAgLIA4AAIAABDIALAAIgCAigAgPARIAdAAIAAgzIgWAAQAAAigHARg");
	this.shape_105.setTransform(53.1,85.6,1.1,1.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgSIAAgBQAAgSALgMQALgMAPAAQARAAALAMQAKAMAAASIAAABQAAASgLAMQgKAMgRAAQgPAAgLgMgAgOgTQgGAIAAALIAAABQAAALAGAIQAGAIAIAAQAKAAAFgIQAGgHAAgMIAAgBQAAgLgGgIQgGgIgJAAQgIAAgGAIg");
	this.shape_106.setTransform(43.5,84.6,1.1,1.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgZAqIAAhTIAzAAIAAAQIghAAIAABDg");
	this.shape_107.setTransform(35.8,84.6,1.1,1.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJAMAAASIAAAHIgzAAQADAVAQAAQAMAAAIgJIAJAMQgMAMgRAAQgPAAgLgLgAgQgFIAiAAQgBgWgQAAQgPAAgCAWg");
	this.shape_108.setTransform(27.3,84.6,1.1,1.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgbApQgNgPAAgZIAAgBQAAgYANgQQAOgPAUAAQAUAAAOAMIgJAPQgMgKgNAAQgLAAgJAKQgIALAAARIAAABQAAARAIALQAJALAMAAQAMAAANgLIAJANQgPAOgVAAQgUAAgNgPg");
	this.shape_109.setTransform(18.1,83.1,1.1,1.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AilFpIDArRICLAAIi/LRg");
	this.shape_110.setTransform(217.7,70.1,0.971,0.971);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#CB0927").s().p("AjFFdIC7q5IDQAAIi7K5g");
	this.shape_111.setTransform(211.1,131.3,0.971,0.971);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#D1D1D1").s().p("AkkIuIBwmjIDRAAIC7q5IBNAAIkqRcg");
	this.shape_112.setTransform(209.5,151.7,0.971,0.971);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#DC052B").s().p("AxyHEIDyuHIfzAAIjyOHg");
	this.shape_113.setTransform(104,111.3,1.2,1.2);

	var maskedShapeInstanceList = [this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61}]},62).to({state:[]},87).wait(211));

	// mask-in-out - копия (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_137 = new cjs.Graphics().p("A6zcLMArEg4VMBKyAAAMAAAA4Vg");
	var mask_2_graphics_138 = new cjs.Graphics().p("Eg7UAcLMAkwg4VMBR5AAAMAAAA4Vg");
	var mask_2_graphics_139 = new cjs.Graphics().p("Eg7sAcLMAfDg4VMBYVAAAMAAAA4Vg");
	var mask_2_graphics_140 = new cjs.Graphics().p("Eg8AAcLMAZ6g4VMBeHAAAMAAAA4Vg");
	var mask_2_graphics_141 = new cjs.Graphics().p("Eg8TAcLMAVag4VMBjNAAAMAAAA4Vg");
	var mask_2_graphics_142 = new cjs.Graphics().p("Eg8jAcLMARfg4VMBnoAAAMAAAA4Vg");
	var mask_2_graphics_143 = new cjs.Graphics().p("Eg8wAcLMAOLg4VMBrWAAAMAAAA4Vg");
	var mask_2_graphics_144 = new cjs.Graphics().p("Eg87AcLMALeg4VMBuZAAAMAAAA4Vg");
	var mask_2_graphics_145 = new cjs.Graphics().p("Eg9EAcLMAJXg4VMBwyAAAMAAAA4Vg");
	var mask_2_graphics_146 = new cjs.Graphics().p("Eg9KAcLMAH2g4VMByfAAAMAAAA4Vg");
	var mask_2_graphics_147 = new cjs.Graphics().p("Eg9OAcLMAG9g4VMBzfAAAMAAAA4Vg");
	var mask_2_graphics_148 = new cjs.Graphics().p("Eg9PAcLMAGqg4VMBz1AAAMAAAA4Vg");
	var mask_2_graphics_211 = new cjs.Graphics().p("Eg66AcLMAAAg4VMB11AAAMgrFA4Vg");
	var mask_2_graphics_212 = new cjs.Graphics().p("EgyMAcLMAAAg4VMBkZAAAMgktA4Vg");
	var mask_2_graphics_213 = new cjs.Graphics().p("EgqTAcLMAAAg4VMBUnAAAMge8A4Vg");
	var mask_2_graphics_214 = new cjs.Graphics().p("EgjPAcLMAAAg4VMBGfAAAMgZxA4Vg");
	var mask_2_graphics_215 = new cjs.Graphics().p("A9AcLMAAAg4VMA6BAAAMgVOA4Vg");
	var mask_2_graphics_216 = new cjs.Graphics().p("A3mcLMAAAg4VMAvNAAAMgRRA4Vg");
	var mask_2_graphics_217 = new cjs.Graphics().p("AzCcLMAAAg4VMAmFAAAMgN7A4Vg");
	var mask_2_graphics_218 = new cjs.Graphics().p("AvTcLMAAAg4VIenAAMgLNA4Vg");
	var mask_2_graphics_219 = new cjs.Graphics().p("AtscLMAAAg4VIYyAAMgJEA4Vg");
	var mask_2_graphics_220 = new cjs.Graphics().p("AuEcLMAAAg4VIUoAAMgHiA4Vg");
	var mask_2_graphics_221 = new cjs.Graphics().p("AuTcLMAAAg4VISJAAMgGoA4Vg");
	var mask_2_graphics_222 = new cjs.Graphics().p("AuWcLMAAAg4VIRTAAMgGUA4Vg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(137).to({graphics:mask_2_graphics_137,x:582.7,y:142.3}).wait(1).to({graphics:mask_2_graphics_138,x:698.9,y:142.3}).wait(1).to({graphics:mask_2_graphics_139,x:618.1,y:142.3}).wait(1).to({graphics:mask_2_graphics_140,x:545.7,y:142.3}).wait(1).to({graphics:mask_2_graphics_141,x:481.9,y:142.3}).wait(1).to({graphics:mask_2_graphics_142,x:426.6,y:142.3}).wait(1).to({graphics:mask_2_graphics_143,x:379.8,y:142.3}).wait(1).to({graphics:mask_2_graphics_144,x:341.6,y:142.3}).wait(1).to({graphics:mask_2_graphics_145,x:311.8,y:142.3}).wait(1).to({graphics:mask_2_graphics_146,x:290.5,y:142.3}).wait(1).to({graphics:mask_2_graphics_147,x:277.8,y:142.3}).wait(1).to({graphics:mask_2_graphics_148,x:273.5,y:142.3}).wait(1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_2_graphics_211,x:310.6,y:142}).wait(1).to({graphics:mask_2_graphics_212,x:234.4,y:142}).wait(1).to({graphics:mask_2_graphics_213,x:165.4,y:142}).wait(1).to({graphics:mask_2_graphics_214,x:103.7,y:142}).wait(1).to({graphics:mask_2_graphics_215,x:49.2,y:142}).wait(1).to({graphics:mask_2_graphics_216,x:2,y:142}).wait(1).to({graphics:mask_2_graphics_217,x:-38,y:142}).wait(1).to({graphics:mask_2_graphics_218,x:-70.7,y:142}).wait(1).to({graphics:mask_2_graphics_219,x:-87.7,y:142}).wait(1).to({graphics:mask_2_graphics_220,x:-90.1,y:142}).wait(1).to({graphics:mask_2_graphics_221,x:-91.6,y:142}).wait(1).to({graphics:mask_2_graphics_222,x:-91.9,y:142}).wait(138));

	// pic2
	this.instance_5 = new lib._3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(307,-10,0.899,0.899);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(137).to({_off:false},0).to({_off:true},86).wait(137));

	// text2
	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AAQAqIAAg2IggA2IgRAAIAAhSIASAAIAAA1IAfg1IASAAIAABSg");
	this.shape_114.setTransform(112.5,131.8,1.1,1.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AAOAqIgTgjIgLANIAAAWIgSAAIAAhSIASAAIAAAmIAcgmIAUAAIgbAjIAeAvg");
	this.shape_115.setTransform(103.7,131.8,1.1,1.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgkA2IAAhpIARAAIAAANQAKgPAOAAQANAAAJALQAKALAAAUIAAACQAAATgKAMQgJAKgNAAQgOAAgKgOIAAAkgAgNgeQgGAHAAAMIAAACQAAALAGAIQAGAGAHAAQAIAAAGgGQAFgIAAgLIAAgCQAAgMgFgIQgGgHgIAAQgHAAgGAIg");
	this.shape_116.setTransform(93.9,133,1.1,1.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgSIAAgBQAAgSALgMQALgMAPAAQARAAALAMQAKAMAAASIAAAAQAAATgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAHAAAMIAAAAQAAAMAGAIQAGAIAIgBQAKABAFgIQAGgHAAgMIAAgBQAAgLgGgIQgGgIgJAAQgJAAgFAIg");
	this.shape_117.setTransform(83.7,131.8,1.1,1.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgbAtQgKgMABgVIAAgCQAAgYAEgMQAGgRARgEIAngJIAEAPIgmAJQgSAEgBASQAIgOASAAQAOAAAKALQAKAMAAAQIAAABQABASgLAMQgKALgRAAQgRAAgKgMgAgNgCQgFAGAAALIAAABQAAAMAFAHQAFAHAIAAQAJAAAGgHQAEgHAAgMIAAgBQABgLgGgGQgGgIgIAAQgIAAgFAIg");
	this.shape_118.setTransform(73.9,130.2,1.1,1.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AghAxIAGgNQAEADAGAAQAHAAADgJIgdhSIASAAIASA8IATg8IASAAIgcBTQgIAWgRABQgJgBgIgEg");
	this.shape_119.setTransform(64.4,133.1,1.1,1.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AggAqIAAhSIAiAAQANgBAGAGQAIAGAAAKQAAANgMAFQAQAFAAAOQgBAMgHAFQgJAHgNAAgAgOAbIAOAAQAPAAAAgLQAAgLgPABIgOAAgAgOgGIAOAAQAMAAAAgLQAAgJgMgBIgOAAg");
	this.shape_120.setTransform(51.2,131.8,1.1,1.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgSIAAgBQAAgSALgMQALgMAPAAQARAAALAMQALAMgBASIAAAAQABATgLAMQgLAMgRAAQgPAAgLgMgAgOgTQgGAHABAMIAAAAQAAAMAFAIQAGAIAIgBQAKABAFgIQAFgHAAgMIAAgBQAAgLgFgIQgGgIgJAAQgIAAgGAIg");
	this.shape_121.setTransform(41.5,131.8,1.1,1.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AAPAqIAAhEIgdAAIAABEIgSAAIAAhSIBBAAIAABSg");
	this.shape_122.setTransform(31.9,131.8,1.1,1.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AAQAqIAAg2IggA2IgRAAIAAhSIASAAIAAA1IAfg1IASAAIAABSg");
	this.shape_123.setTransform(22.4,131.8,1.1,1.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgIAqIAAhEIgXAAIAAgOIA/AAIAAAOIgXAAIAABEg");
	this.shape_124.setTransform(13.8,131.8,1.1,1.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AARApIgRgdIgQAdIgTAAIAagpIgZgoIATAAIAPAbIARgbIASAAIgZAoIAaApg");
	this.shape_125.setTransform(141.5,113.3,1.1,1.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgUIAAAAQAAgSAKgMQAKgMAPAAQAQAAAJANQAJALAAASIAAAHIgzAAQACAVARAAQALAAAKgJIAIAMQgLAMgSAAQgPAAgLgLgAgQgEIAiAAQgBgYgQAAQgPAAgCAYg");
	this.shape_126.setTransform(132.9,113.4,1.1,1.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgVAfQgLgMAAgTIAAAAQABgSAKgMQALgMAPAAQARAAAKALIgJANQgIgJgJAAQgIAAgFAIQgHAHAAAMIAAAAQAAAMAHAIQAFAHAIAAQAKAAAIgIIAIAMQgMAMgPAAQgPAAgLgMg");
	this.shape_127.setTransform(124.6,113.4,1.1,1.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AggApIAAhRIAiAAQAMAAAHAFQAIAGAAAKQgBANgMAGQARAEgBAOQAAAXgdAAgAgOAbIAOAAQAOAAAAgLQABgLgPAAIgOAAgAgOgGIANAAQAMAAABgLQAAgKgMAAIgOAAg");
	this.shape_128.setTransform(116.1,113.3,1.1,1.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AARApIAAgcIgOAAIgPAcIgVAAIAUgfQgRgGAAgRQAAgbAeAAIAiAAIAABRgAgJgXQgEADAAAHQAAANAOAAIAQAAIAAgaIgNAAQgJAAgEADg");
	this.shape_129.setTransform(102,113.3,1.1,1.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AglApIABgPIAFABQAHAAADgLQAEgPAAgqIA3AAIAABSIgSAAIAAhDIgUAAQAAAqgHAOQgFAMgPAAg");
	this.shape_130.setTransform(92.6,113.4,1.1,1.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AAZAzIAAgTIgxAAIgBATIgQAAIAAgiIAIAAQAJgSAAglIAAgLIA4AAIAABCIAKAAIgCAigAgPARIAdAAIAAg0IgVAAQAAAjgIARg");
	this.shape_131.setTransform(83.5,114.4,1.1,1.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AAOApIgTgiIgLANIAAAVIgSAAIAAhRIASAAIAAAmIAdgmIAUAAIgbAiIAdAvg");
	this.shape_132.setTransform(70.2,113.3,1.1,1.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgTIAAAAQAAgSALgMQAKgMAQAAQARAAAKAMQALAMAAASIAAAAQAAATgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAIAAALIAAAAQAAAMAGAIQAGAHAIAAQAJAAAGgHQAGgIAAgLIAAgBQAAgMgGgHQgGgIgJAAQgJAAgFAIg");
	this.shape_133.setTransform(60.4,113.4,1.1,1.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AAZAzIAAgTIgxAAIgBATIgQAAIAAgiIAIAAQAJgSAAglIAAgLIA4AAIAABCIAKAAIgCAigAgPARIAdAAIAAg0IgWAAQAAAkgHAQg");
	this.shape_134.setTransform(50.5,114.4,1.1,1.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgZAkQgHgHAAgMIAAgBQAAgNAIgGQAIgGANAAQAJAAAKADIAAgDQAAgRgRAAQgJAAgMAEIgDgOQAMgGAOAAQAgAAAAAgIAAAzIgRAAIAAgKQgJAMgOAAQgKAAgIgHgAgPAPIAAABQAAANAOAAQAHAAAFgEQAFgFAAgHIAAgIQgIgDgHAAQgPAAgBANg");
	this.shape_135.setTransform(41,113.4,1.1,1.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgVAfQgKgMAAgTIAAAAQAAgSALgMQAKgMAQAAQAPAAALALIgIANQgJgJgJAAQgIAAgGAIQgFAHAAAMIAAAAQAAAMAGAIQAFAHAJAAQAIAAAKgIIAHAMQgLAMgQAAQgPAAgLgMg");
	this.shape_136.setTransform(32.7,113.4,1.1,1.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgYAkQgIgHAAgMIAAgBQAAgMAIgHQAIgGAOAAQAIAAAKADIAAgDQAAgRgRAAQgKAAgLAEIgEgOQANgGANAAQAhAAAAAgIAAAzIgRAAIAAgKQgJAMgNAAQgLAAgHgHgAgPAPIAAABQAAANAOAAQAHAAAFgEQAFgFAAgHIAAgIQgIgDgIAAQgPAAAAANg");
	this.shape_137.setTransform(23.8,113.4,1.1,1.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AAQApIAAgiIgfAAIAAAiIgRAAIAAhRIARAAIAAAhIAfAAIAAghIARAAIAABRg");
	this.shape_138.setTransform(14.8,113.3,1.1,1.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AAWApIAAg2IgWAkIAAAAIgVgkIAAA2IgRAAIAAhRIASAAIAUAkIAWgkIARAAIAABRg");
	this.shape_139.setTransform(167.4,94.9,1.1,1.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgaAfQgLgLAAgTIAAgBQAAgSALgMQALgMAPAAQARAAALAMQAKAMAAASIAAABQAAASgLAMQgKAMgRAAQgPAAgLgMgAgOgTQgGAIAAALIAAABQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMIAAgBQAAgLgGgIQgGgIgJAAQgIAAgGAIg");
	this.shape_140.setTransform(157,94.9,1.1,1.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgkA2IAAhpIARAAIAAANQAKgPAOAAQANAAAJAKQAKAMAAAUIAAACQAAATgKALQgJALgNAAQgOAAgKgOIAAAkgAgNgeQgGAHAAANIAAABQAAALAGAIQAGAGAHABQAIgBAGgGQAFgIAAgLIAAgBQAAgNgGgHQgFgIgIAAQgHAAgGAIg");
	this.shape_141.setTransform(147.2,96.1,1.1,1.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgaAfQgLgLAAgTIAAgBQAAgSALgMQALgMAPAAQARAAALAMQAKAMAAASIAAABQAAASgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAHAAAMIAAABQAAAMAGAHQAGAIAIAAQAJAAAGgIQAGgHAAgMIAAgBQAAgLgGgIQgGgIgJAAQgIAAgGAIg");
	this.shape_142.setTransform(137,94.9,1.1,1.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgaAtQgLgMABgWIAAgCQgBgYAFgLQAGgSASgDIAmgJIAEAOIgmAJQgSAFgBASQAIgPASAAQAOAAAKAMQAKAMAAAQIAAABQABASgLALQgKAMgRAAQgQAAgKgMgAgOgCQgFAGAAAMIAAAAQAAALAFAIQAHAHAHAAQAJAAAGgHQAEgIAAgLIAAAAQAAgMgFgGQgFgIgJAAQgIAAgGAIg");
	this.shape_143.setTransform(127.3,93.3,1.1,1.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AAbApIAAhRIASAAIAABRgAgsApIAAhRIARAAIAAAdIAPAAQAeAAAAAZQAAAcgegBgAgbAcIAPAAQAMAAAAgOQAAgMgMAAIgPAAg");
	this.shape_144.setTransform(116.2,94.9,1.1,1.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AggApIAAhRIAiAAQAMAAAHAFQAIAFAAALQAAANgMAFQAPAGAAAOQAAAKgHAGQgIAHgOgBgAgOAcIAOAAQAOAAAAgMQAAgKgOgBIgOAAgAgOgGIAOAAQAMAAgBgKQAAgLgLAAIgOAAg");
	this.shape_145.setTransform(105.9,94.9,1.1,1.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AAWApIAAg2IgWAkIgVgkIAAA2IgSAAIAAhRIASAAIAVAkIAWgkIASAAIAABRg");
	this.shape_146.setTransform(91.3,94.9,1.1,1.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AAQApIAAg1IggA1IgRAAIAAhRIASAAIAAA0IAgg0IARAAIAABRg");
	this.shape_147.setTransform(81,94.9,1.1,1.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgzApIAAhRIARAAIAABCIAaAAIAAhCIARAAIAABCIAaAAIAAhCIARAAIAABRg");
	this.shape_148.setTransform(69.3,94.9,1.1,1.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgeApIAAhRIARAAIAAAdIANAAQAfAAAAAZQAAAcgfgBgAgNAcIANAAQAOAAAAgOQAAgMgOAAIgNAAg");
	this.shape_149.setTransform(58.5,94.9,1.1,1.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AglApIABgPIAFAAQAHAAADgKQAEgPAAgqIA3AAIAABSIgSAAIAAhDIgVAAQABAqgHAOQgFAMgPAAg");
	this.shape_150.setTransform(48.6,94.9,1.1,1.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgaAfQgLgLAAgTIAAgBQAAgSALgMQALgMAPAAQARAAALAMQAKAMAAASIAAABQAAASgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAHAAAMIAAABQAAAMAGAHQAGAIAIAAQAJAAAGgIQAGgHAAgMIAAgBQAAgLgGgIQgGgIgJAAQgIAAgGAIg");
	this.shape_151.setTransform(39.9,94.9,1.1,1.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgbAtQgKgMAAgWIAAgCQABgYAEgLQAGgSARgDIAogJIACAOIglAJQgSAFgBASQAIgPASAAQAOAAAKAMQALAMgBAQIAAABQAAASgKALQgKAMgRAAQgRAAgKgMgAgNgCQgGAGAAAMIAAAAQAAALAGAIQAFAHAIAAQAJAAAGgHQAEgIAAgLIAAAAQABgMgGgGQgGgIgIAAQgIAAgFAIg");
	this.shape_152.setTransform(30.1,93.3,1.1,1.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgbApQgNgQAAgYIAAgBQgBgYAOgQQAOgPAUAAQAUAAAOAMIgJAPQgMgKgNAAQgMAAgIAKQgIALgBARIAAABQABARAIALQAJAKAMAAQANAAAMgLIAIAOQgOAOgVAAQgTAAgOgPg");
	this.shape_153.setTransform(15.5,93.4,1.1,1.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AilFpIDArRICLAAIi/LRg");
	this.shape_154.setTransform(217.7,70.3,0.971,0.971);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#CB0927").s().p("AjFFdIC7q5IDQAAIi7K5g");
	this.shape_155.setTransform(211.1,131.5,0.971,0.971);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#D1D1D1").s().p("AkkIuIBwmjIDRAAIC7q5IBNAAIkqRcg");
	this.shape_156.setTransform(209.5,151.9,0.971,0.971);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#DC052B").s().p("AxyHEIDyuHIfzAAIjyOHg");
	this.shape_157.setTransform(104,111.5,1.2,1.2);

	var maskedShapeInstanceList = [this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128,this.shape_129,this.shape_130,this.shape_131,this.shape_132,this.shape_133,this.shape_134,this.shape_135,this.shape_136,this.shape_137,this.shape_138,this.shape_139,this.shape_140,this.shape_141,this.shape_142,this.shape_143,this.shape_144,this.shape_145,this.shape_146,this.shape_147,this.shape_148,this.shape_149,this.shape_150,this.shape_151,this.shape_152,this.shape_153,this.shape_154,this.shape_155,this.shape_156,this.shape_157];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114}]},137).to({state:[]},86).wait(137));

	// mask-in-out - копия: 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_211 = new cjs.Graphics().p("A6zcLMArEg4VMBKyAAAMAAAA4Vg");
	var mask_3_graphics_212 = new cjs.Graphics().p("Eg7UAcLMAkwg4VMBR5AAAMAAAA4Vg");
	var mask_3_graphics_213 = new cjs.Graphics().p("Eg7sAcLMAfDg4VMBYVAAAMAAAA4Vg");
	var mask_3_graphics_214 = new cjs.Graphics().p("Eg8AAcLMAZ6g4VMBeHAAAMAAAA4Vg");
	var mask_3_graphics_215 = new cjs.Graphics().p("Eg8TAcLMAVag4VMBjNAAAMAAAA4Vg");
	var mask_3_graphics_216 = new cjs.Graphics().p("Eg8jAcLMARfg4VMBnoAAAMAAAA4Vg");
	var mask_3_graphics_217 = new cjs.Graphics().p("Eg8wAcLMAOLg4VMBrWAAAMAAAA4Vg");
	var mask_3_graphics_218 = new cjs.Graphics().p("Eg87AcLMALeg4VMBuZAAAMAAAA4Vg");
	var mask_3_graphics_219 = new cjs.Graphics().p("Eg9EAcLMAJXg4VMBwyAAAMAAAA4Vg");
	var mask_3_graphics_220 = new cjs.Graphics().p("Eg9KAcLMAH2g4VMByfAAAMAAAA4Vg");
	var mask_3_graphics_221 = new cjs.Graphics().p("Eg9OAcLMAG9g4VMBzfAAAMAAAA4Vg");
	var mask_3_graphics_222 = new cjs.Graphics().p("Eg9PAcLMAGqg4VMBz1AAAMAAAA4Vg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(211).to({graphics:mask_3_graphics_211,x:582.7,y:142.3}).wait(1).to({graphics:mask_3_graphics_212,x:698.9,y:142.3}).wait(1).to({graphics:mask_3_graphics_213,x:618.1,y:142.3}).wait(1).to({graphics:mask_3_graphics_214,x:545.7,y:142.3}).wait(1).to({graphics:mask_3_graphics_215,x:481.9,y:142.3}).wait(1).to({graphics:mask_3_graphics_216,x:426.6,y:142.3}).wait(1).to({graphics:mask_3_graphics_217,x:379.8,y:142.3}).wait(1).to({graphics:mask_3_graphics_218,x:341.6,y:142.3}).wait(1).to({graphics:mask_3_graphics_219,x:311.8,y:142.3}).wait(1).to({graphics:mask_3_graphics_220,x:290.5,y:142.3}).wait(1).to({graphics:mask_3_graphics_221,x:277.8,y:142.3}).wait(1).to({graphics:mask_3_graphics_222,x:273.5,y:142.3}).wait(1).to({graphics:null,x:0,y:0}).wait(137));

	// pic3
	this.instance_6 = new lib._4_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(339,-12,0.931,0.931);

	this.instance_7 = new lib.fghf();
	this.instance_7.parent = this;
	this.instance_7.setTransform(407,124.9,1,1,0,0,0,0.1,0.1);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_6,this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},211).to({state:[{t:this.instance_7}]},79).to({state:[{t:this.instance_7}]},7).to({state:[]},1).wait(62));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(290).to({_off:false},0).to({alpha:0},7,cjs.Ease.get(0.97)).to({_off:true},1).wait(62));

	// text3
	this.instance_8 = new lib.dfgdfg();
	this.instance_8.parent = this;
	this.instance_8.setTransform(104.1,120.7,1.2,1.2,0,0,0,113.9,71.2);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(211).to({_off:false},0).wait(79).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(62));

	// Слой 4
	this.instance_9 = new lib.bg();
	this.instance_9.parent = this;
	this.instance_9.setTransform(375,125,2.5,1,0,0,0,150,125);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(360));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,250);


(lib.main1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 19
	this.instance = new lib.ghggg();
	this.instance.parent = this;
	this.instance.setTransform(-30,221.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(298).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(46).to({alpha:0},6,cjs.Ease.get(1)).wait(1));

	// final
	this.instance_1 = new lib.ghgf();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-30,75);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(293).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(51).to({alpha:0},6,cjs.Ease.get(1)).wait(1));

	// logo
	this.instance_2 = new lib.Анимация2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-73.5,71.8);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},8).wait(279).to({startPosition:0},0).to({alpha:0},9,cjs.Ease.get(1)).to({_off:true},21).wait(43));

	// mask-in-out - копия: 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A2efNMAVkg+aMAlaAAAMAAAA+ag");
	var mask_graphics_1 = new cjs.Graphics().p("A8xfNMASag+aMAnJAAAMAAAA+ag");
	var mask_graphics_2 = new cjs.Graphics().p("A8HfNMAPig+aMAotAAAMAAAA+ag");
	var mask_graphics_3 = new cjs.Graphics().p("A7ifNMAM/g+aMAqGAAAMAAAA+ag");
	var mask_graphics_4 = new cjs.Graphics().p("A7BfNMAKug+aMArVAAAMAAAA+ag");
	var mask_graphics_5 = new cjs.Graphics().p("A6kfNMAIwg+aMAsZAAAMAAAA+ag");
	var mask_graphics_6 = new cjs.Graphics().p("A6MfNMAHGg+aMAtTAAAMAAAA+ag");
	var mask_graphics_7 = new cjs.Graphics().p("A55fNMAFwg+aMAuCAAAMAAAA+ag");
	var mask_graphics_8 = new cjs.Graphics().p("A5pfNMAEsg+aMAunAAAMAAAA+ag");
	var mask_graphics_9 = new cjs.Graphics().p("A5efNMAD8g+aMAvBAAAMAAAA+ag");
	var mask_graphics_10 = new cjs.Graphics().p("A5YfNMADfg+aMAvSAAAMAAAA+ag");
	var mask_graphics_11 = new cjs.Graphics().p("A5VfNMADVg+aMAvWAAAMAAAA+ag");
	var mask_graphics_62 = new cjs.Graphics().p("A9efNMAAAg+aMA69AAAMgVjA+ag");
	var mask_graphics_63 = new cjs.Graphics().p("A5HfNMAAAg+aMAyPAAAMgSYA+ag");
	var mask_graphics_64 = new cjs.Graphics().p("A1KfNMAAAg+aMAqVAAAMgPfA+ag");
	var mask_graphics_65 = new cjs.Graphics().p("AxofNMAAAg+aMAjRAAAMgM5A+ag");
	var mask_graphics_66 = new cjs.Graphics().p("AugfNMAAAg+aIdBAAMgKnA+ag");
	var mask_graphics_67 = new cjs.Graphics().p("Au6fNMAAAg+aIXoAAMgIpA+ag");
	var mask_graphics_68 = new cjs.Graphics().p("AvUfNMAAAg+aITDAAMgG9A+ag");
	var mask_graphics_69 = new cjs.Graphics().p("AvqfNMAAAg+aIPVAAMgFnA+ag");
	var mask_graphics_70 = new cjs.Graphics().p("Av7fNMAAAg+aIMaAAMgEiA+ag");
	var mask_graphics_71 = new cjs.Graphics().p("AwIfNMAAAg+aIKWAAMgDyA+ag");
	var mask_graphics_72 = new cjs.Graphics().p("AwPfNMAAAg+aIJGAAMgDVA+ag");
	var mask_graphics_73 = new cjs.Graphics().p("AwRfNMAAAg+aIIrAAMgDLA+ag");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:233.6,y:80.3}).wait(1).to({graphics:mask_graphics_1,x:227.8,y:80.3}).wait(1).to({graphics:mask_graphics_2,x:182,y:80.3}).wait(1).to({graphics:mask_graphics_3,x:141,y:80.3}).wait(1).to({graphics:mask_graphics_4,x:104.9,y:80.3}).wait(1).to({graphics:mask_graphics_5,x:73.5,y:80.3}).wait(1).to({graphics:mask_graphics_6,x:47,y:80.3}).wait(1).to({graphics:mask_graphics_7,x:25.4,y:80.3}).wait(1).to({graphics:mask_graphics_8,x:8.5,y:80.3}).wait(1).to({graphics:mask_graphics_9,x:-3.6,y:80.3}).wait(1).to({graphics:mask_graphics_10,x:-10.8,y:80.3}).wait(1).to({graphics:mask_graphics_11,x:-13.2,y:80.3}).wait(1).to({graphics:null,x:0,y:0}).wait(50).to({graphics:mask_graphics_62,x:39.3,y:80.3}).wait(1).to({graphics:mask_graphics_63,x:1.1,y:80.3}).wait(1).to({graphics:mask_graphics_64,x:-33.5,y:80.3}).wait(1).to({graphics:mask_graphics_65,x:-64.4,y:80.3}).wait(1).to({graphics:mask_graphics_66,x:-91.6,y:80.3}).wait(1).to({graphics:mask_graphics_67,x:-95.5,y:80.3}).wait(1).to({graphics:mask_graphics_68,x:-98.1,y:80.3}).wait(1).to({graphics:mask_graphics_69,x:-100.3,y:80.3}).wait(1).to({graphics:mask_graphics_70,x:-102,y:80.3}).wait(1).to({graphics:mask_graphics_71,x:-103.3,y:80.3}).wait(1).to({graphics:mask_graphics_72,x:-104,y:80.3}).wait(1).to({graphics:mask_graphics_73,x:-104.2,y:80.3}).wait(287));

	// text0
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVAgQgLgMAAgTIAAgBQAAgTALgMQALgMAQAAQAPAAAMALIgJANQgIgIgKAAQgIAAgGAHQgGAIAAAMIAAABQAAAMAGAHQAGAIAJAAQAJgBAJgHIAIAMQgMAMgPAAQgQAAgLgMg");
	this.shape.setTransform(-19.7,-55,0.8,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbAgQgLgMAAgTIAAgBQAAgSALgNQALgMAQAAQARAAALAMQALANAAASIAAABQAAASgLAMQgLANgRAAQgQAAgLgMgAgOgUQgGAIAAAMIAAABQAAALAGAIQAGAIAIAAQAKAAAFgIQAGgIAAgLIAAgBQAAgLgGgIQgGgIgJAAQgJAAgFAHg");
	this.shape_1.setTransform(-26.6,-55,0.8,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVAgQgLgMAAgTIAAgBQAAgTALgMQALgMAPAAQAQAAALALIgIANQgJgIgJAAQgIAAgGAHQgGAIAAAMIAAABQAAAMAGAHQAGAIAIAAQAKgBAJgHIAIAMQgMAMgQAAQgQAAgKgMg");
	this.shape_2.setTransform(-33.2,-55,0.8,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXAgQgMgLAAgUIAAgBQAAgTALgMQAJgMAPAAQASAAAJAMQAJANAAATIgBAGIg0AAQADAWASAAQAMAAAIgJIAIALQgLANgSAAQgPAAgLgMgAgRgFIAjAAQgBgXgRAAQgPAAgCAXg");
	this.shape_3.setTransform(-39.7,-55,0.8,0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgmAqIABgPIAFAAQAIAAADgLQAEgPAAgrIA4AAIAABUIgSAAIAAhEIgVAAQAAAqgHAPQgGAMgOAAg");
	this.shape_4.setTransform(-47.1,-55,0.8,0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAcAqIAAhTIASAAIAABTgAgtAqIAAhTIATAAIAAAdIANAAQAfAAABAaQAAAcgfAAgAgaAcIANAAQAOgBAAgNQAAgNgOABIgNAAg");
	this.shape_5.setTransform(-54.7,-55,0.8,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAPAqIAAhEIgdAAIAABEIgSAAIAAhTIBBAAIAABTg");
	this.shape_6.setTransform(-62.7,-55,0.8,0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AARAqIAAg3IghA3IgRAAIAAhTIARAAIAAA2IAhg2IARAAIAABTg");
	this.shape_7.setTransform(-73.1,-55,0.8,0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgmAqIABgPIAFAAQAIAAACgLQAEgOAAgsIA5AAIAABUIgSAAIAAhEIgWAAQAAAqgGAPQgGAMgPAAg");
	this.shape_8.setTransform(-80.6,-55,0.8,0.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZAlQgIgHAAgMIAAgBQAAgNAIgGQAJgHAOAAQAKAAAIADIAAgDQAAgSgRAAQgLAAgLAFIgDgPQANgGANAAQAiAAAAAhIAAA0IgSAAIAAgKQgIAMgPAAQgLAAgHgHgAgPAQIAAABQAAAGAEAEQAEADAGAAQAHAAAFgEQAFgFABgHIAAgJQgHgDgKAAQgPAAAAAOg");
	this.shape_9.setTransform(-87.2,-55,0.8,0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAZA0IAAgTIgyAAIgBATIgQAAIAAgjIAIAAQAJgRAAgnIAAgMIA5AAIAABEIALAAIgCAjgAgPARIAdAAIAAg0IgWAAQAAAjgHARg");
	this.shape_10.setTransform(-94,-54.3,0.8,0.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgeAiIAHgOQALAIAKAAQAPAAAAgLQAAgGgEgCQgFgDgKAAIgEAAIAAgMIAEAAQAJgBAEgCQAEgCAAgIQAAgIgMAAQgMgBgIAHIgGgMQALgKARAAQAMAAAIAGQAIAGAAAKQAAAOgNAGQAPAEAAAQQAAAKgJAIQgIAHgOAAQgRAAgNgKg");
	this.shape_11.setTransform(-100.6,-55,0.8,0.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgbAgQgLgMAAgTIAAgBQAAgSALgNQALgMAQAAQARAAALAMQALANAAASIAAABQAAASgLAMQgLANgRAAQgQAAgLgMgAgOgUQgGAIAAAMIAAABQAAALAGAIQAGAIAIAAQAKAAAFgIQAGgIAAgLIAAgBQAAgLgGgIQgGgIgJAAQgJAAgFAHg");
	this.shape_12.setTransform(-106.8,-55,0.8,0.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVAgQgLgMAAgTIAAgBQAAgTALgMQALgMAQAAQAPAAAMALIgJANQgIgIgKAAQgIAAgGAHQgGAIAAAMIAAABQAAAMAGAHQAGAIAJAAQAJgBAJgHIAIAMQgMAMgPAAQgQAAgLgMg");
	this.shape_13.setTransform(-113.3,-55,0.8,0.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAcAqIAAhTIASAAIAABTgAgtAqIAAhTIASAAIAAAdIAOAAQAfAAAAAaQAAAcgeAAgAgbAcIAOAAQANgBAAgNQAAgNgNABIgOAAg");
	this.shape_14.setTransform(-124.3,-55,0.8,0.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAWAqIAAg3IgWAkIAAAAIgWgkIAAA3IgSAAIAAhTIASAAIAWAlIAWglIASAAIAABTg");
	this.shape_15.setTransform(-132.9,-55,0.8,0.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAaA0IAAgTIgzAAIgBATIgQAAIAAgiIAIAAQAJgTAAgmIAAgMIA6AAIAABFIAKAAIgCAigAgQASIAfAAIAAg1IgXAAQAAAjgIASg");
	this.shape_16.setTransform(-38.6,-67.8,0.8,0.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgZAlQgIgHAAgMIAAgBQAAgNAJgGQAIgHAOAAQAJAAAJADIAAgDQAAgSgRAAQgKAAgMAFIgDgPQANgGANAAQAiAAAAAhIAAA0IgSAAIAAgKQgIAMgPAAQgLAAgHgHgAgPAQIAAABQAAAGAEAEQAEADAGAAQAHAAAFgEQAFgFAAgHIAAgJQgGgDgKAAQgPAAAAAOg");
	this.shape_17.setTransform(-45.6,-68.5,0.8,0.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgeAiIAHgOQALAIAJAAQAQAAAAgLQAAgGgFgCQgEgDgLAAIgEAAIAAgNIAEAAQAJAAAEgCQAFgDAAgGQAAgKgMABQgMAAgIAGIgHgNQAMgJARAAQAMAAAIAGQAIAHAAAJQAAAOgNAGQAPAEAAAPQAAALgJAIQgJAHgNAAQgSAAgMgKg");
	this.shape_18.setTransform(-51.8,-68.5,0.8,0.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgZAlQgIgHAAgMIAAgBQAAgNAIgGQAJgHAOAAQAIAAAKADIAAgDQAAgSgRAAQgKAAgMAFIgEgPQAOgGANAAQAiAAAAAhIAAA0IgSAAIAAgKQgIAMgPAAQgLAAgHgHgAgPAQIAAABQAAANAOAAQAHAAAFgEQAFgFAAgHIAAgJQgGgDgKAAQgPAAAAAOg");
	this.shape_19.setTransform(-58,-68.5,0.8,0.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAQArIAAgjIgfAAIAAAjIgSAAIAAhVIASAAIAAAjIAfAAIAAgjIASAAIAABVg");
	this.shape_20.setTransform(-64.7,-68.5,0.8,0.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgZAlQgIgHAAgMIAAgBQAAgNAJgGQAHgHAOAAQAJAAAKADIAAgDQAAgSgSAAQgKAAgLAFIgDgPQANgGANAAQAiAAAAAhIAAA0IgSAAIAAgKQgJAMgOAAQgLAAgHgHgAgPAQIAAABQAAANAOAAQAHAAAFgEQAFgFAAgHIAAgJQgGgDgKAAQgPAAAAAOg");
	this.shape_21.setTransform(-75,-68.5,0.8,0.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAPArIgUgkIgLANIAAAXIgTAAIAAhVIATAAIAAAoIAdgoIAUAAIgcAkIAfAxg");
	this.shape_22.setTransform(-81,-68.5,0.8,0.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgXAgQgMgLAAgUIAAgBQAAgTAKgMQAKgMAPAAQASAAAJAMQAJANAAATIAAAGIg1AAQADAWASgBQAMAAAIgIIAJALQgMANgSAAQgQAAgKgMgAgRgFIAjAAQAAgKgFgHQgEgGgJAAQgPAAgCAXg");
	this.shape_23.setTransform(-88.1,-68.5,0.8,0.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AggArIAAhVIAiAAQANAAAHAHQAIAFAAALQAAAMgNAHQAQAEAAAOQAAAMgIAHQgIAFgOABgAgOAcIAOAAQAPAAAAgLQAAgLgPAAIgOAAgAgOgHIAOAAQAMAAAAgKQAAgKgMAAIgOAAg");
	this.shape_24.setTransform(-94.6,-68.5,0.8,0.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgXAgQgMgLAAgUIAAgBQAAgTALgMQAKgMAPAAQARAAAJAMQAJAMAAAUIAAAGIg1AAQADAWASgBQALAAAJgIIAJALQgMANgSAAQgQAAgKgMgAgLgWQgFAGgBALIAjAAQgBgXgQAAQgHAAgFAGg");
	this.shape_25.setTransform(-104.8,-68.5,0.8,0.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgXAgQgMgLAAgUIAAgBQAAgTALgMQAKgMAPAAQAQAAAKAMQAJANAAATIAAAGIg0AAQABAWATgBQALAAAJgIIAIALQgLANgSAAQgPAAgLgMgAgRgFIAjAAQgBgKgEgHQgFgGgHAAQgPAAgDAXg");
	this.shape_26.setTransform(-111.6,-68.5,0.8,0.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgmAqIABgPIAFAAQAIAAADgLQAEgPAAgrIA4AAIAABUIgSAAIAAhEIgVAAQAAAqgHAPQgGAMgOAAg");
	this.shape_27.setTransform(-118.9,-68.5,0.8,0.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgbAgQgLgMAAgTIAAgBQAAgSALgNQALgMAQAAQARAAALAMQALAMAAATIAAABQAAASgLAMQgLANgRAAQgQAAgLgMgAgOgTQgGAHAAAMIAAABQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMIAAgBQAAgLgGgIQgGgIgJAAQgJAAgFAIg");
	this.shape_28.setTransform(-125.4,-68.5,0.8,0.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgnA4IAAhvIBHAAIAAAQIg0AAIAAAcIAXAAQARAAAKAJQAKAIAAAPQAAARgLAJQgLAJgRAAgAgUAnIAWAAQATAAAAgRQAAgRgTAAIgWAAg");
	this.shape_29.setTransform(-132.8,-69.6,0.8,0.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhnDwIB/nfIBQAAIh/Hfg");
	this.shape_30.setTransform(0.7,-79.9,0.8,0.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CB0927").s().p("AhwDIIBqmPIB3AAIhrGPg");
	this.shape_31.setTransform(-2.2,-51.1,0.8,0.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#DBDBDA").s().p("AinE/IBBjvIB2AAIBrmOIAtAAIirJ9g");
	this.shape_32.setTransform(-3,-41.5,0.8,0.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#DC052B").s().p("AvwE/IAAp9IfhAAIirJ9g");
	this.shape_33.setTransform(-68.8,-60.7,0.8,0.8);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},74).wait(286));

	// pic0
	this.instance_3 = new lib.pic0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-10,-119,1.1,1.1);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},74).wait(286));

	// mask-in-out (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_62 = new cjs.Graphics().p("A2efNMAVkg+aMAlaAAAMAAAA+ag");
	var mask_1_graphics_63 = new cjs.Graphics().p("A8xfNMASag+aMAnJAAAMAAAA+ag");
	var mask_1_graphics_64 = new cjs.Graphics().p("A8HfNMAPig+aMAotAAAMAAAA+ag");
	var mask_1_graphics_65 = new cjs.Graphics().p("A7ifNMAM/g+aMAqGAAAMAAAA+ag");
	var mask_1_graphics_66 = new cjs.Graphics().p("A7BfNMAKug+aMArVAAAMAAAA+ag");
	var mask_1_graphics_67 = new cjs.Graphics().p("A6kfNMAIwg+aMAsZAAAMAAAA+ag");
	var mask_1_graphics_68 = new cjs.Graphics().p("A6MfNMAHGg+aMAtTAAAMAAAA+ag");
	var mask_1_graphics_69 = new cjs.Graphics().p("A55fNMAFwg+aMAuCAAAMAAAA+ag");
	var mask_1_graphics_70 = new cjs.Graphics().p("A5pfNMAEsg+aMAunAAAMAAAA+ag");
	var mask_1_graphics_71 = new cjs.Graphics().p("A5efNMAD8g+aMAvBAAAMAAAA+ag");
	var mask_1_graphics_72 = new cjs.Graphics().p("A5YfNMADfg+aMAvSAAAMAAAA+ag");
	var mask_1_graphics_73 = new cjs.Graphics().p("A5VfNMADVg+aMAvWAAAMAAAA+ag");
	var mask_1_graphics_137 = new cjs.Graphics().p("A9efNMAAAg+aMA69AAAMgVjA+ag");
	var mask_1_graphics_138 = new cjs.Graphics().p("A5HfNMAAAg+aMAyPAAAMgSYA+ag");
	var mask_1_graphics_139 = new cjs.Graphics().p("A1KfNMAAAg+aMAqVAAAMgPfA+ag");
	var mask_1_graphics_140 = new cjs.Graphics().p("AxofNMAAAg+aMAjRAAAMgM5A+ag");
	var mask_1_graphics_141 = new cjs.Graphics().p("AugfNMAAAg+aIdBAAMgKnA+ag");
	var mask_1_graphics_142 = new cjs.Graphics().p("Au6fNMAAAg+aIXoAAMgIpA+ag");
	var mask_1_graphics_143 = new cjs.Graphics().p("AvUfNMAAAg+aITDAAMgG9A+ag");
	var mask_1_graphics_144 = new cjs.Graphics().p("AvqfNMAAAg+aIPVAAMgFnA+ag");
	var mask_1_graphics_145 = new cjs.Graphics().p("Av7fNMAAAg+aIMaAAMgEiA+ag");
	var mask_1_graphics_146 = new cjs.Graphics().p("AwIfNMAAAg+aIKWAAMgDyA+ag");
	var mask_1_graphics_147 = new cjs.Graphics().p("AwPfNMAAAg+aIJGAAMgDVA+ag");
	var mask_1_graphics_148 = new cjs.Graphics().p("AwRfNMAAAg+aIIrAAMgDLA+ag");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_1_graphics_62,x:233.6,y:80.3}).wait(1).to({graphics:mask_1_graphics_63,x:227.8,y:80.3}).wait(1).to({graphics:mask_1_graphics_64,x:182,y:80.3}).wait(1).to({graphics:mask_1_graphics_65,x:141,y:80.3}).wait(1).to({graphics:mask_1_graphics_66,x:104.9,y:80.3}).wait(1).to({graphics:mask_1_graphics_67,x:73.5,y:80.3}).wait(1).to({graphics:mask_1_graphics_68,x:47,y:80.3}).wait(1).to({graphics:mask_1_graphics_69,x:25.4,y:80.3}).wait(1).to({graphics:mask_1_graphics_70,x:8.5,y:80.3}).wait(1).to({graphics:mask_1_graphics_71,x:-3.6,y:80.3}).wait(1).to({graphics:mask_1_graphics_72,x:-10.8,y:80.3}).wait(1).to({graphics:mask_1_graphics_73,x:-13.2,y:80.3}).wait(1).to({graphics:null,x:0,y:0}).wait(63).to({graphics:mask_1_graphics_137,x:39.3,y:80.3}).wait(1).to({graphics:mask_1_graphics_138,x:1.1,y:80.3}).wait(1).to({graphics:mask_1_graphics_139,x:-33.5,y:80.3}).wait(1).to({graphics:mask_1_graphics_140,x:-64.4,y:80.3}).wait(1).to({graphics:mask_1_graphics_141,x:-91.6,y:80.3}).wait(1).to({graphics:mask_1_graphics_142,x:-95.5,y:80.3}).wait(1).to({graphics:mask_1_graphics_143,x:-98.1,y:80.3}).wait(1).to({graphics:mask_1_graphics_144,x:-100.3,y:80.3}).wait(1).to({graphics:mask_1_graphics_145,x:-102,y:80.3}).wait(1).to({graphics:mask_1_graphics_146,x:-103.3,y:80.3}).wait(1).to({graphics:mask_1_graphics_147,x:-104,y:80.3}).wait(1).to({graphics:mask_1_graphics_148,x:-104.2,y:80.3}).wait(212));

	// text1
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAQApIAAg1IggA1IgRAAIAAhRIASAAIAAA1IAfg1IASAAIAABRg");
	this.shape_34.setTransform(-19.2,-32.9,0.75,0.75);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AglApIABgPIAFABQAIAAACgLQAEgPAAgqIA3AAIAABSIgSAAIAAhDIgVAAQAAAqgGAOQgGAMgOAAg");
	this.shape_35.setTransform(-26.1,-32.9,0.75,0.75);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgXAfQgLgLAAgUIAAAAQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJAMAAASIAAAGIgzAAQADAWARAAQAKAAAKgIIAIALQgLAMgSAAQgPAAgLgMgAgQgEIAiAAQgBgYgQAAQgQAAgBAYg");
	this.shape_36.setTransform(-31.9,-32.9,0.75,0.75);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAZAyIAAgSIgxAAIgBASIgQAAIAAghIAIAAQAJgSAAgmIAAgKIA4AAIAABCIAKAAIgCAhgAgPARIAdAAIAAgzIgVAAQAAAjgIAQg");
	this.shape_37.setTransform(-38.4,-32.2,0.75,0.75);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgTIAAAAQAAgSALgMQALgMAPAAQARAAAKAMQALAMAAASIAAAAQAAATgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAHAAAMIAAAAQAAAMAGAIQAGAHAIAAQAJAAAGgHQAGgHAAgMIAAgBQAAgMgGgHQgGgIgJAAQgJAAgFAIg");
	this.shape_38.setTransform(-44.9,-32.9,0.75,0.75);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAWApIAAg2IgWAkIgVgjIAAA1IgRAAIAAhRIASAAIAUAlIAWglIASAAIAABRg");
	this.shape_39.setTransform(-52,-32.9,0.75,0.75);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgXAfQgLgLAAgUIAAAAQAAgSAKgMQAKgMAOAAQARAAAJAMQAJAMAAASIAAAGIgzAAQACAWASAAQAKAAAKgIIAIALQgLAMgSAAQgPAAgLgMgAgRgEIAjAAQgCgYgQAAQgOAAgDAYg");
	this.shape_40.setTransform(-61.8,-32.9,0.75,0.75);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAbApIAAhRIASAAIAABRgAgsApIAAhRIASAAIAAAdIAOAAQAeAAAAAZQAAAbgeAAgAgaAbIANAAQANAAAAgMQAAgNgNAAIgNAAg");
	this.shape_41.setTransform(-69.1,-32.9,0.75,0.75);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAPApIAAgiIgdAAIAAAiIgSAAIAAhRIASAAIAAAhIAdAAIAAghIASAAIAABRg");
	this.shape_42.setTransform(-76.4,-32.9,0.75,0.75);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAYAyIAAgSIgwAAIgBASIgQAAIAAghIAIAAQAJgSAAgmIAAgKIA3AAIAABCIAKAAIgBAhgAgPARIAdAAIAAgzIgVAAQAAAjgIAQg");
	this.shape_43.setTransform(-83.1,-32.2,0.75,0.75);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgTIAAAAQAAgSALgMQALgMAPAAQARAAALAMQAKALAAATIAAAAQAAATgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAHAAAMIAAAAQAAAMAGAIQAGAHAIAAQAJAAAGgHQAGgHAAgMIAAgBQAAgMgGgHQgGgIgJAAQgJAAgFAIg");
	this.shape_44.setTransform(-89.6,-32.9,0.75,0.75);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgfApIAAhRIAiAAQALAAAIAFQAHAGAAAKQAAANgNAGQAQAEABAOQgBAXgdAAgAgOAbIAOAAQAOAAABgLQgBgLgOAAIgOAAgAgOgGIANAAQANAAAAgLQAAgKgMAAIgOAAg");
	this.shape_45.setTransform(-95.9,-32.9,0.75,0.75);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgbAfQgLgMABgTIAAAAQgBgSALgMQALgMAQAAQAQAAALAMQALALAAATIAAAAQAAATgLAMQgLAMgQAAQgQAAgLgMgAgOgTQgFAHAAAMIAAAAQAAAMAFAIQAGAHAIAAQAJAAAGgHQAGgHgBgMIAAgBQABgMgGgHQgGgIgJAAQgJAAgFAIg");
	this.shape_46.setTransform(-102.4,-32.9,0.75,0.75);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgkA2IAAhpIARAAIAAANQALgPANAAQANAAAJAKQAKAMAAAUIAAACQAAATgKAMQgJAKgNAAQgNAAgLgOIAAAkgAgNgeQgGAHAAAMIAAACQAAALAGAHQAGAHAHAAQAIAAAGgHQAFgHAAgLIAAgCQAAgMgFgHQgGgHgIAAQgHAAgGAHg");
	this.shape_47.setTransform(-109.1,-32.1,0.75,0.75);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAPApIAAhCIgdAAIAABCIgSAAIAAhRIBBAAIAABRg");
	this.shape_48.setTransform(-115.9,-32.9,0.75,0.75);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgVAfQgKgMAAgTIAAAAQAAgSAKgMQALgMAPAAQAQAAALALIgIANQgJgJgJAAQgIAAgGAIQgGAHAAAMIAAAAQAAANAGAHQAGAHAJAAQAIAAAJgIIAIAMQgMAMgPAAQgPAAgLgMg");
	this.shape_49.setTransform(-121.9,-32.9,0.75,0.75);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgXAfQgLgLAAgUIAAAAQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJAMAAASIAAAGIgzAAQADAWAQAAQALAAAJgIIAJALQgMAMgRAAQgQAAgKgMgAgQgEIAiAAQgBgYgQAAQgPAAgCAYg");
	this.shape_50.setTransform(-127.9,-32.9,0.75,0.75);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgaAtQgKgMAAgWIAAgCQgBgXAFgMQAGgRASgEIAmgJIAEAOIgmAKQgRADgCATQAHgOATAAQAOAAAKALQAKAMAAAQIAAABQABASgKAMQgKALgSAAQgQAAgKgMgAgNgDQgGAHABALIAAABQgBALAGAIQAGAHAHAAQAJAAAFgHQAGgIAAgLIAAgBQAAgLgGgHQgFgHgJAAQgHAAgGAHg");
	this.shape_51.setTransform(-134.3,-34,0.75,0.75);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAOAAQARAAAJAMQAJAMAAASIAAAHIg0AAQAEAVARAAQALAAAJgJIAIALQgMANgRAAQgPAAgLgLgAgRgFIAjAAQgBgWgRAAQgOAAgDAWg");
	this.shape_52.setTransform(-76.3,-45.5,0.75,0.75);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAbApIAAhSIASAAIAABSgAgsApIAAhSIARAAIAAAeIAPAAQAeAAAAAZQAAAbgeAAgAgbAcIAPAAQAMgBAAgNQAAgMgMAAIgPAAg");
	this.shape_53.setTransform(-83.5,-45.5,0.75,0.75);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAPApIAAghIgdAAIAAAhIgSAAIAAhSIASAAIAAAjIAdAAIAAgjIASAAIAABSg");
	this.shape_54.setTransform(-90.9,-45.5,0.75,0.75);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgeApIAAhSIARAAIAAAeIANAAQAfAAAAAZQAAAbgeAAgAgNAcIANAAQAOgBAAgNQAAgMgOAAIgNAAg");
	this.shape_55.setTransform(-96.8,-45.5,0.75,0.75);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AglApIABgPIAFAAQAIAAACgKQAEgPAAgqIA3AAIAABSIgRAAIAAhDIgWAAQABApgHAPQgFAMgPAAg");
	this.shape_56.setTransform(-103.5,-45.5,0.75,0.75);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgYAkQgIgHAAgLIAAgBQAAgNAIgGQAIgHAOAAQAKAAAIADIAAgDQAAgRgRAAQgLAAgKAFIgEgPQAOgGAMAAQAhAAAAAhIAAAyIgRAAIAAgKQgJAMgNAAQgLAAgHgHgAgPAQIAAABQAAAGAEADQAEAEAGAAQAHAAAFgFQAFgEAAgHIAAgJQgFgDgLAAQgPAAAAAOg");
	this.shape_57.setTransform(-109.6,-45.5,0.75,0.75);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAOApIgUgiIgKANIAAAVIgSAAIAAhSIASAAIAAAoIAcgoIAVAAIgcAjIAeAvg");
	this.shape_58.setTransform(-115.1,-45.5,0.75,0.75);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AARApIAAg1IghA1IgRAAIAAhSIARAAIAAA1IAhg1IARAAIAABSg");
	this.shape_59.setTransform(-121.7,-45.5,0.75,0.75);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAPApIAAghIgdAAIAAAhIgSAAIAAhSIASAAIAAAjIAdAAIAAgjIASAAIAABSg");
	this.shape_60.setTransform(-128.3,-45.5,0.75,0.75);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AghAyIAFgOQAGACAEAAQAHAAAEgJIgehSIATAAIASA9IATg9IATAAIgeBVQgHAVgQAAQgKAAgIgDg");
	this.shape_61.setTransform(-134.6,-44.6,0.75,0.75);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAWApIAAg2IgWAjIgVgjIAAA2IgSAAIAAhSIASAAIAVAlIAWglIASAAIAABSg");
	this.shape_62.setTransform(-47.4,-58.1,0.75,0.75);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAOAAQARAAAJAMQAJAMAAATIAAAFIg0AAQADAWARAAQALAAAKgIIAIAKQgMANgRAAQgPAAgLgLgAgRgFIAjAAQgCgXgQABQgOgBgDAXg");
	this.shape_63.setTransform(-54.2,-58.1,0.75,0.75);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AARApIAAgcIgOAAIgPAcIgVAAIAUgfQgRgHAAgRQAAgbAeAAIAiAAIAABSgAgJgXQgDADAAAHQAAANANAAIAQAAIAAgaIgNAAQgJAAgEADg");
	this.shape_64.setTransform(-60.7,-58.1,0.75,0.75);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AglApIABgPIAFABQAIAAACgLQAEgOAAgrIA3AAIAABSIgSAAIAAhDIgVAAQAAAqgGAOQgFAMgPAAg");
	this.shape_65.setTransform(-67.1,-58.1,0.75,0.75);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AggApIAAhSIAiAAQANABAGAFQAIAGAAAKQAAANgMAFQAPAFAAAOQAAAXgdAAgAgOAbIAPAAQANAAAAgKQAAgMgOAAIgOAAgAgOgGIAOAAQAMAAAAgKQAAgKgMAAIgOAAg");
	this.shape_66.setTransform(-72.9,-58.1,0.75,0.75);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgYAkQgIgHAAgMIAAgBQAAgMAIgHQAIgGAOAAQAIAAAKADIAAgDQAAgRgRAAQgKAAgLAFIgEgPQANgGANAAQAhAAAAAhIAAAyIgRAAIAAgKQgJAMgNAAQgLAAgHgHgAgPAQIAAAAQAAANAOAAQAHAAAFgEQAFgFAAgHIAAgIQgIgDgIAAQgPAAAAAOg");
	this.shape_67.setTransform(-79.2,-58.1,0.75,0.75);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgIApIAAhCIgXAAIAAgQIA/AAIAAAQIgXAAIAABCg");
	this.shape_68.setTransform(-84.5,-58.1,0.75,0.75);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgVAfQgKgLAAgTIAAgBQAAgSALgMQAKgMAQAAQAQAAAKAKIgIAOQgJgJgJABQgIgBgFAIQgGAHAAAMIAAABQAAAMAGAHQAFAHAJAAQAJAAAJgIIAHAMQgLAMgQAAQgPAAgLgMg");
	this.shape_69.setTransform(-89.9,-58.1,0.75,0.75);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AAZAyIAAgSIgxAAIgCASIgPAAIAAghIAIAAQAIgRAAgnIAAgLIA4AAIAABDIALAAIgCAhgAgPARIAdAAIAAgzIgWAAQAAAjgHAQg");
	this.shape_70.setTransform(-96.2,-57.4,0.75,0.75);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJAMAAATIAAAFIgzAAQACAWASAAQAKAAAKgIIAIAKQgLANgSAAQgPAAgLgLgAgQgFIAiAAQgBgKgEgGQgFgHgHABQgQgBgBAXg");
	this.shape_71.setTransform(-102.5,-58.1,0.75,0.75);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgkA2IAAhqIASAAIAAAOQAJgPAOAAQANAAAJAKQAKAMAAATIAAADQAAATgKALQgJALgNAAQgNAAgKgOIAAAkgAgNgeQgGAIAAALIAAACQAAALAGAHQAGAHAHAAQAIAAAGgHQAGgHAAgLIAAgCQAAgMgGgIQgGgGgIAAQgHgBgGAIg");
	this.shape_72.setTransform(-109,-57.3,0.75,0.75);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AAPApIAAhCIgdAAIAABCIgSAAIAAhSIBBAAIAABSg");
	this.shape_73.setTransform(-115.7,-58.1,0.75,0.75);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AAbApIAAhSIASAAIAABSgAgsApIAAhSIARAAIAAAdIAOAAQAeAAAAAaQABAOgJAGQgIAHgNAAgAgbAbIAOAAQANAAAAgNQAAgNgNABIgOAAg");
	this.shape_74.setTransform(-126.1,-58.1,0.75,0.75);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AAWApIAAg2IgWAjIAAAAIgWgjIAAA2IgRAAIAAhSIASAAIAVAlIAWglIARAAIAABSg");
	this.shape_75.setTransform(-134,-58.1,0.75,0.75);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AARAqIAAgdIgOAAIgPAdIgVAAIAUggQgRgGAAgSQAAgbAeAAIAiAAIAABTgAgJgXQgDADAAAHQAAANANAAIAQAAIAAgaIgNAAQgJAAgEADg");
	this.shape_76.setTransform(-97.4,-70.7,0.75,0.75);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAQAqIAAgiIgfAAIAAAiIgRAAIAAhTIARAAIAAAiIAfAAIAAgiIARAAIAABTg");
	this.shape_77.setTransform(-103.5,-70.7,0.75,0.75);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAZAzIAAgTIgxAAIgCATIgPAAIAAgiIAIAAQAIgRAAgnIAAgLIA4AAIAABDIALAAIgCAigAgPARIAdAAIAAgzIgWAAQAAAigHARg");
	this.shape_78.setTransform(-110.1,-70,0.75,0.75);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgSIAAgBQAAgSALgMQALgMAPAAQARAAALAMQAKAMAAASIAAABQAAASgLAMQgKAMgRAAQgPAAgLgMgAgOgTQgGAIAAALIAAABQAAALAGAIQAGAIAIAAQAKAAAFgIQAGgHAAgMIAAgBQAAgLgGgIQgGgIgJAAQgIAAgGAIg");
	this.shape_79.setTransform(-116.6,-70.7,0.75,0.75);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgZAqIAAhTIAzAAIAAAQIghAAIAABDg");
	this.shape_80.setTransform(-121.9,-70.7,0.75,0.75);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJAMAAASIAAAHIgzAAQADAVAQAAQAMAAAIgJIAJAMQgMAMgRAAQgPAAgLgLgAgQgFIAiAAQgBgWgQAAQgPAAgCAWg");
	this.shape_81.setTransform(-127.7,-70.7,0.75,0.75);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgbApQgNgPAAgZIAAgBQAAgYANgQQAOgPAUAAQAUAAAOAMIgJAPQgMgKgNAAQgLAAgJAKQgIALAAARIAAABQAAARAIALQAJALAMAAQAMAAANgLIAJANQgPAOgVAAQgUAAgNgPg");
	this.shape_82.setTransform(-134,-71.7,0.75,0.75);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AiaFlIC+rJIB3AAIi+LJg");
	this.shape_83.setTransform(9.6,-78.3,0.75,0.75);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#CB0927").s().p("AioEqICgpSICxAAIifJSg");
	this.shape_84.setTransform(5.5,-38.1,0.75,0.75);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#DBDBDA").s().p("Aj5HcIBfllICyAAICfpSIBDAAIj+O3g");
	this.shape_85.setTransform(4.4,-24.7,0.75,0.75);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#DC052B").s().p("AyMHcIAAu3MAkZAAAIj/O3g");
	this.shape_86.setTransform(-62,-51.5,0.75,0.75);

	var maskedShapeInstanceList = [this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]},62).to({state:[]},87).wait(211));

	// pic1
	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#7E7E7E").s().p("AAhAlIAAgrQAAgQgMAAQgNAAAAAQIAAArIgOAAIAAgrQAAgQgNAAQgGAAgEAEQgDAFAAAHIAAArIgQAAIAAhIIAQAAIAAALQAIgMALAAQANAAAFAMQAIgMAOAAQAKAAAGAHQAGAGAAAMIAAAwg");
	this.shape_87.setTransform(142.4,33.2,0.7,0.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#7E7E7E").s().p("AgXAbQgKgKAAgQIAAgBQAAgQAKgLQAKgKANAAQAPAAAJAKQAKALAAAQIAAAAQAAARgKAKQgJALgPAAQgNAAgKgLgAgMgRQgFAHAAAKIAAAAQAAALAFAHQAFAGAHAAQAIAAAFgGQAFgHAAgKIAAgBQAAgJgFgIQgFgGgIAAQgHAAgFAGg");
	this.shape_88.setTransform(135.5,33.2,0.7,0.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#7E7E7E").s().p("AgXApQgJgKAAgRIAAgCQAAgRAJgKQAIgKAMABQAMAAAIAMIAAglIAQAAIAABiIgQAAIAAgLQgIANgMgBQgMAAgIgJgAgLgEQgFAFAAALIAAABQAAALAFAGQAFAGAGAAQAHAAAFgFQAGgIAAgJIAAgCQAAgKgGgGQgFgGgHgBQgGAAgFAHg");
	this.shape_89.setTransform(129.8,32.3,0.7,0.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#7E7E7E").s().p("AgUAcQgKgLAAgQIAAgBQAAgQAJgLQAJgKAMAAQAPAAAIALQAIALAAAPIAAAGIgtAAQACATAPAAQAKAAAIgIIAHAKQgKALgPAAQgOAAgJgKgAgOgEIAeAAQgCgUgOAAQgNAAgBAUg");
	this.shape_90.setTransform(124.6,33.2,0.7,0.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#7E7E7E").s().p("AgUAcQgKgLAAgQIAAgBQAAgQAJgLQAJgKANAAQANAAAJALQAIALAAAPIgBAGIgtAAQADATAPAAQAKAAAHgIIAIAKQgKALgQAAQgMAAgKgKgAgJgTQgFAGgBAJIAfAAQgBgJgEgGQgEgFgGAAQgGAAgEAFg");
	this.shape_91.setTransform(119.5,33.2,0.7,0.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#7E7E7E").s().p("AgSAlIAAhIIAQAAIAAAPQAGgQAPAAIAAARIgBAAQgUAAAAAYIAAAgg");
	this.shape_92.setTransform(115.5,33.2,0.7,0.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#7E7E7E").s().p("AgdAwIAAhfIA7AAIAAAPIgrAAIAAAbIAmAAIAAANIgmAAIAAAog");
	this.shape_93.setTransform(111.1,32.4,0.7,0.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#7E7E7E").s().p("AgSAlIAAhIIAQAAIAAAOQAGgQAPABIAAARIgBAAQgUAAAAAYIAAAgg");
	this.shape_94.setTransform(137.3,23.5,0.7,0.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#7E7E7E").s().p("AgUAcQgKgLAAgQIAAgBQAAgQAJgKQAJgLAMAAQAPAAAIALQAIAKAAARIAAAFIgtAAQACASAQAAQAJAAAIgHIAHAJQgLAMgOAAQgOAAgJgKgAgOgEIAdAAQgBgUgOAAQgMAAgCAUg");
	this.shape_95.setTransform(132.8,23.6,0.7,0.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#7E7E7E").s().p("AgGAlIgahJIARAAIAPA1IARg1IAQAAIgZBJg");
	this.shape_96.setTransform(127.9,23.6,0.7,0.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#7E7E7E").s().p("AgXAcQgKgMAAgPIAAgBQAAgQAKgKQAKgLANAAQAPAAAJALQAKAKAAAQIAAABQAAAPgKAMQgJAKgPAAQgNAAgKgKgAgMgRQgFAHAAAKIAAABQAAAJAFAIQAFAGAHAAQAIAAAFgGQAFgHAAgKIAAgBQAAgKgFgGQgFgIgIABQgHAAgFAGg");
	this.shape_97.setTransform(122.9,23.6,0.7,0.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#7E7E7E").s().p("AgXAcQgKgMAAgPIAAgBQAAgQAKgKQAKgLANAAQAPAAAJALQAKAKAAAQIAAABQAAAPgKAMQgJAKgPAAQgNAAgKgKgAgMgRQgFAHAAAKIAAABQAAAJAFAIQAFAGAHAAQAIAAAFgGQAFgHAAgKIAAgBQAAgKgFgGQgFgIgIABQgHAAgFAGg");
	this.shape_98.setTransform(117.3,23.6,0.7,0.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#7E7E7E").s().p("AATAwIAAgpIglAAIAAApIgQAAIAAhfIAQAAIAAAoIAlAAIAAgoIAQAAIAABfg");
	this.shape_99.setTransform(111.4,22.8,0.7,0.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#7E7E7E").s().p("AgdAsIAFgNQAEADAFAAQAFAAAEgIIgahIIARAAIAQA1IAQg1IAQAAIgaBKQgGATgOAAQgIAAgIgDg");
	this.shape_100.setTransform(89.7,32.5,0.7,0.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#7E7E7E").s().p("AgXApQgJgKAAgRIAAgDQAAgQAJgKQAIgKAMAAQANAAAHANIAAglIAQAAIAABiIgQAAIAAgMQgIAOgMAAQgMAAgIgKgAgLgEQgFAFAAAKIAAACQAAALAFAGQAEAHAHgBQAIAAAEgGQAGgGAAgLIAAgCQAAgJgGgGQgEgGgIAAQgHgBgEAHg");
	this.shape_101.setTransform(84.2,30.9,0.7,0.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#7E7E7E").s().p("AgXAbQgKgKAAgRIAAAAQAAgPAKgMQAKgKANAAQAPAAAJAKQAKALAAAQIAAAAQAAAQgKALQgKALgOAAQgOAAgJgLgAgMgRQgFAHAAAKIAAAAQAAALAFAGQAFAIAHAAQAIgBAFgGQAFgHAAgKIAAgBQAAgKgFgHQgFgGgIAAQgHAAgFAGg");
	this.shape_102.setTransform(78.7,31.8,0.7,0.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#7E7E7E").s().p("AgYAdIAFgMQALAIAJAAQAKAAAAgIQAAgFgNgHQgKgEgEgDQgGgFAAgJQAAgKAHgFQAHgGAJAAQANAAAJAGIgEANQgLgGgHAAQgIAAAAAHQAAAFANAGQAKAFADADQAGAGAAAIQAAAKgHAGQgGAGgLAAQgNAAgMgJg");
	this.shape_103.setTransform(73.8,31.8,0.7,0.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#7E7E7E").s().p("AggAwIAAhdIAQAAIAAAMQAIgOAMAAQAMAAAIAKQAJAKAAARIAAADQAAAQgJAKQgIAKgMAAQgLAAgJgNIAAAggAgLgaQgFAHAAAJIAAACQAAAKAFAGQAFAHAGgBQAHAAAFgFQAFgHAAgKIAAgCQAAgKgFgGQgFgHgHABQgGAAgFAGg");
	this.shape_104.setTransform(69.1,32.5,0.7,0.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#7E7E7E").s().p("AgVAgQgHgHAAgKIAAAAQAAgXAaAAQAHAAAJADIAAgDQAAgPgPAAQgJAAgKAEIgDgNQAMgFALAAQAdAAAAAdIAAAsIgPAAIAAgJQgIALgMAAQgJAAgGgGgAgNAOIAAABQAAALAMAAQAGAAAEgEQAFgEAAgGIAAgIQgGgCgIAAQgNAAAAAMg");
	this.shape_105.setTransform(63.6,31.8,0.7,0.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#7E7E7E").s().p("AANAyIAAgtQABgPgNAAQgNAAgBAQIAAAsIgPAAIAAhjIAPAAIAAAlQAIgMALAAQALAAAGAHQAGAHAAALIAAAxg");
	this.shape_106.setTransform(58.6,30.9,0.7,0.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#7E7E7E").s().p("AARAwIgTgiIgGAAIgLAAIAAAiIgQAAIAAhfIAjAAQAOAAAKAIQAJAIAAAOQAAAVgUAHIAXAlgAgTAAIASAAQASAAAAgQQAAgRgSAAIgSAAg");
	this.shape_107.setTransform(53.1,31,0.7,0.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#7E7E7E").s().p("AgSAlIAAhIIAQAAIAAAPQAGgQAPAAIAAARIgBAAQgUAAAAAYIAAAgg");
	this.shape_108.setTransform(78.9,22.1,0.7,0.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#7E7E7E").s().p("AgUAcQgKgKAAgRIAAgBQAAgQAJgKQAJgLANAAQAOAAAIALQAIALAAAPIAAAGIguAAQADATAPAAQAKAAAIgIIAHAKQgKALgQAAQgNAAgJgKgAgJgSQgFAFgBAJIAeAAQgBgUgNAAQgGAAgEAGg");
	this.shape_109.setTransform(74.4,22.2,0.7,0.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#7E7E7E").s().p("AgHAlIgZhJIAQAAIAQA0IARg0IAQAAIgaBJg");
	this.shape_110.setTransform(69.6,22.2,0.7,0.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#7E7E7E").s().p("AgXAbQgKgKAAgQIAAgBQAAgQAKgKQAKgLANAAQAPAAAJALQAKAKAAAQIAAABQAAAQgKAKQgKALgOAAQgOAAgJgLgAgMgRQgFAHAAAKIAAABQAAAKAFAHQAFAGAHAAQAIAAAFgGQAFgHAAgKIAAgBQAAgKgFgHQgFgGgIAAQgHAAgFAGg");
	this.shape_111.setTransform(64.5,22.2,0.7,0.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#7E7E7E").s().p("AgXAbQgKgKAAgQIAAgBQAAgQAKgKQAKgLANAAQAPAAAJALQAKAKAAAQIAAABQAAAQgKAKQgJALgPAAQgNAAgKgLgAgMgRQgFAHAAAKIAAABQAAAKAFAHQAFAGAHAAQAIAAAFgGQAFgHAAgKIAAgBQAAgKgFgHQgFgGgIAAQgHAAgFAGg");
	this.shape_112.setTransform(59,22.2,0.7,0.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#7E7E7E").s().p("AATAwIAAgpIglAAIAAApIgQAAIAAhfIAQAAIAAAoIAlAAIAAgoIAQAAIAABfg");
	this.shape_113.setTransform(53.1,21.3,0.7,0.7);

	this.instance_4 = new lib._2b();
	this.instance_4.parent = this;
	this.instance_4.setTransform(80,-79.1,0.7,0.7);

	this.instance_5 = new lib._2a();
	this.instance_5.parent = this;
	this.instance_5.setTransform(19.1,-79.1,0.7,0.7);

	var maskedShapeInstanceList = [this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.instance_4,this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87}]},62).to({state:[]},87).wait(211));

	// mask-in-out - копия (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_137 = new cjs.Graphics().p("A2efNMAVkg+aMAlaAAAMAAAA+ag");
	var mask_2_graphics_138 = new cjs.Graphics().p("A8xfNMASag+aMAnJAAAMAAAA+ag");
	var mask_2_graphics_139 = new cjs.Graphics().p("A8HfNMAPig+aMAotAAAMAAAA+ag");
	var mask_2_graphics_140 = new cjs.Graphics().p("A7ifNMAM/g+aMAqGAAAMAAAA+ag");
	var mask_2_graphics_141 = new cjs.Graphics().p("A7BfNMAKug+aMArVAAAMAAAA+ag");
	var mask_2_graphics_142 = new cjs.Graphics().p("A6kfNMAIwg+aMAsZAAAMAAAA+ag");
	var mask_2_graphics_143 = new cjs.Graphics().p("A6MfNMAHGg+aMAtTAAAMAAAA+ag");
	var mask_2_graphics_144 = new cjs.Graphics().p("A55fNMAFwg+aMAuCAAAMAAAA+ag");
	var mask_2_graphics_145 = new cjs.Graphics().p("A5pfNMAEsg+aMAunAAAMAAAA+ag");
	var mask_2_graphics_146 = new cjs.Graphics().p("A5efNMAD8g+aMAvBAAAMAAAA+ag");
	var mask_2_graphics_147 = new cjs.Graphics().p("A5YfNMADfg+aMAvSAAAMAAAA+ag");
	var mask_2_graphics_148 = new cjs.Graphics().p("A5VfNMADVg+aMAvWAAAMAAAA+ag");
	var mask_2_graphics_211 = new cjs.Graphics().p("A9efNMAAAg+aMA69AAAMgVjA+ag");
	var mask_2_graphics_212 = new cjs.Graphics().p("A5HfNMAAAg+aMAyPAAAMgSYA+ag");
	var mask_2_graphics_213 = new cjs.Graphics().p("A1KfNMAAAg+aMAqVAAAMgPfA+ag");
	var mask_2_graphics_214 = new cjs.Graphics().p("AxofNMAAAg+aMAjRAAAMgM5A+ag");
	var mask_2_graphics_215 = new cjs.Graphics().p("AugfNMAAAg+aIdBAAMgKnA+ag");
	var mask_2_graphics_216 = new cjs.Graphics().p("Au6fNMAAAg+aIXoAAMgIpA+ag");
	var mask_2_graphics_217 = new cjs.Graphics().p("AvUfNMAAAg+aITDAAMgG9A+ag");
	var mask_2_graphics_218 = new cjs.Graphics().p("AvqfNMAAAg+aIPVAAMgFnA+ag");
	var mask_2_graphics_219 = new cjs.Graphics().p("Av7fNMAAAg+aIMaAAMgEiA+ag");
	var mask_2_graphics_220 = new cjs.Graphics().p("AwIfNMAAAg+aIKWAAMgDyA+ag");
	var mask_2_graphics_221 = new cjs.Graphics().p("AwPfNMAAAg+aIJGAAMgDVA+ag");
	var mask_2_graphics_222 = new cjs.Graphics().p("AwRfNMAAAg+aIIrAAMgDLA+ag");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(137).to({graphics:mask_2_graphics_137,x:233.6,y:80.3}).wait(1).to({graphics:mask_2_graphics_138,x:227.8,y:80.3}).wait(1).to({graphics:mask_2_graphics_139,x:182,y:80.3}).wait(1).to({graphics:mask_2_graphics_140,x:141,y:80.3}).wait(1).to({graphics:mask_2_graphics_141,x:104.9,y:80.3}).wait(1).to({graphics:mask_2_graphics_142,x:73.5,y:80.3}).wait(1).to({graphics:mask_2_graphics_143,x:47,y:80.3}).wait(1).to({graphics:mask_2_graphics_144,x:25.4,y:80.3}).wait(1).to({graphics:mask_2_graphics_145,x:8.5,y:80.3}).wait(1).to({graphics:mask_2_graphics_146,x:-3.6,y:80.3}).wait(1).to({graphics:mask_2_graphics_147,x:-10.8,y:80.3}).wait(1).to({graphics:mask_2_graphics_148,x:-13.2,y:80.3}).wait(1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_2_graphics_211,x:39.3,y:80.3}).wait(1).to({graphics:mask_2_graphics_212,x:1.1,y:80.3}).wait(1).to({graphics:mask_2_graphics_213,x:-33.5,y:80.3}).wait(1).to({graphics:mask_2_graphics_214,x:-64.4,y:80.3}).wait(1).to({graphics:mask_2_graphics_215,x:-91.6,y:80.3}).wait(1).to({graphics:mask_2_graphics_216,x:-95.5,y:80.3}).wait(1).to({graphics:mask_2_graphics_217,x:-98.1,y:80.3}).wait(1).to({graphics:mask_2_graphics_218,x:-100.3,y:80.3}).wait(1).to({graphics:mask_2_graphics_219,x:-102,y:80.3}).wait(1).to({graphics:mask_2_graphics_220,x:-103.3,y:80.3}).wait(1).to({graphics:mask_2_graphics_221,x:-104,y:80.3}).wait(1).to({graphics:mask_2_graphics_222,x:-104.2,y:80.3}).wait(138));

	// pic2
	this.instance_6 = new lib.a3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(68.5,7.3,1,1,0,0,0,73.5,97.3);

	this.instance_7 = new lib.a2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(66.1,-5,1,1,0,0,0,73.5,97.3);

	this.instance_8 = new lib.a1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(60.6,-11.9,1.11,1.11,0,0,0,73.5,97.4);

	var maskedShapeInstanceList = [this.instance_6,this.instance_7,this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]},137).to({state:[]},86).wait(137));

	// text2
	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AAQAqIAAg2IggA2IgRAAIAAhSIASAAIAAA1IAfg1IASAAIAABSg");
	this.shape_114.setTransform(-62.1,-41.1,0.8,0.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AAOAqIgTgjIgLANIAAAWIgSAAIAAhSIASAAIAAAmIAcgmIAUAAIgbAjIAeAvg");
	this.shape_115.setTransform(-68.6,-41.1,0.8,0.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgkA2IAAhpIARAAIAAANQAKgPAOAAQANAAAJALQAKALAAAUIAAACQAAATgKAMQgJAKgNAAQgOAAgKgOIAAAkgAgNgeQgGAHAAAMIAAACQAAALAGAIQAGAGAHAAQAIAAAGgGQAFgIAAgLIAAgCQAAgMgFgIQgGgHgIAAQgHAAgGAIg");
	this.shape_116.setTransform(-75.7,-40.2,0.8,0.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgSIAAgBQAAgSALgMQALgMAPAAQARAAALAMQAKAMAAASIAAAAQAAATgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAHAAAMIAAAAQAAAMAGAIQAGAIAIgBQAKABAFgIQAGgHAAgMIAAgBQAAgLgGgIQgGgIgJAAQgJAAgFAIg");
	this.shape_117.setTransform(-83.1,-41.1,0.8,0.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgbAtQgKgMABgVIAAgCQAAgYAEgMQAGgRARgEIAngJIAEAPIgmAJQgSAEgBASQAIgOASAAQAOAAAKALQAKAMAAAQIAAABQABASgLAMQgKALgRAAQgRAAgKgMgAgNgCQgFAGAAALIAAABQAAAMAFAHQAFAHAIAAQAJAAAGgHQAEgHAAgMIAAgBQABgLgGgGQgGgIgIAAQgIAAgFAIg");
	this.shape_118.setTransform(-90.2,-42.2,0.8,0.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AghAxIAGgNQAEADAGAAQAHAAADgJIgdhSIASAAIASA8IATg8IASAAIgcBTQgIAWgRABQgJgBgIgEg");
	this.shape_119.setTransform(-97.1,-40.1,0.8,0.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AggAqIAAhSIAiAAQANgBAGAGQAIAGAAAKQAAANgMAFQAQAFAAAOQgBAMgHAFQgJAHgNAAgAgOAbIAOAAQAPAAAAgLQAAgLgPABIgOAAgAgOgGIAOAAQAMAAAAgLQAAgJgMgBIgOAAg");
	this.shape_120.setTransform(-106.8,-41.1,0.8,0.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgSIAAgBQAAgSALgMQALgMAPAAQARAAALAMQALAMgBASIAAAAQABATgLAMQgLAMgRAAQgPAAgLgMgAgOgTQgGAHABAMIAAAAQAAAMAFAIQAGAIAIgBQAKABAFgIQAFgHAAgMIAAgBQAAgLgFgIQgGgIgJAAQgIAAgGAIg");
	this.shape_121.setTransform(-113.8,-41.1,0.8,0.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AAPAqIAAhEIgdAAIAABEIgSAAIAAhSIBBAAIAABSg");
	this.shape_122.setTransform(-120.8,-41.1,0.8,0.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AAQAqIAAg2IggA2IgRAAIAAhSIASAAIAAA1IAfg1IASAAIAABSg");
	this.shape_123.setTransform(-127.7,-41.1,0.8,0.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgIAqIAAhEIgXAAIAAgOIA/AAIAAAOIgXAAIAABEg");
	this.shape_124.setTransform(-133.9,-41.1,0.8,0.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AARApIgRgdIgQAdIgTAAIAagpIgZgoIATAAIAPAbIARgbIASAAIgZAoIAaApg");
	this.shape_125.setTransform(-41,-54.5,0.8,0.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgUIAAAAQAAgSAKgMQAKgMAPAAQAQAAAJANQAJALAAASIAAAHIgzAAQACAVARAAQALAAAKgJIAIAMQgLAMgSAAQgPAAgLgLgAgQgEIAiAAQgBgYgQAAQgPAAgCAYg");
	this.shape_126.setTransform(-47.3,-54.5,0.8,0.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgVAfQgLgMAAgTIAAAAQABgSAKgMQALgMAPAAQARAAAKALIgJANQgIgJgJAAQgIAAgFAIQgHAHAAAMIAAAAQAAAMAHAIQAFAHAIAAQAKAAAIgIIAIAMQgMAMgPAAQgPAAgLgMg");
	this.shape_127.setTransform(-53.4,-54.5,0.8,0.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AggApIAAhRIAiAAQAMAAAHAFQAIAGAAAKQgBANgMAGQARAEgBAOQAAAXgdAAgAgOAbIAOAAQAOAAAAgLQABgLgPAAIgOAAgAgOgGIANAAQAMAAABgLQAAgKgMAAIgOAAg");
	this.shape_128.setTransform(-59.6,-54.5,0.8,0.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AARApIAAgcIgOAAIgPAcIgVAAIAUgfQgRgGAAgRQAAgbAeAAIAiAAIAABRgAgJgXQgEADAAAHQAAANAOAAIAQAAIAAgaIgNAAQgJAAgEADg");
	this.shape_129.setTransform(-69.8,-54.5,0.8,0.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AglApIABgPIAFABQAHAAADgLQAEgPAAgqIA3AAIAABSIgSAAIAAhDIgUAAQAAAqgHAOQgFAMgPAAg");
	this.shape_130.setTransform(-76.6,-54.5,0.8,0.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AAZAzIAAgTIgxAAIgBATIgQAAIAAgiIAIAAQAJgSAAglIAAgLIA4AAIAABCIAKAAIgCAigAgPARIAdAAIAAg0IgVAAQAAAjgIARg");
	this.shape_131.setTransform(-83.3,-53.8,0.8,0.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AAOApIgTgiIgLANIAAAVIgSAAIAAhRIASAAIAAAmIAdgmIAUAAIgbAiIAdAvg");
	this.shape_132.setTransform(-92.9,-54.5,0.8,0.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgTIAAAAQAAgSALgMQAKgMAQAAQARAAAKAMQALAMAAASIAAAAQAAATgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAIAAALIAAAAQAAAMAGAIQAGAHAIAAQAJAAAGgHQAGgIAAgLIAAgBQAAgMgGgHQgGgIgJAAQgJAAgFAIg");
	this.shape_133.setTransform(-100.1,-54.5,0.8,0.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AAZAzIAAgTIgxAAIgBATIgQAAIAAgiIAIAAQAJgSAAglIAAgLIA4AAIAABCIAKAAIgCAigAgPARIAdAAIAAg0IgWAAQAAAkgHAQg");
	this.shape_134.setTransform(-107.3,-53.8,0.8,0.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgZAkQgHgHAAgMIAAgBQAAgNAIgGQAIgGANAAQAJAAAKADIAAgDQAAgRgRAAQgJAAgMAEIgDgOQAMgGAOAAQAgAAAAAgIAAAzIgRAAIAAgKQgJAMgOAAQgKAAgIgHgAgPAPIAAABQAAANAOAAQAHAAAFgEQAFgFAAgHIAAgIQgIgDgHAAQgPAAgBANg");
	this.shape_135.setTransform(-114.1,-54.5,0.8,0.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgVAfQgKgMAAgTIAAAAQAAgSALgMQAKgMAQAAQAPAAALALIgIANQgJgJgJAAQgIAAgGAIQgFAHAAAMIAAAAQAAAMAGAIQAFAHAJAAQAIAAAKgIIAHAMQgLAMgQAAQgPAAgLgMg");
	this.shape_136.setTransform(-120.2,-54.5,0.8,0.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgYAkQgIgHAAgMIAAgBQAAgMAIgHQAIgGAOAAQAIAAAKADIAAgDQAAgRgRAAQgKAAgLAEIgEgOQANgGANAAQAhAAAAAgIAAAzIgRAAIAAgKQgJAMgNAAQgLAAgHgHgAgPAPIAAABQAAANAOAAQAHAAAFgEQAFgFAAgHIAAgIQgIgDgIAAQgPAAAAANg");
	this.shape_137.setTransform(-126.7,-54.5,0.8,0.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AAQApIAAgiIgfAAIAAAiIgRAAIAAhRIARAAIAAAhIAfAAIAAghIARAAIAABRg");
	this.shape_138.setTransform(-133.2,-54.5,0.8,0.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AAWApIAAg2IgWAkIAAAAIgVgkIAAA2IgRAAIAAhRIASAAIAUAkIAWgkIARAAIAABRg");
	this.shape_139.setTransform(-22.2,-67.9,0.8,0.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgaAfQgLgLAAgTIAAgBQAAgSALgMQALgMAPAAQARAAALAMQAKAMAAASIAAABQAAASgLAMQgKAMgRAAQgPAAgLgMgAgOgTQgGAIAAALIAAABQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMIAAgBQAAgLgGgIQgGgIgJAAQgIAAgGAIg");
	this.shape_140.setTransform(-29.8,-67.9,0.8,0.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgkA2IAAhpIARAAIAAANQAKgPAOAAQANAAAJAKQAKAMAAAUIAAACQAAATgKALQgJALgNAAQgOAAgKgOIAAAkgAgNgeQgGAHAAANIAAABQAAALAGAIQAGAGAHABQAIgBAGgGQAFgIAAgLIAAgBQAAgNgGgHQgFgIgIAAQgHAAgGAIg");
	this.shape_141.setTransform(-36.9,-67,0.8,0.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgaAfQgLgLAAgTIAAgBQAAgSALgMQALgMAPAAQARAAALAMQAKAMAAASIAAABQAAASgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAHAAAMIAAABQAAAMAGAHQAGAIAIAAQAJAAAGgIQAGgHAAgMIAAgBQAAgLgGgIQgGgIgJAAQgIAAgGAIg");
	this.shape_142.setTransform(-44.3,-67.9,0.8,0.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgaAtQgLgMABgWIAAgCQgBgYAFgLQAGgSASgDIAmgJIAEAOIgmAJQgSAFgBASQAIgPASAAQAOAAAKAMQAKAMAAAQIAAABQABASgLALQgKAMgRAAQgQAAgKgMgAgOgCQgFAGAAAMIAAAAQAAALAFAIQAHAHAHAAQAJAAAGgHQAEgIAAgLIAAAAQAAgMgFgGQgFgIgJAAQgIAAgGAIg");
	this.shape_143.setTransform(-51.4,-69,0.8,0.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AAbApIAAhRIASAAIAABRgAgsApIAAhRIARAAIAAAdIAPAAQAeAAAAAZQAAAcgegBgAgbAcIAPAAQAMAAAAgOQAAgMgMAAIgPAAg");
	this.shape_144.setTransform(-59.4,-67.9,0.8,0.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AggApIAAhRIAiAAQAMAAAHAFQAIAFAAALQAAANgMAFQAPAGAAAOQAAAKgHAGQgIAHgOgBgAgOAcIAOAAQAOAAAAgMQAAgKgOgBIgOAAgAgOgGIAOAAQAMAAgBgKQAAgLgLAAIgOAAg");
	this.shape_145.setTransform(-67,-67.9,0.8,0.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AAWApIAAg2IgWAkIgVgkIAAA2IgSAAIAAhRIASAAIAVAkIAWgkIASAAIAABRg");
	this.shape_146.setTransform(-77.6,-67.9,0.8,0.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AAQApIAAg1IggA1IgRAAIAAhRIASAAIAAA0IAgg0IARAAIAABRg");
	this.shape_147.setTransform(-85.1,-67.9,0.8,0.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgzApIAAhRIARAAIAABCIAaAAIAAhCIARAAIAABCIAaAAIAAhCIARAAIAABRg");
	this.shape_148.setTransform(-93.6,-67.9,0.8,0.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgeApIAAhRIARAAIAAAdIANAAQAfAAAAAZQAAAcgfgBgAgNAcIANAAQAOAAAAgOQAAgMgOAAIgNAAg");
	this.shape_149.setTransform(-101.4,-67.9,0.8,0.8);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AglApIABgPIAFAAQAHAAADgKQAEgPAAgqIA3AAIAABSIgSAAIAAhDIgVAAQABAqgHAOQgFAMgPAAg");
	this.shape_150.setTransform(-108.6,-67.9,0.8,0.8);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgaAfQgLgLAAgTIAAgBQAAgSALgMQALgMAPAAQARAAALAMQAKAMAAASIAAABQAAASgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAHAAAMIAAABQAAAMAGAHQAGAIAIAAQAJAAAGgIQAGgHAAgMIAAgBQAAgLgGgIQgGgIgJAAQgIAAgGAIg");
	this.shape_151.setTransform(-115,-67.9,0.8,0.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgbAtQgKgMAAgWIAAgCQABgYAEgLQAGgSARgDIAogJIACAOIglAJQgSAFgBASQAIgPASAAQAOAAAKAMQALAMgBAQIAAABQAAASgKALQgKAMgRAAQgRAAgKgMgAgNgCQgGAGAAAMIAAAAQAAALAGAIQAFAHAIAAQAJAAAGgHQAEgIAAgLIAAAAQABgMgGgGQgGgIgIAAQgIAAgFAIg");
	this.shape_152.setTransform(-122.1,-69,0.8,0.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgbApQgNgQAAgYIAAgBQgBgYAOgQQAOgPAUAAQAUAAAOAMIgJAPQgMgKgNAAQgMAAgIAKQgIALgBARIAAABQABARAIALQAJAKAMAAQANAAAMgLIAIAOQgOAOgVAAQgTAAgOgPg");
	this.shape_153.setTransform(-132.7,-69,0.8,0.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AhpDmIB6nKIBYAAIh5HKg");
	this.shape_154.setTransform(0.3,-79.2,0.8,0.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#CB0927").s().p("AiNEUICWonICFAAIiWIng");
	this.shape_155.setTransform(-4.5,-42.8,0.8,0.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#D1D1D1").s().p("AjCGDIBYlKICEAAIB3m6IAyAAIjOMEg");
	this.shape_156.setTransform(-4.7,-34,0.8,0.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#DC052B").s().p("Av4GaIAAszIfxAAIjZMzg");
	this.shape_157.setTransform(-68.7,-53.4,0.8,0.8);

	var maskedShapeInstanceList = [this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128,this.shape_129,this.shape_130,this.shape_131,this.shape_132,this.shape_133,this.shape_134,this.shape_135,this.shape_136,this.shape_137,this.shape_138,this.shape_139,this.shape_140,this.shape_141,this.shape_142,this.shape_143,this.shape_144,this.shape_145,this.shape_146,this.shape_147,this.shape_148,this.shape_149,this.shape_150,this.shape_151,this.shape_152,this.shape_153,this.shape_154,this.shape_155,this.shape_156,this.shape_157];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114}]},137).to({state:[]},86).wait(137));

	// mask-in-out - копия: 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_211 = new cjs.Graphics().p("A2efNMAVkg+aMAlaAAAMAAAA+ag");
	var mask_3_graphics_212 = new cjs.Graphics().p("A8xfNMASag+aMAnJAAAMAAAA+ag");
	var mask_3_graphics_213 = new cjs.Graphics().p("A8HfNMAPig+aMAotAAAMAAAA+ag");
	var mask_3_graphics_214 = new cjs.Graphics().p("A7ifNMAM/g+aMAqGAAAMAAAA+ag");
	var mask_3_graphics_215 = new cjs.Graphics().p("A7BfNMAKug+aMArVAAAMAAAA+ag");
	var mask_3_graphics_216 = new cjs.Graphics().p("A6kfNMAIwg+aMAsZAAAMAAAA+ag");
	var mask_3_graphics_217 = new cjs.Graphics().p("A6MfNMAHGg+aMAtTAAAMAAAA+ag");
	var mask_3_graphics_218 = new cjs.Graphics().p("A55fNMAFwg+aMAuCAAAMAAAA+ag");
	var mask_3_graphics_219 = new cjs.Graphics().p("A5pfNMAEsg+aMAunAAAMAAAA+ag");
	var mask_3_graphics_220 = new cjs.Graphics().p("A5efNMAD8g+aMAvBAAAMAAAA+ag");
	var mask_3_graphics_221 = new cjs.Graphics().p("A5YfNMADfg+aMAvSAAAMAAAA+ag");
	var mask_3_graphics_222 = new cjs.Graphics().p("A5VfNMADVg+aMAvWAAAMAAAA+ag");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(211).to({graphics:mask_3_graphics_211,x:233.6,y:80.3}).wait(1).to({graphics:mask_3_graphics_212,x:227.8,y:80.3}).wait(1).to({graphics:mask_3_graphics_213,x:182,y:80.3}).wait(1).to({graphics:mask_3_graphics_214,x:141,y:80.3}).wait(1).to({graphics:mask_3_graphics_215,x:104.9,y:80.3}).wait(1).to({graphics:mask_3_graphics_216,x:73.5,y:80.3}).wait(1).to({graphics:mask_3_graphics_217,x:47,y:80.3}).wait(1).to({graphics:mask_3_graphics_218,x:25.4,y:80.3}).wait(1).to({graphics:mask_3_graphics_219,x:8.5,y:80.3}).wait(1).to({graphics:mask_3_graphics_220,x:-3.6,y:80.3}).wait(1).to({graphics:mask_3_graphics_221,x:-10.8,y:80.3}).wait(1).to({graphics:mask_3_graphics_222,x:-13.2,y:80.3}).wait(1).to({graphics:null,x:0,y:0}).wait(137));

	// text3
	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAOAAQARAAAJAMQAJAMAAATIAAAGIgzAAQACAVASAAQALAAAJgJIAIAMQgNAMgQAAQgPAAgLgLgAgRgFIAjAAQgBgWgRAAQgOAAgDAWg");
	this.shape_158.setTransform(-1,-32.2,0.75,0.75);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AAOAqIgTgjIgLANIAAAWIgSAAIAAhTIASAAIAAAoIAdgoIAUAAIgbAjIAdAwg");
	this.shape_159.setTransform(-6.6,-32.2,0.75,0.75);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AgkA2IAAhqIARAAIAAAOQAKgPAOAAQANAAAJAKQAKAMAAAUIAAACQAAATgKALQgJALgNAAQgOAAgKgOIAAAkgAgNgeQgGAHAAAMIAAACQAAALAGAHQAGAHAHAAQAIAAAGgHQAFgHAAgLIAAgCQAAgMgGgHQgFgIgIAAQgHAAgGAIg");
	this.shape_160.setTransform(-13.3,-31.4,0.75,0.75);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgSIAAgBQAAgSALgMQALgMAPAAQARAAALAMQAKAMAAASIAAABQAAASgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAHAAAMIAAABQAAALAGAIQAGAIAIAAQAKAAAFgIQAGgHAAgMIAAgBQAAgLgGgIQgGgIgJAAQgIAAgGAIg");
	this.shape_161.setTransform(-20.3,-32.2,0.75,0.75);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AgaAtQgLgMABgWIAAgCQgBgXAFgMQAGgRASgEIAmgJIAEAOIgmAJQgSAFgBASQAHgOATAAQAOAAAKALQAKALAAARIAAAAQABATgLALQgKAMgRAAQgQAAgKgMgAgOgDQgFAHAAALIAAABQAAALAFAHQAHAIAHAAQAJAAAGgIQAEgHAAgLIAAgBQAAgLgFgHQgFgHgJAAQgIAAgGAHg");
	this.shape_162.setTransform(-26.9,-33.3,0.75,0.75);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AghAyIAGgOQAEADAGAAQAGAAAEgJIgdhTIASAAIATA9IASg9IATAAIgdBVQgFALgEAGQgGAEgKAAQgJAAgIgDg");
	this.shape_163.setTransform(-33.4,-31.3,0.75,0.75);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgbAtQgJgMgBgWIAAgCQABgXAEgMQAGgRARgEIAogJIACAOIglAJQgSAFgBASQAIgOASAAQAOAAAKALQALALAAARIAAAAQAAATgLALQgKAMgRAAQgQAAgLgMgAgNgDQgFAHgBALIAAABQABALAFAHQAGAIAHAAQAJAAAFgIQAFgHABgLIAAgBQAAgLgGgHQgFgHgJAAQgHAAgGAHg");
	this.shape_164.setTransform(-42.8,-33.3,0.75,0.75);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgSIAAgBQAAgSALgMQALgMAPAAQARAAALAMQAKAMAAASIAAABQAAASgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAHAAAMIAAABQAAALAGAIQAGAIAIAAQAJAAAGgIQAGgIAAgLIAAgBQAAgLgGgIQgGgIgJAAQgIAAgGAIg");
	this.shape_165.setTransform(-49.6,-32.2,0.75,0.75);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJAMAAATIAAAGIgzAAQACAVASAAQALAAAJgJIAIAMQgMAMgRAAQgPAAgLgLgAgLgVQgEAGgBAKIAiAAQgBgKgEgGQgFgGgHAAQgHAAgFAGg");
	this.shape_166.setTransform(-59.1,-32.2,0.75,0.75);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AARAqIAAg2IghA2IgRAAIAAhTIASAAIAAA2IAgg2IARAAIAABTg");
	this.shape_167.setTransform(-65.5,-32.2,0.75,0.75);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AAQAqIAAgiIgfAAIAAAiIgRAAIAAhTIARAAIAAAiIAfAAIAAgiIARAAIAABTg");
	this.shape_168.setTransform(-72,-32.2,0.75,0.75);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJAMAAATIAAAGIgzAAQACAVASAAQALAAAJgJIAIAMQgMAMgRAAQgPAAgLgLgAgLgVQgEAGgBAKIAiAAQgCgWgPAAQgHAAgFAGg");
	this.shape_169.setTransform(-78.3,-32.2,0.75,0.75);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AglApIABgPIAFAAQAIAAACgKQAEgOAAgrIA3AAIAABSIgRAAIAAhCIgWAAQAAAogGAPQgGAMgOAAg");
	this.shape_170.setTransform(-85.1,-32.2,0.75,0.75);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AgfAqIAAhTIAhAAQAMAAAIAGQAGAGAAAKQAAANgMAGQAQAEABAOQAAALgJAGQgIAGgNABgAgOAbIAOAAQAPABAAgLQgBgLgOAAIgOAAgAgOgGIANAAQANAAAAgLQAAgKgMABIgOAAg");
	this.shape_171.setTransform(-90.8,-32.2,0.75,0.75);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgYAkQgIgHAAgLIAAgBQAAgNAIgGQAIgHAOAAQAKAAAIADIAAgDQAAgRgRAAQgLAAgKAFIgEgPQAOgGAMAAQAhAAAAAhIAAAyIgRAAIAAgKQgIAMgOAAQgLAAgHgHgAgPAQIAAABQAAANAOAAQAHAAAFgFQAFgEAAgHIAAgJQgFgDgLAAQgPAAAAAOg");
	this.shape_172.setTransform(-97.2,-32.2,0.75,0.75);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgIAqIAAhDIgXAAIAAgQIA+AAIAAAQIgWAAIAABDg");
	this.shape_173.setTransform(-102.5,-32.2,0.75,0.75);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AgVAfQgLgMABgSIAAgBQgBgSALgMQAMgMAOAAQAQAAALALIgJANQgIgIgJAAQgIAAgFAHQgHAHABAMIAAABQgBAMAHAHQAGAHAHAAQAKAAAIgIIAIAMQgMAMgPAAQgPAAgLgMg");
	this.shape_174.setTransform(-107.9,-32.2,0.75,0.75);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AAZAzIAAgTIgxAAIgCATIgPAAIAAgiIAIAAQAJgSAAglIAAgMIA4AAIAABDIAKAAIgCAigAgPARIAdAAIAAgzIgWAAQAAAigHARg");
	this.shape_175.setTransform(-114.2,-31.5,0.75,0.75);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAOAAQARAAAJAMQAJAMAAATIAAAGIg0AAQAEAVARAAQAKAAAKgJIAIAMQgNAMgQAAQgPAAgLgLgAgLgVQgEAGgCAKIAiAAQAAgKgEgGQgFgGgIAAQgGAAgFAGg");
	this.shape_176.setTransform(-120.5,-32.2,0.75,0.75);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AgkA2IAAhqIARAAIAAAOQAKgPANAAQAOAAAJAKQAKAMAAAUIAAACQAAATgKALQgJALgOAAQgNAAgKgOIAAAkgAgNgeQgGAHAAAMIAAACQAAALAGAHQAGAHAHAAQAIAAAGgHQAFgHAAgLIAAgCQAAgMgGgHQgFgIgIAAQgHAAgGAIg");
	this.shape_177.setTransform(-126.9,-31.4,0.75,0.75);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AAPAqIAAhDIgdAAIAABDIgSAAIAAhTIBBAAIAABTg");
	this.shape_178.setTransform(-133.7,-32.2,0.75,0.75);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAOAAQARAAAJAMQAJANAAARIAAAHIgzAAQACAVASAAQALAAAJgJIAIALQgLANgSAAQgPAAgLgLgAgRgFIAjAAQgCgWgQAAQgOAAgDAWg");
	this.shape_179.setTransform(-46.5,-44.8,0.75,0.75);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("Ag0ApIAAhSIASAAIAABDIAaAAIAAhDIARAAIAABDIAaAAIAAhDIARAAIAABSg");
	this.shape_180.setTransform(-54.4,-44.8,0.75,0.75);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AgZAkQgHgHAAgLIAAgBQAAgNAIgGQAIgHAOAAQAIAAAKADIAAgDQAAgRgSAAQgJAAgLAFIgEgPQAMgGAOAAQAhAAAAAhIAAAyIgRAAIAAgKQgJAMgOAAQgKAAgIgHgAgPAQIAAABQAAAMAOAAQAHAAAFgEQAFgFAAgHIAAgIQgHgDgJAAQgPAAAAAOg");
	this.shape_181.setTransform(-62.2,-44.8,0.75,0.75);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AggApIAAhSIAiAAQAbABgBAVQABANgMAGQAQAEAAAOQAAAXgfAAgAgOAcIAOAAQAPAAAAgLQAAgMgPAAIgOAAgAgOgGIAOAAQALAAAAgKQAAgLgLABIgOAAg");
	this.shape_182.setTransform(-68,-44.8,0.75,0.75);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AgIApIAAhCIgWAAIAAgQIA+AAIAAAQIgYAAIAABCg");
	this.shape_183.setTransform(-76.8,-44.8,0.75,0.75);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AghAyIAGgPQAEADAFAAQAIAAADgJIgehSIATAAIASA9IATg9IASAAIgdBUQgHAXgRgBQgIAAgJgDg");
	this.shape_184.setTransform(-82.5,-43.9,0.75,0.75);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AAPApIAAghIgdAAIAAAhIgSAAIAAhSIASAAIAAAiIAdAAIAAgiIASAAIAABSg");
	this.shape_185.setTransform(-88.8,-44.8,0.75,0.75);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AgkA2IAAhqIASAAIAAAOQAJgPAOAAQANAAAJAKQAKAMAAAUIAAACQAAATgKAMQgJAKgNAAQgNAAgKgOIAAAkgAgNgeQgGAHAAAMIAAACQAAAKAGAIQAGAIAHAAQAJAAAFgIQAGgHAAgLIAAgCQAAgMgGgHQgGgIgIABQgHAAgGAHg");
	this.shape_186.setTransform(-95.3,-44,0.75,0.75);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAOAAQARAAAJAMQAJANAAARIAAAHIgzAAQACAVASAAQALAAAJgJIAIALQgLANgSAAQgPAAgLgLgAgRgFIAjAAQgCgWgQAAQgOAAgDAWg");
	this.shape_187.setTransform(-102,-44.8,0.75,0.75);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AggApIAAhSIAiAAQAMAAAHAGQAHAGABAKQAAANgMAGQAPAEAAAOQAAALgHAHQgJAFgOAAgAgOAcIAOAAQAOAAAAgLQAAgMgOAAIgOAAgAgOgGIAOAAQAMAAgBgKQAAgLgLABIgOAAg");
	this.shape_188.setTransform(-108,-44.8,0.75,0.75);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJANAAARIAAAHIgzAAQABAKAGAGQAGAFAHAAQALAAAJgJIAIALQgLANgSAAQgPAAgLgLgAgQgFIAiAAQgCgWgPAAQgQAAgBAWg");
	this.shape_189.setTransform(-114.3,-44.8,0.75,0.75);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AgkA2IAAhqIASAAIAAAOQAJgPAOAAQANAAAJAKQAKAMAAAUIAAACQAAATgKAMQgJAKgNAAQgNAAgKgOIAAAkgAgNgeQgGAHAAAMIAAACQAAALAGAHQAGAIAHAAQAIAAAGgIQAGgHAAgLIAAgCQAAgMgGgHQgGgIgIABQgHAAgGAHg");
	this.shape_190.setTransform(-120.7,-44,0.75,0.75);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJANAAARIAAAHIgzAAQADAVAQAAQAMAAAIgJIAJALQgLANgSAAQgPAAgLgLgAgQgFIAiAAQgBgWgQAAQgPAAgCAWg");
	this.shape_191.setTransform(-127.4,-44.8,0.75,0.75);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AAPApIAAhCIgdAAIAABCIgSAAIAAhSIBBAAIAABSg");
	this.shape_192.setTransform(-133.7,-44.8,0.75,0.75);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgUAqIAAhSIARAAIAAARQAHgSASAAIAAATIgBAAQgLAAgHAHQgGAIAAANIAAAkg");
	this.shape_193.setTransform(-44.9,-57.4,0.75,0.75);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgXAfQgLgMAAgSIAAgBQAAgSAKgMQAKgMAOAAQARAAAJAMQAJAMAAATIAAAFIg0AAQADAWASAAQAKAAAKgIIAIAKQgNANgQAAQgPAAgLgMgAgRgFIAiAAQAAgKgEgGQgFgHgIABQgOAAgDAWg");
	this.shape_194.setTransform(-50.4,-57.3,0.75,0.75);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AgHAqIgdhTIATAAIARA8IATg8IASAAIgcBTg");
	this.shape_195.setTransform(-56.3,-57.4,0.75,0.75);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgSIAAgBQAAgSALgMQALgMAPAAQARAAALAMQALAMgBASIAAABQABASgLAMQgLAMgRAAQgPAAgLgMgAgOgTQgGAIABALIAAABQAAALAFAIQAGAHAIABQAKgBAFgHQAGgIAAgLIAAgBQAAgLgGgIQgGgHgJAAQgIAAgGAHg");
	this.shape_196.setTransform(-62.4,-57.3,0.75,0.75);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgbAfQgKgMgBgSIAAgBQABgSAKgMQAMgMAPAAQARAAAKAMQAMAMAAASIAAABQAAASgMAMQgKAMgRAAQgQAAgLgMgAgOgTQgGAIAAALIAAABQAAALAGAIQAGAHAIABQAJgBAGgHQAGgIAAgLIAAgBQgBgLgFgIQgGgHgJAAQgIAAgGAHg");
	this.shape_197.setTransform(-69.1,-57.3,0.75,0.75);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AAWA3IAAgvIgqAAIAAAvIgSAAIAAhtIASAAIAAAuIAqAAIAAguIASAAIAABtg");
	this.shape_198.setTransform(-76.4,-58.4,0.75,0.75);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AAcAqIAAhSIARAAIAABSgAgsAqIAAhSIASAAIAAAdIAOAAQAeAAAAAZQAAAbgeABgAgaAbIANAAQANAAABgMQgBgNgNAAIgNAAg");
	this.shape_199.setTransform(-87.4,-57.4,0.75,0.75);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AgVAfQgKgMAAgSIAAgBQAAgSAKgMQALgMAPAAQAQAAALAKIgIAOQgJgIgJAAQgIAAgGAHQgGAHAAAMIAAABQAAAMAGAHQAGAHAJAAQAIAAAJgIIAIAMQgLAMgQAAQgPAAgLgMg");
	this.shape_200.setTransform(-94.3,-57.3,0.75,0.75);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AgbAfQgLgMAAgSIAAgBQAAgSALgMQAMgMAPAAQARAAAKAMQAMAMAAASIAAABQAAASgMAMQgKAMgRAAQgPAAgMgMgAgOgTQgFAIgBALIAAABQAAALAHAIQAFAHAIABQAJgBAGgHQAGgIAAgLIAAgBQAAgLgGgIQgGgHgJAAQgIAAgGAHg");
	this.shape_201.setTransform(-100.6,-57.3,0.75,0.75);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgVAfQgLgMAAgSIAAgBQABgSAKgMQALgMAPAAQARAAAKAKIgJAOQgIgIgJAAQgIAAgFAHQgHAHAAAMIAAABQAAAMAHAHQAFAHAJAAQAIAAAKgIIAHAMQgLAMgQAAQgPAAgLgMg");
	this.shape_202.setTransform(-106.6,-57.3,0.75,0.75);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AgXAfQgLgMAAgSIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJAMAAATIAAAFIgzAAQACAWASAAQAKAAAKgIIAIAKQgMANgRAAQgPAAgLgMgAgLgWQgEAHgBAKIAiAAQgBgKgEgGQgFgHgHABQgHAAgFAFg");
	this.shape_203.setTransform(-112.7,-57.3,0.75,0.75);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AglApIABgPIAFABQAHAAADgLQAEgOAAgrIA3AAIAABSIgSAAIAAhCIgUAAQAAApgHAOQgGAMgOAAg");
	this.shape_204.setTransform(-119.4,-57.3,0.75,0.75);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AAbAqIAAhSIASAAIAABSgAgsAqIAAhSIASAAIAAAdIAOAAQAeAAAAAZQAAAbgeABgAgaAbIANAAQANAAAAgMQAAgNgNAAIgNAAg");
	this.shape_205.setTransform(-126.3,-57.4,0.75,0.75);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AAPAqIAAhDIgdAAIAABDIgSAAIAAhSIBBAAIAABSg");
	this.shape_206.setTransform(-133.7,-57.4,0.75,0.75);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJANQAJAMAAARIAAAHIgzAAQABAKAGAGQAGAFAHAAQALAAAJgJIAIAMQgLAMgSAAQgPAAgLgLgAgLgVQgEAGgBAKIAiAAQgCgWgPAAQgHAAgFAGg");
	this.shape_207.setTransform(-60.5,-69.9,0.75,0.75);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AAbAqIAAhTIASAAIAABTgAgsAqIAAhTIASAAIAAAeIAOAAQAeAAAAAZQAAAbgeABgAgaAbIANAAQANAAAAgMQAAgOgNAAIgNAAg");
	this.shape_208.setTransform(-67.8,-69.9,0.75,0.75);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AAPAqIAAgiIgdAAIAAAiIgSAAIAAhTIASAAIAAAiIAdAAIAAgiIASAAIAABTg");
	this.shape_209.setTransform(-75.2,-69.9,0.75,0.75);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AAYAzIAAgSIgwAAIgCASIgPAAIAAgiIAIAAQAIgSAAglIAAgMIA4AAIAABDIALAAIgCAigAgPARIAdAAIAAg0IgWAAQAAAkgHAQg");
	this.shape_210.setTransform(-81.8,-69.3,0.75,0.75);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgSIAAgBQAAgSALgMQALgMAPAAQARAAALAMQAKAMAAASIAAABQAAASgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAIAAALIAAABQAAALAGAIQAGAHAIAAQAJAAAGgHQAGgIAAgLIAAgBQAAgLgGgIQgGgHgJgBQgJABgFAHg");
	this.shape_211.setTransform(-88.3,-69.9,0.75,0.75);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AggAqIAAhTIAiAAQANAAAGAGQAIAGAAAKQAAAMgMAGQAPAEAAAPQAAAMgIAFQgHAHgOAAgAgOAbIAPAAQANABAAgLQAAgMgOABIgOAAgAgOgGIAOAAQAMAAgBgLQAAgKgLAAIgOAAg");
	this.shape_212.setTransform(-94.6,-69.9,0.75,0.75);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AgbAfQgKgMgBgSIAAgBQABgSAKgMQAMgMAPAAQAQAAAMAMQAKAMABASIAAABQgBASgKAMQgMAMgQAAQgPAAgMgMgAgOgTQgFAIgBALIAAABQAAALAHAIQAFAHAIAAQAJAAAGgHQAFgHABgMIAAgBQgBgLgFgIQgGgHgJgBQgIABgGAHg");
	this.shape_213.setTransform(-101.1,-69.9,0.75,0.75);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AgkA2IAAhqIARAAIAAAOQALgPANAAQANAAAJAKQAKAMAAAUIAAACQAAATgKAMQgJAKgNAAQgNAAgLgOIAAAkgAgNgeQgGAIAAALIAAACQAAALAGAHQAGAIAHgBQAIABAGgIQAGgHAAgLIAAgCQAAgLgGgIQgGgHgIgBQgHABgGAHg");
	this.shape_214.setTransform(-107.8,-69.1,0.75,0.75);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AAPAqIAAhEIgdAAIAABEIgSAAIAAhTIBBAAIAABTg");
	this.shape_215.setTransform(-114.6,-69.9,0.75,0.75);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AgVAfQgKgMAAgSIAAgBQAAgSAKgMQALgMAPAAQAPAAAMAKIgIAOQgJgIgJAAQgIAAgGAHQgGAIAAALIAAABQAAAMAGAHQAGAHAJAAQAJAAAIgIIAIANQgLALgQAAQgPAAgLgMg");
	this.shape_216.setTransform(-120.6,-69.9,0.75,0.75);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAOAAQARAAAJANQAJAMAAARIAAAHIg0AAQAEAVARAAQALAAAJgJIAIAMQgMAMgRAAQgPAAgLgLgAgRgFIAjAAQgBgWgRAAQgOAAgDAWg");
	this.shape_217.setTransform(-126.6,-69.9,0.75,0.75);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AgmA3IAAhtIBFAAIAAARIgzAAIAAAbIAXAAQAQAAAKAIQAKAIAAAPQAAAQgLAJQgKAJgRAAgAgUAmIAWAAQATAAAAgQQAAgRgTAAIgWAAg");
	this.shape_218.setTransform(-133.1,-70.9,0.75,0.75);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AicFpIDBrRIB4AAIjBLRg");
	this.shape_219.setTransform(25.6,-78.4,0.75,0.75);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#CB0927").s().p("AiqEtIChpZIC0AAIiiJZg");
	this.shape_220.setTransform(21.5,-37.8,0.75,0.75);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#DBDBDA").s().p("Aj8HiIBhlqICzAAICipZIBDAAIkBPDg");
	this.shape_221.setTransform(20.4,-24.2,0.75,0.75);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#DC052B").s().p("Az2HiIAAvCMAntAAAIkCPCg");
	this.shape_222.setTransform(-53.7,-51.3,0.75,0.75);

	this.instance_9 = new lib.Анимация3("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-53.6,-46.8);
	this.instance_9._off = true;

	this.instance_10 = new lib.Анимация4("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-53.6,-46.8);
	this.instance_10.alpha = 0;

	var maskedShapeInstanceList = [this.shape_158,this.shape_159,this.shape_160,this.shape_161,this.shape_162,this.shape_163,this.shape_164,this.shape_165,this.shape_166,this.shape_167,this.shape_168,this.shape_169,this.shape_170,this.shape_171,this.shape_172,this.shape_173,this.shape_174,this.shape_175,this.shape_176,this.shape_177,this.shape_178,this.shape_179,this.shape_180,this.shape_181,this.shape_182,this.shape_183,this.shape_184,this.shape_185,this.shape_186,this.shape_187,this.shape_188,this.shape_189,this.shape_190,this.shape_191,this.shape_192,this.shape_193,this.shape_194,this.shape_195,this.shape_196,this.shape_197,this.shape_198,this.shape_199,this.shape_200,this.shape_201,this.shape_202,this.shape_203,this.shape_204,this.shape_205,this.shape_206,this.shape_207,this.shape_208,this.shape_209,this.shape_210,this.shape_211,this.shape_212,this.shape_213,this.shape_214,this.shape_215,this.shape_216,this.shape_217,this.shape_218,this.shape_219,this.shape_220,this.shape_221,this.shape_222,this.instance_9,this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158}]},211).to({state:[{t:this.instance_9}]},78).to({state:[{t:this.instance_10}]},8).to({state:[]},1).wait(62));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(289).to({_off:false},0).to({_off:true,alpha:0},8,cjs.Ease.get(1)).wait(63));

	// pic3
	this.instance_11 = new lib._4();
	this.instance_11.parent = this;
	this.instance_11.setTransform(48,-119);

	this.instance_12 = new lib.Анимация5("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(92,6);
	this.instance_12._off = true;

	this.instance_13 = new lib.Анимация6("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(92,6);
	this.instance_13.alpha = 0;

	var maskedShapeInstanceList = [this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11}]},211).to({state:[{t:this.instance_12}]},78).to({state:[{t:this.instance_13}]},8).to({state:[]},1).wait(62));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(289).to({_off:false},0).to({_off:true,alpha:0},8,cjs.Ease.get(1)).wait(63));

	// bg
	this.instance_14 = new lib.bg();
	this.instance_14.parent = this;
	this.instance_14.setTransform(0,0,1,1,0,0,0,150,125);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(360));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,305,250);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hgj();
	this.instance.parent = this;
	this.instance.setTransform(-9.2,-4.3,0.9,0.9,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(286).to({alpha:0},7,cjs.Ease.get(1)).wait(67));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.8,-110.7,213.1,213.1);


// stage content:
(lib._100pcx240 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		 
		stage.addEventListener("resize", res);
		
		var bg = this.bg;
		var tetrad = this.tetrad;
		
		var main1 = this.main1;
		var legal1 = this.legal1;
		
		var main2 = this.main2;
		var logo2 = this.logo2;
		var legal2 = this.legal2;
		
		
		
		function res() {
			
			var wdt = stage.canvas.width;
			var hgt = stage.canvas.height;
			
			
			tetrad.x = 0;	
			
			bg.x = 0;
			bg.scaleX = wdt/300;
		
		
			if (wdt<500){
				main1.visible = true;
				legal1.visible = true;
				
				main2.visible = false;
				logo2.visible = false;
				legal2.visible = false;
				
			
				main1.x = wdt/2;
				legal1.x = wdt/2;
				
				
			} else if (wdt<650){
				main1.visible = true;
				legal1.visible = true;
				
				main2.visible = false;
				logo2.visible = false;
				legal2.visible = false;
				
		
				main1.x = wdt/2;
				legal1.x = wdt/2;
				
				
			} else if (wdt<850){
				main1.visible = true;
				legal1.visible = true;
				
				main2.visible = false;
				logo2.visible = false;
				legal2.visible = false;
				
				main1.x = wdt/2;
				legal1.x = wdt/2;
				
				
			} else {
				main1.visible = false;
				legal1.visible = false;
				
				main2.visible = true;
				logo2.visible = true;
				legal2.visible = true;
				
				main2.x = wdt*0.5;
				logo2.x = wdt*0.2;
				legal2.x = 0;
				
				main2.scaleX = 1;
				main2.scaleY = 1;
		
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(360));

	// legal2
	this.legal2 = new lib.legal2();
	this.legal2.parent = this;
	this.legal2.setTransform(3.5,223.9);

	this.timeline.addTween(cjs.Tween.get(this.legal2).wait(360));

	// main2
	this.main2 = new lib.main2();
	this.main2.parent = this;
	this.main2.setTransform(1.3,119,1,1,0,0,0,101.3,124);

	this.timeline.addTween(cjs.Tween.get(this.main2).wait(360));

	// logo2
	this.logo2 = new lib.logo();
	this.logo2.parent = this;
	this.logo2.setTransform(655.1,124,1.031,1.031,0,0,0,-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.logo2).wait(360));

	// legal
	this.legal1 = new lib.legal();
	this.legal1.parent = this;
	this.legal1.setTransform(150,226.1,1,1,0,0,0,143,10.4);

	this.timeline.addTween(cjs.Tween.get(this.legal1).wait(360));

	// main
	this.main1 = new lib.main1();
	this.main1.parent = this;
	this.main1.setTransform(150,120);

	this.timeline.addTween(cjs.Tween.get(this.main1).wait(360));

	// tetrad
	this.tetrad = new lib.tetrad();
	this.tetrad.parent = this;
	this.tetrad.setTransform(-7.7,212.8,1,1,0,0,0,0,217.8);

	this.timeline.addTween(cjs.Tween.get(this.tetrad).wait(360));

	// bg
	this.bg = new lib.bg();
	this.bg.parent = this;
	this.bg.setTransform(0,120,1,1,0,0,0,0,125);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(360));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.6,77,1198.8,443);
// library properties:
lib.properties = {
	width: 300,
	height: 240,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/100pcx240_atlas_P_.png", id:"100pcx240_atlas_P_"},
		{src:"images/100pcx240_atlas_NP_.jpg", id:"100pcx240_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;