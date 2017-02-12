(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"240x400_6_atlas_", frames: [[0,0,240,400],[0,402,160,41]]}
];


// symbols:



(lib.bg3 = function() {
	this.spriteSheet = ss["240x400_6_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.logo2 = function() {
	this.spriteSheet = ss["240x400_6_atlas_"];
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
	this.shape.graphics.f("#FFFFFF").s().p("AAoCfIAAiTIhOAAIAACTIg9AAIAAk9IA9AAIAAB7IBOAAIAAh7IA8AAIAAE9g");
	this.shape.setTransform(63.4,18.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhUCfIAAk9ICpAAIAAAxIhsAAIAABKIBiAAIAAAvIhiAAIAABiIBsAAIAAAxg");
	this.shape_1.setTransform(41.2,18.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABSCfIAAkfIAAAAIg9EfIgqAAIg8keIgBAAIAAEeIg4AAIAAk9IBhAAIApDNIAqjNIBhAAIAAE9g");
	this.shape_2.setTransform(14.4,18.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhUCfIAAk9ICpAAIAAAxIhsAAIAABKIBiAAIAAAvIhiAAIAABiIBsAAIAAAxg");
	this.shape_3.setTransform(-11.7,18.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhiCfIAAk9IBxAAQAaABATAMQASANALAUQAKAWAAAZQAAAbgLAVQgKAVgTANQgTAMgaAAIgzAAIAACCgAglgQIAeAAQAWAAALgNQALgMAAgXQAAgXgLgLQgLgNgWAAIgeAAg");
	this.shape_4.setTransform(-34.3,18.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhUCfIAAk9ICpAAIAAAxIhtAAIAABKIBjAAIAAAvIhjAAIAABiIBtAAIAAAxg");
	this.shape_5.setTransform(-56.4,18.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAoCfIAAkMIhPAAIAAEMIg8AAIAAk9IDHAAIAAE9g");
	this.shape_6.setTransform(-79.3,18.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhiCfIAAk9IBxAAQAaAAATANQASAMALAVQAKAWAAAZQAAAagLAWQgKAVgTAMQgTANgaABIgzAAIAACBgAglgQIAeAAQAWAAALgNQALgMAAgXQAAgXgLgMQgLgLgWgBIgeAAg");
	this.shape_7.setTransform(7.8,-22);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhUCfIAAk9ICpAAIAAAwIhtAAIAABKIBjAAIAAAwIhjAAIAABjIBtAAIAAAwg");
	this.shape_8.setTransform(-14.3,-22);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdCfIAAkNIhLAAIAAgwIDRAAIAAAwIhLAAIAAENg");
	this.shape_9.setTransform(-36.3,-22);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhUCfIAAk9ICpAAIAAAwIhtAAIAABKIBjAAIAAAwIhjAAIAABjIBtAAIAAAwg");
	this.shape_10.setTransform(-57.6,-22);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhgCfIAAk9IBuAAQAcAAASALQARALAHARQAIASAAAUQAAAQgEAPQgGAPgKALQgJAKgNADQAYAJAMARQALATAAAfQAAAcgIAUQgIAWgQAMQgQAMgYAAgAgkBxIAmAAQARABAIgLQAIgMAAgaQAAgYgIgNQgIgNgRAAIgmAAgAgkgdIAgAAQASAAAKgLQAIgLABgVQgBgUgHgLQgJgKgTABIghAAg");
	this.shape_11.setTransform(-79.6,-22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-93.5,-50.2,173,94.7), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAQBPIAAg8IgHAAIgWA8IgoAAIAehFQgKgGgGgKQgGgMgBgOQAAgNAFgKQAGgKAJgHQAKgGANAAIA5AAIAACdgAgDgtQgFAGAAAJQAAAJAFAGQADAGAHAAIAJAAIAAgoIgJAAQgHAAgDAEg");
	this.shape.setTransform(81.8,1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AANBPIAAglIACgTIADgVIACgSIggBfIglAAIAAidIAlAAIAAAnIgCATIgCAVIgCATIABAAIAehiIAkAAIAACdg");
	this.shape_1.setTransform(70,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AASBfIAAggIhHAAIAAidIAlAAIAAB/IAZAAIAAh/IAlAAIAAB/IAJAAIAAA+g");
	this.shape_2.setTransform(57.9,3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAMBPIgRg3IgKASIAAAlIgkAAIAAidIAkAAIAAA/IAag/IApAAIgjBGIAjBXg");
	this.shape_3.setTransform(45.8,1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgrBPIAAidIBXAAIAAAeIgxAAIAAAfIAsAAIAAAdIgsAAIAAAlIAxAAIAAAeg");
	this.shape_4.setTransform(34.5,1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgyBOIgJgDIAAgbIAEABIAFABQAEAAACgCQACgCACgGIABgQIAAgdIAAhKIBjAAIAACdIgmAAIAAh/IgYAAIAAA1QAAAegEAQQgEARgIAHQgIAGgNAAQgGAAgFgCg");
	this.shape_5.setTransform(21.9,1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgyBOIgJgDIAAgbIAEABIAFABQAEAAACgCQACgCACgGIABgQIAAgdIAAhKIBjAAIAACdIgmAAIAAh/IgYAAIAAA1QAAAegEAQQgEARgIAHQgIAGgNAAQgGAAgFgCg");
	this.shape_6.setTransform(8.3,1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgmBFQgMgMAAgYIAAhGQAAgNAFgKQAGgKALgGQAMgGAQAAQASAAAMAGQALAGAFAKQAFAKAAANIAABGQABAYgNAMQgMANgbABQgZgBgNgNgAgIgyQgEAEAAAGIAABPQAAAIAEADQAEAEAEAAQAFAAAEgEQAEgDAAgIIAAhPQAAgGgEgEQgEgDgFAAQgEAAgEADg");
	this.shape_7.setTransform(-4.2,1.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAMBPIgRg3IgKASIAAAlIgkAAIAAidIAkAAIAAA/IAag/IApAAIgjBGIAjBXg");
	this.shape_8.setTransform(-15.7,1.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAQBPIAAg8IgHAAIgWA8IgoAAIAehFQgKgGgGgKQgGgMgBgOQAAgNAFgKQAGgKAJgHQAKgGANAAIA5AAIAACdgAgDgtQgFAGAAAJQAAAJAFAGQADAGAHAAIAJAAIAAgoIgJAAQgHAAgDAEg");
	this.shape_9.setTransform(-34.3,1.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAUBPIgGgfIgbAAIgGAfIgmAAIAjidIAsAAIAkCdgAAKATIgKhEIgKBEIAUAAg");
	this.shape_10.setTransform(-45.9,1.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgyBPIAAidIA8AAQAJAAAJAEQAKAEAFAJQAGAJAAANQAAAMgDAGQgEAIgFADQgFAFgEAAQAKAFAHAHQAFAJAAAQQAAAXgMAMQgMAMgYAAgAgNAyIAJAAQAKAAAEgEQADgEAAgLQAAgKgDgGQgEgEgKAAIgJAAgAgNgRIAMAAQAGAAAEgEQAEgFgBgJQABgHgEgEQgEgDgGAAIgMAAg");
	this.shape_11.setTransform(-57.7,1.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgmBFQgMgMAAgYIAAhGQAAgNAFgKQAGgKALgGQAMgGAQAAQASAAAMAGQALAGAFAKQAFAKAAANIAABGQABAYgNAMQgMANgbABQgZgBgNgNgAgIgyQgEAEAAAGIAABPQAAAIAEADQAEAEAEAAQAFAAAEgEQAEgDAAgIIAAhPQAAgGgEgEQgEgDgFAAQgEAAgEADg");
	this.shape_12.setTransform(-70,1.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAMBPIAAhDIgYAAIAABDIgmAAIAAidIAmAAIAAA9IAYAAIAAg9IAmAAIAACdg");
	this.shape_13.setTransform(-82.1,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 2
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0071BB").s().p("Au2FDIgYozQgFhaBcgEIbQhLQBbgEADBbIAZIzQAEBbhbAEI7QBKIgJAAQhSAAgEhXg");
	this.shape_14.setTransform(0.9,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-97.8,-39.2,196.3,82.5), null);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bg3();
	this.instance.parent = this;
	this.instance.setTransform(-120,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.shadow = new cjs.Shadow("#000000",1,1,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-98.5,-55.2,186,108), null);


// stage content:
(lib._240x400_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		canvas.style.cursor = "pointer";
		canvas.addEventListener("click", function() {
		    window.callClick();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(274));

	// Слой 13
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(274));

	// Слой 9
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(120,357.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(274));

	// Слой 3
	this.instance_1 = new lib.Символ7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120,251,0.9,0.9,-17.7);
	this.instance_1.alpha = 0;
	this.instance_1.shadow = new cjs.Shadow("#000000",1,1,4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(203).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:0,y:230.9,alpha:1},5,cjs.Ease.get(1)).wait(60).to({scaleX:1.1,scaleY:1.1,rotation:11.2,y:210.9,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// Слой 4
	this.instance_2 = new lib.Символ9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(127,233.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(137).to({_off:false},0).to({alpha:1},5,cjs.Ease.get(1)).wait(55).to({alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(71));

	// Слой 5
	this.instance_3 = new lib.Анимация3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(120,200);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(137).to({_off:false},0).wait(137));

	// Слой 7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape_1.setTransform(120,190);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(137).to({_off:false},0).wait(137));

	// Слой 12
	this.instance_4 = new lib.Символ7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(120,230.9,0.9,0.9);
	this.instance_4.alpha = 0;
	this.instance_4.shadow = new cjs.Shadow("#000000",1,1,4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(66).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},5,cjs.Ease.get(1)).wait(60).to({scaleX:1.1,scaleY:1.1,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(137));

	// Слой 11
	this.instance_5 = new lib.Символ9();
	this.instance_5.parent = this;
	this.instance_5.setTransform(125,233,0.9,0.9);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1,scaleY:1,y:233.1,alpha:1},5,cjs.Ease.get(1)).wait(55).to({scaleX:1.1,scaleY:1.1,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(208));

	// Слой 2
	this.instance_6 = new lib.Анимация3("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},137).wait(137));

	// Слой 6
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape_2.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(274));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(119,199,242,402);
// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/240x400_6_atlas_.png?1486925627049", id:"240x400_6_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;