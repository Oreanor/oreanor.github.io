(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"100pcx240_atlas_P_", frames: [[0,414,100,73],[0,185,150,136],[0,0,200,183],[152,185,50,225],[0,323,150,89]]},
		{name:"100pcx240_atlas_NP_", frames: [[0,0,554,368],[556,0,160,224],[556,226,220,153]]}
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



(lib.bg2 = function() {
	this.spriteSheet = ss["100pcx240_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hoov2 = function() {
	this.spriteSheet = ss["100pcx240_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pic0 = function() {
	this.spriteSheet = ss["100pcx240_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.pic0_2 = function() {
	this.spriteSheet = ss["100pcx240_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.pic1 = function() {
	this.spriteSheet = ss["100pcx240_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.pic2a = function() {
	this.spriteSheet = ss["100pcx240_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.pic2b = function() {
	this.spriteSheet = ss["100pcx240_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.pic3 = function() {
	this.spriteSheet = ss["100pcx240_atlas_NP_"];
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


(lib.tetrad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DBDBDB","#E9E9E9","#8A8A8A"],[0,0.514,0.984],122.1,-313.5,-51,131.1).s().p("Aq6cMMAOZg4XIHcAAMgOaA4Xg");
	this.shape.setTransform(60.9,139.2,0.525,0.849,4,0,0,-0.4,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.tetrad, new cjs.Rectangle(13.8,-12.9,94.6,304), null);


(lib.pic2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hoov2();
	this.instance.parent = this;
	this.instance.setTransform(8,35,0.8,0.8);

	this.instance_1 = new lib.pic2b();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-15,-63,0.8,0.8);

	this.instance_2 = new lib.pic2a();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-49,-104,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic2, new cjs.Rectangle(-49,-104,154,202.5), null);


(lib.pic1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArtR+MAAFgj7IXWAAMgAFAj7g");
	mask.setTransform(-0.9,-12.4);

	// Слой 1
	this.instance = new lib.pic1();
	this.instance.parent = this;
	this.instance.setTransform(-80,-121);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic1_1, new cjs.Rectangle(-75.8,-121,150,223.6), null);


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


(lib.eeer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AyVOZIAA8wMAleAAAIAAcwg");
	mask.setTransform(122.6,92.1);

	// Слой 1
	this.instance = new lib.pic3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.091,1.091);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.eeer, new cjs.Rectangle(5.1,0.1,234.9,166.9), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgJAKQgFgEAAgGQAAgFAFgFQAEgDAFAAQAHAAADADQAFAFAAAFQAAAGgFAEQgDAFgHAAQgFAAgEgFg");
	this.shape.setTransform(133.4,84.2,0.95,0.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeAiQgLgLAAgWQAAgUAMgNQANgMARAAQARgBANAMQALALAAASIgBAKIg+AAQABALAHAFQAGAGALABQANAAAHgIIAIAQQgLAIgUAAQgUAAgLgLgAgUgIIAqAAQgCgUgTAAQgRAAgEAUg");
	this.shape_1.setTransform(126.1,81,0.95,0.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AASArIAAglIgjAAIAAAlIgVAAIAAhVIAVAAIAAAgIAjAAIAAggIAVAAIAABVg");
	this.shape_2.setTransform(116.8,81,0.95,0.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgmBDIAAhXIAUAAIAAAzIA0g1IAFAAIAABXIgUAAIAAg0Ig0A2gAgRgsQgJgHgBgMIARgEQACAQAKgBQANAAABgOIAQADQgCAMgJAHQgHAGgMAAQgMAAgHgGg");
	this.shape_3.setTransform(107.4,78.9,0.95,0.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATAqQgDgDgCgEQgDAFgHACQgFAEgIgBQgOAAgIgHQgIgGAAgNQAAgPALgIQALgJAVAAIAIABQAAgQgSAAQgLAAgJAFIgEgQQAKgGAPABQATgBAJAKQAKAJAAAZIAAASQAAASAHAEQgDAFgDAAQgDABgEAAQgDAAgFgDgAgTARQAAAMAOAAQARAAAAgSIAAgIIgIgBQgXAAAAAPg");
	this.shape_4.setTransform(98.5,81,0.95,0.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiAkIAKgQQAKAJAOAAQAOAAAAgLQAAgMgQAAIgMAAIAAgPIAOABQAMAAAAgKQAAgFgDgCQgEgDgFAAQgLAAgMAHIgGgQQAPgIAPABQANAAAKAGQAIAHAAALQAAAPgOAEQAHABAFAGQAFAFAAAHQAAANgJAHQgMAHgPAAQgUAAgNgJg");
	this.shape_5.setTransform(90.2,81,0.95,0.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmAtIAAhXIAUAAIAAAzIAzg1IAGAAIAABXIgUAAIAAgzIg0A1g");
	this.shape_6.setTransform(81.7,81,0.95,0.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAfA7IAAgfIg8AAIAAAfIgSAAIAAgvIAIAAQAIgKAGgQQAEgRABgQIAAgLIA4AAIAABGIAMAAIAAAvgAgTAMIAkAAIAAg2IgUAAQgCAigOAUg");
	this.shape_7.setTransform(72,82.5,0.95,0.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgmAtIAAhXIAUAAIAAAzIA0g1IAFAAIAABXIgUAAIAAgzIgzA1g");
	this.shape_8.setTransform(57.5,81,0.95,0.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAUAsIgUgeIgUAeIgYAAIAigsIgggrIAYAAIASAcIAUgcIAWAAIgfAqIAiAtg");
	this.shape_9.setTransform(159.1,63.5,0.95,0.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AglAsIAAgRIADABQAEAAABgFQABgGAFgGQAFgFAHgCQgVgEAAgSQAAgLAIgHQAJgIARAAIAkACIAABWIgUAAIAAghIgFAAQgWAAgDATQgCAPgPAAgAgIgZQgDAEAAAFQAAAFAFAEQAFADAGAAIANAAIAAgYIgQAAQgGAAgEADg");
	this.shape_10.setTransform(149.9,63.5,0.95,0.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgmAuIAAhZIAVAAIAAA0IAzg2IAFAAIAABZIgUAAIAAg0Ig0A2g");
	this.shape_11.setTransform(141,63.5,0.95,0.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgdAsIAAhXIA7AAIAAASIgnAAIAABFg");
	this.shape_12.setTransform(132.8,63.5,0.95,0.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgTAMgNQALgMASAAQAUAAALAMQALANAAATQAAAWgLALQgMAMgTAAQgTAAgLgMgAgOgUQgGAHAAANQAAAdAUAAQAJAAAGgIQAGgIAAgNQAAgcgVAAQgIAAgGAIg");
	this.shape_13.setTransform(124.4,63.5,0.95,0.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgqAaQAJAAAFgGQAFgFAEgPQAEgSAAgUIAAgFIA6AAIAABWIgUAAIAAhGIgWAAQAAAQgDARQgEAQgFAIQgHAJgGACQgHADgLAAg");
	this.shape_14.setTransform(114.8,63.5,0.95,0.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgTAMgNQAKgMATAAQAUAAALAMQALANAAATQAAAVgLAMQgNAMgSAAQgTAAgLgMgAgOgUQgGAHAAANQAAAdAUAAQAJAAAGgIQAGgIAAgNQgBgcgUAAQgJAAgFAIg");
	this.shape_15.setTransform(105.9,63.5,0.95,0.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AASAsIAAgmIgjAAIAAAmIgVAAIAAhXIAVAAIAAAhIAjAAIAAghIAVAAIAABXg");
	this.shape_16.setTransform(96.6,63.5,0.95,0.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAVAsIgVgeIgUAeIgYAAIAigsIgfgrIAXAAIASAcIAUgcIAXAAIghAqIAjAtg");
	this.shape_17.setTransform(87.5,63.5,0.95,0.95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgeAiQgMgLABgWQgBgUANgNQAMgMARAAQAUAAALALQALALAAASIgBAKIg9AAQAAALAHAFQAGAGALAAQANAAAIgHIAIAQQgMAIgVAAQgSAAgMgLgAgTgIIApAAQgDgTgSAAQgRAAgDATg");
	this.shape_18.setTransform(78.5,63.5,0.95,0.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgJAsIAAhFIgZAAIAAgSIBFAAIAAASIgZAAIAABFg");
	this.shape_19.setTransform(70.1,63.5,0.95,0.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgkAsIAAhWIAmgBQAOAAAJAGQAIAHAAALQAAAFgDAFQgDAFgHADQARAFAAAQQAAAMgJAFQgJAHgQAAgAgQAcIARABQAQAAAAgMQAAgGgFgDQgFgCgGAAIgRAAgAgQgbIAAATIAQAAQAOAAAAgKQAAgEgEgDQgDgDgGAAg");
	this.shape_20.setTransform(57.3,63.4,0.95,0.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAfArIAAhWIAUAAIAABWgAgyArIAAhWIATAAIAAAfIAQAAQAPAAAJAHQAJAHAAAOQAAAbghAAgAgfADIAAAYIAOABQAJAAADgDQAEgFAAgFQAAgFgEgEQgEgEgIAAg");
	this.shape_21.setTransform(165.2,45.9,0.95,0.95);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAfA7IAAgfIg9AAIAAAfIgRAAIAAgvIAIAAQAJgMAFgPQAFgRAAgPIAAgLIA4AAIAABGIAMAAIAAAvgAgTAMIAkAAIAAg2IgVAAQgBAjgOATg");
	this.shape_22.setTransform(154.3,47.4,0.95,0.95);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AASArIAAglIgjAAIAAAlIgVAAIAAhWIAVAAIAAAiIAjAAIAAgiIAVAAIAABWg");
	this.shape_23.setTransform(144.6,45.9,0.95,0.95);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgeAiQgMgMABgVQgBgUANgMQANgNARAAQASAAAMALQAMALAAASIgCAKIg9AAQABALAGAGQAGAFALAAQAOAAAHgHIAIAQQgLAIgWAAQgSAAgMgLgAgUgIIAqAAQgCgTgTAAQgQAAgFATg");
	this.shape_24.setTransform(135.4,45.9,0.95,0.95);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgnA+IAAh5IAUAAIAAAGQAIgIALAAQApAAAAAuQAAAVgMALQgLAMgUAAQgKAAgHgEIAAAlgAgTgmIAAAtQAFAFAIAAQANAAAGgHQAHgFgBgPQAAgPgFgHQgHgGgNAAQgHAAgGAFg");
	this.shape_25.setTransform(126.4,47.4,0.95,0.95);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgJArIAAhFIgZAAIAAgRIBFAAIAAARIgZAAIAABFg");
	this.shape_26.setTransform(117.7,45.9,0.95,0.95);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgDAtIgYgvIgBAAIgHAuIgUAAIARhYIAIAAIAeA9IAgg9IAHAAIAQBYIgUAAIgHgpIgBgFIgBAAIgCAHIgVAog");
	this.shape_27.setTransform(103.3,45.9,0.95,0.95);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgeAiQgMgLAAgWQABgUAMgMQANgNAQAAQAUAAALALQALAMAAARIgBAKIg9AAQAAAKAHAHQAFAFAMAAQAOAAAGgHIAJAQQgLAIgWAAQgSAAgMgLgAgUgIIAqAAQgCgTgTAAQgQAAgFATg");
	this.shape_28.setTransform(93,45.9,0.95,0.95);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AATAqQgDgDgCgEQgCAEgHAEQgIACgGAAQgPAAgHgHQgIgGAAgOQAAgOALgIQAMgJAUAAIAIABQAAgPgSAAQgLAAgIAEIgFgQQALgFAOAAQAUAAAJAJQAJAJAAAZIAAASQAAASAHAEQgDAEgCABIgIABQgEAAgEgDgAgSARQAAAMANAAQASAAAAgSIAAgIIgIgBQgXAAAAAPg");
	this.shape_29.setTransform(84.3,45.9,0.95,0.95);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAfA7IAAgfIg8AAIAAAfIgSAAIAAgvIAJAAQAIgMAFgPQAFgPAAgRIAAgLIA4AAIAABGIAMAAIAAAvgAgTAMIAkAAIAAg2IgUAAQgCAigOAUg");
	this.shape_30.setTransform(75,47.4,0.95,0.95);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAUAqQgDgCgCgFQgDAFgHADQgIACgFAAQgPAAgIgHQgIgHAAgNQAAgNALgJQAMgJAUAAIAJABQAAgPgTAAQgKAAgJAEIgFgQQALgFAOAAQAUAAAJAJQAJAJAAAZIAAASQAAASAHAEQgDAFgCAAIgIABQgEAAgDgDgAgSARQAAAMANAAQASAAAAgSIAAgIIgIgBQgXAAAAAPg");
	this.shape_31.setTransform(65.9,45.9,0.95,0.95);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgoA1IAJgTQAOAKAOAAQAKAAAGgFQAGgFAAgJQAAgKgHgGQgIgGgLAAIgMABIAAgQIAMAAQAKAAAGgEQAGgFAAgIQAAgGgFgEQgGgEgHAAQgLAAgNAIIgIgSQASgIAQAAQAQAAALAIQAKAJAAAOQAAAJgEAHQgFAHgHADQALAEAEAGQAGAHAAAMQAAARgMAKQgMAKgVAAQgVAAgPgJg");
	this.shape_32.setTransform(57,44.4,0.95,0.95);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AilFpIDArRICLAAIi/LRg");
	this.shape_33.setTransform(208.7,29.2,0.81,0.81);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#CB0927").s().p("AjFFdIC7q5IDQAAIi7K5g");
	this.shape_34.setTransform(203.2,80.3,0.81,0.81);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D1D1D1").s().p("AkkIuIBwmjIDRAAIC7q5IBNAAIkqRcg");
	this.shape_35.setTransform(201.8,97.2,0.81,0.81);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#DC052B").s().p("AxAHEIDyuHIePAAIjyOHg");
	this.shape_36.setTransform(118.9,63.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dfgdfg, new cjs.Rectangle(10,0,217.8,142.5), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.542,0.679);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,300,250), null);


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


(lib.ClipGroup_9копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsFtQiXiXgBjWQABjVCXiXQCXiXDVgBQDWABCXCXQCYCXAADVQAADWiYCXQiXCXjWABQjVgBiXiXgAhuAqIhnGEQBjAzByAAQDHAACNiNQCMiNABjHQgBhGgThEgAnHCYQAbBSA2BDQA1BDBKAsIBflkIh8AnIglCKIgqANIAliKgAmIkUQhYB9AACXQAABDASA+ICXgwICPoTQiLA0hVB6gAh+nPIiPITIB8goIBVk6IAqgMIhUE4IIrivQgziOh6hXQh+haiaAAQhAAAg+ARg");
	mask.setTransform(51.7,51.7);

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9копия, null, null);


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


(lib.ClipGroup_2_0копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhPAPQgLgMAEgYIAfAAQABARAPgEQAJgCAHgLIAcAAQgTAggfAJQgIACgHAAQgMAAgHgHgAAkgVIA1AAIgRAHQgIACgHAAQgNAAgIgJg");
	mask.setTransform(8.8,2.2);

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_0копия, null, null);


(lib.ClipGroup_1_1копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AidBxQgKgNAFgaQAFgbASgVQASgWAXgGQAIgCAHAAQAQAAAHAMQAHANgEAWQgFAWgMATQgNATgSAKgAhnAaQgVAHgGAgQgFAbAOAAIAFgBQAVgGAGggQADgSgFgGQgDgEgEAAIgFABgAjZBxQAHgJADgQQADgRgFgHQgEgFgIADQgIACgHAIQgJAKgDASQgCAJABAEIggAAIABgEQAGgbARgVQASgWAYgHQAIgCAGAAQAQAAAHANQAHANgEAXQgEASgJAQgAgsgTIAjgKIADBDIABAAIAihRIAkgLIg/CHIgkANgABRg8IBGgVIgGAfIglANIgDAPIAfgMIgFAfIggAJIgDAPIAmgOIgIAkIhIAWgAC4hcIBDgTIALgBQALAAAFAGQAFAHgDANQgFAYgSALQANACgDAYIgBAMQgBAJABADIgjAJIABgRQABgLgBgEQgCgHgJADIgQABIgKAxIgkAKgADlhOIgQAFIgFAYIASgFQAPgEADgMQACgJgIAAIgJABg");
	mask.setTransform(28.2,11.3);

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1копия, null, null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgVASIAPgiIAbgBIgdAjg");
	this.shape.setTransform(106.8,130.7,0.971,0.971);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUASIAOgjIAbAAIgdAjg");
	this.shape_1.setTransform(111.7,94.5,0.971,0.971);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVASIAPgiIAcgBIgeAjg");
	this.shape_2.setTransform(82.1,75.8,0.971,0.971);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgkAsIAAhXIAVAAIAAAgIARgBQAPAAAKAIQAJAGAAAOQAAANgHAHQgKAIgSAAgAgPADIAAAZIAPAAQAQAAAAgNQAAgFgDgEQgFgDgIAAg");
	this.shape_3.setTransform(140.1,138.5,0.971,0.971);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJAsIAAhFIgZAAIAAgSIBFAAIAAASIgZAAIAABFg");
	this.shape_4.setTransform(131.5,138.5,0.971,0.971);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmAuIAAhZIAUAAIAAA0IA0g2IAFAAIAABZIgUAAIAAg0Ig0A2g");
	this.shape_5.setTransform(122.7,138.5,0.971,0.971);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZAiQgLgMAAgVQAAgUAMgNQANgMAVAAQAPAAAMAIIgJAQQgIgHgLAAQgLAAgHAHQgGAHAAAOQAAAbAZAAQAMAAAIgHIAHAQQgHAFgJACQgGABgJAAQgSAAgNgLg");
	this.shape_6.setTransform(113.7,138.5,0.971,0.971);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgeAhQgLgNAAgUQAAgTALgNQANgMARAAQAUAAALAMQALAMAAAUQAAAVgMAMQgKAMgUAAQgTAAgLgMgAgOgUQgGAIAAAMQABAdATAAQAKAAAFgIQAGgHAAgOQAAgcgVAAQgIAAgGAIg");
	this.shape_7.setTransform(104.9,138.5,0.971,0.971);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZAiQgMgMABgVQgBgUANgNQAMgMAWAAQAPAAALAIIgIAQQgIgHgLAAQgKAAgIAHQgGAHAAAOQAAAbAZAAQALAAAJgHIAHAQQgIAFgIACQgGABgJAAQgSAAgNgLg");
	this.shape_8.setTransform(96.1,138.5,0.971,0.971);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgeAiQgMgLAAgWQAAgUANgNQANgMARAAQATAAALALQAMAMAAARIgCAKIg9AAQAAALAHAGQAHAFAKAAQANAAAIgHIAIAQQgMAIgUAAQgTAAgMgLgAgUgIIAqAAQgCgTgTAAQgQAAgFATg");
	this.shape_9.setTransform(87.2,138.5,0.971,0.971);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgqAaQAIAAAGgFQAGgGADgPQAEgQAAgWIAAgFIA6AAIAABWIgUAAIAAhGIgWAAQgBAUgCANQgEARgFAHQgHAJgGACQgHADgLAAg");
	this.shape_10.setTransform(77.3,138.5,0.971,0.971);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAfAsIAAhXIAUAAIAABXgAgyAsIAAhXIAUAAIAAAgIAPgBQAQAAAIAIQAJAGAAAOQAAAcghAAgAgeADIAAAZIANAAQAJAAAEgEQADgDAAgGQAAgGgEgDQgEgEgIAAg");
	this.shape_11.setTransform(66.7,138.5,0.971,0.971);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AASAsIAAhFIgiAAIAABFIgVAAIAAhXIBLAAIAABXg");
	this.shape_12.setTransform(56,138.5,0.971,0.971);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgRAsIgbhYIAVAAIAPA0IAeg0IAXAAIg3BYg");
	this.shape_13.setTransform(37.7,138.6,0.971,0.971);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgJAKQgFgDAAgHQAAgGAFgDQAEgFAFAAQAGAAAFAFQADAEAAAFQAAAGgDAEQgFAFgGAAQgFAAgEgFg");
	this.shape_14.setTransform(24.5,141.7,0.971,0.971);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AglA9IAAgHIAlg2QALgQAAgMQAAgOgPAAQgNAAgHANIgPgLQAEgIAKgGQAJgGALAAQARAAAKAJQALAIAAAPQAAANgNAUIgYAlIAsAAIAAATg");
	this.shape_15.setTransform(17.2,136.8,0.971,0.971);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgTBCQAQgTAAgxQAAgqgQgXIAAgLQARAIAKAXQAMAXAAAWQAAAagLAVQgJAVgTANg");
	this.shape_16.setTransform(181,120.7,0.971,0.971);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAfArIAAhWIAUAAIAABWgAgyArIAAhWIAUAAIAAAfIAPAAQAPAAAJAIQAJAGAAAOQAAAcghgBgAgeADIAAAZIANAAQAJAAAEgEQADgDAAgGQAAgFgEgEQgEgEgIAAg");
	this.shape_17.setTransform(171.8,120.5,0.971,0.971);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgDAtIgXgsIgBgDIAAAAIgIAtIgTAAIAQhYIAIAAIAeA+IAgg+IAHAAIAQBYIgUAAIgIgpIAAgEIgBAAIgCAHIgVAog");
	this.shape_18.setTransform(159.9,120.5,0.971,0.971);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgnA+IAAh5IAUAAIAAAGQAIgIAKAAQApAAABAvQAAAUgMALQgMAMgTAAQgIAAgJgEIAAAlgAgTgmIAAAtQAFAFAIAAQANAAAGgHQAGgFAAgPQAAgPgGgHQgGgGgNAAQgHAAgGAFg");
	this.shape_19.setTransform(149.6,122.1,0.971,0.971);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgmAtIAAhYIAUAAIAAA0IA0g2IAFAAIAABYIgUAAIAAgzIg0A1g");
	this.shape_20.setTransform(139.7,120.5,0.971,0.971);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgJBPIAAgkQgIAEgIAAQgQAAgJgMQgJgMAAgVQAAgVAKgMQALgMAPAAQAGAAAIADIAAgiIATgEIAAAmQAIgDAGAAQARAAAJAMQAKAMAAAVQAAAUgKANQgKAMgPAAQgIAAgHgDIAAAjgAAKgZIAAA2IAKACQAUAAAAgfQAAgMgFgIQgEgHgKAAQgGAAgFACgAgnAAQAAAfATAAIALgCIAAg1QgFgDgGAAQgTAAAAAbg");
	this.shape_21.setTransform(128.4,120.4,0.971,0.971);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgJAjQgJgKgCgTIgPAAIAAAlIgTAAIAAhWIATAAIAAAhIAPAAQADgPAKgKQAJgKAPAAQASAAAKANQAKANAAATQAAAVgKAMQgLAMgRAAQgRAAgJgKgAADgUQgEAKAAAKQAAAcASAAQAIAAAFgHQAFgIAAgNQAAgcgSAAQgJAAgFAIg");
	this.shape_22.setTransform(111.1,120.5,0.971,0.971);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgmAtIAAhYIAUAAIAAA0IA0g2IAFAAIAABYIgUAAIAAgzIgzA1g");
	this.shape_23.setTransform(99.8,120.5,0.971,0.971);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AASArIAAglIgjAAIAAAlIgUAAIAAhWIAUAAIAAAhIAjAAIAAghIAUAAIAABWg");
	this.shape_24.setTransform(90.1,120.5,0.971,0.971);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AATAqQgDgDgCgEQgDAFgHADQgGACgHAAQgOAAgIgHQgIgHAAgNQAAgOALgIQALgJAVAAIAIABQAAgPgSgBQgLAAgJAFIgEgQQALgGAOAAQATAAAJAKQAKAJAAAZIAAASQAAASAHAEQgEAEgCABQgDACgEgBQgEABgEgEgAgTARQAAAMAOAAQARAAAAgSIAAgJIgIgBQgXAAAAAQg");
	this.shape_25.setTransform(81.1,120.5,0.971,0.971);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgjAsIAAhWIAkgBQAPAAAJAGQAIAHAAALQAAAEgEAHQgDAEgHACQARAGAAAQQAAALgIAGQgIAHgSAAgAgQAGIAAAXIARAAQAQAAAAgMQAAgFgFgDQgEgEgHAAgAgQgbIAAATIAQAAQAOAAAAgKQAAgFgEgCQgDgDgGAAIgRABg");
	this.shape_26.setTransform(72.5,120.5,0.971,0.971);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgiAkIAKgQQALAIANAAQAOAAAAgKQAAgMgQAAIgMAAIAAgPIANABQANAAAAgKQAAgFgDgCQgDgDgGAAQgLAAgMAHIgHgQQAQgIAPAAQANAAAKAHQAIAHAAALQAAAOgNAFQAHABAEAGQAFAGAAAFQAAAOgKAIQgKAGgQAAQgVAAgMgJg");
	this.shape_27.setTransform(63.8,120.5,0.971,0.971);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAUAqQgDgDgCgEQgDAFgHADQgHACgGAAQgOAAgJgHQgIgHAAgNQAAgOALgIQAMgJAUAAIAJABQAAgPgTgBQgKAAgJAFIgFgQQALgGAOAAQATAAAKAKQAJAJAAAZIAAASQAAASAHAEQgDAEgCABQgDACgFgBQgEABgDgEgAgSARQAAAMANAAQASAAAAgSIAAgJIgIgBQgXAAAAAQg");
	this.shape_28.setTransform(55.7,120.5,0.971,0.971);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AASArIAAglIgjAAIAAAlIgUAAIAAhWIAUAAIAAAhIAjAAIAAghIAUAAIAABWg");
	this.shape_29.setTransform(46.5,120.5,0.971,0.971);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgdAhQgMgNAAgUQAAgTAMgMQAMgOARAAQATAAAMANQALAMAAAUQAAAUgMANQgLAMgTAAQgTAAgKgMgAgOgUQgGAHABANQgBAcAUAAQAJAAAGgHQAGgHAAgOQAAgcgVAAQgIABgGAHg");
	this.shape_30.setTransform(32.2,120.5,0.971,0.971);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AARArIAAhFIghAAIAABFIgVAAIAAhWIBLAAIAABWg");
	this.shape_31.setTransform(22.9,120.5,0.971,0.971);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgIAtQgLgVAAgaQAAgWAMgXQAKgXARgIIAAALQgQAXAAAqQAAAxAQATIAAANQgUgNgIgVg");
	this.shape_32.setTransform(15.4,120.7,0.971,0.971);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgZAiQgMgMABgVQgBgUANgNQANgMAVAAQAPAAAMAIIgJAQQgHgHgMAAQgKAAgHAHQgHAHAAAOQAAAbAZAAQALAAAJgHIAHAQQgIAFgIACQgGABgJAAQgSAAgNgLg");
	this.shape_33.setTransform(118.7,102.6,0.971,0.971);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgeAhQgLgNAAgUQAAgTAMgNQAKgMATAAQAUAAALAMQALANAAATQAAAVgLAMQgMAMgTAAQgTAAgLgMgAgOgUQgFAHgBANQAAAdAUAAQAJAAAGgIQAGgHAAgOQgBgcgUAAQgIAAgGAIg");
	this.shape_34.setTransform(109.9,102.6,0.971,0.971);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgYAiQgMgMAAgVQAAgUAMgNQANgMAVAAQAPAAAMAIIgJAQQgHgHgMAAQgKAAgHAHQgHAIAAANQAAAbAZAAQAMAAAIgHIAHAQQgHAFgIACQgHABgJAAQgTAAgLgLg");
	this.shape_35.setTransform(101.1,102.6,0.971,0.971);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgeAiQgMgMAAgVQAAgUANgNQANgMARAAQATAAALALQAMALAAASIgCAKIg9AAQAAALAHAFQAHAGAKAAQANAAAIgHIAIAQQgMAIgUAAQgTAAgMgLgAgUgIIAqAAQgCgTgTAAQgQAAgFATg");
	this.shape_36.setTransform(92.2,102.6,0.971,0.971);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgqAaQAIAAAGgFQAGgHADgOQAEgQAAgWIAAgFIA6AAIAABWIgUAAIAAhGIgWAAQAAAQgDARQgEAQgFAIQgHAJgGACQgHADgLAAg");
	this.shape_37.setTransform(82.3,102.7,0.971,0.971);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAfAsIAAhXIAUAAIAABXgAgyAsIAAhXIAUAAIAAAgIAPgBQAPAAAJAHQAJAGAAAPQAAAcghAAgAgeADIAAAZIANAAQAJAAAEgEQADgDAAgGQAAgFgEgEQgFgEgHAAg");
	this.shape_38.setTransform(71.8,102.6,0.971,0.971);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AARAsIAAhFIghAAIAABFIgVAAIAAhXIBLAAIAABXg");
	this.shape_39.setTransform(61,102.6,0.971,0.971);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AALAtIAKgyIABgKQAAgLgNAAQgKAAgJAJIgMA+IgUAAIAMhBIAAgFQAAgIgBgHIATgEIACAKQAKgJAQAAQAbAAAAAZIgBAKIgKA1g");
	this.shape_40.setTransform(41.8,102.5,0.971,0.971);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgJAKQgFgEAAgGQAAgGAFgDQAEgFAFAAQAGAAAFAFQADAEAAAFQAAAFgDAFQgFAFgGAAQgFAAgEgFg");
	this.shape_41.setTransform(24.5,105.8,0.971,0.971);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AABA8IAAhVIgXAPIAAgVQAXgMANgQIAJAAIAAB3g");
	this.shape_42.setTransform(16.6,101,0.971,0.971);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgUBPIAAgTIAUAAIAAh4IgUAAIAAgSIApAAIAACdg");
	this.shape_43.setTransform(128.9,84.6,0.971,0.971);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgeAiQgMgMAAgVQAAgTANgNQANgNARAAQATAAALALQAMAMAAARIgCAKIg9AAQAAAKAHAHQAHAFAKAAQAOAAAHgHIAIAQQgKAIgWAAQgUAAgLgLgAgUgIIAqAAQgCgTgTAAQgQAAgFATg");
	this.shape_44.setTransform(121,84.6,0.971,0.971);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgDAsIgnhXIAVAAIAVA0IAWg0IAVAAIgoBXg");
	this.shape_45.setTransform(112.1,84.7,0.971,0.971);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgKArQgDgFAAgFQAAgGADgFQAFgEAFAAQAGAAAFAEQAEAEAAAHQAAAGgEAEQgGAFgFAAQgFAAgFgFgAgKgWQgDgEAAgGQAAgGADgFQAEgEAGAAQAGAAAFAEQAEAFAAAGQAAAHgEADQgGAEgFABQgFgBgFgEg");
	this.shape_46.setTransform(104.7,84.7,0.971,0.971);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AglAMIAAg3IAUAAIAAA2QAAAQAPAAQAHAAAFgDQAGgEACgEIAAg7IAUAAIAABWIgUAAIAAgHQgEAEgIACQgGACgHAAQgeAAAAggg");
	this.shape_47.setTransform(97.1,84.7,0.971,0.971);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AASA+IAAg1QAAgJgFgDQgFgFgIAAQgEAAgFACQgGADgCADIAAA+IgUAAIAAh2IAUgFIAAArQAJgIAMAAQAQAAAJAKQAJAJAAAQIAAA1g");
	this.shape_48.setTransform(87.5,82.8,0.971,0.971);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgUBPIAAidIApAAIAAASIgVAAIAAB4IAVAAIAAATg");
	this.shape_49.setTransform(74.5,84.6,0.971,0.971);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgdAsIAAhWIAVAAIAAAJQAIgKANAAQALgBAFAEIgIARQgFgEgHAAQgHAAgFAHQgFAGAAAKIAAAwg");
	this.shape_50.setTransform(63.4,84.6,0.971,0.971);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgeAiQgLgNAAgUQAAgUAMgMQANgNARAAQASAAAMALQALALAAASIgBAKIg+AAQACALAGAGQAHAFAKAAQAOAAAHgHIAIAQQgLAIgWAAQgTAAgLgLgAgUgIIArAAQgDgTgTAAQgRAAgEATg");
	this.shape_51.setTransform(54.8,84.6,0.971,0.971);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgDAsIgohXIAXAAIAUA0IAWg0IAVAAIgnBXg");
	this.shape_52.setTransform(45.9,84.7,0.971,0.971);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgeAhQgLgNAAgUQAAgTAMgNQAMgMARAAQAUAAALAMQALANAAATQAAAUgMANQgKAMgUAAQgTAAgLgMgAgOgUQgGAHABANQgBAdAUAAQAKAAAFgIQAGgHgBgOQAAgbgUAAQgJAAgFAHg");
	this.shape_53.setTransform(37,84.6,0.971,0.971);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgeAhQgLgNAAgUQAAgTAMgNQAMgMARAAQAUAAALAMQALAMAAAUQAAAUgLANQgLAMgUAAQgTAAgLgMgAgOgUQgGAHABANQgBAdAUAAQAKAAAFgIQAGgHAAgOQAAgbgVAAQgJAAgFAHg");
	this.shape_54.setTransform(27.9,84.6,0.971,0.971);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAYA7IAAg1IgvAAIAAA1IgVAAIAAh2IAVAAIAAAvIAvAAIAAgvIAVAAIAAB2g");
	this.shape_55.setTransform(17.7,83.1,0.971,0.971);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AilFpIDArRICLAAIi/LRg");
	this.shape_56.setTransform(216.9,70.1,0.971,0.971);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#CB0927").s().p("AjFFdIC7q5IDQAAIi7K5g");
	this.shape_57.setTransform(210.4,131.3,0.971,0.971);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#D1D1D1").s().p("AkkIuIBwmjIDRAAIC7q5IBNAAIkqRcg");
	this.shape_58.setTransform(208.7,151.7,0.971,0.971);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#DC052B").s().p("AxyHEIDyuHIfzAAIjyOHg");
	this.shape_59.setTransform(103.3,111.3,1.2,1.2);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},74).wait(286));

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
	this.instance_3 = new lib.pic1_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(409.5,148.1,1,1,0,0,0,4,13);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(62).to({_off:false},0).to({_off:true},87).wait(211));

	// text1
	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgJAKQgFgDAAgHQAAgFAFgEQAEgFAFAAQAHAAADAFQAFAEAAAFQAAAHgFADQgDAFgHAAQgFAAgEgFg");
	this.shape_60.setTransform(174.9,125.2,1.14,1.14);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgdAsIAAhXIA7AAIAAASIgnAAIAABFg");
	this.shape_61.setTransform(167.6,121.4,1.14,1.14);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgcA1QgKgLAAgQQAAgIAFgKQAGgIAIgFQgIgFgDgGQgEgGAAgJQAAgOAKgHQAJgJAPAAQARAAAIAJQAKAIAAANQAAAIgGAIQgFAIgGADQAIAEAGAIQAHAKAAAIQAAAQgLAKQgKAJgSAAQgSAAgKgIgAgRAaQAAAHAFAFQAFAFAHABQAIAAAFgFQAFgFAAgGQAAgOgUgLQgPAJAAAOgAgNgfQAAAGAFAFQAGAFAEACQAEgCAEgGQADgFAAgFQAAgFgDgEQgEgDgGAAQgNAAAAAMg");
	this.shape_62.setTransform(151.6,119.6,1.14,1.14);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgfAuQgLgPAAgiQAAgYAMgQQALgRAUgBQAqABAAA8QAAAbgMASQgLAQgUAAQgWAAgJgPgAgUgBQAAAXAFALQAEAMALAAQAKgBAGgJQAFgMAAgYQAAgXgFgKQgFgJgKAAQgVgBAAArg");
	this.shape_63.setTransform(140.5,119.6,1.14,1.14);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgWAyQAYgOAKgWQgGADgHAAQgRAAgKgLQgKgKAAgRQAAgRAKgMQALgLAQAAQAoAAAAA1QAAAUgQAXQgQAWgSAFgAgMglQgFAGAAAJQAAALAFAFQAFAGAHAAQARAAAAgVQAAgWgRAAQgIAAgEAGg");
	this.shape_64.setTransform(129.3,119.6,1.14,1.14);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AABA8IAAhVIgXAPIAAgVQAWgLAOgRIAJAAIAAB3g");
	this.shape_65.setTransform(117.7,119.6,1.14,1.14);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgkAsIAAhWIAlgBQAPAAAJAGQAIAHAAALQAAAGgEAEQgDAFgGADQARAFAAAQQAAALgJAHQgJAGgRAAgAgQAcIARABQAQAAAAgMQAAgGgFgDQgFgCgGAAIgRAAgAgQgbIAAATIAQAAQANAAAAgKQAAgEgDgDQgEgDgFAAg");
	this.shape_66.setTransform(101.9,121.4,1.14,1.14);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgYAiQgMgMAAgVQAAgUAMgNQANgMAVAAQAPAAAMAIIgJAQQgIgHgLAAQgKAAgHAHQgHAIAAANQAAAbAZAAQAMAAAIgHIAHAQQgHAFgIACQgHABgJAAQgTAAgLgLg");
	this.shape_67.setTransform(85.8,121.4,1.14,1.14);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgUAMgMQALgMASAAQAUAAALAMQALAMAAAUQAAAWgMALQgLAMgTAAQgTAAgLgMgAgOgUQgGAIAAAMQAAAdAUAAQAJAAAGgIQAGgIAAgNQAAgcgVAAQgIAAgGAIg");
	this.shape_68.setTransform(75.5,121.4,1.14,1.14);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgZAiQgLgNAAgUQAAgUAMgNQANgMAVAAQAPAAAMAIIgJAQQgHgHgMAAQgKAAgHAHQgHAIAAANQAAAbAZAAQAMAAAIgHIAHAQQgHAFgJACQgGABgJAAQgSAAgNgLg");
	this.shape_69.setTransform(65.2,121.4,1.14,1.14);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgeAiQgMgMAAgVQAAgUANgNQAMgMASAAQATAAALALQALAMAAARIgBAKIg+AAQABALAHAGQAHAFAJAAQAOAAAIgHIAHAQQgLAIgUAAQgTAAgMgLgAgUgIIAqAAQgDgTgSAAQgQAAgFATg");
	this.shape_70.setTransform(54.8,121.4,1.14,1.14);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgpAaQAHAAAGgFQAFgGAEgPQAEgSAAgUIAAgFIA5AAIAABWIgTAAIAAhGIgVAAQgBASgDAPQgDAOgHAKQgGAJgGACQgIADgJAAg");
	this.shape_71.setTransform(43.2,121.5,1.14,1.14);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AAfAsIAAhXIAUAAIAABXgAgyAsIAAhXIATAAIAAAgIAQgBQAPAAAJAHQAJAIAAANQAAAcghAAgAgfADIAAAZIAOAAQAJAAADgEQAEgDAAgGQAAgGgEgDQgEgEgIAAg");
	this.shape_72.setTransform(30.8,121.4,1.14,1.14);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AARAsIAAhFIghAAIAABFIgVAAIAAhXIBLAAIAABXg");
	this.shape_73.setTransform(18.2,121.4,1.14,1.14);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgmAuIAAhYIAUAAIAAAzIA0g1IAFAAIAABXIgVAAIAAgzIgzA2g");
	this.shape_74.setTransform(116.3,100.4,1.14,1.14);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgqAaQAIAAAGgGQAFgFAEgPQAEgSAAgTIAAgGIA6AAIAABWIgUAAIAAhGIgWAAQAAARgDAQQgEAQgFAIQgGAIgHAEQgIACgKAAg");
	this.shape_75.setTransform(104.5,100.4,1.14,1.14);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AATAqQgDgCgCgFQgDAFgHADQgEACgJAAQgPAAgHgHQgIgGAAgNQAAgPALgIQALgJAVAAIAIACQAAgQgSAAQgLAAgJAEIgEgQQAKgFAPAAQATAAAJAJQAKAJAAAaIAAARQAAASAHAEQgDAFgDAAIgHABQgFAAgDgDgAgTARQAAAMAOAAQARAAAAgSIAAgIIgIgBQgXAAAAAPg");
	this.shape_76.setTransform(94.2,100.3,1.14,1.14);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAfA7IAAgfIg9AAIAAAfIgRAAIAAgvIAIAAQAJgMAFgOQAFgTAAgOIAAgLIA4AAIAABGIAMAAIAAAvgAgTAMIAkAAIAAg2IgVAAQgBAjgOATg");
	this.shape_77.setTransform(83,102.1,1.14,1.14);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgiAkIAKgQQAKAIAOABQAOAAAAgLQAAgMgQAAIgMAAIAAgPIANABQANAAAAgKQAAgFgDgCQgDgDgGAAQgLAAgLAHIgIgQQAQgIAPABQAOAAAJAGQAJAIAAAKQAAAOgOAFQAHABAFAGQAEAFAAAGQAAAOgKAIQgKAGgQABQgUAAgNgKg");
	this.shape_78.setTransform(72.4,100.4,1.14,1.14);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgeAhQgLgNAAgUQAAgTAMgMQALgNASAAQAUAAALAMQALANAAATQAAAVgLAMQgMAMgTAAQgTAAgLgMgAgOgUQgFAGgBAOQAAAdAUAAQAJAAAGgHQAGgHAAgPQgBgbgUAAQgJAAgFAHg");
	this.shape_79.setTransform(62.5,100.3,1.14,1.14);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgYAiQgMgLAAgWQAAgTAMgNQANgNAVAAQAQAAALAJIgJAPQgIgHgLAAQgLAAgGAIQgHAIAAAMQAAAcAZAAQAMAAAIgIIAHAQQgKAGgFABIgQABQgTAAgLgLg");
	this.shape_80.setTransform(52.2,100.3,1.14,1.14);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AAfArIAAhVIAUAAIAABVgAgyArIAAhVIAUAAIAAAeIAPAAQAPAAAJAHQAJAHAAAOQAAAbghAAgAgeADIAAAYIANABQAKAAADgEQADgDAAgGQAAgGgEgDQgEgEgIABg");
	this.shape_81.setTransform(34.5,100.4,1.14,1.14);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgCA8IgZhAIgMA/IgVAAIAYh2IALAAIAZBPIAZhPIAMAAIAYB2IgVAAIgMg/IgYBAg");
	this.shape_82.setTransform(20,98.6,1.14,1.14);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AilFpIDArRICLAAIi/LRg");
	this.shape_83.setTransform(217.7,70.1,0.971,0.971);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#CB0927").s().p("AjFFdIC7q5IDQAAIi7K5g");
	this.shape_84.setTransform(211.1,131.3,0.971,0.971);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#D1D1D1").s().p("AkkIuIBwmjIDRAAIC7q5IBNAAIkqRcg");
	this.shape_85.setTransform(209.5,151.7,0.971,0.971);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#DC052B").s().p("AxyHEIDyuHIfzAAIjyOHg");
	this.shape_86.setTransform(104,111.3,1.2,1.2);

	var maskedShapeInstanceList = [this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]},62).to({state:[]},87).wait(211));

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
	this.instance_4 = new lib.pic2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(380.4,122.1,1,1,0,0,0,0.1,0.1);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(137).to({_off:false},0).to({_off:true},86).wait(137));

	// text2
	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgJAKQgFgFAAgFQAAgFAFgEQAEgFAFAAQAGAAAFAFQADADAAAGQAAAGgDAEQgFAFgGAAQgFAAgEgFg");
	this.shape_87.setTransform(140.9,136.5,1.14,1.14);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgmAuIAAhZIAUAAIAAA0IA0g2IAFAAIAABZIgUAAIAAg0Ig0A2g");
	this.shape_88.setTransform(131.9,132.8,1.14,1.14);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AAKAdQgDgXgWAAIgBAAIAAAmIgUAAIAAhXIAUAAIAAAhIABAAQAVAAADgTQACgPAPAAIAKABIAAAQIgFAAQgDAAgBAFQgEAQgSAFQATAEAFAUQABAFADAAIAEgBIAAARIgJABQgQAAgCgQg");
	this.shape_89.setTransform(121.3,132.8,1.14,1.14);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgnA9IAAh4IAUAAIAAAGQAIgHALAAQAogBAAAvQAAAUgLALQgMAMgTAAQgIAAgJgEIAAAkgAgTgmIAAAtQAGAFAHAAQANAAAGgHQAGgGAAgOQAAgOgGgIQgGgGgNAAQgIAAgFAFg");
	this.shape_90.setTransform(110.6,134.6,1.14,1.14);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgTAMgNQALgMASAAQAUAAALAMQALAMAAAUQAAAWgMALQgLAMgTAAQgTAAgLgMgAgOgUQgGAHAAANQAAAdAUAAQAJAAAGgIQAGgIAAgNQAAgcgVAAQgIAAgGAIg");
	this.shape_91.setTransform(99.3,132.8,1.14,1.14);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgeAxQgMgOAAgYQAAgOADgNQADgMAGgHQAGgJAIgFQAKgGANgCIAcgFIAEASIgnAHIgKAFQgGACgEAIQgEAGgCALQAGgHAJgFQAIgFAHAAQARAAALALQALALAAATQgBASgKANQgLANgVAAQgTAAgLgOgAgPABQgFAHAAALQAAANAGAHQAGAHAJAAQAKABAGgIQAGgIAAgLQgBgNgGgGQgFgHgKAAQgIABgIAGg");
	this.shape_92.setTransform(88.4,130.7,1.14,1.14);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AggArQAXAAAAgMQAAgJgGgPIgchDIAVAAIAXA8IAWg8IAVAAIgmBlQgEAJgJAFQgLAGgOAAg");
	this.shape_93.setTransform(77.6,134.7,1.14,1.14);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgkAsIAAhWIAlgBQAPAAAJAGQAIAHAAALQAAAGgEAEQgCAEgHAEQARAFAAAQQAAALgJAGQgJAHgRAAgAgQAcIARABQAQAAAAgMQAAgGgFgDQgFgCgGAAIgRAAgAgQgbIAAATIAQAAQANAAAAgKQAAgEgDgDQgEgDgFAAg");
	this.shape_94.setTransform(61.8,132.7,1.14,1.14);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgTALgNQAMgMASAAQAUAAALAMQALAMAAAUQAAAVgMAMQgLAMgTAAQgTAAgLgMgAgOgUQgGAIAAAMQAAAdAUAAQAKAAAFgIQAGgHAAgOQAAgcgVAAQgIAAgGAIg");
	this.shape_95.setTransform(51,132.8,1.14,1.14);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AARAsIAAhFIghAAIAABFIgVAAIAAhXIBLAAIAABXg");
	this.shape_96.setTransform(40,132.8,1.14,1.14);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgmAuIAAhZIAUAAIAAA0IAzg2IAGAAIAABZIgUAAIAAg0IgzA2g");
	this.shape_97.setTransform(28.7,132.8,1.14,1.14);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgJAsIAAhFIgZAAIAAgSIBFAAIAAASIgZAAIAABFg");
	this.shape_98.setTransform(18.4,132.8,1.14,1.14);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AAUArIgUgdIgUAdIgYAAIAigrIgggrIAYAAIASAcIATgcIAYAAIghAqIAjAsg");
	this.shape_99.setTransform(165.9,111.7,1.14,1.14);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgeAiQgMgMAAgVQAAgTANgNQANgNARAAQASAAAMALQAMAMAAARIgCAKIg+AAQABALAHAGQAHAGAJAAQAOAAAIgIIAHAQQgKAIgWAAQgTAAgLgLgAgUgIIAqAAQgCgTgTAAQgQAAgFATg");
	this.shape_100.setTransform(155.1,111.7,1.14,1.14);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgYAiQgMgLAAgWQAAgUAMgMQANgNAVAAQAQAAALAJIgJAPQgIgHgLAAQgKAAgHAHQgHAJAAAMQAAAcAZAAQALAAAJgIIAHAQQgIAGgHABIgQABQgTAAgLgLg");
	this.shape_101.setTransform(144.7,111.7,1.14,1.14);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgkAsIAAhWIAlgBQAPAAAIAHQAJAGAAALQAAAFgEAGQgEAEgGACQASAGAAAPQAAAMgJAHQgIAGgSAAgAgQAcIARABQAQAAAAgMQAAgFgFgEQgFgDgGAAIgRAAgAgQgbIAAATIAQAAQANAAAAgKQAAgFgDgCQgDgDgGAAIgRABg");
	this.shape_102.setTransform(134.9,111.6,1.14,1.14);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AglAsIAAgRIADAAQAEABABgFQABgHAFgFQAGgGAGgBQgVgEAAgSQAAgLAJgIQAIgHARAAIAkABIAABWIgUAAIAAghIgFAAQgWABgDATQgBAOgQAAIgIAAgAgIgZQgDADAAAFQAAAGAFADQAEAEAHAAIANABIAAgZIgQgBQgFAAgFAEg");
	this.shape_103.setTransform(118,111.7,1.14,1.14);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgqAaQAJAAAFgGQAFgEAEgQQAEgSAAgTIAAgGIA6AAIAABWIgUAAIAAhGIgWAAQAAASgDAPQgDAPgGAJQgGAIgHADQgJADgJAAg");
	this.shape_104.setTransform(106.9,111.7,1.14,1.14);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AAfA7IAAgfIg9AAIAAAfIgRAAIAAgvIAIAAQAJgMAFgOQAEgRAAgQIAAgLIA5AAIAABGIAMAAIAAAvgAgTAMIAkAAIAAg2IgVAAQgBAjgOATg");
	this.shape_105.setTransform(95.6,113.4,1.14,1.14);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgmAtIAAhYIAUAAIAAA0IAzg2IAGAAIAABYIgUAAIAAgzIg0A1g");
	this.shape_106.setTransform(78.3,111.7,1.14,1.14);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgqAaQAIAAAGgGQAFgEAEgQQAEgQAAgVIAAgGIA6AAIAABWIgUAAIAAhGIgWAAQgBAVgCAMQgEAQgFAIQgGAIgHADQgIADgKAAg");
	this.shape_107.setTransform(66.4,111.7,1.14,1.14);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgeAiQgMgLAAgWQABgUAMgMQANgNAQAAQAUAAALALQALAMAAARIgBAKIg9AAQAAALAHAGQAGAGALAAQANAAAHgIIAJAQQgLAIgWAAQgTAAgLgLgAgUgIIAqAAQgCgTgTAAQgQAAgFATg");
	this.shape_108.setTransform(55.7,111.7,1.14,1.14);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AAfA7IAAgfIg9AAIAAAfIgRAAIAAgvIAIAAQAJgMAFgOQAEgRAAgQIAAgLIA5AAIAABGIAMAAIAAAvgAgTAMIAkAAIAAg2IgVAAQgBAigOAUg");
	this.shape_109.setTransform(44.2,113.4,1.14,1.14);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgTAMgMQALgNASAAQAUAAALAMQALANAAATQAAAVgMAMQgMAMgSAAQgSAAgMgMgAgOgUQgGAHAAANQAAAdAUAAQAJAAAGgIQAGgHgBgOQAAgbgUAAQgIAAgGAHg");
	this.shape_110.setTransform(32.9,111.7,1.14,1.14);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgDAtIgWgsIgCgDIgBAAIgHAuIgUAAIARhYIAIAAIAeA9IAgg9IAHAAIARBYIgVAAIgHgpIgBgFIAAAAIgDAHIgVAog");
	this.shape_111.setTransform(20.6,111.7,1.14,1.14);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgDAtIgWgsIgCgEIAAAAIgHAvIgVAAIARhYIAIAAIAfA9IAeg9IAIAAIARBYIgWAAIgGgqIAAgFIgBAAIgEAIIgUAog");
	this.shape_112.setTransform(118.8,90.6,1.14,1.14);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgeAiQgLgLgBgWQABgUAMgNQAMgMASAAQASAAAMALQALALAAASIgBAKIg+AAQABALAGAFQAIAGAJAAQAOAAAHgHIAIAQQgLAIgUAAQgUAAgLgLgAgUgIIAqAAQgDgTgSAAQgQAAgFATg");
	this.shape_113.setTransform(106.4,90.6,1.14,1.14);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AATAqQgDgDgCgEQgCAEgIADQgFADgIAAQgOAAgIgHQgIgHAAgNQAAgOALgIQALgJAVAAIAIABQAAgPgSAAQgMAAgHADIgFgPQAKgFAPAAQATAAAKAJQAJAKAAAYIAAASQAAARAHAFQgCADgEACIgHABQgEAAgEgDgAgSARQAAAMANAAQARAAAAgSIAAgIIgHgBQgXAAAAAPg");
	this.shape_114.setTransform(95.9,90.6,1.14,1.14);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgdAsIAAhXIA7AAIAAASIgnAAIAABFg");
	this.shape_115.setTransform(86.7,90.6,1.14,1.14);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AATAqQgDgDgCgEQgDAFgHACQgFADgIAAQgOAAgIgHQgIgHAAgNQAAgOALgIQALgJAVAAIAIABQAAgPgSAAQgMAAgIADIgEgPQAKgFAPAAQATAAAJAJQAKAJAAAZIAAASQAAASAHAEQgCADgEACIgHABQgFAAgDgDgAgTARQAAAMAOAAQARAAAAgSIAAgIIgIgBQgXAAAAAPg");
	this.shape_116.setTransform(77,90.6,1.14,1.14);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgqAaQAJAAAFgGQAFgFAEgPQAEgSAAgUIAAgFIA6AAIAABWIgUAAIAAhGIgWAAQAAAQgDARQgEAQgFAIQgGAIgHADQgHADgLAAg");
	this.shape_117.setTransform(65.7,90.7,1.14,1.14);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AAeA7IAAgeIg7AAIAAAeIgSAAIAAguIAIAAQAJgMAEgPQAFgPABgSIAAgLIA4AAIAABHIAMAAIAAAugAgTANIAkAAIAAg3IgVAAQgBAjgOAUg");
	this.shape_118.setTransform(54.4,92.3,1.14,1.14);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgeAiQgMgMAAgVQAAgUANgNQANgMAQAAQAUAAALALQAMALAAASIgCAKIg+AAQACALAGAFQAHAGAJAAQAPAAAHgHIAIAQQgMAIgVAAQgRAAgNgLgAgTgIIApAAQgCgTgTAAQgQAAgEATg");
	this.shape_119.setTransform(43,90.6,1.14,1.14);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgoA+IAAh5IAVAAIAAAGQAHgIAMAAQAoAAAAAuQAAAUgLANQgMALgSAAQgJAAgJgEIAAAlgAgTglIAAAtQAGAEAHAAQANAAAGgHQAGgHAAgOQABgOgHgHQgFgHgOAAQgHAAgGAHg");
	this.shape_120.setTransform(32.3,92.5,1.14,1.14);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AAWA8IAAhkIgrAAIAABkIgVAAIAAh3IBVAAIAAB3g");
	this.shape_121.setTransform(20.1,88.8,1.14,1.14);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AilFpIDArRICLAAIi/LRg");
	this.shape_122.setTransform(217.7,70.3,0.971,0.971);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#CB0927").s().p("AjFFdIC7q5IDQAAIi7K5g");
	this.shape_123.setTransform(211.1,131.5,0.971,0.971);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#D1D1D1").s().p("AkkIuIBwmjIDRAAIC7q5IBNAAIkqRcg");
	this.shape_124.setTransform(209.5,151.9,0.971,0.971);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#DC052B").s().p("AxyHEIDyuHIfzAAIjyOHg");
	this.shape_125.setTransform(104,111.5,1.2,1.2);

	var maskedShapeInstanceList = [this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87}]},137).to({state:[]},86).wait(137));

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
	this.instance_5 = new lib.fghf();
	this.instance_5.parent = this;
	this.instance_5.setTransform(407,125.4,1,1,0,0,0,0.1,0.1);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(211).to({_off:false},0).wait(79).to({y:124.9},0).to({alpha:0},7,cjs.Ease.get(0.97)).to({_off:true},1).wait(62));

	// text3
	this.instance_6 = new lib.dfgdfg();
	this.instance_6.parent = this;
	this.instance_6.setTransform(104.1,120.7,1.2,1.2,0,0,0,113.9,71.2);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(211).to({_off:false},0).wait(79).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(62));

	// Слой 4
	this.instance_7 = new lib.bg();
	this.instance_7.parent = this;
	this.instance_7.setTransform(375,125,2.5,1,0,0,0,150,125);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(360));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,250);


(lib.main1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 19
	this.instance = new lib.ghggg();
	this.instance.parent = this;
	this.instance.setTransform(-30,231.4);
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
	this.instance_2 = new lib.hgj();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-99.5,-73.7,0.507,0.507,0,0,0,0.1,0.3);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},7).to({_off:true},295).wait(58));

	// mask-in-out - копия: 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A2efOMAVkg+aMAlaAAAMAAAA+ag");
	var mask_graphics_1 = new cjs.Graphics().p("A8xfOMASag+aMAnJAAAMAAAA+ag");
	var mask_graphics_2 = new cjs.Graphics().p("A8HfOMAPig+aMAotAAAMAAAA+ag");
	var mask_graphics_3 = new cjs.Graphics().p("A7ifOMAM/g+aMAqGAAAMAAAA+ag");
	var mask_graphics_4 = new cjs.Graphics().p("A7BfOMAKug+aMArVAAAMAAAA+ag");
	var mask_graphics_5 = new cjs.Graphics().p("A6kfOMAIwg+aMAsZAAAMAAAA+ag");
	var mask_graphics_6 = new cjs.Graphics().p("A6MfOMAHGg+aMAtTAAAMAAAA+ag");
	var mask_graphics_7 = new cjs.Graphics().p("A55fOMAFwg+aMAuCAAAMAAAA+ag");
	var mask_graphics_8 = new cjs.Graphics().p("A5pfOMAEsg+aMAunAAAMAAAA+ag");
	var mask_graphics_9 = new cjs.Graphics().p("A5efOMAD8g+aMAvBAAAMAAAA+ag");
	var mask_graphics_10 = new cjs.Graphics().p("A5YfOMADfg+aMAvSAAAMAAAA+ag");
	var mask_graphics_11 = new cjs.Graphics().p("A5VfOMADVg+aMAvWAAAMAAAA+ag");
	var mask_graphics_62 = new cjs.Graphics().p("A9efOMAAAg+aMA69AAAMgVjA+ag");
	var mask_graphics_63 = new cjs.Graphics().p("A5HfOMAAAg+aMAyPAAAMgSYA+ag");
	var mask_graphics_64 = new cjs.Graphics().p("A1KfOMAAAg+aMAqVAAAMgPfA+ag");
	var mask_graphics_65 = new cjs.Graphics().p("AxofOMAAAg+aMAjRAAAMgM5A+ag");
	var mask_graphics_66 = new cjs.Graphics().p("AugfOMAAAg+aIdBAAMgKnA+ag");
	var mask_graphics_67 = new cjs.Graphics().p("Au6fOMAAAg+aIXoAAMgIpA+ag");
	var mask_graphics_68 = new cjs.Graphics().p("AvUfOMAAAg+aITDAAMgG9A+ag");
	var mask_graphics_69 = new cjs.Graphics().p("AvqfOMAAAg+aIPVAAMgFnA+ag");
	var mask_graphics_70 = new cjs.Graphics().p("Av7fOMAAAg+aIMaAAMgEiA+ag");
	var mask_graphics_71 = new cjs.Graphics().p("AwIfOMAAAg+aIKWAAMgDyA+ag");
	var mask_graphics_72 = new cjs.Graphics().p("AwPfOMAAAg+aIJGAAMgDVA+ag");
	var mask_graphics_73 = new cjs.Graphics().p("AwRfOMAAAg+aIIrAAMgDLA+ag");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:233.6,y:75.3}).wait(1).to({graphics:mask_graphics_1,x:227.8,y:75.3}).wait(1).to({graphics:mask_graphics_2,x:182,y:75.3}).wait(1).to({graphics:mask_graphics_3,x:141,y:75.3}).wait(1).to({graphics:mask_graphics_4,x:104.9,y:75.3}).wait(1).to({graphics:mask_graphics_5,x:73.5,y:75.3}).wait(1).to({graphics:mask_graphics_6,x:47,y:75.3}).wait(1).to({graphics:mask_graphics_7,x:25.4,y:75.3}).wait(1).to({graphics:mask_graphics_8,x:8.5,y:75.3}).wait(1).to({graphics:mask_graphics_9,x:-3.6,y:75.3}).wait(1).to({graphics:mask_graphics_10,x:-10.8,y:75.3}).wait(1).to({graphics:mask_graphics_11,x:-13.2,y:75.3}).wait(1).to({graphics:null,x:0,y:0}).wait(50).to({graphics:mask_graphics_62,x:39.3,y:75.3}).wait(1).to({graphics:mask_graphics_63,x:1.1,y:75.3}).wait(1).to({graphics:mask_graphics_64,x:-33.5,y:75.3}).wait(1).to({graphics:mask_graphics_65,x:-64.4,y:75.3}).wait(1).to({graphics:mask_graphics_66,x:-91.6,y:75.3}).wait(1).to({graphics:mask_graphics_67,x:-95.5,y:75.3}).wait(1).to({graphics:mask_graphics_68,x:-98.1,y:75.3}).wait(1).to({graphics:mask_graphics_69,x:-100.3,y:75.3}).wait(1).to({graphics:mask_graphics_70,x:-102,y:75.3}).wait(1).to({graphics:mask_graphics_71,x:-103.3,y:75.3}).wait(1).to({graphics:mask_graphics_72,x:-104,y:75.3}).wait(1).to({graphics:mask_graphics_73,x:-104.2,y:75.3}).wait(287));

	// text0
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVASIAPgiIAbgBIgdAjg");
	this.shape.setTransform(-67.4,31.5,0.72,0.72);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUASIAOgjIAbAAIgdAjg");
	this.shape_1.setTransform(-63.8,4.6,0.72,0.72);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVASIAPgiIAcgBIgeAjg");
	this.shape_2.setTransform(-85.7,-9.2,0.72,0.72);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgkAsIAAhXIAVAAIAAAgIARgBQAPAAAKAIQAJAGAAAOQAAANgHAHQgKAIgSAAgAgPADIAAAZIAPAAQAQAAAAgNQAAgFgDgEQgFgDgIAAg");
	this.shape_3.setTransform(-42.8,37.2,0.72,0.72);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJAsIAAhFIgZAAIAAgSIBFAAIAAASIgZAAIAABFg");
	this.shape_4.setTransform(-49.1,37.2,0.72,0.72);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmAuIAAhZIAUAAIAAA0IA0g2IAFAAIAABZIgUAAIAAg0Ig0A2g");
	this.shape_5.setTransform(-55.6,37.2,0.72,0.72);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZAiQgLgMAAgVQAAgUAMgNQANgMAVAAQAPAAAMAIIgJAQQgIgHgLAAQgLAAgHAHQgGAHAAAOQAAAbAZAAQAMAAAIgHIAHAQQgHAFgJACQgGABgJAAQgSAAgNgLg");
	this.shape_6.setTransform(-62.3,37.2,0.72,0.72);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgeAhQgLgNAAgUQAAgTALgNQANgMARAAQAUAAALAMQALAMAAAUQAAAVgMAMQgKAMgUAAQgTAAgLgMgAgOgUQgGAIAAAMQABAdATAAQAKAAAFgIQAGgHAAgOQAAgcgVAAQgIAAgGAIg");
	this.shape_7.setTransform(-68.9,37.2,0.72,0.72);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZAiQgMgMABgVQgBgUANgNQAMgMAWAAQAPAAALAIIgIAQQgIgHgLAAQgKAAgIAHQgGAHAAAOQAAAbAZAAQALAAAJgHIAHAQQgIAFgIACQgGABgJAAQgSAAgNgLg");
	this.shape_8.setTransform(-75.4,37.2,0.72,0.72);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgeAiQgMgLAAgWQAAgUANgNQANgMARAAQATAAALALQAMAMAAARIgCAKIg9AAQAAALAHAGQAHAFAKAAQANAAAIgHIAIAQQgMAIgUAAQgTAAgMgLgAgUgIIAqAAQgCgTgTAAQgQAAgFATg");
	this.shape_9.setTransform(-82,37.2,0.72,0.72);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgqAaQAIAAAGgFQAGgGADgPQAEgQAAgWIAAgFIA6AAIAABWIgUAAIAAhGIgWAAQgBAUgCANQgEARgFAHQgHAJgGACQgHADgLAAg");
	this.shape_10.setTransform(-89.3,37.3,0.72,0.72);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAfAsIAAhXIAUAAIAABXgAgyAsIAAhXIAUAAIAAAgIAPgBQAQAAAIAIQAJAGAAAOQAAAcghAAgAgeADIAAAZIANAAQAJAAAEgEQADgDAAgGQAAgGgEgDQgEgEgIAAg");
	this.shape_11.setTransform(-97.1,37.2,0.72,0.72);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AASAsIAAhFIgiAAIAABFIgVAAIAAhXIBLAAIAABXg");
	this.shape_12.setTransform(-105.1,37.2,0.72,0.72);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgRAsIgbhYIAVAAIAPA0IAeg0IAXAAIg3BYg");
	this.shape_13.setTransform(-118.7,37.3,0.72,0.72);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgJAKQgFgDAAgHQAAgGAFgDQAEgFAFAAQAGAAAFAFQADAEAAAFQAAAGgDAEQgFAFgGAAQgFAAgEgFg");
	this.shape_14.setTransform(-128.4,39.6,0.72,0.72);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AglA9IAAgHIAlg2QALgQAAgMQAAgOgPAAQgNAAgHANIgPgLQAEgIAKgGQAJgGALAAQARAAAKAJQALAIAAAPQAAANgNAUIgYAlIAsAAIAAATg");
	this.shape_15.setTransform(-133.9,36,0.72,0.72);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgTBCQAQgTAAgxQAAgqgQgXIAAgLQARAIAKAXQAMAXAAAWQAAAagLAVQgJAVgTANg");
	this.shape_16.setTransform(-12.4,24,0.72,0.72);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAfArIAAhWIAUAAIAABWgAgyArIAAhWIAUAAIAAAfIAPAAQAPAAAJAIQAJAGAAAOQAAAcghgBgAgeADIAAAZIANAAQAJAAAEgEQADgDAAgGQAAgFgEgEQgEgEgIAAg");
	this.shape_17.setTransform(-19.3,23.9,0.72,0.72);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgDAtIgXgsIgBgDIAAAAIgIAtIgTAAIAQhYIAIAAIAeA+IAgg+IAHAAIAQBYIgUAAIgIgpIAAgEIgBAAIgCAHIgVAog");
	this.shape_18.setTransform(-28.1,23.9,0.72,0.72);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgnA+IAAh5IAUAAIAAAGQAIgIAKAAQApAAABAvQAAAUgMALQgMAMgTAAQgIAAgJgEIAAAlgAgTgmIAAAtQAFAFAIAAQANAAAGgHQAGgFAAgPQAAgPgGgHQgGgGgNAAQgHAAgGAFg");
	this.shape_19.setTransform(-35.7,25.1,0.72,0.72);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgmAtIAAhYIAUAAIAAA0IA0g2IAFAAIAABYIgUAAIAAgzIg0A1g");
	this.shape_20.setTransform(-43.1,23.9,0.72,0.72);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgJBPIAAgkQgIAEgIAAQgQAAgJgMQgJgMAAgVQAAgVAKgMQALgMAPAAQAGAAAIADIAAgiIATgEIAAAmQAIgDAGAAQARAAAJAMQAKAMAAAVQAAAUgKANQgKAMgPAAQgIAAgHgDIAAAjgAAKgZIAAA2IAKACQAUAAAAgfQAAgMgFgIQgEgHgKAAQgGAAgFACgAgnAAQAAAfATAAIALgCIAAg1QgFgDgGAAQgTAAAAAbg");
	this.shape_21.setTransform(-51.4,23.8,0.72,0.72);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgJAjQgJgKgCgTIgPAAIAAAlIgTAAIAAhWIATAAIAAAhIAPAAQADgPAKgKQAJgKAPAAQASAAAKANQAKANAAATQAAAVgKAMQgLAMgRAAQgRAAgJgKgAADgUQgEAKAAAKQAAAcASAAQAIAAAFgHQAFgIAAgNQAAgcgSAAQgJAAgFAIg");
	this.shape_22.setTransform(-64.3,23.9,0.72,0.72);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgmAtIAAhYIAUAAIAAA0IA0g2IAFAAIAABYIgUAAIAAgzIgzA1g");
	this.shape_23.setTransform(-72.6,23.9,0.72,0.72);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AASArIAAglIgjAAIAAAlIgUAAIAAhWIAUAAIAAAhIAjAAIAAghIAUAAIAABWg");
	this.shape_24.setTransform(-79.8,23.9,0.72,0.72);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AATAqQgDgDgCgEQgDAFgHADQgGACgHAAQgOAAgIgHQgIgHAAgNQAAgOALgIQALgJAVAAIAIABQAAgPgSgBQgLAAgJAFIgEgQQALgGAOAAQATAAAJAKQAKAJAAAZIAAASQAAASAHAEQgEAEgCABQgDACgEgBQgEABgEgEgAgTARQAAAMAOAAQARAAAAgSIAAgJIgIgBQgXAAAAAQg");
	this.shape_25.setTransform(-86.5,23.9,0.72,0.72);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgjAsIAAhWIAkgBQAPAAAJAGQAIAHAAALQAAAEgEAHQgDAEgHACQARAGAAAQQAAALgIAGQgIAHgSAAgAgQAGIAAAXIARAAQAQAAAAgMQAAgFgFgDQgEgEgHAAgAgQgbIAAATIAQAAQAOAAAAgKQAAgFgEgCQgDgDgGAAIgRABg");
	this.shape_26.setTransform(-92.9,23.9,0.72,0.72);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgiAkIAKgQQALAIANAAQAOAAAAgKQAAgMgQAAIgMAAIAAgPIANABQANAAAAgKQAAgFgDgCQgDgDgGAAQgLAAgMAHIgHgQQAQgIAPAAQANAAAKAHQAIAHAAALQAAAOgNAFQAHABAEAGQAFAGAAAFQAAAOgKAIQgKAGgQAAQgVAAgMgJg");
	this.shape_27.setTransform(-99.3,23.9,0.72,0.72);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAUAqQgDgDgCgEQgDAFgHADQgHACgGAAQgOAAgJgHQgIgHAAgNQAAgOALgIQAMgJAUAAIAJABQAAgPgTgBQgKAAgJAFIgFgQQALgGAOAAQATAAAKAKQAJAJAAAZIAAASQAAASAHAEQgDAEgCABQgDACgFgBQgEABgDgEgAgSARQAAAMANAAQASAAAAgSIAAgJIgIgBQgXAAAAAQg");
	this.shape_28.setTransform(-105.3,23.9,0.72,0.72);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AASArIAAglIgjAAIAAAlIgUAAIAAhWIAUAAIAAAhIAjAAIAAghIAUAAIAABWg");
	this.shape_29.setTransform(-112.1,23.9,0.72,0.72);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgdAhQgMgNAAgUQAAgTAMgMQAMgOARAAQATAAAMANQALAMAAAUQAAAUgMANQgLAMgTAAQgTAAgKgMgAgOgUQgGAHABANQgBAcAUAAQAJAAAGgHQAGgHAAgOQAAgcgVAAQgIABgGAHg");
	this.shape_30.setTransform(-122.7,23.9,0.72,0.72);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AARArIAAhFIghAAIAABFIgVAAIAAhWIBLAAIAABWg");
	this.shape_31.setTransform(-129.6,23.9,0.72,0.72);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgIAtQgLgVAAgaQAAgWAMgXQAKgXARgIIAAALQgQAXAAAqQAAAxAQATIAAANQgUgNgIgVg");
	this.shape_32.setTransform(-135.2,24,0.72,0.72);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgZAiQgMgMABgVQgBgUANgNQANgMAVAAQAPAAAMAIIgJAQQgHgHgMAAQgKAAgHAHQgHAHAAAOQAAAbAZAAQALAAAJgHIAHAQQgIAFgIACQgGABgJAAQgSAAgNgLg");
	this.shape_33.setTransform(-58.6,10.6,0.72,0.72);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgeAhQgLgNAAgUQAAgTAMgNQAKgMATAAQAUAAALAMQALANAAATQAAAVgLAMQgMAMgTAAQgTAAgLgMgAgOgUQgFAHgBANQAAAdAUAAQAJAAAGgIQAGgHAAgOQgBgcgUAAQgIAAgGAIg");
	this.shape_34.setTransform(-65.1,10.6,0.72,0.72);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgYAiQgMgMAAgVQAAgUAMgNQANgMAVAAQAPAAAMAIIgJAQQgHgHgMAAQgKAAgHAHQgHAIAAANQAAAbAZAAQAMAAAIgHIAHAQQgHAFgIACQgHABgJAAQgTAAgLgLg");
	this.shape_35.setTransform(-71.7,10.6,0.72,0.72);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgeAiQgMgMAAgVQAAgUANgNQANgMARAAQATAAALALQAMALAAASIgCAKIg9AAQAAALAHAFQAHAGAKAAQANAAAIgHIAIAQQgMAIgUAAQgTAAgMgLgAgUgIIAqAAQgCgTgTAAQgQAAgFATg");
	this.shape_36.setTransform(-78.2,10.6,0.72,0.72);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgqAaQAIAAAGgFQAGgHADgOQAEgQAAgWIAAgFIA6AAIAABWIgUAAIAAhGIgWAAQAAAQgDARQgEAQgFAIQgHAJgGACQgHADgLAAg");
	this.shape_37.setTransform(-85.6,10.7,0.72,0.72);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAfAsIAAhXIAUAAIAABXgAgyAsIAAhXIAUAAIAAAgIAPgBQAPAAAJAHQAJAGAAAPQAAAcghAAgAgeADIAAAZIANAAQAJAAAEgEQADgDAAgGQAAgFgEgEQgFgEgHAAg");
	this.shape_38.setTransform(-93.4,10.6,0.72,0.72);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AARAsIAAhFIghAAIAABFIgVAAIAAhXIBLAAIAABXg");
	this.shape_39.setTransform(-101.4,10.6,0.72,0.72);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AALAtIAKgyIABgKQAAgLgNAAQgKAAgJAJIgMA+IgUAAIAMhBIAAgFQAAgIgBgHIATgEIACAKQAKgJAQAAQAbAAAAAZIgBAKIgKA1g");
	this.shape_40.setTransform(-115.6,10.6,0.72,0.72);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgJAKQgFgEAAgGQAAgGAFgDQAEgFAFAAQAGAAAFAFQADAEAAAFQAAAFgDAFQgFAFgGAAQgFAAgEgFg");
	this.shape_41.setTransform(-128.4,13,0.72,0.72);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AABA8IAAhVIgXAPIAAgVQAXgMANgQIAJAAIAAB3g");
	this.shape_42.setTransform(-134.3,9.5,0.72,0.72);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgUBPIAAgTIAUAAIAAh4IgUAAIAAgSIApAAIAACdg");
	this.shape_43.setTransform(-51,-2.7,0.72,0.72);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgeAiQgMgMAAgVQAAgTANgNQANgNARAAQATAAALALQAMAMAAARIgCAKIg9AAQAAAKAHAHQAHAFAKAAQAOAAAHgHIAIAQQgKAIgWAAQgUAAgLgLgAgUgIIAqAAQgCgTgTAAQgQAAgFATg");
	this.shape_44.setTransform(-56.9,-2.7,0.72,0.72);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgDAsIgnhXIAVAAIAVA0IAWg0IAVAAIgoBXg");
	this.shape_45.setTransform(-63.5,-2.6,0.72,0.72);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgKArQgDgFAAgFQAAgGADgFQAFgEAFAAQAGAAAFAEQAEAEAAAHQAAAGgEAEQgGAFgFAAQgFAAgFgFgAgKgWQgDgEAAgGQAAgGADgFQAEgEAGAAQAGAAAFAEQAEAFAAAGQAAAHgEADQgGAEgFABQgFgBgFgEg");
	this.shape_46.setTransform(-69,-2.7,0.72,0.72);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AglAMIAAg3IAUAAIAAA2QAAAQAPAAQAHAAAFgDQAGgEACgEIAAg7IAUAAIAABWIgUAAIAAgHQgEAEgIACQgGACgHAAQgeAAAAggg");
	this.shape_47.setTransform(-74.7,-2.6,0.72,0.72);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AASA+IAAg1QAAgJgFgDQgFgFgIAAQgEAAgFACQgGADgCADIAAA+IgUAAIAAh2IAUgFIAAArQAJgIAMAAQAQAAAJAKQAJAJAAAQIAAA1g");
	this.shape_48.setTransform(-81.7,-4,0.72,0.72);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgUBPIAAidIApAAIAAASIgVAAIAAB4IAVAAIAAATg");
	this.shape_49.setTransform(-91.3,-2.7,0.72,0.72);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgdAsIAAhWIAVAAIAAAJQAIgKANAAQALgBAFAEIgIARQgFgEgHAAQgHAAgFAHQgFAGAAAKIAAAwg");
	this.shape_50.setTransform(-99.6,-2.7,0.72,0.72);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgeAiQgLgNAAgUQAAgUAMgMQANgNARAAQASAAAMALQALALAAASIgBAKIg+AAQACALAGAGQAHAFAKAAQAOAAAHgHIAIAQQgLAIgWAAQgTAAgLgLgAgUgIIArAAQgDgTgTAAQgRAAgEATg");
	this.shape_51.setTransform(-106,-2.7,0.72,0.72);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgDAsIgohXIAXAAIAUA0IAWg0IAVAAIgnBXg");
	this.shape_52.setTransform(-112.6,-2.6,0.72,0.72);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgeAhQgLgNAAgUQAAgTAMgNQAMgMARAAQAUAAALAMQALANAAATQAAAUgMANQgKAMgUAAQgTAAgLgMgAgOgUQgGAHABANQgBAdAUAAQAKAAAFgIQAGgHgBgOQAAgbgUAAQgJAAgFAHg");
	this.shape_53.setTransform(-119.1,-2.7,0.72,0.72);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgeAhQgLgNAAgUQAAgTAMgNQAMgMARAAQAUAAALAMQALAMAAAUQAAAUgLANQgLAMgUAAQgTAAgLgMgAgOgUQgGAHABANQgBAdAUAAQAKAAAFgIQAGgHAAgOQAAgbgVAAQgJAAgFAHg");
	this.shape_54.setTransform(-125.9,-2.7,0.72,0.72);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAYA7IAAg1IgvAAIAAA1IgVAAIAAh2IAVAAIAAAvIAvAAIAAgvIAVAAIAAB2g");
	this.shape_55.setTransform(-133.4,-3.8,0.72,0.72);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AilFpIDArRICLAAIi/LRg");
	this.shape_56.setTransform(14.1,-13.5,0.72,0.72);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#CB0927").s().p("AjFFdIC7q5IDQAAIi7K5g");
	this.shape_57.setTransform(9.3,31.9,0.72,0.72);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#D1D1D1").s().p("AkkIuIBwmjIDRAAIC7q5IBNAAIkqRcg");
	this.shape_58.setTransform(8.1,47,0.72,0.72);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#DC052B").s().p("AzpIuIAAxcMAnTAAAIksRcg");
	this.shape_59.setTransform(-59,16.8,0.72,0.72);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},74).wait(286));

	// pic0
	this.instance_3 = new lib.pic0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(29,-125,0.8,0.8);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},74).wait(286));

	// mask-in-out (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_62 = new cjs.Graphics().p("A9efOMAVkg+aMAlaAAAMAAAA+ag");
	var mask_1_graphics_63 = new cjs.Graphics().p("A8xfOMASag+aMAnJAAAMAAAA+ag");
	var mask_1_graphics_64 = new cjs.Graphics().p("A8HfOMAPig+aMAotAAAMAAAA+ag");
	var mask_1_graphics_65 = new cjs.Graphics().p("A7ifOMAM/g+aMAqGAAAMAAAA+ag");
	var mask_1_graphics_66 = new cjs.Graphics().p("A7BfOMAKug+aMArVAAAMAAAA+ag");
	var mask_1_graphics_67 = new cjs.Graphics().p("A6kfOMAIwg+aMAsZAAAMAAAA+ag");
	var mask_1_graphics_68 = new cjs.Graphics().p("A6MfOMAHGg+aMAtTAAAMAAAA+ag");
	var mask_1_graphics_69 = new cjs.Graphics().p("A55fOMAFwg+aMAuCAAAMAAAA+ag");
	var mask_1_graphics_70 = new cjs.Graphics().p("A5pfOMAEsg+aMAunAAAMAAAA+ag");
	var mask_1_graphics_71 = new cjs.Graphics().p("A5efOMAD8g+aMAvBAAAMAAAA+ag");
	var mask_1_graphics_72 = new cjs.Graphics().p("A5YfOMADfg+aMAvSAAAMAAAA+ag");
	var mask_1_graphics_73 = new cjs.Graphics().p("A5VfOMADVg+aMAvWAAAMAAAA+ag");
	var mask_1_graphics_137 = new cjs.Graphics().p("A9efOMAAAg+aMA69AAAMgVjA+ag");
	var mask_1_graphics_138 = new cjs.Graphics().p("A5HfOMAAAg+aMAyPAAAMgSYA+ag");
	var mask_1_graphics_139 = new cjs.Graphics().p("A1KfOMAAAg+aMAqVAAAMgPfA+ag");
	var mask_1_graphics_140 = new cjs.Graphics().p("AxofOMAAAg+aMAjRAAAMgM5A+ag");
	var mask_1_graphics_141 = new cjs.Graphics().p("AugfOMAAAg+aIdBAAMgKnA+ag");
	var mask_1_graphics_142 = new cjs.Graphics().p("Au6fOMAAAg+aIXoAAMgIpA+ag");
	var mask_1_graphics_143 = new cjs.Graphics().p("AvUfOMAAAg+aITDAAMgG9A+ag");
	var mask_1_graphics_144 = new cjs.Graphics().p("AvqfOMAAAg+aIPVAAMgFnA+ag");
	var mask_1_graphics_145 = new cjs.Graphics().p("Av7fOMAAAg+aIMaAAMgEiA+ag");
	var mask_1_graphics_146 = new cjs.Graphics().p("AwIfOMAAAg+aIKWAAMgDyA+ag");
	var mask_1_graphics_147 = new cjs.Graphics().p("AwPfOMAAAg+aIJGAAMgDVA+ag");
	var mask_1_graphics_148 = new cjs.Graphics().p("AwRfOMAAAg+aIIrAAMgDLA+ag");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_1_graphics_62,x:278.4,y:75.3}).wait(1).to({graphics:mask_1_graphics_63,x:227.8,y:75.3}).wait(1).to({graphics:mask_1_graphics_64,x:182,y:75.3}).wait(1).to({graphics:mask_1_graphics_65,x:141,y:75.3}).wait(1).to({graphics:mask_1_graphics_66,x:104.9,y:75.3}).wait(1).to({graphics:mask_1_graphics_67,x:73.5,y:75.3}).wait(1).to({graphics:mask_1_graphics_68,x:47,y:75.3}).wait(1).to({graphics:mask_1_graphics_69,x:25.4,y:75.3}).wait(1).to({graphics:mask_1_graphics_70,x:8.5,y:75.3}).wait(1).to({graphics:mask_1_graphics_71,x:-3.6,y:75.3}).wait(1).to({graphics:mask_1_graphics_72,x:-10.8,y:75.3}).wait(1).to({graphics:mask_1_graphics_73,x:-13.2,y:75.3}).wait(1).to({graphics:null,x:0,y:0}).wait(63).to({graphics:mask_1_graphics_137,x:39.3,y:75.3}).wait(1).to({graphics:mask_1_graphics_138,x:1.1,y:75.3}).wait(1).to({graphics:mask_1_graphics_139,x:-33.5,y:75.3}).wait(1).to({graphics:mask_1_graphics_140,x:-64.4,y:75.3}).wait(1).to({graphics:mask_1_graphics_141,x:-91.6,y:75.3}).wait(1).to({graphics:mask_1_graphics_142,x:-95.5,y:75.3}).wait(1).to({graphics:mask_1_graphics_143,x:-98.1,y:75.3}).wait(1).to({graphics:mask_1_graphics_144,x:-100.3,y:75.3}).wait(1).to({graphics:mask_1_graphics_145,x:-102,y:75.3}).wait(1).to({graphics:mask_1_graphics_146,x:-103.3,y:75.3}).wait(1).to({graphics:mask_1_graphics_147,x:-104,y:75.3}).wait(1).to({graphics:mask_1_graphics_148,x:-104.2,y:75.3}).wait(212));

	// text1
	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgJAKQgFgDAAgHQAAgFAFgEQAEgFAFAAQAHAAADAFQAFAEAAAFQAAAHgFADQgDAFgHAAQgFAAgEgFg");
	this.shape_60.setTransform(-26.3,11.2,0.792,0.792);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgdAsIAAhXIA7AAIAAASIgnAAIAABFg");
	this.shape_61.setTransform(-31.4,8.6,0.792,0.792);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgcA1QgKgLAAgQQAAgIAFgKQAGgIAIgFQgIgFgDgGQgEgGAAgJQAAgOAKgHQAJgJAPAAQARAAAIAJQAKAIAAANQAAAIgGAIQgFAIgGADQAIAEAGAIQAHAKAAAIQAAAQgLAKQgKAJgSAAQgSAAgKgIgAgRAaQAAAHAFAFQAFAFAHABQAIAAAFgFQAFgFAAgGQAAgOgUgLQgPAJAAAOgAgNgfQAAAGAFAFQAGAFAEACQAEgCAEgGQADgFAAgFQAAgFgDgEQgEgDgGAAQgNAAAAAMg");
	this.shape_62.setTransform(-42.6,7.3,0.792,0.792);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgfAuQgLgPAAgiQAAgYAMgQQALgRAUgBQAqABAAA8QAAAbgMASQgLAQgUAAQgWAAgJgPgAgUgBQAAAXAFALQAEAMALAAQAKgBAGgJQAFgMAAgYQAAgXgFgKQgFgJgKAAQgVgBAAArg");
	this.shape_63.setTransform(-50.3,7.3,0.792,0.792);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgWAyQAYgOAKgWQgGADgHAAQgRAAgKgLQgKgKAAgRQAAgRAKgMQALgLAQAAQAoAAAAA1QAAAUgQAXQgQAWgSAFgAgMglQgFAGAAAJQAAALAFAFQAFAGAHAAQARAAAAgVQAAgWgRAAQgIAAgEAGg");
	this.shape_64.setTransform(-58,7.4,0.792,0.792);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AABA8IAAhVIgXAPIAAgVQAWgLAOgRIAJAAIAAB3g");
	this.shape_65.setTransform(-66.1,7.3,0.792,0.792);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgkAsIAAhWIAlgBQAPAAAJAGQAIAHAAALQAAAGgEAEQgDAFgGADQARAFAAAQQAAALgJAHQgJAGgRAAgAgQAcIARABQAQAAAAgMQAAgGgFgDQgFgCgGAAIgRAAgAgQgbIAAATIAQAAQANAAAAgKQAAgEgDgDQgEgDgFAAg");
	this.shape_66.setTransform(-77,8.6,0.792,0.792);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgYAiQgMgMAAgVQAAgUAMgNQANgMAVAAQAPAAAMAIIgJAQQgIgHgLAAQgKAAgHAHQgHAIAAANQAAAbAZAAQAMAAAIgHIAHAQQgHAFgIACQgHABgJAAQgTAAgLgLg");
	this.shape_67.setTransform(-88.2,8.6,0.792,0.792);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgUAMgMQALgMASAAQAUAAALAMQALAMAAAUQAAAWgMALQgLAMgTAAQgTAAgLgMgAgOgUQgGAIAAAMQAAAdAUAAQAJAAAGgIQAGgIAAgNQAAgcgVAAQgIAAgGAIg");
	this.shape_68.setTransform(-95.4,8.6,0.792,0.792);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgZAiQgLgNAAgUQAAgUAMgNQANgMAVAAQAPAAAMAIIgJAQQgHgHgMAAQgKAAgHAHQgHAIAAANQAAAbAZAAQAMAAAIgHIAHAQQgHAFgJACQgGABgJAAQgSAAgNgLg");
	this.shape_69.setTransform(-102.5,8.6,0.792,0.792);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgeAiQgMgMAAgVQAAgUANgNQAMgMASAAQATAAALALQALAMAAARIgBAKIg+AAQABALAHAGQAHAFAJAAQAOAAAIgHIAHAQQgLAIgUAAQgTAAgMgLgAgUgIIAqAAQgDgTgSAAQgQAAgFATg");
	this.shape_70.setTransform(-109.8,8.6,0.792,0.792);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgpAaQAHAAAGgFQAFgGAEgPQAEgSAAgUIAAgFIA5AAIAABWIgTAAIAAhGIgVAAQgBASgDAPQgDAOgHAKQgGAJgGACQgIADgJAAg");
	this.shape_71.setTransform(-117.8,8.7,0.792,0.792);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AAfAsIAAhXIAUAAIAABXgAgyAsIAAhXIATAAIAAAgIAQgBQAPAAAJAHQAJAIAAANQAAAcghAAgAgfADIAAAZIAOAAQAJAAADgEQAEgDAAgGQAAgGgEgDQgEgEgIAAg");
	this.shape_72.setTransform(-126.4,8.6,0.792,0.792);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AARAsIAAhFIghAAIAABFIgVAAIAAhXIBLAAIAABXg");
	this.shape_73.setTransform(-135.2,8.6,0.792,0.792);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgmAuIAAhYIAUAAIAAAzIA0g1IAFAAIAABXIgVAAIAAgzIgzA2g");
	this.shape_74.setTransform(-67,-6,0.792,0.792);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgqAaQAIAAAGgGQAFgFAEgPQAEgSAAgTIAAgGIA6AAIAABWIgUAAIAAhGIgWAAQAAARgDAQQgEAQgFAIQgGAIgHAEQgIACgKAAg");
	this.shape_75.setTransform(-75.3,-6,0.792,0.792);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AATAqQgDgCgCgFQgDAFgHADQgEACgJAAQgPAAgHgHQgIgGAAgNQAAgPALgIQALgJAVAAIAIACQAAgQgSAAQgLAAgJAEIgEgQQAKgFAPAAQATAAAJAJQAKAJAAAaIAAARQAAASAHAEQgDAFgDAAIgHABQgFAAgDgDgAgTARQAAAMAOAAQARAAAAgSIAAgIIgIgBQgXAAAAAPg");
	this.shape_76.setTransform(-82.4,-6,0.792,0.792);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAfA7IAAgfIg9AAIAAAfIgRAAIAAgvIAIAAQAJgMAFgOQAFgTAAgOIAAgLIA4AAIAABGIAMAAIAAAvgAgTAMIAkAAIAAg2IgVAAQgBAjgOATg");
	this.shape_77.setTransform(-90.2,-4.8,0.792,0.792);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgiAkIAKgQQAKAIAOABQAOAAAAgLQAAgMgQAAIgMAAIAAgPIANABQANAAAAgKQAAgFgDgCQgDgDgGAAQgLAAgLAHIgIgQQAQgIAPABQAOAAAJAGQAJAIAAAKQAAAOgOAFQAHABAFAGQAEAFAAAGQAAAOgKAIQgKAGgQABQgUAAgNgKg");
	this.shape_78.setTransform(-97.6,-6,0.792,0.792);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgeAhQgLgNAAgUQAAgTAMgMQALgNASAAQAUAAALAMQALANAAATQAAAVgLAMQgMAMgTAAQgTAAgLgMgAgOgUQgFAGgBAOQAAAdAUAAQAJAAAGgHQAGgHAAgPQgBgbgUAAQgJAAgFAHg");
	this.shape_79.setTransform(-104.4,-6,0.792,0.792);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgYAiQgMgLAAgWQAAgTAMgNQANgNAVAAQAQAAALAJIgJAPQgIgHgLAAQgLAAgGAIQgHAIAAAMQAAAcAZAAQAMAAAIgIIAHAQQgKAGgFABIgQABQgTAAgLgLg");
	this.shape_80.setTransform(-111.6,-6,0.792,0.792);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AAfArIAAhVIAUAAIAABVgAgyArIAAhVIAUAAIAAAeIAPAAQAPAAAJAHQAJAHAAAOQAAAbghAAgAgeADIAAAYIANABQAKAAADgEQADgDAAgGQAAgGgEgDQgEgEgIABg");
	this.shape_81.setTransform(-123.9,-6,0.792,0.792);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgCA8IgZhAIgMA/IgVAAIAYh2IALAAIAZBPIAZhPIAMAAIAYB2IgVAAIgMg/IgYBAg");
	this.shape_82.setTransform(-133.9,-7.2,0.792,0.792);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AiMEGICOoLICLAAIiOILg");
	this.shape_83.setTransform(-4.2,-18.7,0.72,0.72);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#CB0927").s().p("AigDSIBwmkIDRAAIhxGkg");
	this.shape_84.setTransform(-4.7,9.4,0.72,0.72);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#D1D1D1").s().p("AjtFhIBJkXIDSAAIBymqIBOAAIhyGqIgBAAIhLEXg");
	this.shape_85.setTransform(-4.6,19.7,0.72,0.72);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#DC052B").s().p("AsmD3IgBntIZPAAIiEHtg");
	this.shape_86.setTransform(-68.8,0.3);

	var maskedShapeInstanceList = [this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]},62).to({state:[]},87).wait(211));

	// pic1
	this.instance_4 = new lib.pic1_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(81,7.4,0.813,0.812);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(62).to({_off:false},0).to({_off:true},87).wait(211));

	// mask-in-out - копия (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_137 = new cjs.Graphics().p("A9efOMAVkg+aMAlaAAAMAAAA+ag");
	var mask_2_graphics_138 = new cjs.Graphics().p("A8xfOMASag+aMAnJAAAMAAAA+ag");
	var mask_2_graphics_139 = new cjs.Graphics().p("A8HfOMAPig+aMAotAAAMAAAA+ag");
	var mask_2_graphics_140 = new cjs.Graphics().p("A7ifOMAM/g+aMAqGAAAMAAAA+ag");
	var mask_2_graphics_141 = new cjs.Graphics().p("A7BfOMAKug+aMArVAAAMAAAA+ag");
	var mask_2_graphics_142 = new cjs.Graphics().p("A6kfOMAIwg+aMAsZAAAMAAAA+ag");
	var mask_2_graphics_143 = new cjs.Graphics().p("A6MfOMAHGg+aMAtTAAAMAAAA+ag");
	var mask_2_graphics_144 = new cjs.Graphics().p("A55fOMAFwg+aMAuCAAAMAAAA+ag");
	var mask_2_graphics_145 = new cjs.Graphics().p("A5pfOMAEsg+aMAunAAAMAAAA+ag");
	var mask_2_graphics_146 = new cjs.Graphics().p("A5efOMAD8g+aMAvBAAAMAAAA+ag");
	var mask_2_graphics_147 = new cjs.Graphics().p("A5YfOMADfg+aMAvSAAAMAAAA+ag");
	var mask_2_graphics_148 = new cjs.Graphics().p("A5VfOMADVg+aMAvWAAAMAAAA+ag");
	var mask_2_graphics_211 = new cjs.Graphics().p("A9efOMAAAg+aMA69AAAMgVjA+ag");
	var mask_2_graphics_212 = new cjs.Graphics().p("A5HfOMAAAg+aMAyPAAAMgSYA+ag");
	var mask_2_graphics_213 = new cjs.Graphics().p("A1KfOMAAAg+aMAqVAAAMgPfA+ag");
	var mask_2_graphics_214 = new cjs.Graphics().p("AxofOMAAAg+aMAjRAAAMgM5A+ag");
	var mask_2_graphics_215 = new cjs.Graphics().p("AugfOMAAAg+aIdBAAMgKnA+ag");
	var mask_2_graphics_216 = new cjs.Graphics().p("Au6fOMAAAg+aIXoAAMgIpA+ag");
	var mask_2_graphics_217 = new cjs.Graphics().p("AvUfOMAAAg+aITDAAMgG9A+ag");
	var mask_2_graphics_218 = new cjs.Graphics().p("AvqfOMAAAg+aIPVAAMgFnA+ag");
	var mask_2_graphics_219 = new cjs.Graphics().p("Av7fOMAAAg+aIMaAAMgEiA+ag");
	var mask_2_graphics_220 = new cjs.Graphics().p("AwIfOMAAAg+aIKWAAMgDyA+ag");
	var mask_2_graphics_221 = new cjs.Graphics().p("AwPfOMAAAg+aIJGAAMgDVA+ag");
	var mask_2_graphics_222 = new cjs.Graphics().p("AwRfOMAAAg+aIIrAAMgDLA+ag");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(137).to({graphics:mask_2_graphics_137,x:278.4,y:75.3}).wait(1).to({graphics:mask_2_graphics_138,x:227.8,y:75.3}).wait(1).to({graphics:mask_2_graphics_139,x:182,y:75.3}).wait(1).to({graphics:mask_2_graphics_140,x:141,y:75.3}).wait(1).to({graphics:mask_2_graphics_141,x:104.9,y:75.3}).wait(1).to({graphics:mask_2_graphics_142,x:73.5,y:75.3}).wait(1).to({graphics:mask_2_graphics_143,x:47,y:75.3}).wait(1).to({graphics:mask_2_graphics_144,x:25.4,y:75.3}).wait(1).to({graphics:mask_2_graphics_145,x:8.5,y:75.3}).wait(1).to({graphics:mask_2_graphics_146,x:-3.6,y:75.3}).wait(1).to({graphics:mask_2_graphics_147,x:-10.8,y:75.3}).wait(1).to({graphics:mask_2_graphics_148,x:-13.2,y:75.3}).wait(1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_2_graphics_211,x:39.3,y:75.3}).wait(1).to({graphics:mask_2_graphics_212,x:1.1,y:75.3}).wait(1).to({graphics:mask_2_graphics_213,x:-33.5,y:75.3}).wait(1).to({graphics:mask_2_graphics_214,x:-64.4,y:75.3}).wait(1).to({graphics:mask_2_graphics_215,x:-91.6,y:75.3}).wait(1).to({graphics:mask_2_graphics_216,x:-95.5,y:75.3}).wait(1).to({graphics:mask_2_graphics_217,x:-98.1,y:75.3}).wait(1).to({graphics:mask_2_graphics_218,x:-100.3,y:75.3}).wait(1).to({graphics:mask_2_graphics_219,x:-102,y:75.3}).wait(1).to({graphics:mask_2_graphics_220,x:-103.3,y:75.3}).wait(1).to({graphics:mask_2_graphics_221,x:-104,y:75.3}).wait(1).to({graphics:mask_2_graphics_222,x:-104.2,y:75.3}).wait(138));

	// pic2
	this.instance_5 = new lib.pic2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(52,-0.5,0.901,0.9,0,0,0,0.5,0.5);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(137).to({_off:false},0).to({_off:true},86).wait(137));

	// text2
	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgJAKQgFgFAAgFQAAgFAFgEQAEgFAFAAQAGAAAFAFQADADAAAGQAAAGgDAEQgFAFgGAAQgFAAgEgFg");
	this.shape_87.setTransform(-50.9,25.2,0.792,0.792);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgmAuIAAhZIAUAAIAAA0IA0g2IAFAAIAABZIgUAAIAAg0Ig0A2g");
	this.shape_88.setTransform(-57.1,22.6,0.792,0.792);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AAKAdQgDgXgWAAIgBAAIAAAmIgUAAIAAhXIAUAAIAAAhIABAAQAVAAADgTQACgPAPAAIAKABIAAAQIgFAAQgDAAgBAFQgEAQgSAFQATAEAFAUQABAFADAAIAEgBIAAARIgJABQgQAAgCgQg");
	this.shape_89.setTransform(-64.5,22.6,0.792,0.792);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgnA9IAAh4IAUAAIAAAGQAIgHALAAQAogBAAAvQAAAUgLALQgMAMgTAAQgIAAgJgEIAAAkgAgTgmIAAAtQAGAFAHAAQANAAAGgHQAGgGAAgOQAAgOgGgIQgGgGgNAAQgIAAgFAFg");
	this.shape_90.setTransform(-72,23.8,0.792,0.792);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgTAMgNQALgMASAAQAUAAALAMQALAMAAAUQAAAWgMALQgLAMgTAAQgTAAgLgMgAgOgUQgGAHAAANQAAAdAUAAQAJAAAGgIQAGgIAAgNQAAgcgVAAQgIAAgGAIg");
	this.shape_91.setTransform(-79.8,22.6,0.792,0.792);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgeAxQgMgOAAgYQAAgOADgNQADgMAGgHQAGgJAIgFQAKgGANgCIAcgFIAEASIgnAHIgKAFQgGACgEAIQgEAGgCALQAGgHAJgFQAIgFAHAAQARAAALALQALALAAATQgBASgKANQgLANgVAAQgTAAgLgOgAgPABQgFAHAAALQAAANAGAHQAGAHAJAAQAKABAGgIQAGgIAAgLQgBgNgGgGQgFgHgKAAQgIABgIAGg");
	this.shape_92.setTransform(-87.4,21.1,0.792,0.792);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AggArQAXAAAAgMQAAgJgGgPIgchDIAVAAIAXA8IAWg8IAVAAIgmBlQgEAJgJAFQgLAGgOAAg");
	this.shape_93.setTransform(-94.9,23.9,0.792,0.792);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgkAsIAAhWIAlgBQAPAAAJAGQAIAHAAALQAAAGgEAEQgCAEgHAEQARAFAAAQQAAALgJAGQgJAHgRAAgAgQAcIARABQAQAAAAgMQAAgGgFgDQgFgCgGAAIgRAAgAgQgbIAAATIAQAAQANAAAAgKQAAgEgDgDQgEgDgFAAg");
	this.shape_94.setTransform(-105.8,22.5,0.792,0.792);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgTALgNQAMgMASAAQAUAAALAMQALAMAAAUQAAAVgMAMQgLAMgTAAQgTAAgLgMgAgOgUQgGAIAAAMQAAAdAUAAQAKAAAFgIQAGgHAAgOQAAgcgVAAQgIAAgGAIg");
	this.shape_95.setTransform(-113.4,22.6,0.792,0.792);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AARAsIAAhFIghAAIAABFIgVAAIAAhXIBLAAIAABXg");
	this.shape_96.setTransform(-121,22.6,0.792,0.792);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgmAuIAAhZIAUAAIAAA0IAzg2IAGAAIAABZIgUAAIAAg0IgzA2g");
	this.shape_97.setTransform(-128.8,22.6,0.792,0.792);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgJAsIAAhFIgZAAIAAgSIBFAAIAAASIgZAAIAABFg");
	this.shape_98.setTransform(-136,22.6,0.792,0.792);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AAUArIgUgdIgUAdIgYAAIAigrIgggrIAYAAIASAcIATgcIAYAAIghAqIAjAsg");
	this.shape_99.setTransform(-33.5,7.9,0.792,0.792);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgeAiQgMgMAAgVQAAgTANgNQANgNARAAQASAAAMALQAMAMAAARIgCAKIg+AAQABALAHAGQAHAGAJAAQAOAAAIgIIAHAQQgKAIgWAAQgTAAgLgLgAgUgIIAqAAQgCgTgTAAQgQAAgFATg");
	this.shape_100.setTransform(-41,7.9,0.792,0.792);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgYAiQgMgLAAgWQAAgUAMgMQANgNAVAAQAQAAALAJIgJAPQgIgHgLAAQgKAAgHAHQgHAJAAAMQAAAcAZAAQALAAAJgIIAHAQQgIAGgHABIgQABQgTAAgLgLg");
	this.shape_101.setTransform(-48.3,7.9,0.792,0.792);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgkAsIAAhWIAlgBQAPAAAIAHQAJAGAAALQAAAFgEAGQgEAEgGACQASAGAAAPQAAAMgJAHQgIAGgSAAgAgQAcIARABQAQAAAAgMQAAgFgFgEQgFgDgGAAIgRAAgAgQgbIAAATIAQAAQANAAAAgKQAAgFgDgCQgDgDgGAAIgRABg");
	this.shape_102.setTransform(-55.1,7.9,0.792,0.792);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AglAsIAAgRIADAAQAEABABgFQABgHAFgFQAGgGAGgBQgVgEAAgSQAAgLAJgIQAIgHARAAIAkABIAABWIgUAAIAAghIgFAAQgWABgDATQgBAOgQAAIgIAAgAgIgZQgDADAAAFQAAAGAFADQAEAEAHAAIANABIAAgZIgQgBQgFAAgFAEg");
	this.shape_103.setTransform(-66.8,7.9,0.792,0.792);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgqAaQAJAAAFgGQAFgEAEgQQAEgSAAgTIAAgGIA6AAIAABWIgUAAIAAhGIgWAAQAAASgDAPQgDAPgGAJQgGAIgHADQgJADgJAAg");
	this.shape_104.setTransform(-74.5,8,0.792,0.792);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AAfA7IAAgfIg9AAIAAAfIgRAAIAAgvIAIAAQAJgMAFgOQAEgRAAgQIAAgLIA5AAIAABGIAMAAIAAAvgAgTAMIAkAAIAAg2IgVAAQgBAjgOATg");
	this.shape_105.setTransform(-82.3,9.1,0.792,0.792);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgmAtIAAhYIAUAAIAAA0IAzg2IAGAAIAABYIgUAAIAAgzIg0A1g");
	this.shape_106.setTransform(-94.4,7.9,0.792,0.792);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgqAaQAIAAAGgGQAFgEAEgQQAEgQAAgVIAAgGIA6AAIAABWIgUAAIAAhGIgWAAQgBAVgCAMQgEAQgFAIQgGAIgHADQgIADgKAAg");
	this.shape_107.setTransform(-102.6,8,0.792,0.792);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgeAiQgMgLAAgWQABgUAMgMQANgNAQAAQAUAAALALQALAMAAARIgBAKIg9AAQAAALAHAGQAGAGALAAQANAAAHgIIAJAQQgLAIgWAAQgTAAgLgLgAgUgIIAqAAQgCgTgTAAQgQAAgFATg");
	this.shape_108.setTransform(-110.1,7.9,0.792,0.792);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AAfA7IAAgfIg9AAIAAAfIgRAAIAAgvIAIAAQAJgMAFgOQAEgRAAgQIAAgLIA5AAIAABGIAMAAIAAAvgAgTAMIAkAAIAAg2IgVAAQgBAigOAUg");
	this.shape_109.setTransform(-118.1,9.1,0.792,0.792);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgTAMgMQALgNASAAQAUAAALAMQALANAAATQAAAVgMAMQgMAMgSAAQgSAAgMgMgAgOgUQgGAHAAANQAAAdAUAAQAJAAAGgIQAGgHgBgOQAAgbgUAAQgIAAgGAHg");
	this.shape_110.setTransform(-125.9,7.9,0.792,0.792);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgDAtIgWgsIgCgDIgBAAIgHAuIgUAAIARhYIAIAAIAeA9IAgg9IAHAAIARBYIgVAAIgHgpIgBgFIAAAAIgDAHIgVAog");
	this.shape_111.setTransform(-134.5,7.9,0.792,0.792);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgDAtIgWgsIgCgEIAAAAIgHAvIgVAAIARhYIAIAAIAfA9IAeg9IAIAAIARBYIgWAAIgGgqIAAgFIgBAAIgEAIIgUAog");
	this.shape_112.setTransform(-66.3,-6.7,0.792,0.792);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgeAiQgLgLgBgWQABgUAMgNQAMgMASAAQASAAAMALQALALAAASIgBAKIg+AAQABALAGAFQAIAGAJAAQAOAAAHgHIAIAQQgLAIgUAAQgUAAgLgLgAgUgIIAqAAQgDgTgSAAQgQAAgFATg");
	this.shape_113.setTransform(-74.8,-6.7,0.792,0.792);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AATAqQgDgDgCgEQgCAEgIADQgFADgIAAQgOAAgIgHQgIgHAAgNQAAgOALgIQALgJAVAAIAIABQAAgPgSAAQgMAAgHADIgFgPQAKgFAPAAQATAAAKAJQAJAKAAAYIAAASQAAARAHAFQgCADgEACIgHABQgEAAgEgDgAgSARQAAAMANAAQARAAAAgSIAAgIIgHgBQgXAAAAAPg");
	this.shape_114.setTransform(-82.2,-6.7,0.792,0.792);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgdAsIAAhXIA7AAIAAASIgnAAIAABFg");
	this.shape_115.setTransform(-88.6,-6.7,0.792,0.792);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AATAqQgDgDgCgEQgDAFgHACQgFADgIAAQgOAAgIgHQgIgHAAgNQAAgOALgIQALgJAVAAIAIABQAAgPgSAAQgMAAgIADIgEgPQAKgFAPAAQATAAAJAJQAKAJAAAZIAAASQAAASAHAEQgCADgEACIgHABQgFAAgDgDgAgTARQAAAMAOAAQARAAAAgSIAAgIIgIgBQgXAAAAAPg");
	this.shape_116.setTransform(-95.3,-6.7,0.792,0.792);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgqAaQAJAAAFgGQAFgFAEgPQAEgSAAgUIAAgFIA6AAIAABWIgUAAIAAhGIgWAAQAAAQgDARQgEAQgFAIQgGAIgHADQgHADgLAAg");
	this.shape_117.setTransform(-103.1,-6.7,0.792,0.792);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AAeA7IAAgeIg7AAIAAAeIgSAAIAAguIAIAAQAJgMAEgPQAFgPABgSIAAgLIA4AAIAABHIAMAAIAAAugAgTANIAkAAIAAg3IgVAAQgBAjgOAUg");
	this.shape_118.setTransform(-111,-5.5,0.792,0.792);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgeAiQgMgMAAgVQAAgUANgNQANgMAQAAQAUAAALALQAMALAAASIgCAKIg+AAQACALAGAFQAHAGAJAAQAPAAAHgHIAIAQQgMAIgVAAQgRAAgNgLgAgTgIIApAAQgCgTgTAAQgQAAgEATg");
	this.shape_119.setTransform(-118.9,-6.7,0.792,0.792);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgoA+IAAh5IAVAAIAAAGQAHgIAMAAQAoAAAAAuQAAAUgLANQgMALgSAAQgJAAgJgEIAAAlgAgTglIAAAtQAGAEAHAAQANAAAGgHQAGgHAAgOQABgOgHgHQgFgHgOAAQgHAAgGAHg");
	this.shape_120.setTransform(-126.4,-5.4,0.792,0.792);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AAWA8IAAhkIgrAAIAABkIgVAAIAAh3IBVAAIAAB3g");
	this.shape_121.setTransform(-134.8,-8,0.792,0.792);

	this.instance_6 = new lib.xxxc();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-70,15.4,0.72,0.72,0,0,0,113.2,77.9);

	var maskedShapeInstanceList = [this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87}]},137).to({state:[]},86).wait(137));

	// mask-in-out - копия: 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_211 = new cjs.Graphics().p("A9efOMAVkg+aMAlaAAAMAAAA+ag");
	var mask_3_graphics_212 = new cjs.Graphics().p("A8xfOMASag+aMAnJAAAMAAAA+ag");
	var mask_3_graphics_213 = new cjs.Graphics().p("A8HfOMAPig+aMAotAAAMAAAA+ag");
	var mask_3_graphics_214 = new cjs.Graphics().p("A7ifOMAM/g+aMAqGAAAMAAAA+ag");
	var mask_3_graphics_215 = new cjs.Graphics().p("A7BfOMAKug+aMArVAAAMAAAA+ag");
	var mask_3_graphics_216 = new cjs.Graphics().p("A6kfOMAIwg+aMAsZAAAMAAAA+ag");
	var mask_3_graphics_217 = new cjs.Graphics().p("A6MfOMAHGg+aMAtTAAAMAAAA+ag");
	var mask_3_graphics_218 = new cjs.Graphics().p("A55fOMAFwg+aMAuCAAAMAAAA+ag");
	var mask_3_graphics_219 = new cjs.Graphics().p("A5pfOMAEsg+aMAunAAAMAAAA+ag");
	var mask_3_graphics_220 = new cjs.Graphics().p("A5efOMAD8g+aMAvBAAAMAAAA+ag");
	var mask_3_graphics_221 = new cjs.Graphics().p("A5YfOMADfg+aMAvSAAAMAAAA+ag");
	var mask_3_graphics_222 = new cjs.Graphics().p("A5VfOMADVg+aMAvWAAAMAAAA+ag");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(211).to({graphics:mask_3_graphics_211,x:278.4,y:75.3}).wait(1).to({graphics:mask_3_graphics_212,x:227.8,y:75.3}).wait(1).to({graphics:mask_3_graphics_213,x:182,y:75.3}).wait(1).to({graphics:mask_3_graphics_214,x:141,y:75.3}).wait(1).to({graphics:mask_3_graphics_215,x:104.9,y:75.3}).wait(1).to({graphics:mask_3_graphics_216,x:73.5,y:75.3}).wait(1).to({graphics:mask_3_graphics_217,x:47,y:75.3}).wait(1).to({graphics:mask_3_graphics_218,x:25.4,y:75.3}).wait(1).to({graphics:mask_3_graphics_219,x:8.5,y:75.3}).wait(1).to({graphics:mask_3_graphics_220,x:-3.6,y:75.3}).wait(1).to({graphics:mask_3_graphics_221,x:-10.8,y:75.3}).wait(1).to({graphics:mask_3_graphics_222,x:-13.2,y:75.3}).wait(1).to({graphics:null,x:0,y:0}).wait(137));

	// text3
	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgJAKQgFgEAAgGQAAgFAFgFQAEgDAFAAQAHAAADADQAFAFAAAFQAAAGgFAEQgDAFgHAAQgFAAgEgFg");
	this.shape_122.setTransform(-71.3,25.5,0.792,0.792);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgeAiQgLgLAAgWQAAgUAMgNQANgMARAAQARgBANAMQALALAAASIgBAKIg+AAQABALAHAFQAGAGALABQANAAAHgIIAIAQQgLAIgUAAQgUAAgLgLgAgUgIIAqAAQgCgUgTAAQgRAAgEAUg");
	this.shape_123.setTransform(-77.4,22.9,0.792,0.792);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AASArIAAglIgjAAIAAAlIgVAAIAAhVIAVAAIAAAgIAjAAIAAggIAVAAIAABVg");
	this.shape_124.setTransform(-85.2,22.9,0.792,0.792);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgmBDIAAhXIAUAAIAAAzIA0g1IAFAAIAABXIgUAAIAAg0Ig0A2gAgRgsQgJgHgBgMIARgEQACAQAKgBQANAAABgOIAQADQgCAMgJAHQgHAGgMAAQgMAAgHgGg");
	this.shape_125.setTransform(-93,21.1,0.792,0.792);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AATAqQgDgDgCgEQgDAFgHACQgFAEgIgBQgOAAgIgHQgIgGAAgNQAAgPALgIQALgJAVAAIAIABQAAgQgSAAQgLAAgJAFIgEgQQAKgGAPABQATgBAJAKQAKAJAAAZIAAASQAAASAHAEQgDAFgDAAQgDABgEAAQgDAAgFgDgAgTARQAAAMAOAAQARAAAAgSIAAgIIgIgBQgXAAAAAPg");
	this.shape_126.setTransform(-100.5,22.9,0.792,0.792);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgiAkIAKgQQAKAJAOAAQAOAAAAgLQAAgMgQAAIgMAAIAAgPIAOABQAMAAAAgKQAAgFgDgCQgEgDgFAAQgLAAgMAHIgGgQQAPgIAPABQANAAAKAGQAIAHAAALQAAAPgOAEQAHABAFAGQAFAFAAAHQAAANgJAHQgMAHgPAAQgUAAgNgJg");
	this.shape_127.setTransform(-107.4,22.9,0.792,0.792);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgmAtIAAhXIAUAAIAAAzIAzg1IAGAAIAABXIgUAAIAAgzIg0A1g");
	this.shape_128.setTransform(-114.4,22.9,0.792,0.792);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AAfA7IAAgfIg8AAIAAAfIgSAAIAAgvIAIAAQAIgKAGgQQAEgRABgQIAAgLIA4AAIAABGIAMAAIAAAvgAgTAMIAkAAIAAg2IgUAAQgCAigOAUg");
	this.shape_129.setTransform(-122.5,24.1,0.792,0.792);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgmAtIAAhXIAUAAIAAAzIA0g1IAFAAIAABXIgUAAIAAgzIgzA1g");
	this.shape_130.setTransform(-134.6,22.9,0.792,0.792);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AAUAsIgUgeIgUAeIgYAAIAigsIgggrIAYAAIASAcIAUgcIAWAAIgfAqIAiAtg");
	this.shape_131.setTransform(-50,8.3,0.792,0.792);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AglAsIAAgRIADABQAEAAABgFQABgGAFgGQAFgFAHgCQgVgEAAgSQAAgLAIgHQAJgIARAAIAkACIAABWIgUAAIAAghIgFAAQgWAAgDATQgCAPgPAAgAgIgZQgDAEAAAFQAAAFAFAEQAFADAGAAIANAAIAAgYIgQAAQgGAAgEADg");
	this.shape_132.setTransform(-57.6,8.3,0.792,0.792);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgmAuIAAhZIAVAAIAAA0IAzg2IAFAAIAABZIgUAAIAAg0Ig0A2g");
	this.shape_133.setTransform(-65,8.3,0.792,0.792);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgdAsIAAhXIA7AAIAAASIgnAAIAABFg");
	this.shape_134.setTransform(-71.8,8.3,0.792,0.792);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgTAMgNQALgMASAAQAUAAALAMQALANAAATQAAAWgLALQgMAMgTAAQgTAAgLgMgAgOgUQgGAHAAANQAAAdAUAAQAJAAAGgIQAGgIAAgNQAAgcgVAAQgIAAgGAIg");
	this.shape_135.setTransform(-78.9,8.3,0.792,0.792);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgqAaQAJAAAFgGQAFgFAEgPQAEgSAAgUIAAgFIA6AAIAABWIgUAAIAAhGIgWAAQAAAQgDARQgEAQgFAIQgHAJgGACQgHADgLAAg");
	this.shape_136.setTransform(-86.9,8.3,0.792,0.792);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgTAMgNQAKgMATAAQAUAAALAMQALANAAATQAAAVgLAMQgNAMgSAAQgTAAgLgMgAgOgUQgGAHAAANQAAAdAUAAQAJAAAGgIQAGgIAAgNQgBgcgUAAQgJAAgFAIg");
	this.shape_137.setTransform(-94.3,8.3,0.792,0.792);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AASAsIAAgmIgjAAIAAAmIgVAAIAAhXIAVAAIAAAhIAjAAIAAghIAVAAIAABXg");
	this.shape_138.setTransform(-102,8.3,0.792,0.792);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AAVAsIgVgeIgUAeIgYAAIAigsIgfgrIAXAAIASAcIAUgcIAXAAIghAqIAjAtg");
	this.shape_139.setTransform(-109.6,8.3,0.792,0.792);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgeAiQgMgLABgWQgBgUANgNQAMgMARAAQAUAAALALQALALAAASIgBAKIg9AAQAAALAHAFQAGAGALAAQANAAAIgHIAIAQQgMAIgVAAQgSAAgMgLgAgTgIIApAAQgDgTgSAAQgRAAgDATg");
	this.shape_140.setTransform(-117.1,8.3,0.792,0.792);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgJAsIAAhFIgZAAIAAgSIBFAAIAAASIgZAAIAABFg");
	this.shape_141.setTransform(-124.1,8.3,0.792,0.792);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgkAsIAAhWIAmgBQAOAAAJAGQAIAHAAALQAAAFgDAFQgDAFgHADQARAFAAAQQAAAMgJAFQgJAHgQAAgAgQAcIARABQAQAAAAgMQAAgGgFgDQgFgCgGAAIgRAAgAgQgbIAAATIAQAAQAOAAAAgKQAAgEgEgDQgDgDgGAAg");
	this.shape_142.setTransform(-134.8,8.2,0.792,0.792);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AAfArIAAhWIAUAAIAABWgAgyArIAAhWIATAAIAAAfIAQAAQAPAAAJAHQAJAHAAAOQAAAbghAAgAgfADIAAAYIAOABQAJAAADgDQAEgFAAgFQAAgFgEgEQgEgEgIAAg");
	this.shape_143.setTransform(-44.9,-6.4,0.792,0.792);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AAfA7IAAgfIg9AAIAAAfIgRAAIAAgvIAIAAQAJgMAFgPQAFgRAAgPIAAgLIA4AAIAABGIAMAAIAAAvgAgTAMIAkAAIAAg2IgVAAQgBAjgOATg");
	this.shape_144.setTransform(-54,-5.2,0.792,0.792);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AASArIAAglIgjAAIAAAlIgVAAIAAhWIAVAAIAAAiIAjAAIAAgiIAVAAIAABWg");
	this.shape_145.setTransform(-62,-6.4,0.792,0.792);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgeAiQgMgMABgVQgBgUANgMQANgNARAAQASAAAMALQAMALAAASIgCAKIg9AAQABALAGAGQAGAFALAAQAOAAAHgHIAIAQQgLAIgWAAQgSAAgMgLgAgUgIIAqAAQgCgTgTAAQgQAAgFATg");
	this.shape_146.setTransform(-69.7,-6.4,0.792,0.792);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgnA+IAAh5IAUAAIAAAGQAIgIALAAQApAAAAAuQAAAVgMALQgLAMgUAAQgKAAgHgEIAAAlgAgTgmIAAAtQAFAFAIAAQANAAAGgHQAHgFgBgPQAAgPgFgHQgHgGgNAAQgHAAgGAFg");
	this.shape_147.setTransform(-77.2,-5.1,0.792,0.792);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgJArIAAhFIgZAAIAAgRIBFAAIAAARIgZAAIAABFg");
	this.shape_148.setTransform(-84.5,-6.4,0.792,0.792);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgDAtIgYgvIgBAAIgHAuIgUAAIARhYIAIAAIAeA9IAgg9IAHAAIAQBYIgUAAIgHgpIgBgFIgBAAIgCAHIgVAog");
	this.shape_149.setTransform(-96.4,-6.4,0.792,0.792);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AgeAiQgMgLAAgWQABgUAMgMQANgNAQAAQAUAAALALQALAMAAARIgBAKIg9AAQAAAKAHAHQAFAFAMAAQAOAAAGgHIAJAQQgLAIgWAAQgSAAgMgLgAgUgIIAqAAQgCgTgTAAQgQAAgFATg");
	this.shape_150.setTransform(-105,-6.4,0.792,0.792);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AATAqQgDgDgCgEQgCAEgHAEQgIACgGAAQgPAAgHgHQgIgGAAgOQAAgOALgIQAMgJAUAAIAIABQAAgPgSAAQgLAAgIAEIgFgQQALgFAOAAQAUAAAJAJQAJAJAAAZIAAASQAAASAHAEQgDAEgCABIgIABQgEAAgEgDgAgSARQAAAMANAAQASAAAAgSIAAgIIgIgBQgXAAAAAPg");
	this.shape_151.setTransform(-112.3,-6.4,0.792,0.792);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AAfA7IAAgfIg8AAIAAAfIgSAAIAAgvIAJAAQAIgMAFgPQAFgPAAgRIAAgLIA4AAIAABGIAMAAIAAAvgAgTAMIAkAAIAAg2IgUAAQgCAigOAUg");
	this.shape_152.setTransform(-120,-5.2,0.792,0.792);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AAUAqQgDgCgCgFQgDAFgHADQgIACgFAAQgPAAgIgHQgIgHAAgNQAAgNALgJQAMgJAUAAIAJABQAAgPgTAAQgKAAgJAEIgFgQQALgFAOAAQAUAAAJAJQAJAJAAAZIAAASQAAASAHAEQgDAFgCAAIgIABQgEAAgDgDgAgSARQAAAMANAAQASAAAAgSIAAgIIgIgBQgXAAAAAPg");
	this.shape_153.setTransform(-127.6,-6.4,0.792,0.792);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgoA1IAJgTQAOAKAOAAQAKAAAGgFQAGgFAAgJQAAgKgHgGQgIgGgLAAIgMABIAAgQIAMAAQAKAAAGgEQAGgFAAgIQAAgGgFgEQgGgEgHAAQgLAAgNAIIgIgSQASgIAQAAQAQAAALAIQAKAJAAAOQAAAJgEAHQgFAHgHADQALAEAEAGQAGAHAAAMQAAARgMAKQgMAKgVAAQgVAAgPgJg");
	this.shape_154.setTransform(-135,-7.7,0.792,0.792);

	this.instance_7 = new lib.xxxc();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-81.9,15.6,0.72,0.72,0,0,0,113.1,78);

	var maskedShapeInstanceList = [this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128,this.shape_129,this.shape_130,this.shape_131,this.shape_132,this.shape_133,this.shape_134,this.shape_135,this.shape_136,this.shape_137,this.shape_138,this.shape_139,this.shape_140,this.shape_141,this.shape_142,this.shape_143,this.shape_144,this.shape_145,this.shape_146,this.shape_147,this.shape_148,this.shape_149,this.shape_150,this.shape_151,this.shape_152,this.shape_153,this.shape_154,this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122}]},211).to({state:[]},87).wait(62));

	// pic3
	this.instance_8 = new lib.eeer();
	this.instance_8.parent = this;
	this.instance_8.setTransform(77.1,0.1,0.625,0.625,0,0,0,120.1,83.5);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(211).to({_off:false},0).to({_off:true},87).wait(62));

	// bg
	this.instance_9 = new lib.bg();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,0,1,1,0,0,0,150,125);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(360));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159.5,-133.8,309.6,258.9);


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
p.nominalBounds = new cjs.Rectangle(66.6,77,1198.8,438);
// library properties:
lib.properties = {
	width: 400,
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