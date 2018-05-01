(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"240x400_atlas_", frames: [[290,481,101,53],[161,481,127,48],[393,481,91,37],[440,392,54,49],[242,0,240,194],[242,196,240,194],[0,216,240,194],[0,0,240,214],[0,453,159,48],[242,392,196,45],[0,412,219,39],[0,503,135,43],[221,439,210,40]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
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



(lib.i0 = function() {
	this.spriteSheet = ss["240x400_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.i1 = function() {
	this.spriteSheet = ss["240x400_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.i2 = function() {
	this.spriteSheet = ss["240x400_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.i3 = function() {
	this.spriteSheet = ss["240x400_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.p0 = function() {
	this.spriteSheet = ss["240x400_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.p1 = function() {
	this.spriteSheet = ss["240x400_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.p2 = function() {
	this.spriteSheet = ss["240x400_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.p3 = function() {
	this.spriteSheet = ss["240x400_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.t0 = function() {
	this.spriteSheet = ss["240x400_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.t1 = function() {
	this.spriteSheet = ss["240x400_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.t2 = function() {
	this.spriteSheet = ss["240x400_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.t3 = function() {
	this.spriteSheet = ss["240x400_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.t4 = function() {
	this.spriteSheet = ss["240x400_atlas_"];
	this.gotoAndStop(12);
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


(lib.uuiui = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.t2();
	this.instance.parent = this;
	this.instance.setTransform(-109.5,-19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.uuiui, new cjs.Rectangle(-109.5,-19.5,219,39), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A/IG0IAAtnMA+RAAAIAANng");
	mask.setTransform(199.3,43.6);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4A4A49").s().p("AF3C9QgZgKgVgTQgVgUgNgfQgNgeAAgqIABgdQhcBFhAAgQhNAmgsAAQgeAAgVgMQgTgLgPgXQgNgVgGgXIgNgsQgKgugLAAQgUAAgfAkQgfAjhGBbQgFAKgOACQgHABgFgFQgFgFABgPIALhsQgnAlgyAfQh3BMhcg5QgkgWgggvQgzBTgrALQgZAGgOgRQgNgSAAgoIABgTQgQAOgOAKQg0AmgzAZQg0AbgyAOQg2APgoAAQg/AAgfhAQgfhAAUhrQAEgTANAAQAFAAAFADQASAKgDAXQgMBGAUArQATAoAkAAQAmAAAwgOQAtgOAzgaQAygbAvggQAwgjAngoIAFgFIAHgLQATgeAcgZQAbgXAXAAQAnAAALAtQAKAqgDAeQgFAXgQAAIgDAAQgIgBgEgFIAGAJQAcAxAiARQAjASAbAAQAyAAA9gnQA/goAyg2IABgBQAQgKAKAKQAQAKgCAWIgIBBQAhgmAigkQAogrAcAAQAgAAALAgIAQA2QAIAfARAhQAPAeAnAAQAoAABHgiQBGgiB1hbQANgeASgXQAXgdAYgRQAbgRATgEIAFAAQATAAABAeQABAWgIAHQgFAGgHAAQgRAEgRALQgSAMgRAWQgQAVgMAfQgNAfAAAlQAAAzAhAXQAiAWAiAAQBiAABSg9QBUg/A3hSIABgBQAFgKAHgJQATgeAcgZQAbgXAXAAQAnAAALAtQAKAqgDAeQgFAXgQAAIgDAAQgIgBgEgFIAGAJQAcAxAiARQAiASAcAAQAyAAA9gnQA9gnA0g3IABgBQAJgFAFAAQANAAAFASQAGAYgMAQQg4A8hEAqQhEAsg7AAQgsAAgogZQglgXgfguQgzBTgrALQgZAGgOgRQgNgSAAgoIAAgCQgpArgtAkQhcBFhoAAQgXAAgbgJgAM3hcQgUATgOAWQgRAbgLAZQgLAbAAAYQAAAFABACIAGgEIAMgKQAOgMAQgVQAPgQASgcQAPgXAOAGQAHADAGAIQgFgIAAgQQACgNgEgSQgDgNgKAAQgOAAgRAOgArChcQgUATgOAWQgRAbgLAZQgLAbAAAYQAAAFABACIAGgEIAMgKQAQgPAOgSQAQgSARgaQAPgXAOAGQAHADAGAIQgFgIAAgQQACgNgEgSQgDgNgKAAQgOAAgRAOg");
	this.shape.setTransform(272,55.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A4A49").s().p("AgyAVQgEgdAQgJIA8gaQAGgDAEAAQAQAAAEAaQADAegTAJIg8AaQgEACgEAAQgNAAgFgag");
	this.shape_1.setTransform(159.6,15.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A4A49").s().p("AjqGgQgQgSAAgeQAAgeAKgoQAJgoAQgvQASg0AUgvQAUgvAbg0QAXgrAeguQAbgqAdgfIABgCQALgIAKABQALABAIAJQAHAIABAJQABAKgGAJIgBADQgXAZgcApQgaApgYArQgWApgWAzQgVAwgPAtQgPAsgJAmQgIAnAAAVQAAAHABACIADAAQAaAAAxgMQAygLBDgWQA1gQBaggQBNgcBLgfQBSgjA/geQBDgfA2ggQA1gfAegbQAZgVgBgMQAAgKgUgJQgegNgwgGQg0gGg9gBIh9gBIhegBQgtAAgkgEQgmgFgVgJQgigNAAgeQABgSAPgTQANgQASgOQAVgSAVgPIBthKQAWgPAhgbQAWgSAPgTQAIgMACgHQgHgCgNAAQgmAAhAAPQhCAQhPAbQhPAbhaAmQheAnhTAoQhYArhOAtQhOAug9AsQg8AtghAoQgeAkAAAcQgBAHAGAHQAJAKgBANQgBALgKAIQgIAHgLAAQgLAAgJgJQgXgWAAggQAAguAqgzQAmgtBAgxQBDgyBOgtQBLgtBggvQBZgrBdgnQBYglBWgdQBTgdBFgQQBEgRAtAAQAiAAATALQAbAOAAAfQABAcgVAcQgQAWgdAaQgXATgmAcIhAArIgtAfIglAbQgPALgHAIQATAEAXABIBIADIBRABICKACQBGABA1AIQA6AIAmATQAuAXAAAsQgBAhgnAlQghAhg6AiQg8AlhEAgQhIAjhMAgQhKAfhTAeQhJAbhKAXQg/ATg8AOQg3ANgfAAQgdAAgSgUg");
	this.shape_2.setTransform(73.3,43.6);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,398.4,87.2), null);


(lib.jlkjl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.t4();
	this.instance.parent = this;
	this.instance.setTransform(-105,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.jlkjl, new cjs.Rectangle(-105,-20,210,40), null);


(lib.jj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.t0();
	this.instance.parent = this;
	this.instance.setTransform(-79.5,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.jj, new cjs.Rectangle(-79.5,-24,159,48), null);


(lib.hyjkhj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.i3();
	this.instance.parent = this;
	this.instance.setTransform(-27,-24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hyjkhj, new cjs.Rectangle(-27,-24.5,54,49), null);


(lib.hkhjk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.t3();
	this.instance.parent = this;
	this.instance.setTransform(-67.5,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hkhjk, new cjs.Rectangle(-67.5,-21.5,135,43), null);


(lib.hhh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.t1();
	this.instance.parent = this;
	this.instance.setTransform(-98,-22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hhh, new cjs.Rectangle(-98,-22.5,196,45), null);


(lib.ghj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p3();
	this.instance.parent = this;
	this.instance.setTransform(-120,-107);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ghj, new cjs.Rectangle(-120,-107,240,214), null);


(lib.ggggg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p1();
	this.instance.parent = this;
	this.instance.setTransform(-120,-97);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ggggg, new cjs.Rectangle(-120,-97,240,194), null);


(lib.eeee = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p0();
	this.instance.parent = this;
	this.instance.setTransform(-120,-97);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.eeee, new cjs.Rectangle(-120,-97,240,194), null);


(lib.dfgdfg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p2();
	this.instance.parent = this;
	this.instance.setTransform(-120,-97);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dfgdfg, new cjs.Rectangle(-120,-97,240,194), null);


(lib.Анимация12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.i0();
	this.instance.parent = this;
	this.instance.setTransform(-50.5,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.5,-26.5,101,53);


(lib.Анимация11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.i0();
	this.instance.parent = this;
	this.instance.setTransform(-50.5,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.5,-26.5,101,53);


(lib.Анимация10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.i1();
	this.instance.parent = this;
	this.instance.setTransform(-63.5,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.5,-24,127,48);


(lib.Анимация9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.i1();
	this.instance.parent = this;
	this.instance.setTransform(-63.5,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.5,-24,127,48);


(lib.Анимация8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.i2();
	this.instance.parent = this;
	this.instance.setTransform(-45.5,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.5,-18.5,91,37);


(lib.Анимация6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.i0();
	this.instance.parent = this;
	this.instance.setTransform(-50.5,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.5,-26.5,101,53);


(lib.Анимация5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.i0();
	this.instance.parent = this;
	this.instance.setTransform(-50.5,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.5,-26.5,101,53);


(lib.Анимация4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.i1();
	this.instance.parent = this;
	this.instance.setTransform(-63.5,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.5,-24,127,48);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.i1();
	this.instance.parent = this;
	this.instance.setTransform(-63.5,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.5,-24,127,48);


(lib.uu8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.jj();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.uu8, new cjs.Rectangle(-79.5,-24,159,48), null);


// stage content:
(lib._240x400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 17
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("Ayq/KMAlVAAAMAAAA+VMglVAAAg");
	this.shape.setTransform(119.5,199.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(252));

	// i3.png
	this.instance = new lib.hyjkhj();
	this.instance.parent = this;
	this.instance.setTransform(212,45.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(148).to({_off:false},0).to({x:192,alpha:1},8,cjs.Ease.get(1)).wait(37).to({x:172,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(50));

	// i2.png
	this.instance_1 = new lib.Анимация8("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(140.5,82.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(99).to({_off:false},0).to({x:120.5,alpha:1},8,cjs.Ease.get(0.96)).wait(37).to({startPosition:0},0).to({x:100.5,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(99));

	// i1.png
	this.instance_2 = new lib.Анимация9("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(140.5,88);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.Анимация10("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(120.5,88);

	this.instance_4 = new lib.Анимация3("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(120.5,88);
	this.instance_4._off = true;

	this.instance_5 = new lib.Анимация4("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(100.5,88);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},50).to({state:[{t:this.instance_3}]},8).to({state:[{t:this.instance_4}]},37).to({state:[{t:this.instance_5}]},8).to({state:[]},1).wait(148));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50).to({_off:false},0).to({_off:true,x:120.5,alpha:1},8,cjs.Ease.get(1)).wait(194));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(95).to({_off:false},0).to({_off:true,x:100.5,alpha:0},8,cjs.Ease.get(1)).wait(149));

	// i0.png
	this.instance_6 = new lib.Анимация11("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(140.5,92.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_7 = new lib.Анимация12("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(120.5,92.5);

	this.instance_8 = new lib.Анимация5("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(120.5,92.5);
	this.instance_8._off = true;

	this.instance_9 = new lib.Анимация6("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(100.5,92.5);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},8).to({state:[{t:this.instance_8}]},37).to({state:[{t:this.instance_9}]},8).to({state:[]},1).wait(197));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).to({_off:true,x:120.5,alpha:1},8,cjs.Ease.get(1)).wait(243));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(46).to({_off:false},0).to({_off:true,x:100.5,alpha:0},8,cjs.Ease.get(1)).wait(198));

	// t4.png
	this.instance_10 = new lib.jlkjl();
	this.instance_10.parent = this;
	this.instance_10.setTransform(140,53);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(196).to({_off:false},0).to({x:120,alpha:1},8,cjs.Ease.get(1)).wait(37).to({x:100,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(2));

	// t3.png
	this.instance_11 = new lib.hkhjk();
	this.instance_11.parent = this;
	this.instance_11.setTransform(113.5,45.5);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(147).to({_off:false},0).to({x:93.5,alpha:1},8,cjs.Ease.get(1)).wait(37).to({x:73.5,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(51));

	// t2.png
	this.instance_12 = new lib.uuiui();
	this.instance_12.parent = this;
	this.instance_12.setTransform(140.5,38.5);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(98).to({_off:false},0).to({x:120.5,alpha:1},8,cjs.Ease.get(1)).wait(37).to({x:100.5,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(100));

	// t1.png
	this.instance_13 = new lib.hhh();
	this.instance_13.parent = this;
	this.instance_13.setTransform(140,41.5);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(49).to({_off:false},0).to({x:120,alpha:1},8,cjs.Ease.get(1)).wait(37).to({x:100,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(149));

	// t0.png
	this.instance_14 = new lib.uu8();
	this.instance_14.parent = this;
	this.instance_14.setTransform(140.5,42);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({x:120.5,alpha:1},8,cjs.Ease.get(1)).wait(37).to({x:100.5,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(198));

	// p0.png - копия
	this.instance_15 = new lib.eeee();
	this.instance_15.parent = this;
	this.instance_15.setTransform(150,211,0.8,0.8);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(149).to({_off:false},0).to({scaleX:1,scaleY:1,x:120,y:213,alpha:1},8,cjs.Ease.get(1)).wait(37).to({scaleX:0.8,scaleY:0.8,x:90,y:211,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(49));

	// p3.png
	this.instance_16 = new lib.ghj();
	this.instance_16.parent = this;
	this.instance_16.setTransform(150,203,0.8,0.8);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(198).to({_off:false},0).to({scaleX:1,scaleY:1,x:120,alpha:1},8,cjs.Ease.get(1)).wait(37).to({scaleX:0.8,scaleY:0.8,x:90,alpha:0},8,cjs.Ease.get(1)).wait(1));

	// p2.png
	this.instance_17 = new lib.dfgdfg();
	this.instance_17.parent = this;
	this.instance_17.setTransform(150,211,0.8,0.8);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(100).to({_off:false},0).to({scaleX:1,scaleY:1,x:120,y:213,alpha:1},8,cjs.Ease.get(1)).wait(37).to({scaleX:0.8,scaleY:0.8,x:90,y:211,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(98));

	// p1.png
	this.instance_18 = new lib.ggggg();
	this.instance_18.parent = this;
	this.instance_18.setTransform(150,211,0.8,0.8);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(51).to({_off:false},0).to({scaleX:1,scaleY:1,x:120,y:213,alpha:1},8,cjs.Ease.get(1)).wait(37).to({scaleX:0.8,scaleY:0.8,x:90,y:211,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(147));

	// p0.png
	this.instance_19 = new lib.eeee();
	this.instance_19.parent = this;
	this.instance_19.setTransform(150,211,0.8,0.8);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(2).to({_off:false},0).to({scaleX:1,scaleY:1,x:120,y:213,alpha:1},8,cjs.Ease.get(1)).wait(37).to({scaleX:0.8,scaleY:0.8,x:90,y:211,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(196));

	// logo
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009FE3").s().p("Av9CSQhKhDArhjQAnhaB6gzQCIg5DcABQAxAAAtAFQAYADAhAFIAXAFIggA4QhGgTg5AAQhvAAhcAhQh7AsgTBYQgLA0AmAvQAxA8BrgFQAhgCBBgWQBPgbAugkIBwhiIAGgFIAQgIQAOgGASgBIB3AAIAmCmIBMikICEAAIBMB+IA4h+IB5AAIhqDnIh8AAIhPiFIg8CFIhMAAIAAABIiPAAIgFgpIiDAAIgrAmIhVAAQhiAkiCAAQi6AAhQhJgAldBiIBMgCIgHhAgAKtDOIBNhMIhNiwIB3AAIAhBeIBhhgICHABIjqDpQgLAMgIADIgSAEIgLABgAG+C5IjDAAIBqjnIDDAAQBeAAAiAsQAbAkgVAuQgTArgyAbQhBAjhnAAIgDAAgAGYB/IAiAAQAoAAAfgJQAygQAJglQAIgggfgNQgUgJgkAAIgiAAg");
	this.shape_1.setTransform(120,340.4,0.796,0.795);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#393938").s().p("AgFAiIADgcIgYAQIgGgLIAbgLIgbgLIAGgLIAYARIgDgcIALAAIgDAcIAXgRIAHALIgbALIAbALIgHALIgXgQIADAcg");
	this.shape_2.setTransform(168.8,368.9,0.7,0.7);

	this.instance_20 = new lib.ClipGroup();
	this.instance_20.parent = this;
	this.instance_20.setTransform(116.6,373.8,0.255,0.255,0,0,0,199.3,43.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.shape_2},{t:this.shape_1}]}).wait(252));

	// bg
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AyvPoIAA/PMAlfAAAIAAfPg");
	this.shape_3.setTransform(120,300);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFFFFF","#BFBFBF"],[0,1],0,100,0,-99.9).s().p("AyvPoIAA/PMAlfAAAIAAfPg");
	this.shape_4.setTransform(120,100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(252));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(119,199,241,401);
// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/240x400_atlas_.png", id:"240x400_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;