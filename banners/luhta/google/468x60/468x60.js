(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"468x60_atlas_P_", frames: [[272,0,7,6],[0,133,240,97],[242,133,44,12],[0,0,270,131]]}
];


// symbols:



(lib.astr = function() {
	this.spriteSheet = ss["468x60_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,550,135);


(lib._new = function() {
	this.spriteSheet = ss["468x60_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.novaya = function() {
	this.spriteSheet = ss["468x60_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.people = function() {
	this.spriteSheet = ss["468x60_atlas_P_"];
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


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.novaya();
	this.instance.parent = this;
	this.instance.setTransform(-22,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-22,-6,44,12), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.astr();
	this.instance.parent = this;
	this.instance.setTransform(230,5);

	this.instance_1 = new lib._new();
	this.instance_1.parent = this;
	this.instance_1.setTransform(24,10,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(24,5,213,82.6), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.people();
	this.instance.parent = this;
	this.instance.setTransform(-134,57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-134,57,270,131), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,550,135), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AumCbQhBhAAAhbQAAhaBBhAQBAhBBbAAQBbAABABBQBBBAAABaQAABbhBBAQhABBhbAAQhbAAhAhBgAslhNQgNALgFAMIgpB0ICEAAQAUAAAPgLQAMgJABgJIiFAAIAph5IgCAAQgMAAgPALgAhpAzQgXgPAAgkIAAhhIA+AAIAABfQAAAOAJAGQAHAGARAAQAPAAAIgGQAIgGAAgOIAAhfIA+AAIAABhQAAAkgXAPQgWAOgwAAQgyAAgWgOgAOlA7IgGgSIhBAAIgGASIhDAAIBEicIBLAAIBECcgANsACIAlAAIgSg0IgBAAgAI/A7IAAh1Ig6AAIAAgnICyAAIAAAnIg6AAIAAB1gAFKA7IAAg+IhGAAIAAA+Ig/AAIAAicIA/AAIAAA3IBGAAIAAg3IA+AAIAACcgAmbA7IAAicIA+AAIAAByIBgAAIAAAqg");
	this.shape.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-100,-20.9,200,44), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(0,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-100,-42.5,200,84.5), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002640").s().p("AyvH0IAAvnMAlfAAAIAAPng");
	this.shape.setTransform(120,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,240,100), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape.setTransform(364,45,3.033,0.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,728,90), null);


(lib.Анимация4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,120,200);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ay5/ZMAlzAAAMAAAA+zMglzAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.9,-202,730,404);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(-42.8,-66.7,0.643,0.667,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.9,-200,468,60);


// stage content:
(lib._468x60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgkjgErMBJHAAAIAAJXMhJHAAAg");
	this.shape.setTransform(234,30);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(172));

	// Слой 3
	this.instance = new lib.Анимация3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(120,200.1);

	this.instance_1 = new lib.Анимация4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(120,200.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,alpha:0},8,cjs.Ease.get(1)).wait(164));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},8,cjs.Ease.get(1)).to({_off:true},1).wait(153).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(1));

	// luhta
	this.instance_2 = new lib.Символ6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(408.4,30.1,0.495,0.025,0,0,0,0.2,6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(75).to({_off:false},0).to({regY:0.3,scaleY:0.5,y:29.6},6).wait(81).to({regX:0.3,regY:2.3,scaleY:0.07,y:30},9,cjs.Ease.get(1)).wait(1));

	// novaya
	this.instance_3 = new lib.Символ11();
	this.instance_3.parent = this;
	this.instance_3.setTransform(514,78);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).to({alpha:1},5,cjs.Ease.get(1)).wait(48).to({alpha:0},6).to({_off:true},1).wait(93));

	// new
	this.instance_4 = new lib.Символ10();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-56.5,32,0.484,0.484,0,0,0,120,48.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).wait(1).to({regX:130.5,regY:46.3,x:-49.6,y:30.8},0).wait(1).to({x:-43.6},0).wait(1).to({x:-31.4},0).wait(1).to({x:-11.2},0).wait(1).to({x:15.3},0).wait(1).to({x:39.4},0).wait(1).to({x:55},0).wait(1).to({x:62.7},0).wait(1).to({regX:120,regY:48.6,x:59.7,y:32},0).wait(52).to({regX:130.5,regY:46.3,x:63.1,y:30.8},0).wait(1).to({x:56.2},0).wait(1).to({x:39.6},0).wait(1).to({x:5.8},0).wait(1).to({x:-27.1},0).wait(1).to({x:-43},0).wait(1).to({x:-49.6},0).wait(1).to({regX:120,regY:48.6,x:-56.5,y:32},0).to({_off:true},1).wait(93));

	// new
	this.instance_5 = new lib.Символ5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(409.6,30.1,0.45,0.042,0,0,0,0.1,2.4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).to({regY:0.3,scaleY:0.5,y:30.3},6,cjs.Ease.get(1)).to({regY:0.2,scaleY:0.45,y:30.2},3,cjs.Ease.get(1)).wait(55).to({regY:4.5,scaleY:0.02,y:30.1},4,cjs.Ease.get(0.99)).to({_off:true},1).wait(97));

	// Слой 6
	this.instance_6 = new lib.Символ4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(408.1,30.1,0.5,0.6,0,0,0,120.1,50.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(172));

	// Слой 5
	this.instance_7 = new lib.Символ9();
	this.instance_7.parent = this;
	this.instance_7.setTransform(342.9,81,0.889,0.889,0,0,0,119.7,148.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1.11,scaleY:1.11,x:281.9,y:63.6},171).wait(1));

	// Слой 4
	this.instance_8 = new lib.Символ8();
	this.instance_8.parent = this;
	this.instance_8.setTransform(74.4,138,0.889,0.889,0,0,0,139.9,159.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regY:159.9,scaleX:1.04,scaleY:1.04,x:-24.3,y:129.2},171).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(184,26,519,120);
// library properties:
lib.properties = {
	width: 468,
	height: 60,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1503850526154", id:"bg"},
		{src:"images/468x60_atlas_P_.png?1503850526131", id:"468x60_atlas_P_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;