(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"480x300_atlas_P_", frames: [[0,0,498,66],[0,126,262,45],[0,68,284,56]]}
];


// symbols:



(lib._110pngкопия = function() {
	this.spriteSheet = ss["480x300_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1028,500);


(lib.neupustipngкопия2 = function() {
	this.spriteSheet = ss["480x300_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.shanspngкопия = function() {
	this.spriteSheet = ss["480x300_atlas_P_"];
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


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-514,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-514,-250,1028,500), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.neupustipngкопия2();
	this.instance.parent = this;
	this.instance.setTransform(-66,-11,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-66,-11,131,22.5), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shanspngкопия();
	this.instance.parent = this;
	this.instance.setTransform(-71,-14,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-71,-14,142,28), null);


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


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiBFIAAiJIBEAAIAAAOIg0AAIAAAtIAxAAIAAANIgxAAIAAAzIA1AAIAAAOg");
	this.shape.setTransform(110.2,0,1.176,1.176);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAqBFIAAiJIAPAAIAACJgAg4BFIAAiJIAQAAIAAA7IASAAQArAAAAAnQAAAngpAAgAgoA3IARAAQAOAAAHgFQAHgGAAgOQAAgPgIgGQgHgFgSAAIgMAAg");
	this.shape_1.setTransform(96,0,1.176,1.176);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAaBFIAAhBIg0AAIAABBIgOAAIAAiJIAOAAIAAA7IA0AAIAAg7IAQAAIAACJg");
	this.shape_2.setTransform(81.1,0,1.176,1.176);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAnBVIAAggIhNAAIAAAgIgPAAIAAguIAJAAQAJgPADgWQADgQAAgjIAAgjIBIAAIAAB7IALAAIAAAugAgOgiQAAAugNAbIA3AAIAAhtIgqAAg");
	this.shape_3.setTransform(67.7,1.9,1.176,1.176);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglAyQgHgQAAgiQAAhHAsAAQAbAAALAYQAIARAAAeQAAAigIAQQgKAWgcAAQgaAAgLgWgAgdgCQAAAfAGANQAHAQAQAAQARAAAHgQQAFgNABgfQAAgagHgNQgGgQgRAAQgdAAAAA3g");
	this.shape_4.setTransform(54.3,0.1,1.176,1.176);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAdBFIgdg6IgdA6IgRAAIAmhGIglhDIARAAIAcA2IAdg2IARAAIglBDIAmBGg");
	this.shape_5.setTransform(41.9,0,1.176,1.176);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAqBFIAAiJIAPAAIAACJgAg4BFIAAiJIAPAAIAAA7IATAAQArAAAAAnQAAAngoAAgAgpA3IASAAQAPAAAGgFQAHgGAAgOQAAgPgIgGQgHgFgSAAIgNAAg");
	this.shape_6.setTransform(27.5,0,1.176,1.176);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgmBFIAAiJIAkAAQASAAAKAKQAJAJAAAQQAAAYgUAGIAAAAQAKABAHAIQAHAKAAAOQAAAngnAAgAgXA3IAXAAQAXAAAAgaQAAgZgYAAIgWAAgAgXgJIATAAQAXAAAAgXQAAgWgVAAIgVAAg");
	this.shape_7.setTransform(13.4,0,1.176,1.176);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AghBFIAAiJIBDAAIAAAOIg0AAIAAAtIAxAAIAAAMIgxAAIAAA0IA0AAIAAAOg");
	this.shape_8.setTransform(-5.5,0,1.176,1.176);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAqBFIAAiJIAPAAIAACJgAg4BFIAAiJIAPAAIAAA7IATAAQArAAAAAnQAAAngpAAgAgpA3IASAAQAOAAAHgFQAHgGAAgOQAAgQgIgGQgHgFgSAAIgNAAg");
	this.shape_9.setTransform(-19.7,0,1.176,1.176);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAbBFIAAhCIg0AAIAABCIgQAAIAAiJIAQAAIAAA7IA0AAIAAg7IAOAAIAACJg");
	this.shape_10.setTransform(-34.6,0,1.176,1.176);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAYBFIAAhDQgLABgOAAQgTAAgIgGQgKgJAAgTIAAglIAPAAIAAAjQAAAOAFAFQAFAFAOAAIAXgCIAAg5IAPAAIAACJg");
	this.shape_11.setTransform(-47.5,0,1.176,1.176);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AglAyQgHgQAAgiQAAhHAsAAQAtAAAABHQAAAigHAQQgLAWgbAAQgaAAgLgWgAgcgCQAAAgAFANQAGAPARAAQASAAAGgPQAGgNAAggQAAg3geAAQgcAAAAA3g");
	this.shape_12.setTransform(-60.2,0,1.176,1.176);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgfA7QgJgLgBgXIAPAAQABARAFAIQAHAIAOAAQAaAAAAgcQAAgLgHgHQgHgJgLAAIgMAAIAAgNIAKAAQAVAAAAgXQAAgYgVAAQgKAAgHAHQgGAHgBALIgQAAQADgSAKgKQALgLAQAAQAQAAALAKQAKAKAAAOQAAAZgVAIQAMADAHAHQAHALAAAPQAAAOgIALQgKAOgYAAQgUAAgLgMg");
	this.shape_13.setTransform(-72.9,0,1.176,1.176);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAgBFIgKgoIgrAAIgKAoIgRAAIAniJIAUAAIAmCJgAgSAPIAkAAIgShIIAAAAg");
	this.shape_14.setTransform(-85.1,0,1.176,1.176);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAZBFIgjhEIgRAUIAAAwIgPAAIAAiJIAPAAIAABGIAyhGIATAAIgrA6IAsBPg");
	this.shape_15.setTransform(-96.6,0,1.176,1.176);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgiAvQgGgQAAggQAAhGAqAAQATAAALANQAJAMAAATIgPAAQAAgegZAAQgQAAgGAVQgDAMAAAXQAAAbAEANQAGATAPAAQAOAAAFgLQAEgIACgUIAPAAQgBAagIAMQgJAPgVAAQgaAAgKgZg");
	this.shape_16.setTransform(-109.3,0,1.176,1.176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-114.2,-8.4,228.5,20.3), null);


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
	this.instance = new lib._110pngкопия();
	this.instance.parent = this;
	this.instance.setTransform(-132,-18,0.53,0.53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-132,-18,264.1,35), null);


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


(lib.fg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(-0.1,61.7,1.08,0.108,0,0,0,0.1,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(198).to({_off:false},0).to({regX:0,regY:0,scaleY:1.08,x:-0.2,y:61.6},6,cjs.Ease.get(1)).wait(41).to({regX:0.1,regY:1,scaleY:0.11,x:-0.1,y:61.7},6,cjs.Ease.get(1)).wait(1));

	// Символ 17
	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(11.2,-66,1.08,1.08,0,0,0,0.1,0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(179).to({_off:false},0).to({x:0.4,alpha:1},8,cjs.Ease.get(1)).wait(54).to({x:-10.4,alpha:0},6,cjs.Ease.get(1)).wait(5));

	// Слой 9
	this.instance_2 = new lib.Символ8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(9.7,-31.3,0.9,0.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(189).to({_off:false},0).to({regX:0.1,regY:0.1,x:-1.1,alpha:1},8,cjs.Ease.get(1)).wait(45).to({regX:0,regY:0},0).to({x:-11.9,alpha:0},6,cjs.Ease.get(1)).wait(4));

	// Символ 18
	this.instance_3 = new lib.Символ18();
	this.instance_3.parent = this;
	this.instance_3.setTransform(12.3,3.7,1.08,1.08,0,0,0,0.1,0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(182).to({_off:false},0).to({x:1.5,alpha:1},8,cjs.Ease.get(1)).wait(53).to({x:-9.3,alpha:0},6,cjs.Ease.get(1)).wait(3));

	// Символ 16
	this.instance_4 = new lib.Символ16();
	this.instance_4.parent = this;
	this.instance_4.setTransform(10.3,24.8,1.08,1.08);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(116).to({_off:false},0).to({x:-0.5,alpha:1},8,cjs.Ease.get(1)).wait(45).to({x:-11.3,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(76));

	// Символ 15
	this.instance_5 = new lib.Символ15();
	this.instance_5.parent = this;
	this.instance_5.setTransform(10.6,-4.4,1.08,1.08);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(111).to({_off:false},0).to({x:-0.2,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:-11,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(77));

	// Символ 14
	this.instance_6 = new lib.Символ14();
	this.instance_6.parent = this;
	this.instance_6.setTransform(9.9,-33.3,1.08,1.08);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(105).to({_off:false},0).to({x:-0.9,alpha:1},8,cjs.Ease.get(1)).wait(54).to({x:-11.7,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(78));

	// Символ 13
	this.instance_7 = new lib.Символ13();
	this.instance_7.parent = this;
	this.instance_7.setTransform(10.6,-77.5,1.08,1.08);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(90).to({_off:false},0).to({x:-0.2,alpha:1},9,cjs.Ease.get(1)).wait(67).to({x:-11,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(79));

	// Слой 17
	this.instance_8 = new lib.Анимация3("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(10.6,28.2,1.08,1.08);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.instance_9 = new lib.Анимация4("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-0.2,28.2,1.08,1.08);

	this.instance_10 = new lib.Анимация1("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-0.2,28.2,1.08,1.08);
	this.instance_10._off = true;

	this.instance_11 = new lib.Анимация2("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-11,28.2,1.08,1.08);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},35).to({state:[{t:this.instance_9}]},9).to({state:[{t:this.instance_10}]},37).to({state:[{t:this.instance_11}]},6).to({state:[]},1).wait(164));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(35).to({_off:false},0).to({_off:true,x:-0.2,alpha:1},9,cjs.Ease.get(1)).wait(208));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(81).to({_off:false},0).to({_off:true,x:-11,alpha:0},6,cjs.Ease.get(1)).wait(165));

	// Символ 12
	this.instance_12 = new lib.Символ12();
	this.instance_12.parent = this;
	this.instance_12.setTransform(10.6,7.9,1.08,1.08);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(31).to({_off:false},0).to({x:-0.2,alpha:1},9,cjs.Ease.get(1)).wait(40).to({x:-11,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(165));

	// Символ 10
	this.instance_13 = new lib.Символ10();
	this.instance_13.parent = this;
	this.instance_13.setTransform(10.7,-55.7,1.08,1.08,0,0,0,0.1,0.1);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(6).to({_off:false},0).to({x:-0.1,alpha:1},8,cjs.Ease.get(1)).wait(64).to({x:-10.9,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(167));

	// Символ 9
	this.instance_14 = new lib.Символ9();
	this.instance_14.parent = this;
	this.instance_14.setTransform(10.6,-86.8,1.08,1.08,0,0,0,0.1,0.1);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(2).to({_off:false},0).to({x:-0.2,alpha:1},8,cjs.Ease.get(1)).wait(67).to({x:-11,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(168));

	// Слой 4
	this.instance_15 = new lib.Символ8();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-2.1,76.1,0.9,0.1,0,0,0,0.1,0.5);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(50).to({_off:false},0).to({regY:0.1,scaleY:0.9,x:-2.2,y:76},6,cjs.Ease.get(1)).wait(110).to({regY:0.5,scaleY:0.1,x:-2.1,y:76.1},6,cjs.Ease.get(1)).to({_off:true},1).wait(79));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("A/KSrMAAAglVMA+VAAAMAAAAlVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(252));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-199.5,-119.5,600,360);


// stage content:
(lib._480x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
		 
		stage.addEventListener("resize", res);
		 
		 
		var fg = this.fg; 
		var bg = this.bg; 
		
		function res() {
			var wdt = stage.canvas.width;
			var hgt = stage.canvas.height;
			
			var sc1 = 1.55*wdt/1028;
		
			bg.scaleX = sc1;
			bg.scaleY = sc1;
			bg.x =  wdt/2;
			bg.y =  hgt/2;
			
			var sc2 = 0.8*hgt/240;
		
			fg.scaleX = sc2;
			fg.scaleY = sc2;
			fg.x =  wdt/2;
			fg.y =  hgt/2;
			
			
			
				 
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 7
	this.fg = new lib.fg();
	this.fg.parent = this;
	this.fg.setTransform(239.5,149.5);

	this.timeline.addTween(cjs.Tween.get(this.fg).wait(1));

	// Слой 2
	this.bg = new lib.Символ20();
	this.bg.parent = this;
	this.bg.setTransform(240,150);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34,50,1028,500);
// library properties:
lib.properties = {
	width: 480,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1504210381697", id:"bg"},
		{src:"images/480x300_atlas_P_.png?1504210381650", id:"480x300_atlas_P_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;