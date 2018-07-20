(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"240x400_atlas_", frames: [[0,0,460,423],[0,425,470,384]]}
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
	this.spriteSheet = ss["240x400_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pic2 = function() {
	this.spriteSheet = ss["240x400_atlas_"];
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
	this.shape.setTransform(120,200,0.999,1.048);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,240,400), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,240,400), null);


(lib.aaasas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AxBJiIAAzDMAiDAAAIAATDg");
	this.shape.setTransform(109,61);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.aaasas, new cjs.Rectangle(0,0,218,122), null);


// stage content:
(lib._240x400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 18
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("Ayq/KMAlVAAAMAAAA+VMglVAAAg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(248));

	// logo
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0979BD").s().p("AgUAVQgJgJAAgMQAAgMAJgIQAJgJALABQANgBAIAJQAJAIAAAMQAAAMgJAJQgIAIgNAAQgLAAgJgIg");
	this.shape_1.setTransform(146.9,372.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1E1C").s().p("AAPAiIgggqIAAAqIgWAAIAAhDIAaAAIAfAqIAAAAIAAgqIAWAAIAABDg");
	this.shape_2.setTransform(212.6,372.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1E1C").s().p("AgrAAQAAgjArAAQAsAAAAAjQAAAkgsAAQgrAAAAgkgAgTAAQAAAVATAAQAUAAAAgVQAAgUgUAAQgTAAAAAUg");
	this.shape_3.setTransform(201.8,372.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1E1C").s().p("AgLAiIAAhDIAXAAIAABDg");
	this.shape_4.setTransform(193.8,372.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1E1C").s().p("AARAiIAAgdIghAAIAAAdIgXAAIAAhDIAXAAIAAAYIAhAAIAAgYIAXAAIAABDg");
	this.shape_5.setTransform(185.8,372.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1E1C").s().p("AgbAgQgLgGgBgNIAbAAQABAIANAAQAMAAAAgHQAAgEgLgCIgWgDQgTgDAAgQQAAgVAjAAQAmAAACAWIgZAAQgCgIgMAAQgMAAAAAHQAAADAFABIAdAEQAUAEAAAPQAAAXgnAAQgSAAgKgEg");
	this.shape_6.setTransform(175.5,372.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1E1C").s().p("AATAiIgEgLIgdAAIgEALIgYAAIAdhDIAbAAIAdBDgAgJAJIASAAIgJgZg");
	this.shape_7.setTransform(165.8,372.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1E1C").s().p("AgfAiIAAhDIA/AAIAAAPIgpAAIAAAMIAmAAIAAAOIgmAAIAAAag");
	this.shape_8.setTransform(157.3,372.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1E1C").s().p("AgoAiIAAhDIAwAAQAhAAAAAhQAAAigkAAgAgRATIASAAQAQAAAAgTQAAgRgRgBIgRAAg");
	this.shape_9.setTransform(137.3,372.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D1E1C").s().p("AAPAiIgggqIAAAAIAAAqIgWAAIAAhDIAaAAIAfAqIAAgqIAWAAIAABDg");
	this.shape_10.setTransform(126.5,372.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D1E1C").s().p("AATAiIgEgLIgdAAIgEALIgYAAIAdhDIAbAAIAdBDgAgJAJIATAAIgKgZIAAAAg");
	this.shape_11.setTransform(116.3,372.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D1E1C").s().p("AgfAiIAAhDIAWAAIAAAzIApAAIAAAQg");
	this.shape_12.setTransform(107.5,372.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1D1E1C").s().p("AAPAiIgggqIAAAAIAAAqIgWAAIAAhDIAbAAIAeAqIAAgqIAWAAIAABDg");
	this.shape_13.setTransform(97.5,372.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1D1E1C").s().p("AgKAiIAAhDIAVAAIAABDg");
	this.shape_14.setTransform(89.6,372.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1D1E1C").s().p("AgfAiIAAhDIA/AAIAAAPIgpAAIAAAMIAnAAIAAAOIgnAAIAAAag");
	this.shape_15.setTransform(83,372.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1D1E1C").s().p("AAmBMIgHgSIg+AAIgFASIhAAAIBAiXIBJAAIBACXgAASAVIgSgyIgRAyIAjAAg");
	this.shape_16.setTransform(205.3,354.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1D1E1C").s().p("AgdBMIAAhxIg3AAIAAgmICpAAIAAAmIg3AAIAABxg");
	this.shape_17.setTransform(177.6,354.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1D1E1C").s().p("AAiBMIAAg9IhDAAIAAA9Ig8AAIAAiXIA8AAIAAA1IBDAAIAAg1IA7AAIAACXg");
	this.shape_18.setTransform(147.7,354.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1D1E1C").s().p("AhEBBQgWgOAAgjIAAhdIA8AAIAABaQAAAOAIAGQAHAGAPAAQAQAAAHgGQAIgGAAgOIAAhaIA8AAIAABdQAAAjgWAOQgVANgwAAQgvAAgVgNg");
	this.shape_19.setTransform(116,354.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1D1E1C").s().p("AhLBMIAAiXIA8AAIAABuIBbAAIAAApg");
	this.shape_20.setTransform(87.4,354.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhVBJIAnhvQAFgMAMgLQAPgMANACIgoB0IB/AAQgCAJgLAIQgOALgTAAg");
	this.shape_21.setTransform(44.9,354.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0E7ABE").s().p("AiUCVQg+g9AAhYQAAhWA+g/QA+g9BWgBQBXABA+A9QA+A/AABWQAABYg+A9Qg9A+hYAAQhWAAg+g+g");
	this.shape_22.setTransform(44.4,356.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAmBMIgHgSIg+AAIgFASIhAAAIBAiXIBJAAIBACXgAASAVIgSgyIgRAyIAjAAg");
	this.shape_23.setTransform(205.3,354.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgdBMIAAhxIg3AAIAAgmICpAAIAAAmIg3AAIAABxg");
	this.shape_24.setTransform(177.6,354.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAiBMIAAg9IhDAAIAAA9Ig8AAIAAiXIA8AAIAAA1IBDAAIAAg1IA7AAIAACXg");
	this.shape_25.setTransform(147.7,354.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhEBBQgWgOAAgjIAAhdIA8AAIAABaQAAAOAIAGQAHAGAPAAQAQAAAHgGQAIgGAAgOIAAhaIA8AAIAABdQAAAjgWAOQgVANgwAAQgvAAgVgNg");
	this.shape_26.setTransform(116,354.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhLBMIAAiXIA8AAIAABuIBbAAIAAApg");
	this.shape_27.setTransform(87.4,354.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AiUCVQg+g9AAhYQAAhWA+g/QA+g9BWgBQBXABA+A9QA+A/AABWQAABYg+A9Qg9A+hYAAQhWAAg+g+gAgXhKQgNALgFAMIgnBuIB9AAQATAAAOgKQALgJACgJIh/AAIAnh0IgDAAQgKAAgNALg");
	this.shape_28.setTransform(44.4,356.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AynG0IAAtnMAlPAAAIAANng");
	this.shape_29.setTransform(120,357.5,1.006,0.976);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(248));

	// Слой 17
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(120,200,1,1,0,0,0,120,200);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(238).to({_off:false},0).to({alpha:1},9).wait(1));

	// text2
	this.instance_1 = new lib.txt2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120.1,143.8,1,1,0,0,0,109,67.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(217).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(25));

	// fade
	this.instance_2 = new lib.Path_6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(120.1,190.8,1,1,0,0,0,120.1,190.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(214).to({_off:false},0).to({alpha:0.602},6).wait(28));

	// pic2
	this.instance_3 = new lib.sas();
	this.instance_3.parent = this;
	this.instance_3.setTransform(15.9,190.4,1,1,0,0,0,286.4,191.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(179).to({_off:false},0).to({x:36.2,alpha:1},6,cjs.Ease.get(1)).to({x:135.9},62).wait(1));

	// Слой 1
	this.instance_4 = new lib.bg();
	this.instance_4.parent = this;
	this.instance_4.setTransform(120,200,1,1,0,0,0,120,200);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(167).to({_off:false},0).to({alpha:1},9).to({_off:true},19).wait(53));

	// mask2
	this.instance_5 = new lib.aaasas();
	this.instance_5.parent = this;
	this.instance_5.setTransform(120.1,223.1,1,1,0,0,0,109,61);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(123).to({_off:false},0).wait(31).to({y:225.1},0).to({x:330.1,y:223.1},12).to({_off:true},1).wait(81));

	// mask1
	this.instance_6 = new lib.aaasas();
	this.instance_6.parent = this;
	this.instance_6.setTransform(120.1,137.1,1,1,0,0,0,109,61);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(123).to({_off:false},0).wait(5).to({x:164.1},0).wait(5).to({x:205.1,y:136.1},0).wait(5).to({x:248.1},0).wait(10).to({x:294.1},0).to({_off:true},6).wait(94));

	// text2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_123 = new cjs.Graphics().p("AIrKkIgCglQgBgFgDgDIAAAAQgCgCgFAAIAAAAIilAAIAAmdIBAAAIAAFiIBKAAIAAliIBDAAIAAFiIAbAAIAABqgAszJfQgagbAAgyIAAAAIAAjXQAAgyAagbIAAAAQAZgbAwAAIAAAAQAwAAAZAbIAAAAQAaAbAAAyIAAAAIAADXQAAAygaAbIAAAAQgZAbgwAAIAAAAQgvAAgagbgAsDEXQgIAJgBAXIAAAAIAADfQABAXAIAJIAAAAQAJAJAQAAIAAAAQAQAAAJgJIAAAAQAIgJABgXIAAAAIAAjfQgBgXgIgJIAAAAQgJgJgQAAIAAAAQgQAAgJAJgAETJlQgSgRAAgaIAAAAIAAhEQAAgdgNgMIAAAAQgMgMgYAAIAAAAIgWAAIAAC0IhBAAIAAmdIBBAAIAACuIAZAAQAUAAAMgKIAAAAQAOgJAAgZIAAAAIAAhHQAAgbASgQIAAAAQASgRAeABIAAAAIAbAAIAAA7IgRAAQgHAAgCACIAAAAQgEAEgCAFIAAAAQgCAIAAALIAAAAIAAAaQAABAgrAUIAAAAQAZAKAJAXIAAAAQAJAXAAAgIAAAAIAAAlQAAAKACAJIAAAAQACAGAEACIAAAAQADADAGAAIAAAAIARAAIAAA7IgbAAIgEAAIAAAAQgbAAgRgQgAunJlQgSgRAAgaIAAAAIAAhEQAAgegNgLIAAAAQgNgMgWAAIAAAAIgXAAIAAC0IhBAAIAAmdIBBAAIAACuIAaAAQASAAANgKIAAAAQAOgJAAgZIAAAAIAAhHQAAgbASgQIAAAAQASgRAdABIAAAAIAbAAIAAA7IgQAAQgGAAgEACIAAAAQgEAEgBAFIAAAAQgCAIAAALIAAAAIAAAaQAABAgrAUIAAAAQAZAKAJAXIAAAAQAJAXAAAgIAAAAIAAAlQAAAKACAJIAAAAQABAGAEACIAAAAQAEADAGAAIAAAAIARAAIAAA7IgcAAIgDAAIAAAAQgbAAgRgQgAQBJ1IAAioIgXAAQgWAAgKAMIAAAAQgLALABAdIAAAAIAAA5QgBAbgPAQIAAAAQgRAQgmAAIAAAAIgWAAIAAg7IAEAAQALAAAGgFIAAAAQAGgFAAgUIAAAAIAAgZQAAghAJgWIAAAAQAKgXAZgKIAAAAQgsgUAAhAIAAAAIAAggQAAgwAYgYIAAAAQAWgXAzAAIAAAAIBjAAIAAGdgAPJEdQgIAJAAAXIAAAAIAAApQAAAYAKAKIAAAAQAKAKASAAIAAAAIAaAAIAAh/IggAAQgSAAgGAKgAMPJ1IAAjqIhkDqIgvAAIAAmdIA6AAIAAD3IBlj3IAvAAIAAGdgAhVJ1IAAmdICwAAIAAA7IhuAAIAABzIBYAAIAAA7IhYAAIAAB5IBuAAIAAA7gAizJ1IAAliIg3AAIAACiQAAAtgFApIAAAAQgFAkgNAYIAAAAQgNAYgXALIAAAAQgXALgiAAIAAAAIgIAAIAAg7IAIAAQARAAAMgJIAAAAQALgKAGgRIAAAAQAGgSACgZIAAAAQABgWAAghIAAAAIAAjcIC1AAIAAGdgAm/J1IAAliIg3AAIAACiQAAAygEAkIAAAAQgEAkgOAYIAAAAQgNAXgWAMIAAAAQgYALgjAAIAAAAIgHAAIAAg7IAIAAQARAAAMgJIAAAAQALgLAGgQIAAAAQAGgSABgZIAAAAQACgWAAghIAAAAIAAjcIC0AAIAAGdgApPBRQgxgzABhfIAAAAIAAmbQgBhhAxgzIAAAAQAwgzBcAAIAAAAQBbAAAxAzIAAAAQAwAzABBhIAAAAIAAGbQgBBfgwAzIAAAAQgxAzhbAAIAAAAQhcAAgwgzgAnyohQgRASAAArIAAAAIAAGqQAAArARARIAAAAQARARAeAAIAAAAQAeAAARgRIAAAAQASgRAAgrIAAAAIAAmqQAAgrgSgSIAAAAQgSgRgdAAIAAAAQgdAAgSARgAPBB7IAAlBIgrAAQgrAAgUAXIAAAAQgSAXAAA3IAAAAIAABqQgBA0geAfIAAAAQgeAfhLAAIAAAAIgpAAIAAhxIAHAAQAVAAAMgJIAAAAQALgJAAgmIAAAAIAAgwQAAg+ASgrIAAAAQASgsAvgTIAAAAQhSgmAAh6IAAAAIAAg+QAAhbAsguIAAAAQAsgtBhAAIAAAAIC8AAIAAMVgANVoWQgQATAAArIAAAAIAABOQABAvATASIAAAAQAUASAjAAIAAAAIAxAAIAAjyIg8AAQghAAgPATgAH0B7IgWiOIiYAAIgVCOIhzAAIB/sVIC2AAIB+MVgAFWh+IB3AAIg7mQgAjQB7IAAsVIC8AAQBfAAAsAtIAAAAQArAuAABbIAAAAIAAAcQABA9gUAnIAAAAQgSAogrATIAAAAQAzATAVAsIAAAAQAVArAAA/IAAAAIAABBQAABagwAwIAAAAQgvAwhdAAIAAAAgAhUAKIBHAAQAfAAAQgQIAAAAQAQgQABgtIAAAAIAAhEQgBg4gSgUIAAAAQgSgUgqAAIAAAAIg4AAgAhUlYIAxAAQAiAAATgSIAAAAQAUgSAAgwIAAAAIAAgsQAAgrgPgTIAAAAQgQgTgfAAIAAAAIg8AAgAs0B7IAAlSIiOAAIAAFSIh8AAIAAsVIB8AAIAAFTICOAAIAAlTIB/AAIAAMVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(123).to({graphics:mask_graphics_123,x:120.1,y:143.8}).wait(125));

	// pic2
	this.instance_7 = new lib.sas("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(91.9,192,1,1,0,0,0,319,192);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(123).to({_off:false},0).to({rotation:1440},49).to({_off:true},23).wait(53));

	// Слой 12
	this.instance_8 = new lib.bg();
	this.instance_8.parent = this;
	this.instance_8.setTransform(120,200,1,1,0,0,0,120,200);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(113).to({_off:false},0).to({alpha:1},9).to({_off:true},73).wait(53));

	// text1
	this.instance_9 = new lib.text1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(118.5,167.8,1,1,0,0,0,98.5,79.7);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(90).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).to({_off:true},27).wait(125));

	// fade
	this.instance_10 = new lib.Path_6();
	this.instance_10.parent = this;
	this.instance_10.setTransform(120.1,190.8,1,1,0,0,0,120.1,190.8);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(87).to({_off:false},0).to({alpha:0.602},6,cjs.Ease.get(1)).to({_off:true},30).wait(125));

	// pic1
	this.instance_11 = new lib.eee();
	this.instance_11.parent = this;
	this.instance_11.setTransform(248.7,163.2,1,1,0,0,0,328.4,219);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(57).to({_off:false},0).to({x:231,alpha:1},6,cjs.Ease.get(1)).to({x:148.1},59).to({_off:true},1).wait(125));

	// Слой 12 - копия
	this.instance_12 = new lib.bg();
	this.instance_12.parent = this;
	this.instance_12.setTransform(120,200,1,1,0,0,0,120,200);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(44).to({_off:false},0).to({alpha:1},7).to({_off:true},105).wait(92));

	// mask2
	this.instance_13 = new lib.aaasas();
	this.instance_13.parent = this;
	this.instance_13.setTransform(120.1,258.1,1,1,0,0,0,109,61);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(31).to({x:330.1},12).to({_off:true},1).wait(204));

	// mask1
	this.instance_14 = new lib.aaasas();
	this.instance_14.parent = this;
	this.instance_14.setTransform(120.1,136.1,1,1,0,0,0,109,61);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(10).to({x:190.1},0).wait(11).to({x:240.1},0).to({_off:true},10).wait(217));

	// text1 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AI8MDQgZgbAAgxIAAAAIAAjTQAAgxAZgbIAAAAQAZgaAvAAIAAAAQAvAAAZAaIAAAAQAZAbAAAxIAAAAIAADTQAAAxgZAbIAAAAQgYAagwAAIAAAAQgvAAgZgagAJsHBQgJAJAAAWIAAAAIAADbQAAAWAJAJIAAAAQAJAJAPAAIAAAAQAPAAAJgJIAAAAQAJgJAAgWIAAAAIAAjbQAAgWgJgJIAAAAQgJgJgPAAIAAAAQgPAAgJAJgAAzMDQgYgaAAgyIAAAAIAAjTQAAgxAYgbIAAAAQAYgaAvAAIAAAAQAvAAAYAaIAAAAQAYAbAAAxIAAAAIAAAnIg8AAIAAgrQAAgWgJgJIAAAAQgJgJgPAAIAAAAQgPAAgKAJIAAAAQgIAJgBAWIAAAAIAADcQABAWAIAJIAAAAQAKAIAPAAIAAAAQAOAAAKgIIAAAAQAJgJAAgWIAAAAIAAg6IA8AAIAAA2QAAAxgYAaIAAAAQgYAagvAAIAAAAQgwAAgXgagAroMDQgYgbAAgxIAAAAIAAjTQAAgxAYgbIAAAAQAagaAuAAIAAAAQAvAAAZAaIAAAAQAZAbAAAxIAAAAIAADTQAAAxgZAbIAAAAQgYAagwAAIAAAAQgvAAgZgagAq3HBQgJAJAAAWIAAAAIAADbQAAAWAJAJIAAAAQAIAJAPAAIAAAAQAQAAAJgJIAAAAQAJgJAAgWIAAAAIAAjbQAAgWgJgJIAAAAQgJgJgQAAIAAAAQgPAAgIAJgAvAMDQgYgaAAgyIAAAAIAAjTQAAgxAYgbIAAAAQAZgaAuAAIAAAAQAwAAAXAaIAAAAQAZAbAAAxIAAAAIAAAnIg9AAIAAgrQAAgWgJgJIAAAAQgJgJgPAAIAAAAQgPAAgJAJIAAAAQgJAJAAAWIAAAAIAADcQAAAWAJAJIAAAAQAKAIAOAAIAAAAQAPAAAJgIIAAAAQAJgJAAgWIAAAAIAAg6IA9AAIAAA2QAAAxgZAaIAAAAQgXAagwAAIAAAAQguAAgZgagAOKMZIhQkmIAAEmIg5AAIAAmWIBQAAIBCDzIAAjzIA5AAIAAGWgAHHMZIAAmWIA/AAIAAGWgAEuMZIAAlcIhDAAIAAg6IDGAAIAAA6IhDAAIAAFcgAisMZIAAmWICsAAIAAA6IhtAAIAABxIBYAAIAAA6IhYAAIAAB3IBtAAIAAA6gAlnMZIAAmWIA/AAIAAFcIBqAAIAAA6gAojMZIAAmWIBAAAIAAFcIBqAAIAAA6gAJ/EaIg9o+Ig+I+IjoAAIh5w2IClAAIBbNSIBStSICjAAIBVNYIBYtYICUAAIh5Q2gAlpEaIAAw2IHNAAIAACaIkkAAIAAEtIDoAAIAACaIjoAAIAAE7IEkAAIAACagApoEaIjTsNIAAMNIiZAAIAAw2IDVAAICuKGIAAqGICXAAIAAQ2g");
	mask_1.setTransform(118.5,167.8);

	// pic1
	this.instance_15 = new lib.eee("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(119.8,211.5,1,1,0,0,0,253,213.5);

	var maskedShapeInstanceList = [this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({rotation:1080},51).to({_off:true},72).wait(125));

	// bg
	this.instance_16 = new lib.bg();
	this.instance_16.parent = this;
	this.instance_16.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(248));

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
		{src:"images/240x400_atlas_.jpg", id:"240x400_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;