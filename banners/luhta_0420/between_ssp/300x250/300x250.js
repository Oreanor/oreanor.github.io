(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x250_atlas_P_", frames: [[292,0,148,180],[144,0,146,190],[0,0,142,204],[292,182,142,187],[0,278,274,25],[0,206,153,70]]},
		{name:"300x250_atlas_NP_", frames: [[0,202,300,200],[0,0,300,200]]}
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



(lib._1pngкопия = function() {
	this.spriteSheet = ss["300x250_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["300x250_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["300x250_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._6 = function() {
	this.spriteSheet = ss["300x250_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.im_1 = function() {
	this.spriteSheet = ss["300x250_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.im_2 = function() {
	this.spriteSheet = ss["300x250_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.legal = function() {
	this.spriteSheet = ss["300x250_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.skidka = function() {
	this.spriteSheet = ss["300x250_atlas_P_"];
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


(lib.v = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.im_2();
	this.instance.parent = this;
	this.instance.setTransform(-120,-167);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.v, new cjs.Rectangle(-120,-167,300,200), null);


(lib.qwe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA3DaIAAilIgmAAIg/ClIhrAAIBQi2QhCgkAAhRQAAgsAUgfQATgfAegPQAfgPAgAAIChAAIAAGzgAgWh+QgOAQAAAdQAAA8AxAAIAqAAIAAh5IgmAAQgXAAgQAQg");
	this.shape.setTransform(57.5,1.7,0.271,0.271);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah/DIQgfgfAAg7QAAgmAMgaQAMgbAYgTQAagTAlgPQAwgWAUgNQAWgQAAgZQAAgmguAAQgXgBgOAOQgOAPAAAbIAAAJIhgAAIAAgVQAAgaALgXQALgXATgQQATgRAcgKQAagJAgAAQBDgBAqAcQApAbAAA5IAAEQQAAAYADAPQACAOAIALIhnAAQgIgNAAgdQgQAcgVANQgUANglAAQgzAAgegegAgVAhQghAXAAAoQAAAbAKARQALAQAWAAQAXAAAQgPQAPgOAAgdIAAhpg");
	this.shape_1.setTransform(48,1.8,0.271,0.271);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABlDaIAAk0IAAAAIhGE0Ig9AAIhGk0IgBAAIAAE0IhgAAIAAmzICFAAIBAEjIBBkjICFAAIAAGzg");
	this.shape_2.setTransform(36.3,1.7,0.271,0.271);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhVEbQAOiDAoiAQAmiAA0hbIjeAAIAAhXIFGAAIAABRQg0BognB3QgkB3gJCOg");
	this.shape_3.setTransform(19.6,0,0.271,0.271);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AijEhIAAgeQAAg4ASgrQARgtAZgfQAbghAZgWIA0gwQAmglAKgUQALgVAAgeQAAhJg5AAQgbAAgPAUQgOAVAAAvIAAAfIhnAAIAAgiQAAg2AXgoQAWgoAmgTQAlgUAnAAQArAAAmATQAlATAWAiQAVAkAAAsQAAAsgUAsQgUAsglAiIhAA7QgbAbgUAbQgSAbgEAgIDFAAIAABXg");
	this.shape_4.setTransform(9.1,-0.2,0.271,0.271);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhZDTQgigSgQghQgPggAAgoIAAivQAAgoAPggQAPggAjgUQAjgSA2AAQA3AAAjASQAiAUAPAgQAQAgAAAoIAACvQAAAogQAgQgPAhgjASQgjATg2AAQg2AAgjgTgAgzhkIAADJQAAA1AzAAQAbAAAMgMQANgMAAgdIAAjJQAAgdgNgLQgMgNgbAAQgzAAAAA1g");
	this.shape_5.setTransform(-6.5,1.8,0.271,0.271);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAvDaIAAlmIhdAAIAAFmIhjAAIAAmzIEjAAIAAGzg");
	this.shape_6.setTransform(-16.6,1.7,0.271,0.271);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhGEcQgegKgTgVQgTgTgKgiQgJggAAguQAAhiBNgsQhDgkAAhgQAAgwATgfQATgfAigQQAggPArAAQAsAAAhAPQAhAQATAfQATAgAAAvQAABhhAAjQAnASASAgQARAjAAA5QAAA9gQAmQgRAngjARQgjARg3AAQgnAAgfgKgAgzBlIAAAdQAABPAzAAQA0AAAAhPIAAgdQAAhOg0ABQgzgBAABOgAgji+QgLATAAAqQAABJAuAAQAaAAAKgSQALgRAAgmQAAgqgKgTQgLgSgaAAQgYAAgLASg");
	this.shape_7.setTransform(-32.3,0,0.271,0.271);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AANEcIAAmGIiAAAIAAhOIANAAQA8AAAmgbQAjgcALgrIBLAAIAAI2g");
	this.shape_8.setTransform(-44.3,0,0.271,0.271);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhjDEQgoghAAg4IAAjVQAAgkASgdQASgcAhgPQAggPAqAAQAhgBAgANQAfAOAUAaQAUAaAAAlIAAA3IhiAAIAAgzQAAgSgLgLQgLgKgQABQgTgBgLALQgLAMAAAWIAADQQAAAtApAAQAQABALgKQALgKAAgTIAAg+IBiAAIAABCQAAAlgUAaQgUAagfAOQggANghgBQg/ABgogjg");
	this.shape_9.setTransform(-57.9,1.8,0.271,0.271);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.qwe, new cjs.Rectangle(-61.7,-8,123.4,16), null);


(lib.jjjkl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._6();
	this.instance.parent = this;
	this.instance.setTransform(-71,-93.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.jjjkl, new cjs.Rectangle(-71,-93.5,142,187), null);


(lib.jjjj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._4();
	this.instance.parent = this;
	this.instance.setTransform(-71,-102);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.jjjj, new cjs.Rectangle(-71,-102,142,204), null);


(lib.hhh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("ADpKKIg8kTIlZAAIg8ETIkRAAIFY0TIFDAAIFYUTgAh/CgID+AAIh9pIIgDAAg");
	this.shape.setTransform(59.2,24.9,0.317,0.317);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AiCKKIAA0TIEFAAIAAUTg");
	this.shape_1.setTransform(35.7,24.9,0.317,0.317);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("ACFKKIk/uOIgEAAIAAOOIjxAAIAA0TIEvAAIE8N5IADAAIAAt5IDxAAIAAUTg");
	this.shape_2.setTransform(11.7,24.9,0.317,0.317);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("ADqKKIg9kTIlZAAIg8ETIkRAAIFY0TIFEAAIFXUTgAh/CgID+AAIh9pIIgCAAg");
	this.shape_3.setTransform(-21,24.9,0.317,0.317);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("AFRKKIAAwNIgEAAIjnQNIjLAAIjnwNIgEAAIAAQNIjxAAIAA0TIGGAAIC6OVIADAAIC7uVIGEAAIAAUTg");
	this.shape_4.setTransform(-58.4,24.9,0.317,0.317);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1B").s().p("AD5K2IhAkmIlxAAIhAEmIkjAAIFv1rIFZAAIFvVrgAiHCrIEPAAIiGpvIgDAAg");
	this.shape_5.setTransform(59.6,-23.5,0.317,0.317);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1B").s().p("AiLK2IAAyFIkvAAIAAjmIN1AAIAADmIkvAAIAASFg");
	this.shape_6.setTransform(31.1,-23.5,0.317,0.317);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1B").s().p("ACjK2IAApoIlGAAIAAJoIkXAAIAA1rIEXAAIAAITIFGAAIAAoTIEYAAIAAVrg");
	this.shape_7.setTransform(-0.8,-23.5,0.317,0.317);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1B").s().p("AikKxQhQgPg+gxQg+guglhZQglhXAAiMIAAvGIEYAAIAAPGQAAA3AGAqQAHArATAgQASAhAgASQAgASAwAAQAzAAAfgSQAfgSASghQASggAIgrQAGgqAAg3IAAvGIEYAAIAAPGQAACDglBYQglBWg+AzQg+AyhQASQhRARhUAAQhSAAhSgPg");
	this.shape_8.setTransform(-34.5,-23.1,0.317,0.317);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1D1B").s().p("AmDK2IAA1rIEYAAIAASFIHvAAIAADmg");
	this.shape_9.setTransform(-64.3,-23.5,0.317,0.317);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hhh, new cjs.Rectangle(-76.7,-45.4,153.5,91), null);


(lib.hh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._1pngкопия();
	this.instance.parent = this;
	this.instance.setTransform(-74,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hh, new cjs.Rectangle(-74,-90,148,180), null);


(lib.ghghgh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AByDlIgUg0Ii7AAIgUA0IjAAAIDDnJIDdAAIDDHJgAA3BBIg2iaIgBAAIg2CaIBtAAg");
	this.shape.setTransform(82.8,-2.8,0.319,0.319);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhaDlIAAlWIinAAIAAhzIIDAAIAABzIinAAIAAFWg");
	this.shape_1.setTransform(56.1,-2.8,0.319,0.319);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("ABmDlIAAi3IjLAAIAAC3Ii1AAIAAnJIC1AAIAACfIDLAAIAAifIC1AAIAAHJg");
	this.shape_2.setTransform(27.3,-2.8,0.319,0.319);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("AjODFQhDgsAAhqIAAkbIC1AAIAAEUQAAAqAYATQAXARAtAAQAvAAAWgRQAYgTAAgqIAAkUIC1AAIAAEbQAABqhDAsQg/AoiQAAQiPAAg/gog");
	this.shape_3.setTransform(-3.2,-2.5,0.319,0.319);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("AjmDlIAAnJIC1AAIAAFOIEYAAIAAB7g");
	this.shape_4.setTransform(-30.8,-2.8,0.319,0.319);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1B").s().p("AnDHEQi7i7AAkJQAAkIC7i7QC7i7EIAAQEJAAC7C7QC7C7AAEIQAAEJi7C7Qi7C7kJAAQkIAAi7i7gAhJjhQgnAggNAkIh4FQIF+AAQA5ABArggQAhgaAGgbImEAAIB6lgIgIgBQgjAAgoAhg");
	this.shape_5.setTransform(-72.2,-1,0.319,0.319);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ghghgh, new cjs.Rectangle(-92.5,-21.3,185.1,40.8), null);


(lib.ghgh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(-110,-117);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ghgh, new cjs.Rectangle(-110,-117,146,190), null);


(lib.ggg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.skidka();
	this.instance.parent = this;
	this.instance.setTransform(-77,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ggg, new cjs.Rectangle(-77,-41,153,70), null);


(lib.dfgd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.legal();
	this.instance.parent = this;
	this.instance.setTransform(-29,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dfgd, new cjs.Rectangle(-29,0,274,25), null);


(lib.bbvv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.im_1();
	this.instance.parent = this;
	this.instance.setTransform(-120,-167);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bbvv, new cjs.Rectangle(-120,-167,300,200), null);


(lib._9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag6DtQgbgHgTgOQgSgPgLgTQgKgUAAgWIAAgHIBhAAIAAAFQAAASANAJQAOAJAUAAQAuABAAg8IAAhAQgoAhgpAAQgwAAgfgcQgegbAAgyIAAhxQAAgkAVgaQAVgZAggMQAggLAmAAQAoAAAfALQAgAMAUAZQAUAaAAAmIAAD1QAAAmgQAeQgRAeggARQggARgvAAQgfAAgbgIgAguh/IAABdQAAAVANANQAOALATAAQAUAAAOgLQANgMAAgXIAAhcQAAgYgMgMQgMgMgWAAQgvAAAAAwg");
	this.shape.setTransform(5.1,8.6,0.352,0.352);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib._9, new cjs.Rectangle(0,0,10.2,17.3), null);


(lib.vv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._9();
	this.instance.parent = this;
	this.instance.setTransform(23.1,12.2,1.271,1.269,0,0,0,5,8.7);

	this.instance_1 = new lib._9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(7.5,12.1,1.271,1.269,0,0,0,5,8.6);

	this.instance_2 = new lib._9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(18,-12.5,0.997,0.997,0,0,0,5,8.7);

	this.instance_3 = new lib._9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(5.8,-12.5,0.997,0.997,0,0,0,5,8.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5).p("APkklI/HJK");
	this.shape.setTransform(-0.1,-11.9,0.351,0.351);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjBE0IAAgfQAAg7AVgwQAUguAegiQAfgjAfgZIA+gyQAsgoAMgVQANgYAAgeQAAhOhDAAQghAAgRAWQgRAUAAAzIAAAhIh6AAIAAgkQAAg7AcgqQAbgqArgUQAsgVAvAAQA1AAArAUQAsAUAZAkQAZAmAAAwQAAAvgYAvQgXAvgsAlIhMA+QgiAdgVAcQgWAegFAhIDpAAIAABdg");
	this.shape_1.setTransform(-8.6,11.9,0.351,0.351);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiOELQgsguAAhJIAAgkIB0AAIAAAVQAABaBCAAQApAAAMgXQANgYAAgxQAAg4gSgYQgRgXgqAAIg3AAIAAhSIAlAAQA2AAARgdQARgdAAgqQAAhAg7AAQggAAgQATQgSAUAAAiIAAAVIhyAAIAAgaQAAhGAwgsQAxgtBTAAQA3AAApASQApASAWAiQAWAiAAAvQAAA7gYAhQgYAggwAPQBqAWAACEQAABBgWAoQgXApgrASQgtATg+AAQhZAAgtgvg");
	this.shape_2.setTransform(-24.6,12.1,0.351,0.351);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhsDOQgngjAAhAIAAgVIBdAAQAAAwANASQANASAbAAQAUAAAKgHQALgGAFgRQAFgQAAghIAAguQAAhFg1AAQgRABgMAIQgNAKgFAOIhbAAIALj5ID+AAIAABJIitAAIgFBkQAhgeAoAAQBAAAAhAkQAgAlAABBIAAArQAAAogIAeQgJAfgRASQgSATgbAKQgeAJgkAAQhHAAgogjg");
	this.shape_3.setTransform(-6.7,-12.3,0.351,0.351);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhIDpQgfgLgUgaQgUgYAAgoIAAj0QAAglARgfQASgfAfgQQAhgRArAAQAqAAAhANQAhAOASAYQASAYAAAfIAAAGIhfAAIAAgFQgBgQgMgKQgLgKgYAAQgXAAgLAOQgMAPgBAjIAAA4QANgNAZgKQAZgKATAAQAgAAAZAMQAYAMAOAZQANAXAAAiIAABxQAAA5goAbQgoAchAAAQgnAAgggMgAghgBQgOALAAAYIAABeQAAAwAuAAQAwAAABgwIAAhgQgBgVgOgLQgNgNgUAAQgTAAgOAMg");
	this.shape_4.setTransform(-18.9,-12.4,0.351,0.351);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhfAdIAAg5IC/AAIAAA5g");
	this.shape_5.setTransform(-29.2,-10.1,0.351,0.351);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1B").s().p("AyNMlIAA5JMAkaAAAIAAZJg");
	this.shape_6.setTransform(-0.1,-0.1,0.351,0.351);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.vv, new cjs.Rectangle(-41,-28.3,81.8,56.5), null);


(lib.fgggg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._9();
	this.instance.parent = this;
	this.instance.setTransform(19.9,-12.2,0.994,0.997,0,0,0,5.1,8.5);

	this.instance_1 = new lib._9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(7.6,-12.2,0.994,0.997,0,0,0,5.1,8.5);

	this.instance_2 = new lib._9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(23.9,12.2,1.271,1.275,0,0,0,5.1,8.6);

	this.instance_3 = new lib._9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(8.2,12.2,1.271,1.275,0,0,0,5.1,8.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5).p("APkkkI/HJJ");
	this.shape.setTransform(2.5,-11.8,0.351,0.351);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhmEuQASiLAuiKQAwiJA7hgIkGAAIAAhdIGCAAIAABWQhBB0gqB6QgsB9gKCag");
	this.shape_1.setTransform(-7.5,12.2,0.351,0.351);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiNEMQgtgvAAhJIAAgjIB1AAIAAAVQAABaBBAAQAogBANgXQAOgXAAgyQAAg4gSgYQgTgWgpAAIg2AAIAAhSIAkAAQA2gBARgdQASgcAAgrQgBhAg7AAQgfAAgRATQgSATABAjIAAAVIhzAAIAAgZQAAhHAxgsQAwgtBTAAQA3AAApASQApATAWAhQAVAiAAAwQAAA6gXAgQgYAhgwAPQBqAWAACEQAABAgWApQgXAqgrASQgrARhAABQhZgBgsgtg");
	this.shape_2.setTransform(-23.3,12.2,0.351,0.351);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiXDxIAAgZQAAgvAQgkQAQgjAYgcQAagcAWgSIAwgoQAjgfAJgRQAKgQAAgaQAAg8g0AAQgaAAgNAQQgOARAAAoIAAAZIheAAIAAgcQAAguAVghQAVghAigPQAigRAlAAQApAAAiAQQAjAQATAcQAUAdAAAlQAAAkgTAmQgTAlgiAcIg7AxQgZAWgSAXQgSAXgDAaIC2AAIAABJg");
	this.shape_3.setTransform(-4.9,-12.5,0.351,0.351);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhIDpQgggLgTgaQgUgYAAgoIAAj0QAAglARgfQARgeAggRQAhgRAsAAQApAAAhANQAhAOASAYQATAYgBAfIAAAGIhfAAIAAgFQAAgQgNgKQgLgLgXAAQgYAAgMAPQgLAPAAAjIAAA4QAMgNAZgKQAYgKAUAAQAhAAAXAMQAYAMAPAZQANAYAAAhIAABxQAAA5gnAbQgoAchBAAQgmAAghgMgAgggBQgOALAAAYIAABeQAAAwAtAAQAxAAAAgwIAAhgQgBgVgNgLQgOgNgTAAQgUAAgNAMg");
	this.shape_4.setTransform(-17.4,-12.3,0.351,0.351);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhfAdIAAg5IC/AAIAAA5g");
	this.shape_5.setTransform(-27.8,-10,0.351,0.351);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1B").s().p("AyNMlIAA5JMAkaAAAIAAZJg");
	this.shape_6.setTransform(0,0,0.351,0.351);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fgggg, new cjs.Rectangle(-40.8,-28.2,81.8,56.5), null);


(lib._999 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._9();
	this.instance.parent = this;
	this.instance.setTransform(29.5,8.6,1,1,0,0,0,5,8.6);

	this.instance_1 = new lib._9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(17.3,8.6,1,1,0,0,0,5,8.6);

	this.instance_2 = new lib._9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(5,8.7,1,1,0,0,0,5,8.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._999, new cjs.Rectangle(0,0,34.6,17.3), null);


(lib.vvbv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5).p("APkkkI/HJJ");
	this.shape.setTransform(-0.1,-11.9,0.351,0.351);

	this.instance = new lib._9();
	this.instance.parent = this;
	this.instance.setTransform(22.4,12,1.271,1.275,0,0,0,5.1,8.6);

	this.instance_1 = new lib._9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(6.6,12,1.271,1.275,0,0,0,5.1,8.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhmEuQASiLAuiKQAwiJA7hgIkGAAIAAhdIGCAAIAABWQhBB1gqB5QgsB9gKCag");
	this.shape_1.setTransform(-9.2,12.1,0.351,0.351);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAPEvIAAh6IjTAAIAAhtIC9l2ICQAAIAAGGIA8AAIAABdIg8AAIAAB6gAhsBYIB7AAIAAj6g");
	this.shape_2.setTransform(-25.1,12.1,0.351,0.351);

	this.instance_2 = new lib._999();
	this.instance_2.parent = this;
	this.instance_2.setTransform(4.5,-12.4,1,1,0,0,0,17.3,8.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhPDsQANhuAlhrQAkhrAvhKIjMAAIAAhJIEtAAIAABDQgyBbgiBfQghBhgJB5g");
	this.shape_3.setTransform(-20.1,-12.4,0.351,0.351);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhfAdIAAg5IC/AAIAAA5g");
	this.shape_4.setTransform(-30.5,-10.1,0.351,0.351);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1B").s().p("AyMMlIAA5JMAkaAAAIAAZJg");
	this.shape_5.setTransform(-0.1,-0.1,0.351,0.351);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance_2},{t:this.shape_2},{t:this.shape_1},{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.vvbv, new cjs.Rectangle(-41,-28.3,81.8,56.5), null);


(lib.bbbnbn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._999();
	this.instance.parent = this;
	this.instance.setTransform(5.7,-12.6,0.994,0.994,0,0,0,17.3,8.6);

	this.instance_1 = new lib._999();
	this.instance_1.parent = this;
	this.instance_1.setTransform(6.9,12.2,1.277,1.277,0,0,0,17.4,8.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5).p("APkkkI/HJJ");
	this.shape.setTransform(-0.2,-11.9,0.351,0.351);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiNEMQgtgvAAhJIAAgkIB1AAIAAAWQAABZBBAAQAoAAANgYQAOgXAAgxQAAg5gTgXQgSgXgpAAIg2AAIAAhSIAkAAQA2AAASgdQAQgcABgsQgBhAg7AAQggAAgQAUQgRATAAAjIAAAVIhzAAIAAgaQAAhGAwgtQAxgrBTgBQA5AAAoASQAoASAWAiQAWAjAAAvQAAA7gYAfQgYAhgvAPQBpAVAACFQAABBgWAoQgXApgrASQgrAThAAAQhYgBgtgtg");
	this.shape_1.setTransform(-24.7,12.1,0.351,0.351);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhIDqQgfgMgUgZQgTgagBgnIAAj0QAAglARgeQAQgeAhgSQAhgRArAAQAqAAAhANQAhAPASAXQASAYAAAfIAAAGIhgAAIAAgFQAAgQgMgKQgLgKgYAAQgXAAgMAOQgMAPAAAjIAAA4QAOgOAYgJQAZgKATAAQAfAAAZAMQAZAOAOAXQANAYAAAhIAABxQAAA5gnAcQgpAbhAAAQgmAAghgLgAghgBQgOALAAAYIAABeQABAwAsAAQAxAAAAgwIAAhgQAAgUgOgMQgNgNgUAAQgTAAgOAMg");
	this.shape_2.setTransform(-18.9,-12.4,0.351,0.351);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhfAeIAAg7IC/AAIAAA7g");
	this.shape_3.setTransform(-29.3,-10.1,0.351,0.351);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("AyMMlIAA5JMAkZAAAIAAZJg");
	this.shape_4.setTransform(-0.2,-0.1,0.351,0.351);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bbbnbn, new cjs.Rectangle(-41,-28.3,81.8,56.5), null);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.currLoop = 0;
	}
	this.frame_24 = function() {
		if (this.currLoop == 1){this.stop()}
	}
	this.frame_361 = function() {
		this.currLoop++;
		this.gotoAndPlay(2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(337).call(this.frame_361).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,124.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(362));

	// 4
	this.instance = new lib.v();
	this.instance.parent = this;
	this.instance.setTransform(121,168,0.9,0.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(281).to({_off:false},0).wait(1).to({regX:30,regY:-67,scaleX:0.9,scaleY:0.9,x:148,y:107.6,alpha:0.009},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:148.1,y:107.4,alpha:0.041},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:148.3,y:106.9,alpha:0.111},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:148.7,y:106,alpha:0.251},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:149.5,y:104.3,alpha:0.502},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:150.2,y:102.6,alpha:0.752},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:150.6,y:101.7,alpha:0.89},0).wait(1).to({scaleX:1,scaleY:1,x:150.9,y:101.2,alpha:0.959},0).wait(1).to({scaleX:1,scaleY:1,y:101,alpha:0.991},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:121,y:168,alpha:1},0).wait(56).to({regX:30,regY:-67,scaleX:1,scaleY:1,x:151,y:101,alpha:0.994},0).wait(1).to({scaleX:1,scaleY:1,x:151.1,y:100.8,alpha:0.972},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:151.2,y:100.6,alpha:0.929},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:151.5,y:100.1,alpha:0.855},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:151.8,y:99.2,alpha:0.734},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:152.4,y:98,alpha:0.551},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:153,y:96.6,alpha:0.342},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:153.5,y:95.6,alpha:0.184},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:153.8,y:94.9,alpha:0.088},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:153.9,y:94.6,alpha:0.034},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:154,y:94.4,alpha:0.008},0).wait(1).to({regX:0,regY:0,scaleX:1.1,scaleY:1.1,x:121,y:168,alpha:0},0).wait(4));

	// plate4
	this.instance_1 = new lib.vv();
	this.instance_1.parent = this;
	this.instance_1.setTransform(250.2,213.8,0.5,0.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(221).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},7,cjs.Ease.get(1)).wait(51).to({regX:-0.1,regY:-0.1,scaleX:0.99,scaleY:0.99,x:250.1,y:213.7,alpha:0.986},0).wait(1).to({scaleX:0.97,scaleY:0.97,alpha:0.93},0).wait(1).to({scaleX:0.9,scaleY:0.9,alpha:0.793},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:250.2,y:213.8,alpha:0.498},0).wait(1).to({scaleX:0.6,scaleY:0.6,alpha:0.205},0).wait(1).to({scaleX:0.54,scaleY:0.54,alpha:0.069},0).wait(1).to({scaleX:0.51,scaleY:0.51,alpha:0.014},0).wait(1).to({regX:0,regY:0,scaleX:0.5,scaleY:0.5,alpha:0},0).to({_off:true},1).wait(75));

	// plate3
	this.instance_2 = new lib.bbbnbn();
	this.instance_2.parent = this;
	this.instance_2.setTransform(49.5,36,0.5,0.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(217).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},7,cjs.Ease.get(1)).wait(53).to({regX:-0.2,regY:-0.1,scaleX:0.99,scaleY:0.99,x:49.3,y:35.9,alpha:0.99},0).wait(1).to({scaleX:0.97,scaleY:0.97,alpha:0.951},0).wait(1).to({scaleX:0.9,scaleY:0.9,alpha:0.855},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:49.4,y:36,alpha:0.649},0).wait(1).to({scaleX:0.6,scaleY:0.6,alpha:0.444},0).wait(1).to({scaleX:0.54,scaleY:0.54,alpha:0.349},0).wait(1).to({scaleX:0.51,scaleY:0.51,alpha:0.311},0).wait(1).to({regX:0,regY:0,scaleX:0.5,scaleY:0.5,x:49.5,alpha:0.301},0).to({_off:true},1).wait(77));

	// 6.png
	this.instance_3 = new lib.jjjkl();
	this.instance_3.parent = this;
	this.instance_3.setTransform(352,146.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(213).to({_off:false},0).to({x:202},6,cjs.Ease.get(0.64)).to({x:182},59).to({x:-34},6,cjs.Ease.get(1)).to({_off:true},1).wait(77));

	// 4.png
	this.instance_4 = new lib.jjjj();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-52,123);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(213).to({_off:false},0).to({x:98},6,cjs.Ease.get(0.64)).to({x:118},59).to({x:328},6,cjs.Ease.get(1)).to({_off:true},1).wait(77));

	// logo
	this.instance_5 = new lib.ghghgh();
	this.instance_5.parent = this;
	this.instance_5.setTransform(146.9,225.4,0.8,0.8,0,0,0,0.1,0.1);
	this.instance_5.alpha = 0.309;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(135).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:146.8,alpha:1},13,cjs.Ease.get(1)).wait(53).to({regY:-1,scaleX:1,scaleY:1,y:224.4,alpha:0.994},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.973},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.931},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.86},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:224.3,alpha:0.742},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.562},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:0.351},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.189},0).wait(1).to({scaleX:1.09,scaleY:1.09,alpha:0.09},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.035},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.008},0).wait(1).to({regY:0,scaleX:1.1,scaleY:1.1,y:225.3,alpha:0},0).to({_off:true},1).wait(79).to({_off:false,regX:0.1,regY:0.1,scaleX:0.8,scaleY:0.8,x:146.9,y:225.4,alpha:0.309},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:146.8,alpha:1},7,cjs.Ease.get(1)).wait(51).to({regY:-1,scaleX:1,scaleY:1,y:224.4,alpha:0.994},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.973},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.931},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.86},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:224.3,alpha:0.742},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.562},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:0.351},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.189},0).wait(1).to({scaleX:1.09,scaleY:1.09,alpha:0.09},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.035},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.008},0).wait(1).to({regY:0,scaleX:1.1,scaleY:1.1,y:225.3,alpha:0},0).wait(1));

	// 2
	this.instance_6 = new lib.bbvv();
	this.instance_6.parent = this;
	this.instance_6.setTransform(120,167,0.9,0.9);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(131).to({_off:false},0).wait(1).to({regX:30,regY:-67,scaleX:0.9,scaleY:0.9,x:147,y:106.6,alpha:0.013},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:147.2,y:106.3,alpha:0.062},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:147.5,y:105.6,alpha:0.165},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:148,y:104.3,alpha:0.353},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:148.8,y:102.6,alpha:0.609},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:149.4,y:101.2,alpha:0.816},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:149.8,y:100.4,alpha:0.932},0).wait(1).to({scaleX:1,scaleY:1,x:149.9,y:100.1,alpha:0.985},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:120,y:167,alpha:1},0).wait(58).to({regX:30,regY:-67,scaleX:1,scaleY:1,x:150,y:100,alpha:0.994},0).wait(1).to({scaleX:1,scaleY:1,x:150.1,y:99.8,alpha:0.973},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:150.2,y:99.6,alpha:0.931},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:150.4,y:99.1,alpha:0.86},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:150.8,y:98.3,alpha:0.742},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:151.3,y:97.1,alpha:0.562},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:152,y:95.7,alpha:0.351},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:152.5,y:94.6,alpha:0.189},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:152.8,y:93.9,alpha:0.09},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:152.9,y:93.6,alpha:0.035},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:153,y:93.4,alpha:0.008},0).wait(1).to({regX:0,regY:0,scaleX:1.1,scaleY:1.1,x:120,y:167,alpha:0},0).to({_off:true},1).wait(152));

	// plate2
	this.instance_7 = new lib.fgggg();
	this.instance_7.parent = this;
	this.instance_7.setTransform(249.8,214.1,0.5,0.5,0,0,0,0.1,0.1);
	this.instance_7.alpha = 0.301;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(78).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,alpha:1},6,cjs.Ease.get(1)).wait(46).to({scaleX:0.98,scaleY:0.98,alpha:0.968},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.835},0).wait(1).to({scaleX:0.76,scaleY:0.76,alpha:0.522},0).wait(1).to({scaleX:0.59,scaleY:0.59,alpha:0.184},0).wait(1).to({scaleX:0.52,scaleY:0.52,alpha:0.035},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.5,scaleY:0.5,alpha:0},0).to({_off:true},1).wait(226));

	// plate1
	this.instance_8 = new lib.vvbv();
	this.instance_8.parent = this;
	this.instance_8.setTransform(48.8,35.9,0.5,0.5,0,0,0,0.1,0.1);
	this.instance_8.alpha = 0.301;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(74).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,alpha:1},6,cjs.Ease.get(1)).wait(48).to({regX:-0.1,regY:-0.1,scaleX:0.98,scaleY:0.98,x:48.7,y:35.8,alpha:0.968},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.835},0).wait(1).to({scaleX:0.76,scaleY:0.76,alpha:0.522},0).wait(1).to({scaleX:0.59,scaleY:0.59,alpha:0.184},0).wait(1).to({scaleX:0.52,scaleY:0.52,alpha:0.035},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.5,scaleY:0.5,x:48.8,y:35.9,alpha:0},0).to({_off:true},1).wait(228));

	// 1 - копия
	this.instance_9 = new lib.hh();
	this.instance_9.parent = this;
	this.instance_9.setTransform(361.5,152.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(70).to({_off:false},0).to({x:201.3},6,cjs.Ease.get(0.81)).to({x:181.5},54).to({x:-68.5},7,cjs.Ease.get(1)).to({_off:true},1).wait(224));

	// 1
	this.instance_10 = new lib.ghgh();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0.5,140.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(70).to({_off:false},0).to({x:158.7},6,cjs.Ease.get(0.81)).to({x:173.5},54).to({x:410.5},7,cjs.Ease.get(1)).to({_off:true},1).wait(224));

	// Слой 1
	this.instance_11 = new lib.dfgd();
	this.instance_11.parent = this;
	this.instance_11.setTransform(150,232,1,1,0,0,0,108,11);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(7).to({_off:false},0).to({alpha:1},11).wait(46).to({alpha:0},5).to({_off:true},1).wait(292));

	// skidka
	this.instance_12 = new lib.ggg();
	this.instance_12.parent = this;
	this.instance_12.setTransform(150,183,0.5,0.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(4).to({_off:false},0).to({scaleX:1,scaleY:1,x:150.5},7,cjs.Ease.get(1)).wait(52).to({scaleX:0.8,scaleY:0.8,y:165.2,alpha:0.301},7,cjs.Ease.get(-1)).to({_off:true},1).wait(291));

	// date
	this.instance_13 = new lib.qwe();
	this.instance_13.parent = this;
	this.instance_13.setTransform(362.4,124.1);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(8).to({_off:false},0).wait(1).to({x:359.6},0).wait(1).to({x:349.8},0).wait(1).to({x:330.1},0).wait(1).to({x:297.4},0).wait(1).to({x:253.7},0).wait(1).to({x:211.8},0).wait(1).to({x:181.8},0).wait(1).to({x:163.9},0).wait(1).to({x:155},0).wait(1).to({x:152.4},0).wait(43).to({scaleX:0.8,scaleY:0.8,x:152,y:122.3,alpha:0.301},7,cjs.Ease.get(-1)).to({_off:true},1).wait(293));

	// mania
	this.instance_14 = new lib.hhh();
	this.instance_14.parent = this;
	this.instance_14.setTransform(153.6,58.1,0.5,0.5,0,0,0,0,0.1);
	this.instance_14.alpha = 0.449;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({regY:0,scaleX:1,scaleY:1,alpha:1},7,cjs.Ease.get(1)).wait(52).to({scaleX:0.8,scaleY:0.8,x:153,y:73.9,alpha:0.301},7,cjs.Ease.get(-1)).to({_off:true},1).wait(295));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFEC00").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape_1.setTransform(150,125,1.25,0.625);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(362));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.5,124.4,301,251);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/300x250_atlas_P_.png", id:"300x250_atlas_P_"},
		{src:"images/300x250_atlas_NP_.jpg", id:"300x250_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;