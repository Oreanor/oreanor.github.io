(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x600_atlas_", frames: [[302,602,300,600],[302,0,300,600],[0,1204,300,600],[0,602,300,600],[0,0,300,600],[302,1204,300,600]]}
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
	this.spriteSheet = ss["300x600_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["300x600_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["300x600_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["300x600_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
	this.spriteSheet = ss["300x600_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._6 = function() {
	this.spriteSheet = ss["300x600_atlas_"];
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
	this.shape.graphics.f("#DC082A").s().p("AgjA4IAAhuIBGAAIAAAQIgxAAIAAAbIAjAAIAAAPIgjAAIAAAiIAwAAIAAASg");
	this.shape.setTransform(135.7,15.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DC082A").s().p("Ag8A4IAAhuIATAAIAABdIAhAAIAAhdIASAAIAABdIAgAAIAAhdIATAAIAABug");
	this.shape_1.setTransform(123.8,15.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DC082A").s().p("AglA4IAAhuIAUAAIAAApIAPgBQATAAAKAJQALAJAAARQAAAQgLAJQgLAKgSAAgAgRACIAAAlIALAAQAYAAAAgTQAAgJgGgFQgGgFgLAAg");
	this.shape_2.setTransform(112.1,15.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DC082A").s().p("AguAmQAGAAADgCQAEgBAEgFQAEgEAEgOQAEgMAEgUIAFgjIA3AAIAABuIgTAAIAAhdIgVAAQgDAUgEAWQgFAWgGAJQgHANgIADQgIAFgMAAg");
	this.shape_3.setTransform(101.3,16);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DC082A").s().p("AgjAqQgMgQAAgaQAAgXAMgRQAOgQAVAAQAYAAAMAOQAMAPAAAbQAAAbgNAPQgNAPgXAAQgWAAgMgPgAgUgcQgHALAAARQAAATAHALQAGAKANAAQAOAAAHgKQAIgLAAgTQAAgngcAAQgMAAgIALg");
	this.shape_4.setTransform(90.9,15.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DC082A").s().p("AglA4IAAhuIBDAAIAAAQIgvAAIAAAbIAOgBQATAAALAJQALAIAAAQQAAAQgLAJQgLAKgTAAgAgRADIAAAkIALAAQALAAAHgEQAFgFAAgJQAAgJgFgEQgFgFgMAAg");
	this.shape_5.setTransform(81,15.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DC082A").s().p("AglA4IAAhuIAUAAIAAApIAPgBQATAAALAJQAKAJAAARQAAAQgKAJQgMAKgSAAgAgRACIAAAlIALAAQAYAAAAgTQAAgJgGgFQgGgFgLAAg");
	this.shape_6.setTransform(67,15.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DC082A").s().p("AgKA4IAAheIgjAAIAAgQIBbAAIAAAQIglAAIAABeg");
	this.shape_7.setTransform(57,15.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DC082A").s().p("AAbA5IgIgXIglAAIgIAXIgWAAIAthxIAHAAIAtBxgAgMATIAZAAIgNgog");
	this.shape_8.setTransform(47,15.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DC082A").s().p("AAWA4IAAgzIgrAAIAAAzIgUAAIAAhuIAUAAIAAArIArAAIAAgrIAUAAIAABug");
	this.shape_9.setTransform(36.7,15.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DC082A").s().p("AglAxIAJgRQAMAJAOAAQAIAAAGgFQAGgFAAgIQAAgKgHgFQgGgFgMAAIgLABIAAgQIAMABQAKAAAEgEQAGgEAAgIQAAgGgFgDQgEgEgHAAQgKAAgOAHIgGgQQAPgHAQAAQAQAAAKAHQAJAIAAANQAAAJgFAGQgDAGgIADQAKAEAFAGQAFAGAAALQAAAQgLAJQgLAJgTAAQgUAAgOgIg");
	this.shape_10.setTransform(27,15.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DC082A").s().p("AglAmIADAAQAKAAAGgEQAHgEAEgGIgnhPIAVAAIAdA/QANgZAKgmIAUAAQgKAigOAbQgOAdgMAKQgNALgVAAg");
	this.shape_11.setTransform(18,16);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ar1CKIgBgYIA6jjIALgXQASgYAfAAIVHAAQAlAAAIAbQAFAOgEAOIhCDqQgDAIgJAIQgRAPgdAAI1IABQgfAAgHgXg");
	this.shape_12.setTransform(75.9,16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.uznat, new cjs.Rectangle(0,0,151.8,32.3), null);


(lib.t6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAmBRIgLghIg2AAIgKAhIggAAIA/igIAMAAIBACggAgTAbIAlAAIgSg6g");
	this.shape.setTransform(126.1,54.6,0.9,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgDBRIghhXIgRBUIgbAAIAgieIAPAAIAhBrIAihrIAPAAIAgCeIgbAAIgRhUIgfBXg");
	this.shape_1.setTransform(111.9,54.8,0.9,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag0A8QgQgWAAgmQAAgjASgXQASgXAgAAQAhAAASAVQASAUAAAoQAAAlgTAXQgTAWgiAAQggAAgRgWgAgegpQgKAPAAAaQAAAaAKAQQAJAPASAAQAVAAALgPQALgOAAgcQAAg4goAAQgTAAgLAPg");
	this.shape_2.setTransform(97.1,54.8,0.9,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA0BnIAAguIhnAAIAAAuIgZAAIAAhGIALAAQANgQANgdQAOgfALg7IBJAAIAACHIASAAIAABGgAgLgOQgLAdgNASIBDAAIAAhvIgcAAQgEAigLAeg");
	this.shape_3.setTransform(82.7,56.8,0.9,0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag0A8QgRgWAAgmQAAgjATgXQASgXAgAAQAhAAASAVQATAVAAAnQgBAlgSAXQgUAWghAAQghAAgRgWgAgdgpQgKAPAAAaQgBAaAKAQQAJAPATAAQAUAAALgPQALgOAAgcQAAg4goAAQgTAAgKAPg");
	this.shape_4.setTransform(62.4,54.8,0.9,0.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgxBQIAAifIBjAAIAAAaIhGAAIAACFg");
	this.shape_5.setTransform(50.3,54.7,0.9,0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgyBQIAAifIBlAAIAAAaIhJAAIAAAlIA0AAIAAAXIg0AAIAAAwIBHAAIAAAZg");
	this.shape_6.setTransform(38.9,54.7,0.9,0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhWBQIAAifIAbAAIAACHIAvAAIAAiHIAaAAIAACHIAuAAIAAiHIAbAAIAACfg");
	this.shape_7.setTransform(23.5,54.7,0.9,0.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAnBRIgMghIg2AAIgLAhIgfAAIBAigIALAAIBACggAgTAbIAlAAIgSg6g");
	this.shape_8.setTransform(7.9,54.6,0.9,0.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag1BQIAAieIAtgBQAYAAAOAKQAOAMAAATQAAASgUAMQAeAJAAAgQAAAWgRANQgQAMgZAAgAgYAEIAAA1IAOABQAQAAAJgGQAJgGAAgQQAAgOgIgGQgHgGgTAAgAgYg3IAAAmIANABQAbAAAAgVQAAgTgYAAIgQABg");
	this.shape_9.setTransform(-4.2,54.7,0.9,0.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPBPIAAiFIgyAAIAAgZICDAAIAAAZIg1AAIAACFg");
	this.shape_10.setTransform(100.2,31.1,0.9,0.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag0BQIAAieIAhgBQAmAAAQALQASAMAAAYQAAA2hAAAIgMgBIAAA7gAgXg1IAAAyIALABQATAAAIgGQAJgHAAgPQAAgYgnAAIgIABg");
	this.shape_11.setTransform(88.2,31.1,0.9,0.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag0A8QgRgXAAgmQAAggATgZQATgYAfABQAhgBATAWQARAVABAmQgBAngSAWQgTAWgiAAQghAAgRgWgAgdgpQgKAPAAAZQAAAdAJAPQAKAOASAAQAVAAAKgOQALgQAAgcQAAg3goAAQgTAAgKAPg");
	this.shape_12.setTransform(74.9,31.1,0.9,0.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgNBUIAAgRQgegCgSgSQgRgRAAgeQAAgbASgSQARgSAegCIAAgSIAbAAIAAASQAfACAQASQASARAAAcQAAAbgSATQgSATgdACIAAARgAANAuQAUgDAJgLQAKgNAAgTQAAgSgKgMQgKgMgTgDgAgqgeQgKAMAAASQAAAUALAMQALAMASACIAAhbQgTACgLANg");
	this.shape_13.setTransform(60,31,0.9,0.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgEBQIgghWIgRBVIgbAAIAgifIAPAAIAhBrIAihrIAPAAIAgCfIgbAAIgRhVIggBWg");
	this.shape_14.setTransform(44.3,31.2,0.9,0.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag0A8QgRgXAAgmQAAgiATgXQATgYAfABQAhgBATAWQARAVAAAmQAAAmgTAXQgSAWgiAAQghAAgRgWgAgdgpQgKAOAAAaQAAAdAJAPQAJAOATAAQATAAAMgOQALgPAAgdQAAg3goAAQgTAAgKAPg");
	this.shape_15.setTransform(29.5,31.1,0.9,0.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAaBJQgHgGgDgRQgEgXgLgKQgKgKgTAAIgBAAIAABIIgcAAIAAieIAcAAIAAA/IACAAQATAAAKgIQAKgIADgSQADgQAHgHQAGgHAPAAIAKABIAAAZIgEAAQgGAAgBACQgCABgCAJQgDAPgKAKQgKAKgOADQAQAEAJAKQAJAKAEAVQACAJACADQADACAFAAIAEAAIAAAZIgJABQgOAAgJgIg");
	this.shape_16.setTransform(16.3,31.1,0.9,0.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag9BSIAAihIAdAAIAABqIBShsIAMAAIAACgIgdAAIAAhqIhSBtg");
	this.shape_17.setTransform(-3.5,31.1,0.9,0.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAnBRIgMghIg2AAIgLAhIgfAAIBAihIALAAIBAChgAgTAbIAmAAIgTg6g");
	this.shape_18.setTransform(74.9,7.4,0.9,0.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgPBPIAAiFIgyAAIAAgYICDAAIAAAYIg1AAIAACFg");
	this.shape_19.setTransform(62.1,7.5,0.9,0.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag0A8QgQgWAAgmQAAgjASgXQATgXAfAAQAhAAASAVQASAVAAAnQAAAmgTAWQgSAWgjAAQggAAgRgWgAgdgpQgKAOAAAbQAAAcAJAOQAKAPARAAQAVAAALgPQALgOAAgcQAAg4goAAQgTAAgKAPg");
	this.shape_20.setTransform(48.5,7.5,0.9,0.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgOBPIAAiFIgzAAIAAgYICDAAIAAAYIg1AAIAACFg");
	this.shape_21.setTransform(35,7.5,0.9,0.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgqA8QgRgVgBgmQABgjATgXQAVgYAfAAQAbAAARALIgLAXQgLgJgUAAQgUAAgMARQgNASAAAXQAAAYAMAQQALAPAUAAQAWAAANgQIANAXQgRASghAAQghAAgTgWg");
	this.shape_22.setTransform(22.5,7.5,0.9,0.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag9BSIAAigIAcAAIAABqIBShtIANAAIAACgIgcAAIAAhqIhTBtg");
	this.shape_23.setTransform(9.2,7.5,0.9,0.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAbBPIAAg/QgNAEgOAAQgaAAgOgOQgPgMAAgYIAAgwIAeAAIAAAvQAAANAHAIQAIAHANAAQAMAAAMgDIAAhIIAcAAIAACdg");
	this.shape_24.setTransform(-4.3,7.5,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t6, new cjs.Rectangle(-9.3,0.1,141.7,66), null);


(lib.t5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag2BMIAAgYIADABQAFAAADgEQACgCABgHQAFgZAZgLQgUgEgHgIQgIgKAAgOQAAgRAOgNQAPgNAcgBIAsACIAACWIgbAAIAAg/IgHAAQgQAAgKAIQgIAJgEATQgEAPgGAGQgHAGgMAAIgJAAgAgKgwQgIAFAAALQAAAYAgABIAPAAIAAgtIgTgBQgNgBgHAGg");
	this.shape.setTransform(130.1,59.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag5BOIAAiYIAaAAIAABkIBOhmIALAAIAACXIgaAAIAAhkIhOBng");
	this.shape_1.setTransform(116.4,59.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAeBLIAAhDIg7AAIAABDIgaAAIAAiVIAaAAIAAA6IA7AAIAAg6IAaAAIAACVg");
	this.shape_2.setTransform(101.8,59.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAlBMIgMgeIgyAAIgKAeIgeAAIA8iXIAKAAIA9CXgAgSAZIAkAAIgSg2g");
	this.shape_3.setTransform(88,59.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgyBMIAAiVIArgCQAXAAAMAKQAOAKAAATQAAASgTAKQAcAJAAAeQAAAVgQAMQgPAMgYAAgAgXAEIAAAxIANABQAQAAAIgGQAJgFAAgPQAAgNgHgGQgIgGgSAAgAgXg0IAAAkIANAAQAZAAAAgTQAAgSgXAAg");
	this.shape_4.setTransform(75.3,59.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAuBLIAAiVIAbAAIAACVgAhIBLIAAiVIAaAAIAAA4IATgBQAaAAAOAMQAOALAAAYQAAAVgPANQgNANgaAAgAguACIAAAzIAOAAQAUAAAGgHQAGgJAAgLQAAgMgHgGQgHgHgRAAg");
	this.shape_5.setTransform(59.9,59.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgnA5QgRgUAAgkQAAghATgWQATgXAdAAQAaAAAQALIgLAWQgJgJgTAAQgUAAgLAQQgLARAAAWQgBAXAMAOQAKAPASAAQAVAAAMgPIANAWQgQARggAAQgfAAgRgVg");
	this.shape_6.setTransform(44.8,59.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAlBMIgLgeIgzAAIgKAeIgeAAIA8iXIALAAIA8CXgAgRAZIAjAAIgSg2g");
	this.shape_7.setTransform(31.6,59.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgnA5QgRgVAAgjQAAggATgXQATgXAeAAQAaAAAPALIgLAWQgJgJgTAAQgUAAgLAQQgLARgBAWQAAAWALAPQALAPATAAQAUAAAMgPIANAWQgPARghAAQgeAAgSgVg");
	this.shape_8.setTransform(18.6,59.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgyBMIAAiVIArgCQAWAAANAKQAOAKAAATQAAASgTAKQAcAIAAAfQAAAVgQAMQgPAMgYAAgAgXAEIAAAxIANABQAQAAAJgGQAIgFAAgPQAAgNgHgGQgIgGgRAAgAgXg0IAAAkIANAAQAZAAAAgTQAAgSgXAAg");
	this.shape_9.setTransform(6.1,59.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgzBLIAAiVIAbAAIAAA4IAVgBQAaAAAOAMQAPAMAAAXQAAAVgPANQgOANgaAAgAgYADIAAAxIAQABQAgAAAAgbQAAgMgIgGQgIgHgPAAg");
	this.shape_10.setTransform(113,33.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgOBLIAAh9IgvAAIAAgYIB7AAIAAAYIgyAAIAAB9g");
	this.shape_11.setTransform(99.5,33.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgnA5QgRgVAAgjQAAggATgXQATgXAeAAQAZAAAQALIgLAWQgJgJgUAAQgTAAgLAQQgLAQAAAXQAAAXAKAOQALAPASAAQAWAAALgPIANAWQgQARggAAQgeAAgSgVg");
	this.shape_12.setTransform(86.4,33.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgwA5QgQgWAAgjQAAggARgWQASgXAdAAQAfAAASAUQARAUAAAlQgBAjgRAWQgSAVggAAQgfAAgPgVgAgcgnQgJAPAAAYQAAAaAJAOQAJAOARAAQASAAALgOQALgOAAgaQAAg1gmAAQgSAAgKAOg");
	this.shape_13.setTransform(72.5,33.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAeBLIAAhEIg7AAIAABEIgaAAIAAiVIAaAAIAAA6IA7AAIAAg6IAaAAIAACVg");
	this.shape_14.setTransform(57.9,33.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ABDBhIAAgsIicAAIAAiVIAZAAIAAB/IAsAAIAAh/IAZAAIAAB/IArAAIAAh/IAZAAIAAB/IARAAIAABCg");
	this.shape_15.setTransform(41.2,36);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgwA5QgRgWABgjQAAggARgWQASgXAdAAQAfAAARAUQASAUgBAlQAAAjgRAWQgSAVggAAQgeAAgQgVgAgbgnQgKAPAAAYQAAAaAJAOQAKAOAQAAQATAAAKgOQALgOAAgaQAAg1gmAAQgSAAgJAOg");
	this.shape_16.setTransform(23.2,33.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgDBMIgfhSIgQBQIgZAAIAdiVIAPAAIAfBkIAghkIAOAAIAfCVIgaAAIgQhQIgeBSg");
	this.shape_17.setTransform(7.7,33.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag2BMIAAgXIADAAQAGAAACgEIADgJQAGgaAXgKQgSgEgJgIQgGgKAAgOQAAgSANgMQAQgOAbAAIAsADIAACUIgbAAIAAg+IgGAAQgRAAgJAIQgKAKgDARQgDARgHAFQgGAHgNgBIgJAAgAgKgwQgJAFABALQgBAYAiABIAOAAIAAgtIgTgBQgMgBgIAGg");
	this.shape_18.setTransform(90.4,7.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAkBMIgLgeIgyAAIgLAeIgdAAIA8iXIALAAIA8CXgAgSAZIAjAAIgRg2g");
	this.shape_19.setTransform(77.4,7.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAZBGQgIgHgCgPQgDgWgLgJQgIgKgTAAIgBAAIAABEIgbAAIAAiVIAbAAIAAA7IACAAQARAAAKgHQAJgIADgRQADgOAGgHQAHgHAOAAIAJABIAAAXIgFAAQgEAAgCACQgCACgBAIQgEAOgIAJQgKAKgOADQAQADAIAKQAJAJADAUQACAJADACQABACAGAAIAEAAIAAAYIgJAAQgPAAgGgGg");
	this.shape_20.setTransform(64.3,7.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgxA5QgQgWAAgjQAAggASgWQASgXAdAAQAfAAARAUQASAVAAAkQAAAkgSAVQgSAVggAAQgeAAgRgVgAgbgnQgKAOAAAZQAAAaAJAOQAKAOAQAAQASAAALgOQALgOAAgaQAAg1gmAAQgSAAgJAOg");
	this.shape_21.setTransform(49.9,7.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgnA5QgRgVAAgjQAAggATgXQATgXAeAAQAZAAAQALIgLAWQgJgJgUAAQgTAAgLAQQgLAQAAAXQAAAXAKAOQAMAPARAAQAVAAANgPIAMAWQgQARggAAQgeAAgSgVg");
	this.shape_22.setTransform(36.2,7.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAuBLIAAiVIAbAAIAACVgAhIBLIAAiVIAaAAIAAA4IATgBQAbAAANANQAOAKAAAYQAAAVgOANQgPANgZAAgAguADIAAAxIAOABQAUABAGgIQAGgIAAgMQAAgLgGgHQgIgHgRABg");
	this.shape_23.setTransform(20.8,7.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgyBMIAAiVIArgCQAWAAANAKQAOAKAAATQAAASgTAKQAcAIAAAfQAAAVgQAMQgPAMgYAAgAgXAEIAAAxIANABQAQAAAJgGQAIgFAAgPQAAgNgHgGQgIgGgRAAgAgXg0IAAAkIANAAQAZAAAAgTQAAgSgXAAg");
	this.shape_24.setTransform(6.1,7.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t5, new cjs.Rectangle(0,0,135.7,67.6), null);


(lib.t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAeBLIAAhEIg7AAIAABEIgaAAIAAiVIAaAAIAAA6IA7AAIAAg6IAaAAIAACVg");
	this.shape.setTransform(96.9,33.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag5BlIAAiYIAbAAIAABkIBNhmIALAAIAACXIgaAAIAAhkIhOBngAgVhHQgKgJgDgPIAWgEQACASAOAAQAPAAABgSIAVAEQgDAPgKAJQgKAHgPABQgPgBgJgHg");
	this.shape_1.setTransform(82,31.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAkBMIgLgeIgyAAIgLAeIgdAAIA8iXIALAAIA8CXgAgSAZIAjAAIgRg2g");
	this.shape_2.setTransform(68,33.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgyBCIALgXQAQAMATAAQANAAAIgHQAHgGAAgLQAAgNgJgHQgJgHgPAAIgQABIAAgVIAQABQANAAAHgGQAIgFAAgKQAAgJgHgEQgGgFgKAAQgNAAgSAJIgJgWQAYgKASAAQAWAAANALQANAKAAASQAAALgGAJQgGAJgJADQAMAFAIAJQAGAJAAAOQAAAWgPAMQgPANgaAAQgaAAgTgMg");
	this.shape_3.setTransform(55.2,33.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag5BOIAAiYIAbAAIAABkIBMhmIAMAAIAACXIgaAAIAAhkIhNBng");
	this.shape_4.setTransform(42.2,33.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAxBhIAAgsIhhAAIAAAsIgYAAIAAhBIALAAQAMgRANgbQALgaAMg6IBFAAIAACAIARAAIAABBgAgKgNQgLAcgMARIA/AAIAAhqIgZAAQgFAegKAfg");
	this.shape_5.setTransform(27.1,36);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag5BOIAAiYIAbAAIAABkIBNhmIALAAIAACXIgaAAIAAhkIhOBng");
	this.shape_6.setTransform(5.8,33.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag5BOIAAiYIAbAAIAABkIBNhmIALAAIAACXIgaAAIAAhkIhOBng");
	this.shape_7.setTransform(119,7.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag5BOIAAiYIAbAAIAABkIBNhmIALAAIAACXIgaAAIAAhkIhOBng");
	this.shape_8.setTransform(104.2,7.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAlBhIAAgsIhhAAIAAiUIAaAAIAAB9IA0AAIAAh9IAaAAIAAB9IARAAIAABDg");
	this.shape_9.setTransform(90.3,10);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAlBMIgMgeIgyAAIgKAeIgeAAIA8iXIAKAAIA9CXgAgRAZIAjAAIgSg2g");
	this.shape_10.setTransform(75.9,7.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgyBMIAAiVIArgCQAXAAAMAKQAOAKAAATQAAASgTAKQAcAJAAAeQAAAVgQAMQgPAMgYAAgAgXAEIAAAxIANABQAQAAAIgGQAJgFAAgPQAAgNgHgGQgIgGgSAAgAgXg0IAAAkIANAAQAZAAAAgTQAAgSgXAAg");
	this.shape_11.setTransform(63.3,7.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgwA5QgQgVAAgkQAAghARgVQARgXAeAAQAfAAARAUQARAUAAAlQAAAkgSAVQgSAVgfAAQgeAAgQgVgAgcgnQgJANAAAaQAAAbAJANQAJAOARAAQASAAALgOQALgOAAgaQAAg1gmAAQgSAAgKAOg");
	this.shape_12.setTransform(49.3,7.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAeBLIAAhEIg7AAIAABEIgaAAIAAiVIAaAAIAAA7IA7AAIAAg7IAaAAIAACVg");
	this.shape_13.setTransform(34.8,7.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAeBLIAAhEIg6AAIAABEIgbAAIAAiVIAbAAIAAA7IA6AAIAAg7IAaAAIAACVg");
	this.shape_14.setTransform(20.4,7.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag5BOIAAiYIAbAAIAABkIBNhmIALAAIAACXIgaAAIAAhkIhOBng");
	this.shape_15.setTransform(5.8,7.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4, new cjs.Rectangle(0,0,124.8,45.6), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgzBLIAAiVIAbAAIAAA4IAVgBQAaAAAOAMQAPAMAAAXQAAAVgPANQgPANgZAAgAgYADIAAAxIAPABQAhAAAAgbQAAgMgIgGQgIgHgPAAg");
	this.shape.setTransform(179.9,33.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNBLIAAh9IgwAAIAAgYIB7AAIAAAYIgyAAIAAB9g");
	this.shape_1.setTransform(166.4,33.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgmA5QgSgUAAgkQAAggATgXQAUgXAdAAQAaAAAPALIgLAWQgJgJgTAAQgUAAgLAQQgLARAAAWQgBAXALAOQALAPASAAQAVAAAMgPIANAWQgQARggAAQgeAAgRgVg");
	this.shape_2.setTransform(153.2,33.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgxA5QgQgVAAgkQAAghASgVQASgXAdAAQAfAAARAUQARAUABAlQgBAkgRAVQgSAVggAAQgeAAgRgVgAgcgnQgJAOAAAZQAAAaAJAOQAKAOAQAAQASAAAMgOQAKgOAAgaQAAg1gmAAQgSAAgKAOg");
	this.shape_3.setTransform(139.3,33.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAeBLIAAhEIg7AAIAABEIgaAAIAAiVIAaAAIAAA6IA7AAIAAg6IAaAAIAACVg");
	this.shape_4.setTransform(124.7,33.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgyBMIAAiVIArgCQAWAAANAKQAOAKAAATQAAASgTAKQAcAJAAAeQAAAUgQANQgPAMgYAAgAgXAEIAAAxIANABQAQAAAIgGQAJgFAAgPQAAgNgIgGQgGgGgTAAgAgXg0IAAAkIANAAQAZAAAAgTQAAgSgXAAIgPABg");
	this.shape_5.setTransform(111.6,33.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag5BOIAAiYIAaAAIAABkIBOhmIALAAIAACXIgaAAIAAhkIhOBng");
	this.shape_6.setTransform(97.6,33.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNBLIAAh9IgwAAIAAgYIB7AAIAAAYIgyAAIAAB9g");
	this.shape_7.setTransform(83.4,33.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAcBLIAAh9Ig3AAIAAB9IgaAAIAAiVIBrAAIAACVg");
	this.shape_8.setTransform(69.6,33.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAlBMIgMgeIgyAAIgKAeIgeAAIA8iXIAKAAIA9CXgAgSAZIAjAAIgRg2g");
	this.shape_9.setTransform(56,33.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAxBhIAAgsIhhAAIAAAsIgYAAIAAhBIALAAQAMgRANgbQALgaAMg6IBFAAIAACAIARAAIAABBgAgKgNQgKAagNATIA/AAIAAhqIgZAAQgFAegKAfg");
	this.shape_10.setTransform(41.5,36);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAlBMIgMgeIgyAAIgKAeIgeAAIA8iXIAKAAIA9CXgAgRAZIAjAAIgSg2g");
	this.shape_11.setTransform(27.3,33.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag5BOIAAiYIAaAAIAABkIBOhmIALAAIAACXIgbAAIAAhkIhNBng");
	this.shape_12.setTransform(6.9,33.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgzBLIAAiVIAbAAIAAA4IAVgBQAaAAAOANQAPALAAAXQAAAWgPAMQgPANgZAAgAgYADIAAAxIAQABQAgAAAAgbQAAgMgIgGQgIgHgPABg");
	this.shape_13.setTransform(169.4,7.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgOBLIAAh9IgvAAIAAgYIB7AAIAAAYIgyAAIAAB9g");
	this.shape_14.setTransform(155.9,7.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgnA5QgRgVAAgjQAAggATgXQATgXAeAAQAZAAAQALIgLAWQgJgJgUAAQgTAAgLAQQgLAQAAAXQAAAXAKAOQALAPASAAQAWAAALgPIANAWQgQARggAAQgeAAgSgVg");
	this.shape_15.setTransform(142.7,7.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgxA5QgPgVAAgkQAAggARgWQARgXAeAAQAgAAAQAUQASAUgBAlQABAkgTAVQgQAVghAAQgeAAgRgVgAgbgnQgKAPAAAYQAAAaAJAOQAKAOAQAAQATAAAKgOQALgOAAgaQAAg1gmAAQgSAAgJAOg");
	this.shape_16.setTransform(128.8,7.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAeBLIAAhEIg7AAIAABEIgaAAIAAiVIAaAAIAAA7IA7AAIAAg7IAaAAIAACVg");
	this.shape_17.setTransform(114.2,7.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAeBLIAAhEIg7AAIAABEIgaAAIAAiVIAaAAIAAA7IA7AAIAAg7IAaAAIAACVg");
	this.shape_18.setTransform(99.9,7.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgvBLIAAiVIBfAAIAAAYIhEAAIAAAjIAwAAIAAAVIgwAAIAAAtIBDAAIAAAYg");
	this.shape_19.setTransform(86.9,7.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgxBMIAAiVIAfgCQAhAAASALQARAMAAAXQAAAyg8AAIgMgBIAAA4gAgWgyIAAAwIAKAAQASAAAIgGQAJgGAAgNQAAgYglAAIgIABg");
	this.shape_20.setTransform(74.8,7.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgyBMIAAiVIArgCQAXAAANAKQANAKAAATQAAASgTAKQAcAIAAAfQAAAVgQAMQgPAMgYAAgAgXAEIAAAxIANABQAQAAAJgGQAIgFAAgPQAAgNgHgGQgIgGgRAAgAgXg0IAAAkIANAAQAZAAAAgTQAAgSgXAAg");
	this.shape_21.setTransform(62.3,7.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgvBLIAAiVIBfAAIAAAYIhEAAIAAAjIAwAAIAAAVIgwAAIAAAtIBDAAIAAAYg");
	this.shape_22.setTransform(49.9,7.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAeBLIAAhEIg7AAIAABEIgaAAIAAiVIAaAAIAAA7IA7AAIAAg7IAaAAIAACVg");
	this.shape_23.setTransform(36.4,7.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAlBMIgLgeIgzAAIgKAeIgeAAIA8iXIALAAIA8CXgAgRAZIAjAAIgSg2g");
	this.shape_24.setTransform(22.5,7.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgDBMIgfhSIgQBQIgaAAIAfiVIAOAAIAfBkIAghkIAOAAIAfCVIgaAAIgQhQIgeBSg");
	this.shape_25.setTransform(7.7,7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(0,0,185.1,45.6), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag5BOIAAiYIAbAAIAABkIBNhmIALAAIAACXIgaAAIAAhkIhOBng");
	this.shape.setTransform(184.3,33.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAZBGQgHgGgDgQQgEgWgKgJQgJgKgSAAIgCAAIAABEIgaAAIAAiVIAaAAIAAA7IADAAQASAAAIgHQAKgJADgQQADgOAGgHQAGgHAOAAIAKABIAAAXIgFAAQgEAAgCACIgEAKQgCANgJAKQgKAKgNADQAPAEAIAJQAJALADASQACAJACACQACACAGAAIAEAAIAAAYIgJAAQgOAAgHgGg");
	this.shape_1.setTransform(170.6,33.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgxBMIAAiVIAggCQAhAAARALQARAMAAAXQAAAyg8AAIgMgBIAAA4gAgWgyIAAAwIAKAAQASAAAIgGQAIgGAAgNQAAgYgkAAIgIABg");
	this.shape_2.setTransform(157.7,33.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgwA5QgQgVAAgkQAAghARgVQARgXAeAAQAfAAASAUQAQAUAAAlQABAkgTAVQgRAVggAAQgeAAgQgVgAgcgnQgJAOAAAZQAAAaAJAOQAJAOARAAQASAAALgOQALgOAAgaQAAg1gmAAQgSAAgKAOg");
	this.shape_3.setTransform(143.8,33.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgyBLIAAiVIBaAAIAAAXIg/AAIAAAjIATgBQAaAAAOANQAOALAAAXQAAAVgOALQgOANgaAAgAgXAFIAAAvIAOABQARAAAIgGQAHgGAAgNQAAgLgHgHQgGgGgSAAg");
	this.shape_4.setTransform(130.5,33.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgzAzIAFAAQAOAAAIgEQAIgEAHgLIg2hrIAeAAIAmBWQATglAMgxIAcAAQgNAtgTAnQgTAmgRAOQgSAPgdAAg");
	this.shape_5.setTransform(117.3,33.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgwA5QgQgVgBgkQAAghASgVQASgXAdAAQAfAAASAUQARAUAAAlQAAAkgSAVQgTAVgfAAQgfAAgPgVgAgcgnQgJAOAAAZQAAAaAJAOQAJAOARAAQATAAAKgOQALgOAAgaQAAg1gmAAQgSAAgKAOg");
	this.shape_6.setTransform(97.1,33.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgyBMIAAiVIArgCQAXAAAMAKQAOAKAAATQAAASgTAKQAcAJAAAeQAAAVgQAMQgPAMgYAAgAgXAEIAAAxIANABQAQAAAIgGQAJgFAAgPQAAgNgHgGQgIgGgSAAgAgXg0IAAAkIANAAQAZAAAAgTQAAgSgXAAIgPABg");
	this.shape_7.setTransform(83.8,33.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOBLIAAh9IgvAAIAAgYIB7AAIAAAYIgyAAIAAB9g");
	this.shape_8.setTransform(70.4,33.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgmA5QgSgUAAgkQAAggATgXQAUgXAdAAQAaAAAPALIgLAWQgJgJgUAAQgTAAgLAQQgLARAAAWQAAAXALAOQAKAPASAAQAVAAANgPIAMAWQgQARggAAQgeAAgRgVg");
	this.shape_9.setTransform(57.2,33.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgvBLIAAiVIBfAAIAAAYIhEAAIAAAiIAwAAIAAAWIgwAAIAAAtIBDAAIAAAYg");
	this.shape_10.setTransform(44.9,33.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAaBLIAAg7QgOACgMAAQgYAAgOgMQgNgLAAgXIAAguIAbAAIAAAtQAAANAIAGQAHAIAMAAQALAAAMgDIAAhFIAaAAIAACVg");
	this.shape_11.setTransform(31.8,33.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAkBMIgKgeIgzAAIgLAeIgdAAIA8iXIALAAIA8CXgAgSAZIAjAAIgRg2g");
	this.shape_12.setTransform(18.6,33.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAZBGQgIgHgCgPQgEgWgKgJQgJgKgTAAIgBAAIAABEIgaAAIAAiVIAaAAIAAA7IADAAQARAAAKgHQAJgIADgRQADgOAGgHQAHgHANAAIAKABIAAAXIgEAAQgFAAgCACQgCACgBAIQgDAOgKAJQgJAKgNADQAOADAJAKQAJAJAEAUQABAJACACQACACAGAAIAEAAIAAAYIgJAAQgPAAgGgGg");
	this.shape_13.setTransform(5.5,33.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgvBLIAAiVIBfAAIAAAYIhEAAIAAAjIAwAAIAAAVIgwAAIAAAtIBDAAIAAAYg");
	this.shape_14.setTransform(190.6,7.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgwA5QgQgWgBgjQAAggASgWQASgXAdAAQAfAAASAUQAQAUABAlQAAAjgSAWQgSAVggAAQgfAAgPgVgAgcgnQgJAPAAAYQAAAaAJAOQAJAOARAAQATAAAKgOQALgOAAgaQAAg1gmAAQgSAAgKAOg");
	this.shape_15.setTransform(176.9,7.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAeBLIAAhEIg7AAIAABEIgaAAIAAiVIAaAAIAAA7IA7AAIAAg7IAaAAIAACVg");
	this.shape_16.setTransform(162.3,7.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgzBLIAAiVIAbAAIAAA4IAVgBQAaAAAOANQAPALAAAXQAAAWgPAMQgPANgZAAgAgYADIAAAxIAQABQAgAAAAgbQAAgMgIgGQgIgHgPABg");
	this.shape_17.setTransform(149.1,7.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag/AzQAIAAAFgCQAEgBAGgHQAEgGAHgTQAGgTAEgXQAEgQAEghIBLAAIAACVIgbAAIAAh+IgdAAQgDAhgFAYQgHAcgJAPQgJARgLAFQgLAGgQAAg");
	this.shape_18.setTransform(134.5,7.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgvBLIAAiVIBfAAIAAAYIhEAAIAAAjIAxAAIAAAVIgxAAIAAAtIBDAAIAAAYg");
	this.shape_19.setTransform(122,7.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgNBLIAAh9IgwAAIAAgYIB7AAIAAAYIgyAAIAAB9g");
	this.shape_20.setTransform(108.8,7.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag5BOIAAiYIAbAAIAABkIBNhmIALAAIAACXIgaAAIAAhkIhOBng");
	this.shape_21.setTransform(94.6,7.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAZBLIAAg8QgMADgNAAQgYAAgOgMQgOgLAAgXIAAguIAcAAIAAAsQAAAOAHAGQAIAIAMAAQAKAAAMgDIAAhFIAbAAIAACVg");
	this.shape_22.setTransform(80.5,7.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgTA6QgQgSgBghIgYAAIAABEIgaAAIAAiVIAaAAIAAA7IAZAAQAFgdAPgQQAPgRAZAAQAeAAAQAVQAQAWAAAiQAAAigRAWQgRAWgfAAQgbAAgOgUgAgBgmQgJAQAAAWQAAAaAJAOQAHAPARAAQASAAAKgQQAJgPAAgYQAAg2gkAAQgRAAgIAQg");
	this.shape_23.setTransform(64.4,7.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag/AzQAIAAAEgCQAFgBAGgHQAFgHAGgSQAGgTAFgXQAFgdACgUIBLAAIAACVIgaAAIAAh+IgeAAQgDAfgFAaQgHAcgIAPQgKARgLAFQgLAGgQAAg");
	this.shape_24.setTransform(46.2,7.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAZBGQgHgHgDgPQgEgWgKgJQgIgKgTAAIgBAAIAABEIgbAAIAAiVIAbAAIAAA7IACAAQASAAAIgHQAKgIADgRQADgOAGgHQAHgHAOAAIAJABIAAAXIgEAAQgFAAgCACQgCACgBAIQgDAOgJAJQgJAKgOADQAPAEAIAJQAJAJAEAUQABAJADACQACACAFAAIAEAAIAAAYIgJAAQgOAAgHgGg");
	this.shape_25.setTransform(33.1,7.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgnA5QgRgUAAgkQAAghATgWQASgXAeAAQAaAAAQALIgLAWQgJgJgUAAQgSAAgMAQQgMARABAWQgBAXALAOQAMAPARAAQAVAAANgPIAMAWQgQARggAAQgfAAgRgVg");
	this.shape_26.setTransform(19.8,7.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag5BOIAAiYIAaAAIAABkIBOhmIALAAIAACXIgaAAIAAhkIhOBng");
	this.shape_27.setTransform(5.8,7.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(0,0,195.4,41.6), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAbBMIgng+IgRgBIAAA/IgcAAIAAiVIAqgCQA4AAAAAsQAAANgIAMQgIAKgMAEIAtBEgAgdgzIAAArIALAAQARAAAHgFQAHgEAAgOQAAgLgIgEQgHgFgSAAg");
	this.shape.setTransform(74.7,59.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgvBLIAAiVIBfAAIAAAYIhEAAIAAAjIAwAAIAAAVIgwAAIAAAtIBCAAIAAAYg");
	this.shape_1.setTransform(61.8,59.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHBMIg5iXIAeAAIAiBkIAkhkIAdAAIg7CXg");
	this.shape_2.setTransform(48.9,59.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgwA4QgRgVAAgjQAAggASgXQASgWAdAAQAgAAARAUQARAVAAAkQAAAjgSAVQgSAWggAAQgfAAgPgWgAgbgnQgKAOAAAZQAAAZAJAOQAIAPASAAQATAAAKgOQALgOAAgaQAAg1gmAAQgSAAgJAOg");
	this.shape_3.setTransform(35,59.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgxA4QgQgVAAgjQAAggASgXQASgWAdAAQAfAAARAUQARAUABAlQAAAkgSAUQgSAWggAAQgeAAgRgWgAgcgnQgJAPAAAYQAAAZAJAOQAIAPASAAQATAAALgOQAKgOAAgaQAAg1gmAAQgRAAgLAOg");
	this.shape_4.setTransform(20.2,59.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAeBLIAAhEIg6AAIAABEIgbAAIAAiVIAbAAIAAA7IA6AAIAAg7IAaAAIAACVg");
	this.shape_5.setTransform(5.7,59.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAuBLIAAiVIAbAAIAACVgAhIBLIAAiVIAaAAIAAA4IATgBQAbAAANANQAOALAAAXQAAAVgOANQgPANgZAAgAguADIAAAyIAOAAQAUAAAGgHQAGgHAAgMQAAgMgGgHQgIgGgRAAg");
	this.shape_6.setTransform(106.1,33.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgnA5QgRgVAAgkQAAgfATgXQATgXAeAAQAZAAAQALIgLAWQgJgJgUAAQgSAAgLAQQgNARAAAWQAAAWAMAPQAKAPATAAQAUAAANgPIAMAVQgQASgfAAQgfAAgSgVg");
	this.shape_7.setTransform(91,33.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgwA4QgQgUAAgkQAAghARgWQARgWAeAAQAfAAASAUQAQATAAAmQABAjgTAVQgRAWggAAQgfAAgPgWgAgcgnQgJAOAAAZQAAAaAJAOQAJAOARAAQATAAAKgOQALgOAAgaQAAg1gmAAQgSAAgKAOg");
	this.shape_8.setTransform(77.1,33.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnA5QgRgUAAglQAAggATgWQATgXAeAAQAZAAAQALIgLAWQgJgJgUAAQgSAAgMAQQgLARAAAWQgBAXAMAOQAKAPASAAQAWAAALgPIANAVQgQASggAAQgfAAgRgVg");
	this.shape_9.setTransform(63.4,33.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgvBLIAAiVIBfAAIAAAXIhEAAIAAAkIAwAAIAAAVIgwAAIAAAtIBCAAIAAAYg");
	this.shape_10.setTransform(51.1,33.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag/AzQAIAAAEgBQAFgCAGgHQAFgHAGgSQAGgRAFgZQAFgcACgVIBLAAIAACWIgaAAIAAh/IgdAAQgDAagGAfQgHAdgIAPQgJAQgMAFQgKAGgRAAg");
	this.shape_11.setTransform(36.8,33.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAuBLIAAiVIAaAAIAACVgAhIBLIAAiVIAaAAIAAA4IATgBQAbAAANANQAOALAAAXQAAAVgOANQgPANgZAAgAguADIAAAyIAOAAQATAAAIgHQAFgIAAgLQAAgMgHgHQgIgGgQAAg");
	this.shape_12.setTransform(21.3,33.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAcBLIAAh+Ig2AAIAAB+IgbAAIAAiVIBsAAIAACVg");
	this.shape_13.setTransform(5.5,33.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgvBLIAAiVIBfAAIAAAXIhEAAIAAAkIAxAAIAAAVIgxAAIAAAtIBDAAIAAAYg");
	this.shape_14.setTransform(158,7.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAuBLIAAiVIAbAAIAACVgAhIBLIAAiVIAaAAIAAA4IATgBQAaAAAOANQAOALAAAXQAAAWgPAMQgNANgaAAgAguADIAAAyIAOAAQAUAAAGgHQAGgIAAgLQAAgMgHgHQgHgGgRAAg");
	this.shape_15.setTransform(142.9,7.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAeBLIAAhEIg7AAIAABEIgaAAIAAiVIAaAAIAAA7IA7AAIAAg7IAaAAIAACVg");
	this.shape_16.setTransform(126.9,7.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAxBhIAAgrIhhAAIAAArIgYAAIAAhCIALAAQANgRALgaQANgcALg4IBFAAIAAB/IARAAIAABCgAgKgNQgLAcgMAQIA/AAIAAhpIgaAAQgEAhgKAcg");
	this.shape_17.setTransform(112,9.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgxA4QgPgUAAgkQAAghARgWQARgWAeAAQAgAAAQAUQARATAAAmQAAAjgSAVQgSAWgfAAQgfAAgQgWgAgbgnQgKAOAAAZQAAAaAJAOQAJAOARAAQATAAALgOQAKgOAAgaQAAg1gmAAQgSAAgJAOg");
	this.shape_18.setTransform(97,7.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgyBMIAAiVIArgCQAWAAAOAKQANALAAASQAAASgTAKQAcAJAAAfQAAAUgQAMQgPAMgYAAgAgXAEIAAAxIANABQARAAAIgGQAIgFAAgPQAAgMgHgHQgIgFgRgBgAgXg0IAAAkIANAAQAZAAAAgTQAAgSgXAAg");
	this.shape_19.setTransform(83.7,7.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgxA4QgQgUAAgkQAAghASgWQARgWAeAAQAfAAARAUQARATABAmQgBAjgRAVQgSAWggAAQgfAAgQgWgAgcgnQgJAOAAAZQAAAaAJAOQAJAOARAAQATAAALgOQAKgOAAgaQAAg1gmAAQgRAAgLAOg");
	this.shape_20.setTransform(69.7,7.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgxBMIAAiWIAfgBQAiAAARALQARALAAAXQAAAzg8AAIgMgBIAAA4gAgWgCIAKAAQARAAAJgGQAIgGAAgOQAAgXgkAAIgIAAg");
	this.shape_21.setTransform(56.5,7.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAbBLIAAh+Ig2AAIAAB+IgbAAIAAiVIBsAAIAACVg");
	this.shape_22.setTransform(43,7.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgnA5QgRgVAAgkQAAgfATgXQATgXAeAAQAZAAAQALIgLAWQgJgJgUAAQgSAAgMAQQgMARAAAWQAAAWALAPQALAPASAAQAVAAAMgPIANAVQgQASggAAQgeAAgSgVg");
	this.shape_23.setTransform(29.7,7.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgvBLIAAiVIBfAAIAAAXIhEAAIAAAkIAwAAIAAAVIgwAAIAAAtIBDAAIAAAYg");
	this.shape_24.setTransform(17.4,7.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgyBLIAAiVIBaAAIAAAXIg/AAIAAAkIATgBQAZAAAPAMQAPALAAAXQAAAUgPANQgPAMgZAAgAgXAFIAAAwIAOAAQARAAAIgGQAHgHAAgMQAAgKgHgHQgGgHgSAAg");
	this.shape_25.setTransform(5.1,7.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(0,0,162.8,67.6), null);


(lib.p6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p6, new cjs.Rectangle(0,0,300,600), null);


(lib.p5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p5, new cjs.Rectangle(0,0,300,600), null);


(lib.p4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p4, new cjs.Rectangle(0,0,300,600), null);


(lib.p3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p3, new cjs.Rectangle(0,0,300,600), null);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2, new cjs.Rectangle(0,0,300,600), null);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1, new cjs.Rectangle(0,0,300,600), null);


(lib.ClipGroup_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj7D8QhphoAAiUQAAiTBphoQBohpCTAAQCUAABoBpQBpBoAACTQAACUhpBoQhoBpiUAAQiTAAhohpgAhLAdIhIEMQBFAjBOAAQCJAABihhQBhhhAAiKQAAgwgOgvgAk6BpQASA5AmAuQAlAuAzAfIBBj2IhVAbIgaBfIgdAJIAahfgAkPi+Qg8BWAABoQAAAvAMAqIBpghIBiluQhgAkg7BUgAhXk/IhiFuIBWgcIA6jYIAdgJIg6DYIF/h5QgjhhhVg9QhWg+hrAAQgtAAgqAMg");
	mask.setTransform(67.3,67.3);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(195,195,195,0)","#C3C3C3","#A8A8A8","#888887","#636361","#3A3A38","#1C1C1A","#1C1C1A"],[0,0.933,0.933,0.949,0.961,0.976,0.988,0.992,1],41.4,25.1,-39.3,-23.8).s().p("AqgClIH8tFINFH8In7NFg");
	this.shape.setTransform(67.3,67.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#FFFFFF","#F7F7F7","#E3E3E3","#C2C2C2","#ACACAC","#E7E7E7","#FFFFFF","#FCFCFC","#F6F6F6","#EAEAEA","#D9D9D9","#C3C3C3","rgba(195,195,195,0)","rgba(0,0,0,0)"],[0,0.02,0.075,0.157,0.259,0.314,0.596,0.733,0.831,0.871,0.894,0.914,0.933,0.933,1],41.4,25.1,-39.3,-23.8).s().p("AqgClIH8tFINFH8In7NFg");
	this.shape_1.setTransform(67.3,67.3);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9, new cjs.Rectangle(31.7,31.7,71.4,71.4), null);


(lib.ClipGroup_5_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkgEZQh4h8AAidQAAipB4h3QB3h4CpAAQCpAAB4B4QB4B3AACpQAACph4B5Qh4B3ipAAQilAAh7iAg");
	mask.setTransform(81.8,81.8);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#D32D3E","#D22D3E","#CB2D3C","#C92D3B","#B82B34","#B42B33","#AA2A2F","#A2292C","#992929","#75221C"],[0,0.047,0.051,0.082,0.161,0.439,0.502,0.694,0.835,1,1],29.5,29.5,-36.3,-36.3).s().p("AsxAAIMxsxIMyMxIsyMyg");
	this.shape.setTransform(81.8,81.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_3, new cjs.Rectangle(40.9,40.9,81.8,81.8), null);


(lib.ClipGroup_4_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkaEaQh0h0gBimQABikB0h2QB2h0CkgBQCmABB0B0QB2B2gBCkQABCmh2B0Qh0B2imgBQikABh2h2g");
	mask.setTransform(78.2,78.2);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#D32D3E","#C42C39","#9D292B","#992929","#75221C"],[0,0.514,0.671,0.973,1,1],-26,-35.3,37.8,51.3).s().p("AsMh1IOCqXIKXOCIuCKXg");
	this.shape.setTransform(78.1,78.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_3, new cjs.Rectangle(38.2,38.2,79.9,79.9), null);


(lib.ClipGroup_3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkUEVQhzhyAAijQAAiiBzhyQByhzCiAAQCjAAByBzQBzByAACiQAACjhzByQhyBzijAAQiiAAhyhzg");
	mask.setTransform(76.7,76.7);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#D32D3E","#C42C39","#9D292B","#992929","#75221C"],[0,0.224,0.475,0.957,1,1],-25.4,-34.5,37.2,50.4).s().p("Ar+hzINyqLIKKNyItxKKg");
	this.shape.setTransform(76.7,76.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_3, new cjs.Rectangle(37.5,37.5,78.4,78.4), null);


(lib.ClipGroup_2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag3AKQgHgIADgQIAVAAQABALAKgCQAHgCAEgHIATAAQgNAWgVAGQgGABgFAAQgIAAgFgFgAAZgOIAkAAIgMAFIgJABQgKAAgFgGg");
	mask.setTransform(8,7.1);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(195,195,195,0)","#C3C3C3","#A8A8A8","#888887","#636361","#3A3A38","#1C1C1A","#1C1C1A"],[0,0.933,0.933,0.949,0.961,0.976,0.988,0.992,1],37.6,22.8,-43,-26.1).s().p("AhNAJIAxhRIBqBBIgxBQg");
	this.shape.setTransform(7.8,7.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#FFFFFF","#F7F7F7","#E3E3E3","#C2C2C2","#ACACAC","#E7E7E7","#FFFFFF","#FCFCFC","#F6F6F6","#EAEAEA","#D9D9D9","#C3C3C3","rgba(195,195,195,0)","rgba(0,0,0,0)"],[0,0.02,0.075,0.157,0.259,0.314,0.596,0.733,0.831,0.871,0.894,0.914,0.933,0.933,1],37.6,22.8,-43,-26.1).s().p("AhNAJIAxhRIBqBBIgxBQg");
	this.shape_1.setTransform(7.8,7.3);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_3, new cjs.Rectangle(1.9,5.6,12.2,3.1), null);


(lib.ClipGroup_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhsBPQgHgKADgSQAEgSAMgPQANgPAQgEIAKgBQALAAAFAIQAFAIgDAQQgHAggaARgAhHASQgOAFgFAWQgDATAKAAIADgBQAOgEAFgXQACgMgEgEQgCgCgDAAIgDAAgAiWBPQAFgIACgKQAEgWgNAEQgGABgEAFQgGAIgDAMIgBAKIgVAAIAAgEQAEgSAMgPQAMgPARgFQADgBAGAAQAMAAAEAJQAFAJgDAQQgCANgHALgAgegNIAYgGIADAuIAXg4IAZgIIgrBdIgZAJgAA4gpIAxgPIgFAWIgaAJIgBAKIAVgIIgEAWIgWAFIgCALIAbgKIgGAYIgyAQgAB/g/IAugNIAIgCQAQAAgDATQgEAQgMAIQAJACgCAQQgCAPABACIgZAGIABgMQABgIgBgCQgBgFgGACIgLABIgHAhIgZAHgACfg1IgMADIgDAQIAMgDQALgCACgJQABgGgGAAIgFABg");
	mask.setTransform(26.4,25.2);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(195,195,195,0)","#C3C3C3","#A8A8A8","#888887","#636361","#3A3A38","#1C1C1A","#1C1C1A"],[0,0.933,0.933,0.949,0.961,0.976,0.988,0.992,1],31.9,19.3,-49,-29.7).s().p("AkIAkICvkfIFiDYIivEfg");
	this.shape.setTransform(26.5,25.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#FFFFFF","#F7F7F7","#E3E3E3","#C2C2C2","#ACACAC","#E7E7E7","#FFFFFF","#FCFCFC","#F6F6F6","#EAEAEA","#D9D9D9","#C3C3C3","rgba(195,195,195,0)","rgba(0,0,0,0)"],[0,0.02,0.075,0.157,0.259,0.314,0.596,0.733,0.831,0.871,0.894,0.914,0.933,0.933,1],31.9,19.3,-49,-29.7).s().p("AkIAkICvkfIFiDYIivEfg");
	this.shape_1.setTransform(26.5,25.2);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_3, new cjs.Rectangle(7,17.3,38.8,15.7), null);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgXWguyMAutAAAMAAABdlMgutAAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(351));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAMIAFAAQABAJAIAAQAKAAAAgKQAAgJgKAAIAAAAIAAgEIAAAAQAJAAAAgJQAAgJgJAAQgHAAgBAIIgFAAQABgMAMAAQAOAAAAANQAAAIgHADQAIACAAAJQAAAHgEAEQgEADgHAAQgNAAgBgNg");
	this.shape_1.setTransform(150.9,585.1,1.2,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJAVQgDgCgBgGIAFAAQACAHAGAAQAEAAACgBQADgDAAgIQAAgLgJAAQgFAAgCAEIgEAAIAAgZIAYAAIAAAEIgUAAIAAAQQAEgDAEgBQAFABAEADQAEAEAAAIQAAAKgEADQgFAEgFAAQgFAAgEgEg");
	this.shape_2.setTransform(146.6,585.2,1.2,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAFAZIAAgIIgTAAIAAgFIARgkIAFAAIgRAkIAOAAIAAgNIAFAAIAAANIAFAAIAAAFIgFAAIAAAIg");
	this.shape_3.setTransform(142.2,585.1,1.2,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJAWQgEgEAAgGIAAgXQAAgGAEgDQAEgEAFAAQAGAAAEAEQAEADAAAGIAAAXQAAAGgEAEQgEADgGAAQgFAAgEgDgAgIgKIAAAVQAAAKAIAAQAJAAAAgKIAAgVQAAgKgJAAQgIAAAAAKg");
	this.shape_4.setTransform(137.8,585.1,1.2,1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIAZIAQgtIgQAAIAAAIIgFAAIAAgMIAbAAIAAAEIgRAtg");
	this.shape_5.setTransform(133.5,585.1,1.2,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJAWQgEgEAAgGIAAgXQAAgGAEgDQAEgEAFAAQAGAAAEAEQAEADAAAGIAAAXQAAAGgEAEQgEADgGAAQgFAAgEgDgAgIgKIAAAVQAAAKAIAAQAJAAAAgKIAAgVQAAgKgJAAQgIAAAAAKg");
	this.shape_6.setTransform(129,585.1,1.2,1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNAKQAAgFADgFIAMgYIAFAAIgKAWIAEgBQAGAAADADQAEAEAAAGQAAAGgEAFQgEAEgGAAQgNAAAAgPgAgIAKQAAAKAIAAQAJAAAAgKQAAgKgJAAQgIAAAAAKg");
	this.shape_7.setTransform(124.7,585.2,1.2,1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgGAZIALgWQgDABgCAAQgGAAgDgEQgEgDAAgHQAAgGAEgEQADgEAGAAQAOAAAAAOQAAAFgEAFIgLAZgAgIgKQAAAKAIAAQAJAAAAgKQAAgKgJAAQgIAAAAAKg");
	this.shape_8.setTransform(120.2,585.1,1.2,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgIAZIARgtIgRAAIAAAIIgFAAIAAgMIAbAAIAAAEIgRAtg");
	this.shape_9.setTransform(116,585.1,1.2,1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIAZIAQgtIgQAAIAAAIIgFAAIAAgMIAbAAIAAAEIgQAtg");
	this.shape_10.setTransform(111.6,585.1,1.2,1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAFAZIAAgIIgTAAIAAgFIARgkIAFAAIgRAkIAOAAIAAgNIAFAAIAAANIAFAAIAAAFIgFAAIAAAIg");
	this.shape_11.setTransform(107.1,585.1,1.2,1.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIAWQgEgEgBgGIAAgXQABgGAEgDQADgEAFAAQAGAAAEAEQADADAAAGIAAAXQAAAGgDAEQgEADgGAAQgFAAgDgDgAgIgKIAAAVQABAKAHAAQAJAAAAgKIAAgVQAAgKgJAAQgHAAgBAKg");
	this.shape_12.setTransform(102.7,585.1,1.2,1.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AACAZIAAgrIgIAIIAAgGIAIgIIAFAAIAAAxg");
	this.shape_13.setTransform(98.1,585.1,1.2,1.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAMAZIAAgXIgXAAIAAAXIgFAAIAAgxIAFAAIAAAWIAXAAIAAgWIAFAAIAAAxg");
	this.shape_14.setTransform(91.1,585.1,1.2,1.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgQAZIAAgxIARAAQAHAAAFAEQAEAEAAAHQAAAGgEADQgFAEgHAAIgMAAIAAAVgAgLAAIAMAAQALAAAAgJQAAgKgLAAIgMAAg");
	this.shape_15.setTransform(85.8,585.1,1.2,1.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgOAZIAAgxIAdAAIAAAFIgYAAIAAAsg");
	this.shape_16.setTransform(80.8,585.1,1.2,1.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgLAUQgEgDgBgEIAAgNIAAgMQABgEAEgEQAEgEAHAAQAIAAAEAEQAEAEABAEIAAAMIAAANQgBAEgEADQgFAFgHAAQgGAAgFgFgAgIgQQgDAEAAAMQAAANADAEQAFAEADAAQAEAAAFgEQADgEAAgNQAAgMgDgEQgFgEgEAAQgDAAgFAEg");
	this.shape_17.setTransform(75.4,585.1,1.2,1.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgJAVQgEgDAAgFIAFAAQABAHAHAAQAEAAACgBQADgEAAgHQAAgLgJAAQgGAAgBAEIgFAAIAAgZIAZAAIAAAEIgUAAIAAAQQADgDAFgBQAFABAEADQAEAEAAAIQAAAKgEADQgFAEgFAAQgGAAgDgEg");
	this.shape_18.setTransform(68.4,585.2,1.2,1.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AACAZIAAgrIgIAIIAAgGIAIgIIAFAAIAAAxg");
	this.shape_19.setTransform(63.7,585.1,1.2,1.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgJAWQgEgEAAgGIAAgXQAAgGAEgDQAEgEAFAAQAGAAAEAEQAEADAAAGIAAAXQAAAGgEAEQgEADgGAAQgFAAgEgDgAgIgKIAAAVQAAAKAIAAQAJAAAAgKIAAgVQAAgKgJAAQgIAAAAAKg");
	this.shape_20.setTransform(59.6,585.1,1.2,1.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgNAZIAAgEIATgYQADgEAAgEQAAgJgJAAQgHAAAAAJIgGAAQAAgNANAAQAOAAAAANQAAAGgEAEIgQAWIAUAAIAAAEg");
	this.shape_21.setTransform(55.2,585.1,1.2,1.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AACAZIAAgrIgIAIIAAgGIAIgIIAFAAIAAAxg");
	this.shape_22.setTransform(50.6,585.1,1.2,1.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgJAVQgDgCgBgGIAGAAQABAHAGAAQAEAAACgBQADgDAAgIQAAgLgJAAQgFAAgCAEIgEAAIAAgZIAYAAIAAAEIgUAAIAAAQQAEgDAEgBQAFABAEADQAEAEAAAIQAAAKgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_23.setTransform(46.5,585.2,1.2,1.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAFAZIAAgIIgTAAIAAgFIARgkIAFAAIgRAkIAOAAIAAgNIAEAAIAAANIAGAAIAAAFIgGAAIAAAIg");
	this.shape_24.setTransform(42.1,585.1,1.2,1.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgIAWQgFgEAAgGIAAgXQAAgGAFgDQADgEAFAAQAGAAAEAEQAEADgBAGIAAAXQABAGgEAEQgEADgGAAQgFAAgDgDgAgHgKIAAAVQAAAKAHAAQAJAAAAgKIAAgVQAAgKgJAAQgHAAAAAKg");
	this.shape_25.setTransform(37.7,585.1,1.2,1.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgIAZIARgtIgRAAIAAAIIgFAAIAAgMIAbAAIAAAEIgQAtg");
	this.shape_26.setTransform(33.4,585.1,1.2,1.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgIAZIARgtIgRAAIAAAIIgFAAIAAgMIAbAAIAAAEIgQAtg");
	this.shape_27.setTransform(29,585.1,1.2,1.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAMAZIAAgXIgXAAIAAAXIgFAAIAAgxIAFAAIAAAWIAXAAIAAgWIAFAAIAAAxg");
	this.shape_28.setTransform(21.7,585.1,1.2,1.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAMAZIAAgXIgXAAIAAAXIgFAAIAAgxIAFAAIAAAWIAXAAIAAgWIAFAAIAAAxg");
	this.shape_29.setTransform(15.9,585.1,1.2,1.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAMAZIAAgoIgYAoIgFAAIAAgxIAFAAIAAAoIAZgoIAFAAIAAAxg");
	this.shape_30.setTransform(9.9,585.1,1.2,1.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgJAVQgFgDAAgHQAAgIAIgDQgHgEAAgHQAAgGAEgEQAEgDAFAAQAGAAAEADQAEAEAAAGQAAAHgHAEQAIADAAAIQAAAHgFADQgEAEgGAAQgFAAgEgEgAgGAEQgDADAAAEQAAAKAJAAQAEAAADgDQADgDAAgEQAAgEgDgDQgDgDgEAAQgDAAgDADgAgIgLQAAAJAIAAQAJAAAAgJQAAgJgJAAQgIAAAAAJg");
	this.shape_31.setTransform(151.8,576.7,1.2,1.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgCADIAAgFIAGAAIAAAFg");
	this.shape_32.setTransform(146.4,579.3,1.2,1.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AANAXIAAgLIgZAAIAAALIgEAAIAAgPIADAAQAFgKAAgNIAAgGIAUAAIAAAdIAGAAIAAAPgAgDgKQAAAIgEAKIAOAAIAAgZIgKAAg");
	this.shape_33.setTransform(142.9,578.3,1.2,1.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgCgHIAFAAIAAAKIgFAFg");
	this.shape_34.setTransform(137.4,579.9,1.2,1.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAJAZIAAgaIgRAaIgFAAIAAgiIAFAAIAAAaIARgaIAFAAIAAAigAgJgYIAFAAQgBAGAFgBQAFABABgGIAEAAQAAAJgKAAQgJAAAAgJg");
	this.shape_35.setTransform(133.9,576.8,1.2,1.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgJACIAAgDIASAAIAAADg");
	this.shape_36.setTransform(129.7,577.5,1.2,1.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgNAZIAAgEIATgZQADgCAAgFQAAgIgJgBQgHABAAAIIgFAAQAAgNAMAAQAOAAAAANQAAAGgEAEIgQAWIAUAAIAAAEg");
	this.shape_37.setTransform(125.7,576.7,1.2,1.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAJAZIAAgaIgRAaIgFAAIAAgiIAFAAIAAAaIARgaIAFAAIAAAigAgJgYIAEAAQABAGAEgBQAGABAAgGIAEAAQAAAJgKAAQgJAAAAgJg");
	this.shape_38.setTransform(119,576.8,1.2,1.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAJARIAAgZIgRAZIgFAAIAAghIAFAAIAAAZIARgZIAFAAIAAAhg");
	this.shape_39.setTransform(114.1,577.6,1.2,1.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAIARIgQgRIAOgQIAHAAIgPAQIAQARgAgNARIAAghIAFAAIAAAQIAAARg");
	this.shape_40.setTransform(110,577.6,1.2,1.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgMAAQAAgRAOAAQAEAAACACQACAAADAEIgDADIgEgDIgEgBQgJAAAAAMQAAANAJAAIAEAAIAEgEIADAEIgFAEIgGABQgOAAAAgSg");
	this.shape_41.setTransform(105.5,577.6,1.2,1.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAIARIAAgPIgPAAIAAAPIgFAAIAAghIAFAAIAAAOIAPAAIAAgOIAFAAIAAAhg");
	this.shape_42.setTransform(101,577.6,1.2,1.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAJARIAAgZIgRAZIgFAAIAAghIAFAAIAAAZIARgZIAFAAIAAAhg");
	this.shape_43.setTransform(96.2,577.6,1.2,1.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AATAXIAAgLIgqAAIAAghIAFAAIAAAdIAOAAIAAgdIAEAAIAAAdIAOAAIAAgdIAFAAIAAAdIAFAAIAAAPg");
	this.shape_44.setTransform(90.6,578.3,1.2,1.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgJAOQgEgEAAgKQAAgJAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAJQAAAKgEAEQgEAEgGAAQgFAAgEgEgAgFgJQgDADAAAGQAAAIADADQADACACAAQADAAADgCQADgDAAgIQAAgHgDgCQgCgDgEAAQgCAAgDADg");
	this.shape_45.setTransform(84.7,577.6,1.2,1.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgQAZIAAgxIASAAQAGAAAEAEQAFAEAAAHQAAAGgFADQgEAEgGAAIgNAAIAAAVgAgLAAIAMAAQALAAAAgJQAAgKgLAAIgMAAg");
	this.shape_46.setTransform(80.2,576.7,1.2,1.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AANAXIAAgLIgZAAIAAALIgFAAIAAgPIAEAAQAFgKAAgNIAAgGIAVAAIAAAdIAFAAIAAAPgAgDgKQAAAKgEAIIAOAAIAAgZIgKAAg");
	this.shape_47.setTransform(72.8,578.3,1.2,1.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgNANIAEgDQADADAGAAQAIAAABgGQgBgFgGAAIgFAAIAAgEIAFAAQAGAAAAgFQAAgFgIAAQgEAAgEADIgDgEQAEgEAIAAQAMAAgBAKQAAAFgFACQAGABAAAHQAAAEgDADQgFADgFAAQgHAAgGgFg");
	this.shape_48.setTransform(68.5,577.6,1.2,1.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgNAAQAAgRANAAQAOAAAAARIAAABIgWAAQAAAMAJAAQAFAAAEgEIAEADQgGAGgHAAQgOAAAAgSgAgHgHIgBAGIARAAIgBgGQgCgFgGAAQgEAAgDAFg");
	this.shape_49.setTransform(64.4,577.6,1.2,1.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgJAOQgEgFAAgJQAAgIAEgFQADgEAGAAQAGAAAEAEQAEAFAAAIQAAAJgEAFQgEAEgGAAQgGAAgDgEgAgFgJQgDADAAAGQAAAIADADQACACADAAQAEAAACgCQADgDAAgIQAAgGgDgDQgCgDgEAAQgDAAgCADg");
	this.shape_50.setTransform(60,577.6,1.2,1.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgMAZIAAgxIAEAAIAAAEQAEgEAFAAQAFAAADADQAFAEAAALQAAAJgFAEQgDADgFAAQgFAAgEgEIAAATgAgIgGQAAAMAIAAQAIAAAAgMQAAgOgIAAQgIAAAAAOg");
	this.shape_51.setTransform(55.6,578.5,1.2,1.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAMAZIAAgsIgXAAIAAAsIgFAAIAAgxIAhAAIAAAxg");
	this.shape_52.setTransform(50.3,576.7,1.2,1.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgCgHIAFAAIAAAKIgFAFg");
	this.shape_53.setTransform(44.1,579.9,1.2,1.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgKAPQgDgEAAgDQAAgJAMAAIAKAAIAAgEQAAgHgJAAQgFAAgDAEIgDgDQAEgGAHAAQAOAAAAAMIAAAWIgFAAIAAgDQgEAEgFAAQgGAAgEgDgAgIAIQAAAFAIAAQAFAAACgCQACgBAAgFIAAgEIgJAAQgIAAAAAHg");
	this.shape_54.setTransform(40.7,577.6,1.2,1.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgMARIAAghIAOAAQALAAAAAJQAAAFgFACQAFABABAHQAAAJgLAAgAgIANIAKAAQAGAAABgGQgBgFgGAAIgKAAgAgIgBIAJAAQAHAAAAgGQAAgFgHAAIgJAAg");
	this.shape_55.setTransform(36.4,577.6,1.2,1.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAHARIgPgRIAOgQIAHAAIgPAQIAQARgAgNARIAAghIAFAAIAAAQIAAARgAgIAAg");
	this.shape_56.setTransform(32.3,577.6,1.2,1.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgMAAQAAgRAOAAIAGACQADABACADIgDADIgEgDIgEgBQgJAAAAAMQAAANAJAAIAEAAIAEgEIADAEIgFAEIgGABQgOAAAAgSg");
	this.shape_57.setTransform(27.9,577.6,1.2,1.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgJAOQgEgEAAgKQAAgJAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAJQAAAKgEAEQgEAEgGAAQgFAAgEgEgAgFgJQgDADAAAGQAAAIADADQADACACAAQADAAADgCQADgDAAgIQAAgHgDgCQgDgDgDAAQgCAAgDADg");
	this.shape_58.setTransform(23.5,577.6,1.2,1.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAQAZIAAglIgNAdIgFAAIgNgdIAAAlIgGAAIAAgxIAGAAIAPAiIAQgiIAGAAIAAAxg");
	this.shape_59.setTransform(17.9,576.7,1.2,1.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgCADIAAgFIAFAAIAAAFg");
	this.shape_60.setTransform(11.2,579.3,1.2,1.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgKARIAAghIAVAAIAAAEIgQAAIAAAdg");
	this.shape_61.setTransform(9,577.6,1.2,1.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgCgHIAFAAIAAAJIgFAGg");
	this.shape_62.setTransform(117.2,571.5,1.2,1.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgGAZIAKgXQgCACgCAAQgNAAAAgNQAAgPANAAQAOAAAAAOQAAAFgDAGIgMAYgAgIgJQAAAJAIAAQAJAAAAgJQAAgKgJAAQgIAAAAAKg");
	this.shape_63.setTransform(113.9,568.3,1.2,1.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AACAZIAAgrIgIAIIAAgGIAIgIIAFAAIAAAxg");
	this.shape_64.setTransform(109.2,568.3,1.2,1.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAFAZIAAgIIgUAAIAAgFIARgkIAGAAIgRAkIAOAAIAAgNIAEAAIAAANIAHAAIAAAFIgHAAIAAAIg");
	this.shape_65.setTransform(105.1,568.3,1.2,1.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgJAWQgEgDAAgGIAFAAQABAIAHAAQAEAAACgDQACgDAAgHQAAgLgIAAQgGAAgBAEIgFAAIAAgZIAYAAIAAAEIgTAAIAAAQQADgEAFAAQAFAAADAEQAFAEAAAIQAAAJgEAFQgFADgFAAQgGAAgDgDg");
	this.shape_66.setTransform(100.8,568.4,1.2,1.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AACAZIAAgrIgIAIIAAgGIAIgIIAFAAIAAAxg");
	this.shape_67.setTransform(96.1,568.3,1.2,1.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AACAZIAAgrIgIAIIAAgGIAIgIIAFAAIAAAxg");
	this.shape_68.setTransform(91.7,568.3,1.2,1.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AABAJIAIgJIgIgHIAAgHIAOAOIgOAPgAgOAJIAIgJIgIgHIAAgHIAOAOIgOAPg");
	this.shape_69.setTransform(85.5,569.1,1.2,1.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgCADIAAgFIAFAAIAAAFg");
	this.shape_70.setTransform(81.9,570.9,1.2,1.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgOAZIAAgxIAdAAIAAAFIgXAAIAAAsg");
	this.shape_71.setTransform(78.7,568.3,1.2,1.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgCADIAAgFIAFAAIAAAFg");
	this.shape_72.setTransform(74.9,570.9,1.2,1.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AAMAZIAAgXIgXAAIAAAXIgFAAIAAgxIAFAAIAAAWIAXAAIAAgWIAFAAIAAAxg");
	this.shape_73.setTransform(70.8,568.3,1.2,1.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgCADIAAgFIAFAAIAAAFg");
	this.shape_74.setTransform(66.8,570.9,1.2,1.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgLAUQgGgFAAgPQAAgOAGgGQAEgEAHAAQAPAAACAOIgFAAQgDgKgJAAQgEAAgEAEQgDADAAANQAAAOADADQAEAEAEAAQAJAAADgLIAFAAQgCAPgPAAQgHAAgEgFg");
	this.shape_75.setTransform(63,568.3,1.2,1.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AAMAZIAAgoIgYAoIgFAAIAAgxIAFAAIAAAoIAZgoIAFAAIAAAxg");
	this.shape_76.setTransform(55.2,568.3,1.2,1.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAQAfIAAgMIggAAIAAAMIgFAAIAAgRIAEAAQAHgKgBgRIAAgRIAbAAIAAAsIAGAAIAAARgAgFgKQAAAPgGAJIAWAAIAAgnIgQAAg");
	this.shape_77.setTransform(49.2,569.1,1.2,1.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAMAZIAAgXIgXAAIAAAXIgFAAIAAgxIAFAAIAAAWIAXAAIAAgWIAFAAIAAAxg");
	this.shape_78.setTransform(43.4,568.3,1.2,1.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AAPAZIgEgLIgVAAIgEALIgGAAIATgxIADAAIATAxgAgIAJIARAAIgJgZg");
	this.shape_79.setTransform(38,568.3,1.2,1.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AAKAZIgVgZIAUgYIAHAAIgVAYIAXAZgAgRAZIAAgxIAGAAIAAAYIAAAZgAgLAAg");
	this.shape_80.setTransform(33.1,568.3,1.2,1.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AAAAAIAPgOIAAAHIgIAHIAIAJIAAAGgAgOAAIAOgOIAAAHIgIAHIAIAJIAAAGg");
	this.shape_81.setTransform(27.6,569.1,1.2,1.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgLAUQgEgDgBgEIgBgNIABgMQABgEAEgEQAEgEAHAAQAHAAAGAEQAEAGAAAOQAAAPgEAFQgHAFgGAAQgHAAgEgFgAgIgQQgDADAAANQAAAOADADQAEAEAEAAQAEAAAEgEQAEgEAAgNQAAgMgEgEQgEgEgEAAQgEAAgEAEg");
	this.shape_82.setTransform(20.6,568.3,1.2,1.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgMAUQgDgDgBgEIAAgNIAAgMQABgEADgEQAFgEAHAAQAIAAAEAEQAGAGAAAOQAAAPgGAFQgFAFgHAAQgGAAgGgFgAgIgQQgEAEAAAMQAAANAEAEQAFAEADAAQAEAAAFgEQADgEAAgNQAAgMgDgEQgFgEgEAAQgDAAgFAEg");
	this.shape_83.setTransform(15.1,568.3,1.2,1.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgLAUQgEgDgBgEIgBgNIABgMQABgEAEgEQAEgEAHAAQAHAAAGAEQAEAGAAAOQAAAPgEAFQgHAFgGAAQgHAAgEgFgAgIgQQgDAEAAAMQAAANADAEQAEAEAEAAQAEAAAEgEQAEgEAAgNQAAgMgEgEQgEgEgEAAQgEAAgEAEg");
	this.shape_84.setTransform(9.7,568.3,1.2,1.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#494948").s().p("AgbAcQgMgMAAgQQAAgPAMgNQAMgLAPAAQARAAALALQAMANAAAPQAAAQgMAMQgLAMgRAAQgPAAgMgMgAgYgXQgKAJABAOQgBAOAKAKQAKAKAOAAQAOAAAKgKQAKgJAAgPQAAgOgKgJQgKgLgOAAQgOAAgKALgAALAWIAAgHQgBgHgEgCQgCgBgFAAIgGAAIAAARIgJAAIAAgrIAQAAQAIAAADACQAHACAAAIQAAAGgFADIgGABQAFABACAEQADACAAAEIAAAGIABADIAAABgAgHAAIAHAAIAGgBQAEgCABgFQgBgFgCgBQgEgCgFAAIgGAAg");
	this.shape_85.setTransform(273.2,571);

	this.instance = new lib.ClipGroup_9();
	this.instance.parent = this;
	this.instance.setTransform(237,534.4,1,1,0,0,0,67.3,67.3);

	this.instance_1 = new lib.ClipGroup_1_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(249.1,535.8,1,1,0,0,0,26.4,25.2);

	this.instance_2 = new lib.ClipGroup_2_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,545.4,1,1,0,0,0,7.8,7.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("Aj7D8QhphoAAiUQAAiTBphoQBohpCTAAQCUAABoBpQBpBpAACSQAACUhpBoQhoBpiUAAQiTAAhohpgAhLAdIhIENQBGAiBNAAQCJAABihhQBhhhAAiKQAAgygOgtgAk6BpQASA5AmAuQAlAuAyAfIBCj2IhVAbIgaBfIgdAJIAZhfgAkPi+Qg8BWAABoQAAAvAMAqIBpghIBiluQhgAkg7BUgAhXk/IhiFuIBVgcIA7jYIAdgIIg6DXIF/h5QgjhhhVg9QhWg+hrAAQgqAAgtAMg");
	this.shape_86.setTransform(236.2,534.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AhsBOQgHgIAEgTQAEgTALgOQANgPAQgEQAQgFAIAIQAIAJgEATQgGAhgbAPgAhHASQgOAEgFAXQgCAMAEAEQADAEAFgCQAOgEAFgXQACgMgEgEQgBgCgDAAIgEAAgAiWBOQAGgGABgLQADgMgEgFQgDgDgFABQgPAFgEAWIAAAJIgWAAIAAgDQAEgSAMgPQAMgPARgFQAQgFAHAJQAJAJgEATQgCALgHANgAgegNIAYgHIADAuIAAAAIAXg4IAZgHIgrBdIgZAJgAA4gpIAxgPIgFAVIgaAKIgBAKIAWgIIgFAWIgVAFIgCALIAagKIgFAZIgzAPgAB/hAIAugMQALgDAGAEQAGAEgCAMQgEARgMAHQAIABgBARQgCAPABACIgYAFIABgLQAAgIAAgCQgCgFgGACIgLABIgHAhIgZAHgACfg1IgMADIgDAQIANgDQAKgDACgIQABgGgGAAIgFABg");
	this.shape_87.setTransform(248.3,535.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("Ag2AKQgIgIADgRIAWAAQAAANAKgEQAHgCAFgHIATAAQgNAWgWAHIgKACQgIAAgFgGgAAZgPIAkAAQgGAEgFABIgKACQgKAAgFgHg");
	this.shape_88.setTransform(234.9,545.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#75221E").s().p("Aj8D8QhohoAAiUQAAiTBohoQBphpCTAAQCUAABoBpQBpBoAACTQAACUhpBoQhoBpiUAAQiTAAhphpgAhLAdIhIEMQBFAjBOAAQCKAABhhhQBhhiAAiJQAAgzgOgsgAk6BpQASA5AmAuQAlAuAyAfIBDj3IhWAcIgaBfIgcAJIAZhfgAkPi+Qg8BWAABoQAAAvAMAqIBpghIBiluQhgAkg7BUgAhWlAIhjFvIBVgcIA7jYIAdgJIg6DYIF/h5QgjhhhUg9QhXg+hrAAQgtAAgpALg");
	this.shape_89.setTransform(237.2,535.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#75221E").s().p("AhsBOQgGgJACgSQAFgTAMgPQAMgPAQgDQARgFAHAIQAIAJgEATQgHAggaAQgAhHASQgPAFgDAWQgDAMAEAEQADADAGgBQAOgEAEgXQADgMgEgEQgDgDgDAAIgDABgAiWBOQAFgHADgKQAEgWgOADQgPAEgEAXIAAAJIgXAAIABgDQAEgTAMgOQAMgPAQgFQARgFAIAJQAHAJgEATQgBALgIANgAgegNIAZgHIABAuIABAAIAXg4IAZgIIgrBeIgZAJgAA4gpIAwgPIgEAVIgaAKIgBAKIAVgIIgDAVIgXAGIgCALIAbgKIgGAYIgxAQgACAhAIAugMQAKgDAGAEQAGAEgCAMQgEAQgMAIQAJABgCAQQgCAQABACIgZAFIABgLQACgIgCgCQgBgFgGACIgLABIgHAhIgZAHgACeg2IgLAEIgDAQIAMgDQAMgEABgHQABgGgGAAIgGAAg");
	this.shape_90.setTransform(249.3,536.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#75221E").s().p("Ag2AKQgIgIADgQIAWAAQAAALAKgCQAHgCAFgHIATAAQgNAWgWAGQgGABgEAAQgIAAgFgFgAAZgOIAkAAIgLAFIgLABQgJAAgFgGg");
	this.shape_91.setTransform(235.8,546);

	this.instance_3 = new lib.ClipGroup_3_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(236.4,534.1,1,1,0,0,0,76.7,76.7);

	this.instance_4 = new lib.ClipGroup_4_3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(236.3,534,1,1,0,0,0,78.1,78.1);

	this.instance_5 = new lib.ClipGroup_5_3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(236.3,534.1,1,1,0,0,0,81.8,81.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("ArMKOIFi0bIQ3AAIAAUbg");
	this.shape_92.setTransform(228.3,534.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_92},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(351));

	// uznat
	this.instance_6 = new lib.uznat();
	this.instance_6.parent = this;
	this.instance_6.setTransform(89.3,523,1,1,0,0,0,75.9,16.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(293).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(1)).wait(45).to({alpha:0},4,cjs.Ease.get(1)).wait(1));

	// t6
	this.instance_7 = new lib.t6();
	this.instance_7.parent = this;
	this.instance_7.setTransform(242,143.9,1,1,0,0,0,62.1,36.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(285).to({_off:false},0).to({x:222,alpha:1},8,cjs.Ease.get(1)).wait(53).to({alpha:0},4,cjs.Ease.get(1)).wait(1));

	// t5
	this.instance_8 = new lib.t5();
	this.instance_8.parent = this;
	this.instance_8.setTransform(212.2,144.4,1,1,0,0,0,67.8,33.8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(228).to({_off:false},0).to({x:192.2,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:172.2,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(57));

	// t4
	this.instance_9 = new lib.t4();
	this.instance_9.parent = this;
	this.instance_9.setTransform(217.6,133.4,1,1,0,0,0,62.4,22.8);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(171).to({_off:false},0).to({x:197.6,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:177.6,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(114));

	// t3
	this.instance_10 = new lib.t3();
	this.instance_10.parent = this;
	this.instance_10.setTransform(211.5,133.4,1,1,0,0,0,92.5,22.8);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(114).to({_off:false},0).to({x:191.5,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:171.5,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(171));

	// t2
	this.instance_11 = new lib.t2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(202.4,131.4,1,1,0,0,0,97.7,20.8);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(57).to({_off:false},0).to({x:182.4,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:162.4,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(228));

	// t1
	this.instance_12 = new lib.t1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(222.6,152.3,1,1,0,0,0,81.4,33.8);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({x:202.6,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:182.6,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(285));

	// 6.jpg
	this.instance_13 = new lib.p6();
	this.instance_13.parent = this;
	this.instance_13.setTransform(160,280,1,1,0,0,0,150,300);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(285).to({_off:false},0).to({x:150,y:300,alpha:1},8,cjs.Ease.get(1)).wait(53).to({alpha:0},4,cjs.Ease.get(1)).wait(1));

	// 5.jpg
	this.instance_14 = new lib.p5();
	this.instance_14.parent = this;
	this.instance_14.setTransform(160,280,1,1,0,0,0,150,300);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(228).to({_off:false},0).to({x:150,y:300,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:140,y:320,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(57));

	// 4.jpg
	this.instance_15 = new lib.p4();
	this.instance_15.parent = this;
	this.instance_15.setTransform(160,280,1,1,0,0,0,150,300);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(171).to({_off:false},0).to({x:150,y:300,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:140,y:320,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(114));

	// 3.jpg
	this.instance_16 = new lib.p3();
	this.instance_16.parent = this;
	this.instance_16.setTransform(160,280,1,1,0,0,0,150,300);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(114).to({_off:false},0).to({x:150,y:300,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:140,y:320,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(171));

	// 2.jpg
	this.instance_17 = new lib.p2();
	this.instance_17.parent = this;
	this.instance_17.setTransform(160,280,1,1,0,0,0,150,300);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(57).to({_off:false},0).to({x:150,y:300,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:140,y:320,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(228));

	// 1.jpg
	this.instance_18 = new lib.p1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(160,280,1,1,0,0,0,150,300);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({x:150,y:300,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:140,y:320,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(285));

	// Слой 8
	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_93.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_93).wait(351));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.5,280,318.6,635.8);
// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/300x600_atlas_.jpg", id:"300x600_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;