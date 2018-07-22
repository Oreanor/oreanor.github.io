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


(lib.sdf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJAKQgFgEAAgGQAAgFAFgFQAEgDAFAAQAHAAADADQAFAFAAAFQAAAGgFAEQgDAFgHAAQgFAAgEgFg");
	this.shape.setTransform(-0.6,8.5,0.823,0.823);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeAiQgLgLAAgWQAAgUAMgNQANgMARAAQARgBANAMQALALAAASIgBAKIg+AAQABALAHAFQAGAGALABQANAAAHgIIAIAQQgLAIgUAAQgUAAgLgLgAgUgIIAqAAQgCgUgTAAQgRAAgEAUg");
	this.shape_1.setTransform(-6.9,5.8,0.823,0.823);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AASArIAAglIgjAAIAAAlIgVAAIAAhVIAVAAIAAAgIAjAAIAAggIAVAAIAABVg");
	this.shape_2.setTransform(-15,5.8,0.823,0.823);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgmBDIAAhXIAUAAIAAAzIA0g1IAFAAIAABXIgUAAIAAg0Ig0A2gAgRgsQgJgHgBgMIARgEQACAQAKgBQANAAABgOIAQADQgCAMgJAHQgHAGgMAAQgMAAgHgGg");
	this.shape_3.setTransform(-23.2,4,0.823,0.823);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATAqQgDgDgCgEQgDAFgHACQgFAEgIgBQgOAAgIgHQgIgGAAgNQAAgPALgIQALgJAVAAIAIABQAAgQgSAAQgLAAgJAFIgEgQQAKgGAPABQATgBAJAKQAKAJAAAZIAAASQAAASAHAEQgDAFgDAAQgDABgEAAQgDAAgFgDgAgTARQAAAMAOAAQARAAAAgSIAAgIIgIgBQgXAAAAAPg");
	this.shape_4.setTransform(-30.9,5.8,0.823,0.823);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiAkIAKgQQAKAJAOAAQAOAAAAgLQAAgMgQAAIgMAAIAAgPIAOABQAMAAAAgKQAAgFgDgCQgEgDgFAAQgLAAgMAHIgGgQQAPgIAPABQANAAAKAGQAIAHAAALQAAAPgOAEQAHABAFAGQAFAFAAAHQAAANgJAHQgMAHgPAAQgUAAgNgJg");
	this.shape_5.setTransform(-38.1,5.8,0.823,0.823);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmAtIAAhXIAUAAIAAAzIAzg1IAGAAIAABXIgUAAIAAgzIg0A1g");
	this.shape_6.setTransform(-45.4,5.8,0.823,0.823);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAfA7IAAgfIg8AAIAAAfIgSAAIAAgvIAIAAQAIgKAGgQQAEgRABgQIAAgLIA4AAIAABGIAMAAIAAAvgAgTAMIAkAAIAAg2IgUAAQgCAigOAUg");
	this.shape_7.setTransform(-53.8,7,0.823,0.823);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgmAtIAAhXIAUAAIAAAzIA0g1IAFAAIAABXIgUAAIAAgzIgzA1g");
	this.shape_8.setTransform(-66.4,5.8,0.823,0.823);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAUAsIgUgeIgUAeIgYAAIAigsIgggrIAYAAIASAcIAUgcIAWAAIgfAqIAiAtg");
	this.shape_9.setTransform(21.5,-9.4,0.823,0.823);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AglAsIAAgRIADABQAEAAABgFQABgGAFgGQAFgFAHgCQgVgEAAgSQAAgLAIgHQAJgIARAAIAkACIAABWIgUAAIAAghIgFAAQgWAAgDATQgCAPgPAAgAgIgZQgDAEAAAFQAAAFAFAEQAFADAGAAIANAAIAAgYIgQAAQgGAAgEADg");
	this.shape_10.setTransform(13.6,-9.4,0.823,0.823);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgmAuIAAhZIAVAAIAAA0IAzg2IAFAAIAABZIgUAAIAAg0Ig0A2g");
	this.shape_11.setTransform(5.9,-9.4,0.823,0.823);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgdAsIAAhXIA7AAIAAASIgnAAIAABFg");
	this.shape_12.setTransform(-1.2,-9.4,0.823,0.823);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgTAMgNQALgMASAAQAUAAALAMQALANAAATQAAAWgLALQgMAMgTAAQgTAAgLgMgAgOgUQgGAHAAANQAAAdAUAAQAJAAAGgIQAGgIAAgNQAAgcgVAAQgIAAgGAIg");
	this.shape_13.setTransform(-8.5,-9.4,0.823,0.823);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgqAaQAJAAAFgGQAFgFAEgPQAEgSAAgUIAAgFIA6AAIAABWIgUAAIAAhGIgWAAQAAAQgDARQgEAQgFAIQgHAJgGACQgHADgLAAg");
	this.shape_14.setTransform(-16.8,-9.4,0.823,0.823);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgTAMgNQAKgMATAAQAUAAALAMQALANAAATQAAAVgLAMQgNAMgSAAQgTAAgLgMgAgOgUQgGAHAAANQAAAdAUAAQAJAAAGgIQAGgIAAgNQgBgcgUAAQgJAAgFAIg");
	this.shape_15.setTransform(-24.5,-9.4,0.823,0.823);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AASAsIAAgmIgjAAIAAAmIgVAAIAAhXIAVAAIAAAhIAjAAIAAghIAVAAIAABXg");
	this.shape_16.setTransform(-32.5,-9.4,0.823,0.823);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAVAsIgVgeIgUAeIgYAAIAigsIgfgrIAXAAIASAcIAUgcIAXAAIghAqIAjAtg");
	this.shape_17.setTransform(-40.4,-9.4,0.823,0.823);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgeAiQgMgLABgWQgBgUANgNQAMgMARAAQAUAAALALQALALAAASIgBAKIg9AAQAAALAHAFQAGAGALAAQANAAAIgHIAIAQQgMAIgVAAQgSAAgMgLgAgTgIIApAAQgDgTgSAAQgRAAgDATg");
	this.shape_18.setTransform(-48.2,-9.4,0.823,0.823);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgJAsIAAhFIgZAAIAAgSIBFAAIAAASIgZAAIAABFg");
	this.shape_19.setTransform(-55.5,-9.4,0.823,0.823);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgkAsIAAhWIAmgBQAOAAAJAGQAIAHAAALQAAAFgDAFQgDAFgHADQARAFAAAQQAAAMgJAFQgJAHgQAAgAgQAcIARABQAQAAAAgMQAAgGgFgDQgFgCgGAAIgRAAgAgQgbIAAATIAQAAQAOAAAAgKQAAgEgEgDQgDgDgGAAg");
	this.shape_20.setTransform(-66.6,-9.5,0.823,0.823);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAfArIAAhWIAUAAIAABWgAgyArIAAhWIATAAIAAAfIAQAAQAPAAAJAHQAJAHAAAOQAAAbghAAgAgfADIAAAYIAOABQAJAAADgDQAEgFAAgFQAAgFgEgEQgEgEgIAAg");
	this.shape_21.setTransform(26.8,-24.6,0.823,0.823);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAfA7IAAgfIg9AAIAAAfIgRAAIAAgvIAIAAQAJgMAFgPQAFgRAAgPIAAgLIA4AAIAABGIAMAAIAAAvgAgTAMIAkAAIAAg2IgVAAQgBAjgOATg");
	this.shape_22.setTransform(17.4,-23.4,0.823,0.823);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AASArIAAglIgjAAIAAAlIgVAAIAAhWIAVAAIAAAiIAjAAIAAgiIAVAAIAABWg");
	this.shape_23.setTransform(9.1,-24.6,0.823,0.823);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgeAiQgMgMABgVQgBgUANgMQANgNARAAQASAAAMALQAMALAAASIgCAKIg9AAQABALAGAGQAGAFALAAQAOAAAHgHIAIAQQgLAIgWAAQgSAAgMgLgAgUgIIAqAAQgCgTgTAAQgQAAgFATg");
	this.shape_24.setTransform(1,-24.6,0.823,0.823);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgnA+IAAh5IAUAAIAAAGQAIgIALAAQApAAAAAuQAAAVgMALQgLAMgUAAQgKAAgHgEIAAAlgAgTgmIAAAtQAFAFAIAAQANAAAGgHQAHgFgBgPQAAgPgFgHQgHgGgNAAQgHAAgGAFg");
	this.shape_25.setTransform(-6.7,-23.3,0.823,0.823);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgJArIAAhFIgZAAIAAgRIBFAAIAAARIgZAAIAABFg");
	this.shape_26.setTransform(-14.3,-24.6,0.823,0.823);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgDAtIgYgvIgBAAIgHAuIgUAAIARhYIAIAAIAeA9IAgg9IAHAAIAQBYIgUAAIgHgpIgBgFIgBAAIgCAHIgVAog");
	this.shape_27.setTransform(-26.7,-24.6,0.823,0.823);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgeAiQgMgLAAgWQABgUAMgMQANgNAQAAQAUAAALALQALAMAAARIgBAKIg9AAQAAAKAHAHQAFAFAMAAQAOAAAGgHIAJAQQgLAIgWAAQgSAAgMgLgAgUgIIAqAAQgCgTgTAAQgQAAgFATg");
	this.shape_28.setTransform(-35.6,-24.6,0.823,0.823);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AATAqQgDgDgCgEQgCAEgHAEQgIACgGAAQgPAAgHgHQgIgGAAgOQAAgOALgIQAMgJAUAAIAIABQAAgPgSAAQgLAAgIAEIgFgQQALgFAOAAQAUAAAJAJQAJAJAAAZIAAASQAAASAHAEQgDAEgCABIgIABQgEAAgEgDgAgSARQAAAMANAAQASAAAAgSIAAgIIgIgBQgXAAAAAPg");
	this.shape_29.setTransform(-43.2,-24.6,0.823,0.823);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAfA7IAAgfIg8AAIAAAfIgSAAIAAgvIAJAAQAIgMAFgPQAFgPAAgRIAAgLIA4AAIAABGIAMAAIAAAvgAgTAMIAkAAIAAg2IgUAAQgCAigOAUg");
	this.shape_30.setTransform(-51.3,-23.4,0.823,0.823);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAUAqQgDgCgCgFQgDAFgHADQgIACgFAAQgPAAgIgHQgIgHAAgNQAAgNALgJQAMgJAUAAIAJABQAAgPgTAAQgKAAgJAEIgFgQQALgFAOAAQAUAAAJAJQAJAJAAAZIAAASQAAASAHAEQgDAFgCAAIgIABQgEAAgDgDgAgSARQAAAMANAAQASAAAAgSIAAgIIgIgBQgXAAAAAPg");
	this.shape_31.setTransform(-59.1,-24.6,0.823,0.823);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgoA1IAJgTQAOAKAOAAQAKAAAGgFQAGgFAAgJQAAgKgHgGQgIgGgLAAIgMABIAAgQIAMAAQAKAAAGgEQAGgFAAgIQAAgGgFgEQgGgEgHAAQgLAAgNAIIgIgSQASgIAQAAQAQAAALAIQAKAJAAAOQAAAJgEAHQgFAHgHADQALAEAEAGQAGAHAAAMQAAARgMAKQgMAKgVAAQgVAAgPgJg");
	this.shape_32.setTransform(-66.8,-26,0.823,0.823);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AilFpIDArRICLAAIi/LRg");
	this.shape_33.setTransform(73.5,-42.2,0.812,0.813);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#CB0927").s().p("AjFFdIC7q5IDQAAIi7K5g");
	this.shape_34.setTransform(68,9.1,0.812,0.813);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D1D1D1").s().p("AkkIuIBwmjIDRAAIC7q5IBNAAIkqRcg");
	this.shape_35.setTransform(66.6,26.1,0.812,0.813);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#DC052B").s().p("Ax7IuIABxbMAj2AAAIksRbg");
	this.shape_36.setTransform(0,-8,0.812,0.813);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.2,-71.5,186.5,143);


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
	this.shape.setTransform(581.4,-303.2,0.831,0.831);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAfAzIAAhlIASAAIAABlgAgxAzIAAhlIASAAIAAAmIANgBQASAAAJAJQAJAHAAAQQAAAOgJAKQgJAIgTAAgAgfACIAAAiIAJAAQANAAAGgFQADgFAAgIQAAgIgEgFQgGgEgLAAg");
	this.shape_1.setTransform(571.7,-303.3,0.831,0.831);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAVAzIAAguIgoAAIAAAuIgTAAIAAhlIATAAIAAAoIAoAAIAAgoIASAAIAABlg");
	this.shape_2.setTransform(562.7,-303.3,0.831,0.831);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAUAzIAAguIgnAAIAAAuIgSAAIAAhlIASAAIAAAoIAnAAIAAgoIASAAIAABlg");
	this.shape_3.setTransform(554.5,-303.3,0.831,0.831);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghAmQgLgOAAgYQAAgVAMgQQAMgPAUAAQAVAAAMANQAMAPAAAYQAAAYgMAOQgNAPgVAAQgVAAgLgPgAgSgaQgHAJAAARQAAASAGAKQAGAJAMAAQAMAAAIgKQAHgJAAgSQAAgkgaAAQgMAAgGAKg");
	this.shape_4.setTransform(546.3,-303.3,0.831,0.831);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgnA1IAAhnIASAAIAABDIA1hFIAIAAIAABnIgTAAIAAhEIg0BGg");
	this.shape_5.setTransform(538,-303.3,0.831,0.831);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAaBCIAAgeIhDAAIAAhlIASAAIAABWIAjAAIAAhWIASAAIAABWIAMAAIAAAtg");
	this.shape_6.setTransform(530,-302.1,0.831,0.831);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAZA0IgIgVIgiAAIgHAVIgUAAIAphnIAHAAIApBngAgLARIAXAAIgMgkg");
	this.shape_7.setTransform(521.9,-303.3,0.831,0.831);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgiA0IAAhmIAdgBQAQAAAIAHQAKAHgBAMQAAANgNAHQATAGAAAUQAAAOgKAIQgKAJgRAAgAgQAlIAKAAQAJAAAHgEQAGgEgBgKQAAgJgEgEQgGgEgLAAIgKAAgAgQgjIAAAYIAKAAQAQAAAAgNQAAgMgPAAg");
	this.shape_8.setTransform(514.8,-303.3,0.831,0.831);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AghAmQgLgOAAgYQAAgVAMgQQAMgPAUAAQAWAAALANQAMAOAAAZQAAAYgNAOQgMAPgVAAQgVAAgLgPgAgTgaQgGAKAAAQQAAASAGAKQAGAJAMAAQAMAAAIgKQAHgJAAgSQAAgkgaAAQgMAAgHAKg");
	this.shape_9.setTransform(506.8,-303.3,0.831,0.831);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAVAzIAAguIgoAAIAAAuIgSAAIAAhlIASAAIAAAoIAoAAIAAgoIARAAIAABlg");
	this.shape_10.setTransform(498.6,-303.3,0.831,0.831);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAUAzIAAguIgoAAIAAAuIgSAAIAAhlIASAAIAAAoIAoAAIAAgoIATAAIAABlg");
	this.shape_11.setTransform(490.5,-303.3,0.831,0.831);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgnA1IAAhnIASAAIAABDIA1hFIAIAAIAABnIgTAAIAAhEIg0BGg");
	this.shape_12.setTransform(482.2,-303.3,0.831,0.831);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAVAzIAAguIgoAAIAAAuIgSAAIAAhlIASAAIAAAoIAoAAIAAgoIARAAIAABlg");
	this.shape_13.setTransform(470.4,-303.3,0.831,0.831);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AggAzIAAhlIBBAAIAAAQIgvAAIAAAYIAhAAIAAAPIghAAIAAAeIAuAAIAAAQg");
	this.shape_14.setTransform(463.1,-303.3,0.831,0.831);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAiBCIAAgeIhDAAIAAAeIgQAAIAAgtIAHAAQAIgJAJgUQAJgUAIglIAuAAIAABWIALAAIAAAtgAgHgJQgIAUgIAKIAsAAIAAhHIgSAAQgDAWgHATg");
	this.shape_15.setTransform(455.1,-302.1,0.831,0.831);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AApAvQgEgFgCgKQgEgcgWAAIAAAvIgQAAIAAgvQgXAAgEAcQgCALgEAEQgFAFgIAAIgGgBIAAgQIACAAQAEAAABgBIADgIQABgKAGgHQAGgIAKgDQgTgDgEgVIgCgHQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAIgDAAIAAgQIAGgBQAJAAAEAEQAEAGACAKQAEAVAWABIAAgpIAQAAIAAApQAKAAAHgGQAHgGACgKQABgKAEgFQAFgFAIAAIAGABIAAAQIgCAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAIgCAHQgCAIgGAHQgEAGgKADQASAFAFAXQAAAGACACQACABADAAIACAAIAAAQIgFABQgJAAgFgFg");
	this.shape_16.setTransform(445.3,-303.3,0.831,0.831);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AghAmQgLgOAAgYQAAgVAMgQQAMgPAUAAQAVAAAMANQAMAPAAAYQAAAYgMAOQgNAPgVAAQgVAAgLgPgAgSgaQgHAJAAARQAAASAGAKQAGAJAMAAQAMAAAIgKQAHgJAAgSQAAgkgaAAQgMAAgGAKg");
	this.shape_17.setTransform(435.5,-303.3,0.831,0.831);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AghA0IAAhmIAVgBQAXAAAMAIQALAHAAAQQAAAigpAAIgHAAIAAAmgAgOgBIAHAAQALAAAGgEQAFgEAAgKQABgPgZAAIgFAAg");
	this.shape_18.setTransform(428,-303.3,0.831,0.831);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhYDOIBtmbIBEAAIhtGbg");
	this.shape_19.setTransform(601.4,-327.6,0.831,0.831);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CB0927").s().p("AhhCsIBclXIBnAAIhcFXg");
	this.shape_20.setTransform(598,-299.5,0.831,0.831);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D1D1D1").s().p("AiPETIA3jOIBmAAIBclXIAnAAIiTIlg");
	this.shape_21.setTransform(597.3,-290.9,0.831,0.831);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#DC052B").s().p("AzKDiIBjnDMAkyAABIh5HCg");
	this.shape_22.setTransform(506.6,-304,0.831,0.831);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ghggg, new cjs.Rectangle(404.7,-344.7,204.6,76.6), null);


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
	this.shape.graphics.f("#000000").s().p("AgMAZQgFgFgBgHIAHgBQABAGADADQADACAEAAQAEAAAEgDQADgDAAgGQAAgEgDgDQgDgEgFAAIgEABIABgFIABAAQADAAAEgCQAEgDAAgFQAAgDgDgDQgDgCgDAAQgEAAgDACQgCADgBAFIgHgBQABgHAFgEQAEgEAHAAQAEAAAEACQAEACACADQACAEAAAEQAAADgCADQgCADgEACQAFABADADQADAEAAAFQAAAIgGAFQgFAFgIAAQgHAAgFgEg");
	this.shape.setTransform(153.6,-311.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMAYQgGgEAAgHIAHgBQABAGADACQADADAEAAQAEAAAEgEQAEgEAAgGQAAgGgEgDQgEgDgEAAQgEAAgCACQgDABgBACIgHgBIAGgdIAbAAIAAAHIgWAAIgDAPQAFgDAFAAQAHAAAGAFQAFAEAAAIQAAAIgEAGQgGAHgJAAQgIAAgEgFg");
	this.shape_1.setTransform(149.2,-311.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_2.setTransform(144.6,-311.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMAXQgGgHABgQQAAgJABgGQACgHAFgDQAEgDAFAAQAFAAADACQADABADAEIAEAIIABANQAAAKgCAGQgCAGgEAEQgEADgHAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQADgFAAgOQAAgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_3.setTransform(140.3,-311.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJAcQgBgHADgJQADgKAEgIQAEgIAGgHIgbAAIAAgGIAjAAIAAAFQgFAGgFAKQgGAIgCALQgCAHAAAIg");
	this.shape_4.setTransform(135.9,-311.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMAXQgFgHAAgQQAAgJABgGQACgHAFgDQAEgDAFAAQAFAAADACQAEABACAEIAEAIIAAANQAAAKgBAGQgDAGgEAEQgDADgHAAQgIAAgEgGgAgHgSQgEAFABANQgBAOAEAFQADAEAEAAQAFAAADgEQAEgFgBgOQABgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_5.setTransform(131.4,-311.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgMAXQgGgHAAgPQAAgPAGgIQAFgGAJAAQAHAAAEAEQAEADABAHIgHABQgBgFgCgBQgDgDgEAAIgFABQgDADgCAEQgCAFAAAJQADgEADgCIAHgCQAHAAAFAFQAFAEAAAJQAAAFgDAFQgCAEgEADQgEACgFAAQgIAAgFgGgAgGABQgEADAAAGIABAHQACADADACQADABACAAQAEAAADgDQAEgEAAgGQAAgGgEgDQgDgDgEAAQgFAAgCADg");
	this.shape_6.setTransform(126.9,-311.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMAaQgEgEgBgHIAHgBQABAFACACQADACADAAQADAAACgBIAEgEIADgHIABgIIAAgCQgCAEgEACQgEACgDAAQgHAAgFgFQgFgEAAgJQAAgJAFgFQAFgFAIAAQAFAAAEADQAFADACAFQADAGAAAKQAAAKgDAHQgCAGgFAEQgEADgGAAQgGAAgFgDgAgHgTQgEAEAAAGQAAAGAEADQADADAEAAQAFAAADgDQADgDAAgGQAAgGgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_7.setTransform(122.5,-311.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgKAcQABgHACgJQADgKAEgIQAEgIAFgHIgbAAIAAgGIAkAAIAAAFQgFAGgGAKQgFAIgCALQgCAHAAAIg");
	this.shape_8.setTransform(118.1,-311.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgJAcQAAgHACgJQADgKAEgIQAEgIAGgHIgbAAIAAgGIAkAAIAAAFQgGAGgFAKQgGAIgCALQgCAHgBAIg");
	this.shape_9.setTransform(113.6,-311.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_10.setTransform(109,-311.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgMAXQgFgHgBgQQAAgJACgGQADgHADgDQAEgDAGAAQAEAAAEACQADABADAEIADAIIABANQAAAKgCAGQgBAGgFAEQgEADgGAAQgHAAgFgGgAgHgSQgDAFgBANQABAOADAFQADAEAEAAQAFAAADgEQAEgFAAgOQAAgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_11.setTransform(104.7,-311.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_12.setTransform(99.9,-311.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_13.setTransform(92.9,-311.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAIABQAEABAEACQADACABADQACAEAAAEQAAAHgFAEQgFAFgMAAIgNAAIAAAYgAgNAAIANAAQAIAAADgDQADgDAAgFQAAgDgBgDQgDgCgDgBIgHgBIgNAAg");
	this.shape_14.setTransform(87.5,-311.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgSAdIAAg5IAlAAIAAAHIgdAAIAAAyg");
	this.shape_15.setTransform(82.8,-311.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_16.setTransform(77.2,-311.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgMAYQgGgEAAgHIAHgBQABAGADACQADADAEAAQAEAAAEgEQAEgEAAgGQAAgGgEgDQgEgDgEAAQgEAAgCACQgDABgCACIgGgBIAGgdIAbAAIAAAHIgWAAIgDAPQAFgDAFAAQAHAAAGAFQAFAEAAAIQAAAIgEAGQgGAHgJAAQgIAAgEgFg");
	this.shape_17.setTransform(243.3,-319.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_18.setTransform(238.5,-319.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgMAXQgGgHABgQQAAgJABgGQACgHAFgDQAEgDAFAAQAFAAADACQADABADAEIAEAIIABANQAAAKgCAGQgCAGgFAEQgDADgHAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQADgFAAgOQAAgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_19.setTransform(234.3,-319.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgSAdIABgFIAEgIIAJgIQAJgIADgEQADgEAAgEQAAgEgCgDQgDgDgFAAQgEAAgDADQgDADAAAGIgHgBQAAgIAFgEQAFgFAHAAQAIAAAFAFQAEAEABAHIgBAHQgCADgEADQgDAEgHAGIgIAHIgCAEIAbAAIAAAHg");
	this.shape_20.setTransform(229.8,-319.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_21.setTransform(225.1,-319.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgMAYQgGgEAAgHIAHgBQABAGADACQADADAEAAQAFAAADgEQAEgEgBgGQABgGgEgDQgDgDgFAAQgEAAgCACQgDABgBACIgHgBIAGgdIAbAAIAAAHIgWAAIgDAPQAFgDAFAAQAHAAAGAFQAFAEAAAIQAAAIgEAGQgGAHgJAAQgHAAgFgFg");
	this.shape_22.setTransform(221,-319.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_23.setTransform(216.4,-319.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgMAXQgGgHABgQQAAgJACgGQACgHADgDQAFgDAFAAQAEAAAEACQADABADAEIAEAIIABANQAAAKgDAGQgCAGgDAEQgFADgGAAQgIAAgEgGgAgHgSQgEAFAAANQAAAOAEAFQADAEAEAAQAFAAADgEQADgFABgOQgBgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_24.setTransform(212.1,-319.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgJAcQAAgHACgJQADgKAEgIQAEgIAGgHIgbAAIAAgGIAkAAIAAAFQgGAGgFAKQgGAIgCALQgCAHgBAIg");
	this.shape_25.setTransform(207.7,-319.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgKAcQABgHACgJQADgKAEgIQAEgIAFgHIgbAAIAAgGIAkAAIAAAFQgFAGgGAKQgFAIgCALQgCAHAAAIg");
	this.shape_26.setTransform(203.2,-319.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_27.setTransform(195.9,-319.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_28.setTransform(190.1,-319.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAPAdIAAgsIgdAsIgHAAIAAg5IAGAAIAAAtIAegtIAIAAIAAA5g");
	this.shape_29.setTransform(184.3,-319.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_30.setTransform(178.2,-316.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgMAYQgGgFAAgHQAAgGADgEQADgCAFgCQgEgBgCgDQgDgDAAgEQAAgHAFgEQAFgEAGAAQAIAAAEAEQAEAEAAAHQAAAEgBADQgCADgFABQAFACADADQADAEAAAFQAAAHgFAFQgGAFgIAAQgIAAgEgFgAgHAEQgDADAAAFIABAGIAEAEIAFABQAFAAADgDQAEgDAAgFQAAgFgEgDQgDgEgFAAQgEAAgDAEgAgGgUQgDADAAADQAAAEADADQADADADAAQAEAAADgDQADgDgBgDQABgEgDgDQgDgCgEAAQgDAAgDACg");
	this.shape_31.setTransform(174.8,-319.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_32.setTransform(169.3,-316.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAQAbIAAgMIgfAAIAAAMIgGAAIAAgSIAEAAQAHgJAAgaIAcAAIAAAjIAEAAIAAASgAgLAJIAWAAIAAgdIgQAAQAAAUgGAJg");
	this.shape_33.setTransform(165.7,-317.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgDAHQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_34.setTransform(160.2,-316.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAKAcIAAgeIgSAeIgIAAIAAgoIAHAAIAAAeIATgeIAHAAIAAAogAgHgUQgCgDgBgFIAEAAIADAFIADABIAFgBIACgFIAFAAQAAAFgDADQgDADgFgBQgEABgEgDg");
	this.shape_35.setTransform(156.9,-319.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgKAEIAAgHIAVAAIAAAHg");
	this.shape_36.setTransform(153.3,-318.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgSAdIABgFIAEgIIAJgIQAJgIADgEQADgEAAgEQAAgEgCgDQgDgDgFAAQgEAAgEADQgCADAAAGIgHgBQAAgIAFgEQAEgFAIAAQAIAAAFAFQAEAEABAHIgBAHQgCADgEADQgDAEgHAGIgIAHIgCAEIAbAAIAAAHg");
	this.shape_37.setTransform(149.7,-319.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAKAcIAAgeIgTAeIgHAAIAAgoIAHAAIAAAeIASgeIAIAAIAAAogAgHgUQgDgDAAgFIAEAAIADAFIADABIAFgBIACgFIAFAAQgBAFgCADQgEADgFgBQgEABgDgDg");
	this.shape_38.setTransform(143.2,-319.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAKAVIAAgfIgSAfIgIAAIAAgpIAHAAIAAAfIATgfIAHAAIAAApg");
	this.shape_39.setTransform(138.7,-318.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAIAVIgIgNIgDgFIgEgBIAAATIgHAAIAAgpIAHAAIAAASQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQABgBACgHIADgGIADgCIAFgBIACAAIAAAGIgCAAIgEABIgCAFIgDAGIgDACQADABAFAHIAHANg");
	this.shape_40.setTransform(135,-318.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_41.setTransform(131.1,-318.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAKAVIAAgTIgTAAIAAATIgHAAIAAgpIAHAAIAAASIATAAIAAgSIAHAAIAAApg");
	this.shape_42.setTransform(126.8,-318.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAKAVIAAgfIgSAfIgIAAIAAgpIAHAAIAAAfIASgfIAIAAIAAApg");
	this.shape_43.setTransform(122.4,-318.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAXAbIAAgMIgzAAIAAgpIAHAAIAAAjIAQAAIAAgjIAGAAIAAAjIAQAAIAAgjIAHAAIAAAjIAFAAIAAASg");
	this.shape_44.setTransform(117,-317.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgNAQQgGgFAAgLQAAgLAHgFQAGgFAGAAQAIAAAGAGQAFAGABAJQgBAHgCAFQgCAFgFACQgEADgGAAQgIAAgFgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQADgEABgIQgBgHgDgEQgDgEgGAAQgEAAgDAEg");
	this.shape_45.setTransform(111.3,-318.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAJABQADABAEACQACACACADQACAEAAAEQAAAHgFAEQgEAFgMAAIgOAAIAAAYgAgNAAIAOAAQAHAAADgDQADgDAAgFQAAgDgCgDQgCgCgCgBIgHgBIgOAAg");
	this.shape_46.setTransform(106.5,-319.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AARAbIAAgMIggAAIAAAMIgGAAIAAgSIADAAQAIgJAAgaIAbAAIAAAjIAFAAIAAASgAgKAJIAUAAIAAgdIgPAAQAAAUgFAJg");
	this.shape_47.setTransform(99.1,-317.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgPAJIAGgBQACAEACACQADACACAAQAEAAADgCQACgCAAgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAIgFAAIgBAAIAAgFIAEAAIAEgCQAAAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBgCgEAAQgFAAgCAHIgHgBQADgMALAAQAHAAAEAEQAEAEAAAFQgBAFgFADQAEAAACADQABADAAADQAAAGgEADQgEAEgIAAQgNAAgCgNg");
	this.shape_48.setTransform(95,-318.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgMAQQgGgGAAgKQAAgJAGgGQAEgGAIAAQAJAAAFAGQAFAGAAAJIAAACIgeAAQAAAHAEADQAEAEADAAQAEAAAEgCQACgCABgFIAIABQgCAHgFADQgEAEgIAAQgIAAgEgGgAgHgMQgDAEAAAFIAWAAQAAgFgDgDQgEgEgFAAQgEAAgDADg");
	this.shape_49.setTransform(91,-318.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgNAQQgGgFAAgLQAAgLAHgFQAGgFAGAAQAIAAAGAGQAFAGABAJQgBAHgCAFQgCAFgFACQgEADgGAAQgIAAgFgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQADgEABgIQgBgHgDgEQgDgEgGAAQgEAAgDAEg");
	this.shape_50.setTransform(86.5,-318.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgRAdIAAg4IAGAAIAAAFQACgDADgCQADgBADAAQAGAAAEADQADACADAFQACAFAAAGQAAAHgCAEQgDAFgEACQgFADgEAAQgDAAgDgBQgDgCgBgCIAAAUgAgHgSQgEAEAAAIQAAAHAEAEQADADAEAAQAEAAAEgEQADgEgBgHQABgIgDgEQgEgEgEAAQgEAAgDAFg");
	this.shape_51.setTransform(82.2,-317.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAPAdIAAgyIgdAAIAAAyIgHAAIAAg5IAsAAIAAA5g");
	this.shape_52.setTransform(77,-319.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgDAHQAAgBABAAQAAAAABgBQAAAAABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_53.setTransform(224.5,-324.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgPASQgDgDAAgFQAAgDACgDQAAgCADgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgCACQgDACgBAEIgHgBQABgEACgDQACgDAFgBQAEgCAEAAQAFAAAEACQADABABACIADAFIAAAGIAAAIIABANIABAFIgHAAQgCgCABgDIgIAEIgHACQgHAAgEgEgAAAADIgHABIgCACIgCAEQAAAAABABQAAABAAAAQAAABABAAQAAABABAAQACACAEAAQADAAADgCQADgBACgDQABgDAAgEIAAgDIgKADg");
	this.shape_54.setTransform(221.2,-326.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgQAVIAAgpIAQAAIAIABQADABACADQACADAAADIgBAFIgEAEQADAAACADQACACAAAEQAAAGgFADQgDADgIAAgAgJAPIAJAAIAIgBQABgCAAgDIAAgEQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAIgFAAIgJAAgAgJgCIAIAAIAEgBIAEgCQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgDgCgCIgHgBIgIAAg");
	this.shape_55.setTransform(217,-326.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAIAVIgIgNIgDgFIgEgBIAAATIgHAAIAAgpIAHAAIAAASQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQABgBACgHIADgGIADgCIAFgBIACAAIAAAGIgCAAIgEABIgCAFIgDAGIgDACQADABAFAHIAHANg");
	this.shape_56.setTransform(213.2,-326.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_57.setTransform(209.3,-326.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgNAQQgGgFABgLQgBgLAHgFQAGgFAGAAQAIAAAGAGQAFAGABAJQgBAHgCAFQgCAFgFACQgEADgGAAQgHAAgGgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQADgEAAgIQAAgHgDgEQgDgEgGAAQgEAAgDAEg");
	this.shape_58.setTransform(205,-326.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAUAdIAAgvIgRAvIgFAAIgRgwIAAAwIgHAAIAAg5IALAAIAOAoIABAJIADgKIAOgnIAKAAIAAA5g");
	this.shape_59.setTransform(199.4,-327.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_60.setTransform(192.9,-324.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgLAVIAAgpIAXAAIAAAGIgQAAIAAAjg");
	this.shape_61.setTransform(190.5,-326.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgDAHQAAgBABAAQAAAAABgBQAAAAABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_62.setTransform(185.5,-324.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgMAaQgEgEgBgHIAHgBQABAFACACQADACADAAQADAAACgBIAEgEIADgHIABgIIAAgCQgCAEgEACQgEACgDAAQgHAAgFgFQgFgEAAgJQAAgJAFgFQAFgFAIAAQAFAAAEADQAFADACAFQADAGAAAKQAAAKgDAHQgCAGgFAEQgEADgGAAQgGAAgFgDgAgHgTQgEAEAAAGQAAAGAEADQADADAEAAQAFAAADgDQADgDAAgGQAAgGgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_63.setTransform(182.2,-327.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_64.setTransform(177.4,-327.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_65.setTransform(173.1,-327.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgNAYQgEgEgBgHIAHgBQABAGADACQADADAEAAQAEAAAEgEQADgEABgGQgBgGgDgDQgEgDgEAAQgDAAgDACQgDABgCACIgGgBIAFgdIAcAAIAAAHIgWAAIgDAPQAFgDAFAAQAIAAAEAFQAGAEAAAIQAAAIgFAGQgFAHgJAAQgIAAgFgFg");
	this.shape_66.setTransform(168.9,-327.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_67.setTransform(164.1,-327.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_68.setTransform(159.6,-327.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgBASIAKgSIgKgRIAFAAIANARIgNASgAgQASIALgSIgLgRIAGAAIALARIgLASg");
	this.shape_69.setTransform(153.3,-326.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_70.setTransform(150,-324.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgRAdIAAg5IAkAAIAAAHIgdAAIAAAyg");
	this.shape_71.setTransform(147,-327.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_72.setTransform(143.5,-324.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_73.setTransform(139.4,-327.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_74.setTransform(135.5,-324.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgMAZQgGgDgDgHQgDgIAAgHQAAgIADgHQAEgHAGgDQAGgEAHAAQAIAAAGAFQAGAEACAIIgHABQgCgGgEgDQgEgCgFAAQgGAAgEADQgFADgCAFQgBAGAAAFQAAAHACAFQACAGAEADQAFACAEAAQAGAAAFgDQAEgFACgHIAHADQgCAIgGAFQgGAGgJAAQgJAAgFgFg");
	this.shape_75.setTransform(131.4,-327.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAQAdIAAgsIgeAsIgHAAIAAg5IAGAAIAAAtIAegtIAIAAIAAA5g");
	this.shape_76.setTransform(123.5,-327.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AATAkIAAgOIglAAIAAAOIgHAAIAAgVIAFAAQAHgKAAgfIAAgIIAhAAIAAAxIAGAAIAAAVgAgGgYIgBATQgCAMgEAIIAaAAIAAgqIgTAAg");
	this.shape_77.setTransform(117.7,-326.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_78.setTransform(112.3,-327.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AASAdIgHgSIgXAAIgGASIgIAAIAWg5IAHAAIAYA5gAgDgLIgGAQIASAAIgGgPIgDgLIgDAKg");
	this.shape_79.setTransform(106.7,-327.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAKAdIgJgQQgDgGgDgDQgDgCgEAAIAAAbIgHAAIAAg5IAHAAIAAAaQAGAAABgCQADgCACgIIAEgIIAFgEQACgCADAAIAFABIAAAGIgBAAIgCAAQgDAAgCACIgEAHQgDAIgCABIgEADQAEABAGAJIAMATg");
	this.shape_80.setTransform(102,-327.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AALASIgLgSIALgRIAGAAIgKARIAKASgAgDASIgNgSIANgRIAFAAIgJARIAJASg");
	this.shape_81.setTransform(97.1,-326.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_82.setTransform(89.6,-327.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_83.setTransform(83.4,-327.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_84.setTransform(77.2,-327.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dfgdfggg, new cjs.Rectangle(72.1,-333.5,177.8,28.7), null);


(lib.dfd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJAKQgFgEAAgGQAAgFAFgFQAEgDAFAAQAHAAADADQAFAFAAAFQAAAGgFAEQgDAFgHAAQgFAAgEgFg");
	this.shape.setTransform(-0.6,8.5,0.823,0.823);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeAiQgLgLAAgWQAAgUAMgNQANgMARAAQARgBANAMQALALAAASIgBAKIg+AAQABALAHAFQAGAGALABQANAAAHgIIAIAQQgLAIgUAAQgUAAgLgLgAgUgIIAqAAQgCgUgTAAQgRAAgEAUg");
	this.shape_1.setTransform(-6.9,5.8,0.823,0.823);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AASArIAAglIgjAAIAAAlIgVAAIAAhVIAVAAIAAAgIAjAAIAAggIAVAAIAABVg");
	this.shape_2.setTransform(-15,5.8,0.823,0.823);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgmBDIAAhXIAUAAIAAAzIA0g1IAFAAIAABXIgUAAIAAg0Ig0A2gAgRgsQgJgHgBgMIARgEQACAQAKgBQANAAABgOIAQADQgCAMgJAHQgHAGgMAAQgMAAgHgGg");
	this.shape_3.setTransform(-23.2,4,0.823,0.823);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATAqQgDgDgCgEQgDAFgHACQgFAEgIgBQgOAAgIgHQgIgGAAgNQAAgPALgIQALgJAVAAIAIABQAAgQgSAAQgLAAgJAFIgEgQQAKgGAPABQATgBAJAKQAKAJAAAZIAAASQAAASAHAEQgDAFgDAAQgDABgEAAQgDAAgFgDgAgTARQAAAMAOAAQARAAAAgSIAAgIIgIgBQgXAAAAAPg");
	this.shape_4.setTransform(-30.9,5.8,0.823,0.823);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiAkIAKgQQAKAJAOAAQAOAAAAgLQAAgMgQAAIgMAAIAAgPIAOABQAMAAAAgKQAAgFgDgCQgEgDgFAAQgLAAgMAHIgGgQQAPgIAPABQANAAAKAGQAIAHAAALQAAAPgOAEQAHABAFAGQAFAFAAAHQAAANgJAHQgMAHgPAAQgUAAgNgJg");
	this.shape_5.setTransform(-38.1,5.8,0.823,0.823);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmAtIAAhXIAUAAIAAAzIAzg1IAGAAIAABXIgUAAIAAgzIg0A1g");
	this.shape_6.setTransform(-45.4,5.8,0.823,0.823);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAfA7IAAgfIg8AAIAAAfIgSAAIAAgvIAIAAQAIgKAGgQQAEgRABgQIAAgLIA4AAIAABGIAMAAIAAAvgAgTAMIAkAAIAAg2IgUAAQgCAigOAUg");
	this.shape_7.setTransform(-53.8,7,0.823,0.823);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgmAtIAAhXIAUAAIAAAzIA0g1IAFAAIAABXIgUAAIAAgzIgzA1g");
	this.shape_8.setTransform(-66.4,5.8,0.823,0.823);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAUAsIgUgeIgUAeIgYAAIAigsIgggrIAYAAIASAcIAUgcIAWAAIgfAqIAiAtg");
	this.shape_9.setTransform(21.5,-9.4,0.823,0.823);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AglAsIAAgRIADABQAEAAABgFQABgGAFgGQAFgFAHgCQgVgEAAgSQAAgLAIgHQAJgIARAAIAkACIAABWIgUAAIAAghIgFAAQgWAAgDATQgCAPgPAAgAgIgZQgDAEAAAFQAAAFAFAEQAFADAGAAIANAAIAAgYIgQAAQgGAAgEADg");
	this.shape_10.setTransform(13.6,-9.4,0.823,0.823);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgmAuIAAhZIAVAAIAAA0IAzg2IAFAAIAABZIgUAAIAAg0Ig0A2g");
	this.shape_11.setTransform(5.9,-9.4,0.823,0.823);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgdAsIAAhXIA7AAIAAASIgnAAIAABFg");
	this.shape_12.setTransform(-1.2,-9.4,0.823,0.823);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgTAMgNQALgMASAAQAUAAALAMQALANAAATQAAAWgLALQgMAMgTAAQgTAAgLgMgAgOgUQgGAHAAANQAAAdAUAAQAJAAAGgIQAGgIAAgNQAAgcgVAAQgIAAgGAIg");
	this.shape_13.setTransform(-8.5,-9.4,0.823,0.823);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgqAaQAJAAAFgGQAFgFAEgPQAEgSAAgUIAAgFIA6AAIAABWIgUAAIAAhGIgWAAQAAAQgDARQgEAQgFAIQgHAJgGACQgHADgLAAg");
	this.shape_14.setTransform(-16.8,-9.4,0.823,0.823);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgTAMgNQAKgMATAAQAUAAALAMQALANAAATQAAAVgLAMQgNAMgSAAQgTAAgLgMgAgOgUQgGAHAAANQAAAdAUAAQAJAAAGgIQAGgIAAgNQgBgcgUAAQgJAAgFAIg");
	this.shape_15.setTransform(-24.5,-9.4,0.823,0.823);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AASAsIAAgmIgjAAIAAAmIgVAAIAAhXIAVAAIAAAhIAjAAIAAghIAVAAIAABXg");
	this.shape_16.setTransform(-32.5,-9.4,0.823,0.823);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAVAsIgVgeIgUAeIgYAAIAigsIgfgrIAXAAIASAcIAUgcIAXAAIghAqIAjAtg");
	this.shape_17.setTransform(-40.4,-9.4,0.823,0.823);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgeAiQgMgLABgWQgBgUANgNQAMgMARAAQAUAAALALQALALAAASIgBAKIg9AAQAAALAHAFQAGAGALAAQANAAAIgHIAIAQQgMAIgVAAQgSAAgMgLgAgTgIIApAAQgDgTgSAAQgRAAgDATg");
	this.shape_18.setTransform(-48.2,-9.4,0.823,0.823);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgJAsIAAhFIgZAAIAAgSIBFAAIAAASIgZAAIAABFg");
	this.shape_19.setTransform(-55.5,-9.4,0.823,0.823);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgkAsIAAhWIAmgBQAOAAAJAGQAIAHAAALQAAAFgDAFQgDAFgHADQARAFAAAQQAAAMgJAFQgJAHgQAAgAgQAcIARABQAQAAAAgMQAAgGgFgDQgFgCgGAAIgRAAgAgQgbIAAATIAQAAQAOAAAAgKQAAgEgEgDQgDgDgGAAg");
	this.shape_20.setTransform(-66.6,-9.5,0.823,0.823);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAfArIAAhWIAUAAIAABWgAgyArIAAhWIATAAIAAAfIAQAAQAPAAAJAHQAJAHAAAOQAAAbghAAgAgfADIAAAYIAOABQAJAAADgDQAEgFAAgFQAAgFgEgEQgEgEgIAAg");
	this.shape_21.setTransform(26.8,-24.6,0.823,0.823);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAfA7IAAgfIg9AAIAAAfIgRAAIAAgvIAIAAQAJgMAFgPQAFgRAAgPIAAgLIA4AAIAABGIAMAAIAAAvgAgTAMIAkAAIAAg2IgVAAQgBAjgOATg");
	this.shape_22.setTransform(17.4,-23.4,0.823,0.823);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AASArIAAglIgjAAIAAAlIgVAAIAAhWIAVAAIAAAiIAjAAIAAgiIAVAAIAABWg");
	this.shape_23.setTransform(9.1,-24.6,0.823,0.823);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgeAiQgMgMABgVQgBgUANgMQANgNARAAQASAAAMALQAMALAAASIgCAKIg9AAQABALAGAGQAGAFALAAQAOAAAHgHIAIAQQgLAIgWAAQgSAAgMgLgAgUgIIAqAAQgCgTgTAAQgQAAgFATg");
	this.shape_24.setTransform(1,-24.6,0.823,0.823);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgnA+IAAh5IAUAAIAAAGQAIgIALAAQApAAAAAuQAAAVgMALQgLAMgUAAQgKAAgHgEIAAAlgAgTgmIAAAtQAFAFAIAAQANAAAGgHQAHgFgBgPQAAgPgFgHQgHgGgNAAQgHAAgGAFg");
	this.shape_25.setTransform(-6.7,-23.3,0.823,0.823);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgJArIAAhFIgZAAIAAgRIBFAAIAAARIgZAAIAABFg");
	this.shape_26.setTransform(-14.3,-24.6,0.823,0.823);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgDAtIgYgvIgBAAIgHAuIgUAAIARhYIAIAAIAeA9IAgg9IAHAAIAQBYIgUAAIgHgpIgBgFIgBAAIgCAHIgVAog");
	this.shape_27.setTransform(-26.7,-24.6,0.823,0.823);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgeAiQgMgLAAgWQABgUAMgMQANgNAQAAQAUAAALALQALAMAAARIgBAKIg9AAQAAAKAHAHQAFAFAMAAQAOAAAGgHIAJAQQgLAIgWAAQgSAAgMgLgAgUgIIAqAAQgCgTgTAAQgQAAgFATg");
	this.shape_28.setTransform(-35.6,-24.6,0.823,0.823);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AATAqQgDgDgCgEQgCAEgHAEQgIACgGAAQgPAAgHgHQgIgGAAgOQAAgOALgIQAMgJAUAAIAIABQAAgPgSAAQgLAAgIAEIgFgQQALgFAOAAQAUAAAJAJQAJAJAAAZIAAASQAAASAHAEQgDAEgCABIgIABQgEAAgEgDgAgSARQAAAMANAAQASAAAAgSIAAgIIgIgBQgXAAAAAPg");
	this.shape_29.setTransform(-43.2,-24.6,0.823,0.823);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAfA7IAAgfIg8AAIAAAfIgSAAIAAgvIAJAAQAIgMAFgPQAFgPAAgRIAAgLIA4AAIAABGIAMAAIAAAvgAgTAMIAkAAIAAg2IgUAAQgCAigOAUg");
	this.shape_30.setTransform(-51.3,-23.4,0.823,0.823);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAUAqQgDgCgCgFQgDAFgHADQgIACgFAAQgPAAgIgHQgIgHAAgNQAAgNALgJQAMgJAUAAIAJABQAAgPgTAAQgKAAgJAEIgFgQQALgFAOAAQAUAAAJAJQAJAJAAAZIAAASQAAASAHAEQgDAFgCAAIgIABQgEAAgDgDgAgSARQAAAMANAAQASAAAAgSIAAgIIgIgBQgXAAAAAPg");
	this.shape_31.setTransform(-59.1,-24.6,0.823,0.823);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgoA1IAJgTQAOAKAOAAQAKAAAGgFQAGgFAAgJQAAgKgHgGQgIgGgLAAIgMABIAAgQIAMAAQAKAAAGgEQAGgFAAgIQAAgGgFgEQgGgEgHAAQgLAAgNAIIgIgSQASgIAQAAQAQAAALAIQAKAJAAAOQAAAJgEAHQgFAHgHADQALAEAEAGQAGAHAAAMQAAARgMAKQgMAKgVAAQgVAAgPgJg");
	this.shape_32.setTransform(-66.8,-26,0.823,0.823);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AilFpIDArRICLAAIi/LRg");
	this.shape_33.setTransform(73.5,-42.2,0.812,0.813);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#CB0927").s().p("AjFFdIC7q5IDQAAIi7K5g");
	this.shape_34.setTransform(68,9.1,0.812,0.813);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D1D1D1").s().p("AkkIuIBwmjIDRAAIC7q5IBNAAIkqRcg");
	this.shape_35.setTransform(66.6,26.1,0.812,0.813);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#DC052B").s().p("Ax7IuIABxbMAj2AAAIksRbg");
	this.shape_36.setTransform(0,-8,0.812,0.813);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.2,-71.5,186.5,143);


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
	this.shape.setTransform(234.2,30,1,1,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	// legal
	this.addr2 = new lib.dfgdfggg();
	this.addr2.parent = this;
	this.addr2.setTransform(-65.3,347.9,0.95,0.95,0,0,0,-0.1,0.1);
	this.addr2.alpha = 0;
	this.addr2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.addr2).wait(303).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(41).to({alpha:0},6,cjs.Ease.get(1)).wait(1));

	// Слой 19
	this.instance = new lib.ghggg();
	this.instance.parent = this;
	this.instance.setTransform(46.8,236.2,0.66,0.66,0,0,0,0.1,0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(298).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(46).to({alpha:0},6,cjs.Ease.get(1)).wait(1));

	// final
	this.instance_1 = new lib.ghgf();
	this.instance_1.parent = this;
	this.instance_1.setTransform(66.8,133,0.66,0.66,0,0,0,0.1,0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(293).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(51).to({alpha:0},6,cjs.Ease.get(1)).wait(1));

	// logo
	this.instance_2 = new lib.hgj();
	this.instance_2.parent = this;
	this.instance_2.setTransform(400.8,30.8,0.334,0.334,0,0,0,0.1,0.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},7).wait(280).to({alpha:0},8,cjs.Ease.get(0.69)).to({_off:true},7).wait(58));

	// mask-in-out - копия: 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A/XSOMAW8gkbMAnzAAAMAAAAkbg");
	var mask_graphics_1 = new cjs.Graphics().p("A+nSOMATmgkbMApoAAAMAAAAkbg");
	var mask_graphics_2 = new cjs.Graphics().p("A96SOMAQigkbMArTAAAMAAAAkbg");
	var mask_graphics_3 = new cjs.Graphics().p("A9TSOMAN0gkbMAsyAAAMAAAAkbg");
	var mask_graphics_4 = new cjs.Graphics().p("A8wSOMALagkbMAuGAAAMAAAAkbg");
	var mask_graphics_5 = new cjs.Graphics().p("A8RSOMAJUgkbMAvPAAAMAAAAkbg");
	var mask_graphics_6 = new cjs.Graphics().p("A74SOMAHkgkbMAwNAAAMAAAAkbg");
	var mask_graphics_7 = new cjs.Graphics().p("A7jSOMAGIgkbMAw/AAAMAAAAkbg");
	var mask_graphics_8 = new cjs.Graphics().p("A7SSOMAE/gkbMAxmAAAMAAAAkbg");
	var mask_graphics_9 = new cjs.Graphics().p("A7HSOMAENgkbMAyCAAAMAAAAkbg");
	var mask_graphics_10 = new cjs.Graphics().p("A7ASOMADugkbMAyTAAAMAAAAkbg");
	var mask_graphics_11 = new cjs.Graphics().p("A6+SOMADkgkbMAyZAAAMAAAAkbg");
	var mask_graphics_62 = new cjs.Graphics().p("A/XSOMAAAgkbMA+vAAAMgW8Akbg");
	var mask_graphics_63 = new cjs.Graphics().p("A6uSOMAAAgkbMA1dAAAMgTjAkbg");
	var mask_graphics_64 = new cjs.Graphics().p("A2hSOMAAAgkbMAtDAAAMgQeAkbg");
	var mask_graphics_65 = new cjs.Graphics().p("AywSOMAAAgkbMAlhAAAMgNuAkbg");
	var mask_graphics_66 = new cjs.Graphics().p("AvcSOMAAAgkbIe5AAMgLTAkbg");
	var mask_graphics_67 = new cjs.Graphics().p("AskSOMAAAgkbIZJAAMgJNAkbg");
	var mask_graphics_68 = new cjs.Graphics().p("AqISOMAAAgkbIURAAMgHaAkbg");
	var mask_graphics_69 = new cjs.Graphics().p("AoJSOMAAAgkbIQTAAMgF+Akbg");
	var mask_graphics_70 = new cjs.Graphics().p("AmmSOMAAAgkbINNAAMgE1Akbg");
	var mask_graphics_71 = new cjs.Graphics().p("AlfSOMAAAgkbIK/AAMgEBAkbg");
	var mask_graphics_72 = new cjs.Graphics().p("AlLSOMAAAgkbIJpAAMgDiAkbg");
	var mask_graphics_73 = new cjs.Graphics().p("AlNSOMAAAgkbIJNAAMgDYAkbg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:450.9,y:93.7}).wait(1).to({graphics:mask_graphics_1,x:397.1,y:93.7}).wait(1).to({graphics:mask_graphics_2,x:348.4,y:93.7}).wait(1).to({graphics:mask_graphics_3,x:304.9,y:93.7}).wait(1).to({graphics:mask_graphics_4,x:266.4,y:93.7}).wait(1).to({graphics:mask_graphics_5,x:233.1,y:93.7}).wait(1).to({graphics:mask_graphics_6,x:204.9,y:93.7}).wait(1).to({graphics:mask_graphics_7,x:181.8,y:93.7}).wait(1).to({graphics:mask_graphics_8,x:163.9,y:93.7}).wait(1).to({graphics:mask_graphics_9,x:151.1,y:93.7}).wait(1).to({graphics:mask_graphics_10,x:143.4,y:93.7}).wait(1).to({graphics:mask_graphics_11,x:140.8,y:93.7}).wait(1).to({graphics:null,x:0,y:0}).wait(50).to({graphics:mask_graphics_62,x:196.5,y:93.6}).wait(1).to({graphics:mask_graphics_63,x:155.9,y:93.6}).wait(1).to({graphics:mask_graphics_64,x:119.1,y:93.6}).wait(1).to({graphics:mask_graphics_65,x:86.3,y:93.6}).wait(1).to({graphics:mask_graphics_66,x:57.3,y:93.6}).wait(1).to({graphics:mask_graphics_67,x:32.1,y:93.6}).wait(1).to({graphics:mask_graphics_68,x:10.9,y:93.6}).wait(1).to({graphics:mask_graphics_69,x:-6.5,y:93.6}).wait(1).to({graphics:mask_graphics_70,x:-20.1,y:93.6}).wait(1).to({graphics:mask_graphics_71,x:-29.7,y:93.6}).wait(1).to({graphics:mask_graphics_72,x:-33.2,y:93.6}).wait(1).to({graphics:mask_graphics_73,x:-33.4,y:93.6}).wait(287));

	// text0
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVASIAPgiIAbgBIgdAjg");
	this.shape_1.setTransform(75.3,44.6,0.643,0.644);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUASIAOgjIAbAAIgdAjg");
	this.shape_2.setTransform(78.6,20.6,0.643,0.644);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVASIAPgiIAcgBIgeAjg");
	this.shape_3.setTransform(59,8.2,0.643,0.644);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgkAsIAAhXIAVAAIAAAgIARgBQAPAAAKAIQAJAGAAAOQAAANgHAHQgKAIgSAAgAgPADIAAAZIAPAAQAQAAAAgNQAAgFgDgEQgFgDgIAAg");
	this.shape_4.setTransform(97.4,49.7,0.643,0.644);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJAsIAAhFIgZAAIAAgSIBFAAIAAASIgZAAIAABFg");
	this.shape_5.setTransform(91.7,49.7,0.643,0.644);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmAuIAAhZIAUAAIAAA0IA0g2IAFAAIAABZIgUAAIAAg0Ig0A2g");
	this.shape_6.setTransform(85.9,49.7,0.643,0.644);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgZAiQgLgMAAgVQAAgUAMgNQANgMAVAAQAPAAAMAIIgJAQQgIgHgLAAQgLAAgHAHQgGAHAAAOQAAAbAZAAQAMAAAIgHIAHAQQgHAFgJACQgGABgJAAQgSAAgNgLg");
	this.shape_7.setTransform(79.9,49.7,0.643,0.644);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgeAhQgLgNAAgUQAAgTALgNQANgMARAAQAUAAALAMQALAMAAAUQAAAVgMAMQgKAMgUAAQgTAAgLgMgAgOgUQgGAIAAAMQABAdATAAQAKAAAFgIQAGgHAAgOQAAgcgVAAQgIAAgGAIg");
	this.shape_8.setTransform(74.1,49.7,0.643,0.644);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZAiQgMgMABgVQgBgUANgNQAMgMAWAAQAPAAALAIIgIAQQgIgHgLAAQgKAAgIAHQgGAHAAAOQAAAbAZAAQALAAAJgHIAHAQQgIAFgIACQgGABgJAAQgSAAgNgLg");
	this.shape_9.setTransform(68.2,49.7,0.643,0.644);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgeAiQgMgLAAgWQAAgUANgNQANgMARAAQATAAALALQAMAMAAARIgCAKIg9AAQAAALAHAGQAHAFAKAAQANAAAIgHIAIAQQgMAIgUAAQgTAAgMgLgAgUgIIAqAAQgCgTgTAAQgQAAgFATg");
	this.shape_10.setTransform(62.4,49.7,0.643,0.644);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgqAaQAIAAAGgFQAGgGADgPQAEgQAAgWIAAgFIA6AAIAABWIgUAAIAAhGIgWAAQgBAUgCANQgEARgFAHQgHAJgGACQgHADgLAAg");
	this.shape_11.setTransform(55.8,49.7,0.643,0.644);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAfAsIAAhXIAUAAIAABXgAgyAsIAAhXIAUAAIAAAgIAPgBQAQAAAIAIQAJAGAAAOQAAAcghAAgAgeADIAAAZIANAAQAJAAAEgEQADgDAAgGQAAgGgEgDQgEgEgIAAg");
	this.shape_12.setTransform(48.8,49.7,0.643,0.644);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AASAsIAAhFIgiAAIAABFIgVAAIAAhXIBLAAIAABXg");
	this.shape_13.setTransform(41.7,49.7,0.643,0.644);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRAsIgbhYIAVAAIAPA0IAeg0IAXAAIg3BYg");
	this.shape_14.setTransform(29.5,49.8,0.643,0.644);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgJAKQgFgDAAgHQAAgGAFgDQAEgFAFAAQAGAAAFAFQADAEAAAFQAAAGgDAEQgFAFgGAAQgFAAgEgFg");
	this.shape_15.setTransform(20.8,51.8,0.643,0.644);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AglA9IAAgHIAlg2QALgQAAgMQAAgOgPAAQgNAAgHANIgPgLQAEgIAKgGQAJgGALAAQARAAAKAJQALAIAAAPQAAANgNAUIgYAlIAsAAIAAATg");
	this.shape_16.setTransform(16,48.6,0.643,0.644);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgTBCQAQgTAAgxQAAgqgQgXIAAgLQARAIAKAXQAMAXAAAWQAAAagLAVQgJAVgTANg");
	this.shape_17.setTransform(124.5,37.9,0.643,0.644);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAfArIAAhWIAUAAIAABWgAgyArIAAhWIAUAAIAAAfIAPAAQAPAAAJAIQAJAGAAAOQAAAcghgBgAgeADIAAAZIANAAQAJAAAEgEQADgDAAgGQAAgFgEgEQgEgEgIAAg");
	this.shape_18.setTransform(118.4,37.8,0.643,0.644);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgDAtIgXgsIgBgDIAAAAIgIAtIgTAAIAQhYIAIAAIAeA+IAgg+IAHAAIAQBYIgUAAIgIgpIAAgEIgBAAIgCAHIgVAog");
	this.shape_19.setTransform(110.5,37.8,0.643,0.644);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgnA+IAAh5IAUAAIAAAGQAIgIAKAAQApAAABAvQAAAUgMALQgMAMgTAAQgIAAgJgEIAAAlgAgTgmIAAAtQAFAFAIAAQANAAAGgHQAGgFAAgPQAAgPgGgHQgGgGgNAAQgHAAgGAFg");
	this.shape_20.setTransform(103.7,38.9,0.643,0.644);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgmAtIAAhYIAUAAIAAA0IA0g2IAFAAIAABYIgUAAIAAgzIg0A1g");
	this.shape_21.setTransform(97.1,37.8,0.643,0.644);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgJBPIAAgkQgIAEgIAAQgQAAgJgMQgJgMAAgVQAAgVAKgMQALgMAPAAQAGAAAIADIAAgiIATgEIAAAmQAIgDAGAAQARAAAJAMQAKAMAAAVQAAAUgKANQgKAMgPAAQgIAAgHgDIAAAjgAAKgZIAAA2IAKACQAUAAAAgfQAAgMgFgIQgEgHgKAAQgGAAgFACgAgnAAQAAAfATAAIALgCIAAg1QgFgDgGAAQgTAAAAAbg");
	this.shape_22.setTransform(89.6,37.7,0.643,0.644);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgJAjQgJgKgCgTIgPAAIAAAlIgTAAIAAhWIATAAIAAAhIAPAAQADgPAKgKQAJgKAPAAQASAAAKANQAKANAAATQAAAVgKAMQgLAMgRAAQgRAAgJgKgAADgUQgEAKAAAKQAAAcASAAQAIAAAFgHQAFgIAAgNQAAgcgSAAQgJAAgFAIg");
	this.shape_23.setTransform(78.2,37.8,0.643,0.644);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgmAtIAAhYIAUAAIAAA0IA0g2IAFAAIAABYIgUAAIAAgzIgzA1g");
	this.shape_24.setTransform(70.7,37.8,0.643,0.644);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AASArIAAglIgjAAIAAAlIgUAAIAAhWIAUAAIAAAhIAjAAIAAghIAUAAIAABWg");
	this.shape_25.setTransform(64.3,37.8,0.643,0.644);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AATAqQgDgDgCgEQgDAFgHADQgGACgHAAQgOAAgIgHQgIgHAAgNQAAgOALgIQALgJAVAAIAIABQAAgPgSgBQgLAAgJAFIgEgQQALgGAOAAQATAAAJAKQAKAJAAAZIAAASQAAASAHAEQgEAEgCABQgDACgEgBQgEABgEgEgAgTARQAAAMAOAAQARAAAAgSIAAgJIgIgBQgXAAAAAQg");
	this.shape_26.setTransform(58.3,37.8,0.643,0.644);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgjAsIAAhWIAkgBQAPAAAJAGQAIAHAAALQAAAEgEAHQgDAEgHACQARAGAAAQQAAALgIAGQgIAHgSAAgAgQAGIAAAXIARAAQAQAAAAgMQAAgFgFgDQgEgEgHAAgAgQgbIAAATIAQAAQAOAAAAgKQAAgFgEgCQgDgDgGAAIgRABg");
	this.shape_27.setTransform(52.6,37.8,0.643,0.644);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgiAkIAKgQQALAIANAAQAOAAAAgKQAAgMgQAAIgMAAIAAgPIANABQANAAAAgKQAAgFgDgCQgDgDgGAAQgLAAgMAHIgHgQQAQgIAPAAQANAAAKAHQAIAHAAALQAAAOgNAFQAHABAEAGQAFAGAAAFQAAAOgKAIQgKAGgQAAQgVAAgMgJg");
	this.shape_28.setTransform(46.8,37.8,0.643,0.644);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAUAqQgDgDgCgEQgDAFgHADQgHACgGAAQgOAAgJgHQgIgHAAgNQAAgOALgIQAMgJAUAAIAJABQAAgPgTgBQgKAAgJAFIgFgQQALgGAOAAQATAAAKAKQAJAJAAAZIAAASQAAASAHAEQgDAEgCABQgDACgFgBQgEABgDgEgAgSARQAAAMANAAQASAAAAgSIAAgJIgIgBQgXAAAAAQg");
	this.shape_29.setTransform(41.5,37.8,0.643,0.644);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AASArIAAglIgjAAIAAAlIgUAAIAAhWIAUAAIAAAhIAjAAIAAghIAUAAIAABWg");
	this.shape_30.setTransform(35.4,37.8,0.643,0.644);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgdAhQgMgNAAgUQAAgTAMgMQAMgOARAAQATAAAMANQALAMAAAUQAAAUgMANQgLAMgTAAQgTAAgKgMgAgOgUQgGAHABANQgBAcAUAAQAJAAAGgHQAGgHAAgOQAAgcgVAAQgIABgGAHg");
	this.shape_31.setTransform(26,37.8,0.643,0.644);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AARArIAAhFIghAAIAABFIgVAAIAAhWIBLAAIAABWg");
	this.shape_32.setTransform(19.8,37.8,0.643,0.644);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgIAtQgLgVAAgaQAAgWAMgXQAKgXARgIIAAALQgQAXAAAqQAAAxAQATIAAANQgUgNgIgVg");
	this.shape_33.setTransform(14.8,37.9,0.643,0.644);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgZAiQgMgMABgVQgBgUANgNQANgMAVAAQAPAAAMAIIgJAQQgHgHgMAAQgKAAgHAHQgHAHAAAOQAAAbAZAAQALAAAJgHIAHAQQgIAFgIACQgGABgJAAQgSAAgNgLg");
	this.shape_34.setTransform(83.2,25.9,0.643,0.644);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgeAhQgLgNAAgUQAAgTAMgNQAKgMATAAQAUAAALAMQALANAAATQAAAVgLAMQgMAMgTAAQgTAAgLgMgAgOgUQgFAHgBANQAAAdAUAAQAJAAAGgIQAGgHAAgOQgBgcgUAAQgIAAgGAIg");
	this.shape_35.setTransform(77.4,25.9,0.643,0.644);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgYAiQgMgMAAgVQAAgUAMgNQANgMAVAAQAPAAAMAIIgJAQQgHgHgMAAQgKAAgHAHQgHAIAAANQAAAbAZAAQAMAAAIgHIAHAQQgHAFgIACQgHABgJAAQgTAAgLgLg");
	this.shape_36.setTransform(71.6,25.9,0.643,0.644);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgeAiQgMgMAAgVQAAgUANgNQANgMARAAQATAAALALQAMALAAASIgCAKIg9AAQAAALAHAFQAHAGAKAAQANAAAIgHIAIAQQgMAIgUAAQgTAAgMgLgAgUgIIAqAAQgCgTgTAAQgQAAgFATg");
	this.shape_37.setTransform(65.7,25.9,0.643,0.644);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgqAaQAIAAAGgFQAGgHADgOQAEgQAAgWIAAgFIA6AAIAABWIgUAAIAAhGIgWAAQAAAQgDARQgEAQgFAIQgHAJgGACQgHADgLAAg");
	this.shape_38.setTransform(59.1,26,0.643,0.644);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAfAsIAAhXIAUAAIAABXgAgyAsIAAhXIAUAAIAAAgIAPgBQAPAAAJAHQAJAGAAAPQAAAcghAAgAgeADIAAAZIANAAQAJAAAEgEQADgDAAgGQAAgFgEgEQgFgEgHAAg");
	this.shape_39.setTransform(52.2,25.9,0.643,0.644);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AARAsIAAhFIghAAIAABFIgVAAIAAhXIBLAAIAABXg");
	this.shape_40.setTransform(45,25.9,0.643,0.644);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AALAtIAKgyIABgKQAAgLgNAAQgKAAgJAJIgMA+IgUAAIAMhBIAAgFQAAgIgBgHIATgEIACAKQAKgJAQAAQAbAAAAAZIgBAKIgKA1g");
	this.shape_41.setTransform(32.3,25.9,0.643,0.644);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgJAKQgFgEAAgGQAAgGAFgDQAEgFAFAAQAGAAAFAFQADAEAAAFQAAAFgDAFQgFAFgGAAQgFAAgEgFg");
	this.shape_42.setTransform(20.8,28.1,0.643,0.644);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AABA8IAAhVIgXAPIAAgVQAXgMANgQIAJAAIAAB3g");
	this.shape_43.setTransform(15.6,24.9,0.643,0.644);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgUBPIAAgTIAUAAIAAh4IgUAAIAAgSIApAAIAACdg");
	this.shape_44.setTransform(90,14,0.643,0.644);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgeAiQgMgMAAgVQAAgTANgNQANgNARAAQATAAALALQAMAMAAARIgCAKIg9AAQAAAKAHAHQAHAFAKAAQAOAAAHgHIAIAQQgKAIgWAAQgUAAgLgLgAgUgIIAqAAQgCgTgTAAQgQAAgFATg");
	this.shape_45.setTransform(84.7,14,0.643,0.644);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgDAsIgnhXIAVAAIAVA0IAWg0IAVAAIgoBXg");
	this.shape_46.setTransform(78.8,14.1,0.643,0.644);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgKArQgDgFAAgFQAAgGADgFQAFgEAFAAQAGAAAFAEQAEAEAAAHQAAAGgEAEQgGAFgFAAQgFAAgFgFgAgKgWQgDgEAAgGQAAgGADgFQAEgEAGAAQAGAAAFAEQAEAFAAAGQAAAHgEADQgGAEgFABQgFgBgFgEg");
	this.shape_47.setTransform(73.9,14,0.643,0.644);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AglAMIAAg3IAUAAIAAA2QAAAQAPAAQAHAAAFgDQAGgEACgEIAAg7IAUAAIAABWIgUAAIAAgHQgEAEgIACQgGACgHAAQgeAAAAggg");
	this.shape_48.setTransform(68.9,14.1,0.643,0.644);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AASA+IAAg1QAAgJgFgDQgFgFgIAAQgEAAgFACQgGADgCADIAAA+IgUAAIAAh2IAUgFIAAArQAJgIAMAAQAQAAAJAKQAJAJAAAQIAAA1g");
	this.shape_49.setTransform(62.6,12.8,0.643,0.644);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgUBPIAAidIApAAIAAASIgVAAIAAB4IAVAAIAAATg");
	this.shape_50.setTransform(54,14,0.643,0.644);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgdAsIAAhWIAVAAIAAAJQAIgKANAAQALgBAFAEIgIARQgFgEgHAAQgHAAgFAHQgFAGAAAKIAAAwg");
	this.shape_51.setTransform(46.6,14,0.643,0.644);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgeAiQgLgNAAgUQAAgUAMgMQANgNARAAQASAAAMALQALALAAASIgBAKIg+AAQACALAGAGQAHAFAKAAQAOAAAHgHIAIAQQgLAIgWAAQgTAAgLgLgAgUgIIArAAQgDgTgTAAQgRAAgEATg");
	this.shape_52.setTransform(40.9,14,0.643,0.644);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgDAsIgohXIAXAAIAUA0IAWg0IAVAAIgnBXg");
	this.shape_53.setTransform(35,14.1,0.643,0.644);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgeAhQgLgNAAgUQAAgTAMgNQAMgMARAAQAUAAALAMQALANAAATQAAAUgMANQgKAMgUAAQgTAAgLgMgAgOgUQgGAHABANQgBAdAUAAQAKAAAFgIQAGgHgBgOQAAgbgUAAQgJAAgFAHg");
	this.shape_54.setTransform(29.1,14,0.643,0.644);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgeAhQgLgNAAgUQAAgTAMgNQAMgMARAAQAUAAALAMQALAMAAAUQAAAUgLANQgLAMgUAAQgTAAgLgMgAgOgUQgGAHABANQgBAdAUAAQAKAAAFgIQAGgHAAgOQAAgbgVAAQgJAAgFAHg");
	this.shape_55.setTransform(23.1,14,0.643,0.644);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAYA7IAAg1IgvAAIAAA1IgVAAIAAh2IAVAAIAAAvIAvAAIAAgvIAVAAIAAB2g");
	this.shape_56.setTransform(16.4,13,0.643,0.644);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AilFpIDArRICLAAIi/LRg");
	this.shape_57.setTransform(132.7,2.6,0.643,0.644);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#CB0927").s().p("AjFFdIC7q5IDQAAIi7K5g");
	this.shape_58.setTransform(128.3,43.2,0.643,0.644);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#D1D1D1").s().p("AkkIuIBwmjIDRAAIC7q5IBNAAIkqRcg");
	this.shape_59.setTransform(127.2,56.6,0.643,0.644);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#DC052B").s().p("Ax7IuIABxbMAj2AAAIksRbg");
	this.shape_60.setTransform(74.5,29.7,0.643,0.644);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[]},74).wait(286));

	// pic0
	this.instance_3 = new lib.pic0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(200,-3,0.441,0.442);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},74).wait(286));

	// mask-in-out (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_62 = new cjs.Graphics().p("A/XSOMAW8gkbMAnzAAAMAAAAkbg");
	var mask_1_graphics_63 = new cjs.Graphics().p("A+mSOMATlgkbMApoAAAMAAAAkbg");
	var mask_1_graphics_64 = new cjs.Graphics().p("A96SOMAQigkbMArTAAAMAAAAkbg");
	var mask_1_graphics_65 = new cjs.Graphics().p("A9TSOMAN1gkbMAsxAAAMAAAAkbg");
	var mask_1_graphics_66 = new cjs.Graphics().p("A8wSOMALagkbMAuGAAAMAAAAkbg");
	var mask_1_graphics_67 = new cjs.Graphics().p("A8RSOMAJUgkbMAvPAAAMAAAAkbg");
	var mask_1_graphics_68 = new cjs.Graphics().p("A74SOMAHkgkbMAwNAAAMAAAAkbg");
	var mask_1_graphics_69 = new cjs.Graphics().p("A7iSOMAGGgkbMAw/AAAMAAAAkbg");
	var mask_1_graphics_70 = new cjs.Graphics().p("A7SSOMAE/gkbMAxmAAAMAAAAkbg");
	var mask_1_graphics_71 = new cjs.Graphics().p("A7HSOMAENgkbMAyCAAAMAAAAkbg");
	var mask_1_graphics_72 = new cjs.Graphics().p("A7ASOMADugkbMAySAAAMAAAAkbg");
	var mask_1_graphics_73 = new cjs.Graphics().p("A69SOMADjgkbMAyYAAAMAAAAkbg");
	var mask_1_graphics_137 = new cjs.Graphics().p("A/XSOMAAAgkbMA+vAAAMgW8Akbg");
	var mask_1_graphics_138 = new cjs.Graphics().p("A6uSOMAAAgkbMA1dAAAMgTjAkbg");
	var mask_1_graphics_139 = new cjs.Graphics().p("A2hSOMAAAgkbMAtDAAAMgQeAkbg");
	var mask_1_graphics_140 = new cjs.Graphics().p("AywSOMAAAgkbMAlhAAAMgNuAkbg");
	var mask_1_graphics_141 = new cjs.Graphics().p("AvcSOMAAAgkbIe5AAMgLTAkbg");
	var mask_1_graphics_142 = new cjs.Graphics().p("AskSOMAAAgkbIZJAAMgJNAkbg");
	var mask_1_graphics_143 = new cjs.Graphics().p("AqISOMAAAgkbIURAAMgHaAkbg");
	var mask_1_graphics_144 = new cjs.Graphics().p("AoJSOMAAAgkbIQTAAMgF+Akbg");
	var mask_1_graphics_145 = new cjs.Graphics().p("AmmSOMAAAgkbINNAAMgE1Akbg");
	var mask_1_graphics_146 = new cjs.Graphics().p("AlfSOMAAAgkbIK/AAMgEBAkbg");
	var mask_1_graphics_147 = new cjs.Graphics().p("AlLSOMAAAgkbIJpAAMgDiAkbg");
	var mask_1_graphics_148 = new cjs.Graphics().p("AlNSOMAAAgkbIJNAAMgDYAkbg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_1_graphics_62,x:451,y:93.7}).wait(1).to({graphics:mask_1_graphics_63,x:397.1,y:93.7}).wait(1).to({graphics:mask_1_graphics_64,x:348.5,y:93.7}).wait(1).to({graphics:mask_1_graphics_65,x:304.9,y:93.7}).wait(1).to({graphics:mask_1_graphics_66,x:266.4,y:93.7}).wait(1).to({graphics:mask_1_graphics_67,x:233.1,y:93.7}).wait(1).to({graphics:mask_1_graphics_68,x:204.9,y:93.7}).wait(1).to({graphics:mask_1_graphics_69,x:181.8,y:93.7}).wait(1).to({graphics:mask_1_graphics_70,x:163.8,y:93.7}).wait(1).to({graphics:mask_1_graphics_71,x:151,y:93.7}).wait(1).to({graphics:mask_1_graphics_72,x:143.4,y:93.7}).wait(1).to({graphics:mask_1_graphics_73,x:140.8,y:93.7}).wait(1).to({graphics:null,x:0,y:0}).wait(63).to({graphics:mask_1_graphics_137,x:196.5,y:93.6}).wait(1).to({graphics:mask_1_graphics_138,x:155.9,y:93.6}).wait(1).to({graphics:mask_1_graphics_139,x:119.1,y:93.6}).wait(1).to({graphics:mask_1_graphics_140,x:86.3,y:93.6}).wait(1).to({graphics:mask_1_graphics_141,x:57.3,y:93.6}).wait(1).to({graphics:mask_1_graphics_142,x:32.1,y:93.6}).wait(1).to({graphics:mask_1_graphics_143,x:10.9,y:93.6}).wait(1).to({graphics:mask_1_graphics_144,x:-6.5,y:93.6}).wait(1).to({graphics:mask_1_graphics_145,x:-20.1,y:93.6}).wait(1).to({graphics:mask_1_graphics_146,x:-29.7,y:93.6}).wait(1).to({graphics:mask_1_graphics_147,x:-33.2,y:93.6}).wait(1).to({graphics:mask_1_graphics_148,x:-33.4,y:93.6}).wait(212));

	// pic1
	this.instance_4 = new lib.pic1_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(232.7,33.4,0.265,0.265,0,0,0,0.2,0);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(62).to({_off:false},0).to({_off:true},87).wait(211));

	// text1
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgJAKQgFgDAAgHQAAgFAFgEQAEgFAFAAQAHAAADAFQAFAEAAAFQAAAHgFADQgDAFgHAAQgFAAgEgFg");
	this.shape_61.setTransform(110.4,38.9,0.651,0.651);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgdAsIAAhXIA7AAIAAASIgnAAIAABFg");
	this.shape_62.setTransform(106.2,36.8,0.651,0.651);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgcA1QgKgLAAgQQAAgIAFgKQAGgIAIgFQgIgFgDgGQgEgGAAgJQAAgOAKgHQAJgJAPAAQARAAAIAJQAKAIAAANQAAAIgGAIQgFAIgGADQAIAEAGAIQAHAKAAAIQAAAQgLAKQgKAJgSAAQgSAAgKgIgAgRAaQAAAHAFAFQAFAFAHABQAIAAAFgFQAFgFAAgGQAAgOgUgLQgPAJAAAOgAgNgfQAAAGAFAFQAGAFAEACQAEgCAEgGQADgFAAgFQAAgFgDgEQgEgDgGAAQgNAAAAAMg");
	this.shape_63.setTransform(97.1,35.7,0.651,0.651);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgfAuQgLgPAAgiQAAgYAMgQQALgRAUgBQAqABAAA8QAAAbgMASQgLAQgUAAQgWAAgJgPgAgUgBQAAAXAFALQAEAMALAAQAKgBAGgJQAFgMAAgYQAAgXgFgKQgFgJgKAAQgVgBAAArg");
	this.shape_64.setTransform(90.7,35.7,0.651,0.651);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgWAyQAYgOAKgWQgGADgHAAQgRAAgKgLQgKgKAAgRQAAgRAKgMQALgLAQAAQAoAAAAA1QAAAUgQAXQgQAWgSAFgAgMglQgFAGAAAJQAAALAFAFQAFAGAHAAQARAAAAgVQAAgWgRAAQgIAAgEAGg");
	this.shape_65.setTransform(84.3,35.7,0.651,0.651);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AABA8IAAhVIgXAPIAAgVQAWgLAOgRIAJAAIAAB3g");
	this.shape_66.setTransform(77.7,35.7,0.651,0.651);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgkAsIAAhWIAlgBQAPAAAJAGQAIAHAAALQAAAGgEAEQgDAFgGADQARAFAAAQQAAALgJAHQgJAGgRAAgAgQAcIARABQAQAAAAgMQAAgGgFgDQgFgCgGAAIgRAAgAgQgbIAAATIAQAAQANAAAAgKQAAgEgDgDQgEgDgFAAg");
	this.shape_67.setTransform(68.7,36.7,0.651,0.651);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgYAiQgMgMAAgVQAAgUAMgNQANgMAVAAQAPAAAMAIIgJAQQgIgHgLAAQgKAAgHAHQgHAIAAANQAAAbAZAAQAMAAAIgHIAHAQQgHAFgIACQgHABgJAAQgTAAgLgLg");
	this.shape_68.setTransform(59.5,36.8,0.651,0.651);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgUAMgMQALgMASAAQAUAAALAMQALAMAAAUQAAAWgMALQgLAMgTAAQgTAAgLgMgAgOgUQgGAIAAAMQAAAdAUAAQAJAAAGgIQAGgIAAgNQAAgcgVAAQgIAAgGAIg");
	this.shape_69.setTransform(53.6,36.8,0.651,0.651);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgZAiQgLgNAAgUQAAgUAMgNQANgMAVAAQAPAAAMAIIgJAQQgHgHgMAAQgKAAgHAHQgHAIAAANQAAAbAZAAQAMAAAIgHIAHAQQgHAFgJACQgGABgJAAQgSAAgNgLg");
	this.shape_70.setTransform(47.7,36.8,0.651,0.651);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgeAiQgMgMAAgVQAAgUANgNQAMgMASAAQATAAALALQALAMAAARIgBAKIg+AAQABALAHAGQAHAFAJAAQAOAAAIgHIAHAQQgLAIgUAAQgTAAgMgLgAgUgIIAqAAQgDgTgSAAQgQAAgFATg");
	this.shape_71.setTransform(41.8,36.8,0.651,0.651);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgpAaQAHAAAGgFQAFgGAEgPQAEgSAAgUIAAgFIA5AAIAABWIgTAAIAAhGIgVAAQgBASgDAPQgDAOgHAKQgGAJgGACQgIADgJAAg");
	this.shape_72.setTransform(35.1,36.8,0.651,0.651);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AAfAsIAAhXIAUAAIAABXgAgyAsIAAhXIATAAIAAAgIAQgBQAPAAAJAHQAJAIAAANQAAAcghAAgAgfADIAAAZIAOAAQAJAAADgEQAEgDAAgGQAAgGgEgDQgEgEgIAAg");
	this.shape_73.setTransform(28.1,36.8,0.651,0.651);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AARAsIAAhFIghAAIAABFIgVAAIAAhXIBLAAIAABXg");
	this.shape_74.setTransform(20.8,36.8,0.651,0.651);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgmAuIAAhYIAUAAIAAAzIA0g1IAFAAIAABXIgVAAIAAgzIgzA2g");
	this.shape_75.setTransform(76.9,24.7,0.651,0.651);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgqAaQAIAAAGgGQAFgFAEgPQAEgSAAgTIAAgGIA6AAIAABWIgUAAIAAhGIgWAAQAAARgDAQQgEAQgFAIQgGAIgHAEQgIACgKAAg");
	this.shape_76.setTransform(70.2,24.7,0.651,0.651);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AATAqQgDgCgCgFQgDAFgHADQgEACgJAAQgPAAgHgHQgIgGAAgNQAAgPALgIQALgJAVAAIAIACQAAgQgSAAQgLAAgJAEIgEgQQAKgFAPAAQATAAAJAJQAKAJAAAaIAAARQAAASAHAEQgDAFgDAAIgHABQgFAAgDgDgAgTARQAAAMAOAAQARAAAAgSIAAgIIgIgBQgXAAAAAPg");
	this.shape_77.setTransform(64.3,24.7,0.651,0.651);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAfA7IAAgfIg9AAIAAAfIgRAAIAAgvIAIAAQAJgMAFgOQAFgTAAgOIAAgLIA4AAIAABGIAMAAIAAAvgAgTAMIAkAAIAAg2IgVAAQgBAjgOATg");
	this.shape_78.setTransform(57.9,25.7,0.651,0.651);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgiAkIAKgQQAKAIAOABQAOAAAAgLQAAgMgQAAIgMAAIAAgPIANABQANAAAAgKQAAgFgDgCQgDgDgGAAQgLAAgLAHIgIgQQAQgIAPABQAOAAAJAGQAJAIAAAKQAAAOgOAFQAHABAFAGQAEAFAAAGQAAAOgKAIQgKAGgQABQgUAAgNgKg");
	this.shape_79.setTransform(51.8,24.7,0.651,0.651);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgeAhQgLgNAAgUQAAgTAMgMQALgNASAAQAUAAALAMQALANAAATQAAAVgLAMQgMAMgTAAQgTAAgLgMgAgOgUQgFAGgBAOQAAAdAUAAQAJAAAGgHQAGgHAAgPQgBgbgUAAQgJAAgFAHg");
	this.shape_80.setTransform(46.2,24.7,0.651,0.651);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgYAiQgMgLAAgWQAAgTAMgNQANgNAVAAQAQAAALAJIgJAPQgIgHgLAAQgLAAgGAIQgHAIAAAMQAAAcAZAAQAMAAAIgIIAHAQQgKAGgFABIgQABQgTAAgLgLg");
	this.shape_81.setTransform(40.3,24.7,0.651,0.651);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AAfArIAAhVIAUAAIAABVgAgyArIAAhVIAUAAIAAAeIAPAAQAPAAAJAHQAJAHAAAOQAAAbghAAgAgeADIAAAYIANABQAKAAADgEQADgDAAgGQAAgGgEgDQgEgEgIABg");
	this.shape_82.setTransform(30.2,24.7,0.651,0.651);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgCA8IgZhAIgMA/IgVAAIAYh2IALAAIAZBPIAZhPIAMAAIAYB2IgVAAIgMg/IgYBAg");
	this.shape_83.setTransform(21.9,23.7,0.651,0.651);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AilFpIDArRICLAAIi/LRg");
	this.shape_84.setTransform(132.7,2.6,0.643,0.644);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#CB0927").s().p("AjFFdIC7q5IDQAAIi7K5g");
	this.shape_85.setTransform(128.3,43.2,0.643,0.644);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#D1D1D1").s().p("AkkIuIBwmjIDRAAIC7q5IBNAAIkqRcg");
	this.shape_86.setTransform(127.2,56.6,0.643,0.644);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#DC052B").s().p("Ax7IuIABxbMAj2AAAIksRbg");
	this.shape_87.setTransform(74.5,29.7,0.643,0.644);

	var maskedShapeInstanceList = [this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61}]},62).to({state:[]},87).wait(211));

	// mask-in-out - копия (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_137 = new cjs.Graphics().p("A/XSOMAW8gkbMAnzAAAMAAAAkbg");
	var mask_2_graphics_138 = new cjs.Graphics().p("A+wSOMATlgkbMAp8AAAMgAUAkbg");
	var mask_2_graphics_139 = new cjs.Graphics().p("A+NSOMAQhgkbMAr7AAAMgAoAkbg");
	var mask_2_graphics_140 = new cjs.Graphics().p("A9uSOMAN0gkbMAtpAAAMgA3Akbg");
	var mask_2_graphics_141 = new cjs.Graphics().p("A9TSOMALagkbMAvNAAAMgBHAkbg");
	var mask_2_graphics_142 = new cjs.Graphics().p("A87SOMAJVgkbMAwiAAAMgBTAkbg");
	var mask_2_graphics_143 = new cjs.Graphics().p("A8nSOMAHkgkbMAxqAAAMgBdAkbg");
	var mask_2_graphics_144 = new cjs.Graphics().p("A8WSOMAGIgkbMAylAAAMgBmAkbg");
	var mask_2_graphics_145 = new cjs.Graphics().p("A8JSOMAFAgkbMAzTAAAMgBtAkbg");
	var mask_2_graphics_146 = new cjs.Graphics().p("A8ASOMAENgkbMAz0AAAMgByAkbg");
	var mask_2_graphics_147 = new cjs.Graphics().p("A76SOMADtgkbMA0IAAAMgB0Akbg");
	var mask_2_graphics_148 = new cjs.Graphics().p("A74SOMADjgkbMA0OAAAMgB1Akbg");
	var mask_2_graphics_211 = new cjs.Graphics().p("A/XSOMAAAgkbMA+vAAAMgW8Akbg");
	var mask_2_graphics_212 = new cjs.Graphics().p("A6uSOMAAAgkbMA1dAAAMgTjAkbg");
	var mask_2_graphics_213 = new cjs.Graphics().p("A2hSOMAAAgkbMAtDAAAMgQeAkbg");
	var mask_2_graphics_214 = new cjs.Graphics().p("AywSOMAAAgkbMAlhAAAMgNuAkbg");
	var mask_2_graphics_215 = new cjs.Graphics().p("AvcSOMAAAgkbIe5AAMgLTAkbg");
	var mask_2_graphics_216 = new cjs.Graphics().p("AskSOMAAAgkbIZJAAMgJNAkbg");
	var mask_2_graphics_217 = new cjs.Graphics().p("AqISOMAAAgkbIURAAMgHaAkbg");
	var mask_2_graphics_218 = new cjs.Graphics().p("AoJSOMAAAgkbIQTAAMgF+Akbg");
	var mask_2_graphics_219 = new cjs.Graphics().p("AmmSOMAAAgkbINNAAMgE1Akbg");
	var mask_2_graphics_220 = new cjs.Graphics().p("AlfSOMAAAgkbIK/AAMgEBAkbg");
	var mask_2_graphics_221 = new cjs.Graphics().p("AlLSOMAAAgkbIJpAAMgDiAkbg");
	var mask_2_graphics_222 = new cjs.Graphics().p("AlNSOMAAAgkbIJNAAMgDYAkbg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(137).to({graphics:mask_2_graphics_137,x:451,y:93.7}).wait(1).to({graphics:mask_2_graphics_138,x:398.2,y:93.7}).wait(1).to({graphics:mask_2_graphics_139,x:350.4,y:93.7}).wait(1).to({graphics:mask_2_graphics_140,x:307.6,y:93.7}).wait(1).to({graphics:mask_2_graphics_141,x:269.9,y:93.7}).wait(1).to({graphics:mask_2_graphics_142,x:237.2,y:93.7}).wait(1).to({graphics:mask_2_graphics_143,x:209.6,y:93.7}).wait(1).to({graphics:mask_2_graphics_144,x:186.9,y:93.7}).wait(1).to({graphics:mask_2_graphics_145,x:169.3,y:93.7}).wait(1).to({graphics:mask_2_graphics_146,x:156.7,y:93.7}).wait(1).to({graphics:mask_2_graphics_147,x:149.2,y:93.7}).wait(1).to({graphics:mask_2_graphics_148,x:146.7,y:93.7}).wait(1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_2_graphics_211,x:196.5,y:93.6}).wait(1).to({graphics:mask_2_graphics_212,x:155.9,y:93.6}).wait(1).to({graphics:mask_2_graphics_213,x:119.1,y:93.6}).wait(1).to({graphics:mask_2_graphics_214,x:86.3,y:93.6}).wait(1).to({graphics:mask_2_graphics_215,x:57.3,y:93.6}).wait(1).to({graphics:mask_2_graphics_216,x:32.1,y:93.6}).wait(1).to({graphics:mask_2_graphics_217,x:10.9,y:93.6}).wait(1).to({graphics:mask_2_graphics_218,x:-6.5,y:93.6}).wait(1).to({graphics:mask_2_graphics_219,x:-20.1,y:93.6}).wait(1).to({graphics:mask_2_graphics_220,x:-29.7,y:93.6}).wait(1).to({graphics:mask_2_graphics_221,x:-33.2,y:93.6}).wait(1).to({graphics:mask_2_graphics_222,x:-33.4,y:93.6}).wait(138));

	// pic2
	this.instance_5 = new lib.pic2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(241.5,46.2,0.661,0.66,0,0,0,0.4,0.4);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(137).to({_off:false},0).to({_off:true},86).wait(137));

	// text2
	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgJAKQgFgFAAgFQAAgFAFgEQAEgFAFAAQAGAAAFAFQADADAAAGQAAAGgDAEQgFAFgGAAQgFAAgEgFg");
	this.shape_88.setTransform(91.4,44,0.651,0.651);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgmAuIAAhZIAUAAIAAA0IA0g2IAFAAIAABZIgUAAIAAg0Ig0A2g");
	this.shape_89.setTransform(86.2,41.8,0.651,0.651);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AAKAdQgDgXgWAAIgBAAIAAAmIgUAAIAAhXIAUAAIAAAhIABAAQAVAAADgTQACgPAPAAIAKABIAAAQIgFAAQgDAAgBAFQgEAQgSAFQATAEAFAUQABAFADAAIAEgBIAAARIgJABQgQAAgCgQg");
	this.shape_90.setTransform(80.2,41.8,0.651,0.651);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgnA9IAAh4IAUAAIAAAGQAIgHALAAQAogBAAAvQAAAUgLALQgMAMgTAAQgIAAgJgEIAAAkgAgTgmIAAAtQAGAFAHAAQANAAAGgHQAGgGAAgOQAAgOgGgIQgGgGgNAAQgIAAgFAFg");
	this.shape_91.setTransform(74,42.9,0.651,0.651);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgTAMgNQALgMASAAQAUAAALAMQALAMAAAUQAAAWgMALQgLAMgTAAQgTAAgLgMgAgOgUQgGAHAAANQAAAdAUAAQAJAAAGgIQAGgIAAgNQAAgcgVAAQgIAAgGAIg");
	this.shape_92.setTransform(67.6,41.8,0.651,0.651);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgeAxQgMgOAAgYQAAgOADgNQADgMAGgHQAGgJAIgFQAKgGANgCIAcgFIAEASIgnAHIgKAFQgGACgEAIQgEAGgCALQAGgHAJgFQAIgFAHAAQARAAALALQALALAAATQgBASgKANQgLANgVAAQgTAAgLgOgAgPABQgFAHAAALQAAANAGAHQAGAHAJAAQAKABAGgIQAGgIAAgLQgBgNgGgGQgFgHgKAAQgIABgIAGg");
	this.shape_93.setTransform(61.4,40.7,0.651,0.651);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AggArQAXAAAAgMQAAgJgGgPIgchDIAVAAIAXA8IAWg8IAVAAIgmBlQgEAJgJAFQgLAGgOAAg");
	this.shape_94.setTransform(55.2,42.9,0.651,0.651);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgkAsIAAhWIAlgBQAPAAAJAGQAIAHAAALQAAAGgEAEQgCAEgHAEQARAFAAAQQAAALgJAGQgJAHgRAAgAgQAcIARABQAQAAAAgMQAAgGgFgDQgFgCgGAAIgRAAgAgQgbIAAATIAQAAQANAAAAgKQAAgEgDgDQgEgDgFAAg");
	this.shape_95.setTransform(46.2,41.8,0.651,0.651);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgTALgNQAMgMASAAQAUAAALAMQALAMAAAUQAAAVgMAMQgLAMgTAAQgTAAgLgMgAgOgUQgGAIAAAMQAAAdAUAAQAKAAAFgIQAGgHAAgOQAAgcgVAAQgIAAgGAIg");
	this.shape_96.setTransform(40,41.8,0.651,0.651);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AARAsIAAhFIghAAIAABFIgVAAIAAhXIBLAAIAABXg");
	this.shape_97.setTransform(33.7,41.8,0.651,0.651);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgmAuIAAhZIAUAAIAAA0IAzg2IAGAAIAABZIgUAAIAAg0IgzA2g");
	this.shape_98.setTransform(27.3,41.8,0.651,0.651);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgJAsIAAhFIgZAAIAAgSIBFAAIAAASIgZAAIAABFg");
	this.shape_99.setTransform(21.3,41.8,0.651,0.651);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AAUArIgUgdIgUAdIgYAAIAigrIgggrIAYAAIASAcIATgcIAYAAIghAqIAjAsg");
	this.shape_100.setTransform(105.6,29.8,0.651,0.651);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgeAiQgMgMAAgVQAAgTANgNQANgNARAAQASAAAMALQAMAMAAARIgCAKIg+AAQABALAHAGQAHAGAJAAQAOAAAIgIIAHAQQgKAIgWAAQgTAAgLgLgAgUgIIAqAAQgCgTgTAAQgQAAgFATg");
	this.shape_101.setTransform(99.5,29.8,0.651,0.651);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgYAiQgMgLAAgWQAAgUAMgMQANgNAVAAQAQAAALAJIgJAPQgIgHgLAAQgKAAgHAHQgHAJAAAMQAAAcAZAAQALAAAJgIIAHAQQgIAGgHABIgQABQgTAAgLgLg");
	this.shape_102.setTransform(93.5,29.8,0.651,0.651);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgkAsIAAhWIAlgBQAPAAAIAHQAJAGAAALQAAAFgEAGQgEAEgGACQASAGAAAPQAAAMgJAHQgIAGgSAAgAgQAcIARABQAQAAAAgMQAAgFgFgEQgFgDgGAAIgRAAgAgQgbIAAATIAQAAQANAAAAgKQAAgFgDgCQgDgDgGAAIgRABg");
	this.shape_103.setTransform(87.9,29.8,0.651,0.651);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AglAsIAAgRIADAAQAEABABgFQABgHAFgFQAGgGAGgBQgVgEAAgSQAAgLAJgIQAIgHARAAIAkABIAABWIgUAAIAAghIgFAAQgWABgDATQgBAOgQAAIgIAAgAgIgZQgDADAAAFQAAAGAFADQAEAEAHAAIANABIAAgZIgQgBQgFAAgFAEg");
	this.shape_104.setTransform(78.3,29.8,0.651,0.651);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgqAaQAJAAAFgGQAFgEAEgQQAEgSAAgTIAAgGIA6AAIAABWIgUAAIAAhGIgWAAQAAASgDAPQgDAPgGAJQgGAIgHADQgJADgJAAg");
	this.shape_105.setTransform(71.9,29.8,0.651,0.651);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AAfA7IAAgfIg9AAIAAAfIgRAAIAAgvIAIAAQAJgMAFgOQAEgRAAgQIAAgLIA5AAIAABGIAMAAIAAAvgAgTAMIAkAAIAAg2IgVAAQgBAjgOATg");
	this.shape_106.setTransform(65.5,30.8,0.651,0.651);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgmAtIAAhYIAUAAIAAA0IAzg2IAGAAIAABYIgUAAIAAgzIg0A1g");
	this.shape_107.setTransform(55.6,29.8,0.651,0.651);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgqAaQAIAAAGgGQAFgEAEgQQAEgQAAgVIAAgGIA6AAIAABWIgUAAIAAhGIgWAAQgBAVgCAMQgEAQgFAIQgGAIgHADQgIADgKAAg");
	this.shape_108.setTransform(48.8,29.8,0.651,0.651);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgeAiQgMgLAAgWQABgUAMgMQANgNAQAAQAUAAALALQALAMAAARIgBAKIg9AAQAAALAHAGQAGAGALAAQANAAAHgIIAJAQQgLAIgWAAQgTAAgLgLgAgUgIIAqAAQgCgTgTAAQgQAAgFATg");
	this.shape_109.setTransform(42.7,29.8,0.651,0.651);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AAfA7IAAgfIg9AAIAAAfIgRAAIAAgvIAIAAQAJgMAFgOQAEgRAAgQIAAgLIA5AAIAABGIAMAAIAAAvgAgTAMIAkAAIAAg2IgVAAQgBAigOAUg");
	this.shape_110.setTransform(36.1,30.8,0.651,0.651);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgTAMgMQALgNASAAQAUAAALAMQALANAAATQAAAVgMAMQgMAMgSAAQgSAAgMgMgAgOgUQgGAHAAANQAAAdAUAAQAJAAAGgIQAGgHgBgOQAAgbgUAAQgIAAgGAHg");
	this.shape_111.setTransform(29.6,29.8,0.651,0.651);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgDAtIgWgsIgCgDIgBAAIgHAuIgUAAIARhYIAIAAIAeA9IAgg9IAHAAIARBYIgVAAIgHgpIgBgFIAAAAIgDAHIgVAog");
	this.shape_112.setTransform(22.6,29.8,0.651,0.651);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgDAtIgWgsIgCgEIAAAAIgHAvIgVAAIARhYIAIAAIAfA9IAeg9IAIAAIARBYIgWAAIgGgqIAAgFIgBAAIgEAIIgUAog");
	this.shape_113.setTransform(78.7,17.8,0.651,0.651);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgeAiQgLgLgBgWQABgUAMgNQAMgMASAAQASAAAMALQALALAAASIgBAKIg+AAQABALAGAFQAIAGAJAAQAOAAAHgHIAIAQQgLAIgUAAQgUAAgLgLgAgUgIIAqAAQgDgTgSAAQgQAAgFATg");
	this.shape_114.setTransform(71.6,17.8,0.651,0.651);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AATAqQgDgDgCgEQgCAEgIADQgFADgIAAQgOAAgIgHQgIgHAAgNQAAgOALgIQALgJAVAAIAIABQAAgPgSAAQgMAAgHADIgFgPQAKgFAPAAQATAAAKAJQAJAKAAAYIAAASQAAARAHAFQgCADgEACIgHABQgEAAgEgDgAgSARQAAAMANAAQARAAAAgSIAAgIIgHgBQgXAAAAAPg");
	this.shape_115.setTransform(65.6,17.8,0.651,0.651);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgdAsIAAhXIA7AAIAAASIgnAAIAABFg");
	this.shape_116.setTransform(60.4,17.8,0.651,0.651);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AATAqQgDgDgCgEQgDAFgHACQgFADgIAAQgOAAgIgHQgIgHAAgNQAAgOALgIQALgJAVAAIAIABQAAgPgSAAQgMAAgIADIgEgPQAKgFAPAAQATAAAJAJQAKAJAAAZIAAASQAAASAHAEQgCADgEACIgHABQgFAAgDgDgAgTARQAAAMAOAAQARAAAAgSIAAgIIgIgBQgXAAAAAPg");
	this.shape_117.setTransform(54.8,17.8,0.651,0.651);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgqAaQAJAAAFgGQAFgFAEgPQAEgSAAgUIAAgFIA6AAIAABWIgUAAIAAhGIgWAAQAAAQgDARQgEAQgFAIQgGAIgHADQgHADgLAAg");
	this.shape_118.setTransform(48.4,17.8,0.651,0.651);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AAeA7IAAgeIg7AAIAAAeIgSAAIAAguIAIAAQAJgMAEgPQAFgPABgSIAAgLIA4AAIAABHIAMAAIAAAugAgTANIAkAAIAAg3IgVAAQgBAjgOAUg");
	this.shape_119.setTransform(41.9,18.7,0.651,0.651);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgeAiQgMgMAAgVQAAgUANgNQANgMAQAAQAUAAALALQAMALAAASIgCAKIg+AAQACALAGAFQAHAGAJAAQAPAAAHgHIAIAQQgMAIgVAAQgRAAgNgLgAgTgIIApAAQgCgTgTAAQgQAAgEATg");
	this.shape_120.setTransform(35.4,17.8,0.651,0.651);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgoA+IAAh5IAVAAIAAAGQAHgIAMAAQAoAAAAAuQAAAUgLANQgMALgSAAQgJAAgJgEIAAAlgAgTglIAAAtQAGAEAHAAQANAAAGgHQAGgHAAgOQABgOgHgHQgFgHgOAAQgHAAgGAHg");
	this.shape_121.setTransform(29.3,18.8,0.651,0.651);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AAWA8IAAhkIgrAAIAABkIgVAAIAAh3IBVAAIAAB3g");
	this.shape_122.setTransform(22.3,16.7,0.651,0.651);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AilFpIDArRICLAAIi/LRg");
	this.shape_123.setTransform(132.7,2.6,0.643,0.644);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#CB0927").s().p("AjFFdIC7q5IDQAAIi7K5g");
	this.shape_124.setTransform(128.3,43.2,0.643,0.644);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#D1D1D1").s().p("AkkIuIBwmjIDRAAIC7q5IBNAAIkqRcg");
	this.shape_125.setTransform(127.2,56.6,0.643,0.644);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#DC052B").s().p("Ax7IuIABxbMAj2AAAIksRbg");
	this.shape_126.setTransform(74.5,29.7,0.643,0.644);

	var maskedShapeInstanceList = [this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88}]},137).to({state:[]},86).wait(137));

	// mask-in-out - копия: 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_211 = new cjs.Graphics().p("A/XSOMAW8gkbMAnzAAAMAAAAkbg");
	var mask_3_graphics_212 = new cjs.Graphics().p("A+vSOMATlgkbMAp6AAAMgARAkbg");
	var mask_3_graphics_213 = new cjs.Graphics().p("A+KSOMAQigkbMArzAAAMgAgAkbg");
	var mask_3_graphics_214 = new cjs.Graphics().p("A9pSOMAN0gkbMAtfAAAMgAtAkbg");
	var mask_3_graphics_215 = new cjs.Graphics().p("A9MSOMALagkbMAu/AAAMgA5Akbg");
	var mask_3_graphics_216 = new cjs.Graphics().p("A8zSOMAJUgkbMAwTAAAMgBEAkbg");
	var mask_3_graphics_217 = new cjs.Graphics().p("A8eSOMAHkgkbMAxZAAAMgBNAkbg");
	var mask_3_graphics_218 = new cjs.Graphics().p("A8MSOMAGHgkbMAyTAAAMgBUAkbg");
	var mask_3_graphics_219 = new cjs.Graphics().p("A7/SOMAFAgkbMAy/AAAMgBZAkbg");
	var mask_3_graphics_220 = new cjs.Graphics().p("A72SOMAENgkbMAzgAAAMgBeAkbg");
	var mask_3_graphics_221 = new cjs.Graphics().p("A7wSOMADugkbMAzyAAAMgBfAkbg");
	var mask_3_graphics_222 = new cjs.Graphics().p("A7uSOMADkgkbMAz5AAAMgBhAkbg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(211).to({graphics:mask_3_graphics_211,x:451,y:93.7}).wait(1).to({graphics:mask_3_graphics_212,x:398,y:93.7}).wait(1).to({graphics:mask_3_graphics_213,x:350.1,y:93.7}).wait(1).to({graphics:mask_3_graphics_214,x:307.1,y:93.7}).wait(1).to({graphics:mask_3_graphics_215,x:269.3,y:93.7}).wait(1).to({graphics:mask_3_graphics_216,x:236.5,y:93.7}).wait(1).to({graphics:mask_3_graphics_217,x:208.7,y:93.7}).wait(1).to({graphics:mask_3_graphics_218,x:186,y:93.7}).wait(1).to({graphics:mask_3_graphics_219,x:168.3,y:93.7}).wait(1).to({graphics:mask_3_graphics_220,x:155.7,y:93.7}).wait(1).to({graphics:mask_3_graphics_221,x:148.2,y:93.7}).wait(1).to({graphics:mask_3_graphics_222,x:145.6,y:93.7}).wait(1).to({graphics:null,x:0,y:0}).wait(137));

	// pic3
	this.instance_6 = new lib.eeer();
	this.instance_6.parent = this;
	this.instance_6.setTransform(231.5,26.9,0.412,0.412,0,0,0,120.1,83.7);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(211).to({_off:false},0).wait(75).to({alpha:0},8).to({_off:true},4).wait(62));

	// text3
	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgJAKQgFgEAAgGQAAgFAFgFQAEgDAFAAQAHAAADADQAFAFAAAFQAAAGgFAEQgDAFgHAAQgFAAgEgFg");
	this.shape_127.setTransform(73.9,43.2,0.651,0.651);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgeAiQgLgLAAgWQAAgUAMgNQANgMARAAQARgBANAMQALALAAASIgBAKIg+AAQABALAHAFQAGAGALABQANAAAHgIIAIAQQgLAIgUAAQgUAAgLgLgAgUgIIAqAAQgCgUgTAAQgRAAgEAUg");
	this.shape_128.setTransform(68.9,41,0.651,0.651);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AASArIAAglIgjAAIAAAlIgVAAIAAhVIAVAAIAAAgIAjAAIAAggIAVAAIAABVg");
	this.shape_129.setTransform(62.5,41,0.651,0.651);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgmBDIAAhXIAUAAIAAAzIA0g1IAFAAIAABXIgUAAIAAg0Ig0A2gAgRgsQgJgHgBgMIARgEQACAQAKgBQANAAABgOIAQADQgCAMgJAHQgHAGgMAAQgMAAgHgGg");
	this.shape_130.setTransform(56.1,39.6,0.651,0.651);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AATAqQgDgDgCgEQgDAFgHACQgFAEgIgBQgOAAgIgHQgIgGAAgNQAAgPALgIQALgJAVAAIAIABQAAgQgSAAQgLAAgJAFIgEgQQAKgGAPABQATgBAJAKQAKAJAAAZIAAASQAAASAHAEQgDAFgDAAQgDABgEAAQgDAAgFgDgAgTARQAAAMAOAAQARAAAAgSIAAgIIgIgBQgXAAAAAPg");
	this.shape_131.setTransform(49.9,41,0.651,0.651);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgiAkIAKgQQAKAJAOAAQAOAAAAgLQAAgMgQAAIgMAAIAAgPIAOABQAMAAAAgKQAAgFgDgCQgEgDgFAAQgLAAgMAHIgGgQQAPgIAPABQANAAAKAGQAIAHAAALQAAAPgOAEQAHABAFAGQAFAFAAAHQAAANgJAHQgMAHgPAAQgUAAgNgJg");
	this.shape_132.setTransform(44.3,41,0.651,0.651);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgmAtIAAhXIAUAAIAAAzIAzg1IAGAAIAABXIgUAAIAAgzIg0A1g");
	this.shape_133.setTransform(38.5,41,0.651,0.651);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AAfA7IAAgfIg8AAIAAAfIgSAAIAAgvIAIAAQAIgKAGgQQAEgRABgQIAAgLIA4AAIAABGIAMAAIAAAvgAgTAMIAkAAIAAg2IgUAAQgCAigOAUg");
	this.shape_134.setTransform(31.8,42,0.651,0.651);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgmAtIAAhXIAUAAIAAAzIA0g1IAFAAIAABXIgUAAIAAgzIgzA1g");
	this.shape_135.setTransform(21.9,41,0.651,0.651);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AAUAsIgUgeIgUAeIgYAAIAigsIgggrIAYAAIASAcIAUgcIAWAAIgfAqIAiAtg");
	this.shape_136.setTransform(91.5,29,0.651,0.651);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AglAsIAAgRIADABQAEAAABgFQABgGAFgGQAFgFAHgCQgVgEAAgSQAAgLAIgHQAJgIARAAIAkACIAABWIgUAAIAAghIgFAAQgWAAgDATQgCAPgPAAgAgIgZQgDAEAAAFQAAAFAFAEQAFADAGAAIANAAIAAgYIgQAAQgGAAgEADg");
	this.shape_137.setTransform(85.2,29,0.651,0.651);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgmAuIAAhZIAVAAIAAA0IAzg2IAFAAIAABZIgUAAIAAg0Ig0A2g");
	this.shape_138.setTransform(79.1,29,0.651,0.651);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgdAsIAAhXIA7AAIAAASIgnAAIAABFg");
	this.shape_139.setTransform(73.5,29,0.651,0.651);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgTAMgNQALgMASAAQAUAAALAMQALANAAATQAAAWgLALQgMAMgTAAQgTAAgLgMgAgOgUQgGAHAAANQAAAdAUAAQAJAAAGgIQAGgIAAgNQAAgcgVAAQgIAAgGAIg");
	this.shape_140.setTransform(67.7,29,0.651,0.651);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgqAaQAJAAAFgGQAFgFAEgPQAEgSAAgUIAAgFIA6AAIAABWIgUAAIAAhGIgWAAQAAAQgDARQgEAQgFAIQgHAJgGACQgHADgLAAg");
	this.shape_141.setTransform(61.1,29,0.651,0.651);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgeAhQgLgMAAgVQAAgTAMgNQAKgMATAAQAUAAALAMQALANAAATQAAAVgLAMQgNAMgSAAQgTAAgLgMgAgOgUQgGAHAAANQAAAdAUAAQAJAAAGgIQAGgIAAgNQgBgcgUAAQgJAAgFAIg");
	this.shape_142.setTransform(55,29,0.651,0.651);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AASAsIAAgmIgjAAIAAAmIgVAAIAAhXIAVAAIAAAhIAjAAIAAghIAVAAIAABXg");
	this.shape_143.setTransform(48.7,29,0.651,0.651);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AAVAsIgVgeIgUAeIgYAAIAigsIgfgrIAXAAIASAcIAUgcIAXAAIghAqIAjAtg");
	this.shape_144.setTransform(42.4,29,0.651,0.651);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgeAiQgMgLABgWQgBgUANgNQAMgMARAAQAUAAALALQALALAAASIgBAKIg9AAQAAALAHAFQAGAGALAAQANAAAIgHIAIAQQgMAIgVAAQgSAAgMgLgAgTgIIApAAQgDgTgSAAQgRAAgDATg");
	this.shape_145.setTransform(36.2,29,0.651,0.651);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgJAsIAAhFIgZAAIAAgSIBFAAIAAASIgZAAIAABFg");
	this.shape_146.setTransform(30.5,29,0.651,0.651);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgkAsIAAhWIAmgBQAOAAAJAGQAIAHAAALQAAAFgDAFQgDAFgHADQARAFAAAQQAAAMgJAFQgJAHgQAAgAgQAcIARABQAQAAAAgMQAAgGgFgDQgFgCgGAAIgRAAgAgQgbIAAATIAQAAQAOAAAAgKQAAgEgEgDQgDgDgGAAg");
	this.shape_147.setTransform(21.7,29,0.651,0.651);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AAfArIAAhWIAUAAIAABWgAgyArIAAhWIATAAIAAAfIAQAAQAPAAAJAHQAJAHAAAOQAAAbghAAgAgfADIAAAYIAOABQAJAAADgDQAEgFAAgFQAAgFgEgEQgEgEgIAAg");
	this.shape_148.setTransform(95.7,17,0.651,0.651);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AAfA7IAAgfIg9AAIAAAfIgRAAIAAgvIAIAAQAJgMAFgPQAFgRAAgPIAAgLIA4AAIAABGIAMAAIAAAvgAgTAMIAkAAIAAg2IgVAAQgBAjgOATg");
	this.shape_149.setTransform(88.2,18,0.651,0.651);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AASArIAAglIgjAAIAAAlIgVAAIAAhWIAVAAIAAAiIAjAAIAAgiIAVAAIAABWg");
	this.shape_150.setTransform(81.6,17,0.651,0.651);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgeAiQgMgMABgVQgBgUANgMQANgNARAAQASAAAMALQAMALAAASIgCAKIg9AAQABALAGAGQAGAFALAAQAOAAAHgHIAIAQQgLAIgWAAQgSAAgMgLgAgUgIIAqAAQgCgTgTAAQgQAAgFATg");
	this.shape_151.setTransform(75.2,17,0.651,0.651);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgnA+IAAh5IAUAAIAAAGQAIgIALAAQApAAAAAuQAAAVgMALQgLAMgUAAQgKAAgHgEIAAAlgAgTgmIAAAtQAFAFAIAAQANAAAGgHQAHgFgBgPQAAgPgFgHQgHgGgNAAQgHAAgGAFg");
	this.shape_152.setTransform(69.1,18,0.651,0.651);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgJArIAAhFIgZAAIAAgRIBFAAIAAARIgZAAIAABFg");
	this.shape_153.setTransform(63.1,17,0.651,0.651);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgDAtIgYgvIgBAAIgHAuIgUAAIARhYIAIAAIAeA9IAgg9IAHAAIAQBYIgUAAIgHgpIgBgFIgBAAIgCAHIgVAog");
	this.shape_154.setTransform(53.3,17,0.651,0.651);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgeAiQgMgLAAgWQABgUAMgMQANgNAQAAQAUAAALALQALAMAAARIgBAKIg9AAQAAAKAHAHQAFAFAMAAQAOAAAGgHIAJAQQgLAIgWAAQgSAAgMgLgAgUgIIAqAAQgCgTgTAAQgQAAgFATg");
	this.shape_155.setTransform(46.2,17,0.651,0.651);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AATAqQgDgDgCgEQgCAEgHAEQgIACgGAAQgPAAgHgHQgIgGAAgOQAAgOALgIQAMgJAUAAIAIABQAAgPgSAAQgLAAgIAEIgFgQQALgFAOAAQAUAAAJAJQAJAJAAAZIAAASQAAASAHAEQgDAEgCABIgIABQgEAAgEgDgAgSARQAAAMANAAQASAAAAgSIAAgIIgIgBQgXAAAAAPg");
	this.shape_156.setTransform(40.2,17,0.651,0.651);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AAfA7IAAgfIg8AAIAAAfIgSAAIAAgvIAJAAQAIgMAFgPQAFgPAAgRIAAgLIA4AAIAABGIAMAAIAAAvgAgTAMIAkAAIAAg2IgUAAQgCAigOAUg");
	this.shape_157.setTransform(33.8,18,0.651,0.651);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AAUAqQgDgCgCgFQgDAFgHADQgIACgFAAQgPAAgIgHQgIgHAAgNQAAgNALgJQAMgJAUAAIAJABQAAgPgTAAQgKAAgJAEIgFgQQALgFAOAAQAUAAAJAJQAJAJAAAZIAAASQAAASAHAEQgDAFgCAAIgIABQgEAAgDgDgAgSARQAAAMANAAQASAAAAgSIAAgIIgIgBQgXAAAAAPg");
	this.shape_158.setTransform(27.6,17,0.651,0.651);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AgoA1IAJgTQAOAKAOAAQAKAAAGgFQAGgFAAgJQAAgKgHgGQgIgGgLAAIgMABIAAgQIAMAAQAKAAAGgEQAGgFAAgIQAAgGgFgEQgGgEgHAAQgLAAgNAIIgIgSQASgIAQAAQAQAAALAIQAKAJAAAOQAAAJgEAHQgFAHgHADQALAEAEAGQAGAHAAAMQAAARgMAKQgMAKgVAAQgVAAgPgJg");
	this.shape_159.setTransform(21.5,15.9,0.651,0.651);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AilFpIDArRICLAAIi/LRg");
	this.shape_160.setTransform(132.7,2.6,0.643,0.644);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#CB0927").s().p("AjFFdIC7q5IDQAAIi7K5g");
	this.shape_161.setTransform(128.3,43.2,0.643,0.644);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#D1D1D1").s().p("AkkIuIBwmjIDRAAIC7q5IBNAAIkqRcg");
	this.shape_162.setTransform(127.2,56.6,0.643,0.644);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#DC052B").s().p("Ax7IuIABxbMAj2AAAIksRbg");
	this.shape_163.setTransform(74.5,29.7,0.643,0.644);

	this.instance_7 = new lib.dfd("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(74.5,36.1,0.792,0.792,0,0,0,0.1,0.1);
	this.instance_7._off = true;

	this.instance_8 = new lib.sdf("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(74.5,36.1,0.792,0.792,0,0,0,0.1,0.1);
	this.instance_8.alpha = 0;

	var maskedShapeInstanceList = [this.shape_127,this.shape_128,this.shape_129,this.shape_130,this.shape_131,this.shape_132,this.shape_133,this.shape_134,this.shape_135,this.shape_136,this.shape_137,this.shape_138,this.shape_139,this.shape_140,this.shape_141,this.shape_142,this.shape_143,this.shape_144,this.shape_145,this.shape_146,this.shape_147,this.shape_148,this.shape_149,this.shape_150,this.shape_151,this.shape_152,this.shape_153,this.shape_154,this.shape_155,this.shape_156,this.shape_157,this.shape_158,this.shape_159,this.shape_160,this.shape_161,this.shape_162,this.shape_163,this.instance_7,this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127}]},211).to({state:[{t:this.instance_7}]},75).to({state:[{t:this.instance_8}]},8).to({state:[]},4).wait(62));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(286).to({_off:false},0).to({_off:true,alpha:0},8).wait(66));

	// bg
	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.lf(["#DBDBDB","#E9E9E9","#8A8A8A"],[0,0.514,0.984],122.1,-313.5,-51,131.1).s().p("Aq6cMMAOZg4XIHcAAMgOaA4Xg");
	this.shape_164.setTransform(345.1,38.3,0.309,0.249,-2.7,0,0,-0.1,0);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.lf(["#DBDBDB","#E9E9E9","#8A8A8A"],[0,0.514,0.984],122.1,-313.5,-51,131.1).s().p("Aq6cMMAOZg4XIHcAAMgOaA4Xg");
	this.shape_165.setTransform(12.2,43.5,0.471,0.289,-6.8,0,0,-0.5,0.3);

	this.instance_9 = new lib.bg2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-12,1,0.867,0.161);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.shape_165},{t:this.shape_164}]}).wait(360));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(220,17.6,482.5,111.6);
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