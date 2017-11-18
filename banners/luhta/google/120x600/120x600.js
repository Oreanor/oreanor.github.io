(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"120x600_atlas_P_", frames: [[170,0,154,241],[0,0,168,237],[107,243,102,42],[0,239,105,48]]},
		{name:"120x600_atlas_NP_", frames: [[243,0,240,500],[0,0,241,500]]}
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
	this.spriteSheet = ss["120x600_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["120x600_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["120x600_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["120x600_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.legalpngкопия = function() {
	this.spriteSheet = ss["120x600_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.skidka = function() {
	this.spriteSheet = ss["120x600_atlas_P_"];
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
	this.instance.setTransform(-105,-148);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.vvv, new cjs.Rectangle(-105,-148,168,237), null);


(lib.v = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._4();
	this.instance.parent = this;
	this.instance.setTransform(-120,-167);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.v, new cjs.Rectangle(-120,-167,241,500), null);


(lib.qwe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AAnCFIAAhiIgTAAIgvBiIhQAAIA+hpQgYgKgMgRQgOgSABgfQgBgsAZgUQAZgVApABIBvAAIAAEJgAgShLQgJAIAAATQAAATAIAIQAJAIASAAIAgAAIAAhHIgdAAQgSAAgLAJg");
	this.shape.setTransform(43.2,16.1,0.423,0.423);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhoC0IAAlgIBCAAIAAAcIABAAQAMgTAOgIQAMgIAWAAQAqAAAUAhQAUAiAABJQAABJgUAiQgUAfgqAAQgVAAgLgGQgOgIgLgQIgBAAIAABvgAgchoQgHAXAAAqQAAAqAHAXQAHAXAVAAQAWAAAHgXQAHgXAAgqQAAgqgHgXQgHgXgWAAQgVAAgHAXg");
	this.shape_1.setTransform(33.5,17.8,0.423,0.423);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("Ag5CuQgUgNgLgXQgKgWgDgfQgCgjgBgfQABgiADgeQAEggALgaQAKgaAUgSQATgSAfgEIAkgHQANgDACgHIA0AAQAAAUgGAOQgHAOgJAHQgJAHgQAEQgMADgWACQgVADgOAEQgOAEgLAJQgJAJgGAPQgFAOgCAYIADAAQADgMAJgLQAIgLAKgFQAJgGAMgDQALgDALAAQAcAAARAKQASALAKARQALARAFAaQAEAYAAAdQAAAfgEAZQgFAZgMASQgLASgWAKQgUAKghAAQgiAAgUgNgAgQgjQgHAEgDAKQgEALgDARQgCAXAAAWQAAAxAIAUQAHAVAUAAQAKAAAHgFQAHgEAEgLQAFgLABgRQABgSABgaQgBgdgCgQQgBgQgEgLQgFgKgGgEQgIgEgIAAQgKAAgHAFg");
	this.shape_2.setTransform(23.1,14.1,0.423,0.423);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("AhFCFQgLgFgIgMQgIgLgDgNQgEgMAAgPQAAgVAEgMQAEgOAIgJQAIgJANgGQAPgHAQgFIAmgKQAPgEAGgHQAGgHAAgNQAAgQgHgIQgIgJgQAAQgQAAgIAJQgIAKAAAQIAAAHIg9AAIAAgGQAAgXAHgQQAIgQAMgKQANgJARgFQASgEATAAQAdAAATAGQATAGALALQAKALAEAPQAEAQAAARIAACMQAAATABAKQACAJAFANIhCAAQgEgHgBgGIgDgOIgBAAQgMAVgQAGQgOAGgZAAQgSAAgNgHgAAPAJQgGADgIACQgUAFgJAKQgJALAAARQAAAQAGALQAGALAOAAQAGAAAHgDQAJgCAFgFQAGgGAEgGQAEgIAAgMIAAg0QgIAFgHADg");
	this.shape_3.setTransform(12.7,16.1,0.423,0.423);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("AAkCFIg1hmIgaAkIAABCIhEAAIAAkJIBEAAIAABuIBGhuIBKAAIhMBuIBYCbg");
	this.shape_4.setTransform(3.3,16.1,0.423,0.423);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1B").s().p("Ag4B/QgVgNgKgUQgJgTgDgaQgCgcAAgWQAAgZAEgaQAEgZALgUQAKgTAWgLQAUgMAiAAQAeAAATAKQAUAKAKARQALARAEAaQAEAbAAAdIAAAOIiHAAIAAAWIACAXQACAKAEAKQAFAJAFAFQAIAFAHAAQASAAAIgNQAIgNADgYIA9AAQgCAugWAZQgXAYgyAAQgkAAgVgNgAgOhXQgHAEgEAIQgEAJgCAIIgCATIAAAKIBGAAIgCgbQgCgLgEgJQgDgIgHgEQgHgEgKAAQgKAAgGAFg");
	this.shape_5.setTransform(-7.3,16.1,0.423,0.423);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1B").s().p("ABEClIAAg/IiHAAIAAA/Ig+AAIAAhyIAXAAQAMgdAHgiQAHgkAAg4IAAg8IC0AAIAADXIAdAAIAABygAgSg2QgCAUgDASIgHAkQgFAUgFALIBJAAIAAijIgxAAg");
	this.shape_6.setTransform(-17.8,17.4,0.423,0.423);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1B").s().p("AAACwIAAj4IhGAAIAAguIAHAAQAkAAAUgOQAUgNAFgeIA1AAIAAFfg");
	this.shape_7.setTransform(-34.5,14.3,0.423,0.423);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1B").s().p("AAACwIAAj4IhGAAIAAguIAGAAQAkAAAVgOQAUgOAFgdIA1AAIAAFfg");
	this.shape_8.setTransform(-44.6,14.3,0.423,0.423);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1D1B").s().p("AAnCFIAAhiIgTAAIgwBiIhOAAIA9hpQgXgJgNgSQgNgSAAgfQAAgsAYgUQAZgVAoABIBwAAIAAEJgAgShLQgKAIAAATQAAATAJAIQAJAIASAAIAfAAIAAhHIgcAAQgTAAgKAJg");
	this.shape_9.setTransform(38.1,-16.4,0.423,0.423);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D1D1B").s().p("AhoC0IAAlgIBCAAIAAAcIABAAQAMgTAOgIQANgIAVAAQAqAAAUAhQAUAgAABLQAABLgUAgQgUAfgqAAQgVAAgLgGQgPgJgKgPIgBAAIAABvgAgchoQgHAVAAAsQAAAsAHAVQAHAXAVAAQAWAAAHgXQAHgXAAgqQAAgqgHgXQgHgXgWAAQgVAAgHAXg");
	this.shape_10.setTransform(28.4,-14.7,0.423,0.423);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D1D1B").s().p("Ag5CuQgUgNgLgXQgKgXgCgeQgDgfAAgjQAAgeADgiQAEgiALgYQALgaATgSQAUgSAegEIAlgHQAMgDACgHIA0AAQgBAUgFAOQgFANgKAIQgLAHgPAEQgMADgXACQgVADgNAEQgPAEgKAJQgJAJgFAPQgGANgCAZIACAAQAFgOAIgJQAIgLAKgFQAKgGAMgDQAKgDALAAQAcAAARAKQASAKALASQAKASAFAZQAEAYABAdQgBAfgEAZQgFAZgLASQgMASgVAKQgUAKghAAQgjAAgUgNgAgQgjQgGADgFALQgDALgDARQgCAXAAAWQAAAxAHAUQAIAVAUAAQALAAAGgFQAHgFAEgKQAEgLACgRQACgQAAgcQAAgWgCgXQgCgQgEgLQgFgKgGgEQgHgEgKAAQgIAAgIAFg");
	this.shape_11.setTransform(18,-18.4,0.423,0.423);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D1D1B").s().p("AAnCFIAAhiIgTAAIgwBiIhPAAIA+hpQgXgJgOgSQgNgTAAgeQAAgrAZgVQAZgVAoABIBwAAIAAEJgAgShLQgKAIAAATQAAATAJAIQAJAIASAAIAfAAIAAhHIgcAAQgTAAgKAJg");
	this.shape_12.setTransform(7.3,-16.4,0.423,0.423);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1D1D1B").s().p("AgyCEQgUgJgMgRQgNgSgEgaQgFgZAAgkQAAgkAFgYQAGgbAMgRQAMgSAVgJQAUgJAcAAQAfAAAUAJQAUAIANASQAMARAEAbQAFAaAAAjQAAAlgFAYQgFAagNARQgMARgUAJQgTAJgfAAQgfAAgTgIgAgThVQgIAHgDAMQgEAOgBAQIAABLQABAPAEAOQADAMAIAIQAIAHALAAQAVAAAIgWQAIgVAAgzQAAgygIgVQgIgWgVAAQgLAAgIAHg");
	this.shape_13.setTransform(-2.3,-16.4,0.423,0.423);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1D1D1B").s().p("AAhCFIAAhxIhBAAIAABxIhEAAIAAkJIBEAAIAABiIBBAAIAAhiIBEAAIAAEJg");
	this.shape_14.setTransform(-12.6,-16.4,0.423,0.423);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1D1D1B").s().p("Ag6CoQgVgJgNgRQgMgQgEgSQgDgRAAgRQAAghAPgZQAOgWAegGIAAgBQgOgEgKgHQgJgHgGgKQgHgKgCgKQgCgLAAgJQAAg0AbgWQAcgXAvABQAxgBAbAXQAbAWAAA0QAAAMgCAIQgEAMgFAIQgFAJgLAIQgJAHgOAEIAAABQAeAGAPAWQAOAZAAAhQAAARgDARQgEATgMAPQgMAQgWAKQgXAKgkAAQgjAAgXgKgAgTARQgHAEgFAJQgFAIgCALQgCAJAAAPQAAAOACAJQACAMAFAIQAEAIAIAFQAHAEAMAAQANAAAHgEQAHgEAGgJQAEgIACgMQACgLAAgMQAAgOgCgKQgCgLgEgIQgGgJgHgEQgJgFgLAAQgKAAgJAFgAgihTQAAAaAKALQAKAMAOABQAQgBAJgMQAKgLAAgaQAAgwgjAAQgiAAAAAwg");
	this.shape_15.setTransform(-27.9,-18,0.423,0.423);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1D1D1B").s().p("AhrCwQAAgXAEgVQAFgTAKgUQAKgTAOgRQAPgRATgSIAdgaQALgKAHgJQAIgLADgHQAEgKACgKIABgYQAAgrgjAAQgMAAgIAFQgIAGgEAJQgEAKgCAMIgBAaIhEAAIAAgNQAAgyAagaQAbgaA3AAQA2AAAaAZQAZAZAAAuQAAARgDAPQgDAPgGANQgGANgLAMQgJAMgQAOIgoAlQgOANgKAPQgJAOgCAJICDAAIAAA4g");
	this.shape_16.setTransform(-38.1,-18.2,0.423,0.423);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1D1D1B").s().p("Ah7AcIAAg3ID3AAIAAA3g");
	this.shape_17.setTransform(-0.1,0,0.423,0.423,0,0,0,-0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.qwe, new cjs.Rectangle(-47.6,-26.3,95.4,51.7), null);


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
	this.shape.setTransform(54.2,24.1,0.301,0.301);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AiCKKIAA0TIEFAAIAAUTg");
	this.shape_1.setTransform(31.9,24.1,0.301,0.301);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("ACFKKIk/uOIgEAAIAAOOIjxAAIAA0TIEvAAIE8N5IADAAIAAt5IDxAAIAAUTg");
	this.shape_2.setTransform(9,24.1,0.301,0.301);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("ADqKKIg9kTIlZAAIg8ETIkRAAIFY0TIFEAAIFXUTgAh/CgID+AAIh9pIIgCAAg");
	this.shape_3.setTransform(-22,24.1,0.301,0.301);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("AFRKKIAAwNIgEAAIjnQNIjLAAIjnwNIgEAAIAAQNIjxAAIAA0TIGGAAIC6OVIADAAIC7uVIGEAAIAAUTg");
	this.shape_4.setTransform(-57.6,24.1,0.301,0.301);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1B").s().p("AD5K2IhAkmIlxAAIhAEmIkjAAIFv1rIFZAAIFvVrgAiHCrIEPAAIiGpvIgDAAg");
	this.shape_5.setTransform(54.7,-21.9,0.301,0.301);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1B").s().p("AiLK2IAAyFIkvAAIAAjmIN1AAIAADmIkvAAIAASFg");
	this.shape_6.setTransform(27.5,-21.9,0.301,0.301);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1B").s().p("ACjK2IAApoIlGAAIAAJoIkXAAIAA1rIEXAAIAAITIFGAAIAAoTIEYAAIAAVrg");
	this.shape_7.setTransform(-2.9,-21.9,0.301,0.301);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1B").s().p("AikKxQhQgPg+gxQg+guglhZQglhXAAiMIAAvGIEYAAIAAPGQAAA3AGAqQAHArATAgQASAhAgASQAgASAwAAQAzAAAfgSQAfgSASghQASggAIgrQAGgqAAg3IAAvGIEYAAIAAPGQAACDglBYQglBWg+AzQg+AyhQASQhRARhUAAQhSAAhSgPg");
	this.shape_8.setTransform(-34.9,-21.6,0.301,0.301);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1D1B").s().p("AmDK2IAA1rIEYAAIAASFIHvAAIAADmg");
	this.shape_9.setTransform(-63.1,-21.9,0.301,0.301);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hhh, new cjs.Rectangle(-74.9,-42.8,145.9,86.5), null);


(lib.ghghgh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AByDlIgUg0Ii7AAIgUA0IjAAAIDDnJIDdAAIDDHJgAA3BBIg2iaIgBAAIg2CaIBtAAg");
	this.shape.setTransform(92.1,-2,0.354,0.354);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhaDlIAAlWIinAAIAAhzIIDAAIAABzIinAAIAAFWg");
	this.shape_1.setTransform(62.4,-2,0.354,0.354);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("ABmDlIAAi3IjLAAIAAC3Ii1AAIAAnJIC1AAIAACfIDLAAIAAifIC1AAIAAHJg");
	this.shape_2.setTransform(30.4,-2,0.354,0.354);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("AjODFQhDgsAAhqIAAkbIC1AAIAAEUQAAAqAYATQAXARAtAAQAvAAAWgRQAYgTAAgqIAAkUIC1AAIAAEbQAABqhDAsQg/AoiQAAQiPAAg/gog");
	this.shape_3.setTransform(-3.5,-1.7,0.354,0.354);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("AjmDlIAAnJIC1AAIAAFOIEYAAIAAB7g");
	this.shape_4.setTransform(-34.2,-2,0.354,0.354);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1B").s().p("AnDHEQi7i7AAkJQAAkIC7i7QC7i7EIAAQEJAAC7C7QC7C7AAEIQAAEJi7C7Qi7C7kJAAQkIAAi7i7gAhJjhQgnAggNAkIh4FQIF+AAQA5ABArggQAhgaAGgbImEAAIB6lgIgIgBQgjAAgoAhg");
	this.shape_5.setTransform(-80.2,0,0.354,0.354);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ghghgh, new cjs.Rectangle(-102.8,-22.6,205.8,45.3), null);


(lib.ghgh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(-96.5,-150.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ghgh, new cjs.Rectangle(-96.5,-150.5,154,241), null);


(lib.ggg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.skidka();
	this.instance.parent = this;
	this.instance.setTransform(-53,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ggg, new cjs.Rectangle(-53,-24,105,48), null);


(lib.dfgd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.legalpngкопия();
	this.instance.parent = this;
	this.instance.setTransform(58,93);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dfgd, new cjs.Rectangle(58,93,102,42), null);


(lib.bbvv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(-120,-167);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bbvv, new cjs.Rectangle(-120,-167,240,500), null);


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
	this.shape.setTransform(0,-11.8,0.352,0.352);

	this.instance = new lib._999();
	this.instance.parent = this;
	this.instance.setTransform(7.2,12.3,1.277,1.277,0,0,0,17.4,8.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhSEvQglgKgWgXQgWgUgNgkQgLgiAAgyQAAhpBcguQhQgnAAhnQABgyAWghQAWgiApgRQAngQAyAAQAyAAAoAQQAoARAXAiQAWAhAAAyQAABphLAlQAtASAVAjQAVAkABA+QgBBBgTApQgUApgpASQgpAThCgBQgvABgjgLgAg9BsIAAAfQABBUA8AAQA+AAAAhUIAAgfQAAhTg+AAQg8AAgBBTgAgqjKQgNAVAAArQAABOA3AAQAeAAANgTQANgTAAgoQAAgtgMgTQgMgUggAAQgeAAgMAUg");
	this.shape_1.setTransform(-25.1,12.3,0.352,0.352);

	this.instance_1 = new lib._999();
	this.instance_1.parent = this;
	this.instance_1.setTransform(12.9,-12.3,1,1,0,0,0,17.3,8.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhvDRQgigkAAg5IAAgcIBbAAIAAARQAABFAzAAQAfAAALgSQAJgSAAgmQAAgtgNgSQgOgSghAAIgqAAIAAhAIAcAAQAqAAAOgXQANgWAAgiQAAgyguABQgYAAgOAOQgNAPAAAcIAAAQIhaAAIAAgUQAAg3AmgiQAmgjBBAAQArAAAgAOQAgAOARAbQARAaAAAlQAAAugTAZQgSAZgmANQBTARAABmQAAAzgRAgQgSAfgiAPQghAOgyAAQhFAAgkgkg");
	this.shape_2.setTransform(-11.8,-12.4,0.352,0.352);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAMDsIAAlEIh3AAIAAhBIANAAQA5AAAhgYQAhgWAKgkIBFAAIAAHXg");
	this.shape_3.setTransform(-26.5,-12.4,0.352,0.352);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhfAdIAAg5IC/AAIAAA5g");
	this.shape_4.setTransform(-35.2,-10.1,0.352,0.352);

	this.instance_2 = new lib.ppp();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.1,0.1,1,1,0,0,0,41.1,28.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_1},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.vvbv, new cjs.Rectangle(-41,-28.3,82.1,56.7), null);


(lib.vv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5).p("APkklI/HJK");
	this.shape.setTransform(0,-11.8,0.352,0.352);

	this.instance = new lib._999();
	this.instance.parent = this;
	this.instance.setTransform(8.7,12.3,1.277,1.277,0,0,0,17.4,8.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhcErQgogPgaggQgYghgBgxIAAk5QAAgwAWgnQAVgmApgXQAqgVA4AAQA1gBAqASQArASAXAeQAYAggBAmIAAAIIh7AAIAAgGQAAgWgPgMQgQgNgcAAQgeAAgPATQgQATABAtIAABHQAQgRAfgNQAggNAZAAQAoAAAgAQQAfAQASAfQARAfAAArIAACRQAABIgzAkQgyAihUABQgzAAgngPgAgqgBQgRAOAAAfIAAB4QAAA9A5AAQA+AAAAg9IAAh7QAAgbgRgOQgSgRgYABQgZAAgSAPg");
	this.shape_1.setTransform(-23,12.3,0.352,0.352);

	this.instance_1 = new lib._999();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13,-12.6,0.997,0.997,0,0,0,17.4,8.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhuDRQgjgkAAg5IAAgcIBbAAIAAAQQAABGAzAAQAgAAAKgSQAKgSAAgmQAAgugOgRQgOgSghAAIgqAAIAAhAIAcAAQAqAAAOgXQAOgWAAgiQAAgygvAAQgYAAgOAPQgNAQAAAbIAAAQIhZAAIAAgUQAAg3AlgjQAngiBAAAQAsAAAfAOQAgAOARAaQARAbAAAlQAAAugTAZQgTAZgkAMQBSASAABmQAAA0gRAfQgSAgghAOQgjAOgxAAQhGAAgigkg");
	this.shape_2.setTransform(-11.8,-12.4,0.352,0.352);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAMDtIAAlFIh3AAIAAhBIANAAQA4AAAigXQAigXAJglIBFAAIAAHZg");
	this.shape_3.setTransform(-26.6,-12.4,0.352,0.352);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhfAdIAAg5IC/AAIAAA5g");
	this.shape_4.setTransform(-35.2,-10.1,0.352,0.352);

	this.instance_2 = new lib.ppp();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.1,0.1,1,1,0,0,0,41.1,28.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_1},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.vv, new cjs.Rectangle(-41,-28.3,82.1,56.7), null);


(lib.fgggg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5).p("APkklI/HJK");
	this.shape.setTransform(0,-13.1,0.352,0.352);

	this.instance = new lib._999();
	this.instance.parent = this;
	this.instance.setTransform(16.1,11.2,1.277,1.277,0,0,0,17.4,8.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjBE0IAAggQAAg6AVgvQAUgwAeghQAfgiAegaIA/gyQAsgoAMgVQANgXAAgfQAAhOhDAAQghAAgRAVQgRAWAAAyIAAAhIh6AAIAAgkQAAg6AbgqQAcgrArgUQAsgVAvAAQA1AAArAUQArAUAaAlQAZAlAAAvQAAAxgXAuQgZAwgrAjIhMA/QggAcgXAeQgWAdgFAiIDpAAIAABcg");
	this.shape_1.setTransform(-16.1,10.8,0.352,0.352);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAQEuIAAmfIiZAAIAAhTIAQAAQBIAAAsgdQAqgeANgvIBYAAIAAJcg");
	this.shape_2.setTransform(-34.4,11,0.352,0.352);

	this.instance_1 = new lib._999();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13.1,-13.6,0.997,0.997,0,0,0,17.4,8.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhBDtQgbgIgSgSQgSgRgJgbQgJgaAAgoQAAhRBIglQg+geAAhQQAAgoARgZQASgbAfgMQAfgNAnAAQAnAAAfANQAeALAUAcQARAaAAAnQAABSg8AcQAkAOARAcQAQAcABAwQgBA0gPAfQgPAgggAPQgiAOgyAAQgkAAgdgIgAgvBUIAAAYQAABCAvAAQAwAAAAhCIAAgYQAAhAgwAAQgvAAAABAgAggieQgLAQAAAiQAAA9ArAAQAXAAAKgOQALgPgBggQAAgjgJgPQgKgQgYAAQgXAAgJAQg");
	this.shape_3.setTransform(-12.2,-13.6,0.352,0.352);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAMDtIAAlFIh3AAIAAhBIANAAQA4AAAigXQAigXAJglIBFAAIAAHZg");
	this.shape_4.setTransform(-26.6,-13.6,0.352,0.352);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhfAdIAAg5IC/AAIAAA5g");
	this.shape_5.setTransform(-35.2,-11.3,0.352,0.352);

	this.instance_2 = new lib.ppp();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.1,0.1,1,1,0,0,0,41.1,28.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance_1},{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fgggg, new cjs.Rectangle(-41,-28.3,82.1,56.7), null);


(lib.bbbnbn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5).p("APkkkI/HJJ");
	this.shape.setTransform(0,-11.8,0.352,0.352);

	this.instance = new lib._9();
	this.instance.parent = this;
	this.instance.setTransform(-25.3,12.4,1.271,1.281,0,0,0,5.1,8.7);

	this.instance_1 = new lib._999();
	this.instance_1.parent = this;
	this.instance_1.setTransform(6.1,12.4,1.277,1.277,0,0,0,17.4,8.7);

	this.instance_2 = new lib._999();
	this.instance_2.parent = this;
	this.instance_2.setTransform(12.3,-12.3,0.997,0.997,0,0,0,17.4,8.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhPDsQANhrAlhuQAjhpAxhNIjNAAIAAhIIEtAAIAABDQgxBWgjBkQghBhgJB5g");
	this.shape_1.setTransform(-12.5,-12.3,0.352,0.352);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAMDtIAAlFIh3AAIAAhCIANAAQA4AAAjgWQAggXAKglIBEAAIAAHZg");
	this.shape_2.setTransform(-26.5,-12.4,0.352,0.352);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhfAeIAAg7IC/AAIAAA7g");
	this.shape_3.setTransform(-35.2,-10,0.352,0.352);

	this.instance_3 = new lib.ppp();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.1,0.1,1,1,0,0,0,41.1,28.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bbbnbn, new cjs.Rectangle(-41,-28.3,82.1,56.7), null);


// stage content:
(lib._120x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").p("EgJSguyISlAAMAAABdlIylAAg");
	this.shape.setTransform(60,300.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(362));

	// 4
	this.instance = new lib.v();
	this.instance.parent = this;
	this.instance.setTransform(-119,168);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(278).to({_off:false},0).wait(1).to({regX:0.5,regY:83,x:-117.8,y:251},0).wait(1).to({x:-115.5},0).wait(1).to({x:-111},0).wait(1).to({x:-103},0).wait(1).to({x:-89.5},0).wait(1).to({x:-67.3},0).wait(1).to({x:-39.1},0).wait(1).to({x:-17.1},0).wait(1).to({x:-3.8},0).wait(1).to({x:4.1},0).wait(1).to({x:8.6},0).wait(1).to({x:10.8},0).wait(1).to({regX:0,regY:0,x:11,y:168},0).to({x:121},55).wait(1).to({regX:0.5,regY:83,x:122.5,y:251},0).wait(1).to({x:125.9},0).wait(1).to({x:132.8},0).wait(1).to({x:144.7},0).wait(1).to({x:164.1},0).wait(1).to({x:193.4},0).wait(1).to({x:226.8},0).wait(1).to({x:252.1},0).wait(1).to({x:267.4},0).wait(1).to({x:276.1},0).wait(1).to({x:280.3},0).wait(1).to({regX:0,regY:0,x:281,y:168},0).wait(4));

	// plate4
	this.instance_1 = new lib.vv();
	this.instance_1.parent = this;
	this.instance_1.setTransform(68.2,423.8,0.5,0.5);
	this.instance_1.alpha = 0.301;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(221).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},7,cjs.Ease.get(1)).wait(51).to({x:69.4},0).wait(1).to({x:73.6},0).wait(1).to({x:82},0).wait(1).to({x:96.8},0).wait(1).to({x:121.7},0).wait(1).to({x:162.6},0).wait(1).to({x:214.8},0).wait(1).to({x:255.2},0).wait(1).to({x:279.9},0).wait(1).to({x:294.5},0).wait(1).to({x:302.8},0).wait(1).to({x:307},0).wait(1).to({x:308.2},0).to({_off:true},1).wait(70));

	// plate3
	this.instance_2 = new lib.bbbnbn();
	this.instance_2.parent = this;
	this.instance_2.setTransform(49.5,106,0.5,0.5);
	this.instance_2.alpha = 0.301;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(217).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},7,cjs.Ease.get(1)).wait(53).to({x:50.7},0).wait(1).to({x:54.9},0).wait(1).to({x:63.3},0).wait(1).to({x:78.1},0).wait(1).to({x:103},0).wait(1).to({x:143.9},0).wait(1).to({x:196.1},0).wait(1).to({x:236.5},0).wait(1).to({x:261.2},0).wait(1).to({x:275.8},0).wait(1).to({x:284.1},0).wait(1).to({x:288.3},0).wait(1).to({x:289.5},0).to({_off:true},1).wait(72));

	// 3
	this.instance_3 = new lib.vvv();
	this.instance_3.parent = this;
	this.instance_3.setTransform(76,292,0.5,0.5);
	this.instance_3.alpha = 0.301;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(213).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},7,cjs.Ease.get(1)).wait(58).to({regX:-21,regY:-29.5,x:56.2,y:262.5},0).wait(1).to({x:60.4},0).wait(1).to({x:68.8},0).wait(1).to({x:83.6},0).wait(1).to({x:108.5},0).wait(1).to({x:149.4},0).wait(1).to({x:201.6},0).wait(1).to({x:242},0).wait(1).to({x:266.7},0).wait(1).to({x:281.3},0).wait(1).to({x:289.6},0).wait(1).to({x:293.8},0).wait(1).to({regX:0,regY:0,x:316,y:292},0).to({_off:true},1).wait(71));

	// logo
	this.instance_4 = new lib.ghghgh();
	this.instance_4.parent = this;
	this.instance_4.setTransform(59.9,547.4,0.225,0.225,0,0,0,0.2,0.2);
	this.instance_4.alpha = 0.301;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(72).to({_off:false},0).to({regX:0.1,regY:0,scaleX:0.54,scaleY:0.54,alpha:1},7).wait(270).to({regX:0,x:60.8},0).wait(1).to({x:64.1},0).wait(1).to({x:70.6},0).wait(1).to({x:81.8},0).wait(1).to({x:99.5},0).wait(1).to({x:124.3},0).wait(1).to({x:150.5},0).wait(1).to({x:170.4},0).wait(1).to({x:182.9},0).wait(1).to({x:190.2},0).wait(1).to({x:193.8},0).wait(1).to({regX:0.1,x:194.9},0).wait(2));

	// 2
	this.instance_5 = new lib.bbvv();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-120,167);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(130).to({_off:false},0).wait(1).to({regY:83,x:-118.9,y:250},0).wait(1).to({x:-115.4},0).wait(1).to({x:-108.5},0).wait(1).to({x:-96.8},0).wait(1).to({x:-78.4},0).wait(1).to({x:-53},0).wait(1).to({x:-26.3},0).wait(1).to({x:-5.8},0).wait(1).to({x:7.3},0).wait(1).to({x:15},0).wait(1).to({x:18.9},0).wait(1).to({regY:0,x:20,y:167},0).to({x:100},55).wait(1).to({regY:83,x:100.9,y:250},0).wait(1).to({x:104.1},0).wait(1).to({x:110.3},0).wait(1).to({x:121.1},0).wait(1).to({x:138.7},0).wait(1).to({x:165.7},0).wait(1).to({x:197.3},0).wait(1).to({x:221.7},0).wait(1).to({x:236.5},0).wait(1).to({x:244.8},0).wait(1).to({x:248.9},0).wait(1).to({regY:0,x:250,y:167},0).to({_off:true},1).wait(152));

	// plate2
	this.instance_6 = new lib.fgggg();
	this.instance_6.parent = this;
	this.instance_6.setTransform(69.8,425.1,0.5,0.5,0,0,0,0.1,0.1);
	this.instance_6.alpha = 0.301;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(78).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,alpha:1},6,cjs.Ease.get(1)).wait(46).to({x:71.5},0).wait(1).to({x:77.5},0).wait(1).to({x:89.3},0).wait(1).to({x:109.4},0).wait(1).to({x:141},0).wait(1).to({x:184.5},0).wait(1).to({x:230.3},0).wait(1).to({x:265.5},0).wait(1).to({x:288.1},0).wait(1).to({x:301.2},0).wait(1).to({x:307.8},0).wait(1).to({x:309.8},0).to({_off:true},1).wait(220));

	// plate1
	this.instance_7 = new lib.vvbv();
	this.instance_7.parent = this;
	this.instance_7.setTransform(48.8,105.9,0.5,0.5,0,0,0,0.1,0.1);
	this.instance_7.alpha = 0.301;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(74).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,alpha:1},6,cjs.Ease.get(1)).wait(48).to({x:50.5},0).wait(1).to({x:56.5},0).wait(1).to({x:68.3},0).wait(1).to({x:88.4},0).wait(1).to({x:120},0).wait(1).to({x:163.5},0).wait(1).to({x:209.3},0).wait(1).to({x:244.5},0).wait(1).to({x:267.1},0).wait(1).to({x:280.2},0).wait(1).to({x:286.8},0).wait(1).to({x:288.8},0).to({_off:true},1).wait(222));

	// 1
	this.instance_8 = new lib.ghgh();
	this.instance_8.parent = this;
	this.instance_8.setTransform(80.5,290.5,0.5,0.5,0,0,0,0.1,0.1);
	this.instance_8.alpha = 0.301;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(70).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,alpha:1},7,cjs.Ease.get(1)).wait(52).to({regX:-19.5,regY:-30,x:62.7,y:260.5},0).wait(1).to({x:68.7},0).wait(1).to({x:80.6},0).wait(1).to({x:100.7},0).wait(1).to({x:132.2},0).wait(1).to({x:175.8},0).wait(1).to({x:221.6},0).wait(1).to({x:256.7},0).wait(1).to({x:279.3},0).wait(1).to({x:292.5},0).wait(1).to({x:299.1},0).wait(1).to({regX:0,regY:0,x:320.5,y:290.5},0).to({_off:true},1).wait(221));

	// Слой 1
	this.instance_9 = new lib.dfgd();
	this.instance_9.parent = this;
	this.instance_9.setTransform(60,469,1,1,0,0,0,108,11);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(8).to({_off:false},0).to({alpha:1},11).wait(45).to({alpha:0},5).to({_off:true},1).wait(292));

	// skidka
	this.instance_10 = new lib.ggg();
	this.instance_10.parent = this;
	this.instance_10.setTransform(60,320,0.5,0.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(2).to({_off:false},0).to({scaleX:1,scaleY:1,x:60.5,y:360},7,cjs.Ease.get(1)).wait(54).to({scaleX:0.8,scaleY:0.8,y:332.2,alpha:0.301},7,cjs.Ease.get(-1)).to({_off:true},1).wait(291));

	// date
	this.instance_11 = new lib.qwe();
	this.instance_11.parent = this;
	this.instance_11.setTransform(62.4,240.1,0.5,0.5);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({_off:false},0).wait(1).to({regY:-0.5,scaleX:0.51,scaleY:0.51,y:239.9,alpha:0.021},0).wait(1).to({scaleX:0.55,scaleY:0.55,y:239.8,alpha:0.1},0).wait(1).to({scaleX:0.63,scaleY:0.63,alpha:0.265},0).wait(1).to({scaleX:0.76,scaleY:0.76,y:239.7,alpha:0.517},0).wait(1).to({scaleX:0.88,scaleY:0.88,alpha:0.759},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:239.6,alpha:0.909},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.98},0).wait(1).to({regY:0,scaleX:1,scaleY:1,y:240.1,alpha:1},0).wait(52).to({scaleX:0.8,scaleY:0.8,x:62,y:238.3,alpha:0.301},7,cjs.Ease.get(-1)).to({_off:true},1).wait(293));

	// mania
	this.instance_12 = new lib.hhh();
	this.instance_12.parent = this;
	this.instance_12.setTransform(63.1,143.5,0.36,0.36,0,0,0,0.3,0.3);
	this.instance_12.alpha = 0.449;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({regX:0.1,regY:0.1,scaleX:0.72,scaleY:0.72,x:63,y:114.7,alpha:1},7,cjs.Ease.get(1)).wait(52).to({scaleX:0.58,scaleY:0.58,x:62.6,y:133.3,alpha:0.301},7,cjs.Ease.get(-1)).to({_off:true},1).wait(295));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFEC00").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape_1.setTransform(60,300,0.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(362));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(59.5,299.6,121,601);
// library properties:
lib.properties = {
	width: 120,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/120x600_atlas_P_.png", id:"120x600_atlas_P_"},
		{src:"images/120x600_atlas_NP_.jpg", id:"120x600_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;