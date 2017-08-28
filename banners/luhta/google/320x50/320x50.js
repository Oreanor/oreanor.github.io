(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"320x50_atlas_P_", frames: [[288,399,7,6],[0,399,240,97],[242,399,44,12],[0,0,319,397]]}
];


// symbols:



(lib.astr = function() {
	this.spriteSheet = ss["320x50_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,320);


(lib._new = function() {
	this.spriteSheet = ss["320x50_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.novaya = function() {
	this.spriteSheet = ss["320x50_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.people = function() {
	this.spriteSheet = ss["320x50_atlas_P_"];
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
	this.instance.setTransform(246,1,2,2);

	this.instance_1 = new lib._new();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,260,97), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("As2CJQg5g5AAhQQAAhPA5g5QA4g4BRAAQBQAAA5A4QA4A5AABPQAABQg4A5Qg5A4hQAAQhRAAg4g4gArEhDQgLAJgFALIgkBlIB0AAQASAAANgJQAKgIABgIIh1AAIAkhrIgBAAQgLAAgNALgAhcAtQgUgOgBgfIAAhWIA3AAIAABUQAAAMAIAGQAHAFAOAAQANAAAIgFQAHgGAAgMIAAhUIA2AAIAABWQAAAfgVAOQgSAMgrAAQgtAAgSgMgAM1A0IgFgQIg6AAIgFAQIg7AAIA8iKIBCAAIA8CKgAMDACIAhAAIgRguIAAAAgAH6A0IAAhnIgzAAIAAgjICdAAIAAAjIg0AAIAABngAEiA0IAAg2Ig9AAIAAA2Ig4AAIAAiKIA4AAIAAAxIA9AAIAAgxIA3AAIAACKgAlpA0IAAiKIA2AAIAABlIBVAAIAAAlg");
	this.shape.setTransform(18,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-70,-18.3,176,38.7), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AF5BkIAAgjIhzAAIAAihIAiAAIAACFIA/AAIAAiFIAhAAIAACFIAOAAIAAA/gAjVBFIgLgEIAAgcIAJAEIAEABQAFAAADgCQADgDABgDQACgDAAgEIAGh7IBwAAIAAChIgiAAIAAiEIgvAAIgCBIIgCAVQAAAIgCAHQgCAGgDAFQgCAGgEADQgEADgFACQgEACgEABIgIABIgLgBgAl8BFIgKgEIAAgcIAIAEIAFABQAEAAAEgCIAEgGIACgHIABgFIAEh2IBxAAIAAChIgiAAIAAiEIgvAAIgDBIIgBAVIgDAPQgBAFgDAGQgDAGgEADQgEADgEACIgJADIgIABIgLgBgAoJA/QgOgHgKgLQgJgLgFgQQgFgPAAgSQAAgSAFgPQAFgQAJgLQAKgLAOgGQAPgHAUAAQARAAAPAHQAOAFALAMQAJALAGAQQAFAPAAASQAAASgFAPQgFAPgKAMQgLAMgOAGQgOAGgSABQgUgBgPgGgAn5hBQgIADgGAIQgFAHgDAKQgDALAAALQAAANADAJQADAKAFAIQAGAGAIAFQAIAFALAAQAKAAAIgFQAJgFAFgGQAGgIADgKQADgIAAgOQAAgMgDgKQgDgKgGgHQgFgIgJgDQgIgFgKAAQgLAAgIAFgAKuBBIAAhAIgfAAIgNABQgHABgFACQgEACgDAGQgDAGgBAJIgBAQIgBAIIgDANIgjAAIADgFIABgFIAEgdIABgMIAEgKQACgEAFgDQAFgEAGgCIgGgDQgEgCgEgEQgGgFgCgIQgEgIAAgIQAAgHACgEQABgGACgFIAFgIIAHgGQAFgFAGgDIAMgCIANgCIBRgBIAAChgAJ8hCIgFABIgFACIgDAEIgEAGIgBAIQAAAGACADIAEAGQACACADABIAHACIAGABIAsAAIAAgqIgpAAIgEAAgAILBBIAAhsIgBAAIhABsIgiAAIAAihIAhAAIAABuIAAAAIBAhuIAiAAIAAChgADLBBIgyhHIgQARIAAA2IgiAAIAAihIAiAAIAABDIA9hDIAsAAIhCBDIBGBegAgvBBIAAihIB1AAIAAAdIhVAAIAAAkIBPAAIAAAcIhPAAIAAAnIBZAAIAAAdgAppBBIgyhHIgQARIAAA2IgiAAIAAihIAiAAIAABDIA+hDIArAAIhBBDIBFBeg");
	this.shape.setTransform(55.2,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjBBOQgPgHgJgLQgKgLgFgQQgEgOAAgTQAAgQAEgPQAFgRAKgLQAJgLAPgGQAOgHATAAQASAAAOAHQAOAGALALQAJALAGARQAFAOAAARQAAATgFAOQgGAQgJALQgLALgOAHQgOAGgSAAQgTAAgOgGgAiygyQgIAFgGAHQgFAHgDAKQgDALAAAKQAAAMADALQADAKAFAHQAGAHAIAEQAIAEAKAAQAKAAAIgEQAJgEAFgHQAGgHADgKQADgLAAgMQAAgMgDgJQgDgKgGgHQgFgHgJgFQgIgEgKAAQgKAAgIAEgAFqBQIAAhAIgeAAIgOABQgHABgEADQgFACgDAEQgDAHgBAJIgCAZIgBAGIgBADIgBADIgjAAIADgFIACgFIABgEIACgYIACgNQABgGADgEQACgFAEgDIAMgGIgHgDIgIgEQgFgGgDgHQgDgIAAgIIABgMIAEgJQACgFADgDIAGgHQAGgFAFgCIANgDIANgBIANgBIBCAAIAACfgAEzgxIgEACIgEAEIgDAGIgBAHQAAAFABAEQABAFADACIAFADIAHACIAGAAIAsABIAAgqIgyAAIgFABgADPBQIgKggIg7AAIgMAgIgjAAIA6ifIAmAAIA4CfgACTAUIApAAIgUg/IgBAAgAg3BQIAAifIBOAAQAJAAAIACQAIACAFADQAFADAEAEIAGAJIADAJIABAJIgBALQgBAFgCADQgDAFgEACIgIAHQAIADAEAEQAFAEADAFQADAEAAAHIABAKQAAAMgEAIQgFAKgHAGQgIAGgLADQgLADgNAAgAgWA0IAoAAIAKgBIAIgDQAEgDACgEIABgKQAAgHgBgEIgHgHQgDgCgFAAIgKgCIgnAAgAgWgQIAoAAIAIgBQAEgBADgCQADgDACgDQACgEAAgEQAAgFgCgDIgEgGQgDgCgEAAQgDgBgGAAIgoAAgAknBQIAAhIIg/AAIAABIIgiAAIAAifIAiAAIAAA9IA/AAIAAg9IAhAAIAACfg");
	this.shape_1.setTransform(-69.7,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-109,-8,236.1,20), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002640").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,320,50), null);


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
	this.instance.setTransform(5,3,0.833,0.833);
	this.instance.shadow = new cjs.Shadow("#000000",0,0,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-16.3,-5,46,20), null);


(lib.Анимация4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(40.1,-174.9,1.333,0.125,0,0,0,120,199.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.9,-199.9,320,50);


// stage content:
(lib._320x50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A6P13MA0fAAAMAAAArvMg0fAAAg");
	this.shape.setTransform(160,25,0.952,0.179);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(230));

	// Слой 3
	this.instance = new lib.Анимация4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(120,200.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(211).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(1));

	// luhta
	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(145.3,25.1,0.827,0.041,0,0,0,0.1,2.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(168).to({_off:false},0).to({regX:0,regY:0,scaleY:0.83,x:145.2,y:24.2},6,cjs.Ease.get(1)).wait(46).to({regX:0.1,regY:0.6,scaleY:0.08,x:145.3,y:25},6,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// new
	this.instance_2 = new lib.Символ5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150,25.1,1,0.094);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(54).to({_off:false},0).to({regY:0.3,scaleY:1.1,y:25.7},6,cjs.Ease.get(1)).to({regY:0,scaleY:1,y:25.3},3,cjs.Ease.get(1)).wait(35).to({scaleY:0.05,y:25},4,cjs.Ease.get(0.99)).to({_off:true},1).wait(127));

	// Слой 6
	this.instance_3 = new lib.Символ4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(420.1,50.1,1,1,0,0,0,120.1,50.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(47).to({_off:false},0).to({regX:120,x:120},7,cjs.Ease.get(1)).wait(49).to({x:440},6,cjs.Ease.get(1)).wait(53).to({scaleY:1.1,x:460,y:54.1},0).to({x:120},6,cjs.Ease.get(1)).wait(62));

	// Слой 8
	this.instance_4 = new lib.Символ11();
	this.instance_4.parent = this;
	this.instance_4.setTransform(291,37);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:false},0).to({alpha:1},5,cjs.Ease.get(1)).wait(24).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(55).to({_off:false},0).to({alpha:1},5,cjs.Ease.get(1)).wait(47).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(62));

	// Слой 7
	this.instance_5 = new lib.Символ10();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-50.1,25,0.309,0.309,0,0,0,119.7,48.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({_off:false},0).wait(1).to({regX:130,x:-46.2},0).wait(1).to({x:-44.2},0).wait(1).to({x:-40.5},0).wait(1).to({x:-35},0).wait(1).to({x:-27.5},0).wait(1).to({x:-17.7},0).wait(1).to({x:-5.8},0).wait(1).to({x:7.8},0).wait(1).to({x:21.8},0).wait(1).to({x:34.5},0).wait(1).to({x:44.2},0).wait(1).to({x:50},0).wait(1).to({regX:119.8,x:48.6},0).wait(29).to({x:47.6},0).to({x:-46.9},7,cjs.Ease.get(1)).wait(49).to({x:-46.7},0).to({x:48.6},6,cjs.Ease.get(1)).wait(53).to({x:46.1},0).to({x:-46.7},6,cjs.Ease.get(1)).wait(62));

	// Слой 5
	this.instance_6 = new lib.Символ9();
	this.instance_6.parent = this;
	this.instance_6.setTransform(149.3,135.4,1.001,1.001,0,0,0,119.6,148.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:119.2,regY:148.7,scaleX:1.07,scaleY:1.07,x:125.9,y:-84},229).wait(1));

	// Слой 4
	this.instance_7 = new lib.Символ8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(167.3,172.6,1.205,1.205,0,0,0,139.9,159.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:139.8,scaleX:1.2,scaleY:1.2,x:160.8,y:-30.2},229).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(158.8,5.1,350.2,404.1);
// library properties:
lib.properties = {
	width: 320,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1503849866445", id:"bg"},
		{src:"images/320x50_atlas_P_.png?1503849866422", id:"320x50_atlas_P_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;