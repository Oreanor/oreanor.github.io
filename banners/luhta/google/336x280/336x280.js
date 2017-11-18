(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"336x280_atlas_P_", frames: [[241,0,202,230],[0,0,239,220],[155,232,277,18],[0,222,153,70]]},
		{name:"336x280_atlas_NP_", frames: [[0,222,336,220],[0,0,336,220]]}
];


// symbols:



(lib._1 = function() {
	this.spriteSheet = ss["336x280_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["336x280_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["336x280_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["336x280_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.legal = function() {
	this.spriteSheet = ss["336x280_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.skidka = function() {
	this.spriteSheet = ss["336x280_atlas_P_"];
	this.gotoAndStop(3);
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
	this.instance = new lib._3();
	this.instance.parent = this;
	this.instance.setTransform(-120,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.vvv, new cjs.Rectangle(-120,-110,239,220), null);


(lib.v = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._4();
	this.instance.parent = this;
	this.instance.setTransform(-120,-167);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.v, new cjs.Rectangle(-120,-167,336,220), null);


(lib.qwe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AAnCFIAAhiIgTAAIgvBiIhQAAIA+hpQgYgKgMgRQgOgSABgfQgBgsAZgUQAZgVApABIBvAAIAAEJgAgShLQgJAIAAATQAAATAIAIQAJAIASAAIAgAAIAAhHIgdAAQgSAAgLAJg");
	this.shape.setTransform(80.8,0.3,0.352,0.352);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhoC0IAAlgIBCAAIAAAcIABAAQAMgTAOgIQAMgIAWAAQAqAAAUAhQAUAiAABJQAABJgUAiQgUAfgqAAQgVAAgLgGQgOgIgLgQIgBAAIAABvgAgchoQgHAXAAAqQAAAqAHAXQAHAXAVAAQAWAAAHgXQAHgXAAgqQAAgqgHgXQgHgXgWAAQgVAAgHAXg");
	this.shape_1.setTransform(72.8,1.7,0.352,0.352);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("Ag5CuQgUgNgLgXQgKgWgDgfQgCgjgBgfQABgiADgeQAEggALgaQAKgaAUgSQATgSAfgEIAkgHQANgDACgHIA0AAQAAAUgGAOQgHAOgJAHQgJAHgQAEQgMADgWACQgVADgOAEQgOAEgLAJQgJAJgGAPQgFAOgCAYIADAAQADgMAJgLQAIgLAKgFQAJgGAMgDQALgDALAAQAcAAARAKQASALAKARQALARAFAaQAEAYAAAdQAAAfgEAZQgFAZgMASQgLASgWAKQgUAKghAAQgiAAgUgNgAgQgjQgHAEgDAKQgEALgDARQgCAXAAAWQAAAxAIAUQAHAVAUAAQAKAAAHgFQAHgEAEgLQAFgLABgRQABgSABgaQgBgdgCgQQgBgQgEgLQgFgKgGgEQgIgEgIAAQgKAAgHAFg");
	this.shape_2.setTransform(64.1,-1.4,0.352,0.352);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("AhFCFQgLgFgIgMQgIgLgDgNQgEgMAAgPQAAgVAEgMQAEgOAIgJQAIgJANgGQAPgHAQgFIAmgKQAPgEAGgHQAGgHAAgNQAAgQgHgIQgIgJgQAAQgQAAgIAJQgIAKAAAQIAAAHIg9AAIAAgGQAAgXAHgQQAIgQAMgKQANgJARgFQASgEATAAQAdAAATAGQATAGALALQAKALAEAPQAEAQAAARIAACMQAAATABAKQACAJAFANIhCAAQgEgHgBgGIgDgOIgBAAQgMAVgQAGQgOAGgZAAQgSAAgNgHgAAPAJQgGADgIACQgUAFgJAKQgJALAAARQAAAQAGALQAGALAOAAQAGAAAHgDQAJgCAFgFQAGgGAEgGQAEgIAAgMIAAg0QgIAFgHADg");
	this.shape_3.setTransform(55.5,0.3,0.352,0.352);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("AAkCFIg1hmIgaAkIAABCIhEAAIAAkJIBEAAIAABuIBGhuIBKAAIhMBuIBYCbg");
	this.shape_4.setTransform(47.6,0.3,0.352,0.352);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1B").s().p("Ag4B/QgVgNgKgUQgJgTgDgaQgCgcAAgWQAAgZAEgaQAEgZALgUQAKgTAWgLQAUgMAiAAQAeAAATAKQAUAKAKARQALARAEAaQAEAbAAAdIAAAOIiHAAIAAAWIACAXQACAKAEAKQAFAJAFAFQAIAFAHAAQASAAAIgNQAIgNADgYIA9AAQgCAugWAZQgXAYgyAAQgkAAgVgNgAgOhXQgHAEgEAIQgEAJgCAIIgCATIAAAKIBGAAIgCgbQgCgLgEgJQgDgIgHgEQgHgEgKAAQgKAAgGAFg");
	this.shape_5.setTransform(38.8,0.3,0.352,0.352);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1B").s().p("ABEClIAAg/IiHAAIAAA/Ig+AAIAAhyIAXAAQAMgdAHgiQAHgkAAg4IAAg8IC0AAIAADXIAdAAIAABygAgSg2QgCAUgDASIgHAkQgFAUgFALIBJAAIAAijIgxAAg");
	this.shape_6.setTransform(30,1.4,0.352,0.352);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1B").s().p("AAACwIAAj4IhGAAIAAguIAHAAQAkAAAUgOQAUgNAFgeIA1AAIAAFfg");
	this.shape_7.setTransform(16.1,-1.2,0.352,0.352);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1B").s().p("AAACwIAAj4IhGAAIAAguIAGAAQAkAAAVgOQAUgOAFgdIA1AAIAAFfg");
	this.shape_8.setTransform(7.7,-1.2,0.352,0.352);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1D1B").s().p("Ah7AcIAAg3ID3AAIAAA3g");
	this.shape_9.setTransform(-4.1,-0.1,0.352,0.352);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D1D1B").s().p("AAnCFIAAhiIgTAAIgwBiIhOAAIA9hpQgXgJgNgSQgNgSAAgfQAAgsAYgUQAZgVAoABIBwAAIAAEJgAgShLQgKAIAAATQAAATAJAIQAJAIASAAIAfAAIAAhHIgcAAQgTAAgKAJg");
	this.shape_10.setTransform(-17.3,0.3,0.352,0.352);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D1D1B").s().p("AhoC0IAAlgIBCAAIAAAcIABAAQAMgTAOgIQANgIAVAAQAqAAAUAhQAUAgAABLQAABLgUAgQgUAfgqAAQgVAAgLgGQgPgJgKgPIgBAAIAABvgAgchoQgHAVAAAsQAAAsAHAVQAHAXAVAAQAWAAAHgXQAHgXAAgqQAAgqgHgXQgHgXgWAAQgVAAgHAXg");
	this.shape_11.setTransform(-25.4,1.7,0.352,0.352);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D1D1B").s().p("Ag5CuQgUgNgLgXQgKgXgCgeQgDgfAAgjQAAgeADgiQAEgiALgYQALgaATgSQAUgSAegEIAlgHQAMgDACgHIA0AAQgBAUgFAOQgFANgKAIQgLAHgPAEQgMADgXACQgVADgNAEQgPAEgKAJQgJAJgFAPQgGANgCAZIACAAQAFgOAIgJQAIgLAKgFQAKgGAMgDQAKgDALAAQAcAAARAKQASAKALASQAKASAFAZQAEAYABAdQgBAfgEAZQgFAZgLASQgMASgVAKQgUAKghAAQgjAAgUgNgAgQgjQgGADgFALQgDALgDARQgCAXAAAWQAAAxAHAUQAIAVAUAAQALAAAGgFQAHgFAEgKQAEgLACgRQACgQAAgcQAAgWgCgXQgCgQgEgLQgFgKgGgEQgHgEgKAAQgIAAgIAFg");
	this.shape_12.setTransform(-34,-1.4,0.352,0.352);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1D1D1B").s().p("AAnCFIAAhiIgTAAIgwBiIhPAAIA+hpQgXgJgOgSQgNgTAAgeQAAgrAZgVQAZgVAoABIBwAAIAAEJgAgShLQgKAIAAATQAAATAJAIQAJAIASAAIAfAAIAAhHIgcAAQgTAAgKAJg");
	this.shape_13.setTransform(-42.9,0.3,0.352,0.352);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1D1D1B").s().p("AgyCEQgUgJgMgRQgNgSgEgaQgFgZAAgkQAAgkAFgYQAGgbAMgRQAMgSAVgJQAUgJAcAAQAfAAAUAJQAUAIANASQAMARAEAbQAFAaAAAjQAAAlgFAYQgFAagNARQgMARgUAJQgTAJgfAAQgfAAgTgIgAgThVQgIAHgDAMQgEAOgBAQIAABLQABAPAEAOQADAMAIAIQAIAHALAAQAVAAAIgWQAIgVAAgzQAAgygIgVQgIgWgVAAQgLAAgIAHg");
	this.shape_14.setTransform(-51,0.3,0.352,0.352);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1D1D1B").s().p("AAhCFIAAhxIhBAAIAABxIhEAAIAAkJIBEAAIAABiIBBAAIAAhiIBEAAIAAEJg");
	this.shape_15.setTransform(-59.5,0.3,0.352,0.352);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1D1D1B").s().p("Ag6CoQgVgJgNgRQgMgQgEgSQgDgRAAgRQAAghAPgZQAOgWAegGIAAgBQgOgEgKgHQgJgHgGgKQgHgKgCgKQgCgLAAgJQAAg0AbgWQAcgXAvABQAxgBAbAXQAbAWAAA0QAAAMgCAIQgEAMgFAIQgFAJgLAIQgJAHgOAEIAAABQAeAGAPAWQAOAZAAAhQAAARgDARQgEATgMAPQgMAQgWAKQgXAKgkAAQgjAAgXgKgAgTARQgHAEgFAJQgFAIgCALQgCAJAAAPQAAAOACAJQACAMAFAIQAEAIAIAFQAHAEAMAAQANAAAHgEQAHgEAGgJQAEgIACgMQACgLAAgMQAAgOgCgKQgCgLgEgIQgGgJgHgEQgJgFgLAAQgKAAgJAFgAgihTQAAAaAKALQAKAMAOABQAQgBAJgMQAKgLAAgaQAAgwgjAAQgiAAAAAwg");
	this.shape_16.setTransform(-72.3,-1.1,0.352,0.352);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1D1D1B").s().p("AhrCwQAAgXAEgVQAFgTAKgUQAKgTAOgRQAPgRATgSIAdgaQALgKAHgJQAIgLADgHQAEgKACgKIABgYQAAgrgjAAQgMAAgIAFQgIAGgEAJQgEAKgCAMIgBAaIhEAAIAAgNQAAgyAagaQAbgaA3AAQA2AAAaAZQAZAZAAAuQAAARgDAPQgDAPgGANQgGANgLAMQgJAMgQAOIgoAlQgOANgKAPQgJAOgCAJICDAAIAAA4g");
	this.shape_17.setTransform(-80.8,-1.2,0.352,0.352);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.qwe, new cjs.Rectangle(-84.6,-7.9,169.3,16), null);


(lib.ppp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AyNMlIAA5JMAkbAAAIAAZJg");
	this.shape.setTransform(41.1,28.3,0.352,0.352);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ppp, new cjs.Rectangle(0,0,82.1,56.7), null);


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


(lib.ghghgh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AByDlIgUg0Ii7AAIgUA0IjAAAIDDnJIDdAAIDDHJgAA3BBIg2iaIgBAAIg2CaIBtAAg");
	this.shape.setTransform(87,-2.8,0.335,0.335);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhaDlIAAlWIinAAIAAhzIIDAAIAABzIinAAIAAFWg");
	this.shape_1.setTransform(58.9,-2.8,0.335,0.335);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("ABmDlIAAi3IjLAAIAAC3Ii1AAIAAnJIC1AAIAACfIDLAAIAAifIC1AAIAAHJg");
	this.shape_2.setTransform(28.7,-2.8,0.335,0.335);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("AjODFQhDgsAAhqIAAkbIC1AAIAAEUQAAAqAYATQAXARAtAAQAvAAAWgRQAYgTAAgqIAAkUIC1AAIAAEbQAABqhDAsQg/AoiQAAQiPAAg/gog");
	this.shape_3.setTransform(-3.4,-2.6,0.335,0.335);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("AjmDlIAAnJIC1AAIAAFOIEYAAIAAB7g");
	this.shape_4.setTransform(-32.3,-2.8,0.335,0.335);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1B").s().p("AnDHEQi7i7AAkJQAAkIC7i7QC7i7EIAAQEJAAC7C7QC7C7AAEIQAAEJi7C7Qi7C7kJAAQkIAAi7i7gAhJjhQgnAggNAkIh4FQIF+AAQA5ABArggQAhgaAGgbImEAAIB6lgIgIgBQgjAAgoAhg");
	this.shape_5.setTransform(-75.8,-0.9,0.335,0.335);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ghghgh, new cjs.Rectangle(-97.2,-22.3,194.4,42.8), null);


(lib.ghgh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(-97,-126);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ghgh, new cjs.Rectangle(-97,-126,202,230), null);


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
	this.instance.setTransform(-29,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dfgd, new cjs.Rectangle(-29,4,277,18), null);


(lib.bbvv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(-120,-167);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bbvv, new cjs.Rectangle(-120,-167,336,220), null);


(lib._9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag6DtQgbgHgTgOQgSgPgLgTQgKgUAAgWIAAgHIBhAAIAAAFQAAASANAJQAOAJAUAAQAuABAAg8IAAhAQgoAhgpAAQgwAAgfgcQgegbAAgyIAAhxQAAgkAVgaQAVgZAggMQAggLAmAAQAoAAAfALQAgAMAUAZQAUAaAAAmIAAD1QAAAmgQAeQgRAeggARQggARgvAAQgfAAgbgIgAguh/IAABdQAAAVANANQAOALATAAQAUAAAOgLQANgMAAgXIAAhcQAAgYgMgMQgMgMgWAAQgvAAAAAwg");
	this.shape.setTransform(5.1,8.6,0.352,0.352);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib._9, new cjs.Rectangle(0,0,10.2,17.3), null);


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
	this.shape.setTransform(0,-11.8,0.352,0.352);

	this.instance = new lib._999();
	this.instance.parent = this;
	this.instance.setTransform(7.2,12.3,1.277,1.277,0,0,0,17.4,8.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhSEvQglgKgWgXQgWgUgNgkQgLgiAAgyQAAhpBcguQhQgnAAhnQABgyAWghQAWgiApgRQAngQAyAAQAyAAAoAQQAoARAXAiQAWAhAAAyQAABphLAlQAtASAVAjQAVAkABA+QgBBBgTApQgUApgpASQgpAThCgBQgvABgjgLgAg9BsIAAAfQABBUA8AAQA+AAAAhUIAAgfQAAhTg+AAQg8AAgBBTgAgqjKQgNAVAAArQAABOA3AAQAeAAANgTQANgTAAgoQAAgtgMgTQgMgUggAAQgeAAgMAUg");
	this.shape_1.setTransform(-25.1,12.3,0.352,0.352);

	this.instance_1 = new lib._999();
	this.instance_1.parent = this;
	this.instance_1.setTransform(12.9,-12.3,1,1,0,0,0,17.3,8.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhvDRQgigkAAg5IAAgcIBbAAIAAARQAABFAzAAQAfAAALgSQAJgSAAgmQAAgtgNgSQgOgSghAAIgqAAIAAhAIAcAAQAqAAAOgXQANgWAAgiQAAgyguABQgYAAgOAOQgNAPAAAcIAAAQIhaAAIAAgUQAAg3AmgiQAmgjBBAAQArAAAgAOQAgAOARAbQARAaAAAlQAAAugTAZQgSAZgmANQBTARAABmQAAAzgRAgQgSAfgiAPQghAOgyAAQhFAAgkgkg");
	this.shape_2.setTransform(-11.8,-12.4,0.352,0.352);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAMDsIAAlEIh3AAIAAhBIANAAQA5AAAhgYQAhgWAKgkIBFAAIAAHXg");
	this.shape_3.setTransform(-26.5,-12.4,0.352,0.352);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhfAdIAAg5IC/AAIAAA5g");
	this.shape_4.setTransform(-35.2,-10.1,0.352,0.352);

	this.instance_2 = new lib.ppp();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.1,0.1,1,1,0,0,0,41.1,28.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_1},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.vvbv, new cjs.Rectangle(-41,-28.3,82.1,56.7), null);


(lib.vv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5).p("APkklI/HJK");
	this.shape.setTransform(0,-11.8,0.352,0.352);

	this.instance = new lib._999();
	this.instance.parent = this;
	this.instance.setTransform(8.7,12.3,1.277,1.277,0,0,0,17.4,8.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhcErQgogPgaggQgYghgBgxIAAk5QAAgwAWgnQAVgmApgXQAqgVA4AAQA1gBAqASQArASAXAeQAYAggBAmIAAAIIh7AAIAAgGQAAgWgPgMQgQgNgcAAQgeAAgPATQgQATABAtIAABHQAQgRAfgNQAggNAZAAQAoAAAgAQQAfAQASAfQARAfAAArIAACRQAABIgzAkQgyAihUABQgzAAgngPgAgqgBQgRAOAAAfIAAB4QAAA9A5AAQA+AAAAg9IAAh7QAAgbgRgOQgSgRgYABQgZAAgSAPg");
	this.shape_1.setTransform(-23,12.3,0.352,0.352);

	this.instance_1 = new lib._999();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13,-12.6,0.997,0.997,0,0,0,17.4,8.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhuDRQgjgkAAg5IAAgcIBbAAIAAAQQAABGAzAAQAgAAAKgSQAKgSAAgmQAAgugOgRQgOgSghAAIgqAAIAAhAIAcAAQAqAAAOgXQAOgWAAgiQAAgygvAAQgYAAgOAPQgNAQAAAbIAAAQIhZAAIAAgUQAAg3AlgjQAngiBAAAQAsAAAfAOQAgAOARAaQARAbAAAlQAAAugTAZQgTAZgkAMQBSASAABmQAAA0gRAfQgSAgghAOQgjAOgxAAQhGAAgigkg");
	this.shape_2.setTransform(-11.8,-12.4,0.352,0.352);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAMDtIAAlFIh3AAIAAhBIANAAQA4AAAigXQAigXAJglIBFAAIAAHZg");
	this.shape_3.setTransform(-26.6,-12.4,0.352,0.352);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhfAdIAAg5IC/AAIAAA5g");
	this.shape_4.setTransform(-35.2,-10.1,0.352,0.352);

	this.instance_2 = new lib.ppp();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.1,0.1,1,1,0,0,0,41.1,28.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_1},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.vv, new cjs.Rectangle(-41,-28.3,82.1,56.7), null);


(lib.fgggg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5).p("APkklI/HJK");
	this.shape.setTransform(0,-13.1,0.352,0.352);

	this.instance = new lib._999();
	this.instance.parent = this;
	this.instance.setTransform(16.1,11.2,1.277,1.277,0,0,0,17.4,8.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjBE0IAAggQAAg6AVgvQAUgwAeghQAfgiAegaIA/gyQAsgoAMgVQANgXAAgfQAAhOhDAAQghAAgRAVQgRAWAAAyIAAAhIh6AAIAAgkQAAg6AbgqQAcgrArgUQAsgVAvAAQA1AAArAUQArAUAaAlQAZAlAAAvQAAAxgXAuQgZAwgrAjIhMA/QggAcgXAeQgWAdgFAiIDpAAIAABcg");
	this.shape_1.setTransform(-16.1,10.8,0.352,0.352);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAQEuIAAmfIiZAAIAAhTIAQAAQBIAAAsgdQAqgeANgvIBYAAIAAJcg");
	this.shape_2.setTransform(-34.4,11,0.352,0.352);

	this.instance_1 = new lib._999();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13.1,-13.6,0.997,0.997,0,0,0,17.4,8.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhBDtQgbgIgSgSQgSgRgJgbQgJgaAAgoQAAhRBIglQg+geAAhQQAAgoARgZQASgbAfgMQAfgNAnAAQAnAAAfANQAeALAUAcQARAaAAAnQAABSg8AcQAkAOARAcQAQAcABAwQgBA0gPAfQgPAgggAPQgiAOgyAAQgkAAgdgIgAgvBUIAAAYQAABCAvAAQAwAAAAhCIAAgYQAAhAgwAAQgvAAAABAgAggieQgLAQAAAiQAAA9ArAAQAXAAAKgOQALgPgBggQAAgjgJgPQgKgQgYAAQgXAAgJAQg");
	this.shape_3.setTransform(-12.2,-13.6,0.352,0.352);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAMDtIAAlFIh3AAIAAhBIANAAQA4AAAigXQAigXAJglIBFAAIAAHZg");
	this.shape_4.setTransform(-26.6,-13.6,0.352,0.352);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhfAdIAAg5IC/AAIAAA5g");
	this.shape_5.setTransform(-35.2,-11.3,0.352,0.352);

	this.instance_2 = new lib.ppp();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.1,0.1,1,1,0,0,0,41.1,28.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance_1},{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fgggg, new cjs.Rectangle(-41,-28.3,82.1,56.7), null);


(lib.bbbnbn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5).p("APkkkI/HJJ");
	this.shape.setTransform(0,-11.8,0.352,0.352);

	this.instance = new lib._9();
	this.instance.parent = this;
	this.instance.setTransform(-25.3,12.4,1.271,1.281,0,0,0,5.1,8.7);

	this.instance_1 = new lib._999();
	this.instance_1.parent = this;
	this.instance_1.setTransform(6.1,12.4,1.277,1.277,0,0,0,17.4,8.7);

	this.instance_2 = new lib._999();
	this.instance_2.parent = this;
	this.instance_2.setTransform(12.3,-12.3,0.997,0.997,0,0,0,17.4,8.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhPDsQANhrAlhuQAjhpAxhNIjNAAIAAhIIEtAAIAABDQgxBWgjBkQghBhgJB5g");
	this.shape_1.setTransform(-12.5,-12.3,0.352,0.352);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAMDtIAAlFIh3AAIAAhCIANAAQA4AAAjgWQAggXAKglIBEAAIAAHZg");
	this.shape_2.setTransform(-26.5,-12.4,0.352,0.352);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhfAeIAAg7IC/AAIAAA7g");
	this.shape_3.setTransform(-35.2,-10,0.352,0.352);

	this.instance_3 = new lib.ppp();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.1,0.1,1,1,0,0,0,41.1,28.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bbbnbn, new cjs.Rectangle(-41,-28.3,82.1,56.7), null);


// stage content:
(lib._336x280 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").p("A6K1yMA0VAAAMAAAArlMg0VAAAg");
	this.shape.setTransform(168,139.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(362));

	// 4
	this.instance = new lib.v();
	this.instance.parent = this;
	this.instance.setTransform(-215,168);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(278).to({_off:false},0).wait(1).to({regX:48,regY:-57,x:-165.2,y:111},0).wait(1).to({x:-159.4},0).wait(1).to({x:-147.6},0).wait(1).to({x:-127},0).wait(1).to({x:-92},0).wait(1).to({x:-34.8},0).wait(1).to({x:38.2},0).wait(1).to({x:94.8},0).wait(1).to({x:129.4},0).wait(1).to({x:149.8},0).wait(1).to({x:161.5},0).wait(1).to({x:167.3},0).wait(1).to({regX:0,regY:0,x:121,y:168},0).wait(56).to({regX:48,regY:-57,x:170.9,y:111},0).wait(1).to({x:177.3},0).wait(1).to({x:190.2},0).wait(1).to({x:212.4},0).wait(1).to({x:248.9},0).wait(1).to({x:303.8},0).wait(1).to({x:366.5},0).wait(1).to({x:413.8},0).wait(1).to({x:442.6},0).wait(1).to({x:458.8},0).wait(1).to({x:466.7},0).wait(1).to({regX:0,regY:0,x:421,y:168},0).wait(4));

	// plate4
	this.instance_1 = new lib.vv();
	this.instance_1.parent = this;
	this.instance_1.setTransform(286.2,244.8,0.5,0.5);
	this.instance_1.alpha = 0.301;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(221).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},7,cjs.Ease.get(1)).wait(51).to({x:287.9},0).wait(1).to({x:293.9},0).wait(1).to({x:305.8},0).wait(1).to({x:326.7},0).wait(1).to({x:362},0).wait(1).to({x:419.9},0).wait(1).to({x:493.8},0).wait(1).to({x:551.1},0).wait(1).to({x:586.1},0).wait(1).to({x:606.8},0).wait(1).to({x:618.6},0).wait(1).to({x:624.5},0).wait(1).to({x:626.2},0).to({_off:true},1).wait(70));

	// plate3
	this.instance_2 = new lib.bbbnbn();
	this.instance_2.parent = this;
	this.instance_2.setTransform(49.5,36,0.5,0.5);
	this.instance_2.alpha = 0.301;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(217).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},7,cjs.Ease.get(1)).wait(53).to({x:51.2},0).wait(1).to({x:57.1},0).wait(1).to({x:68.8},0).wait(1).to({x:89.4},0).wait(1).to({x:124.2},0).wait(1).to({x:181.3},0).wait(1).to({x:254.1},0).wait(1).to({x:310.5},0).wait(1).to({x:345},0).wait(1).to({x:365.3},0).wait(1).to({x:377},0).wait(1).to({x:382.8},0).wait(1).to({x:384.5},0).to({_off:true},1).wait(72));

	// 3
	this.instance_3 = new lib.vvv();
	this.instance_3.parent = this;
	this.instance_3.setTransform(173,138,0.5,0.5);
	this.instance_3.alpha = 0.301;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(213).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},7,cjs.Ease.get(1)).wait(58).to({regX:-0.5,x:174.2},0).wait(1).to({x:180.2},0).wait(1).to({x:192.1},0).wait(1).to({x:213},0).wait(1).to({x:248.3},0).wait(1).to({x:306.2},0).wait(1).to({x:380.1},0).wait(1).to({x:437.4},0).wait(1).to({x:472.4},0).wait(1).to({x:493.1},0).wait(1).to({x:504.9},0).wait(1).to({x:510.8},0).wait(1).to({regX:0,x:513},0).to({_off:true},1).wait(71));

	// logo
	this.instance_4 = new lib.ghghgh();
	this.instance_4.parent = this;
	this.instance_4.setTransform(164.9,250.4,0.8,0.8,0,0,0,0.1,0.1);
	this.instance_4.alpha = 0.309;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(143).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:164.8,alpha:1},7,cjs.Ease.get(1)).wait(51).to({regY:-0.9,x:166.6,y:249.5},0).wait(1).to({x:172.9},0).wait(1).to({x:185.4},0).wait(1).to({x:206.9},0).wait(1).to({x:242.2},0).wait(1).to({x:296.1},0).wait(1).to({x:359.4},0).wait(1).to({x:408.2},0).wait(1).to({x:437.9},0).wait(1).to({x:454.4},0).wait(1).to({x:462.5},0).wait(1).to({regY:0,x:464.8,y:250.4},0).to({_off:true},1).wait(79).to({_off:false,regX:0.1,regY:0.1,scaleX:0.8,scaleY:0.8,x:164.9,alpha:0.309},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:164.8,alpha:1},7,cjs.Ease.get(1)).wait(51).to({regY:-0.9,x:166.6,y:249.5},0).wait(1).to({x:172.9,y:249.6},0).wait(1).to({x:185.4,y:249.8},0).wait(1).to({x:206.9,y:250.2},0).wait(1).to({x:242.2,y:250.7},0).wait(1).to({x:296.1,y:251.6},0).wait(1).to({x:359.4,y:252.7},0).wait(1).to({x:408.2,y:253.5},0).wait(1).to({x:437.9,y:254},0).wait(1).to({x:454.4,y:254.3},0).wait(1).to({x:462.5,y:254.4},0).wait(1).to({regY:0,x:464.8,y:255.4},0).wait(1));

	// 2
	this.instance_5 = new lib.bbvv();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-215,167);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(130).to({_off:false},0).wait(1).to({regX:48,regY:-57,x:-164.5,y:110},0).wait(1).to({x:-156.2},0).wait(1).to({x:-139.6},0).wait(1).to({x:-111.6},0).wait(1).to({x:-67.6},0).wait(1).to({x:-6.7},0).wait(1).to({x:57.2},0).wait(1).to({x:106.2},0).wait(1).to({x:137.7},0).wait(1).to({x:156.1},0).wait(1).to({x:165.3},0).wait(1).to({regX:0,regY:0,x:120,y:167},0).wait(56).to({regX:48,regY:-57,x:169.8,y:110},0).wait(1).to({x:176.1},0).wait(1).to({x:188.6},0).wait(1).to({x:210.1},0).wait(1).to({x:245.4},0).wait(1).to({x:299.3},0).wait(1).to({x:362.6},0).wait(1).to({x:411.4},0).wait(1).to({x:441.1},0).wait(1).to({x:457.6},0).wait(1).to({x:465.7},0).wait(1).to({regX:0,regY:0,x:420,y:167},0).to({_off:true},1).wait(152));

	// plate2
	this.instance_6 = new lib.fgggg();
	this.instance_6.parent = this;
	this.instance_6.setTransform(287.8,244.1,0.5,0.5,0,0,0,0.1,0.1);
	this.instance_6.alpha = 0.301;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(78).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,alpha:1},6,cjs.Ease.get(1)).wait(46).to({x:290.2},0).wait(1).to({x:298.7},0).wait(1).to({x:315.5},0).wait(1).to({x:343.9},0).wait(1).to({x:388.6},0).wait(1).to({x:450.4},0).wait(1).to({x:515.3},0).wait(1).to({x:565},0).wait(1).to({x:597},0).wait(1).to({x:615.7},0).wait(1).to({x:625.1},0).wait(1).to({x:627.8},0).to({_off:true},1).wait(220));

	// plate1
	this.instance_7 = new lib.vvbv();
	this.instance_7.parent = this;
	this.instance_7.setTransform(48.8,35.9,0.5,0.5,0,0,0,0.1,0.1);
	this.instance_7.alpha = 0.301;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(74).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,alpha:1},6,cjs.Ease.get(1)).wait(48).to({x:51.2},0).wait(1).to({x:59.7},0).wait(1).to({x:76.5},0).wait(1).to({x:104.9},0).wait(1).to({x:149.6},0).wait(1).to({x:211.4},0).wait(1).to({x:276.3},0).wait(1).to({x:326},0).wait(1).to({x:358},0).wait(1).to({x:376.7},0).wait(1).to({x:386.1},0).wait(1).to({x:388.8},0).to({_off:true},1).wait(222));

	// 1
	this.instance_8 = new lib.ghgh();
	this.instance_8.parent = this;
	this.instance_8.setTransform(170.5,146.5,0.5,0.5,0,0,0,0.1,0.1);
	this.instance_8.alpha = 0.301;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(70).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,alpha:1},7,cjs.Ease.get(1)).wait(52).to({regX:4,regY:-11,x:177,y:135.5},0).wait(1).to({x:185.5},0).wait(1).to({x:202.2},0).wait(1).to({x:230.7},0).wait(1).to({x:275.4},0).wait(1).to({x:337.1},0).wait(1).to({x:402},0).wait(1).to({x:451.8},0).wait(1).to({x:483.8},0).wait(1).to({x:502.4},0).wait(1).to({x:511.8},0).wait(1).to({regX:0,regY:0,x:510.5,y:146.5},0).to({_off:true},1).wait(221));

	// Слой 1
	this.instance_9 = new lib.dfgd();
	this.instance_9.parent = this;
	this.instance_9.setTransform(168,262,1,1,0,0,0,108,11);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(15).to({_off:false},0).to({alpha:1},7).wait(42).to({alpha:0},5).to({_off:true},1).wait(292));

	// skidka
	this.instance_10 = new lib.ggg();
	this.instance_10.parent = this;
	this.instance_10.setTransform(168,210,0.5,0.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(7).to({_off:false},0).to({scaleX:1,scaleY:1,x:168.5},7,cjs.Ease.get(1)).wait(49).to({scaleX:0.8,scaleY:0.8,y:192.2,alpha:0.301},7,cjs.Ease.get(-1)).to({_off:true},1).wait(291));

	// date
	this.instance_11 = new lib.qwe();
	this.instance_11.parent = this;
	this.instance_11.setTransform(380.4,140.1);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(16).to({_off:false},0).wait(1).to({x:377.6},0).wait(1).to({x:367.8},0).wait(1).to({x:348.1},0).wait(1).to({x:315.4},0).wait(1).to({x:271.7},0).wait(1).to({x:229.8},0).wait(1).to({x:199.8},0).wait(1).to({x:181.9},0).wait(1).to({x:173},0).wait(1).to({x:170.4},0).wait(35).to({scaleX:0.8,scaleY:0.8,x:170,y:138.3,alpha:0.301},7,cjs.Ease.get(-1)).to({_off:true},1).wait(293));

	// mania
	this.instance_12 = new lib.hhh();
	this.instance_12.parent = this;
	this.instance_12.setTransform(171.6,63.1,0.5,0.5,0,0,0,0,0.1);
	this.instance_12.alpha = 0.449;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({regY:0,scaleX:1,scaleY:1,alpha:1},7,cjs.Ease.get(1)).wait(52).to({scaleX:0.8,scaleY:0.8,x:171,y:78.9,alpha:0.301},7,cjs.Ease.get(-1)).to({_off:true},1).wait(295));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFEC00").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape_1.setTransform(168,140,1.4,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(362));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(167.5,139.4,337,281);
// library properties:
lib.properties = {
	width: 336,
	height: 280,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/336x280_atlas_P_.png?1511014458679", id:"336x280_atlas_P_"},
		{src:"images/336x280_atlas_NP_.jpg?1511014458679", id:"336x280_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;