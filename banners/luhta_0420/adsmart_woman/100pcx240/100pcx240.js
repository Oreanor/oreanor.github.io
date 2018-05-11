(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"100pcx240_atlas_P_", frames: [[292,0,148,180],[144,0,146,190],[0,0,142,204],[0,206,142,187],[144,192,295,39],[144,233,153,70]]},
		{name:"100pcx240_atlas_NP_", frames: [[0,404,600,400],[0,0,600,402]]}
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
	this.spriteSheet = ss["100pcx240_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["100pcx240_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["100pcx240_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._6 = function() {
	this.spriteSheet = ss["100pcx240_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.im_1 = function() {
	this.spriteSheet = ss["100pcx240_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.im_2 = function() {
	this.spriteSheet = ss["100pcx240_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.legal = function() {
	this.spriteSheet = ss["100pcx240_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.skidka = function() {
	this.spriteSheet = ss["100pcx240_atlas_P_"];
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
	this.instance.setTransform(-120,-167,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.v, new cjs.Rectangle(-120,-167,300,201), null);


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


(lib.jjjjk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEC00").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape.setTransform(150,25,1.25,0.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.jjjjk, new cjs.Rectangle(0,0,300,50), null);


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
	this.shape.setTransform(53.2,22.5,0.285,0.285);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AiCKKIAA0TIEFAAIAAUTg");
	this.shape_1.setTransform(32.1,22.5,0.285,0.285);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("ACFKKIk/uOIgEAAIAAOOIjxAAIAA0TIEvAAIE8N5IADAAIAAt5IDxAAIAAUTg");
	this.shape_2.setTransform(10.5,22.5,0.285,0.285);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("ADqKKIg9kTIlZAAIg8ETIkRAAIFY0TIFEAAIFXUTgAh/CgID+AAIh9pIIgCAAg");
	this.shape_3.setTransform(-18.9,22.5,0.285,0.285);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("AFRKKIAAwNIgEAAIjnQNIjLAAIjnwNIgEAAIAAQNIjxAAIAA0TIGGAAIC6OVIADAAIC7uVIGEAAIAAUTg");
	this.shape_4.setTransform(-52.6,22.5,0.285,0.285);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1B").s().p("AD5K2IhAkmIlxAAIhAEmIkjAAIFv1rIFZAAIFvVrgAiHCrIEPAAIiGpvIgDAAg");
	this.shape_5.setTransform(53.7,-21.1,0.285,0.285);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1B").s().p("AiLK2IAAyFIkvAAIAAjmIN1AAIAADmIkvAAIAASFg");
	this.shape_6.setTransform(27.9,-21.1,0.285,0.285);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1B").s().p("ACjK2IAApoIlGAAIAAJoIkXAAIAA1rIEXAAIAAITIFGAAIAAoTIEYAAIAAVrg");
	this.shape_7.setTransform(-0.8,-21.1,0.285,0.285);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1B").s().p("AikKxQhQgPg+gxQg+guglhZQglhXAAiMIAAvGIEYAAIAAPGQAAA3AGAqQAHArATAgQASAhAgASQAgASAwAAQAzAAAfgSQAfgSASghQASggAIgrQAGgqAAg3IAAvGIEYAAIAAPGQAACDglBYQglBWg+AzQg+AyhQASQhRARhUAAQhSAAhSgPg");
	this.shape_8.setTransform(-31.1,-20.8,0.285,0.285);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1D1B").s().p("AmDK2IAA1rIEYAAIAASFIHvAAIAADmg");
	this.shape_9.setTransform(-57.8,-21.1,0.285,0.285);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hhh, new cjs.Rectangle(-69,-40.8,138.1,81.9), null);


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


(lib.fghfgh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("A2GRkMAAAgjHMAsNAAAMAAAAjHg");
	this.shape.setTransform(141.5,112.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fghfgh, new cjs.Rectangle(0,0,283,224.8), null);


(lib.ffddd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEC00").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape.setTransform(150,120,1.25,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ffddd, new cjs.Rectangle(0,0,300,240), null);


(lib.dfgd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.legal();
	this.instance.parent = this;
	this.instance.setTransform(-33,-8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dfgd, new cjs.Rectangle(-33,-8,295,39), null);


(lib.bbvv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.im_1();
	this.instance.parent = this;
	this.instance.setTransform(-120,-167,0.5,0.5);

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

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkA8IAAgWIgIAAIAAgSIAIAAIAAgKIgIAAIAAgTIAIAAIAAgyIAjAAQASAAAJADQAIADAGAIQAFAJAAALQAAAIgCAGQgCAHgEADQgEADgFADQgFACgGABIgNACIgMAAIgEAAIAAAKIAgAAIAAASIggAAIAAAWgAgMgJIACAAQAQAAAFgBQAEgCADgDQACgDAAgGQAAgGgDgDQgDgFgGgBIgGAAIgLAAIgDAAg");
	this.shape.setTransform(32.3,16.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeAyIAAgTIgHAAIAAgPIAHAAIAAgIIgHAAIAAgPIAHAAIAAgqIAdAAQAPAAAIACQAGADAFAHQAFAHAAAJQgBAHgCAFQgCAGgCACQgDADgFACIgJADIgLABIgKAAIgDAAIAAAIIAaAAIAAAPIgaAAIAAATgAgKgHIABAAQAOAAAEgBQADgCACgDQACgCAAgFQABgFgDgDQgDgDgFgBIgEAAIgKAAIgCAAg");
	this.shape_1.setTransform(25.1,-9.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1
	this.instance = new lib._9();
	this.instance.parent = this;
	this.instance.setTransform(18.1,12.2,1.271,1.269,0,0,0,5,8.7);

	this.instance_1 = new lib._9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2.5,12.1,1.271,1.269,0,0,0,5,8.6);

	this.instance_2 = new lib._9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(13,-12.5,0.997,0.997,0,0,0,5,8.7);

	this.instance_3 = new lib._9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.8,-12.5,0.997,0.997,0,0,0,5,8.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5).p("APkklI/HJK");
	this.shape_2.setTransform(-5.1,-11.9,0.351,0.351);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjBE0IAAgfQAAg7AVgwQAUguAegiQAfgjAfgZIA+gyQAsgoAMgVQANgYAAgeQAAhOhDAAQghAAgRAWQgRAUAAAzIAAAhIh6AAIAAgkQAAg7AcgqQAbgqArgUQAsgVAvAAQA1AAArAUQAsAUAZAkQAZAmAAAwQAAAvgYAvQgXAvgsAlIhMA+QgiAdgVAcQgWAegFAhIDpAAIAABdg");
	this.shape_3.setTransform(-13.6,11.9,0.351,0.351);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiOELQgsguAAhJIAAgkIB0AAIAAAVQAABaBCAAQApAAAMgXQANgYAAgxQAAg4gSgYQgRgXgqAAIg3AAIAAhSIAlAAQA2AAARgdQARgdAAgqQAAhAg7AAQggAAgQATQgSAUAAAiIAAAVIhyAAIAAgaQAAhGAwgsQAxgtBTAAQA3AAApASQApASAWAiQAWAiAAAvQAAA7gYAhQgYAggwAPQBqAWAACEQAABBgWAoQgXApgrASQgtATg+AAQhZAAgtgvg");
	this.shape_4.setTransform(-29.6,12.1,0.351,0.351);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhsDOQgngjAAhAIAAgVIBdAAQAAAwANASQANASAbAAQAUAAAKgHQALgGAFgRQAFgQAAghIAAguQAAhFg1AAQgRABgMAIQgNAKgFAOIhbAAIALj5ID+AAIAABJIitAAIgFBkQAhgeAoAAQBAAAAhAkQAgAlAABBIAAArQAAAogIAeQgJAfgRASQgSATgbAKQgeAJgkAAQhHAAgogjg");
	this.shape_5.setTransform(-11.7,-12.3,0.351,0.351);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhIDpQgfgLgUgaQgUgYAAgoIAAj0QAAglARgfQASgfAfgQQAhgRArAAQAqAAAhANQAhAOASAYQASAYAAAfIAAAGIhfAAIAAgFQgBgQgMgKQgLgKgYAAQgXAAgLAOQgMAPgBAjIAAA4QANgNAZgKQAZgKATAAQAgAAAZAMQAYAMAOAZQANAXAAAiIAABxQAAA5goAbQgoAchAAAQgnAAgggMgAghgBQgOALAAAYIAABeQAAAwAuAAQAwAAABgwIAAhgQgBgVgOgLQgNgNgUAAQgTAAgOAMg");
	this.shape_6.setTransform(-23.9,-12.4,0.351,0.351);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhfAdIAAg5IC/AAIAAA5g");
	this.shape_7.setTransform(-34.2,-10.1,0.351,0.351);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1B").s().p("AyNMlIAA5JMAkaAAAIAAZJg");
	this.shape_8.setTransform(-2.5,-0.1,0.373,0.351);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.vv, new cjs.Rectangle(-46,-28.3,87.1,56.5), null);


(lib.qqq6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// img
	this.instance = new lib.bbvv();
	this.instance.parent = this;
	this.instance.setTransform(119.9,167);
	this.instance.alpha = 0;

	this.instance_1 = new lib.v();
	this.instance_1.parent = this;
	this.instance_1.setTransform(122.9,160.3,0.9,0.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(131).to({scaleX:0.9,scaleY:0.9,x:122.9,y:160.3},0).wait(1).to({regX:30,regY:-67,scaleX:0.9,scaleY:0.9,x:149.9,y:100,alpha:0.013},0).wait(1).to({scaleX:0.91,scaleY:0.91,alpha:0.062},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.165},0).wait(1).to({scaleX:0.94,scaleY:0.94,alpha:0.353},0).wait(1).to({scaleX:0.96,scaleY:0.96,y:99.9,alpha:0.609},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:100,alpha:0.816},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:99.9,alpha:0.932},0).wait(1).to({scaleX:1,scaleY:1,x:149.8,y:100,alpha:0.985},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:119.9,y:167,alpha:1},0).wait(58).to({regX:30,regY:-67,scaleX:1,scaleY:1,x:149.9,y:100,alpha:0.994},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.973},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.931},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.86},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.742},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.562},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:0.351},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:150,alpha:0.189},0).wait(1).to({scaleX:1.09,scaleY:1.09,alpha:0.09},0).wait(1).to({scaleX:1.1,scaleY:1.1,y:100.1,alpha:0.035},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.008},0).wait(1).to({regX:0,regY:0,scaleX:1.1,scaleY:1.1,x:116.9,y:173.7,alpha:0},0).to({_off:true},1).wait(152));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(281).to({_off:false},0).wait(1).to({regX:30,regY:-66.5,scaleX:0.9,scaleY:0.9,x:149.9,y:100.5,alpha:0.009},0).wait(1).to({scaleX:0.9,scaleY:0.9,alpha:0.041},0).wait(1).to({scaleX:0.91,scaleY:0.91,y:100.4,alpha:0.111},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:100.5,alpha:0.251},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:100.4,alpha:0.502},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.752},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:149.8,y:100.5,alpha:0.89},0).wait(1).to({scaleX:1,scaleY:1,x:149.9,y:100.4,alpha:0.959},0).wait(1).to({scaleX:1,scaleY:1,x:149.8,alpha:0.991},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:119.9,y:167,alpha:1},0).wait(56).to({regX:30,regY:-66.5,scaleX:1,scaleY:1,x:149.9,y:100.5,alpha:0.994},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.972},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.929},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.855},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.734},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.551},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:0.342},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:100.6,alpha:0.184},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:150,alpha:0.088},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.034},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.008},0).wait(1).to({regX:0,regY:0,scaleX:1.1,scaleY:1.1,x:116.9,y:173.7,alpha:0},0).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,0,300,200);


(lib.qqq5aaaa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.ghghgh();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.9,0.8,0.8,0,0,0,0.1,0.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(73).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:1,alpha:1},13,cjs.Ease.get(1)).wait(264).to({regY:-1,scaleX:1,scaleY:1,y:0,alpha:0.994},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.973},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.931},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.86},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.742},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.562},0).wait(1).to({scaleX:1.07,scaleY:1.07,y:0.1,alpha:0.351},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:0,alpha:0.189},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:0.1,alpha:0.09},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.035},0).wait(1).to({scaleX:1.1,scaleY:1.1,y:0.1,alpha:0.008},0).wait(1).to({regY:0,scaleX:1.1,scaleY:1.1,x:0,y:1.1,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-16.3,148.1,32.6);


(lib.qqq5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.ghghgh();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.9,0.8,0.8,0,0,0,0.1,0.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(135).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:1,alpha:1},13,cjs.Ease.get(1)).wait(53).to({regY:-1,scaleX:1,scaleY:1,y:0,alpha:0.994},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.973},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.931},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.86},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.742},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.562},0).wait(1).to({scaleX:1.07,scaleY:1.07,y:0.1,alpha:0.351},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:0,alpha:0.189},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:0.1,alpha:0.09},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.035},0).wait(1).to({scaleX:1.1,scaleY:1.1,y:0.1,alpha:0.008},0).wait(1).to({regY:0,scaleX:1.1,scaleY:1.1,x:0,y:1.1,alpha:0},0).to({_off:true},1).wait(79).to({_off:false,regX:0.1,regY:0.1,scaleX:0.8,scaleY:0.8,x:0.1,y:0.9,alpha:0.309},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:1,alpha:1},7,cjs.Ease.get(1)).wait(51).to({regY:-1,scaleX:1,scaleY:1,y:0,alpha:0.994},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.973},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.931},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.86},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.742},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.562},0).wait(1).to({scaleX:1.07,scaleY:1.07,y:0.1,alpha:0.351},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:0,alpha:0.189},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:0.1,alpha:0.09},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.035},0).wait(1).to({scaleX:1.1,scaleY:1.1,y:0.1,alpha:0.008},0).wait(1).to({regY:0,scaleX:1.1,scaleY:1.1,x:0,y:1.1,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-16.3,148.1,32.6);


(lib.qqq4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// legal
	this.instance = new lib.dfgd();
	this.instance.parent = this;
	this.instance.setTransform(0,12,1,1,0,0,0,108,11);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({x:-6.5,alpha:1},11).wait(46).to({x:-6},0).to({x:0,alpha:0},5).to({_off:true},1).wait(292));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141,-7,295,39);


(lib.qqq3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// skidka
	this.instance = new lib.ggg();
	this.instance.parent = this;
	this.instance.setTransform(0.3,3,0.5,0.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({scaleX:1,scaleY:1,x:0.5,y:6,alpha:1},7,cjs.Ease.get(1)).wait(52).to({scaleX:0.8,scaleY:0.8,x:0.4,y:4.8,alpha:0.301},7,cjs.Ease.get(-1)).to({_off:true},1).wait(291));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.2,-17.5,76.5,35);


(lib.qqq2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// date
	this.instance = new lib.qwe();
	this.instance.parent = this;
	this.instance.setTransform(0,-0.7,0.8,0.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({scaleX:0.8,scaleY:0.8,alpha:0.013},0).wait(1).to({scaleX:0.81,scaleY:0.81,y:-0.6,alpha:0.06},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:0.1,y:-0.4,alpha:0.154},0).wait(1).to({scaleX:0.86,scaleY:0.86,y:-0.2,alpha:0.31},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:0.2,y:0.2,alpha:0.517},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:0.3,y:0.6,alpha:0.717},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:0.8,alpha:0.86},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:0.4,y:1,alpha:0.945},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.988},0).wait(1).to({scaleX:1,scaleY:1,y:1.1,alpha:1},0).wait(43).to({scaleX:0.8,scaleY:0.8,x:0,y:-0.7,alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(293));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.3,-7.1,98.7,12.8);


(lib.qqq = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mania
	this.instance = new lib.hhh();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.8,0.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:1},7,cjs.Ease.get(1)).wait(52).to({scaleX:0.8,scaleY:0.8,alpha:0.301},7,cjs.Ease.get(-1)).to({_off:true},1).wait(295));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.2,-32.7,110.5,65.5);


(lib.logobg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.jjjjk();
	this.instance.parent = this;
	this.instance.setTransform(150,25,1,1,0,0,0,150,25);
	this.instance.alpha = 0;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEC00").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape.setTransform(150,25,1.25,0.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},135).to({state:[]},78).to({state:[{t:this.shape}]},79).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,50);


(lib.fgggg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkA8IAAgWIgIAAIAAgSIAIAAIAAgKIgIAAIAAgTIAIAAIAAgyIAjAAQASAAAJADQAJADAFAIQAFAJAAALQAAAIgCAGQgDAHgDADQgEADgFADQgFACgGABIgNACIgNAAIgDAAIAAAKIAgAAIAAASIggAAIAAAWgAgMgJIACAAQAQAAAFgBQAEgCACgDQADgDAAgGQAAgGgDgDQgDgFgHgBIgFAAIgLAAIgDAAg");
	this.shape.setTransform(33.8,16.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeAyIAAgTIgGAAIAAgPIAGAAIAAgIIgGAAIAAgPIAGAAIAAgqIAdAAQAPAAAHACQAIADAEAHQAFAHgBAJQAAAHgCAFQgBAGgEACQgDADgEACIgJADIgLABIgKAAIgCAAIAAAIIAaAAIAAAPIgaAAIAAATgAgJgHIAAAAQAOAAAEgBQAEgCACgDQACgCAAgFQgBgFgCgDQgCgDgGgBIgFAAIgJAAIgBAAg");
	this.shape_1.setTransform(26.6,-9.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1
	this.instance = new lib._9();
	this.instance.parent = this;
	this.instance.setTransform(14.9,-12.2,0.994,0.997,0,0,0,5.1,8.5);

	this.instance_1 = new lib._9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2.6,-12.2,0.994,0.997,0,0,0,5.1,8.5);

	this.instance_2 = new lib._9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(18.9,12.2,1.271,1.275,0,0,0,5.1,8.6);

	this.instance_3 = new lib._9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(3.2,12.2,1.271,1.275,0,0,0,5.1,8.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5).p("APkkkI/HJJ");
	this.shape_2.setTransform(-2.5,-11.8,0.351,0.351);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhmEuQASiLAuiKQAwiJA7hgIkGAAIAAhdIGCAAIAABWQhBB0gqB6QgsB9gKCag");
	this.shape_3.setTransform(-12.5,12.2,0.351,0.351);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiNEMQgtgvAAhJIAAgjIB1AAIAAAVQAABaBBAAQAogBANgXQAOgXAAgyQAAg4gSgYQgTgWgpAAIg2AAIAAhSIAkAAQA2gBARgdQASgcAAgrQgBhAg7AAQgfAAgRATQgSATABAjIAAAVIhzAAIAAgZQAAhHAxgsQAwgtBTAAQA3AAApASQApATAWAhQAVAiAAAwQAAA6gXAgQgYAhgwAPQBqAWAACEQAABAgWApQgXAqgrASQgrARhAABQhZgBgsgtg");
	this.shape_4.setTransform(-28.3,12.2,0.351,0.351);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiXDxIAAgZQAAgvAQgkQAQgjAYgcQAagcAWgSIAwgoQAjgfAJgRQAKgQAAgaQAAg8g0AAQgaAAgNAQQgOARAAAoIAAAZIheAAIAAgcQAAguAVghQAVghAigPQAigRAlAAQApAAAiAQQAjAQATAcQAUAdAAAlQAAAkgTAmQgTAlgiAcIg7AxQgZAWgSAXQgSAXgDAaIC2AAIAABJg");
	this.shape_5.setTransform(-9.9,-12.5,0.351,0.351);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhIDpQgggLgTgaQgUgYAAgoIAAj0QAAglARgfQARgeAggRQAhgRAsAAQApAAAhANQAhAOASAYQATAYgBAfIAAAGIhfAAIAAgFQAAgQgNgKQgLgLgXAAQgYAAgMAPQgLAPAAAjIAAA4QAMgNAZgKQAYgKAUAAQAhAAAXAMQAYAMAPAZQANAYAAAhIAABxQAAA5gnAbQgoAchBAAQgmAAghgMgAgggBQgOALAAAYIAABeQAAAwAtAAQAxAAAAgwIAAhgQgBgVgNgLQgOgNgTAAQgUAAgNAMg");
	this.shape_6.setTransform(-22.4,-12.3,0.351,0.351);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhfAdIAAg5IC/AAIAAA5g");
	this.shape_7.setTransform(-32.8,-10,0.351,0.351);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1B").s().p("AyNMlIAA5JMAkaAAAIAAZJg");
	this.shape_8.setTransform(-1.8,0,0.378,0.351);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fgggg, new cjs.Rectangle(-45.8,-28.2,88,56.5), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgkA8IAAgWIgIAAIAAgSIAIAAIAAgKIgIAAIAAgTIAIAAIAAgyIAjAAQASAAAJADQAIADAGAIQAFAJAAALQAAAIgCAGQgCAHgEADQgEADgFADQgFACgGABIgNACIgMAAIgEAAIAAAKIAgAAIAAASIggAAIAAAWgAgMgJIACAAQAQAAAFgBQAEgCADgDQACgDAAgGQAAgGgDgDQgDgFgGgBIgGAAIgLAAIgDAAg");
	this.shape.setTransform(36.8,16.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeAyIAAgTIgHAAIAAgPIAHAAIAAgIIgHAAIAAgPIAHAAIAAgqIAdAAQAPAAAIACQAGADAFAHQAFAHAAAJQgBAHgCAFQgCAGgCACQgDADgFACIgJADIgLABIgKAAIgDAAIAAAIIAaAAIAAAPIgaAAIAAATgAgKgHIABAAQAOAAAEgBQADgCACgDQACgCAAgFQABgFgDgDQgDgDgFgBIgEAAIgKAAIgCAAg");
	this.shape_1.setTransform(29.6,-9.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5).p("APkkkI/HJJ");
	this.shape_2.setTransform(-0.1,-11.9,0.351,0.351);

	this.instance = new lib._9();
	this.instance.parent = this;
	this.instance.setTransform(22.4,12,1.271,1.275,0,0,0,5.1,8.6);

	this.instance_1 = new lib._9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(6.6,12,1.271,1.275,0,0,0,5.1,8.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhmEuQASiLAuiKQAwiJA7hgIkGAAIAAhdIGCAAIAABWQhBB1gqB5QgsB9gKCag");
	this.shape_3.setTransform(-9.2,12.1,0.351,0.351);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAPEvIAAh6IjTAAIAAhtIC9l2ICQAAIAAGGIA8AAIAABdIg8AAIAAB6gAhsBYIB7AAIAAj6g");
	this.shape_4.setTransform(-25.1,12.1,0.351,0.351);

	this.instance_2 = new lib._999();
	this.instance_2.parent = this;
	this.instance_2.setTransform(4.5,-12.4,1,1,0,0,0,17.3,8.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhPDsQANhuAlhrQAkhrAvhKIjMAAIAAhJIEtAAIAABDQgyBbgiBfQghBhgJB5g");
	this.shape_5.setTransform(-20.1,-12.4,0.351,0.351);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhfAdIAAg5IC/AAIAAA5g");
	this.shape_6.setTransform(-30.5,-10.1,0.351,0.351);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1B").s().p("AyMMlIAA5JMAkaAAAIAAZJg");
	this.shape_7.setTransform(2.5,-0.1,0.373,0.351);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.instance_2},{t:this.shape_4},{t:this.shape_3},{t:this.instance_1},{t:this.instance},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.vvbv, new cjs.Rectangle(-41,-28.3,87,56.5), null);


(lib.bbbnbn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkA8IAAgWIgIAAIAAgSIAIAAIAAgKIgIAAIAAgTIAIAAIAAgyIAjAAQASAAAJADQAIADAGAIQAFAJAAALQAAAIgCAGQgCAHgEADQgEADgFADQgFACgGABIgNACIgMAAIgEAAIAAAKIAgAAIAAASIggAAIAAAWgAgMgJIACAAQAQAAAFgBQAEgCADgDQACgDAAgGQAAgGgDgDQgDgFgGgBIgGAAIgLAAIgDAAg");
	this.shape.setTransform(36.8,16.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeAyIAAgTIgHAAIAAgPIAHAAIAAgIIgHAAIAAgPIAHAAIAAgqIAdAAQAPAAAIACQAGADAFAHQAFAHAAAJQgBAHgCAFQgCAGgCACQgDADgFACIgJADIgLABIgKAAIgDAAIAAAIIAaAAIAAAPIgaAAIAAATgAgKgHIABAAQAOAAAEgBQADgCACgDQACgCAAgFQABgFgDgDQgDgDgFgBIgEAAIgKAAIgCAAg");
	this.shape_1.setTransform(29.6,-9.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1
	this.instance = new lib._999();
	this.instance.parent = this;
	this.instance.setTransform(5.7,-12.6,0.994,0.994,0,0,0,17.3,8.6);

	this.instance_1 = new lib._999();
	this.instance_1.parent = this;
	this.instance_1.setTransform(6.9,12.2,1.277,1.277,0,0,0,17.4,8.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5).p("APkkkI/HJJ");
	this.shape_2.setTransform(-0.2,-11.9,0.351,0.351);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiNEMQgtgvAAhJIAAgkIB1AAIAAAWQAABZBBAAQAoAAANgYQAOgXAAgxQAAg5gTgXQgSgXgpAAIg2AAIAAhSIAkAAQA2AAASgdQAQgcABgsQgBhAg7AAQggAAgQAUQgRATAAAjIAAAVIhzAAIAAgaQAAhGAwgtQAxgrBTgBQA5AAAoASQAoASAWAiQAWAjAAAvQAAA7gYAfQgYAhgvAPQBpAVAACFQAABBgWAoQgXApgrASQgrAThAAAQhYgBgtgtg");
	this.shape_3.setTransform(-24.7,12.1,0.351,0.351);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhIDqQgfgMgUgZQgTgagBgnIAAj0QAAglARgeQAQgeAhgSQAhgRArAAQAqAAAhANQAhAPASAXQASAYAAAfIAAAGIhgAAIAAgFQAAgQgMgKQgLgKgYAAQgXAAgMAOQgMAPAAAjIAAA4QAOgOAYgJQAZgKATAAQAfAAAZAMQAZAOAOAXQANAYAAAhIAABxQAAA5gnAcQgpAbhAAAQgmAAghgLgAghgBQgOALAAAYIAABeQABAwAsAAQAxAAAAgwIAAhgQAAgUgOgMQgNgNgUAAQgTAAgOAMg");
	this.shape_4.setTransform(-18.9,-12.4,0.351,0.351);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhfAeIAAg7IC/AAIAAA7g");
	this.shape_5.setTransform(-29.3,-10.1,0.351,0.351);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1B").s().p("AyMMlIAA5JMAkZAAAIAAZJg");
	this.shape_6.setTransform(2.5,-0.1,0.373,0.351);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bbbnbn, new cjs.Rectangle(-41,-28.3,87,56.5), null);


(lib.qqq7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// plate2
	this.instance = new lib.fgggg();
	this.instance.parent = this;
	this.instance.setTransform(109.8,84.1,0.5,0.5,0,0,0,0.1,0.1);
	this.instance.alpha = 0.301;
	this.instance._off = true;

	this.instance_1 = new lib.vv();
	this.instance_1.parent = this;
	this.instance_1.setTransform(110.2,83.8,0.5,0.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(78).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,alpha:1},6,cjs.Ease.get(1)).wait(46).to({regX:-1.8,scaleX:0.98,scaleY:0.98,x:108,alpha:0.968},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:108.1,alpha:0.835},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:108.4,alpha:0.522},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:108.7,alpha:0.184},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:108.8,alpha:0.035},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.5,scaleY:0.5,x:109.8,alpha:0},0).to({_off:true},1).wait(226));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(221).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},7,cjs.Ease.get(1)).wait(51).to({regX:-2.5,regY:-0.1,scaleX:0.99,scaleY:0.99,x:107.7,y:83.7,alpha:0.986},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:107.8,alpha:0.93},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:108,alpha:0.793},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:108.4,y:83.8,alpha:0.498},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:108.7,alpha:0.205},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:108.9,alpha:0.069},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:109,alpha:0.014},0).wait(1).to({regX:0,regY:0,scaleX:0.5,scaleY:0.5,x:110.2,alpha:0},0).to({_off:true},1).wait(75));

	// plate1
	this.instance_2 = new lib.vvbv();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-91.2,-84.1,0.5,0.5,0,0,0,0.1,0.1);
	this.instance_2.alpha = 0.301;
	this.instance_2._off = true;

	this.instance_3 = new lib.bbbnbn();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-90.5,-84,0.5,0.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(74).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,alpha:1},6,cjs.Ease.get(1)).wait(48).to({regX:2.5,regY:-0.1,scaleX:0.98,scaleY:0.98,x:-88.8,y:-84.2,alpha:0.968},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:-88.9,alpha:0.835},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:-89.3,alpha:0.522},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:-89.7,alpha:0.184},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:-89.9,alpha:0.035},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.5,scaleY:0.5,x:-91.2,y:-84.1,alpha:0},0).to({_off:true},1).wait(228));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(217).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},7,cjs.Ease.get(1)).wait(53).to({regX:2.5,regY:-0.1,scaleX:0.99,scaleY:0.99,x:-88,y:-84.1,alpha:0.99},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:-88.1,alpha:0.951},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:-88.2,alpha:0.855},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:-88.6,y:-84,alpha:0.649},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:-89,alpha:0.444},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:-89.1,alpha:0.349},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:-89.2,alpha:0.311},0).wait(1).to({regX:0,regY:0,scaleX:0.5,scaleY:0.5,x:-90.5,alpha:0.301},0).to({_off:true},1).wait(77));

	// wear2
	this.instance_4 = new lib.hh();
	this.instance_4.parent = this;
	this.instance_4.setTransform(221.5,22.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_5 = new lib.jjjkl();
	this.instance_5.parent = this;
	this.instance_5.setTransform(212,16.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(70).to({_off:false},0).to({x:61.3,alpha:1},6,cjs.Ease.get(0.81)).to({x:41.5},54).to({x:-208.5,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(224));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(213).to({_off:false},0).to({x:62,alpha:1},6,cjs.Ease.get(0.64)).to({x:42},59).to({x:-174,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(77));

	// wear1
	this.instance_6 = new lib.ghgh();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-139.5,20.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_7 = new lib.jjjj();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-192,3);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(70).to({_off:false},0).to({x:18.7,alpha:1},6,cjs.Ease.get(0.81)).to({x:33.5},54).to({x:270.5,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(224));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(213).to({_off:false},0).to({x:-42,alpha:1},6,cjs.Ease.get(0.64)).to({x:-22},59).to({x:188,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(77));

	// Слой 1
	this.instance_8 = new lib.fghfgh();
	this.instance_8.parent = this;
	this.instance_8.setTransform(9.2,-0.1,1,1,0,0,0,141.5,112.4);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(362));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132.3,-112.5,283,224.8);


// stage content:
(lib._100pcx240 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		 
		stage.addEventListener("resize", res);
		
		var bg = this.bg; 
		var mania = this.mania;
		var date = this.date;
		var skidka = this.skidka;
		var legal = this.legal;
		var logo = this.logo;
		var logo2 = this.logo2;
		var logobg = this.logobg;
		var img1 = this.img1;
		var wear = this.wear;
		
		
		function res() {
			
				var wdt = stage.canvas.width;
				var hgt = stage.canvas.height;
			
		
			if(wdt<650){
				mania.x = wdt/2;
				mania.y = 50;
				mania.scaleX = 1;
				mania.scaleY = 1;
				
				date.x = wdt/2;
				date.scaleX = 1;
				date.scaleY = 1;
				
				skidka.x = wdt/2;
				skidka.y = 165;
				skidka.scaleX = 1;
				skidka.scaleY = 1;
				
				logo.visible = true;
				logo.x = wdt/2;
				logo.y = 215;
				logo.scaleX = 1;
				logo.scaleY = 1;
				
				logo2.visible = false;
				
				logobg.visible = true;
				
				img1.x = 0;
				img1.y = 0;
				img1.scaleX = wdt/300;
				img1.scaleY = wdt/300;
				
				wear.x = wdt/2;
		
		
				
			} else {
				mania.x = wdt*0.25;
				mania.y = 120;
				mania.scaleX = 1.3;
				mania.scaleY = 1.3;
				
				date.x = wdt/2;
				date.scaleX = 1.3;
				date.scaleY = 1.3;
				
				skidka.x = wdt*0.75;
				skidka.y = 120;
				skidka.scaleX = 1.3;
				skidka.scaleY = 1.3;
				
				logo2.visible = true;
				logo2.x = wdt*0.75;
				logo2.y = 120;
				logo2.scaleX = 1.3;
				logo2.scaleY = 1.3;
				
				logo.visible = false;
				
				logobg.visible = false;
				
				img1.x = 0;
				img1.y = 0;
				img1.scaleX = wdt/600;
				img1.scaleY = wdt/600;
				
				wear.x = wdt*0.3;
			}
			
			legal.x = wdt/2;
			
			bg.x = 0;
			bg.scaleX = wdt/300;
			
			logobg.x = 0;
			logobg.scaleX = wdt/300;
			
		
			 
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(362));

	// Слой 11
	this.logo2 = new lib.qqq5aaaa();
	this.logo2.parent = this;
	this.logo2.setTransform(150,215.1);

	this.timeline.addTween(cjs.Tween.get(this.logo2).wait(362));

	// logo
	this.logo = new lib.qqq5();
	this.logo.parent = this;
	this.logo.setTransform(150,215.1);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(362));

	// logobg
	this.logobg = new lib.logobg();
	this.logobg.parent = this;
	this.logobg.setTransform(0,190);

	this.timeline.addTween(cjs.Tween.get(this.logobg).wait(362));

	// img
	this.img1 = new lib.qqq6();
	this.img1.parent = this;
	this.img1.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.img1).wait(362));

	// wear
	this.wear = new lib.qqq7();
	this.wear.parent = this;
	this.wear.setTransform(150.1,120,1,1,0,0,0,9.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.wear).wait(362));

	// legal
	this.legal = new lib.qqq4();
	this.legal.parent = this;
	this.legal.setTransform(150,210);

	this.timeline.addTween(cjs.Tween.get(this.legal).wait(362));

	// skidka
	this.skidka = new lib.qqq3();
	this.skidka.parent = this;
	this.skidka.setTransform(150,166.1);

	this.timeline.addTween(cjs.Tween.get(this.skidka).wait(362));

	// date
	this.date = new lib.qqq2();
	this.date.parent = this;
	this.date.setTransform(153,115,1,1,0,0,0,0,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.date).wait(362));

	// mania
	this.mania = new lib.qqq();
	this.mania.parent = this;
	this.mania.setTransform(153,53,1,1,0,0,0,-0.4,-1);

	this.timeline.addTween(cjs.Tween.get(this.mania).wait(362));

	// bg
	this.bg = new lib.ffddd();
	this.bg.parent = this;
	this.bg.setTransform(0,120,1,1,0,0,0,0,120);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(362));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,120,304,242);
// library properties:
lib.properties = {
	width: 300,
	height: 240,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/100pcx240_atlas_P_.png", id:"100pcx240_atlas_P_"},
		{src:"images/100pcx240_atlas_NP_.jpg", id:"100pcx240_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;