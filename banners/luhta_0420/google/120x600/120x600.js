(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"120x600_atlas_P_", frames: [[144,192,148,180],[144,0,146,190],[0,0,142,204],[292,0,142,187],[0,206,115,54],[0,262,105,48]]},
		{name:"120x600_atlas_NP_", frames: [[0,0,371,450],[0,452,331,450]]}
];


// symbols:



(lib._1pngкопия = function() {
	this.spriteSheet = ss["120x600_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["120x600_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["120x600_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._6 = function() {
	this.spriteSheet = ss["120x600_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.im_1 = function() {
	this.spriteSheet = ss["120x600_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.im_2 = function() {
	this.spriteSheet = ss["120x600_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.legal = function() {
	this.spriteSheet = ss["120x600_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.skidka = function() {
	this.spriteSheet = ss["120x600_atlas_P_"];
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
	this.instance.setTransform(-221,-118);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.v, new cjs.Rectangle(-221,-118,331,450), null);


(lib.qwe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA3DaIAAilIgmAAIg/ClIhrAAIBQi2QhCgkAAhRQAAgsAUgfQATgfAegPQAfgPAgAAIChAAIAAGzgAgWh+QgOAQAAAdQAAA8AxAAIAqAAIAAh5IgmAAQgXAAgQAQg");
	this.shape.setTransform(31.5,32.3,0.351,0.351);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah/DIQgfgfAAg7QAAgmAMgaQAMgbAYgTQAagTAlgPQAwgWAUgNQAWgQAAgZQAAgmguAAQgXgBgOAOQgOAPAAAbIAAAJIhgAAIAAgVQAAgaALgXQALgXATgQQATgRAcgKQAagJAgAAQBDgBAqAcQApAbAAA5IAAEQQAAAYADAPQACAOAIALIhnAAQgIgNAAgdQgQAcgVANQgUANglAAQgzAAgegegAgVAhQghAXAAAoQAAAbAKARQALAQAWAAQAXAAAQgPQAPgOAAgdIAAhpg");
	this.shape_1.setTransform(19.1,32.3,0.351,0.351);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABlDaIAAk0IAAAAIhGE0Ig9AAIhGk0IgBAAIAAE0IhgAAIAAmzICFAAIBAEjIBBkjICFAAIAAGzg");
	this.shape_2.setTransform(4,32.3,0.351,0.351);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhVEbQAOiDAoiAQAmiAA0hbIjeAAIAAhXIFGAAIAABRQg0BognB3QgkB3gJCOg");
	this.shape_3.setTransform(-17.7,30,0.351,0.351);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AijEhIAAgeQAAg4ASgrQARgtAZgfQAbghAZgWIA0gwQAmglAKgUQALgVAAgeQAAhJg5AAQgbAAgPAUQgOAVAAAvIAAAfIhnAAIAAgiQAAg2AXgoQAWgoAmgTQAlgUAnAAQArAAAmATQAlATAWAiQAVAkAAAsQAAAsgUAsQgUAsglAiIhAA7QgbAbgUAbQgSAbgEAgIDFAAIAABXg");
	this.shape_4.setTransform(-31.2,29.8,0.351,0.351);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhZDTQgigSgQghQgPggAAgoIAAivQAAgoAPggQAPggAjgUQAjgSA2AAQA3AAAjASQAiAUAPAgQAQAgAAAoIAACvQAAAogQAgQgPAhgjASQgjATg2AAQg2AAgjgTgAgzhkIAADJQAAA1AzAAQAbAAAMgMQANgMAAgdIAAjJQAAgdgNgLQgMgNgbAAQgzAAAAA1g");
	this.shape_5.setTransform(6.4,2.3,0.351,0.351);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAvDaIAAlmIhdAAIAAFmIhjAAIAAmzIEjAAIAAGzg");
	this.shape_6.setTransform(-6.7,2.3,0.351,0.351);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhGEcQgegKgTgVQgTgTgKgiQgJggAAguQAAhiBNgsQhDgkAAhgQAAgwATgfQATgfAigQQAggPArAAQAsAAAhAPQAhAQATAfQATAgAAAvQAABhhAAjQAnASASAgQARAjAAA5QAAA9gQAmQgRAngjARQgjARg3AAQgnAAgfgKgAgzBlIAAAdQAABPAzAAQA0AAAAhPIAAgdQAAhOg0ABQgzgBAABOgAgji+QgLATAAAqQAABJAuAAQAaAAAKgSQALgRAAgmQAAgqgKgTQgLgSgaAAQgYAAgLASg");
	this.shape_7.setTransform(16.2,-30,0.351,0.351);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AANEcIAAmGIiAAAIAAhOIANAAQA8AAAmgbQAjgcALgrIBLAAIAAI2g");
	this.shape_8.setTransform(0.7,-30,0.351,0.351);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhjDEQgoghAAg4IAAjVQAAgkASgdQASgcAhgPQAggPAqAAQAhgBAgANQAfAOAUAaQAUAaAAAlIAAA3IhiAAIAAgzQAAgSgLgLQgLgKgQABQgTgBgLALQgLAMAAAWIAADQQAAAtApAAQAQABALgKQALgKAAgTIAAg+IBiAAIAABCQAAAlgUAaQgUAagfAOQggANghgBQg/ABgogjg");
	this.shape_9.setTransform(-16.9,-27.7,0.351,0.351);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.qwe, new cjs.Rectangle(-36.9,-40.3,73.9,80.7), null);


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
	this.shape.setTransform(54.2,24.1,0.301,0.301);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AiCKKIAA0TIEFAAIAAUTg");
	this.shape_1.setTransform(31.9,24.1,0.301,0.301);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("ACFKKIk/uOIgEAAIAAOOIjxAAIAA0TIEvAAIE8N5IADAAIAAt5IDxAAIAAUTg");
	this.shape_2.setTransform(9,24.1,0.301,0.301);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("ADqKKIg9kTIlZAAIg8ETIkRAAIFY0TIFEAAIFXUTgAh/CgID+AAIh9pIIgCAAg");
	this.shape_3.setTransform(-22,24.1,0.301,0.301);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("AFRKKIAAwNIgEAAIjnQNIjLAAIjnwNIgEAAIAAQNIjxAAIAA0TIGGAAIC6OVIADAAIC7uVIGEAAIAAUTg");
	this.shape_4.setTransform(-57.6,24.1,0.301,0.301);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1B").s().p("AD5K2IhAkmIlxAAIhAEmIkjAAIFv1rIFZAAIFvVrgAiHCrIEPAAIiGpvIgDAAg");
	this.shape_5.setTransform(54.7,-21.9,0.301,0.301);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1B").s().p("AiLK2IAAyFIkvAAIAAjmIN1AAIAADmIkvAAIAASFg");
	this.shape_6.setTransform(27.5,-21.9,0.301,0.301);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1B").s().p("ACjK2IAApoIlGAAIAAJoIkXAAIAA1rIEXAAIAAITIFGAAIAAoTIEYAAIAAVrg");
	this.shape_7.setTransform(-2.9,-21.9,0.301,0.301);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1B").s().p("AikKxQhQgPg+gxQg+guglhZQglhXAAiMIAAvGIEYAAIAAPGQAAA3AGAqQAHArATAgQASAhAgASQAgASAwAAQAzAAAfgSQAfgSASghQASggAIgrQAGgqAAg3IAAvGIEYAAIAAPGQAACDglBYQglBWg+AzQg+AyhQASQhRARhUAAQhSAAhSgPg");
	this.shape_8.setTransform(-34.9,-21.6,0.301,0.301);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1D1B").s().p("AmDK2IAA1rIEYAAIAASFIHvAAIAADmg");
	this.shape_9.setTransform(-63.1,-21.9,0.301,0.301);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hhh, new cjs.Rectangle(-74.9,-42.8,145.9,86.5), null);


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
	this.instance.setTransform(-53,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ggg, new cjs.Rectangle(-53,-24,105,48), null);


(lib.dfgd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.legal();
	this.instance.parent = this;
	this.instance.setTransform(51,84);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dfgd, new cjs.Rectangle(51,84,115,54), null);


(lib.bbvv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.im_1();
	this.instance.parent = this;
	this.instance.setTransform(-269,-118);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bbvv, new cjs.Rectangle(-269,-118,371,450), null);


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
(lib._120x600 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f().s("#000000").p("EgJSguyISlAAMAAABdlIylAAg");
	this.shape.setTransform(60,300.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(362));

	// 4
	this.instance = new lib.v();
	this.instance.parent = this;
	this.instance.setTransform(41,168);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(278).to({_off:false},0).to({x:52.3,alpha:1},5).to({x:207.5},69).to({x:221,alpha:0},6).wait(4));

	// plate4
	this.instance_1 = new lib.vv();
	this.instance_1.parent = this;
	this.instance_1.setTransform(68.2,453.8,0.5,0.5);
	this.instance_1.alpha = 0.301;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(221).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},7,cjs.Ease.get(1)).wait(51).to({regX:-0.1,regY:-0.1,scaleX:0.99,scaleY:0.99,x:68.1,y:453.7,alpha:0.989},0).wait(1).to({scaleX:0.97,scaleY:0.97,alpha:0.947},0).wait(1).to({scaleX:0.93,scaleY:0.93,alpha:0.852},0).wait(1).to({scaleX:0.83,scaleY:0.83,alpha:0.651},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:68.2,y:453.8,alpha:0.345},0).wait(1).to({scaleX:0.57,scaleY:0.57,alpha:0.146},0).wait(1).to({scaleX:0.53,scaleY:0.53,alpha:0.052},0).wait(1).to({scaleX:0.51,scaleY:0.51,alpha:0.011},0).wait(1).to({regX:0,regY:0,scaleX:0.5,scaleY:0.5,alpha:0},0).to({_off:true},1).wait(74));

	// plate3
	this.instance_2 = new lib.bbbnbn();
	this.instance_2.parent = this;
	this.instance_2.setTransform(49.5,78,0.5,0.5);
	this.instance_2.alpha = 0.301;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(217).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},7,cjs.Ease.get(1)).wait(53).to({regX:-0.2,regY:-0.1,scaleX:0.99,scaleY:0.99,x:49.3,y:77.9,alpha:0.989},0).wait(1).to({scaleX:0.97,scaleY:0.97,alpha:0.947},0).wait(1).to({scaleX:0.93,scaleY:0.93,alpha:0.852},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:49.4,alpha:0.651},0).wait(1).to({scaleX:0.67,scaleY:0.67,y:78,alpha:0.345},0).wait(1).to({scaleX:0.57,scaleY:0.57,alpha:0.146},0).wait(1).to({scaleX:0.53,scaleY:0.53,alpha:0.052},0).wait(1).to({scaleX:0.51,scaleY:0.51,alpha:0.011},0).wait(1).to({regX:0,regY:0,scaleX:0.5,scaleY:0.5,x:49.5,alpha:0},0).to({_off:true},1).wait(76));

	// 6.png
	this.instance_3 = new lib.jjjkl();
	this.instance_3.parent = this;
	this.instance_3.setTransform(192,316.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(213).to({_off:false},0).to({x:92},6,cjs.Ease.get(0.64)).to({x:67},59).to({x:-74},6,cjs.Ease.get(1)).to({_off:true},1).wait(77));

	// 4.png
	this.instance_4 = new lib.jjjj();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-82,223);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(213).to({_off:false},0).to({x:38},6,cjs.Ease.get(0.64)).to({x:78},59).to({x:198},6,cjs.Ease.get(1)).to({_off:true},1).wait(77));

	// logo
	this.instance_5 = new lib.ghghgh();
	this.instance_5.parent = this;
	this.instance_5.setTransform(59.9,547.4,0.225,0.225,0,0,0,0.2,0.2);
	this.instance_5.alpha = 0.301;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(72).to({_off:false},0).to({regX:0.1,regY:0,scaleX:0.54,scaleY:0.54,alpha:1},7).wait(270).to({regX:0,x:60.8},0).wait(1).to({x:64.1},0).wait(1).to({x:70.6},0).wait(1).to({x:81.8},0).wait(1).to({x:99.5},0).wait(1).to({x:124.3},0).wait(1).to({x:150.5},0).wait(1).to({x:170.4},0).wait(1).to({x:182.9},0).wait(1).to({x:190.2},0).wait(1).to({x:193.8},0).wait(1).to({regX:0.1,x:194.9},0).wait(2));

	// 2
	this.instance_6 = new lib.bbvv();
	this.instance_6.parent = this;
	this.instance_6.setTransform(20,167);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(128).to({_off:false},0).to({x:39.5,alpha:1},7).to({x:226.1},69).to({x:240,alpha:0},5).to({_off:true},1).wait(152));

	// plate2
	this.instance_7 = new lib.fgggg();
	this.instance_7.parent = this;
	this.instance_7.setTransform(69.8,455.1,0.5,0.5,0,0,0,0.1,0.1);
	this.instance_7.alpha = 0.301;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(78).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,alpha:1},6,cjs.Ease.get(1)).wait(43).to({x:73.9},0).wait(1).to({x:89.3},0).wait(1).to({x:123.6},0).wait(1).to({x:184.5},0).wait(1).to({x:249.6},0).wait(1).to({x:288.1},0).wait(1).to({x:305.2},0).wait(1).to({x:309.8},0).to({_off:true},1).wait(227));

	// plate1
	this.instance_8 = new lib.vvbv();
	this.instance_8.parent = this;
	this.instance_8.setTransform(48.8,78.9,0.5,0.5,0,0,0,0.1,0.1);
	this.instance_8.alpha = 0.301;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(74).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,alpha:1},6,cjs.Ease.get(1)).wait(45).to({regX:-0.1,regY:-0.1,scaleX:0.99,scaleY:0.99,x:48.7,y:78.8,alpha:0.988},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.943},0).wait(1).to({scaleX:0.89,scaleY:0.89,alpha:0.843},0).wait(1).to({scaleX:0.76,scaleY:0.76,alpha:0.666},0).wait(1).to({scaleX:0.63,scaleY:0.63,alpha:0.476},0).wait(1).to({scaleX:0.55,scaleY:0.55,alpha:0.364},0).wait(1).to({scaleX:0.51,scaleY:0.51,alpha:0.314},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.5,scaleY:0.5,x:48.8,y:78.9,alpha:0.301},0).to({_off:true},1).wait(229));

	// 1 - копия
	this.instance_9 = new lib.hh();
	this.instance_9.parent = this;
	this.instance_9.setTransform(211.5,322.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(70).to({_off:false},0).to({x:91.3},6,cjs.Ease.get(0.81)).to({x:81.5},46).to({x:-78.5},9,cjs.Ease.get(1)).to({_off:true},1).wait(230));

	// 1
	this.instance_10 = new lib.ghgh();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-59.5,240.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(70).to({_off:false},0).to({x:78.7},6,cjs.Ease.get(0.81)).to({x:90.5},46).to({x:230.5},9,cjs.Ease.get(1)).to({_off:true},1).wait(230));

	// Слой 1
	this.instance_11 = new lib.dfgd();
	this.instance_11.parent = this;
	this.instance_11.setTransform(60,469,1,1,0,0,0,108,11);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(5).to({_off:false},0).to({alpha:1},14).wait(45).to({alpha:0},5).to({_off:true},1).wait(292));

	// skidka
	this.instance_12 = new lib.ggg();
	this.instance_12.parent = this;
	this.instance_12.setTransform(60,320,0.5,0.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(2).to({_off:false},0).to({scaleX:1,scaleY:1,x:60.5,y:360},7,cjs.Ease.get(1)).wait(54).to({scaleX:0.8,scaleY:0.8,y:332.2,alpha:0.301},7,cjs.Ease.get(-1)).to({_off:true},1).wait(291));

	// date
	this.instance_13 = new lib.qwe();
	this.instance_13.parent = this;
	this.instance_13.setTransform(62.4,240.1,0.5,0.5);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({_off:false},0).wait(1).to({scaleX:0.51,scaleY:0.51,alpha:0.021},0).wait(1).to({scaleX:0.55,scaleY:0.55,alpha:0.1},0).wait(1).to({scaleX:0.63,scaleY:0.63,alpha:0.265},0).wait(1).to({scaleX:0.76,scaleY:0.76,alpha:0.517},0).wait(1).to({scaleX:0.88,scaleY:0.88,alpha:0.759},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:0.909},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.98},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(52).to({scaleX:0.8,scaleY:0.8,x:62,y:238.3,alpha:0.301},7,cjs.Ease.get(-1)).to({_off:true},1).wait(293));

	// mania
	this.instance_14 = new lib.hhh();
	this.instance_14.parent = this;
	this.instance_14.setTransform(63.1,143.5,0.36,0.36,0,0,0,0.3,0.3);
	this.instance_14.alpha = 0.449;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({regX:0.1,regY:0.1,scaleX:0.72,scaleY:0.72,x:63,y:114.7,alpha:1},7,cjs.Ease.get(1)).wait(52).to({scaleX:0.58,scaleY:0.58,x:62.6,y:133.3,alpha:0.301},7,cjs.Ease.get(-1)).to({_off:true},1).wait(295));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFEC00").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape_1.setTransform(60,300,0.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(362));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(59.5,299.6,121,601);
// library properties:
lib.properties = {
	width: 120,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/120x600_atlas_P_.png?1524521304557", id:"120x600_atlas_P_"},
		{src:"images/120x600_atlas_NP_.jpg?1524521304557", id:"120x600_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;