(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"240x400_4_atlas_", frames: [[0,0,300,400],[0,402,160,41]]}
];


// symbols:



(lib.bg2 = function() {
	this.spriteSheet = ss["240x400_4_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.logo2 = function() {
	this.spriteSheet = ss["240x400_4_atlas_"];
	this.gotoAndStop(1);
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


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AIwEPIAAhSIhcAAIAABSIgaAAIAAi3IAaAAIAABOIBcAAIAAhOIAaAAIAAC3gAEiEPIAAi3IBuAAIAAAXIhUAAIAAA3IBNAAIAAAWIhNAAIAAA8IBVAAIAAAXgADaEPIAAh2IADgdIgCAAIgLAZIgyBRIgIAAIg1hRIgLgZIgBAAIAEAdIAAB2IgZAAIAAi3IAUAAIA9BeIAKATIABAAIAJgUIA6hdIAVAAIAAC3gAhXEPIAAi3IBtAAIAAAXIhTAAIAAA3IBMAAIAAAWIhMAAIAAA8IBVAAIAAAXgAj2EPIAAi0QALgDANgBIAZgBQANAAAOACQANADAMAGQALAGAHALQAHAMAAARQAAAQgGAMQgHALgLAIQgKAHgOAEQgOACgPAAIgFAAIgHAAIgGAAIgFAAIAABEgAjSBtIgKABIAABGIAEABIAGAAIAHABIAEAAIATgCQAJgCAHgDQAHgFAFgHQAFgIAAgMQAAgKgFgHQgEgHgHgEQgHgDgJgCIgRgBIgOAAgAmOEPIAAi3IBuAAIAAAXIhUAAIAAA3IBNAAIAAAWIhNAAIAAA8IBVAAIAAAXgAnXEPIAAifIhYAAIAACfIgaAAIAAi3ICNAAIAAC3gAofhTIgOgBIgPgBIgNgBIAAizIAZgDIAegCQAMABAMACQALACAKAEQAKAGAGAIQAGAJAAANQAAAHgCAHQgCAGgFAGQgEAGgHAEQgHAEgKADIAAABQAIABAIADQAIADAGAGQAGAFADAIQAEAHAAALQAAAOgGALQgHAJgLAIQgKAGgOADQgNAEgOgBIgLAAgAowhqIAGABIAIAAIAIABIAIAAQAJAAAIgCQAIgCAHgEQAGgEAEgGQAEgGAAgJQAAgKgFgGQgFgGgHgDQgHgEgJAAIgSgBIgZAAgAokj3IgMABIAAA7IAPAAIALgBIALgBIAMgEQAGgDAFgEQAEgEADgFQACgEAAgHQAAgJgDgGQgEgFgFgDQgGgDgHgBIgPAAIgRAAgAArhVIAAi0QALgCANgBIAZgCQANAAAOADQANACAMAHQALAGAHALQAHALAAASQAAAQgGAMQgHALgLAHQgKAHgOAEQgOADgPAAIgFAAIgHAAIgGgBIgFAAIAABEgABPj3IgKABIAABHIAEAAIAGAAIAHABIAEAAIATgBQAJgCAHgEQAHgFAFgHQAFgHAAgMQAAgLgFgGQgEgIgHgDQgHgEgJgCIgRgBIgOAAgAhshVIAAi2IBtAAIAAAWIhTAAIAAA4IBNAAIAAAWIhNAAIAAA7IBUAAIAAAXgAjfhVIAAifIg+AAIAAgXICVAAIAAAXIg9AAIAACfgAmjhVIAAi2IBuAAIAAAWIhUAAIAAA4IBNAAIAAAWIhNAAIAAA7IBWAAIAAAXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-58.6,-27,117.3,54.1), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo2();
	this.instance.parent = this;
	this.instance.setTransform(-80,-20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-80,-20.5,160,41), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGjEgIgEgiIiPAAIAAi2IAaAAIAACfIBWAAIAAifIAaAAIAACfIAbAAIAAA5gAo0D7QgPgHgKgMQgLgNgFgRQgFgSAAgVQAAgWAFgSQAHgRAKgMQAKgMAQgHQAPgGATAAQAVAAAPAHQAPAHALAMQAKAMAFASQAFARAAAVQAAAXgGARQgFASgLAMQgKAMgPAGQgQAHgTAAQgVAAgPgHgAo4BtQgOASAAAkQgBAPAEANQADANAGAKQAIAKAJAGQALAFAOAAQAaAAAOgRQAPgSAAglQAAgOgEgNQgDgNgHgKQgGgKgLgGQgJgGgPAAQgZAAgPASgAj3D/IgIgCIAEgWIAGABIAHgBIAGgEQADgDADgFQADgHAEgLQAEgMACgRIAEgrIADg5IBrAAIAAC2IgaAAIAAifIg6AAIgCAvIgFAmQgCARgDANQgEANgFAKQgHAMgJAFQgIAGgKAAIgJgBgAmpD/IgHgCIAEgWIAFABIAHgBIAHgEQACgDAEgFQADgHADgLQAEgMACgRIAFgrIADg5IBrAAIAAC2IgaAAIAAifIg6AAIgDAvIgEAmQgCARgEANQgDANgGAKQgGAMgKAFQgIAGgKAAIgJgBgALvD+IAAhNIgbAGIgyBHIgeAAIAsg/IASgMQgLgBgIgEQgIgEgHgHQgHgHgDgIQgEgJABgMQAAgQAFgLQAHgLAJgGQALgHAOgDQANgDAQAAIAVABQAMABAKACIAAC0gALLBeQgIABgHAEQgGAEgEAHQgEAHAAAKQAAAJAEAHQADAHAHAEQAGAEAJACQAIABAKAAIASAAIAAhDIgIgBIgKgBQgKAAgIACgAJND+IAAh4IABgUIgBAAIgMAUIheB4IgQAAIAAi2IAaAAIAAB5IgCAUIABAAIAOgUIBch5IARAAIAAC2gADQD+IhHhSIgNAAIAABSIgaAAIAAi2IAaAAIAABUIAMgEIBChQIAdAAIhBBOIgMAJIAOAKIBIBVgAg1D+IAAi2IBtAAIAAAXIhTAAIAAA3IBMAAIAAAWIhMAAIAAA8IBVAAIAAAWgAqbD+IhGhSIgNAAIAABSIgaAAIAAi2IAaAAIAABUIAMgEIBChQIAdAAIhBBOIgNAJIAPAKIBIBVgAojhpQgQgHgKgMQgKgMgGgSQgEgRgBgVQAAgXAGgRQAGgSALgMQAKgMAPgGQAPgHAUAAQAUAAAQAHQAPAHAKANQALAMAEARQAFASABAVQAAAWgGASQgFARgLAMQgLAMgPAHQgPAGgTAAQgVAAgPgHgAonj3QgPASAAAlQAAAPAEANQADANAGAKQAHAJAKAGQALAGAOAAQAZAAAOgSQAPgRAAglQAAgPgDgNQgDgNgHgKQgGgKgLgFQgKgGgOAAQgZAAgPARgAldhjIgPgBIgPgBIgMgCIAAizIAZgDIAegBQALAAANACQALACAKAFQAJAFAHAJQAGAIAAAOQAAAHgDAGQgCAHgEAGQgEAGgIAEQgGAEgLADIAAABQAJABAIADQAHADAHAFQAFAGAEAIQAEAHAAALQAAAOgHAKQgGAKgLAHQgLAHgNADQgNADgOAAIgLAAgAluh7IAFABIAIABIAJAAIAIAAQAJAAAIgCQAIgBAHgEQAGgEAEgGQADgGAAgJQAAgKgEgGQgFgGgHgDQgIgEgJAAIgSgBIgYAAgAljkHIgLABIAAA6IAOAAIAMAAIALgBIAMgFQAGgCAEgEQAFgEACgFQADgFAAgGQAAgJgEgGQgDgFgGgDQgFgDgHgBIgPgBIgSABgAAfhlIAAhOIgbAGIgwBIIgeAAIAshAIARgLQgKgCgIgEQgJgEgHgHQgGgGgEgJQgDgJAAgLQAAgQAGgLQAGgLAKgHQAKgHAOgDQAOgDAOAAIAVABQAMABALADIAAC0gAgEkGQgIACgGAEQgGAEgFAGQgDAHAAAKQAAAKADAHQAEAGAGAEQAHAEAIACQAIACAJAAIASAAIAAhEIgHgBIgLAAQgJAAgIABgAhuhlIgUgwIhIAAIgSAwIgaAAIBLi5IAOAAIBKC5gAitjeIgUAzIA4AAIgVgzIgHgcIgBAAgAqShlIAAhSIhcAAIAABSIgaAAIAAi2IAaAAIAABOIBcAAIAAhOIAaAAIAAC2g");
	this.shape.setTransform(-4.5,-148);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-86.5,-176.7,173,213.4), null);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg2();
	this.instance.parent = this;
	this.instance.setTransform(-120,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,300,400);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(-23.5,-149.6);
	this.instance.shadow = new cjs.Shadow("#000000",1,1,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-87.2,-181.6,173.7,218.3), null);


// stage content:
(lib._240x400_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		canvas.style.cursor = "pointer";
		canvas.addEventListener("click", function() {
		    window.callClick();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(129));

	// Слой 13
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(129));

	// Слой 9
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(260,357.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(69).to({_off:false},0).to({x:120,alpha:1},5,cjs.Ease.get(1)).to({x:110},49).to({x:70,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// Слой 12
	this.instance_1 = new lib.Символ7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(265.5,198);
	this.instance_1.alpha = 0;
	this.instance_1.shadow = new cjs.Shadow("#000000",1,1,4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(61).to({_off:false},0).to({x:125.5,alpha:1},5,cjs.Ease.get(1)).to({x:115.5},54).to({x:75.5,alpha:0},5,cjs.Ease.get(1)).wait(4));

	// Слой 11
	this.instance_2 = new lib.Символ9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(205.5,199.6);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:135.5,alpha:1},5,cjs.Ease.get(1)).to({x:134.7},4).to({x:125.5},47).to({x:45.5,alpha:0},5,cjs.Ease.get(1)).wait(68));

	// Слой 2
	this.instance_3 = new lib.Анимация3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(129));

	// Слой 6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape_1.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(129));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(119,199,301,402);
// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/240x400_4_atlas_.png?1486740754590", id:"240x400_4_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;