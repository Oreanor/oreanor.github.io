(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"320x300_atlas_P_", frames: [[0,68,284,56],[0,126,262,45],[0,0,498,66]]}
];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1028,500);


(lib.cvbcvgg = function() {
	this.spriteSheet = ss["320x300_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.cvcvb = function() {
	this.spriteSheet = ss["320x300_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.gfgfg = function() {
	this.spriteSheet = ss["320x300_atlas_P_"];
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


(lib.hhhddd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cvbcvgg();
	this.instance.parent = this;
	this.instance.setTransform(-71,-14,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hhhddd, new cjs.Rectangle(-71,-14,142,28), null);


(lib.hghdfd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-514,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hghdfd, new cjs.Rectangle(-514,-250,1028,500), null);


(lib.gggdfgdfg = function(mode,startPosition,loop) {
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

}).prototype = getMCSymbolPrototype(lib.gggdfgdfg, new cjs.Rectangle(-91.2,-32.6,182.5,27.4), null);


(lib.fghfgf = function(mode,startPosition,loop) {
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

}).prototype = getMCSymbolPrototype(lib.fghfgf, new cjs.Rectangle(-114.2,-8.4,228.5,20.3), null);


(lib.ffddgdfg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gfgfg();
	this.instance.parent = this;
	this.instance.setTransform(-132,-18,0.53,0.53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ffddgdfg, new cjs.Rectangle(-132,-18,264.1,35), null);


(lib.ffggg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAdAdIAAgjIgBgIQgBgDgCgBQgDgCgDAAQgGAAgEAEQgEAEAAAJIAAAgIgJAAIAAgkQAAgGgCgDQgDgEgFAAQgEAAgEACQgDADgBAEQgCAEAAAHIAAAdIgJAAIAAg4IAIAAIAAAIQACgEAFgDQAEgCAGAAQAGAAAFADQACACACAFQAHgKALAAQAIAAAFAFQAEAEAAAKIAAAmg");
	this.shape.setTransform(-105.4,-95.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSAWQgIgHAAgPQAAgPAJgIQAIgGAJAAQAMAAAHAIQAIAIAAANQAAAKgDAHQgEAGgGAEQgGADgIAAQgLAAgHgIgAgLgQQgFAGAAAKQAAALAFAGQAFAFAGAAQAHAAAFgFQAFgGAAgLQAAgKgFgGQgFgFgHAAQgGAAgFAFg");
	this.shape_1.setTransform(-113.1,-95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRAWQgHgHAAgPQAAgIADgHQADgHAGgEQAHgDAGAAQAJAAAGAFQAGAEACAJIgKACQgBgGgDgDQgEgDgFAAQgGAAgEAFQgFAGAAAKQAAALAEAGQAFAFAGAAQAGAAADgEQAEgDABgHIAKABQgCAJgGAHQgHAFgJAAQgLAAgHgIg");
	this.shape_2.setTransform(-118.7,-95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgEAFIAAgJIAKAAIAAAJg");
	this.shape_3.setTransform(-123.1,-92.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRAgQgIgKAAgWQAAgNADgJQADgIAGgFQAFgEAIAAQAGAAAFACQAFADADAFQADAEACAHQACAHAAALQAAAOgDAIQgDAJgGAEQgFAFgJAAQgKAAgHgIgAgKgaQgFAIAAASQAAATAFAHQAEAGAGAAQAHAAAEgGQAFgHAAgTQAAgTgFgGQgEgGgHAAQgGAAgEAFg");
	this.shape_4.setTransform(-127.8,-96);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAFAnIAAg8IgJAGIgKAGIAAgKQAIgEAGgFQAGgFADgGIAFAAIAABOg");
	this.shape_5.setTransform(-134.2,-96.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAFAnIAAg8IgJAGIgKAGIAAgKQAIgEAGgFQAFgFAEgGIAGAAIAABOg");
	this.shape_6.setTransform(-139.5,-96.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUAZQgFgEAAgIQAAgEACgDIAFgGIAHgCIAIgCIAQgDIAAgCQAAgGgCgCQgEgEgHAAQgGAAgDADQgEACgBAGIgKgBQACgHADgDQADgEAFgCQAGgCAGAAQAHAAAFACQAFABACADIADAHIAAAIIAAAMIABARIACAHIgKAAIgCgHQgFAFgFACQgEACgGAAQgJAAgFgFgAgBADIgJADIgEADIgBAEQAAAEADACQADADAGAAQAEAAAEgCQAFgDACgEQABgDAAgHIAAgDQgFACgJABg");
	this.shape_7.setTransform(-145.3,-95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgBAlQgCgCgCgDQgBgCAAgIIAAghIgHAAIAAgHIAHAAIAAgOIAJgGIAAAUIAJAAIAAAHIgJAAIAAAhIAAAFIACACIADABIAEAAIACAIIgIABQgFAAgCgCg");
	this.shape_8.setTransform(-149.7,-95.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AANAnIAAgkQAAgGgDgDQgCgEgHAAQgDAAgEADQgEACgBAEQgCACAAAHIAAAfIgJAAIAAhNIAJAAIAAAcQAHgIAJAAQAHAAAFACQAEADACAEQACAFAAAHIAAAkg");
	this.shape_9.setTransform(-154.4,-96.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgMAbQgFgCgCgDIgDgHIAAgJIAAgiIAJAAIAAAeIABALQABADADADQADACAEAAQAEAAADgCQAEgDACgEQABgDAAgIIAAgdIAKAAIAAA4IgJAAIAAgJQgGAKgLAAQgFAAgEgCg");
	this.shape_10.setTransform(-160.5,-94.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgEAnIAAhNIAJAAIAABNg");
	this.shape_11.setTransform(-164.8,-96.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_12.setTransform(-167.5,-92.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AALAcIgJghIgCgKIgLArIgKAAIgRg3IAKAAIAJAfIAEANIACgMIAKggIAIAAIAJAfIACAMIAEgMIAKgfIAJAAIgSA3g");
	this.shape_13.setTransform(-172.4,-95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AALAcIgJghIgCgKIgKArIgKAAIgSg3IAKAAIAJAfIADANIADgMIAKggIAIAAIAJAfIADAMIADgMIAJgfIAKAAIgSA3g");
	this.shape_14.setTransform(-180.4,-95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AALAcIgJghIgCgKIgLArIgKAAIgRg3IAKAAIAJAfIAEANIACgMIAJggIAJAAIAJAfIADAMIADgMIAJgfIAKAAIgSA3g");
	this.shape_15.setTransform(-188.3,-95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgEAcIAAgKIAKAAIAAAKgAgEgRIAAgKIAKAAIAAAKg");
	this.shape_16.setTransform(-196.8,-95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgSAWQgHgIAAgOQAAgNAHgIQAIgIAKAAQAMAAAHAIQAHAIAAANIAAACIgpAAQAAAKAFAFQAFAFAGAAQAFAAAEgDQAEgDACgGIAKABQgCAJgHAFQgGAFgKAAQgMAAgHgIgAgKgRQgEAFgBAHIAfAAQAAgHgDgEQgFgFgHAAQgGAAgFAEg");
	this.shape_17.setTransform(-201.5,-95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgYAoIAAhOIAJAAIAAAIQADgFAEgCQAEgCAEAAQAIAAAFAEQAGADADAHQADAHAAAIQAAAJgEAGQgDAHgGAEQgGAEgGAAQgEAAgEgDQgEgCgCgDIAAAcgAgKgaQgFAGAAALQAAAKAEAFQAFAGAGAAQAFAAAFgGQAFgFAAgLQAAgLgFgFQgEgGgGAAQgGAAgEAGg");
	this.shape_18.setTransform(-207.4,-94);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgSAWQgIgHAAgPQAAgPAJgIQAIgGAJAAQAMAAAHAIQAIAIAAANQAAAKgDAHQgEAGgGAEQgGADgIAAQgLAAgHgIgAgLgQQgFAGAAAKQAAALAFAGQAFAFAGAAQAHAAAFgFQAFgGAAgLQAAgKgFgGQgFgFgHAAQgGAAgFAFg");
	this.shape_19.setTransform(-213.7,-95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgEAcIAAgvIgSAAIAAgIIAtAAIAAAIIgSAAIAAAvg");
	this.shape_20.setTransform(-219.1,-95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgUAZQgFgEAAgIQAAgEACgDIAFgGIAHgCIAIgCIAQgDIAAgCQAAgGgCgCQgEgEgHAAQgGAAgDADQgEACgBAGIgKgBQACgHADgDQADgEAFgCQAGgCAGAAQAHAAAFACQAFABACADIADAHIAAAIIAAAMIABARIACAHIgKAAIgCgHQgFAFgFACQgEACgGAAQgJAAgFgFgAgBADIgJADIgEADIgBAEQAAAEADACQADADAGAAQAEAAAEgCQAFgDACgEQABgDAAgHIAAgDQgFACgJABg");
	this.shape_21.setTransform(-224.5,-95);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgVAMIAJgCQACAGADADQAEADAEAAQAFAAADgDQAEgDgBgEQAAgDgCgCQgCgDgCgBIgHgBIgDAAIAAgGIAIgBIAEgCQACgCAAgEQAAgDgCgCQgEgDgDAAQgIAAgDAKIgJgCQAEgQAQAAQAJAAAFAFQAFAFAAAHQAAAHgHAEQAEABADAEQACADAAAFQAAAIgFAFQgGAFgKAAQgTAAgDgSg");
	this.shape_22.setTransform(-230.1,-95);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAOAcIAAgqIgaAqIgKAAIAAg3IAJAAIAAAqIAagqIAKAAIAAA3g");
	this.shape_23.setTransform(-235.6,-95);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AANAcIAAgZIgaAAIAAAZIgJAAIAAg3IAJAAIAAAXIAaAAIAAgXIAKAAIAAA3g");
	this.shape_24.setTransform(-241.7,-95);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgUAZQgFgEAAgIQAAgEACgDIAFgGIAHgCIAIgCIAQgDIAAgCQAAgGgCgCQgEgEgHAAQgGAAgDADQgEACgBAGIgKgBQACgHADgDQADgEAFgCQAGgCAGAAQAHAAAFACQAFABACADIADAHIAAAIIAAAMIABARIACAHIgKAAIgCgHQgFAFgFACQgEACgGAAQgJAAgFgFgAgBADIgJADIgEADIgBAEQAAAEADACQADADAGAAQAEAAAEgCQAFgDACgEQABgDAAgHIAAgDQgFACgJABg");
	this.shape_25.setTransform(-247.8,-95);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgPAcIAAg3IAfAAIAAAIIgWAAIAAAvg");
	this.shape_26.setTransform(-252.2,-95);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgYAoIAAhOIAJAAIAAAIQADgFAEgCQAEgCAEAAQAIAAAFAEQAGADADAHQADAHAAAIQAAAJgEAGQgDAHgGAEQgGAEgGAAQgEAAgEgDQgEgCgCgDIAAAcgAgKgaQgFAGAAALQAAAKAEAFQAFAGAGAAQAFAAAFgGQAFgFAAgLQAAgLgFgFQgEgGgGAAQgGAAgEAGg");
	this.shape_27.setTransform(-257.5,-94);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgSAWQgIgHAAgPQAAgPAJgIQAIgGAJAAQAMAAAHAIQAIAIAAANQAAAKgDAHQgEAGgGAEQgGADgIAAQgLAAgHgIgAgLgQQgFAGAAAKQAAALAFAGQAFAFAGAAQAHAAAFgFQAFgGAAgLQAAgKgFgGQgFgFgHAAQgGAAgFAFg");
	this.shape_28.setTransform(-263.8,-95);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgSAgQgHgHAAgOQAAgOAHgIQAIgIAKAAQAMAAAHAIQAHAIAAANIAAADIgpAAQAAAJAFAFQAFAFAGAAQAFAAAEgDQAEgCACgHIAKACQgCAIgHAFQgGAFgKAAQgMAAgHgIgAgKgGQgEAEgBAHIAfAAQAAgGgDgEQgFgGgHAAQgGAAgFAFgAAFgcIAAgLIAKAAIAAALgAgOgcIAAgLIAKAAIAAALg");
	this.shape_29.setTransform(-55.1,-106.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgSAWQgHgHAAgOQAAgOAHgIQAIgIAKAAQAMAAAHAIQAHAHAAAOIAAADIgpAAQAAAJAFAFQAFAFAGAAQAFAAAEgDQAEgCACgHIAKACQgCAIgHAFQgGAFgKAAQgMAAgHgIgAgKgQQgEAEgBAHIAfAAQAAgHgDgDQgFgGgHAAQgGAAgFAFg");
	this.shape_30.setTransform(-61.2,-105.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAOAdIAAgrIgaArIgKAAIAAg5IAJAAIAAArIAagrIAKAAIAAA5g");
	this.shape_31.setTransform(-70.4,-105.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAOAdIAAgrIgaArIgKAAIAAg5IAJAAIAAArIAagrIAKAAIAAA5g");
	this.shape_32.setTransform(-79.6,-105.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAOAdIAAgrIgaArIgKAAIAAg5IAJAAIAAArIAagrIAKAAIAAA5g");
	this.shape_33.setTransform(-85.7,-105.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AASAlIAAgQIgrAAIAAg5IAJAAIAAAxIAaAAIAAgxIAKAAIAAAxIAGAAIAAAYg");
	this.shape_34.setTransform(-91.7,-104.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AALAdIgLgSQgCgFgDgCQgCgCgDAAIAAAbIgKAAIAAg5IAKAAIAAAZQAEAAACgCIAFgKIAEgJIAFgDIAHgBIACAAIAAAIIgDAAQgBAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgCACgCAFIgEAIIgFAEQAFABAHAKIAKASg");
	this.shape_35.setTransform(-97.1,-105.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgUAZQgFgEAAgIQAAgDACgEIAFgGIAHgCIAIgCIAQgCIAAgDQAAgGgCgCQgEgEgHAAQgGAAgDACQgEADgBAGIgKgCQACgFADgEQADgEAFgCQAGgCAGAAQAHAAAFACQAFABACADIADAHIAAAJIAAALIABARIACAIIgKAAIgCgIQgFAFgFACQgEACgGAAQgJAAgFgFgAgBADIgJACIgEAEIgBAEQAAAEADADQADACAGAAQAEAAAEgCQAFgDACgEQABgDAAgHIAAgDQgFACgJABg");
	this.shape_36.setTransform(-103,-105.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAQAdIAAgXIgGAAIgHABQgDACgEAHIgIANIgMAAIAKgQQAFgHAFgBQgIgBgEgEQgEgFAAgGQAAgHAFgFQAFgFAKAAIAZAAIAAA5gAgIgRQgDADAAADQAAAFAEADQAEACAIAAIALAAIAAgTIgOAAQgIAAgCADg");
	this.shape_37.setTransform(-112.3,-105.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAOAdIAAgrIgaArIgKAAIAAg5IAJAAIAAArIAagrIAKAAIAAA5g");
	this.shape_38.setTransform(-118.1,-105.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAOAdIAAgaIgaAAIAAAaIgKAAIAAg5IAKAAIAAAYIAaAAIAAgYIAJAAIAAA5g");
	this.shape_39.setTransform(-124.1,-105.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgSAWQgHgHAAgOQAAgOAHgIQAIgIAKAAQAMAAAHAIQAHAHAAAOIAAADIgpAAQAAAJAFAFQAFAFAGAAQAFAAAEgDQAEgCACgHIAKACQgCAIgHAFQgGAFgKAAQgMAAgHgIgAgKgQQgEAEgBAHIAfAAQAAgHgDgDQgFgGgHAAQgGAAgFAFg");
	this.shape_40.setTransform(-130.3,-105.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAWAlIAAgQIgsAAIAAAQIgIAAIAAgYIAGAAQAKgNgBgkIAnAAIAAAxIAGAAIAAAYgAgPANIAdAAIAAgpIgUAAQgBAcgIANg");
	this.shape_41.setTransform(-136.6,-104.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgSAWQgHgHAAgOQAAgOAHgIQAIgIAKAAQAMAAAHAIQAHAHAAAOIAAADIgpAAQAAAJAFAFQAFAFAGAAQAFAAAEgDQAEgCACgHIAKACQgCAIgHAFQgGAFgKAAQgMAAgHgIgAgKgQQgEAEgBAHIAfAAQAAgHgDgDQgFgGgHAAQgGAAgFAFg");
	this.shape_42.setTransform(-142.5,-105.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgWAdIAAg5IAWAAQAHAAAEACQAEABADAEQADAEAAAEQAAAEgCAEQgCADgDACQAEAAADAEQACAEAAAEQAAAJgFADQgGAFgKAAgAgNAVIANAAQAHAAADgCQADgCAAgFIgBgFQgCgCgDgBIgIgBIgMAAgAgNgEIALAAIAHAAIAEgDQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAgBQAAgEgDgCQgDgCgHAAIgLAAg");
	this.shape_43.setTransform(-148.1,-105.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgSAWQgIgIAAgOQAAgPAJgIQAIgGAJAAQAMAAAHAIQAIAHAAAOQAAAKgDAGQgEAHgGAEQgGADgIAAQgLAAgHgIgAgLgPQgFAFAAAKQAAALAFAFQAFAGAGAAQAHAAAFgGQAFgFAAgLQAAgKgFgFQgFgGgHAAQgGAAgFAGg");
	this.shape_44.setTransform(-154.3,-105.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgYAoIAAhOIAJAAIAAAIQADgFAEgCQAEgCAEAAQAIAAAFAEQAGADADAHQADAHAAAIQAAAJgEAGQgDAHgGAEQgGAEgGAAQgEAAgEgDQgEgCgCgDIAAAcgAgKgaQgFAGAAALQAAAKAEAFQAFAGAGAAQAFAAAFgGQAFgFAAgLQAAgLgFgFQgEgGgGAAQgGAAgEAGg");
	this.shape_45.setTransform(-160.2,-104.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AANAdIAAgxIgZAAIAAAxIgJAAIAAg5IAsAAIAAA5g");
	this.shape_46.setTransform(-166.3,-105.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgSAWQgHgHAAgOQAAgOAHgIQAIgIAKAAQAMAAAHAIQAHAHAAAOIAAADIgpAAQAAAJAFAFQAFAFAGAAQAFAAAEgDQAEgCACgHIAKACQgCAIgHAFQgGAFgKAAQgMAAgHgIgAgKgQQgEAEgBAHIAfAAQAAgHgDgDQgFgGgHAAQgGAAgFAFg");
	this.shape_47.setTransform(-175.5,-105.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAKAdIgKgSQgCgFgDgCQgCgCgDAAIAAAbIgKAAIAAg5IAKAAIAAAZQAEAAACgCIAFgKIAEgJIAFgDIAHgBIACAAIAAAIIgDAAQgBAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBACgCAFIgEAIIgFAEQAGABAFAKIALASg");
	this.shape_48.setTransform(-180.6,-105.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAXAlIAAgQIgsAAIAAAQIgIAAIAAgYIAEAAQALgNgBgkIAnAAIAAAxIAGAAIAAAYgAgPANIAeAAIAAgpIgWAAQgBAcgHANg");
	this.shape_49.setTransform(-186.7,-104.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAQAdIAAgXIgGAAIgHABQgDACgEAHIgIANIgMAAIAKgQQAFgHAFgBQgIgBgEgEQgEgFAAgGQAAgHAFgFQAFgFAKAAIAZAAIAAA5gAgIgRQgDADAAADQAAAFAEADQAEACAIAAIALAAIAAgTIgOAAQgIAAgCADg");
	this.shape_50.setTransform(-193,-105.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgYAoIAAhOIAJAAIAAAIQADgFAEgCQAEgCAEAAQAIAAAFAEQAGADADAHQADAHAAAIQAAAJgEAGQgDAHgGAEQgGAEgGAAQgEAAgEgDQgEgCgCgDIAAAcgAgKgaQgFAGAAALQAAAKAEAFQAFAGAGAAQAFAAAFgGQAFgFAAgLQAAgLgFgFQgEgGgGAAQgGAAgEAGg");
	this.shape_51.setTransform(-198.5,-104.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgSAWQgIgIAAgOQAAgPAJgIQAIgGAJAAQAMAAAHAIQAIAHAAAOQAAAKgDAGQgEAHgGAEQgGADgIAAQgLAAgHgIgAgLgPQgFAFAAAKQAAALAFAFQAFAGAGAAQAHAAAFgGQAFgFAAgLQAAgKgFgFQgFgGgHAAQgGAAgFAGg");
	this.shape_52.setTransform(-204.8,-105.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAMAdIAAgxIgYAAIAAAxIgKAAIAAg5IAsAAIAAA5g");
	this.shape_53.setTransform(-210.7,-105.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgFAJQADgBABgDQABgCAAgEIgEAAIAAgLIAKAAIAAALQAAAFgCAEQgCADgEACg");
	this.shape_54.setTransform(-218.3,-102.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAPAdIgMgSIgDgFIgOAXIgMAAIAVgdIgTgcIAMAAIAJAOIADAGIAEgGIAKgOIALAAIgTAbIAUAeg");
	this.shape_55.setTransform(-222.6,-105.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAQAdIAAgXIgGAAIgHABQgDACgEAHIgIANIgMAAIAKgQQAFgHAFgBQgIgBgEgEQgEgFAAgGQAAgHAFgFQAFgFAKAAIAZAAIAAA5gAgIgRQgDADAAADQAAAFAEADQAEACAIAAIALAAIAAgTIgOAAQgIAAgCADg");
	this.shape_56.setTransform(-228.6,-105.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAOAdIAAgrIgaArIgKAAIAAg5IAJAAIAAArIAagrIAKAAIAAA5g");
	this.shape_57.setTransform(-234.4,-105.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgWAdIAAg5IAWAAQAHAAAEACQAEABADAEQADAEAAAEQAAAEgCAEQgCADgDACQAEAAADAEQACAEAAAEQAAAJgFADQgGAFgKAAgAgNAVIANAAQAHAAADgCQADgCAAgFIgBgFQgCgCgDgBIgIgBIgMAAgAgNgEIALAAIAHAAIAEgDQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAgBQAAgEgDgCQgDgCgHAAIgLAAg");
	this.shape_58.setTransform(-240.2,-105.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgSAWQgIgIAAgOQAAgPAJgIQAIgGAJAAQAMAAAHAIQAIAHAAAOQAAAKgDAGQgEAHgGAEQgGADgIAAQgLAAgHgIgAgLgPQgFAFAAAKQAAALAFAFQAFAGAGAAQAHAAAFgGQAFgFAAgLQAAgKgFgFQgFgGgHAAQgGAAgFAGg");
	this.shape_59.setTransform(-246.4,-105.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgbAcIAAgIIAEAAIAFAAIABgCIABgJIAAglIAsAAIAAA4IgKAAIAAgwIgZAAIAAAcIAAANQgBADgDACQgDADgFAAIgIgBg");
	this.shape_60.setTransform(-253,-105.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgRAWQgHgIAAgOQAAgIADgHQADgHAGgDQAHgEAGAAQAJAAAGAFQAGAFACAIIgKABQgBgFgDgDQgEgDgFAAQgGAAgEAGQgFAEAAALQAAAMAEAEQAFAGAGAAQAGAAADgDQAEgEABgIIAKACQgCAKgGAFQgHAGgJAAQgLAAgHgIg");
	this.shape_61.setTransform(-258.5,-105.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgUAnIgBgJIAFABQAEAAACgBIACgEIAEgGIABgDIgWg4IAKAAIAMAhIADAMIAEgMIAMghIAKAAIgVA5IgFANQgDAFgDACQgEACgEAAIgGgBg");
	this.shape_62.setTransform(-264,-104);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgOAkQgGgFgDgHQgDgHAAgRQAAgWAIgIQAHgIAPAAIAMAAIABgCIAJAAQgBAFgCADIgFADIgMABQgLgBgEADQgFACgBAGQgCAFgBAHQAEgFAFgDQAFgCAFgBQALABAIAHQAHAIAAAMQAAAKgEAGQgEAHgFADQgFAEgIAAQgKAAgFgFgAgLgCQgEAFAAAJQAAALAFAEQAFAGAGAAQAHAAAEgGQAFgGAAgKQAAgJgEgFQgFgFgHgBQgHAAgFAHg");
	this.shape_63.setTransform(-30.3,-116.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgSAWQgIgHAAgPQAAgPAJgHQAIgHAJAAQAMAAAHAIQAIAIAAANQAAAKgDAGQgEAHgGADQgGAEgIAAQgLAAgHgIgAgLgQQgFAGAAAKQAAALAFAFQAFAGAGAAQAHAAAFgGQAFgFAAgLQAAgKgFgGQgFgFgHAAQgGAAgFAFg");
	this.shape_64.setTransform(-36.6,-115.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAQAcIAAgWIgGAAIgHABQgDACgEAHIgIAMIgMAAIAKgPQAFgHAFgBQgIgBgEgEQgEgFAAgGQAAgIAFgEQAFgEAKgBIAZAAIAAA4gAgIgRQgDADAAADQAAAFAEADQAEADAIgBIALAAIAAgTIgOAAQgIABgCACg");
	this.shape_65.setTransform(-45.9,-115.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AAOAcIAAgpIgaApIgKAAIAAg4IAJAAIAAArIAagrIAKAAIAAA4g");
	this.shape_66.setTransform(-51.7,-115.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AASAkIAAgQIgrAAIAAg4IAKAAIAAAxIAaAAIAAgxIAJAAIAAAxIAGAAIAAAXg");
	this.shape_67.setTransform(-57.7,-114.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgUAZQgFgFAAgGQAAgFACgDIAFgGIAHgCIAIgBIAQgEIAAgCQAAgGgCgDQgEgDgHAAQgGAAgDACQgEADgBAGIgKgBQACgGADgEQADgEAFgCQAGgCAGAAQAHAAAFACQAFACACACIADAHIAAAIIAAANIABARIACAGIgKAAIgCgGQgFAEgFACQgEACgGAAQgJAAgFgFgAgBAEIgJACIgEACIgBAFQAAAEADACQADADAGAAQAEAAAEgCQAFgCACgFQABgDAAgGIAAgEQgFACgJACg");
	this.shape_68.setTransform(-64.1,-115.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AAVAcIAAgtIgRAtIgIAAIgQgvIAAAvIgJAAIAAg4IAPAAIAOAtIAQgtIAOAAIAAA4g");
	this.shape_69.setTransform(-70.9,-115.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgYAoIAAhOIAJAAIAAAIQADgFAEgCQAEgCAEAAQAIAAAFAEQAGADADAHQADAHAAAIQAAAJgEAGQgDAHgGAEQgGAEgGAAQgEAAgEgDQgEgCgCgDIAAAcgAgKgaQgFAGAAALQAAAKAEAFQAFAGAGAAQAFAAAFgGQAFgFAAgLQAAgLgFgFQgEgGgGAAQgGAAgEAGg");
	this.shape_70.setTransform(-77.6,-114.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgSAWQgIgHAAgPQAAgPAJgHQAIgHAJAAQAMAAAHAIQAIAIAAANQAAAKgDAGQgEAHgGADQgGAEgIAAQgLAAgHgIgAgLgQQgFAGAAAKQAAALAFAFQAFAGAGAAQAHAAAFgGQAFgFAAgLQAAgKgFgGQgFgFgHAAQgGAAgFAFg");
	this.shape_71.setTransform(-83.9,-115.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgEAyIAAgbQgDADgDACQgEACgEAAQgJAAgHgIQgGgIAAgOQAAgMAGgJQAGgIAKAAQAEAAAEACQADABADAEIAAgbIAJAAIAAAbQADgEADgBQAEgCAEAAQAKAAAGAIQAGAJAAAMQAAANgGAIQgHAJgJAAIgGgBQgEgBgEgFIAAAbgAAIgQQgDAGAAAKQAAANADAEQAEAFAFAAQAGAAAEgGQAEgFAAgLQAAgLgDgFQgEgFgGAAQgHAAgDAFgAgbgQQgDAGAAAKQAAALAEAFQAEAGAGAAQAGAAADgGQADgFAAgLQAAgKgDgFQgDgGgHAAQgGAAgEAFg");
	this.shape_72.setTransform(-91.4,-115.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AAOAcIAAgZIgaAAIAAAZIgKAAIAAg4IAKAAIAAAYIAaAAIAAgYIAJAAIAAA4g");
	this.shape_73.setTransform(-98.9,-115.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AAOAcIAAgpIgaApIgKAAIAAg4IAJAAIAAArIAagrIAKAAIAAA4g");
	this.shape_74.setTransform(-105.1,-115.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AAQAcIAAgWIgGAAIgHABQgDACgEAHIgIAMIgMAAIAKgPQAFgHAFgBQgIgBgEgEQgEgFAAgGQAAgIAFgEQAFgEAKgBIAZAAIAAA4gAgIgRQgDADAAADQAAAFAEADQAEADAIgBIALAAIAAgTIgOAAQgIABgCACg");
	this.shape_75.setTransform(-114.5,-115.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgUAZQgFgFAAgGQAAgFACgDIAFgGIAHgCIAIgBIAQgEIAAgCQAAgGgCgDQgEgDgHAAQgGAAgDACQgEADgBAGIgKgBQACgGADgEQADgEAFgCQAGgCAGAAQAHAAAFACQAFACACACIADAHIAAAIIAAANIABARIACAGIgKAAIgCgGQgFAEgFACQgEACgGAAQgJAAgFgFgAgBAEIgJACIgEACIgBAFQAAAEADACQADADAGAAQAEAAAEgCQAFgCACgFQABgDAAgGIAAgEQgFACgJACg");
	this.shape_76.setTransform(-120.2,-115.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AANAcIAAgZIgaAAIAAAZIgJAAIAAg4IAJAAIAAAYIAaAAIAAgYIAKAAIAAA4g");
	this.shape_77.setTransform(-126.2,-115.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgOAkQgGgFgDgHQgDgHAAgRQAAgWAIgIQAHgIAPAAIAMAAIABgCIAJAAQgBAFgCADIgFADIgMABQgLgBgEADQgFACgBAGQgCAFgBAHQAEgFAFgDQAFgCAFgBQALABAIAHQAHAIAAAMQAAAKgEAGQgEAHgFADQgFAEgIAAQgKAAgFgFgAgLgCQgEAFAAAJQAAALAFAEQAFAGAGAAQAHAAAEgGQAFgGAAgKQAAgJgEgFQgFgFgHgBQgHAAgFAHg");
	this.shape_78.setTransform(-132.4,-116.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgSAWQgIgHAAgPQAAgPAJgHQAIgHAJAAQAMAAAHAIQAIAIAAANQAAAKgDAGQgEAHgGADQgGAEgIAAQgLAAgHgIgAgLgQQgFAGAAAKQAAALAFAFQAFAGAGAAQAHAAAFgGQAFgFAAgLQAAgKgFgGQgFgFgHAAQgGAAgFAFg");
	this.shape_79.setTransform(-138.7,-115.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgYAoIAAhOIAJAAIAAAIQADgFAEgCQAEgCAEAAQAIAAAFAEQAGADADAHQADAHAAAIQAAAJgEAGQgDAHgGAEQgGAEgGAAQgEAAgEgDQgEgCgCgDIAAAcgAgKgaQgFAGAAALQAAAKAEAFQAFAGAGAAQAFAAAFgGQAFgFAAgLQAAgLgFgFQgEgGgGAAQgGAAgEAGg");
	this.shape_80.setTransform(-144.6,-114.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AAWAkIAAgQIgsAAIAAAQIgIAAIAAgXIAGAAQAKgNAAgkIAmAAIAAAxIAGAAIAAAXgAgPANIAdAAIAAgpIgUAAQgBAcgIANg");
	this.shape_81.setTransform(-151.1,-114.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgSAWQgIgHAAgPQAAgPAJgHQAIgHAJAAQAMAAAHAIQAIAIAAANQAAAKgDAGQgEAHgGADQgGAEgIAAQgLAAgHgIgAgLgQQgFAGAAAKQAAALAFAFQAFAGAGAAQAHAAAFgGQAFgFAAgLQAAgKgFgGQgFgFgHAAQgGAAgFAFg");
	this.shape_82.setTransform(-157,-115.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AAUAnIAAhEIgnAAIAABEIgLAAIAAhNIA9AAIAABNg");
	this.shape_83.setTransform(-163.9,-116.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgEAFIAAgKIAJAAIAAAKg");
	this.shape_84.setTransform(-172.4,-113.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgUAZQgFgFAAgGQAAgFACgDIAFgGIAHgCIAIgBIAQgEIAAgCQAAgGgCgDQgEgDgHAAQgGAAgDACQgEADgBAGIgKgBQACgGADgEQADgEAFgCQAGgCAGAAQAHAAAFACQAFACACACIADAHIAAAIIAAANIABARIACAGIgKAAIgCgGQgFAEgFACQgEACgGAAQgJAAgFgFgAgBAEIgJACIgEACIgBAFQAAAEADACQADADAGAAQAEAAAEgCQAFgCACgFQABgDAAgGIAAgEQgFACgJACg");
	this.shape_85.setTransform(-177.1,-115.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AAWAkIAAgQIgsAAIAAAQIgIAAIAAgXIAGAAQAKgNgBgkIAnAAIAAAxIAGAAIAAAXgAgPANIAdAAIAAgpIgUAAQgBAcgIANg");
	this.shape_86.setTransform(-183.4,-114.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgSAWQgIgHAAgPQAAgPAJgHQAIgHAJAAQAMAAAHAIQAIAIAAANQAAAKgDAGQgEAHgGADQgGAEgIAAQgLAAgHgIgAgLgQQgFAGAAAKQAAALAFAFQAFAGAGAAQAHAAAFgGQAFgFAAgLQAAgKgFgGQgFgFgHAAQgGAAgFAFg");
	this.shape_87.setTransform(-189.3,-115.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgPAcIAAg4IAfAAIAAAIIgWAAIAAAwg");
	this.shape_88.setTransform(-193.7,-115.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgNAnQAAgKADgNQAEgNAGgLQAGgMAIgJIgmAAIAAgJIAxAAIAAAIQgHAIgHANQgHAMgEAOQgDAKAAAMg");
	this.shape_89.setTransform(-202.1,-116.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AAFAnIAAg8IgIAGIgKAGIAAgKQAIgDAFgGQAGgFACgFIAHAAIAABNg");
	this.shape_90.setTransform(-208.6,-116.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgRAgQgIgKAAgWQAAgNADgJQADgIAGgFQAFgEAIAAQAGAAAFACQAFADADAFQADAEACAHQACAHAAALQAAAOgDAIQgDAJgGAEQgFAFgJAAQgKAAgHgIgAgKgaQgFAIAAASQAAATAFAHQAEAGAGAAQAHAAAEgGQAFgHAAgTQAAgTgFgGQgEgGgHAAQgGAAgEAFg");
	this.shape_91.setTransform(-214.4,-116.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgZAnQAAgDABgDQACgFAFgFQAEgGAIgHQAMgKAFgGQAEgFAAgGQAAgGgEgEQgEgDgHAAQgGAAgEADQgEAFAAAHIgKgBQABgLAHgGQAGgFAKAAQAMAAAGAFQAHAHAAAJQAAAFgCAEQgCAFgEAEQgFAGgKAIIgKAKIgEAFIAlAAIAAAJg");
	this.shape_92.setTransform(-220.6,-116.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AAQAcIAAgWIgGAAIgHABQgDACgEAHIgIAMIgMAAIAKgPQAFgHAFgBQgIgBgEgEQgEgFAAgGQAAgIAFgEQAFgEAKgBIAZAAIAAA4gAgIgRQgDADAAADQAAAFAEADQAEADAIgBIALAAIAAgTIgOAAQgIABgCACg");
	this.shape_93.setTransform(-229.8,-115.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgYAoIAAhOIAJAAIAAAIQADgFAEgCQAEgCAEAAQAIAAAFAEQAGADADAHQADAHAAAIQAAAJgEAGQgDAHgGAEQgGAEgGAAQgEAAgEgDQgEgCgCgDIAAAcgAgKgaQgFAGAAALQAAAKAEAFQAFAGAGAAQAFAAAFgGQAFgFAAgLQAAgLgFgFQgEgGgGAAQgGAAgEAGg");
	this.shape_94.setTransform(-235.3,-114.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgOAkQgGgFgDgHQgDgHAAgRQAAgWAIgIQAHgIAPAAIAMAAIABgCIAJAAQgBAFgCADIgFADIgMABQgLgBgEADQgFACgBAGQgCAFgBAHQAEgFAFgDQAFgCAFgBQALABAIAHQAHAIAAAMQAAAKgEAGQgEAHgFADQgFAEgIAAQgKAAgFgFgAgLgCQgEAFAAAJQAAALAFAEQAFAGAGAAQAHAAAEgGQAFgGAAgKQAAgJgEgFQgFgFgHgBQgHAAgFAHg");
	this.shape_95.setTransform(-241.6,-116.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AAQAcIAAgWIgGAAIgHABQgDACgEAHIgIAMIgMAAIAKgPQAFgHAFgBQgIgBgEgEQgEgFAAgGQAAgIAFgEQAFgEAKgBIAZAAIAAA4gAgIgRQgDADAAADQAAAFAEADQAEADAIgBIALAAIAAgTIgOAAQgIABgCACg");
	this.shape_96.setTransform(-248.1,-115.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgEAcIAAgwIgSAAIAAgIIAtAAIAAAIIgSAAIAAAwg");
	this.shape_97.setTransform(-253.3,-115.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AAKAcIgKgRQgCgFgDgCQgCgCgDAAIAAAaIgKAAIAAg4IAKAAIAAAZQAFAAABgBIAFgLIAFgJIADgDIAIgBIACAAIAAAIIgDAAQgBAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBABgCAHIgEAIIgFADQAGABAFAKIALARg");
	this.shape_98.setTransform(-257.9,-115.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgSAWQgIgHAAgPQAAgPAJgHQAIgHAJAAQAMAAAHAIQAIAIAAANQAAAKgDAGQgEAHgGADQgGAEgIAAQgLAAgHgIgAgLgQQgFAGAAAKQAAALAFAFQAFAGAGAAQAHAAAFgGQAFgFAAgLQAAgKgFgGQgFgFgHAAQgGAAgFAFg");
	this.shape_99.setTransform(-263.8,-115.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgRAgQgIgKAAgWQAAgNADgJQADgIAGgFQAFgEAIAAQAGAAAFACQAFADADAFQADAEACAHQACAHAAALQAAAOgDAIQgDAJgGAEQgFAFgJAAQgKAAgHgIgAgKgaQgFAIAAASQAAATAFAHQAEAGAGAAQAHAAAEgGQAFgHAAgTQAAgTgFgGQgEgGgHAAQgGAAgEAFg");
	this.shape_100.setTransform(-0.9,-126.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgRAiQgHgGgBgKIAKgBQACAIAEAEQAEADAFAAQAGAAAFgFQAFgEAAgHQAAgHgFgEQgEgFgHAAIgGABIACgHIABAAQAFAAAFgDQAFgDAAgHQAAgFgDgEQgEgDgFAAQgFAAgEADQgEAEgBAHIgKgCQACgKAGgFQAHgFAJAAQAFAAAGACQAFADADAFQADAFAAAFQAAAFgDAEQgCAFgGACQAHACAEAEQAEAFAAAHQAAALgIAHQgHAHgLAAQgKAAgHgGg");
	this.shape_101.setTransform(-7,-126.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgSAWQgIgHAAgPQAAgPAJgIQAIgGAJAAQAMAAAHAIQAIAIAAANQAAAKgDAHQgEAGgGAEQgGADgIAAQgLAAgHgIgAgLgQQgFAGAAAKQAAALAFAGQAFAFAGAAQAHAAAFgFQAFgGAAgLQAAgKgFgGQgFgFgHAAQgGAAgFAFg");
	this.shape_102.setTransform(-16.1,-125.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AAMAcIAAgvIgYAAIAAAvIgKAAIAAg3IAsAAIAAA3g");
	this.shape_103.setTransform(-22.1,-125.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AAQAcIAAgVIgGAAIgHABQgDABgEAHIgIAMIgMAAIAKgPQAFgHAFgBQgIgBgEgEQgEgEAAgHQAAgHAFgFQAFgFAKABIAZAAIAAA3gAgIgRQgDADAAAEQAAAFAEACQAEACAIABIALAAIAAgTIgOAAQgIAAgCACg");
	this.shape_104.setTransform(-31.4,-125.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgYAoIAAhOIAJAAIAAAIQADgFAEgCQAEgCAEAAQAIAAAFAEQAGADADAHQADAHAAAIQAAAJgEAGQgDAHgGAEQgGAEgGAAQgEAAgEgDQgEgCgCgDIAAAcgAgKgaQgFAGAAALQAAAKAEAFQAFAGAGAAQAFAAAFgGQAFgFAAgLQAAgLgFgFQgEgGgGAAQgGAAgEAGg");
	this.shape_105.setTransform(-36.9,-124.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgOAkQgGgFgDgHQgDgHAAgRQAAgXAIgIQAHgHAPgBIAMAAIABgBIAJAAQgBAFgCADIgFADIgMAAQgLAAgEADQgFACgBAGQgCAEgBAIQAEgFAFgDQAFgDAFABQALAAAIAHQAHAIAAAMQAAAKgEAHQgEAGgFAEQgFADgIAAQgKAAgFgFgAgLgDQgEAFAAAKQAAAKAFAGQAFAFAGAAQAHAAAEgGQAFgGAAgKQAAgJgEgFQgFgGgHABQgHAAgFAFg");
	this.shape_106.setTransform(-43.2,-126.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AAQAcIAAgVIgGAAIgHABQgDABgEAHIgIAMIgMAAIAKgPQAFgHAFgBQgIgBgEgEQgEgEAAgHQAAgHAFgFQAFgFAKABIAZAAIAAA3gAgIgRQgDADAAAEQAAAFAEACQAEACAIABIALAAIAAgTIgOAAQgIAAgCACg");
	this.shape_107.setTransform(-49.7,-125.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgEAcIAAgvIgSAAIAAgIIAtAAIAAAIIgSAAIAAAvg");
	this.shape_108.setTransform(-54.9,-125.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AAOAcIAAgZIgaAAIAAAZIgKAAIAAg3IAKAAIAAAXIAaAAIAAgXIAJAAIAAA3g");
	this.shape_109.setTransform(-60.4,-125.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgSAWQgHgIAAgOQAAgNAHgIQAIgIAKAAQAMAAAHAIQAHAIAAANIAAACIgpAAQAAAKAFAFQAFAFAGAAQAFAAAEgDQAEgDACgGIAKABQgCAJgHAFQgGAFgKAAQgMAAgHgIgAgKgRQgEAFgBAHIAfAAQAAgHgDgEQgFgFgHAAQgGAAgFAEg");
	this.shape_110.setTransform(-66.5,-125.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgRAWQgHgHAAgPQAAgIADgHQADgHAGgEQAHgDAGAAQAJAAAGAFQAGAEACAJIgKACQgBgGgDgDQgEgDgFAAQgGAAgEAFQgFAGAAAKQAAALAEAGQAFAFAGAAQAGAAADgEQAEgDABgHIAKABQgCAJgGAHQgHAFgJAAQgLAAgHgIg");
	this.shape_111.setTransform(-72.1,-125.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AAHAnIAAgTIghAAIAAgIIAjgyIAHAAIAAAyIALAAIAAAIIgLAAIAAATgAgRAMIAYAAIAAgjg");
	this.shape_112.setTransform(-81.3,-126.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgRAWQgHgHAAgPQAAgIADgHQADgHAGgEQAHgDAGAAQAJAAAGAFQAGAEACAJIgKACQgBgGgDgDQgEgDgFAAQgGAAgEAFQgFAGAAAKQAAALAEAGQAFAFAGAAQAGAAADgEQAEgDABgHIAKABQgCAJgGAHQgHAFgJAAQgLAAgHgIg");
	this.shape_113.setTransform(-89.8,-125.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AAOAcIAAgqIgaAqIgKAAIAAg3IAJAAIAAAqIAagqIAKAAIAAA3g");
	this.shape_114.setTransform(-98.9,-125.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AAOAcIAAgqIgaAqIgKAAIAAg3IAJAAIAAAqIAagqIAKAAIAAA3g");
	this.shape_115.setTransform(-105,-125.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AATAlIAAgRIgsAAIAAg3IAKAAIAAAvIAaAAIAAgvIAJAAIAAAvIAGAAIAAAZg");
	this.shape_116.setTransform(-111,-124.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AAKAcIgKgRQgCgGgCgBQgDgCgDAAIAAAaIgKAAIAAg3IAKAAIAAAYQAFAAACgCIAEgKIAFgJIADgDIAIAAIACAAIAAAIIgDAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABQgBAAgCAHIgEAHIgFAEQAGABAFAKIALARg");
	this.shape_117.setTransform(-116.4,-125.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgUAZQgFgEAAgIQAAgEACgDIAFgGIAHgCIAIgCIAQgDIAAgCQAAgGgCgCQgEgEgHAAQgGAAgDADQgEACgBAGIgKgBQACgHADgDQADgEAFgCQAGgCAGAAQAHAAAFACQAFABACADIADAHIAAAIIAAAMIABARIACAHIgKAAIgCgHQgFAFgFACQgEACgGAAQgJAAgFgFgAgBADIgJADIgEADIgBAEQAAAEADACQADADAGAAQAEAAAEgCQAFgDACgEQABgDAAgHIAAgDQgFACgJABg");
	this.shape_118.setTransform(-122.3,-125.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AAQAcIAAgVIgGAAIgHABQgDABgEAHIgIAMIgMAAIAKgPQAFgHAFgBQgIgBgEgEQgEgEAAgHQAAgHAFgFQAFgFAKABIAZAAIAAA3gAgIgRQgDADAAAEQAAAFAEACQAEACAIABIALAAIAAgTIgOAAQgIAAgCACg");
	this.shape_119.setTransform(-131.6,-125.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AAOAcIAAgqIgaAqIgKAAIAAg3IAJAAIAAAqIAagqIAKAAIAAA3g");
	this.shape_120.setTransform(-137.4,-125.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AANAcIAAgZIgaAAIAAAZIgJAAIAAg3IAJAAIAAAXIAaAAIAAgXIAKAAIAAA3g");
	this.shape_121.setTransform(-143.4,-125.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgSAWQgHgIAAgOQAAgNAHgIQAIgIAKAAQAMAAAHAIQAHAIAAANIAAACIgpAAQAAAKAFAFQAFAFAGAAQAFAAAEgDQAEgDACgGIAKABQgCAJgHAFQgGAFgKAAQgMAAgHgIgAgKgRQgEAFgBAHIAfAAQAAgHgDgEQgFgFgHAAQgGAAgFAEg");
	this.shape_122.setTransform(-149.6,-125.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AAXAlIAAgRIgsAAIAAARIgIAAIAAgZIAEAAQALgNAAgiIAmAAIAAAvIAHAAIAAAZgAgPAMIAeAAIAAgnIgWAAQAAAbgIAMg");
	this.shape_123.setTransform(-155.9,-124.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgSAWQgHgIAAgOQAAgNAHgIQAIgIAKAAQAMAAAHAIQAHAIAAANIAAACIgpAAQAAAKAFAFQAFAFAGAAQAFAAAEgDQAEgDACgGIAKABQgCAJgHAFQgGAFgKAAQgMAAgHgIgAgKgRQgEAFgBAHIAfAAQAAgHgDgEQgFgFgHAAQgGAAgFAEg");
	this.shape_124.setTransform(-161.8,-125.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgWAcIAAg3IAWAAQAHgBAEACQAEABADAEQADADAAAFQAAAFgCACQgCAEgDACQAEAAADAEQACADAAAFQAAAIgFAFQgGADgKAAgAgNAUIANAAQAHAAADgCQADgCAAgEIgBgFQgCgCgDgBIgIgBIgMAAgAgNgEIALAAIAHAAIAEgDQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAAAQAAgFgDgCQgDgBgHAAIgLAAg");
	this.shape_125.setTransform(-167.4,-125.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgSAWQgIgHAAgPQAAgPAJgIQAIgGAJAAQAMAAAHAIQAIAIAAANQAAAKgDAHQgEAGgGAEQgGADgIAAQgLAAgHgIgAgLgQQgFAGAAAKQAAALAFAGQAFAFAGAAQAHAAAFgFQAFgGAAgLQAAgKgFgGQgFgFgHAAQgGAAgFAFg");
	this.shape_126.setTransform(-173.6,-125.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgYAoIAAhOIAJAAIAAAIQADgFAEgCQAEgCAEAAQAIAAAFAEQAGADADAHQADAHAAAIQAAAJgEAGQgDAHgGAEQgGAEgGAAQgEAAgEgDQgEgCgCgDIAAAcgAgKgaQgFAGAAALQAAAKAEAFQAFAGAGAAQAFAAAFgGQAFgFAAgLQAAgLgFgFQgEgGgGAAQgGAAgEAGg");
	this.shape_127.setTransform(-179.5,-124.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AAMAcIAAgvIgYAAIAAAvIgKAAIAAg3IAsAAIAAA3g");
	this.shape_128.setTransform(-185.6,-125.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AAOAcIAAgqIgaAqIgKAAIAAg3IAJAAIAAAqIAagqIAKAAIAAA3g");
	this.shape_129.setTransform(-194.8,-125.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AAKAcIgKgRQgCgGgDgBQgCgCgDAAIAAAaIgKAAIAAg3IAKAAIAAAYQAFAAABgCIAFgKIAFgJIADgDIAIAAIACAAIAAAIIgDAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABQgBAAgCAHIgEAHIgFAEQAGABAFAKIALARg");
	this.shape_130.setTransform(-199.8,-125.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgSAWQgIgHAAgPQAAgPAJgIQAIgGAJAAQAMAAAHAIQAIAIAAANQAAAKgDAHQgEAGgGAEQgGADgIAAQgLAAgHgIgAgLgQQgFAGAAAKQAAALAFAGQAFAFAGAAQAHAAAFgFQAFgGAAgLQAAgKgFgGQgFgFgHAAQgGAAgFAFg");
	this.shape_131.setTransform(-205.7,-125.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgYAoIAAhOIAJAAIAAAIQADgFAEgCQAEgCAEAAQAIAAAFAEQAGADADAHQADAHAAAIQAAAJgEAGQgDAHgGAEQgGAEgGAAQgEAAgEgDQgEgCgCgDIAAAcgAgKgaQgFAGAAALQAAAKAEAFQAFAGAGAAQAFAAAFgGQAFgFAAgLQAAgLgFgFQgEgGgGAAQgGAAgEAGg");
	this.shape_132.setTransform(-211.6,-124.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgRAjQgIgFgFgKQgEgJAAgLQAAgMAFgJQAFgJAIgFQAJgFAJAAQAMAAAIAGQAIAGADALIgKADQgDgJgFgEQgFgEgIAAQgIAAgGAEQgGAFgDAHQgCAHAAAIQAAAJADAIQADAHAGAEQAGAEAGAAQAJAAAGgFQAGgFACgKIALACQgDANgJAHQgIAHgNAAQgLAAgIgGg");
	this.shape_133.setTransform(-218.8,-126.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_134.setTransform(-227.3,-123.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AAQAcIAAgVIgGAAIgHABQgDABgEAHIgIAMIgMAAIAKgPQAFgHAFgBQgIgBgEgEQgEgEAAgHQAAgHAFgFQAFgFAKABIAZAAIAAA3gAgIgRQgDADAAAEQAAAFAEACQAEACAIABIALAAIAAgTIgOAAQgIAAgCACg");
	this.shape_135.setTransform(-232.2,-125.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AAOAcIAAgqIgaAqIgKAAIAAg3IAJAAIAAAqIAagqIAKAAIAAA3g");
	this.shape_136.setTransform(-237.9,-125.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AASAlIAAgRIgrAAIAAg3IAJAAIAAAvIAaAAIAAgvIAKAAIAAAvIAGAAIAAAZg");
	this.shape_137.setTransform(-243.9,-124.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AALAcIgLgRQgCgGgCgBQgDgCgDAAIAAAaIgKAAIAAg3IAKAAIAAAYQAEAAACgCIAFgKIAEgJIAFgDIAHAAIACAAIAAAIIgDAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAABQgCAAgCAHIgEAHIgFAEQAFABAHAKIAKARg");
	this.shape_138.setTransform(-249.3,-125.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AAZAnIgJgYIggAAIgJAYIgLAAIAehNIALAAIAgBNgAgFgPIgIAWIAaAAIgJgVIgEgQIgFAPg");
	this.shape_139.setTransform(-255.8,-126.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AAAAFIgGAMIgHgFIAJgKIgNgCIADgIIAMAGIgBgOIAHAAIgBANIAMgFIADAIQgHABgHABIAKAKIgHAFIgHgMg");
	this.shape_140.setTransform(-264.7,-129.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 2
	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AAdAdIAAgjIgBgIQgBgDgCgBQgDgCgDAAQgGAAgEAEQgEAEAAAJIAAAgIgJAAIAAgkQAAgGgCgDQgDgEgFAAQgEAAgEACQgDADgBAEQgCAEAAAHIAAAdIgJAAIAAg4IAIAAIAAAIQADgEAEgDQAFgCAFAAQAGAAAFADQACACACAFQAHgKALAAQAIAAAFAFQAFAEgBAKIAAAmg");
	this.shape_141.setTransform(-104.4,-94.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgSAWQgIgIAAgOQAAgPAJgIQAIgGAJAAQAMAAAHAIQAIAIAAANQAAAKgDAHQgEAGgGADQgGAEgIAAQgLAAgHgIgAgLgQQgFAGAAAKQAAALAFAGQAFAFAGAAQAHAAAFgFQAFgGAAgLQAAgKgFgGQgFgFgHAAQgGAAgFAFg");
	this.shape_142.setTransform(-112.1,-94);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgRAWQgHgIAAgOQAAgIADgHQADgHAGgEQAHgDAGAAQAJAAAGAFQAGAFACAIIgKACQgBgGgDgDQgEgDgFAAQgGAAgEAFQgFAGAAAKQAAALAEAGQAFAFAGAAQAGAAADgEQAEgDABgHIAKABQgCAJgGAHQgHAFgJAAQgLAAgHgIg");
	this.shape_143.setTransform(-117.7,-94);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgEAFIAAgKIAKAAIAAAKg");
	this.shape_144.setTransform(-122.1,-91.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgRAgQgIgKAAgWQAAgNADgJQADgIAGgFQAFgEAIAAQAGAAAFACQAFADADAFQADAEACAHQACAHAAALQAAAOgDAIQgDAJgGAEQgFAFgJAAQgKAAgHgIgAgKgaQgFAIAAASQAAATAFAHQAEAGAGAAQAHAAAEgGQAFgHAAgTQAAgTgFgGQgEgGgHAAQgGAAgEAFg");
	this.shape_145.setTransform(-126.8,-95);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AAFAnIAAg8IgJAGIgKAGIAAgKQAIgDAGgGQAFgFAEgGIAGAAIAABOg");
	this.shape_146.setTransform(-133.2,-95.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AAFAnIAAg8IgIAGIgLAGIAAgKQAJgDAFgGQAFgFADgGIAHAAIAABOg");
	this.shape_147.setTransform(-138.5,-95.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgUAZQgFgFAAgGQAAgFACgDIAFgGIAHgCIAIgBIAQgEIAAgCQAAgGgCgDQgEgDgHAAQgGAAgDADQgEACgBAGIgKgBQACgHADgDQADgEAFgCQAGgCAGAAQAHAAAFACQAFACACACIADAHIAAAIIAAANIABAQIACAHIgKAAIgCgHQgFAFgFACQgEACgGAAQgJAAgFgFgAgBADIgJADIgEACIgBAFQAAAEADACQADADAGAAQAEAAAEgCQAFgDACgEQABgDAAgHIAAgDQgFACgJABg");
	this.shape_148.setTransform(-144.3,-94);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AAAAlQgEgCgBgDQgBgCAAgIIAAghIgHAAIAAgHIAHAAIAAgOIAIgGIAAAUIAKAAIAAAHIgKAAIAAAhIABAFIACACIADABIAEAAIACAIIgIABQgFAAgBgCg");
	this.shape_149.setTransform(-148.7,-94.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AAOAnIAAgkQgBgGgDgDQgCgEgHAAQgDAAgEADQgEACgBAEQgBACAAAHIAAAfIgKAAIAAhNIAKAAIAAAcQAGgIAJAAQAHAAAFACQAEADACAEQACAFAAAHIAAAkg");
	this.shape_150.setTransform(-153.4,-95.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgMAbQgFgCgCgDIgDgHIAAgJIAAgiIAJAAIAAAeIABALQABADADADQADACAEAAQAEAAADgCQAEgDACgEQABgDAAgIIAAgdIAKAAIAAA4IgJAAIAAgJQgGAKgLAAQgFAAgEgCg");
	this.shape_151.setTransform(-159.5,-93.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgEAnIAAhNIAJAAIAABNg");
	this.shape_152.setTransform(-163.8,-95.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgEAFIAAgKIAJAAIAAAKg");
	this.shape_153.setTransform(-166.5,-91.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AALAcIgJghIgCgKIgLArIgKAAIgRg3IAKAAIAJAgIAEAMIACgMIAJggIAJAAIAJAgIACALIAEgLIAKggIAJAAIgSA3g");
	this.shape_154.setTransform(-171.4,-94);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AALAcIgJghIgCgKIgKArIgKAAIgSg3IAKAAIAJAgIADAMIADgMIAKggIAIAAIAJAgIACALIAEgLIAJggIAKAAIgSA3g");
	this.shape_155.setTransform(-179.4,-94);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AALAcIgJghIgCgKIgKArIgLAAIgRg3IAKAAIAJAgIADAMIADgMIAJggIAJAAIAJAgIADALIADgLIAJggIAKAAIgSA3g");
	this.shape_156.setTransform(-187.3,-94);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgEAcIAAgLIAJAAIAAALgAgEgRIAAgKIAJAAIAAAKg");
	this.shape_157.setTransform(-195.8,-94);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgSAWQgHgIAAgOQAAgNAHgIQAIgIAKAAQAMAAAHAIQAHAHAAAOIAAACIgpAAQAAAKAFAFQAFAFAGAAQAFAAAEgDQAEgDACgGIAKABQgCAJgHAFQgGAFgKAAQgMAAgHgIgAgKgRQgEAFgBAHIAfAAQAAgGgDgFQgFgFgHAAQgGAAgFAEg");
	this.shape_158.setTransform(-200.5,-94);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgYAoIAAhOIAJAAIAAAIQADgFAEgCQAEgCAEAAQAIAAAFAEQAGADADAHQADAHAAAIQAAAJgEAGQgDAHgGAEQgGAEgGAAQgEAAgEgDQgEgCgCgDIAAAcgAgKgaQgFAGAAALQAAAKAEAFQAFAGAGAAQAFAAAFgGQAFgFAAgLQAAgLgFgFQgEgGgGAAQgGAAgEAGg");
	this.shape_159.setTransform(-206.4,-93);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgSAWQgIgIAAgOQAAgPAJgIQAIgGAJAAQAMAAAHAIQAIAIAAANQAAAKgDAHQgEAGgGADQgGAEgIAAQgLAAgHgIgAgLgQQgFAGAAAKQAAALAFAGQAFAFAGAAQAHAAAFgFQAFgGAAgLQAAgKgFgGQgFgFgHAAQgGAAgFAFg");
	this.shape_160.setTransform(-212.7,-94);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgEAcIAAgvIgSAAIAAgIIAtAAIAAAIIgSAAIAAAvg");
	this.shape_161.setTransform(-218.1,-94);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgUAZQgFgFAAgGQAAgFACgDIAFgGIAHgCIAIgBIAQgEIAAgCQAAgGgCgDQgEgDgHAAQgGAAgDADQgEACgBAGIgKgBQACgHADgDQADgEAFgCQAGgCAGAAQAHAAAFACQAFACACACIADAHIAAAIIAAANIABAQIACAHIgKAAIgCgHQgFAFgFACQgEACgGAAQgJAAgFgFgAgBADIgJADIgEACIgBAFQAAAEADACQADADAGAAQAEAAAEgCQAFgDACgEQABgDAAgHIAAgDQgFACgJABg");
	this.shape_162.setTransform(-223.5,-94);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgVAMIAKgCQABAGADADQAEADAEAAQAFAAADgDQAEgDgBgEQAAgDgCgCQgCgDgCgBIgHgBIgDAAIAAgGIAIgBIAEgCQACgCAAgDQAAgEgCgCQgDgDgFAAQgHAAgDAKIgJgCQAFgQAOAAQAKAAAFAFQAFAFAAAHQAAAHgHAEQAEACADADQACADAAAFQAAAIgFAFQgGAFgKAAQgTAAgDgSg");
	this.shape_163.setTransform(-229.1,-94);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AAOAcIAAgqIgaAqIgKAAIAAg3IAJAAIAAAqIAagqIAKAAIAAA3g");
	this.shape_164.setTransform(-234.6,-94);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AAOAcIAAgZIgaAAIAAAZIgKAAIAAg3IAKAAIAAAXIAaAAIAAgXIAJAAIAAA3g");
	this.shape_165.setTransform(-240.7,-94);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgUAZQgFgFAAgGQAAgFACgDIAFgGIAHgCIAIgBIAQgEIAAgCQAAgGgCgDQgEgDgHAAQgGAAgDADQgEACgBAGIgKgBQACgHADgDQADgEAFgCQAGgCAGAAQAHAAAFACQAFACACACIADAHIAAAIIAAANIABAQIACAHIgKAAIgCgHQgFAFgFACQgEACgGAAQgJAAgFgFgAgBADIgJADIgEACIgBAFQAAAEADACQADADAGAAQAEAAAEgCQAFgDACgEQABgDAAgHIAAgDQgFACgJABg");
	this.shape_166.setTransform(-246.8,-94);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgPAcIAAg3IAfAAIAAAIIgWAAIAAAvg");
	this.shape_167.setTransform(-251.2,-94);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgYAoIAAhOIAJAAIAAAIQADgFAEgCQAEgCAEAAQAIAAAFAEQAGADADAHQADAHAAAIQAAAJgEAGQgDAHgGAEQgGAEgGAAQgEAAgEgDQgEgCgCgDIAAAcgAgKgaQgFAGAAALQAAAKAEAFQAFAGAGAAQAFAAAFgGQAFgFAAgLQAAgLgFgFQgEgGgGAAQgGAAgEAGg");
	this.shape_168.setTransform(-256.5,-93);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgSAWQgIgIAAgOQAAgPAJgIQAIgGAJAAQAMAAAHAIQAIAIAAANQAAAKgDAHQgEAGgGADQgGAEgIAAQgLAAgHgIgAgLgQQgFAGAAAKQAAALAFAGQAFAFAGAAQAHAAAFgFQAFgGAAgLQAAgKgFgGQgFgFgHAAQgGAAgFAFg");
	this.shape_169.setTransform(-262.8,-94);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgSAgQgHgHAAgOQAAgOAHgIQAIgIAKAAQAMAAAHAIQAHAIAAANIAAADIgpAAQAAAJAFAFQAFAFAGAAQAFAAAEgDQAEgCACgHIAKACQgCAIgHAFQgGAFgKAAQgMAAgHgIgAgKgGQgEAEgBAHIAfAAQAAgGgDgEQgFgGgHAAQgGAAgFAFgAAFgcIAAgLIAKAAIAAALgAgOgcIAAgLIAKAAIAAALg");
	this.shape_170.setTransform(-54.1,-105.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgSAWQgHgIAAgNQAAgOAHgIQAIgIAKAAQAMAAAHAIQAHAHAAAOIAAACIgpAAQAAAKAFAFQAFAFAGAAQAFAAAEgDQAEgCACgHIAKABQgCAJgHAFQgGAFgKAAQgMAAgHgIgAgKgQQgEAEgBAHIAfAAQAAgGgDgEQgFgGgHAAQgGAAgFAFg");
	this.shape_171.setTransform(-60.2,-104.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AAOAdIAAgrIgaArIgKAAIAAg4IAJAAIAAAqIAagqIAKAAIAAA4g");
	this.shape_172.setTransform(-69.4,-104.2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AAOAdIAAgrIgaArIgKAAIAAg4IAJAAIAAAqIAagqIAKAAIAAA4g");
	this.shape_173.setTransform(-78.6,-104.2);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AAOAdIAAgrIgaArIgKAAIAAg4IAJAAIAAAqIAagqIAKAAIAAA4g");
	this.shape_174.setTransform(-84.7,-104.2);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AASAlIAAgQIgrAAIAAg4IAJAAIAAAvIAaAAIAAgvIAKAAIAAAvIAGAAIAAAZg");
	this.shape_175.setTransform(-90.7,-103.4);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AALAdIgLgSQgCgFgDgCQgCgCgDAAIAAAbIgKAAIAAg4IAKAAIAAAYQAEAAACgCIAFgKIAEgJIAFgDIAHAAIACAAIAAAHIgDAAQgBAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBABQgBABgCAFIgEAIIgFAEQAFABAHAKIAKASg");
	this.shape_176.setTransform(-96.1,-104.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgUAZQgFgEAAgIQAAgEACgDIAFgGIAHgCIAIgCIAQgCIAAgDQAAgGgCgCQgEgEgHAAQgGAAgDADQgEACgBAGIgKgCQACgFADgEQADgEAFgCQAGgCAGAAQAHAAAFACQAFABACADIADAHIAAAJIAAALIABARIACAIIgKAAIgCgIQgFAFgFACQgEACgGAAQgJAAgFgFgAgBADIgJACIgEAEIgBAEQAAAEADADQADACAGAAQAEAAAEgCQAFgDACgEQABgDAAgHIAAgDQgFACgJABg");
	this.shape_177.setTransform(-102,-104.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AAQAdIAAgXIgGAAIgHACQgDABgEAHIgIANIgMAAIAKgQQAFgHAFgBQgIgBgEgEQgEgFAAgGQAAgIAFgEQAFgFAKABIAZAAIAAA4gAgIgRQgDADAAADQAAAGAEACQAEADAIAAIALAAIAAgUIgOAAQgIAAgCADg");
	this.shape_178.setTransform(-111.3,-104.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AAOAdIAAgrIgaArIgKAAIAAg4IAJAAIAAAqIAagqIAKAAIAAA4g");
	this.shape_179.setTransform(-117.1,-104.2);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AAOAdIAAgaIgaAAIAAAaIgKAAIAAg4IAKAAIAAAXIAaAAIAAgXIAJAAIAAA4g");
	this.shape_180.setTransform(-123.1,-104.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgSAWQgHgIAAgNQAAgOAHgIQAIgIAKAAQAMAAAHAIQAHAHAAAOIAAACIgpAAQAAAKAFAFQAFAFAGAAQAFAAAEgDQAEgCACgHIAKABQgCAJgHAFQgGAFgKAAQgMAAgHgIgAgKgQQgEAEgBAHIAfAAQAAgGgDgEQgFgGgHAAQgGAAgFAFg");
	this.shape_181.setTransform(-129.3,-104.2);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AAWAlIAAgQIgsAAIAAAQIgIAAIAAgZIAFAAQALgNgBgiIAnAAIAAAvIAGAAIAAAZgAgPAMIAdAAIAAgoIgVAAQgBAcgHAMg");
	this.shape_182.setTransform(-135.6,-103.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgSAWQgHgIAAgNQAAgOAHgIQAIgIAKAAQAMAAAHAIQAHAHAAAOIAAACIgpAAQAAAKAFAFQAFAFAGAAQAFAAAEgDQAEgCACgHIAKABQgCAJgHAFQgGAFgKAAQgMAAgHgIgAgKgQQgEAEgBAHIAfAAQAAgGgDgEQgFgGgHAAQgGAAgFAFg");
	this.shape_183.setTransform(-141.5,-104.2);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgWAdIAAg4IAWAAQAHAAAEABQAEABADAEQADAEAAAEQAAAFgCACQgCAEgDACQAEAAADAEQACAEAAAEQAAAJgFADQgGAFgKAAgAgNAUIANAAQAHAAADgBQADgCAAgFIgBgFQgCgCgDgBIgIgBIgMAAgAgNgEIALAAIAHAAIAEgDQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAgBQAAgEgDgCQgDgCgHAAIgLAAg");
	this.shape_184.setTransform(-147.1,-104.2);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgSAWQgIgIAAgOQAAgPAJgIQAIgGAJAAQAMAAAHAIQAIAHAAAOQAAAKgDAHQgEAGgGAEQgGADgIAAQgLAAgHgIgAgLgPQgFAFAAAKQAAALAFAGQAFAFAGAAQAHAAAFgFQAFgGAAgLQAAgKgFgFQgFgGgHAAQgGAAgFAGg");
	this.shape_185.setTransform(-153.3,-104.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgYAoIAAhOIAJAAIAAAIQADgFAEgCQAEgCAEAAQAIAAAFAEQAGADADAHQADAHAAAIQAAAJgEAGQgDAHgGAEQgGAEgGAAQgEAAgEgDQgEgCgCgDIAAAcgAgKgaQgFAGAAALQAAAKAEAFQAFAGAGAAQAFAAAFgGQAFgFAAgLQAAgLgFgFQgEgGgGAAQgGAAgEAGg");
	this.shape_186.setTransform(-159.2,-103.2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AANAdIAAgxIgZAAIAAAxIgJAAIAAg4IAsAAIAAA4g");
	this.shape_187.setTransform(-165.3,-104.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgSAWQgHgIAAgNQAAgOAHgIQAIgIAKAAQAMAAAHAIQAHAHAAAOIAAACIgpAAQAAAKAFAFQAFAFAGAAQAFAAAEgDQAEgCACgHIAKABQgCAJgHAFQgGAFgKAAQgMAAgHgIgAgKgQQgEAEgBAHIAfAAQAAgGgDgEQgFgGgHAAQgGAAgFAFg");
	this.shape_188.setTransform(-174.5,-104.2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AAKAdIgKgSQgCgFgDgCQgCgCgDAAIAAAbIgKAAIAAg4IAKAAIAAAYQAFAAABgCIAFgKIAFgJIADgDIAIAAIACAAIAAAHIgDAAQgBAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBABQgBABgCAFIgEAIIgFAEQAGABAFAKIALASg");
	this.shape_189.setTransform(-179.6,-104.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AAXAlIAAgQIgsAAIAAAQIgIAAIAAgZIAEAAQALgNgBgiIAnAAIAAAvIAHAAIAAAZgAgPAMIAeAAIAAgoIgWAAQgBAcgHAMg");
	this.shape_190.setTransform(-185.7,-103.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AAQAdIAAgXIgGAAIgHACQgDABgEAHIgIANIgMAAIAKgQQAFgHAFgBQgIgBgEgEQgEgFAAgGQAAgIAFgEQAFgFAKABIAZAAIAAA4gAgIgRQgDADAAADQAAAGAEACQAEADAIAAIALAAIAAgUIgOAAQgIAAgCADg");
	this.shape_191.setTransform(-192,-104.2);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgYAoIAAhOIAJAAIAAAIQADgFAEgCQAEgCAEAAQAIAAAFAEQAGADADAHQADAHAAAIQAAAJgEAGQgDAHgGAEQgGAEgGAAQgEAAgEgDQgEgCgCgDIAAAcgAgKgaQgFAGAAALQAAAKAEAFQAFAGAGAAQAFAAAFgGQAFgFAAgLQAAgLgFgFQgEgGgGAAQgGAAgEAGg");
	this.shape_192.setTransform(-197.5,-103.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgSAWQgIgIAAgOQAAgPAJgIQAIgGAJAAQAMAAAHAIQAIAHAAAOQAAAKgDAHQgEAGgGAEQgGADgIAAQgLAAgHgIgAgLgPQgFAFAAAKQAAALAFAGQAFAFAGAAQAHAAAFgFQAFgGAAgLQAAgKgFgFQgFgGgHAAQgGAAgFAGg");
	this.shape_193.setTransform(-203.8,-104.2);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AAMAdIAAgxIgYAAIAAAxIgKAAIAAg4IAsAAIAAA4g");
	this.shape_194.setTransform(-209.7,-104.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgFAJQADgBABgDQABgCABgEIgFAAIAAgLIAKAAIAAALQAAAFgCAEQgCADgEACg");
	this.shape_195.setTransform(-217.3,-101.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AAPAdIgMgSIgDgFIgOAXIgMAAIAVgdIgTgbIAMAAIAJANIADAGIAEgGIAKgNIALAAIgTAbIAUAdg");
	this.shape_196.setTransform(-221.6,-104.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AAQAdIAAgXIgGAAIgHACQgDABgEAHIgIANIgMAAIAKgQQAFgHAFgBQgIgBgEgEQgEgFAAgGQAAgIAFgEQAFgFAKABIAZAAIAAA4gAgIgRQgDADAAADQAAAGAEACQAEADAIAAIALAAIAAgUIgOAAQgIAAgCADg");
	this.shape_197.setTransform(-227.6,-104.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AAOAdIAAgrIgaArIgKAAIAAg4IAJAAIAAAqIAagqIAKAAIAAA4g");
	this.shape_198.setTransform(-233.4,-104.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgWAdIAAg4IAWAAQAHAAAEABQAEABADAEQADAEAAAEQAAAFgCACQgCAEgDACQAEAAADAEQACAEAAAEQAAAJgFADQgGAFgKAAgAgNAUIANAAQAHAAADgBQADgCAAgFIgBgFQgCgCgDgBIgIgBIgMAAgAgNgEIALAAIAHAAIAEgDQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAgBQAAgEgDgCQgDgCgHAAIgLAAg");
	this.shape_199.setTransform(-239.2,-104.2);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgSAWQgIgIAAgOQAAgPAJgIQAIgGAJAAQAMAAAHAIQAIAHAAAOQAAAKgDAHQgEAGgGAEQgGADgIAAQgLAAgHgIgAgLgPQgFAFAAAKQAAALAFAGQAFAFAGAAQAHAAAFgFQAFgGAAgLQAAgKgFgFQgFgGgHAAQgGAAgFAGg");
	this.shape_200.setTransform(-245.4,-104.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgbAcIAAgIIAEAAIAFAAIABgCIABgJIAAglIAsAAIAAA4IgKAAIAAgwIgZAAIAAAcIAAANQgBADgDACQgDADgFAAIgIgBg");
	this.shape_201.setTransform(-252,-104.2);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgRAWQgHgIAAgOQAAgIADgHQADgHAGgDQAHgEAGAAQAJAAAGAFQAGAFACAIIgKACQgBgGgDgDQgEgDgFAAQgGAAgEAGQgFAEAAALQAAALAEAGQAFAFAGAAQAGAAADgDQAEgEABgHIAKABQgCAKgGAFQgHAGgJAAQgLAAgHgIg");
	this.shape_202.setTransform(-257.5,-104.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgUAnIgBgJIAFABQAEAAABgBIADgEIAEgGIABgDIgWg4IAKAAIAMAhIADAMIAEgMIAMghIAKAAIgVA5IgFANQgDAFgDACQgEACgEAAIgGgBg");
	this.shape_203.setTransform(-263,-103);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgOAkQgGgFgDgHQgDgHAAgRQAAgXAIgHQAHgJAPABIAMAAIABgCIAJAAQgBAGgCACIgFADIgMABQgLgBgEADQgFACgBAFQgCAFgBAIQAEgFAFgDQAFgCAFgBQALAAAIAIQAHAIAAAMQAAAKgEAGQgEAHgFADQgFAEgIAAQgKAAgFgFgAgLgCQgEAEAAALQAAAJAFAFQAFAGAGAAQAHAAAEgGQAFgGAAgKQAAgJgEgFQgFgFgHgBQgHAAgFAHg");
	this.shape_204.setTransform(-29.3,-115.5);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgSAWQgIgHAAgPQAAgPAJgHQAIgHAJAAQAMAAAHAIQAIAIAAANQAAAKgDAGQgEAHgGADQgGAEgIAAQgLAAgHgIgAgLgPQgFAFAAAKQAAALAFAFQAFAGAGAAQAHAAAFgGQAFgFAAgLQAAgKgFgFQgFgGgHAAQgGAAgFAGg");
	this.shape_205.setTransform(-35.6,-114.4);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AAQAdIAAgXIgGAAIgHABQgDACgEAHIgIANIgMAAIAKgQQAFgHAFgBQgIgBgEgEQgEgFAAgGQAAgHAFgFQAFgEAKgBIAZAAIAAA5gAgIgRQgDADAAADQAAAFAEADQAEADAIgBIALAAIAAgTIgOAAQgIABgCACg");
	this.shape_206.setTransform(-44.9,-114.4);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AAOAdIAAgqIgaAqIgKAAIAAg5IAJAAIAAArIAagrIAKAAIAAA5g");
	this.shape_207.setTransform(-50.7,-114.4);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AATAkIAAgPIgsAAIAAg5IAKAAIAAAxIAaAAIAAgxIAJAAIAAAxIAGAAIAAAXg");
	this.shape_208.setTransform(-56.7,-113.6);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgUAZQgFgFAAgGQAAgEACgEIAFgGIAHgCIAIgBIAQgDIAAgDQAAgGgCgDQgEgDgHAAQgGAAgDACQgEADgBAGIgKgCQACgFADgEQADgEAFgCQAGgCAGAAQAHAAAFACQAFACACACIADAHIAAAIIAAANIABARIACAHIgKAAIgCgHQgFAEgFACQgEACgGAAQgJAAgFgFgAgBAEIgJABIgEADIgBAFQAAAEADADQADACAGAAQAEAAAEgCQAFgCACgFQABgDAAgGIAAgEQgFACgJACg");
	this.shape_209.setTransform(-63.1,-114.4);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AAVAdIAAguIgRAuIgIAAIgQgwIAAAwIgJAAIAAg5IAPAAIAOAtIAQgtIAOAAIAAA5g");
	this.shape_210.setTransform(-69.9,-114.4);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgYAoIAAhOIAJAAIAAAIQADgFAEgCQAEgCAEAAQAIAAAFAEQAGADADAHQADAHAAAIQAAAJgEAGQgDAHgGAEQgGAEgGAAQgEAAgEgDQgEgCgCgDIAAAcgAgKgaQgFAGAAALQAAAKAEAFQAFAGAGAAQAFAAAFgGQAFgFAAgLQAAgLgFgFQgEgGgGAAQgGAAgEAGg");
	this.shape_211.setTransform(-76.6,-113.4);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgSAWQgIgHAAgPQAAgPAJgHQAIgHAJAAQAMAAAHAIQAIAIAAANQAAAKgDAGQgEAHgGADQgGAEgIAAQgLAAgHgIgAgLgPQgFAFAAAKQAAALAFAFQAFAGAGAAQAHAAAFgGQAFgFAAgLQAAgKgFgFQgFgGgHAAQgGAAgFAGg");
	this.shape_212.setTransform(-82.9,-114.4);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AgEAyIAAgbQgDADgDACQgEACgEAAQgJAAgHgIQgGgIAAgOQAAgMAGgJQAGgIAKAAQAEAAAEACQADABADAEIAAgbIAJAAIAAAbQADgEADgBQAEgCAEAAQAKAAAGAIQAGAJAAAMQAAANgGAIQgHAJgJAAIgGgBQgEgBgEgFIAAAbgAAIgQQgDAGAAAKQAAANADAEQAEAFAFAAQAGAAAEgGQAEgFAAgLQAAgLgDgFQgEgFgGAAQgHAAgDAFgAgbgQQgDAGAAAKQAAALAEAFQAEAGAGAAQAGAAADgGQADgFAAgLQAAgKgDgFQgDgGgHAAQgGAAgEAFg");
	this.shape_213.setTransform(-90.4,-114.4);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AAOAdIAAgaIgaAAIAAAaIgKAAIAAg5IAKAAIAAAYIAaAAIAAgYIAJAAIAAA5g");
	this.shape_214.setTransform(-97.9,-114.4);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AAOAdIAAgqIgaAqIgKAAIAAg5IAJAAIAAArIAagrIAKAAIAAA5g");
	this.shape_215.setTransform(-104.1,-114.4);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AAQAdIAAgXIgGAAIgHABQgDACgEAHIgIANIgMAAIAKgQQAFgHAFgBQgIgBgEgEQgEgFAAgGQAAgHAFgFQAFgEAKgBIAZAAIAAA5gAgIgRQgDADAAADQAAAFAEADQAEADAIgBIALAAIAAgTIgOAAQgIABgCACg");
	this.shape_216.setTransform(-113.5,-114.4);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgUAZQgFgFAAgGQAAgEACgEIAFgGIAHgCIAIgBIAQgDIAAgDQAAgGgCgDQgEgDgHAAQgGAAgDACQgEADgBAGIgKgCQACgFADgEQADgEAFgCQAGgCAGAAQAHAAAFACQAFACACACIADAHIAAAIIAAANIABARIACAHIgKAAIgCgHQgFAEgFACQgEACgGAAQgJAAgFgFgAgBAEIgJABIgEADIgBAFQAAAEADADQADACAGAAQAEAAAEgCQAFgCACgFQABgDAAgGIAAgEQgFACgJACg");
	this.shape_217.setTransform(-119.2,-114.4);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AANAdIAAgaIgaAAIAAAaIgJAAIAAg5IAJAAIAAAYIAaAAIAAgYIAKAAIAAA5g");
	this.shape_218.setTransform(-125.2,-114.4);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgOAkQgGgFgDgHQgDgHAAgRQAAgXAIgHQAHgJAPABIAMAAIABgCIAJAAQgBAGgCACIgFADIgMABQgLgBgEADQgFACgBAFQgCAFgBAIQAEgFAFgDQAFgCAFgBQALAAAIAIQAHAIAAAMQAAAKgEAGQgEAHgFADQgFAEgIAAQgKAAgFgFgAgLgCQgEAEAAALQAAAJAFAFQAFAGAGAAQAHAAAEgGQAFgGAAgKQAAgJgEgFQgFgFgHgBQgHAAgFAHg");
	this.shape_219.setTransform(-131.4,-115.5);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AgSAWQgIgHAAgPQAAgPAJgHQAIgHAJAAQAMAAAHAIQAIAIAAANQAAAKgDAGQgEAHgGADQgGAEgIAAQgLAAgHgIgAgLgPQgFAFAAAKQAAALAFAFQAFAGAGAAQAHAAAFgGQAFgFAAgLQAAgKgFgFQgFgGgHAAQgGAAgFAGg");
	this.shape_220.setTransform(-137.7,-114.4);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AgYAoIAAhOIAJAAIAAAIQADgFAEgCQAEgCAEAAQAIAAAFAEQAGADADAHQADAHAAAIQAAAJgEAGQgDAHgGAEQgGAEgGAAQgEAAgEgDQgEgCgCgDIAAAcgAgKgaQgFAGAAALQAAAKAEAFQAFAGAGAAQAFAAAFgGQAFgFAAgLQAAgLgFgFQgEgGgGAAQgGAAgEAGg");
	this.shape_221.setTransform(-143.6,-113.4);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AAWAkIAAgPIgsAAIAAAPIgIAAIAAgXIAGAAQAKgNgBgkIAnAAIAAAxIAGAAIAAAXgAgPANIAdAAIAAgpIgUAAQgBAcgIANg");
	this.shape_222.setTransform(-150.1,-113.6);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AgSAWQgIgHAAgPQAAgPAJgHQAIgHAJAAQAMAAAHAIQAIAIAAANQAAAKgDAGQgEAHgGADQgGAEgIAAQgLAAgHgIgAgLgPQgFAFAAAKQAAALAFAFQAFAGAGAAQAHAAAFgGQAFgFAAgLQAAgKgFgFQgFgGgHAAQgGAAgFAGg");
	this.shape_223.setTransform(-156,-114.4);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AAUAnIAAhEIgnAAIAABEIgLAAIAAhNIA9AAIAABNg");
	this.shape_224.setTransform(-162.9,-115.5);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgEAGIAAgLIAJAAIAAALg");
	this.shape_225.setTransform(-171.4,-112.1);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgUAZQgFgFAAgGQAAgEACgEIAFgGIAHgCIAIgBIAQgDIAAgDQAAgGgCgDQgEgDgHAAQgGAAgDACQgEADgBAGIgKgCQACgFADgEQADgEAFgCQAGgCAGAAQAHAAAFACQAFACACACIADAHIAAAIIAAANIABARIACAHIgKAAIgCgHQgFAEgFACQgEACgGAAQgJAAgFgFgAgBAEIgJABIgEADIgBAFQAAAEADADQADACAGAAQAEAAAEgCQAFgCACgFQABgDAAgGIAAgEQgFACgJACg");
	this.shape_226.setTransform(-176.1,-114.4);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AAWAkIAAgPIgsAAIAAAPIgIAAIAAgXIAFAAQALgNgBgkIAnAAIAAAxIAGAAIAAAXgAgPANIAdAAIAAgpIgVAAQgBAcgHANg");
	this.shape_227.setTransform(-182.4,-113.6);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgSAWQgIgHAAgPQAAgPAJgHQAIgHAJAAQAMAAAHAIQAIAIAAANQAAAKgDAGQgEAHgGADQgGAEgIAAQgLAAgHgIgAgLgPQgFAFAAAKQAAALAFAFQAFAGAGAAQAHAAAFgGQAFgFAAgLQAAgKgFgFQgFgGgHAAQgGAAgFAGg");
	this.shape_228.setTransform(-188.3,-114.4);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AgPAdIAAg5IAfAAIAAAIIgWAAIAAAxg");
	this.shape_229.setTransform(-192.7,-114.4);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AgNAnQAAgKADgNQAEgNAGgLQAGgMAHgJIglAAIAAgJIAxAAIAAAIQgHAIgHANQgHAMgEAOQgDAKgBAMg");
	this.shape_230.setTransform(-201.1,-115.4);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AAFAoIAAg9IgIAGIgKAFIAAgJQAHgDAGgGQAGgGACgEIAHAAIAABOg");
	this.shape_231.setTransform(-207.6,-115.5);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgRAgQgIgKAAgWQAAgNADgJQADgIAGgFQAFgEAIAAQAGAAAFACQAFADADAFQADAEACAHQACAHAAALQAAAOgDAIQgDAJgGAEQgFAFgJAAQgKAAgHgIgAgKgaQgFAIAAASQAAATAFAHQAEAGAGAAQAHAAAEgGQAFgHAAgTQAAgTgFgGQgEgGgHAAQgGAAgEAFg");
	this.shape_232.setTransform(-213.4,-115.4);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgZAoQAAgEABgDQACgFAFgFQAEgGAIgHQAMgKAFgGQAEgGAAgFQAAgGgEgEQgEgDgHAAQgGAAgEADQgEAFAAAHIgKgBQABgLAHgGQAGgFAKAAQAMAAAGAFQAHAHAAAJQAAAFgCAEQgCAFgEAEQgFAGgKAIIgKAKIgEAFIAlAAIAAAKg");
	this.shape_233.setTransform(-219.6,-115.5);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AAQAdIAAgXIgGAAIgHABQgDACgEAHIgIANIgMAAIAKgQQAFgHAFgBQgIgBgEgEQgEgFAAgGQAAgHAFgFQAFgEAKgBIAZAAIAAA5gAgIgRQgDADAAADQAAAFAEADQAEADAIgBIALAAIAAgTIgOAAQgIABgCACg");
	this.shape_234.setTransform(-228.8,-114.4);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AgYAoIAAhOIAJAAIAAAIQADgFAEgCQAEgCAEAAQAIAAAFAEQAGADADAHQADAHAAAIQAAAJgEAGQgDAHgGAEQgGAEgGAAQgEAAgEgDQgEgCgCgDIAAAcgAgKgaQgFAGAAALQAAAKAEAFQAFAGAGAAQAFAAAFgGQAFgFAAgLQAAgLgFgFQgEgGgGAAQgGAAgEAGg");
	this.shape_235.setTransform(-234.3,-113.4);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgOAkQgGgFgDgHQgDgHAAgRQAAgXAIgHQAHgJAPABIAMAAIABgCIAJAAQgBAGgCACIgFADIgMABQgLgBgEADQgFACgBAFQgCAFgBAIQAEgFAFgDQAFgCAFgBQALAAAIAIQAHAIAAAMQAAAKgEAGQgEAHgFADQgFAEgIAAQgKAAgFgFgAgLgCQgEAEAAALQAAAJAFAFQAFAGAGAAQAHAAAEgGQAFgGAAgKQAAgJgEgFQgFgFgHgBQgHAAgFAHg");
	this.shape_236.setTransform(-240.6,-115.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AAQAdIAAgXIgGAAIgHABQgDACgEAHIgIANIgMAAIAKgQQAFgHAFgBQgIgBgEgEQgEgFAAgGQAAgHAFgFQAFgEAKgBIAZAAIAAA5gAgIgRQgDADAAADQAAAFAEADQAEADAIgBIALAAIAAgTIgOAAQgIABgCACg");
	this.shape_237.setTransform(-247.1,-114.4);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AgEAdIAAgxIgSAAIAAgIIAtAAIAAAIIgSAAIAAAxg");
	this.shape_238.setTransform(-252.3,-114.4);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AAKAdIgKgSQgCgGgDgBQgCgCgDAAIAAAbIgKAAIAAg5IAKAAIAAAZQAEAAADgBIAEgLIAFgJIADgDIAIgBIACAAIAAAIIgDAAQgBAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBACgCAFIgEAJIgFADQAGABAFAKIALASg");
	this.shape_239.setTransform(-256.9,-114.4);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgSAWQgIgHAAgPQAAgPAJgHQAIgHAJAAQAMAAAHAIQAIAIAAANQAAAKgDAGQgEAHgGADQgGAEgIAAQgLAAgHgIgAgLgPQgFAFAAAKQAAALAFAFQAFAGAGAAQAHAAAFgGQAFgFAAgLQAAgKgFgFQgFgGgHAAQgGAAgFAGg");
	this.shape_240.setTransform(-262.8,-114.4);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AgRAgQgIgKAAgWQAAgNADgJQADgIAGgFQAFgEAIAAQAGAAAFACQAFADADAFQADAEACAHQACAHAAALQAAAOgDAIQgDAJgGAEQgFAFgJAAQgKAAgHgIgAgKgaQgFAIAAASQAAATAFAHQAEAGAGAAQAHAAAEgGQAFgHAAgTQAAgTgFgGQgEgGgHAAQgGAAgEAFg");
	this.shape_241.setTransform(0.1,-125.6);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgRAiQgHgGgBgKIAKgBQACAIAEAEQAEADAFAAQAGAAAFgFQAFgEAAgHQAAgHgFgEQgEgFgHAAIgGABIACgHIABAAQAFAAAFgDQAFgDAAgHQAAgFgDgEQgEgDgFAAQgFAAgEADQgEAEgBAHIgKgCQACgKAGgFQAHgFAJAAQAFAAAGACQAFADADAFQADAFAAAFQAAAFgDAEQgCAFgGACQAHACAEAEQAEAFAAAHQAAALgIAHQgHAHgLAAQgKAAgHgGg");
	this.shape_242.setTransform(-6,-125.6);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AgSAWQgIgIAAgOQAAgPAJgIQAIgGAJAAQAMAAAHAIQAIAIAAANQAAAKgDAHQgEAGgGADQgGAEgIAAQgLAAgHgIgAgLgQQgFAGAAAKQAAALAFAGQAFAFAGAAQAHAAAFgFQAFgGAAgLQAAgKgFgGQgFgFgHAAQgGAAgFAFg");
	this.shape_243.setTransform(-15.1,-124.6);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AAMAcIAAgvIgYAAIAAAvIgJAAIAAg3IAsAAIAAA3g");
	this.shape_244.setTransform(-21.1,-124.6);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AAQAcIAAgVIgGAAIgHABQgDABgEAHIgIAMIgMAAIAKgPQAFgHAFgBQgIgBgEgEQgEgEAAgHQAAgHAFgFQAFgEAKAAIAZAAIAAA3gAgIgRQgDADAAAEQAAAEAEADQAEACAIABIALAAIAAgTIgOAAQgIgBgCADg");
	this.shape_245.setTransform(-30.4,-124.6);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgYAoIAAhOIAJAAIAAAIQADgFAEgCQAEgCAEAAQAIAAAFAEQAGADADAHQADAHAAAIQAAAJgEAGQgDAHgGAEQgGAEgGAAQgEAAgEgDQgEgCgCgDIAAAcgAgKgaQgFAGAAALQAAAKAEAFQAFAGAGAAQAFAAAFgGQAFgFAAgLQAAgLgFgFQgEgGgGAAQgGAAgEAGg");
	this.shape_246.setTransform(-35.9,-123.6);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AgOAkQgGgEgDgIQgDgHAAgRQAAgWAIgJQAHgHAPgBIAMAAIABgBIAJAAQgBAFgCADIgFADIgMABQgLAAgEACQgFACgBAGQgCAFgBAHQAEgFAFgDQAFgDAFABQALAAAIAHQAHAIAAAMQAAAKgEAHQgEAGgFADQgFAEgIAAQgKAAgFgFgAgLgDQgEAFAAAKQAAALAFAFQAFAFAGAAQAHAAAEgGQAFgGAAgKQAAgJgEgFQgFgGgHABQgHAAgFAFg");
	this.shape_247.setTransform(-42.2,-125.7);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AAQAcIAAgVIgGAAIgHABQgDABgEAHIgIAMIgMAAIAKgPQAFgHAFgBQgIgBgEgEQgEgEAAgHQAAgHAFgFQAFgEAKAAIAZAAIAAA3gAgIgRQgDADAAAEQAAAEAEADQAEACAIABIALAAIAAgTIgOAAQgIgBgCADg");
	this.shape_248.setTransform(-48.7,-124.6);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AgEAcIAAgvIgSAAIAAgIIAtAAIAAAIIgSAAIAAAvg");
	this.shape_249.setTransform(-53.9,-124.6);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AANAcIAAgZIgaAAIAAAZIgJAAIAAg3IAJAAIAAAXIAaAAIAAgXIAKAAIAAA3g");
	this.shape_250.setTransform(-59.4,-124.6);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AgSAWQgHgIAAgOQAAgNAHgIQAIgIAKAAQAMAAAHAIQAHAHAAAOIAAACIgpAAQAAAKAFAFQAFAFAGAAQAFAAAEgDQAEgDACgGIAKABQgCAJgHAFQgGAFgKAAQgMAAgHgIgAgKgRQgEAFgBAHIAfAAQAAgGgDgFQgFgFgHAAQgGAAgFAEg");
	this.shape_251.setTransform(-65.5,-124.6);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AgRAWQgHgIAAgOQAAgIADgHQADgHAGgEQAHgDAGAAQAJAAAGAFQAGAFACAIIgKACQgBgGgDgDQgEgDgFAAQgGAAgEAFQgFAGAAAKQAAALAEAGQAFAFAGAAQAGAAADgEQAEgDABgHIAKABQgCAJgGAHQgHAFgJAAQgLAAgHgIg");
	this.shape_252.setTransform(-71.1,-124.6);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AAHAnIAAgTIghAAIAAgIIAjgyIAHAAIAAAyIALAAIAAAIIgLAAIAAATgAgRAMIAYAAIAAgjg");
	this.shape_253.setTransform(-80.3,-125.7);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AgRAWQgHgIAAgOQAAgIADgHQADgHAGgEQAHgDAGAAQAJAAAGAFQAGAFACAIIgKACQgBgGgDgDQgEgDgFAAQgGAAgEAFQgFAGAAAKQAAALAEAGQAFAFAGAAQAGAAADgEQAEgDABgHIAKABQgCAJgGAHQgHAFgJAAQgLAAgHgIg");
	this.shape_254.setTransform(-88.8,-124.6);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AAOAcIAAgqIgaAqIgKAAIAAg3IAJAAIAAAqIAagqIAKAAIAAA3g");
	this.shape_255.setTransform(-97.9,-124.6);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AAOAcIAAgqIgaAqIgKAAIAAg3IAJAAIAAAqIAagqIAKAAIAAA3g");
	this.shape_256.setTransform(-104,-124.6);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AATAkIAAgQIgsAAIAAg3IAKAAIAAAvIAaAAIAAgvIAJAAIAAAvIAGAAIAAAYg");
	this.shape_257.setTransform(-110,-123.8);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AAKAcIgKgRQgCgGgCgBQgDgCgDAAIAAAaIgKAAIAAg3IAKAAIAAAYQAFAAACgCIAEgKIAFgJIADgDIAIAAIACAAIAAAIIgDAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAABQgCAAgCAHIgEAIIgFADQAFABAGAKIALARg");
	this.shape_258.setTransform(-115.4,-124.6);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AgUAZQgFgFAAgGQAAgFACgDIAFgGIAHgCIAIgBIAQgEIAAgCQAAgGgCgDQgEgDgHAAQgGAAgDADQgEACgBAGIgKgBQACgHADgDQADgEAFgCQAGgCAGAAQAHAAAFACQAFACACACIADAHIAAAIIAAANIABAQIACAHIgKAAIgCgHQgFAFgFACQgEACgGAAQgJAAgFgFgAgBADIgJADIgEACIgBAFQAAAEADACQADADAGAAQAEAAAEgCQAFgDACgEQABgDAAgHIAAgDQgFACgJABg");
	this.shape_259.setTransform(-121.3,-124.6);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AAQAcIAAgVIgGAAIgHABQgDABgEAHIgIAMIgMAAIAKgPQAFgHAFgBQgIgBgEgEQgEgEAAgHQAAgHAFgFQAFgEAKAAIAZAAIAAA3gAgIgRQgDADAAAEQAAAEAEADQAEACAIABIALAAIAAgTIgOAAQgIgBgCADg");
	this.shape_260.setTransform(-130.6,-124.6);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AAOAcIAAgqIgaAqIgKAAIAAg3IAJAAIAAAqIAagqIAKAAIAAA3g");
	this.shape_261.setTransform(-136.4,-124.6);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AANAcIAAgZIgaAAIAAAZIgJAAIAAg3IAJAAIAAAXIAaAAIAAgXIAKAAIAAA3g");
	this.shape_262.setTransform(-142.4,-124.6);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AgSAWQgHgIAAgOQAAgNAHgIQAIgIAKAAQAMAAAHAIQAHAHAAAOIAAACIgpAAQAAAKAFAFQAFAFAGAAQAFAAAEgDQAEgDACgGIAKABQgCAJgHAFQgGAFgKAAQgMAAgHgIgAgKgRQgEAFgBAHIAfAAQAAgGgDgFQgFgFgHAAQgGAAgFAEg");
	this.shape_263.setTransform(-148.6,-124.6);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AAXAkIAAgQIgsAAIAAAQIgJAAIAAgYIAGAAQAKgNAAgiIAmAAIAAAvIAHAAIAAAYgAgPAMIAdAAIAAgnIgUAAQgCAbgHAMg");
	this.shape_264.setTransform(-154.9,-123.8);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AgSAWQgHgIAAgOQAAgNAHgIQAIgIAKAAQAMAAAHAIQAHAHAAAOIAAACIgpAAQAAAKAFAFQAFAFAGAAQAFAAAEgDQAEgDACgGIAKABQgCAJgHAFQgGAFgKAAQgMAAgHgIgAgKgRQgEAFgBAHIAfAAQAAgGgDgFQgFgFgHAAQgGAAgFAEg");
	this.shape_265.setTransform(-160.8,-124.6);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AgWAcIAAg3IAWAAQAHgBAEACQAEABADAEQADADAAAGQAAADgCADQgCAEgDACQAEAAADAEQACADAAAFQAAAIgFAFQgGADgKAAgAgNAUIANAAQAHAAADgCQADgCAAgEIgBgFQgCgDgDAAIgIgBIgMAAgAgNgDIALAAIAHgBIAEgDQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAAAQAAgFgDgCQgDgCgHABIgLAAg");
	this.shape_266.setTransform(-166.4,-124.6);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AgSAWQgIgIAAgOQAAgPAJgIQAIgGAJAAQAMAAAHAIQAIAIAAANQAAAKgDAHQgEAGgGADQgGAEgIAAQgLAAgHgIgAgLgQQgFAGAAAKQAAALAFAGQAFAFAGAAQAHAAAFgFQAFgGAAgLQAAgKgFgGQgFgFgHAAQgGAAgFAFg");
	this.shape_267.setTransform(-172.6,-124.6);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AgYAoIAAhOIAJAAIAAAIQADgFAEgCQAEgCAEAAQAIAAAFAEQAGADADAHQADAHAAAIQAAAJgEAGQgDAHgGAEQgGAEgGAAQgEAAgEgDQgEgCgCgDIAAAcgAgKgaQgFAGAAALQAAAKAEAFQAFAGAGAAQAFAAAFgGQAFgFAAgLQAAgLgFgFQgEgGgGAAQgGAAgEAGg");
	this.shape_268.setTransform(-178.5,-123.6);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AAMAcIAAgvIgYAAIAAAvIgKAAIAAg3IAsAAIAAA3g");
	this.shape_269.setTransform(-184.6,-124.6);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AAOAcIAAgqIgaAqIgKAAIAAg3IAJAAIAAAqIAagqIAKAAIAAA3g");
	this.shape_270.setTransform(-193.8,-124.6);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AAKAcIgKgRQgCgGgDgBQgCgCgDAAIAAAaIgKAAIAAg3IAKAAIAAAYQAEAAADgCIAEgKIAFgJIADgDIAIAAIACAAIAAAIIgDAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABQgBAAgCAHIgEAIIgFADQAGABAFAKIALARg");
	this.shape_271.setTransform(-198.8,-124.6);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AgSAWQgIgIAAgOQAAgPAJgIQAIgGAJAAQAMAAAHAIQAIAIAAANQAAAKgDAHQgEAGgGADQgGAEgIAAQgLAAgHgIgAgLgQQgFAGAAAKQAAALAFAGQAFAFAGAAQAHAAAFgFQAFgGAAgLQAAgKgFgGQgFgFgHAAQgGAAgFAFg");
	this.shape_272.setTransform(-204.7,-124.6);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AgYAoIAAhOIAJAAIAAAIQADgFAEgCQAEgCAEAAQAIAAAFAEQAGADADAHQADAHAAAIQAAAJgEAGQgDAHgGAEQgGAEgGAAQgEAAgEgDQgEgCgCgDIAAAcgAgKgaQgFAGAAALQAAAKAEAFQAFAGAGAAQAFAAAFgGQAFgFAAgLQAAgLgFgFQgEgGgGAAQgGAAgEAGg");
	this.shape_273.setTransform(-210.6,-123.6);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AgRAjQgIgFgFgKQgEgJAAgLQAAgMAFgJQAFgJAIgFQAJgFAJAAQAMAAAIAGQAIAGADALIgKADQgDgJgFgEQgFgEgIAAQgIAAgGAEQgGAFgDAHQgCAHAAAIQAAAJADAIQADAHAGAEQAGAEAGAAQAJAAAGgFQAGgFACgKIALACQgDANgJAHQgIAHgNAAQgLAAgIgGg");
	this.shape_274.setTransform(-217.8,-125.7);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AgEAFIAAgKIAJAAIAAAKg");
	this.shape_275.setTransform(-226.3,-122.3);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AAQAcIAAgVIgGAAIgHABQgDABgEAHIgIAMIgMAAIAKgPQAFgHAFgBQgIgBgEgEQgEgEAAgHQAAgHAFgFQAFgEAKAAIAZAAIAAA3gAgIgRQgDADAAAEQAAAEAEADQAEACAIABIALAAIAAgTIgOAAQgIgBgCADg");
	this.shape_276.setTransform(-231.2,-124.6);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AAOAcIAAgqIgaAqIgKAAIAAg3IAJAAIAAAqIAagqIAKAAIAAA3g");
	this.shape_277.setTransform(-236.9,-124.6);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AASAkIAAgQIgrAAIAAg3IAJAAIAAAvIAaAAIAAgvIAKAAIAAAvIAGAAIAAAYg");
	this.shape_278.setTransform(-242.9,-123.8);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AALAcIgLgRQgCgGgDgBQgCgCgDAAIAAAaIgKAAIAAg3IAKAAIAAAYQAEAAACgCIAFgKIAEgJIAFgDIAHAAIACAAIAAAIIgDAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAABQgCAAgCAHIgEAIIgFADQAFABAHAKIAKARg");
	this.shape_279.setTransform(-248.3,-124.6);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AAZAnIgJgYIggAAIgJAYIgLAAIAehNIALAAIAgBNgAgFgPIgIAWIAaAAIgJgVIgEgQIgFAPg");
	this.shape_280.setTransform(-254.8,-125.7);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AAAAFIgGAMIgHgFIAJgKIgNgCIADgIIAMAGIgBgOIAHAAIgBANIAMgFIADAIQgHABgHABIAKAKIgHAFIgHgMg");
	this.shape_281.setTransform(-263.7,-128.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ffggg, new cjs.Rectangle(-268.8,-134.6,291.8,47.8), null);


(lib.dsdsds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAEATIgEgNIgEAMIgEAJIgMgFIAGgJIAJgJIgMACIgMAAIAAgLIAMAAIANADIgKgJIgGgKIAMgHIAFAJIADAMIAEgMIAGgJIAKAHIgGAJIgKAKIAPgDIAKAAIAAALIgJAAIgPgCIAKAKIAFAIIgKAGg");
	this.shape.setTransform(74,-11.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPBhIAAgiIAfAAIAAAigAgJAvIgGg+IAAhRIAfAAIAABRIgEA+g");
	this.shape_1.setTransform(65.2,-2.1,1.176,1.176);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAcBhIgchIIgcBIIgpAAIAvhjIgsheIAqAAIAYA/IAag/IAqAAIgwBeIAyBjg");
	this.shape_2.setTransform(53.6,-2.1,1.176,1.176);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAbBhIAAhKQAAgrAFgXIg1CMIgoAAIAAjBIAjAAIAABJQAAAugFAVIA1iMIAoAAIAADBg");
	this.shape_3.setTransform(36.1,-2.1,1.176,1.176);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag+AjIAAhFQAAhCA+AAQA/AAAABCIAABFQAAAkgRAQQgQAOgeAAQg+AAAAhCgAgYgmIAABPQAAAeAYAAQAZAAAAgeIAAhOQAAgQgGgJQgHgIgMgBQgYABAAAgg");
	this.shape_4.setTransform(18.5,-2,1.176,1.176);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag6BhIAAjBIBDAAQAYAAAMAOQALANAAAUQAAAPgHAMQgHAOgMACQAdAKAAAkQAAAagLAPQgLAQgWAAgAgWBFIAXAAQAUABAAgfQAAgdgUAAIgXAAgAgWgRIAUAAQAWAAAAgaQAAgZgWAAIgUAAg");
	this.shape_5.setTransform(1.6,-2.1,1.176,1.176);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAoB0IAAgmIhPAAIAAAmIgkAAIAAhEIAMAAQAKgXAEgTQAEgXAAgmIAAg9IBtAAIAACkIAMAAIAABEgAgJgqQAAAfgEAVQgEASgJAUIA1AAIAAiGIgkAAg");
	this.shape_6.setTransform(-16.8,0.2,1.176,1.176);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAfBhIgJgyIgpAAIgLAyIgoAAIAxjBIAxAAIArDBgAgOASIAfAAIgPhZg");
	this.shape_7.setTransform(-42.7,-2.1,1.176,1.176);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAYBhIAAhaIgvAAIAABaIglAAIAAjBIAlAAIAABKIAvAAIAAhKIAlAAIAADBg");
	this.shape_8.setTransform(-60,-2.1,1.176,1.176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.1,-14.3,144.1,28.2);


(lib.dhdhdhdh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cvcvb();
	this.instance.parent = this;
	this.instance.setTransform(-66,-11,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dhdhdhdh, new cjs.Rectangle(-66,-11,131,22.5), null);


(lib.dgdfgdf = function(mode,startPosition,loop) {
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

}).prototype = getMCSymbolPrototype(lib.dgdfgdf, new cjs.Rectangle(-43.1,-9.9,86.4,19.9), null);


(lib.dfhdfh = function(mode,startPosition,loop) {
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

}).prototype = getMCSymbolPrototype(lib.dfhdfh, new cjs.Rectangle(-68.3,-13.8,136.6,27.8), null);


(lib.dfgdfgg = function(mode,startPosition,loop) {
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

}).prototype = getMCSymbolPrototype(lib.dfgdfgg, new cjs.Rectangle(-28.2,-8.4,56.5,16.9), null);


(lib.dfgdfff = function(mode,startPosition,loop) {
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

}).prototype = getMCSymbolPrototype(lib.dfgdfff, new cjs.Rectangle(-69.8,-8.4,139.6,16.9), null);


(lib.dffdgg = function(mode,startPosition,loop) {
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

}).prototype = getMCSymbolPrototype(lib.dffdgg, new cjs.Rectangle(-49,-8.2,98,16.6), null);


(lib.dfgg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AumCbQhBhAAAhbQAAhaBBhAQBAhBBbAAQBbAABABBQBBBAAABaQAABbhBBAQhABBhbAAQhbAAhAhBgAslhNQgNALgFAMIgpB0ICEAAQAUAAAPgLQAMgJABgJIiFAAIAph5IgCAAQgMAAgPALgAhpAzQgXgPAAgkIAAhhIA+AAIAABfQAAAOAJAGQAHAGARAAQAPAAAIgGQAIgGAAgOIAAhfIA+AAIAABhQAAAkgXAPQgWAOgwAAQgyAAgWgOgAOlA7IgGgSIhBAAIgGASIhDAAIBEicIBLAAIBECcgANsACIAlAAIgSg0IgBAAgAI/A7IAAh1Ig6AAIAAgnICyAAIAAAnIg6AAIAAB1gAFKA7IAAg+IhGAAIAAA+Ig/AAIAAicIA/AAIAAA3IBGAAIAAg3IA+AAIAACcgAmbA7IAAicIA+AAIAAByIBgAAIAAAqg");
	this.shape.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.dfgg, new cjs.Rectangle(-100,-20.9,200,44), null);


(lib.fg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.dfgg();
	this.instance.parent = this;
	this.instance.setTransform(-0.1,61.7,1.08,0.108,0,0,0,0.1,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(204).to({_off:false},0).to({regX:0,regY:0,scaleY:1.08,x:-0.2,y:61.6},6,cjs.Ease.get(1)).wait(41).to({regX:0.1,regY:1,scaleY:0.11,x:-0.1,y:61.7},6,cjs.Ease.get(1)).wait(1));

	// Символ 17
	this.instance_1 = new lib.dhdhdhdh();
	this.instance_1.parent = this;
	this.instance_1.setTransform(11.2,-66,1.08,1.08,0,0,0,0.1,0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(185).to({_off:false},0).to({x:0.4,alpha:1},8,cjs.Ease.get(1)).wait(54).to({x:-10.4,alpha:0},6,cjs.Ease.get(1)).wait(5));

	// Слой 9
	this.instance_2 = new lib.ffddgdfg();
	this.instance_2.parent = this;
	this.instance_2.setTransform(9.7,-31.3,0.9,0.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(195).to({_off:false},0).to({regX:0.1,regY:0.1,x:-1.1,alpha:1},8,cjs.Ease.get(1)).wait(45).to({regX:0,regY:0},0).to({x:-11.9,alpha:0},6,cjs.Ease.get(1)).wait(4));

	// Символ 18
	this.instance_3 = new lib.hhhddd();
	this.instance_3.parent = this;
	this.instance_3.setTransform(12.3,3.7,1.08,1.08,0,0,0,0.1,0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(188).to({_off:false},0).to({x:1.5,alpha:1},8,cjs.Ease.get(1)).wait(53).to({x:-9.3,alpha:0},6,cjs.Ease.get(1)).wait(3));

	// Символ 16
	this.instance_4 = new lib.dfgdfgg();
	this.instance_4.parent = this;
	this.instance_4.setTransform(10.3,24.8,1.08,1.08);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(122).to({_off:false},0).to({x:-0.5,alpha:1},8,cjs.Ease.get(1)).wait(45).to({x:-11.3,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(76));

	// Символ 15
	this.instance_5 = new lib.dfgdfff();
	this.instance_5.parent = this;
	this.instance_5.setTransform(10.6,-4.4,1.08,1.08);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(117).to({_off:false},0).to({x:-0.2,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:-11,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(77));

	// Символ 14
	this.instance_6 = new lib.dffdgg();
	this.instance_6.parent = this;
	this.instance_6.setTransform(9.9,-33.3,1.08,1.08);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(111).to({_off:false},0).to({x:-0.9,alpha:1},8,cjs.Ease.get(1)).wait(54).to({x:-11.7,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(78));

	// Символ 13
	this.instance_7 = new lib.dfhdfh();
	this.instance_7.parent = this;
	this.instance_7.setTransform(10.6,-77.5,1.08,1.08);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(96).to({_off:false},0).to({x:-0.2,alpha:1},9,cjs.Ease.get(1)).wait(67).to({x:-11,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(79));

	// Слой 11
	this.instance_8 = new lib.ffggg();
	this.instance_8.parent = this;
	this.instance_8.setTransform(135.7,249.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(42).to({_off:false},0).to({x:124.7,alpha:1},9,cjs.Ease.get(1)).wait(37).to({x:115.7,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(163));

	// Слой 17
	this.instance_9 = new lib.dsdsds("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(9.8,28.2,1.08,1.08);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(35).to({_off:false},0).to({x:-0.2,alpha:1},9,cjs.Ease.get(1)).wait(43).to({startPosition:0},0).to({x:-10.2,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(164));

	// Символ 12
	this.instance_10 = new lib.gggdfgdfg();
	this.instance_10.parent = this;
	this.instance_10.setTransform(10.6,7.9,1.08,1.08);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(31).to({_off:false},0).to({x:-0.2,alpha:1},9,cjs.Ease.get(1)).wait(46).to({x:-11,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(165));

	// Символ 10
	this.instance_11 = new lib.fghfgf();
	this.instance_11.parent = this;
	this.instance_11.setTransform(10.7,-55.7,1.08,1.08,0,0,0,0.1,0.1);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(6).to({_off:false},0).to({x:-0.1,alpha:1},8,cjs.Ease.get(1)).wait(70).to({x:-10.9,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(167));

	// Символ 9
	this.instance_12 = new lib.dgdfgdf();
	this.instance_12.parent = this;
	this.instance_12.setTransform(10.6,-86.8,1.08,1.08,0,0,0,0.1,0.1);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(2).to({_off:false},0).to({x:-0.2,alpha:1},8,cjs.Ease.get(1)).wait(73).to({x:-11,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(168));

	// Слой 4
	this.instance_13 = new lib.ffddgdfg();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-2.1,76.1,0.9,0.1,0,0,0,0.1,0.5);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(50).to({_off:false},0).to({regY:0.1,scaleY:0.9,x:-2.2,y:76},6,cjs.Ease.get(1)).wait(116).to({regY:0.5,scaleY:0.1,x:-2.1,y:76.1},6,cjs.Ease.get(1)).to({_off:true},1).wait(79));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("A/KSrMAAAglVMA+VAAAMAAAAlVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(258));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-199.5,-119.5,600,360);


// stage content:
(lib._320x300 = function(mode,startPosition,loop) {
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
			
			var sc1 = wdt/1028;
			var sc2 = hgt/500;
			
			if(wdt>hgt){
				bg.scaleX = 1.55*sc1;
				bg.scaleY = 1.55*sc1;
				fg.scaleX = 1.7*sc1;
				fg.scaleY = 1.7*sc1;
		
				
			} else {
				bg.scaleX = sc2;
				bg.scaleY = sc2;
				fg.scaleX = sc2*0.95;
				fg.scaleY = sc2*0.95;
			}
		
			
		
			
			bg.x =  wdt/2;
			bg.y =  hgt/2;
			fg.x =  wdt/2;
			fg.y =  hgt/2;
			
			
			
				 
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 7
	this.fg = new lib.fg();
	this.fg.parent = this;
	this.fg.setTransform(160,130);

	this.timeline.addTween(cjs.Tween.get(this.fg).wait(1));

	// Слой 2
	this.bg = new lib.hghdfd();
	this.bg.parent = this;
	this.bg.setTransform(240,150);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114,50,1028,500);
// library properties:
lib.properties = {
	width: 320,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1504540714630", id:"bg"},
		{src:"images/320x300_atlas_P_.png?1504540714536", id:"320x300_atlas_P_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;