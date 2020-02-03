(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"160x600_atlas_", frames: [[0,0,300,290],[302,0,300,290],[302,292,300,290],[604,0,300,290],[0,292,300,290]]}
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
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
	this.spriteSheet = ss["160x600_atlas_"];
	this.gotoAndStop(4);
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


(lib.t5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAmA3IAAhRIgeBRIgQAAIgdhRIAABRIgVAAIAAhtIAcAAIAeBTIAfhTIAcAAIAABtg");
	this.shape.setTransform(67.2,22.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdA3IAAhtIA7AAIAAATIgmAAIAAAaIAkAAIAAATIgkAAIAAAaIAmAAIAAATg");
	this.shape_1.setTransform(56.5,22.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAZA3IAAhNIgxBNIgVAAIAAhtIAVAAIAABMIAxhMIAUAAIAABtg");
	this.shape_2.setTransform(47,22.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgjA3IAAhtIAbAAIAGAAIAJACQAGABAFADQAFADADAFQADAGAAAIQAAAHgCAFQgDAEgDADIgEADQAJADAFAGQAFAIAAAJQAAAIgEAHQgDAJgKAFQgKAEgQAAgAgOAkIANAAIADAAIAGgCQADgCACgDQACgCAAgGQABgCgCgDQgBgDgDgDQgEgDgHAAIgNAAgAgOgMIAJAAQAGAAADgCQADgDABgCIABgEQgBgGgCgCQgDgCgDgBIgFgBIgJAAg");
	this.shape_3.setTransform(37.3,22.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJA3IAAhaIgVAAIAAgTIA9AAIAAATIgVAAIAABag");
	this.shape_4.setTransform(29.6,22.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgVA0QgLgFgHgJQgIgIgDgKQgEgLAAgJQAAgJAEgKQADgKAIgIQAHgJALgFQALgGANAAQAMAAAKAEQAKAEAHAIQAIAHAFALIgYAAQgCgEgEgDQgEgDgGgCQgFgCgHAAQgKAAgIAGQgJAFgEAIQgFAJAAAJQAAAKAFAJQAFAJAIAFQAJAFAKAAQAHAAAHgDQAHgDAFgHIAYAAQgEAKgIAHQgHAIgKAEQgKAEgMAAQgOAAgKgGg");
	this.shape_5.setTransform(20.7,22.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgkA3IAAhtIAVAAIAAAqIAPAAQAOABAIAEQAIAFADAHQAEAIAAAIQAAALgFAHQgFAIgHAEQgJAEgLAAgAgPAkIAQAAQAGgBAFgDQAFgEgBgHQABgGgFgEQgFgEgGAAIgQAAg");
	this.shape_6.setTransform(10.8,22.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAfA3IgfhRIgdBRIgXAAIAshtIARAAIAsBtg");
	this.shape_7.setTransform(0.7,22.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdAyQgNgHgIgNQgHgNgBgRQABgPAHgNQAIgNANgIQANgIAQAAQARAAANAIQANAIAHANQAIANAAAPQAAARgIANQgHANgNAHQgNAIgRAAQgQAAgNgIgAgSggQgJAFgFAJQgFAIAAAKQAAAKAFAJQAFAJAJAFQAIAFAKAAQALAAAIgFQAJgFAFgJQAFgJAAgKQAAgKgFgIQgFgJgJgFQgIgFgLAAQgKAAgIAFg");
	this.shape_8.setTransform(-10.9,22.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgjA3IAAhtIAbAAIAGAAIAJACQAGABAFADQAFADADAFQADAGAAAIQAAAHgCAFQgDAEgDADIgEADQAJADAFAGQAFAIAAAJQAAAIgEAHQgDAJgKAFQgKAEgQAAgAgOAkIANAAIADAAIAGgCQADgCACgDQACgCAAgGQABgCgCgDQgBgDgDgDQgEgDgHAAIgNAAgAgOgMIAJAAQAGAAADgCQADgDABgCIABgEQgBgGgCgCQgDgCgDgBIgFgBIgJAAg");
	this.shape_9.setTransform(-21.3,22.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgdAyQgNgHgIgNQgHgNgBgRQABgPAHgNQAIgNANgIQANgIAQAAQARAAANAIQANAIAHANQAJANgBAPQABARgJANQgHANgNAHQgOAIgQAAQgPAAgOgIgAgSggQgJAFgFAJQgFAIAAAKQAAAKAFAJQAFAJAJAFQAIAFAKAAQALAAAJgFQAIgFAFgJQAFgJAAgKQAAgKgFgIQgFgJgIgFQgJgFgLAAQgKAAgIAFg");
	this.shape_10.setTransform(-32.2,22.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAoBCIAAgVIhPAAIAAAVIgUAAIAAgpIAKAAIAphaIARAAIApBaIAKAAIAAApgAAbAZIgbg+IgbA+IA2AAg");
	this.shape_11.setTransform(-44.6,23.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgUA3IAMgcIgqhRIAYAAIAdA5IAZg5IAXAAIgyBtg");
	this.shape_12.setTransform(-53.7,22.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVA0QgLgFgHgJQgIgIgDgKQgEgLAAgJQAAgJAEgKQADgKAIgIQAHgJALgFQALgGANAAQAMAAAKAEQAKAEAHAIQAIAHAFALIgYAAQgCgEgEgDQgEgDgGgCQgFgCgHAAQgKAAgIAGQgJAFgEAIQgFAJAAAJQAAAKAFAJQAFAJAIAFQAJAFAKAAQAHAAAHgDQAHgDAFgHIAYAAQgEAKgIAHQgHAIgKAEQgKAEgMAAQgOAAgKgGg");
	this.shape_13.setTransform(-68.2,22.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgdA3IAAhuIA7AAIAAAUIgmAAIAAAaIAkAAIAAATIgkAAIAAAZIAmAAIAAAUg");
	this.shape_14.setTransform(27.1,0.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgkA3IAAhuIAVAAIAAArIAPAAQAOAAAIAFQAIAGAEAGQADAIAAAJQAAAJgFAJQgEAHgJAEQgIAFgLgBgAgPAjIAPAAQAIABAEgEQAEgEAAgGQAAgIgEgDQgEgEgIAAIgPAAg");
	this.shape_15.setTransform(19.2,0.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAmA3IAAhSIgeBSIgQAAIgdhSIAABSIgVAAIAAhuIAcAAIAeBVIAfhVIAcAAIAABug");
	this.shape_16.setTransform(7.6,0.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgdA3IAAhuIA7AAIAAAUIgmAAIAAAaIAkAAIAAATIgkAAIAAAZIAmAAIAAAUg");
	this.shape_17.setTransform(-3.2,0.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgVA0QgLgFgHgJQgIgIgDgKQgEgLAAgJQAAgJAEgKQADgKAIgIQAHgJALgFQALgGANAAQAMAAAKAEQAKAEAHAIQAIAHAFALIgYAAQgCgEgEgDQgEgDgGgCQgFgCgHAAQgKAAgIAGQgJAFgEAIQgFAJAAAJQAAAKAFAJQAFAJAIAFQAJAFAKAAQAHAAAHgDQAHgDAFgHIAYAAQgEAKgIAHQgHAIgKAEQgKAEgMAAQgOAAgKgGg");
	this.shape_18.setTransform(-12.9,0.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgjA3IAAhuIAbAAIAGAAIAJACQAGACAFADQAFADADAGQADAFAAAIQAAAIgCAEQgDAEgDADIgEADQAJADAFAGQAFAIAAAJQAAAIgEAHQgDAJgKAFQgKAEgQAAgAgOAjIANAAIADAAIAGgCQADAAACgDQACgEAAgEQABgCgCgEQgBgEgDgCQgEgCgHgBIgNAAgAgOgMIAJAAQAGAAADgCQADgCABgDIABgEQgBgGgCgCQgDgCgDgBIgFgBIgJAAg");
	this.shape_19.setTransform(-26.4,0.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgdA4IAAhvIA7AAIAAAVIgmAAIAAAZIAkAAIAAATIgkAAIAAAaIAmAAIAAAUg");
	this.shape_20.setTransform(30.3,-21.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgJA4IAAhaIgVAAIAAgVIA9AAIAAAVIgVAAIAABag");
	this.shape_21.setTransform(23.3,-21.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgkA4IAAhvIAVAAIAAArIAPAAQAOAAAIAGQAIAEAEAHQADAIAAAIQAAAKgFAIQgEAIgJAEQgIAEgLABgAgPAkIAQAAQAGAAAFgEQAFgEAAgHQAAgGgFgEQgFgEgGAAIgQAAg");
	this.shape_22.setTransform(16.5,-21.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgjA4IAAhvIAbAAIAGAAIAJADQAGABAFADQAFADADAFQADAGAAAJQAAAGgCAFQgDAFgDACIgEADQAJADAFAGQAFAHAAAKQAAAIgEAIQgDAHgKAFQgKAGgQAAgAgOAkIANAAIADAAIAGgDQADgBACgCQACgEAAgFQABgCgCgDQgBgEgDgCQgEgCgHgBIgNAAgAgOgMIAJAAQAGAAADgCQADgDABgCIABgEQgBgFgCgDQgDgDgDAAIgFAAIgJAAg");
	this.shape_23.setTransform(7.7,-21.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgdAyQgNgHgHgNQgJgNAAgRQAAgPAJgNQAHgNANgIQANgIAQAAQARAAANAIQANAIAHANQAJANAAAPQAAARgJANQgHANgNAHQgOAIgQAAQgPAAgOgIgAgTggQgIAFgFAJQgFAIAAAKQAAAKAFAJQAFAJAIAFQAJAFAKAAQALAAAJgFQAIgFAFgJQAFgJAAgKQAAgKgFgIQgFgJgIgFQgJgFgLAAQgKAAgJAFg");
	this.shape_24.setTransform(-3.1,-21.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgJA4IAAhaIgVAAIAAgVIA9AAIAAAVIgVAAIAABag");
	this.shape_25.setTransform(-12.2,-21.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgdAyQgNgHgIgNQgHgNgBgRQABgPAHgNQAIgNANgIQANgIAQAAQARAAANAIQANAIAHANQAIANAAAPQAAARgIANQgHANgNAHQgNAIgRAAQgQAAgNgIgAgSggQgJAFgFAJQgFAIAAAKQAAAKAFAJQAFAJAJAFQAIAFAKAAQALAAAIgFQAJgFAFgJQAFgJAAgKQAAgKgFgIQgFgJgJgFQgIgFgLAAQgKAAgIAFg");
	this.shape_26.setTransform(-21.3,-21.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgbA4IAAhvIA3AAIAAAVIgiAAIAABag");
	this.shape_27.setTransform(-30.4,-21.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t5, new cjs.Rectangle(-94.2,-33.1,188.4,66.4), null);


(lib.t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAWA7IAAgxIgrAAIAAAxIgVAAIAAh1IAVAAIAAAvIArAAIAAgvIAVAAIAAB1g");
	this.shape.setTransform(28.8,11.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAaBJIAAhSIgzBSIgWAAIAAh1IAWAAIAABSIAzhSIAWAAIAAB1gAgNg2QgGgCgEgFQgEgGgBgFIATAAQAAADADADQADACADAAQAEAAADgCQADgDAAgDIATAAQgBAFgEAGQgEAFgGACQgGADgIAAQgHAAgGgDg");
	this.shape_1.setTransform(17.4,10.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAiA7IgMgeIgrAAIgMAeIgYAAIAxh1IARAAIAxB1gAANAHIgNghIgMAhIAZAAg");
	this.shape_2.setTransform(5.6,11.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUA5QgJgFgGgJQgFgIABgMIAWAAIABAHQACAEAEADQAEADAGAAQAHAAAEgCQAEgDABgDQACgDAAgEIgBgIQgCgEgEgCQgDgCgGAAIgLAAIAAgVIAJAAQAHAAAEgDQADgEAAgGQAAgHgDgDQgEgEgHAAQgFAAgEADQgEADAAAGIgWAAIAAgBQAAgJAEgHQAEgHAIgFQAIgEAMAAQAKAAAIAEQAIAEAFAHQAEAHAAAKQAAAJgFAHQgEAHgIADQAGABAEADQAFAEADAGQADAGAAAIQAAALgFAIQgFAIgKAEQgJAEgLAAQgLAAgJgEg");
	this.shape_3.setTransform(-4.8,11.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAaA7IAAhSIgzBSIgWAAIAAh1IAWAAIAABSIAzhSIAWAAIAAB1g");
	this.shape_4.setTransform(-15.2,11.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AArBGIAAgWIhVAAIAAAWIgVAAIAAgrIALAAIAshgIASAAIAsBgIALAAIAAArgAAdAbIgchCIgdBCIA5AAg");
	this.shape_5.setTransform(-27.7,13);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAaBKIAAhSIgzBSIgWAAIAAh2IAWAAIAABTIAzhTIAWAAIAAB2gAgNg1QgGgDgEgFQgEgFgBgHIATAAQAAAFADABQADACADAAQAEAAADgCQADgBAAgFIATAAQgBAHgEAFQgEAFgGADQgGADgIAAQgHAAgGgDg");
	this.shape_6.setTransform(62.6,-12.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAiA7IAAh1IAWAAIAAB1gAg3A7IAAh1IAWAAIAAAtIARAAQAPABAHAFQAJAFAEAIQADAIAAAJQAAALgFAIQgFAIgIAFQgIAEgMAAgAghAmIARAAQAIAAAFgEQADgEAAgHQAAgHgDgEQgFgEgIAAIgRAAg");
	this.shape_7.setTransform(49.9,-11.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAVA7IAAgxIgpAAIAAAxIgXAAIAAh1IAXAAIAAAvIApAAIAAgvIAXAAIAAB1g");
	this.shape_8.setTransform(37.8,-11.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AArBHIAAgXIhUAAIAAAXIgXAAIAAgsIAMAAIAshhIASAAIAsBhIALAAIAAAsgAAeAbIgdhCIgdBCIA6AAg");
	this.shape_9.setTransform(25.8,-10.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfA1QgOgIgIgOQgIgNAAgSQAAgQAIgOQAIgOAOgIQAOgJARAAQASAAAOAJQAOAIAIAOQAIAOAAAQQAAASgIANQgIAOgOAIQgOAIgSABQgRgBgOgIgAgUgiQgJAFgFAJQgFAKgBAKQABALAFAJQAFAJAJAGQAJAFALAAQAMAAAJgFQAJgGAFgJQAFgJAAgLQAAgKgFgKQgFgJgJgFQgJgFgMgBQgLABgJAFg");
	this.shape_10.setTransform(12.5,-11.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAcA7IgcgpIgbApIgZAAIAog7Igog6IAZAAIAbApIAcgpIAaAAIgqA6IAqA7g");
	this.shape_11.setTransform(0.3,-11.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgXA4QgMgGgHgJQgIgJgEgLQgDgLAAgKQAAgKADgKQAEgLAIgJQAHgJAMgGQAMgGAOAAQANAAAKAFQALAEAIAIQAIAIAFALIgZAAIgHgHQgEgDgGgCQgFgCgHgBQgLABgJAFQgJAGgFAJQgFAJgBAKQABALAFAJQAFAJAJAGQAJAFALAAQAIAAAHgDQAIgDAFgHIAaAAQgFAKgIAIQgIAIgKAEQgLAFgNAAQgOgBgMgFg");
	this.shape_12.setTransform(-11.3,-11.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgfA1QgOgIgIgOQgIgNAAgSQAAgQAIgOQAIgOAOgIQAOgJARAAQASAAAOAJQAOAIAIAOQAIAOAAAQQAAASgIANQgIAOgOAIQgOAIgSABQgRgBgOgIgAgUgiQgJAFgFAJQgFAKgBAKQABALAFAJQAFAJAJAGQAJAFALAAQAMAAAJgFQAJgGAFgJQAFgJAAgLQAAgKgFgKQgFgJgJgFQgJgFgMgBQgLABgJAFg");
	this.shape_13.setTransform(-24.4,-11.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AglA7IAAh1IAcAAIAHAAIAKACQAFABAGAEQAFADAEAGQADAGAAAJQAAAHgCAFQgDAFgDACIgFAEQAKADAFAHQAFAHAAAKQABAJgEAIQgEAIgLAGQgKAFgSAAgAgPAmIAOAAIADAAIAGgCQAEgBACgDQACgDABgGIgBgGQgCgDgEgDQgEgDgHAAIgOAAgAgPgNIAKAAQAGAAADgCQAEgCAAgDIABgFQAAgFgDgDQgCgDgEAAIgFgBIgKAAg");
	this.shape_14.setTransform(-35.5,-11.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgfA7IAAh1IA/AAIAAAVIgpAAIAAAbIAnAAIAAAVIgnAAIAAAbIApAAIAAAVg");
	this.shape_15.setTransform(-44.4,-11.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AglA7IAAh1IAhAAQANAAAJAEQAIAEAFAGQAEAGABAGIACALQAAAFgCAHQgCAGgFAFQgEAFgJAEQgIADgMAAIgLAAIAAAtgAgPgGIANAAIAGgBQAFgBADgDQAEgDAAgHQAAgIgEgDQgDgDgFgBIgGgBIgNAAg");
	this.shape_16.setTransform(-52.8,-11.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAWA7IAAhgIgrAAIAABgIgVAAIAAh1IBVAAIAAB1g");
	this.shape_17.setTransform(-63.1,-11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4, new cjs.Rectangle(-70.6,-23.2,141.2,46.5), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AASA7IAAguIgfAuIgaAAIAhgrQgJgCgHgEQgHgFgFgGQgEgIAAgLIABgKQACgHAFgGQAEgHAJgEQAJgEAOAAIAiAAIAAB1gAgHgiQgFACgCAEQgCAEAAAFQAAAEACAEQACAEAFADQAEACAIAAIANAAIAAgjIgNAAQgIAAgEADg");
	this.shape.setTransform(31.8,11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAaA7IAAhSIgzBSIgWAAIAAh1IAWAAIAABSIAzhSIAWAAIAAB1g");
	this.shape_1.setTransform(21.4,11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAVA7IAAgxIgqAAIAAAxIgVAAIAAh1IAVAAIAAAvIAqAAIAAgvIAWAAIAAB1g");
	this.shape_2.setTransform(10,11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfA7IAAh1IA/AAIAAAVIgpAAIAAAbIAnAAIAAAVIgnAAIAAAbIApAAIAAAVg");
	this.shape_3.setTransform(0.5,11.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhEA7IAAh1IAWAAIAABgIAkAAIAAhgIAVAAIAABgIAkAAIAAhgIAWAAIAAB1g");
	this.shape_4.setTransform(-11.7,11.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfA7IAAh1IA/AAIAAAVIgpAAIAAAbIAnAAIAAAVIgnAAIAAAbIApAAIAAAVg");
	this.shape_5.setTransform(-23.8,11.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AglA7IAAh1IAhAAQANAAAJAEQAIAEAFAGQAEAGABAGIACALQAAAFgCAHQgCAGgFAFQgEAFgJAEQgIADgMAAIgLAAIAAAtgAgPgGIANAAIAGgBQAFgBADgDQAEgDAAgHQAAgIgEgDQgDgDgFgBIgGgBIgNAAg");
	this.shape_6.setTransform(-32.1,11.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgfA7IAAh1IA/AAIAAAVIgpAAIAAAbIAnAAIAAAVIgnAAIAAAbIApAAIAAAVg");
	this.shape_7.setTransform(25.2,-11.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAiA7IAAh1IAWAAIAAB1gAg3A7IAAh1IAWAAIAAAtIARAAQAPABAHAFQAJAFAEAIQADAIAAAJQAAALgFAIQgFAIgIAFQgIAEgMAAgAghAmIARAAQAIAAAFgEQADgEAAgHQAAgHgDgEQgFgEgIAAIgRAAg");
	this.shape_8.setTransform(14.2,-11.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAWA7IAAgxIgqAAIAAAxIgXAAIAAh1IAXAAIAAAvIAqAAIAAgvIAVAAIAAB1g");
	this.shape_9.setTransform(2.1,-11.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AApA7IAAhXIggBXIgRAAIgghXIAABXIgWAAIAAh1IAeAAIAgBZIAhhZIAeAAIAAB1g");
	this.shape_10.setTransform(-10.7,-11.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgWA7IAOgeIguhXIAbAAIAeA+IAcg+IAXAAIg1B1g");
	this.shape_11.setTransform(-23.7,-11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-63,-23.2,126,46.5), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAaBJIAAhSIgzBSIgWAAIAAh1IAWAAIAABSIAzhSIAWAAIAAB1gAgNg2QgGgCgEgFQgEgGgBgFIATAAQAAADADADQADACADAAQAEAAADgCQADgDAAgDIATAAQgBAFgEAGQgEAFgGACQgGADgIAAQgHAAgGgDg");
	this.shape.setTransform(59.8,22.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAaA7IAAhSIgzBSIgWAAIAAh1IAWAAIAABSIAzhSIAWAAIAAB1g");
	this.shape_1.setTransform(48,23.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAcBGIAAgWIhNAAIAAh1IAWAAIAABgIAqAAIAAhgIAWAAIAABgIANAAIAAArg");
	this.shape_2.setTransform(37,24.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAiA7IgMgeIgrAAIgMAeIgYAAIAxh1IARAAIAxB1gAANAHIgNghIgMAhIAZAAg");
	this.shape_3.setTransform(24.9,23.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglA7IAAh1IAhAAQANAAAJAEQAIAEAFAGQAEAGABAGIACALQAAAFgCAHQgCAGgFAFQgEAFgJAEQgIADgMAAIgLAAIAAAtgAgPgGIANAAIAGgBQAFgBADgDQAEgDAAgHQAAgIgEgDQgDgDgFgBIgGgBIgNAAg");
	this.shape_4.setTransform(16.2,23.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWA7IAOgeIguhXIAbAAIAeA+IAcg+IAXAAIg1B1g");
	this.shape_5.setTransform(5.8,23.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcA7IAAh1IA5AAIAAAVIgkAAIAABgg");
	this.shape_6.setTransform(-2.8,23.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAaA7IAAhSIgzBSIgWAAIAAh1IAWAAIAABSIAzhSIAWAAIAAB1g");
	this.shape_7.setTransform(-12.8,23.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgKBDIAAgQQgPgBgMgGQgNgHgGgLQgHgMAAgOQAAgPAHgLQAGgMANgGQAMgHAPAAIAAgPIAVAAIAAAPQAPAAAMAHQAMAGAHAMQAHALAAAPQAAAOgHAMQgHALgMAHQgMAGgPABIAAAQgAALAdQAJAAAHgEQAIgEADgHQAEgGAAgIQAAgIgEgHQgDgGgIgFQgHgEgJAAgAgbgaQgHAFgDAGQgFAHAAAIQAAAIAFAGQADAHAHAEQAHAEAKAAIAAg7QgKAAgHAEg");
	this.shape_8.setTransform(-25.6,23.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAVA7IAAgxIgqAAIAAAxIgWAAIAAh1IAWAAIAAAvIAqAAIAAgvIAXAAIAAB1g");
	this.shape_9.setTransform(-37.9,23.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfA1QgOgIgIgOQgIgNAAgSQAAgQAIgOQAIgOAOgIQAOgJARAAQASAAAOAJQAOAIAIAOQAIAOAAAQQAAASgIANQgIAOgOAIQgOAIgSABQgRgBgOgIgAgUgiQgJAFgFAJQgFAKgBAKQABALAFAJQAFAJAJAGQAJAFALAAQAMAAAJgFQAJgGAFgJQAFgJAAgLQAAgKgFgKQgFgJgJgFQgJgFgMgBQgLABgJAFg");
	this.shape_10.setTransform(-50.1,23.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAQA7Igkg0IAAA0IgVAAIAAh1IAVAAIAAAzIAkgzIAaAAIgsA6IAsA7g");
	this.shape_11.setTransform(-60.4,23.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AglA7IAAh1IAhAAQANAAAJAEQAIAEAFAGQAEAGABAGIACALQAAAFgCAHQgCAGgFAFQgEAFgJAEQgIADgMAAIgLAAIAAAtgAgPgGIANAAIAGgBQAFgBADgDQAEgDAAgHQAAgIgEgDQgDgDgFgBIgGgBIgNAAg");
	this.shape_12.setTransform(23.3,0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgfA1QgOgIgIgOQgIgNAAgSQAAgQAIgOQAIgOAOgIQAOgJARAAQASAAAOAJQAOAIAIAOQAIAOAAAQQAAASgIANQgIAOgOAIQgOAIgSABQgRgBgOgIgAgUgiQgJAFgFAJQgFAKgBAKQABALAFAJQAFAJAJAGQAJAFALAAQAMAAAJgFQAJgGAFgJQAFgJAAgLQAAgKgFgKQgFgJgJgFQgJgFgMgBQgLABgJAFg");
	this.shape_13.setTransform(11.7,0.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgnA7IAAh1IBEAAIAAAVIguAAIAAAYIARAAQAMABAHADQAHADAFAFQAEADACAFIACAKIABAGQAAALgFAIQgFAIgJAFQgJAEgMAAgAgRAmIASAAQAGAAADgCQAFgCABgEQACgDAAgEIgBgGQgCgEgEgDQgEgCgGAAIgSAAg");
	this.shape_14.setTransform(0.5,0.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAiA7IAAh1IAWAAIAAB1gAg3A7IAAh1IAWAAIAAAtIARAAQAPABAHAFQAJAFAEAIQADAIAAAJQAAALgFAIQgFAIgIAFQgIAEgMAAgAghAmIARAAQAIAAAFgEQADgEAAgHQAAgHgDgEQgFgEgIAAIgRAAg");
	this.shape_15.setTransform(-11.3,0.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AglA7IAAh1IAcAAIAHAAIAKACQAFABAGAEQAFADAEAGQADAGAAAJQAAAHgCAFQgDAFgDACIgFAEQAKADAFAHQAFAHAAAKQABAJgEAIQgEAIgLAGQgKAFgSAAgAgPAmIAOAAIADAAIAGgCQAEgBACgDQACgDABgGIgBgGQgCgDgEgDQgEgDgHAAIgOAAgAgPgNIAKAAQAGAAADgCQAEgCAAgDIABgFQAAgFgDgDQgCgDgEAAIgFgBIgKAAg");
	this.shape_16.setTransform(-22.4,0.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAaBJIAAhSIgzBSIgWAAIAAh1IAWAAIAABSIAzhSIAWAAIAAB1gAgNg2QgGgCgEgFQgEgGgBgGIATAAQAAAFADACQADACADAAQAEAAADgCQADgCAAgFIATAAQgBAGgEAGQgEAFgGACQgGADgIAAQgHAAgGgDg");
	this.shape_17.setTransform(29.8,-24.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAiA7IAAh1IAWAAIAAB1gAg3A7IAAh1IAWAAIAAAtIARAAQAPABAHAFQAJAFAEAIQADAIAAAJQAAALgFAIQgFAIgIAFQgIAEgMAAgAghAmIARAAQAIAAAFgEQADgEAAgHQAAgHgDgEQgFgEgIAAIgRAAg");
	this.shape_18.setTransform(17.2,-23.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgKA7IAAhgIgWAAIAAgVIBBAAIAAAVIgWAAIAABgg");
	this.shape_19.setTransform(7.1,-23.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAiA7IgMgeIgrAAIgMAeIgYAAIAxh1IARAAIAxB1gAANAHIgNghIgMAhIAZAAg");
	this.shape_20.setTransform(-1.4,-23.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgcA7IAAh1IA5AAIAAAVIgkAAIAABgg");
	this.shape_21.setTransform(-8.6,-23.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgfA1QgOgIgIgOQgIgNAAgSQAAgQAIgOQAIgOAOgIQAOgJARAAQASAAAOAJQAOAIAIAOQAIAOAAAQQAAASgIANQgIAOgOAIQgOAIgSABQgRgBgOgIgAgUgiQgJAFgFAJQgFAKgBAKQABALAFAJQAFAJAJAGQAJAFALAAQAMAAAJgFQAJgGAFgJQAFgJAAgLQAAgKgFgKQgFgJgJgFQgJgFgMgBQgLABgJAFg");
	this.shape_22.setTransform(-19.4,-23.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgnA7IAAh1IBEAAIAAAVIguAAIAAAYIASAAQALABAHADQAIADAEAFQAEADACAFIADAKIAAAGQAAALgFAIQgFAIgJAFQgJAEgLAAgAgRAmIASAAQAGAAAEgCQAEgCABgEQACgDAAgEIgCgGQgBgEgDgDQgFgCgGAAIgSAAg");
	this.shape_23.setTransform(-30.6,-23.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-78.5,-34.9,157.1,69.8), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAaA7IAAhSIgzBSIgWAAIAAh1IAWAAIAABSIAzhSIAWAAIAAB1g");
	this.shape.setTransform(38.8,23.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAaA7IAAhSIgzBSIgWAAIAAh1IAWAAIAABSIAzhSIAWAAIAAB1g");
	this.shape_1.setTransform(26.9,23.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAhA7IghhXIgfBXIgYAAIAvh1IARAAIAvB1g");
	this.shape_2.setTransform(15.3,23.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAiA7IgMgeIgrAAIgMAeIgYAAIAxh1IARAAIAxB1gAANAHIgNghIgMAhIAZAAg");
	this.shape_3.setTransform(3.6,23.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKA7IAAhgIgWAAIAAgVIBBAAIAAAVIgWAAIAABgg");
	this.shape_4.setTransform(-5,23.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAaA7IAAhSIgzBSIgWAAIAAh1IAWAAIAABSIAzhSIAWAAIAAB1g");
	this.shape_5.setTransform(-14.3,23.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUA5QgJgFgGgJQgFgIABgMIAWAAIABAHQACAEAEADQAEADAGAAQAHAAAEgCQAEgDABgDQACgDAAgEIgBgIQgCgEgEgCQgDgCgGAAIgLAAIAAgVIAJAAQAHAAAEgDQADgEAAgGQAAgHgDgDQgEgEgHAAQgFAAgEADQgEADAAAGIgWAAIAAgBQAAgJAEgHQAEgHAIgFQAIgEAMAAQAKAAAIAEQAIAEAFAHQAEAHAAAKQAAAJgFAHQgEAHgIADQAGABAEADQAFAEADAGQADAGAAAIQAAALgFAIQgFAIgKAEQgJAEgLAAQgLAAgJgEg");
	this.shape_6.setTransform(-28.4,23.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAaA7IAAhSIgzBSIgWAAIAAh1IAWAAIAABSIAzhSIAWAAIAAB1g");
	this.shape_7.setTransform(-38.8,23.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAiA7IgMgeIgrAAIgMAeIgYAAIAxh1IARAAIAxB1gAANAHIgNghIgMAhIAZAAg");
	this.shape_8.setTransform(29.3,0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAQA7Igkg0IAAA0IgVAAIAAh1IAVAAIAAAzIAkgzIAaAAIgsA6IAsA7g");
	this.shape_9.setTransform(18.8,0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAaA7IAAhSIgzBSIgWAAIAAh1IAWAAIAABSIAzhSIAWAAIAAB1g");
	this.shape_10.setTransform(7.5,0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAVA7IAAgxIgqAAIAAAxIgVAAIAAh1IAVAAIAAAvIAqAAIAAgvIAXAAIAAB1g");
	this.shape_11.setTransform(-3.8,0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAcA7IgcgpIgbApIgZAAIAog7Igog6IAZAAIAbApIAcgpIAaAAIgqA6IAqA7g");
	this.shape_12.setTransform(-14.7,0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgfA7IAAh1IA/AAIAAAVIgpAAIAAAbIAnAAIAAAVIgnAAIAAAbIApAAIAAAVg");
	this.shape_13.setTransform(-24.2,0.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgKA7IAAhgIgWAAIAAgVIBBAAIAAAVIgWAAIAABgg");
	this.shape_14.setTransform(-31.8,0.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AASA7IAAguIgfAuIgaAAIAhgrQgJgCgHgEQgHgFgFgGQgEgIAAgLIABgKQACgHAFgGQAEgHAJgEQAJgEAOAAIAiAAIAAB1gAgHgiQgFACgCAEQgCAEAAAFQAAAEACAEQACAEAFADQAEACAIAAIANAAIAAgjIgNAAQgIAAgEADg");
	this.shape_15.setTransform(41.1,-23.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAiA7IgMgeIgrAAIgMAeIgYAAIAxh1IARAAIAxB1gAANAHIgNghIgMAhIAZAAg");
	this.shape_16.setTransform(30.7,-23.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAVA7IAAgxIgpAAIAAAxIgXAAIAAh1IAXAAIAAAvIApAAIAAgvIAXAAIAAB1g");
	this.shape_17.setTransform(19.3,-23.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAVA7IAAgxIgqAAIAAAxIgWAAIAAh1IAWAAIAAAvIAqAAIAAgvIAXAAIAAB1g");
	this.shape_18.setTransform(8.4,-23.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgfA1QgOgIgIgOQgIgNAAgSQAAgQAIgOQAIgOAOgIQAOgJARAAQASAAAOAJQAOAIAIAOQAIAOAAAQQAAASgIANQgIAOgOAIQgOAIgSABQgRgBgOgIgAgUgiQgJAFgFAJQgFAKgBAKQABALAFAJQAFAJAJAGQAJAFALAAQAMAAAJgFQAJgGAFgJQAFgJAAgLQAAgKgFgKQgFgJgJgFQgJgFgMgBQgLABgJAFg");
	this.shape_19.setTransform(-3.8,-23.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAcA7IgcgpIgbApIgaAAIApg7Igpg6IAaAAIAbApIAcgpIAZAAIgoA6IAoA7g");
	this.shape_20.setTransform(-15.9,-23.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgWA7IAOgeIguhXIAbAAIAeA+IAcg+IAYAAIg2B1g");
	this.shape_21.setTransform(-27,-23.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAQA7Igkg0IAAA0IgWAAIAAh1IAWAAIAAAzIAkgzIAaAAIgsA6IAsA7g");
	this.shape_22.setTransform(-37.1,-23.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-67.2,-34.9,134.4,69.8), null);


(lib.p5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._5();
	this.instance.parent = this;
	this.instance.setTransform(-150,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p5, new cjs.Rectangle(-150,-145,300,290), null);


(lib.p4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._4();
	this.instance.parent = this;
	this.instance.setTransform(-150,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p4, new cjs.Rectangle(-150,-145,300,290), null);


(lib.p3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._3();
	this.instance.parent = this;
	this.instance.setTransform(-150,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p3, new cjs.Rectangle(-150,-145,300,290), null);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2, new cjs.Rectangle(-150,-145,300,290), null);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(-150,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1, new cjs.Rectangle(-150,-145,300,290), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("AqTBeQgvgrAbhAQAag5BOghQBYglCOAAQAgAAAcAEIAlAFIAPADIgUAkQgsgMgmAAQhIAAg7AVQhQAcgMA5QgHAiAYAeQAgAnBFgEQAWgBAqgOQAzgRAdgYIBIg/QAHgFAHgEQAGgCAIgBIAHAAIBNAAIAZBqIAwhpIBVAAIAxBRIAlhRIBOAAIhFCUIhQAAIgzhWIgmBWIgxAAIAAABIhcAAIgEgbIhUAAIgcAZIg3AAQg/AXhUAAQh4AAg0gvgAjhA/IAxgBIgEgpgAG6CFIAygxIgyhxIBNAAIAVA8IA/g9IBXAAIibCaQgFAFgEABQgFACgNABgAEgB3Ih+AAIBEiUIB+AAQA9AAAWAcQASAXgOAeQgNAbggASQgpAWhCAAIgDAAgAEHBSIAWAAQAaAAAUgGQAggKAGgYQAGgUgUgJQgOgGgWAAIgXAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-68.9,-14.1,138,28.2), null);


(lib.legal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAcIgFgDIgEgFIgCgGIADgBIACAAQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAIABADIADADIADACIAEABIAFgBIAEgDIACgDIABgEIgBgEQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBIgEgCIgHgBIAAgEIAFgBQABAAABgBQAAAAABAAQAAAAABgBQAAAAABAAIACgDIABgEIgBgEIgCgDIgDgCIgEgBIgDABIgDACIgDACIgBADIgBACIgDABIgEgBIACgHIAFgFIAFgDIAGgBIAHABQADABACACIAEAEIABAGIgBAFIgCAEIgDADIgEACQAGAAADAEQACADAAAFQAAAEgBADQgCAEgCACQgDACgDABIgIABIgHgBg");
	this.shape.setTransform(60.1,39.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGAdIgFgBIgDgDIgDgCIACgDIACgBIACAAIACACIAEABIAEAAIAEgBIAEgCQABAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBIABgFIgBgGIgCgDIgEgBIgEgBIgKABIgEgBIAEgbIAbAAIAAAEIgBACIgEABIgQAAIgDAPIAHgBQAFAAADABIAGADQACADABACIABAHQAAAEgBAFQgCADgDACQgCADgEACQgEABgDAAIgFAAg");
	this.shape_1.setTransform(55.4,39.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAGAdIAAgPIgYAAIgBgBIgBgBIgBgEIAbgkIAHAAIAAAkIAJAAIAAAEIAAABIgCABIgHAAIAAAPgAgMAIIASAAIAAgWIAAgCIABgDg");
	this.shape_2.setTransform(50.8,39.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHAcQgEgCgDgEQgDgDgBgGQgCgFAAgIQAAgGACgGQABgGADgDQADgEAEgCIAHgBQAEAAAEABIAHAGQADADABAGQACAGAAAGQAAAIgCAFQgBAGgDADIgHAGQgEABgEAAIgHgBgAgEgVIgEAEIgDAHIgBAKIABALIADAHIAEAEIAEABIAFgBQACgBACgDIADgHIABgLIgBgKQgBgEgCgDQgCgDgCgBIgFgBIgEABg");
	this.shape_3.setTransform(46.2,39.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNAdIAWguIADgEIgdAAIgBAAIgBgBIAAgGIAnAAIAAAEIgBACIAAACIgXAuIgBACIgDABg");
	this.shape_4.setTransform(41.6,39.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHAcQgEgCgDgEQgDgDgBgGQgCgFAAgIQAAgGACgGQABgGADgDQADgEAEgCIAHgBQAEAAAEABIAHAGQADADABAGQACAGAAAGQAAAIgCAFQgBAGgDADIgHAGQgEABgEAAIgHgBgAgEgVIgEAEIgDAHIgBAKIABALIADAHIAEAEIAEABIAFgBQACgBACgDQACgDABgEIABgLIgBgKQgBgEgCgDQgCgDgCgBIgFgBIgEABg");
	this.shape_5.setTransform(36.9,39.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgHAcIgGgEIgEgGQgBgEAAgEQAAgFACgDQABgEADgEIAOgUIABgCIADAAIAHAAIgQAWIgCABIgBACIAFgCIADgBQAEAAADABIAFADQADACABADQABADABAFQgBAEgBADIgEAFIgGAFIgIABIgHgBgAgEAAIgEADIgCADIgBAFIABAEIACAFIADACIAFABIAEgBIAFgCIACgFIABgEIgBgFQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAIgEgCIgFAAIgEAAg");
	this.shape_6.setTransform(32.3,39.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgMAdIARgXIABgCIACgCQgCACgDABIgFABIgGgBIgFgEQgCgBgBgDQgCgDAAgEIACgHIAEgGIAGgEQADgBADAAQAFAAADABQADACADACQACACABAEQACAEAAAEIgBAEIgBAFIgCADIgDAFIgNATIgBABIgDABgAgDgVIgEADIgCADIgBAFQAAAFADADQADACAEAAIAFAAIAEgCIACgEIABgEIgBgFIgDgDIgDgDIgFAAIgDAAg");
	this.shape_7.setTransform(27.5,39.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNAdIAWguIADgEIgdAAIgBAAIgBgBIAAgGIAnAAIAAAEIgBACIAAACIgXAuIgBACIgDABg");
	this.shape_8.setTransform(23,39.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgNAdIAWguIADgEIgdAAIgBAAIgBgBIAAgGIAnAAIAAAEIgBACIAAACIgXAuIgBACIgDABg");
	this.shape_9.setTransform(18.3,39.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAHAdIAAgPIgZAAIgBgBIgBgBIAAgEIAagkIAHAAIAAAkIAIAAIAAAEIAAABIgBABIgHAAIAAAPgAgMAIIATAAIAAgWIAAgCIAAgDg");
	this.shape_10.setTransform(13.6,39.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgHAcQgEgCgDgEQgDgDgBgGQgCgFAAgIQAAgGACgGQABgGADgDQADgEAEgCIAHgBQAEAAAEABIAHAGQADADABAGQACAGAAAGQAAAIgCAFQgBAGgDADIgHAGQgEABgEAAIgHgBgAgEgVIgEAEIgDAHIgBAKIABALIADAHIAEAEIAEABIAFgBQACgBACgDQACgDABgEIABgLIgBgKQgBgEgCgDQgCgDgCgBIgFgBIgEABg");
	this.shape_11.setTransform(9,39.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgNAdIAAgGIAMAAIAAglIAAgEIgJAJIgCAAIgBAAIAAAAIgBgBIgCgDIAQgPIAGAAIAAAzIALAAIAAAGg");
	this.shape_12.setTransform(4.4,39.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAPAdIAAgaIgdAAIAAAaIgJAAIAAg5IAJAAIAAAaIAdAAIAAgaIAJAAIAAA5g");
	this.shape_13.setTransform(89.5,29.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTAdIAAg5IASAAQAEAAAEACQAEABADACQADADABADQABADABAEQgBAEgBAEIgEAEIgHAEQgEACgEAAIgJAAIAAAVgAgKABIAJAAIAEgBIAFgBIADgEIAAgFIAAgFIgDgDIgEgCIgFgBIgJAAg");
	this.shape_14.setTransform(84.3,29.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgQAdIAAg5IAiAAIAAAHIgaAAIAAAyg");
	this.shape_15.setTransform(79.8,29.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgKAbQgGgCgDgEQgEgEgCgFQgCgGAAgGQAAgFACgGQACgFAEgEIAJgGQAFgCAFAAQAHAAAEACQAGACADAEQAEAEADAFQABAGAAAFQAAAGgBAGQgDAFgEAEQgDAEgGACQgEACgHAAQgFAAgFgCgAgHgUQgEACgDADIgDAHQgCAEAAAEQAAAFACAEIADAHQADADAEACQAEABADAAQAEAAAFgBQADgCACgDQAEgDABgEQABgEAAgFQAAgEgBgEQgBgEgEgDQgCgDgDgCQgFgBgEAAQgDAAgEABg");
	this.shape_16.setTransform(74.1,29.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgGAdIgFgCIgDgCIgDgCIACgDIACgCIACABIACACIAEABIAEABIAEgBIAEgDQABAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBIABgGIgBgEIgCgEIgEgBIgEgBIgKABIgEgBIAEgbIAbAAIAAAEIgBACIgEABIgQAAIgDAPIAHgCQAFAAADACIAGADQACADABACIABAHQAAAEgBAEQgCAEgDADQgCACgEABQgEACgDAAIgFAAg");
	this.shape_17.setTransform(66.5,29.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgNAdIAAgGIAMAAIAAglIAAgEIgJAJIgCAAIgBAAIAAAAIgBgBIgCgDIAQgPIAGAAIAAAzIALAAIAAAGg");
	this.shape_18.setTransform(61.9,29.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgHAcQgEgCgDgEQgDgDgBgGQgCgFAAgIQAAgGACgGQABgGADgDQADgEAEgCIAHgBQAEAAAEABIAHAGQADADABAGQACAGAAAGQAAAIgCAFQgBAGgDADIgHAGQgEABgEAAIgHgBgAgEgVIgEAEIgDAHIgBAKIABALIADAHIAEAEIAEABIAFgBQACgBACgDIADgHIABgLIgBgKQgBgEgCgDQgCgDgCgBIgFgBIgEABg");
	this.shape_19.setTransform(57.2,29.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgSAdIAAgCIAAgCIABgCIARgSIAFgEIADgEIACgEIAAgFIAAgEIgCgDIgEgCIgEgBIgCABIgEACIgCADIgBACIgCACIgCABIgEgBIACgHIAEgFIAGgDIAGgBIAHABIAFADQADACABAEQABADAAADIgBAGIgCAFIgEAEIgFAFIgNAPIADgBIADAAIASAAIACAAIAAADIAAAEg");
	this.shape_20.setTransform(52.5,29.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgNAdIAAgGIAMAAIAAglIAAgEIgJAJIgCAAIgBAAIAAAAIgBgBIgCgDIAQgPIAGAAIAAAzIALAAIAAAGg");
	this.shape_21.setTransform(48,29.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgGAdIgFgCIgDgCIgDgCIACgDIACgCIACABIACACIAEABIAEABIAEgBIAEgDQABAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBIABgGIgBgEIgCgEIgEgBIgEgBIgKABIgEgBIAEgbIAbAAIAAAEIgBACIgEABIgQAAIgDAPIAHgCQAFAAADACIAGADQACADABACIABAHQAAAEgBAEQgCAEgDADQgCACgEABQgEACgDAAIgFAAg");
	this.shape_22.setTransform(43.2,29.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAHAdIAAgPIgYAAIgCgBIgBgBIgBgEIAbgkIAHAAIAAAkIAIAAIAAAEIAAABIgBABIgHAAIAAAPgAgNAIIAUAAIAAgWIAAgCIAAgDg");
	this.shape_23.setTransform(38.6,29.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgHAcQgEgCgDgEQgDgDgBgGQgCgFAAgIQAAgGACgGQABgGADgDQADgEAEgCIAHgBQAEAAAEABIAHAGQADADABAGQACAGAAAGQAAAIgCAFQgBAGgDADIgHAGQgEABgEAAIgHgBgAgEgVIgEAEIgDAHIgBAKIABALIADAHIAEAEIAEABIAFgBQACgBACgDIADgHIABgLIgBgKQgBgEgCgDQgCgDgCgBIgFgBIgEABg");
	this.shape_24.setTransform(34,29.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgNAdIAWguIADgEIgdAAIgBAAIgBgBIAAgGIAnAAIAAAEIgBACIAAACIgXAuIgBACIgDABg");
	this.shape_25.setTransform(29.4,29.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgNAdIAWguIADgEIgdAAIgBAAIgBgBIAAgGIAnAAIAAAEIgBACIAAACIgXAuIgBACIgDABg");
	this.shape_26.setTransform(24.7,29.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAPAdIAAgaIgdAAIAAAaIgIAAIAAg5IAIAAIAAAaIAdAAIAAgaIAJAAIAAA5g");
	this.shape_27.setTransform(17.3,29.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAPAdIAAgaIgdAAIAAAaIgIAAIAAg5IAIAAIAAAaIAdAAIAAgaIAIAAIAAA5g");
	this.shape_28.setTransform(11.2,29.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAPAdIAAgnIAAgEIAAgEIgBADIgCADIgZAmIgBACIgCABIgGAAIAAg5IAIAAIAAAnIAAAEIAAAEIABgDIABgDIAZgmIACgCIADgBIAFAAIAAA5g");
	this.shape_29.setTransform(5.1,29.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgHAcQgEgBgCgCIgEgFIgBgHQAAgFACgEQADgEAGAAQgFgCgCgDQgDgEAAgEIACgGIADgFIAGgDIAGgBIAHABIAGADIADAFIABAGQAAAEgCAEQgCADgFACQAGAAADAEQACAEAAAFQAAAEgBADQgBADgDACQgDACgDABIgIABIgHgBgAgDADIgEACIgDADIgBAFIABAEIACADIAEADIAEAAIAFAAIAEgDIACgDIABgEIgBgFIgDgDIgEgCIgEgBIgDABgAgDgWIgEACIgBADIgBAEIAAAEIACADIADACIAEABIAFgBIADgCIABgDIABgEIgBgEIgCgDIgDgCIgEAAIgDAAg");
	this.shape_30.setTransform(135.6,18.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgBAFIgCgBIgBgCIAAgCIAAgBIABgCIACgBIABAAIACAAIABABIABACIABABIgBACIgBACIgBABIgCAAIgBAAg");
	this.shape_31.setTransform(130.3,21);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AARAbIAAgOIggAAIAAAMIgCABIgBABIgEAAIAAgOIAHAAIAAgBIADgBIACgDIATAAIAAgcIgMAAIAAAKIgCAJIgDAFIgCAEIgFAAIgGAAIADgBIADgCIACgEIACgFIABgJIABgNIAZAAIAAAiIAHAAIAAARIAAACIgBAAgAgPANIgHAAIAAgFIABAEIAEAAIABAAIABAAIAAABgAgWANgAgPAMgAgPAMIgBAAIgBAAIgEAAIgBgEIAAAAIABAAIAAAAIAAAAIAGAAIAAAEgAgPAIIAFAAIgCADIgDABgAAJAIIgTAAIACgEIADgFIACgJIAAgKIAMAAIAAAcgAgVAIgAgWAIg");
	this.shape_32.setTransform(126.8,20.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgDAJIAAgBIAAAAIAAgBIABgCIABgBIABgCIAAgCIAAAAIgBAAIgCgBIAAgCIgBgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAgBAAAAIADABIABABIABADIAAACIAAADIgCAEIgDADIgCAEg");
	this.shape_33.setTransform(121.4,21.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAKAdIAAgbIAAgCIAAgBIAAABIgBABIgBABIgDADIgDAEIgCAFIgJANIgBABIgCABIgEAAIAAgoIAHAAIAAAaIAAACIAAACIACgDIAAgBIACgDIAEgEIACgFIAJgMIABgBIACgBIAFAAIAAAogAgEgRIgDgCIgCgDIgBgDIAAgCIACgBIAEAAIAAAEIABACIACABIACAAIACAAIACgBIABgCIABgEIAEAAIABABIAAACIgBADIgBADIgFACIgEAAIgFAAg");
	this.shape_34.setTransform(118.2,18.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgJADIAAgFIATAAIAAAFg");
	this.shape_35.setTransform(114.4,19.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgSAdIAAgCIAAgDIABgBIARgSIAFgEIADgEIACgEIAAgFIAAgEIgCgDIgEgCIgEgBIgCABIgEACIgCADIgBADIgCABIgCABIgEgBIACgHIAEgFIAGgDIAGgBIAHABIAFADQADADABACQABADAAAEIgBAGIgCAFIgEAEIgFAFIgNAPIADgBIADAAIASAAIACAAIAAACIAAAFg");
	this.shape_36.setTransform(110.5,18.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAKAdIAAgbIAAgCIAAgBIgBABIAAABIgBABIgCADIgEAEIgCAFIgJANIgBABIgCABIgEAAIAAgoIAHAAIAAAaIAAACIAAACIABgDIABgBIACgDIAEgEIACgFIAJgMIABgBIACgBIAFAAIAAAogAgEgRIgDgCIgCgDIgBgDIAAgCIACgBIAEAAIAAAEIABACIACABIABAAIADAAIACgBIABgCIABgEIAEAAIABABIAAACIgBADIgCADIgDACIgGAAIgEAAg");
	this.shape_37.setTransform(103.9,18.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAKAUIAAgaIAAgBIAAgCIAAABIgBABIgBACIgDADIgDADIgCAFIgJAMIgBACIgCAAIgEAAIAAgnIAHAAIAAAaIAAABIAAACIACgDIAAgBIACgDIAEgDIACgFIAJgMIABgCIACAAIAFAAIAAAng");
	this.shape_38.setTransform(99.3,19.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAMAUIgDAAIgCgCIgHgNIgCgCIgDgBIgEAAIAAASIgIAAIAAgnIAIAAIAAARIAEAAIACgBIADgCIAHgMIABgCIACAAIAGAAIgKAPIgCADIgDABIAEABIACACIALARg");
	this.shape_39.setTransform(95.2,19.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgFATQgDgBgCgDQgDgCgBgEQgCgEAAgFQAAgEACgDQABgEACgDIAGgEQAEgCAEAAIAHABIAGAEIgCADIgBABIAAAAIgCAAIgCgCIgCgBIgEAAIgEABIgEADIgCAFIgBAFIABAGQAAABABABQAAAAAAABQAAAAABABQAAAAAAABIAEADIAEABIAEgBIADgBIACgBIABgBIACABIACADIgDACIgEACIgEABIgFABIgGgCg");
	this.shape_40.setTransform(91,19.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAKAUIAAgTIgSAAIAAATIgIAAIAAgnIAIAAIAAAQIASAAIAAgQIAHAAIAAAng");
	this.shape_41.setTransform(86.8,19.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAKAUIAAgaIAAgBIABgCIgCABIAAABIgBACIgDADIgCADIgDAFIgJAMIgCACIgBAAIgFAAIAAgnIAIAAIAAAaIAAABIAAACIABgDIABgBIADgDIACgDIADgFIAKgMIABgCIABAAIAEAAIAAAng");
	this.shape_42.setTransform(82.3,19.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAYAbIAAgOIg2AAIAAgnIAHAAIAAAiIAQAAIAAgiIAHAAIAAAiIAQAAIAAgiIAIAAIAAAiIAHAAIAAARIgBACIgBAAg");
	this.shape_43.setTransform(76.7,20.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgHATIgGgEIgEgGQgCgEABgFQgBgEACgEQACgEACgCQACgDAEgCIAHgBIAIABQAEACADADQACACABAEIABAIIgBAJIgDAGIgHAEIgIACQgDAAgEgCgAgIgKQgCAEAAAGQAAAHACAEQAEAEAEAAQAGAAADgEQADgEAAgHQAAgGgDgEQgDgEgGAAQgEAAgEAEg");
	this.shape_44.setTransform(70.7,19.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgTAdIAAg5IASAAQAEAAAEACQAEABADACQADADABADQABADABAEQgBAEgBAEIgEAEIgHAEQgEACgEAAIgJAAIAAAVgAgKABIAJAAIAEgBIAFgBIADgEIAAgFIAAgFIgDgDIgEgCIgFgBIgJAAg");
	this.shape_45.setTransform(66.3,18.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AARAbIAAgOIggAAIAAgBIgBAAIAAAAIgGAAIAAgEIAAAEIAGAAIAAAAIABAAIAAABIgHAAIAHAAIAAAMIgBABIgCABIgEAAIAAgOIAAgFIAAAAIAAAAIABAAIAAAAIADgBIADgCIABgEIACgFIACgJIABgNIAZAAIAAAiIAHAAIAAARIAAACIgBAAgAgPAMIACgBIADgDIATAAIAAgcIgMAAIgBAKIgBAJIgCAFIgDAEIADgEIACgFIABgJIABgKIAMAAIAAAcIgTAAIgFAAIgGAAIAGAAIAAAEgAgPAIIAFAAIgDADIgCABgAgPAIg");
	this.shape_46.setTransform(59.1,20.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgDAUIgEgBIgEgCIgDgCIACgDIABgBIACABIACABIADABIAEABIADgBIADgBIABgCIABgDQAAgDgCgCQgDgBgEAAIgEAAIAAgEIAEAAQAEAAACgCQABgBAAAAQABAAAAgBQAAAAABgBQAAgBAAAAIgBgDIgCgBIgCgCIgDAAIgEAAIgDABIgCABIgBABIgBAAIgBgBIgBgDIAFgEIAIgBIAGABIAFACIACAEIABAEIAAACIgBADIgCACIgEACQAEAAACACQACADAAAEIgBAFIgDAEIgGACIgFABIgDgBg");
	this.shape_47.setTransform(54.7,19.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgFATIgHgEIgEgHQgBgEAAgEQAAgEABgEIAEgGQACgDAEgBQAEgCADAAIAHABQADABACADQADACABADQABAEAAAEIAAACIgCAAIgaAAIACAHQAAACACACQABABAAAAQAAABABAAQAAAAABAAQAAABABAAIAEABIAFgBIADgBIACgBIACgBIABABIACADIgDACIgEACIgEABIgFABQgDAAgDgCgAgGgMQgDADAAAFIAUAAIAAgEIgCgDIgEgDIgEAAQgEAAgDACg");
	this.shape_48.setTransform(50.9,19.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgHATIgGgEIgEgGQgCgEAAgFQAAgEACgEQABgEADgCQADgDADgCIAIgBIAIABQADACACADQADACACAEIABAIIgBAJIgFAGIgFAEIgIACQgEAAgEgCgAgHgKQgEAEAAAGQAAAHAEAEQACAEAGAAQAFAAADgEQADgEAAgHQAAgGgDgEQgDgEgFAAQgGAAgCAEg");
	this.shape_49.setTransform(46.5,19.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAEAAQABAAAAABQAAAAABAAQAAAAAAAAQAAABAAAAIABAEIAGgFQADgCAEAAQAEABACABIAFAEQACADABAEIABAJIgBAHIgEAGIgFAFQgDABgEABIgGgBIgEgEIAAARgAgFgTIgEAFIAAASQABACADABIAFABQAFAAADgDQADgEAAgGIgBgHIgCgFIgEgDIgDAAQgDAAgDABg");
	this.shape_50.setTransform(42.1,20.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAOAdIAAgyIgbAAIAAAyIgJAAIAAg5IAsAAIAAA5g");
	this.shape_51.setTransform(36.8,18.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgDAJIAAgBIAAAAIAAgBIABgCIABgBIABgCIAAgCIAAAAIgBAAIgBgBIgBgCIgBgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAAgBAAAAIADABIABABIABADIAAACIAAADIgCAEIgDADIgBAEg");
	this.shape_52.setTransform(30.9,21.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgIAUIgEgCIgCgDIgBgFIABgEQABgCADgCIAIgCIALgBIAAgEQAAgEgCgCQgCgCgEgBIgDABIgDACIgDABIgCABIgBgBIgBgBIgBgDQADgCAEgCQAEgCAEAAQADAAADACQADAAABACIADAGIABAFIAAAZIgDAAIgCAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIgBgDIgDACIgDACIgDABIgEABIgEgBgAABADIgFACIgDACIgBADIABACIABADIACABIADAAIACAAIADgBIACgCIADgDIAAgIIgIABg");
	this.shape_53.setTransform(27.8,19.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgPAUIAAgnIAPAAIAGAAIAFACIACAEIABADIgBADIgBADIgCACIgEACQAEAAADACQACADAAADIgBAGIgDADIgFADIgFAAgAgHAPIAIAAQADAAACgCQADgCAAgDIgBgCIgBgCIgDgCIgDAAIgIAAgAgHgCIAHAAIACAAIADgCIABgCIABgDIAAgCIgCgBIgCgCIgDAAIgHAAg");
	this.shape_54.setTransform(24.1,19.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAMAUIgDAAIgCgCIgHgNIgCgCIgDgBIgEAAIAAASIgIAAIAAgnIAIAAIAAARIAEAAIACgBIADgCIAHgMIABgCIACAAIAGAAIgKAPIgCADIgDABIAEABIACACIALARg");
	this.shape_55.setTransform(20.1,19.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgFATQgDgBgCgDQgDgCgBgEQgCgEAAgFQAAgEACgDQABgEACgDIAGgEQAEgCAEAAIAHABIAGAEIgCADIgBABIAAAAIgCAAIgCgCIgCgBIgEAAIgEABIgEADIgCAFIgBAFIABAGQAAABABABQAAAAAAABQAAAAABABQAAAAAAABIAEADIAEABIAEgBIADgBIACgBIABgBIACABIACADIgDACIgEACIgEABIgFABIgGgCg");
	this.shape_56.setTransform(16,19.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgHATIgGgEIgEgGQgCgEAAgFQAAgEACgEQABgEADgCQADgDADgCIAIgBIAHABQAEACACADQADACACAEIABAIIgBAJIgFAGIgGAEIgHACQgEAAgEgCgAgHgKQgEAEAAAGQAAAHAEAEQACAEAGAAQAFAAADgEQADgEAAgHQAAgGgDgEQgDgEgFAAQgGAAgCAEg");
	this.shape_57.setTransform(11.7,19.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAXAdIAAgpIAAgBIAAgCIgTAiIgCABIgBABIgBAAQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAIgUgjIAAADIAAABIAAApIgHAAIAAg5IAGAAIACABIABABIATAhIABAFIABgCIABgDIATghIABgBIACgBIAGAAIAAA5g");
	this.shape_58.setTransform(5.7,18.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgBAFIgCgBIgBgCIAAgCIAAgBIABgCIACgBIABAAIACAAIABABIABACIABABIgBACIgBACIgBABIgCAAIgBAAg");
	this.shape_59.setTransform(121,10.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgMAUIAAgnIAZAAIAAAFIgSAAIAAAig");
	this.shape_60.setTransform(118.6,8.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgDAJIgBgBIAAAAIABgBIABgBIACgCIAAgCIAAgCIAAAAIgBAAIgBgBIgCgBIAAgCQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAAAAAAgBIACABIACABIABACIAAADIgBADIgBAEIgDADIgBADg");
	this.shape_61.setTransform(113.8,11);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgMAdIARgXIABgCIACgCQgCACgDABIgFABIgGgBIgFgDQgCgCgBgDQgCgDAAgEIACgHIAEgGIAGgEQADgBADAAQAFAAADABQADABADADQACACABAEQACADAAAEIgBAGIgBADIgCAEIgDAEIgNAUIgBACIgDAAgAgDgVIgEACIgCAEIgBAEQAAAGADADQADACAEAAIAFAAIAEgCIACgEIABgFIgBgEIgDgEIgDgCIgFAAIgDAAg");
	this.shape_62.setTransform(110.5,8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgNAdIAAgGIAMAAIAAglIAAgEIgJAJIgCAAIgBAAIAAAAIgBgBIgCgDIAQgPIAGAAIAAAzIALAAIAAAGg");
	this.shape_63.setTransform(106,8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAHAdIAAgPIgYAAIgCgBIgBgBIAAgEIAagkIAHAAIAAAkIAIAAIAAAEIAAABIgBABIgHAAIAAAPgAgNAIIAUAAIAAgWIAAgCIAAgDg");
	this.shape_64.setTransform(101.2,8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgGAcIgFAAIgDgCIgDgDIACgEIACgBIACABIACABIAEACIAEAAIAEgBIAEgCQABAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBIABgGIgBgFIgCgDIgEgBIgEgBIgKABIgEgBIAEgbIAbAAIAAADIgBADIgEABIgQAAIgDAOIAHgBQAFABADABIAGAEQACACABACIABAHQAAAFgBAEQgCADgDADQgCADgEABQgEABgDAAIgFgBg");
	this.shape_65.setTransform(96.6,8.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgNAdIAAgGIAMAAIAAglIAAgEIgJAJIgCAAIgBAAIAAAAIgBgBIgCgDIAQgPIAGAAIAAAzIALAAIAAAGg");
	this.shape_66.setTransform(92,8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgNAdIAAgGIAMAAIAAglIAAgEIgJAJIgCAAIgBAAIAAAAIgBgBIgCgDIAQgPIAGAAIAAAzIALAAIAAAGg");
	this.shape_67.setTransform(87.4,8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AABAPIgBgBIAAgCIAGgLIABAAIAAgBIAAAAIgBAAIgGgLIAAgCIABgBIACgBIAKAPIAAABIgKAPgAgKAPIgCgBIABgCIAGgLIAAAAIABgBIgBAAIAAAAIgGgLIgBgCIACgBIACgBIAJAPIAAABIgJAPg");
	this.shape_68.setTransform(81.3,8.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgBAFIgCgBIgBgCIAAgCIAAgBIABgCIACgBIABAAIACAAIACABIABACIAAABIAAACIgBACIgCABIgCAAIgBAAg");
	this.shape_69.setTransform(78.6,10.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgRAdIAAg5IAiAAIAAAHIgZAAIAAAyg");
	this.shape_70.setTransform(75.8,8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgBAFIgCgBIgBgCIAAgCIAAgBIABgCIACgBIABAAIACAAIACABIABACIAAABIAAACIgBACIgCABIgCAAIgBAAg");
	this.shape_71.setTransform(72.4,10.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AAPAdIAAgaIgdAAIAAAaIgJAAIAAg5IAJAAIAAAaIAdAAIAAgaIAJAAIAAA5g");
	this.shape_72.setTransform(68.4,8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgBAFIgCgBIgBgCIAAgCIAAgBIABgCIACgBIABAAIACAAIACABIAAACIABABIgBACIAAACIgCABIgCAAIgBAAg");
	this.shape_73.setTransform(64.4,10.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgHAbQgFgCgEgEQgDgEgCgFQgCgFAAgHQAAgFACgGQACgFAEgEQADgEAGgCQAFgCAFAAQAGAAAFACQAFACADADIgDAEIAAABIgBAAIgCgBIgDgCIgEgBIgGgBQgEAAgDABQgEACgCADIgEAHQgCAEAAAEQAAAFACAEQABAFADACQADADADACQADABAEAAIAEAAIAEgBIADgCIADgCIABAAIABAAIABAAIADAEQgDAEgGACQgFACgHAAQgFAAgFgCg");
	this.shape_74.setTransform(60.8,8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AAPAdIAAgnIABgEIAAgEIgCADIgCADIgZAmIgBACIgCABIgHAAIAAg5IAJAAIAAAnIAAAEIgBAEIACgDIABgDIAZgmIACgCIADgBIAFAAIAAA5g");
	this.shape_75.setTransform(53,8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AAXAkIAAgOIgtAAIAAALIAAACIgCABIgGAAIAAgVIAHAAIACgCIACgDIACgHIACgIIACgNIABgRIAhAAIAAAyIAKAAIAAASIgBACIgDABgAgGgLIgCALIgDAJIgDAGIAbAAIAAgrIgSAAIgBARg");
	this.shape_76.setTransform(46.7,8.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAPAdIAAgaIgdAAIAAAaIgJAAIAAg5IAJAAIAAAaIAdAAIAAgaIAJAAIAAA5g");
	this.shape_77.setTransform(40.6,8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAVAdIgCgBIgBgBIgFgOIgYAAIgGAOIgBABIgBABIgHAAIAXg5IAIAAIAWA5gAAAgRIgBADIgIAVIATAAIgIgVIgBgDIgBgDIAAADg");
	this.shape_78.setTransform(34.8,8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AAQAdIgCgBIgCgCIgOgVIgCgCIgDAAIgHAAIAAAaIgIAAIAAg5IAIAAIAAAZIAGAAIACAAIABAAIABgBIACgBIANgUIACgCIACgBIAHAAIgRAYQgCADgDABIADABIADADIARAZg");
	this.shape_79.setTransform(29.7,8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AAAABIAAgBIAJgPIADABIABABIAAACIgHALIgBAAIABABIAHALIAAACIgBABIgDABgAgMABIAAgBIAKgPIACABIABABIgBACIgFALIgBAAIABABIAFALIABACIgBABIgCABg");
	this.shape_80.setTransform(24.9,8.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgLAbQgEgCgFgEQgDgEgCgFQgDgGAAgGQAAgFADgGQACgFADgEIAJgGQAGgCAFAAQAGAAAGACQAFACAEAEQADAEACAFQADAGAAAFQAAAGgDAGQgCAFgDAEQgEAEgFACQgGACgGAAQgFAAgGgCgAgHgUQgEACgCADIgFAHQgBAEAAAEQAAAFABAEIAFAHQACADAEACQADABAEAAQAEAAAEgBQAEgCACgDQADgDACgEQABgEAAgFQAAgEgBgEQgCgEgDgDQgCgDgEgCQgEgBgEAAQgEAAgDABg");
	this.shape_81.setTransform(18,8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgLAbQgFgCgEgEQgDgEgDgFQgCgGAAgGQAAgFACgGQADgFADgEIAJgGQAFgCAGAAQAGAAAGACQAFACAEAEQADAEACAFQACAGABAFQgBAGgCAGQgCAFgDAEQgEAEgFACQgGACgGAAQgGAAgFgCgAgHgUQgEACgCADIgFAHQgBAEAAAEQAAAFABAEIAFAHQACADAEACQAEABADAAQAEAAAEgBQAEgCADgDQACgDABgEQACgEAAgFQAAgEgCgEQgBgEgCgDQgDgDgEgCQgEgBgEAAQgDAAgEABg");
	this.shape_82.setTransform(11.6,8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgLAbQgEgCgFgEQgDgEgDgFQgCgGAAgGQAAgFACgGQADgFADgEIAJgGQAFgCAGAAQAGAAAGACQAFACAEAEQADAEACAFQACAGAAAFQAAAGgCAGQgCAFgDAEQgEAEgFACQgGACgGAAQgGAAgFgCgAgHgUQgEACgCADIgFAHQgBAEAAAEQAAAFABAEIAFAHQACADAEACQADABAEAAQAEAAAEgBQAEgCADgDQACgDABgEQACgEAAgFQAAgEgCgEQgBgEgCgDQgDgDgEgCQgEgBgEAAQgEAAgDABg");
	this.shape_83.setTransform(5.2,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal, new cjs.Rectangle(0,1,141,45.3), null);


(lib.bg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("AyqaBMAAAg0BMAlVAAAMAAAA0Bg");
	this.shape.setTransform(120,170,1.004,1.021);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg2, new cjs.Rectangle(0,0,240,340), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,240,400), null);


// stage content:
(lib._160x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EAMbAuzI41AAMAAAhdlIY1AAg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(380));

	// legal
	this.instance = new lib.legal();
	this.instance.parent = this;
	this.instance.setTransform(116.3,557.2,1,1,0,0,0,111.1,10.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(380));

	// t5
	this.instance_1 = new lib.t5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(90,174.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(300).to({_off:false},0).to({x:80,alpha:1},6,cjs.Ease.get(1)).wait(67).to({x:70,alpha:0},6,cjs.Ease.get(1)).wait(1));

	// t4
	this.instance_2 = new lib.t4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(90,174.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(225).to({_off:false},0).to({x:80,alpha:1},6,cjs.Ease.get(1)).wait(67).to({x:70,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(75));

	// t3
	this.instance_3 = new lib.t3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(90,174.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(150).to({_off:false},0).to({x:80,alpha:1},6,cjs.Ease.get(1)).wait(67).to({x:70,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(150));

	// t2
	this.instance_4 = new lib.t2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(90,174.7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(75).to({_off:false},0).to({x:80,alpha:1},6,cjs.Ease.get(1)).wait(67).to({x:70,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(225));

	// t1
	this.instance_5 = new lib.t1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(90,174.7);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:80,alpha:1},6,cjs.Ease.get(1)).wait(67).to({x:70,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(300));

	// p5
	this.instance_6 = new lib.p5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(80,374.5,0.9,0.9);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(300).to({_off:false},0).to({scaleX:1,scaleY:1,x:61,alpha:1},6,cjs.Ease.get(1)).wait(67).to({x:60},0).to({scaleX:0.9,scaleY:0.9,alpha:0},6,cjs.Ease.get(1)).wait(1));

	// p4
	this.instance_7 = new lib.p4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(100,374.5,0.9,0.9);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(225).to({_off:false},0).to({scaleX:1,scaleY:1,x:80,alpha:1},6,cjs.Ease.get(1)).wait(67).to({scaleX:0.9,scaleY:0.9,x:70,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(75));

	// p3
	this.instance_8 = new lib.p3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(100,374.5,0.9,0.9);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(150).to({_off:false},0).to({scaleX:1,scaleY:1,x:80,alpha:1},6,cjs.Ease.get(1)).wait(67).to({scaleX:0.9,scaleY:0.9,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(150));

	// p2
	this.instance_9 = new lib.p2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(100,374.5,0.9,0.9);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(75).to({_off:false},0).to({regY:0.1,scaleX:1,scaleY:1,x:70,alpha:1},6,cjs.Ease.get(1)).wait(67).to({regY:0},0).to({scaleX:0.9,scaleY:0.9,x:60,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(225));

	// p1
	this.instance_10 = new lib.p1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(100,374.5,0.9,0.9);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleX:1,scaleY:1,x:90,alpha:1},6,cjs.Ease.get(1)).wait(67).to({scaleX:0.9,scaleY:0.9,x:80,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(300));

	// logo
	this.instance_11 = new lib.logo();
	this.instance_11.parent = this;
	this.instance_11.setTransform(80,54.2,0.87,0.869);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(380));

	// bg2
	this.instance_12 = new lib.bg2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(80,360,0.667,1.412,0,0,0,120,170);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(380));

	// bg
	this.bg = new lib.bg();
	this.bg.parent = this;
	this.bg.setTransform(80,300,0.667,1.5,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(380));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(45,299.5,270,601);
// library properties:
lib.properties = {
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/160x600_atlas_.jpg", id:"160x600_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;