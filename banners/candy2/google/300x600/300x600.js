(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x600_atlas_", frames: [[0,0,340,338],[0,340,156,153]]}
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



(lib.pic0 = function() {
	this.spriteSheet = ss["300x600_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pic4 = function() {
	this.spriteSheet = ss["300x600_atlas_"];
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


(lib.text5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4A4A49").s().p("AB9CtIg1hyIiPAAIg0ByIglAAICelZIAHAAICcFZgAg3AaIBxAAIg5h9g");
	this.shape.setTransform(82.6,22.4,0.375,0.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A4A49").s().p("ACcCtIghj3Ih2D3IgIAAIh4j4IghD4IggAAIAwlZIAFAAICHEbICHkbIAGAAIAwFZg");
	this.shape_1.setTransform(68.1,22.4,0.375,0.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A4A49").s().p("Ah8CBQgzg0AAhLQAAgyAXgqQAYgrAogYQAngYAwAAQBLAAAzA1QAzA0AABMQAABMgzA1QgyA1hKAAQhKAAgzg1gAhGh/QgiAUgSAiQgTAhAAAqQAAA+AqAqQApArA6AAQAnAAAggUQAigUASgiQATgiAAgpQAAgogTgiQgSghgigUQgigUglAAQglAAghAUg");
	this.shape_2.setTransform(52.5,22.4,0.375,0.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4A4A49").s().p("ACGDHIAAgzIkLAAIAAAzIghAAIAAhUIAbAAICDk5IALAAICKE5IAaAAIAABUgAhlBzIDLAAIhojyg");
	this.shape_3.setTransform(38.3,23.3,0.375,0.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4A4A49").s().p("ABJCtIAAihIgSAAIh4ChIgpAAIB3ihQgpAAgYgLQgYgLgMgUQgOgXAAgbQAAgiATgXQASgYAfgHQAUgFA2ABIBDAAIAAFZgAgiiFQgPAHgJAOQgJAOAAASQAAASAJAOQAJAOAQAHQAQAHAhAAIA5AAIAAh2Ig7AAQghAAgPAFg");
	this.shape_4.setTransform(21.4,22.4,0.375,0.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4A4A49").s().p("ABwCtIhvkKIhwEKIgkAAICRlZIAHAAICPFZg");
	this.shape_5.setTransform(10.6,22.4,0.375,0.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4A4A49").s().p("ACGDHIAAgzIkMAAIAAAzIggAAIAAhUIAbAAICDk5IALAAICKE5IAaAAIAABUgAhmBzIDMAAIhojyg");
	this.shape_6.setTransform(-2,23.3,0.375,0.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4A4A49").s().p("ABhCtIAAkIIjcEIIgIAAIAAlZIAiAAIAAENIDdkNIAIAAIAAFZg");
	this.shape_7.setTransform(-19.9,22.4,0.375,0.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4A4A49").s().p("ABECtIiRiiIAACiIgjAAIAAlZIAjAAIAACBICEiBIAtAAIifCbICsC+g");
	this.shape_8.setTransform(-30.9,22.4,0.375,0.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4A4A49").s().p("ABhCtIAAkIIjcEIIgHAAIAAlZIAhAAIAAENIDdkNIAHAAIAAFZg");
	this.shape_9.setTransform(-43.1,22.4,0.375,0.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4A4A49").s().p("ABVCtIAAinIipAAIAACnIghAAIAAlZIAhAAIAACRICpAAIAAiRIAhAAIAAFZg");
	this.shape_10.setTransform(-55.5,22.4,0.375,0.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4A4A49").s().p("ABXCtIhXiSIhWCSIgnAAIBriyIhkinIAnAAIBPCHIBRiHIAnAAIhkCnIBqCyg");
	this.shape_11.setTransform(-66.8,22.4,0.375,0.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4A4A49").s().p("AhfCtIAAlZIC/AAIAAAiIidAAIAABsICbAAIAAAhIibAAIAACJICbAAIAAAhg");
	this.shape_12.setTransform(-76.4,22.4,0.375,0.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4A4A49").s().p("AgQCtIAAk3IhLAAIAAgiIC3AAIAAAiIhLAAIAAE3g");
	this.shape_13.setTransform(-85.2,22.4,0.375,0.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4A4A49").s().p("AhrCtIAAlZIAhAAIAACUIAZAAQA+AAAfAHQAdAHARAWQASAZAAAkQAAAmgRAXQgRAZgbAHQgbAHg8AAgAhKCMIAkAAQA5AAAQgGQAQgFALgPQAKgQAAgXQAAgZgNgRQgNgRgTgDQgXgEgxAAIgdAAg");
	this.shape_14.setTransform(68.3,0.6,0.375,0.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4A4A49").s().p("ABwCtIhvkLIhwELIgkAAICRlZIAHAAICPFZg");
	this.shape_15.setTransform(56.6,0.6,0.375,0.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4A4A49").s().p("AhfCtIAAlZIC/AAIAAAhIidAAIAABtICcAAIAAAhIicAAIAACIICcAAIAAAig");
	this.shape_16.setTransform(46.2,0.6,0.375,0.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4A4A49").s().p("AgQCtIAAk4IhLAAIAAghIC3AAIAAAhIhLAAIAAE4g");
	this.shape_17.setTransform(37.4,0.6,0.375,0.375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4A4A49").s().p("ABhCtIAAkJIjcEJIgIAAIAAlZIAiAAIAAENIDdkNIAIAAIAAFZg");
	this.shape_18.setTransform(27.2,0.6,0.375,0.375);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4A4A49").s().p("ACGDHIAAg0IkLAAIAAA0IghAAIAAhUIAbAAICDk5IALAAICKE5IAaAAIAABUgAhmBzIDMAAIhojyg");
	this.shape_19.setTransform(14.2,1.6,0.375,0.375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4A4A49").s().p("Ah8CBQgzg0AAhLQAAgyAXgqQAXgqApgZQAogYAvAAQBLAAAzA0QAzA1AABMQAABMgzA1QgzA1hJAAQhKAAgzg1gAhGh/QgiATgSAjQgTAiAAAoQAAA+AqArQApAqA6AAQAmAAAhgTQAhgTATgjQATghAAgqQAAgpgTghQgTgighgTQgigUglAAQglAAghAUg");
	this.shape_20.setTransform(0.1,0.6,0.375,0.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4A4A49").s().p("AhjCtIAAlZIBCAAQAnAAAVAJQAWAKAMAUQAMAUAAAZQAAAYgLATQgKASgWAMQAaAJAPAMQAOANAHARQAIARAAAVQAAApgdAeQgdAcgxAAgAhCCLIApAAQAlAAAQgHQAQgHALgQQALgQAAgSQAAgXgPgSQgPgRgZgGQgQgFgqAAIgTAAgAhCgbIATAAQAiAAAQgHQAQgHAKgOQAKgQAAgRQAAgXgQgOQgRgOgiAAIgmAAg");
	this.shape_21.setTransform(-12.2,0.6,0.375,0.375);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4A4A49").s().p("Ag9CnQgagQgXgmIAZgQQAXAkAVAJQAUAKAVAAQAfAAAXgTQAWgTAAglQAAgTgHgPQgJgPgNgJQgNgIgNgDQgOgCgbAAIgFAAIAAgeIALAAQBKAAAAg+QgBgdgRgRQgRgRgZAAQghAAgeAfIgWgVQAigqAzAAQApAAAcAYQAbAZAAAnQAAA3gzAYQBDAVAABGQAAAwgfAcQgdAdg0AAQgiAAgbgPg");
	this.shape_22.setTransform(-22.7,0.6,0.375,0.375);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#4A4A49").s().p("ABhCtIAAkJIjcEJIgIAAIAAlZIAiAAIAAENIDdkNIAHAAIAAFZg");
	this.shape_23.setTransform(-34.1,0.6,0.375,0.375);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4A4A49").s().p("Ah8CBQg0g1AAhKQAAgxAYgrQAWgqApgZQApgYAvAAQBLAAAzA0QAzA1ABBMQgBBMgzA1QgzA1hKAAQhJAAgzg1gAhGh/QghATgTAjQgSAhgBApQAAA+AqArQApAqA6AAQAnAAAggTQAigUASgiQATghAAgqQAAgpgTghQgSgigigTQghgUgmAAQgmAAggAUg");
	this.shape_24.setTransform(-48.2,0.6,0.375,0.375);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4A4A49").s().p("AhoCtIAAlZIBDAAQA5AAATAFQAeAHASAXQASAWAAAjQAAAigSAXQgSAXgfAGQgXAGg9AAIgYAAIAAChgAhGgVIA4ABQAjAAAPgHQAQgGAJgPQAJgOAAgSQAAgRgJgPQgJgOgPgGQgQgHggAAIg7AAg");
	this.shape_25.setTransform(-60.7,0.6,0.375,0.375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4A4A49").s().p("ABVCtIAAk4IipAAIAAE4IgiAAIAAlZIDtAAIAAFZg");
	this.shape_26.setTransform(-72.1,0.6,0.375,0.375);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4A4A49").s().p("ABhDXIAAkJIjcEJIgIAAIAAlaIAiAAIAAENIDdkNIAHAAIAAFagAg0iyQgWgOgFgWIAdAAQAIAMAOAHQANAFAQAAQATAAAKgEQAMgHAKgNIAdAAQgFAWgVAOQgUAOgiAAQgfAAgWgOg");
	this.shape_27.setTransform(55.5,-22.7,0.375,0.375);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#4A4A49").s().p("ABhCtIAAkJIjcEJIgIAAIAAlaIAiAAIAAEOIDdkOIAIAAIAAFag");
	this.shape_28.setTransform(42.6,-21.1,0.375,0.375);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#4A4A49").s().p("ABECtIiSihIAAChIgiAAIAAlaIAiAAIAACDICFiDIAtAAIigCdICtC9g");
	this.shape_29.setTransform(31.5,-21.1,0.375,0.375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#4A4A49").s().p("Ah4B5QgqgyAAhIQAAhNAzgzQAzg0BNAAQAvAAAlATQAnAUAYAiIgbAVQgWgegfgPQgegPgkAAQgmAAgkAUQgiAUgSAhQgUAiAAApQAABAAqAqQAqAqBAAAQBGAAAvg5IAbAVQgaAhglASQglASguAAQhXAAgzg9g");
	this.shape_30.setTransform(18.7,-21.1,0.375,0.375);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#4A4A49").s().p("ABVCtIAAinIipAAIAACnIgiAAIAAlaIAiAAIAACSICpAAIAAiSIAiAAIAAFag");
	this.shape_31.setTransform(5.6,-21.1,0.375,0.375);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#4A4A49").s().p("ABJCtIAAihIgSAAIh3ChIgqAAIB3ihQgoABgZgLQgXgLgNgVQgNgWAAgcQAAgiATgYQASgXAegHQATgEA3gBIBDAAIAAFagAgiiEQgOAGgKAOQgIAPgBARQABARAIAPQAKAOAPAIQAQAGAhAAIA5gBIAAh2Ig7AAQghABgPAGg");
	this.shape_32.setTransform(-5.9,-21.1,0.375,0.375);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#4A4A49").s().p("AhrCtIAAlaIAiAAIAACVIAYAAQBBABAcAGQAdAHARAWQASAYAAAmQAAAlgRAYQgRAXgbAIQgaAHg9AAgAhJCMIAjAAQA5AAAQgFQAQgGALgPQAKgQAAgXQAAgagMgQQgNgQgUgEQgSgEg2ABIgcAAg");
	this.shape_33.setTransform(-15.6,-21.1,0.375,0.375);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#4A4A49").s().p("ABwCtIhvkLIhwELIgkAAICRlaIAHAAICPFag");
	this.shape_34.setTransform(-27.3,-21.1,0.375,0.375);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#4A4A49").s().p("AB9CtIg1hyIiPAAIg0ByIglAAICelaIAHAAICcFagAg4AaIByAAIg5h8g");
	this.shape_35.setTransform(-39.9,-21.1,0.375,0.375);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#4A4A49").s().p("AgQCtIAAk4IhLAAIAAgiIC3AAIAAAiIhLAAIAAE4g");
	this.shape_36.setTransform(-50,-21.1,0.375,0.375);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#4A4A49").s().p("ABhCtIAAkJIjcEJIgIAAIAAlaIAiAAIAAEOIDdkOIAIAAIAAFag");
	this.shape_37.setTransform(-60.2,-21.1,0.375,0.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text5, new cjs.Rectangle(-88.6,-30.7,177.3,61.6), null);


(lib.text4b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAAEIgFAKIgFgEIAHgIIgLgCIADgGIAKAEIgBgLIAFAAIgBALIAKgEIADAGIgMACIAIAIIgFAEIgGgKg");
	this.shape.setTransform(40.9,-4.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhNBLQgcghAAgpQAAgnAYgfQAfgmAyAAQA0AAAfAnQAXAcAAAqIi4AAQABAjAWAYQAWAWAhAAQAQAAANgFQAOgFALgJQALgKAMgTIAWALQgLAVgOAOQgOANgSAHQgTAHgWAAQgxAAgdghgAgzg+QgQAOgIAcICYAAQgGgWgKgLQgKgNgQgIQgQgIgTAAQgdAAgWAUg");
	this.shape_1.setTransform(34.5,0.2,0.375,0.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgPCNIAAi2IgkAAIAAgWIAkAAIAAhNIAZAAIAABNIAqAAIAAAWIgqAAIAAC2g");
	this.shape_2.setTransform(27.5,-1.2,0.375,0.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMCRIAAjMIAZAAIAADMgAgOhrQgHgGAAgJQAAgJAHgHQAGgGAIAAQAJAAAGAGQAHAHAAAJQAAAJgHAGQgGAHgJgBQgIABgGgHg");
	this.shape_3.setTransform(23.5,-1.4,0.375,0.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgMCOIAAkbIAZAAIAAEbg");
	this.shape_4.setTransform(20.5,-1.3,0.375,0.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhPCLIAAkVICfAAIAAAcIiDAAIAABXICCAAIAAAaIiCAAIAABtICCAAIAAAbg");
	this.shape_5.setTransform(15.6,-1.2,0.375,0.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAoBnIAAhcIgTAAIg6BcIgcAAIA+hfQgYgDgOgNQgOgPAAgWQAAgbARgPQAQgPAaAAIA+AAIAADNgAgKhMQgJAEgFAHQgFAIAAAOQAAAMAGAIQAHAJAIACQAIABAXAAIARAAIAAhEIgRAAQgZAAgIADg");
	this.shape_6.setTransform(3.7,0.2,0.375,0.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AA/BnIAAiWIiVCWIgDAAIAAjNIAbAAIAACYICWiYIACAAIAADNg");
	this.shape_7.setTransform(-3.6,0.2,0.375,0.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhqCPIAAkYIAaAAIAAAmQAPgVAVgMQAVgKAYAAQAsAAAfAfQAfAgAAAtQAAAsgfAfQgeAggtAAQgXAAgVgKQgUgKgRgVIAABvgAg6hdQgYAYAAAkQAAAYALARQAKATAUALQATALAWgBQAVABASgLQATgMALgUQALgRAAgXQAAgVgLgVQgMgTgRgLQgTgLgVABQgjAAgXAXg");
	this.shape_8.setTransform(-12.9,1.5,0.375,0.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhNBLQgcgiAAgoQAAgnAYgfQAegmAzAAQA0AAAfAnQAXAdAAApIi4AAQABAkAWAXQAVAWAiAAQAQAAANgFQAOgFALgJQAMgKALgTIAWALQgLAVgOAOQgNANgTAHQgTAHgWAAQgxAAgdghgAg0g+QgPAOgJAcICZAAQgGgWgJgLQgLgNgQgIQgQgIgTAAQgdAAgXAUg");
	this.shape_9.setTransform(-22.7,0.2,0.375,0.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhjBhQgkgpAAg5QAAg8ArgqQArgqA/AAQAmAAAgAQQAgAPAUAcIgWAQQgSgXgZgMQgZgNggAAQgfABgdAQQgdAQgPAbQgQAaAAAhQAAA0AkAhQAjAiA0AAQA6AAAnguIAWARQgVAagfAPQgeAOgoAAQhIAAgpgxg");
	this.shape_10.setTransform(-33.4,-1.2,0.375,0.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text4b, new cjs.Rectangle(-38.4,-9.6,85.8,16.6), null);


(lib.text4a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhCCLIAAkVIAbAAIAAD7IBqAAIAAAag");
	this.shape.setTransform(34.1,0,0.375,0.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABICLIhIh1IhHB1IghAAIBZiOIhTiHIAhAAIBBBtIBDhtIAgAAIhTCHIBZCOg");
	this.shape_1.setTransform(25.9,0,0.375,0.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgrCHQgTgKgMgVQgLgUAAgXQAAgSAHgSQAIgUARgYIBTh+IAXAPIhKByQAOgFANAAQAiAAAWAWQAYAZAAAjQAAAXgMAUQgLATgUAMQgUALgXAAQgYAAgTgLgAgpATQgRARAAAZQAAAYARARQARARAYAAQAYAAARgRQARgSAAgXQAAgYgRgSQgRgRgYAAQgXAAgSARg");
	this.shape_2.setTransform(17.6,0,0.375,0.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhdCOIBphyQAfghALgRQAKgSAAgRQAAgYgSgRQgRgRgaAAQgZAAgSARQgSATgCAgIgbAAQABgpAbgbQAagbAmAAQAmAAAYAZQAYAaAAAhQAAAXgMAWQgLATghAkIhEBKIB/AAIAAAag");
	this.shape_3.setTransform(9.3,-0.1,0.375,0.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhGB4QgXgaAAghQAAgXAMgSQAMgSAegOQgVgLgKgPQgKgQAAgSQAAgTALgRQALgSATgJQATgKAVAAQAWAAATAKQASAKALARQAKASAAASQAAAUgJAOQgLAPgTALQAbANANARQAMATAAAXQAAAggVAYQgZAegwAAQgtAAgZgagAguATQgTASAAAZQAAAQAIANQAIAOAPAIQAPAHATAAQAeAAASgSQASgSAAgYQAAgXgTgTQgTgRgbgBQgbAAgUATgAglhoQgPANAAATQAAATAQAPQARAOAUAAQAPAAALgGQAMgHAHgMQAHgLAAgNQAAgQgOgOQgNgPgaAAQgWAAgPAOg");
	this.shape_4.setTransform(1.3,0,0.375,0.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AA5CLIh6iCIAACCIgcAAIAAkVIAcAAIAABoIBvhoIAlAAIiEB9ICPCYg");
	this.shape_5.setTransform(-6.5,0,0.375,0.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhPCLIAAkVICfAAIAAAcIiDAAIAABWICBAAIAAAbIiBAAIAABtICBAAIAAAbg");
	this.shape_6.setTransform(-14.8,0,0.375,0.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhkBiQgjgpAAg6QAAg9ArgpQArgqA/AAQAmAAAgAQQAfAPAVAcIgWAQQgTgXgZgMQgZgNgfAAQgfABgdAQQgcAPgQAcQgQAbAAAgQAAAzAjAiQAjAiA0AAQA7AAAnguIAWARQgVAagfAPQgeAOgoAAQhIAAgqgwg");
	this.shape_7.setTransform(-25,0,0.375,0.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhFCLIAAkVICLAAIAAAcIhvAAIAABWIBvAAIAAAbIhvAAIAACIg");
	this.shape_8.setTransform(-34,0,0.375,0.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text4a, new cjs.Rectangle(-36.6,-5.4,73.2,11), null);


(lib.text3b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAAEIgFAKIgFgEIAHgIIgKgCIACgGIAJAEIAAgLIAFAAIgBALIALgEIACAGIgLACIAHAIIgFAEIgGgKg");
	this.shape.setTransform(55.6,-4.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AghBkQgRgHgKgOIAQgTQAVAXAWAAQAPAAALgKQALgLAAgNQAAgMgHgIQgHgJgZgNQgdgOgJgOQgKgOAAgSQAAgXAQgQQAQgPAXAAQAdAAAcAcIgRARQgUgUgVAAQgMAAgJAIQgKAJAAALQABAKAHAJQAJAKAWAMQAdAOALAOQAKAPAAASQAAAZgRASQgSARgaAAQgSAAgPgIg");
	this.shape_1.setTransform(50.1,0.1,0.375,0.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiBkQgQgHgKgOIAQgTQAUAXAXAAQAPAAALgKQAMgLAAgNQAAgMgIgIQgIgKgZgMQgbgNgLgPQgKgOAAgSQABgXAQgQQAQgPAXAAQAcAAAdAcIgQARQgXgUgTAAQgMAAgJAIQgKAJAAALQAAAKAIAJQAIAKAXAMQAeAPAKANQAKAPAAASQAAAZgRASQgSARgaAAQgSAAgQgIg");
	this.shape_2.setTransform(44.5,0.1,0.375,0.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhNBLQgcggAAgqQAAgmAYgfQAegnAzAAQA0AAAgAoQAWAdAAAoIi4AAQABAlAWAWQAWAXAgAAQAOAAAQgGQAOgFALgJQALgJAMgUIAWALQgKAVgPAOQgPAOgRAGQgTAHgWAAQgyAAgcghgAg0g+QgQAOgHAcICYAAQgFgWgLgMQgJgMgSgIQgQgIgSAAQgdAAgXAUg");
	this.shape_3.setTransform(37.1,0.1,0.375,0.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgMCPIAAkcIAZAAIAAEcg");
	this.shape_4.setTransform(31,-1.3,0.375,0.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhNBLQgcghAAgpQAAgmAYgfQAfgnAyAAQA0AAAgAoQAWAcAAApIi4AAQABAlAWAWQAWAXAhAAQAOAAAPgGQAPgFALgJQALgJALgUIAWALQgKAVgPAOQgQAOgQAGQgTAHgWAAQgxAAgdghgAgzg+QgQAOgIAcICYAAQgFgUgKgOQgLgMgQgIQgRgIgSAAQgdAAgWAUg");
	this.shape_5.setTransform(24.8,0.1,0.375,0.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AB/BqIAAhwQAAgigFgLQgFgMgLgIQgLgHgQgBQgUAAgPALQgQAMgIATQgHATAAArIAABRIgaAAIAAhpQAAglgEgNQgFgNgLgIQgMgJgQAAQgSAAgQALQgRAMgHASQgHATAAAmIAABXIgbAAIAAjNIAbAAIAAAkQANgUAPgJQATgNAXAAQAPAAAOAHQANAFAJAKQAHAKAGASQAOgZATgMQAVgNAWAAQAUAAASALQARALAHAUQAIASAAAnIAABwg");
	this.shape_6.setTransform(13.3,0,0.375,0.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMCRIAAjNIAZAAIAADNgAgOhrQgHgHAAgJQAAgHAHgIQAHgGAHAAQAJAAAHAGQAGAHAAAIQAAAKgGAGQgHAHgJAAQgIAAgGgHg");
	this.shape_7.setTransform(5,-1.4,0.375,0.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgNCLIAAj6Ig+AAIAAgbICXAAIAAAbIg+AAIAAD6g");
	this.shape_8.setTransform(0.4,-1.2,0.375,0.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAoBnIAAhcIgTAAIg6BcIgcAAIA+hfQgXgDgPgNQgOgPAAgWQAAgbARgPQAQgPAaAAIA+AAIAADNgAgKhMQgIADgGAIQgFAIAAANQAAANAGAIQAHAJAIABQAHACAYAAIARAAIAAhEIgRAAQgZAAgIADg");
	this.shape_9.setTransform(-10.3,0.1,0.375,0.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AA/BnIAAiWIiVCWIgDAAIAAjNIAbAAIAACXICWiXIACAAIAADNg");
	this.shape_10.setTransform(-17.6,0.1,0.375,0.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhqCPIAAkYIAaAAIAAAmQAQgWAVgKQAUgLAYAAQArAAAgAfQAfAhAAArQAAAtgfAfQgfAggsAAQgXAAgVgKQgSgJgTgVIAABugAg6hdQgYAYABAkQAAAYAKARQAKATAUALQATALAWAAQAUAAATgLQATgMALgTQALgSAAgXQAAgWgLgTQgMgUgSgLQgTgLgUAAQgjAAgXAYg");
	this.shape_11.setTransform(-26.8,1.5,0.375,0.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhNBLQgcghAAgpQAAgmAYgfQAegnAzAAQA0AAAgAoQAWAcAAApIi4AAQABAlAWAWQAWAXAgAAQAPAAAPgGQAOgFAMgJQAKgJAMgUIAXALQgMAWgOANQgPAOgSAGQgSAHgWAAQgxAAgdghgAgzg+QgQAOgJAcICZAAQgGgWgJgMQgKgLgRgJQgRgIgSAAQgeAAgVAUg");
	this.shape_12.setTransform(-36.7,0.1,0.375,0.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhkBhQgjgpAAg5QAAg8ArgqQArgqA/AAQAoAAAeAPQAgAQAUAcIgWARQgRgXgbgNQgZgNgfAAQgfAAgdAQQgcAQgQAbQgPAbAAAhQgBAzAkAiQAiAiA0AAQA7AAAnguIAWARQgVAbgfANQgeAPgoAAQhHAAgrgxg");
	this.shape_13.setTransform(-47.3,-1.2,0.375,0.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text3b, new cjs.Rectangle(-52.4,-9.6,114.5,16.5), null);


(lib.text3a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABICLIhIh1IhHB1IghAAIBZiOIhTiHIAhAAIBBBsIBDhsIAgAAIhTCHIBZCOg");
	this.shape.setTransform(76.4,-1.3,0.375,0.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgrCHQgUgMgLgTQgLgUAAgXQAAgSAHgSQAHgUASgYIBTh+IAXAPIhKByQAQgFALgBQAiAAAXAYQAXAYAAAiQAAAYgMAUQgKATgVALQgUAMgXAAQgYAAgTgLgAgpATQgRARAAAYQAAAZARARQARARAYAAQAYAAARgRQARgRAAgZQAAgYgRgRQgSgRgXAAQgXAAgSARg");
	this.shape_1.setTransform(68.1,-1.3,0.375,0.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgwCDQgWgQgMgeQgMgeAAg3QAAg2AMgeQAMgeAWgQQAUgPAbAAQAaAAAXAPQAVAQANAfQANAgAAAzQAAAzgNAhQgMAfgWAQQgWAPgbAAQgbAAgUgPgAgjhqQgQANgIAXQgIAYAAAvQAAAwAIAXQAIAYAQANQARAMASAAQASAAAQgMQAQgNAJgYQAKgdAAgqQAAgogKgcQgJgbgQgMQgRgNgRAAQgSAAgRANg");
	this.shape_2.setTransform(59.9,-1.3,0.375,0.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgrCHQgUgLgLgUQgLgUAAgXQAAgSAHgSQAHgUASgYIBTh+IAXAPIhKByQAPgFAMgBQAiAAAWAYQAYAYAAAiQAAAYgMAUQgLATgUALQgUAMgXAAQgYAAgTgLgAgpATQgRARAAAYQAAAZARARQARARAYAAQAYAAARgRQARgSAAgYQAAgXgRgSQgSgRgXAAQgXAAgSARg");
	this.shape_3.setTransform(52.1,-1.3,0.375,0.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AA5CLIh5iBIAACBIgdAAIAAkVIAdAAIAABpIBuhpIAmAAIiFB9ICPCYg");
	this.shape_4.setTransform(44.1,-1.3,0.375,0.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhWCLIAAkVIA4AAQAtAAASAEQAYAGAOASQAQASAAAcQAAAcgPASQgOASgaAFQgTAFgzAAIgUAAIAACBgAg6gQIAvAAQAcAAANgFQANgGAIgLQAHgLAAgPQAAgOgHgMQgIgLgNgFQgMgEgbgBIgxAAg");
	this.shape_5.setTransform(35.2,-1.3,0.375,0.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhkBhQgjgoAAg6QAAg8ArgqQArgqA/AAQAoAAAeAPQAfAPAVAdIgWARQgRgXgbgNQgZgNgeAAQggAAgdAQQgcAQgQAcQgQAcAAAfQAAAzAjAiQAjAiA0AAQA7AAAnguIAWARQgVAbgfANQgeAPgnAAQhJAAgqgxg");
	this.shape_6.setTransform(24.8,-1.3,0.375,0.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhFCLIAAkVICLAAIAAAbIhvAAIAABYIBvAAIAAAaIhvAAIAACIg");
	this.shape_7.setTransform(15.7,-1.3,0.375,0.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgNC0IAAlnIAaAAIAAFng");
	this.shape_8.setTransform(3,0,0.375,0.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhCCLIAAkVIAbAAIAAD6IBqAAIAAAbg");
	this.shape_9.setTransform(-8.8,-1.3,0.375,0.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ABICLIhIh1IhHB1IghAAIBZiOIhTiHIAhAAIBBBsIBDhsIAgAAIhTCHIBZCOg");
	this.shape_10.setTransform(-17.1,-1.3,0.375,0.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgrCHQgUgMgLgTQgLgUABgXQgBgRAHgTQAIgVARgXIBUh+IAWAPIhKByQAQgFALgBQAhAAAXAYQAYAXAAAjQgBAZgKATQgLATgVALQgUAMgYAAQgWAAgUgLgAgoATQgSARABAYQgBAZASARQAQARAYAAQAZAAAQgRQASgRAAgZQAAgYgSgRQgRgRgYAAQgXAAgRARg");
	this.shape_11.setTransform(-25.3,-1.3,0.375,0.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhdCOIBphyQAhgiAJgQQAJgQAAgUQAAgYgRgQQgRgRgZAAQgZAAgTASQgSASgCAfIgaAAQAAgpAbgaQAbgbAlABQAmAAAYAZQAXAXAAAjQAAAYgLAUQgLAUghAjIhDBLIB/AAIAAAag");
	this.shape_12.setTransform(-33.6,-1.4,0.375,0.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgrCHQgTgMgLgTQgMgVAAgWQAAgQAHgUQAHgSASgaIBUh+IAWAPIhKByQAQgFAMgBQAhAAAXAYQAXAXAAAjQAAAZgLATQgLATgVALQgUAMgXAAQgYAAgTgLgAgoATQgRARAAAYQAAAZARARQARARAXAAQAYAAARgRQASgRAAgZQAAgYgSgRQgSgRgXAAQgWAAgSARg");
	this.shape_13.setTransform(-41.4,-1.3,0.375,0.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AA4CLIh4iBIAACBIgcAAIAAkVIAcAAIAABpIBuhpIAlAAIiFB9ICPCYg");
	this.shape_14.setTransform(-49.4,-1.3,0.375,0.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhWCLIAAkVIA4AAQAtAAASAEQAYAGAPASQAPATAAAbQAAAdgPARQgOASgaAFQgUAFgyAAIgUAAIAACBgAg6gQIAvAAQAdAAAMgFQANgGAIgLQAHgLAAgPQAAgOgHgMQgIgKgMgGQgNgEgbgBIgxAAg");
	this.shape_15.setTransform(-58.3,-1.3,0.375,0.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhkBhQgjgpAAg5QAAg8ArgqQArgqA/AAQAnAAAgAPQAeAPAVAdIgWARQgRgXgbgNQgZgNgfAAQgfAAgdAQQgcAQgQAcQgPAaAAAhQAAAzAiAiQAjAiA0AAQA7AAAnguIAWARQgVAbgfANQgdAPgpAAQhIAAgqgxg");
	this.shape_16.setTransform(-68.7,-1.3,0.375,0.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhECLIAAkVICJAAIAAAbIhuAAIAABYIBuAAIAAAaIhuAAIAACIg");
	this.shape_17.setTransform(-77.7,-1.3,0.375,0.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text3a, new cjs.Rectangle(-80.3,-6.7,160.7,13.5), null);


(lib.text2b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4A4A49").s().p("ABhDXIAAkJIjcEJIgIAAIAAlaIAiAAIAAENIDdkNIAHAAIAAFagAg0iyQgWgOgFgWIAeAAQAIANAMAGQANAFASABQASAAAKgGQALgFALgOIAdAAQgFAVgUAPQgWAOghAAQggAAgVgOg");
	this.shape.setTransform(54,20.2,0.375,0.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A4A49").s().p("ABgCtIAAkJIjbEJIgIAAIAAlZIAiAAIAAENIDdkNIAHAAIAAFZg");
	this.shape_1.setTransform(41.1,21.7,0.375,0.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A4A49").s().p("ABVCtIAAinIipAAIAACnIgiAAIAAlZIAiAAIAACRICpAAIAAiRIAiAAIAAFZg");
	this.shape_2.setTransform(28.6,21.7,0.375,0.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4A4A49").s().p("AhfCtIAAlZIC/AAIAAAhIieAAIAABtICdAAIAAAhIidAAIAACIICdAAIAAAig");
	this.shape_3.setTransform(18.4,21.7,0.375,0.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4A4A49").s().p("ABVCtIAAinIipAAIAACnIgiAAIAAlZIAiAAIAACRICpAAIAAiRIAiAAIAAFZg");
	this.shape_4.setTransform(7.3,21.7,0.375,0.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4A4A49").s().p("Ag9CnQgbgRgXgmIAbgPQAWAjAVAKQAVAKAUAAQAgAAAWgTQAXgTAAglQgBgUgHgOQgHgOgOgKQgOgIgNgDQgMgCgcAAIgGAAIAAgeIAMAAQBIAAAAg+QAAgdgQgRQgRgRgaAAQghAAgeAfIgWgVQAigqA0AAQAqAAAaAYQAaAZAAAnQAAA3gyAYQBCAVABBGQgBAwgdAcQgdAdg0AAQgiAAgcgPg");
	this.shape_5.setTransform(-3.8,21.7,0.375,0.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4A4A49").s().p("ABKCtIAAihIgTAAIh4ChIgpAAIB3ihQgoAAgYgLQgZgKgNgVQgNgWAAgcQABgiASgYQAUgXAdgHQASgEA4AAIBDAAIAAFZgAghiFQgQAHgJAOQgJAPAAARQAAASAJAOQAKAPAPAHQAPAGAiAAIA6gBIAAh2Ig8AAQghABgOAFg");
	this.shape_6.setTransform(-14.4,21.7,0.375,0.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4A4A49").s().p("AhnCtIAAlZIBCAAQA3gBAWAGQAcAHASAXQATAWgBAjQAAAjgRAWQgSAXgfAHQgXAFg+AAIgXAAIAAChgAhGgVIA5ABQAhAAAPgGQAQgHAKgPQAJgNAAgTQAAgSgJgOQgJgOgQgHQgOgFghgBIg7AAg");
	this.shape_7.setTransform(-23.9,21.7,0.375,0.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4A4A49").s().p("AhTCtIAAlZICnAAIAAAhIiFAAIAAE4g");
	this.shape_8.setTransform(-32.8,21.7,0.375,0.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4A4A49").s().p("AB9CtIg0hyIiQAAIg0ByIglAAICelZIAHAAICcFZgAg3AaIBxAAIg5h8g");
	this.shape_9.setTransform(-43.9,21.7,0.375,0.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4A4A49").s().p("Ag9CnQgagQgYgnIAagPQAXAjAVAKQAUAKAVAAQAfAAAXgTQAWgTABglQgBgTgIgPQgIgPgNgJQgMgIgOgDQgMgCgdAAIgFAAIAAgeIALAAQBKAAgBg+QAAgdgRgRQgQgRgaAAQghAAgeAfIgWgVQAigqAzAAQAqAAAaAYQAcAZAAAnQAAA3gzAYQBDAVAABGQgBAwgeAcQgdAdg0AAQghAAgcgPg");
	this.shape_10.setTransform(-55.4,21.7,0.375,0.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4A4A49").s().p("ABXCtIhXiSIhWCSIgnAAIBriyIhkinIAnAAIBPCHIBRiHIAnAAIhkCnIBqCyg");
	this.shape_11.setTransform(81.5,0,0.375,0.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4A4A49").s().p("ABuCtIAAlZIAiAAIAAFZgAiPCtIAAlZIAhAAIAACUIAYAAQBDABAbAGQAcAHASAWQASAYAAAlQAAAlgSAZQgQAXgbAIQgZAHg/AAgAhuCMIAkAAQA3AAASgFQARgHAKgOQAKgQAAgXQAAgagNgQQgNgRgSgDQgTgDg2AAIgdAAg");
	this.shape_12.setTransform(69.2,0,0.375,0.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4A4A49").s().p("ABVCtIAAinIipAAIAACnIgiAAIAAlZIAiAAIAACRICpAAIAAiRIAiAAIAAFZg");
	this.shape_13.setTransform(56.3,0,0.375,0.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4A4A49").s().p("AhrCtIAAlZIAiAAIAACUIAYAAQBBABAcAGQAdAHARAWQASAYAAAlQAAAmgRAYQgRAXgbAIQgaAHg9AAgAhJCMIAjAAQA3AAASgFQARgHAKgOQAKgQAAgXQAAgbgMgPQgNgQgUgEQgTgDg1AAIgcAAg");
	this.shape_14.setTransform(45.4,0,0.375,0.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4A4A49").s().p("ABwCtIhvkLIhwELIgkAAICRlZIAHAAICPFZg");
	this.shape_15.setTransform(33.7,0,0.375,0.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4A4A49").s().p("ABgCtIAAkIIjbEIIgIAAIAAlZIAiAAIAAENIDdkNIAHAAIAAFZg");
	this.shape_16.setTransform(21.1,0,0.375,0.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4A4A49").s().p("Ah4B5QgqgzAAhHQAAhLAzg1QAzg0BNAAQAwAAAlATQAlAUAYAiIgaAVQgVgdgfgQQgfgPgkAAQgnAAgjAUQgiAUgTAiQgSAhAAApQAAA/AqArQAqAqA/ABQBGgBAvg5IAaAVQgYAgglATQgmASguAAQhXAAgzg9g");
	this.shape_17.setTransform(7.5,0,0.375,0.375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4A4A49").s().p("AB9CtIg1hxIiPAAIg0BxIglAAICelZIAHAAICcFZgAg4AaIByAAIg5h9g");
	this.shape_18.setTransform(-10.9,0,0.375,0.375);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4A4A49").s().p("ABECtIiRihIAAChIgjAAIAAlZIAjAAIAACBICEiBIAtAAIifCbICsC+g");
	this.shape_19.setTransform(-21.9,0,0.375,0.375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4A4A49").s().p("AgQCtIAAk4IhLAAIAAghIC3AAIAAAhIhLAAIAAE4g");
	this.shape_20.setTransform(-31.4,0,0.375,0.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4A4A49").s().p("Ah4B5QgrgzAAhHQABhLAzg1QA0g0BMAAQAvAAAmATQAlAUAZAiIgaAVQgWgdgfgQQgegPgmAAQgmAAgjAUQgiAUgTAiQgSAhAAApQAAA/AqArQAqAqA/ABQBGgBAwg5IAaAVQgZAgglATQgmASgvAAQhWAAgzg9g");
	this.shape_21.setTransform(-42.2,0,0.375,0.375);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4A4A49").s().p("ABhCtIAAkIIjcEIIgHAAIAAlZIAhAAIAAENIDdkNIAIAAIAAFZg");
	this.shape_22.setTransform(-55.8,0,0.375,0.375);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#4A4A49").s().p("ABECtIAAijIgYAAQgvAAgZgEQgXgEgSgNQgSgQgHgTQgHgWAAgkIAAhEIAhAAIAABHQAAAsARAQQARASAmAAIBAAAIAAiVIAiAAIAAFZg");
	this.shape_23.setTransform(-67.6,0,0.375,0.375);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4A4A49").s().p("Ah8CBQgzg0AAhMQAAgwAXgrQAYgrAogYQAogYAvAAQBLAAAzA1QAzA0AABMQAABMgzA1QgyA1hKAAQhKAAgzg1gAhGh/QghATgTAjQgTAiAAAoQAAA+AqArQApAqA6AAQAnAAAhgTQAggTATgjQATgiAAgpQAAgogTgiQgTgighgTQghgVgmAAQglAAghAVg");
	this.shape_24.setTransform(-79.3,0,0.375,0.375);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4A4A49").s().p("ABKCtIAAihIgTAAIh4ChIgpAAIB4ihQgrgBgWgKQgZgLgNgUQgMgVAAgeQAAgiASgWQATgYAegHQATgFA4ABIBCAAIAAFZgAghiFQgQAHgJAOQgJAPAAAQQAAATAJAOQAKAPAQAGQAQAHAgAAIA6AAIAAh2Ig8AAQghAAgOAFg");
	this.shape_25.setTransform(104.6,-21.7,0.375,0.375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4A4A49").s().p("AB9CtIg0hyIiQAAIg0ByIglAAICelZIAHAAICcFZgAg3AaIBxAAIg5h9g");
	this.shape_26.setTransform(93.5,-21.7,0.375,0.375);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4A4A49").s().p("ABVCtIAAinIipAAIAACnIgiAAIAAlZIAiAAIAACRICpAAIAAiRIAiAAIAAFZg");
	this.shape_27.setTransform(81,-21.7,0.375,0.375);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#4A4A49").s().p("AhnCtIAAlZIBCAAQA5AAATAEQAdAIASAXQASAXAAAiQAAAigRAXQgSAXgfAHQgXAFg9AAIgYAAIAAChgAhGgVIA5ABQAgAAARgHQAQgHAJgNQAJgPAAgSQAAgSgJgOQgJgOgPgHQgPgFghAAIg7AAg");
	this.shape_28.setTransform(70.2,-21.7,0.375,0.375);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#4A4A49").s().p("AhZCqQgQgHgZgdIAYgVQAaAbAIACQAIAEAJAAQAOAAAIgHQALgIALgdIh6kWIAlAAIBlDrIBcjsIAlAAIh/E3QgQAsguAAQgSAAgQgIg");
	this.shape_29.setTransform(59.1,-21.6,0.375,0.375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#4A4A49").s().p("AgQCtIAAk3IhKAAIAAgiIC1AAIAAAiIhKAAIAAE3g");
	this.shape_30.setTransform(49.7,-21.7,0.375,0.375);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#4A4A49").s().p("AB9CtIg1hyIiPAAIg0ByIglAAICelZIAHAAICcFZgAg4AaIByAAIg5h9g");
	this.shape_31.setTransform(39.6,-21.7,0.375,0.375);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#4A4A49").s().p("AhoCtIAAlZIBDAAQA5AAATAEQAdAIASAXQASAXAAAiQAAAigRAXQgSAWgfAIQgZAFg7AAIgYAAIAAChgAhGgVIA4ABQAgAAASgHQAQgHAJgNQAJgPAAgSQAAgSgJgOQgJgOgPgHQgPgFghAAIg7AAg");
	this.shape_32.setTransform(28.2,-21.7,0.375,0.375);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#4A4A49").s().p("AhfCtIAAlZIC/AAIAAAiIieAAIAABsICcAAIAAAhIicAAIAACJICcAAIAAAhg");
	this.shape_33.setTransform(18.5,-21.7,0.375,0.375);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#4A4A49").s().p("ABVCtIAAk5IipAAIAAE5IgiAAIAAlZIDtAAIAAFZg");
	this.shape_34.setTransform(7.4,-21.7,0.375,0.375);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#4A4A49").s().p("ACcCtIghj3Ih2D3IgIAAIh4j4IghD4IggAAIAwlZIAFAAICHEbICHkbIAGAAIAwFZg");
	this.shape_35.setTransform(-6.6,-21.7,0.375,0.375);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#4A4A49").s().p("AhfCtIAAlZIC/AAIAAAiIieAAIAABsICdAAIAAAhIidAAIAACJICdAAIAAAhg");
	this.shape_36.setTransform(-18.8,-21.7,0.375,0.375);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#4A4A49").s().p("AgQCtIAAk3IhLAAIAAgiIC3AAIAAAiIhLAAIAAE3g");
	this.shape_37.setTransform(-27.7,-21.7,0.375,0.375);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#4A4A49").s().p("Ah8CBQg0g1AAhKQAAgxAYgrQAYgrAngYQApgYAvAAQBLAAAzA1QA0A1gBBLQABBMg0A1QgyA1hLAAQhJAAgzg1gAhGh/QghAUgTAiQgSAhgBAqQAAA+ApAqQAqArA6AAQAmAAAhgUQAjgVARghQASghAAgqQAAgpgSghQgSghgigUQgigUglAAQgmAAggAUg");
	this.shape_38.setTransform(-39,-21.7,0.375,0.375);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#4A4A49").s().p("ABECtIiRihIAAChIgjAAIAAlZIAjAAIAACBICEiBIAtAAIifCbICsC+g");
	this.shape_39.setTransform(-51.2,-21.7,0.375,0.375);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#4A4A49").s().p("Ah8CBQgzg0AAhLQAAgxAXgrQAYgrAogYQAogYAvAAQBMAAAyA1QAzA0AABMQAABMgzA1QgyA1hKAAQhKAAgzg1gAhGh/QghAUgTAiQgTAiAAApQAAA+AqAqQApArA6AAQAmAAAigUQAhgUASgiQATghAAgqQAAgpgTghQgSghgigUQgigUglAAQglAAghAUg");
	this.shape_40.setTransform(-64.5,-21.7,0.375,0.375);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#4A4A49").s().p("Ah4B6Qgqg0AAhHQAAhLAzg1QA0g0BMAAQAvAAAmATQAlATAYAjIgaAVQgVgegfgPQgegPglAAQgoAAghAUQgjAUgSAiQgTAhAAApQAABAAqAqQAqArA+AAQBHAAAvg6IAaAVQgYAhgmASQglASguAAQhXAAgzg8g");
	this.shape_41.setTransform(-79.2,-21.7,0.375,0.375);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#4A4A49").s().p("ABuCtIAAlZIAiAAIAAFZgAiPCtIAAlZIAiAAIAACUIAXAAQBBAAAdAHQAbAFATAYQASAYAAAlQgBAkgRAaQgQAXgbAIQgZAIg/gBgAhtCMIAjAAQA3AAATgFQAPgGALgPQAKgQAAgXQAAgagNgQQgMgQgTgEQgWgEgzAAIgcAAg");
	this.shape_42.setTransform(-93.2,-21.7,0.375,0.375);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#4A4A49").s().p("AhjCtIAAlZIBCAAQAnAAAVAJQAVAKANAUQAMAVAAAYQAAAYgLATQgKASgWAMQAbAKAOALQAOANAHAQQAIASAAAVQAAApgdAdQgeAdgwAAgAhCCMIApAAQAkAAARgIQARgHAKgRQALgPAAgTQAAgWgPgSQgOgQgagIQgRgDgqAAIgSAAgAhCgbIATAAQAiAAAQgIQAQgFAKgPQAKgPAAgSQAAgYgRgNQgPgNgjAAIgmAAg");
	this.shape_43.setTransform(-104.9,-21.7,0.375,0.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text2b, new cjs.Rectangle(-108.6,-28.5,217.2,57.2), null);


(lib.text2a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#25387A").s().p("Ah2APIAAgdIDtAAIAAAdg");
	this.shape.setTransform(53.4,-0.7,0.45,0.45,0,0,0,0.1,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#25387A").s().p("Ag9CnQgagQgYgmIAagQQAZAkATAJQAUAKAVAAQAfAAAXgTQAWgTAAglQAAgUgIgOQgIgPgNgJQgNgIgNgDQgOgCgaAAIgGAAIAAgeIALAAQBJAAAAg+QABgdgSgRQgSgRgYAAQgiAAgcAgIgYgWQAkgqAzAAQAoAAAbAYQAbAZAAAnQAAA3gyAZQBCAUAABGQAAAwgdAcQgeAdgzAAQgjAAgbgPg");
	this.shape_1.setTransform(36.2,-2.5,0.45,0.45,0,0,0,0,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#25387A").s().p("ABhCtIAAkJIjcEJIgHAAIAAlZIAhAAIAAENIDdkNIAIAAIAAFZg");
	this.shape_2.setTransform(22.4,-2.4,0.45,0.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#25387A").s().p("ABwCtIhvkLIhwELIgkAAICRlZIAHAAICPFZg");
	this.shape_3.setTransform(7.3,-2.4,0.45,0.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#25387A").s().p("Ah8CBQg0g0AAhLQAAgxAYgrQAWgqApgZQApgYAvAAQBLAAAzA0QAzA1ABBMQgBBLgzA2QgyA1hLAAQhJAAgzg1gAhGh/QghASgTAkQgTAiAAAoQAAA+ApArQAqAqA6AAQAnAAAggTQAhgTATgjQATghgBgqQABgpgTghQgTgighgTQgigUglAAQgmAAggAUg");
	this.shape_4.setTransform(-9.2,-2.5,0.45,0.45,0,0,0,0,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#25387A").s().p("AhnCtIAAlZIBCAAQA5AAATAFQAcAHAUAXQARAWABAjQAAAigSAXQgSAXgfAGQgXAGg9AAIgYAAIAAChgAhGgVIA5ABQAiAAAPgHQAQgGAJgPQAJgOAAgSQAAgRgJgPQgJgOgPgGQgPgGghAAIg7AAg");
	this.shape_5.setTransform(-24.2,-2.4,0.45,0.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#25387A").s().p("ABhCtIAAkJIjcEJIgIAAIAAlZIAiAAIAAENIDdkNIAHAAIAAFZg");
	this.shape_6.setTransform(-38.5,-2.4,0.45,0.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#25387A").s().p("ABVCtIAAk4IipAAIAAE4IghAAIAAlZIDrAAIAAFZg");
	this.shape_7.setTransform(-53.4,-2.4,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text2a, new cjs.Rectangle(-58.7,-10.6,117.5,16.4), null);


(lib.text1b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4A4A49").s().p("AB9CtIg1hyIiPAAIg0ByIglAAICelZIAHAAICcFZgAg4AaIByAAIg5h8g");
	this.shape.setTransform(27.5,21,0.375,0.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A4A49").s().p("ACGDIIAAg1IkMAAIAAA1IggAAIAAhVIAbAAICDk5IAKAAICLE5IAaAAIAABVgAhmBzIDMAAIhojyg");
	this.shape_1.setTransform(14.5,21.9,0.375,0.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A4A49").s().p("Ah8CCQgzg1AAhLQAAgxAXgrQAXgqApgZQAogYAvAAQBLAAAzA0QAzA2ABBLQgBBMgzA1QgzA1hJAAQhKAAgzg0gAhGh/QghAUgTAhQgSAiAAAqQAAA9AoArQAqArA6AAQAmAAAigUQAggTATgiQASgjAAgpQAAgpgSghQgTgighgTQgjgUgkgBQgkABgiAUg");
	this.shape_2.setTransform(0.4,21,0.375,0.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4A4A49").s().p("ABXCuIhXiTIhWCTIgnAAIBriyIhkioIAnAAIBQCGIBQiGIAmAAIhjCnIBqCzg");
	this.shape_3.setTransform(-12.5,21,0.375,0.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4A4A49").s().p("AhaCqQgPgHgZgdIAYgVQAZAaAJAEQAKADAHAAQANAAAJgHQAKgIAMgdIh6kWIAmAAIBkDrIBcjsIAlAAIh/E3QgRAsgtAAQgSAAgRgIg");
	this.shape_4.setTransform(-23.5,21.1,0.375,0.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4A4A49").s().p("Ah8CCQgzg1AAhLQAAgxAXgrQAYgrAogYQApgYAuAAQBLAAAzA1QAzA0AABMQAABMgzA1QgyA1hKAAQhKAAgzg0gAhGh/QghAUgTAiQgTAiAAApQAAA9AqArQAqArA5AAQAmAAAigUQAhgUASgiQATghAAgqQAAgogTgiQgSghgigUQgigUglAAQglAAghAUg");
	this.shape_5.setTransform(77.5,-0.8,0.375,0.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4A4A49").s().p("AhTCtIAAlZICnAAIAAAhIiGAAIAAE4g");
	this.shape_6.setTransform(66.5,-0.8,0.375,0.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4A4A49").s().p("Ah8CCQgzg1AAhLQAAgzAXgpQAYgrAogYQAogYAvAAQBKAAA0A1QAzA0AABMQAABMgzA1QgyA1hKAAQhJAAg0g0gAhGh/QgiAUgSAiQgTAhAAAqQAAA9AqArQAqArA5AAQAmAAAhgUQAigUASgiQATghAAgqQAAgogTgiQgSghgigUQgigUglAAQglAAghAUg");
	this.shape_7.setTransform(54.3,-0.8,0.375,0.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4A4A49").s().p("ABVCtIAAinIipAAIAACnIgiAAIAAlZIAiAAIAACRICpAAIAAiRIAiAAIAAFZg");
	this.shape_8.setTransform(40.7,-0.8,0.375,0.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4A4A49").s().p("AhjCtIAAlZIBCAAQAoAAAUAKQAVAJANAUQAMAVAAAYQAAAYgLATQgMATgUALQAbAKANALQAOAMAIASQAIATAAATQAAApgdAdQgeAdgwAAgAhDCLIAqAAQAkABARgIQARgHAKgQQAKgQAAgTQAAgYgOgQQgPgQgZgIQgSgDgpAAIgTAAgAhDgbIAUAAQAjgBAPgGQAPgHALgOQAJgPAAgSQAAgYgQgNQgPgOgjAAIgnAAg");
	this.shape_9.setTransform(30,-0.8,0.375,0.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4A4A49").s().p("AhfCtIAAlZIC/AAIAAAhIidAAIAABtICcAAIAAAhIicAAIAACIICcAAIAAAig");
	this.shape_10.setTransform(20.5,-0.8,0.375,0.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4A4A49").s().p("ABVCtIAAinIipAAIAACnIgiAAIAAlZIAiAAIAACRICpAAIAAiRIAiAAIAAFZg");
	this.shape_11.setTransform(9.4,-0.8,0.375,0.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4A4A49").s().p("ACHDIIAAg1IkNAAIAAA1IggAAIAAhVIAaAAICEk6IALAAICLE6IAZAAIAABVgAhmBzIDMAAIhojyg");
	this.shape_12.setTransform(-3.1,0.2,0.375,0.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4A4A49").s().p("AhfCuIAAlbIC/AAIAAAiIidAAIAABtICcAAIAAAhIicAAIAACIICcAAIAAAjg");
	this.shape_13.setTransform(-13.9,-0.8,0.375,0.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4A4A49").s().p("ACkCtIiJiqIgKAKIAACgIghAAIAAigIgLgKIiICqIgtAAICgi/IiSibIAsAAICGCTIAAiTIAhAAIAACTICGiTIAtAAIiTCbICfC/g");
	this.shape_14.setTransform(-27.2,-0.8,0.375,0.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4A4A49").s().p("AhfCuIAAlaIC/AAIAAAhIieAAIAABtICdAAIAAAhIidAAIAACIICdAAIAAAjg");
	this.shape_15.setTransform(-39.6,-0.8,0.375,0.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4A4A49").s().p("ABKCtIAAihIgUAAIh2ChIgqAAIB3ihQgqgBgXgKQgYgKgNgWQgNgVAAgcQABgiASgYQATgXAegHQATgFA3ABIBDAAIAAFZgAgiiFQgPAHgIAOQgKAOAAARQAAATAKAOQAIAPARAGQAQAHAgAAIA6gBIAAh1Ig7AAQgigBgPAGg");
	this.shape_16.setTransform(-55.1,-0.8,0.375,0.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4A4A49").s().p("ABwCtIhvkLIhwELIgkAAICRlZIAHAAICPFZg");
	this.shape_17.setTransform(-65.9,-0.8,0.375,0.375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4A4A49").s().p("ACHDHIAAg0IkNAAIAAA0IghAAIAAhUIAcAAICDk5IALAAICKE5IAaAAIAABUgAhlBzIDLAAIhojyg");
	this.shape_18.setTransform(-78.6,0.2,0.375,0.375);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4A4A49").s().p("ACcCtIghj3Ih2D3IgIAAIh3j4IghD4IghAAIAwlZIAFAAICHEbICHkbIAGAAIAwFZg");
	this.shape_19.setTransform(79.8,-22.5,0.375,0.375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4A4A49").s().p("Ah8CBQgzg1gBhKQABgxAXgrQAXgqApgZQAogYAvAAQBLAAAzA0QAzA2AABLQAABLgzA2QgzA1hJAAQhKAAgzg1gAhGh/QghAUgTAiQgTAhAAApQAAA/AqAqQApArA6AAQAnAAAhgUQAhgUASgiQASghAAgqQAAgpgSghQgRghgjgUQghgUgmAAQgmAAggAUg");
	this.shape_20.setTransform(64.1,-22.5,0.375,0.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4A4A49").s().p("AhoCtIAAlZIBDAAQA5AAATAEQAdAIATAXQARAXAAAiQAAAigRAXQgRAWggAIQgXAFg9AAIgYAAIAAChgAhGgVIA4ABQAjAAAPgHQAQgGAJgOQAJgPAAgSQAAgSgJgOQgJgOgPgHQgPgFghAAIg7AAg");
	this.shape_21.setTransform(51.7,-22.5,0.375,0.375);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4A4A49").s().p("AB9CtIg1hyIiPAAIg0ByIglAAICelZIAHAAICcFZgAg3AaIBxAAIg5h9g");
	this.shape_22.setTransform(39.8,-22.5,0.375,0.375);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#4A4A49").s().p("ABVCtIAAk5IipAAIAAE5IgiAAIAAlZIDsAAIAAFZg");
	this.shape_23.setTransform(27.3,-22.5,0.375,0.375);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4A4A49").s().p("AB9CtIg0hyIiQAAIg0ByIglAAICelZIAHAAICcFZgAg3AaIBxAAIg5h9g");
	this.shape_24.setTransform(10.1,-22.5,0.375,0.375);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4A4A49").s().p("ABECuIiSijIAACjIgiAAIAAlaIAiAAIAACCICFiCIAtAAIigCbICtC/g");
	this.shape_25.setTransform(-1,-22.5,0.375,0.375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4A4A49").s().p("AgQCuIAAk4IhLAAIAAgjIC3AAIAAAjIhLAAIAAE4g");
	this.shape_26.setTransform(-10.4,-22.5,0.375,0.375);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4A4A49").s().p("Ah8CBQgzg0AAhLQAAgxAXgrQAXgrApgYQAogYAvAAQBLAAAzA0QAzA2AABLQAABMgzA1QgyA1hKAAQhKAAgzg1gAhGh/QgiAUgSAiQgTAiAAAoQAAA/AqAqQApArA6AAQAnAAAggUQAigUASgiQATghAAgqQAAgpgTghQgSghgigUQgigUglAAQglAAghAUg");
	this.shape_27.setTransform(-21.8,-22.5,0.375,0.375);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#4A4A49").s().p("AhjCtIAAlaICnAAIAAAiIiGAAIAABwIAQAAQA+AAAcALQAcAMAQAXQAQAZAAAeQAAAngcAeQgdAegyAAgAhCCLIApAAQAkAAARgHQARgIAKgPQAKgPAAgTQAAgYgOgRQgPgRgVgFQgTgFgrAAIgTAAg");
	this.shape_28.setTransform(-34.1,-22.5,0.375,0.375);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#4A4A49").s().p("AB9CuIg0hzIiQAAIg0BzIglAAICelaIAHAAICcFagAg3AaIBxAAIg5h9g");
	this.shape_29.setTransform(-45.8,-22.5,0.375,0.375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#4A4A49").s().p("AhoCuIAAlbIBDAAQA5AAATAGQAdAHASAXQASAXABAiQAAAjgTAWQgRAWgfAIQgZAFg8AAIgXAAIAACigAhGgVIA4AAQAjAAAOgGQAQgGAKgPQAJgPAAgRQAAgSgJgOQgKgOgOgGQgPgHghAAIg7AAg");
	this.shape_30.setTransform(-57.2,-22.5,0.375,0.375);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#4A4A49").s().p("AhjCuIAAlbICmAAIAAAiIiFAAIAABvIAPAAQA/AAAbAMQAdAMAQAXQAQAZAAAeQAAAngcAfQgdAegyAAgAhCCMIApAAQAkAAARgIQARgHAKgQQAKgPAAgUQAAgXgOgSQgPgQgVgFQgTgGgsAAIgSAAg");
	this.shape_31.setTransform(-67.3,-22.5,0.375,0.375);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#4A4A49").s().p("Ah8CBQgzg0AAhLQAAgxAXgrQAXgrApgYQAogYAvAAQBLAAAzA0QAzA2AABLQAABMgzA1QgyA1hKAAQhKAAgzg1gAhGh/QghAUgTAiQgTAiAAAoQAAA/AqAqQApArA6AAQAmAAAigUQAhgUASgiQATghAAgqQAAgpgTghQgSghgigUQghgUgmAAQglAAghAUg");
	this.shape_32.setTransform(-80.2,-22.5,0.375,0.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text1b, new cjs.Rectangle(-86.8,-29.3,173.7,58.8), null);


(lib.text1a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#25387A").s().p("Ah2APIAAgdIDtAAIAAAdg");
	this.shape.setTransform(79.8,2.5,0.45,0.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#25387A").s().p("AB9CuIg1hzIiPAAIg0BzIglAAICelbIAHAAICcFbgAg3AaIBxAAIg5h8g");
	this.shape_1.setTransform(61,0.7,0.45,0.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#25387A").s().p("ABECuIiRiiIAACiIgjAAIAAlbIAjAAIAACDICEiDIAtAAIifCdICsC+g");
	this.shape_2.setTransform(47.8,0.7,0.45,0.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#25387A").s().p("AgQCuIAAk5IhLAAIAAgiIC3AAIAAAiIhLAAIAAE5g");
	this.shape_3.setTransform(36.4,0.7,0.45,0.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#25387A").s().p("Ah4B6Qgrg1AAhGQAAhMA0g0QA0g0BMAAQAuAAAnATQAmATAXAjIgaAVQgWgegegPQgggPgkAAQglAAgjAUQgjAUgTAhQgSAiAAApQAABAAqAqQAqAqA+AAQBIAAAug5IAaAVQgYAhgmASQglASgvAAQhVAAg0g8g");
	this.shape_4.setTransform(23.4,0.7,0.45,0.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#25387A").s().p("ABhCuIAAkKIjcEKIgIAAIAAlbIAiAAIAAEOIDdkOIAIAAIAAFbg");
	this.shape_5.setTransform(7.2,0.7,0.45,0.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#25387A").s().p("ABECtIAAijIgYAAQgzAAgVgEQgXgEgSgOQgSgNgHgWQgHgUAAglIAAhFIAhAAIAABIQAAAsARAQQARATAmAAIBAAAIAAiXIAiAAIAAFag");
	this.shape_6.setTransform(-7,0.7,0.45,0.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#25387A").s().p("Ah8CBQgzg0AAhMQAAgwAXgrQAXgqApgZQAogYAvAAQBLAAAzA0QAzA1AABMQAABMgzA1QgzA1hJAAQhKAAgzg1gAhGh/QghATgTAjQgTAiAAAoQAAA+AqArQApAqA6AAQAmAAAigTQAggTATgjQATghAAgqQAAgpgTghQgTgighgTQgigVglAAQgkAAgiAVg");
	this.shape_7.setTransform(-21,0.7,0.45,0.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#25387A").s().p("AB9CtIg0hxIiQAAIg0BxIglAAICelaIAHAAICcFagAg3AaIBxAAIg5h9g");
	this.shape_8.setTransform(-37.9,0.7,0.45,0.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#25387A").s().p("AhjCuIAAlbIBCAAQAmAAAWAKQAWALAMAUQAMAUAAAZQAAAXgLASQgKATgWAMQAaAJAPAMQAOAOAHAQQAIARAAAVQAAAqgdAdQgdAdgxAAgAhCCLIApAAQAkAAARgGQAQgIALgQQALgQAAgSQAAgXgPgSQgPgRgZgGQgQgFgqAAIgTAAgAhCgbIATAAQAiAAAQgHQAQgGAKgPQAKgQAAgQQAAgYgQgNQgQgOgjgBIgmAAg");
	this.shape_9.setTransform(-51.3,0.7,0.45,0.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#25387A").s().p("ABECtIiSihIAAChIgiAAIAAlZIAiAAIAACCICFiCIAtAAIigCcICtC9g");
	this.shape_10.setTransform(-63.1,0.7,0.45,0.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#25387A").s().p("AB9CuIg0hyIiQAAIg0ByIglAAICelaIAHAAICcFagAg4AaIByAAIg5h9g");
	this.shape_11.setTransform(-77.8,0.7,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text1a, new cjs.Rectangle(-85,-7.4,170.2,16.4), null);


(lib.text0b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4A4A49").s().p("ABMCIIAAjQIitDQIgFAAIAAkPIAaAAIAADTICujTIAFAAIAAEPg");
	this.shape.setTransform(60.4,0.4,0.375,0.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A4A49").s().p("ABDCIIAAiDIiFAAIAACDIgaAAIAAkPIAaAAIAAByICFAAIAAhyIAaAAIAAEPg");
	this.shape_1.setTransform(50.6,0.4,0.375,0.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A4A49").s().p("ABECIIhEhzIhDBzIgfAAIBUiLIhOiEIAeAAIA+BqIBAhqIAeAAIhPCEIBUCLg");
	this.shape_2.setTransform(41.7,0.4,0.375,0.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4A4A49").s().p("AhGCGQgNgGgTgXIATgQQATAUAHADQAIADAGAAQAJAAAJgGQAIgGAJgXIhhjaIAeAAIBPC4IBIi5IAdAAIhkD0QgNAjgjAAQgOAAgNgGg");
	this.shape_3.setTransform(33.1,0.6,0.375,0.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4A4A49").s().p("AA2CIIhzh/IAAB/IgbAAIAAkPIAbAAIAABmIBohmIAkAAIh+B6ICICVg");
	this.shape_4.setTransform(25.1,0.4,0.375,0.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4A4A49").s().p("ABMCpIAAjQIisDQIgGAAIAAkPIAaAAIAADTICujTIAFAAIAAEPgAgpiMQgRgLgEgRIAXAAQAGAKALAEQAJAFAOABQAOAAAJgFQAJgEAIgLIAXAAQgFARgQALQgQALgaAAQgZAAgRgLg");
	this.shape_5.setTransform(11.7,-0.8,0.375,0.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4A4A49").s().p("AhKCIIAAkPICWAAIAAAaIh8AAIAABWIB6AAIAAAaIh6AAIAABrIB6AAIAAAag");
	this.shape_6.setTransform(3.2,0.4,0.375,0.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4A4A49").s().p("AiYCIIAAkPIAaAAIAAD2IBxAAIAAj2IAZAAIAAD2IBzAAIAAj2IAaAAIAAEPg");
	this.shape_7.setTransform(-7.7,0.4,0.375,0.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4A4A49").s().p("ABiCIIgphZIhwAAIgpBZIgeAAIB9kPIAFAAIB7EPgAgrAUIBZAAIgthhg");
	this.shape_8.setTransform(-19.7,0.4,0.375,0.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4A4A49").s().p("AhOCIIAAkPIA0AAQAfAAAQAHQARAIAKAQQAKAQAAATQAAASgJAQQgJAPgQAJQAVAHALAJQALAKAGANQAGAPAAAPQAAAigXAWQgXAWgmAAgAg0BuIAhAAQAcAAANgGQANgFAJgNQAIgNAAgOQAAgSgMgOQgLgOgUgEQgMgEgiAAIgPAAgAg0gVIAPAAQAcAAAMgGQAMgFAIgLQAHgLAAgPQAAgSgMgLQgNgLgaAAIgfAAg");
	this.shape_9.setTransform(-28.5,0.4,0.375,0.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4A4A49").s().p("AA6CIIAAh+IgPAAIheB+IggAAIBdh+QgfAAgUgJQgSgIgKgQQgLgRAAgXQAAgbAPgSQAOgSAYgGQAPgDAsAAIA0AAIAAEPgAgahoQgLAEgIAMQgHAMAAANQAAAOAHAMQAGALANAFQAOAGAYAAIAugBIAAhdIgvAAQgZAAgMAFg");
	this.shape_10.setTransform(-40.9,0.4,0.375,0.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4A4A49").s().p("ABYCIIhYjRIhXDRIgdAAIBzkPIAEAAIBxEPg");
	this.shape_11.setTransform(-49.3,0.4,0.375,0.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4A4A49").s().p("ABpCdIAAgpIjSAAIAAApIgaAAIAAhCIAVAAIBoj3IAIAAIBtD3IAUAAIAABCgAhPBbICfAAIhSi/g");
	this.shape_12.setTransform(-59.3,1.2,0.375,0.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text0b, new cjs.Rectangle(-64.2,-7.1,128.5,14.2), null);


(lib.text0a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4A4A49").s().p("ABgCuIAAkJIjbEJIgHAAIAAlaIAhAAIAAENIDdkNIAHAAIAAFag");
	this.shape.setTransform(35.1,23.1,0.375,0.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A4A49").s().p("ABECuIiSiiIAACiIgiAAIAAlaIAiAAIAACCICFiCIAtAAIigCbICtC/g");
	this.shape_1.setTransform(24,23.1,0.375,0.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A4A49").s().p("AgQCuIAAk5IhLAAIAAgiIC3AAIAAAiIhLAAIAAE5g");
	this.shape_2.setTransform(14.6,23.1,0.375,0.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4A4A49").s().p("Ah4B5QgrgyAAhIQAAhNA0gzQAzg0BNAAQAuAAAmATQAmATAZAjIgbAVQgWgegegPQgegPglAAQgoAAghAUQgjAUgTAhQgTAiAAApQAAA/ArArQApAqBAAAQBGAAAvg5IAbAVQgZAhgmASQgnASgsAAQhXAAgzg9g");
	this.shape_3.setTransform(3.7,23.2,0.375,0.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4A4A49").s().p("ABgCuIAAkKIjbEKIgIAAIAAlbIAiAAIAAEOIDdkOIAHAAIAAFbg");
	this.shape_4.setTransform(-9.8,23.1,0.375,0.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4A4A49").s().p("ABECuIAAikIgYAAQgwAAgYgEQgYgFgRgMQgSgPgHgUQgHgUAAgmIAAhEIAhAAIAABGQAAAsARASQARARAmAAIBAAAIAAiVIAiAAIAAFag");
	this.shape_5.setTransform(-21.6,23.1,0.375,0.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4A4A49").s().p("Ah8CBQgzg1AAhLQAAgxAXgqQAYgsAogXQAogYAvAAQBLAAAzA0QAzA1AABMQAABMgzA1QgzA1hJAAQhJAAg0g1gAhGiAQgiAVgSAhQgTAkAAAnQAAA+AqArQApAqA6AAQAmAAAhgTQAhgTATgjQATgiAAgpQAAgpgTghQgTgighgUQgjgUgkAAQgkAAgiAUg");
	this.shape_6.setTransform(-33.3,23.2,0.375,0.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4A4A49").s().p("ABhDXIAAkJIjcEJIgIAAIAAlaIAiAAIAAEOIDdkOIAIAAIAAFagAg0iyQgWgOgGgWIAeAAQAJANAMAGQANAGASAAQAQAAAMgGQALgFALgOIAdAAQgGAVgUAPQgUANgiAAQghAAgUgNg");
	this.shape_7.setTransform(102.5,-0.1,0.375,0.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4A4A49").s().p("Ah8CBQg0g1AAhLQAAgwAYgrQAXgqAogZQApgYAvAAQBLAAAzA0QA0A1AABMQAABMg0A1QgyA1hLAAQhJAAgzg1gAhGh/QghAUgTAiQgTAhAAApQAAA/AqAqQApAqA6ABQAmAAAigUQAhgUASgiQASghABgqQgBgpgSghQgRghgjgUQghgUgmgBQgmABggAUg");
	this.shape_8.setTransform(88.5,1.4,0.375,0.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4A4A49").s().p("ACcCtIghj3Ih3D3IgHAAIh4j5IggD5IghAAIAwlaIAGAAICGEcICHkcIAGAAIAwFag");
	this.shape_9.setTransform(72.9,1.4,0.375,0.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4A4A49").s().p("AhfCuIAAlbIC/AAIAAAiIidAAIAABtICcAAIAAAhIicAAIAACIICcAAIAAAjg");
	this.shape_10.setTransform(60.6,1.4,0.375,0.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4A4A49").s().p("AgQCtIAAk4IhLAAIAAghIC3AAIAAAhIhLAAIAAE4g");
	this.shape_11.setTransform(51.8,1.4,0.375,0.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4A4A49").s().p("Ah4B6QgrgzAAhIQAAhNA0gzQAzg0BNAAQAvAAAmATQAlATAYAjIgaAVQgVgdgfgQQgfgPgkAAQgoAAghAUQgjATgTAiQgSAiAAApQAABAAqAqQArArA9AAQBGgBAwg5IAaAVQgYAhgmASQglASguAAQhXAAgzg8g");
	this.shape_12.setTransform(40.9,1.4,0.375,0.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4A4A49").s().p("ABhCtIAAkJIjcEJIgHAAIAAlZIAhAAIAAENIDdkNIAHAAIAAFZg");
	this.shape_13.setTransform(27.4,1.4,0.375,0.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4A4A49").s().p("Ah4B6Qgrg0AAhHQAAhLA0g1QAzg0BNAAQAvAAAmATQAlATAZAjIgbAVQgVgdgfgQQgfgPglAAQgnAAgiAUQgiAUgTAhQgSAiAAApQAAA/AqArQAqAqA/AAQBGABAvg6IAbAVQgaAhglASQglASgvAAQhWAAgzg8g");
	this.shape_14.setTransform(13.8,1.4,0.375,0.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4A4A49").s().p("ABhDXIAAkJIjcEJIgHAAIAAlaIAhAAIAAENIDdkNIAHAAIAAFagAg1izQgVgNgGgWIAeAAQAJANAMAGQANAGARAAQASgBALgFQALgFALgOIAdAAQgGAVgUAOQgUAPgiAAQghAAgVgPg");
	this.shape_15.setTransform(-4.6,-0.1,0.375,0.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4A4A49").s().p("Ah8CBQgzg0AAhLQAAgyAXgqQAXgrApgYQAogYAvAAQBLAAAzA1QAzA0AABMQAABMgzA1QgyA1hLAAQhJAAgzg1gAhGh/QgiAUgSAhQgTAiAAAqQAAA+AqAqQAqArA5AAQAmgBAhgTQAigUASgiQATgiAAgpQAAgngTgjQgSghgigUQgigVglABQgmgBggAVg");
	this.shape_16.setTransform(-18.6,1.4,0.375,0.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4A4A49").s().p("ABVCtIAAinIipAAIAACnIgiAAIAAlaIAiAAIAACSICpAAIAAiSIAiAAIAAFag");
	this.shape_17.setTransform(-32.2,1.4,0.375,0.375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4A4A49").s().p("ABgDXIAAkJIjbEJIgHAAIAAlaIAhAAIAAENIDdkNIAHAAIAAFagAg1izQgVgNgGgWIAfAAQAHAMANAHQANAFARAAQARABANgGQAKgFAKgOIAdAAQgEAVgVAOQgUAPgiAAQghAAgVgPg");
	this.shape_18.setTransform(-44.6,-0.1,0.375,0.375);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4A4A49").s().p("Ah8CBQgzg0AAhLQAAgxAXgrQAYgrAogYQAogYAvAAQBLAAAzA1QAzA0AABMQAABMgzA1QgyA1hKAAQhKAAgzg1gAhGh/QghATgTAiQgTAkAAAoQAAA9AqArQAqArA5AAQAmgBAigTQAggTATgjQATgiAAgpQAAgogTgiQgSghgigUQgigVglAAQglAAghAVg");
	this.shape_19.setTransform(-58.7,1.4,0.375,0.375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4A4A49").s().p("AhjCuIAAlaIBCAAQAmgBAWAKQAWALAMATQAMAUAAAaQAAAXgLATQgKATgVALQAaAKAOALQANAMAJASQAHASAAAUQAAAqgdAcQgdAegxAAgAhCCMIApAAQAkAAARgIQASgIAJgPQALgPAAgTQAAgYgPgRQgOgQgagHQgRgEgpAAIgTAAgAhCgcIATAAQAjAAAPgGQAQgGAKgPQAKgPAAgRQAAgZgQgNQgRgNgiAAIgmAAg");
	this.shape_20.setTransform(-71,1.4,0.375,0.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4A4A49").s().p("ACGDHIAAg0IkMAAIAAA0IghAAIAAhUIAbAAICEk5IAKAAICLE5IAaAAIAABUgAhmBzIDLAAIhnjyg");
	this.shape_21.setTransform(-82.8,2.4,0.375,0.375);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4A4A49").s().p("Ah4B5QgrgzAAhHQAAhLA0g1QAzg0BNAAQAvAAAmATQAlATAZAjIgbAVQgVgdgfgQQgfgPglAAQgmAAgiAUQgjAUgSAhQgTAiAAApQAABAAqAqQAqArA/AAQBGgBAvg5IAbAVQgZAhgmASQglASgvAAQhWAAgzg9g");
	this.shape_22.setTransform(-101.3,1.4,0.375,0.375);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#4A4A49").s().p("AgPCuIAAhkIgkAAQgnAAgZgHQgZgJgSgZQgSgYAAgiQAAgqAegeQAdgfBMAAIAaAAIAAgsIAgAAIAAAsIAaAAQBKAAAfAeQAdAeAAArQAAAmgaAfQgaAehIAAIgkAAIAABkgAARApIA1AAQAjgBATgSQASgTAAgcQAAgggWgTQgWgTgsAAIglAAgAh2hNQgXATAAAhQAAAbASATQATATAlABIA0AAIAAiIIgmAAQgpAAgYASg");
	this.shape_23.setTransform(64.9,-20.3,0.375,0.375);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4A4A49").s().p("AB9CtIg0hyIiQAAIg0ByIglAAICelZIAHAAICcFZgAg3AaIBxAAIg5h9g");
	this.shape_24.setTransform(50.8,-20.3,0.375,0.375);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4A4A49").s().p("ABECuIiSijIAACjIgiAAIAAlaIAiAAIAACBICFiBIAtAAIigCbICtC/g");
	this.shape_25.setTransform(39.8,-20.3,0.375,0.375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4A4A49").s().p("AjCCuIAAlaIAiAAIAAE5ICPAAIAAk5IAhAAIAAE5ICRAAIAAk5IAiAAIAAFag");
	this.shape_26.setTransform(25.2,-20.3,0.375,0.375);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4A4A49").s().p("ABhDXIAAkJIjcEJIgIAAIAAlaIAiAAIAAEOIDdkOIAIAAIAAFagAg0izQgWgOgGgVIAfAAQAIAMANAGQAMAGARAAQARAAANgFQALgFAJgOIAeAAQgGAVgUAOQgUAPgiAAQghAAgUgPg");
	this.shape_27.setTransform(5.1,-21.9,0.375,0.375);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#4A4A49").s().p("Ah8CBQgzg1gBhKQABgxAXgrQAXgqAogZQAogYAwAAQBLAAAzA0QAzA2AABLQAABMgzA1QgzA1hKAAQhJAAgzg1gAhGh/QghAUgTAiQgTAhAAApQAAA/AqAqQApArA6AAQAnAAAggUQAigUASgiQASghAAgqQAAgpgSghQgSghgigUQgigUglAAQgmAAggAUg");
	this.shape_28.setTransform(-8.9,-20.3,0.375,0.375);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#4A4A49").s().p("AhjCtIAAlZIBCAAQAnAAAVAJQAVAJANAVQAMAVAAAYQAAAXgLATQgMAUgUALQAaAJAOALQAPAOAHAQQAIAUAAATQAAApgdAeQgfAcgvAAgAhDCMIAqAAQAkAAARgIQAQgHALgQQAKgQAAgTQAAgYgOgQQgOgQgagIQgPgDgsAAIgTAAgAhDgcIAUAAQAiAAAQgGQAQgHAKgOQAJgPAAgSQAAgYgQgNQgPgNgjgBIgnAAg");
	this.shape_29.setTransform(-21.2,-20.3,0.375,0.375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#4A4A49").s().p("Ah8CBQgzg0AAhLQAAgyAXgqQAXgqAogZQAogYAwAAQBLAAAzA0QAzA1AABMQAABMgzA1QgzA1hKAAQhJAAgzg1gAhGh/QgiAUgSAiQgTAhAAApQAAA/ApAqQArArA5AAQAnAAAggUQAigUASgiQATgiAAgpQAAgogTgiQgSghgigUQgigUglAAQgmAAggAUg");
	this.shape_30.setTransform(-34.1,-20.3,0.375,0.375);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#4A4A49").s().p("ABXCuIhXiTIhWCTIgnAAIBrizIhkioIAnAAIBPCIIBRiIIAmAAIhjCoIBqCzg");
	this.shape_31.setTransform(-47,-20.3,0.375,0.375);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#4A4A49").s().p("AhZCqQgQgHgZgdIAYgVQAZAaAJADQAHAEAKAAQANAAAKgHQAKgJALgcIh6kWIAlAAIBlDrIBcjsIAlAAIh/E3QgQAsguAAQgSAAgQgIg");
	this.shape_32.setTransform(-58,-20.2,0.375,0.375);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#4A4A49").s().p("ACGDHIAAgzIkMAAIAAAzIggAAIAAhUIAaAAICEk5IALAAICKE5IAaAAIAABUgAhlBzIDLAAIhojyg");
	this.shape_33.setTransform(-70.2,-19.3,0.375,0.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text0a, new cjs.Rectangle(-107.4,-29.9,215,60), null);


(lib.qqwqwww = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#25387A").s().p("AFnEGIgGgCQjHhkmDjPIimhZQAmg9AXhBILWHaQAPATgEAQQgCAIgQAGQgGACgGAAIgKgBg");
	this.shape.setTransform(0,0,0.375,0.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.qqwqwww, new cjs.Rectangle(-15,-9.8,30,19.8), null);


(lib.qqqqqqqq = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#25387A").s().p("AFMFtIrSpvQAxgkAdgbQAWgVAagfIKFK6QAOAOgFANIgBADQgEAIgKAGQgKAFgLAAIgDAAIgBAAQgLgEgHgFg");
	this.shape.setTransform(0,0,0.375,0.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.qqqqqqqq, new cjs.Rectangle(-14.7,-14,29.4,28.1), null);


(lib.qqqqqq = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#25387A").s().p("AkXGbQgNgHgHgMQgcgwgSg9Qgjh5AmhcQAwhwCTgxQAEhOAXhAQAhhfBEgvQCBhZDcBjQAVAKAIAVQAIAUgJAVQgKAUgVAIQgVAIgUgJQilhKhPA2QgwAigVBUQgPA8ADA3QABAUgMAQQgLAPgTAEQiBAfghBOQgZA9AbBXQAOAsATAhQAMATgGAWQgFAVgTAMQgNAIgPAAQgOAAgMgHg");
	this.shape.setTransform(0,0,0.375,0.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.qqqqqq, new cjs.Rectangle(-13.6,-15.6,27.2,31.4), null);


(lib.qqq = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#25387A").s().p("AipUZQjBgJh9htQgagXgXgbIgPgUQhtAOhtgVQhsgWhig4QgogXgkgbQgmgdgdgcQhDhAguhLIgSgcIgTgmQgjhHgPhPIgJhGQgFhPAUhKQAThKAqg9QAQgYAVgXQg/hdgUhqQgUhrAYhwIAOg0IABgFIACgGIADgGQAchRA7hYIAWgfIAAAAIABgBQA4hJBLg8QBKg8BSgoQAhgQAhgMIAcgJQA0iLB7h6QAbgbAbgXIAEgDQAYgUAfgWQBohJBwgoIBbgaQB+gaByASQAaAEAhAJQAaAIAVAHIAOAGQB2AvBYBjQAKAKAMAPQCUhKChAOQAmAEAjAIQAgAHAmANIASAHQDGBOCDDBQCDDBgCDSQgBAlgEAfQgEAggJAhIgDAJQgtCiiPBkQgcATgbAOIAGASQACAIAAAGQAiB9g1CBQgGARgOAcQgJARgRAbQhFBmhnBJIgFADQgXARgRAKQgOAKgbAPQheA1hsAhIgMADQAFCThUCHQgUAggVAZQgXAcgYAZQhPBOhgA0QgVALgQAIIgmARIgLADQhZAmhoAKIgoADgAngQFQAOAXANAPQARAUAVATQBfBTCTAIIBOgDQBVgIBWgjIBDggQBUgtBAg/QAUgVAUgZQAVgcANgUQBOh8gSiGQgDgUAMgSQAMgRAUgFIA0gNQBcgcBXgwIBEgrIAEgDQBbhAA1hPIAIgLIARgeQAJgSAGgQQAohigahiIgTg5QgJgVAIgVQAJgUAVgKIAigPQASgJAegUQBthNAliBIABgCQAHgaADgbQAEgbABgdQACivhxilQhwimimhAIgQgHQgcgKgdgGQgbgGgggEQhJgHhIARQhJAShEApQgSALgVgFQgVgFgMgRIgLgPQgWgcgKgLQhIhQhegmIgLgEIgngNQgagGgVgEQhdgQhoAXIgpAKIgqANQhgAjhaA/QgaASgbAWIgDACIgtAqQg5A4goA/QgpA/gUA+QgJAcgcAIQgYAGgXAJQgfALgaANQhGAhg/AzQg/AzgxA+IgDAFIgCACIgNARIgBADQg0BNgZBHIgBADIgPA2QgWBiAWBfQAWBdBABOQANARgBAVQgCAWgQAOIgaAaQgRAUgMARQhABfAHCCIAHA0QANBDAfA+IAcAzQAoA/A3A1QAYAYAjAbQAcAVAlAVQBZAzBjARQBjARBigSIAKgBQAeAAAQAZg");
	this.shape.setTransform(0,0,0.375,0.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.qqq, new cjs.Rectangle(-49.8,-48.9,99.7,97.9), null);


(lib.pic0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pic0();
	this.instance.parent = this;
	this.instance.setTransform(-170,-169);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic0_1, new cjs.Rectangle(-170,-169,340,338), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D9CD8").s().p("A7cD7Qh/h0BKiqQBDiaDRhYQDqhjF7ACQBTAABNAJQAqAFA5AJIAnAIIg2BhQg2gPgrgIQg9gKg8AAQjAAAidA4QjVBMggCYQgIAlAKArQAMAzAgAnQBVBnC3gIQA6gDBwgmQCHgvBPg+IDAioIAMgJQANgJANgFQAZgLAeAAIDNAAIBCEcICBkZIDkAAICDDZIBhjZIDPAAIi2GNIjUgBIiJjkIhoDlIiDAAIAAABIj1AAIgJhGIjhAAIhKBCIiSAAQiqA9jdAAQlAAAiKh9gApaCpICDgDIgLhvgASaFjICFiEIiGkuIDNAAIA4CiICoilIDnAAImRGSQgUAUgOAFQgJADgVAEIgTADgAL+E+IlPAAIC3mNIFPAAQChAAA6BMQAwA9gkBQQgiBKhWAuQhtA8iwAAIgJAAgAK9DaIA7AAQBFAAA0gPQBWgbAQhAQAOg2g1gXQgjgQg9AAIg7AAg");
	this.shape.setTransform(0,0,0.45,0.45,0,0,0,-0.3,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-82.5,-16.7,165.4,33.8), null);


(lib.jklhjk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#25387A").s().p("Aj9EXQgYAAgSgSQgTgTAAgbIABmtQgBgbATgSQARgTAaAAIIsAAQAXAAARAPQARAPAEAWQABgUAPgOQAPgQAWAAIAGAAQAWAAAQAQQAOAQAAAWIAAG/QAAAWgPAPQgQAQgWAAIgFAAQgWAAgPgPQgPgOgBgVQgEATgOAOQgSASgZAAgAkSjvQgKAKAAAPIAAGtQAAAPAKAKQAJAJAMAAIItABQANAAAJgJQAKgLAAgPIABmtQAAgOgKgKQgJgKgOAAIosgBQgNAAgJAKgAGRjwQgHAIAAAKIAAG/QAAAKAHAHQAGAHALAAIAFAAQAKAAAHgHQAHgHAAgKIAAm/QAAgKgHgHQgGgHgKAAIgGAAQgKAAgHAGgAnAD9QgMAAgIgIQgHgIAAgLIAAhlQAAgLAHgIQAIgIAMAAIBkAAQALAAAJAIQAHAIABAMIAABkQgBALgHAIQgJAIgLAAgAnAB/IACBjIBggCIAAhigAjSDUQgWAAgPgQQgQgPAAgWIAAlPQAAgWAQgQQAQgPAVAAIHKAAQAWAAAPAPQAQAQAAAWIgBFPQAAAWgQAQQgPAPgWAAgAjjjBQgGAHgBAKIAAFPQABAKAGAGQAHAHAKAAIHJABQAKAAAHgHQAHgHAAgKIAAlPQAAgKgHgHQgHgHgJAAInKAAQgKAAgHAHgAnABFQgMAAgIgIQgHgIAAgLIAAhjQAAgMAHgIQAIgIAMAAIBkAAQALAAAJAIQAHAIABAMIAABjQgBALgHAIQgJAIgLAAgAnAg3IACBhIBggCIAAhhgAnAhmQgMAAgIgIQgHgIAAgMIAAhkQAAgLAHgIQAIgIAMAAIBlAAQALAAAIAIQAIAIAAALIAABkQgBAMgHAIQgJAIgKAAgAnAjkIACBiIBggCIABhig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.jklhjk, new cjs.Rectangle(-47.6,-27.9,95.3,55.9), null);


(lib.jhjkjk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#25387A").s().p("AguBVIAAipIBdAAIAACpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.jhjkjk, new cjs.Rectangle(-4.6,-8.4,9.3,17), null);


(lib.hjhjhj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#25387A").s().p("AhoCFQgIgDgHgGQgRgPAAgaIAAikQAAgXAQgQQAQgQAXAAICkAAQAZAAAPARQAOAQAAAWQAAAXgOAPQgPARgZABIggAAIBCBBQASASgCAWQgCAVgPAPQgOAOgSADIgEAAQgGABgGgBQgQgCgNgNIhBhDIAAAhQAAAZgRAOQgIAHgIADQgKAEgMAAQgMAAgLgEgAhjhjQgIAIAAAKIAAClQAAALAIAIQAIAEAKAAQAKAAAHgEQAJgIAAgLIAAhnIByBzQAJAJAKgBQAJAAAIgJQAIgHABgKQABgKgJgIIhzhzIBmAAQAMAAAHgJQAGgGAAgLQAAgKgGgHQgGgJgNABIikAAQgKgBgIAIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.hjhjhj, new cjs.Rectangle(-13.7,-13.7,27.5,27.4), null);


(lib.ghfg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#25387A").s().p("AivEVQhJhIABhnQAAhEAig4QAhg5A5ggIAAjvID4ABIgCDtQA5AhAhA5QAjA4AABFQAABmhJBJQhJBIhmAAQhnAAhIhJg");
	this.shape.setTransform(0,47.2,0.375,0.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#25387A").s().p("Ag4J6QgbgLgVgVQgVgVgLgbQgLgbAAgeQAAggANgcQAMgdAYgVIAFglIAAukQAAgaATgSQASgSAaAAIA9AAQAaAAASASQASASAAAaIAAOnIAHAjQAXAVAMAcQANAdAAAfQAAAegLAbQgMAbgVAVQgVAVgbALQgbALgdAAQgdAAgbgLgAg2pdQgJAJAAAOIgBOmIgGAyIgFADQgUARgMAYQgLAYAAAbQAAAYAJAVQAJAWARARQARARAVAJQAWAJAXAAQAYAAAVgJQAWgJARgRQAQgRAJgVQAJgWABgYQAAgZgKgXQgLgXgSgRIgEgDIAIgKIgMACIgIgqIAAhTIg1AAIAAgdIA1AAIAAhOIg1AAIAAgdIA1AAIAAhIIg1AAIAAgdIA1AAIAAhHIhFAAIAAgdIBFAAIAAhOIhFAAIAAgdIBFAAIAAhIIhFAAIAAgdIBFAAIAAg/Ig/AAIAAgeIA/AAIAAhNIg/AAIAAgeIA/AAIAAhHIg/AAIAAgeIA/AAIAAgJQAAgOgKgJQgJgKgOAAIg9AAQgOAAgKAKg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ghfg, new cjs.Rectangle(-14.8,-64.5,29.7,129.1), null);


(lib.fgdfg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNASQgGgGAAgMQAAgGACgGQADgGAFgDQAFgCAFAAQAIAAAEADQAFAEACAHIgIABQgBgEgDgDQgDgCgEAAQgFAAgDAEQgEAFAAAIQAAAJADAFQAEAEAFAAQAFAAADgDQADgDABgGIAHABQgBAIgFAFQgFAEgIAAQgJAAgFgGg");
	this.shape.setTransform(23.9,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgNASQgGgGAAgMQAAgGACgGQADgGAFgDQAFgCAFAAQAIAAAEADQAFAEACAHIgIABQgBgEgDgDQgDgCgEAAQgFAAgDAEQgEAFAAAIQAAAJADAFQAEAEAFAAQAFAAADgDQADgDABgGIAHABQgBAIgFAFQgFAEgIAAQgJAAgFgGg");
	this.shape_1.setTransform(19.4,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgJAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg");
	this.shape_2.setTransform(14.6,1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWAXIAAgHIAEAAIADAAIACgCIAAgHIAAgdIAkAAIAAAtIgIAAIAAgnIgUAAIAAAWIgBALQAAADgCACQgDABgEAAIgHAAg");
	this.shape_3.setTransform(9.2,1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AARAXIAAgkIgOAkIgGAAIgNgmIAAAmIgIAAIAAgtIANAAIALAkIAOgkIALAAIAAAtg");
	this.shape_4.setTransform(3.7,1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AALAgIAAgiIgVAiIgIAAIAAgtIAIAAIAAAiIAVgiIAIAAIAAAtgAgHgXQgEgDAAgFIAFAAIACAEQACACACAAQAEAAACgCQACgBAAgDIAGAAQgBAFgDADQgEADgFAAQgFAAgDgDg");
	this.shape_5.setTransform(-1.9,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_6.setTransform(-7,1.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgDAgIAAg4IgWAAIAAgHIAzAAIAAAHIgWAAIAAA4g");
	this.shape_7.setTransform(-12.2,0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAAAEIgFAKIgFgEIAHgIIgKgCIACgGIAKAEIgBgLIAFAAIgBALIALgEIACAGIgLACIAHAIIgFAEIgGgKg");
	this.shape_8.setTransform(-19.2,-1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fgdfg, new cjs.Rectangle(-22.9,-6.4,51.2,14.1), null);


(lib.ffghh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#25387A").s().p("AjlDeQhQhdAAiEQAAiLBhhfQBihfCSAAQBaAABGAjQBIAjAuA/IgyAnQgpg1g6gdQg7gchFAAQhMAAhAAlQhAAlgkA9QgjA+gBBLQAAB0BQBOQBRBNB3AAQCFAABahoIAyAmQgvA8hIAhQhGAhhYAAQimAAhghvg");
	this.shape.setTransform(33.3,1.5,0.375,0.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#25387A").s().p("AhABBQgbgaAAgmQAAgmAbgbQAbgbAlAAQAmAAAbAbQAbAbAAAmQAAAmgbAaQgbAbgmAAQgkAAgcgbgAghghQgOAOAAATQAAATAOANQAOAOATAAQAUAAANgOQAOgOAAgSQAAgSgOgPQgNgOgUAAQgTAAgOAOg");
	this.shape_1.setTransform(14.4,-10.5,0.375,0.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#25387A").s().p("AhwEqQgxgjgbhFQgchFABh9QAAh8AbhFQAbhEAwgkQAzgjA7AAQA9AAAyAjQAyAlAeBGQAdBHAAB3QgBB4gcBGQgcBHgzAkQgzAkg9AAQg7AAgygjgAhPj0QglAcgUA3QgUA3AABrQAABrAUA4QATA3AmAcQAlAdAqAAQApAAAlgcQAkgcAUg4QAXhEAAhfQAAhegVg+QgVg9glgcQgngcgnAAQgqAAglAcg");
	this.shape_2.setTransform(-0.3,1.5,0.375,0.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#25387A").s().p("AhwEqQgxgjgbhFQgchFAAh9QAAh8AbhFQAchEAwgkQAygjA9AAQA8AAAyAjQAyAlAeBGQAcBHAAB3QABB4gdBGQgdBIgzAjQgyAkg8AAQg9AAgxgjgAhQj0QgkAcgUA3QgTA3AABrQgBBrAUA4QATA3AlAcQAmAdApAAQAqAAAkgcQAlgcATg4QAYhEAAhfQAAhegVg+QgVg9gmgcQglgcgpAAQgpAAgmAcg");
	this.shape_3.setTransform(-18.7,1.5,0.375,0.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#25387A").s().p("AiPEWQg1gvgLhLIBCAAQAHAjARAYQATAXAcAOQAeAOAfAAQA+AAAsgvQAugvgBhIQAAhAgognQgogohDAAQg4AAhQAiIA6k7IETAAIAAA8IjhAAIggCtQArgMAeAAQBXAAA4A6QA4A5AABbQAAA/gdAzQgcA0gxAcQgzAcg/AAQhNAAg1gvg");
	this.shape_4.setTransform(-37.1,1.8,0.375,0.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ffghh, new cjs.Rectangle(-44.8,-14,89.8,28), null);


(lib.dfg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgDAXIAAgnIgPAAIAAgGIAlAAIAAAGIgPAAIAAAng");
	this.shape.setTransform(12.8,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AALAXIAAgiIgVAiIgIAAIAAgtIAIAAIAAAiIAVgiIAIAAIAAAtg");
	this.shape_1.setTransform(8.2,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgWAXIAAgHIAEAAIADAAIACgCIAAgHIAAgdIAkAAIAAAtIgIAAIAAgnIgUAAIAAAWIgBALQAAADgCACQgDABgEAAIgHAAg");
	this.shape_2.setTransform(2.8,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcAMIAJgCQAEAQAPAAQAIAAAFgGQAGgGAAgLIgXAAIAAgHIAXAAQgBgJgFgGQgFgGgJAAQgOAAgDAOIgJgDQADgIAGgFQAHgFAKAAQAJAAAHAEQAGAFAEAHQADAIAAAIQABAOgIAKQgHAJgPAAQgVAAgGgVg");
	this.shape_3.setTransform(-2.8,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAAAEIgFAKIgFgEIAHgIIgLgCIACgGIAKAEIgBgLIAGAAIgBALIAKgEIACAGIgLACIAIAIIgGAEIgFgKg");
	this.shape_4.setTransform(-10.2,-1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dfg, new cjs.Rectangle(-14,-6.4,31.1,14.1), null);


(lib.pic4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pic4();
	this.instance.parent = this;
	this.instance.setTransform(-78,-82);

	this.instance_1 = new lib.pic0_1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic4_1, new cjs.Rectangle(-170,-169,340,338), null);


(lib.pic1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// qqwqwww
	this.instance = new lib.qqwqwww();
	this.instance.parent = this;
	this.instance.setTransform(28.3,41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:37.3,y:42.5},11,cjs.Ease.get(0.71)).to({x:28.3,y:41.5},12,cjs.Ease.get(0.71)).wait(1));

	// qqqqqqqq
	this.instance_1 = new lib.qqqqqqqq();
	this.instance_1.parent = this;
	this.instance_1.setTransform(41.6,30.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:47.6,y:36.8},11,cjs.Ease.get(0.71)).to({x:41.6,y:30.8},12,cjs.Ease.get(0.71)).wait(1));

	// qqqqqq
	this.instance_2 = new lib.qqqqqq();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-8.3,-4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.03,scaleY:1.03,x:-11.3,y:-7.5},11,cjs.Ease.get(0.71)).to({scaleX:1,scaleY:1,x:-8.3,y:-4.5},12,cjs.Ease.get(0.71)).wait(1));

	// qqq
	this.instance_3 = new lib.qqq();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-6.4,-2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.05,scaleY:1.05,x:-6.3,y:-2.3},11,cjs.Ease.get(0.71)).to({scaleX:1,scaleY:1,x:-6.4,y:-2.4},12,cjs.Ease.get(0.71)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.2,-51.3,112.5,102.7);


(lib.hghjghj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.jhjkjk();
	this.instance.parent = this;
	this.instance.setTransform(0,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hghjghj, new cjs.Rectangle(-4.6,-16.9,9.3,17), null);


(lib.ghjgfhj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hjhjhj();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},8).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.7,-13.7,27.5,27.4);


(lib.dfgdfg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hghjghj();
	this.instance.parent = this;
	this.instance.setTransform(0,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0.3,scaleY:5.02,y:10.3},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.6,-8.4,9.3,17);


(lib.pic2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dfgdfg();
	this.instance.parent = this;
	this.instance.setTransform(-52.6,28.8);

	this.instance_1 = new lib.ghjgfhj();
	this.instance_1.parent = this;
	this.instance_1.setTransform(22.3,8.9);

	this.instance_2 = new lib.ffghh();
	this.instance_2.parent = this;
	this.instance_2.setTransform(22.5,-53.7);

	this.instance_3 = new lib.jklhjk();
	this.instance_3.parent = this;
	this.instance_3.setTransform(15.8,6.4);

	this.instance_4 = new lib.ghfg();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-52.6,3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic2, new cjs.Rectangle(-67.4,-67.7,134.8,135.4), null);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_400 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(400).call(this.frame_400).wait(47));

	// Слой 21
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("EgXWguyMAutAAAMAAABdlMgutAAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(447));

	// text5
	this.instance = new lib.text5();
	this.instance.parent = this;
	this.instance.setTransform(175,389.7,1.21,1.21,0,0,0,0.1,0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(373).to({_off:false},0).to({x:150.8,alpha:1},8,cjs.Ease.get(1)).wait(57).to({x:126.6,alpha:0},8,cjs.Ease.get(1)).wait(1));

	// text4b
	this.instance_1 = new lib.text4b();
	this.instance_1.parent = this;
	this.instance_1.setTransform(173.1,439.1,1.21,1.21);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(300).to({_off:false},0).to({x:148.9,alpha:1},8,cjs.Ease.get(1)).wait(57).to({x:124.7,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(73));

	// text4a
	this.instance_2 = new lib.text4a();
	this.instance_2.parent = this;
	this.instance_2.setTransform(176.1,416.6,1.21,1.21);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(298).to({_off:false},0).to({x:151.9,alpha:1},8,cjs.Ease.get(1)).wait(57).to({x:127.7,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(75));

	// pic4
	this.instance_3 = new lib.pic4_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150.5,253.5,0.8,0.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(294).to({_off:false},0).to({scaleX:1,scaleY:1,x:150.6,alpha:1},8,cjs.Ease.get(1)).wait(57).to({scaleX:0.8,scaleY:0.8,x:150.5,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(79));

	// text3b
	this.instance_4 = new lib.text3b();
	this.instance_4.parent = this;
	this.instance_4.setTransform(173.5,438.7,1.21,1.21);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(226).to({_off:false},0).to({x:149.3,alpha:1},8,cjs.Ease.get(1)).wait(57).to({x:125.1,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(147));

	// text3a
	this.instance_5 = new lib.text3a();
	this.instance_5.parent = this;
	this.instance_5.setTransform(174,417.7,1.21,1.21,0,0,0,0.1,0);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(224).to({_off:false},0).to({x:149.8,alpha:1},8,cjs.Ease.get(1)).wait(57).to({x:125.6,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(149));

	// pic3
	this.instance_6 = new lib.pic0_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(150.5,253.5,0.8,0.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(220).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:1.2,scaleY:1.2,alpha:1},8,cjs.Ease.get(1)).wait(57).to({regX:0,regY:0,scaleX:1,scaleY:1},0).to({scaleX:0.8,scaleY:0.8,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(153));

	// text2b
	this.instance_7 = new lib.text2b();
	this.instance_7.parent = this;
	this.instance_7.setTransform(175.4,439.1,1.21,1.21,0,0,0,0,0.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(152).to({_off:false},0).to({x:151.2,alpha:1},8,cjs.Ease.get(1)).wait(57).to({x:127,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(221));

	// text2a
	this.instance_8 = new lib.text2a();
	this.instance_8.parent = this;
	this.instance_8.setTransform(176.4,386.5,1.21,1.21,0,0,0,0.1,0.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(150).to({_off:false},0).to({x:152.2,alpha:1},8,cjs.Ease.get(1)).wait(57).to({x:128,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(223));

	// pic2
	this.instance_9 = new lib.pic2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(147.4,252.9,0.958,0.958,0,0,0,0.1,0.2);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(146).to({_off:false},0).to({regY:0.1,scaleX:1.2,scaleY:1.2,x:146.6,y:249.1,alpha:1},8,cjs.Ease.get(1)).wait(57).to({regY:0.2,scaleX:0.96,scaleY:0.96,x:147.4,y:252.9,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(227));

	// text1b
	this.instance_10 = new lib.text1b();
	this.instance_10.parent = this;
	this.instance_10.setTransform(176.6,432,1.21,1.21);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(79).to({_off:false},0).to({x:152.4,alpha:1},8,cjs.Ease.get(1)).wait(56).to({x:128.2,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(295));

	// text1a
	this.instance_11 = new lib.text1a();
	this.instance_11.parent = this;
	this.instance_11.setTransform(176.9,374.8,1.21,1.21,0,0,0,0.1,0);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(77).to({_off:false},0).to({x:152.7,alpha:1},8,cjs.Ease.get(1)).wait(56).to({x:128.5,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(297));

	// pic1
	this.instance_12 = new lib.pic1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(141.8,242.7,0.958,0.958,0,0,0,0.1,0.1);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(73).to({_off:false},0).to({regX:0,regY:0,scaleX:1.2,scaleY:1.2,x:141.7,alpha:1},8,cjs.Ease.get(1)).wait(56).to({regX:0.1,regY:0.1,scaleX:0.96,scaleY:0.96,x:141.8,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(301));

	// text0b
	this.instance_13 = new lib.text0b();
	this.instance_13.parent = this;
	this.instance_13.setTransform(169.9,472.7,1.21,1.21);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(6).to({_off:false},0).to({x:145.7,alpha:1},8,cjs.Ease.get(1)).wait(56).to({x:121.5,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(368));

	// text0a
	this.instance_14 = new lib.text0a();
	this.instance_14.parent = this;
	this.instance_14.setTransform(176.3,415,1.21,1.21,0,0,0,0.1,0.1);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(4).to({_off:false},0).to({x:152.1,alpha:1},8,cjs.Ease.get(1)).wait(56).to({x:127.9,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(370));

	// pic0
	this.instance_15 = new lib.pic0_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(150.5,253.5,0.8,0.8);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({scaleX:1,scaleY:1,alpha:1},8,cjs.Ease.get(1)).wait(56).to({scaleX:0.8,scaleY:0.8,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(374));

	// tr2
	this.instance_16 = new lib.dfg();
	this.instance_16.parent = this;
	this.instance_16.setTransform(17.6,590.2);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(297).to({alpha:1},6,cjs.Ease.get(1)).wait(63).to({alpha:0},6,cjs.Ease.get(1)).wait(75));

	// tr1
	this.instance_17 = new lib.fgdfg();
	this.instance_17.parent = this;
	this.instance_17.setTransform(26.5,590.2);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(232).to({alpha:1},6,cjs.Ease.get(1)).wait(53).to({alpha:0},6,cjs.Ease.get(1)).wait(150));

	// logo
	this.instance_18 = new lib.logo();
	this.instance_18.parent = this;
	this.instance_18.setTransform(149.9,95.2,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(372).to({regX:0.1,regY:0.1,scaleX:1.43,scaleY:1.43,x:150,y:210.7},11,cjs.Ease.get(1)).wait(54).to({regX:0,regY:0,scaleX:1.1,scaleY:1.1,x:149.9,y:95.2},9,cjs.Ease.get(1)).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#EEF1F4","#D6DCE3","#C8CFD9","#C3CBD6","#CED4DD","#E9ECF0","#F9FAFB","#FFFFFF"],[0,0.086,0.235,0.376,0.494,0.553,0.725,0.882,1],0,409.5,0,-495.7).s().p("Egx/BLAMAAAiV/MBj/AAAMAAACV/g");
	this.shape_1.setTransform(150,300,0.469,0.625);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(447));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.5,299.5,301,601);
// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/300x600_atlas_.png", id:"300x600_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;