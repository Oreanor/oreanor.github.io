(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"240x400_5_atlas_", frames: [[0,0,300,400],[0,402,160,41]]}
];


// symbols:



(lib.bg2 = function() {
	this.spriteSheet = ss["240x400_5_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.logo2 = function() {
	this.spriteSheet = ss["240x400_5_atlas_"];
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


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJcEZIAAhYIhjAAIAABYIgdAAIAAjEIAdAAIAABTIBjAAIAAhTIAcAAIAADEgAE4EZIAAjEIB3AAIAAAYIhbAAIAAA7IBTAAIAAAZIhTAAIAAA/IBdAAIAAAZgADrEZIAAh/IADgfIgBAAIgNAbIg2BXIgJAAIg5hYIgLgaIgBAAIAEAfIAAB/IgbAAIAAjEIAWAAIBCBjIAKAVIAAAAIAKgVIA/hjIAXAAIAADEgAheEZIAAjEIB2AAIAAAYIhaAAIAAA7IBSAAIAAAZIhSAAIAAA/IBbAAIAAAZgAkJEZIAAjDQALgCAOgBIAcgBQAOAAAOADQAPACAMAHQAMAGAIANQAHALAAATQABARgIANQgGAMgMAJQgMAIgPADQgOAEgQAAIgGAAIgHgBIgHAAIgGgBIAABKgAjjBqIgLABIAABMIAFABIAHAAIAGAAIAGAAQAKAAAJgBQAKgCAIgEQAIgFAFgHQAFgJAAgNQAAgLgFgHQgFgIgHgEQgIgEgJgCQgKgBgJAAIgPAAgAmtEZIAAjEIB2AAIAAAYIhaAAIAAA7IBSAAIAAAZIhSAAIAAA/IBbAAIAAAZgAn8EZIAAisIhfAAIAACsIgcAAIAAjEICXAAIAADEgApKhOIgPgBIgQgCIgOgCIAAjAIAbgEIAhgBQAMAAANADQANABAKAGQAKAFAHAJQAGAKABAPQgBAGgCAIQgCAHgFAGQgFAHgIAEQgHAFgLADIAAABQAJABAJADQAIADAHAGQAGAGAEAIQAEAJAAALQAAAPgHALQgHAMgLAGQgMAIgOADQgPAEgOAAIgNAAgApchoIAGABIAJAAIAJABIAJAAQAJAAAJgCQAIgCAIgEQAGgFAEgGQAFgGgBgJQAAgMgEgGQgGgHgIgDQgHgEgKAAIgTgBIgbAAgApPkAIgNABIAAA/IAQAAIAMAAIAMgBIANgFQAHgDAEgDQAFgEADgGQADgFAAgIQAAgJgEgGQgEgFgGgDQgGgEgIgBIgQgBIgSAAgAAuhRIAAjCQALgCAOgCIAcgBQAOAAAPADQAOADANAGQALAHAJAMQAHAMAAASQAAASgHAMQgHANgLAIQgNAIgOADQgPAEgQAAIgFAAIgIgBIgHAAIgFgBIAABKgABVj/IgLABIAABMIAEABIAIAAIAGAAIAFAAQAKAAAJgBQALgCAHgEQAJgFAFgIQAEgJAAgMQAAgLgEgIQgFgHgIgEQgIgEgJgCQgJgBgJgBIgPABgAh1hRIAAjEIB2AAIAAAYIhaAAIAAA8IBTAAIAAAYIhTAAIAABAIBbAAIAAAYgAjxhRIAAisIhCAAIAAgYICgAAIAAAYIhCAAIAACsgAnEhRIAAjEIB3AAIAAAYIhbAAIAAA8IBTAAIAAAYIhTAAIAABAIBdAAIAAAYg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-63.2,-28,126.4,56.1), null);


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

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-90.2,-39.2,180.5,78.5), null);


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

	// Слой 3
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.shadow = new cjs.Shadow("#000000",1,1,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-86.5,-38.2,173,76.5), null);


// stage content:
(lib._240x400_5 = function(mode,startPosition,loop) {
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
	this.instance.setTransform(120,357.5,0.9,0.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(62).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},5,cjs.Ease.get(1)).wait(56).to({regX:0.1,regY:0.1,y:357.6},0).to({scaleX:1.1,scaleY:1.1,x:120.1,y:357.5,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// Слой 12
	this.instance_1 = new lib.Символ7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120,50.9,0.9,0.91,0,0,0,0.1,0);
	this.instance_1.alpha = 0;
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(62).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,alpha:1},5,cjs.Ease.get(1)).wait(56).to({regX:0.1,regY:0.1,y:51},0).to({regX:0,regY:0,scaleX:1.1,scaleY:1.1,y:50.9,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// Слой 11
	this.instance_2 = new lib.Символ9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(120,48,0.9,0.9);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,y:48.1,alpha:1},4,cjs.Ease.get(1)).wait(52).to({regX:0.1,regY:0.1,x:120.1},0).to({regX:0,regY:0,scaleX:1.1,scaleY:1.1,x:120,y:48,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(67));

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
		{src:"images/240x400_5_atlas_.png?1486756409905", id:"240x400_5_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;