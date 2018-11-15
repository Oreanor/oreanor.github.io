(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"240x400_atlas_P_", frames: [[0,280,200,172],[364,0,69,260],[435,0,60,260],[0,0,210,278],[212,0,150,290]]}
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
	this.spriteSheet = ss["240x400_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2a = function() {
	this.spriteSheet = ss["240x400_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._2b = function() {
	this.spriteSheet = ss["240x400_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["240x400_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["240x400_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,554,368);// helper functions:

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
	this.shape.graphics.f("#FFFFFF").s().p("AgCArIgRguIgJAtIgPAAIARhVIAIAAIASA5IASg5IAIAAIASBVIgPAAIgJgtIgRAug");
	this.shape.setTransform(72.7,-26.4,1.123,1.123);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAaArIAAhVIAPAAIAABVgAgoArIAAhVIAOAAIAAAgIALAAQAPAAAHAHQAIAGAAANQAAAMgIAIQgIAHgOAAgAgaABIAAAdIAIABQALAAAEgFQADgEAAgHQAAgGgEgEQgFgEgJAAg");
	this.shape_1.setTransform(61.8,-26.5,1.123,1.123);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARArIAAgnIghAAIAAAnIgPAAIAAhVIAPAAIAAAiIAhAAIAAgiIAPAAIAABVg");
	this.shape_2.setTransform(51.5,-26.5,1.123,1.123);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AARArIAAgnIghAAIAAAnIgPAAIAAhVIAPAAIAAAiIAhAAIAAgiIAPAAIAABVg");
	this.shape_3.setTransform(42.3,-26.5,1.123,1.123);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgcAgQgIgMgBgUQABgTAJgMQAKgMARAAQASAAAJALQALAMAAAUQAAAUgLAMQgLAMgRAAQgSAAgJgMgAgPgWQgGAJAAANQAAAPAGAIQAEAIAKAAQAKAAAGgIQAHgIAAgPQAAgegWAAQgLAAgEAIg");
	this.shape_4.setTransform(32.9,-26.5,1.123,1.123);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggAsIAAhWIAPAAIAAA5IAsg6IAGAAIAABWIgPAAIAAg5IgsA6g");
	this.shape_5.setTransform(23.4,-26.5,1.123,1.123);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAVA3IAAgZIg3AAIAAhUIAPAAIAABIIAeAAIAAhIIAOAAIAABIIAKAAIAAAlg");
	this.shape_6.setTransform(14.5,-25.1,1.123,1.123);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAVArIgGgRIgdAAIgFARIgSAAIAjhVIAFAAIAjBVgAgJAOIATAAIgKgeg");
	this.shape_7.setTransform(5.2,-26.6,1.123,1.123);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgcArIAAhUIAYgBQAMAAAIAFQAHAGAAALQAAALgKAFQAQAFAAARQAAALgJAIQgIAGgOAAgAgNAfIAIAAQAIAAAFgDQAFgDAAgJQAAgHgEgEQgEgDgKAAIgIAAgAgNgdIAAAUIAIABQANAAAAgMQAAgKgMAAg");
	this.shape_8.setTransform(-2.8,-26.6,1.123,1.123);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgcAgQgIgMAAgUQAAgTAKgMQAJgMARAAQASAAAKALQAKAMAAAUQAAAUgLAMQgKAMgSAAQgRAAgKgMgAgPgWQgGAJAAANQAAAPAGAIQAEAIAKAAQALAAAFgIQAGgIAAgPQAAgegVAAQgLAAgEAIg");
	this.shape_9.setTransform(-11.8,-26.5,1.123,1.123);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AARArIAAgnIghAAIAAAnIgPAAIAAhVIAPAAIAAAiIAhAAIAAgiIAPAAIAABVg");
	this.shape_10.setTransform(-21.2,-26.5,1.123,1.123);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AARArIAAgnIghAAIAAAnIgPAAIAAhVIAPAAIAAAiIAhAAIAAgiIAPAAIAABVg");
	this.shape_11.setTransform(-30.4,-26.5,1.123,1.123);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AggAsIAAhWIAPAAIAAA5IAsg6IAGAAIAABWIgPAAIAAg5IgsA6g");
	this.shape_12.setTransform(-39.8,-26.5,1.123,1.123);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AARArIAAgnIghAAIAAAnIgPAAIAAhVIAPAAIAAAiIAhAAIAAgiIAPAAIAABVg");
	this.shape_13.setTransform(-53.2,-26.5,1.123,1.123);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgbArIAAhVIA3AAIAAAOIgnAAIAAAUIAbAAIAAAMIgbAAIAAAZIAmAAIAAAOg");
	this.shape_14.setTransform(-61.5,-26.5,1.123,1.123);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAcA3IAAgZIg3AAIAAAZIgOAAIAAglIAGAAQAHgIAIgRQAGgPAHggIAnAAIAABIIAKAAIAAAlgAgFgHQgGAOgHALIAjAAIAAg8IgOAAQgDASgFARg");
	this.shape_15.setTransform(-70.5,-25.1,1.123,1.123);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAiAoQgDgFgCgIQgEgXgRAAIAAAnIgOAAIAAgnQgTAAgDAXQgCAJgEAEQgEAEgHAAIgFgBIAAgNIADAAIADgBQACgBAAgGQACgHAFgIQAFgHAIgBQgQgDgDgSIgCgFQAAgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAIgCAAIAAgNIAEgBQAIAAADAEQADAEACAJQADASATAAIAAgiIAOAAIAAAiQAJAAAFgFQAFgEACgJQACgIADgFQADgEAHAAIAGABIAAANIgDAAIgEABIgBAGQgCAIgFAFQgFAGgGABQAPAFADATIACAHIAFABIACAAIAAANIgGABQgGAAgFgEg");
	this.shape_16.setTransform(-81.6,-26.5,1.123,1.123);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgbAgQgKgMABgUQgBgSALgNQAJgMARAAQATAAAJALQAKALAAAVQgBAVgJALQgLAMgRAAQgSAAgJgMgAgPgWQgGAJAAANQAAAOAGAJQAEAIALAAQAKAAAGgIQAGgIAAgPQAAgegWAAQgKAAgFAIg");
	this.shape_17.setTransform(-92.7,-26.5,1.123,1.123);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgbArIAAhUIASgBQATAAAJAGQAKAGgBAOQAAAcghAAIgHAAIAAAfgAgMgBIAGABQAJAAAFgEQAFgDAAgIQAAgNgUAAIgFAAg");
	this.shape_18.setTransform(-101.2,-26.6,1.123,1.123);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhKCtIBclZIA5AAIhbFZg");
	this.shape_19.setTransform(102.2,-46.2,1.123,1.123);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CB0927").s().p("AhLB7IBCj1IBVAAIhCD1g");
	this.shape_20.setTransform(99.8,-19.9,1.123,1.123);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D1D1D1").s().p("Ah3DfIA3jHIBVAAIBCj2IAhAAIh4G9g");
	this.shape_21.setTransform(98.6,-8.7,1.123,1.123);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#DC052B").s().p("At9C9IAAgYIgBAYIi4AAIAAl5MAhtAAAIhlF5g");
	this.shape_22.setTransform(-8.8,-27.3,1.123,1.123);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ghggg, new cjs.Rectangle(-130,-65.6,242.4,82), null);


(lib.dfgdfggg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMAZQgFgFgBgHIAHgBQABAGADADQADACAEAAQAEAAAEgDQADgDAAgGQAAgEgDgDQgDgEgFAAIgEABIABgFIABAAQADAAAEgCQAEgDAAgFQAAgDgDgDQgDgCgDAAQgEAAgDACQgCADgBAFIgHgBQABgHAFgEQAEgEAHAAQAEAAAEACQAEACACADQACAEAAAEQAAADgCADQgCADgEACQAFABADADQADAEAAAFQAAAIgGAFQgFAFgIAAQgHAAgFgEg");
	this.shape.setTransform(225.5,4.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgNAYQgEgEgBgHIAHgBQABAGADACQADADAEAAQAEAAAEgEQADgEABgGQgBgGgDgDQgEgDgEAAQgDAAgDACQgDABgCACIgGgBIAFgdIAcAAIAAAHIgWAAIgDAPQAFgDAFAAQAIAAAEAFQAGAEAAAIQAAAIgFAGQgFAHgJAAQgIAAgFgFg");
	this.shape_1.setTransform(221.1,4.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_2.setTransform(216.4,4.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMAXQgFgHgBgQQAAgJACgGQACgHAFgDQADgDAGAAQAEAAAEACQAEABACAEIADAIIABANQAAAKgBAGQgCAGgFAEQgEADgGAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQADgFAAgOQAAgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_3.setTransform(212.1,4.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgKAcQABgHACgJQADgKAEgIQAEgIAFgHIgbAAIAAgGIAkAAIAAAFQgFAGgGAKQgFAIgCALQgCAHAAAIg");
	this.shape_4.setTransform(207.7,4.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMAXQgFgHgBgQQAAgJACgGQADgHADgDQAEgDAGAAQAEAAAEACQADABADAEIADAIIABANQAAAKgCAGQgBAGgFAEQgEADgGAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQAEgFAAgOQAAgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_5.setTransform(203.2,4.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNAXQgFgHAAgPQAAgPAGgIQAFgGAIAAQAIAAADAEQAFADABAHIgHABQgBgFgCgBQgCgDgFAAIgFABQgDADgCAEQgCAFAAAJQACgEAEgCIAHgCQAHAAAFAFQAFAEAAAJQAAAFgCAFQgDAEgEADQgEACgFAAQgIAAgGgGgAgHABQgDADAAAGIACAHQABADADACQACABADAAQAEAAAEgDQACgEAAgGQAAgGgCgDQgDgDgFAAQgEAAgEADg");
	this.shape_6.setTransform(198.8,4.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMAaQgEgEgBgHIAHgBQABAFACACQADACADAAQADAAACgBIAEgEIADgHIABgIIAAgCQgCAEgEACQgEACgDAAQgHAAgFgFQgFgEAAgJQAAgJAFgFQAFgFAIAAQAFAAAEADQAFADACAFQADAGAAAKQAAAKgDAHQgCAGgFAEQgEADgGAAQgGAAgFgDgAgHgTQgEAEAAAGQAAAGAEADQADADAEAAQAFAAADgDQADgDAAgGQAAgGgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_7.setTransform(194.3,4.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgKAcQAAgHADgJQACgKAFgIQAEgIAGgHIgcAAIAAgGIAlAAIAAAFQgGAGgGAKQgFAIgCALQgCAHgBAIg");
	this.shape_8.setTransform(189.9,4.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgJAcQgBgHADgJQADgKAEgIQAEgIAFgHIgbAAIAAgGIAkAAIAAAFQgFAGgFAKQgGAIgCALQgCAHAAAIg");
	this.shape_9.setTransform(185.5,4.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_10.setTransform(180.8,4.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgMAXQgGgHABgQQAAgJACgGQABgHAEgDQAFgDAFAAQAEAAAEACQADABADAEIAEAIIABANQAAAKgDAGQgCAGgDAEQgFADgGAAQgIAAgEgGgAgHgSQgEAFAAANQAAAOAEAFQADAEAEAAQAFAAADgEQADgFABgOQgBgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_11.setTransform(176.5,4.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_12.setTransform(171.8,4.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_13.setTransform(164.8,4.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAIABQAFABACACQADACACADQACAEAAAEQAAAHgFAEQgFAFgLAAIgOAAIAAAYgAgNAAIAOAAQAHAAADgDQADgDAAgFQAAgDgBgDQgCgCgEgBIgGgBIgOAAg");
	this.shape_14.setTransform(159.3,4.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgRAdIAAg5IAkAAIAAAHIgdAAIAAAyg");
	this.shape_15.setTransform(154.7,4.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_16.setTransform(149.1,4.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgMAYQgGgEAAgHIAHgBQABAGADACQADADAEAAQAEAAAEgEQAEgEAAgGQAAgGgEgDQgEgDgEAAQgEAAgCACQgDABgCACIgGgBIAGgdIAbAAIAAAHIgWAAIgDAPQAFgDAFAAQAHAAAGAFQAFAEAAAIQAAAIgEAGQgGAHgJAAQgIAAgEgFg");
	this.shape_17.setTransform(141.6,4.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_18.setTransform(136.8,4.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgMAXQgGgHABgQQAAgJABgGQACgHAFgDQAEgDAFAAQAFAAADACQADABADAEIAEAIIABANQAAAKgCAGQgCAGgFAEQgDADgHAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQADgFAAgOQAAgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_19.setTransform(132.6,4.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgSAdIABgFIAEgIIAJgIQAJgIADgEQADgEAAgEQAAgEgCgDQgDgDgFAAQgEAAgEADQgCADAAAGIgHgBQAAgIAFgEQAEgFAIAAQAIAAAFAFQAEAEABAHIgBAHQgCADgEADQgDAEgHAGIgIAHIgCAEIAbAAIAAAHg");
	this.shape_20.setTransform(128.1,4.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_21.setTransform(123.4,4.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgMAYQgGgEAAgHIAHgBQABAGADACQADADAEAAQAFAAADgEQAEgEgBgGQABgGgEgDQgDgDgFAAQgEAAgCACQgDABgBACIgHgBIAGgdIAbAAIAAAHIgWAAIgDAPQAFgDAFAAQAHAAAGAFQAFAEAAAIQAAAIgEAGQgGAHgJAAQgHAAgFgFg");
	this.shape_22.setTransform(119.3,4.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_23.setTransform(114.7,4.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgMAXQgGgHABgQQAAgJACgGQABgHAEgDQAFgDAFAAQAEAAAEACQADABADAEIAEAIIABANQAAAKgDAGQgCAGgDAEQgFADgGAAQgIAAgEgGgAgHgSQgEAFAAANQAAAOAEAFQADAEAEAAQAFAAADgEQADgFABgOQgBgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_24.setTransform(110.4,4.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgJAcQAAgHACgJQADgKAEgIQAEgIAGgHIgbAAIAAgGIAkAAIAAAFQgGAGgFAKQgGAIgCALQgCAHgBAIg");
	this.shape_25.setTransform(106,4.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgKAcQABgHACgJQADgKAEgIQAEgIAFgHIgbAAIAAgGIAkAAIAAAFQgFAGgGAKQgFAIgCALQgCAHAAAIg");
	this.shape_26.setTransform(101.5,4.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_27.setTransform(94.2,4.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_28.setTransform(88.4,4.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAQAdIAAgsIgeAsIgHAAIAAg5IAGAAIAAAtIAegtIAIAAIAAA5g");
	this.shape_29.setTransform(82.6,4.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_30.setTransform(76.5,7.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgMAYQgGgFAAgHQAAgGADgEQADgCAFgCQgEgBgCgDQgDgDAAgEQAAgHAFgEQAFgEAGAAQAHAAAFAEQAEAEAAAHQAAAEgBADQgCADgFABQAFACADADQADAEAAAFQAAAHgFAFQgGAFgIAAQgIAAgEgFgAgHAEQgDADAAAFIABAGIAEAEIAFABQAFAAADgDQAEgDAAgFQAAgFgEgDQgDgEgFAAQgEAAgDAEgAgGgUQgDADAAADQAAAEADADQADADADAAQAEAAADgDQADgDgBgDQABgEgDgDQgDgCgEAAQgDAAgDACg");
	this.shape_31.setTransform(73.1,4.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_32.setTransform(67.6,7.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAQAbIAAgMIgfAAIAAAMIgGAAIAAgSIAEAAQAHgJAAgaIAcAAIAAAjIAEAAIAAASgAgLAJIAWAAIAAgdIgPAAQgBAUgGAJg");
	this.shape_33.setTransform(64,6.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgDAHQAAgBABAAQAAAAABgBQAAAAABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_34.setTransform(58.5,7.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAKAdIAAgfIgSAfIgIAAIAAgpIAHAAIAAAfIATgfIAHAAIAAApgAgGgUQgDgDgBgEIAEAAIADADIADABIAFgBIACgDIAFAAQAAAEgDADQgDACgFABQgEgBgDgCg");
	this.shape_35.setTransform(55.2,4.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgKAEIAAgHIAVAAIAAAHg");
	this.shape_36.setTransform(51.6,5.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgSAdIABgFIAEgIIAJgIQAJgIADgEQADgEAAgEQAAgEgCgDQgDgDgFAAQgEAAgEADQgCADAAAGIgHgBQAAgIAFgEQAFgFAHAAQAIAAAFAFQAEAEABAHIgBAHQgCADgEADQgDAEgHAGIgIAHIgCAEIAbAAIAAAHg");
	this.shape_37.setTransform(48,4.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAKAdIAAgfIgTAfIgHAAIAAgpIAHAAIAAAfIASgfIAIAAIAAApgAgHgUQgDgDAAgEIAEAAIADADIADABIAFgBIACgDIAFAAQgBAEgDADQgDACgFABQgEgBgDgCg");
	this.shape_38.setTransform(41.5,4.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAKAVIAAgfIgSAfIgIAAIAAgpIAHAAIAAAfIATgfIAHAAIAAApg");
	this.shape_39.setTransform(37,5.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAIAVIgIgNIgDgFIgEgBIAAATIgHAAIAAgpIAHAAIAAASQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQABgBACgHIADgGIADgCIAFgBIACAAIAAAGIgCAAIgEABIgCAFIgDAGIgDACQADABAFAHIAHANg");
	this.shape_40.setTransform(33.3,5.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_41.setTransform(29.4,5.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAKAVIAAgTIgTAAIAAATIgHAAIAAgpIAHAAIAAASIATAAIAAgSIAHAAIAAApg");
	this.shape_42.setTransform(25.1,5.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAKAVIAAgfIgSAfIgIAAIAAgpIAHAAIAAAfIATgfIAHAAIAAApg");
	this.shape_43.setTransform(20.7,5.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAXAbIAAgMIgzAAIAAgpIAHAAIAAAjIAQAAIAAgjIAGAAIAAAjIAQAAIAAgjIAHAAIAAAjIAFAAIAAASg");
	this.shape_44.setTransform(15.3,6.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgNAQQgGgFAAgLQAAgLAHgFQAGgFAGAAQAIAAAGAGQAFAGABAJQgBAHgCAFQgCAFgFACQgEADgGAAQgIAAgFgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQADgEABgIQgBgHgDgEQgDgEgGAAQgEAAgDAEg");
	this.shape_45.setTransform(9.6,5.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAJABQADABAEACQACACACADQACAEAAAEQAAAHgFAEQgEAFgMAAIgOAAIAAAYgAgNAAIAOAAQAHAAADgDQADgDAAgFQAAgDgCgDQgCgCgCgBIgHgBIgOAAg");
	this.shape_46.setTransform(4.8,4.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AARAbIAAgMIggAAIAAAMIgGAAIAAgSIAEAAQAHgJAAgaIAcAAIAAAjIAEAAIAAASgAgLAJIAWAAIAAgdIgQAAQAAAUgGAJg");
	this.shape_47.setTransform(180.7,-1.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgPAJIAHgBQAAAEADACQADACADAAQADAAACgCQADgCAAgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAIgFAAIgCAAIAAgFIAFAAIADgCQABAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAQgCgCgDAAQgEAAgDAHIgHgBQAEgMALAAQAGAAAEAEQAEAEgBAFQAAAFgEADQACAAACADQACADAAADQAAAGgEADQgFAEgGAAQgOAAgCgNg");
	this.shape_48.setTransform(176.6,-2.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgNAQQgFgGAAgKQAAgJAFgGQAGgGAIAAQAHAAAGAGQAFAGAAAJIAAACIgeAAQABAHADADQAEAEAEAAQADAAAEgCQACgCABgFIAIABQgCAHgFADQgEAEgHAAQgIAAgGgGgAgGgMQgEAEgBAFIAXAAQAAgFgDgDQgEgEgEAAQgFAAgCADg");
	this.shape_49.setTransform(172.6,-2.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgNAQQgFgFgBgLQABgLAGgFQAGgFAGAAQAIAAAGAGQAGAGgBAJQAAAHgCAFQgDAFgEACQgEADgGAAQgHAAgGgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAGAAADgEQAEgEAAgIQAAgHgEgEQgDgEgGAAQgEAAgEAEg");
	this.shape_50.setTransform(168.1,-2.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgRAdIAAg4IAGAAIAAAFQADgDADgCQACgBADAAQAFAAAFADQAEACABAFQADAFAAAGQAAAHgDAEQgCAFgEACQgEADgFAAQgDAAgCgBQgDgCgCgCIAAAUgAgHgSQgEAEAAAIQAAAHAEAEQADADAEAAQAEAAADgEQAEgEAAgHQAAgIgEgEQgDgEgEAAQgEAAgDAFg");
	this.shape_51.setTransform(163.8,-1.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAOAdIAAgyIgcAAIAAAyIgIAAIAAg5IAsAAIAAA5g");
	this.shape_52.setTransform(158.6,-3.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgDAHQAAAAABgBQAAAAABgBQAAAAABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_53.setTransform(152.4,-0.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgOASQgEgDAAgFQAAgDACgDQAAgCADgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgCACQgDACgBAEIgHgBIADgHQADgDAEgBQAEgCAEAAQAFAAAEACQADABABACIACAFIABAGIAAAIIABANIABAFIgHAAQgCgCABgDIgIAEIgHACQgHAAgDgEgAgBADIgGABIgDACIgBAEQAAAAABABQAAABAAAAQAAABABAAQAAABABAAQABACAFAAQADAAADgCQADgBACgDQABgDAAgEIAAgDIgLADg");
	this.shape_54.setTransform(149.1,-2.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgQAVIAAgpIAQAAIAIABQADABACADQACADAAADIgBAFIgEAEQADAAACADQACACAAAEQAAAGgFADQgDADgIAAgAgJAPIAJAAIAIgBQACgCAAgDIgBgEQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAIgFAAIgJAAgAgJgCIAIAAIAEgBIAEgCQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgDgCgCIgHgBIgIAAg");
	this.shape_55.setTransform(144.9,-2.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAIAVIgIgNIgDgFIgEgBIAAATIgHAAIAAgpIAHAAIAAASQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQABgBACgHIADgGIADgCIAFgBIACAAIAAAGIgCAAIgEABIgCAFIgDAGIgDACQADABAFAHIAHANg");
	this.shape_56.setTransform(141.1,-2.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_57.setTransform(137.2,-2.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgNAQQgGgFAAgLQAAgLAHgFQAGgFAGAAQAIAAAGAGQAFAGABAJQgBAHgCAFQgCAFgFACQgEADgGAAQgIAAgFgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQADgEAAgIQAAgHgDgEQgDgEgGAAQgEAAgDAEg");
	this.shape_58.setTransform(132.9,-2.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAUAdIAAgvIgRAvIgFAAIgRgwIAAAwIgHAAIAAg5IALAAIAOAoIABAJIADgKIAOgnIAKAAIAAA5g");
	this.shape_59.setTransform(127.3,-3.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_60.setTransform(120.8,-0.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgLAVIAAgpIAXAAIAAAGIgQAAIAAAjg");
	this.shape_61.setTransform(118.4,-2.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgDAHQAAAAABgBQAAAAABgBQAAAAABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_62.setTransform(113.4,-0.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgMAaQgEgEgBgHIAHgBQABAFACACQADACADAAQADAAACgBIAEgEIADgHIABgIIAAgCQgCAEgEACQgEACgDAAQgHAAgFgFQgFgEAAgJQAAgJAFgFQAFgFAIAAQAFAAAEADQAFADACAFQADAGAAAKQAAAKgDAHQgCAGgFAEQgEADgGAAQgGAAgFgDgAgHgTQgEAEAAAGQAAAGAEADQADADAEAAQAFAAADgDQADgDAAgGQAAgGgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_63.setTransform(110.1,-3.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_64.setTransform(105.3,-3.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_65.setTransform(101,-3.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgMAYQgFgEgBgHIAHgBQABAGADACQADADAEAAQAEAAAEgEQADgEABgGQgBgGgDgDQgEgDgEAAQgDAAgDACQgDABgCACIgGgBIAFgdIAcAAIAAAHIgWAAIgDAPQAFgDAFAAQAIAAAEAFQAGAEAAAIQAAAIgFAGQgFAHgJAAQgIAAgEgFg");
	this.shape_66.setTransform(96.8,-3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_67.setTransform(92,-3.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_68.setTransform(87.5,-3.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgBASIAKgSIgKgRIAFAAIANARIgNASgAgQASIALgSIgLgRIAGAAIALARIgLASg");
	this.shape_69.setTransform(81.2,-2.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_70.setTransform(77.9,-0.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgRAdIAAg5IAkAAIAAAHIgdAAIAAAyg");
	this.shape_71.setTransform(74.9,-3.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_72.setTransform(71.4,-0.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_73.setTransform(67.3,-3.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_74.setTransform(63.4,-0.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgMAaQgGgEgDgHQgDgHAAgIQAAgJADgGQAEgHAGgEQAGgCAHAAQAIAAAGADQAGAFACAIIgHACQgCgHgEgCQgEgDgFgBQgGAAgEAEQgFADgCAGQgBAFAAAFQAAAGACAGQACAFAEADQAFADAEAAQAGAAAFgEQAEgDACgIIAHACQgCAJgGAGQgGAEgJAAQgJAAgFgDg");
	this.shape_75.setTransform(59.3,-3.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAQAdIAAgsIgeAsIgHAAIAAg5IAGAAIAAAtIAegtIAIAAIAAA5g");
	this.shape_76.setTransform(51.4,-3.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AATAjIAAgNIglAAIAAANIgHAAIAAgUIAFAAQAHgKAAgfIAAgJIAhAAIAAAyIAGAAIAAAUgAgGgZIgBAVQgCALgEAIIAaAAIAAgrIgTAAg");
	this.shape_77.setTransform(45.6,-2.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_78.setTransform(40.2,-3.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AASAdIgHgSIgXAAIgGASIgIAAIAWg5IAHAAIAYA5gAgDgLIgGAQIASAAIgGgPIgDgLIgDAKg");
	this.shape_79.setTransform(34.6,-3.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AALAdIgKgQQgDgGgDgDQgDgCgEAAIAAAbIgHAAIAAg5IAHAAIAAAaQAGAAABgCQADgCACgIIAEgIIAFgEQACgCADAAIAGABIAAAGIgCAAIgCAAQgDAAgCACIgFAHQgCAIgCABIgEADQAEABAGAJIAMATg");
	this.shape_80.setTransform(29.9,-3.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AALASIgLgSIALgRIAGAAIgKARIAKASgAgDASIgNgSIANgRIAFAAIgJARIAJASg");
	this.shape_81.setTransform(25,-2.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_82.setTransform(17.5,-3.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_83.setTransform(11.3,-3.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_84.setTransform(5.1,-3.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dfgdfggg, new cjs.Rectangle(0,-9.4,229.9,20.8), null);


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
	this.instance.setTransform(-0.1,-35.8,1.14,1.14,0,0,0,0,-0.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#706F6F").s().p("AgrBHIAAiNIBWAAIAAAOIhHAAIAAAyIA/AAIAAAMIg/AAIAAAzIBIAAIAAAOg");
	this.shape.setTransform(90.4,50.9,1.14,1.14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#706F6F").s().p("AgGBHIgziNIARAAIAoB3IAqh3IAQAAIgzCNg");
	this.shape_1.setTransform(76.1,51,1.14,1.14);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#706F6F").s().p("AgHBHIAAiNIAPAAIAACNg");
	this.shape_2.setTransform(65.8,50.9,1.14,1.14);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#706F6F").s().p("AgHBHIAAh/IgnAAIAAgOIBdAAIAAAOIgoAAIAAB/g");
	this.shape_3.setTransform(56.5,50.9,1.14,1.14);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#706F6F").s().p("AAtBHIgNglIg/AAIgOAlIgQAAIA2iNIAOAAIA3CNgAgaAUIA1AAIgbhHg");
	this.shape_4.setTransform(44.2,50.9,1.14,1.14);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#706F6F").s().p("AgGBHIgziNIARAAIAoB3IAqh3IAQAAIgzCNg");
	this.shape_5.setTransform(30.8,51,1.14,1.14);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#706F6F").s().p("AgrA1QgRgUAAggIAAgBQAAgfARgVQARgUAaAAQAbAAARAUQARAUAAAgIAAABQAAAfgRAVQgRAUgbAAQgaAAgRgUgAgggqQgMAQAAAaIAAABQAAAZAMARQAOAQASAAQAUAAAMgQQANgQAAgaIAAgBQAAgZgNgRQgMgQgUAAQgTAAgNAQg");
	this.shape_6.setTransform(16,50.9,1.14,1.14);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAPAAIBJBvIAAhvIAPAAIAACNg");
	this.shape_7.setTransform(-0.1,50.9,1.14,1.14);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAPAAIBJBvIAAhvIAPAAIAACNg");
	this.shape_8.setTransform(-15.8,50.9,1.14,1.14);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#706F6F").s().p("AgHBHIAAiNIAOAAIAACNg");
	this.shape_9.setTransform(-26.6,50.9,1.14,1.14);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAOAAIBKBvIAAhvIAPAAIAACNg");
	this.shape_10.setTransform(-43.4,50.9,1.14,1.14);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#706F6F").s().p("AAgBHIgig3IghAAIAAA3IgPAAIAAiNIAxAAQAYAAAMANQALAMAAARIAAABQAAAfgiAJIAnA6gAgjACIAfAAQAQAAAKgHQAJgIAAgOQAAgdghAAIghAAg");
	this.shape_11.setTransform(-57.9,50.9,1.14,1.14);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#706F6F").s().p("AgrA1QgRgUAAggIAAgBQAAgfARgVQARgUAaAAQAbAAARAUQARAUAAAgIAAABQAAAfgRAVQgRAUgbAAQgaAAgRgUgAgggqQgMAQAAAaIAAABQAAAZAMARQAOAQASAAQAUAAAMgQQANgQAAgaIAAgBQAAgZgNgRQgMgQgUAAQgTAAgNAQg");
	this.shape_12.setTransform(-73.9,50.9,1.14,1.14);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#706F6F").s().p("AgwBHIAAiNIAwAAQAWAAAMAMQAJAKAAAOQAAAYgXAJQAdAIAAAZIAAABQAAASgNAKQgOAKgWAAgAghA5IAhAAQAQAAAJgGQAJgHAAgMIAAgBQAAgZgiAAIghAAgAghgGIAfAAQANAAAIgHQAJgHAAgMQAAgMgIgGQgIgGgNAAIggAAg");
	this.shape_13.setTransform(-88.9,50.9,1.14,1.14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// Слой 2
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#DBDBDB","#D4D4D4","#8A8A8A"],[0,0.514,0.984],13,-49.9,-58.9,225.9).s().p("Ar1fSMAQwg+jIG7AAMgQwA+jg");
	this.shape_14.setTransform(-42.7,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

	// Слой 3
	this.instance_1 = new lib.bg2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-120,-200,0.433,1.087);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ghgf, new cjs.Rectangle(-135,-200.1,270,400.5), null);


// stage content:
(lib._240x400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("Ayq/KMAlVAAAMAAAA+VMglVAAAg");
	this.shape.setTransform(120,200);

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
	this.instance.setTransform(120,346.4);
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
	this.shape_1.setTransform(162.8,61.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbAgQgLgMAAgTIAAgBQAAgSALgNQALgMAQAAQARAAALAMQALANAAASIAAABQAAASgLAMQgLANgRAAQgQAAgLgMgAgOgUQgGAIAAAMIAAABQAAALAGAIQAGAIAIAAQAKAAAFgIQAGgIAAgLIAAgBQAAgLgGgIQgGgIgJAAQgJAAgFAHg");
	this.shape_2.setTransform(154.2,61.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVAgQgLgMAAgTIAAgBQAAgTALgMQALgMAPAAQAQAAALALIgIANQgJgIgJAAQgIAAgGAHQgGAIAAAMIAAABQAAAMAGAHQAGAIAIAAQAKgBAJgHIAIAMQgMAMgQAAQgQAAgKgMg");
	this.shape_3.setTransform(146,61.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXAgQgMgLAAgUIAAgBQAAgTALgMQAJgMAPAAQASAAAJAMQAJANAAATIgBAGIg0AAQADAWASAAQAMAAAIgJIAIALQgLANgSAAQgPAAgLgMgAgRgFIAjAAQgBgXgRAAQgPAAgCAXg");
	this.shape_4.setTransform(137.8,61.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmAqIABgPIAFAAQAIAAADgLQAEgPAAgrIA4AAIAABUIgSAAIAAhEIgVAAQAAAqgHAPQgGAMgOAAg");
	this.shape_5.setTransform(128.6,61.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAcAqIAAhTIASAAIAABTgAgtAqIAAhTIATAAIAAAdIANAAQAfAAABAaQAAAcgfAAgAgaAcIANAAQAOgBAAgNQAAgNgOABIgNAAg");
	this.shape_6.setTransform(119.1,61.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAPAqIAAhEIgdAAIAABEIgSAAIAAhTIBBAAIAABTg");
	this.shape_7.setTransform(109.1,61.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AARAqIAAg3IghA3IgRAAIAAhTIARAAIAAA2IAhg2IARAAIAABTg");
	this.shape_8.setTransform(96.1,61.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgmAqIABgPIAFAAQAIAAACgLQAEgOAAgsIA5AAIAABUIgSAAIAAhEIgWAAQAAAqgGAPQgGAMgPAAg");
	this.shape_9.setTransform(86.7,61.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgZAlQgIgHAAgMIAAgBQAAgNAIgGQAJgHAOAAQAKAAAIADIAAgDQAAgSgRAAQgLAAgLAFIgDgPQANgGANAAQAiAAAAAhIAAA0IgSAAIAAgKQgIAMgPAAQgLAAgHgHgAgPAQIAAABQAAAGAEAEQAEADAGAAQAHAAAFgEQAFgFABgHIAAgJQgHgDgKAAQgPAAAAAOg");
	this.shape_10.setTransform(78.5,61.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAZA0IAAgTIgyAAIgBATIgQAAIAAgjIAIAAQAJgRAAgnIAAgMIA5AAIAABEIALAAIgCAjgAgPARIAdAAIAAg0IgWAAQAAAjgHARg");
	this.shape_11.setTransform(69.9,62.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgeAiIAHgOQALAIAKAAQAPAAAAgLQAAgGgEgCQgFgDgKAAIgEAAIAAgMIAEAAQAJgBAEgCQAEgCAAgIQAAgIgMAAQgMgBgIAHIgGgMQALgKARAAQAMAAAIAGQAIAGAAAKQAAAOgNAGQAPAEAAAQQAAAKgJAIQgIAHgOAAQgRAAgNgKg");
	this.shape_12.setTransform(61.7,61.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgbAgQgLgMAAgTIAAgBQAAgSALgNQALgMAQAAQARAAALAMQALANAAASIAAABQAAASgLAMQgLANgRAAQgQAAgLgMgAgOgUQgGAIAAAMIAAABQAAALAGAIQAGAIAIAAQAKAAAFgIQAGgIAAgLIAAgBQAAgLgGgIQgGgIgJAAQgJAAgFAHg");
	this.shape_13.setTransform(54,61.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgVAgQgLgMAAgTIAAgBQAAgTALgMQALgMAQAAQAPAAAMALIgJANQgIgIgKAAQgIAAgGAHQgGAIAAAMIAAABQAAAMAGAHQAGAIAJAAQAJgBAJgHIAIAMQgMAMgPAAQgQAAgLgMg");
	this.shape_14.setTransform(45.8,61.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAcAqIAAhTIASAAIAABTgAgtAqIAAhTIASAAIAAAdIAOAAQAfAAAAAaQAAAcgeAAgAgbAcIAOAAQANgBAAgNQAAgNgNABIgOAAg");
	this.shape_15.setTransform(32.1,61.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAWAqIAAg3IgWAkIAAAAIgWgkIAAA3IgSAAIAAhTIASAAIAWAlIAWglIASAAIAABTg");
	this.shape_16.setTransform(21.4,61.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAaA0IAAgTIgzAAIgBATIgQAAIAAgiIAIAAQAJgTAAgmIAAgMIA6AAIAABFIAKAAIgCAigAgQASIAfAAIAAg1IgXAAQAAAjgIASg");
	this.shape_17.setTransform(139.2,45.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgZAlQgIgHAAgMIAAgBQAAgNAJgGQAIgHAOAAQAJAAAJADIAAgDQAAgSgRAAQgKAAgMAFIgDgPQANgGANAAQAiAAAAAhIAAA0IgSAAIAAgKQgIAMgPAAQgLAAgHgHgAgPAQIAAABQAAAGAEAEQAEADAGAAQAHAAAFgEQAFgFAAgHIAAgJQgGgDgKAAQgPAAAAAOg");
	this.shape_18.setTransform(130.4,44.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgeAiIAHgOQALAIAJAAQAQAAAAgLQAAgGgFgCQgEgDgLAAIgEAAIAAgNIAEAAQAJAAAEgCQAFgDAAgGQAAgKgMABQgMAAgIAGIgHgNQAMgJARAAQAMAAAIAGQAIAHAAAJQAAAOgNAGQAPAEAAAPQAAALgJAIQgJAHgNAAQgSAAgMgKg");
	this.shape_19.setTransform(122.8,44.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgZAlQgIgHAAgMIAAgBQAAgNAIgGQAJgHAOAAQAIAAAKADIAAgDQAAgSgRAAQgKAAgMAFIgEgPQAOgGANAAQAiAAAAAhIAAA0IgSAAIAAgKQgIAMgPAAQgLAAgHgHgAgPAQIAAABQAAANAOAAQAHAAAFgEQAFgFAAgHIAAgJQgGgDgKAAQgPAAAAAOg");
	this.shape_20.setTransform(115,44.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAQArIAAgjIgfAAIAAAjIgSAAIAAhVIASAAIAAAjIAfAAIAAgjIASAAIAABVg");
	this.shape_21.setTransform(106.6,44.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgZAlQgIgHAAgMIAAgBQAAgNAJgGQAHgHAOAAQAJAAAKADIAAgDQAAgSgSAAQgKAAgLAFIgDgPQANgGANAAQAiAAAAAhIAAA0IgSAAIAAgKQgJAMgOAAQgLAAgHgHgAgPAQIAAABQAAANAOAAQAHAAAFgEQAFgFAAgHIAAgJQgGgDgKAAQgPAAAAAOg");
	this.shape_22.setTransform(93.8,44.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAPArIgUgkIgLANIAAAXIgTAAIAAhVIATAAIAAAoIAdgoIAUAAIgcAkIAfAxg");
	this.shape_23.setTransform(86.3,44.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgXAgQgMgLAAgUIAAgBQAAgTAKgMQAKgMAPAAQASAAAJAMQAJANAAATIAAAGIg1AAQADAWASgBQAMAAAIgIIAJALQgMANgSAAQgQAAgKgMgAgRgFIAjAAQAAgKgFgHQgEgGgJAAQgPAAgCAXg");
	this.shape_24.setTransform(77.4,44.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AggArIAAhVIAiAAQANAAAHAHQAIAFAAALQAAAMgNAHQAQAEAAAOQAAAMgIAHQgIAFgOABgAgOAcIAOAAQAPAAAAgLQAAgLgPAAIgOAAgAgOgHIAOAAQAMAAAAgKQAAgKgMAAIgOAAg");
	this.shape_25.setTransform(69.2,44.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgXAgQgMgLAAgUIAAgBQAAgTALgMQAKgMAPAAQARAAAJAMQAJAMAAAUIAAAGIg1AAQADAWASgBQALAAAJgIIAJALQgMANgSAAQgQAAgKgMgAgLgWQgFAGgBALIAjAAQgBgXgQAAQgHAAgFAGg");
	this.shape_26.setTransform(56.5,44.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgXAgQgMgLAAgUIAAgBQAAgTALgMQAKgMAPAAQAQAAAKAMQAJANAAATIAAAGIg0AAQABAWATgBQALAAAJgIIAIALQgLANgSAAQgPAAgLgMgAgRgFIAjAAQgBgKgEgHQgFgGgHAAQgPAAgDAXg");
	this.shape_27.setTransform(48,44.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgmAqIABgPIAFAAQAIAAADgLQAEgPAAgrIA4AAIAABUIgSAAIAAhEIgVAAQAAAqgHAPQgGAMgOAAg");
	this.shape_28.setTransform(38.8,44.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgbAgQgLgMAAgTIAAgBQAAgSALgNQALgMAQAAQARAAALAMQALAMAAATIAAABQAAASgLAMQgLANgRAAQgQAAgLgMgAgOgTQgGAHAAAMIAAABQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMIAAgBQAAgLgGgIQgGgIgJAAQgJAAgFAIg");
	this.shape_29.setTransform(30.7,44.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgnA4IAAhvIBHAAIAAAQIg0AAIAAAcIAXAAQARAAAKAJQAKAIAAAPQAAARgLAJQgLAJgRAAgAgUAnIAWAAQATAAAAgRQAAgRgTAAIgWAAg");
	this.shape_30.setTransform(21.5,43.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhnDwIB/nfIBQAAIh/Hfg");
	this.shape_31.setTransform(188.3,30.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CB0927").s().p("AhwDIIBqmPIB3AAIhrGPg");
	this.shape_32.setTransform(184.7,66.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#DBDBDA").s().p("AinE/IBBjvIB2AAIBrmOIAtAAIirJ9g");
	this.shape_33.setTransform(183.7,78.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#DC052B").s().p("AvwE/IAAp9IfhAAIirJ9g");
	this.shape_34.setTransform(101.5,54.5);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[]},74).wait(286));

	// pic0
	this.instance_2 = new lib._1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(18,87);

	this.instance_3 = new lib.hgj();
	this.instance_3.parent = this;
	this.instance_3.setTransform(118.4,319.7,0.57,0.57,0,0,0,0,-0.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#706F6F").s().p("AgrBHIAAiNIBWAAIAAAOIhHAAIAAAyIA/AAIAAAMIg/AAIAAAzIBIAAIAAAOg");
	this.shape_35.setTransform(163.6,363.1,0.57,0.57);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#706F6F").s().p("AgGBHIgziNIARAAIAoB3IAqh3IAQAAIgzCNg");
	this.shape_36.setTransform(156.4,363.1,0.57,0.57);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#706F6F").s().p("AgHBHIAAiNIAPAAIAACNg");
	this.shape_37.setTransform(151.3,363.1,0.57,0.57);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#706F6F").s().p("AgHBHIAAh/IgnAAIAAgOIBdAAIAAAOIgoAAIAAB/g");
	this.shape_38.setTransform(146.6,363.1,0.57,0.57);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#706F6F").s().p("AAtBHIgNglIg/AAIgOAlIgQAAIA2iNIAOAAIA3CNgAgaAUIA1AAIgbhHg");
	this.shape_39.setTransform(140.5,363.1,0.57,0.57);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#706F6F").s().p("AgGBHIgziNIARAAIAoB3IAqh3IAQAAIgzCNg");
	this.shape_40.setTransform(133.8,363.1,0.57,0.57);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#706F6F").s().p("AgrA1QgRgUAAggIAAgBQAAgfARgVQARgUAaAAQAbAAARAUQARAUAAAgIAAABQAAAfgRAVQgRAUgbAAQgaAAgRgUgAgggqQgMAQAAAaIAAABQAAAZAMARQAOAQASAAQAUAAAMgQQANgQAAgaIAAgBQAAgZgNgRQgMgQgUAAQgTAAgNAQg");
	this.shape_41.setTransform(126.4,363.1,0.57,0.57);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAPAAIBJBvIAAhvIAPAAIAACNg");
	this.shape_42.setTransform(118.3,363.1,0.57,0.57);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAPAAIBJBvIAAhvIAPAAIAACNg");
	this.shape_43.setTransform(110.5,363.1,0.57,0.57);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#706F6F").s().p("AgHBHIAAiNIAOAAIAACNg");
	this.shape_44.setTransform(105.1,363.1,0.57,0.57);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAOAAIBKBvIAAhvIAPAAIAACNg");
	this.shape_45.setTransform(96.7,363.1,0.57,0.57);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#706F6F").s().p("AAgBHIgig3IghAAIAAA3IgPAAIAAiNIAxAAQAYAAAMANQALAMAAARIAAABQAAAfgiAJIAnA6gAgjACIAfAAQAQAAAKgHQAJgIAAgOQAAgdghAAIghAAg");
	this.shape_46.setTransform(89.5,363.1,0.57,0.57);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#706F6F").s().p("AgrA1QgRgUAAggIAAgBQAAgfARgVQARgUAaAAQAbAAARAUQARAUAAAgIAAABQAAAfgRAVQgRAUgbAAQgaAAgRgUgAgggqQgMAQAAAaIAAABQAAAZAMARQAOAQASAAQAUAAAMgQQANgQAAgaIAAgBQAAgZgNgRQgMgQgUAAQgTAAgNAQg");
	this.shape_47.setTransform(81.5,363.1,0.57,0.57);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#706F6F").s().p("AgwBHIAAiNIAwAAQAWAAAMAMQAJAKAAAOQAAAYgXAJQAdAIAAAZIAAABQAAASgNAKQgOAKgWAAgAghA5IAhAAQAQAAAJgGQAJgHAAgMIAAgBQAAgZgiAAIghAAgAghgGIAfAAQANAAAIgHQAJgHAAgMQAAgMgIgGQgIgGgNAAIggAAg");
	this.shape_48.setTransform(74,363.1,0.57,0.57);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#706F6F").s().p("AAVAcIAAgqIgVAcIgUgcIAAAqIgIAAIAAg3IAIAAIAUAdIAVgdIAIAAIAAA3g");
	this.shape_49.setTransform(149.2,389.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#706F6F").s().p("AAYAcIAAg3IAJAAIAAA3gAgfAcIAAg3IAIAAIAAAVIAPAAQAKAAAFAEQAHAEAAAIQgBAJgFAFQgGAEgJAAgAgXAVIAPAAQAHAAACgDQAEgDAAgFQAAgEgEgDQgDgDgGAAIgPAAg");
	this.shape_50.setTransform(141.2,389.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#706F6F").s().p("AARAcIAAgYIghAAIAAAYIgIAAIAAg3IAIAAIAAAYIAhAAIAAgYIAIAAIAAA3g");
	this.shape_51.setTransform(133.6,389.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#706F6F").s().p("AAQAcIAAgYIgfAAIAAAYIgJAAIAAg3IAJAAIAAAYIAfAAIAAgYIAJAAIAAA3g");
	this.shape_52.setTransform(126.7,389.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#706F6F").s().p("AgUAVQgJgIABgNQgBgLAJgJQAJgJALAAQANAAAIAJQAIAIAAAMQAAANgIAIQgJAJgMAAQgLAAgJgJgAgOgPQgGAHAAAIQAAAKAGAGQAGAGAIAAQAJAAAGgGQAGgGAAgKQAAgIgGgHQgGgGgJAAQgIAAgGAGg");
	this.shape_53.setTransform(119.7,389.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#706F6F").s().p("AARAcIAAgrIghArIgIAAIAAg3IAIAAIAAAsIAhgsIAIAAIAAA3g");
	this.shape_54.setTransform(112.7,389.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#706F6F").s().p("AAUAjIAAgOIgwAAIAAg4IAJAAIAAAxIAfAAIAAgxIAIAAIAAAxIAJAAIgCAVg");
	this.shape_55.setTransform(106.1,390.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#706F6F").s().p("AgSAYQgGgEAAgIQAAgKAGgDQAHgFALAAQAIAAAIACIAAgBQABgIgFgEQgEgEgIAAQgIAAgJAFIgCgHQAKgGAJAAQANAAAGAHQAGAGAAALIAAAhIgJAAIAAgIQgHAKgMAAQgJAAgGgGgAgLADQgFADABAGQAAAEADAEQAFACAGAAQAGAAAGgDQAGgFgBgHIAAgFQgJgCgHAAQgHAAgEADg");
	this.shape_56.setTransform(99,389.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#706F6F").s().p("AgYAcIAAg3IAbAAQAJAAAEADQAFAFABAGQAAAJgKAEQANACAAALQgBAHgFAEQgGAEgJAAgAgPAVIARAAQAHAAADgCQAEgDAAgEQAAgEgEgDQgEgCgHAAIgQAAgAgPgDIAQAAQAFAAADgCQAEgDAAgEQAAgDgDgDQgDgCgGAAIgQAAg");
	this.shape_57.setTransform(92.9,389.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#706F6F").s().p("AgUAVQgJgJAAgMQAAgKAJgKQAJgJALAAQANAAAIAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgMAAgIgJgAgOgPQgGAHAAAIQAAAKAGAGQAGAGAIAAQAJAAAGgGQAGgGAAgKQAAgIgGgHQgHgGgIAAQgIAAgGAGg");
	this.shape_58.setTransform(85.9,389.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#706F6F").s().p("AAQAcIAAgYIggAAIAAAYIgIAAIAAg3IAIAAIAAAYIAgAAIAAgYIAJAAIAAA3g");
	this.shape_59.setTransform(79,389.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#706F6F").s().p("AAQAcIAAgYIgfAAIAAAYIgJAAIAAg3IAJAAIAAAYIAfAAIAAgYIAJAAIAAA3g");
	this.shape_60.setTransform(72.1,389.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#706F6F").s().p("AARAcIAAgrIghArIgIAAIAAg3IAIAAIAAAsIAhgsIAIAAIAAA3g");
	this.shape_61.setTransform(65.2,389.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#706F6F").s().p("AAQAcIAAgYIgfAAIAAAYIgJAAIAAg3IAJAAIAAAYIAfAAIAAgYIAJAAIAAA3g");
	this.shape_62.setTransform(55,389.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#706F6F").s().p("AgSAeQgIgIAAgNQAAgMAIgIQAIgJAKAAQAMAAAIAJQAHAIAAANIAAADIgsAAQABAIAFAFQAFAFAIAAQAKAAAIgIIAFAFQgJALgPAAQgLgBgIgIgAgLgHQgGAGAAAGIAjAAQAAgGgFgGQgEgFgJgBQgGAAgFAGgAAEgbIAAgLIAKAAIAAALgAgOgbIAAgLIAKAAIAAALg");
	this.shape_63.setTransform(48.3,389);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#706F6F").s().p("AAXAjIAAgOIgtAAIgBAOIgHAAIAAgVIAGAAQAHgOAAgZIAAgKIAoAAIAAAxIAIAAIgBAVgAgIgTQAAAUgHANIAdAAIAAgpIgWAAg");
	this.shape_64.setTransform(41.7,390.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#706F6F").s().p("AAjAcIgTgaIgMANIAAANIgHAAIAAgNIgMgNIgTAaIgKAAIAYgfIgXgYIALAAIAdAgIAAggIAHAAIAAAgIAdggIALAAIgXAYIAYAfg");
	this.shape_65.setTransform(33.8,389.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#706F6F").s().p("AgUAVQgIgIAAgNQAAgLAIgJQAJgJALAAQANAAAIAJQAJAIgBAMQABANgJAIQgJAJgMAAQgLAAgJgJgAgOgPQgGAHAAAIQAAAKAGAGQAGAGAIAAQAJAAAGgGQAGgGAAgKQAAgIgGgHQgHgGgIAAQgIAAgGAGg");
	this.shape_66.setTransform(25.9,389.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#706F6F").s().p("AgcAmIAAhLIAcAAQAOAAAHAGQAIAHAAALQAAAMgJAGQgIAGgMAAIgTAAIAAAbgAgTADIATAAQAIAAAGgDQAGgEAAgJQAAgIgGgEQgEgEgKAAIgTAAg");
	this.shape_67.setTransform(18.9,388.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#706F6F").s().p("AgCARIABgOIgLAIIgDgFIANgGIgNgFIADgFIALAIIgBgOIAEAAIgBAOIAMgIIADAFIgNAFIANAGIgDAFIgMgIIABAOg");
	this.shape_68.setTransform(12.6,386.6);

	var maskedShapeInstanceList = [this.instance_2,this.instance_3,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.instance_3},{t:this.instance_2}]}).to({state:[]},74).wait(286));

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

	// pic1
	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#7E7E7E").s().p("AAhAlIAAgrQAAgQgMAAQgNAAAAAQIAAArIgOAAIAAgrQAAgQgNAAQgGAAgEAEQgDAFAAAHIAAArIgQAAIAAhIIAQAAIAAALQAIgMALAAQANAAAFAMQAIgMAOAAQAKAAAGAHQAGAGAAAMIAAAwg");
	this.shape_69.setTransform(213.1,289.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#7E7E7E").s().p("AgXAbQgKgKAAgQIAAgBQAAgQAKgLQAKgKANAAQAPAAAJAKQAKALAAAQIAAAAQAAARgKAKQgJALgPAAQgNAAgKgLgAgMgRQgFAHAAAKIAAAAQAAALAFAHQAFAGAHAAQAIAAAFgGQAFgHAAgKIAAgBQAAgJgFgIQgFgGgIAAQgHAAgFAGg");
	this.shape_70.setTransform(203.3,289.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#7E7E7E").s().p("AgXApQgJgKAAgRIAAgCQAAgRAJgKQAIgKAMABQAMAAAIAMIAAglIAQAAIAABiIgQAAIAAgLQgIANgMgBQgMAAgIgJgAgLgEQgFAFAAALIAAABQAAALAFAGQAFAGAGAAQAHAAAFgFQAGgIAAgJIAAgCQAAgKgGgGQgFgGgHgBQgGAAgFAHg");
	this.shape_71.setTransform(195.2,288.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#7E7E7E").s().p("AgUAcQgKgLAAgQIAAgBQAAgQAJgLQAJgKAMAAQAPAAAIALQAIALAAAPIAAAGIgtAAQACATAPAAQAKAAAIgIIAHAKQgKALgPAAQgOAAgJgKgAgOgEIAeAAQgCgUgOAAQgNAAgBAUg");
	this.shape_72.setTransform(187.7,289.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#7E7E7E").s().p("AgUAcQgKgLAAgQIAAgBQAAgQAJgLQAJgKANAAQANAAAJALQAIALAAAPIgBAGIgtAAQADATAPAAQAKAAAHgIIAIAKQgKALgQAAQgMAAgKgKgAgJgTQgFAGgBAJIAfAAQgBgJgEgGQgEgFgGAAQgGAAgEAFg");
	this.shape_73.setTransform(180.5,289.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#7E7E7E").s().p("AgSAlIAAhIIAQAAIAAAPQAGgQAPAAIAAARIgBAAQgUAAAAAYIAAAgg");
	this.shape_74.setTransform(174.8,289.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#7E7E7E").s().p("AgdAwIAAhfIA7AAIAAAPIgrAAIAAAbIAmAAIAAANIgmAAIAAAog");
	this.shape_75.setTransform(168.5,288.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#7E7E7E").s().p("AgSAlIAAhIIAQAAIAAAOQAGgQAPABIAAARIgBAAQgUAAAAAYIAAAgg");
	this.shape_76.setTransform(205.8,275.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#7E7E7E").s().p("AgUAcQgKgLAAgQIAAgBQAAgQAJgKQAJgLAMAAQAPAAAIALQAIAKAAARIAAAFIgtAAQACASAQAAQAJAAAIgHIAHAJQgLAMgOAAQgOAAgJgKgAgOgEIAdAAQgBgUgOAAQgMAAgCAUg");
	this.shape_77.setTransform(199.4,275.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#7E7E7E").s().p("AgGAlIgahJIARAAIAPA1IARg1IAQAAIgZBJg");
	this.shape_78.setTransform(192.5,275.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#7E7E7E").s().p("AgXAcQgKgMAAgPIAAgBQAAgQAKgKQAKgLANAAQAPAAAJALQAKAKAAAQIAAABQAAAPgKAMQgJAKgPAAQgNAAgKgKgAgMgRQgFAHAAAKIAAABQAAAJAFAIQAFAGAHAAQAIAAAFgGQAFgHAAgKIAAgBQAAgKgFgGQgFgIgIABQgHAAgFAGg");
	this.shape_79.setTransform(185.3,275.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#7E7E7E").s().p("AgXAcQgKgMAAgPIAAgBQAAgQAKgKQAKgLANAAQAPAAAJALQAKAKAAAQIAAABQAAAPgKAMQgJAKgPAAQgNAAgKgKgAgMgRQgFAHAAAKIAAABQAAAJAFAIQAFAGAHAAQAIAAAFgGQAFgHAAgKIAAgBQAAgKgFgGQgFgIgIABQgHAAgFAGg");
	this.shape_80.setTransform(177.4,275.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#7E7E7E").s().p("AATAwIAAgpIglAAIAAApIgQAAIAAhfIAQAAIAAAoIAlAAIAAgoIAQAAIAABfg");
	this.shape_81.setTransform(168.9,274.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#7E7E7E").s().p("AgdAsIAFgNQAEADAFAAQAFAAAEgIIgahIIARAAIAQA1IAQg1IAQAAIgaBKQgGATgOAAQgIAAgIgDg");
	this.shape_82.setTransform(137.9,288.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#7E7E7E").s().p("AgXApQgJgKAAgRIAAgDQAAgQAJgKQAIgKAMAAQANAAAHANIAAglIAQAAIAABiIgQAAIAAgMQgIAOgMAAQgMAAgIgKgAgLgEQgFAFAAAKIAAACQAAALAFAGQAEAHAHgBQAIAAAEgGQAGgGAAgLIAAgCQAAgJgGgGQgEgGgIAAQgHgBgEAHg");
	this.shape_83.setTransform(130.1,286.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#7E7E7E").s().p("AgXAbQgKgKAAgRIAAAAQAAgPAKgMQAKgKANAAQAPAAAJAKQAKALAAAQIAAAAQAAAQgKALQgKALgOAAQgOAAgJgLgAgMgRQgFAHAAAKIAAAAQAAALAFAGQAFAIAHAAQAIgBAFgGQAFgHAAgKIAAgBQAAgKgFgHQgFgGgIAAQgHAAgFAGg");
	this.shape_84.setTransform(122.2,287.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#7E7E7E").s().p("AgYAdIAFgMQALAIAJAAQAKAAAAgIQAAgFgNgHQgKgEgEgDQgGgFAAgJQAAgKAHgFQAHgGAJAAQANAAAJAGIgEANQgLgGgHAAQgIAAAAAHQAAAFANAGQAKAFADADQAGAGAAAIQAAAKgHAGQgGAGgLAAQgNAAgMgJg");
	this.shape_85.setTransform(115.2,287.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#7E7E7E").s().p("AggAwIAAhdIAQAAIAAAMQAIgOAMAAQAMAAAIAKQAJAKAAARIAAADQAAAQgJAKQgIAKgMAAQgLAAgJgNIAAAggAgLgaQgFAHAAAJIAAACQAAAKAFAGQAFAHAGgBQAHAAAFgFQAFgHAAgKIAAgCQAAgKgFgGQgFgHgHABQgGAAgFAGg");
	this.shape_86.setTransform(108.4,288.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#7E7E7E").s().p("AgVAgQgHgHAAgKIAAAAQAAgXAaAAQAHAAAJADIAAgDQAAgPgPAAQgJAAgKAEIgDgNQAMgFALAAQAdAAAAAdIAAAsIgPAAIAAgJQgIALgMAAQgJAAgGgGgAgNAOIAAABQAAALAMAAQAGAAAEgEQAFgEAAgGIAAgIQgGgCgIAAQgNAAAAAMg");
	this.shape_87.setTransform(100.5,287.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#7E7E7E").s().p("AANAyIAAgtQABgPgNAAQgNAAgBAQIAAAsIgPAAIAAhjIAPAAIAAAlQAIgMALAAQALAAAGAHQAGAHAAALIAAAxg");
	this.shape_88.setTransform(93.4,286.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#7E7E7E").s().p("AARAwIgTgiIgGAAIgLAAIAAAiIgQAAIAAhfIAjAAQAOAAAKAIQAJAIAAAOQAAAVgUAHIAXAlgAgTAAIASAAQASAAAAgQQAAgRgSAAIgSAAg");
	this.shape_89.setTransform(85.6,286.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#7E7E7E").s().p("AgSAlIAAhIIAQAAIAAAPQAGgQAPAAIAAARIgBAAQgUAAAAAYIAAAgg");
	this.shape_90.setTransform(122.4,273.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#7E7E7E").s().p("AgUAcQgKgKAAgRIAAgBQAAgQAJgKQAJgLANAAQAOAAAIALQAIALAAAPIAAAGIguAAQADATAPAAQAKAAAIgIIAHAKQgKALgQAAQgNAAgJgKgAgJgSQgFAFgBAJIAeAAQgBgUgNAAQgGAAgEAGg");
	this.shape_91.setTransform(116,273.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#7E7E7E").s().p("AgHAlIgZhJIAQAAIAQA0IARg0IAQAAIgaBJg");
	this.shape_92.setTransform(109.1,273.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#7E7E7E").s().p("AgXAbQgKgKAAgQIAAgBQAAgQAKgKQAKgLANAAQAPAAAJALQAKAKAAAQIAAABQAAAQgKAKQgKALgOAAQgOAAgJgLgAgMgRQgFAHAAAKIAAABQAAAKAFAHQAFAGAHAAQAIAAAFgGQAFgHAAgKIAAgBQAAgKgFgHQgFgGgIAAQgHAAgFAGg");
	this.shape_93.setTransform(101.9,273.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#7E7E7E").s().p("AgXAbQgKgKAAgQIAAgBQAAgQAKgKQAKgLANAAQAPAAAJALQAKAKAAAQIAAABQAAAQgKAKQgJALgPAAQgNAAgKgLgAgMgRQgFAHAAAKIAAABQAAAKAFAHQAFAGAHAAQAIAAAFgGQAFgHAAgKIAAgBQAAgKgFgHQgFgGgIAAQgHAAgFAGg");
	this.shape_94.setTransform(94,273.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#7E7E7E").s().p("AATAwIAAgpIglAAIAAApIgQAAIAAhfIAQAAIAAAoIAlAAIAAgoIAQAAIAABfg");
	this.shape_95.setTransform(85.5,272.5);

	this.instance_4 = new lib._2b();
	this.instance_4.parent = this;
	this.instance_4.setTransform(124,129);

	this.instance_5 = new lib._2a();
	this.instance_5.parent = this;
	this.instance_5.setTransform(37,129);

	var maskedShapeInstanceList = [this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.instance_4,this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]},62).to({state:[]},87).wait(211));

	// text1
	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AAQApIAAg1IggA1IgRAAIAAhRIASAAIAAA1IAfg1IASAAIAABRg");
	this.shape_96.setTransform(174.6,95);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AglApIABgPIAFABQAIAAACgLQAEgPAAgqIA3AAIAABSIgSAAIAAhDIgVAAQAAAqgGAOQgGAMgOAAg");
	this.shape_97.setTransform(165.4,95.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgXAfQgLgLAAgUIAAAAQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJAMAAASIAAAGIgzAAQADAWARAAQAKAAAKgIIAIALQgLAMgSAAQgPAAgLgMgAgQgEIAiAAQgBgYgQAAQgQAAgBAYg");
	this.shape_98.setTransform(157.6,95.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AAZAyIAAgSIgxAAIgBASIgQAAIAAghIAIAAQAJgSAAgmIAAgKIA4AAIAABCIAKAAIgCAhgAgPARIAdAAIAAgzIgVAAQAAAjgIAQg");
	this.shape_99.setTransform(148.9,96);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgTIAAAAQAAgSALgMQALgMAPAAQARAAAKAMQALAMAAASIAAAAQAAATgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAHAAAMIAAAAQAAAMAGAIQAGAHAIAAQAJAAAGgHQAGgHAAgMIAAgBQAAgMgGgHQgGgIgJAAQgJAAgFAIg");
	this.shape_100.setTransform(140.3,95.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AAWApIAAg2IgWAkIgVgjIAAA1IgRAAIAAhRIASAAIAUAlIAWglIASAAIAABRg");
	this.shape_101.setTransform(130.8,95);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgXAfQgLgLAAgUIAAAAQAAgSAKgMQAKgMAOAAQARAAAJAMQAJAMAAASIAAAGIgzAAQACAWASAAQAKAAAKgIIAIALQgLAMgSAAQgPAAgLgMgAgRgEIAjAAQgCgYgQAAQgOAAgDAYg");
	this.shape_102.setTransform(117.7,95.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AAbApIAAhRIASAAIAABRgAgsApIAAhRIASAAIAAAdIAOAAQAeAAAAAZQAAAbgeAAgAgaAbIANAAQANAAAAgMQAAgNgNAAIgNAAg");
	this.shape_103.setTransform(108,95);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AAPApIAAgiIgdAAIAAAiIgSAAIAAhRIASAAIAAAhIAdAAIAAghIASAAIAABRg");
	this.shape_104.setTransform(98.2,95);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AAYAyIAAgSIgwAAIgBASIgQAAIAAghIAIAAQAJgSAAgmIAAgKIA3AAIAABCIAKAAIgBAhgAgPARIAdAAIAAgzIgVAAQAAAjgIAQg");
	this.shape_105.setTransform(89.4,96);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgTIAAAAQAAgSALgMQALgMAPAAQARAAALAMQAKALAAATIAAAAQAAATgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAHAAAMIAAAAQAAAMAGAIQAGAHAIAAQAJAAAGgHQAGgHAAgMIAAgBQAAgMgGgHQgGgIgJAAQgJAAgFAIg");
	this.shape_106.setTransform(80.7,95.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgfApIAAhRIAiAAQALAAAIAFQAHAGAAAKQAAANgNAGQAQAEABAOQgBAXgdAAgAgOAbIAOAAQAOAAABgLQgBgLgOAAIgOAAgAgOgGIANAAQANAAAAgLQAAgKgMAAIgOAAg");
	this.shape_107.setTransform(72.3,95);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgbAfQgLgMABgTIAAAAQgBgSALgMQALgMAQAAQAQAAALAMQALALAAATIAAAAQAAATgLAMQgLAMgQAAQgQAAgLgMgAgOgTQgFAHAAAMIAAAAQAAAMAFAIQAGAHAIAAQAJAAAGgHQAGgHgBgMIAAgBQABgMgGgHQgGgIgJAAQgJAAgFAIg");
	this.shape_108.setTransform(63.6,95.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgkA2IAAhpIARAAIAAANQALgPANAAQANAAAJAKQAKAMAAAUIAAACQAAATgKAMQgJAKgNAAQgNAAgLgOIAAAkgAgNgeQgGAHAAAMIAAACQAAALAGAHQAGAHAHAAQAIAAAGgHQAFgHAAgLIAAgCQAAgMgFgHQgGgHgIAAQgHAAgGAHg");
	this.shape_109.setTransform(54.7,96.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AAPApIAAhCIgdAAIAABCIgSAAIAAhRIBBAAIAABRg");
	this.shape_110.setTransform(45.6,95);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgVAfQgKgMAAgTIAAAAQAAgSAKgMQALgMAPAAQAQAAALALIgIANQgJgJgJAAQgIAAgGAIQgGAHAAAMIAAAAQAAANAGAHQAGAHAJAAQAIAAAJgIIAIAMQgMAMgPAAQgPAAgLgMg");
	this.shape_111.setTransform(37.6,95.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgXAfQgLgLAAgUIAAAAQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJAMAAASIAAAGIgzAAQADAWAQAAQALAAAJgIIAJALQgMAMgRAAQgQAAgKgMgAgQgEIAiAAQgBgYgQAAQgPAAgCAYg");
	this.shape_112.setTransform(29.6,95.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgaAtQgKgMAAgWIAAgCQgBgXAFgMQAGgRASgEIAmgJIAEAOIgmAKQgRADgCATQAHgOATAAQAOAAAKALQAKAMAAAQIAAABQABASgKAMQgKALgSAAQgQAAgKgMgAgNgDQgGAHABALIAAABQgBALAGAIQAGAHAHAAQAJAAAFgHQAGgIAAgLIAAgBQAAgLgGgHQgFgHgJAAQgHAAgGAHg");
	this.shape_113.setTransform(21.1,93.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAOAAQARAAAJAMQAJAMAAASIAAAHIg0AAQAEAVARAAQALAAAJgJIAIALQgMANgRAAQgPAAgLgLgAgRgFIAjAAQgBgWgRAAQgOAAgDAWg");
	this.shape_114.setTransform(98.4,78.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AAbApIAAhSIASAAIAABSgAgsApIAAhSIARAAIAAAeIAPAAQAeAAAAAZQAAAbgeAAgAgbAcIAPAAQAMgBAAgNQAAgMgMAAIgPAAg");
	this.shape_115.setTransform(88.8,78.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AAPApIAAghIgdAAIAAAhIgSAAIAAhSIASAAIAAAjIAdAAIAAgjIASAAIAABSg");
	this.shape_116.setTransform(78.9,78.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgeApIAAhSIARAAIAAAeIANAAQAfAAAAAZQAAAbgeAAgAgNAcIANAAQAOgBAAgNQAAgMgOAAIgNAAg");
	this.shape_117.setTransform(71,78.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AglApIABgPIAFAAQAIAAACgKQAEgPAAgqIA3AAIAABSIgRAAIAAhDIgWAAQABApgHAPQgFAMgPAAg");
	this.shape_118.setTransform(62.1,78.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgYAkQgIgHAAgLIAAgBQAAgNAIgGQAIgHAOAAQAKAAAIADIAAgDQAAgRgRAAQgLAAgKAFIgEgPQAOgGAMAAQAhAAAAAhIAAAyIgRAAIAAgKQgJAMgNAAQgLAAgHgHgAgPAQIAAABQAAAGAEADQAEAEAGAAQAHAAAFgFQAFgEAAgHIAAgJQgFgDgLAAQgPAAAAAOg");
	this.shape_119.setTransform(54,78.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AAOApIgUgiIgKANIAAAVIgSAAIAAhSIASAAIAAAoIAcgoIAVAAIgcAjIAeAvg");
	this.shape_120.setTransform(46.7,78.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AARApIAAg1IghA1IgRAAIAAhSIARAAIAAA1IAhg1IARAAIAABSg");
	this.shape_121.setTransform(37.8,78.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AAPApIAAghIgdAAIAAAhIgSAAIAAhSIASAAIAAAjIAdAAIAAgjIASAAIAABSg");
	this.shape_122.setTransform(29.1,78.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AghAyIAFgOQAGACAEAAQAHAAAEgJIgehSIATAAIASA9IATg9IATAAIgeBVQgHAVgQAAQgKAAgIgDg");
	this.shape_123.setTransform(20.7,79.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AAWApIAAg2IgWAjIgVgjIAAA2IgSAAIAAhSIASAAIAVAlIAWglIASAAIAABSg");
	this.shape_124.setTransform(136.9,61.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAOAAQARAAAJAMQAJAMAAATIAAAFIg0AAQADAWARAAQALAAAKgIIAIAKQgMANgRAAQgPAAgLgLgAgRgFIAjAAQgCgXgQABQgOgBgDAXg");
	this.shape_125.setTransform(127.8,61.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AARApIAAgcIgOAAIgPAcIgVAAIAUgfQgRgHAAgRQAAgbAeAAIAiAAIAABSgAgJgXQgDADAAAHQAAANANAAIAQAAIAAgaIgNAAQgJAAgEADg");
	this.shape_126.setTransform(119.2,61.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AglApIABgPIAFABQAIAAACgLQAEgOAAgrIA3AAIAABSIgSAAIAAhDIgVAAQAAAqgGAOQgFAMgPAAg");
	this.shape_127.setTransform(110.7,61.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AggApIAAhSIAiAAQANABAGAFQAIAGAAAKQAAANgMAFQAPAFAAAOQAAAXgdAAgAgOAbIAPAAQANAAAAgKQAAgMgOAAIgOAAgAgOgGIAOAAQAMAAAAgKQAAgKgMAAIgOAAg");
	this.shape_128.setTransform(103,61.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgYAkQgIgHAAgMIAAgBQAAgMAIgHQAIgGAOAAQAIAAAKADIAAgDQAAgRgRAAQgKAAgLAFIgEgPQANgGANAAQAhAAAAAhIAAAyIgRAAIAAgKQgJAMgNAAQgLAAgHgHgAgPAQIAAAAQAAANAOAAQAHAAAFgEQAFgFAAgHIAAgIQgIgDgIAAQgPAAAAAOg");
	this.shape_129.setTransform(94.5,61.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgIApIAAhCIgXAAIAAgQIA/AAIAAAQIgXAAIAABCg");
	this.shape_130.setTransform(87.4,61.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgVAfQgKgLAAgTIAAgBQAAgSALgMQAKgMAQAAQAQAAAKAKIgIAOQgJgJgJABQgIgBgFAIQgGAHAAAMIAAABQAAAMAGAHQAFAHAJAAQAJAAAJgIIAHAMQgLAMgQAAQgPAAgLgMg");
	this.shape_131.setTransform(80.2,61.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AAZAyIAAgSIgxAAIgCASIgPAAIAAghIAIAAQAIgRAAgnIAAgLIA4AAIAABDIALAAIgCAhgAgPARIAdAAIAAgzIgWAAQAAAjgHAQg");
	this.shape_132.setTransform(71.9,62.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJAMAAATIAAAFIgzAAQACAWASAAQAKAAAKgIIAIAKQgLANgSAAQgPAAgLgLgAgQgFIAiAAQgBgKgEgGQgFgHgHABQgQgBgBAXg");
	this.shape_133.setTransform(63.4,61.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgkA2IAAhqIASAAIAAAOQAJgPAOAAQANAAAJAKQAKAMAAATIAAADQAAATgKALQgJALgNAAQgNAAgKgOIAAAkgAgNgeQgGAIAAALIAAACQAAALAGAHQAGAHAHAAQAIAAAGgHQAGgHAAgLIAAgCQAAgMgGgIQgGgGgIAAQgHgBgGAIg");
	this.shape_134.setTransform(54.8,62.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AAPApIAAhCIgdAAIAABCIgSAAIAAhSIBBAAIAABSg");
	this.shape_135.setTransform(45.8,61.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AAbApIAAhSIASAAIAABSgAgsApIAAhSIARAAIAAAdIAOAAQAeAAAAAaQABAOgJAGQgIAHgNAAgAgbAbIAOAAQANAAAAgNQAAgNgNABIgOAAg");
	this.shape_136.setTransform(32,61.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AAWApIAAg2IgWAjIAAAAIgWgjIAAA2IgRAAIAAhSIASAAIAVAlIAWglIARAAIAABSg");
	this.shape_137.setTransform(21.5,61.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AARAqIAAgdIgOAAIgPAdIgVAAIAUggQgRgGAAgSQAAgbAeAAIAiAAIAABTgAgJgXQgDADAAAHQAAANANAAIAQAAIAAgaIgNAAQgJAAgEADg");
	this.shape_138.setTransform(70.2,44.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AAQAqIAAgiIgfAAIAAAiIgRAAIAAhTIARAAIAAAiIAfAAIAAgiIARAAIAABTg");
	this.shape_139.setTransform(62.1,44.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AAZAzIAAgTIgxAAIgCATIgPAAIAAgiIAIAAQAIgRAAgnIAAgLIA4AAIAABDIALAAIgCAigAgPARIAdAAIAAgzIgWAAQAAAigHARg");
	this.shape_140.setTransform(53.3,45.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgSIAAgBQAAgSALgMQALgMAPAAQARAAALAMQAKAMAAASIAAABQAAASgLAMQgKAMgRAAQgPAAgLgMgAgOgTQgGAIAAALIAAABQAAALAGAIQAGAIAIAAQAKAAAFgIQAGgHAAgMIAAgBQAAgLgGgIQgGgIgJAAQgIAAgGAIg");
	this.shape_141.setTransform(44.6,44.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgZAqIAAhTIAzAAIAAAQIghAAIAABDg");
	this.shape_142.setTransform(37.6,44.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJAMAAASIAAAHIgzAAQADAVAQAAQAMAAAIgJIAJAMQgMAMgRAAQgPAAgLgLgAgQgFIAiAAQgBgWgQAAQgPAAgCAWg");
	this.shape_143.setTransform(29.9,44.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgbApQgNgPAAgZIAAgBQAAgYANgQQAOgPAUAAQAUAAAOAMIgJAPQgMgKgNAAQgLAAgJAKQgIALAAARIAAABQAAARAIALQAJALAMAAQAMAAANgLIAJANQgPAOgVAAQgUAAgNgPg");
	this.shape_144.setTransform(21.5,43.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AiaFlIC+rJIB3AAIi+LJg");
	this.shape_145.setTransform(212.9,34.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#CB0927").s().p("AioEqICgpSICxAAIifJSg");
	this.shape_146.setTransform(207.5,88.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#DBDBDA").s().p("Aj5HcIBfllICyAAICfpSIBDAAIj+O3g");
	this.shape_147.setTransform(206,106);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#DC052B").s().p("AyMHcIAAu3MAkZAAAIj/O3g");
	this.shape_148.setTransform(117.5,70.3);

	var maskedShapeInstanceList = [this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128,this.shape_129,this.shape_130,this.shape_131,this.shape_132,this.shape_133,this.shape_134,this.shape_135,this.shape_136,this.shape_137,this.shape_138,this.shape_139,this.shape_140,this.shape_141,this.shape_142,this.shape_143,this.shape_144,this.shape_145,this.shape_146,this.shape_147,this.shape_148];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96}]},62).to({state:[]},87).wait(211));

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

	// text2
	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AAQAqIAAg2IggA2IgRAAIAAhSIASAAIAAA1IAfg1IASAAIAABSg");
	this.shape_149.setTransform(110.7,79.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AAOAqIgTgjIgLANIAAAWIgSAAIAAhSIASAAIAAAmIAcgmIAUAAIgbAjIAeAvg");
	this.shape_150.setTransform(102.7,79.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgkA2IAAhpIARAAIAAANQAKgPAOAAQANAAAJALQAKALAAAUIAAACQAAATgKAMQgJAKgNAAQgOAAgKgOIAAAkgAgNgeQgGAHAAAMIAAACQAAALAGAIQAGAGAHAAQAIAAAGgGQAFgIAAgLIAAgCQAAgMgFgIQgGgHgIAAQgHAAgGAIg");
	this.shape_151.setTransform(93.7,80.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgSIAAgBQAAgSALgMQALgMAPAAQARAAALAMQAKAMAAASIAAAAQAAATgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAHAAAMIAAAAQAAAMAGAIQAGAIAIgBQAKABAFgIQAGgHAAgMIAAgBQAAgLgGgIQgGgIgJAAQgJAAgFAIg");
	this.shape_152.setTransform(84.5,79.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgbAtQgKgMABgVIAAgCQAAgYAEgMQAGgRARgEIAngJIAEAPIgmAJQgSAEgBASQAIgOASAAQAOAAAKALQAKAMAAAQIAAABQABASgLAMQgKALgRAAQgRAAgKgMgAgNgCQgFAGAAALIAAABQAAAMAFAHQAFAHAIAAQAJAAAGgHQAEgHAAgMIAAgBQABgLgGgGQgGgIgIAAQgIAAgFAIg");
	this.shape_153.setTransform(75.6,77.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AghAxIAGgNQAEADAGAAQAHAAADgJIgdhSIASAAIASA8IATg8IASAAIgcBTQgIAWgRABQgJgBgIgEg");
	this.shape_154.setTransform(67,80.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AggAqIAAhSIAiAAQANgBAGAGQAIAGAAAKQAAANgMAFQAQAFAAAOQgBAMgHAFQgJAHgNAAgAgOAbIAOAAQAPAAAAgLQAAgLgPABIgOAAgAgOgGIAOAAQAMAAAAgLQAAgJgMgBIgOAAg");
	this.shape_155.setTransform(54.9,79.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgSIAAgBQAAgSALgMQALgMAPAAQARAAALAMQALAMgBASIAAAAQABATgLAMQgLAMgRAAQgPAAgLgMgAgOgTQgGAHABAMIAAAAQAAAMAFAIQAGAIAIgBQAKABAFgIQAFgHAAgMIAAgBQAAgLgFgIQgGgIgJAAQgIAAgGAIg");
	this.shape_156.setTransform(46.2,79.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AAPAqIAAhEIgdAAIAABEIgSAAIAAhSIBBAAIAABSg");
	this.shape_157.setTransform(37.4,79.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AAQAqIAAg2IggA2IgRAAIAAhSIASAAIAAA1IAfg1IASAAIAABSg");
	this.shape_158.setTransform(28.7,79.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AgIAqIAAhEIgXAAIAAgOIA/AAIAAAOIgXAAIAABEg");
	this.shape_159.setTransform(20.9,79.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AARApIgRgdIgQAdIgTAAIAagpIgZgoIATAAIAPAbIARgbIASAAIgZAoIAaApg");
	this.shape_160.setTransform(137.1,62.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgUIAAAAQAAgSAKgMQAKgMAPAAQAQAAAJANQAJALAAASIAAAHIgzAAQACAVARAAQALAAAKgJIAIAMQgLAMgSAAQgPAAgLgLgAgQgEIAiAAQgBgYgQAAQgPAAgCAYg");
	this.shape_161.setTransform(129.2,62.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AgVAfQgLgMAAgTIAAAAQABgSAKgMQALgMAPAAQARAAAKALIgJANQgIgJgJAAQgIAAgFAIQgHAHAAAMIAAAAQAAAMAHAIQAFAHAIAAQAKAAAIgIIAIAMQgMAMgPAAQgPAAgLgMg");
	this.shape_162.setTransform(121.7,62.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AggApIAAhRIAiAAQAMAAAHAFQAIAGAAAKQgBANgMAGQARAEgBAOQAAAXgdAAgAgOAbIAOAAQAOAAAAgLQABgLgPAAIgOAAgAgOgGIANAAQAMAAABgLQAAgKgMAAIgOAAg");
	this.shape_163.setTransform(113.9,62.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AARApIAAgcIgOAAIgPAcIgVAAIAUgfQgRgGAAgRQAAgbAeAAIAiAAIAABRgAgJgXQgEADAAAHQAAANAOAAIAQAAIAAgaIgNAAQgJAAgEADg");
	this.shape_164.setTransform(101.2,62.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AglApIABgPIAFABQAHAAADgLQAEgPAAgqIA3AAIAABSIgSAAIAAhDIgUAAQAAAqgHAOQgFAMgPAAg");
	this.shape_165.setTransform(92.6,62.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AAZAzIAAgTIgxAAIgBATIgQAAIAAgiIAIAAQAJgSAAglIAAgLIA4AAIAABCIAKAAIgCAigAgPARIAdAAIAAg0IgVAAQAAAjgIARg");
	this.shape_166.setTransform(84.3,63.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AAOApIgTgiIgLANIAAAVIgSAAIAAhRIASAAIAAAmIAdgmIAUAAIgbAiIAdAvg");
	this.shape_167.setTransform(72.3,62.3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgTIAAAAQAAgSALgMQAKgMAQAAQARAAAKAMQALAMAAASIAAAAQAAATgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAIAAALIAAAAQAAAMAGAIQAGAHAIAAQAJAAAGgHQAGgIAAgLIAAgBQAAgMgGgHQgGgIgJAAQgJAAgFAIg");
	this.shape_168.setTransform(63.3,62.4);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AAZAzIAAgTIgxAAIgBATIgQAAIAAgiIAIAAQAJgSAAglIAAgLIA4AAIAABCIAKAAIgCAigAgPARIAdAAIAAg0IgWAAQAAAkgHAQg");
	this.shape_169.setTransform(54.3,63.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgZAkQgHgHAAgMIAAgBQAAgNAIgGQAIgGANAAQAJAAAKADIAAgDQAAgRgRAAQgJAAgMAEIgDgOQAMgGAOAAQAgAAAAAgIAAAzIgRAAIAAgKQgJAMgOAAQgKAAgIgHgAgPAPIAAABQAAANAOAAQAHAAAFgEQAFgFAAgHIAAgIQgIgDgHAAQgPAAgBANg");
	this.shape_170.setTransform(45.7,62.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AgVAfQgKgMAAgTIAAAAQAAgSALgMQAKgMAQAAQAPAAALALIgIANQgJgJgJAAQgIAAgGAIQgFAHAAAMIAAAAQAAAMAGAIQAFAHAJAAQAIAAAKgIIAHAMQgLAMgQAAQgPAAgLgMg");
	this.shape_171.setTransform(38.1,62.4);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgYAkQgIgHAAgMIAAgBQAAgMAIgHQAIgGAOAAQAIAAAKADIAAgDQAAgRgRAAQgKAAgLAEIgEgOQANgGANAAQAhAAAAAgIAAAzIgRAAIAAgKQgJAMgNAAQgLAAgHgHgAgPAPIAAABQAAANAOAAQAHAAAFgEQAFgFAAgHIAAgIQgIgDgIAAQgPAAAAANg");
	this.shape_172.setTransform(30,62.4);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AAQApIAAgiIgfAAIAAAiIgRAAIAAhRIARAAIAAAhIAfAAIAAghIARAAIAABRg");
	this.shape_173.setTransform(21.9,62.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AAWApIAAg2IgWAkIAAAAIgVgkIAAA2IgRAAIAAhRIASAAIAUAkIAWgkIARAAIAABRg");
	this.shape_174.setTransform(160.6,45.6);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgaAfQgLgLAAgTIAAgBQAAgSALgMQALgMAPAAQARAAALAMQAKAMAAASIAAABQAAASgLAMQgKAMgRAAQgPAAgLgMgAgOgTQgGAIAAALIAAABQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMIAAgBQAAgLgGgIQgGgIgJAAQgIAAgGAIg");
	this.shape_175.setTransform(151.1,45.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgkA2IAAhpIARAAIAAANQAKgPAOAAQANAAAJAKQAKAMAAAUIAAACQAAATgKALQgJALgNAAQgOAAgKgOIAAAkgAgNgeQgGAHAAANIAAABQAAALAGAIQAGAGAHABQAIgBAGgGQAFgIAAgLIAAgBQAAgNgGgHQgFgIgIAAQgHAAgGAIg");
	this.shape_176.setTransform(142.2,46.7);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AgaAfQgLgLAAgTIAAgBQAAgSALgMQALgMAPAAQARAAALAMQAKAMAAASIAAABQAAASgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAHAAAMIAAABQAAAMAGAHQAGAIAIAAQAJAAAGgIQAGgHAAgMIAAgBQAAgLgGgIQgGgIgJAAQgIAAgGAIg");
	this.shape_177.setTransform(133,45.6);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgaAtQgLgMABgWIAAgCQgBgYAFgLQAGgSASgDIAmgJIAEAOIgmAJQgSAFgBASQAIgPASAAQAOAAAKAMQAKAMAAAQIAAABQABASgLALQgKAMgRAAQgQAAgKgMgAgOgCQgFAGAAAMIAAAAQAAALAFAIQAHAHAHAAQAJAAAGgHQAEgIAAgLIAAAAQAAgMgFgGQgFgIgJAAQgIAAgGAIg");
	this.shape_178.setTransform(124.1,44.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AAbApIAAhRIASAAIAABRgAgsApIAAhRIARAAIAAAdIAPAAQAeAAAAAZQAAAcgegBgAgbAcIAPAAQAMAAAAgOQAAgMgMAAIgPAAg");
	this.shape_179.setTransform(114.1,45.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AggApIAAhRIAiAAQAMAAAHAFQAIAFAAALQAAANgMAFQAPAGAAAOQAAAKgHAGQgIAHgOgBgAgOAcIAOAAQAOAAAAgMQAAgKgOgBIgOAAgAgOgGIAOAAQAMAAgBgKQAAgLgLAAIgOAAg");
	this.shape_180.setTransform(104.7,45.6);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AAWApIAAg2IgWAkIgVgkIAAA2IgSAAIAAhRIASAAIAVAkIAWgkIASAAIAABRg");
	this.shape_181.setTransform(91.4,45.6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AAQApIAAg1IggA1IgRAAIAAhRIASAAIAAA0IAgg0IARAAIAABRg");
	this.shape_182.setTransform(82,45.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AgzApIAAhRIARAAIAABCIAaAAIAAhCIARAAIAABCIAaAAIAAhCIARAAIAABRg");
	this.shape_183.setTransform(71.4,45.6);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgeApIAAhRIARAAIAAAdIANAAQAfAAAAAZQAAAcgfgBgAgNAcIANAAQAOAAAAgOQAAgMgOAAIgNAAg");
	this.shape_184.setTransform(61.6,45.6);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AglApIABgPIAFAAQAHAAADgKQAEgPAAgqIA3AAIAABSIgSAAIAAhDIgVAAQABAqgHAOQgFAMgPAAg");
	this.shape_185.setTransform(52.6,45.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AgaAfQgLgLAAgTIAAgBQAAgSALgMQALgMAPAAQARAAALAMQAKAMAAASIAAABQAAASgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAHAAAMIAAABQAAAMAGAHQAGAIAIAAQAJAAAGgIQAGgHAAgMIAAgBQAAgLgGgIQgGgIgJAAQgIAAgGAIg");
	this.shape_186.setTransform(44.6,45.6);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgbAtQgKgMAAgWIAAgCQABgYAEgLQAGgSARgDIAogJIACAOIglAJQgSAFgBASQAIgPASAAQAOAAAKAMQALAMgBAQIAAABQAAASgKALQgKAMgRAAQgRAAgKgMgAgNgCQgGAGAAAMIAAAAQAAALAGAIQAFAHAIAAQAJAAAGgHQAEgIAAgLIAAAAQABgMgGgGQgGgIgIAAQgIAAgFAIg");
	this.shape_187.setTransform(35.8,44.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AgbApQgNgQAAgYIAAgBQgBgYAOgQQAOgPAUAAQAUAAAOAMIgJAPQgMgKgNAAQgMAAgIAKQgIALgBARIAAABQABARAIALQAJAKAMAAQANAAAMgLIAIAOQgOAOgVAAQgTAAgOgPg");
	this.shape_188.setTransform(22.5,44.2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AhpDmIB6nKIBYAAIh5HKg");
	this.shape_189.setTransform(188.7,31.4);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#CB0927").s().p("AiNEUICWonICFAAIiWIng");
	this.shape_190.setTransform(182.8,77);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#D1D1D1").s().p("AjCGDIBYlKICEAAIB3m6IAyAAIjOMEg");
	this.shape_191.setTransform(182.5,88);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#DC052B").s().p("Av4GaIAAszIfxAAIjZMzg");
	this.shape_192.setTransform(102.5,63.7);

	var maskedShapeInstanceList = [this.shape_149,this.shape_150,this.shape_151,this.shape_152,this.shape_153,this.shape_154,this.shape_155,this.shape_156,this.shape_157,this.shape_158,this.shape_159,this.shape_160,this.shape_161,this.shape_162,this.shape_163,this.shape_164,this.shape_165,this.shape_166,this.shape_167,this.shape_168,this.shape_169,this.shape_170,this.shape_171,this.shape_172,this.shape_173,this.shape_174,this.shape_175,this.shape_176,this.shape_177,this.shape_178,this.shape_179,this.shape_180,this.shape_181,this.shape_182,this.shape_183,this.shape_184,this.shape_185,this.shape_186,this.shape_187,this.shape_188,this.shape_189,this.shape_190,this.shape_191,this.shape_192];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149}]},137).to({state:[]},86).wait(137));

	// pic2
	this.instance_6 = new lib._3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(15,104);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(137).to({_off:false},0).to({_off:true},86).wait(137));

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
	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAOAAQARAAAJAMQAJAMAAATIAAAGIgzAAQACAVASAAQALAAAJgJIAIAMQgNAMgQAAQgPAAgLgLgAgRgFIAjAAQgBgWgRAAQgOAAgDAWg");
	this.shape_193.setTransform(196.2,96.5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AAOAqIgTgjIgLANIAAAWIgSAAIAAhTIASAAIAAAoIAdgoIAUAAIgbAjIAdAwg");
	this.shape_194.setTransform(188.7,96.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AgkA2IAAhqIARAAIAAAOQAKgPAOAAQANAAAJAKQAKAMAAAUIAAACQAAATgKALQgJALgNAAQgOAAgKgOIAAAkgAgNgeQgGAHAAAMIAAACQAAALAGAHQAGAHAHAAQAIAAAGgHQAFgHAAgLIAAgCQAAgMgGgHQgFgIgIAAQgHAAgGAIg");
	this.shape_195.setTransform(179.8,97.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgSIAAgBQAAgSALgMQALgMAPAAQARAAALAMQAKAMAAASIAAABQAAASgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAHAAAMIAAABQAAALAGAIQAGAIAIAAQAKAAAFgIQAGgHAAgMIAAgBQAAgLgGgIQgGgIgJAAQgIAAgGAIg");
	this.shape_196.setTransform(170.6,96.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgaAtQgLgMABgWIAAgCQgBgXAFgMQAGgRASgEIAmgJIAEAOIgmAJQgSAFgBASQAHgOATAAQAOAAAKALQAKALAAARIAAAAQABATgLALQgKAMgRAAQgQAAgKgMgAgOgDQgFAHAAALIAAABQAAALAFAHQAHAIAHAAQAJAAAGgIQAEgHAAgLIAAgBQAAgLgFgHQgFgHgJAAQgIAAgGAHg");
	this.shape_197.setTransform(161.7,95.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AghAyIAGgOQAEADAGAAQAGAAAEgJIgdhTIASAAIATA9IASg9IATAAIgdBVQgFALgEAGQgGAEgKAAQgJAAgIgDg");
	this.shape_198.setTransform(153.1,97.7);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AgbAtQgJgMgBgWIAAgCQABgXAEgMQAGgRARgEIAogJIACAOIglAJQgSAFgBASQAIgOASAAQAOAAAKALQALALAAARIAAAAQAAATgLALQgKAMgRAAQgQAAgLgMgAgNgDQgFAHgBALIAAABQABALAFAHQAGAIAHAAQAJAAAFgIQAFgHABgLIAAgBQAAgLgGgHQgFgHgJAAQgHAAgGAHg");
	this.shape_199.setTransform(140.5,95.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgSIAAgBQAAgSALgMQALgMAPAAQARAAALAMQAKAMAAASIAAABQAAASgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAHAAAMIAAABQAAALAGAIQAGAIAIAAQAJAAAGgIQAGgIAAgLIAAgBQAAgLgGgIQgGgIgJAAQgIAAgGAIg");
	this.shape_200.setTransform(131.5,96.5);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJAMAAATIAAAGIgzAAQACAVASAAQALAAAJgJIAIAMQgMAMgRAAQgPAAgLgLgAgLgVQgEAGgBAKIAiAAQgBgKgEgGQgFgGgHAAQgHAAgFAGg");
	this.shape_201.setTransform(118.8,96.5);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AARAqIAAg2IghA2IgRAAIAAhTIASAAIAAA2IAgg2IARAAIAABTg");
	this.shape_202.setTransform(110.3,96.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AAQAqIAAgiIgfAAIAAAiIgRAAIAAhTIARAAIAAAiIAfAAIAAgiIARAAIAABTg");
	this.shape_203.setTransform(101.6,96.5);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJAMAAATIAAAGIgzAAQACAVASAAQALAAAJgJIAIAMQgMAMgRAAQgPAAgLgLgAgLgVQgEAGgBAKIAiAAQgCgWgPAAQgHAAgFAGg");
	this.shape_204.setTransform(93.1,96.5);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AglApIABgPIAFAAQAIAAACgKQAEgOAAgrIA3AAIAABSIgRAAIAAhCIgWAAQAAAogGAPQgGAMgOAAg");
	this.shape_205.setTransform(84.2,96.5);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AgfAqIAAhTIAhAAQAMAAAIAGQAGAGAAAKQAAANgMAGQAQAEABAOQAAALgJAGQgIAGgNABgAgOAbIAOAAQAPABAAgLQgBgLgOAAIgOAAgAgOgGIANAAQANAAAAgLQAAgKgMABIgOAAg");
	this.shape_206.setTransform(76.5,96.5);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AgYAkQgIgHAAgLIAAgBQAAgNAIgGQAIgHAOAAQAKAAAIADIAAgDQAAgRgRAAQgLAAgKAFIgEgPQAOgGAMAAQAhAAAAAhIAAAyIgRAAIAAgKQgIAMgOAAQgLAAgHgHgAgPAQIAAABQAAANAOAAQAHAAAFgFQAFgEAAgHIAAgJQgFgDgLAAQgPAAAAAOg");
	this.shape_207.setTransform(68,96.5);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AgIAqIAAhDIgXAAIAAgQIA+AAIAAAQIgWAAIAABDg");
	this.shape_208.setTransform(60.9,96.5);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AgVAfQgLgMABgSIAAgBQgBgSALgMQAMgMAOAAQAQAAALALIgJANQgIgIgJAAQgIAAgFAHQgHAHABAMIAAABQgBAMAHAHQAGAHAHAAQAKAAAIgIIAIAMQgMAMgPAAQgPAAgLgMg");
	this.shape_209.setTransform(53.8,96.5);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AAZAzIAAgTIgxAAIgCATIgPAAIAAgiIAIAAQAJgSAAglIAAgMIA4AAIAABDIAKAAIgCAigAgPARIAdAAIAAgzIgWAAQAAAigHARg");
	this.shape_210.setTransform(45.4,97.4);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAOAAQARAAAJAMQAJAMAAATIAAAGIg0AAQAEAVARAAQAKAAAKgJIAIAMQgNAMgQAAQgPAAgLgLgAgLgVQgEAGgCAKIAiAAQAAgKgEgGQgFgGgIAAQgGAAgFAGg");
	this.shape_211.setTransform(36.9,96.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AgkA2IAAhqIARAAIAAAOQAKgPANAAQAOAAAJAKQAKAMAAAUIAAACQAAATgKALQgJALgOAAQgNAAgKgOIAAAkgAgNgeQgGAHAAAMIAAACQAAALAGAHQAGAHAHAAQAIAAAGgHQAFgHAAgLIAAgCQAAgMgGgHQgFgIgIAAQgHAAgGAIg");
	this.shape_212.setTransform(28.4,97.6);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AAPAqIAAhDIgdAAIAABDIgSAAIAAhTIBBAAIAABTg");
	this.shape_213.setTransform(19.3,96.5);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAOAAQARAAAJAMQAJANAAARIAAAHIgzAAQACAVASAAQALAAAJgJIAIALQgLANgSAAQgPAAgLgLgAgRgFIAjAAQgCgWgQAAQgOAAgDAWg");
	this.shape_214.setTransform(135.5,79.7);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("Ag0ApIAAhSIASAAIAABDIAaAAIAAhDIARAAIAABDIAaAAIAAhDIARAAIAABSg");
	this.shape_215.setTransform(125.1,79.7);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AgZAkQgHgHAAgLIAAgBQAAgNAIgGQAIgHAOAAQAIAAAKADIAAgDQAAgRgSAAQgJAAgLAFIgEgPQAMgGAOAAQAhAAAAAhIAAAyIgRAAIAAgKQgJAMgOAAQgKAAgIgHgAgPAQIAAABQAAAMAOAAQAHAAAFgEQAFgFAAgHIAAgIQgHgDgJAAQgPAAAAAOg");
	this.shape_216.setTransform(114.6,79.7);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AggApIAAhSIAiAAQAbABgBAVQABANgMAGQAQAEAAAOQAAAXgfAAgAgOAcIAOAAQAPAAAAgLQAAgMgPAAIgOAAgAgOgGIAOAAQALAAAAgKQAAgLgLABIgOAAg");
	this.shape_217.setTransform(106.9,79.7);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AgIApIAAhCIgWAAIAAgQIA+AAIAAAQIgYAAIAABCg");
	this.shape_218.setTransform(95.2,79.7);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AghAyIAGgPQAEADAFAAQAIAAADgJIgehSIATAAIASA9IATg9IASAAIgdBUQgHAXgRgBQgIAAgJgDg");
	this.shape_219.setTransform(87.7,80.9);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AAPApIAAghIgdAAIAAAhIgSAAIAAhSIASAAIAAAiIAdAAIAAgiIASAAIAABSg");
	this.shape_220.setTransform(79.2,79.7);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AgkA2IAAhqIASAAIAAAOQAJgPAOAAQANAAAJAKQAKAMAAAUIAAACQAAATgKAMQgJAKgNAAQgNAAgKgOIAAAkgAgNgeQgGAHAAAMIAAACQAAAKAGAIQAGAIAHAAQAJAAAFgIQAGgHAAgLIAAgCQAAgMgGgHQgGgIgIABQgHAAgGAHg");
	this.shape_221.setTransform(70.5,80.8);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAOAAQARAAAJAMQAJANAAARIAAAHIgzAAQACAVASAAQALAAAJgJIAIALQgLANgSAAQgPAAgLgLgAgRgFIAjAAQgCgWgQAAQgOAAgDAWg");
	this.shape_222.setTransform(61.6,79.7);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AggApIAAhSIAiAAQAMAAAHAGQAHAGABAKQAAANgMAGQAPAEAAAOQAAALgHAHQgJAFgOAAgAgOAcIAOAAQAOAAAAgLQAAgMgOAAIgOAAgAgOgGIAOAAQAMAAgBgKQAAgLgLABIgOAAg");
	this.shape_223.setTransform(53.6,79.7);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJANAAARIAAAHIgzAAQABAKAGAGQAGAFAHAAQALAAAJgJIAIALQgLANgSAAQgPAAgLgLgAgQgFIAiAAQgCgWgPAAQgQAAgBAWg");
	this.shape_224.setTransform(45.2,79.7);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AgkA2IAAhqIASAAIAAAOQAJgPAOAAQANAAAJAKQAKAMAAAUIAAACQAAATgKAMQgJAKgNAAQgNAAgKgOIAAAkgAgNgeQgGAHAAAMIAAACQAAALAGAHQAGAIAHAAQAIAAAGgIQAGgHAAgLIAAgCQAAgMgGgHQgGgIgIABQgHAAgGAHg");
	this.shape_225.setTransform(36.6,80.8);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJANAAARIAAAHIgzAAQADAVAQAAQAMAAAIgJIAJALQgLANgSAAQgPAAgLgLgAgQgFIAiAAQgBgWgQAAQgPAAgCAWg");
	this.shape_226.setTransform(27.8,79.7);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AAPApIAAhCIgdAAIAABCIgSAAIAAhSIBBAAIAABSg");
	this.shape_227.setTransform(19.3,79.7);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AgUAqIAAhSIARAAIAAARQAHgSASAAIAAATIgBAAQgLAAgHAHQgGAIAAANIAAAkg");
	this.shape_228.setTransform(137.7,62.8);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("AgXAfQgLgMAAgSIAAgBQAAgSAKgMQAKgMAOAAQARAAAJAMQAJAMAAATIAAAFIg0AAQADAWASAAQAKAAAKgIIAIAKQgNANgQAAQgPAAgLgMgAgRgFIAiAAQAAgKgEgGQgFgHgIABQgOAAgDAWg");
	this.shape_229.setTransform(130.4,63);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("AgHAqIgdhTIATAAIARA8IATg8IASAAIgcBTg");
	this.shape_230.setTransform(122.6,62.9);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgSIAAgBQAAgSALgMQALgMAPAAQARAAALAMQALAMgBASIAAABQABASgLAMQgLAMgRAAQgPAAgLgMgAgOgTQgGAIABALIAAABQAAALAFAIQAGAHAIABQAKgBAFgHQAGgIAAgLIAAgBQAAgLgGgIQgGgHgJAAQgIAAgGAHg");
	this.shape_231.setTransform(114.4,63);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AgbAfQgKgMgBgSIAAgBQABgSAKgMQAMgMAPAAQARAAAKAMQAMAMAAASIAAABQAAASgMAMQgKAMgRAAQgQAAgLgMgAgOgTQgGAIAAALIAAABQAAALAGAIQAGAHAIABQAJgBAGgHQAGgIAAgLIAAgBQgBgLgFgIQgGgHgJAAQgIAAgGAHg");
	this.shape_232.setTransform(105.4,63);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("AAWA3IAAgvIgqAAIAAAvIgSAAIAAhtIASAAIAAAuIAqAAIAAguIASAAIAABtg");
	this.shape_233.setTransform(95.8,61.6);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFFFF").s().p("AAcAqIAAhSIARAAIAABSgAgsAqIAAhSIASAAIAAAdIAOAAQAeAAAAAZQAAAbgeABgAgaAbIANAAQANAAABgMQgBgNgNAAIgNAAg");
	this.shape_234.setTransform(81.1,62.9);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFFFF").s().p("AgVAfQgKgMAAgSIAAgBQAAgSAKgMQALgMAPAAQAQAAALAKIgIAOQgJgIgJAAQgIAAgGAHQgGAHAAAMIAAABQAAAMAGAHQAGAHAJAAQAIAAAJgIIAIAMQgLAMgQAAQgPAAgLgMg");
	this.shape_235.setTransform(71.8,63);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("AgbAfQgLgMAAgSIAAgBQAAgSALgMQAMgMAPAAQARAAAKAMQAMAMAAASIAAABQAAASgMAMQgKAMgRAAQgPAAgMgMgAgOgTQgFAIgBALIAAABQAAALAHAIQAFAHAIABQAJgBAGgHQAGgIAAgLIAAgBQAAgLgGgIQgGgHgJAAQgIAAgGAHg");
	this.shape_236.setTransform(63.5,63);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFFFF").s().p("AgVAfQgLgMAAgSIAAgBQABgSAKgMQALgMAPAAQARAAAKAKIgJAOQgIgIgJAAQgIAAgFAHQgHAHAAAMIAAABQAAAMAHAHQAFAHAJAAQAIAAAKgIIAHAMQgLAMgQAAQgPAAgLgMg");
	this.shape_237.setTransform(55.4,63);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("AgXAfQgLgMAAgSIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJAMQAJAMAAATIAAAFIgzAAQACAWASAAQAKAAAKgIIAIAKQgMANgRAAQgPAAgLgMgAgLgWQgEAHgBAKIAiAAQgBgKgEgGQgFgHgHABQgHAAgFAFg");
	this.shape_238.setTransform(47.4,63);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("AglApIABgPIAFABQAHAAADgLQAEgOAAgrIA3AAIAABSIgSAAIAAhCIgUAAQAAApgHAOQgGAMgOAAg");
	this.shape_239.setTransform(38.4,63);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("AAbAqIAAhSIASAAIAABSgAgsAqIAAhSIASAAIAAAdIAOAAQAeAAAAAZQAAAbgeABgAgaAbIANAAQANAAAAgMQAAgNgNAAIgNAAg");
	this.shape_240.setTransform(29.1,62.9);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFFFF").s().p("AAPAqIAAhDIgdAAIAABDIgSAAIAAhSIBBAAIAABSg");
	this.shape_241.setTransform(19.3,62.9);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAPAAQAQAAAJANQAJAMAAARIAAAHIgzAAQABAKAGAGQAGAFAHAAQALAAAJgJIAIAMQgLAMgSAAQgPAAgLgLgAgLgVQgEAGgBAKIAiAAQgCgWgPAAQgHAAgFAGg");
	this.shape_242.setTransform(116.9,46.2);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFFFF").s().p("AAbAqIAAhTIASAAIAABTgAgsAqIAAhTIASAAIAAAeIAOAAQAeAAAAAZQAAAbgeABgAgaAbIANAAQANAAAAgMQAAgOgNAAIgNAAg");
	this.shape_243.setTransform(107.2,46.2);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("AAPAqIAAgiIgdAAIAAAiIgSAAIAAhTIASAAIAAAiIAdAAIAAgiIASAAIAABTg");
	this.shape_244.setTransform(97.4,46.2);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFFFF").s().p("AAYAzIAAgSIgwAAIgCASIgPAAIAAgiIAIAAQAIgSAAglIAAgMIA4AAIAABDIALAAIgCAigAgPARIAdAAIAAg0IgWAAQAAAkgHAQg");
	this.shape_245.setTransform(88.6,47.1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgSIAAgBQAAgSALgMQALgMAPAAQARAAALAMQAKAMAAASIAAABQAAASgLAMQgLAMgQAAQgQAAgKgMgAgOgTQgGAIAAALIAAABQAAALAGAIQAGAHAIAAQAJAAAGgHQAGgIAAgLIAAgBQAAgLgGgIQgGgHgJgBQgJABgFAHg");
	this.shape_246.setTransform(79.9,46.2);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFFFFF").s().p("AggAqIAAhTIAiAAQANAAAGAGQAIAGAAAKQAAAMgMAGQAPAEAAAPQAAAMgIAFQgHAHgOAAgAgOAbIAPAAQANABAAgLQAAgMgOABIgOAAgAgOgGIAOAAQAMAAgBgLQAAgKgLAAIgOAAg");
	this.shape_247.setTransform(71.5,46.2);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("AgbAfQgKgMgBgSIAAgBQABgSAKgMQAMgMAPAAQAQAAAMAMQAKAMABASIAAABQgBASgKAMQgMAMgQAAQgPAAgMgMgAgOgTQgFAIgBALIAAABQAAALAHAIQAFAHAIAAQAJAAAGgHQAFgHABgMIAAgBQgBgLgFgIQgGgHgJgBQgIABgGAHg");
	this.shape_248.setTransform(62.8,46.2);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFFFF").s().p("AgkA2IAAhqIARAAIAAAOQALgPANAAQANAAAJAKQAKAMAAAUIAAACQAAATgKAMQgJAKgNAAQgNAAgLgOIAAAkgAgNgeQgGAIAAALIAAACQAAALAGAHQAGAIAHgBQAIABAGgIQAGgHAAgLIAAgCQAAgLgGgIQgGgHgIgBQgHABgGAHg");
	this.shape_249.setTransform(53.9,47.3);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFFFF").s().p("AAPAqIAAhEIgdAAIAABEIgSAAIAAhTIBBAAIAABTg");
	this.shape_250.setTransform(44.8,46.2);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("AgVAfQgKgMAAgSIAAgBQAAgSAKgMQALgMAPAAQAPAAAMAKIgIAOQgJgIgJAAQgIAAgGAHQgGAIAAALIAAABQAAAMAGAHQAGAHAJAAQAJAAAIgIIAIANQgLALgQAAQgPAAgLgMg");
	this.shape_251.setTransform(36.8,46.2);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AgXAgQgLgMAAgTIAAgBQAAgSAKgMQAKgMAOAAQARAAAJANQAJAMAAARIAAAHIg0AAQAEAVARAAQALAAAJgJIAIAMQgMAMgRAAQgPAAgLgLgAgRgFIAjAAQgBgWgRAAQgOAAgDAWg");
	this.shape_252.setTransform(28.8,46.2);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFFFFF").s().p("AgmA3IAAhtIBFAAIAAARIgzAAIAAAbIAXAAQAQAAAKAIQAKAIAAAPQAAAQgLAJQgKAJgRAAgAgUAmIAWAAQATAAAAgQQAAgRgTAAIgWAAg");
	this.shape_253.setTransform(20.1,44.8);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("AicFpIDBrRIB4AAIjBLRg");
	this.shape_254.setTransform(231.8,34.9);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#CB0927").s().p("AiqEtIChpZIC0AAIiiJZg");
	this.shape_255.setTransform(226.3,89.1);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#DBDBDA").s().p("Aj8HiIBhlqICzAAICipZIBDAAIkBPDg");
	this.shape_256.setTransform(224.8,107.1);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#DC052B").s().p("Az2HiIAAvCMAntAAAIkCPCg");
	this.shape_257.setTransform(126,71);

	var maskedShapeInstanceList = [this.shape_193,this.shape_194,this.shape_195,this.shape_196,this.shape_197,this.shape_198,this.shape_199,this.shape_200,this.shape_201,this.shape_202,this.shape_203,this.shape_204,this.shape_205,this.shape_206,this.shape_207,this.shape_208,this.shape_209,this.shape_210,this.shape_211,this.shape_212,this.shape_213,this.shape_214,this.shape_215,this.shape_216,this.shape_217,this.shape_218,this.shape_219,this.shape_220,this.shape_221,this.shape_222,this.shape_223,this.shape_224,this.shape_225,this.shape_226,this.shape_227,this.shape_228,this.shape_229,this.shape_230,this.shape_231,this.shape_232,this.shape_233,this.shape_234,this.shape_235,this.shape_236,this.shape_237,this.shape_238,this.shape_239,this.shape_240,this.shape_241,this.shape_242,this.shape_243,this.shape_244,this.shape_245,this.shape_246,this.shape_247,this.shape_248,this.shape_249,this.shape_250,this.shape_251,this.shape_252,this.shape_253,this.shape_254,this.shape_255,this.shape_256,this.shape_257];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193}]},211).to({state:[]},87).wait(62));

	// pic3
	this.instance_7 = new lib._4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(45,114);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(211).to({_off:false},0).to({_off:true},87).wait(62));

	// bg
	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.lf(["#DBDBDB","#FFFFFF","#8A8A8A"],[0,0.514,0.984],13,-49.7,-58.6,225).s().p("Ar1fKMAQwg+TIG7AAMgQwA+Tg");
	this.shape_258.setTransform(80,200.3);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.lf(["#DBDBDB","#FFFFFF","#E8E8E8"],[0,0.514,0.984],0,-51.2,0,86.8).s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape_259.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_259},{t:this.shape_258}]}).wait(360));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(119.5,199.5,241,401);
// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/bg2.jpg", id:"bg2"},
		{src:"images/240x400_atlas_P_.png", id:"240x400_atlas_P_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;