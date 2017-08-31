(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"300x250_atlas_P_", frames: [[0,0,212,28],[0,57,215,20],[0,30,215,25]]},
		{name:"300x250_atlas_NP_", frames: [[0,0,300,300],[0,302,300,214],[0,518,300,214]]}
];


// symbols:



(lib._110 = function() {
	this.spriteSheet = ss["300x250_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.spriteSheet = ss["300x250_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg2 = function() {
	this.spriteSheet = ss["300x250_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg3 = function() {
	this.spriteSheet = ss["300x250_atlas_NP_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.neupustipngкопия = function() {
	this.spriteSheet = ss["300x250_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.shans = function() {
	this.spriteSheet = ss["300x250_atlas_P_"];
	this.gotoAndStop(2);
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


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.neupustipngкопия();
	this.instance.parent = this;
	this.instance.setTransform(-107.5,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-107.5,-10,215,20), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shans();
	this.instance.parent = this;
	this.instance.setTransform(-107.5,-12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-107.5,-12.5,215,25), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAqBFIAAiJIAPAAIAACJgAg4BFIAAiJIAPAAIAAA7IASAAQArAAABAnQgBAngoAAgAgpA3IASAAQAOAAAHgFQAHgGAAgOQAAgPgIgGQgIgFgQAAIgOAAg");
	this.shape.setTransform(21.5,0,1.176,1.176);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAqBFIABiCIgBAAIghCCIgRAAIgiiCIABCCIgQAAIAAiJIAbAAIAbBrIADAUIADgUIAbhrIAbAAIAACJg");
	this.shape_1.setTransform(4.7,0,1.176,1.176);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAcBFIAAiCIAAAAQgCAOgDAJIgrBrIgWAAIAAiJIAPAAIAAB/IAAAAIAGgTIAqhsIAWAAIAACJg");
	this.shape_2.setTransform(-10.5,0,1.176,1.176);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgpAaIAPAAQABAQAFAHQAHAJAOAAQAaAAAAgdQAAgKgHgIQgHgIgLAAIgMAAIAAgNIAKAAQAVAAAAgXQAAgYgVAAQgKAAgHAHQgGAHgBALIgQAAQADgSAKgKQALgLAQAAQAQAAALAKQAKAKAAAOQAAAZgVAIQAMADAHAIQAHAJAAAPQAAAPgIALQgLAPgXAAQgnAAgCgug");
	this.shape_3.setTransform(-23.3,0,1.176,1.176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-28.2,-8.4,56.5,16.9), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAbBFIABiCIgBAAQgCAPgCAHIgrBsIgWAAIAAiJIAPAAIAAB/IAAAAIAGgTIAqhsIAWAAIAACJg");
	this.shape.setTransform(64.7,0,1.176,1.176);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAqBFIABiCIgBAAIghCCIgRAAIghiCIgBAAIABCCIgPAAIAAiJIAaAAIAbBrQADAIAAAMIAAAAIADgVIAbhqIAbAAIAACJg");
	this.shape_1.setTransform(49.6,0,1.176,1.176);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAaBFIAAg7IgUAAIgdA7IgRAAIAfg9QgbgIABgdQAAgnAoAAIAkAAIAACJgAgMgxQgIAGABAOQAAAPAJAHQAHAFAQAAIANAAIAAg0IgRAAQgOAAgHAFg");
	this.shape_2.setTransform(34.6,0,1.176,1.176);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgmBFIAAiJIAPAAIAAA7IATAAQArAAAAAnQAAAngoAAgAgXA3IASAAQAOAAAGgFQAIgGAAgOQAAgQgJgGQgHgFgRAAIgNAAg");
	this.shape_3.setTransform(23.5,0,1.176,1.176);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAaBFIAAhCIgzAAIAABCIgQAAIAAiJIAQAAIAAA7IAzAAIAAg7IAQAAIAACJg");
	this.shape_4.setTransform(10.7,0,1.176,1.176);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiBFIAAiJIBEAAIAAAOIg1AAIAAAtIAyAAIAAAMIgyAAIAAA0IA1AAIAAAOg");
	this.shape_5.setTransform(-1,0,1.176,1.176);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmBFIAAiJIAkAAQAlAAAAAjQAAAYgUAGQAKABAHAIQAHAKAAANQAAATgLALQgKAKgSAAgAgXA3IAXAAQAXAAAAgaQAAgagYAAIgWAAgAgXgJIATAAQALAAAGgFQAGgGAAgMQAAgWgWAAIgUAAg");
	this.shape_6.setTransform(-12.5,0,1.176,1.176);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AglAyQgHgQAAgiQAAhHAsAAQAtAAAABHQAAAigHAQQgKAWgcAAQgaAAgLgWgAgcgCQAAAgAFANQAGAPARAAQASAAAGgPQAGgNAAggQAAg3geAAQgcAAAAA3g");
	this.shape_7.setTransform(-25.3,0,1.176,1.176);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAaBFIAAhCIgzAAIAABCIgPAAIAAiJIAPAAIAAA7IAzAAIAAg7IAQAAIAACJg");
	this.shape_8.setTransform(-38.5,0,1.176,1.176);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgfBFIAAiJIA/AAIAAAOIgwAAIAAB7g");
	this.shape_9.setTransform(-49.1,0,1.176,1.176);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAqBFIABiCIgBAAIgFASIgdBwIgRAAIghiCIABCCIgPAAIAAiJIAbAAIAbBrIACAUIADgVIAbhqIAbAAIAACJg");
	this.shape_10.setTransform(-63,0,1.176,1.176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-69.8,-8.4,139.6,16.9), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAcBFIAAiCIAAAAQgDAPgDAHIgqBsIgWAAIAAiJIAPAAIAAB/IAAAAIAGgTIAqhsIAWAAIAACJg");
	this.shape.setTransform(43.9,-0.1,1.176,1.176);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAqBFIABiCIgBAAIgiCCIgRAAIghiCIABCCIgPAAIAAiJIAbAAIAbBqQABAFABAQIADgVIAchqIAbAAIAACJg");
	this.shape_1.setTransform(28.8,-0.1,1.176,1.176);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAcBFIAAiCIAAAAQgCANgEAJIgpBsIgXAAIAAiJIAQAAIgBB/IABAAQACgMADgHIAqhsIAWAAIAACJg");
	this.shape_2.setTransform(13.6,-0.1,1.176,1.176);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhBBFIAAiJIAQAAIAAB7IAqAAIAAh7IAPAAIAAB7IArAAIAAh7IAPAAIAACJg");
	this.shape_3.setTransform(-2.6,-0.1,1.176,1.176);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAYBFIAAhDQgMABgNAAQgTAAgIgGQgKgJAAgTIAAglIAPAAIAAAjQAAAOAFAFQAFAEAOAAQAQAAAHgBIAAg5IAPAAIAACJg");
	this.shape_4.setTransform(-18.3,-0.1,1.176,1.176);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbBFIAAgOQADACAHAAQAIAAADgNIgohxIAQAAIAgBeIAdheIAQAAIgmBxQgFAPgFAGQgFAFgJAAQgJAAgDgBg");
	this.shape_5.setTransform(-29.9,0,1.176,1.176);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgwBFIAAgOIAGABQAKAAADgQQACgMAAglIAAg8IBMAAIAACJIgPAAIAAh7IgtAAIAAA2QgBAggDAOQgGAZgSAAg");
	this.shape_6.setTransform(-43.2,-0.1,1.176,1.176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-49,-8.2,98,16.6), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag6BhIAAjBIAlAAIAABLIAeAAQAWAAAOASQAOAQAAAWQAAAcgMARQgNARgWAAgAgVBFIAVAAQAVAAAAgeQAAgOgGgJQgFgJgKAAIgVAAg");
	this.shape.setTransform(61.4,-2.1,1.176,1.176);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag6AkIAAhGQAAhCA7AAQAdAAAPAPQAOAPAAAbIAAAJIgkAAIAAgEQAAgSgFgIQgFgHgMAAQgLAAgFAHQgFAIAAASIAABLQAAAUAFAHQAFAHALAAQAWABAAgjIAAgKIAkAAIAAAIQAABCg6AAQg7AAAAhBg");
	this.shape_1.setTransform(44.5,-2,1.176,1.176);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAcBhIAAhJQAAgvAEgUIAAAAIg1CMIgoAAIAAjBIAjAAIAABJQAAAugFAVIABAAIA0iMIAoAAIAADBg");
	this.shape_2.setTransform(27.3,-2.1,1.176,1.176);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhFBgIAAgbQAEACAIgBQAJAAADgLQADgPAAgwIAAheIBwAAIAADBIglAAIAAijIgmAAIAABKQAAAxgKAVQgJAXgXgBQgMAAgKgCg");
	this.shape_3.setTransform(8.5,-1.9,1.176,1.176);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgzBhIAAjBIBnAAIAAAeIhCAAIAAAtIA8AAIAAAcIg8AAIAAA8IBCAAIAAAeg");
	this.shape_4.setTransform(-7.4,-2.1,1.176,1.176);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAoB0IAAgnIhPAAIAAAnIgkAAIAAhEIAMAAQAKgWAEgVQAEgVAAgnIAAg8IBtAAIAACjIAMAAIAABEgAgJgqQAAAggFAUQgDASgKAUIA2AAIAAiGIgkAAg");
	this.shape_5.setTransform(-24.9,0.2,1.176,1.176);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag+AjIAAhFQAAhCA+AAQA/AAAABCIAABFQAAAkgRAQQgQAOgeAAQg+AAAAhCgAgYgmIAABOQAAAfAYAAQAZAAAAgfIAAhNQAAgQgGgJQgHgIgMgBQgYABAAAgg");
	this.shape_6.setTransform(-43.5,-2,1.176,1.176);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAYBhIAAijIgvAAIAACjIglAAIAAjBIB5AAIAADBg");
	this.shape_7.setTransform(-61.1,-2.1,1.176,1.176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-68.3,-13.8,136.6,27.8), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAbBhIAAhJQAAgsAFgXIg1CMIgoAAIAAjBIAiAAIAABJQAAAugEAVIAAAAIA1iMIAoAAIAADBg");
	this.shape.setTransform(84,-21.2,1.176,1.176);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAbBhIAAhJQAAgsAFgXIg1CMIgoAAIAAjBIAjAAIAABJQAAAugFAVIA1iMIAoAAIAADBg");
	this.shape_1.setTransform(66.3,-21.2,1.176,1.176);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAoB0IAAgnIhQAAIAAAnIgjAAIAAhEIAMAAQAKgXADgUQAEgWABgmIAAg8IBtAAIAACjIALAAIAABEgAgJgqQAAAggFAUQgEASgIAUIA1AAIAAiGIgkAAg");
	this.shape_2.setTransform(47.6,-18.9,1.176,1.176);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAYBhIAAhaIgvAAIAABaIglAAIAAjBIAlAAIAABLIAvAAIAAhLIAlAAIAADBg");
	this.shape_3.setTransform(29,-21.2,1.176,1.176);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAfBhIgJgzIgpAAIgLAzIgoAAIAxjBIAxAAIArDBgAgOASIAfAAIgPhag");
	this.shape_4.setTransform(11.7,-21.2,1.176,1.176);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhFBgIAAgbQAEABAIAAQAJAAADgMQADgOAAgxIAAhcIBwAAIAADAIglAAIAAijIgmAAIAABJQAAAxgKAWQgJAWgWAAQgOAAgJgCg");
	this.shape_5.setTransform(-6.8,-21,1.176,1.176);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAYBhIAAijIgvAAIAACjIglAAIAAjBIB5AAIAADBg");
	this.shape_6.setTransform(-24.2,-21.2,1.176,1.176);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAfBhIgJgzIgpAAIgLAzIgoAAIAxjBIAxAAIArDBgAgOASIAfAAIgPhag");
	this.shape_7.setTransform(-41.5,-21.2,1.176,1.176);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhFBgIAAgbQAEABAIAAQAJAAADgMQAEgOgBgxIAAhcIBwAAIAADAIglAAIAAijIgmAAIAABJQAAAxgKAWQgJAWgWAAQgOAAgJgCg");
	this.shape_8.setTransform(-60,-21,1.176,1.176);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag6BhIAAjBIBCAAQAZAAAMAPQALAMAAAUQAAAPgGAMQgIAOgMACQAdALAAAiQAAAbgLAPQgLAQgWAAgAgVBFIAWAAQAUAAAAgeQAAgegUAAIgWAAgAgVgRIATAAQAWAAgBgbQAAgYgUAAIgUAAg");
	this.shape_9.setTransform(-84.3,-21.2,1.176,1.176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-91.2,-32.6,182.5,27.4), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghBFIAAiJIBDAAIAAAOIg0AAIAAAtIAxAAIAAAMIgxAAIAAA0IA0AAIAAAOg");
	this.shape.setTransform(-3.9,-1.7,1.176,1.176);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAqBFIAAiJIAPAAIAACJgAg4BFIAAiJIAPAAIAAA7IATAAQArAAAAAnQAAAngpAAgAgpA3IASAAQAOAAAHgFQAHgGAAgOQAAgQgIgGQgHgFgSAAIgNAAg");
	this.shape_1.setTransform(-18,-1.7,1.176,1.176);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAbBFIAAhCIg0AAIAABCIgQAAIAAiJIAQAAIAAA7IA0AAIAAg7IAOAAIAACJg");
	this.shape_2.setTransform(-33,-1.7,1.176,1.176);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAYBFIAAhDQgLABgOAAQgTAAgIgGQgKgJAAgTIAAglIAPAAIAAAjQAAAOAFAFQAFAFAOAAIAXgCIAAg5IAPAAIAACJg");
	this.shape_3.setTransform(-45.8,-1.7,1.176,1.176);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglAyQgHgQAAgiQAAhHAsAAQAtAAAABHQAAAigHAQQgLAWgbAAQgaAAgLgWgAgcgCQAAAgAFANQAGAPARAAQASAAAGgPQAGgNAAggQAAg3geAAQgcAAAAA3g");
	this.shape_4.setTransform(-58.6,-1.7,1.176,1.176);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfA7QgJgLgBgXIAPAAQABARAFAIQAHAIAOAAQAaAAAAgcQAAgLgHgHQgHgJgLAAIgMAAIAAgNIAKAAQAVAAAAgXQAAgYgVAAQgKAAgHAHQgGAHgBALIgQAAQADgSAKgKQALgLAQAAQAQAAALAKQAKAKAAAOQAAAZgVAIQAMADAHAHQAHALAAAPQAAAOgIALQgKAOgYAAQgUAAgLgMg");
	this.shape_5.setTransform(-71.3,-1.7,1.176,1.176);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAgBFIgKgoIgrAAIgKAoIgRAAIAniJIAUAAIAmCJgAgSAPIAkAAIgShIIAAAAg");
	this.shape_6.setTransform(-83.5,-1.7,1.176,1.176);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAZBFIgjhEIgRAUIAAAwIgPAAIAAiJIAPAAIAABGIAyhGIATAAIgrA6IAsBPg");
	this.shape_7.setTransform(-95,-1.7,1.176,1.176);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgiAvQgGgQAAggQAAhGAqAAQATAAALANQAJAMAAATIgPAAQAAgegZAAQgQAAgGAVQgDAMAAAXQAAAbAEANQAGATAPAAQAOAAAFgLQAEgIACgUIAPAAQgBAagIAMQgJAPgVAAQgaAAgKgZg");
	this.shape_8.setTransform(-107.7,-1.7,1.176,1.176);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgiBFIAAiJIBEAAIAAAOIg0AAIAAAtIAxAAIAAANIgxAAIAAAzIA1AAIAAAOg");
	this.shape_9.setTransform(108.4,-1.7,1.176,1.176);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAqBFIAAiJIAPAAIAACJgAg4BFIAAiJIAQAAIAAA7IASAAQArAAAAAnQAAAngpAAgAgoA3IARAAQAOAAAHgFQAHgGAAgOQAAgPgIgGQgHgFgSAAIgMAAg");
	this.shape_10.setTransform(94.3,-1.7,1.176,1.176);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAaBFIAAhBIg0AAIAABBIgOAAIAAiJIAOAAIAAA7IA0AAIAAg7IAQAAIAACJg");
	this.shape_11.setTransform(79.3,-1.7,1.176,1.176);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAnBVIAAggIhNAAIAAAgIgPAAIAAguIAJAAQAJgPADgWQADgQAAgjIAAgjIBIAAIAAB7IALAAIAAAugAgOgiQAAAugNAbIA3AAIAAhtIgqAAg");
	this.shape_12.setTransform(66,0.2,1.176,1.176);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AglAyQgHgQAAgiQAAhHAsAAQAbAAALAYQAIARAAAeQAAAigIAQQgKAWgcAAQgaAAgLgWgAgdgCQAAAfAGANQAHAQAQAAQARAAAHgQQAFgNABgfQAAgagHgNQgGgQgRAAQgdAAAAA3g");
	this.shape_13.setTransform(52.6,-1.6,1.176,1.176);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAdBFIgdg6IgdA6IgRAAIAmhGIglhDIARAAIAcA2IAdg2IARAAIglBDIAmBGg");
	this.shape_14.setTransform(40.1,-1.7,1.176,1.176);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAqBFIAAiJIAPAAIAACJgAg4BFIAAiJIAPAAIAAA7IATAAQArAAAAAnQAAAngoAAgAgpA3IASAAQAPAAAGgFQAHgGAAgOQAAgPgIgGQgHgFgSAAIgNAAg");
	this.shape_15.setTransform(25.8,-1.7,1.176,1.176);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgmBFIAAiJIAkAAQASAAAKAKQAJAJAAAQQAAAYgUAGIAAAAQAKABAHAIQAHAKAAAOQAAAngnAAgAgXA3IAXAAQAXAAAAgaQAAgZgYAAIgWAAgAgXgJIATAAQAXAAAAgXQAAgWgVAAIgVAAg");
	this.shape_16.setTransform(11.7,-1.7,1.176,1.176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-112.5,-10.1,225.1,20.3), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAcBVIAAiCIAAAAQgDAPgDAHIgqBsIgWAAIAAiJIAPAAIAAB/QADgMADgHIAqhsIAWAAIAACJgAgShCQgHgGAAgMIAHAAQAEANAOAAQAOAAACgNIAIAAQAAAYgZAAQgKAAgHgGg");
	this.shape.setTransform(38.2,0,1.176,1.176);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAgBFIgLgoIgqAAIgLAoIgQAAIAniJIATAAIAnCJgAgSAPIAkAAIgShIIAAAAg");
	this.shape_1.setTransform(25.4,1.9,1.176,1.176);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgnBFIAAiJIAmAAQApAAAAAnQAAAngsAAIgUAAIAAA7gAgYgCIAPAAQARAAAHgFQAJgGAAgQQAAgOgIgGQgHgFgNAAIgUAAg");
	this.shape_2.setTransform(13.3,1.9,1.176,1.176);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfBFIAAiJIBAAAIAAAOIgxAAIAAB7g");
	this.shape_3.setTransform(2.8,1.9,1.176,1.176);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAcBFIAAiCQgDAPgDAHIgqBsIgWAAIAAiJIAPAAIAAB/IAAAAQADgMADgHIAqhsIAWAAIAACJg");
	this.shape_4.setTransform(-9.4,1.9,1.176,1.176);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAqBFIAAiJIAPAAIAACJgAg4BFIAAiJIAPAAIAAA6IASAAQAsAAAAAoQAAAngoAAgAgpA3IASAAQAOAAAIgFQAGgGAAgOQAAgQgIgGQgIgFgQAAIgOAAg");
	this.shape_5.setTransform(-24.5,1.9,1.176,1.176);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmBFIAAiJIAkAAQAlAAAAAiQAAAZgUAFIAAABQAKABAHAIQAHAJAAAOQAAAognAAgAgXA3IAXAAQAXAAAAgaQAAgagYAAIgWAAgAgXgKIATAAQALAAAGgFQAGgFAAgNQAAgVgVAAIgVAAg");
	this.shape_6.setTransform(-38.6,1.9,1.176,1.176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-43.1,-9.9,86.4,19.9), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._110();
	this.instance.parent = this;
	this.instance.setTransform(-113,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-113,-12,212,28), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,300,214), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,300,214), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AumCbQhBhAAAhbQAAhaBBhAQBAhBBbAAQBbAABABBQBBBAAABaQAABbhBBAQhABBhbAAQhbAAhAhBgAslhNQgNALgFAMIgpB0ICEAAQAUAAAPgLQAMgJABgJIiFAAIAph5IgCAAQgMAAgPALgAhpAzQgXgPAAgkIAAhhIA+AAIAABfQAAAOAJAGQAHAGARAAQAPAAAIgGQAIgGAAgOIAAhfIA+AAIAABhQAAAkgXAPQgWAOgwAAQgyAAgWgOgAOlA7IgGgSIhBAAIgGASIhDAAIBEicIBLAAIBECcgANsACIAlAAIgSg0IgBAAgAI/A7IAAh1Ig6AAIAAgnICyAAIAAAnIg6AAIAAB1gAFKA7IAAg+IhGAAIAAA+Ig/AAIAAicIA/AAIAAA3IBGAAIAAg3IA+AAIAACcgAmbA7IAAicIA+AAIAAByIBgAAIAAAqg");
	this.shape.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-100,-20.9,200,44), null);


(lib.Анимация4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPBhIAAgiIAfAAIAAAigAgJAvIgGg+IAAhRIAfAAIAABRIgEA+g");
	this.shape.setTransform(65.2,-2.1,1.176,1.176);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAcBhIgchIIgcBIIgpAAIAvhjIgsheIAqAAIAYA/IAag/IAqAAIgwBeIAyBjg");
	this.shape_1.setTransform(53.6,-2.1,1.176,1.176);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAbBhIAAhKQAAgrAFgXIg1CMIgoAAIAAjBIAjAAIAABJQAAAugFAVIA1iMIAoAAIAADBg");
	this.shape_2.setTransform(36.1,-2.1,1.176,1.176);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag+AjIAAhFQAAhCA+AAQA/AAAABCIAABFQAAAkgRAQQgQAOgeAAQg+AAAAhCgAgYgmIAABPQAAAeAYAAQAZAAAAgeIAAhOQAAgQgGgJQgHgIgMgBQgYABAAAgg");
	this.shape_3.setTransform(18.5,-2,1.176,1.176);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag6BhIAAjBIBDAAQAYAAAMAOQALANAAAUQAAAPgHAMQgHAOgMACQAdAKAAAkQAAAagLAPQgLAQgWAAgAgWBFIAXAAQAUABAAgfQAAgdgUAAIgXAAgAgWgRIAUAAQAWAAAAgaQAAgZgWAAIgUAAg");
	this.shape_4.setTransform(1.6,-2.1,1.176,1.176);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAoB0IAAgmIhPAAIAAAmIgkAAIAAhEIAMAAQAKgXAEgTQAEgXAAgmIAAg9IBtAAIAACkIAMAAIAABEgAgJgqQAAAfgEAVQgEASgJAUIA1AAIAAiGIgkAAg");
	this.shape_5.setTransform(-16.8,0.2,1.176,1.176);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAfBhIgJgyIgpAAIgLAyIgoAAIAxjBIAxAAIArDBgAgOASIAfAAIgPhZg");
	this.shape_6.setTransform(-42.7,-2.1,1.176,1.176);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAYBhIAAhaIgvAAIAABaIglAAIAAjBIAlAAIAABKIAvAAIAAhKIAlAAIAADBg");
	this.shape_7.setTransform(-60,-2.1,1.176,1.176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.1,-13.9,134.2,27.8);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPBhIAAgiIAfAAIAAAigAgJAvIgGg+IAAhRIAfAAIAABRIgEA+g");
	this.shape.setTransform(65.2,-2.1,1.176,1.176);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAcBhIgchIIgcBIIgpAAIAvhjIgsheIAqAAIAYA/IAag/IAqAAIgwBeIAyBjg");
	this.shape_1.setTransform(53.6,-2.1,1.176,1.176);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAbBhIAAhKQAAgrAFgXIg1CMIgoAAIAAjBIAjAAIAABJQAAAugFAVIA1iMIAoAAIAADBg");
	this.shape_2.setTransform(36.1,-2.1,1.176,1.176);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag+AjIAAhFQAAhCA+AAQA/AAAABCIAABFQAAAkgRAQQgQAOgeAAQg+AAAAhCgAgYgmIAABPQAAAeAYAAQAZAAAAgeIAAhOQAAgQgGgJQgHgIgMgBQgYABAAAgg");
	this.shape_3.setTransform(18.5,-2,1.176,1.176);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag6BhIAAjBIBDAAQAYAAAMAOQALANAAAUQAAAPgHAMQgHAOgMACQAdAKAAAkQAAAagLAPQgLAQgWAAgAgWBFIAXAAQAUABAAgfQAAgdgUAAIgXAAgAgWgRIAUAAQAWAAAAgaQAAgZgWAAIgUAAg");
	this.shape_4.setTransform(1.6,-2.1,1.176,1.176);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAoB0IAAgmIhPAAIAAAmIgkAAIAAhEIAMAAQAKgXAEgTQAEgXAAgmIAAg9IBtAAIAACkIAMAAIAABEgAgJgqQAAAfgEAVQgEASgJAUIA1AAIAAiGIgkAAg");
	this.shape_5.setTransform(-16.8,0.2,1.176,1.176);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAfBhIgJgyIgpAAIgLAyIgoAAIAxjBIAxAAIArDBgAgOASIAfAAIgPhZg");
	this.shape_6.setTransform(-42.7,-2.1,1.176,1.176);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAYBhIAAhaIgvAAIAABaIglAAIAAjBIAlAAIAABKIAvAAIAAhKIAlAAIAADBg");
	this.shape_7.setTransform(-60,-2.1,1.176,1.176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.1,-13.9,134.2,27.8);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPBhIAAgiIAfAAIAAAigAgJAvIgGg+IAAhRIAfAAIAABRIgEA+g");
	this.shape.setTransform(65.2,-2.1,1.176,1.176);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAcBhIgchIIgcBIIgpAAIAvhjIgsheIAqAAIAYA/IAag/IAqAAIgwBeIAyBjg");
	this.shape_1.setTransform(53.6,-2.1,1.176,1.176);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAbBhIAAhKQAAgrAFgXIg1CMIgoAAIAAjBIAjAAIAABJQAAAugFAVIA1iMIAoAAIAADBg");
	this.shape_2.setTransform(36.1,-2.1,1.176,1.176);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag+AjIAAhFQAAhCA+AAQA/AAAABCIAABFQAAAkgRAQQgQAOgeAAQg+AAAAhCgAgYgmIAABPQAAAeAYAAQAZAAAAgeIAAhOQAAgQgGgJQgHgIgMgBQgYABAAAgg");
	this.shape_3.setTransform(18.5,-2,1.176,1.176);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag6BhIAAjBIBDAAQAYAAAMAOQALANAAAUQAAAPgHAMQgHAOgMACQAdAKAAAkQAAAagLAPQgLAQgWAAgAgWBFIAXAAQAUABAAgfQAAgdgUAAIgXAAgAgWgRIAUAAQAWAAAAgaQAAgZgWAAIgUAAg");
	this.shape_4.setTransform(1.6,-2.1,1.176,1.176);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAoB0IAAgmIhPAAIAAAmIgkAAIAAhEIAMAAQAKgXAEgTQAEgXAAgmIAAg9IBtAAIAACkIAMAAIAABEgAgJgqQAAAfgEAVQgEASgJAUIA1AAIAAiGIgkAAg");
	this.shape_5.setTransform(-16.8,0.2,1.176,1.176);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAfBhIgJgyIgpAAIgLAyIgoAAIAxjBIAxAAIArDBgAgOASIAfAAIgPhZg");
	this.shape_6.setTransform(-42.7,-2.1,1.176,1.176);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAYBhIAAhaIgvAAIAABaIglAAIAAjBIAlAAIAABKIAvAAIAAhKIAlAAIAADBg");
	this.shape_7.setTransform(-60,-2.1,1.176,1.176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.1,-13.9,134.2,27.8);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPBhIAAgiIAfAAIAAAigAgJAvIgGg+IAAhRIAfAAIAABRIgEA+g");
	this.shape.setTransform(65.2,-2.1,1.176,1.176);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAcBhIgchIIgcBIIgpAAIAvhjIgsheIAqAAIAYA/IAag/IAqAAIgwBeIAyBjg");
	this.shape_1.setTransform(53.6,-2.1,1.176,1.176);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAbBhIAAhKQAAgrAFgXIg1CMIgoAAIAAjBIAjAAIAABJQAAAugFAVIA1iMIAoAAIAADBg");
	this.shape_2.setTransform(36.1,-2.1,1.176,1.176);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag+AjIAAhFQAAhCA+AAQA/AAAABCIAABFQAAAkgRAQQgQAOgeAAQg+AAAAhCgAgYgmIAABPQAAAeAYAAQAZAAAAgeIAAhOQAAgQgGgJQgHgIgMgBQgYABAAAgg");
	this.shape_3.setTransform(18.5,-2,1.176,1.176);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag6BhIAAjBIBDAAQAYAAAMAOQALANAAAUQAAAPgHAMQgHAOgMACQAdAKAAAkQAAAagLAPQgLAQgWAAgAgWBFIAXAAQAUABAAgfQAAgdgUAAIgXAAgAgWgRIAUAAQAWAAAAgaQAAgZgWAAIgUAAg");
	this.shape_4.setTransform(1.6,-2.1,1.176,1.176);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAoB0IAAgmIhPAAIAAAmIgkAAIAAhEIAMAAQAKgXAEgTQAEgXAAgmIAAg9IBtAAIAACkIAMAAIAABEgAgJgqQAAAfgEAVQgEASgJAUIA1AAIAAiGIgkAAg");
	this.shape_5.setTransform(-16.8,0.2,1.176,1.176);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAfBhIgJgyIgpAAIgLAyIgoAAIAxjBIAxAAIArDBgAgOASIAfAAIgPhZg");
	this.shape_6.setTransform(-42.7,-2.1,1.176,1.176);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAYBhIAAhaIgvAAIAABaIglAAIAAjBIAlAAIAABKIAvAAIAAhKIAlAAIAADBg");
	this.shape_7.setTransform(-60,-2.1,1.176,1.176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.1,-13.9,134.2,27.8);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg3.jpg
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(120,148.5,1,1,0,0,0,120,148.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60).to({_off:false},0).to({alpha:1},29).to({alpha:0},30).wait(1));

	// bg2.jpg
	this.instance_1 = new lib.Символ3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120,148.5,1,1,0,0,0,120,148.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},29).to({alpha:0},30).to({_off:true},1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,214);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3W3WMAutAAAMAAAAutMgutAAAg");
	this.shape.setTransform(150,125,1,0.833);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(252));

	// Слой 5
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(150,177,1,0.1,0,0,0,0,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(198).to({_off:false},0).to({regY:0,scaleY:1},6,cjs.Ease.get(1)).wait(41).to({regY:0.5,scaleY:0.1},6,cjs.Ease.get(1)).wait(1));

	// Символ 17
	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(160.5,46);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(179).to({_off:false},0).to({x:150.5,alpha:1},8,cjs.Ease.get(1)).wait(54).to({x:140.5,alpha:0},6,cjs.Ease.get(1)).wait(5));

	// Слой 9
	this.instance_2 = new lib.Символ8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(167.5,76.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(189).to({_off:false},0).to({x:157.5,alpha:1},8,cjs.Ease.get(1)).wait(45).to({x:147.5,alpha:0},6,cjs.Ease.get(1)).wait(4));

	// Символ 18
	this.instance_3 = new lib.Символ18();
	this.instance_3.parent = this;
	this.instance_3.setTransform(161.5,110.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(182).to({_off:false},0).to({x:151.5,alpha:1},8,cjs.Ease.get(1)).wait(53).to({x:141.5,alpha:0},6,cjs.Ease.get(1)).wait(3));

	// Символ 16
	this.instance_4 = new lib.Символ16();
	this.instance_4.parent = this;
	this.instance_4.setTransform(159.8,127.9);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(116).to({_off:false},0).to({x:149.8,alpha:1},8,cjs.Ease.get(1)).wait(45).to({x:139.8,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(76));

	// Символ 15
	this.instance_5 = new lib.Символ15();
	this.instance_5.parent = this;
	this.instance_5.setTransform(160,100.9);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(111).to({_off:false},0).to({x:150,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:140,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(77));

	// Символ 14
	this.instance_6 = new lib.Символ14();
	this.instance_6.parent = this;
	this.instance_6.setTransform(159.4,74.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(105).to({_off:false},0).to({x:149.4,alpha:1},8,cjs.Ease.get(1)).wait(54).to({x:139.4,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(78));

	// Символ 13
	this.instance_7 = new lib.Символ13();
	this.instance_7.parent = this;
	this.instance_7.setTransform(160,33.2);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(90).to({_off:false},0).to({x:150,alpha:1},9,cjs.Ease.get(1)).wait(67).to({x:140,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(79));

	// Слой 17
	this.instance_8 = new lib.Анимация3("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(160,134.7);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.instance_9 = new lib.Анимация4("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(150,134.7);

	this.instance_10 = new lib.Анимация1("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(150,134.7);
	this.instance_10._off = true;

	this.instance_11 = new lib.Анимация2("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(140,134.7);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},35).to({state:[{t:this.instance_9}]},9).to({state:[{t:this.instance_10}]},37).to({state:[{t:this.instance_11}]},6).to({state:[]},1).wait(164));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(35).to({_off:false},0).to({_off:true,x:150,alpha:1},9,cjs.Ease.get(1)).wait(208));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(81).to({_off:false},0).to({_off:true,x:140,alpha:0},6,cjs.Ease.get(1)).wait(165));

	// Символ 12
	this.instance_12 = new lib.Символ12();
	this.instance_12.parent = this;
	this.instance_12.setTransform(160,116);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(31).to({_off:false},0).to({x:150,alpha:1},9,cjs.Ease.get(1)).wait(40).to({x:140,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(165));

	// Символ 11
	this.instance_13 = new lib.Символ11();
	this.instance_13.parent = this;
	this.instance_13.setTransform(178.3,67.8);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(10).to({_off:false},0).to({x:150.3,alpha:1},8,cjs.Ease.get(1)).wait(61).to({x:138.3,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(166));

	// Символ 9
	this.instance_14 = new lib.Символ9();
	this.instance_14.parent = this;
	this.instance_14.setTransform(177.9,37.4);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(2).to({_off:false},0).to({x:149.9,alpha:1},8,cjs.Ease.get(1)).wait(67).to({x:150.9},0).to({x:137.9,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(168));

	// Слой 4
	this.instance_15 = new lib.Символ8();
	this.instance_15.parent = this;
	this.instance_15.setTransform(156.5,174.5,1,0.1,0,0,0,0,0.5);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(50).to({_off:false},0).to({regY:0,scaleY:1},6,cjs.Ease.get(1)).wait(110).to({regY:0.5,scaleY:0.1},6,cjs.Ease.get(1)).to({_off:true},1).wait(79));

	// Слой 2
	this.instance_16 = new lib.Символ1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(120,108.5,1,1,0,0,0,120,148.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(252));

	// Слой 1
	this.instance_17 = new lib.bg();
	this.instance_17.parent = this;
	this.instance_17.setTransform(0,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(252));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.5,85,301,300);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/300x250_atlas_P_.png?1504213651957", id:"300x250_atlas_P_"},
		{src:"images/300x250_atlas_NP_.jpg?1504213651957", id:"300x250_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;