(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"600x500_atlas_", frames: [[0,1088,600,270],[0,816,600,270],[0,544,600,270],[0,272,600,270],[0,0,600,270],[0,1360,60,10]]}
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
	this.spriteSheet = ss["600x500_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["600x500_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["600x500_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["600x500_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
	this.spriteSheet = ss["600x500_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.sim = function() {
	this.spriteSheet = ss["600x500_atlas_"];
	this.gotoAndStop(5);
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


(lib.t5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("AAdAyIgKgaIgkAAIgLAaIgUAAIAqhjIANAAIAqBjgAgLAGIAXAAIgMgcg");
	this.shape.setTransform(116.4,22);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A7E0").s().p("AAiAyIAAhKIgaBKIgPAAIgahKIAABKIgTAAIAAhjIAZAAIAbBMIAchMIAZAAIAABjg");
	this.shape_1.setTransform(105.2,22);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00A7E0").s().p("AgkAlQgPgPgBgWQABgUAPgQQAOgPAWAAQAWAAAPAPQAPAQABAUQgBAWgPAPQgPAPgWAAQgWAAgOgPgAgYgXQgJAKAAANQAAAPAJAJQAKAKAOAAQAOAAAKgKQAKgKAAgOQAAgNgKgKQgKgKgOAAQgOAAgKAKg");
	this.shape_2.setTransform(93.4,22);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00A7E0").s().p("AAkA7IAAgSIhHAAIAAASIgSAAIAAgkIAJAAIAlhRIAPAAIAlBRIAJAAIAAAkgAgYAXIAxAAIgZg3g");
	this.shape_3.setTransform(82.2,22.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00A7E0").s().p("AgkAlQgPgPAAgWQAAgUAPgQQAPgPAVAAQAXAAAPAPQAPAQAAAUQAAAWgPAPQgPAPgXAAQgVAAgPgPgAgXgXQgKAKAAANQAAAOAKAKQAKAKANAAQAPAAAJgKQAKgKAAgOQAAgNgKgKQgJgKgPAAQgOAAgJAKg");
	this.shape_4.setTransform(67.9,22);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00A7E0").s().p("AgYAyIAAhjIAxAAIAAASIgfAAIAABRg");
	this.shape_5.setTransform(59.8,22);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00A7E0").s().p("AgaAyIAAhjIA1AAIAAASIgiAAIAAAXIAgAAIAAARIggAAIAAAXIAiAAIAAASg");
	this.shape_6.setTransform(52.9,22);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00A7E0").s().p("Ag5AyIAAhjIASAAIAABRIAfAAIAAhRIASAAIAABRIAeAAIAAhRIASAAIAABjg");
	this.shape_7.setTransform(42.6,22);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00A7E0").s().p("AAdAyIgKgaIgkAAIgLAaIgUAAIAqhjIANAAIAqBjgAgLAGIAXAAIgMgcg");
	this.shape_8.setTransform(30.9,22);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00A7E0").s().p("AgfAyIAAhjIAXAAQASABAHAGQAJAIAAALQAAAIgDAEQgCAEgGADQAIACAFAGQAEAHAAAIQAAAOgKAJQgKAIgTAAgAgNAgIAMAAQAHAAAEgDQAEgEAAgGQAAgFgEgEQgFgDgGAAIgMAAgAgNgKIAJAAQAEAAAEgDQAEgDAAgFQAAgEgEgDQgDgDgFAAIgJAAg");
	this.shape_9.setTransform(22.3,22);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00A7E0").s().p("AAcAyIgKgaIgkAAIgKAaIgUAAIAphjIAOAAIAqBjgAgKAGIAWAAIgMgcg");
	this.shape_10.setTransform(135.5,5.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00A7E0").s().p("AASAyIAAgqIgjAAIAAAqIgTAAIAAhjIATAAIAAAoIAjAAIAAgoIASAAIAABjg");
	this.shape_11.setTransform(125.9,5.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00A7E0").s().p("AgaAyIAAhjIA1AAIAAASIgiAAIAAAXIAgAAIAAARIggAAIAAAXIAiAAIAAASg");
	this.shape_12.setTransform(117.9,5.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00A7E0").s().p("AAWAyIAAhFIgrBFIgTAAIAAhjIATAAIAABFIArhFIATAAIAABjg");
	this.shape_13.setTransform(109.3,5.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00A7E0").s().p("AgYAyIAAhjIAxAAIAAASIgfAAIAABRg");
	this.shape_14.setTransform(101.9,5.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00A7E0").s().p("AAWAyIAAhFIgrBFIgTAAIAAhjIATAAIAABFIArhFIASAAIAABjg");
	this.shape_15.setTransform(93.5,5.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00A7E0").s().p("AgYAyIAAhjIAxAAIAAASIgeAAIAABRg");
	this.shape_16.setTransform(86,5.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00A7E0").s().p("AAWAyIAAhFIgrBFIgTAAIAAhjIATAAIAABFIArhFIATAAIAABjg");
	this.shape_17.setTransform(74.4,5.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00A7E0").s().p("AgIAyIAAhRIgSAAIAAgSIA2AAIAAASIgTAAIAABRg");
	this.shape_18.setTransform(63.5,5.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00A7E0").s().p("AgfAyIAAhjIAcAAQARABAIAIQAKAHAAAPQAAAOgJAIQgJAIgRAAIgJAAIAAAmgAgMgFIAKAAQAHAAAEgDQAEgDAAgHQAAgHgEgDQgEgDgHAAIgKAAg");
	this.shape_19.setTransform(57.2,5.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00A7E0").s().p("AgkAkQgQgPABgVQAAgUAPgQQAPgPAVAAQAWAAAPAPQAQAPAAAVQAAAWgQAOQgOAQgXAAQgVAAgPgQgAgXgXQgKAJAAAOQAAAOAKAKQAKAKANAAQAOAAAKgKQAKgLAAgNQAAgNgKgKQgJgKgPAAQgOAAgJAKg");
	this.shape_20.setTransform(47.5,5.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00A7E0").s().p("AgIA5IAAgPQgUAAgNgMQgMgMAAgSQAAgTAMgMQANgLAUgBIAAgNIARAAIAAANQAUABAMALQANANAAASQAAASgNAMQgMAMgUAAIAAAPgAAJAYQAMAAAHgGQAIgIAAgKQAAgKgIgHQgGgIgNAAgAgbgRQgIAGABALQgBAKAIAIQAHAGAMAAIAAgxQgNAAgGAIg");
	this.shape_21.setTransform(36.1,5.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00A7E0").s().p("AAjAyIAAhJIgbBJIgPAAIgahJIAABJIgTAAIAAhjIAZAAIAbBLIAchLIAZAAIAABjg");
	this.shape_22.setTransform(24,5.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00A7E0").s().p("AgkAkQgPgOgBgWQABgUAPgQQAQgPAUAAQAXAAAOAPQAQAQAAAUQAAAWgQAOQgOAQgXAAQgVAAgPgQgAgXgXQgKAKAAANQAAAOAKAKQAKAKANAAQAOAAALgKQAJgKAAgOQAAgOgJgJQgKgKgPAAQgOAAgJAKg");
	this.shape_23.setTransform(12.2,5.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00A7E0").s().p("AANAyIgdgsIAAAsIgSAAIAAhjIASAAIAAAsIAdgsIAXAAIgkAxIAkAyg");
	this.shape_24.setTransform(3.6,5.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t5, new cjs.Rectangle(0,0,140.4,28.8), null);


(lib.t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("AgJALQgFgFAAgGQAAgFAFgEQAEgFAFAAQAGAAAFAFQAEAEAAAFQAAAGgEAFQgFAEgGAAQgFAAgEgEgAgGgGQgDADAAADQAAAEADADQADADADAAQAEAAADgDQADgDAAgEQAAgDgDgDQgDgCgEAAQgDAAgDACg");
	this.shape.setTransform(105.9,17.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A7E0").s().p("AgYAqQgJgJAAgRIAAgfQAAgQAJgKQAKgKAOAAQAPAAAKAKQAIAKABAQIAAAfQgBARgIAJQgKAKgPAAQgOAAgKgKgAgKgdQgFAFAAAJIAAAfQAAAKAFAEQAEAFAGAAQAHAAAEgFQAEgFABgJIAAgfQgBgJgEgFQgEgFgHAAQgGAAgEAFg");
	this.shape_1.setTransform(100.4,21.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00A7E0").s().p("AgXApQgKgKAAgPIACgMQABgEAEgHIAcgrIAVAAIgXAiIADAAIACgBQAMAAAJAKQAIAIAAAPQAAAPgJAKQgIAKgRAAQgOAAgJgKgAgLAEQgFAFABAIQgBAHAFAFQAFAGAGAAQAHAAAFgGQAFgFgBgHQABgIgFgFQgFgEgHAAQgHAAgEAEg");
	this.shape_2.setTransform(92.8,21.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00A7E0").s().p("AAWAyIAAhFIgrBFIgTAAIAAhjIATAAIAABFIArhFIASAAIAABjg");
	this.shape_3.setTransform(80.9,21.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00A7E0").s().p("AgfAyIAAhjIAcAAQARABAJAHQAJAJAAAPQAAAOgJAGQgJAJgRAAIgJAAIAAAmgAgMgFIALAAQAGAAAEgDQAEgDAAgHQAAgGgEgDQgDgEgHAAIgLAAg");
	this.shape_4.setTransform(72.5,21.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00A7E0").s().p("AATAyIAAhRIgkAAIAABRIgSAAIAAhjIBIAAIAABjg");
	this.shape_5.setTransform(63.8,21.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00A7E0").s().p("AAdAyIgKgaIgkAAIgLAaIgUAAIAqhjIANAAIAqBjgAgLAGIAXAAIgMgcg");
	this.shape_6.setTransform(51.1,21.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00A7E0").s().p("AAOAyIgegsIAAAsIgTAAIAAhjIATAAIAAArIAegrIAWAAIglAxIAlAyg");
	this.shape_7.setTransform(42.3,21.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00A7E0").s().p("AgfAyIAAhjIAcAAQARABAJAHQAJAJAAAPQAAAOgJAGQgJAJgRAAIgJAAIAAAmgAgMgFIALAAQAHAAADgDQAEgCABgIQAAgGgFgDQgDgEgHAAIgLAAg");
	this.shape_8.setTransform(34.3,21.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00A7E0").s().p("AAWAyIAAhFIgrBFIgTAAIAAhjIATAAIAABFIArhFIATAAIAABjg");
	this.shape_9.setTransform(25.3,21.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00A7E0").s().p("AgIAyIAAhRIgTAAIAAgSIA3AAIAAASIgTAAIAABRg");
	this.shape_10.setTransform(17.5,21.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00A7E0").s().p("AghAlQgPgPAAgWQAAgVAPgPQAPgPAVAAQAQAAALAIQANAIAGAPIgVAAQgEgGgHgEQgHgDgHAAQgNAAgKAKQgKAKAAANQAAAOAKAKQAKAKANAAQAHAAAHgDQAFgDAFgFIAVAAQgFAMgNAJQgMAIgQAAQgUAAgPgPg");
	this.shape_11.setTransform(9.5,21.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00A7E0").s().p("AAPAyIAAgnIgaAnIgVAAIAbglQgMgCgHgHQgIgIABgMQAAgPAJgJQAKgJARAAIAcAAIAABjgAgJgbQgEAEAAAHQgBAIAFADQAGAEAHAAIALAAIAAgeIgLAAQgHAAgGAEg");
	this.shape_12.setTransform(104.9,5.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00A7E0").s().p("AAdAyIgKgaIgkAAIgLAaIgUAAIAqhjIANAAIAqBjgAgLAGIAXAAIgMgcg");
	this.shape_13.setTransform(96.1,5.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00A7E0").s().p("AAOAyIgegsIAAAsIgTAAIAAhjIATAAIAAAsIAegsIAWAAIglAxIAlAyg");
	this.shape_14.setTransform(87.3,5.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00A7E0").s().p("AghAkQgPgOAAgWQAAgVAPgPQAPgPAVAAQAQAAALAIQANAIAGAPIgVAAQgFgHgGgDQgHgDgHAAQgNAAgKAKQgJAKAAANQAAAOAJAKQAKAKANAAQAHAAAHgDQAFgDAFgFIAVAAQgFAMgNAJQgNAIgOAAQgVAAgPgQg");
	this.shape_15.setTransform(77.6,5.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00A7E0").s().p("AgaAyIAAhjIA1AAIAAASIgiAAIAAAXIAgAAIAAARIggAAIAAAXIAiAAIAAASg");
	this.shape_16.setTransform(68.9,5.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00A7E0").s().p("AAQAyIAAgmIgQAAQgJAAgGgBQgGgCgDgDQgFgEgCgFQgCgFAAgJIAAggIASAAIAAAdIABAIIADAEQACACACABIAXAAIAAgsIASAAIAABjg");
	this.shape_17.setTransform(60.9,5.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00A7E0").s().p("AAWAyIAAhFIgrBFIgTAAIAAhjIATAAIAABFIArhFIATAAIAABjg");
	this.shape_18.setTransform(52,5.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00A7E0").s().p("AASAyIAAgqIgjAAIAAAqIgSAAIAAhjIASAAIAAAoIAjAAIAAgoIASAAIAABjg");
	this.shape_19.setTransform(42.4,5.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00A7E0").s().p("AgaAyIAAhjIA1AAIAAASIgiAAIAAAXIAgAAIAAARIggAAIAAAXIAiAAIAAASg");
	this.shape_20.setTransform(34.4,5.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00A7E0").s().p("AAWAyIAAhFIgrBFIgSAAIAAhjIASAAIAABFIArhFIATAAIAABjg");
	this.shape_21.setTransform(25.9,5.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00A7E0").s().p("AgYAyIAAhjIAxAAIAAASIgfAAIAABRg");
	this.shape_22.setTransform(18.4,5.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00A7E0").s().p("AAWAyIAAhFIgrBFIgTAAIAAhjIATAAIAABFIArhFIATAAIAABjg");
	this.shape_23.setTransform(10,5.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00A7E0").s().p("AgYAyIAAhjIAxAAIAAASIgfAAIAABRg");
	this.shape_24.setTransform(2.5,5.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4, new cjs.Rectangle(0,0,108.3,26.5), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("AgIAyIAAhRIgTAAIAAgSIA3AAIAAASIgTAAIAABRg");
	this.shape.setTransform(141.4,23.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A7E0").s().p("AgSAyIALgZIgmhKIAWAAIAZA0IAYg0IAUAAIguBjg");
	this.shape_1.setTransform(133.9,23.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00A7E0").s().p("AASAyIAAgqIgjAAIAAAqIgSAAIAAhjIASAAIAAAoIAjAAIAAgoIATAAIAABjg");
	this.shape_2.setTransform(124.6,23.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00A7E0").s().p("AAWAyIAAhFIgrBFIgTAAIAAhjIATAAIAABFIArhFIASAAIAABjg");
	this.shape_3.setTransform(115.1,23.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00A7E0").s().p("AAiAyIAAhKIgaBKIgPAAIgahKIAABKIgTAAIAAhjIAZAAIAbBLIAchLIAZAAIAABjg");
	this.shape_4.setTransform(103.9,23.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00A7E0").s().p("AAHAyIAAgPIgqAAIAAgPIAthFIAPAAIAABDIALAAIAAARIgLAAIAAAPgAgQASIAXAAIAAgkg");
	this.shape_5.setTransform(90.6,23.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00A7E0").s().p("AAIAyIAAhKIgTAaIgOgKIAfgpIAUAAIAABjg");
	this.shape_6.setTransform(82.8,23.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00A7E0").s().p("AgIAyIAAhRIgSAAIAAgSIA2AAIAAASIgSAAIAABRg");
	this.shape_7.setTransform(73.5,23.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00A7E0").s().p("AgkAlQgPgPgBgVQABgVAPgPQAPgQAVAAQAVAAAQAQQAQAPAAAVQAAAVgQAPQgPAPgWAAQgVAAgPgPgAgYgXQgJAKAAANQAAAOAJAKQAKAKAOAAQAOAAAKgKQAKgKAAgOQAAgNgKgKQgKgKgOAAQgNAAgLAKg");
	this.shape_8.setTransform(65.4,23.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00A7E0").s().p("AAWAyIAAhFIgrBFIgTAAIAAhjIATAAIAABFIArhFIATAAIAABjg");
	this.shape_9.setTransform(51.6,23.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00A7E0").s().p("AAOAyIgegsIAAAsIgTAAIAAhjIATAAIAAArIAegrIAWAAIglAxIAlAyg");
	this.shape_10.setTransform(42.8,23.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00A7E0").s().p("AgfAyIAAhjIAcAAQAQAAAKAJQAJAIAAAOQAAAOgJAIQgKAIgQAAIgJAAIAAAmgAgMgFIALAAQAHAAADgDQAEgDAAgHQAAgGgEgEQgDgDgHAAIgLAAg");
	this.shape_11.setTransform(34.8,23.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00A7E0").s().p("AAWAyIAAhFIgrBFIgTAAIAAhjIATAAIAABFIArhFIATAAIAABjg");
	this.shape_12.setTransform(25.8,23.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00A7E0").s().p("AgIAyIAAhRIgTAAIAAgSIA3AAIAAASIgTAAIAABRg");
	this.shape_13.setTransform(18,23.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00A7E0").s().p("AghAlQgPgPAAgWQAAgVAPgOQAPgQAVAAQAPAAAMAIQANAIAGAOIgVAAQgEgGgHgDQgGgDgIAAQgOAAgJAKQgKAKAAANQAAAOAKAKQAJAKAOAAQAGAAAIgDQAGgCAEgHIAVAAQgFANgNAJQgLAIgRAAQgUAAgPgPg");
	this.shape_14.setTransform(10,23.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00A7E0").s().p("AAWA+IAAhFIgrBFIgTAAIAAhjIATAAIAABGIArhGIATAAIAABjgAgQgvQgGgGgBgIIAPAAQAAADADACQACACADAAQAEAAACgCQACgCABgDIAPAAQgBAJgHAFQgGAFgKAAQgJAAgHgFg");
	this.shape_15.setTransform(148,6.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00A7E0").s().p("AglAlQgPgPAAgWQAAgUAPgQQAQgPAVAAQAWAAAPAPQAQAQgBAUQABAWgQAPQgPAPgWAAQgWAAgPgPgAgXgXQgKAKAAANQAAAPAKAJQAJAKAOAAQAOAAAKgKQAKgJAAgPQAAgNgKgKQgKgKgOAAQgOAAgJAKg");
	this.shape_16.setTransform(137.4,7.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00A7E0").s().p("AgfAyIAAhjIAcAAQAQAAAKAJQAJAIAAAOQAAAOgJAIQgKAIgQAAIgJAAIAAAmgAgMgFIALAAQAHAAADgDQAEgEAAgGQAAgGgEgEQgDgDgHAAIgLAAg");
	this.shape_17.setTransform(128.2,7.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00A7E0").s().p("AgIAyIAAhRIgTAAIAAgSIA3AAIAAASIgTAAIAABRg");
	this.shape_18.setTransform(121.3,7.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00A7E0").s().p("AghAlQgPgPAAgWQAAgVAPgPQAPgPAVAAQAOAAANAIQANAIAGAPIgVAAQgFgHgGgCQgHgEgHAAQgNAAgKAKQgJAKAAANQAAAPAJAJQAKAKANAAQAHAAAHgCQAFgEAFgFIAVAAQgFAMgNAJQgLAIgQAAQgVAAgPgPg");
	this.shape_19.setTransform(113.3,7.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00A7E0").s().p("AAdAyIAAhjIATAAIAABjgAgvAyIAAhjIATAAIAAAnIAPAAQAOAAAJAIQAJAHgBAOQAAAOgJAIQgJAJgNAAgAgcAgIAPAAQAHAAADgDQAEgEgBgGQAAgGgDgDQgEgEgGAAIgPAAg");
	this.shape_20.setTransform(102.4,7.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00A7E0").s().p("AghAyIAAhjIA6AAIAAASIgnAAIAAAVIAPAAQAQAAAJAIQAIAIAAANQAAAOgJAIQgKAJgOAAgAgOAgIAPAAQAHAAADgDQAEgEAAgGQAAgFgDgEQgDgDgIgBIgPAAg");
	this.shape_21.setTransform(92.9,7.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00A7E0").s().p("AAdAyIAAhjIASAAIAABjgAguAyIAAhjIASAAIAAAnIAPAAQAPAAAIAIQAJAHAAAOQAAAOgJAIQgKAJgNAAgAgcAgIAPAAQAHAAADgDQADgEAAgGQAAgFgDgEQgEgEgGAAIgPAAg");
	this.shape_22.setTransform(79.8,7.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00A7E0").s().p("AAiAyIAAhKIgaBKIgPAAIgahKIAABKIgTAAIAAhjIAZAAIAbBLIAchLIAZAAIAABjg");
	this.shape_23.setTransform(68,7.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00A7E0").s().p("AAiAyIAAhKIgaBKIgPAAIgahKIAABKIgTAAIAAhjIAZAAIAbBLIAchLIAZAAIAABjg");
	this.shape_24.setTransform(55.6,7.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00A7E0").s().p("AAdAyIgKgaIglAAIgKAaIgUAAIAqhjIANAAIAqBjgAgLAGIAXAAIgMgcg");
	this.shape_25.setTransform(44.4,7.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00A7E0").s().p("AgfAyIAAhjIAcAAQAQAAAKAJQAJAIAAAOQAAAOgJAIQgKAIgQAAIgJAAIAAAmgAgMgFIALAAQAHAAADgDQAEgEAAgGQAAgGgEgEQgDgDgHAAIgLAAg");
	this.shape_26.setTransform(37.1,7.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00A7E0").s().p("AgYAyIAAhjIAxAAIAAASIgeAAIAABRg");
	this.shape_27.setTransform(30.5,7.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00A7E0").s().p("AgkAlQgQgPABgWQAAgUAPgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAXgQAOQgPAPgWAAQgVAAgPgPgAgXgXQgKAKAAANQAAAPAKAJQAJAKAOAAQAOAAAKgKQAKgKAAgOQAAgNgKgKQgKgKgOAAQgNAAgKAKg");
	this.shape_28.setTransform(21.4,7.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00A7E0").s().p("AgfAyIAAhjIAcAAQAQAAAJAJQAKAIAAAOQAAAOgJAIQgKAIgQAAIgJAAIAAAmgAgMgFIALAAQAGAAAEgDQAEgEAAgGQAAgGgEgEQgEgDgGAAIgLAAg");
	this.shape_29.setTransform(12.3,7.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00A7E0").s().p("AASAyIAAhRIgjAAIAABRIgSAAIAAhjIBIAAIAABjg");
	this.shape_30.setTransform(3.7,7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(0,0,152.1,28.8), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("AASAyIAAgqIgjAAIAAAqIgSAAIAAhjIASAAIAAAoIAjAAIAAgoIASAAIAABjg");
	this.shape.setTransform(78.1,23.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A7E0").s().p("AAWA+IAAhFIgrBFIgTAAIAAhiIATAAIAABEIArhEIASAAIAABigAgQgvQgHgGAAgIIAQAAQgBAEADABQACACADAAQAEAAACgCQACgBABgEIAPAAQgBAIgGAGQgHAFgKAAQgJAAgHgFg");
	this.shape_1.setTransform(68.5,22.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00A7E0").s().p("AAcAyIgKgaIgkAAIgKAaIgUAAIAphjIAOAAIAqBjgAgLAGIAXAAIgMgcg");
	this.shape_2.setTransform(58.6,23.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00A7E0").s().p("AgYArQgKgJACgPIASAAQAAAHAEADQADAFAHAAQAIAAADgEQAEgDAAgGQAAgHgDgDQgEgEgGABIgJAAIAAgRIAHAAQAGAAADgDQADgEAAgEQAAgGgDgDQgDgEgFAAQgEAAgEADQgEADAAAEIgSAAQAAgLAIgJQAJgHANgBQANAAAIAIQAJAHAAANQAAAHgEAGQgEAGgHADQAJABAEAHQAFAGAAAJQAAAOgKAIQgJAHgPABQgOAAgKgJg");
	this.shape_3.setTransform(49.9,23.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00A7E0").s().p("AAWAyIAAhFIgrBFIgTAAIAAhjIATAAIAABFIArhFIATAAIAABjg");
	this.shape_4.setTransform(41,23.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00A7E0").s().p("AAkA7IAAgTIhHAAIAAATIgTAAIAAglIAKAAIAlhQIAPAAIAlBQIAJAAIAAAlgAgYAWIAxAAIgZg3g");
	this.shape_5.setTransform(30.6,24.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00A7E0").s().p("AAWA+IAAhFIgrBFIgTAAIAAhjIATAAIAABGIArhGIASAAIAABjgAgQgvQgHgGAAgIIAQAAQgBADADACQACACADAAQAEAAACgCQACgCABgDIAQAAQgCAJgGAFQgHAFgKAAQgJAAgHgFg");
	this.shape_6.setTransform(103.6,6.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00A7E0").s().p("AAdAyIAAhjIASAAIAABjgAguAyIAAhjIASAAIAAAnIAPAAQAPAAAIAIQAJAHAAAOQAAAOgJAIQgKAJgNAAgAgcAgIAPAAQAHAAADgDQADgEAAgGQAAgFgDgEQgEgEgGAAIgPAAg");
	this.shape_7.setTransform(93,7.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00A7E0").s().p("AASAyIAAgqIgjAAIAAAqIgTAAIAAhjIATAAIAAAoIAjAAIAAgoIASAAIAABjg");
	this.shape_8.setTransform(82.8,7.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00A7E0").s().p("AASAyIAAhRIgkAAIAABRIgSAAIAAhjIBJAAIAABjg");
	this.shape_9.setTransform(73.6,7.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00A7E0").s().p("AgZAyIAAhjIA0AAIAAASIgiAAIAAAXIAgAAIAAARIggAAIAAAXIAiAAIAAASg");
	this.shape_10.setTransform(65.6,7.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00A7E0").s().p("AAcAyIgchJIgaBJIgVAAIAohjIAPAAIAnBjg");
	this.shape_11.setTransform(57.2,7.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00A7E0").s().p("AgkAlQgQgPABgWQAAgUAPgQQAPgPAVAAQAWAAAPAPQAQAQAAAUQAAAWgQAPQgPAPgWAAQgVAAgPgPgAgXgXQgKAKAAANQAAAOAKAKQAJAKAOAAQAOAAAKgKQAKgKAAgOQAAgNgKgKQgKgKgOAAQgNAAgKAKg");
	this.shape_12.setTransform(46.7,7.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00A7E0").s().p("AAOAyIgegsIAAAsIgTAAIAAhjIATAAIAAArIAegrIAWAAIglAxIAlAyg");
	this.shape_13.setTransform(38,7.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00A7E0").s().p("AAWAyIAAhFIgrBFIgTAAIAAhjIATAAIAABFIArhFIASAAIAABjg");
	this.shape_14.setTransform(28.6,7.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00A7E0").s().p("AAcAyIgchJIgaBJIgVAAIAohjIAPAAIAoBjg");
	this.shape_15.setTransform(18.7,7.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00A7E0").s().p("AgaAyIAAhjIA1AAIAAASIgiAAIAAAXIAgAAIAAARIggAAIAAAXIAiAAIAAASg");
	this.shape_16.setTransform(10.5,7.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00A7E0").s().p("AgfAyIAAhjIAYAAQAPAAAKAHQAIAHAAAMQAAAHgDAFQgDAFgFACQAIADAFAGQAEAGAAAJQAAAOgKAIQgJAIgUAAgAgNAgIAMAAQAGAAAFgDQAEgEAAgGQAAgGgEgDQgDgDgIgBIgMAAgAgNgKIAJAAQAFAAADgDQAEgEAAgEQAAgFgEgCQgCgDgGAAIgJAAg");
	this.shape_17.setTransform(3.2,7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(0,0,107.7,30.5), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("AAdAyIAAhjIASAAIAABjgAguAyIAAhjIASAAIAAAnIAPAAQAOgBAJAJQAJAIAAANQAAAOgKAIQgJAJgNAAgAgcAgIAPAAQAHAAAEgDQACgEAAgGQAAgGgCgDQgFgDgGAAIgPAAg");
	this.shape.setTransform(164.2,21.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A7E0").s().p("AASAyIAAgqIgjAAIAAAqIgTAAIAAhjIATAAIAAAoIAjAAIAAgoIATAAIAABjg");
	this.shape_1.setTransform(154,21.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00A7E0").s().p("AAWAyIAAhFIgrBFIgTAAIAAhjIATAAIAABFIArhFIATAAIAABjg");
	this.shape_2.setTransform(144.4,21.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00A7E0").s().p("Ag5AyIAAhjIATAAIAABRIAeAAIAAhRIARAAIAABRIAfAAIAAhRIASAAIAABjg");
	this.shape_3.setTransform(132.7,21.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00A7E0").s().p("AAcAyIgKgaIgkAAIgKAaIgUAAIAphjIAOAAIAqBjgAgKAGIAVAAIgLgcg");
	this.shape_4.setTransform(121,21.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00A7E0").s().p("AAiAyIAAhKIgaBKIgPAAIgahKIAABKIgTAAIAAhjIAZAAIAbBMIAchMIAZAAIAABjg");
	this.shape_5.setTransform(109.8,21.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00A7E0").s().p("AgaAyIAAhjIA1AAIAAASIgiAAIAAAXIAgAAIAAARIggAAIAAAXIAiAAIAAASg");
	this.shape_6.setTransform(97.1,21.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00A7E0").s().p("AAdAyIAAhjIASAAIAABjgAguAyIAAhjIASAAIAAAnIAPAAQAOgBAJAJQAJAIAAANQAAANgJAJQgKAJgNAAgAgcAgIAPAAQAGAAAEgDQAEgEAAgGQgBgGgDgDQgEgDgGAAIgPAAg");
	this.shape_7.setTransform(87.9,21.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00A7E0").s().p("AASAyIAAgqIgjAAIAAAqIgSAAIAAhjIASAAIAAAoIAjAAIAAgoIASAAIAABjg");
	this.shape_8.setTransform(77.6,21.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00A7E0").s().p("AggAyIAAhjIATAAIAAAnIANAAQAPgBAJAJQAJAHAAAOQAAAOgJAIQgKAJgOAAgAgNAgIANAAQAHAAAEgDQADgDAAgHQAAgHgDgCQgEgDgHAAIgNAAg");
	this.shape_9.setTransform(69.5,21.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00A7E0").s().p("AAbAyIgbhJIgaBJIgUAAIAnhjIAPAAIAnBjg");
	this.shape_10.setTransform(60.4,21.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00A7E0").s().p("AAXAyIAAhFIgsBFIgSAAIAAhjIASAAIAABFIAshFIASAAIAABjg");
	this.shape_11.setTransform(50.6,21.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00A7E0").s().p("Ag5AyIAAhjIASAAIAABRIAeAAIAAhRIASAAIAABRIAfAAIAAhRIASAAIAABjg");
	this.shape_12.setTransform(38.9,21.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00A7E0").s().p("AgTAyIAMgZIgmhKIAXAAIAYA0IAYg0IAUAAIgtBjg");
	this.shape_13.setTransform(27.4,21.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00A7E0").s().p("AghAlQgPgPAAgWQAAgVAPgPQAPgPAVAAQAQAAAMAIQAMAIAGAPIgVAAQgFgGgGgEQgGgDgIAAQgNAAgKAKQgJAKAAANQAAAOAJAKQALAKANAAQAHAAAFgDQAFgCAGgGIAWAAQgGAMgMAJQgNAIgPAAQgVAAgPgPg");
	this.shape_14.setTransform(17.5,21.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00A7E0").s().p("AAWAyIAAhFIgrBFIgTAAIAAhjIATAAIAABFIArhFIATAAIAABjg");
	this.shape_15.setTransform(4.1,21.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00A7E0").s().p("AgaAyIAAhjIA1AAIAAASIgiAAIAAAXIAgAAIAAARIggAAIAAAXIAiAAIAAASg");
	this.shape_16.setTransform(147.2,5.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00A7E0").s().p("AAdAyIAAhjIASAAIAABjgAguAyIAAhjIASAAIAAAmIAPAAQAOAAAJAJQAJAHAAAPQAAAMgKAJQgJAJgNAAgAgcAgIAPAAQAGAAAFgDQACgEAAgFQAAgHgCgDQgFgDgGgBIgPAAg");
	this.shape_17.setTransform(138,5.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00A7E0").s().p("AASAyIAAgqIgjAAIAAAqIgTAAIAAhjIATAAIAAAoIAjAAIAAgoIATAAIAABjg");
	this.shape_18.setTransform(127.8,5.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00A7E0").s().p("AggAyIAAhjIASAAIAAAmIAPAAQAOAAAJAJQAJAHAAAPQAAAMgJAJQgJAJgOAAgAgOAgIAPAAQAGAAAEgDQAEgEAAgFQgBgIgDgCQgEgDgGgBIgPAAg");
	this.shape_19.setTransform(119.6,5.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00A7E0").s().p("AAbAyIgbhJIgbBJIgTAAIAnhjIAPAAIAnBjg");
	this.shape_20.setTransform(110.6,5.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00A7E0").s().p("AAdAyIgKgaIgkAAIgLAaIgUAAIAqhjIANAAIAqBjgAgLAGIAXAAIgMgcg");
	this.shape_21.setTransform(100.7,5.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00A7E0").s().p("AgfAyIAAhjIAcAAQARABAJAIQAJAIAAAOQAAAOgJAIQgJAIgRAAIgJAAIAAAmgAgMgFIALAAQAHAAADgDQAEgDAAgHQAAgHgEgDQgDgDgHAAIgLAAg");
	this.shape_22.setTransform(93.4,5.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00A7E0").s().p("AAWAyIAAhFIgrBFIgTAAIAAhjIATAAIAABFIArhFIATAAIAABjg");
	this.shape_23.setTransform(84.3,5.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00A7E0").s().p("AgIAyIAAhRIgTAAIAAgSIA3AAIAAASIgTAAIAABRg");
	this.shape_24.setTransform(76.5,5.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00A7E0").s().p("AghAkQgPgOAAgWQAAgVAPgPQAPgPAVAAQAQAAALAIQANAJAGAOIgVAAQgEgHgHgDQgHgDgHAAQgOAAgJAKQgKAJAAAOQAAAOAKAKQAKAKANAAQAHAAAHgDQAFgDAFgGIAVAAQgFANgNAJQgMAIgQAAQgTAAgQgQg");
	this.shape_25.setTransform(68.5,5.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00A7E0").s().p("AgaAyIAAhjIA1AAIAAASIgiAAIAAAXIAgAAIAAARIggAAIAAAXIAiAAIAAASg");
	this.shape_26.setTransform(56.6,5.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00A7E0").s().p("AAWAyIAAhFIgrBFIgTAAIAAhjIATAAIAABFIArhFIATAAIAABjg");
	this.shape_27.setTransform(48.1,5.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00A7E0").s().p("AAOAyIgegsIAAAsIgTAAIAAhjIATAAIAAAsIAegsIAWAAIglAxIAlAyg");
	this.shape_28.setTransform(39.2,5.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00A7E0").s().p("AgYAqQgJgIAAgPIATAAQAAAFAEAGQAEADAGAAQAHAAAEgDQAEgDAAgGQAAgGgEgEQgDgEgHAAIgIAAIAAgRIAHAAQAGAAADgCQADgEAAgFQAAgFgDgEQgDgCgGAAQgEAAgDACQgEADAAAEIgSAAQAAgMAIgHQAHgIAOAAQANgBAJAIQAIAIAAAMQAAAHgEAGQgEAGgGACQAJACAEAGQAFAHAAAJQAAANgKAIQgKAJgOgBQgOABgKgKg");
	this.shape_29.setTransform(31.1,5.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00A7E0").s().p("AgSAyIALgaIgmhJIAXAAIAZA0IAXg0IAUAAIgtBjg");
	this.shape_30.setTransform(23,5.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(0,0,169,26.5), null);


(lib.p5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p5, new cjs.Rectangle(0,0,600,270), null);


(lib.p4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sim();
	this.instance.parent = this;
	this.instance.setTransform(9,279);

	this.instance_1 = new lib._4();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.p4, new cjs.Rectangle(0,0,600,289), null);


(lib.p3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p3, new cjs.Rectangle(0,0,600,270), null);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2, new cjs.Rectangle(0,0,600,270), null);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1, new cjs.Rectangle(0,0,600,270), null);


// stage content:
(lib._600x500 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Eguygm+MBdlAAAMAAABN9MhdlAAAg");
	this.shape.setTransform(300,250);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(306));

	// t5
	this.instance = new lib.t5();
	this.instance.parent = this;
	this.instance.setTransform(208.7,417.4,1.8,1.8,0,0,0,69.4,14.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(240).to({_off:false},0).to({scaleX:2,scaleY:2,x:208.6,alpha:1},7,cjs.Ease.get(1)).wait(51).to({scaleX:1.8,scaleY:1.8,x:208.7,alpha:0},7,cjs.Ease.get(1)).wait(1));

	// t4
	this.instance_1 = new lib.t4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(238.7,419.5,1.8,1.8,0,0,0,70,14.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(180).to({_off:false},0).to({regX:69.9,scaleX:2,scaleY:2,x:241.7,y:419.7,alpha:1},7,cjs.Ease.get(1)).wait(51).to({regX:70,scaleX:1.8,scaleY:1.8,x:238.7,y:419.5,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(60));

	// t3
	this.instance_2 = new lib.t3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(238,416.5,1.8,1.8,0,0,0,91.5,14.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(120).to({_off:false},0).to({scaleX:2,scaleY:2,x:241.1,y:416.4,alpha:1},7,cjs.Ease.get(1)).wait(51).to({scaleX:1.8,scaleY:1.8,x:238,y:416.5,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(120));

	// t2
	this.instance_3 = new lib.t2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(220.5,414.6,1.8,1.8,0,0,0,59.6,14);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60).to({_off:false},0).to({scaleX:2,scaleY:2,x:221.7,y:414.4,alpha:1},7,cjs.Ease.get(1)).wait(51).to({scaleX:1.8,scaleY:1.8,x:220.5,y:414.6,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(180));

	// t1
	this.instance_4 = new lib.t1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(174,416.1,1.8,1.8,0,0,0,64.4,12.8);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:64.3,scaleX:2,scaleY:2,x:169.8,y:415.9,alpha:1},7,cjs.Ease.get(1)).wait(51).to({regX:64.4,scaleX:1.8,scaleY:1.8,x:174,y:416.1,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(240));

	// 5.jpg
	this.instance_5 = new lib.p5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(160,147.5,1,1,0,0,0,150,67.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(240).to({_off:false},0).to({x:150,alpha:1},7,cjs.Ease.get(1)).wait(51).to({x:140,alpha:0},7,cjs.Ease.get(1)).wait(1));

	// 4.jpg
	this.instance_6 = new lib.p4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(160,147.5,1,1,0,0,0,150,67.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(180).to({_off:false},0).to({x:150,alpha:1},7,cjs.Ease.get(1)).wait(51).to({x:140,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(60));

	// 3.jpg
	this.instance_7 = new lib.p3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(160,147.5,1,1,0,0,0,150,67.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(120).to({_off:false},0).to({x:150,alpha:1},7,cjs.Ease.get(1)).wait(51).to({x:140,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(120));

	// 2.jpg
	this.instance_8 = new lib.p2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(160,147.5,1,1,0,0,0,150,67.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(60).to({_off:false},0).to({x:150,alpha:1},7,cjs.Ease.get(1)).wait(51).to({x:140,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(180));

	// 1.jpg
	this.instance_9 = new lib.p1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(160,147.5,1,1,0,0,0,150,67.5);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:150,alpha:1},7,cjs.Ease.get(1)).wait(51).to({x:140,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(240));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A7E0").s().p("Am7A/QgggdASgqQASgnA0gWQA8gZBfAAQAVAAATACIAZAEIALACIgOAZQgegJgZAAQgxAAgoAOQg1ATgJAmQgEAXAQAUQAWAaAugCQAPgBAcgJQAigMAUgQIAxgpIAJgGQAHgDAHAAIA0AAIAQBHIAhhGIA5AAIAhA2IAZg2IA0AAIguBjIg2AAIgig6IgaA6IghAAIAAABIg+AAIgCgSIg5AAIgTAQIgkAAQgrAQg4AAQhRAAgjgggAiXArIAhgBIgDgcgAEqBaIAhgiIgihLIA0AAIAOAoIArgpIA6AAIhlBlQgFAFgEABIgMADgADCBQIhVAAIAuhjIBVAAQAoAAAPATQAMAPgJAUQgJATgVALQgcAPgrAAIgDAAgACxA3IAPAAQARAAAOgEQAVgHAEgQQAGgXgoAAIgPAAg");
	this.shape_1.setTransform(309.3,38.2,2,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#737373").s().p("AgEATIgDgCIgDgEIgCgDIAEgCIACABIAAACIACACIACABIACABIAEgBIACgBIABgDIABgCIgBgDQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgDgCIgEAAIAAgCIAEgBIACgCIACgCIAAgCIAAgDIgCgCIgBgBIgDgBIgCABIgCABIgBACIgBACIgBACIgCAAIgDgBIACgFIADgDIADgCIAEAAIAEAAIAEACIADADIAAAEIAAADIgBADIgDACIgDABQAEAAACACQACACAAAEIgBAEIgCAFIgFACIgFAAg");
	this.shape_2.setTransform(571.6,481.4,2,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#737373").s().p("AgEATIgFgCIgCgBIABgDIACgBIABABIAEABIADABIACgBIADgCIACgCIAAgEIAAgDIgCgCIgCgBIgDAAIgGAAIgDAAIADgSIARAAIAAACIgBABIgCABIgLAAIgBAKIAEgBIAFABIAEADIADACIAAAFIgBAFIgDAFQgBACgDABIgFAAg");
	this.shape_3.setTransform(565.5,481.4,2,2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#737373").s().p("AAEATIAAgKIgQAAIgBgBIAAgCIARgYIAFAAIAAAXIAFAAIAAAEIgBAAIgEAAIAAAKgAgIAFIAMAAIAAgPIABgCg");
	this.shape_4.setTransform(559.3,481.4,2,2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#737373").s().p("AgFASQgCAAgCgEQgCgCgBgDIgBgJIABgIIADgGQACgDACAAIAFgBIAFABQADAAACADQACADABADIABAIIgBAJQgBADgCACQgCAEgDAAQgCABgDAAIgFgBgAgCgOIgDADIgCAEIgBAHIABAHIACAFIADACIACABIADgBIADgCIACgFIABgHIgBgHIgCgEIgDgDIgDgBg");
	this.shape_5.setTransform(553.2,481.4,2,2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#737373").s().p("AgIATIAQggIgSAAIgCgBIAAgBIAAgDIAZAAIAAAEIgPAfIgBACIgCAAg");
	this.shape_6.setTransform(547,481.4,2,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#737373").s().p("AgEASQgDAAgCgEIgDgFIgBgJIABgIIADgGQACgDADAAIAEgBIAFABIAFADIADAGQABAEAAAEQAAAFgBAEIgDAFIgFAEIgFABQgCAAgCgBgAgDgOIgCADIgCAEIgBAHIABAHIACAFIACACIADABIADgBIADgCIACgFIAAgHIAAgHIgCgEIgDgDIgDgBg");
	this.shape_7.setTransform(540.8,481.4,2,2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#737373").s().p("AgEATIgFgDIgCgFIgBgFIABgFIAEgFIAIgNIABgBIACAAIAEAAIgKAOIgBABIgBACIADgCIADgBIAEABIAEADIACACIABAFIgBAFIgDAEIgEADIgFAAgAgCAAIgDABIgCADIAAADIAAADIACADIACABIADABIADgBIADgBIABgDIABgDIgBgDIgBgDQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAAAgBAAIgDAAg");
	this.shape_8.setTransform(534.7,481.4,2,2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#737373").s().p("AgHATIAMgSIgDACIgDABIgEgBIgEgCIgCgDIgBgEIABgFIADgEIAEgDIAEAAIAFAAIAEADIADAEIABAFIgBADIgBADIgDAFIgJANIgBABIgBAAgAgCgOIgCACIgCACIAAADQAAAEACACQABABADAAIADAAIACgCIACgCIAAgDIAAgDIgCgCIgCgCIgDAAg");
	this.shape_9.setTransform(528.4,481.4,2,2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#737373").s().p("AgIATIAOgeIACgCIgTAAIgBgBIAAgBIAAgDIAZAAIAAAEIgPAfIgBACIgCAAg");
	this.shape_10.setTransform(522.3,481.4,2,2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#737373").s().p("AgJATIARggIgSAAIgBgBIgBgBIAAgDIAZAAIAAAEIgPAfIgBACIgCAAg");
	this.shape_11.setTransform(516.1,481.4,2,2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#737373").s().p("AAEATIAAgKIgPAAIgBAAIgBgBIAAgCIARgYIAEAAIAAAXIAHAAIAAADIgBABIgBAAIgFAAIAAAKgAgIAFIAMAAIAAgOIABgBIAAgCg");
	this.shape_12.setTransform(509.8,481.4,2,2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#737373").s().p("AgEASQgDAAgCgEIgDgFIgBgJIABgIIADgGQACgDADAAIAEgBIAGABIAEADIADAGQABAEAAAEQAAAFgBAEIgDAFIgEAEIgGABQgCAAgCgBgAgCgOIgDADIgCAEIgBAHIABAHIACAFIADACIACABIADgBIADgCIACgFIAAgHIAAgHIgCgEIgDgDIgDgBg");
	this.shape_13.setTransform(503.7,481.4,2,2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#737373").s().p("AgIATIAAgEIAIAAIAAgYIAAgCIgHAFIAAABIgBAAIgBgBIAAAAIgBgCIAKgKIAEAAIAAAhIAHAAIAAAEg");
	this.shape_14.setTransform(497.6,481.4,2,2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#737373").s().p("AAKATIAAgRIgTAAIAAARIgGAAIAAglIAGAAIAAARIATAAIAAgRIAGAAIAAAlg");
	this.shape_15.setTransform(487.6,481.4,2,2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#737373").s().p("AgMATIAAglIAMAAIAFABQACAAACACIADAEIABAFIgBAFIgDADQgCACgCAAIgFABIgGAAIAAAOgAgGABIAGAAIACgBIADAAIACgDIAAgDIAAgDIgCgDIgDgBIgCgBIgGAAg");
	this.shape_16.setTransform(480.7,481.4,2,2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#737373").s().p("AgLATIAAglIAXAAIAAAEIgRAAIAAAhg");
	this.shape_17.setTransform(474.6,481.4,2,2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#737373").s().p("AgHASIgGgEQgCgCgCgEQgBgEAAgEIABgHQACgFACgBQADgDADgBIAHgBIAIABQADABACADQADABACAFIABAHQAAAEgBAEQgCAEgDACIgFAEQgDABgFAAQgEAAgDgBgAgFgNIgDADIgDAEIgCAGIACAGQABADACABIADADIAFABIAGgBIADgDIADgEIABgGIgBgGIgDgEIgDgDIgGgBg");
	this.shape_18.setTransform(467.1,481.4,2,2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#737373").s().p("AgEATIgFgCIgCgBIABgDIACgBIABABIACAAIACABIADABIACgBIADgCIACgCIAAgEIAAgDIgCgCIgCgBIgDAAIgGAAIgDAAIADgSIARAAIAAACIAAABIgDABIgLAAIgBAKIAEgBIAFABIAEADIADACIAAAFIgBAFIgDAFIgEADIgEAAg");
	this.shape_19.setTransform(457,481.4,2,2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#737373").s().p("AgIATIAAgEIAIAAIAAgaIgHAFIAAABIgBAAIgBgBIgBgCIAKgKIAEAAIAAAhIAHAAIAAAEg");
	this.shape_20.setTransform(450.9,481.4,2,2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#737373").s().p("AgEASQgDAAgCgEQgCgCgBgDIgBgJIABgIIADgGQACgDADAAIAEgBIAGABQACAAACADQACADABADIABAIIgBAJQgBADgCACQgCAEgCAAIgGABQgCAAgCgBgAgCgOIgDADIgCAEIgBAHIABAHIACAFIADACIACABIADgBIADgCIACgFIABgHIgBgHIgCgEIgDgDIgDgBg");
	this.shape_21.setTransform(444.7,481.4,2,2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#737373").s().p("AgMATIAAgDIAMgNIAFgFIABgDIABgDIgBgCIgBgDIgCgBIgDAAIgBAAIgDABIgBACIgBACIgBACIgBAAIgDgBIABgEIADgEIAEgCIADAAIAFAAIAEACIACAEIABAEIgBAEIgBAEIgPAPIAFgBIALAAIABABIABABIAAADg");
	this.shape_22.setTransform(438.5,481.4,2,2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#737373").s().p("AgIATIAAgEIAIAAIAAgYIAAgCIgGAFIgBABIAAAAIgBgBIAAAAIgDgCIALgKIAEAAIAAAhIAIAAIAAAEg");
	this.shape_23.setTransform(432.3,481.4,2,2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#737373").s().p("AgEATIgFgCIgCgBIABgDIACgBIABABIAEABIADABIACgBIADgCIACgCIAAgEIAAgDIgCgCIgCgBIgDAAIgGAAIgDAAIADgSIARAAIAAACIgBABIgCABIgLAAIgBAKIAEgBIAFABIAEADIADACIAAAFIgBAFIgDAFQgBACgDABIgFAAg");
	this.shape_24.setTransform(426.1,481.4,2,2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#737373").s().p("AAFATIAAgKIgQAAIgBAAIgBgBIAAgCIASgYIAEAAIAAAXIAGAAIAAAEIgBAAIgFAAIAAAKgAgIAFIANAAIAAgPIAAgCg");
	this.shape_25.setTransform(419.8,481.4,2,2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#737373").s().p("AgFASQgCAAgCgEQgCgCgBgDIgBgJIABgIIADgGQACgDACAAIAFgBIAFABQADAAACADQACADABADIABAIIgBAJQgBADgCACQgCAEgDAAQgCABgDAAIgFgBgAgCgOIgDADIgCAEIgBAHIABAHIACAFIADACIACABIADgBIADgCIACgFIABgHIgBgHIgCgEIgDgDIgDgBg");
	this.shape_26.setTransform(413.8,481.4,2,2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#737373").s().p("AgJATIARggIgTAAIgBgBIAAgBIAAgDIAZAAIAAAEIgPAfIgBACIgCAAg");
	this.shape_27.setTransform(407.6,481.4,2,2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#737373").s().p("AgJATIARggIgTAAIgBgBIAAgBIAAgDIAZAAIAAACIAAACIgPAfIgBACIgCAAg");
	this.shape_28.setTransform(401.5,481.4,2,2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#737373").s().p("AAKATIAAgRIgTAAIAAARIgGAAIAAglIAGAAIAAARIATAAIAAgRIAGAAIAAAlg");
	this.shape_29.setTransform(391.5,481.4,2,2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#737373").s().p("AAKATIAAgRIgTAAIAAARIgGAAIAAglIAGAAIAAARIATAAIAAgRIAGAAIAAAlg");
	this.shape_30.setTransform(383.4,481.4,2,2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#737373").s().p("AAKATIAAgcIABgDIgDAFIgRAaIgCAAIgDAAIAAglIAFAAIAAAcIgBADIABgDIASgaIABgBIACgBIADAAIAAAlg");
	this.shape_31.setTransform(375.2,481.4,2,2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#737373").s().p("AgEATIgFgCIgCgEIgBgEQAAgEACgDQADgCADAAQgDAAgCgEQgBgCgBgCIABgFIACgDIAFgCIADAAIAFAAIADACIADADIABAFQAAACgCACQgCAEgDAAQAEAAACACQACADAAAEIgBAEIgDAEIgEACIgFAAgAgCABIgCACIgCACIAAAEIAAACQAAABAAAAQAAAAAAABQABAAAAAAQAAAAABAAIACACIACABIAEgBIACgCIABgCIABgCIgBgEIgCgCIgCgCIgDAAgAgCgPIgCACIgBACIAAADIAAACIABACIACABIACABIADgBIACgBIABgCIABgCIgBgDIgBgCIgCgCIgDAAg");
	this.shape_32.setTransform(365.3,481.4,2,2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#737373").s().p("AgBADIgBAAIgBgBIAAgDIACgCIACAAIACABIAAABIABABIgBACIAAABIgCAAIgBAAg");
	this.shape_33.setTransform(358.3,484.6,2,2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#737373").s().p("AALASIAAgJIgVAAIAAAJIgFAAIAAgMIABAAIACgBIACgCIABgCIACgDIACgPIAQAAIAAAWIAFAAIAAAMIgBABgAgDAAIgBACIgCAEIAMAAIAAgTIgHAAg");
	this.shape_34.setTransform(353.7,483.4,2,2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#737373").s().p("AgCAGIAAgBIABgBIABgBIAAgCIAAgBIAAAAIgBAAIgBgBIAAgCIABgCIABgBIACAAIABABIAAACIAAADIgBACIgDAFg");
	this.shape_35.setTransform(346.5,485.3,2,2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#737373").s().p("AAHATIAAgTIgCACIgLAQIAAABIgBAAIgEAAIAAgaIAGAAIAAARIgBABIAAABIABgBIABgBIALgQIACgBIADAAIAAAagAgCgLIgCgBQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAgDIAAgBIABAAIADAAIAAACIAAACIACABIACgBIABAAIABgCIAAgCIADAAIABAAIAAABIAAADIgCACIgCABIgEAAg");
	this.shape_36.setTransform(342.2,481.4,2,2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#737373").s().p("AgFACIAAgDIALAAIAAADg");
	this.shape_37.setTransform(337.1,482,2,2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#737373").s().p("AgMATIAAgCIABgCIALgMIAFgFIABgDIABgDIgBgCIgBgDIgCgBIgDAAIgCAAIgBABIgCACIgBACIgBACIgCAAIgCgBIABgEIADgEIAEgCIADAAIAFAAIAEACIACAEIABAEIAAAEIgCAEIgOAPIADgBIAMAAIACABIAAABIAAADg");
	this.shape_38.setTransform(332,481.4,2,2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#737373").s().p("AAHATIAAgTIgCACIgLAQIAAABIgCAAIgDAAIAAgaIAFAAIAAATIABgBIABgBIALgQIACgBIADAAIAAAagAgCgLIgCgBQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAgDIAAgBIABAAIADAAIAAACIAAACIACABIACgBIABAAIABgCIAAgCIADAAIABAAIAAABIAAADIgCACIgCABIgEAAg");
	this.shape_39.setTransform(323.2,481.4,2,2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#737373").s().p("AAGANIAAgRIABgBIAAgBIgCADIgLAPIgBABIgBAAIgDAAIAAgaIAFAAIAAAUIABgCIABgBIADgEIABgDIAHgIIAAgBIABgBIAEAAIAAAag");
	this.shape_40.setTransform(317.1,482.5,2,2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#737373").s().p("AAIANIgCAAIgBgCIgFgIQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAIgCgBIgDAAIAAAMIgFAAIAAgaIAFAAIAAAMIADAAIACAAIABgCIAFgIIABgBIABgBIAEAAIgIANIgCAAIACAAIACACIAHALg");
	this.shape_41.setTransform(311.5,482.5,2,2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#737373").s().p("AgDANIgDgDIgDgEIgBgGIABgFQAAgCADgCIADgDIAFgBIAFABIAEADIgCABIAAABIgBAAIgDgCIgDAAIgCABIgDABIgBADIAAAEIAAAEQAAABAAAAQAAAAAAABQABAAAAABQAAAAAAABIADABIACABIADgBIADgBIABAAIABAAIABABIgCACIgDACIgFABg");
	this.shape_42.setTransform(305.9,482.5,2,2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#737373").s().p("AAGANIAAgMIgLAAIAAAMIgFAAIAAgaIAFAAIAAALIALAAIAAgLIAGAAIAAAag");
	this.shape_43.setTransform(300.3,482.5,2,2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#737373").s().p("AAGANIAAgSIABgBIgBACIgBABIgBACIgCABIgIAMIAAABIgCAAIgDAAIAAgaIAGAAIAAATIgBABIABgCIABgBIABgCIACgCIABgDIAHgIIAAgBIABgBIAEAAIAAAag");
	this.shape_44.setTransform(294.2,482.5,2,2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#737373").s().p("AAQASIAAgJIgkAAIAAgaIAFAAIAAAWIALAAIAAgWIAEAAIAAAWIALAAIAAgWIAFAAIAAAWIAFAAIAAAMIgBABg");
	this.shape_45.setTransform(286.8,483.4,2,2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#737373").s().p("AgEANIgEgDIgDgEIgBgGIABgFIADgEIAEgDIAEgBIAFABIAEADIADAEIABAFIgBAGIgDAEIgEADIgFABgAgFgHQgCADAAAEQAAAFACADQACACADAAQAEAAACgCQACgDAAgFQAAgEgCgDQgCgCgEAAQgDAAgCACg");
	this.shape_46.setTransform(278.9,482.5,2,2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#737373").s().p("AgMATIAAglIAMAAIAFABQADAAACACIACAEIABAFIgBAFIgCADIgFACIgFABIgGAAIAAAOgAgGABIAGAAIACgBIADAAIACgDIABgDIgBgDIgCgDIgDgBIgCgBIgGAAg");
	this.shape_47.setTransform(273.2,481.4,2,2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#737373").s().p("AALASIAAgJIgVAAIAAAIIgBABIgEAAIAAgMIABAAIACgBIACgCIABgCIACgDIABgPIARAAIAAAWIAFAAIAAAMIgBABgAgDAAIgDAGIAMAAIAAgTIgIAAg");
	this.shape_48.setTransform(263.7,483.4,2,2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#737373").s().p("AgFANIgEgEIABgBIABAAIABAAIACABIACAAIACABIACgBIACAAIABgCIAAgBQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgEgBIgDAAIAAgCIADAAQAAAAAAgBQABAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAQABAAAAAAQAAgBAAAAQAAgBAAgBIAAgBIgBgBIgCgBIgEAAIgEACIgBgBIgBgCIADgCIAFgBIAEAAIADACIACADIABACIgBAEIgCABIgCABIAEABQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABIgBADIgCACIgDACIgEABg");
	this.shape_49.setTransform(257.9,482.5,2,2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#737373").s().p("AgDANIgFgDIgDgEIAAgGIAAgFIADgEIAEgDIAEgBIAFABIADACIADAEIABAFIAAABIgBAAIgRAAIABAEIABAEIADABIACABIADgBIACAAIACgBIABAAIABAAIACABIgDACIgDACIgGABgAgDgIIgDAGIANAAIAAgDIgCgDIgBgBIgEAAQgCAAgBABg");
	this.shape_50.setTransform(252.8,482.5,2,2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#737373").s().p("AgFANIgDgDQgDgCAAgCIgBgGIABgFIADgEIADgDIAFgBIAFABIAFADIACAEIABAFIgBAGQgBACgBACIgFADIgFABgAgFgHQgCAEAAADQAAADACAFQADACACAAQADAAADgCQABgDAAgFQAAgEgBgDQgDgCgDAAQgCAAgDACg");
	this.shape_51.setTransform(246.9,482.5,2,2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#737373").s().p("AgLASIAAgjIADAAQAAAAABAAQAAAAAAAAQAAABAAAAQABAAAAAAIAAADIAEgDIAEgBIAEABIAEACIABAFIABAFIgBAFIgCAFIgEACQgCACgCAAIgEgBIgDgDIAAAMgAgDgMQAAAAAAAAQgBAAAAABQgBAAAAABQgBAAAAABIAAAMIADACIADABQADAAACgDQACgCAAgFIAAgEIgCgDIgCgCIgCAAIgEABg");
	this.shape_52.setTransform(241,483.4,2,2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#737373").s().p("AAJATIAAghIgRAAIAAAhIgGAAIAAglIAdAAIAAAlg");
	this.shape_53.setTransform(234.1,481.4,2,2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#737373").s().p("AgCAGIAAgBIAAAAIABgBIABgBIAAgDIgBAAIgBAAIAAgBIgBgCIABgCIACgBIACAAIABABIAAADIAAACIgBACIgBADIgCACg");
	this.shape_54.setTransform(226.2,485.3,2,2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#737373").s().p("AgFANIgDgBIgBgCIgBgDIABgEIADgCIAFgBIAHgBIAAgCQAAgBAAAAQAAgBgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAgBAAQgBAAAAAAIgCABIgCAAIgCABIgBABIgBgBIgBAAIgBgCIAFgDIAFgBIAEAAIADADIACADIABAEIAAAQIgDAAIgBAAIAAgBIgBgCIgEADIgEABgAAAACIgCABIgCABIgBADIAAABIABABIADABIACAAIABgBIACAAIACgCIAAgGg");
	this.shape_55.setTransform(222.2,482.5,2,2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#737373").s().p("AgJANIAAgaIAJAAIAEABQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIACACIAAACIgBAEIgBABIgDABIAFABQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABIAAADIgDACIgDACIgEAAgAgFAKIAFAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABgBAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAIgBgDIAAgBIgCgBIgDAAIgFAAgAgFgBIAFAAIADgBIABgCIABgCIAAgBIgBgBIgCgBIgHAAg");
	this.shape_56.setTransform(217.2,482.5,2,2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#737373").s().p("AAIANIgCAAIgBgCIgFgIQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAIgCgBIgDAAIAAAMIgFAAIAAgaIAFAAIAAAMIADAAIACAAIABgCIAFgIIABgBIABgBIAEAAIgIANIgCAAIACAAIACACIAHALg");
	this.shape_57.setTransform(211.9,482.5,2,2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#737373").s().p("AgCANIgFgDIgCgEIgBgGIABgFQAAgCACgCIAFgDIAEgBIAFABIAEADIgCABIAAABIAAAAIgEgCIgDAAIgCABIgCABIgCADIgBAEIABAEQAAABAAAAQAAAAAAABQABAAAAABQAAAAABABIACABIACABIADgBIADgBIABAAIABAAIABABIgCACIgCACIgGABg");
	this.shape_58.setTransform(206.3,482.5,2,2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#737373").s().p("AgFANIgDgDIgDgEIgBgGIABgFIADgEIADgDIAFgBIAFABIAEADIADAEIABAFIgBAGQAAACgDACIgEADIgFABgAgFgHQgCADAAAEQAAAFACADQACACADAAQAEAAACgCQACgDAAgFQAAgEgCgDQgCgCgEAAQgDAAgCACg");
	this.shape_59.setTransform(200.7,482.5,2,2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#737373").s().p("AAQATIAAgdIgOAYIgCAAIgBgBIgNgXIAAAdIgFAAIAAglIAEAAIABAAIABABIANAZIABgDIANgWIACgBIAEAAIAAAlg");
	this.shape_60.setTransform(192.8,481.4,2,2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#737373").s().p("AgBADIgBAAIAAgBIgBgCIABgBIAAgBIABgBIADAAIABABIAAABIAAABIAAACIAAABIgBAAIgCAAg");
	this.shape_61.setTransform(183.9,484.6,2,2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#737373").s().p("AgIANIAAgaIARAAIAAAEIgMAAIAAAWg");
	this.shape_62.setTransform(181.4,482.5,2,2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#737373").s().p("AgCAGIAAgBIAAAAIABgBIABgBIAAgDIgBAAIgBAAIAAgBIgBgCIABgCIACgBIACAAIABABIAAADIAAACIgBACIgBADIgCACg");
	this.shape_63.setTransform(174.9,485.3,2,2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#737373").s().p("AgHATIANgSIgEACIgDABIgDgBIgEgCIgCgDIgBgEIABgFIACgEIAFgDIADAAIAGAAIADADIADAEIABAIIgCADIgLASIgBABIgBAAgAgCgOIgCACIgCACIAAADQAAAEACACQABABADAAIAEAAIACgCIACgCIAAgDIAAgDIgCgCIgCgCIgEAAg");
	this.shape_64.setTransform(170.5,481.4,2,2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#737373").s().p("AgIATIAAgEIAIAAIAAgaIgGAFIgBABIgBAAIgBgBIgBgCIAKgKIAEAAIAAAhIAHAAIAAAEg");
	this.shape_65.setTransform(164.5,481.4,2,2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#737373").s().p("AAFATIAAgKIgQAAIgBAAIgBgBIAAgCIARgYIAFAAIAAAXIAGAAIAAAEIgBAAIgFAAIAAAKgAgIAFIANAAIAAgPIAAgCg");
	this.shape_66.setTransform(158.1,481.4,2,2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#737373").s().p("AgEATIgFgCIgCgBIABgDIACgBIABABIACAAIACABIADABIACgBIADgCIACgCIAAgEIAAgDIgCgCIgCgBIgDAAIgGAAIgDAAIADgSIARAAIAAACIAAABIgDABIgKAAIgCAKIAEgBIAFABIAEADIADACIAAAFIgBAFIgDAFIgEADIgEAAg");
	this.shape_67.setTransform(152,481.4,2,2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#737373").s().p("AgIATIAAgEIAIAAIAAgaIgGAFIgBABIgBAAIgBgBIgCgCIALgKIAEAAIAAAhIAIAAIAAAEg");
	this.shape_68.setTransform(145.9,481.4,2,2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#737373").s().p("AgIATIAAgEIAIAAIAAgaIgHAFIAAABIgBAAIgBgBIgBgCIAKgKIAEAAIAAAhIAHAAIAAAEg");
	this.shape_69.setTransform(139.7,481.4,2,2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#737373").s().p("AAAAKIAAgBIAAgBIAEgHIAAgBIABAAIgBAAIgEgHIAAgBIAAgBIACgBIAHAKIAAAAIgHALgAgHAKIgBgBIABgBIAEgHIAAgBIABAAIgBAAIgEgHIgBgBIABgBIACgBIAGAKIAAAAIgGALg");
	this.shape_70.setTransform(131.7,482.4,2,2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#737373").s().p("AAAADIgBAAIgBgBIAAgCIAAgBIABgBIABgBIABAAIABABIABABIAAABIAAACIgBABIgBAAIgBAAg");
	this.shape_71.setTransform(128,484.6,2,2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#737373").s().p("AgKATIAAglIAVAAIAAAEIgQAAIAAAhg");
	this.shape_72.setTransform(125.3,481.4,2,2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#737373").s().p("AAAADIgBAAIgBgBIAAgCIAAgBIABgBIABgBIABAAIABABIABABIAAABIAAACIgBABIgBAAIgBAAg");
	this.shape_73.setTransform(120.8,484.6,2,2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#737373").s().p("AAKATIAAgRIgTAAIAAARIgGAAIAAglIAGAAIAAARIATAAIAAgRIAGAAIAAAlg");
	this.shape_74.setTransform(115.5,481.4,2,2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#737373").s().p("AAAADIgCAAIAAgBIgBgCIABgBIAAgBIACgBIACAAIACACIAAADIgBABIgBAAIgCAAg");
	this.shape_75.setTransform(110.1,484.6,2,2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#737373").s().p("AgEASIgGgEIgEgGQgBgEAAgEIABgHIAEgHIAGgDIAHgBIAHABIAFADIgBACIgBABIgBABIgBgBIgBgCIgDgBIgEAAIgFABIgEADIgCAEIgBAGIABAGQAAACACACIAEADIAFABIADAAIACAAIACgBIACgCIABAAIABAAIACACIgGAFQgDABgFAAQgDAAgDgBg");
	this.shape_76.setTransform(105.5,481.4,2,2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#737373").s().p("AAKATIAAgfIgCAFIgRAaIgBAAIgFAAIAAglIAGAAIAAAaIAAACIAAADIABgDIARgaIABgBIACgBIAEAAIAAAlg");
	this.shape_77.setTransform(95,481.4,2,2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#737373").s().p("AAPAYIAAgJIgdAAIAAAHIAAACIgFAAIAAgOIAEAAIACgBIABgCIACgFIABgFIABgUIAWAAIAAAhIAGAAIAAAMIAAACgAgDgHIgCAHIgCAGIgCAEIASAAIAAgcIgMAAg");
	this.shape_78.setTransform(86.6,482.3,2,2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#737373").s().p("AAKATIAAgRIgTAAIAAARIgFAAIAAglIAFAAIAAARIATAAIAAgRIAFAAIAAAlg");
	this.shape_79.setTransform(78.4,481.4,2,2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#737373").s().p("AAOATIgCAAIAAgBIgDgJIgQAAIgEAJIgBABIgBAAIgEAAIAPglIAFAAIAPAlgAAAgJIgGAOIANAAIgGgQIgBgCg");
	this.shape_80.setTransform(70.7,481.4,2,2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#737373").s().p("AAKATIgBAAIgBgCIgJgNIgBgCIgCAAIgFAAIAAARIgFAAIAAglIAFAAIAAARIAEAAIABgBIABAAIABAAIABgBIAJgPIACAAIAEAAIgLAQIgDACIACAAIACADIALAQg");
	this.shape_81.setTransform(64,481.4,2,2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#737373").s().p("AAAAAIAAAAIAGgKIACABIAAABIAAABIgDAHIgBAAIABABIADAHIAAABIAAABIgCABgAgIAAIAAAAIAHgKIABABIAAABIAAABIgDAHIAAAAIAAABIADAHIAAABIAAABIgBABg");
	this.shape_82.setTransform(57.5,482.4,2,2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#737373").s().p("AgHASIgFgEQgDgCgCgEQgBgEAAgEIABgHQACgFADgBQACgDADgBIAHgBIAIABIAGAEIADAGIACAHQAAAEgCAEIgDAGIgGAEQgEABgEAAQgEAAgDgBgAgEgNIgFADIgCAEIgBAGIABAGIACAEIAFADIAEABIAGgBIADgDQADgBABgDIABgGIgBgGIgEgEIgDgDIgGgBg");
	this.shape_83.setTransform(48.3,481.4,2,2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#737373").s().p("AgHASIgGgEIgEgGQgBgEAAgEIABgHQABgDADgDIAGgEIAHgBIAIABQADABADADIAEAGIABAHQAAAEgBAEIgEAGIgGAEIgIABIgHgBgAgFgNIgEADIgCAEIgBAGIABAGQAAACACACIAEADIAFABIAGgBIADgDQACgCABgCIABgGIgBgGIgDgEIgDgDIgGgBg");
	this.shape_84.setTransform(39.8,481.4,2,2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#737373").s().p("AgHASIgFgEQgDgCgCgEQgBgEAAgEIABgHQACgFADgBQACgDADgBIAHgBIAIABIAGAEIADAGIACAHQAAAEgCAEIgDAGIgGAEQgEABgEAAQgEAAgDgBgAgEgNIgFADIgCAEIgBAGIABAGIACAEIAFADIAEABIAGgBIAEgDQACgCABgCIABgGIgBgGIgDgEIgEgDIgGgBg");
	this.shape_85.setTransform(31.2,481.4,2,2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgUAoIAAhPIApAAIAAAPIgbAAIAAASIAaAAIAAANIgaAAIAAASIAbAAIAAAPg");
	this.shape_86.setTransform(556.8,418.3,2,2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgUAoIAAhPIApAAIAAAPIgbAAIAAASIAaAAIAAANIgaAAIAAASIAbAAIAAAPg");
	this.shape_87.setTransform(545.7,418.3,2,2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AAOAoIAAgiIgbAAIAAAiIgPAAIAAhPIAPAAIAAAgIAbAAIAAggIAPAAIAABPg");
	this.shape_88.setTransform(532.7,418.3,2,2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgaAoIAAhPIAtAAIAAAPIgeAAIAAAQIALAAQARAAAGAKQAEAGAAAHQAAALgHAHQgIAHgMAAgAgLAZIAMAAQALAAAAgKQAAgKgLAAIgMAAg");
	this.shape_89.setTransform(519.4,418.3,2,2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgdAdQgMgMAAgRQAAgQAMgMQAMgMARAAQASAAAMAMQAMAMAAAQQAAARgMAMQgMAMgSAAQgQAAgNgMgAgSgSQgIAHAAALQAAALAIAIQAIAIAKAAQAMAAAIgIQAHgIAAgLQAAgLgHgHQgIgIgMAAQgKAAgIAIg");
	this.shape_90.setTransform(503.6,418.3,2,2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgYAoIAAhPIAWAAQAQAAAHAKQAEAGAAAJQAAAYgbAAIgHAAIAAAegAgJgEIAIAAQAMAAAAgKQAAgKgMAAIgIAAg");
	this.shape_91.setTransform(489.1,418.3,2,2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AAcAvIAAgPIg4AAIAAAPIgOAAIAAgdIAHAAIAehAIALAAIAeBAIAHAAIAAAdgAgTASIAnAAIgUgsg");
	this.shape_92.setTransform(473.9,419.8,2,2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgdAdQgMgMAAgRQAAgQAMgMQAMgMARAAQASAAAMAMQAMAMAAAQQAAARgMAMQgMAMgSAAQgQAAgNgMgAgSgSQgIAHAAALQAAALAIAIQAIAIAKAAQAMAAAIgIQAHgIAAgLQAAgLgHgHQgIgIgMAAQgKAAgIAIg");
	this.shape_93.setTransform(456.1,418.3,2,2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AAPAoIAAhAIgcAAIAABAIgPAAIAAhPIA5AAIAABPg");
	this.shape_94.setTransform(439.8,418.3,2,2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#00A7E0").s().p("AmqBuIAAjbINVAAIAADbg");
	this.shape_95.setTransform(497.4,417.2,2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(306));

	// Слой 14
	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("Egu3AnEMAAAhOHMBdvAAAMAAABOHg");
	this.shape_96.setTransform(300,250);

	this.timeline.addTween(cjs.Tween.get(this.shape_96).wait(306));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(299.5,249.5,610.5,501);
// library properties:
lib.properties = {
	width: 600,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/600x500_atlas_.jpg", id:"600x500_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;