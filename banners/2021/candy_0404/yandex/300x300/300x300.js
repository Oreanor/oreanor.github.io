(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x300_atlas_", frames: [[137,0,135,300],[0,0,135,300],[274,0,135,300],[0,302,176,159],[178,302,69,23]]}
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



(lib._1 = function() {
	this.spriteSheet = ss["300x300_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["300x300_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["300x300_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["300x300_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["300x300_atlas_"];
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


(lib.t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AANAsIAAgiIAAAAIgXAiIgTAAIAZggQgLgCgHgHQgGgFAAgMQAAgOAIgIQAJgHAPAAIAaAAIAABXgAgHgYQgFADAAAHQAAAGAFAEQAEADAHAAIAJAAIAAgaIgJAAQgIAAgDADg");
	this.shape.setTransform(15.3,25.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAfAsIAAhBIgYBBIgNAAIgYhBIAABBIgQAAIAAhXIAWAAIAYBDIAZhDIAWAAIAABXg");
	this.shape_1.setTransform(6.3,25.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXAsIAAhXIAvAAIAAAQIgfAAIAAAUIAdAAIAAAPIgdAAIAAAVIAfAAIAAAPg");
	this.shape_2.setTransform(-2.2,25.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgbAsIAAhXIAZAAQAOAAAIAHQAIAIAAAMQAAANgIAGQgHAIgPAAIgJAAIAAAhgAgLgEIAKAAQAFAAAEgDQADgCABgHQAAgFgEgDQgDgDgGAAIgKAAg");
	this.shape_3.setTransform(-8.5,25.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgcAsIAAhXIAWAAQAOAAAIAGQAHAHAAAKQAAAHgCADQgCAEgFADQAHADAEAEQAEAHAAAGQAAAOgJAGQgIAHgSAAgAgLAdIAKAAQAGAAAEgDQADgDAAgGQAAgFgDgDQgEgDgGAAIgKAAgAgLgJIAHAAQAFAAADgDQADgCAAgEQAAgFgDgCQgDgCgFAAIgHAAg");
	this.shape_4.setTransform(-15.4,25.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdAsIAAhXIARAAIAAAiIANAAQANAAAIAHQAHAHABAMQAAAMgIAIQgJAHgMAAgAgMAdIANAAQAFAAAEgDQADgDAAgGQAAgGgDgCQgEgDgFAAIgNAAg");
	this.shape_5.setTransform(39.6,9.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgHAsIAAhHIgRAAIAAgQIAxAAIAAAQIgRAAIAABHg");
	this.shape_6.setTransform(33.3,9.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAUAsIAAg9IgnA9IgQAAIAAhXIAQAAIAAA9IAng9IAQAAIAABXg");
	this.shape_7.setTransform(26.3,9.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAeAsIAAhBIgXBBIgNAAIgYhBIAABBIgQAAIAAhXIAWAAIAYBDIAZhDIAWAAIAABXg");
	this.shape_8.setTransform(16.4,9.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AggAhQgOgOAAgTQAAgSAOgOQANgNATAAQAUAAANANQAOAOAAASQAAATgOAOQgNANgUAAQgTAAgNgNgAgVgVQgIAJgBAMQABAMAIAJQAJAJAMAAQANAAAJgJQAJgJAAgMQAAgMgJgJQgJgIgNAAQgMAAgJAIg");
	this.shape_9.setTransform(5.8,9.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAQAsIAAglIgfAAIAAAlIgRAAIAAhXIARAAIAAAjIAfAAIAAgjIARAAIAABXg");
	this.shape_10.setTransform(-3.3,9.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AghAhQgNgOAAgTQAAgSANgOQAOgNATAAQAUAAANANQAOAOAAASQAAATgOAOQgNANgUAAQgSAAgPgNgAgVgVQgJAJAAAMQAAAMAJAJQAJAJAMAAQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgIgNAAQgMAAgJAIg");
	this.shape_11.setTransform(-12.4,9.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAMAsIgagmIAAAmIgRAAIAAhXIARAAIAAAmIAagmIAUAAIggArIAgAsg");
	this.shape_12.setTransform(-20.2,9.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgaAnQgKgHgGgMIATAAQAEAFAGADQAGACAHAAQAKAAAHgGQAJgHABgKIgnAAIAAgOIAnAAQgCgLgIgGQgIgFgJAAQgHAAgHACQgGAEgEAFIgTAAQAGgNALgHQALgHAOAAQASAAANANQANANABATQgBAUgNANQgMANgTAAQgOAAgLgHg");
	this.shape_13.setTransform(-28.9,9.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgeAhQgNgNAAgUQAAgSANgOQAOgNASAAQAOAAALAHQALAHAGANIgTAAQgEgGgGgDQgGgCgGAAQgMAAgJAJQgJAJAAALQAAAMAJAJQAJAJAMAAQAFAAAGgCQAGgDAEgFIATAAQgGAMgKAHQgLAHgOAAQgSAAgOgNg");
	this.shape_14.setTransform(-38.1,9.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgdAsIAAhXIAzAAIAAAQIgjAAIAAASIAOAAQAOAAAIAIQAHAHAAALQAAAMgIAIQgIAHgNAAgAgNAdIAOAAQAGAAADgDQADgDAAgGQAAgFgCgDQgFgDgFAAIgOAAg");
	this.shape_15.setTransform(23.7,-6.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AghAhQgNgOAAgTQAAgSANgOQAOgNATAAQAUAAANANQAOAOAAASQAAATgOAOQgNANgUAAQgSAAgPgNgAgVgVQgJAJAAAMQAAAMAJAJQAJAJAMAAQANAAAIgJQAJgJAAgMQAAgMgJgJQgIgIgNAAQgMAAgJAIg");
	this.shape_16.setTransform(14.9,-6.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgdAhQgOgOAAgTQAAgSAOgOQANgNATAAQANAAALAHQAMAHAFANIgTAAQgFgGgFgDQgGgCgGAAQgMAAgJAJQgIAJAAALQAAAMAJAJQAIAJAMAAQAFAAAHgCQAGgEADgEIATAAQgFAMgLAHQgLAHgNAAQgTAAgNgNg");
	this.shape_17.setTransform(5.2,-6.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AggAhQgOgOAAgTQAAgSAOgOQANgNATAAQAUAAANANQAOAOAAASQAAATgOAOQgNANgUAAQgTAAgNgNgAgVgVQgIAJAAAMQAAANAIAIQAJAJAMAAQANAAAJgJQAIgJAAgMQAAgLgIgKQgKgIgMAAQgLAAgKAIg");
	this.shape_18.setTransform(-4.6,-6.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAQAsIAAhHIgfAAIAABHIgRAAIAAhXIBBAAIAABXg");
	this.shape_19.setTransform(-13.7,-6.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgdAhQgOgOAAgTQAAgSAOgOQANgNATAAQANAAALAHQAMAHAFANIgTAAQgFgGgFgDQgGgCgGAAQgMAAgJAJQgIAJAAALQAAAMAIAJQAJAJAMAAQAFAAAHgCQAGgEADgEIATAAQgFAMgLAHQgLAHgOAAQgSAAgNgNg");
	this.shape_20.setTransform(-22.4,-6.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAUA3IAAg9IgnA9IgQAAIAAhYIAQAAIAAA+IAng+IAQAAIAABYgAgOgqQgGgFgBgHIAOAAQAAAAAAABQABAAAAABQAAABAAAAQABABAAAAQACACADAAQADAAACgCIADgEIANAAQAAAHgHAFQgFAFgJAAQgIAAgGgFg");
	this.shape_21.setTransform(28.8,-24);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAaAsIAAhXIAQAAIAABXgAgpAsIAAhXIAQAAIAAAiIANAAQANAAAIAHQAIAHAAAMQAAAMgIAIQgIAHgNAAgAgZAdIAOAAQAFAAAEgDQACgDAAgGQAAgFgCgDQgEgDgFAAIgOAAg");
	this.shape_22.setTransform(19.3,-22.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AARAsIAAglIggAAIAAAlIgRAAIAAhXIARAAIAAAjIAgAAIAAgjIAQAAIAABXg");
	this.shape_23.setTransform(10.2,-22.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAOAsIAAghIgOAAQgKAAgDgBQgGgCgDgDQgEgDgCgEQgCgEAAgJIAAgcIARAAIAAAhIADADIAEACIAUABIAAgnIAQAAIAABXg");
	this.shape_24.setTransform(2.2,-22.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAUAsIAAg9IgnA9IgQAAIAAhXIAQAAIAAA9IAng9IAQAAIAABXg");
	this.shape_25.setTransform(-5.8,-22.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAYAsIgYhBIgXBBIgSAAIAjhXIANAAIAjBXg");
	this.shape_26.setTransform(-14.6,-22.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgHAsIAAhHIgRAAIAAgQIAxAAIAAAQIgRAAIAABHg");
	this.shape_27.setTransform(-21,-22.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AggAhQgOgOAAgTQAAgSAOgOQANgNATAAQAUAAANANQAOAOAAASQAAATgOAOQgNANgUAAQgTAAgNgNgAgVgVQgIAKAAALQAAAMAIAJQAJAJAMAAQANAAAJgJQAIgIAAgNQAAgMgIgJQgKgIgMAAQgLAAgKAIg");
	this.shape_28.setTransform(-28.2,-22.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4, new cjs.Rectangle(-42.4,-29.5,85,59), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXAsIAAhYIAvAAIAAAQIgfAAIAAAVIAeAAIAAAPIgeAAIAAAUIAfAAIAAAQg");
	this.shape.setTransform(37.3,32);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAUAsIAAg9IgnA9IgQAAIAAhYIAQAAIAAA+IAng+IAQAAIAABYg");
	this.shape_1.setTransform(29.6,32);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAQAsIAAglIggAAIAAAlIgQAAIAAhYIAQAAIAAAkIAgAAIAAgkIAQAAIAABYg");
	this.shape_2.setTransform(21.1,32);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXAsIAAhYIAvAAIAAAQIgeAAIAAAVIAcAAIAAAPIgcAAIAAAUIAeAAIAAAQg");
	this.shape_3.setTransform(14,32);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAiAsIgagmIAAAmIgPAAIAAgmIgaAmIgUAAIAggsIgfgsIATAAIAaAnIAAgnIAPAAIAAAnIAagnIATAAIgfArIAgAtg");
	this.shape_4.setTransform(5.1,32);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghAhQgNgNAAgUQAAgSANgOQAOgNATAAQAUAAANANQAOAOAAASQAAAUgOANQgNANgUAAQgSAAgPgNgAgVgUQgJAJAAALQAAANAJAJQAJAIAMAAQANAAAIgJQAJgIAAgNQAAgLgJgJQgIgJgNAAQgMAAgJAJg");
	this.shape_5.setTransform(-5.5,32);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAYAsIgYhAIgXBAIgSAAIAjhYIANAAIAjBYg");
	this.shape_6.setTransform(-14.5,32);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAUAsIAAg9IgnA9IgQAAIAAhYIAQAAIAAA+IAng+IAQAAIAABYg");
	this.shape_7.setTransform(-23.3,32);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbAsIAAhYIAZAAQAOAAAIAIQAIAHAAANQAAANgIAGQgHAIgPAAIgJAAIAAAhgAgLgEIAKAAQAGAAADgDQADgCABgHQAAgFgEgEQgDgDgGAAIgKAAg");
	this.shape_8.setTransform(-30.8,32);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAQAsIAAhIIgfAAIAABIIgRAAIAAhYIBBAAIAABYg");
	this.shape_9.setTransform(-38.5,32);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgHAsIAAhIIgRAAIAAgPIAxAAIAAAPIgRAAIAABIg");
	this.shape_10.setTransform(27.4,16);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgXAsIAAhXIAvAAIAAAPIgfAAIAAAVIAeAAIAAAPIgeAAIAAAVIAfAAIAAAPg");
	this.shape_11.setTransform(21.8,16);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgbAsIAAhXIAZAAQAOgBAIAIQAIAHAAAOQAAAMgIAGQgIAIgOAAIgJAAIAAAhgAgLgEIAKAAQAGAAADgDQAEgDAAgFQAAgHgEgCQgDgEgGAAIgKAAg");
	this.shape_12.setTransform(15.5,16);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgXAsIAAhXIAvAAIAAAPIgeAAIAAAVIAdAAIAAAPIgdAAIAAAVIAeAAIAAAPg");
	this.shape_13.setTransform(8.8,16);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgdAsIAAhXIAzAAIAAAPIgiAAIAAATIAMAAQAQAAAHAIQAHAHAAALQAAAMgIAIQgIAIgOgBgAgMAdIANAAQAFAAAEgEQAEgDAAgFQgBgEgDgEQgDgDgGAAIgNAAg");
	this.shape_14.setTransform(2.3,16);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAgA1IAAgRIg/AAIAAARIgRAAIAAghIAJAAIAhhIIAOAAIAgBIIAIAAIAAAhgAgVAUIArAAIgVgxg");
	this.shape_15.setTransform(-6.5,16.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AggAhQgOgNAAgUQAAgSAOgOQANgNATAAQAUAAANANQAOAOAAASQAAAUgOANQgNANgUAAQgTAAgNgNgAgVgUQgIAIAAAMQAAANAIAJQAKAIALAAQANAAAJgJQAIgIAAgNQAAgLgIgJQgJgJgNAAQgMAAgJAJg");
	this.shape_16.setTransform(-16.4,16);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAQAsIAAhIIgfAAIAABIIgRAAIAAhXIBBAAIAABXg");
	this.shape_17.setTransform(-25.6,16);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgQAtIAKgXIgihBIAUAAIAWAuIAVguIASAAIgoBYg");
	this.shape_18.setTransform(54.3,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAeAtIAAhCIgXBCIgNAAIgYhCIAABCIgQAAIAAhYIAWAAIAYBCIAYhCIAXAAIAABYg");
	this.shape_19.setTransform(44.6,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAeAtIAAhCIgXBCIgNAAIgYhCIAABCIgQAAIAAhYIAWAAIAYBCIAZhCIAWAAIAABYg");
	this.shape_20.setTransform(33.6,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAZAtIgJgYIggAAIgJAYIgSAAIAmhYIALAAIAlBYgAgKAFIAUAAIgKgZg");
	this.shape_21.setTransform(23.6,0);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgbAtIAAhYIAYAAQAPAAAIAHQAIAIAAANQAAALgIAHQgIAIgPAAIgIAAIAAAigAgLgEIAKAAQAGAAADgDQAEgEAAgEQAAgHgEgCQgDgDgGAAIgKAAg");
	this.shape_22.setTransform(17.1,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgVAtIAAhYIArAAIAAAQIgbAAIAABIg");
	this.shape_23.setTransform(11.2,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AggAhQgOgNAAgUQAAgSAOgOQANgNATAAQAUAAANANQAOAOAAASQAAAUgOANQgOANgTAAQgTAAgNgNgAgVgUQgJAJAAALQAAANAJAJQAJAIAMAAQANAAAJgJQAJgIAAgNQAAgLgJgJQgJgJgNAAQgMAAgJAJg");
	this.shape_24.setTransform(3.1,0);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgbAtIAAhYIAZAAQAOAAAIAHQAIAIAAANQAAALgIAHQgIAIgOAAIgJAAIAAAigAgLgEIAKAAQAGAAADgDQAEgDAAgFQAAgHgEgCQgDgDgGAAIgKAAg");
	this.shape_25.setTransform(-5,0);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAQAtIAAhIIgfAAIAABIIgQAAIAAhYIA/AAIAABYg");
	this.shape_26.setTransform(-12.7,0);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgHAIQADAAACgCQACgCAAgCIAAgCIgHAAIAAgPIAPAAIAAAPQAAAFgCACQAAACgCADIgFADIgGACg");
	this.shape_27.setTransform(-21.3,4.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgXAtIAAhYIAvAAIAAAQIgeAAIAAAUIAcAAIAAAPIgcAAIAAAVIAeAAIAAAQg");
	this.shape_28.setTransform(-26,0);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgdAtIAAhYIARAAIAAAiIAMAAQAOAAAIAHQAIAHAAAMQAAANgJAHQgIAIgNAAgAgMAdIAMAAQAGAAADgDQAEgEAAgFQAAgFgEgDQgDgDgGAAIgMAAg");
	this.shape_29.setTransform(-32.4,0);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAYAtIgYhCIgXBCIgSAAIAjhYIANAAIAjBYg");
	this.shape_30.setTransform(-40.5,0);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgXAtIAAhYIAvAAIAAAQIgeAAIAAAUIAcAAIAAAPIgcAAIAAAVIAeAAIAAAQg");
	this.shape_31.setTransform(-47.9,0);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgdAtIAAhYIAyAAIAAAQIghAAIAAASIAMAAQAQAAAHAIQAHAHAAALQAAANgJAHQgHAIgOAAgAgMAdIAMAAQAGAAAEgDQAEgEAAgFQAAgFgEgDQgDgDgHAAIgMAAg");
	this.shape_32.setTransform(-54.4,0);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgXAtIAAhZIAvAAIAAARIgfAAIAAAUIAdAAIAAAPIgdAAIAAAUIAfAAIAAARg");
	this.shape_33.setTransform(56.2,-16);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgHAtIAAhIIgRAAIAAgRIAxAAIAAARIgRAAIAABIg");
	this.shape_34.setTransform(50.5,-16);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAUA3IAAg9IgnA9IgQAAIAAhYIAQAAIAAA+IAng+IAQAAIAABYgAgOgqQgFgEgCgIIAOAAQAAADADABQACACACAAQADAAACgCQADgBAAgDIAOAAQgCAIgFAEQgGAFgJAAQgIAAgGgFg");
	this.shape_35.setTransform(43.5,-17.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgQAtIAKgXIgihCIAUAAIAWAvIAVgvIASAAIgoBZg");
	this.shape_36.setTransform(34.9,-16);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgbAtIAAhZIAYAAQAPABAIAHQAIAIAAAMQAAAMgIAHQgIAIgPAAIgIAAIAAAigAgLgEIAKAAQAGAAADgDQAEgEAAgFQAAgFgEgEQgDgCgGAAIgKAAg");
	this.shape_37.setTransform(27.6,-16);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAUAtIAAg+IgnA+IgQAAIAAhZIAQAAIAAA+IAng+IAQAAIAABZg");
	this.shape_38.setTransform(19.5,-16);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgHAyIAAgMQgRAAgMgLQgLgLAAgQQAAgQALgLQALgKASgBIAAgLIAPAAIAAALQASABALAKQALALAAAQQAAAQgLALQgMALgRAAIAAAMgAAIAWQALAAAGgHQAHgGAAgJQAAgJgHgHQgGgGgLAAgAgYgQQgHAHAAAJQAAAIAHAHQAGAHALAAIAAgsQgLAAgGAGg");
	this.shape_39.setTransform(9.9,-16.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAZAtIgJgYIgfAAIgJAYIgTAAIAlhZIANAAIAlBZgAgJAGIATAAIgKgZg");
	this.shape_40.setTransform(0.7,-16);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgcAtIAAhZIAZAAQAPABAIAHQAJAIAAAMQgBAMgHAHQgJAIgPAAIgIAAIAAAigAgLgEIAKAAQAFAAAEgDQAEgDAAgGQAAgFgEgEQgDgCgGAAIgKAAg");
	this.shape_41.setTransform(-5.8,-16);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgVAtIAAhZIArAAIAAARIgbAAIAABIg");
	this.shape_42.setTransform(-11.7,-16);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AggAhQgOgNAAgUQAAgSAOgOQANgNATAAQAUAAANANQAOAOAAASQAAAUgOANQgNANgUAAQgTAAgNgNgAgVgUQgIAJAAALQAAAMAIAKQAKAIALAAQANAAAJgJQAIgIAAgNQAAgMgIgIQgJgJgNAAQgMAAgJAJg");
	this.shape_43.setTransform(-19.8,-16);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgHAtIAAhIIgQAAIAAgRIAvAAIAAARIgQAAIAABIg");
	this.shape_44.setTransform(-27,-16);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AggAhQgOgNAAgUQAAgSAOgOQANgNATAAQAUAAANANQAOAOAAASQAAAUgOANQgNANgUAAQgTAAgNgNgAgVgUQgIAJAAALQAAAMAIAKQAKAIALAAQANAAAJgJQAIgIAAgNQAAgLgIgJQgJgJgNAAQgMAAgJAJg");
	this.shape_45.setTransform(-34.3,-16);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgHAyIAAgMQgRAAgLgLQgMgLAAgQQAAgQAMgLQAKgKASgBIAAgLIAQAAIAAALQARABALAKQALALAAAQQAAAQgLALQgMALgQAAIAAAMgAAJAWQAKAAAGgHQAHgHAAgIQAAgIgHgIQgGgGgKAAgAgYgQQgGAHgBAJQABAJAGAGQAGAHALAAIAAgsQgLAAgGAGg");
	this.shape_46.setTransform(-44.5,-16.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgdAhQgOgOAAgTQAAgSAOgOQANgNATAAQAOAAAKAHQAMAHAFANIgTAAQgEgFgGgDQgGgDgGAAQgMAAgJAJQgIAJAAALQAAAMAIAJQAJAJAMAAQAHAAAFgCQAGgDADgFIATAAQgFANgLAGQgKAHgPAAQgSAAgNgNg");
	this.shape_47.setTransform(-54.3,-16);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AggAhQgOgNAAgUQAAgSAOgOQANgNATAAQAUAAANANQAOAOAAASQAAAUgOANQgNANgUAAQgTAAgNgNgAgVgUQgIAJAAALQAAAMAIAKQAKAIALAAQANAAAJgJQAIgIAAgNQAAgLgIgJQgJgJgNAAQgMAAgJAJg");
	this.shape_48.setTransform(19.7,-32);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgHAsIAAhHIgRAAIAAgRIAxAAIAAARIgRAAIAABHg");
	this.shape_49.setTransform(12.4,-32);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgeAhQgNgOAAgTQAAgSANgOQAOgNATAAQAOAAAKAHQALAHAGANIgTAAQgEgFgGgDQgGgDgGAAQgMAAgJAJQgJAJAAALQABAMAIAJQAIAJANAAQAHAAAEgCQAGgCAEgGIATAAQgFANgLAGQgKAHgOAAQgTAAgOgNg");
	this.shape_50.setTransform(5.3,-32);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AggAhQgOgNAAgUQAAgSAOgOQANgNATAAQAUAAANANQAOAOAAASQAAAUgOANQgNANgUAAQgTAAgNgNgAgVgUQgIAJAAALQAAAMAIAKQAKAIALAAQANAAAJgJQAIgIAAgNQAAgLgIgJQgJgJgNAAQgMAAgJAJg");
	this.shape_51.setTransform(-4.5,-32);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgcAsIAAhYIAZAAQAPAAAIAIQAJAHAAANQgBAMgHAHQgJAIgPAAIgIAAIAAAhgAgLgEIAKAAQAGAAADgDQAEgDAAgGQAAgFgEgEQgDgDgGABIgKAAg");
	this.shape_52.setTransform(-12.6,-32);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAQAsIAAhHIgfAAIAABHIgRAAIAAhYIBBAAIAABYg");
	this.shape_53.setTransform(-20.4,-32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-58.6,-36.6,117.3,73.3), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAUAsIAAg9IgnA9IgQAAIAAhXIAQAAIAAA9IAng9IAQAAIAABXg");
	this.shape.setTransform(24.6,25.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAMAsIgbgnIAAAnIgQAAIAAhXIAQAAIAAAmIAbgmIAUAAIggArIAfAsg");
	this.shape_1.setTransform(16.7,25.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVAmQgJgHABgOIAQAAQAAAGAEADQAEAEAFAAQAGAAAEgDQAEgDAAgFQAAgFgEgEQgDgDgGAAIgHAAIAAgPIAGAAQAFAAADgDQADgDAAgEQAAgFgDgDQgDgDgFAAQgDAAgDADQgEACAAAEIgQAAQAAgKAHgIQAHgHAMAAQAMAAAIAHQAHAHAAALQAAAFgDAGQgEAGgGACQAIABAEAGQAEAGAAAIQgBANgIAGQgHAHgOAAQgNAAgIgIg");
	this.shape_2.setTransform(9.4,25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRAsIALgWIgihBIAUAAIAWAuIAVguIASAAIgpBXg");
	this.shape_3.setTransform(2.3,25.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbAsIAAhXIAYAAQAPgBAIAIQAIAHAAAOQAAALgIAHQgIAIgPAAIgIAAIAAAhgAgLgEIAKAAQAGAAADgDQAEgDAAgGQAAgFgEgDQgDgEgGAAIgKAAg");
	this.shape_4.setTransform(-5,25.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgVAsIAAhXIArAAIAAAPIgbAAIAABIg");
	this.shape_5.setTransform(-10.9,25.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAaAsIgJgWIggAAIgJAWIgSAAIAkhXIAMAAIAmBXgAgJAFIATAAIgKgZg");
	this.shape_6.setTransform(-18.4,25.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVAmQgJgHABgOIARAAQAAAGADADQAEAEAFAAQAHAAADgDQAEgDAAgFQAAgGgEgDQgDgDgGAAIgHAAIAAgPIAGAAQAFAAADgDQADgDAAgEQAAgFgDgDQgCgDgGAAQgDAAgDADQgDACgBAEIgQAAQAAgKAHgIQAHgHAMAAQAMAAAIAHQAHAHAAALQAAAGgDAFQgEAGgFACQAHABAEAGQAEAGAAAIQAAAMgIAHQgJAHgNAAQgNAAgIgIg");
	this.shape_7.setTransform(-26.1,25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAUA3IAAg9IgnA9IgQAAIAAhYIAQAAIAAA+IAng+IAQAAIAABYgAgOgqQgFgEgCgIIAOAAQAAADADABQABACADAAQADAAACgCQACgBABgDIAOAAQgCAHgFAFQgGAFgJAAQgIAAgGgFg");
	this.shape_8.setTransform(39.9,8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AggAhQgOgNAAgUQAAgSAOgOQANgNATAAQAUAAANANQAOAOAAASQAAAUgOANQgNANgUAAQgTAAgNgNgAgVgUQgJAIAAAMQAAANAJAIQAJAJAMAAQANAAAJgJQAJgJAAgMQAAgMgJgIQgJgJgNAAQgMAAgJAJg");
	this.shape_9.setTransform(30.5,9.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAQAtIAAgmIgfAAIAAAmIgRAAIAAhYIARAAIAAAkIAfAAIAAgkIARAAIAABYg");
	this.shape_10.setTransform(21.3,9.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgdAtIAAhYIAzAAIAAAPIgiAAIAAATIAMAAQAQAAAHAHQAHAIAAALQAAANgIAHQgIAIgOAAgAgMAdIANAAQAFAAAEgDQAEgDAAgGQgBgEgDgEQgDgDgGAAIgNAAg");
	this.shape_11.setTransform(13.9,9.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AghAhQgNgNAAgUQAAgSANgOQAOgNATAAQAUAAANANQAOAOAAASQAAAUgOANQgNANgUAAQgSAAgPgNgAgVgUQgJAIAAAMQAAANAJAIQAJAJAMAAQANAAAIgJQAJgJAAgMQAAgMgJgIQgIgJgNAAQgMAAgJAJg");
	this.shape_12.setTransform(5,9.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAgA1IAAgRIg/AAIAAARIgQAAIAAghIAIAAIAhhIIANAAIAhBIIAJAAIAAAhgAgVAUIArAAIgWgxg");
	this.shape_13.setTransform(-4.9,9.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgQAtIAKgXIgihBIAUAAIAWAuIAVguIASAAIgoBYg");
	this.shape_14.setTransform(-12.2,9.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AANAtIAAgjIgXAjIgTAAIAZgiQgKAAgIgIQgGgFAAgMQAAgOAIgHQAIgJAQABIAaAAIAABYgAgIgYQgEAEAAAGQAAAHAEACQAEAEAIAAIAJAAIAAgbIgJAAQgIAAgEAEg");
	this.shape_15.setTransform(-23,9.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAYAtIgYhCIgXBCIgSAAIAjhYIANAAIAjBYg");
	this.shape_16.setTransform(-30.8,9.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAgA1IAAgRIg/AAIAAARIgRAAIAAghIAJAAIAhhIIAOAAIAgBIIAIAAIAAAhgAgVAUIArAAIgWgxg");
	this.shape_17.setTransform(-40,9.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAMAtIgagnIAAAnIgRAAIAAhZIARAAIAAAnIAagnIAUAAIggAsIAgAtg");
	this.shape_18.setTransform(49.7,-6.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgPAjQgMgLgDgRIgOAAIAAAlIgQAAIAAhYIAQAAIAAAkIAPAAQADgQANgLQANgKAPAAQAUAAANANQANAOAAASQAAAUgNANQgNANgUAAQgRAAgNgLgAgFgUQgJAIAAAMQAAAMAJAJQAIAJAMAAQANAAAIgJQAJgIAAgNQAAgMgJgIQgIgJgNAAQgMAAgIAJg");
	this.shape_19.setTransform(39.2,-6.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAYAtIgYhBIgXBBIgSAAIAjhZIANAAIAjBZg");
	this.shape_20.setTransform(28,-6.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAUA3IAAg9IgnA9IgQAAIAAhYIAQAAIAAA+IAng+IAQAAIAABYgAgOgqQgGgFgBgHIAOAAQAAAAAAABQABABAAAAQAAABAAAAQABABAAAAQADACACAAQADAAACgCQACgCABgCIANAAQAAAHgHAFQgFAFgJAAQgJAAgFgFg");
	this.shape_21.setTransform(16.4,-8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAUAtIAAg+IgnA+IgQAAIAAhZIAQAAIAAA+IAng+IAQAAIAABZg");
	this.shape_22.setTransform(7.5,-6.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAMAtIgagnIAAAnIgRAAIAAhZIARAAIAAAnIAagnIAUAAIghAsIAhAtg");
	this.shape_23.setTransform(-0.3,-6.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AghAhQgNgNAAgUQAAgSANgOQAOgNATAAQAUAAANANQAOAOAAASQAAAUgOANQgNANgUAAQgSAAgPgNgAgVgUQgJAIAAAMQAAANAJAIQAJAJAMAAQANAAAIgJQAJgJAAgMQAAgMgJgIQgIgJgNAAQgMAAgJAJg");
	this.shape_24.setTransform(-9.4,-6.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgbAtIAAhZIAZAAQAOABAIAHQAIAIAAAMQAAAMgIAHQgHAIgPAAIgJAAIAAAigAgLgEIAKAAQAGAAADgDQAEgDAAgGQAAgGgEgDQgDgCgGAAIgKAAg");
	this.shape_25.setTransform(-17.5,-6.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAUAtIAAg+IgnA+IgQAAIAAhZIAQAAIAAA+IAng+IAQAAIAABZg");
	this.shape_26.setTransform(-25.6,-6.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgzAtIAAhZIARAAIAABIIAbAAIAAhIIAPAAIAABIIAcAAIAAhIIAQAAIAABZg");
	this.shape_27.setTransform(-36,-6.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAUAtIAAg+IgnA+IgQAAIAAhZIAQAAIAAA+IAng+IAQAAIAABZg");
	this.shape_28.setTransform(-49.3,-6.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAUA3IAAg9IgnA9IgQAAIAAhYIAQAAIAAA+IAng+IAQAAIAABYgAgOgqQgFgEgCgIIAOAAQAAADADABQABACADAAQADAAACgCQADgBAAgDIAOAAQgCAHgFAFQgGAFgJAAQgIAAgGgFg");
	this.shape_29.setTransform(26.1,-24);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAUAsIAAg9IgnA9IgQAAIAAhYIAQAAIAAA+IAng+IAQAAIAABYg");
	this.shape_30.setTransform(17.2,-22.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAMAsIgbgmIAAAmIgQAAIAAhYIAQAAIAAAnIAbgnIAUAAIghAsIAhAsg");
	this.shape_31.setTransform(9.4,-22.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AggAhQgOgNAAgUQAAgSAOgOQANgNATAAQAUAAANANQAOAOAAASQAAAUgOANQgNANgUAAQgTAAgNgNgAgVgUQgIAIAAAMQAAANAIAIQAJAJAMAAQANAAAJgJQAIgIAAgNQAAgMgIgIQgJgJgNAAQgMAAgJAJg");
	this.shape_32.setTransform(0.3,-22.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgeAhQgNgNAAgUQAAgTANgNQAOgNASAAQAOAAALAHQALAHAGANIgTAAQgEgFgGgDQgFgDgHAAQgMAAgJAJQgJAJAAALQAAAMAJAJQAJAJAMAAQAHAAAEgCQAGgCAEgGIATAAQgGANgKAGQgLAHgOAAQgSAAgOgNg");
	this.shape_33.setTransform(-9.3,-22.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAaAsIAAhYIAQAAIAABYgAgpAsIAAhYIAQAAIAAAjIANAAQANAAAIAHQAIAHAAAMQAAANgIAHQgIAHgNAAgAgZAcIAOAAQAFAAAEgDQACgCAAgGQAAgFgCgDQgEgDgFAAIgOAAg");
	this.shape_34.setTransform(-19.1,-22.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgcAsIAAhYIAWAAQAOAAAIAHQAHAGAAALQAAAGgCAFQgEAEgDACQAHACAEAFQAEAGAAAHQAAANgJAHQgKAIgQgBgAgLAcIAKAAQAGAAAEgDQADgDAAgFQAAgFgDgDQgEgDgGAAIgKAAgAgLgJIAHAAQAEAAAEgCQADgEAAgEQAAgDgDgDQgEgCgEgBIgHAAg");
	this.shape_35.setTransform(-27.4,-22.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-52.9,-29.5,105.8,59.2), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAsIAAhIIgRAAIAAgPIAxAAIAAAPIgRAAIAABIg");
	this.shape.setTransform(45.1,22.8,0.95,0.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQAsIAKgWIgihBIAUAAIAXAuIAUguIASAAIgoBXg");
	this.shape_1.setTransform(38.7,22.8,0.95,0.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAQAsIAAglIgfAAIAAAlIgRAAIAAhXIARAAIAAAjIAfAAIAAgjIARAAIAABXg");
	this.shape_2.setTransform(30.9,22.8,0.95,0.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAUAsIAAg9IgnA9IgQAAIAAhXIAQAAIAAA9IAng9IAQAAIAABXg");
	this.shape_3.setTransform(22.8,22.8,0.95,0.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAfAsIAAhBIgYBBIgNAAIgYhBIAABBIgQAAIAAhXIAWAAIAYBCIAYhCIAXAAIAABXg");
	this.shape_4.setTransform(13.3,22.8,0.95,0.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTAtIATgeIgBAAIgDAAQgKAAgIgIQgIgHAAgNQAAgNAJgJQAIgJANAAQANAAAJAJQAJAJAAANQAAAGgCAFIgGAMIgXAjgAgKgZQgEAFAAAHQAAAHAFAEQADADAGAAQAHAAAEgDQAEgFAAgGQAAgHgEgFQgEgEgHAAQgGAAgEAEg");
	this.shape_5.setTransform(2.2,22.7,0.95,0.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUAmQgIgJgCgMIAQAAQABAGAFAEQAEADAEAAQAHAAAEgEQADgEAAgIQAAgHgDgEQgEgEgHAAQgCAAgEACQgEACgBACIgOgEIAIgtIAoAAIgBAOIgbAAIgDARIAFgCIAFAAQANgBAHAKQAJAHgBANQAAANgIAKQgJAIgNABQgMgBgIgHg");
	this.shape_6.setTransform(-4.3,22.9,0.95,0.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXAsIAAhXIAvAAIAAAPIgeAAIAAAVIAdAAIAAAPIgdAAIAAAVIAeAAIAAAPg");
	this.shape_7.setTransform(-12.9,22.8,0.95,0.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXAsIAAhXIAvAAIAAAPIgfAAIAAAVIAeAAIAAAPIgeAAIAAAVIAfAAIAAAPg");
	this.shape_8.setTransform(-18.8,22.8,0.95,0.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAQAsIAAglIgfAAIAAAlIgRAAIAAhXIARAAIAAAjIAfAAIAAgjIARAAIAABXg");
	this.shape_9.setTransform(-25.7,22.8,0.95,0.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgXAsIAAhXIAvAAIAAAPIgeAAIAAAVIAdAAIAAAPIgdAAIAAAVIAeAAIAAAPg");
	this.shape_10.setTransform(-32.5,22.8,0.95,0.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAfAsIAAhBIgYBBIgNAAIgXhBIAABBIgRAAIAAhXIAWAAIAYBCIAZhCIAWAAIAABXg");
	this.shape_11.setTransform(-40.8,22.8,0.95,0.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgPAjQgNgMgCgQIgOAAIAAAlIgQAAIAAhYIAQAAIAAAkIAPAAQADgQANgLQANgKAPAAQATAAAOANQANAOAAASQAAATgNAOQgOANgTAAQgRAAgNgLgAgFgUQgJAIAAAMQAAAMAJAJQAIAJAMAAQAMAAAJgJQAJgJAAgMQAAgMgJgIQgJgJgMAAQgMAAgIAJg");
	this.shape_12.setTransform(67.6,7.6,0.95,0.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgcAtIAAhYIAQAAIAAAiIAMAAQAPAAAGAHQAIAHAAAMQABANgJAHQgIAIgNAAgAgMAcIAMAAQAGAAADgCQAEgEAAgFQAAgFgEgDQgDgEgGAAIgMAAg");
	this.shape_13.setTransform(57.9,7.6,0.95,0.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgIAtIAAhIIgQAAIAAgQIAxAAIAAAQIgRAAIAABIg");
	this.shape_14.setTransform(51.9,7.6,0.95,0.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgeAhQgNgOAAgTQAAgSANgOQAOgNATAAQANAAAMAHQAKAHAGANIgTAAQgEgFgGgDQgFgDgHAAQgMAAgJAJQgJAJABALQAAAMAJAJQAIAJAMAAQAGAAAFgCQAHgCADgGIATAAQgFALgLAIQgLAHgNAAQgTAAgOgNg");
	this.shape_15.setTransform(45.2,7.6,0.95,0.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AggAhQgOgOAAgTQAAgSAOgOQANgNATAAQAUAAANANQAOAOAAASQAAATgOAOQgNANgUAAQgTAAgNgNgAgVgUQgIAIAAAMQAAAMAIAJQAJAJAMAAQANAAAJgJQAIgJAAgMQAAgMgIgIQgJgJgNAAQgMAAgJAJg");
	this.shape_16.setTransform(35.9,7.6,0.95,0.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAQAtIAAgmIgfAAIAAAmIgRAAIAAhYIARAAIAAAjIAfAAIAAgjIAQAAIAABYg");
	this.shape_17.setTransform(27.2,7.6,0.95,0.95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgdAtIAAhYIARAAIAAAiIANAAQAOAAAHAHQAIAGAAANQAAANgIAHQgJAIgMAAgAgMAcIANAAQAFAAAEgCQADgEAAgFQAAgGgDgCQgEgEgFAAIgNAAg");
	this.shape_18.setTransform(20.3,7.6,0.95,0.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAYAtIgYhCIgXBCIgSAAIAjhYIANAAIAjBYg");
	this.shape_19.setTransform(12.6,7.6,0.95,0.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgXAtIAAhYIAvAAIAAAQIgeAAIAAAUIAcAAIAAAPIgcAAIAAAUIAeAAIAAARg");
	this.shape_20.setTransform(5.6,7.6,0.95,0.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgHAtIAAhIIgQAAIAAgQIAvAAIAAAQIgQAAIAABIg");
	this.shape_21.setTransform(0.2,7.6,0.95,0.95);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAUAtIAAg+IgnA+IgQAAIAAhYIAQAAIAAA9IAng9IAQAAIAABYg");
	this.shape_22.setTransform(-6.5,7.6,0.95,0.95);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAiAtIgagoIAAAoIgPAAIAAgoIgaAoIgUAAIAggtIgfgrIATAAIAaAmIAAgmIAPAAIAAAmIAagmIATAAIgfArIAgAtg");
	this.shape_23.setTransform(-16,7.6,0.95,0.95);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAYAtIgYhCIgXBCIgSAAIAjhYIANAAIAjBYg");
	this.shape_24.setTransform(-25.5,7.6,0.95,0.95);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AggAhQgOgOAAgTQAAgSAOgOQANgNATAAQAUAAANANQAOAOAAASQAAATgOAOQgNANgUAAQgTAAgNgNgAgVgUQgIAIAAAMQAAAMAIAJQAJAJAMAAQANAAAJgJQAIgIAAgNQAAgMgIgIQgJgJgNAAQgMAAgJAJg");
	this.shape_25.setTransform(-34.4,7.6,0.95,0.95);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAgA1IAAgRIg/AAIAAARIgRAAIAAghIAJAAIAhhIIANAAIAhBIIAJAAIAAAhgAgVAUIArAAIgVgxg");
	this.shape_26.setTransform(-43.9,8.4,0.95,0.95);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AggAhQgOgOAAgTQAAgSAOgOQANgNATAAQAUAAANANQAOAOAAASQAAATgOAOQgNANgUAAQgTAAgNgNgAgVgUQgIAIAAAMQAAANAIAIQAJAJAMAAQANAAAIgJQAJgJAAgMQAAgMgJgIQgIgJgNAAQgMAAgJAJg");
	this.shape_27.setTransform(-53.3,7.6,0.95,0.95);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgbAtIAAhYIAZAAQAOAAAIAHQAIAIAAAMQAAAMgIAHQgHAHgPAAIgJAAIAAAjgAgLgEIAKAAQAGAAADgDQADgCABgHQAAgGgEgDQgDgCgGAAIgKAAg");
	this.shape_28.setTransform(-61,7.6,0.95,0.95);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AARAtIAAhIIggAAIAABIIgRAAIAAhYIBAAAIAABYg");
	this.shape_29.setTransform(-68.4,7.6,0.95,0.95);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAeAsIAAhBIgXBBIgNAAIgYhBIAABBIgQAAIAAhYIAWAAIAYBEIAYhEIAXAAIAABYg");
	this.shape_30.setTransform(27.3,-7.6,0.95,0.95);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAeAsIAAhBIgXBBIgNAAIgXhBIAABBIgRAAIAAhYIAWAAIAYBEIAZhEIAWAAIAABYg");
	this.shape_31.setTransform(16.8,-7.6,0.95,0.95);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAZAsIgJgXIgfAAIgJAXIgSAAIAlhYIALAAIAlBYgAgJAGIATAAIgKgZg");
	this.shape_32.setTransform(7.3,-7.6,0.95,0.95);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgbAsIAAhYIAYAAQAPABAIAHQAIAHAAANQAAAMgIAHQgIAHgPAAIgIAAIAAAigAgLgEIAKAAQAGAAADgDQAEgEAAgFQAAgGgEgDQgDgCgGAAIgKAAg");
	this.shape_33.setTransform(1.1,-7.6,0.95,0.95);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgVAsIAAhYIArAAIAAARIgbAAIAABHg");
	this.shape_34.setTransform(-4.5,-7.6,0.95,0.95);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AggAhQgOgOAAgTQAAgSAOgOQANgNATAAQAUAAANANQAOAOAAASQAAATgOAOQgNANgUAAQgTAAgNgNgAgVgUQgIAIgBAMQABAMAIAJQAJAJAMAAQANAAAIgJQAKgJgBgMQABgMgKgIQgIgJgNAAQgMAAgJAJg");
	this.shape_35.setTransform(-12.1,-7.6,0.95,0.95);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgbAsIAAhYIAZAAQAOABAIAHQAIAHAAANQAAAMgIAHQgIAHgOAAIgJAAIAAAigAgLgEIAKAAQAGAAADgDQAEgDAAgGQAAgGgEgDQgDgCgGAAIgKAAg");
	this.shape_36.setTransform(-19.8,-7.6,0.95,0.95);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAQAsIAAhHIgfAAIAABHIgQAAIAAhYIA/AAIAABYg");
	this.shape_37.setTransform(-27.2,-7.6,0.95,0.95);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAVAsIgVgeIgUAeIgTAAIAegsIgegsIATAAIAUAgIAVggIATAAIgeAsIAeAsg");
	this.shape_38.setTransform(49.4,-22.8,0.95,0.95);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAaAsIAAhYIAQAAIAABYgAgpAsIAAhYIAQAAIAAAjIAOAAQANAAAHAHQAIAHAAAMQAAANgIAHQgIAHgMAAgAgZAcIAOAAQAGAAADgDQADgDAAgFQgBgGgCgCQgDgEgGABIgOAAg");
	this.shape_39.setTransform(40.7,-22.8,0.95,0.95);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgbAsIAAhYIAZAAQAOAAAIAIQAIAHAAANQAAAMgIAHQgIAIgOgBIgJAAIAAAigAgLgEIAKAAQAGAAADgDQAEgDAAgGQAAgGgEgDQgDgDgGAAIgKAAg");
	this.shape_40.setTransform(33,-22.8,0.95,0.95);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgHAsIAAhIIgRAAIAAgQIAxAAIAAAQIgRAAIAABIg");
	this.shape_41.setTransform(27.1,-22.8,0.95,0.95);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgeAhQgNgOAAgTQAAgSANgOQAOgNATAAQANAAALAHQALAHAGANIgTAAQgDgFgHgDQgGgDgGAAQgMAAgJAJQgIAIAAAMQAAANAIAIQAJAJAMAAQAFAAAGgCQAGgCAEgGIATAAQgFALgLAIQgLAHgOAAQgSAAgOgNg");
	this.shape_42.setTransform(20.3,-22.8,0.95,0.95);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAaAsIAAhYIAQAAIAABYgAgpAsIAAhYIAQAAIAAAjIANAAQAOAAAHAHQAIAHAAAMQAAANgIAHQgIAHgNAAgAgZAcIAOAAQAFAAAEgDQACgDAAgFQAAgFgCgDQgEgEgFABIgOAAg");
	this.shape_43.setTransform(11,-22.8,0.95,0.95);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgdAsIAAhYIAzAAIAAAQIgjAAIAAATIAOAAQAOAAAIAIQAHAHAAALQAAANgIAHQgIAHgNAAgAgNAcIAOAAQAGAAADgDQAEgDgBgFQAAgEgDgEQgDgCgGgBIgOAAg");
	this.shape_44.setTransform(3,-22.8,0.95,0.95);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgTAtIATgeIgBAAIgDAAQgLAAgHgIQgIgHAAgNQAAgOAJgIQAIgJANAAQAOAAAIAJQAJAJAAANQAAAGgCAFQgCAEgFAIIgWAjgAgKgZQgEAEAAAIQAAAHAEAEQAEADAGAAQAGAAAFgDQAEgFAAgGQAAgHgEgFQgFgEgGAAQgGAAgEAEg");
	this.shape_45.setTransform(-6.5,-22.9,0.95,0.95);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAVAsIgVgeIgUAeIgTAAIAegsIgegsIATAAIAUAgIAVggIATAAIgfAsIAfAsg");
	this.shape_46.setTransform(-16.1,-22.8,0.95,0.95);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAaAsIAAhYIAQAAIAABYgAgpAsIAAhYIAQAAIAAAjIANAAQAOAAAHAHQAIAHAAAMQAAANgIAHQgIAHgNAAgAgZAcIANAAQAGAAAEgDQACgDAAgFQAAgFgCgDQgEgEgGABIgNAAg");
	this.shape_47.setTransform(-24.8,-22.8,0.95,0.95);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAZAsIgZhAIgXBAIgTAAIAkhYIANAAIAkBYg");
	this.shape_48.setTransform(-33.7,-22.8,0.95,0.95);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgXAsIAAhYIAvAAIAAAQIgfAAIAAAVIAeAAIAAAPIgeAAIAAAUIAfAAIAAAQg");
	this.shape_49.setTransform(-40.7,-22.8,0.95,0.95);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAVA1IAAgRIg6AAIAAhYIARAAIAABIIAfAAIAAhIIARAAIAABIIAKAAIAAAhg");
	this.shape_50.setTransform(-47.4,-22,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-71.4,-27.1,144.8,54.4), null);


(lib.p4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib._4();
	this.instance.parent = this;
	this.instance.setTransform(0,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p4, new cjs.Rectangle(0,30,176,159), null);


(lib.p3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib._3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p3, new cjs.Rectangle(0,0,135,300), null);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib._2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2, new cjs.Rectangle(0,0,135,300), null);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib._1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1, new cjs.Rectangle(0,0,135,300), null);


// stage content:
(lib._300x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3W3WMAutAAAMAAAAutMgutAAAg");
	this.shape.setTransform(150,150);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(385));

	// p4
	this.instance = new lib.p4();
	this.instance.parent = this;
	this.instance.setTransform(79.5,129.5,1,1,0,0,0,88,79.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(285).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(87).to({alpha:0},6,cjs.Ease.get(1)).wait(1));

	// p3
	this.instance_1 = new lib.p3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(67.5,125,1,1,0,0,0,67.5,125);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(190).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(89).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(93));

	// p2
	this.instance_2 = new lib.p2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(67.5,125,1,1,0,0,0,67.5,125);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(95).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).to({_off:true},96).wait(188));

	// p1
	this.instance_3 = new lib.p1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(67.5,125,1,1,0,0,0,67.5,125);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},6,cjs.Ease.get(1)).to({_off:true},96).wait(283));

	// t4
	this.instance_4 = new lib.t4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(215.3,124,0.84,0.84,0,0,0,0,0.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(285).to({_off:false},0).to({regY:0,scaleX:1.05,scaleY:1.05,x:215.4,alpha:1},6,cjs.Ease.get(1)).wait(87).to({regY:0.1,scaleX:0.84,scaleY:0.84,x:215.3,alpha:0},6,cjs.Ease.get(1)).wait(1));

	// t3
	this.instance_5 = new lib.t3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(215.3,124,0.84,0.84,0,0,0,-0.1,0.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(190).to({_off:false},0).to({regX:0,regY:0,scaleX:1.05,scaleY:1.05,x:215.4,alpha:1},6,cjs.Ease.get(1)).wait(87).to({regX:-0.1,regY:0.1,scaleX:0.84,scaleY:0.84,x:215.3,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(95));

	// t2
	this.instance_6 = new lib.t2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(215.3,124,0.84,0.84,0,0,0,0,0.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(95).to({_off:false},0).to({regY:0,scaleX:1.05,scaleY:1.05,x:215.4,alpha:1},6,cjs.Ease.get(1)).wait(87).to({regY:0.1,scaleX:0.84,scaleY:0.84,x:215.3,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(190));

	// t1
	this.instance_7 = new lib.t1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(215.3,124,0.84,0.84,0,0,0,0,0.1);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:0,scaleX:1.05,scaleY:1.05,x:215.4,alpha:1},6,cjs.Ease.get(1)).wait(87).to({regY:0.1,scaleX:0.84,scaleY:0.84,x:215.3,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(285));

	// bg
	this.instance_8 = new lib.logo();
	this.instance_8.parent = this;
	this.instance_8.setTransform(184,24);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ApGBTQgqgmAYg4QAWgzBGgdQBNghB+AAQAcABAaADIAgAEIANADIgSAgQglgLgjAAQhAAAg0ATQhGAZgLAyQgHAeAWAaQAcAiA9gCQAUgBAkgNQAtgQAbgUIA/g3QAGgFAHgDIAMgDIAGgBIBEAAIAWBeIArhdIBLAAIArBIIAhhIIBEAAIg8CDIhHAAIgthLIgiBLIgrAAIAAABIhRAAIgEgXIhKAAIgZAWIgwAAQg5AUhJAAQhqAAgugqgAjHA4IAsgBIgEglgAGHB2IAsgsIgshkIBEAAIATA2IA3g3IBNABIiFCEIgEAEQgFAEgDABIgQADgAD+BpIhvAAIA9iDIBvAAQA2AAATAaQAQATgMAbQgMAYgcAQQgkATg7AAIgDAAgADpBIIATAAQBBAAAJgjQAFgSgRgIQgMgFgUAAIgUAAg");
	this.shape_1.setTransform(217.5,223.8,1.1,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEAVIgFgCQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAgBgBIgBgEIACgBIACAAIABABIACACIABACIACABIADACIAEgCIADgBIABgDIABgCIgBgEIgBgCIgDgCIgFAAIAAgEIAEAAIADgCIABgCIABgDIgBgDIgBgCIgCgBIgDgBIgCABIgCABIgCACIgBADIgCABIgBAAIgDAAQAAgEABgCIADgDIAFgDIAEgBIAFABIAEADIADADIABAEIgBAEQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAAAAAIgDACIgDACQAFAAACADQABACAAAFIAAAFIgDAEIgFACIgGABg");
	this.shape_2.setTransform(283,283.6,1.2,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgEAWIgEgBIgCgCIgDgCIACgCIACgBIAFADIAEAAIADgBIADgCIACgDIAAgEIAAgDIgCgDIgDgBIgDAAIgHAAIgDAAIADgVIAUAAIAAADIgBACIgDABIgMAAIgCALIAFgBIAGABIAEADIADADIABAFIgBAGQgCAEgCABQgBACgDABIgGABg");
	this.shape_3.setTransform(278.8,283.6,1.2,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAFAWIAAgMIgSAAIgCgBIAAgDIAUgbIAFAAIAAAbIAGAAIAAAEIgGAAIAAAMgAgJAGIAOAAIAAgUg");
	this.shape_4.setTransform(274.6,283.6,1.2,1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgFAVIgFgEIgEgHIgBgKIABgIIAEgHIAFgFIAFgBQAEAAACABIAFAFIADAHQACAEAAAEQAAAGgCAEIgDAHQgCACgDACIgGABIgFgBgAgDgPQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAIgCAGIgBAHIABAJIACAEQAAABABABQAAAAAAAAQABABAAAAQABAAAAAAIADACIAEgCIADgDIACgEIABgJIgBgHIgCgGIgDgCIgEgBg");
	this.shape_5.setTransform(270.5,283.6,1.2,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKAWIARgjIACgCIgVAAIgBgBIgBgBIAAgEIAdAAIAAADIgBACIgRAkIgBABIgCABg");
	this.shape_6.setTransform(266.4,283.6,1.2,1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgFAVQgEgCgBgCIgEgHIAAgKIAAgIIAEgHIAFgFQADgBACAAIAGABIAFAFIADAHIABAIIgBAKIgDAHIgFAEIgGABIgFgBgAgDgPIgDACIgCAGIgBAHIABAJIACAEQAAABABABQAAAAABAAQAAABABAAQAAAAAAAAIADACIADgCQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAgBIACgEIABgJIgBgHIgCgGIgEgCIgDgBg");
	this.shape_7.setTransform(262.2,283.6,1.2,1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgFAVQgDgBgCgCQgBgCgBgDIgBgGIABgGIADgGIAKgOIACgBIACgBIAEAAIgLARIgBABIgBABQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIADgBIAEABIAFACIADADIABAGIgBAFQgBADgDACIgEADIgGABIgFgBgAgDAAIgCACIgDADIAAADIAAAEIACADIADACIADAAIAEAAIACgCIACgDIABgEIgBgDIgCgDIgCgCIgEAAg");
	this.shape_8.setTransform(258,283.6,1.2,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgIAWIALgSIACgBIABgBIgEABIgDABIgFgBIgDgCIgDgDIgBgFIABgGIADgEIAEgDIAGgBIAFABIAEADIADAEIABAGIAAAEIgBADIgNAUIgBABIgCABgAgDgPIgCABIgCADIAAAEQAAADACACQADACACAAIADAAIAEgCIABgDIABgCIgBgEIgBgDIgEgBIgDgBg");
	this.shape_9.setTransform(253.8,283.6,1.2,1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKAWIARgjIACgCIgVAAIgCgBIAAgFIAdAAIAAAFIgRAkIgEACg");
	this.shape_10.setTransform(249.7,283.6,1.2,1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgKAWIARgjIACgCIgVAAIgBgBIgBgBIAAgEIAdAAIAAADIgBACIgRAkIgBABIgCABg");
	this.shape_11.setTransform(245.5,283.6,1.2,1.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAFAWIAAgMIgSAAIgCgBIAAgDIAUgbIAFAAIAAAbIAGAAIAAAEIgGAAIAAAMgAgJAGIAOAAIAAgUg");
	this.shape_12.setTransform(241.2,283.6,1.2,1.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgFAVIgFgEIgEgHIgBgKIABgIIAEgHIAFgFIAFgBQADAAADABIAFAFQADADAAAEQACAEAAAEQAAAGgCAEQAAADgDAEIgFAEIgGABIgFgBgAgDgPQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAgBAAIgCAGIgBAHIABAJIACAEQABABAAABQAAAAABAAQAAABAAAAQABAAAAAAIADACIAEgCIADgDIACgEIABgJIgBgHIgCgGIgDgCIgEgBg");
	this.shape_13.setTransform(237.1,283.6,1.2,1.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgJAWIAAgFIAJAAIAAgeIgIAGIAAABIgBAAIgBgBIgCgDIAMgLIAFAAIAAAmIAIAAIAAAFg");
	this.shape_14.setTransform(232.9,283.6,1.2,1.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AALAWIAAgUIgVAAIAAAUIgHAAIAAgrIAHAAIAAAUIAVAAIAAgUIAHAAIAAArg");
	this.shape_15.setTransform(226.2,283.6,1.2,1.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgNAWIAAgrIAMAAIAGABIAGADIACAEIABAGIgBAFQAAACgCACIgGADIgGABIgGAAIAAAQgAgHABIAGAAIAEgBIADgBIABgDIABgDIgBgEIgBgCIgDgCIgEgBIgGAAg");
	this.shape_16.setTransform(221.5,283.6,1.2,1.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgMAWIAAgrIAZAAIAAAFIgTAAIAAAmg");
	this.shape_17.setTransform(217.5,283.6,1.2,1.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgIAUQgEgCgCgCQgDgDgCgEQgBgDAAgGQAAgDABgEIAFgHQACgDAEgCQAFgCADAAQAEAAAFACQAEACACADQAEADABAEQABAEAAADQAAAGgBADQgBAEgEADQgCACgEACQgEACgFAAQgEAAgEgCgAgFgOIgFADQgCADgBADQgBACAAADQAAAEABADQABADACACQACADADAAIAFACQADAAADgCQADgBACgCQACgCABgDIABgHIgBgFQgBgDgCgDIgFgDIgGgBg");
	this.shape_18.setTransform(212.4,283.6,1.2,1.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgEAWIgEgBIgDgCIgCgCIACgCIABgBIACABIAEACIAEAAIACgBIADgCIACgDIABgEIgBgDIgBgDIgDgBIgDAAIgHAAIgEAAIAEgVIATAAIAAADIAAACIgDABIgMAAIgCALIAFgBIAGABIAEADIADADIABAFIgBAGQgCAEgCABQgCACgDABIgFABg");
	this.shape_19.setTransform(205.5,283.6,1.2,1.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgKAWIAAgFIAKAAIAAgeIgIAGIgBABIAAAAIgBgBIgCgDIAMgLIAFAAIAAAmIAIAAIAAAFg");
	this.shape_20.setTransform(201.4,283.6,1.2,1.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgFAVIgFgEQgDgEAAgDQgCgEAAgGQAAgEACgEQAAgEADgDIAFgFQADgBACAAIAGABIAFAFIAEAHIABAIIgBAKIgEAHIgFAEIgGABIgFgBgAgDgPIgDACIgCAGIgBAHIABAJIACAEIADADIADACIAEgCQAAAAABAAQAAAAABgBQAAAAAAAAQABgBAAgBIACgEIABgJIgBgHIgCgGQgBAAAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAIgEgBg");
	this.shape_21.setTransform(197.2,283.6,1.2,1.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgOAWIAAgDIARgSIACgDIACgDIAAgDIAAgEIgCgCIgCgBIgDgBIgCABIgCABIgCACIgBADIgBABIgCAAIgDAAQABgEABgCIADgDIAEgDIAFgBIAEABIAFADQAAAAABAAQAAABABAAQAAABAAAAQAAABAAAAIABAGIgBADIgBAFIgDACIgNAPIACgBIAPAAIACABIAAACIAAADg");
	this.shape_22.setTransform(193,283.6,1.2,1.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgJAWIAAgFIAJAAIAAgeIgIAGIAAABIgBAAIgBgBIgCgDIAMgLIAFAAIAAAmIAIAAIAAAFg");
	this.shape_23.setTransform(188.9,283.6,1.2,1.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgFAWIgDgBIgDgCIgCgCIACgCIABgBIACABIAEACIADAAIADgBIADgCIACgDIABgEIgBgDIgBgDIgDgBIgDAAIgHAAIgEAAIAEgVIATAAIAAADIAAACIgDABIgMAAIgCALIAFgBIAGABIAEADIADADIABAFIgBAGQgCAEgCABQgCACgDABIgFABg");
	this.shape_24.setTransform(184.7,283.6,1.2,1.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAFAWIAAgMIgSAAIgBAAIgBgBIAAgDIAUgbIAFAAIAAAbIAGAAIAAADIAAABIgGAAIAAAMgAgJAGIAOAAIAAgSIAAgCg");
	this.shape_25.setTransform(180.5,283.6,1.2,1.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgFAVIgFgEIgDgHQgCgEAAgGQAAgEACgEIADgHIAFgFQADgBACAAIAGABIAFAFIAEAHIABAIIgBAKIgEAHIgFAEIgGABIgFgBgAgDgPIgDACIgCAGIgBAHIABAJIACAEIADADIADACIAEgCIADgDIACgEIABgJIgBgHIgCgGIgDgCIgEgBg");
	this.shape_26.setTransform(176.3,283.6,1.2,1.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgKAWIARgjIACgCIgWAAIgBgBIAAgFIAcAAIAAAFIgRAkIgDACg");
	this.shape_27.setTransform(172.2,283.6,1.2,1.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgKAWIARgjIACgCIgVAAIgBgBIgBgBIAAgEIAdAAIAAADIgBACIgRAkIgBABIgCABg");
	this.shape_28.setTransform(168,283.6,1.2,1.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AALAWIAAgUIgVAAIAAAUIgGAAIAAgrIAGAAIAAAUIAVAAIAAgUIAHAAIAAArg");
	this.shape_29.setTransform(161.3,283.6,1.2,1.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AALAWIAAgUIgVAAIAAAUIgHAAIAAgrIAHAAIAAAUIAVAAIAAgUIAHAAIAAArg");
	this.shape_30.setTransform(155.8,283.6,1.2,1.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AALAWIAAggIAAgDIgBACIgTAfIgBABIgCABIgFAAIAAgrIAHAAIAAAgIgBADIACgCIAAgDIATgcIABgBIACgBIAEAAIAAArg");
	this.shape_31.setTransform(150.3,283.6,1.2,1.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgFAVIgFgCIgDgEIAAgFQAAgEABgDQADgDAEAAQgEgBgCgDQgBgCAAgDIABgFIACgDIAFgDIAEgBIAFABIAFADIACADIABAFQAAADgBACIgGAEQAEAAADADQABADAAAEIgBAFIgCAEIgFACIgGABgAgDACIgCABIgCADIgBAEIABADIACACIACACIADABIAEgBIACgCIACgCIAAgDIAAgEIgCgDIgCgBIgEgBgAgDgQIgBABIgCADIAAADIAAACIABADIACABIADABIAEgBIACgBIABgDIAAgCIAAgDIgCgDIgBgBIgEAAg");
	this.shape_32.setTransform(261,274,1.2,1.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgBAEIgCgCIAAgCIABgCIABgBIADAAIABABIABACIAAACIgCACg");
	this.shape_33.setTransform(256.2,276.2,1.2,1.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AANAUIAAgKIgYAAIAAAJIgBABIgBAAIgEAAIAAgOIACAAIACgBIACgBIABgDIACgEIACgQIASAAIAAAZIAGAAIAAANIgBABIgBAAgAgCgHIgDAKIgCADIAOAAIAAgVIgJAAg");
	this.shape_34.setTransform(253.1,275.4,1.2,1.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgCAGIAAAAIAAgBIABgBIABgDIAAgBIAAAAIgCgBIAAgBIgBgBIABgDIACgBIACABIABAAIABACIAAAEIgDAFIgCADg");
	this.shape_35.setTransform(248.2,276.7,1.2,1.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAHAWIAAgVIABgBIAAAAIgBABIgBABIgNASIgBABIgBABIgDAAIAAgeIAGAAIAAATIgBACIAAABIABgCIABgBIANgRIABgBIABgBIADAAIAAAegAgCgNIgDgBIgCgCIgBgDIABgBIABgBIADAAIAAADIABABIABABIABABIACgBIACgBIAAgBIABgDIADAAIABABIAAABIAAADIgCACIgDABIgEABg");
	this.shape_36.setTransform(245.3,274,1.2,1.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgGACIAAgDIANAAIAAADg");
	this.shape_37.setTransform(241.9,274.5,1.2,1.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgNAWIAAgCIAAgBIABgBIAMgPIAEgCIADgGIAAgDIAAgEIgBgCIgDgBIgDgBIgBABIgDABIgCACIgBADIgBABIgCAAIgCAAQAAgDABgDIADgDIAFgDIADgBIAGABIAEADIADADIABAGIgBADIgCAFIgDACIgOAPIADAAIAQAAIABAAIABACIAAADg");
	this.shape_38.setTransform(238.5,274,1.2,1.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAHAWIAAgVIABgBIAAAAIgBABIgBABIgNASIgBABIgBABIgDAAIAAgeIAGAAIAAATIgBACIAAABIABgCIABgBIANgRIABgBIABgBIADAAIAAAegAgCgNIgDgBIgCgCIgBgDIABgBIABgBIADAAIAAADIABABIABABIABABIACgBIACgBIAAgBIABgDIADAAIABABIAAABIAAADIgCACIgDABIgEABg");
	this.shape_39.setTransform(232.5,274,1.2,1.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAHAPIAAgUIABgCIgBABIgBABIAAABIgNASIgBABIgBAAIgDAAIAAgdIAFAAIAAAVIACgDIACgCIACgCIAJgNIAAgBIACAAIADAAIAAAdg");
	this.shape_40.setTransform(228.3,274.8,1.2,1.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAJAPIgCAAIgBgCIgGgJQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAgBAAIgCgBIgDAAIAAAOIgGAAIAAgdIAGAAIAAANIACAAIADgBIABgBIAFgKIACgBIAGAAIgIALIgCACIgCABIADAAIACACIAHANg");
	this.shape_41.setTransform(224.6,274.8,1.2,1.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AABAQIgEgBIgFgEIgCgEIgBgHIAAgGIADgEIAFgEIAFgBIAGABIAEAEIgBABIgBABIgBAAIgBgBIgBAAIgCgBIgDAAIgDABIgCACIgCAEIgBADIABAFIACADIACACIADABIADAAIACgBIACgBIABgBIABABIABACIgCACIgDACIgDABg");
	this.shape_42.setTransform(220.8,274.8,1.2,1.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAHAPIAAgOIgNAAIAAAOIgGAAIAAgdIAGAAIAAAMIANAAIAAgMIAGAAIAAAdg");
	this.shape_43.setTransform(217,274.8,1.2,1.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAHAPIAAgUIABgCIgBABIgBABIAAABIgNASIgBABIgBAAIgDAAIAAgdIAFAAIAAAVIABgCIABgBIAEgEIAJgNIAAgBIACAAIADAAIAAAdg");
	this.shape_44.setTransform(212.9,274.8,1.2,1.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AASAUIAAgKIgoAAIAAgdIAFAAIAAAZIAMAAIAAgZIAFAAIAAAZIAMAAIAAgZIAGAAIAAAZIAFAAIAAAOIgBAAg");
	this.shape_45.setTransform(207.9,275.4,1.2,1.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgFAPIgFgEIgDgEIgBgHIABgGIADgEIAFgEIAFgBIAGABIAFAEIADAEIABAGIgBAHIgDAEIgFAEIgGABIgFgBgAgGgIQgCADAAAFQAAAGACACQACADAEAAQAFAAACgDQACgCAAgGQAAgFgCgDQgDgCgEAAQgDAAgDACg");
	this.shape_46.setTransform(202.5,274.8,1.2,1.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgNAWIAAgrIAMAAIAGABIAGADIADAEIAAAGIAAAFQgBACgCACIgGADIgGABIgHAAIAAAQgAgIABIAHAAIAEgBIADgBIACgDIAAgDIAAgEIgCgCIgDgCIgEgBIgHAAg");
	this.shape_47.setTransform(198.7,274,1.2,1.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAMAUIAAgKIgYAAIAAAJIAAABIgBAAIgEAAIAAgOIABAAIACgBIACgBIACgDQABgBAAgDIACgHIAAgJIATAAIAAAZIAGAAIAAANIgBABIgBAAgAgEgBIgBAEIgCADIANAAIAAgVIgIAAg");
	this.shape_48.setTransform(192.3,275.4,1.2,1.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgCAQIgDgBIgDgCIgDgCIACgCIABgBIABABIACABIADABIACAAIADAAIACgBIABgCIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIgFgBIgDAAIAAgCIADAAQACgBACgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAAAgBIAAgCIgCgBIgCgBIgCAAIgCAAIgCABIgCAAIgBABIgBAAIgBgBIgBgCIAFgDIAFgBIAFABIADACIACADIABACIgBAEIgCACIgCABQACAAACACQAAAAABABQAAAAAAABQAAAAAAABQABABAAABIgCADIgCADIgDACIgFABg");
	this.shape_49.setTransform(188.4,274.8,1.2,1.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AABAQIgFgBIgEgEQgDgCgBgCIgBgHIABgGIADgEIAEgEIAGgBIAFABIAEADIACAEIABAGIAAABIgUAAIABAFIABADIADACIAEABIADAAIACgBIACgBIACgBIABABIABACIgCACIgEACIgDABgAgEgJIgDAHIAQAAIgBgEIgCgCIgCgCIgDAAQgDAAgCABg");
	this.shape_50.setTransform(184.9,274.8,1.2,1.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgFAPQgDgBgBgDQgDgCgBgCIgBgHIABgGQABgCADgCQABgDADgBIAFgBIAGABQADABABADQADACAAACIACAGIgCAHQAAACgDACQgBADgDABIgGABIgFgBgAgGgIQgCAEAAAEQAAAFACADQACADAEAAQAFAAACgDQACgCAAgGQAAgFgCgDQgDgCgEAAQgDAAgDACg");
	this.shape_51.setTransform(181,274.8,1.2,1.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgMAVIAAgoIACAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIAAAEIAFgFIAFgBIAEABQABABAAAAQABAAAAAAQABABAAAAQABABAAABQACABABADIABAHIgBAFIgDAFIgEAEIgGABIgDgBIgEgDIAAAOgAgDgOIgEADIAAAOIADACIAEABQAEAAACgDQABgCAAgFIAAgFIgBgEIgDgBIgDgBg");
	this.shape_52.setTransform(177,275.4,1.2,1.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAKAWIAAgmIgUAAIAAAmIgGAAIAAgrIAhAAIAAArg");
	this.shape_53.setTransform(172.3,274,1.2,1.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgDAGIAAAAIACgCIAAgBIABgCIAAgBIgBAAIgCgCIAAgBIABgDIACgBIADABIABAEIgBACIgBACIgCADIgBADg");
	this.shape_54.setTransform(283.2,267.1,1.2,1.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAKAQIgCgBIAAgBIgBgDIgCACIgDACIgCABIgDAAIgDgBIgDgBIgBgDIgBgEIABgDIADgDIAGgBIAIgBIAAgCQAAgDgCgDQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgDABIgCAAIgBABIgCABIgCgBIgBgCIAGgDIAFgCIAFABIADADIACADIABAFIAAATgAAAACIgDACIgCABIgBACIABACIABABIABABIACABIACgBIAEgCIACgBIAAgHg");
	this.shape_55.setTransform(280.5,265.2,1.2,1.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgLAPIAAgdIALAAIAEAAIAEACIACACIAAADIgBAEIgCACIgDABIAGABIACAFIgBAEIgDADQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgFABgAgFALIAFAAQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQAAgBAAAAQABAAAAgBQAAgBAAAAQAAgBAAAAIAAgCIgBgBIgCgBIgDgBIgFAAgAgFgBIAFAAIACgBIACgBIABgBIAAgCIAAgCIgBgBIgCgBIgCgBIgFAAg");
	this.shape_56.setTransform(277.1,265.2,1.2,1.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAJAPIgCAAIgBgCIgGgJQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAgBAAIgCgBIgDAAIAAAOIgGAAIAAgdIAGAAIAAANIACAAIADgBIABgBIAFgKIACgBIAGAAIgIALIgCACIgCABIADAAIACACIAHANg");
	this.shape_57.setTransform(273.5,265.2,1.2,1.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AABAQIgEgBIgFgEIgCgEIgBgHIAAgGIADgEIAFgDIAFgCIAGACIAEADIgBABIgBABIgBAAIgEgCIgDAAIgDABIgCACIgCAEIgBADIABAFIACADIACACIADABIADAAIACgBIACgBIABgBIABABIABACIgCACIgDACIgDABg");
	this.shape_58.setTransform(269.8,265.2,1.2,1.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgFAPQgCgBgDgDIgDgEIgBgHIABgGIADgEQADgDACAAQACgCADAAIAGACQADABACACIADAEIABAGIgBAHIgDAEQgCACgDACIgGABIgFgBgAgGgIQgCAFAAADQAAAFACADQACADAEAAQAFAAACgDQACgCAAgGQAAgFgCgDQgDgCgEAAQgDAAgDACg");
	this.shape_59.setTransform(266,265.2,1.2,1.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AARAWIAAghIgOAZIgBABIgCAAIgCgBIgOgaIAAAiIgGAAIAAgrIAFAAIABABIABABIAPAcIABgCIAPgaIABgBIABgBIAFAAIAAArg");
	this.shape_60.setTransform(260.7,264.4,1.2,1.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgBAEIgBgCIgBgCIABAAIABgCIAAgBIACAAIACABIABACIAAACIgBABIgCABg");
	this.shape_61.setTransform(254.7,266.6,1.2,1.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgJAPIAAgdIATAAIAAAEIgNAAIAAAZg");
	this.shape_62.setTransform(252.9,265.2,1.2,1.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgCAGIAAAAIAAgBIABgBIABgDIAAgBIAAAAIAAAAIgCgBIAAgBIgBgBIABgDIACgBIACABIABAAIABACIAAACIgBACIgBACIgBADIgCADg");
	this.shape_63.setTransform(248.6,267.1,1.2,1.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgIAWIAOgVIgEACIgDABIgFgBIgDgCIgDgDIgBgFQAAgDABgDIADgEIAFgCQACgCACAAIAGABIAEADIADAEIABAGIAAAEIgBADIgEAFIgJAPIgBABIgCABgAgCgQIgDACIgCADIAAADQAAAEACADQACABADAAIAEAAIACgBIACgEIABgDIgBgDIgCgDIgCgCIgEAAg");
	this.shape_64.setTransform(245.6,264.4,1.2,1.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgJAWIAAgFIAJAAIAAgeIgHAGIgBABIgBAAIgBgBIgCgDIAMgLIAEAAIAAAmIAJAAIAAAFg");
	this.shape_65.setTransform(241.5,264.4,1.2,1.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AAFAWIAAgMIgSAAIgBAAIAAgBIgBgDIAUgbIAFAAIAAAbIAGAAIAAAEIgGAAIAAAMgAgJAGIAOAAIAAgUg");
	this.shape_66.setTransform(237.2,264.4,1.2,1.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgEAWIgEgBIgCgCIgDgCIACgCIABgBIACABIAEACIAEAAIADgBIADgCIACgDIAAgEIAAgDIgCgDIgDgBIgDAAIgHAAIgDAAIADgVIAUAAIAAADIgBACIgDABIgMAAIgCALIAFgBIAGABIAEADIADADIABAFIgBAGQgCAEgCABQgBACgEABIgFABg");
	this.shape_67.setTransform(233.1,264.4,1.2,1.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgJAWIAAgFIAJAAIAAgeIgIAGIAAABIgBAAIgBgBIgCgDIAMgLIAFAAIAAAmIAIAAIAAAFg");
	this.shape_68.setTransform(229,264.4,1.2,1.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgJAWIAAgFIAJAAIAAgbIAAgDIgIAGIgBABIAAAAIgBgBIAAAAIgCgDIAMgLIAFAAIAAAmIAIAAIAAAFg");
	this.shape_69.setTransform(224.8,264.4,1.2,1.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AAAALIAAgBIAAgBIAEgIIABgBIAAAAIgBgBIgEgHIAAgCIAAgBIACAAIAIALIAAAAIgIAMgAgIALIgBgBIABgBIAEgIIABgBIAAAAIgBgBIgEgHIgBgCIABgBIACAAIAHALIAAAAIgHAMg");
	this.shape_70.setTransform(219.3,265.1,1.2,1.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AAAAEIgCgBIgBgBIAAgCIABgCIACgBIACAAIABABIABACIAAACIgCACg");
	this.shape_71.setTransform(216.9,266.6,1.2,1.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgMAWIAAgrIAZAAIAAAFIgSAAIAAAmg");
	this.shape_72.setTransform(215.1,264.4,1.2,1.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgBAEIgCgCIAAgCIABgCIABgBIADAAIABABIABACIAAACIgCACg");
	this.shape_73.setTransform(212,266.6,1.2,1.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AALAWIAAgUIgVAAIAAAUIgGAAIAAgrIAGAAIAAAUIAVAAIAAgUIAHAAIAAArg");
	this.shape_74.setTransform(208.4,264.4,1.2,1.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgBAEIgCgCIAAgCIABgCIABgBIACAAIACABIABACIgBACIAAABIgCABg");
	this.shape_75.setTransform(204.8,266.6,1.2,1.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgFAUQgFgCgCgCQgDgDAAgEQgCgDAAgGQAAgEACgEIADgHQADgDAEgBQAFgCADAAQAFAAADACIAGADIgCADIgBACIgCgCIgFgCIgEgBIgFABIgEAEIgEAFIgBAGQAAAEABAEQABACADACIAEAEIAFABIAGgBIADgBIABgCIABAAIAAgBIABABIADADQgDADgDABQgEACgFAAQgEAAgEgCg");
	this.shape_76.setTransform(201.7,264.4,1.2,1.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AALAWIAAgdIAAgDIAAgDIgCAEIgSAdIgBABIgCABIgFAAIAAgrIAHAAIAAAgIgBADIACgCIAAgDIATgcIABgBIACgBIAEAAIAAArg");
	this.shape_77.setTransform(194.6,264.4,1.2,1.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AARAbIAAgKIghAAIAAAIIgBABIgBABIgEAAIAAgPIAFAAIACgCIABgDIACgEIABgGIACgXIAZAAIAAAmIAHAAIAAANIgBABIgBABgAgGAAIgCAHIgCAFIAUAAIAAghIgNAAg");
	this.shape_78.setTransform(188.9,265,1.2,1.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AALAWIAAgUIgVAAIAAAUIgHAAIAAgrIAHAAIAAAUIAVAAIAAgUIAGAAIAAArg");
	this.shape_79.setTransform(183.4,264.4,1.2,1.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AAQAWIgCgBIgBgBIgDgKIgTAAIgDAKIgBABIgBABIgFAAIARgrIAFAAIARArgAAAgMIAAACIgHAPIAPAAIgHgPIgBgFg");
	this.shape_80.setTransform(178.2,264.4,1.2,1.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AAMAWIgCgBIgLgRIgCgCIgCAAIgFAAIAAAUIgGAAIAAgrIAGAAIAAATIAFAAIACgBIABgBIALgQIACgBIAFAAIgNASIgDADIACAAIADADIAMATg");
	this.shape_81.setTransform(173.6,264.4,1.2,1.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAHgLIACAAIABABIAAACIgGAIIABABIAFAIIAAABIgBABIgCABgAgIAAIAAAAIAHgLIABAAIABABIAAACIgFAHIAAABIAAABIAFAIIAAABIgBABIgBABg");
	this.shape_82.setTransform(169.3,265.1,1.2,1.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgIAUQgEgCgCgCQgDgDgCgEQgBgDAAgGQAAgEABgEIAFgHQACgCAEgCQAFgCADAAQAEAAAFACQAEACACACQAEAEABADQABAEAAAEQAAAGgBADQgBAEgEADQgCACgEACQgEACgFAAQgEAAgEgCgAgFgPIgFAEQgCACgBADQgBADAAADQAAAEABADQABADACACQACADADABIAFABQADAAADgBQADgCACgCQACgCABgDIABgHIgBgGQgBgDgCgCIgFgEIgGgBg");
	this.shape_83.setTransform(163.1,264.4,1.2,1.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgIAUQgEgBgDgDIgEgHQgBgDAAgGQAAgEABgEIAEgHQADgDAEgBQAFgCADAAIAJACQADABADADQAEAEABADQABAEAAAEQAAAGgBADQgBAEgEADQgDADgDABIgJACQgEAAgEgCgAgFgPIgFAEIgDAFIgBAGIABAHIADAFQACADADABIAFABQADAAADgBIAFgEQACgCABgDIABgHIgBgGQgBgDgCgCIgFgEIgGgBg");
	this.shape_84.setTransform(157.3,264.4,1.2,1.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgIAUQgDgBgEgDIgEgHQgCgDABgGQgBgEACgEIAEgHIAHgEQAFgCADAAQAEAAAEACQAEABAEADIAEAHQACAEAAAEQAAAGgCADIgEAHQgEADgEABQgDACgFAAQgDAAgFgCgAgFgPIgFAEIgDAFIgBAGIABAHIADAFQADADACABQACABADAAQAEAAACgBQADgBACgDIADgFIABgHIgBgGIgDgFIgFgEIgGgBg");
	this.shape_85.setTransform(151.5,264.4,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_8}]}).wait(385));

	// bg
	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#00A7E0").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_86.setTransform(150,150,1,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_86).wait(385));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.5,149.5,301,301);
// library properties:
lib.properties = {
	width: 300,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/300x300_atlas_.png", id:"300x300_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;