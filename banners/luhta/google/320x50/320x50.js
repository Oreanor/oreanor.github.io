(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"320x50_atlas_P_", frames: [[0,0,202,230],[0,232,220,203],[0,437,242,15],[0,454,145,25]]},
		{name:"320x50_atlas_NP_", frames: [[0,0,180,102],[0,104,180,93]]}
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



(lib._1 = function() {
	this.spriteSheet = ss["320x50_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["320x50_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["320x50_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["320x50_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.legal = function() {
	this.spriteSheet = ss["320x50_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.skidka = function() {
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


(lib.vvv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._3();
	this.instance.parent = this;
	this.instance.setTransform(-120,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.vvv, new cjs.Rectangle(-120,-110,220,203), null);


(lib.v = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._4();
	this.instance.parent = this;
	this.instance.setTransform(-120,-167);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.v, new cjs.Rectangle(-120,-167,180,93), null);


(lib.qwe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AAnCFIAAhiIgTAAIgvBiIhQAAIA+hpQgYgKgMgRQgOgSABgfQgBgsAZgUQAZgVApABIBvAAIAAEJgAgShLQgJAIAAATQAAATAIAIQAJAIASAAIAgAAIAAhHIgdAAQgSAAgLAJg");
	this.shape.setTransform(80.8,0.3,0.352,0.352);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhoC0IAAlgIBCAAIAAAcIABAAQAMgTAOgIQAMgIAWAAQAqAAAUAhQAUAiAABJQAABJgUAiQgUAfgqAAQgVAAgLgGQgOgIgLgQIgBAAIAABvgAgchoQgHAXAAAqQAAAqAHAXQAHAXAVAAQAWAAAHgXQAHgXAAgqQAAgqgHgXQgHgXgWAAQgVAAgHAXg");
	this.shape_1.setTransform(72.8,1.7,0.352,0.352);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("Ag5CuQgUgNgLgXQgKgWgDgfQgCgjgBgfQABgiADgeQAEggALgaQAKgaAUgSQATgSAfgEIAkgHQANgDACgHIA0AAQAAAUgGAOQgHAOgJAHQgJAHgQAEQgMADgWACQgVADgOAEQgOAEgLAJQgJAJgGAPQgFAOgCAYIADAAQADgMAJgLQAIgLAKgFQAJgGAMgDQALgDALAAQAcAAARAKQASALAKARQALARAFAaQAEAYAAAdQAAAfgEAZQgFAZgMASQgLASgWAKQgUAKghAAQgiAAgUgNgAgQgjQgHAEgDAKQgEALgDARQgCAXAAAWQAAAxAIAUQAHAVAUAAQAKAAAHgFQAHgEAEgLQAFgLABgRQABgSABgaQgBgdgCgQQgBgQgEgLQgFgKgGgEQgIgEgIAAQgKAAgHAFg");
	this.shape_2.setTransform(64.1,-1.4,0.352,0.352);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("AhFCFQgLgFgIgMQgIgLgDgNQgEgMAAgPQAAgVAEgMQAEgOAIgJQAIgJANgGQAPgHAQgFIAmgKQAPgEAGgHQAGgHAAgNQAAgQgHgIQgIgJgQAAQgQAAgIAJQgIAKAAAQIAAAHIg9AAIAAgGQAAgXAHgQQAIgQAMgKQANgJARgFQASgEATAAQAdAAATAGQATAGALALQAKALAEAPQAEAQAAARIAACMQAAATABAKQACAJAFANIhCAAQgEgHgBgGIgDgOIgBAAQgMAVgQAGQgOAGgZAAQgSAAgNgHgAAPAJQgGADgIACQgUAFgJAKQgJALAAARQAAAQAGALQAGALAOAAQAGAAAHgDQAJgCAFgFQAGgGAEgGQAEgIAAgMIAAg0QgIAFgHADg");
	this.shape_3.setTransform(55.5,0.3,0.352,0.352);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("AAkCFIg1hmIgaAkIAABCIhEAAIAAkJIBEAAIAABuIBGhuIBKAAIhMBuIBYCbg");
	this.shape_4.setTransform(47.6,0.3,0.352,0.352);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1B").s().p("Ag4B/QgVgNgKgUQgJgTgDgaQgCgcAAgWQAAgZAEgaQAEgZALgUQAKgTAWgLQAUgMAiAAQAeAAATAKQAUAKAKARQALARAEAaQAEAbAAAdIAAAOIiHAAIAAAWIACAXQACAKAEAKQAFAJAFAFQAIAFAHAAQASAAAIgNQAIgNADgYIA9AAQgCAugWAZQgXAYgyAAQgkAAgVgNgAgOhXQgHAEgEAIQgEAJgCAIIgCATIAAAKIBGAAIgCgbQgCgLgEgJQgDgIgHgEQgHgEgKAAQgKAAgGAFg");
	this.shape_5.setTransform(38.8,0.3,0.352,0.352);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1B").s().p("ABEClIAAg/IiHAAIAAA/Ig+AAIAAhyIAXAAQAMgdAHgiQAHgkAAg4IAAg8IC0AAIAADXIAdAAIAABygAgSg2QgCAUgDASIgHAkQgFAUgFALIBJAAIAAijIgxAAg");
	this.shape_6.setTransform(30,1.4,0.352,0.352);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1B").s().p("AAACwIAAj4IhGAAIAAguIAHAAQAkAAAUgOQAUgNAFgeIA1AAIAAFfg");
	this.shape_7.setTransform(16.1,-1.2,0.352,0.352);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1B").s().p("AAACwIAAj4IhGAAIAAguIAGAAQAkAAAVgOQAUgOAFgdIA1AAIAAFfg");
	this.shape_8.setTransform(7.7,-1.2,0.352,0.352);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1D1B").s().p("Ah7AcIAAg3ID3AAIAAA3g");
	this.shape_9.setTransform(-4.1,-0.1,0.352,0.352);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D1D1B").s().p("AAnCFIAAhiIgTAAIgwBiIhOAAIA9hpQgXgJgNgSQgNgSAAgfQAAgsAYgUQAZgVAoABIBwAAIAAEJgAgShLQgKAIAAATQAAATAJAIQAJAIASAAIAfAAIAAhHIgcAAQgTAAgKAJg");
	this.shape_10.setTransform(-17.3,0.3,0.352,0.352);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D1D1B").s().p("AhoC0IAAlgIBCAAIAAAcIABAAQAMgTAOgIQANgIAVAAQAqAAAUAhQAUAgAABLQAABLgUAgQgUAfgqAAQgVAAgLgGQgPgJgKgPIgBAAIAABvgAgchoQgHAVAAAsQAAAsAHAVQAHAXAVAAQAWAAAHgXQAHgXAAgqQAAgqgHgXQgHgXgWAAQgVAAgHAXg");
	this.shape_11.setTransform(-25.4,1.7,0.352,0.352);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D1D1B").s().p("Ag5CuQgUgNgLgXQgKgXgCgeQgDgfAAgjQAAgeADgiQAEgiALgYQALgaATgSQAUgSAegEIAlgHQAMgDACgHIA0AAQgBAUgFAOQgFANgKAIQgLAHgPAEQgMADgXACQgVADgNAEQgPAEgKAJQgJAJgFAPQgGANgCAZIACAAQAFgOAIgJQAIgLAKgFQAKgGAMgDQAKgDALAAQAcAAARAKQASAKALASQAKASAFAZQAEAYABAdQgBAfgEAZQgFAZgLASQgMASgVAKQgUAKghAAQgjAAgUgNgAgQgjQgGADgFALQgDALgDARQgCAXAAAWQAAAxAHAUQAIAVAUAAQALAAAGgFQAHgFAEgKQAEgLACgRQACgQAAgcQAAgWgCgXQgCgQgEgLQgFgKgGgEQgHgEgKAAQgIAAgIAFg");
	this.shape_12.setTransform(-34,-1.4,0.352,0.352);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1D1D1B").s().p("AAnCFIAAhiIgTAAIgwBiIhPAAIA+hpQgXgJgOgSQgNgTAAgeQAAgrAZgVQAZgVAoABIBwAAIAAEJgAgShLQgKAIAAATQAAATAJAIQAJAIASAAIAfAAIAAhHIgcAAQgTAAgKAJg");
	this.shape_13.setTransform(-42.9,0.3,0.352,0.352);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1D1D1B").s().p("AgyCEQgUgJgMgRQgNgSgEgaQgFgZAAgkQAAgkAFgYQAGgbAMgRQAMgSAVgJQAUgJAcAAQAfAAAUAJQAUAIANASQAMARAEAbQAFAaAAAjQAAAlgFAYQgFAagNARQgMARgUAJQgTAJgfAAQgfAAgTgIgAgThVQgIAHgDAMQgEAOgBAQIAABLQABAPAEAOQADAMAIAIQAIAHALAAQAVAAAIgWQAIgVAAgzQAAgygIgVQgIgWgVAAQgLAAgIAHg");
	this.shape_14.setTransform(-51,0.3,0.352,0.352);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1D1D1B").s().p("AAhCFIAAhxIhBAAIAABxIhEAAIAAkJIBEAAIAABiIBBAAIAAhiIBEAAIAAEJg");
	this.shape_15.setTransform(-59.5,0.3,0.352,0.352);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1D1D1B").s().p("Ag6CoQgVgJgNgRQgMgQgEgSQgDgRAAgRQAAghAPgZQAOgWAegGIAAgBQgOgEgKgHQgJgHgGgKQgHgKgCgKQgCgLAAgJQAAg0AbgWQAcgXAvABQAxgBAbAXQAbAWAAA0QAAAMgCAIQgEAMgFAIQgFAJgLAIQgJAHgOAEIAAABQAeAGAPAWQAOAZAAAhQAAARgDARQgEATgMAPQgMAQgWAKQgXAKgkAAQgjAAgXgKgAgTARQgHAEgFAJQgFAIgCALQgCAJAAAPQAAAOACAJQACAMAFAIQAEAIAIAFQAHAEAMAAQANAAAHgEQAHgEAGgJQAEgIACgMQACgLAAgMQAAgOgCgKQgCgLgEgIQgGgJgHgEQgJgFgLAAQgKAAgJAFgAgihTQAAAaAKALQAKAMAOABQAQgBAJgMQAKgLAAgaQAAgwgjAAQgiAAAAAwg");
	this.shape_16.setTransform(-72.3,-1.1,0.352,0.352);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1D1D1B").s().p("AhrCwQAAgXAEgVQAFgTAKgUQAKgTAOgRQAPgRATgSIAdgaQALgKAHgJQAIgLADgHQAEgKACgKIABgYQAAgrgjAAQgMAAgIAFQgIAGgEAJQgEAKgCAMIgBAaIhEAAIAAgNQAAgyAagaQAbgaA3AAQA2AAAaAZQAZAZAAAuQAAARgDAPQgDAPgGANQgGANgLAMQgJAMgQAOIgoAlQgOANgKAPQgJAOgCAJICDAAIAAA4g");
	this.shape_17.setTransform(-80.8,-1.2,0.352,0.352);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.qwe, new cjs.Rectangle(-84.6,-7.9,169.3,16), null);


(lib.ppp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AyNMlIAA5JMAkbAAAIAAZJg");
	this.shape.setTransform(41.1,28.3,0.352,0.352);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ppp, new cjs.Rectangle(0,0,82.1,56.7), null);


(lib.hhh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("ADpKKIg8kTIlZAAIg8ETIkRAAIFY0TIFDAAIFYUTgAh/CgID+AAIh9pIIgDAAg");
	this.shape.setTransform(38.9,16.4,0.209,0.209);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AiCKKIAA0TIEFAAIAAUTg");
	this.shape_1.setTransform(23.5,16.4,0.209,0.209);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("ACFKKIk/uOIgEAAIAAOOIjxAAIAA0TIEvAAIE8N5IADAAIAAt5IDxAAIAAUTg");
	this.shape_2.setTransform(7.6,16.4,0.209,0.209);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("ADqKKIg9kTIlZAAIg8ETIkRAAIFY0TIFEAAIFXUTgAh/CgID+AAIh9pIIgCAAg");
	this.shape_3.setTransform(-13.9,16.4,0.209,0.209);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("AFRKKIAAwNIgEAAIjnQNIjLAAIjnwNIgEAAIAAQNIjxAAIAA0TIGGAAIC6OVIADAAIC7uVIGEAAIAAUTg");
	this.shape_4.setTransform(-38.5,16.4,0.209,0.209);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1B").s().p("AD5K2IhAkmIlxAAIhAEmIkjAAIFv1rIFZAAIFvVrgAiHCrIEPAAIiGpvIgDAAg");
	this.shape_5.setTransform(39.3,-15.5,0.209,0.209);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1B").s().p("AiLK2IAAyFIkvAAIAAjmIN1AAIAADmIkvAAIAASFg");
	this.shape_6.setTransform(20.4,-15.5,0.209,0.209);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1B").s().p("ACjK2IAApoIlGAAIAAJoIkXAAIAA1rIEXAAIAAITIFGAAIAAoTIEYAAIAAVrg");
	this.shape_7.setTransform(-0.6,-15.5,0.209,0.209);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1B").s().p("AikKxQhQgPg+gxQg+guglhZQglhXAAiMIAAvGIEYAAIAAPGQAAA3AGAqQAHArATAgQASAhAgASQAgASAwAAQAzAAAfgSQAfgSASghQASggAIgrQAGgqAAg3IAAvGIEYAAIAAPGQAACDglBYQglBWg+AzQg+AyhQASQhRARhUAAQhSAAhSgPg");
	this.shape_8.setTransform(-22.8,-15.3,0.209,0.209);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1D1B").s().p("AmDK2IAA1rIEYAAIAASFIHvAAIAADmg");
	this.shape_9.setTransform(-42.4,-15.5,0.209,0.209);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hhh, new cjs.Rectangle(-50.5,-30,101.1,60), null);


(lib.ghghgh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AByDlIgUg0Ii7AAIgUA0IjAAAIDDnJIDdAAIDDHJgAA3BBIg2iaIgBAAIg2CaIBtAAg");
	this.shape.setTransform(69.3,-2.4,0.255,0.255);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhaDlIAAlWIinAAIAAhzIIDAAIAABzIinAAIAAFWg");
	this.shape_1.setTransform(47.9,-2.4,0.255,0.255);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("ABmDlIAAi3IjLAAIAAC3Ii1AAIAAnJIC1AAIAACfIDLAAIAAifIC1AAIAAHJg");
	this.shape_2.setTransform(24.9,-2.4,0.255,0.255);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("AjODFQhDgsAAhqIAAkbIC1AAIAAEUQAAAqAYATQAXARAtAAQAvAAAWgRQAYgTAAgqIAAkUIC1AAIAAEbQAABqhDAsQg/AoiQAAQiPAAg/gog");
	this.shape_3.setTransform(0.5,-2.2,0.255,0.255);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("AjmDlIAAnJIC1AAIAAFOIEYAAIAAB7g");
	this.shape_4.setTransform(-21.6,-2.4,0.255,0.255);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1B").s().p("AnDHEQi7i7AAkJQAAkIC7i7QC7i7EIAAQEJAAC7C7QC7C7AAEIQAAEJi7C7Qi7C7kJAAQkIAAi7i7gAhJjhQgnAggNAkIh4FQIF+AAQA5ABArggQAhgaAGgbImEAAIB6lgIgIgBQgjAAgoAhg");
	this.shape_5.setTransform(-54.7,-0.9,0.255,0.255);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ghghgh, new cjs.Rectangle(-71,-17.2,148.1,32.6), null);


(lib.ghgh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(-97,-126);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ghgh, new cjs.Rectangle(-97,-126,202,230), null);


(lib.ggg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.skidka();
	this.instance.parent = this;
	this.instance.setTransform(-73,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ggg, new cjs.Rectangle(-73,-13,145,25), null);


(lib.dfgd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.legal();
	this.instance.parent = this;
	this.instance.setTransform(-343,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dfgd, new cjs.Rectangle(-343,-7,242,15), null);


(lib.bbvv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(-120,-166);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bbvv, new cjs.Rectangle(-120,-166,180,102), null);


(lib._9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag6DtQgbgHgTgOQgSgPgLgTQgKgUAAgWIAAgHIBhAAIAAAFQAAASANAJQAOAJAUAAQAuABAAg8IAAhAQgoAhgpAAQgwAAgfgcQgegbAAgyIAAhxQAAgkAVgaQAVgZAggMQAggLAmAAQAoAAAfALQAgAMAUAZQAUAaAAAmIAAD1QAAAmgQAeQgRAeggARQggARgvAAQgfAAgbgIgAguh/IAABdQAAAVANANQAOALATAAQAUAAAOgLQANgMAAgXIAAhcQAAgYgMgMQgMgMgWAAQgvAAAAAwg");
	this.shape.setTransform(5.1,8.6,0.352,0.352);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib._9, new cjs.Rectangle(0,0,10.2,17.3), null);


(lib._999 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._9();
	this.instance.parent = this;
	this.instance.setTransform(29.5,8.6,1,1,0,0,0,5,8.6);

	this.instance_1 = new lib._9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(17.3,8.6,1,1,0,0,0,5,8.6);

	this.instance_2 = new lib._9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(5,8.7,1,1,0,0,0,5,8.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._999, new cjs.Rectangle(0,0,34.6,17.3), null);


(lib.vvbv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5).p("APkkkI/HJJ");
	this.shape.setTransform(-0.1,-9.4,0.282,0.282);

	this.instance = new lib._999();
	this.instance.parent = this;
	this.instance.setTransform(5.7,9.8,1.022,1.022,0,0,0,17.3,8.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhSEvQglgKgWgXQgWgUgNgkQgLgiAAgyQAAhpBcguQhQgnAAhnQABgyAWghQAWgiApgRQAngQAyAAQAyAAAoAQQAoARAXAiQAWAhAAAyQAABphLAlQAtASAVAjQAVAkABA+QgBBBgTApQgUApgpASQgpAThCgBQgvABgjgLgAg9BsIAAAfQABBUA8AAQA+AAAAhUIAAgfQAAhTg+AAQg8AAgBBTgAgqjKQgNAVAAArQAABOA3AAQAeAAANgTQANgTAAgoQAAgtgMgTQgMgUggAAQgeAAgMAUg");
	this.shape_1.setTransform(-20.1,9.8,0.282,0.282);

	this.instance_1 = new lib._999();
	this.instance_1.parent = this;
	this.instance_1.setTransform(10.3,-9.8,0.8,0.8,0,0,0,17.3,8.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhvDRQgigkAAg5IAAgcIBbAAIAAARQAABFAzAAQAfAAALgSQAJgSAAgmQAAgtgNgSQgOgSghAAIgqAAIAAhAIAcAAQAqAAAOgXQANgWAAgiQAAgyguABQgYAAgOAOQgNAPAAAcIAAAQIhaAAIAAgUQAAg3AmgiQAmgjBBAAQArAAAgAOQAgAOARAbQARAaAAAlQAAAugTAZQgSAZgmANQBTARAABmQAAAzgRAgQgSAfgiAPQghAOgyAAQhFAAgkgkg");
	this.shape_2.setTransform(-9.5,-9.9,0.282,0.282);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAMDsIAAlEIh3AAIAAhBIANAAQA5AAAhgYQAhgWAKgkIBFAAIAAHXg");
	this.shape_3.setTransform(-21.3,-9.9,0.282,0.282);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhfAdIAAg5IC/AAIAAA5g");
	this.shape_4.setTransform(-28.2,-8,0.282,0.282);

	this.instance_2 = new lib.ppp();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.8,0.8,0,0,0,41,28.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_1},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.vvbv, new cjs.Rectangle(-32.8,-22.6,65.7,45.3), null);


(lib.vv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5).p("APkklI/HJK");
	this.shape.setTransform(0,-9.4,0.282,0.282);

	this.instance = new lib._999();
	this.instance.parent = this;
	this.instance.setTransform(6.9,9.9,1.022,1.022,0,0,0,17.3,8.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhcErQgogPgaggQgYghgBgxIAAk5QAAgwAWgnQAVgmApgXQAqgVA4AAQA1gBAqASQArASAXAeQAYAggBAmIAAAIIh7AAIAAgGQAAgWgPgMQgQgNgcAAQgeAAgPATQgQATABAtIAABHQAQgRAfgNQAggNAZAAQAoAAAgAQQAfAQASAfQARAfAAArIAACRQAABIgzAkQgyAihUABQgzAAgngPgAgqgBQgRAOAAAfIAAB4QAAA9A5AAQA+AAAAg9IAAh7QAAgbgRgOQgSgRgYABQgZAAgSAPg");
	this.shape_1.setTransform(-18.4,9.8,0.282,0.282);

	this.instance_1 = new lib._999();
	this.instance_1.parent = this;
	this.instance_1.setTransform(10.4,-10,0.798,0.798,0,0,0,17.3,8.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhuDRQgjgkAAg5IAAgcIBbAAIAAAQQAABGAzAAQAgAAAKgSQAKgSAAgmQAAgugOgRQgOgSghAAIgqAAIAAhAIAcAAQAqAAAOgXQAOgWAAgiQAAgygvAAQgYAAgOAPQgNAQAAAbIAAAQIhZAAIAAgUQAAg3AlgjQAngiBAAAQAsAAAfAOQAgAOARAaQARAbAAAlQAAAugTAZQgTAZgkAMQBSASAABmQAAA0gRAfQgSAgghAOQgjAOgxAAQhGAAgigkg");
	this.shape_2.setTransform(-9.5,-9.9,0.282,0.282);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAMDtIAAlFIh3AAIAAhBIANAAQA4AAAigXQAigXAJglIBFAAIAAHZg");
	this.shape_3.setTransform(-21.3,-9.9,0.282,0.282);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhfAdIAAg5IC/AAIAAA5g");
	this.shape_4.setTransform(-28.2,-8,0.282,0.282);

	this.instance_2 = new lib.ppp();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.8,0.8,0,0,0,41,28.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_1},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.vv, new cjs.Rectangle(-32.8,-22.6,65.7,45.3), null);


(lib.fgggg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5).p("APkklI/HJK");
	this.shape.setTransform(0,-10.5,0.284,0.284,0,0,0,0.6,-0.8);

	this.instance = new lib._999();
	this.instance.parent = this;
	this.instance.setTransform(12.8,9,1.032,1.032,0,0,0,16.6,8.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjBE0IAAggQAAg6AVgvQAUgwAeghQAfgiAegaIA/gyQAsgoAMgVQANgXAAgfQAAhOhDAAQghAAgRAVQgRAWAAAyIAAAhIh6AAIAAgkQAAg6AbgqQAcgrArgUQAsgVAvAAQA1AAArAUQArAUAaAlQAZAlAAAvQAAAxgXAuQgZAwgrAjIhMA/QggAcgXAeQgWAdgFAiIDpAAIAABcg");
	this.shape_1.setTransform(-13.1,9.2,0.284,0.284);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAQEuIAAmfIiZAAIAAhTIAQAAQBIAAAsgdQAqgeANgvIBYAAIAAJcg");
	this.shape_2.setTransform(-27.9,9.3,0.284,0.284);

	this.instance_1 = new lib._999();
	this.instance_1.parent = this;
	this.instance_1.setTransform(10.6,-11,0.805,0.805,0,0,0,16.6,7.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhBDtQgbgIgSgSQgSgRgJgbQgJgaAAgoQAAhRBIglQg+geAAhQQAAgoARgZQASgbAfgMQAfgNAnAAQAnAAAfANQAeALAUAcQARAaAAAnQAABSg8AcQAkAOARAcQAQAcABAwQgBA0gPAfQgPAgggAPQgiAOgyAAQgkAAgdgIgAgvBUIAAAYQAABCAvAAQAwAAAAhCIAAgYQAAhAgwAAQgvAAAABAgAggieQgLAQAAAiQAAA9ArAAQAXAAAKgOQALgPgBggQAAgjgJgPQgKgQgYAAQgXAAgJAQg");
	this.shape_3.setTransform(-10,-10.6,0.284,0.284);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAMDtIAAlFIh3AAIAAhBIANAAQA4AAAigXQAigXAJglIBFAAIAAHZg");
	this.shape_4.setTransform(-21.6,-10.6,0.284,0.284);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhfAdIAAg5IC/AAIAAA5g");
	this.shape_5.setTransform(-28.6,-8.7,0.284,0.284);

	this.instance_2 = new lib.ppp();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0.1,0.808,0.808,0,0,0,40.6,28.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance_1},{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fgggg, new cjs.Rectangle(-32.8,-22.6,66.3,45.8), null);


(lib.bbbnbn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5).p("APkkkI/HJJ");
	this.shape.setTransform(0,-9.4,0.282,0.282);

	this.instance = new lib._9();
	this.instance.parent = this;
	this.instance.setTransform(-20.3,9.9,1.017,1.025,0,0,0,5,8.7);

	this.instance_1 = new lib._999();
	this.instance_1.parent = this;
	this.instance_1.setTransform(4.8,9.9,1.022,1.022,0,0,0,17.3,8.7);

	this.instance_2 = new lib._999();
	this.instance_2.parent = this;
	this.instance_2.setTransform(9.8,-9.9,0.798,0.798,0,0,0,17.3,8.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhPDsQANhrAlhuQAjhpAxhNIjNAAIAAhIIEtAAIAABDQgxBWgjBkQghBhgJB5g");
	this.shape_1.setTransform(-10,-9.9,0.282,0.282);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAMDtIAAlFIh3AAIAAhCIANAAQA4AAAjgWQAggXAKglIBEAAIAAHZg");
	this.shape_2.setTransform(-21.3,-9.9,0.282,0.282);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhfAeIAAg7IC/AAIAAA7g");
	this.shape_3.setTransform(-28.2,-8,0.282,0.282);

	this.instance_3 = new lib.ppp();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,0.8,0.8,0,0,0,41,28.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bbbnbn, new cjs.Rectangle(-32.8,-22.6,65.7,45.3), null);


// stage content:
(lib._320x50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.currLoop = 0;
	}
	this.frame_24 = function() {
		if (this.currLoop == 1){this.stop()}
	}
	this.frame_409 = function() {
		this.currLoop++;
		this.gotoAndPlay(2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(385).call(this.frame_409).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").p("A46j0MAx1AAAIAAHpMgx1AAAg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(410));

	// 4
	this.instance = new lib.v();
	this.instance.parent = this;
	this.instance.setTransform(120.5,256.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(332).to({_off:false},0).wait(1).to({regX:-30,regY:-120.5,x:90.5,y:134.8},0).wait(1).to({y:130.4},0).wait(1).to({y:121.1},0).wait(1).to({y:104.7},0).wait(1).to({y:82.5},0).wait(1).to({y:64.1},0).wait(1).to({y:53.6},0).wait(1).to({y:48.6},0).wait(1).to({regX:0,regY:0,x:120.5,y:167.8},0).to({x:120.1,y:135.3},55).wait(1).to({regX:-30,regY:-120.5,x:90,y:14},0).wait(1).to({y:11.3},0).wait(1).to({y:5.9},0).wait(1).to({y:-3.8},0).wait(1).to({y:-18.3},0).wait(1).to({y:-33.2},0).wait(1).to({y:-43.5},0).wait(1).to({y:-49.4},0).wait(1).to({y:-52.2},0).wait(1).to({regX:0,regY:0,x:120,y:67.5},0).wait(4));

	// plate4
	this.instance_1 = new lib.vv();
	this.instance_1.parent = this;
	this.instance_1.setTransform(288.2,26.8,0.4,0.4,0,0,0,0,0.1);
	this.instance_1.alpha = 0.301;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(262).to({_off:false},0).to({regY:0,scaleX:0.8,scaleY:0.8,alpha:1},7,cjs.Ease.get(1)).wait(63).to({regX:0.1,regY:0.1,scaleX:0.4,scaleY:0.4,alpha:0.301},7,cjs.Ease.get(1)).to({_off:true},1).wait(70));

	// plate3
	this.instance_2 = new lib.bbbnbn();
	this.instance_2.parent = this;
	this.instance_2.setTransform(32,24,0.4,0.4,0,0,0,0.1,0.1);
	this.instance_2.alpha = 0.301;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(258).to({_off:false},0).to({regX:0,regY:0,scaleX:0.8,scaleY:0.8,alpha:1},7,cjs.Ease.get(1)).wait(65).to({regX:0.1,regY:0.1,scaleX:0.4,scaleY:0.4,alpha:0.301},7,cjs.Ease.get(1)).to({_off:true},1).wait(72));

	// 3
	this.instance_3 = new lib.vvv();
	this.instance_3.parent = this;
	this.instance_3.setTransform(168.5,177);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(253).to({_off:false},0).wait(1).to({regX:-10,regY:-8.5,x:158.5,y:166.5},0).wait(1).to({y:162},0).wait(1).to({y:154.4},0).wait(1).to({y:143.1},0).wait(1).to({y:128.8},0).wait(1).to({y:114.4},0).wait(1).to({y:104.5},0).wait(1).to({regX:0,regY:0,x:168.5,y:109.8},0).to({y:-34.3},68).wait(1).to({regX:-10,regY:-8.5,x:158.5,y:-43.8},0).wait(1).to({y:-47.2},0).wait(1).to({y:-54.4},0).wait(1).to({y:-67.7},0).wait(1).to({y:-87.1},0).wait(1).to({y:-104.6},0).wait(1).to({y:-114.8},0).wait(1).to({y:-119.8},0).wait(1).to({regX:0,regY:0,x:168.5,y:-113},0).to({_off:true},1).wait(71));

	// logo
	this.instance_4 = new lib.ghghgh();
	this.instance_4.parent = this;
	this.instance_4.setTransform(245.8,26.3,0.405,0.405,0,0,0,0,0.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(183).to({_off:false},0).to({regY:0,scaleX:0.81,scaleY:0.81,y:26.2,alpha:1},8).wait(61).to({regX:3.1,regY:-0.9,x:248.3,y:24.8},0).wait(1).to({y:22.4},0).wait(1).to({y:17.5},0).wait(1).to({y:8.2},0).wait(1).to({y:-7.5},0).wait(1).to({y:-25.6},0).wait(1).to({y:-37.5},0).wait(1).to({y:-43.7},0).wait(1).to({y:-46.6},0).wait(1).to({regX:0,regY:-0.1,x:245.8},0).to({_off:true},1).wait(68).to({_off:false,regY:0.1,scaleX:0.41,scaleY:0.41,y:26.3,alpha:0},0).to({regY:0,scaleX:0.81,scaleY:0.81,y:26.2,alpha:1},8).wait(62).to({regX:3.1,regY:-0.9,x:248.3,y:24.8},0).wait(1).to({y:22.4},0).wait(1).to({y:17.5},0).wait(1).to({y:8.2},0).wait(1).to({y:-7.5},0).wait(1).to({y:-25.6},0).wait(1).to({y:-37.5},0).wait(1).to({y:-43.7},0).wait(1).to({y:-46.6},0).wait(1).to({regX:0,regY:-0.1,x:245.8},0).wait(1));

	// 2
	this.instance_5 = new lib.bbvv();
	this.instance_5.parent = this;
	this.instance_5.setTransform(120,232);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(181).to({_off:false},0).wait(1).to({regX:-30,regY:-115,x:90,y:115.9},0).wait(1).to({y:112.3},0).wait(1).to({y:105.5},0).wait(1).to({y:94.9},0).wait(1).to({y:80.5},0).wait(1).to({y:65.4},0).wait(1).to({y:54.8},0).wait(1).to({regX:0,regY:0,x:120,y:166.3},0).to({y:114.8},60).wait(1).to({regX:-30,regY:-115,x:90,y:-1.9},0).wait(1).to({y:-5},0).wait(1).to({y:-9.9},0).wait(1).to({y:-16.7},0).wait(1).to({y:-25.3},0).wait(1).to({y:-35},0).wait(1).to({y:-43.6},0).wait(1).to({y:-49.2},0).wait(1).to({regX:0,regY:0,x:120,y:64},0).to({_off:true},1).wait(151));

	// plate2
	this.instance_6 = new lib.fgggg();
	this.instance_6.parent = this;
	this.instance_6.setTransform(287.8,26.1,0.4,0.4,0,0,0,0.1,0.3);
	this.instance_6.alpha = 0.301;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(132).to({_off:false},0).to({regX:0,regY:0,scaleX:0.8,scaleY:0.8,x:287.7,y:26,alpha:1},6,cjs.Ease.get(1)).wait(40).to({regX:0.1,regY:0.1,scaleX:0.4,scaleY:0.4,x:287.8,y:26.1,alpha:0.301},5,cjs.Ease.get(1)).to({_off:true},1).wait(226));

	// plate1
	this.instance_7 = new lib.vvbv();
	this.instance_7.parent = this;
	this.instance_7.setTransform(32.8,23.9,0.4,0.4,0,0,0,0.1,0.3);
	this.instance_7.alpha = 0.301;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(128).to({_off:false},0).to({regX:0,regY:0,scaleX:0.8,scaleY:0.8,x:32.7,y:23.8,alpha:1},6,cjs.Ease.get(1)).wait(42).to({regX:0.1,regY:0.1,scaleX:0.4,scaleY:0.4,x:32.8,y:23.9,alpha:0.301},5,cjs.Ease.get(1)).to({_off:true},1).wait(228));

	// 1
	this.instance_8 = new lib.ghgh();
	this.instance_8.parent = this;
	this.instance_8.setTransform(156,212);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(118).to({_off:false},0).wait(1).to({regX:4,regY:-11,x:160,y:199.5},0).wait(1).to({y:194.4},0).wait(1).to({y:185},0).wait(1).to({y:170.8},0).wait(1).to({y:152.3},0).wait(1).to({y:133.4},0).wait(1).to({y:119.7},0).wait(1).to({regX:0,regY:0,x:156,y:125.5},0).to({y:-44.6},52).wait(1).to({regX:4,regY:-11,x:160,y:-58.9},0).wait(1).to({y:-72.1},0).wait(1).to({y:-97.5},0).wait(1).to({y:-120.3},0).wait(1).to({y:-131.2},0).wait(1).to({regX:0,regY:0,x:156,y:-123},0).to({_off:true},1).wait(225));

	// Слой 1
	this.instance_9 = new lib.dfgd();
	this.instance_9.parent = this;
	this.instance_9.setTransform(525,49,1,1,0,0,0,108,11);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(8).to({_off:false},0).to({alpha:1},7).wait(40).to({alpha:0},5).to({_off:true},1).wait(349));

	// skidka
	this.instance_10 = new lib.ggg();
	this.instance_10.parent = this;
	this.instance_10.setTransform(199.3,15,0.5,0.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(4).to({_off:false},0).to({scaleX:1,scaleY:1,x:196,y:18},7,cjs.Ease.get(1)).wait(40).to({regX:0.1,regY:0.1,scaleX:0.5,scaleY:0.5,x:194.7,y:16.9,alpha:0.301},7,cjs.Ease.get(-1)).to({_off:true},1).wait(351));

	// date
	this.instance_11 = new lib.qwe();
	this.instance_11.parent = this;
	this.instance_11.setTransform(194,-34);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(58).to({_off:false},0).wait(1).to({y:-33.2},0).wait(1).to({y:-30.4},0).wait(1).to({y:-24.8},0).wait(1).to({y:-15.4},0).wait(1).to({y:-3},0).wait(1).to({y:9},0).wait(1).to({y:17.6},0).wait(1).to({y:22.7},0).wait(1).to({y:25.3},0).wait(1).to({y:26},0).wait(41).to({scaleX:0.8,scaleY:0.8,x:195,y:25,alpha:0.301},7,cjs.Ease.get(-1)).to({_off:true},1).wait(293));

	// mania
	this.instance_12 = new lib.hhh();
	this.instance_12.parent = this;
	this.instance_12.setTransform(39.6,25.1,0.315,0.315,0,0,0,0.1,0.3);
	this.instance_12.alpha = 0.449;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({regY:0.1,scaleX:0.63,scaleY:0.63,y:25.4,alpha:1},7,cjs.Ease.get(1)).wait(100).to({y:24.9},0).to({regX:0.3,regY:0.3,scaleX:0.32,scaleY:0.32,x:39.3,y:25.1,alpha:0.301},7,cjs.Ease.get(-1)).to({_off:true},1).wait(295));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFEC00").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_1.setTransform(160,25,0.44,0.556);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(410));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(159.5,24.5,321,51);
// library properties:
lib.properties = {
	width: 320,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/320x50_atlas_P_.png", id:"320x50_atlas_P_"},
		{src:"images/320x50_atlas_NP_.jpg", id:"320x50_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;