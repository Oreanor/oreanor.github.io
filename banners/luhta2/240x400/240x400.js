(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"240x400_atlas_P_", frames: [[0,438,212,28],[0,195,196,144],[0,0,186,193],[0,341,222,95]]},
		{name:"240x400_atlas_NP_", frames: [[0,0,240,400],[0,402,240,297],[0,701,240,297]]}
];


// symbols:



(lib._110 = function() {
	this.spriteSheet = ss["240x400_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.spriteSheet = ss["240x400_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg2 = function() {
	this.spriteSheet = ss["240x400_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg3 = function() {
	this.spriteSheet = ss["240x400_atlas_NP_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.t2 = function() {
	this.spriteSheet = ss["240x400_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.t3 = function() {
	this.spriteSheet = ss["240x400_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.t4 = function() {
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


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._110();
	this.instance.parent = this;
	this.instance.setTransform(-113,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-113,-12,212,28), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AyWKyIAA1jMAktAAAIAAVjg");
	mask.setTransform(1.5,-46.9);

	// Слой 1
	this.instance = new lib.t4();
	this.instance.parent = this;
	this.instance.setTransform(-111,-90);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-111,-90,222,95), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.t3();
	this.instance.parent = this;
	this.instance.setTransform(-93,-118);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-93,-118,186,193), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.t2();
	this.instance.parent = this;
	this.instance.setTransform(-98,-76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-98,-76,196,144), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,240,297), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,240,297), null);


(lib.Символ6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AumCbQhBhAAAhbQAAhaBBhAQBAhBBbAAQBbAABABBQBBBAAABaQAABbhBBAQhABBhbAAQhbAAhAhBgAslhNQgNALgFAMIgpB0ICEAAQAUAAAPgLQAMgJABgJIiFAAIAph5IgCAAQgMAAgPALgAhpAzQgXgPAAgkIAAhhIA+AAIAABfQAAAOAJAGQAHAGARAAQAPAAAIgGQAIgGAAgOIAAhfIA+AAIAABhQAAAkgXAPQgWAOgwAAQgyAAgWgOgAOlA7IgGgSIhBAAIgGASIhDAAIBEicIBLAAIBECcgANsACIAlAAIgSg0IgBAAgAI/A7IAAh1Ig6AAIAAgnICyAAIAAAnIg6AAIAAB1gAFKA7IAAg+IhGAAIAAA+Ig/AAIAAicIA/AAIAAA3IBGAAIAAg3IA+AAIAACcgAmbA7IAAicIA+AAIAAByIBgAAIAAAqg");
	this.shape.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6_1, new cjs.Rectangle(-100,-20.9,200,44), null);


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
p.nominalBounds = new cjs.Rectangle(0,0,240,297);


// stage content:
(lib._240x400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(240));

	// Слой 5
	this.instance = new lib.Символ6_1();
	this.instance.parent = this;
	this.instance.setTransform(120,212,1,0.1,0,0,0,0,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(168).to({_off:false},0).to({regY:0,scaleY:1},6,cjs.Ease.get(1)).wait(59).to({regY:0.5,scaleY:0.1},6,cjs.Ease.get(1)).wait(1));

	// t4.png
	this.instance_1 = new lib.Символ7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(130,140);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(161).to({_off:false},0).to({x:120,alpha:1},6,cjs.Ease.get(1)).wait(66).to({x:110,alpha:0},6,cjs.Ease.get(1)).wait(1));

	// t3.png
	this.instance_2 = new lib.Символ6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(130,140);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:120,alpha:1},6,cjs.Ease.get(1)).wait(67).to({x:110,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(160));

	// t2.png
	this.instance_3 = new lib.Символ5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(130,120.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(80).to({_off:false},0).to({x:120,alpha:1},6,cjs.Ease.get(1)).wait(64).to({x:110,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(83));

	// Слой 4
	this.instance_4 = new lib.Символ8();
	this.instance_4.parent = this;
	this.instance_4.setTransform(126.5,240.5,1,0.1,0,0,0,0,0.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({_off:false},0).to({regY:0,scaleY:1},5,cjs.Ease.get(1)).wait(143).to({regY:0.5,scaleY:0.1},6,cjs.Ease.get(1)).to({_off:true},1).wait(79));

	// Слой 2
	this.instance_5 = new lib.Символ1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(120,148.5,1,1,0,0,0,120,148.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(240));

	// Слой 1
	this.instance_6 = new lib.bg();
	this.instance_6.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(240));

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
		{src:"images/240x400_atlas_P_.png?1503563224576", id:"240x400_atlas_P_"},
		{src:"images/240x400_atlas_NP_.jpg?1503563224577", id:"240x400_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;