(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"600x500_atlas_", frames: [[0,502,600,500],[0,1004,600,500],[0,0,600,500],[0,1506,600,500]]}
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
	this.spriteSheet = ss["600x500_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["600x500_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["600x500_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["600x500_atlas_"];
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
	this.shape.graphics.f("#FFFFFF").s().p("AAdA8IgIgYIgoAAIgJAYIgXAAIAvh3IAIAAIAwB3gAgNAUIAbAAIgOgqg");
	this.shape.setTransform(111.8,89.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCA8IgYhAIgNA+IgUAAIAYh1IALAAIAYBPIAZhPIALAAIAYB1IgUAAIgMg+IgYBAg");
	this.shape_1.setTransform(100.1,90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgmAtQgNgRAAgcQAAgZAOgSQAPgRAWAAQAZAAANAQQAOAQAAAcQAAAdgPAQQgNAQgZAAQgYAAgNgQgAgWgeQgHALAAATQAAAUAHAMQAIALANAAQAOAAAIgLQAJgMAAgUQAAgpgeAAQgOAAgIALg");
	this.shape_2.setTransform(87.9,89.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAnBMIAAgiIhNAAIAAAiIgSAAIAAg0IAIAAQAJgLAKgWQALgZAIgpIA2AAIAABjIANAAIAAA0gAgHgKQgJAWgJAMIAxAAIAAhSIgVAAQgDAYgHAYg");
	this.shape_3.setTransform(76,91.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgmAtQgMgRAAgcQAAgZANgSQAOgRAXAAQAYAAAOAQQANAQAAAcQAAAdgNAQQgOAQgaAAQgXAAgNgQgAgWgeQgHALAAATQAAAUAHAMQAIALAMAAQAPAAAIgLQAJgMAAgUQAAgpgeAAQgOAAgIALg");
	this.shape_4.setTransform(59.2,89.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgkA7IAAh1IBJAAIAAATIgzAAIAABig");
	this.shape_5.setTransform(49.2,90);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AglA7IAAh1IBLAAIAAATIg2AAIAAAbIAmAAIAAARIgmAAIAAAkIA1AAIAAASg");
	this.shape_6.setTransform(39.8,90);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhAA7IAAh1IAUAAIAABjIAjAAIAAhjIATAAIAABjIAjAAIAAhjIAUAAIAAB1g");
	this.shape_7.setTransform(27.1,90);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAdA8IgJgYIgnAAIgIAYIgYAAIAvh3IAJAAIAvB3gAgOAUIAcAAIgOgqg");
	this.shape_8.setTransform(14.2,89.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnA8IAAh1IAigCQAQAAALAIQALAJAAAOQAAAOgPAIQAWAHAAAYQAAAQgMAJQgMAKgTAAgAgSADIAAAnIALABQAMAAAHgFQAGgEAAgMQAAgKgFgEQgGgFgOAAIgLAAgAgSgoIAAAcIALAAQATAAAAgPQAAgOgSAAg");
	this.shape_9.setTransform(4.2,89.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKA7IAAhjIgmAAIAAgSIBhAAIAAASIgnAAIAABjg");
	this.shape_10.setTransform(90.4,70.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgmA8IAAh2IAYAAQAcgBAMAJQANAJAAASQAAAogvgBIgJAAIAAAsgAgRgnIAAAlIAIABQAOgBAGgEQAHgFAAgKQAAgTgdAAg");
	this.shape_11.setTransform(80.5,70.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgmAsQgNgQAAgcQAAgaAPgRQANgRAXAAQAZAAANAQQAOAPAAAdQgBAcgOARQgNAQgZAAQgZAAgMgRgAgVgeQgIAKABAUQgBAVAIAKQAGALAOAAQAPAAAHgLQAJgLAAgUQAAgqgeAAQgOAAgHAMg");
	this.shape_12.setTransform(69.5,70.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgJA+IAAgMQgXgDgMgMQgOgOAAgVQAAgTAOgOQAOgOAVgCIAAgMIATAAIAAAMQAYACAMANQAMANAAAVQAAAUgMAOQgNAOgXACIAAAMgAAKAiQAPgCAGgJQAIgJAAgOQAAgOgIgJQgIgJgNgBgAgegXQgIAJABAOQgBAOAIAJQAHAJAPACIAAhDQgPABgHAJg");
	this.shape_13.setTransform(57.2,70.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgCA8IgYhAIgNA/IgUAAIAXh2IALAAIAZBPIAZhPIALAAIAYB2IgUAAIgMg/IgYBAg");
	this.shape_14.setTransform(44.2,70.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgmAsQgNgRAAgbQAAgZAOgSQAOgRAXAAQAZAAANAQQAOAPAAAdQAAAbgOASQgOAQgZAAQgZAAgMgRgAgVgeQgIALAAATQAAAUAHALQAIALANAAQAPAAAIgLQAIgKAAgVQAAgqgeAAQgOAAgHAMg");
	this.shape_15.setTransform(32,70.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAUA3QgGgGgCgMQgDgRgIgIQgHgGgOgBIgBAAIAAA2IgVAAIAAh2IAVAAIAAAvIABAAQAOAAAHgFQAIgIACgMQADgMAEgFQAFgFALAAIAIAAIAAATIgEgBQgDAAgCACQgBACgCAGQgCAMgHAGQgGAIgMACQALADAHAIQAHAIADAOQACAHABACQACACAEAAIADgBIAAATIgHABQgLAAgFgFg");
	this.shape_16.setTransform(21.1,70.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgtA9IAAh3IAVAAIAABOIA9hQIAJAAIAAB3IgVAAIAAhOIg9BQg");
	this.shape_17.setTransform(4.8,70.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAdA8IgJgYIgoAAIgIAYIgXAAIAvh3IAIAAIAwB3gAgOAUIAcAAIgOgrg");
	this.shape_18.setTransform(69.6,50.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgLA7IAAhjIglAAIAAgSIBhAAIAAASIgoAAIAABjg");
	this.shape_19.setTransform(58.9,50.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgmAsQgNgRAAgbQAAgZAOgRQAOgSAXAAQAZAAANAPQAOARAAAcQAAAcgOAQQgOARgZAAQgZAAgMgRgAgVgeQgIAKAAAUQAAAUAHALQAIAMANgBQAPABAIgMQAIgLAAgUQAAgpgeAAQgOAAgHALg");
	this.shape_20.setTransform(47.7,50.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgKA7IAAhjIgmAAIAAgSIBhAAIAAASIgoAAIAABjg");
	this.shape_21.setTransform(36.6,50.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgeAtQgOgQAAgcQAAgZAPgSQAQgSAWAAQAVAAAMAJIgJARQgHgIgQABQgOgBgJANQgJANAAASQAAASAIALQAJALAOAAQARABAJgMIAKARQgMANgZAAQgZAAgNgQg");
	this.shape_22.setTransform(26.2,50.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgtA9IAAh3IAVAAIAABPIA9hRIAJAAIAAB3IgVAAIAAhPIg9BRg");
	this.shape_23.setTransform(15.3,50.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAUA7IAAguQgJABgLAAQgTAAgKgJQgLgJAAgSIAAgkIAWAAIAAAkQAAAKAFAFQAGAGAJgBQAIABAKgDIAAg2IAVAAIAAB1g");
	this.shape_24.setTransform(4.1,50.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAUA3IgcgtIgNAAIAAAtIgUAAIAAhsIAegBQApAAAAAgQAAAKgGAIQgFAHgJADIAgAxgAgVgkIAAAeIAIABQALAAAGgEQAGgEAAgJQAAgIgGgEQgFgDgNAAg");
	this.shape_25.setTransform(54.8,23.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgiA3IAAhtIBFAAIAAASIgxAAIAAAZIAiAAIAAAQIgiAAIAAAhIAwAAIAAARg");
	this.shape_26.setTransform(45.4,23.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgFA3IgphtIAVAAIAZBJIAahJIAVAAIgrBtg");
	this.shape_27.setTransform(36,23.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgjApQgMgPAAgaQAAgYANgPQANgRAVAAQAXAAAMAPQANAOAAAbQAAAagNAPQgNAQgXAAQgWAAgMgQgAgUgcQgHALAAARQAAATAHAKQAHAKAMAAQAOAAAHgKQAIgKAAgTQAAgmgcAAQgNAAgHAKg");
	this.shape_28.setTransform(25.8,23.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgjApQgMgPAAgaQAAgXANgQQANgRAVAAQAXAAAMAPQANAPAAAaQAAAZgNAQQgOAQgWAAQgWAAgMgQgAgTgcQgIAKABASQAAATAGAKQAGAKANAAQAOAAAHgKQAHgKAAgTQABgmgcAAQgMAAgHAKg");
	this.shape_29.setTransform(15.1,23.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAWA3IAAgxIgrAAIAAAxIgTAAIAAhtIATAAIAAArIArAAIAAgrIATAAIAABtg");
	this.shape_30.setTransform(4.4,23.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAiA3IAAhtIATAAIAABtgAg0A3IAAhtIATAAIAAApIAOgBQATAAAJAJQAKAIAAARQAAAQgKAJQgJAKgTAAgAghACIAAAkIAKABQAPAAAEgGQAFgFgBgJQAAgIgEgFQgHgFgLAAg");
	this.shape_31.setTransform(77.7,5.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgcApQgNgOAAgbQAAgXAOgQQAPgRAVAAQASAAAMAIIgIAQQgHgHgOAAQgNAAgJAMQgJANAAAPQAAAQAIAMQAJAKAMAAQAQAAAIgLIAKAQQgMANgXAAQgWAAgNgQg");
	this.shape_32.setTransform(66.7,5.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgjApQgMgPAAgaQAAgYANgQQANgQAVAAQAXAAAMAPQANAOAAAbQAAAZgNAQQgOAQgWAAQgWAAgMgQgAgUgcQgHALAAARQAAATAHAKQAHAKAMAAQANAAAIgKQAIgKAAgTQAAgngcAAQgNAAgHALg");
	this.shape_33.setTransform(56.5,5.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgcApQgNgPAAgaQAAgXAOgQQAPgRAVAAQASAAAMAIIgIAQQgHgHgOAAQgNAAgJAMQgIAMAAAQQAAARAHALQAJAKAMAAQAQAAAIgLIAKAQQgMANgXAAQgWAAgNgQg");
	this.shape_34.setTransform(46.5,5.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgiA3IAAhtIBFAAIAAARIgyAAIAAAaIAkAAIAAAQIgkAAIAAAgIAxAAIAAASg");
	this.shape_35.setTransform(37.6,5.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AguAlQAGAAADgBQACgBAGgFQADgFAFgOQAEgLAEgTIAFgjIA3AAIAABsIgTAAIAAhcIgWAAQgDAZgDARQgEAVgHAKQgHAMgIAEQgIAEgMAAg");
	this.shape_36.setTransform(27.2,5.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAiA3IAAhtIATAAIAABtgAg0A3IAAhtIATAAIAAApIAOgBQATAAAJAJQALAIAAARQAAAQgLAJQgJAKgUAAgAghACIAAAkIAKABQAPAAAEgGQAFgFgBgJQAAgIgEgFQgHgFgLAAg");
	this.shape_37.setTransform(15.8,5.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAUA3IAAhcIgnAAIAABcIgUAAIAAhtIBPAAIAABtg");
	this.shape_38.setTransform(4.3,5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4, new cjs.Rectangle(0,0,117,99.3), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAUA3IgcgtIgNAAIAAAtIgUAAIAAhsIAegBQApAAAAAgQAAAKgGAIQgEAGgKAEIAgAxgAgVgkIAAAeIAIABQANAAAEgEQAGgDAAgKQAAgIgGgDQgFgEgNAAg");
	this.shape.setTransform(55.2,23.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgiA3IAAhtIBFAAIAAASIgyAAIAAAZIAkAAIAAAQIgkAAIAAAhIAxAAIAAARg");
	this.shape_1.setTransform(45.8,23.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgFA4IgphuIAVAAIAZBJIAahJIAVAAIgrBug");
	this.shape_2.setTransform(36.4,23.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgjApQgMgPAAgaQAAgYANgPQANgRAVAAQAXAAAMAPQANAOAAAbQAAAagNAPQgNAQgXAAQgWAAgMgQgAgUgcQgHALAAARQAAARAHAMQAGALANAAQANAAAIgLQAIgKAAgTQAAgmgcAAQgNAAgHAKg");
	this.shape_3.setTransform(26.3,23.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgjApQgMgPAAgaQAAgXANgQQANgRAVAAQAXAAAMAPQANAOAAAbQAAAZgNAQQgOAQgWAAQgWAAgMgQgAgUgcQgHAKAAASQABATAGAKQAGALANAAQANAAAIgLQAIgKgBgTQAAgmgbAAQgMAAgIAKg");
	this.shape_4.setTransform(15.5,23.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAWA3IAAgxIgrAAIAAAxIgTAAIAAhtIATAAIAAArIArAAIAAgrIATAAIAABtg");
	this.shape_5.setTransform(4.9,23.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAiA3IAAhtIATAAIAABtgAg0A3IAAhtIATAAIAAApIAOgBQATAAAJAJQALAJAAAQQAAAQgLAJQgJAKgUAAgAghACIAAAkIAKABQAPAAAEgGQAFgFgBgJQAAgIgEgFQgHgFgLAAg");
	this.shape_6.setTransform(78.2,5.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgcApQgNgPAAgaQAAgXAOgQQAPgRAVAAQASAAAMAIIgIAQQgHgHgOAAQgNAAgJAMQgIAMAAAQQAAARAHALQAJAKAMAAQAQAAAIgLIAKAQQgNANgWAAQgXAAgMgQg");
	this.shape_7.setTransform(67.1,5.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgjApQgMgPAAgaQAAgYANgQQANgQAVAAQAWAAANAPQANAOAAAbQAAAZgNAQQgNAQgXAAQgWAAgMgQgAgUgcQgHALAAARQAAATAHAKQAHAKAMAAQANAAAIgKQAIgKAAgTQAAgngcAAQgNAAgHALg");
	this.shape_8.setTransform(57,5.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgcApQgNgPAAgaQAAgWAOgRQAPgRAVAAQASAAAMAIIgIAQQgHgHgOAAQgNAAgJAMQgIAMAAAQQAAARAHALQAJAKAMAAQAQAAAIgLIAKAQQgNANgWAAQgXAAgMgQg");
	this.shape_9.setTransform(47,5.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgiA3IAAhtIBFAAIAAARIgxAAIAAAaIAjAAIAAAQIgjAAIAAAgIAwAAIAAASg");
	this.shape_10.setTransform(38,5.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgtAlQAFAAADgBQACgBAGgFQADgFAFgOQAEgLAEgTIAFgjIA3AAIAABsIgTAAIAAhcIgWAAQgDAZgDARQgFAVgGAKQgHAMgHAEQgKAEgKAAg");
	this.shape_11.setTransform(27.6,5.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAiA3IAAhtIATAAIAABtgAg0A3IAAhtIATAAIAAApIAOgBQATAAAKAJQAKAJAAAQQAAAQgLAJQgJAKgUAAgAghACIAAAkIAKABQAPAAAEgGQAFgFAAgJQgBgIgFgFQgGgFgLAAg");
	this.shape_12.setTransform(16.3,5.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAUA3IAAhcIgnAAIAABcIgUAAIAAhtIBPAAIAABtg");
	this.shape_13.setTransform(4.7,5.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AglA3IAAhtIAUAAIAAApIAQgBQASAAAKAKQALAIAAARQAAAPgLAKQgKAJgSAAgAgRACIAAAlIALAAQAYAAAAgTQAAgJgGgFQgGgFgLAAg");
	this.shape_14.setTransform(131.2,68.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgKA3IAAhcIgiAAIAAgRIBZAAIAAARIgkAAIAABcg");
	this.shape_15.setTransform(121.4,68.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgcAqQgNgQAAgaQAAgWAOgRQAPgRAVAAQATAAALAIIgIAQQgHgGgOAAQgNAAgJALQgIAMAAAQQAAASAIAKQAHAKANAAQAQAAAJgLIAJAQQgMANgXAAQgWAAgNgPg");
	this.shape_16.setTransform(111.8,68.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgjApQgMgQAAgZQAAgYANgPQANgRAVAAQAXAAAMAPQANAOAAAbQAAAbgNAOQgNAQgXAAQgWAAgMgQgAgUgcQgHALAAARQAAASAHALQAHAKAMAAQANAAAIgKQAIgKAAgTQAAgmgcAAQgNAAgHAKg");
	this.shape_17.setTransform(101.6,68.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAWA3IAAgxIgqAAIAAAxIgUAAIAAhtIAUAAIAAArIAqAAIAAgrIATAAIAABtg");
	this.shape_18.setTransform(91,68.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgkA3IAAhsIAfgBQAQAAAJAHQAKAHAAAOQAAANgNAHQAUAHAAAWQAAAPgLAJQgMAIgQAAgAgRAnIAKABQAMAAAFgFQAHgDAAgMQAAgJgGgEQgGgEgMAAIgKAAgAgRgmIAAAbIAKAAQASAAAAgOQAAgNgRAAg");
	this.shape_19.setTransform(81.5,68.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgqA5IAAhvIAUAAIAABIIA4hKIAIAAIAABuIgTAAIAAhIIg4BLg");
	this.shape_20.setTransform(71.3,68.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgKA3IAAhcIgiAAIAAgRIBZAAIAAARIgkAAIAABcg");
	this.shape_21.setTransform(60.9,68.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAUA3IAAhcIgnAAIAABcIgUAAIAAhtIBPAAIAABtg");
	this.shape_22.setTransform(50.8,68.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAbA3IgIgWIglAAIgHAWIgWAAIAshuIAHAAIAsBugAgMASIAZAAIgNgng");
	this.shape_23.setTransform(40.8,68.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAkBGIAAgfIhGAAIAAAfIgSAAIAAgvIAIAAQAHgKALgVQAIgUAJgpIAyAAIAABcIAMAAIAAAvgAgHgJQgHAUgKAMIAuAAIAAhMIgTAAQgDAWgHAWg");
	this.shape_24.setTransform(30.3,70.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAaA3IgIgWIgkAAIgIAWIgVAAIAshuIAHAAIAsBugAgMASIAZAAIgNgng");
	this.shape_25.setTransform(19.9,68.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgpA5IAAhvIATAAIAABIIA4hKIAIAAIAABuIgTAAIAAhIIg4BLg");
	this.shape_26.setTransform(5,68.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AglA3IAAhtIAUAAIAAApIAPgBQATAAAKAJQALAIAAARQAAAQgLAJQgLAKgSAAgAgRACIAAAkIALABQAYAAAAgUQAAgIgGgFQgHgFgKAAg");
	this.shape_27.setTransform(123.6,50.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgKA3IAAhcIgiAAIAAgRIBZAAIAAARIgkAAIAABcg");
	this.shape_28.setTransform(113.7,50.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgcApQgNgPAAgZQAAgXAOgRQAPgQAVAAQATgBALAIIgIAQQgIgHgNAAQgNAAgJANQgIALAAAQQAAARAHAKQAIAMANgBQAPABAKgMIAJAQQgMAMgXAAQgXABgMgQg");
	this.shape_29.setTransform(104.1,50.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgjApQgMgPAAgaQAAgYANgQQANgPAVAAQAYAAALAOQANAOAAAbQAAAagNAPQgNAQgXgBQgWAAgMgPgAgUgcQgHALAAARQAAATAHAKQAHAKAMAAQANAAAIgKQAIgJAAgUQAAgngcAAQgNAAgHALg");
	this.shape_30.setTransform(94,50.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAWA3IAAgyIgqAAIAAAyIgUAAIAAhtIAUAAIAAArIAqAAIAAgrIATAAIAABtg");
	this.shape_31.setTransform(83.4,50.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAWA3IAAgyIgrAAIAAAyIgTAAIAAhtIATAAIAAArIArAAIAAgrIATAAIAABtg");
	this.shape_32.setTransform(72.9,50.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgiA3IAAhtIBFAAIAAARIgyAAIAAAaIAkAAIAAAPIgkAAIAAAhIAxAAIAAASg");
	this.shape_33.setTransform(63.4,50.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgkA3IAAhsIAYgBQAYAAAMAIQAMAIAAARQAAAkgrAAIgJAAIAAAogAgQgCIAIABQALAAAHgEQAGgFAAgKQAAgRgaAAIgGAAg");
	this.shape_34.setTransform(54.6,50.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgkA3IAAhsIAfgCQAQABAKAHQAKAIgBANQAAANgNAIQAUAGAAAWQAAAPgLAIQgMAJgQAAgAgRADIAAAkIAKABQALgBAGgEQAHgFAAgJQAAgKgGgEQgFgFgNABIgKAAgAgRgmIAAAbIAKAAQASAAAAgPQAAgMgRAAg");
	this.shape_35.setTransform(45.5,50.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgiA3IAAhtIBFAAIAAARIgyAAIAAAaIAkAAIAAAPIgkAAIAAAhIAxAAIAAASg");
	this.shape_36.setTransform(36.4,50.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAWA3IAAgyIgqAAIAAAyIgUAAIAAhtIAUAAIAAArIAqAAIAAgrIATAAIAABtg");
	this.shape_37.setTransform(26.6,50.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAbA4IgIgXIglAAIgHAXIgWAAIAshvIAHAAIAsBvgAgMASIAZAAIgNgng");
	this.shape_38.setTransform(16.4,50.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgCA3IgXg7IgLA6IgTAAIAWhsIALAAIAWBIIAYhIIAJAAIAXBsIgTAAIgLg6IgWA7g");
	this.shape_39.setTransform(5.6,51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(0,0,135,77.5), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgnA3IAAgRIACAAQAEAAACgCIADgHQADgTASgHQgOgDgGgGQgGgHAAgKQAAgNAMgKQAKgJAUAAIAgACIAABsIgTAAIAAguIgFAAQgNAAgGAHQgHAGgCANQgDAKgFAGQgEAFgKAAgAgHgjQgGAEAAAIQAAARAYABIALAAIAAghIgPgBQgIAAgGAEg");
	this.shape.setTransform(94.2,68.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqA5IAAhvIAUAAIAABJIA5hLIAIAAIAABvIgUAAIAAhJIg4BLg");
	this.shape_1.setTransform(84.2,68.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAWA3IAAgxIgqAAIAAAxIgUAAIAAhtIAUAAIAAArIAqAAIAAgrIATAAIAABtg");
	this.shape_2.setTransform(73.6,68.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAbA4IgIgXIglAAIgHAXIgWAAIAshvIAHAAIAsBvgAgMASIAZAAIgNgng");
	this.shape_3.setTransform(63.4,68.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgkA3IAAhsIAggBQAPAAAKAHQAKAHAAAOQAAANgOAIQAUAFAAAXQAAAPgLAJQgMAIgQAAgAgRAnIAKABQALAAAGgFQAHgDAAgMQAAgJgFgEQgGgEgNAAIgKAAgAgRglIAAAaIAKAAQASAAAAgOQAAgNgQAAg");
	this.shape_4.setTransform(54.2,68.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAiA3IAAhtIATAAIAABtgAg0A3IAAhtIATAAIAAAqIAOgBQATAAAJAJQALAIAAARQAAAPgLAKQgJAJgUAAgAghACIAAAlIAKAAQAOAAAGgFQADgGAAgIQAAgJgEgFQgGgFgMAAg");
	this.shape_5.setTransform(43,68.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcAqQgNgQAAgZQAAgXAOgRQAPgRAVAAQATAAALAIIgIAQQgHgGgOAAQgNAAgJAMQgIAKAAARQAAASAIAKQAHAKANAAQAQAAAJgLIAJAQQgMANgXAAQgWAAgNgPg");
	this.shape_6.setTransform(31.9,68.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAbA4IgIgXIglAAIgHAXIgWAAIAshvIAHAAIAsBvgAgMASIAZAAIgNgng");
	this.shape_7.setTransform(22.3,68.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgcAqQgMgPAAgaQAAgYANgQQAOgRAVAAQAUAAALAIIgIAQQgHgGgOAAQgNAAgJAMQgIALAAAQQgBASAJAKQAHAKANAAQAPAAAKgLIAJAQQgMANgYAAQgVAAgNgPg");
	this.shape_8.setTransform(12.8,68.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgkA3IAAhsIAfgBQAQAAAKAHQAKAHAAAOQAAANgPAIQAVAFAAAXQAAAPgLAJQgMAIgQAAgAgRAnIAKABQAMAAAFgFQAHgEAAgLQAAgJgGgEQgFgEgNAAIgKAAgAgRglIAAAaIAKAAQASAAAAgOQAAgNgRAAg");
	this.shape_9.setTransform(3.7,68.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AglA3IAAhtIAUAAIAAApIAPgBQASAAALAJQALAJAAAQQAAAQgLAJQgLAKgSAAgAgRACIAAAkIALABQAYAAAAgUQAAgIgGgFQgGgFgLAAg");
	this.shape_10.setTransform(157.9,50.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgKA3IAAhcIgjAAIAAgRIBbAAIAAARIglAAIAABcg");
	this.shape_11.setTransform(148,50.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgcApQgNgOAAgbQAAgXAOgQQAPgRAVAAQASAAAMAIIgIAQQgHgHgOAAQgNAAgJAMQgJANAAAPQAAAQAIALQAIALANAAQAQAAAIgLIAKAQQgMANgXAAQgWAAgNgQg");
	this.shape_12.setTransform(138.4,50.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgjApQgMgPAAgaQAAgYANgQQANgQAVAAQAXAAAMAPQANAOAAAbQAAAZgNAQQgOAQgWAAQgXAAgLgQgAgUgcQgHALAAARQAAATAHAKQAHAKAMAAQANAAAIgKQAIgKAAgTQAAgngcAAQgNAAgHALg");
	this.shape_13.setTransform(128.3,50.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAWA3IAAgyIgrAAIAAAyIgTAAIAAhtIATAAIAAArIArAAIAAgrIATAAIAABtg");
	this.shape_14.setTransform(117.6,50.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAxBHIAAggIhyAAIAAhsIASAAIAABbIAgAAIAAhbIASAAIAABbIAhAAIAAhbIASAAIAABbIAMAAIAAAxg");
	this.shape_15.setTransform(105.5,52.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgjApQgMgQAAgZQAAgYANgQQANgQAVAAQAYAAALAPQANAOAAAbQAAAagNAPQgNAQgXAAQgWAAgMgQgAgUgcQgHALAAARQAAASAHALQAHAKAMAAQANAAAIgKQAIgKAAgTQAAgngcAAQgNAAgHALg");
	this.shape_16.setTransform(92.3,50.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgCA3IgXg7IgLA6IgTAAIAWhsIAKAAIAXBIIAXhIIALAAIAWBsIgTAAIgLg6IgXA7g");
	this.shape_17.setTransform(81,50.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgoA3IAAgRIADAAQAEABACgDIACgHQAEgTASgHQgPgDgFgGQgFgHAAgKQAAgOAKgIQAKgKAVAAIAgACIAABsIgUAAIAAguIgEAAQgNAAgGAHQgIAHgCANQgCALgFAEQgGAFgIAAgAgHgjQgGAEAAAIQAAARAYAAIAKABIAAghIgOgBQgIAAgGAEg");
	this.shape_18.setTransform(65.2,50.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAbA4IgIgXIglAAIgHAXIgWAAIAshvIAHAAIAsBvgAgMASIAZAAIgNgng");
	this.shape_19.setTransform(55.7,50.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AATAzQgFgFgDgMQgDgQgHgGQgHgHgMAAIgBAAIAAAyIgUAAIAAhtIAUAAIAAArIABAAQAOAAAFgFQAIgGABgMQADgMAEgEQAFgFAKAAIAHABIAAARIgDAAQgBAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgBACgCAGQgBAJgIAHQgHAIgJACQAKACAHAHQAGAIADANQACAHABABQACACADAAIADAAIAAARIgGABQgKAAgFgFg");
	this.shape_20.setTransform(46.2,50.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgjApQgMgPAAgaQAAgXANgRQANgQAVAAQAXAAAMAPQANAPAAAaQAAAZgNAQQgOAQgWAAQgWAAgMgQgAgUgcQgGAKgBASQABATAGAKQAHAKAMAAQANAAAIgKQAHgKAAgTQAAgngbAAQgMAAgIALg");
	this.shape_21.setTransform(35.7,50.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgcApQgNgOAAgbQAAgXAOgQQAOgRAVAAQAUAAAKAIIgIAQQgFgHgPAAQgNAAgJAMQgJANABAPQAAARAIAKQAHALANAAQAPAAAKgLIAJAQQgMANgXAAQgWAAgNgQg");
	this.shape_22.setTransform(25.7,50.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAiA3IAAhtIATAAIAABtgAg0A3IAAhtIATAAIAAApIAOgBQATAAAKAJQAKAIAAARQAAAQgLAJQgJAKgUAAgAghACIAAAkIAKABQAPAAAEgGQAEgGABgIQgBgIgFgFQgGgFgLAAg");
	this.shape_23.setTransform(14.5,50.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgkA4IAAhtIAfgCQAQAAAKAIQAKAHAAAOQAAANgPAIQAVAFAAAXQAAAQgLAIQgLAIgRABgAgRADIAAAkIAKABQALAAAGgFQAHgFAAgJQAAgKgGgEQgFgFgNABIgKAAgAgRgmIAAAaIAKABQASAAAAgPQAAgMgRAAg");
	this.shape_24.setTransform(3.7,50.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAUA3IgdgtIgMgBIAAAuIgUAAIAAhsIAegBQApAAAAAgQAAAKgGAIQgGAHgIADIAgAxgAgVgkIAAAeIAIAAQAMAAAFgDQAGgEAAgJQAAgJgGgDQgFgDgNAAg");
	this.shape_25.setTransform(55.3,23.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgiA3IAAhtIBFAAIAAARIgxAAIAAAaIAjAAIAAAQIgjAAIAAAgIAwAAIAAASg");
	this.shape_26.setTransform(45.9,23.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgFA3IgphuIAVAAIAZBJIAahJIAVAAIgrBug");
	this.shape_27.setTransform(36.5,23.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgjApQgMgPAAgaQAAgYANgQQANgQAVAAQAWAAANAPQANAOAAAbQAAAZgNAQQgNAQgXAAQgWAAgMgQgAgUgcQgHALAAARQAAATAHAKQAHAKAMAAQANAAAIgKQAIgKAAgTQAAgngcAAQgNAAgHALg");
	this.shape_28.setTransform(26.3,23.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgjApQgMgPAAgaQAAgXANgRQANgQAVAAQAXAAANAPQAMAPAAAaQAAAagNAPQgOAQgWAAQgXAAgLgQgAgUgcQgHALAAARQAAARAGAMQAIAKAMAAQANAAAIgKQAHgKABgTQgBgngbAAQgMAAgIALg");
	this.shape_29.setTransform(15.6,23.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAWA3IAAgyIgrAAIAAAyIgTAAIAAhtIATAAIAAArIArAAIAAgrIATAAIAABtg");
	this.shape_30.setTransform(4.9,23.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAiA3IAAhtIATAAIAABtgAg0A3IAAhtIATAAIAAAqIAOgBQATAAAJAJQAKAIAAARQAAAPgKAKQgJAJgTAAgAghACIAAAlIAKAAQAOAAAFgFQAEgGAAgIQAAgJgFgFQgFgFgNAAg");
	this.shape_31.setTransform(78.2,5.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgcAqQgNgPAAgaQAAgYAOgQQAOgRAVAAQASAAAMAIIgHAQQgHgGgOAAQgOAAgIAMQgJAMAAAPQAAASAIAKQAIAKANAAQAQAAAIgLIAKAQQgMANgXAAQgWAAgNgPg");
	this.shape_32.setTransform(67.2,5.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgjApQgMgPAAgaQAAgXANgQQANgRAVAAQAWAAANAPQANAOAAAbQAAAagNAPQgOAQgWAAQgXAAgLgQgAgUgcQgGAKgBASQAAAUAHAJQAGAKANAAQAOAAAHgKQAIgKAAgTQAAgmgcAAQgMAAgIAKg");
	this.shape_33.setTransform(57,5.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgcAqQgNgPAAgaQAAgYAOgQQAOgRAVAAQASAAAMAIIgHAQQgHgGgOAAQgNAAgJAMQgJAMAAAPQAAARAIALQAJAKAMAAQAQAAAIgLIAKAQQgMANgXAAQgWAAgNgPg");
	this.shape_34.setTransform(47,5.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgiA3IAAhtIBFAAIAAASIgyAAIAAAZIAjAAIAAAQIgjAAIAAAhIAxAAIAAARg");
	this.shape_35.setTransform(38.1,5.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AguAmQAGgBADgBQAEgBAEgFQAEgEAEgOQAEgMAEgTIAFgkIA3AAIAABtIgUAAIAAhcIgVAAQgCAVgEAUQgEASgHAPQgGAKgJAFQgIAEgMABg");
	this.shape_36.setTransform(27.6,5.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAiA3IAAhtIATAAIAABtgAg0A3IAAhtIATAAIAAAqIAOgBQASAAAKAJQAKAIAAARQAAAPgKAKQgKAJgSAAgAghACIAAAlIAKAAQAOAAAFgFQAEgGAAgIQAAgJgEgFQgGgFgMAAg");
	this.shape_37.setTransform(16.3,5.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAUA3IAAhbIgnAAIAABbIgUAAIAAhtIBPAAIAABtg");
	this.shape_38.setTransform(4.8,5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(0,0,161.7,74.3), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAUA3IgdgtIgMgBIAAAuIgUAAIAAhsIAegBQApAAAAAgQAAAKgGAIQgGAHgJADIAhAxgAgVgkIAAAeIAJAAQAMAAAEgDQAGgDAAgKQAAgIgGgEQgGgDgMAAg");
	this.shape.setTransform(54.5,41.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgiA3IAAhtIBFAAIAAARIgxAAIAAAaIAjAAIAAAQIgjAAIAAAhIAwAAIAAARg");
	this.shape_1.setTransform(45,41.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgFA3IgphuIAVAAIAZBJIAahJIAVAAIgqBug");
	this.shape_2.setTransform(35.6,41.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgjApQgMgPAAgaQAAgXANgRQANgQAVAAQAXAAANAPQAMAPAAAaQAAAagNAPQgNAQgYAAQgWAAgLgQgAgUgcQgHALAAARQAAARAGAMQAIAKALAAQAPAAAHgKQAIgKAAgTQgBgmgbAAQgNAAgHAKg");
	this.shape_3.setTransform(25.5,41.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgjApQgMgPAAgaQAAgYANgQQANgQAVAAQAWAAANAPQANAOAAAbQAAAZgNAQQgNAQgXAAQgWAAgMgQgAgUgcQgHALAAARQAAATAHAKQAHAKAMAAQANAAAIgKQAIgKAAgTQAAgmgcAAQgNAAgHAKg");
	this.shape_4.setTransform(14.7,41.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAWA3IAAgyIgqAAIAAAyIgUAAIAAhtIAUAAIAAArIAqAAIAAgrIATAAIAABtg");
	this.shape_5.setTransform(4.1,41.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAiA3IAAhtIATAAIAABtgAg0A3IAAhtIATAAIAAApIAOgBQATAAAKAJQAKAIAAARQAAAQgKAJQgMAKgRAAgAghACIAAAkIAKABQAOAAAFgGQAFgFAAgJQAAgIgGgFQgFgFgMAAg");
	this.shape_6.setTransform(77.4,23.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgcAqQgNgQAAgZQAAgXAOgRQAOgRAWAAQASAAAMAIIgIAQQgHgGgOAAQgNAAgJAMQgIALAAAQQAAASAIAKQAIALAMAAQAPAAAKgLIAJAPQgMANgXAAQgWAAgNgPg");
	this.shape_7.setTransform(66.3,23.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgjApQgMgPAAgaQAAgWANgRQANgRAVAAQAXAAAMAPQANAOAAAbQAAAbgNAOQgNAQgXAAQgWAAgMgQgAgUgcQgHALAAARQAAATAHAKQAGALANAAQAOAAAHgLQAIgJAAgUQAAgmgcAAQgNAAgHAKg");
	this.shape_8.setTransform(56.2,23.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgcAqQgNgQAAgZQAAgXAOgRQAOgRAWAAQASAAAMAIIgIAQQgHgGgOAAQgNAAgJAMQgIAMAAAPQAAASAIAKQAIALAMAAQAPAAAKgLIAJAPQgMANgXAAQgWAAgNgPg");
	this.shape_9.setTransform(46.2,23.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgiA3IAAhtIBFAAIAAARIgyAAIAAAaIAkAAIAAAPIgkAAIAAAhIAyAAIAAASg");
	this.shape_10.setTransform(37.2,23.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AguAlQAGAAADgBQAEgCAEgEQAEgGAFgNIAHgeQADgQACgTIA2AAIAABsIgTAAIAAhcIgUAAQgDAVgEAUQgFAWgGAKQgGAMgJAEQgHAEgNAAg");
	this.shape_11.setTransform(26.8,23.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAiA3IAAhtIATAAIAABtgAg0A3IAAhtIATAAIAAApIAOgBQATAAAJAJQALAIAAARQAAAQgLAJQgLAKgRAAgAghACIAAAkIAKABQAOAAAGgGQADgFAAgJQABgIgGgFQgFgFgMAAg");
	this.shape_12.setTransform(15.5,23.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAUA3IAAhcIgnAAIAABcIgTAAIAAhtIBOAAIAABtg");
	this.shape_13.setTransform(4,23.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgiA3IAAhtIBFAAIAAARIgyAAIAAAaIAkAAIAAAQIgkAAIAAAgIAxAAIAAASg");
	this.shape_14.setTransform(115.3,5.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAiA3IAAhtIATAAIAABtgAg0A3IAAhtIATAAIAAApIAOgBQASAAAKAKQALAIAAAQQAAAQgLAJQgJAKgTAAgAghACIAAAlIAKAAQAPAAAEgGQAFgFgBgJQAAgIgEgFQgGgFgMAAg");
	this.shape_15.setTransform(104.2,5.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAWA3IAAgyIgrAAIAAAyIgTAAIAAhtIATAAIAAArIArAAIAAgrIATAAIAABtg");
	this.shape_16.setTransform(92.5,5.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAkBGIAAgfIhGAAIAAAfIgSAAIAAgvIAIAAQAIgMAKgUQAIgUAJgpIAyAAIAABdIAMAAIAAAvgAgHgKQgIAVgIAMIAtAAIAAhNIgTAAQgDAWgHAWg");
	this.shape_17.setTransform(81.7,7.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgkApQgLgQAAgZQAAgXANgRQANgQAVAAQAXAAAMAPQANAPAAAaQAAAagOAPQgMAQgYAAQgVAAgNgQgAgUgcQgHAKAAASQAAATAHAKQAGAKAMAAQAPAAAHgKQAIgKAAgTQAAgmgcAAQgNAAgHAKg");
	this.shape_18.setTransform(70.8,5.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgkA3IAAhsIAfgBQAPAAAKAHQAKAHAAAOQAAANgNAHQAUAHAAAWQAAAPgLAJQgMAIgRAAgAgQAnIAJAAQALAAAHgEQAFgDABgMQAAgJgGgEQgFgEgNAAIgJAAgAgQgmIAAAbIAJAAQASAAAAgOQAAgNgRAAg");
	this.shape_19.setTransform(61.1,5.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgjApQgMgPAAgaQAAgYANgQQANgQAVAAQAWAAANAPQANAOAAAbQAAAZgNAQQgNAQgXAAQgWAAgMgQgAgUgcQgHALAAARQAAATAHAKQAHAKAMAAQANAAAIgKQAIgKAAgTQAAgmgcAAQgNAAgHAKg");
	this.shape_20.setTransform(50.8,5.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgjA3IAAhsIAWgBQAYAAANAIQAMAIAAARQAAAkgrAAIgJAAIAAAogAgQgkIAAAjIAIAAQAMAAAGgEQAGgFAAgKQAAgRgaAAg");
	this.shape_21.setTransform(41.2,5.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAUA3IAAhcIgnAAIAABcIgUAAIAAhtIBPAAIAABtg");
	this.shape_22.setTransform(31.3,5.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgcApQgNgOAAgbQAAgXAOgQQAOgRAWAAQASAAAMAIIgIAQQgHgGgOAAQgOAAgIALQgJANAAAPQAAARAIALQAJAKAMAAQAQAAAIgLIAKAQQgNANgWAAQgXAAgMgQg");
	this.shape_23.setTransform(21.6,5.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgiA3IAAhtIBFAAIAAARIgyAAIAAAaIAjAAIAAAQIgjAAIAAAgIAxAAIAAASg");
	this.shape_24.setTransform(12.7,5.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgkA3IAAhtIBBAAIAAARIguAAIAAAaIAOgBQATAAAKAJQALAJAAAQQAAAOgLAKQgKAJgTAAgAgRAEIAAAjIALAAQAMAAAFgFQAGgEgBgKQAAgIgEgEQgGgFgMAAg");
	this.shape_25.setTransform(3.7,5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(0,0,118.8,47.4), null);


(lib.p4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p4, new cjs.Rectangle(0,0,600,500), null);


(lib.p3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p3, new cjs.Rectangle(0,0,600,500), null);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2, new cjs.Rectangle(0,0,600,500), null);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1, new cjs.Rectangle(0,0,600,500), null);


(lib.ClipGroup_5_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjRDMQhWhbAAhxQAAh6BWhXQBXhWB6AAQB6AABYBWQBWBXAAB6QAAB6hWBYQhYBWh6AAQh3AAhahcg");
	mask.setTransform(59.2,59.2);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#D32D3E","#D22D3E","#CB2D3C","#C92D3B","#B82B34","#B42B33","#AA2A2F","#A2292C","#992929","#75221C"],[0,0.047,0.051,0.082,0.161,0.439,0.502,0.694,0.835,1,1],20.7,20.7,-25.6,-25.6).s().p("ApPAAIJPpPIJQJPIpQJQg");
	this.shape.setTransform(59.2,59.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_0, new cjs.Rectangle(29.6,29.6,59.2,59.2), null);


(lib.ClipGroup_4_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjMDNQhUhWAAh3QAAh3BUhVQBVhUB3AAQB4AABVBUQBUBVAAB3QAAB3hUBWQhVBVh4AAQh3AAhVhVg");
	mask.setTransform(56.6,56.6);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#D32D3E","#C42C39","#9D292B","#992929","#75221C"],[0,0.514,0.671,0.973,1,1],-18.2,-24.7,26.7,36.2).s().p("Ao1hVIKKngIHhKKIqLHhg");
	this.shape.setTransform(56.6,56.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_0, new cjs.Rectangle(27.7,27.6,57.9,57.9), null);


(lib.ClipGroup_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjHDIQhUhTAAh1QAAh0BUhUQBShTB1AAQB2AABTBTQBTBUAAB0QAAB1hTBTQhUBUh1AAQh1AAhShUg");
	mask.setTransform(55.5,55.5);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#D32D3E","#C42C39","#9D292B","#992929","#75221C"],[0,0.224,0.475,0.957,1,1],-17.7,-24.1,26.3,35.6).s().p("AoqhTIJ+nXIHXJ+Ip+HXg");
	this.shape.setTransform(55.5,55.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_0, new cjs.Rectangle(27.1,27.1,56.8,56.8), null);


(lib.ClipGroup_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgnAHQgFgFACgMIAPAAQAAAJAIgDQAEgBAEgFIAOAAQgJAPgQAFIgHABQgGAAgEgEgAASgKIAaAAQgFADgDAAIgIABQgGAAgEgEg");
	mask.setTransform(5.7,5.1);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(195,195,195,0)","#C3C3C3","#A8A8A8","#888887","#636361","#3A3A38","#1C1C1A","#1C1C1A"],[0,0.933,0.933,0.949,0.961,0.976,0.988,0.992,1],26.4,16,-30.3,-18.4).s().p("Ag4AGIAkg6IBNAvIgkA6g");
	this.shape.setTransform(5.7,5.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#FFFFFF","#F7F7F7","#E3E3E3","#C2C2C2","#ACACAC","#E7E7E7","#FFFFFF","#FCFCFC","#F6F6F6","#EAEAEA","#D9D9D9","#C3C3C3","rgba(195,195,195,0)","rgba(0,0,0,0)"],[0,0.02,0.075,0.157,0.259,0.314,0.596,0.733,0.831,0.871,0.894,0.914,0.933,0.933,1],26.4,16,-30.3,-18.4).s().p("Ag4AGIAkg6IBNAvIgkA6g");
	this.shape_1.setTransform(5.7,5.3);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_0, new cjs.Rectangle(1.4,4,8.8,2.3), null);


(lib.ClipGroup_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhOA5QgFgHACgNQADgNAJgLQAJgLAMgCIAHgCQAIAAAEAGQADAHgCALQgFAYgTALgAgzANQgLADgDAQQgCAOAHAAIACAAQALgEADgQQACgNgHAAIgCAAgAhsA5QAEgGABgHQADgQgKADQgLAEgDAPIAAAHIgQAAIAAgCQADgOAJgLQAJgKAMgEIAHgBQAIAAAEAHQADAGgCALQgBAIgGAKgAgWgJIASgFIACAhIAQgoIASgGIgfBEIgSAGgAAogdIAkgLIgEAPIgSAHIgCAIIAQgGIgDAPIgQAEIgBAIIATgHIgEASIgkALgABcguIAhgJIAGgBQAMAAgDANQgDANgJAFQAHABgBAMIgBAMIgSAEIABgIQACgLgIACIgIAAIgFAYIgSAFgABzgmIgJACIgCAMIAJgCQAIgCABgHQABgEgEAAIgEABg");
	mask.setTransform(19.1,18.2);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(195,195,195,0)","#C3C3C3","#A8A8A8","#888887","#636361","#3A3A38","#1C1C1A","#1C1C1A"],[0,0.933,0.933,0.949,0.961,0.976,0.988,0.992,1],22.3,13.5,-34.6,-20.9).s().p("Ai/AaIB/jPIEACcIh+DPg");
	this.shape.setTransform(19.2,18.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#FFFFFF","#F7F7F7","#E3E3E3","#C2C2C2","#ACACAC","#E7E7E7","#FFFFFF","#FCFCFC","#F6F6F6","#EAEAEA","#D9D9D9","#C3C3C3","rgba(195,195,195,0)","rgba(0,0,0,0)"],[0,0.02,0.075,0.157,0.259,0.314,0.596,0.733,0.831,0.871,0.894,0.914,0.933,0.933,1],22.3,13.5,-34.6,-20.9).s().p("Ai/AaIB/jPIEACcIh+DPg");
	this.shape_1.setTransform(19.2,18.2);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0, new cjs.Rectangle(5.1,12.6,28.2,11.3), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ai2C3QhLhMAAhrQAAhqBLhMQBMhLBqAAQBrAABMBLQBLBMAABqQAABrhLBMQhMBLhrAAQhqAAhMhLgAg2AVIg0DCQAzAZA3AAQBkAABGhGQBHhHAAhjQAAgjgLghgAjjBMQAOApAbAiQAbAhAkAWIAwiyIg+AUIgTBFIgVAGIAThFgAjEiJQgrA+AABLQAAAhAIAfIBMgYIBHkIQhFAagrA9gAg+jnIhIEJIA/gUIAqicIAVgHIgqCcIEVhXQgahHg9gsQg+gthOAAQgfAAgfAJg");
	mask.setTransform(48.7,48.7);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(195,195,195,0)","#C3C3C3","#A8A8A8","#888887","#636361","#3A3A38","#1C1C1A","#1C1C1A"],[0,0.933,0.933,0.949,0.961,0.976,0.988,0.992,1],29.2,17.7,-27.6,-16.7).s().p("AnmB4IFwpeIJdFvIlvJeg");
	this.shape.setTransform(48.7,48.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#FFFFFF","#F7F7F7","#E3E3E3","#C2C2C2","#ACACAC","#E7E7E7","#FFFFFF","#FCFCFC","#F6F6F6","#EAEAEA","#D9D9D9","#C3C3C3","rgba(195,195,195,0)","rgba(0,0,0,0)"],[0,0.02,0.075,0.157,0.259,0.314,0.596,0.733,0.831,0.871,0.894,0.914,0.933,0.933,1],29.2,17.7,-27.6,-16.7).s().p("AnmB4IFwpeIJdFvIlvJeg");
	this.shape_1.setTransform(48.7,48.7);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(22.9,22.9,51.7,51.7), null);


// stage content:
(lib._600x500 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Eguygm+MBdlAAAMAAABN9MhdlAAAg");
	this.shape.setTransform(300,250);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(237));

	// Слой 9
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#494948").s().p("AgUAUQgIgHAAgNQAAgMAJgHQAIgJALAAQAMAAAIAJQAJAIAAALQAAANgJAHQgIAJgMAAQgKAAgKgJgAgRgRQgHAHAAAKQAAALAHAGQAIAIAJAAQALAAAGgIQAIgGAAgLQAAgJgIgIQgGgHgLAAQgJAAgIAHgAAIAQIAAgBIgBgBIAAgDQAAgFgDgBQgBgBgEAAIgEAAIAAAMIgGAAIAAgfIALAAIAIABQAFACAAAGQAAAEgDACIgFABQADABADACIABAFIAAAFIABACgAgFAAIAFAAIAEgBQADAAAAgFQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBgBAAQgBgBgEAAIgFAAg");
	this.shape_1.setTransform(560.2,457.6,2,2);

	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(507.8,404.7,2,2,0,0,0,48.8,48.7);

	this.instance_1 = new lib.ClipGroup_1_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(525.4,406.6,2,2,0,0,0,19.2,18.2);

	this.instance_2 = new lib.ClipGroup_2_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(505.7,420.6,2,2,0,0,0,5.7,5.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ai2C3QhLhMAAhrQAAhqBLhMQBMhLBqAAQBrAABMBLQBLBMAABqQAABrhLBMQhMBLhrAAQhqAAhMhLgAg2AVIg0DCQAyAaA4AAQBkAABGhHQBHhGAAhkQAAgjgLghgAjjBMQAcBVBMAtIAwiyIg+AUIgTBFIgVAGIAThFgAjEiJQgrA+AABLQAAAhAIAgIBMgYIBHkJQhFAagrA9gAg+jnIhIEJIA/gUIAqicIAVgGIgqCbIEVhXQgahGg9gsQg+gthOAAQgfAAgfAIg");
	this.shape_2.setTransform(506.6,405,2,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhOA5QgFgHACgNQADgNAJgLQAJgLAMgCQALgEAGAGQAFAGgCAOQgFAYgTALgAgzANQgLAEgDAQQgBAJACADQACACAEgBQALgDADgQQACgOgHAAIgCAAgAhsA5QAEgGABgHQABgIgCgEQgCgCgEABQgLADgDAQIAAAHIgQAAIAAgCQADgOAJgLQAJgKAMgEQALgDAGAHQAFAGgCAOQgCAIgFAJgAgWgJIASgFIACAhIAQgoIASgFIgfBDIgSAGgAAogdIAkgLIgEAQIgSAGIgCAIIAQgGIgDAQIgQADIgBAIIATgHIgEASIgkALgABcgtIAhgKQAIgCAEADQAFAEgCAIQgDAMgJAFQAHABgBAMQgCAKABACIgSAEIABgIQACgLgIACIgIAAIgFAYIgSAFgABzgmIgJACIgCAMIAJgCQAIgDABgFQABgFgFAAIgDABg");
	this.shape_3.setTransform(524.2,406.9,2,2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnAIQgGgGADgMIAPAAQAAAJAIgDQAEgBAEgFIAOAAQgJAPgQAFIgIABQgFAAgEgDgAASgKIAaAAIgIAEIgHABQgHAAgEgFg");
	this.shape_4.setTransform(504.7,420.5,2,2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#75221E").s().p("Ai2C3QhLhMAAhrQAAhqBLhMQBMhLBqAAQBrAABMBLQBLBMAABqQAABrhLBMQhMBLhrAAQhqAAhMhLgAg2AVIg0DCQAxAaA5AAQBjAABHhHQBGhGAAhkQAAgigKgigAjjBMQANApAbAiQAbAhAlAWIAwiyIg+AUIgTBFIgVAGIAShFgAjEiJQgrA+AABLQAAAhAIAgIBMgYIBHkJQhFAagrA9gAg/jnIhHEJIA+gUIAricIAUgGIgqCbIEWhXQgahGg9gsQg/gthNAAQgfAAggAIg");
	this.shape_5.setTransform(508,406,2,2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#75221E").s().p("AhOA5QgFgGADgOQACgNAJgLQAJgLAMgCQAMgEAFAGQAGAGgDAOQgEAYgUALgAgzANQgKAEgDAQQgCAJADADQACACAEgBQAKgDADgQQADgOgHAAIgDAAgAhsA5QAEgGABgHQACgIgDgEQgCgCgEABQgKADgDAQIgBAHIgQAAIABgCQACgOAJgLQAJgKAMgEQAMgDAFAHQAGAGgDAOQgCALgFAGgAgVgJIARgFIACAhIAAAAIARgoIASgGIggBEIgRAGgAApgdIAjgLIgDAQIgTAGIgBAIIAPgGIgCAPIgQAEIgCAIIATgHIgEASIgkALgABcgtIAigKQAIgCAEADQAEAEgCAIQgCALgJAGQAGABgBAMIgBAMIgRAEIAAgIIAAgHQgBgEgEACIgIAAIgFAYIgSAFgABzgmIgIACIgDAMIAJgCQAIgDABgFQABgFgEAAIgEABg");
	this.shape_6.setTransform(525.5,407.9,2,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#75221E").s().p("AgnAIQgGgGACgMIAQAAQAAAIAIgCQAEgBAEgFIANAAQgIAQgQAEIgIABQgFAAgEgDgAASgKIAaAAIgIAEIgHABQgHAAgEgFg");
	this.shape_7.setTransform(506,421.5,2,2);

	this.instance_3 = new lib.ClipGroup_3_0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(506.7,404.2,2,2,0,0,0,55.5,55.5);

	this.instance_4 = new lib.ClipGroup_4_0();
	this.instance_4.parent = this;
	this.instance_4.setTransform(506.8,404.3,2,2,0,0,0,56.6,56.6);

	this.instance_5 = new lib.ClipGroup_5_0();
	this.instance_5.parent = this;
	this.instance_5.setTransform(506.7,404.2,2,2,0,0,0,59.2,59.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AoGHaIEAuzIMNAAIAAOzg");
	this.shape_8.setTransform(495.2,404.2,2,2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgOANIAGAAQAAAIAIAAQAJAAAAgJQABgLgKAAIAAAAIAAgCIAAAAQAJAAAAgKQAAgJgJAAQgHAAgBAJIgFAAQABgGAEgEQADgEAFAAQAGABAEAEQADADAAAGQABAJgHACQAIACAAAKQgBAGgEAEQgDADgHAAQgOABAAgNg");
	this.shape_9.setTransform(321.2,480.3,2.4,2.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgJAWQgDgEgBgFIAGAAQABAIAGAAQADAAADgCQADgDAAgIQAAgLgJAAQgFAAgCAEIgEAAIAAgZIAYAAIAAAEIgUAAIAAAQQAEgDAEAAQAFAAAEADQAEAEAAAIQAAAKgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_10.setTransform(312.6,480.3,2.4,2.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAFAZIAAgIIgTAAIAAgEIARglIAFAAIgRAlIAOAAIAAgOIAEAAIAAAOIAGAAIAAAEIgGAAIAAAIg");
	this.shape_11.setTransform(303.8,480.3,2.4,2.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIAVQgFgDAAgHIAAgWQAAgNANAAQANAAAAANIAAAWQAAAOgNAAQgFAAgDgEgAgHgKIAAAVQAAAKAHAAQAJAAAAgKIAAgVQAAgKgJAAQgHAAAAAKg");
	this.shape_12.setTransform(295,480.3,2.4,2.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgIAZIARgsIgRAAIAAAIIgFAAIAAgNIAbAAIAAAFIgQAsg");
	this.shape_13.setTransform(286.4,480.3,2.4,2.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgJAVQgEgDAAgHIAAgWQAAgNANAAQAGAAAEADQAEAEAAAGIAAAWQAAAHgEADQgEAEgGAAQgFAAgEgEgAgHgKIAAAVQAAAKAHAAQAJAAAAgKIAAgVQAAgKgJAAQgHAAAAAKg");
	this.shape_14.setTransform(277.4,480.3,2.4,2.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgJAVQgEgEAAgGQAAgGAEgFIAKgYIAGAAIgKAWIAEgBQAFAAAEADQAEAEAAAGQAAAHgEAEQgDAEgHAAQgGAAgDgEgAgIALQAAAKAIAAQAIAAAAgKQAAgKgIAAQgIAAAAAKg");
	this.shape_15.setTransform(268.7,480.3,2.4,2.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgGAZIAKgWIgEABQgGAAgDgEQgEgDAAgHQAAgOANAAQAOAAAAAOQAAAFgDAFIgMAZgAgIgKQAAAKAIAAQAJAAAAgKQAAgKgJABQgIgBAAAKg");
	this.shape_16.setTransform(259.9,480.3,2.4,2.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgIAZIAQgsIgQAAIAAAIIgFAAIAAgNIAbAAIAAAFIgRAsg");
	this.shape_17.setTransform(251.4,480.3,2.4,2.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgIAZIARgsIgRAAIAAAIIgFAAIAAgNIAbAAIAAAFIgQAsg");
	this.shape_18.setTransform(242.6,480.3,2.4,2.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAFAZIAAgIIgTAAIAAgEIARglIAFAAIgRAlIAOAAIAAgOIAEAAIAAAOIAGAAIAAAEIgGAAIAAAIg");
	this.shape_19.setTransform(233.6,480.3,2.4,2.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgJAVQgEgDAAgHIAAgWQAAgGAEgEQAEgDAFAAQAGAAAEADQAEAEAAAGIAAAWQAAAHgEADQgEAEgGAAQgFAAgEgEgAgIgKIAAAVQAAAKAIAAQAIAAAAgKIAAgVQAAgKgIAAQgIAAAAAKg");
	this.shape_20.setTransform(224.9,480.3,2.4,2.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AACAZIAAgrIgIAIIAAgGIAIgIIAFAAIAAAxg");
	this.shape_21.setTransform(215.5,480.3,2.4,2.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAMAZIAAgWIgXAAIAAAWIgFAAIAAgxIAFAAIAAAXIAXAAIAAgXIAFAAIAAAxg");
	this.shape_22.setTransform(201.6,480.3,2.4,2.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgQAZIAAgxIASAAQAHAAAEAEQAEAFAAAGQAAAGgEADQgFAFgGAAIgMAAIAAAUgAgKAAIALAAQALAAAAgJQAAgKgLAAIgLAAg");
	this.shape_23.setTransform(191,480.3,2.4,2.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgOAZIAAgxIAdAAIAAAFIgYAAIAAAsg");
	this.shape_24.setTransform(181.1,480.3,2.4,2.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgLAUQgGgFAAgPQAAgOAGgGQAEgEAHAAQAHAAAFAEQAGAGAAAOQAAAPgGAFQgGAFgGAAQgHAAgEgFgAgIgQQgDADAAANQAAAOADADQADADAFAAQAFAAAEgDQADgEAAgNQAAgMgDgEQgEgEgFAAQgFAAgDAEg");
	this.shape_25.setTransform(170.2,480.3,2.4,2.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgJAWQgDgEgBgFIAFAAQACAIAGAAQADAAADgCQADgDAAgIQAAgLgJAAQgFAAgCAEIgEAAIAAgZIAYAAIAAAEIgUAAIAAAQQAEgDAEAAQAFAAAEADQAEAEAAAIQAAAKgEAEQgFADgFAAQgFAAgEgDg");
	this.shape_26.setTransform(156.2,480.3,2.4,2.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AACAZIAAgrIgIAIIAAgGIAIgIIAFAAIAAAxg");
	this.shape_27.setTransform(146.8,480.3,2.4,2.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgJAVQgEgDAAgHIAAgWQAAgNANAAQAGAAAEADQAEAEAAAGIAAAWQAAAHgEADQgEAEgGAAQgFAAgEgEgAgIgKIAAAVQAAAKAIAAQAJAAAAgKIAAgVQAAgKgJAAQgIAAAAAKg");
	this.shape_28.setTransform(138.6,480.3,2.4,2.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgNAZIAAgEIATgYQADgEAAgEQAAgIgJAAQgIgBAAAJIgFAAQAAgFAEgEQAEgEAFAAQAOAAAAANQAAAFgEAFIgRAWIAVAAIAAAEg");
	this.shape_29.setTransform(129.9,480.3,2.4,2.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AACAZIAAgrIgIAIIAAgGIAIgIIAFAAIAAAxg");
	this.shape_30.setTransform(120.5,480.3,2.4,2.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgJAWQgEgEAAgFIAFAAQABAIAHAAQADAAADgCQACgDAAgIQAAgLgIAAQgGAAgBAEIgFAAIAAgZIAYAAIAAAEIgTAAIAAAQQADgDAFAAQAEAAAEADQAFAEAAAIQAAAKgEAEQgFADgFAAQgGAAgDgDg");
	this.shape_31.setTransform(112.4,480.3,2.4,2.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAFAZIAAgIIgUAAIAAgEIARglIAGAAIgRAlIAOAAIAAgOIAEAAIAAAOIAHAAIAAAEIgHAAIAAAIg");
	this.shape_32.setTransform(103.5,480.3,2.4,2.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgJAVQgEgDAAgHIAAgWQAAgGAEgEQAEgDAFAAQAGAAAEADQAEAEAAAGIAAAWQAAAHgEADQgEAEgGAAQgFAAgEgEgAgIgKIAAAVQAAAKAIAAQAIAAAAgKIAAgVQAAgKgIAAQgIAAAAAKg");
	this.shape_33.setTransform(94.8,480.3,2.4,2.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgIAZIAQgsIgQAAIAAAIIgFAAIAAgNIAbAAIAAAFIgQAsg");
	this.shape_34.setTransform(86.2,480.3,2.4,2.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgIAZIARgsIgRAAIAAAIIgFAAIAAgNIAbAAIAAAFIgQAsg");
	this.shape_35.setTransform(77.4,480.3,2.4,2.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAMAZIAAgWIgXAAIAAAWIgFAAIAAgxIAFAAIAAAXIAXAAIAAgXIAFAAIAAAxg");
	this.shape_36.setTransform(62.8,480.3,2.4,2.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAMAZIAAgWIgXAAIAAAWIgFAAIAAgxIAFAAIAAAXIAXAAIAAgXIAFAAIAAAxg");
	this.shape_37.setTransform(51.1,480.3,2.4,2.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AANAZIAAgnIgZAnIgFAAIAAgxIAGAAIAAAoIAYgoIAFAAIAAAxg");
	this.shape_38.setTransform(39.2,480.3,2.4,2.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgJAVQgFgEAAgGQAAgIAIgDQgHgDAAgIQAAgGAEgEQAEgDAFAAQAGAAAEADQAEAEAAAGQAAAIgHADQAIADAAAIQAAAGgEAEQgFAEgGAAQgFAAgEgEgAgJALQAAAEADADQADADADAAQAKAAAAgKQAAgKgKAAQgJAAAAAKgAgIgLQAAAJAIAAQAJAAAAgJQAAgJgJAAQgIAAAAAJg");
	this.shape_39.setTransform(323,463.5,2.4,2.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgCADIAAgFIAFAAIAAAFg");
	this.shape_40.setTransform(312.2,468.7,2.4,2.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AANAWIAAgKIgZAAIAAAKIgFAAIAAgOIAEAAQAFgJAAgOIAAgHIAVAAIAAAeIAFAAIAAAOgAgDgKQAAAKgEAIIAOAAIAAgZIgKAAg");
	this.shape_41.setTransform(305.1,466.6,2.4,2.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgCgHIAFAAIAAAKIgFAFg");
	this.shape_42.setTransform(294.2,470,2.4,2.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAJAZIAAgaIgRAaIgFAAIAAgiIAFAAIAAAaIARgaIAFAAIAAAigAgJgYIAEAAQAAAGAFAAQAFAAABgGIAEAAQAAAJgKAAQgJAAAAgJg");
	this.shape_43.setTransform(287.1,463.5,2.4,2.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgJACIAAgDIASAAIAAADg");
	this.shape_44.setTransform(278.7,465,2.4,2.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgNAZIAAgEIATgZQADgDAAgEQAAgJgJAAQgIABAAAIIgFAAQAAgFAEgEQAEgEAFAAQAOAAAAANQAAAFgEAFIgRAWIAVAAIAAAEg");
	this.shape_45.setTransform(270.8,463.5,2.4,2.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAJAZIAAgaIgRAaIgFAAIAAgiIAFAAIAAAaIARgaIAFAAIAAAigAgKgYIAFAAQAAAGAFAAQAFAAAAgGIAFAAQAAAJgKAAQgJAAgBgJg");
	this.shape_46.setTransform(257.3,463.5,2.4,2.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAJARIAAgZIgRAZIgFAAIAAghIAFAAIAAAZIARgZIAFAAIAAAhg");
	this.shape_47.setTransform(247.6,465.3,2.4,2.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAIARIgQgRIAPgQIAFAAIgOAQIAQARgAgNARIAAghIAFAAIAAAQIAAARg");
	this.shape_48.setTransform(239.3,465.3,2.4,2.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgMAAQAAgRAOAAIAGABIAFAFIgDADIgEgDIgEgBQgJAAAAAMQAAANAJAAIAEAAIAEgEIADAEIgFAEIgGABQgOAAAAgSg");
	this.shape_49.setTransform(230.4,465.3,2.4,2.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAIARIAAgPIgQAAIAAAPIgEAAIAAghIAEAAIAAAOIAQAAIAAgOIAGAAIAAAhg");
	this.shape_50.setTransform(221.4,465.3,2.4,2.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAJARIAAgZIgRAZIgFAAIAAghIAFAAIAAAZIARgZIAFAAIAAAhg");
	this.shape_51.setTransform(211.9,465.3,2.4,2.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAUAWIAAgKIgrAAIAAgiIAFAAIAAAeIAOAAIAAgeIAEAAIAAAeIAOAAIAAgeIAFAAIAAAeIAFAAIAAAOg");
	this.shape_52.setTransform(200.6,466.6,2.4,2.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgJAOQgEgFAAgJQAAgIAEgFQADgEAGAAQAGAAAEAEQAEAFAAAIQAAAJgEAFQgEAEgGAAQgGAAgDgEgAgFgKQgDADAAAHQAAAIADADQACACADAAQAEAAACgCQADgDAAgIQAAgHgDgDQgCgCgEAAQgDAAgCACg");
	this.shape_53.setTransform(188.9,465.3,2.4,2.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgQAZIAAgxIASAAQAHAAAEAEQAEAEAAAHQAAAGgEAEQgEAEgHAAIgNAAIAAAUgAgLAAIAMAAQALAAAAgJQAAgKgLAAIgMAAg");
	this.shape_54.setTransform(179.8,463.5,2.4,2.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AANAWIAAgKIgZAAIAAAKIgFAAIAAgOIAEAAQAFgIAAgPIAAgHIAVAAIAAAeIAFAAIAAAOgAgDgKQAAAKgEAIIAPAAIAAgZIgLAAg");
	this.shape_55.setTransform(165,466.6,2.4,2.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgNANIADgEQAFAEAFAAQAJAAAAgGQgBgFgGAAIgFAAIAAgEIAFAAQAGAAAAgFQAAgFgIAAQgEAAgEADIgDgEQAFgEAHAAQAMAAAAAKQAAAGgGABQAHACgBAGQAAAEgDADQgEADgFAAQgIAAgGgFg");
	this.shape_56.setTransform(156.3,465.3,2.4,2.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgNAAQAAgRANAAQAOAAAAARIAAABIgWAAQAAAMAJAAQAFAAAEgEIAEADQgGAGgHAAQgOAAAAgSgAgHgHIgBAGIARAAIgBgGQgCgFgGAAQgFAAgCAFg");
	this.shape_57.setTransform(148.2,465.3,2.4,2.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgJAOQgEgEAAgKQAAgJAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAJQAAAKgEAEQgEAEgGAAQgFAAgEgEgAgFgKQgDADAAAHQAAAIADADQADACACAAQADAAADgCQADgDAAgIQAAgHgDgDQgDgCgDAAQgCAAgDACg");
	this.shape_58.setTransform(139.4,465.3,2.4,2.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgNAZIAAgxIAFAAIAAAEQAEgEAFAAQAFAAADADQAFAEAAALQAAAJgFAEQgCADgGAAQgFAAgEgEIAAATgAgIgGQAAAMAIAAQAJAAAAgMQAAgOgJAAQgIAAAAAOg");
	this.shape_59.setTransform(130.5,467.1,2.4,2.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAMAZIAAgsIgXAAIAAAsIgFAAIAAgxIAhAAIAAAxg");
	this.shape_60.setTransform(119.9,463.5,2.4,2.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgCgHIAFAAIAAAKIgFAFg");
	this.shape_61.setTransform(107.6,470,2.4,2.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgKAPQgDgDAAgEQAAgJAMAAIAKAAIAAgEQAAgHgJAAQgFAAgDAEIgDgDQAEgGAHAAQAOAAAAAMIAAAWIgFAAIAAgDQgEAEgFAAQgHAAgDgDgAgIAIQAAAFAIAAQAFAAACgCQACgCAAgEIAAgEIgJAAQgIAAAAAHg");
	this.shape_62.setTransform(100.7,465.3,2.4,2.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgMARIAAghIAPAAQAKAAAAAJQAAAGgGABQAGACAAAGQAAAJgKAAgAgHANIAJAAQAGAAAAgGQAAgFgGAAIgJAAgAgHgCIAJAAQAGAAAAgFQAAgFgGAAIgJAAg");
	this.shape_63.setTransform(92.3,465.3,2.4,2.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAHARIgPgRIAPgQIAGAAIgPAQIAQARgAgNARIAAghIAFAAIAAAQIAAARg");
	this.shape_64.setTransform(84,465.3,2.4,2.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgMAAQAAgRAOAAIAGABQADABACAEIgDADIgEgDIgEgBQgJAAAAAMQAAANAJAAIAEAAIAEgEIADAEIgFAEIgGABQgOAAAAgSg");
	this.shape_65.setTransform(75.1,465.3,2.4,2.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgJAOQgEgFAAgJQAAgIAEgFQAEgEAFAAQAGAAAEAEQAEAEAAAJQAAAKgEAEQgEAEgGAAQgFAAgEgEgAgFgKQgDADAAAHQAAAIADADQADACACAAQAEAAACgCQADgDAAgIQAAgHgDgDQgCgCgEAAQgCAAgDACg");
	this.shape_66.setTransform(66.4,465.3,2.4,2.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AAQAZIAAglIgNAdIgEAAIgOgdIAAAlIgFAAIAAgxIAFAAIAPAjIAQgjIAGAAIAAAxg");
	this.shape_67.setTransform(55.1,463.5,2.4,2.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgCADIAAgFIAFAAIAAAFg");
	this.shape_68.setTransform(41.9,468.7,2.4,2.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgKARIAAghIAVAAIAAAEIgQAAIAAAdg");
	this.shape_69.setTransform(37.4,465.3,2.4,2.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgCgHIAFAAIAAAKIgFAFg");
	this.shape_70.setTransform(253.8,453.2,2.4,2.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgGAZIAKgWIgEAAQgGAAgDgDQgEgEAAgFQAAgHAEgEQAEgEAFAAQAOAAAAAOQAAAFgDAGIgLAYgAgIgJQAAAJAIAAQAJAAAAgJQAAgLgJAAQgIAAAAALg");
	this.shape_71.setTransform(247.2,446.7,2.4,2.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AACAZIAAgrIgIAIIAAgGIAIgIIAFAAIAAAxg");
	this.shape_72.setTransform(237.9,446.7,2.4,2.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AAEAZIAAgIIgSAAIAAgFIARgkIAFAAIgRAkIANAAIAAgMIAFAAIAAAMIAGAAIAAAFIgGAAIAAAIg");
	this.shape_73.setTransform(229.7,446.7,2.4,2.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgJAWQgEgFAAgEIAFAAQABAIAHAAQADAAADgCQADgEAAgHQAAgLgJAAQgGAAgBAEIgFAAIAAgZIAZAAIAAAEIgUAAIAAAQQADgDAFAAQAFAAAEADQAEAEAAAIQAAAKgEAEQgFADgFAAQgGAAgDgDg");
	this.shape_74.setTransform(221,446.7,2.4,2.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AACAZIAAgrIgIAIIAAgGIAIgIIAFAAIAAAxg");
	this.shape_75.setTransform(211.5,446.7,2.4,2.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AACAZIAAgrIgIAIIAAgGIAIgIIAFAAIAAAxg");
	this.shape_76.setTransform(202.8,446.7,2.4,2.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AABAJIAIgJIgIgHIAAgHIAOAOIgOAPgAgOAJIAIgJIgIgHIAAgHIAOAOIgOAPg");
	this.shape_77.setTransform(190.4,448.2,2.4,2.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgCADIAAgFIAFAAIAAAFg");
	this.shape_78.setTransform(183.2,451.9,2.4,2.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgOAZIAAgxIAdAAIAAAFIgXAAIAAAsg");
	this.shape_79.setTransform(176.8,446.7,2.4,2.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgCADIAAgFIAFAAIAAAFg");
	this.shape_80.setTransform(169.1,451.9,2.4,2.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AAMAZIAAgWIgXAAIAAAWIgFAAIAAgxIAFAAIAAAWIAXAAIAAgWIAFAAIAAAxg");
	this.shape_81.setTransform(161,446.7,2.4,2.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgCADIAAgFIAFAAIAAAFg");
	this.shape_82.setTransform(152.9,451.9,2.4,2.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgLAUQgGgFAAgPQAAgOAGgGQAEgEAHAAQAPAAACAOIgFAAQgDgKgJAAQgEAAgEAEQgDAEAAAMQAAANADAEQAEADAEAAQAJAAADgKIAFAAQgCAPgPAAQgHAAgEgFg");
	this.shape_83.setTransform(145.4,446.7,2.4,2.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AANAZIAAgnIgZAnIgFAAIAAgxIAGAAIAAAoIAYgoIAFAAIAAAxg");
	this.shape_84.setTransform(129.7,446.7,2.4,2.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAQAfIAAgMIggAAIAAAMIgFAAIAAgQIAEAAQAHgKgBgSIAAgRIAbAAIAAAtIAGAAIAAAQgAgFgKQgBAQgFAJIAVAAIAAgoIgPAAg");
	this.shape_85.setTransform(117.8,448.1,2.4,2.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AAMAZIAAgWIgXAAIAAAWIgFAAIAAgxIAFAAIAAAWIAXAAIAAgWIAFAAIAAAxg");
	this.shape_86.setTransform(106.2,446.7,2.4,2.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AAPAZIgEgLIgVAAIgEALIgGAAIASgxIAEAAIATAxgAgJAJIASAAIgJgZg");
	this.shape_87.setTransform(95.3,446.7,2.4,2.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AALAZIgWgZIAUgYIAHAAIgVAYIAXAZgAgRAZIAAgxIAGAAIAAAYIAAAZgAgLAAg");
	this.shape_88.setTransform(85.5,446.7,2.4,2.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AABAAIAOgOIAAAHIgIAHIAIAJIAAAGgAgOAAIAOgOIAAAHIgIAHIAIAJIAAAGg");
	this.shape_89.setTransform(74.5,448.2,2.4,2.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgLAUQgFgFgBgPQABgOAFgGQAEgEAHAAQAIAAAFAEQAEAGAAAOQAAAPgEAFQgGAFgHAAQgHAAgEgFgAgIgQQgDADAAANQAAAOADADQAEADAEAAQAFAAADgDQAEgDAAgOQAAgNgEgDQgDgEgFAAQgEAAgEAEg");
	this.shape_90.setTransform(60.5,446.7,2.4,2.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgMAUQgEgFAAgPQAAgOAEgGQAFgEAHAAQAIAAAEAEQAFAGABAOQgBAPgFAFQgEAFgIAAQgGAAgGgFgAgHgQQgEADAAANQAAAOAEADQADADAEAAQAFAAAEgDQADgDAAgOQAAgNgDgDQgEgEgFAAQgEAAgDAEg");
	this.shape_91.setTransform(49.6,446.7,2.4,2.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgLAUQgGgFAAgPQAAgOAGgGQAEgEAHAAQAIAAAFAEQAEAGAAAOQAAAPgEAFQgGAFgHAAQgHAAgEgFgAgIgQQgDADAAANQAAAOADADQADADAFAAQAFAAADgDQAEgEAAgNQAAgMgEgEQgDgEgFAAQgFAAgDAEg");
	this.shape_92.setTransform(38.7,446.7,2.4,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_1}]}).wait(237));

	// t4
	this.instance_6 = new lib.t4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(421,132.1,2,2,0,0,0,54.5,19.4);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(171).to({_off:false},0).to({x:401,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:381,alpha:0},8,cjs.Ease.get(1)).wait(1));

	// t3
	this.instance_7 = new lib.t3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(493.4,132.1,2,2,0,0,0,80.8,19.4);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(114).to({_off:false},0).to({x:473.4,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:453.4,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(57));

	// t2
	this.instance_8 = new lib.t2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(409.4,128.3,2,2,0,0,0,85.3,17.6);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(57).to({_off:false},0).to({x:389.4,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:369.4,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(114));

	// t1
	this.instance_9 = new lib.t1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(437.7,150.1,2,2,0,0,0,71,28.4);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:417.7,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:397.7,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(171));

	// 4.jpg
	this.instance_10 = new lib.p4();
	this.instance_10.parent = this;
	this.instance_10.setTransform(160,105,1,1,0,0,0,150,125);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(171).to({_off:false},0).to({x:150,y:125,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:140,y:145,alpha:0},8,cjs.Ease.get(1)).wait(1));

	// 3.jpg
	this.instance_11 = new lib.p3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(160,105,1,1,0,0,0,150,125);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(114).to({_off:false},0).to({x:150,y:125,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:140,y:145,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(57));

	// 2.jpg
	this.instance_12 = new lib.p2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(160,105,1,1,0,0,0,150,125);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(57).to({_off:false},0).to({x:150,y:125,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:140,y:145,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(114));

	// 1.jpg
	this.instance_13 = new lib.p1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(160,105,1,1,0,0,0,150,125);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({x:150,y:125,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:140,y:145,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(171));

	// Слой 8
	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("Egu3AnEMAAAhOHMBdvAAAMAAABOHg");
	this.shape_93.setTransform(300,250);

	this.timeline.addTween(cjs.Tween.get(this.shape_93).wait(237));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(299.5,230,625.6,542.6);
// library properties:
lib.properties = {
	width: 600,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/600x500_atlas_.jpg", id:"600x500_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;