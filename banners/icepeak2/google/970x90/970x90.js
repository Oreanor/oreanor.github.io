(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"970x90_atlas_NP_", frames: [[0,420,728,135],[0,211,728,207],[0,0,728,209]]}
];


// symbols:



(lib._0 = function() {
	this.spriteSheet = ss["970x90_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._1 = function() {
	this.spriteSheet = ss["970x90_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["970x90_atlas_NP_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.legal2 = function() {
	this.initialize(img.legal2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,12);// helper functions:

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


(lib.yy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(-120,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.yy, new cjs.Rectangle(-120,-200,728,209), null);


(lib.vbnvb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AABBFQgJgEgGgLQgGgLAAgRIAAgTIgYAAIAAA/IgbAAIAAiMIAbAAIAAA5IAYAAIAAgMQAAgQAGgMQAGgKAJgEQALgFAOAAQAOAAAKAFQAKAEAGAKQAGALAAARIAAAzQAAAQgGAMQgGALgKAEQgKAEgOAAQgOAAgLgEgAALgtQgFAHAAALIAAA3QAAALAFAGQAGAHAJgBQAJABAEgHQAFgFAAgMIAAg3QAAgLgFgHQgEgFgJAAQgJAAgGAFg");
	this.shape.setTransform(78.7,-2.3,1.819,1.819);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAUBGIAAg1QAAgcADgTIgmBkIgdAAIAAiMIAZAAIAABHIgCASIgCANIAnhmIAdAAIAACMg");
	this.shape_1.setTransform(53.5,-2.3,1.819,1.819);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAXBVIAAgdIhHAAIAAiMIAbAAIAAB3IAiAAIAAh3IAbAAIAAB3IAJAAIAAAyg");
	this.shape_2.setTransform(33.8,0.3,1.819,1.819);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAPBGIgWg3IgKANIAAAqIgbAAIAAiMIAbAAIAAA+IAfg+IAeAAIgjA+IAlBOg");
	this.shape_3.setTransform(14.1,-2.3,1.819,1.819);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglBGIAAiMIBLAAIAAAXIgwAAIAAAhIArAAIAAAUIgrAAIAAArIAwAAIAAAVg");
	this.shape_4.setTransform(-4.1,-2.3,1.819,1.819);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgyBGIAAgUQACABAHAAQAEAAABgBQACgBACgGIACgRIAAhhIBRAAIAACMIgbAAIAAh2IgbAAIAAA1QAAAYgDAPQgDAPgHAHQgGAHgMAAQgJAAgHgCg");
	this.shape_5.setTransform(-24,-2.1,1.819,1.819);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgyBGIAAgUQACABAGAAQAEAAACgBQACgBABgGIADgRIAAhhIBRAAIAACMIgbAAIAAh2IgbAAIAAA1QAAAYgEAPQgDAPgGAHQgHAHgLAAQgJAAgHgCg");
	this.shape_6.setTransform(-45,-2.1,1.819,1.819);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgtAZIAAgwQABgTAFgKQAHgLAJgEQAKgFANAAQAPAAAKAFQAKAFAFAKQAGAMgBARIAAAwQABARgGALQgFALgKAFQgKAEgPAAQgsAAgBgwgAgSgbIAAA4QABAXARgBQAJAAAFgFQAEgGAAgLIAAg4QAAgLgEgGQgFgHgJABQgRAAgBAXg");
	this.shape_7.setTransform(-64.6,-2.3,1.819,1.819);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAQBGIgXg3IgLANIAAAqIgbAAIAAiMIAbAAIAAA+IAgg+IAeAAIgkA+IAlBOg");
	this.shape_8.setTransform(-83.4,-2.3,1.819,1.819);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.vbnvb, new cjs.Rectangle(-91.7,-15.6,183.5,31.3), null);


(lib.uyu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(-120,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.uyu, new cjs.Rectangle(-120,-200,728,207), null);


(lib.uu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._0();
	this.instance.parent = this;
	this.instance.setTransform(-120,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.uu, new cjs.Rectangle(-120,-200,728,135), null);


(lib.hthhh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhHBDQADgRAggMIAtAAIAGgVIhJAAQAKgYAYgEIAvAAIAHgaIhNAAQAHgWAZgHIBXAAIglCFg");
	this.shape.setTransform(-51,-0.1,1.819,1.819);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E76720").s().p("AguAwQgTgUAAgcQAAgaATgVQATgTAbAAQAbAAAUATQATAUAAAbQAAAcgTAUQgUATgbAAQgbAAgTgTg");
	this.shape_1.setTransform(85.3,0.1,1.819,1.819);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAABDQgHghgDgKQgIgOgHAAIgYAAIAJgcIAbAAQANABAGgQIAKghIAjAAIgRA3QgDALgPAGIATA9g");
	this.shape_2.setTransform(59.2,0.1,1.819,1.819);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgjBCIAkiDIAjAAIgkCDg");
	this.shape_3.setTransform(44.8,0,1.819,1.819);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AANBDIAJgeIgxAAIAIgaIAwAAIAOgsIgeAAQgSAAgJAEQgJAGgEANIgXBMIghAAIAbhfQAEgSAQgKQANgJAQAAIBbAAIglCFg");
	this.shape_4.setTransform(25.3,0.1,1.819,1.819);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhRBDIAliFIB9AAIgUA3QgEALgLAGQgKAGgMAAIgpAAIAJgcIAbAAQAKAAAGgLQADgFAAgGIg2AAIgdBpg");
	this.shape_5.setTransform(-25.5,0.1,1.819,1.819);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhHBDQADgQAggNIAtAAIAGgVIhJAAQAKgYAYgFIAvAAIAHgZIhNAAQAHgWAagHIBWAAIgmCFg");
	this.shape_6.setTransform(-0.2,0.1,1.819,1.819);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgvBDQgIAAgFgEQgFgDAAgIIAAgDIAZhgQAEgKAIgFQAHgEAQAAIBHAAQgCALgOAKIgOAIIgiAAQgFAAgCADQgDABgDAFIgRBBIAJABIA8AAIgFAKQgEAKgHAFQgIAEgXAAg");
	this.shape_7.setTransform(-73.9,0.1,1.819,1.819);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgiBDIAiiFIAjAAIgjCFg");
	this.shape_8.setTransform(-91,0.1,1.819,1.819);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AnsCBQhEAAgcg2QgIgRgEgVIgCgSIAAglQAAhEA3gcQAbgOAcAAIPZAAQBEAAAbA2QAOAcABAcIAAAlQAABEg2AcQgSAJgVADIgRACgAohhrQgxAZABBAIAAAlQAAAIACAKQACATAJAQQAZAxA/AAIPZAAQAIAAAJgCQATgDAQgIQAxgZAAhAIAAglQAAgcgNgZQgZgxg/AAIvZAAQgcAAgZANg");
	this.shape_9.setTransform(0,0,1.819,1.819);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AnsB9QhCAAgag1QgJgQgDgUIgCgRIAAglQAAhCA1gbQAbgNAaAAIPZAAQBCAAAbA1QANAaAAAbIAAAlQAABDg1AaQgQAIgUAEIgRABg");
	this.shape_10.setTransform(0,0,1.819,1.819);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hthhh, new cjs.Rectangle(-109.6,-23.5,219.4,47.1), null);


(lib.hnnn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AARA/IAAgvQAAgdAEgOIgiBaIgaAAIAAh9IAXAAIgCBPIgCALIAihaIAaAAIAAB9g");
	this.shape.setTransform(43.1,0,1.819,1.819);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmA/IAAh9IAsAAQAIAAAJAGQAIAFAEAIQAEAJAAAJQAAALgFAIQgEAIgHAFQgHAEgLAAIgTAAIAAA0gAgOgGIALAAQARAAAAgTQAAgSgRAAIgLAAg");
	this.shape_1.setTransform(26.1,0,1.819,1.819);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgnAWIAAgrQAAgPAFgJQAFgKAJgFQAJgDALAAQAMAAAKADQAIAFAGAJQAEAKAAAPIAAArQAAAQgEAJQgGAKgIAEQgIADgOAAQgnABAAgrgAgPgYIAAAyQAAATAPABQAIAAAEgGQAEgFAAgJIAAgyQAAgIgEgHQgEgFgIAAQgPAAAAAUg");
	this.shape_2.setTransform(8.7,0,1.819,1.819);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AANA/IgTgzIgJANIAAAmIgYAAIAAh9IAYAAIAAA3IAbg3IAbAAIgfA3IAgBGg");
	this.shape_3.setTransform(-7.9,0,1.819,1.819);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgoAWIAAgrQABgNAFgLQAEgJAKgGQAKgDAKAAQANAAAIADQAJAFAGAJQAEALAAAOIAAArQAAAOgEALQgGAKgJAEQgHADgOAAQgoABAAgrgAgPgYIAAAyQAAATAPABQAJAAADgGQAEgEAAgKIAAgyQAAgKgEgFQgEgFgIAAQgPAAAAAUg");
	this.shape_4.setTransform(-25.6,0,1.819,1.819);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAQA/IAAhqIgeAAIAABqIgYAAIAAh9IBNAAIAAB9g");
	this.shape_5.setTransform(-43.2,0,1.819,1.819);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hnnn, new cjs.Rectangle(-50.3,-11.7,100.6,23.5), null);


(lib.ghfghfgh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAGIgEAHIgFgEIAFgHIgJgCIADgGIAIADIAAgJIAFAAIAAAJIAIgDIADAGIgJACIAGAGIgGAFg");
	this.shape.setTransform(27.9,-12.1,1.819,1.819);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgiAUIAAgmQAAgNAEgJQAEgIAIgEQAJgEAJAAQALAAAIAEQAIAEAEAIQAEAJAAANIAAAmQAAANgEAJQgEAIgIADQgHAEgMAAQgiAAAAglgAgNgVIAAAsQAAARANAAQAHAAADgEQAEgFAAgIIAAgrQAAgJgEgFQgDgFgHAAQgNAAAAASg");
	this.shape_1.setTransform(57.6,-1.4,1.819,1.819);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAXBCIAAgWIgtAAIAAAWIgUAAIAAgnIAHAAIAFgMIADgMIAChEIA9AAIAABcIAHAAIAAAngAgFgXQAAATgCAJIgHAWIAdAAIAAhLIgUAAg");
	this.shape_2.setTransform(41.4,0.6,1.819,1.819);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AASA3IgGgdIgWAAIgHAdIgWAAIAbhtIAcAAIAYBtgAgHAKIARAAIgJgyg");
	this.shape_3.setTransform(18.9,-1.4,1.819,1.819);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAMA3IgRgsIgIALIAAAhIgVAAIAAhtIAVAAIAAAwIAYgwIAXAAIgcAwIAdA9g");
	this.shape_4.setTransform(4.4,-1.4,1.819,1.819);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAXBCIAAgWIgtAAIAAAWIgUAAIAAgnIAHAAIAFgMIADgMQABgFAAgJIABg2IA9AAIAABcIAHAAIAAAngAgFgXQAAATgCAJQgCALgFALIAdAAIAAhLIgUAAg");
	this.shape_5.setTransform(-11.9,0.6,1.819,1.819);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAPA3IAAgqQAAgWADgPIgeBPIgWAAIAAhtIAUAAIAAA3IgDAYIAehPIAWAAIAABtg");
	this.shape_6.setTransform(-28.2,-1.4,1.819,1.819);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAMA3IgRgsIgIALIAAAhIgVAAIAAhtIAVAAIAAAwIAYgwIAXAAIgcAwIAdA9g");
	this.shape_7.setTransform(-42.9,-1.4,1.819,1.819);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZAvQgHgJAAgRIAAgnQAAgTAIgKQAJgJAQAAQAJAAAJAEQAGAEAFAHQAEAHgBALIAAAFIgUAAIAAgDQgBgJgCgFQgDgEgGAAQgHAAgCAEQgDAFAAAJIAAAqQAAALACAEQAEAFAGgBQAFABAEgFQADgEAAgLIAAgGIAUAAIAAAGQAAALgCAHQgDAJgIAEQgHAFgMAAQgSAAgIgKg");
	this.shape_8.setTransform(-57.8,-1.4,1.819,1.819);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ghfghfgh, new cjs.Rectangle(-63.9,-14.5,127.9,27), null);


(lib.gh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AABAsQgGgDgDgHQgEgGAAgLIAAgMIgPAAIAAAoIgRAAIAAhYIARAAIAAAjIAPAAIAAgHQAAgLAEgHQADgGAGgDQAHgDAJAAQAIAAAHADQAGADAEAGQADAHABALIAAAgQgBALgDAGQgEAGgGAEQgIACgHAAQgJAAgHgCgAAIgcQgEAEAAAHIAAAjQAAAHAEAEQACAEAHAAQAFAAADgEQADgFAAgGIAAgjQAAgFgDgGQgDgDgFAAQgHAAgCADg");
	this.shape.setTransform(82.8,0,1.819,1.819);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAsIAAgNIABAAIABABIADAAQAFAAACgHIgYhFIATAAIAMAuIAOguIATAAIgdBSQgEAEgBACQgDABgFAAQgGAAgEgBg");
	this.shape_1.setTransform(67.2,0.2,1.819,1.819);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AALAtIAAgqIgVAAIAAAqIgRAAIAAhZIARAAIAAAjIAVAAIAAgjIARAAIAABZg");
	this.shape_2.setTransform(54.7,0,1.819,1.819);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAeAtIgPgkIgGAIIAAAcIgQAAIAAgcIgHgIIgPAkIgTAAIAYgyIgXgnIATAAIAVAnIAAgnIAQAAIAAAnIAUgnIATAAIgWAnIAXAyg");
	this.shape_3.setTransform(39.3,0,1.819,1.819);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAZAtIAAhZIARAAIAABZgAgpAtIAAhZIARAAIAAAkIAPAAQAFAAAEACQAEADACADIAFAHQABAEAAAFQAAANgGAIQgEAHgKABgAgYAgIAKAAQAFAAADgEQACgDAAgHQAAgHgDgDQgCgDgGAAIgJAAg");
	this.shape_4.setTransform(21.3,0,1.819,1.819);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfAsIAAgMIAGAAIADgBQAAAAABgBQAAAAAAgBQABAAAAgBQAAgBAAAAIABgKIAAg9IAzAAIAABYIgRAAIAAhLIgRAAIAAAhQAAAMgCANQgBAJgFAFQgEAEgHAAIgKgBg");
	this.shape_5.setTransform(5.3,0.2,1.819,1.819);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcAQIAAgeQAAgMAEgGQADgHAHgDQAHgDAHAAQAJAAAGADQAGACAEAIQAEAGAAAMIAAAeQAAAMgEAGQgDAHgHADQgGACgJAAQgcAAAAgegAgLgQIAAAjQAAAOALAAQAGAAADgEQACgDAAgHIAAgjQAAgIgCgDQgDgEgGAAQgLAAAAAPg");
	this.shape_6.setTransform(-7.1,0,1.819,1.819);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AALAtIAAgqIgVAAIAAAqIgRAAIAAhZIARAAIAAAjIAVAAIAAgjIARAAIAABZg");
	this.shape_7.setTransform(-19.6,0,1.819,1.819);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbAtIAAhZIAfAAQAIABAFADQAEADAEAGQADAGAAAHQAAAIgDAGQgEAGgFADQgFADgHAAIgOAAIAAAlgAgKgEIAJAAQALAAAAgOQAAgMgLAAIgJAAg");
	this.shape_8.setTransform(-31.7,0,1.819,1.819);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgcAQIAAgeQAAgMAEgGQADgGAHgEQAHgDAHAAQAJAAAHADQAGADADAHQAEAGAAAMIAAAeQAAAMgEAGQgCAGgHAEQgIACgIAAQgcAAAAgegAgKgQIAAAjQAAAOAKAAQAGAAADgEQADgDAAgHIAAgjQAAgHgDgEQgDgEgGAAQgKAAAAAPg");
	this.shape_9.setTransform(-44.2,0,1.819,1.819);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgXAtIAAhZIAvAAIAAAOIgeAAIAABLg");
	this.shape_10.setTransform(-55,0,1.819,1.819);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAOAtIgEgYIgSAAIgGAYIgSAAIAXhZIAWAAIATBZgAgGAIIAOAAIgHgpg");
	this.shape_11.setTransform(-72.1,0,1.819,1.819);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AALAtIAAgqIgVAAIAAAqIgRAAIAAhZIARAAIAAAjIAVAAIAAgjIARAAIAABZg");
	this.shape_12.setTransform(-84.4,0,1.819,1.819);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E76720").s().p("AnkBaQglAAgagaQgbgbAAglQAAgkAbgaQAagbAlAAIPJAAQAlAAAaAbQAbAaAAAkQAAAlgbAbQgaAaglAAg");
	this.shape_13.setTransform(0,0,1.819,1.819);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.gh, new cjs.Rectangle(-104.5,-16.3,209.1,32.8), null);


(lib.fghh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcA9IAAgSIAIACQAGAAAEgKIgjhhIAbAAIASBBIAThBIAaAAIgiBkQgCAIgEAHQgFAGgCACQgFADgGAAQgJAAgGgDg");
	this.shape.setTransform(53.8,0,1.819,1.819);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQA+IAAg6IgfAAIAAA6IgXAAIAAh7IAXAAIAAAwIAfAAIAAgwIAXAAIAAB7g");
	this.shape_1.setTransform(36.4,-0.2,1.819,1.819);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARA+IAAgvQAAgbADgPIghBZIgaAAIAAh7IAWAAIAAA+IgDAbIAihZIAaAAIAAB7g");
	this.shape_2.setTransform(18.9,-0.2,1.819,1.819);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag8A+IAAh7IAXAAIAABoIAaAAIAAhoIAXAAIAABoIAaAAIAAhoIAXAAIAAB7g");
	this.shape_3.setTransform(-2.7,-0.2,1.819,1.819);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgmA+IAAh7IAsAAQAKAAAHAEQAIAFAEAJQAEAHAAALQAAALgEAIQgEAHgIAFQgIAGgJAAIgUAAIAAAygAgOgGIAMAAQARAAAAgSQAAgTgRAAIgMAAg");
	this.shape_4.setTransform(-23.6,-0.2,1.819,1.819);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggA+IAAh7IBBAAIAAAUIgqAAIAAAcIAnAAIAAARIgnAAIAAAnIAqAAIAAATg");
	this.shape_5.setTransform(-39.4,-0.2,1.819,1.819);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AglA+IAAh7IAqAAQALAAAHADQAHAFADAGQAEAKAAAGQAAAFgDAHQgBAGgEAEQgEAEgFABQAJAEAEAGQAFAHAAAMQAAAMgDAHQgEAKgGAEQgHAEgIAAgAgOAsIAPAAQAHABADgFQADgEAAgLQAAgTgNAAIgPAAgAgOgLIANAAQANAAABgRQgBgIgCgEQgEgDgHAAIgNAAg");
	this.shape_6.setTransform(-55.1,-0.2,1.819,1.819);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fghh, new cjs.Rectangle(-62,-11.5,124.2,23.1), null);


(lib.cvbnvbnbv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhOCRIB+khIAbAAIh+EhgAAyCCQgNgJgEgPQgDgQAAgUQAAgTADgSQAEgOANgJQANgJAZAAQAaAAAMAJQANAJAEAOQADAOAAAXQAAAXgDANQgEAPgNAJQgMAJgaAAQgZAAgNgJgABGAmQgEAIAAAYQAAAVAEAKQAFAKANAAQAOAAADgKQAFgJAAgWQAAgWgFgKQgEgKgNAAQgOAAgEAKgAh9gJQgNgJgEgPQgDgNAAgXQAAgXADgOQAEgNANgKQANgJAZAAQAaAAAMAJQANAKAEANQADAOAAAXQAAAXgDANQgEAPgNAJQgNAJgZAAQgZAAgNgJgAhlhqQgFAFgBAJQgCAIAAAPQAAAVAEALQAFAJAOAAQAOAAADgJQAEgLAAgVQAAgVgEgLQgEgKgNAAQgKAAgFAFg");
	this.shape.setTransform(8,-0.2,1.349,1.349);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmCIQgSgJgLgRQgKgRAAgWIAAiNQAAgWAKgQQALgRASgJQARgKAWAAQAXAAASAJQARAJAKARQAJAQAAAXIAACNQAAAWgJARQgKARgRAJQgSAJgXAAQgVAAgSgJgAgShdQgIAHAAAMIAACVQAAAMAIAIQAIAHALAAQAKAAAIgHQAIgIAAgMIAAiVQAAgMgHgHQgIgHgLAAQgLAAgIAHg");
	this.shape_1.setTransform(-26.6,0.5,1.349,1.349);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag6B8QgTgWAAgiIAAgQIAxAAIAAAKQAAApAbAAQARAAAFgLQAFgKAAgXQAAgagIgLQgGgLgSAAIgWAAIAAglIAPAAQAWAAAHgNQAHgOAAgTQAAgegYAAQgNAAgHAJQgHAJAAAQIAAAJIgwAAIAAgLQAAghAUgUQAVgVAiAAQAVAAASAJQARAIAJAQQAKAQAAAVQAAAbgKAPQgKAPgUAHQAsAKAAA9QAAAegJASQgKATgSAIQgRAJgbAAQgkAAgTgVg");
	this.shape_2.setTransform(-52.7,0.5,1.349,1.349);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E76720").s().p("AjmDOQhIAAg0g0Qg0gzAAhJIAAg7QAAhIA0g0QA0g0BIAAIHNAAQBJAAA0A0QAzAzAABJIAAA7QAABJgzAzQg0A0hJAAg");
	this.shape_3.setTransform(-18,0,1.349,1.349);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cvbnvbnbv, new cjs.Rectangle(-72.8,-27.7,109.8,55.5), null);


(lib.cnbcvnb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.legal2();
	this.instance.parent = this;
	this.instance.setTransform(-118,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cnbcvnb, new cjs.Rectangle(-118,-13,620,12), null);


(lib.cbnbvnb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAOA+IgUgxIgKAMIAAAlIgXAAIAAh7IAXAAIAAA2IAcg2IAbAAIgfA2IAgBFg");
	this.shape.setTransform(55.7,0,1.819,1.819);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAUA+IgGggIgZAAIgIAgIgZAAIAfh7IAfAAIAbB7gAgIALIATAAIgKg5g");
	this.shape_1.setTransform(38.4,0,1.819,1.819);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggA+IAAh7IBBAAIAAAUIgqAAIAAAcIAmAAIAAASIgmAAIAAAmIAqAAIAAATg");
	this.shape_2.setTransform(22.8,0,1.819,1.819);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgmA+IAAh7IAsAAQAKAAAHAEQAIAGAEAIQAEAJAAAJQAAAKgEAJQgFAHgHAGQgJAFgJAAIgTAAIAAAygAgOgGIAMAAQAQAAAAgTQAAgSgQAAIgMAAg");
	this.shape_3.setTransform(7,0,1.819,1.819);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggA+IAAh7IBBAAIAAAUIgqAAIAAAcIAmAAIAAASIgmAAIAAAmIAqAAIAAATg");
	this.shape_4.setTransform(-8.9,0,1.819,1.819);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdA2QgIgMAAgTIAAgsQAAgVAKgLQAKgLASAAQAMAAAIAEQAIAFAFAJQAEAIAAALIAAAGIgYAAIAAgDQAAgMgDgEQgDgFgIAAQgGAAgEAFQgDAFAAALIAAAxQAAALADAFQADAFAHAAQAHAAAEgFQADgFAAgLIAAgHIAYAAIAAAFQAAALgDAKQgEAKgIAGQgJAFgOAAQgUAAgJgLg");
	this.shape_5.setTransform(-24.7,0,1.819,1.819);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgLA+IAAh7IAXAAIAAB7g");
	this.shape_6.setTransform(-36.6,0,1.819,1.819);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdA2QgIgLAAgUIAAgsQAAgXAJgJQALgLARAAQANAAAIAEQAIAFAFAJQAEAIAAALIAAAGIgXAAIAAgDQgBgLgDgFQgDgFgIAAQgGAAgEAFQgDAEAAAMIAAAxQAAAMADAEQADAFAHAAQAHAAAEgFQADgGABgKIAAgHIAXAAIAAAFQAAANgEAIQgDAKgIAGQgJAFgOAAQgUAAgJgLg");
	this.shape_7.setTransform(-56,0,1.819,1.819);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cbnbvnb, new cjs.Rectangle(-62.9,-11.8,126,23.7), null);


// stage content:
(lib._970x90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.currLoop = 0;
	}
	this.frame_248 = function() {
		this.currLoop++;
		if (this.currLoop == 2){this.stop()}
	}
	this.frame_256 = function() {
		this.gotoAndPlay(2)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(248).call(this.frame_248).wait(8).call(this.frame_256).wait(1));

	// Слой 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EhLsgG8MCXZAAAIAAN5MiXZAAAg");
	this.shape.setTransform(485,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(257));

	// logo
	this.instance = new lib.hthhh();
	this.instance.parent = this;
	this.instance.setTransform(812,45.2,1.094,0.109,0,0,0,0,2.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90).to({_off:false},0).to({regY:0.1,scaleY:1.09,y:45.1},8,cjs.Ease.get(1)).wait(61).to({regY:2.1,scaleY:0.12,y:45.2},6,cjs.Ease.get(1)).to({_off:true},1).wait(91));

	// Символ 15
	this.instance_1 = new lib.gh();
	this.instance_1.parent = this;
	this.instance_1.setTransform(434.3,45,1.2,1.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(82).to({_off:false},0).to({scaleY:1.24,skewX:-13.7,x:150.9,alpha:1},5,cjs.Ease.get(1)).to({scaleY:1.2,skewX:0,x:158.3},2).wait(70).to({regX:0.1,regY:0.1,scaleY:1.22,skewX:-10.4,x:152.4,y:45.1},0).to({regX:0,regY:0,x:-123.6,y:45,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(91));

	// Символ 14
	this.instance_2 = new lib.vbnvb();
	this.instance_2.parent = this;
	this.instance_2.setTransform(692.1,48,1.2,1.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(83).to({_off:false},0).to({scaleY:1.24,skewX:-14.4,x:408.6,alpha:1},5,cjs.Ease.get(1)).to({scaleY:1.2,skewX:0,x:416.1},2).wait(68).to({scaleY:1.23,skewX:-12.6},0).to({x:140.1,alpha:0},6,cjs.Ease.get(1)).to({_off:true},2).wait(91));

	// Символ 13
	this.instance_3 = new lib.cvbnvbnbv();
	this.instance_3.parent = this;
	this.instance_3.setTransform(774.2,45.3,0.9,0.9,0,0,0,0.6,0.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({regY:0.3,scaleY:0.91,skewX:-7.6,x:579.3,y:45.2,alpha:1},5,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,scaleY:0.9,skewX:0,x:588.2,y:45.1},2,cjs.Ease.get(1)).wait(69).to({scaleY:0.9,skewX:-5.3,x:583.7},0).to({regX:0,regY:0,x:399.2,y:45,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(172));

	// Символ 12
	this.instance_4 = new lib.ghfghfgh();
	this.instance_4.parent = this;
	this.instance_4.setTransform(662.3,46.2,1.2,1.2);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleY:1.23,skewX:-13.6,x:416.3,alpha:1},5,cjs.Ease.get(1)).to({scaleY:1.2,skewX:0,x:428.3},2).wait(69).to({scaleY:1.23,skewX:-13.6,x:422.3},0).to({x:176.4,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(173));

	// Layer 1
	this.instance_5 = new lib.cnbcvnb();
	this.instance_5.parent = this;
	this.instance_5.setTransform(124,87);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(1)).wait(64).to({alpha:0},7).to({_off:true},1).wait(172));

	// Символ 10
	this.instance_6 = new lib.cbnbvnb();
	this.instance_6.parent = this;
	this.instance_6.setTransform(886.4,45.6,1.268,1.268);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(186).to({_off:false},0).to({regX:0.1,regY:0.1,scaleY:1.34,skewX:-18.7,x:639.8,y:45.8,alpha:1},7,cjs.Ease.get(1)).to({regX:0,regY:0,scaleY:1.27,skewX:0,x:645.4,y:45.6},3,cjs.Ease.get(1)).wait(55).to({scaleY:1.29,skewX:-9.6,x:639},0).to({scaleY:1.38,skewX:-23,x:404.3,alpha:0},5).wait(1));

	// Символ 9
	this.instance_7 = new lib.fghh();
	this.instance_7.parent = this;
	this.instance_7.setTransform(714.4,47,1.268,1.268,0,0,0,0,1.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(185).to({_off:false},0).to({regX:0.1,scaleY:1.37,skewX:-21.6,x:467.9,alpha:1},7,cjs.Ease.get(1)).to({regY:0.1,scaleY:1.27,skewX:0,x:473.5,y:45.8},3,cjs.Ease.get(1)).wait(55).to({scaleY:1.31,skewX:-14.6,x:467.2},0).to({regX:0,regY:0,scaleY:1.34,skewX:-19.1,x:232.4,y:45.6,alpha:0},5).to({_off:true},1).wait(1));

	// Символ 8
	this.instance_8 = new lib.hnnn();
	this.instance_8.parent = this;
	this.instance_8.setTransform(556.6,47,1.268,1.268,0,0,0,0,1.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(184).to({_off:false},0).to({regX:0.1,scaleY:1.28,skewX:-8.9,x:309.9,alpha:1},7,cjs.Ease.get(1)).to({regY:0.1,scaleY:1.27,skewX:0,x:315.7,y:45.8},3,cjs.Ease.get(1)).wait(55).to({scaleY:1.3,skewX:-12.1,x:309.4},0).to({regX:0,regY:0,scaleY:1.34,skewX:-18.9,x:74.6,y:45.6,alpha:0},5).to({_off:true},1).wait(2));

	// Символ 3
	this.instance_9 = new lib.yy();
	this.instance_9.parent = this;
	this.instance_9.setTransform(159.9,186.4,1.332,1.332);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({y:225.9,alpha:1},84).to({y:266.4,alpha:0},86).to({_off:true},1).wait(86));

	// Символ 2
	this.instance_10 = new lib.uyu();
	this.instance_10.parent = this;
	this.instance_10.setTransform(159.9,228.5,1.332,1.332);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:267.7},84).to({_off:true},1).wait(86).to({_off:false,y:186.5,alpha:0},0).to({y:227.6,alpha:1},85).wait(1));

	// Символ 1
	this.instance_11 = new lib.uu();
	this.instance_11.parent = this;
	this.instance_11.setTransform(159.9,256.4,1.332,1.332);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(85).to({_off:false},0).to({y:229.2,alpha:1},86).to({y:197.7,alpha:0},85).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(484.5,-35,971,317.9);
// library properties:
lib.properties = {
	width: 970,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/legal2.png?1508851737016", id:"legal2"},
		{src:"images/970x90_atlas_NP_.jpg?1508851736995", id:"970x90_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;