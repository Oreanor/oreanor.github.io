(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"240x400_atlas_P_", frames: [[0,276,201,43],[0,205,198,69],[0,104,151,99],[0,0,148,102]]},
		{name:"240x400_atlas_NP_", frames: [[0,0,240,400],[242,0,240,400],[0,402,240,400]]}
];


// symbols:



(lib._0 = function() {
	this.spriteSheet = ss["240x400_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._1 = function() {
	this.spriteSheet = ss["240x400_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["240x400_atlas_NP_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Image = function() {
	this.spriteSheet = ss["240x400_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_1 = function() {
	this.spriteSheet = ss["240x400_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Image_2 = function() {
	this.spriteSheet = ss["240x400_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Image_3 = function() {
	this.spriteSheet = ss["240x400_atlas_P_"];
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


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Image();
	this.instance.parent = this;
	this.instance.setTransform(-100.5,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-100.5,-21.5,201,43), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Image_1();
	this.instance.parent = this;
	this.instance.setTransform(-99,-34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-99,-34.5,198,69), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Image_2();
	this.instance.parent = this;
	this.instance.setTransform(-75.5,-49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-75.5,-49.5,151,99), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Image_3();
	this.instance.parent = this;
	this.instance.setTransform(-74,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-74,-51,148,102), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(-120,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-120,-200,240,400), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(-120,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-120,-200,240,400), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._0();
	this.instance.parent = this;
	this.instance.setTransform(-120,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-120,-200,240,400), null);


// stage content:
(lib._240x400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ayq/KMAlVAAAMAAAA+VMglVAAAg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(200));

	// Layer 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(120.5,336.5,1,0.1,0,0,0,0,0.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(134).to({_off:false},0).to({regY:0,scaleY:1,alpha:1},8,cjs.Ease.get(1)).wait(49).to({regY:0.5,scaleY:0.1,alpha:0},8,cjs.Ease.get(1)).wait(1));

	// Layer 1
	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,60.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(134).to({_off:false},0).to({x:120,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:90,alpha:0},8,cjs.Ease.get(1)).wait(1));

	// Layer 1
	this.instance_2 = new lib.Символ5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150.5,65.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(66).to({_off:false},0).to({x:120.5,alpha:1},8,cjs.Ease.get(1)).wait(50).to({x:90.5,alpha:0},9,cjs.Ease.get(1)).to({_off:true},1).wait(66));

	// Layer 1
	this.instance_3 = new lib.Символ4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150,70);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:120,alpha:1},8,cjs.Ease.get(1)).wait(50).to({x:90,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(133));

	// Символ 3
	this.instance_4 = new lib.Символ3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(120,200);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(125).to({_off:false},0).to({alpha:1},17,cjs.Ease.get(1)).wait(46).to({alpha:0},11,cjs.Ease.get(1)).wait(1));

	// Символ 2
	this.instance_5 = new lib.Символ2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(120,200);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(58).to({_off:false},0).to({alpha:1},16,cjs.Ease.get(1)).wait(51).to({alpha:0},17,cjs.Ease.get(1)).to({_off:true},1).wait(57));

	// Символ 1
	this.instance_6 = new lib.Символ1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(58).to({alpha:0},16,cjs.Ease.get(1)).wait(1).to({alpha:1},0).wait(125));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(119.5,199.5,241,401);
// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/240x400_atlas_P_.png?1507847125591", id:"240x400_atlas_P_"},
		{src:"images/240x400_atlas_NP_.jpg?1507847125592", id:"240x400_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;