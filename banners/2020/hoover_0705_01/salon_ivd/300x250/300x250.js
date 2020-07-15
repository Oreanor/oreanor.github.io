(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x250_atlas_", frames: [[0,0,300,250],[0,756,300,250],[0,252,300,250],[0,504,300,250]]}
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
	this.shape.graphics.f("#FFFFFF").s().p("AAYBCIgig2IgPAAIAAA2IgYAAIAAiCIAkgBQAxAAAAAmQAAAMgHAKQgHAIgKAEIAmA7gAgZgsIAAAkIAKABQAPAAAFgEQAHgDAAgNQAAgKgHgDQgGgEgQAAIgIAAg");
	this.shape.setTransform(65,29.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgpBBIAAiBIBTAAIAAAUIg7AAIAAAfIAqAAIAAASIgqAAIAAAoIA6AAIAAAUg");
	this.shape_1.setTransform(53.7,29.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGBCIgyiDIAaAAIAeBXIAfhXIAaAAIg0CDg");
	this.shape_2.setTransform(42.6,29.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgqAxQgOgSAAgfQAAgbAPgVQAPgTAaAAQAcAAAOASQAPASAAAfQAAAfgPASQgQASgcAAQgaAAgOgSgAgYgiQgIAMAAAWQAAAWAIANQAIAMAOAAQARAAAJgMQAJgMAAgXQAAgughAAQgQAAgIAMg");
	this.shape_3.setTransform(30.4,29.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgqAxQgOgSAAgfQAAgbAPgVQAPgTAaAAQAcAAAOASQAPASAAAfQAAAdgPAUQgQASgcAAQgaAAgOgSgAgYgiQgIAMAAAWQAAAWAIANQAHAMAPAAQARAAAJgMQAJgMAAgXQAAgughAAQgQAAgIAMg");
	this.shape_4.setTransform(17.6,29.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAaBBIAAg6IgzAAIAAA6IgXAAIAAiBIAXAAIAAAzIAzAAIAAgzIAXAAIAACBg");
	this.shape_5.setTransform(4.9,29.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAoBBIAAiBIAXAAIAACBgAg+BBIAAiBIAWAAIAAAxIARgBQAXAAALAKQAMAKAAAUQAAATgMALQgMALgXAAgAgoACIAAAsIAMAAQARAAAGgGQAFgHAAgKQAAgKgGgGQgGgGgPAAg");
	this.shape_6.setTransform(92.3,7.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgiAxQgPgSAAgfQAAgbARgUQAQgUAaAAQAXAAANAKIgKATQgHgIgRAAQgQAAgLAOQgKAOAAATQAAAVAKAMQAJANAQAAQASAAALgNIALATQgOAPgcAAQgaAAgQgTg");
	this.shape_7.setTransform(79.2,7.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgqAxQgOgSAAgfQAAgcAPgTQAQgUAZAAQAbAAAPASQAPARAAAgQAAAfgQASQgPATgbAAQgbAAgOgTgAgYgiQgIANAAAVQAAAXAIAMQAHAMAQAAQAQAAAJgMQAJgMAAgXQAAgughAAQgPAAgJAMg");
	this.shape_8.setTransform(67.1,7.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgiAxQgPgSAAgfQAAgbARgUQARgUAZAAQAWAAAOAKIgJATQgIgIgRAAQgQAAgKAOQgLAOAAATQAAAUAKANQAJANAQAAQASAAALgNIALATQgOAPgcAAQgaAAgQgTg");
	this.shape_9.setTransform(55.1,7.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgpBBIAAiBIBTAAIAAAUIg8AAIAAAfIArAAIAAASIgrAAIAAAoIA7AAIAAAUg");
	this.shape_10.setTransform(44.4,7.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag3AtQAHgBAEgBQAFgCAEgFQAFgHAFgQQAEgNAGgXIAFgqIBCAAIAACBIgYAAIAAhtIgZAAQgDAdgEAUQgFAYgIAOQgJAOgJAFQgKAFgOAAg");
	this.shape_11.setTransform(32,7.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAoBBIAAiBIAXAAIAACBgAg+BBIAAiBIAWAAIAAAxIARgBQAXAAALAKQANALAAATQAAATgNALQgMALgWAAgAgoACIAAAsIAMAAQARAAAGgGQAFgHAAgKQAAgKgGgGQgGgGgPAAg");
	this.shape_12.setTransform(18.5,7.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAYBBIAAhtIgvAAIAABtIgXAAIAAiBIBdAAIAACBg");
	this.shape_13.setTransform(4.7,7.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAhBEIgKgbIgtAAIgJAbIgbAAIA2iHIAJAAIA2CHgAgPAXIAfAAIgQgxg");
	this.shape_14.setTransform(240.3,50.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgDBEIgbhJIgOBHIgXAAIAbiFIAMAAIAcBZIAchZIANAAIAbCFIgXAAIgOhHIgaBJg");
	this.shape_15.setTransform(227.1,51.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgrAyQgOgTgBgfQABgcAQgUQAPgUAaAAQAcAAAPASQAPASAAAgQAAAfgQATQgQATgcAAQgaAAgPgTgAgYgiQgJANAAAVQAAAXAJANQAHAMAPAAQAQAAAKgMQAKgNgBgXQAAgvghAAQgQAAgIANg");
	this.shape_16.setTransform(213.3,51);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAsBWIAAgnIhXAAIAAAnIgUAAIAAg6IAJAAQALgPALgXQAMgbAJgwIA9AAIAABxIAOAAIAAA6gAgJgMQgIAXgMARIA4AAIAAheIgXAAQgEAegJAYg");
	this.shape_17.setTransform(199.8,53);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgrAyQgOgSAAggQAAgdAPgTQAQgUAaAAQAcAAAPASQAPARAAAhQAAAggQASQgQATgcAAQgbAAgOgTgAgYgiQgJANAAAVQAAAXAIANQAJAMAOAAQARAAAJgMQAKgNAAgXQAAgvgiAAQgQAAgIANg");
	this.shape_18.setTransform(180.9,51);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgpBDIAAiFIBTAAIAAAVIg7AAIAABwg");
	this.shape_19.setTransform(169.6,51);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgqBDIAAiFIBVAAIAAAVIg9AAIAAAgIArAAIAAATIgrAAIAAAoIA7AAIAAAVg");
	this.shape_20.setTransform(158.9,51);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhIBDIAAiFIAWAAIAABxIAnAAIAAhxIAXAAIAABxIAmAAIAAhxIAXAAIAACFg");
	this.shape_21.setTransform(144.6,51);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAgBEIgJgbIgtAAIgJAbIgbAAIA2iHIAJAAIA2CHgAgPAXIAfAAIgQgxg");
	this.shape_22.setTransform(130,50.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgsBDIAAiEIAmgBQAUAAALAIQAMAJAAARQAAAQgRAJQAZAIAAAbQAAASgOALQgNAKgWAAgAgVAwIAMAAQANAAAJgFQAHgFABgNQAAgLgIgGQgFgFgRAAIgMAAgAgVguIAAAgIAMAAQAWAAAAgRQAAgQgUAAg");
	this.shape_23.setTransform(118.8,51);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgMBDIAAhwIgqAAIAAgVIBtAAIAAAVIgsAAIAABwg");
	this.shape_24.setTransform(216.2,29);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgrBDIAAiEIAcgBQAdAAAPAKQAQAJAAAVQAAAtg2AAIgLgBIAAAxgAgUgtIAAArIAKABQAPAAAHgGQAIgFAAgMQAAgVghAAg");
	this.shape_25.setTransform(204.9,28.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgrAyQgOgSAAggQAAgdAPgTQAQgUAaAAQAcAAAPASQAPARAAAhQAAAggQASQgQATgcAAQgbAAgOgTgAgYgiQgJANAAAVQAAAXAIANQAJAMAOAAQARAAAJgMQAKgNAAgXQAAgvgiAAQgQAAgIANg");
	this.shape_26.setTransform(192.5,29);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgLBGIAAgOQgYgCgQgPQgOgOAAgYQAAgYAPgPQAOgQAZgBIAAgOIAXAAIAAAOQAaACANAOQAPAQAAAXQAAAWgPARQgPAPgYACIAAAOgAALAnQAQgCAIgKQAJgKAAgRQAAgPgJgKQgIgLgQgCgAgigZQgJAIAAASQAAAQAJAKQAJAKAPACIAAhNQgRADgHAKg");
	this.shape_27.setTransform(178.6,28.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgDBEIgbhJIgOBHIgXAAIAaiFIANAAIAcBZIAdhZIAMAAIAbCFIgXAAIgOhHIgbBJg");
	this.shape_28.setTransform(164,29.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgrAyQgOgSAAggQAAgdAPgTQAQgUAaAAQAcAAAPASQAPARAAAhQAAAfgQATQgQATgcAAQgbAAgOgTgAgYgiQgJANAAAVQAAAXAIANQAJAMAOAAQARAAAJgMQAKgNAAgXQAAgvgiAAQgQAAgIANg");
	this.shape_29.setTransform(150.1,29);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAWA+QgHgHgCgNQgDgTgJgIQgIgJgQAAIgBAAIAAA9IgYAAIAAiFIAYAAIAAA1IABAAQARAAAHgHQAJgHACgOQADgOAGgGQAFgGAMAAIAJABIAAAVIgEAAQgEAAgBACQgCACgCAHQgCAMgJAIQgHAIgNADQAOADAHAJQAIAJADAQQACAJACACQABABAGAAIADAAIAAAVIgIABQgMAAgHgGg");
	this.shape_30.setTransform(137.9,29);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgzBFIAAiHIAYAAIAABZIBFhbIAKAAIAACHIgYAAIAAhZIhFBbg");
	this.shape_31.setTransform(119.4,29);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAhBEIgKgbIgtAAIgJAbIgbAAIA2iHIAJAAIA2CHgAgPAXIAfAAIgQgxg");
	this.shape_32.setTransform(192.6,6.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgMBDIAAhwIgqAAIAAgVIBtAAIAAAVIgsAAIAABwg");
	this.shape_33.setTransform(180.6,6.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgrAyQgOgSAAggQAAgdAPgTQAQgUAaAAQAcAAAPASQAPARAAAhQAAAfgQATQgQATgcAAQgbAAgOgTgAgYgiQgJANAAAVQAAAXAIANQAJAMAOAAQARAAAJgMQAKgNAAgXQAAgvgiAAQgQAAgIANg");
	this.shape_34.setTransform(167.9,6.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgMBDIAAhwIgqAAIAAgVIBtAAIAAAVIgsAAIAABwg");
	this.shape_35.setTransform(155.3,6.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgiAzQgQgUAAgfQAAgbARgVQASgUAaAAQAWAAAOAJIgJAUQgJgIgRAAQgRAAgKAOQgKAQAAASQAAAVAKANQAJANAQAAQATAAAKgNIAMATQgPAPgcAAQgaAAgQgSg");
	this.shape_36.setTransform(143.6,6.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgzBFIAAiHIAYAAIAABZIBFhbIAKAAIAACHIgYAAIAAhZIhFBbg");
	this.shape_37.setTransform(131.2,6.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAXBDIAAg1QgOACgJAAQgWAAgLgLQgMgJgBgUIAAgqIAZAAIAAAoQAAAMAHAGQAFAGAMAAQAMAAAIgDIAAg9IAYAAIAACFg");
	this.shape_38.setTransform(118.7,6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4, new cjs.Rectangle(0,0,246.2,61.6), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAXBCIgig2IgOAAIAAA2IgYAAIAAiCIAkgBQAxAAAAAmQAAAMgHAKQgHAIgLAEIAnA7gAgZgsIAAAkIAJABQAQAAAFgEQAHgEAAgMQAAgKgIgDQgGgEgPAAIgIAAg");
	this.shape.setTransform(65,33.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgpBBIAAiBIBTAAIAAAUIg8AAIAAAfIArAAIAAASIgrAAIAAAoIA7AAIAAAUg");
	this.shape_1.setTransform(53.7,33.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHBCIgwiDIAZAAIAeBXIAfhXIAZAAIgzCDg");
	this.shape_2.setTransform(42.5,33.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgqAxQgOgSAAgfQAAgcAQgUQAOgTAaAAQAcAAAOASQAPARAAAgQAAAfgQASQgPASgcAAQgaAAgOgSgAgXgiQgJANAAAVQAAAWAIANQAIAMAOAAQARAAAJgMQAJgMAAgXQAAgughAAQgQAAgHAMg");
	this.shape_3.setTransform(30.4,33.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgqAxQgOgSAAgfQAAgcAPgUQAPgTAaAAQAcAAAOASQAPASAAAfQAAAfgQASQgOASgdAAQgaAAgOgSgAgYgiQgIANAAAVQAAAWAIANQAHAMAPAAQARAAAJgMQAJgMAAgXQAAgughAAQgPAAgJAMg");
	this.shape_4.setTransform(17.6,33.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAaBBIAAg6IgzAAIAAA6IgXAAIAAiBIAXAAIAAAzIAzAAIAAgzIAXAAIAACBg");
	this.shape_5.setTransform(4.9,33.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AApBBIAAiBIAWAAIAACBgAg+BBIAAiBIAXAAIAAAxIAQgBQAXAAALAKQANAKAAAUQAAATgNALQgMALgWAAgAgnACIAAAsIALAAQARAAAGgGQAGgHgBgKQAAgKgFgGQgHgGgPAAg");
	this.shape_6.setTransform(92.3,12.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AghAxQgQgRAAggQAAgbARgUQARgUAZAAQAXAAANAKIgJATQgIgIgRAAQgQAAgKAOQgKANAAAUQAAAVAJAMQAJANAQAAQASAAALgNIALATQgOAPgcAAQgaAAgPgTg");
	this.shape_7.setTransform(79.1,12.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgqAxQgOgTAAgeQAAgcAPgTQAPgUAaAAQAcAAAOASQAPARAAAgQAAAegPATQgQATgcAAQgaAAgOgTgAgYgiQgIAMAAAWQAAAXAIAMQAIAMAOAAQARAAAJgMQAJgMAAgXQAAgughAAQgQAAgIAMg");
	this.shape_8.setTransform(67,12.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgiAxQgPgSAAgfQAAgbARgUQAQgUAaAAQAXAAANAKIgKATQgHgIgSAAQgQAAgKAOQgKAOAAATQAAAVAKAMQAJANAQAAQASAAALgNIALATQgPAPgbAAQgaAAgQgTg");
	this.shape_9.setTransform(55.1,12.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgpBBIAAiBIBTAAIAAAUIg8AAIAAAfIArAAIAAASIgrAAIAAAoIA7AAIAAAUg");
	this.shape_10.setTransform(44.4,12.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag3AtQAHgBAEgBQAFgCAEgFQAFgHAFgQQAGgOADgWQAFgdABgNIBCAAIAACBIgXAAIAAhtIgaAAQgCAWgFAbQgGAagHAMQgIAOgKAFQgKAFgOAAg");
	this.shape_11.setTransform(32,12.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAoBBIAAiBIAXAAIAACBgAg+BBIAAiBIAWAAIAAAxIARgBQAWAAAMAKQAMAKAAAUQAAATgMALQgMALgXAAgAgoACIAAAsIAMAAQARAAAGgGQAFgHAAgKQAAgKgGgGQgGgGgPAAg");
	this.shape_12.setTransform(18.5,12.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAYBBIAAhtIgvAAIAABtIgXAAIAAiBIBdAAIAACBg");
	this.shape_13.setTransform(4.7,12.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgyBEIAAiFIAXAAIAABYIBEhaIAKAAIAACFIgXAAIAAhXIhEBZg");
	this.shape_14.setTransform(192.9,55.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAWA9QgHgHgCgNQgEgTgIgIQgHgIgRAAIgBAAIAAA8IgXAAIAAiDIAXAAIAAA0IACAAQAPAAAIgHQAJgGADgPQACgNAFgGQAHgGALAAIAIABIAAAUIgDAAQgEAAgCACIgDAJQgCALgJAJQgIAJgMACQANADAIAJQAIAKADAPQABAGACAEQACACAFAAIADgBIAAAVIgIABQgLAAgHgGg");
	this.shape_15.setTransform(180.8,55.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgMBCIAAhuIgqAAIAAgVIBtAAIAAAVIgsAAIAABug");
	this.shape_16.setTransform(168.6,55.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgiAyQgPgSAAggQAAgbARgUQARgUAZAAQAWAAAOAKIgJATQgJgJgQAAQgRAAgJAPQgLAPAAASQAAAUAJANQALAOAPAAQASAAALgOIALATQgOAPgcAAQgbAAgPgSg");
	this.shape_17.setTransform(157.1,55.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgyBEIAAiFIAXAAIAABYIBEhaIAKAAIAACFIgXAAIAAhXIhFBZg");
	this.shape_18.setTransform(144.9,55.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAXBCIAAg1QgKADgNAAQgVAAgMgLQgMgJAAgUIAAgpIAYAAIAAAnQAAAMAHAGQAGAGALAAQAIAAAMgDIAAg8IAXAAIAACDg");
	this.shape_19.setTransform(132.5,55.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgqAyQgOgTgBgfQAAgdAQgSQAPgUAaAAQAcAAAOASQAPARABAgQAAAggQASQgQASgcAAQgaAAgOgSgAgYgiQgJANABAVQAAAWAIANQAHANAPAAQARAAAJgNQAJgNAAgWQAAgvghAAQgPAAgJANg");
	this.shape_20.setTransform(120.3,55.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgyBYIAAiFIAXAAIAABYIBEhaIAKAAIAACFIgXAAIAAhYIhEBagAgSg/QgJgGgDgPIATgDQACAQAMAAQANAAACgQIASADQgDAPgIAGQgKAIgNgBQgMABgIgIg");
	this.shape_21.setTransform(178.6,31.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgrAxQgOgSAAgfQABgcAPgUQAPgTAaAAQAcAAAPARQAPASgBAgQAAAggPARQgPATgcAAQgbAAgPgTgAgYgiQgJANAAAVQAAAWAIANQAIANAQAAQAPAAAKgNQAJgMAAgXQAAgughgBQgQAAgIANg");
	this.shape_22.setTransform(165.7,33.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAWA9QgHgHgCgNQgDgSgJgJQgJgIgPAAIgBAAIAAA8IgXAAIAAiDIAXAAIAAA0IACAAQAPAAAIgHQAJgGADgPQACgOAGgFQAEgGANAAIAJAAIAAAVIgFAAQgDAAgCACQgCACgCAHQgCALgIAJQgJAJgLACQANADAHAJQAJAJACAQIAEAKQADACADAAIAEgBIAAAVIgHABQgNAAgGgGg");
	this.shape_23.setTransform(153.6,33.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgoBCIAAiDIBRAAIAAAVIg5AAIAABug");
	this.shape_24.setTransform(142.8,33.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgpBUIAAiDIBTAAIAAAVIg8AAIAAAeIArAAIAAATIgrAAIAAAoIA7AAIAAAVgAANg9QgEgFAAgEQAAgGAEgDQADgEAGAAQAEAAAEAEQADADABAGQgBAFgDAEQgDADgFAAQgGAAgDgDgAgbg9QgDgEAAgFQAAgGADgDQAEgEAFAAQAFAAADAEQAEADAAAGQAAAEgEAFQgCADgGAAQgFAAgEgDg");
	this.shape_25.setTransform(132.3,31.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag3AtQAGAAAFgCQAFgBAEgGQAFgHAFgPQAFgNAFgYIAGgqIBBAAIAACCIgXAAIAAhvIgZAAQgDAYgFAbQgGAYgHAOQgIAOgKAEQgKAFgOABg");
	this.shape_26.setTransform(119.7,33.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgyBYIAAiFIAXAAIAABYIBEhaIAKAAIAACFIgYAAIAAhYIhDBagAgTg+QgIgIgDgOIATgDQACAQAMAAQAOAAAAgQIATADQgCANgKAJQgJAGgMAAQgMAAgKgGg");
	this.shape_27.setTransform(222.5,9.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgqAxQgOgSgBgfQAAgdAQgSQAPgUAaAAQAcAAAOARQAPASABAgQAAAfgQASQgPATgdAAQgaAAgOgTgAgYgiQgIAMAAAWQAAAXAIAMQAIAMAOAAQAQAAAKgMQAJgMAAgXQABgugiAAQgQAAgIAMg");
	this.shape_28.setTransform(209.5,11.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgDBDIgbhIIgOBGIgWAAIAaiDIANAAIAbBYIAchYIAMAAIAbCDIgWAAIgOhGIgbBIg");
	this.shape_29.setTransform(195.9,11.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgpBCIAAiDIBTAAIAAAVIg8AAIAAAeIArAAIAAAUIgrAAIAAAnIA7AAIAAAVg");
	this.shape_30.setTransform(183.7,11.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgLBCIAAhuIgqAAIAAgVIBrAAIAAAVIgsAAIAABug");
	this.shape_31.setTransform(172.1,11.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgiAyQgPgSAAggQAAgbARgUQAQgUAaAAQAXAAANAJIgJAUQgIgIgRAAQgQAAgLAOQgKAPAAASQAAAVAKANQAJANAQgBQATAAAKgNIALATQgOAPgcAAQgbAAgPgSg");
	this.shape_32.setTransform(160.6,11.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgyBEIAAiFIAXAAIAABYIBEhaIAKAAIAACFIgXAAIAAhYIhEBag");
	this.shape_33.setTransform(148.4,11.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgiAyQgPgSAAggQAAgcARgTQAQgUAaAAQAXAAANAJIgJAUQgIgIgRAAQgQAAgLAOQgKAPAAASQAAAVAKANQAJANAQgBQATAAAKgNIALATQgPAPgbAAQgbAAgPgSg");
	this.shape_34.setTransform(136.4,11.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgiAyQgPgSAAggQAAgcARgTQAQgUAaAAQAXAAANAJIgJAUQgIgIgSAAQgPAAgLANQgKAOAAAUQAAAVAKANQAKAMAPAAQASAAALgNIALATQgOAPgcAAQgaAAgQgSg");
	this.shape_35.setTransform(119.6,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(0,1,227.6,61.1), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAgBCIgKgaIgrAAIgJAaIgaAAIAziDIAKAAIA0CDgAgPAWIAfAAIgQgvg");
	this.shape.setTransform(226.4,49.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqBCIAAiCIAbgBQAeAAAOAKQAOAJAAAVQAAArg0AAIgKAAIAAAwgAgTgCIAJABQAPAAAHgFQAIgFAAgNQAAgUggAAIgHAAg");
	this.shape_1.setTransform(215.5,49.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgpBBIAAiBIBTAAIAAAUIg7AAIAAAfIAqAAIAAATIgqAAIAAAnIA6AAIAAAUg");
	this.shape_2.setTransform(204.8,49.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAbBBIAAg6Ig0AAIAAA6IgXAAIAAiBIAXAAIAAAzIA0AAIAAgzIAWAAIAACBg");
	this.shape_3.setTransform(193,49.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgyBXIAAiDIAYAAIAABWIBDhZIAKAAIAACEIgXAAIAAhXIhEBZgAgSg+QgJgHgDgOIATgDQACAQAMAAQANAAACgQIASADQgCANgKAIQgIAHgOAAQgLAAgJgHg");
	this.shape_4.setTransform(180,48);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgpBBIAAiBIBSAAIAAAUIg6AAIAAAfIAqAAIAAATIgqAAIAAAnIA5AAIAAAUg");
	this.shape_5.setTransform(168.6,49.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMBBIAAhtIgpAAIAAgUIBrAAIAAAUIgrAAIAABtg");
	this.shape_6.setTransform(157.2,49.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAaBBIAAg6IgzAAIAAA6IgXAAIAAiBIAXAAIAAAzIAzAAIAAgzIAXAAIAACBg");
	this.shape_7.setTransform(145,49.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgqAxQgOgTAAgeQAAgbAPgUQAPgUAaAAQAbAAAPASQAPARAAAgQAAAfgPASQgQATgcAAQgaAAgOgTgAgYgiQgIANAAAVQAAAXAIAMQAIAMAOAAQAQAAAKgMQAJgMAAgXQAAgughAAQgPAAgJAMg");
	this.shape_8.setTransform(132.3,49.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAWA9QgGgGgDgOQgDgSgJgJQgHgIgRAAIgBAAIAAA7IgXAAIAAiBIAXAAIAAAzIACAAQAQAAAHgGQAJgIACgOQADgMAFgHQAGgFAMgBIAIABIAAAVIgEAAQgEAAgBABQgCACgBAHQgDALgIAJQgIAIgMADQANADAIAJQAHAIADARIAEAKQADACADAAIAEgBIAAAVIgIAAQgMAAgGgFg");
	this.shape_9.setTransform(120.3,50);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgsBBIAAiBIAXAAIAAAwIATAAQAVgBANALQANALAAAUQAAASgNAMQgOALgUgBgAgVACIAAAsIANAAQAdAAAAgXQAAgKgHgGQgIgFgMgBg");
	this.shape_10.setTransform(241.7,28.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgLBBIAAhtIgqAAIAAgUIBrAAIAAAUIgsAAIAABtg");
	this.shape_11.setTransform(229.9,28.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgiAxQgPgSAAgeQAAgdARgTQAQgTAagBQAWABAOAIIgJAUQgIgIgRAAQgQAAgLAOQgKAPAAASQAAAUAKANQAJANAQAAQASAAALgNIALATQgOAOgcAAQgbABgPgTg");
	this.shape_12.setTransform(218.5,28.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgqAxQgOgSAAgfQAAgcAQgUQAOgTAaAAQAbAAAPARQAPASAAAgQAAAfgPASQgQASgcAAQgbAAgNgSgAgXgiQgJANAAAVQAAAWAIANQAIAMAOAAQARAAAJgMQAJgNAAgWQAAgughAAQgQAAgHAMg");
	this.shape_13.setTransform(206.4,28.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgDBCIgahHIgOBGIgXAAIAbiCIAMAAIAbBXIAchXIAMAAIAbCCIgXAAIgNhGIgbBHg");
	this.shape_14.setTransform(192.8,28.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgyBDIAAiDIAYAAIAABWIBDhZIAKAAIAACEIgXAAIAAhXIhEBZg");
	this.shape_15.setTransform(179.3,28.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgMBBIAAhtIgpAAIAAgUIBrAAIAAAUIgrAAIAABtg");
	this.shape_16.setTransform(167,28.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgiAxQgPgSAAgeQAAgdARgTQAQgTAagBQAWABAOAIIgKAUQgHgIgSAAQgQAAgKAOQgKAPAAASQAAAUAKANQAJANAQAAQASAAALgNIALATQgPAOgbAAQgbABgPgTg");
	this.shape_17.setTransform(155.5,28.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgoBBIAAiBIBRAAIAAAUIg7AAIAAAfIArAAIAAASIgrAAIAAAoIA7AAIAAAUg");
	this.shape_18.setTransform(144.8,28.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgDBCIgahHIgOBGIgXAAIAbiCIAMAAIAbBXIAchXIAMAAIAbCCIgXAAIgNhGIgbBHg");
	this.shape_19.setTransform(132.2,28.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgrBCIAAiCIAlgBQATAAAMAJQAMAIAAARQAAAPgRAJQAYAIAAAaQAAASgOAKQgMALgVAAgAgUAuIAMABQAOAAAGgFQAIgFAAgNQAAgLgHgFQgFgFgQAAIgMAAgAgUgtIAAAfIAMABQAVAAAAgRQAAgQgTAAg");
	this.shape_20.setTransform(119.9,28.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgvBCIAAgUIADAAQAFAAABgDQACgCACgGQAEgWAVgKQgRgDgGgHQgHgJAAgLQAAgRANgKQAMgMAZAAIAlACIAACBIgXAAIAAg2IgFAAQgPAAgIAIQgIAHgDAQQgCANgHAGQgGAGgKgBIgIAAgAgJgqQgHAFAAAKQAAAUAdAAIANAAIAAgnIgSgBQgIAAgJAFg");
	this.shape_21.setTransform(195.9,6.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAgBCIgKgaIgsAAIgJAaIgaAAIA1iDIAJAAIA0CDgAgPAWIAeAAIgPgvg");
	this.shape_22.setTransform(184.6,6.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhHBBIAAiBIAXAAIAABuIAmAAIAAhuIAVAAIAABuIAnAAIAAhuIAVAAIAACBg");
	this.shape_23.setTransform(170.3,6.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgsBBIAAiBIAXAAIAAAxIATgCQAUAAAOALQANALAAATQAAATgNALQgNALgVAAgAgVACIAAAsIANAAQAdAAAAgXQAAgKgHgGQgIgGgMAAg");
	this.shape_24.setTransform(156.6,6.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ag3AtQAGgBAFgBQAEgCAFgFQAFgHAFgQQAFgOAEgWQAEgTACgXIBBAAIAACBIgWAAIAAhtIgaAAQgDAdgEAUQgFAYgIAOQgIAOgKAFQgKAFgOAAg");
	this.shape_25.setTransform(143.8,6.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgqAxQgOgSAAgfQAAgdAPgSQAPgTAagBQAcAAAOASQAPASAAAfQAAAfgQASQgPATgcgBQgbAAgNgSgAgYgiQgIANAAAVQAAAXAIAMQAHAMAPAAQARAAAJgMQAJgMAAgXQAAgughAAQgQAAgIAMg");
	this.shape_26.setTransform(131.5,6.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgrBBIAAiBIBOAAIAAAUIg3AAIAAAfIARgBQAWAAAMAKQANAKAAAUQAAASgNALQgMAKgWAAgAgUAEIAAAqIANAAQAPAAAFgFQAHgGAAgLQAAgJgGgGQgGgFgOAAg");
	this.shape_27.setTransform(119.9,6.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAYBCIgig2IgPAAIAAA2IgYAAIAAiCIAkgBQAxAAAAAmQAAAMgHAKQgHAIgKAEIAmA7gAgZgsIAAAkIAKABQAPAAAFgEQAHgDAAgNQAAgKgHgDQgGgEgQAAIgIAAg");
	this.shape_28.setTransform(65,28.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgpBBIAAiBIBTAAIAAAUIg7AAIAAAfIAqAAIAAASIgqAAIAAAoIA6AAIAAAUg");
	this.shape_29.setTransform(53.7,28.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgHBCIgxiDIAaAAIAeBXIAghXIAZAAIgzCDg");
	this.shape_30.setTransform(42.6,28.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgqAxQgOgSAAgfQAAgcAPgUQAQgTAZAAQAbAAAPASQAPASAAAfQAAAfgQASQgPASgcAAQgaAAgOgSgAgYgiQgIAMAAAWQAAAWAHANQAJAMAOAAQAQAAAKgMQAJgMAAgXQAAgughAAQgQAAgIAMg");
	this.shape_31.setTransform(30.5,28.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgqAxQgOgSAAgfQAAgcAPgUQAQgTAZAAQAcAAAOASQAPASAAAfQAAAfgPASQgQASgcAAQgbAAgNgSgAgYgiQgIAMAAAWQAAAWAHANQAJAMAOAAQARAAAJgMQAJgMAAgXQAAgughAAQgQAAgIAMg");
	this.shape_32.setTransform(17.6,28.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAbBBIAAg6Ig0AAIAAA6IgXAAIAAiBIAXAAIAAAzIA0AAIAAgzIAWAAIAACBg");
	this.shape_33.setTransform(4.9,28.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAoBBIAAiBIAXAAIAACBgAg+BBIAAiBIAWAAIAAAxIARgBQAXAAALAKQANALAAATQAAATgNALQgMALgWAAgAgoACIAAAsIAMAAQARAAAGgGQAFgHAAgKQAAgKgGgGQgGgGgPAAg");
	this.shape_34.setTransform(92.3,6.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgiAxQgPgSAAgfQAAgbARgUQAQgUAaAAQAXAAANAKIgJATQgIgIgRAAQgQAAgLAOQgKAOAAATQAAAVAKAMQAJANAQAAQASAAALgNIALATQgOAPgcAAQgaAAgQgTg");
	this.shape_35.setTransform(79.2,6.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgqAxQgOgSAAgfQAAgdAQgSQAPgUAZAAQAcAAAOASQAPARAAAgQAAAfgQASQgQATgbAAQgbAAgNgTgAgXgiQgJANAAAVQAAAXAIAMQAIAMAOAAQARAAAJgMQAJgMAAgXQAAgughAAQgQAAgHAMg");
	this.shape_36.setTransform(67.1,6.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgiAxQgPgSAAgfQAAgbARgUQARgUAZAAQAXAAANAKIgJATQgIgIgRAAQgQAAgKAOQgLAOAAATQAAAUAKANQAJANAQAAQASAAALgNIALATQgOAPgcAAQgaAAgQgTg");
	this.shape_37.setTransform(55.1,6.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgpBBIAAiBIBTAAIAAAUIg7AAIAAAfIAqAAIAAASIgqAAIAAAoIA6AAIAAAUg");
	this.shape_38.setTransform(44.4,6.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("Ag2AtQAFgBAFgBQAEgCAFgFQAEgFAGgSQAFgNAEgXIAHgqIBAAAIAACBIgWAAIAAhtIgZAAQgEAcgEAVQgFAZgIANQgJAOgIAFQgLAFgNAAg");
	this.shape_39.setTransform(32,6.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAoBBIAAiBIAXAAIAACBgAg+BBIAAiBIAWAAIAAAxIARgBQAXAAALAKQANALAAATQAAATgNALQgLALgXAAgAgoACIAAAsIAMAAQARAAAGgGQAFgHAAgKQAAgKgFgGQgIgGgOAAg");
	this.shape_40.setTransform(18.5,6.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAYBBIAAhtIgvAAIAABtIgXAAIAAiBIBdAAIAACBg");
	this.shape_41.setTransform(4.7,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(0,0,246.2,56.7), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAXBCIghg2IgPAAIAAA2IgYAAIAAiCIAkgBQAxAAAAAmQAAAMgHAKQgHAIgKAEIAmA7gAgZgsIAAAlIAKABQAOgBAGgEQAHgEAAgMQAAgJgIgEQgFgEgQAAIgIAAg");
	this.shape.setTransform(65,49.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgpBBIAAiBIBTAAIAAAUIg8AAIAAAfIArAAIAAATIgrAAIAAAnIA7AAIAAAUg");
	this.shape_1.setTransform(53.7,49.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGBCIgxiDIAZAAIAeBXIAfhXIAZAAIgzCDg");
	this.shape_2.setTransform(42.5,50);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgqAxQgOgTAAgeQAAgdAPgSQAPgUAaAAQAbAAAPASQAPARAAAgQAAAegPATQgQATgcAAQgaAAgOgTgAgYgiQgIANAAAVQAAAVAIANQAHANAPAAQARAAAJgMQAJgNAAgWQAAgughAAQgPAAgJAMg");
	this.shape_3.setTransform(30.4,49.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgqAxQgOgTAAgeQAAgdAPgSQAPgUAaAAQAbAAAPASQAPARAAAgQAAAegQATQgPATgcAAQgaAAgOgTgAgYgiQgIANAAAVQAAAVAIANQAHANAPAAQARAAAJgMQAJgNAAgWQAAgughAAQgPAAgJAMg");
	this.shape_4.setTransform(17.6,49.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAaBBIAAg7IgzAAIAAA7IgXAAIAAiBIAXAAIAAAzIAzAAIAAgzIAXAAIAACBg");
	this.shape_5.setTransform(4.9,49.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAoBBIAAiBIAXAAIAACBgAg+BBIAAiBIAWAAIAAAxIARgBQAXAAALALQAMAJAAAVQAAASgMALQgMALgXAAgAgoACIAAAsIAMABQARAAAGgHQAFgGAAgLQAAgKgGgGQgGgGgPAAg");
	this.shape_6.setTransform(92.3,28.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AghAyQgPgSgBgfQAAgcARgUQARgUAaAAQAVAAAOAKIgJATQgIgIgRAAQgRAAgJAOQgKAPAAASQAAAVAJAMQAJANAQAAQATAAAKgNIAKATQgNAPgcAAQgaAAgPgSg");
	this.shape_7.setTransform(79.2,28.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgrAxQgNgSAAgfQAAgcAPgTQAQgUAZAAQAbAAAPASQAPARAAAgQAAAggPARQgQATgcAAQgbAAgOgTgAgYgiQgIANAAAVQAAAXAHAMQAJAMAOAAQARAAAJgMQAJgMAAgXQAAgughAAQgQAAgIAMg");
	this.shape_8.setTransform(67.1,28.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgiAyQgPgSAAgfQAAgcARgUQAQgUAaAAQAWAAAOAKIgJATQgIgIgRAAQgQAAgLAOQgKAPAAASQAAAVAKAMQAJANAQAAQATAAAKgNIALATQgOAPgcAAQgbAAgPgSg");
	this.shape_9.setTransform(55.1,28.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgpBBIAAiBIBTAAIAAAUIg8AAIAAAfIArAAIAAATIgrAAIAAAnIA7AAIAAAUg");
	this.shape_10.setTransform(44.4,28.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag3AsQAHAAAEgBQAEgCAFgGQAFgHAFgOQAGgQADgVQAEgSACgYIBCAAIAACBIgYAAIAAhtIgYAAQgEAfgEATQgFAXgJAOQgHAOgKAFQgJAFgPAAg");
	this.shape_11.setTransform(32,28.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAoBBIAAiBIAXAAIAACBgAg+BBIAAiBIAWAAIAAAxIARgBQAXAAALALQAMAJAAAVQAAASgMALQgMALgXAAgAgoACIAAAsIAMABQARAAAGgHQAFgGAAgLQAAgKgGgGQgGgGgPAAg");
	this.shape_12.setTransform(18.5,28.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAYBBIAAhtIgvAAIAABtIgXAAIAAiBIBdAAIAACBg");
	this.shape_13.setTransform(4.7,28.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgpBCIAAiDIBTAAIAAAVIg8AAIAAAfIArAAIAAASIgrAAIAAAoIA7AAIAAAVg");
	this.shape_14.setTransform(155.9,6.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AApBCIAAiDIAWAAIAACDgAg+BCIAAiDIAWAAIAAAyIARgBQAWAAAMALQANAKAAATQAAAUgNAKQgLAMgXAAgAgoADIAAArIAMABQARAAAGgHQAFgHAAgKQAAgKgFgGQgHgFgPAAg");
	this.shape_15.setTransform(142.7,6.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAbBCIAAg8IgzAAIAAA8IgYAAIAAiDIAYAAIAAA0IAzAAIAAg0IAWAAIAACDg");
	this.shape_16.setTransform(128.8,6.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAbBCIAAg8IgzAAIAAA8IgYAAIAAiDIAYAAIAAA0IAzAAIAAg0IAWAAIAACDg");
	this.shape_17.setTransform(116.3,6.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgqAxQgOgTAAgeQAAgcAPgUQAQgSAZgBQAbABAPARQAPARAAAgQAAAfgPASQgQATgbgBQgbABgOgTgAgYghQgIALAAAWQAAAXAIAMQAHAMAQAAQAQAAAJgMQAJgMAAgXQAAgughAAQgQAAgIANg");
	this.shape_18.setTransform(103.6,6.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgyBDIAAiEIAYAAIAABXIBDhZIAKAAIAACFIgXAAIAAhYIhEBZg");
	this.shape_19.setTransform(90.7,6.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAgBUIAAglIhVAAIAAiCIAXAAIAABtIAtAAIAAhtIAYAAIAABtIAOAAIAAA6g");
	this.shape_20.setTransform(78.6,8.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAgBCIgKgaIgsAAIgIAaIgaAAIA0iDIAJAAIA0CDgAgPAWIAeAAIgPgvg");
	this.shape_21.setTransform(66.1,6.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgrBCIAAiCIAlgBQATAAALAJQAMAIAAAQQAAAQgRAJQAZAHAAAbQAAASgNAKQgOALgUAAgAgUAuIALABQAOAAAIgFQAHgEAAgOQAAgLgGgFQgGgFgRAAIgLAAgAgUgtIAAAfIALAAQAWABAAgSQAAgPgUAAg");
	this.shape_22.setTransform(55.1,6.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgqAxQgOgTAAgeQAAgcAPgUQAPgSAagBQAbABAPARQAPARAAAgQAAAegQATQgPATgcgBQgbABgNgTgAgYghQgIAMAAAVQAAAWAIANQAHAMAPAAQARAAAJgMQAJgMAAgXQAAgughAAQgQAAgIANg");
	this.shape_23.setTransform(42.9,6.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAaBCIAAg8IgzAAIAAA8IgXAAIAAiDIAXAAIAAA0IAzAAIAAg0IAXAAIAACDg");
	this.shape_24.setTransform(30.3,6.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAaBCIAAg8IgzAAIAAA8IgXAAIAAiDIAXAAIAAA0IAzAAIAAg0IAXAAIAACDg");
	this.shape_25.setTransform(17.7,6.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgyBDIAAiEIAXAAIAABXIBEhZIAKAAIAACFIgYAAIAAhYIhDBZg");
	this.shape_26.setTransform(5.1,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(0,0,160.1,56.7), null);


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


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
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

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(36.8,36.8,73.7,73.6), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj9D+QhqhpAAiVQAAiUBqhpQBphqCUAAQCVAABpBqQBqBpAACUQAACVhqBpQhpBqiVAAQiUAAhphqg");
	mask.setTransform(70.3,70.3);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#D32D3E","#C42C39","#9D292B","#992929","#75221C"],[0,0.514,0.671,0.973,1,1],-23.1,-31.3,33.6,45.6).s().p("Aq+hpIMopVIJVMoIsoJVg");
	this.shape.setTransform(70.3,70.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(34.4,34.4,71.9,71.9), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj4D6QhohoAAiSQAAiRBohoQBnhnCRAAQCSAABnBnQBoBoAACRQAACThoBnQhnBniSAAQiRAAhnhng");
	mask.setTransform(69,69);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#D32D3E","#C42C39","#9D292B","#992929","#75221C"],[0,0.224,0.475,0.957,1,1],-22.6,-30.6,33.1,44.9).s().p("AqxhnIMZpKIJKMaIsZJJg");
	this.shape.setTransform(69,69);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(33.8,33.7,70.6,70.6), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgxAJQgHgHADgPIATAAQAAAMAKgEQAFgBAFgHIARAAQgLAUgUAGIgJABQgHAAgFgFgAAWgNIAhAAIgLAFIgJABQgIAAgFgGg");
	mask.setTransform(7.2,6.4);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(195,195,195,0)","#C3C3C3","#A8A8A8","#888887","#636361","#3A3A38","#1C1C1A","#1C1C1A"],[0,0.933,0.933,0.949,0.961,0.976,0.988,0.992,1],33.4,20.2,-38.3,-23.2).s().p("AhFAIIAshJIBfA6IgsBJg");
	this.shape.setTransform(7,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#FFFFFF","#F7F7F7","#E3E3E3","#C2C2C2","#ACACAC","#E7E7E7","#FFFFFF","#FCFCFC","#F6F6F6","#EAEAEA","#D9D9D9","#C3C3C3","rgba(195,195,195,0)","rgba(0,0,0,0)"],[0,0.02,0.075,0.157,0.259,0.314,0.596,0.733,0.831,0.871,0.894,0.914,0.933,0.933,1],33.4,20.2,-38.3,-23.2).s().p("AhFAIIAshJIBfA6IgsBJg");
	this.shape_1.setTransform(7,6.6);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(1.7,5,11,2.8), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhhBGQgGgHADgRQADgRALgNQALgNAPgEIAJgBQAKAAAEAHQAFAIgDAOQgGAegYANgAhAAQQgNAEgDAVQgEAQAJAAIADgBQANgDAEgUQADgRgIAAIgEAAgAiHBGQAEgEADgMQADgTgMADQgNAFgEATIgBAIIgTAAIAAgCQAEgRALgOQALgNAPgEIAIgCQAKAAAFAJQAEAIgCAOQgDALgGAKgAgbgLIAWgHIACAqIAAAAIAVgzIAWgHIgmBVIgXAIgAAyglIAsgNIgEATIgXAJIgCAJIAUgHIgEATIgTAFIgCAKIAXgJIgEAVIgtAPgABzg5IApgMIAHgBQAPAAgEARQgDAPgLAHQAIABgCAOQgCANABADIgVAFIAAgKIABgKQgCgDgFABIgKABIgHAeIgWAGgACPgwIgKADIgEAPIAMgDQAJgDACgHQABgGgGAAIgEABg");
	mask.setTransform(23.7,22.7);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(195,195,195,0)","#C3C3C3","#A8A8A8","#888887","#636361","#3A3A38","#1C1C1A","#1C1C1A"],[0,0.933,0.933,0.949,0.961,0.976,0.988,0.992,1],28.2,17.1,-43.7,-26.4).s().p("AjtAhICckDIE/DDIidEBg");
	this.shape.setTransform(23.8,22.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#FFFFFF","#F7F7F7","#E3E3E3","#C2C2C2","#ACACAC","#E7E7E7","#FFFFFF","#FCFCFC","#F6F6F6","#EAEAEA","#D9D9D9","#C3C3C3","rgba(195,195,195,0)","rgba(0,0,0,0)"],[0,0.02,0.075,0.157,0.259,0.314,0.596,0.733,0.831,0.871,0.894,0.914,0.933,0.933,1],28.2,17.1,-43.7,-26.4).s().p("AjtAhICckDIE/DDIidEBg");
	this.shape_1.setTransform(23.8,22.7);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(6.3,15.6,35,14.1), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjiDjQheheAAiFQAAiEBeheQBeheCEAAQCFAABeBeQBeBeAACEQAACFheBeQheBeiFAAQiEAAhehegAhEAbIhADxQA+AfBGAAQB8AABYhYQBXhXAAh8QAAgrgNgqgAkbBeQARA0AiAqQAhApAuAbIA7jdIhNAYIgXBWIgaAIIAXhWgAj0irQg2BNAABeQAAAoALApIBegfIBZlJQhWAhg2BLgAhOkfIhYFJIBNgYIA0jEIAagHIg0DCIFZhsQgghZhMg2QhOg4hgAAQglAAgpALg");
	mask.setTransform(60.6,60.6);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(195,195,195,0)","#C3C3C3","#A8A8A8","#888887","#636361","#3A3A38","#1C1C1A","#1C1C1A"],[0,0.933,0.933,0.949,0.961,0.976,0.988,0.992,1],36.8,22.4,-34.9,-21.1).s().p("ApdCUIHJrxILyHJInJLyg");
	this.shape.setTransform(60.6,60.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#FFFFFF","#F7F7F7","#E3E3E3","#C2C2C2","#ACACAC","#E7E7E7","#FFFFFF","#FCFCFC","#F6F6F6","#EAEAEA","#D9D9D9","#C3C3C3","rgba(195,195,195,0)","rgba(0,0,0,0)"],[0,0.02,0.075,0.157,0.259,0.314,0.596,0.733,0.831,0.871,0.894,0.914,0.933,0.933,1],36.8,22.4,-34.9,-21.1).s().p("ApdCUIHJrxILyHJInJLyg");
	this.shape_1.setTransform(60.6,60.6);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(28.5,28.5,64.3,64.2), null);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(232));

	// Слой 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOANIAGAAQAAAIAIAAQAKAAAAgKQAAgJgKgBIAAAAIAAgCIAAAAQAJAAAAgJQAAgKgJAAQgHAAgBAJIgFAAQABgHAEgDQAEgEAEAAQAGAAAEAFQAEADAAAGQAAAJgHACQAIACAAAJQAAAHgEAEQgEADgHAAQgNAAgBgMg");
	this.shape_1.setTransform(164.2,237.2,1.2,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJAWQgDgEgBgFIAFAAQACAIAGAAQADAAADgCQADgDAAgIQAAgLgJAAQgFAAgCAEIgEAAIAAgZIAYAAIAAAEIgUAAIAAAQQAEgDAEAAQAFAAAEADQAEAEAAAIQAAAKgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_2.setTransform(159.9,237.3,1.2,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAEAZIAAgIIgSAAIAAgEIARglIAFAAIgRAlIANAAIAAgOIAFAAIAAAOIAGAAIAAAEIgGAAIAAAIg");
	this.shape_3.setTransform(155.5,237.2,1.2,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNALIAAgWQAAgNANAAQAGAAAEADQADAEAAAGIAAAWQAAAHgDADQgEAEgGAAQgNAAAAgOgAgHgKIAAAVQAAAKAHAAQAJAAAAgKIAAgVQAAgKgJAAQgHAAAAAKg");
	this.shape_4.setTransform(151.1,237.3,1.2,1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIAZIARgsIgRAAIAAAIIgFAAIAAgNIAbAAIAAAFIgQAsg");
	this.shape_5.setTransform(146.8,237.2,1.2,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJAVQgEgDAAgHIAAgWQAAgGAEgEQAEgDAFAAQAGAAAEADQAEAEAAAGIAAAWQAAAHgEADQgEAEgGAAQgFAAgEgEgAgIgKIAAAVQAAAKAIAAQAJAAAAgKIAAgVQAAgKgJAAQgIAAAAAKg");
	this.shape_6.setTransform(142.3,237.3,1.2,1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJAVQgEgEAAgGQAAgFADgGIAMgYIAFAAIgKAWIAEgBQAGAAADADQAEAEAAAGQAAAHgEAEQgEAEgGAAQgFAAgEgEgAgIALQAAAKAIAAQAJAAAAgKQAAgKgJAAQgIAAAAAKg");
	this.shape_7.setTransform(137.9,237.3,1.2,1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgGAZIAKgXIgEACQgGgBgDgDQgEgEAAgGQAAgOANAAQAOAAAAAOQAAAFgDAFIgMAZgAgIgKQAAAKAIAAQAJAAAAgKQAAgKgJABQgIgBAAAKg");
	this.shape_8.setTransform(133.6,237.2,1.2,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHAZIAQgsIgRAAIAAAIIgFAAIAAgNIAbAAIAAAFIgRAsg");
	this.shape_9.setTransform(129.3,237.2,1.2,1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIAZIAQgsIgQAAIAAAIIgFAAIAAgNIAbAAIAAAFIgQAsg");
	this.shape_10.setTransform(124.9,237.2,1.2,1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAEAZIAAgIIgSAAIAAgEIARglIAFAAIgRAlIANAAIAAgOIAFAAIAAAOIAGAAIAAAEIgGAAIAAAIg");
	this.shape_11.setTransform(120.4,237.2,1.2,1.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIAVQgFgDAAgHIAAgWQAAgNANAAQANAAAAANIAAAWQABAHgEADQgEAEgGAAQgFAAgDgEgAgHgKIAAAVQAAAKAHAAQAJAAAAgKIAAgVQAAgKgJAAQgHAAAAAKg");
	this.shape_12.setTransform(116,237.3,1.2,1.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AACAZIAAgrIgIAIIAAgGIAIgIIAFAAIAAAxg");
	this.shape_13.setTransform(111.4,237.2,1.2,1.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAMAZIAAgXIgXAAIAAAXIgFAAIAAgxIAFAAIAAAXIAXAAIAAgXIAFAAIAAAxg");
	this.shape_14.setTransform(104.4,237.2,1.2,1.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgQAZIAAgxIARAAQAQAAAAAPQAAAGgEADQgEAEgIABIgLAAIAAAUgAgKAAIALAAQALAAAAgJQAAgKgLAAIgLAAg");
	this.shape_15.setTransform(99.1,237.2,1.2,1.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgOAZIAAgxIAdAAIAAAFIgYAAIAAAsg");
	this.shape_16.setTransform(94.2,237.2,1.2,1.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgMAUQgDgDgBgEIgBgNIABgMQABgEADgEQAFgEAHAAQAIAAAEAEQAGAGgBAOQABAPgGAFQgFAFgHAAQgGAAgGgFgAgIgQQgEAEAAAMQAAANAEAEQAEADAEAAQAFAAADgDQAEgEAAgNQAAgMgEgEQgDgEgFAAQgEAAgEAEg");
	this.shape_17.setTransform(88.7,237.3,1.2,1.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgJAWQgDgEgBgFIAFAAQABAIAHAAQADAAADgCQADgDAAgIQAAgLgJAAQgFAAgCAEIgFAAIAAgZIAZAAIAAAEIgUAAIAAAQQADgDAFAAQAFAAAEADQAEAEAAAIQAAAKgEAEQgFADgFAAQgGAAgDgDg");
	this.shape_18.setTransform(81.7,237.3,1.2,1.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AACAZIAAgrIgIAIIAAgGIAIgIIAFAAIAAAxg");
	this.shape_19.setTransform(77,237.2,1.2,1.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgJAVQgEgDAAgHIAAgWQAAgNANAAQAGAAAEADQAEAEAAAGIAAAWQAAAHgEADQgEAEgGAAQgFAAgEgEgAgIgKIAAAVQAAAKAIAAQAJAAAAgKIAAgVQAAgKgJAAQgIAAAAAKg");
	this.shape_20.setTransform(72.9,237.3,1.2,1.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgNAZIAAgFIATgXQADgEgBgEQABgIgJAAQgIgBAAAKIgEAAQgBgOANAAQAGAAAEAEQAEADAAAGQAAAFgEAFIgQAVIAUAAIAAAFg");
	this.shape_21.setTransform(68.6,237.2,1.2,1.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AACAZIAAgrIgIAIIAAgGIAIgIIAFAAIAAAxg");
	this.shape_22.setTransform(63.8,237.2,1.2,1.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgJAWQgEgEABgFIAEAAQABAIAHAAQADAAADgCQADgDgBgIQAAgLgIAAQgFAAgCAEIgEAAIAAgZIAYAAIAAAEIgUAAIAAAQQAEgDAEAAQAEAAAEADQAEAEABAIQgBAKgEAEQgDADgGAAQgGAAgDgDg");
	this.shape_23.setTransform(59.8,237.3,1.2,1.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAFAZIAAgIIgUAAIAAgEIARglIAGAAIgRAlIAOAAIAAgOIAEAAIAAAOIAHAAIAAAEIgHAAIAAAIg");
	this.shape_24.setTransform(55.4,237.2,1.2,1.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgNALIAAgWQAAgNANAAQANAAAAANIAAAWQAAAHgDADQgEAEgGAAQgNAAAAgOgAgHgKIAAAVQgBAKAIAAQAJAAAAgKIAAgVQAAgKgJAAQgIAAABAKg");
	this.shape_25.setTransform(51,237.3,1.2,1.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgIAZIARgsIgRAAIAAAIIgFAAIAAgNIAbAAIAAAFIgQAsg");
	this.shape_26.setTransform(46.7,237.2,1.2,1.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgIAZIARgsIgRAAIAAAIIgFAAIAAgNIAbAAIAAAFIgQAsg");
	this.shape_27.setTransform(42.3,237.2,1.2,1.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAMAZIAAgXIgXAAIAAAXIgFAAIAAgxIAFAAIAAAXIAXAAIAAgXIAFAAIAAAxg");
	this.shape_28.setTransform(35,237.2,1.2,1.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAMAZIAAgXIgXAAIAAAXIgFAAIAAgxIAFAAIAAAXIAXAAIAAgXIAFAAIAAAxg");
	this.shape_29.setTransform(29.2,237.2,1.2,1.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AANAZIAAgoIgZAoIgFAAIAAgxIAFAAIAAAoIAZgoIAFAAIAAAxg");
	this.shape_30.setTransform(23.2,237.2,1.2,1.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgJAVQgFgEAAgGQAAgIAIgDQgHgDAAgIQAAgGAEgEQAEgDAFAAQAGAAAEADQAEAEAAAGQAAAIgHADQAIADAAAIQAAAGgFAEQgEAEgGAAQgFAAgEgEgAgGAEQgDADAAAEQAAAEADADQADADADAAQAEAAADgDQADgDAAgEQAAgKgKAAQgDAAgDADgAgIgLQAAAJAIAAQAJAAAAgJQAAgJgJAAQgIAAAAAJg");
	this.shape_31.setTransform(165.1,228.9,1.2,1.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgCADIAAgFIAFAAIAAAFg");
	this.shape_32.setTransform(159.7,231.4,1.2,1.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AANAWIAAgKIgZAAIAAAKIgFAAIAAgOIAEAAQAFgJAAgOIAAgHIAUAAIAAAeIAGAAIAAAOgAgDgKQAAAIgEAKIAOAAIAAgZIgKAAg");
	this.shape_33.setTransform(156.2,230.4,1.2,1.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgCgHIAFAAIAAAKIgFAFg");
	this.shape_34.setTransform(150.7,232.1,1.2,1.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAJAZIAAgaIgRAaIgFAAIAAgiIAFAAIAAAaIARgaIAFAAIAAAigAgJgYIAFAAQgBAGAFAAQAFAAABgGIAEAAQAAAJgKAAQgJAAAAgJg");
	this.shape_35.setTransform(147.2,228.9,1.2,1.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgJACIAAgDIASAAIAAADg");
	this.shape_36.setTransform(143,229.6,1.2,1.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgNAZIAAgEIATgYQACgDAAgFQAAgJgIAAQgIAAAAAJIgFAAQAAgNANAAQAOAAAAANQAAAFgEAFIgRAWIAVAAIAAAEg");
	this.shape_37.setTransform(139,228.8,1.2,1.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAIAZIAAgaIgQAaIgFAAIAAgiIAFAAIAAAaIAQgaIAGAAIAAAigAgKgYIAFAAQAAAGAFAAQAFAAABgGIAEAAQgBAJgJAAQgJAAgBgJg");
	this.shape_38.setTransform(132.3,228.9,1.2,1.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAJARIAAgZIgRAZIgFAAIAAghIAFAAIAAAZIARgZIAFAAIAAAhg");
	this.shape_39.setTransform(127.4,229.8,1.2,1.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAHARIgPgRIAOgQIAGAAIgOAQIAQARgAgNARIAAghIAFAAIAAAQIAAARgAgIAAg");
	this.shape_40.setTransform(123.3,229.8,1.2,1.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgMAAQAAgRAOAAIAGABIAFAFIgDADIgEgDIgEgBQgJAAAAAMQAAANAJAAIAEAAIAEgEIADAEIgFAEIgGABQgOAAAAgSg");
	this.shape_41.setTransform(118.8,229.8,1.2,1.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAIARIAAgPIgPAAIAAAPIgFAAIAAghIAFAAIAAAOIAPAAIAAgOIAFAAIAAAhg");
	this.shape_42.setTransform(114.3,229.8,1.2,1.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAJARIAAgZIgRAZIgFAAIAAghIAFAAIAAAZIARgZIAFAAIAAAhg");
	this.shape_43.setTransform(109.5,229.8,1.2,1.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AATAWIAAgKIgqAAIAAgiIAFAAIAAAeIAOAAIAAgeIAEAAIAAAeIAOAAIAAgeIAFAAIAAAeIAFAAIAAAOg");
	this.shape_44.setTransform(103.9,230.4,1.2,1.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgJAOQgEgFAAgJQAAgIAEgFQADgEAGAAQAGAAAEAEQAEAEAAAJQAAAKgEAEQgEAEgGAAQgGAAgDgEgAgFgKQgDADAAAHQAAAIADADQACACADAAQAEAAADgCQACgDAAgIQAAgHgCgDQgDgCgEAAQgDAAgCACg");
	this.shape_45.setTransform(98,229.8,1.2,1.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgQAZIAAgxIASAAQAGAAAFAEQAEAEAAAHQAAAGgEADQgFAFgGAAIgNAAIAAAUgAgLAAIAMAAQALAAAAgJQAAgKgLAAIgMAAg");
	this.shape_46.setTransform(93.5,228.8,1.2,1.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AANAWIAAgKIgZAAIAAAKIgFAAIAAgOIAEAAQAFgJAAgOIAAgHIAVAAIAAAeIAFAAIAAAOgAgDgKQAAAKgEAIIAPAAIAAgZIgLAAg");
	this.shape_47.setTransform(86.1,230.4,1.2,1.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgNANIADgEQAFAEAFAAQAIAAAAgGQAAgFgGAAIgFAAIAAgEIAFAAQAGAAAAgFQAAgFgIAAQgEAAgEADIgDgEQAFgEAGAAQANAAAAAKQAAAGgGABQAHACgBAGQAAAEgDADQgEADgGAAQgHAAgGgFg");
	this.shape_48.setTransform(81.8,229.8,1.2,1.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgNAAQAAgRANAAQAOAAAAARIAAABIgWAAQAAAMAJAAQAFAAAEgEIAEADQgGAGgHAAQgOAAAAgSgAgHgHIgBAGIARAAIgBgGQgDgFgFAAQgFAAgCAFg");
	this.shape_49.setTransform(77.7,229.8,1.2,1.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgJAOQgEgFAAgJQAAgIAEgFQAEgEAFAAQAHAAADAEQAEAFAAAIQAAAJgEAFQgDAEgHAAQgFAAgEgEgAgFgKQgDADAAAHQAAAIADADQADACACAAQAEAAACgCQADgDAAgIQAAgHgDgDQgCgCgEAAQgCAAgDACg");
	this.shape_50.setTransform(73.3,229.8,1.2,1.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgNAZIAAgxIAFAAIAAAEQAEgEAFAAQAFAAADADQAFAEAAALQAAAJgFAEQgCADgGAAQgFAAgEgEIAAATgAgIgGQAAAMAIAAQAIAAAAgMQAAgOgIAAQgIAAAAAOg");
	this.shape_51.setTransform(68.9,230.7,1.2,1.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAMAZIAAgsIgXAAIAAAsIgFAAIAAgxIAhAAIAAAxg");
	this.shape_52.setTransform(63.5,228.8,1.2,1.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgCgHIAFAAIAAAKIgFAFg");
	this.shape_53.setTransform(57.4,232.1,1.2,1.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgKAPQgDgDAAgEQAAgJAMAAIAKAAIAAgEQAAgHgJAAQgFAAgDAEIgDgDQAEgGAHAAQAOAAAAAMIAAAWIgFAAIAAgDQgEAEgFAAQgHAAgDgDgAgIAIQAAAFAIAAQAFAAACgCQACgCAAgEIAAgEIgJAAQgIAAAAAHg");
	this.shape_54.setTransform(53.9,229.8,1.2,1.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgMARIAAghIAOAAQALAAAAAJQAAAGgGABQAGACAAAGQAAAJgKAAgAgIANIAKAAQAGAAAAgGQAAgFgGAAIgKAAgAgIgCIAKAAQAGAAAAgFQAAgFgGAAIgKAAg");
	this.shape_55.setTransform(49.7,229.8,1.2,1.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAIARIgQgRIAPgQIAFAAIgOAQIAQARgAgNARIAAghIAFAAIAAAQIAAARgAgIAAg");
	this.shape_56.setTransform(45.6,229.8,1.2,1.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgMAAQAAgRAOAAIAGABIAFAFIgDADIgEgDIgEgBQgJAAAAAMQAAANAJAAIAEAAIAEgEIADAEIgFAEIgGABQgOAAAAgSg");
	this.shape_57.setTransform(41.2,229.8,1.2,1.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgJAOQgEgEAAgKQAAgJAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAJQAAAKgEAEQgEAEgGAAQgFAAgEgEgAgFgKQgDADAAAHQAAAIADADQADACACAAQADAAADgCQADgDAAgIQAAgHgDgDQgDgCgDAAQgDAAgCACg");
	this.shape_58.setTransform(36.8,229.8,1.2,1.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAQAZIAAglIgOAdIgDAAIgOgdIAAAlIgFAAIAAgxIAFAAIAPAjIAQgjIAGAAIAAAxg");
	this.shape_59.setTransform(31.2,228.8,1.2,1.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgDADIAAgFIAGAAIAAAFg");
	this.shape_60.setTransform(24.5,231.4,1.2,1.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgKARIAAghIAVAAIAAAEIgQAAIAAAdg");
	this.shape_61.setTransform(22.3,229.8,1.2,1.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgCgHIAFAAIAAAKIgFAFg");
	this.shape_62.setTransform(130.5,223.7,1.2,1.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgGAZIAKgWIgEAAQgGABgDgEQgEgEAAgGQAAgGAEgEQAEgEAFAAQAOAAAAAOQAAAFgDAGIgMAYgAgIgKQAAAKAIAAQAJAAAAgKQAAgJgJgBQgIABAAAJg");
	this.shape_63.setTransform(127.2,220.4,1.2,1.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AACAZIAAgrIgIAIIAAgGIAIgIIAFAAIAAAxg");
	this.shape_64.setTransform(122.6,220.4,1.2,1.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAEAZIAAgIIgSAAIAAgEIAQglIAFAAIgRAlIAOAAIAAgOIAFAAIAAAOIAGAAIAAAEIgGAAIAAAIg");
	this.shape_65.setTransform(118.5,220.4,1.2,1.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgJAWQgEgEAAgFIAFAAQABAIAHAAQADAAADgCQADgEAAgHQAAgLgJAAQgGAAgBAEIgFAAIAAgZIAZAAIAAAEIgUAAIAAAQQADgDAFAAQAEAAAEADQAFAEAAAIQAAAKgEAEQgFADgFAAQgGAAgDgDg");
	this.shape_66.setTransform(114.1,220.5,1.2,1.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AACAZIAAgrIgIAIIAAgGIAIgIIAFAAIAAAxg");
	this.shape_67.setTransform(109.4,220.4,1.2,1.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AACAZIAAgrIgIAIIAAgGIAIgIIAFAAIAAAxg");
	this.shape_68.setTransform(105,220.4,1.2,1.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AABAJIAIgJIgIgHIAAgHIAOAOIgOAPgAgOAJIAIgJIgIgHIAAgHIAOAOIgOAPg");
	this.shape_69.setTransform(98.8,221.2,1.2,1.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgCADIAAgFIAFAAIAAAFg");
	this.shape_70.setTransform(95.2,223,1.2,1.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgOAZIAAgxIAdAAIAAAFIgYAAIAAAsg");
	this.shape_71.setTransform(92,220.4,1.2,1.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgCADIAAgFIAFAAIAAAFg");
	this.shape_72.setTransform(88.2,223,1.2,1.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AAMAZIAAgWIgXAAIAAAWIgFAAIAAgxIAFAAIAAAWIAXAAIAAgWIAFAAIAAAxg");
	this.shape_73.setTransform(84.1,220.4,1.2,1.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgCADIAAgFIAFAAIAAAFg");
	this.shape_74.setTransform(80,223,1.2,1.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgLAUQgGgFAAgPQAAgOAGgGQAEgEAHAAQAOAAAEAOIgGAAQgDgKgJAAQgFAAgDAEQgDAEAAAMQAAANADAEQADADAFAAQAJAAADgKIAGAAQgEAPgOAAQgHAAgEgFg");
	this.shape_75.setTransform(76.3,220.5,1.2,1.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AANAZIAAgnIgZAnIgFAAIAAgxIAFAAIAAAoIAZgoIAFAAIAAAxg");
	this.shape_76.setTransform(68.5,220.4,1.2,1.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAQAfIAAgMIggAAIAAAMIgFAAIAAgQIAEAAQAHgKgBgSIAAgRIAbAAIAAAtIAGAAIAAAQgAgGgKQAAAQgFAJIAVAAIAAgoIgQAAg");
	this.shape_77.setTransform(62.5,221.2,1.2,1.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAMAZIAAgWIgXAAIAAAWIgFAAIAAgxIAFAAIAAAWIAXAAIAAgWIAFAAIAAAxg");
	this.shape_78.setTransform(56.7,220.4,1.2,1.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AAOAZIgEgLIgUAAIgEALIgGAAIASgxIAEAAIATAxgAgJAJIASAAIgJgZg");
	this.shape_79.setTransform(51.3,220.4,1.2,1.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AAKAZIgVgZIAUgYIAHAAIgVAYIAXAZgAgRAZIAAgxIAFAAIAAAxg");
	this.shape_80.setTransform(46.4,220.4,1.2,1.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AABAAIAOgOIAAAHIgIAHIAIAJIAAAGgAgOAAIAOgOIAAAHIgIAHIAIAJIAAAGg");
	this.shape_81.setTransform(40.9,221.2,1.2,1.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgMAUQgFgFAAgPQAAgOAFgGQAFgEAHAAQAIAAAFAEQAEAGAAAOQAAAPgEAFQgGAFgHAAQgHAAgFgFgAgIgQQgDADAAANQAAAOADADQAEADAEAAQAFAAADgDQAEgEAAgNQAAgMgEgEQgDgEgFAAQgEAAgEAEg");
	this.shape_82.setTransform(33.9,220.5,1.2,1.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgMAUQgEgFAAgPQAAgOAEgGQAFgEAHAAQAIAAAEAEQAFAGAAAOQAAAPgFAFQgEAFgIAAQgHAAgFgFgAgHgQQgEADAAANQAAAOAEADQADADAEAAQAFAAAEgDQADgEAAgNQAAgMgDgEQgEgEgFAAQgEAAgDAEg");
	this.shape_83.setTransform(28.4,220.5,1.2,1.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgLAUQgGgFAAgPQAAgOAGgGQAEgEAHAAQAHAAAGAEQAEAGAAAOQAAAPgEAFQgHAFgGAAQgHAAgEgFgAgIgQQgDADAAANQAAAOADADQADADAFAAQAFAAADgDQAEgEAAgNQAAgMgEgEQgDgEgFAAQgFAAgDAEg");
	this.shape_84.setTransform(23,220.5,1.2,1.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#494948").s().p("AgZAZQgKgKAAgPQAAgOAKgLQAKgJAPgBQAPAAAKAKQAKALABAOQAAAPgLAKQgKALgPAAQgOAAgLgLgAgVgVQgJAJAAAMQAAANAJAJQAJAJAMAAQAMAAAJgJQAKgJAAgNQAAgLgKgKQgJgJgMAAQgMAAgJAJgAAKAUIAAgBIgBgCIAAgDQAAgHgDgBQgCgCgGAAIgFAAIAAAQIgHAAIAAgnIAOAAQAHAAADABQAGAEAAAGQAAAGgEACIgGACQAFABACACQACAEAAADIAAAFIABACIAAABgAgHAAIAHAAIAFgBQAEgBAAgFQAAgEgDgBQgCgCgFAAIgGAAg");
	this.shape_85.setTransform(276.2,224.8);

	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(243.6,191.9,1,1,0,0,0,60.6,60.6);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(254.5,193.2,1,1,0,0,0,23.8,22.7);

	this.instance_2 = new lib.ClipGroup_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(242.2,201.8,1,1,0,0,0,7,6.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AjiDjQheheAAiFQAAiEBeheQBeheCEAAQCFAABeBeQBeBeAACEQAACFheBeQheBeiFAAQiEAAhehegAhEAaIhBDyQA/AfBGAAQB8AABXhXQBYhYAAh8QAAgrgMgqgAkbBfQARAyAiAqQAhAqAuAbIA7jeIhNAZIgXBWIgbAHIAYhVgAj0irQg2BNAABeQAAArALAlIBegeIBYlJQhVAgg2BMgAhOkgIhZFKIBOgZIA0jDIAagHIg0DCIFYhtQgfhXhMg3QhOg4hgAAQgpAAglAKg");
	this.shape_86.setTransform(242.9,192.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AhiBHQgGgIADgRQAEgRALgNQALgNAOgEQAPgEAHAHQAHAIgEARQgCAOgIAMQgIALgLAHgAhAARQgNAEgEATQgCALADAEQADADAFgBQAMgEAFgUQACgLgEgEQAAAAAAgBQgBAAAAAAQgBgBgBAAQAAAAgBAAIgDABgAiHBHQAFgHABgJQADgLgEgEQgCgDgFACQgNAEgEATIgBAJIgTAAIAAgDQADgRALgNQAMgOAOgEQAPgEAHAIQAHAIgEARQgCAMgGAKgAgbgLIAWgGIACApIAVgyIAWgHIgnBUIgWAIgAAyglIAsgNIgEATIgXAJIgCAJIATgHIgDATIgUAFIgCAKIAYgJIgFAWIgtAOgAByg5IAqgLQAJgDAGAEQAFAEgCAKQgEAQgKAGQAIABgCAPIgBAPIgWAFIABgKIAAgJQgBgEgGABIgKABIgGAeIgXAGgACOgwIgKADIgDAPIALgDQAKgEACgGQABgGgGAAIgFABg");
	this.shape_87.setTransform(253.8,193.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgxAJQgHgHADgPIATAAQAAALAKgDQAGgCAEgGIARAAQgLAUgUAGIgJABQgHAAgFgFgAAWgNIAhAAIgLAFIgJABQgIAAgFgGg");
	this.shape_88.setTransform(241.7,201.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#75221E").s().p("AjiDjQheheAAiFQAAiEBeheQBeheCEAAQCFAABeBeQBeBeAACEQAACFheBeQheBeiFAAQiEAAhehegAhEAaIhBDyQA/AfBGAAQB8AABXhYQBYhXAAh8QAAgrgNgqgAkbBeQARAzAiAqQAhAqAuAbIA7jdIhNAYIgXBWIgaAIIAWhWgAj0irQg2BNAABeQAAArALAlIBegeIBYlJQhVAhg2BLgAhOkgIhYFKIBMgZIA1jCIAagIIg0DCIFYhtQgehYhNg2QhOg4hgAAQglAAgpAKg");
	this.shape_89.setTransform(243.7,192.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#75221E").s().p("AhiBGQgGgHADgRQAEgRALgNQALgOAOgDQAPgEAHAHQAHAIgDARQgHAegXANgAhAAQQgNAEgEAUQgCALADAEQADADAFgBQANgEAEgUQACgLgEgEQAAgBAAAAQgBAAAAgBQgBAAgBAAQAAAAgBAAIgDAAgAiHBGQAFgGABgJQADgLgEgEQgCgDgFABQgNAEgEAUIgBAIIgTAAIAAgCQAEgRALgNQALgOAOgEQAPgEAHAIQAHAIgEARQgCALgGAKgAgbgMIAWgGIACAqIAVgzIAWgHIgnBUIgWAIgAAyglIAsgNIgEATIgXAIIgCAKIATgIIgDAUIgUAFIgCAJIAYgJIgFAXIgtANgAByg5IAqgLQAJgDAGAEQAFADgCALQgDAPgLAGQAIACgCAOIgBAQIgWAFIABgKIAAgKQgBgEgGACIgKABIgGAdIgXAHgACOgwIgKADIgDAPIALgDQAKgDACgHQABgFgFAAIgGAAg");
	this.shape_90.setTransform(254.6,193.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#75221E").s().p("AgxAJQgHgHADgPIATAAQAAAGAEACQACACAEgCQAFgBAFgHIARAAQgMAVgTAFIgJABQgHAAgFgFgAAWgNIAhAAQgFADgGACIgJABQgIAAgFgGg");
	this.shape_91.setTransform(242.5,202.3);

	this.instance_3 = new lib.ClipGroup_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(242.9,191.6,1,1,0,0,0,69,69);

	this.instance_4 = new lib.ClipGroup_4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(242.9,191.6,1,1,0,0,0,70.3,70.3);

	this.instance_5 = new lib.ClipGroup_5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(242.9,191.6,1,1,0,0,0,73.6,73.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AqFJNIE/yZIPLAAIAASZg");
	this.shape_92.setTransform(235.7,191.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_92},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(232));

	// Слой 13
	this.instance_6 = new lib.t4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(86.8,52.8,1,1,0,0,0,47.6,31.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(168).to({_off:false},0).to({x:76.8,alpha:1},7,cjs.Ease.get(1)).wait(49).to({x:66.8,alpha:0},7,cjs.Ease.get(1)).wait(1));

	// Слой 12
	this.instance_7 = new lib.t3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(125.8,38.4,1,1,0,0,0,86.4,21.4);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(112).to({_off:false},0).to({x:115.8,alpha:1},7,cjs.Ease.get(1)).wait(49).to({x:105.8,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(56));

	// Слой 11
	this.instance_8 = new lib.t2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(131.8,53.7,1,1,0,0,0,92.9,31.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(56).to({_off:false},0).to({x:121.8,alpha:1},7,cjs.Ease.get(1)).wait(49).to({x:111.8,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(112));

	// Слой 2
	this.instance_9 = new lib.t1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(204.7,41.4,1,1,0,0,0,87.7,19.2);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:194.7,alpha:1},7,cjs.Ease.get(1)).wait(49).to({x:184.7,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(168));

	// 4.jpg
	this.instance_10 = new lib.p4();
	this.instance_10.parent = this;
	this.instance_10.setTransform(160,105,1,1,0,0,0,150,125);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(168).to({_off:false},0).to({x:150,y:125,alpha:1},7,cjs.Ease.get(1)).wait(49).to({x:140,y:145,alpha:0},7,cjs.Ease.get(1)).wait(1));

	// 3.jpg
	this.instance_11 = new lib.p3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(160,105,1,1,0,0,0,150,125);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(112).to({_off:false},0).to({x:150,y:125,alpha:1},7,cjs.Ease.get(1)).wait(49).to({x:140,y:145,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(56));

	// 2.jpg
	this.instance_12 = new lib.p2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(160,105,1,1,0,0,0,150,125);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(56).to({_off:false},0).to({x:150,y:125,alpha:1},7,cjs.Ease.get(1)).wait(49).to({x:140,y:145,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(112));

	// 1.jpg
	this.instance_13 = new lib.p1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(160,105,1,1,0,0,0,150,125);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({x:150,y:125,alpha:1},7,cjs.Ease.get(1)).wait(49).to({x:140,y:145,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(168));

	// Слой 15
	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_93.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_93).wait(232));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.5,105,317.1,285.2);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/300x250_atlas_.jpg", id:"300x250_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;