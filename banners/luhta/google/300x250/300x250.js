(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"300x250_atlas_P_", frames: [[288,399,7,6],[0,399,240,97],[242,399,44,12],[0,0,319,397]]}
];


// symbols:



(lib.astr = function() {
	this.spriteSheet = ss["300x250_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,320);


(lib._new = function() {
	this.spriteSheet = ss["300x250_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.novaya = function() {
	this.spriteSheet = ss["300x250_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.people = function() {
	this.spriteSheet = ss["300x250_atlas_P_"];
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


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.novaya();
	this.instance.parent = this;
	this.instance.setTransform(-22,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-22,-6,44,12), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.astr();
	this.instance.parent = this;
	this.instance.setTransform(246,1);

	this.instance_1 = new lib._new();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,253,97), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.people();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,319,397), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,280,320), null);


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
	this.shape.graphics.f("#002640").s().p("A3bH0IAAvnMAu3AAAIAAPng");
	this.shape.setTransform(150,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,300,100), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,240,400), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.shadow = new cjs.Shadow("#000000",0,0,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-25,-9,54,22), null);


(lib.Анимация4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(30,-50,1.25,0.75,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,300,300);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(30,-50,1.25,0.75,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,300,300);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(210));

	// Слой 3
	this.instance = new lib.Анимация3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(120,200.1);

	this.instance_1 = new lib.Анимация4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(120,200.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,alpha:0},8,cjs.Ease.get(1)).wait(202));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},8,cjs.Ease.get(1)).to({_off:true},1).wait(191).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(1));

	// luhta
	this.instance_2 = new lib.Символ6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150,162.2,1,0.05,0,0,0,0,1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(148).to({_off:false},0).to({regY:0,scaleY:1,y:161.2},6,cjs.Ease.get(1)).wait(46).to({scaleY:0.1},6,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// new
	this.instance_3 = new lib.Символ5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150,164.2,1,0.094);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(54).to({_off:false},0).to({regY:0.3,scaleY:1.1,y:164.8},6,cjs.Ease.get(1)).to({regY:0,scaleY:1,y:164.4},3,cjs.Ease.get(1)).wait(35).to({scaleY:0.05,y:164.2},4,cjs.Ease.get(0.99)).to({_off:true},1).wait(107));

	// Слой 6
	this.instance_4 = new lib.Символ4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(420,164.1,1,1.1,0,0,0,120,50.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(47).to({_off:false},0).to({x:120},7,cjs.Ease.get(1)).wait(49).to({x:420},6,cjs.Ease.get(1)).wait(33).to({x:360},0).to({x:120},6,cjs.Ease.get(1)).wait(62));

	// Слой 8
	this.instance_5 = new lib.Символ11();
	this.instance_5.parent = this;
	this.instance_5.setTransform(52,231);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(18).to({_off:false},0).to({alpha:1},5,cjs.Ease.get(1)).wait(24).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(55).to({_off:false},0).to({alpha:1},5,cjs.Ease.get(1)).wait(27).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(62));

	// Слой 7
	this.instance_6 = new lib.Символ10();
	this.instance_6.parent = this;
	this.instance_6.setTransform(420,162.5,1,1,0,0,0,120,48.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5).to({_off:false},0).wait(1).to({regX:126.5,x:424.7},0).wait(1).to({x:419.1},0).wait(1).to({x:409.1},0).wait(1).to({x:394.1},0).wait(1).to({x:373.4},0).wait(1).to({x:346.7},0).wait(1).to({x:314.1},0).wait(1).to({x:277},0).wait(1).to({x:238.6},0).wait(1).to({x:203.9},0).wait(1).to({x:177.4},0).wait(1).to({x:161.5},0).wait(1).to({regX:120,x:150},0).wait(29).to({x:-134},7,cjs.Ease.get(1)).wait(49).to({x:-130},0).to({x:150},6,cjs.Ease.get(1)).wait(33).to({x:120},0).to({x:-120},6,cjs.Ease.get(1)).wait(62));

	// Слой 5
	this.instance_7 = new lib.Символ9();
	this.instance_7.parent = this;
	this.instance_7.setTransform(142.9,117.1,0.95,0.95,0,0,0,119.5,148.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:119.2,regY:148.7,scaleX:1.05,scaleY:1.05,x:102,y:136.8},209).wait(1));

	// Слой 4
	this.instance_8 = new lib.Символ8();
	this.instance_8.parent = this;
	this.instance_8.setTransform(160,152.5,1.143,1.143,0,0,0,139.9,159.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:1.18,scaleY:1.18,x:136.4,y:160.2},209).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149,94.7,333.5,383.4);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1503917721368", id:"bg"},
		{src:"images/300x250_atlas_P_.png?1503917721355", id:"300x250_atlas_P_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;