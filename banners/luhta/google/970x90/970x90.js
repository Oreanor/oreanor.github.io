(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"970x90_atlas_P_", frames: [[272,0,7,6],[0,133,240,97],[242,133,44,12],[0,0,270,131]]}
];


// symbols:



(lib.astr = function() {
	this.spriteSheet = ss["970x90_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,550,135);


(lib._new = function() {
	this.spriteSheet = ss["970x90_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.novaya = function() {
	this.spriteSheet = ss["970x90_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.people = function() {
	this.spriteSheet = ss["970x90_atlas_P_"];
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
	this.instance.setTransform(101,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(101,-6,44,12), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AxhC6QhOhMAAhuQAAhsBOhNQBNhOBtAAQBtAABNBOQBOBNAABsQAABuhOBMQhNBOhtAAQhtAAhNhOgAvGhcQgPANgGAOIgyCLICfAAQAYAAARgNQAOgKACgMIigAAIAyiRIgCAAQgPAAgSAOgAh+A9QgcgSAAgrIAAh1IBLAAIAAByQAAARALAHQAIAIAUAAQATAAAJgIQAKgHAAgRIAAhyIBKAAIAAB1QAAArgcASQgaARg6AAQg9AAgZgRgARgBHIgIgWIhOAAIgHAWIhQAAIBRi8IBbAAIBRC8gAQaADIAuAAIgWg/IgBAAgAKyBHIAAiMIhGAAIAAgwIDVAAIAAAwIhFAAIAACMgAGMBHIAAhKIhUAAIAABKIhLAAIAAi8IBLAAIAABCIBUAAIAAhCIBLAAIAAC8gAntBHIAAi8IBKAAIAACJIB0AAIAAAzg");
	this.shape.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-120,-25.3,240,52.8), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AIOGnIAAgxIigAAIAAjgIAvAAIAAC5IBYAAIAAi5IAuAAIAAC5IATAAIAABYgAkmF7IgPgFIAAgnIALAGIAHABQAHAAADgEQAFgDACgEQACgFAAgEIABgIIAHikICcAAIAADgIgvAAIAAi5IhBAAIgDBlIgDAcQAAANgDAIQgDAKgDAHQgEAIgGAFQgEAEgHACQgGAEgGAAIgLABQgIAAgHgBgAoOF7IgOgFIAAgnIAMAGIAGABQAGAAAFgEQADgDACgEIAEgJIABgIIAFikICdAAIAADgIguAAIAAi5IhDAAIgDBlIgCAcQgBANgDAIQgCAJgDAIQgFAIgFAFQgFAEgHACIgLAEIgLABQgIAAgIgBgArRFzQgVgJgMgQQgOgPgHgWQgHgWABgZQgBgaAHgUQAHgXAOgPQAMgQAVgIQAUgKAcABQAYgBAVAKQATAIAOAQQAOAQAIAWQAHAVAAAZQAAAZgHAWQgIAVgOAQQgOAQgTAJQgUAJgZAAQgcAAgUgJgAq7C/QgMAFgHALQgIAKgFAOQgDAPAAAQQAAARADAOQAFAOAIALQAHAJAMAHQALAFAPAAQAOAAALgFQALgHAIgJQAJgLADgOQAFgNgBgSQABgRgFgOQgDgOgJgKQgIgLgLgFQgLgGgOAAQgPAAgLAGgAO7F2IAAhYIgqAAIgTABQgKAAgGADQgHAEgDAHQgEAJgCANIgCAWIgBALIgBAJIgDAJIgxAAIAEgHIACgGIAFgpIADgSQABgHADgHQAEgGAGgFQAHgEAJgDIgJgFQgGgDgFgFQgHgHgFgLQgEgLAAgMQAAgIABgHQACgIAEgGIAGgMIAJgJQAIgHAIgDQAIgDAJgBIASgCIBxAAIAADggAN8C+IgHABIgGAAIgHAEIgFAFIgFAJQgBAEAAAHQAAAHACAGQACAEADADQADAEAFABIAJADIAJABIA9AAIAAg7Ig5AAIgGAAgALYF2IAAiYIAAAAIhZCYIgwAAIAAjgIAtAAIAACZIABAAIBZiZIAvAAIAADggAEcF2IhFhjIgXAYIAABLIguAAIAAjgIAuAAIAABcIBWhcIA8AAIhbBcIBhCEgAhAF2IAAjgICkAAIAAAnIh3AAIAAAxIBuAAIAAAnIhuAAIAAA5IB8AAIAAAogAtXF2IhFhjIgXAYIAABLIgvAAIAAjgIAvAAIAABcIBWhcIA8AAIhbBcIBgCEgAnvgLQglgQgXgdQgZgcgMgnQgMgogBgtQABgtAMgoQAMgnAZgcQAXgdAlgQQAmgRAwABQAtgBAkARQAmAQAYAdQAaAcANAnQAOAnAAAuQAAAtgOAoQgNAngaAcQgZAdglAQQgkAQgtAAQgwAAgmgQgAnHlSQgUALgPASQgOATgIAaQgIAaABAeQgBAeAIAaQAIAaAOATQAPASAUALQAVAKAZAAQAbAAATgKQAVgLAOgSQAOgUAIgZQAHgZAAgfQAAgfgHgZQgHgZgPgUQgOgSgVgLQgTgKgbAAQgaAAgUAKgAOVgFIAAigIhLAAIgkABQgPABgMAGQgMAHgHANQgIAOgCAaIgFA9IgDAOIgCAKIgDAHIhYAAIAGgMIAEgNIADgNIAGg8IAEggQAEgPAGgLQAGgLALgJQALgIASgGIgRgHQgJgFgLgKQgNgOgIgSQgHgUAAgXQAAgOADgOQADgMAFgMQAGgLAIgLQAHgIAJgJQANgLAPgFQAPgGAQgDQASgDAQAAIAhAAICqAAIAAGWgAMXlSIgLACIgLAGQgFAEgFAGQgFAHgDAIQgDAIAAAMQAAANAEAJQADAKAGAFQAHAHAIACQAIAEAHACIAQABIBuABIAAhtgAIOgFIgahTIiXAAIgcBTIhaAAICSmWIBhAAICQGWgAF0ifIBnAAIgyihIgBAAgAiOgFIAAmWIDHAAQAYAAAUAEQASAFAOAIQAOAIAKALQAJALAGAKQAFAMACAMQADAMAAAKQAAARgDAMQgCAMgHAKQgGAKgJAIQgJAIgOAHQAUAIANALQAMAMAHANQAHANACAOQACAMAAAPQAAAdgLAXQgKAXgUAPQgUAQgcAHQgcAJgjgBgAg8hLIBoAAQAPABALgEQAMgDAKgHQAIgHAFgKQAFgLAAgOQAAgSgGgKQgGgLgKgGQgIgGgNgCQgMgBgNAAIhmAAgAg8j7IBnAAQAMAAAKgDQALgCAHgGQAIgFAEgJQAFgKABgLQAAgOgFgIQgEgJgIgEQgHgGgKgBQgJgCgMAAIhqAAgArygFIAAi1IigAAIAAC1IhVAAIAAmWIBVAAIAACaICgAAIAAiaIBVAAIAAGWg");
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
	this.instance.setTransform(40,0,1.332,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.9,-200,970,90);


// stage content:
(lib._970x90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EhLxgHBMCXjAAAIAAODMiXjAAAg");
	this.shape.setTransform(485,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(172));

	// Слой 3
	this.instance = new lib.Анимация3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(120,200.1);

	this.instance_1 = new lib.Анимация4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(120,200.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},8).to({state:[]},1).to({state:[{t:this.instance}]},153).to({state:[{t:this.instance}]},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,alpha:0},8,cjs.Ease.get(1)).wait(154).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(1));

	// luhta
	this.instance_2 = new lib.Символ6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(818,45,0.75,0.037,0,0,0,0,1.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(75).to({_off:false},0).to({regY:0,scaleY:0.75,y:44.3},6).wait(81).to({regX:0.1,regY:0.5,scaleY:0.1},9,cjs.Ease.get(1)).wait(1));

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
	this.instance_4.setTransform(-89,43.6,0.75,0.75,0,0,0,120,48.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).wait(1).to({regX:130.5,regY:46.3,x:-78.4,y:41.9},0).wait(1).to({x:-69},0).wait(1).to({x:-50.1},0).wait(1).to({x:-18.9},0).wait(1).to({x:22.2},0).wait(1).to({x:59.6},0).wait(1).to({x:83.6},0).wait(1).to({x:95.6},0).wait(1).to({regX:120,regY:48.6,x:91,y:43.6},0).wait(52).to({regX:130.5,regY:46.3,x:96.2,y:41.9},0).wait(1).to({x:85.6},0).wait(1).to({x:59.8},0).wait(1).to({x:7.4},0).wait(1).to({x:-43.5},0).wait(1).to({x:-68.1},0).wait(1).to({x:-78.4},0).wait(1).to({regX:120,regY:48.6,x:-89,y:43.6},0).to({_off:true},1).wait(93));

	// new
	this.instance_5 = new lib.Символ5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(820,45.1,0.75,0.071,0,0,0,0,0.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).to({regY:0.3,scaleY:0.83,y:45.5},6,cjs.Ease.get(1)).to({regY:0,scaleY:0.75,y:45.2},3,cjs.Ease.get(1)).wait(55).to({scaleY:0.04,y:45},4,cjs.Ease.get(0.99)).to({_off:true},1).wait(97));

	// Слой 6
	this.instance_6 = new lib.Символ4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(820.1,45.1,1.25,0.9,0,0,0,120,50.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(172));

	// Слой 5
	this.instance_7 = new lib.Символ9();
	this.instance_7.parent = this;
	this.instance_7.setTransform(566.2,97.5,1.273,1.274,0,0,0,119.9,148.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:119.7,regY:148.5,scaleX:1.44,scaleY:1.44,x:524,y:99.2},171).wait(1));

	// Слой 4
	this.instance_8 = new lib.Символ8();
	this.instance_8.parent = this;
	this.instance_8.setTransform(179,179,1.273,1.274,0,0,0,139.8,159.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:139.9,regY:159.8,scaleX:1.31,scaleY:1.31,x:133.2,y:190.4},171).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(484,21,972,172.1);
// library properties:
lib.properties = {
	width: 970,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1503851054907", id:"bg"},
		{src:"images/970x90_atlas_P_.png?1503851054889", id:"970x90_atlas_P_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;