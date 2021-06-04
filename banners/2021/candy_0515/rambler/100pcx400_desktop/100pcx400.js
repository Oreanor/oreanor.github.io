(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"100pcx400_atlas_NP_", frames: [[0,0,400,400],[0,402,400,400],[402,0,400,400],[402,402,400,400]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._1 = function() {
	this.spriteSheet = ss["100pcx400_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["100pcx400_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["100pcx400_atlas_NP_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["100pcx400_atlas_NP_"];
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


(lib.t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4, new cjs.Rectangle(-72.3,-29.5,144.6,59), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-74.1,-17.5,148.3,35.2), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AMvBKQgHgCgFgFQgGgFgDgGQgEgHAAgJIAXAAQABAGAEAEQAFAEAGABQAIAAAEgFQAEgEAAgGQAAgHgDgDQgDgFgEgCIgIgDIgKgEIgLgGQgFgEgEgGQgDgFAAgJQAAgIAEgIQAEgHAIgGQAIgFAMAAQALAAAIAFQAHAFAEAHQAEAJABAIIgXAAIgBgGQgCgDgDgBQgDgCgEgBQgGABgDAEQgEADAAAFQABAEACAEQACADAEABIAHACIAKAEQAGACAGAEQAGAEADAHQAEAGABALQAAAKgGAKQgFAIgIAFQgJAFgLAAQgHAAgHgCgAKwBEQgPgJgIgOQgJgOAAgRQAAgRAJgOQAIgOAPgJQAOgIARAAQASAAAPAIQAOAJAJAOQAHAOAAARQAAARgHAOQgJAOgOAJQgOAIgTAAQgRAAgOgIgAK6gVQgJAFgFAKQgFAIAAALQAAALAFAKQAFAJAJAGQAKAGALAAQAMgBAKgFQAJgGAFgJQAFgKAAgLQAAgLgFgIQgFgKgJgFQgKgGgMAAQgLAAgKAGgAFWBEQgOgJgIgOQgJgOAAgRQAAgRAJgOQAIgOAOgJQAOgIASAAQASAAAPAIQAOAJAIAOQAIAOAAARQAAARgIAOQgJAOgOAJQgOAIgSAAQgSAAgOgIgAFhgVQgJAFgGAKQgFAIAAALQAAALAFAKQAGAJAJAGQAJAGAMAAQAMgBAJgFQAKgGAFgJQAFgKAAgLQAAgLgFgIQgFgKgKgFQgJgGgMAAQgMAAgJAGgAhFBEQgPgJgIgOQgJgOAAgRQAAgRAJgOQAIgOAPgJQAOgIARAAQATAAAOAIQANAJAIAOQAJAOgBARQABARgJAOQgIAOgNAJQgOAIgTAAQgRAAgOgIgAg6gVQgKAFgFAKQgGAIABALQgBALAGAKQAFAJAKAGQAJAGALAAQAMgBAKgFQAJgGAFgJQAEgKABgLQgBgLgEgIQgFgKgJgFQgKgGgMAAQgLAAgJAGgAntBGQgMgGgIgJQgIgKgEgLQgDgKAAgLQAAgKADgKQAEgLAIgJQAIgJAMgGQALgGARAAQAMAAAKAFQAMADAHAJQAJAIAFALIgZAAIgIgHQgEgDgGgCQgFgCgHgBQgMABgKAFQgIAGgFAJQgGAJAAAKQAAALAGAKQAFAJAJAGQAJAFAMABQAIAAAHgEQAIgEAGgHIAaAAQgGALgIAIQgHAIgLAEQgLAFgNAAQgPAAgMgGgArjBGQgMgGgIgJQgHgKgEgLQgEgKAAgLQAAgKAEgKQAEgLAHgJQAIgJAMgGQAMgGAPAAQANAAALAFQAKADAIAJQAJAIAFALIgZAAIgHgHQgFgDgFgCQgGgCgIgBQgMABgJAFQgJAGgFAJQgFAJAAAKQAAALAFAKQAGAJAJAGQAJAFAMABQAIAAAHgEQAIgEAGgHIAZAAQgEALgJAIQgIAIgKAEQgKAFgOAAQgPAAgMgGgAuHBGQgMgGgHgJQgJgKgDgLQgEgKAAgLQAAgKAEgKQADgLAJgJQAHgJAMgGQALgGAQAAQANAAALAFQAKADAJAJQAIAIAFALIgZAAIgHgHQgFgDgFgCQgGgCgIgBQgMABgIAFQgJAGgGAJQgFAJAAAKQAAALAFAKQAGAJAJAGQAJAFAMABQAIAAAIgEQAHgEAFgHIAaAAQgFALgHAIQgJAIgKAEQgLAFgNAAQgQAAgLgGgAN/BJIAAhhIgXAAIAAgWIBDAAIAAAWIgXAAIAABhgAJuBJIgfgsIgBAAIAAAsIgVAAIAAh3IAiAAQAPAAAJAFQAKAEAEAGQAFAGABAGQABAHAAAEQAAAJgEAIQgEAIgHAGQgHAEgKACIAiAsgAJOALIAOAAIAFgBIAIgCQAEgBADgEQACgDAAgGQAAgHgCgDQgDgEgEgCIgIgCIgFAAIgOAAgAHqBJIAAh3IA+AAIAAAWIgoAAIAAAbIAmAAIAAAVIgmAAIAAAxgAERBJIg1hQIAABQIgXAAIAAh3IAXAAIA1BQIAAhQIAWAAIAAB3gAB0BJIAAhTIg2BTIgWAAIAAh3IAWAAIAABUIA2hUIAXAAIAAB3gAiLBJIAAhZIggBZIgTAAIgfhZIAABZIgXAAIAAh3IAfAAIAhBbIAhhbIAeAAIAAB3gAlIBJIAAh3IBBAAIAAAWIgrAAIAAAbIApAAIAAAVIgpAAIAAAbIArAAIAAAWgAl/BJIAAhhIgXAAIAAgWIBDAAIAAAWIgXAAIAABhgAo2BJIAAhTIg1BTIgXAAIAAh3IAXAAIAABUIA1hUIAWAAIAAB3gABLg4QgGgCgEgGQgEgFgBgGIATAAQAAAEAEACQADACADAAQAFAAACgCQADgCABgEIATAAQgCAGgEAFQgDAGgGACQgHADgIABQgHgBgHgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-93.9,-7.6,187.8,15.2), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-89.1,-18.5,178.3,37.1), null);


(lib.p4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib._4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p4, new cjs.Rectangle(0,0,400,400), null);


(lib.p3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib._3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p3, new cjs.Rectangle(0,0,400,400), null);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib._2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2, new cjs.Rectangle(0,0,400,400), null);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib._1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1, new cjs.Rectangle(0,0,400,400), null);


(lib.nofrost = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAuAjIAAgyIAEAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAIAAAEIAGgEQADgCAEAAIAGABIAFAEQABACABAEIABAHIgBAIQAAAEgDADIgFAEQgDABgEAAIgGgBQgDgBgBgCIAAARgAA5gJIgEAEIAAARIAEAEIAEABQAGAAACgEQADgEAAgHIgBgFIgCgEIgCgCIgEgBQgDAAgDABgAALAjIAAgNQgFAAgDgBQgEgCgCgCIgEgGQgCgEAAgEQAAgEACgDIAEgGQACgDAEgBQADgCAFAAIAAgPIAGAAIAAAPQAFAAAEACIAGAEIAFAGIABAHIgBAIIgFAGIgGAEQgEABgFAAIAAANgAARARIAGgBIAEgDIADgFIABgFIgBgFIgDgEIgEgDIgGgCgAABgGQgCADgBAGQABAGACAEQADAEAHAAIAAgcQgHABgDAEgAg8AjIAHgQIgQgiIAGAAIACAAIABABIAKAWIABAEIAAgCIAAgCIAKgWIABgBIABAAIAGAAIgVAwIgBABIgCABgACKAVQgDgBgCgDQgCgCgBgEQgCgEAAgEIABgHIADgGIAHgEQADgCAEAAIAHABQADACACACIgBADIgBAAIAAABIgCgBIgCgBIgCgBIgDAAIgGABIgDACIgCAFIAAAFIAAAGIADAEIACADIAFABIAEgBIACgBIADgBIABgBIABABIACACIgDADIgDACIgEABIgEAAIgHgBgABgAVQgDgBgCgDQgDgDgBgDQgBgEAAgEQAAgEABgDQABgEADgDIAFgEIAIgBIAIABQADACACACQACADACAEIABAHIgBAIIgEAGQgCADgDABQgEABgEAAQgFAAgDgBgABfgHQgCAEAAAGQAAAGACAEQADAEAGAAQAFAAADgEQADgEgBgGQABgGgDgEQgDgDgFAAQgGAAgDADgAhjAVQgCgBgDgDQgCgDgCgDQgBgEAAgEQAAgEABgDQACgEACgDIAFgEIAIgBIAIABQAEACACACQACADABAEIABAHIgBAIIgDAGQgCADgEABQgEABgEAAQgEAAgEgBgAhjgHQgCAEgBAGQABAGACAEQADAEAFAAQAGAAACgEQADgEAAgGQAAgGgDgEQgCgDgGAAQgFAAgDADgACwAWIAAggIgOAAIAAgFIAkAAIAAAFIgOAAIAAAggAh/AWIAAgYIgcAAIAAAYIgIAAIAAg1IAIAAIAAAYIAcAAIAAgYIAIAAIAAA1gAi7gJIAAgIIAAgBIAAgBIgCABIgGAEIgCgDIAGgEIABAAIACgBIgDgBIgGgDIACgDIAGADIACACIAAgBIAAgBIAAgIIADAAIAAAHIAAACIAAABIACgCIAGgDIACADIgHADIgBABIgBAAIACABIAHAEIgCADIgGgEIgBAAIgBgCIAAADIAAAIg");
	this.shape.setTransform(19.8,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.nofrost, new cjs.Rectangle(0,0,39.6,7), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApIBUQgrgnAZg4QAWgzBGgeQBOghB+ABQAcAAAaADIAgAFIANADIgSAgQgogLggAAQhAAAg0ASQhHAagLAyQgHAeAWAbQAdAiA9gDQATgBAlgNQAtgPAbgVIA/g3QAGgFAHgDIAMgDIAGgBIBFAAIAVBeIAshdIBLAAIAsBIIAghIIBFAAIg9CEIhHAAIgthMIgiBMIgsAAIAAAAIhRAAIgDgXIhLAAIgZAWIgwAAQg6AUhJAAQhqAAgugpgAjIA4IAsgBIgEglgAGIB2IAtgsIgthkIBEAAIATA2IA4g3IBNAAIiGCGIgEADQgEAEgDABIgQADgAD/BqIhvAAIA8iEIBwAAQA2AAATAaQAQAUgMAaQgLAYgdAQQgkAUg7AAIgDAAgADpBJIAUAAQAXAAARgGQAdgIAFgWQAJgfg2AAIgTAAg");
	this.shape.setTransform(-2.3,-1.4,1.44,1.44);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-90.4,-19.4,176.3,36.1), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("EgXXAvFMAAAheJMAuuAAAMAAABeJg");
	this.shape.setTransform(300,200,2.006,0.664);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,600,400), null);


(lib.text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t4
	this.instance = new lib.t4();
	this.instance.parent = this;
	this.instance.setTransform(0,1.8,0.8,0.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(282).to({_off:false},0).to({scaleX:1,scaleY:1,y:0.9,alpha:1},7,cjs.Ease.get(1)).wait(72).to({scaleX:0.8,scaleY:0.8,y:1.8,alpha:0},7,cjs.Ease.get(1)).wait(1));

	// t3
	this.instance_1 = new lib.t3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0.3,0.8,0.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(189).to({_off:false},0).to({scaleX:1,scaleY:1,y:-0.9,alpha:1},7,cjs.Ease.get(1)).wait(86).to({scaleX:0.8,scaleY:0.8,y:0.3,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(79));

	// t2
	this.instance_2 = new lib.t2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-1.8,0.8,0.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(93).to({_off:false},0).to({scaleX:1,scaleY:1,y:-3.5,alpha:1},7,cjs.Ease.get(1)).wait(89).to({scaleX:0.8,scaleY:0.8,y:-1.8,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(172));

	// t1
	this.instance_3 = new lib.t1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,5.3,0.8,0.8);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,y:5.4,alpha:1},7,cjs.Ease.get(1)).wait(86).to({scaleX:0.8,scaleY:0.8,y:5.3,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(268));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.3,-9.5,142.6,29.7);


(lib.pics = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// p4
	this.instance = new lib.p4();
	this.instance.parent = this;
	this.instance.setTransform(-43.5,-59,1,1,0,0,0,156.5,141);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(273).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(83).to({alpha:0},6,cjs.Ease.get(1)).wait(1));

	// p3
	this.instance_1 = new lib.p3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-50,-64,1,1,0,0,0,150,136);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(182).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(83).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(91));

	// p2
	this.instance_2 = new lib.p2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-50,-64,1,1,0,0,0,150,136);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(91).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).to({_off:true},92).wait(180));

	// p1
	this.instance_3 = new lib.p1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-50,-64,1,1,0,0,0,150,136);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},6,cjs.Ease.get(1)).to({_off:true},92).wait(271));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-200,400,400);


(lib.legal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 11
	this.instance = new lib.nofrost();
	this.instance.parent = this;
	this.instance.setTransform(-62.4,-27,1.2,1.2,0,0,0,19.8,3.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(94).to({_off:false},0).to({alpha:1},5,cjs.Ease.get(1)).wait(92).to({alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(172));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ALzCOQgGgFAAgIIAHgBQABAHAEACQADADAEAAQAGAAAEgDQAEgEAAgGQAAgFgEgDQgEgEgFAAIgGABIACgHIABAAQAFAAADgCQAFgDAAgGQAAgDgDgDQgDgDgFAAQgEAAgDADQgDADgBAFIgIgBQACgIAFgEQAFgFAHAAQAFAAAFADQAEACACAEQADAEAAAEQAAAEgDADQgCADgEADQAFABAEAEQADAEAAAGQAAAIgGAGQgGAGgKAAQgIAAgFgFgALCCOQgGgFAAgIIAHAAQABAGAEACQADADAEAAQAHAAADgEQAEgEAAgHQAAgHgEgEQgDgDgHAAQgDAAgDACQgDABgCADIgHgBIAGggIAfAAIAAAHIgZAAIgDARQAGgEAGAAQAIAAAFAFQAGAGAAAJQAAAJgEAGQgHAIgLAAQgIAAgFgFgAJgCMQgGgHAAgSQAAgMACgGQACgHAFgEQAEgEAHAAQAFAAAEADQAEABADAEIADAKIABAPQAAALgCAHQgCAGgEAEQgFAEgHAAQgJAAgFgHgAJlBdQgEAGAAAQQAAAPAEAFQAEAFAFAAQAGAAADgFQAEgFAAgPQAAgQgEgFQgDgFgGAAQgFAAgEAEgAH+CMQgGgHAAgSQAAgMACgGQACgHAFgEQAEgEAHAAQAFAAAEADQAEABADAEIADAKQACAFAAAKQAAALgDAHQgCAGgEAEQgFAEgHAAQgJAAgFgHgAIDBdQgDAGAAAQQAAAPADAFQAEAFAFAAQAGAAADgFQAEgFAAgPQAAgQgEgFQgDgFgGAAQgFAAgEAEgAHcCTQgKAAgGgHQgGgHAAgRQAAgSAHgIQAGgIAKAAIADABQAGAAADAEQAFAEABAHIgIABQgBgFgCgCQgCgCgCAAIgEgBIgGACQgEACgCAFQgCAGAAAJQADgEAEgCIAIgCIADABQAGAAAFAFQAFAFAAAJQAAAGgDAFQgCAFgFADIgGADIgEAAgAHTBzQgEAEAAAGIACAIQABADAEADQADABADAAIAEAAIAFgEQADgDAAgHQAAgHgDgEIgFgDIgEAAQgGAAgDADgAGdCPQgFgEgBgIIAHgBQABAGADACQADACAEAAQAEAAACgBIAFgEIACgIQACgEAAgFIAAgCQgDAEgEACQgEACgEAAQgJAAgFgFQgFgGAAgJQAAgKAFgFQAGgHAJAAQAGAAAFAEQAFADACAGQADAGAAAMQAAAMgDAHQgCAHgFAEQgFAEgHAAQgHAAgFgEgAGiBdQgEAEAAAHQAAAGAEAEQADAEAFAAQAGAAADgEQADgEAAgHQAAgGgDgEQgEgEgFAAQgFAAgDAEgADYCMQgGgHAAgSQAAgMACgGQADgHAEgEQAEgEAIAAQAEAAAEADQAEABADAEQACAEACAGIABAPQAAALgCAHQgDAGgEAEQgEAEgHAAQgKAAgFgHgADeBdQgEAGAAAQQAAAPAEAFQADAFAGAAQAFAAADgFQAEgFAAgPQAAgQgEgFQgDgFgFAAQgGAAgDAEgAhWCOQgHgEgEgHQgDgIAAgIQAAgPAIgJQAIgKAOAAQAIAAAIAFQAHAEAEAHQADAIAAAJQAAAKgEAHQgEAIgHAEQgHAEgIAAQgJAAgHgFgAhVBfQgHAGAAAOQAAALAHAHQAGAHAJAAQAJAAAHgHQAGgHAAgMQAAgHgDgGQgDgGgFgDQgFgDgGAAQgJAAgGAGgAioCOQgFgFgBgIIAIAAQABAGADACQAEADAEAAQAGAAAEgEQAEgEAAgHQAAgHgEgEQgEgDgGAAQgEAAgDACQgDABgCADIgHgBIAGggIAgAAIAAAHIgaAAIgDARQAGgEAGAAQAIAAAGAFQAGAGAAAJQAAAJgFAGQgGAIgLAAQgIAAgGgFgAkKCMQgGgHAAgSQAAgMACgGQADgHAEgEQAEgEAIAAQAFAAADADQAEABADAEIAEAKIABAPQAAALgCAHQgCAGgFAEQgEAEgHAAQgKAAgFgHgAkEBdQgEAGAAAQQAAAPAEAFQADAFAGAAQAFAAADgFQAEgFAAgPQAAgQgEgFQgDgFgFAAQgGAAgDAEgAmdCOQgFgFgBgIIAIAAQABAGAEACQADADAEAAQAGAAAEgEQAEgEAAgHQAAgHgEgEQgEgDgGAAQgEAAgCACQgEABgBADIgHgBIAGggIAfAAIAAAHIgZAAIgEARQAGgEAGAAQAJAAAFAFQAGAGAAAJQAAAJgFAGQgGAIgLAAQgIAAgGgFgAn+CMQgGgHAAgSQAAgMACgGQACgHAEgEQAFgEAHAAQAFAAAEADQAEABACAEIAEAKIABAPQAAALgCAHQgCAGgFAEQgEAEgHAAQgJAAgFgHgAn5BdQgEAGAAAQQAAAPAEAFQADAFAGAAQAFAAAEgFQ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gJAAgGgGgAm4AWQgGgGAAgLQAAgMAHgGQAGgFAIAAQAJAAAGAGQAHAGAAAKQAAAJgDAFQgDAFgFADQgFACgGAAQgJAAgGgGgAmygHQgEAEAAAIQAAAIAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgHgEgEQgEgFgGAAQgFAAgEAFgAptAPIAHgCQABAEADADQADACAEAAQAEAAACgCQADgCAAgEQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgEgDQgCgBgFAAIgCABIAAgHIAHAAIADgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAQAAgDgCgCQgCgCgEAAQgGAAgCAIIgIgBQAEgNANAAQAHAAAEADQAEAFAAAFQAAAFgFADQADACACADQACADAAAEQAAAGgEAEQgFADgIAAQgQAAgCgNgAqXAWQgGgGAAgLQAAgLAGgGQAFgGAKAAQAJAAAGAGQAGAGAAAKIAAACIgiAAQAAAIAEAEQAEAEAFAAQAFAAADgCQADgDABgEIAJABQgDAHgEAEQgFADgJAAQgKAAgFgGgAqQgIQgEADgBAFIAaAAQgBgFgCgCQgEgFgGAAQgFAAgDAEgArJAWQgGgGAAgLQAAgMAIgGQAGgFAIAAQAJAAAGAGQAGAGAAAKQAAAJgCAFQgDAFgFADQgFACgGAAQgKAAgGgGgArDgHQgDAEAAAIQAAAIADAEQAEAFAGAAQAGAAAEgFQAEgEAAgJQAAgHgEgEQgEgFgGAAQgGAAgEAFgADQAbIAAgIIAJAAIAAAIgABXAbIAAghIgVAhIgJAAIAAgsIAIAAIAAAhIAWghIAIAAIAAAsgAgXAbIABgFQABgEAEgEQADgEAHgGIANgMQAEgFAAgFQAAgEgEgEQgDgCgEAAQgGAAgDADQgEADAAAGIgHgBQAAgJAGgEQAFgFAJAAQAIAAAFAFQAFAFAAAIIgBAHQgBAEgEAEIgLAKIgJAIIgDAEIAeAAIAAAHgAg/AbIAAghIgWAhIgIAAIAAgsIAIAAIAAAhIAVghIAJAAIAAAsgAhwAbIAAghIgVAhIgJAAIAAgsIAIAAIAAAhIAVghIAJAAIAAAsgAibAbIgJgOIgEgFQgBgBAAAAQgBAAAAAAQgBgBgBAAQAAAAgBAAIAAAVIgIAAIAAgsIAIAAIAAATQAEAAABgCQACAAADgHIAEgIIADgCIAFAAIACAAIAAAGIgCAAIgEABQgBABgCAEIgDAGQgBACgDABQAFABAFAIIAIAOgAjzAbIAAgUIgWAAIAAAUIgIAAIAAgsIAIAAIAAASIAWAAIAAgSIAHAAIAAAsgAkkAbIAAghIgVAhIgJAAIAAgsIAIAAIAAAhIAWghIAIAAIAAAsgAn1AbIAAg+IAYAAIAJABQAFABADACQADACACAEQACAEAAAFQAAAIgFAFQgFAFgOAAIgQAAIAAAZgAntgFIAQAAQAJAAADgDQADgDAAgFQAAgEgBgDQgDgDgDgBIgIAAIgQAAgAsSAbIAAg2IggAAIAAA2IgIAAIAAg+IAxAAIAAA+gAAZAJIAAgJIAYAAIAAAJgABEgaQgDgDgBgFIAFAAIADAEIAEABIAGgBIACgEIAFAAQAAAFgDADQgEADgFAAQgGAAgDgDgAhSgaQgEgDAAgFIAFAAIADAEIAEABIAFgBQACgCABgCIAFAAQAAAFgEADQgDADgGAAQgFAAgDgDgAlKhDIAAgPIgqAAIAAAPIgHAAIAAgWIAFAAQAHgLAAgkIAAgJIAmAAIAAA4IAGAAIAAAWgAlniGIgBAWQgCAOgEAJIAdAAIAAgwIgWAAgAMyhIQACgBACgDIABgGIgFAAIAAgIIAJAAIAAAIQAAAFgCADQgBADgEACgAGFhIQACgBACgDIABgGIgFAAIAAgIIAJAAIAAAIQAAAFgCADQgBADgEACgAMBhUQgEgEAAgGQAAgDACgDQABgDACgBIAGgDIAGgBIAPgDIAAgBQAAgFgCgCQgEgDgFAAQgGAAgCACQgDACgBAFIgIgBIADgIQADgDAEgCQAFgBAGAAQAFAAAEABQAEABACADIACAFIAAAHIAAAKQAAALABADIACAFIgIAAQgCgCAAgDIgIAFIgJABQgHAAgEgDgAMQhlIgHABIgDACIgBAEQAAADACACQADACAEAAQAFAAADgCQADgBACgEQACgCAAgFIAAgEIgNAEgAKChXQgGgGAAgLQAAgIACgFQADgGAFgDQAEgCAHAAQAHAAAFADQAFAEABAHIgHACQgCgFgCgDQgDgCgEAAQgGAAgEAEQgDAEAAAJQAAAKADAEQAEAEAGAAQAEAAADgDQADgDABgFIAIAAQgCAJgFAEQgFAEgHAAQgKAAgFgGgAJQhXQgGgGAAgLQAAgNAHgGQAGgFAJAAQAJAAAGAGQAGAGAAALQAAAJgDAFQgCAFgFADQgFACgGAAQgKAAgGgGgAJWh1QgEAEAAAJQAAAIAEAEQAEAFAGAAQAGAAADgFQAEgEAAgJQAAgIgEgEQgDgFgGAAQgGAAgEAFgAFXhUQgFgFAAgHIAHgBQABAFADADQACACAEAAQAEAAADgCIAEgEIADgHIABgKIAAgBQgCAEgFACQgDACgFAAQgIAAgGgGQgFgFAAgJQAAgKAGgGQAFgGAJAAQAGAAAFADQAFAEADAGQADAGAAALQAAAMgDAIQgDAHgFAEQgFADgHAAQgHAAgFgDgAFciGQgEAEAAAHQAAAGAEADQADAEAGAAQAFAAAEgEQADgDAAgHQAAgHgDgDQgEgEgFAAQgFAAgEAEgADEhVQgGgFAAgIIAHgBQABAGAEADQADADAEAAQAGAAAEgEQAEgEAAgIQAAgGgEgEQgEgEgGAAQgDAAgDACQgEACgBADIgHgBIAGghIAfAAIAAAHIgZAAIgEARQAHgDAGAAQAIAAAFAFQAGAGAAAJQAAAJgFAGQgGAHgLAAQgIAAgFgEgAjXhVQgGgEgEgHQgDgJAAgJQAAgJAEgIQAEgHAGgEQAHgDAJAAQAJAAAHAEQAGAFACAJIgIABQgCgGgEgEQgEgDgGAAQgHAAgFAEQgFADgDAGQgBAGAAAGQAAAIACAGQACAGAFAEQAFACAGAAQAHAAAFgEQAFgEABgIIAJADQgDAJgHAGQgGAFgKAAQgLAAgGgEgAqkhVQgHgEgEgHQgDgIAAgIQAAgQAIgJQAJgJANAAQAJAAAHAEQAHAFAEAHQADAIAAAJQAAAJgEAIQgEAIgHAEQgHADgIAAQgJAAgHgEgAqjiEQgHAGAAAOQAAALAHAHQAGAGAJAAQAKAAAGgGQAGgHAAgMQAAgIgDgGQgDgFgFgEQgFgDgGAAQgJAAgGAHgArohVQgHgEgEgHQgDgIAAgIQAAgQAIgJQAIgJAOAAQAIAAAHAEQAIAFADAHQAEAIAAAJQAAAJgEAIQgEAIgHAEQgHADgIAAQgJAAgHgEgArniEQgHAGAAAOQAAALAHAHQAGAGAJAAQAJAAAGgGQAHgHAAgMQAAgIgDgGQgDgFgFgEQgFgDgGAAQgJAAgGAHgAsshVQgHgEgEgHQgDgIAAgIQAAgQAIgJQAIgJAOAAQAIAAAHAEQAHAFAEAHQAEAIAAAJQAAAJgEAIQgEAIgHAEQgHADgIAAQgJAAgHgEgAssiEQgGAGAAAOQAAALAGAHQAHAGAIAAQAKAAAGgGQAGgHAAgMQAAgIgCgGQgDgFgFgEQgFgDgGAAQgJAAgHAHgALRhSIAAgtIARAAIAKABQAEABACADQACADAAAEQAAADgBACQgCADgCACQADABACADQACACAAAFQAAAGgFADQgEADgIAAgALZhYIAJAAIAKgBQACgCAAgEQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAIgHAAIgJAAgALZhsIAIAAIAGgBIAEgCQAAAAAAgBQABAAAAAAQAAgBAAgBQAAAAAAgBQAAgDgCgCIgJgBIgIAAgALDhSIgIgOIgFgFIgCgBIgCgBIAAAVIgIAAIAAgtIAIAAIAAAUIACAAIADgCQACgBACgHIAEgIQABAAAAAAQAAgBABAAQAAAAABAAQAAgBABAAIAFAAIACAAIAAAGIgCAAIgEABIgDAFIgDAHQgBACgEABQAFABAFAIIAIAOgAI5hSIAAg0IgTA0IgHAAIgSg1IAAA1IgIAAIAAg/IAMAAIAPAtIADAKIADgLIAQgsIALAAIAAA/gAHWhSIAAgIIAJAAIAAAIgAG0hSIAAgtIAaAAIAAAGIgSAAIAAAngAE1hSIAAgxIgIAFQgEADgEABIAAgHQAHgDAFgFIAHgIIAFAAIAAA/gAEHhSIAAgOIgbAAIAAgIIAcgpIAHAAIAAApIAIAAIAAAIIgIAAIAAAOgADzhoIAUAAIAAgcgACihSIAAgxIgIAFIgIAEIAAgHQAHgDAFgFQAFgEACgEIAFAAIAAA/gABxhSIAAgxIgIAFQgEADgEABIAAgHQAHgDAFgFQAFgEACgEIAFAAIAAA/gAAAhSIAAgIIAIAAIAAAIgAgxhSIAAg/IAoAAIAAAIIggAAIAAA3gAhIhSIAAgIIAIAAIAAAIgAhghSIAAgdIghAAIAAAdIgIAAIAAg/IAIAAIAAAbIAhAAIAAgbIAIAAIAAA/gAighSIAAgIIAIAAIAAAIgAkPhSIAAgxIghAxIgJAAIAAg/IAHAAIAAAyIAigyIAJAAIAAA/gAmLhSIAAgdIghAAIAAAdIgIAAIAAg/IAIAAIAAAbIAhAAIAAgbIAJAAIAAA/gAnEhSIgIgTIgaAAIgHATIgJAAIAYg/IAJAAIAaA/gAndh+IgHATIAWAAIgHgSQgDgIgBgFIgEAMgAoAhSIgLgRIgHgKQgDgCgFAAIAAAdIgIAAIAAg/IAIAAIAAAcQAGAAACgCQADgCADgJIAFgJQABgCADgCQADgCAEAAIAGABIAAAHIgCAAIgCAAQgEAAgCABIgFAJQgCAIgDACQgCACgDABQAGACAGAJIANAVgAAlhVIAMgTIgMgUIAHAAIAOAUIgOATgAAVhVIALgTIgLgUIAGAAIAOAUIgOATgAo2hVIgNgTIANgUIAGAAIgLAUIALATgApHhVIgNgTIANgUIAHAAIgLAUIALATg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(369));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.7,-14.6,165.5,29.4);


(lib.pics1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3bfQMAAAg+fMAu3AAAMAAAA+fg");

	// Слой 1
	this.instance = new lib.pics();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pics1, new cjs.Rectangle(-150,-200,300,400), null);


// stage content:
(lib._100pcx400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop(); 
		stage.addEventListener("resize", res);
		
		var bg = this.bg;
		var legal = this.legal;
		var text = this.text;
		var logo = this.logo;
		var pics = this.pics;
		var pics2 = this.pics2;
		
		
		function res() {
			var wdt = stage.canvas.width;
			var hgt = stage.canvas.height;
			
			var sc = wdt/600;
			
			bg.scaleX = sc;
			
			
			if (wdt<700){
				pics.x = 150;
				pics2.x = - 1000;
				
				let x1 = (wdt - 300)*0.5 + 300;
				
			
				text.scaleX = 1;
				text.scaleY = 1;
				text.x = x1;
				text.y = 130;
				
				logo.scaleX = 1;
				logo.scaleY = 1;
				logo.x = x1;
				logo.y = 270;
				
				legal.x = x1;
				legal.y = 370;
				
			} else if (wdt<1000){
				pics.x = -1000;
				pics2.x = 200;
				
				let x1 = (wdt - 400)*0.5 + 400;
				
				text.scaleX = 1;
				text.scaleY = 1;
				text.x = x1;
				text.y = 130;
				
				logo.scaleX = 1;
				logo.scaleY = 1;
				logo.x = x1;
				logo.y = 270;
				
				legal.x = x1;
				legal.y = 370;
			} else if (wdt<1300){
				pics.x = wdt/2;
				pics2.x = - 1000;
				
				let pole = wdt/2 - 150;
				
				let x1 = pole/2;
				let x2 = wdt/2 + 150 + pole/2;
				
				text.scaleX = 1.2;
				text.scaleY = 1.2;
				text.x = x1;
				text.y = 200;
				
				logo.scaleX = 1.2;
				logo.scaleY = 1.2;
				logo.x = x2;
				logo.y = hgt/2;
				
				legal.x = x2;
				legal.y = 370;
			} else {
				pics2.x = wdt/2;
				pics.x = - 1000;
				
				let pole = wdt/2 - 150;
				
				let x1 = pole/2;
				let x2 = wdt/2 + 150 + pole/2;
				
				text.scaleX = 1.2;
				text.scaleY = 1.2;
				text.x = x1;
				text.y = 200;
				
				logo.scaleX = 1.2;
				logo.scaleY = 1.2;
				logo.x = x2;
				logo.y = hgt/2;
				
				legal.x = x2;
				legal.y = 370;
			}
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.text = new lib.text();
	this.text.parent = this;
	this.text.setTransform(450.6,144.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// pics2
	this.pics2 = new lib.pics();
	this.pics2.parent = this;
	this.pics2.setTransform(158,200);

	this.timeline.addTween(cjs.Tween.get(this.pics2).wait(1));

	// pics
	this.pics = new lib.pics1();
	this.pics.parent = this;
	this.pics.setTransform(150,200);

	this.timeline.addTween(cjs.Tween.get(this.pics).wait(1));

	// legal
	this.legal = new lib.legal();
	this.legal.parent = this;
	this.legal.setTransform(452.9,375.4);

	this.timeline.addTween(cjs.Tween.get(this.legal).wait(1));

	// logo
	this.logo = new lib.logo();
	this.logo.parent = this;
	this.logo.setTransform(446.8,274);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// bg
	this.bg = new lib.bg();
	this.bg.parent = this;
	this.bg.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(250,200,650.1,400.1);
// library properties:
lib.properties = {
	width: 600,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/100pcx400_atlas_NP_.jpg", id:"100pcx400_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;