(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"320x50_atlas_", frames: [[0,0,130,129],[0,131,60,59]]}
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
	this.spriteSheet = ss["320x50_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pic4 = function() {
	this.spriteSheet = ss["320x50_atlas_"];
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
	this.shape.setTransform(82.6,11.5,0.375,0.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A4A49").s().p("ACcCtIghj3Ih2D3IgIAAIh4j4IghD4IggAAIAwlZIAFAAICHEbICHkbIAGAAIAwFZg");
	this.shape_1.setTransform(68.1,11.5,0.375,0.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A4A49").s().p("Ah8CBQgzg0AAhLQAAgyAXgqQAYgrAogYQAngYAwAAQBLAAAzA1QAzA0AABMQAABMgzA1QgyA1hKAAQhKAAgzg1gAhGh/QgiAUgSAiQgTAhAAAqQAAA+AqAqQApArA6AAQAnAAAggUQAigUASgiQATgiAAgpQAAgogTgiQgSghgigUQgigUglAAQglAAghAUg");
	this.shape_2.setTransform(52.5,11.5,0.375,0.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4A4A49").s().p("ACGDHIAAgzIkLAAIAAAzIghAAIAAhUIAbAAICDk5IALAAICKE5IAaAAIAABUgAhlBzIDLAAIhojyg");
	this.shape_3.setTransform(38.3,12.4,0.375,0.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4A4A49").s().p("ABJCtIAAihIgSAAIh4ChIgpAAIB3ihQgpAAgYgLQgYgLgMgUQgOgXAAgbQAAgiATgXQASgYAfgHQAUgFA2ABIBDAAIAAFZgAgiiFQgPAHgJAOQgJAOAAASQAAASAJAOQAJAOAQAHQAQAHAhAAIA5AAIAAh2Ig7AAQghAAgPAFg");
	this.shape_4.setTransform(21.4,11.5,0.375,0.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4A4A49").s().p("ABwCtIhvkKIhwEKIgkAAICRlZIAHAAICPFZg");
	this.shape_5.setTransform(10.6,11.5,0.375,0.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4A4A49").s().p("ACGDHIAAgzIkMAAIAAAzIggAAIAAhUIAbAAICDk5IALAAICKE5IAaAAIAABUgAhmBzIDMAAIhojyg");
	this.shape_6.setTransform(-2,12.4,0.375,0.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4A4A49").s().p("ABhCtIAAkIIjcEIIgIAAIAAlZIAiAAIAAENIDdkNIAIAAIAAFZg");
	this.shape_7.setTransform(-19.9,11.5,0.375,0.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4A4A49").s().p("ABECtIiRiiIAACiIgjAAIAAlZIAjAAIAACBICEiBIAtAAIifCbICsC+g");
	this.shape_8.setTransform(-30.9,11.5,0.375,0.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4A4A49").s().p("ABhCtIAAkIIjcEIIgHAAIAAlZIAhAAIAAENIDdkNIAHAAIAAFZg");
	this.shape_9.setTransform(-43.1,11.5,0.375,0.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4A4A49").s().p("ABVCtIAAinIipAAIAACnIghAAIAAlZIAhAAIAACRICpAAIAAiRIAhAAIAAFZg");
	this.shape_10.setTransform(-55.5,11.5,0.375,0.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4A4A49").s().p("ABXCtIhXiSIhWCSIgnAAIBriyIhkinIAnAAIBPCHIBRiHIAnAAIhkCnIBqCyg");
	this.shape_11.setTransform(-66.8,11.5,0.375,0.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4A4A49").s().p("AhfCtIAAlZIC/AAIAAAiIidAAIAABsICbAAIAAAhIibAAIAACJICbAAIAAAhg");
	this.shape_12.setTransform(-76.4,11.5,0.375,0.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4A4A49").s().p("AgQCtIAAk3IhLAAIAAgiIC3AAIAAAiIhLAAIAAE3g");
	this.shape_13.setTransform(-85.2,11.5,0.375,0.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4A4A49").s().p("AhrCtIAAlZIAhAAIAACUIAZAAQA+AAAfAHQAdAHARAWQASAZAAAkQAAAmgRAXQgRAZgbAHQgbAHg8AAgAhKCMIAkAAQA5AAAQgGQAQgFALgPQAKgQAAgXQAAgZgNgRQgNgRgTgDQgXgEgxAAIgdAAg");
	this.shape_14.setTransform(136.3,-10.3,0.375,0.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4A4A49").s().p("ABwCtIhvkLIhwELIgkAAICRlZIAHAAICPFZg");
	this.shape_15.setTransform(124.6,-10.3,0.375,0.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4A4A49").s().p("AhfCtIAAlZIC/AAIAAAhIidAAIAABtICcAAIAAAhIicAAIAACIICcAAIAAAig");
	this.shape_16.setTransform(114.2,-10.3,0.375,0.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4A4A49").s().p("AgQCtIAAk4IhLAAIAAghIC3AAIAAAhIhLAAIAAE4g");
	this.shape_17.setTransform(105.4,-10.3,0.375,0.375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4A4A49").s().p("ABhCtIAAkJIjcEJIgIAAIAAlZIAiAAIAAENIDdkNIAIAAIAAFZg");
	this.shape_18.setTransform(95.2,-10.3,0.375,0.375);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4A4A49").s().p("ACGDHIAAg0IkLAAIAAA0IghAAIAAhUIAbAAICDk5IALAAICKE5IAaAAIAABUgAhmBzIDMAAIhojyg");
	this.shape_19.setTransform(82.2,-9.3,0.375,0.375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4A4A49").s().p("Ah8CBQgzg0AAhLQAAgyAXgqQAXgqApgZQAogYAvAAQBLAAAzA0QAzA1AABMQAABMgzA1QgzA1hJAAQhKAAgzg1gAhGh/QgiATgSAjQgTAiAAAoQAAA+AqArQApAqA6AAQAmAAAhgTQAhgTATgjQATghAAgqQAAgpgTghQgTgighgTQgigUglAAQglAAghAUg");
	this.shape_20.setTransform(68.1,-10.3,0.375,0.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4A4A49").s().p("AhjCtIAAlZIBCAAQAnAAAVAJQAWAKAMAUQAMAUAAAZQAAAYgLATQgKASgWAMQAaAJAPAMQAOANAHARQAIARAAAVQAAApgdAeQgdAcgxAAgAhCCLIApAAQAlAAAQgHQAQgHALgQQALgQAAgSQAAgXgPgSQgPgRgZgGQgQgFgqAAIgTAAgAhCgbIATAAQAiAAAQgHQAQgHAKgOQAKgQAAgRQAAgXgQgOQgRgOgiAAIgmAAg");
	this.shape_21.setTransform(55.8,-10.3,0.375,0.375);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4A4A49").s().p("Ag9CnQgagQgXgmIAZgQQAXAkAVAJQAUAKAVAAQAfAAAXgTQAWgTAAglQAAgTgHgPQgJgPgNgJQgNgIgNgDQgOgCgbAAIgFAAIAAgeIALAAQBKAAAAg+QgBgdgRgRQgRgRgZAAQghAAgeAfIgWgVQAigqAzAAQApAAAcAYQAbAZAAAnQAAA3gzAYQBDAVAABGQAAAwgfAcQgdAdg0AAQgiAAgbgPg");
	this.shape_22.setTransform(45.3,-10.3,0.375,0.375);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#4A4A49").s().p("ABhCtIAAkJIjcEJIgIAAIAAlZIAiAAIAAENIDdkNIAHAAIAAFZg");
	this.shape_23.setTransform(33.9,-10.3,0.375,0.375);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4A4A49").s().p("Ah8CBQg0g1AAhKQAAgxAYgrQAWgqApgZQApgYAvAAQBLAAAzA0QAzA1ABBMQgBBMgzA1QgzA1hKAAQhJAAgzg1gAhGh/QghATgTAjQgSAhgBApQAAA+AqArQApAqA6AAQAnAAAggTQAigUASgiQATghAAgqQAAgpgTghQgSgigigTQghgUgmAAQgmAAggAUg");
	this.shape_24.setTransform(19.8,-10.3,0.375,0.375);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4A4A49").s().p("AhoCtIAAlZIBDAAQA5AAATAFQAeAHASAXQASAWAAAjQAAAigSAXQgSAXgfAGQgXAGg9AAIgYAAIAAChgAhGgVIA4ABQAjAAAPgHQAQgGAJgPQAJgOAAgSQAAgRgJgPQgJgOgPgGQgQgHggAAIg7AAg");
	this.shape_25.setTransform(7.3,-10.3,0.375,0.375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4A4A49").s().p("ABVCtIAAk4IipAAIAAE4IgiAAIAAlZIDtAAIAAFZg");
	this.shape_26.setTransform(-4.1,-10.3,0.375,0.375);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4A4A49").s().p("ABhDXIAAkJIjcEJIgIAAIAAlaIAiAAIAAENIDdkNIAHAAIAAFagAg0iyQgWgOgFgWIAdAAQAIAMAOAHQANAFAQAAQATAAAKgEQAMgHAKgNIAdAAQgFAWgVAOQgUAOgiAAQgfAAgWgOg");
	this.shape_27.setTransform(-19.8,-11.8,0.375,0.375);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#4A4A49").s().p("ABhCtIAAkJIjcEJIgIAAIAAlaIAiAAIAAEOIDdkOIAIAAIAAFag");
	this.shape_28.setTransform(-32.7,-10.3,0.375,0.375);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#4A4A49").s().p("ABECtIiSihIAAChIgiAAIAAlaIAiAAIAACDICFiDIAtAAIigCdICtC9g");
	this.shape_29.setTransform(-43.7,-10.3,0.375,0.375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#4A4A49").s().p("Ah4B5QgqgyAAhIQAAhNAzgzQAzg0BNAAQAvAAAlATQAnAUAYAiIgbAVQgWgegfgPQgegPgkAAQgmAAgkAUQgiAUgSAhQgUAiAAApQAABAAqAqQAqAqBAAAQBGAAAvg5IAbAVQgaAhglASQglASguAAQhXAAgzg9g");
	this.shape_30.setTransform(-56.6,-10.3,0.375,0.375);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#4A4A49").s().p("ABVCtIAAinIipAAIAACnIgiAAIAAlaIAiAAIAACSICpAAIAAiSIAiAAIAAFag");
	this.shape_31.setTransform(-69.6,-10.3,0.375,0.375);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#4A4A49").s().p("ABJCtIAAihIgSAAIh3ChIgqAAIB3ihQgoABgZgLQgXgLgNgVQgNgWAAgcQAAgiATgYQASgXAegHQATgEA3gBIBDAAIAAFagAgiiEQgOAGgKAOQgIAPgBARQABARAIAPQAKAOAPAIQAQAGAhAAIA5gBIAAh2Ig7AAQghABgPAGg");
	this.shape_32.setTransform(-81.2,-10.3,0.375,0.375);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#4A4A49").s().p("AhrCtIAAlaIAiAAIAACVIAYAAQBBABAcAGQAdAHARAWQASAYAAAmQAAAlgRAYQgRAXgbAIQgaAHg9AAgAhJCMIAjAAQA5AAAQgFQAQgGALgPQAKgQAAgXQAAgagMgQQgNgQgUgEQgSgEg2ABIgcAAg");
	this.shape_33.setTransform(-90.8,-10.3,0.375,0.375);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#4A4A49").s().p("ABwCtIhvkLIhwELIgkAAICRlaIAHAAICPFag");
	this.shape_34.setTransform(-102.5,-10.3,0.375,0.375);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#4A4A49").s().p("AB9CtIg1hyIiPAAIg0ByIglAAICelaIAHAAICcFagAg4AaIByAAIg5h8g");
	this.shape_35.setTransform(-115.1,-10.3,0.375,0.375);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#4A4A49").s().p("AgQCtIAAk4IhLAAIAAgiIC3AAIAAAiIhLAAIAAE4g");
	this.shape_36.setTransform(-125.3,-10.3,0.375,0.375);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#4A4A49").s().p("ABhCtIAAkJIjcEJIgIAAIAAlaIAiAAIAAEOIDdkOIAIAAIAAFag");
	this.shape_37.setTransform(-135.5,-10.3,0.375,0.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text5, new cjs.Rectangle(-140.4,-19.9,280.8,39.8), null);


(lib.text4b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAAEIgFAKIgFgEIAHgIIgLgCIACgGIALAEIgCgLIAGAAIgBALIAKgEIACAGIgLACIAIAIIgGAEIgFgKg");
	this.shape.setTransform(42.6,-4.7);

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

}).prototype = getMCSymbolPrototype(lib.text4b, new cjs.Rectangle(-38.4,-9.6,87.5,16.6), null);


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
	this.shape.setTransform(230.8,-1.5,0.337,0.337);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A4A49").s().p("ABgCtIAAkJIjbEJIgIAAIAAlZIAiAAIAAENIDdkNIAHAAIAAFZg");
	this.shape_1.setTransform(219.2,-0.1,0.337,0.337);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A4A49").s().p("ABVCtIAAinIipAAIAACnIgiAAIAAlZIAiAAIAACRICpAAIAAiRIAiAAIAAFZg");
	this.shape_2.setTransform(208,-0.1,0.337,0.337);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4A4A49").s().p("AhfCtIAAlZIC/AAIAAAhIieAAIAABtICdAAIAAAhIidAAIAACIICdAAIAAAig");
	this.shape_3.setTransform(198.8,-0.1,0.337,0.337);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4A4A49").s().p("ABVCtIAAinIipAAIAACnIgiAAIAAlZIAiAAIAACRICpAAIAAiRIAiAAIAAFZg");
	this.shape_4.setTransform(188.9,-0.1,0.337,0.337);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4A4A49").s().p("Ag9CnQgbgRgXgmIAbgPQAWAjAVAKQAVAKAUAAQAgAAAWgTQAXgTAAglQgBgUgHgOQgHgOgOgKQgOgIgNgDQgMgCgcAAIgGAAIAAgeIAMAAQBIAAAAg+QAAgdgQgRQgRgRgaAAQghAAgeAfIgWgVQAigqA0AAQAqAAAaAYQAaAZAAAnQAAA3gyAYQBCAVABBGQgBAwgdAcQgdAdg0AAQgiAAgcgPg");
	this.shape_5.setTransform(178.9,-0.1,0.337,0.337);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4A4A49").s().p("ABKCtIAAihIgTAAIh4ChIgpAAIB3ihQgoAAgYgLQgZgKgNgVQgNgWAAgcQABgiASgYQAUgXAdgHQASgEA4AAIBDAAIAAFZgAghiFQgQAHgJAOQgJAPAAARQAAASAJAOQAKAPAPAHQAPAGAiAAIA6gBIAAh2Ig8AAQghABgOAFg");
	this.shape_6.setTransform(169.3,-0.1,0.337,0.337);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4A4A49").s().p("AhnCtIAAlZIBCAAQA3gBAWAGQAcAHASAXQATAWgBAjQAAAjgRAWQgSAXgfAHQgXAFg+AAIgXAAIAAChgAhGgVIA5ABQAhAAAPgGQAQgHAKgPQAJgNAAgTQAAgSgJgOQgJgOgQgHQgOgFghgBIg7AAg");
	this.shape_7.setTransform(160.8,-0.1,0.337,0.337);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4A4A49").s().p("AhTCtIAAlZICnAAIAAAhIiFAAIAAE4g");
	this.shape_8.setTransform(152.8,-0.1,0.337,0.337);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4A4A49").s().p("AB9CtIg0hyIiQAAIg0ByIglAAICelZIAHAAICcFZgAg3AaIBxAAIg5h8g");
	this.shape_9.setTransform(142.8,-0.1,0.337,0.337);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4A4A49").s().p("Ag9CnQgagQgYgnIAagPQAXAjAVAKQAUAKAVAAQAfAAAXgTQAWgTABglQgBgTgIgPQgIgPgNgJQgMgIgOgDQgMgCgdAAIgFAAIAAgeIALAAQBKAAgBg+QAAgdgRgRQgQgRgaAAQghAAgeAfIgWgVQAigqAzAAQAqAAAaAYQAcAZAAAnQAAA3gzAYQBDAVAABGQgBAwgeAcQgdAdg0AAQghAAgcgPg");
	this.shape_10.setTransform(132.4,-0.1,0.337,0.337);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4A4A49").s().p("ABXCtIhXiSIhWCSIgnAAIBriyIhkinIAnAAIBPCHIBRiHIAnAAIhkCnIBqCyg");
	this.shape_11.setTransform(118.4,-0.1,0.337,0.337);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4A4A49").s().p("ABuCtIAAlZIAiAAIAAFZgAiPCtIAAlZIAhAAIAACUIAYAAQBDABAbAGQAcAHASAWQASAYAAAlQAAAlgSAZQgQAXgbAIQgZAHg/AAgAhuCMIAkAAQA3AAASgFQARgHAKgOQAKgQAAgXQAAgagNgQQgNgRgSgDQgTgDg2AAIgdAAg");
	this.shape_12.setTransform(107.4,-0.1,0.337,0.337);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4A4A49").s().p("ABVCtIAAinIipAAIAACnIgiAAIAAlZIAiAAIAACRICpAAIAAiRIAiAAIAAFZg");
	this.shape_13.setTransform(95.8,-0.1,0.337,0.337);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4A4A49").s().p("AhrCtIAAlZIAiAAIAACUIAYAAQBBABAcAGQAdAHARAWQASAYAAAlQAAAmgRAYQgRAXgbAIQgaAHg9AAgAhJCMIAjAAQA3AAASgFQARgHAKgOQAKgQAAgXQAAgbgMgPQgNgQgUgEQgTgDg1AAIgcAAg");
	this.shape_14.setTransform(85.9,-0.1,0.337,0.337);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4A4A49").s().p("ABwCtIhvkLIhwELIgkAAICRlZIAHAAICPFZg");
	this.shape_15.setTransform(75.4,-0.1,0.337,0.337);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4A4A49").s().p("ABgCtIAAkIIjbEIIgIAAIAAlZIAiAAIAAENIDdkNIAHAAIAAFZg");
	this.shape_16.setTransform(64,-0.1,0.337,0.337);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4A4A49").s().p("Ah4B5QgqgzAAhHQAAhLAzg1QAzg0BNAAQAwAAAlATQAlAUAYAiIgaAVQgVgdgfgQQgfgPgkAAQgnAAgjAUQgiAUgTAiQgSAhAAApQAAA/AqArQAqAqA/ABQBGgBAvg5IAaAVQgYAgglATQgmASguAAQhXAAgzg9g");
	this.shape_17.setTransform(51.8,-0.1,0.337,0.337);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4A4A49").s().p("AB9CtIg1hxIiPAAIg0BxIglAAICelZIAHAAICcFZgAg4AaIByAAIg5h9g");
	this.shape_18.setTransform(35.3,-0.1,0.337,0.337);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4A4A49").s().p("ABECtIiRihIAAChIgjAAIAAlZIAjAAIAACBICEiBIAtAAIifCbICsC+g");
	this.shape_19.setTransform(25.3,-0.1,0.337,0.337);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4A4A49").s().p("AgQCtIAAk4IhLAAIAAghIC3AAIAAAhIhLAAIAAE4g");
	this.shape_20.setTransform(16.8,-0.1,0.337,0.337);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4A4A49").s().p("Ah4B5QgrgzAAhHQABhLAzg1QA0g0BMAAQAvAAAmATQAlAUAZAiIgaAVQgWgdgfgQQgegPgmAAQgmAAgjAUQgiAUgTAiQgSAhAAApQAAA/AqArQAqAqA/ABQBGgBAwg5IAaAVQgZAgglATQgmASgvAAQhWAAgzg9g");
	this.shape_21.setTransform(7,-0.1,0.337,0.337);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4A4A49").s().p("ABhCtIAAkIIjcEIIgHAAIAAlZIAhAAIAAENIDdkNIAIAAIAAFZg");
	this.shape_22.setTransform(-5.1,-0.1,0.337,0.337);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#4A4A49").s().p("ABECtIAAijIgYAAQgvAAgZgEQgXgEgSgNQgSgQgHgTQgHgWAAgkIAAhEIAhAAIAABHQAAAsARAQQARASAmAAIBAAAIAAiVIAiAAIAAFZg");
	this.shape_23.setTransform(-15.7,-0.1,0.337,0.337);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4A4A49").s().p("Ah8CBQgzg0AAhMQAAgwAXgrQAYgrAogYQAogYAvAAQBLAAAzA1QAzA0AABMQAABMgzA1QgyA1hKAAQhKAAgzg1gAhGh/QghATgTAjQgTAiAAAoQAAA+AqArQApAqA6AAQAnAAAhgTQAggTATgjQATgiAAgpQAAgogTgiQgTgighgTQghgVgmAAQglAAghAVg");
	this.shape_24.setTransform(-26.3,-0.1,0.337,0.337);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4A4A49").s().p("ABKCtIAAihIgTAAIh4ChIgpAAIB4ihQgrgBgWgKQgZgLgNgUQgMgVAAgeQAAgiASgWQATgYAegHQATgFA4ABIBCAAIAAFZgAghiFQgQAHgJAOQgJAPAAAQQAAATAJAOQAKAPAQAGQAQAHAgAAIA6AAIAAh2Ig8AAQghAAgOAFg");
	this.shape_25.setTransform(-43.5,-0.1,0.337,0.337);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4A4A49").s().p("AB9CtIg0hyIiQAAIg0ByIglAAICelZIAHAAICcFZgAg3AaIBxAAIg5h9g");
	this.shape_26.setTransform(-53.5,-0.1,0.337,0.337);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4A4A49").s().p("ABVCtIAAinIipAAIAACnIgiAAIAAlZIAiAAIAACRICpAAIAAiRIAiAAIAAFZg");
	this.shape_27.setTransform(-64.7,-0.1,0.337,0.337);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#4A4A49").s().p("AhnCtIAAlZIBCAAQA5AAATAEQAdAIASAXQASAXAAAiQAAAigRAXQgSAXgfAHQgXAFg9AAIgYAAIAAChgAhGgVIA5ABQAgAAARgHQAQgHAJgNQAJgPAAgSQAAgSgJgOQgJgOgPgHQgPgFghAAIg7AAg");
	this.shape_28.setTransform(-74.5,-0.1,0.337,0.337);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#4A4A49").s().p("AhZCqQgQgHgZgdIAYgVQAaAbAIACQAIAEAJAAQAOAAAIgHQALgIALgdIh6kWIAlAAIBlDrIBcjsIAlAAIh/E3QgQAsguAAQgSAAgQgIg");
	this.shape_29.setTransform(-84.5,0,0.337,0.337);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#4A4A49").s().p("AgQCtIAAk3IhKAAIAAgiIC1AAIAAAiIhKAAIAAE3g");
	this.shape_30.setTransform(-92.9,-0.1,0.337,0.337);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#4A4A49").s().p("AB9CtIg1hyIiPAAIg0ByIglAAICelZIAHAAICcFZgAg4AaIByAAIg5h9g");
	this.shape_31.setTransform(-102,-0.1,0.337,0.337);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#4A4A49").s().p("AhoCtIAAlZIBDAAQA5AAATAEQAdAIASAXQASAXAAAiQAAAigRAXQgSAWgfAIQgZAFg7AAIgYAAIAAChgAhGgVIA4ABQAgAAASgHQAQgHAJgNQAJgPAAgSQAAgSgJgOQgJgOgPgHQgPgFghAAIg7AAg");
	this.shape_32.setTransform(-112.3,-0.1,0.337,0.337);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#4A4A49").s().p("AhfCtIAAlZIC/AAIAAAiIieAAIAABsICcAAIAAAhIicAAIAACJICcAAIAAAhg");
	this.shape_33.setTransform(-121,-0.1,0.337,0.337);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#4A4A49").s().p("ABVCtIAAk5IipAAIAAE5IgiAAIAAlZIDtAAIAAFZg");
	this.shape_34.setTransform(-131,-0.1,0.337,0.337);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#4A4A49").s().p("ACcCtIghj3Ih2D3IgIAAIh4j4IghD4IggAAIAwlZIAFAAICHEbICHkbIAGAAIAwFZg");
	this.shape_35.setTransform(-143.5,-0.1,0.337,0.337);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#4A4A49").s().p("AhfCtIAAlZIC/AAIAAAiIieAAIAABsICdAAIAAAhIidAAIAACJICdAAIAAAhg");
	this.shape_36.setTransform(-154.6,-0.1,0.337,0.337);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#4A4A49").s().p("AgQCtIAAk3IhLAAIAAgiIC3AAIAAAiIhLAAIAAE3g");
	this.shape_37.setTransform(-162.6,-0.1,0.337,0.337);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#4A4A49").s().p("Ah8CBQg0g1AAhKQAAgxAYgrQAYgrAngYQApgYAvAAQBLAAAzA1QA0A1gBBLQABBMg0A1QgyA1hLAAQhJAAgzg1gAhGh/QghAUgTAiQgSAhgBAqQAAA+ApAqQAqArA6AAQAmAAAhgUQAjgVARghQASghAAgqQAAgpgSghQgSghgigUQgigUglAAQgmAAggAUg");
	this.shape_38.setTransform(-172.7,-0.1,0.337,0.337);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#4A4A49").s().p("ABECtIiRihIAAChIgjAAIAAlZIAjAAIAACBICEiBIAtAAIifCbICsC+g");
	this.shape_39.setTransform(-183.7,-0.1,0.337,0.337);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#4A4A49").s().p("Ah8CBQgzg0AAhLQAAgxAXgrQAYgrAogYQAogYAvAAQBMAAAyA1QAzA0AABMQAABMgzA1QgyA1hKAAQhKAAgzg1gAhGh/QghAUgTAiQgTAiAAApQAAA+AqAqQApArA6AAQAmAAAigUQAhgUASgiQATghAAgqQAAgpgTghQgSghgigUQgigUglAAQglAAghAUg");
	this.shape_40.setTransform(-195.7,-0.1,0.337,0.337);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#4A4A49").s().p("Ah4B6Qgqg0AAhHQAAhLAzg1QA0g0BMAAQAvAAAmATQAlATAYAjIgaAVQgVgegfgPQgegPglAAQgoAAghAUQgjAUgSAiQgTAhAAApQAABAAqAqQAqArA+AAQBHAAAvg6IAaAVQgYAhgmASQglASguAAQhXAAgzg8g");
	this.shape_41.setTransform(-208.9,-0.1,0.337,0.337);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#4A4A49").s().p("ABuCtIAAlZIAiAAIAAFZgAiPCtIAAlZIAiAAIAACUIAXAAQBBAAAdAHQAbAFATAYQASAYAAAlQgBAkgRAaQgQAXgbAIQgZAIg/gBgAhtCMIAjAAQA3AAATgFQAPgGALgPQAKgQAAgXQAAgagNgQQgMgQgTgEQgWgEgzAAIgcAAg");
	this.shape_42.setTransform(-221.5,-0.1,0.337,0.337);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#4A4A49").s().p("AhjCtIAAlZIBCAAQAnAAAVAJQAVAKANAUQAMAVAAAYQAAAYgLATQgKASgWAMQAbAKAOALQAOANAHAQQAIASAAAVQAAApgdAdQgeAdgwAAgAhCCMIApAAQAkAAARgIQARgHAKgRQALgPAAgTQAAgWgPgSQgOgQgagIQgRgDgqAAIgSAAgAhCgbIATAAQAiAAAQgIQAQgFAKgPQAKgPAAgSQAAgYgRgNQgPgNgjAAIgmAAg");
	this.shape_43.setTransform(-232,-0.1,0.337,0.337);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text2b, new cjs.Rectangle(-235.4,-8.8,470.7,14.9), null);


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
	this.shape.setTransform(182.3,-2.2,0.337,0.337);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A4A49").s().p("ACGDIIAAg1IkMAAIAAA1IggAAIAAhVIAbAAICDk5IAKAAICLE5IAaAAIAABVgAhmBzIDMAAIhojyg");
	this.shape_1.setTransform(170.6,-1.3,0.337,0.337);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A4A49").s().p("Ah8CCQgzg1AAhLQAAgxAXgrQAXgqApgZQAogYAvAAQBLAAAzA0QAzA2ABBLQgBBMgzA1QgzA1hJAAQhKAAgzg0gAhGh/QghAUgTAhQgSAiAAAqQAAA9AoArQAqArA6AAQAmAAAigUQAggTATgiQASgjAAgpQAAgpgSghQgTgighgTQgjgUgkgBQgkABgiAUg");
	this.shape_2.setTransform(157.9,-2.2,0.337,0.337);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4A4A49").s().p("ABXCuIhXiTIhWCTIgnAAIBriyIhkioIAnAAIBQCGIBQiGIAmAAIhjCnIBqCzg");
	this.shape_3.setTransform(146.3,-2.2,0.337,0.337);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4A4A49").s().p("AhaCqQgPgHgZgdIAYgVQAZAaAJAEQAKADAHAAQANAAAJgHQAKgIAMgdIh6kWIAmAAIBkDrIBcjsIAlAAIh/E3QgRAsgtAAQgSAAgRgIg");
	this.shape_4.setTransform(136.4,-2.1,0.337,0.337);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4A4A49").s().p("Ah8CCQgzg1AAhLQAAgxAXgrQAYgrAogYQApgYAuAAQBLAAAzA1QAzA0AABMQAABMgzA1QgyA1hKAAQhKAAgzg0gAhGh/QghAUgTAiQgTAiAAApQAAA9AqArQAqArA5AAQAmAAAigUQAhgUASgiQATghAAgqQAAgogTgiQgSghgigUQgigUglAAQglAAghAUg");
	this.shape_5.setTransform(119.4,-2.2,0.337,0.337);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4A4A49").s().p("AhTCtIAAlZICnAAIAAAhIiGAAIAAE4g");
	this.shape_6.setTransform(109.5,-2.2,0.337,0.337);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4A4A49").s().p("Ah8CCQgzg1AAhLQAAgzAXgpQAYgrAogYQAogYAvAAQBKAAA0A1QAzA0AABMQAABMgzA1QgyA1hKAAQhJAAg0g0gAhGh/QgiAUgSAiQgTAhAAAqQAAA9AqArQAqArA5AAQAmAAAhgUQAigUASgiQATghAAgqQAAgogTgiQgSghgigUQgigUglAAQglAAghAUg");
	this.shape_7.setTransform(98.5,-2.2,0.337,0.337);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4A4A49").s().p("ABVCtIAAinIipAAIAACnIgiAAIAAlZIAiAAIAACRICpAAIAAiRIAiAAIAAFZg");
	this.shape_8.setTransform(86.3,-2.2,0.337,0.337);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4A4A49").s().p("AhjCtIAAlZIBCAAQAoAAAUAKQAVAJANAUQAMAVAAAYQAAAYgLATQgMATgUALQAbAKANALQAOAMAIASQAIATAAATQAAApgdAdQgeAdgwAAgAhDCLIAqAAQAkABARgIQARgHAKgQQAKgQAAgTQAAgYgOgQQgPgQgZgIQgSgDgpAAIgTAAgAhDgbIAUAAQAjgBAPgGQAPgHALgOQAJgPAAgSQAAgYgQgNQgPgOgjAAIgnAAg");
	this.shape_9.setTransform(76.7,-2.2,0.337,0.337);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4A4A49").s().p("AhfCtIAAlZIC/AAIAAAhIidAAIAABtICcAAIAAAhIicAAIAACIICcAAIAAAig");
	this.shape_10.setTransform(68,-2.2,0.337,0.337);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4A4A49").s().p("ABVCtIAAinIipAAIAACnIgiAAIAAlZIAiAAIAACRICpAAIAAiRIAiAAIAAFZg");
	this.shape_11.setTransform(58.1,-2.2,0.337,0.337);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4A4A49").s().p("ACHDIIAAg1IkNAAIAAA1IggAAIAAhVIAaAAICEk6IALAAICLE6IAZAAIAABVgAhmBzIDMAAIhojyg");
	this.shape_12.setTransform(46.8,-1.3,0.337,0.337);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4A4A49").s().p("AhfCuIAAlbIC/AAIAAAiIidAAIAABtICcAAIAAAhIicAAIAACIICcAAIAAAjg");
	this.shape_13.setTransform(37.1,-2.2,0.337,0.337);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4A4A49").s().p("ACkCtIiJiqIgKAKIAACgIghAAIAAigIgLgKIiICqIgtAAICgi/IiSibIAsAAICGCTIAAiTIAhAAIAACTICGiTIAtAAIiTCbICfC/g");
	this.shape_14.setTransform(25.1,-2.2,0.337,0.337);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4A4A49").s().p("AhfCuIAAlaIC/AAIAAAhIieAAIAABtICdAAIAAAhIidAAIAACIICdAAIAAAjg");
	this.shape_15.setTransform(14,-2.2,0.337,0.337);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4A4A49").s().p("ABKCtIAAihIgUAAIh2ChIgqAAIB3ihQgqgBgXgKQgYgKgNgWQgNgVAAgcQABgiASgYQATgXAegHQATgFA3ABIBDAAIAAFZgAgiiFQgPAHgIAOQgKAOAAARQAAATAKAOQAIAPARAGQAQAHAgAAIA6gBIAAh1Ig7AAQgigBgPAGg");
	this.shape_16.setTransform(0,-2.2,0.337,0.337);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4A4A49").s().p("ABwCtIhvkLIhwELIgkAAICRlZIAHAAICPFZg");
	this.shape_17.setTransform(-9.7,-2.2,0.337,0.337);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4A4A49").s().p("ACHDHIAAg0IkNAAIAAA0IghAAIAAhUIAcAAICDk5IALAAICKE5IAaAAIAABUgAhlBzIDLAAIhojyg");
	this.shape_18.setTransform(-21.1,-1.3,0.337,0.337);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4A4A49").s().p("ACcCtIghj3Ih2D3IgIAAIh3j4IghD4IghAAIAwlZIAFAAICHEbICHkbIAGAAIAwFZg");
	this.shape_19.setTransform(-37.8,-2.2,0.337,0.337);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4A4A49").s().p("Ah8CBQgzg1gBhKQABgxAXgrQAXgqApgZQAogYAvAAQBLAAAzA0QAzA2AABLQAABLgzA2QgzA1hJAAQhKAAgzg1gAhGh/QghAUgTAiQgTAhAAApQAAA/AqAqQApArA6AAQAnAAAhgUQAhgUASgiQASghAAgqQAAgpgSghQgRghgjgUQghgUgmAAQgmAAggAUg");
	this.shape_20.setTransform(-51.9,-2.2,0.337,0.337);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4A4A49").s().p("AhoCtIAAlZIBDAAQA5AAATAEQAdAIATAXQARAXAAAiQAAAigRAXQgRAWggAIQgXAFg9AAIgYAAIAAChgAhGgVIA4ABQAjAAAPgHQAQgGAJgOQAJgPAAgSQAAgSgJgOQgJgOgPgHQgPgFghAAIg7AAg");
	this.shape_21.setTransform(-63.1,-2.2,0.337,0.337);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4A4A49").s().p("AB9CtIg1hyIiPAAIg0ByIglAAICelZIAHAAICcFZgAg3AaIBxAAIg5h9g");
	this.shape_22.setTransform(-73.8,-2.2,0.337,0.337);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#4A4A49").s().p("ABVCtIAAk5IipAAIAAE5IgiAAIAAlZIDsAAIAAFZg");
	this.shape_23.setTransform(-85,-2.2,0.337,0.337);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4A4A49").s().p("AB9CtIg0hyIiQAAIg0ByIglAAICelZIAHAAICcFZgAg3AaIBxAAIg5h9g");
	this.shape_24.setTransform(-100.6,-2.2,0.337,0.337);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4A4A49").s().p("ABECuIiSijIAACjIgiAAIAAlaIAiAAIAACCICFiCIAtAAIigCbICtC/g");
	this.shape_25.setTransform(-110.5,-2.2,0.337,0.337);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4A4A49").s().p("AgQCuIAAk4IhLAAIAAgjIC3AAIAAAjIhLAAIAAE4g");
	this.shape_26.setTransform(-119,-2.2,0.337,0.337);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4A4A49").s().p("Ah8CBQgzg0AAhLQAAgxAXgrQAXgrApgYQAogYAvAAQBLAAAzA0QAzA2AABLQAABMgzA1QgyA1hKAAQhKAAgzg1gAhGh/QgiAUgSAiQgTAiAAAoQAAA/AqAqQApArA6AAQAnAAAggUQAigUASgiQATghAAgqQAAgpgTghQgSghgigUQgigUglAAQglAAghAUg");
	this.shape_27.setTransform(-129.2,-2.2,0.337,0.337);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#4A4A49").s().p("AhjCtIAAlaICnAAIAAAiIiGAAIAABwIAQAAQA+AAAcALQAcAMAQAXQAQAZAAAeQAAAngcAeQgdAegyAAgAhCCLIApAAQAkAAARgHQARgIAKgPQAKgPAAgTQAAgYgOgRQgPgRgVgFQgTgFgrAAIgTAAg");
	this.shape_28.setTransform(-140.3,-2.2,0.337,0.337);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#4A4A49").s().p("AB9CuIg0hzIiQAAIg0BzIglAAICelaIAHAAICcFagAg3AaIBxAAIg5h9g");
	this.shape_29.setTransform(-150.9,-2.2,0.337,0.337);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#4A4A49").s().p("AhoCuIAAlbIBDAAQA5AAATAGQAdAHASAXQASAXABAiQAAAjgTAWQgRAWgfAIQgZAFg8AAIgXAAIAACigAhGgVIA4AAQAjAAAOgGQAQgGAKgPQAJgPAAgRQAAgSgJgOQgKgOgOgGQgPgHghAAIg7AAg");
	this.shape_30.setTransform(-161.1,-2.2,0.337,0.337);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#4A4A49").s().p("AhjCuIAAlbICmAAIAAAiIiFAAIAABvIAPAAQA/AAAbAMQAdAMAQAXQAQAZAAAeQAAAngcAfQgdAegyAAgAhCCMIApAAQAkAAARgIQARgHAKgQQAKgPAAgUQAAgXgOgSQgPgQgVgFQgTgGgsAAIgSAAg");
	this.shape_31.setTransform(-170.2,-2.2,0.337,0.337);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#4A4A49").s().p("Ah8CBQgzg0AAhLQAAgxAXgrQAXgrApgYQAogYAvAAQBLAAAzA0QAzA2AABLQAABMgzA1QgyA1hKAAQhKAAgzg1gAhGh/QghAUgTAiQgTAiAAAoQAAA/AqAqQApArA6AAQAmAAAigUQAhgUASgiQATghAAgqQAAgpgTghQgSghgigUQghgUgmAAQglAAghAUg");
	this.shape_32.setTransform(-181.8,-2.2,0.337,0.337);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text1b, new cjs.Rectangle(-187.7,-8.3,375.5,13.8), null);


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
	this.shape.setTransform(225,1.5,0.375,0.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A4A49").s().p("ABECuIiSiiIAACiIgiAAIAAlaIAiAAIAACCICFiCIAtAAIigCbICtC/g");
	this.shape_1.setTransform(214,1.5,0.375,0.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A4A49").s().p("AgQCuIAAk5IhLAAIAAgiIC3AAIAAAiIhLAAIAAE5g");
	this.shape_2.setTransform(204.5,1.5,0.375,0.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4A4A49").s().p("Ah4B5QgrgyAAhIQAAhNA0gzQAzg0BNAAQAuAAAmATQAmATAZAjIgbAVQgWgegegPQgegPglAAQgoAAghAUQgjAUgTAhQgTAiAAApQAAA/ArArQApAqBAAAQBGAAAvg5IAbAVQgZAhgmASQgnASgsAAQhXAAgzg9g");
	this.shape_3.setTransform(193.7,1.6,0.375,0.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4A4A49").s().p("ABgCuIAAkKIjbEKIgIAAIAAlbIAiAAIAAEOIDdkOIAHAAIAAFbg");
	this.shape_4.setTransform(180.1,1.5,0.375,0.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4A4A49").s().p("ABECuIAAikIgYAAQgwAAgYgEQgYgFgRgMQgSgPgHgUQgHgUAAgmIAAhEIAhAAIAABGQAAAsARASQARARAmAAIBAAAIAAiVIAiAAIAAFag");
	this.shape_5.setTransform(168.3,1.5,0.375,0.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4A4A49").s().p("Ah8CBQgzg1AAhLQAAgxAXgqQAYgsAogXQAogYAvAAQBLAAAzA0QAzA1AABMQAABMgzA1QgzA1hJAAQhJAAg0g1gAhGiAQgiAVgSAhQgTAkAAAnQAAA+AqArQApAqA6AAQAmAAAhgTQAhgTATgjQATgiAAgpQAAgpgTghQgTgighgUQgjgUgkAAQgkAAgiAUg");
	this.shape_6.setTransform(156.6,1.6,0.375,0.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4A4A49").s().p("AgPCuIAAhkIgkAAQgnAAgZgHQgZgJgSgZQgSgYAAgiQAAgqAegeQAdgfBMAAIAaAAIAAgsIAgAAIAAAsIAaAAQBKAAAfAeQAdAeAAArQAAAmgaAfQgaAehIAAIgkAAIAABkgAARApIA1AAQAjgBATgSQASgTAAgcQAAgggWgTQgWgTgsAAIglAAgAh2hNQgXATAAAhQAAAbASATQATATAlABIA0AAIAAiIIgmAAQgpAAgYASg");
	this.shape_7.setTransform(-88.6,1.4,0.375,0.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4A4A49").s().p("AB9CtIg0hyIiQAAIg0ByIglAAICelZIAHAAICcFZgAg3AaIBxAAIg5h9g");
	this.shape_8.setTransform(-102.7,1.4,0.375,0.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4A4A49").s().p("ABECuIiSijIAACjIgiAAIAAlaIAiAAIAACBICFiBIAtAAIigCbICtC/g");
	this.shape_9.setTransform(-113.7,1.4,0.375,0.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4A4A49").s().p("AjCCuIAAlaIAiAAIAAE5ICPAAIAAk5IAhAAIAAE5ICRAAIAAk5IAiAAIAAFag");
	this.shape_10.setTransform(-128.3,1.4,0.375,0.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4A4A49").s().p("ABhDXIAAkJIjcEJIgIAAIAAlaIAiAAIAAEOIDdkOIAIAAIAAFagAg0izQgWgOgGgVIAfAAQAIAMANAGQAMAGARAAQARAAANgFQALgFAJgOIAeAAQgGAVgUAOQgUAPgiAAQghAAgUgPg");
	this.shape_11.setTransform(-148.4,-0.1,0.375,0.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4A4A49").s().p("Ah8CBQgzg1gBhKQABgxAXgrQAXgqAogZQAogYAwAAQBLAAAzA0QAzA2AABLQAABMgzA1QgzA1hKAAQhJAAgzg1gAhGh/QghAUgTAiQgTAhAAApQAAA/AqAqQApArA6AAQAnAAAggUQAigUASgiQASghAAgqQAAgpgSghQgSghgigUQgigUglAAQgmAAggAUg");
	this.shape_12.setTransform(-162.4,1.4,0.375,0.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4A4A49").s().p("AhjCtIAAlZIBCAAQAnAAAVAJQAVAJANAVQAMAVAAAYQAAAXgLATQgMAUgUALQAaAJAOALQAPAOAHAQQAIAUAAATQAAApgdAeQgfAcgvAAgAhDCMIAqAAQAkAAARgIQAQgHALgQQAKgQAAgTQAAgYgOgQQgOgQgagIQgPgDgsAAIgTAAgAhDgcIAUAAQAiAAAQgGQAQgHAKgOQAJgPAAgSQAAgYgQgNQgPgNgjgBIgnAAg");
	this.shape_13.setTransform(-174.7,1.4,0.375,0.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4A4A49").s().p("Ah8CBQgzg0AAhLQAAgyAXgqQAXgqAogZQAogYAwAAQBLAAAzA0QAzA1AABMQAABMgzA1QgzA1hKAAQhJAAgzg1gAhGh/QgiAUgSAiQgTAhAAApQAAA/ApAqQArArA5AAQAnAAAggUQAigUASgiQATgiAAgpQAAgogTgiQgSghgigUQgigUglAAQgmAAggAUg");
	this.shape_14.setTransform(-187.6,1.4,0.375,0.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4A4A49").s().p("ABXCuIhXiTIhWCTIgnAAIBrizIhkioIAnAAIBPCIIBRiIIAmAAIhjCoIBqCzg");
	this.shape_15.setTransform(-200.5,1.4,0.375,0.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4A4A49").s().p("AhZCqQgQgHgZgdIAYgVQAZAaAJADQAHAEAKAAQANAAAKgHQAKgJALgcIh6kWIAlAAIBlDrIBcjsIAlAAIh/E3QgQAsguAAQgSAAgQgIg");
	this.shape_16.setTransform(-211.5,1.6,0.375,0.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4A4A49").s().p("ACGDHIAAgzIkMAAIAAAzIggAAIAAhUIAaAAICEk5IALAAICKE5IAaAAIAABUgAhlBzIDLAAIhojyg");
	this.shape_17.setTransform(-223.7,2.4,0.375,0.375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4A4A49").s().p("ABhDXIAAkJIjcEJIgIAAIAAlaIAiAAIAAEOIDdkOIAIAAIAAFagAg0iyQgWgOgGgWIAeAAQAJANAMAGQANAGASAAQAQAAAMgGQALgFALgOIAdAAQgGAVgUAPQgUANgiAAQghAAgUgNg");
	this.shape_18.setTransform(136,-0.1,0.375,0.375);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4A4A49").s().p("Ah8CBQg0g1AAhLQAAgwAYgrQAXgqAogZQApgYAvAAQBLAAAzA0QA0A1AABMQAABMg0A1QgyA1hLAAQhJAAgzg1gAhGh/QghAUgTAiQgTAhAAApQAAA/AqAqQApAqA6ABQAmAAAigUQAhgUASgiQASghABgqQgBgpgSghQgRghgjgUQghgUgmgBQgmABggAUg");
	this.shape_19.setTransform(122,1.4,0.375,0.375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4A4A49").s().p("ACcCtIghj3Ih3D3IgHAAIh4j5IggD5IghAAIAwlaIAGAAICGEcICHkcIAGAAIAwFag");
	this.shape_20.setTransform(106.4,1.4,0.375,0.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4A4A49").s().p("AhfCuIAAlbIC/AAIAAAiIidAAIAABtICcAAIAAAhIicAAIAACIICcAAIAAAjg");
	this.shape_21.setTransform(94.1,1.4,0.375,0.375);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4A4A49").s().p("AgQCtIAAk4IhLAAIAAghIC3AAIAAAhIhLAAIAAE4g");
	this.shape_22.setTransform(85.3,1.4,0.375,0.375);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#4A4A49").s().p("Ah4B6QgrgzAAhIQAAhNA0gzQAzg0BNAAQAvAAAmATQAlATAYAjIgaAVQgVgdgfgQQgfgPgkAAQgoAAghAUQgjATgTAiQgSAiAAApQAABAAqAqQArArA9AAQBGgBAwg5IAaAVQgYAhgmASQglASguAAQhXAAgzg8g");
	this.shape_23.setTransform(74.4,1.4,0.375,0.375);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4A4A49").s().p("ABhCtIAAkJIjcEJIgHAAIAAlZIAhAAIAAENIDdkNIAHAAIAAFZg");
	this.shape_24.setTransform(60.9,1.4,0.375,0.375);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4A4A49").s().p("Ah4B6Qgrg0AAhHQAAhLA0g1QAzg0BNAAQAvAAAmATQAlATAZAjIgbAVQgVgdgfgQQgfgPglAAQgnAAgiAUQgiAUgTAhQgSAiAAApQAAA/AqArQAqAqA/AAQBGABAvg6IAbAVQgaAhglASQglASgvAAQhWAAgzg8g");
	this.shape_25.setTransform(47.3,1.4,0.375,0.375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4A4A49").s().p("ABhDXIAAkJIjcEJIgHAAIAAlaIAhAAIAAENIDdkNIAHAAIAAFagAg1izQgVgNgGgWIAeAAQAJANAMAGQANAGARAAQASgBALgFQALgFALgOIAdAAQgGAVgUAOQgUAPgiAAQghAAgVgPg");
	this.shape_26.setTransform(28.9,-0.1,0.375,0.375);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4A4A49").s().p("Ah8CBQgzg0AAhLQAAgyAXgqQAXgrApgYQAogYAvAAQBLAAAzA1QAzA0AABMQAABMgzA1QgyA1hLAAQhJAAgzg1gAhGh/QgiAUgSAhQgTAiAAAqQAAA+AqAqQAqArA5AAQAmgBAhgTQAigUASgiQATgiAAgpQAAgngTgjQgSghgigUQgigVglABQgmgBggAVg");
	this.shape_27.setTransform(14.9,1.4,0.375,0.375);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#4A4A49").s().p("ABVCtIAAinIipAAIAACnIgiAAIAAlaIAiAAIAACSICpAAIAAiSIAiAAIAAFag");
	this.shape_28.setTransform(1.3,1.4,0.375,0.375);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#4A4A49").s().p("ABgDXIAAkJIjbEJIgHAAIAAlaIAhAAIAAENIDdkNIAHAAIAAFagAg1izQgVgNgGgWIAfAAQAHAMANAHQANAFARAAQARABANgGQAKgFAKgOIAdAAQgEAVgVAOQgUAPgiAAQghAAgVgPg");
	this.shape_29.setTransform(-11.1,-0.1,0.375,0.375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#4A4A49").s().p("Ah8CBQgzg0AAhLQAAgxAXgrQAYgrAogYQAogYAvAAQBLAAAzA1QAzA0AABMQAABMgzA1QgyA1hKAAQhKAAgzg1gAhGh/QghATgTAiQgTAkAAAoQAAA9AqArQAqArA5AAQAmgBAigTQAggTATgjQATgiAAgpQAAgogTgiQgSghgigUQgigVglAAQglAAghAVg");
	this.shape_30.setTransform(-25.2,1.4,0.375,0.375);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#4A4A49").s().p("AhjCuIAAlaIBCAAQAmgBAWAKQAWALAMATQAMAUAAAaQAAAXgLATQgKATgVALQAaAKAOALQANAMAJASQAHASAAAUQAAAqgdAcQgdAegxAAgAhCCMIApAAQAkAAARgIQASgIAJgPQALgPAAgTQAAgYgPgRQgOgQgagHQgRgEgpAAIgTAAgAhCgcIATAAQAjAAAPgGQAQgGAKgPQAKgPAAgRQAAgZgQgNQgRgNgiAAIgmAAg");
	this.shape_31.setTransform(-37.5,1.4,0.375,0.375);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#4A4A49").s().p("ACGDHIAAg0IkMAAIAAA0IghAAIAAhUIAbAAICEk5IAKAAICLE5IAaAAIAABUgAhmBzIDLAAIhnjyg");
	this.shape_32.setTransform(-49.3,2.4,0.375,0.375);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#4A4A49").s().p("Ah4B5QgrgzAAhHQAAhLA0g1QAzg0BNAAQAvAAAmATQAlATAZAjIgbAVQgVgdgfgQQgfgPglAAQgmAAgiAUQgjAUgSAhQgTAiAAApQAABAAqAqQAqArA/AAQBGgBAvg5IAbAVQgZAhgmASQglASgvAAQhWAAgzg9g");
	this.shape_33.setTransform(-67.8,1.4,0.375,0.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text0a, new cjs.Rectangle(-229.9,-8.2,459.9,18), null);


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
	this.instance.setTransform(-65,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic0_1, new cjs.Rectangle(-65,-65,130,129), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D9CD8").s().p("A7cD7Qh/h0BKiqQBDiaDRhYQDqhjF7ACQBTAABNAJQAqAFA5AJIAnAIIg2BhQg2gPgrgIQg9gKg8AAQjAAAidA4QjVBMggCYQgIAlAKArQAMAzAgAnQBVBnC3gIQA6gDBwgmQCHgvBPg+IDAioIAMgJQANgJANgFQAZgLAeAAIDNAAIBCEcICBkZIDkAAICDDZIBhjZIDPAAIi2GNIjUgBIiJjkIhoDlIiDAAIAAABIj1AAIgJhGIjhAAIhKBCIiSAAQiqA9jdAAQlAAAiKh9gApaCpICDgDIgLhvgASaFjICFiEIiGkuIDNAAIA4CiICoilIDnAAImRGSQgUAUgOAFQgJADgVAEIgTADgAL+E+IlPAAIC3mNIFPAAQChAAA6BMQAwA9gkBQQgiBKhWAuQhtA8iwAAIgJAAgAK9DaIA7AAQBFAAA0gPQBWgbAQhAQAOg2g1gXQgjgQg9AAIg7AAg");
	this.shape.setTransform(0,0,0.327,0.326);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-60,-12.2,120,24.5), null);


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
	this.instance.setTransform(-30,-30);

	this.instance_1 = new lib.pic0_1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic4_1, new cjs.Rectangle(-65,-65,130,129), null);


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
(lib._320x50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_400 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(400).call(this.frame_400).wait(56));

	// Слой 21
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("A46j0MAx1AAAIAAHpMgx1AAAg");
	this.shape.setTransform(160.1,25,1,1,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(456));

	// text5
	this.instance = new lib.text5();
	this.instance.parent = this;
	this.instance.setTransform(217.1,24.1,0.553,0.553,0,0,0,0.1,0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(382).to({_off:false},0).to({regX:0,regY:0.1,x:206.8,y:24.9,alpha:1},8,cjs.Ease.get(1)).wait(50).to({x:195.8,alpha:0},8,cjs.Ease.get(1)).wait(8));

	// text4b
	this.instance_1 = new lib.text4b();
	this.instance_1.parent = this;
	this.instance_1.setTransform(194.1,39.6,0.553,0.553,0,0,0,0,0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(300).to({_off:false},0).to({regX:0.1,x:183.1,alpha:1},8,cjs.Ease.get(1)).wait(57).to({x:172,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(82));

	// text4a
	this.instance_2 = new lib.text4a();
	this.instance_2.parent = this;
	this.instance_2.setTransform(195.5,28.5,0.553,0.553,0,0,0,0.2,0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(298).to({_off:false},0).to({regX:0.1,x:184.4,alpha:1},8,cjs.Ease.get(1)).wait(57).to({x:173.4,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(84));

	// pic4
	this.instance_3 = new lib.pic4_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(30.5,27.2,0.442,0.442,0,0,0,0.3,0);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(294).to({_off:false},0).to({regX:0.1,scaleX:0.55,scaleY:0.55,x:30.4,alpha:1},8,cjs.Ease.get(1)).wait(57).to({regX:0.3,scaleX:0.44,scaleY:0.44,x:30.5,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(88));

	// text3b
	this.instance_4 = new lib.text3b();
	this.instance_4.parent = this;
	this.instance_4.setTransform(194.3,39.6,0.553,0.553,0,0,0,0.1,0.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(226).to({_off:false},0).to({x:183.3,alpha:1},8,cjs.Ease.get(1)).wait(57).to({x:172.2,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(156));

	// text3a
	this.instance_5 = new lib.text3a();
	this.instance_5.parent = this;
	this.instance_5.setTransform(194.5,28.5,0.553,0.553,0,0,0,0.1,0.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(224).to({_off:false},0).to({x:183.5,alpha:1},8,cjs.Ease.get(1)).wait(57).to({x:172.4,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(158));

	// pic3
	this.instance_6 = new lib.pic0_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(30.5,27.3,0.442,0.442,0,0,0,0.3,0.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(220).to({_off:false},0).to({regX:0.2,regY:0,scaleX:0.55,scaleY:0.55,x:30.4,alpha:1},8,cjs.Ease.get(1)).wait(57).to({regX:0.3,regY:0.1,scaleX:0.44,scaleY:0.44,x:30.5,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(162));

	// text2b
	this.instance_7 = new lib.text2b();
	this.instance_7.parent = this;
	this.instance_7.setTransform(195.2,41,0.553,0.553,0,0,0,0.1,0.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(152).to({_off:false},0).to({x:184.1,alpha:1},8,cjs.Ease.get(1)).wait(57).to({x:173.1,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(230));

	// text2a
	this.instance_8 = new lib.text2a();
	this.instance_8.parent = this;
	this.instance_8.setTransform(195.6,29.9,0.553,0.553,0,0,0,0,0.2);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(150).to({_off:false},0).to({regX:0.1,x:184.5,alpha:1},8,cjs.Ease.get(1)).wait(57).to({regX:0.2,x:173.5,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(232));

	// pic2
	this.instance_9 = new lib.pic2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(31.4,25.8,0.221,0.221,0,0,0,0.5,0.3);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(146).to({_off:false},0).to({regX:0.2,regY:0.2,scaleX:0.28,scaleY:0.28,x:31.2,y:25,alpha:1},8,cjs.Ease.get(1)).wait(57).to({regX:0.5,regY:0.3,scaleX:0.22,scaleY:0.22,x:31.4,y:25.8,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(236));

	// text1b
	this.instance_10 = new lib.text1b();
	this.instance_10.parent = this;
	this.instance_10.setTransform(195.7,41,0.553,0.553,0,0,0,0.1,0.1);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(79).to({_off:false},0).to({x:184.7,alpha:1},8,cjs.Ease.get(1)).wait(56).to({regX:0,x:173.6,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(304));

	// text1a
	this.instance_11 = new lib.text1a();
	this.instance_11.parent = this;
	this.instance_11.setTransform(195.8,28.1,0.553,0.553,0,0,0,0,0.2);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(77).to({_off:false},0).to({regX:0.1,x:184.8,alpha:1},8,cjs.Ease.get(1)).wait(56).to({regX:0.2,x:173.8,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(306));

	// pic1
	this.instance_12 = new lib.pic1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(29,25.3,0.263,0.263,0,0,0,0.2,0.2);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(73).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:0.33,scaleY:0.33,alpha:1},8,cjs.Ease.get(1)).wait(56).to({regX:0.2,regY:0.2,scaleX:0.26,scaleY:0.26,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(310));

	// text0b
	this.instance_13 = new lib.text0b();
	this.instance_13.parent = this;
	this.instance_13.setTransform(192.7,39.6,0.553,0.553,0,0,0,0.1,0.1);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(6).to({_off:false},0).to({x:181.6,alpha:1},8,cjs.Ease.get(1)).wait(56).to({regX:0.2,x:170.6,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(377));

	// text0a
	this.instance_14 = new lib.text0a();
	this.instance_14.parent = this;
	this.instance_14.setTransform(195.5,28.5,0.553,0.553,0,0,0,0,0.1);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(4).to({_off:false},0).to({regX:0.2,x:184.5,alpha:1},8,cjs.Ease.get(1)).wait(56).to({regX:0,x:173.4,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(379));

	// pic0
	this.instance_15 = new lib.pic0_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(30.5,27.3,0.442,0.442,0,0,0,0.3,0.1);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({regX:0.2,regY:0,scaleX:0.55,scaleY:0.55,x:30.4,alpha:1},8,cjs.Ease.get(1)).wait(56).to({regX:0.3,regY:0.1,scaleX:0.44,scaleY:0.44,x:30.5,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(383));

	// tr2
	this.instance_16 = new lib.dfg();
	this.instance_16.parent = this;
	this.instance_16.setTransform(280.6,40.2);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(297).to({alpha:1},6,cjs.Ease.get(1)).wait(63).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},75).wait(9));

	// tr1
	this.instance_17 = new lib.fgdfg();
	this.instance_17.parent = this;
	this.instance_17.setTransform(289.5,40.2);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(232).to({alpha:1},6,cjs.Ease.get(1)).wait(53).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},150).wait(9));

	// logo
	this.instance_18 = new lib.logo();
	this.instance_18.parent = this;
	this.instance_18.setTransform(182.3,11.5,0.553,0.553,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(371).to({regX:0.1,scaleX:0.69,scaleY:0.69,x:62.5,y:21.9},11,cjs.Ease.get(1)).wait(64).to({x:62.6},0).to({regX:0,regY:0,scaleX:0.55,scaleY:0.55,x:183.2,y:12.3},9,cjs.Ease.get(1)).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#EEF1F4","#D6DCE3","#C8CFD9","#C3CBD6","#CED4DD","#E9ECF0","#F9FAFB","#FFFFFF"],[0,0.086,0.235,0.376,0.494,0.553,0.725,0.882,1],0,67.3,0,-26.5).s().p("A4/D5IAAnxMAx/AAAIAAHxg");
	this.shape_1.setTransform(160,24.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(456));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(159.5,23.5,321,57.1);
// library properties:
lib.properties = {
	width: 320,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/320x50_atlas_.png", id:"320x50_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;