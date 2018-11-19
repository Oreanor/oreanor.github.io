(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"728x90_atlas_P_", frames: [[364,0,69,260],[435,0,60,260],[0,0,210,278],[212,0,150,290],[0,280,150,136]]}
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
	this.spriteSheet = ss["728x90_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2b = function() {
	this.spriteSheet = ss["728x90_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["728x90_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["728x90_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,554,368);


(lib.pic0 = function() {
	this.spriteSheet = ss["728x90_atlas_P_"];
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
	this.shape.setTransform(566.2,-303.4,0.831,0.831);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAfAzIAAhlIASAAIAABlgAgxAzIAAhlIASAAIAAAmIANgBQASAAAJAJQAJAHAAAQQAAAOgJAKQgJAIgTAAgAgfACIAAAiIAJAAQANAAAGgFQADgFAAgIQAAgIgEgFQgGgEgLAAg");
	this.shape_1.setTransform(556.6,-303.5,0.831,0.831);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAVAzIAAguIgoAAIAAAuIgTAAIAAhlIATAAIAAAoIAoAAIAAgoIASAAIAABlg");
	this.shape_2.setTransform(547.5,-303.5,0.831,0.831);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAUAzIAAguIgnAAIAAAuIgSAAIAAhlIASAAIAAAoIAnAAIAAgoIASAAIAABlg");
	this.shape_3.setTransform(539.4,-303.5,0.831,0.831);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghAmQgLgOAAgYQAAgVAMgQQAMgPAUAAQAVAAAMANQAMAPAAAYQAAAYgMAOQgNAPgVAAQgVAAgLgPgAgSgaQgHAJAAARQAAASAGAKQAGAJAMAAQAMAAAIgKQAHgJAAgSQAAgkgaAAQgMAAgGAKg");
	this.shape_4.setTransform(531.2,-303.5,0.831,0.831);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgnA1IAAhnIASAAIAABDIA1hFIAIAAIAABnIgTAAIAAhEIg0BGg");
	this.shape_5.setTransform(522.8,-303.5,0.831,0.831);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAaBCIAAgeIhDAAIAAhlIASAAIAABWIAjAAIAAhWIASAAIAABWIAMAAIAAAtg");
	this.shape_6.setTransform(514.9,-302.3,0.831,0.831);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAZA0IgIgVIgiAAIgHAVIgUAAIAphnIAHAAIApBngAgLARIAXAAIgMgkg");
	this.shape_7.setTransform(506.8,-303.5,0.831,0.831);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgiA0IAAhmIAdgBQAQAAAIAHQAKAHgBAMQAAANgNAHQATAGAAAUQAAAOgKAIQgKAJgRAAgAgQAlIAKAAQAJAAAHgEQAGgEgBgKQAAgJgEgEQgGgEgLAAIgKAAgAgQgjIAAAYIAKAAQAQAAAAgNQAAgMgPAAg");
	this.shape_8.setTransform(499.6,-303.5,0.831,0.831);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AghAmQgLgOAAgYQAAgVAMgQQAMgPAUAAQAWAAALANQAMAOAAAZQAAAYgNAOQgMAPgVAAQgVAAgLgPgAgTgaQgGAKAAAQQAAASAGAKQAGAJAMAAQAMAAAIgKQAHgJAAgSQAAgkgaAAQgMAAgHAKg");
	this.shape_9.setTransform(491.7,-303.5,0.831,0.831);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAVAzIAAguIgoAAIAAAuIgSAAIAAhlIASAAIAAAoIAoAAIAAgoIARAAIAABlg");
	this.shape_10.setTransform(483.4,-303.5,0.831,0.831);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAUAzIAAguIgoAAIAAAuIgSAAIAAhlIASAAIAAAoIAoAAIAAgoIATAAIAABlg");
	this.shape_11.setTransform(475.3,-303.5,0.831,0.831);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgnA1IAAhnIASAAIAABDIA1hFIAIAAIAABnIgTAAIAAhEIg0BGg");
	this.shape_12.setTransform(467.1,-303.5,0.831,0.831);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAVAzIAAguIgoAAIAAAuIgSAAIAAhlIASAAIAAAoIAoAAIAAgoIARAAIAABlg");
	this.shape_13.setTransform(455.2,-303.5,0.831,0.831);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AggAzIAAhlIBBAAIAAAQIgvAAIAAAYIAhAAIAAAPIghAAIAAAeIAuAAIAAAQg");
	this.shape_14.setTransform(447.9,-303.5,0.831,0.831);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAiBCIAAgeIhDAAIAAAeIgQAAIAAgtIAHAAQAIgJAJgUQAJgUAIglIAuAAIAABWIALAAIAAAtgAgHgJQgIAUgIAKIAsAAIAAhHIgSAAQgDAWgHATg");
	this.shape_15.setTransform(440,-302.3,0.831,0.831);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AApAvQgEgFgCgKQgEgcgWAAIAAAvIgQAAIAAgvQgXAAgEAcQgCALgEAEQgFAFgIAAIgGgBIAAgQIACAAQAEAAABgBIADgIQABgKAGgHQAGgIAKgDQgTgDgEgVIgCgHQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAIgDAAIAAgQIAGgBQAJAAAEAEQAEAGACAKQAEAVAWABIAAgpIAQAAIAAApQAKAAAHgGQAHgGACgKQABgKAEgFQAFgFAIAAIAGABIAAAQIgCAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAIgCAHQgCAIgGAHQgEAGgKADQASAFAFAXQAAAGACACQACABADAAIACAAIAAAQIgFABQgJAAgFgFg");
	this.shape_16.setTransform(430.1,-303.5,0.831,0.831);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AghAmQgLgOAAgYQAAgVAMgQQAMgPAUAAQAVAAAMANQAMAPAAAYQAAAYgMAOQgNAPgVAAQgVAAgLgPgAgSgaQgHAJAAARQAAASAGAKQAGAJAMAAQAMAAAIgKQAHgJAAgSQAAgkgaAAQgMAAgGAKg");
	this.shape_17.setTransform(420.4,-303.5,0.831,0.831);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AghA0IAAhmIAVgBQAXAAAMAIQALAHAAAQQAAAigpAAIgHAAIAAAmgAgOgBIAHAAQALAAAGgEQAFgEAAgKQABgPgZAAIgFAAg");
	this.shape_18.setTransform(412.9,-303.5,0.831,0.831);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhKCtIBclZIA5AAIhbFZg");
	this.shape_19.setTransform(588.1,-321.4,1.003,1.003);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CB0927").s().p("AhLB7IBCj1IBVAAIhCD1g");
	this.shape_20.setTransform(585.9,-297.9,1.003,1.003);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D1D1D1").s().p("Ah3DfIA3jHIBVAAIBCj2IAhAAIh4G9g");
	this.shape_21.setTransform(584.8,-287.9,1.003,1.003);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#DC052B").s().p("AzKDiIBjnDMAkyAABIh5HCg");
	this.shape_22.setTransform(495,-304.2,0.831,0.831);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ghggg, new cjs.Rectangle(393.1,-338.6,203.9,73.1), null);


(lib.dfgdfggg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMAZQgFgFgBgHIAHgBQABAGADADQADACAEAAQAEAAAEgDQADgDAAgGQAAgEgDgDQgDgEgFAAIgEABIABgFIABAAQADAAAEgCQAEgDAAgFQAAgDgDgDQgDgCgDAAQgEAAgDACQgCADgBAFIgHgBQABgHAFgEQAEgEAHAAQAEAAAEACQAEACACADQACAEAAAEQAAADgCADQgCADgEACQAFABADADQADAEAAAFQAAAIgGAFQgFAFgIAAQgHAAgFgEg");
	this.shape.setTransform(225.5,-308.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgNAYQgEgEgBgHIAHgBQABAGADACQADADAEAAQAEAAAEgEQADgEABgGQgBgGgDgDQgEgDgEAAQgDAAgDACQgDABgCACIgGgBIAFgdIAcAAIAAAHIgWAAIgDAPQAFgDAFAAQAIAAAEAFQAGAEAAAIQAAAIgFAGQgFAHgJAAQgIAAgFgFg");
	this.shape_1.setTransform(221.1,-308.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_2.setTransform(216.4,-308.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMAXQgFgHgBgQQAAgJACgGQACgHAFgDQADgDAGAAQAEAAAEACQAEABACAEIADAIIABANQAAAKgBAGQgCAGgFAEQgEADgGAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQADgFAAgOQAAgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_3.setTransform(212.1,-308.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgKAcQABgHACgJQADgKAEgIQAEgIAFgHIgbAAIAAgGIAkAAIAAAFQgFAGgGAKQgFAIgCALQgCAHAAAIg");
	this.shape_4.setTransform(207.7,-308.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMAXQgFgHgBgQQAAgJACgGQADgHADgDQAEgDAGAAQAEAAAEACQADABADAEIADAIIABANQAAAKgCAGQgBAGgFAEQgEADgGAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQAEgFAAgOQAAgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_5.setTransform(203.2,-308.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNAXQgFgHAAgPQAAgPAGgIQAFgGAIAAQAIAAADAEQAFADABAHIgHABQgBgFgCgBQgCgDgFAAIgFABQgDADgCAEQgCAFAAAJQACgEAEgCIAHgCQAHAAAFAFQAFAEAAAJQAAAFgCAFQgDAEgEADQgEACgFAAQgIAAgGgGgAgHABQgDADAAAGIACAHQABADADACQACABADAAQAEAAAEgDQACgEAAgGQAAgGgCgDQgDgDgFAAQgEAAgEADg");
	this.shape_6.setTransform(198.8,-308.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMAaQgEgEgBgHIAHgBQABAFACACQADACADAAQADAAACgBIAEgEIADgHIABgIIAAgCQgCAEgEACQgEACgDAAQgHAAgFgFQgFgEAAgJQAAgJAFgFQAFgFAIAAQAFAAAEADQAFADACAFQADAGAAAKQAAAKgDAHQgCAGgFAEQgEADgGAAQgGAAgFgDgAgHgTQgEAEAAAGQAAAGAEADQADADAEAAQAFAAADgDQADgDAAgGQAAgGgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_7.setTransform(194.3,-308.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgKAcQAAgHADgJQACgKAFgIQAEgIAGgHIgcAAIAAgGIAlAAIAAAFQgGAGgGAKQgFAIgCALQgCAHgBAIg");
	this.shape_8.setTransform(189.9,-308.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgJAcQgBgHADgJQADgKAEgIQAEgIAFgHIgbAAIAAgGIAkAAIAAAFQgFAGgFAKQgGAIgCALQgCAHAAAIg");
	this.shape_9.setTransform(185.5,-308.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_10.setTransform(180.8,-308.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgMAXQgGgHABgQQAAgJACgGQABgHAEgDQAFgDAFAAQAEAAAEACQADABADAEIAEAIIABANQAAAKgDAGQgCAGgDAEQgFADgGAAQgIAAgEgGgAgHgSQgEAFAAANQAAAOAEAFQADAEAEAAQAFAAADgEQADgFABgOQgBgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_11.setTransform(176.5,-308.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_12.setTransform(171.8,-308.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_13.setTransform(164.8,-308.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAIABQAFABACACQADACACADQACAEAAAEQAAAHgFAEQgFAFgLAAIgOAAIAAAYgAgNAAIAOAAQAHAAADgDQADgDAAgFQAAgDgBgDQgCgCgEgBIgGgBIgOAAg");
	this.shape_14.setTransform(159.3,-308.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgRAdIAAg5IAkAAIAAAHIgdAAIAAAyg");
	this.shape_15.setTransform(154.7,-308.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_16.setTransform(149.1,-308.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgMAYQgGgEAAgHIAHgBQABAGADACQADADAEAAQAEAAAEgEQAEgEAAgGQAAgGgEgDQgEgDgEAAQgEAAgCACQgDABgCACIgGgBIAGgdIAbAAIAAAHIgWAAIgDAPQAFgDAFAAQAHAAAGAFQAFAEAAAIQAAAIgEAGQgGAHgJAAQgIAAgEgFg");
	this.shape_17.setTransform(141.6,-308.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_18.setTransform(136.8,-308.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgMAXQgGgHABgQQAAgJABgGQACgHAFgDQAEgDAFAAQAFAAADACQADABADAEIAEAIIABANQAAAKgCAGQgCAGgFAEQgDADgHAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQADgFAAgOQAAgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_19.setTransform(132.6,-308.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgSAdIABgFIAEgIIAJgIQAJgIADgEQADgEAAgEQAAgEgCgDQgDgDgFAAQgEAAgEADQgCADAAAGIgHgBQAAgIAFgEQAEgFAIAAQAIAAAFAFQAEAEABAHIgBAHQgCADgEADQgDAEgHAGIgIAHIgCAEIAbAAIAAAHg");
	this.shape_20.setTransform(128.1,-308.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_21.setTransform(123.4,-308.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgMAYQgGgEAAgHIAHgBQABAGADACQADADAEAAQAFAAADgEQAEgEgBgGQABgGgEgDQgDgDgFAAQgEAAgCACQgDABgBACIgHgBIAGgdIAbAAIAAAHIgWAAIgDAPQAFgDAFAAQAHAAAGAFQAFAEAAAIQAAAIgEAGQgGAHgJAAQgHAAgFgFg");
	this.shape_22.setTransform(119.3,-308.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_23.setTransform(114.7,-308.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgMAXQgGgHABgQQAAgJACgGQABgHAEgDQAFgDAFAAQAEAAAEACQADABADAEIAEAIIABANQAAAKgDAGQgCAGgDAEQgFADgGAAQgIAAgEgGgAgHgSQgEAFAAANQAAAOAEAFQADAEAEAAQAFAAADgEQADgFABgOQgBgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_24.setTransform(110.4,-308.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgJAcQAAgHACgJQADgKAEgIQAEgIAGgHIgbAAIAAgGIAkAAIAAAFQgGAGgFAKQgGAIgCALQgCAHgBAIg");
	this.shape_25.setTransform(106,-308.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgKAcQABgHACgJQADgKAEgIQAEgIAFgHIgbAAIAAgGIAkAAIAAAFQgFAGgGAKQgFAIgCALQgCAHAAAIg");
	this.shape_26.setTransform(101.5,-308.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_27.setTransform(94.2,-308.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_28.setTransform(88.4,-308.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAQAdIAAgsIgeAsIgHAAIAAg5IAGAAIAAAtIAegtIAIAAIAAA5g");
	this.shape_29.setTransform(82.6,-308.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_30.setTransform(76.5,-305.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgMAYQgGgFAAgHQAAgGADgEQADgCAFgCQgEgBgCgDQgDgDAAgEQAAgHAFgEQAFgEAGAAQAHAAAFAEQAEAEAAAHQAAAEgBADQgCADgFABQAFACADADQADAEAAAFQAAAHgFAFQgGAFgIAAQgIAAgEgFgAgHAEQgDADAAAFIABAGIAEAEIAFABQAFAAADgDQAEgDAAgFQAAgFgEgDQgDgEgFAAQgEAAgDAEgAgGgUQgDADAAADQAAAEADADQADADADAAQAEAAADgDQADgDgBgDQABgEgDgDQgDgCgEAAQgDAAgDACg");
	this.shape_31.setTransform(73.1,-308.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_32.setTransform(67.6,-305.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAQAbIAAgMIgfAAIAAAMIgGAAIAAgSIAEAAQAHgJAAgaIAcAAIAAAjIAEAAIAAASgAgLAJIAWAAIAAgdIgPAAQgBAUgGAJg");
	this.shape_33.setTransform(64,-306.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgDAHQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_34.setTransform(58.5,-305.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAKAcIAAgeIgSAeIgIAAIAAgoIAHAAIAAAeIATgeIAHAAIAAAogAgGgUQgDgDgBgEIAEAAIADADIADABIAFgBIACgDIAFAAQAAAEgDADQgDACgFAAQgEAAgDgCg");
	this.shape_35.setTransform(55.2,-308.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgKAEIAAgHIAVAAIAAAHg");
	this.shape_36.setTransform(51.6,-307.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgSAdIABgFIAEgIIAJgIQAJgIADgEQADgEAAgEQAAgEgCgDQgDgDgFAAQgEAAgEADQgCADAAAGIgHgBQAAgIAFgEQAFgFAHAAQAIAAAFAFQAEAEABAHIgBAHQgCADgEADQgDAEgHAGIgIAHIgCAEIAbAAIAAAHg");
	this.shape_37.setTransform(48,-308.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAKAcIAAgeIgTAeIgHAAIAAgoIAHAAIAAAeIASgeIAIAAIAAAogAgHgUQgDgDAAgEIAEAAIADADIADABIAFgBIACgDIAFAAQgBAEgDADQgDACgFAAQgEAAgDgCg");
	this.shape_38.setTransform(41.5,-308.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAKAVIAAgfIgSAfIgIAAIAAgpIAHAAIAAAfIATgfIAHAAIAAApg");
	this.shape_39.setTransform(37,-307.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAIAVIgIgNIgDgFIgEgBIAAATIgHAAIAAgpIAHAAIAAASQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQABgBACgHIADgGIADgCIAFgBIACAAIAAAGIgCAAIgEABIgCAFIgDAGIgDACQADABAFAHIAHANg");
	this.shape_40.setTransform(33.3,-307.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_41.setTransform(29.4,-307.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAKAVIAAgTIgTAAIAAATIgHAAIAAgpIAHAAIAAASIATAAIAAgSIAHAAIAAApg");
	this.shape_42.setTransform(25.1,-307.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAKAVIAAgfIgSAfIgIAAIAAgpIAHAAIAAAfIATgfIAHAAIAAApg");
	this.shape_43.setTransform(20.7,-307.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAXAbIAAgMIgzAAIAAgpIAHAAIAAAjIAQAAIAAgjIAGAAIAAAjIAQAAIAAgjIAHAAIAAAjIAFAAIAAASg");
	this.shape_44.setTransform(15.3,-306.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgNAQQgGgFAAgLQAAgLAHgFQAGgFAGAAQAIAAAGAGQAFAGABAJQgBAHgCAFQgCAFgFACQgEADgGAAQgIAAgFgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQADgEABgIQgBgHgDgEQgDgEgGAAQgEAAgDAEg");
	this.shape_45.setTransform(9.6,-307.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAJABQADABAEACQACACACADQACAEAAAEQAAAHgFAEQgEAFgMAAIgOAAIAAAYgAgNAAIAOAAQAHAAADgDQADgDAAgFQAAgDgCgDQgCgCgCgBIgHgBIgOAAg");
	this.shape_46.setTransform(4.8,-308.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AARAbIAAgMIggAAIAAAMIgGAAIAAgSIAEAAQAHgJAAgaIAcAAIAAAjIAEAAIAAASgAgLAJIAWAAIAAgdIgQAAQAAAUgGAJg");
	this.shape_47.setTransform(180.7,-314.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgPAJIAHgBQAAAEADACQADACADAAQADAAACgCQADgCAAgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAIgFAAIgCAAIAAgFIAFAAIADgCQABAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAQgCgCgDAAQgEAAgDAHIgHgBQAEgMALAAQAGAAAEAEQAEAEgBAFQAAAFgEADQACAAACADQACADAAADQAAAGgEADQgFAEgGAAQgOAAgCgNg");
	this.shape_48.setTransform(176.6,-315.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgNAQQgFgGAAgKQAAgJAFgGQAGgGAIAAQAHAAAGAGQAFAGAAAJIAAACIgeAAQABAHADADQAEAEAEAAQADAAAEgCQACgCABgFIAIABQgCAHgFADQgEAEgHAAQgIAAgGgGgAgGgMQgEAEgBAFIAXAAQAAgFgDgDQgEgEgEAAQgFAAgCADg");
	this.shape_49.setTransform(172.6,-315.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgNAQQgFgFgBgLQABgLAGgFQAGgFAGAAQAIAAAGAGQAGAGgBAJQAAAHgCAFQgDAFgEACQgEADgGAAQgHAAgGgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAGAAADgEQAEgEAAgIQAAgHgEgEQgDgEgGAAQgEAAgEAEg");
	this.shape_50.setTransform(168.1,-315.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgRAdIAAg4IAGAAIAAAFQADgDADgCQACgBADAAQAFAAAFADQAEACABAFQADAFAAAGQAAAHgDAEQgCAFgEACQgEADgFAAQgDAAgCgBQgDgCgCgCIAAAUgAgHgSQgEAEAAAIQAAAHAEAEQADADAEAAQAEAAADgEQAEgEAAgHQAAgIgEgEQgDgEgEAAQgEAAgDAFg");
	this.shape_51.setTransform(163.8,-314.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAOAdIAAgyIgcAAIAAAyIgIAAIAAg5IAsAAIAAA5g");
	this.shape_52.setTransform(158.6,-316.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgDAHQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_53.setTransform(152.4,-313.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgOASQgEgDAAgFQAAgDACgDQAAgCADgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgCACQgDACgBAEIgHgBIADgHQADgDAEgBQAEgCAEAAQAFAAAEACQADABABACIACAFIABAGIAAAIIABANIABAFIgHAAQgCgCABgDIgIAEIgHACQgHAAgDgEgAgBADIgGABIgDACIgBAEQAAAAABABQAAABAAAAQAAABABAAQAAABABAAQABACAFAAQADAAADgCQADgBACgDQABgDAAgEIAAgDIgLADg");
	this.shape_54.setTransform(149.1,-315.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgQAVIAAgpIAQAAIAIABQADABACADQACADAAADIgBAFIgEAEQADAAACADQACACAAAEQAAAGgFADQgDADgIAAgAgJAPIAJAAIAIgBQACgCAAgDIgBgEQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAIgFAAIgJAAgAgJgCIAIAAIAEgBIAEgCQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgDgCgCIgHgBIgIAAg");
	this.shape_55.setTransform(144.9,-315.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAIAVIgIgNIgDgFIgEgBIAAATIgHAAIAAgpIAHAAIAAASQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQABgBACgHIADgGIADgCIAFgBIACAAIAAAGIgCAAIgEABIgCAFIgDAGIgDACQADABAFAHIAHANg");
	this.shape_56.setTransform(141.1,-315.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_57.setTransform(137.2,-315.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgNAQQgGgFAAgLQAAgLAHgFQAGgFAGAAQAIAAAGAGQAFAGABAJQgBAHgCAFQgCAFgFACQgEADgGAAQgIAAgFgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQADgEAAgIQAAgHgDgEQgDgEgGAAQgEAAgDAEg");
	this.shape_58.setTransform(132.9,-315.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAUAdIAAgvIgRAvIgFAAIgRgwIAAAwIgHAAIAAg5IALAAIAOAoIABAJIADgKIAOgnIAKAAIAAA5g");
	this.shape_59.setTransform(127.3,-316.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_60.setTransform(120.8,-313.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgLAVIAAgpIAXAAIAAAGIgQAAIAAAjg");
	this.shape_61.setTransform(118.4,-315.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgDAHQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_62.setTransform(113.4,-313.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgMAaQgEgEgBgHIAHgBQABAFACACQADACADAAQADAAACgBIAEgEIADgHIABgIIAAgCQgCAEgEACQgEACgDAAQgHAAgFgFQgFgEAAgJQAAgJAFgFQAFgFAIAAQAFAAAEADQAFADACAFQADAGAAAKQAAAKgDAHQgCAGgFAEQgEADgGAAQgGAAgFgDgAgHgTQgEAEAAAGQAAAGAEADQADADAEAAQAFAAADgDQADgDAAgGQAAgGgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_63.setTransform(110.1,-316.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_64.setTransform(105.3,-316.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_65.setTransform(101,-316.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgMAYQgFgEgBgHIAHgBQABAGADACQADADAEAAQAEAAAEgEQADgEABgGQgBgGgDgDQgEgDgEAAQgDAAgDACQgDABgCACIgGgBIAFgdIAcAAIAAAHIgWAAIgDAPQAFgDAFAAQAIAAAEAFQAGAEAAAIQAAAIgFAGQgFAHgJAAQgIAAgEgFg");
	this.shape_66.setTransform(96.8,-316);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_67.setTransform(92,-316.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_68.setTransform(87.5,-316.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgBASIAKgSIgKgRIAFAAIANARIgNASgAgQASIALgSIgLgRIAGAAIALARIgLASg");
	this.shape_69.setTransform(81.2,-315.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_70.setTransform(77.9,-313.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgRAdIAAg5IAkAAIAAAHIgdAAIAAAyg");
	this.shape_71.setTransform(74.9,-316.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_72.setTransform(71.4,-313.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_73.setTransform(67.3,-316.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_74.setTransform(63.4,-313.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgMAZQgGgDgDgHQgDgHAAgIQAAgJADgGQAEgHAGgEQAGgDAHAAQAIAAAGAEQAGAFACAIIgHABQgCgFgEgEQgEgCgFAAQgGgBgEAEQgFADgCAFQgBAFAAAGQAAAHACAFQACAFAEAEQAFACAEAAQAGAAAFgEQAEgDACgIIAHACQgCAKgGAEQgGAFgJABQgJgBgFgEg");
	this.shape_75.setTransform(59.3,-316.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAQAdIAAgsIgeAsIgHAAIAAg5IAGAAIAAAtIAegtIAIAAIAAA5g");
	this.shape_76.setTransform(51.4,-316.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AATAjIAAgNIglAAIAAANIgHAAIAAgUIAFAAQAHgKAAgfIAAgIIAhAAIAAAxIAGAAIAAAUgAgGgYIgBAUQgCALgEAIIAaAAIAAgrIgTAAg");
	this.shape_77.setTransform(45.6,-315.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_78.setTransform(40.2,-316.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AASAdIgHgSIgXAAIgGASIgIAAIAWg5IAHAAIAYA5gAgDgLIgGAQIASAAIgGgPIgDgLIgDAKg");
	this.shape_79.setTransform(34.6,-316.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AALAdIgKgQQgDgGgDgDQgDgCgEAAIAAAbIgHAAIAAg5IAHAAIAAAaQAGAAABgCQADgCACgIIAEgIIAFgEQACgCADAAIAGABIAAAGIgCAAIgCAAQgDAAgCACIgFAHQgCAIgCABIgEADQAEABAGAJIAMATg");
	this.shape_80.setTransform(29.9,-316.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AALASIgLgSIALgRIAGAAIgKARIAKASgAgDASIgNgSIANgRIAFAAIgJARIAJASg");
	this.shape_81.setTransform(25,-315.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_82.setTransform(17.5,-316.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_83.setTransform(11.3,-316.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_84.setTransform(5.1,-316.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dfgdfggg, new cjs.Rectangle(0,-322.4,229.9,20.8), null);


(lib.dfgdfg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAOAAQARAAAJAMQAJAMAAATIAAAGIgzAAQACAVASAAQALAAAJgJIAIAMQgNAMgQAAQgPAAgLgLgAgRgFIAjAAQgBgWgRAAQgOAAgDAWg");
	this.shape.setTransform(183.2,83.6,0.83,0.83);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAOAqIgTgjIgLANIAAAWIgSAAIAAhTIASAAIAAAoIAdgoIAUAAIgbAjIAdAwg");
	this.shape_1.setTransform(177,83.6,0.83,0.83);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgkA2IAAhqIARAAIAAAOQAKgPAOAAQANAAAJAKQAKAMAAAUIAAACQAAATgKALQgJALgNAAQgOAAgKgOIAAAkgAgNgeQgGAHAAAMIAAACQAAALAGAHQAGAHAHAAQAIAAAGgHQAFgHAAgLIAAgCQAAgMgGgHQgFgIgIAAQgHAAgGAIg");
	this.shape_2.setTransform(169.6,84.5,0.83,0.83);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgSIAAgBQAAgSALgMQALgMAPAAQARAAALAMQAKAMAAASIAAABQAAASgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAHAAAMIAAABQAAALAGAIQAGAIAIAAQAKAAAFgIQAGgHAAgMIAAgBQAAgLgGgIQgGgIgJAAQgIAAgGAIg");
	this.shape_3.setTransform(161.9,83.6,0.83,0.83);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaAtQgLgMABgWIAAgCQgBgXAFgMQAGgRASgEIAmgJIAEAOIgmAJQgSAFgBASQAHgOATAAQAOAAAKALQAKALAAARIAAAAQABATgLALQgKAMgRAAQgQAAgKgMgAgOgDQgFAHAAALIAAABQAAALAFAHQAHAIAHAAQAJAAAGgIQAEgHAAgLIAAgBQAAgLgFgHQgFgHgJAAQgIAAgGAHg");
	this.shape_4.setTransform(154.6,82.4,0.83,0.83);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghAyIAGgOQAEADAGAAQAGAAAEgJIgdhTIASAAIATA9IASg9IATAAIgdBVQgFALgEAGQgGAEgKAAQgJAAgIgDg");
	this.shape_5.setTransform(147.4,84.6,0.83,0.83);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbAtQgJgMgBgWIAAgCQABgXAEgMQAGgRARgEIAogJIACAOIglAJQgSAFgBASQAIgOASAAQAOAAAKALQALALAAARIAAAAQAAATgLALQgKAMgRAAQgQAAgLgMgAgNgDQgFAHgBALIAAABQABALAFAHQAGAIAHAAQAJAAAFgIQAFgHABgLIAAgBQAAgLgGgHQgFgHgJAAQgHAAgGAHg");
	this.shape_6.setTransform(137,82.4,0.83,0.83);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgSIAAgBQAAgSALgMQALgMAPAAQARAAALAMQAKAMAAASIAAABQAAASgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAHAAAMIAAABQAAALAGAIQAGAIAIAAQAJAAAGgIQAGgIAAgLIAAgBQAAgLgGgIQgGgIgJAAQgIAAgGAIg");
	this.shape_7.setTransform(129.5,83.6,0.83,0.83);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJAMAAATIAAAGIgzAAQACAVASAAQALAAAJgJIAIAMQgMAMgRAAQgPAAgLgLgAgLgVQgEAGgBAKIAiAAQgBgKgEgGQgFgGgHAAQgHAAgFAGg");
	this.shape_8.setTransform(119,83.6,0.83,0.83);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AARAqIAAg2IghA2IgRAAIAAhTIASAAIAAA2IAgg2IARAAIAABTg");
	this.shape_9.setTransform(111.9,83.6,0.83,0.83);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAQAqIAAgiIgfAAIAAAiIgRAAIAAhTIARAAIAAAiIAfAAIAAgiIARAAIAABTg");
	this.shape_10.setTransform(104.7,83.6,0.83,0.83);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJAMAAATIAAAGIgzAAQACAVASAAQALAAAJgJIAIAMQgMAMgRAAQgPAAgLgLgAgLgVQgEAGgBAKIAiAAQgCgWgPAAQgHAAgFAGg");
	this.shape_11.setTransform(97.7,83.6,0.83,0.83);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AglApIABgPIAFAAQAIAAACgKQAEgOAAgrIA3AAIAABSIgRAAIAAhCIgWAAQAAAogGAPQgGAMgOAAg");
	this.shape_12.setTransform(90.2,83.6,0.83,0.83);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgfAqIAAhTIAhAAQAMAAAIAGQAGAGAAAKQAAANgMAGQAQAEABAOQAAALgJAGQgIAGgNABgAgOAbIAOAAQAPABAAgLQgBgLgOAAIgOAAgAgOgGIANAAQANAAAAgLQAAgKgMABIgOAAg");
	this.shape_13.setTransform(83.9,83.6,0.83,0.83);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgYAkQgIgHAAgLIAAgBQAAgNAIgGQAIgHAOAAQAKAAAIADIAAgDQAAgRgRAAQgLAAgKAFIgEgPQAOgGAMAAQAhAAAAAhIAAAyIgRAAIAAgKQgIAMgOAAQgLAAgHgHgAgPAQIAAABQAAANAOAAQAHAAAFgFQAFgEAAgHIAAgJQgFgDgLAAQgPAAAAAOg");
	this.shape_14.setTransform(76.8,83.6,0.83,0.83);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgIAqIAAhDIgXAAIAAgQIA+AAIAAAQIgWAAIAABDg");
	this.shape_15.setTransform(70.9,83.6,0.83,0.83);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgVAfQgLgMABgSIAAgBQgBgSALgMQAMgMAOAAQAQAAALALIgJANQgIgIgJAAQgIAAgFAHQgHAHABAMIAAABQgBAMAHAHQAGAHAHAAQAKAAAIgIIAIAMQgMAMgPAAQgPAAgLgMg");
	this.shape_16.setTransform(65,83.6,0.83,0.83);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAZAzIAAgTIgxAAIgCATIgPAAIAAgiIAIAAQAJgSAAglIAAgMIA4AAIAABDIAKAAIgCAigAgPARIAdAAIAAgzIgWAAQAAAigHARg");
	this.shape_17.setTransform(58,84.3,0.83,0.83);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAOAAQARAAAJAMQAJAMAAATIAAAGIg0AAQAEAVARAAQAKAAAKgJIAIAMQgNAMgQAAQgPAAgLgLgAgLgVQgEAGgCAKIAiAAQAAgKgEgGQgFgGgIAAQgGAAgFAGg");
	this.shape_18.setTransform(51,83.6,0.83,0.83);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgkA2IAAhqIARAAIAAAOQAKgPANAAQAOAAAJAKQAKAMAAAUIAAACQAAATgKALQgJALgOAAQgNAAgKgOIAAAkgAgNgeQgGAHAAAMIAAACQAAALAGAHQAGAHAHAAQAIAAAGgHQAFgHAAgLIAAgCQAAgMgGgHQgFgIgIAAQgHAAgGAIg");
	this.shape_19.setTransform(43.9,84.5,0.83,0.83);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAPAqIAAhDIgdAAIAABDIgSAAIAAhTIBBAAIAABTg");
	this.shape_20.setTransform(36.4,83.6,0.83,0.83);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAOAAQARAAAJAMQAJANAAARIAAAHIgzAAQACAVASAAQALAAAJgJIAIALQgLANgSAAQgPAAgLgLgAgRgFIAjAAQgCgWgQAAQgOAAgDAWg");
	this.shape_21.setTransform(132.8,69.7,0.83,0.83);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag0ApIAAhSIASAAIAABDIAaAAIAAhDIARAAIAABDIAaAAIAAhDIARAAIAABSg");
	this.shape_22.setTransform(124.2,69.7,0.83,0.83);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgZAkQgHgHAAgLIAAgBQAAgNAIgGQAIgHAOAAQAIAAAKADIAAgDQAAgRgSAAQgJAAgLAFIgEgPQAMgGAOAAQAhAAAAAhIAAAyIgRAAIAAgKQgJAMgOAAQgKAAgIgHgAgPAQIAAABQAAAMAOAAQAHAAAFgEQAFgFAAgHIAAgIQgHgDgJAAQgPAAAAAOg");
	this.shape_23.setTransform(115.5,69.7,0.83,0.83);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AggApIAAhSIAiAAQAbABgBAVQABANgMAGQAQAEAAAOQAAAXgfAAgAgOAcIAOAAQAPAAAAgLQAAgMgPAAIgOAAgAgOgGIAOAAQALAAAAgKQAAgLgLABIgOAAg");
	this.shape_24.setTransform(109.1,69.7,0.83,0.83);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgIApIAAhCIgWAAIAAgQIA+AAIAAAQIgYAAIAABCg");
	this.shape_25.setTransform(99.4,69.7,0.83,0.83);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AghAyIAGgPQAEADAFAAQAIAAADgJIgehSIATAAIASA9IATg9IASAAIgdBUQgHAXgRgBQgIAAgJgDg");
	this.shape_26.setTransform(93.1,70.6,0.83,0.83);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAPApIAAghIgdAAIAAAhIgSAAIAAhSIASAAIAAAiIAdAAIAAgiIASAAIAABSg");
	this.shape_27.setTransform(86.1,69.7,0.83,0.83);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgkA2IAAhqIASAAIAAAOQAJgPAOAAQANAAAJAKQAKAMAAAUIAAACQAAATgKAMQgJAKgNAAQgNAAgKgOIAAAkgAgNgeQgGAHAAAMIAAACQAAAKAGAIQAGAIAHAAQAJAAAFgIQAGgHAAgLIAAgCQAAgMgGgHQgGgIgIABQgHAAgGAHg");
	this.shape_28.setTransform(78.9,70.6,0.83,0.83);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAOAAQARAAAJAMQAJANAAARIAAAHIgzAAQACAVASAAQALAAAJgJIAIALQgLANgSAAQgPAAgLgLgAgRgFIAjAAQgCgWgQAAQgOAAgDAWg");
	this.shape_29.setTransform(71.5,69.7,0.83,0.83);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AggApIAAhSIAiAAQAMAAAHAGQAHAGABAKQAAANgMAGQAPAEAAAOQAAALgHAHQgJAFgOAAgAgOAcIAOAAQAOAAAAgLQAAgMgOAAIgOAAgAgOgGIAOAAQAMAAgBgKQAAgLgLABIgOAAg");
	this.shape_30.setTransform(64.9,69.7,0.83,0.83);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJANAAARIAAAHIgzAAQABAKAGAGQAGAFAHAAQALAAAJgJIAIALQgLANgSAAQgPAAgLgLgAgQgFIAiAAQgCgWgPAAQgQAAgBAWg");
	this.shape_31.setTransform(57.9,69.7,0.83,0.83);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgkA2IAAhqIASAAIAAAOQAJgPAOAAQANAAAJAKQAKAMAAAUIAAACQAAATgKAMQgJAKgNAAQgNAAgKgOIAAAkgAgNgeQgGAHAAAMIAAACQAAALAGAHQAGAIAHAAQAIAAAGgIQAGgHAAgLIAAgCQAAgMgGgHQgGgIgIABQgHAAgGAHg");
	this.shape_32.setTransform(50.8,70.6,0.83,0.83);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJANAAARIAAAHIgzAAQADAVAQAAQAMAAAIgJIAJALQgLANgSAAQgPAAgLgLgAgQgFIAiAAQgBgWgQAAQgPAAgCAWg");
	this.shape_33.setTransform(43.4,69.7,0.83,0.83);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAPApIAAhCIgdAAIAABCIgSAAIAAhSIBBAAIAABSg");
	this.shape_34.setTransform(36.4,69.7,0.83,0.83);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgUAqIAAhSIARAAIAAARQAHgSASAAIAAATIgBAAQgLAAgHAHQgGAIAAANIAAAkg");
	this.shape_35.setTransform(134.7,55.7,0.83,0.83);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgXAfQgLgMAAgSIAAgBQAAgSAKgMQAKgMAOAAQARAAAJAMQAJAMAAATIAAAFIg0AAQADAWASAAQAKAAAKgIIAIAKQgNANgQAAQgPAAgLgMgAgRgFIAiAAQAAgKgEgGQgFgHgIABQgOAAgDAWg");
	this.shape_36.setTransform(128.6,55.8,0.83,0.83);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgHAqIgdhTIATAAIARA8IATg8IASAAIgcBTg");
	this.shape_37.setTransform(122.1,55.7,0.83,0.83);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgSIAAgBQAAgSALgMQALgMAPAAQARAAALAMQALAMgBASIAAABQABASgLAMQgLAMgRAAQgPAAgLgMgAgOgTQgGAIABALIAAABQAAALAFAIQAGAHAIABQAKgBAFgHQAGgIAAgLIAAgBQAAgLgGgIQgGgHgJAAQgIAAgGAHg");
	this.shape_38.setTransform(115.3,55.8,0.83,0.83);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgbAfQgKgMgBgSIAAgBQABgSAKgMQAMgMAPAAQARAAAKAMQAMAMAAASIAAABQAAASgMAMQgKAMgRAAQgQAAgLgMgAgOgTQgGAIAAALIAAABQAAALAGAIQAGAHAIABQAJgBAGgHQAGgIAAgLIAAgBQgBgLgFgIQgGgHgJAAQgIAAgGAHg");
	this.shape_39.setTransform(107.8,55.8,0.83,0.83);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAWA3IAAgvIgqAAIAAAvIgSAAIAAhtIASAAIAAAuIAqAAIAAguIASAAIAABtg");
	this.shape_40.setTransform(99.8,54.6,0.83,0.83);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAcAqIAAhSIARAAIAABSgAgsAqIAAhSIASAAIAAAdIAOAAQAeAAAAAZQAAAbgeABgAgaAbIANAAQANAAABgMQgBgNgNAAIgNAAg");
	this.shape_41.setTransform(87.6,55.7,0.83,0.83);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgVAfQgKgMAAgSIAAgBQAAgSAKgMQALgMAPAAQAQAAALAKIgIAOQgJgIgJAAQgIAAgGAHQgGAHAAAMIAAABQAAAMAGAHQAGAHAJAAQAIAAAJgIIAIAMQgLAMgQAAQgPAAgLgMg");
	this.shape_42.setTransform(80,55.8,0.83,0.83);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgbAfQgLgMAAgSIAAgBQAAgSALgMQAMgMAPAAQARAAAKAMQAMAMAAASIAAABQAAASgMAMQgKAMgRAAQgPAAgMgMgAgOgTQgFAIgBALIAAABQAAALAHAIQAFAHAIABQAJgBAGgHQAGgIAAgLIAAgBQAAgLgGgIQgGgHgJAAQgIAAgGAHg");
	this.shape_43.setTransform(73,55.8,0.83,0.83);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgVAfQgLgMAAgSIAAgBQABgSAKgMQALgMAPAAQARAAAKAKIgJAOQgIgIgJAAQgIAAgFAHQgHAHAAAMIAAABQAAAMAHAHQAFAHAJAAQAIAAAKgIIAHAMQgLAMgQAAQgPAAgLgMg");
	this.shape_44.setTransform(66.3,55.8,0.83,0.83);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgXAfQgLgMAAgSIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJAMAAATIAAAFIgzAAQACAWASAAQAKAAAKgIIAIAKQgMANgRAAQgPAAgLgMgAgLgWQgEAHgBAKIAiAAQgBgKgEgGQgFgHgHABQgHAAgFAFg");
	this.shape_45.setTransform(59.7,55.8,0.83,0.83);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AglApIABgPIAFABQAHAAADgLQAEgOAAgrIA3AAIAABSIgSAAIAAhCIgUAAQAAApgHAOQgGAMgOAAg");
	this.shape_46.setTransform(52.3,55.8,0.83,0.83);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAbAqIAAhSIASAAIAABSgAgsAqIAAhSIASAAIAAAdIAOAAQAeAAAAAZQAAAbgeABgAgaAbIANAAQANAAAAgMQAAgNgNAAIgNAAg");
	this.shape_47.setTransform(44.5,55.7,0.83,0.83);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAPAqIAAhDIgdAAIAABDIgSAAIAAhSIBBAAIAABSg");
	this.shape_48.setTransform(36.4,55.7,0.83,0.83);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJANQAJAMAAARIAAAHIgzAAQABAKAGAGQAGAFAHAAQALAAAJgJIAIAMQgLAMgSAAQgPAAgLgLgAgLgVQgEAGgBAKIAiAAQgCgWgPAAQgHAAgFAGg");
	this.shape_49.setTransform(117.4,41.8,0.83,0.83);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAbAqIAAhTIASAAIAABTgAgsAqIAAhTIASAAIAAAeIAOAAQAeAAAAAZQAAAbgeABgAgaAbIANAAQANAAAAgMQAAgOgNAAIgNAAg");
	this.shape_50.setTransform(109.4,41.8,0.83,0.83);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAPAqIAAgiIgdAAIAAAiIgSAAIAAhTIASAAIAAAiIAdAAIAAgiIASAAIAABTg");
	this.shape_51.setTransform(101.2,41.8,0.83,0.83);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAYAzIAAgSIgwAAIgCASIgPAAIAAgiIAIAAQAIgSAAglIAAgMIA4AAIAABDIALAAIgCAigAgPARIAdAAIAAg0IgWAAQAAAkgHAQg");
	this.shape_52.setTransform(93.9,42.6,0.83,0.83);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgSIAAgBQAAgSALgMQALgMAPAAQARAAALAMQAKAMAAASIAAABQAAASgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAIAAALIAAABQAAALAGAIQAGAHAIAAQAJAAAGgHQAGgIAAgLIAAgBQAAgLgGgIQgGgHgJgBQgJABgFAHg");
	this.shape_53.setTransform(86.7,41.8,0.83,0.83);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AggAqIAAhTIAiAAQANAAAGAGQAIAGAAAKQAAAMgMAGQAPAEAAAPQAAAMgIAFQgHAHgOAAgAgOAbIAPAAQANABAAgLQAAgMgOABIgOAAgAgOgGIAOAAQAMAAgBgLQAAgKgLAAIgOAAg");
	this.shape_54.setTransform(79.7,41.8,0.83,0.83);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgbAfQgKgMgBgSIAAgBQABgSAKgMQAMgMAPAAQAQAAAMAMQAKAMABASIAAABQgBASgKAMQgMAMgQAAQgPAAgMgMgAgOgTQgFAIgBALIAAABQAAALAHAIQAFAHAIAAQAJAAAGgHQAFgHABgMIAAgBQgBgLgFgIQgGgHgJgBQgIABgGAHg");
	this.shape_55.setTransform(72.4,41.8,0.83,0.83);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgkA2IAAhqIARAAIAAAOQALgPANAAQANAAAJAKQAKAMAAAUIAAACQAAATgKAMQgJAKgNAAQgNAAgLgOIAAAkgAgNgeQgGAIAAALIAAACQAAALAGAHQAGAIAHgBQAIABAGgIQAGgHAAgLIAAgCQAAgLgGgIQgGgHgIgBQgHABgGAHg");
	this.shape_56.setTransform(65.1,42.7,0.83,0.83);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAPAqIAAhEIgdAAIAABEIgSAAIAAhTIBBAAIAABTg");
	this.shape_57.setTransform(57.6,41.8,0.83,0.83);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgVAfQgKgMAAgSIAAgBQAAgSAKgMQALgMAPAAQAPAAAMAKIgIAOQgJgIgJAAQgIAAgGAHQgGAIAAALIAAABQAAAMAGAHQAGAHAJAAQAJAAAIgIIAIANQgLALgQAAQgPAAgLgMg");
	this.shape_58.setTransform(50.9,41.8,0.83,0.83);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAOAAQARAAAJANQAJAMAAARIAAAHIg0AAQAEAVARAAQALAAAJgJIAIAMQgMAMgRAAQgPAAgLgLgAgRgFIAjAAQgBgWgRAAQgOAAgDAWg");
	this.shape_59.setTransform(44.3,41.8,0.83,0.83);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgmA3IAAhtIBFAAIAAARIgzAAIAAAbIAXAAQAQAAAKAIQAKAIAAAPQAAAQgLAJQgKAJgRAAgAgUAmIAWAAQATAAAAgQQAAgRgTAAIgWAAg");
	this.shape_60.setTransform(37.1,40.7,0.83,0.83);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 2
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
	this.shape_64.graphics.f("#DC052B").s().p("AxyHEIDyuHIfzAAIjyOHg");
	this.shape_64.setTransform(113.9,63.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dfgdfg, new cjs.Rectangle(0,0,227.8,142.5), null);


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


(lib.Анимация4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._4();
	this.instance.parent = this;
	this.instance.setTransform(-30,-58,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-58,60,116);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._4();
	this.instance.parent = this;
	this.instance.setTransform(-30,-58,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-58,60,116);


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
	this.instance.setTransform(245.9,-160.4,0.513,0.513,0,0,0,0.9,-0.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#706F6F").s().p("AgrBHIAAiNIBWAAIAAAOIhHAAIAAAyIA/AAIAAAMIg/AAIAAAzIBIAAIAAAOg");
	this.shape.setTransform(286.5,-121,0.513,0.513);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#706F6F").s().p("AgGBHIgziNIARAAIAoB3IAqh3IAQAAIgzCNg");
	this.shape_1.setTransform(280.1,-121,0.513,0.513);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#706F6F").s().p("AgHBHIAAiNIAPAAIAACNg");
	this.shape_2.setTransform(275.4,-121,0.513,0.513);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#706F6F").s().p("AgHBHIAAh/IgnAAIAAgOIBdAAIAAAOIgoAAIAAB/g");
	this.shape_3.setTransform(271.2,-121,0.513,0.513);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#706F6F").s().p("AAtBHIgNglIg/AAIgOAlIgQAAIA2iNIAOAAIA3CNgAgaAUIA1AAIgbhHg");
	this.shape_4.setTransform(265.7,-121.1,0.513,0.513);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#706F6F").s().p("AgGBHIgziNIARAAIAoB3IAqh3IAQAAIgzCNg");
	this.shape_5.setTransform(259.7,-121,0.513,0.513);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#706F6F").s().p("AgrA1QgRgUAAggIAAgBQAAgfARgVQARgUAaAAQAbAAARAUQARAUAAAgIAAABQAAAfgRAVQgRAUgbAAQgaAAgRgUgAgggqQgMAQAAAaIAAABQAAAZAMARQAOAQASAAQAUAAAMgQQANgQAAgaIAAgBQAAgZgNgRQgMgQgUAAQgTAAgNAQg");
	this.shape_6.setTransform(253,-121,0.513,0.513);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAPAAIBJBvIAAhvIAPAAIAACNg");
	this.shape_7.setTransform(245.8,-121,0.513,0.513);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAPAAIBJBvIAAhvIAPAAIAACNg");
	this.shape_8.setTransform(238.7,-121,0.513,0.513);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#706F6F").s().p("AgHBHIAAiNIAOAAIAACNg");
	this.shape_9.setTransform(233.9,-121,0.513,0.513);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAOAAIBKBvIAAhvIAPAAIAACNg");
	this.shape_10.setTransform(226.3,-121,0.513,0.513);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#706F6F").s().p("AAgBHIgig3IghAAIAAA3IgPAAIAAiNIAxAAQAYAAAMANQALAMAAARIAAABQAAAfgiAJIAnA6gAgjACIAfAAQAQAAAKgHQAJgIAAgOQAAgdghAAIghAAg");
	this.shape_11.setTransform(219.8,-121,0.513,0.513);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#706F6F").s().p("AgrA1QgRgUAAggIAAgBQAAgfARgVQARgUAaAAQAbAAARAUQARAUAAAgIAAABQAAAfgRAVQgRAUgbAAQgaAAgRgUgAgggqQgMAQAAAaIAAABQAAAZAMARQAOAQASAAQAUAAAMgQQANgQAAgaIAAgBQAAgZgNgRQgMgQgUAAQgTAAgNAQg");
	this.shape_12.setTransform(212.6,-121,0.513,0.513);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#706F6F").s().p("AgwBHIAAiNIAwAAQAWAAAMAMQAJAKAAAOQAAAYgXAJQAdAIAAAZIAAABQAAASgNAKQgOAKgWAAgAghA5IAhAAQAQAAAJgGQAJgHAAgMIAAgBQAAgZgiAAIghAAgAghgGIAfAAQANAAAIgHQAJgHAAgMQAAgMgIgGQgIgGgNAAIggAAg");
	this.shape_13.setTransform(205.8,-121,0.513,0.513);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ghgf, new cjs.Rectangle(184.7,-220.7,121.5,121.5), null);


// stage content:
(lib._728x90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("Eg4ygG8MBxlAAAIAAN5MhxlAAAg");
	this.shape.setTransform(364,45);

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
	this.instance_2 = new lib.hgj();
	this.instance_2.parent = this;
	this.instance_2.setTransform(56.5,45.2,0.507,0.507,0,0,0,0.1,0.3);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},7).wait(280).to({alpha:0},8,cjs.Ease.get(0.69)).to({_off:true},7).wait(58));

	// mask-in-out - копия: 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AudbnMAmug3NMBDOAAAMAAAA3Ng");
	var mask_graphics_1 = new cjs.Graphics().p("EgzrAbnMAhDg3NMBGUAAAMAAAA3Ng");
	var mask_graphics_2 = new cjs.Graphics().p("EgygAbnMAb6g3NMBJHAAAMAAAA3Ng");
	var mask_graphics_3 = new cjs.Graphics().p("EgxeAbnMAXVg3NMBLoAAAMAAAA3Ng");
	var mask_graphics_4 = new cjs.Graphics().p("EgwiAbnMATQg3NMBN1AAAMAAAA3Ng");
	var mask_graphics_5 = new cjs.Graphics().p("EgvvAbnMAPvg3NMBPwAAAMAAAA3Ng");
	var mask_graphics_6 = new cjs.Graphics().p("EgvEAbnMAMwg3NMBRZAAAMAAAA3Ng");
	var mask_graphics_7 = new cjs.Graphics().p("EguhAbnMAKVg3NMBSuAAAMAAAA3Ng");
	var mask_graphics_8 = new cjs.Graphics().p("EguFAbnMAIbg3NMBTwAAAMAAAA3Ng");
	var mask_graphics_9 = new cjs.Graphics().p("EgtxAbnMAHEg3NMBUgAAAMAAAA3Ng");
	var mask_graphics_10 = new cjs.Graphics().p("EgtlAbnMAGQg3NMBU7AAAMAAAA3Ng");
	var mask_graphics_11 = new cjs.Graphics().p("EgsOAbnMAGAg3NMBVFAAAMAAAA3Ng");
	var mask_graphics_62 = new cjs.Graphics().p("EgwBAbnMAAAg3NMBp9AAAMgmvA3Ng");
	var mask_graphics_63 = new cjs.Graphics().p("EgpnAbnMAAAg3NMBaRAAAMghAA3Ng");
	var mask_graphics_64 = new cjs.Graphics().p("EgjzAbnMAAAg3NMBMEAAAMgb0A3Ng");
	var mask_graphics_65 = new cjs.Graphics().p("A+nbnMAAAg3NMA/XAAAMgXLA3Ng");
	var mask_graphics_66 = new cjs.Graphics().p("A6CbnMAAAg3NMA0KAAAMgTFA3Ng");
	var mask_graphics_67 = new cjs.Graphics().p("A1ObnMAAAg3NMAqdAAAMgPiA3Ng");
	var mask_graphics_68 = new cjs.Graphics().p("AxHbnMAAAg3NMAiPAAAMgMhA3Ng");
	var mask_graphics_69 = new cjs.Graphics().p("AtwbnMAAAg3NIbhAAMgKEA3Ng");
	var mask_graphics_70 = new cjs.Graphics().p("ArJbnMAAAg3NIWTAAMgIKA3Ng");
	var mask_graphics_71 = new cjs.Graphics().p("ApRbnMAAAg3NISjAAMgGyA3Ng");
	var mask_graphics_72 = new cjs.Graphics().p("AoJbnMAAAg3NIQTAAMgF+A3Ng");
	var mask_graphics_73 = new cjs.Graphics().p("AnxbnMAAAg3NIPjAAMgFsA3Ng");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:585.5,y:140.5}).wait(1).to({graphics:mask_graphics_1,x:741.1,y:140.5}).wait(1).to({graphics:mask_graphics_2,x:658.9,y:140.5}).wait(1).to({graphics:mask_graphics_3,x:585.3,y:140.5}).wait(1).to({graphics:mask_graphics_4,x:520.4,y:140.5}).wait(1).to({graphics:mask_graphics_5,x:464.1,y:140.5}).wait(1).to({graphics:mask_graphics_6,x:416.5,y:140.5}).wait(1).to({graphics:mask_graphics_7,x:377.5,y:140.5}).wait(1).to({graphics:mask_graphics_8,x:347.2,y:140.5}).wait(1).to({graphics:mask_graphics_9,x:325.6,y:140.5}).wait(1).to({graphics:mask_graphics_10,x:312.6,y:140.5}).wait(1).to({graphics:mask_graphics_11,x:299.9,y:140.5}).wait(1).to({graphics:null,x:0,y:0}).wait(50).to({graphics:mask_graphics_62,x:370.8,y:140.4}).wait(1).to({graphics:mask_graphics_63,x:311.4,y:140.4}).wait(1).to({graphics:mask_graphics_64,x:257.7,y:140.4}).wait(1).to({graphics:mask_graphics_65,x:209.6,y:140.4}).wait(1).to({graphics:mask_graphics_66,x:167.2,y:140.4}).wait(1).to({graphics:mask_graphics_67,x:125,y:140.4}).wait(1).to({graphics:mask_graphics_68,x:89.1,y:140.4}).wait(1).to({graphics:mask_graphics_69,x:59.7,y:140.4}).wait(1).to({graphics:mask_graphics_70,x:36.8,y:140.4}).wait(1).to({graphics:mask_graphics_71,x:20.5,y:140.4}).wait(1).to({graphics:mask_graphics_72,x:10.7,y:140.4}).wait(1).to({graphics:mask_graphics_73,x:7.5,y:140.4}).wait(287));

	// text0
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVAgQgLgMAAgTIAAgBQAAgTALgMQALgMAQAAQAPAAAMALIgJANQgIgIgKAAQgIAAgGAHQgGAIAAAMIAAABQAAAMAGAHQAGAIAJAAQAJgBAJgHIAIAMQgMAMgPAAQgQAAgLgMg");
	this.shape_1.setTransform(316.4,52.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbAgQgLgMAAgTIAAgBQAAgSALgNQALgMAQAAQARAAALAMQALANAAASIAAABQAAASgLAMQgLANgRAAQgQAAgLgMgAgOgUQgGAIAAAMIAAABQAAALAGAIQAGAIAIAAQAKAAAFgIQAGgIAAgLIAAgBQAAgLgGgIQgGgIgJAAQgJAAgFAHg");
	this.shape_2.setTransform(307.8,52.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVAgQgLgMAAgTIAAgBQAAgTALgMQALgMAPAAQAQAAALALIgIANQgJgIgJAAQgIAAgGAHQgGAIAAAMIAAABQAAAMAGAHQAGAIAIAAQAKgBAJgHIAIAMQgMAMgQAAQgQAAgKgMg");
	this.shape_3.setTransform(299.6,52.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXAgQgMgLAAgUIAAgBQAAgTALgMQAJgMAPAAQASAAAJAMQAJANAAATIgBAGIg0AAQADAWASAAQAMAAAIgJIAIALQgLANgSAAQgPAAgLgMgAgRgFIAjAAQgBgXgRAAQgPAAgCAXg");
	this.shape_4.setTransform(291.4,52.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmAqIABgPIAFAAQAIAAADgLQAEgPAAgrIA4AAIAABUIgSAAIAAhEIgVAAQAAAqgHAPQgGAMgOAAg");
	this.shape_5.setTransform(282.2,52.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAcAqIAAhTIASAAIAABTgAgtAqIAAhTIATAAIAAAdIANAAQAfAAABAaQAAAcgfAAgAgaAcIANAAQAOgBAAgNQAAgNgOABIgNAAg");
	this.shape_6.setTransform(272.7,52.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAPAqIAAhEIgdAAIAABEIgSAAIAAhTIBBAAIAABTg");
	this.shape_7.setTransform(262.7,52.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AARAqIAAg3IghA3IgRAAIAAhTIARAAIAAA2IAhg2IARAAIAABTg");
	this.shape_8.setTransform(249.6,52.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgmAqIABgPIAFAAQAIAAACgLQAEgOAAgsIA5AAIAABUIgSAAIAAhEIgWAAQAAAqgGAPQgGAMgPAAg");
	this.shape_9.setTransform(240.2,52.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgZAlQgIgHAAgMIAAgBQAAgNAIgGQAJgHAOAAQAKAAAIADIAAgDQAAgSgRAAQgLAAgLAFIgDgPQANgGANAAQAiAAAAAhIAAA0IgSAAIAAgKQgIAMgPAAQgLAAgHgHgAgPAQIAAABQAAAGAEAEQAEADAGAAQAHAAAFgEQAFgFABgHIAAgJQgHgDgKAAQgPAAAAAOg");
	this.shape_10.setTransform(232,52.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAZA0IAAgTIgyAAIgBATIgQAAIAAgjIAIAAQAJgRAAgnIAAgMIA5AAIAABEIALAAIgCAjgAgPARIAdAAIAAg0IgWAAQAAAjgHARg");
	this.shape_11.setTransform(223.5,53.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgeAiIAHgOQALAIAKAAQAPAAAAgLQAAgGgEgCQgFgDgKAAIgEAAIAAgMIAEAAQAJgBAEgCQAEgCAAgIQAAgIgMAAQgMgBgIAHIgGgMQALgKARAAQAMAAAIAGQAIAGAAAKQAAAOgNAGQAPAEAAAQQAAAKgJAIQgIAHgOAAQgRAAgNgKg");
	this.shape_12.setTransform(215.3,52.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgbAgQgLgMAAgTIAAgBQAAgSALgNQALgMAQAAQARAAALAMQALANAAASIAAABQAAASgLAMQgLANgRAAQgQAAgLgMgAgOgUQgGAIAAAMIAAABQAAALAGAIQAGAIAIAAQAKAAAFgIQAGgIAAgLIAAgBQAAgLgGgIQgGgIgJAAQgJAAgFAHg");
	this.shape_13.setTransform(207.6,52.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgVAgQgLgMAAgTIAAgBQAAgTALgMQALgMAQAAQAPAAAMALIgJANQgIgIgKAAQgIAAgGAHQgGAIAAAMIAAABQAAAMAGAHQAGAIAJAAQAJgBAJgHIAIAMQgMAMgPAAQgQAAgLgMg");
	this.shape_14.setTransform(199.4,52.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAcAqIAAhTIASAAIAABTgAgtAqIAAhTIASAAIAAAdIAOAAQAfAAAAAaQAAAcgeAAgAgbAcIAOAAQANgBAAgNQAAgNgNABIgOAAg");
	this.shape_15.setTransform(185.6,52.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAWAqIAAg3IgWAkIAAAAIgWgkIAAA3IgSAAIAAhTIASAAIAWAlIAWglIASAAIAABTg");
	this.shape_16.setTransform(174.9,52.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAaA0IAAgTIgzAAIgBATIgQAAIAAgiIAIAAQAJgTAAgmIAAgMIA6AAIAABFIAKAAIgCAigAgQASIAfAAIAAg1IgXAAQAAAjgIASg");
	this.shape_17.setTransform(292.8,36.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgZAlQgIgHAAgMIAAgBQAAgNAJgGQAIgHAOAAQAJAAAJADIAAgDQAAgSgRAAQgKAAgMAFIgDgPQANgGANAAQAiAAAAAhIAAA0IgSAAIAAgKQgIAMgPAAQgLAAgHgHgAgPAQIAAABQAAAGAEAEQAEADAGAAQAHAAAFgEQAFgFAAgHIAAgJQgGgDgKAAQgPAAAAAOg");
	this.shape_18.setTransform(284,35.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgeAiIAHgOQALAIAJAAQAQAAAAgLQAAgGgFgCQgEgDgLAAIgEAAIAAgNIAEAAQAJAAAEgCQAFgDAAgGQAAgKgMABQgMAAgIAGIgHgNQAMgJARAAQAMAAAIAGQAIAHAAAJQAAAOgNAGQAPAEAAAPQAAALgJAIQgJAHgNAAQgSAAgMgKg");
	this.shape_19.setTransform(276.3,35.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgZAlQgIgHAAgMIAAgBQAAgNAIgGQAJgHAOAAQAIAAAKADIAAgDQAAgSgRAAQgKAAgMAFIgEgPQAOgGANAAQAiAAAAAhIAAA0IgSAAIAAgKQgIAMgPAAQgLAAgHgHgAgPAQIAAABQAAANAOAAQAHAAAFgEQAFgFAAgHIAAgJQgGgDgKAAQgPAAAAAOg");
	this.shape_20.setTransform(268.6,35.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAQArIAAgjIgfAAIAAAjIgSAAIAAhVIASAAIAAAjIAfAAIAAgjIASAAIAABVg");
	this.shape_21.setTransform(260.2,35.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgZAlQgIgHAAgMIAAgBQAAgNAJgGQAHgHAOAAQAJAAAKADIAAgDQAAgSgSAAQgKAAgLAFIgDgPQANgGANAAQAiAAAAAhIAAA0IgSAAIAAgKQgJAMgOAAQgLAAgHgHgAgPAQIAAABQAAANAOAAQAHAAAFgEQAFgFAAgHIAAgJQgGgDgKAAQgPAAAAAOg");
	this.shape_22.setTransform(247.3,35.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAPArIgUgkIgLANIAAAXIgTAAIAAhVIATAAIAAAoIAdgoIAUAAIgcAkIAfAxg");
	this.shape_23.setTransform(239.8,35.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgXAgQgMgLAAgUIAAgBQAAgTAKgMQAKgMAPAAQASAAAJAMQAJANAAATIAAAGIg1AAQADAWASgBQAMAAAIgIIAJALQgMANgSAAQgQAAgKgMgAgRgFIAjAAQAAgKgFgHQgEgGgJAAQgPAAgCAXg");
	this.shape_24.setTransform(231,35.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AggArIAAhVIAiAAQANAAAHAHQAIAFAAALQAAAMgNAHQAQAEAAAOQAAAMgIAHQgIAFgOABgAgOAcIAOAAQAPAAAAgLQAAgLgPAAIgOAAgAgOgHIAOAAQAMAAAAgKQAAgKgMAAIgOAAg");
	this.shape_25.setTransform(222.7,35.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgXAgQgMgLAAgUIAAgBQAAgTALgMQAKgMAPAAQARAAAJAMQAJAMAAAUIAAAGIg1AAQADAWASgBQALAAAJgIIAJALQgMANgSAAQgQAAgKgMgAgLgWQgFAGgBALIAjAAQgBgXgQAAQgHAAgFAGg");
	this.shape_26.setTransform(210,35.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgXAgQgMgLAAgUIAAgBQAAgTALgMQAKgMAPAAQAQAAAKAMQAJANAAATIAAAGIg0AAQABAWATgBQALAAAJgIIAIALQgLANgSAAQgPAAgLgMgAgRgFIAjAAQgBgKgEgHQgFgGgHAAQgPAAgDAXg");
	this.shape_27.setTransform(201.6,35.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgmAqIABgPIAFAAQAIAAADgLQAEgPAAgrIA4AAIAABUIgSAAIAAhEIgVAAQAAAqgHAPQgGAMgOAAg");
	this.shape_28.setTransform(192.4,35.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgbAgQgLgMAAgTIAAgBQAAgSALgNQALgMAQAAQARAAALAMQALAMAAATIAAABQAAASgLAMQgLANgRAAQgQAAgLgMgAgOgTQgGAHAAAMIAAABQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMIAAgBQAAgLgGgIQgGgIgJAAQgJAAgFAIg");
	this.shape_29.setTransform(184.2,35.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgnA4IAAhvIBHAAIAAAQIg0AAIAAAcIAXAAQARAAAKAJQAKAIAAAPQAAARgLAJQgLAJgRAAgAgUAnIAWAAQATAAAAgRQAAgRgTAAIgWAAg");
	this.shape_30.setTransform(175,34.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AilFpIDArRICLAAIi/LRg");
	this.shape_31.setTransform(344.6,11.3,0.81,0.81);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CB0927").s().p("AjFFdIC7q5IDQAAIi7K5g");
	this.shape_32.setTransform(339.1,62.3,0.81,0.81);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D1D1D1").s().p("AkkIuIBwmjIDRAAIC7q5IBNAAIkqRcg");
	this.shape_33.setTransform(337.7,79.3,0.81,0.81);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#DC052B").s().p("AxyHEIDyuHIfzAAIjyOHg");
	this.shape_34.setTransform(249.8,45.7);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[]},74).wait(286));

	// pic0
	this.instance_3 = new lib.pic0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(454,-5,0.669,0.669);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},74).wait(286));

	// mask-in-out (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_62 = new cjs.Graphics().p("Eg0+AbnMAmwg3NMBDNAAAMAAAA3Ng");
	var mask_1_graphics_63 = new cjs.Graphics().p("Eg2UAbnMAhDg3NMBLmAAAMAAAA3Ng");
	var mask_1_graphics_64 = new cjs.Graphics().p("Eg3jAbnMAb7g3NMBTLAAAMAAAA3Ng");
	var mask_1_graphics_65 = new cjs.Graphics().p("Eg4pAbnMAXUg3NMBZ/AAAMAAAA3Ng");
	var mask_1_graphics_66 = new cjs.Graphics().p("Eg5nAbnMATQg3NMBf/AAAMAAAA3Ng");
	var mask_1_graphics_67 = new cjs.Graphics().p("Eg6cAbnMAPvg3NMBlKAAAMAAAA3Ng");
	var mask_1_graphics_68 = new cjs.Graphics().p("Eg7KAbnMAMxg3NMBpkAAAMAAAA3Ng");
	var mask_1_graphics_69 = new cjs.Graphics().p("Eg7vAbnMAKVg3NMBtKAAAMAAAA3Ng");
	var mask_1_graphics_70 = new cjs.Graphics().p("Eg8MAbnMAIcg3NMBv9AAAMAAAA3Ng");
	var mask_1_graphics_71 = new cjs.Graphics().p("Eg8gAbnMAHEg3NMBx9AAAMAAAA3Ng");
	var mask_1_graphics_72 = new cjs.Graphics().p("Eg8sAbnMAGQg3NMBzJAAAMAAAA3Ng");
	var mask_1_graphics_73 = new cjs.Graphics().p("Eg8xAbnMAGAg3NMBzjAAAMAAAA3Ng");
	var mask_1_graphics_137 = new cjs.Graphics().p("EgwBAbnMAAAg3NMBp9AAAMgmvA3Ng");
	var mask_1_graphics_138 = new cjs.Graphics().p("EgpnAbnMAAAg3NMBaRAAAMghAA3Ng");
	var mask_1_graphics_139 = new cjs.Graphics().p("EgjzAbnMAAAg3NMBMEAAAMgb0A3Ng");
	var mask_1_graphics_140 = new cjs.Graphics().p("A+nbnMAAAg3NMA/XAAAMgXLA3Ng");
	var mask_1_graphics_141 = new cjs.Graphics().p("A6CbnMAAAg3NMA0KAAAMgTFA3Ng");
	var mask_1_graphics_142 = new cjs.Graphics().p("A1ObnMAAAg3NMAqdAAAMgPiA3Ng");
	var mask_1_graphics_143 = new cjs.Graphics().p("AxHbnMAAAg3NMAiPAAAMgMhA3Ng");
	var mask_1_graphics_144 = new cjs.Graphics().p("AtwbnMAAAg3NIbhAAMgKEA3Ng");
	var mask_1_graphics_145 = new cjs.Graphics().p("ArJbnMAAAg3NIWTAAMgIKA3Ng");
	var mask_1_graphics_146 = new cjs.Graphics().p("ApRbnMAAAg3NISjAAMgGyA3Ng");
	var mask_1_graphics_147 = new cjs.Graphics().p("AoJbnMAAAg3NIQTAAMgF+A3Ng");
	var mask_1_graphics_148 = new cjs.Graphics().p("AnxbnMAAAg3NIPjAAMgFsA3Ng");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_1_graphics_62,x:832,y:140.5}).wait(1).to({graphics:mask_1_graphics_63,x:758,y:140.5}).wait(1).to({graphics:mask_1_graphics_64,x:691.1,y:140.5}).wait(1).to({graphics:mask_1_graphics_65,x:631.2,y:140.5}).wait(1).to({graphics:mask_1_graphics_66,x:578.4,y:140.5}).wait(1).to({graphics:mask_1_graphics_67,x:532.6,y:140.5}).wait(1).to({graphics:mask_1_graphics_68,x:493.8,y:140.5}).wait(1).to({graphics:mask_1_graphics_69,x:462.1,y:140.5}).wait(1).to({graphics:mask_1_graphics_70,x:437.5,y:140.5}).wait(1).to({graphics:mask_1_graphics_71,x:419.9,y:140.5}).wait(1).to({graphics:mask_1_graphics_72,x:409.3,y:140.5}).wait(1).to({graphics:mask_1_graphics_73,x:405.8,y:140.5}).wait(1).to({graphics:null,x:0,y:0}).wait(63).to({graphics:mask_1_graphics_137,x:370.8,y:140.4}).wait(1).to({graphics:mask_1_graphics_138,x:311.4,y:140.4}).wait(1).to({graphics:mask_1_graphics_139,x:257.7,y:140.4}).wait(1).to({graphics:mask_1_graphics_140,x:209.6,y:140.4}).wait(1).to({graphics:mask_1_graphics_141,x:167.2,y:140.4}).wait(1).to({graphics:mask_1_graphics_142,x:125,y:140.4}).wait(1).to({graphics:mask_1_graphics_143,x:89.1,y:140.4}).wait(1).to({graphics:mask_1_graphics_144,x:59.7,y:140.4}).wait(1).to({graphics:mask_1_graphics_145,x:36.8,y:140.4}).wait(1).to({graphics:mask_1_graphics_146,x:20.5,y:140.4}).wait(1).to({graphics:mask_1_graphics_147,x:10.7,y:140.4}).wait(1).to({graphics:mask_1_graphics_148,x:7.5,y:140.4}).wait(212));

	// pic1
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#7E7E7E").s().p("AAhAlIAAgrQAAgQgMAAQgNAAAAAQIAAArIgOAAIAAgrQAAgQgNAAQgGAAgEAEQgDAFAAAHIAAArIgQAAIAAhIIAQAAIAAALQAIgMALAAQANAAAFAMQAIgMAOAAQAKAAAGAHQAGAGAAAMIAAAwg");
	this.shape_35.setTransform(665,70.2,0.8,0.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#7E7E7E").s().p("AgXAbQgKgKAAgQIAAgBQAAgQAKgLQAKgKANAAQAPAAAJAKQAKALAAAQIAAAAQAAARgKAKQgJALgPAAQgNAAgKgLgAgMgRQgFAHAAAKIAAAAQAAALAFAHQAFAGAHAAQAIAAAFgGQAFgHAAgKIAAgBQAAgJgFgIQgFgGgIAAQgHAAgFAGg");
	this.shape_36.setTransform(657.2,70.3,0.8,0.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#7E7E7E").s().p("AgXApQgJgKAAgRIAAgCQAAgRAJgKQAIgKAMABQAMAAAIAMIAAglIAQAAIAABiIgQAAIAAgLQgIANgMgBQgMAAgIgJgAgLgEQgFAFAAALIAAABQAAALAFAGQAFAGAGAAQAHAAAFgFQAGgIAAgJIAAgCQAAgKgGgGQgFgGgHgBQgGAAgFAHg");
	this.shape_37.setTransform(650.7,69.3,0.8,0.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#7E7E7E").s().p("AgUAcQgKgLAAgQIAAgBQAAgQAJgLQAJgKAMAAQAPAAAIALQAIALAAAPIAAAGIgtAAQACATAPAAQAKAAAIgIIAHAKQgKALgPAAQgOAAgJgKgAgOgEIAeAAQgCgUgOAAQgNAAgBAUg");
	this.shape_38.setTransform(644.7,70.3,0.8,0.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#7E7E7E").s().p("AgUAcQgKgLAAgQIAAgBQAAgQAJgLQAJgKANAAQANAAAJALQAIALAAAPIgBAGIgtAAQADATAPAAQAKAAAHgIIAIAKQgKALgQAAQgMAAgKgKgAgJgTQgFAGgBAJIAfAAQgBgJgEgGQgEgFgGAAQgGAAgEAFg");
	this.shape_39.setTransform(638.9,70.3,0.8,0.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#7E7E7E").s().p("AgSAlIAAhIIAQAAIAAAPQAGgQAPAAIAAARIgBAAQgUAAAAAYIAAAgg");
	this.shape_40.setTransform(634.3,70.2,0.8,0.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#7E7E7E").s().p("AgdAwIAAhfIA7AAIAAAPIgrAAIAAAbIAmAAIAAANIgmAAIAAAog");
	this.shape_41.setTransform(629.3,69.3,0.8,0.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#7E7E7E").s().p("AgSAlIAAhIIAQAAIAAAOQAGgQAPABIAAARIgBAAQgUAAAAAYIAAAgg");
	this.shape_42.setTransform(659.2,59.2,0.8,0.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#7E7E7E").s().p("AgUAcQgKgLAAgQIAAgBQAAgQAJgKQAJgLAMAAQAPAAAIALQAIAKAAARIAAAFIgtAAQACASAQAAQAJAAAIgHIAHAJQgLAMgOAAQgOAAgJgKgAgOgEIAdAAQgBgUgOAAQgMAAgCAUg");
	this.shape_43.setTransform(654,59.3,0.8,0.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#7E7E7E").s().p("AgGAlIgahJIARAAIAPA1IARg1IAQAAIgZBJg");
	this.shape_44.setTransform(648.5,59.2,0.8,0.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#7E7E7E").s().p("AgXAcQgKgMAAgPIAAgBQAAgQAKgKQAKgLANAAQAPAAAJALQAKAKAAAQIAAABQAAAPgKAMQgJAKgPAAQgNAAgKgKgAgMgRQgFAHAAAKIAAABQAAAJAFAIQAFAGAHAAQAIAAAFgGQAFgHAAgKIAAgBQAAgKgFgGQgFgIgIABQgHAAgFAGg");
	this.shape_45.setTransform(642.7,59.3,0.8,0.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#7E7E7E").s().p("AgXAcQgKgMAAgPIAAgBQAAgQAKgKQAKgLANAAQAPAAAJALQAKAKAAAQIAAABQAAAPgKAMQgJAKgPAAQgNAAgKgKgAgMgRQgFAHAAAKIAAABQAAAJAFAIQAFAGAHAAQAIAAAFgGQAFgHAAgKIAAgBQAAgKgFgGQgFgIgIABQgHAAgFAGg");
	this.shape_46.setTransform(636.4,59.3,0.8,0.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#7E7E7E").s().p("AATAwIAAgpIglAAIAAApIgQAAIAAhfIAQAAIAAAoIAlAAIAAgoIAQAAIAABfg");
	this.shape_47.setTransform(629.6,58.3,0.8,0.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#7E7E7E").s().p("AgdAsIAFgNQAEADAFAAQAFAAAEgIIgahIIARAAIAQA1IAQg1IAQAAIgaBKQgGATgOAAQgIAAgIgDg");
	this.shape_48.setTransform(671.5,34.6,0.8,0.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#7E7E7E").s().p("AgXApQgJgKAAgRIAAgDQAAgQAJgKQAIgKAMAAQANAAAHANIAAglIAQAAIAABiIgQAAIAAgMQgIAOgMAAQgMAAgIgKgAgLgEQgFAFAAAKIAAACQAAALAFAGQAEAHAHgBQAIAAAEgGQAGgGAAgLIAAgCQAAgJgGgGQgEgGgIAAQgHgBgEAHg");
	this.shape_49.setTransform(665.3,32.7,0.8,0.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#7E7E7E").s().p("AgXAbQgKgKAAgRIAAAAQAAgPAKgMQAKgKANAAQAPAAAJAKQAKALAAAQIAAAAQAAAQgKALQgKALgOAAQgOAAgJgLgAgMgRQgFAHAAAKIAAAAQAAALAFAGQAFAIAHAAQAIgBAFgGQAFgHAAgKIAAgBQAAgKgFgHQgFgGgIAAQgHAAgFAGg");
	this.shape_50.setTransform(659,33.7,0.8,0.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#7E7E7E").s().p("AgYAdIAFgMQALAIAJAAQAKAAAAgIQAAgFgNgHQgKgEgEgDQgGgFAAgJQAAgKAHgFQAHgGAJAAQANAAAJAGIgEANQgLgGgHAAQgIAAAAAHQAAAFANAGQAKAFADADQAGAGAAAIQAAAKgHAGQgGAGgLAAQgNAAgMgJg");
	this.shape_51.setTransform(653.4,33.7,0.8,0.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#7E7E7E").s().p("AggAwIAAhdIAQAAIAAAMQAIgOAMAAQAMAAAIAKQAJAKAAARIAAADQAAAQgJAKQgIAKgMAAQgLAAgJgNIAAAggAgLgaQgFAHAAAJIAAACQAAAKAFAGQAFAHAGgBQAHAAAFgFQAFgHAAgKIAAgCQAAgKgFgGQgFgHgHABQgGAAgFAGg");
	this.shape_52.setTransform(648,34.5,0.8,0.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#7E7E7E").s().p("AgVAgQgHgHAAgKIAAAAQAAgXAaAAQAHAAAJADIAAgDQAAgPgPAAQgJAAgKAEIgDgNQAMgFALAAQAdAAAAAdIAAAsIgPAAIAAgJQgIALgMAAQgJAAgGgGgAgNAOIAAABQAAALAMAAQAGAAAEgEQAFgEAAgGIAAgIQgGgCgIAAQgNAAAAAMg");
	this.shape_53.setTransform(641.7,33.7,0.8,0.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#7E7E7E").s().p("AANAyIAAgtQABgPgNAAQgNAAgBAQIAAAsIgPAAIAAhjIAPAAIAAAlQAIgMALAAQALAAAGAHQAGAHAAALIAAAxg");
	this.shape_54.setTransform(635.9,32.7,0.8,0.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#7E7E7E").s().p("AARAwIgTgiIgGAAIgLAAIAAAiIgQAAIAAhfIAjAAQAOAAAKAIQAJAIAAAOQAAAVgUAHIAXAlgAgTAAIASAAQASAAAAgQQAAgRgSAAIgSAAg");
	this.shape_55.setTransform(629.7,32.8,0.8,0.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#7E7E7E").s().p("AgSAlIAAhIIAQAAIAAAPQAGgQAPAAIAAARIgBAAQgUAAAAAYIAAAgg");
	this.shape_56.setTransform(659.2,22.6,0.8,0.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#7E7E7E").s().p("AgUAcQgKgKAAgRIAAgBQAAgQAJgKQAJgLANAAQAOAAAIALQAIALAAAPIAAAGIguAAQADATAPAAQAKAAAIgIIAHAKQgKALgQAAQgNAAgJgKgAgJgSQgFAFgBAJIAeAAQgBgUgNAAQgGAAgEAGg");
	this.shape_57.setTransform(654,22.7,0.8,0.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#7E7E7E").s().p("AgHAlIgZhJIAQAAIAQA0IARg0IAQAAIgaBJg");
	this.shape_58.setTransform(648.5,22.7,0.8,0.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#7E7E7E").s().p("AgXAbQgKgKAAgQIAAgBQAAgQAKgKQAKgLANAAQAPAAAJALQAKAKAAAQIAAABQAAAQgKAKQgKALgOAAQgOAAgJgLgAgMgRQgFAHAAAKIAAABQAAAKAFAHQAFAGAHAAQAIAAAFgGQAFgHAAgKIAAgBQAAgKgFgHQgFgGgIAAQgHAAgFAGg");
	this.shape_59.setTransform(642.7,22.7,0.8,0.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#7E7E7E").s().p("AgXAbQgKgKAAgQIAAgBQAAgQAKgKQAKgLANAAQAPAAAJALQAKAKAAAQIAAABQAAAQgKAKQgJALgPAAQgNAAgKgLgAgMgRQgFAHAAAKIAAABQAAAKAFAHQAFAGAHAAQAIAAAFgGQAFgHAAgKIAAgBQAAgKgFgHQgFgGgIAAQgHAAgFAGg");
	this.shape_60.setTransform(636.4,22.7,0.8,0.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#7E7E7E").s().p("AATAwIAAgpIglAAIAAApIgQAAIAAhfIAQAAIAAAoIAlAAIAAgoIAQAAIAABfg");
	this.shape_61.setTransform(629.6,21.7,0.8,0.8);

	this.instance_4 = new lib._2b();
	this.instance_4.parent = this;
	this.instance_4.setTransform(443,40.9,0.582,0.582,-90);

	this.instance_5 = new lib._2a();
	this.instance_5.parent = this;
	this.instance_5.setTransform(443,85.2,0.582,0.582,-90);

	var maskedShapeInstanceList = [this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.instance_4,this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]},62).to({state:[]},87).wait(211));

	// text1
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAQApIAAg1IggA1IgRAAIAAhRIASAAIAAA1IAfg1IASAAIAABRg");
	this.shape_62.setTransform(313,67.4,0.9,0.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AglApIABgPIAFABQAIAAACgLQAEgPAAgqIA3AAIAABSIgSAAIAAhDIgVAAQAAAqgGAOQgGAMgOAAg");
	this.shape_63.setTransform(304.7,67.5,0.9,0.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgXAfQgLgLAAgUIAAAAQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJAMAAASIAAAGIgzAAQADAWARAAQAKAAAKgIIAIALQgLAMgSAAQgPAAgLgMgAgQgEIAiAAQgBgYgQAAQgQAAgBAYg");
	this.shape_64.setTransform(297.7,67.4,0.9,0.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAZAyIAAgSIgxAAIgBASIgQAAIAAghIAIAAQAJgSAAgmIAAgKIA4AAIAABCIAKAAIgCAhgAgPARIAdAAIAAgzIgVAAQAAAjgIAQg");
	this.shape_65.setTransform(289.9,68.3,0.9,0.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgTIAAAAQAAgSALgMQALgMAPAAQARAAAKAMQALAMAAASIAAAAQAAATgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAHAAAMIAAAAQAAAMAGAIQAGAHAIAAQAJAAAGgHQAGgHAAgMIAAgBQAAgMgGgHQgGgIgJAAQgJAAgFAIg");
	this.shape_66.setTransform(282.1,67.4,0.9,0.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AAWApIAAg2IgWAkIgVgjIAAA1IgRAAIAAhRIASAAIAUAlIAWglIASAAIAABRg");
	this.shape_67.setTransform(273.6,67.4,0.9,0.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgXAfQgLgLAAgUIAAAAQAAgSAKgMQAKgMAOAAQARAAAJAMQAJAMAAASIAAAGIgzAAQACAWASAAQAKAAAKgIIAIALQgLAMgSAAQgPAAgLgMgAgRgEIAjAAQgCgYgQAAQgOAAgDAYg");
	this.shape_68.setTransform(261.7,67.4,0.9,0.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AAbApIAAhRIASAAIAABRgAgsApIAAhRIASAAIAAAdIAOAAQAeAAAAAZQAAAbgeAAgAgaAbIANAAQANAAAAgMQAAgNgNAAIgNAAg");
	this.shape_69.setTransform(253.1,67.4,0.9,0.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AAPApIAAgiIgdAAIAAAiIgSAAIAAhRIASAAIAAAhIAdAAIAAghIASAAIAABRg");
	this.shape_70.setTransform(244.2,67.4,0.9,0.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AAYAyIAAgSIgwAAIgBASIgQAAIAAghIAIAAQAJgSAAgmIAAgKIA3AAIAABCIAKAAIgBAhgAgPARIAdAAIAAgzIgVAAQAAAjgIAQg");
	this.shape_71.setTransform(236.3,68.3,0.9,0.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgTIAAAAQAAgSALgMQALgMAPAAQARAAALAMQAKALAAATIAAAAQAAATgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAHAAAMIAAAAQAAAMAGAIQAGAHAIAAQAJAAAGgHQAGgHAAgMIAAgBQAAgMgGgHQgGgIgJAAQgJAAgFAIg");
	this.shape_72.setTransform(228.4,67.4,0.9,0.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgfApIAAhRIAiAAQALAAAIAFQAHAGAAAKQAAANgNAGQAQAEABAOQgBAXgdAAgAgOAbIAOAAQAOAAABgLQgBgLgOAAIgOAAgAgOgGIANAAQANAAAAgLQAAgKgMAAIgOAAg");
	this.shape_73.setTransform(220.9,67.4,0.9,0.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgbAfQgLgMABgTIAAAAQgBgSALgMQALgMAQAAQAQAAALAMQALALAAATIAAAAQAAATgLAMQgLAMgQAAQgQAAgLgMgAgOgTQgFAHAAAMIAAAAQAAAMAFAIQAGAHAIAAQAJAAAGgHQAGgHgBgMIAAgBQABgMgGgHQgGgIgJAAQgJAAgFAIg");
	this.shape_74.setTransform(213,67.4,0.9,0.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgkA2IAAhpIARAAIAAANQALgPANAAQANAAAJAKQAKAMAAAUIAAACQAAATgKAMQgJAKgNAAQgNAAgLgOIAAAkgAgNgeQgGAHAAAMIAAACQAAALAGAHQAGAHAHAAQAIAAAGgHQAFgHAAgLIAAgCQAAgMgFgHQgGgHgIAAQgHAAgGAHg");
	this.shape_75.setTransform(205,68.4,0.9,0.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AAPApIAAhCIgdAAIAABCIgSAAIAAhRIBBAAIAABRg");
	this.shape_76.setTransform(196.9,67.4,0.9,0.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgVAfQgKgMAAgTIAAAAQAAgSAKgMQALgMAPAAQAQAAALALIgIANQgJgJgJAAQgIAAgGAIQgGAHAAAMIAAAAQAAANAGAHQAGAHAJAAQAIAAAJgIIAIAMQgMAMgPAAQgPAAgLgMg");
	this.shape_77.setTransform(189.7,67.4,0.9,0.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgXAfQgLgLAAgUIAAAAQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJAMAAASIAAAGIgzAAQADAWAQAAQALAAAJgIIAJALQgMAMgRAAQgQAAgKgMgAgQgEIAiAAQgBgYgQAAQgPAAgCAYg");
	this.shape_78.setTransform(182.5,67.4,0.9,0.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgaAtQgKgMAAgWIAAgCQgBgXAFgMQAGgRASgEIAmgJIAEAOIgmAKQgRADgCATQAHgOATAAQAOAAAKALQAKAMAAAQIAAABQABASgKAMQgKALgSAAQgQAAgKgMgAgNgDQgGAHABALIAAABQgBALAGAIQAGAHAHAAQAJAAAFgHQAGgIAAgLIAAgBQAAgLgGgHQgFgHgJAAQgHAAgGAHg");
	this.shape_79.setTransform(174.8,66.2,0.9,0.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAOAAQARAAAJAMQAJAMAAASIAAAHIg0AAQAEAVARAAQALAAAJgJIAIALQgMANgRAAQgPAAgLgLgAgRgFIAjAAQgBgWgRAAQgOAAgDAWg");
	this.shape_80.setTransform(244.4,52.3,0.9,0.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AAbApIAAhSIASAAIAABSgAgsApIAAhSIARAAIAAAeIAPAAQAeAAAAAZQAAAbgeAAgAgbAcIAPAAQAMgBAAgNQAAgMgMAAIgPAAg");
	this.shape_81.setTransform(235.7,52.3,0.9,0.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AAPApIAAghIgdAAIAAAhIgSAAIAAhSIASAAIAAAjIAdAAIAAgjIASAAIAABSg");
	this.shape_82.setTransform(226.8,52.3,0.9,0.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgeApIAAhSIARAAIAAAeIANAAQAfAAAAAZQAAAbgeAAgAgNAcIANAAQAOgBAAgNQAAgMgOAAIgNAAg");
	this.shape_83.setTransform(219.8,52.3,0.9,0.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AglApIABgPIAFAAQAIAAACgKQAEgPAAgqIA3AAIAABSIgRAAIAAhDIgWAAQABApgHAPQgFAMgPAAg");
	this.shape_84.setTransform(211.7,52.4,0.9,0.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgYAkQgIgHAAgLIAAgBQAAgNAIgGQAIgHAOAAQAKAAAIADIAAgDQAAgRgRAAQgLAAgKAFIgEgPQAOgGAMAAQAhAAAAAhIAAAyIgRAAIAAgKQgJAMgNAAQgLAAgHgHgAgPAQIAAABQAAAGAEADQAEAEAGAAQAHAAAFgFQAFgEAAgHIAAgJQgFgDgLAAQgPAAAAAOg");
	this.shape_85.setTransform(204.5,52.3,0.9,0.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AAOApIgUgiIgKANIAAAVIgSAAIAAhSIASAAIAAAoIAcgoIAVAAIgcAjIAeAvg");
	this.shape_86.setTransform(197.9,52.3,0.9,0.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AARApIAAg1IghA1IgRAAIAAhSIARAAIAAA1IAhg1IARAAIAABSg");
	this.shape_87.setTransform(189.9,52.3,0.9,0.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AAPApIAAghIgdAAIAAAhIgSAAIAAhSIASAAIAAAjIAdAAIAAgjIASAAIAABSg");
	this.shape_88.setTransform(182,52.3,0.9,0.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AghAyIAFgOQAGACAEAAQAHAAAEgJIgehSIATAAIASA9IATg9IATAAIgeBVQgHAVgQAAQgKAAgIgDg");
	this.shape_89.setTransform(174.4,53.4,0.9,0.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AAWApIAAg2IgWAjIgVgjIAAA2IgSAAIAAhSIASAAIAVAlIAWglIASAAIAABSg");
	this.shape_90.setTransform(279.1,37.2,0.9,0.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAOAAQARAAAJAMQAJAMAAATIAAAFIg0AAQADAWARAAQALAAAKgIIAIAKQgMANgRAAQgPAAgLgLgAgRgFIAjAAQgCgXgQABQgOgBgDAXg");
	this.shape_91.setTransform(270.9,37.2,0.9,0.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AARApIAAgcIgOAAIgPAcIgVAAIAUgfQgRgHAAgRQAAgbAeAAIAiAAIAABSgAgJgXQgDADAAAHQAAANANAAIAQAAIAAgaIgNAAQgJAAgEADg");
	this.shape_92.setTransform(263.1,37.2,0.9,0.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AglApIABgPIAFABQAIAAACgLQAEgOAAgrIA3AAIAABSIgSAAIAAhDIgVAAQAAAqgGAOQgFAMgPAAg");
	this.shape_93.setTransform(255.4,37.3,0.9,0.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AggApIAAhSIAiAAQANABAGAFQAIAGAAAKQAAANgMAFQAPAFAAAOQAAAXgdAAgAgOAbIAPAAQANAAAAgKQAAgMgOAAIgOAAgAgOgGIAOAAQAMAAAAgKQAAgKgMAAIgOAAg");
	this.shape_94.setTransform(248.5,37.2,0.9,0.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgYAkQgIgHAAgMIAAgBQAAgMAIgHQAIgGAOAAQAIAAAKADIAAgDQAAgRgRAAQgKAAgLAFIgEgPQANgGANAAQAhAAAAAhIAAAyIgRAAIAAgKQgJAMgNAAQgLAAgHgHgAgPAQIAAAAQAAANAOAAQAHAAAFgEQAFgFAAgHIAAgIQgIgDgIAAQgPAAAAAOg");
	this.shape_95.setTransform(240.9,37.3,0.9,0.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgIApIAAhCIgXAAIAAgQIA/AAIAAAQIgXAAIAABCg");
	this.shape_96.setTransform(234.5,37.2,0.9,0.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgVAfQgKgLAAgTIAAgBQAAgSALgMQAKgMAQAAQAQAAAKAKIgIAOQgJgJgJABQgIgBgFAIQgGAHAAAMIAAABQAAAMAGAHQAFAHAJAAQAJAAAJgIIAHAMQgLAMgQAAQgPAAgLgMg");
	this.shape_97.setTransform(228,37.2,0.9,0.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AAZAyIAAgSIgxAAIgCASIgPAAIAAghIAIAAQAIgRAAgnIAAgLIA4AAIAABDIALAAIgCAhgAgPARIAdAAIAAgzIgWAAQAAAjgHAQg");
	this.shape_98.setTransform(220.5,38.1,0.9,0.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJAMAAATIAAAFIgzAAQACAWASAAQAKAAAKgIIAIAKQgLANgSAAQgPAAgLgLgAgQgFIAiAAQgBgKgEgGQgFgHgHABQgQgBgBAXg");
	this.shape_99.setTransform(212.9,37.2,0.9,0.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgkA2IAAhqIASAAIAAAOQAJgPAOAAQANAAAJAKQAKAMAAATIAAADQAAATgKALQgJALgNAAQgNAAgKgOIAAAkgAgNgeQgGAIAAALIAAACQAAALAGAHQAGAHAHAAQAIAAAGgHQAGgHAAgLIAAgCQAAgMgGgIQgGgGgIAAQgHgBgGAIg");
	this.shape_100.setTransform(205.2,38.2,0.9,0.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AAPApIAAhCIgdAAIAABCIgSAAIAAhSIBBAAIAABSg");
	this.shape_101.setTransform(197.1,37.2,0.9,0.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AAbApIAAhSIASAAIAABSgAgsApIAAhSIARAAIAAAdIAOAAQAeAAAAAaQABAOgJAGQgIAHgNAAgAgbAbIAOAAQANAAAAgNQAAgNgNABIgOAAg");
	this.shape_102.setTransform(184.6,37.2,0.9,0.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AAWApIAAg2IgWAjIAAAAIgWgjIAAA2IgRAAIAAhSIASAAIAVAlIAWglIARAAIAABSg");
	this.shape_103.setTransform(175.2,37.2,0.9,0.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AARAqIAAgdIgOAAIgPAdIgVAAIAUggQgRgGAAgSQAAgbAeAAIAiAAIAABTgAgJgXQgDADAAAHQAAANANAAIAQAAIAAgaIgNAAQgJAAgEADg");
	this.shape_104.setTransform(219,22.1,0.9,0.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AAQAqIAAgiIgfAAIAAAiIgRAAIAAhTIARAAIAAAiIAfAAIAAgiIARAAIAABTg");
	this.shape_105.setTransform(211.7,22.1,0.9,0.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AAZAzIAAgTIgxAAIgCATIgPAAIAAgiIAIAAQAIgRAAgnIAAgLIA4AAIAABDIALAAIgCAigAgPARIAdAAIAAgzIgWAAQAAAigHARg");
	this.shape_106.setTransform(203.8,23,0.9,0.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgSIAAgBQAAgSALgMQALgMAPAAQARAAALAMQAKAMAAASIAAABQAAASgLAMQgKAMgRAAQgPAAgLgMgAgOgTQgGAIAAALIAAABQAAALAGAIQAGAIAIAAQAKAAAFgIQAGgHAAgMIAAgBQAAgLgGgIQgGgIgJAAQgIAAgGAIg");
	this.shape_107.setTransform(196,22.1,0.9,0.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgZAqIAAhTIAzAAIAAAQIghAAIAABDg");
	this.shape_108.setTransform(189.7,22.1,0.9,0.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJAMAAASIAAAHIgzAAQADAVAQAAQAMAAAIgJIAJAMQgMAMgRAAQgPAAgLgLgAgQgFIAiAAQgBgWgQAAQgPAAgCAWg");
	this.shape_109.setTransform(182.7,22.1,0.9,0.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgbApQgNgPAAgZIAAgBQAAgYANgQQAOgPAUAAQAUAAAOAMIgJAPQgMgKgNAAQgLAAgJAKQgIALAAARIAAABQAAARAIALQAJALAMAAQAMAAANgLIAJANQgPAOgVAAQgUAAgNgPg");
	this.shape_110.setTransform(175.1,20.9,0.9,0.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AilFpIDArRICLAAIi/LRg");
	this.shape_111.setTransform(344.6,11.3,0.81,0.81);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#CB0927").s().p("AjFFdIC7q5IDQAAIi7K5g");
	this.shape_112.setTransform(339.1,62.3,0.81,0.81);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#D1D1D1").s().p("AkkIuIBwmjIDRAAIC7q5IBNAAIkqRcg");
	this.shape_113.setTransform(337.7,79.3,0.81,0.81);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#DC052B").s().p("AxyHEIDyuHIfzAAIjyOHg");
	this.shape_114.setTransform(249.8,45.7);

	var maskedShapeInstanceList = [this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62}]},62).to({state:[]},87).wait(211));

	// mask-in-out - копия (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_137 = new cjs.Graphics().p("AudbnMAmug3NMBDOAAAMAAAA3Ng");
	var mask_2_graphics_138 = new cjs.Graphics().p("Egz8AbnMAhDg3NMBG2AAAMgAiA3Ng");
	var mask_2_graphics_139 = new cjs.Graphics().p("EgzBAbnMAb6g3NMBKJAAAMgBCA3Ng");
	var mask_2_graphics_140 = new cjs.Graphics().p("EgyMAbnMAXUg3NMBNFAAAMgBdA3Ng");
	var mask_2_graphics_141 = new cjs.Graphics().p("EgxeAbnMATQg3NMBPsAAAMgB2A3Ng");
	var mask_2_graphics_142 = new cjs.Graphics().p("Egw1AbnMAPvg3NMBR8AAAMgCMA3Ng");
	var mask_2_graphics_143 = new cjs.Graphics().p("EgwTAbnMAMxg3NMBT2AAAMgCdA3Ng");
	var mask_2_graphics_144 = new cjs.Graphics().p("Egv3AbnMAKVg3NMBVaAAAMgCtA3Ng");
	var mask_2_graphics_145 = new cjs.Graphics().p("EgvhAbnMAIbg3NMBWoAAAMgC4A3Ng");
	var mask_2_graphics_146 = new cjs.Graphics().p("EgvSAbnMAHFg3NMBXgAAAMgDBA3Ng");
	var mask_2_graphics_147 = new cjs.Graphics().p("EgvIAbnMAGQg3NMBYBAAAMgDFA3Ng");
	var mask_2_graphics_148 = new cjs.Graphics().p("EgtxAbnMAF/g3NMBYMAAAMgDHA3Ng");
	var mask_2_graphics_211 = new cjs.Graphics().p("EgwBAbnMAAAg3NMBp9AAAMgmvA3Ng");
	var mask_2_graphics_212 = new cjs.Graphics().p("EgpnAbnMAAAg3NMBaRAAAMghAA3Ng");
	var mask_2_graphics_213 = new cjs.Graphics().p("EgjzAbnMAAAg3NMBMEAAAMgb0A3Ng");
	var mask_2_graphics_214 = new cjs.Graphics().p("A+nbnMAAAg3NMA/XAAAMgXLA3Ng");
	var mask_2_graphics_215 = new cjs.Graphics().p("A6CbnMAAAg3NMA0KAAAMgTFA3Ng");
	var mask_2_graphics_216 = new cjs.Graphics().p("A1ObnMAAAg3NMAqdAAAMgPiA3Ng");
	var mask_2_graphics_217 = new cjs.Graphics().p("AxHbnMAAAg3NMAiPAAAMgMhA3Ng");
	var mask_2_graphics_218 = new cjs.Graphics().p("AtwbnMAAAg3NIbhAAMgKEA3Ng");
	var mask_2_graphics_219 = new cjs.Graphics().p("ArJbnMAAAg3NIWTAAMgIKA3Ng");
	var mask_2_graphics_220 = new cjs.Graphics().p("ApRbnMAAAg3NISjAAMgGyA3Ng");
	var mask_2_graphics_221 = new cjs.Graphics().p("AoJbnMAAAg3NIQTAAMgF+A3Ng");
	var mask_2_graphics_222 = new cjs.Graphics().p("AnxbnMAAAg3NIPjAAMgFsA3Ng");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(137).to({graphics:mask_2_graphics_137,x:585.5,y:140.5}).wait(1).to({graphics:mask_2_graphics_138,x:742.8,y:140.5}).wait(1).to({graphics:mask_2_graphics_139,x:662.2,y:140.5}).wait(1).to({graphics:mask_2_graphics_140,x:590,y:140.5}).wait(1).to({graphics:mask_2_graphics_141,x:526.3,y:140.5}).wait(1).to({graphics:mask_2_graphics_142,x:471.1,y:140.5}).wait(1).to({graphics:mask_2_graphics_143,x:424.4,y:140.5}).wait(1).to({graphics:mask_2_graphics_144,x:386.2,y:140.5}).wait(1).to({graphics:mask_2_graphics_145,x:356.4,y:140.5}).wait(1).to({graphics:mask_2_graphics_146,x:335.2,y:140.5}).wait(1).to({graphics:mask_2_graphics_147,x:322.5,y:140.5}).wait(1).to({graphics:mask_2_graphics_148,x:309.8,y:140.5}).wait(1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_2_graphics_211,x:370.8,y:140.4}).wait(1).to({graphics:mask_2_graphics_212,x:311.4,y:140.4}).wait(1).to({graphics:mask_2_graphics_213,x:257.7,y:140.4}).wait(1).to({graphics:mask_2_graphics_214,x:209.6,y:140.4}).wait(1).to({graphics:mask_2_graphics_215,x:167.2,y:140.4}).wait(1).to({graphics:mask_2_graphics_216,x:125,y:140.4}).wait(1).to({graphics:mask_2_graphics_217,x:89.1,y:140.4}).wait(1).to({graphics:mask_2_graphics_218,x:59.7,y:140.4}).wait(1).to({graphics:mask_2_graphics_219,x:36.8,y:140.4}).wait(1).to({graphics:mask_2_graphics_220,x:20.5,y:140.4}).wait(1).to({graphics:mask_2_graphics_221,x:10.7,y:140.4}).wait(1).to({graphics:mask_2_graphics_222,x:7.5,y:140.4}).wait(138));

	// pic2
	this.instance_6 = new lib.a3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(553.4,-4.7,0.9,0.9,0,0,0,73.5,97.3);

	this.instance_7 = new lib.a2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(551.2,-5.7,0.9,0.9,0,0,0,73.5,97.3);

	this.instance_8 = new lib.a1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(426,75.1,0.8,0.8,0,0,0,73.5,97.3);

	var maskedShapeInstanceList = [this.instance_6,this.instance_7,this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]},137).to({state:[]},86).wait(137));

	// text2
	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AAQAqIAAg2IggA2IgRAAIAAhSIASAAIAAA1IAfg1IASAAIAABSg");
	this.shape_115.setTransform(254.6,60.8,0.9,0.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AAOAqIgTgjIgLANIAAAWIgSAAIAAhSIASAAIAAAmIAcgmIAUAAIgbAjIAeAvg");
	this.shape_116.setTransform(247.4,60.8,0.9,0.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgkA2IAAhpIARAAIAAANQAKgPAOAAQANAAAJALQAKALAAAUIAAACQAAATgKAMQgJAKgNAAQgOAAgKgOIAAAkgAgNgeQgGAHAAAMIAAACQAAALAGAIQAGAGAHAAQAIAAAGgGQAFgIAAgLIAAgCQAAgMgFgIQgGgHgIAAQgHAAgGAIg");
	this.shape_117.setTransform(239.3,61.8,0.9,0.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgSIAAgBQAAgSALgMQALgMAPAAQARAAALAMQAKAMAAASIAAAAQAAATgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAHAAAMIAAAAQAAAMAGAIQAGAIAIgBQAKABAFgIQAGgHAAgMIAAgBQAAgLgGgIQgGgIgJAAQgJAAgFAIg");
	this.shape_118.setTransform(231,60.8,0.9,0.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgbAtQgKgMABgVIAAgCQAAgYAEgMQAGgRARgEIAngJIAEAPIgmAJQgSAEgBASQAIgOASAAQAOAAAKALQAKAMAAAQIAAABQABASgLAMQgKALgRAAQgRAAgKgMgAgNgCQgFAGAAALIAAABQAAAMAFAHQAFAHAIAAQAJAAAGgHQAEgHAAgMIAAgBQABgLgGgGQgGgIgIAAQgIAAgFAIg");
	this.shape_119.setTransform(223,59.5,0.9,0.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AghAxIAGgNQAEADAGAAQAHAAADgJIgdhSIASAAIASA8IATg8IASAAIgcBTQgIAWgRABQgJgBgIgEg");
	this.shape_120.setTransform(215.2,61.9,0.9,0.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AggAqIAAhSIAiAAQANgBAGAGQAIAGAAAKQAAANgMAFQAQAFAAAOQgBAMgHAFQgJAHgNAAgAgOAbIAOAAQAPAAAAgLQAAgLgPABIgOAAgAgOgGIAOAAQAMAAAAgLQAAgJgMgBIgOAAg");
	this.shape_121.setTransform(204.4,60.8,0.9,0.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgSIAAgBQAAgSALgMQALgMAPAAQARAAALAMQALAMgBASIAAAAQABATgLAMQgLAMgRAAQgPAAgLgMgAgOgTQgGAHABAMIAAAAQAAAMAFAIQAGAIAIgBQAKABAFgIQAFgHAAgMIAAgBQAAgLgFgIQgGgIgJAAQgIAAgGAIg");
	this.shape_122.setTransform(196.5,60.8,0.9,0.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AAPAqIAAhEIgdAAIAABEIgSAAIAAhSIBBAAIAABSg");
	this.shape_123.setTransform(188.6,60.8,0.9,0.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AAQAqIAAg2IggA2IgRAAIAAhSIASAAIAAA1IAfg1IASAAIAABSg");
	this.shape_124.setTransform(180.8,60.8,0.9,0.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgIAqIAAhEIgXAAIAAgOIA/AAIAAAOIgXAAIAABEg");
	this.shape_125.setTransform(173.8,60.8,0.9,0.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AARApIgRgdIgQAdIgTAAIAagpIgZgoIATAAIAPAbIARgbIASAAIgZAoIAaApg");
	this.shape_126.setTransform(278.3,45.7,0.9,0.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgUIAAAAQAAgSAKgMQAKgMAPAAQAQAAAJANQAJALAAASIAAAHIgzAAQACAVARAAQALAAAKgJIAIAMQgLAMgSAAQgPAAgLgLgAgQgEIAiAAQgBgYgQAAQgPAAgCAYg");
	this.shape_127.setTransform(271.3,45.7,0.9,0.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgVAfQgLgMAAgTIAAAAQABgSAKgMQALgMAPAAQARAAAKALIgJANQgIgJgJAAQgIAAgFAIQgHAHAAAMIAAAAQAAAMAHAIQAFAHAIAAQAKAAAIgIIAIAMQgMAMgPAAQgPAAgLgMg");
	this.shape_128.setTransform(264.5,45.7,0.9,0.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AggApIAAhRIAiAAQAMAAAHAFQAIAGAAAKQgBANgMAGQARAEgBAOQAAAXgdAAgAgOAbIAOAAQAOAAAAgLQABgLgPAAIgOAAgAgOgGIANAAQAMAAABgLQAAgKgMAAIgOAAg");
	this.shape_129.setTransform(257.5,45.7,0.9,0.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AARApIAAgcIgOAAIgPAcIgVAAIAUgfQgRgGAAgRQAAgbAeAAIAiAAIAABRgAgJgXQgEADAAAHQAAANAOAAIAQAAIAAgaIgNAAQgJAAgEADg");
	this.shape_130.setTransform(246,45.7,0.9,0.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AglApIABgPIAFABQAHAAADgLQAEgPAAgqIA3AAIAABSIgSAAIAAhDIgUAAQAAAqgHAOQgFAMgPAAg");
	this.shape_131.setTransform(238.3,45.8,0.9,0.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AAZAzIAAgTIgxAAIgBATIgQAAIAAgiIAIAAQAJgSAAglIAAgLIA4AAIAABCIAKAAIgCAigAgPARIAdAAIAAg0IgVAAQAAAjgIARg");
	this.shape_132.setTransform(230.8,46.5,0.9,0.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AAOApIgTgiIgLANIAAAVIgSAAIAAhRIASAAIAAAmIAdgmIAUAAIgbAiIAdAvg");
	this.shape_133.setTransform(220,45.7,0.9,0.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgTIAAAAQAAgSALgMQAKgMAQAAQARAAAKAMQALAMAAASIAAAAQAAATgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAIAAALIAAAAQAAAMAGAIQAGAHAIAAQAJAAAGgHQAGgIAAgLIAAgBQAAgMgGgHQgGgIgJAAQgJAAgFAIg");
	this.shape_134.setTransform(211.9,45.7,0.9,0.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AAZAzIAAgTIgxAAIgBATIgQAAIAAgiIAIAAQAJgSAAglIAAgLIA4AAIAABCIAKAAIgCAigAgPARIAdAAIAAg0IgWAAQAAAkgHAQg");
	this.shape_135.setTransform(203.8,46.5,0.9,0.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgZAkQgHgHAAgMIAAgBQAAgNAIgGQAIgGANAAQAJAAAKADIAAgDQAAgRgRAAQgJAAgMAEIgDgOQAMgGAOAAQAgAAAAAgIAAAzIgRAAIAAgKQgJAMgOAAQgKAAgIgHgAgPAPIAAABQAAANAOAAQAHAAAFgEQAFgFAAgHIAAgIQgIgDgHAAQgPAAgBANg");
	this.shape_136.setTransform(196.1,45.8,0.9,0.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgVAfQgKgMAAgTIAAAAQAAgSALgMQAKgMAQAAQAPAAALALIgIANQgJgJgJAAQgIAAgGAIQgFAHAAAMIAAAAQAAAMAGAIQAFAHAJAAQAIAAAKgIIAHAMQgLAMgQAAQgPAAgLgMg");
	this.shape_137.setTransform(189.3,45.7,0.9,0.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgYAkQgIgHAAgMIAAgBQAAgMAIgHQAIgGAOAAQAIAAAKADIAAgDQAAgRgRAAQgKAAgLAEIgEgOQANgGANAAQAhAAAAAgIAAAzIgRAAIAAgKQgJAMgNAAQgLAAgHgHgAgPAPIAAABQAAANAOAAQAHAAAFgEQAFgFAAgHIAAgIQgIgDgIAAQgPAAAAANg");
	this.shape_138.setTransform(182,45.8,0.9,0.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AAQApIAAgiIgfAAIAAAiIgRAAIAAhRIARAAIAAAhIAfAAIAAghIARAAIAABRg");
	this.shape_139.setTransform(174.6,45.7,0.9,0.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AAWApIAAg2IgWAkIAAAAIgVgkIAAA2IgRAAIAAhRIASAAIAUAkIAWgkIARAAIAABRg");
	this.shape_140.setTransform(299.5,30.6,0.9,0.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgaAfQgLgLAAgTIAAgBQAAgSALgMQALgMAPAAQARAAALAMQAKAMAAASIAAABQAAASgLAMQgKAMgRAAQgPAAgLgMgAgOgTQgGAIAAALIAAABQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMIAAgBQAAgLgGgIQgGgIgJAAQgIAAgGAIg");
	this.shape_141.setTransform(290.9,30.6,0.9,0.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgkA2IAAhpIARAAIAAANQAKgPAOAAQANAAAJAKQAKAMAAAUIAAACQAAATgKALQgJALgNAAQgOAAgKgOIAAAkgAgNgeQgGAHAAANIAAABQAAALAGAIQAGAGAHABQAIgBAGgGQAFgIAAgLIAAgBQAAgNgGgHQgFgIgIAAQgHAAgGAIg");
	this.shape_142.setTransform(283,31.6,0.9,0.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgaAfQgLgLAAgTIAAgBQAAgSALgMQALgMAPAAQARAAALAMQAKAMAAASIAAABQAAASgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAHAAAMIAAABQAAAMAGAHQAGAIAIAAQAJAAAGgIQAGgHAAgMIAAgBQAAgLgGgIQgGgIgJAAQgIAAgGAIg");
	this.shape_143.setTransform(274.7,30.6,0.9,0.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgaAtQgLgMABgWIAAgCQgBgYAFgLQAGgSASgDIAmgJIAEAOIgmAJQgSAFgBASQAIgPASAAQAOAAAKAMQAKAMAAAQIAAABQABASgLALQgKAMgRAAQgQAAgKgMgAgOgCQgFAGAAAMIAAAAQAAALAFAIQAHAHAHAAQAJAAAGgHQAEgIAAgLIAAAAQAAgMgFgGQgFgIgJAAQgIAAgGAIg");
	this.shape_144.setTransform(266.7,29.4,0.9,0.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AAbApIAAhRIASAAIAABRgAgsApIAAhRIARAAIAAAdIAPAAQAeAAAAAZQAAAcgegBgAgbAcIAPAAQAMAAAAgOQAAgMgMAAIgPAAg");
	this.shape_145.setTransform(257.6,30.6,0.9,0.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AggApIAAhRIAiAAQAMAAAHAFQAIAFAAALQAAANgMAFQAPAGAAAOQAAAKgHAGQgIAHgOgBgAgOAcIAOAAQAOAAAAgMQAAgKgOgBIgOAAgAgOgGIAOAAQAMAAgBgKQAAgLgLAAIgOAAg");
	this.shape_146.setTransform(249.2,30.6,0.9,0.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AAWApIAAg2IgWAkIgVgkIAAA2IgSAAIAAhRIASAAIAVAkIAWgkIASAAIAABRg");
	this.shape_147.setTransform(237.2,30.6,0.9,0.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AAQApIAAg1IggA1IgRAAIAAhRIASAAIAAA0IAgg0IARAAIAABRg");
	this.shape_148.setTransform(228.8,30.6,0.9,0.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgzApIAAhRIARAAIAABCIAaAAIAAhCIARAAIAABCIAaAAIAAhCIARAAIAABRg");
	this.shape_149.setTransform(219.2,30.6,0.9,0.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AgeApIAAhRIARAAIAAAdIANAAQAfAAAAAZQAAAcgfgBgAgNAcIANAAQAOAAAAgOQAAgMgOAAIgNAAg");
	this.shape_150.setTransform(210.4,30.6,0.9,0.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AglApIABgPIAFAAQAHAAADgKQAEgPAAgqIA3AAIAABSIgSAAIAAhDIgVAAQABAqgHAOQgFAMgPAAg");
	this.shape_151.setTransform(202.3,30.7,0.9,0.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgaAfQgLgLAAgTIAAgBQAAgSALgMQALgMAPAAQARAAALAMQAKAMAAASIAAABQAAASgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAHAAAMIAAABQAAAMAGAHQAGAIAIAAQAJAAAGgIQAGgHAAgMIAAgBQAAgLgGgIQgGgIgJAAQgIAAgGAIg");
	this.shape_152.setTransform(195.1,30.6,0.9,0.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgbAtQgKgMAAgWIAAgCQABgYAEgLQAGgSARgDIAogJIACAOIglAJQgSAFgBASQAIgPASAAQAOAAAKAMQALAMgBAQIAAABQAAASgKALQgKAMgRAAQgRAAgKgMgAgNgCQgGAGAAAMIAAAAQAAALAGAIQAFAHAIAAQAJAAAGgHQAEgIAAgLIAAAAQABgMgGgGQgGgIgIAAQgIAAgFAIg");
	this.shape_153.setTransform(187.2,29.4,0.9,0.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgbApQgNgQAAgYIAAgBQgBgYAOgQQAOgPAUAAQAUAAAOAMIgJAPQgMgKgNAAQgMAAgIAKQgIALgBARIAAABQABARAIALQAJAKAMAAQANAAAMgLIAIAOQgOAOgVAAQgTAAgOgPg");
	this.shape_154.setTransform(175.2,29.4,0.9,0.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AilFpIDArRICLAAIi/LRg");
	this.shape_155.setTransform(344.6,11.3,0.81,0.81);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#CB0927").s().p("AjFFdIC7q5IDQAAIi7K5g");
	this.shape_156.setTransform(339.1,62.3,0.81,0.81);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#D1D1D1").s().p("AkkIuIBwmjIDRAAIC7q5IBNAAIkqRcg");
	this.shape_157.setTransform(337.7,79.3,0.81,0.81);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#DC052B").s().p("AxyHEIDyuHIfzAAIjyOHg");
	this.shape_158.setTransform(249.8,45.7);

	var maskedShapeInstanceList = [this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128,this.shape_129,this.shape_130,this.shape_131,this.shape_132,this.shape_133,this.shape_134,this.shape_135,this.shape_136,this.shape_137,this.shape_138,this.shape_139,this.shape_140,this.shape_141,this.shape_142,this.shape_143,this.shape_144,this.shape_145,this.shape_146,this.shape_147,this.shape_148,this.shape_149,this.shape_150,this.shape_151,this.shape_152,this.shape_153,this.shape_154,this.shape_155,this.shape_156,this.shape_157,this.shape_158];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115}]},137).to({state:[]},86).wait(137));

	// mask-in-out - копия: 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_211 = new cjs.Graphics().p("AudbnMAmug3NMBDOAAAMAAAA3Ng");
	var mask_3_graphics_212 = new cjs.Graphics().p("Egz5AbnMAhDg3NMBGwAAAMgAcA3Ng");
	var mask_3_graphics_213 = new cjs.Graphics().p("Egy7AbnMAb6g3NMBJ9AAAMgA2A3Ng");
	var mask_3_graphics_214 = new cjs.Graphics().p("EgyEAbnMAXUg3NMBM1AAAMgBNA3Ng");
	var mask_3_graphics_215 = new cjs.Graphics().p("EgxTAbnMATQg3NMBPXAAAMgBiA3Ng");
	var mask_3_graphics_216 = new cjs.Graphics().p("EgwpAbnMAPvg3NMBRkAAAMgB0A3Ng");
	var mask_3_graphics_217 = new cjs.Graphics().p("EgwFAbnMAMwg3NMBTbAAAMgCCA3Ng");
	var mask_3_graphics_218 = new cjs.Graphics().p("EgvoAbnMAKVg3NMBU8AAAMgCPA3Ng");
	var mask_3_graphics_219 = new cjs.Graphics().p("EgvRAbnMAIbg3NMBWIAAAMgCYA3Ng");
	var mask_3_graphics_220 = new cjs.Graphics().p("EgvBAbnMAHFg3NMBW+AAAMgCfA3Ng");
	var mask_3_graphics_221 = new cjs.Graphics().p("Egu3AbnMAGRg3NMBXeAAAMgCjA3Ng");
	var mask_3_graphics_222 = new cjs.Graphics().p("EgtgAbnMAGAg3NMBXpAAAMgCkA3Ng");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(211).to({graphics:mask_3_graphics_211,x:585.5,y:140.5}).wait(1).to({graphics:mask_3_graphics_212,x:742.5,y:140.5}).wait(1).to({graphics:mask_3_graphics_213,x:661.6,y:140.5}).wait(1).to({graphics:mask_3_graphics_214,x:589.2,y:140.5}).wait(1).to({graphics:mask_3_graphics_215,x:525.3,y:140.5}).wait(1).to({graphics:mask_3_graphics_216,x:469.9,y:140.5}).wait(1).to({graphics:mask_3_graphics_217,x:423,y:140.5}).wait(1).to({graphics:mask_3_graphics_218,x:384.7,y:140.5}).wait(1).to({graphics:mask_3_graphics_219,x:354.8,y:140.5}).wait(1).to({graphics:mask_3_graphics_220,x:333.5,y:140.5}).wait(1).to({graphics:mask_3_graphics_221,x:320.8,y:140.5}).wait(1).to({graphics:mask_3_graphics_222,x:308.1,y:140.5}).wait(1).to({graphics:null,x:0,y:0}).wait(137));

	// pic3
	this.instance_9 = new lib._4();
	this.instance_9.parent = this;
	this.instance_9.setTransform(486,-18,0.4,0.4);

	this.instance_10 = new lib.Анимация3("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(516,40);
	this.instance_10._off = true;

	this.instance_11 = new lib.Анимация4("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(516,40);
	this.instance_11.alpha = 0;

	var maskedShapeInstanceList = [this.instance_9,this.instance_10,this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},211).to({state:[{t:this.instance_10}]},75).to({state:[{t:this.instance_11}]},8).to({state:[]},1).wait(65));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(286).to({_off:false},0).to({_off:true,alpha:0},8,cjs.Ease.get(1)).wait(66));

	// text3
	this.instance_12 = new lib.dfgdfg();
	this.instance_12.parent = this;
	this.instance_12.setTransform(249.8,53.3,1,1,0,0,0,113.9,71.2);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(211).to({_off:false},0).wait(75).to({alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(65));

	// bg
	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.lf(["#DBDBDB","#E9E9E9","#8A8A8A"],[0,0.514,0.984],122.1,-313.5,-51,131.1).s().p("Aq6cMMAOZg4XIHcAAMgOaA4Xg");
	this.shape_159.setTransform(55.5,64.3,0.713,0.439,-6.8,0,0,-0.6,0.4);

	this.instance_13 = new lib.bg2();
	this.instance_13.parent = this;
	this.instance_13.setTransform(0,0,1.314,0.245);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.shape_159}]}).wait(360));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(360.5,24.7,732.1,169);
// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/bg2.jpg", id:"bg2"},
		{src:"images/728x90_atlas_P_.png", id:"728x90_atlas_P_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;