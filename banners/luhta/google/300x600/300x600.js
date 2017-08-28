(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"300x600_atlas_P_", frames: [[46,601,7,6],[0,502,240,97],[0,601,44,12],[0,0,396,500]]}
];


// symbols:



(lib.astr = function() {
	this.spriteSheet = ss["300x600_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,320);


(lib._new = function() {
	this.spriteSheet = ss["300x600_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.novaya = function() {
	this.spriteSheet = ss["300x600_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.peoplepngкопия = function() {
	this.spriteSheet = ss["300x600_atlas_P_"];
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
	this.instance = new lib.peoplepngкопия();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,396,500), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.novaya();
	this.instance.parent = this;
	this.instance.setTransform(-9,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-9,-26,44,12), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.astr();
	this.instance.parent = this;
	this.instance.setTransform(247,-1);

	this.instance_1 = new lib._new();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,-1,254,98), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("A16DpQhhhgAAiJQAAiHBhhhQBghgCJAAQCIAABhBgQBhBhAACHQAACJhhBgQhhBhiIAAQiJAAhghhgAy3h0QgUARgHASIg+CtIDGAAQAeAAAVgQQASgNACgOIjIAAIA+i2IgCAAQgTAAgVARgAieBMQgigXgBg1IAAiSIBeAAIAACOQAAAVANAJQALAKAZgBQAYABALgKQANgJgBgVIAAiOIBdAAIAACSQAAA1gjAXQggAVhJAAQhLAAghgVgAV4BZIgJgcIhiAAIgKAcIhkAAIBmjrIByAAIBlDrgAUhAEIA6AAIgchPIgCAAgANeBZIAAiwIhWAAIAAg7IEKAAIAAA7IhWAAIAACwgAHvBZIAAhdIhpAAIAABdIheAAIAAjrIBeAAIAABSIBpAAIAAhSIBdAAIAADrgAppBZIAAjrIBdAAIAACrICRAAIAABAg");
	this.shape.setTransform(0,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-150,-31.9,300,65.9), null);


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
	this.shape.setTransform(110,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-10,0,240,400), null);


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
p.nominalBounds = new cjs.Rectangle(-130,-202,252,404);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(43,100,1.25,1.5,0,0,0,119.9,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.4,-200,300,600);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("EgMfgu3IY/AAMAAABdvI4/AAg");
	this.shape_1.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},191).wait(10));

	// Слой 3
	this.instance = new lib.Анимация3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(120,200.1);

	this.instance_1 = new lib.Анимация4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(120,200.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},8).to({state:[]},1).to({state:[{t:this.instance}]},182).to({state:[{t:this.instance}]},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,alpha:0},8,cjs.Ease.get(1)).wait(183).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(1));

	// luhta
	this.instance_2 = new lib.Символ6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150.1,540,0.7,0.035,0,0,0,0.1,1.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(101).to({_off:false},0).to({regX:0,regY:0,scaleY:0.7,x:150},6,cjs.Ease.get(1)).wait(84).to({regX:0.1,regY:0.7,scaleY:0.07,x:150.1},5,cjs.Ease.get(1)).to({_off:true},1).wait(4));

	// new
	this.instance_3 = new lib.Символ5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150.1,540.5,1.008,0.095,0,0,0,0.1,1.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).to({regY:0.3,scaleY:1.11,y:540.8},6,cjs.Ease.get(1)).to({regY:0.1,scaleY:1.01,y:540.5},3,cjs.Ease.get(1)).wait(77).to({regY:2,scaleY:0.05},6,cjs.Ease.get(0.99)).to({_off:true},1).wait(100));

	// Слой 6
	this.instance_4 = new lib.Символ4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150,540.2,1.25,1.2,0,0,0,120,50.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(201));

	// Слой 8
	this.instance_5 = new lib.Символ11();
	this.instance_5.parent = this;
	this.instance_5.setTransform(36,481);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(18).to({_off:false},0).to({alpha:1},5,cjs.Ease.get(1)).wait(31).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(140));

	// Слой 7
	this.instance_6 = new lib.Символ10();
	this.instance_6.parent = this;
	this.instance_6.setTransform(442.9,392.6,1,1,0,0,0,121.8,48.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({_off:false},0).wait(1).to({regX:127,regY:48,x:444.8,y:392.1},0).wait(1).to({x:434.2},0).wait(1).to({x:414.8},0).wait(1).to({x:385.3},0).wait(1).to({x:344.7},0).wait(1).to({x:294.3},0).wait(1).to({x:240.4},0).wait(1).to({x:193.9},0).wait(1).to({x:164.7},0).wait(1).to({regX:120.1,regY:48.5,x:150.1,y:392.6},0).wait(36).to({x:148.8},0).to({regX:119.9,x:-123.2},7,cjs.Ease.get(1)).to({_off:true},1).wait(139));

	// Слой 2
	this.instance_7 = new lib.Символ12();
	this.instance_7.parent = this;
	this.instance_7.setTransform(209,251,1,1,0,0,0,198,250);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1.1,scaleY:1.1,x:107.8,y:266},200).wait(1));

	// Слой 4
	this.instance_8 = new lib.Символ8();
	this.instance_8.parent = this;
	this.instance_8.setTransform(171.6,250.6,1.562,1.562,0,0,0,139.9,160);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regY:159.9,scaleY:1.56,x:83.1,y:249.9},200).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(103,299,454.1,602);
// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1503848516813", id:"bg"},
		{src:"images/300x600_atlas_P_.png?1503848516792", id:"300x600_atlas_P_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;