(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"468x60_atlas_", frames: [[0,0,460,423],[0,425,470,384]]}
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



(lib.pic1 = function() {
	this.spriteSheet = ss["468x60_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pic2 = function() {
	this.spriteSheet = ss["468x60_atlas_"];
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


(lib.txt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#45BFFF").s().p("ABYGLIAAlCIgrAAQgrAAgSAXQgTAXAAA3IAABrQAAA0gfAfQgeAfhLAAIgoAAIAAhxIAGAAQAWAAALgJQALgKAAgmIAAgwQAAg+ASgrQASgsAwgTQhSglAAh6IAAg+QAAhbArguQAsgtBgAAIC8AAIAAMVgAgTkGQgPATAAArIAABOQAAAvAUASQASASAjAAIAxAAIAAjyIg8AAQggAAgPATg");
	this.shape.setTransform(196.3,40.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#45BFFF").s().p("ABcGLIgWiPIiXAAIgVCPIhzAAIB/sVIC1AAIB/MVgAhBCRIB2AAIg6mPg");
	this.shape_1.setTransform(149.8,40.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#45BFFF").s().p("Ai/GLIAAsVIC8AAQBgAAArAtQArAuAABbIAAAcQAAA9gTAnQgTAogqATQAzATAVArQAVArAAA/IAABBQAABbgwAwQgvAwheAAgAhDEaIBGAAQAgAAAQgRQARgQAAgtIAAhEQAAg4gTgUQgSgUgqAAIg4AAgAhDhIIAwAAQAjAAATgSQAUgSAAgwIAAgsQAAgrgPgTQgQgTgfAAIg8AAg");
	this.shape_2.setTransform(107.3,40.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#45BFFF").s().p("AiLFhQgxgzABhgIAAmaQgBhhAxgzQAwgzBbAAQBbAAAxAzQAxAzAABhIAAGaQAABggxAzQgxAzhbAAQhbAAgwgzgAgukRQgRASAAArIAAGpQAAArARASQARARAdAAQAeAAARgRQARgSAAgrIAAmpQAAgrgRgSQgRgRgeAAQgbAAgTARg");
	this.shape_3.setTransform(63.8,40.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#45BFFF").s().p("ABFGLIAAlTIiMAAIAAFTIh8AAIAAsVIB8AAIAAFTICMAAIAAlTIB/AAIAAMVg");
	this.shape_4.setTransform(20,40.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#45BFFF").s().p("AAuDPIAAipIgWAAQgXAAgJAMQgKAMAAAdIAAA4QAAAbgQAQQgQARgnAAIgVAAIAAg7IADAAQALAAAGgFQAGgFAAgVIAAgYQAAghAKgXQAJgXAZgJQgrgTAAhAIAAghQAAgvAXgYQAXgYAyAAIBiAAIAAGdgAgJiJQgIAKAAAXIAAAoQAAAZAKAKQAJAJATAAIAZAAIAAh/IgfAAQgRAAgHAKg");
	this.shape_5.setTransform(206.9,109.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#45BFFF").s().p("AAsDPIAAjqIhjDqIgvAAIAAmdIA6AAIAAD3IBkj3IAvAAIAAGdg");
	this.shape_6.setTransform(182.9,109.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#45BFFF").s().p("AA+DmIgCglQAAgFgDgDQgCgCgFAAIilAAIAAmcIBBAAIAAFhIBJAAIAAlhIBCAAIAAFhIAbAAIAABqg");
	this.shape_7.setTransform(158.3,112.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#45BFFF").s().p("AAnC+QgRgQgBgbIAAhEQABgcgNgNQgMgMgXAAIgXAAIAAC1IhBAAIAAmdIBBAAIAACuIAaAAQATAAAMgJQANgJAAgZIAAhHQABgbARgRQASgQAeAAIAbAAIAAA7IgQAAQgHAAgDADQgEADgCAGQgBAIAAAKIAAAbQgBBAgrAUQAZAJAKAXQAIAWABAhIAAAkQAAAKABAJQACAGAEADQAEADAGAAIARAAIAAA7IgcAAIgDAAQgcAAgRgRg");
	this.shape_8.setTransform(132.6,109.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#45BFFF").s().p("AhXDPIAAmdICvAAIAAA7IhuAAIAABzIBYAAIAAA6IhYAAIAAB6IBuAAIAAA7g");
	this.shape_9.setTransform(109.3,109.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#45BFFF").s().p("AA5DPIAAliIg3AAIAACiQAAAtgEApQgFAjgNAZQgNAXgXALQgXAMgjAAIgHAAIAAg7IAIAAQARAAAMgKQALgJAGgSQAGgRABgZQACgWAAgiIAAjbIC0AAIAAGdg");
	this.shape_10.setTransform(85.3,109.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#45BFFF").s().p("AA5DPIAAliIg3AAIAACiQAAAxgEAlQgEAkgOAYQgMAXgXALQgXAMgkAAIgHAAIAAg7IAIAAQARAAAMgKQAMgKAFgRQAGgRACgZQACgWAAgiIAAjbICzAAIAAGdg");
	this.shape_11.setTransform(58.6,109.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#45BFFF").s().p("AhIC5QgagcAAgxIAAjWQAAgyAagcQAZgbAvAAQAwAAAZAbQAZAcAAAyIAADWQAAAxgZAcQgZAbgwgBQgvABgZgbgAgYiOQgIAJgBAWIAADfQABAWAIAKQAJAIAPABQAPgBAKgIQAJgKAAgWIAAjfQAAgWgJgJQgKgKgPABQgPgBgJAKg");
	this.shape_12.setTransform(34.3,109.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#45BFFF").s().p("AAoC+QgTgQABgbIAAhEQAAgdgOgMQgLgMgXAAIgWAAIAAC1IhBAAIAAmdIBBAAIAACuIAZAAQATAAAMgJQAOgJAAgZIAAhHQgBgbATgRQARgQAeAAIAbAAIAAA7IgRAAQgGAAgDADQgEADgCAGQgCAIAAAKIAAAbQABBAgsAUQAaAJAIAXQAKAWgBAhIAAAkQAAAKACAJQACAGAEADQAEADAFAAIARAAIAAA7IgbAAIgDAAQgcAAgQgRg");
	this.shape_13.setTransform(11.5,109.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt2, new cjs.Rectangle(0,0,218,135.3), null);


(lib.text1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABBIcIg9o/Ig9I/IjoAAIh5w3IClAAIBbNSIBStSICiAAIBVNZIBYtZICUAAIh5Q3g");
	this.shape.setTransform(155.9,54);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjmIcIAAw3IHNAAIAACaIkkAAIAAEtIDoAAIAACZIjoAAIAAE8IEkAAIAACbg");
	this.shape_1.setTransform(85.4,54);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABfIcIjTsNIAAMNIiYAAIAAw3IDVAAICtKFIAAqFICXAAIAAQ3g");
	this.shape_2.setTransform(27.3,54);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAjDLIhOklIAAElIg5AAIAAmVIBQAAIBADyIAAjyIA5AAIAAGVg");
	this.shape_3.setTransform(185.5,138.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhHC1QgZgaAAgxIAAjTQAAgxAZgaQAZgbAuAAQAvAAAZAbQAZAaAAAxIAADTQAAAxgZAaQgYAbgwAAQguAAgZgbgAgXiMQgJAJAAAWIAADbQAAAWAJAJQAJAJAOAAQAPAAAJgJQAJgJAAgWIAAjbQAAgWgJgJQgJgJgPAAQgOAAgJAJg");
	this.shape_4.setTransform(162.9,138.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfDLIAAmVIA/AAIAAGVg");
	this.shape_5.setTransform(147.1,138.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfDLIAAlbIhDAAIAAg6IDFAAIAAA6IhDAAIAAFbg");
	this.shape_6.setTransform(131.9,138.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhGC1QgYgaAAgxIAAjTQAAgxAYgaQAYgbAuAAQAvAAAYAbQAYAaAAAxIAAAoIg8AAIAAgsQAAgWgJgJQgJgJgPAAQgOAAgJAJQgJAJAAAXIAADaQAAAWAJAJQAJAJAOAAQAOAAAKgJQAJgJAAgWIAAg6IA8AAIAAA2QAAAygYAaQgYAagvAAQgvAAgXgbg");
	this.shape_7.setTransform(110.7,138.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhWDLIAAmVICtAAIAAA6IhtAAIAABxIBWAAIAAA5IhWAAIAAB3IBtAAIAAA6g");
	this.shape_8.setTransform(89.9,138.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhUDLIAAmVIBAAAIAAFbIBpAAIAAA6g");
	this.shape_9.setTransform(70.9,138.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhUDLIAAmVIBBAAIAAFbIBnAAIAAA6g");
	this.shape_10.setTransform(52.2,138.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhHC1QgZgaAAgxIAAjTQAAgxAZgaQAZgbAuAAQAvAAAZAbQAZAaAAAxIAADTQAAAxgZAaQgZAbgvAAQgvAAgYgbgAgXiMQgJAJAAAWIAADbQAAAWAJAJQAJAJAOAAQAPAAAJgJQAJgJAAgWIAAjbQAAgWgJgJQgJgJgPAAQgOAAgJAJg");
	this.shape_11.setTransform(31.3,138.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhGC1QgYgaAAgxIAAjTQAAgxAYgaQAZgbAtAAQAvAAAYAbQAYAaAAAxIAAAoIg8AAIAAgsQAAgWgJgJQgJgJgPAAQgOAAgJAJQgJAJAAAXIAADaQAAAWAJAJQAJAJAOAAQAOAAAKgJQAJgJAAgWIAAg6IA8AAIAAA2QAAAygYAaQgYAagvAAQguAAgYgbg");
	this.shape_12.setTransform(9.5,138.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text1, new cjs.Rectangle(0,0,197,159.5), null);


(lib.sas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pic2();
	this.instance.parent = this;
	this.instance.setTransform(84,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sas, new cjs.Rectangle(84,0,470,384), null);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#38174C").s().p("Aywd0MAAAg7nMAlhAAAMAAAA7ng");
	this.shape.setTransform(230,45,1.915,0.236);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,460,90), null);


(lib.eee = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pic1();
	this.instance.parent = this;
	this.instance.setTransform(23,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.eee, new cjs.Rectangle(23,2,460,423), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,728,90), null);


(lib.aaasas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AxBJiIAAzDMAiDAAAIAATDg");
	this.shape.setTransform(110,61.6,1.009,1.009);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.aaasas, new cjs.Rectangle(0,0,220,123.1), null);


// stage content:
(lib._468x60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_267 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(267).call(this.frame_267).wait(11));

	// Слой 18
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("EgkegEmMBI9AAAIAAJNMhI9AAAg");
	this.shape.setTransform(234.2,30.1,1,1,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(278));

	// logo
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0979BD").s().p("AgUAVQgJgJAAgMQAAgMAJgIQAJgJALABQANgBAIAJQAJAIAAAMQAAAMgJAJQgIAIgNAAQgLAAgJgIg");
	this.shape_1.setTransform(405.4,41.3,0.662,0.662);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1E1C").s().p("AAPAiIgggqIAAAqIgWAAIAAhDIAaAAIAfAqIAAAAIAAgqIAWAAIAABDg");
	this.shape_2.setTransform(448.9,41.3,0.662,0.662);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1E1C").s().p("AgrAAQAAgjArAAQAsAAAAAjQAAAkgsAAQgrAAAAgkgAgTAAQAAAVATAAQAUAAAAgVQAAgUgUAAQgTAAAAAUg");
	this.shape_3.setTransform(441.7,41.3,0.662,0.662);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1E1C").s().p("AgLAiIAAhDIAXAAIAABDg");
	this.shape_4.setTransform(436.4,41.3,0.662,0.662);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1E1C").s().p("AARAiIAAgdIghAAIAAAdIgXAAIAAhDIAXAAIAAAYIAhAAIAAgYIAXAAIAABDg");
	this.shape_5.setTransform(431.2,41.3,0.662,0.662);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1E1C").s().p("AgbAgQgLgGgBgNIAbAAQABAIANAAQAMAAAAgHQAAgEgLgCIgWgDQgTgDAAgQQAAgVAjAAQAmAAACAWIgZAAQgCgIgMAAQgMAAAAAHQAAADAFABIAdAEQAUAEAAAPQAAAXgnAAQgSAAgKgEg");
	this.shape_6.setTransform(424.3,41.3,0.662,0.662);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1E1C").s().p("AATAiIgEgLIgdAAIgEALIgYAAIAdhDIAbAAIAdBDgAgJAJIASAAIgJgZg");
	this.shape_7.setTransform(417.9,41.3,0.662,0.662);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1E1C").s().p("AgfAiIAAhDIA/AAIAAAPIgpAAIAAAMIAmAAIAAAOIgmAAIAAAag");
	this.shape_8.setTransform(412.3,41.3,0.662,0.662);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1E1C").s().p("AgoAiIAAhDIAwAAQAhAAAAAhQAAAigkAAgAgRATIASAAQAQAAAAgTQAAgRgRgBIgRAAg");
	this.shape_9.setTransform(399.1,41.3,0.662,0.662);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D1E1C").s().p("AAPAiIgggqIAAAAIAAAqIgWAAIAAhDIAaAAIAfAqIAAgqIAWAAIAABDg");
	this.shape_10.setTransform(391.9,41.3,0.662,0.662);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D1E1C").s().p("AATAiIgEgLIgdAAIgEALIgYAAIAdhDIAbAAIAdBDgAgJAJIATAAIgKgZIAAAAg");
	this.shape_11.setTransform(385.2,41.3,0.662,0.662);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D1E1C").s().p("AgfAiIAAhDIAWAAIAAAzIApAAIAAAQg");
	this.shape_12.setTransform(379.3,41.3,0.662,0.662);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1D1E1C").s().p("AAPAiIgggqIAAAAIAAAqIgWAAIAAhDIAbAAIAeAqIAAgqIAWAAIAABDg");
	this.shape_13.setTransform(372.7,41.3,0.662,0.662);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1D1E1C").s().p("AgKAiIAAhDIAVAAIAABDg");
	this.shape_14.setTransform(367.5,41.3,0.662,0.662);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1D1E1C").s().p("AgfAiIAAhDIA/AAIAAAPIgpAAIAAAMIAnAAIAAAOIgnAAIAAAag");
	this.shape_15.setTransform(363.1,41.3,0.662,0.662);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1D1E1C").s().p("AAmBMIgHgSIg+AAIgFASIhAAAIBAiXIBJAAIBACXgAASAVIgSgyIgRAyIAjAAg");
	this.shape_16.setTransform(444.1,29.5,0.662,0.662);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1D1E1C").s().p("AgdBMIAAhxIg3AAIAAgmICpAAIAAAmIg3AAIAABxg");
	this.shape_17.setTransform(425.7,29.5,0.662,0.662);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1D1E1C").s().p("AAiBMIAAg9IhDAAIAAA9Ig8AAIAAiXIA8AAIAAA1IBDAAIAAg1IA7AAIAACXg");
	this.shape_18.setTransform(405.9,29.5,0.662,0.662);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1D1E1C").s().p("AhEBBQgWgOAAgjIAAhdIA8AAIAABaQAAAOAIAGQAHAGAPAAQAQAAAHgGQAIgGAAgOIAAhaIA8AAIAABdQAAAjgWAOQgVANgwAAQgvAAgVgNg");
	this.shape_19.setTransform(385,29.7,0.662,0.662);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1D1E1C").s().p("AhLBMIAAiXIA8AAIAABuIBbAAIAAApg");
	this.shape_20.setTransform(366,29.5,0.662,0.662);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhVBJIAnhvQAFgMAMgLQAPgMANACIgoB0IB/AAQgCAJgLAIQgOALgTAAg");
	this.shape_21.setTransform(337.9,29.9,0.662,0.662);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0E7ABE").s().p("AiUCVQg+g9AAhYQAAhWA+g/QA+g9BWgBQBXABA+A9QA+A/AABWQAABYg+A9Qg9A+hYAAQhWAAg+g+g");
	this.shape_22.setTransform(337.6,30.7,0.662,0.662);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAmBMIgHgSIg+AAIgFASIhAAAIBAiXIBJAAIBACXgAASAVIgSgyIgRAyIAjAAg");
	this.shape_23.setTransform(444.1,29.5,0.662,0.662);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgdBMIAAhxIg3AAIAAgmICpAAIAAAmIg3AAIAABxg");
	this.shape_24.setTransform(425.7,29.5,0.662,0.662);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAiBMIAAg9IhDAAIAAA9Ig8AAIAAiXIA8AAIAAA1IBDAAIAAg1IA7AAIAACXg");
	this.shape_25.setTransform(405.9,29.5,0.662,0.662);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhEBBQgWgOAAgjIAAhdIA8AAIAABaQAAAOAIAGQAHAGAPAAQAQAAAHgGQAIgGAAgOIAAhaIA8AAIAABdQAAAjgWAOQgVANgwAAQgvAAgVgNg");
	this.shape_26.setTransform(385,29.7,0.662,0.662);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhLBMIAAiXIA8AAIAABuIBbAAIAAApg");
	this.shape_27.setTransform(366,29.5,0.662,0.662);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AiUCVQg+g9AAhYQAAhWA+g/QA+g9BWgBQBXABA+A9QA+A/AABWQAABYg+A9Qg9A+hYAAQhWAAg+g+gAgXhKQgNALgFAMIgnBuIB9AAQATAAAOgKQALgJACgJIh/AAIAnh0IgDAAQgKAAgNALg");
	this.shape_28.setTransform(337.6,30.7,0.662,0.662);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(278));

	// Слой 17
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(80,134.1,0.667,0.667,0,0,0,120,200);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(268).to({_off:false},0).to({alpha:1},9).wait(1));

	// text2
	this.instance_1 = new lib.txt2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(153.4,30.8,0.333,0.333,0,0,0,109.2,67.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(242).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(30));

	// fade
	this.instance_2 = new lib.Path_6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(80.1,128,0.667,0.667,0,0,0,120.1,190.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(239).to({_off:false},0).to({alpha:0.602},6).wait(33));

	// Слой 1
	this.instance_3 = new lib.bg();
	this.instance_3.parent = this;
	this.instance_3.setTransform(80,134.1,0.667,0.667,0,0,0,120,200);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(182).to({_off:false},0).to({alpha:1},9).wait(3).to({alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(75));

	// pic2
	this.instance_4 = new lib.sas();
	this.instance_4.parent = this;
	this.instance_4.setTransform(132,-14.5,0.652,0.652,0,0,0,286.3,191.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(194).to({_off:false},0).to({regY:191.1,y:124.2},83).wait(1));

	// mask2
	this.instance_5 = new lib.aaasas();
	this.instance_5.parent = this;
	this.instance_5.setTransform(153.7,59.2,0.336,0.336,0,0,0,109.1,61.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(138).to({_off:false},0).wait(31).to({regX:109.3,x:154,y:59.6},0).to({x:225.9,y:59.2},12).to({_off:true},1).wait(96));

	// mask1
	this.instance_6 = new lib.aaasas();
	this.instance_6.parent = this;
	this.instance_6.setTransform(153.7,30.3,0.336,0.336,0,0,0,109.3,61.3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(138).to({_off:false},0).wait(6).to({x:169.1},0).wait(6).to({x:183.4,y:30},0).wait(6).to({x:197},0).wait(6).to({x:212.7},0).to({_off:true},7).wait(109));

	// text2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_138 = new cjs.Graphics().p("AC6DjIAAgMIgBgDIAAAAIgDgBIAAAAIg4AAIAAiLIAWAAIAAB4IAZAAIAAh4IAWAAIAAB4IAJAAIAAAjgAkTDMQgIgJAAgRIAAAAIAAhIQAAgRAIgJIAAAAQAJgJAQAAIAAAAQAQAAAJAJIAAAAQAIAJAAARIAAAAIAABIQAAARgIAJIAAAAQgJAJgQAAIAAAAQgQAAgJgJgAkCBeQgDADAAAHIAAAAIAABLQAAAIADADIAAAAQADADAFAAIAAAAQAFAAADgDIAAAAQADgDAAgIIAAAAIAAhLQAAgHgDgDIAAAAQgDgDgFAAIAAAAQgFAAgDADgABcDOQgGgGAAgJIAAAAIAAgWQAAgKgEgEIAAAAQgEgEgIAAIAAAAIgIAAIAAA8IgVAAIAAiLIAVAAIAAA7IAJAAQAGAAAFgDIAAAAQAEgDAAgJIAAAAIAAgYQAAgJAGgFIAAAAQAGgGAKAAIAAAAIAJAAIAAAUIgFAAIgDABIAAAAIgCADIAAAAIgBAGIAAAAIAAAJQAAAWgOAHIAAAAQAIADADAIIAAAAQADAHAAALIAAAAIAAAMIABAHIAAAAIACADIAAAAIADABIAAAAIAGAAIAAATIgKAAIgBAAIAAAAQgJAAgGgFgAk5DOQgGgGAAgJIAAAAIAAgWQAAgKgFgEIAAAAQgEgEgIAAIAAAAIgHAAIAAA8IgWAAIAAiLIAWAAIAAA7IAIAAQAHAAAEgDIAAAAQAFgDAAgJIAAAAIAAgYQAAgJAGgFIAAAAQAFgGALAAIAAAAIAJAAIAAAUIgGAAIgDABIAAAAIgCADIAAAAIgBAGIAAAAIAAAJQAAAWgOAHIAAAAQAIADADAIIAAAAQADAHAAALIAAAAIAAAMIABAHIAAAAIACADIAAAAIADABIAAAAIAGAAIAAATIgJAAIgCAAIAAAAQgJAAgFgFgAFYDTIAAg4IgHAAQgIAAgDAEIAAAAQgEAEAAAJIAAAAIAAATQAAAJgFAGIAAAAQgFAFgNAAIAAAAIgIAAIAAgTIACAAQADAAACgCIAAAAQACgCAAgHIAAAAIAAgIQAAgLAEgIIAAAAQADgHAIgDIAAAAQgOgHAAgWIAAAAIAAgLQAAgQAHgIIAAAAQAIgIARAAIAAAAIAhAAIAACLgAFFBgQgCADAAAIIAAAAIAAANQAAAIADAEIAAAAQADADAHAAIAAAAIAIAAIAAgrIgKAAQgGAAgDAEgAEHDTIAAhOIgiBOIgPAAIAAiLIATAAIAABUIAihUIAQAAIAACLgAgcDTIAAiLIA7AAIAAAUIglAAIAAAnIAdAAIAAAUIgdAAIAAApIAlAAIAAATgAg7DTIAAh3IgTAAIAAA3QAAAPgCAOIAAAAQgBAMgEAIIAAAAQgFAIgIAEIAAAAQgHADgMAAIAAAAIgCAAIAAgTIACAAQAGAAAEgEIAAAAQAEgDACgGIAAAAQACgGAAgIIAAAAIABgTIAAAAIAAhKIA8AAIAACLgAiVDTIAAh3IgTAAIAAA3QAAARgBAMIAAAAQgCAMgEAIIAAAAQgFAIgHAEIAAAAQgIADgMAAIAAAAIgCAAIAAgTIACAAQAGAAAEgEIAAAAQAEgDACgGIAAAAQACgGAAgIIAAAAIABgTIAAAAIAAhKIA9AAIAACLgAjGAbQgQgRAAgfIAAAAIAAiKQAAghAQgRIAAAAQAQgRAfAAIAAAAQAfAAAQARIAAAAQAQARAAAhIAAAAIAACKQAAAfgQARIAAAAQgQARgfAAIAAAAQgfAAgQgRgAini2QgGAGAAAOIAAAAIAACPQAAAPAGAFIAAAAQAGAFAKAAIAAAAQAKAAAGgFIAAAAQAGgFAAgPIAAAAIAAiPQAAgOgGgGIAAAAQgGgGgKAAIAAAAQgJAAgHAGgAFDApIAAhrIgPAAQgOAAgHAIIAAAAQgGAIAAASIAAAAIAAAjQAAARgKALIAAAAQgKAKgaAAIAAAAIgNAAIAAgmIACAAQAHAAAEgDIAAAAQAEgCAAgNIAAAAIAAgQQAAgVAGgOIAAAAQAGgPAQgGIAAAAQgcgNAAgpIAAAAIAAgVQAAgfAPgPIAAAAQAPgPAgAAIAAAAIA/AAIAAEIgAEfizQgGAHAAAOIAAAAIAAAaQAAAQAHAGIAAAAQAHAGALAAIAAAAIARAAIAAhRIgUAAQgLAAgFAGgACoApIgHgvIgzAAIgIAvIgmAAIAqkIIA+AAIAqEIgABzgqIAoAAIgUiGgAhFApIAAkIIA/AAQAfAAAPAPIAAAAQAPAPAAAfIAAAAIAAAJQAAAVgHANIAAAAQgGANgOAHIAAAAQARAGAHAPIAAAAQAHAPAAAVIAAAAIAAAVQAAAegQAQIAAAAQgQAQgfAAIAAAAgAgcADIAYAAQAKAAAFgEIAAAAQAGgGAAgPIAAAAIAAgXQAAgTgGgGIAAAAQgGgHgOAAIAAAAIgTAAgAgchzIARAAQALAAAGgGIAAAAQAHgGAAgQIAAAAIAAgPQAAgOgFgHIAAAAQgGgGgJAAIAAAAIgVAAgAkTApIAAhwIgvAAIAABwIgqAAIAAkIIAqAAIAAByIAvAAIAAhyIArAAIAAEIg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(138).to({graphics:mask_graphics_138,x:154,y:32.5}).wait(140));

	// pic2
	this.instance_7 = new lib.sas("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(145.9,48.8,0.336,0.336,0,0,0,319.1,192.3);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(138).to({_off:false},0).to({rotation:1440},49).to({_off:true},23).wait(68));

	// Слой 12
	this.instance_8 = new lib.bg();
	this.instance_8.parent = this;
	this.instance_8.setTransform(80,134.1,0.667,0.667,0,0,0,120,200);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(128).to({_off:false},0).to({alpha:1},9).to({_off:true},73).wait(68));

	// text1
	this.instance_9 = new lib.text1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(153.7,30.8,0.333,0.333,0,0,0,98.5,79.8);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(100).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).to({_off:true},32).wait(140));

	// fade
	this.instance_10 = new lib.Path_6();
	this.instance_10.parent = this;
	this.instance_10.setTransform(80.1,128,0.667,0.667,0,0,0,120.1,190.8);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(97).to({_off:false},0).to({alpha:0.602},6,cjs.Ease.get(1)).to({_off:true},35).wait(140));

	// Слой 12 - копия
	this.instance_11 = new lib.bg();
	this.instance_11.parent = this;
	this.instance_11.setTransform(80,134.1,0.667,0.667,0,0,0,120,200);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(44).to({_off:false},0).to({alpha:1},7).wait(4).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(215));

	// pic1
	this.instance_12 = new lib.eee();
	this.instance_12.parent = this;
	this.instance_12.setTransform(203.6,116.8,0.667,0.662,0,0,0,328.4,219);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(55).to({_off:false},0).to({y:36.8},82).to({_off:true},1).wait(140));

	// mask2
	this.instance_13 = new lib.aaasas();
	this.instance_13.parent = this;
	this.instance_13.setTransform(152.8,61.4,0.336,0.336,0,0,0,109.4,61.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(31).to({x:223.3},12).to({_off:true},1).wait(234));

	// mask1
	this.instance_14 = new lib.aaasas();
	this.instance_14.parent = this;
	this.instance_14.setTransform(152.8,20.4,0.336,0.336,0,0,0,109.4,61.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(10).to({x:176.3},0).wait(11).to({regX:109.6,x:193.1},0).to({_off:true},10).wait(247));

	// text1 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("ADAEDQgIgJAAgQIAAAAIAAhIQAAgQAIgJIAAAAQAJgJAPAAIAAAAQAQAAAIAJIAAAAQAJAJAAAQIAAAAIAABIQAAAQgJAJIAAAAQgIAJgQAAIAAAAQgQAAgIgJgADQCXQgDADAAAHIAAAAIAABKQAAAHADADIAAAAQADADAFAAIAAAAQAFAAADgDIAAAAQADgDAAgHIAAAAIAAhKQAAgHgDgDIAAAAQgDgDgFAAIAAAAQgFAAgDADgAAREDQgIgJAAgQIAAAAIAAhIQAAgQAIgJIAAAAQAIgJAQAAIAAAAQAQAAAIAJIAAAAQAIAJAAAQIAAAAIAAAOIgUAAIAAgPQAAgHgDgDIAAAAQgDgDgGAAIAAAAQgFAAgDADIAAAAQgDADAAAHIAAAAIAABKQAAAHADADIAAAAQAEADAEAAIAAAAQAFAAAEgDIAAAAQADgDAAgHIAAAAIAAgTIAUAAIAAASQAAAQgIAJIAAAAQgIAJgQAAIAAAAQgQAAgIgJgAj5EDQgIgJAAgQIAAAAIAAhIQAAgQAIgJIAAAAQAIgJAQAAIAAAAQAQAAAIAJIAAAAQAJAJAAAQIAAAAIAABIQAAAQgJAJIAAAAQgIAJgQAAIAAAAQgQAAgIgJgAjpCXQgDADAAAHIAAAAIAABKQAAAHADADIAAAAQADADAFAAIAAAAQAFAAADgDIAAAAQADgDAAgHIAAAAIAAhKQAAgHgDgDIAAAAQgDgDgFAAIAAAAQgFAAgDADgAlCEDQgIgJAAgQIAAAAIAAhIQAAgQAIgJIAAAAQAJgJAPAAIAAAAQAQAAAIAJIAAAAQAIAJAAAQIAAAAIAAAOIgUAAIAAgPQAAgHgDgDIAAAAQgDgDgFAAIAAAAQgFAAgDADIAAAAQgDADAAAHIAAAAIAABKQAAAHADADIAAAAQADADAFAAIAAAAQAFAAADgDIAAAAQADgDAAgHIAAAAIAAgTIAUAAIAAASQAAAQgIAJIAAAAQgIAJgQAAIAAAAQgQAAgIgJgAEwEKIgbhiIAABiIgTAAIAAiIIAbAAIAWBSIAAhSIATAAIAACIgACZEKIAAiIIAVAAIAACIgABlEKIAAh1IgWAAIAAgTIBCAAIAAATIgWAAIAAB1gAg5EKIAAiIIA5AAIAAATIgkAAIAAAmIAeAAIAAAUIgeAAIAAAoIAkAAIAAATgAh4EKIAAiIIAVAAIAAB1IAkAAIAAATgAi3EKIAAiIIAWAAIAAB1IAjAAIAAATgADXBfIgVjAIgVDAIhOAAIgolqIA3AAIAfEdIAbkdIA3AAIAdEfIAdkfIAyAAIgpFqgAh5BfIAAlqICbAAIAAA0IhiAAIAABlIBNAAIAAA0IhNAAIAABpIBiAAIAAA0gAjOBfIhHkGIAAEGIgzAAIAAlqIBHAAIA6DZIAAjZIAzAAIAAFqg");
	mask_1.setTransform(152.1,30.9);

	// pic1
	this.instance_15 = new lib.eee("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(152.7,45.8,0.336,0.336,0,0,0,253.2,213.2);

	var maskedShapeInstanceList = [this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({rotation:1080},51).to({_off:true},87).wait(140));

	// bg
	this.instance_16 = new lib.bg();
	this.instance_16.parent = this;
	this.instance_16.setTransform(80,134.2,0.667,0.667,0,0,0,120,200.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(278));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(233.5,29.5,485.9,82.7);
// library properties:
lib.properties = {
	width: 468,
	height: 60,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/468x60_atlas_.jpg", id:"468x60_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;