(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"240x400_2_atlas_", frames: [[0,0,500,340],[0,342,124,33]]}
];


// symbols:



(lib.bg = function() {
	this.spriteSheet = ss["240x400_2_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["240x400_2_atlas_"];
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


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-41.2,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-116.7,-43,233.5,86), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-8.5,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-64.9,-57,129.8,114), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-62,-16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-62,-16.5,124,33), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-217,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-217,-200,500,340), null);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("ОГРОМНЫЙ ВЫБОР, ВЫСОКОЕ КАЧЕСТВО \nИ ЧЕСТНЫЕ ЦЕНЫ", "bold 22px 'Helvetica Neue'");
	this.text.lineHeight = 28;
	this.text.lineWidth = 192;
	this.text.parent = this;
	this.text.setTransform(-86,-41);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88,-43,196,86);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(10,24.7);
	this.instance.shadow = new cjs.Shadow("#000000",1,1,4);
	this.instance.cache(-119,-45,238,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-109.7,-16.2,160,86), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(-27.8,205.9);
	this.instance.shadow = new cjs.Shadow("#000000",1,1,4);
	this.instance.cache(-67,-59,134,118);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-95,151.1,121,114), null);


// stage content:
(lib._240x400_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		canvas.style.cursor = "pointer";
		canvas.addEventListener("click", function() {
		    window.callClick();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(233));

	// Слой 10
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(233));

	// Слой 3
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(78,30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(169).to({y:130.5},11,cjs.Ease.get(1)).wait(41).to({y:30.5},11,cjs.Ease.get(1)).wait(1));

	// Слой 9
	this.instance_1 = new lib.Анимация2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(105,213.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(169).to({_off:false},0).to({alpha:1},11,cjs.Ease.get(1)).wait(41).to({startPosition:0},0).to({alpha:0},11,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AyvEsIAApXMAlfAAAIAAJXg");
	this.shape_1.setTransform(120,30);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(233));

	// Слой 8
	this.instance_2 = new lib.Символ3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(123.8,322.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(94).to({_off:false},0).to({alpha:1},12,cjs.Ease.get(1)).to({_off:true},64).wait(63));

	// Слой 7
	this.instance_3 = new lib.Символ2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(113.3,133.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({_off:false},0).to({alpha:1},12,cjs.Ease.get(1)).wait(61).to({alpha:0},9).to({_off:true},1).wait(143));

	// Слой 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	mask.setTransform(120,200);

	// Слой 4
	this.instance_4 = new lib.Символ1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1,261);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(82).to({_off:false},0).to({x:-33},87).to({_off:true},1).wait(63));

	// Слой 1
	this.instance_5 = new lib.Символ1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(187,261);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:217},89).to({_off:true},1).wait(143));

	// Слой 6
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape_2.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(233));

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
		{src:"images/240x400_2_atlas_.png?1486715200552", id:"240x400_2_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;