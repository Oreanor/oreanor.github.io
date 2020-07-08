(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x250_atlas_", frames: [[302,0,300,250],[604,0,300,250],[0,0,300,250],[0,252,300,250],[302,252,300,250],[604,252,300,250]]}
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
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._6 = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(5);
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


(lib.uznat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DC082A").s().p("AgXAmIAAhLIAvAAIAAAMIghAAIAAASIAXAAIAAAKIgXAAIAAAXIAgAAIAAAMg");
	this.shape.setTransform(92.2,10.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DC082A").s().p("AgoAmIAAhLIAMAAIAABAIAXAAIAAhAIALAAIAABAIAXAAIAAhAIAMAAIAABLg");
	this.shape_1.setTransform(84.1,10.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DC082A").s().p("AgZAmIAAhLIAOAAIAAAdIAKgBQALAAAIAGQAIAGAAALQAAALgIAGQgHAHgMAAgAgLABIAAAaIAHAAQAQAAAAgOQAAgGgEgDQgEgDgHAAg");
	this.shape_2.setTransform(76.2,10.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DC082A").s().p("AgfAaIAGgBQADgBACgEQADgCADgKIAJgtIAlAAIAABLIgNAAIAAg/IgPAAQgCAPgCAMQgCANgGAKQgEAIgGADQgFACgIAAg");
	this.shape_3.setTransform(68.8,10.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DC082A").s().p("AgYAcQgIgLAAgRQAAgPAJgMQAJgLAOAAQAQAAAIAKQAJALAAARQAAASgJAKQgKALgPAAQgOAAgJgLgAgNgTQgFAHAAAMQAAANAFAHQAEAHAIAAQAKAAAFgHQAFgHAAgNQAAgagTAAQgIAAgFAHg");
	this.shape_4.setTransform(61.7,10.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DC082A").s().p("AgZAmIAAhLIAtAAIAAAMIgfAAIAAASIAKgBQANAAAGAGQAIAFAAAMQAAAKgIAHQgGAGgNAAgAgLADIAAAYIAHAAQAJAAADgDQAEgEgBgGQABgFgEgEQgDgDgJAAg");
	this.shape_5.setTransform(55,10.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DC082A").s().p("AgZAmIAAhLIANAAIAAAdIALgBQAMAAAHAGQAIAGAAALQAAALgIAGQgGAHgNAAgAgMABIAAAaIAIAAQAQAAAAgOQAAgGgEgDQgEgDgHAAg");
	this.shape_6.setTransform(45.5,10.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DC082A").s().p("AgGAmIAAg/IgYAAIAAgMIA9AAIAAAMIgZAAIAAA/g");
	this.shape_7.setTransform(38.7,10.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DC082A").s().p("AASAmIgFgPIgZAAIgFAPIgPAAIAehLIAFAAIAeBLgAgIANIARAAIgJgbg");
	this.shape_8.setTransform(31.9,10.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DC082A").s().p("AAPAmIAAgiIgdAAIAAAiIgNAAIAAhLIANAAIAAAeIAdAAIAAgeIANAAIAABLg");
	this.shape_9.setTransform(24.9,10.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DC082A").s().p("AgZAhIAGgLQAIAGAKAAQAFAAAEgEQAEgDAAgFQAAgIgEgCQgEgEgIAAIgIAAIAAgKIAIABQAGAAAEgDQADgDAAgFQAAgEgDgCQgEgDgEAAQgGAAgJAFIgFgLQANgFAJAAQAJAAAHAFQAHAFAAAJQAAAFgDAFQgDAFgFACQAGACAEAEQAEAFAAAHQAAALgIAGQgJAGgLAAQgOAAgJgGg");
	this.shape_10.setTransform(18.3,10.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DC082A").s().p("AgZAaIADAAQAGAAAEgDQAEgCAEgEIgbg2IAPAAIATArQAJgUAGgXIAOAAQgGAWgKATQgKAUgIAHQgIAHgPAAg");
	this.shape_11.setTransform(12.2,10.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AoBBeIgBgRIAniZQACgIAGgIQAMgQAVAAIOVgBQAZAAAGATQACAKgCAIIgtCfIgIALQgMALgTAAIuWABQgUAAgFgQg");
	this.shape_12.setTransform(51.5,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.uznat, new cjs.Rectangle(0,0,103.1,21.9), null);


(lib.t6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAmBRIgLghIg2AAIgKAhIggAAIA/igIAMAAIBACggAgTAbIAlAAIgSg6g");
	this.shape.setTransform(120.9,51.6,0.819,0.819);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgDBRIghhXIgRBUIgbAAIAgieIAPAAIAhBrIAihrIAPAAIAgCeIgbAAIgRhUIgfBXg");
	this.shape_1.setTransform(108.1,51.8,0.819,0.819);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag0A8QgQgWAAgmQAAgjASgXQASgXAgAAQAhAAASAVQASAUAAAoQAAAlgTAXQgTAWgiAAQggAAgRgWgAgegpQgKAPAAAaQAAAaAKAQQAJAPASAAQAVAAALgPQALgOAAgcQAAg4goAAQgTAAgLAPg");
	this.shape_2.setTransform(94.6,51.7,0.819,0.819);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA0BnIAAguIhnAAIAAAuIgZAAIAAhGIALAAQANgQANgdQAOgfALg7IBJAAIAACHIASAAIAABGgAgLgOQgLAdgNASIBDAAIAAhvIgcAAQgEAigLAeg");
	this.shape_3.setTransform(81.5,53.6,0.819,0.819);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag0A8QgRgWAAgmQAAgjATgXQASgXAgAAQAhAAASAVQATAVAAAnQgBAlgSAXQgUAWghAAQghAAgRgWgAgdgpQgKAPAAAaQgBAaAKAQQAJAPATAAQAUAAALgPQALgOAAgcQAAg4goAAQgTAAgKAPg");
	this.shape_4.setTransform(63,51.7,0.819,0.819);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgxBQIAAifIBjAAIAAAaIhGAAIAACFg");
	this.shape_5.setTransform(52,51.7,0.819,0.819);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgyBQIAAifIBlAAIAAAaIhJAAIAAAlIA0AAIAAAXIg0AAIAAAwIBHAAIAAAZg");
	this.shape_6.setTransform(41.6,51.7,0.819,0.819);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhWBQIAAifIAbAAIAACHIAvAAIAAiHIAaAAIAACHIAuAAIAAiHIAbAAIAACfg");
	this.shape_7.setTransform(27.6,51.7,0.819,0.819);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAnBRIgMghIg2AAIgLAhIgfAAIBAigIALAAIBACggAgTAbIAlAAIgSg6g");
	this.shape_8.setTransform(13.4,51.6,0.819,0.819);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag1BQIAAieIAtgBQAYAAAOAKQAOAMAAATQAAASgUAMQAeAJAAAgQAAAWgRANQgQAMgZAAgAgYAEIAAA1IAOABQAQAAAJgGQAJgGAAgQQAAgOgIgGQgHgGgTAAgAgYg3IAAAmIANABQAbAAAAgVQAAgTgYAAIgQABg");
	this.shape_9.setTransform(2.4,51.7,0.819,0.819);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPBPIAAiFIgyAAIAAgZICDAAIAAAZIg1AAIAACFg");
	this.shape_10.setTransform(97.4,30.2,0.819,0.819);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag0BQIAAieIAhgBQAmAAAQALQASAMAAAYQAAA2hAAAIgMgBIAAA7gAgXg1IAAAyIALABQATAAAIgGQAJgHAAgPQAAgYgnAAIgIABg");
	this.shape_11.setTransform(86.4,30.2,0.819,0.819);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag0A8QgRgXAAgmQAAggATgZQATgYAfABQAhgBATAWQARAVABAmQgBAngSAWQgTAWgiAAQghAAgRgWgAgdgpQgKAPAAAZQAAAdAJAPQAKAOASAAQAVAAAKgOQALgQAAgcQAAg3goAAQgTAAgKAPg");
	this.shape_12.setTransform(74.4,30.2,0.819,0.819);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgNBUIAAgRQgegCgSgSQgRgRAAgeQAAgbASgSQARgSAegCIAAgSIAbAAIAAASQAfACAQASQASARAAAcQAAAbgSATQgSATgdACIAAARgAANAuQAUgDAJgLQAKgNAAgTQAAgSgKgMQgKgMgTgDgAgqgeQgKAMAAASQAAAUALAMQALAMASACIAAhbQgTACgLANg");
	this.shape_13.setTransform(60.8,30.2,0.819,0.819);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgEBQIgghWIgRBVIgbAAIAgifIAPAAIAhBrIAihrIAPAAIAgCfIgbAAIgRhVIggBWg");
	this.shape_14.setTransform(46.5,30.3,0.819,0.819);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag0A8QgRgXAAgmQAAgiATgXQATgYAfABQAhgBATAWQARAVAAAmQAAAmgTAXQgSAWgiAAQghAAgRgWgAgdgpQgKAOAAAaQAAAdAJAPQAJAOATAAQATAAAMgOQALgPAAgdQAAg3goAAQgTAAgKAPg");
	this.shape_15.setTransform(33,30.2,0.819,0.819);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAaBJQgHgGgDgRQgEgXgLgKQgKgKgTAAIgBAAIAABIIgcAAIAAieIAcAAIAAA/IACAAQATAAAKgIQAKgIADgSQADgQAHgHQAGgHAPAAIAKABIAAAZIgEAAQgGAAgBACQgCABgCAJQgDAPgKAKQgKAKgOADQAQAEAJAKQAJAKAEAVQACAJACADQADACAFAAIAEAAIAAAZIgJABQgOAAgJgIg");
	this.shape_16.setTransform(21.1,30.3,0.819,0.819);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag9BSIAAihIAdAAIAABqIBShsIAMAAIAACgIgdAAIAAhqIhSBtg");
	this.shape_17.setTransform(3.1,30.2,0.819,0.819);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAnBRIgMghIg2AAIgLAhIgfAAIBAihIALAAIBAChgAgTAbIAmAAIgTg6g");
	this.shape_18.setTransform(74.4,8.7,0.819,0.819);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgPBPIAAiFIgyAAIAAgYICDAAIAAAYIg1AAIAACFg");
	this.shape_19.setTransform(62.7,8.8,0.819,0.819);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag0A8QgQgWAAgmQAAgjASgXQATgXAfAAQAhAAASAVQASAVAAAnQAAAmgTAWQgSAWgjAAQggAAgRgWgAgdgpQgKAOAAAbQAAAcAJAOQAKAPARAAQAVAAALgPQALgOAAgcQAAg4goAAQgTAAgKAPg");
	this.shape_20.setTransform(50.4,8.7,0.819,0.819);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgOBPIAAiFIgzAAIAAgYICDAAIAAAYIg1AAIAACFg");
	this.shape_21.setTransform(38.1,8.8,0.819,0.819);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgqA8QgRgVgBgmQABgjATgXQAVgYAfAAQAbAAARALIgLAXQgLgJgUAAQgUAAgMARQgNASAAAXQAAAYAMAQQALAPAUAAQAWAAANgQIANAXQgRASghAAQghAAgTgWg");
	this.shape_22.setTransform(26.7,8.7,0.819,0.819);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag9BSIAAigIAcAAIAABqIBShtIANAAIAACgIgcAAIAAhqIhTBtg");
	this.shape_23.setTransform(14.6,8.8,0.819,0.819);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAbBPIAAg/QgNAEgOAAQgaAAgOgOQgPgMAAgYIAAgwIAeAAIAAAvQAAANAHAIQAIAHANAAQAMAAAMgDIAAhIIAcAAIAACdg");
	this.shape_24.setTransform(2.3,8.8,0.819,0.819);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t6, new cjs.Rectangle(-2.2,2,128.9,60), null);


(lib.t5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgvBCIAAgUIADAAQAEAAADgDIACgIQAFgXAVgIQgSgEgGgIQgGgIAAgLQAAgRAMgLQANgLAYAAIAmACIAACCIgWAAIAAg3IgGAAQgPAAgHAIQgIAGgFARQgCANgGAGQgHAGgJAAIgIgBgAgJgqQgHAFAAAJQAAAVAdAAIANABIAAgoIgSgBQgJAAgIAFg");
	this.shape.setTransform(113.6,50.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgyBEIAAiEIAXAAIAABXIBEhZIAKAAIAACDIgXAAIAAhWIhEBZg");
	this.shape_1.setTransform(101.6,50.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAaBBIAAg6IgzAAIAAA6IgXAAIAAiBIAXAAIAAAyIAzAAIAAgyIAXAAIAACBg");
	this.shape_2.setTransform(88.9,50.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAgBCIgKgaIgsAAIgJAaIgaAAIA1iDIAJAAIA1CDgAgPAWIAeAAIgPgvg");
	this.shape_3.setTransform(76.8,50);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgrBCIAAiCIAlgBQAUAAALAJQAMAIAAARQAAAPgRAJQAYAIAAAaQAAASgNALQgOAKgUAAgAgUAvIAMAAQAOAAAHgFQAHgEAAgOQAAgLgGgFQgGgFgQAAIgMAAgAgUgtIAAAfIAMABQAVAAAAgSQAAgPgTAAg");
	this.shape_4.setTransform(65.8,50);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AApBBIAAiBIAWAAIAACBgAg+BBIAAiBIAWAAIAAAwIARgBQAXAAALALQANAKAAAVQAAASgNALQgMALgXAAgAgoACIAAAsIAMAAQARAAAGgGQAFgHAAgKQAAgKgGgGQgGgGgPAAg");
	this.shape_5.setTransform(52.3,50.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgiAyQgPgSAAgfQAAgcARgUQAQgUAaAAQAXAAANAKIgJATQgJgIgQAAQgQAAgLAOQgKAPAAASQAAAVAKAMQAJANAQAAQASAAALgNIALATQgOAPgcAAQgbAAgPgSg");
	this.shape_6.setTransform(39.1,50.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAgBCIgKgaIgsAAIgJAaIgaAAIA1iDIAJAAIA1CDgAgPAWIAfAAIgQgvg");
	this.shape_7.setTransform(27.6,50);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgiAyQgPgSAAgfQAAgcARgUQAQgUAaAAQAXAAANAKIgJATQgJgIgQAAQgQAAgLAOQgKAPAAASQAAAVAKAMQAJANAQAAQASAAALgNIALATQgOAPgcAAQgbAAgPgSg");
	this.shape_8.setTransform(16.2,50.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgrBCIAAiCIAlgBQAUAAALAJQAMAIAAARQAAAPgRAJQAYAHAAAbQAAASgNALQgOAKgUAAgAgUAvIAMAAQAOAAAHgFQAHgEAAgOQAAgLgGgFQgGgFgQAAIgMAAgAgUgtIAAAfIAMABQAVAAAAgSQAAgPgTAAg");
	this.shape_9.setTransform(5.3,50);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgsBCIAAiDIAXAAIAAAyIATgBQAWAAAMALQANAJAAAUQAAATgNAMQgNAKgVABgAgVACIAAAsIAOABQAcgBAAgXQAAgKgHgGQgHgGgNAAg");
	this.shape_10.setTransform(98.7,28.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgMBCIAAhuIgqAAIAAgVIBsAAIAAAVIgrAAIAABug");
	this.shape_11.setTransform(86.9,28.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgiAyQgPgSAAgfQAAgcARgUQARgUAZAAQAXAAANAKIgJATQgIgIgRAAQgQAAgLAOQgKAPAAASQAAAVAKAMQAKANAPAAQASAAALgNIALATQgOAPgcAAQgbAAgPgSg");
	this.shape_12.setTransform(75.4,28.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgqAxQgOgSAAgfQAAgcAPgTQAPgUAaAAQAcAAAOASQAPARAAAgQAAAggPARQgQATgcAAQgaAAgOgTgAgYgiQgIANAAAVQAAAWAIANQAIAMAOAAQARAAAJgMQAJgMAAgXQAAgughAAQgQAAgIAMg");
	this.shape_13.setTransform(63.3,28.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAaBCIAAg8IgzAAIAAA8IgXAAIAAiDIAXAAIAAA0IAzAAIAAg0IAXAAIAACDg");
	this.shape_14.setTransform(50.6,28.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AA6BUIAAglIiIAAIAAiCIAWAAIAABuIAnAAIAAhuIAVAAIAABuIAnAAIAAhuIAVAAIAABuIAPAAIAAA5g");
	this.shape_15.setTransform(36,30.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgqAxQgOgSAAgfQAAgcAPgTQAPgUAaAAQAcAAAOASQAPARAAAgQAAAggPARQgQATgcAAQgaAAgOgTgAgYgiQgIANAAAVQAAAWAIANQAIAMAOAAQARAAAJgMQAJgMAAgXQAAgughAAQgQAAgIAMg");
	this.shape_16.setTransform(20.3,28.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgDBCIgahHIgPBGIgWAAIAbiCIAMAAIAbBXIAchXIAMAAIAbCCIgXAAIgNhGIgaBHg");
	this.shape_17.setTransform(6.7,28.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgvBCIAAgVIADABQAEAAADgDIACgJQAFgWAVgJQgQgDgIgIQgGgIAAgLQAAgQAMgMQANgLAYAAIAmACIAACCIgWAAIAAg3IgGAAQgPAAgHAIQgJAIgDAPQgDANgGAGQgGAGgKAAIgIgBgAgJgqQgHAFAAAJQAAAVAdAAIANAAIAAgnIgSgBQgJAAgIAFg");
	this.shape_18.setTransform(79,6.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAgBCIgKgaIgsAAIgIAaIgbAAIA1iEIAJAAIA1CEgAgPAWIAfAAIgQgvg");
	this.shape_19.setTransform(67.6,6.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAVA9QgGgHgCgNQgDgSgJgJQgHgIgRAAIgBAAIAAA7IgXAAIAAiBIAXAAIAAAzIACAAQAQAAAHgGQAKgJABgNQADgNAFgGQAGgGAMABIAIAAIAAAVIgEAAQgDgBgCACIgEAJQgCALgIAJQgHAIgNADQAOADAGAJQAIAIAEARQABAGACAEQACACAFgBIADAAIAAAVIgIAAQgLAAgIgFg");
	this.shape_20.setTransform(56.2,6.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgqAxQgOgSAAgfQAAgcAPgTQAQgUAZAAQAcAAAOASQAPARAAAgQAAAfgPASQgQATgcAAQgbAAgNgTgAgYgiQgIANAAAVQAAAXAIAMQAHAMAPAAQARAAAJgMQAJgNAAgWQAAgughAAQgQAAgIAMg");
	this.shape_21.setTransform(43.6,6.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgiAyQgPgSAAgfQAAgbARgVQAQgUAaAAQAXAAANAKIgJATQgIgIgRAAQgRAAgKAOQgKAOAAATQAAAVAKAMQAJANAQAAQASAAALgNIALATQgOAPgcAAQgbAAgPgSg");
	this.shape_22.setTransform(31.6,6.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AApBBIAAiBIAWAAIAACBgAg/BBIAAiBIAYAAIAAAwIAQAAQAXgBALALQANAKAAAVQAAASgNALQgMALgXAAgAgnACIAAAsIAMAAQAQAAAGgGQAGgHgBgKQABgKgHgGQgGgGgPAAg");
	this.shape_23.setTransform(18.2,6.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgrBCIAAiCIAlgBQATAAAMAIQAMAJAAAQQAAAQgRAJQAYAHAAAbQAAASgNALQgOAKgUAAgAgUADIAAAsIAMAAQAOAAAHgFQAHgFAAgNQAAgLgGgFQgHgFgPAAgAgUgtIAAAfIAMAAQAVAAAAgRQAAgPgTAAg");
	this.shape_24.setTransform(5.3,6.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t5, new cjs.Rectangle(0,0,118.5,56.9), null);


(lib.t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAaBCIAAg8IgzAAIAAA8IgXAAIAAiDIAXAAIAAA0IAzAAIAAg0IAXAAIAACDg");
	this.shape.setTransform(84.6,28.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgyBYIAAiEIAYAAIAABXIBDhZIAKAAIAACEIgXAAIAAhYIhEBagAgSg+QgJgHgDgOIATgEQADARALAAQAOAAABgQIASADQgDAPgJAGQgJAHgNAAQgLAAgJgHg");
	this.shape_1.setTransform(71.6,26.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAgBDIgKgbIgsAAIgJAbIgaAAIA1iFIAJAAIA1CFgAgPAWIAfAAIgQgwg");
	this.shape_2.setTransform(59.3,28.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgsA6IAKgVQAPALAQAAQALAAAGgGQAHgFAAgKQAAgLgIgGQgHgGgOAAIgNAAIAAgSIAOABQALAAAGgFQAHgFAAgJQAAgHgGgEQgHgEgHAAQgLAAgQAIIgIgTQATgJASAAQATAAALAJQALAJAAAQQAAAKgFAHQgFAIgIADQALAEAGAIQAGAIAAAMQAAATgNALQgOALgWAAQgYAAgQgKg");
	this.shape_3.setTransform(48.2,28.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgyBDIAAiEIAXAAIAABXIBEhZIAKAAIAACFIgXAAIAAhYIhEBZg");
	this.shape_4.setTransform(36.8,28.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AArBUIAAglIhVAAIAAAlIgUAAIAAg5IAJAAQAJgMAMgZQALgaAKgvIA8AAIAABuIAOAAIAAA5gAgIgLQgJAXgLAPIA3AAIAAhbIgXAAQgEAbgIAag");
	this.shape_5.setTransform(23.7,30.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgyBDIAAiEIAXAAIAABXIBEhZIAKAAIAACFIgYAAIAAhYIhDBZg");
	this.shape_6.setTransform(5.1,28.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgyBEIAAiEIAYAAIAABXIBDhaIAKAAIAACFIgXAAIAAhYIhEBag");
	this.shape_7.setTransform(103.9,6.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgyBEIAAiEIAXAAIAABXIBEhaIAKAAIAACFIgXAAIAAhYIhEBag");
	this.shape_8.setTransform(91,6.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAhBUIAAglIhWAAIAAiCIAYAAIAABtIAtAAIAAhtIAXAAIAABtIAPAAIAAA6g");
	this.shape_9.setTransform(78.8,8.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAgBCIgKgaIgsAAIgJAaIgaAAIA1iEIAJAAIA1CEgAgPAWIAfAAIgQgvg");
	this.shape_10.setTransform(66.3,6.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgrBCIAAiCIAlgBQASAAANAIQALAJAAAQQAAAQgQAJQAYAIAAAaQAAASgNALQgOAKgUAAgAgUADIAAAsIALAAQAOAAAHgFQAIgFAAgNQAAgLgHgFQgGgFgPAAgAgUgtIAAAfIALAAQAWAAAAgRQAAgPgUAAg");
	this.shape_11.setTransform(55.3,6.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgqAxQgOgTAAgeQAAgcAPgTQAPgUAaAAQAcAAAOASQAPARAAAgQAAAggPARQgQATgbAAQgbAAgOgTgAgYgiQgIANAAAVQAAAXAIAMQAIAMAPAAQAQAAAJgMQAJgMAAgXQAAgughAAQgQAAgIAMg");
	this.shape_12.setTransform(43,6.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAaBBIAAg6IgzAAIAAA6IgXAAIAAiBIAXAAIAAAyIAzAAIAAgyIAXAAIAACBg");
	this.shape_13.setTransform(30.3,6.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAaBBIAAg6IgzAAIAAA6IgXAAIAAiBIAXAAIAAAyIAzAAIAAgyIAXAAIAACBg");
	this.shape_14.setTransform(17.8,6.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgyBEIAAiEIAXAAIAABXIBEhaIAKAAIAACFIgYAAIAAhYIhDBag");
	this.shape_15.setTransform(5.1,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4, new cjs.Rectangle(0,0,109,38.8), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsBCIAAiDIAXAAIAAAyIATgBQAWAAAMALQANAJAAAUQAAATgNAMQgNAKgVABgAgVACIAAAsIAOABQAcgBAAgXQAAgKgHgGQgHgGgNAAg");
	this.shape.setTransform(157.1,28.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMBCIAAhuIgqAAIAAgVIBtAAIAAAVIgsAAIAABug");
	this.shape_1.setTransform(145.3,28.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiAyQgPgSAAgfQAAgcARgUQAQgUAaAAQAXAAANAKIgJATQgIgIgRAAQgQAAgLAOQgKAPAAASQAAAVAKAMQAKANAPAAQASAAALgNIALATQgOAPgcAAQgbAAgPgSg");
	this.shape_2.setTransform(133.8,28.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgqAxQgOgSAAgfQAAgcAPgTQAPgUAaAAQAcAAAOASQAPARAAAgQAAAggPARQgQATgcAAQgaAAgOgTgAgYgiQgIANAAAVQAAAWAIANQAIAMAOAAQARAAAJgMQAJgMAAgXQAAgughAAQgQAAgIAMg");
	this.shape_3.setTransform(121.6,28.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAbBCIAAg8Ig0AAIAAA8IgXAAIAAiDIAXAAIAAA0IA0AAIAAg0IAWAAIAACDg");
	this.shape_4.setTransform(108.9,28.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgrBCIAAiCIAlgBQATAAAMAJQALAIAAAQQAAAQgQAJQAYAIAAAaQAAASgNALQgOAKgUAAgAgUAvIALAAQAOAAAHgFQAIgFAAgNQAAgLgHgFQgFgFgQAAIgMAAgAgUgtIAAAfIALAAQAWAAAAgRQAAgPgUAAg");
	this.shape_5.setTransform(97.5,28.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgyBDIAAiEIAYAAIAABXIBDhZIAKAAIAACFIgXAAIAAhYIhEBZg");
	this.shape_6.setTransform(85.3,28.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgMBCIAAhuIgpAAIAAgVIBrAAIAAAVIgsAAIAABug");
	this.shape_7.setTransform(72.9,28.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAYBCIAAhuIgwAAIAABuIgWAAIAAiDIBdAAIAACDg");
	this.shape_8.setTransform(60.8,28.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAgBDIgJgbIgsAAIgJAbIgbAAIA1iFIAJAAIA1CFgAgPAWIAeAAIgPgwg");
	this.shape_9.setTransform(48.9,28.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AArBUIAAglIhVAAIAAAlIgUAAIAAg5IAJAAQAJgMAMgZQALgXAKgyIA8AAIAABuIAOAAIAAA5gAgJgLQgJAZgLANIA3AAIAAhbIgWAAQgEAbgJAag");
	this.shape_10.setTransform(36.3,30.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAgBDIgJgbIgsAAIgJAbIgaAAIA0iFIAJAAIA0CFgAgPAWIAfAAIgQgwg");
	this.shape_11.setTransform(23.8,28.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgyBDIAAiEIAXAAIAABXIBEhZIAKAAIAACFIgYAAIAAhYIhDBZg");
	this.shape_12.setTransform(6,28.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgsBBIAAiBIAXAAIAAAwIATAAQAWgBAMALQANAKAAAVQAAATgNAKQgNALgVAAgAgVACIAAAsIANAAQAdABAAgYQAAgKgHgGQgIgGgMAAg");
	this.shape_13.setTransform(147.9,6.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgMBBIAAhtIgpAAIAAgUIBrAAIAAAUIgrAAIAABtg");
	this.shape_14.setTransform(136.1,6.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgiAyQgPgSAAgfQAAgcARgUQAQgUAaAAQAWAAAOAKIgJATQgIgIgRAAQgQAAgLAOQgKAPAAASQAAAVAKAMQAJANAQAAQASAAALgNIALATQgOAPgcAAQgbAAgPgSg");
	this.shape_15.setTransform(124.6,6.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgqAxQgOgSAAgfQAAgcAPgTQAQgUAZAAQAcAAAOASQAPARAAAgQAAAggPARQgQATgcAAQgbAAgNgTgAgYgiQgIANAAAVQAAAXAIAMQAHAMAPAAQARAAAJgMQAJgMAAgXQAAgughAAQgQAAgIAMg");
	this.shape_16.setTransform(112.5,6.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAaBBIAAg6IgzAAIAAA6IgXAAIAAiBIAXAAIAAAyIAzAAIAAgyIAXAAIAACBg");
	this.shape_17.setTransform(99.7,6.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAaBBIAAg6IgzAAIAAA6IgXAAIAAiBIAXAAIAAAyIAzAAIAAgyIAXAAIAACBg");
	this.shape_18.setTransform(87.2,6.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgpBBIAAiBIBTAAIAAAUIg7AAIAAAeIAqAAIAAAUIgqAAIAAAnIA6AAIAAAUg");
	this.shape_19.setTransform(75.9,6.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgqBCIAAiCIAbgBQAeAAAOAJQAOAJAAAVQAAAsgzAAIgLgBIAAAxgAgTgsIAAAqIAJAAQAPAAAHgFQAIgFAAgMQAAgUgggBg");
	this.shape_20.setTransform(65.3,6.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgrBCIAAiCIAlgBQATAAAMAIQAMAJAAAQQAAAQgRAJQAYAIAAAaQAAASgNALQgOAKgUAAgAgUADIAAAsIAMAAQAOAAAHgFQAHgFAAgNQAAgLgGgFQgHgFgPAAgAgUgtIAAAfIAMAAQAVAAAAgRQAAgPgTAAg");
	this.shape_21.setTransform(54.4,6.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgpBBIAAiBIBTAAIAAAUIg8AAIAAAeIArAAIAAAUIgrAAIAAAnIA7AAIAAAUg");
	this.shape_22.setTransform(43.6,6.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAaBBIAAg6IgzAAIAAA6IgXAAIAAiBIAXAAIAAAyIAzAAIAAgyIAXAAIAACBg");
	this.shape_23.setTransform(31.8,6.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAgBCIgKgaIgsAAIgJAaIgaAAIA1iEIAJAAIA1CEgAgPAWIAeAAIgPgvg");
	this.shape_24.setTransform(19.7,6.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgDBCIgahHIgPBGIgWAAIAbiCIAMAAIAbBXIAchXIAMAAIAbCCIgXAAIgNhGIgaBHg");
	this.shape_25.setTransform(6.7,6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(0,0,161.6,38.8), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgyBEIAAiFIAYAAIAABYIBDhaIAKAAIAACFIgXAAIAAhYIhEBag");
	this.shape.setTransform(161,28.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAWA9QgHgHgCgNQgEgTgIgIQgHgIgRAAIgBAAIAAA8IgXAAIAAiDIAXAAIAAA0IACAAQAQAAAHgHQAJgHACgOQADgNAFgGQAGgGAMAAIAIABIAAAVIgEgBQgDAAgCACIgDAJQgEANgHAHQgHAIgNADQAOADAHAJQAHAJAEAQQABAIACACQACACAEAAIAEgBIAAAVIgIABQgMAAgGgGg");
	this.shape_1.setTransform(148.9,28.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrBCIAAiCIAbgBQAdAAAQAJQAOAKAAAUQABAsg1AAIgLAAIAAAwgAgUgsIAAAqIAKABQAPAAAHgGQAIgFgBgMQAAgUgfAAg");
	this.shape_2.setTransform(137.7,28.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgqAxQgOgTAAgeQAAgdAPgTQAPgTAaAAQAbAAAPARQAPASAAAgQAAAggPARQgQATgcAAQgaAAgOgTgAgYgiQgIAMAAAWQAAAXAIAMQAIAMAOAAQAQAAAKgMQAJgMAAgXQAAgughAAQgQAAgIAMg");
	this.shape_3.setTransform(125.5,28.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgrBCIAAiDIBOAAIAAAVIg3AAIAAAfIARgBQAWAAAMAKQANALABATQgBASgNALQgNALgVAAgAgUAEIAAAqIANABQAOAAAGgGQAHgFAAgMQAAgJgGgGQgHgFgOAAg");
	this.shape_4.setTransform(113.9,28.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgsAtIAEAAQAMAAAHgEQAIgEAFgIIgvheIAaAAIAiBLQAQgfALgsIAYAAQgKAmgSAjQgSAjgNALQgPAMgaAAg");
	this.shape_5.setTransform(102.4,28.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgqAxQgOgSAAgfQAAgdAPgTQAPgTAaAAQAbAAAPARQAPASAAAgQAAAggPARQgQATgcAAQgbAAgNgTgAgYgiQgIANAAAVQAAAXAIAMQAIAMAOAAQAQAAAKgMQAJgMAAgXQAAgughAAQgQAAgIAMg");
	this.shape_6.setTransform(84.8,28.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgrBCIAAiCIAlgBQATAAAMAIQAMAJAAAQQAAAQgRAJQAYAIAAAaQAAASgNALQgOAKgUAAgAgUADIAAAsIAMAAQAOAAAHgFQAHgFAAgNQAAgLgGgFQgHgFgPAAgAgUgtIAAAfIAMAAQAVAAAAgRQAAgPgTAAg");
	this.shape_7.setTransform(73.1,28.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgMBCIAAhuIgpAAIAAgVIBrAAIAAAVIgrAAIAABug");
	this.shape_8.setTransform(61.4,28.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgiAyQgPgSAAggQAAgbARgUQAQgUAaAAQAXAAANAJIgKAUQgHgIgSAAQgQAAgKAOQgKAOAAATQAAAUAJANQALANAPAAQASAAALgNIALATQgPAPgbAAQgaAAgQgSg");
	this.shape_9.setTransform(50,28.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgpBCIAAiDIBTAAIAAAVIg7AAIAAAfIAqAAIAAATIgqAAIAAAnIA6AAIAAAVg");
	this.shape_10.setTransform(39.2,28.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAXBCIAAg1QgMADgLAAQgUAAgNgLQgMgJAAgUIAAgpIAZAAIAAAoQAAALAGAGQAHAGAKAAQALAAAJgDIAAg8IAXAAIAACDg");
	this.shape_11.setTransform(27.7,28.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAgBCIgKgbIgsAAIgJAbIgaAAIA1iEIAJAAIA1CEgAgPAWIAeAAIgPgvg");
	this.shape_12.setTransform(16.2,28.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAWA9QgHgHgCgNQgDgSgJgJQgHgIgRAAIgBAAIAAA8IgXAAIAAiDIAXAAIAAA0IACAAQARAAAGgHQAJgGADgPQACgNAGgGQAFgGAMAAIAIABIAAAVIgEgBQgDAAgCACIgEAJQgCAMgIAIQgHAIgNADQAOADAGAJQAJAKACAPQACAIACACQACACAEAAIAEgBIAAAVIgIABQgLAAgHgGg");
	this.shape_13.setTransform(4.8,28.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgpBCIAAiDIBTAAIAAAVIg8AAIAAAfIArAAIAAATIgrAAIAAAnIA7AAIAAAVg");
	this.shape_14.setTransform(166.4,6.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgqAxQgOgSAAgfQAAgcAPgUQAQgTAZAAQAbAAAPARQAPASAAAgQAAAfgPASQgQATgcAAQgbAAgNgTgAgYgiQgIANAAAVQAAAXAIAMQAHAMAPAAQARAAAJgMQAJgNAAgWQAAgughAAQgQAAgIAMg");
	this.shape_15.setTransform(154.4,6.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAaBCIAAg7IgzAAIAAA7IgXAAIAAiDIAXAAIAAA0IAzAAIAAg0IAXAAIAACDg");
	this.shape_16.setTransform(141.7,6.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgsBCIAAiDIAXAAIAAAyIATgCQAVAAANALQANALAAAUQAAASgNALQgNAMgVAAgAgVACIAAAsIAOABQAcAAAAgYQAAgKgHgGQgHgGgNAAg");
	this.shape_17.setTransform(130.2,6.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag3AtQAHAAAEgCQAEgBAFgGQAFgHAFgPQAGgPADgWQAFgdABgNIBCAAIAACCIgXAAIAAhuIgZAAQgDAXgFAbQgFAYgIANQgHAOgLAFQgJAFgPAAg");
	this.shape_18.setTransform(117.4,6.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgpBCIAAiDIBTAAIAAAVIg8AAIAAAfIArAAIAAATIgrAAIAAAnIA7AAIAAAVg");
	this.shape_19.setTransform(106.5,6.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgMBCIAAhuIgpAAIAAgVIBrAAIAAAVIgrAAIAABug");
	this.shape_20.setTransform(95,6.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgyBEIAAiFIAYAAIAABYIBDhaIAKAAIAACFIgXAAIAAhYIhEBag");
	this.shape_21.setTransform(82.6,6.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAXBCIAAg1QgMADgLAAQgUAAgNgLQgMgJAAgUIAAgpIAYAAIAAAnQAAALAHAHQAGAGALAAQALAAAJgDIAAg8IAXAAIAACDg");
	this.shape_22.setTransform(70.2,6.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgRAzQgNgQgBgdIgVAAIAAA7IgXAAIAAiCIAXAAIAAA0IAWAAQADgZAOgPQAOgOAVAAQAaAAAOATQAOASAAAeQAAAegPATQgPATgaAAQgYAAgNgRgAgBghQgIANAAAUQAAAXAIAMQAHAMAOAAQARAAAHgNQAIgMAAgWQAAgvgfABQgPAAgHANg");
	this.shape_23.setTransform(56.2,6.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag3AtQAHAAAEgCQAEgBAFgGQAFgHAFgPQAFgOAFgXIAFgqIBCAAIAACCIgXAAIAAhuIgaAAQgDAdgEAVQgFAXgIAOQgIAOgKAFQgKAFgOAAg");
	this.shape_24.setTransform(40.4,6.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAWA9QgHgHgCgNQgDgSgJgJQgIgIgQAAIgBAAIAAA8IgXAAIAAiDIAXAAIAAA0IACAAQAPAAAIgHQAJgGADgPQACgNAFgGQAGgGAMAAIAIABIAAAVIgEgBQgDAAgDACIgDAJQgBAMgJAIQgIAIgMADQANADAHAJQAIAJADAQQACAIACACQACACAEAAIAEgBIAAAVIgIABQgNAAgFgGg");
	this.shape_25.setTransform(28.9,6.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgiAyQgPgSAAggQAAgbARgUQAQgUAaAAQAXAAANAJIgJAUQgIgIgRAAQgQAAgLAOQgKAOAAATQAAAVAKAMQAJANAQAAQATAAAKgNIALATQgOAPgcAAQgbAAgPgSg");
	this.shape_26.setTransform(17.2,6.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgyBEIAAiFIAXAAIAABYIBEhaIAKAAIAACFIgXAAIAAhYIhEBag");
	this.shape_27.setTransform(5.1,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(0,0,170.6,35.2), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAXBCIgig2IgOgBIAAA3IgZAAIAAiCIAlgBQAxAAAAAmQAAAMgHAKQgGAIgLAEIAmA7gAgZgsIAAAlIAKAAQAOAAAGgEQAHgEAAgMQAAgJgIgEQgHgEgOAAg");
	this.shape.setTransform(65.2,50);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgpBBIAAiBIBTAAIAAAUIg8AAIAAAeIArAAIAAAUIgrAAIAAAnIA7AAIAAAUg");
	this.shape_1.setTransform(53.9,50.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGBCIgyiDIAaAAIAeBXIAfhXIAaAAIg0CDg");
	this.shape_2.setTransform(42.7,50.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgqAxQgPgSAAgfQAAgbAQgUQAQgUAZAAQAbAAAPASQAPARAAAgQAAAegQATQgPATgcAAQgbAAgNgTgAgYgiQgIANAAAVQAAAWAIANQAHAMAPAAQARAAAJgMQAJgMAAgXQAAgughAAQgPAAgJAMg");
	this.shape_3.setTransform(30.6,50.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgqAxQgOgRAAggQAAgcAPgTQAQgUAZAAQAbAAAPASQAPARAAAgQAAAegQATQgPATgcAAQgaAAgOgTgAgYgiQgIAMAAAWQAAAWAHANQAIAMAPAAQARAAAJgMQAJgMAAgXQAAgughAAQgPAAgJAMg");
	this.shape_4.setTransform(17.7,50.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAaBBIAAg6IgzAAIAAA6IgXAAIAAiBIAXAAIAAAyIAzAAIAAgyIAXAAIAACBg");
	this.shape_5.setTransform(4.9,50.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAoBCIAAiDIAYAAIAACDgAg/BCIAAiDIAXAAIAAAyIARgBQAXAAALALQAMAKAAATQABAUgNAKQgNAMgVAAgAgoACIAAAsIAMABQARAAAGgHQAFgHAAgKQAAgKgFgGQgIgGgOAAg");
	this.shape_6.setTransform(92.7,28.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgiAyQgPgSAAgfQAAgcARgUQARgUAZAAQAXAAANAKIgJATQgIgIgRAAQgQAAgLAOQgKAPAAASQAAAUAKANQAKANAPAAQATAAAKgNIALATQgOAPgcAAQgbAAgPgSg");
	this.shape_7.setTransform(79.4,28.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgqAxQgOgSAAgfQAAgcAPgTQAPgUAaAAQAcAAAOASQAPARAAAgQAAAggPARQgQATgcAAQgaAAgOgTgAgYgiQgIANAAAVQAAAWAIANQAIAMAOAAQARAAAJgMQAJgMAAgXQAAgughAAQgQAAgIAMg");
	this.shape_8.setTransform(67.3,28.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgiAyQgPgSAAgfQAAgcARgUQAQgUAaAAQAXAAANAKIgJATQgJgIgQAAQgQAAgLAOQgKAPAAASQAAAVAKAMQAJANAQAAQASAAALgNIALATQgOAPgcAAQgbAAgPgSg");
	this.shape_9.setTransform(55.3,28.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgpBCIAAiDIBTAAIAAAVIg8AAIAAAfIArAAIAAASIgrAAIAAAnIA7AAIAAAWg");
	this.shape_10.setTransform(44.6,28.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag3AtQAFAAAGgCQAEgCAFgFQAEgFAGgRQAGgTADgSIAGgqIBCAAIAACCIgXAAIAAhuIgaAAQgCAXgFAbQgGAXgHAPQgHANgLAFQgKAFgOAAg");
	this.shape_11.setTransform(32.1,28.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AApBCIAAiDIAWAAIAACDgAg/BCIAAiDIAYAAIAAAyIAQgBQAXAAALALQANAJAAAUQAAAUgNAKQgMAMgWAAgAgnACIAAAsIALABQARAAAHgHQAEgHAAgKQAAgKgGgGQgGgGgPAAg");
	this.shape_12.setTransform(18.6,28.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAZBCIAAhuIgwAAIAABuIgXAAIAAiDIBdAAIAACDg");
	this.shape_13.setTransform(4.8,28.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgpBBIAAiBIBTAAIAAAUIg8AAIAAAeIArAAIAAAUIgrAAIAAAnIA7AAIAAAUg");
	this.shape_14.setTransform(138,6.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AApBBIAAiBIAWAAIAACBgAg/BBIAAiBIAXAAIAAAwIARAAQAXgBALALQANAKAAAVQAAASgNALQgMALgXAAgAgoACIAAAsIAMAAQARAAAGgGQAFgHAAgKQAAgKgFgGQgHgGgPAAg");
	this.shape_15.setTransform(124.8,6.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAaBBIAAg6IgzAAIAAA6IgXAAIAAiBIAXAAIAAAyIAzAAIAAgyIAXAAIAACBg");
	this.shape_16.setTransform(110.8,6.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AArBUIAAglIhVAAIAAAlIgUAAIAAg5IAIAAQAKgMAMgZQALgXAKgyIA8AAIAABuIAOAAIAAA5gAgJgLQgJAZgLANIA3AAIAAhbIgWAAQgEAbgJAag");
	this.shape_17.setTransform(97.8,8.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgrAxQgNgSAAgfQAAgcAPgTQAQgUAZAAQAcAAAOASQAPARAAAgQAAAfgQASQgPATgcAAQgbAAgOgTgAgYgiQgIANAAAVQAAAXAIAMQAHAMAPAAQARAAAJgMQAJgMAAgXQAAgughAAQgQAAgIAMg");
	this.shape_18.setTransform(84.7,6.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgrBCIAAiCIAlgBQATAAAMAIQALAJAAAQQAAAQgQAJQAYAHAAAbQAAASgNALQgOAKgUAAgAgUADIAAAsIAMAAQAOAAAHgFQAHgFAAgNQAAgKgGgGQgHgFgPAAgAgUgtIAAAfIALAAQAWAAAAgRQAAgPgUAAg");
	this.shape_19.setTransform(73.1,6.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgqAxQgOgSAAgfQAAgcAPgTQAQgUAZAAQAcAAAOASQAPARAAAgQAAAfgPASQgQATgcAAQgbAAgNgTgAgYgiQgIANAAAVQAAAXAIAMQAHAMAPAAQARAAAJgMQAJgNAAgWQAAgughAAQgQAAgIAMg");
	this.shape_20.setTransform(60.9,6.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgrBCIAAiCIAcgBQAeAAAOAJQAPAJAAAVQAAAsg0AAIgLgBIAAAxgAgTgsIAAAqIAJAAQAPAAAHgFQAIgFAAgMQAAgUgggBg");
	this.shape_21.setTransform(49.3,6.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAYBBIAAhtIgvAAIAABtIgXAAIAAiBIBdAAIAACBg");
	this.shape_22.setTransform(37.5,6.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgiAyQgPgTAAgeQAAgbARgVQAQgUAaAAQAXAAANAKIgJATQgIgIgRAAQgQAAgLAOQgKAPAAASQAAAVAKAMQAJANAQAAQATAAAKgNIALATQgOAPgcAAQgbAAgPgSg");
	this.shape_23.setTransform(25.9,6.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgpBBIAAiBIBTAAIAAAUIg8AAIAAAeIArAAIAAAUIgrAAIAAAnIA7AAIAAAUg");
	this.shape_24.setTransform(15.2,6.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgrBBIAAiBIBOAAIAAAUIg3AAIAAAeIARgBQAWABANAKQAMAKAAAUQAAASgMAKQgNAMgWgBgAgUAEIAAAqIANAAQAOABAHgHQAGgFAAgKQAAgKgGgGQgGgGgPAAg");
	this.shape_25.setTransform(4.4,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(0,0,142.2,56.9), null);


(lib.p6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p6, new cjs.Rectangle(0,0,300,250), null);


(lib.p5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p5, new cjs.Rectangle(0,0,300,250), null);


(lib.p4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p4, new cjs.Rectangle(0,0,300,250), null);


(lib.p3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p3, new cjs.Rectangle(0,0,300,250), null);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2, new cjs.Rectangle(0,0,300,250), null);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1, new cjs.Rectangle(0,0,300,250), null);


(lib.ClipGroup_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjiDjQheheAAiFQAAiEBeheQBeheCEAAQCFAABeBeQBeBeAACEQAACFheBeQheBeiFAAQiEAAhehegAhEAbIhBDxQA/AfBGAAQB8AABXhYQBYhXAAh8QAAgrgMgqgAkbBeQASA0AhAqQAiApAtAbIA7jdIhNAYIgXBWIgaAIIAXhWgAjzirQg3BNAABeQAAAoALAoIBegeIBZlJQhWAhg1BLgAhOkfIhZFJIBOgYIA0jEIAbgHIg1DCIFYhsQgfhZhMg2QhOg4hgAAQgoAAgmALg");
	mask.setTransform(60.6,60.6);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(195,195,195,0)","#C3C3C3","#A8A8A8","#888887","#636361","#3A3A38","#1C1C1A","#1C1C1A"],[0,0.933,0.933,0.949,0.961,0.976,0.988,0.992,1],36.9,22.4,-34.9,-21.1).s().p("ApdCUIHJrxILyHJInKLyg");
	this.shape.setTransform(60.6,60.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#FFFFFF","#F7F7F7","#E3E3E3","#C2C2C2","#ACACAC","#E7E7E7","#FFFFFF","#FCFCFC","#F6F6F6","#EAEAEA","#D9D9D9","#C3C3C3","rgba(195,195,195,0)","rgba(0,0,0,0)"],[0,0.02,0.075,0.157,0.259,0.314,0.596,0.733,0.831,0.871,0.894,0.914,0.933,0.933,1],36.9,22.4,-34.9,-21.1).s().p("ApdCUIHJrxILyHJInKLyg");
	this.shape_1.setTransform(60.6,60.6);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_25, new cjs.Rectangle(28.5,28.5,64.2,64.2), null);


(lib.ClipGroup_5_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkDD9QhshwAAiNQAAiXBshsQBshsCXAAQCYAABsBsQBsBrAACYQAACYhsBsQhsBsiYAAQiUAAhvhzg");
	mask.setTransform(73.6,73.6);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#D32D3E","#D22D3E","#CB2D3C","#C92D3B","#B82B34","#B42B33","#AA2A2F","#A2292C","#992929","#75221C"],[0,0.047,0.051,0.082,0.161,0.439,0.502,0.694,0.835,1,1],26.2,26.2,-32.3,-32.3).s().p("ArfAAILfrfILgLfIrgLgg");
	this.shape.setTransform(73.6,73.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_11, new cjs.Rectangle(36.8,36.8,73.6,73.6), null);


(lib.ClipGroup_4_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj9D+QhphpAAiVQAAiUBphpQBphqCUAAQCVAABpBqQBqBpAACUQAACVhqBpQhpBqiVAAQiUAAhphqg");
	mask.setTransform(70.3,70.3);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#D32D3E","#C42C39","#9D292B","#992929","#75221C"],[0,0.514,0.671,0.973,1,1],-23,-31.3,33.7,45.6).s().p("Aq+hpIMopVIJVMoIsoJVg");
	this.shape.setTransform(70.3,70.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_11, new cjs.Rectangle(34.4,34.4,71.9,71.9), null);


(lib.ClipGroup_3_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj5D6QhnhnAAiTQAAiRBnhoQBohnCRAAQCTAABnBnQBnBoAACRQAACThnBnQhnBniTAAQiRAAhohng");
	mask.setTransform(69,69);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#D32D3E","#C42C39","#9D292B","#992929","#75221C"],[0,0.224,0.475,0.957,1,1],-22.5,-30.6,33.1,44.9).s().p("AqxhnIMapKIJJMaIsZJJg");
	this.shape.setTransform(69,69);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_11, new cjs.Rectangle(33.7,33.7,70.6,70.6), null);


(lib.ClipGroup_2_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgxAJQgHgHADgPIATAAQABAMAJgEQAFgBAFgHIARAAQgLAUgUAGIgJABQgHAAgFgFgAAXgNIAgAAIgKAFIgKABQgIAAgEgGg");
	mask.setTransform(7.2,6.4);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(195,195,195,0)","#C3C3C3","#A8A8A8","#888887","#636361","#3A3A38","#1C1C1A","#1C1C1A"],[0,0.933,0.933,0.949,0.961,0.976,0.988,0.992,1],33.4,20.2,-38.3,-23.2).s().p("AhGAIIAthJIBgA6IgtBJg");
	this.shape.setTransform(7.1,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#FFFFFF","#F7F7F7","#E3E3E3","#C2C2C2","#ACACAC","#E7E7E7","#FFFFFF","#FCFCFC","#F6F6F6","#EAEAEA","#D9D9D9","#C3C3C3","rgba(195,195,195,0)","rgba(0,0,0,0)"],[0,0.02,0.075,0.157,0.259,0.314,0.596,0.733,0.831,0.871,0.894,0.914,0.933,0.933,1],33.4,20.2,-38.3,-23.2).s().p("AhGAIIAthJIBgA6IgtBJg");
	this.shape_1.setTransform(7.1,6.6);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_11, new cjs.Rectangle(1.7,5,11,2.8), null);


(lib.ClipGroup_1_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhhBGQgHgJAEgPQADgRALgNQALgNAPgEIAIgBQALAAAEAHQAEAIgCAOQgDAOgIALQgIAMgLAGgAhAAQQgMAEgFAVQgDAQAJAAIADgBQANgDAEgUQACgLgDgEQgBAAAAgBQAAAAgBgBQgBAAAAAAQgBAAgBAAIgDAAgAiHBGQAFgFACgLQACgKgEgEQgCgDgFABQgNAFgEATIgBAIIgTAAIAAgCQAEgRALgOQALgNAOgEIAJgCQAKAAAFAJQAEAIgDAOQgCAKgGALgAgbgLIAWgHIACAqIAVgzIAWgHIgnBVIgWAIgAAyglIAsgNIgEATIgXAJIgCAJIAUgHIgEATIgUAFIgCAKIAYgJIgFAVIgtAPgAByg5IAqgMIAHgBQAPAAgEARQgDAPgLAHQAIABgCAOQgCAOABACIgWAFIABgKIAAgKQgBgDgGABIgKABIgGAeIgWAGgACPgwIgLADIgDAPIAMgDQAJgDACgIQABgFgFAAIgFABg");
	mask.setTransform(23.8,22.7);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(195,195,195,0)","#C3C3C3","#A8A8A8","#888887","#636361","#3A3A38","#1C1C1A","#1C1C1A"],[0,0.933,0.933,0.949,0.961,0.976,0.988,0.992,1],28.2,17.1,-43.7,-26.4).s().p("AjuAhICdkDIFADDIidEBg");
	this.shape.setTransform(23.9,22.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#FFFFFF","#F7F7F7","#E3E3E3","#C2C2C2","#ACACAC","#E7E7E7","#FFFFFF","#FCFCFC","#F6F6F6","#EAEAEA","#D9D9D9","#C3C3C3","rgba(195,195,195,0)","rgba(0,0,0,0)"],[0,0.02,0.075,0.157,0.259,0.314,0.596,0.733,0.831,0.871,0.894,0.914,0.933,0.933,1],28.2,17.1,-43.7,-26.4).s().p("AjuAhICdkDIFADDIidEBg");
	this.shape_1.setTransform(23.9,22.7);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_11, new cjs.Rectangle(6.3,15.6,35,14.1), null);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(351));

	// Слой 9
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOANIAGAAQAAAIAIAAQAJAAAAgJQABgLgKAAIAAAAIAAgCIAAAAQAJAAAAgKQAAgJgJAAQgHAAgBAJIgFAAQABgGAEgEQADgEAFAAQAGABAEAEQADADAAAGQABAJgHACQAIACAAAKQgBAGgEAEQgDADgHAAQgOABAAgNg");
	this.shape_1.setTransform(160.6,240.1,1.2,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJAWQgDgEgBgFIAGAAQABAIAGAAQADAAADgCQADgDAAgIQAAgLgJAAQgFAAgCAEIgEAAIAAgZIAYAAIAAAEIgUAAIAAAQQAEgDAEAAQAFAAAEADQAEAEAAAIQAAAKgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_2.setTransform(156.3,240.2,1.2,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAFAZIAAgIIgTAAIAAgEIARglIAFAAIgRAlIAOAAIAAgOIAEAAIAAAOIAGAAIAAAEIgGAAIAAAIg");
	this.shape_3.setTransform(151.9,240.1,1.2,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIAVQgFgDAAgHIAAgWQAAgNANAAQANAAAAANIAAAWQAAAOgNAAQgFAAgDgEgAgHgKIAAAVQAAAKAHAAQAJAAAAgKIAAgVQAAgKgJAAQgHAAAAAKg");
	this.shape_4.setTransform(147.5,240.2,1.2,1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIAZIARgsIgRAAIAAAIIgFAAIAAgNIAbAAIAAAFIgQAsg");
	this.shape_5.setTransform(143.2,240.1,1.2,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJAVQgEgDAAgHIAAgWQAAgNANAAQAGAAAEADQAEAEAAAGIAAAWQAAAHgEADQgEAEgGAAQgFAAgEgEgAgHgKIAAAVQAAAKAHAAQAJAAAAgKIAAgVQAAgKgJAAQgHAAAAAKg");
	this.shape_6.setTransform(138.7,240.2,1.2,1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJAVQgEgEAAgGQAAgGAEgFIAKgYIAGAAIgKAWIAEgBQAFAAAEADQAEAEAAAGQAAAHgEAEQgDAEgHAAQgGAAgDgEgAgIALQAAAKAIAAQAIAAAAgKQAAgKgIAAQgIAAAAAKg");
	this.shape_7.setTransform(134.4,240.2,1.2,1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgGAZIAKgWIgEABQgGAAgDgEQgEgDAAgHQAAgOANAAQAOAAAAAOQAAAFgDAFIgMAZgAgIgKQAAAKAIAAQAJAAAAgKQAAgKgJABQgIgBAAAKg");
	this.shape_8.setTransform(129.9,240.1,1.2,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgIAZIAQgsIgQAAIAAAIIgFAAIAAgNIAbAAIAAAFIgRAsg");
	this.shape_9.setTransform(125.7,240.1,1.2,1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIAZIARgsIgRAAIAAAIIgFAAIAAgNIAbAAIAAAFIgQAsg");
	this.shape_10.setTransform(121.3,240.1,1.2,1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAFAZIAAgIIgTAAIAAgEIARglIAFAAIgRAlIAOAAIAAgOIAEAAIAAAOIAGAAIAAAEIgGAAIAAAIg");
	this.shape_11.setTransform(116.8,240.1,1.2,1.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgJAVQgEgDAAgHIAAgWQAAgGAEgEQAEgDAFAAQAGAAAEADQAEAEAAAGIAAAWQAAAHgEADQgEAEgGAAQgFAAgEgEgAgIgKIAAAVQAAAKAIAAQAIAAAAgKIAAgVQAAgKgIAAQgIAAAAAKg");
	this.shape_12.setTransform(112.4,240.2,1.2,1.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AACAZIAAgrIgIAIIAAgGIAIgIIAFAAIAAAxg");
	this.shape_13.setTransform(107.7,240.1,1.2,1.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAMAZIAAgWIgXAAIAAAWIgFAAIAAgxIAFAAIAAAXIAXAAIAAgXIAFAAIAAAxg");
	this.shape_14.setTransform(100.8,240.1,1.2,1.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgQAZIAAgxIASAAQAHAAAEAEQAEAFAAAGQAAAGgEADQgFAFgGAAIgMAAIAAAUgAgKAAIALAAQALAAAAgJQAAgKgLAAIgLAAg");
	this.shape_15.setTransform(95.5,240.1,1.2,1.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgOAZIAAgxIAdAAIAAAFIgYAAIAAAsg");
	this.shape_16.setTransform(90.6,240.1,1.2,1.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgLAUQgGgFAAgPQAAgOAGgGQAEgEAHAAQAHAAAFAEQAGAGAAAOQAAAPgGAFQgGAFgGAAQgHAAgEgFgAgIgQQgDADAAANQAAAOADADQADADAFAAQAFAAAEgDQADgEAAgNQAAgMgDgEQgEgEgFAAQgFAAgDAEg");
	this.shape_17.setTransform(85.1,240.2,1.2,1.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgJAWQgDgEgBgFIAFAAQACAIAGAAQADAAADgCQADgDAAgIQAAgLgJAAQgFAAgCAEIgEAAIAAgZIAYAAIAAAEIgUAAIAAAQQAEgDAEAAQAFAAAEADQAEAEAAAIQAAAKgEAEQgFADgFAAQgFAAgEgDg");
	this.shape_18.setTransform(78.1,240.2,1.2,1.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AACAZIAAgrIgIAIIAAgGIAIgIIAFAAIAAAxg");
	this.shape_19.setTransform(73.4,240.1,1.2,1.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgJAVQgEgDAAgHIAAgWQAAgNANAAQAGAAAEADQAEAEAAAGIAAAWQAAAHgEADQgEAEgGAAQgFAAgEgEgAgIgKIAAAVQAAAKAIAAQAJAAAAgKIAAgVQAAgKgJAAQgIAAAAAKg");
	this.shape_20.setTransform(69.3,240.2,1.2,1.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgNAZIAAgEIATgYQADgEAAgEQAAgIgJAAQgIgBAAAJIgFAAQAAgFAEgEQAEgEAFAAQAOAAAAANQAAAFgEAFIgRAWIAVAAIAAAEg");
	this.shape_21.setTransform(65,240.1,1.2,1.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AACAZIAAgrIgIAIIAAgGIAIgIIAFAAIAAAxg");
	this.shape_22.setTransform(60.2,240.1,1.2,1.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgJAWQgEgEAAgFIAFAAQABAIAHAAQADAAADgCQACgDAAgIQAAgLgIAAQgGAAgBAEIgFAAIAAgZIAYAAIAAAEIgTAAIAAAQQADgDAFAAQAEAAAEADQAFAEAAAIQAAAKgEAEQgFADgFAAQgGAAgDgDg");
	this.shape_23.setTransform(56.2,240.2,1.2,1.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAFAZIAAgIIgUAAIAAgEIARglIAGAAIgRAlIAOAAIAAgOIAEAAIAAAOIAHAAIAAAEIgHAAIAAAIg");
	this.shape_24.setTransform(51.7,240.1,1.2,1.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgJAVQgEgDAAgHIAAgWQAAgGAEgEQAEgDAFAAQAGAAAEADQAEAEAAAGIAAAWQAAAHgEADQgEAEgGAAQgFAAgEgEgAgIgKIAAAVQAAAKAIAAQAIAAAAgKIAAgVQAAgKgIAAQgIAAAAAKg");
	this.shape_25.setTransform(47.4,240.2,1.2,1.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgIAZIAQgsIgQAAIAAAIIgFAAIAAgNIAbAAIAAAFIgQAsg");
	this.shape_26.setTransform(43.1,240.1,1.2,1.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgIAZIARgsIgRAAIAAAIIgFAAIAAgNIAbAAIAAAFIgQAsg");
	this.shape_27.setTransform(38.7,240.1,1.2,1.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAMAZIAAgWIgXAAIAAAWIgFAAIAAgxIAFAAIAAAXIAXAAIAAgXIAFAAIAAAxg");
	this.shape_28.setTransform(31.4,240.1,1.2,1.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAMAZIAAgWIgXAAIAAAWIgFAAIAAgxIAFAAIAAAXIAXAAIAAgXIAFAAIAAAxg");
	this.shape_29.setTransform(25.6,240.1,1.2,1.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AANAZIAAgnIgZAnIgFAAIAAgxIAGAAIAAAoIAYgoIAFAAIAAAxg");
	this.shape_30.setTransform(19.6,240.1,1.2,1.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgJAVQgFgEAAgGQAAgIAIgDQgHgDAAgIQAAgGAEgEQAEgDAFAAQAGAAAEADQAEAEAAAGQAAAIgHADQAIADAAAIQAAAGgEAEQgFAEgGAAQgFAAgEgEgAgJALQAAAEADADQADADADAAQAKAAAAgKQAAgKgKAAQgJAAAAAKgAgIgLQAAAJAIAAQAJAAAAgJQAAgJgJAAQgIAAAAAJg");
	this.shape_31.setTransform(161.5,231.8,1.2,1.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgCADIAAgFIAFAAIAAAFg");
	this.shape_32.setTransform(156.1,234.3,1.2,1.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AANAWIAAgKIgZAAIAAAKIgFAAIAAgOIAEAAQAFgJAAgOIAAgHIAVAAIAAAeIAFAAIAAAOgAgDgKQAAAKgEAIIAOAAIAAgZIgKAAg");
	this.shape_33.setTransform(152.6,233.3,1.2,1.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgCgHIAFAAIAAAKIgFAFg");
	this.shape_34.setTransform(147.1,235,1.2,1.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAJAZIAAgaIgRAaIgFAAIAAgiIAFAAIAAAaIARgaIAFAAIAAAigAgJgYIAEAAQAAAGAFAAQAFAAABgGIAEAAQAAAJgKAAQgJAAAAgJg");
	this.shape_35.setTransform(143.6,231.8,1.2,1.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgJACIAAgDIASAAIAAADg");
	this.shape_36.setTransform(139.3,232.5,1.2,1.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgNAZIAAgEIATgZQADgDAAgEQAAgJgJAAQgIABAAAIIgFAAQAAgFAEgEQAEgEAFAAQAOAAAAANQAAAFgEAFIgRAWIAVAAIAAAEg");
	this.shape_37.setTransform(135.4,231.7,1.2,1.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAJAZIAAgaIgRAaIgFAAIAAgiIAFAAIAAAaIARgaIAFAAIAAAigAgKgYIAFAAQAAAGAFAAQAFAAAAgGIAFAAQAAAJgKAAQgJAAgBgJg");
	this.shape_38.setTransform(128.7,231.8,1.2,1.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAJARIAAgZIgRAZIgFAAIAAghIAFAAIAAAZIARgZIAFAAIAAAhg");
	this.shape_39.setTransform(123.8,232.7,1.2,1.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAIARIgQgRIAPgQIAFAAIgOAQIAQARgAgNARIAAghIAFAAIAAAQIAAARg");
	this.shape_40.setTransform(119.7,232.7,1.2,1.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgMAAQAAgRAOAAIAGABIAFAFIgDADIgEgDIgEgBQgJAAAAAMQAAANAJAAIAEAAIAEgEIADAEIgFAEIgGABQgOAAAAgSg");
	this.shape_41.setTransform(115.2,232.7,1.2,1.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAIARIAAgPIgQAAIAAAPIgEAAIAAghIAEAAIAAAOIAQAAIAAgOIAGAAIAAAhg");
	this.shape_42.setTransform(110.7,232.7,1.2,1.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAJARIAAgZIgRAZIgFAAIAAghIAFAAIAAAZIARgZIAFAAIAAAhg");
	this.shape_43.setTransform(105.9,232.7,1.2,1.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAUAWIAAgKIgrAAIAAgiIAFAAIAAAeIAOAAIAAgeIAEAAIAAAeIAOAAIAAgeIAFAAIAAAeIAFAAIAAAOg");
	this.shape_44.setTransform(100.3,233.3,1.2,1.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgJAOQgEgFAAgJQAAgIAEgFQADgEAGAAQAGAAAEAEQAEAFAAAIQAAAJgEAFQgEAEgGAAQgGAAgDgEgAgFgKQgDADAAAHQAAAIADADQACACADAAQAEAAACgCQADgDAAgIQAAgHgDgDQgCgCgEAAQgDAAgCACg");
	this.shape_45.setTransform(94.4,232.7,1.2,1.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgQAZIAAgxIASAAQAHAAAEAEQAEAEAAAHQAAAGgEAEQgEAEgHAAIgNAAIAAAUgAgLAAIAMAAQALAAAAgJQAAgKgLAAIgMAAg");
	this.shape_46.setTransform(89.9,231.7,1.2,1.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AANAWIAAgKIgZAAIAAAKIgFAAIAAgOIAEAAQAFgIAAgPIAAgHIAVAAIAAAeIAFAAIAAAOgAgDgKQAAAKgEAIIAPAAIAAgZIgLAAg");
	this.shape_47.setTransform(82.5,233.3,1.2,1.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgNANIADgEQAFAEAFAAQAJAAAAgGQgBgFgGAAIgFAAIAAgEIAFAAQAGAAAAgFQAAgFgIAAQgEAAgEADIgDgEQAFgEAHAAQAMAAAAAKQAAAGgGABQAHACgBAGQAAAEgDADQgEADgFAAQgIAAgGgFg");
	this.shape_48.setTransform(78.1,232.7,1.2,1.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgNAAQAAgRANAAQAOAAAAARIAAABIgWAAQAAAMAJAAQAFAAAEgEIAEADQgGAGgHAAQgOAAAAgSgAgHgHIgBAGIARAAIgBgGQgCgFgGAAQgFAAgCAFg");
	this.shape_49.setTransform(74.1,232.7,1.2,1.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgJAOQgEgEAAgKQAAgJAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAJQAAAKgEAEQgEAEgGAAQgFAAgEgEgAgFgKQgDADAAAHQAAAIADADQADACACAAQADAAADgCQADgDAAgIQAAgHgDgDQgDgCgDAAQgCAAgDACg");
	this.shape_50.setTransform(69.7,232.7,1.2,1.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgNAZIAAgxIAFAAIAAAEQAEgEAFAAQAFAAADADQAFAEAAALQAAAJgFAEQgCADgGAAQgFAAgEgEIAAATgAgIgGQAAAMAIAAQAJAAAAgMQAAgOgJAAQgIAAAAAOg");
	this.shape_51.setTransform(65.3,233.6,1.2,1.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAMAZIAAgsIgXAAIAAAsIgFAAIAAgxIAhAAIAAAxg");
	this.shape_52.setTransform(59.9,231.7,1.2,1.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgCgHIAFAAIAAAKIgFAFg");
	this.shape_53.setTransform(53.8,235,1.2,1.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgKAPQgDgDAAgEQAAgJAMAAIAKAAIAAgEQAAgHgJAAQgFAAgDAEIgDgDQAEgGAHAAQAOAAAAAMIAAAWIgFAAIAAgDQgEAEgFAAQgHAAgDgDgAgIAIQAAAFAIAAQAFAAACgCQACgCAAgEIAAgEIgJAAQgIAAAAAHg");
	this.shape_54.setTransform(50.3,232.7,1.2,1.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgMARIAAghIAPAAQAKAAAAAJQAAAGgGABQAGACAAAGQAAAJgKAAgAgHANIAJAAQAGAAAAgGQAAgFgGAAIgJAAgAgHgCIAJAAQAGAAAAgFQAAgFgGAAIgJAAg");
	this.shape_55.setTransform(46.1,232.7,1.2,1.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAHARIgPgRIAPgQIAGAAIgPAQIAQARgAgNARIAAghIAFAAIAAAQIAAARg");
	this.shape_56.setTransform(42,232.7,1.2,1.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgMAAQAAgRAOAAIAGABQADABACAEIgDADIgEgDIgEgBQgJAAAAAMQAAANAJAAIAEAAIAEgEIADAEIgFAEIgGABQgOAAAAgSg");
	this.shape_57.setTransform(37.6,232.7,1.2,1.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgJAOQgEgFAAgJQAAgIAEgFQAEgEAFAAQAGAAAEAEQAEAEAAAJQAAAKgEAEQgEAEgGAAQgFAAgEgEgAgFgKQgDADAAAHQAAAIADADQADACACAAQAEAAACgCQADgDAAgIQAAgHgDgDQgCgCgEAAQgCAAgDACg");
	this.shape_58.setTransform(33.2,232.7,1.2,1.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAQAZIAAglIgNAdIgEAAIgOgdIAAAlIgFAAIAAgxIAFAAIAPAjIAQgjIAGAAIAAAxg");
	this.shape_59.setTransform(27.6,231.7,1.2,1.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgCADIAAgFIAFAAIAAAFg");
	this.shape_60.setTransform(20.9,234.3,1.2,1.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgKARIAAghIAVAAIAAAEIgQAAIAAAdg");
	this.shape_61.setTransform(18.7,232.7,1.2,1.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgCgHIAFAAIAAAKIgFAFg");
	this.shape_62.setTransform(126.9,226.6,1.2,1.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgGAZIAKgWIgEAAQgGAAgDgDQgEgEAAgFQAAgHAEgEQAEgEAFAAQAOAAAAAOQAAAFgDAGIgLAYgAgIgJQAAAJAIAAQAJAAAAgJQAAgLgJAAQgIAAAAALg");
	this.shape_63.setTransform(123.6,223.3,1.2,1.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AACAZIAAgrIgIAIIAAgGIAIgIIAFAAIAAAxg");
	this.shape_64.setTransform(118.9,223.3,1.2,1.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAEAZIAAgIIgSAAIAAgFIARgkIAFAAIgRAkIANAAIAAgMIAFAAIAAAMIAGAAIAAAFIgGAAIAAAIg");
	this.shape_65.setTransform(114.9,223.3,1.2,1.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgJAWQgEgFAAgEIAFAAQABAIAHAAQADAAADgCQADgEAAgHQAAgLgJAAQgGAAgBAEIgFAAIAAgZIAZAAIAAAEIgUAAIAAAQQADgDAFAAQAFAAAEADQAEAEAAAIQAAAKgEAEQgFADgFAAQgGAAgDgDg");
	this.shape_66.setTransform(110.5,223.4,1.2,1.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AACAZIAAgrIgIAIIAAgGIAIgIIAFAAIAAAxg");
	this.shape_67.setTransform(105.8,223.3,1.2,1.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AACAZIAAgrIgIAIIAAgGIAIgIIAFAAIAAAxg");
	this.shape_68.setTransform(101.4,223.3,1.2,1.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AABAJIAIgJIgIgHIAAgHIAOAOIgOAPgAgOAJIAIgJIgIgHIAAgHIAOAOIgOAPg");
	this.shape_69.setTransform(95.2,224.1,1.2,1.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgCADIAAgFIAFAAIAAAFg");
	this.shape_70.setTransform(91.6,225.9,1.2,1.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgOAZIAAgxIAdAAIAAAFIgXAAIAAAsg");
	this.shape_71.setTransform(88.4,223.3,1.2,1.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgCADIAAgFIAFAAIAAAFg");
	this.shape_72.setTransform(84.6,225.9,1.2,1.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AAMAZIAAgWIgXAAIAAAWIgFAAIAAgxIAFAAIAAAWIAXAAIAAgWIAFAAIAAAxg");
	this.shape_73.setTransform(80.5,223.3,1.2,1.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgCADIAAgFIAFAAIAAAFg");
	this.shape_74.setTransform(76.4,225.9,1.2,1.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgLAUQgGgFAAgPQAAgOAGgGQAEgEAHAAQAPAAACAOIgFAAQgDgKgJAAQgEAAgEAEQgDAEAAAMQAAANADAEQAEADAEAAQAJAAADgKIAFAAQgCAPgPAAQgHAAgEgFg");
	this.shape_75.setTransform(72.7,223.4,1.2,1.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AANAZIAAgnIgZAnIgFAAIAAgxIAGAAIAAAoIAYgoIAFAAIAAAxg");
	this.shape_76.setTransform(64.8,223.3,1.2,1.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAQAfIAAgMIggAAIAAAMIgFAAIAAgQIAEAAQAHgKgBgSIAAgRIAbAAIAAAtIAGAAIAAAQgAgFgKQgBAQgFAJIAVAAIAAgoIgPAAg");
	this.shape_77.setTransform(58.9,224.1,1.2,1.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAMAZIAAgWIgXAAIAAAWIgFAAIAAgxIAFAAIAAAWIAXAAIAAgWIAFAAIAAAxg");
	this.shape_78.setTransform(53.1,223.3,1.2,1.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AAPAZIgEgLIgVAAIgEALIgGAAIASgxIAEAAIATAxgAgJAJIASAAIgJgZg");
	this.shape_79.setTransform(47.7,223.3,1.2,1.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AALAZIgWgZIAUgYIAHAAIgVAYIAXAZgAgRAZIAAgxIAGAAIAAAYIAAAZgAgLAAg");
	this.shape_80.setTransform(42.8,223.3,1.2,1.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AABAAIAOgOIAAAHIgIAHIAIAJIAAAGgAgOAAIAOgOIAAAHIgIAHIAIAJIAAAGg");
	this.shape_81.setTransform(37.3,224.1,1.2,1.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgLAUQgFgFgBgPQABgOAFgGQAEgEAHAAQAIAAAFAEQAEAGAAAOQAAAPgEAFQgGAFgHAAQgHAAgEgFgAgIgQQgDADAAANQAAAOADADQAEADAEAAQAFAAADgDQAEgDAAgOQAAgNgEgDQgDgEgFAAQgEAAgEAEg");
	this.shape_82.setTransform(30.3,223.4,1.2,1.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgMAUQgEgFAAgPQAAgOAEgGQAFgEAHAAQAIAAAEAEQAFAGABAOQgBAPgFAFQgEAFgIAAQgGAAgGgFgAgHgQQgEADAAANQAAAOAEADQADADAEAAQAFAAAEgDQADgDAAgOQAAgNgDgDQgEgEgFAAQgEAAgDAEg");
	this.shape_83.setTransform(24.8,223.4,1.2,1.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgLAUQgGgFAAgPQAAgOAGgGQAEgEAHAAQAIAAAFAEQAEAGAAAOQAAAPgEAFQgGAFgHAAQgHAAgEgFgAgIgQQgDADAAANQAAAOADADQADADAFAAQAFAAADgDQAEgEAAgNQAAgMgEgEQgDgEgFAAQgFAAgDAEg");
	this.shape_84.setTransform(19.3,223.4,1.2,1.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#494948").s().p("AgYAZQgLgKAAgPQAAgOALgKQAJgKAPgBQAPAAALALQAKAKAAAOQAAAPgKAKQgLALgPAAQgOAAgKgLgAgVgVQgIAJgBAMQAAANAJAJQAJAJAMAAQANAAAJgJQAJgJAAgNQAAgLgJgKQgJgJgNAAQgLAAgKAJgAAKAUIAAgGQgBgGgDgDQgCgBgFAAIgGAAIAAAQIgHAAIAAgnIAOAAQAHAAADACQAGACABAIQAAAFgFACIgFACQAEAAACADQACADABAEIAAAFIAAACIABABgAgHAAIAHAAIAFgBQAFgBAAgFQgBgEgCgCQgDgBgEAAIgHAAg");
	this.shape_85.setTransform(275.4,223.8);

	this.instance = new lib.ClipGroup_25();
	this.instance.parent = this;
	this.instance.setTransform(242.8,190.9,1,1,0,0,0,60.6,60.6);

	this.instance_1 = new lib.ClipGroup_1_11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(253.8,192.2,1,1,0,0,0,23.9,22.7);

	this.instance_2 = new lib.ClipGroup_2_11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(241.4,200.8,1,1,0,0,0,7,6.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AjiDjQheheAAiFQAAiEBeheQBeheCEAAQCFAABeBeQBeBeAACEQAACFheBeQheBeiFAAQiEAAhehegAhEAaIhADxQA/AgBFAAQB8AABXhXQBYhYAAh8QAAgtgNgogAkbBfQARAyAiAqQAhAqAuAbIA7jeIhNAZIgXBWIgaAHIAXhUgAj0irQg2BNAABeQAAAoALAoIBegdIBZlKQhWAgg2BMgAhOkgIhZFKIBOgZIA0jDIAagHIg0DCIFZhtQgghXhMg3QhOg4hgAAQgoAAgmAKg");
	this.shape_86.setTransform(242.1,191.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AhhBHQgGgIADgRQADgRALgNQALgNAPgEQAOgEAHAHQAHAIgDARQgDAOgIAMQgIALgLAHgAhAARQgMAEgFATQgDAVAMgEQANgEAEgUQACgLgDgEQAAAAgBgBQAAAAgBAAQgBgBAAAAQgBAAAAAAIgEABgAiHBHQAFgGACgKQACgLgEgEQgCgDgFACQgFABgEAFQgGAGgCALIgBAJIgTAAIAAgDQAEgRALgNQALgOAOgEQAPgEAHAIQAHAIgDARQgDAMgGAKgAgbgLIAWgGIACApIAAAAIAVgyIAWgHIgmBUIgXAIgAAyglIAsgNIgEATIgXAJIgCAJIAUgHIgEATIgTAFIgCAKIAXgJIgEAWIgtAOgABzg5IApgLQAKgDAFAEQAFAEgCAKQgDAOgLAIQAIABgCAPQgCANABACIgVAFIAAgKIABgJQgCgEgFABIgKABIgHAeIgWAGgACPgwIgLADIgDAPIAMgDQAJgDACgHQABgGgFAAIgFABg");
	this.shape_87.setTransform(253,192.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgxAJQgHgHADgPIATAAQABAKAJgCQAGgCAEgGIARAAQgLAUgUAGIgJABQgHAAgFgFgAAXgNIAgAAIgKAFIgJABQgIAAgFgGg");
	this.shape_88.setTransform(240.9,200.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#75221E").s().p("AjiDjQheheAAiFQAAiEBeheQBeheCEAAQCFAABeBeQBeBeAACEQAACFheBeQheBeiFAAQiEAAhehegAhEAaIhADyQA+AfBGAAQB8AABXhYQBYhXAAh8QAAgugNgngAkbBeQARAzAiAqQAhAqAuAbIA7jdIhNAYIgXBWIgaAIIAXhWgAjzirQg3BNAABeQAAAqALAmIBegeIBZlJQhWAgg1BMgAhOkgIhYFKIBNgZIA0jCIAagIIg0DCIFZhtQgghYhMg2QhOg4hgAAQglAAgpAKg");
	this.shape_89.setTransform(242.9,191.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#75221E").s().p("AhhBHQgGgIADgRQADgQALgOQALgNAPgEQAOgEAHAHQAHAIgDARQgGAegYAOgAhAARQgMAEgFAUQgCALAEAEQACADAFgCQANgEAEgUQADgRgIAAIgEABgAiHBHQAFgFACgLQACgLgEgEQgCgDgFACQgNAEgEAUIgBAIIgTAAIAAgDQAEgRALgNQALgNAPgFQAOgEAHAIQAHAIgDARQgDAMgGAKgAgbgLIAWgGIACApIAAAAIAVgyIAWgHIgmBUIgXAIgAAyglIAsgNIgEATIgXAJIgCAJIAUgHIgEATIgTAFIgCAKIAXgJIgEAWIgtAOgABzg5IApgLQAKgDAFAEQAFAEgCAKQgDAPgLAHQAJABgDAPIgBAPIgVAFIAAgKIABgJQgCgEgFABIgKABIgHAeIgWAGgACPgwIgKADIgEAPIAMgDQAJgCACgIQABgGgGAAIgEABg");
	this.shape_90.setTransform(253.8,192.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#75221E").s().p("AgxAJQgHgHADgPIATAAQAAALAKgDQAFgBAFgHIARAAQgLAUgUAGIgJABQgHAAgFgFgAAWgNIAhAAIgLAFIgJABQgIAAgFgGg");
	this.shape_91.setTransform(241.8,201.3);

	this.instance_3 = new lib.ClipGroup_3_11();
	this.instance_3.parent = this;
	this.instance_3.setTransform(242.2,190.6,1,1,0,0,0,69,69);

	this.instance_4 = new lib.ClipGroup_4_11();
	this.instance_4.parent = this;
	this.instance_4.setTransform(242.2,190.6,1,1,0,0,0,70.3,70.3);

	this.instance_5 = new lib.ClipGroup_5_11();
	this.instance_5.parent = this;
	this.instance_5.setTransform(242.2,190.6,1,1,0,0,0,73.6,73.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AqFJNIE/yZIPMAAIAASZg");
	this.shape_92.setTransform(235,190.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_92},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(351));

	// uznat
	this.instance_6 = new lib.uznat();
	this.instance_6.parent = this;
	this.instance_6.setTransform(211.9,25.7,1,1,0,0,0,51.5,11);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(293).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(1)).wait(44).to({alpha:0},5,cjs.Ease.get(1)).wait(1));

	// t6
	this.instance_7 = new lib.t6();
	this.instance_7.parent = this;
	this.instance_7.setTransform(225.8,79.7,1,1,0,0,0,54.2,30.4);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(285).to({_off:false},0).to({x:215.8,alpha:1},8,cjs.Ease.get(1)).wait(52).to({alpha:0},5,cjs.Ease.get(1)).wait(1));

	// t5
	this.instance_8 = new lib.t5();
	this.instance_8.parent = this;
	this.instance_8.setTransform(230.8,80.1,1,1,0,0,0,59.2,28.4);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(228).to({_off:false},0).to({x:220.8,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:210.8,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(57));

	// t4
	this.instance_9 = new lib.t4();
	this.instance_9.parent = this;
	this.instance_9.setTransform(225.5,71.1,1,1,0,0,0,54.5,19.4);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(171).to({_off:false},0).to({x:215.5,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:205.5,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(114));

	// t3
	this.instance_10 = new lib.t3();
	this.instance_10.parent = this;
	this.instance_10.setTransform(224.2,71.1,1,1,0,0,0,80.8,19.4);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(114).to({_off:false},0).to({x:214.2,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:204.2,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(171));

	// t2
	this.instance_11 = new lib.t2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(204.7,72.2,1,1,0,0,0,85.3,17.6);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(57).to({_off:false},0).to({x:194.7,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:184.7,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(228));

	// t1
	this.instance_12 = new lib.t1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(218.9,80.1,1,1,0,0,0,71,28.4);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({x:208.9,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:198.9,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(285));

	// 6.jpg
	this.instance_13 = new lib.p6();
	this.instance_13.parent = this;
	this.instance_13.setTransform(160,105,1,1,0,0,0,150,125);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(285).to({_off:false},0).to({x:150,y:125,alpha:1},8,cjs.Ease.get(1)).wait(52).to({alpha:0},5,cjs.Ease.get(1)).wait(1));

	// 5.jpg
	this.instance_14 = new lib.p5();
	this.instance_14.parent = this;
	this.instance_14.setTransform(160,105,1,1,0,0,0,150,125);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(228).to({_off:false},0).to({x:150,y:125,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:140,y:145,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(57));

	// 4.jpg
	this.instance_15 = new lib.p4();
	this.instance_15.parent = this;
	this.instance_15.setTransform(160,105,1,1,0,0,0,150,125);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(171).to({_off:false},0).to({x:150,y:125,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:140,y:145,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(114));

	// 3.jpg
	this.instance_16 = new lib.p3();
	this.instance_16.parent = this;
	this.instance_16.setTransform(160,105,1,1,0,0,0,150,125);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(114).to({_off:false},0).to({x:150,y:125,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:140,y:145,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(171));

	// 2.jpg
	this.instance_17 = new lib.p2();
	this.instance_17.parent = this;
	this.instance_17.setTransform(160,105,1,1,0,0,0,150,125);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(57).to({_off:false},0).to({x:150,y:125,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:140,y:145,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(228));

	// 1.jpg
	this.instance_18 = new lib.p1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(160,105,1,1,0,0,0,150,125);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({x:150,y:125,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:140,y:145,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(285));

	// Слой 8
	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_93.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_93).wait(351));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.5,105,316.3,284.2);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/300x250_atlas_.png", id:"300x250_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;