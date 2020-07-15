(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x500_atlas_", frames: [[302,0,300,600],[0,0,300,600],[0,1204,300,600],[0,602,300,600]]}
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
	this.spriteSheet = ss["300x500_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["300x500_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["300x500_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["300x500_atlas_"];
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
	this.shape.graphics.f("#FFFFFF").s().p("AAnBRIgMggIg1AAIgLAgIggAAIBAihIALAAIBAChgAgSAbIAlAAIgTg6g");
	this.shape.setTransform(150.4,128.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEBQIgghWIgRBVIgbAAIAgifIAPAAIAhBqIAihqIAPAAIAgCfIgbAAIgRhVIggBWg");
	this.shape_1.setTransform(134.7,128.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag0A8QgRgWAAgmQABghASgZQATgXAfAAQAhAAATAVQARAWABAmQgBAlgSAXQgTAWgiAAQggAAgSgWgAgdgpQgKAPAAAaQAAAcAKAPQAJAOASAAQAUAAALgOQALgPAAgcQAAg4goAAQgTAAgKAPg");
	this.shape_2.setTransform(118.2,128.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA0BmIAAgtIhnAAIAAAtIgZAAIAAhFIALAAQANgRAOgdQANgfAMg5IBIAAIAACGIASAAIAABFgAgLgOQgLAfgNAQIBDAAIAAhvIgbAAQgFAigLAeg");
	this.shape_3.setTransform(102.2,130.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgzA8QgRgWgBgmQAAgiATgYQATgXAfAAQAhAAASAVQATAWgBAmQABAlgUAXQgSAWgiAAQggAAgRgWgAgdgpQgKAPAAAaQAAAcAJAPQALAOARAAQAUAAALgOQALgPAAgcQAAg4goAAQgTAAgKAPg");
	this.shape_4.setTransform(79.7,128.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgwBQIAAifIBiAAIAAAZIhGAAIAACGg");
	this.shape_5.setTransform(66.2,128.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgyBQIAAifIBlAAIAAAZIhIAAIAAAmIAzAAIAAAXIgzAAIAAAvIBHAAIAAAag");
	this.shape_6.setTransform(53.5,128.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhWBQIAAifIAbAAIAACHIAuAAIAAiHIAaAAIAACHIAvAAIAAiHIAbAAIAACfg");
	this.shape_7.setTransform(36.5,128.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAnBRIgMggIg1AAIgLAgIggAAIBAihIALAAIBAChgAgSAbIAlAAIgTg6g");
	this.shape_8.setTransform(19,128.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag1BQIAAieIAugBQAXAAAOAKQAOALAAAUQAAATgUAKQAeAKAAAgQAAAWgQANQgQAMgaAAgAgYAEIAAA1IAOAAQAQAAAJgGQAJgGAAgPQAAgNgHgHQgIgGgTAAgAgYg3IAAAmIAOAAQAaAAAAgUQAAgTgYAAg");
	this.shape_9.setTransform(5.6,128.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgOBPIAAiFIgzAAIAAgYICDAAIAAAYIg1AAIAACFg");
	this.shape_10.setTransform(121.7,102.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag0BQIAAieIAhgBQAkAAASALQASAMAAAZQAAA1hAAAIgNAAIAAA6gAgYg1IAAAyIAMABQASAAAJgGQAJgGAAgPQAAgZgnAAIgJABg");
	this.shape_11.setTransform(108.3,102);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag0A8QgRgWAAgmQABgjASgXQATgXAfAAQAhAAASAVQATAVAAAnQgBAmgSAWQgUAWghAAQghAAgRgWgAgdgpQgKAPAAAaQAAAbAJAPQAKAPASAAQAUAAALgPQALgOAAgcQAAg4goAAQgTAAgKAPg");
	this.shape_12.setTransform(93.6,102);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgNBUIAAgRQgfgDgRgSQgRgSAAgcQAAgaASgTQARgSAegDIAAgRIAbAAIAAARQAfADARARQARARAAAdQAAAbgSATQgRASgeADIAAARgAANAuQATgCAKgMQAKgMAAgUQAAgTgKgLQgLgNgSgCgAgpgfQgKAMAAATQAAAUAKAMQALAMASACIAAhbQgUACgJAMg");
	this.shape_13.setTransform(76.9,102);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgDBQIghhWIgRBUIgbAAIAgidIAPAAIAhBpIAihpIAPAAIAgCdIgbAAIgQhUIggBWg");
	this.shape_14.setTransform(59.5,102.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgzA8QgSgXABglQgBgiAUgYQASgXAfAAQAhAAASAVQATAVgBAnQABAngUAVQgSAWgiAAQggAAgRgWgAgdgpQgKAPAAAaQAAAcAJAOQAKAPASAAQAUAAAMgPQALgPgBgbQAAg4goAAQgTAAgKAPg");
	this.shape_15.setTransform(43,102);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAaBKQgHgIgDgQQgFgXgKgKQgKgKgTAAIgBAAIAABJIgcAAIAAieIAcAAIAAA+IACAAQAUAAAIgIQALgIADgSQADgPAHgHQAGgIAPAAIAKABIAAAZIgFAAQgEAAgDACQgCAEgBAHQgDANgKALQgJAKgPADQAPAEAKALQAKALADATIAEAMQACACAGAAIAEAAIAAAZIgJABQgPAAgIgHg");
	this.shape_16.setTransform(28.4,102);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag9BSIAAigIAdAAIAABpIBShsIAMAAIAACgIgcAAIAAhqIhTBtg");
	this.shape_17.setTransform(6.4,102.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAnBRIgMghIg1AAIgLAhIggAAIBAihIALAAIBAChgAgSAbIAlAAIgTg6g");
	this.shape_18.setTransform(93.6,75.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgOBQIAAiGIgzAAIAAgZICDAAIAAAZIg1AAIAACGg");
	this.shape_19.setTransform(79.3,75.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag0A8QgRgXAAglQAAgiATgXQATgZAfAAQAhAAATAWQARAVABAnQgBAmgSAWQgTAWgiAAQggAAgSgWgAgdgpQgKAQAAAZQAAAcAKAPQAJAOASAAQAVAAAKgOQAMgQAAgbQAAg4gpAAQgSAAgLAPg");
	this.shape_20.setTransform(64.2,75.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgOBQIAAiGIgzAAIAAgZICDAAIAAAZIg1AAIAACGg");
	this.shape_21.setTransform(49.2,75.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgpA9QgSgXAAgmQAAggAUgZQAUgZAgAAQAaAAARAMIgMAYQgJgKgVAAQgUAAgMARQgMASAAAXQAAAZALAPQAMAPATAAQAXAAAMgQIANAXQgRASghAAQghABgSgWg");
	this.shape_22.setTransform(35.3,75.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag9BSIAAihIAcAAIAABqIBThsIAMAAIAAChIgdAAIAAhrIhSBtg");
	this.shape_23.setTransform(20.5,75.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAbBQIAAhAQgOADgNAAQgbAAgNgMQgPgMAAgYIAAgyIAdAAIAAAwQAAAPAIAGQAHAIAOAAQALAAANgEIAAhJIAdAAIAACfg");
	this.shape_24.setTransform(5.6,75.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAdBQIgqhBIgSgBIAABCIgdAAIAAieIAsgBQA7AAAAAuQAAAOgIAMQgIALgNAFIAvBHgAgfg1IAAAsIAMABQARAAAIgFQAIgFAAgPQAAgMgJgEQgIgFgSAAIgKABg");
	this.shape_25.setTransform(79.4,34.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgyBQIAAifIBlAAIAAAaIhJAAIAAAlIA0AAIAAAXIg0AAIAAAwIBHAAIAAAZg");
	this.shape_26.setTransform(65.7,34.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgIBRIg8ihIAgAAIAkBrIAmhrIAfAAIg+Chg");
	this.shape_27.setTransform(52.1,34.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Ag0A8QgRgXAAglQABghASgZQATgXAfAAQAiAAASAVQARAVABAnQgBAmgSAWQgTAWgiAAQggAAgSgWgAgdgpQgKAQAAAZQAAAbAKAPQAIAPATAAQAUAAALgPQAMgPAAgbQAAg4gpAAQgUAAgJAPg");
	this.shape_28.setTransform(37.3,34.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgzA8QgRgXAAglQgBghAUgZQARgXAgAAQAhAAASAVQASAVABAnQgBAmgSAWQgTAWgiAAQghAAgQgWgAgdgpQgKAQAAAZQAAAbAKAPQAKAPARAAQAUAAALgPQAMgPAAgbQAAg4gpAAQgTAAgKAPg");
	this.shape_29.setTransform(21.7,34.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAgBQIAAhIIg+AAIAABIIgdAAIAAifIAdAAIAAA/IA+AAIAAg/IAcAAIAACfg");
	this.shape_30.setTransform(6.2,34.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAxBQIAAifIAcAAIAACfgAhMBQIAAifIAbAAIAAA8IAVgBQAcAAANANQAQAMAAAYQAAAXgQAOQgOAOgbAAgAgxACIAAA2IAPAAQAWAAAGgHQAGgIABgNQAAgMgIgIQgJgGgRgBg");
	this.shape_31.setTransform(112.6,8.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgpA8QgTgVAAgmQABgiAUgYQAVgYAeAAQAcAAAQALIgMAXQgJgJgUAAQgUAAgNARQgMASAAAXQAAAZAMAPQALAPATAAQAXAAAMgQIAOAXQgSASghAAQghAAgSgWg");
	this.shape_32.setTransform(96.6,8.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ag0A8QgRgXAAglQAAgiAUgYQARgXAgAAQAiAAASAVQARAVABAnQgBAngSAVQgTAWgiAAQggAAgSgWgAgdgpQgKAPAAAaQAAAcAKAOQAJAPASAAQAVAAAKgPQAMgOAAgcQAAg4gpAAQgTAAgKAPg");
	this.shape_33.setTransform(81.9,8.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgpA8QgTgVAAgmQABgiAUgYQAVgYAeAAQAcAAAQALIgMAXQgJgJgUAAQgUAAgNARQgMASAAAXQAAAZAMAPQALAPATAAQAXAAAMgQIAOAXQgSASghAAQghAAgSgWg");
	this.shape_34.setTransform(67.4,8.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgyBQIAAifIBlAAIAAAZIhIAAIAAAlIAzAAIAAAYIgzAAIAAAvIBHAAIAAAag");
	this.shape_35.setTransform(54.3,8.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AhDA2QAGAAAHgCQAFgCAGgHQAHgIAFgSQAGgQAGgdIAHgzIBQAAIAACeIgcAAIAAiGIgfAAQgDAegGAeQgHAdgJARQgKARgMAGQgLAGgSAAg");
	this.shape_36.setTransform(39.2,8.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAxBQIAAifIAcAAIAACfgAhMBQIAAifIAbAAIAAA8IAUgBQAdAAAOANQAPAMAAAYQAAAXgPAOQgPAOgcAAgAgxACIAAA2IAPAAQAVAAAHgHQAHgIAAgNQAAgMgIgIQgJgGgQgBg");
	this.shape_37.setTransform(22.8,8.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAdBQIAAiGIg5AAIAACGIgdAAIAAifIBzAAIAACfg");
	this.shape_38.setTransform(6,8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4, new cjs.Rectangle(0,0,157.4,140.8), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAdBQIgqhBIgSgBIAABCIgdAAIAAieIAsgBQA7AAAAAuQAAAOgIAMQgIALgNAFIAvBHgAgfg1IAAAsIAMABQARAAAIgFQAIgFAAgPQAAgMgJgEQgIgFgSAAIgKABg");
	this.shape.setTransform(78.3,34.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgyBQIAAifIBlAAIAAAaIhJAAIAAAlIA0AAIAAAXIg0AAIAAAwIBHAAIAAAZg");
	this.shape_1.setTransform(64.6,34.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIBRIg8ihIAgAAIAkBrIAmhrIAfAAIg+Chg");
	this.shape_2.setTransform(51,34.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag0A8QgRgXAAglQABghASgZQATgXAfAAQAiAAASAVQARAVABAnQgBAmgSAWQgTAWgiAAQggAAgSgWgAgdgpQgKAQAAAZQAAAbAKAPQAIAPATAAQAUAAALgPQAMgPAAgbQAAg4gpAAQgUAAgJAPg");
	this.shape_3.setTransform(36.2,34.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgzA8QgRgXAAglQgBghAUgZQARgXAgAAQAhAAASAVQASAVABAnQgBAmgSAWQgTAWgiAAQghAAgQgWgAgdgpQgKAQAAAZQAAAbAKAPQAKAPARAAQAUAAALgPQAMgPAAgbQAAg4gpAAQgTAAgKAPg");
	this.shape_4.setTransform(20.6,34.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAgBQIAAhIIg+AAIAABIIgdAAIAAifIAdAAIAAA/IA+AAIAAg/IAcAAIAACfg");
	this.shape_5.setTransform(5.1,34.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAxBQIAAifIAcAAIAACfgAhMBQIAAifIAbAAIAAA8IAVgBQAcAAANANQAQAMAAAYQAAAXgQAOQgOAOgbAAgAgxACIAAA2IAPAAQAWAAAGgHQAGgIABgNQAAgMgIgIQgJgGgRgBg");
	this.shape_6.setTransform(111.5,8.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgpA8QgTgVAAgmQABgiAUgYQAVgYAeAAQAcAAAQALIgMAXQgJgJgUAAQgUAAgNARQgMASAAAXQAAAZAMAPQALAPATAAQAXAAAMgQIAOAXQgSASghAAQghAAgSgWg");
	this.shape_7.setTransform(95.5,8.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag0A8QgRgXAAglQAAgiAUgYQARgXAgAAQAiAAASAVQARAVABAnQgBAngSAVQgTAWgiAAQggAAgSgWgAgdgpQgKAPAAAaQAAAcAKAOQAJAPASAAQAVAAAKgPQAMgOAAgcQAAg4gpAAQgTAAgKAPg");
	this.shape_8.setTransform(80.8,8.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgpA8QgTgVAAgmQABgiAUgYQAVgYAeAAQAcAAAQALIgMAXQgJgJgUAAQgUAAgNARQgMASAAAXQAAAZAMAPQALAPATAAQAXAAAMgQIAOAXQgSASghAAQghAAgSgWg");
	this.shape_9.setTransform(66.3,8.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgyBQIAAifIBlAAIAAAZIhIAAIAAAlIAzAAIAAAYIgzAAIAAAvIBHAAIAAAag");
	this.shape_10.setTransform(53.2,8.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhDA2QAGAAAHgCQAFgCAGgHQAHgIAFgSQAGgQAGgdIAHgzIBQAAIAACeIgcAAIAAiGIgfAAQgDAegGAeQgHAdgJARQgKARgMAGQgLAGgSAAg");
	this.shape_11.setTransform(38.1,8.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAxBQIAAifIAcAAIAACfgAhMBQIAAifIAbAAIAAA8IAUgBQAdAAAOANQAPAMAAAYQAAAXgPAOQgPAOgcAAgAgxACIAAA2IAPAAQAVAAAHgHQAHgIAAgNQAAgMgIgIQgJgGgQgBg");
	this.shape_12.setTransform(21.7,8.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAdBQIAAiGIg5AAIAACGIgdAAIAAifIBzAAIAACfg");
	this.shape_13.setTransform(4.9,8.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag9BSIAAihIAdAAIAABqIBShsIAMAAIAACgIgdAAIAAhqIhSBtg");
	this.shape_14.setTransform(95.1,129.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAaBJQgHgGgDgRQgEgXgLgKQgKgKgTAAIgBAAIAABIIgcAAIAAieIAcAAIAAA/IACAAQATAAAKgIQAKgIADgSQADgQAHgHQAHgHAOAAIAKABIAAAZIgFAAQgFAAgBACQgCABgCAJQgDAPgKAKQgKAKgOADQAQAEAJAKQAJALAEAUQACAKACACQADACAFAAIAEAAIAAAZIgJABQgPAAgIgIg");
	this.shape_15.setTransform(80.5,129.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgPBPIAAiFIgyAAIAAgZICDAAIAAAZIg1AAIAACFg");
	this.shape_16.setTransform(65.8,129.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgpA9QgSgXAAgmQgBgiAVgXQAUgZAgABQAagBARAMIgMAYQgKgLgUABQgUAAgMARQgMASAAAWQAAAaALAPQAMAPATAAQAXAAAMgQIAOAXQgSASgiAAQggABgSgWg");
	this.shape_17.setTransform(51.9,129.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag8BSIAAihIAcAAIAABqIBShsIALAAIAACgIgcAAIAAhqIhRBtg");
	this.shape_18.setTransform(37.2,129.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAcBPIAAg/QgOADgOAAQgYAAgQgMQgOgMAAgYIAAgyIAdAAIAAAwQAAAPAIAGQAHAIANAAQAMgBANgDIAAhJIAcAAIAACeg");
	this.shape_19.setTransform(22.2,129.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgzA8QgSgYABglQAAggASgZQATgYAfABQAhgBASAWQASAVAAAmQAAAngTAWQgSAWgiAAQggAAgRgWgAgdgpQgKAPAAAZQAAAdAKAPQAJAOASAAQAUAAALgOQAMgQAAgcQAAg3gpAAQgTAAgKAPg");
	this.shape_20.setTransform(7.5,129.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag9BqIAAigIAdAAIAABqIBShtIAMAAIAAChIgcAAIAAhqIhTBsgAgWhMQgLgJgDgQIAXgEQACATAPAAQAQAAACgTIAWAEQgDAQgLAJQgLAJgQAAQgOAAgLgJg");
	this.shape_21.setTransform(77.9,100.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag0A8QgRgXAAglQAAghATgZQATgXAfAAQAhAAASAVQATAVAAAnQAAAmgUAWQgTAWghAAQggAAgSgWgAgdgpQgKAPAAAaQAAAcAJAOQAKAPASAAQAUAAALgPQALgPAAgbQAAg4goAAQgTAAgKAPg");
	this.shape_22.setTransform(62.3,102.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAaBKQgHgHgDgRQgFgXgKgJQgJgKgUAAIgBAAIAABIIgcAAIAAieIAcAAIAAA/IACAAQASAAAKgJQAKgIAEgRQACgQAIgHQAGgIAPAAIAKABIAAAZIgFAAQgEAAgDACQgCAEgBAHQgDANgKALQgKAKgOADQAOAEALALQAJAKAEAUQACAKACACQACACAGAAIAEAAIAAAZIgJABQgQAAgHgHg");
	this.shape_23.setTransform(47.7,102.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgxBPIAAidIBiAAIAAAYIhFAAIAACFg");
	this.shape_24.setTransform(34.6,102.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgyBlIAAieIBlAAIAAAZIhIAAIAAAkIAzAAIAAAYIgzAAIAAAwIBHAAIAAAZgAAQhLQgFgEAAgHQAAgGAFgEQADgEAHAAQAHAAAEAEQAEAFAAAFQAAAGgEAFQgFAFgGAAQgGAAgEgFgAgghLQgEgEAAgHQAAgGAEgEQAEgEAGAAQAHAAAEAEQAEAEAAAGQAAAHgEAEQgFAFgGAAQgGAAgEgFg");
	this.shape_25.setTransform(21.9,100.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhDA2QAJAAAFgCQAEgCAHgHQAGgIAFgSQAGgQAGgdIAHgzIBPAAIAACeIgbAAIAAiGIgfAAQgDAegGAeQgGAdgKARQgJARgNAGQgMAGgRAAg");
	this.shape_26.setTransform(6.8,102.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag9BqIAAigIAdAAIAABqIBShtIAMAAIAAChIgcAAIAAhqIhTBsgAgWhMQgKgIgEgQIAXgFQACATAPAAQAPAAADgTIAWAFQgDAQgLAIQgKAJgRAAQgPAAgKgJg");
	this.shape_27.setTransform(130.8,74.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Ag0A8QgRgXAAglQAAgiATgYQATgXAfAAQAhAAASAVQATAVAAAnQAAAlgTAXQgUAWghAAQggAAgSgWgAgdgpQgKAPAAAaQAAAaAJAQQAKAPASAAQAUAAALgPQALgPAAgbQAAg4goAAQgTAAgKAPg");
	this.shape_28.setTransform(115.2,76.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgDBRIghhXIgRBUIgbAAIAgieIAPAAIAhBrIAihrIAPAAIAgCeIgbAAIgRhUIgfBXg");
	this.shape_29.setTransform(98.7,76.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgyBPIAAieIBlAAIAAAZIhIAAIAAAmIAzAAIAAAXIgzAAIAAAvIBHAAIAAAZg");
	this.shape_30.setTransform(83.9,76.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgOBPIAAiFIgzAAIAAgZICDAAIAAAZIg1AAIAACFg");
	this.shape_31.setTransform(70,76.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgpA8QgTgVAAgmQABgjATgXQAVgYAfAAQAcAAAQALIgLAXQgKgJgVAAQgUAAgMARQgMARAAAYQAAAYALAQQAMAPATAAQAWAAANgQIAOAXQgSASgiAAQggAAgSgWg");
	this.shape_32.setTransform(56.1,76.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ag9BSIAAihIAcAAIAABqIBThsIAMAAIAACgIgdAAIAAhpIhSBsg");
	this.shape_33.setTransform(41.4,76.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgpA8QgTgWAAglQAAgiAVgYQAVgYAeAAQAcAAAQALIgLAXQgKgJgUAAQgUAAgMARQgNARAAAYQAAAYAMAQQALAPATAAQAWAAANgQIAOAXQgSASghAAQggAAgTgWg");
	this.shape_34.setTransform(26.9,76.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgpA8QgSgWAAgmQAAghAUgZQAUgXAgAAQAbAAARALIgNAXQgIgJgWAAQgTAAgNAQQgMARAAAZQAAAZALAPQANAPASAAQAXAAANgQIAMAXQgRASghAAQggAAgTgWg");
	this.shape_35.setTransform(6.6,76.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-0.8,0,137.8,137.3), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag6BRIAAgZIAEAAQAGAAACgEQACgDACgHQAFgbAagLQgVgEgIgKQgIgJAAgOQAAgUAQgOQAPgNAeAAQAXAAAXACIAACeIgcAAIAAhCIgHAAQgSAAgKAJQgKAJgEATQgDARgHAGQgHAHgNAAIgKAAgAgLgzQgJAGAAAMQAAAZAjAAIAQAAIAAgwIgVgBQgMAAgJAGg");
	this.shape.setTransform(97.9,75.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAnBRIgMghIg2AAIgKAhIggAAIBAihIALAAIBAChgAgTAbIAmAAIgTg6g");
	this.shape_1.setTransform(84.1,75.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhWBPIAAieIAbAAIAACHIAvAAIAAiHIAaAAIAACHIAvAAIAAiHIAaAAIAACeg");
	this.shape_2.setTransform(66.7,75.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag2BPIAAieIAcAAIAAA8IAXgBQAbAAAPANQAQAMAAAZQAAAXgQANQgPAOgbgBgAgaACIAAA2IARAAQAjAAAAgcQAAgMgJgIQgKgGgPgBg");
	this.shape_3.setTransform(50,75.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhDA2QAJAAAEgCQAGgCAGgHQAFgIAGgSQAIgWADgXQAGgaACgZIBPAAIAACeIgbAAIAAiGIgfAAQgDAegGAeQgHAdgJARQgKARgMAGQgMAGgRAAg");
	this.shape_4.setTransform(34.5,75.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgzA8QgSgXABglQgBgiAUgYQARgXAgAAQAhAAASAVQASAVAAAnQAAAngTAVQgSAWgiAAQggAAgRgWgAgdgpQgKAPAAAaQAAAcAJAOQAKAPASAAQAUAAALgPQAMgOAAgcQAAg4gpAAQgTAAgKAPg");
	this.shape_5.setTransform(19.5,75.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag1BPIAAieIBfAAIAAAZIhDAAIAAAlIAVgBQAbABAPANQAQALAAAYQAAAWgQAOQgPANgbgBgAgZAFIAAAzIAQAAQARAAAJgGQAIgIAAgNQAAgKgIgIQgIgHgRAAIgRABg");
	this.shape_6.setTransform(5.4,75.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAnBQIgMgfIg2AAIgKAfIggAAIBAigIALAAIBACggAgTAbIAmAAIgTg6g");
	this.shape_7.setTransform(135,128.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag0BQIAAieIAhgBQAkAAASALQASALAAAZQAAA2hAAAIgMgBIAAA7gAgXg1IAAAzIALABQASAAAJgHQAJgGAAgPQAAgZgnAAg");
	this.shape_8.setTransform(121.7,128.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgyBPIAAidIBlAAIAAAYIhJAAIAAAmIA0AAIAAAXIg0AAIAAAwIBHAAIAAAYg");
	this.shape_9.setTransform(108.7,128.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAgBPIAAhHIg+AAIAABHIgdAAIAAidIAdAAIAAA+IA+AAIAAg+IAcAAIAACdg");
	this.shape_10.setTransform(94.4,128.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag8BqIAAigIAcAAIAABqIBRhtIAMAAIAAChIgcAAIAAhqIhSBsgAgWhMQgKgIgFgQIAYgFQACATAPAAQAQAAACgTIAVAFQgCAQgLAIQgKAJgRAAQgPAAgKgJg");
	this.shape_11.setTransform(78.6,125.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgyBPIAAidIBlAAIAAAYIhIAAIAAAmIAzAAIAAAXIgzAAIAAAwIBHAAIAAAYg");
	this.shape_12.setTransform(64.6,128.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgPBPIAAiFIgyAAIAAgYICDAAIAAAYIg1AAIAACFg");
	this.shape_13.setTransform(50.7,128.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAgBPIAAhHIg/AAIAABHIgcAAIAAidIAcAAIAAA+IA/AAIAAg+IAcAAIAACdg");
	this.shape_14.setTransform(35.9,128.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag0A8QgRgWAAgmQAAgjATgXQASgXAgAAQAhAAASAVQATAUAAAoQAAAlgTAXQgTAWgiAAQghAAgRgWgAgdgpQgKAOAAAbQAAAcAKAOQAIAPATAAQAUAAALgPQALgOAAgcQAAg4goAAQgTAAgKAPg");
	this.shape_15.setTransform(20.5,128.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAaBKQgHgIgDgQQgEgWgLgLQgKgKgTAAIgBAAIAABIIgcAAIAAieIAcAAIAAA/IACAAQAUAAAJgIQAKgIADgSQADgQAHgHQAHgHAOAAIAKABIAAAZIgEAAQgGAAgBACIgEALQgEAPgJAJQgKAKgOADQAQAEAJALQAJAKAEAUQACAKACACQADACAFAAIAEAAIAAAZIgJABQgPAAgIgHg");
	this.shape_16.setTransform(5.8,128.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag2BQIAAieIAcAAIAAA7IAXgBQAbAAAPANQAQAMAAAZQAAAWgQAOQgPAOgbAAgAgaADIAAA1IARAAQAjAAAAgcQAAgMgJgHQgIgHgRgBg");
	this.shape_17.setTransform(153.6,102.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgPBQIAAiFIgyAAIAAgZICDAAIAAAZIg1AAIAACFg");
	this.shape_18.setTransform(139.3,102.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgpA9QgSgXAAglQAAgjAUgYQAUgXAfAAQAbAAARALIgLAYQgKgLgVAAQgUABgMARQgMARAAAXQAAAZALAPQALAQAUAAQAXAAAMgQIANAXQgRATghAAQgggBgTgVg");
	this.shape_19.setTransform(125.3,102.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgzA7QgRgVAAgmQAAgiASgYQATgXAfAAQAhAAASAVQASAUAAAoQABAlgUAXQgTAXgiAAQggAAgQgYgAgegpQgKAQAAAZQAAAbAKAQQAKAOARAAQAUAAAMgOQALgPAAgcQAAg4gogBQgSABgMAPg");
	this.shape_20.setTransform(110.6,102.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgEBRIgghXIgRBVIgbAAIAgieIAPAAIAhBqIAihqIAPAAIAgCeIgbAAIgRhVIggBXg");
	this.shape_21.setTransform(94.1,102.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag8BSIAAigIAcAAIAABqIBRhtIAMAAIAAChIgcAAIAAhqIhSBsg");
	this.shape_22.setTransform(77.7,102.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgOBQIAAiFIgzAAIAAgZICDAAIAAAZIg1AAIAACFg");
	this.shape_23.setTransform(62.6,102.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgpA9QgTgWAAgmQAAgiAVgZQAUgXAfAAQAbAAARALIgLAYQgKgLgVAAQgTABgNARQgMARAAAXQAAAaAMAOQAKAQAUAAQAXAAAMgQIAOAXQgSATghAAQghgBgSgVg");
	this.shape_24.setTransform(48.7,102.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgyBQIAAieIBlAAIAAAZIhIAAIAAAlIAzAAIAAAXIgzAAIAAAwIBHAAIAAAZg");
	this.shape_25.setTransform(35.7,102.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgEBRIgghXIgRBVIgbAAIAgieIAPAAIAhBqIAihqIAPAAIAgCeIgbAAIgRhVIggBXg");
	this.shape_26.setTransform(20.3,102.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag1BQIAAieIAugBQAXAAAOAKQAOALAAAUQAAATgUALQAeAJAAAgQAAAWgRANQgPAMgaAAgAgYAEIAAA1IAOAAQAQAAAJgGQAJgGAAgPQAAgNgHgHQgIgGgTAAgAgYg3IAAAmIANAAQAbAAAAgUQAAgTgYAAg");
	this.shape_27.setTransform(5.4,102);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAdBQIgqhBIgSgBIAABCIgdAAIAAieIAsgBQA8AAgBAvQABAOgJALQgIALgNAFIAvBHgAgfg1IAAAsIAMABQASAAAHgFQAIgFAAgPQAAgLgJgFQgHgFgUAAIgJABg");
	this.shape_28.setTransform(79.1,34.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgyBPIAAieIBlAAIAAAZIhJAAIAAAmIA0AAIAAAXIg0AAIAAAvIBHAAIAAAZg");
	this.shape_29.setTransform(65.4,34.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgIBRIg7ihIAeAAIAlBrIAmhrIAfAAIg/Chg");
	this.shape_30.setTransform(51.8,34.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgzA8QgSgWABgmQAAgjASgXQASgXAgAAQAhAAASAVQASAWAAAmQAAAlgTAXQgSAWgiAAQggAAgRgWgAgdgpQgKAOAAAbQAAAbAJAPQAJAPATAAQAUAAALgPQALgOAAgcQAAg4goAAQgTAAgKAPg");
	this.shape_31.setTransform(37.1,34.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgzA8QgSgXABglQgBgiAUgYQARgXAgAAQAhAAASAVQATAWgBAmQABAmgUAWQgSAWgiAAQggAAgRgWgAgdgpQgKAPAAAaQAAAbAJAPQAJAPATAAQAUAAALgPQALgPAAgbQAAg4goAAQgTAAgKAPg");
	this.shape_32.setTransform(21.4,34.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAgBPIAAhHIg+AAIAABHIgdAAIAAieIAdAAIAAA/IA+AAIAAg/IAcAAIAACeg");
	this.shape_33.setTransform(6,34.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAyBPIAAidIAbAAIAACdgAhMBPIAAidIAcAAIAAA7IAUgBQAbAAAPANQAPAMgBAZQABAXgPANQgPANgbAAgAgwADIAAA1IAOABQAUAAAIgJQAGgHAAgNQAAgMgHgHQgIgHgSAAg");
	this.shape_34.setTransform(112.4,8.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgpA8QgSgWAAglQAAgiAUgZQAUgYAgAAQAaAAARAMIgMAXQgKgJgUgBQgTAAgNASQgMARAAAYQAAAZALAOQAMAQATAAQAXAAAMgQIANAXQgRATghAAQghAAgSgXg");
	this.shape_35.setTransform(96.4,8.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgzA7QgSgWABgmQgBghAUgYQARgYAgAAQAhABASAVQASAVAAAmQAAAngTAWQgSAWgiABQghAAgQgYgAgdgpQgKAQAAAYQAAAdAJAOQAKAPASAAQAUAAALgPQAMgPAAgcQAAg4gpAAQgTAAgKAQg");
	this.shape_36.setTransform(81.6,8.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgpA8QgSgWAAglQAAgiAUgZQAUgYAgAAQAaAAARAMIgMAXQgKgJgTgBQgUAAgNASQgMARAAAYQAAAZALAOQAMAQATAAQAYAAALgQIANAXQgRATghAAQghAAgSgXg");
	this.shape_37.setTransform(67.1,8.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgyBPIAAidIBlAAIAAAZIhJAAIAAAlIA0AAIAAAXIg0AAIAAAwIBHAAIAAAYg");
	this.shape_38.setTransform(54.1,8.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AhDA2QAJAAAEgCQAGgBAGgIQAGgIAFgSQAGgRAGgcQAFgdACgWIBPAAIAACeIgbAAIAAiGIgfAAQgDAegGAeQgHAdgJARQgKARgMAGQgMAGgRAAg");
	this.shape_39.setTransform(39,8.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAxBPIAAidIAcAAIAACdgAhMBPIAAidIAbAAIAAA7IAUgBQAcAAAOANQAPAMABAZQAAAXgQANQgOANgcAAgAgxADIAAA1IAPABQAVAAAHgJQAHgHAAgNQAAgMgIgHQgIgHgSAAg");
	this.shape_40.setTransform(22.5,8.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAdBPIAAiEIg5AAIAACEIgdAAIAAidIBzAAIAACdg");
	this.shape_41.setTransform(5.8,8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(0,0,159.1,136.6), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAdBQIgqhCIgSAAIAABCIgdAAIAAidIAsgDQA8AAAAAwQAAANgJANQgIAKgNAEIAvBIgAgfg1IAAAsIAMAAQASAAAHgEQAIgFAAgOQAAgMgIgFQgJgFgSAAg");
	this.shape.setTransform(79.1,60.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgyBPIAAidIBlAAIAAAYIhIAAIAAAmIAzAAIAAAWIgzAAIAAAxIBHAAIAAAYg");
	this.shape_1.setTransform(65.4,60.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIBRIg8igIAgAAIAkBqIAmhqIAfAAIg/Cgg");
	this.shape_2.setTransform(51.8,60.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgzA8QgSgWABgmQAAgjASgXQATgXAfAAQAhAAASAVQASAVAAAnQAAAlgTAXQgSAWgjAAQgfAAgRgWgAgdgpQgKAPAAAaQAAAbAJAPQAKAPARAAQAVAAALgPQALgOAAgcQAAg4goAAQgTAAgKAPg");
	this.shape_3.setTransform(37.1,60.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgzA8QgSgXABglQAAgiASgYQATgXAfAAQAhAAASAVQATAVgBAnQABAmgUAWQgSAWgiAAQggAAgRgWgAgdgpQgKAQAAAZQAAAbAJAPQAJAPATAAQAUAAALgPQALgPAAgbQAAg4goAAQgTAAgKAPg");
	this.shape_4.setTransform(21.4,60.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAgBPIAAhIIg+AAIAABIIgdAAIAAidIAdAAIAAA+IA+AAIAAg+IAcAAIAACdg");
	this.shape_5.setTransform(6,60.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAxBPIAAieIAcAAIAACegAhMBPIAAieIAcAAIAAA8IAUgBQAbAAAPANQAOAMAAAZQAAAXgOANQgPANgbAAgAgwADIAAA1IAOABQAUAAAIgIQAGgIAAgNQAAgLgHgIQgIgHgSAAIgPABg");
	this.shape_6.setTransform(112.4,34.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgpA8QgSgVAAgmQgBgjAVgXQAUgYAgAAQAbAAAQALIgMAXQgJgJgVAAQgUAAgMARQgMARAAAYQAAAYALAQQAMAPATAAQAXAAAMgQIANAXQgQASgjAAQggAAgSgWg");
	this.shape_7.setTransform(96.4,34.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgzA8QgSgWABgmQAAgiASgYQASgXAgAAQAhAAASAVQASAVAAAnQAAAlgTAXQgSAWgiAAQggAAgRgWgAgdgpQgKAOAAAbQAAAcAJAOQAKAPASAAQAUAAALgPQALgOAAgcQAAg4goAAQgTAAgKAPg");
	this.shape_8.setTransform(81.6,34.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgpA8QgSgVAAgmQgBgjAVgXQAUgYAgAAQAbAAAQALIgMAXQgJgJgVAAQgUAAgMARQgMARAAAYQAAAYALAQQAMAPATAAQAXAAAMgQIANAXQgQASgjAAQggAAgSgWg");
	this.shape_9.setTransform(67.1,34.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgyBPIAAieIBlAAIAAAZIhJAAIAAAmIA0AAIAAAXIg0AAIAAAvIBHAAIAAAZg");
	this.shape_10.setTransform(54.1,34.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhDA2QAGAAAHgCQAFgCAHgHQAEgGAHgVQAIgUADgYQAGgaACgaIBPAAIAACeIgbAAIAAiGIgfAAQgDAfgGAeQgHAcgJASQgKARgMAGQgNAHgQgBg");
	this.shape_11.setTransform(39,34.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAxBPIAAieIAcAAIAACegAhMBPIAAieIAbAAIAAA8IAUgBQAdAAANANQAPAMABAZQAAAXgQANQgOANgcAAgAgxADIAAA1IAPABQAUAAAIgIQAHgIAAgNQAAgLgIgIQgHgHgTAAIgQABg");
	this.shape_12.setTransform(22.5,34.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAeBPIAAiFIg6AAIAACFIgdAAIAAieIByAAIAACeg");
	this.shape_13.setTransform(5.8,34.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgyBPIAAidIBlAAIAAAZIhJAAIAAAlIA0AAIAAAXIg0AAIAAAwIBHAAIAAAYg");
	this.shape_14.setTransform(189.7,8.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAyBPIAAidIAbAAIAACdgAhMBPIAAidIAcAAIAAA7IAUgBQAbAAAPANQAOAMAAAZQAAAXgOANQgPANgbAAgAgwADIAAA1IAOABQAUAAAIgJQAGgHAAgNQAAgMgHgHQgIgHgSAAg");
	this.shape_15.setTransform(173.7,8.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAgBPIAAhHIg+AAIAABHIgdAAIAAidIAdAAIAAA+IA+AAIAAg+IAcAAIAACdg");
	this.shape_16.setTransform(156.7,8.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAgBPIAAhHIg/AAIAABHIgcAAIAAidIAcAAIAAA+IA/AAIAAg+IAcAAIAACdg");
	this.shape_17.setTransform(141.5,8.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag0A7QgQgVgBgnQAAgiATgXQATgYAfAAQAhABASAVQASAVABAmQAAAmgUAXQgTAWgiABQggAAgRgYgAgdgpQgLAPAAAZQABAcAJAPQAJAPASAAQAVAAALgPQALgOAAgdQAAg4goAAQgTAAgKAQg");
	this.shape_18.setTransform(126.1,8.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag9BSIAAigIAcAAIAABqIBShtIANAAIAACgIgcAAIAAhpIhTBsg");
	this.shape_19.setTransform(110.5,8.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAoBmIAAgtIhoAAIAAieIAcAAIAACFIA3AAIAAiFIAcAAIAACFIASAAIAABGg");
	this.shape_20.setTransform(95.7,10.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAnBQIgMgfIg1AAIgMAfIgfAAIBAifIALAAIBACfgAgTAaIAmAAIgTg5g");
	this.shape_21.setTransform(80.5,8.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag1BQIAAieIAtgBQAYAAAOAKQAOALAAAUQAAATgUAKQAeAKAAAgQAAAWgRANQgQAMgZAAgAgZAEIAAA1IAOAAQARAAAJgGQAJgGAAgPQAAgOgIgGQgHgGgTAAgAgZg3IAAAmIAOAAQAbAAAAgUQAAgTgYAAIgRABg");
	this.shape_22.setTransform(67.1,8.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag0A7QgQgVAAgnQAAgiASgXQATgYAfAAQAhABASAVQASAVAAAmQAAAmgSAXQgTAWgiABQghAAgRgYgAgdgpQgKAPAAAZQAAAdAKAOQAJAPASAAQATAAAMgPQALgOAAgdQAAg4goAAQgTAAgKAQg");
	this.shape_23.setTransform(52.3,8.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAgBPIAAhHIg/AAIAABHIgcAAIAAidIAcAAIAAA+IA/AAIAAg+IAcAAIAACdg");
	this.shape_24.setTransform(36.8,8.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAgBPIAAhHIg/AAIAABHIgcAAIAAidIAcAAIAAA+IA/AAIAAg+IAbAAIAACdg");
	this.shape_25.setTransform(21.6,8.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag9BSIAAigIAdAAIAABqIBShtIAMAAIAACgIgcAAIAAhpIhTBsg");
	this.shape_26.setTransform(6.2,8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(0,0,194.8,69), null);


(lib.p4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._4();
	this.instance.parent = this;
	this.instance.setTransform(1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p4, new cjs.Rectangle(1,0,300,600), null);


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


(lib.ClipGroup_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj7D8QhphoAAiUQAAiTBphoQBohpCTAAQCUAABoBpQBpBoAACTQAACUhpBoQhoBpiUAAQiSAAhphpgAhLAdIhIEMQBGAjBNAAQCKAABhhhQBhhiAAiJQAAgwgOgvgAk6BpQATA4AlAvQAlAuAzAeIBCj2IhWAcIgaBfIgdAIIAahegAkPi+Qg8BWAABoQAAAsAMAtIBpghIBiluQhgAkg7BUgAhXlAIhiFuIBWgbIA6jYIAdgJIg6DYIF/h5QgjhhhVg9QhWg+hrAAQgsAAgrALg");
	mask.setTransform(67.3,67.3);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(195,195,195,0)","#C3C3C3","#A8A8A8","#888887","#636361","#3A3A38","#1C1C1A","#1C1C1A"],[0,0.933,0.933,0.949,0.961,0.976,0.988,0.992,1],41.4,25.1,-39.3,-23.8).s().p("AqgClIH8tFINFH8In8NFg");
	this.shape.setTransform(67.3,67.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#FFFFFF","#F7F7F7","#E3E3E3","#C2C2C2","#ACACAC","#E7E7E7","#FFFFFF","#FCFCFC","#F6F6F6","#EAEAEA","#D9D9D9","#C3C3C3","rgba(195,195,195,0)","rgba(0,0,0,0)"],[0,0.02,0.075,0.157,0.259,0.314,0.596,0.733,0.831,0.871,0.894,0.914,0.933,0.933,1],41.4,25.1,-39.3,-23.8).s().p("AqgClIH8tFINFH8In8NFg");
	this.shape_1.setTransform(67.3,67.3);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(31.6,31.7,71.4,71.4), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkgEZQh4h8AAidQAAioB4h4QB4h4CoAAQCqAAB3B4QB4B4AACoQAACph4B4Qh3B4iqAAQilAAh7iAg");
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

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(40.9,40.9,81.8,81.8), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkZEbQh2h1ABimQgBikB2h2QB1h1CkAAQClAAB2B1QB0B1ABClQgBCmh0B1Qh2B1ilAAQikAAh1h1g");
	mask.setTransform(78.1,78.1);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#D32D3E","#C42C39","#9D292B","#992929","#75221C"],[0,0.514,0.671,0.973,1,1],-26,-35.3,37.8,51.3).s().p("AsMh1IOCqXIKXOCIuCKXg");
	this.shape.setTransform(78.1,78.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(38.2,38.2,79.9,79.9), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkUEVQhzhyAAijQAAihBzhzQByhzCiAAQCjAAByBzQBzBzAAChQAACjhzByQhyBzijAAQiiAAhyhzg");
	mask.setTransform(76.7,76.7);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#D32D3E","#C42C39","#9D292B","#992929","#75221C"],[0,0.224,0.475,0.957,1,1],-25.5,-34.5,37.1,50.4).s().p("Ar+hzINyqLIKLNyItyKLg");
	this.shape.setTransform(76.7,76.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(37.5,37.5,78.4,78.5), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag2AKQgIgIADgRIAVAAQABANAKgEQAGgBAGgIIASAAQgMAWgWAHIgKACQgIAAgFgGgAAZgPIAkAAIgMAFQgGACgEAAQgJAAgFgHg");
	mask.setTransform(8,7.1);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(195,195,195,0)","#C3C3C3","#A8A8A8","#888887","#636361","#3A3A38","#1C1C1A","#1C1C1A"],[0,0.933,0.933,0.949,0.961,0.976,0.988,0.992,1],37.6,22.8,-43,-26).s().p("AhNAIIAxhQIBqBBIgxBQg");
	this.shape.setTransform(7.8,7.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#FFFFFF","#F7F7F7","#E3E3E3","#C2C2C2","#ACACAC","#E7E7E7","#FFFFFF","#FCFCFC","#F6F6F6","#EAEAEA","#D9D9D9","#C3C3C3","rgba(195,195,195,0)","rgba(0,0,0,0)"],[0,0.02,0.075,0.157,0.259,0.314,0.596,0.733,0.831,0.871,0.894,0.914,0.933,0.933,1],37.6,22.8,-43,-26).s().p("AhNAIIAxhQIBqBBIgxBQg");
	this.shape_1.setTransform(7.8,7.3);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(1.9,5.6,12.2,3.1), null);


(lib.ClipGroup_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhsBOQgHgJAEgSQAEgTAMgOQAMgPAQgEIAKgCQAMAAAEAIQAFAKgDAPQgDAPgJANQgJANgMAHgAhHASQgFACgFAFQgGAIgCAMQgEATAKAAIADgBQAOgEAFgWQADgTgJAAIgEAAgAiVBOQAFgIACgJQACgMgEgFQgDgDgFACQgGABgEAGQgGAHgDAMIgBAJIgVAAIAAgCQAEgTAMgPQANgPAQgFIAKgBQALAAAFAJQAFAJgDAPQgEAPgGAJgAgegNIAYgHIADAvIAXg5IAZgHIgrBdIgZAJgAA4gpIAxgPIgFAWIgZAJIgCALIAVgJIgDAWIgWAFIgDALIAbgKIgGAZIgyAPgAB/g/IAugNIAJgBQAQAAgEASQgDAQgNAIQAJACgCAQQgCAPABACIgYAGIAAgMIABgKQgCgFgGACIgLABIgHAhIgZAHgACfg1IgMADIgDARIAMgEQALgDACgIQABgGgFAAIgGABg");
	mask.setTransform(26.4,25.1);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(195,195,195,0)","#C3C3C3","#A8A8A8","#888887","#636361","#3A3A38","#1C1C1A","#1C1C1A"],[0,0.933,0.933,0.949,0.961,0.976,0.988,0.992,1],31.9,19.3,-49,-29.7).s().p("AkIAkICvkfIFiDYIiuEfg");
	this.shape.setTransform(26.5,25.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#FFFFFF","#F7F7F7","#E3E3E3","#C2C2C2","#ACACAC","#E7E7E7","#FFFFFF","#FCFCFC","#F6F6F6","#EAEAEA","#D9D9D9","#C3C3C3","rgba(195,195,195,0)","rgba(0,0,0,0)"],[0,0.02,0.075,0.157,0.259,0.314,0.596,0.733,0.831,0.871,0.894,0.914,0.933,0.933,1],31.9,19.3,-49,-29.7).s().p("AkIAkICvkfIFiDYIiuEfg");
	this.shape_1.setTransform(26.5,25.2);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0, new cjs.Rectangle(7,17.3,38.9,15.7), null);


// stage content:
(lib._300x500 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		canvas.style.cursor = "pointer";
		canvas.addEventListener("click", function() { window.callClick(); });
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(237));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgXWgm+MAutAAAMAAABN9MgutAAAg");
	this.shape.setTransform(150,250);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(237));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAMIAGAAQAAAJAIAAQAKAAAAgKQAAgJgKAAIAAAAIAAgEIAAAAQAJAAAAgJQAAgJgJAAQgHAAgBAIIgFAAQABgMAMAAQAOAAAAANQAAAIgHADQAIACAAAJQAAAHgEAEQgEADgHAAQgNAAgBgNg");
	this.shape_1.setTransform(151.2,485.8,1.2,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJAVQgDgCgBgGIAFAAQACAHAGAAQAEAAACgBQADgDAAgIQAAgLgJAAQgFAAgCAEIgEAAIAAgZIAYAAIAAAEIgUAAIAAAQQAEgEAEABQAFgBAEAEQAEAEAAAIQAAAKgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_2.setTransform(146.9,485.9,1.2,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAFAZIAAgIIgTAAIAAgFIAQgkIAGAAIgRAkIAOAAIAAgNIAEAAIAAANIAHAAIAAAFIgHAAIAAAIg");
	this.shape_3.setTransform(142.5,485.8,1.2,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIAWQgFgEAAgGIAAgXQAAgGAFgDQADgEAFAAQAFAAAFAEQADADAAAGIAAAXQAAAGgDAEQgFADgFAAQgFAAgDgDgAgHgKIAAAVQAAAKAHAAQAJAAAAgKIAAgVQAAgKgJAAQgHAAAAAKg");
	this.shape_4.setTransform(138.1,485.8,1.2,1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIAZIARgtIgRAAIAAAIIgFAAIAAgMIAbAAIAAAEIgQAtg");
	this.shape_5.setTransform(133.8,485.8,1.2,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJAWQgEgEAAgGIAAgXQAAgGAEgDQAEgEAFAAQAGAAAEAEQAEADAAAGIAAAXQAAAGgEAEQgEADgGAAQgFAAgEgDgAgIgKIAAAVQAAAKAIAAQAJAAAAgKIAAgVQAAgKgJAAQgIAAAAAKg");
	this.shape_6.setTransform(129.3,485.8,1.2,1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNALQAAgGADgFIAMgYIAFAAIgKAWIAEgBQAGAAADADQAEAEAAAHQAAAFgEAFQgEAEgGAAQgNAAAAgOgAgIALQAAAKAIgBQAJABAAgKQAAgLgJABQgIgBAAALg");
	this.shape_7.setTransform(125,485.9,1.2,1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgGAZIAKgXQgCACgCAAQgGAAgDgEQgEgDAAgGQAAgPANAAQAOAAAAAOQAAAFgDAFIgMAZgAgIgJQAAAJAIAAQAJAAAAgJQAAgLgJABQgIgBAAALg");
	this.shape_8.setTransform(120.6,485.8,1.2,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHAZIAPgtIgQAAIAAAIIgFAAIAAgMIAbAAIAAAEIgRAtg");
	this.shape_9.setTransform(116.3,485.8,1.2,1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIAZIARgtIgRAAIAAAIIgFAAIAAgMIAbAAIAAAEIgQAtg");
	this.shape_10.setTransform(111.9,485.8,1.2,1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAFAZIAAgIIgTAAIAAgFIAQgkIAGAAIgRAkIAOAAIAAgNIAEAAIAAANIAHAAIAAAFIgHAAIAAAIg");
	this.shape_11.setTransform(107.4,485.8,1.2,1.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIAWQgFgEAAgGIAAgXQAAgGAFgDQADgEAFAAQAGAAAEAEQAEADgBAGIAAAXQABAGgEAEQgEADgGAAQgFAAgDgDgAgHgKIAAAVQAAAKAHAAQAJAAAAgKIAAgVQAAgKgJAAQgHAAAAAKg");
	this.shape_12.setTransform(103,485.8,1.2,1.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AACAZIAAgrIgIAIIAAgGIAIgIIAFAAIAAAxg");
	this.shape_13.setTransform(98.4,485.8,1.2,1.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAMAZIAAgXIgXAAIAAAXIgFAAIAAgxIAFAAIAAAWIAXAAIAAgWIAFAAIAAAxg");
	this.shape_14.setTransform(91.5,485.8,1.2,1.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgQAZIAAgxIARAAQAQAAAAAPQAAANgQAAIgLAAIAAAVgAgKAAIALAAQALAAAAgJQAAgKgLAAIgLAAg");
	this.shape_15.setTransform(86.1,485.8,1.2,1.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgOAZIAAgxIAdAAIAAAFIgYAAIAAAsg");
	this.shape_16.setTransform(81.2,485.8,1.2,1.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgMAUQgDgDgBgEIgBgNIABgMQABgEADgEQAFgEAHAAQAIAAAEAEQAGAGAAAOQAAAPgGAFQgFAFgHAAQgGAAgGgFgAgIgQQgDADAAANQAAAOADADQAEAEAEAAQAEAAAFgEQADgEAAgNQAAgMgDgEQgFgEgEAAQgEAAgEAEg");
	this.shape_17.setTransform(75.7,485.8,1.2,1.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgJAVQgDgCgBgGIAFAAQABAHAHAAQAEAAACgBQADgDAAgIQAAgLgJAAQgFAAgCAEIgFAAIAAgZIAZAAIAAAEIgUAAIAAAQQADgEAFABQAFgBAEAEQAEAEAAAIQAAAKgEADQgFAEgFAAQgGAAgDgEg");
	this.shape_18.setTransform(68.7,485.9,1.2,1.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AACAZIAAgrIgIAIIAAgGIAIgIIAFAAIAAAxg");
	this.shape_19.setTransform(64,485.8,1.2,1.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgJAWQgEgEAAgGIAAgXQAAgGAEgDQAEgEAFAAQAGAAAEAEQAEADAAAGIAAAXQAAAGgEAEQgEADgGAAQgFAAgEgDgAgIgKIAAAVQAAAKAIAAQAJAAAAgKIAAgVQAAgKgJAAQgIAAAAAKg");
	this.shape_20.setTransform(59.9,485.8,1.2,1.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgNAZIAAgFIATgXQADgEgBgDQAAgKgIABQgIgBAAAKIgEAAQAAgOAMAAQAGAAAEAEQAEADAAAHQAAAEgEAFIgRAVIAVAAIAAAFg");
	this.shape_21.setTransform(55.6,485.8,1.2,1.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AACAZIAAgrIgIAIIAAgGIAIgIIAFAAIAAAxg");
	this.shape_22.setTransform(50.9,485.8,1.2,1.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgJAVQgDgDAAgFIAEAAQABAHAHAAQAEAAACgBQADgDgBgIQABgLgJAAQgFAAgCAEIgEAAIAAgZIAXAAIAAAEIgTAAIAAAQQADgEAFABQAFgBADAEQAEADABAJQAAAKgEADQgFAEgFAAQgFAAgEgEg");
	this.shape_23.setTransform(46.8,485.9,1.2,1.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAEAZIAAgIIgTAAIAAgFIARgkIAGAAIgRAkIANAAIAAgNIAFAAIAAANIAHAAIAAAFIgHAAIAAAIg");
	this.shape_24.setTransform(42.4,485.8,1.2,1.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgJAWQgDgEAAgGIAAgXQAAgGADgDQAEgEAFAAQAGAAAEAEQADADAAAGIAAAXQAAAGgDAEQgEADgGAAQgFAAgEgDgAgHgKIAAAVQgBAKAIAAQAJAAgBgKIAAgVQABgKgJAAQgIAAABAKg");
	this.shape_25.setTransform(38,485.8,1.2,1.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgIAZIARgtIgRAAIAAAIIgFAAIAAgMIAbAAIAAAEIgQAtg");
	this.shape_26.setTransform(33.7,485.8,1.2,1.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgIAZIARgtIgRAAIAAAIIgFAAIAAgMIAbAAIAAAEIgQAtg");
	this.shape_27.setTransform(29.3,485.8,1.2,1.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAMAZIAAgXIgXAAIAAAXIgFAAIAAgxIAFAAIAAAWIAXAAIAAgWIAFAAIAAAxg");
	this.shape_28.setTransform(22,485.8,1.2,1.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAMAZIAAgXIgXAAIAAAXIgFAAIAAgxIAFAAIAAAWIAXAAIAAgWIAFAAIAAAxg");
	this.shape_29.setTransform(16.2,485.8,1.2,1.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AANAZIAAgoIgZAoIgFAAIAAgxIAFAAIAAAoIAZgoIAFAAIAAAxg");
	this.shape_30.setTransform(10.2,485.8,1.2,1.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgJAVQgFgDAAgHQAAgIAIgDQgHgEAAgHQAAgGAEgEQAEgDAFAAQAGAAAEADQAEAEAAAGQAAAHgHAEQAIADAAAIQAAAHgEADQgFAEgGAAQgFAAgEgEgAgGAEQgDADAAAEQAAAEADADQADADADAAQAEAAADgDQADgDAAgEQAAgEgDgDQgDgDgEAAQgDAAgDADgAgIgLQAAAJAIAAQAJAAAAgJQAAgJgJAAQgIAAAAAJg");
	this.shape_31.setTransform(152.1,477.4,1.2,1.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgCADIAAgFIAFAAIAAAFg");
	this.shape_32.setTransform(146.7,480,1.2,1.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AANAWIAAgKIgZAAIAAAKIgFAAIAAgOIAEAAQAFgKAAgNIAAgHIAUAAIAAAeIAGAAIAAAOgAgDgKQAAAIgEAKIAOAAIAAgZIgKAAg");
	this.shape_33.setTransform(143.2,479,1.2,1.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgCgHIAFAAIAAAKIgFAFg");
	this.shape_34.setTransform(137.7,480.6,1.2,1.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAJAZIAAgaIgRAaIgFAAIAAgiIAFAAIAAAaIARgaIAFAAIAAAigAgJgYIAEAAQAAAGAFAAQAFAAABgGIAEAAQAAAJgKAAQgJAAAAgJg");
	this.shape_35.setTransform(134.2,477.5,1.2,1.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgJACIAAgDIASAAIAAADg");
	this.shape_36.setTransform(130,478.1,1.2,1.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgNAZIAAgEIATgYQADgEAAgEQAAgJgJAAQgIAAAAAJIgFAAQAAgNANAAQAOAAAAANQAAAFgEAFIgRAWIAVAAIAAAEg");
	this.shape_37.setTransform(126,477.4,1.2,1.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAIAZIAAgaIgQAaIgFAAIAAgiIAFAAIAAAaIAQgaIAGAAIAAAigAgKgYIAFAAQAAAGAFAAQAFAAABgGIAEAAQgBAJgJAAQgJAAgBgJg");
	this.shape_38.setTransform(119.3,477.5,1.2,1.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAJARIAAgZIgRAZIgFAAIAAghIAFAAIAAAZIARgZIAFAAIAAAhg");
	this.shape_39.setTransform(114.4,478.3,1.2,1.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAIARIgQgRIAOgQIAGAAIgOAQIAQARgAgNARIAAghIAFAAIAAAQIAAARg");
	this.shape_40.setTransform(110.3,478.3,1.2,1.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgMAAQAAgHAEgFQAEgFAGAAQAEAAACACQACAAADAEIgDADIgEgDIgEgBQgJAAAAAMQAAANAJAAIAEAAIAEgEIADAEIgFAEIgGABQgOAAAAgSg");
	this.shape_41.setTransform(105.8,478.3,1.2,1.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAIARIAAgPIgPAAIAAAPIgFAAIAAghIAFAAIAAAOIAPAAIAAgOIAFAAIAAAhg");
	this.shape_42.setTransform(101.3,478.3,1.2,1.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAJARIAAgZIgRAZIgFAAIAAghIAFAAIAAAZIARgZIAFAAIAAAhg");
	this.shape_43.setTransform(96.6,478.3,1.2,1.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AATAWIAAgKIgqAAIAAgiIAFAAIAAAeIAOAAIAAgeIAEAAIAAAeIAOAAIAAgeIAFAAIAAAeIAFAAIAAAOg");
	this.shape_44.setTransform(90.9,479,1.2,1.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgIAOQgFgFAAgJQAAgIAFgFQACgEAGAAQAGAAAEAEQAEAEAAAJQAAAKgEAEQgEAEgGAAQgGAAgCgEgAgFgJQgDADAAAGQAAAIADADQACACADAAQAEAAADgCQACgDAAgIQAAgHgCgCQgCgDgFAAQgDAAgCADg");
	this.shape_45.setTransform(85,478.3,1.2,1.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgQAZIAAgxIARAAQAHAAAFAEQAEAEAAAHQAAAGgEADQgFAEgHAAIgMAAIAAAVgAgLAAIAMAAQALAAAAgJQAAgKgLAAIgMAAg");
	this.shape_46.setTransform(80.5,477.4,1.2,1.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AANAWIAAgKIgZAAIAAAKIgFAAIAAgOIAEAAQAFgKAAgNIAAgHIAVAAIAAAeIAFAAIAAAOgAgDgKQAAAKgEAIIAPAAIAAgZIgLAAg");
	this.shape_47.setTransform(73.1,479,1.2,1.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgNANIADgDQAGADAEAAQAIAAAAgGQAAgFgGAAIgFAAIAAgEIAFAAQAGAAAAgFQAAgFgIAAQgEAAgEADIgDgEQAFgEAGAAQANAAAAAKQAAAFgGACQAHABgBAHQABAEgFADQgDADgGAAQgIAAgFgFg");
	this.shape_48.setTransform(68.8,478.3,1.2,1.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgNAAQAAgRANAAQAOAAAAARIAAABIgWAAQAAAMAJAAQAGAAADgEIAEADQgGAGgHAAQgOAAAAgSgAgHgHIgBAGIARAAIgBgGQgDgFgFAAQgFAAgCAFg");
	this.shape_49.setTransform(64.8,478.3,1.2,1.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgJAOQgEgFAAgJQAAgIAEgFQAEgEAFAAQAHAAADAEQAEAFAAAIQAAAJgEAFQgDAEgHAAQgFAAgEgEgAgFgJQgDACAAAHQAAAIADADQADACACAAQAEAAACgCQADgDAAgIQAAgGgDgDQgCgDgEAAQgCAAgDADg");
	this.shape_50.setTransform(60.3,478.3,1.2,1.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgNAZIAAgxIAFAAIAAAEQAEgEAFAAQAGAAACADQAFAEAAALQAAAJgFAEQgCADgGAAQgFAAgEgEIAAATgAgIgGQAAAMAIAAQAJAAAAgMQAAgOgJAAQgIAAAAAOg");
	this.shape_51.setTransform(55.9,479.2,1.2,1.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAMAZIAAgsIgXAAIAAAsIgFAAIAAgxIAhAAIAAAxg");
	this.shape_52.setTransform(50.6,477.4,1.2,1.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgCgHIAFAAIAAAKIgFAFg");
	this.shape_53.setTransform(44.4,480.6,1.2,1.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgKAPQgDgDAAgEQAAgJAMAAIAKAAIAAgEQAAgHgJAAQgFAAgDAEIgDgDQAEgGAHAAQAOAAAAAMIAAAWIgFAAIAAgDQgEAEgFAAQgHAAgDgDgAgIAIQAAAFAIAAQAFAAACgCQACgBAAgFIAAgEIgJAAQgIAAAAAHg");
	this.shape_54.setTransform(41,478.3,1.2,1.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgMARIAAghIAOAAQALAAAAAJQAAAFgGACQAGABAAAHQAAAJgKAAgAgIANIAKAAQAGAAAAgGQAAgFgGAAIgKAAgAgIgBIAKAAQAGAAAAgGQAAgFgGAAIgKAAg");
	this.shape_55.setTransform(36.8,478.3,1.2,1.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAIARIgQgRIAPgQIAFAAIgOAQIAQARgAgNARIAAghIAFAAIAAAQIAAARg");
	this.shape_56.setTransform(32.7,478.3,1.2,1.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgMAAQAAgRAOAAIAGACQADABACADIgDADIgEgDIgEgBQgJAAAAAMQAAANAJAAIAEAAIAEgEIADAEIgFAEIgGABQgOAAAAgSg");
	this.shape_57.setTransform(28.2,478.3,1.2,1.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgJAOQgEgEAAgKQAAgJAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAJQAAAKgEAEQgEAEgGAAQgFAAgEgEgAgFgJQgDADAAAGQAAAIADADQACACADAAQADAAADgCQADgDAAgIQAAgHgDgCQgDgDgDAAQgDAAgCADg");
	this.shape_58.setTransform(23.8,478.3,1.2,1.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAQAZIAAglIgOAdIgDAAIgOgdIAAAlIgFAAIAAgxIAFAAIAPAiIAQgiIAGAAIAAAxg");
	this.shape_59.setTransform(18.2,477.4,1.2,1.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgDADIAAgFIAHAAIAAAFg");
	this.shape_60.setTransform(11.5,480,1.2,1.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgKARIAAghIAVAAIAAAEIgQAAIAAAdg");
	this.shape_61.setTransform(9.3,478.3,1.2,1.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgCgHIAFAAIAAAKIgFAFg");
	this.shape_62.setTransform(117.6,472.2,1.2,1.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgGAZIAKgWQgCABgCAAQgGAAgDgEQgEgDAAgHQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEADAAAHQAAAFgDAGIgMAYgAgIgKQAAAKAIAAQAJAAAAgKQAAgJgJgBQgIABAAAJg");
	this.shape_63.setTransform(114.2,469,1.2,1.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AACAZIAAgrIgIAIIAAgGIAIgIIAFAAIAAAxg");
	this.shape_64.setTransform(109.6,469,1.2,1.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAEAZIAAgIIgSAAIAAgFIARgkIAEAAIgRAkIAOAAIAAgNIAFAAIAAANIAGAAIAAAFIgGAAIAAAIg");
	this.shape_65.setTransform(105.5,469,1.2,1.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgJAWQgEgDAAgGIAFAAQABAIAHgBQAEAAACgCQADgDAAgHQAAgLgJAAQgGAAgBAEIgFAAIAAgZIAZAAIAAAEIgUAAIAAAQQADgEAFAAQAFAAADAEQAFAEAAAIQAAAJgEAFQgFADgFAAQgGAAgDgDg");
	this.shape_66.setTransform(101.1,469.1,1.2,1.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AACAZIAAgrIgIAIIAAgGIAIgIIAFAAIAAAxg");
	this.shape_67.setTransform(96.4,469,1.2,1.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AACAZIAAgrIgIAIIAAgGIAIgIIAFAAIAAAxg");
	this.shape_68.setTransform(92,469,1.2,1.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AABAJIAIgJIgIgHIAAgHIAOAOIgOAPgAgOAJIAIgJIgIgHIAAgHIAOAOIgOAPg");
	this.shape_69.setTransform(85.8,469.7,1.2,1.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgCADIAAgFIAFAAIAAAFg");
	this.shape_70.setTransform(82.2,471.6,1.2,1.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgOAZIAAgxIAdAAIAAAFIgYAAIAAAsg");
	this.shape_71.setTransform(79,469,1.2,1.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgCADIAAgFIAFAAIAAAFg");
	this.shape_72.setTransform(75.2,471.6,1.2,1.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AAMAZIAAgXIgXAAIAAAXIgFAAIAAgxIAFAAIAAAWIAXAAIAAgWIAFAAIAAAxg");
	this.shape_73.setTransform(71.1,469,1.2,1.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgCADIAAgFIAFAAIAAAFg");
	this.shape_74.setTransform(67.1,471.6,1.2,1.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgMAUQgFgFAAgPQAAgOAFgGQAFgEAHAAQAOAAAEAOIgGAAQgCgKgKAAQgEAAgDAEQgEAEAAAMQAAANAEAEQADAEAEAAQAKAAACgLIAGAAQgEAPgOAAQgGAAgGgFg");
	this.shape_75.setTransform(63.3,469,1.2,1.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AANAZIAAgoIgZAoIgFAAIAAgxIAFAAIAAAoIAZgoIAFAAIAAAxg");
	this.shape_76.setTransform(55.5,469,1.2,1.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AARAfIAAgMIghAAIAAAMIgFAAIAAgRIAEAAQAHgKAAgRIAAgRIAaAAIAAAsIAGAAIAAARgAgGgKQAAAQgEAIIAUAAIAAgnIgQAAg");
	this.shape_77.setTransform(49.5,469.7,1.2,1.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAMAZIAAgXIgXAAIAAAXIgFAAIAAgxIAFAAIAAAWIAXAAIAAgWIAFAAIAAAxg");
	this.shape_78.setTransform(43.7,469,1.2,1.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AAPAZIgFgLIgUAAIgEALIgGAAIASgxIAEAAIATAxgAgJAJIASAAIgJgZg");
	this.shape_79.setTransform(38.3,469,1.2,1.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AAKAZIgVgZIAUgYIAHAAIgVAYIAXAZgAgRAZIAAgxIAFAAIAAAxg");
	this.shape_80.setTransform(33.4,469,1.2,1.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AABAAIAOgOIAAAHIgIAHIAIAJIAAAGgAgOAAIAOgOIAAAHIgIAHIAIAJIAAAGg");
	this.shape_81.setTransform(27.9,469.7,1.2,1.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgLAUQgGgFAAgPQAAgOAGgGQAEgEAHAAQAIAAAFAEQAEAGAAAOQAAAPgEAFQgGAFgHAAQgHAAgEgFgAgIgQQgDADAAANQAAAOADADQAEAEAEAAQAFAAADgEQAEgEAAgNQAAgMgEgEQgDgEgFAAQgEAAgEAEg");
	this.shape_82.setTransform(20.9,469,1.2,1.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgMAUQgEgFAAgPQAAgOAEgGQAFgEAHAAQAIAAAEAEQAFAGAAAOQAAAPgFAFQgEAFgIAAQgHAAgFgFgAgHgQQgEADAAANQAAAOAEADQADAEAEAAQAFAAAEgEQADgEAAgNQAAgMgDgEQgEgEgFAAQgEAAgDAEg");
	this.shape_83.setTransform(15.4,469,1.2,1.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgLAUQgGgFAAgPQAAgOAGgGQAEgEAHAAQAHAAAFAEQAGAGAAAOQAAAPgGAFQgGAFgGAAQgHAAgEgFgAgIgQQgDADAAANQAAAOADADQAEAEAEAAQAEAAAEgEQAEgEAAgNQAAgMgEgEQgEgEgEAAQgEAAgEAEg");
	this.shape_84.setTransform(10,469,1.2,1.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#494948").s().p("AgbAdQgMgNAAgQQAAgPAMgMQALgLAQgBQAQAAANAMQALAMAAAPQAAAQgLANQgNALgQAAQgPAAgMgLgAgYgXQgJAKAAANQgBAPAKAJQALAKANAAQAPAAAJgKQALgJAAgPQAAgMgLgLQgKgLgOABQgMgBgMALgAALAWIAAgBIAAgFQAAgIgFgCQgCgBgGgBIgFAAIAAASIgIAAIAAgrIAPAAQAHAAAEABQAHAEAAAIQAAAFgFADIgGACQAGABACADQADAEAAACIAAAHIAAACIAAABgAgHAAIAHAAQAEAAACgBQAEgBABgFQAAgFgEgCQgDgCgFABIgGAAg");
	this.shape_85.setTransform(272.6,471.5);

	this.instance = new lib.ClipGroup_6();
	this.instance.parent = this;
	this.instance.setTransform(236.4,435,1,1,0,0,0,67.3,67.3);

	this.instance_1 = new lib.ClipGroup_1_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(248.5,436.4,1,1,0,0,0,26.4,25.2);

	this.instance_2 = new lib.ClipGroup_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(234.9,445.9,1,1,0,0,0,7.8,7.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("Aj7D8QhphoAAiUQAAiTBphoQBohpCTAAQCUAABoBpQBpBoAACTQAACUhpBoQhoBpiUAAQiTAAhohpgAhLAdIhIEMQBFAjBOAAQCJAABihhQBhhiAAiJQAAgwgOgvgAk6BpQASA4AmAvQAlAuAzAfIBCj3IhWAcIgaBfIgdAJIAahfgAkPi+Qg8BWAABoQAAAsAMAtIBpghIBiluQhgAkg7BUgAhXlAIhiFuIBWgbIA6jYIAdgJIg6DYIF/h5QgjhhhVg9QhWg+hrAAQgsAAgrALg");
	this.shape_86.setTransform(235.6,435.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AhsBOQgHgJAEgSQADgTAMgOQANgPAQgEQAQgFAIAIQAIAJgEATQgHAhgaAPgAhHASQgOAFgEAWQgDAMAEAFQADADAFgCQAOgEAFgWQADgTgJAAIgEAAgAiVBOQAEgHACgKQADgMgEgFQgDgDgFACQgGABgEAGQgGAHgDAMIgBAJIgVAAIAAgCQAEgTAMgPQAMgPARgFQAQgEAHAJQAIAJgEATQgCANgHAKgAgegNIAYgGIADAuIAXg4IAZgIIgrBdIgZAJgAA4gpIAxgPIgFAWIgZAJIgCALIAVgJIgDAWIgWAGIgDAKIAbgKIgGAZIgyAPgAB/g/IAugNQALgDAGAEQAGAFgCALQgDAQgNAIQAJACgCAQQgCAPABACIgYAGIAAgMQABgHgBgDQgBgFgGACIgLABIgHAhIgZAHgACfg1IgMADIgDARIAMgEQALgCACgJQABgGgGAAIgFABg");
	this.shape_87.setTransform(247.7,436.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("Ag2AKQgIgIADgRIAVAAQABAMAKgCQAGgCAGgIIASAAQgNAXgVAGIgKACQgIAAgFgGgAAZgPIAkAAIgMAGIgJABQgKAAgFgHg");
	this.shape_88.setTransform(234.3,445.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#75221E").s().p("Aj7D9QhphpAAiUQAAiTBphpQBohoCTAAQCUAABoBoQBpBpAACTQAACUhpBpQhoBoiUAAQiTAAhohogAhLAeIhIEMQBGAiBNAAQCJAABihhQBhhiAAiJQAAgwgOgvgAk6BpQASA5AmAuQAlAuAzAeIBCj1IhWAbIgaBfIgdAIIAahegAkPi+Qg8BVAABpQAAAvAMAqIBpghIBiluQhgAkg7BUgAhXk/IhiFuIBWgbIA6jZIAdgIIg6DXIF/h5QgjhhhVg9QhWg+hrAAQgsAAgrAMg");
	this.shape_89.setTransform(236.5,435.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#75221E").s().p("AhsBOQgHgIAEgTQADgTAMgOQANgPAQgEQAQgFAIAIQAIAJgEATQgHAhgaAPgAhHASQgOAEgFAXQgCAMAEAEQADAEAFgCQAPgFAEgVQADgTgJAAIgEAAgAiWBOQAFgGACgLQADgMgEgFQgDgDgFACQgGABgEAGQgGAHgDAMIgBAJIgVAAIAAgCQAEgTAMgPQAMgPARgFQAQgFAHAKQAIAJgEASQgCAOgHAKgAgegNIAYgHIADAvIAXg5IAZgHIgrBdIgZAJgAA4gpIAxgPIgFAWIgaAJIgBAKIAVgIIgDAWIgWAFIgDALIAbgKIgGAZIgyAPgAB/g/IAugNQALgDAGAEQAGAFgCALQgDAQgNAIQAJABgCARQgCAPABACIgYAGIAAgMQABgIgBgCQgBgFgGACIgLABIgHAhIgZAHgACfg1IgMADIgDARIAMgEQALgDACgIQABgGgGAAIgFABg");
	this.shape_90.setTransform(248.6,437.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#75221E").s().p("Ag2AKQgIgIADgRIAVAAQABANAKgEQAHgCAEgHIATAAQgNAXgVAGIgKACQgIAAgFgGgAAZgPIAkAAQgHAEgFABQgFACgFAAQgJAAgFgHg");
	this.shape_91.setTransform(235.2,446.5);

	this.instance_3 = new lib.ClipGroup_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(235.7,434.6,1,1,0,0,0,76.7,76.7);

	this.instance_4 = new lib.ClipGroup_4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(235.7,434.6,1,1,0,0,0,78.1,78.1);

	this.instance_5 = new lib.ClipGroup_5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(235.7,434.6,1,1,0,0,0,81.8,81.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("ArMKPIFh0dIQ4AAIAAUdg");
	this.shape_92.setTransform(227.7,434.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_92},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(237));

	// Слой 14
	this.instance_6 = new lib.t4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(168.7,64.4,1,1,0,0,0,52.9,34.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(171).to({_off:false},0).to({x:148.7,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:128.7,alpha:0},8,cjs.Ease.get(1)).wait(1));

	// Слой 13
	this.instance_7 = new lib.t3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(211.8,53.8,1,1,0,0,0,95.9,23.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(114).to({_off:false},0).to({x:191.8,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:171.8,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(57));

	// Слой 12
	this.instance_8 = new lib.t2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(218.6,64.4,1,1,0,0,0,103.1,34.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(57).to({_off:false},0).to({x:198.6,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:178.6,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(114));

	// Слой 4
	this.instance_9 = new lib.t1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(213.4,51.3,1,1,0,0,0,97.4,21.4);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:193.4,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:173.4,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(171));

	// 4.jpg
	this.instance_10 = new lib.p4();
	this.instance_10.parent = this;
	this.instance_10.setTransform(160,200,1,1,0,0,0,150,300);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(171).to({_off:false},0).to({x:150,y:220,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:140,y:240,alpha:0},8,cjs.Ease.get(1)).wait(1));

	// 3.jpg
	this.instance_11 = new lib.p3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(160,200,1,1,0,0,0,150,300);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(114).to({_off:false},0).to({x:150,y:220,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:140,y:240,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(57));

	// 2.jpg
	this.instance_12 = new lib.p2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(160,200,1,1,0,0,0,150,300);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(57).to({_off:false},0).to({x:150,y:220,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:140,y:240,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(114));

	// 1.jpg
	this.instance_13 = new lib.p1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(160,200,1,1,0,0,0,150,300);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({x:150,y:220,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:140,y:240,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(171));

	// Слой 16
	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("EgXbAnEMAAAhOHMAu3AAAMAAABOHg");
	this.shape_93.setTransform(150,250);

	this.timeline.addTween(cjs.Tween.get(this.shape_93).wait(237));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.5,150,318,616.4);
// library properties:
lib.properties = {
	width: 300,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/300x500_atlas_.jpg", id:"300x500_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;