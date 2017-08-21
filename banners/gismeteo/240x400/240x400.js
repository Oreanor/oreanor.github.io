(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.city2 = function() {
	this.initialize(img.city2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,320);// helper functions:

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
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,240,400), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.city2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,280,320), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(175,200,1,1,0,0,0,175,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,280,320), null);


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
p.nominalBounds = new cjs.Rectangle(-121.9,-202,244,404);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,120,200);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ay5/ZMAlzAAAMAAAA+zMglzAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.9,-202,244,404);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,175,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-200,280,320);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,175,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-200,280,320);


// stage content:
(lib._240x400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(120));

	// Слой 3
	this.instance = new lib.Анимация3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(120,200.1);

	this.instance_1 = new lib.Анимация4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(120,200.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,alpha:0},8,cjs.Ease.get(1)).wait(112));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},8,cjs.Ease.get(1)).to({_off:true},1).wait(101).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(1));

	// luhta
	this.instance_2 = new lib.Символ6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(120,345,1,0.05,0,0,0,0,1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60).to({_off:false},0).to({regY:0,scaleY:1},6).wait(44).to({scaleX:1.15,scaleY:1.15},9).wait(1));

	// new
	this.instance_3 = new lib.Символ5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(120,345.5,1,0.094);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({regY:0.3,scaleY:1.1,y:345.8},6,cjs.Ease.get(1)).to({regY:0,scaleY:1,y:345.5},3,cjs.Ease.get(1)).wait(42).to({scaleY:0.05},4,cjs.Ease.get(0.99)).to({_off:true},1).wait(60));

	// Слой 6
	this.instance_4 = new lib.Символ4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(120.1,350.1,1,1.2,0,0,0,120,50.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120));

	// pic
	this.instance_5 = new lib.Анимация1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(168,200);

	this.instance_6 = new lib.Анимация2("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(124.1,210.1,1.15,1.15,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_6}]},119).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true,regX:0.1,regY:0.1,scaleX:1.15,scaleY:1.15,x:124.1,y:210.1},119).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(113,198.1,280,412);
// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/city2.jpg?1503349512103", id:"city2"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;