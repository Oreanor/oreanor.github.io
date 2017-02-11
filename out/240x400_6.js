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
	this.shape.graphics.f("#FFFFFF").s().p("AAkCRIAAiGIhHAAIAACGIg3AAIAAkgIA3AAIAABvIBHAAIAAhvIA3AAIAAEgg");
	this.shape.setTransform(56.5,28.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhMCRIAAkgICZAAIAAAsIhiAAIAABDIBZAAIAAArIhZAAIAABZIBiAAIAAAtg");
	this.shape_1.setTransform(36.2,28.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABLCRIAAkFIgBAAIg3EFIgmAAIg2kFIgBAAIAAEFIgzAAIAAkgIBYAAIAlC7IAmi7IBYAAIAAEgg");
	this.shape_2.setTransform(11.9,28.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhMCRIAAkgICZAAIAAAsIhiAAIAABDIBZAAIAAArIhZAAIAABZIBiAAIAAAtg");
	this.shape_3.setTransform(-11.9,28.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhZCRIAAkgIBnAAQAXAAARALQARAMAJATQAKASAAAYQAAAYgKAUQgJASgRAMQgRALgYABIgvAAIAAB2gAgigPIAcAAQATAAALgLQAKgLAAgVQAAgVgKgKQgLgLgTAAIgcAAg");
	this.shape_4.setTransform(-32.4,28.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhMCRIAAkgICZAAIAAAsIhiAAIAABDIBZAAIAAArIhZAAIAABZIBiAAIAAAtg");
	this.shape_5.setTransform(-52.6,28.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAkCRIAAj0IhHAAIAAD0Ig3AAIAAkgIC1AAIAAEgg");
	this.shape_6.setTransform(-73.4,28.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhZCRIAAkgIBnAAQAXAAARALQARAMAJASQAKAUAAAXQAAAYgKAUQgJATgRALQgRAMgYAAIgvAAIAAB2gAgigPIAcAAQATAAALgLQAKgMAAgUQAAgVgKgKQgLgMgTAAIgcAAg");
	this.shape_7.setTransform(5.8,-17.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhMCRIAAkgICZAAIAAArIhiAAIAABEIBZAAIAAArIhZAAIAABaIBiAAIAAAsg");
	this.shape_8.setTransform(-14.3,-17.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgbCRIAAj1IhDAAIAAgrIC9AAIAAArIhEAAIAAD1g");
	this.shape_9.setTransform(-34.3,-17.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhMCRIAAkgICZAAIAAArIhiAAIAABEIBZAAIAAArIhZAAIAABaIBiAAIAAAsg");
	this.shape_10.setTransform(-53.7,-17.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhXCRIAAkgIBkAAQAZAAAQAKQAQAJAHARQAHAQAAASQAAAOgFANQgEAOgJAKQgJAJgMADQAWAIAKAQQALARAAAcQAAAZgHATQgHAUgPAKQgPAMgWAAgAggBnIAiAAQAPAAAIgKQAHgKAAgZQAAgVgHgMQgIgLgPAAIgiAAgAgggaIAcAAQARgBAIgKQAIgJAAgUQAAgSgHgJQgIgJgRAAIgdAAg");
	this.shape_11.setTransform(-73.7,-17.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-86.5,-43.2,173,95.5), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAUBlIAAhOIgJAAIgbBOIg0AAIAmhZQgMgHgJgNQgHgPgBgSQABgRAGgMQAHgOAMgHQAMgIARAAIBJAAIAADIgAgFg5QgFAHAAALQAAAMAFAIQAFAHAJAAIALAAIAAgzIgKAAQgKAAgFAGg");
	this.shape.setTransform(55.6,17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AARBlIAAgvQAAgLACgOIADgbIAEgXIgpB6IgvAAIAAjIIAuAAIAAAxIgCAZIgDAaIgCAZIAoh9IAuAAIAADIg");
	this.shape_1.setTransform(40.5,17);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAWB5IAAgpIhaAAIAAjIIAwAAIAACiIAfAAIAAiiIAwAAIAACiIAKAAIAABPg");
	this.shape_2.setTransform(25.1,19);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAPBlIgVhHIgNAYIAAAvIguAAIAAjIIAuAAIAABQIAhhQIA0AAIgsBZIAsBvg");
	this.shape_3.setTransform(9.7,17);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag3BlIAAjIIBvAAIAAAmIg/AAIAAAnIA5AAIAAAlIg5AAIAAAwIA/AAIAAAmg");
	this.shape_4.setTransform(-4.7,17);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag/BkIgNgEIAAgiIAFABIAIAAQAEABADgDQADgCABgHQACgIAAgOIAAgkIAAhfIB+AAIAADIIgwAAIAAiiIgeAAIAABEQgBAmgFAVQgEAVgLAJQgKAIgRAAQgHAAgGgCg");
	this.shape_5.setTransform(-20.7,17.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag/BkIgNgEIAAgiIAGABIAHAAQAEABADgDQADgCABgHQACgIAAgOIAAgkIAAhfIB+AAIAADIIgwAAIAAiiIgfAAIAABEQAAAmgEAVQgGAVgKAJQgKAIgRAAQgHAAgGgCg");
	this.shape_6.setTransform(-37.9,17.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgwBYQgRgQABgeIAAhaQAAgQAHgMQAGgNAPgIQAPgHAVAAQAXAAAOAIQAPAHAHANQAGANAAAQIAABZQABAegQAQQgRARghAAQghAAgPgRgAgKg/QgFAEgBAIIAABlQABAJAFAFQAEAEAGAAQAGAAAFgEQAGgFAAgJIAAhlQAAgIgGgEQgFgEgGAAQgGAAgEAEg");
	this.shape_7.setTransform(-53.8,17);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAPBlIgVhHIgNAYIAAAvIguAAIAAjIIAuAAIAABQIAhhQIA0AAIgsBZIAsBvg");
	this.shape_8.setTransform(-68.6,17);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAVBkIAAhMIgKAAIgcBMIgzAAIAmhYQgNgHgHgNQgIgPAAgSQgBgQAHgOQAGgNANgHQAMgJASABIBIAAIAADHgAgEg4QgGAGAAAMQAAALAGAIQAEAHAJAAIAMAAIAAgzIgMAAQgJAAgEAHg");
	this.shape_9.setTransform(-7.8,-16.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAaBkIgIgoIgjAAIgHAoIgwAAIAsjHIA4AAIAtDHgAAMAYIgMhXIAAAAIgNBXIAZAAg");
	this.shape_10.setTransform(-22.6,-16.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag/BkIAAjHIBMAAQAMAAALAEQAMAGAHALQAHALABASQgBANgEAJQgFAJgGAGQgGAEgGABQAOAGAIAKQAHALAAAVQAAAcgPAQQgPAPgfAAgAgRBAIALAAQANAAAFgFQAFgGAAgOQAAgNgFgGQgFgHgMAAIgMAAgAgRgWIAPAAQAJAAAEgFQAFgGAAgMQAAgJgFgFQgEgEgJAAIgPAAg");
	this.shape_11.setTransform(-37.7,-16.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgwBYQgQgQAAgeIAAhaQAAgQAHgMQAGgNAPgIQAOgHAWAAQAXAAAOAIQAPAHAHANQAGANAAAQIAABZQAAAegPAQQgRARghAAQghAAgPgRgAgLg/QgEAEgBAIIAABlQABAJAEAFQAFAEAGAAQAGAAAGgEQAFgFAAgJIAAhlQAAgIgFgEQgGgEgGAAQgGAAgFAEg");
	this.shape_12.setTransform(-53.3,-16.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAQBkIAAhVIgfAAIAABVIgwAAIAAjHIAwAAIAABNIAfAAIAAhNIAwAAIAADHg");
	this.shape_13.setTransform(-68.8,-16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 2
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0071BB").s().p("Ap4HJQjIABAAjIIAAoCQAAjJDIAAITxAAQDIAAgBDJIAAICQABDIjIgBg");
	this.shape_14.setTransform(-7.2,3.8,1,1,-5.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-92.7,-47.9,171.3,103.5), null);


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

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-91.5,-48.2,186,109), null);


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

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(120,357.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(137).to({_off:false},0).wait(137));

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
	this.instance_2.setTransform(135,268.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(137).to({_off:false},0).to({x:125,alpha:1},5,cjs.Ease.get(1)).wait(55).to({x:145,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(71));

	// Слой 5
	this.instance_3 = new lib.Анимация3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(120,200);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(137).to({_off:false},0).wait(137));

	// Слой 7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape_1.setTransform(120,200);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(137).to({_off:false},0).wait(137));

	// Слой 9
	this.instance_4 = new lib.Символ8();
	this.instance_4.parent = this;
	this.instance_4.setTransform(120,357.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},137).wait(137));

	// Слой 12
	this.instance_5 = new lib.Символ7();
	this.instance_5.parent = this;
	this.instance_5.setTransform(120,230.9,0.9,0.9);
	this.instance_5.alpha = 0;
	this.instance_5.shadow = new cjs.Shadow("#000000",1,1,4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(66).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},5,cjs.Ease.get(1)).wait(60).to({scaleX:1.1,scaleY:1.1,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(137));

	// Слой 11
	this.instance_6 = new lib.Символ9();
	this.instance_6.parent = this;
	this.instance_6.setTransform(125,268,0.9,0.9);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1,scaleY:1,y:268.1,alpha:1},5,cjs.Ease.get(1)).wait(55).to({scaleX:1.1,scaleY:1.1,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(208));

	// Слой 2
	this.instance_7 = new lib.Анимация3("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},137).wait(137));

	// Слой 6
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape_2.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).to({_off:true},137).wait(137));

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
		{src:"images/240x400_6_atlas_.png?1486826096061", id:"240x400_6_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;