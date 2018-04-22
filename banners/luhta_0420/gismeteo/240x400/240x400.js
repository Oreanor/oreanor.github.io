(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"240x400_atlas_P_", frames: [[292,0,148,180],[144,0,146,190],[0,0,142,204],[292,182,142,187],[0,290,226,27],[0,206,179,82]]},
		{name:"240x400_atlas_NP_", frames: [[0,0,240,255],[0,257,240,255]]}
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
	this.spriteSheet = ss["240x400_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["240x400_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["240x400_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._6 = function() {
	this.spriteSheet = ss["240x400_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.im_1 = function() {
	this.spriteSheet = ss["240x400_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.im_2 = function() {
	this.spriteSheet = ss["240x400_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.legal = function() {
	this.spriteSheet = ss["240x400_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.skidka = function() {
	this.spriteSheet = ss["240x400_atlas_P_"];
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
	this.instance.setTransform(-120,-127);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.v, new cjs.Rectangle(-120,-127,240,255), null);


(lib.qwe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA3DaIAAilIgmAAIg/ClIhrAAIBQi2QhCgkAAhRQAAgsAUgfQATgfAegPQAfgPAgAAIChAAIAAGzgAgWh+QgOAQAAAdQAAA8AxAAIAqAAIAAh5IgmAAQgXAAgQAQg");
	this.shape.setTransform(74.4,2.3,0.351,0.351);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah/DIQgfgfAAg7QAAgmAMgaQAMgbAYgTQAagTAlgPQAwgWAUgNQAWgQAAgZQAAgmguAAQgXgBgOAOQgOAPAAAbIAAAJIhgAAIAAgVQAAgaALgXQALgXATgQQATgRAcgKQAagJAgAAQBDgBAqAcQApAbAAA5IAAEQQAAAYADAPQACAOAIALIhnAAQgIgNAAgdQgQAcgVANQgUANglAAQgzAAgegegAgVAhQghAXAAAoQAAAbAKARQALAQAWAAQAXAAAQgPQAPgOAAgdIAAhpg");
	this.shape_1.setTransform(62,2.3,0.351,0.351);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABlDaIAAk0IAAAAIhGE0Ig9AAIhGk0IgBAAIAAE0IhgAAIAAmzICFAAIBAEjIBBkjICFAAIAAGzg");
	this.shape_2.setTransform(46.9,2.3,0.351,0.351);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhVEbQAOiDAoiAQAmiAA0hbIjeAAIAAhXIFGAAIAABRQg0BognB3QgkB3gJCOg");
	this.shape_3.setTransform(25.3,0,0.351,0.351);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AijEhIAAgeQAAg4ASgrQARgtAZgfQAbghAZgWIA0gwQAmglAKgUQALgVAAgeQAAhJg5AAQgbAAgPAUQgOAVAAAvIAAAfIhnAAIAAgiQAAg2AXgoQAWgoAmgTQAlgUAnAAQArAAAmATQAlATAWAiQAVAkAAAsQAAAsgUAsQgUAsglAiIhAA7QgbAbgUAbQgSAbgEAgIDFAAIAABXg");
	this.shape_4.setTransform(11.7,-0.2,0.351,0.351);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhZDTQgigSgQghQgPggAAgoIAAivQAAgoAPggQAPggAjgUQAjgSA2AAQA3AAAjASQAiAUAPAgQAQAgAAAoIAACvQAAAogQAgQgPAhgjASQgjATg2AAQg2AAgjgTgAgzhkIAADJQAAA1AzAAQAbAAAMgMQANgMAAgdIAAjJQAAgdgNgLQgMgNgbAAQgzAAAAA1g");
	this.shape_5.setTransform(-8.4,2.3,0.351,0.351);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAvDaIAAlmIhdAAIAAFmIhjAAIAAmzIEjAAIAAGzg");
	this.shape_6.setTransform(-21.5,2.3,0.351,0.351);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhGEcQgegKgTgVQgTgTgKgiQgJggAAguQAAhiBNgsQhDgkAAhgQAAgwATgfQATgfAigQQAggPArAAQAsAAAhAPQAhAQATAfQATAgAAAvQAABhhAAjQAnASASAgQARAjAAA5QAAA9gQAmQgRAngjARQgjARg3AAQgnAAgfgKgAgzBlIAAAdQAABPAzAAQA0AAAAhPIAAgdQAAhOg0ABQgzgBAABOgAgji+QgLATAAAqQAABJAuAAQAaAAAKgSQALgRAAgmQAAgqgKgTQgLgSgaAAQgYAAgLASg");
	this.shape_7.setTransform(-41.8,0,0.351,0.351);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AANEcIAAmGIiAAAIAAhOIANAAQA8AAAmgbQAjgcALgrIBLAAIAAI2g");
	this.shape_8.setTransform(-57.3,0,0.351,0.351);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhjDEQgoghAAg4IAAjVQAAgkASgdQASgcAhgPQAggPAqAAQAhgBAgANQAfAOAUAaQAUAaAAAlIAAA3IhiAAIAAgzQAAgSgLgLQgLgKgQABQgTgBgLALQgLAMAAAWIAADQQAAAtApAAQAQABALgKQALgKAAgTIAAg+IBiAAIAABCQAAAlgUAaQgUAagfAOQggANghgBQg/ABgogjg");
	this.shape_9.setTransform(-74.9,2.3,0.351,0.351);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.qwe, new cjs.Rectangle(-79.8,-10.3,159.7,20.7), null);


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
	this.shape.setTransform(65.7,27.7,0.352,0.352);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AiCKKIAA0TIEFAAIAAUTg");
	this.shape_1.setTransform(39.6,27.7,0.352,0.352);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("ACFKKIk/uOIgEAAIAAOOIjxAAIAA0TIEvAAIE8N5IADAAIAAt5IDxAAIAAUTg");
	this.shape_2.setTransform(12.9,27.7,0.352,0.352);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("ADqKKIg9kTIlZAAIg8ETIkRAAIFY0TIFEAAIFXUTgAh/CgID+AAIh9pIIgCAAg");
	this.shape_3.setTransform(-23.3,27.7,0.352,0.352);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("AFRKKIAAwNIgEAAIjnQNIjLAAIjnwNIgEAAIAAQNIjxAAIAA0TIGGAAIC6OVIADAAIC7uVIGEAAIAAUTg");
	this.shape_4.setTransform(-64.9,27.7,0.352,0.352);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1B").s().p("AD5K2IhAkmIlxAAIhAEmIkjAAIFv1rIFZAAIFvVrgAiHCrIEPAAIiGpvIgDAAg");
	this.shape_5.setTransform(66.2,-26.1,0.352,0.352);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1B").s().p("AiLK2IAAyFIkvAAIAAjmIN1AAIAADmIkvAAIAASFg");
	this.shape_6.setTransform(34.5,-26.1,0.352,0.352);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1B").s().p("ACjK2IAApoIlGAAIAAJoIkXAAIAA1rIEXAAIAAITIFGAAIAAoTIEYAAIAAVrg");
	this.shape_7.setTransform(-1,-26.1,0.352,0.352);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1B").s().p("AikKxQhQgPg+gxQg+guglhZQglhXAAiMIAAvGIEYAAIAAPGQAAA3AGAqQAHArATAgQASAhAgASQAgASAwAAQAzAAAfgSQAfgSASghQASggAIgrQAGgqAAg3IAAvGIEYAAIAAPGQAACDglBYQglBWg+AzQg+AyhQASQhRARhUAAQhSAAhSgPg");
	this.shape_8.setTransform(-38.4,-25.7,0.352,0.352);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1D1B").s().p("AmDK2IAA1rIEYAAIAASFIHvAAIAADmg");
	this.shape_9.setTransform(-71.4,-26.1,0.352,0.352);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hhh, new cjs.Rectangle(-85.2,-50.5,170.5,101.1), null);


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
	this.shape.setTransform(92.1,-2,0.354,0.354);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhaDlIAAlWIinAAIAAhzIIDAAIAABzIinAAIAAFWg");
	this.shape_1.setTransform(62.4,-2,0.354,0.354);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("ABmDlIAAi3IjLAAIAAC3Ii1AAIAAnJIC1AAIAACfIDLAAIAAifIC1AAIAAHJg");
	this.shape_2.setTransform(30.4,-2,0.354,0.354);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("AjODFQhDgsAAhqIAAkbIC1AAIAAEUQAAAqAYATQAXARAtAAQAvAAAWgRQAYgTAAgqIAAkUIC1AAIAAEbQAABqhDAsQg/AoiQAAQiPAAg/gog");
	this.shape_3.setTransform(-3.5,-1.7,0.354,0.354);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("AjmDlIAAnJIC1AAIAAFOIEYAAIAAB7g");
	this.shape_4.setTransform(-34.2,-2,0.354,0.354);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1B").s().p("AnDHEQi7i7AAkJQAAkIC7i7QC7i7EIAAQEJAAC7C7QC7C7AAEIQAAEJi7C7Qi7C7kJAAQkIAAi7i7gAhJjhQgnAggNAkIh4FQIF+AAQA5ABArggQAhgaAGgbImEAAIB6lgIgIgBQgjAAgoAhg");
	this.shape_5.setTransform(-80.2,0,0.354,0.354);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ghghgh, new cjs.Rectangle(-102.8,-22.6,205.8,45.3), null);


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
	this.instance.setTransform(-89.5,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ggg, new cjs.Rectangle(-89.5,-41,179,82), null);


(lib.dfgd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.legal();
	this.instance.parent = this;
	this.instance.setTransform(-4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dfgd, new cjs.Rectangle(-4,0,226,27), null);


(lib.bbvv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.im_1();
	this.instance.parent = this;
	this.instance.setTransform(-120,-127);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bbvv, new cjs.Rectangle(-120,-127,240,255), null);


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

	// Слой 2
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

	// Слой 2
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

	// Слой 2
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

	// Слой 2
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
(lib._240x400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		canvas.style.cursor = "pointer";
		canvas.addEventListener("click", function() {
		    window.callClick();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(360));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").p("Ayq/KMAlVAAAMAAAA+VMglVAAAg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	// 4
	this.instance = new lib.v();
	this.instance.parent = this;
	this.instance.setTransform(121,168,0.8,0.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(288).to({_off:false},0).wait(1).to({regY:0.5,scaleX:0.8,scaleY:0.8,y:168.4,alpha:0.019},0).wait(1).to({scaleX:0.82,scaleY:0.82,alpha:0.098},0).wait(1).to({scaleX:0.86,scaleY:0.86,alpha:0.311},0).wait(1).to({scaleX:0.94,scaleY:0.94,alpha:0.692},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:168.5,alpha:0.903},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.981},0).wait(1).to({regY:0,scaleX:1,scaleY:1,y:168,alpha:1},0).wait(57).to({regY:0.5,scaleX:1.01,scaleY:1.01,y:167.9,alpha:0.972},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:165.6,alpha:0.855},0).wait(1).to({scaleX:1.09,scaleY:1.09,y:159.6,alpha:0.551},0).wait(1).to({scaleX:1.16,scaleY:1.16,y:152.3,alpha:0.184},0).wait(1).to({scaleX:1.19,scaleY:1.19,y:149.3,alpha:0.034},0).wait(1).to({regY:0,scaleX:1.2,scaleY:1.2,y:148,alpha:0},0).wait(3));

	// plate4
	this.instance_1 = new lib.vv();
	this.instance_1.parent = this;
	this.instance_1.setTransform(180.2,343.8,0.5,0.5);
	this.instance_1.alpha = 0.301;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(221).to({_off:false},0).to({scaleX:1,scaleY:1,x:190.2,y:363.8,alpha:1},7,cjs.Ease.get(1)).wait(52).to({regX:-0.1,regY:-0.1,scaleX:0.99,scaleY:0.99,x:189.8,y:363.2,alpha:0.981},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:188.6,y:360.7,alpha:0.897},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:185.1,y:353.7,alpha:0.649},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:181.6,y:346.7,alpha:0.403},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:180.4,y:344.3,alpha:0.32},0).wait(1).to({regX:0,regY:0,scaleX:0.5,scaleY:0.5,x:180.2,y:343.8,alpha:0.301},0).to({_off:true},1).wait(74));

	// plate3
	this.instance_2 = new lib.bbbnbn();
	this.instance_2.parent = this;
	this.instance_2.setTransform(59.5,56,0.5,0.5);
	this.instance_2.alpha = 0.301;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(217).to({_off:false},0).to({scaleX:1,scaleY:1,x:49.5,y:36,alpha:1},7,cjs.Ease.get(1)).wait(54).to({regX:-0.2,regY:-0.1,scaleX:0.99,scaleY:0.99,x:49.6,y:36.4,alpha:0.981},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:50.8,y:38.9,alpha:0.897},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:54.4,y:46,alpha:0.649},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:57.9,y:53,alpha:0.403},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:59.1,y:55.4,alpha:0.32},0).wait(1).to({regX:0,regY:0,scaleX:0.5,scaleY:0.5,x:59.5,y:56,alpha:0.301},0).to({_off:true},1).wait(76));

	// 6.png
	this.instance_3 = new lib.jjjkl();
	this.instance_3.parent = this;
	this.instance_3.setTransform(312,226.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(213).to({_off:false},0).to({x:162},6,cjs.Ease.get(0.64)).to({x:142},59).to({x:-74},6,cjs.Ease.get(1)).to({_off:true},1).wait(75));

	// 4.png
	this.instance_4 = new lib.jjjj();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-72,173);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(213).to({_off:false},0).to({x:78},6,cjs.Ease.get(0.64)).to({x:98},59).to({x:308},6,cjs.Ease.get(1)).to({_off:true},1).wait(75));

	// logo
	this.instance_5 = new lib.ghghgh();
	this.instance_5.parent = this;
	this.instance_5.setTransform(116.9,347.4,0.8,0.8,0,0,0,0.1,0.1);
	this.instance_5.alpha = 0.309;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(139).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:116.8,alpha:1},11,cjs.Ease.get(1)).wait(59).to({regX:0.1,regY:0.1,scaleX:1.2,scaleY:1.2,y:357.3,alpha:0},5).to({_off:true},1).wait(77).to({_off:false,scaleX:0.8,scaleY:0.8,x:116.9,y:347.4,alpha:0.309},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:116.8,alpha:1},7,cjs.Ease.get(1)).wait(55).to({scaleX:1,scaleY:1,y:347.6,alpha:0.973},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:348.8,alpha:0.86},0).wait(1).to({scaleX:1.09,scaleY:1.09,y:351.7,alpha:0.562},0).wait(1).to({scaleX:1.16,scaleY:1.16,y:355.4,alpha:0.189},0).wait(1).to({scaleX:1.19,scaleY:1.19,y:357,alpha:0.035},0).wait(1).to({regX:0.1,regY:0.1,scaleX:1.2,scaleY:1.2,y:357.3,alpha:0},0).wait(1));

	// 2
	this.instance_6 = new lib.bbvv();
	this.instance_6.parent = this;
	this.instance_6.setTransform(120,167,0.8,0.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(132).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},9,cjs.Ease.get(1)).wait(65).to({regX:0.1,regY:0.1,scaleX:1.2,scaleY:1.2,y:147,alpha:0},5).to({_off:true},1).wait(148));

	// plate2
	this.instance_7 = new lib.fgggg();
	this.instance_7.parent = this;
	this.instance_7.setTransform(189.8,365.1,0.5,0.5,0,0,0,0.1,0.1);
	this.instance_7.alpha = 0.301;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(78).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,alpha:1},6,cjs.Ease.get(1)).wait(46).to({scaleX:0.99,scaleY:0.99,alpha:0.983},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.918},0).wait(1).to({scaleX:0.89,scaleY:0.89,alpha:0.776},0).wait(1).to({scaleX:0.76,scaleY:0.76,alpha:0.522},0).wait(1).to({scaleX:0.63,scaleY:0.63,alpha:0.251},0).wait(1).to({scaleX:0.55,scaleY:0.55,alpha:0.09},0).wait(1).to({scaleX:0.51,scaleY:0.51,alpha:0.019},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.5,scaleY:0.5,alpha:0},0).to({_off:true},1).wait(222));

	// plate1
	this.instance_8 = new lib.vvbv();
	this.instance_8.parent = this;
	this.instance_8.setTransform(48.8,35.9,0.5,0.5,0,0,0,0.1,0.1);
	this.instance_8.alpha = 0.301;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(74).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,alpha:1},6,cjs.Ease.get(1)).wait(48).to({regX:-0.1,regY:-0.1,scaleX:0.99,scaleY:0.99,x:48.7,y:35.8,alpha:0.983},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.918},0).wait(1).to({scaleX:0.89,scaleY:0.89,alpha:0.776},0).wait(1).to({scaleX:0.76,scaleY:0.76,alpha:0.522},0).wait(1).to({scaleX:0.63,scaleY:0.63,alpha:0.251},0).wait(1).to({scaleX:0.55,scaleY:0.55,alpha:0.09},0).wait(1).to({scaleX:0.51,scaleY:0.51,alpha:0.019},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.5,scaleY:0.5,x:48.8,y:35.9,alpha:0},0).to({_off:true},1).wait(224));

	// 1 - копия
	this.instance_9 = new lib.hh();
	this.instance_9.parent = this;
	this.instance_9.setTransform(321.5,232.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(70).to({_off:false},0).to({x:161.3},6,cjs.Ease.get(0.81)).to({x:141.5},52).to({x:-78.5},7,cjs.Ease.get(1)).to({_off:true},1).wait(224));

	// 1
	this.instance_10 = new lib.ghgh();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-39.5,200.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(70).to({_off:false},0).to({x:118.7},6,cjs.Ease.get(0.81)).to({x:140.5},52).to({x:350.5},7,cjs.Ease.get(1)).to({_off:true},1).wait(224));

	// legal
	this.instance_11 = new lib.dfgd();
	this.instance_11.parent = this;
	this.instance_11.setTransform(120,379,1,1,0,0,0,108,11);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(3).to({_off:false},0).to({alpha:1},13).wait(48).to({alpha:0},5).to({_off:true},1).wait(290));

	// skidka
	this.instance_12 = new lib.ggg();
	this.instance_12.parent = this;
	this.instance_12.setTransform(120,255,0.5,0.5);
	this.instance_12.alpha = 0.172;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(3).to({_off:false},0).to({scaleX:1,scaleY:1,x:120.5,y:275,alpha:1},7,cjs.Ease.get(1)).wait(53).to({scaleX:0.8,scaleY:0.8,y:257.2,alpha:0.301},7,cjs.Ease.get(-1)).to({_off:true},1).wait(289));

	// date
	this.instance_13 = new lib.qwe();
	this.instance_13.parent = this;
	this.instance_13.setTransform(332.4,200.6);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(7).to({_off:false},0).wait(1).to({x:327.9},0).wait(1).to({x:311.4},0).wait(1).to({x:276.9},0).wait(1).to({x:223.7},0).wait(1).to({x:173},0).wait(1).to({x:141.6},0).wait(1).to({x:126.5},0).wait(1).to({x:122.4},0).wait(46).to({scaleX:0.8,scaleY:0.8,x:122,y:198.8,alpha:0.301},7,cjs.Ease.get(-1)).to({_off:true},1).wait(291));

	// mania
	this.instance_14 = new lib.hhh();
	this.instance_14.parent = this;
	this.instance_14.setTransform(123.6,141.1,0.5,0.5,0,0,0,0,0.1);
	this.instance_14.alpha = 0.172;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({regY:0,scaleX:1,scaleY:1,y:121.1,alpha:1},7,cjs.Ease.get(1)).wait(52).to({scaleX:0.8,scaleY:0.8,x:123,y:136.9,alpha:0.301},7,cjs.Ease.get(-1)).to({_off:true},1).wait(293));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFEC00").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape_1.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(360));

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
		{src:"images/240x400_atlas_P_.png", id:"240x400_atlas_P_"},
		{src:"images/240x400_atlas_NP_.jpg", id:"240x400_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;