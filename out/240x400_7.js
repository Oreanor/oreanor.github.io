(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"240x400_7_atlas_", frames: [[0,0,540,400],[202,402,160,41],[0,402,200,36]]}
];


// symbols:



(lib.bg7 = function() {
	this.spriteSheet = ss["240x400_7_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.logo2 = function() {
	this.spriteSheet = ss["240x400_7_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.veter = function() {
	this.spriteSheet = ss["240x400_7_atlas_"];
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


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.veter();
	this.instance.parent = this;
	this.instance.setTransform(-100,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-100,-43.2,200,86.4), null);


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


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg7();
	this.instance.parent = this;
	this.instance.setTransform(-220,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-220,-200,540,400), null);


// stage content:
(lib._240x400_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		canvas.style.cursor = "pointer";
		canvas.addEventListener("click", function() {
		    window.callClick();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(170));

	// Слой 13
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(170));

	// Слой 9
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(120,357.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(87).to({_off:false},0).wait(83));

	// Слой 12
	this.instance_1 = new lib.Символ7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120,230.9,0.9,0.9);
	this.instance_1.alpha = 0;
	this.instance_1.shadow = new cjs.Shadow("#000000",1,1,4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(87).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},5,cjs.Ease.get(1)).wait(72).to({scaleX:1.1,scaleY:1.1,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// Слой 11
	this.instance_2 = new lib.Символ9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(125,358,0.9,0.9);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,y:358.1,alpha:1},5,cjs.Ease.get(1)).wait(76).to({scaleX:1.1,scaleY:1.1,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(83));

	// Слой 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	mask.setTransform(120,200);

	// Слой 4
	this.instance_3 = new lib.Символ1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1,200);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(82).to({_off:false},0).to({x:-1.7,alpha:1},7).to({x:-31},75).to({x:-33,alpha:0},5).wait(1));

	// Слой 1
	this.instance_4 = new lib.Символ1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(187,200);
	this.instance_4.alpha = 0;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:188.7,alpha:1},5).to({x:214.7},77).to({x:217,alpha:0},7).to({_off:true},1).wait(80));

	// Слой 6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape_1.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(170));

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
		{src:"images/240x400_7_atlas_.png?1486978999554", id:"240x400_7_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;