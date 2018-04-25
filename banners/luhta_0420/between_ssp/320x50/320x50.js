(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"320x50_atlas_P_", frames: [[292,0,148,180],[144,0,146,190],[0,0,142,204],[292,182,142,187],[0,206,244,17],[0,225,145,25]]},
		{name:"320x50_atlas_NP_", frames: [[0,175,180,154],[0,0,180,173]]}
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



(lib._1png = function() {
	this.spriteSheet = ss["320x50_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["320x50_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["320x50_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._6 = function() {
	this.spriteSheet = ss["320x50_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.im_1 = function() {
	this.spriteSheet = ss["320x50_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.im_2 = function() {
	this.spriteSheet = ss["320x50_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.legal = function() {
	this.spriteSheet = ss["320x50_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.skidka = function() {
	this.spriteSheet = ss["320x50_atlas_P_"];
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


(lib.vvv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._6();
	this.instance.parent = this;
	this.instance.setTransform(-34,-61.1,0.9,0.9);

	this.instance_1 = new lib._4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-109.2,-107.5,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.vvv, new cjs.Rectangle(-109.2,-107.5,203,214.7), null);


(lib.v = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.im_2();
	this.instance.parent = this;
	this.instance.setTransform(-120,-167);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.v, new cjs.Rectangle(-120,-167,180,173), null);


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


(lib.hhh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("ADpKKIg8kTIlZAAIg8ETIkRAAIFY0TIFDAAIFYUTgAh/CgID+AAIh9pIIgDAAg");
	this.shape.setTransform(38.9,16.4,0.209,0.209);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AiCKKIAA0TIEFAAIAAUTg");
	this.shape_1.setTransform(23.5,16.4,0.209,0.209);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("ACFKKIk/uOIgEAAIAAOOIjxAAIAA0TIEvAAIE8N5IADAAIAAt5IDxAAIAAUTg");
	this.shape_2.setTransform(7.6,16.4,0.209,0.209);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("ADqKKIg9kTIlZAAIg8ETIkRAAIFY0TIFEAAIFXUTgAh/CgID+AAIh9pIIgCAAg");
	this.shape_3.setTransform(-13.9,16.4,0.209,0.209);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("AFRKKIAAwNIgEAAIjnQNIjLAAIjnwNIgEAAIAAQNIjxAAIAA0TIGGAAIC6OVIADAAIC7uVIGEAAIAAUTg");
	this.shape_4.setTransform(-38.5,16.4,0.209,0.209);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1B").s().p("AD5K2IhAkmIlxAAIhAEmIkjAAIFv1rIFZAAIFvVrgAiHCrIEPAAIiGpvIgDAAg");
	this.shape_5.setTransform(39.3,-15.5,0.209,0.209);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1B").s().p("AiLK2IAAyFIkvAAIAAjmIN1AAIAADmIkvAAIAASFg");
	this.shape_6.setTransform(20.4,-15.5,0.209,0.209);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1B").s().p("ACjK2IAApoIlGAAIAAJoIkXAAIAA1rIEXAAIAAITIFGAAIAAoTIEYAAIAAVrg");
	this.shape_7.setTransform(-0.6,-15.5,0.209,0.209);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1B").s().p("AikKxQhQgPg+gxQg+guglhZQglhXAAiMIAAvGIEYAAIAAPGQAAA3AGAqQAHArATAgQASAhAgASQAgASAwAAQAzAAAfgSQAfgSASghQASggAIgrQAGgqAAg3IAAvGIEYAAIAAPGQAACDglBYQglBWg+AzQg+AyhQASQhRARhUAAQhSAAhSgPg");
	this.shape_8.setTransform(-22.8,-15.3,0.209,0.209);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1D1B").s().p("AmDK2IAA1rIEYAAIAASFIHvAAIAADmg");
	this.shape_9.setTransform(-42.4,-15.5,0.209,0.209);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hhh, new cjs.Rectangle(-50.5,-30,101.1,60), null);


(lib.ghghgh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AByDlIgUg0Ii7AAIgUA0IjAAAIDDnJIDdAAIDDHJgAA3BBIg2iaIgBAAIg2CaIBtAAg");
	this.shape.setTransform(69.3,-2.4,0.255,0.255);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhaDlIAAlWIinAAIAAhzIIDAAIAABzIinAAIAAFWg");
	this.shape_1.setTransform(47.9,-2.4,0.255,0.255);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("ABmDlIAAi3IjLAAIAAC3Ii1AAIAAnJIC1AAIAACfIDLAAIAAifIC1AAIAAHJg");
	this.shape_2.setTransform(24.9,-2.4,0.255,0.255);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("AjODFQhDgsAAhqIAAkbIC1AAIAAEUQAAAqAYATQAXARAtAAQAvAAAWgRQAYgTAAgqIAAkUIC1AAIAAEbQAABqhDAsQg/AoiQAAQiPAAg/gog");
	this.shape_3.setTransform(0.5,-2.2,0.255,0.255);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("AjmDlIAAnJIC1AAIAAFOIEYAAIAAB7g");
	this.shape_4.setTransform(-21.6,-2.4,0.255,0.255);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1B").s().p("AnDHEQi7i7AAkJQAAkIC7i7QC7i7EIAAQEJAAC7C7QC7C7AAEIQAAEJi7C7Qi7C7kJAAQkIAAi7i7gAhJjhQgnAggNAkIh4FQIF+AAQA5ABArggQAhgaAGgbImEAAIB6lgIgIgBQgjAAgoAhg");
	this.shape_5.setTransform(-54.7,-0.9,0.255,0.255);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ghghgh, new cjs.Rectangle(-71,-17.2,148.1,32.6), null);


(lib.ghgh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._1png();
	this.instance.parent = this;
	this.instance.setTransform(-20,-84);

	this.instance_1 = new lib._2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-99,-123);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ghgh, new cjs.Rectangle(-99,-123,227,219), null);


(lib.ggg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.skidka();
	this.instance.parent = this;
	this.instance.setTransform(-73,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ggg, new cjs.Rectangle(-73,-13,145,25), null);


(lib.dfgd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.legal();
	this.instance.parent = this;
	this.instance.setTransform(-343,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dfgd, new cjs.Rectangle(-343,-6,244,17), null);


(lib.bbvv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.im_1();
	this.instance.parent = this;
	this.instance.setTransform(-120,-166);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bbvv, new cjs.Rectangle(-120,-166,180,154), null);


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
	this.instance.setTransform(18.3,9.6,1.013,1.011,0,0,0,5,8.7);

	this.instance_1 = new lib._9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(5.9,9.6,1.013,1.011,0,0,0,5,8.6);

	this.instance_2 = new lib._9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(14.3,-10.1,0.795,0.795,0,0,0,5,8.6);

	this.instance_3 = new lib._9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(4.5,-10.1,0.795,0.795,0,0,0,5,8.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5).p("APkklI/HJK");
	this.shape.setTransform(-0.2,-9.6,0.28,0.28);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjBE0IAAgfQAAg7AVgwQAUguAegiQAfgjAfgZIA+gyQAsgoAMgVQANgYAAgeQAAhOhDAAQghAAgRAWQgRAUAAAzIAAAhIh6AAIAAgkQAAg7AcgqQAbgqArgUQAsgVAvAAQA1AAArAUQAsAUAZAkQAZAmAAAwQAAAvgYAvQgXAvgsAlIhMA+QgiAdgVAcQgWAegFAhIDpAAIAABdg");
	this.shape_1.setTransform(-6.9,9.4,0.28,0.28);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiOELQgsguAAhJIAAgkIB0AAIAAAVQAABaBCAAQApAAAMgXQANgYAAgxQAAg4gSgYQgRgXgqAAIg3AAIAAhSIAlAAQA2AAARgdQARgdAAgqQAAhAg7AAQggAAgQATQgSAUAAAiIAAAVIhyAAIAAgaQAAhGAwgsQAxgtBTAAQA3AAApASQApASAWAiQAWAiAAAvQAAA7gYAhQgYAggwAPQBqAWAACEQAABBgWAoQgXApgrASQgtATg+AAQhZAAgtgvg");
	this.shape_2.setTransform(-19.7,9.6,0.28,0.28);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhsDOQgngjAAhAIAAgVIBdAAQAAAwANASQANASAbAAQAUAAAKgHQALgGAFgRQAFgQAAghIAAguQAAhFg1AAQgRABgMAIQgNAKgFAOIhbAAIALj5ID+AAIAABJIitAAIgFBkQAhgeAoAAQBAAAAhAkQAgAlAABBIAAArQAAAogIAeQgJAfgRASQgSATgbAKQgeAJgkAAQhHAAgogjg");
	this.shape_3.setTransform(-5.4,-9.9,0.28,0.28);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhIDpQgfgLgUgaQgUgYAAgoIAAj0QAAglARgfQASgfAfgQQAhgRArAAQAqAAAhANQAhAOASAYQASAYAAAfIAAAGIhfAAIAAgFQgBgQgMgKQgLgKgYAAQgXAAgLAOQgMAPgBAjIAAA4QANgNAZgKQAZgKATAAQAgAAAZAMQAYAMAOAZQANAXAAAiIAABxQAAA5goAbQgoAchAAAQgnAAgggMgAghgBQgOALAAAYIAABeQAAAwAuAAQAwAAABgwIAAhgQgBgVgOgLQgNgNgUAAQgTAAgOAMg");
	this.shape_4.setTransform(-15.1,-10,0.28,0.28);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhfAdIAAg5IC/AAIAAA5g");
	this.shape_5.setTransform(-23.4,-8.1,0.28,0.28);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1B").s().p("AyNMlIAA5JMAkaAAAIAAZJg");
	this.shape_6.setTransform(-0.2,-0.2,0.28,0.28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.vv, new cjs.Rectangle(-32.8,-22.6,65.2,45), null);


(lib.fghf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ghgh();
	this.instance.parent = this;
	this.instance.setTransform(-14.4,3.5,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.fghf, new cjs.Rectangle(-103.5,-107.2,204.3,197.1), null);


(lib.fgggg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._9();
	this.instance.parent = this;
	this.instance.setTransform(15.5,-9.9,0.792,0.794,0,0,0,5,8.7);

	this.instance_1 = new lib._9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(5.7,-9.9,0.792,0.794,0,0,0,5,8.7);

	this.instance_2 = new lib._9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(18.8,9.5,1.013,1.016,0,0,0,5.1,8.6);

	this.instance_3 = new lib._9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(6.2,9.5,1.013,1.016,0,0,0,5.1,8.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5).p("APkkkI/HJJ");
	this.shape.setTransform(1.7,-9.6,0.28,0.279);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhmEuQASiLAuiKQAwiJA7hgIkGAAIAAhdIGCAAIAABWQhBB0gqB6QgsB9gKCag");
	this.shape_1.setTransform(-6.3,9.6,0.28,0.279);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiNEMQgtgvAAhJIAAgjIB1AAIAAAVQAABaBBAAQAogBANgXQAOgXAAgyQAAg4gSgYQgTgWgpAAIg2AAIAAhSIAkAAQA2gBARgdQASgcAAgrQgBhAg7AAQgfAAgRATQgSATABAjIAAAVIhzAAIAAgZQAAhHAxgsQAwgtBTAAQA3AAApASQApATAWAhQAVAiAAAwQAAA6gXAgQgYAhgwAPQBqAWAACEQAABAgWApQgXAqgrASQgrARhAABQhZgBgsgtg");
	this.shape_2.setTransform(-18.8,9.5,0.28,0.279);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiXDxIAAgZQAAgvAQgkQAQgjAYgcQAagcAWgSIAwgoQAjgfAJgRQAKgQAAgaQAAg8g0AAQgaAAgNAQQgOARAAAoIAAAZIheAAIAAgcQAAguAVghQAVghAigPQAigRAlAAQApAAAiAQQAjAQATAcQAUAdAAAlQAAAkgTAmQgTAlgiAcIg7AxQgZAWgSAXQgSAXgDAaIC2AAIAABJg");
	this.shape_3.setTransform(-4.2,-10.1,0.28,0.279);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhIDpQgggLgTgaQgUgYAAgoIAAj0QAAglARgfQARgeAggRQAhgRAsAAQApAAAhANQAhAOASAYQATAYgBAfIAAAGIhfAAIAAgFQAAgQgNgKQgLgLgXAAQgYAAgMAPQgLAPAAAjIAAA4QAMgNAZgKQAYgKAUAAQAhAAAXAMQAYAMAPAZQANAYAAAhIAABxQAAA5gnAbQgoAchBAAQgmAAghgMgAgggBQgOALAAAYIAABeQAAAwAtAAQAxAAAAgwIAAhgQgBgVgNgLQgOgNgTAAQgUAAgNAMg");
	this.shape_4.setTransform(-14.2,-10,0.28,0.279);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhfAdIAAg5IC/AAIAAA5g");
	this.shape_5.setTransform(-22.4,-8.2,0.28,0.279);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1B").s().p("AyNMlIAA5JMAkaAAAIAAZJg");
	this.shape_6.setTransform(-0.3,-0.2,0.28,0.279);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fgggg, new cjs.Rectangle(-32.8,-22.6,65.2,45), null);


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
	this.shape.setTransform(0,-9.4,0.28,0.28);

	this.instance = new lib._9();
	this.instance.parent = this;
	this.instance.setTransform(17.9,9.7,1.013,1.017,0,0,0,5.1,8.7);

	this.instance_1 = new lib._9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(5.3,9.7,1.013,1.017,0,0,0,5.1,8.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhmEuQASiLAuiKQAwiJA7hgIkGAAIAAhdIGCAAIAABWQhBB1gqB5QgsB9gKCag");
	this.shape_1.setTransform(-7.3,9.8,0.28,0.28);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAPEvIAAh6IjTAAIAAhtIC9l2ICQAAIAAGGIA8AAIAABdIg8AAIAAB6gAhsBYIB7AAIAAj6g");
	this.shape_2.setTransform(-19.9,9.7,0.28,0.28);

	this.instance_2 = new lib._999();
	this.instance_2.parent = this;
	this.instance_2.setTransform(3.7,-9.8,0.797,0.797,0,0,0,17.3,8.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhPDsQANhuAlhrQAkhrAvhKIjMAAIAAhJIEtAAIAABDQgyBbgiBfQghBhgJB5g");
	this.shape_3.setTransform(-16,-9.8,0.28,0.28);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhfAdIAAg5IC/AAIAAA5g");
	this.shape_4.setTransform(-24.2,-8,0.28,0.28);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1B").s().p("AyMMlIAA5JMAkaAAAIAAZJg");
	this.shape_5.setTransform(0,0,0.28,0.28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance_2},{t:this.shape_2},{t:this.shape_1},{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.vvbv, new cjs.Rectangle(-32.6,-22.5,65.2,45.1), null);


(lib.bbbnbn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._999();
	this.instance.parent = this;
	this.instance.setTransform(4.5,-10.1,0.792,0.792,0,0,0,17.4,8.6);

	this.instance_1 = new lib._999();
	this.instance_1.parent = this;
	this.instance_1.setTransform(5.4,9.6,1.017,1.017,0,0,0,17.4,8.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5).p("APkkkI/HJJ");
	this.shape.setTransform(-0.3,-9.5,0.279,0.279);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiNEMQgtgvAAhJIAAgkIB1AAIAAAWQAABZBBAAQAoAAANgYQAOgXAAgxQAAg5gTgXQgSgXgpAAIg2AAIAAhSIAkAAQA2AAASgdQAQgcABgsQgBhAg7AAQggAAgQAUQgRATAAAjIAAAVIhzAAIAAgaQAAhGAwgtQAxgrBTgBQA5AAAoASQAoASAWAiQAWAjAAAvQAAA7gYAfQgYAhgvAPQBpAVAACFQAABBgWAoQgXApgrASQgrAThAAAQhYgBgtgtg");
	this.shape_1.setTransform(-19.8,9.6,0.279,0.279);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhIDqQgfgMgUgZQgTgagBgnIAAj0QAAglARgeQAQgeAhgSQAhgRArAAQAqAAAhANQAhAPASAXQASAYAAAfIAAAGIhgAAIAAgFQAAgQgMgKQgLgKgYAAQgXAAgMAOQgMAPAAAjIAAA4QAOgOAYgJQAZgKATAAQAfAAAZAMQAZAOAOAXQANAYAAAhIAABxQAAA5gnAcQgpAbhAAAQgmAAghgLgAghgBQgOALAAAYIAABeQABAwAsAAQAxAAAAgwIAAhgQAAgUgOgMQgNgNgUAAQgTAAgOAMg");
	this.shape_2.setTransform(-15.2,-10,0.279,0.279);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhfAeIAAg7IC/AAIAAA7g");
	this.shape_3.setTransform(-23.4,-8.1,0.279,0.279);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("AyMMlIAA5JMAkZAAAIAAZJg");
	this.shape_4.setTransform(-0.3,-0.1,0.279,0.279);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bbbnbn, new cjs.Rectangle(-32.8,-22.6,65.1,45), null);


// stage content:
(lib._320x50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.currLoop = 0;
	}
	this.frame_24 = function() {
		if (this.currLoop == 1){this.stop()}
	}
	this.frame_409 = function() {
		this.currLoop++;
		this.gotoAndPlay(2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(385).call(this.frame_409).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").p("A46j0MAx1AAAIAAHpMgx1AAAg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(410));

	// 4
	this.instance = new lib.v();
	this.instance.parent = this;
	this.instance.setTransform(120.5,256.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(332).to({_off:false},0).wait(1).to({regX:-30,regY:-80.5,x:90.5,y:174.8},0).wait(1).to({y:170.4},0).wait(1).to({y:161.1},0).wait(1).to({y:144.7},0).wait(1).to({y:122.5},0).wait(1).to({y:104.1},0).wait(1).to({y:93.6},0).wait(1).to({y:88.6},0).wait(1).to({regX:0,regY:0,x:120.5,y:167.8},0).to({x:120.1,y:45.3},55).wait(1).to({regX:-30,regY:-80.5,x:90,y:-35.8},0).wait(1).to({y:-37.8},0).wait(1).to({y:-41.9},0).wait(1).to({y:-49.2},0).wait(1).to({y:-60},0).wait(1).to({y:-71.2},0).wait(1).to({y:-78.9},0).wait(1).to({y:-83.2},0).wait(1).to({y:-85.4},0).wait(1).to({regX:0,regY:0,x:120,y:-5.5},0).wait(4));

	// plate4
	this.instance_1 = new lib.vv();
	this.instance_1.parent = this;
	this.instance_1.setTransform(288.2,26.8,0.4,0.4,0,0,0,0,0.1);
	this.instance_1.alpha = 0.301;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(262).to({_off:false},0).to({regY:0,scaleX:0.8,scaleY:0.8,alpha:1},7,cjs.Ease.get(1)).wait(63).to({regX:0.1,regY:0.1,scaleX:0.4,scaleY:0.4,alpha:0.301},7,cjs.Ease.get(1)).to({_off:true},1).wait(70));

	// plate3
	this.instance_2 = new lib.bbbnbn();
	this.instance_2.parent = this;
	this.instance_2.setTransform(32,24,0.4,0.4,0,0,0,0.1,0.1);
	this.instance_2.alpha = 0.301;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(258).to({_off:false},0).to({regX:0,regY:0,scaleX:0.8,scaleY:0.8,alpha:1},7,cjs.Ease.get(1)).wait(65).to({regX:0.1,regY:0.1,scaleX:0.4,scaleY:0.4,alpha:0.301},7,cjs.Ease.get(1)).to({_off:true},1).wait(72));

	// 3
	this.instance_3 = new lib.vvv();
	this.instance_3.parent = this;
	this.instance_3.setTransform(168.5,177);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(253).to({_off:false},0).wait(1).to({regX:-7.7,regY:-0.2,x:160.8,y:174.8},0).wait(1).to({y:170.3},0).wait(1).to({y:162.7},0).wait(1).to({y:151.4},0).wait(1).to({y:137.1},0).wait(1).to({y:122.7},0).wait(1).to({y:112.8},0).wait(1).to({regX:0,regY:0,x:168.5,y:109.8},0).to({y:-34.3},68).wait(1).to({regX:-7.7,regY:-0.2,x:160.8,y:-35.5},0).wait(1).to({y:-38.9},0).wait(1).to({y:-46.1},0).wait(1).to({y:-59.4},0).wait(1).to({y:-78.8},0).wait(1).to({y:-96.3},0).wait(1).to({y:-106.5},0).wait(1).to({y:-111.5},0).wait(1).to({regX:0,regY:0,x:168.5,y:-113},0).to({_off:true},1).wait(71));

	// logo
	this.instance_4 = new lib.ghghgh();
	this.instance_4.parent = this;
	this.instance_4.setTransform(245.8,26.3,0.405,0.405,0,0,0,0,0.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(183).to({_off:false},0).to({regY:0,scaleX:0.81,scaleY:0.81,y:26.2,alpha:1},8).wait(61).to({regX:3.1,regY:-0.9,x:248.3,y:24.8},0).wait(1).to({y:22.4},0).wait(1).to({y:17.5},0).wait(1).to({y:8.2},0).wait(1).to({y:-7.5},0).wait(1).to({y:-25.6},0).wait(1).to({y:-37.5},0).wait(1).to({y:-43.7},0).wait(1).to({y:-46.6},0).wait(1).to({regX:0,regY:-0.1,x:245.8},0).to({_off:true},1).wait(68).to({_off:false,regY:0.1,scaleX:0.41,scaleY:0.41,y:26.3,alpha:0},0).to({regY:0,scaleX:0.81,scaleY:0.81,y:26.2,alpha:1},8).wait(62).to({regX:3.1,regY:-0.9,x:248.3,y:24.8},0).wait(1).to({y:22.4},0).wait(1).to({y:17.5},0).wait(1).to({y:8.2},0).wait(1).to({y:-7.5},0).wait(1).to({y:-25.6},0).wait(1).to({y:-37.5},0).wait(1).to({y:-43.7},0).wait(1).to({y:-46.6},0).wait(1).to({regX:0,regY:-0.1,x:245.8},0).wait(1));

	// 2
	this.instance_5 = new lib.bbvv();
	this.instance_5.parent = this;
	this.instance_5.setTransform(120,232);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(181).to({_off:false},0).wait(1).to({regX:-30,regY:-89,x:90,y:141.9},0).wait(1).to({y:138.3},0).wait(1).to({y:131.5},0).wait(1).to({y:120.9},0).wait(1).to({y:106.5},0).wait(1).to({y:91.4},0).wait(1).to({y:80.8},0).wait(1).to({regX:0,regY:0,x:120,y:166.3},0).to({y:64.8},60).wait(1).to({regX:-30,regY:-89,x:90,y:-25.9},0).wait(1).to({y:-29},0).wait(1).to({y:-33.9},0).wait(1).to({y:-40.7},0).wait(1).to({y:-49.3},0).wait(1).to({y:-59},0).wait(1).to({y:-67.6},0).wait(1).to({y:-73.2},0).wait(1).to({regX:0,regY:0,x:120,y:14},0).to({_off:true},1).wait(151));

	// plate2
	this.instance_6 = new lib.fgggg();
	this.instance_6.parent = this;
	this.instance_6.setTransform(287.8,26.1,0.4,0.4,0,0,0,0.1,0.3);
	this.instance_6.alpha = 0.301;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(132).to({_off:false},0).to({regX:0,regY:0,scaleX:0.8,scaleY:0.8,x:287.7,y:26,alpha:1},6,cjs.Ease.get(1)).wait(40).to({regX:0.1,regY:0.1,scaleX:0.4,scaleY:0.4,x:287.8,y:26.1,alpha:0.301},5,cjs.Ease.get(1)).to({_off:true},1).wait(226));

	// plate1
	this.instance_7 = new lib.vvbv();
	this.instance_7.parent = this;
	this.instance_7.setTransform(32.8,23.9,0.4,0.4,0,0,0,0.1,0.3);
	this.instance_7.alpha = 0.301;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(128).to({_off:false},0).to({regX:0,regY:0,scaleX:0.8,scaleY:0.8,x:32.7,y:23.8,alpha:1},6,cjs.Ease.get(1)).wait(42).to({regX:0.1,regY:0.1,scaleX:0.4,scaleY:0.4,x:32.8,y:23.9,alpha:0.301},5,cjs.Ease.get(1)).to({_off:true},1).wait(228));

	// Слой 2
	this.instance_8 = new lib.fghf();
	this.instance_8.parent = this;
	this.instance_8.setTransform(160.5,162);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(118).to({_off:false},0).to({y:112},8,cjs.Ease.get(1)).to({y:-44},52).to({y:-118},6,cjs.Ease.get(1)).to({_off:true},1).wait(225));

	// Слой 1
	this.instance_9 = new lib.dfgd();
	this.instance_9.parent = this;
	this.instance_9.setTransform(525,49,1,1,0,0,0,108,11);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(8).to({_off:false},0).to({alpha:1},7).wait(40).to({alpha:0},5).to({_off:true},1).wait(349));

	// skidka
	this.instance_10 = new lib.ggg();
	this.instance_10.parent = this;
	this.instance_10.setTransform(199.3,15,0.5,0.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(4).to({_off:false},0).to({scaleX:1,scaleY:1,x:196,y:18},7,cjs.Ease.get(1)).wait(40).to({regX:0.1,regY:0.1,scaleX:0.5,scaleY:0.5,x:194.7,y:16.9,alpha:0.301},7,cjs.Ease.get(-1)).to({_off:true},1).wait(351));

	// date
	this.instance_11 = new lib.qwe();
	this.instance_11.parent = this;
	this.instance_11.setTransform(194,-34);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(58).to({_off:false},0).wait(1).to({y:-33.2},0).wait(1).to({y:-30.4},0).wait(1).to({y:-24.8},0).wait(1).to({y:-15.4},0).wait(1).to({y:-3},0).wait(1).to({y:9},0).wait(1).to({y:17.6},0).wait(1).to({y:22.7},0).wait(1).to({y:25.3},0).wait(1).to({y:26},0).wait(41).to({scaleX:0.8,scaleY:0.8,x:195,y:25,alpha:0.301},7,cjs.Ease.get(-1)).to({_off:true},1).wait(293));

	// mania
	this.instance_12 = new lib.hhh();
	this.instance_12.parent = this;
	this.instance_12.setTransform(39.6,25.1,0.315,0.315,0,0,0,0.1,0.3);
	this.instance_12.alpha = 0.449;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({regY:0.1,scaleX:0.63,scaleY:0.63,y:25.4,alpha:1},7,cjs.Ease.get(1)).wait(100).to({y:24.9},0).to({regX:0.3,regY:0.3,scaleX:0.32,scaleY:0.32,x:39.3,y:25.1,alpha:0.301},7,cjs.Ease.get(-1)).to({_off:true},1).wait(295));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFEC00").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_1.setTransform(160,25,0.44,0.556);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(410));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(159.5,24.5,321,51);
// library properties:
lib.properties = {
	width: 320,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/320x50_atlas_P_.png", id:"320x50_atlas_P_"},
		{src:"images/320x50_atlas_NP_.jpg", id:"320x50_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;