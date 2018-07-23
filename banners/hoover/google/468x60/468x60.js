(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"468x60_atlas_P_", frames: [[0,229,100,73],[0,0,150,136],[152,0,50,225],[0,138,150,89]]},
		{name:"468x60_atlas_NP_", frames: [[0,0,554,368],[556,0,160,224],[556,226,220,153]]}
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
	this.spriteSheet = ss["468x60_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hoov2 = function() {
	this.spriteSheet = ss["468x60_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pic0 = function() {
	this.spriteSheet = ss["468x60_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.pic1 = function() {
	this.spriteSheet = ss["468x60_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.pic2a = function() {
	this.spriteSheet = ss["468x60_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.pic2b = function() {
	this.spriteSheet = ss["468x60_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.pic3 = function() {
	this.spriteSheet = ss["468x60_atlas_NP_"];
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


(lib.pic2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hoov2();
	this.instance.parent = this;
	this.instance.setTransform(52,-48,0.74,0.74);

	this.instance_1 = new lib.pic2a();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-97,-64,0.37,0.369);

	this.instance_2 = new lib.pic2b();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-61,-52,0.708,0.708);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic2, new cjs.Rectangle(-97,-64,223,83), null);


(lib.pic1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsmSAMAAEgj/IZKAAMgAGAj/g");
	mask.setTransform(0.3,-12.2);

	// Слой 1
	this.instance = new lib.pic1();
	this.instance.parent = this;
	this.instance.setTransform(-80,-121);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic1_1, new cjs.Rectangle(-80,-121,160,224), null);


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
	this.shape.setTransform(503.7,-303.4,0.831,0.831);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAfAzIAAhlIASAAIAABlgAgxAzIAAhlIASAAIAAAmIANgBQASAAAJAJQAJAHAAAQQAAAOgJAKQgJAIgTAAgAgfACIAAAiIAJAAQANAAAGgFQADgFAAgIQAAgIgEgFQgGgEgLAAg");
	this.shape_1.setTransform(494.1,-303.5,0.831,0.831);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAVAzIAAguIgoAAIAAAuIgTAAIAAhlIATAAIAAAoIAoAAIAAgoIASAAIAABlg");
	this.shape_2.setTransform(485,-303.5,0.831,0.831);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAUAzIAAguIgnAAIAAAuIgSAAIAAhlIASAAIAAAoIAnAAIAAgoIASAAIAABlg");
	this.shape_3.setTransform(476.9,-303.5,0.831,0.831);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghAmQgLgOAAgYQAAgVAMgQQAMgPAUAAQAVAAAMANQAMAPAAAYQAAAYgMAOQgNAPgVAAQgVAAgLgPgAgSgaQgHAJAAARQAAASAGAKQAGAJAMAAQAMAAAIgKQAHgJAAgSQAAgkgaAAQgMAAgGAKg");
	this.shape_4.setTransform(468.7,-303.5,0.831,0.831);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgnA1IAAhnIASAAIAABDIA1hFIAIAAIAABnIgTAAIAAhEIg0BGg");
	this.shape_5.setTransform(460.3,-303.5,0.831,0.831);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAaBCIAAgeIhDAAIAAhlIASAAIAABWIAjAAIAAhWIASAAIAABWIAMAAIAAAtg");
	this.shape_6.setTransform(452.4,-302.3,0.831,0.831);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAZA0IgIgVIgiAAIgHAVIgUAAIAphnIAHAAIApBngAgLARIAXAAIgMgkg");
	this.shape_7.setTransform(444.3,-303.5,0.831,0.831);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgiA0IAAhmIAdgBQAQAAAIAHQAKAHgBAMQAAANgNAHQATAGAAAUQAAAOgKAIQgKAJgRAAgAgQAlIAKAAQAJAAAHgEQAGgEgBgKQAAgJgEgEQgGgEgLAAIgKAAgAgQgjIAAAYIAKAAQAQAAAAgNQAAgMgPAAg");
	this.shape_8.setTransform(437.1,-303.5,0.831,0.831);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AghAmQgLgOAAgYQAAgVAMgQQAMgPAUAAQAWAAALANQAMAOAAAZQAAAYgNAOQgMAPgVAAQgVAAgLgPgAgTgaQgGAKAAAQQAAASAGAKQAGAJAMAAQAMAAAIgKQAHgJAAgSQAAgkgaAAQgMAAgHAKg");
	this.shape_9.setTransform(429.2,-303.5,0.831,0.831);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAVAzIAAguIgoAAIAAAuIgSAAIAAhlIASAAIAAAoIAoAAIAAgoIARAAIAABlg");
	this.shape_10.setTransform(420.9,-303.5,0.831,0.831);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAUAzIAAguIgoAAIAAAuIgSAAIAAhlIASAAIAAAoIAoAAIAAgoIATAAIAABlg");
	this.shape_11.setTransform(412.8,-303.5,0.831,0.831);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgnA1IAAhnIASAAIAABDIA1hFIAIAAIAABnIgTAAIAAhEIg0BGg");
	this.shape_12.setTransform(404.6,-303.5,0.831,0.831);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAVAzIAAguIgoAAIAAAuIgSAAIAAhlIASAAIAAAoIAoAAIAAgoIARAAIAABlg");
	this.shape_13.setTransform(392.7,-303.5,0.831,0.831);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AggAzIAAhlIBBAAIAAAQIgvAAIAAAYIAhAAIAAAPIghAAIAAAeIAuAAIAAAQg");
	this.shape_14.setTransform(385.4,-303.5,0.831,0.831);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAiBCIAAgeIhDAAIAAAeIgQAAIAAgtIAHAAQAIgJAJgUQAJgUAIglIAuAAIAABWIALAAIAAAtgAgHgJQgIAUgIAKIAsAAIAAhHIgSAAQgDAWgHATg");
	this.shape_15.setTransform(377.5,-302.3,0.831,0.831);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AApAvQgEgFgCgKQgEgcgWAAIAAAvIgQAAIAAgvQgXAAgEAcQgCALgEAEQgFAFgIAAIgGgBIAAgQIACAAQAEAAABgBIADgIQABgKAGgHQAGgIAKgDQgTgDgEgVIgCgHQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAIgDAAIAAgQIAGgBQAJAAAEAEQAEAGACAKQAEAVAWABIAAgpIAQAAIAAApQAKAAAHgGQAHgGACgKQABgKAEgFQAFgFAIAAIAGABIAAAQIgCAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAIgCAHQgCAIgGAHQgEAGgKADQASAFAFAXQAAAGACACQACABADAAIACAAIAAAQIgFABQgJAAgFgFg");
	this.shape_16.setTransform(367.6,-303.5,0.831,0.831);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AghAmQgLgOAAgYQAAgVAMgQQAMgPAUAAQAVAAAMANQAMAPAAAYQAAAYgMAOQgNAPgVAAQgVAAgLgPgAgSgaQgHAJAAARQAAASAGAKQAGAJAMAAQAMAAAIgKQAHgJAAgSQAAgkgaAAQgMAAgGAKg");
	this.shape_17.setTransform(357.9,-303.5,0.831,0.831);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AghA0IAAhmIAVgBQAXAAAMAIQALAHAAAQQAAAigpAAIgHAAIAAAmgAgOgBIAHAAQALAAAGgEQAFgEAAgKQABgPgZAAIgFAAg");
	this.shape_18.setTransform(350.4,-303.5,0.831,0.831);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhKCtIBclZIA5AAIhbFZg");
	this.shape_19.setTransform(525.6,-321.4,1.003,1.003);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CB0927").s().p("AhLB7IBCj1IBVAAIhCD1g");
	this.shape_20.setTransform(523.4,-297.9,1.003,1.003);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D1D1D1").s().p("Ah3DfIA3jHIBVAAIBCj2IAhAAIh4G9g");
	this.shape_21.setTransform(522.3,-287.9,1.003,1.003);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#DC052B").s().p("AzKDiIBjnDMAkyAABIh5HCg");
	this.shape_22.setTransform(432.5,-304.2,0.831,0.831);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ghggg, new cjs.Rectangle(330.6,-338.6,203.9,73.1), null);


(lib.eeer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AyvOZIAA8wMAlfAAAIAAcwg");
	mask.setTransform(120,92.1);

	// Слой 1
	this.instance = new lib.pic3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.091,1.091);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.eeer, new cjs.Rectangle(0,0.1,240,166.9), null);


(lib.dfgdfggg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTAlQgHgHgBgKIAKgCQACAJAFAEQAEAEAGAAQAHAAAFgFQAFgFAAgIQAAgHgFgFQgFgFgHAAIgGACIABgJIABAAQAGAAAGgDQAFgEAAgHQAAgGgEgEQgEgDgFAAQgGAAgEAEQgEADgCAIIgKgCQACgKAHgGQAGgGALAAQAGAAAGADQAGADADAFQADAFAAAGQAAAGgDAEQgDAFgGADQAIABAEAFQAEAGAAAIQAAALgIAIQgIAIgMAAQgLAAgIgHg");
	this.shape.setTransform(221.6,-311.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgTAkQgIgGgBgLIALgBQACAIAEAFQAEADAHAAQAGABAGgHQAFgFAAgJQAAgKgFgEQgFgFgHAAQgFAAgFACQgDACgCADIgLgBIAIgrIAqAAIAAAKIghAAIgEAXQAHgGAIAAQALABAIAHQAHAHABANQgBALgGAJQgJAKgNAAQgMAAgHgHg");
	this.shape_1.setTransform(215,-311.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAIArIAAgVIglAAIAAgJIAmg3IAJAAIAAA3IAMAAIAAAJIgMAAIAAAVgAgSANIAaAAIAAgmg");
	this.shape_2.setTransform(208.1,-311.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgTAjQgIgLAAgYQAAgOADgKQADgJAHgFQAFgFAJAAQAHAAAFADQAGADADAFQADAFACAIQACAHAAAMQAAAPgDAJQgDAKgHAFQgFAFgKAAQgLAAgIgJgAgLgcQgFAIAAAUQAAAVAFAHQAEAHAHAAQAHAAAFgHQAFgHAAgVQAAgUgFgHQgFgHgHAAQgGAAgFAGg");
	this.shape_3.setTransform(201.6,-311.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgPArQABgKADgPQAEgPAHgMQAGgNAIgJIgpAAIAAgLIA3AAIAAAJQgJAIgHAPQgJAOgDAPQgDAKgBAOg");
	this.shape_4.setTransform(195,-311.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgSAjQgJgLAAgYQAAgOADgKQADgJAGgFQAHgFAIAAQAHAAAFADQAFADADAFQAEAFACAIQACAHAAAMQAAAPgDAJQgDAKgGAFQgHAFgJAAQgLAAgHgJgAgKgcQgGAIAAAUQAAAVAFAHQAFAHAGAAQAHAAAFgHQAFgHAAgVQAAgUgFgHQgFgHgHAAQgHAAgDAGg");
	this.shape_5.setTransform(188.3,-311.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgTAiQgIgKAAgWQAAgYAJgLQAIgKANAAQAKAAAGAGQAHAFABAKIgLABQgBgGgDgDQgEgEgGAAQgEAAgEACQgFAEgDAHQgDAHAAANQAEgGAGgDQAFgCAFAAQALAAAHAHQAHAHAAAMQAAAIgDAHQgDAHgHAEQgGAEgHAAQgNAAgIgKgAgKABQgFAFAAAIQAAAGACAFQADAFAEACQAEADADAAQAHAAAFgFQAFgGAAgJQAAgJgFgFQgFgEgHAAQgGAAgFAEg");
	this.shape_6.setTransform(181.5,-311.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgSAmQgGgFgCgLIAKgBQACAIADADQAEADAGAAQAEAAADgCQAEgCACgEQADgEABgGIACgNIAAgCQgEAFgFADQgFADgGAAQgLAAgHgIQgHgGAAgNQAAgNAHgIQAIgIAMAAQAHAAAHAFQAHAEAEAIQADAJAAAQQAAAPgDAKQgEAKgHAFQgHAFgJAAQgKAAgGgGgAgLgdQgFAGAAAJQAAAJAFAFQAEAEAHAAQAHAAAFgEQAEgFAAgKQAAgJgEgFQgFgFgHAAQgGAAgFAFg");
	this.shape_7.setTransform(174.9,-311.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgPArQABgKADgPQAEgPAHgMQAGgNAIgJIgpAAIAAgLIA3AAIAAAJQgIAIgJAPQgHAOgEAPQgDAKgBAOg");
	this.shape_8.setTransform(168.3,-311.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgPArQABgKADgPQAEgPAHgMQAGgNAIgJIgpAAIAAgLIA3AAIAAAJQgIAIgJAPQgHAOgEAPQgDAKgBAOg");
	this.shape_9.setTransform(161.6,-311.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAIArIAAgVIglAAIAAgJIAmg3IAJAAIAAA3IAMAAIAAAJIgMAAIAAAVgAgSANIAaAAIAAgmg");
	this.shape_10.setTransform(154.7,-311.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgSAjQgJgLAAgYQAAgOADgKQADgJAGgFQAHgFAIAAQAHAAAFADQAFADADAFQAEAFACAIQACAHAAAMQAAAPgDAJQgDAKgGAFQgHAFgJAAQgLAAgHgJgAgKgcQgGAIAAAUQAAAVAFAHQAFAHAGAAQAHAAAFgHQAFgHAAgVQAAgUgFgHQgFgHgHAAQgHAAgDAGg");
	this.shape_11.setTransform(148.2,-311.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAFArIAAhCQgDAEgGADIgLAFIAAgKQAJgEAGgGQAGgFADgGIAHAAIAABVg");
	this.shape_12.setTransform(141.1,-311.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAWArIAAgoIgrAAIAAAoIgMAAIAAhVIAMAAIAAAkIArAAIAAgkIAMAAIAABVg");
	this.shape_13.setTransform(130.5,-311.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AggArIAAhVIAgAAIAMABQAHABAEADQAEADADAFQADAGAAAGQAAALgHAHQgHAHgTAAIgVAAIAAAjgAgVgBIAWAAQALAAAEgEQAFgFAAgGQAAgGgDgEQgDgEgEgBQgDgBgIAAIgVAAg");
	this.shape_14.setTransform(122.4,-311.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgbArIAAhVIA3AAIAAAKIgrAAIAABLg");
	this.shape_15.setTransform(115.4,-311.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgVAnQgKgHgEgKQgFgKAAgLQAAgUAMgMQALgMARAAQAMAAAJAFQAKAGAFAKQAFAKAAAMQAAANgFAKQgFALgLAFQgJAGgLgBQgLAAgKgFgAgUgZQgJAIABATQgBAPAJAJQAIAJAMgBQAMAAAJgJQAIgIAAgRQAAgJgDgIQgEgIgGgFQgIgDgIAAQgLAAgJAIg");
	this.shape_16.setTransform(107.1,-311.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgTAkQgIgGgBgLIALgBQACAIAEAFQAEADAHAAQAGABAGgHQAFgFAAgJQAAgKgFgEQgFgFgHAAQgFAAgFACQgDACgCADIgLgBIAIgrIAqAAIAAAKIghAAIgEAXQAHgGAIAAQALABAIAHQAHAHABANQgBALgGAJQgJAKgNAAQgMAAgHgHg");
	this.shape_17.setTransform(95.8,-311.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAFArIAAhCQgDAEgGADIgLAFIAAgKQAJgEAGgGQAGgFADgGIAHAAIAABVg");
	this.shape_18.setTransform(88.6,-311.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgTAjQgIgLAAgYQAAgOADgKQADgJAHgFQAFgFAJAAQAHAAAFADQAGADADAFQADAFACAIQACAHAAAMQAAAPgDAJQgDAKgHAFQgFAFgKAAQgLAAgIgJgAgLgcQgFAIAAAUQAAAVAFAHQAEAHAHAAQAHAAAFgHQAFgHAAgVQAAgUgFgHQgFgHgHAAQgGAAgFAGg");
	this.shape_19.setTransform(82.4,-311.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgbArQgBgEACgEQACgFAFgGQAFgFAIgIQANgLAFgGQAGgGAAgHQgBgGgEgEQgEgFgIABQgGgBgFAFQgEAEgBAJIgKgCQABgLAHgHQAHgGALAAQANAAAHAGQAHAIAAAJQABAGgDAEQgCAGgFAEQgFAGgLAJIgLALIgFAGIApAAIAAAKg");
	this.shape_20.setTransform(75.6,-311.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAFArIAAhCQgDAEgGADIgLAFIAAgKQAJgEAGgGQAGgFADgGIAHAAIAABVg");
	this.shape_21.setTransform(68.6,-311.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgTAkQgIgGgBgLIALgBQACAIAFAFQADADAHAAQAGABAGgHQAFgFAAgJQAAgKgFgEQgFgFgHAAQgFAAgFACQgDACgDADIgKgBIAIgrIAqAAIAAAKIghAAIgEAXQAHgGAHAAQAMABAIAHQAHAHAAANQAAALgGAJQgJAKgNAAQgMAAgHgHg");
	this.shape_22.setTransform(62.4,-311.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAIArIAAgVIglAAIAAgJIAmg3IAJAAIAAA3IAMAAIAAAJIgMAAIAAAVgAgSANIAaAAIAAgmg");
	this.shape_23.setTransform(55.5,-311.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgTAjQgIgLAAgYQAAgOADgKQADgJAHgFQAFgFAJAAQAHAAAFADQAFADAEAFQADAFACAIQACAHAAAMQAAAPgDAJQgDAKgHAFQgFAFgKAAQgLAAgIgJgAgLgcQgFAIAAAUQAAAVAFAHQAEAHAHAAQAHAAAFgHQAFgHAAgVQAAgUgFgHQgFgHgHAAQgHAAgEAGg");
	this.shape_24.setTransform(49,-311.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgPArQABgKADgPQAEgPAHgMQAGgNAIgJIgpAAIAAgLIA3AAIAAAJQgIAIgJAPQgHAOgEAPQgDAKgBAOg");
	this.shape_25.setTransform(42.4,-311.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgPArQABgKADgPQAEgPAHgMQAGgNAIgJIgpAAIAAgLIA3AAIAAAJQgJAIgHAPQgJAOgDAPQgDAKgBAOg");
	this.shape_26.setTransform(35.7,-311.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAWArIAAgoIgrAAIAAAoIgMAAIAAhVIAMAAIAAAkIArAAIAAgkIAMAAIAABVg");
	this.shape_27.setTransform(24.6,-311.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAWArIAAgoIgrAAIAAAoIgMAAIAAhVIAMAAIAAAkIArAAIAAgkIAMAAIAABVg");
	this.shape_28.setTransform(15.9,-311.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAXArIAAhDIgsBDIgMAAIAAhVIAKAAIAABDIAthDIAMAAIAABVg");
	this.shape_29.setTransform(7.3,-311.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_30.setTransform(159.1,-320);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgUAkQgHgHAAgMQAAgIAEgGQAEgEAIgCQgHgDgDgEQgDgFAAgGQAAgJAHgHQAHgGAKAAQALAAAHAHQAHAGAAAJQAAAGgDAFQgEAEgGADQAIACAEAFQAEAGAAAIQAAALgIAHQgHAIgNAAQgMAAgIgIgAgMAFQgFAFAAAHQAAAFADAEQACAEAEADQAEACAEAAQAIAAAFgFQAEgFAAgHQAAgIgFgFQgFgFgHAAQgHAAgFAFgAgJgeQgEADAAAGQAAAGAEAEQAEAEAFAAQAGAAAEgEQAEgEAAgGQAAgFgEgEQgEgEgGAAQgFAAgEAEg");
	this.shape_31.setTransform(154,-323.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_32.setTransform(145.8,-320);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAYAoIAAgSIgwAAIAAASIgIAAIAAgaIAFAAQALgPAAgmIAqAAIAAA1IAHAAIAAAagAgRAOIAhAAIAAgsIgXAAQgBAegJAOg");
	this.shape_33.setTransform(140.4,-321.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgFAKQADgCACgDQAAgCAAgFIgFAAIAAgLIALAAIAAALQAAAGgCAEQgCAEgEACg");
	this.shape_34.setTransform(132.1,-319.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAPArIAAguIgcAuIgMAAIAAg9IALAAIAAAuIAcguIALAAIAAA9gAgKgfQgEgEgCgHIAIAAQABAEACACQACACADAAQAFAAADgBQACgCABgFIAHAAQAAAHgFAEQgFAFgHAAQgHAAgEgFg");
	this.shape_35.setTransform(127.2,-323.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgPAFIAAgJIAfAAIAAAJg");
	this.shape_36.setTransform(121.9,-322.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgcArQABgEABgDQACgGAFgFQAEgHAKgHQAMgLAGgGQAEgHAAgFQABgHgFgEQgEgEgIgBQgGABgFAEQgFAEABAJIgMgBQABgMAIgHQAIgGAKAAQANAAAHAHQAIAGgBALQAAAFgCAFQgCAEgFAFQgEAGgMAKIgMAKIgDAGIAoAAIAAAKg");
	this.shape_37.setTransform(116.4,-323.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAPArIAAguIgcAuIgLAAIAAg9IAKAAIAAAuIAcguIALAAIAAA9gAgKgfQgFgEAAgHIAHAAQABAEACACQACACADAAQAGAAACgBQACgCABgFIAHAAQAAAHgFAEQgEAFgIAAQgHAAgEgFg");
	this.shape_38.setTransform(106.6,-323.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAPAfIAAguIgcAuIgMAAIAAg9IALAAIAAAuIAcguIAMAAIAAA9g");
	this.shape_39.setTransform(99.9,-322.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AALAfIgLgUIgFgHQgDgCgDAAIAAAdIgLAAIAAg9IALAAIAAAbQAFAAACgDQACgBADgKQADgHACgCIAEgDIAIgBIACAAIAAAJIgDAAQgEAAgBABIgEAIIgEAIIgFAEQAGABAGAKIAMAUg");
	this.shape_40.setTransform(94.3,-322.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgSAYQgIgIAAgQQAAgJADgIQAEgHAGgEQAHgDAHAAQAKAAAHAEQAGAGACAJIgKACQgCgHgDgDQgEgDgFAAQgHAAgFAGQgFAFAAAMQAAAMAFAGQAEAFAHABQAGgBAEgDQAFgEABgIIAKABQgCAMgHAFQgHAHgKAAQgMAAgHgJg");
	this.shape_41.setTransform(88.4,-322.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAOAfIAAgbIgcAAIAAAbIgKAAIAAg9IAKAAIAAAaIAcAAIAAgaIALAAIAAA9g");
	this.shape_42.setTransform(82,-322.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAPAfIAAguIgcAuIgLAAIAAg9IAKAAIAAAuIAcguIAMAAIAAA9g");
	this.shape_43.setTransform(75.4,-322.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAiAoIAAgSIhMAAIAAg9IAKAAIAAA1IAYAAIAAg1IAKAAIAAA1IAYAAIAAg1IAKAAIAAA1IAHAAIAAAag");
	this.shape_44.setTransform(67.3,-321.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALAAQANgBAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_45.setTransform(58.7,-322.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AggArIAAhVIAgAAIAMABQAHABAEADQAEADADAFQADAFAAAHQAAALgHAHQgHAHgTAAIgVAAIAAAjgAgVgBIAWAAQALAAAEgEQAFgFAAgGQAAgGgDgEQgDgEgEgBQgDgBgIAAIgVAAg");
	this.shape_46.setTransform(51.6,-323.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAYAoIAAgSIgwAAIAAASIgIAAIAAgaIAFAAQALgPAAgmIAqAAIAAA1IAHAAIAAAagAgRAOIAhAAIAAgsIgXAAQgBAegJAOg");
	this.shape_47.setTransform(40.4,-321.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgXAOIAKgDQABAHAFACQAEAEAEAAQAFAAAEgDQADgDAAgFQAAgDgCgDQgCgDgDAAIgIgBIgCAAIAAgHIAIgBIAFgDQACgCAAgDQAAgFgDgCQgDgDgEAAQgIAAgEALIgKgCQAFgRARAAQAKgBAFAGQAGAGAAAHQAAAIgHAEQAEACADAEQACADAAAGQAAAIgGAFQgGAFgLABQgUgBgEgSg");
	this.shape_48.setTransform(34.3,-322.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgUAYQgHgIgBgQQABgOAHgJQAIgJAMABQANgBAIAJQAIAJAAAOIAAACIguAAQABALAFAFQAFAGAHAAQAGAAAEgEQAEgDACgGIAMACQgDAJgHAFQgHAFgLABQgMAAgJgJgAgLgSQgEAFgBAIIAhAAQAAgIgDgEQgFgGgJAAQgGAAgFAFg");
	this.shape_49.setTransform(28.3,-322.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALAAQANgBAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_50.setTransform(21.6,-322.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgaAsIAAhVIAJAAIAAAIQAEgFAEgCQAFgDAEAAQAIAAAHAEQAFAEAEAIQADAHAAAJQAAAKgDAGQgEAIgGAEQgHAEgHAAQgEAAgFgCQgEgCgDgEIAAAfgAgLgcQgFAGgBAMQABALAFAGQAEAFAHAAQAGAAAFgFQAFgGAAgMQAAgMgEgGQgFgGgHAAQgGAAgFAHg");
	this.shape_51.setTransform(15.1,-321.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAWArIAAhLIgsAAIAABLIgLAAIAAhVIBDAAIAABVg");
	this.shape_52.setTransform(7.3,-323.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgFAKQADgBACgEQAAgCAAgFIgFAAIAAgMIALAAIAAAMQAAAGgCAEQgCAEgEACg");
	this.shape_53.setTransform(228.6,-331);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgWAcQgFgGgBgIQAAgEACgEQADgEADgCIAIgDIAJgBQAMgCAFgBIAAgDQAAgHgCgDQgFgDgHAAQgHAAgEACQgDADgBAHIgLgCQABgGAEgEQADgEAGgDQAGgBAHAAQAIAAAFABQAFACADADQACADABAEIAAAKIAAANIABASQAAAEADAEIgMAAIgCgIQgFAGgFACQgFABgGAAQgKAAgGgEgAgCAEQgGABgDABQgDABgBADQgCACAAACQAAAEAEAEQADACAGAAQAFAAAFgCQAEgDADgFQABgEAAgGIAAgEIgQAEg");
	this.shape_54.setTransform(223.6,-334.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgYAfIAAg9IAYAAQAHAAAFABQAFACADAEQADAEAAAGQgBAEgBADQgCAEgEABQAFABADAEQACAEAAAFQAAAKgGADQgGAFgKAAgAgOAWIAOAAQAIAAADgBQADgDAAgFQAAgDgBgDQgCgCgEgBIgIAAIgNAAgAgOgEIALAAIAJAAIAEgDQACgDAAgDQAAgEgEgDQgDgCgIAAIgLAAg");
	this.shape_55.setTransform(217.3,-334.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AALAfIgLgTIgFgIQgDgCgDAAIAAAdIgLAAIAAg9IALAAIAAAaQAFAAACgBQACgCADgJQADgIACgCIAEgEIAIAAIACAAIAAAIIgDAAQgEAAgBABIgEAIIgEAJIgFAEQAGABAGALIAMATg");
	this.shape_56.setTransform(211.7,-334.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgSAYQgIgJAAgPQAAgJADgHQAEgIAGgEQAHgDAHAAQAKAAAHAEQAGAGACAJIgKABQgCgFgDgEQgEgDgFAAQgHAAgFAGQgFAFAAAMQAAANAFAFQAEAFAHAAQAGAAAEgDQAFgEABgIIAKACQgCAKgHAGQgHAHgKgBQgMAAgHgIg");
	this.shape_57.setTransform(205.8,-334.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgUAYQgIgJAAgPQAAgRAJgHQAIgIALABQANAAAIAIQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMAAgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHAAQAIAAAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_58.setTransform(199.3,-334.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAeArIAAhHIgZBHIgKAAIgYhIIAABIIgLAAIAAhVIARAAIAUA8IAEANIAEgOIAVg7IAPAAIAABVg");
	this.shape_59.setTransform(191,-335.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_60.setTransform(181.1,-331.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgRAfIAAg9IAjAAIAAAIIgYAAIAAA1g");
	this.shape_61.setTransform(177.7,-334.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgFAKQADgBACgEQAAgCAAgFIgFAAIAAgMIALAAIAAAMQAAAGgCAEQgCAEgEACg");
	this.shape_62.setTransform(170.1,-331);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgSAmQgGgFgCgLIAKgBQACAIADADQAEADAGAAQAEAAADgCQAEgCACgEQADgEABgGIACgNIAAgCQgEAFgFADQgFADgGAAQgLAAgHgIQgHgGAAgNQAAgNAHgIQAIgIAMAAQAHAAAHAFQAHAEAEAIQADAJAAAQQAAAPgDAKQgEAKgHAFQgHAFgJAAQgKAAgGgGgAgLgdQgFAGAAAJQAAAJAFAFQAEAEAHAAQAHAAAFgEQAEgFAAgKQAAgJgEgFQgFgFgHAAQgGAAgFAFg");
	this.shape_63.setTransform(165.1,-335.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAFArIAAhCQgDAEgGADIgLAGIAAgKQAJgFAGgGQAGgGADgFIAHAAIAABVg");
	this.shape_64.setTransform(158,-335.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAIArIAAgUIglAAIAAgKIAmg3IAJAAIAAA3IAMAAIAAAKIgMAAIAAAUgAgSANIAaAAIAAgmg");
	this.shape_65.setTransform(151.5,-335.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgTAlQgIgHAAgLIALgBQABAIAEAEQAFAFAGAAQAHgBAFgGQAFgFAAgKQAAgIgFgFQgFgFgHAAQgFAAgEACQgFACgBADIgKgBIAIgrIApAAIAAAKIghAAIgFAXQAIgFAIgBQALAAAHAIQAJAHAAAMQAAAMgIAIQgHALgOAAQgLAAgIgGg");
	this.shape_66.setTransform(145.1,-335.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAFArIAAhCQgDAEgGADIgLAGIAAgKQAJgFAGgGQAGgGADgFIAHAAIAABVg");
	this.shape_67.setTransform(137.9,-335.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAFArIAAhCQgDAEgGADIgLAGIAAgKQAJgFAGgGQAGgGADgFIAHAAIAABVg");
	this.shape_68.setTransform(131.3,-335.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgBAbIAOgbIgOgaIAHAAIATAaIgTAbgAgYAbIAPgbIgPgaIAJAAIARAaIgRAbg");
	this.shape_69.setTransform(121.7,-334.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_70.setTransform(116.8,-331.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgbArIAAhVIA3AAIAAAKIgrAAIAABLg");
	this.shape_71.setTransform(112.3,-335.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_72.setTransform(107,-331.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAWArIAAgpIgrAAIAAApIgMAAIAAhVIAMAAIAAAjIArAAIAAgjIAMAAIAABVg");
	this.shape_73.setTransform(100.9,-335.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_74.setTransform(95,-331.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgTAnQgJgGgEgKQgFgLAAgMQAAgNAFgKQAFgKAJgFQAKgFALgBQANABAIAGQAJAHADALIgLADQgDgJgGgEQgFgFgIAAQgJAAgHAFQgHAFgCAIQgDAIgBAIQAAALAEAHQADAIAHAFQAHADAHAAQAJAAAGgFQAHgGACgKIAMADQgEAOgJAHQgJAHgNAAQgOAAgIgFg");
	this.shape_75.setTransform(89,-335.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAXArIAAhDIgsBDIgMAAIAAhVIAKAAIAABDIAthDIAMAAIAABVg");
	this.shape_76.setTransform(77,-335.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AAdA1IAAgUIg5AAIAAAUIgKAAIAAgeIAHAAQAKgQAAguIAAgNIA0AAIAABLIAIAAIAAAegAgKgmIgCAeQgCATgFAMIAnAAIAAhBIgeAAg");
	this.shape_77.setTransform(68.4,-334.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAWArIAAgpIgrAAIAAApIgMAAIAAhVIAMAAIAAAjIArAAIAAgjIAMAAIAABVg");
	this.shape_78.setTransform(60.2,-335.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAcArIgLgaIgiAAIgKAaIgMAAIAhhVIALAAIAjBVgAgFgRIgJAYIAbAAIgIgWIgGgSQgBAJgDAHg");
	this.shape_79.setTransform(51.9,-335.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAQArIgPgYQgEgJgFgDQgDgEgHAAIAAAoIgLAAIAAhVIALAAIAAAmQAIgBADgDQAEgCADgMIAHgMQACgDAEgCQAEgDAFAAIAHAAIAAAKIgCAAIgCAAQgGAAgDADQgCACgEAJQgEAKgDAEQgDACgDACQAHACAJANIARAcg");
	this.shape_80.setTransform(44.8,-335.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AAQAbIgRgbIARgaIAJAAIgQAaIAQAbgAgGAbIgSgbIASgaIAIAAIgOAaIAOAbg");
	this.shape_81.setTransform(37.5,-334.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgVAmQgKgGgEgJQgFgKAAgMQAAgUALgMQAMgMARgBQAMAAAJAHQAKAFAFAKQAFALAAALQAAANgFALQgGAKgJAFQgKAFgLAAQgMABgJgHgAgUgaQgJAJAAASQAAAQAJAJQAIAIAMAAQAMABAJgKQAIgJAAgQQAAgKgDgHQgEgIgHgEQgGgFgJAAQgLABgJAHg");
	this.shape_82.setTransform(26.3,-335.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgVAmQgJgGgGgJQgEgKAAgMQAAgUALgMQAMgMARgBQAMAAAKAHQAJAFAFAKQAFALAAALQAAANgGALQgFAKgJAFQgKAFgLAAQgLABgKgHgAgUgaQgJAJAAASQAAAQAJAJQAIAIAMAAQANABAIgKQAIgJAAgQQAAgKgEgHQgDgIgHgEQgGgFgJAAQgLABgJAHg");
	this.shape_83.setTransform(17,-335.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgVAmQgKgGgFgJQgEgKAAgMQAAgUAMgMQALgMARgBQAMAAAJAHQAKAFAFAKQAFALAAALQAAANgFALQgFAKgLAFQgJAFgLAAQgLABgKgHgAgUgaQgIAJAAASQAAAQAIAJQAIAIAMAAQAMABAJgKQAIgJAAgQQAAgKgDgHQgEgIgGgEQgIgFgIAAQgLABgJAHg");
	this.shape_84.setTransform(7.7,-335.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dfgdfggg, new cjs.Rectangle(0,-345,236.9,43.1), null);


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
	this.instance.setTransform(246,-159.6,0.428,0.427,0,0,0,0.5,-0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#706F6F").s().p("AgrBHIAAiNIBWAAIAAAOIhHAAIAAAyIA/AAIAAAMIg/AAIAAAzIBIAAIAAAOg");
	this.shape.setTransform(280.1,-127,0.428,0.427);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#706F6F").s().p("AgGBHIgziNIARAAIAoB3IAqh3IAQAAIgzCNg");
	this.shape_1.setTransform(274.7,-126.9,0.428,0.427);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#706F6F").s().p("AgHBHIAAiNIAPAAIAACNg");
	this.shape_2.setTransform(270.8,-127,0.428,0.427);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#706F6F").s().p("AgHBHIAAh/IgnAAIAAgOIBdAAIAAAOIgoAAIAAB/g");
	this.shape_3.setTransform(267.3,-127,0.428,0.427);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#706F6F").s().p("AAtBHIgNglIg/AAIgOAlIgQAAIA2iNIAOAAIA3CNgAgaAUIA1AAIgbhHg");
	this.shape_4.setTransform(262.7,-127,0.428,0.427);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#706F6F").s().p("AgGBHIgziNIARAAIAoB3IAqh3IAQAAIgzCNg");
	this.shape_5.setTransform(257.7,-126.9,0.428,0.427);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#706F6F").s().p("AgrA1QgRgUAAggIAAgBQAAgfARgVQARgUAaAAQAbAAARAUQARAUAAAgIAAABQAAAfgRAVQgRAUgbAAQgaAAgRgUgAgggqQgMAQAAAaIAAABQAAAZAMARQAOAQASAAQAUAAAMgQQANgQAAgaIAAgBQAAgZgNgRQgMgQgUAAQgTAAgNAQg");
	this.shape_6.setTransform(252.2,-127,0.428,0.427);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAPAAIBJBvIAAhvIAPAAIAACNg");
	this.shape_7.setTransform(246.1,-127,0.428,0.427);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAPAAIBJBvIAAhvIAPAAIAACNg");
	this.shape_8.setTransform(240.2,-127,0.428,0.427);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#706F6F").s().p("AgHBHIAAiNIAOAAIAACNg");
	this.shape_9.setTransform(236.2,-127,0.428,0.427);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAOAAIBKBvIAAhvIAPAAIAACNg");
	this.shape_10.setTransform(229.9,-127,0.428,0.427);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#706F6F").s().p("AAgBHIgig3IghAAIAAA3IgPAAIAAiNIAxAAQAYAAAMANQALAMAAARIAAABQAAAfgiAJIAnA6gAgjACIAfAAQAQAAAKgHQAJgIAAgOQAAgdghAAIghAAg");
	this.shape_11.setTransform(224.4,-127,0.428,0.427);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#706F6F").s().p("AgrA1QgRgUAAggIAAgBQAAgfARgVQARgUAaAAQAbAAARAUQARAUAAAgIAAABQAAAfgRAVQgRAUgbAAQgaAAgRgUgAgggqQgMAQAAAaIAAABQAAAZAMARQAOAQASAAQAUAAAMgQQANgQAAgaIAAgBQAAgZgNgRQgMgQgUAAQgTAAgNAQg");
	this.shape_12.setTransform(218.4,-127,0.428,0.427);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#706F6F").s().p("AgwBHIAAiNIAwAAQAWAAAMAMQAJAKAAAOQAAAYgXAJQAdAIAAAZIAAABQAAASgNAKQgOAKgWAAgAghA5IAhAAQAQAAAJgGQAJgHAAgMIAAgBQAAgZgiAAIghAAgAghgGIAfAAQANAAAIgHQAJgHAAgMQAAgMgIgGQgIgGgNAAIggAAg");
	this.shape_13.setTransform(212.8,-127,0.428,0.427);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ghgf, new cjs.Rectangle(195.2,-210,101.2,101.2), null);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dfgdfg();
	this.instance.parent = this;
	this.instance.setTransform(3.1,0,1,1,0,0,0,113.9,71.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJAKQgFgEAAgGQAAgFAFgFQAEgDAFAAQAHAAADADQAFAFAAAFQAAAGgFAEQgDAFgHAAQgFAAgEgFg");
	this.shape.setTransform(-47.5,9.8,0.823,0.823);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeAiQgLgLAAgWQAAgUAMgNQANgMARAAQARgBANAMQALALAAASIgBAKIg+AAQABALAHAFQAGAGALABQANAAAHgIIAIAQQgLAIgUAAQgUAAgLgLgAgUgIIAqAAQgCgUgTAAQgRAAgEAUg");
	this.shape_1.setTransform(-53.8,7.1,0.823,0.823);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AASArIAAglIgjAAIAAAlIgVAAIAAhVIAVAAIAAAgIAjAAIAAggIAVAAIAABVg");
	this.shape_2.setTransform(-61.9,7.1,0.823,0.823);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgmBDIAAhXIAUAAIAAAzIA0g1IAFAAIAABXIgUAAIAAg0Ig0A2gAgRgsQgJgHgBgMIARgEQACAQAKgBQANAAABgOIAQADQgCAMgJAHQgHAGgMAAQgMAAgHgGg");
	this.shape_3.setTransform(-70,5.3,0.823,0.823);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATAqQgDgDgCgEQgDAFgHACQgFAEgIgBQgOAAgIgHQgIgGAAgNQAAgPALgIQALgJAVAAIAIABQAAgQgSAAQgLAAgJAFIgEgQQAKgGAPABQATgBAJAKQAKAJAAAZIAAASQAAASAHAEQgDAFgDAAQgDABgEAAQgDAAgFgDgAgTARQAAAMAOAAQARAAAAgSIAAgIIgIgBQgXAAAAAPg");
	this.shape_4.setTransform(-77.8,7.1,0.823,0.823);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiAkIAKgQQAKAJAOAAQAOAAAAgLQAAgMgQAAIgMAAIAAgPIAOABQAMAAAAgKQAAgFgDgCQgEgDgFAAQgLAAgMAHIgGgQQAPgIAPABQANAAAKAGQAIAHAAALQAAAPgOAEQAHABAFAGQAFAFAAAHQAAANgJAHQgMAHgPAAQgUAAgNgJg");
	this.shape_5.setTransform(-84.9,7.1,0.823,0.823);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmAtIAAhXIAUAAIAAAzIAzg1IAGAAIAABXIgUAAIAAgzIg0A1g");
	this.shape_6.setTransform(-92.2,7.1,0.823,0.823);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAfA7IAAgfIg8AAIAAAfIgSAAIAAgvIAIAAQAIgKAGgQQAEgRABgQIAAgLIA4AAIAABGIAMAAIAAAvgAgTAMIAkAAIAAg2IgUAAQgCAigOAUg");
	this.shape_7.setTransform(-100.7,8.4,0.823,0.823);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgmAtIAAhXIAUAAIAAAzIA0g1IAFAAIAABXIgUAAIAAgzIgzA1g");
	this.shape_8.setTransform(-113.2,7.1,0.823,0.823);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAUAsIgUgeIgUAeIgYAAIAigsIgggrIAYAAIASAcIAUgcIAWAAIgfAqIAiAtg");
	this.shape_9.setTransform(-25.3,-8.1,0.823,0.823);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AglAsIAAgRIADABQAEAAABgFQABgGAFgGQAFgFAHgCQgVgEAAgSQAAgLAIgHQAJgIARAAIAkACIAABWIgUAAIAAghIgFAAQgWAAgDATQgCAPgPAAgAgIgZQgDAEAAAFQAAAFAFAEQAFADAGAAIANAAIAAgYIgQAAQgGAAgEADg");
	this.shape_10.setTransform(-33.2,-8.1,0.823,0.823);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgmAuIAAhZIAVAAIAAA0IAzg2IAFAAIAABZIgUAAIAAg0Ig0A2g");
	this.shape_11.setTransform(-41,-8.1,0.823,0.823);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgdAsIAAhXIA7AAIAAASIgnAAIAABFg");
	this.shape_12.setTransform(-48,-8.1,0.823,0.823);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgTAMgNQALgMASAAQAUAAALAMQALANAAATQAAAWgLALQgMAMgTAAQgTAAgLgMgAgOgUQgGAHAAANQAAAdAUAAQAJAAAGgIQAGgIAAgNQAAgcgVAAQgIAAgGAIg");
	this.shape_13.setTransform(-55.3,-8.1,0.823,0.823);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgqAaQAJAAAFgGQAFgFAEgPQAEgSAAgUIAAgFIA6AAIAABWIgUAAIAAhGIgWAAQAAAQgDARQgEAQgFAIQgHAJgGACQgHADgLAAg");
	this.shape_14.setTransform(-63.7,-8,0.823,0.823);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgTAMgNQAKgMATAAQAUAAALAMQALANAAATQAAAVgLAMQgNAMgSAAQgTAAgLgMgAgOgUQgGAHAAANQAAAdAUAAQAJAAAGgIQAGgIAAgNQgBgcgUAAQgJAAgFAIg");
	this.shape_15.setTransform(-71.4,-8.1,0.823,0.823);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AASAsIAAgmIgjAAIAAAmIgVAAIAAhXIAVAAIAAAhIAjAAIAAghIAVAAIAABXg");
	this.shape_16.setTransform(-79.3,-8.1,0.823,0.823);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAVAsIgVgeIgUAeIgYAAIAigsIgfgrIAXAAIASAcIAUgcIAXAAIghAqIAjAtg");
	this.shape_17.setTransform(-87.3,-8.1,0.823,0.823);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgeAiQgMgLABgWQgBgUANgNQAMgMARAAQAUAAALALQALALAAASIgBAKIg9AAQAAALAHAFQAGAGALAAQANAAAIgHIAIAQQgMAIgVAAQgSAAgMgLgAgTgIIApAAQgDgTgSAAQgRAAgDATg");
	this.shape_18.setTransform(-95.1,-8.1,0.823,0.823);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgJAsIAAhFIgZAAIAAgSIBFAAIAAASIgZAAIAABFg");
	this.shape_19.setTransform(-102.4,-8.1,0.823,0.823);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgkAsIAAhWIAmgBQAOAAAJAGQAIAHAAALQAAAFgDAFQgDAFgHADQARAFAAAQQAAAMgJAFQgJAHgQAAgAgQAcIARABQAQAAAAgMQAAgGgFgDQgFgCgGAAIgRAAgAgQgbIAAATIAQAAQAOAAAAgKQAAgEgEgDQgDgDgGAAg");
	this.shape_20.setTransform(-113.4,-8.1,0.823,0.823);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAfArIAAhWIAUAAIAABWgAgyArIAAhWIATAAIAAAfIAQAAQAPAAAJAHQAJAHAAAOQAAAbghAAgAgfADIAAAYIAOABQAJAAADgDQAEgFAAgFQAAgFgEgEQgEgEgIAAg");
	this.shape_21.setTransform(-20,-23.3,0.823,0.823);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAfA7IAAgfIg9AAIAAAfIgRAAIAAgvIAIAAQAJgMAFgPQAFgRAAgPIAAgLIA4AAIAABGIAMAAIAAAvgAgTAMIAkAAIAAg2IgVAAQgBAjgOATg");
	this.shape_22.setTransform(-29.5,-22,0.823,0.823);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AASArIAAglIgjAAIAAAlIgVAAIAAhWIAVAAIAAAiIAjAAIAAgiIAVAAIAABWg");
	this.shape_23.setTransform(-37.8,-23.3,0.823,0.823);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgeAiQgMgMABgVQgBgUANgMQANgNARAAQASAAAMALQAMALAAASIgCAKIg9AAQABALAGAGQAGAFALAAQAOAAAHgHIAIAQQgLAIgWAAQgSAAgMgLgAgUgIIAqAAQgCgTgTAAQgQAAgFATg");
	this.shape_24.setTransform(-45.8,-23.3,0.823,0.823);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgnA+IAAh5IAUAAIAAAGQAIgIALAAQApAAAAAuQAAAVgMALQgLAMgUAAQgKAAgHgEIAAAlgAgTgmIAAAtQAFAFAIAAQANAAAGgHQAHgFgBgPQAAgPgFgHQgHgGgNAAQgHAAgGAFg");
	this.shape_25.setTransform(-53.6,-21.9,0.823,0.823);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgJArIAAhFIgZAAIAAgRIBFAAIAAARIgZAAIAABFg");
	this.shape_26.setTransform(-61.1,-23.3,0.823,0.823);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgDAtIgYgvIgBAAIgHAuIgUAAIARhYIAIAAIAeA9IAgg9IAHAAIAQBYIgUAAIgHgpIgBgFIgBAAIgCAHIgVAog");
	this.shape_27.setTransform(-73.6,-23.3,0.823,0.823);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgeAiQgMgLAAgWQABgUAMgMQANgNAQAAQAUAAALALQALAMAAARIgBAKIg9AAQAAAKAHAHQAFAFAMAAQAOAAAGgHIAJAQQgLAIgWAAQgSAAgMgLgAgUgIIAqAAQgCgTgTAAQgQAAgFATg");
	this.shape_28.setTransform(-82.5,-23.3,0.823,0.823);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AATAqQgDgDgCgEQgCAEgHAEQgIACgGAAQgPAAgHgHQgIgGAAgOQAAgOALgIQAMgJAUAAIAIABQAAgPgSAAQgLAAgIAEIgFgQQALgFAOAAQAUAAAJAJQAJAJAAAZIAAASQAAASAHAEQgDAEgCABIgIABQgEAAgEgDgAgSARQAAAMANAAQASAAAAgSIAAgIIgIgBQgXAAAAAPg");
	this.shape_29.setTransform(-90.1,-23.3,0.823,0.823);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAfA7IAAgfIg8AAIAAAfIgSAAIAAgvIAJAAQAIgMAFgPQAFgPAAgRIAAgLIA4AAIAABGIAMAAIAAAvgAgTAMIAkAAIAAg2IgUAAQgCAigOAUg");
	this.shape_30.setTransform(-98.1,-22,0.823,0.823);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAUAqQgDgCgCgFQgDAFgHADQgIACgFAAQgPAAgIgHQgIgHAAgNQAAgNALgJQAMgJAUAAIAJABQAAgPgTAAQgKAAgJAEIgFgQQALgFAOAAQAUAAAJAJQAJAJAAAZIAAASQAAASAHAEQgDAFgCAAIgIABQgEAAgDgDgAgSARQAAAMANAAQASAAAAgSIAAgIIgIgBQgXAAAAAPg");
	this.shape_31.setTransform(-106,-23.3,0.823,0.823);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgoA1IAJgTQAOAKAOAAQAKAAAGgFQAGgFAAgJQAAgKgHgGQgIgGgLAAIgMABIAAgQIAMAAQAKAAAGgEQAGgFAAgIQAAgGgFgEQgGgEgHAAQgLAAgNAIIgIgSQASgIAQAAQAQAAALAIQAKAJAAAOQAAAJgEAHQgFAHgHADQALAEAEAGQAGAHAAAMQAAARgMAKQgMAKgVAAQgVAAgPgJg");
	this.shape_32.setTransform(-113.6,-24.6,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117,-71.2,234,142.5);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dfgdfg();
	this.instance.parent = this;
	this.instance.setTransform(3.1,0,1,1,0,0,0,113.9,71.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJAKQgFgEAAgGQAAgFAFgFQAEgDAFAAQAHAAADADQAFAFAAAFQAAAGgFAEQgDAFgHAAQgFAAgEgFg");
	this.shape.setTransform(-47.5,9.8,0.823,0.823);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeAiQgLgLAAgWQAAgUAMgNQANgMARAAQARgBANAMQALALAAASIgBAKIg+AAQABALAHAFQAGAGALABQANAAAHgIIAIAQQgLAIgUAAQgUAAgLgLgAgUgIIAqAAQgCgUgTAAQgRAAgEAUg");
	this.shape_1.setTransform(-53.8,7.1,0.823,0.823);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AASArIAAglIgjAAIAAAlIgVAAIAAhVIAVAAIAAAgIAjAAIAAggIAVAAIAABVg");
	this.shape_2.setTransform(-61.9,7.1,0.823,0.823);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgmBDIAAhXIAUAAIAAAzIA0g1IAFAAIAABXIgUAAIAAg0Ig0A2gAgRgsQgJgHgBgMIARgEQACAQAKgBQANAAABgOIAQADQgCAMgJAHQgHAGgMAAQgMAAgHgGg");
	this.shape_3.setTransform(-70,5.3,0.823,0.823);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATAqQgDgDgCgEQgDAFgHACQgFAEgIgBQgOAAgIgHQgIgGAAgNQAAgPALgIQALgJAVAAIAIABQAAgQgSAAQgLAAgJAFIgEgQQAKgGAPABQATgBAJAKQAKAJAAAZIAAASQAAASAHAEQgDAFgDAAQgDABgEAAQgDAAgFgDgAgTARQAAAMAOAAQARAAAAgSIAAgIIgIgBQgXAAAAAPg");
	this.shape_4.setTransform(-77.8,7.1,0.823,0.823);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiAkIAKgQQAKAJAOAAQAOAAAAgLQAAgMgQAAIgMAAIAAgPIAOABQAMAAAAgKQAAgFgDgCQgEgDgFAAQgLAAgMAHIgGgQQAPgIAPABQANAAAKAGQAIAHAAALQAAAPgOAEQAHABAFAGQAFAFAAAHQAAANgJAHQgMAHgPAAQgUAAgNgJg");
	this.shape_5.setTransform(-84.9,7.1,0.823,0.823);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmAtIAAhXIAUAAIAAAzIAzg1IAGAAIAABXIgUAAIAAgzIg0A1g");
	this.shape_6.setTransform(-92.2,7.1,0.823,0.823);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAfA7IAAgfIg8AAIAAAfIgSAAIAAgvIAIAAQAIgKAGgQQAEgRABgQIAAgLIA4AAIAABGIAMAAIAAAvgAgTAMIAkAAIAAg2IgUAAQgCAigOAUg");
	this.shape_7.setTransform(-100.7,8.4,0.823,0.823);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgmAtIAAhXIAUAAIAAAzIA0g1IAFAAIAABXIgUAAIAAgzIgzA1g");
	this.shape_8.setTransform(-113.2,7.1,0.823,0.823);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAUAsIgUgeIgUAeIgYAAIAigsIgggrIAYAAIASAcIAUgcIAWAAIgfAqIAiAtg");
	this.shape_9.setTransform(-25.3,-8.1,0.823,0.823);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AglAsIAAgRIADABQAEAAABgFQABgGAFgGQAFgFAHgCQgVgEAAgSQAAgLAIgHQAJgIARAAIAkACIAABWIgUAAIAAghIgFAAQgWAAgDATQgCAPgPAAgAgIgZQgDAEAAAFQAAAFAFAEQAFADAGAAIANAAIAAgYIgQAAQgGAAgEADg");
	this.shape_10.setTransform(-33.2,-8.1,0.823,0.823);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgmAuIAAhZIAVAAIAAA0IAzg2IAFAAIAABZIgUAAIAAg0Ig0A2g");
	this.shape_11.setTransform(-41,-8.1,0.823,0.823);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgdAsIAAhXIA7AAIAAASIgnAAIAABFg");
	this.shape_12.setTransform(-48,-8.1,0.823,0.823);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgTAMgNQALgMASAAQAUAAALAMQALANAAATQAAAWgLALQgMAMgTAAQgTAAgLgMgAgOgUQgGAHAAANQAAAdAUAAQAJAAAGgIQAGgIAAgNQAAgcgVAAQgIAAgGAIg");
	this.shape_13.setTransform(-55.3,-8.1,0.823,0.823);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgqAaQAJAAAFgGQAFgFAEgPQAEgSAAgUIAAgFIA6AAIAABWIgUAAIAAhGIgWAAQAAAQgDARQgEAQgFAIQgHAJgGACQgHADgLAAg");
	this.shape_14.setTransform(-63.7,-8,0.823,0.823);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgTAMgNQAKgMATAAQAUAAALAMQALANAAATQAAAVgLAMQgNAMgSAAQgTAAgLgMgAgOgUQgGAHAAANQAAAdAUAAQAJAAAGgIQAGgIAAgNQgBgcgUAAQgJAAgFAIg");
	this.shape_15.setTransform(-71.4,-8.1,0.823,0.823);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AASAsIAAgmIgjAAIAAAmIgVAAIAAhXIAVAAIAAAhIAjAAIAAghIAVAAIAABXg");
	this.shape_16.setTransform(-79.3,-8.1,0.823,0.823);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAVAsIgVgeIgUAeIgYAAIAigsIgfgrIAXAAIASAcIAUgcIAXAAIghAqIAjAtg");
	this.shape_17.setTransform(-87.3,-8.1,0.823,0.823);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgeAiQgMgLABgWQgBgUANgNQAMgMARAAQAUAAALALQALALAAASIgBAKIg9AAQAAALAHAFQAGAGALAAQANAAAIgHIAIAQQgMAIgVAAQgSAAgMgLgAgTgIIApAAQgDgTgSAAQgRAAgDATg");
	this.shape_18.setTransform(-95.1,-8.1,0.823,0.823);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgJAsIAAhFIgZAAIAAgSIBFAAIAAASIgZAAIAABFg");
	this.shape_19.setTransform(-102.4,-8.1,0.823,0.823);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgkAsIAAhWIAmgBQAOAAAJAGQAIAHAAALQAAAFgDAFQgDAFgHADQARAFAAAQQAAAMgJAFQgJAHgQAAgAgQAcIARABQAQAAAAgMQAAgGgFgDQgFgCgGAAIgRAAgAgQgbIAAATIAQAAQAOAAAAgKQAAgEgEgDQgDgDgGAAg");
	this.shape_20.setTransform(-113.4,-8.1,0.823,0.823);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAfArIAAhWIAUAAIAABWgAgyArIAAhWIATAAIAAAfIAQAAQAPAAAJAHQAJAHAAAOQAAAbghAAgAgfADIAAAYIAOABQAJAAADgDQAEgFAAgFQAAgFgEgEQgEgEgIAAg");
	this.shape_21.setTransform(-20,-23.3,0.823,0.823);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAfA7IAAgfIg9AAIAAAfIgRAAIAAgvIAIAAQAJgMAFgPQAFgRAAgPIAAgLIA4AAIAABGIAMAAIAAAvgAgTAMIAkAAIAAg2IgVAAQgBAjgOATg");
	this.shape_22.setTransform(-29.5,-22,0.823,0.823);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AASArIAAglIgjAAIAAAlIgVAAIAAhWIAVAAIAAAiIAjAAIAAgiIAVAAIAABWg");
	this.shape_23.setTransform(-37.8,-23.3,0.823,0.823);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgeAiQgMgMABgVQgBgUANgMQANgNARAAQASAAAMALQAMALAAASIgCAKIg9AAQABALAGAGQAGAFALAAQAOAAAHgHIAIAQQgLAIgWAAQgSAAgMgLgAgUgIIAqAAQgCgTgTAAQgQAAgFATg");
	this.shape_24.setTransform(-45.8,-23.3,0.823,0.823);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgnA+IAAh5IAUAAIAAAGQAIgIALAAQApAAAAAuQAAAVgMALQgLAMgUAAQgKAAgHgEIAAAlgAgTgmIAAAtQAFAFAIAAQANAAAGgHQAHgFgBgPQAAgPgFgHQgHgGgNAAQgHAAgGAFg");
	this.shape_25.setTransform(-53.6,-21.9,0.823,0.823);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgJArIAAhFIgZAAIAAgRIBFAAIAAARIgZAAIAABFg");
	this.shape_26.setTransform(-61.1,-23.3,0.823,0.823);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgDAtIgYgvIgBAAIgHAuIgUAAIARhYIAIAAIAeA9IAgg9IAHAAIAQBYIgUAAIgHgpIgBgFIgBAAIgCAHIgVAog");
	this.shape_27.setTransform(-73.6,-23.3,0.823,0.823);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgeAiQgMgLAAgWQABgUAMgMQANgNAQAAQAUAAALALQALAMAAARIgBAKIg9AAQAAAKAHAHQAFAFAMAAQAOAAAGgHIAJAQQgLAIgWAAQgSAAgMgLgAgUgIIAqAAQgCgTgTAAQgQAAgFATg");
	this.shape_28.setTransform(-82.5,-23.3,0.823,0.823);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AATAqQgDgDgCgEQgCAEgHAEQgIACgGAAQgPAAgHgHQgIgGAAgOQAAgOALgIQAMgJAUAAIAIABQAAgPgSAAQgLAAgIAEIgFgQQALgFAOAAQAUAAAJAJQAJAJAAAZIAAASQAAASAHAEQgDAEgCABIgIABQgEAAgEgDgAgSARQAAAMANAAQASAAAAgSIAAgIIgIgBQgXAAAAAPg");
	this.shape_29.setTransform(-90.1,-23.3,0.823,0.823);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAfA7IAAgfIg8AAIAAAfIgSAAIAAgvIAJAAQAIgMAFgPQAFgPAAgRIAAgLIA4AAIAABGIAMAAIAAAvgAgTAMIAkAAIAAg2IgUAAQgCAigOAUg");
	this.shape_30.setTransform(-98.1,-22,0.823,0.823);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAUAqQgDgCgCgFQgDAFgHADQgIACgFAAQgPAAgIgHQgIgHAAgNQAAgNALgJQAMgJAUAAIAJABQAAgPgTAAQgKAAgJAEIgFgQQALgFAOAAQAUAAAJAJQAJAJAAAZIAAASQAAASAHAEQgDAFgCAAIgIABQgEAAgDgDgAgSARQAAAMANAAQASAAAAgSIAAgIIgIgBQgXAAAAAPg");
	this.shape_31.setTransform(-106,-23.3,0.823,0.823);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgoA1IAJgTQAOAKAOAAQAKAAAGgFQAGgFAAgJQAAgKgHgGQgIgGgLAAIgMABIAAgQIAMAAQAKAAAGgEQAGgFAAgIQAAgGgFgEQgGgEgHAAQgLAAgNAIIgIgSQASgIAQAAQAQAAALAIQAKAJAAAOQAAAJgEAHQgFAHgHADQALAEAEAGQAGAHAAAMQAAARgMAKQgMAKgVAAQgVAAgPgJg");
	this.shape_32.setTransform(-113.6,-24.6,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117,-71.2,234,142.5);


// stage content:
(lib._468x60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_312 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(312).call(this.frame_312).wait(48));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("EgkegEmMBI9AAAIAAJNMhI9AAAg");
	this.shape.setTransform(234,30);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	// legal
	this.addr2 = new lib.dfgdfggg();
	this.addr2.parent = this;
	this.addr2.setTransform(2.2,255.9,0.66,0.66);
	this.addr2.alpha = 0;
	this.addr2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.addr2).wait(303).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(41).to({alpha:0},6,cjs.Ease.get(1)).wait(1));

	// Слой 19
	this.instance = new lib.ghggg();
	this.instance.parent = this;
	this.instance.setTransform(79.1,235,0.66,0.66,0,0,0,0.1,0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(298).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(46).to({alpha:0},6,cjs.Ease.get(1)).wait(1));

	// final
	this.instance_1 = new lib.ghgf();
	this.instance_1.parent = this;
	this.instance_1.setTransform(79.1,131.8,0.66,0.66,0,0,0,0.1,0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(293).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(51).to({alpha:0},6,cjs.Ease.get(1)).wait(1));

	// logo
	this.instance_2 = new lib.hgj();
	this.instance_2.parent = this;
	this.instance_2.setTransform(37.2,29.6,0.334,0.334,0,0,0,0.1,0.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},7).wait(280).to({alpha:0},8,cjs.Ease.get(0.69)).to({_off:true},7).wait(58));

	// mask-in-out - копия: 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Egi9ASOMAZlgkbMAsWAAAMAAAAkbg");
	var mask_graphics_1 = new cjs.Graphics().p("EgiGASOMAV0gkbMAuZAAAMAAAAkbg");
	var mask_graphics_2 = new cjs.Graphics().p("EghVASOMASbgkbMAwQAAAMAAAAkbg");
	var mask_graphics_3 = new cjs.Graphics().p("EggpASOMAPZgkbMAx6AAAMAAAAkbg");
	var mask_graphics_4 = new cjs.Graphics().p("EggCASOMAMtgkbMAzYAAAMAAAAkbg");
	var mask_graphics_5 = new cjs.Graphics().p("A/gSOMAKYgkbMA0pAAAMAAAAkbg");
	var mask_graphics_6 = new cjs.Graphics().p("A/ESOMAIbgkbMA1tAAAMAAAAkbg");
	var mask_graphics_7 = new cjs.Graphics().p("A+sSOMAG0gkbMA2lAAAMAAAAkbg");
	var mask_graphics_8 = new cjs.Graphics().p("A+aSOMAFkgkbMA3RAAAMAAAAkbg");
	var mask_graphics_9 = new cjs.Graphics().p("A+NSOMAErgkbMA3wAAAMAAAAkbg");
	var mask_graphics_10 = new cjs.Graphics().p("A+FSOMAEIgkbMA4DAAAMAAAAkbg");
	var mask_graphics_11 = new cjs.Graphics().p("A+DSOMAD9gkbMA4KAAAMAAAAkbg");
	var mask_graphics_62 = new cjs.Graphics().p("A/sSOMAAAgkbMBF6AAAMgZkAkbg");
	var mask_graphics_63 = new cjs.Graphics().p("A7eSOMAAAgkbMA7kAAAMgVxAkbg");
	var mask_graphics_64 = new cjs.Graphics().p("A3pSOMAAAgkbMAyNAAAMgSXAkbg");
	var mask_graphics_65 = new cjs.Graphics().p("A0OSOMAAAgkbMAp1AAAMgPTAkbg");
	var mask_graphics_66 = new cjs.Graphics().p("AxMSOMAAAgkbMAibAAAMgMmAkbg");
	var mask_graphics_67 = new cjs.Graphics().p("AuASOMAAAgkbIcBAAMgKQAkbg");
	var mask_graphics_68 = new cjs.Graphics().p("ArSSOMAAAgkbIWlAAMgIRAkbg");
	var mask_graphics_69 = new cjs.Graphics().p("ApESOMAAAgkbISJAAMgGpAkbg");
	var mask_graphics_70 = new cjs.Graphics().p("AnWSOMAAAgkbIOtAAMgFYAkbg");
	var mask_graphics_71 = new cjs.Graphics().p("AmHSOMAAAgkbIMPAAMgEfAkbg");
	var mask_graphics_72 = new cjs.Graphics().p("AlYSOMAAAgkbIKxAAMgD8Akbg");
	var mask_graphics_73 = new cjs.Graphics().p("AlISOMAAAgkbIKRAAMgDxAkbg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:549,y:92.5}).wait(1).to({graphics:mask_graphics_1,x:489,y:92.5}).wait(1).to({graphics:mask_graphics_2,x:434.7,y:92.5}).wait(1).to({graphics:mask_graphics_3,x:386.2,y:92.5}).wait(1).to({graphics:mask_graphics_4,x:343.3,y:92.5}).wait(1).to({graphics:mask_graphics_5,x:306.2,y:92.5}).wait(1).to({graphics:mask_graphics_6,x:274.8,y:92.5}).wait(1).to({graphics:mask_graphics_7,x:249,y:92.5}).wait(1).to({graphics:mask_graphics_8,x:229,y:92.5}).wait(1).to({graphics:mask_graphics_9,x:214.8,y:92.5}).wait(1).to({graphics:mask_graphics_10,x:206.2,y:92.5}).wait(1).to({graphics:mask_graphics_11,x:203.3,y:92.5}).wait(1).to({graphics:null,x:0,y:0}).wait(50).to({graphics:mask_graphics_62,x:244.6,y:92.4}).wait(1).to({graphics:mask_graphics_63,x:205.4,y:92.4}).wait(1).to({graphics:mask_graphics_64,x:170,y:92.4}).wait(1).to({graphics:mask_graphics_65,x:138.3,y:92.4}).wait(1).to({graphics:mask_graphics_66,x:110.3,y:92.4}).wait(1).to({graphics:mask_graphics_67,x:82.3,y:92.4}).wait(1).to({graphics:mask_graphics_68,x:58.6,y:92.4}).wait(1).to({graphics:mask_graphics_69,x:39.3,y:92.4}).wait(1).to({graphics:mask_graphics_70,x:24.2,y:92.4}).wait(1).to({graphics:mask_graphics_71,x:13.4,y:92.4}).wait(1).to({graphics:mask_graphics_72,x:6.9,y:92.4}).wait(1).to({graphics:mask_graphics_73,x:4.8,y:92.4}).wait(287));

	// text0
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVASIAPgiIAbgBIgdAjg");
	this.shape_1.setTransform(166.8,40.5,0.534,0.534);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUASIAOgjIAbAAIgdAjg");
	this.shape_2.setTransform(169.5,20.6,0.534,0.534);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVASIAPgiIAcgBIgeAjg");
	this.shape_3.setTransform(153.2,10.3,0.534,0.534);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgkAsIAAhXIAVAAIAAAgIARgBQAPAAAKAIQAJAGAAAOQAAANgHAHQgKAIgSAAgAgPADIAAAZIAPAAQAQAAAAgNQAAgFgDgEQgFgDgIAAg");
	this.shape_4.setTransform(185.1,44.8,0.534,0.534);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJAsIAAhFIgZAAIAAgSIBFAAIAAASIgZAAIAABFg");
	this.shape_5.setTransform(180.4,44.8,0.534,0.534);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmAuIAAhZIAUAAIAAA0IA0g2IAFAAIAABZIgUAAIAAg0Ig0A2g");
	this.shape_6.setTransform(175.5,44.8,0.534,0.534);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgZAiQgLgMAAgVQAAgUAMgNQANgMAVAAQAPAAAMAIIgJAQQgIgHgLAAQgLAAgHAHQgGAHAAAOQAAAbAZAAQAMAAAIgHIAHAQQgHAFgJACQgGABgJAAQgSAAgNgLg");
	this.shape_7.setTransform(170.5,44.8,0.534,0.534);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgeAhQgLgNAAgUQAAgTALgNQANgMARAAQAUAAALAMQALAMAAAUQAAAVgMAMQgKAMgUAAQgTAAgLgMgAgOgUQgGAIAAAMQABAdATAAQAKAAAFgIQAGgHAAgOQAAgcgVAAQgIAAgGAIg");
	this.shape_8.setTransform(165.7,44.8,0.534,0.534);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZAiQgMgMABgVQgBgUANgNQAMgMAWAAQAPAAALAIIgIAQQgIgHgLAAQgKAAgIAHQgGAHAAAOQAAAbAZAAQALAAAJgHIAHAQQgIAFgIACQgGABgJAAQgSAAgNgLg");
	this.shape_9.setTransform(160.9,44.8,0.534,0.534);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgeAiQgMgLAAgWQAAgUANgNQANgMARAAQATAAALALQAMAMAAARIgCAKIg9AAQAAALAHAGQAHAFAKAAQANAAAIgHIAIAQQgMAIgUAAQgTAAgMgLgAgUgIIAqAAQgCgTgTAAQgQAAgFATg");
	this.shape_10.setTransform(156,44.8,0.534,0.534);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgqAaQAIAAAGgFQAGgGADgPQAEgQAAgWIAAgFIA6AAIAABWIgUAAIAAhGIgWAAQgBAUgCANQgEARgFAHQgHAJgGACQgHADgLAAg");
	this.shape_11.setTransform(150.5,44.8,0.534,0.534);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAfAsIAAhXIAUAAIAABXgAgyAsIAAhXIAUAAIAAAgIAPgBQAQAAAIAIQAJAGAAAOQAAAcghAAgAgeADIAAAZIANAAQAJAAAEgEQADgDAAgGQAAgGgEgDQgEgEgIAAg");
	this.shape_12.setTransform(144.7,44.8,0.534,0.534);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AASAsIAAhFIgiAAIAABFIgVAAIAAhXIBLAAIAABXg");
	this.shape_13.setTransform(138.8,44.8,0.534,0.534);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRAsIgbhYIAVAAIAPA0IAeg0IAXAAIg3BYg");
	this.shape_14.setTransform(128.7,44.8,0.534,0.534);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgJAKQgFgDAAgHQAAgGAFgDQAEgFAFAAQAGAAAFAFQADAEAAAFQAAAGgDAEQgFAFgGAAQgFAAgEgFg");
	this.shape_15.setTransform(121.5,46.6,0.534,0.534);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AglA9IAAgHIAlg2QALgQAAgMQAAgOgPAAQgNAAgHANIgPgLQAEgIAKgGQAJgGALAAQARAAAKAJQALAIAAAPQAAANgNAUIgYAlIAsAAIAAATg");
	this.shape_16.setTransform(117.5,43.9,0.534,0.534);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgTBCQAQgTAAgxQAAgqgQgXIAAgLQARAIAKAXQAMAXAAAWQAAAagLAVQgJAVgTANg");
	this.shape_17.setTransform(207.6,35,0.534,0.534);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAfArIAAhWIAUAAIAABWgAgyArIAAhWIAUAAIAAAfIAPAAQAPAAAJAIQAJAGAAAOQAAAcghgBgAgeADIAAAZIANAAQAJAAAEgEQADgDAAgGQAAgFgEgEQgEgEgIAAg");
	this.shape_18.setTransform(202.5,34.9,0.534,0.534);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgDAtIgXgsIgBgDIAAAAIgIAtIgTAAIAQhYIAIAAIAeA+IAgg+IAHAAIAQBYIgUAAIgIgpIAAgEIgBAAIgCAHIgVAog");
	this.shape_19.setTransform(196,34.9,0.534,0.534);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgnA+IAAh5IAUAAIAAAGQAIgIAKAAQApAAABAvQAAAUgMALQgMAMgTAAQgIAAgJgEIAAAlgAgTgmIAAAtQAFAFAIAAQANAAAGgHQAGgFAAgPQAAgPgGgHQgGgGgNAAQgHAAgGAFg");
	this.shape_20.setTransform(190.3,35.8,0.534,0.534);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgmAtIAAhYIAUAAIAAA0IA0g2IAFAAIAABYIgUAAIAAgzIg0A1g");
	this.shape_21.setTransform(184.9,34.9,0.534,0.534);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgJBPIAAgkQgIAEgIAAQgQAAgJgMQgJgMAAgVQAAgVAKgMQALgMAPAAQAGAAAIADIAAgiIATgEIAAAmQAIgDAGAAQARAAAJAMQAKAMAAAVQAAAUgKANQgKAMgPAAQgIAAgHgDIAAAjgAAKgZIAAA2IAKACQAUAAAAgfQAAgMgFgIQgEgHgKAAQgGAAgFACgAgnAAQAAAfATAAIALgCIAAg1QgFgDgGAAQgTAAAAAbg");
	this.shape_22.setTransform(178.6,34.8,0.534,0.534);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgJAjQgJgKgCgTIgPAAIAAAlIgTAAIAAhWIATAAIAAAhIAPAAQADgPAKgKQAJgKAPAAQASAAAKANQAKANAAATQAAAVgKAMQgLAMgRAAQgRAAgJgKgAADgUQgEAKAAAKQAAAcASAAQAIAAAFgHQAFgIAAgNQAAgcgSAAQgJAAgFAIg");
	this.shape_23.setTransform(169.1,34.9,0.534,0.534);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgmAtIAAhYIAUAAIAAA0IA0g2IAFAAIAABYIgUAAIAAgzIgzA1g");
	this.shape_24.setTransform(162.9,34.9,0.534,0.534);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AASArIAAglIgjAAIAAAlIgUAAIAAhWIAUAAIAAAhIAjAAIAAghIAUAAIAABWg");
	this.shape_25.setTransform(157.6,34.9,0.534,0.534);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AATAqQgDgDgCgEQgDAFgHADQgGACgHAAQgOAAgIgHQgIgHAAgNQAAgOALgIQALgJAVAAIAIABQAAgPgSgBQgLAAgJAFIgEgQQALgGAOAAQATAAAJAKQAKAJAAAZIAAASQAAASAHAEQgEAEgCABQgDACgEgBQgEABgEgEgAgTARQAAAMAOAAQARAAAAgSIAAgJIgIgBQgXAAAAAQg");
	this.shape_26.setTransform(152.6,34.9,0.534,0.534);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgjAsIAAhWIAkgBQAPAAAJAGQAIAHAAALQAAAEgEAHQgDAEgHACQARAGAAAQQAAALgIAGQgIAHgSAAgAgQAGIAAAXIARAAQAQAAAAgMQAAgFgFgDQgEgEgHAAgAgQgbIAAATIAQAAQAOAAAAgKQAAgFgEgCQgDgDgGAAIgRABg");
	this.shape_27.setTransform(147.9,34.9,0.534,0.534);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgiAkIAKgQQALAIANAAQAOAAAAgKQAAgMgQAAIgMAAIAAgPIANABQANAAAAgKQAAgFgDgCQgDgDgGAAQgLAAgMAHIgHgQQAQgIAPAAQANAAAKAHQAIAHAAALQAAAOgNAFQAHABAEAGQAFAGAAAFQAAAOgKAIQgKAGgQAAQgVAAgMgJg");
	this.shape_28.setTransform(143.1,34.9,0.534,0.534);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAUAqQgDgDgCgEQgDAFgHADQgHACgGAAQgOAAgJgHQgIgHAAgNQAAgOALgIQAMgJAUAAIAJABQAAgPgTgBQgKAAgJAFIgFgQQALgGAOAAQATAAAKAKQAJAJAAAZIAAASQAAASAHAEQgDAEgCABQgDACgFgBQgEABgDgEgAgSARQAAAMANAAQASAAAAgSIAAgJIgIgBQgXAAAAAQg");
	this.shape_29.setTransform(138.7,34.9,0.534,0.534);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AASArIAAglIgjAAIAAAlIgUAAIAAhWIAUAAIAAAhIAjAAIAAghIAUAAIAABWg");
	this.shape_30.setTransform(133.6,34.9,0.534,0.534);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgdAhQgMgNAAgUQAAgTAMgMQAMgOARAAQATAAAMANQALAMAAAUQAAAUgMANQgLAMgTAAQgTAAgKgMgAgOgUQgGAHABANQgBAcAUAAQAJAAAGgHQAGgHAAgOQAAgcgVAAQgIABgGAHg");
	this.shape_31.setTransform(125.7,34.9,0.534,0.534);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AARArIAAhFIghAAIAABFIgVAAIAAhWIBLAAIAABWg");
	this.shape_32.setTransform(120.6,34.9,0.534,0.534);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgIAtQgLgVAAgaQAAgWAMgXQAKgXARgIIAAALQgQAXAAAqQAAAxAQATIAAANQgUgNgIgVg");
	this.shape_33.setTransform(116.5,35,0.534,0.534);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgZAiQgMgMABgVQgBgUANgNQANgMAVAAQAPAAAMAIIgJAQQgHgHgMAAQgKAAgHAHQgHAHAAAOQAAAbAZAAQALAAAJgHIAHAQQgIAFgIACQgGABgJAAQgSAAgNgLg");
	this.shape_34.setTransform(173.3,25,0.534,0.534);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgeAhQgLgNAAgUQAAgTAMgNQAKgMATAAQAUAAALAMQALANAAATQAAAVgLAMQgMAMgTAAQgTAAgLgMgAgOgUQgFAHgBANQAAAdAUAAQAJAAAGgIQAGgHAAgOQgBgcgUAAQgIAAgGAIg");
	this.shape_35.setTransform(168.5,25,0.534,0.534);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgYAiQgMgMAAgVQAAgUAMgNQANgMAVAAQAPAAAMAIIgJAQQgHgHgMAAQgKAAgHAHQgHAIAAANQAAAbAZAAQAMAAAIgHIAHAQQgHAFgIACQgHABgJAAQgTAAgLgLg");
	this.shape_36.setTransform(163.6,25,0.534,0.534);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgeAiQgMgMAAgVQAAgUANgNQANgMARAAQATAAALALQAMALAAASIgCAKIg9AAQAAALAHAFQAHAGAKAAQANAAAIgHIAIAQQgMAIgUAAQgTAAgMgLgAgUgIIAqAAQgCgTgTAAQgQAAgFATg");
	this.shape_37.setTransform(158.8,25,0.534,0.534);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgqAaQAIAAAGgFQAGgHADgOQAEgQAAgWIAAgFIA6AAIAABWIgUAAIAAhGIgWAAQAAAQgDARQgEAQgFAIQgHAJgGACQgHADgLAAg");
	this.shape_38.setTransform(153.3,25.1,0.534,0.534);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAfAsIAAhXIAUAAIAABXgAgyAsIAAhXIAUAAIAAAgIAPgBQAPAAAJAHQAJAGAAAPQAAAcghAAgAgeADIAAAZIANAAQAJAAAEgEQADgDAAgGQAAgFgEgEQgFgEgHAAg");
	this.shape_39.setTransform(147.5,25,0.534,0.534);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AARAsIAAhFIghAAIAABFIgVAAIAAhXIBLAAIAABXg");
	this.shape_40.setTransform(141.6,25,0.534,0.534);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AALAtIAKgyIABgKQAAgLgNAAQgKAAgJAJIgMA+IgUAAIAMhBIAAgFQAAgIgBgHIATgEIACAKQAKgJAQAAQAbAAAAAZIgBAKIgKA1g");
	this.shape_41.setTransform(131,25,0.534,0.534);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgJAKQgFgEAAgGQAAgGAFgDQAEgFAFAAQAGAAAFAFQADAEAAAFQAAAFgDAFQgFAFgGAAQgFAAgEgFg");
	this.shape_42.setTransform(121.5,26.8,0.534,0.534);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AABA8IAAhVIgXAPIAAgVQAXgMANgQIAJAAIAAB3g");
	this.shape_43.setTransform(117.1,24.2,0.534,0.534);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgUBPIAAgTIAUAAIAAh4IgUAAIAAgSIApAAIAACdg");
	this.shape_44.setTransform(178.9,15.1,0.534,0.534);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgeAiQgMgMAAgVQAAgTANgNQANgNARAAQATAAALALQAMAMAAARIgCAKIg9AAQAAAKAHAHQAHAFAKAAQAOAAAHgHIAIAQQgKAIgWAAQgUAAgLgLgAgUgIIAqAAQgCgTgTAAQgQAAgFATg");
	this.shape_45.setTransform(174.6,15.2,0.534,0.534);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgDAsIgnhXIAVAAIAVA0IAWg0IAVAAIgoBXg");
	this.shape_46.setTransform(169.7,15.2,0.534,0.534);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgKArQgDgFAAgFQAAgGADgFQAFgEAFAAQAGAAAFAEQAEAEAAAHQAAAGgEAEQgGAFgFAAQgFAAgFgFgAgKgWQgDgEAAgGQAAgGADgFQAEgEAGAAQAGAAAFAEQAEAFAAAGQAAAHgEADQgGAEgFABQgFgBgFgEg");
	this.shape_47.setTransform(165.6,15.2,0.534,0.534);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AglAMIAAg3IAUAAIAAA2QAAAQAPAAQAHAAAFgDQAGgEACgEIAAg7IAUAAIAABWIgUAAIAAgHQgEAEgIACQgGACgHAAQgeAAAAggg");
	this.shape_48.setTransform(161.4,15.2,0.534,0.534);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AASA+IAAg1QAAgJgFgDQgFgFgIAAQgEAAgFACQgGADgCADIAAA+IgUAAIAAh2IAUgFIAAArQAJgIAMAAQAQAAAJAKQAJAJAAAQIAAA1g");
	this.shape_49.setTransform(156.1,14.2,0.534,0.534);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgUBPIAAidIApAAIAAASIgVAAIAAB4IAVAAIAAATg");
	this.shape_50.setTransform(149,15.1,0.534,0.534);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgdAsIAAhWIAVAAIAAAJQAIgKANAAQALgBAFAEIgIARQgFgEgHAAQgHAAgFAHQgFAGAAAKIAAAwg");
	this.shape_51.setTransform(142.9,15.1,0.534,0.534);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgeAiQgLgNAAgUQAAgUAMgMQANgNARAAQASAAAMALQALALAAASIgBAKIg+AAQACALAGAGQAHAFAKAAQAOAAAHgHIAIAQQgLAIgWAAQgTAAgLgLgAgUgIIArAAQgDgTgTAAQgRAAgEATg");
	this.shape_52.setTransform(138.2,15.2,0.534,0.534);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgDAsIgohXIAXAAIAUA0IAWg0IAVAAIgnBXg");
	this.shape_53.setTransform(133.3,15.2,0.534,0.534);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgeAhQgLgNAAgUQAAgTAMgNQAMgMARAAQAUAAALAMQALANAAATQAAAUgMANQgKAMgUAAQgTAAgLgMgAgOgUQgGAHABANQgBAdAUAAQAKAAAFgIQAGgHgBgOQAAgbgUAAQgJAAgFAHg");
	this.shape_54.setTransform(128.4,15.2,0.534,0.534);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgeAhQgLgNAAgUQAAgTAMgNQAMgMARAAQAUAAALAMQALAMAAAUQAAAUgLANQgLAMgUAAQgTAAgLgMgAgOgUQgGAHABANQgBAdAUAAQAKAAAFgIQAGgHAAgOQAAgbgVAAQgJAAgFAHg");
	this.shape_55.setTransform(123.3,15.2,0.534,0.534);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAYA7IAAg1IgvAAIAAA1IgVAAIAAh2IAVAAIAAAvIAvAAIAAgvIAVAAIAAB2g");
	this.shape_56.setTransform(117.8,14.3,0.534,0.534);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AilFpIDArRICLAAIi/LRg");
	this.shape_57.setTransform(227.3,7.2,0.534,0.534);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#CB0927").s().p("AjFFdIC7q5IDQAAIi7K5g");
	this.shape_58.setTransform(223.7,40.9,0.534,0.534);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#D1D1D1").s().p("AkkIuIBwmjIDRAAIC7q5IBNAAIkqRcg");
	this.shape_59.setTransform(222.8,52.1,0.534,0.534);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#DC052B").s().p("AxyHEIDyuHIfzAAIjyOHg");
	this.shape_60.setTransform(164.8,29.9,0.66,0.66);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[]},74).wait(286));

	// pic0
	this.instance_3 = new lib.pic0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(300,-4,0.441,0.442);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},74).wait(286));

	// mask-in-out (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_62 = new cjs.Graphics().p("Egi9ASOMAZlgkbMAsWAAAMAAAAkbg");
	var mask_1_graphics_63 = new cjs.Graphics().p("EgiGASOMAV0gkbMAuZAAAMAAAAkbg");
	var mask_1_graphics_64 = new cjs.Graphics().p("EghVASOMASbgkbMAwQAAAMAAAAkbg");
	var mask_1_graphics_65 = new cjs.Graphics().p("EggpASOMAPZgkbMAx6AAAMAAAAkbg");
	var mask_1_graphics_66 = new cjs.Graphics().p("EggCASOMAMtgkbMAzYAAAMAAAAkbg");
	var mask_1_graphics_67 = new cjs.Graphics().p("A/gSOMAKYgkbMA0pAAAMAAAAkbg");
	var mask_1_graphics_68 = new cjs.Graphics().p("A/ESOMAIbgkbMA1tAAAMAAAAkbg");
	var mask_1_graphics_69 = new cjs.Graphics().p("A+sSOMAG0gkbMA2lAAAMAAAAkbg");
	var mask_1_graphics_70 = new cjs.Graphics().p("A+aSOMAFkgkbMA3RAAAMAAAAkbg");
	var mask_1_graphics_71 = new cjs.Graphics().p("A+NSOMAErgkbMA3wAAAMAAAAkbg");
	var mask_1_graphics_72 = new cjs.Graphics().p("A+FSOMAEIgkbMA4DAAAMAAAAkbg");
	var mask_1_graphics_73 = new cjs.Graphics().p("A+DSOMAD9gkbMA4KAAAMAAAAkbg");
	var mask_1_graphics_137 = new cjs.Graphics().p("A/sSOMAAAgkbMBF6AAAMgZkAkbg");
	var mask_1_graphics_138 = new cjs.Graphics().p("A7eSOMAAAgkbMA7kAAAMgVxAkbg");
	var mask_1_graphics_139 = new cjs.Graphics().p("A3pSOMAAAgkbMAyNAAAMgSXAkbg");
	var mask_1_graphics_140 = new cjs.Graphics().p("A0OSOMAAAgkbMAp1AAAMgPTAkbg");
	var mask_1_graphics_141 = new cjs.Graphics().p("AxMSOMAAAgkbMAibAAAMgMmAkbg");
	var mask_1_graphics_142 = new cjs.Graphics().p("AuASOMAAAgkbIcBAAMgKQAkbg");
	var mask_1_graphics_143 = new cjs.Graphics().p("ArSSOMAAAgkbIWlAAMgIRAkbg");
	var mask_1_graphics_144 = new cjs.Graphics().p("ApESOMAAAgkbISJAAMgGpAkbg");
	var mask_1_graphics_145 = new cjs.Graphics().p("AnWSOMAAAgkbIOtAAMgFYAkbg");
	var mask_1_graphics_146 = new cjs.Graphics().p("AmHSOMAAAgkbIMPAAMgEfAkbg");
	var mask_1_graphics_147 = new cjs.Graphics().p("AlYSOMAAAgkbIKxAAMgD8Akbg");
	var mask_1_graphics_148 = new cjs.Graphics().p("AlISOMAAAgkbIKRAAMgDxAkbg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_1_graphics_62,x:549,y:92.5}).wait(1).to({graphics:mask_1_graphics_63,x:489,y:92.5}).wait(1).to({graphics:mask_1_graphics_64,x:434.7,y:92.5}).wait(1).to({graphics:mask_1_graphics_65,x:386.2,y:92.5}).wait(1).to({graphics:mask_1_graphics_66,x:343.3,y:92.5}).wait(1).to({graphics:mask_1_graphics_67,x:306.2,y:92.5}).wait(1).to({graphics:mask_1_graphics_68,x:274.8,y:92.5}).wait(1).to({graphics:mask_1_graphics_69,x:249,y:92.5}).wait(1).to({graphics:mask_1_graphics_70,x:229,y:92.5}).wait(1).to({graphics:mask_1_graphics_71,x:214.8,y:92.5}).wait(1).to({graphics:mask_1_graphics_72,x:206.2,y:92.5}).wait(1).to({graphics:mask_1_graphics_73,x:203.3,y:92.5}).wait(1).to({graphics:null,x:0,y:0}).wait(63).to({graphics:mask_1_graphics_137,x:244.6,y:92.4}).wait(1).to({graphics:mask_1_graphics_138,x:205.4,y:92.4}).wait(1).to({graphics:mask_1_graphics_139,x:170,y:92.4}).wait(1).to({graphics:mask_1_graphics_140,x:138.3,y:92.4}).wait(1).to({graphics:mask_1_graphics_141,x:110.3,y:92.4}).wait(1).to({graphics:mask_1_graphics_142,x:82.3,y:92.4}).wait(1).to({graphics:mask_1_graphics_143,x:58.6,y:92.4}).wait(1).to({graphics:mask_1_graphics_144,x:39.3,y:92.4}).wait(1).to({graphics:mask_1_graphics_145,x:24.2,y:92.4}).wait(1).to({graphics:mask_1_graphics_146,x:13.4,y:92.4}).wait(1).to({graphics:mask_1_graphics_147,x:6.9,y:92.4}).wait(1).to({graphics:mask_1_graphics_148,x:4.8,y:92.4}).wait(212));

	// pic1
	this.instance_4 = new lib.pic1_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(331.8,32.2,0.265,0.265,0,0,0,0.2,0);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(62).to({_off:false},0).to({_off:true},87).wait(211));

	// text1
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgJAKQgFgDAAgHQAAgFAFgEQAEgFAFAAQAHAAADAFQAFAEAAAFQAAAHgFADQgDAFgHAAQgFAAgEgFg");
	this.shape_61.setTransform(203.8,37.5,0.627,0.627);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgdAsIAAhXIA7AAIAAASIgnAAIAABFg");
	this.shape_62.setTransform(199.8,35.4,0.627,0.627);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgcA1QgKgLAAgQQAAgIAFgKQAGgIAIgFQgIgFgDgGQgEgGAAgJQAAgOAKgHQAJgJAPAAQARAAAIAJQAKAIAAANQAAAIgGAIQgFAIgGADQAIAEAGAIQAHAKAAAIQAAAQgLAKQgKAJgSAAQgSAAgKgIgAgRAaQAAAHAFAFQAFAFAHABQAIAAAFgFQAFgFAAgGQAAgOgUgLQgPAJAAAOgAgNgfQAAAGAFAFQAGAFAEACQAEgCAEgGQADgFAAgFQAAgFgDgEQgEgDgGAAQgNAAAAAMg");
	this.shape_63.setTransform(191,34.4,0.627,0.627);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgfAuQgLgPAAgiQAAgYAMgQQALgRAUgBQAqABAAA8QAAAbgMASQgLAQgUAAQgWAAgJgPgAgUgBQAAAXAFALQAEAMALAAQAKgBAGgJQAFgMAAgYQAAgXgFgKQgFgJgKAAQgVgBAAArg");
	this.shape_64.setTransform(184.9,34.4,0.627,0.627);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgWAyQAYgOAKgWQgGADgHAAQgRAAgKgLQgKgKAAgRQAAgRAKgMQALgLAQAAQAoAAAAA1QAAAUgQAXQgQAWgSAFgAgMglQgFAGAAAJQAAALAFAFQAFAGAHAAQARAAAAgVQAAgWgRAAQgIAAgEAGg");
	this.shape_65.setTransform(178.7,34.4,0.627,0.627);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AABA8IAAhVIgXAPIAAgVQAWgLAOgRIAJAAIAAB3g");
	this.shape_66.setTransform(172.4,34.4,0.627,0.627);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgkAsIAAhWIAlgBQAPAAAJAGQAIAHAAALQAAAGgEAEQgDAFgGADQARAFAAAQQAAALgJAHQgJAGgRAAgAgQAcIARABQAQAAAAgMQAAgGgFgDQgFgCgGAAIgRAAgAgQgbIAAATIAQAAQANAAAAgKQAAgEgDgDQgEgDgFAAg");
	this.shape_67.setTransform(163.7,35.4,0.627,0.627);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgYAiQgMgMAAgVQAAgUAMgNQANgMAVAAQAPAAAMAIIgJAQQgIgHgLAAQgKAAgHAHQgHAIAAANQAAAbAZAAQAMAAAIgHIAHAQQgHAFgIACQgHABgJAAQgTAAgLgLg");
	this.shape_68.setTransform(154.8,35.4,0.627,0.627);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgUAMgMQALgMASAAQAUAAALAMQALAMAAAUQAAAWgMALQgLAMgTAAQgTAAgLgMgAgOgUQgGAIAAAMQAAAdAUAAQAJAAAGgIQAGgIAAgNQAAgcgVAAQgIAAgGAIg");
	this.shape_69.setTransform(149.1,35.4,0.627,0.627);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgZAiQgLgNAAgUQAAgUAMgNQANgMAVAAQAPAAAMAIIgJAQQgHgHgMAAQgKAAgHAHQgHAIAAANQAAAbAZAAQAMAAAIgHIAHAQQgHAFgJACQgGABgJAAQgSAAgNgLg");
	this.shape_70.setTransform(143.5,35.4,0.627,0.627);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgeAiQgMgMAAgVQAAgUANgNQAMgMASAAQATAAALALQALAMAAARIgBAKIg+AAQABALAHAGQAHAFAJAAQAOAAAIgHIAHAQQgLAIgUAAQgTAAgMgLgAgUgIIAqAAQgDgTgSAAQgQAAgFATg");
	this.shape_71.setTransform(137.7,35.4,0.627,0.627);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgpAaQAHAAAGgFQAFgGAEgPQAEgSAAgUIAAgFIA5AAIAABWIgTAAIAAhGIgVAAQgBASgDAPQgDAOgHAKQgGAJgGACQgIADgJAAg");
	this.shape_72.setTransform(131.4,35.5,0.627,0.627);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AAfAsIAAhXIAUAAIAABXgAgyAsIAAhXIATAAIAAAgIAQgBQAPAAAJAHQAJAIAAANQAAAcghAAgAgfADIAAAZIAOAAQAJAAADgEQAEgDAAgGQAAgGgEgDQgEgEgIAAg");
	this.shape_73.setTransform(124.6,35.4,0.627,0.627);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AARAsIAAhFIghAAIAABFIgVAAIAAhXIBLAAIAABXg");
	this.shape_74.setTransform(117.6,35.4,0.627,0.627);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgmAuIAAhYIAUAAIAAAzIA0g1IAFAAIAABXIgVAAIAAgzIgzA2g");
	this.shape_75.setTransform(171.6,23.8,0.627,0.627);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgqAaQAIAAAGgGQAFgFAEgPQAEgSAAgTIAAgGIA6AAIAABWIgUAAIAAhGIgWAAQAAARgDAQQgEAQgFAIQgGAIgHAEQgIACgKAAg");
	this.shape_76.setTransform(165.1,23.9,0.627,0.627);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AATAqQgDgCgCgFQgDAFgHADQgEACgJAAQgPAAgHgHQgIgGAAgNQAAgPALgIQALgJAVAAIAIACQAAgQgSAAQgLAAgJAEIgEgQQAKgFAPAAQATAAAJAJQAKAJAAAaIAAARQAAASAHAEQgDAFgDAAIgHABQgFAAgDgDgAgTARQAAAMAOAAQARAAAAgSIAAgIIgIgBQgXAAAAAPg");
	this.shape_77.setTransform(159.4,23.8,0.627,0.627);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAfA7IAAgfIg9AAIAAAfIgRAAIAAgvIAIAAQAJgMAFgOQAFgTAAgOIAAgLIA4AAIAABGIAMAAIAAAvgAgTAMIAkAAIAAg2IgVAAQgBAjgOATg");
	this.shape_78.setTransform(153.3,24.8,0.627,0.627);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgiAkIAKgQQAKAIAOABQAOAAAAgLQAAgMgQAAIgMAAIAAgPIANABQANAAAAgKQAAgFgDgCQgDgDgGAAQgLAAgLAHIgIgQQAQgIAPABQAOAAAJAGQAJAIAAAKQAAAOgOAFQAHABAFAGQAEAFAAAGQAAAOgKAIQgKAGgQABQgUAAgNgKg");
	this.shape_79.setTransform(147.4,23.8,0.627,0.627);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgeAhQgLgNAAgUQAAgTAMgMQALgNASAAQAUAAALAMQALANAAATQAAAVgLAMQgMAMgTAAQgTAAgLgMgAgOgUQgFAGgBAOQAAAdAUAAQAJAAAGgHQAGgHAAgPQgBgbgUAAQgJAAgFAHg");
	this.shape_80.setTransform(142,23.8,0.627,0.627);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgYAiQgMgLAAgWQAAgTAMgNQANgNAVAAQAQAAALAJIgJAPQgIgHgLAAQgLAAgGAIQgHAIAAAMQAAAcAZAAQAMAAAIgIIAHAQQgKAGgFABIgQABQgTAAgLgLg");
	this.shape_81.setTransform(136.3,23.8,0.627,0.627);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AAfArIAAhVIAUAAIAABVgAgyArIAAhVIAUAAIAAAeIAPAAQAPAAAJAHQAJAHAAAOQAAAbghAAgAgeADIAAAYIANABQAKAAADgEQADgDAAgGQAAgGgEgDQgEgEgIABg");
	this.shape_82.setTransform(126.6,23.8,0.627,0.627);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgCA8IgZhAIgMA/IgVAAIAYh2IALAAIAZBPIAZhPIAMAAIAYB2IgVAAIgMg/IgYBAg");
	this.shape_83.setTransform(118.6,22.9,0.627,0.627);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AilFpIDArRICLAAIi/LRg");
	this.shape_84.setTransform(227.3,7.2,0.534,0.534);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#CB0927").s().p("AjFFdIC7q5IDQAAIi7K5g");
	this.shape_85.setTransform(223.7,40.9,0.534,0.534);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#D1D1D1").s().p("AkkIuIBwmjIDRAAIC7q5IBNAAIkqRcg");
	this.shape_86.setTransform(222.8,52.1,0.534,0.534);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#DC052B").s().p("AxyHEIDyuHIfzAAIjyOHg");
	this.shape_87.setTransform(164.8,29.9,0.66,0.66);

	var maskedShapeInstanceList = [this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61}]},62).to({state:[]},87).wait(211));

	// mask-in-out - копия (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_137 = new cjs.Graphics().p("Egi9ASOMAZlgkbMAsWAAAMAAAAkbg");
	var mask_2_graphics_138 = new cjs.Graphics().p("EgiSASOMAV1gkbMAuwAAAMgAXAkbg");
	var mask_2_graphics_139 = new cjs.Graphics().p("EghrASOMAScgkbMAw7AAAMgAsAkbg");
	var mask_2_graphics_140 = new cjs.Graphics().p("EghIASOMAPZgkbMAy4AAAMgA+Akbg");
	var mask_2_graphics_141 = new cjs.Graphics().p("EggpASOMAMtgkbMA0mAAAMgBOAkbg");
	var mask_2_graphics_142 = new cjs.Graphics().p("EggOASOMAKYgkbMA2FAAAMgBcAkbg");
	var mask_2_graphics_143 = new cjs.Graphics().p("A/4SOMAIbgkbMA3WAAAMgBpAkbg");
	var mask_2_graphics_144 = new cjs.Graphics().p("A/lSOMAG0gkbMA4XAAAMgByAkbg");
	var mask_2_graphics_145 = new cjs.Graphics().p("A/XSOMAFkgkbMA5LAAAMgB5Akbg");
	var mask_2_graphics_146 = new cjs.Graphics().p("A/NSOMAErgkbMA5vAAAMgB/Akbg");
	var mask_2_graphics_147 = new cjs.Graphics().p("A/GSOMAEIgkbMA6FAAAMgCCAkbg");
	var mask_2_graphics_148 = new cjs.Graphics().p("A/ESOMAD9gkbMA6MAAAMgCDAkbg");
	var mask_2_graphics_211 = new cjs.Graphics().p("A/sSOMAAAgkbMBF6AAAMgZkAkbg");
	var mask_2_graphics_212 = new cjs.Graphics().p("A7eSOMAAAgkbMA7kAAAMgVxAkbg");
	var mask_2_graphics_213 = new cjs.Graphics().p("A3pSOMAAAgkbMAyNAAAMgSXAkbg");
	var mask_2_graphics_214 = new cjs.Graphics().p("A0OSOMAAAgkbMAp1AAAMgPTAkbg");
	var mask_2_graphics_215 = new cjs.Graphics().p("AxMSOMAAAgkbMAibAAAMgMmAkbg");
	var mask_2_graphics_216 = new cjs.Graphics().p("AuASOMAAAgkbIcBAAMgKQAkbg");
	var mask_2_graphics_217 = new cjs.Graphics().p("ArSSOMAAAgkbIWlAAMgIRAkbg");
	var mask_2_graphics_218 = new cjs.Graphics().p("ApESOMAAAgkbISJAAMgGpAkbg");
	var mask_2_graphics_219 = new cjs.Graphics().p("AnWSOMAAAgkbIOtAAMgFYAkbg");
	var mask_2_graphics_220 = new cjs.Graphics().p("AmHSOMAAAgkbIMPAAMgEfAkbg");
	var mask_2_graphics_221 = new cjs.Graphics().p("AlYSOMAAAgkbIKxAAMgD8Akbg");
	var mask_2_graphics_222 = new cjs.Graphics().p("AlISOMAAAgkbIKRAAMgDxAkbg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(137).to({graphics:mask_2_graphics_137,x:549,y:92.5}).wait(1).to({graphics:mask_2_graphics_138,x:490.1,y:92.5}).wait(1).to({graphics:mask_2_graphics_139,x:436.9,y:92.5}).wait(1).to({graphics:mask_2_graphics_140,x:389.2,y:92.5}).wait(1).to({graphics:mask_2_graphics_141,x:347.2,y:92.5}).wait(1).to({graphics:mask_2_graphics_142,x:310.8,y:92.5}).wait(1).to({graphics:mask_2_graphics_143,x:280,y:92.5}).wait(1).to({graphics:mask_2_graphics_144,x:254.7,y:92.5}).wait(1).to({graphics:mask_2_graphics_145,x:235.1,y:92.5}).wait(1).to({graphics:mask_2_graphics_146,x:221.1,y:92.5}).wait(1).to({graphics:mask_2_graphics_147,x:212.7,y:92.5}).wait(1).to({graphics:mask_2_graphics_148,x:209.9,y:92.5}).wait(1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_2_graphics_211,x:244.6,y:92.4}).wait(1).to({graphics:mask_2_graphics_212,x:205.4,y:92.4}).wait(1).to({graphics:mask_2_graphics_213,x:170,y:92.4}).wait(1).to({graphics:mask_2_graphics_214,x:138.3,y:92.4}).wait(1).to({graphics:mask_2_graphics_215,x:110.3,y:92.4}).wait(1).to({graphics:mask_2_graphics_216,x:82.3,y:92.4}).wait(1).to({graphics:mask_2_graphics_217,x:58.6,y:92.4}).wait(1).to({graphics:mask_2_graphics_218,x:39.3,y:92.4}).wait(1).to({graphics:mask_2_graphics_219,x:24.2,y:92.4}).wait(1).to({graphics:mask_2_graphics_220,x:13.4,y:92.4}).wait(1).to({graphics:mask_2_graphics_221,x:6.9,y:92.4}).wait(1).to({graphics:mask_2_graphics_222,x:4.8,y:92.4}).wait(138));

	// pic2
	this.instance_5 = new lib.pic2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(326.6,45,0.661,0.66,0,0,0,0.4,0.4);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(137).to({_off:false},0).to({_off:true},86).wait(137));

	// text2
	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgJAKQgFgFAAgFQAAgFAFgEQAEgFAFAAQAGAAAFAFQADADAAAGQAAAGgDAEQgFAFgGAAQgFAAgEgFg");
	this.shape_88.setTransform(185.1,43.6,0.627,0.627);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgmAuIAAhZIAUAAIAAA0IA0g2IAFAAIAABZIgUAAIAAg0Ig0A2g");
	this.shape_89.setTransform(180.2,41.5,0.627,0.627);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AAKAdQgDgXgWAAIgBAAIAAAmIgUAAIAAhXIAUAAIAAAhIABAAQAVAAADgTQACgPAPAAIAKABIAAAQIgFAAQgDAAgBAFQgEAQgSAFQATAEAFAUQABAFADAAIAEgBIAAARIgJABQgQAAgCgQg");
	this.shape_90.setTransform(174.3,41.5,0.627,0.627);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgnA9IAAh4IAUAAIAAAGQAIgHALAAQAogBAAAvQAAAUgLALQgMAMgTAAQgIAAgJgEIAAAkgAgTgmIAAAtQAGAFAHAAQANAAAGgHQAGgGAAgOQAAgOgGgIQgGgGgNAAQgIAAgFAFg");
	this.shape_91.setTransform(168.4,42.5,0.627,0.627);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgTAMgNQALgMASAAQAUAAALAMQALAMAAAUQAAAWgMALQgLAMgTAAQgTAAgLgMgAgOgUQgGAHAAANQAAAdAUAAQAJAAAGgIQAGgIAAgNQAAgcgVAAQgIAAgGAIg");
	this.shape_92.setTransform(162.2,41.5,0.627,0.627);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgeAxQgMgOAAgYQAAgOADgNQADgMAGgHQAGgJAIgFQAKgGANgCIAcgFIAEASIgnAHIgKAFQgGACgEAIQgEAGgCALQAGgHAJgFQAIgFAHAAQARAAALALQALALAAATQgBASgKANQgLANgVAAQgTAAgLgOgAgPABQgFAHAAALQAAANAGAHQAGAHAJAAQAKABAGgIQAGgIAAgLQgBgNgGgGQgFgHgKAAQgIABgIAGg");
	this.shape_93.setTransform(156.2,40.4,0.627,0.627);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AggArQAXAAAAgMQAAgJgGgPIgchDIAVAAIAXA8IAWg8IAVAAIgmBlQgEAJgJAFQgLAGgOAAg");
	this.shape_94.setTransform(150.3,42.6,0.627,0.627);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgkAsIAAhWIAlgBQAPAAAJAGQAIAHAAALQAAAGgEAEQgCAEgHAEQARAFAAAQQAAALgJAGQgJAHgRAAgAgQAcIARABQAQAAAAgMQAAgGgFgDQgFgCgGAAIgRAAgAgQgbIAAATIAQAAQANAAAAgKQAAgEgDgDQgEgDgFAAg");
	this.shape_95.setTransform(141.6,41.5,0.627,0.627);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgTALgNQAMgMASAAQAUAAALAMQALAMAAAUQAAAVgMAMQgLAMgTAAQgTAAgLgMgAgOgUQgGAIAAAMQAAAdAUAAQAKAAAFgIQAGgHAAgOQAAgcgVAAQgIAAgGAIg");
	this.shape_96.setTransform(135.6,41.5,0.627,0.627);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AARAsIAAhFIghAAIAABFIgVAAIAAhXIBLAAIAABXg");
	this.shape_97.setTransform(129.6,41.5,0.627,0.627);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgmAuIAAhZIAUAAIAAA0IAzg2IAGAAIAABZIgUAAIAAg0IgzA2g");
	this.shape_98.setTransform(123.4,41.5,0.627,0.627);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgJAsIAAhFIgZAAIAAgSIBFAAIAAASIgZAAIAABFg");
	this.shape_99.setTransform(117.7,41.5,0.627,0.627);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AAUArIgUgdIgUAdIgYAAIAigrIgggrIAYAAIASAcIATgcIAYAAIghAqIAjAsg");
	this.shape_100.setTransform(198.8,29.9,0.627,0.627);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgeAiQgMgMAAgVQAAgTANgNQANgNARAAQASAAAMALQAMAMAAARIgCAKIg+AAQABALAHAGQAHAGAJAAQAOAAAIgIIAHAQQgKAIgWAAQgTAAgLgLgAgUgIIAqAAQgCgTgTAAQgQAAgFATg");
	this.shape_101.setTransform(192.9,29.9,0.627,0.627);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgYAiQgMgLAAgWQAAgUAMgMQANgNAVAAQAQAAALAJIgJAPQgIgHgLAAQgKAAgHAHQgHAJAAAMQAAAcAZAAQALAAAJgIIAHAQQgIAGgHABIgQABQgTAAgLgLg");
	this.shape_102.setTransform(187.2,29.9,0.627,0.627);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgkAsIAAhWIAlgBQAPAAAIAHQAJAGAAALQAAAFgEAGQgEAEgGACQASAGAAAPQAAAMgJAHQgIAGgSAAgAgQAcIARABQAQAAAAgMQAAgFgFgEQgFgDgGAAIgRAAgAgQgbIAAATIAQAAQANAAAAgKQAAgFgDgCQgDgDgGAAIgRABg");
	this.shape_103.setTransform(181.8,29.9,0.627,0.627);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AglAsIAAgRIADAAQAEABABgFQABgHAFgFQAGgGAGgBQgVgEAAgSQAAgLAJgIQAIgHARAAIAkABIAABWIgUAAIAAghIgFAAQgWABgDATQgBAOgQAAIgIAAgAgIgZQgDADAAAFQAAAGAFADQAEAEAHAAIANABIAAgZIgQgBQgFAAgFAEg");
	this.shape_104.setTransform(172.5,29.9,0.627,0.627);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgqAaQAJAAAFgGQAFgEAEgQQAEgSAAgTIAAgGIA6AAIAABWIgUAAIAAhGIgWAAQAAASgDAPQgDAPgGAJQgGAIgHADQgJADgJAAg");
	this.shape_105.setTransform(166.4,29.9,0.627,0.627);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AAfA7IAAgfIg9AAIAAAfIgRAAIAAgvIAIAAQAJgMAFgOQAEgRAAgQIAAgLIA5AAIAABGIAMAAIAAAvgAgTAMIAkAAIAAg2IgVAAQgBAjgOATg");
	this.shape_106.setTransform(160.2,30.9,0.627,0.627);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgmAtIAAhYIAUAAIAAA0IAzg2IAGAAIAABYIgUAAIAAgzIg0A1g");
	this.shape_107.setTransform(150.7,29.9,0.627,0.627);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgqAaQAIAAAGgGQAFgEAEgQQAEgQAAgVIAAgGIA6AAIAABWIgUAAIAAhGIgWAAQgBAVgCAMQgEAQgFAIQgGAIgHADQgIADgKAAg");
	this.shape_108.setTransform(144.1,29.9,0.627,0.627);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgeAiQgMgLAAgWQABgUAMgMQANgNAQAAQAUAAALALQALAMAAARIgBAKIg9AAQAAALAHAGQAGAGALAAQANAAAHgIIAJAQQgLAIgWAAQgTAAgLgLgAgUgIIAqAAQgCgTgTAAQgQAAgFATg");
	this.shape_109.setTransform(138.2,29.9,0.627,0.627);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AAfA7IAAgfIg9AAIAAAfIgRAAIAAgvIAIAAQAJgMAFgOQAEgRAAgQIAAgLIA5AAIAABGIAMAAIAAAvgAgTAMIAkAAIAAg2IgVAAQgBAigOAUg");
	this.shape_110.setTransform(131.9,30.9,0.627,0.627);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgTAMgMQALgNASAAQAUAAALAMQALANAAATQAAAVgMAMQgMAMgSAAQgSAAgMgMgAgOgUQgGAHAAANQAAAdAUAAQAJAAAGgIQAGgHgBgOQAAgbgUAAQgIAAgGAHg");
	this.shape_111.setTransform(125.7,29.9,0.627,0.627);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgDAtIgWgsIgCgDIgBAAIgHAuIgUAAIARhYIAIAAIAeA9IAgg9IAHAAIARBYIgVAAIgHgpIgBgFIAAAAIgDAHIgVAog");
	this.shape_112.setTransform(118.9,29.9,0.627,0.627);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgDAtIgWgsIgCgEIAAAAIgHAvIgVAAIARhYIAIAAIAfA9IAeg9IAIAAIARBYIgWAAIgGgqIAAgFIgBAAIgEAIIgUAog");
	this.shape_113.setTransform(172.9,18.3,0.627,0.627);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgeAiQgLgLgBgWQABgUAMgNQAMgMASAAQASAAAMALQALALAAASIgBAKIg+AAQABALAGAFQAIAGAJAAQAOAAAHgHIAIAQQgLAIgUAAQgUAAgLgLgAgUgIIAqAAQgDgTgSAAQgQAAgFATg");
	this.shape_114.setTransform(166.1,18.3,0.627,0.627);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AATAqQgDgDgCgEQgCAEgIADQgFADgIAAQgOAAgIgHQgIgHAAgNQAAgOALgIQALgJAVAAIAIABQAAgPgSAAQgMAAgHADIgFgPQAKgFAPAAQATAAAKAJQAJAKAAAYIAAASQAAARAHAFQgCADgEACIgHABQgEAAgEgDgAgSARQAAAMANAAQARAAAAgSIAAgIIgHgBQgXAAAAAPg");
	this.shape_115.setTransform(160.4,18.3,0.627,0.627);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgdAsIAAhXIA7AAIAAASIgnAAIAABFg");
	this.shape_116.setTransform(155.3,18.3,0.627,0.627);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AATAqQgDgDgCgEQgDAFgHACQgFADgIAAQgOAAgIgHQgIgHAAgNQAAgOALgIQALgJAVAAIAIABQAAgPgSAAQgMAAgIADIgEgPQAKgFAPAAQATAAAJAJQAKAJAAAZIAAASQAAASAHAEQgCADgEACIgHABQgFAAgDgDgAgTARQAAAMAOAAQARAAAAgSIAAgIIgIgBQgXAAAAAPg");
	this.shape_117.setTransform(149.9,18.3,0.627,0.627);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgqAaQAJAAAFgGQAFgFAEgPQAEgSAAgUIAAgFIA6AAIAABWIgUAAIAAhGIgWAAQAAAQgDARQgEAQgFAIQgGAIgHADQgHADgLAAg");
	this.shape_118.setTransform(143.7,18.3,0.627,0.627);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AAeA7IAAgeIg7AAIAAAeIgSAAIAAguIAIAAQAJgMAEgPQAFgPABgSIAAgLIA4AAIAABHIAMAAIAAAugAgTANIAkAAIAAg3IgVAAQgBAjgOAUg");
	this.shape_119.setTransform(137.5,19.3,0.627,0.627);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgeAiQgMgMAAgVQAAgUANgNQANgMAQAAQAUAAALALQAMALAAASIgCAKIg+AAQACALAGAFQAHAGAJAAQAPAAAHgHIAIAQQgMAIgVAAQgRAAgNgLgAgTgIIApAAQgCgTgTAAQgQAAgEATg");
	this.shape_120.setTransform(131.3,18.3,0.627,0.627);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgoA+IAAh5IAVAAIAAAGQAHgIAMAAQAoAAAAAuQAAAUgLANQgMALgSAAQgJAAgJgEIAAAlgAgTglIAAAtQAGAEAHAAQANAAAGgHQAGgHAAgOQABgOgHgHQgFgHgOAAQgHAAgGAHg");
	this.shape_121.setTransform(125.3,19.3,0.627,0.627);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AAWA8IAAhkIgrAAIAABkIgVAAIAAh3IBVAAIAAB3g");
	this.shape_122.setTransform(118.6,17.3,0.627,0.627);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AilFpIDArRICLAAIi/LRg");
	this.shape_123.setTransform(227.3,7.2,0.534,0.534);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#CB0927").s().p("AjFFdIC7q5IDQAAIi7K5g");
	this.shape_124.setTransform(223.7,40.9,0.534,0.534);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#D1D1D1").s().p("AkkIuIBwmjIDRAAIC7q5IBNAAIkqRcg");
	this.shape_125.setTransform(222.8,52.1,0.534,0.534);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#DC052B").s().p("AxyHEIDyuHIfzAAIjyOHg");
	this.shape_126.setTransform(164.8,29.9,0.66,0.66);

	var maskedShapeInstanceList = [this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88}]},137).to({state:[]},86).wait(137));

	// mask-in-out - копия: 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_211 = new cjs.Graphics().p("Egi9ASOMAZlgkbMAsWAAAMAAAAkbg");
	var mask_3_graphics_212 = new cjs.Graphics().p("EgiQASOMAV1gkbMAusAAAMgATAkbg");
	var mask_3_graphics_213 = new cjs.Graphics().p("EghnASOMAScgkbMAwzAAAMgAkAkbg");
	var mask_3_graphics_214 = new cjs.Graphics().p("EghCASOMAPZgkbMAysAAAMgAyAkbg");
	var mask_3_graphics_215 = new cjs.Graphics().p("EggiASOMAMtgkbMA0YAAAMgBAAkbg");
	var mask_3_graphics_216 = new cjs.Graphics().p("EggGASOMAKZgkbMA10AAAMgBMAkbg");
	var mask_3_graphics_217 = new cjs.Graphics().p("A/uSOMAIagkbMA3DAAAMgBVAkbg");
	var mask_3_graphics_218 = new cjs.Graphics().p("A/bSOMAG0gkbMA4DAAAMgBeAkbg");
	var mask_3_graphics_219 = new cjs.Graphics().p("A/MSOMAFkgkbMA41AAAMgBkAkbg");
	var mask_3_graphics_220 = new cjs.Graphics().p("A/BSOMAEqgkbMA5ZAAAMgBoAkbg");
	var mask_3_graphics_221 = new cjs.Graphics().p("A+7SOMAEIgkbMA5vAAAMgBsAkbg");
	var mask_3_graphics_222 = new cjs.Graphics().p("A+5SOMAD9gkbMA52AAAMgBsAkbg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(211).to({graphics:mask_3_graphics_211,x:549,y:92.5}).wait(1).to({graphics:mask_3_graphics_212,x:489.9,y:92.5}).wait(1).to({graphics:mask_3_graphics_213,x:436.5,y:92.5}).wait(1).to({graphics:mask_3_graphics_214,x:388.7,y:92.5}).wait(1).to({graphics:mask_3_graphics_215,x:346.5,y:92.5}).wait(1).to({graphics:mask_3_graphics_216,x:310,y:92.5}).wait(1).to({graphics:mask_3_graphics_217,x:279,y:92.5}).wait(1).to({graphics:mask_3_graphics_218,x:253.7,y:92.5}).wait(1).to({graphics:mask_3_graphics_219,x:234,y:92.5}).wait(1).to({graphics:mask_3_graphics_220,x:220,y:92.5}).wait(1).to({graphics:mask_3_graphics_221,x:211.6,y:92.5}).wait(1).to({graphics:mask_3_graphics_222,x:208.7,y:92.5}).wait(1).to({graphics:null,x:0,y:0}).wait(137));

	// pic3
	this.instance_6 = new lib.eeer();
	this.instance_6.parent = this;
	this.instance_6.setTransform(333.2,25.6,0.412,0.412,0,0,0,120.1,83.7);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(211).to({_off:false},0).wait(75).to({alpha:0},8).to({_off:true},4).wait(62));

	// text3
	this.instance_7 = new lib.dfgdfg();
	this.instance_7.parent = this;
	this.instance_7.setTransform(164.8,34.9,0.66,0.66,0,0,0,114,71.2);

	this.instance_8 = new lib.Анимация1("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(162.7,34.9,0.66,0.66,0,0,0,0,0.1);
	this.instance_8._off = true;

	this.instance_9 = new lib.Анимация2("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(162.7,34.9,0.66,0.66,0,0,0,0,0.1);
	this.instance_9.alpha = 0;

	var maskedShapeInstanceList = [this.instance_7,this.instance_8,this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},211).to({state:[{t:this.instance_8}]},75).to({state:[{t:this.instance_9}]},8).to({state:[]},4).wait(62));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(286).to({_off:false},0).to({_off:true,alpha:0},8,cjs.Ease.get(1)).wait(66));

	// bg
	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.lf(["#DBDBDB","#E9E9E9","#8A8A8A"],[0,0.514,0.984],122.1,-313.5,-51,131.1).s().p("Aq6cMMAOZg4XIHcAAMgOaA4Xg");
	this.shape_127.setTransform(447.3,37.1,0.309,0.249,-2.7,0,0,-0.1,0);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.lf(["#DBDBDB","#E9E9E9","#8A8A8A"],[0,0.514,0.984],122.1,-313.5,-51,131.1).s().p("Aq6cMMAOZg4XIHcAAMgOaA4Xg");
	this.shape_128.setTransform(36.5,42.3,0.471,0.289,-6.8,0,0,-0.5,0.3);

	this.instance_10 = new lib.bg2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,0,0.845,0.163);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.shape_128},{t:this.shape_127}]}).wait(360));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(231.6,16.4,471,111.6);
// library properties:
lib.properties = {
	width: 468,
	height: 60,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/468x60_atlas_P_.png", id:"468x60_atlas_P_"},
		{src:"images/468x60_atlas_NP_.jpg", id:"468x60_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;