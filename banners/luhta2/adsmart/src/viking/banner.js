(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"banner_atlas_", frames: [[0,0,960,250],[260,252,128,150],[130,252,128,150],[0,252,128,150],[390,252,343,39],[735,252,250,50]]}
];


// symbols:



(lib.fon = function() {
	this.spriteSheet = ss["banner_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.img1 = function() {
	this.spriteSheet = ss["banner_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.img2 = function() {
	this.spriteSheet = ss["banner_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.img3 = function() {
	this.spriteSheet = ss["banner_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.text1 = function() {
	this.spriteSheet = ss["banner_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.text2 = function() {
	this.spriteSheet = ss["banner_atlas_"];
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


(lib.text2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.text2();
	this.instance.parent = this;
	this.instance.setTransform(-125,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text2_1, new cjs.Rectangle(-125,-25,250,50), null);


(lib.text1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.text1();
	this.instance.parent = this;
	this.instance.setTransform(-171.5,-19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text1_1, new cjs.Rectangle(-171.5,-19.5,343,39), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EnUvATiMAAAgnDMOpfAAAMAAAAnDg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AAAzhMAAAAnD");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.line, new cjs.Rectangle(-1,-126,2,252), null);


(lib.img3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.img3();
	this.instance.parent = this;
	this.instance.setTransform(-64,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img3_1, new cjs.Rectangle(-64,-75,128,150), null);


(lib.img1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.img1();
	this.instance.parent = this;
	this.instance.setTransform(-64,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img1_1, new cjs.Rectangle(-64,-75,128,150), null);


(lib.im2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.img2();
	this.instance.parent = this;
	this.instance.setTransform(-64,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.im2, new cjs.Rectangle(-64,-75,128,150), null);


(lib.fon_black = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhLxATiMAAAgnDMCXjAAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fon_black, new cjs.Rectangle(-485,-125,970,250), null);


(lib.fon_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.fon();
	this.instance.parent = this;
	this.instance.setTransform(-480,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.fon_1, new cjs.Rectangle(-480,-125,960,250), null);


(lib._img = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// img3.png
	this.instance = new lib.img3_1();
	this.instance.parent = this;

	this.instance_1 = new lib.im2();
	this.instance_1.parent = this;

	this.instance_2 = new lib.img1_1();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64,-75,128,150);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text2.png
	this.t2 = new lib.text2_1();
	this.t2.parent = this;
	this.t2.setTransform(346.3,0);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// text1.png
	this.t1 = new lib.text1_1();
	this.t1.parent = this;
	this.t1.setTransform(-329.5,0);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// img3.png
	this.instance = new lib._img();
	this.instance.parent = this;
	this.instance.setTransform(88,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fon.jpg
	this.instance_1 = new lib.fon_1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.main, new cjs.Rectangle(-501,-125,981,250), null);


// stage content:
(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if (typeof(this.stopCycle) == "undefined") {     
		    this.btnMain.addEventListener("click", function (e) {
		        var t = e.nativeEvent;
		        if (t.which == 1 || t.button == 0) {
		            window.callClick();
		        };
		    });
		    this.stopCycle = true;
		}
		this.stop()
		 
		stage.addEventListener("resize", res);
		 
		 
		var _main = this.main; 
		var _l1 = this.l1;
		var _l2 = this.l2; 
		function res() {
				_l1.x = 0;
				_l2.x = stage.canvas.width; 
				 
				_main.x = stage.canvas.width / 2; 
				_main.t1.x=-stage.canvas.width / 4-45
				_main.t2.x= stage.canvas.width / 4 +70 
				 
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 5
	this.btnMain = new lib.Symbol1();
	this.btnMain.parent = this;
	this.btnMain.setTransform(485,125);
	new cjs.ButtonHelper(this.btnMain, 0, 1, 2, false, new lib.Symbol1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnMain).wait(1));

	// Layer 4
	this.l1 = new lib.line();
	this.l1.parent = this;
	this.l1.setTransform(-83.9,125);

	this.l2 = new lib.line();
	this.l2.parent = this;
	this.l2.setTransform(-148.9,125);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("EnUvgThMOpfAAAEnUvATiMOpfAAA");
	this.shape.setTransform(485,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.l2},{t:this.l1}]}).wait(1));

	// Layer 1
	this.main = new lib.main();
	this.main.parent = this;
	this.main.setTransform(485,125);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

	// Layer 2
	this.instance = new lib.fon_black();
	this.instance.parent = this;
	this.instance.setTransform(485,125,6.186,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2031,124,6002,252);
// library properties:
lib.properties = {
	width: 970,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/banner_atlas_.png?1504129802467", id:"banner_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;